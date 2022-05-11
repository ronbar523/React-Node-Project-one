const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  userName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    lowercase: true,
  },
  phone: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  country: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  city: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  biz: {
    type: Boolean,
    required: true,
    default: false,
  },
  createdAt: {
    type: Number,
    required: true,
    default: Date.now,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  resetLink: {
    data: String,
    default: "",
  },
});

const User = mongoose.model("User", userSchema);

const createUser = (
  firstName,
  lastName,
  userName,
  email,
  phone,
  country,
  state,
  city,
  address,
  password,
  biz,
  createdAt,
  isAdmin
) => {
  const newUser = new User({
    firstName,
    lastName,
    userName,
    email,
    phone,
    country,
    state,
    city,
    address,
    password,
    biz,
    createdAt,
    isAdmin,
  });
  return newUser.save();
};
const findUserByEmail = (email) => {
  return User.find({ email: email });
};

// function getUser(email) {
//   const thisUser = User.find((user) => user.email === email);
//   return thisUser;
// }

// function updateUser(user) {
//   const thisUserIndex = User.findIndex((local) => local.email === user.email);
//   User[thisUserIndex] = user;
// }

// const requests = [];

// function createResetRequest(resetRequest) {
//   requests.push(resetRequest);
// }

// function getResetRequest(id) {
//   const thisRequest = requests.find((req) => req.id === id);
//   return thisRequest;
// }

module.exports = {
  createUser,
  findUserByEmail,
  User,
  //   getUser,
  //   updateUser,
  //   createResetRequest,
  //   getResetRequest,
  // };
};
