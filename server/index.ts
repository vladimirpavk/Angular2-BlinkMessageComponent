/// <reference path="../typings/index.d.ts" />
import {ServerApp} from './server_app';

let sApp = new ServerApp(3036);
sApp.startServer();