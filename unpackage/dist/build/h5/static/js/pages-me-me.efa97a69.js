(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-me-me"],{"0348":function(e,t,i){"use strict";i.r(t);var n=i("bcec"),a=i("64a4");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("4a99");var c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"3eddd3ec",null,!1,n["a"],void 0);t["default"]=s.exports},"0a08":function(e,t,i){"use strict";i("7a82"),Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n={name:"UniBadge",props:{type:{type:String,default:"default"},inverted:{type:Boolean,default:!1},text:{type:String,default:""},size:{type:String,default:"normal"}},methods:{onClick:function(){this.$emit("click")}}};t.default=n},"0e68":function(e,t,i){"use strict";i.r(t);var n=i("814c"),a=i("431e");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("841e");var c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"28d4432c",null,!1,n["a"],void 0);t["default"]=s.exports},"17ac":function(e,t,i){var n=i("be8f");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("7783e72e",n,!0,{sourceMap:!1,shadowMode:!1})},"2ba6":function(e,t,i){var n=i("5872");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("13c68d1d",n,!0,{sourceMap:!1,shadowMode:!1})},"431e":function(e,t,i){"use strict";i.r(t);var n=i("0a08"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"4a99":function(e,t,i){"use strict";var n=i("fcd9"),a=i.n(n);a.a},"4f49":function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uniIcons:i("c21c").default,uniBadge:i("0e68").default},a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-uni-view",{staticClass:"uni-list-item",class:e.disabled?"uni-list-item--disabled":"",attrs:{"hover-class":(e.disabled||e.showSwitch,"uni-list-item--hover")},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick.apply(void 0,arguments)}}},[i("v-uni-view",{staticClass:"uni-list-item__container"},[e.thumb?i("v-uni-view",{staticClass:"uni-list-item__icon"},[i("v-uni-image",{staticClass:"uni-list-item__icon-img",attrs:{src:e.thumb}})],1):e.showExtraIcon?i("v-uni-view",{staticClass:"uni-list-item__icon"},[i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{color:e.extraIcon.color,size:e.extraIcon.size,type:e.extraIcon.type}})],1):e._e(),i("v-uni-view",{staticClass:"uni-list-item__content"},[i("v-uni-view",{staticClass:"uni-list-item__content-title"},[e._v(e._s(e.title))]),e.note?i("v-uni-view",{staticClass:"uni-list-item__content-note"},[e._v(e._s(e.note))]):e._e()],1),e.showBadge||e.showArrow||e.showSwitch?i("v-uni-view",{staticClass:"uni-list-item__extra"},[e.showBadge?i("uni-badge",{attrs:{text:e.badgeText}}):e._e(),e.showSwitch?i("v-uni-switch",{attrs:{disabled:e.disabled,checked:e.switchChecked},on:{change:function(t){arguments[0]=t=e.$handleEvent(t),e.onSwitchChange.apply(void 0,arguments)}}}):e._e(),e.showArrow?i("uni-icons",{staticClass:"uni-icon-wrapper",attrs:{size:20,color:"#bbb",type:"arrowright"}}):e._e()],1):e._e()],1)],1)},o=[]},5872:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,".uni-badge[data-v-28d4432c]{font-family:Helvetica Neue,Helvetica,sans-serif;box-sizing:border-box;font-size:12px;line-height:1;display:inline-block;padding:3px 6px;color:#333;border-radius:100px;background-color:#f1f1f1}.uni-badge.uni-badge-inverted[data-v-28d4432c]{padding:0 5px 0 0;color:#999;background-color:initial}.uni-badge-primary[data-v-28d4432c]{color:#fff;background-color:#007aff}.uni-badge-primary.uni-badge-inverted[data-v-28d4432c]{color:#007aff;background-color:initial}.uni-badge-success[data-v-28d4432c]{color:#fff;background-color:#4cd964}.uni-badge-success.uni-badge-inverted[data-v-28d4432c]{color:#4cd964;background-color:initial}.uni-badge-warning[data-v-28d4432c]{color:#fff;background-color:#f0ad4e}.uni-badge-warning.uni-badge-inverted[data-v-28d4432c]{color:#f0ad4e;background-color:initial}.uni-badge-error[data-v-28d4432c]{color:#fff;background-color:#dd524d}.uni-badge-error.uni-badge-inverted[data-v-28d4432c]{color:#dd524d;background-color:initial}.uni-badge--small[data-v-28d4432c]{-webkit-transform:scale(.8);transform:scale(.8);-webkit-transform-origin:center center;transform-origin:center center}",""]),e.exports=t},"64a4":function(e,t,i){"use strict";i.r(t);var n=i("79c3"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"651f":function(e,t,i){"use strict";i.r(t);var n=i("4f49"),a=i("6ce3");for(var o in a)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return a[e]}))}(o);i("8ed6");var c=i("f0c5"),s=Object(c["a"])(a["default"],n["b"],n["c"],!1,null,"6e85e210",null,!1,n["a"],void 0);t["default"]=s.exports},"6ce3":function(e,t,i){"use strict";i.r(t);var n=i("cb33"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(e){i.d(t,e,(function(){return n[e]}))}(o);t["default"]=a.a},"79c3":function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("aad6")),o=n(i("651f")),c=i("a218"),s=i("1eba"),r={components:{uniList:a.default,uniListItem:o.default},data:function(){return{userName:"NO.48312",isLogined:!1,showCache:!0,cacheSize:"",version:"1.0.0",userInfo:{},avatar:""}},onShow:function(e){uni.setNavigationBarTitle({title:this.$t("tab").个人中心}),this.getUserProfile()},onLoad:function(){var e=this;console.log("判断是否登录1111",c),uni.$on("userloginsuccess",(function(t){console.log("判断是否登录222"),e.loginSuccess()})),this.getUserProfile(),c.isLogined()&&this.loginSuccess()},computed:{i18n:function(){return this.$t("personal")}},methods:{listSelected:function(e){switch(console.log(111,e),e){case 1:uni.navigateTo({url:"position"});break;case 2:uni.navigateTo({url:"/pages/trade/transaction"});break;case 3:uni.navigateTo({url:"/pages/me/identifi"});break;case 4:uni.navigateTo({url:"/pages/trade/my-account?tag=me"});break;case 5:uni.navigateTo({url:"msgcenter"});break;case 6:uni.navigateTo({url:"announcement"});break;default:break}},login:function(){uni.navigateTo({url:"/pages/me/setter"})},loginSuccess:function(){this.isLogined=c.isLogined(),console.log("判断是否登录3333",this.isLogined)},xiugaiInfo:function(){uni.navigateTo({url:"userinfo"})},getUserProfile:function(){var e=this;s.get(s.url.getmemberinfo,{},(function(t){e.userInfo=t.data,e.cacheSize="1"==t.data.status?"已认证":"未认证"}))}}};t.default=r},"814c":function(e,t,i){"use strict";i.d(t,"b",(function(){return n})),i.d(t,"c",(function(){return a})),i.d(t,"a",(function(){}));var n=function(){var e=this,t=e.$createElement,i=e._self._c||t;return e.text?i("v-uni-text",{staticClass:"uni-badge",class:e.inverted?"uni-badge-"+e.type+" uni-badge--"+e.size+" uni-badge-inverted":"uni-badge-"+e.type+" uni-badge--"+e.size,on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.onClick()}}},[e._v(e._s(e.text))]):e._e()},a=[]},"841e":function(e,t,i){"use strict";var n=i("2ba6"),a=i.n(n);a.a},8557:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,"uni-page-body[data-v-3eddd3ec]{display:flex;flex-direction:column;box-sizing:border-box;background-color:#efeff4}body.?%PAGE?%[data-v-3eddd3ec]{background-color:#efeff4}.content[data-v-3eddd3ec]{background-color:#eee}uni-view[data-v-3eddd3ec]{background-color:#fff}.top-list-item[data-v-3eddd3ec]{width:33%;display:flex;flex-direction:column;align-items:center}.top-list-item_title[data-v-3eddd3ec]{color:#666;font-size:13px}.top-list-item_value[data-v-3eddd3ec]{color:#ff4500;font-size:16px}",""]),e.exports=t},"8ed6":function(e,t,i){"use strict";var n=i("17ac"),a=i.n(n);a.a},"9b66":function(e,t){e.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAAAXNSR0IArs4c6QAAAbNJREFUWAntlF1LwlAYx30ZLp2bssqXshIsaH0KrwRvhtBN0IV9tbLb6F4QvPMTaL4keFOrSTdabZTT/icMhij4bF3VDjxs5+x5zv+3/3Yen88bngOeA//dAT/FgFKpdDqdTjdGo9FNvV43KbWrcgOrHixbh3giEAgcxePx82KxyC/Loa4FKQWKotwj/xiRBMgBx3HN4XBoUfZYzCUBtNttM5fLdSCuIJKyLO9Ho9GmpmnTxY3XnZMA2Ka9Xs/MZrPdYDD4DSGK4h4gWk4hyAAMot/vG4DozCFSsVhsVxCEOycQjgB+IDKZTJfn+RPMU3BiJ51OtwaDAelzkE4BE7aPWq32YlnW5Ww2e8U/cShJkmp/vs69KwAmMJlMPnBh4QMI+Wi6AkAvkEKh0IXf75fRIx7G4/EtA6EMjpJsz1VVVYTtZazJiEd0x4qT7ugIIJ/PRyHKxDdhu6breqXRaDhqzWSAQqEghMPhMmzfgu1PAGDiBmAcDRKATXwb4s+maVaq1eq7I+V5EQkgEomcoS6Bt9YhfgXxNzfirJYEAOFP1GiGYVz/hrhbeK/ec8Bz4G848AVFBJ4w4gixKwAAAABJRU5ErkJggg=="},a218:function(e,t,i){function n(){var e=a();if(console.log("判断是否登录====》》》》",e),e)return e["token"]}function a(){var e=uni.getStorageSync("loginuserinfo");return JSON.parse(e)}i("ac1f"),i("5319"),e.exports={userInfo:a,uid:n,isLogined:function(){var e=null!=n();return e||console.log("还没有登录...."),e}}},bcec:function(e,t,i){"use strict";i.d(t,"b",(function(){return a})),i.d(t,"c",(function(){return o})),i.d(t,"a",(function(){return n}));var n={uniList:i("aad6").default,uniListItem:i("651f").default},a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticStyle:{padding:"10px","padding-top":"25px"}},[e.isLogined?n("v-uni-view",{staticStyle:{display:"flex","align-items":"center"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.login.apply(void 0,arguments)}}},[n("v-uni-view",{staticStyle:{width:"100%","align-items":"center",display:"flex",padding:"5px 0"}},[n("v-uni-image",{staticStyle:{width:"60px",height:"60px"},attrs:{src:e.userInfo.avatar}}),n("v-uni-text",{staticStyle:{"font-size":"15px",color:"#888","margin-left":"15px"}},[e._v(e._s(e.userInfo.nickName))])],1),n("v-uni-image",{staticStyle:{width:"20px",height:"20px","flex-shrink":"0","margin-right":"5px"},attrs:{src:i("9b66")}})],1):e._e()],1),n("v-uni-view",{staticStyle:{"margin-top":"5px"}},[n("uni-list",[n("uni-list-item",{attrs:{title:e.i18n.持仓记录,thumb:"../../static/images/me/me_list_icon1.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.listSelected(1)}}}),n("uni-list-item",{attrs:{title:e.i18n.账单明细,thumb:"../../static/images/me/me_list_icon2.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.listSelected(2)}}}),"已认证"==e.cacheSize?n("uni-list-item",{attrs:{title:e.i18n.实名认证,thumb:"../../static/images/me/me_list_icon3.png",showBadge:e.showCache,badgeText:e.i18n[e.cacheSize]}}):n("uni-list-item",{attrs:{title:e.i18n.实名认证,thumb:"../../static/images/me/me_list_icon3.png",showBadge:e.showCache,badgeText:e.i18n[e.cacheSize]},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.listSelected(3)}}}),n("uni-list-item",{attrs:{title:e.i18n.我的账户,thumb:"../../static/images/me/me_list_icon4.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.listSelected(4)}}}),n("uni-list-item",{attrs:{title:e.i18n.消息中心,thumb:"../../static/images/me/me_list_icon5.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.listSelected(5)}}}),n("uni-list-item",{attrs:{title:e.i18n.协议及隐私声明,thumb:"../../static/images/me/me_list_icon6.png"},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.listSelected(6)}}}),n("uni-list-item",{attrs:{title:e.i18n.版本号,thumb:"../../static/images/me/me_list_icon7.png",showBadge:e.showCache,badgeText:e.version},on:{click:function(t){arguments[0]=t=e.$handleEvent(t),e.listSelected(7)}}})],1)],1)],1)},o=[]},be8f:function(e,t,i){var n=i("24fb");t=n(!1),t.push([e.i,'.uni-list-item[data-v-6e85e210]{font-size:%?32?%;position:relative;display:flex;flex-direction:column;justify-content:space-between;align-items:center}.uni-list-item--disabled[data-v-6e85e210]{opacity:.3}.uni-list-item--hover[data-v-6e85e210]{background-color:#f1f1f1}.uni-list-item__container[data-v-6e85e210]{padding:18px %?30?%;width:100%;box-sizing:border-box;flex:1;position:relative;display:flex;flex-direction:row;justify-content:space-between;align-items:center}.uni-list-item__container[data-v-6e85e210]:after{position:absolute;z-index:3;right:0;bottom:0;left:%?30?%;height:1px;content:"";-webkit-transform:scaleY(.5);transform:scaleY(.5)\n\t/* background-color: #e5e5e5 */}.uni-list-item__content[data-v-6e85e210]{flex:1;overflow:hidden;display:flex;flex-direction:column;color:#3b4144}.uni-list-item__content-title[data-v-6e85e210]{font-size:%?32?%;font-size:14px;text-overflow:ellipsis;white-space:nowrap;color:inherit;line-height:1.5;overflow:hidden}.uni-list-item__content-note[data-v-6e85e210]{margin-top:%?6?%;color:#999;font-size:%?28?%;white-space:normal;display:-webkit-box;-webkit-box-orient:vertical;-webkit-line-clamp:2;overflow:hidden}.uni-list-item__extra[data-v-6e85e210]{width:25%;display:flex;flex-direction:row;justify-content:flex-end;align-items:center}.uni-list-item__icon[data-v-6e85e210]{margin-right:%?18?%;display:flex;flex-direction:row;justify-content:center;align-items:center}.uni-list-item__icon-img[data-v-6e85e210]{height:%?52?%;width:%?52?%;height:20px;width:20px}.uni-list>.uni-list-item:last-child .uni-list-item-container[data-v-6e85e210]:after{height:0}',""]),e.exports=t},cb33:function(e,t,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var a=n(i("c21c")),o=n(i("0e68")),c={name:"UniListItem",components:{uniIcons:a.default,uniBadge:o.default},props:{title:{type:String,default:""},note:{type:String,default:""},disabled:{type:[Boolean,String],default:!1},showArrow:{type:[Boolean,String],default:!0},showBadge:{type:[Boolean,String],default:!1},showSwitch:{type:[Boolean,String],default:!1},switchChecked:{type:[Boolean,String],default:!1},badgeText:{type:String,default:""},badgeType:{type:String,default:"success"},thumb:{type:String,default:""},showExtraIcon:{type:[Boolean,String],default:!1},extraIcon:{type:Object,default:function(){return{type:"contact",color:"#000000",size:20}}}},data:function(){return{}},methods:{onClick:function(){this.$emit("click")},onSwitchChange:function(e){this.$emit("switchChange",e.detail)}}};t.default=c},fcd9:function(e,t,i){var n=i("8557");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[e.i,n,""]]),n.locals&&(e.exports=n.locals);var a=i("4f06").default;a("644545e4",n,!0,{sourceMap:!1,shadowMode:!1})}}]);