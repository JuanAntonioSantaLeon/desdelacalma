import axios from "axios";

// URL base de tu API Django
const api = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
});

export default api;