webpackJsonp([1],{NHnr:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=i("7+uW"),a={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var h=i("VU/8")({name:"App"},a,!1,function(t){i("ymcE")},null,null).exports,o=i("/ocq"),s=i("2Pnh"),c=i.n(s),r=i("sbrb"),g=i.n(r),u={data:function(){return{curIndex:0,imgArr:[i("g4v0"),i("g4v0"),i("g4v0")],imgUrl:"",initTouchX:0,initTouchY:0,changeTouchX:0,changeTouchY:0,reviewImgDom:"",lastTouchX:0,lastTouchY:0,previewImg:"",myImg:{position:{x:0,y:0},scale:1,lastScale:1}}},mounted:function(){this.previewImg=document.querySelector("#preview-img"),document.addEventListener("touchstart",function(t){t.touches.length>1&&t.preventDefault()});var t=0;document.addEventListener("touchend",function(e){var i=(new Date).getTime();i-t<=300&&e.preventDefault(),t=i},!1)},methods:{getPhoto:function(){var t=this;document.querySelector("#image-input").addEventListener("change",function(e){var i=new FileReader;i.readAsDataURL(this.files[0]),i.addEventListener("load",function(e){var i;t.imgUrl=this.result,t.myImg.position.x=0,t.myImg.position.y=0,t.myImg.scale=1,t.previewImg.addEventListener("load",function(){g.a.getData(t.previewImg,function(){g.a.getAllTags(this),i=g.a.getTag(this,"Orientation");var e=document.createElement("canvas"),n=e.getContext("2d");switch(i){case 1:e.width=t.previewImg.width,e.height=t.previewImg.height,n.drawImage(t.previewImg,0,0,t.previewImg.width,t.previewImg.height);break;case 6:e.width=t.previewImg.height,e.height=t.previewImg.width,n.translate(0,0),n.rotate(90*Math.PI/180),n.drawImage(t.previewImg,0,-t.previewImg.height,t.previewImg.width,t.previewImg.height);break;case 8:e.width=t.previewImg.height,e.height=t.previewImg.width,n.translate(0,0),n.rotate(-90*Math.PI/180),n.drawImage(t.previewImg,-t.previewImg.width,0,t.previewImg.width,t.previewImg.height);break;case 3:e.width=t.previewImg.width,e.height=t.previewImg.height,n.translate(0,0),n.rotate(Math.PI),n.drawImage(t.previewImg,-t.previewImg.width,-t.previewImg.height,t.previewImg.width,t.previewImg.height);break;default:e.width=t.previewImg.width,e.height=t.previewImg.height,n.drawImage(t.previewImg,0,0,t.previewImg.width,t.previewImg.height)}e.toDataURL("image/jpeg",.5)})})})})},changeIndex:function(t){this.curIndex=t},getInitPosition:function(t){if(event.preventDefault(),this.imgUrl)if(t.touches.length>1){var e=t.touches[0],i=t.touches[1];this.initTouchX=e.clientX-i.clientX,this.initTouchY=e.clientY-i.clientY}else{var n=t.touches[0];this.initTouchX=n.clientX,this.initTouchY=n.clientY}},getMovePosition:function(t){if(event.preventDefault(),this.imgUrl)if(t.touches.length>1){var e=t.touches[0],i=t.touches[1];this.changeTouchX=e.clientX-i.clientX,this.changeTouchY=e.clientY-i.clientY;var n=this.changeTouchX-this.initTouchX>this.changeTouchY-this.initTouchY?this.changeTouchX/this.initTouchX:this.changeTouchY/this.initTouchY;n*=this.myImg.lastScale,this.myImg.scale=n>3?3:n<.5?.5:n}else{var a=t.touches[0];this.changeTouchX=a.clientX-this.initTouchX,this.changeTouchY=a.clientY-this.initTouchY,this.myImg.position.x=this.lastTouchX+this.changeTouchX/this.myImg.scale,this.myImg.position.y=this.lastTouchY+this.changeTouchY/this.myImg.scale}},getLeavePosition:function(t){if(this.myImg.lastScale=this.myImg.scale,t.touches.length>0){var e=t.touches[0];this.initTouchX=e.clientX,this.initTouchY=e.clientY}this.lastTouchX=this.myImg.position.x,this.lastTouchY=this.myImg.position.y},createPhoto:function(){if(this.imgUrl){var t=document.querySelector(".photo-box"),e=t.style.offsetWidth,i=t.style.offsetHeight,n=window.devicePixelRatio,a=this;c()(t,{width:e,height:i,scale:n,useCORS:!0}).then(function(t){var e=t.toDataURL("image/jpg");localStorage.imgData=e,a.$router.push({name:"share",params:{storage:"imgData"}})})}else alert("请上传图片")}}},m={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"index-container"},[i("label",{staticClass:"upload-btn"},[t._v("开始上传或拍照\n    "),i("input",{attrs:{type:"file",value:"",accept:"image/*",id:"image-input"},on:{click:t.getPhoto}})]),t._v(" "),i("div",{staticClass:"photo-box"},[i("div",{staticClass:"preview-box"},[i("img",{style:{transform:"scale("+t.myImg.scale+") translate("+t.myImg.position.x+"px,"+t.myImg.position.y+"px)"},attrs:{src:t.imgUrl,id:"preview-img"},on:{touchstart:function(e){t.getPosition(e)},touchmove:function(e){t.getMovePosition(e)},touchend:function(e){t.getLeavePosition(e)}}})]),t._v(" "),i("img",{attrs:{src:t.imgArr[t.curIndex],id:"preview-bg"},on:{touchstart:function(e){t.getInitPosition(e)},touchmove:function(e){t.getMovePosition(e)},touchend:function(e){t.getLeavePosition(e)}}})]),t._v(" "),i("div",{staticClass:"composite-btn",on:{click:t.createPhoto}},[t._v("合成图片")])])},staticRenderFns:[]};var l=i("VU/8")(u,m,!1,function(t){i("v8Ka")},null,null).exports,v={data:function(){return{shareImgUrl:""}},created:function(){this.shareImgUrl=localStorage[this.$route.params.storage]}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"share-box"},[e("img",{attrs:{src:this.shareImgUrl,alt:""}}),this._v(" "),e("span",[this._v("长按图片保存")])])},staticRenderFns:[]};var d=i("VU/8")(v,p,!1,function(t){i("gDt+")},null,null).exports;n.a.use(o.a);var w=new o.a({routes:[{path:"/",name:"IndexPage",component:l},{path:"share",name:"share",component:d}]});n.a.config.productionTip=!1,new n.a({el:"#app",router:w,components:{App:h},template:"<App/>"})},g4v0:function(t,e,i){t.exports=i.p+"static/img/btc.11f217b.png"},"gDt+":function(t,e){},v8Ka:function(t,e){},ymcE:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.d954f79a28eb666f8098.js.map