let Joi = require('joi')



// exports.validateConsuption = (value) => {
//     const schema = Joi.object({
//         name: Joi.number().min(35).required(),
//     });
//     const result = schema.validate(value);
//     return result;
// }

exports.validateBody = (schema) => (req, res, next) => {
    try {
        const { value, error } = schema.validate(req.body, { abortEarly: false });

        if (error) {
            throwValidationError(error);
        }

        req.body = value;

        return next();
    } catch (error) {
        return next(error);
    }
};


const throwValidationError = (error) => {
    throwError.unprocessableEntity(ERROR_CODES.VALIDATION_FAILED, {
        info: { errors: formatError(error) },
    });
};

exports.schema = Joi.object({
    consumption: Joi.number()
        .min(3)
        .required()
});

// module.exports = schema