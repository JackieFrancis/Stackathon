const Sequelize = require('sequelize')
const db = require('../db')

const trackedNutrient = db.define('trackedNutrient', {
  dailyLimit: {
    type: Sequelize.INTEGER
  },
  currentIntake: {
    type: Sequelize.INTEGER
  }
})

trackedNutrient.setDailyLimit = async function(userId, attrNum, val) {
  let userNutrient = await this.findOne({
    where: {userId: userId, nutrientAttrNum: attrNum}
  })
  userNutrient.dailyLimit = val
  userNutrient = await userNutrient.save()
  return userNutrient
}

module.exports = trackedNutrient
