const express = require('express');
const jwt = require('jsonwebtoken');
const request = require('request');
const app = express();

app.use(express.json());

app.post('/api', (req, res) => {
  jwt.verify(req.headers['authorization'], 'secretkey', (err, decoded) => {
    if (err) {
      res.sendStatus(401);
    } else {
      request.post({url: 'http://microservice2/api', headers: {'authorization': req.headers['authorization']}}, (error, response, body) => {
        if (error) {
          res.sendStatus(500);
        } else {
          res.status(response.statusCode).send(body);
        }
      });
    }
  });
});

app.listen(3000, () => console.log('Microservice1 listening on port 3000!'));
