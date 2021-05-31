(()=>{"use strict";var e={5884:(e,t,n)=>{n.r(t)},7101:(e,t,n)=>{n.r(t)},1356:(e,t,n)=>{n.r(t)},76:(e,t,n)=>{n.r(t)},5080:(e,t,n)=>{n.r(t)},1578:(e,t,n)=>{n.r(t)},3913:(e,t,n)=>{n.r(t)},4336:(e,t,n)=>{n.r(t)},8434:(e,t,n)=>{n.r(t)},5528:(e,t,n)=>{n.r(t)},4270:(e,t,n)=>{n.r(t)},6639:(e,t,n)=>{n.r(t)},812:(e,t,n)=>{n.r(t)},268:(e,t,n)=>{n.r(t)},8916:(e,t,n)=>{n.r(t)},512:(e,t,n)=>{n.r(t)},1494:(e,t,n)=>{n.r(t)},1641:(e,t,n)=>{n.r(t)},1872:(e,t,n)=>{n.r(t)},2580:(e,t,n)=>{n.r(t)},8719:(e,t,n)=>{n.r(t)},8387:(e,t,n)=>{n.r(t)},2425:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AboutPage=void 0;const i=n(4977),s=n(8844),o=n(6853),r=n(6757),a=n(9481);t.AboutPage=class{constructor(e){this.rootElement=e,this.header=new i.Header,this.aboutField=new s.AboutField,this.headerButton=new o.HeaderButton("Register"),this.windowOverlay=new a.WindowOverlay,this.registerWindow=new r.RegisterWindow,this.rootElement.appendChild(this.header.element),this.header.element.appendChild(this.headerButton.element),this.headerButton.element.addEventListener("click",(()=>{this.rootElement.appendChild(this.windowOverlay.element),this.aboutField.element.appendChild(this.registerWindow.element)})),this.rootElement.appendChild(this.aboutField.element)}}},6752:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.App=void 0;const s=n(8229),o=n(2610),r=n(7899),a=n(4977),l=n(6853);t.App=class{constructor(e){this.rootElement=e,this.timer=new o.Timer,this.moveCounter=new r.MoveCounter,this.game=new s.Game(this.moveCounter,this.timer),this.header=new a.Header,this.headerButton=new l.HeaderButton("Start Game"),this.headerButton.element.innerText="Start game",this.rootElement.appendChild(this.header.element),this.header.element.appendChild(this.headerButton.element),this.rootElement.appendChild(this.timer.element),this.rootElement.appendChild(this.moveCounter.element),this.rootElement.appendChild(this.game.element)}start(){return i(this,void 0,void 0,(function*(){const e=yield fetch("./images.json"),t=(yield e.json())[0],n=t.images.map((e=>`../${t.category}/${e}`));this.headerButton.element.addEventListener("click",(()=>{this.game.isStarted?(this.headerButton.element.innerText="Start Game",clearTimeout(this.timer.intervalId),this.game.isStarted=!1):(this.game.newGame(n),this.timer.time=0,this.timer.element.innerText="00:00:00",this.timer.setTimer(),this.game.isStarted=!0,this.headerButton.element.innerText="Stop Game")}))}))}}},877:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AboutContainer=void 0,n(5884);const i=n(8583),s=n(1198);class o extends i.BaseComponent{constructor(){super("div",["about-container"]),this.gameStepOne=new s.GameStep,this.gameStepTwo=new s.GameStep,this.gameStepThree=new s.GameStep,this.createSteps()}createSteps(){this.gameStepOne.element.innerHTML='<i class="fas fa-check"></i> Register',this.gameStepTwo.element.innerHTML='<i class="fas fa-check"></i> Configure Game Settings',this.gameStepThree.element.innerHTML='<i class="fas fa-check"></i> Start you new game!',this.element.appendChild(this.gameStepOne.element),this.element.appendChild(this.gameStepTwo.element),this.element.appendChild(this.gameStepThree.element)}}t.AboutContainer=o},8844:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.AboutField=void 0,n(7101);const i=n(8583),s=n(877);class o extends i.BaseComponent{constructor(){super("div",["about-field"]),this.element.innerHTML="<h2>How to play?</h2>",this.aboutContainer=new s.AboutContainer,this.element.appendChild(this.aboutContainer.element)}}t.AboutField=o},8583:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.BaseComponent=void 0,t.BaseComponent=class{constructor(e="div",t=[]){this.element=document.createElement(e),this.element.classList.add(...t)}}},9116:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CancelRegisterBtn=void 0;const i=n(8583);n(1872);class s extends i.BaseComponent{constructor(){super("button",["cancel-register-btn"]),this.element.innerText="Cancel"}}t.CancelRegisterBtn=s},5789:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CardOverlay=void 0,n(1356);const i=n(8583);class s extends i.BaseComponent{constructor(){super("div",["card-overlay"])}}t.CardOverlay=s},9343:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Card=void 0,n(76);const s=n(8583),o=n(5789),r=n(4680);class a extends s.BaseComponent{constructor(e){super("div",["card-container"]),this.image=e,this.isFlipped=!1,this.cardOverlay=new o.CardOverlay,this.element.innerHTML=`\n        <div class="card">\n            <div class="card__front" style="background-image: url('./animals/${e}')"></div>\n            <div class="card__back"></div>\n        </div>\n        `}flipToBack(){return this.isFlipped=!0,this.flip(!0)}flipToFront(){return this.isFlipped=!1,this.flip(!1)}rightChoiceState(){return i(this,void 0,void 0,(function*(){this.cardOverlay.element.style.backgroundColor="green",this.element.appendChild(this.cardOverlay.element)}))}wrongChoiceState(){return i(this,void 0,void 0,(function*(){this.cardOverlay.element.style.backgroundColor="red",this.element.appendChild(this.cardOverlay.element),yield r.delay(1e3),this.element.removeChild(this.cardOverlay.element)}))}flip(e=!1){return new Promise((t=>{this.element.classList.toggle("flipped",e),this.element.addEventListener("transitionend",(()=>t()),{once:!0})}))}}t.Card=a},7610:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.CardsField=void 0,n(5080);const s=n(8583),o=n(1126),r=n(5628),a=n(6794);class l extends s.BaseComponent{constructor(e,t){super("div",["cards-field"]),this.cards=[],this.congratulation=new o.Congratulation,this.timer=t,this.moveCounter=e,this.clear()}clear(){this.cards=[],this.element.innerHTML=""}addCards(e){return i(this,void 0,void 0,(function*(){this.cards=e,this.cards.forEach((e=>this.element.appendChild(e.element))),setTimeout((()=>{this.cards.forEach((e=>{e.element.addEventListener("click",(e=>{e.target.classList.contains("card__back")&&this.moveCounter.countMoves()})),e.flipToBack()}))}),1e3*r.SHOW_TIME)}))}congratulate(){return i(this,void 0,void 0,(function*(){this.cards.every((e=>!e.isFlipped))&&(clearTimeout(this.timer.intervalId),this.element.appendChild(this.congratulation.element),this.getScore())}))}getScore(){const e=[new a.Results(`Your time: ${this.timer.element.innerText}`).element,new a.Results(`Your moves: ${this.moveCounter.element.innerText}`).element,new a.Results("Your score: "+(this.cards.length/2*100-10*this.timer.time)).element];for(let t of e)this.congratulation.element.appendChild(t)}}t.CardsField=l},1126:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Congratulation=void 0,n(1578);const i=n(8583);class s extends i.BaseComponent{constructor(){super("div",["congratulation"]),this.element.innerHTML="<h2>You win!</h2>"}}t.Congratulation=s},1198:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.GameStep=void 0;const i=n(8583);n(3913);class s extends i.BaseComponent{constructor(){super("div",["game-step"])}}t.GameStep=s},8229:function(e,t,n){var i=this&&this.__awaiter||function(e,t,n,i){return new(n||(n=Promise))((function(s,o){function r(e){try{l(i.next(e))}catch(e){o(e)}}function a(e){try{l(i.throw(e))}catch(e){o(e)}}function l(e){var t;e.done?s(e.value):(t=e.value,t instanceof n?t:new n((function(e){e(t)}))).then(r,a)}l((i=i.apply(e,t||[])).next())}))};Object.defineProperty(t,"__esModule",{value:!0}),t.Game=void 0,n(4336);const s=n(8583),o=n(9343),r=n(7610),a=n(4977);class l extends s.BaseComponent{constructor(e,t){super("div",["game"]),this.isAnimation=!1,this.isStarted=!1,this.header=new a.Header,this.cardsField=new r.CardsField(e,t),this.element.appendChild(this.cardsField.element)}newGame(e){this.cardsField.clear();const t=e.concat(e).map((e=>new o.Card(e))).sort((()=>Math.random()-.5));t.forEach((e=>{e.element.addEventListener("click",(()=>this.cardHandler(e)))})),this.cardsField.addCards(t),this.isStarted=!0}cardHandler(e){return i(this,void 0,void 0,(function*(){if(!this.isAnimation&&e.isFlipped){if(this.isAnimation=!0,yield e.flipToFront(),!this.activeCard)return this.activeCard=e,void(this.isAnimation=!1);this.activeCard.image!==e.image?(yield Promise.all([this.activeCard.wrongChoiceState(),e.wrongChoiceState()]),yield Promise.all([this.activeCard.flipToBack(),e.flipToBack()])):(this.activeCard.rightChoiceState(),e.rightChoiceState()),this.activeCard=void 0,this.isAnimation=!1,yield this.cardsField.congratulate()}}))}}t.Game=l},6853:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.HeaderButton=void 0;const i=n(8583);n(8434);class s extends i.BaseComponent{constructor(e){super("button",["header-button"]),this.innerText=e,this.element.innerText=e}}t.HeaderButton=s},4977:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Header=void 0;const i=n(8583);n(5528);const s=n(6263);class o extends i.BaseComponent{constructor(){super("header",["header"]),this.nav=new s.Navigation,this.addLogo()}addLogo(){const e=document.createElement("img");e.src="card-game.svg",e.classList.add("logo"),this.element.appendChild(e),this.element.appendChild(this.nav.element)}}t.Header=o},7543:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MenuItem=void 0;const i=n(8583);n(4270);class s extends i.BaseComponent{constructor(e){super("li",["menu-item"]),this.child=e,this.child=e,this.element.appendChild(this.child)}}t.MenuItem=s},3882:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MenuLink=void 0;const i=n(8583);n(6639);class s extends i.BaseComponent{constructor(e){super("a",["menu-link"]),this.innerHTML=e,this.element.href="#",this.element.innerHTML=this.innerHTML}}t.MenuLink=s},7899:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.MoveCounter=void 0,n(812);const i=n(8583);class s extends i.BaseComponent{constructor(){super("div",["move-counter"]),this.cardsClicked=0,this.movesMade=0,this.element.innerText=`${this.movesMade}`}countMoves(){this.cardsClicked++,this.cardsClicked%2==0&&this.movesMade++,this.element.innerText=`${this.movesMade}`}}t.MoveCounter=s},6263:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Navigation=void 0;const i=n(8583),s=n(7543),o=n(3882);n(268);const r=n(6080);class a extends i.BaseComponent{constructor(){super("ul",["nav"]),this.router=new r.Router,this.aboutGameLink=new o.MenuLink('<i class="fas fa-question-circle"></i> About Game'),this.bestScoreLink=new o.MenuLink('<i class="fas fa-star"></i> Best Score'),this.gameSettingsLink=new o.MenuLink('<i class="fas fa-cogs"></i> Game Settings'),[new s.MenuItem(this.aboutGameLink.element),new s.MenuItem(this.bestScoreLink.element),new s.MenuItem(this.gameSettingsLink.element)].forEach((e=>{this.element.appendChild(e.element)})),this.appendLinks()}appendLinks(){this.aboutGameLink.element instanceof HTMLAnchorElement&&this.aboutGameLink.element.addEventListener("click",(()=>{this.router.navigateTo("/about")})),this.bestScoreLink.element instanceof HTMLAnchorElement&&this.bestScoreLink.element.addEventListener("click",(()=>{this.router.navigateTo("/score")})),this.gameSettingsLink.element instanceof HTMLAnchorElement&&(this.gameSettingsLink.element.href="/settings")}}t.Navigation=a},9817:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegisterForm=void 0,n(8916);const i=n(8583),s=n(2451),o=n(3819),r=n(9116),a=n(6080),l=e=>!!(new RegExp("^[a-zA-Zа-яА-Я]+$").test(e)&&e.length<=30),d=e=>!!(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e)&&e.length<=30);class c extends i.BaseComponent{constructor(){super("form",["register-form"]),this.router=new a.Router;const e=[];this.submitButton=new o.SubmitButton,this.cancelRegisterBtn=new r.CancelRegisterBtn;const t=()=>{e.forEach((e=>{if(e.lastValid)""!==e.element.value?e.element.style.backgroundColor="rgba(185, 205, 137, 50%)":e.element.style.backgroundColor="white";else{if(""!==e.element.value)return void(e.element.style.backgroundColor="rgba(236, 162, 154, 50%)");e.element.style.backgroundColor="white"}})),e.every((e=>e.lastValid))?this.submitButton.element.removeAttribute("disabled"):this.submitButton.element.setAttribute("disabled","disabled")};e.push(new s.RegisterInput("name","text",l,t),new s.RegisterInput("last name","text",l,t),new s.RegisterInput("email","email",d,t));for(let t of e)this.element.appendChild(t.element);this.element.appendChild(this.submitButton.element),this.element.appendChild(this.cancelRegisterBtn.element),this.submitButton.element.addEventListener("click",(()=>{this.router.navigateTo("/about")})),this.cancelRegisterBtn.element.addEventListener("click",(()=>{e.forEach((e=>{e.element.value="",e.element.style.backgroundColor="white"}))}))}}t.RegisterForm=c},2451:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegisterInput=void 0;const i=n(8583);n(512);class s extends i.BaseComponent{constructor(e,t,n,i){super("input",["register-input"]),this.placeholder=e,this.type=t,this.validate=n,this.lastValid=!1,this.element.setAttribute("required",""),this.placeholder=e,this.validate=n,this.element.addEventListener("input",(e=>{this.lastValid=this.validate(e.target.value),i()})),this.element.setAttribute("placeholder",this.placeholder),this.element.setAttribute("type",this.type)}}t.RegisterInput=s},6757:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.RegisterWindow=void 0;const i=n(8583),s=n(9817);n(1494);class o extends i.BaseComponent{constructor(){super("div",["register-window"]),this.registerForm=new s.RegisterForm,this.element.innerHTML="<h2>Register new player</h2>",this.element.appendChild(this.registerForm.element)}}t.RegisterWindow=o},6794:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Results=void 0;const i=n(8583);class s extends i.BaseComponent{constructor(e){super("p"),this.innerText=e,this.element.innerText=e}}t.Results=s},1096:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScoreField=void 0;const i=n(8583);n(1641);class s extends i.BaseComponent{constructor(){super("div",["score-field"])}}t.ScoreField=s},3819:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SubmitButton=void 0;const i=n(8583);n(1872);class s extends i.BaseComponent{constructor(){super("button",["submit-button"]),this.element.innerText="Add User",this.element.setAttribute("disabled","disabled")}}t.SubmitButton=s},2610:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Timer=void 0;const i=n(8583);n(2580);const s=n(5628);class o extends i.BaseComponent{constructor(e=0){super("div",["timer"]),this.time=e,this.intervalId=void 0,this.element.innerHTML="00:00:00"}setTimer(){setTimeout((()=>{this.intervalId=setInterval((()=>{this.countTime()}),1e3)}),1e3*s.SHOW_TIME)}countTime(){this.time++;const e=this.time%60,t=Math.floor(this.time/60),n=Math.floor(this.time/3600);this.element.innerText=`${n<10?`0${n}`:n}:${t<10?`0${t}`:t}:${e<10?`0${e}`:e}`}}t.Timer=o},9481:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WindowOverlay=void 0,n(8719);const i=n(8583);class s extends i.BaseComponent{constructor(){super("div",["window-overlay"])}}t.WindowOverlay=s},6080:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.Router=void 0;const i=n(2425),s=n(6752),o=n(1461);class r{constructor(){return this.navigateTo=e=>{window.history.pushState({},e,window.location.origin+e)},this.resolveLocation=()=>{const e=document.getElementById("app");switch(e.innerHTML="",window.location.pathname){case"/":new s.App(e).start();break;case"/about":new i.AboutPage(e);break;case"/score":new o.ScorePage(e)}},r.instance||(r.instance=this),r.instance}}t.Router=r,r.instance=null},1461:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ScorePage=void 0;const i=n(4977),s=n(1096);t.ScorePage=class{constructor(e){this.rootElement=e,this.header=new i.Header,this.scoreField=new s.ScoreField,this.rootElement.appendChild(this.header.element),this.rootElement.appendChild(this.scoreField.element)}}},5628:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.SHOW_TIME=void 0,t.SHOW_TIME=3},4680:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.delay=void 0,t.delay=function(e){return new Promise((t=>{setTimeout(t,e)}))}}},t={};function n(i){var s=t[i];if(void 0!==s)return s.exports;var o=t[i]={exports:{}};return e[i].call(o.exports,o,o.exports,n),o.exports}n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},(()=>{n(8387);const e=new(n(6080).Router);window.onload=()=>e.resolveLocation(),window.onpopstate=()=>e.resolveLocation()})()})();