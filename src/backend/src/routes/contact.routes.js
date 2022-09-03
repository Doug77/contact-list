const express = require('express');
const controllers = require('../controllers/index');
const middlewares = require('../middlewares/index');

const router = express.Router();

router.get('/', middlewares.validtoken, controllers.getContact);
router.post('/', middlewares.validtoken, controllers.newContact);
router.put('/', middlewares.validtoken, controllers.updateContact);

module.exports = router;
