const express = require('express');
const controllers = require('../controllers/index');
const middlewares = require('../middlewares/index');

const router = express.Router();

router.get('/:id', controllers.getContact);
router.post('/', middlewares.validtoken, controllers.newContact);
router.put('/', middlewares.validtoken, controllers.updateContact);
router.delete('/', middlewares.validtoken, controllers.deleteContact);

module.exports = router;
