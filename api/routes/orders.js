const express = require("express");
const router = express.Router();

const {
  newOrder,
  completeOrder,
  orderHistory,
  getAllPending
} = require("../controllers/ordersControllers");

// Ruta que devuelva el historial de órdenes de compra de un usuario
router.get("/allFrom/:userId", orderHistory);

router.get("/seePending", getAllPending)

// Ruta de compra del carrito actual
router.post("/:userId", newOrder);

// Ruta para pasar order a complete o rejected
//Ej del body para complete= { "status": "complete" }
//Ej del body para rejected= { "status": "rejected" }
router.put("/toConfirm/:orderId", completeOrder);

module.exports = router;
