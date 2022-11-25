// importar las rutas
const express = require("express");
const router = express.Router();
const restaurantController = require("../controllers/restaurant.controller");

//para crear el route, comenzar a testear con postman
router.post("/", restaurantController.create)// envio de datos con .create 
router.get("/", restaurantController.find)// buscar el empleado
router.get("/:id", restaurantController.findOne)//busca a solo un empleado
router.put("/:id", restaurantController.update)//para hacer una actualizacion se hace con put
router.delete("/:id", restaurantController.remove)//para eliminar 
module.exports = router