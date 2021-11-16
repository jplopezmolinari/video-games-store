const express = require("express");
const router = express.Router();
const { addReview, allReview } = require("../controllers/reviewsControllers");

router.get("/vgreviews/:vgId", allReview);
router.post("/addreview/:vgId/:userId", addReview);

module.exports = router;
