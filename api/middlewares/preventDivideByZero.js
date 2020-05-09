const commonErrorMessage = 'error from middlewares/preventDivideByZero'
const commonErrorKey = 'error_from_middlewares/preventDivideByZero'.toUpperCase()

const divisorErrorMessage = 'divisor must not equal zero'
const divisorErrorKey = 'divisor_must_not_equal_zero'.toUpperCase()

const preventDivideByZero = async (req, res) => {
  try {
    const { body } = req
    const { divisor } = body
    if (divisor === 0) {
      return res.status(400).send({
        errorMessage: divisorErrorMessage,
        errorKey: divisorErrorKey
      })
    } else {
      return next()
    }
  } catch (e) {
    console.error(`error from middlewares/preventDivideByZero`, e)
    return res.status(400).send({
      errorMessage: commonErrorMessage,
      errorKey: commonErrorKey
    })
  }
}

module.exports = {
  preventDivideByZero,
  commonErrorMessage,
  commonErrorKey,
  divisorErrorMessage,
  divisorErrorKey
}
