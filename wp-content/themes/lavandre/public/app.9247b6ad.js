(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"+JvB":function(e,t,i){},"0zzD":function(e,t,i){},"4god":function(e,t,i){},"72Vg":function(e,t,i){},FqfQ:function(e,t,i){"use strict";i.d(t,"a",(function(){return Toast}));i("4god");class Toast{constructor(e,t,i,n=5e3){this.element=null,this.message=e,this.type=t,this.timeout=n,i&&(this.ctaButton=i)}initialize(){if(!this.isValid())return;const e=this.create();document.body.appendChild(e),e.classList.add("toast--visible"),setTimeout(()=>{this.remove()},this.timeout)}remove(){null!==this.element&&(this.element.addEventListener("transitionend",()=>{document.body.removeChild(this.element)}),this.element.classList.remove("toast--visible"))}create(){this.element=document.createElement("DIV"),this.element.classList.add("toast");const e=document.createElement("DIV");e.classList.add("toast__container");const t=document.createElement("IMG");t.src=`/wp-content/themes/lavandre/public/images/icons/${this.type}.svg`,t.alt=this.type+" icon",t.classList.add("toast__icon"),t.width=24,t.height=24;const i=document.createElement("P"),n=document.createElement("STRONG");n.classList.add("toast__message"),n.innerText=this.message,i.appendChild(n);const s=document.createElement("BUTTON");if(s.classList.add("eicon-close","toast__close"),s.addEventListener("click",()=>{this.remove()}),e.appendChild(t),e.appendChild(i),e.appendChild(s),this.ctaButton){const t=document.createElement("A");t.href=this.ctaButton.href,t.classList.add("cta-button","inline"),t.innerText=this.ctaButton.text,e.appendChild(t)}return this.element.appendChild(e),this.element}isValid(){return!(!this.message||!this.type)}}},GQjy:function(e,t,i){},KCLg:function(e,t,i){"use strict";var n;i.d(t,"a",(function(){return n})),function(e){e.success="success",e.warning="warning",e.danger="danger"}(n||(n={}))},b24w:function(e,t,i){},nMhI:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return app_App}));i("xzs/");var n=i("tNnY"),s=i("Gi9F");var o=new class DataLayer{constructor(){this.dataLayer=window.dataLayer?window.dataLayer:[]}push(e){this.dataLayer.push(e)}},a=i("KCLg");let r=!1;const l="6Ldv2RkcAAAAABCCL1JR5DlmEET4Ny_2CmkVa8Nv";function loadRecaptcha(e){loopThroughElements(e,!0,()=>{!function insertRecaptchaScript(e){if(!r){var t=document.getElementsByTagName("head")[0],i=document.createElement("script");i.type="text/javascript",i.src="https://www.google.com/recaptcha/api.js?render="+l,t.appendChild(i),r=!0}loopThroughElements(e,!1,()=>{insertRecaptchaScript(e)})}(e)})}function loopThroughElements(e,t,i){for(let n=0;n<e.length;n++)["focus","click","touchend","blur","input","change","propertychange"].forEach((function(s){t?e[n].addEventListener(s,i):e[n].removeEventListener(s,i)}))}var c=i("tBEf"),d=i("aaiB"),u=i("FqfQ");class AjaxLogin_AjaxLogin extends s.a{constructor(e){super(),this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this.form=e}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){const e=Array.from(this.form.querySelectorAll("input"));loadRecaptcha(e);for(let t=0;t<e.length;t++){const i=e[t];new d.a(i).initialize()}this.form.addEventListener("submit",t=>{var i,n;t.preventDefault();let s=!0;for(let t=0;t<e.length;t++){const i=e[t];i.dispatchEvent(new Event("change")),s=i.validity.valid}if(!s)return;const o=new FormData(this.form),a=(null===(i=o.get("username"))||void 0===i?void 0:i.toString())||"",r=(null===(n=o.get("password"))||void 0===n?void 0:n.toString())||"";if(!a||!r)return;const d=window.grecaptcha;return d.ready(()=>{d.execute(l,{action:"AjaxLogin"}).then(e=>{const i={action:"ajaxlogin",recaptchaToken:e,username:a,password:r},n=this.form.querySelector('button[type="submit"]')||void 0;Object(c.a)(i,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this),t,n)})}),!1})}isValid(){return!!this.form}onSuccess(e,t){const i=e;if(!1===i.success)throw new Error("something is wrong");new u.a(i.data,a.a.success,{text:"My account",href:"/my-account/"},2e4).initialize();const n=this.form.closest("[data-panel-name]");n&&n.dispatchEvent(new CustomEvent("toggle")),document.body.classList.add("logged-in");o.push({event:"login",method:"AjaxLogin"})}onFailure(e){const t=JSON.parse(e).data||"This combination of email and password is not known to us. Please try again or request a new password.";new u.a(t,a.a.warning).initialize()}static onInit(e=document){const t=e.querySelector("#ajax-login-form");if(null===t)return;new AjaxLogin_AjaxLogin(t).initialize()}}class ConfirmValidation{constructor(e,t){this.field=e,this.confirmField=t}initialize(){if(!this.field||!this.confirmField)throw new Error("Missing fields");const e=["change","input"];for(let t=0;t<e.length;t++){const i=e[t];this.confirmField.addEventListener(i,()=>{if(this.field.value!==this.confirmField.value){const e="Value is not equal";this.confirmField.setCustomValidity(e),this.confirmField.reportValidity()}else this.confirmField.setCustomValidity(""),this.confirmField.reportValidity()})}}}class EmailValidation_EmailValidation extends s.a{constructor(e){super(),this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this.emailInput=e,this.form=this.emailInput.closest("form")}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){let e=null;this.emailInput.addEventListener("blur",()=>{e&&window.clearTimeout(e),e=window.setTimeout(()=>{this.handleBlurEvent()},500)})}handleBlurEvent(){var e;const t=new FormData(this.form),i=this.emailInput.value,n=(null===(e=t.get("woocommerce-email-check-nonce"))||void 0===e?void 0:e.toString())||"";if(!i)return;const s={action:"ajaxemailcheck",email:i,security:n};Object(c.a)(s,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this))}onSuccess(){this.removeExistingMessages()}onFailure(e){this.setValidationMessage(e.message)}setValidationMessage(e){const t=this.emailInput.parentElement,i=null==t?void 0:t.parentElement;if(null===t||!i)return;this.removeExistingMessages(i);const n=document.createElement("div");n.className="alert alert--warning inline-form-error",n.textContent=e,i.insertBefore(n,t)}removeExistingMessages(e){var t;const i=e||(null===(t=this.emailInput.parentElement)||void 0===t?void 0:t.parentElement);if(!i)return;Array.from(i.querySelectorAll(".alert--warning")).forEach(e=>{e.remove()})}isValid(){return!(!this.emailInput||!this.form)}static onInit(e=document){const t=e.querySelector("#reg_email");if(null===t)return;new EmailValidation_EmailValidation(t).initialize()}}class AjaxRegister_AjaxRegister extends s.a{constructor(e){super(),this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this.form=e}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){const e=this.form.querySelector('input[type="email"]');if(null!==e){new EmailValidation_EmailValidation(e).initialize()}const t=this.form.querySelector("#register-password"),i=this.form.querySelector("#confirm-password");if(t&&i){new ConfirmValidation(t,i).initialize()}const n=Array.from(this.form.querySelectorAll("input"));loadRecaptcha(n);for(let e=0;e<n.length;e++){const t=n[e];new d.a(t).initialize()}this.form.addEventListener("submit",e=>{var t,i,s,o;e.preventDefault();let a=!0;for(let e=0;e<n.length;e++){const t=n[e];t.dispatchEvent(new Event("change")),a=t.validity.valid}if(!a)return;const r=new FormData(this.form),d=(null===(t=r.get("email"))||void 0===t?void 0:t.toString())||"",u=(null===(i=r.get("first_name"))||void 0===i?void 0:i.toString())||"",h=(null===(s=r.get("last_name"))||void 0===s?void 0:s.toString())||"",m=(null===(o=r.get("password"))||void 0===o?void 0:o.toString())||"";if(!d||!m)return;const p=window.grecaptcha;return p.ready(()=>{p.execute(l,{action:"AjaxRegister"}).then(t=>{const i={action:"ajaxregister",recaptchaToken:t,email:d,password:m,first_name:u,last_name:h},n=this.form.querySelector('button[type="submit"]')||void 0;Object(c.a)(i,this.ajaxEndpoint,null,this.onSuccess.bind(this),void 0,e,n)})}),!1})}isValid(){return!!this.form}onSuccess(e,t){const i=e;if(!1===i.success)throw new Error("something is wrong");new u.a(i.data,a.a.success,{text:"My account",href:"/my-account/"},2e4).initialize();const n=this.form.closest("[data-panel-name]");n&&n.dispatchEvent(new CustomEvent("toggle")),document.body.classList.add("logged-in");o.push({event:"sign-up",method:"AjaxRegister"})}static onInit(e=document){const t=e.querySelector("#ajax-register-form");if(null===t)return;new AjaxRegister_AjaxRegister(t).initialize()}}i("b24w");class Curtain_Curtain extends s.a{constructor(e,t,i=!1){super(),this.element=e,this.foldButton=t,this.onlyOnMobile=i,this.defaultHeight=void 0!==getComputedStyle(this.element).maxHeight&&"none"!==getComputedStyle(this.element).maxHeight?getComputedStyle(this.element).maxHeight:"0px"}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){this.foldButton.addEventListener("click",e=>{this.onlyOnMobile&&window.innerWidth>=768||(e.preventDefault(),this.element.classList.contains("active")?(this.foldButton.classList.remove("active"),this.element.classList.remove("active"),this.element.style.maxHeight=this.element.scrollHeight+"px",setTimeout(()=>{this.element.style.maxHeight=this.defaultHeight},1)):(this.foldButton.classList.add("active"),this.element.classList.add("active"),this.element.style.maxHeight=this.defaultHeight,setTimeout(()=>{this.element.style.maxHeight=this.element.scrollHeight+"px"},1)),this.foldButton.dataset.readLess&&this.foldButton.dataset.readMore&&(this.foldButton.innerText!==this.foldButton.dataset.readMore?this.foldButton.innerText=this.foldButton.dataset.readMore:this.foldButton.innerText=this.foldButton.dataset.readLess))})}isValid(){return!(!this.element||!this.foldButton)}static onInit(e=document){const t=Array.from(e.querySelectorAll("[data-curtain-toggle]"));for(let i=0;i<t.length;i++){const n=t[i],s=e.querySelector(`[data-curtain-content="${n.dataset.curtainToggle}"]`);if(!s)continue;const o=!(!s.dataset.onlyOnMobile||"true"!==s.dataset.onlyOnMobile);new Curtain_Curtain(s,n,o).initialize()}}}class PasswordReveal_PasswordReveal extends s.a{constructor(e){super(),this.element=e,this.passwordInput=this.element.querySelector('input[type="password"]')}initialize(){const e=this.createRevealButton();this.element.appendChild(e),e.addEventListener("click",()=>{e.classList.toggle("opened"),"password"!==this.passwordInput.type?this.passwordInput.type="password":this.passwordInput.type="text"})}createRevealButton(){const e=document.createElement("BUTTON");return e.type="button",e.className="password-reveal-toggle",e.tabIndex=-1,e}static onInit(e=document){const t=Array.from(e.querySelectorAll(".password-row"));for(let e=0;e<t.length;e++){const i=t[e];if(null===i)return;new PasswordReveal_PasswordReveal(i).initialize()}}}class NewsletterSubscribe_NewsletterSubscribe extends s.a{constructor(e){super(),this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this.dataLayer=o,this.form=e,this.emailField=this.form.querySelector('[name="email"]')}initialize(){if(!this.isValid())throw new Error("Newsletter subscribe component not valid");this.setEventListeners()}setEventListeners(){new d.a(this.emailField).initialize(),this.form.addEventListener("submit",e=>{var t,i,n;e.preventDefault();const s=new FormData(this.form),o=(null===(t=s.get("first-name"))||void 0===t?void 0:t.toString())||"",a=(null===(i=s.get("company-name"))||void 0===i?void 0:i.toString())||"",r=(null===(n=s.get("email"))||void 0===n?void 0:n.toString())||"";if(!r)return;const l={action:"mailchimpsubscribe",email:r,firstName:o,companyName:a};d.a.removeErrorText(this.emailField),Object(c.a)(l,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this))})}isValid(){return!(!this.form||!this.emailField)}onSuccess(e,t){d.a.appendSuccessText(this.emailField,e.data.toString()),this.emailField.value="";const i={event:"GAEvent",eventCategory:"newsletter",eventAction:"subscribe",eventLabel:this.form.id||"generic"};this.dataLayer.push(i)}onFailure(e){throw d.a.appendErrorText(this.emailField,e.message),e}static onInit(e=document){const t=Array.from(e.querySelectorAll("#footer-newsletter-form, #homepage-newsletter-form, #ajax-newsletter-form"));for(let e=0;e<t.length;e++){const i=t[e];new NewsletterSubscribe_NewsletterSubscribe(i).initialize()}}}i("GQjy");class InfoPopup_InfoPopup extends s.a{constructor(e,t="mouseover"){super(),this.element=e,this.event=t,this.content=this.element.dataset.content||""}initialize(){!1!==this.isValid()&&this.element.addEventListener(this.event,this.showTippy.bind(this))}showTippy(e){let t=window.tippy(this.element,{content:this.content,theme:"light",allowHTML:!0,hideOnClick:!0,showOnCreate:!0,interactive:!0,onHidden:e=>{e.destroy()}});void 0!==t&&(t.show(),t.hideWithInteractivity(e))}isValid(){return!(!this.element||!this.content)}static onInit(e=document){const t=Array.from(e.querySelectorAll('[data-role="tippy"]'));for(let e=0;e<t.length;e++){const i=t[e];if(!i)continue;new InfoPopup_InfoPopup(i,"mouseover").initialize()}}}i("0zzD");function getCookieValue(e){const t=document.cookie.split("; ").find(t=>t.startsWith(e));return void 0===t?null:t.split("=")[1]}function setCookieValue(e,t,i){const n=Object.assign({path:"/"},i);let s=`${e}=${t}`;for(const e in n){s+="; "+e;const t=n[e];!0!==t&&(s+="="+t)}document.cookie=s}class CookieBar_CookieBar extends s.a{constructor(){super(),this.element=null,this.acceptButton=null,this.rejectButton=null,this.templateElement=document.getElementById("cookie-bar-template")}initialize(){var e,t;null!==this.templateElement&&(getCookieValue(CookieBar_CookieBar.cookieName)?this.templateElement.remove():(this.element=this.getElement(),this.acceptButton=this.element.querySelector('[data-role="cookies-accept"]'),this.rejectButton=this.element.querySelector('[data-role="cookies-reject"]'),null===(e=this.acceptButton)||void 0===e||e.addEventListener("click",this.acceptCookies.bind(this)),null===(t=this.rejectButton)||void 0===t||t.addEventListener("click",this.rejectCookies.bind(this))))}getElement(){const e=this.templateElement.cloneNode(!0).content;return this.templateElement.parentElement.appendChild(e),document.querySelector('[data-role="cookie-bar"]')}acceptCookies(){var e;CookieBar_CookieBar.setAcceptCookie(),null===(e=this.element)||void 0===e||e.remove()}rejectCookies(){var e;CookieBar_CookieBar.setRejectCookie(),null===(e=this.element)||void 0===e||e.remove()}static setAcceptCookie(){setCookieValue(CookieBar_CookieBar.cookieName,"true",{"max-age":31536e3})}static setRejectCookie(){setCookieValue(CookieBar_CookieBar.cookieName,"false",{"max-age":31536e3})}static onInit(){(new CookieBar_CookieBar).initialize()}}CookieBar_CookieBar.cookieName="approved_cookies";class ForgotPassword_ForgotPassword extends s.a{constructor(e){super(),this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this.passwordForgetAnchor=e,this.form=this.passwordForgetAnchor.closest("form")}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){this.passwordForgetAnchor.addEventListener("click",e=>{var t;e.preventDefault();const i=(null===(t=new FormData(this.form).get("username"))||void 0===t?void 0:t.toString())||"",n=this.form.username;if(new d.a(n).initialize(),n.dispatchEvent(new Event("validate")),!i)throw new Error("Username not set");const s={action:"ajaxforgotpassword",user_login:i};Object(c.a)(s,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this))})}onSuccess(e){const t=e;new u.a(t.data,a.a.success).initialize()}onFailure(e){const t=JSON.parse(e);new u.a(t.data,a.a.warning).initialize()}isValid(){return!(!this.passwordForgetAnchor||!this.form)}static onInit(e=document){const t=Array.from(e.querySelectorAll('a[data-role="password-forget"]'));for(let e=0;e<t.length;e++){const i=t[e];new ForgotPassword_ForgotPassword(i).initialize()}}}var h=i("RfZo");class HeaderSearch_HeaderSearch extends s.a{constructor(e){super(),this.element=e}initialize(){const documentClickHandler=e=>{const t=e.target;if(null===t)return;null!==t.closest(".header__search")||(this.element.classList.remove("active"),document.body.removeEventListener("click",documentClickHandler))};this.element.addEventListener("click",e=>{e.stopImmediatePropagation(),this.element.classList.add("active");const t=this.element.querySelector(".product-search-field");null!==t&&t.focus(),document.body.removeEventListener("click",documentClickHandler),document.body.addEventListener("click",documentClickHandler)})}static onInit(e=document){const t=e.querySelector(".header__search");if(null===t)return;new HeaderSearch_HeaderSearch(t).initialize()}}class SubMenu_SubMenu extends s.a{constructor(e){super(),this.element=e}initialize(){this.element.addEventListener("mouseenter",()=>{const e=this.element.querySelector(".ww-sub-menu");null!==e&&(e.classList.remove("hidden"),e.classList.add("active"))}),this.element.addEventListener("mouseleave",()=>{const e=this.element.querySelector(".ww-sub-menu");null!==e&&(e.classList.remove("active"),setTimeout(()=>{e.classList.add("hidden")},400))})}static onInit(e=document){Array.from(e.querySelectorAll("[data-sub-menu]")).forEach(e=>{new SubMenu_SubMenu(e).initialize()})}}function stripTrailingSlash(e){return e.endsWith("/")?e.slice(0,-1):e}var m=i("Q0Az");class LazyLoader_LazyLoader extends s.a{constructor(e){super(),this.element=e,this.elements=this.getElements(),this.elements.length&&this.initialize()}initialize(){if("IntersectionObserver"in window)this.onIntersectionObserver(IntersectionObserver);else for(let e=0;e<this.elements.length;e++){const t=this.elements[e];this.lazyload(t)}}onIntersectionObserver(e=IntersectionObserver){const t=new e((e,t)=>{e.forEach(e=>{e.isIntersecting&&(this.element instanceof HTMLPictureElement?this.elements.forEach(e=>{this.lazyload(e)}):this.lazyload(e.target),t.unobserve(e.target),t.disconnect())})},{root:null,rootMargin:"250px 0px",threshold:0});this.element instanceof HTMLPictureElement?t.observe(this.element):this.elements.forEach(e=>{t.observe(e)})}lazyload(e){const t=e;if(this.manageCssClasses(e),window.HTMLPictureElement&&this.element instanceof HTMLPictureElement){const e=this.element.querySelector("img");if(null===e)return;this.manageCssClasses(e)}const i=this.element.closest(".loading-spinner");i&&i.classList.remove("loading-spinner"),(t instanceof HTMLImageElement||t instanceof HTMLSourceElement)&&t.dataset.sizes&&(t.sizes=t.dataset.sizes,t.removeAttribute("data-sizes")),(t instanceof HTMLImageElement||t instanceof HTMLSourceElement)&&t.dataset.srcset&&(t.srcset=t.dataset.srcset,t.removeAttribute("data-srcset")),(t instanceof HTMLImageElement||t instanceof HTMLSourceElement)&&t.dataset.src&&(t.src=t.dataset.src,t.removeAttribute("data-src"))}getElements(){return this.element?this.element instanceof HTMLImageElement&&(this.element.dataset.src||this.element.dataset.srcset)?[this.element]:window.HTMLPictureElement&&this.element instanceof HTMLPictureElement?Array.from(this.element.querySelectorAll("img[data-src], source[data-srcset]")):Array.from(this.element.querySelectorAll("img[data-src]")):[]}manageCssClasses(e){e.classList.add("loaded"),e.classList.remove("loading")}static onInit(){super.onInit();const e=Array.from(document.querySelectorAll("[data-lazyload]"));for(let t=0;t<e.length;t++){const i=e[t];new LazyLoader_LazyLoader(i)}}}i("+JvB");var p=i("vjIr");class Popup_Popup extends p.a{constructor(){super(...arguments),this.dataAttribute="data-popup-name",this.classes={open:"popup--opened",closed:"popup--closed"}}static openPopup(e,t=null){var i;let s=document.querySelector(`[data-popup-name="${e}"]`);if(null===s){const o=document.querySelector(`[data-popup-template="${e}"]`);if(null===o)return t&&t instanceof HTMLAnchorElement?void(window.location.href=t.href):void 0;const a=o.cloneNode(!0).content;if(null===(i=o.parentElement)||void 0===i||i.appendChild(a),s=document.querySelector(`[data-popup-name="${e}"]`),n.a.emit("template-instantiated",s),null===s)return;new Popup_Popup(s).initialize()}const o=new CustomEvent("open");s.dispatchEvent(o)}static onInit(){super.onInit();const e=Array.from(document.querySelectorAll("[data-popup]"));for(let t=0;t<e.length;t++){const i=e[t];i.removeEventListener("click",this.handleCreationEvent),i.addEventListener("click",this.handleCreationEvent)}}static handleCreationEvent(e){e.preventDefault();const t=this.dataset.popup||"";Popup_Popup.openPopup(t,this)}}class NewsletterPopup_NewsLetterPopup extends Popup_Popup{static onInit(e=document){getCookieValue("newsletter-popup-seen")||setTimeout(()=>{NewsletterPopup_NewsLetterPopup.openPopup("newsletter-popup"),setCookieValue("newsletter-popup-seen","true",{"max-age":31536e3})},3e3)}}i("72Vg");var f,v,g,w,E,y,L,x,b,S,C,__classPrivateFieldSet=function(e,t,i,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(e,i):s?s.value=i:t.set(e,i),i},__classPrivateFieldGet=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)};class AccordionElement extends HTMLElement{constructor(){super(...arguments),f.add(this),v.set(this,[])}connectedCallback(){__classPrivateFieldSet(this,v,Array.from(this.querySelectorAll("details")),"f"),__classPrivateFieldGet(this,v,"f").forEach(e=>{e.addEventListener("toggle",()=>{e.open&&__classPrivateFieldGet(this,f,"m",g).call(this,e)})})}}v=new WeakMap,f=new WeakSet,g=function _AccordionElement_closeOtherCurtains(e){__classPrivateFieldGet(this,v,"f").filter(t=>e!==t).forEach(e=>{e.open=!1})};class CurtainElement extends HTMLDetailsElement{constructor(){super(...arguments),w.add(this),E.set(this,this.querySelector("summary")),y.set(this,this.querySelector(".curtain-content")),L.set(this,!1),x.set(this,null)}connectedCallback(){__classPrivateFieldGet(this,E,"f").addEventListener("click",e=>{e.preventDefault(),__classPrivateFieldGet(this,L,"f")||!1===this.open?__classPrivateFieldGet(this,w,"m",b).call(this):this.close()})}close(){__classPrivateFieldSet(this,L,!0,"f");const e=this.offsetHeight+"px",t=__classPrivateFieldGet(this,E,"f").offsetHeight+"px";__classPrivateFieldGet(this,x,"f")&&__classPrivateFieldGet(this,x,"f").cancel(),__classPrivateFieldSet(this,x,this.animate({height:[e,t]},{duration:400,easing:"ease-out"}),"f"),__classPrivateFieldGet(this,x,"f").onfinish=()=>__classPrivateFieldGet(this,w,"m",C).call(this,!1),__classPrivateFieldGet(this,x,"f").oncancel=()=>__classPrivateFieldSet(this,L,!1,"f")}}E=new WeakMap,y=new WeakMap,L=new WeakMap,x=new WeakMap,w=new WeakSet,b=function _CurtainElement_open(){this.style.height=this.offsetHeight+"px",this.open=!0,window.requestAnimationFrame(()=>__classPrivateFieldGet(this,w,"m",S).call(this))},S=function _CurtainElement_expand(){const e=this.offsetHeight+"px",t=__classPrivateFieldGet(this,E,"f").offsetHeight+__classPrivateFieldGet(this,y,"f").offsetHeight+"px";__classPrivateFieldGet(this,x,"f")&&__classPrivateFieldGet(this,x,"f").cancel(),__classPrivateFieldSet(this,x,this.animate({height:[e,t]},{duration:400,easing:"ease-out"}),"f"),__classPrivateFieldGet(this,x,"f").onfinish=()=>__classPrivateFieldGet(this,w,"m",C).call(this,!0)},C=function _CurtainElement_onAnimationFinish(e){this.open=e,__classPrivateFieldSet(this,x,null,"f"),__classPrivateFieldSet(this,L,!1,"f"),this.style.height="",this.dispatchEvent(new Event("toggle"))},customElements.define("accordion-element",AccordionElement),customElements.define("curtain-element",CurtainElement,{extends:"details"});class app_App extends m.a{constructor(){super(...arguments),this.eventEmitter=n.a,this.components=[CookieBar_CookieBar,h.a,Curtain_Curtain,InfoPopup_InfoPopup,PasswordReveal_PasswordReveal,EmailValidation_EmailValidation,NewsletterSubscribe_NewsletterSubscribe,ForgotPassword_ForgotPassword,AjaxLogin_AjaxLogin,AjaxRegister_AjaxRegister,d.a,HeaderSearch_HeaderSearch,SubMenu_SubMenu,LazyLoader_LazyLoader,NewsletterPopup_NewsLetterPopup,Popup_Popup]}initialize(){super.initialize(),function setCurrentLinkClass(){const e=window.location.pathname,t=stripTrailingSlash(e),i=window.location.href,n=stripTrailingSlash(i);Array.from(document.querySelectorAll(`\n        nav a[href="${e}"],\n        nav a[href="${t}"],\n        nav a[href="${i}"],\n        nav a[href="${n}"]\n    `)).forEach(e=>{e.classList.add("current-link")})}()}}!function appInit(){(new app_App).initialize()}()},"xzs/":function(e,t,i){}},[["nMhI","runtime",0]]]);