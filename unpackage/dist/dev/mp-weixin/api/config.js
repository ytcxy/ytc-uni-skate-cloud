"use strict";
const common_vendor = require("../common/vendor.js");
const config = {
  //接口请求域名配置
  api: function() {
    let curVersion = common_vendor.index.getAccountInfoSync().miniProgram.envVersion;
    console.log("curVersion ", curVersion);
    switch (curVersion) {
      case "develop":
        return "http://192.168.31.192:9999";
      case "trial":
        return "https://ytc.v2.idcfengye.com";
      case "release":
        return "https://ytc.v2.idcfengye.com";
      default:
        return "https://ytc.v2.idcfengye.com";
    }
  }
};
exports.config = config;
