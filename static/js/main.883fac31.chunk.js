(this["webpackJsonpreact-simple-task-1"]=this["webpackJsonpreact-simple-task-1"]||[]).push([[0],{12:function(t,e,n){},14:function(t,e,n){},15:function(t,e,n){"use strict";n.r(e);var i=n(1),r=n.n(i),s=n(3),c=n.n(s),u=(n(12),n(4)),a=n(5),l=n(7),o=n(6),p=n(0),h=function(t){var e=null;return e=t.inputLength>25?"Text too long":t.inputLength<=25&&t.inputLength>15?"Text long enough":t.inputLength<=15&&t.inputLength>0?"Text too short":"There's no Text",Object(p.jsx)("div",{children:Object(p.jsx)("p",{style:{fontSize:"20px"},children:e})})},d=function(t){return Object(p.jsx)("div",{style:{display:"inline-block",textAlign:"center",padding:"16px",margin:"16px",border:"1px solid black",borderRadius:"10px",backgroundColor:"white"},onClick:t.clicked,children:t.character})},g=(n(14),function(t){Object(l.a)(n,t);var e=Object(o.a)(n);function n(t){var i;return Object(u.a)(this,n),(i=e.call(this,t)).inputChangedHandler=function(t){i.setState({userInput:t.target.value})},i.deleteInputCharHandler=function(t){var e=i.state.userInput.split("");e.splice(t,1);var n=e.join("");i.setState({userInput:n})},i.state={userInput:""},i}return Object(a.a)(n,[{key:"render",value:function(){var t=this,e=this.state.userInput.split("").map((function(e,n){return Object(p.jsx)(d,{character:e,clicked:function(){return t.deleteInputCharHandler(n)}},n)}));return Object(p.jsxs)("div",{className:"App",children:[Object(p.jsx)("input",{onChange:this.inputChangedHandler,value:this.state.userInput,type:"text",style:{textAlign:"center"}}),Object(p.jsx)("p",{style:{fontSize:"24px",fontWeight:"bolder"},children:this.state.userInput}),Object(p.jsx)(h,{inputLength:this.state.userInput.length}),e]})}}]),n}(i.Component)),j=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(e){var n=e.getCLS,i=e.getFID,r=e.getFCP,s=e.getLCP,c=e.getTTFB;n(t),i(t),r(t),s(t),c(t)}))};c.a.render(Object(p.jsx)(r.a.StrictMode,{children:Object(p.jsx)(g,{})}),document.getElementById("root")),j()}},[[15,1,2]]]);
//# sourceMappingURL=main.883fac31.chunk.js.map