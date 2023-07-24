const { MONTHS, CENT_MODIFIER } = require("../constants/tariffs");

exports.calcBasicElectricityTariff = (tariffData, userConsumption) => {
    return (
        MONTHS * tariffData.baseCost +
        userConsumption * (tariffData.additionalKwhCost * CENT_MODIFIER)
    );
};

exports.calcPackagedTariff = (tariffData, userConsumption) => {
    const annualCost =
        userConsumption <= tariffData.includedKwh ?
        tariffData.baseCost :
        calcOverspentPackagedTarrif(tariffData, userConsumption);
    return annualCost;
};

const calcOverspentPackagedTarrif = (tariffData, userConsumption) => {
    const annualCost =
        (userConsumption - tariffData.includedKwh) *
        (tariffData.additionalKwhCost * CENT_MODIFIER) +
        tariffData.baseCost;
    return annualCost;
};