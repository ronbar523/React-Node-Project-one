const express = require("express");
const router = express.Router();
// const UserValidation = require("../../validation/userValidation");
const UserModel = require("../../model/userModel");
const sendResetLink = require("../../auth/sendEmail");
const { jwt } = require("jsonwebtoken");
router.post("/forget", (req, res) => {
  const { email } = req.body;

  UserModel.User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ error: "User with this email does not exists." });
    }

    const token = jwt.s;
  });
});

module.exports = router;
