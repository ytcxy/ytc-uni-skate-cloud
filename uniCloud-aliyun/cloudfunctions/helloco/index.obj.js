// 云对象教程: https://uniapp.dcloud.net.cn/uniCloud/cloud-obj
// jsdoc语法提示教程：https://ask.dcloud.net.cn/docs/#//ask.dcloud.net.cn/article/129
module.exports = {
	_before: function () { // 通用预处理器

	},
	sum(a, b) {
			// 此处省略a和b的有效性校验
			return a + b
		},
	async getUserTrickMapping(userId) {
		const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云对象的clientInfo
			clientInfo: this.getClientInfo()
		})
		
		const result = await dbJQL.collection('trick-mapping').where(`user_id=='${userId}'`).get() // 直接执行数据库操作
		return result.data

	},
	async addUserTrickMapping(trickMapping) {
		const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云对象的clientInfo
			clientInfo: this.getClientInfo()
		})
		
		const result = await dbJQL.collection('trick-mapping').add(trickMapping) // 直接执行数据库操作
		return result
	
	},
	async getUserTrickDetail(userId) {
		const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云对象的clientInfo
			clientInfo: this.getClientInfo()
		})
		
		const result = await dbJQL.collection('trick-detail').where(`user_id=='${userId}'`).get() // 直接执行数据库操作
		return result.data
	
	},
	async addUserTrickDetail(trickDetail) {
		const dbJQL = uniCloud.databaseForJQL({ // 获取JQL database引用，此处需要传入云对象的clientInfo
			clientInfo: this.getClientInfo()
		})
		
		const result = await dbJQL.collection('trick-detail').add(trickDetail) // 直接执行数据库操作
		return result
	
	}
	
	/**
	 * method1方法描述
	 * @param {string} param1 参数1描述
	 * @returns {object} 返回值描述
	 */
	/* 
	method1(param1) {
		// 参数校验，如无参数则不需要
		if (!param1) {
			return {
				errCode: 'PARAM_IS_NULL',
				errMsg: '参数不能为空'
			}
		}
		// 业务逻辑
		
		// 返回结果
		return {
			param1 //请根据实际需要返回值
		}
	}
	*/
}