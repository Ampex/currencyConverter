(this.webpackJsonpcurrencyconverter=this.webpackJsonpcurrencyconverter||[]).push([[0],{114:function(e,t,a){e.exports=a(126)},119:function(e,t,a){},126:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(11),c=a.n(o),l=a(15),i=(a(119),a(75)),u=a.n(i),s=a(98),m=a(89),d=a(17),f=a(184),p=a(170),E=a(164),y=a(165),b=a(163),h=a(168),v=a(169),g=a(94),j=a.n(g),O=a(68),w=function(e){var t={};return(!e.quantity||e.quantity<=0)&&(t.quantity="Nieprawid\u0142owa warto\u015b\u0107"),e.from||(t.from="Wybierz walut\u0119"),e.to||(t.to="Wybierz walut\u0119"),t},x=a(44),k=r.a.createContext({error:null,addError:function(){},open:!1,toogleOpen:function(){},history:[],addHistory:function(){},result:!1,addResult:function(){}});function S(e){var t=e.children,a=Object(n.useState)(null),o=Object(x.a)(a,2),c=o[0],l=o[1],i=Object(n.useState)(!1),u=Object(x.a)(i,2),s=u[0],m=u[1],d=Object(n.useState)([]),f=Object(x.a)(d,2),p=f[0],E=f[1],y=Object(n.useState)(!1),b=Object(x.a)(y,2),h=b[0],v=b[1],g={error:c,addError:Object(n.useCallback)((function(e){return function(e){return l({message:e})}(e)}),[]),open:s,toogleOpen:Object(n.useCallback)((function(e){return m(e||!s)}),[s]),history:p,addHistory:Object(n.useCallback)((function(e){return function(e){return E(e)}(e)}),[]),result:h,addResult:Object(n.useCallback)((function(e){return function(e){return v(e)}(e)}),[])};return r.a.createElement(k.Provider,{value:g},t)}var C=function(){var e=Object(n.useContext)(k);return{error:e.error,addError:e.addError,open:e.open,toogleOpen:e.toogleOpen,history:e.history,addHistory:e.addHistory,result:e.result,addResult:e.addResult}};var z=function(){var e=function(){var e=C().addError,t=Object(n.useState)({data:!1}),a=Object(x.a)(t,2),r=a[0],o=a[1];return Object(n.useEffect)((function(){fetch("https://prepaid.currconv.com/api/v7/currencies?apiKey=".concat("pr_13edd894c11d47de925447de28461118")).then((function(e){return e.json()})).then((function(e){return o({data:e.results})})).catch((function(){return e("Wyst\u0105pi\u0142 problem z serwerem. Spr\xf3buj ponownie...")}))}),[e,o]),r}().data,t=C(),a=t.addError,o=t.toogleOpen,c=t.history,i=t.addHistory,g=t.result,k=t.addResult,S=Object.keys(e).sort().map((function(e){return r.a.createElement(f.a,{key:e,value:e},e)})),z=new URLSearchParams(Object(l.f)().search),q={v:z.get("value"),f:z.get("from"),t:z.get("to")},I=function(){var e=Object(m.a)(u.a.mark((function e(t){var n,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n="".concat(t.from,"_").concat(t.to),r=(new Date).toLocaleDateString(),o(!0),e.next=5,fetch("https://prepaid.currconv.com/api/v7/convert?apiKey=".concat("pr_13edd894c11d47de925447de28461118","&q=").concat(n,"&compact=ultra")).then((function(e){return e.json()})).then((function(e){k((e[n]*t.quantity).toFixed(2)),i([{time:r,after:(e[n]*t.quantity).toFixed(2),value:t.quantity,from:t.from,to:t.to}].concat(Object(s.a)(c)))})).catch((function(){return a("Co\u015b posz\u0142o nie tak. Spr\xf3buj ponownie...")}));case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return r.a.createElement(d.b,{onSubmit:I,initialValues:{quantity:q.v||"",from:q.f&&q.f.toUpperCase()||"",to:q.t&&q.t.toUpperCase()||""},validate:w,render:function(e){var t=e.handleSubmit,a=e.submitting,n=e.values;return r.a.createElement("form",{onSubmit:t,noValidate:!0},r.a.createElement(d.a,{name:"quantity"},(function(e){var t=e.input;return r.a.createElement(O.b,Object.assign({},t,{type:"number",label:"Wpisz kwot\u0119",name:"quantity",style:{marginBottom:25},inputProps:{tabIndex:1},InputProps:{endAdornment:n.from&&r.a.createElement(p.a,null,n.from)}}))})),r.a.createElement(E.a,{focused:!1,fullWidth:!0},r.a.createElement(y.a,null,"Wynik"),r.a.createElement(b.a,{readOnly:!0,type:"number",name:"converted",required:!0,value:g||"",inputProps:{tabIndex:-1},endAdornment:n.to&&r.a.createElement(p.a,null,n.to)})),r.a.createElement("div",{className:"selects"},r.a.createElement(d.a,{name:"from"},(function(e){var t=e.input;return r.a.createElement(O.a,Object.assign({},t,{label:"Konwertuj z",variant:"outlined",name:"from",inputProps:{tabIndex:2}}),S)})),r.a.createElement(j.a,{fontSize:"large",color:"primary"}),r.a.createElement(d.a,{name:"to"},(function(e){var t=e.input;return r.a.createElement(O.a,Object.assign({},t,{label:"Konwertuj na",variant:"outlined",name:"to",inputProps:{tabIndex:3}}),S)}))),r.a.createElement(h.a,{fullWidth:!0,size:"large",variant:"contained",color:"primary",type:"submit",disabled:a},a&&r.a.createElement(v.a,{color:"primary",size:30,style:{position:"absolute"}}),"Konwertuj"),r.a.createElement(l.a,{sensitive:!0,to:{pathname:"/currencyConverter/",search:"".concat(n.quantity&&"".concat("?value=".concat(n.quantity))).concat(n.from&&"".concat("&from=".concat(n.from))).concat(n.to&&"".concat("&to=".concat(n.to)))}}))}})},q=a(129),I=a(171),W=a(172),N=a(173),H=a(181),P=a(174),K=a(175),R=a(176),B=a(177),D=a(101),J=a(166),L=a(162),M=a(95),U=a.n(M),_=a(96),A=a.n(_),F=window.innerWidth<=1200,V=function(){var e=C(),t=e.history,a=e.addHistory,o=e.open,c=e.toogleOpen;Object(n.useEffect)((function(){localStorage.getItem("history")&&a(JSON.parse(localStorage.getItem("history"))||[])}),[a]),Object(n.useEffect)((function(){localStorage.setItem("history",JSON.stringify(t))}),[t]);var l=t&&t.map((function(e,t){return r.a.createElement(q.a,{key:t,timeout:200,in:!0},r.a.createElement(I.a,{hover:!0},r.a.createElement(W.a,{component:"th",scope:"row"},e.time),r.a.createElement(W.a,{align:"right"},e.value," ",e.from),r.a.createElement(W.a,{align:"center"},r.a.createElement(U.a,null)),r.a.createElement(W.a,{align:"right"},e.after," ",e.to)))}));return r.a.createElement(N.a,{container:!0,alignItems:"flex-start"},r.a.createElement(N.a,{container:!0,direction:"column",justify:"space-around",item:!0,xs:10},r.a.createElement(H.a,null,r.a.createElement(P.a,{style:{height:"490px"}},r.a.createElement(K.a,{stickyHeader:!0},r.a.createElement(R.a,null,r.a.createElement(I.a,null,r.a.createElement(W.a,null,"Data"),r.a.createElement(W.a,{align:"right"},"Przed konwersj\u0105"),r.a.createElement(W.a,null),r.a.createElement(W.a,{align:"right"},"Po konwersji"))),r.a.createElement(B.a,null,l)),!t.length&&r.a.createElement(D.a,{style:{height:"80%"},className:"flex-center"},"Brak historii konwersji walut"))),r.a.createElement(H.a,{className:"reset"},r.a.createElement(h.a,{disabled:!t.length,color:"secondary",style:{textDecoration:"underline"},onClick:function(){localStorage.removeItem("history"),a([])}},"Wyczy\u015b\u0107 histori\u0119"))),r.a.createElement(N.a,{container:!0,justify:"center",item:!0,xs:2},r.a.createElement(H.a,{className:"tab"},r.a.createElement(J.a,{in:o||0!==t.length},r.a.createElement(L.a,{style:o?{transform:"".concat(F?"rotate(270deg)":"rotate(180deg)")}:{transform:"".concat(F?"rotate(90deg)":"rotate(0deg)")},onClick:function(){return c()},color:"secondary"},r.a.createElement(A.a,null))),r.a.createElement(D.a,{style:o?{color:"inherit"}:{color:"#adc8f5"},variant:"h6"},"Historia"))))},T=window.innerWidth<=1200,G=function(){var e=C().open;return r.a.createElement("div",{className:"container"},r.a.createElement("div",{style:e&&!T?{width:"1150px"}:{width:"600px"},className:"wrapper"},r.a.createElement("main",null,r.a.createElement("h3",null,"Konwerter walut"),r.a.createElement(z,null)),r.a.createElement("div",{style:e?{transform:"".concat(T?"translate(70px, 570px)":"translate(560px)")}:{transform:"translate(70px)"},className:"historical"},r.a.createElement(V,null),r.a.createElement(l.b,{path:"/user/:username",component:z}))))},Q=a(97),X=a(179),Y=a(57),Z=a(182),$=a(178),ee=a(167),te=a(183),ae=function(){var e=C().error;return r.a.createElement(ee.a,{open:null!==e},r.a.createElement(te.a,{open:!0,anchorOrigin:{vertical:"bottom",horizontal:"right"}},r.a.createElement(Z.a,{onClose:function(){return window.location.reload()},severity:"error"},r.a.createElement($.a,null,r.a.createElement("strong",null,"B\u0142\u0105d")),e&&e.message)))},ne=Object(Q.a)({overrides:{MuiBackdrop:{root:{zIndex:2}},MuiSvgIcon:{fontSizeLarge:{width:"80px"}},MuiTableCell:{stickyHeader:{backgroundColor:"#3578eb",color:"#ffffff",fontWeight:700},body:{color:"#ffffff"}}},palette:{primary:{main:"#3578eb"},secondary:{main:"#ffffff"}}});c.a.render(r.a.createElement(X.a,{theme:ne},r.a.createElement(S,null,r.a.createElement(Y.a,null,r.a.createElement(ae,null),r.a.createElement(G,null)))),document.getElementById("root"))}},[[114,1,2]]]);
//# sourceMappingURL=main.337d6e05.chunk.js.map