// importar las rutas
const express = require("express");
const router = express.Router();
const empleadosController = require("../controllers/category.cotroller");

//para crear el route, comenzar a testear con postman
router.post("/", categoryController.create)// envio de datos con .create 
router.get("/", categoryController.find)// buscar el empleado
router.get("/:id", categoryController.findOne)//busca a solo un empleado
router.put("/:id", categoryController.update)//para hacer una actualizacion se hace con put
router.delete("/:id", categoryController.remove)//para eliminar 
module.exports = router
