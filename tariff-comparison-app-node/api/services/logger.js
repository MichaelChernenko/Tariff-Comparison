const pino = require("pino");

exports.logger = pino({
    level: process.env.NODE_ENV === "production" ? "info" : "debug",
});