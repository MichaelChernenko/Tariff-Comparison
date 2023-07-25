const { calcAllTariffPlans } = require("../services/tariffs");
const { errorMessages } = require("../constants/errors");
const { logger } = require("../services/logger");

exports.calculateTariffs = async(req, res, next) => {
    try {
        const { consumption } = req.query;
        const calculatedTariffs = await calcAllTariffPlans(consumption);

        logger.debug({ calculatedTariffs },
            "Data received and calculated, sending to client"
        );

        res.status(200).json({ consumption: calculatedTariffs });
    } catch (error) {
        logger.error(error, "Failed to calculate electricity tariffs");

        res.status(500).json({
            status: errorMessages.INTERNAL_ERROR,
            data: { error },
        });
    }
};