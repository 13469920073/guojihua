<template>
	<view>
		<view class="head-nav flex">
			<view :class="navIndex==0?'activite':''" @click="checkIndex(0)">{{i18n.交易}}</view>
			<view :class="navIndex==1?'activite':''" @click="checkIndex(1)">{{i18n.充值}}</view>
			<view :class="navIndex==2?'activite':''" @click="checkIndex(2)">{{i18n.提现}}</view>
		</view>

		<!-- 内容切换 -->
		<!-- <view class="content" v-if="navIndex==0">
			我是选项1
		</view>
		<view class="content" v-if="navIndex==1">
			我是选项2
		</view>
		<view class="content" v-if="navIndex==2">
			我是选项3
		</view> -->
		<view  style=" display: flex;flex-direction: column;align-items: center;">
			<view class="grid-item-wrap"  style="width: 100%;">
					<view class="flex"  style="display: flex;" >
						<view class="grid-item-left" >
							{{i18n.时间}}
						</view>
						<view class="grid-item-right">
							{{i18n.金额}}
						</view>
						<view class="grid-item-right">
							{{i18n.状态}} 
						</view>
					</view>
			</view>
		</view>
		<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value ,key) in items" :key="key" style="flex-direction: column;align-items: flex-start;">
			<view style="width: 100%;" v-on:click="openDetailPage(value)">
				<view  style="display: flex;" >
					<view class="grid-item-left" >
						<p class="text-ind-1">
							<span class="text-xmd">{{value.currency}}</span>
							<span class="text-gray">/USDT</span>
						</p>
					</view>
					<view class="grid-item-right" style="color: #333;">
						60421.1000
					</view>
					<view class="grid-item-right">
						+6.45% 
					</view>
				</view>
		
			</view>
		</view><!-- cell -->
		

	</view>

</template>

<script>
	var api = require('@/common/p/api.js');
	export default {
		data() {
			return {
				navIndex: 0,
				pageNum:1,
				pageSize:20,
				items:[]
			}
		},
		computed: {
			    i18n (){
			      return this.$t('wallet')
			    },
					
		},
		onPageScroll(){
			console.log("监听页面下滑到底")
		},
		
		methods: {
			checkIndex(index) {
				console.log(index)
				this.navIndex = index;
				this.getDataList(index)
			},
			//获取账单明细
			getDataList(i){
				var url = ''
				if(i == 0){
					url = api.url.gettradelist
				}else if(i == 1){
					url = api.url.getincomelist  //入金
				}else if(i == 2){
					url = api.url.getoutlaylist //提现
				}
				var d = {
				'pageNum':this.pageNum ,
				'pageSize':this.pageSize
				};
				uni.showLoading({
					title: '数据加载中..',
					mask: true
				});
				api.post(url, d, res =>{
					console.log("获取成功》》》》》: " + JSON.stringify(res));
		
				} ,error =>{
					uni.hideLoading();
					uni.showToast({
						title:error,
						icon:"none"
					})
				})
			}
		}
	}
</script>

<style scoped>
	.head-nav {
		margin: 20rpx auto;
		padding: 0 16px;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-around;
		/* display: flex; */
		/* justify-content: space-between;
		align-items: center; */
		border-bottom: 1px solid #eee
		/* color: #CCCCCC; */
	}
	
	.activite {
		color: #008fff;
	}

	.head-nav>view {
		/* padding-bottom: 10rpx; */
		font-size: 14px;
		    margin: 10px 0;
		    padding: 0 10px;
	}

	.content {
		/* background: #008000; */
		height: 100%;
	}
	.uni-list-cell{
		padding: 10px;
		color: #333;
	}
	.uni-list-cell:after{
		left: 0;
		background-color: #ddd;
	}
	
	.grid-item-wrap{
		/* margin-top: 15px; */
		/* padding-bottom: 15px; */
		/* border-color: #E5E5E5; */
		border-bottom: 1px solid #E5E5E5;
		/* border-width: 1px;
		border-style: solid; */
		width: 100%;
	}	
	
	.grid-item-left , .grid-item-right{
		margin-top: 0px;
		//border-width: 1px;
		color: #9a9a9a;
		text-align: center;
		/* border-bottom-width: 0;
		border-right-width: 0;
		border-style: solid; */
		/* padding: 25px 0;
		border-color: #E5E5E5;
		border-radius: 0px; */
		font-size: 15px;
		width: 33.33%;
	}
	.text-xmd{
		font-size:18px;
		color: #333;
	}
	.text-gray{
		font-size:12px;
		color: #9a9a9a;
	}
</style>
