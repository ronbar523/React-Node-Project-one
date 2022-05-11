const express = require("express");
const router = express.Router();
const productModel = require("../../model/productModel");

router.delete("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    await productModel.deleteProductById(id);
    res.json({ msg: "Product Deleted Successfully" });
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

module.exports = router;
