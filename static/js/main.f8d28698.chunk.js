(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var c=n(8),a=n.n(c),o=n(1),i=n(3),r=n(4),s=n(6),l=n(5),u=n(2),m=n.n(u),d=(n(13),n(0)),h=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),o=0;o<c;o++)a[o]=arguments[o];return(t=e.call.apply(e,[this].concat(a))).state={time:(new Date).toUTCString().slice(-12,-4)},t.timerId=0,t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{time:(new Date).toUTCString().slice(-12,-4)})})),window.console.info(t.state.time)}),1e3)}},{key:"componentDidUpdate",value:function(t){t.name!==this.props.name&&console.debug("Renamed from ".concat(t.name," to ").concat(this.props.name))}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId)}},{key:"render",value:function(){var t=this.state.time,e=this.props.name;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:e})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:t})]})}}]),n}(m.a.Component);function v(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var k=function(t){Object(s.a)(n,t);var e=Object(l.a)(n);function n(){var t;Object(i.a)(this,n);for(var c=arguments.length,a=new Array(c),r=0;r<c;r++)a[r]=arguments[r];return(t=e.call.apply(e,[this].concat(a))).state={clockName:"Clock-0",hasClock:!0},t.timerId=0,t.handleDocumentRightClick=function(e){e.preventDefault(),t.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{hasClock:!1})}))},t.handleDocumentLeftClick=function(e){e.preventDefault(),t.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{hasClock:!0})}))},t}return Object(r.a)(n,[{key:"componentDidMount",value:function(){var t=this;this.timerId=window.setInterval((function(){t.setState((function(t){return Object(o.a)(Object(o.a)({},t),{},{clockName:v()})}))}),3300),document.addEventListener("contextmenu",this.handleDocumentRightClick),document.addEventListener("click",this.handleDocumentLeftClick)}},{key:"componentWillUnmount",value:function(){window.clearInterval(this.timerId),document.removeEventListener("contextmenu",this.handleDocumentRightClick),document.removeEventListener("click",this.handleDocumentLeftClick)}},{key:"render",value:function(){var t=this.state,e=t.clockName,n=t.hasClock;return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),n&&Object(d.jsx)(h,{name:e})]})}}]),n}(m.a.Component);a.a.render(Object(d.jsx)(k,{}),document.getElementById("root"))}},[[15,1,2]]]);
//# sourceMappingURL=main.f8d28698.chunk.js.map