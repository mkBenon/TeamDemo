const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Microservice1', () => {
  it('should return 200 on POST /api if valid token is provided', (done) => {
    chai.request(server)
      .post('/api')
      .set('authorization', 'Bearer valid_token')
      .end((err, res) => {
        res.should.have.status(200);
        done();
      });
  });
});
