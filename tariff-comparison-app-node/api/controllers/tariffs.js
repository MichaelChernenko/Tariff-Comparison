const tariffsService = require('../services/tariffs');
const errorMessages = require('../constants/errors');

exports.calculateTariffs = async(req, res, next) => {
    try {
        if (!req.body) return res.status(400);

        const { consumption } = req.body;

        const result = await tariffsService.calcAllTariffPlans(consumption);

        res.status(200).json({ consumption: result });
    } catch (error) {
        res.status(500).json({
            status: errorMessages.INTERNAL_ERROR,
            data: { error },
        });
    }
};