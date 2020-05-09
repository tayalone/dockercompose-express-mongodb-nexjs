const httpMocks = require('node-mocks-http')

const {
  preventDivideByZero,
  commonErrorMessage,
  commonErrorKey,
  divisorErrorMessage,
  divisorErrorKey
} = require('./preventDivideByZero')

const mockDivideByZero = () => {
  return {
    body: {
      divisor: 0
    }
  }
}

const mockSuccess = () => {
  return {
    body: {
      divisor: 1
    }
  }
}
describe('Test middlewares/preventDivideByZero', () => {
  describe('Case: Bad Parameter', () => {
    let next = null
    let response = null
    beforeAll(async (done) => {
      const req = {}
      const res = httpMocks.createResponse()
      next = jest.fn()
      response = await preventDivideByZero(req, res, next)
      done()
    })
    test(`status must be 400`, async () => {
      expect(response.statusCode).toEqual(400)
    })
    test(`errMessage must be '${commonErrorMessage}'`, async () => {
      expect(response._getData().errMessage).toEqual(commonErrorMessage)
    })
    test(`errKey must be ${commonErrorKey}`, async () => {
      expect(response._getData().errKey).toEqual(commonErrorKey)
    })
    test(`next must be not called`, async () => {
      expect(next).not.toBeCalled()
    })
  })
  describe('Case: Divide By Zero', () => {
    let next = null
    let response = null
    beforeAll(async (done) => {
      const req = mockDivideByZero()
      const res = httpMocks.createResponse()
      next = jest.fn()
      response = await preventDivideByZero(req, res, next)
      done()
    })
    test(`status must be 400`, async () => {
      expect(response.statusCode).toEqual(400)
    })
    test(`errMessage must be '${divisorErrorMessage}'`, async () => {
      expect(response._getData().errMessage).toEqual(divisorErrorMessage)
    })
    test(`errKey must be ${divisorErrorKey}`, async () => {
      expect(response._getData().errKey).toEqual(divisorErrorKey)
    })
    test(`next must be not called`, async () => {
      expect(next).not.toBeCalled()
    })
  })
  describe('Case: Success', () => {
    let next = null
    let response = null
    beforeAll(async (done) => {
      const req = mockSuccess()
      const res = httpMocks.createResponse()
      next = jest.fn()
      response = await preventDivideByZero(req, res, next)
      done()
    })
    test(`next must be called`, async () => {
      expect(next).toBeCalled()
    })
  })
})
