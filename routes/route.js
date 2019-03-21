const mongoose = require('mongoose')
const express = require('express')
const router = express.Router()
const {get, set} = require('../helpers/functions')


router.get('/get/:key', async (req, res, next) => {
  let pair = await get(req.params.key)
  res.json(pair)
})

router.get('/set/:key_:value', async (req, res, next) => {
  let pair = await set(req.params.key, req.params.value)
  res.json(pair)
})

module.exports = router