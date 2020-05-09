const request = require('supertest')
const app = require('../../../server')
describe('Common GET :/', () => {
  let res = null
  beforeAll(async () => {
    res = await request(app).get('/')
  })
  test('statusCode should be 200', async () => {
    expect(res.statusCode).toEqual(200)
  })
  test('data.message should be OK', async () => {
    expect(res.body.message).toEqual('OK')
  })
})
