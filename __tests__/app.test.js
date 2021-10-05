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
        expect(res.body).toEqual({ ...studio, id: '1' });
      });
  });

  it('shoudld get a studio with GET /studios', async () => {
    await request(app).post('/api/studios').send(studio);
    return await request(app)
      .get('/api/studios')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: expect.any(String),
            name: expect.any(String),
          },
        ]);
      });
  });

  afterAll(() => {
    pool.end();
  });
});
