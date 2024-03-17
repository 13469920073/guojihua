<template>
	<view class="content">
		<view class="uni-account-card">
			<view  style="padding: 14px; padding-top: 25px; display: flex;flex-direction: column;align-items: center;">
				<h3 class="uni-account-title">
					{{i18n.收款账户}}<text class="rgcz">{{i18n.人工充值}}</text>
				</h3>
				<view class="grid-item-wrap flex" style="width: 100%;">
					<view class="grid-item-left" :class="navIndex==k?'activite':''" v-for="(arr , k) in itemType" :key="k" v-on:click="publish(arr,k)">
						{{arr.type}}
				    </view>
				</view>
				
				<view class="table-from" style="">
					<view class="flex" style="width: 100%;margin: 10px 0;">
					{{i18n.账户名称}}
					<text class="table-input">
						<input v-model="from.accountName" disabled class="uni-input"  /></text>
					</view> 
					<view class="flex" style="width: 100%;">{{i18n.账户地址}}
					<text class="table-input">
						<input v-model="from.address" disabled class="uni-input"/></text>
					</view> 
					<view class="table-images">
						<image :src="from.photo" mode="" />
					</view> 
					<view style="display: flex; align-items: center;">
						<view style="margin-left: 5px;color: #f66;text-align: left;">{{i18n.注意}}</view> 
					</view>
				</view>
			</view>
        </view>
		<view class="flex" style="padding: 20px;">
		    <image v-on:click="oncheck" :src=" isCheck ? '../../static/images/trade/checked.png' : '../../static/images/trade/check.png'" mode="" style="width: 20px;height: 20px;"></image>
			<text>{{i18n.转账完成}}</text>
		</view>
		<view style="padding: 20px;">
			<button type="primary" style="background-color: #0080ff;height: 45px;" v-on:click="next">{{i18n.下一步}}</button>	
		</view>
	</view>
</template>

<script>
	var itemType = require("@/common/p/base-data.js").itemType;
	export default {
		components:{
			
		},
		
		data() {
			return {
				navIndex:'0',
				isCheck:false,
				itemType:[{
					type:'USDT',
					accountName:'USDT（TRC-20）',
					address:'TJDduy6Mo8J6wVkb9c3v55js5hMva65e91',
					photo:'../../static/images/trade/TRC-201.jpg'
				},{
					type:'USDT',
					accountName:'USDT（ERC-20）',
					address:'0x695c7317a67d7dc7ac2df08f17edf28b22545c11',
					photo:'../../static/images/trade/ERC-20-1.jpg'
				},{
					type:'BTC',
					accountName:'BTC',
					address:'32zTcPmmv4EunXNhmQz27vWb4LzNTx4aaV',
					photo:'../../static/images/trade/BTC-1.jpg'
				},{
					type:'ETH',
					accountName:'ETH（ERC-20）',
					address:'0x695c7317a67d7dc7ac2df08f17edf28b22545c11',
					photo:'../../static/images/trade/ETH-1.jpg'
				}],
				from:{
					accountName:'USDT（TRC-20）', //账户名称
					address:'TJDduy6Mo8J6wVkb9c3v55js5hMva65e91', //账户地址
					type:'USDT', //货币
					photo:'../../static/images/trade/TRC-201.jpg'
				}
			}
		},
		computed: {
			    i18n (){
			      return this.$t('wallet')
			    },	
		},
		onLoad() {
			
			// console.log("itemType: " + JSON.stringify(itemType));
		},
		methods: {
			publish(item,index){
				console.log("item: ",item);
				this.from = item
				this.navIndex = index
			},
			oncheck(){
				this.isCheck = !this.isCheck
				console.log("==",this.isCheck)
			},
			//下一步
			next(){
				let obj= this.from
				if(!this.isCheck){
					uni.showToast({
					    title: '请勾选提交打款信息',
					    icon: 'none',
					    duration: 2000
					})
					
				}else{
					uni.navigateTo({
						url:'/pages/trade/account-recharge2?obj='+encodeURIComponent(JSON.stringify(obj))
					})
				}
				console.log("===")
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

.grid-item-wrap{
	margin-top: 15px;
	/* border-color: #E5E5E5;
	border-width: 1px;
	border-style: solid; */
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}	

.grid-item-left , .grid-item-right{
	margin-top: 0px;
	/* border-width: 1px;
	border-bottom-width: 0;
	border-right-width: 0; */
	/* border-style: solid; */
	border: 1px solid #ccc;
	 padding: 0 16px;
	/* border-color: #E5E5E5; */
	border-radius: 6px;
	font-size: 14px;
	/* width: 50%; */
}
.table-from{
	display: flex; 
	flex-direction: column; 
	align-items: flex-start;
	width: 100%; 
	/* margin-top: 8px; */
	font-size: 14px;
	color: #666;
	 /* background-color: white; */
	 padding:8px 10px;
	 border-radius: 8px;
	 margin-left: 5px;
}
.table-input{
	margin-left: 10px;
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
.table-images{
	width: 100%;
}
.table-images uni-image{
	width: 200px;
	height: 200px;
}
/* .grid-item-left {
	border-left-width: 0;
}
.grid-item-wrap:nth-child(-n+2){
	border-top-width: 0;
} */
</style>
