<template>
	<view class="content">
		<view class="uni-account-card">
			<view  style="padding: 14px; padding-top: 25px; display: flex;flex-direction: column;align-items: center;">
				<h3 class="uni-account-title">
					{{i18n.提现申请}}
				</h3>
			
				
				<view class="table-from" style="">
					<view class="table-from_title" @click="onSkip"> 
	            <view >{{form.titleName?form.titleName:i18n.请选择提现账户}}</view>
               <img src="../../assets/img/right.png" alt="">
            </view> 
					<view class="grid-item-wrap flex" style="width: 100%;">
						<view class="grid-item-left" v-if="form.title&&form.name">
							<p>{{form.title}}</p>
              <p>账户名称：{{form.name}}</p>
              <p>账户地址：{{form.address}}</p>
					  </view>
					</view>
					<view class="flex" style="width:100%">{{i18n.金额}}:<input :placeholder="i18n.请输入数量"  v-model="form.money" type="number" class="uni-input"/></view> 
					
				</view>
			</view>
        </view>
		<view class="flex" style="padding: 20px;">
			<text>{{i18n.出金时间}}</text>
		</view>
		<view style="padding: 20px;">
			<button type="primary" style="margin-top: 60px; background-color: #0080ff;height: 45px;" v-on:click="next">{{i18n.下一步}}</button>	
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
				itemType:[{
					title:'USDT',
					name:'USDT（trc-20）',
					address:'11dcdicjdiijcnxisdlbcvldsu'
				},{
					title:'USDT',
					name:'',
					address:'22dcdicjdiijcnxisdlbcvldsu'
				},{
					title:'USDT',
					name:'',
					address:'33dcdicjdiijcnxisdlbcvldsu'
				},{
					title:'BTC',
					name:'',
					address:'44dcdicjdiijcnxisdlbcvldsu'
				},{
					title:'ETH',
					name:'',
					address:''
				}],
				form:{
          titleName:'',
          title:'',
          name:'',
          address:'',
          examine:'',
          money:''
        }
			}
		},
		computed: {
			    i18n (){
			      return this.$t('wallet')
			    },	
		},
		onLoad(option) {
			this.form = JSON.parse(decodeURIComponent(option.obj));
      this.form.titleName=this.form.title+'('+this.form.name+')'
console.log(	this.form)
			// console.log("itemType: " + JSON.stringify(itemType));
		},
		methods: {
			publish(item,index){
				console.log("item: ",item);
				this.form = item
				this.navIndex = index
			},
			oncheck(){
				this.isCheck = !this.isCheck
				console.log("==",this.isCheck)
			},
			//下一步
			next(){
				let obj= this.form
				if(!this.form.money){
					uni.showToast({
					    title: '请先输入数量',
					    icon: 'none',
					    duration: 2000
					})
					
				}else{
					uni.navigateTo({
						url:'/pages/trade/account-recharge2?obj='+encodeURIComponent(JSON.stringify(obj))
					})
				}
				console.log("===")
			},
      onSkip(){
          uni.navigateTo({
						url:'/pages/trade/my-account?tag='+'trade'
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
.uni-account-card{
	/* height: 200px; */
  /* width:50%; */
	margin: 14px;
	border-radius: 6px;
	background-color: #fafafa;
	border: 1px solid #eed9d9;
}
.uni-account-title{
	width: 100%;
	display: flex;
	justify-content: space-between;
	align-items: center;
	margin: 0 12px;
	font-size: 16px;
}
.rgcz{
	color: #0080ff;
    font-size: 14px;
}

.grid-item-wrap{
	margin-top: 15px;
	/* border-color: #E5E5E5;
	border-width: 1px;
	border-style: solid; */
	width: 100%;
	display: flex;
	flex-wrap: wrap;
	justify-content: space-around;
}	

.table-from{
	display: flex; 
	flex-direction: column; 
	align-items: flex-start;
	width: 100%; 
	margin-top: 8px;
	font-size: 14px;
	color: #666;
	 /* background-color: white; */
	 padding:8px 10px;
	 border-radius: 8px;
	 margin-left: 5px;
}
.table-input{
	margin-left: 10px;
	font-size: 14px;
}
.activite{
	border-color: #0080ff;
}
.next-btn{
	width: 70%;
	margin: auto;
	color: #fff;
	font-size: 13px;
	background-color: #0080ff;
	border-width: 0;
	border-radius: 0;
}
.grid-item-left {
  width: 100%;
	text-align: left;
}
.grid-item-left p{
  width: 100%;
  text-align: left;
}
.uni-input{
  margin-left: 20upx;
  text-align: left;
  width: 60%;
}
.table-from_title{
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid #ccc;
}
.table-from_title>view{
  width: 100%;
  text-align: left;
}
.table-from_title>img{
  width: 25px;
  height: 25px;
}
/* .grid-item-wrap:nth-child(-n+2){
	border-top-width: 0;
} */
</style>
