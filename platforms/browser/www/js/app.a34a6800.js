(function(t){function e(e){for(var a,o,r=e[0],c=e[1],l=e[2],v=0,h=[];v<r.length;v++)o=r[v],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&h.push(i[o][0]),i[o]=0;for(a in c)Object.prototype.hasOwnProperty.call(c,a)&&(t[a]=c[a]);u&&u(e);while(h.length)h.shift()();return n.push.apply(n,l||[]),s()}function s(){for(var t,e=0;e<n.length;e++){for(var s=n[e],a=!0,r=1;r<s.length;r++){var c=s[r];0!==i[c]&&(a=!1)}a&&(n.splice(e--,1),t=o(o.s=s[0]))}return t}var a={},i={app:0},n=[];function o(e){if(a[e])return a[e].exports;var s=a[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,o),s.l=!0,s.exports}o.m=t,o.c=a,o.d=function(t,e,s){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:s})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var s=Object.create(null);if(o.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)o.d(s,a,function(e){return t[e]}.bind(null,a));return s},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var l=0;l<r.length;l++)e(r[l]);var u=c;n.push([0,"chunk-vendors"]),s()})({0:function(t,e,s){t.exports=s("56d7")},"0b2f":function(t,e,s){"use strict";var a=s("8c76"),i=s.n(a);i.a},1:function(t,e){},"1a6e":function(t,e,s){},2001:function(t,e,s){},3139:function(t,e,s){},"3cdf":function(t,e,s){},4280:function(t,e,s){"use strict";var a=s("2001"),i=s.n(a);i.a},"526d":function(t,e,s){},"56d7":function(t,e,s){"use strict";s.r(e);s("cadf"),s("551c"),s("f751"),s("097d"),s("534e"),s("f89d");var a=s("a026"),i=s("2f62"),n=s("b29a"),o=s.n(n),r=(s("8e6e"),s("ac6a"),s("456d"),s("bd86")),c=s("28dd");function l(t,e){var s=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),s.push.apply(s,a)}return s}function u(t){for(var e=1;e<arguments.length;e++){var s=null!=arguments[e]?arguments[e]:{};e%2?l(s,!0).forEach((function(e){Object(r["a"])(t,e,s[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(s)):l(s).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(s,e))}))}return t}a["a"].use(c["a"]),a["a"].http.interceptor.before=function(t){t.url=/(http|https):\/\/([\w.]+\/?)\S*/.test(t.url)?t.url:"https://api.douban.com"+t.url,t.params=u({apikey:"0df993c66c0c636e29ecbb5344252a4a"},t.params)},a["a"].use(i["a"]);var v=new i["a"].Store({modules:{navigator:{strict:!0,namespaced:!0,state:{stack:[],options:{}},mutations:{push:function(t,e){t.stack.push(e)},pop:function(t){t.stack.length>1&&t.stack.pop()},replace:function(t,e){t.stack.pop(),t.stack.push(e)},reset:function(t,e){t.stack=[e||t.stack[0]]}}},tabbar:{strict:!0,namespaced:!0,state:{index:0},mutations:{set:function(t,e){t.index=e}}},movieTabbar:{strict:!0,namespaced:!0,state:{index:0},mutations:{set:function(t,e){t.index=e}}},selectPage:{strict:!0,namespaced:!0,state:{city:{value:localStorage.getItem("city")||"北京",trueValue:!1}},mutations:{changeCity:function(t,e){localStorage.setItem("city",e.value),t.city={value:e.value,trueValue:e.trueValue}}}}}}),h=s("b9dd"),d=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},p=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("img",{attrs:{src:s("8096")}})])}],f={name:"loading",data:function(){return{}}},m=f,g=(s("6307"),s("2877")),y=Object(g["a"])(m,d,p,!1,null,"03d00e4e",null),_=y.exports,b=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-navigator",{attrs:{"page-stack":t.pageStack,"pop-page":t.storePop}})},C=[],k=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",{style:t.swipePosition},[s("v-ons-tabbar",{attrs:{position:"bottom",tabs:t.tabs,index:t.index,"tab-border":"false"},on:{"update:index":function(e){t.index=e}}})],1)},w=[],x=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",{staticClass:"hitMoviePage"},[s("index-header",{attrs:{city:t.city.value}}),s("v-ons-tabbar",{staticClass:"selectTabbar",attrs:{"tab-border":"",swipeable:"",position:"top",tabs:t.tabs,visible:!0}})],1)},P=[],O=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"header"},[s("div",{staticClass:"selectItem",on:{click:function(e){return t.push(t.selectCityPage)}}},[s("span",{staticClass:"selectCity"},[t._v(t._s(t.city))]),s("v-ons-icon",{staticClass:"icon--down",attrs:{icon:"ion-ios-arrow-down,material:md-chevron-down"}})],1),s("input",{staticClass:"search-input",attrs:{type:"search",placeholder:"电影 / 电视剧 / 影人",readonly:""},on:{click:function(e){return t.push(t.searchPage)}}})])},S=[],j=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",{staticClass:"searchPage"},[s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[s("v-ons-search-input",{staticClass:"search",attrs:{type:"search",placeholder:"搜索电影 / 电视剧 / 影人"},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.doSearch(e):null}},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}},[s("input",{staticClass:"search-input"})]),t.searchValue?s("v-ons-icon",{staticClass:"clearSearch",attrs:{icon:"ion-ios-close-empty,material:md-close",size:"2x"},on:{click:function(e){t.searchValue=""}}}):t._e(),s("v-ons-button",{attrs:{modifier:"quiet",ripple:"false"},on:{click:t.back}},[t._v("取消")])],1),s("div",{staticClass:"body"},[!t.searchValue&&t.searchHistoryArr&&t.searchHistoryArr.length>0?s("v-ons-row",{staticClass:"searchHistory"},[s("v-ons-row",{staticClass:"searchHistory__title"},[s("v-ons-col",[t._v("搜索历史")]),s("v-ons-col",{staticClass:"title--right",attrs:{width:"2em"},on:{click:t.searchHistoryClear}},[t._v("清除")])],1),s("div",{staticClass:"searchHistory__main"},[s("v-ons-row",{staticClass:"searchHistory__item"},t._l(t.searchHistoryArr,(function(e,a){return s("v-ons-col",{key:a,attrs:{width:1==t.searchHistoryArr.length?"100%":"50%"},on:{click:function(s){return t.quickSearch(e)}}},[t._v(t._s(e))])})),1)],1)],1):t._e(),t.searchMovieList.length>0?s("v-ons-row",{staticClass:"searchMovie"},[s("v-ons-row",{staticClass:"searchMovie__title"},[s("v-ons-col",[t._v("影视")])],1),s("v-ons-row",{staticClass:"searchMovieList"},t._l(t.searchMovieList,(function(e){return s("v-ons-row",{key:e.id,staticClass:"searchMovieList__item",attrs:{id:e.id},on:{click:function(s){return t.toDetailPage(e.id)}}},[s("v-ons-col",{staticClass:"item__left",attrs:{width:"60px"}},[s("img",{attrs:{src:e.images.small}})]),s("v-ons-col",{staticClass:"item__right"},[s("div",{staticClass:"movieName",domProps:{innerHTML:t._s(t.movieName(e.title))}}),s("div",{staticClass:"movieDetail"},[t._v(t._s(0==e.rating.average?"暂无评":e.rating.average)+"分/"+t._s(e.year))])]),s("v-ons-ripple",{attrs:{modifier:"light-gray",size:"contain"}})],1)})),1),s("v-ons-row",{staticClass:"searchMovie__moreVideo",on:{click:t.doSearch}},[s("v-ons-col",{attrs:{"vertical-align":"center"}},[t._v("查看更多视频")]),s("v-ons-col",{attrs:{"vertical-align":"center",width:"18px"}},[s("v-ons-icon",{attrs:{icon:"ion-ios-arrow-forward,material:md-chevron-right",size:"lg"}})],1),s("v-ons-ripple",{attrs:{modifier:"light-gray",size:"contain"}})],1)],1):t._e(),t.searchValue&&t.searchMovieList.length<=0?s("loading"):t._e()],1)])])},M=[],$=(s("3b2b"),s("a481"),function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",{staticClass:"searchPage",attrs:{"infinite-scroll":t.loadMore}},[s("div",{staticClass:"content"},[s("div",{staticClass:"header"},[s("v-ons-search-input",{staticClass:"search",attrs:{type:"search",placeholder:"搜索电影 / 电视剧 / 影人",transparent:""},on:{keyup:function(e){return e.type.indexOf("key")||13===e.keyCode?t.doSearch(e):null}},model:{value:t.searchValue,callback:function(e){t.searchValue=e},expression:"searchValue"}},[s("input",{staticClass:"search-input"})]),t.searchValue?s("v-ons-icon",{staticClass:"clearSearch",attrs:{icon:"ion-ios-close-empty,material:md-close",size:"2x"},on:{click:function(e){t.searchValue=""}}}):t._e(),s("v-ons-button",{attrs:{modifier:"quiet",ripple:"false"},on:{click:t.back}},[t._v("取消")])],1),s("div",{directives:[{name:"show",rawName:"v-show",value:t.searchMovieList.length>0,expression:"searchMovieList.length>0"}],staticClass:"body"},[t.searchMovieList.length>0?s("v-ons-row",{staticClass:"searchMovie"},[s("v-ons-row",{staticClass:"searchMovie__title"},[t.searchTotal?s("v-ons-col",[t._v("共"+t._s(t.searchTotal)+"个电影")]):t._e()],1),s("v-ons-row",{staticClass:"searchMovieList"},t._l(t.searchMovieList,(function(e){return s("v-ons-row",{key:e.id,staticClass:"searchMovieList__item",attrs:{id:e.id},on:{click:function(s){return t.toDetailPage(e.id)}}},[s("v-ons-col",{staticClass:"item__left",attrs:{width:"79px"}},[s("img",{attrs:{src:e.images.small}})]),s("v-ons-col",{staticClass:"item__right"},[s("div",{staticClass:"movieName"},[t._v(t._s(e.title))]),s("rating",{staticClass:"details__score",attrs:{rating:e.rating}},[s("span",{staticClass:"score__number",attrs:{slot:"rating__text"},slot:"rating__text"},[t._v(t._s(e.rating.average))])]),e.directors.length>0?s("div",[t._v("\n                                导演："+t._s(e.directors["0"].name)+"\n                            ")]):t._e(),e.casts.length>0?s("div",[t._v("主演：\n                                "),t._l(e.casts,(function(e,a){return s("span",{key:a},[t._v(t._s(0!=a?" / ":"")+t._s(e.name))])}))],2):t._e()],1),s("v-ons-ripple",{attrs:{modifier:"light-gray",size:"contain"}})],1)})),1)],1):t._e()],1),s("loading",{directives:[{name:"show",rawName:"v-show",value:0===t.searchMovieList.length,expression:"searchMovieList.length===0"}]})],1)])}),L=[],V=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[t.detail||0!=t.rating.average?s("div",[s("span",{class:"allstart"+t.rating.stars}),t._t("rating__text")],2):t._e(),0==t.rating.average?s("div",{staticClass:"details__score"},[t._v("\n        暂无评分\n    ")]):t._e()])},H=[],N={name:"rating",props:["rating","detail"],data:function(){return{}}},I=N,T=(s("4280"),Object(g["a"])(I,V,H,!1,null,"6f7eafbd",null)),A=T.exports,E=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",{staticClass:"detailPage"},[s("v-ons-toolbar",{style:{backgroundColor:t.posterBG},attrs:{modifier:"transparent cover-content"}},[s("div",{staticClass:"left"},[s("v-ons-back-button",{staticClass:"back-button"})],1),s("div",{staticClass:"center"},["movie"==t.res.subtype?[s("v-ons-icon",{attrs:{icon:"ion-ios-film-outline, material: md-movie",size:"lg"}}),s("span",[t._v("电影")])]:[s("v-ons-icon",{attrs:{icon:"ion-ios-monitor-outline, material: md-tv",size:"lg"}}),s("span",[t._v("电视")])]],2),s("div",{staticClass:"right"},[s("v-ons-toolbar-button",[s("v-ons-icon",{attrs:{icon:"ion-share, material: md-share"}})],1)],1)]),s("div",{directives:[{name:"show",rawName:"v-show",value:t.flag,expression:"flag"}],staticClass:"content"},[s("v-ons-row",{staticClass:"poster",style:{backgroundColor:t.posterBG}},[t.flag?s("img",{attrs:{src:t.res.images.large}}):t._e()]),s("v-ons-row",{staticClass:"detailPage__info"},[s("ons-col",{staticClass:"info__text"},[s("div",{staticClass:"text__title"},[t._v(t._s(t.res.title))]),s("div",[t._v("\n          类型:\n          "),t._l(t.res.genres,(function(e,a){return s("span",{key:e},[t._v(t._s(0!=a?"/":"")+t._s(e))])}))],2),s("div",[t._v("原名:"+t._s(t.res.original_title))]),s("div",[t._v("上映年份:"+t._s(t.res.year))])]),s("ons-col",{staticClass:"info__rating",attrs:{width:"87px"}},[s("v-ons-card",[s("div",{staticClass:"title"},[t._v("豆瓣评分")]),t.flag?s("div",{staticClass:"content"},[0!=t.res.rating.average?s("div",{staticClass:"rating__text"},[t._v(t._s(t.res.rating.average))]):t._e(),s("rating",{attrs:{rating:t.res.rating,detail:!0}}),0!=t.res.rating.average?s("div",[t._v(t._s(t.res.ratings_count)+"人")]):t._e()],1):t._e()])],1)],1),s("v-ons-row",{staticClass:"detailPage__main"},[s("v-ons-row",[s("div",{staticClass:"main__title"},[t._v("简介")]),s("div",{class:t.main__summary},[t._v("\n          "+t._s(t.res.summary)+"\n          "),"-1"!=t.main__summary.indexOf("hideText")?s("div",{staticClass:"summary__expand"},[t._v("\n            ...\n            "),s("span",{on:{click:t.expand}},[t._v("展开")])]):t._e()])]),s("v-ons-row",[s("ons-row",{staticClass:"main__title"},[t._v("影人")]),s("ons-row",{staticClass:"main__scroll-x"},[t._l(t.res.directors,(function(e){return e.avatars?s("ons-col",{key:e.id,staticClass:"main__directors",attrs:{width:"84px"}},[e.avatars?s("img",{attrs:{src:e.avatars.medium}}):t._e(),s("div",{staticClass:"g-overflowHide"},[t._v(t._s(e.name))]),s("div",{staticClass:"scroll-x__label"},[t._v("导演")])]):t._e()})),t._l(t.res.casts,(function(e){return e.avatars?s("ons-col",{key:e.id,staticClass:"main__casts",attrs:{width:"84px"}},[s("img",{attrs:{src:e.avatars.medium}}),s("div",{staticClass:"g-overflowHide"},[t._v(t._s(e.name))]),s("div",{staticClass:"scroll-x__label"},[t._v("演员")])]):t._e()}))],2)],1)],1)],1),s("loading",{directives:[{name:"show",rawName:"v-show",value:!t.flag,expression:"!flag"}]})],1)},D=[],G=(s("96cf"),s("3b8d")),z=s("aaf6"),J=s.n(z),U={name:"detailPage",data:function(){return{url:"/v2/movie/subject/",res:{},posterBG:"",main__summary:"main__summary hideText",flag:!1,id:""}},created:function(){var t=Object(G["a"])(regeneratorRuntime.mark((function t(){var e,s=this;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return this,t.next=3,this.$http.jsonp(this.url+this.id).then((function(t){var e=t.body;s.res=e}),(function(t){console.log(t)}));case 3:return t.next=5,J()(this.res.images.large,{paletteSize:200,ignore:["rgb(0,0,0)","rgb(255,255,255)"]});case 5:e=t.sent,this.posterBG=e[0].color,this.flag=!0;case 8:case"end":return t.stop()}}),t,this)})));function e(){return t.apply(this,arguments)}return e}(),methods:{expand:function(){this.main__summary="main__summary"}},components:{rating:A}},B=U,R=(s("f06d"),s("8743"),Object(g["a"])(B,E,D,!1,null,"41d70d85",null)),q=R.exports,F={name:"searchPage2",data:function(){return{url:"/v2/movie/search?q=",searchMovieList:[],searchTotal:"",start:0,count:20,destroy:!1}},created:function(){this.searchValue&&this.doSearch()},methods:{loadList:function(t){var e=this;""!=e.searchValue&&this.$http.jsonp(e.url+e.searchValue+"&start="+20*e.start+"&count="+e.count).then((function(s){e.start+=1,e.searchMovieList=e.searchMovieList.concat(s.body.subjects),e.searchTotal=s.body.total,t&&t(),s.body.total<=20*e.start&&(e.start="-1")}),(function(t){console.error(t.message)}))},loadMore:function(t){"-1"!=this.start?this.loadList(t):t()},back:function(){this.$store.commit("navigator/pop")},doSearch:function(){this.start=0,this.searchMovieList=[],this.loadList()},toDetailPage:function(t){this.$store.commit("navigator/push",{extends:q,data:function(){return{id:t}}})}},components:{rating:A}},X=F,Q=(s("7494"),Object(g["a"])(X,$,L,!1,null,"5029cd62",null)),Y=Q.exports,Z={data:function(){return{url:"/v2/movie/search?q=",searchValue:"",searchMovieList:[],searchHistoryArr:JSON.parse(localStorage.getItem("searchHistoryArr"))}},beforeRouteLeave:function(t,e,s){"/HitMoviePage"==t.path&&(this.searchValue=""),s()},watch:{searchValue:function(){""==this.searchValue?this.searchMovieList=[]:this.loadList(this.searchValue)}},methods:{loadList:function(t){if(""!=t){var e=this;this.$http.jsonp(e.url+t).then((function(t){""!=e.searchValue&&(e.searchMovieList=t.body.subjects)}),(function(t){console.error(t.message)}))}},movieName:function(t){return t.replace(new RegExp(this.searchValue,"gm"),"<span>"+this.searchValue+"</span>")},back:function(){this.$store.commit("navigator/pop")},searchHistoryClear:function(){this.searchHistoryArr=[],localStorage.clear()},doSearch:function(){this.saveSearch();var t=this;this.$store.commit("navigator/push",{extends:Y,data:function(){return{searchValue:t.searchValue}}})},saveSearch:function(){var t=JSON.parse(localStorage.getItem("searchHistoryArr"))||[],e=t.indexOf(this.searchValue);"-1"!=e&&t.splice(e,1),t.unshift(this.searchValue),t.length>4&&(t.length=4),localStorage.setItem("searchHistoryArr",JSON.stringify(t)),this.searchHistoryArr=JSON.parse(localStorage.getItem("searchHistoryArr"))},quickSearch:function(t){this.searchValue=t},toDetailPage:function(t){this.saveSearch(),this.$store.commit("navigator/push",{extends:q,data:function(){return{id:t}}})}}},K=Z,W=(s("6c8c"),Object(g["a"])(K,j,M,!1,null,"5afbcceb",null)),tt=W.exports,et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",{staticClass:"selectCityPage"},[s("v-ons-toolbar",{attrs:{modifier:"noshadow"}},[s("div",{staticClass:"left"},[s("v-ons-back-button",{staticClass:"back-button"})],1),s("div",{staticClass:"center"},[t._v("选择城市")])]),s("div",{staticClass:"middleBlock"},[t.positionCity?[s("div",{staticClass:"cityItemLabel"},[t._v("GPS定位城市")]),s("v-ons-col",{staticClass:"noMargin",attrs:{width:"28.9%",name:t.positionCity},on:{click:function(e){return t.selectCity("GPS")}}},[s("v-ons-icon",{staticClass:"icon--location",attrs:{icon:"ion-location"}}),s("span",[t._v(t._s(t.positionCity))])],1)]:t._e(),s("div",{staticClass:"cityItemLabel"},[t._v("热门城市")]),s("v-ons-row",{staticClass:"hotCityItem"},t._l(t.hotCity,(function(e,a){return s("v-ons-col",{key:e.id,class:a>11?"noMargin":"",attrs:{width:"28.9%"},on:{click:function(s){return t.selectCity(e.name)}}},[t._v(t._s(e.name))])})),1)],2),s("div",{staticClass:"bottomBlock"},[s("v-ons-list",{attrs:{modifier:"noborder"}},[s("v-ons-lazy-repeat",{attrs:{"render-item":t.renderItem,length:t.pinyinCityList.length}})],1)],1)],1)},st=[],at=s("e56c"),it={name:"selectCityPage",data:function(){return{hotCity:[],pinyinCityList:[],modalVisible:!1,scrollFixed:{first:!0,top:0,headerIdNumber:0}}},created:function(){this.getCity(),this.pinyinCityList=at.result.map((function(t,e){return 0==e?t.first=!0:at.result[e-1].key!=t.key&&(t.first=!0),t}))},computed:{hotCityUrl:function(){return"/v2/loc/list"},positionCity:function(){return this.$store.state.selectPage.city.trueValue&&this.$store.state.selectPage.city.value}},methods:{getCity:function(){var t=this;t.$http.jsonp(t.hotCityUrl).then((function(e){var s=e.body;t.hotCity=(s.locs.length=15)&&s.locs}),(function(t){console.log(t)}))},renderItem:function(t){var e=this;return new a["a"]({template:'<v-ons-list-item :key="index" @click="selectCity2('.concat(t,')" modifier="longdivider">').concat(e.getListItem(t),"</v-ons-list-item>"),data:function(){return{index:t}},methods:{selectCity2:function(t){"listRowHeader"!=event.target.className&&(e.$store.commit("selectPage/changeCity",{value:e.pinyinCityList[t].city,trueValue:!1}),e.$store.commit("navigator/pop"))}}})},getListItem:function(t){var e=this,s=e.pinyinCityList,a="",i="listRow--border";return s[t].first&&(i="",a="<v-ons-row class='listRowHeader' id=\"".concat("header"+(t+1),'">\n                      ').concat(s[t].key,"\n                    </v-ons-row>")),a+="<v-ons-row class='listRow ".concat(i,"'>\n                      ").concat(s[t].city,"\n                   </v-ons-row>"),a},selectCity:function(t){"GPS"!=t&&this.$store.commit("selectPage/changeCity",{value:t,trueValue:!1}),this.$store.commit("navigator/pop")}}},nt=it,ot=(s("65a9"),Object(g["a"])(nt,et,st,!1,null,null,null)),rt=ot.exports,ct={name:"indexHeader",props:["city"],data:function(){return{searchPage:tt,selectCityPage:rt}},methods:{push:function(t){this.$store.commit("navigator/push",t)}}},lt=ct,ut=(s("91e0"),Object(g["a"])(lt,O,S,!1,null,"22cb7b9c",null)),vt=ut.exports,ht=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",{attrs:{"infinite-scroll":t.loadMore}},[s("div",{directives:[{name:"show",rawName:"v-show",value:t.items.length>0,expression:"items.length>0"}],staticClass:"content"},[s("v-ons-pull-hook",{attrs:{action:t.firstLoadItem},on:{changestate:function(e){t.state=e.state}}},[s("span",{directives:[{name:"show",rawName:"v-show",value:"initial"===t.state,expression:"state === 'initial'"}]},[t._v(" 上拉刷新 ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"preaction"===t.state,expression:"state === 'preaction'"}]},[t._v(" 放开刷新 ")]),s("span",{directives:[{name:"show",rawName:"v-show",value:"action"===t.state,expression:"state === 'action'"}]},[t._v(" 加载中... ")])]),s("v-ons-list",t._l(t.items,(function(e){return s("v-ons-list-item",{key:e.id,attrs:{id:e.id,modifier:"longdivider",size:"contain",tappable:""},on:{click:function(s){return t.toDetailPage(e.id)}}},[s("div",{staticClass:"left"},[s("img",{attrs:{src:e.images.medium,onerror:t.defaultImg}})]),s("div",{staticClass:"center"},[s("div",{staticClass:"center__title"},[t._v(t._s(e.title))]),s("div",{staticClass:"center__details"},[s("rating",{staticClass:"details__score",attrs:{rating:e.rating}},[s("span",{attrs:{slot:"rating__text"},slot:"rating__text"},[t._v(t._s(e.rating.average))])]),e.directors.length>0?s("div",[t._v("\n              导演："+t._s(e.directors["0"].name)+"\n            ")]):t._e(),e.casts.length>0?s("div",[t._v("主演：\n              "),t._l(e.casts,(function(e,a){return s("span",{key:a},[t._v(t._s(0!=a?" / ":"")+t._s(e.name))])}))],2):t._e()],1),s("span",{staticClass:"center__watch"},[t._v(t._s(e.collect_count)+"人看过")])])])})),1)],1),s("div",{directives:[{name:"show",rawName:"v-show",value:0===t.items.length,expression:"items.length===0"}]},[s("loading")],1)])},dt=[],pt={props:["url"],data:function(){return{state:"initial",items:[],start:0,count:20,total:0,defaultImg:"this.src='"+s("be7e")+"'"}},computed:{city:function(){return this.items=[],this.$store.state.selectPage.city.value}},watch:{city:{handler:function(){""!=this.city&&this.firstLoadItem()},deep:!0}},methods:{loadMore:function(t){var e=this;"-1"!=e.start?this.loadList(void 0,t):t()},firstLoadItem:function(t){this.loadList("0",t)},loadList:function(t,e){var s=this;this.$http.jsonp(s.url+s.city+"&start="+(t||20*s.start)+"&count="+s.count).then((function(a){s.total=a.body.total,0==t?(s.items=a.body.subjects,s.start=1,e&&e()):(s.start++,s.items=s.items.concat(a.body.subjects),e&&e()),a.body.total<=20*s.start&&(s.start="-1")}),(function(t){console.error(t.message)}))},toDetailPage:function(t){this.$store.commit("navigator/push",{extends:q,data:function(){return{id:t}}})}},components:{rating:A}},ft=pt,mt=(s("0b2f"),Object(g["a"])(ft,ht,dt,!1,null,"373d096a",null)),gt=mt.exports,yt={name:"HitMoviePage",data:function(){return{hitMovieUrl:"/v2/movie/in_theaters?city=",comingSoonUrl:"/v2/movie/coming_soon?city=",ak:"inNtxrDqUe6De9bosxvTV3sVaRGt5sGh",BaiDuMapUrl:"https://api.map.baidu.com/geocoder/v2/"}},created:function(){this.getPosition()},computed:{city:function(){return this.$store.state.selectPage.city},tabs:function(){return[{label:"正在热映",page:gt,props:{url:this.hitMovieUrl}},{label:"即将上映",page:gt,props:{url:this.comingSoonUrl}}]}},methods:{push:function(t){this.$store.commit("navigator/push",t)},getPosition:function(){var t=this,e={timeout:1e3};navigator.geolocation.getCurrentPosition(s,a,e);function s(e){t.$http.jsonp(t.BaiDuMapUrl+"?location="+e.coords.latitude+","+e.coords.longitude+"&output=json&pois=1&ak="+t.ak).then((function(e){var s=e.body,a=s.result.addressComponent.city;a.lastIndexOf("市")==a.length-1&&(a=a.substring(0,a.length-1)),t.$store.commit("selectPage/changeCity",{value:a,trueValue:!0})}),(function(t){console.log(t)}))}function a(e){t.$store.commit("selectPage/changeCity",{value:"北京",trueValue:!1}),t.$ons.notification.toast("自动定位失败，您可以手动设置位置",{timeout:2e3})}}},watch:{headerColOne:function(){this.headerColTwo=!this.headerColOne},headerColTwo:function(){this.headerColOne=!this.headerColTwo}},components:{indexHeader:vt,hitMovieList:gt}},_t=yt,bt=(s("6f6b"),Object(g["a"])(_t,x,P,!1,null,null,null)),Ct=bt.exports,kt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("v-ons-page",[s("div",{staticClass:"content"},[t._v("\n        菜单页\n    ")])])},wt=[],xt={name:"findVideo",data:function(){return{}}},Pt=xt,Ot=(s("7317"),Object(g["a"])(Pt,kt,wt,!1,null,"12cf474f",null)),St=Ot.exports,jt={data:function(){return{animationOptions:{},topPosition:0,tabs:[{label:"热映",icon:"ion-ios-book",activeIcon:"md-face",page:Ct,key:"HitMoviePage"},{label:"找片",icon:"ion-ios-eye",page:St,key:"FindVideo"}]}},computed:{index:{get:function(){return this.$store.state.tabbar.index},set:function(t){this.$store.commit("tabbar/set",t)}},title:function(){return this.md?"Onsen UI":this.tabs[this.index].title||this.tabs[this.index].label},swipeTheme:function(){return this.md&&{backgroundColor:"rgb(".concat(this.colors.join(","),")"),transition:"all ".concat(this.animationOptions.duration||0,"s ").concat(this.animationOptions.timing||"")}},swipePosition:function(){return this.md&&{top:this.topPosition+"px",transition:"all ".concat(this.animationOptions.duration||0,"s ").concat(this.animationOptions.timing||"")}}}},Mt=jt,$t=(s("71c5"),Object(g["a"])(Mt,k,w,!1,null,null,null)),Lt=$t.exports,Vt={beforeCreate:function(){this.$store.commit("navigator/push",Lt)},computed:{pageStack:function(){return this.$store.state.navigator.stack},options:function(){return this.$store.state.navigator.options}},methods:{storePop:function(){this.$store.commit("navigator/pop")}}},Ht=Vt,Nt=(s("bf16"),Object(g["a"])(Ht,b,C,!1,null,null,null)),It=Nt.exports;a["a"].use(i["a"]),a["a"].use(o.a),a["a"].use(h["a"]),a["a"].component("loading",_),a["a"].config.productionTip=!1,new a["a"]({el:"#app",components:{AppNavigator:It},template:"<AppNavigator/>",store:v,beforeCreate:function(){a["a"].prototype.md=this.$ons.platform.isAndroid()}})},6307:function(t,e,s){"use strict";var a=s("1a6e"),i=s.n(a);i.a},"63b62":function(t,e,s){},"65a9":function(t,e,s){"use strict";var a=s("526d"),i=s.n(a);i.a},"6c8c":function(t,e,s){"use strict";var a=s("e400"),i=s.n(a);i.a},"6df2":function(t,e,s){},"6f6b":function(t,e,s){"use strict";var a=s("63b62"),i=s.n(a);i.a},"71c5":function(t,e,s){"use strict";var a=s("3cdf"),i=s.n(a);i.a},7317:function(t,e,s){"use strict";var a=s("d836"),i=s.n(a);i.a},7494:function(t,e,s){"use strict";var a=s("eab8"),i=s.n(a);i.a},"7e60":function(t,e,s){},8096:function(t,e,s){t.exports=s.p+"img/loading_green.c0f9be0.c0f9be04.gif"},8743:function(t,e,s){"use strict";var a=s("6df2"),i=s.n(a);i.a},"8c76":function(t,e,s){},"91e0":function(t,e,s){"use strict";var a=s("3139"),i=s.n(a);i.a},be7e:function(t,e,s){t.exports=s.p+"img/movie_default.300c64a8.png"},bf16:function(t,e,s){"use strict";var a=s("c019"),i=s.n(a);i.a},c019:function(t,e,s){},d836:function(t,e,s){},e400:function(t,e,s){},e56c:function(t){t.exports=JSON.parse('{"status":"0","result":[{"city":"安徽","key":"A"},{"city":"澳门","key":"A"},{"city":"北京","key":"B"},{"city":"重庆","key":"C"},{"city":"福建","key":"F"},{"city":"甘肃","key":"G"},{"city":"广东","key":"G"},{"city":"广西","key":"G"},{"city":"贵州","key":"G"},{"city":"海南","key":"H"},{"city":"河北","key":"H"},{"city":"黑龙江","key":"H"},{"city":"河南","key":"H"},{"city":"香港","key":"H"},{"city":"湖北","key":"H"},{"city":"湖南","key":"H"},{"city":"江苏","key":"J"},{"city":"江西","key":"J"},{"city":"吉林","key":"J"},{"city":"辽宁","key":"L"},{"city":"内蒙古","key":"N"},{"city":"宁夏","key":"N"},{"city":"青海","key":"Q"},{"city":"陕西","key":"S"},{"city":"山东","key":"S"},{"city":"上海","key":"S"},{"city":"山西","key":"S"},{"city":"四川","key":"S"},{"city":"天津","key":"T"},{"city":"台湾","key":"T"},{"city":"新疆","key":"X"},{"city":"西藏","key":"X"},{"city":"云南","key":"Y"},{"city":"浙江","key":"Z"}]}')},eab8:function(t,e,s){},f06d:function(t,e,s){"use strict";var a=s("7e60"),i=s.n(a);i.a}});