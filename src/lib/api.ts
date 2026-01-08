// src/lib/api.ts
import axios from "axios";

/**
 * Base Axios instance for GuideHub API
 * - Uses HTTP-only cookies (JWT in cookie) for authentication
 */
const API = axios.create({
  baseURL:
    process.env.NEXT_PUBLIC_API_URL || "https://guidehub-server.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

/**
 * Optional: normalize API errors
 * Keeps frontend error handling clean
 */
API.interceptors.response.use(
  (response) => response,
  (error) => {
    // If backend sent a structured error, forward it
    if (error?.response?.data) {
      return Promise.reject(error.response.data);
    }

    // Network / CORS / unexpected error
    return Promise.reject({
      message: "Network error. Please try again.",
    });
  }
);

export default API;
