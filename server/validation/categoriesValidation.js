const joi = require("joi");

const CategorySkeleton = {
  title: joi.string().min(2).max(20).required(),
  image: {
    url: joi.string().min(11).max(1024),
    alt: joi.string().min(2).max(256),
  },
  name: joi.string().required(),
};

const updateCategorySkeleton = {
  title: joi.string(),
  image: {
    url: joi.string(),
    alt: joi.string(),
  },
  name: joi.string(),
};

const CategorySchema = joi.object(CategorySkeleton);
const updateCategorySchema = joi.object(updateCategorySkeleton);

module.exports = {
  CategorySchema,
  updateCategorySchema,
};
