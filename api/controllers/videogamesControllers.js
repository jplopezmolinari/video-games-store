const { VideoGames, Categories } = require("../models/index");

const getProducts = (req, res, next) => {
  VideoGames.findAll()
    .then((videoGames) => res.status(200).send(videoGames))
    .catch(next);
};

const getSingleGame = (req, res, next) => {
  VideoGames.findOne({
    where: { id: req.params.id },
    include: Categories,
  })
    .then((videoGame) => res.status(200).send(videoGame))
    .catch(next);
};

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

const postProduct = (req, res, next) => {
  const {
    name,
    released,
    image,
    rating,
    platforms,
    price,
    description,
    stock,
    category,
  } = req.body;

  //encuentr o crea el juego
  VideoGames.findOrCreate({
    where: { name },
    defaults: {
      name,
      released,
      image,
      rating,
      platforms,
      price,
      description,
      stock,
    },
  })
    .then((videoGame) => {
      console.log(category);
      //itera el array de categorias y las encuentra o la crea
      category.forEach((catg) => {
        Categories.findOrCreate({
          where: { name: catg },
          defaults: {
            name: catg,
          },
        }).then((catg) => {
          //setea la categoria al videojuego
          videoGame[0].addCategory(catg[0]);
          videoGame[0].save();
          res.end();
        });
      });
    })
    .catch(next);
};

const editProduct = (req, res, next) => {
  const {
    name,
    released,
    image,
    rating,
    platforms,
    price,
    description,
    stock,
    category,
  } = req.body;
  let { id } = req.params;

  category.forEach((catg) => {
    Categories.findOrCreate({
      where: { name: catg },
      defaults: {
        name: catg,
      },
    }).then((catg) => {
      VideoGames.findByPk(id).then((game) => {
        game.getCategories().then((cats) => {
          game.removeCategories(cats).then(() => {
            game.addCategory(catg[0]);
            game.save();
          });
        });
      });
    });
  });

  VideoGames.update(
    {
      name,
      released,
      image,
      rating,
      platforms,
      price,
      description,
      stock,
    },
    {
      where: { id },
      returning: true,
    }
  )
    .then(([n, gameUpdated]) => {
      res.status(201).send(gameUpdated[0]);
    })
    .catch(next);
};

const deleteProduct = (req, res, next) => {
  VideoGames.destroy({
    where: { id: req.params.id },
  }).then(() => res.status(204).end());
};

module.exports = {
  getProducts,
  getSingleGame,
  postProduct,
  editProduct,
  deleteProduct,
};
