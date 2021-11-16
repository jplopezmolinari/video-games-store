const { STRING } = require("sequelize");
const S = require("sequelize");
const sequelize = require("../db");

class Orders extends S.Model {}

Orders.init(
  {
    price: {
      type: S.INTEGER,
    },
    date: {
      type: S.STRING,
    },
    status: {
      type: S.ENUM('complete', 'pending', 'rejected'),
    },
    videogames: {
      type: S.ARRAY(STRING)
    }
  },
  { sequelize, modelName: "orders" }
);

module.exports = Orders;
