<template>

	<uni-section title="动作名称" type="line">
		<uni-easyinput class="uni-mt-5" trim="all" v-model="trickName" placeholder="请输入动作名称"
			@input="input"></uni-easyinput>
	</uni-section>


	<view>
		<button @click="addDb()">保存</button>

	</view>

</template>

<script>
	export default {
		data() {
			return {
				trickName: "",
				userId: "ytc123",
			};
		},
		
		methods: {
			input(e) {
				// console.log('输入内容：', e);
			},
			async addDb() {
				try {
					
					
					
					const res = await this.$http('/userTrick/add', 'POST', {
						userId: this.userId,
						trickName: this.trickName
					});
					console.log("res: ", res);
					uni.showToast({
						title: '新增成功'
					});
				} catch (e) {
					uni.showModal({
						content: e.message || '新增失败',
						showCancel: false
					});
					console.log(e);
				}
			}
		}
	}
</script>

<style lang="scss">
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