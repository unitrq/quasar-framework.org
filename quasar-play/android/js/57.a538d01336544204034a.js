webpackJsonp([57],{161:function(t,e,a){var n=a(2)(a(299),a(463),null,null,null);t.exports=n.exports},299:function(t,e,a){"use strict";function n(t){l.ActionSheet.create({title:"Article Actions",gallery:t,actions:[{label:"Delete",icon:"delete",handler:function(){l.Toast.create("Deleted Article")}},{label:"Share",icon:"share",handler:function(){l.Toast.create("Shared!")}},{label:"Play",icon:"gamepad",handler:function(){l.Toast.create("Launched Game")}},{label:"Favorite",icon:"favorite",handler:function(){l.Toast.create("Added to favorites")}}],dismiss:{label:"Cancel",handler:function(){l.Toast.create("Cancelled...")}}})}function i(t){l.ActionSheet.create({title:"Share to",gallery:t,actions:[{label:"Joe",avatar:"statics/linux-avatar.png",handler:function(){l.Toast.create("Shared to Joe!")}},{label:"John",avatar:"statics/boy-avatar.png",handler:function(){l.Toast.create("Shared to John!")}},{label:"Jim",avatar:"statics/linux-avatar.png",handler:function(){l.Toast.create("Shared to Jim!")}},{label:"Jack",avatar:"statics/guy-avatar.png",handler:function(){l.Toast.create("Shared to Jack!")}}],dismiss:{label:"Cancel",handler:function(){l.Toast.create("Cancelled...")}}})}Object.defineProperty(e,"__esModule",{value:!0});var l=a(0);e.default={components:{QList:l.QList,QItem:l.QItem,QItemSide:l.QItemSide,QItemMain:l.QItemMain},directives:{Ripple:l.Ripple},data:function(){return{types:[{label:"List with Icons",handler:function(){n()}},{label:"Gallery with Icons",handler:function(){n(!0)}},{label:"List with Avatars",handler:function(){i()}},{label:"Gallery with Avatars",handler:function(){i(!0)}}]}}}},463:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"layout-padding row justify-center"},[a("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t._m(0),t._v(" "),a("q-list",{staticStyle:{"max-width":"600px"}},t._l(t.types,function(e){return a("q-item",{directives:[{name:"ripple",rawName:"v-ripple.mat",modifiers:{mat:!0}}],key:e,attrs:{link:""},on:{click:function(t){e.handler()}}},[a("q-item-side",{attrs:{icon:"settings"}}),t._v(" "),a("q-item-main",{attrs:{label:e.label}}),t._v(" "),a("q-item-side",{attrs:{right:"",icon:"keyboard_arrow_right"}})],1)}))],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("p",{staticClass:"caption"},[a("span",{staticClass:"desktop-only"},[t._v("Click")]),t._v(" "),a("span",{staticClass:"mobile-only"},[t._v("Tap")]),t._v("\n      on each type to see an Action Sheet in action.\n    ")])}]}}});