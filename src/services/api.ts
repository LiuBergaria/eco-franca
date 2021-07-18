import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:3000',
  validateStatus: () => true,
  timeout: 30000,
});

export default api;
