<template>
	<view>
<!-- 		<image src="../../static/images/default_avatar.png" style="width: 80px; height: 80px; margin-top: 30px;border-radius: 50%;" ></image> -->
		<view style="margin-top: 0px;">
			<uni-list >
				<uni-list-item class="set-item" @click='listSelected(1)' :title="i18n.头像" />
				<uni-list-item class="set-item" @click='listSelected(2)' :title="i18n.平台" :showBadge="showCache" badgeText="bitmakeitx" />
				<!-- <uni-list-item  @click='listSelected(2)' title="清空缓存" :showBadge="showCache" :badgeText="cacheSize"/> -->
				<uni-list-item class="set-item"  @click='listSelected(3)' :title="i18n.登录账号" />
				<uni-list-item class="set-item"  @click='listSelected(4)' :title="i18n.用户昵称" />
				<uni-list-item  @click='listSelected(5)' :title="i18n.修改密码" />
			</uni-list>
		</view>
		
		<view v-if="isLogined" style="align-items: center;width: 100%;">
			<button @click="logout" style="margin-top: 70px; background-color:#0080ff;color: white;height: 45px; width: 95%;font-size: 17px;">{{i18n.退出登录}}</button>
		</view>
		
		<view style="position: fixed;bottom: 8px;text-align: center;width: 100%;font-size: 13px;color: #999;">©️2024bitmakeitxAPP</view>
	</view>
</template>

<script>
	import uniList from '@/components/uni-list/uni-list.vue'
	import uniListItem from '@/components/uni-list-item/uni-list-item.vue'
	var USER = require('@/common/p/user.js');
	var api = require('@/common/p/api.js');
	
	export default {
		components:{
			uniList,
			uniListItem
		},
		data(){
			return {
				showCache:true,
				cacheSize:'0.0M',
				isLogined:USER.isLogined(),
			}
		},
		onShow(opt) {
			uni.setNavigationBarTitle({
			    title: this.$t('personal').设置
			});
		},
		computed: {
			    i18n (){
			      return this.$t('personal')
			    },	
		},
		onLoad() {
			// plus.cache.calculate(size => {
			// 	let s = parseFloat(size / (1024 * 1024)).toFixed(2) + "M";
			// 	console.log(s);
			// 	this.cacheSize = s;
			// })
		},
		methods:{
			listSelected (i) {
				switch (i){
					case 2://清除缓存
					// uni.showModal({
					//     title: '提示',
					//     content: '此操作会删除本地缓存信息,确定清除?',
					//     success: res => {
					//         if (res.confirm) {
					// 			// uni.showLoading({
					// 			// 	title:'清除缓存'
					// 			// });
					// 			// plus.cache.clear(() => {
					// 			// 	this.cacheSize = '0.0M';
					// 			// 	uni.hideLoading();
									
					// 			// });
					//         } else if (res.cancel) {
					//             console.log('取消');
					//         }
					//     }
					// });
					break;
					case 5:
					uni.navigateTo({
						url:'/pages/login/modifyPassword'
					});
					break;
					default:break;
				}
			},
			//退出登录
			logout:function(){
				uni.showModal({
				    title: '提示',
				    content: '退出会删除本地用户信息,确定退出?',
				    success: function (res) {
				        if (res.confirm) {
							api.get(api.url.logout , {}, res =>{
								console.log("退出成功 " ,res.data.token);
							uni.removeStorageSync('loginuserinfo');
							uni.$emit('userloginsuccess');
							uni.navigateTo({
								 url:'/pages/login/login'
							})
							} ,error =>{
								uni.hideLoading();
								uni.showToast({
									title:error,
									icon:"none"
								})
							})
				        } 
				    }
				});
			}
		}
	}
</script>

<style>
	.set-item{
		.uni-icon-arrowright{
			display: none; 
		}
	}
/* 	page {
		display: flex;
		flex-direction: column;
		box-sizing: border-box;
		background-color: #efeff4
	}
	.content{
		background-color: #eee;
	}
	view{
		background-color: white;
	}
	 */
	
	
</style>
