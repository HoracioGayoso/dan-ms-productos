import { validationResult } from 'express-validator';

// eslint-disable-next-line consistent-return
const handleValidationErrors = (err, req, res, next) => {
    if (err instanceof Error) {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    }
    next(err);
};

export default handleValidationErrors;