const  express = require("express");
const router = express.Router();
const productController = require("../controllers/products.controller.js");

router.post("/", productController.create);
router.get("/", productController.find);
router.get("/:id", productController.findOne);
router.put("/:id", productController.update);
router.delete("/:id", productController.remove);
module.exports = router;