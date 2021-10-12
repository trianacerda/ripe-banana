const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
const studio = require('../lib/utils/studios-utils.js');
const films = require('../lib/utils/films-utils.js');
const actor = require('../lib/utils/actor-utils');
const reviewer = require('../lib/utils/reviewer-utils');
const review = require('../lib/utils/review-utils.js');

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
        expect(res.body).toEqual({
          id: expect.any(String),
          title: expect.any(String),
          released: expect.any(Number),
          studio: { id: expect.any(String), name: expect.any(String) },
        });
      });
  });

  //   {
  //     title,
  //     released,
  //     studio: { id, name },
  //     cast: [{ id, name }], // actor id and name
  //     reviews: [{
  //         id,
  //         rating,
  //         review,
  //         reviewer: { id, name }
  //     ]
  // }

  it.only('should get films by id + reviews/actors/reviewer', async () => {
    await request(app).post('/api/studios').send(studio);
    await request(app).post('/api/films').send(films);
    await request(app).post('/api/actors').send(actor);
    await request(app).post('/api/reviewers').send(reviewer);
    await request(app).post('/api/reviews').send(review);
    const res = await request(app).get('/api/films/1');
    expect(res.body).toEqual({
      id: expect.any(String),
      title: expect.any(String),
      released: expect.any(Number),
      studio: { id: expect.any(String), name: expect.any(String) },
      cast: [{ id: expect.any(String), name: expect.any(String) }],
      reviews: [{
        id: expect.any(String),
        rating: expect.any(Number),
        review: expect.any(String),
        reviewer: { id : expect.any(String), name: expect.any(String), }
      }]
    });
  });


  // afterAll(() => {
  //   pool.end();
  // });
});
