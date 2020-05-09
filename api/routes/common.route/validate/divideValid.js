const Joi = require('@hapi/joi')

const schema = {
  body: Joi.object({
    dividend: Joi.number().required(),
    divisor: Joi.number().required().invalid(0)
  })
}

module.exports = schema
