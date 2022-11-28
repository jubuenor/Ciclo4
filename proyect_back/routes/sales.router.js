const  express = require("express");
const router = express.Router();
const salesController = require("../controllers/sales.controller.js");

router.post("/", salesController .create);
router.get("/", salesController .find);
router.get("/:id", salesController .findOne);
router.put("/:id", salesController .update);
router.delete("/:id", salesController .remove);
module.exports = router;