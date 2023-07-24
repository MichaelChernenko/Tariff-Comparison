const tariffService = require("../api/services/tariffs");
const tariffHelpers = require("../api/helpers/tariffs");

const tariffs = [
    { annualCost: 830, name: "Product A" },
    { annualCost: 800, name: "Product B" },
    { annualCost: 609, name: "Product C" },
    { annualCost: 875, name: "Product D" },
];

describe("testing tariffService", () => {
    test("calc", async() => {
        expect(await tariffService.calcAllTariffPlans(3500)).toEqual(tariffs);
    });
});

describe.each([{
        tariffData: { baseCost: 5, additionalKwhCost: 22, includedKwh: 4000 },
        userConsumption: 3500,
        expectedBase: 830,
        expectedPackged: 5
    },
    {
        tariffData: { baseCost: 7, additionalKwhCost: 15, includedKwh: 2000 },
        userConsumption: 4500,
        expectedBase: 759,
        expectedPackged: 382
    }
])(
    ".add($tariffData, $userConsumption, $expectedBase, $expectedPackged",
    ({ tariffData, userConsumption, expectedBase, expectedPackged }) => {
        test(`returns ${expectedBase}`, () => {
            expect(
                tariffHelpers.calcBasicElectricityTariff(tariffData, userConsumption)
            ).toEqual(expectedBase);
        });

        test(`returns ${expectedPackged}`, () => {
            expect(
                tariffHelpers.calcPackagedTariff(tariffData, userConsumption)
            ).toEqual(expectedPackged);
        });
    }
);