import jwt from 'jsonwebtoken';
import * as constants from "../constants/index.js";
import * as httpCodes from '../constants/httpCodes.js';


// eslint-disable-next-line consistent-return
const verifyToken = (req, res, next) => {
    try {
        const jsonWebToken = req.token;
        if (!jsonWebToken) {
            return res.apiError(
                constants.AUTHENTICATION.NO_TOKEN_FOUND,
                httpCodes.FORBIDDEN,
            );
        }
        const payload = jwt.verify(jsonWebToken, process.env.PRIVATE_SEED_TOKEN);
        if (!payload) {
            return res.apiError(
                constants.AUTHENTICATION.NO_VALID_TOKEN,
                httpCodes.UNAUTHORIZED,
            );
        }
        /*
         * If the token is valid, we save the payload in the locals
         * Example payload data:
         * {
         *      _id: '650352998e64922fe623343a',
         *      username: 'Alexis',
         *      role: 'superAdmin',
         *      type: 'jwt',
         *      iat: 1695663971,
         *      exp: 1695667571
         *    }
         */
        res.locals.payload = payload;
        next();
    } catch (e) {
        res.apiError(c.AUTHENTICATION.NO_VALID_TOKEN, httpCodes.UNAUTHORIZED);
    }
};

const verifyRoles = allowedRoles => {
    // eslint-disable-next-line consistent-return
    return (req, res, next) => {
        const { roles } = res.locals.payload;
        if (!roles.some(role => allowedRoles.includes(role))) {
            return res.apiError(
                c.AUTHENTICATION.NO_AUTHORIZED_ACCESS,
                httpCodes.FORBIDDEN,
            );
        }
        next();
    };
};

const verifyTokenSocket = async token => {
    try {
        const jsonWebToken = token;
        if (!jsonWebToken) {
            return false;
        }
        const payload = jwt.verify(jsonWebToken, PRIVATE_SEED_TOKEN);
        if (!payload) {
            return false;
        }
        return payload;
    } catch (e) {
        throw new Error(e.message);
    }
};

export {
    verifyRoles,
    verifyToken,
    verifyTokenSocket
};