!function(e){var t={};function n(r){if(t[r])return t[r].exports;var i=t[r]={i:r,l:!1,exports:{}};return e[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)n.d(r,i,function(t){return e[t]}.bind(null,i));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=6)}([function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var i=(d=r,o=btoa(unescape(encodeURIComponent(JSON.stringify(d)))),c="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(o),"/*# ".concat(c," */")),a=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(a).concat([i]).join("\n")}var d,o,c;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var i={};if(r)for(var a=0;a<this.length;a++){var d=this[a][0];null!=d&&(i[d]=!0)}for(var o=0;o<e.length;o++){var c=[].concat(e[o]);r&&i[c[0]]||(n&&(c[2]?c[2]="".concat(n," and ").concat(c[2]):c[2]=n),t.push(c))}},t}},function(e,t,n){"use strict";e.exports=function(e,t){return t||(t={}),"string"!=typeof(e=e&&e.__esModule?e.default:e)?e:(/^['"].*['"]$/.test(e)&&(e=e.slice(1,-1)),t.hash&&(e+=t.hash),/["'() \t\n]/.test(e)||t.needQuotes?'"'.concat(e.replace(/"/g,'\\"').replace(/\n/g,"\\n"),'"'):e)}},function(e,t,n){"use strict";t.a=n.p+"138fd337725fa6fdcb7510d0fc7b54dc.jpg"},function(e,t,n){var r=n(4),i=n(5);"string"==typeof(i=i.__esModule?i.default:i)&&(i=[[e.i,i,""]]);var a={insert:"head",singleton:!1};r(i,a);e.exports=i.locals||{}},function(e,t,n){"use strict";var r,i=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},a=function(){var e={};return function(t){if(void 0===e[t]){var n=document.querySelector(t);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(e){n=null}e[t]=n}return e[t]}}(),d=[];function o(e){for(var t=-1,n=0;n<d.length;n++)if(d[n].identifier===e){t=n;break}return t}function c(e,t){for(var n={},r=[],i=0;i<e.length;i++){var a=e[i],c=t.base?a[0]+t.base:a[0],s=n[c]||0,l="".concat(c," ").concat(s);n[c]=s+1;var m=o(l),u={css:a[1],media:a[2],sourceMap:a[3]};-1!==m?(d[m].references++,d[m].updater(u)):d.push({identifier:l,updater:b(u,t),references:1}),r.push(l)}return r}function s(e){var t=document.createElement("style"),r=e.attributes||{};if(void 0===r.nonce){var i=n.nc;i&&(r.nonce=i)}if(Object.keys(r).forEach((function(e){t.setAttribute(e,r[e])})),"function"==typeof e.insert)e.insert(t);else{var d=a(e.insert||"head");if(!d)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");d.appendChild(t)}return t}var l,m=(l=[],function(e,t){return l[e]=t,l.filter(Boolean).join("\n")});function u(e,t,n,r){var i=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(e.styleSheet)e.styleSheet.cssText=m(t,i);else{var a=document.createTextNode(i),d=e.childNodes;d[t]&&e.removeChild(d[t]),d.length?e.insertBefore(a,d[t]):e.appendChild(a)}}function p(e,t,n){var r=n.css,i=n.media,a=n.sourceMap;if(i?e.setAttribute("media",i):e.removeAttribute("media"),a&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(a))))," */")),e.styleSheet)e.styleSheet.cssText=r;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(r))}}var h=null,g=0;function b(e,t){var n,r,i;if(t.singleton){var a=g++;n=h||(h=s(t)),r=u.bind(null,n,a,!1),i=u.bind(null,n,a,!0)}else n=s(t),r=p.bind(null,n,t),i=function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(n)};return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else i()}}e.exports=function(e,t){(t=t||{}).singleton||"boolean"==typeof t.singleton||(t.singleton=i());var n=c(e=e||[],t);return function(e){if(e=e||[],"[object Array]"===Object.prototype.toString.call(e)){for(var r=0;r<n.length;r++){var i=o(n[r]);d[i].references--}for(var a=c(e,t),s=0;s<n.length;s++){var l=o(n[s]);0===d[l].references&&(d[l].updater(),d.splice(l,1))}n=a}}}},function(e,t,n){"use strict";n.r(t);var r=n(0),i=n.n(r),a=n(1),d=n.n(a),o=n(2),c=i()(!1),s=d()(o.a);c.push([e.i,"*{box-sizing:border-box;font-family:'Poppins', sans-serif;padding:0;margin:0}a{text-decoration:none}li{list-style-type:none}body{overflow-x:hidden}header{position:sticky;top:0}nav ul{height:100%}nav li,nav .fa{color:#fff;cursor:pointer}input{padding:0.5rem;outline:none;border:none;height:40px}textarea{outline:none;border:none;padding:0.5rem}.meal-img{height:250px;width:300px}.homepage-section{background:url("+s+") center center fixed;background-size:cover;height:100vh}.margin-0{margin:0rem}.margin-x-0{margin:0 0rem}.margin-t-0{margin-top:0rem}.margin-b-0{margin-bottom:0rem}.margin-y-0{margin:0rem 0}.padding-0{padding:0rem}.padding-x-0{padding:0 0rem}.padding-y-0{padding:0rem 0}.margin-1{margin:1rem}.margin-x-1{margin:0 1rem}.margin-t-1{margin-top:1rem}.margin-b-1{margin-bottom:1rem}.margin-y-1{margin:1rem 0}.padding-1{padding:1rem}.padding-x-1{padding:0 1rem}.padding-y-1{padding:1rem 0}.margin-2{margin:2rem}.margin-x-2{margin:0 2rem}.margin-t-2{margin-top:2rem}.margin-b-2{margin-bottom:2rem}.margin-y-2{margin:2rem 0}.padding-2{padding:2rem}.padding-x-2{padding:0 2rem}.padding-y-2{padding:2rem 0}.margin-3{margin:3rem}.margin-x-3{margin:0 3rem}.margin-t-3{margin-top:3rem}.margin-b-3{margin-bottom:3rem}.margin-y-3{margin:3rem 0}.padding-3{padding:3rem}.padding-x-3{padding:0 3rem}.padding-y-3{padding:3rem 0}.margin-4{margin:4rem}.margin-x-4{margin:0 4rem}.margin-t-4{margin-top:4rem}.margin-b-4{margin-bottom:4rem}.margin-y-4{margin:4rem 0}.padding-4{padding:4rem}.padding-x-4{padding:0 4rem}.padding-y-4{padding:4rem 0}.margin-5{margin:5rem}.margin-x-5{margin:0 5rem}.margin-t-5{margin-top:5rem}.margin-b-5{margin-bottom:5rem}.margin-y-5{margin:5rem 0}.padding-5{padding:5rem}.padding-x-5{padding:0 5rem}.padding-y-5{padding:5rem 0}.line-height{line-height:1.5}.active{background-color:#9606b3;color:#fff}.flex-horizontal-center{display:flex;flex-direction:row;justify-content:center;align-items:center}.flex-vertical-center{display:flex;flex-direction:column;justify-content:center;align-items:center}.flex-space-between{display:flex;flex-direction:row;justify-content:space-between;align-items:space-between}.flex-right{display:flex;flex-direction:row;justify-content:flex-end;align-items:flex-end}.centered-horizontal{margin:0 auto}.centered-h-v{display:grid;place-items:center}.relative-element{position:relative}.button-primary,.button-secondry,.button-third,.button-white,.button-white-transparent,.button-primary-outline,.button-primary-outline:hover{display:inline-block;margin:0.2rem;outline:none;padding:0.5rem;cursor:pointer}.button-primary{border:none;background-color:#450247}.button-secondry{border:none;background-color:#9606b3}.button-third{border:none;background-color:#484848}.button-white{border:none;background-color:#fff}.button-white-transparent{border:none;background-color:rgba(255,255,255,0.7)}.button-primary-outline{border:1px solid #450247;background-color:#fff}.button-primary-outline:hover{border:1px solid #450247;background-color:#450247;color:#fff}.black-bg{background-color:#000}.primary-bg{background-color:#450247}.third-bg{background-color:#484848}.white-bg{background-color:#fff}.white-transparent-bg{background-color:rgba(255,255,255,0.7)}.secondary-transparent-bg{background-color:rgba(255,88,91,0.560784)}.third-transparent-bg{background-color:rgba(72,72,72,0.494118)}.light-grey-transparent-bg{background-color:rgba(201,201,201,0.6)}.greyish-bg{background-color:#d7def6}.border-top-bottom-third{border-top:1px solid #484848;border-bottom:1px solid #484848}.border-full{border:1px solid #484848}.border-greyish-full{border:1px solid #d7def6}.rounded-corners-1{border-radius:1rem}.rounded-corners-half,.button-primary,.button-secondry,.button-third,.button-white{border-radius:0.5rem}.border-radius-3,button,input,select{border-radius:3px}.cursor-pointer{cursor:pointer}.circle-element{border-radius:100%}.hidden-sm{display:none}.box-with-shadows{box-shadow:4px 4px 8px 8px rgba(0,0,0,0.2)}.black-text{color:#000}.white-text{color:#fff}.grey-text{color:#484848}.primary-text{color:#450247}.small-text{font-size:0.7rem}.medium-text{font-size:0.8rem}.text-1{font-size:1rem}.text-1-next{font-size:1.2rem}.text-1-half{font-size:1.5rem}.text-2{font-size:2rem}.bold-text{font-weight:700}.centered-text{text-align:center}.left-text{text-align:left}.justify-text{text-align:justify}.letter-spaced{letter-spacing:0}.line-1-half{line-height:1.5}.width-10{width:10%}.width-20{width:20%}.width-30{width:30%}.width-40{width:40%}.width-50{width:50%}.width-60{width:60%}.width-70{width:70%}.width-80{width:80%}.width-90{width:90%}.width-100{width:100%}.height-10{height:10%}.height-20{height:20%}.height-30{height:30%}.height-40{height:40%}.height-50{height:50%}.height-60{height:60%}.height-70{height:70%}.height-80{height:80%}.height-90{height:90%}.height-100{height:100%}@media screen and (min-width: 768px){.width-md-90{width:90%}.width-md-60{width:60%}.width-md-30{width:30%}.hidden-sm{display:inline-block}.hidden-md{display:none}.flex-md-horizontal-right{display:flex;flex-direction:row;justify-content:flex-end}.col-md-6{display:grid;grid-template-columns:1fr 1fr;column-gap:10px}.col-md-4{display:grid;grid-template-columns:1fr 1fr 1fr}.centered-md-horizontal{margin:0 auto}}@media screen and (min-width: 1024px){.hidden-md{display:block}.width-lg-50{width:50%}.width-lg-70{width:70%}.text-1-lg-next{font-size:2rem}.col-lg-6{display:grid;grid-template-columns:1fr 1fr;place-items:center}.col-lg-4{display:grid;grid-template-columns:1fr 1fr 1fr}.flex-lg-horizontal{display:flex;flex-direction:row}.ppic{height:100%}.individual-lg-project{height:500px;width:900px;background-color:rgba(201,201,201,0.6);margin-bottom:40px;margin-left:auto;margin-right:auto;border-top-left-radius:10px;border-top-right-radius:10px;box-shadow:4px 4px 8px 8px rgba(72,72,72,0.494118)}.project-card-header{background-color:#d7def6;height:30px;width:900px;margin-top:40px;margin-bottom:-30px;margin-right:auto;margin-left:auto;border-top-left-radius:10px;border-top-right-radius:10px;display:flex;flex-direction:row;justify-content:flex-start;align-items:center}.project-card-header span{width:20px;height:20px;border-radius:100%;margin-left:10px}.project-card-header .close-btn{background-color:#ed5d57}.project-card-header .restore-btn{background-color:#f9c03d}.project-card-header .minimize-btn{background-color:#64ce42}}\n",""]),t.default=c},function(e,t,n){"use strict";n.r(t);n(3);var r=e=>{const t=document.createElement("header");t.setAttribute("class","primary-bg centered-h-v width-100");const n=document.createElement("nav");n.setAttribute("class","centered-h-v width-100 flex-md-horizontal-right");const r=document.createElement("ul");r.setAttribute("class","flex-horizontal-center width-100 width-md-60");const i=document.createElement("li");i.setAttribute("class","padding-1 margin-x-1 active home"),i.setAttribute("id","nav-item");const a=document.createElement("li");a.setAttribute("class","padding-1 margin-x-1 contact"),a.setAttribute("id","nav-item");const d=document.createElement("li");d.setAttribute("class","padding-1 margin-x-1 menu"),d.setAttribute("id","nav-item");const o=document.createElement("i");o.setAttribute("class","fa fa-home hidden-sm"),o.setAttribute("aria-hidden","true");const c=document.createElement("i");c.setAttribute("class","fa fa-address-card hidden-sm"),c.setAttribute("aria-hidden","true");const s=document.createElement("i");s.setAttribute("class","fa fa-bars hidden-sm"),s.setAttribute("aria-hidden","true");const l=document.createTextNode("Home"),m=document.createTextNode("Contact"),u=document.createTextNode("Menu");i.appendChild(o),i.appendChild(l),a.appendChild(c),a.appendChild(m),d.appendChild(s),d.appendChild(u),r.appendChild(i),r.appendChild(a),r.appendChild(d),n.appendChild(r),t.appendChild(n),e.append(t)},i=n.p+"eeb0f9dad44f354bea47f7353ec0ac2c.jpg",a=n.p+"db8bf27cf980b952027946d23905e345.jpg",d=n.p+"532c85e2dc6e189f6e79071ed549c1ff.jpg",o=n.p+"582b0c4a1456dbcf08388691ef88cae3.jpg",c=n.p+"37b925eece1539c7455566dfd25d5cac.jpeg";var s=e=>{document.createElement("section").setAttribute("class","width-100 m-0 padding-y-1 centered-h-v");const t=document.createElement("div");t.setAttribute("class","col-md-6 col-lg-4 margin-y-1 width-100 centered-h-v white-transparent-bg padding-1 rounded-corners-1");const n=document.createElement("div");n.setAttribute("class","width-100 box-with-shadows padding-1 width-md-90 margin-y-1");const r=document.createElement("div");r.setAttribute("class","centered-h-v width-100");const s=document.createElement("img");s.setAttribute("class","meal-img"),s.setAttribute("src",i),s.setAttribute("alt","imageOne"),r.appendChild(s);const l=document.createElement("h3");l.setAttribute("class","centered-text margin-y-1"),l.textContent="Meal for vegans";const m=document.createElement("div");m.setAttribute("class","flex-horizontal-center");const u=document.createElement("button");u.setAttribute("type","button"),u.setAttribute("class","button-primary-outline primary-text white-text"),u.textContent="Rwf 1,100",m.appendChild(u);const p=document.createElement("div"),h=document.createElement("a");h.setAttribute("href","#"),h.setAttribute("class","centered-text button-secondry white-text width-100"),h.textContent="Order here",p.appendChild(h),n.appendChild(r),n.appendChild(l),n.appendChild(m),n.appendChild(p);const g=document.createElement("div");g.setAttribute("class","width-100 box-with-shadows padding-1 width-md-90 margin-y-1");const b=document.createElement("div");b.setAttribute("class","centered-h-v width-100");const f=document.createElement("img");f.setAttribute("class","meal-img"),f.setAttribute("src",a),f.setAttribute("alt","imageTwo"),b.appendChild(f);const x=document.createElement("h3");x.setAttribute("class","centered-text margin-y-1"),x.textContent="Meal for vegans";const w=document.createElement("div");w.setAttribute("class","flex-horizontal-center");const y=document.createElement("button");y.setAttribute("type","button"),y.setAttribute("class","button-primary-outline primary-text white-text"),y.textContent="Rwf 1,100",w.appendChild(y);const v=document.createElement("div"),A=document.createElement("a");A.setAttribute("href","#"),A.setAttribute("class","centered-text button-secondry white-text width-100"),A.textContent="Order here",v.appendChild(A),g.appendChild(b),g.appendChild(x),g.appendChild(w),g.appendChild(v);const C=document.createElement("div");C.setAttribute("class","width-100 box-with-shadows padding-1 width-md-90 margin-y-1");const E=document.createElement("div");E.setAttribute("class","centered-h-v width-100");const k=document.createElement("img");k.setAttribute("class","meal-img"),k.setAttribute("src",d),k.setAttribute("alt","imageThree"),E.appendChild(k);const j=document.createElement("h3");j.setAttribute("class","centered-text margin-y-1"),j.textContent="Meal for vegans";const z=document.createElement("div");z.setAttribute("class","flex-horizontal-center");const M=document.createElement("button");M.setAttribute("type","button"),M.setAttribute("class","button-primary-outline primary-text white-text"),M.textContent="Rwf 1,100",z.appendChild(M);const S=document.createElement("div"),O=document.createElement("a");O.setAttribute("href","#"),O.setAttribute("class","centered-text button-secondry white-text width-100"),O.textContent="Order here",S.appendChild(O),C.appendChild(E),C.appendChild(j),C.appendChild(z),C.appendChild(S);const T=document.createElement("div");T.setAttribute("class","width-100 box-with-shadows padding-1 width-md-90 margin-y-1");const L=document.createElement("div");L.setAttribute("class","centered-h-v width-100");const N=document.createElement("img");N.setAttribute("class","meal-img"),N.setAttribute("src",o),N.setAttribute("alt","imageFour"),L.appendChild(N);const R=document.createElement("h3");R.setAttribute("class","centered-text margin-y-1"),R.textContent="Meal for vegans";const _=document.createElement("div");_.setAttribute("class","flex-horizontal-center");const P=document.createElement("button");P.setAttribute("type","button"),P.setAttribute("class","button-primary-outline primary-text white-text"),P.textContent="Rwf 1,100",_.appendChild(P);const q=document.createElement("div"),F=document.createElement("a");F.setAttribute("href","#"),F.setAttribute("class","centered-text button-secondry white-text width-100"),F.textContent="Order here",q.appendChild(F),T.appendChild(L),T.appendChild(R),T.appendChild(_),T.appendChild(q);const U=document.createElement("div");U.setAttribute("class","width-100 box-with-shadows padding-1 width-md-90 margin-y-1");const B=document.createElement("div");B.setAttribute("class","centered-h-v width-100");const H=document.createElement("img");H.setAttribute("class","meal-img"),H.setAttribute("src",c),H.setAttribute("alt","imageFive"),B.appendChild(H);const I=document.createElement("h3");I.setAttribute("class","centered-text margin-y-1"),I.textContent="Meal for vegans";const Y=document.createElement("div");Y.setAttribute("class","flex-horizontal-center");const W=document.createElement("button");W.setAttribute("type","button"),W.setAttribute("class","button-primary-outline primary-text white-text"),W.textContent="Rwf 1,100",Y.appendChild(W);const J=document.createElement("div"),D=document.createElement("a");D.setAttribute("href","#"),D.setAttribute("class","centered-text button-secondry white-text width-100"),D.textContent="Order here",J.appendChild(D),U.appendChild(B),U.appendChild(I),U.appendChild(Y),U.appendChild(J),t.appendChild(n),t.appendChild(g),t.appendChild(C),t.appendChild(T),t.appendChild(U),e.append(t)};var l=e=>{const t=document.createElement("footer"),n=document.createElement("section");n.setAttribute("class","width-100 m-0 padding-y-1 centered-h-v black-bg");const r=document.createElement("div");r.setAttribute("class","centered-h-v margin-y-1");const i=document.createElement("h6"),a=document.createElement("span");a.setAttribute("class","text-1 white-text");const d=document.createElement("i");d.setAttribute("class","fa fa-copyright"),d.setAttribute("aria-hidden","true");const o=document.createTextNode("restaurant page 2020");a.appendChild(d),a.appendChild(o),i.appendChild(a),r.appendChild(i),n.appendChild(r),t.appendChild(n),e.append(t)};var m=e=>{const t=document.createElement("section");t.setAttribute("id","contact"),t.setAttribute("class","width-100 padding-2 primary-bg");const n=document.createElement("div");n.setAttribute("class","third-transparent-bg padding-y-1 padding-lg-half width-80 centered-horizontal white-text rounded-corners-1 box-with-shadows");const r=document.createElement("h1");r.setAttribute("class","centered-text width-90"),r.textContent="We would like to hear from you:";const i=document.createElement("div");i.setAttribute("class","contact-info margin-y-2 line-height width-90");const a=document.createElement("h4");a.setAttribute("class","centered-text"),a.textContent="You can call us on : +250 720 000 000",i.appendChild(a);const d=document.createElement("h4");d.setAttribute("class","centered-text"),d.textContent="Send us an sms on : +250 720 000 001",i.appendChild(d);const o=document.createElement("h4");o.setAttribute("class","centered-text"),o.textContent="Or send us an email on : ourrestaurant@restaurant.page",i.appendChild(o);const c=document.createElement("div");c.setAttribute("class","flex-horizontal-center margin-y-1 width-100");const s=document.createElement("form");s.setAttribute("class","width-90");const l=document.createElement("div");l.setAttribute("class","col-md-6");const m=document.createElement("div");m.setAttribute("class","margin-y-1 width-100");const u=document.createElement("input");u.setAttribute("class","width-100 text-1-next"),u.setAttribute("type","text"),u.setAttribute("id","full-name"),u.setAttribute("placeholder","Full name ... "),m.appendChild(u);const p=document.createElement("div");p.setAttribute("class","margin-y-1 width-100");const h=document.createElement("input");h.setAttribute("class","width-100 text-1-next"),h.setAttribute("type","email"),h.setAttribute("id","email-address"),h.setAttribute("placeholder","Your email address ... "),p.appendChild(h);const g=document.createElement("div");g.setAttribute("class","margin-y-1 width-100");const b=document.createElement("textarea");b.setAttribute("class","width-100 text-1-next"),b.setAttribute("rows","6"),b.setAttribute("cols","50"),b.setAttribute("id","message"),b.setAttribute("placeholder","Your message here ... "),g.appendChild(b);const f=document.createElement("div");f.setAttribute("class","width-100 centered-h-v");const x=document.createElement("button");x.setAttribute("class","button-white-transparent"),x.setAttribute("type","button"),x.textContent="Send us message",f.appendChild(x),l.appendChild(m),l.appendChild(p),s.appendChild(l),s.appendChild(g),s.appendChild(f),c.appendChild(s),n.appendChild(r),n.appendChild(i),n.appendChild(c),t.appendChild(n),e.append(t)};const u=document.querySelector("#content");r(u),(e=>{const t=document.createElement("main");t.setAttribute("class","main-page width-100 height-100"),t.setAttribute("id","main-container"),e.append(t)})(u),l(u);const p=document.querySelector("#main-container"),h=()=>s(p),g=()=>(e=>{const t=document.createElement("section");t.setAttribute("class","homepage-section width-100 padding-2 centered-h-v");const n=document.createElement("div");n.setAttribute("class","white-transparent-bg padding-5 padding-lg-half width-80 centered-horizontal black-text rounded-corners-1 box-with-shadows");const r=document.createElement("h1");r.setAttribute("class","centered-text"),r.textContent="Welcome to restaurant page";const i=document.createElement("p");i.setAttribute("class","centered-text margin-y-2"),i.textContent='"\n  With quick-service, fast casual, and meal delivery services,\n  food is getting faster and more convenient by the New York minute. \n  More and more players seem to be getting into the game.\n  But Panda Express and Panda Express Catering know how to handle fast orders and do it right.\n  "';const a=document.createElement("h1");a.setAttribute("class","centered-text"),a.textContent="Click the menu option above to be able to read all the vailable menu",n.appendChild(r),n.appendChild(i),n.appendChild(a),t.appendChild(n),e.append(t)})(p),b=()=>m(p);g();const f=document.querySelectorAll("#nav-item"),x=e=>{p.innerHTML="",e()},w=()=>{f.forEach(e=>{e.classList.contains("active")&&e.classList.remove("active")})},y=e=>{e.classList.add("active")};f.forEach(e=>{e.addEventListener("click",e=>{e.target.classList.contains("home")&&(w(),y(e.target),x(g)),e.target.classList.contains("menu")&&(w(),y(e.target),x(h)),e.target.classList.contains("contact")&&(w(),y(e.target),x(b))})})}]);