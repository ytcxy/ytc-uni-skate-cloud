import http from './request.js';

export default {
	api: function() {
		console.log('test test test tewt test ');
	},
	loginAuth: function(data) {
		return http(
			'/wx/user',
			'GET',
			data
		)
	},
	getUserTrick: function(data) {
		return http('/userTrick/info', 'GET', data)
	}
}