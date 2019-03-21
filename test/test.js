const chai = require('chai')
const chaiHttp = require('chai-http')
const promise = require('chai-as-promised')
const should = chai.should()
const server = require('../server.js')
const { get, set } = require('../helpers/functions')
const { isUpdated } = require('../helpers/util')

chai.use(chaiHttp)
chai.use(promise)

describe('Route testing', () => {
  let key = 'a'
  let value = '6'

  it('set route test', (done) => {
    chai
      .request(server)
      .get(`/set/${key}/${value}`)
      .end((req, res) => {
        res.status.should.be.equal(200)
        res.body.value.value.should.equal('6')
      })
    done()
  })

  it('get route test', (done) => {
    chai
      .request(server)
      .get(`/get/${key}`)
      .end((req, res) => {
        res.status.should.be.equal(200)
        res.body.value.should.equal('6')
      })
    done()
  })
})

describe('Function testing', () => {
  let key = 'a'
  let value = '6'

  it('set method test', () => {
    let pair = set(key, value)
    let new_pair = set('arbitrary_key', 'arbitrary_value')
    pair.should.be.fulfilled
    return new_pair.should.be.fulfilled
  })

  it('get method test', () => {
    let pair = get(key)
    let no_pair = get('key')
    pair.should.be.fulfilled
    no_pair.should.be.fulfilled
    return no_pair.should.eventually.equal(false)
  })
})

describe('Util testing', () => {
  let key = 'a'

  it('update util test', () => {
    let falsy = isUpdated(key, 'a')
    let truthy = isUpdated(key, 'b')
    falsy.should.be.fulfilled
    truthy.should.be.fulfilled
    falsy.should.eventually.equal(false)
    return truthy.should.eventually.equal(true)
  })
})