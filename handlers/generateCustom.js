const { faker } = require("@faker-js/faker");
function generateCustom({ _quantity, _locale, _seed, customFields }) {
  const data = [];
  for (let i = 0; i < _quantity && i < 1000; i++) {
    const type = faker.finance.creditCardIssuer();
    custom = {};
    for (let j in customFields) {
      // switch(customFields[j]){
      //     case "boolean":
      //         custom[j] = faker.datatype.boolean();
      //         break;
      //     case "date":
      //         custom[j] = faker.date.recent();
      //         break;
      //     case "email":
      //         custom[j] = faker.internet.email();
      //         break;
      // }
      switch (customFields[j]) {
        case "boolean":
          custom[j] = faker.datatype.boolean();
          break;
        case "boolean_digit":
          custom[j] = faker.number.int({ min: 0, max: 1 });
          break;
        case "buildingNumber":
          custom[j] = faker.location.buildingNumber();
          break;
        case "building_number":
          custom[j] = faker.location.buildingNumber();
          break;
        case "card_expiration":
          custom[j] = faker.date.future();
          break;
        case "card_number":
          custom[j] = faker.finance.creditCardNumber();
          break;
        case "card_type":
          custom[j] = faker.finance.creditCardType();
          break;
        case "city":
          custom[j] = faker.location.city();
          break;
        case "company_name":
          custom[j] = faker.company.companyName();
          break;
        case "counter":
          custom[j] = i + 1;
          break;
        case "country":
          custom[j] = faker.location.country();
          break;
        case "countryCode":
          custom[j] = faker.location.countryCode();
          break;
        case "country_code":
          custom[j] = faker.location.countryCode();
          break;
        case "date":
          custom[j] = faker.date.recent();
          break;
        case "dateTime":
          custom[j] = faker.date.recent();
          break;
        case "date_time":
          custom[j] = faker.date.recent();
          break;
        case "ean":
          custom[j] = faker.datatype.ean13();
          break;
        case "email":
          custom[j] = faker.internet.email();
          break;
        case "firstName":
          custom[j] = faker.person.firstName();
          break;
        case "first_name":
          custom[j] = faker.person.firstName();
          break;
        case "image":
          custom[j] = faker.image.url();
          break;
        case "lastName":
          custom[j] = faker.person.lastName();
          break;
        case "last_name":
          custom[j] = faker.person.lastName();
          break;
        case "latitude":
          custom[j] = faker.location.latitude();
          break;
        case "longText":
          custom[j] = faker.lorem.paragraph();
          break;
        case "long_text":
          custom[j] = faker.lorem.paragraph();
          break;
        case "longitude":
          custom[j] = faker.location.longitude();
          break;
        case "name":
          custom[j] = faker.person.fullName();
          break;
        case "null":
          custom[j] = null;
          break;
        case "number":
          custom[j] = faker.number.int();
          break;
        case "phone":
          custom[j] = faker.phone.phoneNumber();
          break;
        case "pokemon":
          custom[j] = [
            "Pickachu",
            "Charmander",
            "Bulbasaur",
            "Squirtle",
            "Jigglypuff",
            "Meowth",
            "Psyduck",
            "Snorlax",
            "Mewtwo",
            "Dragonite",
          ][faker.number.int({ min: 0, max: 9 })];
          break;
        case "postcode":
          custom[j] = faker.location.zipCode();
          break;
        case "state":
          custom[j] = faker.location.state();
          break;
        case "streetAddress":
          custom[j] = faker.location.streetAddress();
          break;
        case "streetName":
          custom[j] = faker.location.street();
          break;
        case "street_address":
          custom[j] = faker.location.streetAddress();
          break;
        case "street_name":
          custom[j] = faker.location.street();
          break;
        case "text":
          custom[j] = faker.lorem.text();
          break;
        case "upc":
          custom[j] = faker.string.uuid();
          break;
        case "uuid":
          custom[j] = faker.string.uuid();
          break;
        case "vat":
          custom[j] = faker.finance.vat();
          break;
        case "website":
          custom[j] = faker.internet.url();
          break;
        case "word":
          custom[j] = faker.lorem.word();
          break;
        default:
          // custom[j] = null;
          // break;
          return false;
      }
    }
    data.push(custom);
  }
  return data;
}

module.exports = generateCustom;
