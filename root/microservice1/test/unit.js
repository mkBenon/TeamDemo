const request = require('supertest');
const server = require('../index');

describe('Microservice1', () => {
  it('should return 401 on POST /api if no token is provided', async () => {
    const res = await request(server).post('/api');
    expect(res.statusCode).toEqual(401);
  });
});
