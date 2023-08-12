"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const api_request = require("./api/request.js");
require("./api/config.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/my/my.js";
  "./pages/skate/add.js";
  "./pages/skate/addTrick.js";
  "./pages/test/test1.js";
  "./pages/test/test2.js";
  "./pages/skate/addDemo.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/ytccc/code/my/ytc-skate/ytc-uni-skate-cloud/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.config.globalProperties.$http = api_request.request;
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
