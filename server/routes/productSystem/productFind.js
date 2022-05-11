const express = require("express");
const router = express.Router();
const productModel = require("../../model/productModel");
const auth = require("../../middleware/authMiddleware");
const { Product } = require("../../model/productModel");

router.get("/product/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const result = await productModel.findProductById(id);
    res.json(result);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const { category } = req.query;
    const productArr = await productModel.findProduct(category);
    res.json(productArr);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.get("/titleProduct", async (req, res) => {
  try {
    const { title } = req.query;
    console.log(title);
    const productTitleArr = await productModel.findProductByTitle(title);
    res.json(productTitleArr);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.get("/find-three", async (req, res) => {
  try {
    const productArr = await productModel.findProduct().limit(3);
    res.json(productArr);
  } catch (err) {
    res.status(400).json({ err: err });
  }
});

router.get("/myProducts", auth, async (req, res) => {
  try {
    let user = req.tokenData;
    if (!user.biz && !user.isAdmin)
      return res.status(403).json("Un authorize user!");
    const products = await Product.find({ createdBy: user.id });
    res.send(products);
  } catch (error) {
    console.log(error);
    res.status(500).send(error);
  }
});

module.exports = router;
