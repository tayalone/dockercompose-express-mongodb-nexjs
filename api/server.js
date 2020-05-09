const express = require('express')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const compress = require('compression')
const helmet = require('helmet')
const cors = require('cors')

const { validate, ValidationError, Joi } = require('express-validation')

const { divide } = require('./utils/common')

const { preventDivideByZero } = require('./middlewares')

const routes = require('./routes')

const app = express()

app.use(morgan('dev'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use(compress())

// secure apps by setting various HTTP headers
app.use(helmet())
// enable CORS - Cross Origin Resource Sharing
app.use(cors())

// app.get('/', (req, res) => {
//   return res.send({ message: 'OK' })
// })
// app.post('/divide', preventDivideByZero, (req, res) => {
//   const { body } = req
//   const { dividend, divisor } = body
//   const { result, portion } = divide(dividend, divisor)
//   return res.send({ message: 'OK', result, portion })
// })

app.use(function (err, req, res, next) {
  if (err instanceof ValidationError) {
    return res.status(err.statusCode).json(err)
  }

  return res.status(500).json(err)
})

app.use(routes)

module.exports = app
