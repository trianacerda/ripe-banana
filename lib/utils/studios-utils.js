const faker = require('faker');

module.exports = {
  name: `${faker.company.companyName()}`,
  city: `${faker.address.city()}`,
  state: `${faker.address.state()}`,
  country: `${faker.address.country()}`,
};
