const express = require('express');
const router = express.Router();

const tariffsController = require('../controllers/tariffs');
const { validateBody } = require('../validators/bodyValidators');
const { consumptionSchema } = require('../validators/schemas/consumption');

router.post('/', validateBody(consumptionSchema), tariffsController.calculateTariffs)

module.exports = router;