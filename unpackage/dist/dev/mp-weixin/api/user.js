"use strict";
const api_request = require("./request.js");
const user = {
  api: function() {
    console.log("test test test tewt test ");
  },
  loginAuth: function(data) {
    return api_request.request(
      "/wx/user",
      "GET",
      data
    );
  },
  getUserTrick: function(data) {
    return api_request.request("/userTrick/info", "GET", data);
  }
};
exports.user = user;
