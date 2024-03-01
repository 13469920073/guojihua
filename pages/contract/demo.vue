<!DOCTYPE html>
<html lang="zh-CN" style="height: 100%">
<head>
  <meta charset="utf-8">
</head>
<body style="height: 100%; margin: 0">
  <div id="container" style="height: 100%"></div>

  <script type="text/javascript" src="https://fastly.jsdelivr.net/npm/jquery"></script>
  <script type="text/javascript" src="https://fastly.jsdelivr.net/npm/echarts@5.4.0/dist/echarts.min.js"></script>

  <script type="text/javascript">
    var dom = document.getElementById('container');
    var myChart = echarts.init(dom, 'dark', {
      renderer: 'canvas',
      useDirtyRect: false
    });
    var app = {};
    var ROOT_PATH = 'https://echarts.apache.org/examples';
    var option;

    const upColor = '#00da3c';
	const downColor = '#ec0000';
	function splitData(rawData) {
	  let categoryData = [];
	  let values = [];
	  let volumes = [];
	  for (let i = 0; i < rawData.length; i++) {
		categoryData.push(rawData[i].splice(0, 1)[0]);
		values.push(rawData[i]);
		volumes.push([i, rawData[i][4], rawData[i][0] > rawData[i][1] ? 1 : -1]);
	  }
	  return {
		categoryData: categoryData,
		values: values,
		volumes: volumes
	  };
	}
	function calculateMA(dayCount, data) {
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
	}
	$.get(ROOT_PATH + '/data/asset/data/stock-DJI.json', function (rawData) {
	  var data = splitData(rawData);
	  myChart.setOption(
		(option = {
			title: [
			{
			  left: 'left',
			  text: '股票K线图'
			},
			{
			  top: '65%',
			  left: 'left',
			  text: '成交量'
			}
		  ],
		  animation: false,
		  legend: {
			left: 'center',
			data: ['日K', 'MA5', 'MA10', 'MA20', 'MA30']
		  },
		  tooltip: {
			trigger: 'axis',
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
				z: 100
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
			  data: calculateMA(5, data),
			  smooth: true,
			  showSymbol: false,
			  lineStyle: {
				opacity: 0.5
			  }
			},
			{
			  name: 'MA10',
			  type: 'line',
			  data: calculateMA(10, data),
			  smooth: true,
			  showSymbol: false,
			  lineStyle: {
				opacity: 0.5
			  }
			},
			{
			  name: 'MA20',
			  type: 'line',
			  data: calculateMA(20, data),
			  smooth: true,
			  showSymbol: false,
			  lineStyle: {
				opacity: 0.5
			  }
			},
			{
			  name: 'MA30',
			  type: 'line',
			  data: calculateMA(30, data),
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
		}),
		true
	  );
	});

    if (option && typeof option === 'object') {
      myChart.setOption(option);
    }

    window.addEventListener('resize', myChart.resize);
  </script>
</body>
</html>