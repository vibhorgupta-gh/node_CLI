const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const { url } = require('./config/conf')
const router = require('./routes/route')
const mongoose = require('mongoose')

const db = mongoose.connect(url)

app.use(cookieParser())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:false}))

app.use('/', router)
app.get('*', (req, res, next) => { res.status(404).send('404: Not found') })

app.listen(4000, () => {
  console.log('Server started on port 4000')
})

module.exports = app
