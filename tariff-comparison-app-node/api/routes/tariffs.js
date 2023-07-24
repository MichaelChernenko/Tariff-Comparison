const express = require('express');
const router = express.Router();

const tariffsController = require('../controllers/tariffs');

router.post('/', tariffsController.calculateTariffs)

module.exports = router;