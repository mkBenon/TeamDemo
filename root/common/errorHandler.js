module.exports = function(err, req, res, next) {
  switch (err.status) {
    case 201:
      res.status(201).json({ message: 'Created' });
      break;
    case 202:
      res.status(202).json({ message: 'Accepted' });
      break;
    case 400:
      res.status(400).json({ error: 'Bad Request' });
      break;
    case 401:
      res.status(401).json({ error: 'Unauthorized' });
      break;
    case 403:
      res.status(403).json({ error: 'Forbidden' });
      break;
    case 404:
      res.status(404).json({ error: 'Not Found' });
      break;
    case 405:
      res.status(405).json({ error: 'Method Not Allowed' });
      break;
    case 406:
      res.status(406).json({ error: 'Not Acceptable' });
      break;
    case 409:
      res.status(409).json({ error: 'Conflict' });
      break;
    case 500:
      res.status(500).json({ error: 'Internal Server Error' });
      break;
    case 501:
      res.status(501).json({ error: 'Not Implemented' });
      break;
    default:
      res.status(500).json({ error: 'Something went wrong' });
  }
}
