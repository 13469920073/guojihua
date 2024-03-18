<template>
	<view class="login-container" style="display: flex;flex-direction: column;align-items: center;">
		<view style="width: 100%;">
			<view style="padding: 20px;">
				<view class="uni-reguster-input">
					<input type="text" :password="isPassword1" :placeholder="i18n.请输入原密码" v-model="oldPwd"/>
					<text class="uni-abs-right" @click="togglePassword1">
						<img src="../../static/images/icon/icon-yanjing.png" v-if="isPassword1" width="20px" alt=""> 
						<img src="../../static/images/icon/icon-yanjing1.png" v-else width="20px" alt=""> 
					</text>
				</view>
				<view class="uni-reguster-input">
				<input type="text" :password="isPassword2" :placeholder="i18n.请输入新密码" v-model="passWord" style="margin-top: 6px;"/>
				<text class="uni-abs-right" @click="togglePassword2">
					<img src="../../static/images/icon/icon-yanjing.png" v-if="isPassword2" width="20px" alt=""> 
					<img src="../../static/images/icon/icon-yanjing1.png" v-else width="20px" alt=""> 
				</text>
				</view>
				<view class="uni-reguster-input">
				<input type="text" :password="isPassword3" :placeholder="i18n.请确认新密码" v-model="newPwd" style="margin-top: 6px;"/>
				<text class="uni-abs-right" @click="togglePassword3">
					<img src="../../static/images/icon/icon-yanjing.png" v-if="isPassword3" width="20px" alt=""> 
					<img src="../../static/images/icon/icon-yanjing1.png" v-else width="20px" alt=""> 
				</text>
				</view>
				<button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="modifPwd">{{i18n.提交}}</button>	
			</view>
		</view>

	</view>
</template>

<script>
	var api = require('@/common/p/api.js');
	
	export default{
		data(){
			return {
				isPassword1: true,
				isPassword2: true,
				isPassword3: true,
				oldPwd:'', //原密码
				passWord:'', //密码
				newPwd:'',
				phone:'',
				pwd:''
			}
		},
		computed: {
			    i18n (){
			      return this.$t('login')
			    },	
		},
		onShow(opt) {
			uni.setNavigationBarTitle({
			    title: this.$t('personal').修改密码
			});
			this.getData()
		},
		methods:{
			togglePassword1() {
			      this.isPassword1 = !this.isPassword1;
			    },
				togglePassword2() {
				      this.isPassword2 = !this.isPassword2;
				    },
					togglePassword3() {
					      this.isPassword3 = !this.isPassword3;
					    },
			modifPwd(){
				var that = this;
				var pwd = this.passWord;
				var newPwd = this.newPwd;
				var oldPwd = this.oldPwd;
				if(!oldPwd){
					uni.showToast({
						title:this.i18n.请输入原密码,
						icon:"none"
					});return;
				}
				
				if (this.newPwd !== pwd) {
					uni.showToast({
						title:this.i18n.密码不一致,
						icon:"none"
					}); return; 
				}
				
				var d = {
					'oldPwd':oldPwd,
				    'passWord':pwd,
				 };
				uni.showLoading({
					title: this.$t('tip').修改中,
					mask: true
				});
				
				api.post(api.url.changepwd ,d,res =>{
					uni.hideLoading();
					uni.showToast({
						title:this.$t('tip').修改成功,
						success:function(res){
							setTimeout(function(){
								//退出登录
								that.outlogin()
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
			//退出登录
			outlogin(){
				api.get(api.url.logout , {}, res =>{
				uni.removeStorageSync('loginuserinfo');
				uni.$emit('userloginsuccess');
				uni.navigateTo({
					 url:'/pages/login/login'
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
		  /*  background: url(../../static/images/login-bg.png) 50% no-repeat;
		    background-size: cover; */
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
	}
	.uni-iphone-right{
		display: flex;
		   position: absolute;
		    right: 0;
		    
			bottom: 6px;
		    border: 1px solid #f1f1f1;
		    border-radius: 6px;
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
