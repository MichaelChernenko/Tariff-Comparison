const express = require('express');
const router = express.Router();

const tariffsController = require('../controllers/tariffs');
const validateBody = require('../validators/bodyValidators');

router.post('/', tariffsController.calculateTariffs)

module.exports = router;