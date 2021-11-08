var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/menu', {
      layout: 'admin/layout',
      usuario: req.session.nombre
  });
});

module.exports = router;