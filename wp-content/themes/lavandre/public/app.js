(window.webpackJsonp=window.webpackJsonp||[]).push([["app"],{"0zzD":function(e,t,i){},"4god":function(e,t,i){},GQjy:function(e,t,i){},aaiB:function(e,t,i){"use strict";i.d(t,"a",(function(){return FieldValidation}));class FieldValidation{constructor(e){this.field=e}initialize(){if(!this.field)return;const e=["change","validate"];for(let t=0;t<e.length;t++){const i=e[t];this.field.addEventListener(i,e=>{this.onChange(e.target,e)})}this.field.addEventListener("invalid",e=>{e.preventDefault()})}onChange(e,t){if(FieldValidation.removeErrorText(this.field),!0===this.field.validity.valid)return void e.classList.remove("invalid");const i=this.getValidationMessage(e.validity,e);FieldValidation.appendErrorText(this.field,i),e.classList.add("invalid")}getValidationMessage(e,t){return!0===e.valueMissing?t.dataset.valueMissing||t.title||"Dit veld is verplicht.":!0===e.customError?t.dataset.customMessage||t.title||"Vul een geldige waarde in.":!0===e.typeMismatch?t.title||"Vul een geldige waarde in.":!0===e.patternMismatch&&t.title||"Vul een geldige waarde in."}static appendErrorText(e,t){var i;const n=document.createElement("SPAN");n.classList.add("validation-message"),n.innerText=t,null===(i=e.parentElement)||void 0===i||i.appendChild(n)}static appendSuccessText(e,t){var i;const n=document.createElement("SPAN");n.classList.add("validation-message","validation-message--success"),n.innerText=t,null===(i=e.parentElement)||void 0===i||i.appendChild(n)}static removeErrorText(e){var t;const i=(null===(t=e.parentElement)||void 0===t?void 0:t.querySelector(".validation-message"))||null;i&&i.remove()}static onInit(e=document){Array.from(e.querySelectorAll("[data-field-validation]")).forEach(e=>{const t=Array.from(e.querySelectorAll('input:not([type="hidden"])'));for(let e=0;e<t.length;e++){const i=t[e];new FieldValidation(i).initialize()}e.querySelector('button[type="submit"]').addEventListener("click",i=>{i.preventDefault();let n=!0;for(let e=0;e<t.length;e++){const i=t[e];i.dispatchEvent(new Event("change")),n=i.validity.valid}n&&e.submit()})})}}},b24w:function(e,t,i){},nMhI:function(e,t,i){"use strict";i.r(t),i.d(t,"default",(function(){return app_App}));i("xzs/");class LazyLoader{constructor(e){this.element=e,this.elements=this.getElements(),this.elements.length&&this.initialize()}initialize(){if("IntersectionObserver"in window)this.onIntersectionObserver(IntersectionObserver);else for(let e=0;e<this.elements.length;e++){const t=this.elements[e];this.lazyload(t)}}onIntersectionObserver(e=IntersectionObserver){const t=new e((e,t)=>{e.forEach(e=>{e.isIntersecting&&(this.element instanceof HTMLPictureElement?this.elements.forEach(e=>{this.lazyload(e)}):this.lazyload(e.target),t.unobserve(e.target),t.disconnect())})},{root:null,rootMargin:"250px 0px",threshold:0});this.element instanceof HTMLPictureElement?t.observe(this.element):this.elements.forEach(e=>{t.observe(e)})}lazyload(e){const t=e;if(this.manageCssClasses(e),window.HTMLPictureElement&&this.element instanceof HTMLPictureElement){const e=this.element.querySelector("img");if(null===e)return;this.manageCssClasses(e)}const i=this.element.closest(".loading-spinner");i&&i.classList.remove("loading-spinner"),(t instanceof HTMLImageElement||t instanceof HTMLSourceElement)&&t.dataset.sizes&&(t.sizes=t.dataset.sizes,t.removeAttribute("data-sizes")),(t instanceof HTMLImageElement||t instanceof HTMLSourceElement)&&t.dataset.srcset&&(t.srcset=t.dataset.srcset,t.removeAttribute("data-srcset")),(t instanceof HTMLImageElement||t instanceof HTMLSourceElement)&&t.dataset.src&&(t.src=t.dataset.src,t.removeAttribute("data-src"))}getElements(){return this.element?this.element instanceof HTMLImageElement&&(this.element.dataset.src||this.element.dataset.srcset)?[this.element]:window.HTMLPictureElement&&this.element instanceof HTMLPictureElement?Array.from(this.element.querySelectorAll("img[data-src], source[data-srcset]")):Array.from(this.element.querySelectorAll("img[data-src]")):[]}manageCssClasses(e){e.classList.add("loaded"),e.classList.remove("loading")}}window.addEventListener("load",(function(){const e=Array.from(document.querySelectorAll("[data-lazyload]"));for(let t=0;t<e.length;t++){const i=e[t];new LazyLoader(i)}}));var n,s=i("tNnY"),a=i("Gi9F");!function(e){e.success="success",e.warning="warning",e.danger="danger"}(n||(n={}));var o=i("tBEf"),r=i("aaiB");i("4god");class Toast{constructor(e,t,i,n=5e3){this.element=null,this.message=e,this.type=t,this.timeout=n,i&&(this.ctaButton=i)}initialize(){if(!this.isValid())return;const e=this.create();document.body.appendChild(e),e.classList.add("toast--visible"),setTimeout(()=>{this.remove()},this.timeout)}remove(){null!==this.element&&(this.element.addEventListener("transitionend",()=>{document.body.removeChild(this.element)}),this.element.classList.remove("toast--visible"))}create(){this.element=document.createElement("DIV"),this.element.classList.add("toast");const e=document.createElement("DIV");e.classList.add("toast__container");const t=document.createElement("IMG");t.src=`/wp-content/themes/lavandre/public/images/icons/${this.type}.svg`,t.alt=this.type+" icon",t.classList.add("toast__icon"),t.width=24,t.height=24;const i=document.createElement("P"),n=document.createElement("STRONG");n.classList.add("toast__message"),n.innerText=this.message,i.appendChild(n);const s=document.createElement("BUTTON");if(s.classList.add("eicon-close","toast__close"),s.addEventListener("click",()=>{this.remove()}),e.appendChild(t),e.appendChild(i),e.appendChild(s),this.ctaButton){const t=document.createElement("A");t.href=this.ctaButton.href,t.classList.add("cta-button","inline"),t.innerText=this.ctaButton.text,e.appendChild(t)}return this.element.appendChild(e),this.element}isValid(){return!(!this.message||!this.type)}}class AjaxLogin_AjaxLogin extends a.a{constructor(e){super(),this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this.form=e}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){const e=Array.from(this.form.querySelectorAll("input"));for(let t=0;t<e.length;t++){const i=e[t];new r.a(i).initialize()}this.form.addEventListener("submit",t=>{var i,n;t.preventDefault();let s=!0;for(let t=0;t<e.length;t++){const i=e[t];i.dispatchEvent(new Event("change")),s=i.validity.valid}if(!s)return;const a=new FormData(this.form),r=(null===(i=a.get("username"))||void 0===i?void 0:i.toString())||"",l=(null===(n=a.get("password"))||void 0===n?void 0:n.toString())||"";if(!r||!l)return;const c={action:"ajaxlogin",username:r,password:l},d=this.form.querySelector('button[type="submit"]')||void 0;return Object(o.a)(c,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this),t,d),!1})}isValid(){return!!this.form}onSuccess(e,t){if(!1===e.success)throw new Error("something is wrong");new Toast("Welkom terug!",n.success,{text:"Mijn account",href:"/mijn-account/"},2e4).initialize();const i=this.form.closest("[data-panel-name]");i&&i.dispatchEvent(new CustomEvent("toggle")),document.body.classList.add("logged-in")}onFailure(){new Toast("Deze combinatie van e-mail en wachtwoord is niet bekend bij ons. Probeer het nogmaals of vraag een nieuw wachtwoord aan.",n.warning).initialize()}static onInit(e=document){const t=e.querySelector("#ajax-login-form");if(null===t)return;new AjaxLogin_AjaxLogin(t).initialize()}}class ConfirmValidation{constructor(e,t){this.field=e,this.confirmField=t}initialize(){if(!this.field||!this.confirmField)throw new Error("Missing fields");const e=["change","input"];for(let t=0;t<e.length;t++){const i=e[t];this.confirmField.addEventListener(i,()=>{if(this.field.value!==this.confirmField.value){const e="Value is not equal";this.confirmField.setCustomValidity(e),this.confirmField.reportValidity()}else this.confirmField.setCustomValidity(""),this.confirmField.reportValidity()})}}}class EmailValidation_EmailValidation extends a.a{constructor(e){super(),this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this.emailInput=e,this.form=this.emailInput.closest("form")}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){let e=null;this.emailInput.addEventListener("blur",()=>{e&&window.clearTimeout(e),e=window.setTimeout(()=>{this.handleBlurEvent()},500)})}handleBlurEvent(){var e;const t=new FormData(this.form),i=this.emailInput.value,n=(null===(e=t.get("woocommerce-email-check-nonce"))||void 0===e?void 0:e.toString())||"";if(!i)return;const s={action:"ajaxemailcheck",email:i,security:n};Object(o.a)(s,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this))}onSuccess(){this.removeExistingMessages()}onFailure(e){this.setValidationMessage(e.message)}setValidationMessage(e){const t=this.emailInput.parentElement,i=null==t?void 0:t.parentElement;if(null===t||!i)return;this.removeExistingMessages(i);const n=document.createElement("div");n.className="alert alert--warning inline-form-error",n.textContent=e,i.insertBefore(n,t)}removeExistingMessages(e){var t;const i=e||(null===(t=this.emailInput.parentElement)||void 0===t?void 0:t.parentElement);if(!i)return;Array.from(i.querySelectorAll(".alert--warning")).forEach(e=>{e.remove()})}isValid(){return!(!this.emailInput||!this.form)}static onInit(e=document){const t=e.querySelector("#reg_email");if(null===t)return;new EmailValidation_EmailValidation(t).initialize()}}class AjaxRegister_AjaxRegister extends a.a{constructor(e){super(),this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this.form=e}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){const e=this.form.querySelector('input[type="email"]');if(null!==e){new EmailValidation_EmailValidation(e).initialize()}const t=this.form.querySelector("#register-password"),i=this.form.querySelector("#confirm-password");if(t&&i){new ConfirmValidation(t,i).initialize()}const n=Array.from(this.form.querySelectorAll("input"));for(let e=0;e<n.length;e++){const t=n[e];new r.a(t).initialize()}this.form.addEventListener("submit",e=>{var t,i,s,a;e.preventDefault();let r=!0;for(let e=0;e<n.length;e++){const t=n[e];t.dispatchEvent(new Event("change")),r=t.validity.valid}if(!r)return;const l=new FormData(this.form),c=(null===(t=l.get("email"))||void 0===t?void 0:t.toString())||"",d=(null===(i=l.get("first_name"))||void 0===i?void 0:i.toString())||"",u=(null===(s=l.get("last_name"))||void 0===s?void 0:s.toString())||"",m=(null===(a=l.get("password"))||void 0===a?void 0:a.toString())||"";if(!c||!m)return;const h={action:"ajaxregister",email:c,password:m,first_name:d,last_name:u},p=this.form.querySelector('button[type="submit"]')||void 0;return Object(o.a)(h,this.ajaxEndpoint,null,this.onSuccess.bind(this),void 0,e,p),!1})}isValid(){return!!this.form}onSuccess(e,t){if(!1===e.success)throw new Error("something is wrong");new Toast("U bent succesvol geregistreerd!",n.success,{text:"Mijn account",href:"/mijn-account/"},2e4).initialize();const i=this.form.closest("[data-panel-name]");i&&i.dispatchEvent(new CustomEvent("toggle")),document.body.classList.add("logged-in")}static onInit(e=document){const t=e.querySelector("#ajax-register-form");if(null===t)return;new AjaxRegister_AjaxRegister(t).initialize()}}i("b24w");class Curtain_Curtain extends a.a{constructor(e,t,i=!1){super(),this.element=e,this.foldButton=t,this.onlyOnMobile=i,this.defaultHeight=void 0!==getComputedStyle(this.element).maxHeight&&"none"!==getComputedStyle(this.element).maxHeight?getComputedStyle(this.element).maxHeight:"0px"}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){this.foldButton.addEventListener("click",e=>{this.onlyOnMobile&&window.innerWidth>=768||(e.preventDefault(),this.element.classList.contains("active")?(this.foldButton.classList.remove("active"),this.element.classList.remove("active"),this.element.style.maxHeight=this.element.scrollHeight+"px",setTimeout(()=>{this.element.style.maxHeight=this.defaultHeight},1)):(this.foldButton.classList.add("active"),this.element.classList.add("active"),this.element.style.maxHeight=this.defaultHeight,setTimeout(()=>{this.element.style.maxHeight=this.element.scrollHeight+"px"},1)),this.foldButton.dataset.readLess&&this.foldButton.dataset.readMore&&(this.foldButton.innerText!==this.foldButton.dataset.readMore?this.foldButton.innerText=this.foldButton.dataset.readMore:this.foldButton.innerText=this.foldButton.dataset.readLess))})}isValid(){return!(!this.element||!this.foldButton)}static onInit(e=document){const t=Array.from(e.querySelectorAll("[data-curtain-toggle]"));for(let i=0;i<t.length;i++){const n=t[i];if(!n)continue;const s=e.querySelector(`[data-curtain-content="${n.dataset.curtainToggle}"]`);if(!s)continue;const a=!(!s.dataset.onlyOnMobile||"true"!==s.dataset.onlyOnMobile);new Curtain_Curtain(s,n,a).initialize()}}}class PasswordReveal_PasswordReveal extends a.a{constructor(e){super(),this.element=e,this.passwordInput=this.element.querySelector('input[type="password"]')}initialize(){const e=this.createRevealButton();this.element.appendChild(e),e.addEventListener("click",()=>{e.classList.toggle("opened"),"password"!==this.passwordInput.type?this.passwordInput.type="password":this.passwordInput.type="text"})}createRevealButton(){const e=document.createElement("BUTTON");return e.type="button",e.className="password-reveal-toggle",e.tabIndex=-1,e}static onInit(e=document){const t=Array.from(e.querySelectorAll(".password-row"));for(let e=0;e<t.length;e++){const i=t[e];if(null===i)return;new PasswordReveal_PasswordReveal(i).initialize()}}}var l=new class DataLayer{constructor(){this.dataLayer=window.dataLayer?window.dataLayer:[]}push(e){this.dataLayer.push(e)}};class NewsletterSubscribe_NewsletterSubscribe extends a.a{constructor(e){super(),this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this.dataLayer=l,this.form=e,this.emailField=this.form.querySelector('[name="email"]')}initialize(){if(!this.isValid())throw new Error("Newsletter subscribe component not valid");this.setEventListeners()}setEventListeners(){new r.a(this.emailField).initialize(),this.form.addEventListener("submit",e=>{var t;e.preventDefault();const i=(null===(t=new FormData(this.form).get("email"))||void 0===t?void 0:t.toString())||"";if(!i)return;const n={action:"mailchimpsubscribe",email:i};r.a.removeErrorText(this.emailField),Object(o.a)(n,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this))})}isValid(){return!(!this.form||!this.emailField)}onSuccess(e,t){r.a.appendSuccessText(this.emailField,e.data.toString()),this.emailField.value="";const i={event:"GAEvent",eventCategory:"newsletter",eventAction:"subscribe",eventLabel:this.form.id||"generic"};this.dataLayer.push(i)}onFailure(e){throw r.a.appendErrorText(this.emailField,e.message),e}static onInit(e=document){const t=Array.from(e.querySelectorAll("#footer-newsletter-form, #homepage-newsletter-form"));for(let e=0;e<t.length;e++){const i=t[e];new NewsletterSubscribe_NewsletterSubscribe(i).initialize()}}}i("GQjy");class InfoPopup_InfoPopup extends a.a{constructor(e,t="mouseover"){super(),this.element=e,this.event=t,this.content=this.element.dataset.content||""}initialize(){!1!==this.isValid()&&this.element.addEventListener(this.event,this.showTippy.bind(this))}showTippy(e){let t=window.tippy(this.element,{content:this.content,theme:"light",allowHTML:!0,hideOnClick:!0,showOnCreate:!0,interactive:!0,onHidden:e=>{e.destroy()}});void 0!==t&&(t.show(),t.hideWithInteractivity(e))}isValid(){return!(!this.element||!this.content)}static onInit(e=document){const t=Array.from(e.querySelectorAll('[data-role="tippy"]'));for(let e=0;e<t.length;e++){const i=t[e];if(!i)continue;new InfoPopup_InfoPopup(i,"mouseover").initialize()}}}i("0zzD");class CookieBar_CookieBar extends a.a{constructor(){super(),this.element=null,this.acceptButton=null,this.rejectButton=null,console.log("constructor - cookiebar"),this.templateElement=document.getElementById("cookie-bar-template")}initialize(){var e,t;if(console.log("init",this.templateElement),null!==this.templateElement){if(function getCookieValue(e){const t=document.cookie.split("; ").find(t=>t.startsWith(e));return void 0===t?null:t.split("=")[1]}(CookieBar_CookieBar.cookieName))return this.templateElement.remove(),void console.log("template remove");this.element=this.getElement(),this.acceptButton=this.element.querySelector('[data-role="cookies-accept"]'),this.rejectButton=this.element.querySelector('[data-role="cookies-reject"]'),console.log(this.element,this.acceptButton,this.rejectButton),null===(e=this.acceptButton)||void 0===e||e.addEventListener("click",this.acceptCookies.bind(this)),null===(t=this.rejectButton)||void 0===t||t.addEventListener("click",this.rejectCookies.bind(this))}else console.log("no template")}getElement(){const e=this.templateElement.cloneNode(!0).content;return this.templateElement.parentElement.appendChild(e),document.querySelector('[data-role="cookie-bar"]')}acceptCookies(){var e;console.log("accept"),CookieBar_CookieBar.setAcceptCookie(),null===(e=this.element)||void 0===e||e.remove()}rejectCookies(){var e;console.log("reject"),CookieBar_CookieBar.setRejectCookie(),null===(e=this.element)||void 0===e||e.remove()}static setAcceptCookie(){document.cookie=CookieBar_CookieBar.cookieName+"=true;max-age=31536000"}static setRejectCookie(){document.cookie=CookieBar_CookieBar.cookieName+"=false;max-age=31536000"}static onInit(){(new CookieBar_CookieBar).initialize()}}CookieBar_CookieBar.cookieName="approved_cookies";class ForgotPassword_ForgotPassword extends a.a{constructor(e){super(),this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this.passwordForgetAnchor=e,this.form=this.passwordForgetAnchor.closest("form")}initialize(){this.isValid()&&this.setEventListeners()}setEventListeners(){this.passwordForgetAnchor.addEventListener("click",e=>{var t;e.preventDefault();const i=(null===(t=new FormData(this.form).get("username"))||void 0===t?void 0:t.toString())||"",n=this.form.username;if(new r.a(n).initialize(),n.dispatchEvent(new Event("validate")),!i)throw new Error("Username not set");const s={action:"ajaxforgotpassword",user_login:i};Object(o.a)(s,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this))})}onSuccess(){new Toast("Wij hebben u een e-mail gestuurd met een link waarmee u uw wachtwoord kunt aanpassen.",n.success).initialize()}onFailure(){new Toast("Wij hebben geen account kunnen vinden met dit e-mailadres.",n.warning).initialize()}isValid(){return!(!this.passwordForgetAnchor||!this.form)}static onInit(e=document){const t=Array.from(e.querySelectorAll('a[data-role="password-forget"]'));for(let e=0;e<t.length;e++){const i=t[e];new ForgotPassword_ForgotPassword(i).initialize()}}}var c=i("RfZo");class HeaderSearch_HeaderSearch extends a.a{constructor(e){super(),this.element=e}initialize(){const documentClickHandler=e=>{const t=e.target;if(null===t)return;null!==t.closest(".header__search")||(this.element.classList.remove("active"),document.body.removeEventListener("click",documentClickHandler))};this.element.addEventListener("click",e=>{e.stopImmediatePropagation(),this.element.classList.add("active");const t=this.element.querySelector(".product-search-field");null!==t&&t.focus(),document.body.removeEventListener("click",documentClickHandler),document.body.addEventListener("click",documentClickHandler)})}static onInit(e=document){const t=e.querySelector(".header__search");if(null===t)return;new HeaderSearch_HeaderSearch(t).initialize()}}class SubMenu_SubMenu extends a.a{constructor(e){super(),this.element=e}initialize(){this.element.addEventListener("mouseenter",()=>{const e=this.element.querySelector(".ww-sub-menu");null!==e&&(e.classList.remove("hidden"),e.classList.add("active"))}),this.element.addEventListener("mouseleave",()=>{const e=this.element.querySelector(".ww-sub-menu");null!==e&&(e.classList.remove("active"),setTimeout(()=>{e.classList.add("hidden")},400))})}static onInit(e=document){Array.from(e.querySelectorAll("[data-sub-menu]")).forEach(e=>{new SubMenu_SubMenu(e).initialize()})}}var d=i("Q0Az");class app_App extends d.a{constructor(){super(...arguments),this.eventEmitter=s.a,this.components=[CookieBar_CookieBar,c.a,Curtain_Curtain,InfoPopup_InfoPopup,PasswordReveal_PasswordReveal,EmailValidation_EmailValidation,NewsletterSubscribe_NewsletterSubscribe,ForgotPassword_ForgotPassword,AjaxLogin_AjaxLogin,AjaxRegister_AjaxRegister,r.a,HeaderSearch_HeaderSearch,SubMenu_SubMenu]}initialize(){if(super.initialize(),function setCurrentLinkClass(){const e=window.location.pathname,t=function stripTrailingSlash(e){return e.endsWith("/")?e.slice(0,-1):e}(e);Array.from(document.querySelectorAll(`nav a[href="${e}"], nav a[href="${t}"]`)).forEach(e=>{e.classList.add("current-link")})}(),document.body.classList.contains("woocommerce-checkout")){const e=new URL(window.location.href);if(e.searchParams.get("paynl_status")&&"CANCELED"===e.searchParams.get("paynl_status")){new Toast("De betaling is mislukt, probeer het a.u.b. opnieuw.",n.warning,void 0,2e4).initialize()}}}}!function appInit(){(new app_App).initialize()}()},"xzs/":function(e,t,i){}},[["nMhI","runtime",0]]]);