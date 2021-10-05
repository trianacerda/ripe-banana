const pool = require('../utils/pool');

module.exports = class Studios {
  

  constructor(row) {
    this.id = row.id;
    this.name = row.name;
    this.city = row.city;
    this.state = row.state;
    this.country = row.country;
  }

  static async insert({ name, city, state, country }) {
    const { rows } = await pool.query(
      'INSERT INTO studios (name, city, state, country) VALUES ($1, $2, $3, $4) RETURNING *',
      [name, city, state, country]
    );
    return new Studios(rows[0]);
  }

  static async getStudios() {
    const { rows } = await pool.query('SELECT id, name FROM studios');
    return rows.map((row) => new Studios(row));
  }

  static async getStudiosById(id) {
    const { rows } = await pool.query('SELECT studios.id, name, city, state, country, films FROM studios LEFT JOIN films ON studios.id = films.studio', [id]);
    return new Studios(rows[0]);
  }
    
 
};
