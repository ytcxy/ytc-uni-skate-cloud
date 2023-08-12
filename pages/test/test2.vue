<template>
	<view>
		<text>test22222</text>
		<button @click="sum">加一加</button>
	
	</view>
	<view>
		<text>num = {{num}}</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				num : 0
			}
		},
		methods: {
			sum() {
				// 客户端发起调用云函数hellocf，并传入data数据
				uniCloud.callFunction({
					name: 'user',
					data: {a:1,b:2}
				}).then((res) => {
					console.log(res.result) // 结果是 {sum: 3}
					this.num = res.result;
				}).catch((err) => {
					console.error(err)
				})

			}
		}
	}
</script>

<style>

</style>
