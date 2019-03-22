const chai = require('chai')
const promise = require('chai-as-promised')
const should = chai.should()
const { get, set } = require('../helpers/functions')
const { isUpdated } = require('../helpers/util')

chai.use(promise)


describe('Function testing', () => {
  let key = 'a'
  let value = '6'

  it('set method test', (done) => {
    let pair = set(key, value)
    let new_pair = set('arbitrary_key', 'arbitrary_value')
    pair.should.be.fulfilled
    new_pair.should.be.fulfilled
    done()
  })

  it('get method test', (done) => {
    let pair = get(key)
    let no_pair = get('key')
    pair.should.be.fulfilled
    no_pair.should.be.fulfilled
    no_pair.should.eventually.equal(false)
    done()
  })
})

describe('Util testing', () => {
  let key = 'a'

  it('update util test', (done) => {
    let falsy = isUpdated(key, 'a')
    let truthy = isUpdated(key, 'b')
    falsy.should.be.fulfilled
    truthy.should.be.fulfilled
    falsy.should.eventually.equal(false)
    truthy.should.eventually.equal(true)
    done()
  })
})