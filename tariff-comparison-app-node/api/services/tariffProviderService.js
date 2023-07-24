const fs = require("fs/promises");

exports.getExternalTariffData = async() => {
    const data = await fs.readFile("./externalTariffProvider.json");

    return JSON.parse(data);
};