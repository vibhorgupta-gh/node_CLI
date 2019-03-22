const { db, Pair } = require('../models/pair')
const mongoose = require('mongoose')
mongoose.Promise = global.Promise


const get = async (key) => {
  try {
    const pair = await Pair.findOne({key: key})
    db.close()
    if (pair)
      return pair
    else
      return false
  } catch (e) {
      console.error(e.message)
  }
}

const set = async (key, value) => {
  try {
    const exists = await Pair.findOne({key: key})
    let pair
    if (exists) {
      pair = await Pair.findOneAndUpdate({key: key}, {value: value}, {new: true})
    }
    else {
      pair = await Pair.create({key: key, value: value})
    }
    db.close()
    return pair
  } catch(e) {
      console.error(e.message)
  }
}

module.exports = { get, set }