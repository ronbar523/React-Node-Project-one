import http from './httpService';

const URL = process.env.REACT_APP_SERVER_URL

export const getAllReviews = () => http.get(`${URL}/reviews/find`);

export const getReviewById = (id) => http.get(`${URL}/reviews/find/${id}`);

export const createNewReview = (review) =>
  http.post(`${URL}/reviews/newReview`, review);

export const deleteReviewById = (id) =>
  http.delete(`${URL}/reviews/delete/${id}`);

export const updateReviewById = (id, review) => http.put(`${URL}/reviews/update/${id}`, review)
