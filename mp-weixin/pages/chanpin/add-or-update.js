(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/chanpin/add-or-update"],{"122a":function(n,e,t){"use strict";t.r(e);var r=t("d9a5"),i=t.n(r);for(var a in r)"default"!==a&&function(n){t.d(e,n,(function(){return r[n]}))}(a);e["default"]=i.a},"4ab2":function(n,e,t){"use strict";t.r(e);var r=t("b649"),i=t("122a");for(var a in i)"default"!==a&&function(n){t.d(e,n,(function(){return i[n]}))}(a);t("e4b9");var c,u=t("f0c5"),o=Object(u["a"])(i["default"],r["b"],r["c"],!1,null,"6262a9b6",null,!1,r["a"],c);e["default"]=o.exports},7688:function(n,e,t){"use strict";(function(n){t("1bf7");r(t("66fd"));var e=r(t("4ab2"));function r(n){return n&&n.__esModule?n:{default:n}}n(e.default)}).call(this,t("543d")["createPage"])},"7dc9":function(n,e,t){},b649:function(n,e,t){"use strict";t.d(e,"b",(function(){return i})),t.d(e,"c",(function(){return a})),t.d(e,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"526f"))}},i=function(){var n=this,e=n.$createElement;n._self._c},a=[]},d9a5:function(n,e,t){"use strict";(function(n){Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var r=i(t("a34a"));function i(n){return n&&n.__esModule?n:{default:n}}function a(n,e,t,r,i,a,c){try{var u=n[a](c),o=u.value}catch(s){return void t(s)}u.done?e(o):Promise.resolve(o).then(r,i)}function c(n){return function(){var e=this,t=arguments;return new Promise((function(r,i){var c=n.apply(e,t);function u(n){a(c,r,i,u,o,"next",n)}function o(n){a(c,r,i,u,o,"throw",n)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("526f"))}.bind(null,t)).catch(t.oe)},o={data:function(){return{cross:"",ruleForm:{chanpinbianhao:this.getUUID(),chanpinmingcheng:"",chanpinfenlei:"",qiyemingcheng:"",fengmian:"",pinpai:"",shengchanriqi:"",chanpinxiangqing:""},chanpinfenleiOptions:[],chanpinfenleiIndex:0,user:{},ro:{chanpinbianhao:!1,chanpinmingcheng:!1,chanpinfenlei:!1,qiyemingcheng:!1,fengmian:!1,pinpai:!1,shengchanriqi:!1,chanpinxiangqing:!1,clicktime:!1,clicknum:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(e){var t=this;return c(r.default.mark((function i(){var a,c,u,o;return r.default.wrap((function(i){while(1)switch(i.prev=i.next){case 0:return t.ruleForm.shengchanriqi=t.$utils.getCurDate(),a=n.getStorageSync("nowTable"),i.next=4,t.$api.session(a);case 4:return c=i.sent,t.user=c.data,i.next=8,t.$api.option("chanpinfenlei","chanpinfenlei",{});case 8:if(c=i.sent,t.chanpinfenleiOptions=c.data,t.ruleForm.userid=n.getStorageSync("userid"),e.refid&&(t.ruleForm.refid=e.refid,t.ruleForm.nickname=n.getStorageSync("nickname")),!e.id){i.next=18;break}return t.ruleForm.id=e.id,i.next=16,t.$api.info("chanpin",t.ruleForm.id);case 16:c=i.sent,t.ruleForm=c.data;case 18:if(t.cross=e.cross,!e.cross){i.next=66;break}u=n.getStorageSync("crossObj"),i.t0=r.default.keys(u);case 22:if((i.t1=i.t0()).done){i.next=66;break}if(o=i.t1.value,"chanpinbianhao"!=o){i.next=28;break}return t.ruleForm.chanpinbianhao=u[o],t.ro.chanpinbianhao=!0,i.abrupt("continue",22);case 28:if("chanpinmingcheng"!=o){i.next=32;break}return t.ruleForm.chanpinmingcheng=u[o],t.ro.chanpinmingcheng=!0,i.abrupt("continue",22);case 32:if("chanpinfenlei"!=o){i.next=36;break}return t.ruleForm.chanpinfenlei=u[o],t.ro.chanpinfenlei=!0,i.abrupt("continue",22);case 36:if("qiyemingcheng"!=o){i.next=40;break}return t.ruleForm.qiyemingcheng=u[o],t.ro.qiyemingcheng=!0,i.abrupt("continue",22);case 40:if("fengmian"!=o){i.next=44;break}return t.ruleForm.fengmian=u[o],t.ro.fengmian=!0,i.abrupt("continue",22);case 44:if("pinpai"!=o){i.next=48;break}return t.ruleForm.pinpai=u[o],t.ro.pinpai=!0,i.abrupt("continue",22);case 48:if("shengchanriqi"!=o){i.next=52;break}return t.ruleForm.shengchanriqi=u[o],t.ro.shengchanriqi=!0,i.abrupt("continue",22);case 52:if("chanpinxiangqing"!=o){i.next=56;break}return t.ruleForm.chanpinxiangqing=u[o],t.ro.chanpinxiangqing=!0,i.abrupt("continue",22);case 56:if("clicktime"!=o){i.next=60;break}return t.ruleForm.clicktime=u[o],t.ro.clicktime=!0,i.abrupt("continue",22);case 60:if("clicknum"!=o){i.next=64;break}return t.ruleForm.clicknum=u[o],t.ro.clicknum=!0,i.abrupt("continue",22);case 64:i.next=22;break;case 66:t.styleChange();case 67:case"end":return i.stop()}}),i)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},shengchanriqiChange:function(n){this.ruleForm.shengchanriqi=n.target.value,this.$forceUpdate()},clicktimeConfirm:function(n){console.log(n),this.ruleForm.clicktime=n.result,this.$forceUpdate()},chanpinfenleiChange:function(n){this.chanpinfenleiIndex=n.target.value,this.ruleForm.chanpinfenlei=this.chanpinfenleiOptions[this.chanpinfenleiIndex]},fengmianTap:function(){var n=this;this.$api.upload((function(e){n.ruleForm.fengmian="upload/"+e.file,n.$forceUpdate(),n.$nextTick((function(){n.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return c(r.default.mark((function t(){var i,a,c,u,o,s,l,f,p,h;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!e.ruleForm.clicknum||e.$validate.isIntNumer(e.ruleForm.clicknum)){t.next=3;break}return e.$utils.msg("点击次数应输入整数"),t.abrupt("return");case 3:if(!e.cross){t.next=19;break}if(u=n.getStorageSync("statusColumnName"),o=n.getStorageSync("statusColumnValue"),""==u){t.next=19;break}if(s=n.getStorageSync("crossObj"),u.startsWith("[")){t.next=15;break}for(l in s)l==u&&(s[l]=o);return f=n.getStorageSync("crossTable"),t.next=13,e.$api.update("".concat(f),s);case 13:t.next=19;break;case 15:i=Number(n.getStorageSync("userid")),a=s["id"],c=n.getStorageSync("statusColumnName"),c=c.replace(/\[/,"").replace(/\]/,"");case 19:if(!a||!i){t.next=41;break}return e.ruleForm.crossuserid=i,e.ruleForm.crossrefid=a,p={page:1,limit:10,crossuserid:i,crossrefid:a},t.next=25,e.$api.list("chanpin",p);case 25:if(h=t.sent,!(h.data.total>=c)){t.next=31;break}return e.$utils.msg(n.getStorageSync("tips")),t.abrupt("return",!1);case 31:if(!e.ruleForm.id){t.next=36;break}return t.next=34,e.$api.update("chanpin",e.ruleForm);case 34:t.next=38;break;case 36:return t.next=38,e.$api.add("chanpin",e.ruleForm);case 38:e.$utils.msgBack("提交成功");case 39:t.next=49;break;case 41:if(!e.ruleForm.id){t.next=46;break}return t.next=44,e.$api.update("chanpin",e.ruleForm);case 44:t.next=48;break;case 46:return t.next=48,e.$api.add("chanpin",e.ruleForm);case 48:e.$utils.msgBack("提交成功");case 49:case"end":return t.stop()}}),t)})))()},optionsChange:function(n){this.index=n.target.value},bindDateChange:function(n){this.date=n.target.value},getDate:function(n){var e=new Date,t=e.getFullYear(),r=e.getMonth()+1,i=e.getDate();return"start"===n?t-=60:"end"===n&&(t+=2),r=r>9?r:"0"+r,i=i>9?i:"0"+i,"".concat(t,"-").concat(r,"-").concat(i)},toggleTab:function(n){this.$refs[n].show()}}};e.default=o}).call(this,t("543d")["default"])},e4b9:function(n,e,t){"use strict";var r=t("7dc9"),i=t.n(r);i.a}},[["7688","common/runtime","common/vendor"]]]);