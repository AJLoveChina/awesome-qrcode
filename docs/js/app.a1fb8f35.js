(function(t){function e(e){for(var i,o,s=e[0],c=e[1],l=e[2],d=0,p=[];d<s.length;d++)o=s[d],a[o]&&p.push(a[o][0]),a[o]=0;for(i in c)Object.prototype.hasOwnProperty.call(c,i)&&(t[i]=c[i]);u&&u(e);while(p.length)p.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],i=!0,s=1;s<n.length;s++){var c=n[s];0!==a[c]&&(i=!1)}i&&(r.splice(e--,1),t=o(o.s=n[0]))}return t}var i={},a={app:0},r=[];function o(e){if(i[e])return i[e].exports;var n=i[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,o),n.l=!0,n.exports}o.m=t,o.c=i,o.d=function(t,e,n){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)o.d(n,i,function(e){return t[e]}.bind(null,i));return n},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var s=window["webpackJsonp"]=window["webpackJsonp"]||[],c=s.push.bind(s);s.push=e,s=s.slice();for(var l=0;l<s.length;l++)e(s[l]);var u=c;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("cd49")},"0d0c":function(t,e,n){"use strict";var i=n("446a"),a=n.n(i);a.a},"3ca7":function(t,e,n){},"446a":function(t,e,n){},"5c48":function(t,e,n){},"7c01":function(t,e,n){"use strict";var i=n("3ca7"),a=n.n(i);a.a},"7c55":function(t,e,n){"use strict";var i=n("5c48"),a=n.n(i);a.a},"90c8":function(t,e,n){"use strict";var i=n("e28e"),a=n.n(i);a.a},"9f2c":function(t,e,n){t.exports=n.p+"img/me.711d95da.png"},cd49:function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("f751"),n("097d");var i=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("HelloWorld",{attrs:{msg:"Welcome to Your Vue.js + TypeScript App"}})],1)},r=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"hello"},[n("top"),n("GenerateQR")],1)},s=[];function c(){return new Promise((function(t,e){var n=setInterval((function(){window.eventUtil&&(clearInterval(n),t(window.eventUtil))}),200)}))}function l(t){return new Promise((function(e,n){setTimeout((function(){e(!0)}),t)}))}var u=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{directives:[{name:"loading",rawName:"v-loading",value:!t.QR,expression:"!QR"}],staticStyle:{padding:"0 10px"}},[n("el-steps",{staticStyle:{margin:"10px"},attrs:{active:t.active,"finish-status":"success"}},t._l(t.steps,(function(t){return n("el-step",{attrs:{title:t}})})),1),0===t.active?n("div",[n("el-alert",{staticClass:"title-alert",attrs:{closable:!1,center:"",title:"输入URL/文字",type:"info"}}),n("el-row",[n("el-col",{attrs:{span:24}},[n("el-input",{attrs:{placeholder:"请输入URL地址或者文字或者任何字符都可以"},model:{value:t.inputContent,callback:function(e){t.inputContent=e},expression:"inputContent"}})],1)],1),n("PreNext",{attrs:{index:t.active,total:t.steps.length},on:{prev:t.prev,next:t.next}})],1):t._e(),n("div",{directives:[{name:"show",rawName:"v-show",value:1===t.active,expression:"active === 1"}]},[n("el-alert",{staticClass:"title-alert",attrs:{closable:!1,center:"",title:"选择图片",type:"info"}}),n("p",{staticClass:"small title center"},[t._v("选择一张背景图片，您也可以不选择")]),n("input",{ref:"fileInput",attrs:{type:"file"},on:{change:t.listenFileInput}}),n("PreNext",{attrs:{index:t.active,total:t.steps.length},on:{prev:t.prev,next:t.next}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:2===t.active,expression:"active === 2"}]},[n("el-alert",{staticClass:"title-alert",attrs:{closable:!1,center:"",title:"修改Tip文字",type:"info"}}),n("el-input",{attrs:{type:"textarea"},model:{value:t.tip,callback:function(e){t.tip=e},expression:"tip"}}),n("PreNext",{attrs:{index:t.active,total:t.steps.length},on:{prev:t.prev,next:t.next}})],1),n("div",{directives:[{name:"show",rawName:"v-show",value:3===t.active,expression:"active === 3"}]},[n("el-button",{attrs:{type:"success"},on:{click:t.download}},[t._v("下载")]),t.realimg?n("h6",{staticStyle:{"text-align":"center"}},[t._v("\n            如果没有自动下载,请长按图片或者鼠标右键下载 "),n("br"),t._v("\n            如果生成图片有问题，请多点几次（超过三次仍然有问题可以提问题给我）\n        ")]):t._e(),n("div",{ref:"realimg",staticClass:"realimg"}),n("PreNext",{attrs:{index:t.active,total:t.steps.length},on:{prev:t.prev,next:t.next}})],1),n("el-alert",{staticClass:"title-alert",attrs:{closable:!1,center:"",title:"实时阅览",type:"success"}}),t.inputContent?t._e():n("div",{staticStyle:{"text-align":"center","font-size":"12px",padding:"10px"}},[t._v("无预览(请输入文字)")]),n("div",{attrs:{id:"final-container"}},[n("div",{ref:"qrcode",attrs:{id:"qrcode"}}),n("div",{staticClass:"one-single-line"}),n("div",{staticClass:"icon-container"},[n("div",{staticClass:"icon"},[t._v(t._s(t.icon))])]),n("p",{staticClass:"tip",domProps:{innerHTML:t._s(t.tipResolve)}})]),n("bottom")],1)},d=[],p=(n("a481"),n("9ab4")),v=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticStyle:{margin:"10px","text-align":"center"}},[n("el-row",[n("el-col",{attrs:{span:24}},[n("el-button",{attrs:{type:"primary",disabled:t.index<=0},on:{click:function(e){return t.$emit("prev")}}},[t._v("上一步")]),n("el-button",{attrs:{type:"primary",disabled:t.index>=t.total-1},on:{click:function(e){return t.$emit("next")}}},[t._v("下一步")])],1)],1)],1)},f=[],m={name:"PreNext",props:["index","total"],data:function(){return{}},components:{},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},h=m,g=n("2877"),b=Object(g["a"])(h,v,f,!1,null,null,null),x=b.exports,_=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},w=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"bottom"},[i("div",{staticClass:"copyright"},[i("div",[t._v("🎁 2019\n            "),i("a",{attrs:{href:"https://zhihu.com/people/AJLoveChina",target:"_blank"}},[t._v("👦 霸都丶傲天")]),t._v(" &\n            "),i("a",{attrs:{href:"https://www.zhihu.com/people/tian-bian-de-ai-55",target:"_blank"}},[t._v("👧 Lw Mao")]),t._v(" | Made with ❤︎")]),i("div",[t._v("基于知名的awesome-qr开源库二次开发")]),i("div",[t._v("本项目中所有的unicode图案来自 "),i("a",{attrs:{href:"https://ajlovechina.github.io/awesome-unicode-symbol/index.html",target:"_blank"}},[t._v("Unicode漂亮图案大全")])])]),i("div",{attrs:{id:"zuozhe"}},[i("p",[t._v("作者：霸都丶傲天")]),i("p",[t._v("您可以在下面站点找到我")]),i("ul",[i("li",[i("a",{attrs:{href:"https://zhihu.com/people/AJLoveChina",target:"_blank"}},[t._v("知乎@霸都丶傲天")])]),i("li",[i("a",{attrs:{href:"https://github.com/AJLoveChina",target:"_blank"}},[t._v("Github@霸都丶傲天")])])]),i("img",{staticClass:"me-img",attrs:{src:n("9f2c"),alt:""}})]),i("div",{staticClass:"end"},[t._v("\n        -- Bye：） --\n    ")])])}],y={name:"bottom",data:function(){return{}},components:{},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},C=y,j=(n("7c01"),Object(g["a"])(C,_,w,!1,null,"4cd14817",null)),O=j.exports,R={name:"GenerateQR",data:function(){return{QR:null,active:0,steps:["文字","图片","Tip","下载"],inputContent:"",imgData:null,tip:"这是tip文字,您可以修改的",icon:"💖",realimg:null}},components:{PreNext:x,bottom:O},computed:{tipResolve:function(){var t=this.tip;return t?(t=t.replace(/[\r\n]/g,"<br>"),t):t}},created:function(){},mounted:function(){var t=this;c().then((function(e){t.QR=e,t.render()}))},watch:{inputContent:function(t){this.render()},imgData:function(t){this.render()}},methods:{buildImgElementFromCanvas:function(t){return new Promise((function(e,n){var i=document.createElement("img");i.src=t.toDataURL(),i.onload=function(){e(i)},i.onerror=function(){e(null)}}))},download:function(){var t=this,e=window["html2canvas"];e(document.getElementById("final-container")).then((function(e){t.buildImgElementFromCanvas(e).then((function(e){e&&(e.width=200,t.$refs.realimg.innerHTML="",t.$refs.realimg.appendChild(e),t.realimg=e)}));var n=document.createElement("a");n.download="awesome-qrcode.png",n.href=e.toDataURL(),document.body.appendChild(n),n.click(),n.remove()}))},render:function(){return p["a"](this,void 0,void 0,(function(){var t;return p["b"](this,(function(e){switch(e.label){case 0:return[4,l(400)];case 1:return e.sent(),t=this.$refs.qrcode.getBoundingClientRect().width,this.$refs.qrcode.style.height=t+"px",this.QR.create({text:this.inputContent,size:800,margin:20,backgroundImage:this.imgData||void 0,bindElement:"qrcode"}),[2]}}))}))},listenFileInput:function(t){var e=this;if(t.target.files[0]){var n=new Image;n.onload=function(){e.imgData=n},n.src=URL.createObjectURL(t.target.files[0])}else this.imgData=null},prev:function(){this.active--},next:function(){this.active++}}},P=R,k=(n("0d0c"),Object(g["a"])(P,u,d,!1,null,"f421733e",null)),$=k.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("el-menu",{staticClass:"el-menu-demo",attrs:{mode:"horizontal"}},[n("el-menu-item",{attrs:{index:"1"}},[n("span",{staticClass:"item"},[t._v("😜漂亮的二维码")])]),n("el-menu-item",{attrs:{index:"2"}},[n("a",{staticClass:"item",attrs:{href:"#zuozhe"}},[t._v("🙈作者")])])],1)],1)},L=[],S={name:"top",data:function(){return{}},components:{},computed:{},watch:{},created:function(){},mounted:function(){},methods:{}},I=S,z=(n("90c8"),Object(g["a"])(I,E,L,!1,null,"0d1808f1",null)),N=z.exports,T=i["default"].extend({name:"HelloWorld",props:{msg:String},components:{GenerateQR:$,top:N},mounted:function(){c().then((function(t){var e=new Image;e.crossOrigin="Anonymous",e.onload=function(){},e.src="https://avatars3.githubusercontent.com/u/5277268?s=460&v=4"}))}}),U=T,M=Object(g["a"])(U,o,s,!1,null,"15833690",null),Q=M.exports,q=i["default"].extend({name:"app",components:{HelloWorld:Q}}),D=q,A=(n("7c55"),Object(g["a"])(D,a,r,!1,null,null,null)),H=A.exports,J=n("5c96"),F=n.n(J);n("0fae");i["default"].config.productionTip=!1,i["default"].use(F.a),new i["default"]({render:function(t){return t(H)}}).$mount("#app")},e28e:function(t,e,n){}});
//# sourceMappingURL=app.a1fb8f35.js.map