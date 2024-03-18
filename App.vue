<script>
	export default {
		onLaunch: function () {
			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
			uni.setTabBarItem({
				index: 0,
				text: this.$t('tab').首页
			});
			uni.setTabBarItem({
				index: 1,
				text: this.$t('tab').合约
			});
			uni.setTabBarItem({
				index: 2,
				text: this.$t('tab').钱包
			});
			uni.setTabBarItem({
				index: 3,
				text: this.$t('tab').个人中心
			});
		},
		onHide: function () {
			console.log('App Hide')
		}
	}
</script>

<style>
	/* uni.css - 通用组件、模板样式库，可以当作一套ui库应用2222 */
	@import './common/uni.css';
	/*每个页面公共css */
	image{
		object-fit: cover;
	}
	
</style>
