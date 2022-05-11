const express = require("express");
const router = express.Router();
const categoryModel = require("../../model/categoriesModel");

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await categoryModel.deleteCategoryById(id);
    res.json({ msg: "Category Deleted Successfully" });
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

module.exports = router;
