<template>
	<view class="content">
		<view class="header">
			<view class="flex">123</view>
			<view class="flex">
				<view class="h_icon">

				</view>
			</view>
			<view class="flex">456</view>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {

		};
	},
	onLoad() {},
	methods: {

	}
};
</script>

<style lang="less" scoped>
view{
	font-size: 28rpx;
}
.content{
	background: #4568DC;
	background: -webkit-linear-gradient(to right, #B06AB3, #4568DC);
	background: linear-gradient(to right, #B06AB3, #4568DC);
	padding: 20rpx;
	padding-top: 80rpx;
	box-sizing: content-box;
	height: 150vh;
}
	.header{
		display: flex;
		.flex{
			flex: 1;
		}
		.h_icon{
			width: 120rpx;
			height: 120rpx;
			background-color: white;
			border-radius: 50%;
		}
	}

</style>
