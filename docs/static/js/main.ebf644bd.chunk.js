(this["webpackJsonphook-app"]=this["webpackJsonphook-app"]||[]).push([[0],{15:function(e,t,n){},16:function(e,t,n){},17:function(e,t,n){"use strict";n.r(t);var c=n(1),r=n(8),a=n.n(r),o=n(4),s=n(2),i=n(9),d=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"add":return[].concat(Object(i.a)(e),[t.paylot]);case"delete":return e.filter((function(e){return e.id!==t.payload}));case"toggle":return e.map((function(e){return e.id===t.payload?Object(s.a)(Object(s.a)({},e),{},{done:!e.done}):e}));default:return e}},l=n(6),u=function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";switch(e){case"add":return t.trim().length>2&&{type:"add",paylot:{id:1e4*Math.random(),desc:t,done:!1}};case"delete":return{type:"delete",payload:t};case"toggle":return{type:"toggle",payload:t}}},j=n(0),p=function(e){var t=e.todos,n=e.dispatch;return Object(j.jsx)("ul",{className:"list-group",children:t.map((function(e,t){var c=e.id,r=e.desc,a=e.done;return Object(j.jsx)(j.Fragment,{children:Object(j.jsxs)("li",{onClick:function(){return n(u("toggle",c))},className:"list-group-item list-group-item-info Todo ".concat(a&&"complete"),children:["".concat(t+1,".")," ",r,Object(j.jsx)("button",{className:"btn btn-danger boton-borrar",onClick:function(){return n(u("delete",c))},children:"Borrar"},"button ".concat(c))]},c)})}))})},b=function(e){var t=e.description,n=e.handleInputChange,c=e.reset,r=e.dispatch;return Object(j.jsxs)("div",{children:[Object(j.jsx)("hr",{}),Object(j.jsx)("h4",{children:" Agregar tarea "}),Object(j.jsxs)("form",{className:"form-label",children:[Object(j.jsx)("input",{type:"text",name:"description",className:"form-control",placeholder:"Por ejemplo: Aprender algo, cocinar, realizar un mandado..",value:t,onChange:n}),Object(j.jsx)("button",{type:"submit",className:"btn btn-success",onClick:function(e){e.preventDefault(),r(u("add",t)),c()},children:" Agregar "})]})]})},h=(n(15),function(){return JSON.parse(localStorage.getItem("todos"))||[]}),g=function(){var e=Object(c.useReducer)(d,[],h),t=Object(o.a)(e,2),n=t[0],r=t[1],a=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=Object(c.useState)(e),n=Object(o.a)(t,2),r=n[0],a=n[1];return[r,function(e){var t=e.target;a(Object(s.a)(Object(s.a)({},r),{},Object(l.a)({},t.name,t.value)))},function(){a(e)}]}({description:""}),i=Object(o.a)(a,3),u=i[0].description,g=i[1],O=i[2];return Object(c.useEffect)((function(){localStorage.setItem("todos",JSON.stringify(n))}),[n]),Object(j.jsxs)("div",{children:[Object(j.jsx)("h1",{children:"App de tareas"}),Object(j.jsxs)("h2",{children:["Cantidad de tareas: ",n.length]}),Object(j.jsx)(b,{description:u,handleInputChange:g,reset:O,dispatch:r}),Object(j.jsx)("hr",{}),Object(j.jsx)(p,{todos:n,dispatch:r})]})};n(16);a.a.render(Object(j.jsx)(j.Fragment,{children:Object(j.jsx)(g,{})}),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ebf644bd.chunk.js.map