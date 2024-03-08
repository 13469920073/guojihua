<template>
	<view  class="uni-grid">
		<view class="uniSelect">
			<select name="cars" id="cars" v-model="selectedValue" @change="selectChange">
			         <option>日本语</option>
			         <option>English</option>
			         <option>中文</option>
			         <option>한국어</option>
			      </select>
				  
				 
		</view>
	</view>
</template>

<script>
	export default {
		name: 'UniGrid',
		props: {
			// options: {
			// 	type: Array,
			// 	default () {
			// 		return []
			// 	}
			// },
	
		},
		data() {
			return {
				options:[
					{ value: 'option1', label: '选项1' },
					{ value: 'option2', label: '选项2' },
					{ value: 'option3', label: '选项3' }
				],
				selectedValue:'中文'
			}
		},
		computed: {
			    i18n (){
			      return this.$t('home')
			    },
					
		},
		mounted() {
			// this.columnNumber = this.gridGroup[0].length
		},
		methods: {
			selectChange(){
				
				console.log("======",this.selectedValue)
				if(this.selectedValue == '日本语'){
					this._i18n.locale = 'japan'
				}else if(this.selectedValue == 'English'){
					this._i18n.locale = 'english'
				}else if(this.selectedValue == '中文'){
					this._i18n.locale = 'china'
				}else if(this.selectedValue == '한국어'){
					this._i18n.locale = 'korean'
				}
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
				// uni.setNavigationBarTitle({
				//     title: this.$t('tab').首页
				// });
				// uni.setNavigationBarTitle({
				//     title: this.$t('tab').合约
				// });
				
				console.log("===this._i18n===",this._i18n.locale)
				// if(this._i18n.locale == ){
					
				// }
				//this._i18n.locale = this._i18n.locale == 'indo' ? 'en':'indo';
				//this._i18n.locale = 'zh'
			},
			onClick(index, num) {
				this.$emit('click', {
					index: index * this.columnNumber + num
				})
			}
		}
	}
</script>

<style>
	@charset "UTF-8";

	.uni-grid {
		margin-top: 5px;
		    position: absolute;
		    z-index: 9999;
		    right: 10px;
		/* position: relative;
		display: flex;
		flex-direction: column */
	}

	.uni-grid__flex {
		display: flex;
		flex-direction: row
	}

	.uni-grid-item {
		display: flex;
		position: relative;
		flex-direction: column;
		flex: 1
	}

	.uni-grid-item:before {
		display: block;
		content: " ";
		padding-bottom: 100%
	}

	.uni-grid-item:after {
		content: '';
		position: absolute;
		z-index: 1;
		transform-origin: center;
		box-sizing: border-box;
		top: -50%;
		left: -50%;
		right: -50%;
		bottom: -50%;
		border-color: #c8c7cc;
		border-style: solid;
		border-width: 1px;
		-webkit-transform: scale(.5);
		transform: scale(.5);
		border-top-width: 0;
		border-left-width: 0
	}

	.uni-grid-item__content {
		position: absolute;
		left: 0;
		top: 0;
		width: 100%;
		height: 100%;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center
	}

	.uni-grid-item-text {
		font-size: 32upx;
		color: #333;
		margin-top: 12upx
	}

	.uni-grid-item-hover {
		background-color: #fefefe
	}

	.uni-grid-item-image {
		width: 80upx;
		height: 80upx
	}

	.uni-grid .uni-grid__flex:first-child .uni-grid-item:after {
		border-top-width: 1px
	}

	.uni-grid .uni-grid__flex .uni-grid-item:first-child:after {
		border-left-width: 1px
	}

	.uni-grid.uni-grid-no-out-border .uni-grid__flex:first-child .uni-grid-item:after {
		border-top-width: 0
	}

	.uni-grid.uni-grid-no-out-border .uni-grid__flex:last-child .uni-grid-item:after {
		border-bottom-width: 0
	}

	.uni-grid.uni-grid-no-out-border .uni-grid__flex .uni-grid-item:first-child:after {
		border-left-width: 0
	}

	.uni-grid.uni-grid-no-out-border .uni-grid__flex .uni-grid-item:last-child:after {
		border-right-width: 0
	}

	.uni-grid.uni-grid-no-border .uni-grid-item:after {
		border-width: 0
	}

	.uni-grid.uni-grid-no-border .uni-grid__flex:first-child .uni-grid-item:after {
		border-top-width: 0
	}

	.uni-grid.uni-grid-no-border .uni-grid__flex .uni-grid-item:first-child:after {
		border-left-width: 0
	}

	.uni-grid-item-oblong.uni-grid-item:before {
		padding-bottom: 60%
	}

	.uni-grid-item-oblong .uni-grid-item__content {
		flex-direction: row
	}

	.uni-grid-item-oblong .uni-grid-item-image {
		width: 52upx;
		height: 52upx
	}

	.uni-grid-item-oblong .uni-grid-item-text {
		margin-top: 0;
		margin-left: 12upx
	}
	
	/* 自定义样式 */
	.uni-grid-item-text{
		font-size: 13px;
		color: #444;
	}
	.uni-grid-item-hover {
		background-color: #FFFFFF
	}
	.uni-grid{
		margin-top: 5px;
	}
	.uni-grid-item-image {
		width: 30px;
		height: 30px
	}
	.uni-grid-item:before {
		display: block;
		content: " ";
		padding-bottom: 80%
	}
		
		
</style>