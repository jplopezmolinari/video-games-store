const express = require("express");
const router = express.Router();
const {
  getCart,
  addProductToCart,
  increaseProduct,
  decreaseProduct,
  deleteProduct,
} = require("../controllers/cartControllers");

//Ruta para mostrar los productos de un carrito
router.get("/singleCart/:id/:user", getCart);

// Ruta para agregar un producto al carrito
router.post("/addCart/:gameId/:userId", addProductToCart);

// Ruta para aumentar la cantidad del producto en el carrito
router.put("/increaseProduct/:gameId/:userId", increaseProduct);

// Ruta para decrementar la cantidad del producto en el carrito
router.put("/decreaseProduct/:gameId/:userId", decreaseProduct);

// Ruta para eliminar un producto del carrito
router.delete("/deleteProduct/:gameId/:userId", deleteProduct);

module.exports = router;
