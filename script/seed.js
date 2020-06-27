'use strict'

const db = require('../server/db')
const {User, Nutrient} = require('../server/db/models')

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const users = await Promise.all([
    User.create({
      name: 'Cody',
      email: 'cody@email.com',
      password: '123',
      macroLimit: 600
    }),
    User.create({
      name: 'Murphy',
      email: 'murphy@email.com',
      password: '123',
      macroLimit: 1200
    })
  ])

  const nutrients = await Promise.all([
    Nutrient.create({attrNum: 208, name: 'calories', measurement: 'kcal'}),
    Nutrient.create({attrNum: 601, name: 'cholesterol', measurement: 'mg'}),
    Nutrient.create({attrNum: 606, name: 'saturated fat', measurement: 'g'}),
    Nutrient.create({attrNum: 605, name: 'trans fat', measurement: 'g'}),
    Nutrient.create({attrNum: 307, name: 'sodium', measurement: 'mg'}),
    Nutrient.create({attrNum: 269, name: 'sugar', measurement: 'g'}),
    Nutrient.create({attrNum: 205, name: 'carbohydrates', measurement: 'g'}),
    Nutrient.create({attrNum: 203, name: 'protein', measurement: 'g'}),
    Nutrient.create({attrNum: 204, name: 'total fat', measurement: 'g'})
  ])

  const [cody, murphy] = await Promise.all([
    User.findOne({where: {name: 'Cody'}}),
    User.findOne({where: {name: 'Murphy'}})
  ])

  const [calories, cholesterol, sodium, sugar] = await Promise.all([
    Nutrient.findByPk(208),
    Nutrient.findByPk(601),
    Nutrient.findByPk(307),
    Nutrient.findByPk(269)
  ])

  await cody.addNutrients([calories, cholesterol])
  await murphy.addNutrients([sodium, sugar])

  console.log(`seeded ${users.length} users and ${nutrients.length} nutrients`)
  console.log(`seeded successfully`)
}

// We've separated the `seed` function from the `runSeed` function.
// This way we can isolate the error handling and exit trapping.
// The `seed` function is concerned only with modifying the database.
async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}

// Execute the `seed` function, IF we ran this module directly (`node seed`).
// `Async` functions always return a promise, so we can use `catch` to handle
// any errors that might occur inside of `seed`.
if (module === require.main) {
  runSeed()
}

// we export the seed function for testing purposes (see `./seed.spec.js`)
module.exports = seed
