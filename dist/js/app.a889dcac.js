(function(e){function t(t){for(var n,c,i=t[0],l=t[1],u=t[2],s=0,p=[];s<i.length;s++)c=i[s],Object.prototype.hasOwnProperty.call(r,c)&&r[c]&&p.push(r[c][0]),r[c]=0;for(n in l)Object.prototype.hasOwnProperty.call(l,n)&&(e[n]=l[n]);a&&a(t);while(p.length)p.shift()();return d.push.apply(d,u||[]),o()}function o(){for(var e,t=0;t<d.length;t++){for(var o=d[t],n=!0,i=1;i<o.length;i++){var l=o[i];0!==r[l]&&(n=!1)}n&&(d.splice(t--,1),e=c(c.s=o[0]))}return e}var n={},r={app:0},d=[];function c(t){if(n[t])return n[t].exports;var o=n[t]={i:t,l:!1,exports:{}};return e[t].call(o.exports,o,o.exports,c),o.l=!0,o.exports}c.m=e,c.c=n,c.d=function(e,t,o){c.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:o})},c.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},c.t=function(e,t){if(1&t&&(e=c(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var o=Object.create(null);if(c.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)c.d(o,n,function(t){return e[t]}.bind(null,n));return o},c.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return c.d(t,"a",t),t},c.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},c.p="< todoapp >/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],l=i.push.bind(i);i.push=t,i=i.slice();for(var u=0;u<i.length;u++)t(i[u]);var a=l;d.push([0,"chunk-vendors"]),o()})({0:function(e,t,o){e.exports=o("56d7")},"034f":function(e,t,o){"use strict";var n=o("85ec"),r=o.n(n);r.a},"56d7":function(e,t,o){"use strict";o.r(t);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),r=function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("div",{staticClass:"container"},[o("h1",[e._v("ToDo List")]),o("md-card",{staticClass:"cardBox"},[o("md-field",[o("md-input",{attrs:{placeholder:"Add a todo"},on:{keydown:function(t){return!t.type.indexOf("key")&&e._k(t.keyCode,"enter",13,t.key,"Enter")?null:e.addTodo(e.todo)}},model:{value:e.currentTodo,callback:function(t){e.currentTodo=t},expression:"currentTodo"}})],1),o("div",{staticClass:"todoBox"},e._l(e.todos,(function(t,n){return o("li",{key:t.id},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.completed,expression:"todo.completed"}],staticClass:"completeButton",attrs:{type:"checkbox"},domProps:{checked:Array.isArray(t.completed)?e._i(t.completed,null)>-1:t.completed},on:{change:function(o){var n=t.completed,r=o.target,d=!!r.checked;if(Array.isArray(n)){var c=null,i=e._i(n,c);r.checked?i<0&&e.$set(t,"completed",n.concat([c])):i>-1&&e.$set(t,"completed",n.slice(0,i).concat(n.slice(i+1)))}else e.$set(t,"completed",d)}}}),t.edit?o("md-input",{staticClass:"todo-item-edit",attrs:{type:"text"},on:{keyup:[function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"enter",13,o.key,"Enter")?null:e.doneEdit(t)},function(o){return!o.type.indexOf("key")&&e._k(o.keyCode,"escape",void 0,o.key,void 0)?null:e.doneEdit(t)}]},model:{value:t.label,callback:function(o){e.$set(t,"label",o)},expression:"todo.label"}}):o("span",{staticClass:"todo-item-label",class:{completed:t.completed},on:{dblclick:function(o){return e.editTodo(t)}}},[e._v(e._s(t.label))]),o("md-icon-button",{staticClass:"closeButton",on:{click:function(t){return e.removeTodo(n)}}},[e._v("X")])],1)})),0)],1)],1)},d=[],c=(o("a434"),o("498a"),{data:function(){return{todos:[{id:1,label:"Enjoy the day",completed:!0,edit:!1}],currentTodo:"",editedTodo:null}},methods:{addTodo:function(){0!=this.currentTodo.trim()&&(this.todos.push({id:this.todos.length,label:this.currentTodo,completed:!1,edit:!1}),this.currentTodo="")},removeTodo:function(e){this.todos.splice(e,1)},editTodo:function(e){e.edit=!0},doneEdit:function(e){e.edit=!1}}}),i=c,l=(o("034f"),o("2877")),u=Object(l["a"])(i,r,d,!1,null,null,null),a=u.exports,s=o("9c30");o("51de");n["default"].use(s["MdField"]),n["default"].config.productionTip=!1,new n["default"]({render:function(e){return e(a)}}).$mount("#app")},"85ec":function(e,t,o){}});
//# sourceMappingURL=app.a889dcac.js.map