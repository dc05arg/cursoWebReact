var express = require('express');
var router = express.Router();
var menuModel = require('../../models/menuModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;

const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

/* GET home page. */
router.get('/', async function(req, res, next) {

  var menu = await menuModel.getMenu();

  menu = menu.map(menues => {
    if (menues.img_id) {
      const imagen = cloudinary.image(menues.img_id, {
        width: 100,
        height: 100,
        crop: 'fill'
      });
      return {
        ...menues,
        imagen
      }
    } else {
      return {
        ...menues,
        imagen: ''
      }
    }
  });

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

    var img_id = '';
    if (req.files && Object.keys(req.files).lenght > 0) {
      imagen = req.files.imagen;
      img_id = (await uploader(imagen.tempFilePath)).public_id;
    }

    if (req.body.pizza != "" && req.body.ingredientes != "" && req.body.chica != "" && req.body.grande != ""){
      await menuModel.insertMenu({
        ...req.body,
        img_id
      });
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

  let menues = await menuModel.getMenuById(id);
  if (menues.img_id) {
    await (destroy(novedad.img_id));
  }

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

//acá modificamos el menú y por id
router.post('/modificar', async (req, res, next) => {
  try{

    let img_id = req.body.img_original;
    let borrar_img_vieja = false;

    if (req.body.img_delete === "1") {
      img_id = null;
      borrar_img_vieja = true;
    } else {
        if (req.files && Object.keys(req.files).lenght > 0) {
          imagen = req.files.imagen;
          img_id = (await uploader(imagen.tempFilePath)).public_id;
          borrar_img_vieja = true;
        }
    }
    if (borrar_img_vieja && req.body.img_original) {
      await (destroy(req.body.img_original));
    }

    var obj = {
      pizza: req.body.pizza,
      ingredientes: req.body.ingredientes,
      chica: req.body.chica,
      grande: req.body.grande,
      img_id
    }
    await menuModel.modificarMenuById(obj, req.body.id);
    res.redirect('/admin/menu');
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