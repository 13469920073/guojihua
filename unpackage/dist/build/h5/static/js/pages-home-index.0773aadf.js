(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-home-index"],{"059d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";.uni-grid[data-v-e6637182]{margin-top:5px;position:absolute;z-index:9999;right:10px\n\t/* position: relative;\n\tdisplay: flex;\n\tflex-direction: column */}.uni-grid__flex[data-v-e6637182]{display:flex;flex-direction:row}.uni-grid-item[data-v-e6637182]{display:flex;position:relative;flex-direction:column;flex:1}.uni-grid-item[data-v-e6637182]:before{display:block;content:" ";padding-bottom:100%}.uni-grid-item[data-v-e6637182]:after{content:"";position:absolute;z-index:1;-webkit-transform-origin:center;transform-origin:center;box-sizing:border-box;top:-50%;left:-50%;right:-50%;bottom:-50%;border-color:#c8c7cc;border-style:solid;border-width:1px;-webkit-transform:scale(.5);transform:scale(.5);border-top-width:0;border-left-width:0}.uni-grid-item__content[data-v-e6637182]{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.uni-grid-item-text[data-v-e6637182]{font-size:%?32?%;color:#333;margin-top:%?12?%}.uni-grid-item-hover[data-v-e6637182]{background-color:#fefefe}.uni-grid-item-image[data-v-e6637182]{width:%?80?%;height:%?80?%}.uni-grid .uni-grid__flex:first-child .uni-grid-item[data-v-e6637182]:after{border-top-width:1px}.uni-grid .uni-grid__flex .uni-grid-item[data-v-e6637182]:first-child:after{border-left-width:1px}.uni-grid.uni-grid-no-out-border .uni-grid__flex:first-child .uni-grid-item[data-v-e6637182]:after{border-top-width:0}.uni-grid.uni-grid-no-out-border .uni-grid__flex:last-child .uni-grid-item[data-v-e6637182]:after{border-bottom-width:0}.uni-grid.uni-grid-no-out-border .uni-grid__flex .uni-grid-item[data-v-e6637182]:first-child:after{border-left-width:0}.uni-grid.uni-grid-no-out-border .uni-grid__flex .uni-grid-item[data-v-e6637182]:last-child:after{border-right-width:0}.uni-grid.uni-grid-no-border .uni-grid-item[data-v-e6637182]:after{border-width:0}.uni-grid.uni-grid-no-border .uni-grid__flex:first-child .uni-grid-item[data-v-e6637182]:after{border-top-width:0}.uni-grid.uni-grid-no-border .uni-grid__flex .uni-grid-item[data-v-e6637182]:first-child:after{border-left-width:0}.uni-grid-item-oblong.uni-grid-item[data-v-e6637182]:before{padding-bottom:60%}.uni-grid-item-oblong .uni-grid-item__content[data-v-e6637182]{flex-direction:row}.uni-grid-item-oblong .uni-grid-item-image[data-v-e6637182]{width:%?52?%;height:%?52?%}.uni-grid-item-oblong .uni-grid-item-text[data-v-e6637182]{margin-top:0;margin-left:%?12?%}\n\n/* 自定义样式 */.uni-grid-item-text[data-v-e6637182]{font-size:13px;color:#444}.uni-grid-item-hover[data-v-e6637182]{background-color:#fff}.uni-grid[data-v-e6637182]{margin-top:5px}.uni-grid-item-image[data-v-e6637182]{width:30px;height:30px}.uni-grid-item[data-v-e6637182]:before{display:block;content:" ";padding-bottom:80%}',""]),t.exports=e},"05c8":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3"),i("d3b7"),i("159b"),i("14d9");var n={name:"UniGridList",props:{options:{type:Array,default:function(){return[]}},items:{type:Array,default:function(){return[]}},type:{type:String,default:"square"},columnNum:{type:[Number,String],default:3},showOutBorder:{type:Boolean,default:!0},showBorder:{type:Boolean,default:!0}},data:function(){return{}},computed:{gridGroup:function(){var t=this,e=[],i=[];return this.options&&this.options.forEach((function(n,a){i.push(n),a%t.columnNum===t.columnNum-1&&(e.push(i),i=[])})),i&&i.length>0&&e.push(i),i=null,e}},mounted:function(){var t;this.columnNumber=null===(t=this.gridGroup[0])||void 0===t?void 0:t.length},methods:{onClick:function(t,e){this.$emit("click",{index:t*this.columnNumber+e})}}};e.default=n},"0eec":function(t,e,i){"use strict";var n=i("e279"),a=i.n(n);a.a},"11e2":function(t,e,i){"use strict";i.r(e);var n=i("7fd7"),a=i("52b4");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("7fec");var r=i("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"21ce95fc",null,!1,n["a"],void 0);e["default"]=d.exports},1498:function(t,e,i){var n=i("be2e");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("6751e906",n,!0,{sourceMap:!1,shadowMode:!1})},"15b2":function(t,e,i){"use strict";i.r(e);var n=i("75c1"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},1766:function(t,e,i){var n=i("9fd8");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1c43fa4b",n,!0,{sourceMap:!1,shadowMode:!1})},"1ae2":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-swiper__warp"},[t._t("default"),"default"===t.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item",style:{width:t.dots.width+"px",height:t.dots.height+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"long"===t.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item ",class:[n===t.current&&"uni-swiper__dots-long"],style:{width:(n===t.current?3*t.dots.width:t.dots.width)+"px",height:t.dots.height+"px","background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}})})),1):t._e(),"nav"===t.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box uni-swiper__dots-nav",style:{"background-color":t.dotsStyles.backgroundColor}},[i("v-uni-view",{staticClass:"uni-swiper__dots-nav-item",style:{color:t.dotsStyles.color}},[t._v(t._s(t.current+1+"/"+t.info.length)+"\n\t\t\t\t"+t._s(t.info[t.current][t.field]))])],1):t._e(),"indexes"===t.mode?i("v-uni-view",{staticClass:"uni-swiper__dots-box",style:{bottom:t.dots.bottom+"px"}},t._l(t.info,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-swiper__dots-item uni-swiper__dots-indexes",style:{width:t.dots.width+"px",height:t.dots.height+"px",color:n===t.current?t.dots.selectedColor:t.dots.color,"background-color":n!==t.current?t.dots.backgroundColor:t.dots.selectedBackgroundColor,border:n!==t.current?t.dots.border:t.dots.selectedBorder}},[t._v(t._s(n+1))])})),1):t._e()],2)},a=[]},"343f":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-load-more"},[i("v-uni-view",{directives:[{name:"show",rawName:"v-show",value:"loading"===t.status&&t.showIcon,expression:"status === 'loading' && showIcon"}],staticClass:"uni-load-more__img"},[i("v-uni-view",{staticClass:"load1"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load2"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1),i("v-uni-view",{staticClass:"load3"},[i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}}),i("v-uni-view",{style:{background:t.color}})],1)],1),i("v-uni-text",{staticClass:"uni-load-more__text",style:{color:t.color}},[t._v(t._s("more"===t.status?t.contentText.contentdown:"loading"===t.status?t.contentText.contentrefresh:t.contentText.contentnomore))])],1)},a=[]},"377f":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("99af"),i("d3b7"),i("159b"),i("ac1f"),i("5319"),i("14d9");var a=n(i("0998")),o=n(i("eae3")),r=n(i("1dec")),d=i("f0f6").dateUtils,s=i("f94f"),l=i("1b1e"),u={name:"homeMoneyList",components:{listItemCell:a.default,shangjia:o.default,lifeItemCell:r.default},props:{type:{type:String,default:"0"},items:{type:Array,default:function(){return[]}}},data:function(){return{itemType:[],pageNumber:1,noMore:0,comType:"default"}},computed:{i18n:function(){return this.$t("home")}},mounted:function(){console.log("itemsitemsitems-==>>")},methods:{btn:function(){},loadData:function(){var t=this,e={category:"sy",subType:this.type,pageNumber:this.pageNumber};"14"!=this.type&&"15"!=this.type&&"16"!=this.type&&"17"!=this.type||(e["category"]="life",e["subType"]="22","15"==this.type?e["subType"]="23":"16"==this.type?e["subType"]="21":"17"==this.type&&(e["subType"]="27")),l.post(l.url.getsy,e,(function(e){var i=e;i&&i.length>0?(1==t.pageNumber?(uni.stopPullDownRefresh(),t.items=t._formatter(i)):t.items=t.items.concat(t._formatter(i)),i.length<20&&t.$emit("loadingStatus","noMore")):t.$emit("loadingStatus","noMore")}),(function(e){console.log(e),uni.showToast({title:"请求网络失败！",icon:"none"}),t.$emit("loadingStatus","noMore")}))},_formatter:function(t){var e=this;return t.forEach((function(t){var i=t["content"];t["content"]=i.replace("/\n/g"," ");var n=e.getAvatarUrl(t);t["avatar"]=n;var a=t["postDate"];t["postDateFormatter"]=d.format(a),t["typeName"]=e.postType(t["type"]);var o=t["images"];if(null!=o&&o.length>0){var r=o.split(","),s=(plus.screen.resolutionWidth-30)/3;1==r.length&&(s=(plus.screen.resolutionWidth-30)/3),t["width"]=s;for(var l=r.length>3?3:r.length,u=Array(),c=0;c<l;c++){var f=e.getDtImageUrl(r[c],"../../static/images/new/600x153_w.png");u.push(f)}t["imageUrl"]=u}})),t},getDtImageUrl:function(t,e){return t&&(t=t.replace(".jpg","_thumb.jpg")),t||e},getAvatarUrl:function(t){var e=t["user"]["avatar_thumb"];return null!=e&&""!=e||(e="../../static/images/default_avatar.png"),e},postType:function(t){var e=s.titleForType;return e[t]||"其他"},openDetailPage:function(t){console.log("valuevaluevalue",t);var e=t["sname"];uni.navigateTo({url:"/pages/contract/kline?coinType="+e})}}};e.default=u},3816:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniGrid",props:{},data:function(){return{options:[{value:"option1",label:"选项1"},{value:"option2",label:"选项2"},{value:"option3",label:"选项3"}],selectedValue:"日本語"}},computed:{i18n:function(){return this.$t("home")}},mounted:function(){},onShow:function(){},methods:{selectChange:function(){console.log("======",this.selectedValue),"日本語"==this.selectedValue?this._i18n.locale="japan":"English"==this.selectedValue?this._i18n.locale="english":"中文"==this.selectedValue?this._i18n.locale="china":"한국어"==this.selectedValue&&(this._i18n.locale="korean"),this.loadTab(),this.$emit("localeClick",{locale:this._i18n.locale}),console.log("===this._i18n===",this._i18n.locale)},loadTab:function(){uni.setTabBarItem({index:0,text:this.$t("tab").首页}),uni.setTabBarItem({index:1,text:this.$t("tab").合约}),uni.setTabBarItem({index:2,text:this.$t("tab").钱包}),uni.setTabBarItem({index:3,text:this.$t("tab").个人中心})},onClick:function(t,e){this.$emit("click",{index:t*this.columnNumber+e})}}};e.default=n},"3a36":function(t,e,i){"use strict";i.r(e);var n=i("05c8"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"4b8d":function(t,e,i){"use strict";i("7a82");var n=i("4ea4").default;Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var a=n(i("5530"));i("c740"),i("4de4"),i("d3b7"),i("d81d"),i("14d9"),i("acd8");var o=n(i("c270")),r=n(i("ead1")),d=n(i("b8c6")),s=n(i("b186")),l=n(i("892e")),u=n(i("c1cb")),c=(i("f94f"),i("1b1e"),{components:{uniSelect:o.default,uniSwiperDot:d.default,uniGridList:s.default,homeMoneyList:u.default,uniLoadMore:r.default,uniScrollNotice:l.default},data:function(){return{imagesArr:[],swiperImages:[{url:"../../static/images/home/home_top_banner1.png"},{url:"../../static/images/home/home_top_banner2.png"},{url:"../../static/images/home/home_top_banner3.png"}],swiperImages2:[{url:"../../static/images/home/home_top_banner1.png"},{url:"../../static/images/home/home_top_banner22.png"},{url:"../../static/images/home/home_top_banner33.png"}],swiperImages3:[{url:"../../static/images/home/home_top_banner1.png"},{url:"../../static/images/home/home_top_banner222.png"},{url:"../../static/images/home/home_top_banner333.png"}],noticeList:[],current:0,mode:"default",dotsStyles:{backgroundColor:"rgba(255, 90, 95,0.3)",border:"1px rgba(255, 90, 95,0.3) solid",color:"#fff",selectedBackgroundColor:"rgba(255, 90, 95,0.9)",selectedBorder:"1px rgba(255, 90, 95,0.9) solid"},dataTopList:[],dataList:[],itemType:[],status:"loading",intervalId:null,contentText:{contentdown:"上拉加载更多",contentrefresh:"加载中",contentnomore:"没有更多了"}}},onLoad:function(){var t=this._i18n.locale;this.getData(),this.getNotice(t)},onShow:function(){this.startTimer()},onPullDownRefresh:function(){},onReachBottom:function(){},onHide:function(){this.stopTimer()},destroyed:function(){this.stopTimer()},beforeDestroy:function(){this.stopTimer()},onUnload:function(){this.stopTimer()},methods:{localeClick:function(t){this.getNotice(t.locale)},fetchData:function(){var t=this;null!==this.intervalId&&setTimeout((function(){t.getData()}),1e3)},startTimer:function(){this.intervalId=setInterval(this.fetchData,3e3)},stopTimer:function(){this.intervalId&&(window.clearInterval(this.intervalId),this.intervalId=null)},getNotice:function(t){var e="china"==t?"zh-CN,zh;q=0.9":"japan"==t?"ja":"en";this.imagesArr="china"==t?this.swiperImages:"japan"==t?this.swiperImages2:this.swiperImages3,console.log("langlanglang",e);var i=this;uni.request({url:"https://api.taurusen.site/api/home/home/getHomeHot",header:{"Lang-Locale":e},success:function(t){var e=t.data.data.notice;i.noticeList=e}})},getData:function(){var t=this,e={fsym:"Toncoin",tsym:"USDT",limit:"24",aggregate:3,e:"CCCAGG"},i=["BTC","ETH","TON"];uni.request({url:"https://api.taurusen.site/api/home/home/getBlineList",success:function(n){uni.request({url:"https://min-api.cryptocompare.com/data/histohour",method:"GET",data:e,success:function(e){console.log(n);var a=n.data.data.list,o=e.data.Data,r=o[o.length-1],d=o[o.length-2].close,s=r.close,l=d-s;console.log("list2list2list2list2",r);var u={sname:"TON",increPer:l.toFixed(2),nowPri:r.close,vol:"-"},c=a.findIndex((function(t){return"HBC"===t.sname}));-1!==c&&t.$set(a,c,u),console.log("”New Itemlistlist",a),t.dataTopList=t.filter(a,i),t.dataList=a,console.log("GET请求成功：",n.data.Data)},fail:function(t){console.error("GET请求失败：",t)}})}})},filter:function(t,e){var i=[];return e.map((function(e){t.map((function(t){if(t.sname==e){var n=(0,a.default)({},t);i.push(n)}}))})),i},filterData:function(t,e){var i=[];return e.map((function(e){t.map((function(t){if(t.symbol==e){var n={increPer:parseFloat(t.changePercent24Hr).toFixed(2),nowPri:parseFloat(t.priceUsd).toFixed(4),sname:t.symbol,id:t.id,vol:parseFloat(t.priceUsd).toFixed(4)};i.push(n)}}))})),i},change:function(t){this.current=t.detail.current},loadingStatus:function(t){this.status=t},openCustomerService:function(){uni.navigateTo({url:"/pages/home/service"})},onClick:function(t){var e=t.index,i=this.itemType[e];uni.navigateTo({url:"home-list?t="+i["text"]+"&id="+i["type"]})}}});e.default=c},"52b4":function(t,e,i){"use strict";i.r(e);var n=i("4b8d"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"557b":function(t,e,i){"use strict";var n=i("62d6"),a=i.n(n);a.a},"55c98":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-grid"},[i("v-uni-view",{staticClass:"uniSelect"},[i("select",{directives:[{name:"model",rawName:"v-model",value:t.selectedValue,expression:"selectedValue"}],attrs:{name:"cars",id:"cars"},on:{change:[function(e){var i=Array.prototype.filter.call(e.target.options,(function(t){return t.selected})).map((function(t){var e="_value"in t?t._value:t.value;return e}));t.selectedValue=e.target.multiple?i:i[0]},function(e){arguments[0]=e=t.$handleEvent(e),t.selectChange.apply(void 0,arguments)}]}},[i("option",[t._v("日本語")]),i("option",[t._v("English")]),i("option",[t._v("中文")])])])],1)},a=[]},"5fec":function(t,e,i){"use strict";var n=i("77d3"),a=i.n(n);a.a},6208:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={name:"UniLoadMore",props:{status:{type:String,default:"more"},showIcon:{type:Boolean,default:!0},color:{type:String,default:"#777777"},contentText:{type:Object,default:function(){return{contentdown:"上拉显示更多",contentrefresh:"正在加载...",contentnomore:"没有更多数据了"}}}},data:function(){return{}}};e.default=n},"62d6":function(t,e,i){var n=i("68e9");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("3a7f596c",n,!0,{sourceMap:!1,shadowMode:!1})},"68e9":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".notice_bg[data-v-6e750b04]{\n        /* margin: 32rpx; */background-color:#fff;border-radius:%?8?%;padding:%?16?% %?20?%;display:flex;align-items:center;border:2px solid #f6f6f6}.icon[data-v-6e750b04]{width:%?40?%;height:%?40?%}.line[data-v-6e750b04]{margin:0 %?16?% 0 %?20?%;\n            /* background-color: #F4F4F4;\n            width: 2rpx; */height:%?68?%}.bar-swiper[data-v-6e750b04]{font-size:%?24?%;font-family:PingFangSC-Regular,PingFang SC;font-weight:400;color:rgba(34,34,34,.5);height:%?80?%;display:flex;align-items:center;flex:1;margin-left:%?12?%}.swiper-item[data-v-6e750b04]{display:flex;align-items:center;overflow:hidden}.circle[data-v-6e750b04]{min-width:%?10?%;width:%?10?%;height:%?10?%;border-radius:50%;background-color:rgba(34,34,34,.5);margin-right:%?10?%}.item_box[data-v-6e750b04]{word-break:break-all;  /* break-all(允许在单词内换行。) */text-overflow:ellipsis;  /* 超出部分省略号 */display:-webkit-box; /** 对象作为伸缩盒子模型显示 **/-webkit-box-orient:vertical; /** 设置或检索伸缩盒对象的子元素的排列方式 **/-webkit-line-clamp:1 /** 显示的行数 **/}",""]),t.exports=e},"6f3d":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-list[data-v-096051ce]:after{height:0}.uni-list[data-v-096051ce]:before{height:1px;background-color:#eee}.uni-list-cell-title[data-v-096051ce]{padding-left:14px;padding-top:25px;text-align:left;font-size:18px;font-weight:700;color:#333}.uni-list-cell[data-v-096051ce]{padding:10px;color:#333}.uni-list-cell[data-v-096051ce]:after{left:0;background-color:#ddd}.grid-item-wrap[data-v-096051ce]{margin-top:15px;padding-bottom:15px;\n\t/* border-color: #E5E5E5; */border-bottom:1px solid #e5e5e5;\n\t/* border-width: 1px;\n\tborder-style: solid; */width:100%}.grid-item-left[data-v-096051ce], .grid-item-right[data-v-096051ce]{margin-top:0;\n\t/*border-width: 1px; */color:#9a9a9a;\n\t/* border-bottom-width: 0;\n\tborder-right-width: 0;\n\tborder-style: solid; */\n\t/* padding: 25px 0;\n\tborder-color: #E5E5E5;\n\tborder-radius: 0px; */font-size:15px;width:50%}.text-xmd[data-v-096051ce]{font-size:18px;color:#333}.text-gray[data-v-096051ce]{font-size:12px;color:#9a9a9a}\n\n/* .grid-item-left {\n\tborder-left-width: 0;\n}\n.grid-item-wrap:nth-child(-n+2){\n\tborder-top-width: 0;\n} */",""]),t.exports=e},7263:function(t,e,i){"use strict";i.r(e);var n=i("377f"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},"75c1":function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={props:{items:{type:Array,default:function(){return[]}}},data:function(){return{noticeImg:"../../static/images/home/bell.png"}},mounted:function(){},watch:{},methods:{setParams:function(){var t=this;this.noticeX=0,this.$nextTick((function(){t.noticeWidth=t.$refs.scrollNotice.offsetWidth}))},setNoticeTimer:function(){var t=this;this.noticeTimer=setInterval((function(){t.setParams()}),this.duration)},setScrollNotice:function(){var t=this;this.scrollNotice=setInterval((function(){t.noticeWidth>Math.abs(t.noticeX)?t.noticeX=t.noticeX-1:t.noticeX=0}),30)},setScrollEvent:function(){var t=this;this.$refs.scrollNotice.addEventListener("mouseover",(function(){clearInterval(t.scrollNotice)})),this.$refs.scrollNotice.addEventListener("mouseout",(function(){t.setScrollNotice()}))}}};e.default=n},"77d3":function(t,e,i){var n=i("9db6");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("633d9619",n,!0,{sourceMap:!1,shadowMode:!1})},"7fd7":function(t,e,i){"use strict";i.d(e,"b",(function(){return a})),i.d(e,"c",(function(){return o})),i.d(e,"a",(function(){return n}));var n={uniSelect:i("c270").default,uniSwiperDot:i("b8c6").default,uniScrollNotice:i("892e").default,uniGridList:i("b186").default},a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-uni-view",{staticClass:"content"},[n("v-uni-view",{staticClass:"float-button",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.openCustomerService.apply(void 0,arguments)}}},[n("v-uni-image",{attrs:{src:i("b217")}})],1),n("uni-select",{on:{localeClick:function(e){arguments[0]=e=t.$handleEvent(e),t.localeClick.apply(void 0,arguments)}}}),n("uni-swiper-dot",{attrs:{info:t.swiperImages,current:t.current,mode:t.mode,"dots-styles":t.dotsStyles}},[n("v-uni-swiper",{staticClass:"swiper-box",staticStyle:{height:"180px"},attrs:{autoplay:"true"},on:{change:function(e){arguments[0]=e=t.$handleEvent(e),t.change.apply(void 0,arguments)}}},t._l(t.imagesArr,(function(t,e){return n("v-uni-swiper-item",{key:e},[n("v-uni-view",{staticClass:"swiper-item"},[n("v-uni-image",{attrs:{src:t.url}})],1)],1)})),1)],1),n("uni-scroll-notice",{attrs:{items:t.noticeList}}),n("uni-grid-list",{attrs:{options:t.itemType,"show-border":!1,items:t.dataTopList,"column-num":4},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick.apply(void 0,arguments)}}}),n("home-money-list",{ref:"homeList",attrs:{items:t.dataList},on:{loadingStatus:function(e){arguments[0]=e=t.$handleEvent(e),t.loadingStatus.apply(void 0,arguments)}}})],1)},o=[]},"7fec":function(t,e,i){"use strict";var n=i("1766"),a=i.n(n);a.a},"892e":function(t,e,i){"use strict";i.r(e);var n=i("90e8"),a=i("15b2");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("557b");var r=i("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"6e750b04",null,!1,n["a"],void 0);e["default"]=d.exports},"90e8":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"notice_bg"},[i("v-uni-image",{staticClass:"icon",attrs:{src:t.noticeImg}}),i("v-uni-view",{staticClass:"line"}),i("v-uni-swiper",{staticClass:"bar-swiper",attrs:{autoplay:"true","display-multiple-items":"1",vertical:"true",circular:!0,interval:"2000"}},t._l(t.items,(function(e,n){return i("v-uni-swiper-item",{key:n,staticClass:"swiper-item"},[i("v-uni-view",{staticClass:"item_box",on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.click(e.id)}}},[t._v(t._s(e.content))])],1)})),1)],1)},a=[]},9216:function(t,e,i){var n=i("6f3d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0a7f62fa",n,!0,{sourceMap:!1,shadowMode:!1})},"9a10":function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",[i("v-uni-view",{staticClass:"uni-list"},[i("v-uni-view",{staticClass:"uni-list-cell-title",on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.btn.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.数字货币))]),i("v-uni-view",{staticStyle:{display:"flex","flex-direction":"column","align-items":"center"}},[i("v-uni-view",{staticClass:"grid-item-wrap",staticStyle:{width:"100%"}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"grid-item-left"},[t._v(t._s(t.i18n.交易品种))]),i("v-uni-view",{staticClass:"grid-item-right"},[t._v(t._s(t.i18n.最新价))]),i("v-uni-view",{staticClass:"grid-item-right"},[t._v(t._s(t.i18n.涨跌幅))])],1)],1)],1),t._l(t.items,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-list-cell",staticStyle:{"flex-direction":"column","align-items":"flex-start"},attrs:{"hover-class":"uni-list-cell-hover"}},[i("v-uni-view",{staticStyle:{width:"100%"},on:{click:function(i){arguments[0]=i=t.$handleEvent(i),t.openDetailPage(e)}}},[i("v-uni-view",{staticStyle:{display:"flex"}},[i("v-uni-view",{staticClass:"grid-item-left"},[i("p",{staticClass:"text-ind-1"},[i("span",{staticClass:"text-xmd"},[t._v(t._s(e.sname))]),i("span",{staticClass:"text-gray"},[t._v("/USDT")])])]),i("v-uni-view",{staticClass:"grid-item-right",staticStyle:{color:"#333"}},[t._v(t._s(e.nowPri))]),i("v-uni-view",{staticClass:"grid-item-right",class:e.increPer<0?"text-red":"text-green"},[t._v(t._s(e.increPer)+"%")])],1)],1)],1)}))],2)],1)},a=[]},"9db6":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-swiper__warp[data-v-08a5f800]{position:relative;width:100%;box-sizing:border-box;overflow:hidden}.uni-swiper__dots-box[data-v-08a5f800]{position:absolute;bottom:%?20?%;display:flex;justify-content:center;align-items:center;box-sizing:box-sizing;width:100%}.uni-swiper__dots-item[data-v-08a5f800]{flex-shrink:0;width:%?16?%;border-radius:50%;margin-left:%?12?%;background:rgba(0,0,0,.3);transition:all .2s linear}.uni-swiper__dots-item[data-v-08a5f800]:first-child{margin:0}.uni-swiper__dots-default[data-v-08a5f800]{border-radius:50%}.uni-swiper__dots-long[data-v-08a5f800]{border-radius:%?100?%}.uni-swiper__dots-nav[data-v-08a5f800]{bottom:0;height:%?80?%;justify-content:flex-start;background:rgba(0,0,0,.2);box-sizing:box-sizing;overflow:hidden}.uni-swiper__dots-nav-item[data-v-08a5f800]{overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:%?28?%;color:#fff;box-sizing:box-sizing;margin:0 %?30?%}.uni-swiper__dots-indexes[data-v-08a5f800]{display:flex;justify-content:center;align-items:center;color:#fff;font-size:%?24?%}",""]),t.exports=e},"9f23":function(t,e,i){"use strict";var n=i("9216"),a=i.n(n);a.a},"9fd8":function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".swiper-item[data-v-21ce95fc]{display:flex;justify-content:center;align-items:center;height:100%;background:#eee;color:#fff}.swiper-item uni-image[data-v-21ce95fc]{width:100%;height:100%}.content[data-v-21ce95fc]{text-align:center;padding-top:0;padding-bottom:56px}@-webkit-keyframes scaleUp-data-v-21ce95fc{80%{-webkit-transform:scale(.8);transform:scale(.8)\n    /* 动画开始时元素的大小 */}100%{-webkit-transform:scale(1);transform:scale(1)\n    /* 动画结束时元素的大小 */}}@keyframes scaleUp-data-v-21ce95fc{80%{-webkit-transform:scale(.8);transform:scale(.8)\n    /* 动画开始时元素的大小 */}100%{-webkit-transform:scale(1);transform:scale(1)\n    /* 动画结束时元素的大小 */}}.float-button[data-v-21ce95fc]{width:40px;\n  /* 图标宽度 */height:40px;\n  /* 图标高度 */position:fixed;top:30%;right:6px;border-radius:50%;background:#eee;box-shadow:0 0 10px #999;display:-ms-flexbox;display:flex;-ms-flex-pack:center;justify-content:center;-ms-flex-align:center;align-items:center;z-index:999;-webkit-transform:scale(1);transform:scale(1);-webkit-animation:scaleUp-data-v-21ce95fc 1s linear .1s infinite normal;animation:scaleUp-data-v-21ce95fc 1s linear .1s infinite normal}.float-button uni-image[data-v-21ce95fc]{width:60%;height:60%;display:block\n  /* 块级元素 */}",""]),t.exports=e},b186:function(t,e,i){"use strict";i.r(e);var n=i("c8c5"),a=i("3a36");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("cb44");var r=i("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"34987718",null,!1,n["a"],void 0);e["default"]=d.exports},b217:function(t,e,i){t.exports=i.p+"static/img/service.b292f1e7.png"},b8c6:function(t,e,i){"use strict";i.r(e);var n=i("1ae2"),a=i("eaed");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("5fec");var r=i("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"08a5f800",null,!1,n["a"],void 0);e["default"]=d.exports},bc9c:function(t,e,i){"use strict";i("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,i("a9e3");var n={name:"UniSwiperDot",props:{info:{type:Array,default:function(){return[]}},current:{type:Number,default:0},dotsStyles:{type:Object,default:function(){return{}}},mode:{type:String,default:"default"},field:{type:String,default:""}},data:function(){return{dots:{width:8,height:8,bottom:10,color:"#fff",backgroundColor:"rgba(0, 0, 0, .3)",border:"1px rgba(0, 0, 0, .3) solid",selectedBackgroundColor:"#333",selectedBorder:"1px rgba(0, 0, 0, .9) solid"}}},watch:{dotsStyles:function(t){this.dots=Object.assign(this.dots,this.dotsStyles)},mode:function(t){"indexes"===t?(this.dots.width=20,this.dots.height=20):(this.dots.width=8,this.dots.height=8)}},created:function(){"indexes"===this.mode&&(this.dots.width=20,this.dots.height=20),this.dots=Object.assign(this.dots,this.dotsStyles)}};e.default=n},bdf2:function(t,e,i){"use strict";var n=i("f8e0"),a=i.n(n);a.a},be2e:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,'@charset "UTF-8";.uni-grid[data-v-34987718]{position:relative;display:flex;flex-direction:column}.uni-grid__flex[data-v-34987718]{display:flex;flex-direction:row}.uni-grid-item[data-v-34987718]{display:flex;position:relative;flex-direction:column;flex:1}.uni-grid-item[data-v-34987718]:before{display:block;content:" ";padding-bottom:100%}.uni-grid-item[data-v-34987718]:after{content:"";position:absolute;z-index:1;-webkit-transform-origin:center;transform-origin:center;box-sizing:border-box;top:-50%;left:-50%;right:-50%;bottom:-50%;border-color:#c8c7cc;border-style:solid;border-width:1px;-webkit-transform:scale(.5);transform:scale(.5);border-top-width:0;border-left-width:0}.uni-grid-item__content[data-v-34987718]{position:absolute;left:0;top:0;width:100%;height:100%;display:flex;flex-direction:column;justify-content:center;align-items:center}.uni-grid-item-text[data-v-34987718]{font-size:%?32?%;margin-top:%?12?%}.uni-grid-item-money[data-v-34987718]{font-size:%?38?%}.colorGreen[data-v-34987718]{color:#3c3}.uni-grid-item-hover[data-v-34987718]{background-color:#fefefe}.uni-grid-item-image[data-v-34987718]{width:%?80?%;height:%?80?%}.uni-grid .uni-grid__flex:first-child .uni-grid-item[data-v-34987718]:after{border-top-width:1px}.uni-grid .uni-grid__flex .uni-grid-item[data-v-34987718]:first-child:after{border-left-width:1px}.uni-grid.uni-grid-no-out-border .uni-grid__flex:first-child .uni-grid-item[data-v-34987718]:after{border-top-width:0}.uni-grid.uni-grid-no-out-border .uni-grid__flex:last-child .uni-grid-item[data-v-34987718]:after{border-bottom-width:0}.uni-grid.uni-grid-no-out-border .uni-grid__flex .uni-grid-item[data-v-34987718]:first-child:after{border-left-width:0}.uni-grid.uni-grid-no-out-border .uni-grid__flex .uni-grid-item[data-v-34987718]:last-child:after{border-right-width:0}.uni-grid.uni-grid-no-border .uni-grid-item[data-v-34987718]:after{border-width:0}.uni-grid.uni-grid-no-border .uni-grid__flex:first-child .uni-grid-item[data-v-34987718]:after{border-top-width:0}.uni-grid.uni-grid-no-border .uni-grid__flex .uni-grid-item[data-v-34987718]:first-child:after{border-left-width:0}.uni-grid-item-oblong.uni-grid-item[data-v-34987718]:before{padding-bottom:60%}.uni-grid-item-oblong .uni-grid-item__content[data-v-34987718]{flex-direction:row}.uni-grid-item-oblong .uni-grid-item-image[data-v-34987718]{width:%?52?%;height:%?52?%}.uni-grid-item-oblong .uni-grid-item-text[data-v-34987718]{margin-top:0;margin-left:%?12?%}\n\n/* 自定义样式 */.uni-grid-item-text[data-v-34987718]{font-size:13px;color:#444}.uni-grid-item-hover[data-v-34987718]{background-color:#fff}.uni-grid[data-v-34987718]{margin-top:5px}.uni-grid-item-image[data-v-34987718]{width:30px;height:30px}.uni-grid-item[data-v-34987718]:before{display:block;content:" ";padding-bottom:80%}',""]),t.exports=e},c0cc:function(t,e,i){var n=i("24fb");e=n(!1),e.push([t.i,".uni-load-more[data-v-e5a75d66]{display:flex;flex-direction:row;height:%?80?%;align-items:center;justify-content:center}.uni-load-more__text[data-v-e5a75d66]{font-size:%?28?%;color:#999}.uni-load-more__img[data-v-e5a75d66]{height:24px;width:24px;margin-right:10px}.uni-load-more__img>uni-view[data-v-e5a75d66]{position:absolute}.uni-load-more__img>uni-view uni-view[data-v-e5a75d66]{width:6px;height:2px;border-top-left-radius:1px;border-bottom-left-radius:1px;background:#999;position:absolute;opacity:.2;-webkit-transform-origin:50%;transform-origin:50%;-webkit-animation:load-data-v-e5a75d66 1.56s ease infinite;animation:load-data-v-e5a75d66 1.56s ease infinite}.uni-load-more__img>uni-view uni-view[data-v-e5a75d66]:nth-child(1){-webkit-transform:rotate(90deg);transform:rotate(90deg);top:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-e5a75d66]:nth-child(2){-webkit-transform:rotate(180deg);transform:rotate(180deg);top:11px;right:0}.uni-load-more__img>uni-view uni-view[data-v-e5a75d66]:nth-child(3){-webkit-transform:rotate(270deg);transform:rotate(270deg);bottom:2px;left:9px}.uni-load-more__img>uni-view uni-view[data-v-e5a75d66]:nth-child(4){top:11px;left:0}.load1[data-v-e5a75d66],\n.load2[data-v-e5a75d66],\n.load3[data-v-e5a75d66]{height:24px;width:24px}.load2[data-v-e5a75d66]{-webkit-transform:rotate(30deg);transform:rotate(30deg)}.load3[data-v-e5a75d66]{-webkit-transform:rotate(60deg);transform:rotate(60deg)}.load1 uni-view[data-v-e5a75d66]:nth-child(1){-webkit-animation-delay:0s;animation-delay:0s}.load2 uni-view[data-v-e5a75d66]:nth-child(1){-webkit-animation-delay:.13s;animation-delay:.13s}.load3 uni-view[data-v-e5a75d66]:nth-child(1){-webkit-animation-delay:.26s;animation-delay:.26s}.load1 uni-view[data-v-e5a75d66]:nth-child(2){-webkit-animation-delay:.39s;animation-delay:.39s}.load2 uni-view[data-v-e5a75d66]:nth-child(2){-webkit-animation-delay:.52s;animation-delay:.52s}.load3 uni-view[data-v-e5a75d66]:nth-child(2){-webkit-animation-delay:.65s;animation-delay:.65s}.load1 uni-view[data-v-e5a75d66]:nth-child(3){-webkit-animation-delay:.78s;animation-delay:.78s}.load2 uni-view[data-v-e5a75d66]:nth-child(3){-webkit-animation-delay:.91s;animation-delay:.91s}.load3 uni-view[data-v-e5a75d66]:nth-child(3){-webkit-animation-delay:1.04s;animation-delay:1.04s}.load1 uni-view[data-v-e5a75d66]:nth-child(4){-webkit-animation-delay:1.17s;animation-delay:1.17s}.load2 uni-view[data-v-e5a75d66]:nth-child(4){-webkit-animation-delay:1.3s;animation-delay:1.3s}.load3 uni-view[data-v-e5a75d66]:nth-child(4){-webkit-animation-delay:1.43s;animation-delay:1.43s}@-webkit-keyframes load-data-v-e5a75d66{0%{opacity:1}100%{opacity:.2}}",""]),t.exports=e},c1cb:function(t,e,i){"use strict";i.r(e);var n=i("9a10"),a=i("7263");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("9f23");var r=i("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"096051ce",null,!1,n["a"],void 0);e["default"]=d.exports},c270:function(t,e,i){"use strict";i.r(e);var n=i("55c98"),a=i("f34e");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("bdf2");var r=i("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"e6637182",null,!1,n["a"],void 0);e["default"]=d.exports},c8c5:function(t,e,i){"use strict";i.d(e,"b",(function(){return n})),i.d(e,"c",(function(){return a})),i.d(e,"a",(function(){}));var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"uni-grid",class:{"uni-grid-no-border":!t.showBorder,"uni-grid-no-out-border":t.showBorder&&!t.showOutBorder}},[i("v-uni-view",{staticClass:"uni-grid__flex"},t._l(t.items,(function(e,n){return i("v-uni-view",{key:n,staticClass:"uni-grid-item",class:[n==t.columnNum?"uni-grid-item-last":"","uni-grid-item-"+t.type],style:{visibility:e.seize?"hidden":"inherit"},attrs:{"hover-start-time":20,"hover-stay-time":70,"hover-class":"uni-grid-item-hover"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.onClick(t.i,n)}}},[i("v-uni-view",{staticClass:"uni-grid-item__content"},[i("v-uni-text",{staticClass:"uni-grid-item-text"},[t._v(t._s(e.sname))]),i("h2",{staticClass:"uni-grid-item-money",class:e.increPer>0?"text-green":"text-red"},[t._v(t._s(e.nowPri))]),i("v-uni-text",{staticClass:"uni-grid-item-text",class:e.increPer>0?"text-green":"text-red"},[t._v(t._s(e.increPer)+"%")])],1)],1)})),1)],1)},a=[]},cb44:function(t,e,i){"use strict";var n=i("1498"),a=i.n(n);a.a},e279:function(t,e,i){var n=i("c0cc");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("1e5dcc62",n,!0,{sourceMap:!1,shadowMode:!1})},ead1:function(t,e,i){"use strict";i.r(e);var n=i("343f"),a=i("f1bf");for(var o in a)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return a[t]}))}(o);i("0eec");var r=i("f0c5"),d=Object(r["a"])(a["default"],n["b"],n["c"],!1,null,"e5a75d66",null,!1,n["a"],void 0);e["default"]=d.exports},eaed:function(t,e,i){"use strict";i.r(e);var n=i("bc9c"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},f1bf:function(t,e,i){"use strict";i.r(e);var n=i("6208"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},f34e:function(t,e,i){"use strict";i.r(e);var n=i("3816"),a=i.n(n);for(var o in n)["default"].indexOf(o)<0&&function(t){i.d(e,t,(function(){return n[t]}))}(o);e["default"]=a.a},f8e0:function(t,e,i){var n=i("059d");n.__esModule&&(n=n.default),"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var a=i("4f06").default;a("0a017776",n,!0,{sourceMap:!1,shadowMode:!1})}}]);