const express = require('express');
const router = express.Router();

const controllerContacts= require('../controllers/contacts');

router.get('/', controllerContacts.getAll);

router.get('/:id', controllerContacts.getSingle);



module.exports = router;