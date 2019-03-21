#!/usr/bin/env node

const store = require('commander')

store
  .version('0.0.1')
  .description('CLI tool for using a key value store.')

store
  .command('set <key> <value>')
  .alias('s')
  .description('Sets the argument key value pair')
  .action((key, value) => {
    console.log(key, value)
  })

store
  .command('get <key>')
  .alias('g')
  .description('Fetches the argument key value pair')
  .action((key) => {
    console.log(key)
  })

store
  .command('watch <key>')
  .alias('w')
  .description('Watches the argument key')
  .action((key) => {
    console.log(key)
  })

store.parse(process.argv)