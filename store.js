#!/usr/bin/env node

const store = require('commander')
const axios = require('axios')

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
  .action((key) => {
    console.log(key)
  })

store.parse(process.argv)