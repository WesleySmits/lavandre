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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LGNBQS9CLENBQThDLGlCQUE5QztBQUNIOzs7Ozs7Ozs7Ozs7Ozs7QUNsQk0sU0FBU2hFLFdBQVQsQ0FBcUJrRSxHQUFyQixFQUEwQjtBQUM3QixTQUFPQSxHQUFHLENBQUN6RSxPQUFKLENBQVksU0FBWixFQUF1QixDQUFDN0UsS0FBRCxFQUFRdUosR0FBUixLQUFnQkEsR0FBRyxDQUFDQyxXQUFKLEVBQXZDLENBQVA7QUFDSDtBQUNNLFNBQVNqSCxXQUFULENBQXFCK0csR0FBckIsRUFBMEI7QUFDN0IsU0FBT0EsR0FBRyxDQUFDekUsT0FBSixDQUFZLFFBQVosRUFBdUI0RSxHQUFELElBQVNBLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQVgsRUFBY0YsV0FBZCxLQUE4QkMsR0FBRyxDQUFDRSxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEVBQTdELENBQVA7QUFDSDs7Ozs7Ozs7Ozs7QUNMRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21tb24vRGF0YUxheWVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheEFkZFRvQ2FydC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRDb2xvci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRQcmljZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9wcm9kdWN0RGV0YWlsLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9TaWRlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9ib2R5LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvc3RyaW5nLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19zaWRlUGFuZWwucGNzcz82NjJiIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0ICcuL2NhcnQnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIub24oJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudHMoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb21wb25lbnQub25Jbml0KHNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiY2xhc3MgRGF0YUxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyID8gd2luZG93LmRhdGFMYXllciA6IFtdO1xuICAgIH1cbiAgICBwdXNoKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaCh7IGVjb21tZXJjZTogbnVsbCB9KTsgLy8gQ2xlYXIgdGhlIHByZXZpb3VzIGVjb21tZXJjZSBvYmplY3QuXG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRGF0YUxheWVyIH07XG5leHBvcnQgZGVmYXVsdCBuZXcgRGF0YUxheWVyKCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMsIF9BamF4QWRkVG9DYXJ0X2Rpc2FibGVGaWVsZCwgX0FqYXhBZGRUb0NhcnRfZW5hYmxlRmllbGQ7XG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NhcnQnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBTaWRlUGFuZWwgZnJvbSAnLi4vdWkvU2lkZVBhbmVsJztcbmltcG9ydCBhZGRPclVwZGF0ZUNhcnRUb3RhbHMgZnJvbSAnLi4vdXRpbC9jYXJ0JztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheEFkZFRvQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuYnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltuYW1lPVwiYWRkLXRvLWNhcnRcIl0nKTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX3ZhcmlhdGlvbnMgaW5wdXQnKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaXplTmFtZSA9ICdhdHRyaWJ1dGVfcGFfc2l6ZSc7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaXplVmFsdWUgPSB0aGlzLmZvcm1bY3VycmVudFNpemVOYW1lXS52YWx1ZTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VWYXJpYXRpb25BdHRyaWJ1dGUoY3VycmVudFNpemVOYW1lLCBjdXJyZW50U2l6ZVZhbHVlKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICB2YXJpYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlKHZhcmlhdGlvbi5uYW1lLCB2YXJpYXRpb24udmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQWRkVG9DYXJ0Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZShuYW1lID0gJycsIHZhbHVlID0gJycpIHtcbiAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudmFyaWF0aW9uRmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uID0gdGhpcy52YXJpYXRpb25GaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgeyBuYW1lIH0gPSB2YXJpYXRpb247XG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9ybVtuYW1lXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb25zW25hbWVdID0gdGhpcy5mb3JtW25hbWVdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhcmlhdGlvbklEID0gdGhpcy5maW5kTWF0Y2hpbmdWYXJpYW50KGN1cnJlbnRPcHRpb25zKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlTm9uRXhpc3RpbmdWYXJpYW50cyhuYW1lLCB2YWx1ZSk7XG4gICAgICAgIHRoaXMuZGlzYWJsZU91dE9mU3RvY2tWYXJpYW50cyhuYW1lLCB2YWx1ZSk7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkQ2hlY2tlcigpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEZpcnN0QXZhaWxhYmxlVmFyaWFudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlU3Vic2NyaXB0aW9uVmFyaWFudHMoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uSWZPdXRPZlN0b2NrKCk7XG4gICAgICAgIGlmICghdmFyaWF0aW9uSUQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9ybUludmFsaWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm0udmFyaWF0aW9uX2lkLnZhbHVlID0gdmFyaWF0aW9uSUQ7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKHdpbmRvdy5qUXVlcnkpIHtcbiAgICAgICAgICAgIHdpbmRvd1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAualF1ZXJ5KHRoaXMuZm9ybSlcbiAgICAgICAgICAgICAgICAudHJpZ2dlcignc2hvd192YXJpYXRpb24nLCBbdGhpcy5maW5kTWF0Y2hpbmdWYXJpYW50RGF0YShjdXJyZW50T3B0aW9ucyldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRGb3JtSW52YWxpZCgpIHtcbiAgICAgICAgdGhpcy5mb3JtLnByb2R1Y3RfaWQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5mb3JtLnZhcmlhdGlvbl9pZC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBkaXNhYmxlZENoZWNrZXIoKSB7XG4gICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZpZWxkLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICBzZWxlY3RGaXJzdEF2YWlsYWJsZVZhcmlhbnQoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgbmFtZXMuYWRkKGZpZWxkLm5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKGBbbmFtZT1cIiR7bmFtZX1cIl1gKSk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRGaWVsZCA9IGZhbHNlO1xuICAgICAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQpIHtcbiAgICAgICAgICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzYWJsZUJ1dHRvbklmT3V0T2ZTdG9jaygpIHtcbiAgICAgICAgbGV0IGlzSW5TdG9jayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFyaWF0aW9uLmlzX2luX3N0b2NrKSB7XG4gICAgICAgICAgICAgICAgaXNJblN0b2NrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNJblN0b2NrKSB7XG4gICAgICAgICAgICB0aGlzLmJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIHRoaXMuYnV0dG9uLmxhYmVsID0gJ0JPRVRUT04nO1xuICAgICAgICAgICAgdGhpcy5idXR0b24ubGFiZWwgPSB0aGlzLmJ1dHRvbi5kYXRhc2V0Lm91dE9mU3RvY2sgfHwgJ091dCBvZiBzdG9jayc7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzYWJsZU91dE9mU3RvY2tWYXJpYW50cyhuYW1lID0gJycsIHZhbHVlID0gJycpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdhdHRyaWJ1dGVfcGFfYW1vdW50Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YS5mb3JFYWNoKCh2YXJpYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gdmFyaWF0aW9uO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBhdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gYXR0cmlidXRlc1tmaWVsZC5uYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPT09IGZpZWxkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh2YXJpYXRpb24uaXNfaW5fc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BamF4QWRkVG9DYXJ0X2luc3RhbmNlcywgXCJtXCIsIF9BamF4QWRkVG9DYXJ0X2Rpc2FibGVGaWVsZCkuY2FsbCh0aGlzLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGF0dHJpYnV0ZXNbZmllbGQubmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoID09PSBmaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXZhcmlhdGlvbi5pc19pbl9zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FqYXhBZGRUb0NhcnRfaW5zdGFuY2VzLCBcIm1cIiwgX0FqYXhBZGRUb0NhcnRfZW5hYmxlRmllbGQpLmNhbGwodGhpcywgZmllbGQpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzYWJsZU5vbkV4aXN0aW5nVmFyaWFudHMobmFtZSA9ICcnLCB2YWx1ZSA9ICcnKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnYXR0cmlidXRlX3BhX2Ftb3VudCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQubmFtZSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB2YXJpYXRpb247XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBhdHRyaWJ1dGVzW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gZmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbmRNYXRjaGluZ1ZhcmlhbnQoY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHZhcmlhdGlvbklEID0gbnVsbDtcbiAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5mb3JtLmRhdGFzZXQucHJvZHVjdF92YXJpYXRpb25zO1xuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhcmlhdGlvbklEID0gdmFyaWF0aW9uLnZhcmlhdGlvbl9pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YXJpYXRpb25JRDtcbiAgICB9XG4gICAgZmluZE1hdGNoaW5nVmFyaWFudERhdGEoY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHJldHVyblZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMudmFyaWF0aW9uRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZvcm0uZGF0YXNldC5wcm9kdWN0X3ZhcmlhdGlvbnM7XG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGlmICghdGhpcy52YXJpYXRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFyaWF0aW9uO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICBoYW5kbGVBZGRUb0NhcnRDbGljayhldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFyaWF0aW9uX2lkID0gMDtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkRWxlbWVudCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScpO1xuICAgICAgICBjb25zdCB2YXJpYXRpb25JZEVsZW1lbnQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgaWYgKHZhcmlhdGlvbklkRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyaWF0aW9uX2lkID0gTnVtYmVyKHZhcmlhdGlvbklkRWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvcm1Jc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZhbGlkYXRlJykpO1xuICAgICAgICAgICAgaWYgKCFmaWVsZC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgICAgIGZvcm1Jc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWZvcm1Jc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2R1Y3QgYWRkIGZvcm0gaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBOdW1iZXIoKF9hID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWFudGl0eVwiXScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpIHx8IDE7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4YWRkdG9jYXJ0JyxcbiAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHRoaXMuYnV0dG9uLnZhbHVlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICB2YXJpYXRpb25faWQ6IHZhcmlhdGlvbl9pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBjb25zdCBuYW1lRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignI29uZV90aW1lX3B1cmNoYXNlJyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRmllbGQgPT09IG51bGwgfHwgbmFtZUZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lRmllbGQubmFtZTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gIShuYW1lRmllbGQgPT09IG51bGwgfHwgbmFtZUZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lRmllbGQuY2hlY2tlZCk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvblRlcm0gPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdzdWJzY3JpcHRpb24tdGVybScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGRhdGEuc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uVGVybTtcbiAgICAgICAgfVxuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIHVuZGVmaW5lZCwgdGhpcy5idXR0b24pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIGlzIHdyb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwoJ2NhcnQtcGFuZWwnKTtcbiAgICAgICAgQ2FydC51cGRhdGVDYXJ0KCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNhcnRBbW91bnQpIHtcbiAgICAgICAgICAgIGFkZE9yVXBkYXRlQ2FydFRvdGFscyhyZXNwb25zZS5kYXRhLmNhcnRBbW91bnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uRmFpbHVyZSgpIHtcbiAgICAgICAgLy8gc3R1YlxuICAgIH1cbiAgICBkaXNhYmxlU3Vic2NyaXB0aW9uVmFyaWFudHMoKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8tLXN1YnNjcmlwdGlvbiBpbnB1dCcpKTtcbiAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBhZGRUb0NhcnRGb3JtID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignZm9ybS5jYXJ0Jyk7XG4gICAgICAgIGlmIChhZGRUb0NhcnRGb3JtID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWpheEFkZFRvQ2FydCA9IG5ldyBBamF4QWRkVG9DYXJ0KGFkZFRvQ2FydEZvcm0pO1xuICAgICAgICBhamF4QWRkVG9DYXJ0LmluaXRpYWxpemUoKTtcbiAgICB9XG59XG5fQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQWpheEFkZFRvQ2FydF9kaXNhYmxlRmllbGQgPSBmdW5jdGlvbiBfQWpheEFkZFRvQ2FydF9kaXNhYmxlRmllbGQoZmllbGQpIHtcbiAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgZmllbGQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG59LCBfQWpheEFkZFRvQ2FydF9lbmFibGVGaWVsZCA9IGZ1bmN0aW9uIF9BamF4QWRkVG9DYXJ0X2VuYWJsZUZpZWxkKGZpZWxkKSB7XG4gICAgZmllbGQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xufTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyB0b1RpdGxlQ2FzZSB9IGZyb20gJy4uL3V0aWwvc3RyaW5nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZVZhcmlhbnRDb2xvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fdmFyaWF0aW9uX19sYWJlbC0tY29sb3InKTtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmxlbmd0aCB8fCAhbGFiZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZXh0ID0gbGFiZWwudGV4dENvbnRlbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRvVGl0bGVDYXNlKHJhZGlvLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gYCR7dGV4dH06ICR7dmFsdWV9YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICByYWRpby5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJhdHRyaWJ1dGVfcGFfY29sb3JcIl0nKSk7XG4gICAgICAgIGlmICghcmFkaW9CdXR0b25zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENoYW5nZVZhcmlhbnRDb2xvcihyYWRpb0J1dHRvbnMpO1xuICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VWYXJpYW50UHJpY2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGV0YWlsX19wcmljZSBpbnMgW2RhdGEtcHJvZHVjdC1wcmljZV0nKSk7XG4gICAgICAgIGlmICghdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWRldGFpbF9fcHJpY2UgW2RhdGEtcHJvZHVjdC1wcmljZV0nKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zYWxlUHJpY2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX19wcmljZSBkZWwgW2RhdGEtcHJvZHVjdC1wcmljZV0nKTtcbiAgICAgICAgaWYgKCF0aGlzLnNhbGVQcmljZUVsZW1lbnQgJiYgIXRoaXMucmVndWxhclByaWNlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZWxlbWVudHNbMF0uY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHByb2R1Y3RfaWQgfSA9IGZvcm0uZGF0YXNldDtcbiAgICAgICAgaWYgKCFwcm9kdWN0X2lkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbklkRWxlbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYXRpb25faWQgPSB2YXJpYXRpb25JZEVsZW1lbnQgPT09IG51bGwgfHwgdmFyaWF0aW9uSWRFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YXJpYXRpb25JZEVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF2YXJpYXRpb25faWQgfHwgIXByb2R1Y3RfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdhamF4Z2V0dmFyaWFudHByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uX2lkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhIHx8ICghcmVzcG9uc2UuZGF0YS5zYWxlUHJpY2UgJiYgIXJlc3BvbnNlLmRhdGEucmVndWxhclByaWNlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBkYXRhJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVndWxhclByaWNlID0gTnVtYmVyKHJlc3BvbnNlLmRhdGEucmVndWxhclByaWNlKS50b0ZpeGVkKDIpO1xuICAgICAgICBjb25zdCBzYWxlUHJpY2UgPSBOdW1iZXIocmVzcG9uc2UuZGF0YS5zYWxlUHJpY2UpLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzLmxlbmd0aCAmJiByZWd1bGFyUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5pbm5lclRleHQgPSByZWd1bGFyUHJpY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zYWxlUHJpY2VFbGVtZW50ICYmIHNhbGVQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5zYWxlUHJpY2VFbGVtZW50LmlubmVyVGV4dCA9IHNhbGVQcmljZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX3ZhcmlhdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvJykpO1xuICAgICAgICBpZiAoIXJhZGlvQnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDaGFuZ2VWYXJpYW50UHJpY2UocmFkaW9CdXR0b25zKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsQW5jaG9ycyA9IEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWRldGFpbF9fZ2FsbGVyeV9fdGh1bWJuYWlscyBhJykpO1xuICAgICAgICB0aHVtYm5haWxBbmNob3JzLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICAgICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGFuY2hvci5kYXRhc2V0LnRodW1ibmFpbElkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWltYWdlLWlkPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVBhcmVudCA9IGltYWdlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShpbWFnZVBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaS5hY3RpdmUnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fZ2FsbGVyeScpO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEltYWdlR2FsbGVyeShlbGVtZW50KTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBBamF4QWRkVG9DYXJ0IGZyb20gJy4vY29tcG9uZW50cy9BamF4QWRkVG9DYXJ0JztcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tICcuL2NvbXBvbmVudHMvQW1vdW50U2VsZWN0b3InO1xuaW1wb3J0IENoYW5nZVZhcmlhbnRDb2xvciBmcm9tICcuL2NvbXBvbmVudHMvQ2hhbmdlVmFyaWFudENvbG9yJztcbmltcG9ydCBDaGFuZ2VWYXJpYW50UHJpY2UgZnJvbSAnLi9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRQcmljZSc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnknO1xuaW1wb3J0IE1vZHVsZSBmcm9tICcuL01vZHVsZSc7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gJy4vY29tbW9uL0RhdGFMYXllcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW1xuICAgICAgICAgICAgQWpheEFkZFRvQ2FydCxcbiAgICAgICAgICAgIEFtb3VudFNlbGVjdG9yLFxuICAgICAgICAgICAgSW1hZ2VHYWxsZXJ5LFxuICAgICAgICAgICAgQ2hhbmdlVmFyaWFudFByaWNlLFxuICAgICAgICAgICAgQ2hhbmdlVmFyaWFudENvbG9yXG4gICAgICAgIF07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ3ZpZXdfaXRlbScsXG4gICAgICAgICAgICBlY29tbWVyY2U6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bZGF0YS1wcm9kdWN0X2lkXScpO1xuICAgICAgICBjb25zdCB2YXJpYXRpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdERhdGEgPSB7XG4gICAgICAgICAgICBpdGVtX2lkOiAoZm9ybSA9PT0gbnVsbCB8fCBmb3JtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtLmRhdGFzZXQucHJvZHVjdF9pZCkgfHwgJycsXG4gICAgICAgICAgICBpdGVtX25hbWU6ICgoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kZXRhaWxfX3RpdGxlJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50ZXh0Q29udGVudCkgfHwgJycsXG4gICAgICAgICAgICBpdGVtX3ZhcmlhbnQ6ICh2YXJpYXRpb25GaWVsZCA9PT0gbnVsbCB8fCB2YXJpYXRpb25GaWVsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaWF0aW9uRmllbGQudmFsdWUpIHx8ICcnLFxuICAgICAgICAgICAgcHJpY2U6IE51bWJlcigoX2MgPSAoX2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9kdWN0LXByaWNlXScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMCxcbiAgICAgICAgICAgIGl0ZW1fYnJhbmQ6ICdMYXZhbmRyw6knXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEuZWNvbW1lcmNlLml0ZW1zLnB1c2gocHJvZHVjdERhdGEpO1xuICAgICAgICBEYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICB9XG59XG4oZnVuY3Rpb24gcHJvZHVjdERldGFpbEluaXQoKSB7XG4gICAgY29uc3QgcHJvZHVjdERldGFpbCA9IG5ldyBQcm9kdWN0RGV0YWlsKCk7XG4gICAgcHJvZHVjdERldGFpbC5pbml0aWFsaXplKCk7XG59KSgpO1xuIiwiaW1wb3J0IGRpYWxvZ1BvbHlmaWxsIGZyb20gJ2RpYWxvZy1wb2x5ZmlsbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgZGlzYWJsZUJvZHlTY3JvbGwsIGVuYWJsZUJvZHlTY3JvbGwgfSBmcm9tICcuLi91dGlsL2JvZHknO1xuaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tICcuLi91dGlsL3N0cmluZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG4gICAgc2V0IGlzT3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNhbWVsRGF0YUF0dHJpYnV0ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGFBdHRyaWJ1dGUucmVwbGFjZSgnZGF0YS0nLCAnJyk7XG4gICAgICAgIHJldHVybiB0b0NhbWVsQ2FzZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCB0cmFuc2l0aW9uVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zaXRpb25UaW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvblRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWUgPSB0aGlzLmdldFRyYW5zaXRpb25UaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uVGltZTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5wb2x5ZmlsbERpYWxvZygpO1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlXScpKTtcbiAgICAgICAgY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0c2lkZUNsaWNrKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZEluRGlhbG9nID0gcmVjdC50b3AgPD0gZXZlbnQuY2xpZW50WSAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgPD0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHJlY3QubGVmdCA8PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8PSByZWN0LmxlZnQgKyByZWN0LndpZHRoO1xuICAgICAgICAgICAgaWYgKCFjbGlja2VkSW5EaWFsb2cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdChgWyR7dGhpcy5kYXRhQXR0cmlidXRlfT1cIiR7dGhpcy5lbGVtZW50LmRhdGFzZXRbYCR7dGhpcy5jYW1lbERhdGFBdHRyaWJ1dGV9YF19XCJdYCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNhYmxlQm9keVNjcm9sbCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2hvd01vZGFsKCk7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGVuYWJsZUJvZHlTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgZ2V0VHJhbnNpdGlvblRpbWUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSAoX2EgPSBzdHlsZXMudHJhbnNpdGlvbkR1cmF0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uaW5kZXhPZignbXMnKSA+IC0xXG4gICAgICAgICAgICA/IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKiAxMDAwO1xuICAgICAgICByZXR1cm4gZHVyYXRpb24gfHwgNDAwO1xuICAgIH1cbiAgICBwb2x5ZmlsbERpYWxvZygpIHtcbiAgICAgICAgZGlhbG9nUG9seWZpbGwgPT09IG51bGwgfHwgZGlhbG9nUG9seWZpbGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpYWxvZ1BvbHlmaWxsLnJlZ2lzdGVyRGlhbG9nKHRoaXMuZWxlbWVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fc2lkZVBhbmVsLnBjc3MnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZVBhbmVsIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kYXRhQXR0cmlidXRlID0gJ2RhdGEtcGFuZWwtbmFtZSc7XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgICAgICAgIG9wZW46ICdzaWRlLXBhbmVsLS1vcGVuZWQnLFxuICAgICAgICAgICAgY2xvc2VkOiAnc2lkZS1wYW5lbC0tY2xvc2VkJyxcbiAgICAgICAgICAgIGxlZnQ6ICdzaWRlLXBhbmVsLS1sZWZ0JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnc2lkZS1wYW5lbC0tcmlnaHQnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBvcGVuU2lkZVBhbmVsKHBhbmVsSUQsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgaWYgKHBhbmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLXRlbXBsYXRlPVwiJHtwYW5lbElEfVwiXWApO1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZWxlbWVudC5ocmVmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSBjbG9uZTtcbiAgICAgICAgICAgIChfYSA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICAgIHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCBwYW5lbCk7XG4gICAgICAgICAgICBpZiAocGFuZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzaWRlUGFuZWxJbnN0YW5jZSA9IG5ldyBTaWRlUGFuZWwocGFuZWwpO1xuICAgICAgICAgICAgc2lkZVBhbmVsSW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvZ2dsZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKTtcbiAgICAgICAgcGFuZWwuZGlzcGF0Y2hFdmVudCh0b2dnbGVFdmVudCk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgICAgICBjb25zdCBwYW5lbExpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW5lbF0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYW5lbExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhbmVsTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlQ3JlYXRpb25FdmVudChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwYW5lbElEID0gdGhpcy5kYXRhc2V0LnBhbmVsIHx8ICcnO1xuICAgICAgICAvLyBJZiBhbHJlYWR5IGxvZ2dlZCBpbiBmb2xsb3cgbGlua1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmXG4gICAgICAgICAgICBwYW5lbElEID09PSAnbXktYWNjb3VudC1wYW5lbCcgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2dnZWQtaW4nKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwocGFuZWxJRCwgdGhpcyk7XG4gICAgfVxufVxuIiwiY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgc2Nyb2xsUG9zaXRpb24gPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVCb2R5U2Nyb2xsKCkge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnRvcCA9IGAtJHtzY3JvbGxQb3NpdGlvbn1weGA7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ2luaXRpYWwnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUJvZHlTY3JvbGwoKSB7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Bvc2l0aW9uJyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnc2Nyb2xsLWJlaGF2aW9yJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtYXRjaCwgY2hyKSA9PiBjaHIudG9VcHBlckNhc2UoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csICh0eHQpID0+IHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiTW9kdWxlIiwiY29uc3RydWN0b3IiLCJldmVudEVtaXR0ZXIiLCJpbml0aWFsaXplIiwiaW5pdGlhbGl6ZUNvbXBvbmVudHMiLCJvbiIsImVsZW1lbnQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwiY29tcG9uZW50cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJvbkluaXQiLCJEYXRhTGF5ZXIiLCJkYXRhTGF5ZXIiLCJ3aW5kb3ciLCJwdXNoIiwiZGF0YSIsImVjb21tZXJjZSIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJjYWxsIiwidmFsdWUiLCJnZXQiLCJfQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMiLCJfQWpheEFkZFRvQ2FydF9kaXNhYmxlRmllbGQiLCJfQWpheEFkZFRvQ2FydF9lbmFibGVGaWVsZCIsIkNhcnQiLCJDb21wb25lbnQiLCJTaWRlUGFuZWwiLCJhZGRPclVwZGF0ZUNhcnRUb3RhbHMiLCJzZW5kQWpheFJlcXVlc3QiLCJBamF4QWRkVG9DYXJ0IiwiZm9ybSIsImFkZCIsInZhcmlhdGlvbkRhdGEiLCJhamF4RW5kcG9pbnQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJ2YXJpYXRpb25GaWVsZHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlIiwiY3VycmVudFNpemVOYW1lIiwiY3VycmVudFNpemVWYWx1ZSIsInZhcmlhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYW1lIiwiaGFuZGxlQWRkVG9DYXJ0Q2xpY2siLCJiaW5kIiwiY3VycmVudE9wdGlvbnMiLCJpbmRleCIsImxlbmd0aCIsInZhcmlhdGlvbklEIiwiZmluZE1hdGNoaW5nVmFyaWFudCIsImRpc2FibGVOb25FeGlzdGluZ1ZhcmlhbnRzIiwiZGlzYWJsZU91dE9mU3RvY2tWYXJpYW50cyIsImRpc2FibGVkQ2hlY2tlciIsInNlbGVjdEZpcnN0QXZhaWxhYmxlVmFyaWFudCIsInNldFRpbWVvdXQiLCJkaXNhYmxlU3Vic2NyaXB0aW9uVmFyaWFudHMiLCJkaXNhYmxlQnV0dG9uSWZPdXRPZlN0b2NrIiwic2V0Rm9ybUludmFsaWQiLCJ2YXJpYXRpb25faWQiLCJqUXVlcnkiLCJ0cmlnZ2VyIiwiZmluZE1hdGNoaW5nVmFyaWFudERhdGEiLCJwcm9kdWN0X2lkIiwicmV0dXJuVmFsdWUiLCJmaWVsZCIsImRpc2FibGVkIiwibmFtZXMiLCJTZXQiLCJmaWVsZHMiLCJzZWxlY3RlZEZpZWxkIiwiY2hlY2tlZCIsImlzSW5TdG9jayIsImlzX2luX3N0b2NrIiwiaXNEaXNhYmxlZCIsImxhYmVsIiwiZGF0YXNldCIsIm91dE9mU3RvY2siLCJhdHRyaWJ1dGVzIiwiRXJyb3IiLCJtYXRjaCIsInByb2R1Y3RfdmFyaWF0aW9ucyIsIkpTT04iLCJwYXJzZSIsImtleSIsIk9iamVjdCIsImVudHJpZXMiLCJ1bmRlZmluZWQiLCJldmVudCIsIl9hIiwiX2IiLCJwcmV2ZW50RGVmYXVsdCIsInByb2R1Y3RJZEVsZW1lbnQiLCJ2YXJpYXRpb25JZEVsZW1lbnQiLCJOdW1iZXIiLCJmb3JtSXNWYWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJxdWFudGl0eSIsImFjdGlvbiIsInRvU3RyaW5nIiwic3Vic2NyaXB0aW9uIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm5hbWVGaWVsZCIsInN1YnNjcmlwdGlvblRlcm0iLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJvcGVuU2lkZVBhbmVsIiwidXBkYXRlQ2FydCIsImNhcnRBbW91bnQiLCJyZW1vdmVBdHRyaWJ1dGUiLCJhZGRUb0NhcnRGb3JtIiwiYWpheEFkZFRvQ2FydCIsIldlYWtTZXQiLCJ0b1RpdGxlQ2FzZSIsIkNoYW5nZVZhcmlhbnRDb2xvciIsImVsZW1lbnRzIiwidGV4dCIsInRleHRDb250ZW50IiwicmFkaW8iLCJpbm5lclRleHQiLCJyYWRpb0J1dHRvbnMiLCJpbnN0YW5jZSIsIkNoYW5nZVZhcmlhbnRQcmljZSIsInJlZ3VsYXJQcmljZUVsZW1lbnRzIiwic2FsZVByaWNlRWxlbWVudCIsImNsb3Nlc3QiLCJzYWxlUHJpY2UiLCJyZWd1bGFyUHJpY2UiLCJ0b0ZpeGVkIiwiZWwiLCJJbWFnZUdhbGxlcnkiLCJ0aHVtYm5haWxBbmNob3JzIiwiYW5jaG9yIiwiaWQiLCJ0aHVtYm5haWxJZCIsImltYWdlIiwiaW1hZ2VQYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiQW1vdW50U2VsZWN0b3IiLCJQcm9kdWN0RGV0YWlsIiwiYXJndW1lbnRzIiwiX2MiLCJpdGVtcyIsInZhcmlhdGlvbkZpZWxkIiwicHJvZHVjdERhdGEiLCJpdGVtX2lkIiwiaXRlbV9uYW1lIiwiaXRlbV92YXJpYW50IiwicHJpY2UiLCJyZXBsYWNlIiwiaXRlbV9icmFuZCIsInByb2R1Y3REZXRhaWxJbml0IiwicHJvZHVjdERldGFpbCIsImRpYWxvZ1BvbHlmaWxsIiwiZGlzYWJsZUJvZHlTY3JvbGwiLCJlbmFibGVCb2R5U2Nyb2xsIiwidG9DYW1lbENhc2UiLCJEaWFsb2ciLCJfaXNPcGVuIiwiX3RyYW5zaXRpb25UaW1lIiwiaXNPcGVuIiwiY2FtZWxEYXRhQXR0cmlidXRlIiwiZGF0YUF0dHJpYnV0ZSIsInRyYW5zaXRpb25UaW1lIiwiZ2V0VHJhbnNpdGlvblRpbWUiLCJwb2x5ZmlsbERpYWxvZyIsInNldEV2ZW50TGlzdGVuZXJzIiwib3BlbiIsInRvZ2dsZSIsImNsb3NlQnV0dG9ucyIsImNsb3NlIiwiZSIsIm91dHNpZGVDbGljayIsInRhcmdldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGlja2VkSW5EaWFsb2ciLCJ0b3AiLCJjbGllbnRZIiwiaGVpZ2h0IiwibGVmdCIsImNsaWVudFgiLCJ3aWR0aCIsInNob3dNb2RhbCIsImNsYXNzZXMiLCJjbG9zZWQiLCJzdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZHVyYXRpb24iLCJpbmRleE9mIiwicGFyc2VGbG9hdCIsInJlZ2lzdGVyRGlhbG9nIiwicmlnaHQiLCJwYW5lbElEIiwicGFuZWwiLCJ0ZW1wbGF0ZSIsIkhUTUxBbmNob3JFbGVtZW50IiwiaHJlZiIsImNsb25lIiwiY2xvbmVOb2RlIiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiZW1pdCIsInNpZGVQYW5lbEluc3RhbmNlIiwidG9nZ2xlRXZlbnQiLCJDdXN0b21FdmVudCIsInBhbmVsTGlua3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQ3JlYXRpb25FdmVudCIsImJvZHkiLCJjb250YWlucyIsImJvZHlFbGVtZW50Iiwic2Nyb2xsUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsInN0eWxlIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEJlaGF2aW9yIiwicmVtb3ZlUHJvcGVydHkiLCJzY3JvbGxUbyIsInN0ciIsImNociIsInRvVXBwZXJDYXNlIiwidHh0IiwiY2hhckF0Iiwic3Vic3RyIiwidG9Mb3dlckNhc2UiXSwic291cmNlUm9vdCI6IiJ9