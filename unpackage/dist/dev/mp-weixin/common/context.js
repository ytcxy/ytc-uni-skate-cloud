"use strict";
const common_vendor = require("./vendor.js");
const context = {
  getUserId: function() {
    var userId = "";
    try {
      userId = common_vendor.index.getStorageSync("userId");
    } catch (e) {
      console.log("get userId error", e);
    }
    return userId;
  }
};
exports.context = context;
