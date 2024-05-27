<template>
  <view class="content">
    <view class="uni-account-card">
      <view style="display: flex; align-items: center;margin-top: 10px;">
        <view style="margin-left: 5px;color: #f66;text-align: left;">*{{ i18n.绑定账户信息 }}</view>
      </view>
      <view class="uni-card-cont">
        <view class="table-from" style="">
          <view class="flex table-item">
            {{ i18n.账户类型 }}
            <text class="table-input" style="border: none;">
              <select name="cars" id="cars" v-model="from.type">
                <option v-for="(n, index) in accountArry" :key="index">{{ n.table }}</option>
              </select>
            </text>
          </view>
          <view class="flex table-item">
            {{ i18n.账户名称 }}
            <text class="table-input"><input :placeholder="i18n.账户名称" v-model="from.accountName" />
            </text>
          </view>
          <view class="flex table-item">
            {{ i18n.账户地址 }}
            <text class="table-input"><input :placeholder="i18n.账户地址" v-model="from.address" />
            </text>
          </view>
        </view>
      </view>
    </view>
    <view style="padding: 20px;">
      <button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="next">{{
          i18n.提交 }}</button>
    </view>
  </view>
</template>

<script>
var itemType = require("@/common/p/base-data.js").itemType;
var api = require('@/common/p/api.js');
export default {
  components: {

  },

  data() {
    return {
      navIndex: '0',
      isCheck: false,
      accountArry: [{
        table: 'USDT',
        value: '0'
      }, {
        table: 'BTC',
        value: '1'
      }, {
        table: 'ETH',
        value: '2'
      }, {
        table: 'DOGE',
        value: '3'
      }],
      from: {
        accountName: "",
        address: "",
        type: "USDT"
      }
    }
  },
  computed: {
    i18n() {
      return this.$t('wallet')
    },
  },
  onShow(opt) {
    uni.setNavigationBarTitle({
      title: this.$t('personal').我的账户
    });
  },
  onLoad() {

    // console.log("itemType: " + JSON.stringify(itemType));
  },
  methods: {
    publish(item, index) {
      console.log("item: ", item);
      this.from = item
      this.navIndex = index
    },
    //下一步
    next() {
      let obj = this.from
      if (!this.from.accountName) {
        uni.showToast({
          title: this.i18n.账户名称不能为空,
          icon: "none"
        }); return;
      }
      if (!this.from.address) {
        uni.showToast({
          title: this.i18n.账户地址不能为空,
          icon: "none"
        }); return;
      }
      uni.showLoading({
        title: this.$t('tip').提交中,
        mask: true
      });
      api.post(api.url.addapplicationaccount, this.from, res => {
        console.log("token>>>>>>: ", res);
        uni.hideLoading();
        uni.showToast({
          title: this.$t('tip').成功,
          success: function (res) {
            setTimeout(function () {
              uni.navigateBack()
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
      console.log("===", obj)
    }

  }
}
</script>

<style>
.content {
  text-align: center;
  padding-top: 0px;
  padding-bottom: 56px;

}

.uni-account-card {
  /* height: 200px; */
  margin: 14px;

}

.uni-card-cont {
  padding: 14px;
  /* padding-top: 25px; */
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 6px;
  background-color: #fafafa;
  border: 1px solid #eed9d9;
}

.uni-account-title {
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0 12px;
  font-size: 16px;
}

.rgcz {
  color: #0080ff;
  font-size: 14px;
}

.grid-item-wrap {
  margin-top: 15px;
  /* border-color: #E5E5E5;
	border-width: 1px;
	border-style: solid; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.table-from_title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}

.grid-item-left,
.grid-item-right {
  margin-top: 0px;
  /* border-width: 1px;
	border-bottom-width: 0;
	border-right-width: 0; */
  /* border-style: solid; */
  border: 1px solid #ccc;
  padding: 0 10px;
  /* border-color: #E5E5E5; */
  border-radius: 6px;
  font-size: 14px;
  /* width: 50%; */
}

.table-from {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  /* margin-top: 8px; */
  font-size: 14px;
  color: #666;
  /* background-color: white; */
  padding: 8px 10px;
  border-radius: 8px;
  margin-left: 5px;
}

.table-item {
  width: 100%;
  flex-wrap: wrap;
  justify-content: space-between;
  margin: 8px 0;
}

.table-input {
  flex: 1;
  margin-left: 22px;
  text-align: left;
  padding-left: 10px;
  font-size: 14px;
  border-bottom: 1px solid #ccc;
}

.activite {
  border-color: #0080ff;
}

.next-btn {
  width: 70%;
  margin: auto;
  color: #fff;
  font-size: 13px;
  background-color: #0080ff;
  border-width: 0;
  border-radius: 0;
}

.table-input .uni-input-wrapper {
  font-size: 14px;
}

/* .grid-item-left {
	border-left-width: 0;
}
.grid-item-wrap:nth-child(-n+2){
	border-top-width: 0;
} */
</style>
