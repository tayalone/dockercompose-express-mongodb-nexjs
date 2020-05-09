const request = require('supertest')
const app = require('../../../server')

describe('Common POST :/divide', () => {
  let res = null
  describe('Case: Divisible', () => {
    beforeAll(async () => {
      res = await request(app).post('/divide').send({
        dividend: 20,
        divisor: 10
      })
    })
    test('statusCode should be 200', async () => {
      expect(res.statusCode).toEqual(200)
    })
    test('data.result should be 2', async () => {
      expect(res.body.result).toEqual(2)
    })
    test('data.portion should be 0', async () => {
      expect(res.body.portion).toEqual(0)
    })
  })
  describe('Case: Indivisible', () => {
    beforeAll(async () => {
      res = await request(app).post('/divide').send({
        dividend: 3,
        divisor: 2
      })
    })
    test('statusCode should be 200', async () => {
      expect(res.statusCode).toEqual(200)
    })
    test('data.message should be OK', async () => {
      expect(res.body.message).toEqual('OK')
    })
    test('data.result should be 1', async () => {
      expect(res.body.result).toEqual(1)
    })
    test('data.portion should be 1', async () => {
      expect(res.body.portion).toEqual(1)
    })
  })
  describe('Case: Divide by zero', () => {
    beforeAll(async () => {
      res = await request(app).post('/divide').send({
        dividend: 3,
        divisor: 0
      })
    })
    test('statusCode should be 400', async () => {
      // console.log(`res.body`, res.body.details)
      expect(res.statusCode).toEqual(400)
    })
    test(`res.body.message should be 'Validation Failed'`, () => {
      expect(res.body.message).toEqual('Validation Failed')
    })
    test(`res.body.error should be 'error'`, () => {
      expect(res.body.error).toEqual('Bad Request')
    })
    test(`res.body.details.body[0].message should be '"divisor" contains an invalid value'`, () => {
      expect(res.body.details.body[0].message).toEqual(
        '"divisor" contains an invalid value'
      )
    })
  })
  describe('Case: Parmeter error', () => {
    describe('SubCase: dividend', () => {
      describe('Subsubcase: empty value', () => {
        beforeAll(async () => {
          res = await request(app).post('/divide').send({
            dividend: undefined,
            divisor: 0
          })
        })
        test('statusCode should be 400', async () => {
          // console.log(`res.body`, res.body.details)
          expect(res.statusCode).toEqual(400)
        })
        test(`res.body.message should be 'Validation Failed'`, () => {
          expect(res.body.message).toEqual('Validation Failed')
        })
        test(`res.body.error should be 'error'`, () => {
          expect(res.body.error).toEqual('Bad Request')
        })
        test(`res.body.details.body[0].message should be  '"dividend" is required'`, () => {
          expect(res.body.details.body[0].message).toEqual(
            '"dividend" is required'
          )
        })
      })
      describe('Subsubcase: type mismatch', () => {
        beforeAll(async () => {
          res = await request(app).post('/divide').send({
            dividend: 'hello world',
            divisor: 0
          })
        })
        test('statusCode should be 400', async () => {
          // console.log(`res.body`, res.body.details)
          expect(res.statusCode).toEqual(400)
        })
        test(`res.body.message should be 'Validation Failed'`, () => {
          expect(res.body.message).toEqual('Validation Failed')
        })
        test(`res.body.error should be 'error'`, () => {
          expect(res.body.error).toEqual('Bad Request')
        })
        test(`res.body.details.body[0].message should be  '"dividend" must be a number'`, () => {
          expect(res.body.details.body[0].message).toEqual(
            '"dividend" must be a number'
          )
        })
      })
    })
    describe('SubCase: divisor', () => {
      describe('Subsubcase: empty value', () => {
        beforeAll(async () => {
          res = await request(app).post('/divide').send({
            dividend: 10,
            divisor: undefined
          })
        })
        test('statusCode should be 400', async () => {
          // console.log(`res.body`, res.body.details)
          expect(res.statusCode).toEqual(400)
        })
        test(`res.body.message should be 'Validation Failed'`, () => {
          expect(res.body.message).toEqual('Validation Failed')
        })
        test(`res.body.error should be 'error'`, () => {
          expect(res.body.error).toEqual('Bad Request')
        })
        test(`res.body.details.body[0].message should be  '"divisor" is required'`, () => {
          expect(res.body.details.body[0].message).toEqual(
            '"divisor" is required'
          )
        })
      })
      describe('Subsubcase: type mismatch', () => {
        beforeAll(async () => {
          res = await request(app).post('/divide').send({
            dividend: 10,
            divisor: 'hello world'
          })
        })
        test('statusCode should be 400', async () => {
          // console.log(`res.body`, res.body.details)
          expect(res.statusCode).toEqual(400)
        })
        test(`res.body.message should be 'Validation Failed'`, () => {
          expect(res.body.message).toEqual('Validation Failed')
        })
        test(`res.body.error should be 'error'`, () => {
          expect(res.body.error).toEqual('Bad Request')
        })
        test(`res.body.details.body[0].message should be  '"divisor" must be a number'`, () => {
          expect(res.body.details.body[0].message).toEqual(
            '"divisor" must be a number'
          )
        })
      })
    })
  })
})
