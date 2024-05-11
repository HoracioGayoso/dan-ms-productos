import express from 'express';
import {
    getAllProveedores,
    getProveedorByID,
    getProveedorByNombre,
    searchProveedores
} from "../controllers/proveedor.controller.js";

const router = express.Router();

// Obtener todos los proveedores
router.get('/proveedor', getAllProveedores);


// Obtener proveedor por ID
router.get('/proveedor/:id', getProveedorByID);

// Obtener proveedor por nombre
router.get('/proveedorByNombre/:nombre', getProveedorByNombre);

// Buscar proveedores
router.get('/searchProveedores', searchProveedores);

export default router;
