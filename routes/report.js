//Daniel Korkus 314629692
//Tamir Razon 207421322



var express = require('express');
const { getReport } = require('../controllers/reportController');
var router = express.Router();

router.use(express.json());

router.get('/', getReport)

module.exports = router;