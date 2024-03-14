<template>
	<view>
		<view class="flex container">
			<view class="uni-left">
				<view class="text-xxxlg">
					62277.3
				</view>
				<view class="text-xmd">
					+0.87%
				</view>
			</view>
			<view class="uni-right flex">
				<view style="text-align: right;">
					<p>{{i18n.高}}：</p>
					<p>{{i18n.低}}：</p>
					<p>{{i18n.二十四小时}}：</p>
				</view>
				<view style="text-align: right;">
					<p>62677.0600</p>
					<p>62677.0600</p>
					<p>62677.0600</p>
				</view>
			</view>
		</view>
		<view class="head-nav">
			<view :class="navIndex==0?'activite':''" @click="checkIndex(0)">{{i18n.分时}}</view>
			<view :class="navIndex==1?'activite':''" @click="checkIndex(1)">{{i18n.五分钟}}</view>
			<view :class="navIndex==2?'activite':''" @click="checkIndex(2)">{{i18n.十五分钟}}</view>
			<view :class="navIndex==3?'activite':''" @click="checkIndex(3)">{{i18n.三十分钟}}</view>
			<view :class="navIndex==4?'activite':''" @click="checkIndex(4)">{{i18n.一小时}}</view>
			<view :class="navIndex==4?'activite':''" @click="checkIndex(5)">{{i18n.四小时}}</view>
			<view :class="navIndex==4?'activite':''" @click="checkIndex(6)">{{i18n.一天}}</view>
		</view>

		<!-- 内容切换 -->
		<view class="content" v-if="navIndex==0">
			<uni-echarts-kline :option="optionone" style="height: 400px;width: 100%;"/>
		</view>
		<view class="content" v-if="navIndex==1">
			我是选项2
		</view>
		<view class="content" v-if="navIndex==2">
			我是选项3
		</view>
		<view class="content" v-if="navIndex==3">
			我是选项4
		</view>
		<view class="content" v-if="navIndex==4">
			我是选项5
		</view>
		<view class="uni-bottom-item flex">
			<text class="bg-green flex bottom-btn" v-on:click="findBuy('up')">
				{{i18n.买涨}}
			</text>
			<text class="bg-red flex bottom-btn" v-on:click="findBuy('down')">
				{{i18n.买跌}}
			</text>
		</view>
		<view v-if="showPopup" class="mask" @click="togglePopup"></view>
        <view v-if="showPopup" class="popup">
			<view class="content">
				<view class="line1" v-on:click="close">
					<image src="../../static/images/dislikeicon_details@2x.png" mode="" style="width: 18px;height: 18px;padding:0 18px;"></image>
				</view>
				<view class="buy-con text-center">
					<view class="flex buy-line"><text class="line-l">{{i18n.币种}}：</text><text>买涨</text></view>
					<view class="flex buy-line"><text class="line-l">{{i18n.方向}}：</text><text>买涨</text></view>
					<view class="flex buy-line"><text class="line-l">{{i18n.杠杆}}：</text>
					<text>
						{{quantity}}x
					</text>
					<text>
						<button class="uni-minus-quantity" :disabled="quantity==50" @click="decrease">-</button>
					</text>
					<text>
						<button class="uni-add-quantity" :disabled="quantity==150" @click="increase">+</button>
					</text>
					</view>
					<view class="flex buy-line"><text class="line-l">{{i18n.价格}}：</text><text>买涨</text></view>
					<view class="flex buy-line"><text class="line-l">{{i18n.数量}}：</text><text><input type="number" class="buy-ipt" placeholder="请输入数量" maxlength="11"/></text></view>
					<view class="flex buy-line"><text class="line-l">{{i18n.止盈}}：</text><text><input type="number" class="buy-ipt" placeholder="默认无上限" maxlength="11"/></text>%</view>
					<view class="flex buy-line"><text class="line-l">{{i18n.止损}}：</text><text><input type="number" class="buy-ipt" placeholder="默认100" maxlength="11"/></text>%</view>
					<view class="flex buy-line"><text class="line-l">{{i18n.保证金}}：</text><text>0</text></view>
					<view class="flex buy-line"><text class="line-l">{{i18n.手续费}}：</text><text>0</text></view>
				</view>
			</view>
			<view class="btn-group flex">
					<view class="btn-item text-xmd bg-green" @click="subBuyUp" v-if="tagIndex=='up'">{{i18n.买涨}}</view>
					<view class="btn-item text-xmd bg-red" @click="subBuyDown" v-if="tagIndex=='down'">{{i18n.买跌}}</view>
			</view>
		</view>
	</view>

</template>

<script>
	import uniEchartsKline from '@/components/uni-echarts-kline/uni-echarts-kline.vue';
	import mokdata from '@/common/mokdata.js';
	export default {
		data() {
			return {
				mokdata,
				navIndex: 0,
				tagIndex:'',
				quantity: 50, //修改提交
				showPopup:false,
				mockdata:{
					categoryData:['20240302', '20240302', '20240302', '20240302'],
					values:['122','322','22','222','122'],
					volumes:['133','322','32','322','322']
				},
				option: {},
								optionone: {},
								optiontwo: {}

			}
		},
		computed: {
			    i18n (){
			      return this.$t('contract')
			    },	
		},
		onLoad() {
		
					// console.log(777777);
				},
				components: {
					uniEchartsKline
				},
				mounted() {
					this.logstatrt();
					this.logstatrtone();
					//this.logstatrttwo();
				},
		methods: {
			checkIndex(index) {
				console.log(index)
				this.navIndex = index;
			},
			logstatrt(){
				console.log("====")
			},
			//买涨起
			findBuy(tag){
				this.showPopup = !this.showPopup;
				this.tagIndex = tag
			},
			subBuyUp(){},
			//买跌
			findBuyDown(){},
			togglePopup(){
				this.showPopup = false
			},
			// calcContentHeight() {
			//       const headerHeight = this.$refs.header.offsetHeight
			// 	  console.log("headerHeight",headerHeight)
			//       const footerHeight = this.$refs.footer.offsetHeight
			//       const contentHeight = window.innerHeight - headerHeight - footerHeight
			//       this.$refs.content.style.height = contentHeight + 'px'
			//     },
			//杆杠
			handleInput(event) {
							const value = parseInt(event.target.value);
							if (!isNaN(value) && value >= 50) {
								this.quantity = value;
							} else {
								this.quantity = 50;
							}
						},
						increase() {
							this.quantity+=50;
						},
						decrease() {
							if (this.quantity > 50) {
								this.quantity-=50;
							}
						},
						close(){
							this.showPopup = false
						},
		splitData(rawData) {
			console.log("rawDatarawData",rawData)
				  let categoryData = [];
				  let values = [];
				  let volumes = [];
				  for (let i = 0; i < rawData.length; i++) {
					 // console.log("0000000",i)
					categoryData.push(rawData[i].splice(0, 1)[0]);
					values.push(rawData[i]);
					volumes.push([i, rawData[i][4], rawData[i][0] > rawData[i][1] ? 1 : -1]);
				  }
				  return {
					categoryData: categoryData,
					values: values,
					volumes: volumes
				  };
				},
			calculateMA(dayCount, data) {
				  var result = [];
				  for (var i = 0, len = data.values.length; i < len; i++) {
					if (i < dayCount) {
					  result.push('-');
					  continue;
					}
					var sum = 0;
					for (var j = 0; j < dayCount; j++) {
					  sum += data.values[i - j][1];
					}
					result.push(+(sum / dayCount).toFixed(2));
				  }
				  return result;
				},
				
			
						logstatrtone() {
							//console.log("cityData",mokdata)
							// $.get(ROOT_PATH + '/data/asset/data/stock-DJI.json', function (rawData) {
							//let data = cityData;
							let data = this.splitData(mokdata);
							// let data= rawData
							// })
							
							let upColor = '#00da3c';
							let downColor = '#ec0000';
							this.optionone = {
								backgroundColor: '#fff',
			title: [
			{
			  left: 'left',
			  show:false,
			  text: '股票K线图'
			},
			{
			  top: '65%',
			  left: 'left',
			  show:false,
			  text: '成交量'
			}
		  ],
		  animation: false,
		  legend: {
			left: 'center',
			show:false,
			data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
		  },
		  tooltip: {
			trigger: 'axis',
			// triggerOn:'click',
			 confine: true, 
			axisPointer: {
			  type: 'cross'
			},
			borderWidth: 1,
			borderColor: '#ccc',
			padding: 10,
			textStyle: {
			  color: '#000'
			},
			position: function (pos, params, el, elRect, size) {
				console.log("=====>>>>>修改提交")
			  const obj = {
				top: 10
			  };
			  obj[['left', 'right'][+(pos[0] < size.viewSize[0] / 2)]] = 30;
			  return obj;
			}
			// extraCssText: 'width: 170px'
		  },
		  axisPointer: {
			link: [
			  {
				xAxisIndex: 'all'
			  }
			],
			label: {
			  backgroundColor: '#777'
			}
		  },
		  tooltip: {
			trigger: 'axis',
			//triggerOn:'click',
			 confine: true, 
			 backgroundColor: 'rgba(0, 0, 0, 0.5)',
			 textStyle: {
			         color: '#FFF',
			         // fontFamily: 'Arial',
			         // fontSize: 14,
			     },
		  },
		  visualMap: {
			show: false,
			seriesIndex: 5,
			dimension: 2,
			pieces: [
			  {
				value: 1,
				color: downColor
			  },
			  {
				value: -1,
				color: upColor
			  }
			]
		  },
		  grid: [
			{
			  left: '10%',
			  right: '8%',
			  height: '50%'
			},
			{
			  left: '10%',
			  right: '8%',
			  top: '63%',
			  height: '16%'
			}
		  ],
		  xAxis: [
			{
			  type: 'category',
			  data: data.categoryData,
			  boundaryGap: false,
			  axisLine: { onZero: true },
			  axisTick: { show: true },
			  splitLine: { show: false },
			  axisLabel: { show: false },
			  min: 'dataMin',
			  max: 'dataMax',
			  
			  axisPointer: {
				z: 10000
			  }
			},
			{
			  type: 'category',
			  gridIndex: 1,
			  data: data.categoryData,
			  boundaryGap: false,
			  axisLine: { onZero: true },
			  axisTick: { show: true },
			  splitLine: { show: false },
			  axisLabel: { show: true },
			  axisLabel: {
			              color: '#000' // 设置颜色
			          },
			  min: 'dataMin',
			  max: 'dataMax'
			}
		  ],
		  yAxis: [
			{
			  scale: true,
			  splitArea: {
				show: true
			  },
			  axisLabel: {
				  insideLeft:50,
			              color: '#000' // 设置颜色
			          },
			},
			{
			  scale: true,
			  gridIndex: 1,
			  splitNumber: 2,
			  axisLabel: { show: false },
			  axisLine: { show: false },
			  axisTick: { show: false },
			  splitLine: { show: false }
			}
		  ],
		  dataZoom: [
			{
			  show:false,
			  type: 'inside',
			  moveOnMouseWheel:false,
			  preventDefaultMouseMove:false,
			  xAxisIndex: [0, 1],
			  start: 98,
			  end: 100,
			  zoomLock: false
			},
			{
			  show: false,
			  moveOnMouseWheel:false,
			  preventDefaultMouseMove:false,
			  xAxisIndex: [0, 1],
			  type: 'slider',
			  top: '85%',
			  start: 98,
			  end: 100,
			  zoomLock: false
			}
		  ],
		  series: [
			{
			  name: '日K',
			  type: 'candlestick',
			  data: data.values,
			  itemStyle: {
				color: upColor,
				color0: downColor,
				borderColor: undefined,
				borderColor0: undefined
			  },
			  tooltip: {
				//  triggerOn:'click',
				   confine: true, 
				// backgroundColor: 'rgba(0, 0, 0, 0.3)',
				formatter: function (param) {
				 console.log("====>>>>>param",param)
				  param = param[0];
				  return [
					'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
					'Open: ' + param.data[0] + '<br/>',
					'Close: ' + param.data[1] + '<br/>',
					'Lowest: ' + param.data[2] + '<br/>',
					'Highest: ' + param.data[3] + '<br/>'
				  ].join('');
				}
			  },
			  markPoint: {
				label: {
				  formatter: function (param) {
					return param != null ? Math.round(param.value) + '' : '';
				  }
				},
				data: [
				  {
					name: 'highest value',
					type: 'max',
					valueDim: 'highest',
					itemStyle: {
					  color: 'red'
					}
				  },
				  {
					name: 'lowest value',
					type: 'min',
					valueDim: 'lowest',
				  },
				  {
					name: 'average value on close',
					type: 'average',
					valueDim: 'close',
					itemStyle: {
					  color: 'purple'
					}
				  }
				],
				tooltip: {
				//	triggerOn:'click',
					 confine: true, 
					// backgroundColor: 'rgba(0, 0, 0, 0.3)',
				  formatter: function (param) {
					console.log("====>>param",param)
					return param.name + '<br>' + (param.data.coord || '');
				  }
				}
			  },
			  markLine: {
				symbol: ['none', 'none'],
				data: [
				  [
					{
					  name: '从最高到最低',
					  type: 'min',
					  valueDim: 'lowest',
					  symbol: 'circle',
					  symbolSize: 10,
					  label: {
						show: false
					  },
					  emphasis: {
						label: {
						  show: false
						}
					  },
					  itemStyle: {
						color: 'red'
					  }
					},
					{
					  type: 'max',
					  valueDim: 'highest',
					  symbol: 'circle',
					  symbolSize: 10,
					  label: {
						show: false
					  },
					  emphasis: {
						label: {
						  show: false
						}
					  },
					}
				  ],
				  {
					name: '关闭时的最小线',
					type: 'min',
					valueDim: 'close'
				  },
				  {
					name: '关闭时的最大线',
					type: 'max',
					valueDim: 'close'
				  }
				]
			  }
			},
			{
			  name: 'MA5',
			  type: 'line',
			  data: this.calculateMA(5, data),
			  smooth: true,
			  showSymbol: false,
			  lineStyle: {
				opacity: 0.5
			  }
			},
			{
			  name: 'MA10',
			  type: 'line',
			  data: this.calculateMA(10, data),
			  smooth: true,
			  showSymbol: false,
			  lineStyle: {
				opacity: 0.5
			  }
			},
			{
			  name: 'MA20',
			  type: 'line',
			  data: this.calculateMA(20, data),
			  smooth: true,
			  showSymbol: false,
			  lineStyle: {
				opacity: 0.5
			  }
			},
			{
			  name: 'MA30',
			  type: 'line',
			  data: this.calculateMA(30, data),
			  smooth: true,
			  showSymbol: false,
			  lineStyle: {
				opacity: 0.5
			  }
			},
			{
			  name: '成交量',
			  type: 'bar',
			  xAxisIndex: 1,
			  yAxisIndex: 1,
			  data: data.volumes
			}
		  ]
		}
						},
		}
	}
</script>

<style scoped>
	.container{
		padding: 20px 16px;
		justify-content: space-between;
	}
	.uni-left{
		color:#3c3;
	}
	.text-xxxlg{
		font-size:32px
	}
	.head-nav {
		/* margin: 20rpx auto; */
		padding: 16rpx 16px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		border-top: 1px solid #eee;
		border-bottom: 1px solid #eee
		/* color: #CCCCCC; */
	}

	.activite {
		color: #008fff;
	}

	.head-nav>view {
		padding-bottom: 10rpx;
	}

	.content {
		/* background: #008000; */
		width: 100%;
		height: 100%;
	}
	.viewimg {
			height: 100%;
			/* background: #d1e9e9; */
}
.echarts-tooltip {
  z-index: 99999;
}
.gray-box {
  z-index: 1;
}
.uni-bottom-item{
	position: fixed;
	    left: 0;
	    right: 0;
	    bottom: 0;
	    padding: 8px 16px; 
	    background: #fff;
	    color: #fff;
	    border-top: 1px solid #eee;
		font-size: 16px;
		justify-content: space-between;
}
.bottom-btn{
	width: 47%;
	    height: 40px;
	    border-radius: 5px;
}
/* /弹窗效果 */
	.popup {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		background-color: #fff;
		// padding: 20rpx;
		box-sizing: border-box;
		z-index: 999;
	}
 
	/* 遮罩层 */
	.mask {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		z-index: 888;
	}
 
	/* 弹窗内容 */
	.content {
		.line1 {
			text-align: right;
			/* background-color:#6ea8e7; */
			/* position: absolute;
			    top: 0.266667rem;
			    right: 0.266667rem;
			    font-size: .6rem;
			    padding: 0.133333rem; 
			text-align: center;*/
			padding-top: 20rpx;
		}
 
		.line2 {
			padding: 20rpx;
			// border-bottom: 1px solid black;
 
			view {
				margin-bottom: 10rpx;
			}
		}
	}
 
	/* 按钮样式 */
	.btn-group {
		padding-top: 12px;
		text-align: center;
	}
	.btn-item{
		width: 82%;
		    height: 40px;
			line-height: 40px;
		    border-radius: 5px;
		    border: none;
		    box-shadow: none;
		    color: #f1f1f1;
	}
	.buy-line{
		margin: 8px 0;
		    -ms-flex-pack: start;
		    justify-content: flex-start;
		    font-size: 14px;
		    /* line-height: 14px; */
	}
	.line-l{
		width: 33%;
		text-align: right;
		margin-right: 12px;
	}
	.uni-minus-quantity, .uni-add-quantity{
		/* width: 16px; */
		    height: 18px;
		    line-height: 0;
		    text-align: center;
		    /* border: 1px solid #008fff; */
		    border-radius: 5px;
		    color: #008fff;
		    font-size: 18px;
		    margin-left: 12px;
			padding: 10px;
		    font-weight: 700;
	}
	.buy-ipt{
		/* width: 22px; */
		  padding:4px 12px;
		    /* line-height: 20px; */
		    background: transparent;
		    border: 1px solid #ccc;
		    border-radius: 5px;
		    color: #333;
		    font-size: 14px;
	}
</style>
