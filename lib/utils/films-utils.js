const faker = require('faker');

const randomNum = Math.floor(Math.random() * (2022 - 1900) + 1900);

module.exports = {
  title: `${faker.name.title()}`,
  studio: '1',
  released: randomNum
};
// id BIGINT GENERATED ALWAYS AS IDENTITY PRIMARY KEY,
//     title TEXT NOT NULL,
//     studio BIGINT NOT NULL,
//     FOREIGN KEY(studio) REFERENCES studio(id) ON DELETE CASCADE,
//     released INT NOT NULL
