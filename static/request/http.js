import urlConfig from './config.js'
const http_status = {
	'400': '请求错误',
	'401': '未授权，请登录',
	'403': '拒绝访问',
	'404': '请求地址出错',
	'400': '请求超时',
	'408': '请求超时',
	'500': '服务器内部错误',
	'501': '服务未实现',
	'502': '网关错误',
	'503': '服务不可用',
	'504': '网关超时',
	'505': 'HTTP版本不受支持'
};


export function getHttp(url, data = {}) {
	return new Promise((resolve, reject) => {
		uni.getNetworkType()
		uni.request({
			url: urlConfig + url, //仅为示例，并非真实接口地址。
			data: data,
			method: "GET",
			success: (res) => {
				if (res.data.success) {
					resolve(res.data.resultMap);
				} else {
					uni.showToast({
						icon:"none",
						title: res.data.description,
						duration: 2000
					});
				}

			},
			fail: (err) => {
				reject(err);
			}
		});
	});
};
export function postHttp(url, data = {}) {
		return new Promise((resolve, reject) => {
		uni.getNetworkType()
		uni.request({
			url: urlConfig + url, //仅为示例，并非真实接口地址。
			data: data,
			method: "POST",
			success: (res) => {
				if (res.data.success) {
					resolve(res.data.resultMap);
				} else {
					uni.showToast({
						icon:"none",
						title: res.data.description,
						duration: 2000
					});
				}
	
			},
			fail: (err) => {
				reject(err);
			}
		});
	});
};
