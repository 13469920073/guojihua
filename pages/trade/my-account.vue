<template>
	<view class="content">
		 <view v-if="list.length">
    <view class="content_box" v-for="(item,index) in list" :key="index" @click="onpush(item)">
      <view class="box1">
	   {{item.type}}&nbsp&nbsp{{i18n[numberArray[item.status]]}}
	  <text style="color: red;" v-if="obj.tag == 'me'" v-on:click="handleDel(item)">{{i18n.删除}}</text>
	  </view>
      <view class="box2">{{i18n.账户名称}} ：{{item.accountName}}</view>
      <view class="box3">{{i18n.账户地址}} ：{{item.address}}</view>
    </view>
	 </view>
       <view v-else>
         <view class="img_title">
           <img src="../../assets/img/available.png" alt="">
           <p style="font-size:32upx;color:#c4c4c4">{{this.$t('personal').暂无数据}}</p>
         </view>
       
       </view>
	  
      <view style="padding: 20px;" v-if="obj.tag == 'me'">
			<button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="add">{{i18n.添加账户}}</button>	
		</view>
	</view>
</template>

<script>
	var api = require('@/common/p/api.js');
	var itemStatusArr = require("@/common/p/base-data.js").itemStatusArr;
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
				numberArray: ['未认证', '审核中','通过', '不通过'],
				obj:{},
				pageNum:1,
				pageSize:10,
				isCheck:false,
				list:[]
			 // list:[{
    //       title:'NTM',
    //       name:'汉口银行',
    //       address:'武汉',
    //       examine:'已审核'
    //     }]
			
			}
		},
		computed: {
			    i18n (){
			      return this.$t('wallet')
			    },	
		},
		onLoad(opt) {
			console.log("obj: ",opt);
			this.obj = opt
		    this.getDataList();
		  },
		  onShow(opt) {
		  	uni.setNavigationBarTitle({
		  	    title: this.$t('personal').我的账户
		  	});
		  			this.getDataList();
		  		},
		methods: {
			getDataList(){
				var d = {
				'pageNum':this.pageNum ,
				'pageSize':this.pageSize,
				'status':this.obj.tag == 'trade'?'2':''
				};
				uni.showLoading({
					title: this.$t('tip').加载中,
					mask: true
				});
				api.get(api.url.getmemberaccountlist , d, res =>{
					console.log("获取成功: ",res);
					uni.hideLoading();
					this.list = res.data.result
					
				} ,error =>{
					uni.hideLoading();
					uni.showToast({
						title:error,
						icon:"none"
					})
				})
			},
			//删除账号
			handleDel(row){
				uni.showModal({
				   // title: '提示',
				    content: this.i18n.是否确定删除,
				    success: res => {
				        if (res.confirm) {
				api.delete(api.url.delapplicationaccount ,{id:row.id}, res =>{
					console.log("删除成功: " ,res);
					this.getDataList();
					uni.showToast({
						title:this.$t('tip').成功,
					})
					})
				}
			
				}
				})
			},
      onpush(item){
		 if(this.obj.tag == 'me'){return false}
        	uni.navigateTo({
						url:'/pages/trade/withdraw?obj='+encodeURIComponent(JSON.stringify(item))
					})
      },
	  //添加账户
	  add(){
	  	uni.navigateTo({
	  				url:'/pages/trade/bindcard'
	  			})
	  },
	
			
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
.img_title{
  text-align: center;
  margin-top: 10%;
}
</style>
