"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {};
  },
  methods: {
    goLogin() {
      common_vendor.index.login({
        provider: "weixin",
        success(login) {
          console.log(login);
        }
      });
      common_vendor.index.getUserProfile({
        desc: "用于完善会员资料",
        lang: "zh_CN",
        success(user) {
          console.log(user);
        }
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.goLogin && $options.goLogin(...args))
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/ytccc/code/my/ytc-skate/ytc-uni-skate-cloud/pages/test/test1.vue"]]);
wx.createPage(MiniProgramPage);
