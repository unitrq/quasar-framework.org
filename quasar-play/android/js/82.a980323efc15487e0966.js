webpackJsonp([82],{112:function(e,t,c){var i=c(2)(c(251),c(421),null,null,null);e.exports=i.exports},251:function(e,t,c){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=c(0);t.default={components:{QCheckbox:i.QCheckbox,QChip:i.QChip,QField:i.QField,QList:i.QList,QItem:i.QItem,QItemSide:i.QItemSide,QItemMain:i.QItemMain,QItemTile:i.QItemTile,QOptionGroup:i.QOptionGroup},data:function(){return{check1:!1,check2:!0,check3:!0,check4:!0,check5:!1,checkArray:["one"],check6:!0,group:["upload"],list1:!1,list2:!0,list3:!0}}}},421:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,c=e._self._c||t;return c("div",{staticClass:"layout-padding row justify-center"},[c("div",{staticStyle:{width:"500px","max-width":"90vw"}},[c("p",{staticClass:"caption"},[e._v("Standard")]),e._v(" "),c("q-checkbox",{model:{value:e.check1,callback:function(t){e.check1=t},expression:"check1"}}),e._v(" "),c("p",{staticClass:"caption"},[e._v("With label")]),e._v(" "),c("q-checkbox",{attrs:{color:"secondary",label:"Tick me"},model:{value:e.check2,callback:function(t){e.check2=t},expression:"check2"}}),e._v(" "),c("p",{staticClass:"caption"},[e._v("With label on left side")]),e._v(" "),c("q-checkbox",{attrs:{color:"amber",label:"Tick me","left-label":""},model:{value:e.check3,callback:function(t){e.check3=t},expression:"check3"}}),e._v(" "),c("p",{staticClass:"caption"},[e._v("With custom icons")]),e._v(" "),c("q-checkbox",{attrs:{"checked-icon":"sentiment very satisfied","unchecked-icon":"sentiment very dissatisfied"},model:{value:e.check4,callback:function(t){e.check4=t},expression:"check4"}}),e._v(" "),c("q-checkbox",{staticStyle:{"margin-left":"25px"},attrs:{"checked-icon":"visibility","unchecked-icon":"visibility_off"},model:{value:e.check5,callback:function(t){e.check5=t},expression:"check5"}}),e._v(" "),c("p",{staticClass:"caption"},[e._v("With Array as model")]),e._v(" "),c("q-chip",{attrs:{square:"",color:"secondary"}},[e._v("Model: "+e._s(e.checkArray))]),e._v(" "),c("br"),c("br"),e._v(" "),c("q-checkbox",{attrs:{label:"One",color:"yellow",val:"one"},model:{value:e.checkArray,callback:function(t){e.checkArray=t},expression:"checkArray"}}),e._v(" "),c("q-checkbox",{staticStyle:{"margin-left":"10px"},attrs:{label:"Two",val:"two",color:"secondary"},model:{value:e.checkArray,callback:function(t){e.checkArray=t},expression:"checkArray"}}),e._v(" "),c("q-checkbox",{staticStyle:{"margin-left":"10px"},attrs:{label:"Three",val:"three",color:"red"},model:{value:e.checkArray,callback:function(t){e.checkArray=t},expression:"checkArray"}}),e._v(" "),c("p",{staticClass:"caption"},[e._v("Disabled")]),e._v(" "),c("q-checkbox",{attrs:{disable:"",label:"Disabled"},model:{value:e.check1,callback:function(t){e.check1=t},expression:"check1"}}),e._v(" "),c("p",{staticClass:"caption"},[e._v("As Option Group in a Field")]),e._v(" "),c("q-field",{attrs:{icon:"vibration",helper:"Select which notifications you want to receive",label:"Notifications"}},[c("q-option-group",{attrs:{type:"checkbox",color:"secondary",options:[{label:"Battery too low",value:"bat"},{label:"Friend request",value:"friend"},{label:"Picture uploaded",value:"upload",color:"red"}]},model:{value:e.group,callback:function(t){e.group=t},expression:"group"}})],1),e._v(" "),c("p",{staticClass:"caption"},[e._v("In a list")]),e._v(" "),c("q-list",{attrs:{link:""}},[c("q-item",{attrs:{tag:"label"}},[c("q-item-side",[c("q-checkbox",{model:{value:e.list1,callback:function(t){e.list1=t},expression:"list1"}})],1),e._v(" "),c("q-item-main",[c("q-item-tile",{attrs:{title:""}},[e._v("Notification")])],1)],1),e._v(" "),c("q-item",{attrs:{tag:"label"}},[c("q-item-side",[c("q-checkbox",{attrs:{color:"secondary"},model:{value:e.list2,callback:function(t){e.list2=t},expression:"list2"}})],1),e._v(" "),c("q-item-main",[c("q-item-tile",{attrs:{label:""}},[e._v("Notification")]),e._v(" "),c("q-item-tile",{attrs:{sublabel:""}},[e._v("Allow notification")])],1)],1),e._v(" "),c("q-item",{attrs:{multiline:"",tag:"label"}},[c("q-item-side",[c("q-checkbox",{attrs:{color:"amber"},model:{value:e.list3,callback:function(t){e.list3=t},expression:"list3"}})],1),e._v(" "),c("q-item-main",[c("q-item-tile",{attrs:{label:""}},[e._v("Notification")]),e._v(" "),c("q-item-tile",{attrs:{sublabel:"",lines:"2"}},[e._v("Allow notifications Allow notifications Allow notifications Allow notifications Allow notifications")])],1)],1)],1)],1)])},staticRenderFns:[]}}});