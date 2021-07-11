(this["webpackJsonpcodejam-chess"]=this["webpackJsonpcodejam-chess"]||[]).push([[0],{21:function(e,t,a){},33:function(e,t,a){"use strict";a.r(t);a(21);var c,n=a(0),s=a(17),r=a.n(s),i=a(7),o=a(8),l=a(2),u=[{category:"clothes",image:"clothes.png"},{category:"actions-a",image:"dance.png"},{category:"actions-b",image:"sleep.png"},{category:"actions-c",image:"cook.png"},{category:"food",image:"food.png"},{category:"emotions",image:"happy.png"},{category:"animals-a",image:"owl.png"},{category:"animals-b",image:"raccoon.png"}];!function(e){e[e.Train=0]="Train",e[e.Play=1]="Play",e[e.Started=2]="Started"}(c||(c={}));var d=a(1),m=function(e){e.name;var t=e.currentAction,a=e.setCurrentAction,s=(e.audios,e.setAudios,e.shuffledAudios),r=Object(n.useState)(!1),m=Object(i.a)(r,2),j=m[0],g=m[1],b=Object(n.useState)("pink"),f=Object(i.a)(b,2),h=f[0],p=f[1],O=Object(n.useRef)(),y=Object(l.f)(),x=function(e){O.current&&!O.current.contains(e.target)&&g(!1)};Object(n.useEffect)((function(){return document.addEventListener("mousedown",x),function(){return document.removeEventListener("mousedown",x)}})),Object(n.useEffect)((function(){a(c.Train),g(!1)}),[y.pathname]);return Object(d.jsxs)("header",{children:[Object(d.jsxs)("span",{ref:O,children:[Object(d.jsx)("div",{className:"hamburger-menu",onClick:function(){g(!j)},children:[1,2,3].map((function(e){return Object(d.jsx)("div",{className:"line line-".concat(e," \n                    ").concat(j?"cross":""," ").concat("blue"===h?"light-blue":"")},"line-"+e)}))}),Object(d.jsx)("nav",{className:"".concat(!0===j?"navbar active":"navbar"," ").concat("blue"===h?"blue":""),children:Object(d.jsxs)("ul",{className:"nav-list",children:[Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/",exact:!0,className:"nav-link ".concat("/"===y.pathname?"active":""),children:"Main Page"})}),u.map((function(e,t){return Object(d.jsx)("li",{className:"nav-item",children:Object(d.jsx)(o.b,{to:"/category/"+e.category,className:"nav-link \n                                    ".concat(y.pathname.includes("/category/"+e.category)?"active":""),children:e.category})},t)}))]})})]}),Object(d.jsxs)("div",{className:"buttons",children:[Object(d.jsxs)("div",{className:"toggler",children:[Object(d.jsx)("input",{type:"checkbox",className:"checkbox",id:"checkbox",checked:t!==c.Train,onChange:function(){p("blue"===h?"pink":"blue"),a(t===c.Train?c.Play:c.Train)}}),Object(d.jsxs)("label",{htmlFor:"checkbox",className:"label",children:[Object(d.jsx)("div",{className:"play-mode",children:"Play"}),Object(d.jsx)("div",{className:"train-mode",children:"Train"}),Object(d.jsx)("div",{className:"ball"})]})]}),t!==c.Train?Object(d.jsx)("button",{className:"start-game",onClick:function(e){return t===c.Started&&new Audio(s[s.length-1]).play(),void a(c.Started)},children:t===c.Started?"repeat":"play"}):Object(d.jsx)("div",{})]})]})},j=function(){return Object(d.jsxs)("footer",{children:[Object(d.jsx)("a",{href:"https://github.com/Wellval",children:"Github"}),Object(d.jsxs)("div",{className:"rs-logo-year",children:["2021",Object(d.jsx)("a",{className:"logo-link",href:"https://rs.school/js/",children:Object(d.jsx)("img",{src:"../rs-school-logo.svg",alt:""})})]})]})},g=function(){return Object(d.jsx)("main",{children:Object(d.jsx)("div",{className:"main-wrapper",children:u.map((function(e,t){return Object(d.jsx)("div",{className:"main-card-container",children:Object(d.jsxs)(o.b,{to:"/category/"+e.category,className:"pink-card",children:[Object(d.jsx)("img",{src:e.image}),Object(d.jsx)("p",{children:e.category})]},t)})}))})})},b=a(15),f=a.n(b),h=a(19),p=a(20),O=a.n(p),y=function(e){e.setCurrentAction;var t=e.currentAction,a=e.category,s=(e.audios,e.setAudios,e.shuffledAudios),r=(e.setShuffledAudios,Object(n.useState)([])),o=Object(i.a)(r,2),l=o[0],u=o[1],m=[];console.log(321,m);var j=document.querySelector(".rating");Object(n.useEffect)((function(){if(a.images){var e=Array.from(a.images).map((function(e){return{name:e,flipped:!1}}));u(e)}}),[a]),Object(n.useEffect)((function(){if(t!==c.Started){j&&(j.innerHTML="");var e=document.getElementsByClassName("guessed");Array.from(e).forEach((function(e){e.classList.remove("guessed")}))}}),[t]);var g=function(e,a){t===c.Train&&(a.preventDefault(),u(l.map((function(t){return t.name===e&&(t.flipped=!t.flipped),t}))))};Object(n.useEffect)((function(){function e(){return(e=Object(h.a)(f.a.mark((function e(){return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,new Audio(s[s.length-1]).play();case 2:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[s]);return Object(d.jsxs)("main",{children:[Object(d.jsx)("h2",{children:a.category}),Object(d.jsx)("div",{className:"rating"}),Object(d.jsx)("div",{className:"main-wrapper",children:l.map((function(e,n){return Object(d.jsx)("div",{className:"card-container",id:"".concat(e.name),children:Object(d.jsxs)(O.a,{isFlipped:e.flipped,flipDirection:"vertical",children:[Object(d.jsxs)("div",{className:"pink-card",onClick:function(n){!function(e,t){t.preventDefault(),"fas fa-redo-alt"!==t.target.classList.value&&localStorage.getItem("action")===c.Train.toString()&&new Audio("/"+a.category+"/"+e+".mp3").play()}(e.name,n),function(e,a){var n=s[s.length-1];if(t===c.Started){if(n.includes(e)){document.getElementById(e).classList.add("guessed"),s.pop(),new Audio("/well-done.mp3").play();var r=document.createElement("i");r.className="fas fa-star",j.append(r),setTimeout((function(){new Audio(n).play()}),2e3),n=s[s.length-1]}else{new Audio("/error.mp3").play(),m.push("failure");var i=document.createElement("i");i.className="fas fa-heart-broken",j.append(i)}0===s.length&&(0===m.length?(document.querySelector("main").innerHTML="<div class='overlay'><h2 class='win'>Success!</h2></div>",new Audio("/success.wav").play()):(document.querySelector("main").innerHTML="<div class='overlay'>\n                    <h2 class='loose'>Work more!</h2>\n                    <p>Number of mistakes: ".concat(m.length,"</p>\n                    </div>"),new Audio("/failure.mp3").play()),setTimeout((function(){location.pathname="/"}),2e3))}}(e.name)},children:[Object(d.jsx)("img",{className:t.toString()!==c.Train.toString()?"play-mode":"",src:"/"+a.category+"/"+e.name+".png"}),t===c.Train?Object(d.jsxs)("p",{className:"word",children:[e.name,Object(d.jsx)("span",{children:Object(d.jsx)("i",{className:"fas fa-redo-alt",onClick:function(t){return g(e.name,t)}})})]}):""]}),Object(d.jsxs)("div",{className:"pink-card",onMouseLeave:function(t){return g(e.name,t)},children:[Object(d.jsx)("img",{className:t.toString()!==c.Train.toString()?"play-mode":"",src:"/"+a.category+"/"+e.name+".png"}),t.toString()===c.Train.toString()?Object(d.jsxs)("p",{className:"word",children:[a.rus[n],Object(d.jsx)("span",{children:Object(d.jsx)("i",{className:"fas fa-redo-alt"})})]}):""]})]},n)})}))})]})},x=[{category:"food",images:["cheese","cake","cherry","coconut","hamburger","meat","sandwich","watermelon"],rus:["\u0441\u044b\u0440","\u043f\u0438\u0440\u043e\u0433","\u0432\u0438\u0448\u043d\u044f","\u043a\u043e\u043a\u043e\u0441","\u0433\u0430\u043c\u0431\u0443\u0440\u0433\u0435\u0440","\u043c\u044f\u0441\u043e","\u0431\u0443\u0442\u0435\u0440\u0431\u0440\u043e\u0434","\u0430\u0440\u0431\u0443\u0437"]},{category:"clothes",images:["blouse","bag","dress","hat","skirt","sweater","t-shirt","trousers"],rus:["\u0431\u043b\u0443\u0437\u0430","\u0441\u0443\u043c\u043a\u0430","\u043f\u043b\u0430\u0442\u044c\u0435","\u0448\u043b\u044f\u043f\u0430","\u044e\u0431\u043a\u0430","\u0441\u0432\u0438\u0442\u0435\u0440","\u0444\u0443\u0442\u0431\u043e\u043b\u043a\u0430","\u0448\u0442\u0430\u043d\u044b"]},{category:"emotions",images:["angry","bored","happy","insidious","sad","scared","shy","surprised"],rus:["\u0437\u043b\u043e\u0439","\u0441\u043a\u0443\u0447\u0430\u044e\u0449\u0438\u0439","\u0441\u0447\u0430\u0441\u0442\u043b\u0438\u0432\u044b\u0439","\u043a\u043e\u0432\u0430\u0440\u043d\u044b\u0439","\u0433\u0440\u0443\u0441\u0442\u043d\u044b\u0439","\u0438\u0441\u043f\u0443\u0433\u0430\u043d\u043d\u044b\u0439","\u0441\u0442\u0435\u0441\u043d\u0438\u0442\u0435\u043b\u044c\u043d\u044b\u0439","\u0443\u0434\u0438\u0432\u043b\u0435\u043d\u043d\u044b\u0439"]},{category:"animals-a",images:["eagle","giraffe","lamb","octopus","owl","shark","snake","squirrel"],rus:["\u043e\u0440\u0435\u043b","\u0436\u0438\u0440\u0430\u0444","\u044f\u0433\u043d\u0435\u043d\u043e\u043a","\u043e\u0441\u043c\u0438\u043d\u043e\u0433","\u0441\u043e\u0432\u0430","\u0430\u043a\u0443\u043b\u0430","\u0437\u043c\u0435\u044f","\u0431\u0435\u043b\u043a\u0430"]},{category:"animals-b",images:["cat","crab","dog","fish","fox","panda","raccoon","zebra"],rus:["\u043a\u043e\u0442","\u043a\u0440\u0430\u0431","\u0441\u043e\u0431\u0430\u043a\u0430","\u0440\u044b\u0431\u0430","\u043b\u0438\u0441\u0430","\u043f\u0430\u043d\u0434\u0430","\u0435\u043d\u043e\u0442","\u0437\u0435\u0431\u0440\u0430"]},{category:"actions-a",images:["dance","fly","read","ring","run","sing","ski","swim"],rus:["\u0442\u0430\u043d\u0446\u0435\u0432\u0430\u0442\u044c","\u043b\u0435\u0442\u0430\u0442\u044c","\u0447\u0438\u0442\u0430\u0442\u044c","\u0437\u0432\u043e\u043d\u0438\u0442\u044c","\u0431\u0435\u0436\u0430\u0442\u044c","\u043f\u0435\u0442\u044c","\u043a\u0430\u0442\u0430\u0442\u044c\u0441\u044f \u043d\u0430 \u043b\u044b\u0436\u0430\u0445","\u043f\u043b\u0430\u0432\u0430\u0442\u044c"]},{category:"actions-b",images:["catch","cry","hang","jump","present","sleep","walk","teach"],rus:["\u043b\u043e\u0432\u0438\u0442\u044c","\u043f\u043b\u0430\u043a\u0430\u0442\u044c","\u0432\u0438\u0441\u0435\u0442\u044c","\u043f\u0440\u044b\u0433\u0430\u0442\u044c","\u0434\u0430\u0440\u0438\u0442\u044c","\u0441\u043f\u0430\u0442\u044c","\u0445\u043e\u0434\u0438\u0442\u044c","\u043e\u0431\u0443\u0447\u0430\u0442\u044c"]},{category:"actions-c",images:["carry","cook","drink","eat","giggle","hug","ride","scratch"],rus:["\u043d\u0435\u0441\u0442\u0438","\u0433\u043e\u0442\u043e\u0432\u0438\u0442\u044c","\u043f\u0438\u0442\u044c","\u0435\u0441\u0442\u044c","\u0445\u0438\u0445\u0438\u043a\u0430\u0442\u044c","\u043e\u0431\u043d\u0438\u043c\u0430\u0442\u044c","\u0435\u0445\u0430\u0442\u044c","\u0446\u0430\u0440\u0430\u043f\u0430\u0442\u044c"]}],v=function(){var e=Object(n.useState)(c.Train),t=Object(i.a)(e,2),a=t[0],s=t[1],r=Object(n.useState)([]),u=Object(i.a)(r,2),b=u[0],f=u[1],h=Object(n.useState)([]),p=Object(i.a)(h,2),O=p[0],v=p[1],N=x.filter((function(e){return e.category===location.pathname.slice(10)}))[0];return Object(n.useEffect)((function(){var e;N&&f(N.images.map((function(e){return"/".concat(N.category,"/").concat(e,".mp3")}))),null===(e=document.querySelector("#checkbox"))||void 0===e||e.setAttribute("checked","false"),console.log(N)}),[location.pathname]),Object(n.useEffect)((function(){a===c.Started&&v(b.slice().sort((function(){return Math.random()-.5})))}),[a]),Object(n.useEffect)((function(){localStorage.setItem("action",a)}),[a]),Object(d.jsxs)("div",{className:"view",children:[Object(d.jsxs)(o.a,{children:[Object(d.jsx)(m,{currentAction:a,setCurrentAction:s,name:location.pathname.slice(10),audios:b,setAudios:f,shuffledAudios:O}),Object(d.jsxs)(l.c,{children:[Object(d.jsx)(l.a,{path:"/category/:name",render:function(e){return Object(d.jsx)(y,{name:e.match.params.name,setCurrentAction:s,currentAction:a,category:x.filter((function(t){return t.category===e.match.params.name}))[0],audios:b,setAudios:f,shuffledAudios:O,setShuffledAudios:v})}}),Object(d.jsx)(l.a,{exact:!0,path:"/",render:g})]})]}),Object(d.jsx)(j,{})]})};r.a.render(Object(d.jsx)(v,{}),document.getElementById("root"))}},[[33,1,2]]]);
//# sourceMappingURL=main.037a9ea9.chunk.js.map