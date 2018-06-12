webpackJsonp([31],{1106:function(e,t,r){r(1468);var a=r(10)(r(1288),r(1625),null,null);e.exports=a.exports},1191:function(e,t,r){var a,o,s;!function(i,n){o=[t,r(61),r(86),r(485),r(482),r(1)],a=n,void 0!==(s="function"==typeof a?a.apply(t,o):a)&&(e.exports=s)}(0,function(e,t,r,a,o,s){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(t),c=i(o),l=i(s);e.default={name:"receiptBack",data:function(){return{backForm:{order_id:"",receipt_user:"",receipt_time:"",receipt_remark:"",recipt_date:""},backFormRule:{receipt_user:[c.default.required()],recipt_date:[c.default.required()]}}},props:{value:{type:Boolean,default:!1},selectArray:{type:Array,default:function(){return[]}}},computed:(0,n.default)({},(0,r.mapState)(["userInfo"])),created:function(){var e=this;e.backForm.receipt_user=e.userInfo.user_name,e.backForm.recipt_date=new Date},methods:{backOk:function(){var e=this,t={user_id:e.userInfo.user_id,company_id:e.userInfo.company_id,receipt_user:e.backForm.receipt_user,receipt_time:(0,l.default)(e.backForm.recipt_date).format("YYYY-MM-DD"),receipt_remark:e.backForm.receipt_remark};e.selectArray&&e.selectArray.length?t.order_ids=e.selectArray.join(","):t.order_ids=e.$route.query.id,this.$refs.backForm.validate(function(r){r&&(0,a.orderBackReceiveApi)(t).then(function(t){e.$Message.success(t.resultInfo),e.$emit("call-back"),e.$emit("input",!1)})})},onDateRange:function(e){this.backForm.receipt_time=(0,l.default)(e).format("YYYY-MM-DD")},doCancel:function(){this.$emit("input",!1)}}}})},1192:function(e,t,r){var a,o,s;!function(i,n){o=[t,r(61),r(86),r(485),r(482),r(1)],a=n,void 0!==(s="function"==typeof a?a.apply(t,o):a)&&(e.exports=s)}(0,function(e,t,r,a,o,s){"use strict";function i(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var n=i(t),c=i(o),l=i(s);e.default={data:function(){return{sendForm:{order_id:"",receipt_user:"",receipt_time:"",receipt_remark:"",receipt_type:"0",driver_mobile:"",express_no:"",receipt_date:""},sendFormRule:{receipt_user:[c.default.required()],receipt_time:[c.default.required()],driver_mobile:[c.default.required()],express_no:[c.default.required()]},receiptType:[{value:"0",label:"直接发放"},{value:"1",label:"司机带回"},{value:"2",label:"快递邮寄"}]}},props:{value:{type:Boolean},selectArray:{type:Array,default:function(){return[]}}},computed:(0,n.default)({},(0,r.mapState)(["userInfo"])),created:function(){var e=this;e.sendForm.receipt_user=e.userInfo.user_name},mounted:function(){this.sendForm.receipt_time=(0,l.default)(new Date).format("YYYY-MM-DD")},methods:{sendOk:function(){var e=this;this.$refs.sendForm.validate(function(t){if(t){var r={user_id:e.userInfo.user_id,company_id:e.userInfo.company_id,receipt_user:e.sendForm.receipt_user,receipt_time:e.sendForm.receipt_time,receipt_remark:e.sendForm.receipt_remark,receipt_type:e.sendForm.receipt_type,driver_mobile:e.sendForm.driver_mobile,express_no:e.sendForm.express_no};e.selectArray.length?r.order_ids=e.selectArray.join(","):r.order_ids=e.$route.query.id,(0,a.orderBackSendApi)(r).then(function(t){e.$Message.success(t.resultInfo),e.$emit("call-back"),e.$emit("input",!1)})}})},onDateChange:function(e){this.sendForm.receipt_time=e},doCancel:function(){this.$emit("input",!1)}}}})},1213:function(e,t,r){var a=r(10)(r(1191),r(1219),null,null);e.exports=a.exports},1214:function(e,t,r){var a=r(10)(r(1192),r(1223),null,null);e.exports=a.exports},1219:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Modal",{attrs:{value:e.value,title:"回单回收"},on:{"on-cancel":e.doCancel}},[r("i-form",{ref:"backForm",attrs:{model:e.backForm,rules:e.backFormRule,inline:""}},[r("div",{staticClass:"cf"},[r("Form-item",{staticClass:"fl",attrs:{label:"回收人",prop:"receipt_user"}},[r("i-input",{staticClass:"w140",model:{value:e.backForm.receipt_user,callback:function(t){e.$set(e.backForm,"receipt_user",t)},expression:"backForm.receipt_user"}})],1),e._v(" "),r("Form-item",{staticClass:"fr mr0",attrs:{label:"回收日期",prop:"receipt_time"}},[r("DatePicker",{staticClass:"w170",on:{"on-change":e.onDateRange},model:{value:e.backForm.recipt_date,callback:function(t){e.$set(e.backForm,"recipt_date",t)},expression:"backForm.recipt_date"}})],1)],1),e._v(" "),r("Form-item",{staticClass:"content-block wp100",attrs:{prop:"receipt_remark"}},[r("i-input",{staticClass:"wp100",attrs:{type:"textarea",rows:4,placeholder:"请输入备注信息..."},model:{value:e.backForm.receipt_remark,callback:function(t){e.$set(e.backForm,"receipt_remark",t)},expression:"backForm.receipt_remark"}})],1)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("i-button",{attrs:{type:"primary",size:"large"},on:{click:e.backOk}},[e._v("确认")]),e._v(" "),r("i-button",{attrs:{type:"error",size:"large"},on:{click:e.doCancel}},[e._v("取消")])],1)],1)},staticRenderFns:[]}},1223:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("Modal",{attrs:{value:e.value,title:"回单发放"},on:{"on-cancel":e.doCancel}},[r("i-form",{ref:"sendForm",attrs:{model:e.sendForm,rules:e.sendFormRule,inline:""}},[r("div",{staticClass:"cf"},[r("Form-item",{staticClass:"fl",attrs:{label:"发放人",prop:"receipt_user"}},[r("i-input",{staticClass:"w140",model:{value:e.sendForm.receipt_user,callback:function(t){e.$set(e.sendForm,"receipt_user",t)},expression:"sendForm.receipt_user"}})],1),e._v(" "),r("Form-item",{staticClass:"fr mr0",attrs:{label:"发放日期",prop:"receipt_time"}},[r("DatePicker",{staticClass:"w160",attrs:{value:e.sendForm.receipt_time},on:{"on-change":e.onDateChange}})],1)],1),e._v(" "),r("Form-item",{attrs:{label:"发放方式",prop:"receipt_type"}},[r("RadioGroup",{model:{value:e.sendForm.receipt_type,callback:function(t){e.$set(e.sendForm,"receipt_type",t)},expression:"sendForm.receipt_type"}},e._l(e.receiptType,function(t){return r("Radio",{key:t.value,attrs:{label:t.value}},[e._v(e._s(t.label))])}))],1),e._v(" "),1==e.sendForm.receipt_type?r("Form-item",{attrs:{label:"车号",prop:"driver_mobile"}},[r("i-input",{staticClass:"w200",attrs:{placeholder:"请输入车号"},model:{value:e.sendForm.driver_mobile,callback:function(t){e.$set(e.sendForm,"driver_mobile",t)},expression:"sendForm.driver_mobile"}})],1):e._e(),e._v(" "),2==e.sendForm.receipt_type?r("Form-item",{attrs:{label:"快递号",prop:"express_no"}},[r("i-input",{attrs:{placeholder:"请输入快递单号"},model:{value:e.sendForm.express_no,callback:function(t){e.$set(e.sendForm,"express_no",t)},expression:"sendForm.express_no"}})],1):e._e(),e._v(" "),r("Form-item",{staticClass:"content-block wp100"},[r("i-input",{attrs:{type:"textarea",rows:3,placeholder:"请输入车辆或司机备注信息......"},model:{value:e.sendForm.receipt_remark,callback:function(t){e.$set(e.sendForm,"receipt_remark",t)},expression:"sendForm.receipt_remark"}})],1)],1),e._v(" "),r("div",{attrs:{slot:"footer"},slot:"footer"},[r("i-button",{attrs:{type:"primary",size:"large"},on:{click:e.sendOk}},[e._v("确认")]),e._v(" "),r("i-button",{attrs:{type:"error",size:"large"},on:{click:e.doCancel}},[e._v("取消")])],1)],1)},staticRenderFns:[]}},1288:function(e,t,r){(function(a){var o,s,i;!function(a,n){s=[t,r(61),r(86),r(485),r(1),r(482),r(1213),r(1214)],o=n,void 0!==(i="function"==typeof o?o.apply(t,s):o)&&(e.exports=i)}(0,function(e,t,r,o,s,i,n,c){"use strict";function l(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var p=l(t),d=(l(s),l(i),l(n)),u=l(c);e.default={data:function(){return{id:"",modal:{show:!1,title:""},orderId:"",backState:"",loading:!0,showBackModal:!1,showSendModal:!1,order:{},curTab:"baseInfo",childCompleted:[],detailInfo:{backs:[],handles:[],order:""}}},components:{backModal:d.default,sendModal:u.default},computed:(0,p.default)({},(0,r.mapState)(["userInfo"])),created:function(){var e=this;this.init(),setTimeout(function(){e.modal.show=!0},300)},watch:{$route:function(e,t){var r=this;this.loadInfo(),setTimeout(function(){r.modal.show=!0},300)}},methods:{init:function(){this.loadInfo()},callBack:function(e){this.loadInfo(),a.$emit("receipt-list-reload")},showModal:function(e){this["show"+e+"Modal"]=!0},loadInfo:function(){var e=this,t={user_id:e.userInfo.user_id,company_id:e.userInfo.company_id,order_id:e.$route.query.id};(0,o.orderBackDetailApi)(t).then(function(t){t.resultObj.handles.map(function(e,t){switch(e.receipt_status){case"0":e.tag="待回单";break;case"1":e.tag="回单中";break;case"2":e.tag="已回收";break;case"3":e.tag="已发放";break;case"4":e.tag="已结束";break;default:e.tag="待回单"}}),t.resultObj.backs.map(function(e,t){e.op_pics&&(e.pic_num=e.op_pics.split(",").length)}),e.detailInfo=t.resultObj,e.backState=e.detailInfo.order.back_state})},openPhotoModal:function(e){var t={op_pics:e};a.$emit("open-photo-modal",t)},rowColWidth:function(e){var t=e.receipt_status,r=e.receipt_type;return"3"!=t&&"1"!=t||0==r||""==r?8:5},openUploadModal:function(){var e=this;a.$emit("open-upload-modal",[{order_id:e.$route.query.id}]),a.$on("receipt-list-reload",function(){e.loadInfo()})},modalClose:function(){var e=this;this.modal.show=!1,setTimeout(function(){e.$router.push({name:"receiptV2List"})},300)}}}})}).call(t,r(227))},1380:function(e,t,r){t=e.exports=r(1083)(),t.push([e.i,".detail-form.row-box .ivu-col{padding:0 10px;line-height:40px}.ellipsis-label{max-width:220px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}","",{version:3,sources:["/Users/ganqiantai/Desktop/gitWork/wm/tms-web/src/components/receipt/v2/detail.vue"],names:[],mappings:"AACA,8BACE,eAAgB,AAChB,gBAAkB,CACnB,AACD,gBACE,gBAAiB,AACjB,gBAAiB,AACjB,uBAAwB,AACxB,kBAAoB,CACrB",file:"detail.vue",sourcesContent:["\n.detail-form.row-box .ivu-col {\n  padding: 0 10px;\n  line-height: 40px;\n}\n.ellipsis-label {\n  max-width: 220px;\n  overflow: hidden;\n  text-overflow: ellipsis;\n  white-space: nowrap;\n}\n"],sourceRoot:""}])},1468:function(e,t,r){var a=r(1380);"string"==typeof a&&(a=[[e.i,a,""]]),a.locals&&(e.exports=a.locals);r(1084)("9f8d86d6",a,!0)},1625:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("slide-modal",{staticStyle:{width:"1000px"},on:{"slide-modal-close":e.modalClose},model:{value:e.modal.show,callback:function(t){e.$set(e.modal,"show",t)},expression:"modal.show"}},[r("div",{staticClass:"cf",attrs:{slot:"head"},slot:"head"},[r("h3",{staticClass:"fl"},[e._v("回单详情")]),e._v(" "),r("div",{staticClass:"fr"},[r("Button",{attrs:{type:"primary",disabled:"0"!=e.backState&&"1"!=e.backState},on:{click:function(t){e.showModal("Back")}}},[e._v("回单回收")]),e._v(" "),r("Button",{attrs:{type:"primary",disabled:"3"==e.backState||"4"==e.backState},on:{click:function(t){e.showModal("Send")}}},[e._v("回单发放")]),e._v(" "),r("Button",{attrs:{type:"primary"},on:{click:e.openUploadModal}},[e._v("上传回单")])],1)]),e._v(" "),e._l(e.detailInfo.handles,function(t,a){return r("div",{staticClass:"row-box row-box-text detail-form mb20"},[r("i-Form",{attrs:{inline:""}},[r("Row",[r("Col",{staticClass:"1",attrs:{span:"8"}},[r("span",{staticClass:"vm"},[e._v(e._s(t.receipt_time))]),e._v(" "),r("Tag",{staticClass:"vm ml20",attrs:{color:"blue"}},[e._v(e._s(t.tag))])],1),e._v(" "),r("Col",{staticClass:"2",attrs:{span:e.rowColWidth(t)}},[r("div",[e._v("\n                                "+e._s(2==t.receipt_status||4==t.receipt_status||1==t.receipt_status&&!t.receipt_type?"回收人：":"发放人：")+"\n                                \n                                "),r("span",[e._v(e._s(t.receipt_user))])])]),e._v(" "),2==t.receipt_status||4==t.receipt_status||1==t.receipt_status&&!t.receipt_type?e._e():r("Col",{staticClass:"3",attrs:{span:e.rowColWidth(t)}},[r("div",[e._v("\n                                发放方式：\n                                "),r("span",[e._v(e._s(e._f("receiptType")(t.receipt_type)))])])]),e._v(" "),"0"==t.receipt_type||""==t.receipt_type||3!=t.receipt_status&&1!=t.receipt_status?e._e():r("Col",{staticClass:"4",attrs:{span:"6"}},[r("div",[r("span",[e._v(e._s("2"==t.receipt_type?"快递号："+t.express_no:"车号："+t.driver_mobile))])])]),e._v(" "),2==t.receipt_status||4==t.receipt_status?r("Col",{attrs:{span:"8"}},[r("div",[e._v("\n                                备注:\n                                "),r("span",[e._v(e._s(t.receipt_remark||"无"))])])]):e._e()],1),e._v(" "),2!=t.receipt_status&&4!=t.receipt_status?r("Row",[r("Col",[r("div",[e._v("\n                                备注:\n                                "),r("span",[e._v(e._s(t.receipt_remark||"无"))])])])],1):e._e()],1)],1)}),e._v(" "),e.detailInfo.backs.length?[r("h2",{staticClass:"mt30 mb20"},[e._v("电子回单")]),e._v(" "),e._l(e.detailInfo.backs,function(t,a){return r("div",{staticClass:"row-box detail-form mb15"},[r("Form",{attrs:{inline:""}},[r("Row",[r("Col",{attrs:{span:"8"}},[r("div",[r("span",{staticClass:"vm"},[e._v(e._s(t.op_time))])])]),e._v(" "),r("Col",{attrs:{span:"10"}},[r("div",[r("span",{staticClass:"ellipsis-label",attrs:{title:t.company}},[e._v(e._s(t.company+"："))]),e._v(" "),t.pic_num?r("span",{staticClass:"vm"},[e._v("回单照片"),r("i",{staticClass:"fc-blue plr5"},[e._v(e._s(t.pic_num))]),e._v("张")]):e._e()])]),e._v(" "),t.pic_num?r("Col",{attrs:{span:"6"}},[r("div",[r("a",{attrs:{href:"javascript:;"},on:{click:function(r){e.openPhotoModal(t.op_pics)}}},[e._v("查看")])])]):e._e()],1)],1)],1)})]:e._e()],2),e._v(" "),r("back-modal",{on:{"call-back":e.callBack},model:{value:e.showBackModal,callback:function(t){e.showBackModal=t},expression:"showBackModal"}}),e._v(" "),r("send-modal",{on:{"call-back":e.callBack},model:{value:e.showSendModal,callback:function(t){e.showSendModal=t},expression:"showSendModal"}})],1)},staticRenderFns:[]}}});
//# sourceMappingURL=31.e5bf261ab449c57f46f5.js.map