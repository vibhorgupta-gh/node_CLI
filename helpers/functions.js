const Pair = require('../models/pair')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const get = (key) => {
  console.log("3")
  return Pair.findOne({'key' : key})
}

const set = (key, value) => {
  if (get(key)) {
    return Pair.findOneAndUpdate({key: key}, {value: value})
  }
  else {
    console.log("2")
    return Pair.create({key: key, value: value})
  }
}

module.exports = { get, set }