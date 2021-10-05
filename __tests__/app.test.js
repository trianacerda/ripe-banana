const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
const faker = require('faker');

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('POST/studios', async () => {
    const studioName = faker.company.companyName();
    return await request(app).post('/api/studios').send(studioName)
      .then((res) => {
        expect(res.body).toEqual([{ id, name }]);
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
