import { prisma } from '../prisma/index.js'
const getCategoriaByID = async ({ id }) => {
    try {
        const response =  await prisma.Categoria.findUnique({
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
const getCategoriaByNombre = async ({ nombre }) => {
    try {
        const response =  await prisma.Categoria.findUnique({
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
const getAllCategorias = async () => {
    try {
        const response = await prisma.Categoria.findMany({ });
        return {
            status: true,
            data: response,
        };
    } catch (e) {
        throw new Error(e);
    }
};
const searchCategorias = async ({ id, nombre }) => {
    try {
        let whereClause = {};
        if (nombre) whereClause.nombre = { contains: nombre };
        if (id) whereClause.id = { equals: parseInt(id) };

        const categorias = await prisma.Categoria.findMany({ where: whereClause });
        return {
            status: true,
            data: categorias,
        };
    } catch (e) {
        throw new Error(e);
    }
}
export { getCategoriaByID, getCategoriaByNombre, getAllCategorias, searchCategorias };