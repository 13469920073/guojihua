(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-account-recharge2"],{"0837":function(e,t,o){"use strict";o("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;o("c4e0").itemType;var n=o("1eba"),i={components:{},data:function(){return{from:{incomeNum:"",outlayNum:"",type:"",photo:""},voucher:"",is_avatar_change:!1}},computed:{i18n:function(){return this.$t("wallet")}},onShow:function(e){uni.setNavigationBarTitle({title:this.$t("wallet").充值})},onLoad:function(e){this.from=JSON.parse(decodeURIComponent(e.obj)),console.log("this.from====》》》》",this.from)},methods:{selectVoucher:function(){var e=this;uni.chooseImage({sourceType:["camera","album"],sizeType:"compressed",count:1,success:function(t){var o=t.tempFilePaths;uni.showLoading({title:"正在上传..."}),console.log("filesPaths",o),o&&o.length>0&&(e.voucher=o[0],console.log("filesPaths",e.voucher),e.is_avatar_change=!0,n.uploadfile(n.url.upload,e.voucher,{imageType:"2"},(function(t){uni.hideLoading(),e.from.photo=t.data.url})))}})},save:function(){var e=this;console.log("===",this.from),this.from.incomeNum?(n.post(n.url.applicationrecharge,this.from,(function(t){uni.showToast({title:e.$t("tip").成功,success:function(e){setTimeout((function(){uni.switchTab({url:"/pages/trade/index"})}),500)}})})),console.log("===")):uni.showToast({title:this.i18n.请输入数量,icon:"none",duration:2e3})},step:function(){uni.navigateBack({delta:1})}}};t.default=i},1600:function(e,t,o){"use strict";var n=o("b3ee"),i=o.n(n);i.a},"1eba":function(e,t,o){"use strict";var n=o("4ea4").default,i=n(o("5530"));o("e9c4"),o("99af");var a=n(o("e143")),s=n(o("a925"));a.default.use(s.default);var r={base:"http://139.9.65.136:8098/",getsy:"getPostList.php",detail:"getSinglePost.php",publish:"publish.php",comment:"comment.php",dtdetail:"detail.php",update_profile:"updateProfile.php",homepage:"getsc.php",fans:"fan.php",blackList:"blackList.php",delete_sc:"deletesc.php",sh:"sh.php",daren:"darenList.php",upload:"image/upload",createsmscode:"customer/member/createsmscode",logout:"customer/member/logout",login:"customer/member/login",smslogin:"customer/member/smslogin",register:"customer/member/register",changepwd:"customer/member/changepwd",realnameapplication:"customer/member/realnameapplication",getmemberinfo:"customer/member/getmemberinfo",coinassets:"coin/get/coinassets",coinassetshistory:"coin/get/coinassetshistory",settingtoncoin:"coin/update/settingtoncoin",getoperhistorylist:"customer/member/getoperhistorylist",gettradelist:"customer/member/gettradelist",getwalletbalance:"customer/member/getwalletbalance",getincomelist:"customer/member/getincomelist",getoutlaylist:"customer/member/getoutlaylist",applicationoutlay:"customer/member/applicationoutlay",applicationrecharge:"customer/member/applicationrecharge",getmemberaccountlist:"customer/member/getmemberaccountlist",delapplicationaccount:"customer/member/delapplicationaccount",addapplicationaccount:"customer/member/addapplicationaccount",gettradelistbystatus:"customer/member/gettradelistbystatus",checkoutbymanual:"customer/member/checkoutbymanual",createtrade:"customer/member/createtrade",get_checkcode:"sendCheckCode.php",get_msglist:"message.php",jubao:"jubao.php",feedback:"feedback.php",check_version:"checkUpdate.php",publish_note:"p/publishNotes.html",user_agreement:"p/userAgreement.html",aboutus_url:"p/aboutus.html",contactus:"p/contactus.html",disclaimer:"p/disclaimer.html",usehelp:"p/usehelp.html",privacy_agreement:"p/userPrivacy.html",feedbackList:"p/feedbackList.html",joinus:"p/joinus.html"};e.exports={post:function(e,t,o,n){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}}),console.log("this.$t('tip')",a.default.prototype._i18n.t("tip").登录中);var i,s=r.base+e,c={"content-type":"application/json"};i=uni.getStorageSync("loginuserinfo");var u=""==i?i:JSON.parse(i);u&&u.token,u["token"]&&(c.token=u["token"]),uni.request({url:s,method:"POST",header:c,dataType:"json",data:t,success:function(e){console.log("====res: ",e);var t=e.data;200==t.code?(console.log("request ok"),o(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(t["message"]||"服务器返回错误")},fail:function(e,t){var o="请求网络失败"+JSON.stringify(e);console.log("post error: "+o),n&&n(o)}})},get:function(e,t,o,n){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var i,s,c=r.base+e;s=uni.getStorageSync("loginuserinfo"),console.log("userinfo>>>",s);var u=""==s?s:JSON.parse(s);u&&u.token,u["token"]&&(i=u["token"]),uni.request({url:c,method:"GET",header:{"content-type":"application/json",token:i},dataType:"json",data:t,success:function(e){var t=e.data;200==t.code?(console.log("request ok"),o(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(t["message"]||"服务器返回错误")},fail:function(e,t){var o="请求网络失败"+JSON.stringify(e);console.log("post error: "+o),n&&n(o)}})},put:function(e,t,o,n){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var i,s,c=r.base+e;s=uni.getStorageSync("loginuserinfo");var u=""==s?s:JSON.parse(s);u&&u.token,u["token"]&&(i=u["token"]),uni.request({url:c,method:"PUT",header:{"Content-Type":"application/json",token:i},dataType:"json",data:t,success:function(e){var t=e.data;200==t.code?(console.log("request ok"),o(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(t["message"]||"服务器返回错误")},fail:function(e,t){var o="请求网络失败"+JSON.stringify(e);console.log("post error: "+o),n&&n(o)}})},delete:function(e,t,o,n){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var i,s,c=r.base+e;s=uni.getStorageSync("loginuserinfo");var u=""==s?s:JSON.parse(s);u&&u.token,u["token"]&&(i=u["token"]),uni.request({url:"".concat(c,"?id=").concat(t.id),method:"DELETE",header:{"content-type":"application/json",token:i},success:function(e){var t=e.data;200==t.code?(console.log("request ok"),o(t)):401==t.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):n&&n(t["message"]||"服务器返回错误")},fail:function(e,t){var o="请求网络失败"+JSON.stringify(e);console.log("post error: "+o),n&&n(o)}})},url:r,uploadfile:function(e,t,o,n,s){var c,u;u=uni.getStorageSync("loginuserinfo");var l=""==u?u:JSON.parse(u);l&&l.token,l["token"]&&(c=l["token"]),console.log("formData:",t),uni.uploadFile({url:r.base+e,header:{token:c},fileType:"image",filePath:t,name:"file",formData:(0,i.default)({file:t},o),success:function(e){console.log("上传成功",e);var t=e.statusCode,o=e.data,i=JSON.parse(o);console.log("obj",i),200==i.code&&200==t?(console.log("成功====》》",i),n(i)):401==i.code?uni.showModal({title:a.default.prototype._i18n.t("tip").提示,content:a.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):s&&s(i["msg"]||"服务器返回错误")},fail:function(e){console.log("上传失败",e),s&&s(e)}})},postType:function(e){var t="life",o=e;switch(o){case"10":case"11":case"12":case"13":case"14":case"15":t="sy";break;case"6":t="zt";break;default:break}return t}}},"8e0f":function(e,t,o){var n=o("24fb");t=n(!1),t.push([e.i,".content[data-v-6de64b92]{text-align:center;padding-top:0;padding-bottom:56px}.uni-account-card[data-v-6de64b92]{\n\t/* height: 200px; */margin:14px;border-radius:6px;background-color:#fafafa;border:1px solid #eed9d9}.uni-account-title[data-v-6de64b92]{width:100%;display:flex;justify-content:space-between;align-items:center;margin:0 12px;font-size:16px}.rgcz[data-v-6de64b92]{color:#0080ff;font-size:14px}.table-from[data-v-6de64b92]{display:flex;flex-direction:column;align-items:flex-start;width:100%;margin-top:8px;font-size:14px;color:#666;\n\t /* background-color: white; */padding:8px 10px;border-radius:8px;margin-left:5px}.table-input[data-v-6de64b92]{margin-left:10px;text-align:left;font-size:14px;flex:1}.uni-input[data-v-6de64b92]{margin-left:10px;text-align:left}.activite[data-v-6de64b92]{border-color:#0080ff}.next-btn[data-v-6de64b92]{width:70%;margin:auto;color:#fff;font-size:13px;background-color:#0080ff;border-width:0;border-radius:0}.uni-pic[data-v-6de64b92]{width:40px;height:40px;margin-left:20px\n\t/* margin-top: 30px; */\n\t/* border-radius: 50%; */}\n/* .grid-item-left {\n\tborder-left-width: 0;\n}\n.grid-item-wrap:nth-child(-n+2){\n\tborder-top-width: 0;\n} */",""]),e.exports=t},b1da:function(e,t,o){"use strict";o.d(t,"b",(function(){return n})),o.d(t,"c",(function(){return i})),o.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"uni-account-card"},[n("v-uni-view",{staticStyle:{padding:"14px","padding-top":"25px",display:"flex","flex-direction":"column","align-items":"center"}},[n("h3",{staticClass:"uni-account-title"},[e._v(e._s(e.i18n.填写信息))]),n("v-uni-view",{staticClass:"table-from"},[n("v-uni-view",{staticClass:"flex",staticStyle:{width:"100%"}},[e._v(e._s(e.i18n.充值币种)),n("v-uni-text",{staticClass:"table-input",staticStyle:{"margin-left":"20px"}},[e._v(e._s(e.from.type))])],1),n("v-uni-view",{staticClass:"flex",staticStyle:{width:"100%",margin:"10px 0"}},[e._v(e._s(e.i18n.充值金额)),n("v-uni-text",{staticClass:"table-input"},[n("v-uni-input",{staticClass:"uni-input",attrs:{placeholder:e.i18n.请输入数量},model:{value:e.from.incomeNum,callback:function(t){e.$set(e.from,"incomeNum",t)},expression:"from.incomeNum"}})],1)],1),n("v-uni-view",{staticClass:"flex"},[e._v(e._s(e.i18n.凭证图片)),n("v-uni-view",{on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.selectVoucher.apply(void 0,arguments)}}},[e.voucher?e._e():n("v-uni-image",{staticClass:"uni-pic",attrs:{src:o("e447")}}),e.voucher?n("v-uni-image",{staticClass:"uni-pic",attrs:{src:e.voucher}}):e._e()],1)],1),n("v-uni-view",{staticStyle:{display:"flex","align-items":"center","margin-top":"10px"}},[n("v-uni-view",{staticStyle:{"margin-left":"5px",color:"#f66","text-align":"left"}},[e._v(e._s(e.i18n.核对转账))])],1)],1)],1)],1),n("v-uni-view",{staticStyle:{padding:"20px"}},[n("v-uni-button",{staticStyle:{"margin-top":"60px","background-color":"#0080ff",height:"45px"},attrs:{type:"primary"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.save.apply(void 0,arguments)}}},[e._v(e._s(e.i18n.提交))]),n("v-uni-button",{staticStyle:{"margin-top":"10px",height:"45px"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.step.apply(void 0,arguments)}}},[e._v(e._s(e.i18n.上一步))])],1)],1)},i=[]},b3ee:function(e,t,o){var n=o("8e0f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var i=o("4f06").default;i("2bd66f31",n,!0,{sourceMap:!1,shadowMode:!1})},c4e0:function(e,t){e.exports={titleForType:{10:"新鲜事",11:"打听",12:"吐槽",13:"公告",20:"吃喝玩乐",21:"求职招聘",22:"商家信息",23:"相亲交友",24:"房屋信息",25:"打车出行",26:"二手交易",27:"便民信息"},homeAvaliableItemType:["10","11","12","13","14","15"],itemType:[[[{id:"10",text:"新鲜事"},{id:"11",text:"打听"}],[{id:"12",text:"吐槽"},{id:"13",text:"公告"}]],[[{id:"21",text:"求职招聘"},{id:"22",text:"商家信息"}],[{id:"23",text:"相亲交友"},{id:"27",text:"便民信息"}]]],itemStatus:{0:"待审核",1:"已通过",2:"未通过"},homeTopItems:[{text:"热门",image:"heme-top1.png",type:1},{text:"打听",image:"heme-top2.png",type:11},{text:"吐槽",image:"heme-top3.png",type:12},{text:"公告",image:"heme-top4.png",type:13},{text:"商家",image:"home-top-sj@2x.png",type:14,invaild:1},{text:"相亲交友",image:"home-top-jy@2x.png",type:15,invaild:1},{text:"求职招聘",image:"home-top-qz@2x.png",type:16,invaild:1},{text:"便民信息",image:"home-top-more@2x.png",type:17}],homeTopListItems:[{text:"BTC/USDT",money:"59250.0100",rate:"+4.9%",image:"heme-top1.png",type:1},{text:"ETH/USDT",money:"59250.0100",rate:"+4.9%",image:"heme-top2.png",type:11},{text:"HBC/USDT",rate:"+4.9%",money:"59250.0100",image:"heme-top3.png",type:12}],postSubType:function(e,t){var o="";switch(e){case"21":o=1==t?"招聘":"求职";break;case"23":o=1==t?"我是女生":"我是男生";break;case"24":o=1==t?"我要找房":"我是房主";break;case"25":o=1==t?"人找车":"车找人";break;default:break}return o},itemStatusArr:{0:"未认证",1:"审核中",2:"通过",3:"不通过"}}},ca32:function(e,t,o){"use strict";o.r(t);var n=o("0837"),i=o.n(n);for(var a in n)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return n[e]}))}(a);t["default"]=i.a},e447:function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAMAAAD04JH5AAAApVBMVEUAAADj5uvj5evj5uvi5+zk5+vk5uzj5+zj5uzk5uvj5+vk5+zl6Ork5erl6Ovm5+z3+/vk5+vj5+vj5uvk5+zj5uvj5evj5uvk5uvm5+zj6Ozk5uzk5+zj5uvk5uzj5+zj5+zj5uvi5urk5uvi5O3d4/Dj5uvj5+zk5uvj6Ozi5uvk6uzk5+zj5uvk5uvj5uzk5+zj5uvj5+vj5+zk5+vj5erj5utWOGNSAAAANnRSTlMAvz6vM/SQS+/Os6lVMBkUBereuZ9zYFE4KiCHa1vj1J2VgGUQC9rHw25CJaSaenVG+ubKi9ELVz4bAAADmElEQVR42u3aWXeyMBAG4EFEVNwQBTfc6261y/f+/5/2XQawlRkb4w3PbTk970lIzGSgQqFQKBQKMnvbuu8c0jNZyLeh56mCw6Fn+QflFWNQB9eOnqECPo/060OiQro1IPNOeg0cCIWkU2sGMZf0WQd4QES6RDU8pNIkqfJyYVtZVTzMqVlpXqVfav860PsvGFEZ0U/cKUzxJ3RrAJOWlFWCWY3sQu/CMDe705vmZX/qjStTwgHmTSihAvPmlFCDeTtK+IR5XUrACzivDoC/BXC8S+iWR29vo7IbXk5VyHUeDzCdNyjjMK4ZCxC49KNBz0iAWki/utYh8PZIgOmlQ/fE2+cGsI+UZ/7MAGNiGINpLQ6wEhVR+gMciGkNlrYwwITYjs8IsCCBGAwtUYAe3WhPvue2Zc+/V23KqugO4FFGJ7ShnOJO5s87zQHKlNLuz5A266eH4YpcI0GAc2ahTXFrOqGkk9YAZdZCn1NCWWeAM7OGsETv4ZEUyQDsmTdDI19bgDp/ow1JWeC+ITvAnpRRF3cN1KORtgBHwcyeSPE1BdiKqviretjDXU1S2HeONgD2C9PgB+BO69oBwJ9a/trivgJX2e2LryfAWnbcmqnHZzkjywvwQcpWdti0tASYkuLLDhqelgA19dgbOIbMvbBECvMioQmF84+XWgJspAHKzBG4MgNUpVMwYr4DLincKtaXFRw7dj+Be3jcym4+NuzbWu6ePUa+gNtpjbkBItmV9kWdnfmlJrcm6XxKFsGEX+uBuQxogTy2ejjgH7TYN+tDh19Dt3PnSuH3Ycf8GnIlaK7irg2/s9Ed8mujJTsAVuxjeUmwYsb8ADVuYdIgxZN02MEYAsbq6pMSia48IBkCKlXxEz+mBAuSklt4Qdas41avSQkr5OpJAny4lBLvkGYf0hGrsr4ZclWHlBbPp2rxLQeU0qkhny0KgE+60XTjyXs/jEqUZYOhLguAje4PbgJS9H4d1AOLJQ2AWZs4tuDZigNgWqZcpS6YavIAcCLKEVXBNSMFbHWX7jjY4NuIA6gIWrpWXVIgEvSHdKMVniDzSQqkvpapDMd9ADGfFDzA6X7Ve9/fvfpX1/lz8xiv8PHqACDFwQv4Br6gYG9EHl7ASpcb5r0b+JCL34UIYFxASSGMiynlDMPqlGHBrDZljIwm+CjRrUsVptgt+klzuYUB/rxEv2pF/UVgPY99Hh86VCgUCoVCIek/Lyld/Gac7IMAAAAASUVORK5CYII="},f475:function(e,t,o){"use strict";o.r(t);var n=o("b1da"),i=o("ca32");for(var a in i)["default"].indexOf(a)<0&&function(e){o.d(t,e,(function(){return i[e]}))}(a);o("1600");var s=o("f0c5"),r=Object(s["a"])(i["default"],n["b"],n["c"],!1,null,"6de64b92",null,!1,n["a"],void 0);t["default"]=r.exports}}]);