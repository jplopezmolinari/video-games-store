const express = require("express");
const router = express.Router();
const { VideoGames, Categories } = require("../models/index");
const { searchByNameDesc, searchByCategory } = require("../controllers/searchControllers")
// BUSCADOR de juegos POR Nombre & description
//ruta = `/api/search?search={inputValue}`
router.get("/", searchByNameDesc)

//BUSCADOR de juegos POR Categoria
//ruta = `/api/search/category?selected={categoryName}`
router.get("/category", searchByCategory)

module.exports = router;
