var express = require('express');
const {signup} = require("../controllers/userController");
var router = express.Router();

router.use(express.json());

router.post('/signup',signup)

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

module.exports = router;

