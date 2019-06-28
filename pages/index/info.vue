<template>
	<view class="con">
		<div class="content">
			<div class="title">个人信息</div>
			<div class="header">
				<div class="icon"><img src="" alt="" /></div>
				<div class="name">茉莉花茶_xEs</div>
			</div>
			<div class="box">
				<div>学校</div>
				<div>成都天籁艺术学校</div>
			</div>
			<div class="box">
				<div>加入时间</div>
				<div>2019-01-15</div>
			</div>

			<div class="box">
				<div>班级</div>
				<div>智音一班</div>
			</div>
			<div class="box">
				<div>班级老师</div>
				<div>疏影老师</div>
			</div>
			<div class="box">
				<div>专业课老师</div>
				<div>安南老师</div>
			</div>
		</div>
	</view>
</template>

<script>
export default {};
</script>

<style lang="less">
@import url('../../less/public.less');
.content {
	width: 85%;
	min-height: 85vh;
	background: white;
	.boxShadow;
	margin: 0 auto;
	border-radius: 10upx;
	box-sizing: border-box;
	padding: 36upx 30upx;
	.title {
		font-size: 36upx;
		font-weight: 500;
	}
	.header {
		margin: 40upx 0 80upx 0;

		.icon {
			width: 120upx;
			height: 120upx;
			border: 6upx solid @theme;
			border-radius: 50%;
			float: left;
			margin-right: 30upx;
			.boxShadow;
			img {
				width: 100%;
				height: 100%;
			}
		}
		.name {
			font-size: 32upx;
			font-weight: 500;
			line-height: 120upx;
		}
	}
	.box {
		width: 100%;
		height: 88upx;
		background: @inputBg;
		border-radius: 10upx;
		margin-top: 30upx;
		font-size: 28upx;
		box-sizing: border-box;
		padding: 22upx;
		position: relative;
		& > div:nth-child(1) {
			color: #656568;
			position: absolute;
			width: 200upx;
		}
		& > div:nth-child(2) {
			position: absolute;
			left: 200upx;
		}
	}
}
</style>
