import { matchedData } from 'express-validator';
import * as httpCodes from '../constants/httpCodes.js';
import * as service from '../services/proveedor.service.js';
import logger from '../utils/logger.js';

const getProveedorByID = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await service.getProveedorByID({ id });
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Proveedor obtenido exitosamente',
                httpCodes.OK,
            );
        }
        return res.apiError(response.message, httpCodes.BAD_REQUEST);
    } catch (e) {
        logger.error(e);
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const getProveedorByNombre = async (req, res) => {
    try {
        const { nombre } = req.params;

        const response = await service.getProveedorByNombre({ nombre });
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Proveedor obtenido exitosamente',
                httpCodes.OK,
            );
        }
        return res.apiError(response.message, httpCodes.BAD_REQUEST);
    } catch (e) {
        logger.error(e);
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};

const getAllProveedores = async (req, res) => {
    try {
        const message = "Conexión con la API establecida correctamente";
        return res.status(200).send(message);
        // const response = await service.getAllProveedor({});
        // if (response.status) {
        //     return res.apiSuccess(
        //         response.data,
        //         'Proveedores obtenidos exitosamente',
        //         httpCodes.OK,
        //         true,
        //         response.pagination,
        //     );
        // }
    } catch (e) {
        logger.error(e);
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const searchProveedores = async (req, res) => {
    try {
        const { id, nombre } = req.query;

        const response = await service.searchProveedor({ id, nombre });
        res.apiSuccess(
            response.data,
            'Proveedor encontrado exitosamente',
            httpCodes.OK,
        );
    } catch (e) {
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
}
export { getProveedorByID, getProveedorByNombre, getAllProveedores, searchProveedores };