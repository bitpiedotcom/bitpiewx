(function(t){function e(e){for(var s,i,c=e[0],r=e[1],l=e[2],d=0,h=[];d<c.length;d++)i=c[d],a[i]&&h.push(a[i][0]),a[i]=0;for(s in r)Object.prototype.hasOwnProperty.call(r,s)&&(t[s]=r[s]);u&&u(e);while(h.length)h.shift()();return o.push.apply(o,l||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],s=!0,c=1;c<n.length;c++){var r=n[c];0!==a[r]&&(s=!1)}s&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var s={},a={app:0},o=[];function i(e){if(s[e])return s[e].exports;var n=s[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=s,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)i.d(n,s,function(e){return t[e]}.bind(null,s));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/bitpiecurrex/";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var l=0;l<c.length;l++)e(c[l]);var u=r;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var s=n("c21b"),a=n.n(s);a.a},16:function(t,e){},"184e":function(t,e,n){"use strict";n.r(e);var s,a,o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("div",[s("nav",{staticClass:"navbar-fixed"},[s("div",{staticClass:"bx f"},[s("h1",["cn"==t.lang?s("img",{attrs:{src:n("b49f")}}):t._e(),"en"==t.lang?s("img",{staticStyle:{height:"30px"},attrs:{src:n("b49f")}}):t._e()]),s("ul",{staticClass:"f nav hidden-xs-only"},[s("li",["en"==t.language?s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[s("img",{staticClass:"lan-img",attrs:{src:""}})]):s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[s("img",{staticClass:"lan-img",attrs:{src:""}})])]),s("li",[t.account.name?s("div",{staticClass:"account-cell",attrs:{href:"JavaScript:;"}},[s("span",[t._v(t._s(t.account.name))]),s("font-awesome-icon",{staticClass:"icon-logout",attrs:{icon:"sign-out-alt"},on:{click:t.logout}})],1):s("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])]),s("div",{staticClass:"mobile-nav hidden-sm-and-up"},[t.account.name?s("span",{staticClass:"login-name"},[t._v(t._s(t.account.name))]):s("span",{staticClass:"login-name",on:{click:t.login}},[t._v(t._s(t.loginLan))]),s("div",{staticClass:"three col"},[s("div",{class:t.navbar?"hamburger is-active":"hamburger",on:{click:function(e){return e.stopPropagation(),t.menuClick(e)}}},[s("span",{staticClass:"line"}),s("span",{staticClass:"line"}),s("span",{staticClass:"line"})])])])])]),s("transition",{attrs:{name:"fade"}},[t.navbar?s("div",{staticClass:"meun-mobile hidden-sm-and-up"},[s("ul",[s("li",["en"==t.language?s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[t._v("中文")]):s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[t._v("English")])]),s("li",[t.account.name?s("a",{attrs:{href:"JavaScript:;"},on:{click:t.logout}},[t._v(t._s(t.logoutLan))]):s("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])])]):t._e()])],1),s("div",{staticClass:"exchange-body"},[s("div",{staticClass:"btn-row"},[s("div",{staticClass:"title-btn",class:{on:0===t.titleBtn},on:{click:function(e){t.titleClick(0)}}},[t._v(t._s(t.body.buy))]),s("div",{staticClass:"title-btn",class:{on:1===t.titleBtn},on:{click:function(e){t.titleClick(1)}}},[t._v(t._s(t.body.sell))])]),0===t.titleBtn?s("div",[s("div",{staticClass:"exchange-box"},[s("div",{staticClass:"exchange-title-row"},[s("span",{staticClass:"lt exchange-title"},[t._v(t._s(t.body.myaddress))]),s("span",{staticClass:"gt"},[t._v(t._s(t.account.name))])]),s("div",{staticClass:"exchange-title"},[t._v(t._s(t.body.coinname))]),s("el-select",{staticClass:"input",attrs:{placeholder:"body.choose"},on:{change:t.changeToken},model:{value:t.tokenname,callback:function(e){t.tokenname=e},expression:"tokenname"}},t._l(t.tokenarr,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}))],1),2===t.addressState?s("div",{staticClass:"exchange-box"},[s("div",{staticClass:"address-intro-font"},[t._v(t._s(t.body.buyintro))]),s("qrcode-vue",{staticClass:"qrcode",attrs:{value:t.address,size:150,level:"H"}}),s("div",{staticClass:"address-font"},[s("span",{attrs:{id:"address"}},[t._v(t._s(t.address))]),s("span",{staticClass:"copy-btn",on:{click:function(e){t.copystr(t.address)}}},[t._v(t._s(t.body.copy))])])],1):t._e(),1===t.addressState?s("div",{staticClass:"exchange-box"},[s("div",{staticClass:"address-waiting"},[t._v(t._s(t.body.staterun))])]):t._e(),0===t.addressState?s("div",{staticClass:"exchange-box",on:{click:function(e){t.getaddress()}}},[s("div",{staticClass:"address-waiting"},[t._v(t._s(t.body.getaddress))])]):t._e(),s("div",{staticClass:"exchange-box"},[s("div",{staticClass:"order-header"},[t._v(t._s(t.body.histroytitle))]),s("div",{staticClass:"order-item buy"},t._l(t.coinOrder,function(e){return s("el-row",{staticClass:"order-item-rol"},[s("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.user))]),s("el-col",{staticClass:"order-status finish",attrs:{span:12}},[t._v(t._s(t.body.statefinish))]),s("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(t.body.money)+":")]),s("el-col",{staticClass:"order-price",attrs:{span:12}},[t._v("+"+t._s(e.amount))]),s("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v(t._s(t.body.id)+":")]),s("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.extern_tx))])],1)}))])]):t._e(),1===t.titleBtn?s("div",[s("div",{staticClass:"exchange-box"},[s("div",{staticClass:"exchange-title-row"},[s("span",{staticClass:"lt exchange-title"},[t._v(t._s(t.body.payAddress))]),s("span",{staticClass:"gt"},[t._v(t._s(t.account.name))])]),s("div",{staticClass:"exchange-title"},[t._v(t._s(t.body.coinname))]),s("el-select",{staticClass:"input",attrs:{placeholder:"body.choose"},on:{change:function(e){t.coinChange(t.coinname)}},model:{value:t.coinname,callback:function(e){t.coinname=e},expression:"coinname"}},t._l(t.coinarr,function(t){return s("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})})),s("div",{staticClass:"exchange-title"},[t._v(t._s(t.body.payMoney))]),s("el-input",{staticClass:"input",attrs:{type:"number"},model:{value:t.coinnum,callback:function(e){t.coinnum=e},expression:"coinnum"}}),s("div",{staticClass:"exchange-title"},[t._v(t._s(t.body.myaddress))]),s("el-input",{staticClass:"input",model:{value:t.coinaddress,callback:function(e){t.coinaddress=e},expression:"coinaddress"}}),s("div",{staticClass:"money-row exchange-title",on:{click:function(e){t.sellAll(t.currentEOS)}}},[t._v("\n          "+t._s(t.body.mymoney)+"："+t._s(t.currentEOS)+"\n        ")]),s("el-button",{staticClass:"ex-button",on:{click:function(e){t.doAction()}}},[t._v(t._s(t.body.btn))])],1),s("div",{staticClass:"order-box"},[s("div",{staticClass:"order-header"},[s("div",{staticClass:"order-button",class:{on:0===t.orderBtn},on:{click:function(e){t.orderClick(0)}}},[t._v(t._s(t.body.staterun))]),s("div",{staticClass:"order-button",class:{on:1===t.orderBtn},on:{click:function(e){t.orderClick(1)}}},[t._v(t._s(t.body.statefinish))])]),0===t.orderBtn?s("div",{staticClass:"order-item"},t._l(t.tokenRun,function(e){return s("el-row",{staticClass:"order-item-rol"},[s("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.from_user))]),s("el-col",{staticClass:"order-status run",attrs:{span:12}},[t._v(t._s(t.body.staterun))]),s("el-col",{staticClass:"order-title",attrs:{span:12}},[t._v(t._s(t.body.money))]),s("el-col",{staticClass:"order-price",attrs:{span:12}},[t._v(t._s(e.amount))]),s("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v(t._s(t.body.myaddress)+":")]),s("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.to_address))])],1)})):t._e(),1===t.orderBtn?s("div",{staticClass:"order-item"},t._l(t.tokenFinish,function(e){return s("el-row",{staticClass:"order-item-rol"},[s("el-col",{staticClass:"order-name",attrs:{span:12}},[t._v(t._s(e.from_user))]),s("el-col",{staticClass:"order-status finish",attrs:{span:12}},[t._v(t._s(t.body.statefinish))]),s("el-col",{staticClass:"order-title",attrs:{span:12}},[t._v(t._s(t.body.money))]),s("el-col",{staticClass:"order-price",attrs:{span:12}},[t._v(t._s(e.amount))]),s("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v(t._s(t.body.myaddress)+":")]),s("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.to_address))]),s("el-col",{staticClass:"order-title",attrs:{span:6}},[t._v(t._s(t.body.id)+":")]),s("el-col",{staticClass:"order-address",attrs:{span:24},nativeOn:{click:function(e){t.copyaddress(e)}}},[t._v(t._s(e.extern_tx))])],1)})):t._e()])]):t._e()])])},i=[],c=n("a322"),r=(n("28a5"),n("c5f6"),n("87f3"),n("386d"),n("4917"),n("3b2b"),n("7514"),n("7f7f"),n("cadf"),n("551c"),n("097d"),n("d3b7")),l=n.n(r),u=n("42a5"),d=n("c290"),h=l()({httpEndpoint:"".concat(d["a"].protocol,"://").concat(d["a"].host,":").concat(d["a"].port),chainId:d["a"].chainId}),f=(location.href.indexOf("dev"),{diceAccount:"bitpiecurrex",diceLog:""}),g=n("98e6"),m=n.n(g),v=n("d7b0"),p={mounted:function(){var t=this,e=this;this.openFullScreen2(),this.$i18n.locale=this.$lan("lang"),this.language=this.$lan("lang"),this.$store.state.lang=this.language,u["a"].$on("HIDDEN_MENU",function(){return t.navbar=!1}),this.getCoinOrder();var n=setInterval(function(){console.log("in"),e.login(),e.account.name&&clearInterval(n)},5e3);this.$nextTick(function(){if("undefined"!==typeof scatter){if(scatter.identity){var t=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e.$store.commit("UPDATE_ACCOUNT",t),e.searchAddress()}e.$store.state.account&&e.$store.state.account.name||e.login()}else document.addEventListener("scatterLoaded",function(){if(scatter.identity){var t=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e.$store.commit("UPDATE_ACCOUNT",t),e.searchAddress()}e.$store.state.account&&e.$store.state.account.name||e.login()})});var s=this.getQueryString("coin");s||(s="BTC"),this.coinname=s,this.tokenname="E"+s},data:function(){return{address:null,num:0,titleBtn:0,coinnum:0,orderBtn:0,addressState:0,coinaddress:"",coinname:"BTC",coinarr:[{value:"BTC",label:"BTC"}],tokenname:"EBTC",tokenarr:[{value:"EBTC",label:"EBTC"}],token:{EBTC:0,EETH:0,EUSD:0,EOS:0},currentEOS:0,coinOrder:[],tokenRun:[],tokenFinish:[],navbar:!1,language:"cn"}},methods:(s={changeLan:function(t){this.navbar=!1,this.$i18n.locale=t,this.language=t,this.$store.state.lang=t},menuClick:function(){this.navbar=!this.navbar},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null},logout:function(){var t=this;window.frames.length!=parent.frames.length?(this.navbar=!1,this.$message({showClose:!0,message:this.$t("logout_success"),type:"success",duration:1500}),this.$store.commit("UPDATE_ACCOUNT",{})):(this.navbar=!1,scatter.forgetIdentity().then(function(){t.$message({showClose:!0,message:t.$t("logout_success"),type:"success",duration:1500}),t.$store.commit("UPDATE_ACCOUNT",{})}))},getClientSeed:function(){if(this.customSeed)return m()("sha1").update(this.account.name+this.customSeed).digest("hex");var t=Math.floor(Math.random()*Math.floor(Number.MAX_SAFE_INTEGER));return m()("sha1").update(this.account.name+Date.now()+t).digest("hex")}},Object(c["a"])(s,"getQueryString",function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null}),Object(c["a"])(s,"login",function(){var t=this;console.log("login"),window.frames.length!=parent.frames.length?(window.parent.postMessage({msgName:"getUserInfo"},"*"),window.addEventListener("message",function(e){console.log(e);var n=JSON.parse(e.data);console.log(n),"eventUserInfo"===n.msgName&&(t.$store.commit("UPDATE_ACCOUNT",n.body),t.$message({showClose:!0,message:t.$t("login_success"),type:"success",duration:1500}),t.getCoinOrder(),t.getToken(),t.searchAddress())})):(console.log(scatter),scatter&&scatter.getIdentity({accounts:[d["a"]]}).then(function(){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&(t.$store.commit("UPDATE_ACCOUNT",e),t.$message({showClose:!0,message:t.$t("login_success"),type:"success",duration:1500}),t.getCoinOrder(),t.getToken(),t.searchAddress())}).catch(function(e){t.$message({showClose:!0,message:e.message,type:"warning",duration:1500})}))}),Object(c["a"])(s,"getaddressresult",function(){var t=this;h.getTableRows({scope:this.account.name,code:f.diceAccount,table:"accounts",json:"true"}).then(function(e){e&&e.rows[0]&&e.rows[0].address?(t.address=e.rows[0].address,t.addressState=2):setTimeout(function(){t.getaddressresult()},3e3)}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),Object(c["a"])(s,"getaddressIframe",function(){var t=this;window.parent.postMessage({msgName:"executeTransaction",body:{messageId:"WLuSnA5eVb3CXmBV5FkIKLtzkkor6rLl",content:{account:f.diceAccount,name:"newaddress",authorization:[{actor:this.account.name,permission:"active"}],data:{user:this.account.name,symbol:"EBTC"}}}},"*"),window.addEventListener("message",function(e){var n=JSON.parse(e.data);"eventTransaction"===n.msgName&&200==n.code&&(t.addressState=1,t.getaddressresult())})}),Object(c["a"])(s,"getaddress",function(){var t=this;window.frames.length!=parent.frames.length?this.getaddressIframe():(this.addressState=1,eos.transaction({actions:[{account:f.diceAccount,name:"newaddress",authorization:[{actor:this.account.name,permission:"active"}],data:{user:this.account.name,symbol:"EBTC"}}]}).then(function(e){t.addressState=1,t.getaddressresult()}).catch(function(e){t.addressState=0;var n="string"===typeof e?JSON.parse(e):e;(n.error.details[0].message="assertion failure with message: already has exchange address")&&t.getaddressresult()}))}),Object(c["a"])(s,"getToken",function(){var t=this;this.account.name&&h.getCurrencyBalance({json:!0,code:"bitpietokens",account:this.account.name}).then(function(e){if(e&&0!=e.length){for(var n=0;n<e.length;n++){var s=e[n].split(" ");"EBTC"===s[1]?t.token.EBTC=Number(s[0]).toFixed(6):"EETH"===s[1]?t.token.EETH=Number(s[0]).toFixed(4):"EUSD"===s[1]&&(t.token.EUSD=Number(s[0]).toFixed(2))}"BTC"===t.coinname?t.currentEOS=t.token.EBTC:"ETH"===t.coinname?t.currentEOS=t.token.EETH:"USD"===t.coinname&&(t.currentEOS=t.token.EUSD)}})}),Object(c["a"])(s,"copystr",function(t){var e=document.createRange();e.selectNode(document.getElementById("address"));var n=window.getSelection();n.rangeCount>0&&n.removeAllRanges(),n.addRange(e),document.execCommand("copy"),this.$message({showClose:!0,message:this.$t("copy_success"),type:"success",duration:1500})}),Object(c["a"])(s,"copyaddress",function(t){var e=document.createRange();e.selectNode(t.target);var n=window.getSelection();n.rangeCount>0&&n.removeAllRanges(),n.addRange(e),document.execCommand("copy"),this.$message({showClose:!0,message:this.$t("copy_success"),type:"success",duration:1500})}),Object(c["a"])(s,"titleClick",function(t){this.getToken(),this.titleBtn=t,0===t&&(this.searchAddress(),this.account.name&&this.getCoinOrder()),1===t&&(0===this.orderBtn?this.getTokenRun():1===this.orderBtn&&this.getTokenFinish())}),Object(c["a"])(s,"changeToken",function(){this.address=null,this.addressState=1,this.searchAddress()}),Object(c["a"])(s,"doAction",function(){var t=this,e=this.coinaddress,n=this.coinnum,s=this.coinname,a=WAValidator.validate(e,"bitcoin");if(!a||""==e)return this.$notify.error(this.body.intro1),!1;if(n>this.currentEOS)this.$message({showClose:!0,message:this.body.intro2,type:"success",duration:1500});else if(n<.001)this.$message({showClose:!0,message:this.body.intro3,type:"success",duration:1500});else if(e)if(n=Number(n).toFixed(8),window.frames.length!=parent.frames.length){console.log("ifarme");var o={account:"bitpietokens",name:"transfer",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{from:this.account.name,to:f.diceAccount,quantity:n+" E"+s,memo:e}};console.log(o),window.parent.postMessage({msgName:"executeTransaction",body:{messageId:"WLuSnA5eVb3CXmBV5FkIKLtzkkor6rLl",content:{account:"bitpietokens",name:"transfer",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{from:this.account.name,to:f.diceAccount,quantity:n+" E"+s,memo:e}}}},"*"),window.addEventListener("message",function(e){console.log(e),e.isTrusted&&(t.getToken(),t.getTokenRun(),t.$message({showClose:!0,message:t.body.intro5,type:"success",duration:3500}))})}else{var i=scatter.eos(d["a"],l.a,{});i.transaction({actions:[{account:"bitpietokens",name:"transfer",authorization:[{actor:this.account.name,permission:this.account.authority}],data:{from:this.account.name,to:f.diceAccount,quantity:n+" E"+s,memo:e}}]}).then(function(e){t.getToken(),t.getTokenRun(),t.$message({showClose:!0,message:t.body.intro5,type:"success",duration:3500})}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}else this.$message({showClose:!0,message:this.body.intro4,type:"success",duration:1500})}),Object(c["a"])(s,"coinChange",function(){this.getToken()}),Object(c["a"])(s,"sellAll",function(t){this.coinnum=parseFloat(t)}),Object(c["a"])(s,"getCoinOrder",function(){var t=this;h.getTableRows({scope:f.diceAccount,code:f.diceAccount,table:"buyorders",key_type:"i64",index_position:"2",lower_bound:this.account.name,json:"true"}).then(function(e){if(!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var n=[],s=0;s<e.rows.length;s++)e.rows[s].user==t.account.name&&n.push(e.rows[s]);t.coinOrder=n}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),Object(c["a"])(s,"getTokenRun",function(){var t=this;h.getTableRows({scope:f.diceAccount,code:f.diceAccount,table:"sellorders",json:"true",key_type:"i64",index_position:"2",lower_bound:this.account.name}).then(function(e){if(!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var n=[],s=0;s<e.rows.length;s++)e.rows[s].from_user==t.account.name&&n.push(e.rows[s]);t.tokenRun=n}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),Object(c["a"])(s,"getTokenFinish",function(){var t=this;h.getTableRows({scope:f.diceAccount,code:f.diceAccount,table:"soldorders",json:"true",key_type:"i64",index_position:"2",lower_bound:this.account.name}).then(function(e){if(!t.account.name)return!1;if(e.rows&&e.rows[0]){for(var n=[],s=0;s<e.rows.length;s++)e.rows[s].from_user==t.account.name&&n.push(e.rows[s]);t.tokenFinish=n}}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),Object(c["a"])(s,"orderClick",function(t){this.orderBtn=t,0===t?this.getTokenRun():1===t&&this.getTokenFinish()}),Object(c["a"])(s,"addressTable",function(){var t=this;h.getTableRows({scope:f.diceAccount,code:f.diceAccount,table:"newaddresses",json:"true",key_type:"i64",index_position:"2",lower_bound:this.account.name,limit:1}).then(function(e){e&&e.rows[0]&&e.rows[0].user&&e.rows[0].user==t.account.name?(t.addressState=1,t.getaddressresult()):t.addressState=0}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),Object(c["a"])(s,"searchAddress",function(){var t=this;h.getTableRows({scope:this.account.name,code:f.diceAccount,table:"accounts",json:"true"}).then(function(e){var n=!0;if(e&&e.rows[0]&&e.rows[0].address)for(var s=0;s<e.rows.length;s++)e.rows[s].symbol==t.tokenname&&(t.address=e.rows[s].address,t.addressState=2,n=!1);n&&t.addressTable()}).catch(function(e){t.$notify.error(e.message||JSON.parse(e).error.details[0].message)})}),Object(c["a"])(s,"openFullScreen2",function(){var t=this,e=this.$loading({lock:!0,text:"Loading",spinner:"el-icon-loading",background:"rgba(0, 0, 0, 0.7)"}),n=setInterval(function(){window.frames.length!=parent.frames.length?t.account.name&&(e.close(),clearInterval(n)):(e.close(),clearInterval(n))},1e3)}),s),watch:{account:function(){this.getCoinOrder()}},computed:(a={account:function(){return this.$store.state.account},body:function(){return this.$t("body")}},Object(c["a"])(a,"account",function(){return this.$store.state.account}),Object(c["a"])(a,"loginLan",function(){return this.$t("login")}),Object(c["a"])(a,"logoutLan",function(){return this.$t("logout")}),Object(c["a"])(a,"lang",function(){return this.$store.state.lang}),a),components:{QrcodeVue:v["a"]}},b=p,_=(n("99d4"),n("2877")),y=Object(_["a"])(b,o,i,!1,null,null,null);y.options.__file="body.vue";e["default"]=y.exports},2:function(t,e){},3:function(t,e){},"38c8":function(t,e,n){},4:function(t,e){},"42a5":function(t,e,n){"use strict";n("cadf"),n("551c"),n("097d");var s=n("2b0e");e["a"]=new s["default"]},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d");var s=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{attrs:{id:"app"}},[n("dice-body")],1)},o=[],i=(new Promise(function(t){document.addEventListener("scatterLoaded",t)}),{mounted:function(){},components:{diceHeader:n("71c2").default,diceBody:n("184e").default}}),c=i,r=(n("034f"),n("2877")),l=Object(r["a"])(c,a,o,!1,null,null,null);l.options.__file="App.vue";var u=l.exports,d=(n("386d"),n("4917"),n("3b2b"),function(t,e){t.prototype.$lan=function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):"cn"}}),h=n("5c96"),f=n.n(h),g=(n("7f7f"),n("6b54"),n("2f62"));s["default"].use(g["a"]);var m=new g["a"].Store({state:{account:{},lang:"cn"},mutations:{UPDATE_ACCOUNT:function(t,e){t.account=e,t.account.name=e.name.toString()}}}),v=n("ecee"),p=n("c074"),b=n("7a55"),_=n("42b9"),y=n("a925"),C={login:"LOGIN",logout:"LOGOUT",login_success:"Welcome Back",copy_success:"copy success",body:{buy:"Buy",sell:"Sell",myaddress:"Receiving Address",coinname:"Currency",buyintro:"Send BTC to this address to swap the same amount of EBTC.",getaddress:"Get Address",copy:"Copy",histroytitle:"Order History",statefinish:"Finish",staterun:"Requesting",money:"deal amount",id:"id",payAddress:"My Account",mymoney:"My Account Balance",btn:"Submit",choose:"Select",payMoney:"Input the Amount to Swap",intro1:"Invalid BTC address",intro2:"Insufficient balance; please reset.",intro3:"The minimum amount 0.001EBTC",intro4:"Receiving address is missing",intro5:"Upon successful transfer, BTC will be sent to your receiving address after a while"}},w=C,k={login:" 登陆 ",logout:" 登出 ",login_success:"登入成功",copy_success:"复制成功",body:{buy:"买入",sell:"卖出",myaddress:"收款地址",coinname:"兑转币种",buyintro:"发送BTC到下面地址即可兑换出对应数量的EBTC",getaddress:"获取地址",copy:"复制",histroytitle:"历史订单",statefinish:"已完成",staterun:"处理中",money:"交易金额",id:"交易id",payAddress:"付款账户",mymoney:"余额",btn:"提交",choose:"请选择",payMoney:"兑换数额",intro1:"btc地址不合法",intro2:"您的余额不足，请充值",intro3:"金额不能小于0.001EBTC",intro4:"收币地址不能为空",intro5:"发币成功，稍后会将BTC转入您的收款地址"}},S=k,O={en:w,cn:S};function $(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):"cn"}s["default"].use(y["a"]);var T=$("lang");console.log(T);var E=new y["a"]({locale:T,fallbackLocale:T,messages:O}),x=E,A=n("4eb5"),B=n.n(A),L=(n("f5df"),n("450d"),n("a7cc"),n("915d"),n("0fb7"),n("46a1"),n("e05f"),n("0fae"),n("38c8"),n("76b0")),j=n.n(L),N=n("876a"),U=n.n(N);j.a.plugins(new U.a),v["library"].add(p["a"],_["a"]),s["default"].use(B.a),s["default"].use(d),s["default"].use(f.a),s["default"].config.productionTip=!1,s["default"].component("font-awesome-icon",b["FontAwesomeIcon"]),new s["default"]({store:m,i18n:x,render:function(t){return t(u)}}).$mount("#app")},"5b1e":function(t,e,n){},"71c2":function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("nav",{staticClass:"navbar-fixed"},[s("div",{staticClass:"bx f"},[s("h1",["cn"==t.lang?s("img",{attrs:{src:n("b49f")}}):t._e(),"en"==t.lang?s("img",{staticStyle:{height:"30px"},attrs:{src:n("b49f")}}):t._e()]),s("ul",{staticClass:"f nav hidden-xs-only"},[s("li",["en"==t.language?s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[s("img",{staticClass:"lan-img",attrs:{src:""}})]):s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[s("img",{staticClass:"lan-img",attrs:{src:""}})])]),s("li",[t.account.name?s("div",{staticClass:"account-cell",attrs:{href:"JavaScript:;"}},[s("span",[t._v(t._s(t.account.name))]),s("font-awesome-icon",{staticClass:"icon-logout",attrs:{icon:"sign-out-alt"},on:{click:t.logout}})],1):s("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])]),s("div",{staticClass:"mobile-nav hidden-sm-and-up"},[t.account.name?s("span",{staticClass:"login-name"},[t._v(t._s(t.account.name))]):s("span",{staticClass:"login-name",on:{click:t.login}},[t._v(t._s(t.loginLan))]),s("div",{staticClass:"three col"},[s("div",{class:t.navbar?"hamburger is-active":"hamburger",on:{click:function(e){return e.stopPropagation(),t.menuClick(e)}}},[s("span",{staticClass:"line"}),s("span",{staticClass:"line"}),s("span",{staticClass:"line"})])])])])]),s("transition",{attrs:{name:"fade"}},[t.navbar?s("div",{staticClass:"meun-mobile hidden-sm-and-up"},[s("ul",[s("li",["en"==t.language?s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("cn")}}},[t._v("中文")]):s("a",{attrs:{href:"JavaScript:;"},on:{click:function(e){t.changeLan("en")}}},[t._v("English")])]),s("li",[t.account.name?s("a",{attrs:{href:"JavaScript:;"},on:{click:t.logout}},[t._v(t._s(t.logoutLan))]):s("a",{attrs:{href:"JavaScript:;"},on:{click:t.login}},[t._v(t._s(t.loginLan))])])])]):t._e()])],1)},a=[],o=(n("7514"),n("386d"),n("4917"),n("3b2b"),n("cadf"),n("551c"),n("097d"),n("c290")),i=n("42a5"),c={methods:{changeLan:function(t){this.navbar=!1,this.$i18n.locale=t,this.language=t,this.$store.state.lang=t},menuClick:function(){this.navbar=!this.navbar},getQueryString:function(t){var e=new RegExp("(^|&)"+t+"=([^&]*)(&|$)","i"),n=window.location.search.substr(1).match(e);return null!=n?unescape(n[2]):null},login:function(){var t=this;this.navbar=!1,window.frames.length!=parent.frames.length?(window.parent.postMessage({msgName:"getUserInfo"},"*"),window.addEventListener("message",function(e){var n=JSON.parse(e.data);"eventUserInfo"===n.msgName&&(t.$store.commit("UPDATE_ACCOUNT",n.body),t.$message({showClose:!0,message:t.$t("login_success"),type:"success",duration:1500}))})):scatter.getIdentity({accounts:[o["a"]]}).then(function(){var e=scatter.identity.accounts.find(function(t){return"eos"===t.blockchain});e&&(t.$store.commit("UPDATE_ACCOUNT",e),console.log(e))}).catch(function(e){t.$message({showClose:!0,message:e.message,type:"warning",duration:1500})})},logout:function(){var t=this;this.navbar=!1,scatter.forgetIdentity().then(function(){t.$message({showClose:!0,message:t.$t("logout_success"),type:"success",duration:1500}),t.$store.commit("UPDATE_ACCOUNT",{})})},showAbout:function(){this.navbar=!1,i["a"].$emit("SHOW_ABOUT")},showSocial:function(){this.navbar=!1,i["a"].$emit("SHOW_SOCIAL")},showReferrals:function(){this.navbar=!1,i["a"].$emit("SHOW_REFERRALS")},showCustomSeed:function(){this.navbar=!1,i["a"].$emit("SHOW_CUSTOMSEED")}},data:function(){return{navbar:!1,language:"cn"}},computed:{account:function(){return this.$store.state.account},loginLan:function(){return this.$t("login")},logoutLan:function(){return this.$t("logout")},howPlay:function(){return this.$t("how_to_play")},referrals:function(){return this.$t("referrals")},fairness:function(){return this.$t("fairness")},social:function(){return this.$t("social")},lang:function(){return this.$store.state.lang}},mounted:function(){var t=this;this.$i18n.locale=this.$lan("lang"),this.language=this.$lan("lang"),this.$store.state.lang=this.language,i["a"].$on("HIDDEN_MENU",function(){return t.navbar=!1})}},r=c,l=(n("e8f3"),n("2877")),u=Object(l["a"])(r,s,a,!1,null,"edaec9aa",null);u.options.__file="header.vue";e["default"]=u.exports},"99d4":function(t,e,n){"use strict";var s=n("b2c9"),a=n.n(s);a.a},b2c9:function(t,e,n){},b49f:function(t,e,n){t.exports=n.p+"img/icon_dapp@3x.1f4b83df.png"},c21b:function(t,e,n){},c290:function(t,e,n){"use strict";e["a"]={blockchain:"eos",host:"public.eosinfra.io",port:"443",protocol:"https",chainId:"aca376f206b8fc25a6ed44dbdc66547c36c6c33e3a119ffbeaef943642f0e906"}},e8f3:function(t,e,n){"use strict";var s=n("5b1e"),a=n.n(s);a.a}});
//# sourceMappingURL=app.0077cf9b.js.map