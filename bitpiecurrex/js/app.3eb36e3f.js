(function(t){function e(e){for(var n,c,i=e[0],r=e[1],l=e[2],d=0,f=[];d<i.length;d++)c=i[d],a[c]&&f.push(a[c][0]),a[c]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(f.length)f.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,i=1;i<s.length;i++){var r=s[i];0!==a[r]&&(n=!1)}n&&(o.splice(e--,1),t=c(c.s=s[0]))}return t}var n={},a={app:0},o=[];function c(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,c),s.l=!0,s.exports}c.m=t,c.c=n,c.d=function(t,e,s){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(c.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)c.d(s,n,function(e){return t[e]}.bind(null,n));return s},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/bitpiecurrex/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],r=i.push.bind(i);i.push=e,i=i.slice();for(var l=0;l<i.length;l++)e(i[l]);var u=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("c21b"),a=s.n(n);a.a},"0425":function(t,e,s){"use strict";var n=s("2344"),a=s.n(n);a.a},"184e":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"exchange-body"},[s("div",{staticClass:"btn-row"},[s("div",{staticClass:"title-btn",class:{on:0===t.titleBtn},on:{click:function(e){t.titleClick(0)}}},[t._v("买入")]),s("div",{staticClass:"title-btn",class:{on:1===t.titleBtn},on:{click:function(e){t.titleClick(1)}}},[t._v("卖出")])]),0===t.titleBtn?s("div",[s("div",{staticClass:"exchange-box"},[s("div",{staticClass:"exchange-title-row"},[s("span",{staticClass:"lt exchange-title"},[t._v("收款地址")]),s("span",{staticClass:"gt"},[t._v(t._s(t.account.name))])]),s("div",{staticClass:"exchange-title"},[t._v("兑换币种")]),s("el-select",{staticClass:"input",attrs:{placeholder:"请选择"},on:{change:t.changeToken},model:{value:t.tokenname,callback:function(e){t.tokenname=e},expression:"tokenname"}},t._l(t.tokenarr,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),2===t.addressState?s("div",{staticClass:"exchange-box"},[s("div",{staticClass:"address-intro-font"},[t._v("发送BTC到下面地址即可兑换出对应数量的EBTC")]),s("qrcode-vue",{staticClass:"qrcode",attrs:{value:t.address,size:150,level:"H"}}),s("div",{staticClass:"address-font"},[s("span",{attrs:{id:"address"}},[t._v(t._s(t.address))]),s("span",{staticClass:"copy-btn",on:{click:function(e){t.copystr(t.address)}}},[t._v("复制")])])],1):t._e(),1===t.addressState?s("div",{staticClass:"exchange-box"},[s("div",{staticClass:"address-waiting"},[t._v("请求中")])]):t._e(),0===t.addressState?s("div",{staticClass:"exchange-box",on:{click:function(e){t.getaddress()}}},[s("div",{staticClass:"address-waiting"},[t._v("获取地址")])]):t._e(),s("div",{staticClass:"exchange-box"},[s("div",{staticClass:"order-header"},[t._v("历史订单")]),s("div",{staticClass:"order-item buy"},t._l(t.coinOrder,function(e){return s("el-row",{staticClass:"order-item-rol"},[s("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.user))]),s("el-col",{staticClass:"order-status finish",attrs:{span:12}},[t._v("已完成")]),s("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v("交易金额:")]),s("el-col",{staticClass:"order-price",attrs:{span:12}},[t._v("+"+t._s(e.amount))]),s("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v("交易id:")]),s("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.extern_tx))])],1)}))])]):t._e(),1===t.titleBtn?s("div",[s("div",{staticClass:"exchange-box"},[s("div",{staticClass:"exchange-title-row"},[s("span",{staticClass:"lt exchange-title"},[t._v("付款账户")]),s("span",{staticClass:"gt"},[t._v(t._s(t.account.name))])]),s("div",{staticClass:"exchange-title"},[t._v("兑换币种")]),s("el-select",{staticClass:"input",attrs:{placeholder:"请选择"},on:{change:function(e){t.coinChange(t.coinname)}},model:{value:t.coinname,callback:function(e){t.coinname=e},expression:"coinname"}},t._l(t.coinarr,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),s("div",{staticClass:"exchange-title"},[t._v("兑换数额")]),s("el-input",{staticClass:"input",attrs:{type:"number"},model:{value:t.coinnum,callback:function(e){t.coinnum=e},expression:"coinnum"}}),s("div",{staticClass:"exchange-title"},[t._v("收款地址")]),s("el-input",{staticClass:"input",model:{value:t.coinaddress,callback:function(e){t.coinaddress=e},expression:"coinaddress"}}),s("div",{staticClass:"money-row exchange-title",on:{click:function(e){t.sellAll(t.currentEOS)}}},[t._v("\n        余额："+t._s(t.currentEOS)+"\n      ")]),s("el-button",{staticClass:"ex-button",on:{click:function(e){t.doAction()}}},[t._v("提交")])],1),s("div",{staticClass:"order-box"},[s("div",{staticClass:"order-header"},[s("div",{staticClass:"order-button",class:{on:0===t.orderBtn},on:{click:function(e){t.orderClick(0)}}},[t._v("处理中")]),s("div",{staticClass:"order-button",class:{on:1===t.orderBtn},on:{click:function(e){t.orderClick(1)}}},[t._v("已完成")])]),0===t.orderBtn?s("div",{staticClass:"order-item"},t._l(t.tokenRun,function(e){return s("el-row",{staticClass:"order-item-rol"},[s("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.from_user))]),s("el-col",{staticClass:"order-status run",attrs:{span:12}},[t._v("进行中")]),s("el-col",{staticClass:"order-title",attrs:{span:12}},[t._v("兑换金额")]),s("el-col",{staticClass:"order-price",attrs:{span:12}},[t._v(t._s(e.amount))]),s("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v("收款地址:")]),s("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.to_address))])],1)})):t._e(),1===t.orderBtn?s("div",{staticClass:"order-item"},t._l(t.tokenFinish,function(e){return s("el-row",{staticClass:"order-item-rol"},[s("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.from_user))]),s("el-col",{staticClass:"order-status finish",attrs:{span:12}},[t._v("已完成")]),s("el-col",{staticClass:"order-title",attrs:{span:12}},[t._v("兑换金额")]),s("el-col",{staticClass:"order-price",attrs:{span:12}},[t._v(t._s(e.amount))]),s("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v("收款地址:")]),s("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.to_address))]),s("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v("交易id:")]),s("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.extern_tx))])],1)})):t._e()])]):t._e()])},a=[],o=(s("28a5"),s("c5f6"),s("87f3"),s("7f7f"),s("7514"),s("cadf"),s("551c"),s("097d"),s("d3b7")),c=s.n(o),i=(s("42a5"),s("c290")),r=c()({httpEndpoint:"".concat(i["a"].protocol,"://").concat(i["a"].host,":").concat(i["a"].port),chainId:i["a"].chainId}),l=(location.href.indexOf("dev"),{diceAccount:"bitpiecurrex",diceLog:""}),u=s("98e6"),d=s.n(u),f=s("d7b0"),h={mounted:function(){var t=this;r.getInfo({}).then(function(t){console.log(t)}),this.$i18n.locale=this.$lan(),this.language=this.$lan(),this.getCoinOrder(),this.$nextTick(function(){if("undefined"!==typeof scatter){if(scatter.identity){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});t.$store.commit("UPDATE_ACCOUNT",e),t.searchAddress()}t.$store.state.account&&t.$store.state.account.name||t.login()}else document.addEventListener("scatterLoaded",function(){if(scatter.identity){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});t.$store.commit("UPDATE_ACCOUNT",e),t.searchAddress()}t.$store.state.account&&t.$store.state.account.name||t.login()})})},data:function(){return{address:null,num:0,titleBtn:0,coinnum:0,orderBtn:0,addressState:0,coinaddress:"",coinname:"BTC",coinarr:[{value:"BTC",label:"BTC"}],tokenname:"EBTC",tokenarr:[{value:"EBTC",label:"EBTC"}],token:{EBTC:0,EETH:0,EUSD:0,EOS:0},currentEOS:0,coinOrder:[],tokenRun:[],tokenFinish:[]}},methods:{getClientSeed:function(){if(this.customSeed)return d()("sha1").update(this.account.name+this.customSeed).digest("hex");var t=Math.floor(Math.random()*Math.floor(Number.MAX_SAFE_INTEGER));return d()("sha1").update(this.account.name+Date.now()+t).digest("hex")},login:function(){var t=this;scatter&&scatter.getIdentity({accounts:[i["a"]]}).then(function(){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&(t.$store.commit("UPDATE_ACCOUNT",e),t.$message({showClose:!0,message:t.$t("login_success"),type:"success",duration:1500}),t.getCoinOrder(),t.getToken(),t.searchAddress())}).catch(function(e){t.$message({showClose:!0,message:e.message,type:"warning",duration:1500})})},getaddressresult:function(){var t=this;r.getTableRows({scope:this.account.name,code:l.diceAccount,table:"accounts",json:"true"}).then(function(e){console.log("accounts"),e&&e.rows[0]&&e.rows[0].address?(t.address=e.rows[0].address,t.addressState=2):(console.log("go"),setTimeout(function(){t.getaddressresult()},3e3))}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})},getaddress:function(){var t=this,e=scatter.eos(i["a"],c.a,{});this.addressState=1,e.transaction({actions:[{account:l.diceAccount,name:"newaddress",authorization:[{actor:this.account.name,permission:"active"}],data:{user:this.account.name,symbol:"EBTC"}}]}).then(function(e){console.log(e),t.addressState=1,t.getaddressresult()}).catch(function(e){t.addressState=0,console.log(e);var s="string"===typeof e?JSON.parse(e):e;(s.error.details[0].message="assertion failure with message: already has exchange address")&&t.getaddressresult()})},getToken:function(){var t=this;this.account.name&&r.getCurrencyBalance({json:!0,code:"bitpietokens",account:this.account.name}).then(function(e){if(console.log(e),e&&0!=e.length){for(var s=0;s<e.length;s++){var n=e[s].split(" ");"EBTC"===n[1]?t.token.EBTC=Number(n[0]).toFixed(6):"EETH"===n[1]?t.token.EETH=Number(n[0]).toFixed(4):"EUSD"===n[1]&&(t.token.EUSD=Number(n[0]).toFixed(2))}console.log(t.token),"BTC"===t.coinname?t.currentEOS=t.token.EBTC:"ETH"===t.coinname?t.currentEOS=t.token.EETH:"USD"===t.coinname&&(t.currentEOS=t.token.EUSD)}})},copystr:function(t){var e=document.createRange();e.selectNode(document.getElementById("address"));var s=window.getSelection();s.rangeCount>0&&s.removeAllRanges(),s.addRange(e),document.execCommand("copy"),this.$message({showClose:!0,message:this.$t("copy_success"),type:"success",duration:1500})},copyaddress:function(t){console.log(t);var e=document.createRange();e.selectNode(t.target);var s=window.getSelection();s.rangeCount>0&&s.removeAllRanges(),s.addRange(e),document.execCommand("copy"),this.$message({showClose:!0,message:this.$t("copy_success"),type:"success",duration:1500})},titleClick:function(t){this.getToken(),this.titleBtn=t,0===t&&(this.searchAddress(),this.account.name&&this.getCoinOrder()),1===t&&(0===this.orderBtn?this.getTokenRun():1===this.orderBtn&&this.getTokenFinish())},changeToken:function(){this.address=null,this.addressState=1,this.searchAddress()},doAction:function(){var t=this,e=this.coinaddress,s=this.coinnum,n=this.coinname,a=WAValidator.validate(e,"bitcoin");if(!a||""==e)return this.$notify.error("btc地址不合法"),!1;if(s>this.currentEOS)this.$message({showClose:!0,message:"您的余额不足，请重置",type:"success",duration:1500});else if(s<.001)this.$message({showClose:!0,message:"金额不能小于0.001EBTC",type:"success",duration:1500});else if(e){s=Number(s).toFixed(8);var o=scatter.eos(i["a"],c.a,{});o.transaction({actions:[{account:"bitpietokens",name:"transfer",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{from:this.account.name,to:l.diceAccount,quantity:s+" E"+n,memo:e}}]}).then(function(e){t.getToken(),t.getTokenRun(),t.$message({showClose:!0,message:"发币成功，稍后会将BTC转入您的收款地址",type:"success",duration:3500})}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}else this.$message({showClose:!0,message:"收币地址不能为空",type:"success",duration:1500})},coinChange:function(){this.getToken()},sellAll:function(t){this.coinnum=parseFloat(t)},getCoinOrder:function(){var t=this;r.getTableRows({scope:l.diceAccount,code:l.diceAccount,table:"buyorders",key_type:"i64",index_position:"2",lower_bound:this.account.name,json:"true"}).then(function(e){if(console.log(e),!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var s=[],n=0;n<e.rows.length;n++)e.rows[n].user==t.account.name&&s.push(e.rows[n]);t.coinOrder=s}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})},getTokenRun:function(){var t=this;r.getTableRows({scope:l.diceAccount,code:l.diceAccount,table:"sellorders",json:"true",key_type:"i64",index_position:"2",lower_bound:this.account.name}).then(function(e){if(console.log(e),!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var s=[],n=0;n<e.rows.length;n++)e.rows[n].from_user==t.account.name&&s.push(e.rows[n]);t.tokenRun=s}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})},getTokenFinish:function(){var t=this;r.getTableRows({scope:l.diceAccount,code:l.diceAccount,table:"soldorders",json:"true",key_type:"i64",index_position:"2",lower_bound:this.account.name}).then(function(e){if(console.log(e),!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var s=[],n=0;n<e.rows.length;n++)e.rows[n].from_user==t.account.name&&s.push(e.rows[n]);t.tokenFinish=s}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})},orderClick:function(t){this.orderBtn=t,0===t?this.getTokenRun():1===t&&this.getTokenFinish()},addressTable:function(){var t=this;r.getTableRows({scope:l.diceAccount,code:l.diceAccount,table:"newaddresses",json:"true",key_type:"i64",index_position:"2",lower_bound:this.account.name,limit:1}).then(function(e){e&&e.rows[0]&&e.rows[0].user?(t.addressState=1,t.getaddressresult()):t.addressState=0}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})},searchAddress:function(){var t=this;r.getTableRows({scope:this.account.name,code:l.diceAccount,table:"accounts",json:"true"}).then(function(e){console.log(e);var s=!0;if(e&&e.rows[0]&&e.rows[0].address)for(var n=0;n<e.rows.length;n++)e.rows[n].symbol==t.tokenname&&(t.address=e.rows[n].address,t.addressState=2,s=!1);s&&t.addressTable()}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}},watch:{account:function(){this.getCoinOrder()}},computed:{account:function(){return this.$store.state.account}},components:{QrcodeVue:f["a"]}},g=h,m=(s("0425"),s("2877")),v=Object(m["a"])(g,n,a,!1,null,"7e86cd0a",null);v.options.__file="body.vue";e["default"]=v.exports},2:function(t,e){},2344:function(t,e,s){},3:function(t,e){},"38c8":function(t,e,s){},4:function(t,e){},"42a5":function(t,e,s){"use strict";s("cadf"),s("551c"),s("097d");var n=s("2b0e");e["a"]=new n["default"]},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"app"}},[s("dice-header"),s("dice-body")],1)},o=[],c=(new Promise(function(t){document.addEventListener("scatterLoaded",t)}),{mounted:function(){},components:{diceHeader:s("71c2").default,diceBody:s("184e").default}}),i=c,r=(s("034f"),s("2877")),l=Object(r["a"])(i,a,o,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,d=function(t,e){t.prototype.$lan=function(){return"zh-cn"===(navigator.language||navigator.browserLanguage).toLowerCase()?"cn":"en"}},f=s("5c96"),h=s.n(f),g=(s("7f7f"),s("6b54"),s("2f62"));n["default"].use(g["a"]);var m=new g["a"].Store({state:{account:{},lang:"cn"},mutations:{UPDATE_ACCOUNT:function(t,e){t.account=e,t.account.name=e.name.toString()}}}),v=s("ecee"),p=s("c074"),_=s("7a55"),C=s("42b9"),b=s("a925"),w={login:"LOGIN",logout:"LOGOUT",login_success:"Welcome Back",copy_success:"复制成功"},y=w,k={login:" 登陆 ",logout:" 登出 ",login_success:"登入成功",copy_success:"复制成功"},S=k,T={en:y,cn:S};n["default"].use(b["a"]);var x=new b["a"]({locale:"en",fallbackLocale:"en",messages:T}),$=x,O=s("4eb5"),E=s.n(O);s("f5df"),s("450d"),s("a7cc"),s("915d"),s("0fb7"),s("46a1"),s("e05f"),s("0fae"),s("38c8");v["library"].add(p["a"],C["a"]),n["default"].use(E.a),n["default"].use(d),n["default"].use(h.a),n["default"].config.productionTip=!1,n["default"].component("font-awesome-icon",_["FontAwesomeIcon"]),new n["default"]({store:m,i18n:$,render:function(t){return t(u)}}).$mount("#app")},"71c2":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar-fixed"},[s("div",{staticClass:"bx f"},[s("h1",["cn"==t.lang?s("img",{attrs:{src:""}}):t._e(),"en"==t.lang?s("img",{staticStyle:{height:"30px"},attrs:{src:""}}):t._e()]),s("ul",{staticClass:"f nav hidden-xs-only"},[s("li",["en"==t.language?s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[s("img",{staticClass:"lan-img",attrs:{src:""}})]):s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[s("img",{staticClass:"lan-img",attrs:{src:""}})])]),s("li",[t.account.name?s("div",{staticClass:"account-cell",attrs:{href:"JavaScript:;"}},[s("span",[t._v(t._s(t.account.name))]),s("font-awesome-icon",{staticClass:"icon-logout",attrs:{icon:"sign-out-alt"},on:{click:t.logout}})],1):s("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])]),s("div",{staticClass:"mobile-nav hidden-sm-and-up"},[t.account.name?s("span",{staticClass:"login-name"},[t._v(t._s(t.account.name))]):s("span",{staticClass:"login-name",on:{click:t.login}},[t._v(t._s(t.loginLan))]),s("div",{staticClass:"three col"},[s("div",{class:t.navbar?"hamburger is-active":"hamburger",on:{click:function(e){return e.stopPropagation(),t.menuClick(e)}}},[s("span",{staticClass:"line"}),s("span",{staticClass:"line"}),s("span",{staticClass:"line"})])])])])]),s("transition",{attrs:{name:"fade"}},[t.navbar?s("div",{staticClass:"meun-mobile hidden-sm-and-up"},[s("ul",[s("li",["en"==t.language?s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[t._v("中文")]):s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[t._v("English")])]),s("li",[t.account.name?s("a",{attrs:{href:"JavaScript:;"},on:{click:t.logout}},[t._v(t._s(t.logoutLan))]):s("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])])]):t._e()])],1)},a=[],o=(s("7514"),s("cadf"),s("551c"),s("097d"),s("c290")),c=s("42a5"),i={methods:{changeLan:function(t){this.navbar=!1,this.$i18n.locale=t,this.language=t,this.$store.state.lang=t},menuClick:function(){this.navbar=!this.navbar},login:function(){var t=this;this.navbar=!1,scatter.getIdentity({accounts:[o["a"]]}).then(function(){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&t.$store.commit("UPDATE_ACCOUNT",e)}).catch(function(e){t.$message({showClose:!0,message:e.message,type:"warning",duration:1500})})},logout:function(){var t=this;this.navbar=!1,scatter.forgetIdentity().then(function(){t.$message({showClose:!0,message:t.$t("logout_success"),type:"success",duration:1500}),t.$store.commit("UPDATE_ACCOUNT",{})})},showAbout:function(){this.navbar=!1,c["a"].$emit("SHOW_ABOUT")},showSocial:function(){this.navbar=!1,c["a"].$emit("SHOW_SOCIAL")},showReferrals:function(){this.navbar=!1,c["a"].$emit("SHOW_REFERRALS")},showCustomSeed:function(){this.navbar=!1,c["a"].$emit("SHOW_CUSTOMSEED")}},data:function(){return{navbar:!1,language:"cn"}},computed:{account:function(){return this.$store.state.account},loginLan:function(){return this.$t("login")},logoutLan:function(){return this.$t("logout")},howPlay:function(){return this.$t("how_to_play")},referrals:function(){return this.$t("referrals")},fairness:function(){return this.$t("fairness")},social:function(){return this.$t("social")},lang:function(){return this.$store.state.lang}},mounted:function(){var t=this;this.$i18n.locale=this.$lan(),this.language=this.$lan(),this.$store.state.lang=this.language,c["a"].$on("HIDDEN_MENU",function(){return t.navbar=!1})}},r=i,l=(s("7af1"),s("2877")),u=Object(l["a"])(r,n,a,!1,null,"2a89caf2",null);u.options.__file="header.vue";e["default"]=u.exports},"7af1":function(t,e,s){"use strict";var n=s("e430"),a=s.n(n);a.a},c21b:function(t,e,s){},c290:function(t,e,s){"use strict";s("cadf"),s("551c"),s("097d");e["a"]={blockchain:"eos",host:"eosx.eosinfra.io",port:"443",protocol:"https",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}},e430:function(t,e,s){}});
//# sourceMappingURL=app.3eb36e3f.js.map