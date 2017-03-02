var gulp = require('gulp');
var gulpTs= require('gulp-typescript');
var tsProject_server = gulpTs.createProject('./server/tsconfig.json');
var tsProject_client = gulpTs.createProject('./client/app/tsconfig.json');
var gulpSm = require('gulp-sourcemaps');
var gulpClean = require('gulp-clean');

var browserSync = require('browser-sync');
  console.log("Initiating browser sync configuration...");
    browserSync.init(
        {
        proxy: "http://localhost:3036"                       
        }
    );

var nodemon = require('gulp-nodemon');

// server (watch_server)
//*************************************************************************
// 1. When started - initial compile,
// 2. Watch for changes in server/**/*.ts - recompile
// 2. Start nodemon on server/index.js

gulp.task('compile_server_app', function () {
    console.log("Compiling server/*.ts");
        
    return gulp.src(['./server/**/*.ts'])
        .pipe(tsProject_server())
        .pipe(gulp.dest('./server'));
});

gulp.task('browser_sync_server', ['compile_server_app'], function(){
    browserSync.reload();
});

gulp.task('watch_server_changes', ['browser_sync_server'], function(){
    console.log("Watch for changes in ./server/**");
    return gulp.watch(['./server/**/*.ts'], ['browser_sync_server']);
});

gulp.task('watch_server', ['watch_server_changes'], function(){
    console.log("Watching server");
    return nodemon({
    script: './server/index.js',
    ignore: ['./client'],
        })
        .on('start', function(){
            console.log("Nodemon started on index.js....");    
        })
        .on('crash', function(){
            console.log("Nodemon crashed on any reason...");
        });
});

// client (watch_client)
//**********************************************************************
// 1. When started - initial compile, clean everything in ./client/app/js, then compile everything from client/app/ts
// 2. Start watching file changes in client/app/ts
// 3. When changes happen, recompile, sync browser

gulp.task('compile_client_app', function(){
  
    console.log('Compiling client application...');
    return gulp.src(['client/app/**/*.ts'])
        .pipe(gulpSm.init())
        .pipe(tsProject_client())
        .pipe(gulpSm.write('./'))
        .pipe(gulp.dest('client/app'));    
})

gulp.task('browser_sync', ['compile_client_app'], function(){
    browserSync.reload();
});

gulp.task('watch_client', ['compile_client_app'], function(){
    return gulp.watch(['client/app/**/*.ts'], ['browser_sync']);
});

gulp.task('watch_client_html', function(){  
    return gulp.watch(['client/app/**/*.html'], ['browser_sync']);
});
//***********************************************************************

gulp.task('default', ['watch_server', 'watch_client', 'watch_client_html'], function() {
    console.log("Watching all...");
});

/*gulp.task('default', ['watch_server'], function() {
    console.log("Watching all...");
});*/


 //gulp.task('copy', function () {
   //     return gulp.src(['server/**/*'], {
     //       base: 'server'
       // }).pipe(gulp.dest('server_deploy'));
    //});
//gulp.task('compile_everything', ['compile_server_app', 'compile_client_app'], function(){
  //  console.log("Compiling everything !!!");
//})
