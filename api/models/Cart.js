const S = require("sequelize");
const sequelize = require("../db");

class Cart extends S.Model {}

Cart.init(
  {
    quantity: {
      type: S.INTEGER,
      defaultValue: 0,
    },
    price: {
      type: S.FLOAT,
    },
    status:{
      type: S.ENUM('open','close'),
    },
  },
  { sequelize, modelName: "cart" }
);


module.exports = Cart;
