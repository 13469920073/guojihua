<template>
  <view>
    <view class="header_title position-top">
      <text :class="status === '1' ? 'active' : ''" @click="isshow('1')">{{ i18n.持仓中 }}</text>
      <text :class="status === '2' ? 'active' : ''" @click="isshow('2')">{{ i18n.已完成 }}</text>
    </view>
    <view style="height:8upx;background-color:#f6f6f6"></view>
    <view v-if="dataList.length" style="margin-top: 60px;">
      <view class="data_list" hover-class="uni-list-cell-hover" v-for="(item, index) in dataList" :key="index">
        <view class="list_top">
          <view class="top_left">
            <view>
              {{ item.type }}/USDT
              <view style="font-size: 12px;" :style="{ color: item.holdType == '1' ? '#3c3' : '#f66' }">
                {{ item.holdType == '1' ? i18n.买涨 : i18n.买跌 }}
              </view>
            </view>

            <view>
              <p>{{ formattedDate(item.createTime) }}</p>
              <p>{{ formattedDate(item.overTime) }}</p>
            </view>
          </view>
          <view class="top_right" v-if="status === '1'">
            <text class="uni-position" @click="onPosition(item)">{{ i18n.平仓 }}</text>
          </view>
          <view class="top_right" :style="{ color: item.holdType == '1' ? '#3c3' : '#f66' }" v-else>
            {{ item.holdType == '1' ? i18n.买涨 : i18n.买跌 }}
          </view>
        </view>
        <view class="list_button align-item" v-if="status === '1'">
          <view class="button_content">
            <text> {{ i18n.开仓价 }}</text>
            <text>{{ item.holdPrice }}</text>
          </view>
          <view class="button_content">
            <text>{{ i18n.杠杆倍数 }}</text>
            <text>{{ item.times }}x</text>
          </view>
          <view class="button_content">
            <text>{{ i18n.未实现盈亏 }}未实现盈亏</text>
            <text :style="{ color: item.revenue < 0 ? '#f66' : '#3c3' }">{{ item.revenue }}</text>
          </view>
          <view class="button_content" style="width: 40%;">
            <view class="border-item">
              <view>{{ i18n2.止盈 }}&nbsp;&nbsp;{{ item.profitRatio ? item.profitRatio : '0' }}%</view>
              <view>{{ i18n.平仓价 }}{{ item.profitPrice ? item.profitPrice : '0.0000' }}</view>
            </view>
          </view>
          <view class="button_content" style="width: 20%;">
            <view class="">
              <view>{{ i18n.数量 }}</view>
              <view>{{ item.holdNum }}</view>
            </view>
          </view>
          <view class="button_content" style="width: 40%;">
            <view class="border-item">
              <view>{{ i18n2.止损 }}&nbsp;&nbsp;{{ item.stopRatio ? item.stopRatio : '100' }}%</view>
              <view>
                {{ i18n.平仓价 }} &nbsp;&nbsp;{{ item.stopPrice ? item.stopPrice : '0.0000' }}
              </view>
            </view>
          </view>
        </view>
        <view class="list_button" v-if="status === '2'">
          <view class="button_content">
            <text> {{ i18n.开仓价 }}</text>
            <text>{{ item.holdPrice }}</text>
          </view>
          <view class="button_content">
            <text>{{ i18n.杠杆倍数 }}</text>
            <text>{{ item.times }}x</text>
          </view>
          <view class="button_content">
            <text>{{ i18n.数量 }}</text>
            <text>{{ item.holdNum }}</text>
          </view>
          <view class="button_content">
            <text>{{ i18n.平仓价 }}</text>
            <text>{{ item.overPrice }}</text>
          </view>
          <view class="button_content">
            <text>{{ i18n.手续费 }}</text>
            <text>{{ item.premiumNum }}</text>
          </view>
          <view class="button_content">
            <text>{{ i18n.盈亏 }}</text>
            <text :style="{ color: item.revenue < 0 ? '#f66' : '#3c3' }">
              {{ item.revenue }}
            </text>
          </view>
        </view>
      </view>
    </view>
    <view v-else>
      <view class="img_title">
        <img src="../../assets/img/available.png" alt="">
        <p style="font-size:32upx;color:#c4c4c4">{{ i18n.暂无数据 }}</p>
      </view>

    </view>
  </view>
</template>

<script>

var api = require('@/common/p/api.js');
export default {
  components: {

  },
  data() {
    return {
      dd: '-1',
      //status:1,
      status: '1',
      dataList: [],
      pageNum: 1,
      pageSize: 10,
      totalPages: null, //总页数
      intervalId: null,
    }
  },
  computed: {
    i18n() {
      return this.$t('personal')
    },
    i18n2() {
      return this.$t('contract')
    },
  },
  onShow(opt) {
    uni.setNavigationBarTitle({
      title: this.$t('personal').持仓
    });
    this.startTimer();
    // this.intervalId = setInterval(
    //   this.getData
    //   , 5000);

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
  onLoad() {
    this.getData()
  },
  onReachBottom() {
    if (this.pageNum <= this.totalPages) {
      console.log("huo去更多的数据")
      this.getData();
    } else {
      console.log('没有更多数据了');
    }
  },
  methods: {
    fetchData() {
      // 模拟请求数据的过程
      if (this.status === '1' && this.intervalId !== null) {
        setTimeout(() => {
          this.pageNum = 1
          this.pageSize = 50
          this.getData()
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
      let param = {
        pageNum: this.pageNum,
        pageSize: this.pageSize,
        status: this.status
      }
      api.post(api.url.gettradelistbystatus, param, res => {
        if (this.pageNum === 1) {
          this.totalPages = res.data.totalPage; // 更新总页数
          this.dataList = []; // 清空之前的数据
        }
        const newData = res.data.result || []; // 从返回结果中提取数据部分
        this.dataList = [...this.dataList, ...newData];
        ++this.pageNum;

      })
    },
    //平仓
    onPosition(row) {
      uni.showModal({
        // title: '提示',
        content: this.i18n.是否确定平仓,
        confirmText: this.$t('tip').确定,
        cancelText: this.$t('tip').取消,
        success: res => {
          if (res.confirm) {
            api.get(api.url.checkoutbymanual, { id: row.id }, res => {
              console.log("成功: ", res);
              this.pageNum = 1
              // this.dataList = [];
              this.getData();
              uni.showToast({
                title: this.$t('tip').成功,
              })
            })
          }

        }
      })
    },
    isshow(val) {
      this.pageNum = 1
      //this.totalPages = null
      this.dataList = [];
      this.status = val
      this.getData()
      if (val == '2') {
        // this.intervalId = null;
        this.stopTimer()
        //window.clearInterval(this.intervalId);
      } else {
        this.startTimer();
      }
    },
    formattedDate(time) {
      if (time) {
        var newTime = time.substring(0, 16);
        return newTime.replace('T', ' ');
      } else {
        return '-'
      }

    },
  },


}
</script>

<style>
.header_title {
  height: 100upx;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28upx;
}

.header_title>text {
  text-align: center;
  /* width: 60px; */
  margin: 0 40upx;
}

.active {
  color: #377ef7;
}

.data_list {
  /* height: 260px; */
  border: 1px solid #eadad9;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 18px 3% 0;
  /* padding: 0 15upx; */
  font-size: 16px;
}

.list_top {
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  padding: 0 60upx 0 30upx;
}

.ellipsis {
  overflow: hidden;
  /* 确保超出容器的文本被裁剪 */
  white-space: nowrap;
  /* 确保文本在一行内显示 */
  text-overflow: ellipsis;
  /* 超出部分显示为省略号 */
}

.align-item .button_content {
  align-items: normal
}

.align-item .border-item {
  margin: 0 8px;
}

.top_left {
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}

.top_right {
  font-size: 16px;
}

.border-item {
  border: 1px solid #ccc;
  text-align: center;
  color: #888;
  border-radius: 6px;
  padding: 0 6px;
}

.border-item uni-view {
  color: #888;
  font-size: 12px;
}

.top_left>view:nth-child(1) {
  font-size: 16px;
  /* line-height: 50px; */
  color: #333333;
}

.top_left>view:nth-child(2) {
  font-size: 12px;
  color: #353535;
  margin-left: 10px;
  /* position: absolute;
    width: 300upx;
    height: 80upx;
    top: -10upx;
    left: 270upx; */
}

.uni-position {
  background: #0080ff;
  color: #fff;
  font-size: 14px;
  padding: 6px 10px;
  border-radius: 6px;
}

.position-top {
  position: fixed;
  top: 40px;
  left: 0;
  width: 100%;
  background-color: white;
  z-index: 99;
  border-bottom: 1px solid #E5E5E5;
  /* 确保元素在其他内容之上 */
}

/* .top_left>view:nth-child(2)>p{
  height: 35upx;
} */
.list_button {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}

.button_content {
  width: 33.33%;
  /* height: 100px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  /* font-size: 38upx; */
  color: #555555;
  margin: 10px 0;
}

.button_content>text {
  /* height:40px */
  font-size: 16px;
}

.img_title {
  text-align: center;
  margin-top: 30%;
}
</style>
