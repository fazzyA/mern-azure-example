(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{23:function(t,e,n){},24:function(t,e,n){},44:function(t,e,n){"use strict";n.r(e);var o=n(2),h=n.n(o),c=n(13),a=n.n(c),u=(n(23),n(16)),i=n(14),s=n(15),r=n(18),l=n(17),g=(n(24),n(3)),d=n.n(g),f=n(1),p=function(t){Object(r.a)(n,t);var e=Object(l.a)(n);function n(t){var o;return Object(i.a)(this,n),(o=e.call(this,t)).createThought=function(){var t=prompt("Enter your thought: ");t&&d.a.post("/api/thoughts/create",{thought:t}).then((function(t){return o.setState({thoughts:[].concat(Object(u.a)(o.state.thoughts),[t.data.newThought])})})).catch((function(t){return alert("Failed to create thought\n".concat(JSON.stringify(t)))}))},o.deleteThoughts=function(){window.confirm("Delete all Thoughts?")&&d.a.delete("/api/thoughts/").then((function(t){return o.setState({thoughts:[]})})).catch((function(t){return alert("Failed to delete all thoughts\n".concat(JSON.stringify(t)))}))},o.seedThoughts=function(){window.confirm("Do you want to seed random data?")&&d.a.post("/api/thoughts/seed",{}).then((function(){d.a.get("/api/thoughts/").then((function(t){return o.setState({thoughts:t.data})})).catch(alert)})).catch(alert)},o.state={thoughts:[]},o}return Object(s.a)(n,[{key:"componentDidMount",value:function(){var t=this;d.a.get("/api/thoughts/").then((function(e){return t.setState({thoughts:e.data})})).catch(alert)}},{key:"render",value:function(){var t=this.state.thoughts;return Object(f.jsxs)("div",{className:"App",children:[Object(f.jsx)("button",{onClick:this.createThought,children:"Create Thought"}),Object(f.jsx)("button",{onClick:this.deleteThoughts,children:"Delete Thoughts"}),Object(f.jsx)("button",{onClick:this.seedThoughts,children:"Seed Thoughts"}),Object(f.jsx)("ul",{children:t.map((function(t){return Object(f.jsx)("li",{style:{listStyleType:"none",margin:"20px",borderBottom:"1px solid black"},children:t.thought},t._id)}))})]})}}]),n}(o.Component),b=function(t){t&&t instanceof Function&&n.e(3).then(n.bind(null,45)).then((function(e){var n=e.getCLS,o=e.getFID,h=e.getFCP,c=e.getLCP,a=e.getTTFB;n(t),o(t),h(t),c(t),a(t)}))};a.a.render(Object(f.jsx)(h.a.StrictMode,{children:Object(f.jsx)(p,{})}),document.getElementById("root")),b()}},[[44,1,2]]]);
//# sourceMappingURL=main.3ef60081.chunk.js.map