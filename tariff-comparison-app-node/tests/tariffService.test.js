const test = require("../api/services/tariffs");

describe("testing tariffService", () => {
    test("calc", () => {
        expect(
            test.calcBasicElectricyTariff({
                includedKwh: 4000,
                baseCost: 800,
                additionalKwhCost: 30,
            }, 3500)
        ).toEqual(2);
    });
});