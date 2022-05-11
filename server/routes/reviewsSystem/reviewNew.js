const express = require("express");
const router = express.Router();
const ReviewValidation = require("../../validation/reviewsValidation");
const ReviewModel = require("../../model/reviewsModel");
const auth = require("../../middleware//authMiddleware");

router.post("/", auth, async (req, res) => {
  try {
    let user = req.tokenData;
    console.log(user);
    if (!user.isAdmin && !user.biz && !user)
      return res.status(404).json("Un authorize user!");
    const reviewsReq = await ReviewValidation.reviewsSchema.validateAsync(
      req.body,
      { abortEarly: false }
    );

    await ReviewModel.createReviews(
      reviewsReq.name,
      reviewsReq.description,
      reviewsReq.rating,
      req.tokenData.id
    );

    res.json({ status: 200, msg: "work", response: reviewsReq });
  } catch (err) {
    res.status(401).json({ status: 400, err: err });
  }
});

module.exports = router;
