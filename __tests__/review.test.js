const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
const review = require('../lib/utils/review-utils.js');
const reviewer = require('../lib/utils/reviewer-utils.js');
const studio = require('../lib/utils/studios-utils.js');
const films = require('../lib/utils/films-utils.js');

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should post a REVIEW', async () => {
    await request(app).post('/api/studios').send(studio);
    await request(app).post('/api/films').send(films);
    await request(app).post('/api/reviewers').send(reviewer);
    return await request(app)
      .post('/api/reviews')
      .send(review)
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          rating: expect.any(Number),
          reviewer: expect.any(String),
          review: expect.any(String),
          film: expect.any(String),
        });
      });
  });

  afterAll(() => {
    pool.end();
  });
});
