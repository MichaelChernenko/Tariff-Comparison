const tariffProviderService = require("./tariffProviderService");
const tariffConstants = require("../constants/tariffs");

exports.calcAllTariffPlans = async(consumption) => {
    const tariffProducts = tariffProviderService.getExternalTariffData();
    const calculatedAnnualCosts = [];

    await tariffProducts.then((data) => {
        data.map((product) => {
            if (product.type === 1) {
                calculatedAnnualCosts.push({
                    name: product.name,
                    annualCost: calcBasicElectricyTariff({
                            baseCost: product.baseCost,
                            additionalKwhCost: product.additionalKwhCost,
                        },
                        consumption
                    ),
                });
            } else if (product.type === 2) {
                calculatedAnnualCosts.push({
                    name: product.name,
                    annualCost: calcPackagedTariff({
                            baseCost: product.baseCost,
                            additionalKwhCost: product.additionalKwhCost,
                            includedKwh: product.includedKwh,
                        },
                        consumption
                    ),
                });
            }
        });
    });

    return calculatedAnnualCosts;
};

exports.calcBasicElectricyTariff = (tariffData, userConsumption) => {
    return (
        tariffConstants.MONTHES * tariffData.baseCost +
        userConsumption *
        (tariffData.additionalKwhCost * tariffConstants.CENT_MODIFIER)
    );
};

exports.calcPackagedTariff = (tariffData, userConsumption) => {
    const annualCost =
        userConsumption <= tariffData.includedKwh ?
        tariffData.baseCost :
        calcOverspentPackagedTarrif(tariffData, userConsumption);
    return annualCost;
};

exports.calcOverspentPackagedTarrif = (tariffData, userConsumption) => {
    const annualCost =
        (userConsumption - tariffData.includedKwh) *
        (tariffData.additionalKwhCost * tariffConstants.CENT_MODIFIER) +
        tariffData.baseCost;
    return annualCost;
};