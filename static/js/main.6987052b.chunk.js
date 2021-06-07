(this["webpackJsonphalo-technical-test"]=this["webpackJsonphalo-technical-test"]||[]).push([[0],{55:function(t,e,n){},56:function(t,e,n){},57:function(t,e,n){},58:function(t,e,n){},59:function(t,e,n){},60:function(t,e,n){},62:function(t,e,n){"use strict";n.r(e);var o=n(0),r=n.n(o),c=n(10),i=n.n(c),a=n(5),u=n(4),s=n(2),d=n.n(s),l=n(6),O=n(7),j=n.n(O),p="GET_TODOS",b="DELETE_TODO",f="UPDATE_TODO_STATUS",D="ADD_NEW_TODO",v="DELETE_COMPLETED_TODOS",h="MARK_ALL_COMPLETE",T=function(t){return{type:b,toDoID:t}},E=function(t,e){return{type:f,toDoID:t,updatedToDo:e}},S=function(t){return{type:D,newToDo:t}},_=function(t){return{type:h,toDoList:t}},x=function(t){return function(){var e=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.put("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/halo-gh-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).DATABASE_SERVER,"/todos/").concat(t.id),t);case 3:n(E(t.id,t)),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("error in todo reducer, updateTodoStatus",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()},m=n(1),C=function(t){t.itemID;var e=t.buttonClassName,n=t.reducerAction,o=t.textToDisplay,r=void 0===o?"":o;return Object(m.jsx)("div",{className:e,children:Object(m.jsx)("button",{onClick:function(){return n()},children:r})})},A=function(t){var e=t.toDoItem,n=Object(u.b)(),r=e.content,c=Object(o.useState)(!1),i=Object(a.a)(c,2),s=i[0],d=i[1],l=Object(o.useState)(r),O=Object(a.a)(l,2),j=O[0],p=O[1];return s?Object(m.jsx)("input",{type:"text",value:j,onChange:function(t){return p(t.target.value)},onKeyDown:function(t){return function(t){if("Enter"===t.key){var o=e;o.content=t.target.value,n(x(o)),d(!1),t.preventDefault(),t.stopPropagation()}"Escape"===t.key&&(d(!1),t.preventDefault(),t.stopPropagation())}(t)}}):Object(m.jsx)("div",{onDoubleClick:function(){return d(!0)},children:j})},g=(n(55),function(t){var e=t.itemToDo,n=Object(u.b)(),r=e.id,c=e.isDone,i=Object(o.useState)("hide"),s=Object(a.a)(i,2),O=s[0],p=s[1];return Object(m.jsxs)("div",{className:"singletodo single--todo--".concat(c?"completed":"uncompleted"),onMouseEnter:function(){return p("show")},onMouseLeave:function(){return p("hide")},children:[Object(m.jsx)(C,{itemID:r,buttonClassName:"button__marker buttonMarked--".concat(c?"completed":"uncompleted"),reducerAction:function(){var t=e;t.isDone=!c,n(x(t))},textToDisplay:"a"}),Object(m.jsx)(A,{toDoItem:e}),Object(m.jsx)(C,{itemID:r,buttonClassName:"button__delete__toDo button--delete--".concat(O),reducerAction:function(){return n((t=r,function(){var e=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,j.a.delete("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/halo-gh-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).DATABASE_SERVER,"/todos/").concat(t));case 3:n(T(t)),e.next=9;break;case 6:e.prev=6,e.t0=e.catch(0),console.log("error in todo reducer, deleteTo",e.t0);case 9:case"end":return e.stop()}}),e,null,[[0,6]])})));return function(t){return e.apply(this,arguments)}}()));var t},textToDisplay:"X"})]})}),R=(n(56),function(t){var e=t.toDoList;return e.length>0?Object(m.jsx)("div",{className:"todoitems",children:e.map((function(t){return Object(m.jsx)("div",{children:Object(m.jsx)(g,{itemToDo:t})},"itemToDo_".concat(t.id))}))}):Object(m.jsx)("div",{children:"Add some todos!"})}),L=(n(57),function(t){var e=t.toDoList,n=Object(o.useState)(""),r=Object(a.a)(n,2),c=r[0],i=r[1],s=Object(u.b)(),O=function(t){var e;t.preventDefault(),s((e=c,function(){var t=Object(l.a)(d.a.mark((function t(n){var o,r,c;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,o={content:e,isDone:!1},t.next=4,j.a.post("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/halo-gh-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).DATABASE_SERVER,"/todos/"),o);case 4:r=t.sent,c=r.data,n(S(c)),t.next=12;break;case 9:t.prev=9,t.t0=t.catch(0),console.log("error in todo reducer, addNewTodo",t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})));return function(e){return t.apply(this,arguments)}}())),i("")};return Object(m.jsxs)("div",{className:"newtodosinput",children:[e.length>0?Object(m.jsx)("button",{onClick:function(){return s(function(t){return function(){var e=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.forEach(function(){var t=Object(l.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.isDone=!0,t.next=3,j.a.put("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/halo-gh-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).DATABASE_SERVER,"/todos/").concat(e.id),e);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),console.log(t),n(_(t))}catch(o){console.log("error in todo reducer, markAllComplete",o)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(e))},children:"V"}):Object(m.jsx)(m.Fragment,{}),Object(m.jsx)("form",{onSubmit:function(t){return O(t)},children:Object(m.jsx)("input",{type:"text",value:c,onChange:function(t){return i(t.target.value)}})})]})}),y=function(t){var e=t.numTodos,n=t.setNumTodos,r=t.toDoList;return Object(o.useEffect)((function(){n(r.reduce((function(t,e){return e.isDone||t++,t}),0))}),[r]),Object(m.jsxs)("div",{children:[e," items left"]})},k=(n(58),function(t){var e=t.numTodos,n=t.toDoList,o=Object(u.b)();return e!==n.length?Object(m.jsx)("div",{children:Object(m.jsx)("button",{onClick:function(){return o(function(t){return function(){var e=Object(l.a)(d.a.mark((function e(n){return d.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:try{t.reduce((function(t,e){return e.isDone&&t.push(e.id),t}),[]).forEach(function(){var t=Object(l.a)(d.a.mark((function t(e){return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,j.a.delete("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/halo-gh-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).DATABASE_SERVER,"/todos/").concat(e));case 2:return t.abrupt("return",t.sent);case 3:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()),n({type:v})}catch(o){console.log("error in todo reducer, clearCompletedToDos",o)}case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}(n))},children:"Clear Completed"})}):Object(m.jsx)("div",{className:"delete__completed__placeholder",children:"Clear Completed"})}),w=(n(59),function(t){var e=t.toDoList,n=t.setFilterdList,r=t.setIsFiltering,c=Object(o.useState)(0),i=Object(a.a)(c,2),u=i[0],s=i[1],d=function(t){"Active"===t?(n(l(!1)),r(!0)):"Completed"===t?(n(l(!0)),r(!0)):r(!1)},l=function(t){return e.filter((function(e){return e.isDone===t}))};return Object(m.jsxs)("div",{className:"filterList",children:[Object(m.jsx)("div",{children:Object(m.jsx)(y,{numTodos:u,setNumTodos:s,toDoList:e})}),Object(m.jsxs)("div",{children:[Object(m.jsx)("button",{onClick:function(){return d("All")},children:"All"}),Object(m.jsx)("button",{onClick:function(){return d("Active")},children:"Active"}),Object(m.jsx)("button",{onClick:function(){return d("Completed")},children:"Completed"})]}),Object(m.jsx)("div",{children:Object(m.jsx)(k,{numTodos:u,toDoList:e})})]})}),N=(n(60),function(){var t=Object(u.b)(),e=Object(u.c)((function(t){return t.toDos})),n=Object(o.useState)(!1),r=Object(a.a)(n,2),c=r[0],i=r[1],s=Object(o.useState)([]),O=Object(a.a)(s,2),b=O[0],f=O[1];return Object(o.useEffect)((function(){t(function(){var t=Object(l.a)(d.a.mark((function t(e){var n,o;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,j.a.get("".concat(Object({NODE_ENV:"production",PUBLIC_URL:"/halo-gh-page",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0,FAST_REFRESH:!0}).DATABASE_SERVER,"/todos"));case 3:n=t.sent,o=n.data,e({type:p,toDoData:o}),t.next=11;break;case 8:t.prev=8,t.t0=t.catch(0),console.log("error in todo reducer, getToDos",t.t0);case 11:case"end":return t.stop()}}),t,null,[[0,8]])})));return function(e){return t.apply(this,arguments)}}())}),[]),Object(m.jsxs)(m.Fragment,{children:[Object(m.jsx)("h1",{children:"todos"}),Object(m.jsxs)("div",{className:"mainscreen",children:[Object(m.jsx)(L,{toDoList:e}),c?Object(m.jsx)(R,{toDoList:b}):Object(m.jsx)(R,{toDoList:e}),Object(m.jsx)(w,{toDoList:e,setFilterdList:f,setIsFiltering:i})]})]})}),P=n(9),K=n(24),W=n(25),F=n(26),H=n(15),I=Object(P.combineReducers)({toDos:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],e=arguments.length>1?arguments[1]:void 0;switch(e.type){case p:return e.toDoData.sort((function(t,e){return t.id>e.id}));case b:return t.filter((function(t){return t.id!==e.toDoID}));case f:return t.reduce((function(t,n){return n.id===e.toDoID?t.push(e.updatedToDo):t.push(n),t}),[]);case D:return[].concat(Object(H.a)(t),[e.newToDo]);case v:return t.filter((function(t){return!t.isDone}));case h:return Object(H.a)(e.toDoList);default:return t}}}),U=Object(F.composeWithDevTools)(Object(P.applyMiddleware)(W.a,Object(K.createLogger)({collapsed:!0}))),B=Object(P.createStore)(I,U);i.a.render(Object(m.jsx)(r.a.StrictMode,{children:Object(m.jsx)(u.a,{store:B,children:Object(m.jsx)(N,{})})}),document.getElementById("root"))}},[[62,1,2]]]);
//# sourceMappingURL=main.6987052b.chunk.js.map