import axios from 'axios'
import { message } from 'antd'

var request = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/5d649b214ead1e07bacd7233/api',
  headers: {'X-Requested-With': 'XMLHttpRequest'},
  timeout: 5000,
});

// 添加请求拦截器
request.interceptors.request.use(function (config) {
  // 在发送请求之前做些什么
  return config;
}, function (error) {
  // 对请求错误做些什么
  return Promise.reject(error);
});

// 添加响应拦截器
request.interceptors.response.use(function (response) {
  // 对响应数据做点什么
  if (response) {
    const { data: { retCode, msg } } = response.data
    
    if (retCode === 0) {
      message.success(msg)
    } else if (retCode === -1) {
      message.error(msg)
    }

    return response.data.data;
  }
}, function (error) {
  // 对响应错误做点什么
  return Promise.reject(error);
});

export default request