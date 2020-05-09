const divideValid = require('./divideValid')

const successObject = {
  dividend: 20,
  divisor: 10
}

const divideZeroObject = {
  dividend: 20,
  divisor: 0
}

const failObject1 = {
  dividend: undefined,
  divisor: 10
}

const failObject2 = {
  dividend: {},
  divisor: 10
}

const failObject3 = {
  dividend: 10,
  divisor: undefined
}

const failObject4 = {
  dividend: 10,
  divisor: {}
}

describe('Test: routes/commom/validate/divideValid', () => {
  describe('Case: Valid', () => {
    let error = null
    let value = null
    beforeAll(() => {
      const result = divideValid.validate(successObject)
      error = result.error
      value = result.value
    })
    test('error should be undefined', () => {
      expect(error).toEqual(undefined)
    })
  })
  describe('Case: Invalid', () => {
    describe('Subcase: divide by zero', () => {
      let error = null
      let value = null
      beforeAll(() => {
        const result = divideValid.validate(divideZeroObject)
        error = result.error
        value = result.value
      })
      test('error should not be undefined', () => {
        expect(error).not.toEqual(undefined)
      })
    })
    describe('Subcase: dividend', () => {
      describe('Subsubcase: dividend empty', () => {
        let error = null
        let value = null
        beforeAll(() => {
          const result = divideValid.validate(failObject2)
          error = result.error
          value = result.value
        })
        test('error should not be undefined', () => {
          expect(error).not.toEqual(undefined)
        })
      })
      describe('Subsubcase: dividend type mismatch', () => {
        let error = null
        let value = null
        beforeAll(() => {
          const result = divideValid.validate(failObject1)
          error = result.error
          value = result.value
        })
        test('error should not be undefined', () => {
          expect(error).not.toEqual(undefined)
        })
      })
    })
    describe('Subcase: divisor', () => {
      describe('Subsubcase: divisor empty', () => {
        let error = null
        let value = null
        beforeAll(() => {
          const result = divideValid.validate(failObject3)
          error = result.error
          value = result.value
        })
        test('error should not be undefined', () => {
          expect(error).not.toEqual(undefined)
        })
      })
      describe('Subsubcase: divisor type mismatch', () => {
        let error = null
        let value = null
        beforeAll(() => {
          const result = divideValid.validate(failObject4)
          error = result.error
          value = result.value
        })
        test('error should not be undefined', () => {
          expect(error).not.toEqual(undefined)
        })
      })
    })
  })
})
