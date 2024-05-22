const { faker } = require("@faker-js/faker");

function generateTexts({ _quantity, _locale, _seed, _characters }) {
  const data = [];
  for (let i = 0; i < _quantity; i++) {
    const text = {
      title: faker.lorem.words(),
      author: faker.person.fullName(),
      genre: faker.lorem.word(),
      content: faker.lorem.paragraph({
        // min: _characters || 10,
        max: _characters || 10,
      }),
    };
    data.push(text);
  }
  return data;
}

module.exports = generateTexts;
