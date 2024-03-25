// const express = require('express');
// const app = express();
// const userRoutes = require('./routes/userRoutes');
//
// app.use(express.json());
//
// app.use('/api', userRoutes);
//
// const PORT = process.env.PORT || 3000;
// app.listen(PORT, () => {
//     console.log(`Servidor escuchando en el puerto ${PORT}`);
// });
import express from 'express';
import cookieParser from 'cookie-parser';
//import path from 'path';
import bearerToken from 'express-bearer-token';
import helmet from 'helmet';
import cors from 'cors';
import morganMiddleware from "./middlewares/morgan.middleware.js";
import apiResponsesMiddleware from "./middlewares/api-responses.middleware.js";
import routes from './routes/index.js';
//import logger from './utils/logger';
import handleValidationErrors from './middlewares/errorsHandler.js';

const app = express();

// enable cors

app.use(helmet());
app.use(
    cors({
        allowedHeaders: [
            'sessionId',
            'Content-Type',
            'Authorization',
            'X-Requested-With',
            'Accept',
            'Origin',
        ],
        exposedHeaders: ['sessionId'],
        origin: '*',
        methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
        preflightContinue: false,
    }),
);
app.options('*', cors());

// view engine setup
// app.set('views', path.join(__dirname, '/public/views'));
// app.set('view engine', 'pug');
app.use(apiResponsesMiddleware);
app.use(morganMiddleware);
app.use(express.json({ limit: '5mb' }));
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, '/public/static')));
// This middleware reads the token from either side of the header.
app.use(bearerToken());
routes(app);
app.use(handleValidationErrors);

// if (env.NODE_ENV !== 'test') {
//     mongoDb
//         .then(() => {
//             logger.info('Connection to MongoDB established');
//         })
//         .catch(err => {
//             logger.error(err);
//             process.exit(1);
//         });
// }
export default app;