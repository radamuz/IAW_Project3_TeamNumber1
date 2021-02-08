const mongoose = require('mongoose')

const RestSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true,
  }
})

module.exports = mongoose.model('Restaurant', RestSchema)