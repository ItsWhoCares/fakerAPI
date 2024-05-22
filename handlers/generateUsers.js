const { faker, fi } = require("@faker-js/faker");

function generateUsers({ _quantity, _locale, _seed, _gender }) {
  const data = [];
  for (let i = 0; i < _quantity && i < 1000; i++) {
    firstName = faker.person.firstName(_gender);
    lastName = faker.person.lastName(_gender);
    const user = {
      id: faker.string.uuid(),
      first_name: firstName,
      last_name: lastName,
      username: faker.internet.userName({
        firstName,
        lastName,
      }),

      password: faker.internet.password(),
      email: faker.internet.email({
        firstName,
        lastName,
      }),
      ip: faker.internet.ip(),
      mac_address: faker.internet.mac(),
      website: faker.internet.url(),
      image: faker.image.avatar(),
    };
    data.push(user);
  }
  return data;
}

module.exports = generateUsers;
