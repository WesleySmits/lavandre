"use strict";
(self["webpackChunklavandre"] = self["webpackChunklavandre"] || []).push([["productDetail"],{

/***/ "./assets/js/Module.ts":
/*!*****************************!*\
  !*** ./assets/js/Module.ts ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Module; }
/* harmony export */ });
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ "./assets/js/cart.ts");
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/EventEmitter */ "./assets/js/common/EventEmitter.ts");
/* eslint-disable import/no-unresolved */

/* eslint-disable import/extensions */


class Module {
  constructor() {
    this.eventEmitter = _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"];
  }

  initialize() {
    this.initializeComponents();
    this.eventEmitter.on('template-instantiated', element => {
      this.initializeComponents(element);
    });
  }

  initializeComponents(selector = document) {
    this.components.forEach(component => {
      // @ts-ignore
      component.onInit(selector);
    });
  }

}

/***/ }),

/***/ "./assets/js/common/DataLayer.ts":
/*!***************************************!*\
  !*** ./assets/js/common/DataLayer.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "DataLayer": function() { return /* binding */ DataLayer; }
/* harmony export */ });
class DataLayer {
  constructor() {
    this.dataLayer = window.dataLayer ? window.dataLayer : [];
  }

  push(data) {
    this.dataLayer.push({
      ecommerce: null
    }); // Clear the previous ecommerce object.

    this.dataLayer.push(data);
  }

}


/* harmony default export */ __webpack_exports__["default"] = (new DataLayer());

/***/ }),

/***/ "./assets/js/components/AjaxAddToCart.ts":
/*!***********************************************!*\
  !*** ./assets/js/components/AjaxAddToCart.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AjaxAddToCart; }
/* harmony export */ });
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart */ "./assets/js/cart.ts");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _ui_SidePanel__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../ui/SidePanel */ "./assets/js/ui/SidePanel.ts");
/* harmony import */ var _util_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/cart */ "./assets/js/util/cart.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _AjaxAddToCart_instances, _AjaxAddToCart_disableField, _AjaxAddToCart_enableField;
/* eslint-disable camelcase */







class AjaxAddToCart extends _common_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  // private outOfStockHandler = (field: HTMLInputElement) => {
  //     if (field.checked === false) {
  //         return;
  //     }
  //     this.disableButtonOnOutOfStock();
  // };
  constructor(form) {
    super();

    _AjaxAddToCart_instances.add(this);

    this.variationData = [];
    this.ajaxEndpoint = `${window.location.origin}/wp-admin/admin-ajax.php`;
    this.form = form;
    this.button = this.form.querySelector('button[name="add-to-cart"]');
    this.variationFields = Array.from(this.form.querySelectorAll('.product-detail__variations input'));
    this.handleChangeVariationAttribute();
    const currentSizeName = 'attribute_pa_size';
    const currentSizeValue = this.form[currentSizeName].value;
    this.handleChangeVariationAttribute(currentSizeName, currentSizeValue);
  }

  initialize() {
    this.variationFields.forEach(variation => {
      variation.addEventListener('change', () => {
        this.handleChangeVariationAttribute(variation.name, variation.value);
      });
    });
    this.button.addEventListener('click', this.handleAddToCartClick.bind(this));
  }

  handleChangeVariationAttribute(name = '', value = '') {
    const currentOptions = {};

    for (let index = 0; index < this.variationFields.length; index++) {
      const variation = this.variationFields[index];
      const {
        name
      } = variation;

      if (!this.form[name].value) {
        return;
      }

      currentOptions[name] = this.form[name].value;
    }

    const variationID = this.findMatchingVariant(currentOptions);
    this.disableNonExistingVariants(name, value);
    this.disableOutOfStockVariants(name, value);
    const selectedVariation = this.variationData.find(variation => variation.variation_id === variationID);
    console.log(selectedVariation);

    if (selectedVariation.is_in_stock === false) {
      console.log('out of stock');
      this.disableButtonOnOutOfStock();
    } else {
      console.log('in stock');
      this.enableButtonOnOutOfStock();
    }

    if (this.disabledChecker()) {
      this.selectFirstAvailableVariant();
    } else {
      setTimeout(() => {
        this.disableSubscriptionVariants();
      }, 100);
    }

    this.disableButtonIfOutOfStock();

    if (!variationID) {
      this.setFormInvalid();
      return;
    }

    this.form.variation_id.value = variationID; // @ts-ignore

    if (window.jQuery) {
      window // @ts-ignore
      .jQuery(this.form).trigger('show_variation', [this.findMatchingVariantData(currentOptions)]);
    }
  }

  setFormInvalid() {
    this.form.product_id.value = '';
    this.form.variation_id.value = '';
  }

  disabledChecker() {
    let returnValue = false;
    this.variationFields.forEach(field => {
      if (field.disabled) {
        return;
      }

      returnValue = true;
    });
    return returnValue;
  }

  selectFirstAvailableVariant() {
    const names = new Set();
    this.variationFields.forEach(field => {
      names.add(field.name);
    });

    for (const name of names) {
      const fields = Array.from(this.form.querySelectorAll(`[name="${name}"]`));
      let selectedField = false;
      fields.forEach(field => {
        if (field.checked) {
          selectedField = true;
        }
      });

      if (!selectedField) {
        fields.forEach(field => {
          if (field.disabled) {
            return;
          }

          field.checked = true;
        });
      }
    }
  }

  disableButtonIfOutOfStock() {
    let isInStock = false;
    this.variationData.forEach(variation => {
      if (variation.is_in_stock) {
        isInStock = true;
      }
    });

    if (!isInStock) {
      this.disableButtonOnOutOfStock();
    }
  }

  disableButtonOnOutOfStock() {
    this.button.isDisabled = true;
    this.button.label = this.button.dataset.outOfStock || 'Out of stock';
  }

  enableButtonOnOutOfStock() {
    this.button.isDisabled = false;
    this.button.label = this.button.dataset.inStock || 'Add to Bag';
  }

  disableOutOfStockVariants(name = '', value = '') {
    if (name === 'attribute_pa_amount') {
      return;
    }

    this.variationData.forEach(variation => {
      const {
        attributes
      } = variation;

      if (!attributes) {
        throw new Error('no attributes');
      }

      this.variationFields.forEach(field => {
        const match = attributes[field.name];

        if (match === field.value) {
          return;
        }

        if (variation.is_in_stock) {
          return;
        }

        __classPrivateFieldGet(this, _AjaxAddToCart_instances, "m", _AjaxAddToCart_disableField).call(this, field);
      });
    });
    this.variationData.forEach(variation => {
      const {
        attributes
      } = variation;

      if (!attributes) {
        throw new Error('no attributes');
      }

      this.variationFields.forEach(field => {
        const match = attributes[field.name];

        if (match === field.value) {
          if (!variation.is_in_stock) {
            return;
          }

          __classPrivateFieldGet(this, _AjaxAddToCart_instances, "m", _AjaxAddToCart_enableField).call(this, field);
        }
      });
    });
  }

  disableNonExistingVariants(name = '', value = '') {
    if (name === 'attribute_pa_amount') {}
  }

  findMatchingVariant(currentOptions) {
    let variationID = null;

    if (!this.variationData.length) {
      const data = this.form.dataset.product_variations;

      if (!data) {
        return null;
      }

      this.variationData = JSON.parse(data);

      if (!this.variationData) {
        return null;
      }
    }

    this.variationData.forEach(variation => {
      const {
        attributes
      } = variation;

      if (!attributes) {
        throw new Error('no attributes');
      }

      for (const [key, value] of Object.entries(attributes)) {
        if (currentOptions[key] !== value) {
          return;
        }
      }

      variationID = variation.variation_id;
    });
    return variationID;
  }

  findMatchingVariantData(currentOptions) {
    let returnValue;

    if (!this.variationData.length) {
      const data = this.form.dataset.product_variations;

      if (!data) {
        return undefined;
      }

      this.variationData = JSON.parse(data);

      if (!this.variationData) {
        return undefined;
      }
    }

    this.variationData.forEach(variation => {
      const {
        attributes
      } = variation;

      if (!attributes) {
        throw new Error('no attributes');
      }

      for (const [key, value] of Object.entries(attributes)) {
        if (currentOptions[key] !== value) {
          return;
        }
      }

      returnValue = variation;
    });
    return returnValue;
  }

  handleAddToCartClick(event) {
    var _a, _b;

    event.preventDefault();
    let variation_id = 0;
    const productIdElement = this.form.querySelector('[name="variation_id"]');
    const variationIdElement = this.form.querySelector('[name="variation_id"]');

    if (variationIdElement) {
      variation_id = Number(variationIdElement.value);
    }

    let formIsValid = true;
    const fields = Array.from(this.form.querySelectorAll('input'));
    fields.forEach(field => {
      field.dispatchEvent(new Event('validate'));

      if (!field.validity.valid) {
        formIsValid = false;
      }
    });

    if (!formIsValid) {
      throw new Error('Product add form is not valid');
    }

    const quantity = Number((_a = this.form.querySelector('input[name="quantity"]')) === null || _a === void 0 ? void 0 : _a.value) || 1;
    const data = {
      action: 'ajaxaddtocart',
      product_id: this.button.value,
      quantity: quantity.toString(),
      variation_id: variation_id.toString(),
      subscription: ''
    };
    const formData = new FormData(this.form);
    const nameField = this.form.querySelector('#one_time_purchase');
    const name = nameField === null || nameField === void 0 ? void 0 : nameField.name;
    const subscription = !(nameField === null || nameField === void 0 ? void 0 : nameField.checked);
    const subscriptionTerm = ((_b = formData.get('subscription-term')) === null || _b === void 0 ? void 0 : _b.toString()) || '';

    if (subscription) {
      data.subscription = subscriptionTerm;
    }

    (0,_util_requests__WEBPACK_IMPORTED_MODULE_4__.sendAjaxRequest)(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this), undefined, this.button);
    return false;
  }

  onSuccess(response) {
    if (response.success === false) {
      throw new Error('something is wrong');
    }

    _ui_SidePanel__WEBPACK_IMPORTED_MODULE_2__["default"].openSidePanel('cart-panel');
    _cart__WEBPACK_IMPORTED_MODULE_0__["default"].updateCart();

    if (response.data.cartAmount) {
      (0,_util_cart__WEBPACK_IMPORTED_MODULE_3__["default"])(response.data.cartAmount);
    }
  }

  onFailure() {// stub
  }

  disableSubscriptionVariants() {
    const fields = Array.from(this.form.querySelectorAll('.custom-radio--subscription input'));
    fields.forEach(field => {
      field.disabled = true;
      field.removeAttribute('checked');
    });
  }

  static onInit(selector = document) {
    const addToCartForm = selector.querySelector('form.cart');

    if (addToCartForm === null) {
      return;
    }

    const ajaxAddToCart = new AjaxAddToCart(addToCartForm);
    ajaxAddToCart.initialize();
  }

}
_AjaxAddToCart_instances = new WeakSet(), _AjaxAddToCart_disableField = function _AjaxAddToCart_disableField(field) {
  // field.disabled = true;
  field.toggleAttribute('aria-disabled', true);
  field.removeAttribute('checked');
}, _AjaxAddToCart_enableField = function _AjaxAddToCart_enableField(field) {
  field.removeAttribute('disabled');
  field.removeAttribute('aria-disabled');
};

/***/ }),

/***/ "./assets/js/components/ChangeVariantColor.ts":
/*!****************************************************!*\
  !*** ./assets/js/components/ChangeVariantColor.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ChangeVariantColor; }
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/string */ "./assets/js/util/string.ts");


class ChangeVariantColor extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elements) {
    super();
    this.elements = elements;
  }

  initialize() {
    const label = document.querySelector('.product-detail__variation__label--color');

    if (!this.elements.length || !label) {
      return;
    }

    const text = label.textContent;
    this.elements.forEach(radio => {
      radio.addEventListener('change', () => {
        const value = (0,_util_string__WEBPACK_IMPORTED_MODULE_1__.toTitleCase)(radio.value);

        if (!value) {
          return;
        }

        label.innerText = `${text}: ${value}`;
      });

      if (radio.checked) {
        radio.dispatchEvent(new Event('change'));
      }
    });
  }

  static onInit(selector = document) {
    const radioButtons = Array.from(selector.querySelectorAll('[name="attribute_pa_color"]'));

    if (!radioButtons.length) {
      return;
    }

    const instance = new ChangeVariantColor(radioButtons);
    instance.initialize();
  }

}

/***/ }),

/***/ "./assets/js/components/ChangeVariantPrice.ts":
/*!****************************************************!*\
  !*** ./assets/js/components/ChangeVariantPrice.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ChangeVariantPrice; }
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* eslint-disable camelcase */


class ChangeVariantPrice extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elements) {
    super();
    this.ajaxEndpoint = `${window.location.origin}/wp-admin/admin-ajax.php`;
    this.regularPriceElements = [];
    this.salePriceElement = null;
    this.elements = elements;
  }

  initialize() {
    this.regularPriceElements = Array.from(document.querySelectorAll('.product-detail__price ins [data-product-price]'));

    if (!this.regularPriceElements.length) {
      this.regularPriceElements = Array.from(document.querySelectorAll('.product-detail__price [data-product-price]'));
    }

    this.salePriceElement = document.querySelector('.product-detail__price del [data-product-price]');

    if (!this.salePriceElement && !this.regularPriceElements.length) {
      return;
    }

    const form = this.elements[0].closest('form');

    if (!form) {
      return;
    }

    const {
      product_id
    } = form.dataset;

    if (!product_id) {
      return;
    }

    this.elements.forEach(radio => {
      radio.addEventListener('change', () => {
        const variationIdElement = form.querySelector('[name="variation_id"]');
        const variation_id = variationIdElement === null || variationIdElement === void 0 ? void 0 : variationIdElement.value;

        if (!variation_id || !product_id) {
          return;
        }

        const data = {
          action: 'ajaxgetvariantprice',
          product_id,
          variation_id
        };
        (0,_util_requests__WEBPACK_IMPORTED_MODULE_1__.sendAjaxRequest)(data, this.ajaxEndpoint, null, this.onSuccess.bind(this));
      });
    });
  }

  onSuccess(response) {
    if (!response.data || !response.data.salePrice && !response.data.regularPrice) {
      throw new Error('No data');
    }

    const regularPrice = Number(response.data.regularPrice).toFixed(2);
    const salePrice = Number(response.data.salePrice).toFixed(2);

    if (this.regularPriceElements.length && regularPrice) {
      this.regularPriceElements.forEach(el => {
        el.innerText = regularPrice;
      });
    }

    if (this.salePriceElement && salePrice) {
      this.salePriceElement.innerText = salePrice;
    }
  }

  static onInit(selector = document) {
    const radioButtons = Array.from(selector.querySelectorAll('.product-detail__variations input[type="radio'));

    if (!radioButtons.length) {
      return;
    }

    const instance = new ChangeVariantPrice(radioButtons);
    instance.initialize();
  }

}

/***/ }),

/***/ "./assets/js/components/ImageGallery.ts":
/*!**********************************************!*\
  !*** ./assets/js/components/ImageGallery.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ImageGallery; }
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");

class ImageGallery extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element) {
    super();
    this.element = element;
  }

  initialize() {
    const thumbnailAnchors = Array.from(this.element.querySelectorAll('.product-detail__gallery__thumbnails a'));
    thumbnailAnchors.forEach(anchor => {
      anchor.addEventListener('click', event => {
        event.preventDefault();
        const id = anchor.dataset.thumbnailId;
        const image = this.element.querySelector(`[data-image-id="${id}"]`);

        if (image === null) {
          return;
        }

        const imageParent = image.parentElement;
        Array.from(imageParent.querySelectorAll('li.active')).forEach(element => {
          element.classList.remove('active');
        });
        image.classList.add('active');
      });
    });
  }

  static onInit(selector = document) {
    const element = selector.querySelector('.product-detail__gallery');

    if (element === null) {
      return;
    }

    const instance = new ImageGallery(element);
    instance.initialize();
  }

}

/***/ }),

/***/ "./assets/js/productDetail.ts":
/*!************************************!*\
  !*** ./assets/js/productDetail.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ProductDetail; }
/* harmony export */ });
/* harmony import */ var _components_AjaxAddToCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AjaxAddToCart */ "./assets/js/components/AjaxAddToCart.ts");
/* harmony import */ var _components_AmountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AmountSelector */ "./assets/js/components/AmountSelector.ts");
/* harmony import */ var _components_ChangeVariantColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ChangeVariantColor */ "./assets/js/components/ChangeVariantColor.ts");
/* harmony import */ var _components_ChangeVariantPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ChangeVariantPrice */ "./assets/js/components/ChangeVariantPrice.ts");
/* harmony import */ var _components_ImageGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ImageGallery */ "./assets/js/components/ImageGallery.ts");
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");
/* harmony import */ var _common_DataLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/DataLayer */ "./assets/js/common/DataLayer.ts");







class ProductDetail extends _Module__WEBPACK_IMPORTED_MODULE_5__["default"] {
  constructor() {
    super(...arguments);
    this.components = [_components_AjaxAddToCart__WEBPACK_IMPORTED_MODULE_0__["default"], _components_AmountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], _components_ImageGallery__WEBPACK_IMPORTED_MODULE_4__["default"], _components_ChangeVariantPrice__WEBPACK_IMPORTED_MODULE_3__["default"], _components_ChangeVariantColor__WEBPACK_IMPORTED_MODULE_2__["default"]];
  }

  initialize() {
    var _a, _b, _c;

    super.initialize();
    const data = {
      event: 'view_item',
      ecommerce: {
        items: []
      }
    };
    const form = document.querySelector('form[data-product_id]');
    const variationField = document.querySelector('input[name="variation_id"]');
    const productData = {
      item_id: (form === null || form === void 0 ? void 0 : form.dataset.product_id) || '',
      item_name: ((_a = document.querySelector('.product-detail__title')) === null || _a === void 0 ? void 0 : _a.textContent) || '',
      item_variant: (variationField === null || variationField === void 0 ? void 0 : variationField.value) || '',
      price: Number((_c = (_b = document.querySelector('[data-product-price]')) === null || _b === void 0 ? void 0 : _b.textContent) === null || _c === void 0 ? void 0 : _c.replace(',', '.')) || 0,
      item_brand: 'Lavandré'
    };
    data.ecommerce.items.push(productData);
    _common_DataLayer__WEBPACK_IMPORTED_MODULE_6__["default"].push(data);
  }

}

(function productDetailInit() {
  const productDetail = new ProductDetail();
  productDetail.initialize();
})();

/***/ }),

/***/ "./assets/js/ui/Dialog.ts":
/*!********************************!*\
  !*** ./assets/js/ui/Dialog.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Dialog; }
/* harmony export */ });
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! dialog-polyfill */ "./node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_body__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/body */ "./assets/js/util/body.ts");
/* harmony import */ var _util_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/string */ "./assets/js/util/string.ts");




class Dialog extends _common_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(element) {
    super();
    this._isOpen = false;
    this._transitionTime = 0;
    this.element = element;
  }

  get isOpen() {
    return this._isOpen;
  }

  set isOpen(value) {
    this._isOpen = value;
  }

  get camelDataAttribute() {
    const value = this.dataAttribute.replace('data-', '');
    return (0,_util_string__WEBPACK_IMPORTED_MODULE_3__.toCamelCase)(value);
  }

  get transitionTime() {
    if (this._transitionTime) {
      return this._transitionTime;
    }

    this._transitionTime = this.getTransitionTime();
    return this._transitionTime;
  }

  initialize() {
    this.polyfillDialog();
    this.setEventListeners();
  }

  setEventListeners() {
    this.element.addEventListener('open', () => {
      this.open();
    });
    this.element.addEventListener('toggle', () => {
      this.toggle();
    });
    const closeButtons = Array.from(document.querySelectorAll('[data-close]'));
    closeButtons.forEach(button => {
      button.addEventListener('click', () => {
        this.close();
      });
    });
    this.element.addEventListener('click', e => {
      this.outsideClick(e);
    });
  }

  outsideClick(event) {
    const target = event.target;

    if (target === this.element) {
      const rect = target.getBoundingClientRect();
      const clickedInDialog = rect.top <= event.clientY && event.clientY <= rect.top + rect.height && rect.left <= event.clientX && event.clientX <= rect.left + rect.width;

      if (!clickedInDialog) {
        this.close();
      }

      return;
    }

    if (!target.closest(`[${this.dataAttribute}="${this.element.dataset[`${this.camelDataAttribute}`]}"]`)) {
      this.close();
    }
  }

  toggle() {
    if (this.isOpen) {
      this.close();
      return;
    }

    this.open();
  }

  open() {
    if (this.isOpen) {
      return;
    }

    (0,_util_body__WEBPACK_IMPORTED_MODULE_2__.disableBodyScroll)();
    this.element.showModal();
    this.isOpen = true;
    this.element.classList.add(this.classes.open);
    setTimeout(() => {
      this.element.classList.remove(this.classes.closed);
    }, this.transitionTime);
  }

  close() {
    (0,_util_body__WEBPACK_IMPORTED_MODULE_2__.enableBodyScroll)();
    this.element.classList.remove(this.classes.open);
    setTimeout(() => {
      this.element.classList.add(this.classes.closed);
      this.element.close();
      this.isOpen = false;
    }, this.transitionTime);
  }

  getTransitionTime() {
    var _a;

    const styles = getComputedStyle(this.element);
    const transitionDuration = (_a = styles.transitionDuration) !== null && _a !== void 0 ? _a : '';
    const duration = transitionDuration.indexOf('ms') > -1 ? parseFloat(transitionDuration) : parseFloat(transitionDuration) * 1000;
    return duration || 400;
  }

  polyfillDialog() {
    dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"] === null || dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"] === void 0 ? void 0 : dialog_polyfill__WEBPACK_IMPORTED_MODULE_0__["default"].registerDialog(this.element);
  }

}

/***/ }),

/***/ "./assets/js/ui/SidePanel.ts":
/*!***********************************!*\
  !*** ./assets/js/ui/SidePanel.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SidePanel; }
/* harmony export */ });
/* harmony import */ var _css_components_sidePanel_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_sidePanel.pcss */ "./assets/css/components/_sidePanel.pcss");
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter */ "./assets/js/common/EventEmitter.ts");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./assets/js/ui/Dialog.ts");



class SidePanel extends _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super(...arguments);
    this.dataAttribute = 'data-panel-name';
    this.classes = {
      open: 'side-panel--opened',
      closed: 'side-panel--closed',
      left: 'side-panel--left',
      right: 'side-panel--right'
    };
  }

  static openSidePanel(panelID, element = null) {
    var _a;

    let panel = document.querySelector(`[data-panel-name="${panelID}"]`);

    if (panel === null) {
      const template = document.querySelector(`[data-panel-template="${panelID}"]`);

      if (template === null) {
        if (element && element instanceof HTMLAnchorElement) {
          window.location.href = element.href;
          return;
        }

        return;
      }

      const clone = template.cloneNode(true);
      const {
        content
      } = clone;
      (_a = template.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(content);
      panel = document.querySelector(`[data-panel-name="${panelID}"]`);
      _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit('template-instantiated', panel);

      if (panel === null) {
        return;
      }

      const sidePanelInstance = new SidePanel(panel);
      sidePanelInstance.initialize();
    }

    const toggleEvent = new CustomEvent('toggle');
    panel.dispatchEvent(toggleEvent);
  }

  static onInit() {
    super.onInit();
    const panelLinks = Array.from(document.querySelectorAll('[data-panel]'));

    for (let index = 0; index < panelLinks.length; index++) {
      const element = panelLinks[index];
      element.removeEventListener('click', this.handleCreationEvent);
      element.addEventListener('click', this.handleCreationEvent);
    }
  }

  static handleCreationEvent(event) {
    event.preventDefault();
    const panelID = this.dataset.panel || ''; // If already logged in follow link

    if (this instanceof HTMLAnchorElement && panelID === 'my-account-panel' && document.body.classList.contains('logged-in')) {
      window.location.href = this.href;
      return;
    }

    SidePanel.openSidePanel(panelID, this);
  }

}

/***/ }),

/***/ "./assets/js/util/body.ts":
/*!********************************!*\
  !*** ./assets/js/util/body.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "disableBodyScroll": function() { return /* binding */ disableBodyScroll; },
/* harmony export */   "enableBodyScroll": function() { return /* binding */ enableBodyScroll; }
/* harmony export */ });
const bodyElement = document.querySelector('body');
let scrollPosition = 0;
function disableBodyScroll() {
  scrollPosition = window.pageYOffset;
  bodyElement.style.overflow = 'hidden';
  bodyElement.style.position = 'fixed';
  bodyElement.style.top = `-${scrollPosition}px`;
  bodyElement.style.width = '100%';
  document.documentElement.style.scrollBehavior = 'initial';
}
function enableBodyScroll() {
  bodyElement.style.removeProperty('overflow');
  bodyElement.style.removeProperty('position');
  bodyElement.style.removeProperty('top');
  bodyElement.style.removeProperty('width');
  bodyElement.style.removeProperty('top');
  window.scrollTo(0, scrollPosition);
  document.documentElement.style.removeProperty('scroll-behavior');
}

/***/ }),

/***/ "./assets/js/util/string.ts":
/*!**********************************!*\
  !*** ./assets/js/util/string.ts ***!
  \**********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "toCamelCase": function() { return /* binding */ toCamelCase; },
/* harmony export */   "toTitleCase": function() { return /* binding */ toTitleCase; }
/* harmony export */ });
function toCamelCase(str) {
  return str.replace(/\W+(.)/g, (match, chr) => chr.toUpperCase());
}
function toTitleCase(str) {
  return str.replace(/\w\S*/g, txt => txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase());
}

/***/ }),

/***/ "./assets/css/components/_sidePanel.pcss":
/*!***********************************************!*\
  !*** ./assets/css/components/_sidePanel.pcss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_dialog-polyfill_dist_dialog-polyfill_esm_js","assets_js_cart_ts-assets_js_components_AddCouponCode_ts"], function() { return __webpack_exec__("./assets/js/productDetail.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QXFCa0UsR0FBckIsRUFBMEI7QUFDN0IsU0FBT0EsR0FBRyxDQUFDekUsT0FBSixDQUFZLFNBQVosRUFBdUIsQ0FBQzlFLEtBQUQsRUFBUXdKLEdBQVIsS0FBZ0JBLEdBQUcsQ0FBQ0MsV0FBSixFQUF2QyxDQUFQO0FBQ0g7QUFDTSxTQUFTakgsV0FBVCxDQUFxQitHLEdBQXJCLEVBQTBCO0FBQzdCLFNBQU9BLEdBQUcsQ0FBQ3pFLE9BQUosQ0FBWSxRQUFaLEVBQXVCNEUsR0FBRCxJQUFTQSxHQUFHLENBQUNDLE1BQUosQ0FBVyxDQUFYLEVBQWNGLFdBQWQsS0FBOEJDLEdBQUcsQ0FBQ0UsTUFBSixDQUFXLENBQVgsRUFBY0MsV0FBZCxFQUE3RCxDQUFQO0FBQ0g7Ozs7Ozs7Ozs7O0FDTEQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9Nb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tbW9uL0RhdGFMYXllci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FqYXhBZGRUb0NhcnQudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9DaGFuZ2VWYXJpYW50Q29sb3IudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9DaGFuZ2VWYXJpYW50UHJpY2UudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9JbWFnZUdhbGxlcnkudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvcHJvZHVjdERldGFpbC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9EaWFsb2cudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdWkvU2lkZVBhbmVsLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvYm9keS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL3N0cmluZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fc2lkZVBhbmVsLnBjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgJy4vY2FydCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5vbigndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0aWFsaXplQ29tcG9uZW50cyhzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbXBvbmVudC5vbkluaXQoc2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJjbGFzcyBEYXRhTGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgPyB3aW5kb3cuZGF0YUxheWVyIDogW107XG4gICAgfVxuICAgIHB1c2goZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFMYXllci5wdXNoKHsgZWNvbW1lcmNlOiBudWxsIH0pOyAvLyBDbGVhciB0aGUgcHJldmlvdXMgZWNvbW1lcmNlIG9iamVjdC5cbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICB9XG59XG5leHBvcnQgeyBEYXRhTGF5ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBEYXRhTGF5ZXIoKTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9BamF4QWRkVG9DYXJ0X2luc3RhbmNlcywgX0FqYXhBZGRUb0NhcnRfZGlzYWJsZUZpZWxkLCBfQWpheEFkZFRvQ2FydF9lbmFibGVGaWVsZDtcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vY2FydCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IFNpZGVQYW5lbCBmcm9tICcuLi91aS9TaWRlUGFuZWwnO1xuaW1wb3J0IGFkZE9yVXBkYXRlQ2FydFRvdGFscyBmcm9tICcuLi91dGlsL2NhcnQnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4QWRkVG9DYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICAvLyBwcml2YXRlIG91dE9mU3RvY2tIYW5kbGVyID0gKGZpZWxkOiBIVE1MSW5wdXRFbGVtZW50KSA9PiB7XG4gICAgLy8gICAgIGlmIChmaWVsZC5jaGVja2VkID09PSBmYWxzZSkge1xuICAgIC8vICAgICAgICAgcmV0dXJuO1xuICAgIC8vICAgICB9XG4gICAgLy8gICAgIHRoaXMuZGlzYWJsZUJ1dHRvbk9uT3V0T2ZTdG9jaygpO1xuICAgIC8vIH07XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuYnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltuYW1lPVwiYWRkLXRvLWNhcnRcIl0nKTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX3ZhcmlhdGlvbnMgaW5wdXQnKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaXplTmFtZSA9ICdhdHRyaWJ1dGVfcGFfc2l6ZSc7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaXplVmFsdWUgPSB0aGlzLmZvcm1bY3VycmVudFNpemVOYW1lXS52YWx1ZTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VWYXJpYXRpb25BdHRyaWJ1dGUoY3VycmVudFNpemVOYW1lLCBjdXJyZW50U2l6ZVZhbHVlKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICB2YXJpYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlKHZhcmlhdGlvbi5uYW1lLCB2YXJpYXRpb24udmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQWRkVG9DYXJ0Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZShuYW1lID0gJycsIHZhbHVlID0gJycpIHtcbiAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudmFyaWF0aW9uRmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uID0gdGhpcy52YXJpYXRpb25GaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lIH0gPSB2YXJpYXRpb247XG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9ybVtuYW1lXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb25zW25hbWVdID0gdGhpcy5mb3JtW25hbWVdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhcmlhdGlvbklEID0gdGhpcy5maW5kTWF0Y2hpbmdWYXJpYW50KGN1cnJlbnRPcHRpb25zKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlTm9uRXhpc3RpbmdWYXJpYW50cyhuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZGlzYWJsZU91dE9mU3RvY2tWYXJpYW50cyhuYW1lLCB2YWx1ZSk7XG4gICAgICAgIGNvbnN0IHNlbGVjdGVkVmFyaWF0aW9uID0gdGhpcy52YXJpYXRpb25EYXRhLmZpbmQoKHZhcmlhdGlvbikgPT4gdmFyaWF0aW9uLnZhcmlhdGlvbl9pZCA9PT0gdmFyaWF0aW9uSUQpO1xuICAgICAgICBjb25zb2xlLmxvZyhzZWxlY3RlZFZhcmlhdGlvbik7XG4gICAgICAgIGlmIChzZWxlY3RlZFZhcmlhdGlvbi5pc19pbl9zdG9jayA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKCdvdXQgb2Ygc3RvY2snKTtcbiAgICAgICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbk9uT3V0T2ZTdG9jaygpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2luIHN0b2NrJyk7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUJ1dHRvbk9uT3V0T2ZTdG9jaygpO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkQ2hlY2tlcigpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEZpcnN0QXZhaWxhYmxlVmFyaWFudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlU3Vic2NyaXB0aW9uVmFyaWFudHMoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uSWZPdXRPZlN0b2NrKCk7XG4gICAgICAgIGlmICghdmFyaWF0aW9uSUQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9ybUludmFsaWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm0udmFyaWF0aW9uX2lkLnZhbHVlID0gdmFyaWF0aW9uSUQ7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKHdpbmRvdy5qUXVlcnkpIHtcbiAgICAgICAgICAgIHdpbmRvd1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAualF1ZXJ5KHRoaXMuZm9ybSlcbiAgICAgICAgICAgICAgICAudHJpZ2dlcignc2hvd192YXJpYXRpb24nLCBbdGhpcy5maW5kTWF0Y2hpbmdWYXJpYW50RGF0YShjdXJyZW50T3B0aW9ucyldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRGb3JtSW52YWxpZCgpIHtcbiAgICAgICAgdGhpcy5mb3JtLnByb2R1Y3RfaWQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5mb3JtLnZhcmlhdGlvbl9pZC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBkaXNhYmxlZENoZWNrZXIoKSB7XG4gICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZpZWxkLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICBzZWxlY3RGaXJzdEF2YWlsYWJsZVZhcmlhbnQoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgbmFtZXMuYWRkKGZpZWxkLm5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKGBbbmFtZT1cIiR7bmFtZX1cIl1gKSk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRGaWVsZCA9IGZhbHNlO1xuICAgICAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQpIHtcbiAgICAgICAgICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzYWJsZUJ1dHRvbklmT3V0T2ZTdG9jaygpIHtcbiAgICAgICAgbGV0IGlzSW5TdG9jayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFyaWF0aW9uLmlzX2luX3N0b2NrKSB7XG4gICAgICAgICAgICAgICAgaXNJblN0b2NrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNJblN0b2NrKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b25Pbk91dE9mU3RvY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNhYmxlQnV0dG9uT25PdXRPZlN0b2NrKCkge1xuICAgICAgICB0aGlzLmJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idXR0b24ubGFiZWwgPSB0aGlzLmJ1dHRvbi5kYXRhc2V0Lm91dE9mU3RvY2sgfHwgJ091dCBvZiBzdG9jayc7XG4gICAgfVxuICAgIGVuYWJsZUJ1dHRvbk9uT3V0T2ZTdG9jaygpIHtcbiAgICAgICAgdGhpcy5idXR0b24uaXNEaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICB0aGlzLmJ1dHRvbi5sYWJlbCA9IHRoaXMuYnV0dG9uLmRhdGFzZXQuaW5TdG9jayB8fCAnQWRkIHRvIEJhZyc7XG4gICAgfVxuICAgIGRpc2FibGVPdXRPZlN0b2NrVmFyaWFudHMobmFtZSA9ICcnLCB2YWx1ZSA9ICcnKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnYXR0cmlidXRlX3BhX2Ftb3VudCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGF0dHJpYnV0ZXNbZmllbGQubmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoID09PSBmaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YXJpYXRpb24uaXNfaW5fc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BamF4QWRkVG9DYXJ0X2luc3RhbmNlcywgXCJtXCIsIF9BamF4QWRkVG9DYXJ0X2Rpc2FibGVGaWVsZCkuY2FsbCh0aGlzLCBmaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YS5mb3JFYWNoKCh2YXJpYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gdmFyaWF0aW9uO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBhdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gYXR0cmlidXRlc1tmaWVsZC5uYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPT09IGZpZWxkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFyaWF0aW9uLmlzX2luX3N0b2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMsIFwibVwiLCBfQWpheEFkZFRvQ2FydF9lbmFibGVGaWVsZCkuY2FsbCh0aGlzLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNhYmxlTm9uRXhpc3RpbmdWYXJpYW50cyhuYW1lID0gJycsIHZhbHVlID0gJycpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdhdHRyaWJ1dGVfcGFfYW1vdW50Jykge1xuICAgICAgICB9XG4gICAgfVxuICAgIGZpbmRNYXRjaGluZ1ZhcmlhbnQoY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHZhcmlhdGlvbklEID0gbnVsbDtcbiAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5mb3JtLmRhdGFzZXQucHJvZHVjdF92YXJpYXRpb25zO1xuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhcmlhdGlvbklEID0gdmFyaWF0aW9uLnZhcmlhdGlvbl9pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YXJpYXRpb25JRDtcbiAgICB9XG4gICAgZmluZE1hdGNoaW5nVmFyaWFudERhdGEoY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHJldHVyblZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMudmFyaWF0aW9uRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZvcm0uZGF0YXNldC5wcm9kdWN0X3ZhcmlhdGlvbnM7XG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGlmICghdGhpcy52YXJpYXRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFyaWF0aW9uO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICBoYW5kbGVBZGRUb0NhcnRDbGljayhldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFyaWF0aW9uX2lkID0gMDtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkRWxlbWVudCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScpO1xuICAgICAgICBjb25zdCB2YXJpYXRpb25JZEVsZW1lbnQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgaWYgKHZhcmlhdGlvbklkRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyaWF0aW9uX2lkID0gTnVtYmVyKHZhcmlhdGlvbklkRWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvcm1Jc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZhbGlkYXRlJykpO1xuICAgICAgICAgICAgaWYgKCFmaWVsZC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgICAgIGZvcm1Jc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWZvcm1Jc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2R1Y3QgYWRkIGZvcm0gaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBOdW1iZXIoKF9hID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWFudGl0eVwiXScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpIHx8IDE7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4YWRkdG9jYXJ0JyxcbiAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHRoaXMuYnV0dG9uLnZhbHVlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICB2YXJpYXRpb25faWQ6IHZhcmlhdGlvbl9pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBjb25zdCBuYW1lRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignI29uZV90aW1lX3B1cmNoYXNlJyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRmllbGQgPT09IG51bGwgfHwgbmFtZUZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lRmllbGQubmFtZTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gIShuYW1lRmllbGQgPT09IG51bGwgfHwgbmFtZUZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lRmllbGQuY2hlY2tlZCk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvblRlcm0gPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdzdWJzY3JpcHRpb24tdGVybScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGRhdGEuc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uVGVybTtcbiAgICAgICAgfVxuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIHVuZGVmaW5lZCwgdGhpcy5idXR0b24pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIGlzIHdyb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwoJ2NhcnQtcGFuZWwnKTtcbiAgICAgICAgQ2FydC51cGRhdGVDYXJ0KCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNhcnRBbW91bnQpIHtcbiAgICAgICAgICAgIGFkZE9yVXBkYXRlQ2FydFRvdGFscyhyZXNwb25zZS5kYXRhLmNhcnRBbW91bnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uRmFpbHVyZSgpIHtcbiAgICAgICAgLy8gc3R1YlxuICAgIH1cbiAgICBkaXNhYmxlU3Vic2NyaXB0aW9uVmFyaWFudHMoKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8tLXN1YnNjcmlwdGlvbiBpbnB1dCcpKTtcbiAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBhZGRUb0NhcnRGb3JtID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignZm9ybS5jYXJ0Jyk7XG4gICAgICAgIGlmIChhZGRUb0NhcnRGb3JtID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWpheEFkZFRvQ2FydCA9IG5ldyBBamF4QWRkVG9DYXJ0KGFkZFRvQ2FydEZvcm0pO1xuICAgICAgICBhamF4QWRkVG9DYXJ0LmluaXRpYWxpemUoKTtcbiAgICB9XG59XG5fQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQWpheEFkZFRvQ2FydF9kaXNhYmxlRmllbGQgPSBmdW5jdGlvbiBfQWpheEFkZFRvQ2FydF9kaXNhYmxlRmllbGQoZmllbGQpIHtcbiAgICAvLyBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgZmllbGQudG9nZ2xlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSk7XG4gICAgZmllbGQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG59LCBfQWpheEFkZFRvQ2FydF9lbmFibGVGaWVsZCA9IGZ1bmN0aW9uIF9BamF4QWRkVG9DYXJ0X2VuYWJsZUZpZWxkKGZpZWxkKSB7XG4gICAgZmllbGQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGZpZWxkLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xufTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyB0b1RpdGxlQ2FzZSB9IGZyb20gJy4uL3V0aWwvc3RyaW5nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZVZhcmlhbnRDb2xvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fdmFyaWF0aW9uX19sYWJlbC0tY29sb3InKTtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmxlbmd0aCB8fCAhbGFiZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZXh0ID0gbGFiZWwudGV4dENvbnRlbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRvVGl0bGVDYXNlKHJhZGlvLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gYCR7dGV4dH06ICR7dmFsdWV9YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICByYWRpby5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJhdHRyaWJ1dGVfcGFfY29sb3JcIl0nKSk7XG4gICAgICAgIGlmICghcmFkaW9CdXR0b25zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENoYW5nZVZhcmlhbnRDb2xvcihyYWRpb0J1dHRvbnMpO1xuICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VWYXJpYW50UHJpY2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGV0YWlsX19wcmljZSBpbnMgW2RhdGEtcHJvZHVjdC1wcmljZV0nKSk7XG4gICAgICAgIGlmICghdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWRldGFpbF9fcHJpY2UgW2RhdGEtcHJvZHVjdC1wcmljZV0nKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zYWxlUHJpY2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX19wcmljZSBkZWwgW2RhdGEtcHJvZHVjdC1wcmljZV0nKTtcbiAgICAgICAgaWYgKCF0aGlzLnNhbGVQcmljZUVsZW1lbnQgJiYgIXRoaXMucmVndWxhclByaWNlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZWxlbWVudHNbMF0uY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHByb2R1Y3RfaWQgfSA9IGZvcm0uZGF0YXNldDtcbiAgICAgICAgaWYgKCFwcm9kdWN0X2lkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbklkRWxlbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYXRpb25faWQgPSB2YXJpYXRpb25JZEVsZW1lbnQgPT09IG51bGwgfHwgdmFyaWF0aW9uSWRFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YXJpYXRpb25JZEVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF2YXJpYXRpb25faWQgfHwgIXByb2R1Y3RfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdhamF4Z2V0dmFyaWFudHByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uX2lkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhIHx8ICghcmVzcG9uc2UuZGF0YS5zYWxlUHJpY2UgJiYgIXJlc3BvbnNlLmRhdGEucmVndWxhclByaWNlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBkYXRhJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVndWxhclByaWNlID0gTnVtYmVyKHJlc3BvbnNlLmRhdGEucmVndWxhclByaWNlKS50b0ZpeGVkKDIpO1xuICAgICAgICBjb25zdCBzYWxlUHJpY2UgPSBOdW1iZXIocmVzcG9uc2UuZGF0YS5zYWxlUHJpY2UpLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzLmxlbmd0aCAmJiByZWd1bGFyUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5pbm5lclRleHQgPSByZWd1bGFyUHJpY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zYWxlUHJpY2VFbGVtZW50ICYmIHNhbGVQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5zYWxlUHJpY2VFbGVtZW50LmlubmVyVGV4dCA9IHNhbGVQcmljZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX3ZhcmlhdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvJykpO1xuICAgICAgICBpZiAoIXJhZGlvQnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDaGFuZ2VWYXJpYW50UHJpY2UocmFkaW9CdXR0b25zKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsQW5jaG9ycyA9IEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWRldGFpbF9fZ2FsbGVyeV9fdGh1bWJuYWlscyBhJykpO1xuICAgICAgICB0aHVtYm5haWxBbmNob3JzLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICAgICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGFuY2hvci5kYXRhc2V0LnRodW1ibmFpbElkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWltYWdlLWlkPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVBhcmVudCA9IGltYWdlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShpbWFnZVBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaS5hY3RpdmUnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fZ2FsbGVyeScpO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEltYWdlR2FsbGVyeShlbGVtZW50KTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBBamF4QWRkVG9DYXJ0IGZyb20gJy4vY29tcG9uZW50cy9BamF4QWRkVG9DYXJ0JztcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tICcuL2NvbXBvbmVudHMvQW1vdW50U2VsZWN0b3InO1xuaW1wb3J0IENoYW5nZVZhcmlhbnRDb2xvciBmcm9tICcuL2NvbXBvbmVudHMvQ2hhbmdlVmFyaWFudENvbG9yJztcbmltcG9ydCBDaGFuZ2VWYXJpYW50UHJpY2UgZnJvbSAnLi9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRQcmljZSc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnknO1xuaW1wb3J0IE1vZHVsZSBmcm9tICcuL01vZHVsZSc7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gJy4vY29tbW9uL0RhdGFMYXllcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW1xuICAgICAgICAgICAgQWpheEFkZFRvQ2FydCxcbiAgICAgICAgICAgIEFtb3VudFNlbGVjdG9yLFxuICAgICAgICAgICAgSW1hZ2VHYWxsZXJ5LFxuICAgICAgICAgICAgQ2hhbmdlVmFyaWFudFByaWNlLFxuICAgICAgICAgICAgQ2hhbmdlVmFyaWFudENvbG9yXG4gICAgICAgIF07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ3ZpZXdfaXRlbScsXG4gICAgICAgICAgICBlY29tbWVyY2U6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bZGF0YS1wcm9kdWN0X2lkXScpO1xuICAgICAgICBjb25zdCB2YXJpYXRpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdERhdGEgPSB7XG4gICAgICAgICAgICBpdGVtX2lkOiAoZm9ybSA9PT0gbnVsbCB8fCBmb3JtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtLmRhdGFzZXQucHJvZHVjdF9pZCkgfHwgJycsXG4gICAgICAgICAgICBpdGVtX25hbWU6ICgoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kZXRhaWxfX3RpdGxlJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50ZXh0Q29udGVudCkgfHwgJycsXG4gICAgICAgICAgICBpdGVtX3ZhcmlhbnQ6ICh2YXJpYXRpb25GaWVsZCA9PT0gbnVsbCB8fCB2YXJpYXRpb25GaWVsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaWF0aW9uRmllbGQudmFsdWUpIHx8ICcnLFxuICAgICAgICAgICAgcHJpY2U6IE51bWJlcigoX2MgPSAoX2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9kdWN0LXByaWNlXScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMCxcbiAgICAgICAgICAgIGl0ZW1fYnJhbmQ6ICdMYXZhbmRyw6knXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEuZWNvbW1lcmNlLml0ZW1zLnB1c2gocHJvZHVjdERhdGEpO1xuICAgICAgICBEYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICB9XG59XG4oZnVuY3Rpb24gcHJvZHVjdERldGFpbEluaXQoKSB7XG4gICAgY29uc3QgcHJvZHVjdERldGFpbCA9IG5ldyBQcm9kdWN0RGV0YWlsKCk7XG4gICAgcHJvZHVjdERldGFpbC5pbml0aWFsaXplKCk7XG59KSgpO1xuIiwiaW1wb3J0IGRpYWxvZ1BvbHlmaWxsIGZyb20gJ2RpYWxvZy1wb2x5ZmlsbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgZGlzYWJsZUJvZHlTY3JvbGwsIGVuYWJsZUJvZHlTY3JvbGwgfSBmcm9tICcuLi91dGlsL2JvZHknO1xuaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tICcuLi91dGlsL3N0cmluZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG4gICAgc2V0IGlzT3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNhbWVsRGF0YUF0dHJpYnV0ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGFBdHRyaWJ1dGUucmVwbGFjZSgnZGF0YS0nLCAnJyk7XG4gICAgICAgIHJldHVybiB0b0NhbWVsQ2FzZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCB0cmFuc2l0aW9uVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zaXRpb25UaW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvblRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWUgPSB0aGlzLmdldFRyYW5zaXRpb25UaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uVGltZTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5wb2x5ZmlsbERpYWxvZygpO1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlXScpKTtcbiAgICAgICAgY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0c2lkZUNsaWNrKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZEluRGlhbG9nID0gcmVjdC50b3AgPD0gZXZlbnQuY2xpZW50WSAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgPD0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHJlY3QubGVmdCA8PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8PSByZWN0LmxlZnQgKyByZWN0LndpZHRoO1xuICAgICAgICAgICAgaWYgKCFjbGlja2VkSW5EaWFsb2cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdChgWyR7dGhpcy5kYXRhQXR0cmlidXRlfT1cIiR7dGhpcy5lbGVtZW50LmRhdGFzZXRbYCR7dGhpcy5jYW1lbERhdGFBdHRyaWJ1dGV9YF19XCJdYCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNhYmxlQm9keVNjcm9sbCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2hvd01vZGFsKCk7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGVuYWJsZUJvZHlTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgZ2V0VHJhbnNpdGlvblRpbWUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSAoX2EgPSBzdHlsZXMudHJhbnNpdGlvbkR1cmF0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uaW5kZXhPZignbXMnKSA+IC0xXG4gICAgICAgICAgICA/IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKiAxMDAwO1xuICAgICAgICByZXR1cm4gZHVyYXRpb24gfHwgNDAwO1xuICAgIH1cbiAgICBwb2x5ZmlsbERpYWxvZygpIHtcbiAgICAgICAgZGlhbG9nUG9seWZpbGwgPT09IG51bGwgfHwgZGlhbG9nUG9seWZpbGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpYWxvZ1BvbHlmaWxsLnJlZ2lzdGVyRGlhbG9nKHRoaXMuZWxlbWVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fc2lkZVBhbmVsLnBjc3MnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZVBhbmVsIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kYXRhQXR0cmlidXRlID0gJ2RhdGEtcGFuZWwtbmFtZSc7XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgICAgICAgIG9wZW46ICdzaWRlLXBhbmVsLS1vcGVuZWQnLFxuICAgICAgICAgICAgY2xvc2VkOiAnc2lkZS1wYW5lbC0tY2xvc2VkJyxcbiAgICAgICAgICAgIGxlZnQ6ICdzaWRlLXBhbmVsLS1sZWZ0JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnc2lkZS1wYW5lbC0tcmlnaHQnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBvcGVuU2lkZVBhbmVsKHBhbmVsSUQsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgaWYgKHBhbmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLXRlbXBsYXRlPVwiJHtwYW5lbElEfVwiXWApO1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZWxlbWVudC5ocmVmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSBjbG9uZTtcbiAgICAgICAgICAgIChfYSA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICAgIHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCBwYW5lbCk7XG4gICAgICAgICAgICBpZiAocGFuZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzaWRlUGFuZWxJbnN0YW5jZSA9IG5ldyBTaWRlUGFuZWwocGFuZWwpO1xuICAgICAgICAgICAgc2lkZVBhbmVsSW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvZ2dsZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKTtcbiAgICAgICAgcGFuZWwuZGlzcGF0Y2hFdmVudCh0b2dnbGVFdmVudCk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgICAgICBjb25zdCBwYW5lbExpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW5lbF0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYW5lbExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhbmVsTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlQ3JlYXRpb25FdmVudChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwYW5lbElEID0gdGhpcy5kYXRhc2V0LnBhbmVsIHx8ICcnO1xuICAgICAgICAvLyBJZiBhbHJlYWR5IGxvZ2dlZCBpbiBmb2xsb3cgbGlua1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmXG4gICAgICAgICAgICBwYW5lbElEID09PSAnbXktYWNjb3VudC1wYW5lbCcgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2dnZWQtaW4nKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwocGFuZWxJRCwgdGhpcyk7XG4gICAgfVxufVxuIiwiY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgc2Nyb2xsUG9zaXRpb24gPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVCb2R5U2Nyb2xsKCkge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnRvcCA9IGAtJHtzY3JvbGxQb3NpdGlvbn1weGA7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ2luaXRpYWwnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUJvZHlTY3JvbGwoKSB7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Bvc2l0aW9uJyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnc2Nyb2xsLWJlaGF2aW9yJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtYXRjaCwgY2hyKSA9PiBjaHIudG9VcHBlckNhc2UoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csICh0eHQpID0+IHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiTW9kdWxlIiwiY29uc3RydWN0b3IiLCJldmVudEVtaXR0ZXIiLCJpbml0aWFsaXplIiwiaW5pdGlhbGl6ZUNvbXBvbmVudHMiLCJvbiIsImVsZW1lbnQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwiY29tcG9uZW50cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJvbkluaXQiLCJEYXRhTGF5ZXIiLCJkYXRhTGF5ZXIiLCJ3aW5kb3ciLCJwdXNoIiwiZGF0YSIsImVjb21tZXJjZSIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJjYWxsIiwidmFsdWUiLCJnZXQiLCJfQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMiLCJfQWpheEFkZFRvQ2FydF9kaXNhYmxlRmllbGQiLCJfQWpheEFkZFRvQ2FydF9lbmFibGVGaWVsZCIsIkNhcnQiLCJDb21wb25lbnQiLCJTaWRlUGFuZWwiLCJhZGRPclVwZGF0ZUNhcnRUb3RhbHMiLCJzZW5kQWpheFJlcXVlc3QiLCJBamF4QWRkVG9DYXJ0IiwiZm9ybSIsImFkZCIsInZhcmlhdGlvbkRhdGEiLCJhamF4RW5kcG9pbnQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJ2YXJpYXRpb25GaWVsZHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlIiwiY3VycmVudFNpemVOYW1lIiwiY3VycmVudFNpemVWYWx1ZSIsInZhcmlhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYW1lIiwiaGFuZGxlQWRkVG9DYXJ0Q2xpY2siLCJiaW5kIiwiY3VycmVudE9wdGlvbnMiLCJpbmRleCIsImxlbmd0aCIsInZhcmlhdGlvbklEIiwiZmluZE1hdGNoaW5nVmFyaWFudCIsImRpc2FibGVOb25FeGlzdGluZ1ZhcmlhbnRzIiwiZGlzYWJsZU91dE9mU3RvY2tWYXJpYW50cyIsInNlbGVjdGVkVmFyaWF0aW9uIiwiZmluZCIsInZhcmlhdGlvbl9pZCIsImNvbnNvbGUiLCJsb2ciLCJpc19pbl9zdG9jayIsImRpc2FibGVCdXR0b25Pbk91dE9mU3RvY2siLCJlbmFibGVCdXR0b25Pbk91dE9mU3RvY2siLCJkaXNhYmxlZENoZWNrZXIiLCJzZWxlY3RGaXJzdEF2YWlsYWJsZVZhcmlhbnQiLCJzZXRUaW1lb3V0IiwiZGlzYWJsZVN1YnNjcmlwdGlvblZhcmlhbnRzIiwiZGlzYWJsZUJ1dHRvbklmT3V0T2ZTdG9jayIsInNldEZvcm1JbnZhbGlkIiwialF1ZXJ5IiwidHJpZ2dlciIsImZpbmRNYXRjaGluZ1ZhcmlhbnREYXRhIiwicHJvZHVjdF9pZCIsInJldHVyblZhbHVlIiwiZmllbGQiLCJkaXNhYmxlZCIsIm5hbWVzIiwiU2V0IiwiZmllbGRzIiwic2VsZWN0ZWRGaWVsZCIsImNoZWNrZWQiLCJpc0luU3RvY2siLCJpc0Rpc2FibGVkIiwibGFiZWwiLCJkYXRhc2V0Iiwib3V0T2ZTdG9jayIsImluU3RvY2siLCJhdHRyaWJ1dGVzIiwiRXJyb3IiLCJtYXRjaCIsInByb2R1Y3RfdmFyaWF0aW9ucyIsIkpTT04iLCJwYXJzZSIsImtleSIsIk9iamVjdCIsImVudHJpZXMiLCJ1bmRlZmluZWQiLCJldmVudCIsIl9hIiwiX2IiLCJwcmV2ZW50RGVmYXVsdCIsInByb2R1Y3RJZEVsZW1lbnQiLCJ2YXJpYXRpb25JZEVsZW1lbnQiLCJOdW1iZXIiLCJmb3JtSXNWYWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJxdWFudGl0eSIsImFjdGlvbiIsInRvU3RyaW5nIiwic3Vic2NyaXB0aW9uIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm5hbWVGaWVsZCIsInN1YnNjcmlwdGlvblRlcm0iLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJvcGVuU2lkZVBhbmVsIiwidXBkYXRlQ2FydCIsImNhcnRBbW91bnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRUb0NhcnRGb3JtIiwiYWpheEFkZFRvQ2FydCIsIldlYWtTZXQiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJ0b1RpdGxlQ2FzZSIsIkNoYW5nZVZhcmlhbnRDb2xvciIsImVsZW1lbnRzIiwidGV4dCIsInRleHRDb250ZW50IiwicmFkaW8iLCJpbm5lclRleHQiLCJyYWRpb0J1dHRvbnMiLCJpbnN0YW5jZSIsIkNoYW5nZVZhcmlhbnRQcmljZSIsInJlZ3VsYXJQcmljZUVsZW1lbnRzIiwic2FsZVByaWNlRWxlbWVudCIsImNsb3Nlc3QiLCJzYWxlUHJpY2UiLCJyZWd1bGFyUHJpY2UiLCJ0b0ZpeGVkIiwiZWwiLCJJbWFnZUdhbGxlcnkiLCJ0aHVtYm5haWxBbmNob3JzIiwiYW5jaG9yIiwiaWQiLCJ0aHVtYm5haWxJZCIsImltYWdlIiwiaW1hZ2VQYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiQW1vdW50U2VsZWN0b3IiLCJQcm9kdWN0RGV0YWlsIiwiYXJndW1lbnRzIiwiX2MiLCJpdGVtcyIsInZhcmlhdGlvbkZpZWxkIiwicHJvZHVjdERhdGEiLCJpdGVtX2lkIiwiaXRlbV9uYW1lIiwiaXRlbV92YXJpYW50IiwicHJpY2UiLCJyZXBsYWNlIiwiaXRlbV9icmFuZCIsInByb2R1Y3REZXRhaWxJbml0IiwicHJvZHVjdERldGFpbCIsImRpYWxvZ1BvbHlmaWxsIiwiZGlzYWJsZUJvZHlTY3JvbGwiLCJlbmFibGVCb2R5U2Nyb2xsIiwidG9DYW1lbENhc2UiLCJEaWFsb2ciLCJfaXNPcGVuIiwiX3RyYW5zaXRpb25UaW1lIiwiaXNPcGVuIiwiY2FtZWxEYXRhQXR0cmlidXRlIiwiZGF0YUF0dHJpYnV0ZSIsInRyYW5zaXRpb25UaW1lIiwiZ2V0VHJhbnNpdGlvblRpbWUiLCJwb2x5ZmlsbERpYWxvZyIsInNldEV2ZW50TGlzdGVuZXJzIiwib3BlbiIsInRvZ2dsZSIsImNsb3NlQnV0dG9ucyIsImNsb3NlIiwiZSIsIm91dHNpZGVDbGljayIsInRhcmdldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGlja2VkSW5EaWFsb2ciLCJ0b3AiLCJjbGllbnRZIiwiaGVpZ2h0IiwibGVmdCIsImNsaWVudFgiLCJ3aWR0aCIsInNob3dNb2RhbCIsImNsYXNzZXMiLCJjbG9zZWQiLCJzdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZHVyYXRpb24iLCJpbmRleE9mIiwicGFyc2VGbG9hdCIsInJlZ2lzdGVyRGlhbG9nIiwicmlnaHQiLCJwYW5lbElEIiwicGFuZWwiLCJ0ZW1wbGF0ZSIsIkhUTUxBbmNob3JFbGVtZW50IiwiaHJlZiIsImNsb25lIiwiY2xvbmVOb2RlIiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiZW1pdCIsInNpZGVQYW5lbEluc3RhbmNlIiwidG9nZ2xlRXZlbnQiLCJDdXN0b21FdmVudCIsInBhbmVsTGlua3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQ3JlYXRpb25FdmVudCIsImJvZHkiLCJjb250YWlucyIsImJvZHlFbGVtZW50Iiwic2Nyb2xsUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsInN0eWxlIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEJlaGF2aW9yIiwicmVtb3ZlUHJvcGVydHkiLCJzY3JvbGxUbyIsInN0ciIsImNociIsInRvVXBwZXJDYXNlIiwidHh0IiwiY2hhckF0Iiwic3Vic3RyIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9