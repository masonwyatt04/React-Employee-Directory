(this["webpackJsonpemployee-directory"]=this["webpackJsonpemployee-directory"]||[]).push([[0],{35:function(e,t,a){e.exports=a(68)},40:function(e,t,a){},41:function(e,t,a){},68:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),r=a(9),c=a.n(r),o=(a(40),a(41),a(16)),m=a(32),i=a(11),u=a(17);function s(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(o.a,{bg:"dark",variant:"dark"},l.a.createElement("div",{className:"col-7"},l.a.createElement(o.a.Brand,null,l.a.createElement("img",{alt:"",src:"/logo.svg",width:"30",height:"30",className:"d-inline-block align-top"})," ","Employee Directory")),l.a.createElement("div",{className:"col-2"},l.a.createElement(u.a,{variant:"info",href:"#home"},"All Employees")),l.a.createElement("div",{className:"col-3"},l.a.createElement(m.a,{inline:!0},l.a.createElement(i.a,{type:"text",placeholder:"Employee Name...",className:"mr-sm-2"}),l.a.createElement(u.a,{variant:"outline-info"},"Search")))))}var E=a(33),d=a(31),h=a(34);function p(){var e=Object(h.a)("https://randomuser.me/api/?results=100"),t=Object(E.a)(e,2),a=t[0],n=a.data,r=a.loading,c=a.error;t[1];if(r)return l.a.createElement("p",null,"Loading...");if(c)return l.a.createElement("p",null,"Error!");console.log(n.results[0]);var o=n.results;return l.a.createElement(l.a.Fragment,null,l.a.createElement(d.a,{striped:!0,bordered:!0,hover:!0,variant:"dark"},l.a.createElement("thead",null,l.a.createElement("tr",null,l.a.createElement("th",null,"Picture"),l.a.createElement("th",null,"First Name"),l.a.createElement("th",null,"Last Name"),l.a.createElement("th",null,"Phone Number"),l.a.createElement("th",null,"Email"))),l.a.createElement("tbody",null,o.map((function(e){return l.a.createElement(l.a.Fragment,null,l.a.createElement("tr",null,l.a.createElement("td",null,l.a.createElement("img",{src:e.picture.large,alt:"Error"})),l.a.createElement("td",null,e.name.first),l.a.createElement("td",null,e.name.last),l.a.createElement("td",null,e.phone),l.a.createElement("td",null,e.email)))})))))}var g=function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(s,null),l.a.createElement(p,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(g,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[35,1,2]]]);
//# sourceMappingURL=main.2d3dc4c1.chunk.js.map