var express = require('express');
var router = express.Router();
var menuModel = require('../../models/menuModel');

/* GET home page. */
router.get('/', async function(req, res, next) {

  var menu = await menuModel.getMenu();

  res.render('admin/menu', {
      layout: 'admin/layout',
      usuario: req.session.nombre,
      menu
  });
});

router.get('/agregar', (req, res, next) => {
  res.render('admin/agregar', {
    layout: 'admin/layout'
  }) //cierra render
});//cierra get

router.post('/agregar', async (req, res, next) => {
  try{
    if (req.body.pizza != "" && req.body.chica != "" && req.body.grande != ""){
      await menuModel.insertMenu(req.body);
      res.redirect('/admin/menu')
    } else {
      res.render('admin/agregar', {
        layout: 'admin/layout',
        error: true, message: 'Todos los campos son requeridos'
      })
    }
  } catch (error) {
    console.log(error);
    res.render('admin/agregar', {
      layout:'admin/layout',
      error: true, message: 'No se cargo la novedad'
    });
  }
});

module.exports = router;