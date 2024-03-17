<template>
	<view class="content">
		<view class="uni-account-card">
			<view  style="padding: 14px; padding-top: 25px; display: flex;flex-direction: column;align-items: center;">
				<h3 class="uni-account-title">
					{{i18n.填写信息}}
				</h3>
				<view class="table-from" style="">
					<view class="flex" style="width: 100%;">{{i18n.充值币种}}
					<text class="table-input" style="margin-left: 20px;">
						{{from.type}}
						<!-- <input class="uni-input" disabled v-model="from.type"  />-->
					</text> 
					</view> 
					<view class="flex" style="width: 100%;margin: 10px 0;">{{i18n.充值金额}}
					<text class="table-input">
						<input class="uni-input" :placeholder="i18n.请输入数量" v-model="from.incomeNum"/></text>
					</view>
					<view class="flex">{{i18n.凭证图片}}
					<view @click="selectVoucher">
						<image v-if="!voucher" src="../../static/images/trade/photo.png" class="uni-pic" ></image>
						<image v-if="voucher" :src="voucher" class="uni-pic" ></image>	
					</view>
					</view> 
					<view style="display: flex; align-items: center;margin-top: 10px;">
						<view style="margin-left: 5px;color: #f66;text-align: left;">{{i18n.核对转账}}</view> 
					</view>
				</view>
			</view>
        </view>
		<view style="padding: 20px;">
			<button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="save">{{i18n.提交}}</button>	
			<button style="margin-top: 10px;height: 45px;" v-on:click="step">{{i18n.上一步}}</button>	
		</view>
	</view>
</template>

<script>
	var itemType = require("@/common/p/base-data.js").itemType;
	var api = require('@/common/p/api.js');
	export default {
		components:{
			
		},
		
		data() {
			return {
				from:{
					incomeNum:'', //充值金额
					outlayNum:'', //提现数量
					type:'',
					photo:'', //凭证图片
				},
				voucher:'',
				is_avatar_change:false,
			}
		},
		computed: {
			    i18n (){
			      return this.$t('wallet')
			    },	
		},
		onLoad(option) {
					this.from = JSON.parse(decodeURIComponent(option.obj));
					console.log("this.from====》》》》",this.from)
				},
		methods: {
			//上传
			selectVoucher(){
					uni.chooseImage({sourceType: ["camera", "album"], sizeType: "compressed", count: 1,
					    success: res => {
							var filesPaths = res.tempFilePaths;
							uni.showLoading({ title: '正在上传...' }); 
							console.log("filesPaths",filesPaths)
							if(filesPaths && filesPaths.length > 0){
								this.voucher = filesPaths[0];
								console.log("filesPaths",this.voucher)
								this.is_avatar_change = true;
								// 下面将图片本地路径转base64
								// convert.toBase64(this.voucher).then((res) => {
								// 	console.log("res=====》》》",res)
								// 		//that.getAccessToken(res)
								// })
									//return;
									api.uploadfile(api.url.upload ,this.voucher, res =>{
										 uni.hideLoading();
										 this.from.photo = res.data.url
										// this.getDataList();
										// uni.showToast({
										// 	title:'删除成功!',
										// })
										})
							}
					   
						}

					})
			},
			//下一步
			save(){
				console.log("===",this.from)
				if(!this.from.incomeNum){
					uni.showToast({
					    title: '请输入数量',
					    icon: 'none',
					    duration: 2000
					})
					return
					
				}
				api.post(api.url.applicationrecharge ,this.from, res =>{
					uni.showToast({
						title:'充值成功!',
						success:function(res){
							setTimeout(function(){
								uni.switchTab({
								  url:'/pages/trade/index'
								})
							} , 500);
						}
					})
					})
				console.log("===")
			},
			//上一步
			step(){
				uni.navigateBack({
										delta: 1
									});
			}
			
		}
	}
</script>

<style>
.content {
	text-align: center;
	padding-top: 0px;
	padding-bottom: 56px;
	
}
.uni-account-card{
	/* height: 200px; */
	margin: 14px;
	border-radius: 6px;
	background-color: #fafafa;
	border: 1px solid #eed9d9;
}
.uni-account-title{
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 12px;
	font-size: 16px;
}
.rgcz{
	color: #0080ff;
    font-size: 14px;
}
.table-from{
	display: flex; 
	flex-direction: column; 
	align-items: flex-start;
	width: 100%; 
	margin-top: 8px;
	font-size: 14px;
	color: #666;
	 /* background-color: white; */
	 padding:8px 10px;
	 border-radius: 8px;
	 margin-left: 5px;
}
.table-input{
	margin-left: 10px;
	text-align: left;
	font-size: 14px;
	flex: 1;
}
.uni-input{
	margin-left: 10px;
    text-align: left;
}
.activite{
	border-color: #0080ff;
}
.next-btn{
	width: 70%;
	margin: auto;
	color: #fff;
	font-size: 13px;
	background-color: #0080ff;
	border-width: 0;
	border-radius: 0;
}
.uni-pic{
	width: 40px; 
	height: 40px; 
	margin-left: 20px;
	/* margin-top: 30px; */
	/* border-radius: 50%; */
}
/* .grid-item-left {
	border-left-width: 0;
}
.grid-item-wrap:nth-child(-n+2){
	border-top-width: 0;
} */
</style>
