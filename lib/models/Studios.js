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

  static async getSingleStudio(id) {
    const { rows } = await pool.query(
      'SELECT * FROM studios WHERE id = $1', 
      [id]
    );
    console.log('ROWS', rows);
    const  films  = await pool.query(
      'SELECT id, title FROM films WHERE studio = $1',
      [id]);
      //{ id, name, city, state, country, films: [{ id, title }] }
    console.log('ROWS FILMS', films.rows);
    const studioObj = new Studios(rows[0]);
    return {
      ...studioObj,
      films: films.rows
    };
  }
 
};
