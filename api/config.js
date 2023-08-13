export default {
	//接口请求域名配置
	api: function() {
		let curVersion = uni.getAccountInfoSync().miniProgram.envVersion;
		console.log('curVersion ', curVersion);
		switch (curVersion) {
			case "develop": //开发版
				return "http://192.168.31.192:9999";
			case 'trial': //体验版
				return "https://ytc.v2.idcfengye.com"
			case 'release': //正式版
				return "https://ytc.v2.idcfengye.com"
			default: //其他,默认调用正式版
				return "https://ytc.v2.idcfengye.com"
		}
	}
}
