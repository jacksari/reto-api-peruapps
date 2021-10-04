// Servidor de Express
import express from 'express';
// import http from 'http';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import fs from 'fs';
import './config/db';
import http from 'http';
import https from 'https';

// Rutas
import routeProject from './routes/project.routes';
import routeUser from './routes/user.routes';
import routeAuth from './routes/auth.routes';
import environment from './config/environments/environment';

//const socketio = require('socket.io');
//const Sockets  = require('./sockets');

const httpsServerOptions = {
    key: fs.readFileSync("/etc/letsencrypt/live/api.jacksari.com/privkey.pem"),
    cert: fs.readFileSync("/etc/letsencrypt/live/api.jacksari.com/fullchain.pem")
}

export default class Server {

    public app: express.Application;
    public port: number;

    constructor(port: number) {

        this.app  = express();
        this.port = port;

        // Http server
        //this.server = http.createServer( this.app );
        
        // Configuraciones de sockets
        //this.io = socketio( this.server, { /* configuraciones */ } );
    }

    middlewares(): void {
        // Desplegar el directorio público
        this.app.use( express.static( path.resolve( __dirname, '../public' ) ) );

        // CORS
        this.app.use( cors() );

        this.app.use(morgan('dev'));

        this.app.use(express.json())
    }


    routes(): void {
        this.app.use("/api/v1/project", routeProject);  
        this.app.use("/api/v1/user", routeUser);   
        this.app.use("/api/v1/auth", routeAuth);        
    }

    // Esta configuración se puede tener aquí o como propieda de clase
    configurarSockets(): void {
        //new Sockets( this.io );
    }

    static init(port: number): Server{
        return new Server(port);
    }

    start(): void {

        // Inicializar Middlewares
        this.middlewares();

        // Inicializar sockets
        //this.configurarSockets();

        this.routes();    

        // Servidor http
        const serverHTTP = http.createServer(this.app);
        serverHTTP.listen(this.port, '54.157.71.165')

        const serverHTTPS = https.createServer(httpsServerOptions, this.app)
        serverHTTPS.listen(443, '54.157.71.165')

        // Inicializar Server
        //this.app.listen( this.port, () => {
        //    console.log('Server corriendo en puerto:', this.port );
        //});
    }
}