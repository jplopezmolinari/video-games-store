const { User } = require("../models/index");

const register = (req, res, next) => {
  const { email } = req.body;
  User.findOrCreate({
    where: { email },
    defaults: req.body,
  })
    .then((user) => res.status(201).send(user))
    .catch(next);
};

const login = (req, res, next) => {
  res.send(req.user);
};

const logout = (req, res, next) => {
  req.logOut();
  res.sendStatus(200);
};

const editUser = (req, res, next) => {
  const { email } = req.params;
  User.update(req.body, { where: { email }, returning: true }).then(
    ([n, user]) => {
      user[0]
        .hashPw(user[0].password, user[0].salt)
        .then((hash) => {
          user[0].password = hash;
          user[0].save();
          res.status(201).send(user[0]);
        })
        .catch(next);
    }
  );
};


// promover o remover administradores (Sadmin es el unico que puede  remover y dar permisos de Admin)
//en el body tienen que enviar {isAdmin: "Admin"} para promver
//en el body tienen que enviar {isAdmin: null} para quitar permisos (quitar admin)

const changeIsAdmin = (req, res, next) => {
  //es Super Admin?
  console.log(req.body);
  User.update(req.body, { where: { id: req.params.id }, returning: true })
    .then(([n, user]) => {
      res.status(201).send(user[0]);
    })
    .catch(next);
};

const deleteUser = (req, res, next) => {
  User.destroy({
    where: { id: req.params.id },
  })
    .then(() => {
      res.sendStatus(202);
    })
    .catch(next);
};

const allUsers = (req, res, next) => {
  User.allExceptsMe(req.params.userId)
    .then((users) => {
      if (!users) res.send([]).end();
      res.status(200).send(users);
    })
    .catch(next);
};

module.exports = {
  register,
  login,
  logout,
  editUser,
  changeIsAdmin,
  deleteUser,
  allUsers,
};
