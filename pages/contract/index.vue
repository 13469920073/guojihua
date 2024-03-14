<template>
	<view class="content">
		<home-money-list @loadingStatus="loadingStatus" ref="homeList" />
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
				 intervalId: null
			}
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
		 mounted() {
		      this.getDataList()
		    },
		methods: {
			   fetchData() {
			        // 模拟请求数据的过程
			        setTimeout(() => {
			          // 假设这是从服务器获取的最新数据
			          const newData = { /* 新数据对象 */ };
			          //this.dataList.unshift(newData); // 假设要将新数据添加到数组的开始位置
			        }, 1000);
			      },
			      startTimer() {
			        this.intervalId = setInterval(this.fetchData, 5000); // 每5秒请求一次数据
			      },
			      stopTimer() {
			        if (this.intervalId) {
			          clearInterval(this.intervalId);
			        }
			      },
			      getDataList(){
					  console.log("=====")
					  const requestData = {
					      exchange:'bitcoin,ethereum,monero,litecoin', // 交易所id
					     // interval:'m15',                   // k线单位 15分钟
					      // baseId:'tether',                  // 要买的币种
					      // quoteId:'united-states-dollar',   // 用什么币种买
					      // start:1565280000000,            // k线开始时间戳
					      // end:1565336472965,              // k线结束时间戳
					  }
					  uni.request({
					      url: 'https://api.coincap.io/v2/assets', 
					      method: 'GET', // 请求方法
						  data:requestData,
					      // data: {
					      //     key1: 'value1', // 参数键值对
					      //     key2: 'value2'
					      // },
					      success: (res) => {
					          console.log(res.data);
					      },
					      fail: (err) => {
					          console.error(err);
					      }
					  });

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
