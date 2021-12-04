import axios from 'axios';

const createApi = (token = false) => {
  const headers = {
    Accept: '*/*',
  };

  if (token) {
    headers.Authorization = `Bearer: ${token}`;
  }

  const apiService = axios.create({
    baseURL: 'https://back-end-fc.herokuapp.com/',
    headers,
  });

  return apiService;
};

export default createApi;
