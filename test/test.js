const chai = require('chai')
const promise = require('chai-as-promised')
const should = chai.should()
const { get, set } = require('../helpers/functions')
const { isUpdated } = require('../helpers/util')

chai.use(promise)


describe('Function testing', () => {
  let key = 'a'
  let value = '6'

  it('set method test: true', (done) => {
    let pair = set(key, value)
    pair.should.be.fulfilled
    done()
  })

  it('set method test: false', (done) => {
    let new_pair = set('arbitrary_key', 'arbitrary_value')
    new_pair.should.be.fulfilled
    done()
  })

  it('get method test: true', (done) => {
    let pair = get(key)
    pair.should.be.fulfilled
    done()
  })

  it('get method test: false', (done) => {
    let no_pair = get('key')
    no_pair.should.be.fulfilled
    no_pair.should.eventually.equal(false)
    done()
  })
})

describe('Util testing', () => {
  let key = 'a'

  it('update util test: true', (done) => {
    let truthy = isUpdated(key, 'b')
    truthy.should.be.fulfilled
    truthy.should.eventually.equal(true)
    done()
  })

  it('update util test: false', (done) => {
    let falsy = isUpdated(key, 'a')
    falsy.should.be.fulfilled
    falsy.should.eventually.equal(false)
    done()
  })
})