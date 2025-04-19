import axios from "axios";

// Change this to your actual backend URL if needed
const BASE_URL = "http://localhost:8080/product";

// API methods
export const getAllProducts = () => axios.get(`${BASE_URL}/all`);
export const addProduct = (product) => axios.post(`${BASE_URL}/add`, product);
export const updateProduct = (id, product) => axios.put(`${BASE_URL}/update/${id}`, product);
export const deleteProduct = (id) => axios.delete(`${BASE_URL}/delete/${id}`);
export const getProductById = (id) => axios.get(`${BASE_URL}/get/${id}`);
