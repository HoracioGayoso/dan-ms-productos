import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";
import { createOrdenProvision, deleteOrdenProvision, updateOrdenProvision, getAllOrdenProvision, getOrdenProvisionByProveedor, getOrdenProvisionByID,searchOrdenes } from "../controllers/orden-provision.controller.js";
import roles from "../constants/roles.js";

export default app => {
    // Crea GET, POST, PATCH
    app.get(
        '/ordenProvision',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN])
        // ],
        getAllOrdenProvision(),
    );
    app.get(
        '/ordenProvisionById/:id',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        // ],
        getOrdenProvisionByID(),
    );
    app.get(
        '/ordenProvisionByProveedor/:proveedorId',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        // ],
        getOrdenProvisionByProveedor(),
    );
    app.post(
        '/ordenProvision',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        // ],
        createOrdenProvision(),
    );
    app.patch(
        '/ordenProvision/:id',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        // ],
        updateOrdenProvision(),
    );
    app.delete(
        '/ordenProvision/:id',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        // ],
        deleteOrdenProvision(),
    );
    app.get(
        '/searchOrdenesProvision',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN])
        // ],
        searchOrdenes(),
    );
};