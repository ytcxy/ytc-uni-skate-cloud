"use strict";
const common_vendor = require("../../common/vendor.js");
const common_context = require("../../common/context.js");
const _sfc_main = {
  data() {
    return {
      trickName: "",
      userId: "ytc123"
    };
  },
  mounted() {
    this.userId = common_context.context.getUserId();
  },
  methods: {
    input(e) {
    },
    test() {
      const userId = common_context.context.getUserId();
      console.log("userId ", userId);
    },
    getUserTrick() {
      return new Promise((resolve, reject) => {
        this.$http("/userTrick/info", "GET", {
          userId: this.userId
        }).then((res) => {
          console.log("request success ", res);
          resolve(res.data);
        }).catch((err) => {
          console.log("userTrick error");
          reject(err);
        });
      });
    },
    async addDb() {
      try {
        const userTricks = await this.getUserTrick();
        for (const userTrick of userTricks) {
          if (this.trickName === userTrick.trick) {
            common_vendor.index.showModal({
              content: "动作名称重复",
              showCancel: false
            });
            return;
          }
        }
        const res = await this.$http("/userTrick/add", "POST", {
          userId: this.userId,
          trickName: this.trickName
        });
        console.log("res: ", res);
        common_vendor.index.showToast({
          title: "新增成功"
        });
      } catch (e) {
        common_vendor.index.showModal({
          content: e.message || "新增失败",
          showCancel: false
        });
        console.log(e);
      }
    }
  }
};
if (!Array) {
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  (_easycom_uni_easyinput2 + _easycom_uni_section2)();
}
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
if (!Math) {
  (_easycom_uni_easyinput + _easycom_uni_section)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.input),
    b: common_vendor.o(($event) => $data.trickName = $event),
    c: common_vendor.p({
      trim: "all",
      placeholder: "请输入动作名称",
      modelValue: $data.trickName
    }),
    d: common_vendor.p({
      title: "动作名称",
      type: "line"
    }),
    e: common_vendor.o(($event) => $options.addDb()),
    f: common_vendor.o(($event) => $options.test())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/ytccc/code/my/ytc-skate/ytc-uni-skate-cloud/pages/skate/addTrick.vue"]]);
wx.createPage(MiniProgramPage);
