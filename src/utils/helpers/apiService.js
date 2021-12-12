import axios from 'axios';

const createApi = (token = false) => {
  const headers = {
    Accept: '*/*',
  };

  if (token) {
    headers.Authorization = `Bearer: ${token}`;
  }

  const apiService = axios.create({
    baseURL: 'http://localhost:3001/',
    headers,
  });

  return apiService;
};

export default createApi;
