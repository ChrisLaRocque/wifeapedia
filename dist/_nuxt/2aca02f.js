(window.webpackJsonp=window.webpackJsonp||[]).push([[13,7],{264:function(e,t,n){var r=n(267),l={space:"i1trowbjm312",accessToken:"e211707c967468d6f9b0f953bc6900fcdde12035c8c52254a9cd4fffcaf8d01e"};e.exports={createClient:function(){return r.createClient(l)}}},268:function(e,t){},269:function(e,t){},270:function(e,t,n){"use strict";n.r(t);var r={name:"table-list",props:["tableData","prepend","ctaText"]},l=n(26),component=Object(l.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("table",{staticClass:"table-auto"},[e._m(0),e._v(" "),n("tbody",e._l(e.tableData,(function(data){return n("tr",{key:data.fields.title},[n("td",{staticClass:"border px-4 py-2"},[e._v(e._s(data.fields.seasonNumber||data.fields.episodeNumber))]),e._v(" "),n("td",{staticClass:"border px-4 py-2"},[e._v(e._s(data.fields.title))]),e._v(" "),n("td",{staticClass:"border px-4 py-2"},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},[n("NuxtLink",{attrs:{to:(e.prepend?""+e.prepend:"")+(data.fields.seasonNumber||data.fields.episodeNumber)}},[e._v(e._s(e.ctaText||"Learn more"))])],1)])])})),0)])}),[function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("thead",[n("tr",[n("th",{staticClass:"px-4 py-2"},[e._v("#")]),e._v(" "),n("th",{staticClass:"px-4 py-2"},[e._v("Title")]),e._v(" "),n("th",{staticClass:"px-4 py-2"},[e._v("Link")])])])}],!1,null,null,null);t.default=component.exports},341:function(e,t,n){"use strict";n.r(t);var r=n(10),l=(n(36),n(16),n(37),n(27),n(38),n(264)),c=Object(l.createClient)(),o={asyncData:function(e){var t=e.params;return Promise.all([c.getEntries({"sys.contentType.sys.id":"series"})]).then((function(e){var n=Object(r.a)(e,1)[0].items.filter((function(e){return e.fields.slug==t.series}))[0];return{series:n,seasons:n.fields.seasons.slice(0,5)}})).catch(console.error)},head:function(){return{title:"".concat(this.series.fields.title," Wife Swap seasons list"),meta:[{hid:"description",name:"description",content:this.series.fields.description}]}}},d=n(26),component=Object(d.a)(o,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container p-4 mx-auto"},[n("h1",{staticClass:"text-3xl font-extrabold"},[e._v("All seasons for "+e._s(e.series.fields.title))]),e._v(" "),n("div",{staticClass:"mt-2 mb-4",domProps:{innerHTML:e._s(e.$md.render(e.series.fields.description))}}),e._v(" "),n("TableList",{attrs:{"table-data":e.seasons,prepend:e.$nuxt.$route.path,ctaText:"Season info"}})],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{TableList:n(270).default})}}]);