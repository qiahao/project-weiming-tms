webpackJsonp([41],{1132:function(e,t,n){n(1462);var o=n(10)(n(1336),n(1616),null,null);e.exports=o.exports},1150:function(e,t,n){var o,r,i;!function(_,a){r=[t,n(1151)],o=a,void 0!==(i="function"==typeof o?o.apply(t,r):o)&&(e.exports=i)}(0,function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),Object.keys(t).forEach(function(n){"default"!==n&&"__esModule"!==n&&Object.defineProperty(e,n,{enumerable:!0,get:function(){return t[n]}})})})},1151:function(e,t,n){var o,r,i;!function(_,a){r=[t,n(70)],o=a,void 0!==(i="function"==typeof o?o.apply(t,r):o)&&(e.exports=i)}(0,function(e,t){"use strict";function n(){try{var e=navigator.userAgent;if(null!=e.match(/Windows\sPhone/i))return!0;if(null!=e.match(/iPhone|iPod/i))return!0;if(null!=e.match(/Android/i))return!0;if(null!=e.match(/Edge\D?\d+/i))return!0;var t=e.match(/Trident\D?\d+/i),n=e.match(/MSIE\D?\d+/i),o=e.match(/OPR\D?\d+/i),r=e.match(/Firefox\D?\d+/i),i=e.match(/x64/i);if(null==t&&null==n&&null!==i)return!0;if(null!==r){if(r=r[0].match(/\d+/),r[0]>=41||null!==i)return!0}else if(null!==o){if(o=o[0].match(/\d+/),o[0]>=32)return!0}else if(null==t&&null==n){var _=e.match(/Chrome\D?\d+/i);if(null!==_&&(_=_[0].match(/\d+/),_[0]>=41))return!0}return!1}catch(e){return!0}}function o(e,o){var i,_="<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop32.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>",a="<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop32.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>",d="<br><font color='#FF00FF'>CLodop云打印服务(localhost本地)未安装启动!点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>执行安装</a>,安装后请刷新页面。</font>",c="<br><font color='#FF00FF'>CLodop云打印服务需升级!点击这里<a href='CLodop_Setup_for_Win32NT.exe' target='_self'>执行升级</a>,升级后请刷新页面。</font>";try{var u=navigator.userAgent.indexOf("MSIE")>=0||navigator.userAgent.indexOf("Trident")>=0;if(n()){try{i=getCLodop()}catch(e){return void t.Message.info("C-Lodop没准备好，请稍后再试！")}if(!i&&"complete"!==document.readyState)return void t.Message.info("C-Lodop没准备好，请稍后再试！");if(!i)return void(u?document.write(d):document.body.innerHTML=d+document.body.innerHTML);CLODOP.CVERSION<"3.0.4.1"&&(u?document.write(c):document.body.innerHTML=c+document.body.innerHTML),o&&o.parentNode&&o.parentNode.removeChild(o),e&&e.parentNode&&e.parentNode.removeChild(e)}else{var m=u&&navigator.userAgent.indexOf("x64")>=0;if(void 0!=e||void 0!=o?i=u?e:o:null==r?(i=document.createElement("object"),i.setAttribute("width",0),i.setAttribute("height",0),i.setAttribute("style","position:absolute;left:0px;top:-100px;width:0px;height:0px;"),u?i.setAttribute("classid","clsid:2105C259-1E0C-4534-8141-A753534CB4CA"):i.setAttribute("type","application/x-print-lodop"),document.documentElement.appendChild(i),r=i):i=r,null==i||void 0===i.VERSION)return navigator.userAgent.indexOf("Chrome")>=0&&(document.body.innerHTML="<br><br><font color='#FF00FF'>(如果此前正常，仅因浏览器升级或重安装而出问题，需重新执行以上安装）</font>"+document.body.innerHTML),navigator.userAgent.indexOf("Firefox")>=0&&(document.body.innerHTML="<br><br><font color='#FF00FF'>（注意：如曾安装过Lodop旧版附件npActiveXPLugin,请在【工具】->【附加组件】->【扩展】中先卸它）</font>"+document.body.innerHTML),m?document.write("<br><font color='#FF00FF'>打印控件未安装!点击这里<a href='install_lodop64.exe' target='_self'>执行安装</a>,安装后请刷新页面或重新进入。</font>"):u?document.write(_):document.body.innerHTML=_+document.body.innerHTML,i}return i.VERSION<"6.2.2.2"?(n()||(m?document.write("<br><font color='#FF00FF'>打印控件需要升级!点击这里<a href='install_lodop64.exe' target='_self'>执行升级</a>,升级后请重新进入。</font>"):u?document.write(a):document.body.innerHTML=a+document.body.innerHTML),i):(i.SET_LICENSES("","002122022841C6D225FA933F59673C40","C94CEE276DB2187AE6B65D56B3FC2848",""),i)}catch(e){t.Message.info("getLodop出错:"+e)}}Object.defineProperty(e,"__esModule",{value:!0}),e.getLodop=e.needCLodop=void 0;var r=null;e.needCLodop=n,e.getLodop=o})},1201:function(e,t,n){var o,r,i;!function(n,_){r=[t],o=_,void 0!==(i="function"==typeof o?o.apply(t,r):o)&&(e.exports=i)}(0,function(e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});e.orderDetail={back_nums:"1",back_state:"0",back_type:"0",begin_address:"闽侯",begin_area:"福建福州",begin_code:"350001",begin_lat:"23",begin_link_man:"老王",begin_link_mobile:"1306710000",begin_lng:"123",bulk_type:"0",c_amounts:"100|200",c_names:"电冰箱|洗衣机",c_packs:"木箱|托盘",c_price_units:"元/吨|元/件",c_prices:"350|450",c_volumes:"20|40",c_weights:"10|20",cargos:'[{"c_name":"电冰箱","c_pack":"木箱","c_amount":"100","c_weight":"10","c_volume":"20","c_price":"350","c_price_unit":"元/吨"},{"c_name":"洗衣机","c_pack":"托盘","c_amount":"200","c_weight":"20","c_volume":"40","c_price":"450","c_price_unit":"元/件"}]',cargos_remark:"2米宽，4米长，4米高，需17.5米平板车",company_id:"zhuangxianAAA",create_time:"2017-02-18 10:13:34",create_user_id:"zxuser001",end_address:"秀洲",end_area:"浙江嘉兴",end_code:"360000",end_lat:"23",end_link_man:"老赵",end_link_mobile:"13066100000",end_lng:"123",fee_az:"9",fee_bg:"10",fee_bj:"4",fee_bx:"5",fee_bz:"8",fee_details:'{"fee_th":"1","fee_sh":"2","fee_smjz":"3","fee_bj":"4","fee_bx":"5","fee_zx":"6","fee_sl":"7","fee_bz":"8","fee_az":"9","fee_bg":"10","fee_jc":"11","fee_dshk":"12","fee_dssx":"13","fee_qt":"14"}',fee_dshk:"12",fee_dssx:"13",fee_jc:"11",fee_qt:"14",fee_sh:"2",fee_sl:"7",fee_smjz:"3",fee_th:"1",fee_transport:"10500.00",fee_zx:"6",from_lanpei:"N",is_del:"N",is_delivery:"Y",is_dz:"N",is_exception:"N",is_fc:"N",is_kzj:"Y",is_pickup:"Y",is_reject:"N",is_zc:"N",is_zr:"N",is_zy:"Y",order_id:"25b697b4-0836-4cc9-9572-0251b84529bb",order_no:"20170218101346",order_state:"0",order_state_desc:"库存运单",order_volumes:"30",order_weights:"20",parent_order_id:null,parent_order_ids:null,pay_details:'{"pay_xf":"1","pay_df":"2","pay_hdf":"3","pay_hdfk":"4","pay_qfu":"5","pay_hkk":"6","pay_yj":"7","pay_yf":"8","pay_qfan":"9"}',pay_df:"2",pay_hdf:"3",pay_hdfk:"4",pay_hkk:"6",pay_qfan:"9",pay_qfu:"5",pay_total:"10680",pay_type:"多笔付",pay_xfu:"1",pay_xfan:"8",pay_yj:"7",receive_company:"收货方",send_company:"发货方",shipper_order_no:"son1",shipper_remark:"运单备注",was_delivery:"N",was_pickup:"N"}})},1336:function(e,t,n){var o,r,i;!function(_,a){r=[t,n(1150),n(1201)],o=a,void 0!==(i="function"==typeof o?o.apply(t,r):o)&&(e.exports=i)}(0,function(e,t,n){"use strict";function o(){var e;a=(0,t.getLodop)(),a.PRINT_INIT(m),(e=a).SET_PRINT_PAGESIZE.apply(e,u)}function r(){o(),i(),a.SET_SHOW_MODE("DESIGN_IN_BROWSE",1),a.SET_SHOW_MODE("SETUP_ENABLESS","11111111000000"),a.SET_SHOW_MODE("HIDE_GROUND_LOCK",!0),a.PRINT_DESIGN()}function i(e){a.PRINT_INITA(0,0,"79.98mm","59.98mm","货签打印"),a.ADD_PRINT_LINE("17.75mm","0mm",66,"79.9mm",0,1),a.ADD_PRINT_LINE("35.77mm","0mm",134,"79.9mm",0,1),a.ADD_PRINT_LINE("41.57mm","0mm",156,"79.9mm",0,1),a.ADD_PRINT_LINE("59.5mm","56.59mm","41.51mm",215,0,1),a.ADD_PRINT_LINE("11.85mm","55.01mm",44,"79.9mm",0,1),a.ADD_PRINT_LINE("6.06mm","55.01mm",22,"79.9mm",0,1),a.ADD_PRINT_LINE("0mm","55.01mm","17.49mm",209,0,1),a.ADD_PRINT_LINE("0mm","49mm","17.49mm",186,0,1),a.ADD_PRINT_IMAGE("1.48mm","2.99mm","37.99mm","10.8mm",'<img border="0" height="38" src="'+d+'"/>'),a.ADD_PRINT_TEXT(48,13,160,18,"客户电话：13000000000"),a.ADD_PRINT_TEXT("3.18mm","49.21mm","5.82mm","13.76mm","发\r\n货\r\n人"),a.SET_PRINT_STYLEA(0,"Alignment",2),a.SET_PRINT_STYLEA(0,"Horient",2),a.ADD_PRINT_TEXT(4,211,86,18,"张三"),a.ADD_PRINT_TEXT(26,"55.75mm",86,18,"13000000001"),a.ADD_PRINT_TEXT(48,211,86,18,"自提"),a.ADD_PRINT_TEXT(75,12,280,24,"出发  123"),a.SET_PRINT_STYLEA(0,"FontSize",12),a.ADD_PRINT_TEXT(103,12,280,24,"到达  123"),a.SET_PRINT_STYLEA(0,"FontSize",12),a.ADD_PRINT_TEXT(138,12,150,18,"运单号 ZJ1111805100008"),a.ADD_PRINT_TEXT(138,162,140,18,"共1000件 第2份 共2份"),a.ADD_PRINT_BARCODE(168,22,202,50,"93Extended","zj3456789012"),a.ADD_PRINT_IMAGE(166,"61.65mm","12.65mm","12.65mm",'<img border="0" height="48" src="'+c+'"/>')}function _(e){a=(0,t.getLodop)(),a.CVERSION&&(a.On_Return=function(t,n){e.printCode=n}),e.printCode=a.GET_VALUE("ProgramCodes",0)}Object.defineProperty(e,"__esModule",{value:!0});var a=void 0,d="/static/images/print-tag/logo@2x.png",c="/static/images/print-tag/qrcode@2x.png",u=[0,800,600,"货签打印"],m="货签打印";e.default={data:function(){return{printCode:""}},methods:{handlerPrint:function(){this.initPrint()},handlerDesign:function(){r()},handlerGetDesignCode:function(){_(this)},handlerPreview:function(){o(),i(),a.PREVIEW()}},created:function(){},mounted:function(){}}})},1374:function(e,t,n){t=e.exports=n(1083)(),t.push([e.i,"","",{version:3,sources:[],names:[],mappings:"",file:"tag-lodop.vue",sourceRoot:""}])},1462:function(e,t,n){var o=n(1374);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1084)("1f66fdd6",o,!0)},1616:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"mg20"},[n("h2",[e._v("货签打印设计")]),e._v(" "),n("h4",[e._v("货签打印使用，调整时使用设计代码替换createPage方法体，将相应代码拷贝至开发页面对应的createPage方法，做相应修改")]),e._v(" "),n("hr"),e._v(" "),n("div",{staticClass:"mtb20"},[n("i-button",{on:{click:e.handlerDesign}},[e._v("打印设计")]),e._v(" "),n("i-button",{on:{click:e.handlerGetDesignCode}},[e._v("获取设计码")]),e._v(" "),n("i-button",{on:{click:e.handlerPreview}},[e._v("打印预览")])],1),e._v(" "),n("div",{staticClass:"mtb20"},[n("i-input",{attrs:{type:"textarea",value:e.printCode,rows:8}})],1)])},staticRenderFns:[]}}});
//# sourceMappingURL=41.c9b000925df19e3a0704.js.map