<template>
	<view class="con">
		<div class="topBar" @click="go('info')">
			<div class="icon"><img src="" alt="" /></div>
			<div class="name">
				<div class="bg"></div>
				<span>成都天籁艺术学校</span>
			</div>
			<div class="rightIcon"><img src="../../static/img/right.png" alt="" /></div>
		</div>
		<div class="content">
			<div class="calendar"><calendarV @change="change"></calendarV></div>
			<div class="time">
				<h3>11月1日学习总时长</h3>
				<p>
					<span>857</span>
					<span>分钟</span>
				</p>
			</div>
			<div class="listBox">
				<div class="list">
					<div class="left">
						<div><img src="../../static/img/icon1.png" alt="" /></div>
						<div>课后作业</div>
					</div>
					<div class="right">
						<span>100</span>
						<span>道题</span>
					</div>
				</div>
				<div class="list">
					<div class="left">
						<div><img src="../../static/img/icon2.png" alt="" /></div>
						<div>知识点练习</div>
					</div>
					<div class="right">
						<span>100</span>
						<span>道题</span>
					</div>
				</div>
				<div class="list">
					<div class="left">
						<div><img src="../../static/img/icon3.png" alt="" /></div>
						<div>钢琴练习</div>
					</div>
					<div class="right">
						<span>100</span>
						<span>分钟</span>
					</div>
				</div>
				<div class="list">
					<div class="left">
						<div><img src="../../static/img/icon4.png" alt="" /></div>
						<div>考试题库</div>
					</div>
					<div class="right">
						<span>100</span>
						<span>道题</span>
					</div>
				</div>
			</div>
		</div>
	</view>
</template>
<script>
import calendarV from '../uni-calendar/calendarV.vue';
export default {
	components: {
		calendarV
	},
	data() {
		return {
			date: '2019-03-10'
		};
	},
	methods: {
		change(val){
			console.log(val);
		}
	}
};
</script>

<style lang="less">
@import url('../../less/public.less');
.content {
	width: 670upx;
	margin: 0 auto;
	padding-bottom: 40upx;
}
.topBar {
	position: relative;
	width: 100%;
	height: 88upx;
	width: 670upx;
	margin: 0 auto;
	.boxShadow;
	border-radius: 200upx;
	background: white;
	.icon {
		position: absolute;
		width: 72upx;
		height: 72upx;
		border-radius: 50%;
		background: brown;
		top: 10upx;
		left: 10upx;
	}
	.name {
		position: absolute;
		top: 20upx;
		font-size: 28upx;
		font-weight: 500;
		left: 120upx;
		.bg {
			width: 52upx;
			height: 52upx;
			background: url('../../static/img/schoolIcon.png');
			background-size: 100% 100%;
			float: left;
		}
		span {
			display: block;
			padding-top: 10upx;
			width: 400upx;
			padding-left: 10upx;
			overflow: hidden;
			text-overflow: ellipsis;
			white-space: nowrap;
		}
	}
	.rightIcon {
		position: absolute;
		top: 20upx;
		right: 30upx;
		width: 32upx;
		height: 32upx;
		img {
			width: 100%;
			height: 100%;
		}
	}
}
.time {
	box-sizing: border-box;
	width: 100%;
	height: 200upx;
	background: url('../../static/img/timeBg.png');
	background-size: 100% 100%;
	.boxShadow;
	border-radius: 8upx;
	padding: 40upx;
	h3 {
		color: @theme;
		font-size: 26upx;
		font-weight: 600upx;
	}
	p {
		color: @theme;
		& > span:nth-child(1) {
			font-size: 80upx;
			font-weight: bold;
		}
		& > span:nth-child(2) {
			font-size: 26upx;
		}
	}
}
.calendar {
}
.listBox {
	.list {
		position: relative;
		height: 88upx;
		.boxShadow;
		background: white;
		border-radius: 12upx;
		margin-top: 40upx;
		& > div {
			top: 12upx;
		}
		.left {
			position: absolute;
			top: 22upx;
			left: 30upx;
			font-size: 32upx;
			color: @titleColor;
			width: 300upx;
			& > div:nth-child(1) {
				width: 52upx;
				height: 52upx;
				float: left;
				margin-right: 18upx;
				font-weight: 400;
				img {
					width: 100%;
					height: 100%;
				}
			}
			& > div:nth-child(2) {
				padding-top: 6upx;
			}
		}
		.right {
			position: absolute;
			right: 20upx;
			color: @theme;
			& > span:nth-child(1) {
				font-size: 44upx;
				font-weight: bold;
			}
			& > span:nth-child(2) {
				padding-left: 16upx;
				font-size: 24upx;
			}
		}
	}
}
</style>
