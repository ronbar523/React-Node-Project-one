import axios from "axios";
import { toast } from "react-toastify";
// import { getJWT } from "./userService";

axios.interceptors.response.use(null, (error) => {
  const expectedError = error.response && error.response.status >= 400;
  if (expectedError) toast.error(`An error occurred: ${error.message}`);
  return Promise.reject(error);
});

export function setHeaders(header, value) {
  axios.defaults.headers.common[header] = value;
}

const http = {
  get: axios.get,
  post: axios.post,
  put: axios.put,
  patch: axios.patch,
  delete: axios.delete,
  setHeaders,
};

export default http;
