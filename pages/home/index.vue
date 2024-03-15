<template>
	<view class="content">
		<uni-select></uni-select>
		<uni-swiper-dot :info="swiperImages" :current="current" :mode="mode" :dots-styles="dotsStyles">
			<swiper class="swiper-box" @change="change" autoplay="true" style="height: 180px;">
				<swiper-item v-for="(item ,index) in swiperImages" :key="index">
					<view class="swiper-item">
						<image :src="item.url" />
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<uni-grid-list :options="itemType" :show-border="false" :items="dataTopList"  :column-num="4"  @click="onClick"/>
		<home-money-list @loadingStatus="loadingStatus" ref="homeList" :items="dataList" />
		<!-- <home-list @loadingStatus="loadingStatus" ref="homeList" />-->
		<!-- <uni-load-more :status="status" :content-text="contentText" /> -->
	</view>
</template>

<script>
	import uniSelect from '@/components/uni-select/uni-select.vue';
	import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
	import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue';
    import uniGrid from '@/components/uni-grid/uni-grid.vue';
	import uniGridList from '@/components/uni-grid-list/uni-grid-list.vue';
	import homeMoneyList from '@/components/home-money-list.vue';
	import homeList from '@/components/home-list.vue';
	var baseData = require("@/common/p/base-data.js");
    var api = require('@/common/p/api.js');
	export default {
		components: {
			uniSelect,
			uniSwiperDot,
			uniGrid,
			uniGridList,
			homeList,
			homeMoneyList,
			uniLoadMore
		},
		data() {
			return {
				swiperImages: [
					{url: "../../static/images/home/home_top_banner1.png"},
					{url: '../../static/images/home/home_top_banner2.png'},
					{url: '../../static/images/home/home_top_banner3.png'}],

				current: 0,
				mode: 'default',
				dotsStyles: {						
					backgroundColor: 'rgba(255, 90, 95,0.3)',
					border: '1px rgba(255, 90, 95,0.3) solid',
					color: '#fff',
					selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
					selectedBorder: '1px rgba(255, 90, 95,0.9) solid',
					},
					dataTopList:[],
					dataList:[],
				itemType:[],
				status: 'loading',
				intervalId: null,
				contentText: {
					contentdown: '上拉加载更多',
					contentrefresh: '加载中',
					contentnomore: '没有更多了'},
				}
				
		},
		onLoad() {
			// var _topItems = baseData.homeTopListItems;
			// _topItems.forEach(e =>{
			// 	// var ig = e['image'];
			// 	// e['image'] = '../../static/images/' + ig;
			// });
			this.getData()
			// this.itemType = _topItems;
		},
		onShow() {
			// uni.setNavigationBarTitle({
			//     title: this.$t('tab').合约
			// });
			 this.startTimer();
		},
		onPullDownRefresh() {
			// this.$refs.homeList.pageNumber = 1;
			// this.$refs.homeList.loadData();
		},
		onReachBottom() {
			// if (this.status == 'noMore')return;
			// this.status = 'loading';
			
			// this.$refs.homeList.pageNumber = this.$refs.homeList.pageNumber + 1;
			// this.$refs.homeList.loadData();
		},
		onHide() {
		    this.stopTimer();
		  },
		
		methods: {
			fetchData() {
			     // 模拟请求数据的过程
			     setTimeout(() => {
				  this.getData()
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
				//var arr2 = ['BTC','ETH','EOS','HBC','LTC','XRP','BCH','ADA','TRX','BNB'];
				uni.request({
				        url:"https://api.taurusen.site/api/home/home/getBlineList",
				        success(res){
				            console.log(res)
							const { list } = res.data.data
						    that.dataTopList = that.filter(list,arr1)
							that.dataList = list
				          
				        },
				    })
			},
			filter(arr,data){
				let newData = [];
				data.map((x) => {
				   arr.map((k) => {
				     if (k.sname == x) {
				        var listing = {
				           ...k
				        };
				         newData.push(listing)
				        }
				    })
				})
				return newData
			},
			//筛选数据
			filterData(arr,data){
				let newData = [];
				data.map((x) => {
				   arr.map((k) => {
				     if (k.symbol == x) {
				        var listing = {
				           increPer:parseFloat(k.changePercent24Hr).toFixed(2),
						   nowPri:parseFloat(k.priceUsd).toFixed(4),
						   sname:k.symbol,
						   id:k.id,
						   vol:parseFloat(k.priceUsd).toFixed(4),
				        };
				         newData.push(listing)
				        }
				    })
				})
				return newData
			},
			change(e) {
				this.current = e.detail.current
			},
			loadingStatus(e){
				this.status = e;
			},
			onClick(e){
				var i = e.index;
				var item = this.itemType[i];
				uni.navigateTo({
					url:'home-list?t=' + item['text'] + '&id=' + item['type']
				})
			}
		}
	}
</script>

<style>
.swiper-item {
	display: flex;
	justify-content: center;
	align-items: center;
	height: 100%;
	background: #eee;
	color: #fff;
}

.swiper-item image {
	width: 100%;
	height: 100%;
}
	
.content {
	text-align: center;
	padding-top: 0px;
	padding-bottom: 56px;
}

</style>
