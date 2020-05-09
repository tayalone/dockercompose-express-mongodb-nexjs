const divideValid = require('./divideValid')

const successObject = {
  body: {
    dividend: 20,
    divisor: 10
  }
}

const divideZeroObject = {
  body: {
    dividend: 20,
    divisor: 0
  }
}

const failObject1 = {
  body: {
    dividend: undefined,
    divisor: 10
  }
}

const failObject2 = {
  body: {
    dividend: {},
    divisor: 10
  }
}

const failObject3 = {
  body: {
    dividend: 10,
    divisor: undefined
  }
}

const failObject4 = {
  body: {
    dividend: 10,
    divisor: {}
  }
}

describe('Test: routes/commom/validate/divideValid', () => {
  describe('Case: Valid', () => {
    let error = null
    let value = null
    beforeAll(() => {
      const result = divideValid.body.validate(successObject.body)
      error = result.error
      value = result.value
      console.log(`error`, error)
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
        const result = divideValid.body.validate(divideZeroObject.body)
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
          const result = divideValid.body.validate(failObject2.body)
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
          const result = divideValid.body.validate(failObject1.body)
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
          const result = divideValid.body.validate(failObject3.body)
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
          const result = divideValid.body.validate(failObject4.body)
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
