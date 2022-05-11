const express = require("express");
const router = express.Router();
const UserValidation = require("../../validation/userValidation");
const bcrypt = require("../../config/bcrypt");
const UserModel = require("../../model/userModel");

router.post("/", async (req, res) => {
  try {
    const request = await UserValidation.registerSchema.validateAsync(
      req.body,
      { abortEarly: false }
    );

    request.password = await bcrypt.createHash(request.password);

    const ifExistingEmailArr = await UserModel.findUserByEmail(request.email);
    if (ifExistingEmailArr.length != 0) {
      throw "email its exist";
    } else {
      await UserModel.createUser(
        request.firstName,
        request.lastName,
        request.userName,
        request.email,
        request.phone,
        request.country,
        request.state,
        request.city,
        request.address,
        request.password,
        request.biz
      );
    }

    res.json({ status: 200, msg: "work", response: request });
  } catch (err) {
    res.status(400).json({ status: 400, err: err });
  }
});

module.exports = router;

// router.post("/", async (req, res) => {
//   const { error } = registerSkeleton(req.body);
//   if (error) {
//     console.log(error.details[0].message);
//     return res.status(400).send(error.details[0].message);
//   }

//   let user = await User.findOne({ email: req.body.email });
//   if (user) {
//     console.log("Registration Error: User already registered");
//     return res.status(400).send("User already registered.");
//   }

//   user = new User(
//   (req.body, ["firstName", "lastName", "userName", "email", "phone", "country", "state", "city", "address", "password", "biz"])
//   );

//   user.password = createHash(user.password);
//   await user.save();
//   res.send(user, ["_id", "firstName", "email"]);
// });

// module.exports = router;
