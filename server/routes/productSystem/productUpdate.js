const express = require("express");
const router = express.Router();
const productModel = require("../../model/productModel");

router.put("/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const update = req.body;
    await productModel.updateProduct(id, update);
    res.json({ msg: "product update successfully" });
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

module.exports = router;
