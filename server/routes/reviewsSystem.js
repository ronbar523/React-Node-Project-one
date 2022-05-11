const express = require("express");
const router = express.Router();

const reviewNewRouter = require("./reviewsSystem/reviewNew");
const reviewFindRouter = require("./reviewsSystem/reviewFind");
const reviewDeleteRouter = require("./reviewsSystem/reviewDelete");
const reviewUpdateRouter = require("./reviewsSystem/reviewUpdate");

const middlewareRouter = require("../middleware/authMiddleware");

router.use("/newReview", middlewareRouter, reviewNewRouter);
router.use("/find", reviewFindRouter);
router.use("/delete", middlewareRouter, reviewDeleteRouter);
router.use("/update", middlewareRouter, reviewUpdateRouter);

module.exports = router;
