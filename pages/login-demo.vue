<template>
	<view>
		<uni-forms ref="form" :modelValue="formData" :rules="rules">
			<uni-forms-item label="姓名" name="name">
				<uni-easyinput type="text" v-model="formData.name" placeholder="请输入姓名" />
			</uni-forms-item>
			<uni-forms-item label="邮箱" name="email">
				<input class="input" v-model="formData.email" type="text" placeholder="请输入邮箱"
					@input="binddata('email',$event.detail.value)" />
			</uni-forms-item>
		</uni-forms>
		<!-- <navigator url="/pages/sys/register" hover-class="navigator-hover"> -->
		<button @click="submit">Submit</button>
		<!-- </navigator> -->
	</view>
</template>

<script>
	export default {
		data() {
			return {
				// 表单数据
				formData: {
					name: 'LiMing',
					email: 'dcloud@email.com'
				}
			}
		},
		methods: {
			/**
			 * 复写 binddata 方法，如果只是为了校验，无复杂自定义操作，可忽略此方法
			 * @param {String} name 字段名称
			 * @param {String} value 表单域的值
			 */
			// binddata(name,value){
			// 通过 input 事件设置表单指定 name 的值
			//   this.$refs.form.setValue(name, value)
			// },
			// 触发提交表单
			submit() {
				uni.navigateTo({
					url: '/pages/sys/userAdd',
				})
				this.$refs.form.validate().then(res => {
					console.log('表单数据信息：', res);
				}).catch(err => {
					console.log('表单错误信息：', err);
				})
			}
		}
	}
</script>

<style>
</style>