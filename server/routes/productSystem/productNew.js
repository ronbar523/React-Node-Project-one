const express = require("express");
const router = express.Router();
const productValidation = require("../../validation/productValidation");
const productModel = require("../../model/productModel");
// const auth = require("../../middleware/authMiddleware");

router.post("/", async (req, res) => {
  try {
    let user = req.tokenData;

    if (!user.isAdmin && !user.biz)
      return res.status(403).json("Un authorize user!");
    const productReq = await productValidation.productSchema.validateAsync(
      req.body,
      { abortEarly: false }
    );
    console.log(req.tokenData);

    console.log(productReq.image);
    await productModel.createProduct(
      productReq.title,
      productReq.image,
      productReq.price,
      productReq.description,
      productReq.category,
      productReq.pieces,
      req.tokenData.id
    );
    res.json({ status: 200, msg: "work", response: productReq });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
});

module.exports = router;
