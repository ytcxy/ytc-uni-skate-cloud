'use strict';
exports.main = async (event, context) => {
	//event为客户端上传的参数
	console.log('event : ', event)
	const db = uniCloud.database();
	db.collection('trick-mapping')
		.get()
		.then((res)=>{
			console.log(res)
	    // res 为数据库查询结果
		}).catch((err)=>{
			console.log(err.code); // 打印错误码
			console.log(err.message); // 打印错误内容
	  })
	//返回数据给客户端
	return event
};
