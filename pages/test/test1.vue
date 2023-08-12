<template>
	<view>
		<text>
			test11111
		</text>
		<button  @tap="goLogin">微信uni.getUserProfile 登录</button>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			goLogin() {
			    // 获取code 小程序专有，用户登录凭证。
			        uni.login({
			            provider: 'weixin',
			            success(login) {
			                console.log(login);
			            }
			        })
			        // desc: '用于完善会员资料'  必填 声明获取用户个人信息后的用途，后续会展示在弹窗中
			        uni.getUserProfile({
			            desc: '用于完善会员资料',  
			            lang: 'zh_CN',
			            success(user) {
			                console.log(user);
			            }
			        })
			}
		}
	}
</script>

<style>

</style>
