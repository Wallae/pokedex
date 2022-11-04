var express = require('express');
var router = express.Router();

/* Define Controller */
const favsController = require('../controllers/favsController.js')

/* GET home page. */
router.get('/', favsController.index);
router.post('/:pokemonName',favsController.addFavorite);

module.exports = router;
