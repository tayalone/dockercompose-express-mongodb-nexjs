const commontErrMessage = 'error from /utils/common/divide'
const commontErrKey = 'error_from_/utils/common/divide'.toUpperCase()

const divide = async (dividend, divisor) => {
  try {
    const result = dividend / divisor
    const portion = dividend % divisor
    return { result, portion }
  } catch (e) {
    return res.status(400).send({
      errMessage: commontErrMessage,
      errKey: commontErrKey
    })
  }
}

module.exports = { divide, commontErrMessage, commontErrKey }
