(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-login-modifyPassword"],{"1eba":function(t,e,o){"use strict";var n=o("4ea4").default,i=n(o("5530"));o("e9c4"),o("99af");var a=n(o("e143")),s=n(o("a925"));a.default.use(s.default);var r={base:"https://banksagitarii.com/prod-api/",getsy:"getPostList.php",detail:"getSinglePost.php",publish:"publish.php",comment:"comment.php",dtdetail:"detail.php",update_profile:"updateProfile.php",homepage:"getsc.php",fans:"fan.php",blackList:"blackList.php",delete_sc:"deletesc.php",sh:"sh.php",daren:"darenList.php",upload:"image/upload",createsmscode:"customer/member/createsmscode",logout:"customer/member/logout",login:"customer/member/login",smslogin:"customer/member/smslogin",register:"customer/member/register",changepwd:"customer/member/changepwd",realnameapplication:"customer/member/realnameapplication",getmemberinfo:"customer/member/getmemberinfo",coinassets:"coin/get/coinassets",coinassetshistory:"coin/get/coinassetshistory",settingtoncoin:"coin/update/settingtoncoin",ratebody:"coin/get/ratebody",getoperhistorylist:"customer/member/getoperhistorylist",gettradelist:"customer/member/gettradelist",getwalletbalance:"customer/member/getwalletbalance",getincomelist:"customer/member/getincomelist",getoutlaylist:"customer/member/getoutlaylist",applicationoutlay:"customer/member/applicationoutlay",applicationrecharge:"customer/member/applicationrecharge",getmemberaccountlist:"customer/member/getmemberaccountlist",delapplicationaccount:"customer/member/delapplicationaccount",addapplicationaccount:"customer/member/addapplicationaccount",gettradelistbystatus:"customer/member/gettradelistbystatus",checkoutbymanual:"customer/member/checkoutbymanual",createtrade:"customer/member/createtrade",get_checkcode:"sendCheckCode.php",get_msglist:"message.php",jubao:"jubao.php",feedback:"feedback.php",check_version:"checkUpdate.php",publish_note:"p/publishNotes.html",user_agreement:"p/userAgreement.html",aboutus_url:"p/aboutus.html",contactus:"p/contactus.html",disclaimer:"p/disclaimer.html",usehelp:"p/usehelp.html",privacy_agreement:"p/userPrivacy.html",feedbackList:"p/feedbackList.html",joinus:"p/joinus.html"};t.exports={post:function(t,e,o,n){uni.getNetworkType({success:function(t){console.log("---netType: "+JSON.stringify(t))}}),console.log("this.$t('tip')",a.default.prototype._i18n.t("tip").登录中);var i,s=r.base+t,c={"content-type":"application/json"};i=uni.getStorageSync("loginuserinfo");var u=""==i?i:JSON.parse(i);u&&u.token,u["token"]&&(c.token=u["token"]),uni.request({url:s,method:"POST",header:c,dataType:"json",data:e,success:function(t){console.log("====res: ",t);var e=t.data;200==e.code?(console.log("request ok"),o(e)):401==e.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(t){t.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(e["message"]||"服务器返回错误")},fail:function(t,e){var o="请求网络失败"+JSON.stringify(t);console.log("post error: "+o),n&&n(o)}})},get:function(t,e,o,n){uni.getNetworkType({success:function(t){console.log("---netType: "+JSON.stringify(t))}});var i,s,c=r.base+t;s=uni.getStorageSync("loginuserinfo"),console.log("userinfo>>>",s);var u=""==s?s:JSON.parse(s);u&&u.token,u["token"]&&(i=u["token"]),uni.request({url:c,method:"GET",header:{"content-type":"application/json",token:i},dataType:"json",data:e,success:function(t){var e=t.data;200==e.code?(console.log("request ok"),o(e)):401==e.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(t){t.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(e["message"]||"服务器返回错误")},fail:function(t,e){var o="请求网络失败"+JSON.stringify(t);console.log("post error: "+o),n&&n(o)}})},put:function(t,e,o,n){uni.getNetworkType({success:function(t){console.log("---netType: "+JSON.stringify(t))}});var i,s,c=r.base+t;s=uni.getStorageSync("loginuserinfo");var u=""==s?s:JSON.parse(s);u&&u.token,u["token"]&&(i=u["token"]),uni.request({url:c,method:"PUT",header:{"Content-Type":"application/json",token:i},dataType:"json",data:e,success:function(t){var e=t.data;200==e.code?(console.log("request ok"),o(e)):401==e.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(t){t.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(e["message"]||"服务器返回错误")},fail:function(t,e){var o="请求网络失败"+JSON.stringify(t);console.log("post error: "+o),n&&n(o)}})},delete:function(t,e,o,n){uni.getNetworkType({success:function(t){console.log("---netType: "+JSON.stringify(t))}});var i,s,c=r.base+t;s=uni.getStorageSync("loginuserinfo");var u=""==s?s:JSON.parse(s);u&&u.token,u["token"]&&(i=u["token"]),uni.request({url:"".concat(c,"?id=").concat(e.id),method:"DELETE",header:{"content-type":"application/json",token:i},success:function(t){var e=t.data;200==e.code?(console.log("request ok"),o(e)):401==e.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(t){t.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(e["message"]||"服务器返回错误")},fail:function(t,e){var o="请求网络失败"+JSON.stringify(t);console.log("post error: "+o),n&&n(o)}})},url:r,uploadfile:function(t,e,o,n,s){var c,u;u=uni.getStorageSync("loginuserinfo");var l=""==u?u:JSON.parse(u);l&&l.token,l["token"]&&(c=l["token"]),console.log("formData:",e),uni.uploadFile({url:r.base+t,header:{token:c},fileType:"image",filePath:e,name:"file",formData:(0,i.default)({file:e},o),success:function(t){console.log("上传成功",t);var e=t.statusCode,o=t.data,i=JSON.parse(o);console.log("obj",i),200==i.code&&200==e?(console.log("成功====》》",i),n(i)):401==i.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(t){t.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):s&&s(i["msg"]||"服务器返回错误")},fail:function(t){console.log("上传失败",t),s&&s(t)}})},postType:function(t){var e="life",o=t;switch(o){case"10":case"11":case"12":case"13":case"14":case"15":e="sy";break;case"6":e="zt";break;default:break}return e}}},"20d3":function(t,e,o){"use strict";o.r(e);var n=o("5b1e"),i=o("eda6");for(var a in i)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return i[t]}))}(a);o("f2c5");var s=o("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"c122a510",null,!1,n["a"],void 0);e["default"]=r.exports},"50e4":function(t,e,o){"use strict";o("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=o("1eba"),i={data:function(){return{isPassword1:!0,isPassword2:!0,isPassword3:!0,oldPwd:"",passWord:"",newPwd:"",phone:"",pwd:""}},computed:{i18n:function(){return this.$t("login")}},onShow:function(t){uni.setNavigationBarTitle({title:this.$t("personal").修改密码})},methods:{togglePassword1:function(){this.isPassword1=!this.isPassword1},togglePassword2:function(){this.isPassword2=!this.isPassword2},togglePassword3:function(){this.isPassword3=!this.isPassword3},modifPwd:function(){var t=this,e=this,o=this.passWord,i=(this.newPwd,this.oldPwd);if(i)if(this.newPwd===o){var a={oldPwd:i,passWord:o};uni.showLoading({title:this.$t("tip").修改中,mask:!0}),n.post(n.url.changepwd,a,(function(o){uni.hideLoading(),uni.showToast({title:t.$t("tip").修改成功,success:function(t){setTimeout((function(){e.outlogin()}),500)}})}),(function(t){uni.hideLoading(),uni.showToast({title:t,icon:"none"})}))}else uni.showToast({title:this.i18n.密码不一致,icon:"none"});else uni.showToast({title:this.i18n.请输入原密码,icon:"none"})},outlogin:function(){n.get(n.url.logout,{},(function(t){uni.removeStorageSync("loginuserinfo"),uni.$emit("userloginsuccess"),uni.navigateTo({url:"/pages/login/login"})}),(function(t){uni.hideLoading(),uni.showToast({title:t,icon:"none"})}))},register:function(){uni.navigateTo({url:"register"})},findPassword:function(){}}};e.default=i},5812:function(t,e,o){var n=o("f67a");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var i=o("4f06").default;i("3e4f527b",n,!0,{sourceMap:!1,shadowMode:!1})},"5b1e":function(t,e,o){"use strict";o.d(e,"b",(function(){return n})),o.d(e,"c",(function(){return i})),o.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"login-container",staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[n("v-uni-view",{staticStyle:{width:"100%"}},[n("v-uni-view",{staticStyle:{padding:"20px"}},[n("v-uni-view",{staticClass:"uni-reguster-input"},[n("v-uni-input",{attrs:{type:"text",password:t.isPassword1,placeholder:t.i18n.请输入原密码},model:{value:t.oldPwd,callback:function(e){t.oldPwd=e},expression:"oldPwd"}}),n("v-uni-text",{staticClass:"uni-abs-right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePassword1.apply(void 0,arguments)}}},[t.isPassword1?n("img",{attrs:{src:o("ef67"),width:"20px",alt:""}}):n("img",{attrs:{src:o("8046"),width:"20px",alt:""}})])],1),n("v-uni-view",{staticClass:"uni-reguster-input"},[n("v-uni-input",{staticStyle:{"margin-top":"6px"},attrs:{type:"text",password:t.isPassword2,placeholder:t.i18n.请输入新密码},model:{value:t.passWord,callback:function(e){t.passWord=e},expression:"passWord"}}),n("v-uni-text",{staticClass:"uni-abs-right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePassword2.apply(void 0,arguments)}}},[t.isPassword2?n("img",{attrs:{src:o("ef67"),width:"20px",alt:""}}):n("img",{attrs:{src:o("8046"),width:"20px",alt:""}})])],1),n("v-uni-view",{staticClass:"uni-reguster-input"},[n("v-uni-input",{staticStyle:{"margin-top":"6px"},attrs:{type:"text",password:t.isPassword3,placeholder:t.i18n.请确认新密码},model:{value:t.newPwd,callback:function(e){t.newPwd=e},expression:"newPwd"}}),n("v-uni-text",{staticClass:"uni-abs-right",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.togglePassword3.apply(void 0,arguments)}}},[t.isPassword3?n("img",{attrs:{src:o("ef67"),width:"20px",alt:""}}):n("img",{attrs:{src:o("8046"),width:"20px",alt:""}})])],1),n("v-uni-button",{staticStyle:{"margin-top":"60px","background-color":"#0080ff",height:"45px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.modifPwd.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.提交))])],1)],1)],1)},i=[]},8046:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAh1BMVEUAAAAzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMyMjIyMjIyMjIzMzMzMzMxMTEzMzMzMzMzMzMzMzM0NDQmJiYyMjI0NDQzMzMyMjI1NTUzMzMzMzM0NDQyMjIyMjIzMzM0NDQyMjI2NjY2NjYtLS0zMzMyMjIzMzMzMzMyMjIxMTEwMDAzMzPwIkI0AAAALHRSTlMAVM2M1cS/u7OinoFyWh/z6d5AOwarXU0zEvjlmZCIamNCJhgL7pNuaEgqJdf7jtwAAAHXSURBVFjD7VbZloIwDB1ALMgiyuKCu6g48P/fN5P2iKmBoqcvPpC3ZmuWm7Q/Aw307XTfW6l5uZiptb9/bj2fTGtEU2v5ifXKN2tCY3/1rn0wqltpFLxlfnIfYTvb/fy8ig8755GOe+q3v0VC1/bDJzP0bcGNbn32nlCczGlVhWTbY0+SJaVxVfYbrnI9t0vPVy5m3faM187oVjDWvKFd4jFIZ7+qEI8Rr1C7MAWZ2VPkZAZaXptoS+yLwHPy3PGCgsTZ4sHn5cecuMGzGRMP/qt9vAZ7jPayRlTiwMDDOn5JzX6t36KWaIHBDnWwE8mBBUq4f5UAjRGGhpiNCncTGJbUHeDscESMe0T6DN+4A84RMRyICXvMQKPZIUs4ZVgOGTvP46HJEqe0wRAXIcsVOjRHl6CLyVdmZARgNtPmNOPxYgLE4n0Aq0Ce7n9OrnCQUwc5daBIwZG7akDNaAqKInpic+AbPFpERRsDAQMMnIC0UQWkwuRAQDAwCwIkJZTjGmiThWEm9lxMoaweprKWqKTDpBhnOo4LOs79C6ViD3NWKRaKYqUlmcWiiFlZQlea7lLVXeu6D4vu06b7uOo+77ofDN0vjuYnS/ebp/fR1PzqDjTQl9MfO555+ylmQy8AAAAASUVORK5CYII="},eda6:function(t,e,o){"use strict";o.r(e);var n=o("50e4"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(t){o.d(e,t,(function(){return n[t]}))}(a);e["default"]=i.a},ef67:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAMAAACdt4HsAAAAkFBMVEUAAAAzMzMyMjIzMzMzMzMzMzMyMjIzMzMyMjIzMzMzMzMyMjIzMzM0NDQzMzMzMzMzMzMzMzMzMzMzMzMyMjIzMzMzMzMzMzMzMzMyMjIzMzMyMjIyMjImJiYzMzMzMzMzMzMyMjIzMzMzMzM0NDQ0NDQ1NTUtLS0yMjI0NDQ1NTUwMDAzMzMyMjIwMDAzMzP0OXS+AAAAL3RSTlMAVX/EvtWMNKpA9p2FFOmjad5yY1pM5bifknZDLAbvzG5HspldOx0LYFgmJc9CIAVudvEAAAJvSURBVFjD7ZbZmrIwDIYrZZPVhUEUxV3Gtfd/d79daEtbGP6ZU78DH9L4hiS0eQo++ui3Gv2VR8Mi7Ceuv62C3IGrdZtHAyKMwwBJgtZd4n+MEK+2SFUQloP5q4OMSteD+FvRvPPgTsZx/fJORxYxXw3gdwmrenaRG5oirn7eQkTFWHV4/n/wTmbyebQQv48/Iqxl3LF/qBbdvI39VUeKV9TI7uWna7MzI6xFytgCo3zVp/M7cHM6c1hiz0NeqbPokFfQfT+eCP+NV0mESOdnpP3yyvlBqOP78Vv+ftD4Lc8B5uX2TxCRy/my8UyxpWyUDVT794VQk+sctYmLodmumtadQGEpeDV4KPNPtTEbm0YkvL4BLTXkAp8eYbKue6IVzBIVi5D8JV9qSaHgLdJNtYg9N1P6dyWlUvCldgQKfGa4NWUZCiW0JTvKg/j9m7RnJv4Q3HK0ABVaSjx4GQPk3IrYhhOChcyDk1ZC2OriXm8i3tycB0djE+ftgwg3QKjNe/jp1MpQSWnM/qvzfBTZcvwIrzzVktAECK0oX8aXER3Id3W4uUDWOsdra5kXUjt0m9KK9YmTGHk1uRqfk+As07wsW+bHfoM/ztronAFNKY9gNUl77iLJD1FWa7zVOZTtmPFXYNRmynldB+yDlJ8Do54JdhbMMlch5q+uUcDrNCtkfGb0xkuk8Lpo4+HF5Msc4kz7719MS0+7NBXM088LpXvJcZlBuprsfuZHFrujOOnce9Xxee4eAkRV3Abw/DKiybmCITxWGQYabs/iQTzT3drKdOV6Rqr3ButF0MmDauu7k/3QO/Sfb/EfffRL/QOOwJvjyzUnOwAAAABJRU5ErkJggg=="},f2c5:function(t,e,o){"use strict";var n=o("5812"),i=o.n(n);i.a},f67a:function(t,e,o){var n=o("24fb");e=n(!1),e.push([t.i,'.login-container[data-v-c122a510]{width:100%;min-height:100%;position:absolute;left:0;top:0\n\t\t  /*  background: url(../../static/images/login-bg.png) 50% no-repeat;\n\t\t    background-size: cover; */}uni-input[data-v-c122a510]{padding:15px;\n\t\t/* text-align: center; */border-width:0;border-bottom-width:1px;border-color:#f0f0f0;border-style:solid;font-size:15px}.switch-l[data-v-c122a510]{padding:4px 8px;border-right:1px solid #fff;color:#999;position:relative}.longin-head-nav[data-v-c122a510]{width:100%;height:24px;margin:0 auto 12px;color:#ccc}.activite[data-v-c122a510]{color:#fff}.login-btn[data-v-c122a510]{font-size:13px;color:#fff;text-align:center;width:100%;\n\t\t/* background-color: white; */border-width:0;border-radius:0}.uni-reguster-input[data-v-c122a510]{position:relative}.uni-abs-right[data-v-c122a510]{position:absolute;right:0;bottom:6px;padding:4px 12px;border-radius:6px;border:1px solid #fff}.uni-iphone-right[data-v-c122a510]{display:flex;position:absolute;right:0;bottom:6px;border:1px solid #f1f1f1;border-radius:6px}.uni-reguster-input[data-v-c122a510]{position:relative}.uni-abs-right[data-v-c122a510]{position:absolute;right:0;bottom:6px;padding:4px 12px;border-radius:6px;border:1px solid #fff;color:#fff}\n\t/* \tuni-button:after {\n\t    content: " ";\n\t    width: 200%;\n\t    height: 200%;\n\t    position: absolute;\n\t    top: 0;\n\t    left: 0;\n\t    border: 0px solid rgba(0,0,0,0);\n\t    -webkit-transform: scale(.5);\n\t    transform: scale(.5);\n\t    -webkit-transform-origin: 0 0;\n\t    transform-origin: 0 0;\n\t    box-sizing: border-box;\n\t    border-radius: 0px;\n\t}\n\t */',""]),t.exports=e}}]);