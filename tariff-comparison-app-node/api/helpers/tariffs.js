const { MONTHS, CENT_MODIFIER } = require("../constants/tariffs");
const { logger } = require("../services/logger");

exports.calcBasicElectricityTariff = (tariffData, userConsumption) => {
    try {
        const annualCost =
            MONTHS * tariffData.baseCost +
            userConsumption * (tariffData.additionalKwhCost * CENT_MODIFIER);
        return annualCost;
    } catch (error) {
        logger.error(error, "Error occured in calcBasicElectricityTariff");
    }
};

exports.calcPackagedTariff = (tariffData, userConsumption) => {
    try {
        const annualCost =
            userConsumption <= tariffData.includedKwh ?
            tariffData.baseCost :
            calcOverspentPackagedTarrif(tariffData, userConsumption);
        return annualCost;
    } catch (error) {
        logger.error(error, "Error occured in calcPackagedTariff");
    }
};

const calcOverspentPackagedTarrif = (tariffData, userConsumption) => {
    try {
        const annualCost =
            (userConsumption - tariffData.includedKwh) *
            (tariffData.additionalKwhCost * CENT_MODIFIER) +
            tariffData.baseCost;
        return annualCost;
    } catch (error) {
        logger.error(error, "Error occured in calcOverspentPackagedTarrif");
    }
};