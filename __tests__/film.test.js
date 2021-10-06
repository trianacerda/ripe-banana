const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
const studio = require('../lib/utils/studios-utils.js');
const films = require('../lib/utils/films-utils.js');

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should create a new entry with POST/films', async () => {
    await request(app).post('/api/studios').send(studio);
    return await request(app)
      .post('/api/films')
      .send(films)
      .then((res) => {
        expect(res.body).toEqual({ ...films, id: '1' });
      });
  });

  it('should get all films with GET /films', async () => {
    await request(app).post('/api/studios').send(studio);
    await request(app).post('/api/films').send(films);
    return await request(app)
      .get('/api/films')
      .then((res) => {
        expect(res.body).toEqual([
          {
            id: expect.any(String),
            title: expect.any(String),
            realeased: expect.any(Number),
            studio: { id: expect.any(String), name: expect.any(String) },
          },
        ]);
      });
  });

  afterAll(() => {
    pool.end();
  });
});
