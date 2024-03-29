import { matchedData } from 'express-validator';
import * as httpCodes from '../constants/httpCodes.js';
import * as service from '../services/categoria.service.js';
import logger from '../utils/logger.js';

const getCategoriaByID = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await service.getCategoriaByID({ id });
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Categoria obtenida exitosamente',
                httpCodes.OK,
            );
        }
        return res.apiError(response.message, httpCodes.BAD_REQUEST);
    } catch (e) {
        logger.error(e);
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const getCategoriaByNombre = async (req, res) => {
    try {
        const { nombre } = req.params;

        const response = await service.getCategoriaByNombre({ nombre });
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Categoria obtenida exitosamente',
                httpCodes.OK,
            );
        }
        return res.apiError(response.message, httpCodes.BAD_REQUEST);
    } catch (e) {
        logger.error(e);
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};

const getAllCategorias = async (req, res) => {
    try {
        const response = await service.getAllCategorias({});
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Categorias obtenidas exitosamente',
                httpCodes.OK,
                true,
                response.pagination,
            );
        }
    } catch (e) {
        logger.error(e);
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const searchCategorias = async (req, res) => {
    try {
        const { id, nombre } = req.query;

        const response = await service.searchCategorias({ id, nombre });
        res.apiSuccess(
            response.data,
            'Categoria encontrada exitosamente',
            httpCodes.OK,
        );
    } catch (e) {
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
}
export { getCategoriaByID, getCategoriaByNombre, getAllCategorias, searchCategorias };