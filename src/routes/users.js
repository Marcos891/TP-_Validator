var express = require('express');
var router = express.Router();

const { register, users } = require('../controller/usersController');
const registerValidator = require('../validator/registerValidator');

/* GET users listing. */
router
.get('/', users )
.post('/', registerValidator, register)


module.exports = router;
