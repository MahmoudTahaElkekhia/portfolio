(function(){"use strict";var e={7868:function(e,t,n){var o=n(5130),a=n(6768);function i(e,t){const n=(0,a.g2)("router-view");return(0,a.uX)(),(0,a.Wv)(n)}var r=n(1241);const c={},s=(0,r.A)(c,[["render",i]]);var l=s,d=n(4458);(0,d.k)("/portfolio/service-worker.js",{ready(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered(){console.log("Service worker has been registered.")},cached(){console.log("Content has been cached for offline use.")},updatefound(){console.log("New content is downloading.")},updated(){console.log("New content is available; please refresh.")},offline(){console.log("No internet connection found. App is running in offline mode.")},error(e){console.error("Error during service worker registration:",e)}});var u=n(1387),v=n(4232);const p={id:"app"},f={class:"container"};function h(e,t,n,o,i,r){const c=(0,a.g2)("NavBar"),s=(0,a.g2)("AboutMe"),l=(0,a.g2)("SkillsSection"),d=(0,a.g2)("EducationSection"),u=(0,a.g2)("ExperienceSection"),h=(0,a.g2)("ContactFooter");return(0,a.uX)(),(0,a.CE)("div",p,[(0,a.Lk)("div",f,[(0,a.bF)(c),(0,a.bF)(s),(0,a.bF)(l),(0,a.bF)(d),(0,a.bF)(u),(0,a.bF)(h)]),(0,a.Lk)("div",{id:"cursor-light",class:(0,v.C4)({active:i.cursorActive})},null,2)])}const m=e=>((0,a.Qi)("data-v-4038c5be"),e=e(),(0,a.jt)(),e),g=m((()=>(0,a.Lk)("div",{id:"logo"},"Mahmoud Taha",-1)));function k(e,t,n,o,i,r){return(0,a.uX)(),(0,a.CE)("nav",{class:(0,v.C4)({active:1==i.navActive}),style:(0,v.Tr)({top:i.navbarTop})},[g,(0,a.Lk)("ul",null,[(0,a.Lk)("li",null,[(0,a.Lk)("a",{class:(0,v.C4)({active:"about-me"===i.activeSection}),href:"#about-me"},"About",2)]),(0,a.Lk)("li",null,[(0,a.Lk)("a",{class:(0,v.C4)({active:"skills-section"===i.activeSection}),href:"#skills-section"},"Skills",2)]),(0,a.Lk)("li",null,[(0,a.Lk)("a",{class:(0,v.C4)({active:"education-section"===i.activeSection}),href:"#education-section"},"Education",2)]),(0,a.Lk)("li",null,[(0,a.Lk)("a",{class:(0,v.C4)({active:"experience-section"===i.activeSection}),href:"#experience-section"},"Experience",2)]),(0,a.Lk)("li",null,[(0,a.Lk)("a",{class:(0,v.C4)({active:"contact-footer"===i.activeSection}),href:"#contact-footer"},"Contact",2)])])],6)}var b={name:"NavBar",data(){return{navActive:0,activeSection:"",lastScrollTop:0,navbarTop:"0"}},methods:{onScroll(){const e=window.pageYOffset||document.documentElement.scrollTop;e>this.lastScrollTop?this.navbarTop="-80px":this.navbarTop="15px",this.lastScrollTop=e,this.navActive=e>25?1:0;const t=document.querySelectorAll("section");let n="";t.forEach((e=>{const t=e.offsetTop;(window.pageYOffset>=t-70||document.documentElement.scrollTop>=t-70)&&(n=e.getAttribute("id"))})),this.activeSection=n}},mounted(){window.addEventListener("scroll",this.onScroll)}};const S=(0,r.A)(b,[["render",k],["__scopeId","data-v-4038c5be"]]);var C=S,E=n.p+"img/h.dd77ade5.jpg";const y=e=>((0,a.Qi)("data-v-35e30ca9"),e=e(),(0,a.jt)(),e),L={id:"about-me"},w=y((()=>(0,a.Lk)("p",null," I am a junior Full-Stack Developer with a solid background in computer engineering, recently graduated from the Higher Institute of Engineering and Technology in Kafr El Sheikh. I am seeking an internship opportunity as a Front-End Developer. I specialize in creating responsive web interfaces using modern front-end technologies including HTML, CSS, SASS, Bootstrap, JavaScript, Vue.js, and jQuery. I also have experience with back-end technologies such as PHP and MySQL, enabling me to handle full-stack development tasks when needed. ",-1))),A=y((()=>(0,a.Lk)("img",{src:E,alt:""},null,-1))),x=[w,A];function M(e,t,n,o,i,r){return(0,a.uX)(),(0,a.CE)("section",L,x)}var F={name:"AboutMe",data(){return{}},methods:{},mounted(){}};const T=(0,r.A)(F,[["render",M],["__scopeId","data-v-35e30ca9"]]);var j=T;const _={id:"skills-section"},O={id:"cells"};function I(e,t,n,o,i,r){return(0,a.uX)(),(0,a.CE)("section",_,[(0,a.Lk)("div",O,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.cells,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{class:"cell",key:t},(0,v.v_)(e),1)))),128))])])}var X={name:"SkillsSection",data(){return{cells:["HTML","CSS","SASS","Bootstrap","JavaScript","jQuery","Vue JS","PHP","MySQL","Git","GitHub","CCNA","MS Office","Photoshop","Corel Draw","Classic Control","PLC"]}}};const H=(0,r.A)(X,[["render",I],["__scopeId","data-v-3a7c298f"]]);var D=H;const N=e=>((0,a.Qi)("data-v-e8132812"),e=e(),(0,a.jt)(),e),P={id:"education-section"},B=N((()=>(0,a.Lk)("h2",null,"B.Eng. in Electrical Engineering - Computers and Control Department",-1))),J=N((()=>(0,a.Lk)("h3",null,"Higher Institute of Engineering and Technology in Kafr El Sheikh",-1))),Q=N((()=>(0,a.Lk)("h4",null,"Very Good with Honors",-1))),G=N((()=>(0,a.Lk)("h5",null,"Sep 2018 – Jul 2022",-1))),K=N((()=>(0,a.Lk)("div",{class:"background-image"},null,-1))),V=[B,J,Q,G,K];function W(e,t,n,o,i,r){return(0,a.uX)(),(0,a.CE)("section",P,V)}var Y={name:"EducationSection",data(){return{}},methods:{},mounted(){}};const $=(0,r.A)(Y,[["render",W],["__scopeId","data-v-e8132812"]]);var q=$;const U={id:"contact-footer"},z=(0,a.Fv)('<ul data-v-7169ad72><li data-v-7169ad72><a href="mailto:mahmoudtaha222233334@gmail.com" data-v-7169ad72><i class="fas fa-envelope" data-v-7169ad72></i></a></li><li data-v-7169ad72><a target="_blank" href="https://www.facebook.com/mahmoud.elkekhia/" data-v-7169ad72><i class="fab fa-facebook" data-v-7169ad72></i></a></li><li data-v-7169ad72><a target="_blank" href="https://www.linkedin.com/in/mahmoud-elkikhiya" data-v-7169ad72><i class="fab fa-linkedin" data-v-7169ad72></i></a></li></ul>',1),R=[z];function Z(e,t,n,o,i,r){return(0,a.uX)(),(0,a.CE)("footer",U,R)}var ee={name:"ContactFooter"};const te=(0,r.A)(ee,[["render",Z],["__scopeId","data-v-7169ad72"]]);var ne=te,oe=n.p+"media/videoplayback.db8ab2f6.mp4";const ae=e=>((0,a.Qi)("data-v-1990ea80"),e=e(),(0,a.jt)(),e),ie={id:"experience-section"},re=ae((()=>(0,a.Lk)("video",{autoplay:"",muted:"",loop:"",id:"background-video"},[(0,a.Lk)("source",{src:oe,type:"video/mp4"})],-1))),ce={class:"background-image"},se={class:"exp-date"},le=["innerHTML"];function de(e,t,n,o,i,r){return(0,a.uX)(),(0,a.CE)("section",ie,[re,(0,a.Lk)("div",ce,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(i.exps,((e,t)=>((0,a.uX)(),(0,a.CE)("div",{class:"exp",key:t},[(0,a.Lk)("div",se,(0,v.v_)(e.date),1),(0,a.Lk)("div",{class:"exp-des",innerHTML:e.des},null,8,le)])))),128))])])}var ue={name:"ExperienceSection",data(){return{exps:[{date:"Jul 2024 – present",des:"Freelance Web Developer, Electrical Device Control Specialist, and 2D CNC Laser Designer."},{date:"Oct 2023 - Jul 2024",des:"Working in Officer Affairs in the National Service Projects Agency of the Egyptian Armed Forces as a national service."},{date:"May 2022 - Sep 2023",des:"Student at the Reserve Officers College."},{date:"Jul 2022 - April 2023",des:"CNC laser designer."},{date:"Jul 2022",des:"Graduation project: <br/> Smart university: Access control system - Smart curtains - Smart lighting - Smart parking - Solar energy - Fire alarm system - Smart basket by web application."}]}},methods:{},mounted(){}};const ve=(0,r.A)(ue,[["render",de],["__scopeId","data-v-1990ea80"]]);var pe=ve,fe={name:"HomeView",components:{NavBar:C,AboutMe:j,SkillsSection:D,EducationSection:q,ExperienceSection:pe,ContactFooter:ne},data(){return{cursorActive:!1}},methods:{handleMouseMove(e){const t=document.getElementById("cursor-light");t.style.left=`${e.clientX}px`,t.style.top=`${e.clientY}px`},handleMouseDown(){this.cursorActive=!0},handleMouseUp(){this.cursorActive=!1}},mounted(){document.addEventListener("mousemove",this.handleMouseMove),document.addEventListener("mousedown",this.handleMouseDown),document.addEventListener("mouseup",this.handleMouseUp)}};const he=(0,r.A)(fe,[["render",h]]);var me=he;const ge=[{path:"/",name:"home",component:me}],ke=(0,u.aE)({history:(0,u.LA)("/portfolio/"),routes:ge});var be=ke,Se=n(782),Ce=(0,Se.y$)({state:{},getters:{},mutations:{},actions:{},modules:{}});(0,o.Ef)(l).use(Ce).use(be).mount("#app")}},t={};function n(o){var a=t[o];if(void 0!==a)return a.exports;var i=t[o]={exports:{}};return e[o].call(i.exports,i,i.exports,n),i.exports}n.m=e,function(){var e=[];n.O=function(t,o,a,i){if(!o){var r=1/0;for(d=0;d<e.length;d++){o=e[d][0],a=e[d][1],i=e[d][2];for(var c=!0,s=0;s<o.length;s++)(!1&i||r>=i)&&Object.keys(n.O).every((function(e){return n.O[e](o[s])}))?o.splice(s--,1):(c=!1,i<r&&(r=i));if(c){e.splice(d--,1);var l=a();void 0!==l&&(t=l)}}return t}i=i||0;for(var d=e.length;d>0&&e[d-1][2]>i;d--)e[d]=e[d-1];e[d]=[o,a,i]}}(),function(){n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,{a:t}),t}}(),function(){n.d=function(e,t){for(var o in t)n.o(t,o)&&!n.o(e,o)&&Object.defineProperty(e,o,{enumerable:!0,get:t[o]})}}(),function(){n.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}(),function(){n.p="/portfolio/"}(),function(){var e={524:0};n.O.j=function(t){return 0===e[t]};var t=function(t,o){var a,i,r=o[0],c=o[1],s=o[2],l=0;if(r.some((function(t){return 0!==e[t]}))){for(a in c)n.o(c,a)&&(n.m[a]=c[a]);if(s)var d=s(n)}for(t&&t(o);l<r.length;l++)i=r[l],n.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return n.O(d)},o=self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[];o.forEach(t.bind(null,0)),o.push=t.bind(null,o.push.bind(o))}();var o=n.O(void 0,[504],(function(){return n(7868)}));o=n.O(o)})();
//# sourceMappingURL=app.1cf634f8.js.map