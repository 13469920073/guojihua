<template>
<view>
	<view class="uni-list" style="padding-bottom: 50px;">
		<view class="uni-list-cell-title">
			<span>{{i18n.最新账单}}</span>
			<view class="uni-cell-title-more" @click="onClick()">{{i18n.更多}}</view>
		</view>
		<view  style=" display: flex;flex-direction: column;align-items: center;">
			<view class="grid-item-wrap"  style="width: 100%;">
					<view  style="display: flex;" >
						<view class="grid-item-left" >
							{{i18n.时间}}
						</view>
						<view class="grid-item-right">
							{{i18n.金额}}
						</view>
						<view class="grid-item-right">
							{{i18n.状态}} 
						</view>
					</view>
			</view>
	    </view>
		<view v-if="items.length">
		<view class="uni-list-cell" hover-class="uni-list-cell-hover" v-for="(value ,key) in items" :key="key" style="flex-direction: column;align-items: flex-start;">
			<view style="width: 100%;" v-on:click="openDetailPage(value)">
				<view  style="display: flex;" >
					<view class="grid-item-left" >
					  {{formattedDate(value.createTime)}}
					</view>
					<view class="grid-item-right" style="color: #333;">
						{{value.fee}}
					</view>
					<view class="grid-item-right">
						{{i18n[statusArr[value.status]]}}
					</view>
				</view>
			</view>
		</view><!-- cell -->
		</view>
		<view v-else>
		  <view class="img_title">
		    <img src="./../assets/img/available.png" alt="">
		    <p style="font-size:32upx;color:#c4c4c4">{{i18n.暂无数据}}</p>
		  </view>
		
		</view>
</view>
</view>
</template>

<script>
	import listItemCell from '@/components/list-item-cell.vue';
	import shangjia from '@/components/shangjia.vue';
	import lifeItemCell from '@/components/life-item-cell.vue';
	
	var dateUtils = require('@/common/util.js').dateUtils;
	var baseData = require("@/common/p/base-data.js");
	var api = require('@/common/p/api.js');
	
	export default {
		name:"homeMoneyList",
		components:{
			listItemCell,
			shangjia,
			lifeItemCell
		},
		props:{
			type:{
				type:String,
				default:'0'
			},
			items: {
			    type: Array,
			    default: () => []
			}
		},
		data(){
			return{
				itemType:[],
				pageNumber:1,
				noMore:0,
				statusArr:{
					'1':'出金',
					'2':'入金',
					'3':'建仓',
					'4':'平仓',
				},
				comType:'default'
				}
		},
		computed: {
			    i18n (){
			      return this.$t('wallet')
			    },
					
		},
		mounted() {
			// if(this.type == '14'){
			// 	this.comType = 'sj'
			// }else if(this.type == '15'){
			// 	this.comType = 'life'
			// }else if(this.type == '16'){
			// 	this.comType = 'life'
			// }else if(this.type == '17'){
			// 	this.comType = 'life'
			// }
			
			//this.loadData();
		},
		methods: {
			formattedDate(time){
				var newTime = time.substring(0, 16);
				return newTime.replace('T', ' ');
			},
			loadData(){
				var data = {"category":"sy" ,"subType":this.type ,'pageNumber':this.pageNumber};
				if(this.type == '14' || this.type == '15' || this.type == '16' || this.type == '17'){
					data['category'] = 'life';
					data['subType'] = '22';
					if(this.type == '15'){
						data['subType'] = '23'
					}else if(this.type == '16'){
						data['subType'] = '21'
					}else if(this.type == '17'){
						data['subType'] = '27'
					}
				}
				
				// console.log("req data: " + JSON.stringify(data));
				api.post(api.url.getsy , data , res => {
					var arr = res;
					if(arr && arr.length > 0){
						// console.log(JSON.stringify(arr[0]));
						if(this.pageNumber == 1){
							uni.stopPullDownRefresh();
							this.items = this._formatter(arr);
						}else{
							this.items = this.items.concat(this._formatter(arr));
						}
						
						if(arr.length < 20){
							this.$emit('loadingStatus' , 'noMore');
						}
					}else{
						this.$emit('loadingStatus' , 'noMore');
					}
				} , error => {
					console.log(error);
					uni.showToast({
						title:'请求网络失败！',
						icon:'none'
					})
					this.$emit('loadingStatus' , 'noMore');
				});	
			},
			
			_formatter(items){
				var newItems = [];
				items.forEach(e => {
					var con = e['content'];
					e['content'] = con.replace('/\n/g' , ' ');
					var avatar= this.getAvatarUrl(e);
					e['avatar'] = avatar;
					
					var postDate = e['postDate'];
					e['postDateFormatter'] = dateUtils.format(postDate);
					e['typeName'] = this.postType(e['type']);
		
					//添加图片		
					var igStr = e['images'];
					if(igStr != null && igStr.length > 0){
						var igurlArr = igStr.split(',');
						var w = (plus.screen.resolutionWidth - 30) / 3.0;;
						if(igurlArr.length == 1){
							w = (plus.screen.resolutionWidth - 30) / 3.0;
						}
						
						e['width'] = w;
						var _len = igurlArr.length > 3 ? 3 : igurlArr.length;
						var thumbArr = Array();
						for (var k = 0; k < _len; k++) {
								var thumb = this.getDtImageUrl(igurlArr[k] , '../../static/images/new/600x153_w.png');
								thumbArr.push(thumb);
							}
						
						e['imageUrl'] = thumbArr;
					}
		
				});
				
				return items;
			},
			//获取动态列表缩略图
		 getDtImageUrl(thumbUrl , defaultUrl){
			if(thumbUrl){
				thumbUrl = thumbUrl.replace('.jpg' , '_thumb.jpg');
			}
			
			return thumbUrl || defaultUrl;
		},
		getAvatarUrl(item){
				var u_avatar = item['user']['avatar_thumb'];
				if(u_avatar == null || u_avatar == ''){
					u_avatar = "../../static/images/default_avatar.png";
				}
				return u_avatar;
			},
		postType(type){
			var _t = baseData.titleForType;
			return _t[type] || '其他';
		},
		openDetailPage(value){
			// console.log("value: " + JSON.stringify(value));
			let pid = value['pid'] , type = value['type'];
			let category = api.postType(type) , itemTitle = baseData.titleForType[type];
			if(!pid || !category)return;
			uni.navigateTo({
				url:'../home/detail?pid=' + pid + '&c=' + category + '&t=' + itemTitle
			})
		},
		onClick(index, num) {
			this.$emit('click')
		}
		}
	}
	
</script>

<style>
.uni-list:after {
	height: 0;
}

.uni-list:before {
	height: 1px;
	background-color: #eee;
}
.uni-list-cell-title {
	padding-left: 14px;
	padding-top: 25px;
	text-align: left;
	font-size: 	18px;
	/* font-weight: bold; */
	color: #333;
}
.uni-cell-title-more{
	float: right;
	    margin-right: 14px;
	    position: relative;
	    /* top: -0.106667rem; */
	    color: #999;
	    /* height: 0.64rem; */
	    /* line-height: .693333rem; */
	    font-size: 14px;
	    padding-right: 14px;
		background: url(../static/images/trade/more.png) no-repeat 100%/auto 48%;
		
}
.uni-list-cell{
	padding: 10px;
	color: #333 !important;
}
.uni-list-cell:after{
	left: 0;
	background-color: #ddd;
}

.grid-item-wrap{
	margin-top: 15px;
	padding-bottom: 15px;
	/* border-color: #E5E5E5; */
	border-bottom: 1px solid #E5E5E5;
	/* border-width: 1px;
	border-style: solid; */
	width: 100%;
}	

.grid-item-left , .grid-item-right{
	margin-top: 0px;
	//border-width: 1px;
	/* color: #9a9a9a; */
	/* border-bottom-width: 0;
	border-right-width: 0;
	border-style: solid; */
	/* padding: 25px 0;
	border-color: #E5E5E5;
	border-radius: 0px; */
	font-size: 15px;
	/* width: 50%; */
}
.text-xmd{
	font-size:18px;
	color: #333;
}
.text-gray{
	font-size:12px;
	color: #9a9a9a;
}
.grid-item-left{
	width: 40%;
}
.grid-item-right{
	width: 30%;
}
.img_title{
  text-align: center;
  margin-top: 10%;
}
/* .grid-item-left {
	border-left-width: 0;
}
.grid-item-wrap:nth-child(-n+2){
	border-top-width: 0;
} */
</style>
