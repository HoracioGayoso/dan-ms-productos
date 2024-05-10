import Keycloak from 'keycloak-connect';

const keycloak = new Keycloak({
    "realm": "dan-realm",
    "resource": "dan-client",
    "ssl-required": "none",
    "bearerOnly": true, // Esta opción indica que tu aplicación solo aceptará tokens de acceso (Bearer tokens)
    "authServerUrl": "http://127.0.0.1:6080/",
    "credentials": {
        "secret": "EBS9qgCVgVRpWnPJKhKOv3gFuZrLQATb"
    },
});

const authMiddleware = (allowedRoles) => {
    return keycloak.protect(allowedRoles);
};

export default authMiddleware;
