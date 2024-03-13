<template>
	<view class="content">
    <view class="content_box" v-for="(item,index) in list" :key="index" @click="onpush(item)">
      <view class="box1">
	  {{item.title}}&nbsp&nbsp{{item.examine}}
	  <text style="color: red;">{{i18n.删除}}</text>
	  </view>
      <view class="box2">{{i18n.账户名称}} ：{{item.name}}</view>
      <view class="box3">{{i18n.账户地址}} ：{{item.address}}</view>
    </view>
       
<view style="padding: 20px;">
			<button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="add">{{i18n.添加账户}}</button>	
		</view>
	</view>
</template>

<script>
	var api = require('@/common/p/api.js');
	var itemType = require("@/common/p/base-data.js").itemType;
	export default {
		components:{
			
		},
		computed: {
			    i18n (){
			      return this.$t('wallet')
			    },	
		},
		data() {
			return {
				navIndex:'0',
				pageNum:1,
				pageSize:20,
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
		    this.getDataList();
		  },
		methods: {
			getDataList(){
				var d = {
				'pageNum':this.pageNum ,
				'pageSize':this.pageSize
				};
				uni.showLoading({
					title: '数据加载中..',
					mask: true
				});
				api.get(api.url.getmemberaccountlist , d, res =>{
					console.log("获取成功: " + JSON.stringify(res));
					
				} ,error =>{
					uni.hideLoading();
					uni.showToast({
						title:error,
						icon:"none"
					})
				})
			},
			//添加账户
			add(){
				console.log("======")
			},
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
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  padding-left: 30upx;
  padding-right: 30upx;
  height: 50px;
  line-height: 50px;
  text-align: left;
  font-size: 16px;
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
