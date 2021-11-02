var express = require('express');
var router = express.Router();
var usuariosModel = require('./../../models/usuariosModel');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('admin/login', {
      layout: 'admin/layout'
  });
});

/*logout*/

router.get('/logout', function(req, res, next){
  req.session.destroy(); //destruye las variables de sesion (id y usuario)
  res.render('admin/login', {
    layout: 'admin/layout'
  });
});

router.post('/', async (req, res, next) => {
  try {
    var usuario = req.body.usuario;  //guarda el usuario que escribimos
    var password = req.body.password;  //guarda el password que escribimos

    //para verificar si me trajo el usr y psw colocar y lo vemos en la terminal
    // console.log(req.body);

    var data = await usuariosModel.getUserByUsernameAndPassword(usuario, password);

    if (data != undefined) {

      //los siguientes 2 res. son para que se conecten con lo de app.js logout
      // req.session.id_usuario = data.id;
      // req.session.nombre = data.usuario;

      res.redirect('/admin/menu');
    } else {
      res.render('admin/login', {
        layout: 'admin/layout',
        error: true
      });
    }
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;