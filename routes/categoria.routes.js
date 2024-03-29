import { verifyToken, verifyRoles } from "../middlewares/auth.middleware.js";
import { getAllCategorias, getCategoriaByNombre, getCategoriaByID, searchCategorias} from "../controllers/categoria.controller.js";
import roles from "../constants/roles.js";

export default app => {
    // Crea GET, POST, PATCH
    app.get(
        '/categoria',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN])
        // ],
        getAllCategorias,
    );
    app.get(
        '/categoria/:id',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        //     // verifyPalmProfile,
        // ],
        getCategoriaByID,
    );
    app.get(
        '/categoria/:nombre',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN]),
        //     // verifyPalmProfile,
        // ],
        getCategoriaByNombre,
    );
    app.get(
        '/searchCategorias',
        // [
        //     verifyToken,
        //     verifyRoles([roles.USER, roles.ADMIN, roles.SUPERADMIN])
        // ],
        searchCategorias,
    );
};