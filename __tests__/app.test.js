const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
const studio = require('../lib/utils/studios-utils.js');

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should create a new entry with POST/studios', async () => {
    return await request(app)
      .post('/api/studios')
      .send(studio)
      .then((res) => {
        console.log('res', res.body);
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
