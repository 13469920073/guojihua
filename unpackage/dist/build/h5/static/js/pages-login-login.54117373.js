(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-login"],{"176e":function(e,t,n){"use strict";var o=n("8eef"),i=n.n(o);i.a},"1de5":function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"1eba":function(e,t,n){"use strict";var o=n("4ea4").default,i=o(n("5530"));n("e9c4"),n("99af");var a=o(n("e143")),s=o(n("a925"));a.default.use(s.default);var c={base:"http://139.9.65.136:8098/",getsy:"getPostList.php",detail:"getSinglePost.php",publish:"publish.php",comment:"comment.php",dtdetail:"detail.php",update_profile:"updateProfile.php",homepage:"getsc.php",fans:"fan.php",blackList:"blackList.php",delete_sc:"deletesc.php",sh:"sh.php",daren:"darenList.php",upload:"image/upload",createsmscode:"customer/member/createsmscode",logout:"customer/member/logout",login:"customer/member/login",smslogin:"customer/member/smslogin",register:"customer/member/register",changepwd:"customer/member/changepwd",realnameapplication:"customer/member/realnameapplication",getmemberinfo:"customer/member/getmemberinfo",coinassets:"coin/get/coinassets",coinassetshistory:"coin/get/coinassetshistory",getoperhistorylist:"customer/member/getoperhistorylist",gettradelist:"customer/member/gettradelist",getwalletbalance:"customer/member/getwalletbalance",getincomelist:"customer/member/getincomelist",getoutlaylist:"customer/member/getoutlaylist",applicationoutlay:"customer/member/applicationoutlay",applicationrecharge:"customer/member/applicationrecharge",getmemberaccountlist:"customer/member/getmemberaccountlist",delapplicationaccount:"customer/member/delapplicationaccount",addapplicationaccount:"customer/member/addapplicationaccount",gettradelistbystatus:"customer/member/gettradelistbystatus",createtrade:"customer/member/createtrade",get_checkcode:"sendCheckCode.php",get_msglist:"message.php",jubao:"jubao.php",feedback:"feedback.php",check_version:"checkUpdate.php",publish_note:"p/publishNotes.html",user_agreement:"p/userAgreement.html",aboutus_url:"p/aboutus.html",contactus:"p/contactus.html",disclaimer:"p/disclaimer.html",usehelp:"p/usehelp.html",privacy_agreement:"p/userPrivacy.html",feedbackList:"p/feedbackList.html",joinus:"p/joinus.html"};e.exports={post:function(e,t,n,o){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}}),console.log("this.$t('tip')",a.default.prototype._i18n.t("tip").登录中);var i,s=c.base+e,r={"content-type":"application/json"};i=uni.getStorageSync("loginuserinfo");var l=""==i?i:JSON.parse(i);l&&l.token,l["token"]&&(r.token=l["token"]),uni.request({url:s,method:"POST",header:r,dataType:"json",data:t,success:function(e){console.log("====res: ",e);var t=e.data;200==t.code?(console.log("request ok"),n(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):o&&o(t["message"]||"服务器返回错误")},fail:function(e,t){var n="请求网络失败"+JSON.stringify(e);console.log("post error: "+n),o&&o(n)}})},get:function(e,t,n,o){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var i,s,r=c.base+e;s=uni.getStorageSync("loginuserinfo"),console.log("userinfo>>>",s);var l=""==s?s:JSON.parse(s);l&&l.token,l["token"]&&(i=l["token"]),uni.request({url:r,method:"GET",header:{"content-type":"application/json",token:i},dataType:"json",data:t,success:function(e){var t=e.data;200==t.code?(console.log("request ok"),n(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):o&&o(t["message"]||"服务器返回错误")},fail:function(e,t){var n="请求网络失败"+JSON.stringify(e);console.log("post error: "+n),o&&o(n)}})},put:function(e,t,n,o){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var i,s,r=c.base+e;s=uni.getStorageSync("loginuserinfo");var l=""==s?s:JSON.parse(s);l&&l.token,l["token"]&&(i=l["token"]),uni.request({url:r,method:"PUT",header:{"Content-Type":"application/json",token:i},dataType:"json",data:t,success:function(e){var t=e.data;200==t.code?(console.log("request ok"),n(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):o&&o(t["message"]||"服务器返回错误")},fail:function(e,t){var n="请求网络失败"+JSON.stringify(e);console.log("post error: "+n),o&&o(n)}})},delete:function(e,t,n,o){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var i,s,r=c.base+e;s=uni.getStorageSync("loginuserinfo");var l=""==s?s:JSON.parse(s);l&&l.token,l["token"]&&(i=l["token"]),uni.request({url:"".concat(r,"?id=").concat(t.id),method:"DELETE",header:{"content-type":"application/json",token:i},success:function(e){var t=e.data;200==t.code?(console.log("request ok"),n(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):o&&o(t["message"]||"服务器返回错误")},fail:function(e,t){var n="请求网络失败"+JSON.stringify(e);console.log("post error: "+n),o&&o(n)}})},url:c,uploadfile:function(e,t,n,o,s){var r,l;l=uni.getStorageSync("loginuserinfo");var u=""==l?l:JSON.parse(l);u&&u.token,u["token"]&&(r=u["token"]),console.log("formData:",t),uni.uploadFile({url:c.base+e,header:{token:r},fileType:"image",filePath:t,name:"file",formData:(0,i.default)({file:t},n),success:function(e){console.log("上传成功",e);var t=e.statusCode,n=e.data,i=JSON.parse(n);console.log("obj",i),200==i.code&&200==t?(console.log("成功====》》",i),o(i)):401==i.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):s&&s(i["msg"]||"服务器返回错误")},fail:function(e){console.log("上传失败",e),s&&s(e)}})},postType:function(e){var t="life",n=e;switch(n){case"10":case"11":case"12":case"13":case"14":case"15":t="sy";break;case"6":t="zt";break;default:break}return t}}},2244:function(e,t){e.exports="data:image/png;base64,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"},2801:function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("v-uni-view",{staticClass:"login-container",staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[o("v-uni-view",{staticStyle:{"margin-top":"50px"}},[o("v-uni-image",{staticStyle:{width:"100px",height:"100px"},attrs:{src:n("2244"),mode:""}})],1),o("v-uni-view",{staticClass:"longin-head-nav flex"},[o("v-uni-view",{staticClass:"switch-l",class:0==e.loginWay?"activite":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkIndex(0)}}},[e._v(e._s(e.i18n.手机登录))]),o("v-uni-view",{staticClass:"switch-l",class:1==e.loginWay?"activite":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkIndex(1)}}},[e._v(e._s(e.i18n.邮箱登录))])],1),o("v-uni-view",{staticStyle:{width:"100%","margin-top":"45px"}},[o("v-uni-view",{staticClass:"text-white",staticStyle:{padding:"20px"}},[0==e.loginWay?o("v-uni-view",{staticClass:"uni-login-input flex"},[o("v-uni-input",{staticStyle:{width:"40px"},attrs:{type:"text",placeholder:e.i18n.区号,maxlength:"11"},model:{value:e.phone,callback:function(t){e.phone=t},expression:"phone"}}),o("v-uni-input",{staticStyle:{width:"100%"},attrs:{type:"number",placeholder:e.i18n.请输入手机号,maxlength:"11"},model:{value:e.phonenumber,callback:function(t){e.phonenumber=t},expression:"phonenumber"}})],1):e._e(),1==e.loginWay?o("v-uni-input",{attrs:{type:"text",placeholder:e.i18n.请输入邮箱},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}):e._e(),e.isCode?o("v-uni-view",{staticClass:"uni-reguster-input"},[o("v-uni-input",{staticStyle:{"margin-top":"6px"},attrs:{type:"text",placeholder:e.i18n.请输入验证码},model:{value:e.smsCode,callback:function(t){e.smsCode=t},expression:"smsCode"}}),o("v-uni-button",{staticClass:"uni-abs-right",class:e.countdown>0?"bg-blue":"",attrs:{size:"mini",disabled:e.countdown>0},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.sendCode.apply(void 0,arguments)}}},[e._v(e._s(e.countdown>0?e.countdown+"s后重新获取":e.i18n.获取验证码))])],1):o("v-uni-view",{staticClass:"uni-reguster-input"},[o("v-uni-input",{staticStyle:{"margin-top":"6px"},attrs:{type:"password",password:"true",placeholder:e.i18n.请输入密码},model:{value:e.passWord,callback:function(t){e.passWord=t},expression:"passWord"}})],1),o("v-uni-button",{staticStyle:{"margin-top":"60px","background-color":"#0080ff",height:"45px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v(e._s(e.i18n.登录))])],1),o("v-uni-view",{staticStyle:{display:"flex",margin:"0 30px"}},[o("v-uni-view",{staticStyle:{width:"100%"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.register.apply(void 0,arguments)}}},[o("v-uni-text",{staticClass:"login-btn"},[e._v(e._s(e.i18n.用户注册))])],1),o("v-uni-view",{staticStyle:{"flex-shrink":"0"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.findPassword.apply(void 0,arguments)}}},[o("v-uni-text",{staticClass:"login-btn"},[e._v(e._s(e.i18n.找回密码))])],1)],1),o("v-uni-view",{staticStyle:{display:"flex",margin:"30px 0"}},[o("v-uni-view",{staticStyle:{"text-align":"center",width:"100%"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.codeLogin.apply(void 0,arguments)}}},[o("v-uni-text",{staticClass:"login-btn"},[e._v(e._s(e.i18n.验证码登录))])],1)],1)],1)],1)},i=[]},"404b":function(e,t,n){"use strict";n.r(t);var o=n("2801"),i=n("e360");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("176e");var s=n("f0c5"),c=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"6c33a9a4",null,!1,o["a"],void 0);t["default"]=c.exports},4486:function(e,t,n){e.exports=n.p+"static/img/login-bg.9c08ec54.png"},"818e":function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac1f"),n("00b4"),n("e9c4");var o=n("1eba"),i={data:function(){return{isCode:!1,phonenumber:"",email:"",passWord:"",loginWay:0,phone:"",smsCode:"",prevPagePath:"",countdown:0,timer:null}},computed:{i18n:function(){return this.$t("login")}},onLoad:function(e){},methods:{checkIndex:function(e){this.loginWay=e,console.log("手机登录",this.loginWay)},codeLogin:function(){this.isCode=!this.isCode},startCountdown:function(){var e=this;this.countdown=60,this.timer=setInterval((function(){e.countdown>0?e.countdown-=1:clearInterval(e.timer)}),1e3)},sendCode:function(){var e=this;if(11==this.phonenumber.length)if(/^1[0-9]{10}$/.test(this.phonenumber)){var t={phoneNumber:this.phone+this.phonenumber,type:"LOGIN_KEY_SMS_CODE"};o.post(o.url.createsmscode,t,(function(t){t.success?e.startCountdown():uni.showToast({title:"发送失败",icon:"none"})}),(function(e){uni.showToast({title:"网络错误",icon:"none"})}))}else uni.showToast({title:this.i18n.请输入正确的手机号,icon:"none"});else uni.showToast({title:this.i18n.请输入正确的手机号,icon:"none"})},login:function(){var e,t=this,n=this.phone,i=this.phonenumber,a=this.passWord,s=this.smsCode,c=this.loginWay,r=this.email,l={};if(0==c){if(11!=i.length)return void uni.showToast({title:this.i18n.请输入正确的手机号,icon:"none"});if(!/^1[0-9]{10}$/.test(i))return void uni.showToast({title:this.i18n.请输入正确的手机号,icon:"none"});this.$set(l,"loginAccount",n+i)}else{if(!/^(.+)@(.+)$/.test(r))return void uni.showToast({title:this.i18n.请输入正确的邮箱,icon:"none"});this.$set(l,"email",r)}if(console.log("paramparamparam",l),this.isCode){if(!s)return void uni.showToast({title:this.i18n.请输入验证码,icon:"none"});this.$delete(l,"loginAccount"),this.$set(l,"phoneNumber",n+i),this.$set(l,"smsCode",s),e=o.url.smslogin}else{if(!a)return void uni.showToast({title:this.i18n.请输入密码,icon:"none"});this.$set(l,"passWord",a),e=o.url.login}uni.showLoading({title:this.$t("tip").登录中,mask:!0}),console.log("paramparamparam22>>>",l),o.post(e,l,(function(e){uni.setStorageSync("token",JSON.stringify(e.data.token)),uni.setStorageSync("loginuserinfo",JSON.stringify(e.data)),console.log("token>>>>>>: ",e.data.token),uni.hideLoading(),uni.$emit("userloginsuccess"),uni.showToast({title:t.$t("tip").登录成功,success:function(e){setTimeout((function(){uni.switchTab({url:"/pages/home/index"})}),500)}})}),(function(e){uni.hideLoading(),uni.showToast({title:e,icon:"none"})}))},register:function(){uni.navigateTo({url:"/pages/login/register"})},findPassword:function(){uni.navigateTo({url:"/pages/login/revise"})}}};t.default=i},"8eef":function(e,t,n){var o=n("c300");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("cd4718c0",o,!0,{sourceMap:!1,shadowMode:!1})},c300:function(e,t,n){var o=n("24fb"),i=n("1de5"),a=n("4486");t=o(!1);var s=i(a);t.push([e.i,".login-container[data-v-6c33a9a4]{width:100%;color:#fff;min-height:100%;position:absolute;left:0;top:0;background:url("+s+') 50% no-repeat;background-size:cover}uni-input[data-v-6c33a9a4]{padding:15px;\n  /* text-align: center; */border-width:0;border-bottom-width:1px;border-color:#f0f0f0;border-style:solid;font-size:15px}.switch-l[data-v-6c33a9a4]{padding:16px 0 8px;margin:0 14px;position:relative;font-size:16px;color:#ccc}.longin-head-nav[data-v-6c33a9a4]{width:100%;height:24px;margin:0 auto 12px;color:#ccc}.activite[data-v-6c33a9a4]{color:#fff;border-bottom:2px solid #fff}.uni-login-input[data-v-6c33a9a4]{flex-wrap:nowrap;align-items:center;justify-content:flex-start;color:#fff}.login-btn[data-v-6c33a9a4]{color:#434343;font-size:16px;color:#fff;\n  /* background-color: white; */border-width:0;border-radius:0}.uni-reguster-input[data-v-6c33a9a4]{position:relative;color:#fff}.uni-reguster-input .iphoneNum[data-v-6c33a9a4]{padding-left:66px;padding-right:30%}.bg-blue[data-v-6c33a9a4]{background:#007aff!important;color:#fff!important}.uni-abs-right[data-v-6c33a9a4]{position:absolute;background:transparent;right:0;bottom:6px;z-index:9999;\n  /* padding: 4px 12px; */border-radius:6px;border:1px solid #fff;color:#fff}.custom-navbar[data-v-6c33a9a4]{\n  /* 设置背景透明 */background-color:initial}\n\n/* \tuni-button:after {\n\t    content: " ";\n\t    width: 200%;\n\t    height: 200%;\n\t    position: absolute;\n\t    top: 0;\n\t    left: 0;\n\t    border: 0px solid rgba(0,0,0,0);\n\t    -webkit-transform: scale(.5);\n\t    transform: scale(.5);\n\t    -webkit-transform-origin: 0 0;\n\t    transform-origin: 0 0;\n\t    box-sizing: border-box;\n\t    border-radius: 0px;\n\t}\n\t */',""]),e.exports=t},e360:function(e,t,n){"use strict";n.r(t);var o=n("818e"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a}}]);