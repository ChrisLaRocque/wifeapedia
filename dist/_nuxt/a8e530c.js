(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{270:function(t,e,l){"use strict";l.r(e);var r={name:"table-list",props:["tableData","prepend","ctaText"]},n=l(26),component=Object(n.a)(r,(function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("table",{staticClass:"table-auto"},[t._m(0),t._v(" "),l("tbody",t._l(t.tableData,(function(data){return l("tr",{key:data.fields.title},[l("td",{staticClass:"border px-4 py-2"},[t._v(t._s(data.fields.seasonNumber||data.fields.episodeNumber))]),t._v(" "),l("td",{staticClass:"border px-4 py-2"},[t._v(t._s(data.fields.title))]),t._v(" "),l("td",{staticClass:"border px-4 py-2"},[l("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},[l("NuxtLink",{attrs:{to:(t.prepend?t.prepend+"/":"")+(data.fields.seasonNumber||data.fields.episodeNumber)}},[t._v(t._s(t.ctaText||"Learn more"))])],1)])])})),0)])}),[function(){var t=this,e=t.$createElement,l=t._self._c||e;return l("thead",[l("tr",[l("th",{staticClass:"px-4 py-2"},[t._v("#")]),t._v(" "),l("th",{staticClass:"px-4 py-2"},[t._v("Title")]),t._v(" "),l("th",{staticClass:"px-4 py-2"},[t._v("Link")])])])}],!1,null,null,null);e.default=component.exports}}]);