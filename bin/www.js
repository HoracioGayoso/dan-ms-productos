import app from '../index.js';
import http from 'http';
import logger from '../utils/logger.js';
import { Server } from 'socket.io';

const port = normalizePort(process.env.PORT || '3000');
app.set('port', port);

const server = http.createServer(app);
const io = new Server(server, {
    cors: {
        origin: [
            'http://localhost:3000',
            'http://localhost:8080',
            'http://127.0.0.1:8080',
            'http://localhost:5173',
        ],
        allowedHeaders: [
            'Authorization',
            'Content-Type',
            'Accept',
            'Origin',
            '*',
        ],
    },
});
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
app.io = io;

function normalizePort(val) {
    const normalizedPort = parseInt(val, 10);

    if (Number.isNaN(normalizedPort)) {
        // named pipe
        return val;
    }

    if (normalizedPort >= 0) {
        // port number
        return normalizedPort;
    }

    return false;
}

function onError(error) {
    if (error.syscall !== 'listen') {
        throw error;
    }

    const bind = typeof port === 'string' ? `Pipe ${port}` : `Port ${port}`;

    // handle specific listen errors with friendly messages
    switch (error.code) {
        case 'EACCES':
            logger.error(`${bind} requires elevated privileges`);
            process.exit(1);
            break;
        case 'EADDRINUSE':
            logger.error(`${bind} is already in use`);
            process.exit(1);
            break;
        default:
            throw error;
    }
}

function onListening() {
    const addr = server.address();
    const bind =
        typeof addr === 'string' ? `pipe ${addr}` : `port ${addr.port}`;
    logger.info(`API listening on ${bind}`);
}

logger.info('Starting server');