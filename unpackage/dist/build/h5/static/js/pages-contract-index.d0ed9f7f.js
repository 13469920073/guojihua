(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-contract-index"],{1760:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".content[data-v-80ffd498]{text-align:center;padding-top:0;padding-bottom:56px;height:200px}.grid-item-wrap[data-v-80ffd498]{margin-top:15px;border-color:#e5e5e5;border-width:1px;border-style:solid;width:100%}.grid-item-left[data-v-80ffd498],\n.grid-item-right[data-v-80ffd498]{margin-top:0;border-width:1px;border-bottom-width:0;border-right-width:0;border-style:solid;padding:25px 0;border-color:#e5e5e5;border-radius:0;font-size:15px;width:50%}.grid-item-left[data-v-80ffd498]{border-left-width:0}.grid-item-wrap[data-v-80ffd498]:nth-child(-n+2){border-top-width:0}",""]),t.exports=e},"377f":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("99af"),i("d3b7"),i("159b"),i("ac1f"),i("5319"),i("14d9");var a=n(i("0998")),r=n(i("eae3")),o=n(i("1dec")),s=i("f0f6").dateUtils,l=i("f94f"),d=i("1b1e"),u={name:"homeMoneyList",components:{listItemCell:a.default,shangjia:r.default,lifeItemCell:o.default},props:{type:{type:String,default:"0"},items:{type:Array,default:function(){return[]}}},data:function(){return{itemType:[],pageNumber:1,noMore:0,comType:"default"}},computed:{i18n:function(){return this.$t("home")}},mounted:function(){console.log("itemsitemsitems-==>>")},methods:{btn:function(){},loadData:function(){var t=this,e={category:"sy",subType:this.type,pageNumber:this.pageNumber};"14"!=this.type&&"15"!=this.type&&"16"!=this.type&&"17"!=this.type||(e["category"]="life",e["subType"]="22","15"==this.type?e["subType"]="23":"16"==this.type?e["subType"]="21":"17"==this.type&&(e["subType"]="27")),d.post(d.url.getsy,e,(function(e){var i=e;i&&i.length>0?(1==t.pageNumber?(uni.stopPullDownRefresh(),t.items=t._formatter(i)):t.items=t.items.concat(t._formatter(i)),i.length<20&&t.$emit("loadingStatus","noMore")):t.$emit("loadingStatus","noMore")}),(function(e){console.log(e),uni.showToast({title:"请求网络失败！",icon:"none"}),t.$emit("loadingStatus","noMore")}))},_formatter:function(t){var e=this;return t.forEach((function(t){var i=t["content"];t["content"]=i.replace("/\n/g"," ");var n=e.getAvatarUrl(t);t["avatar"]=n;var a=t["postDate"];t["postDateFormatter"]=s.format(a),t["typeName"]=e.postType(t["type"]);var r=t["images"];if(null!=r&&r.length>0){var o=r.split(","),l=(plus.screen.resolutionWidth-30)/3;1==o.length&&(l=(plus.screen.resolutionWidth-30)/3),t["width"]=l;for(var d=o.length>3?3:o.length,u=Array(),c=0;c<d;c++){var f=e.getDtImageUrl(o[c],"../../static/images/new/600x153_w.png");u.push(f)}t["imageUrl"]=u}})),t},getDtImageUrl:function(t,e){return t&&(t=t.replace(".jpg","_thumb.jpg")),t||e},getAvatarUrl:function(t){var e=t["user"]["avatar_thumb"];return null!=e&&""!=e||(e="../../static/images/default_avatar.png"),e},postType:function(t){var e=l.titleForType;return e[t]||"其他"},openDetailPage:function(t){console.log("valuevaluevalue",t);var e=t["sname"];uni.navigateTo({url:"/pages/contract/kline?coinType="+e})}}};e.default=u},4043:function(t,e,i){"use strict";var n=i("a59b"),a=i.n(n);a.a},"5bd7":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"content"},[i("home-money-list",{ref:"homeList",attrs:{items:t.dataList},on:{loadingStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.loadingStatus.apply(void 0,arguments)}}})],1)},a=[]},"5db7":function(t,e,i){"use strict";i.r(e);var n=i("5bd7"),a=i("bbe8");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("4043");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"80ffd498",null,!1,n["a"],void 0);e["default"]=s.exports},"6f3d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-list[data-v-096051ce]:after{height:0}.uni-list[data-v-096051ce]:before{height:1px;background-color:#eee}.uni-list-cell-title[data-v-096051ce]{padding-left:14px;padding-top:25px;text-align:left;font-size:18px;font-weight:700;color:#333}.uni-list-cell[data-v-096051ce]{padding:10px;color:#333}.uni-list-cell[data-v-096051ce]:after{left:0;background-color:#ddd}.grid-item-wrap[data-v-096051ce]{margin-top:15px;padding-bottom:15px;\n\t/* border-color: #E5E5E5; */border-bottom:1px solid #e5e5e5;\n\t/* border-width: 1px;\n\tborder-style: solid; */width:100%}.grid-item-left[data-v-096051ce], .grid-item-right[data-v-096051ce]{margin-top:0;\n\t/*border-width: 1px; */color:#9a9a9a;\n\t/* border-bottom-width: 0;\n\tborder-right-width: 0;\n\tborder-style: solid; */\n\t/* padding: 25px 0;\n\tborder-color: #E5E5E5;\n\tborder-radius: 0px; */font-size:15px;width:50%}.text-xmd[data-v-096051ce]{font-size:18px;color:#333}.text-gray[data-v-096051ce]{font-size:12px;color:#9a9a9a}\n\n/* .grid-item-left {\n\tborder-left-width: 0;\n}\n.grid-item-wrap:nth-child(-n+2){\n\tborder-top-width: 0;\n} */",""]),t.exports=e},7263:function(t,e,i){"use strict";i.r(e);var n=i("377f"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},9216:function(t,e,i){var n=i("6f3d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0a7f62fa",n,!0,{sourceMap:!1,shadowMode:!1})},"9a10":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell-title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btn.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.数字货币))]),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[i("v-uni-view",{staticClass:"grid-item-wrap",staticStyle:{width:"100%"}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"grid-item-left"},[t._v(t._s(t.i18n.交易品种))]),i("v-uni-view",{staticClass:"grid-item-right"},[t._v(t._s(t.i18n.最新价))]),i("v-uni-view",{staticClass:"grid-item-right"},[t._v(t._s(t.i18n.涨跌幅))])],1)],1)],1),t._l(t.items,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-list-cell",staticStyle:{"flex-direction":"column","align-items":"flex-start"},attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticStyle:{width:"100%"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openDetailPage(e)}}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"grid-item-left"},[i("p",{staticClass:"text-ind-1"},[i("span",{staticClass:"text-xmd"},[t._v(t._s(e.sname))]),i("span",{staticClass:"text-gray"},[t._v("/USDT")])])]),i("v-uni-view",{staticClass:"grid-item-right",staticStyle:{color:"#333"}},[t._v(t._s(e.nowPri))]),i("v-uni-view",{staticClass:"grid-item-right",class:e.increPer<0?"text-red":"text-green"},[t._v(t._s(e.increPer)+"%")])],1)],1)],1)}))],2)],1)},a=[]},"9f23":function(t,e,i){"use strict";var n=i("9216"),a=i.n(n);a.a},a59b:function(t,e,i){var n=i("1760");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("fcf1012a",n,!0,{sourceMap:!1,shadowMode:!1})},b007:function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("c740"),i("e9c4");var a=n(i("c1cb")),r=i("f94f").itemType,o={components:{homeMoneyList:a.default},data:function(){return{itemType:r,dataList:[],intervalId:null}},onLoad:function(){this.getData()},onShow:function(t){uni.setNavigationBarTitle({title:this.$t("tab").合约}),this.startTimer()},onHide:function(){this.stopTimer()},onUnload:function(){this.stopTimer()},destroyed:function(){this.stopTimer()},mounted:function(){},methods:{fetchData:function(){var t=this;null!==this.intervalId&&setTimeout((function(){t.getData()}),1e3)},startTimer:function(){this.intervalId=setInterval(this.fetchData,3e3)},stopTimer:function(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=null)},getData:function(){var t=this;uni.request({url:"https://api.taurusen.site/api/home/home/getBlineList",success:function(e){console.log(e);e.data.data.list;uni.request({url:"https://min-api.cryptocompare.com/data/histohour",method:"GET",data:{fsym:"Toncoin",tsym:"USDT",limit:"24",aggregate:3,e:"CCCAGG"},success:function(i){var n=e.data.data.list,a=i.data.Data,r=a[a.length-1],o=a[a.length-2].close,s=r.close,l=o-s;console.log("list2list2list2list2",r);var d={sname:"TON",increPer:l.toFixed(2),nowPri:r.close,vol:"-"},u=n.findIndex((function(t){return"HBC"===t.sname}));-1!==u&&t.$set(n,u,d),t.dataList=n},fail:function(t){console.error("GET请求失败：",t)}})}})},publish:function(t){console.log("item: "+JSON.stringify(t))},loadingStatus:function(t){this.status=t}}};e.default=o},bbe8:function(t,e,i){"use strict";i.r(e);var n=i("b007"),a=i.n(n);for(var r in n)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(r);e["default"]=a.a},c1cb:function(t,e,i){"use strict";i.r(e);var n=i("9a10"),a=i("7263");for(var r in a)["default"].indexOf(r)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(r);i("9f23");var o=i("f0c5"),s=Object(o["a"])(a["default"],n["b"],n["c"],!1,null,"096051ce",null,!1,n["a"],void 0);e["default"]=s.exports}}]);