const express = require('express');
const router = express.Router();

const controllerContacts= require('../controllers/contacts');

router.get('/', controllerContacts.getAll);

router.get('/:id', controllerContacts.getSingle);

router.post('/', controllerContacts.createContact);

router.put('/:id', controllerContacts.updateContact);

router.delete('/:id', controllerContacts.deleteContact);



module.exports = router;