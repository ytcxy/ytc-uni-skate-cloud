"use strict";
const common_vendor = require("../common/vendor.js");
const config = {
  //接口请求域名配置
  api: function() {
    let curVersion = common_vendor.index.getAccountInfoSync().miniProgram.envVersion;
    switch (curVersion) {
      case "develop":
        return "http://localhost:9999";
      case "trial":
        return "http://xxx.xxx.xxx.xxx:xxx";
      case "release":
        return "http://xxx.xxx.xxx.xxx:xxx";
      default:
        return "http://xxx.xxx.xxx.xxx:xxx";
    }
  }
};
exports.config = config;
