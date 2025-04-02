<template>
  <view>
    <view class="float-image">
      <image src="../../static/images/home/erweima4.jpg"></image>
      <!-- <view style="text-align: center;">Imsk1290</view> -->
	  <view style="text-align: center;">-</view>
      <image src="../../static/images/home/erweima3.jpg"></image>
      <view style="text-align: center;">Imsk2703</view>
    </view>
  </view>
</template>

<script>
export default {
  onShow(opt) {
    uni.setNavigationBarTitle({
      title: this.$t('home').添加客服
    });
  },
}
</script>

<style>
.float-image {
  width: 100%;
  /* display: flex; */
}

.float-image image {
  width: 200px;
  height: 200px;
  margin: auto;
  display: block;
}
</style>
