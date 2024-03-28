<template>
  <view class="content">
    <home-money-list @loadingStatus="loadingStatus" ref="homeList" :items="dataList" />
  </view>
</template>

<script>
import homeMoneyList from '@/components/home-money-list.vue';

var itemType = require("@/common/p/base-data.js").itemType;
var api = require('@/common/p/api.js');
export default {
  components: {
    homeMoneyList
  },

  data() {
    return {
      itemType: itemType,
      dataList: [],
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
  onUnload() {
    // 清除定时器
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
      if (this.intervalId !== null) {
        setTimeout(() => {
          // 假设这是从服务器获取的最新数据
          const newData = { /* 新数据对象 */ };
          this.getData()
          //this.dataList.unshift(newData); // 假设要将新数据添加到数组的开始位置
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
    getData() {
      var that = this;
      var arr1 = ['BTC', 'ETH', 'EOS'];
      uni.request({
        url: "https://api.taurusen.site/api/home/home/getBlineList",
        success(res) {
          console.log(res)
          const { list } = res.data.data
          uni.request({
            url: "https://api.taurusen.site/api/home/home/getBlineList",
            success(res) {

              api.get(api.url.ratebody, {}, res1 => {
                const { riseType, middleParam, tonRate, tonLine, rise } = res1.data
                let list = res.data.data.list

                let obj = {
                  sname: 'TON',
                  increPer: riseType == 'down' ? '-' + middleParam : (riseType == 'flat' ? rise : middleParam), //涨跌幅
                  nowPri: tonRate, //最新价
                  vol: '-',
                }
                //重新组装数组
                const index = list.findIndex((item) => item.sname === 'HBC');
                if (index !== -1) {
                  that.$set(list, index, obj);
                }
                that.dataList = list

              }, error => {
                uni.hideLoading();
                uni.showToast({
                  title: error,
                  icon: "none"
                })
              })
            }
          })
        },
      })
    },
    publish(item) {
      console.log("item: " + JSON.stringify(item));
    },
    loadingStatus(e) {
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

.grid-item-wrap {
  margin-top: 15px;
  border-color: #E5E5E5;
  border-width: 1px;
  border-style: solid;
  width: 100%;
}

.grid-item-left,
.grid-item-right {
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

.grid-item-wrap:nth-child(-n+2) {
  border-top-width: 0;
}
</style>
