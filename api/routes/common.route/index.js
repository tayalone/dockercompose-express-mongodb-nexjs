const express = require('express')
const { validate } = require('express-validation')

const { divideValid } = require('./validate')

const { divide } = require('../../utils/common')

const router = express.Router()

router.get('/', (req, res) => {
  return res.send({ message: 'OK ,Very Good !!!' })
})

router.post('/divide', validate(divideValid), (req, res) => {
  const { body } = req
  const { dividend, divisor } = body
  const { result, portion } = divide(dividend, divisor)
  return res.send({ message: 'OK', result, portion })
})

module.exports = router
