const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
const actor = require('../lib/utils/actor-utils.js');

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should post a new ACTOR', async () => {
    return await request(app)
      .post('/api/actor')
      .send(actor)
      .then((res) => {
        expect(res.body).toEqual({});
      });
  });

  afterAll(() => {
    pool.end();
  });
});
