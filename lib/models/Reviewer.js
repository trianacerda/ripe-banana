const films = require('../controllers/films');
const pool = require('../utils/pool');
const Review = require('./Reviews');

module.exports = class Reviewer {
  id;
  name;
  company;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.company = row.company;
  }

  static async insert({ name, company }) {
    const { rows } = await pool.query(
      'INSERT INTO reviewers (name, company) VALUES ($1, $2) RETURNING *',
      [name, company]
    );
    return new Reviewer(rows[0]);
  }

  static async get() {
    const { rows } = await pool.query(
      'SELECT id, name, company FROM reviewers'
    );
    return rows;
  }

  static async getById(id) {
    const { rows } = await pool.query(
      'SELECT id, name, company FROM reviewers WHERE id = $1',
      [id]
    );
    const review = await pool.query('SELECT id, rating, review FROM reviews');

    const film = await pool.query('SELECT id, title FROM films');

    const reviewerObj = new Reviewer({
      ...rows[0],
    });

    const reviews = [
      {
        ...review.rows[0],
        film: film.rows[0],
      },
    ];

    return { ...reviewerObj, reviews };
  }

  static async update(id, { name, company }) {
    const { rows } = await pool.query(
      'UPDATE reviewers SET name=$2 , company=$3 WHERE id=$1 RETURNING * ',
      [id, name, company]
    );
    return new Reviewer(rows[0]);
  }
};
