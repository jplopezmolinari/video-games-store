const S = require("sequelize");
const sequelize = require("../db");

class CartVideoGames extends S.Model {}

CartVideoGames.init(
  {
    amountOfGames:{
      type: S.INTEGER,
    },
  },
  { sequelize, modelName: "cart-videogames" }
);


module.exports = CartVideoGames;
