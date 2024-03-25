// eslint-disable-next-line import/prefer-default-export
import logger from "../utils/logger.js";
const apiResponse = (req, res, next) => {
    res.apiSuccess = (
        data,
        message = 'OK' || null,
        statusCode = 200,
        success = true,
        pagination = null,
    ) => {
        res.status(statusCode).json({ success, message, data, pagination });
    };

    res.apiError = (
        message = 'Internal server error',
        statusCode = 500,
        success = false,
    ) => {
        logger.error(message);
        res.status(statusCode).json({ success, message });
    };

    next();
};

export default apiResponse;