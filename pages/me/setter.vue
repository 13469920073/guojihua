<template>
	<view>
<!-- 		<image src="../../static/images/default_avatar.png" style="width: 80px; height: 80px; margin-top: 30px;border-radius: 50%;" ></image> -->
		<view style="margin-top: 0px;">
			<view class="container-fullCol flex" @click="selectAvatar">
				<text>{{i18n.头像}}</text>
				<image v-if="!form.avatar" src="../../static/images/default_avatar.png" class="uni-default-avatar" ></image>
				<image v-else :src="form.avatar" class="uni-default-avatar" ></image>
			</view>
			<uni-list >
				<!-- <uni-list-item class="set-item" @click='listSelected(1)' :title="i18n.头像" thumbImg="../../static/images/me/me_list_icon1.png" /> -->
				<uni-list-item class="set-item" @click='listSelected(2)' :title="i18n.平台" :showBadge="showCache" badgeText="bitmakeitx" />
				<!-- <uni-list-item  @click='listSelected(2)' title="清空缓存" :showBadge="showCache" :badgeText="cacheSize"/> -->
				<uni-list-item class="set-item"  @click='listSelected(3)' :title="i18n.登录账号" :showBadge="showCache" :badgeText="form.loginAccount" />
				<uni-list-item class="set-item"  @click='listSelected(4)' :title="i18n.用户昵称" :showBadge="showCache" :badgeText="form.nickName" />
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
				form:{},
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
		onLoad(option) {
			console.log("optionoption",option)
			 this.getUserProfile()
			// if(!Object.keys(option).length == 0){
			// this.form = JSON.parse(decodeURIComponent(option.obj));
			//console.log("optionoption",this.form)
		  //}
		},
		computed: {
			    i18n (){
			      return this.$t('personal')
			    },	
		},
		//onLoad() {
			// plus.cache.calculate(size => {
			// 	let s = parseFloat(size / (1024 * 1024)).toFixed(2) + "M";
			// 	console.log(s);
			// 	this.cacheSize = s;
			// })
		//},
		methods:{
			listSelected (i) {
				switch (i){
					case 2://清除缓存
					break;
					case 5:
					uni.navigateTo({
						url:'/pages/login/modifyPassword'
					});
					break;
					default:break;
				}
			},
			getUserProfile(){
				api.get(api.url.getmemberinfo , {} , res =>{
					this.form = res.data
				});
			},
			//上传头像
			selectAvatar:function(){
				uni.chooseImage({sourceType: ["camera", "album"], sizeType: "compressed", count: 1,
				    success: res => {
						console.log()
						var filesPaths = res.tempFilePaths;
						if(filesPaths && filesPaths.length > 0){
							api.uploadfile(api.url.upload ,filesPaths[0],{imageType:'1'}, res =>{
								this.form.avatar = filesPaths[0];
								this.is_avatar_change = true;
								uni.hideLoading();
								})
						}
				    }
				})
			},
			//退出登录
			logout:function(){
				uni.showModal({
				    //title: '提示',
				    content: this.$t('tip').确定退出,
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
	.container-fullCol{
		flex-direction: row;
		    justify-content: space-between;
		    align-items: center;
			padding: 18px 16px
			
	}
	.container-fullCol uni-text{
		
	}
	.set-item{
		.uni-icon-arrowright{
			display: none; 
		}
		.uni-badge{
			font-size: 16px;
			background-color: transparent;
		}
	}
	.uni-default-avatar{
		width: 40px; 
		height: 40px;
		border-radius: 50%;
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
