const { MONTHS, CENT_MODIFIER } = require("../constants/tariffs");
const { logger } = require("../services/logger");

const calcBasicElectricityTariff = (tariffData, userConsumption) => {
    try {
        const annualCost =
            MONTHS * tariffData.baseCost +
            userConsumption * (tariffData.additionalKwhCost * CENT_MODIFIER);
        return annualCost;
    } catch (error) {
        logger.error(error, "Error occurred in calcBasicElectricityTariff");
    }
};

const calcPackagedTariff = (tariffData, userConsumption) => {
    try {
        const annualCost =
            userConsumption <= tariffData.includedKwh ?
            tariffData.baseCost :
            calcOverspentPackagedTariff(tariffData, userConsumption);
        return annualCost;
    } catch (error) {
        logger.error(error, "Error occurred in calcPackagedTariff");
    }
};

const tariffCalculationMap = {
    1: (tariffData, consumption) =>
        calcBasicElectricityTariff(tariffData, consumption),
    2: (tariffData, consumption) => calcPackagedTariff(tariffData, consumption),
};

const calcOverspentPackagedTariff = (tariffData, userConsumption) => {
    try {
        const annualCost =
            (userConsumption - tariffData.includedKwh) *
            (tariffData.additionalKwhCost * CENT_MODIFIER) +
            tariffData.baseCost;
        return annualCost;
    } catch (error) {
        logger.error(error, "Error occurred in calcOverspentPackagedTariff");
    }
};

module.exports = {
    tariffCalculationMap,
    calcBasicElectricityTariff,
    calcPackagedTariff
}