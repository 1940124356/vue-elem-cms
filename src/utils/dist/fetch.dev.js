"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _axios = _interopRequireDefault(require("axios"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

var baseURL = 'http://localhost:8080'; //开发环境

var instance = _axios["default"].create({
  baseURL: baseURL,
  timeout: 1000,
  headers: {
    'X-Custom-Header': 'foobar'
  }
}); // 请求拦截器


instance.interceptors.request.use(function (config) {
  console.log('请求拦截', config);
  return config;
}, function (error) {
  // Do something with request error
  return Promise.reject(error);
}); // 响应拦截器

instance.interceptors.response.use(function (response) {
  console.log('响应拦截', response);
  return response;
}, function (error) {
  // Any status codes that falls outside the range of 2xx cause this function to trigger
  // Do something with response error
  return Promise.reject(error);
});
var _default = instance;
exports["default"] = _default;