const express = require('express');
const router = express.Router()

const contenedor = require("..//controllers/contenedor.controlles")



router.get("/contenedor", contenedor.contenedores)



module.exports = router
