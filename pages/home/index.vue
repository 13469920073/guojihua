<template>
  <view class="content">
    <view class="float-button" @click="openCustomerService">
      <image src="../../static/images/home/service.png"></image>
    </view>
    <uni-select @localeClick="localeClick"></uni-select>
    <uni-swiper-dot :info="swiperImages" :current="current" :mode="mode" :dots-styles="dotsStyles">
      <swiper class="swiper-box" @change="change" autoplay="true" style="height: 180px;">
        <swiper-item v-for="(item, index) in imagesArr" :key="index">
          <view class="swiper-item">
            <image :src="item.url" />
          </view>
        </swiper-item>
      </swiper>
    </uni-swiper-dot>
    <uni-scroll-notice :items="noticeList" />
    <uni-grid-list :options="itemType" :show-border="false" :items="dataTopList" :column-num="4" @click="onClick" />
    <home-money-list @loadingStatus="loadingStatus" ref="homeList" :items="dataList" />
    <!-- <home-list @loadingStatus="loadingStatus" ref="homeList" />-->
    <!-- <uni-load-more :status="status" :content-text="contentText" /> -->
  </view>
</template>

<script>
import uniSelect from '@/components/uni-select/uni-select.vue';
import uniLoadMore from '@/components/uni-load-more/uni-load-more.vue';
import uniSwiperDot from '@/components/uni-swiper-dot/uni-swiper-dot.vue';
//import uniGrid from '@/components/uni-grid/uni-grid.vue';
import uniGridList from '@/components/uni-grid-list/uni-grid-list.vue';
import uniScrollNotice from '@/components/uni-scroll-notice/uni-scroll-notice.vue';
import homeMoneyList from '@/components/home-money-list.vue';
//import homeList from '@/components/home-list.vue';
var baseData = require("@/common/p/base-data.js");
var api = require('@/common/p/api.js');
export default {
  components: {
    uniSelect,
    uniSwiperDot,
    //uniGrid,
    uniGridList,
    //homeList,
    homeMoneyList,
    uniLoadMore,
    uniScrollNotice
  },
  data() {
    return {
      imagesArr: [],
      swiperImages: [
        { url: "../../static/images/home/home_top_banner1.png" },
        { url: '../../static/images/home/home_top_banner2.png' },
        { url: '../../static/images/home/home_top_banner3.png' }
      ],
      swiperImages2: [
        { url: "../../static/images/home/home_top_banner1.png" },
        { url: '../../static/images/home/home_top_banner22.png' },
        { url: '../../static/images/home/home_top_banner33.png' }
      ],
      swiperImages3: [
        { url: "../../static/images/home/home_top_banner1.png" },
        { url: '../../static/images/home/home_top_banner222.png' },
        { url: '../../static/images/home/home_top_banner333.png' }
      ],
      noticeList: [],
      current: 0,
      mode: 'default',
      dotsStyles: {
        backgroundColor: 'rgba(255, 90, 95,0.3)',
        border: '1px rgba(255, 90, 95,0.3) solid',
        color: '#fff',
        selectedBackgroundColor: 'rgba(255, 90, 95,0.9)',
        selectedBorder: '1px rgba(255, 90, 95,0.9) solid',
      },
      dataTopList: [],
      dataList: [],
      itemType: [],
      status: 'loading',
      intervalId: null,
      contentText: {
        contentdown: '上拉加载更多',
        contentrefresh: '加载中',
        contentnomore: '没有更多了'
      },
    }

  },
  onLoad() {
    // var _topItems = baseData.homeTopListItems;
    // _topItems.forEach(e =>{
    // 	// var ig = e['image'];
    // 	// e['image'] = '../../static/images/' + ig;
    // });
    let lang = this._i18n.locale
    this.getData()

    this.getNotice(lang)
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
    //切换
    localeClick(lang) {
      this.getNotice(lang.locale)

    },

    fetchData() {
      // 模拟请求数据的过程
      if (this.intervalId !== null) {
        setTimeout(() => {
          this.getData()
        }, 1000);
      }

    },
    startTimer() {
      this.intervalId = setInterval(this.fetchData, 3000); // 每3秒请求一次数据
    },
    stopTimer() {
      var that = this
      if (that.intervalId) {
        window.clearInterval(that.intervalId);
        that.intervalId = null;
      }
    },
    //获取公示栏
    getNotice(val) {
      let lang = val == 'china' ? 'zh-CN,zh;q=0.9' : (val == 'japan' ? 'ja' : 'en')
      this.imagesArr = val == 'china' ? this.swiperImages : (val == 'japan' ? this.swiperImages2 : this.swiperImages3)
      console.log("langlanglang", lang)
      var that = this;
      uni.request({
        url: "https://api.taurusen.site/api/home/home/getHomeHot",
        header: {
          "Lang-Locale": lang,
        },
        success(res) {
          const { notice } = res.data.data
          notice.forEach((item, index) => {
            item.content = item.content.replace('HBC', 'TON');
          })
          that.noticeList = notice
        },
      })
    },
    getData() {
      var that = this;
      let requestData = {
        'fsym': 'Toncoin',
        'tsym': 'USDT',
        'limit': '24',
        'aggregate': 3,
        'e': 'CCCAGG'
      }
      var arr1 = ['BTC', 'ETH', 'TON'];
      //var arr2 = ['BTC','ETH','EOS','HBC','LTC','XRP','BCH','ADA','TRX','BNB'];

      uni.request({
        url: "https://api.taurusen.site/api/home/home/getBlineList",
        success(res) {
          uni.request({
            url: api.url.base + 'coin/get/ratebody',
            method: 'GET',
            data: {},
            success: (res1) => {
              const { riseType, middleParam, tonRate, tonLine, rise } = res1.data.data
              let list = res.data.data.list
              let obj = {
                sname: 'TON',
                increPer: rise,
                //increPer: riseType == 'down' ? '-' + middleParam : (riseType == 'flat' ? rise : middleParam), //涨跌幅
                nowPri: tonRate, //最新价
                vol: '-',
              }
              //重新组装数组
              const index = list.findIndex((item) => item.sname === 'HBC');
              if (index !== -1) {
                that.$set(list, index, obj);
              }
              console.log("”New Itemlistlist", list)
              that.dataTopList = that.filter(list, arr1)
              that.dataList = list

            },
            fail: (err) => {
              console.error('GET请求失败：', err);
              // 处理错误
            }
          });


          // uni.request({
          //   url: 'https://min-api.cryptocompare.com/data/histohour',
          //   method: 'GET',
          //   data: requestData,
          //   success: (res1) => {
          //     console.log(res)
          //     let list = res.data.data.list
          //     let d = res1.data.Data
          //     let list2 = d[d.length - 1]
          //     //计算涨跌浮
          //     let closeOld = d[d.length - 2].close //上一次开盘价价格
          //     let close = list2.close //当前的开盘价
          //     let total = closeOld - close

          //     console.log("list2list2list2list2", list2)
          //     let obj = {
          //       sname: 'TON',
          //       increPer: total.toFixed(2), //涨跌幅
          //       nowPri: list2.close, //最新价
          //       vol: '-',
          //     }
          //     //重新组装数组
          //     const index = list.findIndex((item) => item.sname === 'HBC');
          //     if (index !== -1) {
          //       that.$set(list, index, obj);
          //     }
          //     console.log("”New Itemlistlist", list)
          //     that.dataTopList = that.filter(list, arr1)
          //     that.dataList = list
          //     //let aa = that.getTonData()
          //     //console.log("getTonData",aa)

          //     console.log('GET请求成功：', res.data.Data);
          //     //let d = res.data.Data
          //     //let leng = res.data.Data.length
          //     //console.log('GET请求成功leng：', leng);
          //     // data1 = d[d.length-1]
          //     //console.log('GdataList：',data1);

          //     // 处理你的业务逻辑
          //   },
          //   fail: (err) => {
          //     console.error('GET请求失败：', err);
          //     // 处理错误
          //   }
          // });


        },
      })
    },
    filter(arr, data) {
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
    filterData(arr, data) {
      let newData = [];
      data.map((x) => {
        arr.map((k) => {
          if (k.symbol == x) {
            var listing = {
              increPer: parseFloat(k.changePercent24Hr).toFixed(2),
              nowPri: parseFloat(k.priceUsd).toFixed(4),
              sname: k.symbol,
              id: k.id,
              vol: parseFloat(k.priceUsd).toFixed(4),
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
    loadingStatus(e) {
      this.status = e;
    },
    //显示客服二维码
    openCustomerService() {
      uni.navigateTo({
        url: "/pages/home/service"
      })
    },
    onClick(e) {
      var i = e.index;
      var item = this.itemType[i];
      uni.navigateTo({
        url: 'home-list?t=' + item['text'] + '&id=' + item['type']
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

@keyframes scaleUp {
  80% {
    transform: scale(0.8);
    /* 动画开始时元素的大小 */
  }

  100% {
    transform: scale(1);
    /* 动画结束时元素的大小 */
  }

}

.float-button {
  width: 40px;
  /* 图标宽度 */
  height: 40px;
  /* 图标高度 */
  position: fixed;
  top: 30%;
  right: 6px;
  border-radius: 50%;
  background: #eee;
  box-shadow: 0 0 10px #999;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-pack: center;
  justify-content: center;
  -ms-flex-align: center;
  align-items: center;
  z-index: 999;
  transform: scale(1);
  animation: scaleUp 1s linear .1s infinite normal;
}

.float-button image {
  width: 60%;
  height: 60%;
  display: block;
  /* 块级元素 */
}
</style>
