export default {
	getUserId: function() {
		var userId = '';
		try {
			userId = uni.getStorageSync('userId');
		} catch (e) {
			console.log('get userId error', e);
		}
		return userId;
	}
}