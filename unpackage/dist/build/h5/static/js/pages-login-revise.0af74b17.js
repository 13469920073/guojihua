(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-revise"],{"1de5":function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),e=e&&e.__esModule?e.default:e,"string"!==typeof e?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},"1eba":function(e,t,n){n("e9c4"),n("99af");var o={base:"http://139.9.65.136:8098/",getsy:"getPostList.php",detail:"getSinglePost.php",publish:"publish.php",comment:"comment.php",dtdetail:"detail.php",update_profile:"updateProfile.php",homepage:"getsc.php",fans:"fan.php",blackList:"blackList.php",delete_sc:"deletesc.php",sh:"sh.php",daren:"darenList.php",upload:"image/upload",logout:"customer/member/logout",login:"customer/member/login",register:"customer/member/register",changepwd:"customer/member/changepwd",coinassets:"coin/get/coinassets",coinassetshistory:"coin/get/coinassetshistory",getoperhistorylist:"customer/member/getoperhistorylist",gettradelist:"customer/member/gettradelist",getincomelist:"customer/member/getincomelist",getoutlaylist:"customer/member/getoutlaylist",applicationoutlay:"customer/member/applicationoutlay",applicationrecharge:"customer/member/applicationrecharge",getmemberaccountlist:"customer/member/getmemberaccountlist",delapplicationaccount:"customer/member/delapplicationaccount",addapplicationaccount:"customer/member/addapplicationaccount",get_checkcode:"sendCheckCode.php",get_msglist:"message.php",jubao:"jubao.php",feedback:"feedback.php",check_version:"checkUpdate.php",publish_note:"p/publishNotes.html",user_agreement:"p/userAgreement.html",aboutus_url:"p/aboutus.html",contactus:"p/contactus.html",disclaimer:"p/disclaimer.html",usehelp:"p/usehelp.html",privacy_agreement:"p/userPrivacy.html",feedbackList:"p/feedbackList.html",joinus:"p/joinus.html"};e.exports={post:function(e,t,n,i){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var a,s,r=o.base+e;s=uni.getStorageSync("loginuserinfo");var c=""==s?s:JSON.parse(s);if(c){var l=c.data;l&&l["token"]&&(a=l["token"])}uni.request({url:r,method:"POST",header:{"content-type":"application/json",token:a},dataType:"json",data:t,success:function(e){console.log("====res: ",e);var t=e.data;200==t.code?(console.log("request ok"),n(t)):i&&i(t["msg"]||"服务器返回错误")},fail:function(e,t){var n="请求网络失败"+JSON.stringify(e);console.log("post error: "+n),i&&i(n)}})},get:function(e,t,n,i){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var a,s,r=o.base+e;s=uni.getStorageSync("loginuserinfo");var c=""==s?s:JSON.parse(s);if(c){var l=c.data;l&&l["token"]&&(a=l["token"])}uni.request({url:r,method:"GET",header:{"content-type":"application/json",token:a},dataType:"json",data:t,success:function(e){var t=e.data;200==t.code?(console.log("request ok"),n(t)):i&&i(t["msg"]||"服务器返回错误")},fail:function(e,t){var n="请求网络失败"+JSON.stringify(e);console.log("post error: "+n),i&&i(n)}})},put:function(e,t,n,i){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var a,s,r=o.base+e;s=uni.getStorageSync("loginuserinfo");var c=""==s?s:JSON.parse(s);if(c){var l=c.data;l&&l["token"]&&(a=l["token"])}uni.request({url:r,method:"PUT",header:{"Content-Type":"application/x-www-form-urlencoded",token:a},dataType:"json",data:t,success:function(e){var t=e.data;200==t.code?(console.log("request ok"),n(t)):i&&i(t["msg"]||"服务器返回错误")},fail:function(e,t){var n="请求网络失败"+JSON.stringify(e);console.log("post error: "+n),i&&i(n)}})},delete:function(e,t,n,i){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var a,s,r=o.base+e;s=uni.getStorageSync("loginuserinfo");var c=""==s?s:JSON.parse(s);if(c){var l=c.data;l&&l["token"]&&(a=l["token"])}uni.request({url:"".concat(r,"?id=").concat(t.id),method:"DELETE",header:{"content-type":"application/json",token:a},success:function(e){var t=e.data;200==t.code?(console.log("request ok"),n(t)):i&&i(t["msg"]||"服务器返回错误")},fail:function(e,t){var n="请求网络失败"+JSON.stringify(e);console.log("post error: "+n),i&&i(n)}})},url:o,uploadfile:function(e,t,n,i){var a,s;s=uni.getStorageSync("loginuserinfo");var r=""==s?s:JSON.parse(s);if(r){var c=r.data;c&&c["token"]&&(a=c["token"])}var l=new FormData;l.append("file",t),console.log("formDataformData===",l),console.log("pars:",t),console.log("formData:",l),uni.uploadFile({url:o.base+e,header:{token:a,"content-type":"multipart/form-data"},fileType:"image",filePath:t,name:"file",formData:{imageType:"1"},success:function(e){console.log("上传成功");var t=e.statusCode,o=e.data,a=JSON.parse(o);200==a.status&&200==t?n(a.body):i&&i(a["msg"]||"服务器返回错误")},fail:function(e){console.log("上传失败",e),i&&i(e)}})},postType:function(e){var t="life",n=e;switch(n){case"10":case"11":case"12":case"13":case"14":case"15":t="sy";break;case"6":t="zt";break;default:break}return t}}},"3f85":function(e,t,n){"use strict";n.r(t);var o=n("5b7d"),i=n("43a7");for(var a in i)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return i[e]}))}(a);n("c729");var s=n("f0c5"),r=Object(s["a"])(i["default"],o["b"],o["c"],!1,null,"434ac34e",null,!1,o["a"],void 0);t["default"]=r.exports},"43a7":function(e,t,n){"use strict";n.r(t);var o=n("dfa9"),i=n.n(o);for(var a in o)["default"].indexOf(a)<0&&function(e){n.d(t,e,(function(){return o[e]}))}(a);t["default"]=i.a},4486:function(e,t,n){e.exports=n.p+"static/img/login-bg.9c08ec54.png"},"5b7d":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){}));var o=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login-container",staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[n("v-uni-view",{staticStyle:{width:"100%","margin-top":"45px"}},[n("v-uni-view",{staticStyle:{padding:"20px",color:"#fff"}},[n("v-uni-view",{staticClass:"uni-reguster-input"},[0==e.loginWay?n("v-uni-input",{attrs:{type:"number",placeholder:e.i18n.请输入手机号,maxlength:"11"},model:{value:e.phonenumber,callback:function(t){e.phonenumber=t},expression:"phonenumber"}}):e._e(),1==e.loginWay?n("v-uni-input",{attrs:{type:"number",placeholder:e.i18n.请输入邮箱,maxlength:"11"},model:{value:e.email,callback:function(t){e.email=t},expression:"email"}}):e._e(),n("v-uni-view",{staticClass:"uni-iphone-right"},[n("v-uni-view",{staticClass:"switch-l",class:0==e.loginWay?"activite":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkIndex(0)}}},[e._v(e._s(e.i18n.手机))]),n("v-uni-view",{staticClass:"switch-l",class:1==e.loginWay?"activite":"",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.checkIndex(1)}}},[e._v(e._s(e.i18n.邮箱))])],1)],1),n("v-uni-view",{staticClass:"uni-reguster-input"},[n("v-uni-input",{staticStyle:{"margin-top":"6px"},attrs:{type:"text",placeholder:e.i18n.请输入验证码},model:{value:e.pwd,callback:function(t){e.pwd=t},expression:"pwd"}}),n("v-uni-text",{staticClass:"uni-abs-right"},[e._v(e._s(e.i18n.获取验证码))])],1),n("v-uni-input",{staticStyle:{"margin-top":"6px"},attrs:{type:"text",password:"true",placeholder:e.i18n.请输入新密码},model:{value:e.passWord,callback:function(t){e.passWord=t},expression:"passWord"}}),n("v-uni-input",{staticStyle:{"margin-top":"6px"},attrs:{type:"text",password:"true",placeholder:e.i18n.请确认新密码},model:{value:e.newPwd,callback:function(t){e.newPwd=t},expression:"newPwd"}}),n("v-uni-button",{staticStyle:{"margin-top":"60px","background-color":"#0080ff",height:"45px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[e._v(e._s(e.i18n.提交))])],1)],1)],1)},i=[]},"5e3a":function(e,t,n){var o=n("24fb"),i=n("1de5"),a=n("4486");t=o(!1);var s=i(a);t.push([e.i,".login-container[data-v-434ac34e]{width:100%;min-height:100%;position:absolute;left:0;top:0;background:url("+s+') 50% no-repeat;background-size:cover}uni-input[data-v-434ac34e]{padding:15px;\n\t\t/* text-align: center; */border-width:0;border-bottom-width:1px;border-color:#f0f0f0;border-style:solid;font-size:15px}.switch-l[data-v-434ac34e]{padding:4px 8px;border-right:1px solid #fff;color:#999;position:relative}.longin-head-nav[data-v-434ac34e]{width:100%;height:24px;margin:0 auto 12px;color:#ccc}.activite[data-v-434ac34e]{color:#fff}.login-btn[data-v-434ac34e]{font-size:13px;color:#fff;text-align:center;width:100%;\n\t\t/* background-color: white; */border-width:0;border-radius:0}.uni-reguster-input[data-v-434ac34e]{position:relative}.uni-abs-right[data-v-434ac34e]{position:absolute;right:0;bottom:6px;padding:4px 12px;border-radius:6px;border:1px solid #fff;color:#fff}.uni-iphone-right[data-v-434ac34e]{display:flex;position:absolute;right:0;bottom:6px;border:1px solid #f1f1f1;border-radius:6px}\n\t/* \tuni-button:after {\n\t    content: " ";\n\t    width: 200%;\n\t    height: 200%;\n\t    position: absolute;\n\t    top: 0;\n\t    left: 0;\n\t    border: 0px solid rgba(0,0,0,0);\n\t    -webkit-transform: scale(.5);\n\t    transform: scale(.5);\n\t    -webkit-transform-origin: 0 0;\n\t    transform-origin: 0 0;\n\t    box-sizing: border-box;\n\t    border-radius: 0px;\n\t}\n\t */',""]),e.exports=t},"76eb":function(e,t,n){var o=n("5e3a");o.__esModule&&(o=o.default),"string"===typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);var i=n("4f06").default;i("388b6ab2",o,!0,{sourceMap:!1,shadowMode:!1})},c729:function(e,t,n){"use strict";var o=n("76eb"),i=n.n(o);i.a},dfa9:function(e,t,n){"use strict";n("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,n("ac1f"),n("00b4"),n("e9c4");var o=n("1eba"),i={data:function(){return{loginWay:0,inviteCode:"",phonenumber:"",email:"",passWord:"",newPwd:"",phone:"",pwd:""}},computed:{i18n:function(){return this.$t("login")}},methods:{checkIndex:function(e){this.loginWay=e,console.log("手机登录")},login:function(){var e=this.phonenumber,t=this.passWord,n=this.loginWay,i=this.email;if(11==e.length)if(t.length<6)uni.showToast({title:"请输入正确的密码",icon:"none"});else if(/^1[0-9]{10}$/.test(e))if(this.newPwd===e){var a={phonenumber:e,passWord:t,loginWay:n,email:i};uni.showLoading({title:"登录中",mask:!0}),o.put(o.url.changepwd,a,(function(e){console.log("修改成功====res: "+JSON.stringify(e)),uni.hideLoading(),console.log("登录成功",e),uni.showToast({title:"修改成功!",success:function(e){setTimeout((function(){uni.navigateBack()}),500)}})}),(function(e){uni.hideLoading(),uni.showToast({title:e,icon:"none"})}))}else uni.showToast({title:"两次输入的密码不一致",icon:"none"});else uni.showToast({title:"请输入正确的手机号",icon:"none"});else uni.showToast({title:"请输入正确的手机号",icon:"none"})},register:function(){uni.navigateTo({url:"register"})},findPassword:function(){}}};t.default=i}}]);