const { Reviews, User } = require("../models/index");

const allReview = (req, res, next) => {
  Reviews.findAll({
    where: { videogameId: req.params.vgId },
    include: User,
  })
    .then((reviews) => res.status(200).send(reviews))
    .catch(next);
};

const addReview = (req, res, next) => {
  Reviews.findOrCreate({
    where: { videogameName: req.body.videogameName, userId: req.params.userId },
    defaults: req.body,
  })
    .then((review) => {
      review[0].setVideogame(req.params.vgId);
      review[0].save();
      res.status(202).send(review[0]);
    })
    .catch(next);
};

module.exports = { addReview, allReview };

// http://localhost:3001/api/reviews/addreview/2/1

// {
//     "videogameName": "Portal 2",
//     "text": "asdasdasdadada",
//     "rate": 5
// }
