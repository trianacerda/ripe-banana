const pool = require('../utils/pool');

module.exports = class Films {
  id;
  title;
  studio;
  released;
  name;
  cast;
  rating;
  review;
  reviewer;

  constructor(row) {
    this.id = row.id;
    this.title = row.title;
    this.studio = row.studio;
    this.released = row.released;
    this.name = row.name;
    this.cast = row.cast;
    this.rating = row.rating;
    this.reviewer = row.reviewer;
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
  
  static async getFilmById(id) {
    // console.log(id, 'IDDD')
    const { rows } = await pool.query('SELECT films.id, title, released FROM films WHERE id = $1',[id]);
    
    // console.log('ROWS', rows)
    const studio = await pool.query('SELECT studios.id, studios.name FROM studios LEFT JOIN films ON studios.id = films.id WHERE films.id = $1', [id]);
    // console.log('studio', studio.rows[0])
    const actor = await pool.query(`SELECT actors.id, actors.name FROM actors`
    );
    const review = await pool.query('SELECT id, rating, review FROM reviews');
    const reviewer = await pool.query('SELECT id, name FROM reviewers');
    console.log('REVEW', review)
    const filmObj = new Films({
      ...rows[0],
      studio: studio.rows[0],
      cast: actor.rows,
      
    });
    const reviews = [{...review.rows[0], reviewer: reviewer.rows[0]}] 
    console.log('FILM', reviews)
    return { ...filmObj, reviews } 
  }
  };

