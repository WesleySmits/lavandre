"use strict";(self.webpackChunklavandre=self.webpackChunklavandre||[]).push([[644],{2377:function(t,e,n){n.d(e,{Z:function(){return Module}});n(1005);var i=n(3991);class Module{constructor(){this.eventEmitter=i.Z}initialize(){this.initializeComponents(),this.eventEmitter.on("template-instantiated",(t=>{this.initializeComponents(t)}))}initializeComponents(t=document){this.components.forEach((e=>{e.onInit(t)}))}}},1005:function(t,e,n){n.d(e,{Z:function(){return c}});var i=n(3991),o=n(5555),s=n(3069);class AddCouponCode{constructor(t){this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this.cartElement=document.getElementById("custom-cart"),this.form=t,this.couponField=this.form.querySelector('[name="coupon-code"]'),this.submitButton=this.form.querySelector('[type="submit"]')}initialize(){this.form.addEventListener("submit",(t=>{t.preventDefault();let e=new FormData(this.form).get("coupon-code")||"";e&&"string"==typeof e||(e="");const n={action:"coupon_code_add",code:e.toLowerCase()};return s.Z.removeErrorText(this.couponField),(0,o.Ye)(n,this.ajaxEndpoint,this.cartElement,this.onSuccess.bind(this),this.onFailure.bind(this),t,this.submitButton),!1}))}onSuccess(t,e){const n=this.form.closest("[data-panel-name]");n&&n.dispatchEvent(new CustomEvent("toggle")),c.updateCartContent(t)}onFailure(t){throw s.Z.appendErrorText(this.couponField,t.message),t}}var a=n(7063),r=n(7836);const l=new class Cart{constructor(){this.eventEmitter=i.Z,this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this._cartElement=document.getElementById("custom-cart"),this.updateTimeout=null,this.updateTimeoutDuration=800,this.amountSelector=null,this.eventEmitter.on("template-instantiated",(t=>{t&&t.dataset.panelName&&"cart-panel"===t.dataset.panelName&&(this.handleCartPanel(t),this.initialize())}))}initialize(){this._cartElement&&(this.initializeCouponCodeForm(),this.setEventListeners())}get cartElement(){return this._cartElement}set cartElement(t){this._cartElement=t}get cartShortCode(){return this._cartElement&&this._cartElement.classList.contains("custom-cart--mini")?"[ww_custom_cart_mini]":"[ww_custom_cart]"}setEventListeners(){this.amountSelector=new a.Z(this._cartElement),this.amountSelector.initialize();const t=Array.from(document.querySelectorAll("[data-delete-item]"));for(let e=0;e<t.length;e++){const n=t[e];n.addEventListener("click",(()=>{this.deleteCartItem(n)}))}this.eventEmitter.on("amount-changed",(t=>{this._cartElement.contains(t)&&(null!==this.updateTimeout&&window.clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout((()=>{this.updateCartItem(t)}),this.updateTimeoutDuration))}));const e=Array.from(document.querySelectorAll("[data-remove-code]"));for(let t=0;t<e.length;t++){const n=e[t];n.addEventListener("click",(t=>{t.preventDefault();const e=n.dataset.removeCode;if(!e)return void(window.location.href=n.href);const i={action:"coupon_code_remove",code:e,shortcode:this.cartShortCode};(0,o.Ye)(i,this.ajaxEndpoint,this._cartElement,this.updateCart.bind(this),(()=>{window.location.href=n.href}))}))}}initializeCouponCodeForm(){const t=document.getElementById("coupon-code-form");if(null===t)return;new AddCouponCode(t).initialize()}updateCartItem(t){var e;const n=t.closest(".custom-cart__item"),i=null==n?void 0:n.dataset.productId,s=null!==(e=Number(null==n?void 0:n.dataset.variationId))&&void 0!==e?e:0;if(!n||!i)throw new Error("no item found");const a={action:"update_cart_item",product_id:i,quantity:t.value,variation_id:s.toString(),shortcode:this.cartShortCode};(0,o.Ye)(a,this.ajaxEndpoint,this._cartElement,this.updateCart.bind(this))}deleteCartItem(t){const e=t.closest(".custom-cart__item"),n=t.dataset.productId,i=t.dataset.variationId||"";if(!e||!n||!i)throw new Error("no item found");const s={action:"delete_cart_item",product_id:n,variation_id:i,shortcode:this.cartShortCode};(0,o.Ye)(s,this.ajaxEndpoint,this._cartElement,this.updateCart.bind(this))}updateCart(t){t?this.updateCartContent(t):this.getCartContent()}getCartContent(){const t={action:"update_cart",shortcode:this.cartShortCode};(0,o.Ye)(t,this.ajaxEndpoint,this._cartElement,this.updateCartContent.bind(this))}updateCartContent(t){if(!t||!t.data||!t.data.content)return;const{content:e}=t.data;this._cartElement.outerHTML=e,this._cartElement=document.getElementById("custom-cart"),(0,r.Z)(t.data["total-cart-quantity"]),this.setEventListeners()}handleCartPanel(t){const e=t.querySelector("#custom-cart");null!==e&&(this.cartElement=e,this.updateCart())}};l.initialize();var c=l},4254:function(t,e,n){n.d(e,{Z:function(){return Component}});class Component{static onInit(t=document){}}},6305:function(t,e,n){e.Z=new class DataLayer{constructor(){this.dataLayer=window.dataLayer?window.dataLayer:[]}push(t){this.dataLayer.push({ecommerce:null}),this.dataLayer.push(t)}}},3991:function(t,e,n){e.Z=new class EventEmitterClass{constructor(){this.events={}}on(t,e){return"object"!=typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),()=>this.removeListener(t,e)}removeListener(t,e){if("object"!=typeof this.events[t])return null;const n=this.events[t].indexOf(e);n>-1&&this.events[t].splice(n,1)}removeAllListeners(t){if("object"!=typeof this.events[t])return null;delete this.events[t]}emit(t,...e){if("object"!=typeof this.events[t])return null;this.events[t].forEach((t=>t.apply(this,e)))}once(t,e){const n=this.on(t,((...t)=>{n(),e.apply(this,t)}))}}},7063:function(t,e,n){n.d(e,{Z:function(){return AmountSelector}});var i=n(4254),o=n(3991);class AmountSelector extends i.Z{constructor(t=document){super(),this.buttons=[],this.eventEmitter=o.Z,this.handleClick=t=>{const e=t.target;if(!e||!e.parentElement)return;const n=e.closest("button");if(!n||!n.parentElement)return;const i=n.parentElement.querySelector(".qty");i&&i instanceof HTMLInputElement&&this.changeAmount(n,i)},this.buttons=Array.from(t.querySelectorAll(".plus-amount, .minus-amount"))}initialize(){const eventListener=t=>{const e=t.target;e&&(+e.value>+e.max&&(e.value=e.max),+e.value<+e.min&&(e.value=e.min),this.eventEmitter.emit("amount-changed",t.target))},t=Array.from(document.querySelectorAll("input.qty"));for(let e=0;e<t.length;e++){const n=t[e];n.removeEventListener("change",eventListener),n.addEventListener("change",eventListener)}for(let t=0;t<this.buttons.length;t++){const e=this.buttons[t];e.removeEventListener("click",this.handleClick.bind(this)),e.addEventListener("click",this.handleClick.bind(this))}}changeAmount(t,e){let n=Number(e.value);const i=Number(e.getAttribute("step"));t.classList.contains("plus-amount")?n+=i:n-=i,e.value=n.toString(),e.dispatchEvent(new Event("change"))}static onInit(t=document){new AmountSelector(t).initialize()}}},3069:function(t,e,n){n.d(e,{Z:function(){return FieldValidation}});class FieldValidation{constructor(t){this.field=t}initialize(){if(!this.field)return;const t=["change","validate"];for(let e=0;e<t.length;e++){const n=t[e];this.field.addEventListener(n,(t=>{this.onChange(t.target,t)}))}this.field.addEventListener("invalid",(t=>{t.preventDefault()}))}onChange(t,e){if(FieldValidation.removeErrorText(this.field),!0===this.field.validity.valid)return void t.classList.remove("invalid");const n=this.getValidationMessage(t.validity,t);FieldValidation.appendErrorText(this.field,n),t.classList.add("invalid")}getValidationMessage(t,e){const n="Vul een geldige waarde in.";return!0===t.valueMissing?e.dataset.valueMissing||e.title||"Dit veld is verplicht.":!0===t.customError?e.dataset.customMessage||e.title||n:!0===t.typeMismatch?e.title||n:!0===t.patternMismatch&&e.title||n}static appendErrorText(t,e){var n;const i=document.createElement("SPAN");i.classList.add("validation-message"),i.innerText=e,null===(n=t.parentElement)||void 0===n||n.appendChild(i)}static appendSuccessText(t,e){var n;const i=document.createElement("SPAN");i.classList.add("validation-message","validation-message--success"),i.innerText=e,null===(n=t.parentElement)||void 0===n||n.appendChild(i)}static removeErrorText(t){var e;const n=(null===(e=t.parentElement)||void 0===e?void 0:e.querySelector(".validation-message"))||null;n&&n.remove()}static onInit(t=document){Array.from(t.querySelectorAll("[data-field-validation]")).forEach((t=>{const e=Array.from(t.querySelectorAll('input:not([type="hidden"])'));for(let t=0;t<e.length;t++){const n=e[t];new FieldValidation(n).initialize()}const n=t.querySelector('button[type="submit"]');null==n||n.addEventListener("click",(n=>{n.preventDefault();let i=!0;for(let t=0;t<e.length;t++){const n=e[t];n.dispatchEvent(new Event("change")),i=n.validity.valid}i&&t.submit()}))}))}}},9560:function(t,e,n){n.d(e,{Z:function(){return SidePanel}});var i=n(3991),o=n(908),s=n(4254);const a=document.querySelector("body");let r=0;var l=n(1979);class Dialog extends s.Z{constructor(t){super(),this._isOpen=!1,this._transitionTime=0,this.element=t}get isOpen(){return this._isOpen}set isOpen(t){this._isOpen=t}get camelDataAttribute(){const t=this.dataAttribute.replace("data-","");return(0,l.z)(t)}get transitionTime(){return this._transitionTime||(this._transitionTime=this.getTransitionTime()),this._transitionTime}initialize(){this.polyfillDialog(),this.setEventListeners()}setEventListeners(){this.element.addEventListener("open",(()=>{this.open()})),this.element.addEventListener("toggle",(()=>{this.toggle()}));Array.from(document.querySelectorAll("[data-close]")).forEach((t=>{t.addEventListener("click",(()=>{this.close()}))})),this.element.addEventListener("click",(t=>{this.outsideClick(t)}))}outsideClick(t){const e=t.target;if(e!==this.element)e.closest(`[${this.dataAttribute}="${this.element.dataset[`${this.camelDataAttribute}`]}"]`)||this.close();else{const n=e.getBoundingClientRect();n.top<=t.clientY&&t.clientY<=n.top+n.height&&n.left<=t.clientX&&t.clientX<=n.left+n.width||this.close()}}toggle(){this.isOpen?this.close():this.open()}open(){this.isOpen||(!function disableBodyScroll(){r=window.pageYOffset,a.style.overflow="hidden",a.style.position="fixed",a.style.top=`-${r}px`,a.style.width="100%",document.documentElement.style.scrollBehavior="initial"}(),this.element.showModal(),this.isOpen=!0,this.element.classList.add(this.classes.open),setTimeout((()=>{this.element.classList.remove(this.classes.closed)}),this.transitionTime))}close(){!function enableBodyScroll(){a.style.removeProperty("overflow"),a.style.removeProperty("position"),a.style.removeProperty("top"),a.style.removeProperty("width"),a.style.removeProperty("top"),window.scrollTo(0,r),document.documentElement.style.removeProperty("scroll-behavior")}(),this.element.classList.remove(this.classes.open),setTimeout((()=>{this.element.classList.add(this.classes.closed),this.element.close(),this.isOpen=!1}),this.transitionTime)}getTransitionTime(){var t;const e=null!==(t=getComputedStyle(this.element).transitionDuration)&&void 0!==t?t:"";return(e.indexOf("ms")>-1?parseFloat(e):1e3*parseFloat(e))||400}polyfillDialog(){null===o.Z||void 0===o.Z||o.Z.registerDialog(this.element)}}class SidePanel extends Dialog{constructor(){super(...arguments),this.dataAttribute="data-panel-name",this.classes={open:"side-panel--opened",closed:"side-panel--closed",left:"side-panel--left",right:"side-panel--right"}}static openSidePanel(t,e=null){var n;let o=document.querySelector(`[data-panel-name="${t}"]`);if(null===o){const s=document.querySelector(`[data-panel-template="${t}"]`);if(null===s)return e&&e instanceof HTMLAnchorElement?void(window.location.href=e.href):void 0;const a=s.cloneNode(!0),{content:r}=a;if(null===(n=s.parentElement)||void 0===n||n.appendChild(r),o=document.querySelector(`[data-panel-name="${t}"]`),i.Z.emit("template-instantiated",o),null===o)return;new SidePanel(o).initialize()}const s=new CustomEvent("toggle");o.dispatchEvent(s)}static onInit(){super.onInit();const t=Array.from(document.querySelectorAll("[data-panel]"));for(let e=0;e<t.length;e++){const n=t[e];n.removeEventListener("click",this.handleCreationEvent),n.addEventListener("click",this.handleCreationEvent)}}static handleCreationEvent(t){t.preventDefault();const e=this.dataset.panel||"";this instanceof HTMLAnchorElement&&"my-account-panel"===e&&document.body.classList.contains("logged-in")?window.location.href=this.href:SidePanel.openSidePanel(e,this)}}},7836:function(t,e,n){function addOrUpdateCartTotals(t){const e=document.querySelector(".cart-amount-icon");if(null===e)throw new Error("No cart amount wrapper found");let n=e.querySelector(".cart-amount-counter");t&&"0"!==t?(null===n&&(n=document.createElement("SPAN"),n.classList.add("cart-amount-counter"),e.appendChild(n)),n.innerText=t):null==n||n.remove()}n.d(e,{Z:function(){return addOrUpdateCartTotals}})},5555:function(t,e,n){n.d(e,{Ye:function(){return sendAjaxRequest}});var i=new class HttpClient{get(t,e){return this.request(t,e)}post(t,e,n){const i={method:"post",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}},o=Object.assign(Object.assign({},i),n);return this.request(t,o)}put(t,e,n){const i={method:"put",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}},o=Object.assign(Object.assign({},i),n);return this.request(t,o)}delete(t,e,n){const i={method:"delete",body:e},o=Object.assign(Object.assign({},i),n);return this.request(t,o)}request(t,e){const n=Object.assign(Object.assign({},{method:"get",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}}),e);return fetch(t,n).then(this.requestStatus).then(this.responseType)}requestStatus(t){return t.status>=200&&t.status<300?Promise.resolve(t):t.status>=400&&t.status<500?t.text().then((t=>Promise.reject(t))):Promise.reject(new Error(t.statusText))}responseType(t){const e=t.headers.get("content-type");return null!==e&&-1!==e.indexOf("application/json")?t.json():t.text()}convertFormDataToQueryString(t){return new URLSearchParams(t).toString()}};function sendAjaxRequest(t,e,n,o,s,a,r){const l=i,c={method:"post",body:new URLSearchParams(t).toString(),credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};n&&function addLoadingState(t){if(!t)return;t.classList.add("custom-cart__item--loading");const e=document.createElement("DIV");e.classList.add("ww-loader"),t.appendChild(e)}(n),r&&function setButtonLoadingState(t){t.disabled=!0,t.setAttribute("loading","true")}(r),l.post(e,"",c).then((t=>new Promise((()=>{const e=t,i=e.data;if(!1===e.success)throw new Error(String(i));o(e,a),n&&removeLoadingState(n),r&&removeButtonLoadingState(r)})))).catch((t=>{n&&removeLoadingState(n),r&&removeButtonLoadingState(r),s&&s(t)}))}function removeLoadingState(t){if(!t)return;t.classList.remove("custom-cart__item--loading");const e=t.querySelector(".ww-loader");e&&e.parentElement.removeChild(e)}function removeButtonLoadingState(t){t.disabled=!1,t.removeAttribute("loading")}},1979:function(t,e,n){function toCamelCase(t){return t.replace(/\W+(.)/g,((t,e)=>e.toUpperCase()))}function toTitleCase(t){return t.replace(/\w\S*/g,(t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()))}n.d(e,{z:function(){return toCamelCase},L:function(){return toTitleCase}})}}]);