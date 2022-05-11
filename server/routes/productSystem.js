const express = require("express");
const router = express.Router();

const middlewareRouter = require("../middleware/authMiddleware");

const productFindRouter = require("./productSystem/productFind");
const productNewRouter = require("./productSystem/productNew");
const productDeleteRouter = require("./productSystem/productDelete");
const productUpdateRouter = require("./productSystem/productUpdate");
const ProductLikeRouter = require("./productSystem/ProductFavorite");

router.use("/findProduct", productFindRouter);
router.use("/newProduct", middlewareRouter, productNewRouter);
router.use("/deleteProduct", middlewareRouter, productDeleteRouter);
router.use("/updateProduct", middlewareRouter, productUpdateRouter);
router.use("/productFavorite", ProductLikeRouter);

module.exports = router;
