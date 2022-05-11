const mongoose = require("mongoose");

const PasswordRestSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
});

const PasswordRest = mongoose.model("PasswordRest", PasswordRestSchema);

module.exports = {
  PasswordRest,
};
