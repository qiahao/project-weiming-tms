webpackJsonp([39],{1090:function(t,e,n){var i=n(10)(n(1241),n(1694),null,null);t.exports=i.exports},1137:function(t,e,n){var i,r,a;!function(o,s){r=[e,n(61),n(150)],i=s,void 0!==(a="function"==typeof i?i.apply(e,r):i)&&(t.exports=a)}(0,function(t,e,n){"use strict";function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var r=i(e),a=i(n),o={data:function(){return{tableParams:{list:[],selectList:[],page:1,pageSize:10,total:0,isCheckBoxClick:!1}}},watch:{},computed:{hasSelect:function(){return!!this.tableParams.selectList.length},tableSelectLength:function(){return this.tableParams.selectList.length},currentPage:function(){return this.tableParams.page},selectedIds:function(){var t=this;return this.tableParams.selectList.map(function(e){return e[t.pk]})}},methods:{loadList:function(){this.$Message.info("请在页面实例重写loadList")},onSearch:function(){this.tableParams.page=1,this.tableParams.selectList=[],this.loadList()},onReset:function(){this.$refs.searchForm&&(this.$refs.searchForm.resetFields(),this.onRangeChange&&"function"==typeof this.onRangeChange&&(this.rangeTime=[],this.onRangeChange([])))},onSelectionChange:function(t){this.tableParams.selectList=(0,a.default)(t),this.tableParams.isCheckBoxClick=!0},onPageChange:function(t){this.tableParams.page=t,this.tableParams.selectList=[],this.loadList()},onPageSizeChange:function(t){this.tableParams.pageSize=t,this.onSearch()},assignQuery:function(t){return(0,r.default)({page:this.tableParams.page,page_size:this.tableParams.pageSize},t)}}};t.default=o})},1138:function(t,e,n){"use strict";e.__esModule=!0;var i=n(154),r=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=function(t){return function(){var e=t.apply(this,arguments);return new r.default(function(t,n){function i(a,o){try{var s=e[a](o),c=s.value}catch(t){return void n(t)}if(!s.done)return r.default.resolve(c).then(function(t){i("next",t)},function(t){i("throw",t)});t(c)}return i("next")})}}},1139:function(t,e,n){t.exports=n(1148)},1148:function(t,e,n){var i=function(){return this}()||Function("return this")(),r=i.regeneratorRuntime&&Object.getOwnPropertyNames(i).indexOf("regeneratorRuntime")>=0,a=r&&i.regeneratorRuntime;if(i.regeneratorRuntime=void 0,t.exports=n(1149),r)i.regeneratorRuntime=a;else try{delete i.regeneratorRuntime}catch(t){i.regeneratorRuntime=void 0}},1149:function(t,e){!function(e){"use strict";function n(t,e,n,i){var a=e&&e.prototype instanceof r?e:r,o=Object.create(a.prototype),s=new d(i||[]);return o._invoke=l(t,n,s),o}function i(t,e,n){try{return{type:"normal",arg:t.call(e,n)}}catch(t){return{type:"throw",arg:t}}}function r(){}function a(){}function o(){}function s(t){["next","throw","return"].forEach(function(e){t[e]=function(t){return this._invoke(e,t)}})}function c(t){function e(n,r,a,o){var s=i(t[n],t,r);if("throw"!==s.type){var c=s.arg,l=c.value;return l&&"object"==typeof l&&_.call(l,"__await")?Promise.resolve(l.__await).then(function(t){e("next",t,a,o)},function(t){e("throw",t,a,o)}):Promise.resolve(l).then(function(t){c.value=t,a(c)},o)}o(s.arg)}function n(t,n){function i(){return new Promise(function(i,r){e(t,n,i,r)})}return r=r?r.then(i,i):i()}var r;this._invoke=n}function l(t,e,n){var r=L;return function(a,o){if(r===R)throw new Error("Generator is already running");if(r===E){if("throw"===a)throw o;return y()}for(n.method=a,n.arg=o;;){var s=n.delegate;if(s){var c=u(s,n);if(c){if(c===O)continue;return c}}if("next"===n.method)n.sent=n._sent=n.arg;else if("throw"===n.method){if(r===L)throw r=E,n.arg;n.dispatchException(n.arg)}else"return"===n.method&&n.abrupt("return",n.arg);r=R;var l=i(t,e,n);if("normal"===l.type){if(r=n.done?E:P,l.arg===O)continue;return{value:l.arg,done:n.done}}"throw"===l.type&&(r=E,n.method="throw",n.arg=l.arg)}}}function u(t,e){var n=t.iterator[e.method];if(n===v){if(e.delegate=null,"throw"===e.method){if(t.iterator.return&&(e.method="return",e.arg=v,u(t,e),"throw"===e.method))return O;e.method="throw",e.arg=new TypeError("The iterator does not provide a 'throw' method")}return O}var r=i(n,t.iterator,e.arg);if("throw"===r.type)return e.method="throw",e.arg=r.arg,e.delegate=null,O;var a=r.arg;return a?a.done?(e[t.resultName]=a.value,e.next=t.nextLoc,"return"!==e.method&&(e.method="next",e.arg=v),e.delegate=null,O):a:(e.method="throw",e.arg=new TypeError("iterator result is not an object"),e.delegate=null,O)}function f(t){var e={tryLoc:t[0]};1 in t&&(e.catchLoc=t[1]),2 in t&&(e.finallyLoc=t[2],e.afterLoc=t[3]),this.tryEntries.push(e)}function h(t){var e=t.completion||{};e.type="normal",delete e.arg,t.completion=e}function d(t){this.tryEntries=[{tryLoc:"root"}],t.forEach(f,this),this.reset(!0)}function p(t){if(t){var e=t[b];if(e)return e.call(t);if("function"==typeof t.next)return t;if(!isNaN(t.length)){var n=-1,i=function e(){for(;++n<t.length;)if(_.call(t,n))return e.value=t[n],e.done=!1,e;return e.value=v,e.done=!0,e};return i.next=i}}return{next:y}}function y(){return{value:v,done:!0}}var v,m=Object.prototype,_=m.hasOwnProperty,g="function"==typeof Symbol?Symbol:{},b=g.iterator||"@@iterator",w=g.asyncIterator||"@@asyncIterator",k=g.toStringTag||"@@toStringTag",x="object"==typeof t,C=e.regeneratorRuntime;if(C)return void(x&&(t.exports=C));C=e.regeneratorRuntime=x?t.exports:{},C.wrap=n;var L="suspendedStart",P="suspendedYield",R="executing",E="completed",O={},S={};S[b]=function(){return this};var M=Object.getPrototypeOf,j=M&&M(M(p([])));j&&j!==m&&_.call(j,b)&&(S=j);var $=o.prototype=r.prototype=Object.create(S);a.prototype=$.constructor=o,o.constructor=a,o[k]=a.displayName="GeneratorFunction",C.isGeneratorFunction=function(t){var e="function"==typeof t&&t.constructor;return!!e&&(e===a||"GeneratorFunction"===(e.displayName||e.name))},C.mark=function(t){return Object.setPrototypeOf?Object.setPrototypeOf(t,o):(t.__proto__=o,k in t||(t[k]="GeneratorFunction")),t.prototype=Object.create($),t},C.awrap=function(t){return{__await:t}},s(c.prototype),c.prototype[w]=function(){return this},C.AsyncIterator=c,C.async=function(t,e,i,r){var a=new c(n(t,e,i,r));return C.isGeneratorFunction(e)?a:a.next().then(function(t){return t.done?t.value:a.next()})},s($),$[k]="Generator",$[b]=function(){return this},$.toString=function(){return"[object Generator]"},C.keys=function(t){var e=[];for(var n in t)e.push(n);return e.reverse(),function n(){for(;e.length;){var i=e.pop();if(i in t)return n.value=i,n.done=!1,n}return n.done=!0,n}},C.values=p,d.prototype={constructor:d,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=v,this.done=!1,this.delegate=null,this.method="next",this.arg=v,this.tryEntries.forEach(h),!t)for(var e in this)"t"===e.charAt(0)&&_.call(this,e)&&!isNaN(+e.slice(1))&&(this[e]=v)},stop:function(){this.done=!0;var t=this.tryEntries[0],e=t.completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){function e(e,i){return a.type="throw",a.arg=t,n.next=e,i&&(n.method="next",n.arg=v),!!i}if(this.done)throw t;for(var n=this,i=this.tryEntries.length-1;i>=0;--i){var r=this.tryEntries[i],a=r.completion;if("root"===r.tryLoc)return e("end");if(r.tryLoc<=this.prev){var o=_.call(r,"catchLoc"),s=_.call(r,"finallyLoc");if(o&&s){if(this.prev<r.catchLoc)return e(r.catchLoc,!0);if(this.prev<r.finallyLoc)return e(r.finallyLoc)}else if(o){if(this.prev<r.catchLoc)return e(r.catchLoc,!0)}else{if(!s)throw new Error("try statement without catch or finally");if(this.prev<r.finallyLoc)return e(r.finallyLoc)}}}},abrupt:function(t,e){for(var n=this.tryEntries.length-1;n>=0;--n){var i=this.tryEntries[n];if(i.tryLoc<=this.prev&&_.call(i,"finallyLoc")&&this.prev<i.finallyLoc){var r=i;break}}r&&("break"===t||"continue"===t)&&r.tryLoc<=e&&e<=r.finallyLoc&&(r=null);var a=r?r.completion:{};return a.type=t,a.arg=e,r?(this.method="next",this.next=r.finallyLoc,O):this.complete(a)},complete:function(t,e){if("throw"===t.type)throw t.arg;return"break"===t.type||"continue"===t.type?this.next=t.arg:"return"===t.type?(this.rval=this.arg=t.arg,this.method="return",this.next="end"):"normal"===t.type&&e&&(this.next=e),O},finish:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.finallyLoc===t)return this.complete(n.completion,n.afterLoc),h(n),O}},catch:function(t){for(var e=this.tryEntries.length-1;e>=0;--e){var n=this.tryEntries[e];if(n.tryLoc===t){var i=n.completion;if("throw"===i.type){var r=i.arg;h(n)}return r}}throw new Error("illegal catch attempt")},delegateYield:function(t,e,n){return this.delegate={iterator:p(t),resultName:e,nextLoc:n},"next"===this.method&&(this.arg=v),O}}}(function(){return this}()||Function("return this")())},1169:function(t,e,n){var i,r,a;!function(n,o){r=[e],i=o,void 0!==(a="function"==typeof i?i.apply(e,r):i)&&(t.exports=a)}(0,function(t){"use strict";function e(t){var e=t;return[{type:"selection",width:60,align:"center"},{title:"对账单名称",key:"finance_name",width:150,render:function(t,n){return t("span",{class:"text-link",on:{click:function(){e.handlerRedirectDetail(n.row.finance_id)}}},[n.row.finance_name])}},{title:"核销状态",key:"finance_status",width:80,render:function(t,e){return t("span",a[e.row.finance_status])}},{title:"对账单编号",key:"finance_no",width:160},{title:"对账对象",key:"finance_obj",width:150},{title:"应收金额",key:"finance_income",width:80},{title:"实收金额",key:"finance_income_already",width:80},{title:"未核销金额",key:"finance_income_un",width:80},{title:"应付金额",key:"finance_pay",width:80},{title:"实付金额",key:"finance_pay_already",width:80},{title:"未核销金额",key:"finance_pay_un",width:80},{title:"核销人",key:"create_name",width:150},{title:"生成时间",key:"create_time",width:150},{title:"核销时间",key:"finance_time",width:150}]}function n(t){return[{title:"运单号/车次号",key:"orderno_tripno",width:150},{title:"收付类型",key:"feepay_type",width:150,render:function(t,e){return t("span","0"==e.row.feepay_type?"支出":"收入")}},{title:"费用金额",key:"money",width:150},{title:"费用类型",key:"fee_type",width:150},{title:"对象",key:"pay_object",width:150},{title:"客户名称",key:"partner_name",width:150},{title:"起始地",key:"begin_area",width:150},{title:"目的地",key:"end_area",width:150},{title:"发货人信息",key:"begin_link",width:150},{title:"收货人信息",key:"end_link",width:150},{title:"货物",key:"cargos",width:150,render:function(t,e){return t("span",e.row.cargos.map(function(t){return t.c_name}).join(","))}},{title:"挂账时间",key:"general_time",width:160},{title:"开单时间",key:"order_create_time",width:160}]}function i(t){return[].concat(s)}function r(t){var e=[].concat(s);return e.unshift(o),e}Object.defineProperty(t,"__esModule",{value:!0}),t.getCulomns=e,t.getDetailCulomns=n,t.getVerificationRecordColumns=i,t.getVerificationRecordSelectionColumns=r;var a=t.billStatusMap={N:"未核销",D:"部分核销",Y:"已核销"},o=(t.billStatusMapList=[{status:"",label:"全部"},{status:"N",label:"未核销"},{status:"D",label:"部分核销"},{status:"Y",label:"已核销"}],t.query={finance_status:"",create_time_begin:"",create_time_end:"",keyword:""},t.columnsSeletionType={type:"selection",width:60,align:"center"}),s=t.VerificationColumns=[{title:"核销时间",key:"record_time",width:150},{title:"应收金额",key:"income_all",width:150},{title:"本次应收核销",key:"income_now",width:150},{title:"应付金额",key:"pay_all",width:150},{title:"本次应付核销",key:"pay_now",width:150},{title:"核销人",key:"record_name",width:150},{title:"其他",key:"record_status",width:150,render:function(t,e){return t("span","N"==e.row.record_status?"已反向核销":"")}},{title:"核销备注",key:"record_remark",width:150},{title:"财务记账号",key:"pay_no",width:150}]})},1241:function(t,e,n){var i,r,a;!function(o,s){r=[e,n(1139),n(1138),n(61),n(1137),n(1169)],i=s,void 0!==(a="function"==typeof i?i.apply(e,r):i)&&(t.exports=a)}(0,function(t,e,n,i,r,a){"use strict";function o(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var s=o(e),c=o(n),l=o(i),u=o(r),f=function(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}(a);t.default={name:"financeBillDetail",data:function(){return{bill:{finance_id:"",finance_name:"",finance_no:"",finance_obj:"",finance_status:"",finance_pay:"",finance_pay_already:"",finance_income:"",finance_income_already:"",list:[]},columns:f.getDetailCulomns(this),billStatusMap:(0,l.default)({},f.billStatusMap),modalTitle:"核销记录",modalVisible:!1,verificationType:1,verificationColumns:f.getVerificationRecordColumns(this),verificationRecordColumns:f.getVerificationRecordColumns(this),verificationRecordSelecionColumns:f.getVerificationRecordSelectionColumns(this)}},mixins:[u.default],computed:{billId:function(){return this.$route.params.billId}},watch:{verificationType:function(t){1==t?(this.verificationColumns=this.verificationRecordColumns,this.modalTitle="核销记录"):2==t&&(this.verificationColumns=this.verificationRecordSelecionColumns,this.modalTitle="反向核销")}},methods:{init:function(){this.loadDetail(),this.loadList()},loadDetail:function(){function t(){return e.apply(this,arguments)}var e=(0,c.default)(s.default.mark(function t(){var e;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,this.$api.finance.getBillDetail({finance_id:this.billId}).catch(function(t){return t});case 2:if(e=t.sent,2!=e.result){t.next=5;break}return t.abrupt("return",this.$router.replace({name:"financeBill"}));case 5:this.bill=e.resultObj,this.bill.list.forEach(function(t){t.cargos=JSON.parse(t.cargos||"[]")});case 7:case"end":return t.stop()}},t,this)}));return t}(),handlerBack:function(){this.$router.push({name:"financeBill"})},handlerEdit:function(){this.$router.push({name:"financeBillEdit",params:{billId:this.billId}})},handlerCancel:function(){var t=this;this.$Modal.confirm({title:"作废确认",content:"<p>确定作废该对账单？</p>",onOk:function(){t.$api.finance.cancelBill({finance_ids:t.billId}).then(function(){t.$Message.success("操作成功"),t.$router.replace({name:"financeBill"})})}})},handlerOpenRecord:function(t){this.verificationType=t,this.modalVisible=!0},loadList:function(){function t(){return e.apply(this,arguments)}var e=(0,c.default)(s.default.mark(function t(){var e;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return this.tableParams.selectList=[],t.next=3,this.$api.finance.getVerificationRecord({finance_id:this.billId});case 3:e=t.sent,this.tableParams.list=e.resultObj,this.tableParams.list.forEach(function(t){"N"==t.record_status&&(t._disabled=!0)});case 6:case"end":return t.stop()}},t,this)}));return t}(),hanlderModalCancel:function(){this.modalVisible=!1},hanlderModalOk:function(){function t(){return e.apply(this,arguments)}var e=(0,c.default)(s.default.mark(function t(){var e,n;return s.default.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:if(2!=this.verificationType){t.next=18;break}if(e=this.tableParams.selectList.length){t.next=6;break}return t.abrupt("return",this.$Message.warning("请选择反向核销记录"));case 6:if(!(e>1)){t.next=10;break}return t.abrupt("return",this.$Message.warning("单次只能反向核销一条记录"));case 10:return n={finance_id:this.billId,record_ids:this.tableParams.selectList[0].record_id},t.next=13,this.$api.finance.updateVerificationBack(n);case 13:this.$Message.success("操作成功"),this.init(),this.hanlderModalCancel();case 16:t.next=19;break;case 18:this.hanlderModalCancel();case 19:case"end":return t.stop()}},t,this)}));return t}()},created:function(){this.init()}}})},1694:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"contain-head cf"},[n("i-button",{staticClass:"mr5",attrs:{type:"primary",icon:"ios-arrow-left"},on:{click:t.handlerBack}},[t._v("返回")]),t._v(" "),n("h3",{staticClass:"dib"},[t._v("对账单详情")]),t._v(" "),n("div",{staticClass:"fr"},["N"==t.bill.finance_status?n("i-button",{attrs:{type:"primary"},on:{click:t.handlerEdit}},[t._v("编辑")]):t._e(),t._v(" "),n("i-button",{attrs:{type:"error"},on:{click:t.handlerCancel}},[t._v("作废")]),t._v(" "),n("i-button",{attrs:{type:"primary"},on:{click:function(e){t.handlerOpenRecord(1)}}},[t._v("核销记录")]),t._v(" "),n("i-button",{attrs:{type:"primary"},on:{click:function(e){t.handlerOpenRecord(2)}}},[t._v("反向核销")])],1)],1),t._v(" "),n("div",{staticClass:"contain-main"},[n("div",{staticClass:"row-box row-box-text mb20"},[n("Row",[n("i-col",{attrs:{span:"10"}},[n("div",{staticClass:"ell"},[t._v("对账单名称："+t._s(t.bill.finance_name)+" ")])]),t._v(" "),n("i-col",{attrs:{span:"10"}},[n("div",{staticClass:"ell"},[t._v("对账对象："+t._s(t.bill.finance_obj))])]),t._v(" "),n("i-col",{attrs:{span:"4"}},[n("div",{staticClass:"ell"},[t._v("对账编号："+t._s(t.bill.finance_no))])]),t._v(" "),n("i-col",{attrs:{span:"5"}},[n("div",{staticClass:"ell"},[t._v("核销状态："+t._s(t.billStatusMap[t.bill.finance_status]))])]),t._v(" "),n("i-col",{attrs:{span:"5"}},[n("div",{staticClass:"ell"},[t._v("应付金额："+t._s(t.bill.finance_pay))])]),t._v(" "),n("i-col",{attrs:{span:"5"}},[n("div",{staticClass:"ell"},[t._v("已付金额："+t._s(t.bill.finance_pay_already))])]),t._v(" "),n("i-col",{attrs:{span:"5"}},[n("div",{staticClass:"ell"},[t._v("应收金额："+t._s(t.bill.finance_income))])]),t._v(" "),n("i-col",{attrs:{span:"4"}},[n("div",{staticClass:"ell"},[t._v("已收金额："+t._s(t.bill.finance_income_already))])])],1)],1),t._v(" "),n("i-table",{attrs:{data:t.bill.list,columns:t.columns}})],1),t._v(" "),n("Modal",{attrs:{title:t.modalTitle,width:"800"},model:{value:t.modalVisible,callback:function(e){t.modalVisible=e},expression:"modalVisible"}},[n("div",[n("i-table",{attrs:{data:t.tableParams.list,columns:t.verificationColumns},on:{"on-selection-change":t.onSelectionChange}})],1),t._v(" "),n("div",{staticClass:"cf",attrs:{slot:"footer"},slot:"footer"},[n("div",{directives:[{name:"show",rawName:"v-show",value:2==t.verificationType,expression:"verificationType == 2"}],staticClass:"fr"},[n("i-button",{on:{click:t.hanlderModalCancel}},[t._v("取消")]),t._v(" "),n("i-button",{attrs:{type:"primary"},on:{click:t.hanlderModalOk}},[t._v("确定")])],1)])])],1)},staticRenderFns:[]}}});
//# sourceMappingURL=39.05cdb3e2389ce64924fc.js.map