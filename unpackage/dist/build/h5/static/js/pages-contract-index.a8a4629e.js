(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contract-index"],{1351:function(t,e,i){var a=i("8a13");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("2089c8da",a,!0,{sourceMap:!1,shadowMode:!1})},"208d":function(t,e,i){"use strict";i.r(e);var a=i("a12c"),n=i("a6c5");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("cc22");var o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"3d63e857",null,!1,a["a"],void 0);e["default"]=s.exports},"354d":function(t,e,i){"use strict";i.r(e);var a=i("9c7b"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},"4e45":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".content[data-v-3d63e857]{text-align:center;padding-top:0;padding-bottom:56px;height:200px}.grid-item-wrap[data-v-3d63e857]{margin-top:15px;border-color:#e5e5e5;border-width:1px;border-style:solid;width:100%}.grid-item-left[data-v-3d63e857], .grid-item-right[data-v-3d63e857]{margin-top:0;border-width:1px;border-bottom-width:0;border-right-width:0;border-style:solid;padding:25px 0;border-color:#e5e5e5;border-radius:0;font-size:15px;width:50%}.grid-item-left[data-v-3d63e857]{border-left-width:0}.grid-item-wrap[data-v-3d63e857]:nth-child(-n+2){border-top-width:0}",""]),t.exports=e},5241:function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("e9c4");var n=a(i("55f6")),r=i("c4e0").itemType,o={components:{homeMoneyList:n.default},data:function(){return{itemType:r,dataList:[],intervalId:null}},onLoad:function(){this.getData()},onShow:function(t){uni.setNavigationBarTitle({title:this.$t("tab").合约}),this.startTimer()},onHide:function(){this.stopTimer()},destroyed:function(){this.stopTimer()},mounted:function(){},methods:{fetchData:function(){var t=this;setTimeout((function(){t.getData()}),1e3)},startTimer:function(){this.intervalId=setInterval(this.fetchData,3e3)},stopTimer:function(){this.intervalId&&clearInterval(this.intervalId)},getData:function(){var t=this;uni.request({url:"https://api.taurusen.site/api/home/home/getBlineList",success:function(e){console.log(e);var i=e.data.data.list;t.dataList=i}})},publish:function(t){console.log("item: "+JSON.stringify(t))},loadingStatus:function(t){this.status=t}}};e.default=o},"55f6":function(t,e,i){"use strict";i.r(e);var a=i("8e96"),n=i("354d");for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);i("aacb");var o=i("f0c5"),s=Object(o["a"])(n["default"],a["b"],a["c"],!1,null,"4f19ba62",null,!1,a["a"],void 0);e["default"]=s.exports},"8a13":function(t,e,i){var a=i("24fb");e=a(!1),e.push([t.i,".uni-list[data-v-4f19ba62]:after{height:0}.uni-list[data-v-4f19ba62]:before{height:1px;background-color:#eee}.uni-list-cell-title[data-v-4f19ba62]{padding-left:14px;padding-top:25px;text-align:left;font-size:18px;font-weight:700;color:#333}.uni-list-cell[data-v-4f19ba62]{padding:10px;color:#333}.uni-list-cell[data-v-4f19ba62]:after{left:0;background-color:#ddd}.grid-item-wrap[data-v-4f19ba62]{margin-top:15px;padding-bottom:15px;\n\t/* border-color: #E5E5E5; */border-bottom:1px solid #e5e5e5;\n\t/* border-width: 1px;\n\tborder-style: solid; */width:100%}.grid-item-left[data-v-4f19ba62], .grid-item-right[data-v-4f19ba62]{margin-top:0;\n\t/*border-width: 1px; */color:#9a9a9a;\n\t/* border-bottom-width: 0;\n\tborder-right-width: 0;\n\tborder-style: solid; */\n\t/* padding: 25px 0;\n\tborder-color: #E5E5E5;\n\tborder-radius: 0px; */font-size:15px;width:50%}.text-xmd[data-v-4f19ba62]{font-size:18px;color:#333}.text-gray[data-v-4f19ba62]{font-size:12px;color:#9a9a9a}\n\n/* .grid-item-left {\n\tborder-left-width: 0;\n}\n.grid-item-wrap:nth-child(-n+2){\n\tborder-top-width: 0;\n} */",""]),t.exports=e},"8e96":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell-title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btn.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.数字货币))]),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[i("v-uni-view",{staticClass:"grid-item-wrap",staticStyle:{width:"100%"}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"grid-item-left"},[t._v(t._s(t.i18n.交易品种))]),i("v-uni-view",{staticClass:"grid-item-right"},[t._v(t._s(t.i18n.最新价))]),i("v-uni-view",{staticClass:"grid-item-right"},[t._v(t._s(t.i18n.涨跌幅))])],1)],1)],1),t._l(t.items,(function(e,a){return i("v-uni-view",{key:a,staticClass:"uni-list-cell",staticStyle:{"flex-direction":"column","align-items":"flex-start"},attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticStyle:{width:"100%"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openDetailPage(e)}}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"grid-item-left"},[i("p",{staticClass:"text-ind-1"},[i("span",{staticClass:"text-xmd"},[t._v(t._s(e.sname))]),i("span",{staticClass:"text-gray"},[t._v("/USDT")])])]),i("v-uni-view",{staticClass:"grid-item-right",staticStyle:{color:"#333"}},[t._v(t._s(e.nowPri))]),i("v-uni-view",{staticClass:"grid-item-right",class:e.increPer>0?"text-green":"text-red"},[t._v(t._s(e.increPer)+"%")])],1)],1)],1)}))],2)],1)},n=[]},"9c7b":function(t,e,i){"use strict";i("7a82");var a=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("99af"),i("d3b7"),i("159b"),i("ac1f"),i("5319"),i("14d9");var n=a(i("695d")),r=a(i("ae6a")),o=a(i("4b68")),s=i("b61c").dateUtils,l=i("c4e0"),d=i("1eba"),u={name:"homeMoneyList",components:{listItemCell:n.default,shangjia:r.default,lifeItemCell:o.default},props:{type:{type:String,default:"0"},items:{type:Array,default:function(){return[]}}},data:function(){return{itemType:[],pageNumber:1,noMore:0,comType:"default"}},computed:{i18n:function(){return this.$t("home")}},mounted:function(){console.log("itemsitemsitems-==>>")},methods:{btn:function(){},loadData:function(){var t=this,e={category:"sy",subType:this.type,pageNumber:this.pageNumber};"14"!=this.type&&"15"!=this.type&&"16"!=this.type&&"17"!=this.type||(e["category"]="life",e["subType"]="22","15"==this.type?e["subType"]="23":"16"==this.type?e["subType"]="21":"17"==this.type&&(e["subType"]="27")),d.post(d.url.getsy,e,(function(e){var i=e;i&&i.length>0?(1==t.pageNumber?(uni.stopPullDownRefresh(),t.items=t._formatter(i)):t.items=t.items.concat(t._formatter(i)),i.length<20&&t.$emit("loadingStatus","noMore")):t.$emit("loadingStatus","noMore")}),(function(e){console.log(e),uni.showToast({title:"请求网络失败！",icon:"none"}),t.$emit("loadingStatus","noMore")}))},_formatter:function(t){var e=this;return t.forEach((function(t){var i=t["content"];t["content"]=i.replace("/\n/g"," ");var a=e.getAvatarUrl(t);t["avatar"]=a;var n=t["postDate"];t["postDateFormatter"]=s.format(n),t["typeName"]=e.postType(t["type"]);var r=t["images"];if(null!=r&&r.length>0){var o=r.split(","),l=(plus.screen.resolutionWidth-30)/3;1==o.length&&(l=(plus.screen.resolutionWidth-30)/3),t["width"]=l;for(var d=o.length>3?3:o.length,u=Array(),c=0;c<d;c++){var f=e.getDtImageUrl(o[c],"../../static/images/new/600x153_w.png");u.push(f)}t["imageUrl"]=u}})),t},getDtImageUrl:function(t,e){return t&&(t=t.replace(".jpg","_thumb.jpg")),t||e},getAvatarUrl:function(t){var e=t["user"]["avatar_thumb"];return null!=e&&""!=e||(e="../../static/images/default_avatar.png"),e},postType:function(t){var e=l.titleForType;return e[t]||"其他"},openDetailPage:function(t){console.log("valuevaluevalue",t);var e=t["sname"];uni.navigateTo({url:"/pages/contract/kline?coinType="+e})}}};e.default=u},a12c:function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return n})),i.d(e,"a",(function(){}));var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("home-money-list",{ref:"homeList",attrs:{items:t.dataList},on:{loadingStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.loadingStatus.apply(void 0,arguments)}}})],1)},n=[]},a6c5:function(t,e,i){"use strict";i.r(e);var a=i("5241"),n=i.n(a);for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);e["default"]=n.a},aacb:function(t,e,i){"use strict";var a=i("1351"),n=i.n(a);n.a},cc22:function(t,e,i){"use strict";var a=i("f041"),n=i.n(a);n.a},f041:function(t,e,i){var a=i("4e45");a.__esModule&&(a=a.default),"string"===typeof a&&(a=[[t.i,a,""]]),a.locals&&(t.exports=a.locals);var n=i("4f06").default;n("7d150aac",a,!0,{sourceMap:!1,shadowMode:!1})}}]);