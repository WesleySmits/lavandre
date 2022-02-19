"use strict";(self.webpackChunklavandre=self.webpackChunklavandre||[]).push([[45,511],{2377:function(t,e,i){i.d(e,{Z:function(){return Module}});i(1005);var n=i(3991);class Module{constructor(){this.eventEmitter=n.Z}initialize(){this.initializeComponents(),this.eventEmitter.on("template-instantiated",(t=>{this.initializeComponents(t)}))}initializeComponents(t=document){this.components.forEach((e=>{e.onInit(t)}))}}},1005:function(t,e,i){i.d(e,{Z:function(){return c}});var n=i(3991),a=i(5555),r=i(3069);class AddCouponCode{constructor(t){this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this.cartElement=document.getElementById("custom-cart"),this.form=t,this.couponField=this.form.querySelector('[name="coupon-code"]'),this.submitButton=this.form.querySelector('[type="submit"]')}initialize(){this.form.addEventListener("submit",(t=>{t.preventDefault();let e=new FormData(this.form).get("coupon-code")||"";e&&"string"==typeof e||(e="");const i={action:"coupon_code_add",code:e.toLowerCase()};return r.Z.removeErrorText(this.couponField),(0,a.Ye)(i,this.ajaxEndpoint,this.cartElement,this.onSuccess.bind(this),this.onFailure.bind(this),t,this.submitButton),!1}))}onSuccess(t,e){const i=this.form.closest("[data-panel-name]");i&&i.dispatchEvent(new CustomEvent("toggle")),c.updateCartContent(t)}onFailure(t){throw r.Z.appendErrorText(this.couponField,t.message),t}}var o=i(7063),s=i(7836);const l=new class Cart{constructor(){this.eventEmitter=n.Z,this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this._cartElement=document.getElementById("custom-cart"),this.updateTimeout=null,this.updateTimeoutDuration=800,this.amountSelector=null,this.eventEmitter.on("template-instantiated",(t=>{t&&t.dataset.panelName&&"cart-panel"===t.dataset.panelName&&(this.handleCartPanel(t),this.initialize())}))}initialize(){this._cartElement&&(this.initializeCouponCodeForm(),this.setEventListeners())}get cartElement(){return this._cartElement}set cartElement(t){this._cartElement=t}get cartShortCode(){return this._cartElement&&this._cartElement.classList.contains("custom-cart--mini")?"[ww_custom_cart_mini]":"[ww_custom_cart]"}setEventListeners(){this.amountSelector=new o.Z(this._cartElement),this.amountSelector.initialize();const t=Array.from(document.querySelectorAll("[data-delete-item]"));for(let e=0;e<t.length;e++){const i=t[e];i.addEventListener("click",(()=>{this.deleteCartItem(i)}))}this.eventEmitter.on("amount-changed",(t=>{this._cartElement.contains(t)&&(null!==this.updateTimeout&&window.clearTimeout(this.updateTimeout),this.updateTimeout=window.setTimeout((()=>{this.updateCartItem(t)}),this.updateTimeoutDuration))}));const e=Array.from(document.querySelectorAll("[data-remove-code]"));for(let t=0;t<e.length;t++){const i=e[t];i.addEventListener("click",(t=>{t.preventDefault();const e=i.dataset.removeCode;if(!e)return void(window.location.href=i.href);const n={action:"coupon_code_remove",code:e,shortcode:this.cartShortCode};(0,a.Ye)(n,this.ajaxEndpoint,this._cartElement,this.updateCart.bind(this),(()=>{window.location.href=i.href}))}))}}initializeCouponCodeForm(){const t=document.getElementById("coupon-code-form");if(null===t)return;new AddCouponCode(t).initialize()}updateCartItem(t){var e;const i=t.closest(".custom-cart__item"),n=null==i?void 0:i.dataset.productId,r=null!==(e=Number(null==i?void 0:i.dataset.variationId))&&void 0!==e?e:0;if(!i||!n)throw new Error("no item found");const o={action:"update_cart_item",product_id:n,quantity:t.value,variation_id:r.toString(),shortcode:this.cartShortCode};(0,a.Ye)(o,this.ajaxEndpoint,this._cartElement,this.updateCart.bind(this))}deleteCartItem(t){const e=t.closest(".custom-cart__item"),i=t.dataset.productId,n=t.dataset.variationId||"";if(!e||!i||!n)throw new Error("no item found");const r={action:"delete_cart_item",product_id:i,variation_id:n,shortcode:this.cartShortCode};(0,a.Ye)(r,this.ajaxEndpoint,this._cartElement,this.updateCart.bind(this))}updateCart(t){t?this.updateCartContent(t):this.getCartContent()}getCartContent(){const t={action:"update_cart",shortcode:this.cartShortCode};(0,a.Ye)(t,this.ajaxEndpoint,this._cartElement,this.updateCartContent.bind(this))}updateCartContent(t){if(!t||!t.data||!t.data.content)return;const{content:e}=t.data;this._cartElement.outerHTML=e,this._cartElement=document.getElementById("custom-cart"),(0,s.Z)(t.data["total-cart-quantity"]),this.setEventListeners()}handleCartPanel(t){const e=t.querySelector("#custom-cart");null!==e&&(this.cartElement=e,this.updateCart())}};l.initialize();var c=l},4254:function(t,e,i){i.d(e,{Z:function(){return Component}});class Component{static onInit(t=document){}}},6305:function(t,e,i){e.Z=new class DataLayer{constructor(){this.dataLayer=window.dataLayer?window.dataLayer:[]}push(t){this.dataLayer.push({ecommerce:null}),this.dataLayer.push(t)}}},3991:function(t,e,i){e.Z=new class EventEmitterClass{constructor(){this.events={}}on(t,e){return"object"!=typeof this.events[t]&&(this.events[t]=[]),this.events[t].push(e),()=>this.removeListener(t,e)}removeListener(t,e){if("object"!=typeof this.events[t])return null;const i=this.events[t].indexOf(e);i>-1&&this.events[t].splice(i,1)}removeAllListeners(t){if("object"!=typeof this.events[t])return null;delete this.events[t]}emit(t,...e){if("object"!=typeof this.events[t])return null;this.events[t].forEach((t=>t.apply(this,e)))}once(t,e){const i=this.on(t,((...t)=>{i(),e.apply(this,t)}))}}},7063:function(t,e,i){i.d(e,{Z:function(){return AmountSelector}});var n=i(4254),a=i(3991);class AmountSelector extends n.Z{constructor(t=document){super(),this.buttons=[],this.eventEmitter=a.Z,this.handleClick=t=>{const e=t.target;if(!e||!e.parentElement)return;const i=e.closest("button");if(!i||!i.parentElement)return;const n=i.parentElement.querySelector(".qty");n&&n instanceof HTMLInputElement&&this.changeAmount(i,n)},this.buttons=Array.from(t.querySelectorAll(".plus-amount, .minus-amount"))}initialize(){const eventListener=t=>{const e=t.target;e&&(+e.value>+e.max&&(e.value=e.max),+e.value<+e.min&&(e.value=e.min),this.eventEmitter.emit("amount-changed",t.target))},t=Array.from(document.querySelectorAll("input.qty"));for(let e=0;e<t.length;e++){const i=t[e];i.removeEventListener("change",eventListener),i.addEventListener("change",eventListener)}for(let t=0;t<this.buttons.length;t++){const e=this.buttons[t];e.removeEventListener("click",this.handleClick.bind(this)),e.addEventListener("click",this.handleClick.bind(this))}}changeAmount(t,e){let i=Number(e.value);const n=Number(e.getAttribute("step"));t.classList.contains("plus-amount")?i+=n:i-=n,e.value=i.toString(),e.dispatchEvent(new Event("change"))}static onInit(t=document){new AmountSelector(t).initialize()}}},3069:function(t,e,i){i.d(e,{Z:function(){return FieldValidation}});class FieldValidation{constructor(t){this.field=t}initialize(){if(!this.field)return;const t=["change","validate"];for(let e=0;e<t.length;e++){const i=t[e];this.field.addEventListener(i,(t=>{this.onChange(t.target,t)}))}this.field.addEventListener("invalid",(t=>{t.preventDefault()}))}onChange(t,e){if(FieldValidation.removeErrorText(this.field),!0===this.field.validity.valid)return void t.classList.remove("invalid");const i=this.getValidationMessage(t.validity,t);FieldValidation.appendErrorText(this.field,i),t.classList.add("invalid")}getValidationMessage(t,e){const i="Vul een geldige waarde in.";return!0===t.valueMissing?e.dataset.valueMissing||e.title||"Dit veld is verplicht.":!0===t.customError?e.dataset.customMessage||e.title||i:!0===t.typeMismatch?e.title||i:!0===t.patternMismatch&&e.title||i}static appendErrorText(t,e){var i;const n=document.createElement("SPAN");n.classList.add("validation-message"),n.innerText=e,null===(i=t.parentElement)||void 0===i||i.appendChild(n)}static appendSuccessText(t,e){var i;const n=document.createElement("SPAN");n.classList.add("validation-message","validation-message--success"),n.innerText=e,null===(i=t.parentElement)||void 0===i||i.appendChild(n)}static removeErrorText(t){var e;const i=(null===(e=t.parentElement)||void 0===e?void 0:e.querySelector(".validation-message"))||null;i&&i.remove()}static onInit(t=document){Array.from(t.querySelectorAll("[data-field-validation]")).forEach((t=>{const e=Array.from(t.querySelectorAll('input:not([type="hidden"])'));for(let t=0;t<e.length;t++){const i=e[t];new FieldValidation(i).initialize()}const i=t.querySelector('button[type="submit"]');null==i||i.addEventListener("click",(i=>{i.preventDefault();let n=!0;for(let t=0;t<e.length;t++){const i=e[t];i.dispatchEvent(new Event("change")),n=i.validity.valid}n&&t.submit()}))}))}}},7784:function(t,e,i){var n,a,r,o=i(1005),s=i(4254),l=i(9560),c=i(7836),d=i(5555),__classPrivateFieldGet=function(t,e,i,n){if("a"===i&&!n)throw new TypeError("Private accessor was defined without a getter");if("function"==typeof e?t!==e||!n:!e.has(t))throw new TypeError("Cannot read private member from an object whose class did not declare it");return"m"===i?n:"a"===i?n.call(t):n?n.value:e.get(t)};class AjaxAddToCart extends s.Z{constructor(t){super(),n.add(this),this.variationData=[],this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this.form=t,this.button=this.form.querySelector('button[name="add-to-cart"]'),this.variationFields=Array.from(this.form.querySelectorAll(".product-detail__variations input")),this.handleChangeVariationAttribute();const e="attribute_pa_size",i=this.form[e].value;this.handleChangeVariationAttribute(e,i)}initialize(){this.variationFields.forEach((t=>{t.addEventListener("change",(()=>{this.handleChangeVariationAttribute(t.name,t.value)}))})),this.button.addEventListener("click",this.handleAddToCartClick.bind(this))}handleChangeVariationAttribute(t="",e=""){const i={};for(let t=0;t<this.variationFields.length;t++){const e=this.variationFields[t],{name:n}=e;if(!this.form[n].value)return;i[n]=this.form[n].value}const n=this.findMatchingVariant(i);this.disableNonExistingVariants(t,e),this.disableOutOfStockVariants(t,e),this.disabledChecker()?this.selectFirstAvailableVariant():setTimeout((()=>{this.disableSubscriptionVariants()}),100),this.disableButtonIfOutOfStock(),n?(this.form.variation_id.value=n,window.jQuery&&window.jQuery(this.form).trigger("show_variation",[this.findMatchingVariantData(i)])):this.setFormInvalid()}setFormInvalid(){this.form.product_id.value="",this.form.variation_id.value=""}disabledChecker(){let t=!1;return this.variationFields.forEach((e=>{e.disabled||(t=!0)})),t}selectFirstAvailableVariant(){const t=new Set;this.variationFields.forEach((e=>{t.add(e.name)}));for(const e of t){const t=Array.from(this.form.querySelectorAll(`[name="${e}"]`));let i=!1;t.forEach((t=>{t.checked&&(i=!0)})),i||t.forEach((t=>{t.disabled||(t.checked=!0)}))}}disableButtonIfOutOfStock(){let t=!1;this.variationData.forEach((e=>{e.is_in_stock&&(t=!0)})),t||(this.button.isDisabled=!0,this.button.label="BOETTON",this.button.label=this.button.dataset.outOfStock||"Out of stock")}disableOutOfStockVariants(t="",e=""){"attribute_pa_amount"!==t&&(this.variationData.forEach((t=>{const{attributes:e}=t;if(!e)throw new Error("no attributes");this.variationFields.forEach((i=>{if(e[i.name]===i.value){if(t.is_in_stock)return;__classPrivateFieldGet(this,n,"m",a).call(this,i)}}))})),this.variationData.forEach((t=>{const{attributes:e}=t;if(!e)throw new Error("no attributes");this.variationFields.forEach((i=>{if(e[i.name]===i.value){if(!t.is_in_stock)return;__classPrivateFieldGet(this,n,"m",r).call(this,i)}}))})))}disableNonExistingVariants(t="",e=""){"attribute_pa_amount"!==t&&(t&&e&&this.variationFields.forEach((e=>{e.name!==t&&(e.disabled=!0)})),this.variationData.forEach((i=>{const{attributes:n}=i;if(!n)throw new Error("no attributes");n[t]===e&&this.variationFields.forEach((t=>{n[t.name]===t.value&&(t.disabled=!1)}))})))}findMatchingVariant(t){let e=null;if(!this.variationData.length){const t=this.form.dataset.product_variations;if(!t)return null;if(this.variationData=JSON.parse(t),!this.variationData)return null}return this.variationData.forEach((i=>{const{attributes:n}=i;if(!n)throw new Error("no attributes");for(const[e,i]of Object.entries(n))if(t[e]!==i)return;e=i.variation_id})),e}findMatchingVariantData(t){let e;if(!this.variationData.length){const t=this.form.dataset.product_variations;if(!t)return;if(this.variationData=JSON.parse(t),!this.variationData)return}return this.variationData.forEach((i=>{const{attributes:n}=i;if(!n)throw new Error("no attributes");for(const[e,i]of Object.entries(n))if(t[e]!==i)return;e=i})),e}handleAddToCartClick(t){var e,i;t.preventDefault();let n=0;this.form.querySelector('[name="variation_id"]');const a=this.form.querySelector('[name="variation_id"]');a&&(n=Number(a.value));let r=!0;if(Array.from(this.form.querySelectorAll("input")).forEach((t=>{t.dispatchEvent(new Event("validate")),t.validity.valid||(r=!1)})),!r)throw new Error("Product add form is not valid");const o=Number(null===(e=this.form.querySelector('input[name="quantity"]'))||void 0===e?void 0:e.value)||1,s={action:"ajaxaddtocart",product_id:this.button.value,quantity:o.toString(),variation_id:n.toString(),subscription:""},l=new FormData(this.form),c=this.form.querySelector("#one_time_purchase"),u=(null==c||c.name,!(null==c?void 0:c.checked)),h=(null===(i=l.get("subscription-term"))||void 0===i?void 0:i.toString())||"";return u&&(s.subscription=h),(0,d.Ye)(s,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this),void 0,this.button),!1}onSuccess(t){if(!1===t.success)throw new Error("something is wrong");l.Z.openSidePanel("cart-panel"),o.Z.updateCart(),t.data.cartAmount&&(0,c.Z)(t.data.cartAmount)}onFailure(){}disableSubscriptionVariants(){Array.from(this.form.querySelectorAll(".custom-radio--subscription input")).forEach((t=>{t.disabled=!0,t.removeAttribute("checked")}))}static onInit(t=document){const e=t.querySelector("form.cart");if(null===e)return;new AjaxAddToCart(e).initialize()}}n=new WeakSet,a=function _AjaxAddToCart_disableField(t){t.disabled=!0,t.removeAttribute("checked")},r=function _AjaxAddToCart_enableField(t){t.removeAttribute("disabled")};var u=i(7063),h=i(1979);class ChangeVariantColor extends s.Z{constructor(t){super(),this.elements=t}initialize(){const t=document.querySelector(".product-detail__variation__label--color");if(!this.elements.length||!t)return;const e=t.textContent;this.elements.forEach((i=>{i.addEventListener("change",(()=>{const n=(0,h.L)(i.value);n&&(t.innerText=`${e}: ${n}`)})),i.checked&&i.dispatchEvent(new Event("change"))}))}static onInit(t=document){const e=Array.from(t.querySelectorAll('[name="attribute_pa_color"]'));if(!e.length)return;new ChangeVariantColor(e).initialize()}}class ChangeVariantPrice extends s.Z{constructor(t){super(),this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this.regularPriceElements=[],this.salePriceElement=null,this.elements=t}initialize(){if(this.regularPriceElements=Array.from(document.querySelectorAll(".product-detail__price ins [data-product-price]")),this.regularPriceElements.length||(this.regularPriceElements=Array.from(document.querySelectorAll(".product-detail__price [data-product-price]"))),this.salePriceElement=document.querySelector(".product-detail__price del [data-product-price]"),!this.salePriceElement&&!this.regularPriceElements.length)return;const t=this.elements[0].closest("form");if(!t)return;const{product_id:e}=t.dataset;e&&this.elements.forEach((i=>{i.addEventListener("change",(()=>{const i=t.querySelector('[name="variation_id"]'),n=null==i?void 0:i.value;if(!n||!e)return;const a={action:"ajaxgetvariantprice",product_id:e,variation_id:n};(0,d.Ye)(a,this.ajaxEndpoint,null,this.onSuccess.bind(this))}))}))}onSuccess(t){if(!t.data||!t.data.salePrice&&!t.data.regularPrice)throw new Error("No data");const e=Number(t.data.regularPrice).toFixed(2),i=Number(t.data.salePrice).toFixed(2);this.regularPriceElements.length&&e&&this.regularPriceElements.forEach((t=>{t.innerText=e})),this.salePriceElement&&i&&(this.salePriceElement.innerText=i)}static onInit(t=document){const e=Array.from(t.querySelectorAll('.product-detail__variations input[type="radio'));if(!e.length)return;new ChangeVariantPrice(e).initialize()}}class ImageGallery extends s.Z{constructor(t){super(),this.element=t}initialize(){Array.from(this.element.querySelectorAll(".product-detail__gallery__thumbnails a")).forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault();const i=t.dataset.thumbnailId,n=this.element.querySelector(`[data-image-id="${i}"]`);if(null===n)return;const a=n.parentElement;Array.from(a.querySelectorAll("li.active")).forEach((t=>{t.classList.remove("active")})),n.classList.add("active")}))}))}static onInit(t=document){const e=t.querySelector(".product-detail__gallery");if(null===e)return;new ImageGallery(e).initialize()}}var m=i(2377),p=i(6305);class ProductDetail extends m.Z{constructor(){super(...arguments),this.components=[AjaxAddToCart,u.Z,ImageGallery,ChangeVariantPrice,ChangeVariantColor]}initialize(){var t,e,i;super.initialize();const n={event:"view_item",ecommerce:{items:[]}},a=document.querySelector("form[data-product_id]"),r=document.querySelector('input[name="variation_id"]'),o={item_id:(null==a?void 0:a.dataset.product_id)||"",item_name:(null===(t=document.querySelector(".product-detail__title"))||void 0===t?void 0:t.textContent)||"",item_variant:(null==r?void 0:r.value)||"",price:Number(null===(i=null===(e=document.querySelector("[data-product-price]"))||void 0===e?void 0:e.textContent)||void 0===i?void 0:i.replace(",","."))||0,item_brand:"Lavandré"};n.ecommerce.items.push(o),p.Z.push(n)}}!function productDetailInit(){(new ProductDetail).initialize()}()},9560:function(t,e,i){i.d(e,{Z:function(){return SidePanel}});var n=i(3991),a=i(908),r=i(4254);const o=document.querySelector("body");let s=0;var l=i(1979);class Dialog extends r.Z{constructor(t){super(),this._isOpen=!1,this._transitionTime=0,this.element=t}get isOpen(){return this._isOpen}set isOpen(t){this._isOpen=t}get camelDataAttribute(){const t=this.dataAttribute.replace("data-","");return(0,l.z)(t)}get transitionTime(){return this._transitionTime||(this._transitionTime=this.getTransitionTime()),this._transitionTime}initialize(){this.polyfillDialog(),this.setEventListeners()}setEventListeners(){this.element.addEventListener("open",(()=>{this.open()})),this.element.addEventListener("toggle",(()=>{this.toggle()}));Array.from(document.querySelectorAll("[data-close]")).forEach((t=>{t.addEventListener("click",(()=>{this.close()}))})),this.element.addEventListener("click",(t=>{this.outsideClick(t)}))}outsideClick(t){const e=t.target;if(e!==this.element)e.closest(`[${this.dataAttribute}="${this.element.dataset[`${this.camelDataAttribute}`]}"]`)||this.close();else{const i=e.getBoundingClientRect();i.top<=t.clientY&&t.clientY<=i.top+i.height&&i.left<=t.clientX&&t.clientX<=i.left+i.width||this.close()}}toggle(){this.isOpen?this.close():this.open()}open(){this.isOpen||(!function disableBodyScroll(){s=window.pageYOffset,o.style.overflow="hidden",o.style.position="fixed",o.style.top=`-${s}px`,o.style.width="100%",document.documentElement.style.scrollBehavior="initial"}(),this.element.showModal(),this.isOpen=!0,this.element.classList.add(this.classes.open),setTimeout((()=>{this.element.classList.remove(this.classes.closed)}),this.transitionTime))}close(){!function enableBodyScroll(){o.style.removeProperty("overflow"),o.style.removeProperty("position"),o.style.removeProperty("top"),o.style.removeProperty("width"),o.style.removeProperty("top"),window.scrollTo(0,s),document.documentElement.style.removeProperty("scroll-behavior")}(),this.element.classList.remove(this.classes.open),setTimeout((()=>{this.element.classList.add(this.classes.closed),this.element.close(),this.isOpen=!1}),this.transitionTime)}getTransitionTime(){var t;const e=null!==(t=getComputedStyle(this.element).transitionDuration)&&void 0!==t?t:"";return(e.indexOf("ms")>-1?parseFloat(e):1e3*parseFloat(e))||400}polyfillDialog(){null===a.Z||void 0===a.Z||a.Z.registerDialog(this.element)}}class SidePanel extends Dialog{constructor(){super(...arguments),this.dataAttribute="data-panel-name",this.classes={open:"side-panel--opened",closed:"side-panel--closed",left:"side-panel--left",right:"side-panel--right"}}static openSidePanel(t,e=null){var i;let a=document.querySelector(`[data-panel-name="${t}"]`);if(null===a){const r=document.querySelector(`[data-panel-template="${t}"]`);if(null===r)return e&&e instanceof HTMLAnchorElement?void(window.location.href=e.href):void 0;const o=r.cloneNode(!0),{content:s}=o;if(null===(i=r.parentElement)||void 0===i||i.appendChild(s),a=document.querySelector(`[data-panel-name="${t}"]`),n.Z.emit("template-instantiated",a),null===a)return;new SidePanel(a).initialize()}const r=new CustomEvent("toggle");a.dispatchEvent(r)}static onInit(){super.onInit();const t=Array.from(document.querySelectorAll("[data-panel]"));for(let e=0;e<t.length;e++){const i=t[e];i.removeEventListener("click",this.handleCreationEvent),i.addEventListener("click",this.handleCreationEvent)}}static handleCreationEvent(t){t.preventDefault();const e=this.dataset.panel||"";this instanceof HTMLAnchorElement&&"my-account-panel"===e&&document.body.classList.contains("logged-in")?window.location.href=this.href:SidePanel.openSidePanel(e,this)}}},7836:function(t,e,i){function addOrUpdateCartTotals(t){const e=document.querySelector(".cart-amount-icon");if(null===e)throw new Error("No cart amount wrapper found");let i=e.querySelector(".cart-amount-counter");t&&"0"!==t?(null===i&&(i=document.createElement("SPAN"),i.classList.add("cart-amount-counter"),e.appendChild(i)),i.innerText=t):null==i||i.remove()}i.d(e,{Z:function(){return addOrUpdateCartTotals}})},5555:function(t,e,i){i.d(e,{Ye:function(){return sendAjaxRequest}});var n=new class HttpClient{get(t,e){return this.request(t,e)}post(t,e,i){const n={method:"post",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}},a=Object.assign(Object.assign({},n),i);return this.request(t,a)}put(t,e,i){const n={method:"put",body:e,headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}},a=Object.assign(Object.assign({},n),i);return this.request(t,a)}delete(t,e,i){const n={method:"delete",body:e},a=Object.assign(Object.assign({},n),i);return this.request(t,a)}request(t,e){const i=Object.assign(Object.assign({},{method:"get",credentials:"same-origin",headers:{Accept:"application/json","Content-Type":"application/json"}}),e);return fetch(t,i).then(this.requestStatus).then(this.responseType)}requestStatus(t){return t.status>=200&&t.status<300?Promise.resolve(t):t.status>=400&&t.status<500?t.text().then((t=>Promise.reject(t))):Promise.reject(new Error(t.statusText))}responseType(t){const e=t.headers.get("content-type");return null!==e&&-1!==e.indexOf("application/json")?t.json():t.text()}convertFormDataToQueryString(t){return new URLSearchParams(t).toString()}};function sendAjaxRequest(t,e,i,a,r,o,s){const l=n,c={method:"post",body:new URLSearchParams(t).toString(),credentials:"same-origin",headers:{"Content-Type":"application/x-www-form-urlencoded; charset=UTF-8"}};i&&function addLoadingState(t){if(!t)return;t.classList.add("custom-cart__item--loading");const e=document.createElement("DIV");e.classList.add("ww-loader"),t.appendChild(e)}(i),s&&function setButtonLoadingState(t){t.disabled=!0,t.setAttribute("loading","true")}(s),l.post(e,"",c).then((t=>new Promise((()=>{const e=t,n=e.data;if(!1===e.success)throw new Error(String(n));a(e,o),i&&removeLoadingState(i),s&&removeButtonLoadingState(s)})))).catch((t=>{i&&removeLoadingState(i),s&&removeButtonLoadingState(s),r&&r(t)}))}function removeLoadingState(t){if(!t)return;t.classList.remove("custom-cart__item--loading");const e=t.querySelector(".ww-loader");e&&e.parentElement.removeChild(e)}function removeButtonLoadingState(t){t.disabled=!1,t.removeAttribute("loading")}},1979:function(t,e,i){function toCamelCase(t){return t.replace(/\W+(.)/g,((t,e)=>e.toUpperCase()))}function toTitleCase(t){return t.replace(/\w\S*/g,(t=>t.charAt(0).toUpperCase()+t.substr(1).toLowerCase()))}i.d(e,{z:function(){return toCamelCase},L:function(){return toTitleCase}})}},function(t){t.O(0,[908],(function(){return e=7784,t(t.s=e);var e}));t.O()}]);