const { writeFileSync } = require('fs')
const faker = require('faker')

const count = 10000

const items = []
for (let i = 0; i < count; i++) {
  items.push(Object.assign(
    {},
    faker.helpers.createCard(),
    {
      avatar: faker.image.avatar(),
    },
  ))
}

writeFileSync('./items.json', JSON.stringify(items), {
  encoding: 'utf8',
})
