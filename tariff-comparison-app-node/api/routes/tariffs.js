const express = require('express');
const router = express.Router();

const { calculateTariffs } = require('../controllers/tariffs');
const { validateBody } = require('../validators/bodyValidators');
const { consumptionSchema } = require('../validators/schemas/consumption');

router.post('/', validateBody(consumptionSchema), calculateTariffs)

module.exports = router;