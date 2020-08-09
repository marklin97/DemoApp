const mongoose = require('mongoose')
const config = require('config')
const db = config.get('mongoURI')

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false
    })
    // wait till mongoose connected then execute
    console.log('MongoDB Connected...')
    // print error message
  } catch (err) {
    console.error(err.message)
    process.exit(1)
  }
}

module.exports = connectDB
