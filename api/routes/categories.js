const express = require("express");
const router = express.Router();
const { Categories } = require("../models/index");
const { allCategories, createCategories, editCategories, deleteCategories } = require('../controllers/categoriesControllers.js')


//Ruta para obtener todas las categorias (nombres)
router.get("/", allCategories)

// Ruta para crear categorías
router.post("/create", createCategories)

// Ruta para editar categorias
router.put("/edit/:id", editCategories)

// Ruta para eliminar categorías
router.delete("/delete/:id", deleteCategories)

module.exports = router;
