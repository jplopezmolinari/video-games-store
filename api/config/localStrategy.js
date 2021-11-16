const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const { User } = require("../models/index");

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password",
    },
    function (email, password, done) {
      User.findOne({ where: { email } })
        .then((user) => {
          if (!user) return done("Incorrect email", false);
          user.hashPw(password, user.salt).then((pwHashed) => {
            if (pwHashed !== user.password) return done('Incorrect password', false);
            else return done(null, user)
          });
        })
        .catch(done);
    }
  )
);

//serialize & deserialize
passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findByPk(id)
    .then((user) => done(null, user))
    .catch(done);
});
