const router = require('express').Router()
const {User} = require('../db/models')
const axios = require('axios')
module.exports = router

router.get('/', async (req, res, next) => {
  try {
    const users = await User.findAll({
      // explicitly select only the id and email fields - even though
      // users' passwords are encrypted, it won't help if we just
      // send everything to anyone who asks!
      attributes: ['id', 'email']
    })
    res.json(users)
  } catch (err) {
    next(err)
  }
})

router.get('/find-food-bacon', async (req, res, next) => {
  try {
    //add axios request to test
    const query = {
      query: 'sweet potato'
    }
    const {data} = await axios.post(
      'https://trackapi.nutritionix.com/v2/natural/nutrients',
      query,
      {
        headers: {
          'x-app-id': 'c003c01e',
          'x-app-key': '3af6d607db04c9f78801f86227c21c30',
          'x-remote-user-id': 0
        }
      }
    )
    res.send(data)
  } catch (error) {
    next(error)
  }
})
