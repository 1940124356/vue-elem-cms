import axios from 'axios'

let baseURL = 'http://localhost:8080/api/v1'   //开发环境
// let baseURL = 'http://localhost:9999/api/v1'

const instance = axios.create({
    baseURL:baseURL,
    timeout: 7000,
    headers: {}
  });

  // 请求拦截器
  instance.interceptors.request.use(function (config) {
    console.log('请求拦截',config)
    return config;
  }, function (error) {
    // Do something with request error
    return Promise.reject(error);
  });
 
// 响应拦截器
instance.interceptors.response.use(function (response) {
    console.log('响应拦截',response)
    if(response.status===200){
      if(response.data&&response.data.err==0){
        return response.data.data;
      }
    }
    
  }, function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    return Promise.reject(error);
  });

  export default instance
