const Sequelize = require('sequelize')
const db = require('../db')

const Nutrient = db.define('nutrient', {
  attrNum: {
    type: Sequelize.INTEGER,
    allowNull: false,
    primaryKey: true
  },
  name: {
    type: Sequelize.STRING
  },
  measurement: {
    type: Sequelize.STRING
  }
})

module.exports = Nutrient
