(this["webpackJsonpfood-project"]=this["webpackJsonpfood-project"]||[]).push([[0],{25:function(e,t,c){},33:function(e,t,c){"use strict";c.r(t);var n=c(1),r=c.n(n),a=c(19),s=c.n(a),i=(c(25),c(7)),j=c(2),o=c(0);var l=function(){return Object(o.jsx)("nav",{className:"blue lighten-2",children:Object(o.jsxs)("div",{className:"nav-wrapper",children:[Object(o.jsx)(i.b,{to:"/",className:"brand-logo",children:"React Food"}),Object(o.jsxs)("ul",{id:"nav-mobile",className:"right hide-on-med-and-down",children:[Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/about",children:"About"})}),Object(o.jsx)("li",{children:Object(o.jsx)(i.b,{to:"/contact",children:"Contact"})}),Object(o.jsx)("li",{children:Object(o.jsx)("a",{href:"https://github.com/13RedFox/react-food",target:"_blank",rel:"noreferrer",children:"GitHub Repo"})})]})]})})};var b=function(){return Object(o.jsx)("footer",{className:"page-footer blue lighten-1",children:Object(o.jsx)("div",{className:"footer-copyright",children:Object(o.jsxs)("div",{className:"container",children:["\xa9 ",(new Date).getFullYear()," React Food",Object(o.jsx)("a",{className:"grey-text text-lighten-4 right",href:"https://github.com/13RedFox/react-food",target:"_blank",rel:"noreferrer",children:"GitHub Repo"})]})})})},d=c(8),u=c(10),h=c.n(u),O=c(13),x="https://www.themealdb.com/api/json/v1/".concat("1","/"),m=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"lookup.php?i=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),p=function(){var e=Object(O.a)(h.a.mark((function e(){var t;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"categories.php"));case 2:return t=e.sent,e.next=5,t.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),f=function(){var e=Object(O.a)(h.a.mark((function e(t){var c;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("".concat(x,"filter.php?c=").concat(t));case 2:return c=e.sent,e.next=5,c.json();case 5:return e.abrupt("return",e.sent);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();var v=function(){return Object(o.jsx)("div",{className:"progress teal darken-2",children:Object(o.jsx)("div",{className:"indeterminate teal accent-2"})})},g=c(12);var N=function(e){var t=e.strCategory,c=e.strCategoryThumb,n=e.strCategoryDescription;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:c,alt:t})}),Object(o.jsxs)("div",{className:"card-content",children:[Object(o.jsx)("span",{className:"card-title",children:t}),Object(o.jsxs)("p",{children:[n.slice(0,60),"..."]})]}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/category/".concat(t),className:"btn",children:"Watch category"})})]})};var y=function(e){var t=e.catalog,c=void 0===t?[]:t;return Object(o.jsx)("div",{className:"list",children:c.map((function(e){return Object(o.jsx)(N,Object(g.a)({},e),e.idCategory)}))})};var w=function(e){var t=e.cb,c=void 0===t?Function.prototype:t,r=Object(n.useState)(""),a=Object(d.a)(r,2),s=a[0],i=a[1],j=function(){c(s)};return Object(o.jsx)("div",{className:"row",children:Object(o.jsxs)("div",{className:"input-field col s12",children:[Object(o.jsx)("input",{type:"search",id:"search-field",placeholder:"Search",value:s,onKeyDown:function(e){"Enter"===e.key&&j()},onChange:function(e){return i(e.target.value)}}),Object(o.jsx)("button",{className:"btn",style:{position:"absolute",top:0,right:"0.8rem"},onClick:j,children:"Search"})]})})};var k=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(n.useState)([]),s=Object(d.a)(a,2),i=s[0],l=s[1],b=Object(j.g)(),u=b.pathname,h=b.search,O=Object(j.f)().push;return Object(n.useEffect)((function(){p().then((function(e){r(e.categories),l(h?e.categories.filter((function(e){return e.strCategory.toLowerCase().includes(h.split("=")[1].toLowerCase())})):e.categories)}))}),[h]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)(w,{cb:function(e){l(c.filter((function(t){return t.strCategory.toLowerCase().includes(e.toLowerCase())}))),O({pathname:u,search:"?search=".concat(e)})}}),c.length?Object(o.jsx)(y,{catalog:i}):Object(o.jsx)(v,{})]})};var C=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"Hello, from About page"})})};var F=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"Hello, from Contact page"})})};var M=function(e){var t=e.idMeal,c=e.strMeal,n=e.strMealThumb;return Object(o.jsxs)("div",{className:"card",children:[Object(o.jsx)("div",{className:"card-image",children:Object(o.jsx)("img",{src:n,alt:c})}),Object(o.jsx)("div",{className:"card-content",children:Object(o.jsx)("span",{className:"card-title",children:c})}),Object(o.jsx)("div",{className:"card-action",children:Object(o.jsx)(i.b,{to:"/meal/".concat(t),className:"btn",children:"Watch recipe"})})]})};var S=function(e){var t=e.meals;return Object(o.jsx)("div",{className:"list",children:t.map((function(e){return Object(o.jsx)(M,Object(g.a)({},e),e.idMeal)}))})};var R=function(){var e=Object(n.useState)([]),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(j.h)().name,s=Object(j.f)().goBack;return Object(n.useEffect)((function(){f(a).then((function(e){return r(e.meals)}))}),[a]),Object(o.jsxs)(o.Fragment,{children:[Object(o.jsx)("button",{className:"btn",onClick:s,children:"Go back"}),Object(o.jsx)("div",{children:c.length?Object(o.jsx)(S,{meals:c}):Object(o.jsx)(v,{})})]})};var A=function(){var e=Object(n.useState)({}),t=Object(d.a)(e,2),c=t[0],r=t[1],a=Object(j.h)().id,s=Object(j.f)().goBack;return Object(n.useEffect)((function(){m(a).then((function(e){return r(e.meals[0])}))}),[a]),Object(o.jsxs)(o.Fragment,{children:[c.idMeal?Object(o.jsxs)("div",{className:"recipe",children:[Object(o.jsx)("img",{src:c.strMealThumb,alt:c.strMeal}),Object(o.jsx)("h1",{children:c.strMeal}),Object(o.jsxs)("h5",{children:["Category: ",c.strCategory]}),c.strArea?Object(o.jsxs)("span",{children:["Area: ",c.strArea]}):null,Object(o.jsx)("p",{children:c.strInstructions}),Object(o.jsxs)("table",{className:"centred",children:[Object(o.jsx)("thead",{children:Object(o.jsxs)("tr",{children:[Object(o.jsx)("th",{children:"Ingredient"}),Object(o.jsx)("th",{children:"Measure"})]})}),Object(o.jsx)("tbody",{children:Object.keys(c).map((function(e){return e.includes("Ingredient")&&c[e]?Object(o.jsxs)("tr",{children:[Object(o.jsx)("td",{children:c[e]}),Object(o.jsx)("td",{children:c["strMeasure".concat(e.slice(13))]})]},e):null}))})]}),c.strYoutube?Object(o.jsxs)("div",{className:"row",children:[Object(o.jsx)("h5",{style:{margin:"2rem 0 1.5rem"},children:"Video Recipe"}),Object(o.jsx)("iframe",{title:a,src:"https://www.youtube.com/embed/".concat(c.strYoutube.slice(-11)),allowFullScreen:!0})]}):null]}):Object(o.jsx)(v,{}),Object(o.jsx)("button",{className:"btn",onClick:s,children:"Go Back"}),Object(o.jsx)("div",{})]})};var E=function(){return Object(o.jsx)("div",{children:Object(o.jsx)("h3",{children:"Page Not Found!"})})};var B=function(){return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)(i.a,{basename:"/react-food",children:[Object(o.jsx)(l,{}),Object(o.jsx)("main",{className:"container content",children:Object(o.jsxs)(j.c,{children:[Object(o.jsx)(j.a,{exact:!0,path:"/",component:k}),Object(o.jsx)(j.a,{path:"/about",component:C}),Object(o.jsx)(j.a,{path:"/contact",component:F}),Object(o.jsx)(j.a,{path:"/category/:name",component:R}),Object(o.jsx)(j.a,{path:"/meal/:id",component:A}),Object(o.jsx)(j.a,{component:E})]})}),Object(o.jsx)(b,{})]})})};s.a.render(Object(o.jsx)(r.a.StrictMode,{children:Object(o.jsx)(B,{})}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.26eda5ca.chunk.js.map