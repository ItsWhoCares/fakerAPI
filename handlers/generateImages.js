const { faker, ur } = require("@faker-js/faker");

function generateImages({ _quantity, _locale, _seed, _width, _height, _type }) {
  const data = [];
  for (let i = 0; i < _quantity; i++) {
    const image = {
      title: faker.lorem.words(),
      description: faker.lorem.sentence(),
      url: faker.image.urlLoremFlickr({
        width: _width || 640,
        height: _height || 480,
        category: _type || "any",
      }),
    };
    data.push(image);
  }
  return data;
}
module.exports = generateImages;
