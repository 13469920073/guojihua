<template>
  <view class="content">
    <view style="padding: 10px;padding-top: 25px;">
      <view v-if="isLogined" v-on:click="login" style="display: flex; align-items: center;">
        <view style="width: 100%;align-items: center;display: flex;padding: 5px 0;">
          <image :src="userInfo.avatar" v-if="userInfo.avatar" style="width: 60px; height: 60px;border-radius: 50%;">
          </image>
          <image src="../../static/images/default_avatar.png" v-else
            style="width: 60px; height: 60px;border-radius: 50%;"></image>
          <text style="font-size: 15px; color: #888;margin-left: 15px;">{{ userInfo.nickName }}</text>
        </view>

        <image src="../../static/images/arrow_icon@2x.png"
          style="width: 20px;height: 20px;flex-shrink: 0;margin-right: 5px;"></image>
      </view>
      <!-- 	<view v-else>
				<view @click="xiugaiInfo" style="display: flex;align-items: center;padding-bottom: 0px;">
					<view style="margin-left: 10px;width: 100%;">
						<view style="font-size: 20px;">{{userInfo.name || userInfo.nickName}}</view> 
						<view style="font-size: 15px;color: darkgray;">查看或编辑资料</view>
					</view>
					<image :src="avatar" mode="" style="width: 60px;height: 60px; border-radius: 50%;margin-right: 30px; flex-shrink: 0;" />
				</view>
				<view style="margin-top: 20px; border-color: #eee;border-width: 0;border-top-width: 0.6px; border-style: solid; ">
					<view style="display: flex; padding-top: 10px;">
						<view class="top-list-item">
							<text class="top-list-item_value">{{userInfo.zanCnt}}</text>
							<text class="top-list-item_title">收藏的赞</text>
						</view>
						<view class="top-list-item">
							<text class="top-list-item_value">{{userInfo.fanCnt}}</text>
							<text class="top-list-item_title">粉丝</text>
						</view>
						<view class="top-list-item">
							<text class="top-list-item_value">{{userInfo.score}}</text>
							<text class="top-list-item_title">积分</text>
						</view>
					</view>
				</view>
			</view> -->
    </view>
    <view style="margin-top: 5px;">
      <uni-list>
        <uni-list-item @click='listSelected(1)' :title="i18n.持仓记录" thumb="../../static/images/me/me_list_icon1.png" />
        <uni-list-item @click='listSelected(2)' :title="i18n.账单明细" thumb="../../static/images/me/me_list_icon2.png" />
        <uni-list-item v-if="cacheSize == '已认证' || cacheSize == '审核中'" :title="i18n.实名认证"
          thumb="../../static/images/me/me_list_icon3.png" :showBadge="showCache" :badgeText="i18n[cacheSize]" />
        <uni-list-item v-if="cacheSize == '未认证'" @click='listSelected(3)' :title="i18n.实名认证"
          thumb="../../static/images/me/me_list_icon3.png" :showBadge="showCache" :badgeText="i18n[cacheSize]" />
        <uni-list-item @click='listSelected(4)' :title="i18n.我的账户" thumb="../../static/images/me/me_list_icon4.png" />
        <uni-list-item @click='listSelected(5)' :title="i18n.消息中心" thumb="../../static/images/me/me_list_icon5.png" />
        <uni-list-item @click='listSelected(6)' :title="i18n.协议及隐私声明"
          thumb="../../static/images/me/me_list_icon6.png" />
        <uni-list-item @click='listSelected(7)' :title="i18n.版本号" thumb="../../static/images/me/me_list_icon7.png"
          :showBadge="showCache" :badgeText="version" />
      </uni-list>
    </view>
  </view>
</template>

<script>
import uniList from '@/components/uni-list/uni-list.vue'
import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
var USER = require("@/common/p/user.js");
var api = require('@/common/p/api.js')

export default {
  components: {
    uniList,
    uniListItem
  },
  data() {
    return {
      userName: "NO.48312",
      isLogined: false,
      showCache: true,
      cacheSize: '',
      version: '1.0.0',
      userInfo: {},
      avatar: ''
    }
  },
  onShow(opt) {
    uni.setNavigationBarTitle({
      title: this.$t('tab').个人中心
    });
    this.getUserProfile();
  },
  onLoad() {
    console.log("判断是否登录1111", USER)
    uni.$on('userloginsuccess', res => {
      console.log("判断是否登录222")
      this.loginSuccess();
    })
    this.getUserProfile();
    // uni.$on('xiugaiuserinfosuccess',res => {
    // 	this.getUserProfile();
    // })

    if (USER.isLogined()) {
      this.loginSuccess(); return;
    }
  },
  computed: {
    i18n() {
      return this.$t('personal')
    },
  },
  methods: {
    listSelected: (i) => {
      console.log(111, i)
      switch (i) {
        case 1: uni.navigateTo({
          url: 'position'
        });
          break;
        case 2: uni.navigateTo({
          url: '/pages/trade/transaction'
        });
          break;
        case 3:
          uni.navigateTo({
            url: '/pages/me/identifi'
          });
          break;
        case 4:
          uni.navigateTo({
            url: '/pages/trade/my-account?tag=' + 'me'
          });
          break;
        case 5: uni.navigateTo({
          url: 'msgcenter'
        });
          break;
        case 6: uni.navigateTo({
          url: 'announcement',
        });
          break;
        default:
          break;
      }
    },
    login() {
      uni.navigateTo({
        url: '/pages/me/setter'
      })
      // uni.navigateTo({
      // 	// url:'/pages/login/login'
      // 	url:'/pages/me/setter'
      // })
    },
    loginSuccess() {
      this.isLogined = USER.isLogined();//判断是否登录
      console.log("判断是否登录3333", this.isLogined)
      // this.userInfo = USER.userInfo();//获取登录信息
      // console.log("获取登录信息444",this.userInfo)
      // this.avatar = this.userInfo['avatar_thumb'] || '../../static/images/default_avatar.png';
      // console.log("user: " + JSON.stringify(this.userInfo));
    },
    xiugaiInfo() {
      uni.navigateTo({ url: "userinfo" })
    },
    //用户信息
    getUserProfile() {
      //var uinfo = {"uid":USER.uid(), "type":"3"};
      api.get(api.url.getmemberinfo, {}, res => {
        this.userInfo = res.data

        this.cacheSize = res.data.status == '3' ? '已认证' : (res.data.status == '1' ? '未认证' : '审核中')
        //uni.setStorageSync('loginuserinfo' ,JSON.stringify(res.data));
        //this.loginSuccess();

        // if(isfromloginsuccess){
        // 	isfromloginsuccess = false;
        // 	location.reload();
        // }
      });
    }
  }
}

</script>
<style>
page {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  background-color: #efeff4
}

.content {
  background-color: #eee;
}

view {
  background-color: white;
}

.top-list-item {
  width: 33%;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.top-list-item_title {
  color: #666;
  font-size: 13px;
}

.top-list-item_value {
  color: #FF4500;
  font-size: 16px;
}
</style>
