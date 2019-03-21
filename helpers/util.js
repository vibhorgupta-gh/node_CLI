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

module.exports = { isUpdated }