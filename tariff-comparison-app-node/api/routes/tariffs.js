const express = require('express');
const router = express.Router();

const tariffsController = require('../controllers/tariffs');

router.post('/', (req, res, next) => {
    if (!req.body) return res.status(400)

    const annualCostResult = tariffsController.calcAllTariffPlans(req.body.consumption);

    res.status(201).json({
        message: 'All is OK',
        consumption: annualCostResult
    })
})

module.exports = router;