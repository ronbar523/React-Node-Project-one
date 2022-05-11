const express = require("express");
const router = express.Router();
const reviewModel = require("../../model/reviewsModel");
const middlewareRouter = require("../../middleware/authMiddleware");

router.get("/:id", middlewareRouter, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await reviewModel.findReviewById(id);
    res.json(result);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const reviewArr = await reviewModel.findReview();
    res.json(reviewArr);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

module.exports = router;
