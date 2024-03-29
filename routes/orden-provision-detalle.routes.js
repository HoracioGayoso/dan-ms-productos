import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";
import { createOrdenProvisionDetalle, getAllOrdenProvisionDetalle, getOrdenProvisionDetalle } from "../controllers/orden-provision-detalle.controller.js";
import roles from "../constants/roles.js";

export default app => {
    // Crea GET, POST, PATCH
    app.get(
        '/ordenProvisionDetalle',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN])
        // ],
        getAllOrdenProvisionDetalle(),
    );
    app.get(
        '/ordenProvisionDetalle/:id',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        // ],
        getOrdenProvisionDetalle(),
    );
    app.post(
        '/ordenProvisionDetalle',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        // ],
        createOrdenProvisionDetalle(),
    );
};