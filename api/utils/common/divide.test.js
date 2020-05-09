const { divide } = require('./divide')

describe('Test utils/common/divide', () => {
  let result = 0
  let portion = 0
  describe('Case: Divisible', () => {
    beforeAll(async () => {
      const diviedResult = await divide(20, 10)
      result = diviedResult.result
      portion = diviedResult.portion
    })
    test(`result should be 2`, async () => {
      expect(result).toEqual(2)
    })
    test(`portion should be 0`, async () => {
      expect(portion).toEqual(0)
    })
  })
  describe('Case: Indivisible', () => {
    beforeAll(async () => {
      const diviedResult = await divide(3, 2)
      result = diviedResult.result
      portion = diviedResult.portion
    })
    test(`result should be 1`, async () => {
      expect(result).toEqual(1)
    })
    test(`portion should be 1`, async () => {
      expect(portion).toEqual(1)
    })
  })
})
