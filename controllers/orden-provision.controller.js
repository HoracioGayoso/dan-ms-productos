import { matchedData } from 'express-validator';
import * as httpCodes from '../constants/httpCodes.js';
import * as service from '../services/orden-provision.service.js';
import logger from '../utils/logger.js';

const createOrdenProvision = async (req, res) => {
    const { proveedorId, detalles } = matchedData(req);
    try {
        const response = await service.createOrdenProvision({
            proveedorId, detalles
        });
        res.apiSuccess(
            response.data,
            'Orden Provision creada exitosamente',
            httpCodes.OK,
        );
    } catch (e) {
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const getOrdenProvisionByID = async (req, res) => {
    try {
        const { id } = req.params;

        const response = await service.getOrdenProvisionByID({ id });
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Orden Provision obtenida exitosamente',
                httpCodes.OK,
            );
        }
        return res.apiError(response.message, httpCodes.BAD_REQUEST);
    } catch (e) {
        logger.error(e);
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const getOrdenProvisionByProveedor = async (req, res) => {
    try {
        const { proveedorId } = req.params;

        const response = await service.getOrdenProvisionByProveedor({ proveedorId });
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Orden Provision obtenida exitosamente',
                httpCodes.OK,
            );
        }
        return res.apiError(response.message, httpCodes.BAD_REQUEST);
    } catch (e) {
        logger.error(e);
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const getAllOrdenProvision = async (req, res) => {
    try {
        const response = await service.getAllOrdenProvision({});
        if (response.status) {
            return res.apiSuccess(
                response.data,
                'Orden Provision obtenida exitosamente',
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
const updateOrdenProvision = async (req, res) => {
    const { fechaGeneracion, fechaRecepcion, esCancelada, proveedorId, detalles } =
        matchedData(req);
    const { id } = req.params;
    try {
        const response = await service.updateOrdenProvision({
            id,
            fechaGeneracion,
            fechaRecepcion,
            esCancelada,
            proveedorId,
            detalles,
        });
        res.apiSuccess(
            response.data,
            'Orden Provision actualizada exitosamente',
            httpCodes.OK,
        );
    } catch (e) {
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};

const deleteOrdenProvision = async (req, res) => {
    const { id } = req.params;
    try {
        const response = await service.deleteOrdenProvision({
            id,
        });
        res.apiSuccess(
            response.data,
            'Orden Provision eliminada exitosamente',
            httpCodes.OK,
        );
    } catch (e) {
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
};
const searchOrdenes = async (req, res) => {
    try {
        const { fechaGeneracionDesde, fechaGeneracionHasta, fechaRecepcionDesde, fechaRecepcionHasta } = req.query;

        const response = await service.searchOrdenes({ fechaGeneracionDesde, fechaGeneracionHasta, fechaRecepcionDesde, fechaRecepcionHasta });
        res.apiSuccess(
            response.data,
            'Orden Provision encontrada exitosamente',
            httpCodes.OK,
        );
    } catch (e) {
        res.apiError(e, httpCodes.INTERNAL_SERVER_ERROR);
    }
}
export { createOrdenProvision, updateOrdenProvision, getAllOrdenProvision, getOrdenProvisionByID, getOrdenProvisionByProveedor, deleteOrdenProvision, searchOrdenes };