#!/usr/bin/env node

const store = require('commander')
const { isUpdated } = require('./helpers/util')
const { get, set } = require('./helpers/functions')

store
  .version('0.0.1')
  .description('CLI tool for using a key value store.')

store
  .command('set <key> <value>')
  .alias('s')
  .description('Sets the argument key value pair')
  .action(async (key, value) => {
    try{
      const pair = await set(key, value)
      if (pair.value)
        console.log(`\n\nSuccessfully set key: ${pair.key} with value: ${pair.value}\n\n`)
      else
        console.log(`\n\nThis key doesn\'t exist.`)
    }
    catch (e) {
      console.log("\n\nSomething went wrong with our servers! " + e)
    }
  })

store
  .command('get <key>')
  .alias('g')
  .description('Fetches the argument key value pair')
  .action(async (key) => {
    try{
      const pair = await get(key)
      if (pair.value)
        console.log(`\n\nSuccessfully fetched key: ${key} with value: ${pair.value}\n\n`)
      else
        console.log(`\n\nThis key doesn\'t exist.\n\n`)
      return
    }
    catch (e) {
      console.log("\n\nSomething went wrong with our servers! ")
    }
  })

store
  .command('watch <key>')
  .alias('w')
  .description('Watches the argument key')
  .action(async (key) => {
    try{
      var current = key
      let currentVal = get(current)
      currentVal = currentVal.value
      if (!currentVal)
        console.log(`\n\nThis key doesn\'t exist.\n\n`)
      else{
        console.log(`\n\nWatching key ${key} for any changes in value\n\n`)
        while (true) {
          let update = await isUpdated(key, current)
          if (update) {
            newValue = await get(current)
            newValue = newValue.value
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