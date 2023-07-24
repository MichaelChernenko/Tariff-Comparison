const tariffProvider = require("../providers/tariffs");
const tariffHelpers = require('../helpers/tariffs');

const tariffCalculationMap = {
    1: (tariffData, consumption) =>
        tariffHelpers.calcBasicElectricityTariff(tariffData, consumption),
    2: (tariffData, consumption) => tariffHelpers.calcPackagedTariff(tariffData, consumption),
};

exports.calcAllTariffPlans = async(consumption) => {
    const tariffProducts = await tariffProvider.getExternalTariffData();

    const calculatedAnnualCosts = tariffProducts.map(
        ({ type, name, ...tariffData }) => {
            const calculationFunction = tariffCalculationMap[type];
            const annualCost = calculationFunction(tariffData, consumption);

            return { name, annualCost };
        }
    );

    return calculatedAnnualCosts;
};