const { faker } = require("@faker-js/faker");

function generatePlaces({ _quantity, _locale, _seed }) {
  const data = [];
  for (let i = 0; i < _quantity; i++) {
    const place = {
      latitude: faker.location.latitude(),
      longitude: faker.location.longitude(),
    };
    data.push(place);
  }
  return data;
}

module.exports = generatePlaces;
