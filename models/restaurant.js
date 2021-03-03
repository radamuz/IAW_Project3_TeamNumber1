const mongoose = require('mongoose')

const RestaurantSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  forks: {
    type: Number,
    min: 0,
    max: 5,
    required: true
  },
  img: {
    type: Array,
    required: false
  },
  phone: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  web: {
    type: String,
    required: true
  },
  price: {
    type: String,
    required: true
  },
  foods: {
    type: Array,
    required: true
  },
  cuisineType: {
    type: Array,
    required: true
  },
  timetable: {
    type: Array,
    required: false
  },
  services: {
    type: Array,
    required: true
  },
  address: {
    type: Object,
    required: false
  },
  comments: {
    type: Array,
    default: []
  }
})

module.exports = mongoose.model('restaurant', RestaurantSchema)