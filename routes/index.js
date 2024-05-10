import productoRoutes from './producto.routes.js';
import proveedorRoutes from './proveedor.routes.js';

export default (app) => {
    productoRoutes(app);
    proveedorRoutes(app);
};
