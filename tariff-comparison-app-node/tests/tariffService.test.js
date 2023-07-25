const { calcAllTariffPlans } = require("../api/services/tariffs");
const { calcBasicElectricityTariff, calcPackagedTariff } = require("../api/helpers/tariffs");

const tariffs = [
    { annualCost: 830, name: "Product A" },
    { annualCost: 800, name: "Product B" },
    { annualCost: 609, name: "Product C" },
    { annualCost: 875, name: "Product D" },
];

describe("testing tariffService", () => {
    test("Get correct consumption data", async() => {
        expect(await calcAllTariffPlans(3500)).toEqual(tariffs);
    });
});

describe.each([{
        tariffData: { baseCost: 5, additionalKwhCost: 22, includedKwh: 4000 },
        userConsumption: 3500,
        expectedBase: 830,
        expectedPackaged: 5
    },
    {
        tariffData: { baseCost: 7, additionalKwhCost: 15, includedKwh: 2000 },
        userConsumption: 4500,
        expectedBase: 759,
        expectedPackaged: 382
    }
])(
    ".add($tariffData, $userConsumption, $expectedBase, $expectedPackaged",
    ({ tariffData, userConsumption, expectedBase, expectedPackaged }) => {
        test(`returns ${expectedBase}`, () => {
            expect(
                calcBasicElectricityTariff(tariffData, userConsumption)
            ).toEqual(expectedBase);
        });

        test(`returns ${expectedPackaged}`, () => {
            expect(
                calcPackagedTariff(tariffData, userConsumption)
            ).toEqual(expectedPackaged);
        });
    }
);