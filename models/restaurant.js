const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  forks: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    require: true,
  }
})

module.exports = mongoose.model('restaurant', RestaurantSchema)