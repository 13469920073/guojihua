<template>
	<view>
		<view class="position-top">
		<view class="head-nav flex">
			<view :class="navIndex==0?'activite':''" @click="checkIndex(0)">{{i18n.交易}}</view>
			<view :class="navIndex==1?'activite':''" @click="checkIndex(1)">{{i18n.充值}}</view>
			<view :class="navIndex==2?'activite':''" @click="checkIndex(2)">{{i18n.提现}}</view>
		</view>
		<view style="display: flex;flex-direction: column;align-items: center;">
			<view class="grid-item-wrap"  style="width: 100%;">
					<view class="flex"  style="justify-content: space-between" >
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
		</view>
		<view v-if="items.length" style="margin-top: 90px;">
		<view class="uni-list-cell"  hover-class="uni-list-cell-hover" v-for="(value ,key) in items" :key="key" style="flex-direction: column;align-items: flex-start;">
			<view style="width: 100%;" v-on:click="openDetailPage(value)">
				<view class="flex"  style="justify-content: space-between" >
					<view class="grid-item-left" >
						<p class="text-ind-1">
							<span class="text-xmd">{{formattedDate(value.time)}}</span>
						</p>
					</view>
					<view class="grid-item-right" style="color: #333;">
						{{value.amount}}
					</view>
					<view class="grid-item-right">
						{{value.status}}
					</view>
				</view>
		
			</view>
		</view><!-- cell -->
		</view>
		<view v-else>
		  <view class="img_title">
		    <img src="../../assets/img/available.png" alt="">
		    <p style="font-size:32upx;color:#c4c4c4">{{i18n2.暂无数据}}</p>
		  </view>
		
		</view>

	</view>

</template>

<script>
	var api = require('@/common/p/api.js');
	export default {
		data() {
			return {
				navIndex: 0,
				pageNum:1,
				pageSize:10,
				totalPages:null, //总页数
				items:[],
				statusArr1:{
					'1':'建仓',
					'2':'平仓'
				},
			}
		},
		computed: {
			    i18n (){
			      return this.$t('wallet')
			    },
				i18n2 (){
				  return this.$t('personal')
				},
					
		},
		// onPageScroll(){
		// 	console.log("监听页面下滑到底")
		// },
		onPageScroll() {
		  
		},
		onLoad() {
		    this.getDataList(this.navIndex)
		},
		onShow(opt) {
			uni.setNavigationBarTitle({
			    title: this.$t('personal').账单明细
			});
		},
		onReachBottom() {
					 if(this.pageNum <= this.totalPages){
					   console.log("huo去更多的数据")
					   this.getDataList(this.navIndex); // 达到最后一页则不再发起请求
					 } else{
					   console.log('没有更多数据了');
					 }
		},
		methods: {
			checkIndex(index) {
				this.pageNum = 1
				this.items = [];
				this.navIndex = index;
				this.getDataList(index)
			},
			//获取账单明细
			getDataList(i){
				var url = ''
				if(i == 0){
					url = api.url.gettradelist //交易
				}else if(i == 1){
					url = api.url.getincomelist  //入金
				}else if(i == 2){
					url = api.url.getoutlaylist //提现
				}
				var d = {
				'pageNum':this.pageNum,
				'pageSize':this.pageSize
				};
				uni.showLoading({
					title: '数据加载中..',
					mask: true
				});
				api.post(url, d, res =>{
					uni.hideLoading();
					if(this.pageNum === 1){
					    this.totalPages = res.data.totalPage; // 更新总页数
					    this.items = []; // 清空之前的数据
					}
					let arr=[];
					
					res.data.result.forEach(item => {
						//交易
						if(i == 0){
							arr.push({
							    time: item.createTime,
							    amount: item.tradePrice,
							    status: this.$t('wallet')[item.status == "1" ?"建仓":"平仓"],	
							})
						}else if(i == 1){
							arr.push({
							    time: item.createTime,
							    amount: item.incomeNum,
							    status: this.$t('wallet')[item.status == "2"?"待审核":(item.status == "3"?"通过":"不通过")],	
							})
						}else if(i == 2){
							arr.push({
							    time: item.createTime,
							    amount: item.outlayNum,
							    status: this.$t('wallet')[item.status == "2"?"审核中":(item.status == "3"?"成功":"失败")],
							})
						}
						
					   
					   // arr1.push(obj);
					});
					
					
					const newData = arr || []; // 从返回结果中提取数据部分
					this.items = [...this.items, ...newData]; // 将新数据追加到已有数据的尾部
					      
					++this.pageNum; // 更新当前页数
					//this.items = res.data.result
					//this.totalPages=res.data.totalCount
					console.log("获取成功》》》》》: ",res);
		
				} ,error =>{
					uni.hideLoading();
					uni.showToast({
						title:error,
						icon:"none"
					})
				})
			},
		 
			openDetailPage(){},
			//时间格式转换
			formattedDate(time){
				if(time){
					var newTime = time.substring(0, 16);
					return newTime.replace('T', ' ');
				}else{
					return '-'
				}
				
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
	.position-top{
		position: fixed;
		  top:40px;
		  left: 0;
		  width: 100%;
		  background-color: white;
		  z-index: 1000; /* 确保元素在其他内容之上 */
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
		padding: 10px 0;
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
	.grid-item-left{
		width: 40%;
		flex: 1;
	}
	 .grid-item-right{
		 width: 30%;
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
		/* width: 33.33%; */
	}
	.text-xmd{
		/* font-size:18px; */
		color: #333;
	}
	.text-gray{
		font-size:12px;
		color: #9a9a9a;
	}
	.img_title{
	  text-align: center;
	  margin-top: 30%;
	  position:absolute;
	  top:50%; 
	  left:50%;
	  margin-top:-100px;
	  margin-left:-100px;
	}
</style>
