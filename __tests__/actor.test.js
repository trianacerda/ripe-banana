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
      .post('/api/actors')
      .send(actor)
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          dob: expect.any(String),
          pob: expect.any(String),
        });
      });
  });

  it('should get a new actor with name/id', async () => {
    await request(app).post('/api/actors').send(actor);
    return await request(app)
      .get('/api/actors')
      .then((res) => {
        expect(res.body).toEqual([
          { id: expect.any(String), name: expect.any(String) },
        ]);
      });
  });

  afterAll(() => {
    pool.end();
  });
});
