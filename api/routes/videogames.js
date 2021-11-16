const express = require("express");
const router = express.Router();

const {
  getProducts,
  getSingleGame,
  postProduct,
  editProduct,
  deleteProduct,
} = require("../controllers/videogamesControllers");

// Ruta que devuelva todos los productos ***
router.get("/", getProducts);

// Ruta que devuelva un producto específico ****
router.get("/:id", getSingleGame);

// Ruta para agregar un producto***
//EJEMPLO DEL BODY:
// {
//   "name": "nuevo",
//    "released": "today",
//    "image": "some url",
//    "rating": 5,
//    "platforms": ["this console"],
//    "price": 100,
//    "description": "really entertaining game",
//    "stock": 5,
//    "category": ["Action", "Sci-Fi"]
// }
router.post("/newGame", postProduct);

// Ruta para modificar un producto***
router.put("/edit/:id", editProduct);

// Ruta para eliminar un producto ***
router.delete("/remove/:id", deleteProduct);

module.exports = router;
