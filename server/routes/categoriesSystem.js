const express = require("express");
const router = express.Router();

const categoryNewRouter = require("./categoriesSystem/categoryNew");
const categoryFindRouter = require("./categoriesSystem/categoryFind");
const categoryDeleteRouter = require("./categoriesSystem/categoryDelete");
const categoryUpdateRouter = require("./categoriesSystem/categoryUpdate");

const middlewareRouter = require("../middleware/authMiddleware");

router.use("/newCategory", middlewareRouter, categoryNewRouter);
router.use("/findCategory", categoryFindRouter);
router.use("/deleteCategory", middlewareRouter, categoryDeleteRouter);
router.use("/updateCategory", middlewareRouter, categoryUpdateRouter);

module.exports = router;
