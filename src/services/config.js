// import axios from "axios";


// export const baseUrl = import.meta.env.VITE_BASE_URL;

// const token = localStorage.getItem("token");

// if (token) {
//   axios.defaults.headers.common["Authorization"] = `Bearer ${token}`
// };

// export const apiClient = axios.create({baseUrl: baseUrl,
    
// });


import axios from "axios";

// Importing base URL from environment
export const baseUrl = import.meta.env.VITE_BASE_URL;

// Set token in the headers if available
const token = localStorage.getItem("token");
if (token) {
  axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
}

// API client instance
export const apiClient = axios.create({
  baseURL: baseUrl, // ensure baseURL is correctly defined here
});
