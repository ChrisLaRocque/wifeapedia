(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{263:function(e,t,n){var r=n(266),c={space:"i1trowbjm312",accessToken:"e211707c967468d6f9b0f953bc6900fcdde12035c8c52254a9cd4fffcaf8d01e"};e.exports={createClient:function(){return r.createClient(c)}}},268:function(e,t){},269:function(e,t){},342:function(e,t,n){"use strict";n.r(t);var r=n(10),c=(n(36),n(16),n(37),n(27),n(263)),o=Object(c.createClient)(),l={asyncData:function(e){var t=e.params;return Promise.all([o.getEntries({"sys.contentType.sys.id":"series"})]).then((function(e){return{series:Object(r.a)(e,1)[0].items.filter((function(e){return e.fields.slug==t.series}))[0]}})).catch(console.error)},head:function(){return{title:this.series.fields.title,meta:[{hid:"description",name:"description",content:this.series.fields.description}]}}},d=n(26),component=Object(d.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container p-4 mx-auto"},[n("h1",{staticClass:"text-3xl font-extrabold"},[e._v(e._s(e.series.fields.title))]),e._v(" "),n("div",{staticClass:"mt-2 mb-4",domProps:{innerHTML:e._s(e.$md.render(e.series.fields.description))}}),e._v(" "),n("NuxtLink",{attrs:{to:e.$nuxt.$route.path+"/seasons/"}},[n("button",{staticClass:"bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"},[e._v("\n      Seasons\n    ")])])],1)}),[],!1,null,null,null);t.default=component.exports}}]);