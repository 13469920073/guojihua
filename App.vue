<script>
	export default {
    	data(){
			return {
			 
			}
		},
    methods:{
    
    },
		onLaunch: function () {
      const whiteList=['/pages/login/login', '/pages/home/index', '/pages/contract/index']
      function hasPermission(url) {
        // 在白名单中或有token，直接跳转
        const token = uni.getStorageSync('token') || ''
        // if(url===undefined) return true
        if (whiteList.indexOf(url) === -1 && !token) {
          return true
        }
        console.log(555)
        return false
      }
      uni.addInterceptor('navigateTo', { //监听跳转
         invoke(e) {
              if (hasPermission(e.url)) {
                uni.reLaunch({
                  url: '/pages/login/login'
                })
                return false
              }
              return true
            },
				success(e) {
					
				}
			})
			uni.addInterceptor('redirectTo', { //监听关闭本页面跳转
				success(e) {
				}
			})
			uni.addInterceptor('switchTab', { //监听tabBar跳转
          invoke(e) {
              if (hasPermission(e.url)) {
                uni.reLaunch({
                  url: '/pages/login/login'
                })
                return false
              }
              return true
            },
				success(e) {
				}
			})

			console.log('App Launch')
		},
		onShow: function () {
			console.log('App Show')
			

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
