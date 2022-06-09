"use strict";(self.webpackChunklavandre=self.webpackChunklavandre||[]).push([[183],{5425:function(e,t,i){function matchMediaAddEventListener(e,t,i=!1){try{e.addEventListener("change",t,i)}catch(i){e.addListener((()=>t))}}function matchMediaRemoveEventListener(e,t){try{e.removeEventListener("change",t)}catch(i){e.removeListener((()=>t))}}i.d(t,{J:function(){return matchMediaAddEventListener},x:function(){return matchMediaRemoveEventListener}})},8302:function(e,t,i){var n,s,r,o,a,l=i(2706),c=i(2377),h=i(3069),d=i(5892),u=i(5555),__classPrivateFieldSet=function(e,t,i,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(e,i):s?s.value=i:t.set(e,i),i},__classPrivateFieldGet=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)};class ReferAFriendForm extends HTMLFormElement{constructor(){super(...arguments),n.add(this),s.set(this,null)}connectedCallback(){__classPrivateFieldSet(this,s,this.querySelector('[name="email"]'),"f");new h.Z(__classPrivateFieldGet(this,s,"f")).initialize(),this.addEventListener("submit",__classPrivateFieldGet(this,n,"m",r).bind(this),!1)}disconnectedCallback(){this.removeEventListener("submit",__classPrivateFieldGet(this,n,"m",r).bind(this),!1)}}s=new WeakMap,n=new WeakSet,r=function _ReferAFriendForm_submitHandler(e){var t;e.preventDefault();const i=(null===(t=new FormData(this).get("email"))||void 0===t?void 0:t.toString())||"";if(!i)return;const r={action:"ajaxreferafriendemail",email:i},l=this.querySelector('[type="submit"]');h.Z.removeErrorText(__classPrivateFieldGet(this,s,"f")),(0,u.Ye)(r,d.Z.ajax,null,__classPrivateFieldGet(this,n,"m",o).bind(this),__classPrivateFieldGet(this,n,"m",a).bind(this),e,l)},o=function _ReferAFriendForm_onSuccess(e){const t=this.closest("lavandre-toggle");t&&t.dispatchEvent(new CustomEvent("toggle"))},a=function _ReferAFriendForm_onFailure(e){throw h.Z.appendErrorText(__classPrivateFieldGet(this,s,"f"),e.message),e},window.customElements.define("refer-a-friend-form",ReferAFriendForm,{extends:"form"});var f,m,w,p,v,E,g,y,b,k,_,M,L,T,S,W,C,x=i(5425),SignupBlock_classPrivateFieldGet=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)},SignupBlock_classPrivateFieldSet=function(e,t,i,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(e,i):s?s.value=i:t.set(e,i),i};class SignupBlock extends HTMLLIElement{constructor(){super(...arguments),f.add(this),m.set(this,null),w.set(this,null),p.set(this,this.dataset.href||null),v.set(this,Number(this.dataset.points)||0),E.set(this,this.getAttribute("type")||""),g.set(this,this.hasAttribute("completed")||!1),y.set(this,getComputedStyle(document.documentElement).getPropertyValue("--tablet-landscape")),b.set(this,matchMedia(SignupBlock_classPrivateFieldGet(this,y,"f"))),k.set(this,!1),L.set(this,(()=>{SignupBlock_classPrivateFieldGet(this,w,"f")?SignupBlock_classPrivateFieldGet(this,w,"f").hidden=!1:(SignupBlock_classPrivateFieldGet(this,f,"m",M).call(this),SignupBlock_classPrivateFieldGet(this,f,"m",W).call(this))})),T.set(this,(e=>{var t;e&&e.stopPropagation(),null===(t=SignupBlock_classPrivateFieldGet(this,w,"f"))||void 0===t||t.toggleAttribute("hidden",!0)})),S.set(this,(()=>{if(this.completed)return;const e={action:"ajaxaddloyaltypoints",points:String(SignupBlock_classPrivateFieldGet(this,v,"f")),pool:"default",type:SignupBlock_classPrivateFieldGet(this,E,"f")};(0,u.Ye)(e,d.Z.ajax,null,(()=>{this.completed=!0})),window.open(SignupBlock_classPrivateFieldGet(this,p,"f"),"_blank")}))}get completed(){return SignupBlock_classPrivateFieldGet(this,g,"f")}set completed(e){var t;SignupBlock_classPrivateFieldSet(this,g,e,"f"),SignupBlock_classPrivateFieldSet(this,m,null,"f"),SignupBlock_classPrivateFieldSet(this,w,null,"f"),null===(t=this.querySelector(".points-grid__overlay"))||void 0===t||t.remove(),SignupBlock_classPrivateFieldGet(this,f,"m",M).call(this);Array.from(this.querySelectorAll(".points-grid__title-content")).forEach((e=>{e.toggleAttribute("hidden",!e.hidden)}))}connectedCallback(){SignupBlock_classPrivateFieldGet(this,f,"m",_).call(this),SignupBlock_classPrivateFieldGet(this,k,"f")?(this.removeEventListener("mouseenter",SignupBlock_classPrivateFieldGet(this,L,"f")),this.removeEventListener("mouseleave",SignupBlock_classPrivateFieldGet(this,T,"f")),this.addEventListener("click",SignupBlock_classPrivateFieldGet(this,L,"f"))):(this.addEventListener("mouseenter",SignupBlock_classPrivateFieldGet(this,L,"f")),this.addEventListener("mouseleave",SignupBlock_classPrivateFieldGet(this,T,"f")),this.removeEventListener("click",SignupBlock_classPrivateFieldGet(this,L,"f"))),(0,x.J)(SignupBlock_classPrivateFieldGet(this,b,"f"),SignupBlock_classPrivateFieldGet(this,f,"m",_))}disconnectedCallback(){this.removeEventListener("mouseenter",SignupBlock_classPrivateFieldGet(this,L,"f")),this.removeEventListener("mouseleave",SignupBlock_classPrivateFieldGet(this,T,"f")),this.removeEventListener("click",SignupBlock_classPrivateFieldGet(this,L,"f")),(0,x.x)(SignupBlock_classPrivateFieldGet(this,b,"f"),SignupBlock_classPrivateFieldGet(this,f,"m",_)),SignupBlock_classPrivateFieldGet(this,p,"f")&&this.removeEventListener("click",SignupBlock_classPrivateFieldGet(this,S,"f"))}}m=new WeakMap,w=new WeakMap,p=new WeakMap,v=new WeakMap,E=new WeakMap,g=new WeakMap,y=new WeakMap,b=new WeakMap,k=new WeakMap,L=new WeakMap,T=new WeakMap,S=new WeakMap,f=new WeakSet,_=function _SignupBlock_checkIsMobile(){return SignupBlock_classPrivateFieldSet(this,k,!SignupBlock_classPrivateFieldGet(this,b,"f").matches,"f"),SignupBlock_classPrivateFieldGet(this,k,"f")},M=function _SignupBlock_setTemplate(){var e;SignupBlock_classPrivateFieldGet(this,m,"f")||SignupBlock_classPrivateFieldSet(this,m,SignupBlock_classPrivateFieldGet(this,f,"m",C).call(this),"f"),this.appendChild(null===(e=SignupBlock_classPrivateFieldGet(this,m,"f"))||void 0===e?void 0:e.content.cloneNode(!0)),SignupBlock_classPrivateFieldSet(this,w,this.querySelector(".points-grid__overlay"),"f");const t=this.querySelector("[data-close]");t&&t.addEventListener("click",SignupBlock_classPrivateFieldGet(this,T,"f").bind(this),!1)},W=function _SignupBlock_setOverlayEventListeners(){var e;if(SignupBlock_classPrivateFieldGet(this,p,"f")){const t=null===(e=SignupBlock_classPrivateFieldGet(this,w,"f"))||void 0===e?void 0:e.querySelector('button[is="lavandre-button"]');if(!t)return;t.addEventListener("click",SignupBlock_classPrivateFieldGet(this,S,"f"))}},C=function _SignupBlock_getTemplate(){const e=document.getElementById("points-grid-overlay");if(!document.body.classList.contains("logged-in"))return e;if(SignupBlock_classPrivateFieldGet(this,g,"f"))return document.getElementById(`points-grid-overlay--completed--${SignupBlock_classPrivateFieldGet(this,E,"f")}`)||document.getElementById("points-grid-overlay--completed");const t=document.getElementById(`points-grid-overlay--${SignupBlock_classPrivateFieldGet(this,E,"f")}`);return t||e},customElements.define("signup-block",SignupBlock,{extends:"li"});var A,F,j,P,R,B,rewards_classPrivateFieldGet=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)},rewards_classPrivateFieldSet=function(e,t,i,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(e,i):s?s.value=i:t.set(e,i),i};class RewardsModule extends c.Z{constructor(){super(...arguments),A.add(this),this.components=[l.Z],F.set(this,null),j.set(this,null),P.set(this,150)}initialize(){super.initialize(),rewards_classPrivateFieldGet(this,A,"m",R).call(this)}}F=new WeakMap,j=new WeakMap,P=new WeakMap,A=new WeakSet,R=function _RewardsModule_referAFriend(){if(rewards_classPrivateFieldSet(this,F,document.querySelector(".lws_woorewards_sponsorship_feedback"),"f"),null===rewards_classPrivateFieldGet(this,F,"f"))return;new MutationObserver(rewards_classPrivateFieldGet(this,A,"m",B).bind(this)).observe(rewards_classPrivateFieldGet(this,F,"f"),{attributes:!0})},B=function _RewardsModule_referAFriendCallback(e){e.forEach((e=>{"class"===e.attributeName&&rewards_classPrivateFieldGet(this,F,"f")&&rewards_classPrivateFieldGet(this,F,"f").classList.contains("lws_woorewards_sponsorship_succeed")&&(null!==rewards_classPrivateFieldGet(this,j,"f")&&window.clearTimeout(rewards_classPrivateFieldGet(this,j,"f")),rewards_classPrivateFieldSet(this,j,window.setTimeout((()=>{var e;null===(e=rewards_classPrivateFieldGet(this,F,"f").closest("lavandre-toggle"))||void 0===e||e.dispatchEvent(new Event("toggle"))}),rewards_classPrivateFieldGet(this,P,"f")),"f"))}))},function rewardsInit(){(new RewardsModule).initialize()}()},5892:function(e,t){const i={ajax:`${window.location.origin}/wp-admin/admin-ajax.php`};t.Z=i}},function(e){e.O(0,[650],(function(){return t=8302,e(e.s=t);var t}));e.O()}]);