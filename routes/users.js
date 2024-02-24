var express = require('express');
const {signup, signin, signout} = require("../controllers/userController");
var router = express.Router();

router.use(express.json());

router.post('/signup', signup)

router.post('/signin', signin)

router.get('/signout',signout)

module.exports = router;

/* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });
