(this.webpackJsonpweatherapp=this.webpackJsonpweatherapp||[]).push([[0],{24:function(e,t,a){e.exports=a(42)},29:function(e,t,a){},31:function(e,t,a){},33:function(e,t,a){},40:function(e,t,a){},41:function(e,t,a){},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(21),c=a.n(i),o=(a(29),a(16)),l=a.n(o),m=a(22),u=a(13),s=a(7),p=a(8),d=a(10),v=a(9),f=(a(31),a(6)),h=a(1),E=(a(32),a(33),a(12)),b=a.n(E),y=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={city:e.city},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement("form",{onSubmit:this.props.get},r.a.createElement("input",{type:"text",placeholder:"\ud83d\udd0dEnter your city",id:"search",name:"replacment"}),r.a.createElement("div",{className:"div1"},r.a.createElement("p",{id:"description"},this.props.description),r.a.createElement("p",{id:"name"},this.props.name),r.a.createElement("p",{id:"degree"},this.props.degree),r.a.createElement("hr",null),this.props.days.map((function(e,t){return r.a.createElement("div",{className:"div2"},r.a.createElement("br",null),r.a.createElement("p",null,b()(e.Date).format("dddd")),r.a.createElement("p",null,b()(e.Date).format("Do MMM YY")),r.a.createElement("hr",null),r.a.createElement("p",null," Maxtemp : ",e.Temperature.Maximum.Value,"\xb0",e.Temperature.Maximum.Unit),r.a.createElement("hr",null),r.a.createElement("p",null," Mintemp : ",e.Temperature.Minimum.Value,"\xb0",e.Temperature.Maximum.Unit))})))),r.a.createElement(f.b,{to:"/Favorite"}," ",r.a.createElement("button",{onClick:function(){e.props.add(e.props.favoriteCity.name,e.props.favoriteCity.description,e.props.favoriteCity)},type:"button",className:"btn btn-info",id:"addbutton"}," Add to Favorites ")," "))}}]),a}(n.Component),C=(a(40),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,this.props.favoriteCity.map((function(t,a){return r.a.createElement("div",{className:"div3"},r.a.createElement(f.b,{to:"/Add/".concat(t.name)},r.a.createElement("button",{className:"btn btn-info",id:"button"},t.name,r.a.createElement("hr",null),t.degree,r.a.createElement("hr",null),t.description)),r.a.createElement("button",{type:"button",className:"btn btn-danger",id:"removebutton",onClick:function(){e.props.del(a)}},"Remove from Favorites"))})))}}]),a}(n.Component)),g=(a(41),function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"row"},r.a.createElement("div",{className:"div"},r.a.createElement("div",{className:"col-4"},r.a.createElement(f.b,{to:"/"},r.a.createElement("button",{type:"button",className:"btn btn-warning",id:"Button"},"Home"))),r.a.createElement("div",{className:"col-4"},r.a.createElement(f.b,{to:"/Favorite"},r.a.createElement("button",{type:"button",className:"btn btn-success",id:"Buttons"},"Favorite")))))}}]),a}(n.Component)),M=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(e){var n;return Object(s.a)(this,a),(n=t.call(this,e)).state={},n}return Object(p.a)(a,[{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("div",{className:"div1"},r.a.createElement("p",{id:"description"},this.props.description),r.a.createElement("p",{id:"name"},this.props.name),r.a.createElement("p",{id:"degree"},this.props.degree),r.a.createElement("hr",null),this.props.day1.map((function(e,t){return r.a.createElement("div",{className:"div2"},r.a.createElement("br",null),r.a.createElement("p",null,b()(e.Date).format("dddd")),r.a.createElement("p",null,b()(e.Date).format("Do MMM YY")),r.a.createElement("hr",null),r.a.createElement("p",null," Maxtemp : ",e.Temperature.Maximum.Value,"\xb0",e.Temperature.Maximum.Unit),r.a.createElement("hr",null),r.a.createElement("p",null," Mintemp : ",e.Temperature.Minimum.Value,"\xb0",e.Temperature.Maximum.Unit))}))),r.a.createElement(f.b,{to:"/Favorite"}," ",r.a.createElement("button",{className:"btn btn-danger",style:{position:"relative",left:"1250px",top:"150px"}}," X ")))}}]),a}(n.Component),x="F1Lu0iO0zV6MWeCCVXCVKFgBeU707ofo",j=function(e){Object(d.a)(a,e);var t=Object(v.a)(a);function a(){var e;Object(s.a)(this,a);for(var n=arguments.length,r=new Array(n),i=0;i<n;i++)r[i]=arguments[i];return(e=t.call.apply(t,[this].concat(r))).state={city:[],iD:"215854",name:"Tel aviv",degree:"26.5C",description:"Some clouds",days:[{Date:"2020-07-05T07:00:00+03:00",Temperature:{Maximum:{Value:"30.8",Unit:"C"},Minimum:{Value:"26.1",Unit:"C"}}},{Date:"2020-07-06T07:00:00+03:00",Temperature:{Maximum:{Value:"30.2",Unit:"C"},Minimum:{Value:"24.5",Unit:"C"}}},{Date:"2020-07-07T07:00:00+03:00",Temperature:{Maximum:{Value:"30.5",Unit:"C"},Minimum:{Value:"23.5",Unit:"C"}}},{Date:"2020-07-08T07:00:00+03:00",Temperature:{Maximum:{Value:"31.1",Unit:"C"},Minimum:{Value:"24.8",Unit:"C"}}},{Date:"2020-07-09T07:00:00+03:00",Temperature:{Maximum:{Value:"29.6",Unit:"C"},Minimum:{Value:"24.1",Unit:"C"}}}],favoriteCity:[]},e.addFavoriteCity=function(){e.setState({favoriteCity:[].concat(Object(u.a)(e.state.favoriteCity),[{iD:e.state.iD,name:e.state.name,description:e.state.description,degree:e.state.degree,day1:e.state.days}])});for(var t=0;t<e.state.favoriteCity.length;t++)e.state.name===e.state.favoriteCity[t].name&&(alert("Your city is in favorite"),e.setState({favoriteCity:Object(u.a)(e.state.favoriteCity)}))},e.del=function(t){var a=e.state.favoriteCity.filter((function(e,a){return a!==t}));e.setState({favoriteCity:Object(u.a)(a)})},e.getWeather=function(){var t=Object(m.a)(l.a.mark((function t(a){var n,r,i,c,o,m,s;return l.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:if(!(n=a.target.elements.replacment.value)||!(n>="a"&&n<="z"||n>="A"&&n<="Z")){t.next=28;break}return a.preventDefault(),t.next=5,fetch("http://dataservice.accuweather.com/locations/v1/cities/autocomplete?apikey=".concat(x,"&q=").concat(n,"&language=en-us"));case 5:return r=t.sent,t.next=8,r.json();case 8:return i=t.sent,e.setState({city:i}),e.state.city.forEach((function(t){e.setState({iD:t.Key,name:t.LocalizedName,name2:t.LocalizedName})})),t.next=13,fetch("http://dataservice.accuweather.com/currentconditions/v1/".concat(e.state.iD,"?apikey=").concat(x,"&language=en-us"));case 13:return c=t.sent,t.next=16,c.json();case 16:return o=t.sent,e.setState({description:o[0].WeatherText,degree:o[0].Temperature.Metric.Value+o[0].Temperature.Metric.Unit}),t.next=20,fetch(" http://dataservice.accuweather.com/forecasts/v1/daily/5day/".concat(e.state.iD,"?apikey=").concat(x,"&language=en-us&metric=true"));case 20:return m=t.sent,t.next=23,m.json();case 23:s=t.sent,e.setState({days:Object(u.a)(s.DailyForecasts)}),e.setState({city:[].concat(Object(u.a)(i),[o,s])}),t.next=29;break;case 28:alert("Pelase Enter Name in English letters only");case 29:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),e}return Object(p.a)(a,[{key:"render",value:function(){var e=this;return r.a.createElement("div",null,r.a.createElement(f.a,null,r.a.createElement("p",{id:"title"},"Weather App Task"),r.a.createElement(g,null),r.a.createElement(h.c,null,r.a.createElement(h.a,{exact:!0,path:"/",component:function(){return r.a.createElement(y,{add:e.addFavoriteCity,get:e.getWeather,favoriteCity:e.state.favoriteCity,days:e.state.days,name:e.state.name,description:e.state.description,degree:e.state.degree})}}),r.a.createElement(h.a,{exact:!0,path:"/Favorite",component:function(){return r.a.createElement(C,{del:e.del,favoriteCity:e.state.favoriteCity})}}),this.state.favoriteCity.map((function(e,t){return r.a.createElement(h.a,{exact:!0,path:"/Add/".concat(e.name),component:function(){return r.a.createElement(M,{name:e.name,degree:e.degree,description:e.description,day1:e.day1,index:t})}})})))))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(j,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[24,1,2]]]);
//# sourceMappingURL=main.2f34f70c.chunk.js.map