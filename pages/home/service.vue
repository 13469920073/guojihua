<template>
  <view>
    <view class="float-image">
      <!-- <image src="../../static/images/home/exc9527.jpg"></image> -->
      <!-- <view style="text-align: center;">Imsk1290</view> -->
	  <!-- <view style="text-align: center;">exc9527</view> -->
      <image src="../../static/images/home/exc1956.png"></image>
      <view style="text-align: center;">exc1956</view>
	  <image src="../../static/images/home/exc8134.jpg"></image>
	  <view style="text-align: center;">exc8134</view>
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
