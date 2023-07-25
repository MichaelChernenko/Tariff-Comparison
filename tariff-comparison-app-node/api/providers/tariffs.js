const fs = require("fs/promises");
const { logger } = require("../services/logger");

exports.getExternalTariffData = async() => {
    try {
        const data = await fs.readFile("./externalTariffProvider.json");

        return JSON.parse(data);
    } catch (error) {
        logger.error({ error }, "Error when reading external provider data");
    }
};