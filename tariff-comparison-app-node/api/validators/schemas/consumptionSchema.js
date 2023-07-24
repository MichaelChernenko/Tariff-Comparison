let Joi = require('joi')

let createConsumptionSchema = Joi.object().keys({
    consumption: Joi.number().min(3)
})

module.exports = {
    createConsumptionSchema
}