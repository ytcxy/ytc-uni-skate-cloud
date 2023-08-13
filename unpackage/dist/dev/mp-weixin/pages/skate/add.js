"use strict";
const common_vendor = require("../../common/vendor.js");
const common_context = require("../../common/context.js");
const _sfc_main = {
  data() {
    return {
      userId: "ytc123",
      trickName: "",
      trickNum: 0,
      value: 0,
      range: []
    };
  },
  // onReady() {
  // 	this.init();
  // 	console.log("ready  !");
  // },
  // onShow() {
  // 	console.log("show  !!!!!!!!!!!!!!!!");
  // },
  // onLoad() {
  // 	this.getUserTrick();
  // },
  mounted() {
    this.userId = common_context.context.getUserId();
    this.getUserTrick();
  },
  methods: {
    getUserTrick() {
      let userTrick = [];
      console.log("yyyyy");
      this.$http("/userTrick/info", "GET", { userId: this.userId }).then((res) => {
        console.log("request success ", res);
        userTrick = res.data;
        this.initRange(userTrick);
        console.log("userTrick : ", userTrick);
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "" + err.msg,
          icon: "none"
        });
      });
    },
    initRange(userTrick) {
      if (userTrick.length === 0) {
        userTrick = [
          {
            trick: "FS"
          },
          {
            trick: "BS"
          },
          {
            trick: "Ollie"
          },
          {
            trick: "Pop Shovie it"
          },
          {
            trick: "FS Pop Shovie it"
          }
        ];
      }
      const allTrickNames = [];
      for (const trick of userTrick) {
        if (trick.trick === "") {
          continue;
        }
        allTrickNames.push(trick.trick);
      }
      const uniqueNames = [...new Set(allTrickNames)];
      console.log("names = ", uniqueNames);
      this.range.length = 0;
      for (let i = 0; i < uniqueNames.length; i++) {
        this.range.push({
          value: i,
          text: uniqueNames[i]
        });
      }
      this.trickName = this.range[0].text;
    },
    async addUserTrick() {
      try {
        console.log(typeof this.trickNum);
        const res = await this.$http("/trickDetail/add", "POST", {
          userId: this.userId,
          trickName: this.trickName,
          count: Number(this.trickNum)
        });
        common_vendor.index.showToast({
          title: "新增成功"
        });
        this.trickNum = 0;
      } catch (e) {
        common_vendor.index.showModal({
          content: e.message || "新增失败",
          showCancel: false
        });
        console.log(e);
      }
    },
    async init() {
      this.getUserTrick();
    },
    change(e) {
      this.trickName = this.range[this.value].text;
      console.log("trickName ", this.trickName);
    },
    navigate2add() {
      common_vendor.index.navigateTo({
        url: "/pages/skate/addDemo"
      });
    },
    navigate2addTrick() {
      common_vendor.index.navigateTo({
        url: "/pages/skate/addTrick"
      });
    }
  }
};
if (!Array) {
  const _easycom_uni_data_select2 = common_vendor.resolveComponent("uni-data-select");
  const _easycom_uni_easyinput2 = common_vendor.resolveComponent("uni-easyinput");
  const _easycom_uni_section2 = common_vendor.resolveComponent("uni-section");
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  (_easycom_uni_data_select2 + _easycom_uni_easyinput2 + _easycom_uni_section2 + _easycom_uni_card2)();
}
const _easycom_uni_data_select = () => "../../uni_modules/uni-data-select/components/uni-data-select/uni-data-select.js";
const _easycom_uni_easyinput = () => "../../uni_modules/uni-easyinput/components/uni-easyinput/uni-easyinput.js";
const _easycom_uni_section = () => "../../uni_modules/uni-section/components/uni-section/uni-section.js";
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
if (!Math) {
  (_easycom_uni_data_select + _easycom_uni_easyinput + _easycom_uni_section + _easycom_uni_card)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.o($options.change),
    b: common_vendor.o(($event) => $data.value = $event),
    c: common_vendor.p({
      localdata: $data.range,
      clear: false,
      modelValue: $data.value
    }),
    d: common_vendor.o(_ctx.input),
    e: common_vendor.o(($event) => $data.trickNum = $event),
    f: common_vendor.p({
      trim: "all",
      placeholder: "请输入动作次数",
      modelValue: $data.trickNum
    }),
    g: common_vendor.p({
      title: "练习动作选择",
      type: "line"
    }),
    h: common_vendor.o(($event) => $options.addUserTrick()),
    i: common_vendor.o(($event) => $options.navigate2add()),
    j: common_vendor.o(($event) => $options.navigate2addTrick())
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__file", "/Users/ytccc/code/my/ytc-skate/ytc-uni-skate-cloud/pages/skate/add.vue"]]);
wx.createPage(MiniProgramPage);
