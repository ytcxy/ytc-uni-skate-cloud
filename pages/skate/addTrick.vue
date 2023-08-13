<template>

	<uni-section title="动作名称" type="line">
		<uni-easyinput class="uni-mt-5" trim="all" v-model="trickName" placeholder="请输入动作名称"
			@input="input"></uni-easyinput>
	</uni-section>


	<view>
		<button @click="addDb()">保存</button>
		<button @click="test()"> testApi</button>

	</view>

</template>

<script>
	import context from '@/common/context.js';
	
	export default {
		data() {
			return {
				trickName: "",
				userId: "ytc123",
			};
		},
		mounted() {
			this.userId = context.getUserId();
		},
		methods: {
			input(e) {
				// console.log('输入内容：', e);
			},
			test() {
				const userId = context.getUserId();
				console.log("userId ", userId);
			},
			getUserTrick() {
				return new Promise((resolve, reject) => {
					this.$http('/userTrick/info', 'GET', {
							userId: this.userId
						})
						.then(res => {
							console.log('request success ', res);
							resolve(res.data);
						})
						.catch(err => {
							console.log('userTrick error');
							reject(err);
						});
				});
			},

			async addDb() {
				try {
					const userTricks = await this.getUserTrick();

					for (const userTrick of userTricks) { // 使用of替代in来迭代数组
						if (this.trickName === userTrick.trick) {
							uni.showModal({
								content: '动作名称重复',
								showCancel: false
							});
							return;
						}
					}

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