webpackJsonp([35],{1135:function(e,t,n){n(1513);var o=n(10)(n(1339),n(1681),"data-v-5da1918b",null);e.exports=o.exports},1154:function(e,t,n){var o,i,a;!function(s,r){i=[t,n(24),n(228)],o=r,void 0!==(a="function"==typeof o?o.apply(t,i):o)&&(e.exports=a)}(0,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var i=o(t),a=o(n),s=(Math.round,a.default.imgHost),r={defaultFileList:[],showUploadList:!1,format:["jpg","jpeg","png"],maxSize:5120,multiple:!1,type:"drag",action:a.default.imgUploadUrl};e.default={props:{uploadOption:{default:function(){return{}}},urlList:{type:[Array,String],default:function(){return[]}},uploadId:{default:void 0},hideIfExist:!1},data:function(){return{viewImg:null,viewIndex:-1,viewModal:!1}},computed:{option:function(){return(0,i.default)({},r,this.uploadOption)},uploadList:function(){function e(e){var t=e;return e.indexOf(s)<0&&(e=s+e),{name:t,url:e,status:"finished"}}var t=[],n=[];return n=this.urlList,"string"==typeof n&&n&&(n=[n]),n||(n=[]),n.length&&(this.option.multiple?t=n.map(e):t.push(e(n[0]))),t},showUpload:function(){return!(this.hideIfExist&&this.uploadList.some(function(e){return"finished"==e.status}))}},methods:{formatErrorHandler:function(e,t){this.$Message.warning("文件 "+t.name+" 格式不正确，请上传 jpg 或 png 格式的图片。")},exceededSizeHandler:function(e,t){this.$Message.warning("文件 "+t.name+" 太大，不能超过 "+(this.option.maxSize/1024).toFixed(2)+"M。")},beforeUploadHandler:function(e,t){var n=!0;return this.option.maxNum&&this.option.maxNum<=this.uploadList.length&&(n=!1),n},successHandler:function(e,t){if(e&&1==e.result){if(t.name=e.resultObj,t.url=s+e.resultObj,this.option.maxNum&&this.option.maxNum<=this.uploadList.length)return this.$Message.warning("最多只能上传"+this.option.maxNum+"个文件");this.$emit("on-success",t,this.uploadId)}else this.$Message.warning("图片上传失败。"+e.resultInfo)},viewHandler:function(e,t){this.viewModal=!0,this.viewIndex=t,this.viewImg=e},removeHandler:function(){var e=this;this.$Modal.confirm({content:"删除该图片？",onOk:function(){e.$emit("on-remove",e.viewImg,e.viewIndex,e.uploadId),e.viewModal=!1,e.viewIndex=-1,e.viewImg=null}})}},mounted:function(){}}})},1155:function(e,t,n){t=e.exports=n(1083)(),t.push([e.i,".upload .upload-list{display:inline-block;width:60px;height:60px;text-align:center;line-height:60px;border:1px solid transparent;border-radius:4px;overflow:hidden;background:#fff;position:relative;box-shadow:0 1px 1px rgba(0,0,0,.2);margin-right:4px}.upload .upload-list:hover .image-cover{display:block}.upload .upload-list img{width:100%;height:100%}.upload .upload-list .image-cover{display:none;position:absolute;top:0;bottom:0;left:0;right:0;background:rgba(0,0,0,.6)}.upload .upload-list i{color:#fff;font-size:20px;cursor:pointer;margin:0 2px}.upload .upload-comp{display:inline-block}.upload .upload-comp .comp-inner{width:58px;height:58px;line-height:58px}","",{version:3,sources:["/Users/ganqiantai/Desktop/gitWork/wm/tms-web/src/common/upload-image/style.scss"],names:[],mappings:"AACA,qBACE,qBAAsB,AACtB,WAAY,AACZ,YAAa,AACb,kBAAmB,AACnB,iBAAkB,AAClB,6BAA8B,AAC9B,kBAAmB,AACnB,gBAAiB,AACjB,gBAAiB,AACjB,kBAAmB,AACnB,oCAAyC,AACzC,gBAAkB,CACnB,AACD,wCACI,aAAe,CAClB,AACD,yBACI,WAAY,AACZ,WAAa,CAChB,AACD,kCACI,aAAc,AACd,kBAAmB,AACnB,MAAO,AACP,SAAU,AACV,OAAQ,AACR,QAAS,AACT,yBAA+B,CAClC,AACD,uBACI,WAAY,AACZ,eAAgB,AAChB,eAAgB,AAChB,YAAc,CACjB,AACD,qBACE,oBAAsB,CACvB,AACD,iCACI,WAAY,AACZ,YAAa,AACb,gBAAkB,CACrB",file:"style.scss",sourcesContent:["\n.upload .upload-list {\n  display: inline-block;\n  width: 60px;\n  height: 60px;\n  text-align: center;\n  line-height: 60px;\n  border: 1px solid transparent;\n  border-radius: 4px;\n  overflow: hidden;\n  background: #fff;\n  position: relative;\n  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);\n  margin-right: 4px;\n}\n.upload .upload-list:hover .image-cover {\n    display: block;\n}\n.upload .upload-list img {\n    width: 100%;\n    height: 100%;\n}\n.upload .upload-list .image-cover {\n    display: none;\n    position: absolute;\n    top: 0;\n    bottom: 0;\n    left: 0;\n    right: 0;\n    background: rgba(0, 0, 0, 0.6);\n}\n.upload .upload-list i {\n    color: #fff;\n    font-size: 20px;\n    cursor: pointer;\n    margin: 0 2px;\n}\n.upload .upload-comp {\n  display: inline-block;\n}\n.upload .upload-comp .comp-inner {\n    width: 58px;\n    height: 58px;\n    line-height: 58px;\n}\n"],sourceRoot:""}])},1156:function(e,t,n){var o=n(1155);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1084)("7f963ccc",o,!0)},1157:function(e,t,n){n(1156);var o=n(10)(n(1154),n(1158),null,null);e.exports=o.exports},1158:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"upload"},[e._l(e.uploadList,function(t,o){return n("div",{staticClass:"upload-list"},["finished"===t.status?[n("img",{attrs:{src:t.url}}),e._v(" "),n("div",{staticClass:"image-cover"},[n("Icon",{attrs:{type:"ios-eye-outline"},nativeOn:{click:function(n){e.viewHandler(t,o)}}})],1)]:[t.showProgress?n("Progress",{attrs:{percent:t.percentage,"hide-info":""}}):e._e()]],2)}),e._v(" "),n("Upload",{directives:[{name:"show",rawName:"v-show",value:e.showUpload,expression:"showUpload"}],ref:"upload",staticClass:"upload-comp",attrs:{"show-upload-list":e.option.showUploadList,format:e.option.format,"max-size":e.option.maxSize,multiple:e.option.multiple,type:e.option.type,action:e.option.action,"on-format-error":e.formatErrorHandler,"on-exceeded-size":e.exceededSizeHandler,"before-upload":e.beforeUploadHandler,"on-success":e.successHandler}},[n("div",{staticClass:"comp-inner"},[n("Icon",{attrs:{type:"camera",size:"20"}})],1)]),e._v(" "),n("Modal",{attrs:{title:"查看图片"},model:{value:e.viewModal,callback:function(t){e.viewModal=t},expression:"viewModal"}},[n("img",{staticClass:"view-img",attrs:{src:e.viewImg&&e.viewImg.url,width:"100%"}}),e._v(" "),n("div",{attrs:{slot:"footer"},slot:"footer"},[n("i-button",{attrs:{type:"warning",size:"small"},on:{click:e.removeHandler}},[e._v("删除")])],1)])],2)},staticRenderFns:[]}},1339:function(e,t,n){var o,i,a;!function(s,r){i=[t,n(1157),n(5)],o=r,void 0!==(a="function"==typeof o?o.apply(t,i):o)&&(e.exports=a)}(0,function(e,t,n){"use strict";function o(e){return e&&e.__esModule?e:{default:e}}Object.defineProperty(e,"__esModule",{value:!0});var i=(o(t),o(n)),a={name:"name",orderNum:void 0,createdTime:"2018-06",cargos:[{name:null,pack:"包",price:12},{name:null,pack:"包",price:12},{name:null,pack:"包",price:null}]};e.default={data:function(){return{}},methods:{},mounted:function(){},created:function(){(0,i.default)({url:"/api/order/v2/create/own",data:a,method:"POST",removeEmpty:!0})}}})},1425:function(e,t,n){t=e.exports=n(1083)(),t.push([e.i,"h2[data-v-5da1918b]{margin-bottom:10px}","",{version:3,sources:["/Users/ganqiantai/Desktop/gitWork/wm/tms-web/src/demo/test/list1.vue"],names:[],mappings:"AACA,oBACI,kBAAoB,CACvB",file:"list1.vue",sourcesContent:["\nh2[data-v-5da1918b] {\n    margin-bottom: 10px;\n}\n"],sourceRoot:""}])},1513:function(e,t,n){var o=n(1425);"string"==typeof o&&(o=[[e.i,o,""]]),o.locals&&(e.exports=o.locals);n(1084)("3af2bf31",o,!0)},1681:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},staticRenderFns:[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"pd20"},[n("h2",[e._v("axios")])])}]}}});
//# sourceMappingURL=35.71f31db3344cc7adb5ae.js.map