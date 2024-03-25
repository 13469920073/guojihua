<template>
  <view>
    <view class="flex container">
      <view class="uni-left">
        <view class="text-xxxlg" :style="{ color: formData.zf < 0 ? '#f66' : '#3c3' }">
          {{ formData.price ? formData.price : '0' }}
        </view>
        <view class="text-xmd" :style="{ color: formData.zf < 0 ? '#f66' : '#3c3' }">
          {{ formData.zf ? formData.zf : '0' }}%
        </view>
      </view>
      <view class="uni-right flex">
        <view style="text-align: right;">
          <p>{{ i18n.高 }}：</p>
          <p>{{ i18n.低 }}：</p>
          <p>{{ i18n.二十四小时 }}：</p>
        </view>
        <view style="text-align: right;">
          <p>{{ formData.ph ? formData.ph : '0' }}</p>
          <p>{{ formData.pl ? formData.pl : '0' }}</p>
          <p>{{ formData.vol ? formData.vol : '0' }}</p>
        </view>
      </view>
    </view>
    <view class="head-nav">
      <view :class="navIndex == '1M' ? 'activite' : ''" @click="checkIndex('1M')">{{ i18n.分时 }}</view>
      <view :class="navIndex == '5M' ? 'activite' : ''" @click="checkIndex('5M')">{{ i18n.五分钟 }}</view>
      <view :class="navIndex == '15M' ? 'activite' : ''" @click="checkIndex('15M')">{{ i18n.十五分钟 }}</view>
      <view :class="navIndex == '30M' ? 'activite' : ''" @click="checkIndex('30M')">{{ i18n.三十分钟 }}</view>
      <view :class="navIndex == '1H' ? 'activite' : ''" @click="checkIndex('1H')">{{ i18n.一小时 }}</view>
      <view :class="navIndex == '4H' ? 'activite' : ''" @click="checkIndex('4H')">{{ i18n.四小时 }}</view>
      <view :class="navIndex == 'D' ? 'activite' : ''" @click="checkIndex('D')">{{ i18n.一天 }}</view>
    </view>

    <!-- 内容切换 -->
    <view class="content">
      <uni-echarts-kline :option="optionone" style="height: 400px;width: 100%;" />
    </view>
    <!-- <view class="content" v-if="navIndex==1">
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
		</view> -->
    <view class="uni-bottom-item flex">
      <text class="bg-green flex bottom-btn" v-on:click="findBuy('1')">
        {{ i18n.买涨 }}
      </text>
      <text class="bg-red flex bottom-btn" v-on:click="findBuy('2')">
        {{ i18n.买跌 }}
      </text>
    </view>
    <view v-if="showPopup" class="mask" @click="togglePopup"></view>
    <view v-if="showPopup" class="popup">
      <view class="content">
        <view class="line1" v-on:click="close">
          <image src="../../static/images/dislikeicon_details@2x.png" mode=""
            style="width: 18px;height: 18px;padding:0 18px;"></image>
        </view>
        <view class="buy-con text-center">
          <view class="flex buy-line">
            <text class="line-l">{{ i18n.币种 }}：</text>
            <text>{{ form.type }}/USDT</text>
          </view>
          <view class="flex buy-line">
            <text class="line-l">{{ i18n.方向 }}：</text>
            <text style="color:#3c3" v-if="form.holdType == '1'">{{ i18n.买涨 }}</text>
            <text style="color:#f66" v-if="form.holdType == '2'">{{ i18n.买跌 }}</text>
          </view>
          <view class="flex buy-line"><text class="line-l">{{ i18n.杠杆 }}：</text>
            <text>
              {{ form.times }}x
            </text>
            <text>
              <button class="uni-minus-quantity" :disabled="form.times == 50" @click="decrease">-</button>
            </text>
            <text>
              <button class="uni-add-quantity" :disabled="form.times == 150" @click="increase">+</button>
            </text>
          </view>
          <view class="flex buy-line"><text class="line-l">{{ i18n.价格 }}：</text><text>{{ formData.price }}</text></view>
          <view class="flex buy-line"><text class="line-l">{{ i18n.数量 }}：</text><text><input type="number"
                @input="onInput" v-model="form.holdNum" class="buy-ipt" :placeholder="i18n.请输入数量"
                maxlength="11" /></text></view>
          <view class="flex buy-line"><text class="line-l">{{ i18n.止盈 }}：</text><text><input type="number"
                v-model="form.profitRatio" class="buy-ipt" :placeholder="i18n.默认无上限" maxlength="11" /></text>%</view>
          <view class="flex buy-line"><text class="line-l">{{ i18n.止损 }}：
            </text>
            <text>
              <input type="number" v-model="form.stopRatio" class="buy-ipt" min="0" max="100" :placeholder="i18n.默认100"
                maxlength="3" @input="onInput2" />
            </text>%
          </view>
          <view class="flex buy-line"><text class="line-l">{{ i18n.保证金 }}：</text><text>{{ form.deposit ? form.deposit :
          '0' }}</text></view>
          <view class="flex buy-line"><text class="line-l">{{ i18n.手续费 }}：</text><text>{{ form.premiumNum ?
          form.premiumNum : '0' }}</text></view>
        </view>
      </view>
      <view class="btn-group flex">
        <view class="btn-item text-xmd bg-green" @click="subBuyUp" v-if="tagIndex == '1'">{{ i18n.买涨 }}</view>
        <view class="btn-item text-xmd bg-red" @click="subBuyUp" v-if="tagIndex == '2'">{{ i18n.买跌 }}</view>
      </view>
    </view>
  </view>

</template>

<script>
import uniEchartsKline from '@/components/uni-echarts-kline/uni-echarts-kline.vue';
import mokdata from '@/common/mokdata.js';
var api = require('@/common/p/api.js');
export default {
  components: {
    uniEchartsKline
  },
  data() {
    return {
      mokdata,
      navIndex: '5M',
      tagIndex: '',
      quantity: 50, //修改提交
      showPopup: false,
      coinType: '',
      dataType: '',
      datalist: [],
      formData: {},
      formItem: {},
      intervalId: null,
      option: {},
      optionone: {},
      optiontwo: {},
      form: {
        deposit: '',
        holdNum: '',
        holdPrice: '',
        holdType: '',
        premiumNum: '',
        profitRatio: '',
        stopRatio: '',
        times: 50,
        tradePrice: '',
        type: ''
      }


    }
  },
  computed: {
    i18n() {
      return this.$t('contract')
    },
  },
  onShow() {
    // console.log("====",that.formData)
    // uni.setNavigationBarTitle({
    //     title: this.$t('tab').合约
    // });
    this.startTimer();
  },
  onLoad(opt) {
    // this.title = opt['id'];
    this.coinType = opt['coinType'];
    uni.setNavigationBarTitle({ title: opt['coinType'] + '/USDT' });
    console.log(777777, opt);
    if (this.coinType == 'TON') {
      this.getTonData();
      this.getData()
    } else {
      this.getTopData();
      this.getData()
    }

  },

  mounted() {
    //this.logstatrt();


    //	this.logstatrtone();
    //this.logstatrttwo();
  },
  onHide() {
    this.stopTimer()
  },
  destroyed() {
    this.stopTimer()
  },
  beforeDestroy() {
    this.stopTimer()
  },
  onUnload() {
    this.stopTimer()
  },
  methods: {
    fetchData() {
      // 模拟请求数据的过程
      if (this.intervalId !== null) {
        setTimeout(() => {
          if (this.coinType == 'TON') {
            this.getTonData()
          } else {
            this.getTopData()
          }
        }, 1000);
      }
    },
    startTimer() {
      this.intervalId = setInterval(this.fetchData, 3000); // 每3秒请求一次数据
    },
    stopTimer() {
      if (this.intervalId) {
        window.clearInterval(this.intervalId);
        this.intervalId = null;
      }
    },
    //获取ton价格
    getTonData() {
      let that = this
      let requestData = {
        'fsym': 'Toncoin',
        'tsym': 'USDT',
        'limit': '24',
        'aggregate': 3,
        'e': 'CCCAGG'
      }
      api.get(api.url.ratebody, {}, res => {
        let d = res.data
        let leng = res.data.tonLine
        let data = leng[leng.length - 1]

        that.$set(that.formData, 'price', d.tonRate); //最新价
        that.$set(that.formData, 'ph', data.higPrice);  //最高价
        that.$set(that.formData, 'pl', data.lowPrice);  //低价
        that.$set(that.formData, 'vol', d.twentyfour);
        that.$set(that.formData, 'zf', d.riseType == 'down' ? '-0.01' : '0.01');
        that.premiumCount()

      }, error => {
        uni.hideLoading();
        uni.showToast({
          title: error,
          icon: "none"
        })
      })
      // uni.request({
      // 	    url: 'https://min-api.cryptocompare.com/data/price',
      // 	    method: 'GET',
      // 	   data:  {
      //           fsym:'Toncoin',
      //           tsyms:'USDT'
      //           },
      // 	    success: (res1) => {
      // 			that.$set(this.formData, 'price', res1.data.USDT);
      // 			//that.formData.price=res1.data.USDT

      // 			console.log('GETthat.formData.price：', that.formData.price);
      // 			},
      // 		fail: (err) => {
      // 		   console.error('GET请求失败：', err);
      // 			}
      // 		});
      // uni.request({
      //   url: 'https://min-api.cryptocompare.com/data/histohour',
      //   method: 'GET',
      //   data: requestData,
      //   success: (res) => {
      //     let d = res.data.Data
      //     let leng = res.data.Data.length
      //     let data = d[d.length - 1]
      //     console.log("data",)
      //     that.$set(that.formData, 'price', data.close);
      //     that.$set(that.formData, 'ph', data.high);
      //     that.$set(that.formData, 'pl', data.low);
      //     that.$set(that.formData, 'vol', data.volumeto);
      //     //计算涨跌浮
      //     let closeOld = d[d.length - 2].close //上一次开盘价价格
      //     let close = data.close //当前的开盘价
      //     let total = closeOld - close
      //     that.formData.zf = total.toFixed(4)
      //     //let total = (closeOld - close) * closeOld
      //     that.premiumCount()
      //     console.log("total", total)

      //   },
      //   fail: (err) => {
      //     console.error('GET请求失败：', err);
      //   }
      // });
    },
    // setTon() {

    // },

    checkIndex(index) {
      console.log(index)
      this.navIndex = index;
      this.getData()
    },
    //onInput数量
    onInput(e) {
      console.log('输入的内容是：' + e.target.value);
      this.premiumCount()
    },
    onInput2(event) {
      let value = event.target.value;
      if (value > 100) {
        value = 100;
      }
      this.$nextTick(function () {
        this.form.stopRatio = value
      })
    },
    logstatrt() {
      console.log("====", this.formData)
      api.post(api.url.settingtoncoin, param, res => {
        console.log("res>>>>>>: ", res.data);


      }, error => {

        uni.showToast({
          title: error,
          icon: "none"
        })
      })
    },
    //买涨起
    findBuy(tag) {
      var s = uni.getStorageSync('loginuserinfo');
      console.log("===>>>", s)
      if (!s) {
        uni.navigateTo({
          url: "/pages/login/login"
        })
      }
      //判断是否登录
      this.form.type = this.coinType;
      this.form.holdType = tag;
      this.form.holdPrice = this.formData.price;
      this.showPopup = !this.showPopup;
      this.tagIndex = tag
    },
    subBuyUp() {
      let that = this
      if (!this.form.holdNum) {
        uni.showToast({
          title: this.i18n.请输入数量,
          icon: "none"
        }); return;
      }
      if (!this.form.profitRatio) {
        this.form.profitRatio = 0
        // uni.showToast({
        //   title: this.i18n.请输入止盈率,
        //   icon: "none"
        // }); return;
      }
      if (!this.form.stopRatio) {
        this.form.stopRatio = 100
        // uni.showToast({
        //   title: this.i18n.请输入止损率,
        //   icon: "none"
        // }); return;
      }
      let param = {
        ...this.form
      }
      param.profitRatio = parseInt(param.profitRatio)
      param.stopRatio = parseInt(param.stopRatio)
      api.post(api.url.createtrade, param, res => {
        console.log("res>>>>>>: ", res.data);
        uni.hideLoading();
        uni.showToast({
          title: this.$t('tip').成功,
          success: function (res) {
            setTimeout(function () {
              that.showPopup = false
              uni.navigateTo({
                url: "/pages/me/position"
              })
              that.resetForm() //表单重置
            }, 500);
          }
        })

      }, error => {
        uni.hideLoading();
        uni.showToast({
          title: error,
          icon: "none"
        })
      })
    },
    //买跌
    findBuyDown() { },
    togglePopup() {
      this.showPopup = false
    },

    getTopData() {
      var that = this
      let param = {
        symbol: this.coinType,
        type: this.navIndex,
        tm: 1
      }
      uni.request({
        url: "https://api.taurusen.site/api/shares/market/getKlineOne",
        method: 'GET',
        data: param,
        success(res) {
          that.formData = res.data.data.data
          that.formItem = res.data.data.item
          console.log("成功==that.formData=》》", that.formData)
          that.premiumCount()
          // const { data } = res.data
          // datalist = res.data.data
          // that.logstatrtone(datalist)
        }
      })
    },
    getData() {
      uni.showLoading({
        title: this.$t('tip').加载中,
        mask: true
      });
      var datalist = []
      var that = this
      let param = {
        sid: this.coinType == 'TON' ? 'HBC' : this.coinType,
        type: this.navIndex
      }
      uni.request({
        url: "https://api.taurusen.site/api/shares/market/getKlineList",
        method: 'GET',
        data: param,
        success(res) {
          const { data } = res.data
          datalist = res.data.data
          that.logstatrtone(datalist)
          uni.hideLoading();
        }
      })

    },

    logstatrtone(val) {
      let data = this.splitData(val);
      let upColor = '#00da3c';
      let downColor = '#ec0000';
      this.optionone = {
        backgroundColor: '#fff',
        title: [
          {
            left: 'left',
            show: false,
            text: '股票K线图'
          },
          {
            top: '65%',
            left: 'left',
            show: false,
            text: '成交量'
          }
        ],
        animation: false,
        legend: {
          left: 'center',
          show: false,
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
          formatter: function (param) {
            console.log("====>>>>>param", param)
            param = param[0];
            console.log("====>>>>>param", param)
            return [
              param.name + '<hr size=1 style="margin: 3px 0">',
              '开盘价: ' + param.data[0] + '<br/>',
              '收盘价: ' + param.data[1] + '<br/>',
              '最高价: ' + param.data[2] + '<br/>',
              '最低价: ' + param.data[3] + '<br/>',
              '成交价: ' + param.data[4] + '<br/>'
            ].join('');
          }
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
              insideLeft: 50,
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
            show: false,
            type: 'inside',
            moveOnMouseWheel: false,
            preventDefaultMouseMove: false,
            xAxisIndex: [0, 1],
            start: 50,
            end: 100,
            zoomLock: false
          },
          {
            show: false,
            moveOnMouseWheel: false,
            preventDefaultMouseMove: false,
            xAxisIndex: [0, 1],
            type: 'slider',
            top: '85%',
            start: 50,
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
                console.log("===2222=>>>>>param", param)
                param = param[0];
                return [
                  // 'Date: ' + param.name + '<hr size=1 style="margin: 3px 0">',
                  // '开盘价: ' + param.data[0] + '<br/>',
                  // 'Close: ' + param.data[1] + '<br/>',
                  // 'Lowest: ' + param.data[2] + '<br/>',
                  // 'Highest: ' + param.data[3] + '<br/>'
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
                  name: '11111',
                  type: 'max',
                  valueDim: 'highest',
                  itemStyle: {
                    color: 'red'
                  }
                },
                {
                  name: '22222',
                  type: 'min',
                  valueDim: 'lowest',
                },
                {
                  name: '33333',
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
                show: false,
                // backgroundColor: 'rgba(0, 0, 0, 0.3)',
                formatter: function (param) {
                  console.log("====>>param", param)
                  //return param.name + '<br>' + (param.data.coord || '');
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
    //表单重置
    resetForm() {
      this.form.deposit = '';
      this.form.holdNum = '';
      this.form.profitRatio = '';
      this.form.holdPrice = '';
      this.form.holdType = '';
      this.form.premiumNum = '';
      this.form.stopRatio = '';
      this.form.times = 50;
      this.form.tradePrice = '';
      this.form.type = '';
    },
    // calcContentHeight() {
    //       const headerHeight = this.$refs.header.offsetHeight
    // 	  console.log("headerHeight",headerHeight)
    //       const footerHeight = this.$refs.footer.offsetHeight
    //       const contentHeight = window.innerHeight - headerHeight - footerHeight
    //       this.$refs.content.style.height = contentHeight + 'px'
    //     },
    //杆杠
    //计算保证金和手续费
    premiumCount() {
      console.log("计算", this.form)
      if (this.form.holdNum) {
        var num1 = (this.formData.price / this.form.times) * this.form.holdNum
        var num2 = (this.formData.price / this.form.times) / (33.3333 / this.form.holdNum)
        this.form.deposit = num1.toFixed(4); //保证金
        this.form.premiumNum = num2.toFixed(4); //手续费
      }

    },
    handleInput(event) {
      const value = parseInt(event.target.value);
      if (!isNaN(value) && value >= 50) {
        this.form.times = value;
      } else {
        this.form.times = 50;
      }
    },
    increase() {
      this.form.times += 50;
      this.premiumCount()
    },
    decrease() {
      if (this.form.times > 50) {
        this.form.times = 50;
      }
      this.premiumCount()
    },
    close() {
      this.showPopup = false
      this.resetForm()
    },
    splitData(rawData) {
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

  }
}
</script>

<style scoped>
.container {
  padding: 20px 16px;
  justify-content: space-between;
}

.uni-left {
  color: #3c3;
}

.text-xxxlg {
  font-size: 32px
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

.uni-bottom-item {
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

.bottom-btn {
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
  /* padding: 20rpx; */
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
    /* border-bottom: 1px solid black; */

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

.btn-item {
  width: 82%;
  height: 40px;
  line-height: 40px;
  border-radius: 5px;
  border: none;
  box-shadow: none;
  color: #f1f1f1;
}

.buy-line {
  margin: 8px 0;
  -ms-flex-pack: start;
  justify-content: flex-start;
  font-size: 14px;
  /* line-height: 14px; */
}

.line-l {
  width: 33%;
  text-align: right;
  margin-right: 12px;
}

.uni-minus-quantity,
.uni-add-quantity {
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

.buy-ipt {
  /* width: 22px; */
  padding: 4px 12px;
  /* line-height: 20px; */
  background: transparent;
  border: 1px solid #ccc;
  border-radius: 5px;
  color: #333;
  font-size: 14px;
}
</style>
