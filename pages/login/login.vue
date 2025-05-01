<template>
  <view class="login-container" style="display: flex;flex-direction: column;align-items: center;">
    <view style="margin-top: 50px;">
      <image src="../../static/images/new/600x154.png" mode="" style="width: 100px;height: 100px;"></image>
    </view>
    <view class="longin-head-nav flex">
      <view class="switch-l" :class="loginWay == 0 ? '' : ''" @click="checkIndex(0)">{{ i18n.手机登录 }}</view>
      <!-- <view class="switch-l" :class="loginWay == 1 ? 'activite' : ''" @click="checkIndex(1)">{{ i18n.邮箱登录 }}</view> -->
    </view>
    <view style="width: 100%; margin-top: 45px;">
      <view class="text-white" style="padding: 20px;">
        <view class="uni-login-input flex" v-if="loginWay == 0">
          <input type="text" :placeholder="i18n.区号" maxlength="11" v-model="phone" style="width: 60px;padding-right: 0;" />
          <input type="number" :placeholder="i18n.请输入手机号" maxlength="11" v-model="phonenumber" style="width: 100%;" />
        </view>
        <input type="text" v-if="loginWay == 1" :placeholder="i18n.请输入邮箱" v-model="email" />
        <view class="uni-reguster-input" v-if="!isCode">
          <input type="password" password="true" :placeholder="i18n.请输入密码" v-model="passWord"
            style="margin-top: 6px;" />
        </view>
        <view class="uni-reguster-input" v-else>
          <input type="text" :placeholder="i18n.请输入验证码" v-model="smsCode" style="margin-top: 6px;" />
          <button size="mini" class="uni-abs-right" :class="countdown > 0 ? 'bg-blue' : ''" @click="sendCode"
            :disabled="countdown > 0">
            {{ countdown > 0 ? `${countdown}s` + i18n.验证码 : i18n.获取验证码 }}
          </button>
        </view>
        <button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="login">{{
        i18n.登录 }}</button>
      </view>
      <view style="display: flex; margin: 0 30px;">
        <view style="width: 100%;" v-on:click="register">
          <text class="login-btn">{{ i18n.用户注册 }}</text>
        </view>
        <view style="flex-shrink: 0;" v-on:click="findPassword">
          <text class="login-btn">{{ i18n.找回密码 }}</text>
        </view>
      </view>
      <view style="display: flex;margin: 30px 0;">
        <view style="text-align: center;width: 100%;" v-on:click="codeLogin">
          <text class="login-btn">{{ i18n.验证码登录 }}</text>
        </view>
      </view>
    </view>

  </view>
</template>

<script>
var api = require('@/common/p/api.js');

export default {
  data() {
    return {
      //loginWay:0,
      isCode: false,
      phonenumber: '', //手机号
      email: '', //邮箱
      passWord: '', //密码
      loginWay: 0, //登录方式
      phone: '',
      smsCode: '', //验证码
      prevPagePath: '',
      countdown: 0, // 倒计时时间
      timer: null, // 计时器
    }
  },
  computed: {
    i18n() {
      return this.$t('login')
    },
  },
  onLoad(opt) {
    //  const lastPage = getCurrentPages()
    //   let prevPage = lastPage[lastPage.length - 2];
    //   if(prevPage){
    //   this.prevPagePath = prevPage.route;
    //   }
    // uni.setNavigationBarTitle({
    //     title: '登录',
    // 	 backgroundColor: '#000000',
    // 	navigationStyle:"custom"
    // });
  },
  methods: {
    checkIndex(i) {
      this.loginWay = i
      console.log("手机登录", this.loginWay)
    },
    //验证码登录
    codeLogin() {
      this.isCode = !this.isCode
    },
    // 开始倒计时
    startCountdown() {
      this.countdown = 60; // 设置倒计时时间，如60秒
      this.timer = setInterval(() => {
        if (this.countdown > 0) {
          this.countdown -= 1;
        } else {
          clearInterval(this.timer);
        }
      }, 1000);
    },
    sendCode() {
      if (!this.phone) {
        uni.showToast({
          title: this.i18n.区号不能为空,
          icon: "none"
        }); return;
      }
      if (!this.phonenumber) {
        uni.showToast({
          title: this.i18n.请输入手机号,
          icon: "none"
        }); return;
      }
      // if (this.phonenumber.length != 11) {
      //   uni.showToast({
      //     title: this.i18n.请输入正确的手机号,
      //     icon: "none"
      //   }); return;
      // }
      // if (!(/^1[0-9]{10}$/.test(this.phonenumber))) {
      //   uni.showToast({
      //     title: this.i18n.请输入正确的手机号,
      //     icon: "none"
      //   }); return;
      // }
      const param = {
        orgCode: 'RSRUUEEl',
        id: this.$t('tip').code == 'RSRUUEEl' ? 2 : 3,
        phoneNumber: this.phone + this.phonenumber,
        smsCodeType: 'LOGIN_KEY_SMS_CODE'
      }
      api.post(api.url.createsmscode, param, res => {
        if (res.success) {
          this.startCountdown(); //开始倒计时
        } else {
          uni.showToast({ title: '发送失败', icon: 'none' });
        }
      }, error => {
        uni.showToast({ title: '网络错误', icon: 'none' });
      },
      )
    },
    login() {
      var phone = this.phone;
      var phonenumber = this.phonenumber;
      var pwd = this.passWord;
      var smsCode = this.smsCode;
      var type = this.loginWay;
      var email = this.email;
      let param = {}
      let url;
      // if (this.isCode) {
      //   console.log("验证码登录")
      // }else{

      // }
      //if (type == 0) {
      //手机号登录
      if (!phone) {
        uni.showToast({
          title: this.i18n.区号不能为空,
          icon: "none"
        }); return;
      }
      if (!phonenumber) {
        uni.showToast({
          title: this.i18n.请输入手机号,
          icon: "none"
        }); return;
      }
      // if (phonenumber.length != 11) {
      //   uni.showToast({
      //     title: this.i18n.请输入正确的手机号,
      //     icon: "none"
      //   }); return;
      // }
      // // /^1[0-9]{10}$/
      // // /^1(3|4|5|7|8)\d{9}$/
      // if (!(/^1[0-9]{10}$/.test(phonenumber))) {
      //   uni.showToast({
      //     title: this.i18n.请输入正确的手机号,
      //     icon: "none"
      //   }); return;
      // }
      this.$set(param, 'loginAccount', phone + phonenumber)
      this.$set(param, 'phoneNumber', phone + phonenumber)
      this.$set(param, 'smsCodeType', 'LOGIN_KEY_SMS_CODE')
      // param = {
      //   'loginAccount': phone + phonenumber
      // }

      // }

      // else {
      //   //邮箱登录
      //   if (!(/^(.+)@(.+)$/.test(email))) {
      //     uni.showToast({
      //       title: this.i18n.请输入正确的邮箱,
      //       icon: "none"
      //     }); return;
      //   }
      //   this.$set(param, 'email', email)
      // }
      console.log("paramparamparam", param)
      //验证码登录
      if (this.isCode) {
        // console.log("验证码登录")
        if (!smsCode) {
          uni.showToast({
            title: this.i18n.请输入验证码,
            icon: "none"
          }); return;
        }
        // this.$delete(param, 'loginAccount');

        this.$set(param, 'smsCode', smsCode)
        // param = {
        //   'phoneNumber': phone + phonenumber,
        //   'smsCode': smsCode,
        // }
        url = api.url.smslogin
      } else {
        //手机号登录
        if (!pwd) {
          uni.showToast({
            title: this.i18n.请输入密码,
            icon: "none"
          }); return;
        }
        this.$set(param, 'passWord', pwd)
        // param = {
        //   'passWord': pwd,
        // }
        url = api.url.login
      }

      uni.showLoading({
        title: this.$t('tip').登录中,
        mask: true
      });
      console.log("paramparamparam22>>>", param)
      api.post(url, param, res => {
        uni.setStorageSync('token', JSON.stringify(res.data.token));
        uni.setStorageSync('loginuserinfo', JSON.stringify(res.data));
        console.log("token>>>>>>: ", res.data.token);
        uni.hideLoading();
        uni.$emit('userloginsuccess');
        uni.showToast({
          title: this.$t('tip').登录成功,
          success: function (res) {
            setTimeout(function () {
              uni.switchTab({
                url: '/pages/home/index'
              })
            }, 500);
          }
        })

      }, error => {
        // let tip = this.$t('tip').code == 'RSRUUEEl' && error == '账户已锁定，无法登录' ? error : 'アカウントはロックされています'
        uni.hideLoading();
        uni.showToast({
          title: error,
          icon: "none"
        })
      })
    },
    register() {
      uni.navigateTo({
        url: "/pages/login/register"
      })
    },
    findPassword() {
      uni.navigateTo({
        url: "/pages/login/revise"
      })
    },
    // findPassword(){

    // }
  }
}
</script>

<style>
.login-container {
  width: 100%;
  color: #fff;
  min-height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  background: url(../../static/images/login-bg.png) 50% no-repeat;
  background-size: cover;
}

input {
  padding: 15px;
  /* text-align: center; */
  border-width: 0;
  border-bottom-width: 1px;
  border-color: #f0f0f0;
  border-style: solid;
  font-size: 15px;
}

.switch-l {
  padding: 16px 0 8px;
  margin: 0 14px;
  position: relative;
  font-size: 16px;
  color: #ccc;
}

.longin-head-nav {
  width: 100%;
  height: 24px;
  margin: 0 auto 12px;
  color: #ccc;

}

.activite {
  color: #fff;
  border-bottom: 2px solid #fff;
}

.uni-login-input {
  flex-wrap: nowrap;
  align-items: center;
  justify-content: flex-start;
  color: #fff;
}

.login-btn {
  color: #434343;
  font-size: 16px;
  color: #fff;
  /* background-color: white; */
  border-width: 0;
  border-radius: 0;
}

.uni-reguster-input {
  position: relative;
  color: #fff;
}

.uni-reguster-input .iphoneNum {
  padding-left: 66px;
  padding-right: 30%;
}

.bg-blue {
  background: #007aff !important;
  color: #fff !important;
}

.uni-abs-right {
  position: absolute;
  background: transparent;
  right: 0;
  bottom: 6px;
  z-index: 9999;
  /* padding: 4px 12px; */
  border-radius: 6px;
  border: 1px solid #fff;
  color: #fff;
}

.custom-navbar {
  /* 设置背景透明 */
  background-color: transparent;
}

/* 	uni-button:after {
	    content: " ";
	    width: 200%;
	    height: 200%;
	    position: absolute;
	    top: 0;
	    left: 0;
	    border: 0px solid rgba(0,0,0,0);
	    -webkit-transform: scale(.5);
	    transform: scale(.5);
	    -webkit-transform-origin: 0 0;
	    transform-origin: 0 0;
	    box-sizing: border-box;
	    border-radius: 0px;
	}
	 */
</style>
