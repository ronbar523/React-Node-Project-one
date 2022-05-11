const express = require("express");
const router = express.Router();
const categoryModel = require("../../model/categoriesModel");

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    await categoryModel.updateCategory(id, update);
    res.json({ msg: "Category update successfully" });
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

module.exports = router;
