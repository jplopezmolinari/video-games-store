const { Cart, VideoGames, CartVideoGames } = require("../models/index");

const getCart = (req, res, next) => {
  Cart.findOne({
    where: { id: req.params.id, userId: req.params.user },
    include: VideoGames,
  })
    .then((cart) => res.send(cart))
    .catch(next);
};

const addProductToCart = (req, res, next) => {
  //necesitamos por body la cantidad de juegos (quantity) va a ser 1

  //parseamos la quantity
  let quantity = parseInt(req.body.quantity);

  //buscamos el video juego por el id que llega de rq.params
  VideoGames.findByPk(req.params.gameId)
    .then((game) => {
      // multiplicamos el precio por la cantidad de vidiojuegos agregados
      let newPrice = game.price * quantity;

      //retorno el total y el objeto juego de la base de datos
      return [newPrice, game];
    })
    .then(([newPrice, game]) => {
      //busco un carrito que este open y sea del usuario loggeado
      Cart.findOne({
        where: { status: "open", userId: req.params.userId },
      }).then((cart) => {
        //si el carrito no existe va a ser undefined y entra en el if
        if (!cart) {
          console.log("no hay cart, tenemos que crear");

          //creamos un cart nuevo con status abierto, la cantidad de productos que agrego el cliente y el precio total
          Cart.create({ status: "open", quantity, price: newPrice }).then(
            (newCart) => {
              //vinculamos el carrito creado al usuario loggeado con magic methods de sequelize
              newCart.setUser(req.params.userId);

              //vinculamos el videojuego al carrito con magic methods de many to many assossiations y seteamos la cantidad de video juegos agregados
              newCart.addVideogame(game, {
                through: { amountOfGames: quantity },
              });

              //lo enviamos por respuesta al carrito
              res.send(newCart);
            }
          );
        } else {
          // si el carrito ya existia entra aca
          console.log("conseguimos vamos a updatear");

          //al precio que ya tenia le suma el nuevo que entro (newPrice linea 27)
          let createdPrice = cart.price + newPrice;

          //le suma a la cantidad que ya tenia el carrito la nueva cantidad que entro
          let newQuantity = cart.quantity + quantity;

          //updateamos los datos del carrito a los nuevos
          Cart.update(
            { quantity: newQuantity, price: createdPrice },
            { where: { id: cart.id }, returning: true }
          ).then(([n, updatedCart]) => {
            //seteamos la relacion del carrito al nuevo video juego
            updatedCart[0].addVideogame(game, {
              through: { amountOfGames: quantity },
            });

            //respondemos con el carrito con nuevos datos
            res.send(updatedCart[0]);
          });
        }
      });
    })
    .catch(next);
};

const increaseProduct = async (req, res, next) => {
  const game = await VideoGames.findByPk(req.params.gameId);

  if (game) {
    Cart.findOne({ where: { status: "open", userId: req.params.userId } }).then(
      (cart) => {
        CartVideoGames.findOne({
          where: { cartId: cart.id, videogameId: req.params.gameId },
        })
          .then((cartVideoG) => {
            cartVideoG.amountOfGames++;
            cartVideoG.save();
            cart.quantity++;
            cart.price += game.price;
            cart.save();
            res.send(cartVideoG);
          })
          .catch(next);
      }
    );
  } else {
    res.sendStatus(404);
  }
};

const decreaseProduct = async (req, res, next) => {
  const game = await VideoGames.findByPk(req.params.gameId);

  if (game) {
    Cart.findOne({ where: { status: "open", userId: req.params.userId } }).then(
      (cart) => {
        CartVideoGames.findOne({
          where: { cartId: cart.id, videogameId: req.params.gameId },
        })
          .then((cartVideoG) => {
            cartVideoG.amountOfGames--;
            cartVideoG.save();
            cart.quantity--;
            cart.price -= game.price;
            cart.save();
            res.send(cartVideoG);
          })
          .catch(next);
      }
    );
  } else {
    res.sendStatus(404);
  }
};

const deleteProduct = async (req, res, next) => {
  const game = await VideoGames.findByPk(req.params.gameId);

  const deleteRow = (cartId) => {
    return CartVideoGames.findOne({
      where: { cartId: cartId, videogameId: req.params.gameId },
    }).then((result) => {
      return CartVideoGames.destroy({
        where: { cartId: cartId, videogameId: req.params.gameId },
      }).then((u) => {
        return result;
      });
    });
  };

  if (game) {
    Cart.findOne({ where: { status: "open", userId: req.params.userId } }).then(
      (cart) => {
        deleteRow(cart.id).then((deletedGame) => {
          cart.price -= game.price * deletedGame.amountOfGames;
          cart.quantity -= deletedGame.amountOfGames;
          cart.save();
          res.send(cart);
        });
      }
    );
  } else {
    res.sendStatus(404);
  }
};

module.exports = {
  getCart,
  addProductToCart,
  increaseProduct,
  decreaseProduct,
  deleteProduct,
};
