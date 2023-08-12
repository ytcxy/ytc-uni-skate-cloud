<template>
	<uni-card class="ytc-card">
		<uni-section title="练习动作选择" type="line">
			<uni-data-select style="margin: 0 10rpx;" v-model="value" :localdata="range" @change="change"
				:clear="false"></uni-data-select>
			<uni-easyinput class="uni-mt-5" trim="all" v-model="trickNum" placeholder="请输入动作次数" @input="input"></uni-easyinput>
				
		</uni-section>

	</uni-card>


	<view>
		<button @click="addUserTrick()">保存</button>

	</view>

	<view class="content">
		<button @click="navigate2add()">跳转 addDemo Page</button>
		<button @click="navigate2addTrick()">新增动作名称</button>
		<button @click="getUserInfo()">获取mysql数据</button>
	</view>

</template>

<script>
	export default {
		data() {
			return {
				userId: "ytc123",
				trickName:"",
				trickNum: 0,
				value: 0,
				range: []
			};
		},
		// onReady() {
		// 	this.init();
		// 	console.log("ready  !");
		// },
		onShow() {
			console.log("show  !");
		},
		onLoad() {
			this.getUserTrick();
		
		},
		methods: {
			getUserTrick() {
				let userTrick = [];
				console.log('yyyyy');
				this.$http('/userTrick/info', 'GET', {userId:11111}).then(res => {
					console.log('request success ', res);
					userTrick = res.data;
					this.initRange(userTrick);
					console.log('userTrick : ', userTrick);
				}).catch(err => {
					uni.showToast({
						title: "" + err.msg,
						icon: 'none'
					})
				});
			},
			initRange(userTrick) {
				if (userTrick.length === 0) {
					userTrick = [{
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
					]
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
					})
				}
				this.trickName = this.range[0].text;
			},
			async addUserTrick() {
				try {
					console.log(typeof this.trickNum); 
					const res = await this.$http('/trickDetail/add', 'POST', {
						userId: this.userId,
						trickName: this.trickName,
						count: Number(this.trickNum)
					});
					uni.showToast({
						title: '新增成功'
					});
					this.trickNum = 0;
				} catch (e) {
					uni.showModal({
						content: e.message || '新增失败',
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
				uni.navigateTo({
					url: '/pages/skate/addDemo'
				});
			},
			navigate2addTrick() {
				uni.navigateTo({
					url: '/pages/skate/addTrick'
				});
			}
		}
	}
</script>

<style lang="scss">
	.uni-card {
		overflow: visible;
	}
	.ytc-card .uni-card{
		overflow: visible;
	}
	.text {
		font-size: 12px;
		color: #666;
		margin-top: 5px;
	}

	.uni-px-5 {
		padding-left: 10px;
		padding-right: 10px;
	}

	.uni-pb-5 {
		padding-bottom: 10px;
	}
	.uni-mt-5 {
		margin-top: 5px;
	}
</style>