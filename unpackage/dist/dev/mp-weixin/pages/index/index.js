"use strict";
const common_vendor = require("../../common/vendor.js");
const common_test = require("../../common/test.js");
const api_user = require("../../api/user.js");
const common_context = require("../../common/context.js");
require("../../api/request.js");
require("../../api/config.js");
const _sfc_main = {
  data() {
    return {
      data: {
        practiceCount: 10
      },
      userId: "",
      chartData: {},
      dailyCountList: [],
      opts: {
        color: [
          "#1890FF",
          "#91CB74",
          "#FAC858",
          "#EE6666",
          "#73C0DE",
          "#3CA272",
          "#FC8452",
          "#9A60B4",
          "#ea7ccc"
        ],
        padding: [15, 15, 0, 5],
        enableScroll: false,
        enableMarkLine: false,
        legend: {},
        xAxis: {
          disableGrid: true,
          calibration: true,
          axisLine: false
        },
        yAxis: {
          disabled: true,
          disableGrid: true,
          showTitle: true,
          data: [{
            min: 0,
            title: "本周练习量"
          }]
        },
        extra: {
          column: {
            type: "group",
            width: 10,
            activeBgColor: "#000000",
            activeBgOpacity: 0.08,
            seriesGap: 5,
            barBorderRadius: [6, 6, 6, 6]
          },
          markLine: {
            data: [{
              value: 21,
              showLabel: false
            }]
          }
        }
      }
    };
  },
  methods: {
    joinCount(data) {
      return data.practiceCount + " 次";
    },
    getServerData() {
      console.log("MMMMMMMMMMM");
      setTimeout(() => {
        let res = {
          categories: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          series: [{
            name: "练习数量",
            data: [35, 36, 31, 33, 13, 34, 5]
          }]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 10);
      this.testdb();
    },
    testdb() {
      common_test.test.api();
      var date = /* @__PURE__ */ new Date();
      date.setMonth(date.getMonth() - 10);
      this.$http("/trickDetail/info", "POST", {
        userId: this.userId,
        beginTime: date.getTime().toString()
      }).then((res) => {
        console.log("request success ", res);
        this.dailyCountList = res.data.trickList;
      }).catch((err) => {
        common_vendor.index.showToast({
          title: "" + err.msg,
          icon: "none"
        });
      });
      return;
    },
    async getUserId() {
      const that = this;
      try {
        const value = await common_vendor.index.getStorageSync("userId");
        that.userId = value;
        console.log("value ", value);
      } catch (e) {
        console.log("get userId error", e);
      }
      console.log("this.userId", this.userId);
    },
    wxLogin() {
      api_user.user.api();
      const that = this;
      common_vendor.index.login({
        provider: "weixin",
        onlyAuthorize: true,
        // 微信登录仅请求授权认证
        success: function(event) {
          const {
            code
          } = event;
          console.log("wx event ", event);
          that.$http("/wx/login", "GET", {
            code
          }).then((res) => {
            console.log("res ", res);
            common_vendor.index.setStorageSync("token", res.data.token);
            common_vendor.index.setStorageSync("userId", res.data.userId);
          }).catch((err) => {
            console.log("error ", err);
          });
        },
        fail: function(err) {
          console.log("uni.login error ", err);
        }
      });
      this.userId = this.getUserId();
      console.log("loginUUUUUUUUU", this.userId);
    }
  },
  mounted() {
    this.getServerData();
    const userId = common_context.context.getUserId();
    const that = this;
    if (userId === "") {
      common_vendor.index.showModal({
        title: "微信登录",
        success: function(res) {
          if (res.confirm) {
            that.wxLogin();
            console.log("用户点击确定");
          } else if (res.cancel) {
            console.log("用户点击取消");
          }
        }
      });
    }
    console.log("userIddddd", userId);
    this.userId = userId;
  }
};
if (!Array) {
  const _easycom_uni_card2 = common_vendor.resolveComponent("uni-card");
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  (_easycom_uni_card2 + _easycom_qiun_data_charts2)();
}
const _easycom_uni_card = () => "../../uni_modules/uni-card/components/uni-card/uni-card.js";
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
if (!Math) {
  (_easycom_uni_card + _easycom_qiun_data_charts)();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      title: "本月练习数量",
      extra: `${$data.data.practiceCount} 次`
    }),
    b: common_vendor.t($data.data.practiceCount),
    c: common_vendor.p({
      type: "column",
      chartData: $data.chartData,
      opts: $data.opts
    }),
    d: common_vendor.o((...args) => $options.testdb && $options.testdb(...args)),
    e: common_vendor.o((...args) => $options.wxLogin && $options.wxLogin(...args)),
    f: common_vendor.o((...args) => $options.getUserId && $options.getUserId(...args)),
    g: common_vendor.f($data.dailyCountList, (item, index, i0) => {
      return {
        a: common_vendor.t(item),
        b: "1cf27b2a-3-" + i0,
        c: index
      };
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/ytccc/code/my/ytc-skate/ytc-uni-skate-cloud/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
