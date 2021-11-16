const express = require("express");
const router = express.Router();
const passport = require("passport");

const {
  register,
  login,
  logout,
  editUser,
  changeIsAdmin,
  deleteUser,
  allUsers,
} = require("../controllers/usersControllers");

// Ruta para registro
router.post("/register", register);

// Ruta para login
router.post("/login", passport.authenticate("local"), login);

// Ruta para logout
router.post("/logout", logout);

// Ruta para editar un usuario
router.put("/:email", editUser);

// Ruta para promover o remover administradores (Sadmin es el unico que puede  remover y dar permisos de Admin)
//en el body tienen que enviar {isAdmin: "Admin"} para promver
//en el body tienen que enviar {isAdmin: null} para quitar permisos (quitar admin)
router.put("/authGiven/:id", changeIsAdmin);

// ruta para eliminar un usuario (Sadmin)
router.delete("/delete/:id", deleteUser);

// ruta para ver todos los usuarios (Sadmin)
router.get("/:userId", allUsers);

module.exports = router;
