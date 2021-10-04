import Server from "./src/app";
import environment from "./src/config/environments/environment";

const server = Server.init(environment.PORT as number);

server.start();