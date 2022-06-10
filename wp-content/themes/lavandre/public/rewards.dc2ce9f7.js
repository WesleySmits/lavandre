"use strict";(self.webpackChunklavandre=self.webpackChunklavandre||[]).push([[183],{3069:function(e,t,n){n.d(t,{Z:function(){return FieldValidation}});class FieldValidation{constructor(e){this.field=e}initialize(){if(!this.field)return;const e=["change","validate"];for(let t=0;t<e.length;t++){const n=e[t];this.field.addEventListener(n,(e=>{this.onChange(e.target,e)}))}this.field.addEventListener("invalid",(e=>{e.preventDefault()}))}onChange(e,t){if(FieldValidation.removeErrorText(this.field),!0===this.field.validity.valid)return void e.classList.remove("invalid");const n=this.getValidationMessage(e.validity,e);FieldValidation.appendErrorText(this.field,n),e.classList.add("invalid")}getValidationMessage(e,t){const n="Vul een geldige waarde in.";return!0===e.valueMissing?t.dataset.valueMissing||t.title||"Dit veld is verplicht.":!0===e.customError?t.dataset.customMessage||t.title||n:!0===e.typeMismatch?t.title||n:!0===e.patternMismatch&&t.title||n}static appendErrorText(e,t){var n;const i=document.createElement("SPAN");i.classList.add("validation-message"),i.innerText=t,null===(n=e.parentElement)||void 0===n||n.appendChild(i)}static appendSuccessText(e,t){var n;const i=document.createElement("SPAN");i.classList.add("validation-message","validation-message--success"),i.innerText=t,null===(n=e.parentElement)||void 0===n||n.appendChild(i)}static removeErrorText(e){var t;const n=(null===(t=e.parentElement)||void 0===t?void 0:t.querySelector(".validation-message"))||null;n&&n.remove()}static onInit(e=document){Array.from(e.querySelectorAll("[data-field-validation]")).forEach((e=>{const t=Array.from(e.querySelectorAll('input:not([type="hidden"])'));for(let e=0;e<t.length;e++){const n=t[e];new FieldValidation(n).initialize()}const n=e.querySelector('button[type="submit"]');null==n||n.addEventListener("click",(n=>{n.preventDefault();let i=!0;for(let e=0;e<t.length;e++){const n=t[e];n.dispatchEvent(new Event("change")),i=n.validity.valid}i&&e.submit()}))}))}}},5425:function(e,t,n){function matchMediaAddEventListener(e,t,n=!1){try{e.addEventListener("change",t,n)}catch(n){e.addListener((()=>t))}}function matchMediaRemoveEventListener(e,t){try{e.removeEventListener("change",t)}catch(n){e.removeListener((()=>t))}}n.d(t,{J:function(){return matchMediaAddEventListener},x:function(){return matchMediaRemoveEventListener}})},6826:function(e,t,n){var i,r,s,a,o,c,l,d,h,u=n(8377),f=n(5892),m=n(5555),__classPrivateFieldGet=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)};class BirthdayForm extends HTMLFormElement{constructor(){super(...arguments),i.add(this),r.set(this,this.querySelector('[type="submit"]')),s.set(this,this.querySelector("#birthday-day")),a.set(this,this.querySelector("#birthday-month"))}connectedCallback(){this.addEventListener("submit",__classPrivateFieldGet(this,i,"m",l).bind(this)),__classPrivateFieldGet(this,r,"f").addEventListener("click",__classPrivateFieldGet(this,i,"m",l).bind(this)),null!==__classPrivateFieldGet(this,s,"f")&&null!==__classPrivateFieldGet(this,a,"f")&&window.setTimeout((()=>{__classPrivateFieldGet(this,s,"f").optionValues=__classPrivateFieldGet(this,i,"m",o).call(this),__classPrivateFieldGet(this,a,"f").optionValues=__classPrivateFieldGet(this,i,"m",c).call(this)}),1)}disconnectedCallback(){this.removeEventListener("submit",__classPrivateFieldGet(this,i,"m",l).bind(this)),__classPrivateFieldGet(this,r,"f").removeEventListener("click",__classPrivateFieldGet(this,i,"m",l).bind(this))}}r=new WeakMap,s=new WeakMap,a=new WeakMap,i=new WeakSet,o=function _BirthdayForm_getDayValues(){const e={};for(let t=1;t<=31;t++){const n=(0,u.T1)(t).toString();e[n]=n}return e},c=function _BirthdayForm_getMonthValues(){const e={};for(let t=1;t<=12;t++){const n=(0,u.T1)(t).toString(),i=new Date(`2021-${n}-02`),r=(0,u.eN)(i);e[t]=r}return e},l=function _BirthdayForm_onSubmit(e){e.preventDefault();const t=new FormData(this),n=t.get("day"),s=t.get("month");if(!n||!s)return!1;const a=new Date(`1970-${s}-${n}`),o={action:"ajaxdateofbirth",date:(0,u.p6)(a)};return(0,m.Ye)(o,f.Z.ajax,null,__classPrivateFieldGet(this,i,"m",d).bind(this),__classPrivateFieldGet(this,i,"m",h).bind(this),e,__classPrivateFieldGet(this,r,"f")),!1},d=function _BirthdayForm_onSuccess(){const e=this.closest('[is="signup-block"]');e&&(e.completed=!0)},h=function _BirthdayForm_onFailure(){},customElements.define("birthday-form",BirthdayForm,{extends:"form"});var p,v,w,g,y,b=n(3069),__classPrivateFieldSet=function(e,t,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,n):r?r.value=n:t.set(e,n),n},ReferAFriendForm_classPrivateFieldGet=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)};class ReferAFriendForm extends HTMLFormElement{constructor(){super(...arguments),p.add(this),v.set(this,null)}connectedCallback(){__classPrivateFieldSet(this,v,this.querySelector('[name="email"]'),"f");new b.Z(ReferAFriendForm_classPrivateFieldGet(this,v,"f")).initialize(),this.addEventListener("submit",ReferAFriendForm_classPrivateFieldGet(this,p,"m",w).bind(this),!1)}disconnectedCallback(){this.removeEventListener("submit",ReferAFriendForm_classPrivateFieldGet(this,p,"m",w).bind(this),!1)}}v=new WeakMap,p=new WeakSet,w=function _ReferAFriendForm_submitHandler(e){var t;e.preventDefault();const n=(null===(t=new FormData(this).get("email"))||void 0===t?void 0:t.toString())||"";if(!n)return;const i={action:"ajaxreferafriendemail",email:n},r=this.querySelector('[type="submit"]');b.Z.removeErrorText(ReferAFriendForm_classPrivateFieldGet(this,v,"f")),(0,m.Ye)(i,f.Z.ajax,null,ReferAFriendForm_classPrivateFieldGet(this,p,"m",g).bind(this),ReferAFriendForm_classPrivateFieldGet(this,p,"m",y).bind(this),e,r)},g=function _ReferAFriendForm_onSuccess(e){const t=this.closest("lavandre-toggle");t&&t.dispatchEvent(new CustomEvent("toggle"))},y=function _ReferAFriendForm_onFailure(e){throw b.Z.appendErrorText(ReferAFriendForm_classPrivateFieldGet(this,v,"f"),e.message),e},window.customElements.define("refer-a-friend-form",ReferAFriendForm,{extends:"form"});var E,k,L,S,T,_,M,x,C,F,j,W,A,q,P,B,D,V=n(5425),SignupBlock_classPrivateFieldGet=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)},SignupBlock_classPrivateFieldSet=function(e,t,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,n):r?r.value=n:t.set(e,n),n};class SignupBlock extends HTMLLIElement{constructor(){super(...arguments),E.add(this),k.set(this,null),L.set(this,null),S.set(this,this.dataset.href||null),T.set(this,Number(this.dataset.points)||0),_.set(this,this.getAttribute("type")||""),M.set(this,this.hasAttribute("completed")||!1),x.set(this,getComputedStyle(document.documentElement).getPropertyValue("--tablet-landscape")),C.set(this,matchMedia(SignupBlock_classPrivateFieldGet(this,x,"f"))),F.set(this,!1),A.set(this,(()=>{SignupBlock_classPrivateFieldGet(this,L,"f")?SignupBlock_classPrivateFieldGet(this,L,"f").hidden=!1:(SignupBlock_classPrivateFieldGet(this,E,"m",W).call(this),SignupBlock_classPrivateFieldGet(this,E,"m",B).call(this))})),q.set(this,(e=>{var t;e&&e.stopPropagation(),null===(t=SignupBlock_classPrivateFieldGet(this,L,"f"))||void 0===t||t.toggleAttribute("hidden",!0)})),P.set(this,(()=>{if(this.completed)return;const e={action:"ajaxaddloyaltypoints",points:String(SignupBlock_classPrivateFieldGet(this,T,"f")),pool:"default",type:SignupBlock_classPrivateFieldGet(this,_,"f")};(0,m.Ye)(e,f.Z.ajax,null,(()=>{this.completed=!0})),window.open(SignupBlock_classPrivateFieldGet(this,S,"f"),"_blank")}))}get completed(){return SignupBlock_classPrivateFieldGet(this,M,"f")}set completed(e){var t;SignupBlock_classPrivateFieldSet(this,M,e,"f"),SignupBlock_classPrivateFieldSet(this,k,null,"f"),SignupBlock_classPrivateFieldSet(this,L,null,"f"),null===(t=this.querySelector(".points-grid__overlay"))||void 0===t||t.remove(),SignupBlock_classPrivateFieldGet(this,E,"m",W).call(this);Array.from(this.querySelectorAll(".points-grid__title-content")).forEach((e=>{e.toggleAttribute("hidden",!e.hidden)}))}connectedCallback(){SignupBlock_classPrivateFieldGet(this,E,"m",j).call(this),SignupBlock_classPrivateFieldGet(this,F,"f")?(this.removeEventListener("mouseenter",SignupBlock_classPrivateFieldGet(this,A,"f")),this.removeEventListener("mouseleave",SignupBlock_classPrivateFieldGet(this,q,"f")),this.addEventListener("click",SignupBlock_classPrivateFieldGet(this,A,"f"))):(this.addEventListener("mouseenter",SignupBlock_classPrivateFieldGet(this,A,"f")),this.addEventListener("mouseleave",SignupBlock_classPrivateFieldGet(this,q,"f")),this.removeEventListener("click",SignupBlock_classPrivateFieldGet(this,A,"f"))),(0,V.J)(SignupBlock_classPrivateFieldGet(this,C,"f"),SignupBlock_classPrivateFieldGet(this,E,"m",j))}disconnectedCallback(){this.removeEventListener("mouseenter",SignupBlock_classPrivateFieldGet(this,A,"f")),this.removeEventListener("mouseleave",SignupBlock_classPrivateFieldGet(this,q,"f")),this.removeEventListener("click",SignupBlock_classPrivateFieldGet(this,A,"f")),(0,V.x)(SignupBlock_classPrivateFieldGet(this,C,"f"),SignupBlock_classPrivateFieldGet(this,E,"m",j)),SignupBlock_classPrivateFieldGet(this,S,"f")&&this.removeEventListener("click",SignupBlock_classPrivateFieldGet(this,P,"f"))}}k=new WeakMap,L=new WeakMap,S=new WeakMap,T=new WeakMap,_=new WeakMap,M=new WeakMap,x=new WeakMap,C=new WeakMap,F=new WeakMap,A=new WeakMap,q=new WeakMap,P=new WeakMap,E=new WeakSet,j=function _SignupBlock_checkIsMobile(){return SignupBlock_classPrivateFieldSet(this,F,!SignupBlock_classPrivateFieldGet(this,C,"f").matches,"f"),SignupBlock_classPrivateFieldGet(this,F,"f")},W=function _SignupBlock_setTemplate(){var e;SignupBlock_classPrivateFieldGet(this,k,"f")||SignupBlock_classPrivateFieldSet(this,k,SignupBlock_classPrivateFieldGet(this,E,"m",D).call(this),"f"),this.appendChild(null===(e=SignupBlock_classPrivateFieldGet(this,k,"f"))||void 0===e?void 0:e.content.cloneNode(!0)),SignupBlock_classPrivateFieldSet(this,L,this.querySelector(".points-grid__overlay"),"f");const t=this.querySelector("[data-close]");t&&t.addEventListener("click",SignupBlock_classPrivateFieldGet(this,q,"f").bind(this),!1)},B=function _SignupBlock_setOverlayEventListeners(){var e;if(SignupBlock_classPrivateFieldGet(this,S,"f")){const t=null===(e=SignupBlock_classPrivateFieldGet(this,L,"f"))||void 0===e?void 0:e.querySelector('button[is="lavandre-button"]');if(!t)return;t.addEventListener("click",SignupBlock_classPrivateFieldGet(this,P,"f"))}},D=function _SignupBlock_getTemplate(){const e=document.getElementById("points-grid-overlay");if(!document.body.classList.contains("logged-in"))return e;if(SignupBlock_classPrivateFieldGet(this,M,"f"))return document.getElementById(`points-grid-overlay--completed--${SignupBlock_classPrivateFieldGet(this,_,"f")}`)||document.getElementById("points-grid-overlay--completed");const t=document.getElementById(`points-grid-overlay--${SignupBlock_classPrivateFieldGet(this,_,"f")}`);return t||e},customElements.define("signup-block",SignupBlock,{extends:"li"});var N,H,O,Z,LavandreToggle_classPrivateFieldGet=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)},LavandreToggle_classPrivateFieldSet=function(e,t,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,n):r?r.value=n:t.set(e,n),n};class LavandreToggle extends HTMLElement{constructor(){super(...arguments),N.add(this),H.set(this,[]),O.set(this,[])}connectedCallback(){LavandreToggle_classPrivateFieldSet(this,H,Array.from(this.querySelectorAll("[data-name]")),"f"),LavandreToggle_classPrivateFieldSet(this,O,Array.from(this.querySelectorAll("[data-toggle]")),"f"),LavandreToggle_classPrivateFieldGet(this,O,"f").forEach((e=>{e.addEventListener("click",LavandreToggle_classPrivateFieldGet(this,N,"m",Z).bind(this),!1)})),this.addEventListener("toggle",LavandreToggle_classPrivateFieldGet(this,N,"m",Z).bind(this),!1)}}H=new WeakMap,O=new WeakMap,N=new WeakSet,Z=function _LavandreToggle_clickHandler(){LavandreToggle_classPrivateFieldGet(this,H,"f").forEach((e=>{e.toggleAttribute("hidden",!e.hidden)}))},customElements.define("lavandre-toggle",LavandreToggle);var I,R,$,U,Y,SponsorshipToggle_classPrivateFieldSet=function(e,t,n,i,r){if("m"===i)throw new TypeError("Private method is not writable");if("a"===i&&!r)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!r:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===i?r.call(e,n):r?r.value=n:t.set(e,n),n},SponsorshipToggle_classPrivateFieldGet=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)};R=new WeakMap,$=new WeakMap,U=new WeakMap,I=new WeakSet,Y=function _SponsorshipToggle_referAFriendCallback(e){e.forEach((e=>{"class"===e.attributeName&&SponsorshipToggle_classPrivateFieldGet(this,R,"f")&&SponsorshipToggle_classPrivateFieldGet(this,R,"f").classList.contains("lws_woorewards_sponsorship_succeed")&&(null!==SponsorshipToggle_classPrivateFieldGet(this,$,"f")&&window.clearTimeout(SponsorshipToggle_classPrivateFieldGet(this,$,"f")),SponsorshipToggle_classPrivateFieldSet(this,$,window.setTimeout((()=>{var e;null===(e=SponsorshipToggle_classPrivateFieldGet(this,R,"f").closest("lavandre-toggle"))||void 0===e||e.dispatchEvent(new Event("toggle"))}),SponsorshipToggle_classPrivateFieldGet(this,U,"f")),"f"))}))},window.customElements.define("sponsorship-toggle",class SponsorshipToggle extends LavandreToggle{constructor(){super(...arguments),I.add(this),R.set(this,null),$.set(this,null),U.set(this,150)}connectedCallback(){if(super.connectedCallback(),SponsorshipToggle_classPrivateFieldSet(this,R,document.querySelector(".lws_woorewards_sponsorship_feedback"),"f"),null===SponsorshipToggle_classPrivateFieldGet(this,R,"f"))return;new MutationObserver(SponsorshipToggle_classPrivateFieldGet(this,I,"m",Y).bind(this)).observe(SponsorshipToggle_classPrivateFieldGet(this,R,"f"),{attributes:!0})}});n(8623)},8377:function(e,t,n){function formatDate(e){const t=formatNumberWithLeadingZero(e.getDate()),n=formatNumberWithLeadingZero(e.getMonth()+1);return`${e.getFullYear()}-${n}-${t}`}function formatNumberWithLeadingZero(e){return String(e).padStart(2,"0")}function getFullMonthName(e,t="default"){return e.toLocaleString(t,{month:"long"})}n.d(t,{p6:function(){return formatDate},T1:function(){return formatNumberWithLeadingZero},eN:function(){return getFullMonthName}})},5892:function(e,t){const n={ajax:`${window.location.origin}/wp-admin/admin-ajax.php`};t.Z=n},5555:function(e,t,n){n.d(t,{Ye:function(){return sendAjaxRequest}});var i=new class HttpClient{get(e,t){return this.request(e,t)}post(e,t,n){const i={method:"post",body:t,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}},r=Object.assign(Object.assign({},i),n);return this.request(e,r)}put(e,t,n){const i={method:"put",body:t,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}},r=Object.assign(Object.assign({},i),n);return this.request(e,r)}delete(e,t,n){const i={method:"delete",body:t},r=Object.assign(Object.assign({},i),n);return this.request(e,r)}request(e,t){const n=Object.assign(Object.assign({},{method:"get",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}}),t);return fetch(e,n).then(this.requestStatus).then(this.responseType)}requestStatus(e){return e.status>=200&&e.status<300?Promise.resolve(e):e.status>=400&&e.status<500?e.text().then((e=>Promise.reject(e))):Promise.reject(new Error(e.statusText))}responseType(e){const t=e.headers.get("content-type");return null!==t&&-1!==t.indexOf("application/json")?e.json():e.text()}convertFormDataToQueryString(e){return new URLSearchParams(e).toString()}};function sendAjaxRequest(e,t,n,r,s,a,o){const c=i,l={method:"post",body:new URLSearchParams(e).toString(),credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};n&&function addLoadingState(e){if(!e)return;e.classList.add("custom-cart__item--loading");const t=document.createElement("DIV");t.classList.add("ww-loader"),e.appendChild(t)}(n),o&&function setButtonLoadingState(e){e.disabled=!0,e.setAttribute("loading","true")}(o),c.post(t,"",l).then((e=>new Promise((()=>{const t=e,i=t.data;if(!1===t.success)throw new Error(String(i));r(t,a),n&&removeLoadingState(n),o&&removeButtonLoadingState(o)})))).catch((e=>{n&&removeLoadingState(n),o&&removeButtonLoadingState(o),s&&s(e)}))}function removeLoadingState(e){if(!e)return;e.classList.remove("custom-cart__item--loading");const t=e.querySelector(".ww-loader");t&&t.parentElement.removeChild(t)}function removeButtonLoadingState(e){e.disabled=!1,e.removeAttribute("loading")}},8623:function(e,t,n){var i,r,s,__classPrivateFieldGet=function(e,t,n,i){if("a"===n&&!i)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!i:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===n?i:"a"===n?i.call(e):i?i.value:t.get(e)};class StickyHeader extends HTMLElement{constructor(){super(...arguments),i.add(this),r.set(this,"transparent")}connectedCallback(){const e=document.getElementById("main-banner"),t={root:null,rootMargin:`-${this.clientHeight}px`,threshold:0};if(!e)return;new IntersectionObserver(((e,t)=>{__classPrivateFieldGet(this,i,"m",s).call(this,e)}),t).observe(e)}}r=new WeakMap,i=new WeakSet,s=function _StickyHeader_onChange(e){e.forEach((e=>{e.isIntersecting?this.classList.add(__classPrivateFieldGet(this,r,"f")):this.classList.remove(__classPrivateFieldGet(this,r,"f"))}))},window.customElements.define("sticky-header",StickyHeader,{extends:"header"})}},function(e){var t;t=6826,e(e.s=t)}]);