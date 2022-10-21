const  express = require("express");
const router = express.Router();
const userController = require("../controllers/user.controller.js");

router.post("/", userController.create);
router.get("/", userController.find);
router.get("/:id", userController.findOne);
router.put("/:id", userController.update);
router.delete("/:id", userController.remove);
module.exports = router;