const express = require("express");

const router = express.Router();

const controller = require("../controllers/cartController");

router.get("/:userId", controller.getCart);

router.put("/:userId", controller.updateCart);

router.delete("/:userId", controller.clearCart);

module.exports = router;