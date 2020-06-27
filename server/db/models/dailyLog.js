const Sequelize = require('sequelize')
const db = require('../db')

const DailyLog = db.define('dailyLog', {
  foodName: {
    type: Sequelize.STRING
  },
  date: {
    type: Sequelize.DATEONLY
  }
})

module.exports = DailyLog
