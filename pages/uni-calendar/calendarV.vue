<template>
	<view class="content">
		<div class="dateTop">
			<div class="left">{{ changeData.month }}月学习情况</div>
			<div class="right">
				<div @tap="leftBtn"></div>
				<div>{{ changeData.month }}月</div>
				<div @tap="rightBtn"></div>
			</div>
		</div>
		<calendar :slide="slide" fixedHeihgt :date="date" :lunar="fasle" :disable-before="false" :start-date="'2016-3-2'" :end-date="date" @change="change" @to-click="toClick" ref="date"></calendar>
	</view>
</template>

<script>
import calendar from './uni-calendar.vue';
export default {
	components: {
		calendar
	},
	data() {
		return {
			date: '',
			changeData: {},
			slide:true,//是否滑动
		};
	},
	mounted() {
		this.getNowDate();
	},
	methods: {
		//取得今天的日期
		getNowDate() {
			let date = new Date();
			let time = "";
			let year = date.getFullYear();
			var month = date.getMonth() + 1;
			var strDate = date.getDate();
			time = `${year}-${month<10?'0'+month:month}-${strDate}`
			console.log(time);
			this.date = time;
		},

		change(e) {
			this.changeData = e;
			this.$emit("change",e)
		},
		toClick(e) {
			this.changeData = e;
			this.$emit("change",e)
		},

		leftBtn() {
			this.$refs.date.dataBefor('0', 'month');
		},
		rightBtn() {
			this.$refs.date.dataBefor('1', 'month');
		}
	}
};
</script>

<style lang="less">
@import url('../../less/public.less');
.content{
	margin: 40upx 0;
}
.dateTop {
	position: relative;
	margin: 40upx 0;
	height: 60upx;
	.left {
		position: absolute;
		color: @titleColor;
		font-size: 32upx;
		font-weight: bold;
	}
	.right {
		position: absolute;
		width: 230upx;
		height: 40upx;
		right: 0;
		& > div {
			float: left;
			margin-right: 10upx;
			text-align: center;
			color: white;
		}
		& > div:nth-child(1),
		& > div:nth-child(3) {
			width: 56upx;
			height: 56upx;
			background: @theme;
			border-radius: 8upx;
			background: url("./rightArrows.png") no-repeat @theme;
			background-position-x: 6upx;
			background-position-y: 6upx;
		}
		& > div:nth-child(2) {
			font-size: 28upx;
			background: @theme;
			border-radius: 8upx;
			padding: 10upx 15upx;
		}
		& > div:nth-child(1) {
			transform: rotateY(180deg); /* 水平镜像翻转 */
		}
	}
}
</style>
