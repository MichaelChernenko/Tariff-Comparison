const supertest = require('supertest');
const app = require('../app')


const server = app.listen(3000)

const example = [
    { name: 'Product A', annualCost: 830 },
    { name: 'Product B', annualCost: 800 },
    { name: 'Product C', annualCost: 609 },
    { name: 'Product D', annualCost: 875 }
]

const request = supertest.agent(server);

describe('testing tariffController', () => {
    test('calc tariffs', async() => {
        await request
            .post('/tariffs')
            .send({ consumption: 3500 })
            .expect(res => {
                console.log(example)
                res.body.consumption = example
            })
            .expect(201, {
                consumption: example
            })
    })
})