const express = require("express");
const router = express.Router();
const usersController = require("../controllers/users.controller");

router.get("/login", usersController.login);
router.post("/", usersController.create);
router.delete("/:id", usersController.remove);
router.get("/:id", usersController.findOne);
router.put("/:id", usersController.update);


module.exports = router;