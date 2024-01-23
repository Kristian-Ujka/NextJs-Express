import axios, { AxiosRequestConfig } from "axios";

const axiosInstance = axios.create({
  baseURL: "http://localhost:8080", // Assicurati che la porta sia 8080
});

// Aggiungi interceptor, se necessario

export default axiosInstance;
