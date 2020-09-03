"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getLogin = getLogin;
exports["default"] = void 0;

var _fetch = _interopRequireDefault(require("./fetch"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function getLogin(params) {
  return (0, _fetch["default"])({
    url: '',
    method: 'GET',
    params: params
  });
}

var _default = {
  getLogin: getLogin
};
exports["default"] = _default;