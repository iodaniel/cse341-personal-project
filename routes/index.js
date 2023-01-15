const express = require('express');
const router = express.Router();
//createa route for the contact all ...
router.use('/', require('./swagger'));
router.use('/contacts', require('./contacts'));

router.get('/', (req, res) => {
  res.send('Sarah Birch');
});
router.get('/test1', (req, res) => {
  res.send('Daniel Birch');
});
router.get('/test2', (req, res) => {
  res.send('Daniel Marz');
});

module.exports = router;
