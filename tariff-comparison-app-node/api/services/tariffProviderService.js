const fs = require('fs');

exports.getExternalTariffData = () => {
    const TariffProducts = fs.readFileSync('./externalTariffProvider.json');
    return JSON.parse(TariffProducts);
};