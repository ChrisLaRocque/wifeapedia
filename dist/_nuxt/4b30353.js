(window.webpackJsonp=window.webpackJsonp||[]).push([[10,4,6],{264:function(e,t,r){var n=r(267),l={space:"i1trowbjm312",accessToken:"e211707c967468d6f9b0f953bc6900fcdde12035c8c52254a9cd4fffcaf8d01e"};e.exports={createClient:function(){return n.createClient(l)}}},268:function(e,t){},269:function(e,t){},271:function(e,t,r){var content=r(278);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(82).default)("2a270552",content,!0,{sourceMap:!1})},277:function(e,t,r){"use strict";r(271)},278:function(e,t,r){var n=r(81)((function(i){return i[1]}));n.push([e.i,"/*purgecss start ignore*/\n\n/*purgecss end ignore*/",""]),n.locals={},e.exports=n},290:function(e,t,r){"use strict";r.r(t);var n={name:"family-cards",props:["families"]},l=(r(277),r(26)),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lg:grid grid-cols-3 gap-4 mt-4 p-6 border-t-2"},[e._m(0),e._v(" "),e._l(e.families,(function(t){return r("div",{key:t.fields.slug,staticClass:"family-card rounded-md shadow-md hover:shadow-lg p-4"},[r("NuxtLink",{attrs:{to:e.$nuxt.$route.path+"/"+t.fields.slug}},[r("p",[r("strong",{staticClass:"text-xl mb-4 border-b-2"},[e._v(e._s(t.fields.title)+" family")])]),e._v(" "),t.fields.photo?r("img",{staticClass:"object-cover h-48 w-full",attrs:{src:t.fields.photo.fields.file.url,alt:""}}):e._e(),e._v(" "),r("div",{staticClass:"grid grid-cols-2 gap-2 mt-2 family-members"},e._l(t.fields.members,(function(t){return r("div",{key:t.fields.name,staticClass:"member rounded-full bg-gray-400 px-3 py-2 mr-2"},[e._v("\n\t\t\t\t\t"+e._s(t.fields.name)+"\n\t\t\t\t")])})),0)])],1)}))],2)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"family-blurb"},[r("h4",{staticClass:"font-extrabold text-2xl"},[e._v("Families from this episode")]),e._v(" "),r("p",[e._v("Learn about the participating families and where they are now.")])])}],!1,null,null,null);t.default=component.exports},291:function(e,t,r){"use strict";r.r(t);var n={name:"quote-cards",props:["quotes"]},l=r(26),component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"lg:grid grid-cols-3 gap-4 mt-4 p-6 border-t-2"},[e._m(0),e._v(" "),e._l(e.quotes,(function(t){return r("div",{staticClass:"quote-card rounded-md shadow-md p-4"},[r("p",{domProps:{innerHTML:e._s('"'+e.$md.renderInline(t.fields.quote)+'"')}}),e._v(" "),t.fields.context?r("small",{staticClass:"text-gray-500"},[e._v(e._s(t.fields.context))]):e._e(),e._v(" "),r("p",{staticClass:"border-t-2 mt-2 pt-2"},[r("strong",[e._v(e._s(t.fields.attribution.fields.name))])])])}))],2)}),[function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"quotes-blurb"},[r("h4",{staticClass:"font-extrabold text-2xl"},[e._v("Notable quotes from this episode")])])}],!1,null,null,null);t.default=component.exports},344:function(e,t,r){"use strict";r.r(t);var n=r(10),l=(r(36),r(16),r(37),r(27),r(264)),o=Object(l.createClient)(),c={asyncData:function(e){var t=e.params;return Promise.all([o.getEntries({"sys.contentType.sys.id":"episode",include:10})]).then((function(e){var r=Object(n.a)(e,1)[0].items.filter((function(e){return e.fields.episodeNumber==t.episode}))[0].fields;return r.airDate&&(r.airDate=new Date(r.airDate)),{episode:r}})).catch(console.error)},head:function(){return{title:this.episode.title,meta:[{hid:"description",name:"description",content:this.episode.description}]}}},d=r(26),component=Object(d.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{staticClass:"container p-4 mx-auto"},[r("h1",{staticClass:"text-3xl font-extrabold"},[e._v("S"+e._s(e.$nuxt.$route.params.season)+" E"+e._s(e.$nuxt.$route.params.episode)+" - "+e._s(e.episode.title))]),e._v(" "),e.episode.airDate?r("p",[r("em",[e._v(e._s("Original air date: "+e.episode.airDate.toLocaleDateString()))])]):e._e(),e._v(" "),r("p",{staticClass:"mt-2 mb-4"},[e._v(e._s(e.episode.description))]),e._v(" "),e.episode.families?r("FamilyCards",{attrs:{families:e.episode.families}}):e._e(),e._v(" "),e.episode.notableQuotes?r("QuoteCards",{attrs:{quotes:e.episode.notableQuotes}}):e._e()],1)}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{FamilyCards:r(290).default,QuoteCards:r(291).default})}}]);