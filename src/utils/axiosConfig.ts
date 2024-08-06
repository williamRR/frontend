import axios, { AxiosInstance } from 'axios';

const API: AxiosInstance = axios.create({
  // baseURL: 'https://camwilcariva-ids36lbjca-uc.a.run.app/',
  baseURL: 'http://localhost:8080/',
  timeout: 10000,
  headers: {
    'Content-Type': 'application/json',
  },
});

API.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

API.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default API;
