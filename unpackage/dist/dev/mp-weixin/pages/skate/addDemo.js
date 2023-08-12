"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      text: "qqqq",
      num: 1,
      name: "FS",
      userId: "11111"
    };
  },
  methods: {
    async testco() {
      const helloco = common_vendor.Ds.importObject("helloco");
      try {
        const res = await helloco.sum(1, 2);
        console.log(res);
        this.num = res;
      } catch (e) {
        console.log(e);
      }
    },
    async addDb() {
      const helloco = common_vendor.Ds.importObject("helloco");
      try {
        const res = await helloco.addUserTrickMapping({
          "user_id": this.userId,
          "trick_name": this.name
        });
        console.log(res);
        this.text = res;
      } catch (e) {
        console.log(e);
      }
    },
    async testdb() {
      const helloco = common_vendor.Ds.importObject("helloco");
      try {
        const res = await helloco.getUserTrickMapping("11111");
        console.log(res);
        this.text = res;
      } catch (e) {
        console.log(e);
      }
    },
    navigate1() {
      common_vendor.index.navigateTo({
        url: "/pages/test/test1"
      });
    },
    navigate2() {
      common_vendor.index.navigateTo({
        url: "/pages/test/test2"
      });
    }
  }
};
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o(($event) => $options.testco()),
    b: common_vendor.o(($event) => $options.testdb()),
    c: common_vendor.o(($event) => $options.addDb()),
    d: common_vendor.o(($event) => $options.navigate1()),
    e: common_vendor.o(($event) => $options.navigate2()),
    f: common_vendor.t($data.num),
    g: common_vendor.t($data.text)
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/ytccc/code/my/ytc-skate/ytc-uni-skate-cloud/pages/skate/addDemo.vue"]]);
wx.createPage(MiniProgramPage);
