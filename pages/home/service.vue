<template>
  <view>
    <view class="float-image">
      <image src="../../static/images/home/erweima.jpg"></image>
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
  display: flex;
}

.float-image image {
  width: 200px;
  height: 200px;
  margin: auto;
  display: block;
}
</style>
