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
      expect(res.statusCode).toEqual(400)
    })
    // test('data.message should be OK', async () => {
    //   expect(res.body.message).toEqual('OK')
    // })
    // test('data.result should be 1', async () => {
    //   expect(res.body.result).toEqual(1)
    // })
  })
})
