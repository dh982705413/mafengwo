/*
 * @Author: your name
 * @Date: 2020-11-08 18:51:26
 * @LastEditTime: 2020-11-22 20:01:48
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \react-mafengwo\src\utils\http.js
 */
import axios from "axios";

const http = axios.create({
  baseURL: "http://39.97.250.38:5454/mock/11",
  timeout: 5000,
});

http.interceptors.request.use(
  (config) => config,
  (error) => Promise.reject(error)
);

http.interceptors.response.use(
  (res) => res.data,
  (error) => Promise.reject(error)
);

export default http;
