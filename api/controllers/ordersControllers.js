const { Cart, Orders, VideoGames, User } = require("../models/index");

const nodemailer = require("nodemailer");

//utils
const getGameNames = (arrGames) => {
  return arrGames.map((game) => {
    return game.name;
  });
};

// configurar envio de email confirmando la compra
const sendEmail = async (order, user, status) => {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "steamVerdeok@gmail.com",
      pass: "pepeperez",
    },
  });
  let emailText = `
        <h1> Hola, ${user.name}! </h1>
        <p>Tu compra se encuentra en status ${status}</p>
        <h3>Detalles de tu compra:</h3>
        <ul>
        ${order.videogames.map((game) => `<li>${game}</li>`).join("")}
        </ul>
        <p>Total: $ ${order.price} USD</p>
        `;
  return transporter.sendMail({
    from: 'steamVerdeok@gmail.com',
    to: user.email,
    subject: "Order status and details ✔",
    html: emailText,
  });
};

const newOrder = (req, res, next) => {
  let f = new Date();
  let fullDate = f.getDate() + "-" + f.getMonth() + "-" + f.getFullYear();

  Cart.findOne({
    where: { userId: req.params.userId, status: "open" },
    include: VideoGames,
  })
    .then((cart) => {
      cart.status = "close";
      cart.save();
      const games = getGameNames(cart.videogames);
      return [cart, games];
    })
    .then(([closedCart, games]) => {
      Orders.create({
        price: closedCart.price,
        date: fullDate,
        status: "pending",
        videogames: games,
      }).then((order) => {
        User.findByPk(req.params.userId).then(async (user) => {
          order.setCart(closedCart.id);
          order.setUser(parseInt(req.params.userId));
          await sendEmail(order, user, "pending");
          res.send(order);
        });
      });
    })
    .catch(next);
};

const completeOrder = (req, res, next) => {
  Orders.update(req.body, {
    where: { id: req.params.orderId },
    returning: true,
  })
    .then(([n, order]) => {
      order[0].getUser().then(async (user) => {
        await sendEmail(order[0], user, order[0].status);
        res.status(201).send(order[0]);
      });
    })
    .catch(next);
};

const orderHistory = (req, res, next) => {
  Orders.findAll({ where: { userId: req.params.userId } })
    .then((order) => {
      res.status(200).send(order);
    })
    .catch(next);
};

const getAllPending = (req, res, next) => {
  Orders.findAll({ where: { status: "pending" } }).then((pendingOrders) =>
    res.status(201).send(pendingOrders)
  );
};

module.exports = { newOrder, completeOrder, orderHistory, getAllPending };
