import express from 'express';
import { createOrdenProvision, deleteOrdenProvision, updateOrdenProvision, getAllOrdenProvision, getOrdenProvisionByProveedor, getOrdenProvisionByID, searchOrdenes } from "../controllers/orden-provision.controller.js";

const router = express.Router();

// Obtener todas las órdenes de provisión
router.get('/ordenProvision', getAllOrdenProvision);

// Obtener orden de provisión por ID
router.get('/ordenProvisionById/:id', getOrdenProvisionByID);

// Obtener órdenes de provisión por proveedor
router.get('/ordenProvisionByProveedor/:proveedorId', getOrdenProvisionByProveedor);

// Crear una nueva orden de provisión
router.post('/ordenProvision', createOrdenProvision);

// Actualizar una orden de provisión existente
router.patch('/ordenProvision/:id', updateOrdenProvision);

// Eliminar una orden de provisión
router.delete('/ordenProvision/:id', deleteOrdenProvision);

// Buscar órdenes de provisión
router.get('/searchOrdenesProvision', searchOrdenes);

export default router;
