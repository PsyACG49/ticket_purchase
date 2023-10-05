import axios from "axios";
const BASE_URL = "http://localhost:3000/api/saloloyo/v1/";

export const axiosPublic = axios.create({
  baseURL: BASE_URL,
});
