const joi = require("joi");

const productSkeleton = {
  title: joi.string().min(2).max(20).required(),
  image: joi
    .object({
      url: joi.string().min(11).max(1024).required(),
      alt: joi.string().min(2).max(256).required(),
    })
    .required(),
  price: joi.string().required(),
  description: joi.string().max(1000).required(),
  category: joi.string().required(),
  pieces: joi.string().required(),
};

const productSchema = joi.object(productSkeleton);

module.exports = {
  productSchema,
};
