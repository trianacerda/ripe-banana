const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
const actor = require('../lib/utils/actor-utils.js');
const films = require('../lib/utils/films-utils');
const studio = require('../lib/utils/studios-utils');

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

  it('should get actors by id', async () => {
    await request(app).post('/api/studios').send(studio);
    await request(app).post('/api/actors').send(actor);
    await request(app).post('/api/films').send(films);
    return await request(app)
      .get('/api/actors/1')
      .then((res) => {
        expect(res.body).toEqual({
          name: expect.any(String),
          dob: expect.any(String),
          pob: expect.any(String),
          films: [
            {
              id: expect.any(String),
              title: expect.any(String),
              released: expect.any(Number),
            },
          ],
        });
      });
  });

  afterAll(() => {
    pool.end();
  });
});
