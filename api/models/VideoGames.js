const { STRING } = require("sequelize");
const S = require("sequelize");
const sequelize = require("../db");

class VideoGames extends S.Model {}
VideoGames.init(
  {
    name: {
      type: S.STRING,
    },
    released: {
      type: S.STRING
    },
    image: {
      type: S.STRING
    },
    rating: {
      type: S.INTEGER,
    },
    platforms: {
      type: S.ARRAY(STRING)
    },
    price: {
      type: S.INTEGER,
    },
    description: {
      type: S.TEXT
    },
    stock: {
      type: S.INTEGER,
    }
  },
  { sequelize, modelName: "videogames" }
);

module.exports = VideoGames;