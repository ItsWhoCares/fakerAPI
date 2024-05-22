const { faker } = require("@faker-js/faker");

function generateAddresses({ _quantity, _locale, _seed }) {
  const data = [];
  for (let i = 0; i < _quantity && i < 1000; i++) {
    const address = {
      id: i + 1,
      street: faker.location.street(),
      streetName: faker.location.streetAddress(),
      buildingNumber: faker.location.buildingNumber(),
      city: faker.location.city(),
      zipcode: faker.location.zipCode(),
      state: faker.location.state(),
      country: faker.location.country(),
      country_code: faker.location.countryCode(),
      lat: faker.location.latitude(),
      lng: faker.location.longitude(),
    };
    data.push(address);
  }
  return data;
}

// default export

module.exports = generateAddresses;
