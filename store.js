#!/usr/bin/env node

const store = require('commander')
const axios = require('axios')
const {isUpdated} = require('./helpers/util')

store
  .version('0.0.1')
  .description('CLI tool for using a key value store.')

store
  .command('set <key> <value>')
  .alias('s')
  .description('Sets the argument key value pair')
  .action(async (key, value) => {
    try{
      const pair = await axios.get(`http://localhost:4000/set/${key}/${value}`)
      if (pair.data.value)
        console.log(`\n\nSuccessfully set key: ${pair.data.key} with value: ${pair.data.value}\n\n`)
      else
        console.log(`\n\nThis key doesn\'t exist.`)
    }
    catch (e) {
      consle.log("\n\nSomething went wrong with our servers!")
    }
  })

store
  .command('get <key>')
  .alias('g')
  .description('Fetches the argument key value pair')
  .action(async (key) => {
    try{
      const pair = await axios.get(`http://localhost:4000/get/${key}`)
      if (pair.data.value)
        console.log(`\n\nSuccessfully fetched key: ${key} with value: ${pair.data.value}\n\n`)
      else
        console.log(`\n\nThis key doesn\'t exist.\n\n`)
    }
    catch (e) {
      consle.log("\n\nSomething went wrong with our servers!")
    }
  })

store
  .command('watch <key>')
  .alias('w')
  .description('Watches the argument key')
  .action(async (key) => {
    try{
      var current = key
      let currentVal = await axios.get(`http://localhost:4000/get/${current}`)
      currentVal = currentVal.data.value
      // const pair = await axios.get(`http://localhost:4000/get/${key}`)
      if (!currentVal)
        console.log(`\n\nThis key doesn\'t exist.\n\n`)
      else{
        console.log(`\n\nWatching key ${key} for any changes in value\n\n`)
        while (true) {
          let update = await isUpdated(key, current)
          if (update) {
            newValue = await axios.get(`http://localhost:4000/get/${current}`)
            newValue = newValue.data.value
            console.log(`New value of ${current} is ${newValue}`)
          }
          continue
        }
      }
    }
    catch (e) {
      console.log("\n\nSomething went wrong with our servers!")
    }
  })

store.parse(process.argv)