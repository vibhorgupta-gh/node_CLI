const Pair = require('../models/pair')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise

const get = async (key) => {
  try {
    const pair = await Pair.findOne({key: key})
    return pair
  } catch (e) {
      console.error(e.message)
  }
}

const set = async (key, value) => {
  try {
    const exists = await Pair.findOne({key: key})
    let pair
    if (exists) {
      pair = Pair.findOneAndUpdate({key: key})
    }
    else {
      pair = Pair.create({key: key, value: value})
    }
    return pair
  } catch(e) {
      console.error(e.message)
  }
}

module.exports = { get, set }