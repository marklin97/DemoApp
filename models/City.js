const mongoose = require('mongoose')
const CitySchema = mongoose.Schema({
  cityName: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  lowestTemperature: {
    type: String,
    required: true
  },
  highestTemperature: {
    type: String,
    required: true
  },
  currentTemperature: {
    type: String,
    required: true
  }
})
module.exports = mongoose.model('city', CitySchema)
