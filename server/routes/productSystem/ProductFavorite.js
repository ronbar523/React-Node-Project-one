const express = require("express");
const router = express.Router();
const { Product } = require("../../model/productModel");
const auth = require("../../middleware/authMiddleware");

router.patch("/product-like/:id", auth, async (req, res) => {
  try {
    console.log(req.params.id);
    const user = req.user;
    let product = await Product.findOne({ _id: req.params.id });

    const productLikes = product.likes.find((id) => id === user._id);

    if (!productLikes) {
      product.likes.push(user._id);
      product = await product.save();
      return res.send(product);
    }

    const productFiltered = product.likes.filter((id) => id !== user._id);
    product.likes = productFiltered;
    product = await product.save();
    return res.send(product);
  } catch (error) {
    console.log("Could not edit like:", error.message);
    return res.status(500).send(error.message);
  }
});

router.get("/favorite", auth, async (req, res) => {
  try {
    const { _id } = req.user;
    const favoriteCards = await Product.find({ likes: _id });
    return res.send(favoriteCards);
  } catch (error) {
    console.log("Could not edit like:", error.message);
    return res.status(500).send(error.message);
  }
});

module.exports = router;
