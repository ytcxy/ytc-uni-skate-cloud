<template>
	<view>
		<uni-card title="本月练习数量" :extra="`${data.practiceCount} 次`">
		</uni-card>
	</view>
	<view>
		<uni-card>
			<view>
				<text>本周练习数量</text>
			</view>
			<view>
				<text style="color: blue; font-size: 200%">{{data.practiceCount}} 次</text>
			</view>
			<view class="charts-box">
				<qiun-data-charts type="column" :chartData="chartData" :opts="opts" />
			</view>
		</uni-card>

	</view>
	<view>
		<button @click="testdb">testdb</button>
	</view>
	<view>
		<ul>
			<li v-for="(item, index) in dailyCountList" :key="index">
				<uni-card>
					<text>{{item}}</text>
				</uni-card>

			</li>
		</ul>

	</view>



</template>

<script>
import { onMounted, ref, reactive } from "vue";
import { dateUtils } from "@/common/util.js";



export default {
  data() {
    return {
      data: {
        practiceCount: 10
      },
      userId: "ytc123",
      chartData: {},
      dailyCountList: [],
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
          disabled: true,
          disableGrid: true,
          showTitle: true,
          data: [
            {
              min: 0,
              title: "本周练习量"
            }
          ]
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
  methods: {
    joinCount(data) {
      return data.practiceCount + " 次";
    },
    getServerData() {
      console.log("MMMMMMMMMMM");
      // 模拟从服务器获取数据时的延时
      setTimeout(() => {
        let res = {
          categories: ["周一", "周二", "周三", "周四", "周五", "周六", "周日"],
          series: [
            {
              name: "练习数量",
              data: [35, 36, 31, 33, 13, 34, 5]
            }
          ]
        };
        this.chartData = JSON.parse(JSON.stringify(res));
      }, 10);
    },
    testdb() {
		
		
		var date = new Date();
		date.setMonth(date.getMonth() - 10);

      this.$http("/trickDetail/info", "POST", { userId: 11111, beginTime : date.getTime().toString() })
        .then(res => {
          console.log("request success ", res);
		  this.dailyCountList = res.data.trickList;
        })
        .catch(err => {
          uni.showToast({
            title: "" + err.msg,
            icon: "none"
          });
        });
      return;
    }
  },
  mounted() {
    this.getServerData();
  }
};
</script>
<style scoped>
	.charts-box {
		width: 100%;
		height: 300px;
	}
</style>