(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-a14ee4b2"],{"4da0":function(t,e,i){"use strict";var n=i("6099"),r=i.n(n);r.a},6099:function(t,e,i){},"60c5":function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"details"},[i("mm-loading",{model:{value:t.mmLoadShow,callback:function(e){t.mmLoadShow=e},expression:"mmLoadShow"}}),i("music-list",{attrs:{list:t.list},on:{select:t.selectItem}},[i("div",{staticClass:"list-btn",attrs:{slot:"listBtn"},slot:"listBtn"},[i("span",{on:{click:t.loadMore}},[t._v("加载更多")])])])],1)},r=[],s=(i("8e6e"),i("ac6a"),i("456d"),i("bd86")),c=i("2f62"),o=i("365c"),a=i("f904"),l=i("5362"),u=i("ac0d");function d(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function p(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?d(i,!0).forEach((function(e){Object(s["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):d(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}var f={name:"Detail",components:{MmLoading:a["a"],MusicList:l["a"]},mixins:[u["a"]],data:function(){return{list:[],id:"",page:1,size:12,isEnd:!1}},created:function(){this.id=this.$route.params.id,this.loadMore()},methods:p({loadMore:function(){var t=this,e=this.id,i=this.page,n=this.isEnd;n||(this.mmLoadShow=!0,Object(o["c"])({id:e,page:i}).then((function(e){Array.prototype.push.apply(t.list,e.list),t.list.splice(0,0),t._hideLoad(),t.page+=1,t.list.length>=e.total&&(t.isEnd=!0)})))},selectItem:function(t,e){this.selectPlay({list:this.list,index:e})}},Object(c["b"])(["selectPlay"]))},b=f,h=(i("4da0"),i("2877")),O=Object(h["a"])(b,n,r,!1,null,"52ffdd6e",null);e["default"]=O.exports},ac0d:function(t,e,i){"use strict";i.d(e,"a",(function(){return o}));i("8e6e"),i("ac6a"),i("456d");var n=i("bd86"),r=i("2f62");function s(t,e){var i=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),i.push.apply(i,n)}return i}function c(t){for(var e=1;e<arguments.length;e++){var i=null!=arguments[e]?arguments[e]:{};e%2?s(i,!0).forEach((function(e){Object(n["a"])(t,e,i[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(i)):s(i).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(i,e))}))}return t}c({},Object(r["c"])(["playing","currentMusic"])),c({selectItem:function(t,e){t.id===this.currentMusic.id&&this.playing?this.setPlaying(!1):this.selectPlay({list:this.list,index:e})}},Object(r["d"])({setPlaying:"SET_PLAYING"}),{},Object(r["b"])(["selectPlay"]));var o={data:function(){return{mmLoadShow:!0}},methods:{_hideLoad:function(){var t,e=this;clearTimeout(t),t=setTimeout((function(){e.mmLoadShow=!1}),200)}}}}}]);
//# sourceMappingURL=chunk-a14ee4b2.ecf9916d.js.map