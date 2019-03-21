const express = require('express')
const router = express.Router()
const {get, set} = require('../helpers/functions')
const {handleResponse} = require('../helpers/util')


router.get('/get/:key', async (req, res, next) => {
  let pair = await get(req.params.key)
  if (pair)
    return handleResponse(res, 200, 'fetch success', pair.value)
  else
    return handleResponse(res, 200, 'fetch fail', null)
})

router.get('/set/:key/:value', async (req, res, next) => {
  let pair = await set(req.params.key, req.params.value)
  pair = {key: pair.key, value: pair.value}
  return handleResponse(res, 200, 'set success', pair)
})

module.exports = router