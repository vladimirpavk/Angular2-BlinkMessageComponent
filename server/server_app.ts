/// <reference path="../typings/index.d.ts" />
import * as express from 'express';
import * as path from 'path';

export class ServerApp {
    private _app: express.Express;
    private _port: number;

    constructor(port: number){
        this._app = express();
        this._port = port;

        this._app.use('/node_modules', express.static(path.resolve(__dirname, '../node_modules')));        
        //this._app.use('/www', express.static(path.resolve(__dirname, '../client')));
        //this._app.get('/docs/*', (req,res)=>this._renderDocs(req,res));
        this._app.get('/*', (req, res)=>this._renderPage(req, res));        
     }    

    private _renderOk(req: express.Request, res: express.Response){
        res.json({
            "message": "allOK"
        });        
    }

    private _renderDocs(req: express.Request, res: express.Response){
        console.log("/docs route requested...");       
        console.log(req.params[0]);        
        res.sendFile(path.resolve(__dirname, '../docs/'+req.params[0]));
    }

    private _renderPage(req: express.Request, res: express.Response){ 
        console.log("/ route requested...");       
        console.log(req.params[0]);        
        res.sendFile(path.resolve(__dirname, '../client/'+req.params[0]));
    }

    public startServer(){
        this._app.listen(this._port, ()=>{
            console.log("Server is listening at port "+this._port);
        });        
    }
    
}