const faker = require('faker');

module.exports = {
  name: `${faker.name.firstName()}`,
  company: `${faker.company.companyName()}`,
};
