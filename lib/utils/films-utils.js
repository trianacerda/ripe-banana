const faker = require('faker');

module.exports = {
  title: `${faker.name.title()}`,
  studio: '1',
  released: `${faker.date.recent()}`
};
// id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//     title TEXT NOT NULL,
//     studio BIGINT NOT NULL,
//     FOREIGN KEY(studio) REFERENCES studio(id) ON DELETE CASCADE,
//     released INT NOT NULL
