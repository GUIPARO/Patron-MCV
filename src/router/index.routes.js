// Separara nuestras rutas de nuestro servidor principal
// router es una propiedad de express que nos permite separar las rutas de nuestro servidor principal

const express = require('express');
const path = require('path')
const router = express.Router();
const controller = require('../controller/index.controller')


router.get('/', controller.getMovies)


router.get('/mundo', controller.getOtra)

module.exports = router