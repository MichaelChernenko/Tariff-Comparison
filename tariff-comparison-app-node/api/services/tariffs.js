const { getExternalTariffData } = require("../providers/tariffs");
const { tariffCalculationMap } = require("../helpers/tariffs");
const { logger } = require("../services/logger");

exports.calcAllTariffPlans = async(consumption) => {
    const tariffProducts = await getExternalTariffData();

    logger.debug({ tariffProducts }, "External tariff plans received");

    const calculatedAnnualCosts = tariffProducts.map(
        ({ type, name, ...tariffData }) => {
            const calculationFunction = tariffCalculationMap[type];
            const annualCost = calculationFunction(tariffData, consumption);

            return { name, annualCost };
        }
    );

    logger.debug({ calculatedAnnualCosts }, "Annual costs calculated");

    return calculatedAnnualCosts;
};