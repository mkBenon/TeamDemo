const chai = require('chai');
const chaiHttp = require('chai-http');
const server = require('../index');
const should = chai.should();

chai.use(chaiHttp);

describe('Microservice1', () => {
  it('should return 401 on POST /api if no token is provided', (done) => {
    chai.request(server)
      .post('/api')
      .end((err, res) => {
        res.should.have.status(401);
        done();
      });
  });
});
