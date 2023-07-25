const Joi = require("joi");

exports.consumptionSchema = Joi.object({
    consumption: Joi.number().required(),
});