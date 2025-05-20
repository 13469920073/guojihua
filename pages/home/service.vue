<template>
  <view>
    <view class="float-image">
      <!-- <image src="../../static/images/home/exc9527.jpg"></image> -->
      <!-- <view style="text-align: center;">Imsk1290</view> -->
	  <!-- <view style="text-align: center;">exc9527</view> -->
      <image src="../../static/images/home/exc2956.png"></image>
      <view style="text-align: center;">exc2956</view>
	  <image src="../../static/images/home/exc6658.png"></image>
	  <view style="text-align: center;">exc6658</view>
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
