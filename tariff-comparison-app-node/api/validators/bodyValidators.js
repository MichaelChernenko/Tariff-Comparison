const Joi = require('joi');

const consumptionSchema = Joi.object({
    consumption: Joi.number()
        .min(3)
        .required()
});

function validateBody(req, res, next) {
    console.log("Test", consumptionSchema.validate(req.body))
    next(consumptionSchema.validate(req.body));
}

module.exports = validateBody;