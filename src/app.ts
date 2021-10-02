// Servidor de Express
import express from 'express';
// import http from 'http';
import path from 'path';
import cors from 'cors';
import morgan from 'morgan';
import './config/db';

// Rutas
import routeProject from './routes/project.routes';
import routeUser from './routes/user.routes';
import routeAuth from './routes/auth.routes';

//const socketio = require('socket.io');
//const Sockets  = require('./sockets');

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

        // Inicializar Server
        this.app.listen( this.port, () => {
            console.log('Server corriendo en puerto:', this.port );
        });
    }
}