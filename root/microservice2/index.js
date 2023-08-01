const express = require('express');
const jwt = require('jsonwebtoken');
const app = express();

app.use(express.json());

app.post('/api', (req, res) => {
  jwt.verify(req.headers['authorization'], 'secretkey', (err, decoded) => {
    if (err) {
      res.sendStatus(401);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(3001, () => console.log('Microservice2 listening on port 3001!'));
