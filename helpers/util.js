const axios = require('axios')

const isUpdated = async (key, current) => {
  let keyVal = await axios.get(`http://localhost:4000/get/${key}`)
  keyVal = keyVal.data.value
  let currVal = await axios.get(`http://localhost:4000/get/${current}`)
  currVal = currVal.data.value

  if (currVal == keyVal) {
    return false
  }
  else {
    return true
  }
}

const handleResponse = (response, statusCode, message, value) => {
  return response.status(statusCode).json({ msg: message, value: value })
}

module.exports = { isUpdated, handleResponse }