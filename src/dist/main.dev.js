"use strict";

var _vue = _interopRequireDefault(require("vue"));

var _App = _interopRequireDefault(require("./App.vue"));

var _index = _interopRequireDefault(require("@/router/index.js"));

var _elementUi = _interopRequireDefault(require("element-ui"));

require("element-ui/lib/theme-chalk/index.css");

var _api = _interopRequireDefault(require("./utils/api"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//整个项目的入口文件
//根组件
_vue["default"].config.productionTip = false; //路由

_vue["default"].prototype.$http = _api["default"];

_vue["default"].use(_elementUi["default"]);

new _vue["default"]({
  router: _index["default"],
  // store,
  render: function render(h) {
    return h(_App["default"]);
  }
}).$mount('#app');