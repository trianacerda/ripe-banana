const faker = require('faker');

const randomNum = Math.ceil(Math.random() * 5);

module.exports = {
  rating: randomNum,
  reviewer: '1',
  review: `${faker.lorem.words()}`,
  film: '1',
};
