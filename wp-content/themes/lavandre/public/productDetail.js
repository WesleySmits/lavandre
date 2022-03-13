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
      this.button.isDisabled = true;
      this.button.label = 'BOETTON';
      this.button.label = this.button.dataset.outOfStock || 'Out of stock';
    }
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
          if (variation.is_in_stock) {
            return;
          }

          __classPrivateFieldGet(this, _AjaxAddToCart_instances, "m", _AjaxAddToCart_disableField).call(this, field);
        }
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
    if (name === 'attribute_pa_amount') {
      return;
    }

    if (name && value) {
      this.variationFields.forEach(field => {
        if (field.name !== name) {
          field.disabled = true;
        }
      });
    }

    this.variationData.forEach(variation => {
      const {
        attributes
      } = variation;

      if (!attributes) {
        throw new Error('no attributes');
      }

      if (attributes[name] !== value) {
        return;
      }

      this.variationFields.forEach(field => {
        const match = attributes[field.name];

        if (match === field.value) {
          field.disabled = false;
        }
      });
    });
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
  field.disabled = true;
  field.removeAttribute('checked');
}, _AjaxAddToCart_enableField = function _AjaxAddToCart_enableField(field) {
  field.removeAttribute('disabled');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQS9CLENBQThDLGlCQUE5QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNsQk0sU0FBU2hFLFdBQVQsQ0FBcUJrRSxHQUFyQixFQUEwQjtBQUM3QixTQUFPQSxHQUFHLENBQUN6RSxPQUFKLENBQVksU0FBWixFQUF1QixDQUFDN0UsS0FBRCxFQUFRdUosR0FBUixLQUFnQkEsR0FBRyxDQUFDQyxXQUFKLEVBQXZDLENBQVA7QUFDSDtBQUNNLFNBQVNqSCxXQUFULENBQXFCK0csR0FBckIsRUFBMEI7QUFDN0IsU0FBT0EsR0FBRyxDQUFDekUsT0FBSixDQUFZLFFBQVosRUFBdUI0RSxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQVgsRUFBY0YsV0FBZCxLQUE4QkMsR0FBRyxDQUFDRSxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEVBQTdELENBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUNMRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21tb24vRGF0YUxheWVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheEFkZFRvQ2FydC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRDb2xvci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRQcmljZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9wcm9kdWN0RGV0YWlsLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9TaWRlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9ib2R5LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvc3RyaW5nLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19zaWRlUGFuZWwucGNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCAnLi9jYXJ0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb21wb25lbnRzKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29tcG9uZW50Lm9uSW5pdChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNsYXNzIERhdGFMYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciA/IHdpbmRvdy5kYXRhTGF5ZXIgOiBbXTtcbiAgICB9XG4gICAgcHVzaChkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goeyBlY29tbWVyY2U6IG51bGwgfSk7IC8vIENsZWFyIHRoZSBwcmV2aW91cyBlY29tbWVyY2Ugb2JqZWN0LlxuICAgICAgICB0aGlzLmRhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgIH1cbn1cbmV4cG9ydCB7IERhdGFMYXllciB9O1xuZXhwb3J0IGRlZmF1bHQgbmV3IERhdGFMYXllcigpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0FqYXhBZGRUb0NhcnRfaW5zdGFuY2VzLCBfQWpheEFkZFRvQ2FydF9kaXNhYmxlRmllbGQsIF9BamF4QWRkVG9DYXJ0X2VuYWJsZUZpZWxkO1xuLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jYXJ0JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgU2lkZVBhbmVsIGZyb20gJy4uL3VpL1NpZGVQYW5lbCc7XG5pbXBvcnQgYWRkT3JVcGRhdGVDYXJ0VG90YWxzIGZyb20gJy4uL3V0aWwvY2FydCc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhBZGRUb0NhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0FqYXhBZGRUb0NhcnRfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhID0gW107XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bbmFtZT1cImFkZC10by1jYXJ0XCJdJyk7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGV0YWlsX192YXJpYXRpb25zIGlucHV0JykpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50U2l6ZU5hbWUgPSAnYXR0cmlidXRlX3BhX3NpemUnO1xuICAgICAgICBjb25zdCBjdXJyZW50U2l6ZVZhbHVlID0gdGhpcy5mb3JtW2N1cnJlbnRTaXplTmFtZV0udmFsdWU7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlKGN1cnJlbnRTaXplTmFtZSwgY3VycmVudFNpemVWYWx1ZSk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgdmFyaWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZSh2YXJpYXRpb24ubmFtZSwgdmFyaWF0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUFkZFRvQ2FydENsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2VWYXJpYXRpb25BdHRyaWJ1dGUobmFtZSA9ICcnLCB2YWx1ZSA9ICcnKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPcHRpb25zID0ge307XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnZhcmlhdGlvbkZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbiA9IHRoaXMudmFyaWF0aW9uRmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gdmFyaWF0aW9uO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm1bbmFtZV0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9uc1tuYW1lXSA9IHRoaXMuZm9ybVtuYW1lXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YXJpYXRpb25JRCA9IHRoaXMuZmluZE1hdGNoaW5nVmFyaWFudChjdXJyZW50T3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZGlzYWJsZU5vbkV4aXN0aW5nVmFyaWFudHMobmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLmRpc2FibGVPdXRPZlN0b2NrVmFyaWFudHMobmFtZSwgdmFsdWUpO1xuICAgICAgICBpZiAodGhpcy5kaXNhYmxlZENoZWNrZXIoKSkge1xuICAgICAgICAgICAgdGhpcy5zZWxlY3RGaXJzdEF2YWlsYWJsZVZhcmlhbnQoKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzYWJsZVN1YnNjcmlwdGlvblZhcmlhbnRzKCk7XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbklmT3V0T2ZTdG9jaygpO1xuICAgICAgICBpZiAoIXZhcmlhdGlvbklEKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZvcm1JbnZhbGlkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtLnZhcmlhdGlvbl9pZC52YWx1ZSA9IHZhcmlhdGlvbklEO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgICAgICAgICB3aW5kb3dcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgLmpRdWVyeSh0aGlzLmZvcm0pXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoJ3Nob3dfdmFyaWF0aW9uJywgW3RoaXMuZmluZE1hdGNoaW5nVmFyaWFudERhdGEoY3VycmVudE9wdGlvbnMpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0Rm9ybUludmFsaWQoKSB7XG4gICAgICAgIHRoaXMuZm9ybS5wcm9kdWN0X2lkLnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuZm9ybS52YXJpYXRpb25faWQudmFsdWUgPSAnJztcbiAgICB9XG4gICAgZGlzYWJsZWRDaGVja2VyKCkge1xuICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChmaWVsZC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG4gICAgc2VsZWN0Rmlyc3RBdmFpbGFibGVWYXJpYW50KCkge1xuICAgICAgICBjb25zdCBuYW1lcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIG5hbWVzLmFkZChmaWVsZC5uYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lcykge1xuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbChgW25hbWU9XCIke25hbWV9XCJdYCkpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRmllbGQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmllbGQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkKSB7XG4gICAgICAgICAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2FibGVCdXR0b25JZk91dE9mU3RvY2soKSB7XG4gICAgICAgIGxldCBpc0luU3RvY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKHZhcmlhdGlvbi5pc19pbl9zdG9jaykge1xuICAgICAgICAgICAgICAgIGlzSW5TdG9jayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzSW5TdG9jaykge1xuICAgICAgICAgICAgdGhpcy5idXR0b24uaXNEaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5sYWJlbCA9ICdCT0VUVE9OJztcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmxhYmVsID0gdGhpcy5idXR0b24uZGF0YXNldC5vdXRPZlN0b2NrIHx8ICdPdXQgb2Ygc3RvY2snO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2FibGVPdXRPZlN0b2NrVmFyaWFudHMobmFtZSA9ICcnLCB2YWx1ZSA9ICcnKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnYXR0cmlidXRlX3BhX2Ftb3VudCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGF0dHJpYnV0ZXNbZmllbGQubmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoID09PSBmaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAodmFyaWF0aW9uLmlzX2luX3N0b2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMsIFwibVwiLCBfQWpheEFkZFRvQ2FydF9kaXNhYmxlRmllbGQpLmNhbGwodGhpcywgZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB2YXJpYXRpb247XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBhdHRyaWJ1dGVzW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gZmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YXJpYXRpb24uaXNfaW5fc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BamF4QWRkVG9DYXJ0X2luc3RhbmNlcywgXCJtXCIsIF9BamF4QWRkVG9DYXJ0X2VuYWJsZUZpZWxkKS5jYWxsKHRoaXMsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2FibGVOb25FeGlzdGluZ1ZhcmlhbnRzKG5hbWUgPSAnJywgdmFsdWUgPSAnJykge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ2F0dHJpYnV0ZV9wYV9hbW91bnQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLm5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YS5mb3JFYWNoKCh2YXJpYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gdmFyaWF0aW9uO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBhdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoYXR0cmlidXRlc1tuYW1lXSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gYXR0cmlidXRlc1tmaWVsZC5uYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPT09IGZpZWxkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBmaW5kTWF0Y2hpbmdWYXJpYW50KGN1cnJlbnRPcHRpb25zKSB7XG4gICAgICAgIGxldCB2YXJpYXRpb25JRCA9IG51bGw7XG4gICAgICAgIGlmICghdGhpcy52YXJpYXRpb25EYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZm9ybS5kYXRhc2V0LnByb2R1Y3RfdmFyaWF0aW9ucztcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGlmICghdGhpcy52YXJpYXRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB2YXJpYXRpb247XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXJpYXRpb25JRCA9IHZhcmlhdGlvbi52YXJpYXRpb25faWQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFyaWF0aW9uSUQ7XG4gICAgfVxuICAgIGZpbmRNYXRjaGluZ1ZhcmlhbnREYXRhKGN1cnJlbnRPcHRpb25zKSB7XG4gICAgICAgIGxldCByZXR1cm5WYWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5mb3JtLmRhdGFzZXQucHJvZHVjdF92YXJpYXRpb25zO1xuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmFyaWF0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB2YXJpYXRpb247XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhcmlhdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG4gICAgaGFuZGxlQWRkVG9DYXJ0Q2xpY2soZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHZhcmlhdGlvbl9pZCA9IDA7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZEVsZW1lbnQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9uSWRFbGVtZW50ID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidmFyaWF0aW9uX2lkXCJdJyk7XG4gICAgICAgIGlmICh2YXJpYXRpb25JZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhcmlhdGlvbl9pZCA9IE51bWJlcih2YXJpYXRpb25JZEVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmb3JtSXNWYWxpZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd2YWxpZGF0ZScpKTtcbiAgICAgICAgICAgIGlmICghZmllbGQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBmb3JtSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFmb3JtSXNWYWxpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9kdWN0IGFkZCBmb3JtIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gTnVtYmVyKChfYSA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlKSB8fCAxO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnYWpheGFkZHRvY2FydCcsXG4gICAgICAgICAgICBwcm9kdWN0X2lkOiB0aGlzLmJ1dHRvbi52YWx1ZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eS50b1N0cmluZygpLFxuICAgICAgICAgICAgdmFyaWF0aW9uX2lkOiB2YXJpYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbjogJydcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgY29uc3QgbmFtZUZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJyNvbmVfdGltZV9wdXJjaGFzZScpO1xuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUZpZWxkID09PSBudWxsIHx8IG5hbWVGaWVsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZUZpZWxkLm5hbWU7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9ICEobmFtZUZpZWxkID09PSBudWxsIHx8IG5hbWVGaWVsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZUZpZWxkLmNoZWNrZWQpO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25UZXJtID0gKChfYiA9IGZvcm1EYXRhLmdldCgnc3Vic2NyaXB0aW9uLXRlcm0nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBkYXRhLnN1YnNjcmlwdGlvbiA9IHN1YnNjcmlwdGlvblRlcm07XG4gICAgICAgIH1cbiAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCB1bmRlZmluZWQsIHRoaXMuYnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyBpcyB3cm9uZycpO1xuICAgICAgICB9XG4gICAgICAgIFNpZGVQYW5lbC5vcGVuU2lkZVBhbmVsKCdjYXJ0LXBhbmVsJyk7XG4gICAgICAgIENhcnQudXBkYXRlQ2FydCgpO1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jYXJ0QW1vdW50KSB7XG4gICAgICAgICAgICBhZGRPclVwZGF0ZUNhcnRUb3RhbHMocmVzcG9uc2UuZGF0YS5jYXJ0QW1vdW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkZhaWx1cmUoKSB7XG4gICAgICAgIC8vIHN0dWJcbiAgICB9XG4gICAgZGlzYWJsZVN1YnNjcmlwdGlvblZhcmlhbnRzKCkge1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhZGlvLS1zdWJzY3JpcHRpb24gaW5wdXQnKSk7XG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZmllbGQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0Rm9ybSA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uY2FydCcpO1xuICAgICAgICBpZiAoYWRkVG9DYXJ0Rm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFqYXhBZGRUb0NhcnQgPSBuZXcgQWpheEFkZFRvQ2FydChhZGRUb0NhcnRGb3JtKTtcbiAgICAgICAgYWpheEFkZFRvQ2FydC5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuX0FqYXhBZGRUb0NhcnRfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0FqYXhBZGRUb0NhcnRfZGlzYWJsZUZpZWxkID0gZnVuY3Rpb24gX0FqYXhBZGRUb0NhcnRfZGlzYWJsZUZpZWxkKGZpZWxkKSB7XG4gICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGZpZWxkLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xufSwgX0FqYXhBZGRUb0NhcnRfZW5hYmxlRmllbGQgPSBmdW5jdGlvbiBfQWpheEFkZFRvQ2FydF9lbmFibGVGaWVsZChmaWVsZCkge1xuICAgIGZpZWxkLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbn07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgdG9UaXRsZUNhc2UgfSBmcm9tICcuLi91dGlsL3N0cmluZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VWYXJpYW50Q29sb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kZXRhaWxfX3ZhcmlhdGlvbl9fbGFiZWwtLWNvbG9yJyk7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50cy5sZW5ndGggfHwgIWxhYmVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGV4dCA9IGxhYmVsLnRleHRDb250ZW50O1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0b1RpdGxlQ2FzZShyYWRpby52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGAke3RleHR9OiAke3ZhbHVlfWA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcmFkaW8uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiYXR0cmlidXRlX3BhX2NvbG9yXCJdJykpO1xuICAgICAgICBpZiAoIXJhZGlvQnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDaGFuZ2VWYXJpYW50Q29sb3IocmFkaW9CdXR0b25zKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlVmFyaWFudFByaWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNhbGVQcmljZUVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWRldGFpbF9fcHJpY2UgaW5zIFtkYXRhLXByb2R1Y3QtcHJpY2VdJykpO1xuICAgICAgICBpZiAoIXRoaXMucmVndWxhclByaWNlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX3ByaWNlIFtkYXRhLXByb2R1Y3QtcHJpY2VdJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fcHJpY2UgZGVsIFtkYXRhLXByb2R1Y3QtcHJpY2VdJyk7XG4gICAgICAgIGlmICghdGhpcy5zYWxlUHJpY2VFbGVtZW50ICYmICF0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmVsZW1lbnRzWzBdLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBwcm9kdWN0X2lkIH0gPSBmb3JtLmRhdGFzZXQ7XG4gICAgICAgIGlmICghcHJvZHVjdF9pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYXRpb25JZEVsZW1lbnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidmFyaWF0aW9uX2lkXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uX2lkID0gdmFyaWF0aW9uSWRFbGVtZW50ID09PSBudWxsIHx8IHZhcmlhdGlvbklkRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaWF0aW9uSWRFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghdmFyaWF0aW9uX2lkIHx8ICFwcm9kdWN0X2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheGdldHZhcmlhbnRwcmljZScsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbl9pZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSB8fCAoIXJlc3BvbnNlLmRhdGEuc2FsZVByaWNlICYmICFyZXNwb25zZS5kYXRhLnJlZ3VsYXJQcmljZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZGF0YScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlZ3VsYXJQcmljZSA9IE51bWJlcihyZXNwb25zZS5kYXRhLnJlZ3VsYXJQcmljZSkudG9GaXhlZCgyKTtcbiAgICAgICAgY29uc3Qgc2FsZVByaWNlID0gTnVtYmVyKHJlc3BvbnNlLmRhdGEuc2FsZVByaWNlKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50cy5sZW5ndGggJiYgcmVndWxhclByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuaW5uZXJUZXh0ID0gcmVndWxhclByaWNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2FsZVByaWNlRWxlbWVudCAmJiBzYWxlUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudC5pbm5lclRleHQgPSBzYWxlUHJpY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGV0YWlsX192YXJpYXRpb25zIGlucHV0W3R5cGU9XCJyYWRpbycpKTtcbiAgICAgICAgaWYgKCFyYWRpb0J1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2hhbmdlVmFyaWFudFByaWNlKHJhZGlvQnV0dG9ucyk7XG4gICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IHRodW1ibmFpbEFuY2hvcnMgPSBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX2dhbGxlcnlfX3RodW1ibmFpbHMgYScpKTtcbiAgICAgICAgdGh1bWJuYWlsQW5jaG9ycy5mb3JFYWNoKChhbmNob3IpID0+IHtcbiAgICAgICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBhbmNob3IuZGF0YXNldC50aHVtYm5haWxJZDtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbWFnZS1pZD1cIiR7aWR9XCJdYCk7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VQYXJlbnQgPSBpbWFnZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oaW1hZ2VQYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnbGkuYWN0aXZlJykpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kZXRhaWxfX2dhbGxlcnknKTtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBJbWFnZUdhbGxlcnkoZWxlbWVudCk7XG4gICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWpheEFkZFRvQ2FydCBmcm9tICcuL2NvbXBvbmVudHMvQWpheEFkZFRvQ2FydCc7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSAnLi9jb21wb25lbnRzL0Ftb3VudFNlbGVjdG9yJztcbmltcG9ydCBDaGFuZ2VWYXJpYW50Q29sb3IgZnJvbSAnLi9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRDb2xvcic7XG5pbXBvcnQgQ2hhbmdlVmFyaWFudFByaWNlIGZyb20gJy4vY29tcG9uZW50cy9DaGFuZ2VWYXJpYW50UHJpY2UnO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuL2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5JztcbmltcG9ydCBNb2R1bGUgZnJvbSAnLi9Nb2R1bGUnO1xuaW1wb3J0IERhdGFMYXllciBmcm9tICcuL2NvbW1vbi9EYXRhTGF5ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbCBleHRlbmRzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIEFqYXhBZGRUb0NhcnQsXG4gICAgICAgICAgICBBbW91bnRTZWxlY3RvcixcbiAgICAgICAgICAgIEltYWdlR2FsbGVyeSxcbiAgICAgICAgICAgIENoYW5nZVZhcmlhbnRQcmljZSxcbiAgICAgICAgICAgIENoYW5nZVZhcmlhbnRDb2xvclxuICAgICAgICBdO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6ICd2aWV3X2l0ZW0nLFxuICAgICAgICAgICAgZWNvbW1lcmNlOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW2RhdGEtcHJvZHVjdF9pZF0nKTtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3REYXRhID0ge1xuICAgICAgICAgICAgaXRlbV9pZDogKGZvcm0gPT09IG51bGwgfHwgZm9ybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybS5kYXRhc2V0LnByb2R1Y3RfaWQpIHx8ICcnLFxuICAgICAgICAgICAgaXRlbV9uYW1lOiAoKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX190aXRsZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGV4dENvbnRlbnQpIHx8ICcnLFxuICAgICAgICAgICAgaXRlbV92YXJpYW50OiAodmFyaWF0aW9uRmllbGQgPT09IG51bGwgfHwgdmFyaWF0aW9uRmllbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhdGlvbkZpZWxkLnZhbHVlKSB8fCAnJyxcbiAgICAgICAgICAgIHByaWNlOiBOdW1iZXIoKF9jID0gKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvZHVjdC1wcmljZV0nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucmVwbGFjZSgnLCcsICcuJykpIHx8IDAsXG4gICAgICAgICAgICBpdGVtX2JyYW5kOiAnTGF2YW5kcsOpJ1xuICAgICAgICB9O1xuICAgICAgICBkYXRhLmVjb21tZXJjZS5pdGVtcy5wdXNoKHByb2R1Y3REYXRhKTtcbiAgICAgICAgRGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxufVxuKGZ1bmN0aW9uIHByb2R1Y3REZXRhaWxJbml0KCkge1xuICAgIGNvbnN0IHByb2R1Y3REZXRhaWwgPSBuZXcgUHJvZHVjdERldGFpbCgpO1xuICAgIHByb2R1Y3REZXRhaWwuaW5pdGlhbGl6ZSgpO1xufSkoKTtcbiIsImltcG9ydCBkaWFsb2dQb2x5ZmlsbCBmcm9tICdkaWFsb2ctcG9seWZpbGwnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IGRpc2FibGVCb2R5U2Nyb2xsLCBlbmFibGVCb2R5U2Nyb2xsIH0gZnJvbSAnLi4vdXRpbC9ib2R5JztcbmltcG9ydCB7IHRvQ2FtZWxDYXNlIH0gZnJvbSAnLi4vdXRpbC9zdHJpbmcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuICAgIHNldCBpc09wZW4odmFsdWUpIHtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBjYW1lbERhdGFBdHRyaWJ1dGUoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhQXR0cmlidXRlLnJlcGxhY2UoJ2RhdGEtJywgJycpO1xuICAgICAgICByZXR1cm4gdG9DYW1lbENhc2UodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgdHJhbnNpdGlvblRpbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uVGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb25UaW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lID0gdGhpcy5nZXRUcmFuc2l0aW9uVGltZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvblRpbWU7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMucG9seWZpbGxEaWFsb2coKTtcbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZV0nKSk7XG4gICAgICAgIGNsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm91dHNpZGVDbGljayhlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG91dHNpZGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRJbkRpYWxvZyA9IHJlY3QudG9wIDw9IGV2ZW50LmNsaWVudFkgJiZcbiAgICAgICAgICAgICAgICBldmVudC5jbGllbnRZIDw9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgICByZWN0LmxlZnQgPD0gZXZlbnQuY2xpZW50WCAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPD0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aDtcbiAgICAgICAgICAgIGlmICghY2xpY2tlZEluRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoYFske3RoaXMuZGF0YUF0dHJpYnV0ZX09XCIke3RoaXMuZWxlbWVudC5kYXRhc2V0W2Ake3RoaXMuY2FtZWxEYXRhQXR0cmlidXRlfWBdfVwiXWApKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzYWJsZUJvZHlTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNob3dNb2RhbCgpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5vcGVuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2xvc2VkKTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBlbmFibGVCb2R5U2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5vcGVuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuY2xvc2VkKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuICAgIGdldFRyYW5zaXRpb25UaW1lKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gKF9hID0gc3R5bGVzLnRyYW5zaXRpb25EdXJhdGlvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyc7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLmluZGV4T2YoJ21zJykgPiAtMVxuICAgICAgICAgICAgPyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgICAgIDogcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICogMTAwMDtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uIHx8IDQwMDtcbiAgICB9XG4gICAgcG9seWZpbGxEaWFsb2coKSB7XG4gICAgICAgIGRpYWxvZ1BvbHlmaWxsID09PSBudWxsIHx8IGRpYWxvZ1BvbHlmaWxsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaWFsb2dQb2x5ZmlsbC5yZWdpc3RlckRpYWxvZyh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX3NpZGVQYW5lbC5wY3NzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVQYW5lbCBleHRlbmRzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGF0YUF0dHJpYnV0ZSA9ICdkYXRhLXBhbmVsLW5hbWUnO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAgICAgICBvcGVuOiAnc2lkZS1wYW5lbC0tb3BlbmVkJyxcbiAgICAgICAgICAgIGNsb3NlZDogJ3NpZGUtcGFuZWwtLWNsb3NlZCcsXG4gICAgICAgICAgICBsZWZ0OiAnc2lkZS1wYW5lbC0tbGVmdCcsXG4gICAgICAgICAgICByaWdodDogJ3NpZGUtcGFuZWwtLXJpZ2h0J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgb3BlblNpZGVQYW5lbChwYW5lbElELCBlbGVtZW50ID0gbnVsbCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLW5hbWU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgIGlmIChwYW5lbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYW5lbC10ZW1wbGF0ZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGVsZW1lbnQuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gY2xvbmU7XG4gICAgICAgICAgICAoX2EgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLW5hbWU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdCgndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgcGFuZWwpO1xuICAgICAgICAgICAgaWYgKHBhbmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2lkZVBhbmVsSW5zdGFuY2UgPSBuZXcgU2lkZVBhbmVsKHBhbmVsKTtcbiAgICAgICAgICAgIHNpZGVQYW5lbEluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2dnbGVFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJyk7XG4gICAgICAgIHBhbmVsLmRpc3BhdGNoRXZlbnQodG9nZ2xlRXZlbnQpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGFuZWxdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFuZWxMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYW5lbExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNyZWF0aW9uRXZlbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZUNyZWF0aW9uRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxJRCA9IHRoaXMuZGF0YXNldC5wYW5lbCB8fCAnJztcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBsb2dnZWQgaW4gZm9sbG93IGxpbmtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCAmJlxuICAgICAgICAgICAgcGFuZWxJRCA9PT0gJ215LWFjY291bnQtcGFuZWwnICYmXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNpZGVQYW5lbC5vcGVuU2lkZVBhbmVsKHBhbmVsSUQsIHRoaXMpO1xuICAgIH1cbn1cbiIsImNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IHNjcm9sbFBvc2l0aW9uID0gMDtcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlQm9keVNjcm9sbCgpIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBib2R5RWxlbWVudC5zdHlsZS50b3AgPSBgLSR7c2Nyb2xsUG9zaXRpb259cHhgO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICdpbml0aWFsJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVCb2R5U2Nyb2xsKCkge1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb3NpdGlvbicpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnd2lkdGgnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFBvc2l0aW9uKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Njcm9sbC1iZWhhdmlvcicpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobWF0Y2gsIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvVGl0bGVDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3XFxTKi9nLCAodHh0KSA9PiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIk1vZHVsZSIsImNvbnN0cnVjdG9yIiwiZXZlbnRFbWl0dGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDb21wb25lbnRzIiwib24iLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwiY29tcG9uZW50Iiwib25Jbml0IiwiRGF0YUxheWVyIiwiZGF0YUxheWVyIiwid2luZG93IiwicHVzaCIsImRhdGEiLCJlY29tbWVyY2UiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwicmVjZWl2ZXIiLCJzdGF0ZSIsImtpbmQiLCJmIiwiVHlwZUVycm9yIiwiaGFzIiwiY2FsbCIsInZhbHVlIiwiZ2V0IiwiX0FqYXhBZGRUb0NhcnRfaW5zdGFuY2VzIiwiX0FqYXhBZGRUb0NhcnRfZGlzYWJsZUZpZWxkIiwiX0FqYXhBZGRUb0NhcnRfZW5hYmxlRmllbGQiLCJDYXJ0IiwiQ29tcG9uZW50IiwiU2lkZVBhbmVsIiwiYWRkT3JVcGRhdGVDYXJ0VG90YWxzIiwic2VuZEFqYXhSZXF1ZXN0IiwiQWpheEFkZFRvQ2FydCIsImZvcm0iLCJhZGQiLCJ2YXJpYXRpb25EYXRhIiwiYWpheEVuZHBvaW50IiwibG9jYXRpb24iLCJvcmlnaW4iLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yIiwidmFyaWF0aW9uRmllbGRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZSIsImN1cnJlbnRTaXplTmFtZSIsImN1cnJlbnRTaXplVmFsdWUiLCJ2YXJpYXRpb24iLCJhZGRFdmVudExpc3RlbmVyIiwibmFtZSIsImhhbmRsZUFkZFRvQ2FydENsaWNrIiwiYmluZCIsImN1cnJlbnRPcHRpb25zIiwiaW5kZXgiLCJsZW5ndGgiLCJ2YXJpYXRpb25JRCIsImZpbmRNYXRjaGluZ1ZhcmlhbnQiLCJkaXNhYmxlTm9uRXhpc3RpbmdWYXJpYW50cyIsImRpc2FibGVPdXRPZlN0b2NrVmFyaWFudHMiLCJkaXNhYmxlZENoZWNrZXIiLCJzZWxlY3RGaXJzdEF2YWlsYWJsZVZhcmlhbnQiLCJzZXRUaW1lb3V0IiwiZGlzYWJsZVN1YnNjcmlwdGlvblZhcmlhbnRzIiwiZGlzYWJsZUJ1dHRvbklmT3V0T2ZTdG9jayIsInNldEZvcm1JbnZhbGlkIiwidmFyaWF0aW9uX2lkIiwialF1ZXJ5IiwidHJpZ2dlciIsImZpbmRNYXRjaGluZ1ZhcmlhbnREYXRhIiwicHJvZHVjdF9pZCIsInJldHVyblZhbHVlIiwiZmllbGQiLCJkaXNhYmxlZCIsIm5hbWVzIiwiU2V0IiwiZmllbGRzIiwic2VsZWN0ZWRGaWVsZCIsImNoZWNrZWQiLCJpc0luU3RvY2siLCJpc19pbl9zdG9jayIsImlzRGlzYWJsZWQiLCJsYWJlbCIsImRhdGFzZXQiLCJvdXRPZlN0b2NrIiwiYXR0cmlidXRlcyIsIkVycm9yIiwibWF0Y2giLCJwcm9kdWN0X3ZhcmlhdGlvbnMiLCJKU09OIiwicGFyc2UiLCJrZXkiLCJPYmplY3QiLCJlbnRyaWVzIiwidW5kZWZpbmVkIiwiZXZlbnQiLCJfYSIsIl9iIiwicHJldmVudERlZmF1bHQiLCJwcm9kdWN0SWRFbGVtZW50IiwidmFyaWF0aW9uSWRFbGVtZW50IiwiTnVtYmVyIiwiZm9ybUlzVmFsaWQiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJ2YWxpZGl0eSIsInZhbGlkIiwicXVhbnRpdHkiLCJhY3Rpb24iLCJ0b1N0cmluZyIsInN1YnNjcmlwdGlvbiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJuYW1lRmllbGQiLCJzdWJzY3JpcHRpb25UZXJtIiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwib3BlblNpZGVQYW5lbCIsInVwZGF0ZUNhcnQiLCJjYXJ0QW1vdW50IiwicmVtb3ZlQXR0cmlidXRlIiwiYWRkVG9DYXJ0Rm9ybSIsImFqYXhBZGRUb0NhcnQiLCJXZWFrU2V0IiwidG9UaXRsZUNhc2UiLCJDaGFuZ2VWYXJpYW50Q29sb3IiLCJlbGVtZW50cyIsInRleHQiLCJ0ZXh0Q29udGVudCIsInJhZGlvIiwiaW5uZXJUZXh0IiwicmFkaW9CdXR0b25zIiwiaW5zdGFuY2UiLCJDaGFuZ2VWYXJpYW50UHJpY2UiLCJyZWd1bGFyUHJpY2VFbGVtZW50cyIsInNhbGVQcmljZUVsZW1lbnQiLCJjbG9zZXN0Iiwic2FsZVByaWNlIiwicmVndWxhclByaWNlIiwidG9GaXhlZCIsImVsIiwiSW1hZ2VHYWxsZXJ5IiwidGh1bWJuYWlsQW5jaG9ycyIsImFuY2hvciIsImlkIiwidGh1bWJuYWlsSWQiLCJpbWFnZSIsImltYWdlUGFyZW50IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsIkFtb3VudFNlbGVjdG9yIiwiUHJvZHVjdERldGFpbCIsImFyZ3VtZW50cyIsIl9jIiwiaXRlbXMiLCJ2YXJpYXRpb25GaWVsZCIsInByb2R1Y3REYXRhIiwiaXRlbV9pZCIsIml0ZW1fbmFtZSIsIml0ZW1fdmFyaWFudCIsInByaWNlIiwicmVwbGFjZSIsIml0ZW1fYnJhbmQiLCJwcm9kdWN0RGV0YWlsSW5pdCIsInByb2R1Y3REZXRhaWwiLCJkaWFsb2dQb2x5ZmlsbCIsImRpc2FibGVCb2R5U2Nyb2xsIiwiZW5hYmxlQm9keVNjcm9sbCIsInRvQ2FtZWxDYXNlIiwiRGlhbG9nIiwiX2lzT3BlbiIsIl90cmFuc2l0aW9uVGltZSIsImlzT3BlbiIsImNhbWVsRGF0YUF0dHJpYnV0ZSIsImRhdGFBdHRyaWJ1dGUiLCJ0cmFuc2l0aW9uVGltZSIsImdldFRyYW5zaXRpb25UaW1lIiwicG9seWZpbGxEaWFsb2ciLCJzZXRFdmVudExpc3RlbmVycyIsIm9wZW4iLCJ0b2dnbGUiLCJjbG9zZUJ1dHRvbnMiLCJjbG9zZSIsImUiLCJvdXRzaWRlQ2xpY2siLCJ0YXJnZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpY2tlZEluRGlhbG9nIiwidG9wIiwiY2xpZW50WSIsImhlaWdodCIsImxlZnQiLCJjbGllbnRYIiwid2lkdGgiLCJzaG93TW9kYWwiLCJjbGFzc2VzIiwiY2xvc2VkIiwic3R5bGVzIiwiZ2V0Q29tcHV0ZWRTdHlsZSIsInRyYW5zaXRpb25EdXJhdGlvbiIsImR1cmF0aW9uIiwiaW5kZXhPZiIsInBhcnNlRmxvYXQiLCJyZWdpc3RlckRpYWxvZyIsInJpZ2h0IiwicGFuZWxJRCIsInBhbmVsIiwidGVtcGxhdGUiLCJIVE1MQW5jaG9yRWxlbWVudCIsImhyZWYiLCJjbG9uZSIsImNsb25lTm9kZSIsImNvbnRlbnQiLCJhcHBlbmRDaGlsZCIsImVtaXQiLCJzaWRlUGFuZWxJbnN0YW5jZSIsInRvZ2dsZUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJwYW5lbExpbmtzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNyZWF0aW9uRXZlbnQiLCJib2R5IiwiY29udGFpbnMiLCJib2R5RWxlbWVudCIsInNjcm9sbFBvc2l0aW9uIiwicGFnZVlPZmZzZXQiLCJzdHlsZSIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxCZWhhdmlvciIsInJlbW92ZVByb3BlcnR5Iiwic2Nyb2xsVG8iLCJzdHIiLCJjaHIiLCJ0b1VwcGVyQ2FzZSIsInR4dCIsImNoYXJBdCIsInN1YnN0ciIsInRvTG93ZXJDYXNlIl0sInNvdXJjZVJvb3QiOiIifQ==