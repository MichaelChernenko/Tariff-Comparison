const { errorMessages } = require("../constants/errors");
const { logger } = require("../services/logger");

exports.validateQuery = (schema) => (req, res, next) => {
    try {
        const { value, error } = schema.validate(req.query, { abortEarly: false });

        logger.info({ value, error }, "Validation results");

        if (error) {
            throw new Error(errorMessages.VALIDATION_ERROR);
        }

        return next();
    } catch (err) {
        return next(err);
    }
};