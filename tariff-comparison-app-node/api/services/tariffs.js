const tariffProviderService = require("./tariffProviderService");
const tariffHelpers = require('../helpers/tariffs');

const tariffCalculationMap = {
    1: (tariffData, consumption) =>
        tariffHelpers.calcBasicElectricityTariff(tariffData, consumption),
    2: (tariffData, consumption) => tariffHelpers.calcPackagedTariff(tariffData, consumption),
};

exports.calcAllTariffPlans = async(consumption) => {
    const tariffProducts = await tariffProviderService.getExternalTariffData();

    console.log("KEKE", tariffProducts);

    const calculatedAnnualCosts = tariffProducts.map(
        ({ type, name, ...tariffData }) => {
            const calculationFunction = tariffCalculationMap[type];
            const annualCost = calculationFunction(tariffData, consumption);

            console.log("TYPE", { annualCost, type, tariffData });

            return { name, annualCost };
        }
    );

    return calculatedAnnualCosts;
};