<template>
	<view class="con">
		<div class="content">
			<div class="logo"><img src="../../static/img/logo1.png" alt="" /></div>
			<h4>智音助教随时随地学音乐</h4>
			<div class="input">
				<div class="left"><img src="../../static/img/phone.png" alt="" /></div>
				<div class="right"><input class="uni-input" v-model="name" focus maxlength="11" placeholder="输入您的手机号" /></div>
			</div>
			<div class="code">
				<div class="input inputCode">
					<div class="left"><img src="../../static/img/pasword.png" alt="" /></div>
					<div class="right"><input class="uni-input" v-model="code" focus maxlength="6" placeholder="输入验证码" /></div>
				</div>
				<div class="btn" @click="sendCode" v-if="submitBtn"><span>获取</span></div>
				<div class="btn btns" v-else>
					<h5>{{ time }}s</h5>
					<p>重新获取</p>
				</div>
			</div>

			<div class="btnA">绑定</div>
		</div>

		<!-- 验证码错误提示 -->
		<uni-popup :show="codeError" button-mode="right">
			<view class="center-box">
				<div class="message">
					<img src="../../static/img/messageImg.png" alt="">
				</div>
				<h1>验证码错误</h1>
				<p>请核对后重新输入</p>
				<div class="btnA" @click="diaBtn(1)">确定</div>
			</view>
		</uni-popup>
		<!-- 成功提示 -->
		<uni-popup :show="codeSuccess" button-mode="right">
			<view class="center-box">
				<div class="message">
					<img src="../../static/img/messageImg.png" alt="">
				</div>
				<h1>绑定成功</h1>
				<p>学生姓名：小明</p>
				<div class="btnA" @click="diaBtn(2)">确定</div>
			</view>
		</uni-popup>
	</view>
</template>

<script>
export default {
	data() {
		return {
			title: '',
			name: '15023376404',
			code: '456',
			submitBtn: true,
			time: 60,
			codeError:false,
			codeSuccess:false,
		};
	},
	onLoad() {},
	methods: {
		sendCode() {
			this.submitBtn = false;
			this.settime(60);
		},
		//单纯分钟和秒倒计时
		settime(countdown) {
			if (countdown == 0) {
				this.submitBtn = true;
				countdown = countdown;
			} else {
				countdown--;
				this.time = countdown;
				var timer = setTimeout(() => {
					if (countdown >= 0) {
						this.settime(this.time);
					}
				}, 1000);
			}
		},
		diaBtn(type){
			if(type == 1){
				this.codeError = false;
			}
		}
	}
};
</script>

<style lang="less" scoped>
@import url('../../less/public.less');
.con {
	background: @inputBg;
	height: calc(100vh - 120upx);
	padding-top: 120upx;
	.content {
		width: 90vw;
		height: 75vh;
		margin: 0 auto;
		background: white;
		box-shadow: 0px 20px 40px -10px rgba(0, 54, 215, 0.1);
		border-radius: 16upx;
		position: relative;
		padding-top: 120upx;
		.logo {
			width: 190upx;
			height: 190upx;
			position: absolute;
			top: -95upx;
			left: calc(50% - 95upx);
			img {
				width: 100%;
				height: 100%;
			}
		}
		h4 {
			font-size: 32upx;
			font-weight: 400;
			color: @titleColor;
			text-align: center;
			margin-bottom: 80upx;
		}
		.input {
			background: @inputBg;
			width: 80%;
			margin: 0 auto 40upx auto;
			padding: 20upx 30upx;
			border-radius: 10upx;
			height: 52upx;
			position: relative;
			&.active {
				border: 1px solid red;
			}
			& > div {
				float: left;
			}
			.message {
				position: absolute;
				font-size: 24upx;
				color: red;
				bottom: -36upx;
				left: 120upx;
			}
			.left {
				width: 52upx;
				height: 52upx;
				margin-right: 30upx;
				img {
					width: 100%;
					height: 100%;
				}
			}
			.right {
				input {
					font-size: 28upx;
				}
			}
		}
		.code {
			position: relative;
			width: calc(80% + 60upx);
			margin: 0 auto 40upx auto;
			height: 52upx;
			.inputCode {
				position: absolute;
				width: 60%;
				left: 0;
				input {
					width: 240upx;
				}
				&.active {
					border: 1px solid red;
				}
			}
			.btn {
				position: absolute;
				right: 0;
				width: 25%;
				height: 64upx;
				background: @theme;
				box-shadow: 0px 12px 20px -10px rgba(0, 54, 214, 0.5);
				border-radius: 4px;
				text-align: center;
				color: white;
				font-size: 32upx;
				padding-top: 24upx;
				&.btns {
					padding-top: 10upx;
					height: 80upx;
					background: @inputBg;
					box-shadow: none;
					h5 {
						color: @theme;
					}
					p {
						color: @notTxtColor;
						font-size: 24upx;
					}
				}
			}
			.message {
				font-size: 24upx;
				color: red;
				bottom: -86upx;
				left: 120upx;
			}
		}
		.btnA {
			width: 300upx;
			line-height: 88upx;
			background: @inputBg;
			border-radius: 4px;
			text-align: center;
			color: @notTxtColor;
			font-size: 32upx;
			margin: 120upx auto 0 auto;
			.active {
				background: @theme;
				color: white;
			}
		}
	}
}
.center-box{
	background: white;
	width: 670upx;
	height: 520upx;
	border-radius: 12upx; 
	.message{
		width: 258upx;
		height: 262upx;
		margin: 25upx auto;
		margin-bottom: 0;
		img{
			width: 100%;
			height: 100%;
		}
	}
	h1{
		text-align: center;
	}
	p{
		color: @notTxtColor;
		font-size: 28upx;
		text-align: center;
	}
	.btnA{
		width: 300upx;
		line-height: 88upx;
		background: @theme;
		border-radius: 4px;
		text-align: center;
		color: white;
		font-size: 32upx;
		margin: 20upx auto 0 auto;
	}
}
</style>
