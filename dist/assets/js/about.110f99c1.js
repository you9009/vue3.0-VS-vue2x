(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["about"],{b0c0:function(t,e,n){var u=n("83ab"),c=n("9bf2").f,o=Function.prototype,b=o.toString,r=/^\s*function ([^ (]*)/,i="name";u&&!(i in o)&&c(o,i,{configurable:!0,get:function(){try{return b.call(this).match(r)[1]}catch(t){return""}}})},f820:function(t,e,n){"use strict";n.r(e);n("b0c0");var u=n("5c40"),c=n("9ff4");function o(t,e){return Object(u["p"])(),Object(u["e"])(u["b"],null,[Object(u["i"])("h1",null,"路由："+Object(c["E"])(t.route.name),1),Object(u["i"])("h1",null,"vue3-ref："+Object(c["E"])(t.number),1),Object(u["i"])("h2",null,"computed：当前数据的两倍："+Object(c["E"])(t.doubleNum),1),Object(u["i"])("p",null,[Object(u["i"])("button",{onClick:e[1]||(e[1]=function(e){return t.add(e)})},"增加")]),Object(u["i"])("h2",null,"获取Vuex中的值："+Object(c["E"])(t.testNum),1),Object(u["i"])("p",null,[Object(u["i"])("button",{onClick:e[2]||(e[2]=function(e){return t.update(e)})},"更新Vuex中的值")])],64)}var b=n("a1e9"),r=n("8c4f"),i=n("2f62"),l={name:"About",setup:function(){var t=Object(r["c"])(),e=Object(i["d"])(),n=Object(b["h"])(12),c=function(){n.value++},o=function(){e.commit("setTest",n)},l=Object(u["d"])((function(){return 2*n.value})),a=Object(u["d"])((function(){return e.state.test}));return Object(u["w"])(n,(function(){console.log("监控number数据为".concat(n.value))}),{lazy:!0}),Object(u["w"])(l,(function(){console.log("监控doubleNum数据为".concat(l.value))})),{route:t,number:n,doubleNum:l,testNum:a,add:c,update:o}}};l.render=o;e["default"]=l}}]);