const faker = require('faker');

module.exports = {
  name: `${faker.name.firstName()}`,
  dob: '11/11/1989',
  pob: `${faker.address.city()}`,
};
