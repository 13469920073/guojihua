(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contract-index~pages-home-home-list~pages-home-index~pages-trade-index"],{"0980":function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"read-cnt"},[a("v-uni-view",{staticClass:"readCtn"},[e._v("阅读"+e._s(e.readCnt))]),e.showType?a("v-uni-view",{staticClass:"type-name"},[e._v(e._s(e.typeName))]):e._e()],1)},n=[]},"09e8":function(e,t,a){"use strict";var i=a("9555"),n=a.n(i);n.a},"0f4b":function(e,t,a){"use strict";a.r(t);var i=a("12d5"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"12d5":function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ac1f"),a("5319");var n=i(a("fafe")),o={props:{value:{}},components:{readCnt:n.default},computed:{contentObj:function(){var e=this.value["content"],t=e.replace(/\n/g,""),a=JSON.parse(t);return a}}};t.default=o},"16ea":function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".user-avatar[data-v-4c219ca0]{width:25px;height:25px;border-radius:50%;flex-shrink:0}.postContent[data-v-4c219ca0], .titleContent[data-v-4c219ca0]{\n /*属性规定自动换行的处理方法。normal(使用浏览器默认的换行规则。),break-all(允许在单词内换行。),keep-all(只能在半角空格或连字符处换行。)*/word-break:break-all;text-overflow:ellipsis;display:-webkit-box; /** 对象作为伸缩盒子模型显示 **/-webkit-box-orient:vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/-webkit-line-clamp:3; /** 显示的行数 **/overflow:hidden;\n/* word-wrap: break-word; */text-align:left;padding:8px;padding-top:5px;padding-bottom:5px;font-size:18px;line-height:25px;color:#333}.postContent[data-v-4c219ca0]{font-size:16px;color:#666}.user-name[data-v-4c219ca0]{width:30px;overflow:hidden;text-overflow:ellipsis}",""]),e.exports=t},"1eba":function(e,t,a){"use strict";var i=a("4ea4").default,n=i(a("5530"));a("e9c4"),a("99af");var o=i(a("e143")),r=i(a("a925"));o.default.use(r.default);var s={base:"https://sagittariusbank.com/prod-api/",getsy:"getPostList.php",detail:"getSinglePost.php",publish:"publish.php",comment:"comment.php",dtdetail:"detail.php",update_profile:"updateProfile.php",homepage:"getsc.php",fans:"fan.php",blackList:"blackList.php",delete_sc:"deletesc.php",sh:"sh.php",daren:"darenList.php",upload:"image/upload",createsmscode:"customer/member/createsmscode",logout:"customer/member/logout",login:"customer/member/login",smslogin:"customer/member/smslogin",register:"customer/member/register",changepwd:"customer/member/changepwd",realnameapplication:"customer/member/realnameapplication",getmemberinfo:"customer/member/getmemberinfo",coinassets:"coin/get/coinassets",coinassetshistory:"coin/get/coinassetshistory",settingtoncoin:"coin/update/settingtoncoin",ratebody:"coin/get/ratebody",getoperhistorylist:"customer/member/getoperhistorylist",gettradelist:"customer/member/gettradelist",getwalletbalance:"customer/member/getwalletbalance",getincomelist:"customer/member/getincomelist",getoutlaylist:"customer/member/getoutlaylist",applicationoutlay:"customer/member/applicationoutlay",applicationrecharge:"customer/member/applicationrecharge",getmemberaccountlist:"customer/member/getmemberaccountlist",delapplicationaccount:"customer/member/delapplicationaccount",addapplicationaccount:"customer/member/addapplicationaccount",gettradelistbystatus:"customer/member/gettradelistbystatus",checkoutbymanual:"customer/member/checkoutbymanual",createtrade:"customer/member/createtrade",get_checkcode:"sendCheckCode.php",get_msglist:"message.php",jubao:"jubao.php",feedback:"feedback.php",check_version:"checkUpdate.php",publish_note:"p/publishNotes.html",user_agreement:"p/userAgreement.html",aboutus_url:"p/aboutus.html",contactus:"p/contactus.html",disclaimer:"p/disclaimer.html",usehelp:"p/usehelp.html",privacy_agreement:"p/userPrivacy.html",feedbackList:"p/feedbackList.html",joinus:"p/joinus.html"};e.exports={post:function(e,t,a,i){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}}),console.log("this.$t('tip')",o.default.prototype._i18n.t("tip").登录中);var n,r=s.base+e,l={"content-type":"application/json"};n=uni.getStorageSync("loginuserinfo");var c=""==n?n:JSON.parse(n);c&&c.token,c["token"]&&(l.token=c["token"]),uni.request({url:r,method:"POST",header:l,dataType:"json",data:t,success:function(e){console.log("====res: ",e);var t=e.data;200==t.code?(console.log("request ok"),a(t)):401==t.code?uni.showModal({title:o.default.prototype._i18n.t("tip").提示,content:o.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):i&&i(t["message"]||"服务器返回错误")},fail:function(e,t){var a="请求网络失败"+JSON.stringify(e);console.log("post error: "+a),i&&i(a)}})},get:function(e,t,a,i){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var n,r,l=s.base+e;r=uni.getStorageSync("loginuserinfo"),console.log("userinfo>>>",r);var c=""==r?r:JSON.parse(r);c&&c.token,c["token"]&&(n=c["token"]),uni.request({url:l,method:"GET",header:{"content-type":"application/json",token:n},dataType:"json",data:t,success:function(e){var t=e.data;200==t.code?(console.log("request ok"),a(t)):401==t.code?uni.showModal({title:o.default.prototype._i18n.t("tip").提示,content:o.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):i&&i(t["message"]||"服务器返回错误")},fail:function(e,t){var a="请求网络失败"+JSON.stringify(e);console.log("post error: "+a),i&&i(a)}})},put:function(e,t,a,i){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var n,r,l=s.base+e;r=uni.getStorageSync("loginuserinfo");var c=""==r?r:JSON.parse(r);c&&c.token,c["token"]&&(n=c["token"]),uni.request({url:l,method:"PUT",header:{"Content-Type":"application/json",token:n},dataType:"json",data:t,success:function(e){var t=e.data;200==t.code?(console.log("request ok"),a(t)):401==t.code?uni.showModal({title:o.default.prototype._i18n.t("tip").提示,content:o.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):i&&i(t["message"]||"服务器返回错误")},fail:function(e,t){var a="请求网络失败"+JSON.stringify(e);console.log("post error: "+a),i&&i(a)}})},delete:function(e,t,a,i){uni.getNetworkType({success:function(e){console.log("---netType: "+JSON.stringify(e))}});var n,r,l=s.base+e;r=uni.getStorageSync("loginuserinfo");var c=""==r?r:JSON.parse(r);c&&c.token,c["token"]&&(n=c["token"]),uni.request({url:"".concat(l,"?id=").concat(t.id),method:"DELETE",header:{"content-type":"application/json",token:n},success:function(e){var t=e.data;200==t.code?(console.log("request ok"),a(t)):401==t.code?uni.showModal({title:o.default.prototype._i18n.t("tip").提示,content:o.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):i&&i(t["message"]||"服务器返回错误")},fail:function(e,t){var a="请求网络失败"+JSON.stringify(e);console.log("post error: "+a),i&&i(a)}})},url:s,uploadfile:function(e,t,a,i,r){var l,c;c=uni.getStorageSync("loginuserinfo");var u=""==c?c:JSON.parse(c);u&&u.token,u["token"]&&(l=u["token"]),console.log("formData:",t),uni.uploadFile({url:s.base+e,header:{token:l},fileType:"image",filePath:t,name:"file",formData:(0,n.default)({file:t},a),success:function(e){console.log("上传成功",e);var t=e.statusCode,a=e.data,n=JSON.parse(a);console.log("obj",n),200==n.code&&200==t?(console.log("成功====》》",n),i(n)):401==n.code?uni.showModal({title:o.default.prototype._i18n.t("tip").提示,content:o.default.prototype._i18n.t("tip").认证失败,showCancel:!1,success:function(e){e.confirm&&(uni.removeStorageSync("loginuserinfo"),uni.removeStorageSync("token"),uni.navigateTo({url:"/pages/login/login"}))}}):r&&r(n["msg"]||"服务器返回错误")},fail:function(e){console.log("上传失败",e),r&&r(e)}})},postType:function(e){var t="life",a=e;switch(a){case"10":case"11":case"12":case"13":case"14":case"15":t="sy";break;case"6":t="zt";break;default:break}return t}}},"1fb3":function(e,t,a){"use strict";var i=a("4e3c"),n=a.n(i);n.a},"28d9":function(e,t,a){"use strict";a.r(t);var i=a("b020"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},3546:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this.$createElement,t=this._self._c||e;return t("v-uni-view",{staticStyle:{display:"flex","align-items":"center"}},[t("v-uni-image",{style:{width:"80px",height:"80px",borderRadius:"2px",padding:"2px",marginRight:"5px",flexShrink:0,borderRadius:"12px"},attrs:{src:this.value.imageUrl[0]}}),t("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","margin-left":"5px","margin-top":"0px"}},[t("v-uni-text",{staticStyle:{"font-size":"18px",color:"#333"}},[this._v(this._s(this.contentObj.title))]),t("v-uni-text",{staticClass:"content"},[this._v(this._s(this.contentObj.content))])],1)],1)},n=[]},"3d77":function(e,t,a){"use strict";a.r(t);var i=a("795a"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},4143:function(e,t,a){"use strict";var i=a("9a60"),n=a.n(i);n.a},4605:function(e,t,a){"use strict";a("7a82");var i=a("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=i(a("fafe")),o={props:{value:{},showType:{type:Boolean,default:!1}},components:{readCnt:n.default}};t.default=o},"4b68":function(e,t,a){"use strict";a.r(t);var i=a("ff31"),n=a("0f4b");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("9d87");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"4c219ca0",null,!1,i["a"],void 0);t["default"]=s.exports},"4e3c":function(e,t,a){var i=a("a55e");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("a25cde00",i,!0,{sourceMap:!1,shadowMode:!1})},"5e2e":function(e,t,a){"use strict";a.r(t);var i=a("4605"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return i[e]}))}(o);t["default"]=n.a},"695d":function(e,t,a){"use strict";a.r(t);var i=a("dd0a"),n=a("5e2e");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("1fb3");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"6e89a121",null,!1,i["a"],void 0);t["default"]=s.exports},"795a":function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i={props:{readCnt:{type:String},typeName:{type:String},showType:{type:Boolean,default:!1}}};t.default=i},9555:function(e,t,a){var i=a("ad05");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("27ea355e",i,!0,{sourceMap:!1,shadowMode:!1})},"9a60":function(e,t,a){var i=a("d319");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("157065c2",i,!0,{sourceMap:!1,shadowMode:!1})},"9d87":function(e,t,a){"use strict";var i=a("c968"),n=a.n(i);n.a},a55e:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".user-avatar[data-v-6e89a121]{width:25px;height:25px;border-radius:50%}.postContent[data-v-6e89a121]{\n /*属性规定自动换行的处理方法。normal(使用浏览器默认的换行规则。),break-all(允许在单词内换行。),keep-all(只能在半角空格或连字符处换行。)*/word-break:break-all;text-overflow:ellipsis;display:-webkit-box; /** 对象作为伸缩盒子模型显示 **/-webkit-box-orient:vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/-webkit-line-clamp:3; /** 显示的行数 **/overflow:hidden;\n/* word-wrap: break-word; */text-align:left;padding:8px;padding-top:5px;padding-bottom:5px;font-size:17px;line-height:25px}",""]),e.exports=t},ad05:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".content[data-v-d212078c]{font-size:15px;color:#888;margin-top:2px;padding-right:15px;word-break:break-all;text-overflow:ellipsis;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden\n\t/* word-wrap: break-word; */}uni-image[data-v-d212078c]{object-fit:cover}",""]),e.exports=t},ae6a:function(e,t,a){"use strict";a.r(t);var i=a("3546"),n=a("28d9");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("09e8");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"d212078c",null,!1,i["a"],void 0);t["default"]=s.exports},b020:function(e,t,a){"use strict";a("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0,a("ac1f"),a("5319");var i={props:{value:{}},computed:{contentObj:function(){var e=this.value["content"],t=e.replace(/\n/g,""),a=JSON.parse(t);return a}}};t.default=i},b61c:function(e,t,a){a("e25e"),a("d81d"),a("d401"),a("d3b7"),a("25f0"),a("acd8"),a("ac1f"),a("1276");var i={UNITS:{"年":315576e5,"月":26298e5,"天":864e5,"小时":36e5,"分钟":6e4,"秒":1e3},humanize:function(e){var t="";for(var a in this.UNITS)if(e>=this.UNITS[a]){t=Math.floor(e/this.UNITS[a])+a+"前";break}return t||"刚刚"},format:function(e){var t=this.parse(e),a=Date.now()-t.getTime();if(a<this.UNITS["天"])return this.humanize(a);var i=function(e){return e<10?"0"+e:e};return t.getFullYear()+"-"+i(t.getMonth()+1)+"-"+i(t.getDate())},parse:function(e){var t=e.split(/[^0-9]/);return new Date(t[0],t[1]-1,t[2],t[3],t[4],t[5])}};e.exports={formatTime:function(e){if("number"!==typeof e||e<0)return e;var t=parseInt(e/3600);e%=3600;var a=parseInt(e/60);e%=60;var i=e;return[t,a,i].map((function(e){return e=e.toString(),e[1]?e:"0"+e})).join(":")},formatLocation:function(e,t){return"string"===typeof e&&"string"===typeof t&&(e=parseFloat(e),t=parseFloat(t)),e=e.toFixed(2),t=t.toFixed(2),{longitude:e.toString().split("."),latitude:t.toString().split(".")}},dateUtils:i}},c4e0:function(e,t){e.exports={titleForType:{10:"新鲜事",11:"打听",12:"吐槽",13:"公告",20:"吃喝玩乐",21:"求职招聘",22:"商家信息",23:"相亲交友",24:"房屋信息",25:"打车出行",26:"二手交易",27:"便民信息"},homeAvaliableItemType:["10","11","12","13","14","15"],itemType:[[[{id:"10",text:"新鲜事"},{id:"11",text:"打听"}],[{id:"12",text:"吐槽"},{id:"13",text:"公告"}]],[[{id:"21",text:"求职招聘"},{id:"22",text:"商家信息"}],[{id:"23",text:"相亲交友"},{id:"27",text:"便民信息"}]]],itemStatus:{0:"待审核",1:"已通过",2:"未通过"},homeTopItems:[{text:"热门",image:"heme-top1.png",type:1},{text:"打听",image:"heme-top2.png",type:11},{text:"吐槽",image:"heme-top3.png",type:12},{text:"公告",image:"heme-top4.png",type:13},{text:"商家",image:"home-top-sj@2x.png",type:14,invaild:1},{text:"相亲交友",image:"home-top-jy@2x.png",type:15,invaild:1},{text:"求职招聘",image:"home-top-qz@2x.png",type:16,invaild:1},{text:"便民信息",image:"home-top-more@2x.png",type:17}],homeTopListItems:[{text:"BTC/USDT",money:"59250.0100",rate:"+4.9%",image:"heme-top1.png",type:1},{text:"ETH/USDT",money:"59250.0100",rate:"+4.9%",image:"heme-top2.png",type:11},{text:"HBC/USDT",rate:"+4.9%",money:"59250.0100",image:"heme-top3.png",type:12}],postSubType:function(e,t){var a="";switch(e){case"21":a=1==t?"招聘":"求职";break;case"23":a=1==t?"我是女生":"我是男生";break;case"24":a=1==t?"我要找房":"我是房主";break;case"25":a=1==t?"人找车":"车找人";break;default:break}return a},itemStatusArr:{0:"未认证",1:"审核中",2:"通过",3:"不通过"}}},c968:function(e,t,a){var i=a("16ea");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("8fcb9b98",i,!0,{sourceMap:!1,shadowMode:!1})},d319:function(e,t,a){var i=a("24fb");t=i(!1),t.push([e.i,".read-cnt[data-v-335be0b1]{display:flex;flex-direction:row;margin-top:5px;align-items:center}.readCtn[data-v-335be0b1]{margin-left:8px;font-size:13px;color:#666;text-align:left}.type-name[data-v-335be0b1]{margin-left:15px;color:#fff;background-color:#ff4500;background-color:#f5f5f5;color:#888;font-size:12px;padding:0 6px;border-radius:6px}",""]),e.exports=t},dd0a:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[a("v-uni-view",{staticStyle:{display:"flex","margin-left":"2px"}},[a("v-uni-view",[a("v-uni-image",{staticClass:"user-avatar",attrs:{src:e.value.avatar}})],1),a("v-uni-view",{staticStyle:{"margin-left":"8px","font-size":"13px",color:"#666","margin-top":"2px"}},[a("v-uni-text",[e._v(e._s(e.value.user.name||e.value.user.nickName))]),a("v-uni-text",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(e.value.postDateFormatter))])],1)],1),e.value.imageUrl?a("v-uni-view",{staticStyle:{width:"100%"}},[1==e.value.imageUrl.length?a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row"}},[a("v-uni-view",{staticStyle:{width:"100%"}},[a("v-uni-view",{staticClass:"postContent"},[e._v(e._s(e.value.content))]),a("read-cnt",{attrs:{readCnt:e.value.readCnt,typeName:e.value.typeName,showType:e.showType}})],1),a("v-uni-view",[a("v-uni-image",{style:{width:e.value.width+"px",height:.8*e.value.width+"px",borderRadius:"2px",padding:"2px",marginRight:"5px",flexShrink:0},attrs:{src:e.value.imageUrl[0]}})],1)],1):a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"flex-start"}},[a("v-uni-view",{staticClass:"postContent"},[e._v(e._s(e.value.content))]),a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row"}},e._l(e.value.imageUrl,(function(t,i){return a("v-uni-view",{key:i,staticStyle:{display:"flex"}},[a("v-uni-image",{style:{width:e.value.width+"px",height:.8*e.value.width+"px",borderRadius:"2px",padding:"2px",flexGrow:2,objectFit:"cover"},attrs:{src:t}})],1)})),1),a("read-cnt",{attrs:{readCnt:e.value.readCnt,typeName:e.value.typeName,showType:e.showType}})],1)],1):a("v-uni-view",[a("v-uni-view",{staticClass:"postContent"},[e._v(e._s(e.value.content))]),a("read-cnt",{attrs:{readCnt:e.value.readCnt,typeName:e.value.typeName,showType:e.showType}})],1)],1)},n=[]},fafe:function(e,t,a){"use strict";a.r(t);var i=a("0980"),n=a("3d77");for(var o in n)["default"].indexOf(o)<0&&function(e){a.d(t,e,(function(){return n[e]}))}(o);a("4143");var r=a("f0c5"),s=Object(r["a"])(n["default"],i["b"],i["c"],!1,null,"335be0b1",null,!1,i["a"],void 0);t["default"]=s.exports},ff31:function(e,t,a){"use strict";a.d(t,"b",(function(){return i})),a.d(t,"c",(function(){return n})),a.d(t,"a",(function(){}));var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",[e.value.imageUrl?a("v-uni-view",{staticStyle:{width:"100%"}},[1==e.value.imageUrl.length?a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row"}},[a("v-uni-view",{staticStyle:{width:"100%"}},[a("v-uni-view",{staticClass:"titleContent"},[e._v(e._s(e.contentObj.title))]),a("v-uni-view",{staticClass:"postContent"},[e._v(e._s(e.contentObj.content))]),a("v-uni-view",{staticStyle:{display:"flex","align-items":"center",padding:"5px 10px"}},[a("v-uni-view",{staticStyle:{display:"flex","align-items":"center",width:"100%"}},[a("v-uni-image",{staticClass:"user-avatar",attrs:{mode:"aspectFill",src:e.value.avatar}}),a("v-uni-view",{staticStyle:{"margin-left":"8px","font-size":"13px",color:"#666","margin-top":"2px","margin-right":"8px"}},[a("v-uni-text",{staticClass:"user-name"},[e._v(e._s(e.value.user.name||e.value.user.nickName))]),a("v-uni-text",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(e.value.postDateFormatter))])],1)],1),a("v-uni-view",{staticStyle:{"flex-shrink":"0","margin-right":"10px"}},[a("read-cnt",{attrs:{readCnt:e.value.readCnt,typeName:e.value.typeName}})],1)],1)],1),a("v-uni-view",[a("v-uni-image",{style:{width:e.value.width+"px",height:.8*e.value.width+"px",borderRadius:"2px",padding:"2px",marginRight:"5px",flexShrink:0},attrs:{mode:"aspectFill",src:e.value.imageUrl[0]}})],1)],1):a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","justify-content":"flex-start"}},[a("v-uni-view",{staticClass:"titleContent"},[e._v(e._s(e.contentObj.title))]),a("v-uni-view",{staticClass:"postContent"},[e._v(e._s(e.contentObj.content))]),a("v-uni-view",{staticStyle:{display:"flex","flex-direction":"row"}},e._l(e.value.imageUrl,(function(t,i){return a("v-uni-view",{key:i,staticStyle:{display:"flex"}},[a("v-uni-image",{style:{width:e.value.width+"px",height:.8*e.value.width+"px",borderRadius:"2px",padding:"2px",flexGrow:2,objectFit:"cover"},attrs:{mode:"aspectFill",src:t}})],1)})),1),a("v-uni-view",{staticStyle:{display:"flex","align-items":"center",padding:"5px 10px"}},[a("v-uni-view",{staticStyle:{display:"flex","align-items":"center",width:"100%"}},[a("v-uni-image",{staticClass:"user-avatar",attrs:{mode:"aspectFill",src:e.value.avatar}}),a("v-uni-view",{staticStyle:{"margin-left":"8px","font-size":"13px",color:"#666","margin-top":"2px","margin-right":"8px"}},[a("v-uni-text",{staticClass:"user-name"},[e._v(e._s(e.value.user.name||e.value.user.nickName))]),a("v-uni-text",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(e.value.postDateFormatter))])],1)],1),a("v-uni-view",{staticStyle:{"flex-shrink":"0","margin-right":"10px"}},[a("read-cnt",{attrs:{readCnt:e.value.readCnt,typeName:e.value.typeName}})],1)],1)],1)],1):a("v-uni-view",[a("v-uni-view",{staticClass:"titleContent"},[e._v(e._s(e.contentObj.title))]),a("v-uni-view",{staticClass:"postContent"},[e._v(e._s(e.contentObj.content))]),a("v-uni-view",{staticStyle:{display:"flex","align-items":"center",padding:"5px 10px"}},[a("v-uni-view",{staticStyle:{display:"flex","align-items":"center",width:"100%"}},[a("v-uni-image",{staticClass:"user-avatar",attrs:{mode:"aspectFill",src:e.value.avatar}}),a("v-uni-view",{staticStyle:{"margin-left":"8px","font-size":"13px",color:"#666","margin-top":"2px","margin-right":"8px"}},[a("v-uni-text",{staticClass:"user-name"},[e._v(e._s(e.value.user.name||e.value.user.nickName))]),a("v-uni-text",{staticStyle:{"margin-left":"15px"}},[e._v(e._s(e.value.postDateFormatter))])],1)],1),a("v-uni-view",{staticStyle:{"flex-shrink":"0","margin-right":"10px"}},[a("read-cnt",{attrs:{readCnt:e.value.readCnt,typeName:e.value.typeName}})],1)],1)],1)],1)},n=[]}}]);