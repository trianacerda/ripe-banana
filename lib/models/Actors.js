const films = require('../controllers/films');
const pool = require('../utils/pool');

module.exports = class Actors {
  id;
  name;
  dob;
  pob;

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.dob = row.dob;
    this.pob = row.pob;
  }

  static async insert({ name, dob, pob }) {
    const { rows } = await pool.query(
      'INSERT INTO actors (name, dob, pob) VALUES ($1, $2, $3) RETURNING *',
      [name, dob, pob]
    );

    return new Actors(rows[0]);
  }
};
