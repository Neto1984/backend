(this.webpackJsonpvio=this.webpackJsonpvio||[]).push([[0],{15:function(t,e,n){t.exports=n(38)},37:function(t,e,n){},38:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),o=n(14),c=n.n(o),u=n(4),i=n(2),l=function(t){var e=t.note,n=t.toggleImportance,a=e.important?"make not important":"make important";return r.a.createElement("div",null,r.a.createElement("li",{className:"note"},e.content,r.a.createElement("button",{onClick:n},a)))},m=function(t){var e=t.message;return null===e?null:r.a.createElement("div",{className:"error"},e)},f=function(){return r.a.createElement("div",{style:{color:"green",fontStyle:"italics",fontSize:16}},r.a.createElement("br",null),r.a.createElement("em",null,"Note app, Department of Computer Science, University of Helsinki, 2020"))},s=n(3),p=n.n(s),d="http://localhost:3002/api",v=function(){var t=p.a.get(d),e={id:1e4,content:"This note is saved to Server",date:"2019-05-30T17:30:31. 098Z",important:!0};return t.then((function(t){return t.data.concat(e)}))},E=function(t){return p.a.post(d,t).then((function(t){return t.data}))},b=function(t,e){return p.a.put("{baseUrl} / {id}",e).then((function(t){return t.data}))},h=function(t){var e=Object(a.useState)([]),n=Object(i.a)(e,2),o=n[0],c=n[1],s=Object(a.useState)(""),p=Object(i.a)(s,2),d=p[0],h=p[1],g=Object(a.useState)(!0),O=Object(i.a)(g,2),S=O[0],j=O[1],k=Object(a.useState)(null),y=Object(i.a)(k,2),w=y[0],C=y[1];Object(a.useEffect)((function(){v().then((function(t){c(t)}))}),[]);var I=S?o:o.filter((function(t){return!0===t.important}));return r.a.createElement("div",null,r.a.createElement("h1",null,"Notes"),r.a.createElement(m,{message:w}),r.a.createElement("div",null,r.a.createElement("button",{onClick:function(){return j(!S)}},"show",S?"important":"all")),r.a.createElement("ul",null,I.map((function(t,e){return r.a.createElement(l,{Key:e,note:t,toggleImportance:function(){return function(t){var e=o.find((function(e){return e.id===t})),n=Object(u.a)(Object(u.a)({},e),{},{important:!e.important});b(t,n).then((function(e){c(o.map((function(n){return n.id!==t?n:e})))})).catch((function(t){C("{note.content}"),setTimeout((function(){C(null)}),5e3)}))}(t.id)}})}))),r.a.createElement("form",{onSubmit:function(t){t.preventDefault();var e={content:d,date:(new Date).toISOString(),important:Math.random()>.5,id:o.length+1};E(e).then((function(t){c(o.concat(t)),h("")}))}},r.a.createElement("input",{value:d,onChange:function(t){h(t.target.value)}}),r.a.createElement("button",{type:"submit"}," Save ")),r.a.createElement(f,null))};n(37);c.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.9489438f.chunk.js.map