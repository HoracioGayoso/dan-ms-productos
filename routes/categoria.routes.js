import express from 'express';
import { getAllCategorias, getCategoriaByNombre, getCategoriaByID, searchCategorias } from "../controllers/categoria.controller.js";

const router = express.Router();

// Obtener todas las categorías
router.get('/categoria', getAllCategorias);

// Obtener categoría por ID
router.get('/categoria/:id', getCategoriaByID);

// Obtener categoría por nombre
router.get('/categoriaByNombre/:nombre', getCategoriaByNombre);

// Buscar categorías
router.get('/searchCategorias', searchCategorias);

export default router;
