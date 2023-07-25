const { errorMessages } = require("../constants/errors");
const { logger } = require("../services/logger");

exports.validateBody = (schema) => (req, res, next) => {
    try {
        const { value, error } = schema.validate(req.body, { abortEarly: false });

        logger.info({ value, error }, "Body validation");

        if (error) {
            throw new Error(errorMessages.VALIDATION_ERROR);
        }

        return next();
    } catch (err) {
        return next(err);
    }
};