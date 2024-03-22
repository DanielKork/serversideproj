var express = require('express');
const { getReport } = require('../controllers/reportController');
var router = express.Router();

router.use(express.json());

router.get('/', getReport)

module.exports = router;