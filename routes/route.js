const express = require('express')
const router = express.Router()
const {get, set} = require('../helpers/functions')


router.get('/get/:key', async (req, res, next) => {
  let pair = await get(req.params.key)
  if (pair)
    res.json({value: pair.value})
  else
    res.json({value: null})
})

router.get('/set/:key/:value', async (req, res, next) => {
  let pair = await set(req.params.key, req.params.value)
  res.json({key: pair.key, value: pair.value})
})

module.exports = router