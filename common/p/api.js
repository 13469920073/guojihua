import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);

//api接口定义
var URL = {
  //base:'http://39.106.164.101:80/tt/',
  base: 'https://banksagitarii.com/prod-api/',
  //base: 'http://139.9.65.136:8098/',
  getsy: 'getPostList.php',
  detail: 'getSinglePost.php',
  publish: 'publish.php',
  comment: 'comment.php',
  dtdetail: 'detail.php',
  update_profile: 'updateProfile.php',
  homepage: 'getsc.php',
  fans: 'fan.php',
  blackList: 'blackList.php',
  delete_sc: 'deletesc.php',
  sh: 'sh.php',
  daren: 'darenList.php',
  upload: 'image/upload',  //上传图片
  createsmscode: 'customer/member/createsmscode', //生成手机验证码
  logout: 'customer/member/logout', //退出当前登录
  login: 'customer/member/login', //登录接口
  smslogin: 'customer/member/smslogin', //验证码登录
  register: 'customer/member/register',  //用户注册
  changepwd: 'customer/member/changepwd',  //密码重置
  realnameapplication: 'customer/member/realnameapplication',  //用户实名认证
  getmemberinfo: 'customer/member/getmemberinfo',  //获取用户信息
  coinassets: 'coin/get/coinassets', //获取币种信息
  coinassetshistory: 'coin/get/coinassetshistory', //获取币种信息
  settingtoncoin: 'coin/update/settingtoncoin', //发送Ton信息
  ratebody: 'coin/get/ratebody', //获取Ton信息
  getoperhistorylist: 'customer/member/getoperhistorylist',  //交易历史数据
  gettradelist: 'customer/member/gettradelist',  //交易列表
  getwalletbalance: 'customer/member/getwalletbalance',  //用户余额
  getincomelist: 'customer/member/getincomelist',  //充值列表
  getoutlaylist: 'customer/member/getoutlaylist',  //提现列表
  applicationoutlay: 'customer/member/applicationoutlay',  //提现申请
  applicationrecharge: 'customer/member/applicationrecharge',  //充值申请
  getmemberaccountlist: 'customer/member/getmemberaccountlist',  //我的账户列表
  delapplicationaccount: 'customer/member/delapplicationaccount',  //客户删除账号
  addapplicationaccount: 'customer/member/addapplicationaccount',  //客户新增账号
  gettradelistbystatus: 'customer/member/gettradelistbystatus',  //持仓中
  checkoutbymanual: 'customer/member/checkoutbymanual',  //平仓
  createtrade: 'customer/member/createtrade',  //客户买涨买跌接口
  // addapplicationaccount:'customer/member/addapplicationaccount',  //持仓已经完成
  get_checkcode: 'sendCheckCode.php',
  get_msglist: 'message.php',
  jubao: 'jubao.php',
  feedback: 'feedback.php',
  check_version: 'checkUpdate.php',
  //html
  publish_note: 'p/publishNotes.html',//发布须知
  user_agreement: "p/userAgreement.html",
  aboutus_url: "p/aboutus.html",
  contactus: "p/contactus.html",
  disclaimer: "p/disclaimer.html",
  usehelp: "p/usehelp.html",
  privacy_agreement: "p/userPrivacy.html",
  feedbackList: "p/feedbackList.html",
  joinus: "p/joinus.html"
}

//http://39.106.164.101:80/tt/p/feedbackList.html
//全局变量
var add_score_share = 2;//分享
var add_score_login = 1;//每日登陆
var dt_type_sy = 'sy';//动态类型
var dt_type_zt = 'zt';
var dt_type_life = 'life';
//根据type获取动态分类（首页、专题、生活）
function getItemCategory(type) {
  var _category = dt_type_life;
  var _type = type;
  switch (_type) {
    case '10':
    case '11':
    case '12':
    case '13':
    case '14':
    case '15':
      _category = dt_type_sy; break;
    case '6': _category = dt_type_zt; break;
    default: break;
  }

  return _category;
}


/**Post
 * type:请求类型
 * url:地址
 * pars:参数
 * success:成功回调
 * error:失败回调
 */
function uniPost(url, pars, success, error) {
  uni.getNetworkType({
    success: (res) => {
      console.log("---netType: " + JSON.stringify(res));
      // if(res.networkType == 'none')uni.showToast({title:'无法连接网络' , icon:"none"});
    }
  });
  console.log("this.$t('tip')", Vue.prototype._i18n.t('tip').登录中)
  var _url = URL.base + url;
  var token;
  var header = {
    "content-type": "application/json",
  }
  let userinfo = ''
  userinfo = uni.getStorageSync("loginuserinfo");
  let userJsonStr = userinfo == '' ? userinfo : JSON.parse(userinfo)
  if (userJsonStr && userJsonStr.token, userJsonStr['token']) {
    header.token = userJsonStr['token'];
  }
  uni.request({
    url: _url,
    method: "POST",
    header: header,
    dataType: "json",
    data: pars,
    success: res => {
      console.log("====res: ", res);
      var data = res.data;
      if (data.code == 200) {
        console.log("request ok");
        success(data);
      } else if (data.code == 401) {
        uni.showModal({
          title: Vue.prototype._i18n.t('tip').提示,
          content: Vue.prototype._i18n.t('tip').认证失败,
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              uni.removeStorageSync('loginuserinfo');
              uni.removeStorageSync('token');
              uni.navigateTo({
                url: '/pages/login/login'
              })
            }
          }
        })

      } else {
        if (error) error(data['message'] || '服务器返回错误');
      }
    },
    fail: (data, code) => {
      var err = '请求网络失败' + JSON.stringify(data);
      console.log("post error: " + err)
      if (error) { error(err); }
    }
  });
}

/**get
 * type:请求类型
 * url:地址
 * pars:参数
 * success:成功回调
 * error:失败回调
 */
function uniGet(url, pars, success, error) {
  uni.getNetworkType({
    success: (res) => {
      console.log("---netType: " + JSON.stringify(res));
      // if(res.networkType == 'none')uni.showToast({title:'无法连接网络' , icon:"none"});
    }
  });

  var _url = URL.base + url;
  var token;
  let userinfo = ''
  userinfo = uni.getStorageSync("loginuserinfo");
  console.log("userinfo>>>", userinfo)
  let userJsonStr = userinfo == '' ? userinfo : JSON.parse(userinfo)
  if (userJsonStr && userJsonStr.token, userJsonStr['token']) {
    token = userJsonStr['token'];
  }
  uni.request({
    url: _url, method: "GET",
    header: {
      "content-type": "application/json",
      'token': token,
    },
    dataType: "json",
    data: pars,
    success: res => {
      // console.log("====res: " + JSON.stringify(res));
      var data = res.data;
      if (data.code == 200) {
        console.log("request ok");
        success(data);
      } else if (data.code == 401) {
        uni.showModal({
          title: Vue.prototype._i18n.t('tip').提示,
          content: Vue.prototype._i18n.t('tip').认证失败,
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              uni.removeStorageSync('loginuserinfo');
              uni.removeStorageSync('token');
              uni.navigateTo({
                url: '/pages/login/login'
              })
            }
          }
        })

      } else {
        if (error) error(data['message'] || '服务器返回错误');
      }
    },
    fail: (data, code) => {
      var err = '请求网络失败' + JSON.stringify(data);
      console.log("post error: " + err)
      if (error) { error(err); }
    }
  });
}

/**put
 * type:请求类型
 * url:地址
 * pars:参数
 * success:成功回调
 * error:失败回调
 */
function uniPut(url, pars, success, error) {
  uni.getNetworkType({
    success: (res) => {
      console.log("---netType: " + JSON.stringify(res));
      // if(res.networkType == 'none')uni.showToast({title:'无法连接网络' , icon:"none"});
    }
  });

  var _url = URL.base + url;
  var token;
  let userinfo = ''
  userinfo = uni.getStorageSync("loginuserinfo");
  let userJsonStr = userinfo == '' ? userinfo : JSON.parse(userinfo)
  if (userJsonStr && userJsonStr.token, userJsonStr['token']) {
    token = userJsonStr['token'];
  }
  uni.request({
    url: _url, method: "PUT",
    header: {
      "Content-Type": "application/json",
      'token': token,
    },
    dataType: "json",
    data: pars,
    success: res => {
      // console.log("====res: " + JSON.stringify(res));
      var data = res.data;
      if (data.code == 200) {
        console.log("request ok");
        success(data);
      } else if (data.code == 401) {
        uni.showModal({
          title: Vue.prototype._i18n.t('tip').提示,
          content: Vue.prototype._i18n.t('tip').认证失败,
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              uni.removeStorageSync('loginuserinfo');
              uni.removeStorageSync('token');
              uni.navigateTo({
                url: '/pages/login/login'
              })
            }
          }
        })

      } else {
        if (error) error(data['message'] || '服务器返回错误');
      }
    },
    fail: (data, code) => {
      var err = '请求网络失败' + JSON.stringify(data);
      console.log("post error: " + err)
      if (error) { error(err); }
    }
  });
}
/**delete
 * type:请求类型
 * url:地址
 * pars:参数
 * success:成功回调
 * error:失败回调
 */
function uniDelete(url, pars, success, error) {
  uni.getNetworkType({
    success: (res) => {
      console.log("---netType: " + JSON.stringify(res));
      // if(res.networkType == 'none')uni.showToast({title:'无法连接网络' , icon:"none"});
    }
  });

  var _url = URL.base + url;
  var token;
  let userinfo = ''
  userinfo = uni.getStorageSync("loginuserinfo");
  let userJsonStr = userinfo == '' ? userinfo : JSON.parse(userinfo)
  if (userJsonStr && userJsonStr.token, userJsonStr['token']) {
    token = userJsonStr['token'];
  }
  uni.request({
    url: `${_url}?id=${pars.id}`,
    method: "DELETE",
    header: {
      "content-type": "application/json",
      'token': token,
    },
    //dataType:"json",
    //pars,
    success: res => {
      // console.log("====res: " + JSON.stringify(res));
      var data = res.data;
      if (data.code == 200) {
        console.log("request ok");
        success(data);
      } else if (data.code == 401) {
        uni.showModal({
          title: Vue.prototype._i18n.t('tip').提示,
          content: Vue.prototype._i18n.t('tip').认证失败,
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              uni.removeStorageSync('loginuserinfo');
              uni.removeStorageSync('token');
              uni.navigateTo({
                url: '/pages/login/login'
              })
            }
          }
        })

      } else {
        if (error) error(data['message'] || '服务器返回错误');
      }
    },
    fail: (data, code) => {
      var err = '请求网络失败' + JSON.stringify(data);
      console.log("post error: " + err)
      if (error) { error(err); }
    }
  });
}

/**
 * @param {Object} url
 * @param {Object} pars
 * @param {Object} files
 * @param {Object} success
 * @param {Object} error
 */
function uniUploadFile(url, filePath, type, success, error) {
  // var igs = files.map((value, index) => {
  // 	return {name: "files[" + index + ']',uri: value}
  //});
  var token;
  let userinfo = ''
  userinfo = uni.getStorageSync("loginuserinfo");
  let userJsonStr = userinfo == '' ? userinfo : JSON.parse(userinfo)
  if (userJsonStr && userJsonStr.token, userJsonStr['token']) {
    token = userJsonStr['token'];
  }
  //用户权限验证参数

  console.log("formData:", filePath);
  //console.log("pars:" + JSON.stringify(pars));//return;
  uni.uploadFile({
    url: URL.base + url,
    header: {
      token
    },
    fileType: 'image',
    filePath: filePath,
    name: 'file', // 必须填写，后端用来解析文件流的字段名
    formData: {
      'file': filePath,
      ...type
    },
    //formData: formData,
    success: (res) => {
      console.log("上传成功", res)
      var code = res.statusCode, dataStr = res.data;
      var obj = JSON.parse(dataStr);
      console.log("obj", obj)
      if (obj.code == 200 && code == 200) {
        console.log("成功====》》", obj)
        success(obj);
      } else if (obj.code == 401) {
        uni.showModal({
          title: Vue.prototype._i18n.t('tip').提示,
          content: Vue.prototype._i18n.t('tip').认证失败,
          showCancel: false,
          success: function (res) {
            if (res.confirm) {
              uni.removeStorageSync('loginuserinfo');
              uni.removeStorageSync('token');
              uni.navigateTo({
                url: '/pages/login/login'
              })
            }
          }
        })

      } else {
        if (error) error(obj['msg'] || '服务器返回错误');
      }
    },
    fail: (res) => {
      console.log("上传失败", res)
      if (error) error(res); return;
      uni.showToast({ title: "请求网络失败!", icon: 'none' });
    }
  });
}

module.exports = {
  post: uniPost,
  get: uniGet,
  put: uniPut,
  delete: uniDelete,
  url: URL,
  uploadfile: uniUploadFile,
  postType: getItemCategory
}

/*
{
  "data": {
    "status": 200,
    "msg": "ok",
    "body": []
  },
  "statusCode": 200,
  "header": {
    "connection": "Keep-Alive",
    "content-type": "application/json;charset=UTF-8",
    "date": "Thu, 26 Sep 2019 07:09:18 GMT",
    "keep-alive": "timeout=5, max=100",
    "server": "Apache/2.4.6 (CentOS) PHP/5.6.31",
    "transfer-encoding": "Identity",
    "x-powered-by": "PHP/5.6.31"
  },
  "errMsg": "request:ok"
}
*/