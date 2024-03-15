<template>
	    <view class="notice_bg">
			  <image class="icon" :src="noticeImg"></image>
	        <view class="line"></view> 
	        <swiper autoplay="true" display-multiple-items="1" vertical="true" circular interval="2000" class="bar-swiper">
	            <swiper-item v-for="(item, index) in items" :key="index" class="swiper-item">
	                <view class="item_box" @tap="click(item.id)">
	                    {{ item.content }}
	                </view>
	            </swiper-item>
	        </swiper>
	    </view>
</template>
<script>
	export default {
		props: {
			items: {
			    type: Array,
			    default: () => []
			}
		},
		data() {
			return {
				noticeImg:'../../static/images/home/bell.png'
			}
		},
		mounted() {
			// this.setParams()
			// this.setNoticeTimer()
			// this.$nextTick(() => {
			// 	this.setScrollNotice()
			// 	this.setScrollEvent()
			//})
		},
		watch: {
			// notice() {
			// 	clearInterval(this.noticeTimer)
			// 	this.setNoticeTimer()
			// 	this.setParams()
			// }
		},
		methods: {
			setParams() {
				this.noticeX = 0
				this.$nextTick(() => {
					this.noticeWidth = this.$refs.scrollNotice.offsetWidth
				})
			},
			setNoticeTimer() {
				this.noticeTimer = setInterval(() => {
					this.setParams()
				}, this.duration)
			},
			setScrollNotice() {
				this.scrollNotice = setInterval(() => {
					if (this.noticeWidth > Math.abs(this.noticeX)) {
						this.noticeX = this.noticeX - 1
					} else {
						this.noticeX = 0
					}
				}, 30)
			},
			setScrollEvent() { //鼠标悬停时停止滚动
				this.$refs.scrollNotice.addEventListener('mouseover', () => {
					clearInterval(this.scrollNotice)
				})
				this.$refs.scrollNotice.addEventListener('mouseout', () => {
					this.setScrollNotice()
				})
			}
		}
	}
</script>
<style>
	 .notice_bg{
	        /* margin: 32rpx; */
	        background-color: #FFFFFF;
	        border-radius: 8rpx;
	        padding: 16rpx 20rpx;
	        display: flex;
	        align-items: center;
			border: 2px solid #f6f6f6;
			}
	        .icon{
	            width: 40rpx;
	            height: 40rpx;
	        }
	        .line{
	            margin: 0 16rpx 0 20rpx;
	            /* background-color: #F4F4F4;
	            width: 2rpx; */
	            height: 68rpx;
	        }
	        .bar-swiper{
	            font-size: 24rpx;
	            font-family: PingFangSC-Regular, PingFang SC;
	            font-weight: 400;
	            color: rgba(34, 34, 34, 0.5);
	            height: 80rpx;
	            display: flex;
	            align-items: center;
	            flex: 1;
	            margin-left: 12rpx;
	        }
	        .swiper-item {
	            display: flex;
	            align-items: center;
	            overflow: hidden;
	        }
	        .circle{
	            min-width: 10rpx;
	            width: 10rpx;
	            height: 10rpx;
	            border-radius: 50%;
	            background-color: rgba(34, 34, 34, 0.5);
	            margin-right: 10rpx;
	        }
	        .item_box{
	            word-break: break-all;  /* break-all(允许在单词内换行。) */
	            text-overflow: ellipsis;  /* 超出部分省略号 */
	            display: -webkit-box; /** 对象作为伸缩盒子模型显示 **/
	            -webkit-box-orient: vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/
	            -webkit-line-clamp: 1; /** 显示的行数 **/
	        }
	    
</style>