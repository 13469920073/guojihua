<template>
	<view class="content">
		<view>
			<view  style="padding: 14px; display: flex;flex-direction: column;align-items: center;">
				<view class="grid-item-wrap" style="width: 100%;">
					<view class="grid-account-sum">
						<view class="grid-account-text">
							{{i18n.账户余额}}<span>(USDT)</span>
						</view>
						<view class="grid-account-price">
							{{balance}}
						</view>
					</view>
					<view class="grid-account-wallet uni-inline-item">
						<view class="grid-account-left uni-inline-item" @click="onRecharge">
								<view class="left-icon icon"></view>
								<view class="left-text">{{i18n.充值}}</view>
						</view>
						<view class="grid-account-right uni-inline-item" @click="onCash">
								<view class="right-icon icon"></view>
								<view class="right-text">{{i18n.提现}}</view>
						</view>
					</view>
				</view>
				
				<!-- <view style="display: flex; flex-direction: column; align-items: flex-start;width: 100%; margin-top: 8px;font-size: 13px;color: #666; background-color: white;padding:8px 10px;border-radius: 8px;margin-left: 5px;">
					<view>友情提示：</view> 
					<view style="display: flex; align-items: center;">
						<view style="width:4px;height:4px;border-radius:50%;background-color:darkorange; "></view>
						<view style="margin-left: 5px;">发布请选择合适的分类，便于阅读推广</view> 
					</view>
					<view style="display: flex; align-items: center;margin-top: 5px;">
						<view style="width:4px;height:4px;border-radius:50%;background-color:darkorange; display: inline-block;"></view>
						<view style="margin-left: 5px;">违规不合理的内容一旦发现会自动被删除</view>
					</view>
				</view> -->
			</view>
        </view>
		<home-bill-list ref="homeList" @click="onClick" :items="dataList" />
		
	</view>
</template>

<script>
	import homeBillList from '@/components/home-bill-list.vue';
	
	var itemType = require("@/common/p/base-data.js").itemType;
	var api = require('@/common/p/api.js');
	export default {
		components:{
			homeBillList
		},
		
		data() {
			return {
				itemType:itemType,
				balance:'0',
				dataList:[],
				pageNum:1,
				pageSize:10,
			}
		},
		computed: {
			    i18n (){
			      return this.$t('wallet')
			    },
					
		},
		onShow(opt) {
			uni.setNavigationBarTitle({
			    title: this.$t('tab').钱包
			});
			this.getDataBalance()
			this.getData();
		},
		onLoad() {
			
			// console.log("itemType: " + JSON.stringify(itemType));
		},
		methods: {
			getData(){
				let param={
					pageNum:this.pageNum,
					pageSize:this.pageSize
				}
				api.post(api.url.getoperhistorylist ,param, res =>{
					this.dataList = res.data.result
					})
			},
			//获取用户余额
			getDataBalance(){
				api.post(api.url.getwalletbalance ,{}, res =>{
					this.balance = res.data.result
					})
			},
			publish(item){
				console.log("item: " + JSON.stringify(item));
			},
			//充值
			onRecharge(){
				uni.navigateTo({
					url:'/pages/trade/account-recharge'
				})
			},
			//提现
			onCash(){
				uni.navigateTo({
					url:'/pages/trade/withdraw'
				})
			},
			onClick(e){
				//var i = e.index;
				console.log("======", e)
				//var item = this.itemType[i];
				uni.navigateTo({
					url:'/pages/trade/transaction'
					//url:'home-list?t=' + item['text'] + '&id=' + item['type']
				})
			}
			
			
		}
	}
</script>

<style>
.content {
	text-align: center;
	padding-top: 0px;
	padding-bottom: 56px;
	height: 200px;
}

.grid-item-wrap{
	/* width: 98%; */
	    height: 160px;
		text-align: left;
		/* padding: 14px 12px 16px; */
	    margin: 0 auto;
	    background: url(../../static/images/trade/account-bg.png) 50% no-repeat;
	    background-size: cover;
	    position: relative;
	    color: #fff;
}	
.grid-account-sum{
	padding: 20px;
}
.grid-account-text{
	text-align: left;
	/* padding: 14px 12px 16px; */
	font-size: 16px;
	color: #ddd;
}
.grid-account-price{
	font-size: 26px;
	color: #fff;
}
.grid-account-wallet{
	width: 100%;
	/* height: 80px; */
	position: absolute;
	left: 0;
	bottom: 0;
	background: #245ffb;
	border-radius: 0 0 12px 12px
}
.grid-account-left, .grid-account-right{
	width: 50%;
	padding: 10px 14px 10px;
	justify-content: center
}
.grid-account-right{
	border-left: 1px solid #999
}
.left-icon{
    background: url(../../static/images/trade/icon-left.png) no-repeat 50%/70% auto;
    background-color: #00baff;
	
}
.right-icon{
    background: url(../../static/images/trade/icon-right.png) no-repeat 50%/70% auto;
    background-color: #23cc8f;
}
.icon{
	width: 40px;
	height: 40px;
	display: inline-block;
	vertical-align: middle;
	border-radius: 50%;
}
.left-text, .right-text{
	margin-left: 10px;
	color: #fff;
}
/* .grid-item-left , .grid-item-right{
	margin-top: 0px;
	border-width: 1px;
	border-bottom-width: 0;
	border-right-width: 0;
	border-style: solid;
	padding: 25px 0;
	border-color: #E5E5E5;
	border-radius: 0px;
	font-size: 15px;
	width: 50%;
}
.grid-item-left {
	border-left-width: 0;
} */
/* .grid-item-wrap:nth-child(-n+2){
	border-top-width: 0;
} */
</style>
