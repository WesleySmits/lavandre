(window.webpackJsonp=window.webpackJsonp||[]).push([["cart"],{Gi9F:function(t,e,n){"use strict";n.d(e,"a",(function(){return Component}));class Component{static onInit(t=document){}}},T8im:function(t,e,n){"use strict";function addOrUpdateCartTotals(t){const e=document.querySelector(".cart-amount-icon");if(null===e)throw new Error("No cart amount wrapper found");let n=e.querySelector(".cart-amount-counter");t&&"0"!==t?(null===n&&(n=document.createElement("SPAN"),n.classList.add("cart-amount-counter"),e.appendChild(n)),n.innerText=t):null==n||n.remove()}n.d(e,"a",(function(){return addOrUpdateCartTotals}))},aTg0:function(t,e,n){},aaiB:function(t,e,n){"use strict";n.d(e,"a",(function(){return FieldValidation}));class FieldValidation{constructor(t){this.field=t}initialize(){if(!this.field)return;const t=["change","validate"];for(let e=0;e<t.length;e++){const n=t[e];this.field.addEventListener(n,t=>{this.onChange(t.target,t)})}this.field.addEventListener("invalid",t=>{t.preventDefault()})}onChange(t,e){if(FieldValidation.removeErrorText(this.field),!0===this.field.validity.valid)return void t.classList.remove("invalid");const n=this.getValidationMessage(t.validity,t);FieldValidation.appendErrorText(this.field,n),t.classList.add("invalid")}getValidationMessage(t,e){return!0===t.valueMissing?e.dataset.valueMissing||e.title||"Dit veld is verplicht.":!0===t.customError?e.dataset.customMessage||e.title||"Vul een geldige waarde in.":!0===t.typeMismatch?e.title||"Vul een geldige waarde in.":!0===t.patternMismatch&&e.title||"Vul een geldige waarde in."}static appendErrorText(t,e){var n;const i=document.createElement("SPAN");i.classList.add("validation-message"),i.innerText=e,null===(n=t.parentElement)||void 0===n||n.appendChild(i)}static appendSuccessText(t,e){var n;const i=document.createElement("SPAN");i.classList.add("validation-message","validation-message--success"),i.innerText=e,null===(n=t.parentElement)||void 0===n||n.appendChild(i)}static removeErrorText(t){var e;const n=(null===(e=t.parentElement)||void 0===e?void 0:e.querySelector(".validation-message"))||null;n&&n.remove()}static onInit(t=document){Array.from(t.querySelectorAll("[data-field-validation]")).forEach(t=>{const e=Array.from(t.querySelectorAll('input:not([type="hidden"])'));for(let t=0;t<e.length;t++){const n=e[t];new FieldValidation(n).initialize()}const n=t.querySelector('button[type="submit"]');null==n||n.addEventListener("click",n=>{n.preventDefault();let i=!0;for(let t=0;t<e.length;t++){const n=e[t];n.dispatchEvent(new Event("change")),i=n.validity.valid}i&&t.submit()})})}}},k92o:function(t,e,n){"use strict";n.r(e),n.d(e,"Cart",(function(){return cart_Cart}));var i=n("tNnY"),a=n("tBEf"),o=n("aaiB");class AddCouponCode_AddCouponCode{constructor(t){this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this.cartElement=document.getElementById("custom-cart"),this.form=t,this.couponField=this.form.querySelector('[name="coupon-code"]'),this.submitButton=this.form.querySelector('[type="submit"]')}initialize(){this.form.addEventListener("submit",t=>{t.preventDefault();let e=new FormData(this.form).get("coupon-code")||"";e&&"string"==typeof e||(e="");const n={action:"coupon_code_add",code:e.toLowerCase()};return o.a.removeErrorText(this.couponField),Object(a.a)(n,this.ajaxEndpoint,this.cartElement,this.onSuccess.bind(this),this.onFailure.bind(this),t,this.submitButton),!1})}onSuccess(t,e){const n=this.form.closest("[data-panel-name]");n&&n.dispatchEvent(new CustomEvent("toggle")),d.updateCartContent(t)}onFailure(t){throw o.a.appendErrorText(this.couponField,t.message),t}}var s=n("kR8q"),r=n("T8im");class cart_Cart{constructor(){this.eventEmitter=i.a,this.ajaxEndpoint=window.location.origin+"/wp-admin/admin-ajax.php",this._cartElement=document.getElementById("custom-cart"),this.updateTimeout=null,this.updateTimeoutDuration=800,this.amountSelector=null,this.eventEmitter.on("template-instantiated",t=>{t&&t.dataset.panelName&&"cart-panel"===t.dataset.panelName&&(this.handleCartPanel(t),this.initialize())})}initialize(){this._cartElement&&(this.initializeCouponCodeForm(),this.setEventListeners())}get cartElement(){return this._cartElement}set cartElement(t){this._cartElement=t}get cartShortCode(){return this._cartElement&&this._cartElement.classList.contains("custom-cart--mini")?"[ww_custom_cart_mini]":"[ww_custom_cart]"}setEventListeners(){this.amountSelector=new s.a(this._cartElement),this.amountSelector.initialize();const t=Array.from(document.querySelectorAll("[data-delete-item]"));for(let e=0;e<t.length;e++){const n=t[e];n.addEventListener("click",()=>{this.deleteCartItem(n)})}this.eventEmitter.on("amount-changed",t=>{this._cartElement.contains(t)&&(null!==this.updateTimeout&&window.clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout(()=>{this.updateCartItem(t)},this.updateTimeoutDuration))});const e=Array.from(document.querySelectorAll("[data-remove-code]"));for(let t=0;t<e.length;t++){const n=e[t];n.addEventListener("click",t=>{t.preventDefault();const e=n.dataset.removeCode;if(!e)return void(window.location.href=n.href);const i={action:"coupon_code_remove",code:e,shortcode:this.cartShortCode};Object(a.a)(i,this.ajaxEndpoint,this._cartElement,this.updateCart.bind(this),()=>{window.location.href=n.href})})}}initializeCouponCodeForm(){const t=document.getElementById("coupon-code-form");if(null===t)return;new AddCouponCode_AddCouponCode(t).initialize()}updateCartItem(t){var e;const n=t.closest(".custom-cart__item"),i=null==n?void 0:n.dataset.productId,o=null!==(e=Number(null==n?void 0:n.dataset.variationId))&&void 0!==e?e:0;if(!n||!i)throw new Error("no item found");const s={action:"update_cart_item",product_id:i,quantity:t.value,variation_id:o.toString(),shortcode:this.cartShortCode};Object(a.a)(s,this.ajaxEndpoint,this._cartElement,this.updateCart.bind(this))}deleteCartItem(t){const e=t.closest(".custom-cart__item"),n=t.dataset.productId,i=t.dataset.variationId||"";if(!e||!n||!i)throw new Error("no item found");const o={action:"delete_cart_item",product_id:n,variation_id:i,shortcode:this.cartShortCode};Object(a.a)(o,this.ajaxEndpoint,this._cartElement,this.updateCart.bind(this))}updateCart(t){t?this.updateCartContent(t):this.getCartContent()}getCartContent(){const t={action:"update_cart",shortcode:this.cartShortCode};Object(a.a)(t,this.ajaxEndpoint,this._cartElement,this.updateCartContent.bind(this))}updateCartContent(t){if(!t||!t.data||!t.data.content)return;const e=t.data.content;this._cartElement.outerHTML=e,this._cartElement=document.getElementById("custom-cart"),Object(r.a)(t.data["total-cart-quantity"]),this.setEventListeners()}handleCartPanel(t){const e=t.querySelector("#custom-cart");null!==e&&(this.cartElement=e,this.updateCart())}}const c=new cart_Cart;c.initialize();var d=e.default=c},kR8q:function(t,e,n){"use strict";n.d(e,"a",(function(){return AmountSelector}));n("aTg0");var i=n("Gi9F"),a=n("tNnY");class AmountSelector extends i.a{constructor(t=document){super(),this.buttons=[],this.eventEmitter=a.a,this.handleClick=t=>{const e=t.target;if(!e||!e.parentElement)return;let n=e.closest("button");if(!n||!n.parentElement)return;const i=n.parentElement.querySelector(".qty");i&&i instanceof HTMLInputElement&&this.changeAmount(n,i)},this.buttons=Array.from(t.querySelectorAll(".plus-amount, .minus-amount"))}initialize(){const eventListener=t=>{const e=t.target;e&&(+e.value>+e.max&&(e.value=e.max),+e.value<+e.min&&(e.value=e.min),this.eventEmitter.emit("amount-changed",t.target))},t=Array.from(document.querySelectorAll("input.qty"));for(let e=0;e<t.length;e++){const n=t[e];n.removeEventListener("change",eventListener),n.addEventListener("change",eventListener)}for(let t=0;t<this.buttons.length;t++){const e=this.buttons[t];e.removeEventListener("click",this.handleClick.bind(this)),e.addEventListener("click",this.handleClick.bind(this))}}changeAmount(t,e){let n=Number(e.value);const i=Number(e.getAttribute("step"));t.classList.contains("plus-amount")?n+=i:n-=i,e.value=n.toString(),e.dispatchEvent(new Event("change"))}static onInit(t=document){new AmountSelector(t).initialize()}}},tBEf:function(t,e,n){"use strict";n.d(e,"a",(function(){return sendAjaxRequest}));var i=new class HttpClient{get(t,e){return this.request(t,e)}post(t,e,n){const i={method:"post",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}},a=Object.assign(Object.assign({},i),n);return this.request(t,a)}put(t,e,n){const i={method:"put",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}},a=Object.assign(Object.assign({},i),n);return this.request(t,a)}delete(t,e,n){const i={method:"delete",body:e},a=Object.assign(Object.assign({},i),n);return this.request(t,a)}request(t,e){const n=Object.assign(Object.assign({},{method:"get",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}}),e);return fetch(t,n).then(this.requestStatus).then(this.responseType)}requestStatus(t){return t.status>=200&&t.status<300?Promise.resolve(t):t.status>=400&&t.status<500?t.text().then(t=>Promise.reject(t)):Promise.reject(new Error(t.statusText))}responseType(t){const e=t.headers.get("content-type");return null!==e&&-1!==e.indexOf("application/json")?t.json():t.text()}convertFormDataToQueryString(t){return new URLSearchParams(t).toString()}};function sendAjaxRequest(t,e,n,a,o,s,r){const c=i,d={method:"post",body:new URLSearchParams(t).toString(),credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};n&&function addLoadingState(t){if(!t)return;t.classList.add("custom-cart__item--loading");const e=document.createElement("DIV");e.classList.add("ww-loader"),t.appendChild(e)}(n),r&&function setButtonLoadingState(t){t.disabled=!0,t.setAttribute("loading","true")}(r),c.post(e,"",d).then(t=>new Promise(()=>{const e=t,i=e.data;if(!1===e.success)throw new Error(String(i));a(e,s),n&&removeLoadingState(n),r&&removeButtonLoadingState(r)})).catch(t=>{n&&removeLoadingState(n),r&&removeButtonLoadingState(r),o&&o(t)})}function removeLoadingState(t){if(!t)return;t.classList.remove("custom-cart__item--loading");const e=t.querySelector(".ww-loader");e&&e.parentElement.removeChild(e)}function removeButtonLoadingState(t){t.disabled=!1,t.removeAttribute("loading")}},tNnY:function(t,e,n){"use strict";e.a=new class EventEmitterClass{constructor(){this.events={}}on(t,e){return"object"!=typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),()=>this.removeListener(t,e)}removeListener(t,e){if("object"!=typeof this.events[t])return null;const n=this.events[t].indexOf(e);n>-1&&this.events[t].splice(n,1)}removeAllListeners(t){if("object"!=typeof this.events[t])return null;delete this.events[t]}emit(t,...e){if("object"!=typeof this.events[t])return null;this.events[t].forEach(t=>t.apply(this,e))}once(t,e){const n=this.on(t,(...t)=>{n(),e.apply(this,t)})}}}},[["k92o","runtime"]]]);