const express = require('express');
const controllers = require('../controllers/index');
const middlewares = require('../middlewares/index');
// const schema = require('../schemas/index');

const router = express.Router();

router.get('/', middlewares.validtoken, controllers.getContact);

module.exports = router;
