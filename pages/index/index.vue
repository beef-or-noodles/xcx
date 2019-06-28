<template>
	<view>
		<div class="content">
			<img class="bg" src="../../static/img/indexBg.png" alt="" />
			<div class="box">
				<div class="logo"><img src="../../static/img/logo.png" alt="" /></div>
				<h4>智音助教随时随地学音乐</h4>
				<div class="allBtn">
					<div class="btn" @click="go('login')">我是学生</div>
					<div class="btn">我是家长</div>
				</div>
			</div>
		</div>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: 'Hello，我的混合小程序'
		};
	},
	onLoad() {},
	methods: {
		get() {
			this.getHttp('/am/v1/company/class/student/list').then(data => {
				console.log(data);
			});
		}
	}
};
</script>

<style lang="less" scoped>
.content {
	position: relative;
	& > img {
		width: 100vw;
		height: 100vh;
		display: block;
	}
	.box {
		position: absolute;
		z-index: 9;
		top: 0;
		width: 100%;
		.logo {
			width: 160upx;
			height: 160upx;
			margin: 240upx auto 50upx auto ;
			img {
				width: 100%;
				height: 100%;
			}
		}
		h4{
			color: white;
			font-size: 32upx;
			text-align: center;
		}
		.allBtn{
			margin-top: 140upx;
		}
		.btn{
			font-size: 32upx;
			border-radius: 8upx;
			background: #4F75E7;
			width: 360upx;
			margin: 30upx auto;
			text-align: center;
			line-height: 88upx;
			color: white;
		}
	}
}
</style>
