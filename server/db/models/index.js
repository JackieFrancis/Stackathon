const User = require('./user')
const Nutrient = require('./nutrient')
// const trackedNutrient = require('./trackedNutrient')
const DailyLog = require('./dailyLog')

/**
 * If we had any associations to make, this would be a great place to put them!
 * ex. if we had another model called BlogPost, we might say:
 *
 *    BlogPost.belongsTo(User)
 */

/**
 * We'll export all of our models here, so that any time a module needs a model,
 * we can just require it from 'db/models'
 * for example, we can say: const {User} = require('../db/models')
 * instead of: const User = require('../db/models/user')
 */

User.belongsTo(Nutrient)
Nutrient.hasMany(User)

DailyLog.belongsTo(User)
User.hasMany(DailyLog)

// User.belongsToMany(Nutrient, {through: 'trackedNutrient'})
// Nutrient.belongsToMany(User, {through: 'trackedNutrient'})

module.exports = {
  User,
  Nutrient,
  DailyLog
}
