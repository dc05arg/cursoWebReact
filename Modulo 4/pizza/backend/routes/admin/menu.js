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

//para agregar
router.post('/agregar', async (req, res, next) => {
  try{
    if (req.body.pizza != "" && req.body.ingredientes != "" && req.body.chica != "" && req.body.grande != ""){
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

//para eliminar
router.get('/eliminar/:id', async (req, res, next) => {
  var id = req.params.id;
  await menuModel.deleteMenuById(id);
  res.redirect('/admin/menu');
});

//para modificar
router.get('/modificar/:id', async (req, res, next) => {
  var id = req.params.id;
  console.log(req.params.id); //para ver si funciona el id (se ve el id en consola)
  var menues = await menuModel.getMenuById(id);

  res.render('admin/modificar', {
    layout: 'admin/layout',
    menues
  });
});

router.post('/modificar', async (req, res, next) => {
  try{
    var obj = {
      pizza: req.body.pizza,
      ingredientes: req.body.ingredientes,
      chica: req.body.chica,
      grande: req.body.grande
    }
    await menuModel.modificarMenuById(obj, req.body.id);
  }
  catch (error){
    console.log(error)
    res.render('admin/modificar', {
      layout: 'admin/layout',
      error: true, message: 'No se modificó el menú'
    });
  }
});

module.exports = router;