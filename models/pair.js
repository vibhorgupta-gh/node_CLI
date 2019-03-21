const mongoose = require('mongoose')
mongoose.Promise = global.Promise
const Schema = mongoose.Schema

const pairSchema = new Schema({
  key:{
    type: Schema.Types.Mixed,
  },
  value:{
    type: Schema.Types.Mixed,
  }
})

const pair = mongoose.model('pair', pairSchema)
module.exports = pair