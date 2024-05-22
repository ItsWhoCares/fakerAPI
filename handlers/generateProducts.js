const { faker } = require("@faker-js/faker");
const generateImages = require("./generateImages");

function generateProducts({
  _quantity,
  _locale,
  _seed,
  _category_type,
  _taxes,
  _price_min,
  _price_max,
}) {
  const data = [];
  for (let i = 0; i < _quantity && i < 1000; i++) {
    const product = {
      id: i + 1,
      name: faker.commerce.productName(),
      description: faker.commerce.productDescription(),
      ean: faker.commerce.isbn({
        variant: 13,
        separator: "",
      }),
      upc: faker.commerce.isbn({
        variant: 10,
        separator: "",
      }),
      image: faker.image.urlLoremFlickr({
        width: 640,
        height: 480,
        category: "product",
      }),
      images: generateImages({
        _quantity: 3,
        _locale,
        _seed,
        _width: 640,
        _height: 480,
        _type: "tech",
      }),
      net_price: faker.commerce.price({
        min: _price_min,
        max: _price_max,
        dec: 2,
        symbol: "$",
      }),
      tax: _taxes,
      price: faker.commerce.price({
        min: _price_min,
        max: _price_max,
        dec: 2,
        symbol: "$",
      }),
      categories: [
        faker.string.uuid(),
        faker.string.uuid(),
        faker.string.uuid(),
        faker.string.uuid(),
      ],
      tags: [
        faker.commerce.department(),
        faker.commerce.department(),
        faker.commerce.department(),
        faker.commerce.department(),
      ],
    };
    data.push(product);
  }
  return data;
}

module.exports = generateProducts;
