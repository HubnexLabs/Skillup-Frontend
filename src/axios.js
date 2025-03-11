import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://skillup-backend-new.vercel.app/skillup/api",
  withCredentials: true,
});
