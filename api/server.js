const express = require("express");
const app = express();
const session = require("express-session");
const passport = require("passport");
const serverConfig = require("./config/serverConfig.json");
const db = require("./db");
const routes = require("./routes/index");
const {
  User,
  VideoGames,
  Reviews,
  Orders,
  Categories,
  Cart,
} = require("./models/index");

var cors = require("cors");
app.use(cors({ origin: "http://localhost:3000", credentials: true })); // Use this after the variable declaration

app.use(express.json());

//sessions
app.use(
  session({
    secret: "omdbProject",
    resave: true,
    saveUninitialized: true,
  })
);

//localStrategy
require("./config/localStrategy");


//passportInit
app.use(passport.initialize());
app.use(passport.session());

//Routes
app.use("/api", routes);

// err middleware
app.use(function (err, res) {
  res.sendStatus(500);
});

//app listen
db.sync({ force: false }).then(() => {
  app.listen(serverConfig.port, () => {
    console.log("Serven listening on port " + serverConfig.port);
  });
});
