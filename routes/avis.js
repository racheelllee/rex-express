var express = require('express');
var router = express.Router();
const AvisController = require('../controllers/AvisController')
const AvisValidator = require('../validators/AvisValidator')
const validation = require('../validators/validation')

router.get('/', AvisController.find);
router.post('/', AvisValidator.create, validation, AvisController.create)

module.exports = router;