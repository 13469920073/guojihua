<template>
	<view class="login-container" style="display: flex;flex-direction: column;align-items: center;">
		<view style="margin-top: 50px;">
			<image src="../../static/images/new/600x154.png" mode="" style="width: 100px;height: 100px;"></image>
		</view>
		<view class="longin-head-nav flex">
			<view class="switch-l" :class="loginWay==0?'activite':''" @click="checkIndex(0)">{{i18n.手机登录}}</view>
			<view class="switch-l" :class="loginWay==1?'activite':''" @click="checkIndex(1)">{{i18n.邮箱登录}}</view>
		</view>
		<view style="width: 100%; margin-top: 45px;">
			<view style="padding: 20px;">
				<view class="uni-login-input flex" v-if="loginWay==0">
				<input type="number" :placeholder="i18n.区号" maxlength="11" v-model="phone" style="width: 40px;"/>
				<input type="number" :placeholder="i18n.请输入手机号" maxlength="11" v-model="phonenumber" style="width: 100%;"/>
				</view>
				<input type="text" v-if="loginWay==1" :placeholder="i18n.请输入邮箱" maxlength="11" v-model="email"/>
				<input type="password"  password="true" :placeholder="i18n.请输入密码" v-model="passWord" style="margin-top: 6px;"/>
				<button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="login">{{i18n.登录}}</button>	
			</view>
			<view style="display: flex;">
				<view style="margin-left: 30px;width: 100%;" v-on:click="register">
					<text class="login-btn">{{i18n.用户注册}}</text>
				</view>
				<view style="flex-shrink: 0;margin-right: 30px;" v-on:click="findPassword">
					<text class="login-btn">{{i18n.找回密码}}</text>
				</view>
			</view>
		</view>

	</view>
</template>

<script>
	var api = require('@/common/p/api.js');
	
	export default{
		data(){
			return {
				//loginWay:0,
				phonenumber:'', //手机号
				email:'', //邮箱
				passWord:'', //密码
				loginWay:0, //登录方式
				phone:'',
				pwd:''
			}
		},
		computed: {
			    i18n (){
			      return this.$t('login')
			    },	
		},
		onLoad(opt) {
			// uni.setNavigationBarTitle({
			//     title: '登录',
			// 	 backgroundColor: '#000000',
			// 	navigationStyle:"custom"
			// });
		},
		methods:{
			checkIndex(i){
				this.loginWay = i
				console.log("手机登录",this.loginWay)
			},
			login(){
				var phone = this.phonenumber;
				var pwd = this.passWord;
				var type = this.loginWay;
				var email = this.email;
				var param={}
				if(type == 0){
					//手机号登录
				if(phone.length != 11){
					uni.showToast({
						title:this.i18n.请输入正确的手机号,
						icon:"none"
					});return;
				}
				// /^1[0-9]{10}$/
				// /^1(3|4|5|7|8)\d{9}$/
				if(!(/^1[0-9]{10}$/.test(phone))){ 
					uni.showToast({
						title:this.i18n.请输入正确的手机号,
						icon:"none"
					}); return; 
				} 
				param={
					'loginAccount':phone,
					'passWord':pwd,
				}
				}else{
					//邮箱登录
					if(!(/^(.+)@(.+)$/.test(email))){
						uni.showToast({
							title:this.i18n.请输入正确的邮箱,
							icon:"none"
						}); return; 
					} 
					param={
						'email':email,
						'passWord':pwd,
					}
				}
				if(!pwd){
					uni.showToast({
						title:this.i18n.请输入密码,
						icon:"none"
					});return;
				}
				uni.showLoading({
					title: '登录中',
					mask: true
				});
				
				api.post(api.url.login , param, res =>{
					console.log("token>>>>>>: " ,res.data.token);
					uni.hideLoading();
                    uni.setStorageSync('token' ,res.data.token);
					uni.setStorageSync('loginuserinfo' ,res.data);
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
					url:"/pages/login/register"
				})
			},
			findPassword(){
				uni.navigateTo({
					url:"/pages/login/revise"
				})
			},
			// findPassword(){
				
			// }
		}
	}
</script>

<style>
	.login-container{
		width: 100%;
		color: #fff;
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
		padding: 16px 0 8px;
		margin: 0 14px;
		    position: relative;
			font-size: 16px;
	}
	.longin-head-nav{
		width: 100%;
		    height: 24px;
		    margin: 0 auto 12px;
		    color: #ccc;
		    
	}
	.activite{
		color: #fff;
		border-bottom: 2px solid #fff;
	}
	.uni-login-input{
		flex-wrap: nowrap;
		align-items: center;
		justify-content: flex-start;
	}
	.login-btn{
		color: #434343;
		font-size: 13px;
		color: #fff;
		/* background-color: white; */
		border-width: 0;
		border-radius: 0;
	}
.custom-navbar {
  /* 设置背景透明 */
  background-color: transparent;
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
