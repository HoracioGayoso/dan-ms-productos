import express from 'express';
import { createProducto, deleteProducto, updateProducto, getAllProductos, getProducto, searchProductos } from "../controllers/producto.controller.js";

const router = express.Router();

// Obtener todos los productos
router.get('/producto', getAllProductos);

// Obtener producto por ID
router.get('/producto/:id', getProducto);

// Crear un nuevo producto
router.post('/producto', createProducto);

// Actualizar un producto existente
router.patch('/producto/:id', updateProducto);

// Eliminar un producto
router.delete('/producto/:id', deleteProducto);

// Buscar productos
router.get('/searchProductos', searchProductos);

export default router;
