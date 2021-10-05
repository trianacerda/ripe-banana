const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
const faker = require('faker');

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  const studio = {
    name: `${faker.company.companyName()}`,
    city: `${faker.address.city()}`,
    state: `${faker.address.state()}`,
    country: `${faker.address.country()}`,
  };

  it('should create a new entry with POST/studios', async () => {
    return await request(app)
      .post('/api/studios')
      .send(studio)
      .then((res) => {
        expect(res.body).toEqual({ ...studio, id: '1' });
      });
  });

  // it('GET /studios', () => {
  //   const studioName = faker.company.companyName();
  //   return request(app).get().send()
  //     .then((res) => {
  //       expect(res.body).toEqual([{ id, name }]);
  //     });
  // });

  afterAll(() => {
    pool.end();
  });
});
