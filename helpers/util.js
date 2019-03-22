const { get, set } = require('./functions')

const isUpdated = async (key, current) => {
  let keyVal = await get(key)
  let currVal = await get(current)

  if (currVal == keyVal) {
    return false
  }
  else {
    return true
  }
}

module.exports = { isUpdated }