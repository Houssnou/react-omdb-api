(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{17:function(e,t,a){e.exports=a(42)},42:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(9),l=a.n(c),i=a(10),s=a(11),u=a(12),o=a(15),m=a(13),h=a(16);var d=function(e){return r.a.createElement("div",{className:"container".concat(e.fluid?"-fluid":"")},e.children)};var v=function(e){return r.a.createElement("div",{className:"row".concat(e.fluid?"-fluid":"")},e.children)};var f=function(e){var t=e.size.split(" ").map(function(e){return"col-"+e}).join(" ");return r.a.createElement("div",{className:t},e.children)};var E=function(e){return r.a.createElement("div",{className:"card text-center"},r.a.createElement("div",{className:"card-header"},r.a.createElement("h2",null,e.heading)),r.a.createElement("div",{className:"card-body"},e.children))};var p=function(e){return r.a.createElement("form",null,r.a.createElement("div",{className:"form-group"},r.a.createElement("label",{htmlFor:"search"},"Search:"),r.a.createElement("input",{onChange:e.handleInputChange,value:e.value,name:"search",type:"text",className:"form-control",placeholder:"Search For a Movie",id:"search"}),r.a.createElement("br",null),r.a.createElement("button",{onClick:e.handleFormSubmit,className:"btn btn-primary"},"Search")))};var g=function(e){return r.a.createElement("div",{className:"text-center"},r.a.createElement("img",{alt:e.title,className:"img-fluid",src:e.src,style:{margin:"0 auto"}}),r.a.createElement("h3",null,"Director(s): ",e.director),r.a.createElement("h3",null,"Genre: ",e.genre),r.a.createElement("h3",null,"Released: ",e.released))},b=a(14),w=a.n(b),y={search:function(e){return w.a.get("https://www.omdbapi.com/?t="+e+"&apikey=trilogy")}},N=function(e){function t(){var e,a;Object(s.a)(this,t);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(a=Object(o.a)(this,(e=Object(m.a)(t)).call.apply(e,[this].concat(r)))).state={result:{},search:""},a.searchMovies=function(e){y.search(e).then(function(e){return a.setState({result:e.data})}).catch(function(e){return console.log(e)})},a.handleInputChange=function(e){var t=e.target,n=t.name,r=t.value;a.setState(Object(i.a)({},n,r))},a.handleFormSubmit=function(e){e.preventDefault();var t=a.state.search;a.searchMovies(t)},a}return Object(h.a)(t,e),Object(u.a)(t,[{key:"componentDidMount",value:function(){this.searchMovies("The Matrix")}},{key:"render",value:function(){return r.a.createElement(d,null,r.a.createElement(v,null,r.a.createElement(f,{size:"md-8"},r.a.createElement(E,{heading:this.state.result.Title||"Search for a Movie to Begin"},r.a.createElement(g,{title:this.state.result.Title,src:this.state.result.Poster,director:this.state.result.Director,genre:this.state.result.Genre,released:this.state.result.Released}))),r.a.createElement(f,{size:"md-4"},r.a.createElement(E,{heading:"Search"},r.a.createElement(p,{value:this.state.search,handleInputChange:this.handleInputChange,handleFormSubmit:this.handleFormSubmit})))))}}]),t}(n.Component);var S=function(){return r.a.createElement(N,null)};l.a.render(r.a.createElement(S,null),document.getElementById("root"))}},[[17,1,2]]]);
//# sourceMappingURL=main.ae5a78ee.chunk.js.map