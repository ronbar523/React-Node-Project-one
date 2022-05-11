const mongoose = require("mongoose");

const reviewsSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  rating: {
    type: Number,
    required: true,
  },
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});

const Reviews = mongoose.model("reviews", reviewsSchema);

const createReviews = (name, description, rating, createdBy) => {
  const newReviews = new Reviews({ name, description, rating, createdBy });
  return newReviews.save();
};

const findReviewById = (id) => {
  return Reviews.findById(id);
};

const findReview = () => {
  return Reviews.find();
};

const deleteReviewById = (id) => {
  return Reviews.findByIdAndDelete(id);
};

const updateReview = (id, update) => {
  return Reviews.findByIdAndUpdate(id, update);
};

module.exports = {
  createReviews,
  findReviewById,
  findReview,
  deleteReviewById,
  updateReview,
};
