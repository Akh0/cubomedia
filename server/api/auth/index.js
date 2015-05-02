'use strict';

var express = require('express');
var controller = require('./auth.controller');

var router = express.Router();

router.get('/me', controller.me);

module.exports = router;