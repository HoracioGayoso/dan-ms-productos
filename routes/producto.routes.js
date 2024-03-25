import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";
import { createProducto, deleteProducto, updateProducto, getAllProductos, getProducto, searchProductos } from "../controllers/producto.controller.js";
import roles from "../constants/roles.js";

export default app => {
    // Crea GET, POST, PATCH
    app.get(
        '/producto',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN])
        // ],
        getAllProductos,
    );
    app.get(
        '/producto/:id',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        // ],
        getProducto,
    );
    app.post(
        '/producto',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        // ],
        createProducto,
    );
    app.patch(
        '/producto/:id',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        // ],
        updateProducto,
    );
    app.delete(
        '/producto/:id',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        // ],
        deleteProducto,
    );
    app.get(
        '/search',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN])
        // ],
        searchProductos,
    );
};