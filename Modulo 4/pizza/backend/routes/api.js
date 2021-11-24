var express = require('express');
var router = express.Router();
var menuModel = require('./../models/menuModel');
var cloudinary = require('cloudinary').v2;

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
});

module.exports = router;