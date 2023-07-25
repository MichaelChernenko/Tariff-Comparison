const tariffsService = require('../services/tariffs');
const { errorMessages } = require('../constants/errors');
const { logger } = require('../services/logger');

exports.calculateTariffs = async(req, res, next) => {
    try {
        const { consumption } = req.body;
        const result = await tariffsService.calcAllTariffPlans(consumption);
        logger.debug({ result }, 'Data received and calculated, sending to client');

        res.status(200).json({ consumption: result });
    } catch (error) {
        logger.error(error, 'Failed to calculate electiricty tariffs');
        res.status(500).json({
            status: errorMessages.INTERNAL_ERROR,
            data: { error },
        });
    }
};