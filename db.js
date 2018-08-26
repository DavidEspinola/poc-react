var faker = require('faker/locale/es');

function generateDb() {
  var users = []
  for (var id = 0; id < 50; id++) {
    users.push({
      id: id,
      name: faker.name.firstName(),
      lastName: faker.name.lastName(),
      country: faker.address.country(),
      avatar: faker.image.avatar()
    })
  }
  return {
    users
  }
}
module.exports = generateDb;