const express = require("express");
const router = express.Router();
const userRouter = require("./user");
const videoGamesRouter = require("./videogames");
const cartRouter = require("./cart");
const searchRouter = require("./search");
const categoriesRouter = require("./categories");
const reviewsRouter = require("./reviews");
const ordersRouter = require("./orders");

router.use("/users", userRouter);
router.use("/videoGames", videoGamesRouter);
router.use("/cart", cartRouter);
router.use("/search", searchRouter);
router.use("/categories", categoriesRouter);
router.use("/reviews", reviewsRouter);
router.use("/orders", ordersRouter);

module.exports = router;
