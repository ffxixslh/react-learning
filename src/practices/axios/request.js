import axios from "axios";
import { BASE_URL, TIME_OUT } from "./config";

const instance = axios.create({
  baseURL: BASE_URL,
  timeout: TIME_OUT,
});

instance.interceptors.request.use(
  (config) => {
    console.log("拦截");
    console.log(config);
    return config;
  },
  (err) => {}
);

export default instance;
