webpackJsonp([0],[,,,function(t,e,a){function s(t){a(18)}var n=a(0)(a(5),a(35),s,null,null);t.exports=n.exports},function(t,e,a){"use strict";var s=a(1),n=a(41),o=a(3),i=(a.n(o),a(27)),r=a.n(i),c=a(25),l=a.n(c),d=a(24),u=a.n(d),v=a(31),p=a.n(v),_=a(30),m=a.n(_),f=a(26),h=a.n(f);s.a.use(n.a),e.a=new n.a({mode:"history",routes:[{path:"/",name:"Hot",component:r.a},{path:"/hot",component:r.a},{path:"/comesoon",component:l.a},{path:"/beimei",component:u.a},{path:"/top250",component:p.a},{name:"search",path:"/search/:keyword",component:m.a},{name:"details_page",path:"/details_page/:id",component:h.a}]})},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(28),n=a.n(s),o=a(29),i=a.n(o);e.default={name:"app",data:function(){return{keyword:"",comeId:""}},components:{myHeader:n.a,myNav:i.a},methods:{fn:function(t){this.keyword=t},getId:function(t){this.comeId=t,console.log(this.comeId)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(2),o=a.n(n);s.a.use(o.a),e.default={name:"beimei",props:["comesoonid"],data:function(){return{list:[],start:1,show:!1,isloaded:!0}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.isloaded=!0,s.a.jsonp("https://api.douban.com/v2/movie/us_box").then(function(e){t.isloaded=!1,t.list=e,t.show=!0,console.log(e)})},scrollLoad:function(){var t=window.screen.height,e=this;t+document.body.scrollTop>=document.body.scrollHeight&&setTimeout(function(){e.start++,e.getData()},1e3)},sendData:function(t){this.$emit("createData",t)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(2),o=a.n(n);s.a.use(o.a),e.default={name:"comesoon",props:["comesoonid"],data:function(){return{list:[],start:1,isloaded:!0}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.isloaded=!0;var e=20*(this.start-1);s.a.jsonp("https://api.douban.com/v2/movie/coming_soon?start="+e).then(function(a){t.isloaded=!1,e>a.total||(t.list=a.subjects,console.log(a))})},scrollLoad:function(){var t=window.screen.height,e=this;t+document.body.scrollTop>=document.body.scrollHeight&&setTimeout(function(){e.start++,e.getData()},1e3)},sendData:function(t){this.$emit("createData",t)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(2),o=a.n(n);s.a.use(o.a),e.default={name:"details_page",props:["comesoonid"],data:function(){return{isloaded:!0,old:0,list:{images:{large:""},rating:{average:0},summary:""}}},computed:{cut:function(){return this.list.summary}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.isloaded=!0,s.a.jsonp("https://api.douban.com/v2/movie/subject/"+this.comesoonid).then(function(e){t.isloaded=!1,t.list=e,console.log(t.list)})},start:function(t){this.old=t.touches[0].pageX},end:function(t){t.changedTouches[0].pageX>this.old+100&&history.go(-1)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(2);a.n(n);e.default={name:"hot",props:["comesoonid"],data:function(){return{list:[],start:1,isloaded:!0}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.isloaded=!0;var e=20*(this.start-1);s.a.jsonp("https://api.douban.com/v2/movie/in_theaters?start="+e).then(function(a){t.isloaded=!1,e>a.total||(t.list=a.subjects,console.log(a))})},scrollLoad:function(){var t=window.screen.height,e=this;t+document.body.scrollTop>=document.body.scrollHeight&&setTimeout(function(){e.start++,e.getData()},1e3)},sendData:function(t){this.$emit("createData",t)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"my-header",props:["aa"],data:function(){return{val:""}},methods:{getVal:function(){this.$emit("handle",this.val)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={name:"my-nav"}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(2),o=a.n(n);s.a.use(o.a),e.default={name:"search",props:["bb","comesoonid"],data:function(){return{list:[],start:1,isloaded:!0}},watch:{$route:function(){this.getData()}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.isloaded=!0;var e=20*(this.start-1);s.a.jsonp("https://api.douban.com/v2/movie/search?q="+this.bb+"&start="+e).then(function(a){console.log(a),t.isloaded=!1,e>a.total||(a.subjects.length?t.list=a.subjects:alert("您搜索的电影不存在"))}).catch(function(t){console.log(t)})},scrollLoad:function(){var t=window.screen.height,e=this;t+document.body.scrollTop>=document.body.scrollHeight&&setTimeout(function(){e.start++,e.getData()},500)},sendData:function(t){this.$emit("createData",t)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(2),o=a.n(n);s.a.use(o.a),e.default={name:"top250",props:["comesoonid"],data:function(){return{list:[],start:1,isloaded:!0}},created:function(){this.getData()},methods:{getData:function(){var t=this;this.isloaded=!0;var e=20*(this.start-1);s.a.jsonp("https://api.douban.com/v2/movie/top250?start="+e).then(function(a){t.isloaded=!1,e>a.total||(t.list=a.subjects,console.log(a))})},scrollLoad:function(){var t=window.screen.height,e=this;t+document.body.scrollTop>=document.body.scrollHeight&&setTimeout(function(){e.start++,e.getData()},1e3)},sendData:function(t){this.$emit("createData",t)}}}},function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var s=a(1),n=a(3),o=a.n(n),i=a(4);s.a.config.productionTip=!1,new s.a({el:"#app",router:i.a,template:"<App/>",components:{App:o.a}})},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e){},function(t,e,a){function s(t){a(17)}var n=a(0)(a(6),a(34),s,"data-v-17ef8878",null);t.exports=n.exports},function(t,e,a){function s(t){a(19)}var n=a(0)(a(7),a(36),s,"data-v-3be25bec",null);t.exports=n.exports},function(t,e,a){function s(t){a(22)}var n=a(0)(a(8),a(39),s,"data-v-69be29ce",null);t.exports=n.exports},function(t,e,a){function s(t){a(23)}var n=a(0)(a(9),a(40),s,"data-v-fb431ea0",null);t.exports=n.exports},function(t,e,a){function s(t){a(21)}var n=a(0)(a(10),a(38),s,null,null);t.exports=n.exports},function(t,e,a){function s(t){a(15)}var n=a(0)(a(11),a(32),s,null,null);t.exports=n.exports},function(t,e,a){function s(t){a(16)}var n=a(0)(a(12),a(33),s,"data-v-16ce0415",null);t.exports=n.exports},function(t,e,a){function s(t){a(20)}var n=a(0)(a(13),a(37),s,"data-v-60d28b45",null);t.exports=n.exports},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"nav-box"},[a("router-link",{attrs:{tag:"a",to:"/",exact:""}},[a("a",[t._v("正在热映")])]),t._v(" "),a("router-link",{attrs:{tag:"a",to:"/comesoon"}},[a("a",[t._v("即将上映")])]),t._v(" "),a("router-link",{attrs:{tag:"a",to:"/beimei"}},[a("a",[t._v("北美票房榜")])]),t._v(" "),a("router-link",{attrs:{tag:"a",to:"/top250"}},[a("a",[t._v("Top250")])])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"search",on:{touchend:t.scrollLoad}},[t._l(t.list,function(e,s){return a("dl",{key:s},[a("dt",[a("router-link",{attrs:{to:{name:"details_page",params:{id:e.id}}},nativeOn:{touchstart:function(a){t.sendData(e.id)}}},[a("img",{attrs:{src:e.images.large}})])],1),t._v(" "),a("dd",[a("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"rating"},[t._v("评分:"+t._s(e.rating.average))])])])}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isloaded,expression:"isloaded"}],staticClass:"loading"})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"beimei",on:{touchend:t.scrollLoad}},[a("div",{staticClass:"date"},[t._v(t._s(t.list.date)),a("span",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}]},[t._v("/美元")])]),t._v(" "),t._l(t.list.subjects,function(e,s){return a("dl",{key:s},[a("dt",[a("router-link",{attrs:{to:{name:"details_page",params:{id:e.subject.id}}},nativeOn:{touchstart:function(a){t.sendData(e.subject.id)}}},[a("img",{attrs:{src:e.subject.images.large}})])],1),t._v(" "),a("dd",[a("p",{staticClass:"title"},[t._v(t._s(e.subject.title))]),t._v(" "),a("p",{staticClass:"rating"},[t._v("票房:$"+t._s(Math.ceil(e.box/1e4)+"万"))])])])}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isloaded,expression:"isloaded"}],staticClass:"loading"})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{attrs:{id:"app"}},[a("my-header",{attrs:{aa:t.keyword},on:{handle:t.fn}}),t._v(" "),a("my-nav"),t._v(" "),a("router-view",{attrs:{bb:t.keyword,comesoonid:t.comeId},on:{createData:t.getId}})],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"comesoon",on:{touchend:t.scrollLoad}},[t._l(t.list,function(e,s){return a("dl",{key:s},[a("dt",[a("router-link",{attrs:{to:{name:"details_page",params:{id:e.id}}},nativeOn:{touchstart:function(a){t.sendData(e.id)}}},[a("img",{attrs:{src:e.images.large}})])],1),t._v(" "),a("dd",[a("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"rating"},[t._v("评分:"+t._s(e.rating.average))])])])}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isloaded,expression:"isloaded"}],staticClass:"loading"})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"top250",on:{touchend:t.scrollLoad}},[t._l(t.list,function(e,s){return a("dl",{key:s},[a("dt",[a("router-link",{attrs:{to:{name:"details_page",params:{id:e.id}}},nativeOn:{touchstart:function(a){t.sendData(e.id)}}},[a("img",{attrs:{src:e.images.large}})])],1),t._v(" "),a("dd",[a("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"rating"},[t._v("评分:"+t._s(e.rating.average))])])])}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isloaded,expression:"isloaded"}],staticClass:"loading"})],2)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"h-box"},[a("h1",[t._v("豆花影讯")]),t._v(" "),a("input",{directives:[{name:"model",rawName:"v-model",value:t.val,expression:"val"}],staticClass:"txt",attrs:{type:"text",placeholder:"电影名称 | 导演 | 演员"},domProps:{value:t.val},on:{input:function(e){e.target.composing||(t.val=e.target.value)}}}),t._v(" "),a("router-link",{staticClass:"btn",attrs:{tag:"button",to:{name:"search",params:{keyword:t.val}}},nativeOn:{touchstart:function(e){t.getVal(e)}}},[t._v("搜索")])],1)},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"details"},[a("div",{staticClass:"con-bg",on:{touchstart:t.start,touchend:t.end}},[a("p",{staticClass:"title"},[t._v(t._s(t.list.title))]),t._v(" "),a("dl",[a("dt",[a("img",{attrs:{src:t.list.images.large}})]),t._v(" "),a("dd",[a("p",{staticClass:"directors"},[t._v("导演：\n                    "),t._l(t.list.directors,function(e,s){return a("span",{key:s},[t._v(t._s(e.name))])})],2),t._v(" "),a("p",{staticClass:"genres"},t._l(t.list.genres,function(e,s){return a("span",{key:s},[t._v(t._s(e)+" ")])})),t._v(" "),a("p",[t._l(t.list.countries,function(e,s){return a("span",{key:s},[t._v(t._s(e)+" | ")])}),t._v(" "),a("span",[t._v(t._s(t.list.year))])],2),t._v(" "),a("p",[a("span",[t._v("用户评分："+t._s(t.list.rating.average))])]),t._v(" "),a("p",[a("span",[t._v("评分人数："+t._s(t.list.ratings_count)+"人")])]),t._v(" "),a("p",[a("span",[t._v("想看人数："+t._s(t.list.wish_count)+"人")])]),t._v(" "),a("p",[a("span",[t._v("看过人数："+t._s(t.list.collect_count)+"人")])])])])]),t._v(" "),a("p",{staticClass:"zhu"},[t._v("一主要演员一")]),t._v(" "),a("div",{staticClass:"casts"},t._l(t.list.casts,function(e,s){return a("dl",{key:s,staticClass:"castts-dl"},[a("dt",[a("img",{attrs:{src:e.avatars.large}})]),t._v(" "),a("dd",[t._v(t._s(e.name))])])})),t._v(" "),a("p",{staticClass:"zhu"},[t._v("一影片简介一")]),t._v(" "),a("div",{staticClass:"summary"},[a("p",[t._v(t._s(t.cut))])]),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isloaded,expression:"isloaded"}],staticClass:"loading"})])},staticRenderFns:[]}},function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"hot",on:{touchend:t.scrollLoad}},[t._l(t.list,function(e,s){return a("dl",{key:s},[a("dt",[a("router-link",{attrs:{to:{name:"details_page",params:{id:e.id}}},nativeOn:{touchstart:function(a){t.sendData(e.id)}}},[a("img",{attrs:{src:e.images.large}})])],1),t._v(" "),a("dd",[a("div",{staticClass:"content"},[a("p",{staticClass:"title"},[t._v(t._s(e.title))]),t._v(" "),a("p",{staticClass:"original_title"},[t._v("原名:"+t._s(e.original_title))]),t._v(" "),a("p",{staticClass:"rating"},[t._v("豆瓣评分:"+t._s(e.rating.average)+"分  (已有"+t._s(e.collect_count)+"人评价)")]),t._v(" "),a("p",[t._v("导演:\n                    "),t._l(e.directors,function(s,n){return a("span",{key:n},[t._v(t._s(e.directors.length>1?s.name+"/":s.name))])})],2),t._v(" "),a("p",[t._v("主演:\n                    "),t._l(e.casts,function(s,n){return a("span",{key:n},[t._v(t._s(e.casts.length>1?s.name+"/":s.name))])})],2),t._v(" "),a("p",[t._v("类型:\n                    "),t._l(e.genres,function(s,n){return a("span",{key:n},[t._v(t._s(e.genres.length>1?s+"/":s))])})],2),t._v(" "),a("p",[t._v("年份:"+t._s(e.year))])])])])}),t._v(" "),a("div",{directives:[{name:"show",rawName:"v-show",value:t.isloaded,expression:"isloaded"}],staticClass:"loading"})],2)},staticRenderFns:[]}}],[14]);
//# sourceMappingURL=app.be02ce8ef1e9832a3ba3.js.map