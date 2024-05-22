const { faker } = require("@faker-js/faker");
const generateAddresses = require("./generateAddresses");
const generatePersons = require("./generatePersons");

function generateCompanies({ _quantity, _locale, _seed }) {
  const data = [];
  for (let i = 0; i < _quantity && i < 1000; i++) {
    const company = {
      id: i + 1,
      name: faker.company.name(),
      email: faker.internet.email(),
      vat: faker.number.int(),
      phone: faker.phone.number(),
      country: faker.location.country(),
      addresses: generateAddresses({
        _quantity: 2,
        _locale: _locale,
        _seed: _seed,
      }),
      website: faker.internet.url(),
      image: faker.image.url(),
      contact: generatePersons({
        _quantity: 1,
        _locale: _locale,
        _seed: _seed,
      })[0],
    };
    data.push(company);
  }
  return data;
}

module.exports = generateCompanies;
