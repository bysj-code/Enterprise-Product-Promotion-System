(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/taolun/add-or-update"],{"0b69":function(e,n,t){"use strict";var r=t("6bf3"),a=t.n(r);a.a},"24d1":function(e,n,t){"use strict";t.r(n);var r=t("44f7"),a=t("ae72");for(var i in a)"default"!==i&&function(e){t.d(n,e,(function(){return a[e]}))}(i);t("0b69");var o,u=t("f0c5"),c=Object(u["a"])(a["default"],r["b"],r["c"],!1,null,"24e282cb",null,!1,r["a"],o);n["default"]=c.exports},"44f7":function(e,n,t){"use strict";t.d(n,"b",(function(){return a})),t.d(n,"c",(function(){return i})),t.d(n,"a",(function(){return r}));var r={wPicker:function(){return Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(t.bind(null,"526f"))}},a=function(){var e=this,n=e.$createElement;e._self._c},i=[]},"46bd":function(e,n,t){"use strict";(function(e){t("1bf7");r(t("66fd"));var n=r(t("24d1"));function r(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,t("543d")["createPage"])},"6bf3":function(e,n,t){},ae72:function(e,n,t){"use strict";t.r(n);var r=t("e45d"),a=t.n(r);for(var i in r)"default"!==i&&function(e){t.d(n,e,(function(){return r[e]}))}(i);n["default"]=a.a},e45d:function(e,n,t){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var r=a(t("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function i(e,n,t,r,a,i,o){try{var u=e[i](o),c=u.value}catch(s){return void t(s)}u.done?n(c):Promise.resolve(c).then(r,a)}function o(e){return function(){var n=this,t=arguments;return new Promise((function(r,a){var o=e.apply(n,t);function u(e){i(o,r,a,u,c,"next",e)}function c(e){i(o,r,a,u,c,"throw",e)}u(void 0)}))}}var u=function(){Promise.all([t.e("common/vendor"),t.e("components/w-picker/w-picker")]).then(function(){return resolve(t("526f"))}.bind(null,t)).catch(t.oe)},c={data:function(){return{cross:"",ruleForm:{biaoti:"",fengmian:"",neirongmiaoshu:"",fenxianglianjie:"",fenxiangshijian:"",zhanghao:"",xingming:""},user:{},ro:{biaoti:!1,fengmian:!1,neirongmiaoshu:!1,fenxianglianjie:!1,fenxiangshijian:!1,zhanghao:!1,xingming:!1}}},components:{wPicker:u},computed:{baseUrl:function(){return this.$base.url}},onLoad:function(n){var t=this;return o(r.default.mark((function a(){var i,o,u,c;return r.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.ruleForm.fenxiangshijian=t.$utils.getCurDateTime(),i=e.getStorageSync("nowTable"),a.next=4,t.$api.session(i);case 4:if(o=a.sent,t.user=o.data,t.ruleForm.zhanghao=t.user.zhanghao,t.ro.zhanghao=!0,t.ruleForm.xingming=t.user.xingming,t.ro.xingming=!0,t.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(t.ruleForm.refid=n.refid,t.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=18;break}return t.ruleForm.id=n.id,a.next=16,t.$api.info("taolun",t.ruleForm.id);case 16:o=a.sent,t.ruleForm=o.data;case 18:if(t.cross=n.cross,!n.cross){a.next=54;break}u=e.getStorageSync("crossObj"),a.t0=r.default.keys(u);case 22:if((a.t1=a.t0()).done){a.next=54;break}if(c=a.t1.value,"biaoti"!=c){a.next=28;break}return t.ruleForm.biaoti=u[c],t.ro.biaoti=!0,a.abrupt("continue",22);case 28:if("fengmian"!=c){a.next=32;break}return t.ruleForm.fengmian=u[c],t.ro.fengmian=!0,a.abrupt("continue",22);case 32:if("neirongmiaoshu"!=c){a.next=36;break}return t.ruleForm.neirongmiaoshu=u[c],t.ro.neirongmiaoshu=!0,a.abrupt("continue",22);case 36:if("fenxianglianjie"!=c){a.next=40;break}return t.ruleForm.fenxianglianjie=u[c],t.ro.fenxianglianjie=!0,a.abrupt("continue",22);case 40:if("fenxiangshijian"!=c){a.next=44;break}return t.ruleForm.fenxiangshijian=u[c],t.ro.fenxiangshijian=!0,a.abrupt("continue",22);case 44:if("zhanghao"!=c){a.next=48;break}return t.ruleForm.zhanghao=u[c],t.ro.zhanghao=!0,a.abrupt("continue",22);case 48:if("xingming"!=c){a.next=52;break}return t.ruleForm.xingming=u[c],t.ro.xingming=!0,a.abrupt("continue",22);case 52:a.next=22;break;case 54:t.styleChange();case 55:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},fenxiangshijianConfirm:function(e){console.log(e),this.ruleForm.fenxiangshijian=e.result,this.$forceUpdate()},fengmianTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.fengmian="upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var n=this;return o(r.default.mark((function t(){var a,i,o,u,c,s,f,l,g,d;return r.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(n.ruleForm.biaoti){t.next=3;break}return n.$utils.msg("标题不能为空"),t.abrupt("return");case 3:if(n.ruleForm.zhanghao){t.next=6;break}return n.$utils.msg("账号不能为空"),t.abrupt("return");case 6:if(!n.cross){t.next=22;break}if(u=e.getStorageSync("statusColumnName"),c=e.getStorageSync("statusColumnValue"),""==u){t.next=22;break}if(s=e.getStorageSync("crossObj"),u.startsWith("[")){t.next=18;break}for(f in s)f==u&&(s[f]=c);return l=e.getStorageSync("crossTable"),t.next=16,n.$api.update("".concat(l),s);case 16:t.next=22;break;case 18:a=Number(e.getStorageSync("userid")),i=s["id"],o=e.getStorageSync("statusColumnName"),o=o.replace(/\[/,"").replace(/\]/,"");case 22:if(!i||!a){t.next=44;break}return n.ruleForm.crossuserid=a,n.ruleForm.crossrefid=i,g={page:1,limit:10,crossuserid:a,crossrefid:i},t.next=28,n.$api.list("taolun",g);case 28:if(d=t.sent,!(d.data.total>=o)){t.next=34;break}return n.$utils.msg(e.getStorageSync("tips")),t.abrupt("return",!1);case 34:if(!n.ruleForm.id){t.next=39;break}return t.next=37,n.$api.update("taolun",n.ruleForm);case 37:t.next=41;break;case 39:return t.next=41,n.$api.add("taolun",n.ruleForm);case 41:n.$utils.msgBack("提交成功");case 42:t.next=52;break;case 44:if(!n.ruleForm.id){t.next=49;break}return t.next=47,n.$api.update("taolun",n.ruleForm);case 47:t.next=51;break;case 49:return t.next=51,n.$api.add("taolun",n.ruleForm);case 51:n.$utils.msgBack("提交成功");case 52:case"end":return t.stop()}}),t)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,t=n.getFullYear(),r=n.getMonth()+1,a=n.getDate();return"start"===e?t-=60:"end"===e&&(t+=2),r=r>9?r:"0"+r,a=a>9?a:"0"+a,"".concat(t,"-").concat(r,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,t("543d")["default"])}},[["46bd","common/runtime","common/vendor"]]]);