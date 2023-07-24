const tariffsService = require('../services/tariffs');
const errorMessages = require('../constants/errors');

// exports.calculateTariffs = (req, res, next) => {
//     try {
//         if (!req.body) return res.status(400)

//         tariffsService.calcAllTariffPlans(req.body.consumption).then(data => {
//             res.status(201).json({
//                 consumption: data
//             })
//         })
//     } catch (error) {
//         res.status(500).json({
//             status: errorMessages.INTERNAL_ERROR,
//             data: { error }
//         })
//     }
// }

exports.calculateTariffs = async(req, res, next) => {
    try {
        if (!req.body) return res.status(400);

        const { consumption } = req.body;

        const result = await tariffsService.calcAllTariffPlans(consumption);

        console.log("RESULT", result);

        res.status(200).json({ consumption: result });
    } catch (error) {
        res.status(500).json({
            status: errorMessages.INTERNAL_ERROR,
            data: { error },
        });
    }
};