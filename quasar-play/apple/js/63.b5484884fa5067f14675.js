webpackJsonp([63],{150:function(t,e,n){var a=n(2)(n(288),n(417),null,null,null);t.exports=a.exports},288:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(0);e.default={components:{Toast:a.Toast,QContextMenu:a.QContextMenu,QList:a.QList,QItem:a.QItem,QItemMain:a.QItemMain},methods:{showToast:function(){a.Toast.create((this.$q.platform.is.desktop?"Clicked":"Tapped")+" on a context menu item.")}}}},417:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"layout-padding row justify-center"},[n("div",{staticStyle:{width:"500px","max-width":"90vw"}},[t._m(0),t._v(" "),n("blockquote",[n("small",[t._v("\n        Works with any elements you want. It doesn't have to be a List.\n      ")])]),t._v(" "),t._m(1),t._v(" "),n("div",{staticClass:"bg-secondary text-white row flex-center",staticStyle:{height:"300px","margin-top":"40px"}},[t._v("\n      Target area\n\n      "),n("q-context-menu",{ref:"context"},[n("q-list",{staticStyle:{"min-width":"150px","max-height":"300px"},attrs:{link:"",separator:"","no-border":""}},t._l(10,function(e){return n("q-item",{key:e,on:{click:function(e){t.showToast(),t.$refs.context.close()}}},[n("q-item-main",{attrs:{label:"Label",sublabel:"Value"}})],1)}))],1)],1)],1)])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"caption"},[n("span",{staticClass:"desktop-only"},[t._v("\n        Right click on the colored area below.\n        "),n("br"),t._v("\n        On a real mobile device it works different by opening a minimized Modal triggered by a long tap.\n      ")]),t._v(" "),n("span",{staticClass:"mobile-only"},[t._v("\n        Long Tap on the colored area below (not on header though).\n        "),n("br"),t._v("\n        On a desktop it works different by opening a Popover.\n      ")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"caption"},[n("span",{staticClass:"mobile-only"},[t._v("\n        On a desktop browser user\n      ")]),t._v(" "),n("span",{staticClass:"desktop-only"},[t._v("\n        User\n      ")]),t._v("\n      can dismiss the Context Menu\n      by hitting the <ESCAPE> key.\n    ")])}]}}});