import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'http://localhost:8080', // or your gateway base URL
});

export default axiosInstance;
