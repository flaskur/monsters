(this.webpackJsonpmonsters=this.webpackJsonpmonsters||[]).push([[0],[,,,,function(e,t,n){e.exports=n(13)},,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(3),s=n.n(c),o=n(1),l=(n(9),n(10),function(e){var t=e.monster;return r.a.createElement("div",{className:"card_container"},r.a.createElement("img",{alt:"monster",src:"https://robohash.org/".concat(t.id,"?set=set2&size=180x180")}),r.a.createElement("h2",null,t.name),r.a.createElement("h3",null,t.email))}),u=function(e){var t=e.monsters;return r.a.createElement("div",{className:"cardlist"},t.map((function(e){return r.a.createElement(l,{key:e.id,monster:e})})))},i=(n(11),function(e){var t=e.searchbar,n=e.handleSearchChange;return r.a.createElement("div",{className:"searchbar"},r.a.createElement("h1",null,"SEARCH MONSTERS"),r.a.createElement("input",{type:"search",placeholder:"search monsters",onChange:n,value:t}))}),m=(n(12),function(){var e=r.a.useState([]),t=Object(o.a)(e,2),n=t[0],a=t[1],c=r.a.useState(""),s=Object(o.a)(c,2),l=s[0],m=s[1],h=n.filter((function(e){return e.name.toLowerCase().includes(l.toLowerCase())}));return r.a.useEffect((function(){fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(e){return a(e)}))}),[]),r.a.createElement("div",{className:"App"},r.a.createElement("h1",null,"Monsters"),r.a.createElement(i,{searchbar:l,handleSearchChange:function(e){console.log(e.target.value),m(e.target.value),console.log(l)}}),r.a.createElement(u,{monsters:h}))});s.a.render(r.a.createElement(m,null),document.getElementById("root"))}],[[4,1,2]]]);
//# sourceMappingURL=main.dc5e2c27.chunk.js.map