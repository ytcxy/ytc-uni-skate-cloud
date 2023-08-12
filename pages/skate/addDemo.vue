<template>
	<view class="content">
		<button @click="testco()">请求云对象的方法</button>
		<button @click="testdb()">请求数据库的方法</button>
		<button @click="addDb()">插入数据库的方法</button>
		<button @click="navigate1()">跳转 test1 Page</button>
		<button @click="navigate2()">跳转 test2 Page</button>
	</view>
	<view>
		<text>{{num}}</text>
	</view>
	<view>
		<text>{{text}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				text: "qqqq",
				num: 1,
				name : "FS",
				userId : "11111"
			}
		},
		methods: {
			async testco() { // 注意异步
				const helloco = uniCloud.importObject('helloco') // 导入云对象
				try {
					const res = await helloco.sum(1, 2) //导入云对象后就可以直接调用该对象的sum方法了，注意使用异步await
					console.log(res); // 结果是3
					this.num = res;
				} catch (e) {
					console.log(e);
				}
			},
			async addDb() {
				const helloco = uniCloud.importObject('helloco') // 导入云对象
				try {
					const res = await helloco.addUserTrickMapping({
						"user_id": this.userId,
						"trick_name": this.name
					}) //导入云对象后就可以直接调用该对象的sum方法了，注意使用异步await
					console.log(res);
					this.text = res;
				} catch (e) {
					console.log(e);
				}
			},
			async testdb() { // 注意异步
				const helloco = uniCloud.importObject('helloco') // 导入云对象
				try {
					const res = await helloco.getUserTrickMapping("11111") //导入云对象后就可以直接调用该对象的sum方法了，注意使用异步await
					console.log(res);
					this.text = res;
				} catch (e) {
					console.log(e);
				}
			},
			navigate1() {
				uni.navigateTo({
					url: '/pages/test/test1',

				});
			},
			navigate2() {
				uni.navigateTo({
					url: '/pages/test/test2',

				});
			}
		}
	}
</script>

<style>
</style>