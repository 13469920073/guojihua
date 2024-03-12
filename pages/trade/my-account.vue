<template>
	<view class="content">
    <view class="content_box" v-for="(item,index) in list" :key="index" @click="onpush(item)">
      <view class="box1">{{item.title}}&nbsp&nbsp{{item.examine}}</view>
      <view class="box2">账户名称：{{item.name}}</view>
      <view class="box3">账户地址：{{item.address}}</view>
    </view>
       

	</view>
</template>

<script>
	var itemType = require("@/common/p/base-data.js").itemType;
	export default {
		components:{
			
		},
		
		data() {
			return {
				navIndex:'0',
				isCheck:false,
			 list:[{
          title:'NTM',
          name:'汉口银行',
          address:'武汉',
          examine:'已审核'
        }]
			
			}
		},
		computed: {
			    i18n (){
			      return this.$t('wallet')
			    },	
		},
		onLoad() {
			
		},
		methods: {
      onpush(item){
        	uni.navigateTo({
						url:'/pages/trade/withdraw?obj='+encodeURIComponent(JSON.stringify(item))
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
.content_box{
  padding: 10px;
  /* width: 50%; */
  height: 130px;
  	margin: 14px;
	border-radius: 6px;
	background-color: #fafafa;
	border: 1px solid #eed9d9;
}
.content_box .box1{
  padding-left: 30upx;
  height: 50px;
  line-height: 50px;
  text-align: left;
  font-size: 18px;
  border-bottom:1px solid #ccc
}
.content_box .box2{
  padding-left: 20upx;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 16px;

}
.content_box .box3{
  padding-left: 20upx;
  height: 30px;
  line-height: 30px;
  text-align: left;
  font-size: 16px;
 
}

</style>
