(this["webpackJsonppubg-bingo"]=this["webpackJsonppubg-bingo"]||[]).push([[0],{29:function(e){e.exports=JSON.parse('{"profile":"default","baseUrl":"http://localhost:3000/","optionsUrl":"https://sheets.googleapis.com/v4/spreadsheets/1T_jMoqbcTFIeQK7mKIyXeFTJPQeHZtQCi7atKeqOyEA/values/Sheet1!${COLUMN}%3A${COLUMN}?key=AIzaSyAHW8WIAwzjn5cSWpUeM7AUtlPFeUYy5iE","gameColumn":{"pubg":"A","roe":"B","dota":"C"},"gameTitle":{"pubg":"PUBG","roe":"RoE","dota":"DotA"},"gameDefault":"pubg"}')},30:function(e){e.exports=JSON.parse('{"profile":"dev"}')},31:function(e){e.exports=JSON.parse('{"profile":"default","baseUrl":"https://austinmilt.github.io/pubg-bingo/"}')},39:function(e,t,n){},40:function(e,t,n){},49:function(e,t){},70:function(e,t,n){"use strict";n.r(t);var a=n(5),r=n.n(a),s=n(27),c=n.n(s),i=(n(39),n(1)),o=n(4),u=n(7),l=n(6),d=(n(40),n(14)),h=n(12),b=n.n(h),p=n(15),f=n(11),j=n(33),g=n(16),m=n.n(g),O=n(28),v=n.n(O),y=n(34),x=n(29),S=n(30),k=n(31),C=x,w=(U(C,S),U(C,k));function U(e,t){console.log(e,t);var n={};if(A(e))for(var a=0,r=Object.entries(e);a<r.length;a++){var s=Object(y.a)(r[a],2),c=s[0],i=s[1];A(i)?n[c]=U(i,t[c]):n[c]=t?void 0===t[c]?i:t[c]:i}return n}function A(e){return"object"===typeof e&&null!==e&&!Array.isArray(e)}function G(){return w}var N=n(32),T=n.n(N);function F(e){return I.apply(this,arguments)}function I(){return(I=Object(p.a)(b.a.mark((function e(t){var n,a,r,s,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=G().optionsUrl.replaceAll("${COLUMN}",G().gameColumn[t]),e.next=3,T.a.get(n,{timeout:5e3});case 3:a=e.sent,r=[],s=Object(d.a)(a.data.values);try{for(s.s();!(c=s.n()).done;)i=c.value,r.push(i[0])}catch(o){s.e(o)}finally{s.f()}return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var L=n(0),M=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(e){var a;return Object(i.a)(this,n),(a=t.call(this,e)).state={game:G().gameDefault,seed:""},a.buildCell=a.buildCell.bind(Object(f.a)(a)),a.buildGrid=a.buildGrid.bind(Object(f.a)(a)),a.getSeed=a.getSeed.bind(Object(f.a)(a)),a}return Object(o.a)(n,[{key:"componentDidMount",value:function(){var e=this,t=new URLSearchParams(window.location.search),n=this.getGame(t),a=this.getSeed(t);this.setState({game:n,seed:a}),this.makeSelection(n,a).then((function(t){return e.setState({selection:t})}))}},{key:"makeSelection",value:function(){var e=Object(p.a)(b.a.mark((function e(t,n){var a,r,s,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return a=this.props.rows*this.props.columns,r=[],e.next=4,F(t);case 4:for(s=e.sent,this.shuffleArray(s,n),c=0;c<a;c++)r.push(s[c]);return e.abrupt("return",r);case 8:case"end":return e.stop()}}),e,this)})));return function(t,n){return e.apply(this,arguments)}}()},{key:"getGame",value:function(e){var t=e.get("game");return null===t&&(t=G().gameDefault,window.history.pushState("gamed","gamed","".concat(G().baseUrl,"?game=").concat(t,"&seed=").concat(this.getSeed(e)))),t}},{key:"shuffleArray",value:function(e,t){var n=j.a.clone(m()(t));e.sort((function(){return n.float()-.5}))}},{key:"getSeed",value:function(e){var t=e.get("seed");return null===t&&(t=v()(3).join("-"),window.history.pushState("seeded","seeded","".concat(G().baseUrl,"?game=").concat(this.getGame(e),"&seed=").concat(t))),t}},{key:"buildGrid",value:function(){var e=[];if(this.state.selection){var t,n=Object(d.a)(this.state.selection);try{for(n.s();!(t=n.n()).done;){var a=t.value;e.push(this.buildCell(a))}}catch(r){n.e(r)}finally{n.f()}}return e}},{key:"buildCell",value:function(e){return Object(L.jsx)("label",{onClick:function(e){return e.currentTarget.classList.toggle("complete")},children:Object(L.jsx)("div",{className:"mark",children:Object(L.jsx)("span",{children:e})})},e)}},{key:"render",value:function(){return Object(L.jsxs)("main",{children:[Object(L.jsxs)("h1",{children:[G().gameTitle[this.state.game],Object(L.jsx)("br",{}),Object(L.jsx)("span",{children:"B"}),Object(L.jsx)("span",{children:"I"}),Object(L.jsx)("span",{children:"N"}),Object(L.jsx)("span",{children:"G"}),Object(L.jsx)("span",{children:"O"})]}),Object(L.jsx)("div",{className:"grid",children:this.buildGrid()}),Object(L.jsxs)("small",{children:["Seed: ",Object(L.jsx)("span",{id:"seed",children:this.state.seed})]}),Object(L.jsx)("small",{children:Object(L.jsx)("a",{href:"".concat(G().baseUrl),children:"Gimme a new Card"})})]})}}]),n}(r.a.Component),D=function(e){Object(u.a)(n,e);var t=Object(l.a)(n);function n(){return Object(i.a)(this,n),t.apply(this,arguments)}return Object(o.a)(n,[{key:"render",value:function(){return Object(L.jsx)("div",{className:"App",children:Object(L.jsx)(M,{rows:5,columns:5})})}}]),n}(r.a.Component),J=D,P=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,71)).then((function(t){var n=t.getCLS,a=t.getFID,r=t.getFCP,s=t.getLCP,c=t.getTTFB;n(e),a(e),r(e),s(e),c(e)}))};c.a.render(Object(L.jsx)(r.a.StrictMode,{children:Object(L.jsx)(J,{})}),document.getElementById("root")),P()}},[[70,1,2]]]);
//# sourceMappingURL=main.2baaa3f8.chunk.js.map