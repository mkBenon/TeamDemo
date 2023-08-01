const express = require('express');
const jwt = require('jsonwebtoken');
const request = require('request');
const errorHandler = require('../common/errorHandler');
const app = express();

app.use(express.json());

app.get('/api/v1/resource', (req, res) => {
  res.json({ message: 'GET request to resource in microservice1' });
});

app.post('/api/v1/resource', (req, res, next) => {
  jwt.verify(req.headers['authorization'], 'secretkey', (err, decoded) => {
    if (err) {
      next({ status: 401, message: 'Unauthorized' });
    } else {
      request.post({url: 'http://microservice2/api', headers: {'authorization': req.headers['authorization']}}, (error, response, body) => {
        if (error) {
          next({ status: 500, message: 'Internal Server Error' });
        } else {
          res.status(response.statusCode).send(body);
        }
      });
    }
  });
});

app.use(errorHandler);

app.listen(3000, () => console.log('Microservice1 listening on port 3000!'));
