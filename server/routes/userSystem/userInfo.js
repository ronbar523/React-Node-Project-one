const express = require('express');
const router = express.Router();
const {User} = require('../../model/userModel');
const auth = require("../../middleware/authMiddleware");




router.get("/", auth, (req, res) => {
  let user = req.user;

  User.findById(user._id)
    .select(["-password", "-createdAt", "-__v"])
    .then(user => res.send(user))
    .catch(errorsFromMongoose => res.status(500).send(errorsFromMongoose));
});

module.exports = router;