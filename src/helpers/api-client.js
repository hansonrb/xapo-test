import axios from 'axios';

axios.defaults.baseURL = 'https://api.github.com/';

export const addInterceptor = token => {
  axios.interceptors.request.use(
    config => {
      config.headers = {
        authtoken: token,
        Accept: 'application/json',
      };
      return config;
    },
    error => Promise.reject(error),
  );
};

export default axios;
