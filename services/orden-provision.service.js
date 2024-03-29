import { prisma } from '../prisma/index.js'
const createOrdenProvision = async ({ proveedorId, detalles }) => {
    try {
        const proveedor = await prisma.Proveedor.findUnique({
            where: {
                id: Number(proveedorId),
            },
        })
        const orden = await prisma.OrdenProvision.create({
            fechaGeneracion: new Date(),
            fechaRecepcion: null,
            esCancelada: false,
            proveedor: proveedor,
            proveedorId: proveedor.id,
            detalles: detalles,
        });
        return {
            status: true,
            data: orden,
        };
    } catch (e) {
        throw new Error(e);
    }
};
const getOrdenProvisionByID = async ({ id }) => {
    try {
        const response =  await prisma.OrdenProvision.findUnique({
            where: {
                id: Number(id),
            },
        });
        return {
            status: true,
            data: response,
        };
    } catch (e) {
        throw new Error(e);
    }
};
const getOrdenProvisionByProveedor = async ({ proveedorId }) => {
    try {
        const response =  await prisma.OrdenProvision.findMany({
            where: {
                proveedorId: Number(proveedorId),
            },
        });
        return {
            status: true,
            data: response,
        };
    } catch (e) {
        throw new Error(e);
    }
};
const getAllOrdenProvision = async () => {
    try {
        const response = await prisma.OrdenProvision.findMany({ });
        return {
            status: true,
            data: response,
        };
    } catch (e) {
        throw new Error(e);
    }
};
const updateOrdenProvision = async ({ id, fechaGeneracion, fechaRecepcion, esCancelada, proveedorId, detalles }) => {
    try {
        const ordenInicial = await prisma.OrdenProvision.findUnique({
            where: {
                id: Number(id),
            },
        })
        const proveedor = await prisma.Proveedor.findUnique({
            where: {
                id: Number(proveedorId),
            },
        })
        const data = {
            fechaGeneracion: fechaGeneracion? fechaGeneracion : ordenInicial.fechaGeneracion,
            fechaRecepcion: fechaRecepcion? fechaRecepcion : ordenInicial.fechaRecepcion,
            proveedorId: proveedor? proveedor.id : ordenInicial.proveedorId,
            proveedor: proveedor? proveedor : ordenInicial.proveedor,
            esCancelada: esCancelada? esCancelada : ordenInicial.esCancelada,
            detalles: detalles? detalles.id : ordenInicial.detalles,
        }
        const ordenFinal = await prisma.OrdenProvision.update({
            where: { id: Number(id) },
            data: data,
        })
        return {
            status: true,
            data: ordenFinal,
        };
    } catch (e) {
        throw new Error(e);
    }
};
const deleteOrdenProvision = async ({ id }) => {
    try {
        const orden = await prisma.OrdenProvision.delete({
            where: {
                id: Number(id),
            },
        });
        return {
            status: true,
            data: orden,
        };
    } catch (e) {
        throw new Error(e);
    }
};

const searchOrdenes = async ({ fechaGeneracionDesde, fechaGeneracionHasta, fechaRecepcionDesde, fechaRecepcionHasta }) => {
    try {
        let whereClause = {};
        // Agregar condiciones de fecha si los parámetros están presentes
        if (fechaGeneracionDesde && fechaGeneracionHasta) {
            whereClause.fechaGeneracion = {
                gte: fechaGeneracionDesde,
                lte: fechaGeneracionHasta,
            };
        } else if(!fechaGeneracionHasta) {
            // Si fechaRecepcionHasta no está presente, establecerla como la fecha actual
            whereClause.fechaRecepcion = {
                gte: fechaGeneracionDesde,
                lte: new Date(), // fecha actual
            };
        }
        if (fechaRecepcionDesde && fechaRecepcionHasta) {
            whereClause.fechaRecepcion = {
                gte: fechaRecepcionDesde,
                lte: fechaRecepcionHasta,
            };
        } else if (!fechaRecepcionHasta) {
            // Si fechaRecepcionHasta no está presente, establecerla como la fecha actual
            whereClause.fechaRecepcion = {
                gte: fechaRecepcionDesde,
                lte: new Date(), // fecha actual
            };
        }
        const ordenes = await prisma.OrdenProvision.findMany({ where: whereClause });
        return {
            status: true,
            data: ordenes,
        };
    } catch (e) {
        throw new Error(e);
    }
}
export { createOrdenProvision, getAllOrdenProvision, getOrdenProvisionByID, getOrdenProvisionByProveedor, updateOrdenProvision, deleteOrdenProvision, searchOrdenes };