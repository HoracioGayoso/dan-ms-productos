import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import session from 'express-session';
import Keycloak from 'keycloak-connect';

import CategoriaRoutes from "./routes/categoria.routes.js";
import ProveedorRoutes from "./routes/proveedor.routes.js";
import OrdenProvisionDetalleRoutes from "./routes/orden-provision-detalle.routes.js";
import OrdenProvisionRoutes from "./routes/orden-provision.routes.js";

import { getAllProveedores, getProveedorByID, getProveedorByNombre, searchProveedores } from './controllers/proveedor.controller.js';

dotenv.config();

const app = express();
const memoryStore = new session.MemoryStore();
const keycloak = new Keycloak({ store: memoryStore });

app.use(session({
    secret: 'mySecret',
    resave: false,
    saveUninitialized: true,
    store: memoryStore,
}));

const corsOptions = {
    origin: function (origin, callback) {
        console.log(`[connection] from: ${origin}`);
        callback(null, true);
    },
};

app.use(cors(corsOptions));

const port = process.env.PORT || '3000';

app.use(keycloak.middleware());

app.use(CategoriaRoutes);
app.use(ProveedorRoutes);
app.use(OrdenProvisionRoutes);
app.use(OrdenProvisionDetalleRoutes);

// Rutas definidas en este archivo
app.get('/proveedor', keycloak.protect(['escritura', 'lectura']), getAllProveedores);
app.get('/proveedor/:id', keycloak.protect(), getProveedorByID);
app.get('/proveedorByNombre/:nombre', keycloak.protect(), getProveedorByNombre);
app.get('/searchProveedores', keycloak.protect(), searchProveedores);

app.listen(port, () => {
    console.log(`[Server] Listening on ${port}`);
});

export { keycloak };
