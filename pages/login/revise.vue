<template>
	<view class="login-container" style="display: flex;flex-direction: column;align-items: center;">
		<view style="width: 100%; margin-top: 45px;">
			<view style="padding: 20px;">
				<!-- <input type="number"" placeholder="请填写推荐人邀请码" maxlength="11" v-model="phone"/> -->
				<view class="uni-reguster-input">
				<input type="number" v-if="navIndex==0" placeholder="请填写手机号" maxlength="11" v-model="phone"/>
				<input type="number" v-if="navIndex==1" placeholder="请填写邮箱" maxlength="11" v-model="phone"/>
				<view class="uni-iphone-right">
					<view class="switch-l" :class="navIndex==0?'activite':''" @click="checkIndex(0)">手机</view>
					<view class="switch-l" :class="navIndex==1?'activite':''" @click="checkIndex(1)">邮箱</view>
				</view>
				</view>
				<view class="uni-reguster-input">
				<input type="text"  placeholder="请填写验证码" v-model="pwd" style="margin-top: 6px;"/>
				<text class="uni-abs-right">获取验证码</text>
				</view>
				<input type="text"  placeholder="请输入新密码" v-model="pwd" style="margin-top: 6px;"/>
				<input type="text"  placeholder="请确认新密码" v-model="pwd" style="margin-top: 6px;"/>
				<button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="login">提交</button>	
			</view>
		</view>

	</view>
</template>

<script>
	var api = require('@/common/p/api.js');
	
	export default{
		data(){
			return {
				navIndex:0,
				phone:'',
				pwd:''
			}
		},
		
		methods:{
			checkIndex(i){
				this.navIndex = i
				console.log("手机登录")
			},
			login(){
				var phone = this.phone;
				var pwd = this.pwd;
				if(phone.length != 11){
					uni.showToast({
						title:"请输入正确的手机号",
						icon:"none"
					});return;
				}
				
				if(pwd.length < 6){
					uni.showToast({
						title:"请输入正确的密码",
						icon:"none"
					});return;
				}
				// /^1[0-9]{10}$/
				// /^1(3|4|5|7|8)\d{9}$/
				if(!(/^1[0-9]{10}$/.test(phone))){ 
					uni.showToast({
						title:"请输入正确的手机号",
						icon:"none"
					}); return; 
				} 
				
				var d = {'phone_number':phone , 'pwd':pwd};
				uni.showLoading({
					title: '登录中',
					mask: true
				});
				
				api.post(api.url.login , d , res =>{
					// console.log("res: " + JSON.stringify(res));
					uni.hideLoading();
          uni.setStorageSync('token' ,112321);
					uni.setStorageSync('loginuserinfo' ,res);
					uni.$emit('userloginsuccess');
					uni.showToast({
						title:'登录成功!',
						success:function(res){
							setTimeout(function(){
								uni.navigateBack()
							} , 500);
						}
					})
				} ,error =>{
					uni.hideLoading();
					uni.showToast({
						title:error,
						icon:"none"
					})
				})
			},
			register(){
				uni.navigateTo({
					url:"register"
				})
			},
			findPassword(){
				
			}
		}
	}
</script>

<style>
	.login-container{
		width: 100%;
		    min-height: 100%;
		    position: absolute;
		    left: 0;
		    top: 0;
		    background: url(../../static/images/login-bg.png) 50% no-repeat;
		    background-size: cover;
	}
	input{
		padding: 15px;
		/* text-align: center; */
		border-width: 0;
		border-bottom-width: 1px;
		border-color: #f0f0f0;
		border-style: solid;
		font-size: 15px;
	}
	.switch-l{
		padding: 4px 8px;
		border-right: 1px solid #fff;
		color:#999;
	    position: relative;
	}
	.longin-head-nav{
		width: 100%;
		    height: 24px;
		    margin: 0 auto 12px;
		    color: #ccc;
		    
	}
	.activite{
		color: #fff;
	}
	.login-btn{
		font-size: 13px;
		color: #fff;
		text-align: center;
		width: 100%;
		/* background-color: white; */
		border-width: 0;
		border-radius: 0;
	}
	.uni-reguster-input {
	    position: relative;
	}
	.uni-abs-right {
	    position: absolute;
	    right: 0;
		bottom: 6px;
		padding: 4px 12px;
		border-radius: 6px;
		border: 1px solid #fff;
		color: #fff;
	}
	.uni-iphone-right{
		display: flex;
		   position: absolute;
		    right: 0;
		    
			bottom: 6px;
		    border: 1px solid #f1f1f1;
		    border-radius: 6px;
	}

/* 	uni-button:after {
	    content: " ";
	    width: 200%;
	    height: 200%;
	    position: absolute;
	    top: 0;
	    left: 0;
	    border: 0px solid rgba(0,0,0,0);
	    -webkit-transform: scale(.5);
	    transform: scale(.5);
	    -webkit-transform-origin: 0 0;
	    transform-origin: 0 0;
	    box-sizing: border-box;
	    border-radius: 0px;
	}
	 */
</style>
