const faker = require('faker');

module.exports = {
  name: `${faker.name.firstName()}`,
  dob: `${faker.date.past()}`,
  pob: `${faker.address.city()}`,
};
