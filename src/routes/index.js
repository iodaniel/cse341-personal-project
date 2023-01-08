const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Sarah Birch');
});
routes.get('/test1', (req, res) => {
  res.send('Daniel Birch');
});
routes.get('/test2', (req, res) => {
  res.send('Daniel Marz');
});

module.exports = routes;
