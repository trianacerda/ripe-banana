const pool = require('../utils/pool');

module.exports = class Films {
  id;
  title;
  studio;
  released;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.studio = row.studio;
    this.released = row.released;
  }

  static async insert({ title, studio, released }) {
    const { rows } = await pool.query(
      'INSERT INTO films (title, studio, released) VALUES ($1, $2, $3) RETURNING *',
      [title, studio, released]
    );
    return new Films(rows[0]);
  }

  static async getFilms() {
    const { rows } = await pool.query('SELECT id, title, released FROM films');
    const studio = await pool.query('SELECT id, name FROM studios');
    const filmObj = new Films(rows[0]);
    return {
      ...filmObj,
      studio: studio.rows[0],
    };
  }
};
