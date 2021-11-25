var express = require('express');
var router = express.Router();
var menuModel = require('./../models/menuModel');
var cloudinary = require('cloudinary').v2;
var nodemailer = require('nodemailer');

router.get('/menu', async function (req, res, next) {
    let menu = await menuModel.getMenu();

    menu = menu.map(menu => {
        if (menu.img_id) {
            const imagen = cloudinary.image(menu.img_id, {
                width: 960,
                height: 200,
                crop: 'fill'
            });
            return {
                ...menu,
                imagen
            }
        } else {
            return {
                ...menu,
                imagen: ''
            }
        }
    });

    res.json(menu);
}); //termina menú

//inicio contacto

router.post('/contacto', async (req, res) => {
    const mail = {
        to: 'cavallidh@gmail.com',
        subjet: 'Contacto web',
        html: `${req.body.nombre} ${req.body.apellido}  se contacto a través de la web. <br>
        Su dirección de envío es: ${req.body.direccion} <br>
        Su localidad es: ${req.body.localidad} <br>
        Su teléfono es: ${req.body.telefono} <br>
        Su correo electrónico es: ${req.body.email} <br>
        Su pedido es: ${req.body.pedido} <br>` //modificar para la pizza
    }
    
    const transport = nodemailer.createTransport({
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        auth: {
            user: process.env.SMTP_USER,
            pass: process.env.SMTP_PASS
        }
    }); //cierra transport

    await transport.sendMail(mail)

    res.status(201).json({
        error: false,
        message: 'Mensaje enviado'
    });
});

module.exports = router;