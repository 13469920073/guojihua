<template>
    <view>
      <view class="header_title">
        <span :class="pattern===1?'active':''" @click="isshow(1)">交易</span>
        <span :class="pattern===2?'active':''" @click="isshow(2)">充值</span>
        <span :class="pattern===3?'active':''" @click="isshow(3)">提现</span>
      </view>
      <view style="height:8upx;background-color:#f6f6f6"></view>
      <view >
        <view v-if="list.length">
         <view class="table_title">
           <view>时间</view>
           <view>金额</view>
           <view>状态</view>
        </view>
         <view class="table_title" v-for="(item ,index) in list" :key="index">
          <view style="color:#333433">{{item.date}}111</view>
           <view style="color:#333433">{{item.money}}</view>
           <view style="color:#333433">{{item.state}}</view>

        </view>
     
        </view>
			  <view v-else>
        <view class="img_title">
          <img src="../../assets/img/available.png" alt="">
          <p style="font-size:38upx;color:#c4c4c4">暂无数据</p>
        </view>

      </view>
			</view>
    
    </view>
</template>

<script>

	
	export default {
		components:{
		
		},
		data(){
			return {
		  	pattern:1,
        list:[{date:'2321',money:'12312',state:12}]
			}
		},
		onLoad() {
		
		},
		methods:{
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
  font-size: 32upx;
}
.header_title>span{
  text-align: center;
  width: 250upx;
  margin: 0 40upx;
}
.active{
  color: #377ef7;
}
.data_list{
  height: 260px;
  border: 1px solid #eadad9;
  border-radius: 10px;
  margin: 60upx 3% 0;
  padding: 0 15upx;
  font-size: 32upx;
}
.list_top{
  display: flex;
  height: 50px;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #e9e9e9;
  padding: 0 60upx 0 30upx;
}

.img_title{
  text-align: center;
  margin-top: 10%;
}
.table_title{
  display: flex;
  color: #9a9a9a;
  justify-content: space-around;
  border: 1px solid #eeeeee;
  height: 60px;
  align-items: center;
}
.table_title>view{
  width: 33.33%;
  font-size: 34upx;
  text-align: center;
}
	
	
</style>
