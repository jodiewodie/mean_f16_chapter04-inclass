var express = require('express');
var router = express.Router();
var ctrlIndex = require('../controllers/index');

/* GET home page. */
router.get('/', ctrlIndex.showStudentName);

module.exports = router;
