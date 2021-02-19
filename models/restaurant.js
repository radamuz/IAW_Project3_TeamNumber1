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
  price: {
    type: String,
    required: true,
  },
  foods: {
    type: Array,
    required: true,
  },
  services: {
    type: Array,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  address: {
    type: Object,
    required: true,
  },
  comments: {
    type: Array,
    default: []
  },
  img: {
    type: String,
    required: true
  }
})

module.exports = mongoose.model('restaurant', RestaurantSchema)