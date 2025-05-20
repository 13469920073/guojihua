<template>
  <view class="content">
    <view class="uni-account-card">
      <view style="padding: 14px; padding-top: 25px; display: flex;flex-direction: column;align-items: center;">
        <h3 class="uni-account-title">
          {{ i18n.提现申请 }}
        </h3>
        <view class="table-from" style="">
          <view class="table-from_title" @click="onSkip">
            <view>{{ form.accountName ? form.accountName : i18n.请选择提现账户 }}</view>
            <img src="../../assets/img/right.png" alt="">
          </view>
          <view class="grid-item-wrap flex" style="width: 100%;">
            <view class="grid-item-left" v-if="form.type && form.accountName&& form.type !== 'JPY' ">
              <p>{{ form.type }}</p>
              <p>{{ i18n.账户名称 }}：{{ form.accountName }}</p>
              <p>{{ i18n.账户地址 }}：{{ form.address }}</p>
            </view>
			<view class="grid-item-left" v-if="form.type && form.accountName&& form.type == 'JPY' ">
			  <p>{{ form.type }}</p>
			  <p>{{ i18n.银行名称 }} ：{{ form.bankName }}</p>
			  <p>{{ i18n.银行支行名称 }} ：{{ form.bankBranchName }}</p>
			  <p>{{ i18n.账户号码 }} ：{{ form.accountNumber }}</p>
			  <p>{{ i18n.支行编号 }} ：{{ form.branchNumber }}</p>
			  <p>{{ i18n.开户人 }} ：{{ form.accountHolder }}</p>
			  <p>{{ i18n.备注 }} ：{{ form.remarks }}</p>
			</view>
          </view>
          <view class="flex" style="width:100%" v-if="form.type && form.accountName&& form.type !== 'JPY' ">
		  {{ i18n.金额 }}:
            <input :placeholder="i18n.请输入数量" v-model="form.outlayNum" type="number" class="uni-input" />
          </view>
        </view>
      </view>
    </view>
    <view class="flex" style="padding: 20px;">
      <text style="font-weight: lighter">{{ i18n.出金时间 }}</text>
    </view>
    <view style="padding: 20px;">
      <button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="save">{{
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
      userInfo: {},
      form: {
        accountName: '',
        title: '',
        name: '',
        address: '',
        examine: '',
        outlayNum: '', //提现数量
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
      title: this.$t('wallet').提现
    });
  },
  onLoad(option) {
    console.log("optionoption", option)
    // this.userInfo = JSON.parse(uni.getStorageSync("loginuserinfo"));
    //this.getState()
    if (!Object.keys(option).length == 0) {
      this.form = JSON.parse(decodeURIComponent(option.obj));

      console.log("====》》》》", this.form)
	  if(this.form.type!== 'JPY'){
		  this.form.accountName = this.form.type + '(' + this.form.accountName + ')'
	  }else{
		  this.form.accountName = this.form.type + '(' + this.form.bankName + ')'
	  }
      
      console.log("====》》》》", this.form)
    }
    // console.log("itemType: " + JSON.stringify(itemType));
  },
  methods: {
    getState() {
      api.get(api.url.getmemberinfo, {}, res => {
        this.userInfo = res.data
      })
    },
    publish(item, index) {
      console.log("item: ", item);
      this.form = item
      this.navIndex = index
    },
    oncheck() {
      this.isCheck = !this.isCheck
      console.log("==", this.isCheck)
    },
    //申请提现
    save() {
	  if (this.form.type == 'JPY') {
	    uni.showToast({
	      title: this.i18n.请联系客服,
	      icon: 'none',
	      duration: 2000
	    })
		return
	  }
      uni.showLoading({
        title: this.$t('tip').提交中
      });
      let obj = this.form
      if (!this.form.outlayNum) {
        uni.showToast({
          title: this.i18n.请输入数量,
          icon: 'none',
          duration: 2000
        })
		return
      }
      //判断是否锁定状态
      api.get(api.url.getmemberinfo, {}, res => {
        if (res.data.lockStatus == '2') {
          uni.showToast({
            title: this.i18n.账户已锁定,
            icon: 'none',
            duration: 2000
          })
        }
      })


      api.post(api.url.applicationoutlay, obj, res => {
        // uni.navigateTo({
        // 	url:'/pages/trade/index'
        // })
        uni.hideLoading();
        uni.showToast({
          title: this.$t('tip').成功,
          success: function (res) {

            setTimeout(function () {
              uni.switchTab({
                url: '/pages/trade/index'
              })
            }, 500);
          }
        })
      }, error => {
        uni.hideLoading();
        uni.showToast({
          title: '失败',
          icon: 'none'
        })
      })
    },
    onSkip() {
      uni.navigateTo({
        url: '/pages/trade/my-account?tag=' + 'trade'
      })
    }

  }
}
</script>

<style>
.content {
  text-align: center;
  padding-top: 0px;
  padding-bottom: 56px;
  display: flex;
  flex-direction: column;
  /* align-items: flex-start; */

}

.uni-account-card {
  /* height: 200px; */
  /* width:50%; */
  margin: 14px;
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
  margin-bottom: 15px;
  /* border-color: #E5E5E5;
	border-width: 1px;
	border-style: solid; */
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
}

.table-from {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 100%;
  margin-top: 8px;
  font-size: 14px;
  color: #000;
  /* background-color: white; */
  padding: 8px 10px;
  border-radius: 8px;
  margin-left: 5px;
}

.table-input {
  margin-left: 10px;
  font-size: 14px;
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

.grid-item-left {
  color: #666;
  width: 100%;
  text-align: left;
}

.grid-item-left p {
  width: 100%;
  text-align: left;
}

.uni-input {
  margin-left: 20upx;
  text-align: left;
  width: 60%;
}

.table-from_title {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}

.table-from_title>view {
  width: 100%;
  text-align: left;
}

.table-from_title>img {
  width: 25px;
  height: 25px;
}

/* .grid-item-wrap:nth-child(-n+2){
	border-top-width: 0;
} */
</style>
