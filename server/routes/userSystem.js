const express = require("express");
const router = express.Router();

const registerRouter = require("./userSystem/register");
const loginRouter = require("./userSystem/login");
const restRouter = require("./userSystem/restPassword");

router.use("/register", registerRouter);
router.use("/login", loginRouter);
router.use("/rest", restRouter);

module.exports = router;
