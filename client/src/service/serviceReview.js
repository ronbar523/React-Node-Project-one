import axios from 'axios';

const URL = 'http://localhost:8000';

export const getAllReviews = () => axios.get(`${URL}/reviews/find`);

export const getReviewById = (id) => axios.get(`${URL}/reviews/find/${id}`);

export const createNewReview = (review) =>
  axios.post(`${URL}/reviews/newReview`, review);

export const deleteReviewById = (id) =>
  axios.delete(`${URL}/reviews/delete/${id}`);

export const crateNewUser = (user) => axios.post(`${URL}/user/register`, user);
