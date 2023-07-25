const app = require("../app");
const supertest = require("supertest");

const example = [
    { name: "Product A", annualCost: 830 },
    { name: "Product B", annualCost: 800 },
    { name: "Product C", annualCost: 609 },
    { name: "Product D", annualCost: 875 },
];

let server;
let request;

describe("Testing tariffController", () => {
    beforeAll(() => {
        server = app.listen(3000);
        request = supertest.agent(server);
    });

    test("Calculate tariffs", async() => {
        const { body } = await request.post("/tariffs").send({ consumption: 3500 });

        expect(body.consumption).toEqual(example)
    });

    afterAll(async() => {
        await server.close();
    })
});