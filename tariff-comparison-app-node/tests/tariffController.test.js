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

describe("testing tariffController", () => {
    beforeAll(async() => {
        server = app.listen(3000);
        request = supertest.agent(server);
    });

    test("calc tariffs", async() => {
        await request
            .post("/tariffs")
            .send({ consumption: 3500 })
            .expect((res) => {
                res.body.consumption = example;
            })
            .expect(200, {
                consumption: example,
            });
    });

    afterAll(async() => {
        await server.close();
    })
});