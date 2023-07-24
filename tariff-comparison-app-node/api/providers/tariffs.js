const fs = require("fs/promises");
const logger = require("../services/logger");

exports.getExternalTariffData = async() => {
    try {
        const data = await fs.readFile("./externalTariffProvider.json");
        logger.logger.debug({ data }, "Data from external provider is received");

        return JSON.parse(data);
    } catch (error) {
        logger.logger.error({ error }, "Error when reading external provider data");
    }
};