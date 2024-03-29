import { matchedData } from 'express-validator';
import * as httpCodes from '../constants/httpCodes.js';
import * as service from '../services/orden-provision-detalle.service.js';
import logger from '../utils/logger.js';

const createOrdenProvisionDetalle = async (req, res) => {
    const {  ordenProvisionId, cantidad, productoId, precio } = matchedData(req);
    try {
        const response = await service.createOrdenProvisionDetalle({
            ordenProvisionId, cantidad, productoId, precio
        });
        res.apiSuccess(
            response.data,
            'Orden Provision Detalle creado exitosamente',
            httpCodes.OK,
        );
    } catch (e) {
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const getOrdenProvisionDetalle = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await service.getOrdenProvisionDetalle({ id });
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Orden Provision Detalle obtenido exitosamente',
                httpCodes.OK,
            );
        }
        return res.apiError(response.message, httpCodes.BAD_REQUEST);
    } catch (e) {
        logger.error(e);
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const getAllOrdenProvisionDetalle = async (req, res) => {
    try {
        const response = await service.getAllOrdenProvisionDetalle({});
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Orden Provision Detalle obtenido exitosamente',
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
export { createOrdenProvisionDetalle, getAllOrdenProvisionDetalle, getOrdenProvisionDetalle };