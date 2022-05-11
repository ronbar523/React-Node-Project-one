const joi = require("joi");

const reviewsSkeleton = {
  name: joi.string().min(2).max(20).required(),
  rating: joi.number().min(1).max(10).required(),
  description: joi.string().min(1).max(50).required(),
};

const reviewsSchema = joi.object(reviewsSkeleton);

module.exports = {
  reviewsSchema,
};
