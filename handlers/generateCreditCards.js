const { faker } = require("@faker-js/faker");
function generateCreditCards({ _quantity, _locale, _seed }) {
  const data = [];
  for (let i = 0; i < _quantity && i < 1000; i++) {
    const type = faker.finance.creditCardIssuer();
    const card = {
      type: type,
      number: faker.finance.creditCardNumber(type),
      // mm/yy
      expirationDate:
        faker.number.int({ min: 1, max: 12 }) +
        "/" +
        faker.number.int({ min: 22, max: 30 }),
      owner: faker.person.fullName(),
    };
    data.push(card);
  }
  return data;
}

module.exports = generateCreditCards;
