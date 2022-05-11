import http from "./httpService";

const URL = process.env.REACT_APP_SERVER_URL;

export const getAllProduct = () => http.get(`${URL}/products/findProduct`);

export const getProductsByCategory = (category) =>
  http.get(`${URL}/products/findProduct`, {
    params: { category },
  });

export const createNewProduct = (product) =>
  http.post(`${URL}/products/newProduct`, product);

export const getThreeProduct = () =>
  http.get(`${URL}/products/findProduct/find-three`);

export const getMyProduct = async () =>
  await http.get(`${URL}/products/findProduct/myProducts`);

export const deleteProductById = (id) =>
  http.delete(`${URL}/products/deleteProduct/${id}`);

export const getProductById = (id, product) =>
  http.get(`${URL}/products/findProduct/product/${id}`, product);

export const updateProductById = (product) =>
  http.put(`${URL}/products/updateProduct/${product._id}`, product);

export const changeLikeStatus = async (product) =>
  http.patch(
    `${URL}/products/productFavorite/product-like/${product._id}`,
    product
  );
