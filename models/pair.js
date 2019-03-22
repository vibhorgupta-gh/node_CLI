const mongoose = require('mongoose')
const {url} = require('../config/conf')
mongoose.Promise = global.Promise
const Schema = mongoose.Schema

mongoose.connect(url, { useNewUrlParser: true })
const db = mongoose.connection

const pairSchema = new Schema({
  key:{
    type: Schema.Types.Mixed,
  },
  value:{
    type: Schema.Types.Mixed,
  }
})

const Pair = mongoose.model('pair', pairSchema)
module.exports = { db, Pair }