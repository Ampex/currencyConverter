(this.webpackJsonpcurrencyconverter=this.webpackJsonpcurrencyconverter||[]).push([[0],{110:function(e,r,a){e.exports=a(122)},116:function(e,r,a){},122:function(e,r,a){"use strict";a.r(r);var n=a(0),c=a.n(n),i=a(11),t=a.n(i),u=a(69),o=a.n(u),y=a(22),l=a(87),m=a(19),d=a(17),N=a(28),s=a(96),S=(a(116),a(174)),b=a(15),D=a(163),h=a(157),p=a(158),R=a(156),P=a(161),f=a(162),E=a(61),g=a(91),B=a.n(g),K=a(14);var L=function(e){var r={};return(!e.quantity||e.quantity<=0)&&(r.quantity="Nieprawid\u0142owa warto\u015b\u0107"),e.from||(r.from="Wybierz walut\u0119"),e.to||(r.to="Wybierz walut\u0119"),r},M=function(e){var r=new URLSearchParams(Object(K.f)().search);return c.a.createElement(b.b,{onSubmit:e.onSubmit,initialValues:{quantity:r.get("value")||"",from:r.get("from")||"",to:r.get("to")||""},validate:L,render:function(r){var a=r.handleSubmit,n=r.submitting,i=(r.pristine,r.values);return c.a.createElement("form",{onSubmit:a,noValidate:!0},c.a.createElement(b.a,{name:"quantity"},(function(e){var r=e.input;return c.a.createElement(E.b,Object.assign({},r,{type:"number",label:"Wpisz kwot\u0119",name:"quantity",style:{marginBottom:25},inputProps:{tabIndex:1},InputProps:{endAdornment:i.from&&c.a.createElement(D.a,null,i.from)}}))})),c.a.createElement(h.a,{focused:!1,fullWidth:!0},c.a.createElement(p.a,null,"Wynik"),c.a.createElement(R.a,{readOnly:!0,type:"number",name:"converted",required:!0,value:e.result||"",inputProps:{tabIndex:-1},endAdornment:i.to&&c.a.createElement(D.a,null,i.to)})),c.a.createElement("div",{className:"selects"},c.a.createElement(b.a,{name:"from"},(function(r){var a=r.input;return c.a.createElement(E.a,Object.assign({},a,{label:"Konwertuj z",variant:"outlined",name:"from",inputProps:{tabIndex:2}}),e.currList)})),c.a.createElement(B.a,{fontSize:"large",color:"primary"}),c.a.createElement(b.a,{name:"to"},(function(r){var a=r.input;return c.a.createElement(E.a,Object.assign({},a,{label:"Konwertuj na",variant:"outlined",name:"to",inputProps:{tabIndex:3}}),e.currList)}))),c.a.createElement(P.a,{fullWidth:!0,size:"large",variant:"contained",color:"primary",type:"submit",disabled:n},n&&c.a.createElement(f.a,{color:"primary",size:30,style:{position:"absolute"}}),"Konwertuj"),c.a.createElement(K.a,{to:{pathname:"/currencyConverter",search:"".concat(i.quantity&&"".concat("?value=".concat(i.quantity))).concat(i.from&&"".concat("&from=".concat(i.from))).concat(i.to&&"".concat("&to=".concat(i.to)))}}))}})},C=a(160),A=a(164),v=a(165),T=a(166),G=a(173),F=a(167),O=a(168),w=a(169),I=a(170),k=a(125),U=a(159),H=a(155),W=a(92),Z=a.n(W),$=a(93),Y=a.n($),j=window.innerWidth<=1200,x=function(e){var r=e.entries&&e.entries.map((function(e,r){return c.a.createElement(C.a,{key:r,timeout:200,in:!0},c.a.createElement(A.a,{hover:!0},c.a.createElement(v.a,{component:"th",scope:"row"},e.time),c.a.createElement(v.a,{align:"right"},e.value," ",e.from),c.a.createElement(v.a,{align:"center"},c.a.createElement(Z.a,null)),c.a.createElement(v.a,{align:"right"},e.after," ",e.to)))}));return c.a.createElement(T.a,{container:!0,alignItems:"flex-start"},c.a.createElement(T.a,{container:!0,direction:"column",justify:"space-around",item:!0,xs:10},c.a.createElement(G.a,null,c.a.createElement(F.a,{style:{height:"490px"}},c.a.createElement(O.a,{stickyHeader:!0},c.a.createElement(w.a,null,c.a.createElement(A.a,null,c.a.createElement(v.a,null,"Data"),c.a.createElement(v.a,{align:"right"},"Przed konwersj\u0105"),c.a.createElement(v.a,null),c.a.createElement(v.a,{align:"right"},"Po konwersji"))),c.a.createElement(I.a,null,r)),!e.entries.length&&c.a.createElement(k.a,{style:{height:"80%"},className:"flex-center"},"Brak historii konwersji walut"))),c.a.createElement(G.a,{className:"reset"},c.a.createElement(P.a,{disabled:!e.entries.length,color:"secondary",style:{textDecoration:"underline"},onClick:e.clear},"Wyczy\u015b\u0107 histori\u0119"))),c.a.createElement(T.a,{container:!0,justify:"center",item:!0,xs:2},c.a.createElement(G.a,{className:"tab"},c.a.createElement(U.a,{in:e.status||0!==e.entries.length},c.a.createElement(H.a,{style:e.status?{transform:"".concat(j?"rotate(270deg)":"rotate(180deg)")}:{transform:"".concat(j?"rotate(90deg)":"rotate(0deg)")},onClick:e.toogle,color:"secondary"},c.a.createElement(Y.a,null))),c.a.createElement(k.a,{style:e.status?{color:"inherit"}:{color:"#adc8f5"},variant:"h6"},"Historia"))))},z=a(94),J=window.innerWidth<=1200,V=function(e){Object(N.a)(a,e);var r=Object(s.a)(a);function a(){var e;Object(m.a)(this,a);for(var n=arguments.length,c=new Array(n),i=0;i<n;i++)c[i]=arguments[i];return(e=r.call.apply(r,[this].concat(c))).state={currList:[],historical:[],result:!1,open:!1},e.handleOpen=function(){e.setState({open:!e.state.open})},e.handleClear=function(){localStorage.removeItem("history"),e.setState({historical:[]})},e.handleSubmit=function(){var r=Object(l.a)(o.a.mark((function r(a){var n,c;return o.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return n="".concat(a.from,"_").concat(a.to),c=(new Date).toLocaleDateString(),r.next=4,fetch("https://free.currconv.com/api/v7/convert?apiKey=7c75ab8096c89ac26891&q=".concat(n,"&compact=ultra")).then((function(e){return e.json()})).then((function(r){return e.setState({historical:[{time:c,after:(r[n]*a.quantity).toFixed(2),value:a.quantity,from:a.from,to:a.to}].concat(Object(y.a)(e.state.historical)),open:!0,result:(r[n]*a.quantity).toFixed(2)})}));case 4:localStorage.setItem("history",JSON.stringify(e.state.historical));case 5:case"end":return r.stop()}}),r)})));return function(e){return r.apply(this,arguments)}}(),e}return Object(d.a)(a,[{key:"componentDidMount",value:function(){var e=this;fetch("https://free.currconv.com/api/v7/currencies?apiKey=7c75ab8096c89ac26891").then((function(e){return e.json()})).then((function(r){return e.setState({currList:r.results||z.results})})),localStorage.getItem("history")&&this.setState({historical:JSON.parse(localStorage.getItem("history"))||[]})}},{key:"render",value:function(){var e=this.state,r=e.currList,a=e.historical,n=e.open,i=e.result,t=r&&Object.keys(r).sort().map((function(e){return c.a.createElement(S.a,{key:e,value:e},e)}));return c.a.createElement("div",{className:"container"},c.a.createElement("div",{style:n&&!J?{width:"1150px"}:{width:"600px"},className:"wrapper"},c.a.createElement("main",null,c.a.createElement("h3",null,"Konwerter walut"),c.a.createElement(M,{onSubmit:this.handleSubmit,currList:t,handleOpen:this.handleOpen,result:i})),c.a.createElement("div",{style:n?{transform:"".concat(J?"translate(70px, 570px)":"translate(560px)")}:{transform:"translate(70px)"},className:"historical"},c.a.createElement(x,{clear:this.handleClear,status:n,toogle:this.handleOpen,entries:a}),c.a.createElement(K.b,{path:"/user/:username",component:M}))))}}]),a}(n.Component),X=a(95),q=a(171),Q=a(53),_=Object(X.a)({overrides:{MuiSvgIcon:{fontSizeLarge:{width:"80px"}},MuiTableCell:{stickyHeader:{backgroundColor:"#3578eb",color:"#ffffff",fontWeight:700},body:{color:"#ffffff"}}},palette:{primary:{main:"#3578eb"},secondary:{main:"#ffffff"}}});t.a.render(c.a.createElement(q.a,{theme:_},c.a.createElement(Q.a,null,c.a.createElement(V,null))),document.getElementById("root"))},94:function(e){e.exports=JSON.parse('{"results":{"ALL":{"currencyName":"Albanian Lek","currencySymbol":"Lek","id":"ALL"},"XCD":{"currencyName":"East Caribbean Dollar","currencySymbol":"$","id":"XCD"},"EUR":{"currencyName":"Euro","currencySymbol":"\u20ac","id":"EUR"},"BBD":{"currencyName":"Barbadian Dollar","currencySymbol":"$","id":"BBD"},"BTN":{"currencyName":"Bhutanese Ngultrum","id":"BTN"},"BND":{"currencyName":"Brunei Dollar","currencySymbol":"$","id":"BND"},"XAF":{"currencyName":"Central African CFA Franc","id":"XAF"},"CUP":{"currencyName":"Cuban Peso","currencySymbol":"$","id":"CUP"},"USD":{"currencyName":"United States Dollar","currencySymbol":"$","id":"USD"},"FKP":{"currencyName":"Falkland Islands Pound","currencySymbol":"\xa3","id":"FKP"},"GIP":{"currencyName":"Gibraltar Pound","currencySymbol":"\xa3","id":"GIP"},"HUF":{"currencyName":"Hungarian Forint","currencySymbol":"Ft","id":"HUF"},"IRR":{"currencyName":"Iranian Rial","currencySymbol":"\ufdfc","id":"IRR"},"JMD":{"currencyName":"Jamaican Dollar","currencySymbol":"J$","id":"JMD"},"AUD":{"currencyName":"Australian Dollar","currencySymbol":"$","id":"AUD"},"LAK":{"currencyName":"Laotian Kip","currencySymbol":"\u20ad","id":"LAK"},"LYD":{"currencyName":"Libyan Dinar","id":"LYD"},"MKD":{"currencyName":"Macedonian Denar","currencySymbol":"\u0434\u0435\u043d","id":"MKD"},"XOF":{"currencyName":"West African CFA Franc","id":"XOF"},"NZD":{"currencyName":"New Zealand Dollar","currencySymbol":"$","id":"NZD"},"OMR":{"currencyName":"Omani Rial","currencySymbol":"\ufdfc","id":"OMR"},"PGK":{"currencyName":"Papua New Guinean Kina","id":"PGK"},"RWF":{"currencyName":"Rwandan Franc","id":"RWF"},"WST":{"currencyName":"Samoan Tala","id":"WST"},"RSD":{"currencyName":"Serbian Dinar","currencySymbol":"\u0414\u0438\u043d.","id":"RSD"},"SEK":{"currencyName":"Swedish Krona","currencySymbol":"kr","id":"SEK"},"TZS":{"currencyName":"Tanzanian Shilling","currencySymbol":"TSh","id":"TZS"},"AMD":{"currencyName":"Armenian Dram","id":"AMD"},"BSD":{"currencyName":"Bahamian Dollar","currencySymbol":"$","id":"BSD"},"BAM":{"currencyName":"Bosnia-Herzegovina Convertible Mark","currencySymbol":"KM","id":"BAM"},"CVE":{"currencyName":"Cape Verdean Escudo","id":"CVE"},"CNY":{"currencyName":"Chinese Yuan","currencySymbol":"\xa5","id":"CNY"},"CRC":{"currencyName":"Costa Rican Colon","currencySymbol":"\u20a1","id":"CRC"},"CZK":{"currencyName":"Czech Koruna","currencySymbol":"K\u010d","id":"CZK"},"ERN":{"currencyName":"Eritrean Nakfa","id":"ERN"},"GEL":{"currencyName":"Georgian Lari","id":"GEL"},"HTG":{"currencyName":"Haitian Gourde","id":"HTG"},"INR":{"currencyName":"Indian Rupee","currencySymbol":"\u20b9","id":"INR"},"JOD":{"currencyName":"Jordanian Dinar","id":"JOD"},"KRW":{"currencyName":"South Korean Won","currencySymbol":"\u20a9","id":"KRW"},"LBP":{"currencyName":"Lebanese Pound","currencySymbol":"\xa3","id":"LBP"},"MWK":{"currencyName":"Malawian Kwacha","id":"MWK"},"MRO":{"currencyName":"Mauritanian Ouguiya","id":"MRO"},"MZN":{"currencyName":"Mozambican Metical","id":"MZN"},"ANG":{"currencyName":"Netherlands Antillean Gulden","currencySymbol":"\u0192","id":"ANG"},"PEN":{"currencyName":"Peruvian Nuevo Sol","currencySymbol":"S/.","id":"PEN"},"QAR":{"currencyName":"Qatari Riyal","currencySymbol":"\ufdfc","id":"QAR"},"STD":{"currencyName":"Sao Tome And Principe Dobra","id":"STD"},"SLL":{"currencyName":"Sierra Leonean Leone","id":"SLL"},"SOS":{"currencyName":"Somali Shilling","currencySymbol":"S","id":"SOS"},"SDG":{"currencyName":"Sudanese Pound","id":"SDG"},"SYP":{"currencyName":"Syrian Pound","currencySymbol":"\xa3","id":"SYP"},"AOA":{"currencyName":"Angolan Kwanza","id":"AOA"},"AWG":{"currencyName":"Aruban Florin","currencySymbol":"\u0192","id":"AWG"},"BHD":{"currencyName":"Bahraini Dinar","id":"BHD"},"BZD":{"currencyName":"Belize Dollar","currencySymbol":"BZ$","id":"BZD"},"BWP":{"currencyName":"Botswanan Pula","currencySymbol":"P","id":"BWP"},"BIF":{"currencyName":"Burundi Franc","id":"BIF"},"KYD":{"currencyName":"Cayman Islands Dollar","currencySymbol":"$","id":"KYD"},"COP":{"currencyName":"Colombian Peso","currencySymbol":"$","id":"COP"},"DKK":{"currencyName":"Danish Krone","currencySymbol":"kr","id":"DKK"},"GTQ":{"currencyName":"Guatemalan Quetzal","currencySymbol":"Q","id":"GTQ"},"HNL":{"currencyName":"Honduran Lempira","currencySymbol":"L","id":"HNL"},"IDR":{"currencyName":"Indonesian Rupiah","currencySymbol":"Rp","id":"IDR"},"ILS":{"currencyName":"Israeli New Sheqel","currencySymbol":"\u20aa","id":"ILS"},"KZT":{"currencyName":"Kazakhstani Tenge","currencySymbol":"\u043b\u0432","id":"KZT"},"KWD":{"currencyName":"Kuwaiti Dinar","id":"KWD"},"LSL":{"currencyName":"Lesotho Loti","id":"LSL"},"MYR":{"currencyName":"Malaysian Ringgit","currencySymbol":"RM","id":"MYR"},"MUR":{"currencyName":"Mauritian Rupee","currencySymbol":"\u20a8","id":"MUR"},"MNT":{"currencyName":"Mongolian Tugrik","currencySymbol":"\u20ae","id":"MNT"},"MMK":{"currencyName":"Myanma Kyat","id":"MMK"},"NGN":{"currencyName":"Nigerian Naira","currencySymbol":"\u20a6","id":"NGN"},"PAB":{"currencyName":"Panamanian Balboa","currencySymbol":"B/.","id":"PAB"},"PHP":{"currencyName":"Philippine Peso","currencySymbol":"\u20b1","id":"PHP"},"RON":{"currencyName":"Romanian Leu","currencySymbol":"lei","id":"RON"},"SAR":{"currencyName":"Saudi Riyal","currencySymbol":"\ufdfc","id":"SAR"},"SGD":{"currencyName":"Singapore Dollar","currencySymbol":"$","id":"SGD"},"ZAR":{"currencyName":"South African Rand","currencySymbol":"R","id":"ZAR"},"SRD":{"currencyName":"Surinamese Dollar","currencySymbol":"$","id":"SRD"},"TWD":{"currencyName":"New Taiwan Dollar","currencySymbol":"NT$","id":"TWD"},"TOP":{"currencyName":"Paanga","id":"TOP"},"VEF":{"currencyName":"Venezuelan Bolivar","id":"VEF"},"DZD":{"currencyName":"Algerian Dinar","id":"DZD"},"ARS":{"currencyName":"Argentine Peso","currencySymbol":"$","id":"ARS"},"AZN":{"currencyName":"Azerbaijani Manat","currencySymbol":"\u043c\u0430\u043d","id":"AZN"},"BYR":{"currencyName":"Belarusian Ruble","currencySymbol":"p.","id":"BYR"},"BOB":{"currencyName":"Bolivian Boliviano","currencySymbol":"$b","id":"BOB"},"BGN":{"currencyName":"Bulgarian Lev","currencySymbol":"\u043b\u0432","id":"BGN"},"CAD":{"currencyName":"Canadian Dollar","currencySymbol":"$","id":"CAD"},"CLP":{"currencyName":"Chilean Peso","currencySymbol":"$","id":"CLP"},"CDF":{"currencyName":"Congolese Franc","id":"CDF"},"DOP":{"currencyName":"Dominican Peso","currencySymbol":"RD$","id":"DOP"},"FJD":{"currencyName":"Fijian Dollar","currencySymbol":"$","id":"FJD"},"GMD":{"currencyName":"Gambian Dalasi","id":"GMD"},"GYD":{"currencyName":"Guyanaese Dollar","currencySymbol":"$","id":"GYD"},"ISK":{"currencyName":"Icelandic Kr\xf3na","currencySymbol":"kr","id":"ISK"},"IQD":{"currencyName":"Iraqi Dinar","id":"IQD"},"JPY":{"currencyName":"Japanese Yen","currencySymbol":"\xa5","id":"JPY"},"KPW":{"currencyName":"North Korean Won","currencySymbol":"\u20a9","id":"KPW"},"LVL":{"currencyName":"Latvian Lats","currencySymbol":"Ls","id":"LVL"},"CHF":{"currencyName":"Swiss Franc","currencySymbol":"Fr.","id":"CHF"},"MGA":{"currencyName":"Malagasy Ariary","id":"MGA"},"MDL":{"currencyName":"Moldovan Leu","id":"MDL"},"MAD":{"currencyName":"Moroccan Dirham","id":"MAD"},"NPR":{"currencyName":"Nepalese Rupee","currencySymbol":"\u20a8","id":"NPR"},"NIO":{"currencyName":"Nicaraguan Cordoba","currencySymbol":"C$","id":"NIO"},"PKR":{"currencyName":"Pakistani Rupee","currencySymbol":"\u20a8","id":"PKR"},"PYG":{"currencyName":"Paraguayan Guarani","currencySymbol":"Gs","id":"PYG"},"SHP":{"currencyName":"Saint Helena Pound","currencySymbol":"\xa3","id":"SHP"},"SCR":{"currencyName":"Seychellois Rupee","currencySymbol":"\u20a8","id":"SCR"},"SBD":{"currencyName":"Solomon Islands Dollar","currencySymbol":"$","id":"SBD"},"LKR":{"currencyName":"Sri Lankan Rupee","currencySymbol":"\u20a8","id":"LKR"},"THB":{"currencyName":"Thai Baht","currencySymbol":"\u0e3f","id":"THB"},"TRY":{"currencyName":"Turkish Lira","id":"TRY"},"AED":{"currencyName":"UAE Dirham","id":"AED"},"VUV":{"currencyName":"Vanuatu Vatu","id":"VUV"},"YER":{"currencyName":"Yemeni Rial","currencySymbol":"\ufdfc","id":"YER"},"AFN":{"currencyName":"Afghan Afghani","currencySymbol":"\u060b","id":"AFN"},"BDT":{"currencyName":"Bangladeshi Taka","id":"BDT"},"BRL":{"currencyName":"Brazilian Real","currencySymbol":"R$","id":"BRL"},"KHR":{"currencyName":"Cambodian Riel","currencySymbol":"\u17db","id":"KHR"},"KMF":{"currencyName":"Comorian Franc","id":"KMF"},"HRK":{"currencyName":"Croatian Kuna","currencySymbol":"kn","id":"HRK"},"DJF":{"currencyName":"Djiboutian Franc","id":"DJF"},"EGP":{"currencyName":"Egyptian Pound","currencySymbol":"\xa3","id":"EGP"},"ETB":{"currencyName":"Ethiopian Birr","id":"ETB"},"XPF":{"currencyName":"CFP Franc","id":"XPF"},"GHS":{"currencyName":"Ghanaian Cedi","id":"GHS"},"GNF":{"currencyName":"Guinean Franc","id":"GNF"},"HKD":{"currencyName":"Hong Kong Dollar","currencySymbol":"$","id":"HKD"},"XDR":{"currencyName":"Special Drawing Rights","id":"XDR"},"KES":{"currencyName":"Kenyan Shilling","currencySymbol":"KSh","id":"KES"},"KGS":{"currencyName":"Kyrgyzstani Som","currencySymbol":"\u043b\u0432","id":"KGS"},"LRD":{"currencyName":"Liberian Dollar","currencySymbol":"$","id":"LRD"},"MOP":{"currencyName":"Macanese Pataca","id":"MOP"},"MVR":{"currencyName":"Maldivian Rufiyaa","id":"MVR"},"MXN":{"currencyName":"Mexican Peso","currencySymbol":"$","id":"MXN"},"NAD":{"currencyName":"Namibian Dollar","currencySymbol":"$","id":"NAD"},"NOK":{"currencyName":"Norwegian Krone","currencySymbol":"kr","id":"NOK"},"PLN":{"currencyName":"Polish Zloty","currencySymbol":"z\u0142","id":"PLN"},"RUB":{"currencyName":"Russian Ruble","currencySymbol":"\u0440\u0443\u0431","id":"RUB"},"SZL":{"currencyName":"Swazi Lilangeni","id":"SZL"},"TJS":{"currencyName":"Tajikistani Somoni","id":"TJS"},"TTD":{"currencyName":"Trinidad and Tobago Dollar","currencySymbol":"TT$","id":"TTD"},"UGX":{"currencyName":"Ugandan Shilling","currencySymbol":"USh","id":"UGX"},"UYU":{"currencyName":"Uruguayan Peso","currencySymbol":"$U","id":"UYU"},"VND":{"currencyName":"Vietnamese Dong","currencySymbol":"\u20ab","id":"VND"},"TND":{"currencyName":"Tunisian Dinar","id":"TND"},"UAH":{"currencyName":"Ukrainian Hryvnia","currencySymbol":"\u20b4","id":"UAH"},"UZS":{"currencyName":"Uzbekistani Som","currencySymbol":"\u043b\u0432","id":"UZS"},"TMT":{"currencyName":"Turkmenistan Manat","id":"TMT"},"GBP":{"currencyName":"British Pound","currencySymbol":"\xa3","id":"GBP"},"ZMW":{"currencyName":"Zambian Kwacha","id":"ZMW"},"BTC":{"currencyName":"Bitcoin","currencySymbol":"BTC","id":"BTC"},"BYN":{"currencyName":"New Belarusian Ruble","currencySymbol":"p.","id":"BYN"},"BMD":{"currencyName":"Bermudan Dollar","id":"BMD"},"GGP":{"currencyName":"Guernsey Pound","id":"GGP"},"CLF":{"currencyName":"Chilean Unit Of Account","id":"CLF"},"CUC":{"currencyName":"Cuban Convertible Peso","id":"CUC"},"IMP":{"currencyName":"Manx pound","id":"IMP"},"JEP":{"currencyName":"Jersey Pound","id":"JEP"},"SVC":{"currencyName":"Salvadoran Col\xf3n","id":"SVC"},"ZMK":{"currencyName":"Old Zambian Kwacha","id":"ZMK"},"XAG":{"currencyName":"Silver (troy ounce)","id":"XAG"},"ZWL":{"currencyName":"Zimbabwean Dollar","id":"ZWL"}}}')}},[[110,1,2]]]);
//# sourceMappingURL=main.d3759092.chunk.js.map