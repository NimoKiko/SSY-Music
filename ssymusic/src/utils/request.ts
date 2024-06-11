import axios from "axios";

// 创建axios实例
const request = axios.create({
  baseURL: import.meta.env.VITE_SERVE,
  timeout: 5000,
});

// 请求拦截器
request.interceptors.request.use((config) => {
  // 1.配置请求头

  // 2.配置token

  return config;
});

// 响应拦截器
request.interceptors.response.use(
  (response) => {
    return response.data;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default request;
