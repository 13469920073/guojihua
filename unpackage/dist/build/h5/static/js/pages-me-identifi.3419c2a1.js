(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-identifi"],{"1eba":function(e,t,o){"use strict";var n=o("4ea4").default,i=n(o("5530"));o("e9c4"),o("99af");var a=n(o("e143")),s=n(o("a925"));a.default.use(s.default);var r={base:"http://139.9.65.136:8098/",getsy:"getPostList.php",detail:"getSinglePost.php",publish:"publish.php",comment:"comment.php",dtdetail:"detail.php",update_profile:"updateProfile.php",homepage:"getsc.php",fans:"fan.php",blackList:"blackList.php",delete_sc:"deletesc.php",sh:"sh.php",daren:"darenList.php",upload:"image/upload",logout:"customer/member/logout",login:"customer/member/login",register:"customer/member/register",changepwd:"customer/member/changepwd",realnameapplication:"customer/member/realnameapplication",getmemberinfo:"customer/member/getmemberinfo",coinassets:"coin/get/coinassets",coinassetshistory:"coin/get/coinassetshistory",getoperhistorylist:"customer/member/getoperhistorylist",gettradelist:"customer/member/gettradelist",getwalletbalance:"customer/member/getwalletbalance",getincomelist:"customer/member/getincomelist",getoutlaylist:"customer/member/getoutlaylist",applicationoutlay:"customer/member/applicationoutlay",applicationrecharge:"customer/member/applicationrecharge",getmemberaccountlist:"customer/member/getmemberaccountlist",delapplicationaccount:"customer/member/delapplicationaccount",addapplicationaccount:"customer/member/addapplicationaccount",gettradelistbystatus:"customer/member/gettradelistbystatus",createtrade:"customer/member/createtrade",get_checkcode:"sendCheckCode.php",get_msglist:"message.php",jubao:"jubao.php",feedback:"feedback.php",check_version:"checkUpdate.php",publish_note:"p/publishNotes.html",user_agreement:"p/userAgreement.html",aboutus_url:"p/aboutus.html",contactus:"p/contactus.html",disclaimer:"p/disclaimer.html",usehelp:"p/usehelp.html",privacy_agreement:"p/userPrivacy.html",feedbackList:"p/feedbackList.html",joinus:"p/joinus.html"};e.exports={post:function(e,t,o,n){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}}),console.log("this.$t('tip')",a.default.prototype._i18n.t("tip").登录中);var i,s=r.base+e,c={"content-type":"application/json"};i=uni.getStorageSync("loginuserinfo");var u=""==i?i:JSON.parse(i);u&&u.token,u["token"]&&(c.token=u["token"]),uni.request({url:s,method:"POST",header:c,dataType:"json",data:t,success:function(e){console.log("====res: ",e);var t=e.data;200==t.code?(console.log("request ok"),o(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(t["message"]||"服务器返回错误")},fail:function(e,t){var o="请求网络失败"+JSON.stringify(e);console.log("post error: "+o),n&&n(o)}})},get:function(e,t,o,n){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var i,s,c=r.base+e;s=uni.getStorageSync("loginuserinfo"),console.log("userinfo>>>",s);var u=""==s?s:JSON.parse(s);u&&u.token,u["token"]&&(i=u["token"]),uni.request({url:c,method:"GET",header:{"content-type":"application/json",token:i},dataType:"json",data:t,success:function(e){var t=e.data;200==t.code?(console.log("request ok"),o(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(t["message"]||"服务器返回错误")},fail:function(e,t){var o="请求网络失败"+JSON.stringify(e);console.log("post error: "+o),n&&n(o)}})},put:function(e,t,o,n){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var i,s,c=r.base+e;s=uni.getStorageSync("loginuserinfo");var u=""==s?s:JSON.parse(s);u&&u.token,u["token"]&&(i=u["token"]),uni.request({url:c,method:"PUT",header:{"Content-Type":"application/json",token:i},dataType:"json",data:t,success:function(e){var t=e.data;200==t.code?(console.log("request ok"),o(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(t["message"]||"服务器返回错误")},fail:function(e,t){var o="请求网络失败"+JSON.stringify(e);console.log("post error: "+o),n&&n(o)}})},delete:function(e,t,o,n){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var i,s,c=r.base+e;s=uni.getStorageSync("loginuserinfo");var u=""==s?s:JSON.parse(s);u&&u.token,u["token"]&&(i=u["token"]),uni.request({url:"".concat(c,"?id=").concat(t.id),method:"DELETE",header:{"content-type":"application/json",token:i},success:function(e){var t=e.data;200==t.code?(console.log("request ok"),o(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(t["message"]||"服务器返回错误")},fail:function(e,t){var o="请求网络失败"+JSON.stringify(e);console.log("post error: "+o),n&&n(o)}})},url:r,uploadfile:function(e,t,o,n,s){var c,u;u=uni.getStorageSync("loginuserinfo");var l=""==u?u:JSON.parse(u);l&&l.token,l["token"]&&(c=l["token"]),console.log("formData:",t),uni.uploadFile({url:r.base+e,header:{token:c},fileType:"image",filePath:t,name:"file",formData:(0,i.default)({file:t},o),success:function(e){console.log("上传成功",e);var t=e.statusCode,o=e.data,i=JSON.parse(o);console.log("obj",i),200==i.code&&200==t?(console.log("成功====》》",i),n(i)):401==i.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):s&&s(i["msg"]||"服务器返回错误")},fail:function(e){console.log("上传失败",e),s&&s(e)}})},postType:function(e){var t="life",o=e;switch(o){case"10":case"11":case"12":case"13":case"14":case"15":t="sy";break;case"6":t="zt";break;default:break}return t}}},"2c84":function(e,t,o){"use strict";o("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=o("1eba"),i={data:function(){return{voucher:"",voucher1:"",form:{realName:"",idCard:"",phonenumber:"",photoFront:"",photoBack:""}}},computed:{i18n:function(){return this.$t("personal")}},onShow:function(e){uni.setNavigationBarTitle({title:this.$t("personal").实名认证})},methods:{uploadBadg:function(e){var t=this;uni.chooseImage({sourceType:["camera","album"],sizeType:"compressed",count:1,success:function(o){var i=o.tempFilePaths;if(uni.showLoading({title:"正在上传..."}),console.log("filesPaths",i),i&&i.length>0){var a="front"==e?"4":"3";n.uploadfile(n.url.upload,i[0],{imageType:a},(function(o){"front"==e?(t.voucher=i[0],t.form.photoFront=o.data.url):(t.voucher1=i[0],t.form.photoBack=o.data.url),uni.hideLoading()}))}}})},onIdentifiy:function(){var e=this,t=this.form,o=t.realName,i=t.idCard,a=t.phonenumber,s=t.photoFront,r=t.photoBack;o?a?i?s?r?(uni.showLoading({title:this.$t("tip").提交中,mask:!0}),n.post(n.url.realnameapplication,this.form,(function(t){console.log("提交成功",t),uni.hideLoading(),uni.showToast({title:e.$t("tip").成功,success:function(e){setTimeout((function(){uni.switchTab({url:"/pages/me/me"})}),500)}})}),(function(e){uni.hideLoading(),uni.showToast({title:e,icon:"none"})}))):uni.showToast({title:this.i18n.请上传身份证背面,icon:"none"}):uni.showToast({title:this.i18n.请上传身份证正面,icon:"none"}):uni.showToast({title:this.i18n.请输入身份证号,icon:"none"}):uni.showToast({title:this.i18n.请输入手机号,icon:"none"}):uni.showToast({title:this.i18n.请输入真实姓名,icon:"none"})},outlogin:function(){n.get(n.url.logout,{},(function(e){uni.removeStorageSync("loginuserinfo"),uni.$emit("userloginsuccess"),uni.navigateTo({url:"/pages/login/login"})}),(function(e){uni.hideLoading(),uni.showToast({title:e,icon:"none"})}))},register:function(){uni.navigateTo({url:"register"})},findPassword:function(){}}};t.default=i},"502a":function(e,t,o){e.exports=o.p+"static/img/idcard-face.26e175b3.png"},"5f9b":function(e,t,o){"use strict";o.r(t);var n=o("dfd9"),i=o("c20a");for(var a in i)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(a);o("e043");var s=o("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"32addb00",null,!1,n["a"],void 0);t["default"]=r.exports},"5ff4":function(e,t,o){var n=o("94db");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("4f06").default;i("cf490c6a",n,!0,{sourceMap:!1,shadowMode:!1})},"94db":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,".login-container[data-v-32addb00]{width:100%;min-height:100%;position:absolute;left:0;top:0\n\t  /*  background: url(../../static/images/login-bg.png) 50% no-repeat;\n\t    background-size: cover; */}uni-input[data-v-32addb00]{padding:15px;\n\t/* text-align: center; */border-width:0;border-bottom-width:1px;border-color:#f0f0f0;border-style:solid;font-size:15px}.longin-head-nav[data-v-32addb00]{width:100%;height:24px;margin:0 auto 12px;color:#ccc}.login-btn[data-v-32addb00]{font-size:13px;color:#fff;text-align:center;width:100%;\n\t/* background-color: white; */border-width:0;border-radius:0}.uni-reguster-input[data-v-32addb00]{position:relative}.img-ocr-upload[data-v-32addb00]{display:flex;width:100%;margin-top:16px}.img-block[data-v-32addb00]{width:50%;position:relative}.bg-img[data-v-32addb00]{width:100%;height:100px;display:block}.idcard-face[data-v-32addb00]{\n\t  /* height :192px; */margin-right:10px}.idcard-badge[data-v-32addb00]{height:40px}.camera-img[data-v-32addb00]{width:48px;display:block;position:absolute;left:50%;margin-top:-120px;margin-left:-40px}.img-ocr-sub-title[data-v-32addb00]{display:flex;font-size:24px;color:#9a9fb1;font-weight:400;margin-top:40px;text-align:center;margin-bottom:20px}",""]),e.exports=t},bb5b:function(e,t,o){e.exports=o.p+"static/img/idcard-badge.fedef557.png"},c20a:function(e,t,o){"use strict";o.r(t);var n=o("2c84"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},dfd9:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"login-container",staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[n("v-uni-view",{staticStyle:{width:"100%"}},[n("v-uni-view",{staticStyle:{padding:"20px"}},[n("v-uni-view",{staticClass:"uni-reguster-input"},[n("v-uni-input",{attrs:{type:"text",placeholder:e.i18n.请输入真实姓名},model:{value:e.form.realName,callback:function(t){e.$set(e.form,"realName",t)},expression:"form.realName"}})],1),n("v-uni-view",{staticClass:"uni-reguster-input"},[n("v-uni-input",{staticStyle:{"margin-top":"6px"},attrs:{type:"text",placeholder:e.i18n.请输入手机号},model:{value:e.form.phonenumber,callback:function(t){e.$set(e.form,"phonenumber",t)},expression:"form.phonenumber"}})],1),n("v-uni-view",{staticClass:"uni-reguster-input"},[n("v-uni-input",{staticStyle:{"margin-top":"6px"},attrs:{type:"text",placeholder:e.i18n.请输入身份证号},model:{value:e.form.idCard,callback:function(t){e.$set(e.form,"idCard",t)},expression:"form.idCard"}})],1),n("v-uni-view",{staticClass:"img-ocr-upload"},[n("v-uni-view",{staticClass:"img-block idcard-face"},[n("v-uni-view",{staticClass:"img-ocr-upload"},[e._v(e._s(e.i18n.身份证人像))]),n("v-uni-view",{staticClass:"bg-img",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadBadg("front")}}},[e.voucher?e._e():n("img",{staticClass:"bg-img",attrs:{src:o("bb5b"),alt:""}}),e.voucher?n("v-uni-image",{staticClass:"bg-img",attrs:{src:e.voucher}}):e._e()],1)],1),n("v-uni-view",{staticClass:"img-block idcard-badge"},[n("v-uni-view",{staticClass:"img-ocr-upload"},[e._v(e._s(e.i18n.身份证国徽))]),n("v-uni-view",{staticClass:"bg-img",on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.uploadBadg("back")}}},[e.voucher1?e._e():n("img",{staticClass:"bg-img",attrs:{src:o("502a"),alt:""}}),e.voucher1?n("v-uni-image",{staticClass:"bg-img",attrs:{src:e.voucher1}}):e._e()],1)],1)],1),n("v-uni-button",{staticStyle:{"margin-top":"60px","background-color":"#0080ff",height:"45px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onIdentifiy.apply(void 0,arguments)}}},[e._v(e._s(e.i18n.提交))])],1)],1)],1)},i=[]},e043:function(e,t,o){"use strict";var n=o("5ff4"),i=o.n(n);i.a}}]);