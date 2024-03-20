//设置白名单，白名单中的路径不进行拦截 (登录，首页，合约)
const whiteList = ['/pages/login/login', '/pages/home/index', '/pages/contract/index','/','/pages/contract/kline','/pages/login/register','/pages/login/revise','/pages/home/service']
// 登录页面路径
const loginPage = "/pages/login/login"


function hasPermission(url) {
  // 在白名单中或有token，直接跳转
  let t =null
  t = uni.getStorageSync('token')||''
  let token=t===''?t:JSON.parse(t)
  console.log(whiteList.indexOf(url) === -1 , !token)
  const urls=url.split('?')[0]
  console.log(urls)
  if (whiteList.indexOf(urls) === -1 && !token) {
    return true
  }
  return false
}

uni.addInterceptor('navigateTo', {
  // 页面跳转前进行拦截, invoke根据返回值进行判断是否继续执行跳转
  invoke(e) {
    console.log(e,'----')
    if (hasPermission(e.url)) {
      uni.navigateTo({
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
      uni.navigateTo({
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