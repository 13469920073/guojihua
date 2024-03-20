<template>
	<view class="content">
		<home-money-list @loadingStatus="loadingStatus" ref="homeList" :items="dataList" />
	</view>
</template>

<script>
	import homeMoneyList from '@/components/home-money-list.vue';

	var itemType = require("@/common/p/base-data.js").itemType;
	export default {
		components:{
			homeMoneyList
		},
		
		data() {
			return {
				itemType:itemType,
				dataList:[],
				 intervalId: null
			}
		},
		onLoad() {
			this.getData()
		},
		onShow(opt) {
			uni.setNavigationBarTitle({
			    title: this.$t('tab').合约
			});
			 this.startTimer();
		},
		onHide() {
		    this.stopTimer();
		  },
		  destroyed() {
		  	 //关闭定时器
		       this.stopTimer();
		  },
		 mounted() {
		     // this.getDataList()
		    },
		methods: {
			   fetchData() {
			        // 模拟请求数据的过程
			        setTimeout(() => {
			          // 假设这是从服务器获取的最新数据
			          const newData = { /* 新数据对象 */ };
					  this.getData()
			          //this.dataList.unshift(newData); // 假设要将新数据添加到数组的开始位置
			        }, 1000);
			      },
			      startTimer() {
			        this.intervalId = setInterval(this.fetchData, 3000); // 每3秒请求一次数据
			      },
			      stopTimer() {
			        if (this.intervalId) {
			          clearInterval(this.intervalId);
			        }
			      },
			      getData(){
			      	var that = this;
			      	var arr1 = ['BTC','ETH','EOS'];
			      	uni.request({
			      	        url:"https://api.taurusen.site/api/home/home/getBlineList",
			      	        success(res){
			      	            console.log(res)
			      				const { list } = res.data.data
								uni.request({
									    url: 'https://min-api.cryptocompare.com/data/histohour',
									    method: 'GET',
									   data: {
				                         	'fsym': 'Toncoin',
				                         	'tsym': 'USDT',
				                         	'limit':'24',
				                         	'aggregate':3,
				                         	'e':'CCCAGG'
				                        },
									    success: (res1) => {
											let list = res.data.data.list
											let d = res1.data.Data
											let list2  = d[d.length-1]
											//计算涨跌浮
											let closeOld = d[d.length-2].close //上一次开盘价价格
											let close = list2.close //当前的开盘价
											let total = closeOld - close
											
											console.log("list2list2list2list2",list2)
											let obj={
												sname:'TON',
												increPer:total.toFixed(2), //涨跌幅
												nowPri:list2.close, //最新价
												vol:'-',
											}
										//重新组装数组
										const index = list.findIndex((item) => item.sname === 'HBC');
										if (index !== -1) {
										        that.$set(list, index, obj);
										      }
											that.dataList = list
									    },
									    fail: (err) => {
									        console.error('GET请求失败：', err);
									        // 处理错误
									    }
									});
			      	        },
			      	    })
			      },
			publish(item){
				console.log("item: " + JSON.stringify(item));
			},
			loadingStatus(e){
				this.status = e;
			},
			
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
	margin-top: 15px;
	border-color: #E5E5E5;
	border-width: 1px;
	border-style: solid;
	width: 100%;
}	

.grid-item-left , .grid-item-right{
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
}
.grid-item-wrap:nth-child(-n+2){
	border-top-width: 0;
}
</style>
