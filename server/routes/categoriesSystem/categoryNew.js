const express = require("express");
const router = express.Router();
const categoryValidation = require("../../validation/categoriesValidation");
const categoryModel = require("../../model/categoriesModel");

router.post("/", async (req, res) => {
  try {
    const categoryReq = await categoryValidation.CategorySchema.validateAsync(
      req.body,
      { abortEarly: false }
    );

    await categoryModel.createCategory(
      categoryReq.title,
      categoryReq.image,
      categoryReq.name
    );

    res.json({ status: 200, msg: "work", response: categoryReq });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
});

module.exports = router;
