(function(t){function e(e){for(var n,i,c=e[0],r=e[1],l=e[2],d=0,h=[];d<c.length;d++)i=c[d],a[i]&&h.push(a[i][0]),a[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),s()}function s(){for(var t,e=0;e<o.length;e++){for(var s=o[e],n=!0,c=1;c<s.length;c++){var r=s[c];0!==a[r]&&(n=!1)}n&&(o.splice(e--,1),t=i(i.s=s[0]))}return t}var n={},a={app:0},o=[];function i(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,i),s.l=!0,s.exports}i.m=t,i.c=n,i.d=function(t,e,s){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(i.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)i.d(s,n,function(e){return t[e]}.bind(null,n));return s},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/bitpiecurrex/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"034f":function(t,e,s){"use strict";var n=s("c21b"),a=s.n(n);a.a},16:function(t,e){},"184e":function(t,e,s){"use strict";s.r(e);var n,a,o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",[n("nav",{staticClass:"navbar-fixed"},[n("div",{staticClass:"bx f"},[n("h1",["cn"==t.lang?n("img",{attrs:{src:s("b49f")}}):t._e(),"en"==t.lang?n("img",{staticStyle:{height:"30px"},attrs:{src:s("b49f")}}):t._e()]),n("ul",{staticClass:"f nav hidden-xs-only"},[n("li",["en"==t.language?n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[n("img",{staticClass:"lan-img",attrs:{src:""}})]):n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[n("img",{staticClass:"lan-img",attrs:{src:""}})])]),n("li",[t.account.name?n("div",{staticClass:"account-cell",attrs:{href:"JavaScript:;"}},[n("span",[t._v(t._s(t.account.name))]),n("font-awesome-icon",{staticClass:"icon-logout",attrs:{icon:"sign-out-alt"},on:{click:t.logout}})],1):n("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])]),n("div",{staticClass:"mobile-nav hidden-sm-and-up"},[t.account.name?n("span",{staticClass:"login-name"},[t._v(t._s(t.account.name))]):n("span",{staticClass:"login-name",on:{click:t.login}},[t._v(t._s(t.loginLan))]),n("div",{staticClass:"three col"},[n("div",{class:t.navbar?"hamburger is-active":"hamburger",on:{click:function(e){return e.stopPropagation(),t.menuClick(e)}}},[n("span",{staticClass:"line"}),n("span",{staticClass:"line"}),n("span",{staticClass:"line"})])])])])]),n("transition",{attrs:{name:"fade"}},[t.navbar?n("div",{staticClass:"meun-mobile hidden-sm-and-up"},[n("ul",[n("li",["en"==t.language?n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[t._v("中文")]):n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[t._v("English")])]),n("li",[t.account.name?n("a",{attrs:{href:"JavaScript:;"},on:{click:t.logout}},[t._v(t._s(t.logoutLan))]):n("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])])]):t._e()])],1),n("div",{staticClass:"exchange-body"},[n("div",{staticClass:"btn-row"},[n("div",{staticClass:"title-btn",class:{on:0===t.titleBtn},on:{click:function(e){t.titleClick(0)}}},[t._v(t._s(t.body.buy))]),n("div",{staticClass:"title-btn",class:{on:1===t.titleBtn},on:{click:function(e){t.titleClick(1)}}},[t._v(t._s(t.body.sell))])]),0===t.titleBtn?n("div",[n("div",{staticClass:"exchange-box"},[n("div",{staticClass:"exchange-title-row"},[n("span",{staticClass:"lt exchange-title"},[t._v(t._s(t.body.myaddress))]),n("span",{staticClass:"gt"},[t._v(t._s(t.account.name))])]),n("div",{staticClass:"exchange-title"},[t._v(t._s(t.body.coinname))]),n("el-select",{staticClass:"input",attrs:{placeholder:"body.choose"},on:{change:t.changeToken},model:{value:t.tokenname,callback:function(e){t.tokenname=e},expression:"tokenname"}},t._l(t.tokenarr,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),2===t.addressState?n("div",{staticClass:"exchange-box"},[n("div",{staticClass:"address-intro-font"},[t._v(t._s(t.body.buyintro))]),n("qrcode-vue",{staticClass:"qrcode",attrs:{value:t.address,size:150,level:"H"}}),n("div",{staticClass:"address-font"},[n("span",{attrs:{id:"address"}},[t._v(t._s(t.address))]),n("span",{staticClass:"copy-btn",on:{click:function(e){t.copystr(t.address)}}},[t._v(t._s(t.body.copy))])])],1):t._e(),1===t.addressState?n("div",{staticClass:"exchange-box"},[n("div",{staticClass:"address-waiting"},[t._v(t._s(t.body.staterun))])]):t._e(),0===t.addressState?n("div",{staticClass:"exchange-box",on:{click:function(e){t.getaddress()}}},[n("div",{staticClass:"address-waiting"},[t._v(t._s(t.body.getaddress))])]):t._e(),n("div",{staticClass:"exchange-box"},[n("div",{staticClass:"order-header"},[t._v(t._s(t.body.histroytitle))]),n("div",{staticClass:"order-item buy"},t._l(t.coinOrder,function(e){return n("el-row",{staticClass:"order-item-rol"},[n("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.user))]),n("el-col",{staticClass:"order-status finish",attrs:{span:12}},[t._v(t._s(t.body.statefinish))]),n("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(t.body.money)+":")]),n("el-col",{staticClass:"order-price",attrs:{span:12}},[t._v("+"+t._s(e.amount))]),n("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v(t._s(t.body.id)+":")]),n("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.extern_tx))])],1)}))])]):t._e(),1===t.titleBtn?n("div",[n("div",{staticClass:"exchange-box"},[n("div",{staticClass:"exchange-title-row"},[n("span",{staticClass:"lt exchange-title"},[t._v(t._s(t.body.payAddress))]),n("span",{staticClass:"gt"},[t._v(t._s(t.account.name))])]),n("div",{staticClass:"exchange-title"},[t._v(t._s(t.body.coinname))]),n("el-select",{staticClass:"input",attrs:{placeholder:"body.choose"},on:{change:function(e){t.coinChange(t.coinname)}},model:{value:t.coinname,callback:function(e){t.coinname=e},expression:"coinname"}},t._l(t.coinarr,function(t){return n("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),n("div",{staticClass:"exchange-title"},[t._v(t._s(t.body.payMoney))]),n("el-input",{staticClass:"input",attrs:{type:"number"},model:{value:t.coinnum,callback:function(e){t.coinnum=e},expression:"coinnum"}}),n("div",{staticClass:"exchange-title"},[t._v(t._s(t.body.myaddress))]),n("el-input",{staticClass:"input",model:{value:t.coinaddress,callback:function(e){t.coinaddress=e},expression:"coinaddress"}}),n("div",{staticClass:"money-row exchange-title",on:{click:function(e){t.sellAll(t.currentEOS)}}},[t._v("\n          "+t._s(t.body.mymoney)+"："+t._s(t.currentEOS)+"\n        ")]),n("el-button",{staticClass:"ex-button",on:{click:function(e){t.doAction()}}},[t._v(t._s(t.body.btn))])],1),n("div",{staticClass:"order-box"},[n("div",{staticClass:"order-header"},[n("div",{staticClass:"order-button",class:{on:0===t.orderBtn},on:{click:function(e){t.orderClick(0)}}},[t._v(t._s(t.body.staterun))]),n("div",{staticClass:"order-button",class:{on:1===t.orderBtn},on:{click:function(e){t.orderClick(1)}}},[t._v(t._s(t.body.statefinish))])]),0===t.orderBtn?n("div",{staticClass:"order-item"},t._l(t.tokenRun,function(e){return n("el-row",{staticClass:"order-item-rol"},[n("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.from_user))]),n("el-col",{staticClass:"order-status run",attrs:{span:12}},[t._v(t._s(t.body.staterun))]),n("el-col",{staticClass:"order-title",attrs:{span:12}},[t._v(t._s(t.body.money))]),n("el-col",{staticClass:"order-price",attrs:{span:12}},[t._v(t._s(e.amount))]),n("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v(t._s(t.body.myaddress)+":")]),n("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.to_address))])],1)})):t._e(),1===t.orderBtn?n("div",{staticClass:"order-item"},t._l(t.tokenFinish,function(e){return n("el-row",{staticClass:"order-item-rol"},[n("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.from_user))]),n("el-col",{staticClass:"order-status finish",attrs:{span:12}},[t._v(t._s(t.body.statefinish))]),n("el-col",{staticClass:"order-title",attrs:{span:12}},[t._v(t._s(t.body.money))]),n("el-col",{staticClass:"order-price",attrs:{span:12}},[t._v(t._s(e.amount))]),n("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v(t._s(t.body.myaddress)+":")]),n("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.to_address))]),n("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v(t._s(t.body.id)+":")]),n("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.extern_tx))])],1)})):t._e()])]):t._e()])])},i=[],c=s("a322"),r=(s("28a5"),s("c5f6"),s("87f3"),s("386d"),s("4917"),s("3b2b"),s("7514"),s("7f7f"),s("cadf"),s("551c"),s("097d"),s("d3b7")),l=s.n(r),u=s("42a5"),d=s("c290"),h=l()({httpEndpoint:"".concat(d["a"].protocol,"://").concat(d["a"].host,":").concat(d["a"].port),chainId:d["a"].chainId}),f=(location.href.indexOf("dev"),{diceAccount:"bitpiecurrex",diceLog:""}),g=s("98e6"),m=s.n(g),v=s("d7b0"),p={mounted:function(){var t=this,e=this;this.$i18n.locale=this.$lan("lang"),this.language=this.$lan("lang"),this.$store.state.lang=this.language,u["a"].$on("HIDDEN_MENU",function(){return t.navbar=!1}),this.getCoinOrder();var s=setInterval(function(){this.login(),console.log("interval"),this.account.name&&clearInterval(s)},5e3);this.$nextTick(function(){if("undefined"!==typeof scatter){if(scatter.identity){var t=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e.$store.commit("UPDATE_ACCOUNT",t),e.searchAddress()}e.$store.state.account&&e.$store.state.account.name||e.login()}else document.addEventListener("scatterLoaded",function(){if(scatter.identity){var t=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e.$store.commit("UPDATE_ACCOUNT",t),e.searchAddress()}e.$store.state.account&&e.$store.state.account.name||e.login()})});var n=this.getQueryString("coin");n||(n="BTC"),this.coinname=n,this.tokenname="E"+n},data:function(){return{address:null,num:0,titleBtn:0,coinnum:0,orderBtn:0,addressState:0,coinaddress:"",coinname:"BTC",coinarr:[{value:"BTC",label:"BTC"}],tokenname:"EBTC",tokenarr:[{value:"EBTC",label:"EBTC"}],token:{EBTC:0,EETH:0,EUSD:0,EOS:0},currentEOS:0,coinOrder:[],tokenRun:[],tokenFinish:[],navbar:!1,language:"cn"}},methods:(n={changeLan:function(t){this.navbar=!1,this.$i18n.locale=t,this.language=t,this.$store.state.lang=t},menuClick:function(){this.navbar=!this.navbar},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),s=window.location.search.substr(1).match(e);return null!=s?unescape(s[2]):null},logout:function(){var t=this;window.frames.length!=parent.frames.length?(this.navbar=!1,this.$message({showClose:!0,message:this.$t("logout_success"),type:"success",duration:1500}),this.$store.commit("UPDATE_ACCOUNT",{})):(this.navbar=!1,scatter.forgetIdentity().then(function(){t.$message({showClose:!0,message:t.$t("logout_success"),type:"success",duration:1500}),t.$store.commit("UPDATE_ACCOUNT",{})}))},getClientSeed:function(){if(this.customSeed)return m()("sha1").update(this.account.name+this.customSeed).digest("hex");var t=Math.floor(Math.random()*Math.floor(Number.MAX_SAFE_INTEGER));return m()("sha1").update(this.account.name+Date.now()+t).digest("hex")}},Object(c["a"])(n,"getQueryString",function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),s=window.location.search.substr(1).match(e);return null!=s?unescape(s[2]):null}),Object(c["a"])(n,"login",function(){var t=this;console.log("login"),window.frames.length!=parent.frames.length?(window.parent.postMessage({msgName:"getUserInfo"},"*"),window.addEventListener("message",function(e){console.log(e);var s=JSON.parse(e.data);console.log(s),"eventUserInfo"===s.msgName&&(t.$store.commit("UPDATE_ACCOUNT",s.body),t.$message({showClose:!0,message:t.$t("login_success"),type:"success",duration:1500}),t.getCoinOrder(),t.getToken(),t.searchAddress())})):(console.log(scatter),scatter&&scatter.getIdentity({accounts:[d["a"]]}).then(function(){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&(t.$store.commit("UPDATE_ACCOUNT",e),t.$message({showClose:!0,message:t.$t("login_success"),type:"success",duration:1500}),t.getCoinOrder(),t.getToken(),t.searchAddress())}).catch(function(e){t.$message({showClose:!0,message:e.message,type:"warning",duration:1500})}))}),Object(c["a"])(n,"getaddressresult",function(){var t=this;h.getTableRows({scope:this.account.name,code:f.diceAccount,table:"accounts",json:"true"}).then(function(e){e&&e.rows[0]&&e.rows[0].address?(t.address=e.rows[0].address,t.addressState=2):setTimeout(function(){t.getaddressresult()},3e3)}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),Object(c["a"])(n,"getaddressIframe",function(){var t=this;window.parent.postMessage({msgName:"executeTransaction",body:{messageId:"WLuSnA5eVb3CXmBV5FkIKLtzkkor6rLl",content:{account:f.diceAccount,name:"newaddress",authorization:[{actor:this.account.name,permission:"active"}],data:{user:this.account.name,symbol:"EBTC"}}}},"*"),window.addEventListener("message",function(e){var s=JSON.parse(e.data);"eventTransaction"===s.msgName&&200==s.code&&(t.addressState=1,t.getaddressresult())})}),Object(c["a"])(n,"getaddress",function(){var t=this;window.frames.length!=parent.frames.length?this.getaddressIframe():(this.addressState=1,eos.transaction({actions:[{account:f.diceAccount,name:"newaddress",authorization:[{actor:this.account.name,permission:"active"}],data:{user:this.account.name,symbol:"EBTC"}}]}).then(function(e){t.addressState=1,t.getaddressresult()}).catch(function(e){t.addressState=0;var s="string"===typeof e?JSON.parse(e):e;(s.error.details[0].message="assertion failure with message: already has exchange address")&&t.getaddressresult()}))}),Object(c["a"])(n,"getToken",function(){var t=this;this.account.name&&h.getCurrencyBalance({json:!0,code:"bitpietokens",account:this.account.name}).then(function(e){if(e&&0!=e.length){for(var s=0;s<e.length;s++){var n=e[s].split(" ");"EBTC"===n[1]?t.token.EBTC=Number(n[0]).toFixed(6):"EETH"===n[1]?t.token.EETH=Number(n[0]).toFixed(4):"EUSD"===n[1]&&(t.token.EUSD=Number(n[0]).toFixed(2))}"BTC"===t.coinname?t.currentEOS=t.token.EBTC:"ETH"===t.coinname?t.currentEOS=t.token.EETH:"USD"===t.coinname&&(t.currentEOS=t.token.EUSD)}})}),Object(c["a"])(n,"copystr",function(t){var e=document.createRange();e.selectNode(document.getElementById("address"));var s=window.getSelection();s.rangeCount>0&&s.removeAllRanges(),s.addRange(e),document.execCommand("copy"),this.$message({showClose:!0,message:this.$t("copy_success"),type:"success",duration:1500})}),Object(c["a"])(n,"copyaddress",function(t){var e=document.createRange();e.selectNode(t.target);var s=window.getSelection();s.rangeCount>0&&s.removeAllRanges(),s.addRange(e),document.execCommand("copy"),this.$message({showClose:!0,message:this.$t("copy_success"),type:"success",duration:1500})}),Object(c["a"])(n,"titleClick",function(t){this.getToken(),this.titleBtn=t,0===t&&(this.searchAddress(),this.account.name&&this.getCoinOrder()),1===t&&(0===this.orderBtn?this.getTokenRun():1===this.orderBtn&&this.getTokenFinish())}),Object(c["a"])(n,"changeToken",function(){this.address=null,this.addressState=1,this.searchAddress()}),Object(c["a"])(n,"doAction",function(){var t=this,e=this.coinaddress,s=this.coinnum,n=this.coinname,a=WAValidator.validate(e,"bitcoin");if(!a||""==e)return this.$notify.error(this.body.intro1),!1;if(s>this.currentEOS)this.$message({showClose:!0,message:this.body.intro2,type:"success",duration:1500});else if(s<.001)this.$message({showClose:!0,message:this.body.intro3,type:"success",duration:1500});else if(e)if(s=Number(s).toFixed(8),window.frames.length!=parent.frames.length){console.log("ifarme");var o={account:"bitpietokens",name:"transfer",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{from:this.account.name,to:f.diceAccount,quantity:s+" E"+n,memo:e}};console.log(o),window.parent.postMessage({msgName:"executeTransaction",body:{messageId:"WLuSnA5eVb3CXmBV5FkIKLtzkkor6rLl",content:{account:"bitpietokens",name:"transfer",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{from:this.account.name,to:f.diceAccount,quantity:s+" E"+n,memo:e}}}},"*"),window.addEventListener("message",function(e){console.log(e),e.isTrusted&&(t.getToken(),t.getTokenRun(),t.$message({showClose:!0,message:t.body.intro5,type:"success",duration:3500}))})}else{var i=scatter.eos(d["a"],l.a,{});i.transaction({actions:[{account:"bitpietokens",name:"transfer",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{from:this.account.name,to:f.diceAccount,quantity:s+" E"+n,memo:e}}]}).then(function(e){t.getToken(),t.getTokenRun(),t.$message({showClose:!0,message:t.body.intro5,type:"success",duration:3500})}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}else this.$message({showClose:!0,message:this.body.intro4,type:"success",duration:1500})}),Object(c["a"])(n,"coinChange",function(){this.getToken()}),Object(c["a"])(n,"sellAll",function(t){this.coinnum=parseFloat(t)}),Object(c["a"])(n,"getCoinOrder",function(){var t=this;h.getTableRows({scope:f.diceAccount,code:f.diceAccount,table:"buyorders",key_type:"i64",index_position:"2",lower_bound:this.account.name,json:"true"}).then(function(e){if(!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var s=[],n=0;n<e.rows.length;n++)e.rows[n].user==t.account.name&&s.push(e.rows[n]);t.coinOrder=s}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),Object(c["a"])(n,"getTokenRun",function(){var t=this;h.getTableRows({scope:f.diceAccount,code:f.diceAccount,table:"sellorders",json:"true",key_type:"i64",index_position:"2",lower_bound:this.account.name}).then(function(e){if(!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var s=[],n=0;n<e.rows.length;n++)e.rows[n].from_user==t.account.name&&s.push(e.rows[n]);t.tokenRun=s}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),Object(c["a"])(n,"getTokenFinish",function(){var t=this;h.getTableRows({scope:f.diceAccount,code:f.diceAccount,table:"soldorders",json:"true",key_type:"i64",index_position:"2",lower_bound:this.account.name}).then(function(e){if(!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var s=[],n=0;n<e.rows.length;n++)e.rows[n].from_user==t.account.name&&s.push(e.rows[n]);t.tokenFinish=s}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),Object(c["a"])(n,"orderClick",function(t){this.orderBtn=t,0===t?this.getTokenRun():1===t&&this.getTokenFinish()}),Object(c["a"])(n,"addressTable",function(){var t=this;h.getTableRows({scope:f.diceAccount,code:f.diceAccount,table:"newaddresses",json:"true",key_type:"i64",index_position:"2",lower_bound:this.account.name,limit:1}).then(function(e){e&&e.rows[0]&&e.rows[0].user&&e.rows[0].user==t.account.name?(t.addressState=1,t.getaddressresult()):t.addressState=0}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),Object(c["a"])(n,"searchAddress",function(){var t=this;h.getTableRows({scope:this.account.name,code:f.diceAccount,table:"accounts",json:"true"}).then(function(e){var s=!0;if(e&&e.rows[0]&&e.rows[0].address)for(var n=0;n<e.rows.length;n++)e.rows[n].symbol==t.tokenname&&(t.address=e.rows[n].address,t.addressState=2,s=!1);s&&t.addressTable()}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),n),watch:{account:function(){this.getCoinOrder()}},computed:(a={account:function(){return this.$store.state.account},body:function(){return this.$t("body")}},Object(c["a"])(a,"account",function(){return this.$store.state.account}),Object(c["a"])(a,"loginLan",function(){return this.$t("login")}),Object(c["a"])(a,"logoutLan",function(){return this.$t("logout")}),Object(c["a"])(a,"lang",function(){return this.$store.state.lang}),a),components:{QrcodeVue:v["a"]}},b=p,_=(s("5d0b"),s("2877")),y=Object(_["a"])(b,o,i,!1,null,"413c4bb5",null);y.options.__file="body.vue";e["default"]=y.exports},2:function(t,e){},2383:function(t,e,s){},3:function(t,e){},"38c8":function(t,e,s){},4:function(t,e){},"42a5":function(t,e,s){"use strict";s("cadf"),s("551c"),s("097d");var n=s("2b0e");e["a"]=new n["default"]},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("097d");var n=s("2b0e"),a=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("main",{attrs:{id:"app"}},[s("dice-body")],1)},o=[],i=(new Promise(function(t){document.addEventListener("scatterLoaded",t)}),{mounted:function(){},components:{diceHeader:s("71c2").default,diceBody:s("184e").default}}),c=i,r=(s("034f"),s("2877")),l=Object(r["a"])(c,a,o,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,d=(s("386d"),s("4917"),s("3b2b"),function(t,e){t.prototype.$lan=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),s=window.location.search.substr(1).match(e);return null!=s?unescape(s[2]):"cn"}}),h=s("5c96"),f=s.n(h),g=(s("7f7f"),s("6b54"),s("2f62"));n["default"].use(g["a"]);var m=new g["a"].Store({state:{account:{},lang:"cn"},mutations:{UPDATE_ACCOUNT:function(t,e){t.account=e,t.account.name=e.name.toString()}}}),v=s("ecee"),p=s("c074"),b=s("7a55"),_=s("42b9"),y=s("a925"),C={login:"LOGIN",logout:"LOGOUT",login_success:"Welcome Back",copy_success:"copy success",body:{buy:"Buy",sell:"Sell",myaddress:"Receiving Address",coinname:"Currency",buyintro:"Send BTC to this address to swap the same amount of EBTC.",getaddress:"Get Address",copy:"Copy",histroytitle:"Order History",statefinish:"Finish",staterun:"Requesting",money:"deal amount",id:"id",payAddress:"My Account",mymoney:"My Account Balance",btn:"Submit",choose:"Select",payMoney:"Input the Amount to Swap",intro1:"Invalid BTC address",intro2:"Insufficient balance; please reset.",intro3:"The minimum amount 0.001EBTC",intro4:"Receiving address is missing",intro5:"Upon successful transfer, BTC will be sent to your receiving address after a while"}},w=C,k={login:" 登陆 ",logout:" 登出 ",login_success:"登入成功",copy_success:"复制成功",body:{buy:"买入",sell:"卖出",myaddress:"收款地址",coinname:"兑转币种",buyintro:"发送BTC到下面地址即可兑换出对应数量的EBTC",getaddress:"获取地址",copy:"复制",histroytitle:"历史订单",statefinish:"已完成",staterun:"处理中",money:"交易金额",id:"交易id",payAddress:"付款账户",mymoney:"余额",btn:"提交",choose:"请选择",payMoney:"兑换数额",intro1:"btc地址不合法",intro2:"您的余额不足，请充值",intro3:"金额不能小于0.001EBTC",intro4:"收币地址不能为空",intro5:"发币成功，稍后会将BTC转入您的收款地址"}},O=k,S={en:w,cn:O};function T(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),s=window.location.search.substr(1).match(e);return null!=s?unescape(s[2]):"cn"}n["default"].use(y["a"]);var $=T("lang");console.log($);var E=new y["a"]({locale:$,fallbackLocale:$,messages:S}),x=E,A=s("4eb5"),B=s.n(A),L=(s("f5df"),s("450d"),s("a7cc"),s("915d"),s("0fb7"),s("46a1"),s("e05f"),s("0fae"),s("38c8"),s("76b0")),j=s.n(L),N=s("876a"),U=s.n(N);j.a.plugins(new U.a),v["library"].add(p["a"],_["a"]),n["default"].use(B.a),n["default"].use(d),n["default"].use(f.a),n["default"].config.productionTip=!1,n["default"].component("font-awesome-icon",b["FontAwesomeIcon"]),new n["default"]({store:m,i18n:x,render:function(t){return t(u)}}).$mount("#app")},"5b1e":function(t,e,s){},"5d0b":function(t,e,s){"use strict";var n=s("2383"),a=s.n(n);a.a},"71c2":function(t,e,s){"use strict";s.r(e);var n=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("nav",{staticClass:"navbar-fixed"},[n("div",{staticClass:"bx f"},[n("h1",["cn"==t.lang?n("img",{attrs:{src:s("b49f")}}):t._e(),"en"==t.lang?n("img",{staticStyle:{height:"30px"},attrs:{src:s("b49f")}}):t._e()]),n("ul",{staticClass:"f nav hidden-xs-only"},[n("li",["en"==t.language?n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[n("img",{staticClass:"lan-img",attrs:{src:""}})]):n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[n("img",{staticClass:"lan-img",attrs:{src:""}})])]),n("li",[t.account.name?n("div",{staticClass:"account-cell",attrs:{href:"JavaScript:;"}},[n("span",[t._v(t._s(t.account.name))]),n("font-awesome-icon",{staticClass:"icon-logout",attrs:{icon:"sign-out-alt"},on:{click:t.logout}})],1):n("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])]),n("div",{staticClass:"mobile-nav hidden-sm-and-up"},[t.account.name?n("span",{staticClass:"login-name"},[t._v(t._s(t.account.name))]):n("span",{staticClass:"login-name",on:{click:t.login}},[t._v(t._s(t.loginLan))]),n("div",{staticClass:"three col"},[n("div",{class:t.navbar?"hamburger is-active":"hamburger",on:{click:function(e){return e.stopPropagation(),t.menuClick(e)}}},[n("span",{staticClass:"line"}),n("span",{staticClass:"line"}),n("span",{staticClass:"line"})])])])])]),n("transition",{attrs:{name:"fade"}},[t.navbar?n("div",{staticClass:"meun-mobile hidden-sm-and-up"},[n("ul",[n("li",["en"==t.language?n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[t._v("中文")]):n("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[t._v("English")])]),n("li",[t.account.name?n("a",{attrs:{href:"JavaScript:;"},on:{click:t.logout}},[t._v(t._s(t.logoutLan))]):n("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])])]):t._e()])],1)},a=[],o=(s("7514"),s("386d"),s("4917"),s("3b2b"),s("cadf"),s("551c"),s("097d"),s("c290")),i=s("42a5"),c={methods:{changeLan:function(t){this.navbar=!1,this.$i18n.locale=t,this.language=t,this.$store.state.lang=t},menuClick:function(){this.navbar=!this.navbar},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),s=window.location.search.substr(1).match(e);return null!=s?unescape(s[2]):null},login:function(){var t=this;this.navbar=!1,window.frames.length!=parent.frames.length?(window.parent.postMessage({msgName:"getUserInfo"},"*"),window.addEventListener("message",function(e){var s=JSON.parse(e.data);"eventUserInfo"===s.msgName&&(t.$store.commit("UPDATE_ACCOUNT",s.body),t.$message({showClose:!0,message:t.$t("login_success"),type:"success",duration:1500}))})):scatter.getIdentity({accounts:[o["a"]]}).then(function(){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&(t.$store.commit("UPDATE_ACCOUNT",e),console.log(e))}).catch(function(e){t.$message({showClose:!0,message:e.message,type:"warning",duration:1500})})},logout:function(){var t=this;this.navbar=!1,scatter.forgetIdentity().then(function(){t.$message({showClose:!0,message:t.$t("logout_success"),type:"success",duration:1500}),t.$store.commit("UPDATE_ACCOUNT",{})})},showAbout:function(){this.navbar=!1,i["a"].$emit("SHOW_ABOUT")},showSocial:function(){this.navbar=!1,i["a"].$emit("SHOW_SOCIAL")},showReferrals:function(){this.navbar=!1,i["a"].$emit("SHOW_REFERRALS")},showCustomSeed:function(){this.navbar=!1,i["a"].$emit("SHOW_CUSTOMSEED")}},data:function(){return{navbar:!1,language:"cn"}},computed:{account:function(){return this.$store.state.account},loginLan:function(){return this.$t("login")},logoutLan:function(){return this.$t("logout")},howPlay:function(){return this.$t("how_to_play")},referrals:function(){return this.$t("referrals")},fairness:function(){return this.$t("fairness")},social:function(){return this.$t("social")},lang:function(){return this.$store.state.lang}},mounted:function(){var t=this;this.$i18n.locale=this.$lan("lang"),this.language=this.$lan("lang"),this.$store.state.lang=this.language,i["a"].$on("HIDDEN_MENU",function(){return t.navbar=!1})}},r=c,l=(s("e8f3"),s("2877")),u=Object(l["a"])(r,n,a,!1,null,"edaec9aa",null);u.options.__file="header.vue";e["default"]=u.exports},b49f:function(t,e,s){t.exports=s.p+"img/icon_dapp@3x.1f4b83df.png"},c21b:function(t,e,s){},c290:function(t,e,s){"use strict";e["a"]={blockchain:"eos",host:"public.eosinfra.io",port:"443",protocol:"https",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}},e8f3:function(t,e,s){"use strict";var n=s("5b1e"),a=s.n(n);a.a}});
//# sourceMappingURL=app.5a34d113.js.map