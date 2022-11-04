var express = require('express');
var router = express.Router();

/* Define Controller */
const listController = require('../controllers/listController.js')

/* GET home page. */
router.get('/', listController.list);
router.get('/:name', listController.getName);

module.exports = router;
