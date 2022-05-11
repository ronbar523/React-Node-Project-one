const express = require("express");
const router = express.Router();

const registerRouter = require("./userSystem/register");
const loginRouter = require("./userSystem/login");
const infoRouter = require("./userSystem/userInfo");
// const restRouter = require("./userSystem/restPassword");

router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/info", infoRouter);
// router.use("/rest", restRouter);

module.exports = router;
