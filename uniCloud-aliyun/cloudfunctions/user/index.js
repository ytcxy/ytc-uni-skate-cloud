'use strict';
const mp_wx_data = {
    AppID: 'wx302c008de186e2dc',
    AppSecret: '27bd1f03cac014e63828bf5c9678f64c'
}
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	return {sum : event.a + event.b}

	//返回数据给客户端
};
