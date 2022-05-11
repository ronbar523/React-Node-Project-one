import http from "./httpService";
import JWTDecode from "jwt-decode";
const URL = process.env.REACT_APP_SERVER_URL;
http.setHeaders("token", getJWT());

export function getJWT() {
  return localStorage.getItem("token");
}

export const crateNewUser = (user) => http.post(`${URL}/user/register`, user);

export const loginUser = async (user) => {
  const {
    data: { token },
  } = await http.post(`${URL}/user/login`, user);
  localStorage.setItem("token", token);
};

export const getCurrentUser = () => {
  try {
    const token = localStorage.getItem("token");
    return JWTDecode(token);
  } catch {
    return null;
  }
};

export const logout = () => {
  localStorage.removeItem("token");
  return (window.location = "/");
};
