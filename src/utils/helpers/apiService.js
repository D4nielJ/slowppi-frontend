import axios from 'axios';

const createApi = (token = false) => {
  const headers = {
    Accept: '*/*',
  };

  if (token) {
    headers.Authorization = `Bearer: ${token}`;
  }

  const apiService = axios.create({
    baseURL: 'http://slowppi-services.herokuapp.com/',
    headers,
  });

  return apiService;
};

export default createApi;
