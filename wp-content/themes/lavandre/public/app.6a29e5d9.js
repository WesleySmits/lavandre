"use strict";(self.webpackChunklavandre=self.webpackChunklavandre||[]).push([[143],{8077:function(e,t,i){i(444),i(1686);var n=i(3991),s=i(4254),o=i(6305),r=i(418);let a=!1;const l="6Ldv2RkcAAAAABCCL1JR5DlmEET4Ny_2CmkVa8Nv";function loadRecaptcha(e){loopThroughElements(e,!0,(()=>{insertRecaptchaScript(e)}))}function insertRecaptchaScript(e){if(!a){const e=document.getElementsByTagName("head")[0],t=document.createElement("script");t.type="text/javascript",t.src=`https://www.google.com/recaptcha/api.js?render=${l}`,e.appendChild(t),a=!0}loopThroughElements(e,!1,(()=>{insertRecaptchaScript(e)}))}function loopThroughElements(e,t,i){for(let n=0;n<e.length;n++)["focus","click","touchend","blur","input","change","propertychange"].forEach((s=>{t?e[n].addEventListener(s,i):e[n].removeEventListener(s,i)}))}var c=i(5555),d=i(3069),h=i(8351);class AjaxLogin extends s.Z{constructor(e){super(),this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this.form=e}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){const e=Array.from(this.form.querySelectorAll("input"));window.Cypress||loadRecaptcha(e);for(let t=0;t<e.length;t++){const i=e[t],n=new d.Z(i);setTimeout((()=>{i.matches(":-webkit-autofill")&&i.dispatchEvent(new Event("input"))}),100),n.initialize()}const t=this.form.querySelector('[type="submit"]');null!==t&&(t.type="button",this.form.addEventListener("submit",(t=>{this.onSubmit(t,e)})),null==t||t.addEventListener("click",(i=>{t.setAttribute("loading","true"),this.onSubmit(i,e)})))}onSubmit(e,t){var i,n;e.preventDefault();let s=!0;for(let e=0;e<t.length;e++){const i=t[e];i.dispatchEvent(new Event("change")),s=i.validity.valid}if(!s)return!1;const o=new FormData(this.form),r=(null===(i=o.get("username"))||void 0===i?void 0:i.toString())||"",a=(null===(n=o.get("password"))||void 0===n?void 0:n.toString())||"";if(!r||!a)return!1;const{grecaptcha:d}=window,h={action:"ajaxlogin",recaptchaToken:"",username:r,password:a},u=this.form.querySelector('button[type="submit"]')||void 0;return window.Cypress?(0,c.Ye)(h,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this),e,u):d.ready((()=>{d.execute(l,{action:"AjaxLogin"}).then((t=>{h.recaptchaToken=t;const i=this.form.querySelector('button[type="submit"]')||void 0;(0,c.Ye)(h,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this),e,i)}))})),!1}isValid(){return!!this.form}onSuccess(e,t){const i=e;if(!1===i.success)throw new Error("something is wrong");const n=this.form.dataset.redirectUrl||"/my-account/";if("true"===this.form.dataset.redirect)return void(window.location.href=n);const s={text:"My account",href:n};new h.Z(i.data,r.p.success,s,2e4).initialize();const a=this.form.closest("[data-panel-name]");a&&a.dispatchEvent(new CustomEvent("toggle")),document.body.classList.add("logged-in");o.Z.push({event:"login",method:"AjaxLogin"})}onFailure(e){const t=JSON.parse(e).data||"This combination of email and password is not known to us. Please try again or request a new password.";new h.Z(t,r.p.warning).initialize()}static onInit(e=document){const t=Array.from(e.querySelectorAll("#ajax-login-form"));0!==t.length&&t.forEach((e=>{new AjaxLogin(e).initialize()}))}}class ConfirmValidation{constructor(e,t){this.field=e,this.confirmField=t}initialize(){if(!this.field||!this.confirmField)throw new Error("Missing fields");const e=["change","input"];for(let t=0;t<e.length;t++){const i=e[t];this.confirmField.addEventListener(i,(()=>{if(this.field.value!==this.confirmField.value){const e="Value is not equal";this.confirmField.setCustomValidity(e),this.confirmField.reportValidity()}else this.confirmField.setCustomValidity(""),this.confirmField.reportValidity()}))}}}class EmailValidation extends s.Z{constructor(e){super(),this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this.emailInput=e,this.form=this.emailInput.closest("form")}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){let e=null;this.emailInput.addEventListener("blur",(()=>{e&&window.clearTimeout(e),e=window.setTimeout((()=>{this.handleBlurEvent()}),500)}))}handleBlurEvent(){var e;const t=new FormData(this.form),{value:i}=this.emailInput,n=(null===(e=t.get("woocommerce-email-check-nonce"))||void 0===e?void 0:e.toString())||"";if(!i)return;const s={action:"ajaxemailcheck",email:i,security:n};(0,c.Ye)(s,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this))}onSuccess(){this.removeExistingMessages()}onFailure(e){this.setValidationMessage(e.message)}setValidationMessage(e){const t=this.emailInput.parentElement,i=null==t?void 0:t.parentElement;if(null===t||!i)return;this.removeExistingMessages(i);const n=document.createElement("div");n.className="alert alert--warning inline-form-error",n.textContent=e,i.insertBefore(n,t)}removeExistingMessages(e){var t;const i=e||(null===(t=this.emailInput.parentElement)||void 0===t?void 0:t.parentElement);if(!i)return;Array.from(i.querySelectorAll(".alert--warning")).forEach((e=>{e.remove()}))}isValid(){return!(!this.emailInput||!this.form)}static onInit(e=document){const t=e.querySelector("#reg_email");if(null===t)return;new EmailValidation(t).initialize()}}class AjaxRegister extends s.Z{constructor(e){super(),this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this.form=e}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){const e=this.form.querySelector('input[type="email"]');if(null!==e){new EmailValidation(e).initialize()}const t=this.form.querySelector("#register-password"),i=this.form.querySelector("#confirm-password");if(t&&i){new ConfirmValidation(t,i).initialize()}const n=Array.from(this.form.querySelectorAll("input"));window.Cypress||loadRecaptcha(n);for(let e=0;e<n.length;e++){const t=n[e];new d.Z(t).initialize()}this.form.addEventListener("submit",(e=>{var t,i,s,o;e.preventDefault();let r=!0;for(let e=0;e<n.length;e++){const t=n[e];t.dispatchEvent(new Event("change")),r=t.validity.valid}if(!r)return!1;const a=new FormData(this.form),d=(null===(t=a.get("email"))||void 0===t?void 0:t.toString())||"",h=(null===(i=a.get("first_name"))||void 0===i?void 0:i.toString())||"",u=(null===(s=a.get("last_name"))||void 0===s?void 0:s.toString())||"",m=(null===(o=a.get("password"))||void 0===o?void 0:o.toString())||"";if(!d||!m)return!1;const{grecaptcha:p}=window,f={action:"ajaxregister",recaptchaToken:"",email:d,password:m,first_name:h,last_name:u},g=this.form.querySelector('button[type="submit"]')||void 0;return window.Cypress?(0,c.Ye)(f,this.ajaxEndpoint,null,this.onSuccess.bind(this),void 0,e,g):p.ready((()=>{p.execute(l,{action:"AjaxRegister"}).then((t=>{f.recaptchaToken=t,(0,c.Ye)(f,this.ajaxEndpoint,null,this.onSuccess.bind(this),void 0,e,g)}))})),!1}))}isValid(){return!!this.form}onSuccess(e,t){if(!1===e.success)throw new Error("something is wrong");o.Z.push({event:"sign-up",method:"AjaxRegister"});const i=this.form.dataset.redirectUrl||"/my-account/";window.location.href=i}static onInit(e=document){const t=e.querySelector("#ajax-register-form");if(null===t)return;new AjaxRegister(t).initialize()}}function getCookieValue(e){const t=document.cookie.split("; ").find((t=>t.startsWith(e)));return void 0===t?null:t.split("=")[1]}function setCookieValue(e,t,i){const n=Object.assign({path:"/"},i);let s=`${e}=${t}`;for(const e in n){s+=`; ${e}`;const t=n[e];!0!==t&&(s+=`=${t}`)}document.cookie=s}var u,m,p,f,g,w,__classPrivateFieldSet=function(e,t,i,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(e,i):s?s.value=i:t.set(e,i),i},__classPrivateFieldGet=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)};class CookieBar extends s.Z{constructor(e=document){super(),u.add(this),m.set(this,null),p.set(this,void 0),f.set(this,null),__classPrivateFieldSet(this,p,e.querySelector("#cookie-bar-template"),"f")}initialize(){var e;null!==__classPrivateFieldGet(this,p,"f")&&(getCookieValue(CookieBar.cookieName)?__classPrivateFieldGet(this,p,"f").remove():(__classPrivateFieldSet(this,m,__classPrivateFieldGet(this,u,"m",g).call(this),"f"),__classPrivateFieldSet(this,f,__classPrivateFieldGet(this,m,"f").querySelector('[data-role="cookies-accept"]'),"f"),null===(e=__classPrivateFieldGet(this,f,"f"))||void 0===e||e.addEventListener("click",__classPrivateFieldGet(this,u,"m",w).bind(this))))}static setAcceptCookie(){setCookieValue(CookieBar.cookieName,"true",{"max-age":31536e3})}static onInit(e=document){new CookieBar(e).initialize()}}m=new WeakMap,p=new WeakMap,f=new WeakMap,u=new WeakSet,g=function _CookieBar_getElement(){const e=__classPrivateFieldGet(this,p,"f").cloneNode(!0),{content:t}=e;return __classPrivateFieldGet(this,p,"f").parentElement.appendChild(t),document.querySelector('[data-role="cookie-bar"]')},w=function _CookieBar_acceptCookies(){var e;CookieBar.setAcceptCookie(),null===(e=__classPrivateFieldGet(this,m,"f"))||void 0===e||e.remove()},CookieBar.cookieName="approved_cookies";class Curtain extends s.Z{constructor(e,t,i=!1){super(),this.element=e,this.foldButton=t,this.onlyOnMobile=i,this.defaultHeight=void 0!==getComputedStyle(this.element).maxHeight&&"none"!==getComputedStyle(this.element).maxHeight?getComputedStyle(this.element).maxHeight:"0px"}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){this.foldButton.addEventListener("click",(e=>{this.onlyOnMobile&&window.innerWidth>=1024||(e.preventDefault(),this.element.classList.contains("active")?(this.foldButton.classList.remove("active"),this.element.classList.remove("active"),this.element.style.maxHeight=`${this.element.scrollHeight}px`,setTimeout((()=>{this.element.style.maxHeight=this.defaultHeight}),1)):(this.foldButton.classList.add("active"),this.element.classList.add("active"),this.element.style.maxHeight=this.defaultHeight,setTimeout((()=>{this.element.style.maxHeight=`${this.element.scrollHeight}px`}),1)),this.foldButton.dataset.readLess&&this.foldButton.dataset.readMore&&(this.foldButton.innerText!==this.foldButton.dataset.readMore?this.foldButton.innerText=this.foldButton.dataset.readMore:this.foldButton.innerText=this.foldButton.dataset.readLess))}))}isValid(){return!(!this.element||!this.foldButton)}static onInit(e=document){const t=Array.from(e.querySelectorAll("[data-curtain-toggle]"));for(let i=0;i<t.length;i++){const n=t[i],s=e.querySelector(`[data-curtain-content="${n.dataset.curtainToggle}"]`);if(!s)continue;const o=!(!s.dataset.onlyOnMobile||"true"!==s.dataset.onlyOnMobile);new Curtain(s,n,o).initialize()}}}class ForgotPassword extends s.Z{constructor(e){super(),this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this.passwordForgetAnchor=e,this.form=this.passwordForgetAnchor.closest("form")}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){this.passwordForgetAnchor.addEventListener("click",(e=>{var t;e.preventDefault();const i=(null===(t=new FormData(this.form).get("username"))||void 0===t?void 0:t.toString())||"",n=this.form.username;if(new d.Z(n).initialize(),n.dispatchEvent(new Event("validate")),!i)throw new Error("Username not set");const s={action:"ajaxforgotpassword",user_login:i};(0,c.Ye)(s,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this))}))}onSuccess(e){const t=e;new h.Z(t.data,r.p.success).initialize()}onFailure(e){const t=JSON.parse(e);new h.Z(t.data,r.p.warning).initialize()}isValid(){return!(!this.passwordForgetAnchor||!this.form)}static onInit(e=document){const t=Array.from(e.querySelectorAll('[data-role="password-forget"]'));for(let e=0;e<t.length;e++){const i=t[e];new ForgotPassword(i).initialize()}}}class ForgotPasswordToggle extends s.Z{constructor(e){super(),this.toggle=e,this.passwordForgetWrapper=document.getElementById("password-forget-form"),this.loginWrapper=document.getElementById("login-register-form")}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){this.toggle.addEventListener("click",(e=>{e.preventDefault(),this.loginWrapper.toggleAttribute("hidden"),this.passwordForgetWrapper.toggleAttribute("hidden")}))}isValid(){return!(!this.passwordForgetWrapper||!this.loginWrapper)}static onInit(e=document){const t=Array.from(e.querySelectorAll('[data-role="password-forget-toggle"]'));for(let e=0;e<t.length;e++){const i=t[e];new ForgotPasswordToggle(i).initialize()}}}class HeaderSearch extends s.Z{constructor(e){super(),this.element=e}initialize(){const documentClickHandler=e=>{const t=e.target;if(null===t)return;null!==t.closest(".header__search")||(this.element.classList.remove("active"),document.body.removeEventListener("click",documentClickHandler))};this.element.addEventListener("click",(e=>{e.stopImmediatePropagation(),this.element.classList.add("active");const t=this.element.querySelector(".product-search-field");null!==t&&t.focus(),document.body.removeEventListener("click",documentClickHandler),document.body.addEventListener("click",documentClickHandler)}))}static onInit(e=document){const t=e.querySelector(".header__search");if(null===t)return;new HeaderSearch(t).initialize()}}class InfoPopup extends s.Z{constructor(e,t="mouseover"){super(),this.element=e,this.event=t,this.content=this.element.dataset.content||""}initialize(){!1!==this.isValid()&&this.element.addEventListener(this.event,this.showTippy.bind(this))}showTippy(e){const t=window.tippy(this.element,{content:this.content,theme:"light",allowHTML:!0,hideOnClick:!0,showOnCreate:!0,interactive:!0,onHidden:e=>{e.destroy()}});void 0!==t&&(t.show(),t.hideWithInteractivity(e))}isValid(){return!(!this.element||!this.content)}static onInit(e=document){const t=Array.from(e.querySelectorAll('[data-role="tippy"]'));for(let e=0;e<t.length;e++){const i=t[e];if(!i)continue;new InfoPopup(i,"mouseover").initialize()}}}class LazyLoader extends s.Z{constructor(e){super(),this.element=e,this.elements=this.getElements(),this.elements.length&&this.initialize()}initialize(){if("IntersectionObserver"in window)this.onIntersectionObserver(IntersectionObserver);else for(let e=0;e<this.elements.length;e++){const t=this.elements[e];this.lazyload(t)}}onIntersectionObserver(e=IntersectionObserver){const t=new e(((e,t)=>{e.forEach((e=>{e.isIntersecting&&(this.element instanceof HTMLPictureElement?this.elements.forEach((e=>{this.lazyload(e)})):this.lazyload(e.target),t.unobserve(e.target),t.disconnect())}))}),{root:null,rootMargin:"250px 0px",threshold:0});this.element instanceof HTMLPictureElement?t.observe(this.element):this.elements.forEach((e=>{t.observe(e)}))}lazyload(e){const t=e;if(this.manageCssClasses(e),window.HTMLPictureElement&&this.element instanceof HTMLPictureElement){const e=this.element.querySelector("img");if(null===e)return;this.manageCssClasses(e)}const i=this.element.closest(".loading-spinner");i&&i.classList.remove("loading-spinner"),(t instanceof HTMLImageElement||t instanceof HTMLSourceElement)&&t.dataset.sizes&&(t.sizes=t.dataset.sizes,t.removeAttribute("data-sizes")),(t instanceof HTMLImageElement||t instanceof HTMLSourceElement)&&t.dataset.srcset&&(t.srcset=t.dataset.srcset,t.removeAttribute("data-srcset")),(t instanceof HTMLImageElement||t instanceof HTMLSourceElement)&&t.dataset.src&&(t.src=t.dataset.src,t.removeAttribute("data-src"))}getElements(){return this.element?this.element instanceof HTMLImageElement&&(this.element.dataset.src||this.element.dataset.srcset)?[this.element]:window.HTMLPictureElement&&this.element instanceof HTMLPictureElement?Array.from(this.element.querySelectorAll("img[data-src], source[data-srcset]")):Array.from(this.element.querySelectorAll("img[data-src]")):[]}manageCssClasses(e){e.classList.add("loaded"),e.classList.remove("loading")}static onInit(){super.onInit();const e=Array.from(document.querySelectorAll("[data-lazyload]"));for(let t=0;t<e.length;t++){const i=e[t];new LazyLoader(i)}}}class NewsletterSubscribe extends s.Z{constructor(e){super(),this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this.dataLayer=o.Z,this.form=e,this.emailField=this.form.querySelector('[name="email"]')}initialize(){if(!this.isValid())throw new Error("Newsletter subscribe component not valid");this.setEventListeners()}setEventListeners(){new d.Z(this.emailField).initialize(),this.form.addEventListener("submit",(e=>{var t,i,n;e.preventDefault();const s=new FormData(this.form),o=(null===(t=s.get("first-name"))||void 0===t?void 0:t.toString())||"",r=(null===(i=s.get("company-name"))||void 0===i?void 0:i.toString())||"",a=(null===(n=s.get("email"))||void 0===n?void 0:n.toString())||"";if(!a)return;const l={action:"mailchimpsubscribe",email:a,firstName:o,companyName:r};d.Z.removeErrorText(this.emailField),(0,c.Ye)(l,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this))}))}isValid(){return!(!this.form||!this.emailField)}onSuccess(e,t){d.Z.appendSuccessText(this.emailField,e.data.toString()),this.emailField.value="";const i={event:"GAEvent",eventCategory:"newsletter",eventAction:"subscribe",eventLabel:this.form.id||"generic"};this.dataLayer.push(i)}onFailure(e){throw d.Z.appendErrorText(this.emailField,e.message),e}static onInit(e=document){const t=Array.from(e.querySelectorAll("#footer-newsletter-form, #homepage-newsletter-form, #ajax-newsletter-form"));for(let e=0;e<t.length;e++){const i=t[e];new NewsletterSubscribe(i).initialize()}}}class PasswordReveal extends s.Z{constructor(e){super(),this.element=e,this.passwordInput=this.element.querySelector('input[type="password"]')}initialize(){const e=this.createRevealButton();this.element.appendChild(e),e.addEventListener("click",(()=>{e.classList.toggle("opened"),"password"!==this.passwordInput.type?this.passwordInput.type="password":this.passwordInput.type="text"}))}createRevealButton(){const e=document.createElement("BUTTON");return e.type="button",e.className="password-reveal-toggle",e.tabIndex=-1,e}static onInit(e=document){const t=Array.from(e.querySelectorAll(".password-row"));for(let e=0;e<t.length;e++){const i=t[e];if(null===i)return;new PasswordReveal(i).initialize()}}}var v,E,ScrollToContent_classPrivateFieldSet=function(e,t,i,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(e,i):s?s.value=i:t.set(e,i),i},ScrollToContent_classPrivateFieldGet=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)};class ScrollToContent extends s.Z{constructor(e,t){super(),v.set(this,void 0),E.set(this,void 0),ScrollToContent_classPrivateFieldSet(this,v,e,"f"),ScrollToContent_classPrivateFieldSet(this,E,t,"f")}initialize(){ScrollToContent_classPrivateFieldGet(this,v,"f").addEventListener("click",(e=>{e.preventDefault();const t=!ScrollToContent_classPrivateFieldGet(this,v,"f").dataset.headerOffset;!function scrollToTarget(e,t=0,i=!0){const n=document.body.getBoundingClientRect().top,s=e.getBoundingClientRect().top-n;let o=t;if(i){const e=document.getElementById("header");e&&(o+=e.clientHeight)}const r=s-o+1;window.scrollTo({top:r,behavior:"smooth"})}(ScrollToContent_classPrivateFieldGet(this,E,"f"),0,t)}))}static onInit(e=document){Array.from(e.querySelectorAll("[data-scroll-to]")).forEach((e=>{const t=e.dataset.scrollTo||"",i=document.getElementById(t);if(!i)return;new ScrollToContent(e,i).initialize()}))}}v=new WeakMap,E=new WeakMap;var y=i(2377),b=i(3773);class Popup extends b.Z{constructor(){super(...arguments),this.dataAttribute="data-popup-name",this.classes={open:"popup--opened",closed:"popup--closed"}}static openPopup(e,t=null,i=document){var s;let o=i.querySelector(`[data-popup-name="${e}"]`);if(null===o){const i=document.querySelector(`[data-popup-template="${e}"]`);if(null===i)return t&&t instanceof HTMLAnchorElement?void(window.location.href=t.href):void 0;const r=i.cloneNode(!0),{content:a}=r;if(null===(s=i.parentElement)||void 0===s||s.appendChild(a),o=document.querySelector(`[data-popup-name="${e}"]`),n.Z.emit("template-instantiated",o),null===o)return;new Popup(o).initialize()}if(!o.open){const e=new CustomEvent("open");o.dispatchEvent(e)}}static onInit(){super.onInit();const e=Array.from(document.querySelectorAll("[data-popup]"));for(let t=0;t<e.length;t++){const i=e[t];i.removeEventListener("click",this.handleCreationEvent),i.addEventListener("click",this.handleCreationEvent)}}static handleCreationEvent(e){e.preventDefault();const t=this.dataset.popup||"";Popup.openPopup(t,this)}}class NewsLetterPopup extends Popup{static onInit(e=document){getCookieValue("newsletter-popup-seen")||setTimeout((()=>{NewsLetterPopup.openPopup("newsletter-popup",null,e),setCookieValue("newsletter-popup-seen","true",{"max-age":31536e3})}),3e3)}}var L=i(6673);function stripTrailingSlash(e){return e.endsWith("/")?e.slice(0,-1):e}var S,x,C,A,T,k,z,I,q,F,M,j,AccordionElement_classPrivateFieldGet=function(e,t,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof t?e!==t||!n:!t.has(e))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(e):n?n.value:t.get(e)},AccordionElement_classPrivateFieldSet=function(e,t,i,n,s){if("m"===n)throw new TypeError("Private method is not writable");if("a"===n&&!s)throw new TypeError("Private accessor was defined without a setter");if("function"==typeof t?e!==t||!s:!t.has(e))throw new TypeError("Cannot write private member to an object whose class did not declare it");return"a"===n?s.call(e,i):s?s.value=i:t.set(e,i),i};class CurtainElement extends HTMLDetailsElement{constructor(){super(...arguments),S.add(this),x.set(this,this.querySelector("summary")),C.set(this,this.querySelector(".curtain-content")),A.set(this,!1),T.set(this,null),k.set(this,(e=>{e.stopPropagation(),e.stopImmediatePropagation(),e.target instanceof HTMLAnchorElement&&e.preventDefault(),AccordionElement_classPrivateFieldGet(this,C,"f")?AccordionElement_classPrivateFieldGet(this,A,"f")||!1===this.open?AccordionElement_classPrivateFieldGet(this,S,"m",z).call(this):this.close():this.dispatchEvent(new Event("close"))}))}get open(){return this.hasAttribute("open")}set open(e){this.toggleAttribute("open",e)}connectedCallback(){AccordionElement_classPrivateFieldGet(this,x,"f").addEventListener("click",AccordionElement_classPrivateFieldGet(this,k,"f"),{capture:!0,passive:!1})}disconnectedCallback(){AccordionElement_classPrivateFieldGet(this,x,"f").removeEventListener("click",AccordionElement_classPrivateFieldGet(this,k,"f"))}close(){AccordionElement_classPrivateFieldSet(this,A,!0,"f"),this.classList.add("closing");const e=`${this.offsetHeight}px`,t=`${AccordionElement_classPrivateFieldGet(this,x,"f").offsetHeight}px`;AccordionElement_classPrivateFieldGet(this,T,"f")&&AccordionElement_classPrivateFieldGet(this,T,"f").cancel(),AccordionElement_classPrivateFieldSet(this,T,this.animate({height:[e,t]},{duration:400,easing:"ease-out"}),"f"),AccordionElement_classPrivateFieldGet(this,T,"f").onfinish=()=>AccordionElement_classPrivateFieldGet(this,S,"m",q).call(this,!1),AccordionElement_classPrivateFieldGet(this,T,"f").oncancel=()=>{AccordionElement_classPrivateFieldSet(this,A,!1,"f"),this.classList.remove("closing")}}}x=new WeakMap,C=new WeakMap,A=new WeakMap,T=new WeakMap,k=new WeakMap,S=new WeakSet,z=function _CurtainElement_open(){this.style.height=`${this.offsetHeight}px`,this.open=!0,window.requestAnimationFrame((()=>AccordionElement_classPrivateFieldGet(this,S,"m",I).call(this)))},I=function _CurtainElement_expand(){const e=`${this.offsetHeight}px`,t=`${AccordionElement_classPrivateFieldGet(this,x,"f").offsetHeight+function getAbsoluteHeight(e){const t=window.getComputedStyle(e),i=parseFloat(t.marginTop)+parseFloat(t.marginBottom);return Math.ceil(e.offsetHeight+i)}(AccordionElement_classPrivateFieldGet(this,C,"f"))}px`;AccordionElement_classPrivateFieldGet(this,T,"f")&&AccordionElement_classPrivateFieldGet(this,T,"f").cancel(),AccordionElement_classPrivateFieldSet(this,T,this.animate({height:[e,t]},{duration:400,easing:"ease-out"}),"f"),AccordionElement_classPrivateFieldGet(this,T,"f").onfinish=()=>AccordionElement_classPrivateFieldGet(this,S,"m",q).call(this,!0)},q=function _CurtainElement_onAnimationFinish(e){this.open=e,AccordionElement_classPrivateFieldSet(this,T,null,"f"),AccordionElement_classPrivateFieldSet(this,A,!1,"f"),this.classList.remove("closing"),this.style.height="",this.dispatchEvent(new Event("toggle"))};class AccordionElement extends HTMLElement{constructor(){super(...arguments),F.add(this),M.set(this,[])}connectedCallback(){AccordionElement_classPrivateFieldSet(this,M,Array.from(this.querySelectorAll("details")),"f"),AccordionElement_classPrivateFieldGet(this,M,"f").forEach((e=>{e.addEventListener("toggle",(()=>{e.open&&AccordionElement_classPrivateFieldGet(this,F,"m",j).call(this,e)}))}))}}M=new WeakMap,F=new WeakSet,j=function _AccordionElement_closeOtherCurtains(e){AccordionElement_classPrivateFieldGet(this,M,"f").filter((t=>e!==t)).forEach((e=>{e.open=!1}))},customElements.define("accordion-element",AccordionElement),customElements.define("curtain-element",CurtainElement,{extends:"details"});class App extends y.Z{constructor(){super(...arguments),this.eventEmitter=n.Z,this.components=[CookieBar,L.Z,Curtain,InfoPopup,PasswordReveal,EmailValidation,NewsletterSubscribe,ForgotPassword,ForgotPasswordToggle,AjaxLogin,AjaxRegister,d.Z,HeaderSearch,LazyLoader,NewsLetterPopup,ScrollToContent]}initialize(){super.initialize(),function setCurrentLinkClass(){const e=window.location.pathname,t=stripTrailingSlash(e),i=window.location.href,n=stripTrailingSlash(i);Array.from(document.querySelectorAll(`\n        nav a[href="${e}"],\n        nav a[href="${t}"],\n        nav a[href="${i}"],\n        nav a[href="${n}"]\n    `)).forEach((e=>{e.classList.add("current-link")}))}();Array.from(document.querySelectorAll('[name="wpforms[submit]"]')).forEach((e=>{e.removeAttribute("class"),e.setAttribute("is","lavandre-button"),e.setAttribute("size","large"),e.setAttribute("full-width","large"),e.setAttribute("outline","true")}))}}!function appInit(){(new App).initialize();const e=document.querySelector(".usp-slider");if(!e)return;const t=Array.from(e.querySelectorAll(".usp-slider__item"));let i=0;t.forEach((e=>{i+=e.clientWidth})),e.style.width=`${i}px`}()},8351:function(e,t,i){i.d(t,{Z:function(){return Toast}});i(444);var n=i(4286);class Toast{constructor(e,t,i,n=5e3){this.element=null,this.message=e,this.type=t,this.timeout=n,i&&(this.ctaButton=i)}initialize(){if(!this.isValid())return;const e=this.create();document.body.appendChild(e),e.classList.add("toast--visible"),setTimeout((()=>{this.remove()}),this.timeout)}remove(){null!==this.element&&(this.element.addEventListener("transitionend",(()=>{document.body.removeChild(this.element)})),this.element.classList.remove("toast--visible"))}create(){this.element=document.createElement("DIV"),this.element.classList.add("toast");const e=document.createElement("DIV");e.classList.add("toast__container");const t=document.createElement("IMG");t.src=`/wp-content/themes/lavandre/public/images/icons/${this.type}.svg`,t.alt=`${this.type} icon`,t.classList.add("toast__icon"),t.width=24,t.height=24;const i=document.createElement("P"),s=document.createElement("STRONG");s.classList.add("toast__message"),s.innerText=this.message,i.appendChild(s);const o=document.createElement("BUTTON");if(o.classList.add("eicon-close","toast__close"),o.addEventListener("click",(()=>{this.remove()})),e.appendChild(t),e.appendChild(i),e.appendChild(o),this.ctaButton){const t=new n._;t.href=this.ctaButton.href,t.primary=!0,t.size="large",t.innerText=this.ctaButton.text,e.appendChild(t)}return this.element.appendChild(e),this.element}isValid(){return!(!this.message||!this.type)}}},418:function(e,t,i){var n;i.d(t,{p:function(){return n}}),function(e){e.success="success",e.warning="warning",e.danger="danger"}(n||(n={}))}},function(e){e.O(0,[908,100,104],(function(){return t=8077,e(e.s=t);var t}));e.O()}]);