//Daniel Korkus 314629692
//Tamir Razon 207421322




var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('addcaloriespage');
  
});

module.exports = router;
