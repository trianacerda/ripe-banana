const pool = require('../utils/pool');

module.exports = class Review {
  id;
  rating;
  reviewer;
  review;
  film;

  constructor(row) {
    this.id = row.id;
    this.rating = row.rating;
    this.reviewer = row.reviewer;
    this.review = row.review;
    this.film = row.film;
  }

  static async insert({ rating, reviewer, review, film }) {
    const { rows } = await pool.query(
      'INSERT INTO reviews (rating, reviewer, review, film) VALUES ($1, $2, $3, $4) RETURNING *',
      [rating, reviewer, review, film]
    );
    return new Review(rows[0]);
  }
};
