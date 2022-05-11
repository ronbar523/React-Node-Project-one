const mongoose = require("mongoose");

const categoriesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    url: {
      type: String,
      required: true,
    },
    alt: {
      type: String,
      required: true,
    },
  },
  name: {
    type: String,
    required: true,
  },
});

const Categories = mongoose.model("categories", categoriesSchema);

const createCategory = (title, image, name) => {
  const newCategory = new Categories({ title, image, name });
  return newCategory.save();
};

const findCategoryById = (id) => {
  return Categories.findById(id);
};

const findCategory = () => {
  return Categories.find();
};

const deleteCategoryById = (id) => {
  return Categories.findByIdAndDelete(id);
};

const updateCategory = (id, { title, url, alt, name }) => {
  console.log(url);
  return Categories.findByIdAndUpdate(
    id,
    {
      $set: { title: title, "image.url": url, "image.alt": alt, name: name },
    },
    { new: true }
  );
};

module.exports = {
  createCategory,
  findCategoryById,
  findCategory,
  deleteCategoryById,
  updateCategory,
  Categories,
};
