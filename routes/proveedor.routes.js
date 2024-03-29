import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";
import { getAllProveedores, getProveedorByNombre, getProveedorByID, searchProveedores} from "../controllers/proveedor.controller.js";
import roles from "../constants/roles.js";

export default app => {
    // Crea GET, POST, PATCH
    app.get(
        '/proveedor',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN])
        // ],
        getAllProveedores,
    );
    app.get(
        '/proveedor/:id',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        //     // verifyPalmProfile,
        // ],
        getProveedorByID,
    );
    app.get(
        '/proveedor/:nombre',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        //     // verifyPalmProfile,
        // ],
        getProveedorByNombre,
    );
    app.get(
        '/searchProveedores',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN])
        // ],
        searchProveedores,
    );
};