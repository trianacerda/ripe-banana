const pool = require('../lib/utils/pool.js');
const setup = require('../data/setup.js');
const request = require('supertest');
const app = require('../lib/app.js');
const reviewer = require('../lib/utils/reviewer-utils.js');
const studio = require('../lib/utils/studios-utils.js');
const films = require('../lib/utils/films-utils.js');
const review = require('../lib/utils/review-utils.js');

describe('ripe-banana routes', () => {
  beforeEach(() => {
    return setup(pool);
  });

  it('should post a new REVIEWER', async () => {
    return await request(app)
      .post('/api/reviewers')
      .send(reviewer)
      .then((res) => {
        expect(res.body).toEqual({
          id: expect.any(String),
          name: expect.any(String),
          company: expect.any(String),
        });
      });
  });

  it('should GET a new REVIEWER', async () => {
    await request(app).post('/api/studios').send(studio);
    await request(app).post('/api/films').send(films);
    await request(app).post('/api/reviewers').send(reviewer);
    await request(app).post('/api/reviews').send(review);
      
    return await request(app).get('/api/reviewers')
      .then((res) => {
        console.log('RESBODY', res.body);
        expect(res.body).toEqual([{
          id: expect.any(String),
          name: expect.any(String),
          company: expect.any(String),
        }]);
      });
  });

  afterAll(() => {
    pool.end();
  });
});
