<template>
	<view class="content">
		<view>
			<view  style="padding: 25px; padding-top: 25px; display: flex;flex-direction: column;align-items: center;">
				<view style="display: flex; flex-direction: column; align-items: flex-start;width: 100%; margin-top: 8px;font-size: 13px;color: #666; background-color: white;padding:8px 10px;border-radius: 8px;margin-left: 5px;">
					<h3>{{i18n.定义}}</h3> 
					<view style="display: flex; align-items: center; text-align: left;text-indent: 2em;">
						<view style="margin-left: 5px;">{{i18n.您}}</view> 
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.使用}}</view>
					</view>
					<h3>{{i18n.服务条款}}</h3> 
					<view class="account-item">
						<view class="account-item-text">{{i18n.当您}}</view>
					</view>
					<h3>{{i18n.服务条款的修订}}</h3> 
					<view class="account-item">
						<view class="account-item-text">{{i18n.本平台}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.本协议}}</view>
					</view>
					<h3>{{i18n.用户账号注册}}</h3>
					<view class="account-item">
						<view class="account-item-text">{{i18n.用户账号}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.一旦您注册}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.您的用户账号}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.您的用户账号和密码}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.如果发现}}</view>
					</view>
					<h3>{{i18n.用户隐私保护}}</h3>
					<view class="account-item">
						<view class="account-item-text">{{i18n.尊重和保护}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.事先获得您的明确授权}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.根据您的需要}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.履行本公司}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.司法}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.根据相应的法律}}</view>
					</view>
					<h3>{{i18n.用户使用权限}}</h3>
					<view class="account-item">
						<view class="account-item-text">{{i18n.安装和使用}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.复制和传播}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.本产品服务}}</view>
					</view>
					<h3>{{i18n.用户管理}}</h3>
					<view class="account-item">
						<view class="account-item-text">{{i18n.为了规范用户}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.承诺在遵守}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.承诺不对本产品}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.本产品作为}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.承诺不以出售}}。</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.承诺不为任何}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.承诺不利用本产品}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.承诺不通过本产品发布}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.承诺不利用本产品从事}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.承诺不实施}}</view>
					</view>
					<view class="account-item">
						<view class="account-item-text">{{i18n.您需对自己使用本产品}}</view>
					</view>
					<h3>{{i18n.知识产权}}</h3>
					<view class="account-item">
						<view class="account-item-text">{{i18n.本公司对本产品}}</view>
					</view>
				</view>
			</view>
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
				itemType:itemType,
			}
		},
		computed: {
			    i18n (){
			      return this.$t('personal')
			    },	
		},
		onLoad() {
			
			// console.log("itemType: " + JSON.stringify(itemType));
		},
		onShow(opt) {
			uni.setNavigationBarTitle({
			    title: this.$t('personal').协议及隐私声明
			});
			},
		methods: {
			publish(item){
				console.log("item: " + JSON.stringify(item));
			},
			
			
		}
	}
</script>

<style>
.content {
	text-align: center;
	padding-top: 0px;
	padding-bottom: 56px;
	height: 200px;
}

.grid-item-wrap{
	margin-top: 15px;
	border-color: #E5E5E5;
	border-width: 1px;
	border-style: solid;
	width: 100%;
}	

.grid-item-left , .grid-item-right{
	margin-top: 0px;
	border-width: 1px;
	border-bottom-width: 0;
	border-right-width: 0;
	border-style: solid;
	padding: 25px 0;
	border-color: #E5E5E5;
	border-radius: 0px;
	font-size: 15px;
	width: 50%;
}
.grid-item-left {
	border-left-width: 0;
}
.grid-item-wrap:nth-child(-n+2){
	border-top-width: 0;
}
.account-item{
	display: flex; 
	align-items: center;
	margin-top: 5px;
}
.account-item-text{
	margin-left: 5px;
	text-align: left;
	text-indent: 2em;
	
}
</style>
