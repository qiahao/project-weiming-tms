webpackJsonp([32],{1110:function(t,e,a){a(1522),a(1521);var n=a(10)(a(1294),a(1692),"data-v-75e20951",null);t.exports=n.exports},1137:function(t,e,a){var n,i,o;!function(r,s){i=[e,a(61),a(150)],n=s,void 0!==(o="function"==typeof n?n.apply(e,i):n)&&(t.exports=o)}(0,function(t,e,a){"use strict";function n(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var i=n(e),o=n(a),r={data:function(){return{tableParams:{list:[],selectList:[],page:1,pageSize:10,total:0,isCheckBoxClick:!1}}},watch:{},computed:{hasSelect:function(){return!!this.tableParams.selectList.length},tableSelectLength:function(){return this.tableParams.selectList.length},currentPage:function(){return this.tableParams.page},selectedIds:function(){var t=this;return this.tableParams.selectList.map(function(e){return e[t.pk]})}},methods:{loadList:function(){this.$Message.info("请在页面实例重写loadList")},onSearch:function(){this.tableParams.page=1,this.tableParams.selectList=[],this.loadList()},onReset:function(){this.$refs.searchForm&&(this.$refs.searchForm.resetFields(),this.onRangeChange&&"function"==typeof this.onRangeChange&&(this.rangeTime=[],this.onRangeChange([])))},onSelectionChange:function(t){this.tableParams.selectList=(0,o.default)(t),this.tableParams.isCheckBoxClick=!0},onPageChange:function(t){this.tableParams.page=t,this.tableParams.selectList=[],this.loadList()},onPageSizeChange:function(t){this.tableParams.pageSize=t,this.onSearch()},assignQuery:function(t){return(0,i.default)({page:this.tableParams.page,page_size:this.tableParams.pageSize},t)}}};t.default=r})},1172:function(t,e,a){var n,i,o;!function(r,s){i=[e,a(69)],n=s,void 0!==(o="function"==typeof n?n.apply(e,i):n)&&(t.exports=o)}(0,function(t,e){"use strict";function a(t){var e=new Date;return e.setDate(1),e.setMonth(e.getMonth()-t),o(e)}function n(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e,a={"M+":t.getMonth()+1,"d+":t.getDate(),"h+":t.getHours(),"m+":t.getMinutes(),"s+":t.getSeconds(),"q+":Math.floor((t.getMonth()+3)/3),S:t.getMilliseconds()};/(y+)/.test(e)&&(e=e.replace(RegExp.$1,(t.getFullYear()+"").substr(4-RegExp.$1.length)));for(var n in a)new RegExp("("+n+")").test(e)&&(e=e.replace(RegExp.$1,1===RegExp.$1.length?a[n]:("00"+a[n]).substr((""+a[n]).length)));return e}function i(t){var e=t,a=e.getMonth()+1,n=e.getDate();a>=1&&a<=9&&(a="0"+a),n>=0&&n<=9&&(n="0"+n);var i=e.getHours()>=10?e.getHours():"0"+e.getHours(),o=e.getMinutes()>=10?e.getMinutes():"0"+e.getMinutes(),r=e.getSeconds()>=10?e.getSeconds():"0"+e.getSeconds();return e.getFullYear()+"-"+a+"-"+n+" "+i+":"+o+":"+r}function o(t){var e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return a<10&&(a="0"+a),n<10&&(n="0"+n),e+"-"+a+"-"+n}function r(t){var e=new Date(M,t,1);return(new Date(M,t+1,1)-e)/864e5}function s(){var t=0;return A<3&&(t=0),2<A&&A<6&&(t=3),5<A&&A<9&&(t=6),A>8&&(t=9),t}function l(){return o(new Date(M,A,y-v))}function d(){return o(new Date(M,A,y+(6-v)))}function c(){return o(new Date(M,A,1))}function u(){return o(new Date(M,A,r(A)))}function h(){return o(new Date(M,w,1))}function p(){return o(new Date(M,w,r(w)))}function g(){return o(new Date(M,s(),1))}function f(){var t=s()+2;return o(new Date(M,t,r(t)))}Object.defineProperty(t,"__esModule",{value:!0}),t.date=void 0,t.getPreMonthStartDay=a,t.dateFormat=n,t.getDateFormat=i,t.formatDate=o,t.getMonthDays=r,t.getQuarterStartMonth=s,t.getWeekStartDate=l,t.getWeekEndDate=d,t.getMonthStartDate=c,t.getMonthEndDate=u,t.getLastMonthStartDate=h,t.getLastMonthEndDate=p,t.getQuarterStartDate=g,t.getQuarterEndDate=f;var m=function(t){return t&&t.__esModule?t:{default:t}}(e),_=new Date,v=_.getDay(),y=_.getDate(),A=_.getMonth(),M=_.getYear();M+=M<2e3?1900:0;var b=new Date;b.setDate(1),b.setMonth(b.getMonth()-1);var w=(b.getYear(),b.getMonth());t.date=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:e;return t?/^\d+$/.test(t)?n(new Date(t),e):"object"===(void 0===t?"undefined":(0,m.default)(t))&&t.getTime?n(new Date(t.getTime()),e):/date/i.test(t)?n(new Date(t.match(/\d+/)[0]),e):t&&"string"==typeof t&&/\.\d$/.test(t)?n(new Date(t.replace(/\.\d$/,"").replace(/-/g,"/")),e):t:t}})},1294:function(t,e,a){var n,i,o;!function(r,s){i=[e,a(61),a(86),a(1137),a(1358),a(1172)],n=s,void 0!==(o="function"==typeof n?n.apply(e,i):n)&&(t.exports=o)}(0,function(t,e,a,n,i,o){"use strict";function r(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var a in t)Object.prototype.hasOwnProperty.call(t,a)&&(e[a]=t[a]);return e.default=t,e}function s(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(t,"__esModule",{value:!0});var l=s(e),d=s(n),c=r(i),u=r(o);t.default={name:"vehicleProfit",data:function(){return{loading:!0,formModel:{q_condition:"",q_start_time:"",q_end_time:"",page:1,page_size:10},dateTypes:c.dateTypes,dateRange:"",countTotal:0,feeTotal:0,incomeFeeTotal:0,orderFeeTotal:0,orderNumberTotal:0,payArriveTotal:0,tripTotal:0,volumesTotal:0,weightsTotal:0,totalData:[],dateRadio:"0"}},mixins:[d.default],computed:(0,l.default)({},(0,a.mapState)(["userInfo"]),{columns:function(){return c.getCulomns.call(this)},totalColumns:function(){return c.getTotalCulomns.call(this)}}),methods:{loadList:function(){var t=this;this.formModel.page=this.tableParams.page,this.formModel.page_size=this.tableParams.pageSize,this.loading=!0,this.$api.reportApi.queryTripAnalyzeList(this.formModel).then(function(e){t.tableParams.list=e.resultObj.list,t.tableParams.total=parseInt(e.resultObj.total[0].trip_total),t.tableParams.selectList=[],t.totalData=e.resultObj.total,t.loading=!1})},onSearchReset:function(){this.formModel.q_condition="",this.formModel.q_start_time=u.getMonthStartDate(),this.formModel.q_end_time=u.getMonthEndDate(),this.formModel.page=1,this.formModel.page_size=10,this.dateRange="",this.dateRadio="0",this.loadList()},resetRadio:function(){this.dateRadio=""},changeRadio:function(t){switch(this.dateRange="",t){case"1":this.formModel.q_start_time=u.getLastMonthStartDate(),this.formModel.q_end_time=u.getLastMonthEndDate();break;case"3":this.formModel.q_start_time=u.getPreMonthStartDay(2),this.formModel.q_end_time=u.getMonthEndDate();break;default:this.formModel.q_start_time=u.getMonthStartDate(),this.formModel.q_end_time=u.getMonthEndDate()}this.loadList()},exportOrderList:function(){var t=this.formModel;t.company_id=this.userInfo.company_id,t.act_user_id=this.userInfo.user_id,this.$api.reportApi.exportTripAnalyze(t)}},created:function(){this.loadList()},watch:{dateRange:function(t,e){t&&t[0]?(this.formModel.q_start_time=u.formatDate(t[0]),this.formModel.q_end_time=u.formatDate(t[1])):(this.formModel.q_start_time=u.getMonthStartDate(),this.formModel.q_end_time=u.getMonthEndDate())}}}})},1358:function(t,e,a){var n,i,o;!function(a,r){i=[e],n=r,void 0!==(o="function"==typeof n?n.apply(e,i):n)&&(t.exports=o)}(0,function(t){"use strict";function e(){return[{title:"车次号",key:"trip_no",width:170},{title:"发车日期",key:"send_time",width:170},{title:"司机信息",key:"driver_info",width:200},{title:"车牌号",key:"truck_plate",width:100},{title:"车载运单收入",key:"order_fee",width:150},{title:"司机运费支出",key:"fee",width:120},{title:"本车毛利",key:"income_fee",width:100},{title:"车载运单数",key:"order_number",width:100},{title:"车次类型",key:"trip_type",width:150},{title:"落货网点",key:"company_name",width:120},{title:"到付运费",key:"driver_pay_arrive",width:120},{title:"总重量",key:"weights",width:100},{title:"总体积",key:"volumes",width:150},{title:"总件数",key:"count",width:120},{title:"装载率",key:"trip_load",width:120}]}function a(){return[{title:"车次总计",key:"trip_total"},{title:"司机运费支出总计",key:"fee_total",width:180},{title:"本车毛利总计",key:"income_fee_total",width:150},{title:"车载运单收入总计",key:"order_fee_total",width:180},{title:"车载运单数总计",key:"order_number_total",width:150},{title:"到付运费总计",key:"pay_arrive_total",width:150},{title:"件数总计",key:"count_total"},{title:"体积总计",key:"volumes_total"},{title:"重量总计",key:"weights_total"}]}Object.defineProperty(t,"__esModule",{value:!0}),t.getCulomns=e,t.getTotalCulomns=a;t.dateTypes=[{text:"本月",key:"0"},{text:"上月",key:"1"},{text:"最近三月",key:"3"}]})},1433:function(t,e,a){e=t.exports=a(1083)(),e.push([t.i,".middle-line{height:20px;border-right:1px solid #2d8cf0;display:inline;margin:0 5px}","",{version:3,sources:["/Users/ganqiantai/Desktop/gitWork/wm/tms-web/src/components/report/vehicle/vehicle-profit.vue"],names:[],mappings:"AACA,aACE,YAAa,AACb,+BAAgC,AAChC,eAAgB,AAChB,YAAc,CACf",file:"vehicle-profit.vue",sourcesContent:["\n.middle-line {\n  height: 20px;\n  border-right: 1px solid #2d8cf0;\n  display: inline;\n  margin: 0 5px;\n}\n"],sourceRoot:""}])},1434:function(t,e,a){e=t.exports=a(1083)(),e.push([t.i,".contain-head .text-filter[data-v-75e20951]{display:inline-block}.contain-head .text-filter .ivu-input-wrapper[data-v-75e20951]{width:200px;display:inline-block;margin-right:10px}.total-desc[data-v-75e20951]{font-size:15px;margin:5px 0;padding-top:10px}.total-desc span[data-v-75e20951]{display:inline-block;margin-right:30px}","",{version:3,sources:["/Users/ganqiantai/Desktop/gitWork/wm/tms-web/src/components/report/vehicle/vehicle-profit.vue"],names:[],mappings:"AACA,4CACE,oBAAsB,CACvB,AACD,+DACI,YAAa,AACb,qBAAsB,AACtB,iBAAmB,CACtB,AACD,6BACE,eAAgB,AAChB,aAAc,AACd,gBAAkB,CACnB,AACD,kCACI,qBAAsB,AACtB,iBAAmB,CACtB",file:"vehicle-profit.vue",sourcesContent:["\n.contain-head .text-filter[data-v-75e20951] {\n  display: inline-block;\n}\n.contain-head .text-filter .ivu-input-wrapper[data-v-75e20951] {\n    width: 200px;\n    display: inline-block;\n    margin-right: 10px;\n}\n.total-desc[data-v-75e20951] {\n  font-size: 15px;\n  margin: 5px 0;\n  padding-top: 10px;\n}\n.total-desc span[data-v-75e20951] {\n    display: inline-block;\n    margin-right: 30px;\n}\n"],sourceRoot:""}])},1521:function(t,e,a){var n=a(1433);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(1084)("4e665d80",n,!0)},1522:function(t,e,a){var n=a(1434);"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);a(1084)("e648211c",n,!0)},1692:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("div",{staticClass:"contain-head"},[a("Form",{ref:"formInline",attrs:{model:t.formModel,inline:""}},[a("div",[a("FormItem",[a("RadioGroup",{attrs:{type:"button"},on:{"on-change":t.changeRadio},model:{value:t.dateRadio,callback:function(e){t.dateRadio=e},expression:"dateRadio"}},t._l(t.dateTypes,function(e,n){return a("Radio",{key:e.key,attrs:{label:e.key}},[t._v(t._s(e.text))])}))],1),t._v(" "),a("FormItem",[a("date-picker",{staticStyle:{width:"200px"},attrs:{type:"daterange","split-panels":"",placeholder:"发车日期（起）"},on:{"on-change":t.resetRadio},model:{value:t.dateRange,callback:function(e){t.dateRange=e},expression:"dateRange"}})],1),t._v(" "),a("FormItem",[a("i-input",{staticClass:"w230",attrs:{placeholder:"输入司机名称/联系方式/车牌号"},model:{value:t.formModel.q_condition,callback:function(e){t.$set(t.formModel,"q_condition",e)},expression:"formModel.q_condition"}})],1),t._v(" "),a("div",{staticClass:"dib"},[a("i-button",{attrs:{type:"primary"},on:{click:t.onSearch}},[t._v("搜索")]),t._v(" "),a("i-button",{attrs:{type:"warning"},on:{click:t.onSearchReset}},[t._v("重置")]),t._v(" "),a("i-button",{attrs:{type:"warning"},on:{click:t.exportOrderList}},[t._v("导出")])],1)],1)])],1),t._v(" "),a("div",{staticClass:"contain-main"},[a("div",{staticClass:"mb10"},[a("h4",[t._v("总计信息：")]),t._v(" "),a("i-table",{attrs:{columns:t.totalColumns,data:t.totalData,loading:t.loading}})],1),t._v(" "),a("i-table",{attrs:{data:t.tableParams.list,columns:t.columns,loading:t.loading},on:{"on-selection-change":t.onSelectionChange}}),t._v(" "),a("div",{staticClass:"page-wrapper"},[a("Page",{attrs:{total:t.tableParams.total,"show-sizer":"","show-elevator":"",current:t.currentPage},on:{"on-change":t.onPageChange,"on-page-size-change":t.onPageSizeChange}})],1)],1),t._v(" "),a("keep-alive",[a("router-view",{ref:"detail"})],1)],1)},staticRenderFns:[]}}});
//# sourceMappingURL=32.badf6d286b4780c91395.js.map