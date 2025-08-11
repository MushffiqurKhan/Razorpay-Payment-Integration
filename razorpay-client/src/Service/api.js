import axios from "axios";

const API = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL,
});

export const createOrder = async (amount) => {
  return API.post("/api/payment/create-order", { amount });
};

export const verifyPayment = async (data) => {
  return API.post("/api/payment/verify", data);
};
