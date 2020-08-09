const express = require('express')
const connectDB = require('./config/db')
const app = express()
const City = require('./models/City')
const PORT = 5000
// Connect to database
connectDB()

// Init Middleware
app.use(express.json({ extended: false }))

// create city profile
app.post('/weather', async (req, res) => {
  const {
    cityName,
    description,
    lowestTemperature,
    highestTemperature,
    currentTemperature
  } = req.body
  try {
    let city = await City.findOne({ cityName })
    city = new City({
      cityName,
      description,
      lowestTemperature,
      highestTemperature,
      currentTemperature
    })
    await city.save()
    res.send('City saved')
  } catch (err) {
    console.log(err)
  }
})
app.get('/weather', async (req, res) => {
  let cityName = req.query.city
  const result = await City.findOne({ cityName: cityName })
  res.json({ result })
})
app.listen(PORT, () => console.log(`Server started on port ${PORT}`))
