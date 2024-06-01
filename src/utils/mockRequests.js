import axios from "axios";
const requests = axios.create({
  baseURL: "/mock",
  timeout: 5000,
});

requests.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
requests.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return Promise.resolve(response.data);
    } else {
      Promise.reject(new Error(response.status));
    }
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default requests;
