const express = require("express");
const router = express.Router();
const usariosController = require("../controllers/usuarios-controller");

//pruebas
router.get("/hola", (req,res) => {res.send("Hola mundo")});
router.get("/", (req,res) => {res.send("Landing page")});
router.get("/prueba", (req,res) => {res.send("esto es una prueba")});
router.post("/post", (req, res) => {res.send("Esto es una prueba en POST");});
//Usuarios
router.get("/usuarios", usariosController.findAllUsuarios);


module.exports = router;