"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      num: 0
    };
  },
  methods: {
    sum() {
      common_vendor.Ds.callFunction({
        name: "user",
        data: { a: 1, b: 2 }
      }).then((res) => {
        console.log(res.result);
        this.num = res.result;
      }).catch((err) => {
        console.error(err);
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o((...args) => $options.sum && $options.sum(...args)),
    b: common_vendor.t($data.num)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/ytccc/code/my/ytc-skate/ytc-uni-skate-cloud/pages/test/test2.vue"]]);
wx.createPage(MiniProgramPage);
