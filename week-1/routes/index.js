const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.send('Sarah Birch');//text back in the browser
});
routes.get('/test', (req, res) => {
  res.send('Daniel Mars');//text back in the browser
});
module.exports = routes;
