//设置白名单，白名单中的路径不进行拦截 (登录，首页，合约)
const whiteList = ['/pages/login/login', '/pages/home/index', '/pages/contract/index']
// 登录页面路径
const loginPage = "/pages/login/login"


function hasPermission(url) {
  // 在白名单中或有token，直接跳转
  const token = uni.getStorageSync('token') || ''
  if (whiteList.indexOf(url) === -1 && !token) {
    return true
  }
  return false
}

uni.addInterceptor('navigateTo', {
  // 页面跳转前进行拦截, invoke根据返回值进行判断是否继续执行跳转
  invoke(e) {
    console.log(e,'----')
    if (hasPermission(e.url)) {
      uni.reLaunch({
        url: '/pages/login/login'
      })
      return false
    }
    return true
  },
  success(e) {
    // console.log(e)
  }
})

uni.addInterceptor('switchTab', {
  // tabbar页面跳转前进行拦截
  invoke(e) {
    console.log(e,'----')
    if (hasPermission(e.url)) {
      uni.reLaunch({
        url: '/pages/login/login'
      })
      return false
    }
    return true
  },
  success(e) {
    console.log(e,'------')
  }
})