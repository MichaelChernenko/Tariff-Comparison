const MONTHES = 12;
const CENT_MODIFIER = 0.01;

const tariffProviderService = require('../services/tariffProviderService')

exports.calcAllTariffPlans = (consumption) => {
    const tariffProducts = tariffProviderService.getExternalTariffData();
    const calculatedAnnualCosts = [];

    tariffProducts.map(product => {
        if (product.type === 1) {
            calculatedAnnualCosts.push({
                name: product.name,
                annualCost: calcBasicElectricyTariff(product.baseCost, product.additionalKwhCost, consumption)
            })
        } else if (product.type === 2) {
            calculatedAnnualCosts.push({
                name: product.name,
                annualCost: calcPackagedTariff(product.baseCost, product.additionalKwhCost, product.includedKwh, consumption)
            })
        }
    })

    return calculatedAnnualCosts;
}

const calcBasicElectricyTariff = (baseCost, additionalKwhCost, userConsumption) => {
    return MONTHES * baseCost + userConsumption * (additionalKwhCost * CENT_MODIFIER);
}

const calcPackagedTariff = (baseCost, additionalCost, includedKwh, userConsumption) => {
    let annualCost = 0;

    if (userConsumption <= includedKwh) {
        annualCost = baseCost
    } else {
        annualCost = (userConsumption - includedKwh) * (additionalCost * CENT_MODIFIER) + baseCost;
    }

    return annualCost;
}