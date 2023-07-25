const express = require("express");
const router = express.Router();

const { calculateTariffs } = require("../controllers/tariffs");
const { validateQuery } = require("../validators/bodyValidators");
const { consumptionSchema } = require("../validators/schemas/consumption");

router.get("/", validateQuery(consumptionSchema), calculateTariffs);

module.exports = router;