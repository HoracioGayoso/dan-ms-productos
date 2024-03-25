import { matchedData } from 'express-validator';
import * as httpCodes from '../constants/httpCodes.js';
import * as service from '../services/producto.service.js';
import logger from '../utils/logger.js';

const createProducto = async (req, res) => {
    const { nombre, descripcion, proveedorId, stockActual, categoriaId, ordenProvisionDetalle } = matchedData(req);
    try {
        const response = await service.createProducto({
            nombre,
            descripcion,
            proveedorId,
            stockActual,
            categoriaId,
            ordenProvisionDetalle,
        });
        res.apiSuccess(
            response.data,
            'Producto creado exitosamente',
            httpCodes.OK,
        );
    } catch (e) {
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const getProducto = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await service.getProducto({ id });
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Producto obtenido exitosamente',
                httpCodes.OK,
            );
        }
        return res.apiError(response.message, httpCodes.BAD_REQUEST);
    } catch (e) {
        logger.error(e);
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};

const getAllProductos = async (req, res) => {
    try {
        const response = await service.getAllProductos({});
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Productos obtenidos exitosamente',
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
const updateProducto = async (req, res) => {
    const { nombre, descripcion, proveedorId, stockActual, categoriaId, ordenProvisionDetalle } =
        matchedData(req);

    const { id } = req.params;

    try {
        const response = await service.updateProducto({
            id,
            nombre,
            descripcion,
            proveedorId,
            stockActual,
            categoriaId,
            ordenProvisionDetalle,
        });
        res.apiSuccess(
            response.data,
            'Producto actualizado exitosamente',
            httpCodes.OK,
        );
    } catch (e) {
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};

const deleteProducto = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.deleteProducto({
            id,
        });
        res.apiSuccess(
            response.data,
            'Producto eliminado exitosamente',
            httpCodes.OK,
        );
    } catch (e) {
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const searchProductos = async (req, res) => {
    try {
        const { nombre, nombreProveedor, categoria, stock } = req.query;

        const response = await service.searchProductos({ nombre, nombreProveedor, categoria, stock });
        res.apiSuccess(
            response.data,
            'Producto encontrado exitosamente',
            httpCodes.OK,
        );
    } catch (e) {
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
}
export { createProducto, updateProducto, getProducto, getAllProductos, deleteProducto, searchProductos };