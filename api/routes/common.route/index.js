const express = require('express')
// const { validate } = require('express-validation')

const { divide } = require('../../utils/common')

const { preventDivideByZero } = require('../../middlewares')

const router = express.Router()

router.get('/', (req, res) => {
  return res.send({ message: 'OK' })
})

router.post('/divide', preventDivideByZero, (req, res) => {
  const { body } = req
  const { dividend, divisor } = body
  const { result, portion } = divide(dividend, divisor)
  return res.send({ message: 'OK', result, portion })
})

module.exports = router
