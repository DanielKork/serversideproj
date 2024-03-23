var express = require('express');
const { getAbout } = require('../controllers/aboutController');
var router = express.Router();

router.use(express.json());

router.get('/', getAbout)

module.exports = router;