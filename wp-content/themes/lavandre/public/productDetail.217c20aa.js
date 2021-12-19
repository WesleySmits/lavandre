"use strict";(self.webpackChunklavandre=self.webpackChunklavandre||[]).push([[45],{7784:function(t,e,i){var a=i(1005),r=i(4254),n=i(6673),o=i(7836),l=i(5555);class AjaxAddToCart extends r.Z{constructor(t){super(),this.variationData=[],this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this.form=t,this.button=this.form.querySelector('button[name="add-to-cart"]'),this.variationFields=Array.from(this.form.querySelectorAll(".product-detail__variations input")),this.handleChangeVariationAttribute();const e="attribute_pa_size",i=this.form[e].value;this.handleChangeVariationAttribute(e,i)}initialize(){this.variationFields.forEach((t=>{t.addEventListener("change",(()=>{this.handleChangeVariationAttribute(t.name,t.value)}))})),this.button.addEventListener("click",this.handleAddToCartClick.bind(this))}handleChangeVariationAttribute(t="",e=""){const i={};for(let t=0;t<this.variationFields.length;t++){const e=this.variationFields[t],{name:a}=e;if(!this.form[a].value)return;i[a]=this.form[a].value}const a=this.findMatchingVariant(i);this.disableNonExistingVariants(t,e),a?this.form.variation_id.value=a:this.setFormInvalid()}setFormInvalid(){this.form.product_id.value="",this.form.variation_id.value=""}disableNonExistingVariants(t="",e=""){"attribute_pa_amount"!==t&&(t&&e&&this.variationFields.forEach((e=>{e.name!==t&&(e.disabled=!0)})),this.variationData.forEach((i=>{const{attributes:a}=i;if(!a)throw new Error("no attributes");a[t]===e&&this.variationFields.forEach((t=>{a[t.name]===t.value&&(t.disabled=!1)}))})))}findMatchingVariant(t){let e=null;if(!this.variationData.length){const t=this.form.dataset.product_variations;if(!t)return null;if(this.variationData=JSON.parse(t),!this.variationData)return null}return this.variationData.forEach((i=>{const{attributes:a}=i;if(!a)throw new Error("no attributes");for(const[e,i]of Object.entries(a))if(t[e]!==i)return;e=i.variation_id})),e}handleAddToCartClick(t){var e;t.preventDefault();let i=0;this.form.querySelector('[name="variation_id"]');const a=this.form.querySelector('[name="variation_id"]');a&&(i=Number(a.value));let r=!0;if(Array.from(this.form.querySelectorAll("input")).forEach((t=>{t.dispatchEvent(new Event("validate")),t.validity.valid||(r=!1)})),!r)throw new Error("Product add form is not valid");const n=Number(null===(e=this.form.querySelector('input[name="quantity"]'))||void 0===e?void 0:e.value)||1,o={action:"ajaxaddtocart",product_id:this.button.value,quantity:n.toString(),variation_id:i.toString()};return(0,l.Ye)(o,this.ajaxEndpoint,null,this.onSuccess.bind(this),this.onFailure.bind(this),void 0,this.button),!1}onSuccess(t){if(!1===t.success)throw new Error("something is wrong");n.Z.openSidePanel("cart-panel"),a.Z.updateCart(),t.data.cartAmount&&(0,o.Z)(t.data.cartAmount)}onFailure(){const t=this.button.closest("form");null!==t&&t.submit()}static onInit(t=document){const e=t.querySelector("form.cart");if(null===e)return;new AjaxAddToCart(e).initialize()}}var s=i(7063),c=i(1979);class ChangeVariantColor extends r.Z{constructor(t){super(),this.elements=t}initialize(){const t=document.querySelector(".product-detail__variation__label--color");if(!this.elements.length||!t)return;const e=t.textContent;this.elements.forEach((i=>{i.addEventListener("change",(()=>{const a=(0,c.L)(i.value);a&&(t.innerText=`${e}: ${a}`)})),i.checked&&i.dispatchEvent(new Event("change"))}))}static onInit(t=document){const e=Array.from(t.querySelectorAll('[name="attribute_pa_color"]'));if(!e.length)return;new ChangeVariantColor(e).initialize()}}class ChangeVariantPrice extends r.Z{constructor(t){super(),this.ajaxEndpoint=`${window.location.origin}/wp-admin/admin-ajax.php`,this.regularPriceElement=null,this.salePriceElement=null,this.elements=t}initialize(){if(this.regularPriceElement=document.querySelector(".product-detail__price ins [data-product-price]")||document.querySelector(".product-detail__price [data-product-price]"),this.salePriceElement=document.querySelector(".product-detail__price del [data-product-price]"),!this.salePriceElement&&!this.regularPriceElement)return;const t=this.elements[0].closest("form");if(!t)return;const{product_id:e}=t.dataset;e&&this.elements.forEach((i=>{i.addEventListener("change",(()=>{const i=t.querySelector('[name="variation_id"]'),a=null==i?void 0:i.value;if(!a||!e)return;const r={action:"ajaxgetvariantprice",product_id:e,variation_id:a};(0,l.Ye)(r,this.ajaxEndpoint,null,this.onSuccess.bind(this))}))}))}onSuccess(t){if(!t.data||!t.data.salePrice&&!t.data.regularPrice)throw new Error("No data");const e=Number(t.data.regularPrice).toFixed(2),i=Number(t.data.salePrice).toFixed(2);this.regularPriceElement&&e&&(this.regularPriceElement.innerText=e),this.salePriceElement&&i&&(this.salePriceElement.innerText=i)}static onInit(t=document){const e=Array.from(t.querySelectorAll('.product-detail__variations input[type="radio'));if(!e.length)return;new ChangeVariantPrice(e).initialize()}}class ImageGallery extends r.Z{constructor(t){super(),this.element=t}initialize(){Array.from(this.element.querySelectorAll(".product-detail__gallery__thumbnails a")).forEach((t=>{t.addEventListener("click",(e=>{e.preventDefault();const i=t.dataset.thumbnailId,a=this.element.querySelector(`[data-image-id="${i}"]`);if(null===a)return;const r=a.parentElement;Array.from(r.querySelectorAll("li.active")).forEach((t=>{t.classList.remove("active")})),a.classList.add("active")}))}))}static onInit(t=document){const e=t.querySelector(".product-detail__gallery");if(null===e)return;new ImageGallery(e).initialize()}}var d=i(2377),u=i(6305);class ProductDetail extends d.Z{constructor(){super(...arguments),this.components=[AjaxAddToCart,s.Z,ImageGallery,ChangeVariantPrice,ChangeVariantColor]}initialize(){var t,e,i;super.initialize();const a={event:"view_item",ecommerce:{items:[]}},r=document.querySelector("form[data-product_id]"),n=document.querySelector('input[name="variation_id"]'),o={item_id:(null==r?void 0:r.dataset.product_id)||"",item_name:(null===(t=document.querySelector(".product-detail__title"))||void 0===t?void 0:t.textContent)||"",item_variant:(null==n?void 0:n.value)||"",price:Number(null===(i=null===(e=document.querySelector("[data-product-price]"))||void 0===e?void 0:e.textContent)||void 0===i?void 0:i.replace(",","."))||0,item_brand:"Lavandré"};a.ecommerce.items.push(o),u.Z.push(a)}}!function productDetailInit(){(new ProductDetail).initialize()}()}},function(t){t.O(0,[908,104],(function(){return e=7784,t(t.s=e);var e}));t.O()}]);