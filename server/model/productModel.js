const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
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
  price: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  pieces: {
    type: String,
    required: true,
  },
  likes: [String],
  createdBy: {
    type: mongoose.SchemaTypes.ObjectId,
    ref: "User",
    required: true,
  },
});

const Product = mongoose.model("product", productSchema);

const createProduct = (
  title,
  image,
  price,
  description,
  category,
  pieces,
  createdBy,
  likes
) => {
  const newProduct = new Product({
    title,
    image,
    price,
    description,
    category,
    pieces,
    createdBy,
    likes,
  });
  return newProduct.save();
};

const findProductById = (id) => {
  return Product.findById(id);
};

const findProduct = (category) => {
  const filter = category ? { category } : {};

  return Product.find(filter);
};

const findProductByTitle = (title) => {
  return Product.find({ title });
};

const deleteProductById = (id) => {
  return Product.findByIdAndDelete(id);
};

// const updateProduct = (id, update) => {
//   return Product.findByIdAndUpdate(id, update);
// };

const updateProduct = (
  id,
  { title, url, alt, price, description, category, pieces }
) => {
  return Product.findByIdAndUpdate(
    id,
    {
      $set: {
        title: title,
        "image.url": url,
        "image.alt": alt,
        price: price,
        description: description,
        category: category,
        pieces: pieces,
      },
    },
    { new: true }
  );
};

module.exports = {
  createProduct,
  findProductById,
  findProduct,
  deleteProductById,
  updateProduct,
  findProductByTitle,
  Product,
};
