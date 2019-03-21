const Pair = require('../models/pair')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const get = (key) => {
  Pair.findOne({key: key}).then(pair => {
    console.log(pair)
  })
}

const set = (key, value) => {
  if (get(key)) {
    Pair.findOneAndUpdate({key: key}, {value: value}).then(pair => {
      console.log(pair)
    })
  }
  else {
    Pair.create({key: key, value: value}).then(pair => {
      console.log(pair)
    })
  }
}

module.exports = { get, set }