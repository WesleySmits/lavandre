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
    this.outOfStockForm = document.getElementById('product-back-in-stock-form');
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

    const variationID = this.findMatchingVariant(currentOptions); // this.disableNonExistingVariants(name, value);

    this.disableOutOfStockVariants(name, value);
    const selectedVariation = this.variationData.find(variation => variation.variation_id === variationID);

    if (this.disabledChecker()) {
      this.selectFirstAvailableVariant();
    } else {
      setTimeout(() => {
        this.disableSubscriptionVariants();
      }, 100);
    }

    if (selectedVariation.is_in_stock === false) {
      this.disableButtonOnOutOfStock();
    } else {
      this.enableButtonOnOutOfStock();
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
          if (field.disabled || field.hasAttribute('aria-disabled')) {
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
    var _a;

    this.button.isDisabled = true;
    this.button.disabled = true;
    this.button.label = this.button.dataset.outOfStock || 'Out of stock';
    (_a = this.outOfStockForm) === null || _a === void 0 ? void 0 : _a.removeAttribute('hidden');
  }

  enableButtonOnOutOfStock() {
    var _a;

    this.button.isDisabled = false;
    this.button.disabled = false;
    this.button.label = this.button.dataset.inStock || 'Add to Bag';
    (_a = this.outOfStockForm) === null || _a === void 0 ? void 0 : _a.toggleAttribute('hidden', true);
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
  } // private disableNonExistingVariants(name: string = '', value = ''): void {
  //     if (name === 'attribute_pa_amount') {
  //     }
  // }


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
/* harmony import */ var _common_DataLayer__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/DataLayer */ "./assets/js/common/DataLayer.ts");
/* harmony import */ var _components_AjaxAddToCart__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AjaxAddToCart */ "./assets/js/components/AjaxAddToCart.ts");
/* harmony import */ var _components_AmountSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AmountSelector */ "./assets/js/components/AmountSelector.ts");
/* harmony import */ var _components_ChangeVariantColor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ChangeVariantColor */ "./assets/js/components/ChangeVariantColor.ts");
/* harmony import */ var _components_ChangeVariantPrice__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ChangeVariantPrice */ "./assets/js/components/ChangeVariantPrice.ts");
/* harmony import */ var _components_ImageGallery__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/ImageGallery */ "./assets/js/components/ImageGallery.ts");
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");
/* harmony import */ var _web_components_ProductBackInStockForm__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./web-components/ProductBackInStockForm */ "./assets/js/web-components/ProductBackInStockForm.ts");








class ProductDetail extends _Module__WEBPACK_IMPORTED_MODULE_6__["default"] {
  constructor() {
    super(...arguments);
    this.components = [_components_AjaxAddToCart__WEBPACK_IMPORTED_MODULE_1__["default"], _components_AmountSelector__WEBPACK_IMPORTED_MODULE_2__["default"], _components_ImageGallery__WEBPACK_IMPORTED_MODULE_5__["default"], _components_ChangeVariantPrice__WEBPACK_IMPORTED_MODULE_4__["default"], _components_ChangeVariantColor__WEBPACK_IMPORTED_MODULE_3__["default"]];
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
    _common_DataLayer__WEBPACK_IMPORTED_MODULE_0__["default"].push(data);
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

/***/ "./assets/js/util/endpoints.ts":
/*!*************************************!*\
  !*** ./assets/js/util/endpoints.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
const endpoints = {
  ajax: `${window.location.origin}/wp-admin/admin-ajax.php`
};
/* harmony default export */ __webpack_exports__["default"] = (endpoints);

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

/***/ "./assets/js/web-components/AjaxForm.ts":
/*!**********************************************!*\
  !*** ./assets/js/web-components/AjaxForm.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AjaxForm; }
/* harmony export */ });
class AjaxForm extends HTMLFormElement {
  connectedCallback() {
    this.addEventListener('submit', this.submitHandler);
  }

  disconnectedCallback() {
    this.removeEventListener('submit', this.submitHandler);
  }

  submitHandler(event) {}

}

/***/ }),

/***/ "./assets/js/web-components/ProductBackInStockForm.ts":
/*!************************************************************!*\
  !*** ./assets/js/web-components/ProductBackInStockForm.ts ***!
  \************************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _components_FieldValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/FieldValidation */ "./assets/js/components/FieldValidation.ts");
/* harmony import */ var _util_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/endpoints */ "./assets/js/util/endpoints.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* harmony import */ var _AjaxForm__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AjaxForm */ "./assets/js/web-components/AjaxForm.ts");
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var _ProductBackInStockForm_instances, _ProductBackInStockForm_emailField, _ProductBackInStockForm_form, _ProductBackInStockForm_getProductSize, _ProductBackInStockForm_getProductAmount, _ProductBackInStockForm_onSuccess, _ProductBackInStockForm_onFailure;






class ProductBackInStockForm extends _AjaxForm__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);

    _ProductBackInStockForm_instances.add(this);

    _ProductBackInStockForm_emailField.set(this, this.querySelector('[name="email"]'));

    _ProductBackInStockForm_form.set(this, null);
  }

  get form() {
    if (!__classPrivateFieldGet(this, _ProductBackInStockForm_form, "f")) {
      __classPrivateFieldSet(this, _ProductBackInStockForm_form, document.querySelector('.variations_form'), "f");
    }

    return __classPrivateFieldGet(this, _ProductBackInStockForm_form, "f");
  }

  get successMessage() {
    return this.dataset.success || "You're in! We'll let you know when it's back.";
  }

  submitHandler(event) {
    var _a, _b, _c;

    event.preventDefault();

    if (!__classPrivateFieldGet(this, _ProductBackInStockForm_emailField, "f")) {
      return;
    }

    const formData = new FormData(this);
    const email = ((_a = formData.get('email')) === null || _a === void 0 ? void 0 : _a.toString()) || '';

    if (!email) {
      return;
    }

    const data = {
      action: 'ajaxproductbackinstockemail',
      email: email,
      size: (_b = __classPrivateFieldGet(this, _ProductBackInStockForm_instances, "m", _ProductBackInStockForm_getProductSize).call(this)) !== null && _b !== void 0 ? _b : '',
      amount: (_c = __classPrivateFieldGet(this, _ProductBackInStockForm_instances, "m", _ProductBackInStockForm_getProductAmount).call(this)) !== null && _c !== void 0 ? _c : ''
    };
    const submitButton = this.querySelector('[type="submit"]');
    _components_FieldValidation__WEBPACK_IMPORTED_MODULE_0__["default"].removeErrorText(__classPrivateFieldGet(this, _ProductBackInStockForm_emailField, "f"));
    (0,_util_requests__WEBPACK_IMPORTED_MODULE_2__.sendAjaxRequest)(data, _util_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].ajax, null, __classPrivateFieldGet(this, _ProductBackInStockForm_instances, "m", _ProductBackInStockForm_onSuccess).bind(this), __classPrivateFieldGet(this, _ProductBackInStockForm_instances, "m", _ProductBackInStockForm_onFailure).bind(this), event, submitButton);
  }

}

_ProductBackInStockForm_emailField = new WeakMap(), _ProductBackInStockForm_form = new WeakMap(), _ProductBackInStockForm_instances = new WeakSet(), _ProductBackInStockForm_getProductSize = function _ProductBackInStockForm_getProductSize() {
  if (!this.form) {
    return null;
  }

  const size = this.form.querySelector('[name="attribute_pa_size"]:checked');

  if (!size) {
    return null;
  }

  return size.value;
}, _ProductBackInStockForm_getProductAmount = function _ProductBackInStockForm_getProductAmount() {
  if (!this.form) {
    return null;
  }

  const size = this.form.querySelector('[name="attribute_pa_amount"]:checked');

  if (!size) {
    return null;
  }

  return size.value;
}, _ProductBackInStockForm_onSuccess = function _ProductBackInStockForm_onSuccess() {
  if (!__classPrivateFieldGet(this, _ProductBackInStockForm_emailField, "f")) {
    return;
  }

  _components_FieldValidation__WEBPACK_IMPORTED_MODULE_0__["default"].appendSuccessText(__classPrivateFieldGet(this, _ProductBackInStockForm_emailField, "f"), this.successMessage);
}, _ProductBackInStockForm_onFailure = function _ProductBackInStockForm_onFailure(error) {
  if (!__classPrivateFieldGet(this, _ProductBackInStockForm_emailField, "f")) {
    return;
  }

  _components_FieldValidation__WEBPACK_IMPORTED_MODULE_0__["default"].appendSuccessText(__classPrivateFieldGet(this, _ProductBackInStockForm_emailField, "f"), this.successMessage);
  throw error;
};
window.customElements.define('product-back-in-stock-form', ProductBackInStockForm, {
  extends: 'form'
});

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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFFO0FBRHNFLENBQW5GOzs7Ozs7Ozs7OztBQ3BGQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21tb24vRGF0YUxheWVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheEFkZFRvQ2FydC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRDb2xvci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRQcmljZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9wcm9kdWN0RGV0YWlsLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9TaWRlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9ib2R5LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvZW5kcG9pbnRzLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvc3RyaW5nLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0FqYXhGb3JtLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm0udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3NpZGVQYW5lbC5wY3NzPzY2MmIiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgJy4vY2FydCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5vbigndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0aWFsaXplQ29tcG9uZW50cyhzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbXBvbmVudC5vbkluaXQoc2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJjbGFzcyBEYXRhTGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgPyB3aW5kb3cuZGF0YUxheWVyIDogW107XG4gICAgfVxuICAgIHB1c2goZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFMYXllci5wdXNoKHsgZWNvbW1lcmNlOiBudWxsIH0pOyAvLyBDbGVhciB0aGUgcHJldmlvdXMgZWNvbW1lcmNlIG9iamVjdC5cbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICB9XG59XG5leHBvcnQgeyBEYXRhTGF5ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBEYXRhTGF5ZXIoKTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9BamF4QWRkVG9DYXJ0X2luc3RhbmNlcywgX0FqYXhBZGRUb0NhcnRfZGlzYWJsZUZpZWxkLCBfQWpheEFkZFRvQ2FydF9lbmFibGVGaWVsZDtcbi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vY2FydCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IFNpZGVQYW5lbCBmcm9tICcuLi91aS9TaWRlUGFuZWwnO1xuaW1wb3J0IGFkZE9yVXBkYXRlQ2FydFRvdGFscyBmcm9tICcuLi91dGlsL2NhcnQnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4QWRkVG9DYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9BamF4QWRkVG9DYXJ0X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5vdXRPZlN0b2NrRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwcm9kdWN0LWJhY2staW4tc3RvY2stZm9ybScpO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bbmFtZT1cImFkZC10by1jYXJ0XCJdJyk7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGV0YWlsX192YXJpYXRpb25zIGlucHV0JykpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50U2l6ZU5hbWUgPSAnYXR0cmlidXRlX3BhX3NpemUnO1xuICAgICAgICBjb25zdCBjdXJyZW50U2l6ZVZhbHVlID0gdGhpcy5mb3JtW2N1cnJlbnRTaXplTmFtZV0udmFsdWU7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlKGN1cnJlbnRTaXplTmFtZSwgY3VycmVudFNpemVWYWx1ZSk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgdmFyaWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZSh2YXJpYXRpb24ubmFtZSwgdmFyaWF0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUFkZFRvQ2FydENsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2VWYXJpYXRpb25BdHRyaWJ1dGUobmFtZSA9ICcnLCB2YWx1ZSA9ICcnKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPcHRpb25zID0ge307XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnZhcmlhdGlvbkZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbiA9IHRoaXMudmFyaWF0aW9uRmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gdmFyaWF0aW9uO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm1bbmFtZV0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9uc1tuYW1lXSA9IHRoaXMuZm9ybVtuYW1lXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YXJpYXRpb25JRCA9IHRoaXMuZmluZE1hdGNoaW5nVmFyaWFudChjdXJyZW50T3B0aW9ucyk7XG4gICAgICAgIC8vIHRoaXMuZGlzYWJsZU5vbkV4aXN0aW5nVmFyaWFudHMobmFtZSwgdmFsdWUpO1xuICAgICAgICB0aGlzLmRpc2FibGVPdXRPZlN0b2NrVmFyaWFudHMobmFtZSwgdmFsdWUpO1xuICAgICAgICBjb25zdCBzZWxlY3RlZFZhcmlhdGlvbiA9IHRoaXMudmFyaWF0aW9uRGF0YS5maW5kKCh2YXJpYXRpb24pID0+IHZhcmlhdGlvbi52YXJpYXRpb25faWQgPT09IHZhcmlhdGlvbklEKTtcbiAgICAgICAgaWYgKHRoaXMuZGlzYWJsZWRDaGVja2VyKCkpIHtcbiAgICAgICAgICAgIHRoaXMuc2VsZWN0Rmlyc3RBdmFpbGFibGVWYXJpYW50KCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc2FibGVTdWJzY3JpcHRpb25WYXJpYW50cygpO1xuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoc2VsZWN0ZWRWYXJpYXRpb24uaXNfaW5fc3RvY2sgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b25Pbk91dE9mU3RvY2soKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuZW5hYmxlQnV0dG9uT25PdXRPZlN0b2NrKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uSWZPdXRPZlN0b2NrKCk7XG4gICAgICAgIGlmICghdmFyaWF0aW9uSUQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9ybUludmFsaWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm0udmFyaWF0aW9uX2lkLnZhbHVlID0gdmFyaWF0aW9uSUQ7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKHdpbmRvdy5qUXVlcnkpIHtcbiAgICAgICAgICAgIHdpbmRvd1xuICAgICAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgICAgICAualF1ZXJ5KHRoaXMuZm9ybSlcbiAgICAgICAgICAgICAgICAudHJpZ2dlcignc2hvd192YXJpYXRpb24nLCBbdGhpcy5maW5kTWF0Y2hpbmdWYXJpYW50RGF0YShjdXJyZW50T3B0aW9ucyldKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzZXRGb3JtSW52YWxpZCgpIHtcbiAgICAgICAgdGhpcy5mb3JtLnByb2R1Y3RfaWQudmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5mb3JtLnZhcmlhdGlvbl9pZC52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBkaXNhYmxlZENoZWNrZXIoKSB7XG4gICAgICAgIGxldCByZXR1cm5WYWx1ZSA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgaWYgKGZpZWxkLmRpc2FibGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuVmFsdWUgPSB0cnVlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICBzZWxlY3RGaXJzdEF2YWlsYWJsZVZhcmlhbnQoKSB7XG4gICAgICAgIGNvbnN0IG5hbWVzID0gbmV3IFNldCgpO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgbmFtZXMuYWRkKGZpZWxkLm5hbWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgZm9yIChjb25zdCBuYW1lIG9mIG5hbWVzKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKGBbbmFtZT1cIiR7bmFtZX1cIl1gKSk7XG4gICAgICAgICAgICBsZXQgc2VsZWN0ZWRGaWVsZCA9IGZhbHNlO1xuICAgICAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRGaWVsZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAoIXNlbGVjdGVkRmllbGQpIHtcbiAgICAgICAgICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGZpZWxkLmRpc2FibGVkIHx8IGZpZWxkLmhhc0F0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZmllbGQuY2hlY2tlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzYWJsZUJ1dHRvbklmT3V0T2ZTdG9jaygpIHtcbiAgICAgICAgbGV0IGlzSW5TdG9jayA9IGZhbHNlO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBpZiAodmFyaWF0aW9uLmlzX2luX3N0b2NrKSB7XG4gICAgICAgICAgICAgICAgaXNJblN0b2NrID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmICghaXNJblN0b2NrKSB7XG4gICAgICAgICAgICB0aGlzLmRpc2FibGVCdXR0b25Pbk91dE9mU3RvY2soKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNhYmxlQnV0dG9uT25PdXRPZlN0b2NrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuYnV0dG9uLmlzRGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1dHRvbi5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgIHRoaXMuYnV0dG9uLmxhYmVsID0gdGhpcy5idXR0b24uZGF0YXNldC5vdXRPZlN0b2NrIHx8ICdPdXQgb2Ygc3RvY2snO1xuICAgICAgICAoX2EgPSB0aGlzLm91dE9mU3RvY2tGb3JtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICB9XG4gICAgZW5hYmxlQnV0dG9uT25PdXRPZlN0b2NrKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuYnV0dG9uLmlzRGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgdGhpcy5idXR0b24ubGFiZWwgPSB0aGlzLmJ1dHRvbi5kYXRhc2V0LmluU3RvY2sgfHwgJ0FkZCB0byBCYWcnO1xuICAgICAgICAoX2EgPSB0aGlzLm91dE9mU3RvY2tGb3JtKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICB9XG4gICAgZGlzYWJsZU91dE9mU3RvY2tWYXJpYW50cyhuYW1lID0gJycsIHZhbHVlID0gJycpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdhdHRyaWJ1dGVfcGFfYW1vdW50Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YS5mb3JFYWNoKCh2YXJpYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gdmFyaWF0aW9uO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBhdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gYXR0cmlidXRlc1tmaWVsZC5uYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPT09IGZpZWxkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHZhcmlhdGlvbi5pc19pbl9zdG9jaykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FqYXhBZGRUb0NhcnRfaW5zdGFuY2VzLCBcIm1cIiwgX0FqYXhBZGRUb0NhcnRfZGlzYWJsZUZpZWxkKS5jYWxsKHRoaXMsIGZpZWxkKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB2YXJpYXRpb247XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBhdHRyaWJ1dGVzW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gZmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKCF2YXJpYXRpb24uaXNfaW5fc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BamF4QWRkVG9DYXJ0X2luc3RhbmNlcywgXCJtXCIsIF9BamF4QWRkVG9DYXJ0X2VuYWJsZUZpZWxkKS5jYWxsKHRoaXMsIGZpZWxkKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIC8vIHByaXZhdGUgZGlzYWJsZU5vbkV4aXN0aW5nVmFyaWFudHMobmFtZTogc3RyaW5nID0gJycsIHZhbHVlID0gJycpOiB2b2lkIHtcbiAgICAvLyAgICAgaWYgKG5hbWUgPT09ICdhdHRyaWJ1dGVfcGFfYW1vdW50Jykge1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuICAgIGZpbmRNYXRjaGluZ1ZhcmlhbnQoY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHZhcmlhdGlvbklEID0gbnVsbDtcbiAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5mb3JtLmRhdGFzZXQucHJvZHVjdF92YXJpYXRpb25zO1xuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhcmlhdGlvbklEID0gdmFyaWF0aW9uLnZhcmlhdGlvbl9pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YXJpYXRpb25JRDtcbiAgICB9XG4gICAgZmluZE1hdGNoaW5nVmFyaWFudERhdGEoY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHJldHVyblZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMudmFyaWF0aW9uRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZvcm0uZGF0YXNldC5wcm9kdWN0X3ZhcmlhdGlvbnM7XG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGlmICghdGhpcy52YXJpYXRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFyaWF0aW9uO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICBoYW5kbGVBZGRUb0NhcnRDbGljayhldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFyaWF0aW9uX2lkID0gMDtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkRWxlbWVudCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScpO1xuICAgICAgICBjb25zdCB2YXJpYXRpb25JZEVsZW1lbnQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgaWYgKHZhcmlhdGlvbklkRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyaWF0aW9uX2lkID0gTnVtYmVyKHZhcmlhdGlvbklkRWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvcm1Jc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZhbGlkYXRlJykpO1xuICAgICAgICAgICAgaWYgKCFmaWVsZC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgICAgIGZvcm1Jc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWZvcm1Jc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2R1Y3QgYWRkIGZvcm0gaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBOdW1iZXIoKF9hID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWFudGl0eVwiXScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpIHx8IDE7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4YWRkdG9jYXJ0JyxcbiAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHRoaXMuYnV0dG9uLnZhbHVlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICB2YXJpYXRpb25faWQ6IHZhcmlhdGlvbl9pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBjb25zdCBuYW1lRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignI29uZV90aW1lX3B1cmNoYXNlJyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRmllbGQgPT09IG51bGwgfHwgbmFtZUZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lRmllbGQubmFtZTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gIShuYW1lRmllbGQgPT09IG51bGwgfHwgbmFtZUZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lRmllbGQuY2hlY2tlZCk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvblRlcm0gPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdzdWJzY3JpcHRpb24tdGVybScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGRhdGEuc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uVGVybTtcbiAgICAgICAgfVxuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIHVuZGVmaW5lZCwgdGhpcy5idXR0b24pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIGlzIHdyb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwoJ2NhcnQtcGFuZWwnKTtcbiAgICAgICAgQ2FydC51cGRhdGVDYXJ0KCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNhcnRBbW91bnQpIHtcbiAgICAgICAgICAgIGFkZE9yVXBkYXRlQ2FydFRvdGFscyhyZXNwb25zZS5kYXRhLmNhcnRBbW91bnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uRmFpbHVyZSgpIHtcbiAgICAgICAgLy8gc3R1YlxuICAgIH1cbiAgICBkaXNhYmxlU3Vic2NyaXB0aW9uVmFyaWFudHMoKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5jdXN0b20tcmFkaW8tLXN1YnNjcmlwdGlvbiBpbnB1dCcpKTtcbiAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICBmaWVsZC5yZW1vdmVBdHRyaWJ1dGUoJ2NoZWNrZWQnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBhZGRUb0NhcnRGb3JtID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignZm9ybS5jYXJ0Jyk7XG4gICAgICAgIGlmIChhZGRUb0NhcnRGb3JtID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWpheEFkZFRvQ2FydCA9IG5ldyBBamF4QWRkVG9DYXJ0KGFkZFRvQ2FydEZvcm0pO1xuICAgICAgICBhamF4QWRkVG9DYXJ0LmluaXRpYWxpemUoKTtcbiAgICB9XG59XG5fQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQWpheEFkZFRvQ2FydF9kaXNhYmxlRmllbGQgPSBmdW5jdGlvbiBfQWpheEFkZFRvQ2FydF9kaXNhYmxlRmllbGQoZmllbGQpIHtcbiAgICAvLyBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgZmllbGQudG9nZ2xlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdHJ1ZSk7XG4gICAgZmllbGQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG59LCBfQWpheEFkZFRvQ2FydF9lbmFibGVGaWVsZCA9IGZ1bmN0aW9uIF9BamF4QWRkVG9DYXJ0X2VuYWJsZUZpZWxkKGZpZWxkKSB7XG4gICAgZmllbGQucmVtb3ZlQXR0cmlidXRlKCdkaXNhYmxlZCcpO1xuICAgIGZpZWxkLnJlbW92ZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpO1xufTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyB0b1RpdGxlQ2FzZSB9IGZyb20gJy4uL3V0aWwvc3RyaW5nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZVZhcmlhbnRDb2xvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fdmFyaWF0aW9uX19sYWJlbC0tY29sb3InKTtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmxlbmd0aCB8fCAhbGFiZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZXh0ID0gbGFiZWwudGV4dENvbnRlbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRvVGl0bGVDYXNlKHJhZGlvLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gYCR7dGV4dH06ICR7dmFsdWV9YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICByYWRpby5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJhdHRyaWJ1dGVfcGFfY29sb3JcIl0nKSk7XG4gICAgICAgIGlmICghcmFkaW9CdXR0b25zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENoYW5nZVZhcmlhbnRDb2xvcihyYWRpb0J1dHRvbnMpO1xuICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VWYXJpYW50UHJpY2UgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzID0gW107XG4gICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGV0YWlsX19wcmljZSBpbnMgW2RhdGEtcHJvZHVjdC1wcmljZV0nKSk7XG4gICAgICAgIGlmICghdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWRldGFpbF9fcHJpY2UgW2RhdGEtcHJvZHVjdC1wcmljZV0nKSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zYWxlUHJpY2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX19wcmljZSBkZWwgW2RhdGEtcHJvZHVjdC1wcmljZV0nKTtcbiAgICAgICAgaWYgKCF0aGlzLnNhbGVQcmljZUVsZW1lbnQgJiYgIXRoaXMucmVndWxhclByaWNlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuZWxlbWVudHNbMF0uY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoIWZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IHByb2R1Y3RfaWQgfSA9IGZvcm0uZGF0YXNldDtcbiAgICAgICAgaWYgKCFwcm9kdWN0X2lkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbklkRWxlbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYXRpb25faWQgPSB2YXJpYXRpb25JZEVsZW1lbnQgPT09IG51bGwgfHwgdmFyaWF0aW9uSWRFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YXJpYXRpb25JZEVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF2YXJpYXRpb25faWQgfHwgIXByb2R1Y3RfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdhamF4Z2V0dmFyaWFudHByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uX2lkXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZS5kYXRhIHx8ICghcmVzcG9uc2UuZGF0YS5zYWxlUHJpY2UgJiYgIXJlc3BvbnNlLmRhdGEucmVndWxhclByaWNlKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBkYXRhJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcmVndWxhclByaWNlID0gTnVtYmVyKHJlc3BvbnNlLmRhdGEucmVndWxhclByaWNlKS50b0ZpeGVkKDIpO1xuICAgICAgICBjb25zdCBzYWxlUHJpY2UgPSBOdW1iZXIocmVzcG9uc2UuZGF0YS5zYWxlUHJpY2UpLnRvRml4ZWQoMik7XG4gICAgICAgIGlmICh0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzLmxlbmd0aCAmJiByZWd1bGFyUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudHMuZm9yRWFjaCgoZWwpID0+IHtcbiAgICAgICAgICAgICAgICBlbC5pbm5lclRleHQgPSByZWd1bGFyUHJpY2U7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zYWxlUHJpY2VFbGVtZW50ICYmIHNhbGVQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5zYWxlUHJpY2VFbGVtZW50LmlubmVyVGV4dCA9IHNhbGVQcmljZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX3ZhcmlhdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvJykpO1xuICAgICAgICBpZiAoIXJhZGlvQnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDaGFuZ2VWYXJpYW50UHJpY2UocmFkaW9CdXR0b25zKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsQW5jaG9ycyA9IEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWRldGFpbF9fZ2FsbGVyeV9fdGh1bWJuYWlscyBhJykpO1xuICAgICAgICB0aHVtYm5haWxBbmNob3JzLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICAgICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGFuY2hvci5kYXRhc2V0LnRodW1ibmFpbElkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWltYWdlLWlkPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVBhcmVudCA9IGltYWdlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShpbWFnZVBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaS5hY3RpdmUnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fZ2FsbGVyeScpO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEltYWdlR2FsbGVyeShlbGVtZW50KTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBEYXRhTGF5ZXIgZnJvbSAnLi9jb21tb24vRGF0YUxheWVyJztcbmltcG9ydCBBamF4QWRkVG9DYXJ0IGZyb20gJy4vY29tcG9uZW50cy9BamF4QWRkVG9DYXJ0JztcbmltcG9ydCBBbW91bnRTZWxlY3RvciBmcm9tICcuL2NvbXBvbmVudHMvQW1vdW50U2VsZWN0b3InO1xuaW1wb3J0IENoYW5nZVZhcmlhbnRDb2xvciBmcm9tICcuL2NvbXBvbmVudHMvQ2hhbmdlVmFyaWFudENvbG9yJztcbmltcG9ydCBDaGFuZ2VWYXJpYW50UHJpY2UgZnJvbSAnLi9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRQcmljZSc7XG5pbXBvcnQgSW1hZ2VHYWxsZXJ5IGZyb20gJy4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnknO1xuaW1wb3J0IE1vZHVsZSBmcm9tICcuL01vZHVsZSc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvUHJvZHVjdEJhY2tJblN0b2NrRm9ybSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW1xuICAgICAgICAgICAgQWpheEFkZFRvQ2FydCxcbiAgICAgICAgICAgIEFtb3VudFNlbGVjdG9yLFxuICAgICAgICAgICAgSW1hZ2VHYWxsZXJ5LFxuICAgICAgICAgICAgQ2hhbmdlVmFyaWFudFByaWNlLFxuICAgICAgICAgICAgQ2hhbmdlVmFyaWFudENvbG9yXG4gICAgICAgIF07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ3ZpZXdfaXRlbScsXG4gICAgICAgICAgICBlY29tbWVyY2U6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZm9ybSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2Zvcm1bZGF0YS1wcm9kdWN0X2lkXScpO1xuICAgICAgICBjb25zdCB2YXJpYXRpb25GaWVsZCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdERhdGEgPSB7XG4gICAgICAgICAgICBpdGVtX2lkOiAoZm9ybSA9PT0gbnVsbCB8fCBmb3JtID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtLmRhdGFzZXQucHJvZHVjdF9pZCkgfHwgJycsXG4gICAgICAgICAgICBpdGVtX25hbWU6ICgoX2EgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kZXRhaWxfX3RpdGxlJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50ZXh0Q29udGVudCkgfHwgJycsXG4gICAgICAgICAgICBpdGVtX3ZhcmlhbnQ6ICh2YXJpYXRpb25GaWVsZCA9PT0gbnVsbCB8fCB2YXJpYXRpb25GaWVsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaWF0aW9uRmllbGQudmFsdWUpIHx8ICcnLFxuICAgICAgICAgICAgcHJpY2U6IE51bWJlcigoX2MgPSAoX2IgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcm9kdWN0LXByaWNlXScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudGV4dENvbnRlbnQpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy5yZXBsYWNlKCcsJywgJy4nKSkgfHwgMCxcbiAgICAgICAgICAgIGl0ZW1fYnJhbmQ6ICdMYXZhbmRyw6knXG4gICAgICAgIH07XG4gICAgICAgIGRhdGEuZWNvbW1lcmNlLml0ZW1zLnB1c2gocHJvZHVjdERhdGEpO1xuICAgICAgICBEYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICB9XG59XG4oZnVuY3Rpb24gcHJvZHVjdERldGFpbEluaXQoKSB7XG4gICAgY29uc3QgcHJvZHVjdERldGFpbCA9IG5ldyBQcm9kdWN0RGV0YWlsKCk7XG4gICAgcHJvZHVjdERldGFpbC5pbml0aWFsaXplKCk7XG59KSgpO1xuIiwiaW1wb3J0IGRpYWxvZ1BvbHlmaWxsIGZyb20gJ2RpYWxvZy1wb2x5ZmlsbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgZGlzYWJsZUJvZHlTY3JvbGwsIGVuYWJsZUJvZHlTY3JvbGwgfSBmcm9tICcuLi91dGlsL2JvZHknO1xuaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tICcuLi91dGlsL3N0cmluZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG4gICAgc2V0IGlzT3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNhbWVsRGF0YUF0dHJpYnV0ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGFBdHRyaWJ1dGUucmVwbGFjZSgnZGF0YS0nLCAnJyk7XG4gICAgICAgIHJldHVybiB0b0NhbWVsQ2FzZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCB0cmFuc2l0aW9uVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zaXRpb25UaW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvblRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWUgPSB0aGlzLmdldFRyYW5zaXRpb25UaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uVGltZTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5wb2x5ZmlsbERpYWxvZygpO1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlXScpKTtcbiAgICAgICAgY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0c2lkZUNsaWNrKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZEluRGlhbG9nID0gcmVjdC50b3AgPD0gZXZlbnQuY2xpZW50WSAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgPD0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHJlY3QubGVmdCA8PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8PSByZWN0LmxlZnQgKyByZWN0LndpZHRoO1xuICAgICAgICAgICAgaWYgKCFjbGlja2VkSW5EaWFsb2cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdChgWyR7dGhpcy5kYXRhQXR0cmlidXRlfT1cIiR7dGhpcy5lbGVtZW50LmRhdGFzZXRbYCR7dGhpcy5jYW1lbERhdGFBdHRyaWJ1dGV9YF19XCJdYCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNhYmxlQm9keVNjcm9sbCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2hvd01vZGFsKCk7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGVuYWJsZUJvZHlTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgZ2V0VHJhbnNpdGlvblRpbWUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSAoX2EgPSBzdHlsZXMudHJhbnNpdGlvbkR1cmF0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uaW5kZXhPZignbXMnKSA+IC0xXG4gICAgICAgICAgICA/IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKiAxMDAwO1xuICAgICAgICByZXR1cm4gZHVyYXRpb24gfHwgNDAwO1xuICAgIH1cbiAgICBwb2x5ZmlsbERpYWxvZygpIHtcbiAgICAgICAgZGlhbG9nUG9seWZpbGwgPT09IG51bGwgfHwgZGlhbG9nUG9seWZpbGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpYWxvZ1BvbHlmaWxsLnJlZ2lzdGVyRGlhbG9nKHRoaXMuZWxlbWVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fc2lkZVBhbmVsLnBjc3MnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZVBhbmVsIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kYXRhQXR0cmlidXRlID0gJ2RhdGEtcGFuZWwtbmFtZSc7XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgICAgICAgIG9wZW46ICdzaWRlLXBhbmVsLS1vcGVuZWQnLFxuICAgICAgICAgICAgY2xvc2VkOiAnc2lkZS1wYW5lbC0tY2xvc2VkJyxcbiAgICAgICAgICAgIGxlZnQ6ICdzaWRlLXBhbmVsLS1sZWZ0JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnc2lkZS1wYW5lbC0tcmlnaHQnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBvcGVuU2lkZVBhbmVsKHBhbmVsSUQsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgaWYgKHBhbmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLXRlbXBsYXRlPVwiJHtwYW5lbElEfVwiXWApO1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZWxlbWVudC5ocmVmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSBjbG9uZTtcbiAgICAgICAgICAgIChfYSA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICAgIHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCBwYW5lbCk7XG4gICAgICAgICAgICBpZiAocGFuZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzaWRlUGFuZWxJbnN0YW5jZSA9IG5ldyBTaWRlUGFuZWwocGFuZWwpO1xuICAgICAgICAgICAgc2lkZVBhbmVsSW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvZ2dsZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKTtcbiAgICAgICAgcGFuZWwuZGlzcGF0Y2hFdmVudCh0b2dnbGVFdmVudCk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgICAgICBjb25zdCBwYW5lbExpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW5lbF0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYW5lbExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhbmVsTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlQ3JlYXRpb25FdmVudChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwYW5lbElEID0gdGhpcy5kYXRhc2V0LnBhbmVsIHx8ICcnO1xuICAgICAgICAvLyBJZiBhbHJlYWR5IGxvZ2dlZCBpbiBmb2xsb3cgbGlua1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmXG4gICAgICAgICAgICBwYW5lbElEID09PSAnbXktYWNjb3VudC1wYW5lbCcgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2dnZWQtaW4nKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwocGFuZWxJRCwgdGhpcyk7XG4gICAgfVxufVxuIiwiY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgc2Nyb2xsUG9zaXRpb24gPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVCb2R5U2Nyb2xsKCkge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnRvcCA9IGAtJHtzY3JvbGxQb3NpdGlvbn1weGA7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ2luaXRpYWwnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUJvZHlTY3JvbGwoKSB7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Bvc2l0aW9uJyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnc2Nyb2xsLWJlaGF2aW9yJyk7XG59XG4iLCJjb25zdCBlbmRwb2ludHMgPSB7XG4gICAgYWpheDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgXG59O1xuZXhwb3J0IGRlZmF1bHQgZW5kcG9pbnRzO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobWF0Y2gsIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvVGl0bGVDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3XFxTKi9nLCAodHh0KSA9PiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpO1xufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheEZvcm0gZXh0ZW5kcyBIVE1MRm9ybUVsZW1lbnQge1xuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuc3VibWl0SGFuZGxlcik7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIHRoaXMuc3VibWl0SGFuZGxlcik7XG4gICAgfVxuICAgIHN1Ym1pdEhhbmRsZXIoZXZlbnQpIHsgfVxufVxuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2luc3RhbmNlcywgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZW1haWxGaWVsZCwgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZm9ybSwgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZ2V0UHJvZHVjdFNpemUsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2dldFByb2R1Y3RBbW91bnQsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX29uU3VjY2VzcywgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fb25GYWlsdXJlO1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZpZWxkVmFsaWRhdGlvbic7XG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4uL3V0aWwvZW5kcG9pbnRzJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IEFqYXhGb3JtIGZyb20gJy4vQWpheEZvcm0nO1xuY2xhc3MgUHJvZHVjdEJhY2tJblN0b2NrRm9ybSBleHRlbmRzIEFqYXhGb3JtIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1faW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZW1haWxGaWVsZC5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVtYWlsXCJdJykpO1xuICAgICAgICBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9mb3JtLnNldCh0aGlzLCBudWxsKTtcbiAgICB9XG4gICAgZ2V0IGZvcm0oKSB7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9mb3JtLCBcImZcIikpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZm9ybSwgZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnZhcmlhdGlvbnNfZm9ybScpLCBcImZcIik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZm9ybSwgXCJmXCIpO1xuICAgIH1cbiAgICBnZXQgc3VjY2Vzc01lc3NhZ2UoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmRhdGFzZXQuc3VjY2VzcyB8fCBcIllvdSdyZSBpbiEgV2UnbGwgbGV0IHlvdSBrbm93IHdoZW4gaXQncyBiYWNrLlwiO1xuICAgIH1cbiAgICBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZW1haWxGaWVsZCwgXCJmXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgICAgIGNvbnN0IGVtYWlsID0gKChfYSA9IGZvcm1EYXRhLmdldCgnZW1haWwnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBpZiAoIWVtYWlsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhwcm9kdWN0YmFja2luc3RvY2tlbWFpbCcsXG4gICAgICAgICAgICBlbWFpbDogZW1haWwsXG4gICAgICAgICAgICBzaXplOiAoX2IgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2dldFByb2R1Y3RTaXplKS5jYWxsKHRoaXMpKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJyxcbiAgICAgICAgICAgIGFtb3VudDogKF9jID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9nZXRQcm9kdWN0QW1vdW50KS5jYWxsKHRoaXMpKSAhPT0gbnVsbCAmJiBfYyAhPT0gdm9pZCAwID8gX2MgOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgICAgIEZpZWxkVmFsaWRhdGlvbi5yZW1vdmVFcnJvclRleHQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9lbWFpbEZpZWxkLCBcImZcIikpO1xuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgZW5kcG9pbnRzLmFqYXgsIG51bGwsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1faW5zdGFuY2VzLCBcIm1cIiwgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fb25TdWNjZXNzKS5iaW5kKHRoaXMpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX29uRmFpbHVyZSkuYmluZCh0aGlzKSwgZXZlbnQsIHN1Ym1pdEJ1dHRvbik7XG4gICAgfVxufVxuX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZW1haWxGaWVsZCA9IG5ldyBXZWFrTWFwKCksIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2Zvcm0gPSBuZXcgV2Vha01hcCgpLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9nZXRQcm9kdWN0U2l6ZSA9IGZ1bmN0aW9uIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2dldFByb2R1Y3RTaXplKCkge1xuICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBjb25zdCBzaXplID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiYXR0cmlidXRlX3BhX3NpemVcIl06Y2hlY2tlZCcpO1xuICAgIGlmICghc2l6ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHNpemUudmFsdWU7XG59LCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9nZXRQcm9kdWN0QW1vdW50ID0gZnVuY3Rpb24gX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZ2V0UHJvZHVjdEFtb3VudCgpIHtcbiAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImF0dHJpYnV0ZV9wYV9hbW91bnRcIl06Y2hlY2tlZCcpO1xuICAgIGlmICghc2l6ZSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIHNpemUudmFsdWU7XG59LCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9vblN1Y2Nlc3MgPSBmdW5jdGlvbiBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9vblN1Y2Nlc3MoKSB7XG4gICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2VtYWlsRmllbGQsIFwiZlwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEZpZWxkVmFsaWRhdGlvbi5hcHBlbmRTdWNjZXNzVGV4dChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2VtYWlsRmllbGQsIFwiZlwiKSwgdGhpcy5zdWNjZXNzTWVzc2FnZSk7XG59LCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9vbkZhaWx1cmUgPSBmdW5jdGlvbiBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9vbkZhaWx1cmUoZXJyb3IpIHtcbiAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZW1haWxGaWVsZCwgXCJmXCIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgRmllbGRWYWxpZGF0aW9uLmFwcGVuZFN1Y2Nlc3NUZXh0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZW1haWxGaWVsZCwgXCJmXCIpLCB0aGlzLnN1Y2Nlc3NNZXNzYWdlKTtcbiAgICB0aHJvdyBlcnJvcjtcbn07XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdwcm9kdWN0LWJhY2staW4tc3RvY2stZm9ybScsIFByb2R1Y3RCYWNrSW5TdG9ja0Zvcm0sIHtcbiAgICBleHRlbmRzOiAnZm9ybSdcbn0pO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIk1vZHVsZSIsImNvbnN0cnVjdG9yIiwiZXZlbnRFbWl0dGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDb21wb25lbnRzIiwib24iLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwiY29tcG9uZW50Iiwib25Jbml0IiwiRGF0YUxheWVyIiwiZGF0YUxheWVyIiwid2luZG93IiwicHVzaCIsImRhdGEiLCJlY29tbWVyY2UiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwicmVjZWl2ZXIiLCJzdGF0ZSIsImtpbmQiLCJmIiwiVHlwZUVycm9yIiwiaGFzIiwiY2FsbCIsInZhbHVlIiwiZ2V0IiwiX0FqYXhBZGRUb0NhcnRfaW5zdGFuY2VzIiwiX0FqYXhBZGRUb0NhcnRfZGlzYWJsZUZpZWxkIiwiX0FqYXhBZGRUb0NhcnRfZW5hYmxlRmllbGQiLCJDYXJ0IiwiQ29tcG9uZW50IiwiU2lkZVBhbmVsIiwiYWRkT3JVcGRhdGVDYXJ0VG90YWxzIiwic2VuZEFqYXhSZXF1ZXN0IiwiQWpheEFkZFRvQ2FydCIsImZvcm0iLCJhZGQiLCJ2YXJpYXRpb25EYXRhIiwiYWpheEVuZHBvaW50IiwibG9jYXRpb24iLCJvcmlnaW4iLCJvdXRPZlN0b2NrRm9ybSIsImdldEVsZW1lbnRCeUlkIiwiYnV0dG9uIiwicXVlcnlTZWxlY3RvciIsInZhcmlhdGlvbkZpZWxkcyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJoYW5kbGVDaGFuZ2VWYXJpYXRpb25BdHRyaWJ1dGUiLCJjdXJyZW50U2l6ZU5hbWUiLCJjdXJyZW50U2l6ZVZhbHVlIiwidmFyaWF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hbWUiLCJoYW5kbGVBZGRUb0NhcnRDbGljayIsImJpbmQiLCJjdXJyZW50T3B0aW9ucyIsImluZGV4IiwibGVuZ3RoIiwidmFyaWF0aW9uSUQiLCJmaW5kTWF0Y2hpbmdWYXJpYW50IiwiZGlzYWJsZU91dE9mU3RvY2tWYXJpYW50cyIsInNlbGVjdGVkVmFyaWF0aW9uIiwiZmluZCIsInZhcmlhdGlvbl9pZCIsImRpc2FibGVkQ2hlY2tlciIsInNlbGVjdEZpcnN0QXZhaWxhYmxlVmFyaWFudCIsInNldFRpbWVvdXQiLCJkaXNhYmxlU3Vic2NyaXB0aW9uVmFyaWFudHMiLCJpc19pbl9zdG9jayIsImRpc2FibGVCdXR0b25Pbk91dE9mU3RvY2siLCJlbmFibGVCdXR0b25Pbk91dE9mU3RvY2siLCJkaXNhYmxlQnV0dG9uSWZPdXRPZlN0b2NrIiwic2V0Rm9ybUludmFsaWQiLCJqUXVlcnkiLCJ0cmlnZ2VyIiwiZmluZE1hdGNoaW5nVmFyaWFudERhdGEiLCJwcm9kdWN0X2lkIiwicmV0dXJuVmFsdWUiLCJmaWVsZCIsImRpc2FibGVkIiwibmFtZXMiLCJTZXQiLCJmaWVsZHMiLCJzZWxlY3RlZEZpZWxkIiwiY2hlY2tlZCIsImhhc0F0dHJpYnV0ZSIsImlzSW5TdG9jayIsIl9hIiwiaXNEaXNhYmxlZCIsImxhYmVsIiwiZGF0YXNldCIsIm91dE9mU3RvY2siLCJyZW1vdmVBdHRyaWJ1dGUiLCJpblN0b2NrIiwidG9nZ2xlQXR0cmlidXRlIiwiYXR0cmlidXRlcyIsIkVycm9yIiwibWF0Y2giLCJwcm9kdWN0X3ZhcmlhdGlvbnMiLCJKU09OIiwicGFyc2UiLCJrZXkiLCJPYmplY3QiLCJlbnRyaWVzIiwidW5kZWZpbmVkIiwiZXZlbnQiLCJfYiIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdElkRWxlbWVudCIsInZhcmlhdGlvbklkRWxlbWVudCIsIk51bWJlciIsImZvcm1Jc1ZhbGlkIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwidmFsaWRpdHkiLCJ2YWxpZCIsInF1YW50aXR5IiwiYWN0aW9uIiwidG9TdHJpbmciLCJzdWJzY3JpcHRpb24iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibmFtZUZpZWxkIiwic3Vic2NyaXB0aW9uVGVybSIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsInJlc3BvbnNlIiwic3VjY2VzcyIsIm9wZW5TaWRlUGFuZWwiLCJ1cGRhdGVDYXJ0IiwiY2FydEFtb3VudCIsImFkZFRvQ2FydEZvcm0iLCJhamF4QWRkVG9DYXJ0IiwiV2Vha1NldCIsInRvVGl0bGVDYXNlIiwiQ2hhbmdlVmFyaWFudENvbG9yIiwiZWxlbWVudHMiLCJ0ZXh0IiwidGV4dENvbnRlbnQiLCJyYWRpbyIsImlubmVyVGV4dCIsInJhZGlvQnV0dG9ucyIsImluc3RhbmNlIiwiQ2hhbmdlVmFyaWFudFByaWNlIiwicmVndWxhclByaWNlRWxlbWVudHMiLCJzYWxlUHJpY2VFbGVtZW50IiwiY2xvc2VzdCIsInNhbGVQcmljZSIsInJlZ3VsYXJQcmljZSIsInRvRml4ZWQiLCJlbCIsIkltYWdlR2FsbGVyeSIsInRodW1ibmFpbEFuY2hvcnMiLCJhbmNob3IiLCJpZCIsInRodW1ibmFpbElkIiwiaW1hZ2UiLCJpbWFnZVBhcmVudCIsInBhcmVudEVsZW1lbnQiLCJjbGFzc0xpc3QiLCJyZW1vdmUiLCJBbW91bnRTZWxlY3RvciIsIlByb2R1Y3REZXRhaWwiLCJhcmd1bWVudHMiLCJfYyIsIml0ZW1zIiwidmFyaWF0aW9uRmllbGQiLCJwcm9kdWN0RGF0YSIsIml0ZW1faWQiLCJpdGVtX25hbWUiLCJpdGVtX3ZhcmlhbnQiLCJwcmljZSIsInJlcGxhY2UiLCJpdGVtX2JyYW5kIiwicHJvZHVjdERldGFpbEluaXQiLCJwcm9kdWN0RGV0YWlsIiwiZGlhbG9nUG9seWZpbGwiLCJkaXNhYmxlQm9keVNjcm9sbCIsImVuYWJsZUJvZHlTY3JvbGwiLCJ0b0NhbWVsQ2FzZSIsIkRpYWxvZyIsIl9pc09wZW4iLCJfdHJhbnNpdGlvblRpbWUiLCJpc09wZW4iLCJjYW1lbERhdGFBdHRyaWJ1dGUiLCJkYXRhQXR0cmlidXRlIiwidHJhbnNpdGlvblRpbWUiLCJnZXRUcmFuc2l0aW9uVGltZSIsInBvbHlmaWxsRGlhbG9nIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJvcGVuIiwidG9nZ2xlIiwiY2xvc2VCdXR0b25zIiwiY2xvc2UiLCJlIiwib3V0c2lkZUNsaWNrIiwidGFyZ2V0IiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWNrZWRJbkRpYWxvZyIsInRvcCIsImNsaWVudFkiLCJoZWlnaHQiLCJsZWZ0IiwiY2xpZW50WCIsIndpZHRoIiwic2hvd01vZGFsIiwiY2xhc3NlcyIsImNsb3NlZCIsInN0eWxlcyIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJkdXJhdGlvbiIsImluZGV4T2YiLCJwYXJzZUZsb2F0IiwicmVnaXN0ZXJEaWFsb2ciLCJyaWdodCIsInBhbmVsSUQiLCJwYW5lbCIsInRlbXBsYXRlIiwiSFRNTEFuY2hvckVsZW1lbnQiLCJocmVmIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJjb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJlbWl0Iiwic2lkZVBhbmVsSW5zdGFuY2UiLCJ0b2dnbGVFdmVudCIsIkN1c3RvbUV2ZW50IiwicGFuZWxMaW5rcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDcmVhdGlvbkV2ZW50IiwiYm9keSIsImNvbnRhaW5zIiwiYm9keUVsZW1lbnQiLCJzY3JvbGxQb3NpdGlvbiIsInBhZ2VZT2Zmc2V0Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsQmVoYXZpb3IiLCJyZW1vdmVQcm9wZXJ0eSIsInNjcm9sbFRvIiwiZW5kcG9pbnRzIiwiYWpheCIsInN0ciIsImNociIsInRvVXBwZXJDYXNlIiwidHh0IiwiY2hhckF0Iiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJBamF4Rm9ybSIsIkhUTUxGb3JtRWxlbWVudCIsImNvbm5lY3RlZENhbGxiYWNrIiwic3VibWl0SGFuZGxlciIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldCIsInNldCIsIl9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2luc3RhbmNlcyIsIl9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2VtYWlsRmllbGQiLCJfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9mb3JtIiwiX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZ2V0UHJvZHVjdFNpemUiLCJfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9nZXRQcm9kdWN0QW1vdW50IiwiX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fb25TdWNjZXNzIiwiX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fb25GYWlsdXJlIiwiRmllbGRWYWxpZGF0aW9uIiwiUHJvZHVjdEJhY2tJblN0b2NrRm9ybSIsInN1Y2Nlc3NNZXNzYWdlIiwiZW1haWwiLCJzaXplIiwiYW1vdW50Iiwic3VibWl0QnV0dG9uIiwicmVtb3ZlRXJyb3JUZXh0IiwiV2Vha01hcCIsImFwcGVuZFN1Y2Nlc3NUZXh0IiwiZXJyb3IiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsImV4dGVuZHMiXSwic291cmNlUm9vdCI6IiJ9