<template>
	<view class="login-container" style="display: flex;flex-direction: column;align-items: center;">
		<view style="width: 100%;">
			<view style="padding: 20px;">
				<view class="uni-reguster-input">
					<input type="text" :placeholder="i18n.请输入真实姓名" v-model="form.realName"/>
				</view>
				<view class="uni-reguster-input">
				<input type="text" :placeholder="i18n.请输入手机号" v-model="form.phonenumber" style="margin-top: 6px;"/>
				</view>
				<view class="uni-reguster-input">
				<input type="text" :placeholder="i18n.请输入身份证号" v-model="form.idCard" style="margin-top: 6px;"/>
				</view>
				<view class="img-ocr-upload">
				<view class="img-block idcard-face">
					<view class="img-ocr-upload">身份证人像面：</view>
					<view @click="uploadBadg('front')" class="bg-img">
					<img  v-if="!voucher" class="bg-img" src="../../static/images/me/idcard-badge.png" alt=""> 
					<image v-if="voucher" class="bg-img" :src="voucher" ></image>
					</view>
				</view>
				<view class="img-block idcard-badge">
					<view class="img-ocr-upload">身份证国徽面：</view>
					<view @click="uploadBadg('back')" class="bg-img">
					<img v-if="!voucher1" class="bg-img" src="../../static/images/me/idcard-face.png" alt=""> 
					<image v-if="voucher1" class="bg-img" :src="voucher1" ></image>
					</view>
				</view>
				</view>
				
				<button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="onIdentifiy">{{i18n.提交}}</button>	
			</view>
		</view>

	</view>
</template>

<script>
	var api = require('@/common/p/api.js');
	
	export default{
		data(){
			return {
				voucher:'',
				voucher1:'',
				form:{
					realName:'', //真实姓名
					idCard:'', //身份证号
					phonenumber:'', //手机号
					photoFront:'', //身份证正面
					photoBack:'', //身份证照片背面
					
				}
			}
		},
		computed: {
			    i18n (){
			      return this.$t('personal')
			    },	
		},
		methods:{
			//上传身份证正面
			uploadBadg(tag){
						uni.chooseImage({sourceType: ["camera", "album"], sizeType: "compressed", count: 1,
						    success: res => {
								var filesPaths = res.tempFilePaths;
								uni.showLoading({ title: '正在上传...' }); 
								console.log("filesPaths",filesPaths)
								if(filesPaths && filesPaths.length > 0){
									var type = tag == 'front' ? '4' : '3'
										api.uploadfile(api.url.upload ,filesPaths[0],{imageType:type}, res =>{
											if(tag =='front'){
												this.voucher = filesPaths[0];
												this.form.photoFront = res.data.url;
											}else{
												this.voucher1 = filesPaths[0];
												this.form.photoBack = res.data.url
											}
											uni.hideLoading();
											
											// this.getDataList();
											// uni.showToast({
											// 	title:'删除成功!',
											// })
											})
								}
						   
							}
				
						})
			
			},
			//提交认证
			onIdentifiy(){
				var that = this;
				const {realName, idCard, phonenumber,photoFront,photoBack } = this.form
				if(!realName){
					uni.showToast({
						title:this.i18n.请输入真实姓名,
						icon:"none"
					});return;
				}
				if (!phonenumber) {
					uni.showToast({
						title:this.i18n.请输入手机号,
						icon:"none"
					}); return; 
				}
				if (!idCard) {
					uni.showToast({
						title:this.i18n.请输入身份证号,
						icon:"none"
					}); return; 
				}
				if (!photoFront) {
					uni.showToast({
						title:this.i18n.请上传身份证正面,
						icon:"none"
					}); return; 
				}
				if (!photoBack) {
					uni.showToast({
						title:this.i18n.请上传身份证背面,
						icon:"none"
					}); return; 
				}
				uni.showLoading({
					title: this.$t('tip').提交中,
					mask: true
				});
				
				api.post(api.url.realnameapplication ,this.form,res =>{
					console.log("提交成功", res)
					uni.hideLoading();
					uni.showToast({
						title:this.$t('tip').成功,
						success:function(res){
							setTimeout(function(){
								//返回
								uni.switchTab({
									 url:'/pages/me/me'
								})
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
	
	.longin-head-nav{
		width: 100%;
		    height: 24px;
		    margin: 0 auto 12px;
		    color: #ccc;
		    
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
	 .img-ocr-upload{
		 display:flex;
		 width: 100%;
		 margin-top: 16px;
	 }
	       
	  .img-block{
		  width:50%;
		  position:relative
	  }
	      
	  .bg-img{
		  width :100%;
		  height :100px;
		  display: block;
	  }
	         
	  .idcard-face{
		  /* height :192px; */
	         margin-right :10px;
	  }
	         
	  .idcard-badge{
		  height :40px
	  }
	         
	  .camera-img{
		  width :48px;
	         display: block;
	         position :absolute;
	         left :50%;
	         margin-top :-120px;
	         margin-left :-40px;
	  }
	         
	.img-ocr-sub-title{
		display: flex;
	  font-size: 24px;
	  color :#9A9FB1;
	  font-weight :400;
	  margin-top :40px;
	  text-align :center;
	  margin-bottom :20px;
	}
	  
</style>
