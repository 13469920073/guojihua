(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-register"],{"09b9":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAkFBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////+WABnwAAAAL3RSTlMAVNXEv7uzooFc8+nei3BpQTsSBsuqjlkzHxn45c+fnZmSiHNAJgvuY05MSColYg/BSXIAAAHmSURBVFjD7VbZloIwDB1UEER2EEFwF7dh+P+/G9IeNKVsnr74wH0jG0l6k/ZnxIhvx9MyAv969QPDen7ufd4tCoSFsf7E2z35BYeZ6Q71DydFIybhIPfLvEpbWVln13X+jkpVzvzS72/q1HZqRm9hZE6pVDf7/FVquLXrCntLNash/hOtSadNaBld/nticoibtfGBqOV2f5n0Tmo3kDbkQNvUM9Auf7tStHXSoWZlADq/p8neEqzUJhUpMMWSLFSVJFHUMGPybIlwIu3HEietKJg6XIRT3d/ZgD9mu1UgWDgxiLBxaqVN6/17FAwemOxLYKrHBFiBET6/nJJGimOJzkaOT5OjpA2SI85IJhGRvYz/eAQJZrsCOTG0BYvXDlnDF0NvqFh5f97A4I4NjFKwZyluYP0dPG6vT6hyx5FaQwlxI7ArJcHra0nyxQDG4n0Aq4DdmaUk6QiQlJIYzSEyxwH4EnBXJfbcFL6EjiaqdHPgP6h8EzuOMaQ0wMQJuWPsIlKWEiIgGqQZR6ROKjsFYK9FkUb3nMNRuWeYrIKBxQ9T3zg/mGHkx7l/oeRy5S7n/EIZstI8zZB1XTY0j19poktVdK2LXiyiV5vo5Sp6vYs+MESfOIKPLNFnnthDU/CpO2LEl+MfojOCd0fK774AAAAASUVORK5CYII="},"1de5":function(t,e,n){"use strict";t.exports=function(t,e){return e||(e={}),t=t&&t.__esModule?t.default:t,"string"!==typeof t?t:(/^['"].*['"]$/.test(t)&&(t=t.slice(1,-1)),e.hash&&(t+=e.hash),/["'() \t\n]/.test(t)||e.needQuotes?'"'.concat(t.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):t)}},"1eba":function(t,e,n){"use strict";var o=n("4ea4").default,i=o(n("5530"));n("e9c4"),n("99af");var a=o(n("e143")),s=o(n("a925"));a.default.use(s.default);var r={base:"http://139.9.65.136:8098/",getsy:"getPostList.php",detail:"getSinglePost.php",publish:"publish.php",comment:"comment.php",dtdetail:"detail.php",update_profile:"updateProfile.php",homepage:"getsc.php",fans:"fan.php",blackList:"blackList.php",delete_sc:"deletesc.php",sh:"sh.php",daren:"darenList.php",upload:"image/upload",logout:"customer/member/logout",login:"customer/member/login",register:"customer/member/register",changepwd:"customer/member/changepwd",realnameapplication:"customer/member/realnameapplication",getmemberinfo:"customer/member/getmemberinfo",coinassets:"coin/get/coinassets",coinassetshistory:"coin/get/coinassetshistory",getoperhistorylist:"customer/member/getoperhistorylist",gettradelist:"customer/member/gettradelist",getwalletbalance:"customer/member/getwalletbalance",getincomelist:"customer/member/getincomelist",getoutlaylist:"customer/member/getoutlaylist",applicationoutlay:"customer/member/applicationoutlay",applicationrecharge:"customer/member/applicationrecharge",getmemberaccountlist:"customer/member/getmemberaccountlist",delapplicationaccount:"customer/member/delapplicationaccount",addapplicationaccount:"customer/member/addapplicationaccount",gettradelistbystatus:"customer/member/gettradelistbystatus",createtrade:"customer/member/createtrade",get_checkcode:"sendCheckCode.php",get_msglist:"message.php",jubao:"jubao.php",feedback:"feedback.php",check_version:"checkUpdate.php",publish_note:"p/publishNotes.html",user_agreement:"p/userAgreement.html",aboutus_url:"p/aboutus.html",contactus:"p/contactus.html",disclaimer:"p/disclaimer.html",usehelp:"p/usehelp.html",privacy_agreement:"p/userPrivacy.html",feedbackList:"p/feedbackList.html",joinus:"p/joinus.html"};t.exports={post:function(t,e,n,o){uni.getNetworkType({success:function(t){console.log("---netType: "+JSON.stringify(t))}}),console.log("this.$t('tip')",a.default.prototype._i18n.t("tip").登录中);var i,s=r.base+t,c={"content-type":"application/json"};i=uni.getStorageSync("loginuserinfo");var l=""==i?i:JSON.parse(i);l&&l.token,l["token"]&&(c.token=l["token"]),uni.request({url:s,method:"POST",header:c,dataType:"json",data:e,success:function(t){console.log("====res: ",t);var e=t.data;200==e.code?(console.log("request ok"),n(e)):401==e.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(t){t.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):o&&o(e["message"]||"服务器返回错误")},fail:function(t,e){var n="请求网络失败"+JSON.stringify(t);console.log("post error: "+n),o&&o(n)}})},get:function(t,e,n,o){uni.getNetworkType({success:function(t){console.log("---netType: "+JSON.stringify(t))}});var i,s,c=r.base+t;s=uni.getStorageSync("loginuserinfo"),console.log("userinfo>>>",s);var l=""==s?s:JSON.parse(s);l&&l.token,l["token"]&&(i=l["token"]),uni.request({url:c,method:"GET",header:{"content-type":"application/json",token:i},dataType:"json",data:e,success:function(t){var e=t.data;200==e.code?(console.log("request ok"),n(e)):401==e.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(t){t.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):o&&o(e["message"]||"服务器返回错误")},fail:function(t,e){var n="请求网络失败"+JSON.stringify(t);console.log("post error: "+n),o&&o(n)}})},put:function(t,e,n,o){uni.getNetworkType({success:function(t){console.log("---netType: "+JSON.stringify(t))}});var i,s,c=r.base+t;s=uni.getStorageSync("loginuserinfo");var l=""==s?s:JSON.parse(s);l&&l.token,l["token"]&&(i=l["token"]),uni.request({url:c,method:"PUT",header:{"Content-Type":"application/json",token:i},dataType:"json",data:e,success:function(t){var e=t.data;200==e.code?(console.log("request ok"),n(e)):401==e.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(t){t.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):o&&o(e["message"]||"服务器返回错误")},fail:function(t,e){var n="请求网络失败"+JSON.stringify(t);console.log("post error: "+n),o&&o(n)}})},delete:function(t,e,n,o){uni.getNetworkType({success:function(t){console.log("---netType: "+JSON.stringify(t))}});var i,s,c=r.base+t;s=uni.getStorageSync("loginuserinfo");var l=""==s?s:JSON.parse(s);l&&l.token,l["token"]&&(i=l["token"]),uni.request({url:"".concat(c,"?id=").concat(e.id),method:"DELETE",header:{"content-type":"application/json",token:i},success:function(t){var e=t.data;200==e.code?(console.log("request ok"),n(e)):401==e.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(t){t.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):o&&o(e["message"]||"服务器返回错误")},fail:function(t,e){var n="请求网络失败"+JSON.stringify(t);console.log("post error: "+n),o&&o(n)}})},url:r,uploadfile:function(t,e,n,o,s){var c,l;l=uni.getStorageSync("loginuserinfo");var u=""==l?l:JSON.parse(l);u&&u.token,u["token"]&&(c=u["token"]),console.log("formData:",e),uni.uploadFile({url:r.base+t,header:{token:c},fileType:"image",filePath:e,name:"file",formData:(0,i.default)({file:e},n),success:function(t){console.log("上传成功",t);var e=t.statusCode,n=t.data,i=JSON.parse(n);console.log("obj",i),200==i.code&&200==e?(console.log("成功====》》",i),o(i)):401==i.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(t){t.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):s&&s(i["msg"]||"服务器返回错误")},fail:function(t){console.log("上传失败",t),s&&s(t)}})},postType:function(t){var e="life",n=t;switch(n){case"10":case"11":case"12":case"13":case"14":case"15":e="sy";break;case"6":e="zt";break;default:break}return e}}},2558:function(t,e,n){"use strict";n.r(e);var o=n("5dff"),i=n("4507");for(var a in i)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return i[t]}))}(a);n("680e");var s=n("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"115690ac",null,!1,o["a"],void 0);e["default"]=r.exports},4486:function(t,e,n){t.exports=n.p+"static/img/login-bg.9c08ec54.png"},4507:function(t,e,n){"use strict";n.r(e);var o=n("ebb2"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(t){n.d(e,t,(function(){return o[t]}))}(a);e["default"]=i.a},"5dff":function(t,e,n){"use strict";n.d(e,"b",(function(){return o})),n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){}));var o=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-uni-view",{staticClass:"login-container",staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[o("v-uni-view",{staticStyle:{width:"100%","margin-top":"45px"}},[o("v-uni-view",{staticStyle:{padding:"20px",color:"#fff"}},[o("v-uni-input",{attrs:{type:"number",placeholder:t.i18n.邀请码,maxlength:"11"},model:{value:t.inviteCode,callback:function(e){t.inviteCode=e},expression:"inviteCode"}}),o("v-uni-view",{staticClass:"uni-reguster-input"},[0==t.loginWay?o("v-uni-view",{staticClass:"uni-reguster-item"},[o("v-uni-input",{staticClass:"iphonel",attrs:{type:"text",placeholder:t.i18n.区号},model:{value:t.phone,callback:function(e){t.phone=e},expression:"phone"}}),o("v-uni-input",{staticClass:"iphoneNum",attrs:{type:"number",placeholder:t.i18n.请输入手机号,maxlength:"11"},model:{value:t.phonenumber,callback:function(e){t.phonenumber=e},expression:"phonenumber"}})],1):t._e(),1==t.loginWay?o("v-uni-input",{attrs:{type:"text",placeholder:t.i18n.请输入邮箱},model:{value:t.email,callback:function(e){t.email=e},expression:"email"}}):t._e(),o("v-uni-view",{staticClass:"uni-iphone-right"},[o("v-uni-view",{staticClass:"switch-l",class:0==t.loginWay?"activite":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkIndex(0)}}},[t._v(t._s(t.i18n.手机))]),o("v-uni-view",{staticClass:"switch-l",class:1==t.loginWay?"activite":"",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.checkIndex(1)}}},[t._v(t._s(t.i18n.邮箱))])],1)],1),o("v-uni-view",{staticClass:"uni-reguster-input"},[o("v-uni-input",{staticStyle:{"margin-top":"6px"},attrs:{type:"text",placeholder:t.i18n.请输入验证码},model:{value:t.pwd,callback:function(e){t.pwd=e},expression:"pwd"}}),o("v-uni-button",{staticClass:"uni-abs-right",attrs:{size:"mini",disabled:t.countdown>0},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.sendCode.apply(void 0,arguments)}}},[t._v(t._s(t.countdown>0?t.countdown+"s后重新获取":t.i18n.获取验证码))])],1),o("v-uni-view",{staticClass:"uni-reguster-input"},[o("v-uni-input",{staticStyle:{"margin-top":"6px"},attrs:{password:t.isPassword,placeholder:t.i18n.设置密码},model:{value:t.passWord,callback:function(e){t.passWord=e},expression:"passWord"}}),o("v-uni-text",{staticClass:"uni-abs-right",staticStyle:{border:"none"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePassword.apply(void 0,arguments)}}},[t.isPassword?o("img",{attrs:{src:n("6311"),width:"20px",alt:""}}):o("img",{attrs:{src:n("09b9"),width:"20px",alt:""}})])],1),o("v-uni-button",{staticStyle:{"margin-top":"60px","background-color":"#0080ff",height:"45px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.register.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.注册))])],1),o("v-uni-view",{staticStyle:{display:"flex"}},[o("v-uni-view",{staticClass:"login-btn"},[t._v(t._s(t.i18n.我已阅读并同意)),o("v-uni-text",{staticStyle:{color:"#f66"}},[t._v(t._s(t.i18n.服务协议))])],1)],1)],1)],1)},i=[]},6311:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAolBMVEUAAAD///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////8ELnaCAAAANXRSTlMAVYDnnozEv1pA1KtwomlDXjPdukwF982ShBXHe3VHspliOzUfC/Ps16aIKyYl77ZkLRwR4aO30nYAAAJ4SURBVFjD7ZbreoIwDIYrJxFBRCYIeD7r1E1d7//W9rTGtrSFse2v3782fUOStqHopZf+qtZ/edzMw7Rnd9NLYnrO+FrmcQMPHWuLBTnGWeB/9HCfFFhWYoWNedfDWgXXRvwpgPXbmd3r5Jv1qj8Hj+akAe+bkLW/Fgt6wEz1vIGprI5siLq/4PeuzrbaU2O3jp/TJaO84vw89FHNx8R+qQjRxU+1q/g2sQ7e6/gx3Y8CaUWrlA7reB+dvMoYRpQXZzZuNjN3hY0Q6lO+T2aph0zlfTLviTPLlFJzxkNxHO1eLhPC3xFXD1Px74dPy4CMpIMydOT6vVGIxrrAZeKmKbYth3WmEL2Bn8BLzi2RD8nMUYwoBo+EVw+gIbv8ILeHDyHriJUCRtx/IbqEJN/klCzOG7SachJTNgzIcuVQh5wnKcZg4siIjQYQIZdJSsJ4lJNuUu6ZZCPYyFMc7Kh7H3i01jr4YqMMDhxXEYg86ispWKUqTtUilng01xZxUb6IhXQPJ5yP4CZxOVJj6cBalWetKBb9H+ndkFPCPZUP81vr0ebPcnOzkagrbebvIs8lV+hEtt0ZajrO7jkai6wc3Ia0vmSJJGXQqjjfYX+CdKm0Th8pCpiH8TPoyI5Nc5a5G4U3KptyO4efi4u0Gg4Yr2pGbM6D/0RahabcS9QseP9V1UrUpi6f8Jr48xE1xqhGj7+4c9PZ3D01HurfX6BRpD6awFLPcx2mgmHtO/BG8X/mW+MdptoHi9V6ky8Xx9nzxRacGvAIrbpYK89FTXii0EoUvO3fG/Ggs5GK9NZeaanaF2yUOZ6ZXNKu3Zv+/w3dzAN66aU/6hu0T6725k1IkwAAAABJRU5ErkJggg=="},"680e":function(t,e,n){"use strict";var o=n("db96"),i=n.n(o);i.a},"9d54":function(t,e,n){var o=n("24fb"),i=n("1de5"),a=n("4486");e=o(!1);var s=i(a);e.push([t.i,".login-container[data-v-115690ac]{width:100%;min-height:100%;position:absolute;left:0;top:0;background:url("+s+') 50% no-repeat;background-size:cover}uni-input[data-v-115690ac]{padding:15px;\n\t\t/* text-align: center; */border-width:0;border-bottom-width:1px;border-color:#f0f0f0;border-style:solid;font-size:15px}.switch-l[data-v-115690ac]{padding:4px 8px;border-right:1px solid #fff;color:#999;position:relative}.longin-head-nav[data-v-115690ac]{width:100%;height:24px;margin:0 auto 12px;color:#ccc}.activite[data-v-115690ac]{color:#fff}.login-btn[data-v-115690ac]{font-size:13px;color:#fff;text-align:center;width:100%;\n\t\t/* background-color: white; */border-width:0;border-radius:0}.uni-reguster-input[data-v-115690ac]{position:relative;color:#fff}.iphonel[data-v-115690ac]{width:46px;left:0;position:absolute}.uni-reguster-item[data-v-115690ac]{color:#fff}.uni-reguster-input .iphoneNum[data-v-115690ac]{padding-left:66px;padding-right:30%}.uni-abs-right[data-v-115690ac]{position:absolute;background:transparent;right:0;bottom:6px;z-index:9999;\n\t\t/* padding: 4px 12px; */border-radius:6px;border:1px solid #fff;color:#fff}.uni-iphone-right[data-v-115690ac]{display:flex;position:absolute;right:0;bottom:6px;border:1px solid #f1f1f1;border-radius:6px}\n\t/* \tuni-button:after {\n\t    content: " ";\n\t    width: 200%;\n\t    height: 200%;\n\t    position: absolute;\n\t    top: 0;\n\t    left: 0;\n\t    border: 0px solid rgba(0,0,0,0);\n\t    -webkit-transform: scale(.5);\n\t    transform: scale(.5);\n\t    -webkit-transform-origin: 0 0;\n\t    transform-origin: 0 0;\n\t    box-sizing: border-box;\n\t    border-radius: 0px;\n\t}\n\t */',""]),t.exports=e},db96:function(t,e,n){var o=n("9d54");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[t.i,o,""]]),o.locals&&(t.exports=o.locals);var i=n("4f06").default;i("1970f974",o,!0,{sourceMap:!1,shadowMode:!1})},ebb2:function(t,e,n){"use strict";n("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,n("ac1f"),n("00b4");var o=n("1eba"),i={data:function(){return{isPassword:!0,loginWay:0,inviteCode:"486307",phonenumber:"",email:"",passWord:"",phone:"",pwd:"",countdown:0,timer:null}},computed:{i18n:function(){return this.$t("login")}},methods:{startCountdown:function(){var t=this;this.countdown=60,this.timer=setInterval((function(){t.countdown>0?t.countdown-=1:clearInterval(t.timer)}),1e3)},sendCode:function(){var t=this;uni.request({url:"https://your-api-endpoint.com/send-code",method:"POST",success:function(e){console.log("发送验证码",e),e.data.success?t.startCountdown():uni.showToast({title:"发送失败",icon:"none"})},fail:function(){uni.showToast({title:"网络错误",icon:"none"})}})},checkIndex:function(t){this.loginWay=t,console.log("手机登录")},register:function(){var t=this,e=this.phonenumber,n=this.email,i=this.passWord,a=this.loginWay,s=this.inviteCode,r={inviteCode:s,loginAccount:"",passWord:i,phonenumber:""};if(s){if(0==a){if(11!=e.length)return void uni.showToast({title:this.i18n.请输入正确的手机号,icon:"none"});if(!/^1[0-9]{10}$/.test(e))return void uni.showToast({title:this.i18n.请输入正确的手机号,icon:"none"});r.phonenumber=e,r.loginAccount=e}else{if(!/^(.+)@(.+)$/.test(n))return void uni.showToast({title:this.i18n.请输入正确的邮箱,icon:"none"});r.email=n,r.loginAccount=n}i?(uni.showLoading({title:this.$t("tip").注册中,mask:!0}),o.post(o.url.register,r,(function(e){uni.hideLoading(),uni.showToast({title:t.$t("tip").成功,success:function(t){setTimeout((function(){uni.navigateBack()}),500)}})}),(function(t){console.log("注册失败",t),uni.hideLoading(),uni.showToast({title:t,icon:"none"})}))):uni.showToast({title:this.i18n.请输入密码,icon:"none"})}else uni.showToast({title:this.i18n.请输入邀请码,icon:"none"})},togglePassword:function(){this.isPassword=!this.isPassword},findPassword:function(){}}};e.default=i}}]);