const pool = require('../utils/pool');

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
      'SELECT id, name, company FROM reviewers',
    );
    return rows;
  }
}

//   static async getById(id) {
//     const { rows } = await pool.query(
//       'SELECT id, name, company FROM reviewers WHERE id = $1', [id]
//       );
//       console.log('ROWSSSSS', rows);
//     const review = await pool.query(
//       'SELECT id, rating, review FROM reviews'
//     );
    
//     const Obj = new Reviewer({
//       ...rows,
//     });

//     const reviews = [
//       {
//         ...review.rows[0]
//       },
//     ];
//     console.log('REVIEWSSSSS', reviews);

//     return { ...Obj, reviews: reviews };
//   }

// };

