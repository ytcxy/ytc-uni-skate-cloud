"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  data() {
    return {
      chartData: {},
      //您可以通过修改 config-ucharts.js 文件中下标为 ['column'] 的节点来配置全局默认参数，如都是默认参数，此处可以不传 opts 。实际应用过程中 opts 只需传入与全局默认参数中不一致的【某一个属性】即可实现同类型的图表显示不同的样式，达到页面简洁的需求。
      opts: {
        color: ["#1890FF", "#91CB74", "#FAC858", "#EE6666", "#73C0DE", "#3CA272", "#FC8452", "#9A60B4", "#ea7ccc"],
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
          data: [
            {
              min: 0
            }
          ]
        },
        extra: {
          column: {
            type: "group",
            width: 30,
            activeBgColor: "#000000",
            activeBgOpacity: 0.08,
            seriesGap: 5,
            barBorderRadius: [
              6,
              6,
              6,
              6
            ]
          },
          markLine: {
            data: [
              {
                value: 21,
                showLabel: false
              }
            ]
          }
        }
      }
    };
  },
  onReady() {
    this.getServerData();
  },
  methods: {
    getServerData() {
      setTimeout(() => {
        let res = {
          categories: ["2018", "2019", "2020", "2021", "2022", "2023"],
          series: [
            {
              name: "目标值",
              data: [35, 36, 31, 33, 13, 34]
            }
          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 500);
    }
  }
};
if (!Array) {
  const _easycom_qiun_data_charts2 = common_vendor.resolveComponent("qiun-data-charts");
  _easycom_qiun_data_charts2();
}
const _easycom_qiun_data_charts = () => "../../uni_modules/qiun-data-charts/components/qiun-data-charts/qiun-data-charts.js";
if (!Math) {
  _easycom_qiun_data_charts();
}
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return {
    a: common_vendor.p({
      type: "column",
      opts: $data.opts,
      chartData: $data.chartData
    })
  };
}
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["render", _sfc_render], ["__scopeId", "data-v-2f1ef635"], ["__file", "/Users/ytccc/code/my/ytc-skate/ytc-uni-skate-cloud/pages/my/my.vue"]]);
wx.createPage(MiniProgramPage);
