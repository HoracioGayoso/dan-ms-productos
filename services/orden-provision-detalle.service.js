import { prisma } from '../prisma/index.js'
const createOrdenProvisionDetalle = async ({ ordenProvisionId, cantidad, productoId, precio }) => {
    try {
        // Buscar el producto por su ID
        const producto = await prisma.Producto.findUnique({
            where: {
                id: Number(productoId),
            },
        });

        // Buscar la orden de provisión por su ID
        const orden = await prisma.OrdenProvision.findUnique({
            where: {
                id: Number(ordenProvisionId),
            },
            include: {
                // Incluir los detalles de la orden para poder actualizarlos más tarde
                detalles: true,
            },
        });

        // Crear un nuevo detalle de orden
        const ordenDetalle = await prisma.OrdenProvisionDetalle.create({
            data: {
                cantidad: cantidad,
                precio: precio,
                // Si la orden existe, conectarla con el detalle
                ordenProvision: orden ? { connect: { id: orden.id } } : null,
                // Si el producto existe, conectarlo con el detalle
                producto: producto ? { connect: { id: producto.id } } : null,
            },
        });

        // Actualizar la lista de detalles de la orden
        const detallesActualizados = orden ? [...orden.detalles, ordenDetalle] : [ordenDetalle];

        // Actualizar la orden con los detalles actualizados
        const ordenActualizada = await prisma.OrdenProvision.update({
            where: { id: Number(ordenProvisionId) },
            data: {
                detalles: {
                    set: detallesActualizados, // Establecer los detalles actualizados
                },
            },
        });

        return {
            status: true,
            data: ordenDetalle,
        };
    } catch (e) {
        throw new Error(e);
    }
};
const getOrdenProvisionDetalle = async ({ id }) => {
    try {
        const response =  await prisma.OrdenProvisionDetalle.findUnique({
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
const getAllOrdenProvisionDetalle = async () => {
    try {
        const response = await prisma.OrdenProvisionDetalle.findMany({ });
        return {
            status: true,
            data: response,
        };
    } catch (e) {
        throw new Error(e);
    }
};
export { createOrdenProvision, getAllOrdenProvisionDetalle, getOrdenProvisionDetalle };