import express from 'express';
import { createOrdenProvisionDetalle, getAllOrdenProvisionDetalle, getOrdenProvisionDetalle } from "../controllers/orden-provision-detalle.controller.js";

const router = express.Router();

// Obtener todos los detalles de órdenes de provisión
router.get('/ordenProvisionDetalle', getAllOrdenProvisionDetalle);

// Obtener detalle de órden de provisión por ID
router.get('/ordenProvisionDetalle/:id', getOrdenProvisionDetalle);

// Crear un nuevo detalle de órden de provisión
router.post('/ordenProvisionDetalle', createOrdenProvisionDetalle);

export default router;
