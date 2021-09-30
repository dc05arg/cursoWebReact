var express = require('express');
var router = express.Router();

/* GET ubicación page. */
router.get('/', function(req, res, next) {
  res.render('ubicacion');
});

module.exports = router;
