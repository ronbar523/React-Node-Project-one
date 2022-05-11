const express = require("express");
const router = express.Router();
const categoryModel = require("../../model/categoriesModel");
const middlewareRouter = require("../../middleware/authMiddleware");

router.get("/:id", middlewareRouter, async (req, res) => {
  try {
    const { id } = req.params;
    const result = await categoryModel.findCategoryById(id);
    res.json(result);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const CategoryArr = await categoryModel.findCategory();
    res.json(CategoryArr);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

module.exports = router;
