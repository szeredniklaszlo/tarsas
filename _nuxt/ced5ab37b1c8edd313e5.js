(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{352:function(e,t,r){var content=r(358);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("29af20f8",content,!0,{sourceMap:!1})},353:function(e,t,r){var content=r(360);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("46add8e6",content,!0,{sourceMap:!1})},354:function(e,t,r){var content=r(362);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("6a6aab91",content,!0,{sourceMap:!1})},355:function(e,t,r){"use strict";t.a=["userId","bestnum","maxtime","maxweight","mintime","minweight","recnum","supplayer","playlessthan","showexp","ownedgames","mechShow","mechHide","disableLS"]},357:function(e,t,r){"use strict";var n=r(352);r.n(n).a},358:function(e,t,r){(e.exports=r(35)(!1)).push([e.i,".col[data-v-227f6d14]{margin-bottom:.5rem}",""])},359:function(e,t,r){"use strict";var n=r(353);r.n(n).a},360:function(e,t,r){(e.exports=r(35)(!1)).push([e.i,".filters.container-fluid{text-align:left;margin-bottom:.5rem}",""])},361:function(e,t,r){"use strict";var n=r(354);r.n(n).a},362:function(e,t,r){(e.exports=r(35)(!1)).push([e.i,".actions{margin-bottom:1rem}",""])},363:function(e,t,r){"use strict";var n=r(356),o=r(10),l=r.n(o),c={props:{games:{type:Object,required:!0}},computed:{filteredGames:function(){var e=Object(n.a)(this.games,this.$store.state.filters);if(e.length){var t=l.a.orderBy(e,[this.sortBy,"average"],[this.asc?"asc":"desc","desc"]);if(t.length>0&&!l.a.get(t[0],"rank")&&l.a.get(t[t.length-1],"rank"))for(;!l.a.get(t[0],"rank");)t.push(t.shift());e=t}return e}}},m=(r(357),r(28)),component=Object(m.a)(c,function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"header"},[t("b-container",{staticClass:"bv-example-row"},[t("b-row",{attrs:{"align-v":"center"}},this._l(this.filteredGames,function(e){return t("b-col",{key:e.id},[t("a",{attrs:{href:"https://boardgamegeek.com/boardgame/"+e.id}},[t("b-img",{attrs:{width:"100",rounded:"",src:e.imageUrl}})],1)])}),1)],1),this._v("\n  Item count: "+this._s(this.filteredGames.length)+"\n")],1)},[],!1,null,"227f6d14",null);t.a=component.exports},364:function(e,t,r){"use strict";r(5),r(3),r(2),r(1),r(4);var n=r(0),o=(r(9),r(43)),l=r(92),c=r(355);function m(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter(function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable})),t.push.apply(t,r)}return t}var f=r(187),d={props:{bestnum:{default:0,type:Number},maxtime:{default:0,type:Number},maxweight:{default:0,type:Number},minweight:{default:0,type:Number},mintime:{default:0,type:Number},mechShow:{default:function(){return[]},type:Array},mechHide:{default:function(){return[]},type:Array},ownedgames:{type:Boolean,required:!0},playgreaterthan:{default:0,type:Number},playlessthan:{default:0,type:Number},recnum:{default:0,type:Number},showexp:{default:!!l.a.get("showexp"),type:Boolean},showOwned:{type:Boolean},supplayer:{default:0,type:Number}},data:function(){return{mechOptions:this.getMechOptions(),popoverShow:!1}},computed:function(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?m(source,!0).forEach(function(t){Object(n.a)(e,t,source[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):m(source).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))})}return e}({},Object(o.e)(["filters"]),{_filters:function(){var e=this;return c.a.reduce(function(t,r){return t[r]=e[r],t},{})}}),watch:{_filters:function(e){this.filters=e,this.$store.commit("filters/set",e)}},methods:{getMechOptions:function(){return Object.keys(f).map(function(e){return{text:f[e],value:f[e]}})},onClose:function(){this.popoverShow=!1}}},h=(r(359),r(28)),component=Object(h.a)(d,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"filters",attrs:{fluid:""}},[r("b-row",[r("b-col",[r("b-btn",{directives:[{name:"b-toggle",rawName:"v-b-toggle.collapse1",modifiers:{collapse1:!0}}],attrs:{variant:"outline-primary",size:"sm"}},[e._v("\n        Toggle Filters\n      ")])],1)],1),e._v(" "),r("b-collapse",{attrs:{id:"collapse1",visible:""}},[r("b-form-group",{attrs:{"label-cols-sm":"2",label:"Players"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Best #",min:"1",size:"sm"},model:{value:e.filters.bestnum,callback:function(t){e.$set(e.filters,"bestnum",t)},expression:"filters.bestnum"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Recommended #",min:"1",size:"sm"},model:{value:e.filters.recnum,callback:function(t){e.$set(e.filters,"recnum",t)},expression:"filters.recnum"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Supported #",min:"1",size:"sm"},model:{value:e.filters.supplayer,callback:function(t){e.$set(e.filters,"supplayer",t)},expression:"filters.supplayer"}})],1)],1)],1),e._v(" "),r("b-form-group",{attrs:{"label-cols-sm":"2",label:"Play Time"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Min Play Time",min:"0",step:"10",size:"sm"},model:{value:e.filters.mintime,callback:function(t){e.$set(e.filters,"mintime",t)},expression:"filters.mintime"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Max Play Time",min:"0",step:"10",size:"sm"},model:{value:e.filters.maxtime,callback:function(t){e.$set(e.filters,"maxtime",t)},expression:"filters.maxtime"}})],1)],1)],1),e._v(" "),r("b-form-group",{attrs:{"label-cols-sm":"2",label:"Weight"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Min Weight",min:"1",step:"0.1",size:"sm"},model:{value:e.filters.minweight,callback:function(t){e.$set(e.filters,"minweight",t)},expression:"filters.minweight"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Max Weight",min:"1",step:"0.1",size:"sm"},model:{value:e.filters.maxweight,callback:function(t){e.$set(e.filters,"maxweight",t)},expression:"filters.maxweight"}})],1)],1)],1),e._v(" "),r("b-form-group",{attrs:{"label-cols-sm":"2",label:"Plays"}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Greater Than",min:"0",size:"sm"},model:{value:e.filters.playgreaterthan,callback:function(t){e.$set(e.filters,"playgreaterthan",t)},expression:"filters.playgreaterthan"}})],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-form-input",{attrs:{type:"number",placeholder:"Fewer Than",min:"0",size:"sm"},model:{value:e.filters.playlessthan,callback:function(t){e.$set(e.filters,"playlessthan",t)},expression:"filters.playlessthan"}})],1)],1)],1),e._v(" "),r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{id:"mech-filter",size:"sm",variant:"primary"}},[r("i",{staticClass:"fa fa-gear",attrs:{"aria-hidden":"true"}}),e._v("\n          Filter By Mechanisms\n        ")]),e._v(" "),r("b-popover",{attrs:{target:"mech-filter",placement:"bottom",triggers:"click",show:e.popoverShow,content:"Placement"},on:{"update:show":function(t){e.popoverShow=t}}},[r("b-tabs",[r("b-tab",{attrs:{title:"Show",active:""}},[r("b-form-group",[r("b-form-checkbox-group",{attrs:{name:"mechanisms",options:e.mechOptions},model:{value:e.filters.mechShow,callback:function(t){e.$set(e.filters,"mechShow",t)},expression:"filters.mechShow"}})],1)],1),e._v(" "),r("b-tab",{attrs:{title:"Hide"}},[r("b-form-group",[r("b-form-checkbox-group",{attrs:{name:"mechanisms",options:e.mechOptions},model:{value:e.filters.mechHide,callback:function(t){e.$set(e.filters,"mechHide",t)},expression:"filters.mechHide"}})],1)],1)],1),e._v(" "),r("b-btn",{attrs:{size:"sm",variant:"primary"},on:{click:e.onClose}},[e._v("\n            Close\n          ")])],1)],1),e._v(" "),e.showOwned?r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){e.ownedgames=!e.ownedgames}}},[e.ownedgames?r("span",[r("i",{staticClass:"fa fa-users",attrs:{"aria-hidden":"true"}}),e._v("\n            Show All Games\n          ")]):e._e(),e._v(" "),e.ownedgames?e._e():r("span",[r("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),e._v("\n            Show Only Owned Games\n          ")])])],1):e._e()],1)],1)],1)},[],!1,null,null,null);t.a=component.exports},365:function(e,t,r){"use strict";r(14);var n=r(92),o=r(356),l=r(355),c=r(10),m=r.n(c),f={props:{games:{type:Object,required:!0}},data:function(){return{getShareLink:function(){var link="".concat(window.origin,"?userId=").concat(n.a.get("username"),"&"),e=this.$store.state.filters,t=l.a.map(function(param){return e[param]?"".concat(param,"=").concat(e[param]):null}).filter(function(i){return!!i}).join("&");return encodeURI("".concat(link).concat(t))},getList:function(){var e="";return m.a.forEach(this.games,function(t){e+=t.name+" - "+t.comment+"\n"}),e},getARandomGame:function(){var e=m.a.sample(Object(o.a)(this.games,this.$store.state.filters));this.$toast.success("Go play "+e.name,{icon:"fa-play",action:{text:"Link",href:"https://boardgamegeek.com/boardgame/"+e.id}})},views:this.$store.state.views}},methods:{toggleListView:function(){this.$store.commit("views/toggleListView")}}},d=(r(361),r(28)),component=Object(d.a)(f,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("b-container",{staticClass:"actions",attrs:{fluid:""}},[r("b-row",[r("b-col",{attrs:{sm:"auto"}},[r("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.getShareLink(),expression:"getShareLink()"}],attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.$toast.success("Link copied to clipboard",{icon:"fa-clipboard"})}}},[r("i",{staticClass:"fa fa-share-alt",attrs:{"aria-hidden":"true"}}),e._v("\n        Share This List\n      ")])],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.getARandomGame()}}},[r("i",{staticClass:"fa fa-random",attrs:{"aria-hidden":"true"}}),e._v("\n        Get Me A Game\n      ")])],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-button",{directives:[{name:"clipboard",rawName:"v-clipboard",value:e.getList(),expression:"getList()"}],attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.$toast.success("List copied to clipboard",{icon:"fa-clipboard"})}}},[r("i",{staticClass:"fa fa-copy",attrs:{"aria-hidden":"true"}}),e._v("\n        Copy This List\n      ")])],1),e._v(" "),r("b-col",{attrs:{sm:"auto"}},[r("b-button",{attrs:{size:"sm",variant:"primary"},on:{click:function(t){return e.toggleListView()}}},[e.views.listView?r("span",[r("i",{staticClass:"fa fa-th",attrs:{"aria-hidden":"true"}}),e._v("\n          Toggle Grid View\n        ")]):e._e(),e._v(" "),e.views.listView?e._e():r("span",[r("i",{staticClass:"fa fa-list",attrs:{"aria-hidden":"true"}}),e._v("\n          Toggle Table View\n        ")])])],1)],1)],1)},[],!1,null,null,null);t.a=component.exports},375:function(e,t,r){var content=r(414);"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(36).default)("e719312a",content,!0,{sourceMap:!1})},413:function(e,t,r){"use strict";var n=r(375);r.n(n).a},414:function(e,t,r){(e.exports=r(35)(!1)).push([e.i,".container{justify-content:center;align-items:center;text-align:center}.filters .col-sm-auto{padding-bottom:.25rem}",""])},421:function(e,t,r){"use strict";r.r(t);var n=r(92),o=r(363),l=r(366),c=r(367),m=r(368),f=r(364),d=r(365),h=r(43),v=r(10),y=r.n(v),w={components:{VGrid:o.a,VLoader:c.a,VRefresh:l.a,VTable:m.a,VFilters:f.a,VActions:d.a},data:function(){return{listView:!0,tableHeader:[{key:"",value:"",hide:this.$route.query.noimage},{key:"rank",value:"Rank"},{key:"average",value:"Avg. Rating"},{key:"name",value:"Name"},{key:"weight",value:"Weight"},{key:"playingtime",value:"Length"},{key:"bggbestplayers",value:"Best #Player"},{key:"wishlistpriority",value:"Priority"}],userId:n.a.get("username"),waitingForBGG:!1}},computed:Object(h.e)({items:function(e){return y.a.pickBy(e.items.index,["wishlist",!0])},loading:function(e){return!e.pageState.index||!e.pageState.index.loaded},error:function(e){return e.pageState.index?e.pageState.index.error:null},errorMessage:function(e){return e.pageState.index?e.pageState.index.errorMessage:null},views:function(e){return e.views}}),beforeCreate:function(){this.$route.query.userId?n.a.set("username",this.$route.query.userId,3650):this.$route.query.userid?n.a.set("username",this.$route.query.userid,3650):n.a.get("username")||n.a.set("username","Za Warudo",3650)},created:function(){this.$store.commit("filters/setOwned",!1);var e=this.$route.query.userId||this.userId;this.fetch({userIds:e,page:"index",disableLS:"true"===n.a.get("disableLS")})},methods:Object(h.c)({fetch:"items/query/fetch"})},_=(r(413),r(28)),component=Object(_.a)(w,function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"container"},[r("div",[e.loading&&!e.error?r("v-loader"):e._e(),e._v(" "),e.loading||e.error?e._e():r("b-container",{staticClass:"bv-example-row"},[r("b-row",[r("b-col",[r("v-filters"),e._v(" "),r("v-actions",{attrs:{games:e.items}}),e._v(" "),e.views.listView?r("v-table",{attrs:{"default-asc":!0,games:e.items,"default-sort":"wishlistpriority",headers:e.tableHeader}}):e._e(),e._v(" "),e.views.listView?e._e():r("v-grid",{attrs:{games:e.items}})],1)],1)],1),e._v(" "),e.error?r("v-refresh",{attrs:{message:e.errorMessage}}):e._e()],1)])},[],!1,null,null,null);t.default=component.exports}}]);