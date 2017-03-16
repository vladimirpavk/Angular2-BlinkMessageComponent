# Angular2-FlashBox component
## example application
FlashBox component is angular2 component provided to display simple user information messages.

Application skeleton used for development can be found here [Angular2 - Application skeleton](https://github.com/vladimirpavk/Angular2-Skeleton/)

### Prerequisites
Must have node and npm installed.

### How to start application
Install node dependencies in your project root directory (this is where the 'package.json' file is located) using:
```sh
$ npm install
``` 
Install typescript definitions using:
```sh
$ typings install
```

Start application with 
```sh
$ gulp
```
Application will be initialy compiled and started. By default the server is listening on port 3000. 
Application can be accessed through your web browser on url **localhost:3000**. 

### How to use FlashBox component
FlashBox component is (for now only) part of the CommonComponents module.

In order to use the module you must configure your module loader. In case you use **systemjs** module loader add the following declerations:
```
module loader declerations here
```

In your application module definition file import CommonComponents module.
```
... 
Import { CommonComponentsModule} from '/commoncomponents.module';
...
@NgModule({
    ...
     imports:      [ CommonComponentsModule ],
    ...
})
```

Now we can use FlashBox component in our module declared component template using <flash-box> element.
Inside <flash-box>...</flash-box> decleration is an HTML based user information message.


