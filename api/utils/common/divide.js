const commontErrMessage = 'error from /utils/common/divide'
const commontErrKey = 'error_from_/utils/common/divide'.toUpperCase()

const divide = (dividend, divisor) => {
  const result = Math.floor(dividend / divisor)
  const portion = dividend % divisor
  return { result, portion }
}

module.exports = { divide, commontErrMessage, commontErrKey }
