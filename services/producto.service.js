import { prisma } from '../prisma/index.js'
const createProducto = async ({ nombre, descripcion, proveedorId, stockActual, categoriaId, ordenProvisionDetalle }) => {
    try {
        const proveedor = await prisma.provider.findUnique({
            where: {
                id: Number(proveedorId),
            },
        })
        const categoria = await prisma.category.findUnique({
            where: {
                id: Number(categoriaId),
            },
        })
        const producto = await prisma.product.create({
            nombre: nombre,
            descripcion: descripcion,
            proveedorId: proveedorId,
            proveedor: proveedor,
            stockActual: stockActual,
            categoriaId: categoriaId,
            categoria: categoria,
            ordenProvisionDetalle: ordenProvisionDetalle,
        });
        return {
            status: true,
            data: producto,
        };
    } catch (e) {
        throw new Error(e);
    }
};
const getProducto = async ({ id }) => {
    try {
        const response =  await prisma.product.findUnique({
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
const getAllProductos = async () => {
    try {
        const response = await prisma.product.findMany({ });
        return {
            status: true,
            data: response,
        };
    } catch (e) {
        throw new Error(e);
    }
};
const updateProducto = async ({ id, nombre, descripcion, proveedorId, stockActual, categoriaId, ordenProvisionDetalle }) => {
    try {
        const productoInicial = await prisma.product.findUnique({
            where: {
                id: Number(id),
            },
        })
        const proveedor = await prisma.provider.findUnique({
            where: {
                id: Number(proveedorId),
            },
        })
        const categoria = await prisma.category.findUnique({
            where: {
                id: Number(categoriaId),
            },
        })
        const data = {
            nombre: nombre? nombre : productoInicial.nombre,
            descripcion: descripcion? descripcion : productoInicial.descripcion,
            proveedorId: proveedor? proveedor.id : productoInicial.proveedorId,
            proveedor: proveedor? proveedor : productoInicial.proveedor,
            stockActual: stockActual? stockActual : productoInicial.stockActual,
            categoriaId: categoria? categoria.id : productoInicial.categoria,
            categoria: categoria? categoria : productoInicial.categoria,
            ordenProvisionDetalle: ordenProvisionDetalle? ordenProvisionDetalle : productoInicial.ordenProvisionDetalle,
        }
        const productoFinal = await prisma.product.update({
            where: { id: Number(id) },
            data: data,
        })
        return {
            status: true,
            data: productoFinal,
        };
    } catch (e) {
        throw new Error(e);
    }
};
const deleteProducto = async ({ id }) => {
    try {
        const producto = await prisma.product.delete({
            where: {
                id: Number(id),
            },
        });
        return {
            status: true,
            data: producto,
        };
    } catch (e) {
        throw new Error(e);
    }
};

const searchProductos = async ({ nombre, nombreProveedor, categoria, stock }) => {
    try {
        let whereClause = {};
        if (nombre) whereClause.nombre = { contains: nombre };
        if (nombreProveedor) {
            const proveedor = await prisma.provider.findUnique({
                where: { nombre: nombreProveedor }
            });
            if (proveedor) {
                whereClause.proveedorId = { equals: proveedor.id };
            }
        }
        if (categoria) {
            const category = await prisma.category.findUnique({
                where: { nombre: categoria }
            });
            if (category) {
                whereClause.categoriaId = { equals: category.id };
            }
        }
        if (stock) whereClause.stockActual = { equals: parseInt(stock) };

        const productos = await prisma.product.findMany({ where: whereClause });
        return {
            status: true,
            data: productos,
        };
    } catch (e) {
        throw new Error(e);
    }
}
export { createProducto, getProducto, getAllProductos, updateProducto, deleteProducto, searchProductos };