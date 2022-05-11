import http from "./httpService";

const URL = process.env.REACT_APP_SERVER_URL;

export const getAllCategories = () =>
  http.get(`${URL}/categories/findCategory`);

export const getCategoryById = (id) =>
  http.get(`${URL}/categories/findCategory/${id}`);

export const createNewCategory = (category) =>
  http.post(`${URL}/categories/newCategory`, category);

export const deleteCategoryById = (id) =>
  http.delete(`${URL}/categories/deleteCategory/${id}`);

export const updateCategoryById = (category) =>
  http.put(`${URL}/categories/updateCategory/${category._id}`, category);
