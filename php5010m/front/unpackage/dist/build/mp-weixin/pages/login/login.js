(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/login/login"],{"0ae1":function(e,t,n){"use strict";n.r(t);var o=n("c6ee"),a=n.n(o);for(var i in o)"default"!==i&&function(e){n.d(t,e,(function(){return o[e]}))}(i);t["default"]=a.a},"108e":function(e,t,n){"use strict";(function(e){n("1bf7");o(n("66fd"));var t=o(n("388b"));function o(e){return e&&e.__esModule?e:{default:e}}e(t.default)}).call(this,n("543d")["createPage"])},"1afe":function(e,t,n){"use strict";var o;n.d(t,"b",(function(){return a})),n.d(t,"c",(function(){return i})),n.d(t,"a",(function(){return o}));var a=function(){var e=this,t=e.$createElement;e._self._c},i=[]},"388b":function(e,t,n){"use strict";n.r(t);var o=n("1afe"),a=n("0ae1");for(var i in a)"default"!==i&&function(e){n.d(t,e,(function(){return a[e]}))}(i);n("48ce"),n("8d52");var r,u=n("f0c5"),s=Object(u["a"])(a["default"],o["b"],o["c"],!1,null,"4fe64e19",null,!1,o["a"],r);t["default"]=s.exports},"48ce":function(e,t,n){"use strict";var o=n("c3a2"),a=n.n(o);a.a},"856a":function(e,t,n){},"8d52":function(e,t,n){"use strict";var o=n("856a"),a=n.n(o);a.a},c3a2:function(e,t,n){},c6ee:function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=i(n("a34a")),a=i(n("282a"));function i(e){return e&&e.__esModule?e:{default:e}}function r(e,t,n,o,a,i,r){try{var u=e[i](r),s=u.value}catch(c){return void n(c)}u.done?t(s):Promise.resolve(s).then(o,a)}function u(e){return function(){var t=this,n=arguments;return new Promise((function(o,a){var i=e.apply(t,n);function u(e){r(i,o,a,u,s,"next",e)}function s(e){r(i,o,a,u,s,"throw",e)}u(void 0)}))}}var s={data:function(){return{username:"",password:"",codes:[{num:1,color:"#000",rotate:"10deg",size:"16px"},{num:2,color:"#000",rotate:"10deg",size:"16px"},{num:3,color:"#000",rotate:"10deg",size:"16px"},{num:4,color:"#000",rotate:"10deg",size:"16px"}],options:["请选择登录用户类型"],optionsValues:["","yonghu"],index:0,roleNum:0}},onLoad:function(){var e=["请选择登录用户类型"],t=a.default.list();this.menuList=t;for(var n=0;n<this.menuList.length;n++)"是"==this.menuList[n].hasFrontLogin&&(e.push(this.menuList[n].roleName),this.roleNum++);1==this.roleNum&&(this.index=1),this.options=e,this.styleChange()},methods:{styleChange:function(){this.$nextTick((function(){}))},onRegisterTap:function(t){e.setStorageSync("loginTable",t),this.$utils.jump("../register/register")},onForgetTap:function(){this.$utils.jump("../forget/forget")},onLoginTap:function(){var t=this;return u(o.default.mark((function n(){var a;return o.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(t.optionsValues[t.index]){n.next=3;break}return t.$utils.msg("请选择登陆用户类型"),n.abrupt("return");case 3:return n.next=5,t.$api.login("".concat(t.optionsValues[t.index]),{username:t.username,password:t.password});case 5:return a=n.sent,e.removeStorageSync("useridTag"),e.setStorageSync("token",a.token),e.setStorageSync("nickname",t.username),e.setStorageSync("nowTable","".concat(t.optionsValues[t.index])),n.next=12,t.$api.session("".concat(t.optionsValues[t.index]));case 12:a=n.sent,e.setStorageSync("userid",a.data.id),a.data.vip&&e.setStorageSync("vip",a.data.vip),e.setStorageSync("role","".concat(t.options[t.index])),t.$utils.tab("../index/index");case 17:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value}}};t.default=s}).call(this,n("543d")["default"])}},[["108e","common/runtime","common/vendor"]]]);