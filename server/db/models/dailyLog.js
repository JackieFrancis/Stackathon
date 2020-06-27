const Sequelize = require('sequelize')
const db = require('../db')

const DailyLog = db.define('dailyLog', {
  foodName: {
    type: Sequelize.STRING
  },
  imageUrl: {
    type: Sequelize.TEXT
  },
  208: {
    type: Sequelize.DECIMAL
  },
  601: {
    type: Sequelize.DECIMAL
  },
  606: {
    type: Sequelize.DECIMAL
  },
  605: {
    type: Sequelize.DECIMAL
  },
  307: {
    type: Sequelize.DECIMAL
  },
  269: {
    type: Sequelize.DECIMAL
  },
  205: {
    type: Sequelize.DECIMAL
  },
  203: {
    type: Sequelize.DECIMAL
  },
  204: {
    type: Sequelize.DECIMAL
  },
  dateLogged: {
    type: Sequelize.DATEONLY
  }
})

module.exports = DailyLog
