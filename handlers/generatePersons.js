const { faker } = require("@faker-js/faker");
const generateAddresses = require("./generateAddresses");

function generatePersons({
  _quantity,
  _locale,
  _seed,
  _gender,
  _birthday_start,
  _birthday_end,
}) {
  const data = [];
  for (let i = 0; i < _quantity && i < 1000; i++) {
    firstName = faker.person.firstName(_gender);
    lastName = faker.person.lastName(_gender);
    const person = {
      id: i + 1,
      firstName: firstName,
      lastName: lastName,
      email: faker.internet.email({
        firstName,
        lastName,
      }),
      phone: faker.phone.number(),
      birday: faker.date.between({
        from: _birthday_start || "01-01-1970",
        to: _birthday_end || new Date().toISOString().split("T")[0],
      }),
      gender: _gender || faker.person.gender(),
      address: generateAddresses({
        _quantity: 1,
        _locale,
        _seed,
      })[0],
      website: faker.internet.url(),
      image: faker.image.avatar(),
    };
    data.push(person);
  }
  return data;
}

module.exports = generatePersons;
