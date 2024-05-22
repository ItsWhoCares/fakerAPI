const express = require("express");
const router = express.Router();
const { faker } = require("@faker-js/faker");
module.exports = router;

router.get("/books", (req, res) => {
  let { _quantity = 1 } = req.query;
  _quantity = parseInt(_quantity, 10);

  const data = [];

  for (let i = 0; i < _quantity; i++) {
    const book = {
      id: i + 1,
      title: faker.lorem.sentence(),
      author: faker.person.fullName(),
      genre: faker.lorem.word(),
      description: faker.lorem.paragraph(),
      isbn: faker.number
        .int({ min: 1000000000000, max: 9999999999999 })
        .toString(),
      image: faker.image.url(480, 640, undefined, true),
      published: faker.date.past().toISOString().split("T")[0],
      publisher: faker.company.name(),
    };
    data.push(book);
  }

  res.json({
    status: "OK",
    code: 200,
    total: _quantity,
    data: data,
  });
});
