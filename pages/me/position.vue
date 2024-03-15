<template>
    <view>
      <view class="header_title">
        <span :class="pattern===1?'active':''" @click="isshow(1)">{{i18n.持仓中}}</span>
        <span :class="pattern===2?'active':''" @click="isshow(2)">{{i18n.已完成}}</span>
      </view>
      <view style="height:8upx;background-color:#f6f6f6"></view>
      <view v-if="list.length">
        <view class="data_list" v-for="(item,index) in list" :key="index">
         <view class="list_top">
           <view class="top_left">
            <view>BTC/USDT</view>
            <view>
              <p>2024-02-23 15:27</p>
               <p>2024-02-23 15:27</p>
              </view>
          </view>
          <view class="top_right" style="font-size: 16px;">
            {{i18n.买涨}}
          </view>
         </view>
        <view class="list_button">
          <view class="button_content">
            <span> {{i18n.开仓价}}</span>
            <span>1</span>
          </view>
           <view class="button_content">
             <span>{{i18n.杠杆倍数}}</span>
            <span>9999</span>
           </view>
            <view class="button_content">
              <span>{{i18n.数量}}</span>
            <span>1</span>
            </view>
             <view class="button_content">
               <span>{{i18n.平仓价}}</span>
            <span>1</span>
             </view>
              <view class="button_content">
                <span>{{i18n.手续费}}</span>
            <span>110</span>
              </view>
               <view class="button_content">
                <span>{{i18n.盈亏}}</span>
               <span>-90%</span>
               </view>
        </view>
      </view>
      </view>
      <view v-else>
        <view class="img_title">
          <img src="../../assets/img/available.png" alt="">
          <p style="font-size:32upx;color:#c4c4c4">{{i18n.暂无数据}}</p>
        </view>

      </view>
    </view>
</template>

<script>

	var api = require('@/common/p/api.js');
	export default {
		components:{
		
		},
		data(){
			return {
		  	pattern:1,
        list:[{
			
		}],
		dataList:[],
		pageNum:1,
		pageSize:10,
			}
		},
		computed: {
			    i18n (){
			      return this.$t('personal')
			    },	
		},
		onShow(opt) {
			uni.setNavigationBarTitle({
			    title: this.$t('personal').持仓
			});
			this.getData()
		},
		onLoad() {
		
		},
		methods:{
			getData(){
				let param={
					pageNum:this.pageNum,
					pageSize:this.pageSize
				}
				api.post(api.url.getoperhistorylist ,param, res =>{
					console.log("获取成功====》》》: " ,res);
					this.dataList = res.data.result
					
					})
			},
			isshow(val){
        this.pattern=val
      }
		},
		
		
	}
</script>

<style>
.header_title{
  height: 100upx;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 28upx;
}
.header_title>span{
  text-align: center;
  /* width: 60px; */
  margin: 0 40upx;
}
.active{
  color: #377ef7;
}
.data_list{
  /* height: 260px; */
  border: 1px solid #eadad9;
  background-color: #f9f9f9;
  border-radius: 10px;
  margin: 18px 3% 0;
  /* padding: 0 15upx; */
  font-size: 16px;
}
.list_top{
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  padding: 0 60upx 0 30upx;
}
.top_left{
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
}
.top_left>view:nth-child(1){
  font-size: 16px;
  line-height: 50px;
  color: #333333;
}
.top_left>view:nth-child(2){
  font-size: 12px;
  color: #353535;
  margin-left: 10px;
  /* position: absolute;
    width: 300upx;
    height: 80upx;
    top: -10upx;
    left: 270upx; */
}
/* .top_left>view:nth-child(2)>p{
  height: 35upx;
} */
.list_button{
  display: flex;
  flex-wrap: wrap;
  align-items: center;
}
.button_content{
  width: 33.33%;
  /* height: 100px; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* font-size: 38upx; */
  color: #555555;
  margin: 10px 0;
}
.button_content>span{
  /* height:40px */
  font-size: 16px;
}
.img_title{
  text-align: center;
  margin-top: 10%;
}
	
	
</style>
