(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-trade-account-recharge"],{1638:function(t,e,a){var i=a("24fb");e=i(!1),e.push([t.i,".content[data-v-7a698d1a]{text-align:center;padding-top:0;padding-bottom:56px}.uni-account-card[data-v-7a698d1a]{\n\t/* height: 200px; */margin:14px;border-radius:6px;background-color:#fafafa;border:1px solid #eed9d9}.uni-account-title[data-v-7a698d1a]{width:100%;display:flex;justify-content:space-between;align-items:center;margin:0 12px;font-size:16px}.rgcz[data-v-7a698d1a]{color:#0080ff;font-size:14px}.grid-item-wrap[data-v-7a698d1a]{margin-top:15px;\n\t/* border-color: #E5E5E5;\n\tborder-width: 1px;\n\tborder-style: solid; */width:100%;display:flex;flex-wrap:wrap;justify-content:space-around}.grid-item-left[data-v-7a698d1a], .grid-item-right[data-v-7a698d1a]{margin-top:0;\n\t/* border-width: 1px;\n\tborder-bottom-width: 0;\n\tborder-right-width: 0; */\n\t/* border-style: solid; */border:1px solid #ccc;padding:0 16px;\n\t/* border-color: #E5E5E5; */border-radius:6px;font-size:14px\n\t/* width: 50%; */}.table-from[data-v-7a698d1a]{display:flex;flex-direction:column;align-items:flex-start;width:100%;margin-top:8px;font-size:14px;color:#666;\n\t /* background-color: white; */padding:8px 10px;border-radius:8px;margin-left:5px}.table-input[data-v-7a698d1a]{margin-left:10px;font-size:14px;flex:1}.uni-input[data-v-7a698d1a]{margin-left:10px;text-align:left}.activite[data-v-7a698d1a]{border-color:#0080ff}.next-btn[data-v-7a698d1a]{width:70%;margin:auto;color:#fff;font-size:13px;background-color:#0080ff;border-width:0;border-radius:0}\n/* .grid-item-left {\n\tborder-left-width: 0;\n}\n.grid-item-wrap:nth-child(-n+2){\n\tborder-top-width: 0;\n} */",""]),t.exports=e},2919:function(t,e,a){var i=a("1638");i.__esModule&&(i=i.default),"string"===typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);var n=a("4f06").default;n("1f825de8",i,!0,{sourceMap:!1,shadowMode:!1})},"340f":function(t,e,a){"use strict";a.r(e);var i=a("e0be"),n=a("4412");for(var o in n)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return n[t]}))}(o);a("867a");var d=a("f0c5"),r=Object(d["a"])(n["default"],i["b"],i["c"],!1,null,"7a698d1a",null,!1,i["a"],void 0);e["default"]=r.exports},4412:function(t,e,a){"use strict";a.r(e);var i=a("fe5f"),n=a.n(i);for(var o in i)["default"].indexOf(o)<0&&function(t){a.d(e,t,(function(){return i[t]}))}(o);e["default"]=n.a},"867a":function(t,e,a){"use strict";var i=a("2919"),n=a.n(i);n.a},c4e0:function(t,e){t.exports={titleForType:{10:"新鲜事",11:"打听",12:"吐槽",13:"公告",20:"吃喝玩乐",21:"求职招聘",22:"商家信息",23:"相亲交友",24:"房屋信息",25:"打车出行",26:"二手交易",27:"便民信息"},homeAvaliableItemType:["10","11","12","13","14","15"],itemType:[[[{id:"10",text:"新鲜事"},{id:"11",text:"打听"}],[{id:"12",text:"吐槽"},{id:"13",text:"公告"}]],[[{id:"21",text:"求职招聘"},{id:"22",text:"商家信息"}],[{id:"23",text:"相亲交友"},{id:"27",text:"便民信息"}]]],itemStatus:{0:"待审核",1:"已通过",2:"未通过"},homeTopItems:[{text:"热门",image:"heme-top1.png",type:1},{text:"打听",image:"heme-top2.png",type:11},{text:"吐槽",image:"heme-top3.png",type:12},{text:"公告",image:"heme-top4.png",type:13},{text:"商家",image:"home-top-sj@2x.png",type:14,invaild:1},{text:"相亲交友",image:"home-top-jy@2x.png",type:15,invaild:1},{text:"求职招聘",image:"home-top-qz@2x.png",type:16,invaild:1},{text:"便民信息",image:"home-top-more@2x.png",type:17}],homeTopListItems:[{text:"BTC/USDT",money:"59250.0100",rate:"+4.9%",image:"heme-top1.png",type:1},{text:"ETH/USDT",money:"59250.0100",rate:"+4.9%",image:"heme-top2.png",type:11},{text:"HBC/USDT",rate:"+4.9%",money:"59250.0100",image:"heme-top3.png",type:12}],postSubType:function(t,e){var a="";switch(t){case"21":a=1==e?"招聘":"求职";break;case"23":a=1==e?"我是女生":"我是男生";break;case"24":a=1==e?"我要找房":"我是房主";break;case"25":a=1==e?"人找车":"车找人";break;default:break}return a},itemStatusArr:{0:"未认证",1:"审核中",2:"通过",3:"不通过"}}},e0be:function(t,e,a){"use strict";a.d(e,"b",(function(){return i})),a.d(e,"c",(function(){return n})),a.d(e,"a",(function(){}));var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-uni-view",{staticClass:"content"},[a("v-uni-view",{staticClass:"uni-account-card"},[a("v-uni-view",{staticStyle:{padding:"14px","padding-top":"25px",display:"flex","flex-direction":"column","align-items":"center"}},[a("h3",{staticClass:"uni-account-title"},[t._v(t._s(t.i18n.收款账户)),a("v-uni-text",{staticClass:"rgcz"},[t._v(t._s(t.i18n.人工充值))])],1),a("v-uni-view",{staticClass:"grid-item-wrap flex",staticStyle:{width:"100%"}},t._l(t.itemType,(function(e,i){return a("v-uni-view",{key:i,staticClass:"grid-item-left",class:t.navIndex==i?"activite":"",on:{click:function(a){arguments[0]=a=t.$handleEvent(a),t.publish(e,i)}}},[t._v(t._s(e.type))])})),1),a("v-uni-view",{staticClass:"table-from"},[a("v-uni-view",{staticClass:"flex",staticStyle:{width:"100%",margin:"10px 0"}},[t._v(t._s(t.i18n.账户名称)),a("v-uni-text",{staticClass:"table-input"},[a("v-uni-input",{staticClass:"uni-input",attrs:{disabled:!0},model:{value:t.from.accountName,callback:function(e){t.$set(t.from,"accountName",e)},expression:"from.accountName"}})],1)],1),a("v-uni-view",{staticClass:"flex",staticStyle:{width:"100%"}},[t._v(t._s(t.i18n.账户地址)),a("v-uni-text",{staticClass:"table-input"},[a("v-uni-input",{staticClass:"uni-input",attrs:{disabled:!0},model:{value:t.from.address,callback:function(e){t.$set(t.from,"address",e)},expression:"from.address"}})],1)],1),a("v-uni-view",{staticStyle:{display:"flex","align-items":"center","margin-top":"18px"}},[a("v-uni-view",{staticStyle:{"margin-left":"5px",color:"#f66","text-align":"left"}},[t._v(t._s(t.i18n.注意))])],1)],1)],1)],1),a("v-uni-view",{staticClass:"flex",staticStyle:{padding:"20px"}},[a("v-uni-image",{staticStyle:{width:"20px",height:"20px"},attrs:{src:t.isCheck?"../../static/images/trade/checked.png":"../../static/images/trade/check.png",mode:""},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.oncheck.apply(void 0,arguments)}}}),a("v-uni-text",[t._v(t._s(t.i18n.转账完成))])],1),a("v-uni-view",{staticStyle:{padding:"20px"}},[a("v-uni-button",{staticStyle:{"margin-top":"60px","background-color":"#0080ff",height:"45px"},attrs:{type:"primary"},on:{click:function(e){arguments[0]=e=t.$handleEvent(e),t.next.apply(void 0,arguments)}}},[t._v(t._s(t.i18n.下一步))])],1)],1)},n=[]},fe5f:function(t,e,a){"use strict";a("7a82"),Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0,a("e9c4");a("c4e0").itemType;var i={components:{},data:function(){return{navIndex:"0",isCheck:!1,itemType:[{type:"USDT",accountName:"USDT（TRC-20）",address:"TJDduy6Mo8J6wVkb9c3v55js5hMva65e91"},{type:"USDT",accountName:"USDT（ERC-20）",address:"0x695c7317a67d7dc7ac2df08f17edf28b22545c11"},{type:"BTC",accountName:"BTC",address:"32zTcPmmv4EunXNhmQz27vWb4LzNTx4aaV"},{type:"ETH",accountName:"ETH（ERC-20）",address:"0x695c7317a67d7dc7ac2df08f17edf28b22545c11"}],from:{accountName:"USDT（TRC-20）",address:"TJDduy6Mo8J6wVkb9c3v55js5hMva65e91",type:"USDT"}}},computed:{i18n:function(){return this.$t("wallet")}},onLoad:function(){},methods:{publish:function(t,e){console.log("item: ",t),this.from=t,this.navIndex=e},oncheck:function(){this.isCheck=!this.isCheck,console.log("==",this.isCheck)},next:function(){var t=this.from;this.isCheck?uni.navigateTo({url:"/pages/trade/account-recharge2?obj="+encodeURIComponent(JSON.stringify(t))}):uni.showToast({title:"请勾选提交打款信息",icon:"none",duration:2e3}),console.log("===")}}};e.default=i}}]);