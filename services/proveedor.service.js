import { prisma } from '../prisma/index.js'
const getProveedorByID = async ({ id }) => {
    try {
        const response =  await prisma.provider.findUnique({
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
const getProveedorByNombre = async ({ nombre }) => {
    try {
        const response =  await prisma.provider.findUnique({
            where: {
                nombre: nombre,
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
const getAllProveedores = async () => {
    try {
        const response = await prisma.provider.findMany({ });
        return {
            status: true,
            data: response,
        };
    } catch (e) {
        throw new Error(e);
    }
};
const searchProveedores = async ({ id, nombre }) => {
    try {
        let whereClause = {};
        if (nombre) whereClause.nombre = { contains: nombre };
        if (id) whereClause.stockActual = { equals: parseInt(id) };

        const proveedores = await prisma.product.findMany({ where: whereClause });
        return {
            status: true,
            data: proveedores,
        };
    } catch (e) {
        throw new Error(e);
    }
}
export { getProveedorByID, getProveedorByNombre, getAllProveedores, searchProveedores };