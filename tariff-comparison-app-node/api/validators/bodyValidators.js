const Joi = require("joi");
const { errorMessages } = require('../constants/errors')

exports.validateBody = (schema) => (req, res, next) => {
    try {
        const { value, error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            throw new Error(errorMessages.VALIDATION_ERROR);
        }

        req.body = value;

        return next();
    } catch (err) {
        return next(err);
    }
};