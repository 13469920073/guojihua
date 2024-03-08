<template>
	<view class="content">
		<view class="uni-account-card">
			<view  style="padding: 14px; padding-top: 25px; display: flex;flex-direction: column;align-items: center;">
				<h3 class="uni-account-title">
					{{i18n.提现申请}}
				</h3>
			
				
				<view class="table-from" style="">
					<view class="flex">{{i18n.账户名称}}<text class="table-input"><input :placeholder="i18n.请输入数量" v-model="from.name"  /></text></view> 
					
					<view class="grid-item-wrap flex" style="width: 100%;">
						<view class="grid-item-left">
							111111
					    </view>
					</view>
					
					
					<view class="flex">{{i18n.金额}}<text class="table-input"><input :placeholder="i18n.请输入数量"  v-model="from.address"/></text></view> 
					
				</view>
			</view>
        </view>
		<view class="flex" style="padding: 20px;">
			<text>{{i18n.出金时间}}</text>
		</view>
		<view style="padding: 20px;">
			<button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="next">{{i18n.下一步}}</button>	
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
					title:'USDT',
					name:'USDT（trc-20）',
					address:'11dcdicjdiijcnxisdlbcvldsu'
				},{
					title:'USDT',
					name:'',
					address:'22dcdicjdiijcnxisdlbcvldsu'
				},{
					title:'USDT',
					name:'',
					address:'33dcdicjdiijcnxisdlbcvldsu'
				},{
					title:'BTC',
					name:'',
					address:'44dcdicjdiijcnxisdlbcvldsu'
				},{
					title:'ETH',
					name:'',
					address:''
				}],
				from:{}
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
	font-size: 14px;
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
/* .grid-item-left {
	border-left-width: 0;
}
.grid-item-wrap:nth-child(-n+2){
	border-top-width: 0;
} */
</style>
