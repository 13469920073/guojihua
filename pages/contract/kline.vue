<template>
	<view>
		<view class="head-nav">
			<view :class="navIndex==0?'activite':''" @click="checkIndex(0)">分时</view>
			<view :class="navIndex==1?'activite':''" @click="checkIndex(1)">5分钟</view>
			<view :class="navIndex==2?'activite':''" @click="checkIndex(2)">15分钟</view>
			<view :class="navIndex==3?'activite':''" @click="checkIndex(3)">30分钟</view>
			<view :class="navIndex==4?'activite':''" @click="checkIndex(4)">1小时</view>
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
		onLoad() {
					// console.log(777777);
				},
				components: {
					uniEchartsKline
				},
				mounted() {
					this.logstatrt();
					this.logstatrtone();
					this.logstatrttwo();
				},
		methods: {
			checkIndex(index) {
				console.log(index)
				this.navIndex = index;
			},
			logstatrt(){
				console.log("====")
			},
		splitData(rawData) {
			console.log("rawDatarawData",rawData)
				  let categoryData = [];
				  let values = [];
				  let volumes = [];
				  for (let i = 0; i < rawData.length; i++) {
					  console.log("0000000",i)
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
			triggerOn:'click',
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
			trigger: 'axis'
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
			  min: 'dataMin',
			  max: 'dataMax'
			}
		  ],
		  yAxis: [
			{
			  scale: true,
			  splitArea: {
				show: true
			  }
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
			  type: 'inside',
			  xAxisIndex: [0, 1],
			  start: 98,
			  end: 100
			},
			{
			  show: true,
			  xAxisIndex: [0, 1],
			  type: 'slider',
			  top: '85%',
			  start: 98,
			  end: 100
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
				formatter: function (param) {
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
				  formatter: function (param) {
					return param.name + '<br>' + (param.data.coord || '');
				  }
				}
			  },
			  markLine: {
				symbol: ['none', 'none'],
				data: [
				  [
					{
					  name: 'from lowest to highest',
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
					name: 'min line on close',
					type: 'min',
					valueDim: 'close'
				  },
				  {
					name: 'max line on close',
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
						logstatrttwo() {
							var m2R2Data = [{
									value: 335,
									value1: 234,
									legendname: 'Ⅰ类',
									name: "Ⅰ类",
									itemStyle: {
										color: "#8d7fec"
									}
								},
								{
									value: 310,
									value1: 314,
									legendname: 'Ⅱ类',
									name: "Ⅱ类",
									itemStyle: {
										color: "#5085f2"
									}
								},
								{
									value: 234,
									value1: 235,
									legendname: 'Ⅲ类',
									name: "Ⅲ类",
									itemStyle: {
										color: "#e75fc3"
									}
								},
								{
									value: 154,
									value1: 213,
									legendname: 'Ⅳ类',
									name: "Ⅳ类",
									itemStyle: {
										color: "#f87be2"
									}
								},
								{
									value: 335,
									value1: 321,
									legendname: 'Ⅴ类',
									name: "Ⅴ类",
									itemStyle: {
										color: "#f2719a"
									}
								},
			 
							];
			 
							this.optiontwo = {
								title: [{
										text: '全网调控情况',
										textStyle: {
											fontSize: 16,
											color: "black"
										},
										left: "35%"
									},
									{
										text: '全网均温',
										subtext: 44.5 + '℃',
										textStyle: {
											fontSize: 15,
											color: "black"
										},
										subtextStyle: {
											fontSize: 20,
											color: 'black'
										},
										textAlign: "center",
										x: '40%',
										y: '44%',
									}
								],
								tooltip: {
									trigger: 'item',
									formatter: function(parms) {
										var str = parms.seriesName + "</br>" +
											parms.marker + "" + parms.data.legendname + "</br>" +
											"当前温度：" + parms.data.value + "</br>" +
											"目标温度：" + parms.data.value1 + "</br>" +
											"占比：" + parms.percent + "%";
										return str;
									}
								},
								legend: {
									type: "scroll",
									orient: 'vertical',
									left: '80%',
									align: 'left',
									top: 'middle',
									textStyle: {
										color: '#8C8C8C'
									},
			 
								},
								series: [{
									name: '全网调控情况',
									type: 'pie',
									center: ['40%', '50%'],
									radius: ['40%', '65%'],
									clockwise: false, //饼图的扇区是否是顺时针排布
									avoidLabelOverlap: false,
									itemStyle: { //图形样式
										normal: {
											borderColor: '#ffffff',
											borderWidth: 1,
										},
									},
									label: {
										normal: {
											show: true,
											position: 'outter',
											formatter: function(parms) {
												return parms.data.legendname
											}
										}
									},
									labelLine: {
										normal: {
											length: 15,
											length2: 13,
											smooth: true,
										}
									},
									data: m2R2Data
								}]
							};
						},
						/**
						 * 更新数据
						 */
						updateClick() {
							this.option.series=[{
										name: '人保',
										type: 'bar',
										data: [10, 10, 10, 10, 10],
										// "barWidth": "30",
										itemStyle: {
											normal: {
												color: {
													type: 'linear',
													x: 0.5,
													y: 0.5,
													r: 0.5,
													colorStops: [{
															offset: 0,
															color: '#00FFE3' // 0% 处的颜色
														},
														{
															offset: 1,
															color: '#4693EC' // 100% 处的颜色
														}
													],
													globalCoord: false // 缺省为 false
												}
											}
										}
										// "barGap": "0.2"
									},
									{
										name: '太保',
										type: 'bar',
										data: [16, 14.8, 14.1, 15, 16.3],
			 
										color: {
											type: 'linear',
											x: 0.5,
											y: 0.5,
											r: 0.5,
											colorStops: [{
													offset: 0,
													color: '#248ff7' // 0% 处的颜色
												},
												{
													offset: 1,
													color: '#6851f1' // 100% 处的颜色
												}
											],
											globalCoord: false // 缺省为 false
										}
									},
									{
										name: '平安',
										type: 'bar',
										data: [10.2, 9.2, 9.1, 9.85, 8.9],
										color: {
											type: 'linear',
											x: 0.5,
											y: 0.5,
											r: 0.5,
											colorStops: [{
													offset: 0,
													color: '#fccb05' // 0% 处的颜色
												},
												{
													offset: 1,
													color: '#f5804d' // 100% 处的颜色
												}
											],
											globalCoord: false // 缺省为 false
										}
									},
									{
										name: '人保增速',
										type: 'line',
										yAxisIndex: 1,
			 
										data: [0, 6.01, 5.26, 1.48],
										lineStyle: {
											normal: {
												width: 2
											}
										},
										itemStyle: {
											normal: {
												color: '#86d370'
											}
										},
										smooth: true
									},
									{
										name: '太保增速',
										type: 'line',
										yAxisIndex: 1,
			 
										data: [0, -4.73, 6.38, 8.67],
										lineStyle: {
											normal: {
												width: 2
											}
										},
										itemStyle: {
											normal: {
												color: '#3496f8'
											}
										},
										smooth: true
									},
									{
										name: '平安增速',
										type: 'line',
										yAxisIndex: 1,
			 
										data: [0, -1.09, 8.24, -9.64],
										lineStyle: {
											normal: {
												width: 2
											}
										},
										itemStyle: {
											normal: {
												color: '#fbc30d'
											}
										},
										smooth: true
									}
								]
							// this.option = {
							// 	notMerge: true, // 自定义变量：true代表不合并数据，比如从折线图变为柱形图则需设置为true；false或不写代表合并
							// 	xAxis: {
							// 		type: 'category',
							// 		data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
							// 	},
							// 	yAxis: {
							// 		type: 'value'
							// 	},
							// 	series: [{
							// 		data: [120, 200, 150, 80, 70, 110, 130],
							// 		type: 'bar',
							// 		showBackground: true,
							// 		backgroundStyle: {
							// 			color: 'rgba(220, 220, 220, 0.8)'
							// 		}
							// 	}]
							// };
						}

		}
	}
</script>

<style scoped>
	.head-nav {
		margin: 20rpx auto;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #CCCCCC;
	}

	.activite {
		color: #04c9c3;
	}

	.head-nav>view {
		padding-bottom: 10rpx;
	}

	.content {
		/* background: #008000; */
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
</style>
