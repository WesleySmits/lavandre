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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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T0FBTyxFQUFFO0FBRHNFLENBQW5GOzs7Ozs7Ozs7OztBQ3BGQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21tb24vRGF0YUxheWVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheEFkZFRvQ2FydC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRDb2xvci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRQcmljZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9wcm9kdWN0RGV0YWlsLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9TaWRlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9ib2R5LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvZW5kcG9pbnRzLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvc3RyaW5nLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0FqYXhGb3JtLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm0udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3NpZGVQYW5lbC5wY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0ICcuL2NhcnQnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIub24oJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudHMoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb21wb25lbnQub25Jbml0KHNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiY2xhc3MgRGF0YUxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyID8gd2luZG93LmRhdGFMYXllciA6IFtdO1xuICAgIH1cbiAgICBwdXNoKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaCh7IGVjb21tZXJjZTogbnVsbCB9KTsgLy8gQ2xlYXIgdGhlIHByZXZpb3VzIGVjb21tZXJjZSBvYmplY3QuXG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRGF0YUxheWVyIH07XG5leHBvcnQgZGVmYXVsdCBuZXcgRGF0YUxheWVyKCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMsIF9BamF4QWRkVG9DYXJ0X2Rpc2FibGVGaWVsZCwgX0FqYXhBZGRUb0NhcnRfZW5hYmxlRmllbGQ7XG4vKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NhcnQnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBTaWRlUGFuZWwgZnJvbSAnLi4vdWkvU2lkZVBhbmVsJztcbmltcG9ydCBhZGRPclVwZGF0ZUNhcnRUb3RhbHMgZnJvbSAnLi4vdXRpbC9jYXJ0JztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheEFkZFRvQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMub3V0T2ZTdG9ja0Zvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncHJvZHVjdC1iYWNrLWluLXN0b2NrLWZvcm0nKTtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgICAgdGhpcy5idXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW25hbWU9XCJhZGQtdG8tY2FydFwiXScpO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWRldGFpbF9fdmFyaWF0aW9ucyBpbnB1dCcpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VWYXJpYXRpb25BdHRyaWJ1dGUoKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNpemVOYW1lID0gJ2F0dHJpYnV0ZV9wYV9zaXplJztcbiAgICAgICAgY29uc3QgY3VycmVudFNpemVWYWx1ZSA9IHRoaXMuZm9ybVtjdXJyZW50U2l6ZU5hbWVdLnZhbHVlO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZShjdXJyZW50U2l6ZU5hbWUsIGN1cnJlbnRTaXplVmFsdWUpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKCh2YXJpYXRpb24pID0+IHtcbiAgICAgICAgICAgIHZhcmlhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VWYXJpYXRpb25BdHRyaWJ1dGUodmFyaWF0aW9uLm5hbWUsIHZhcmlhdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVBZGRUb0NhcnRDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlKG5hbWUgPSAnJywgdmFsdWUgPSAnJykge1xuICAgICAgICBjb25zdCBjdXJyZW50T3B0aW9ucyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy52YXJpYXRpb25GaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYXRpb24gPSB0aGlzLnZhcmlhdGlvbkZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCB7IG5hbWUgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghdGhpcy5mb3JtW25hbWVdLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY3VycmVudE9wdGlvbnNbbmFtZV0gPSB0aGlzLmZvcm1bbmFtZV0udmFsdWU7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdmFyaWF0aW9uSUQgPSB0aGlzLmZpbmRNYXRjaGluZ1ZhcmlhbnQoY3VycmVudE9wdGlvbnMpO1xuICAgICAgICAvLyB0aGlzLmRpc2FibGVOb25FeGlzdGluZ1ZhcmlhbnRzKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlT3V0T2ZTdG9ja1ZhcmlhbnRzKG5hbWUsIHZhbHVlKTtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRWYXJpYXRpb24gPSB0aGlzLnZhcmlhdGlvbkRhdGEuZmluZCgodmFyaWF0aW9uKSA9PiB2YXJpYXRpb24udmFyaWF0aW9uX2lkID09PSB2YXJpYXRpb25JRCk7XG4gICAgICAgIGlmICh0aGlzLmRpc2FibGVkQ2hlY2tlcigpKSB7XG4gICAgICAgICAgICB0aGlzLnNlbGVjdEZpcnN0QXZhaWxhYmxlVmFyaWFudCgpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNhYmxlU3Vic2NyaXB0aW9uVmFyaWFudHMoKTtcbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHNlbGVjdGVkVmFyaWF0aW9uLmlzX2luX3N0b2NrID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uT25PdXRPZlN0b2NrKCk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmVuYWJsZUJ1dHRvbk9uT3V0T2ZTdG9jaygpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZGlzYWJsZUJ1dHRvbklmT3V0T2ZTdG9jaygpO1xuICAgICAgICBpZiAoIXZhcmlhdGlvbklEKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZvcm1JbnZhbGlkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtLnZhcmlhdGlvbl9pZC52YWx1ZSA9IHZhcmlhdGlvbklEO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgICAgICAgICB3aW5kb3dcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgLmpRdWVyeSh0aGlzLmZvcm0pXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoJ3Nob3dfdmFyaWF0aW9uJywgW3RoaXMuZmluZE1hdGNoaW5nVmFyaWFudERhdGEoY3VycmVudE9wdGlvbnMpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0Rm9ybUludmFsaWQoKSB7XG4gICAgICAgIHRoaXMuZm9ybS5wcm9kdWN0X2lkLnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuZm9ybS52YXJpYXRpb25faWQudmFsdWUgPSAnJztcbiAgICB9XG4gICAgZGlzYWJsZWRDaGVja2VyKCkge1xuICAgICAgICBsZXQgcmV0dXJuVmFsdWUgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGlmIChmaWVsZC5kaXNhYmxlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdHJ1ZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG4gICAgc2VsZWN0Rmlyc3RBdmFpbGFibGVWYXJpYW50KCkge1xuICAgICAgICBjb25zdCBuYW1lcyA9IG5ldyBTZXQoKTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIG5hbWVzLmFkZChmaWVsZC5uYW1lKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGZvciAoY29uc3QgbmFtZSBvZiBuYW1lcykge1xuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbChgW25hbWU9XCIke25hbWV9XCJdYCkpO1xuICAgICAgICAgICAgbGV0IHNlbGVjdGVkRmllbGQgPSBmYWxzZTtcbiAgICAgICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdGVkRmllbGQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKCFzZWxlY3RlZEZpZWxkKSB7XG4gICAgICAgICAgICAgICAgZmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChmaWVsZC5kaXNhYmxlZCB8fCBmaWVsZC5oYXNBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmNoZWNrZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2FibGVCdXR0b25JZk91dE9mU3RvY2soKSB7XG4gICAgICAgIGxldCBpc0luU3RvY2sgPSBmYWxzZTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgaWYgKHZhcmlhdGlvbi5pc19pbl9zdG9jaykge1xuICAgICAgICAgICAgICAgIGlzSW5TdG9jayA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWlzSW5TdG9jaykge1xuICAgICAgICAgICAgdGhpcy5kaXNhYmxlQnV0dG9uT25PdXRPZlN0b2NrKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzYWJsZUJ1dHRvbk9uT3V0T2ZTdG9jaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmJ1dHRvbi5pc0Rpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5idXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICB0aGlzLmJ1dHRvbi5sYWJlbCA9IHRoaXMuYnV0dG9uLmRhdGFzZXQub3V0T2ZTdG9jayB8fCAnT3V0IG9mIHN0b2NrJztcbiAgICAgICAgKF9hID0gdGhpcy5vdXRPZlN0b2NrRm9ybSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgfVxuICAgIGVuYWJsZUJ1dHRvbk9uT3V0T2ZTdG9jaygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmJ1dHRvbi5pc0Rpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgICAgIHRoaXMuYnV0dG9uLmxhYmVsID0gdGhpcy5idXR0b24uZGF0YXNldC5pblN0b2NrIHx8ICdBZGQgdG8gQmFnJztcbiAgICAgICAgKF9hID0gdGhpcy5vdXRPZlN0b2NrRm9ybSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgfVxuICAgIGRpc2FibGVPdXRPZlN0b2NrVmFyaWFudHMobmFtZSA9ICcnLCB2YWx1ZSA9ICcnKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnYXR0cmlidXRlX3BhX2Ftb3VudCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGF0dHJpYnV0ZXNbZmllbGQubmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoID09PSBmaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh2YXJpYXRpb24uaXNfaW5fc3RvY2spIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BamF4QWRkVG9DYXJ0X2luc3RhbmNlcywgXCJtXCIsIF9BamF4QWRkVG9DYXJ0X2Rpc2FibGVGaWVsZCkuY2FsbCh0aGlzLCBmaWVsZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YS5mb3JFYWNoKCh2YXJpYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHsgYXR0cmlidXRlcyB9ID0gdmFyaWF0aW9uO1xuICAgICAgICAgICAgaWYgKCFhdHRyaWJ1dGVzKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBhdHRyaWJ1dGVzJyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IG1hdGNoID0gYXR0cmlidXRlc1tmaWVsZC5uYW1lXTtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2ggPT09IGZpZWxkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICghdmFyaWF0aW9uLmlzX2luX3N0b2NrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWpheEFkZFRvQ2FydF9pbnN0YW5jZXMsIFwibVwiLCBfQWpheEFkZFRvQ2FydF9lbmFibGVGaWVsZCkuY2FsbCh0aGlzLCBmaWVsZCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICAvLyBwcml2YXRlIGRpc2FibGVOb25FeGlzdGluZ1ZhcmlhbnRzKG5hbWU6IHN0cmluZyA9ICcnLCB2YWx1ZSA9ICcnKTogdm9pZCB7XG4gICAgLy8gICAgIGlmIChuYW1lID09PSAnYXR0cmlidXRlX3BhX2Ftb3VudCcpIHtcbiAgICAvLyAgICAgfVxuICAgIC8vIH1cbiAgICBmaW5kTWF0Y2hpbmdWYXJpYW50KGN1cnJlbnRPcHRpb25zKSB7XG4gICAgICAgIGxldCB2YXJpYXRpb25JRCA9IG51bGw7XG4gICAgICAgIGlmICghdGhpcy52YXJpYXRpb25EYXRhLmxlbmd0aCkge1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHRoaXMuZm9ybS5kYXRhc2V0LnByb2R1Y3RfdmFyaWF0aW9ucztcbiAgICAgICAgICAgIGlmICghZGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGlmICghdGhpcy52YXJpYXRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB2YXJpYXRpb247XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXJpYXRpb25JRCA9IHZhcmlhdGlvbi52YXJpYXRpb25faWQ7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFyaWF0aW9uSUQ7XG4gICAgfVxuICAgIGZpbmRNYXRjaGluZ1ZhcmlhbnREYXRhKGN1cnJlbnRPcHRpb25zKSB7XG4gICAgICAgIGxldCByZXR1cm5WYWx1ZTtcbiAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5mb3JtLmRhdGFzZXQucHJvZHVjdF92YXJpYXRpb25zO1xuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmFyaWF0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB2YXJpYXRpb247XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm5WYWx1ZSA9IHZhcmlhdGlvbjtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbiAgICB9XG4gICAgaGFuZGxlQWRkVG9DYXJ0Q2xpY2soZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHZhcmlhdGlvbl9pZCA9IDA7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZEVsZW1lbnQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9uSWRFbGVtZW50ID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidmFyaWF0aW9uX2lkXCJdJyk7XG4gICAgICAgIGlmICh2YXJpYXRpb25JZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhcmlhdGlvbl9pZCA9IE51bWJlcih2YXJpYXRpb25JZEVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmb3JtSXNWYWxpZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd2YWxpZGF0ZScpKTtcbiAgICAgICAgICAgIGlmICghZmllbGQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBmb3JtSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFmb3JtSXNWYWxpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9kdWN0IGFkZCBmb3JtIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gTnVtYmVyKChfYSA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlKSB8fCAxO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnYWpheGFkZHRvY2FydCcsXG4gICAgICAgICAgICBwcm9kdWN0X2lkOiB0aGlzLmJ1dHRvbi52YWx1ZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eS50b1N0cmluZygpLFxuICAgICAgICAgICAgdmFyaWF0aW9uX2lkOiB2YXJpYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHN1YnNjcmlwdGlvbjogJydcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgY29uc3QgbmFtZUZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJyNvbmVfdGltZV9wdXJjaGFzZScpO1xuICAgICAgICBjb25zdCBuYW1lID0gbmFtZUZpZWxkID09PSBudWxsIHx8IG5hbWVGaWVsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZUZpZWxkLm5hbWU7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvbiA9ICEobmFtZUZpZWxkID09PSBudWxsIHx8IG5hbWVGaWVsZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogbmFtZUZpZWxkLmNoZWNrZWQpO1xuICAgICAgICBjb25zdCBzdWJzY3JpcHRpb25UZXJtID0gKChfYiA9IGZvcm1EYXRhLmdldCgnc3Vic2NyaXB0aW9uLXRlcm0nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBpZiAoc3Vic2NyaXB0aW9uKSB7XG4gICAgICAgICAgICBkYXRhLnN1YnNjcmlwdGlvbiA9IHN1YnNjcmlwdGlvblRlcm07XG4gICAgICAgIH1cbiAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCB1bmRlZmluZWQsIHRoaXMuYnV0dG9uKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyBpcyB3cm9uZycpO1xuICAgICAgICB9XG4gICAgICAgIFNpZGVQYW5lbC5vcGVuU2lkZVBhbmVsKCdjYXJ0LXBhbmVsJyk7XG4gICAgICAgIENhcnQudXBkYXRlQ2FydCgpO1xuICAgICAgICBpZiAocmVzcG9uc2UuZGF0YS5jYXJ0QW1vdW50KSB7XG4gICAgICAgICAgICBhZGRPclVwZGF0ZUNhcnRUb3RhbHMocmVzcG9uc2UuZGF0YS5jYXJ0QW1vdW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkZhaWx1cmUoKSB7XG4gICAgICAgIC8vIHN0dWJcbiAgICB9XG4gICAgZGlzYWJsZVN1YnNjcmlwdGlvblZhcmlhbnRzKCkge1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcuY3VzdG9tLXJhZGlvLS1zdWJzY3JpcHRpb24gaW5wdXQnKSk7XG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgZmllbGQucmVtb3ZlQXR0cmlidXRlKCdjaGVja2VkJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0Rm9ybSA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uY2FydCcpO1xuICAgICAgICBpZiAoYWRkVG9DYXJ0Rm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFqYXhBZGRUb0NhcnQgPSBuZXcgQWpheEFkZFRvQ2FydChhZGRUb0NhcnRGb3JtKTtcbiAgICAgICAgYWpheEFkZFRvQ2FydC5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuX0FqYXhBZGRUb0NhcnRfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0FqYXhBZGRUb0NhcnRfZGlzYWJsZUZpZWxkID0gZnVuY3Rpb24gX0FqYXhBZGRUb0NhcnRfZGlzYWJsZUZpZWxkKGZpZWxkKSB7XG4gICAgLy8gZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgIGZpZWxkLnRvZ2dsZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHRydWUpO1xuICAgIGZpZWxkLnJlbW92ZUF0dHJpYnV0ZSgnY2hlY2tlZCcpO1xufSwgX0FqYXhBZGRUb0NhcnRfZW5hYmxlRmllbGQgPSBmdW5jdGlvbiBfQWpheEFkZFRvQ2FydF9lbmFibGVGaWVsZChmaWVsZCkge1xuICAgIGZpZWxkLnJlbW92ZUF0dHJpYnV0ZSgnZGlzYWJsZWQnKTtcbiAgICBmaWVsZC5yZW1vdmVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKTtcbn07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgdG9UaXRsZUNhc2UgfSBmcm9tICcuLi91dGlsL3N0cmluZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGFuZ2VWYXJpYW50Q29sb3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnRzKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgbGFiZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kZXRhaWxfX3ZhcmlhdGlvbl9fbGFiZWwtLWNvbG9yJyk7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50cy5sZW5ndGggfHwgIWxhYmVsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdGV4dCA9IGxhYmVsLnRleHRDb250ZW50O1xuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSB0b1RpdGxlQ2FzZShyYWRpby52YWx1ZSk7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGxhYmVsLmlubmVyVGV4dCA9IGAke3RleHR9OiAke3ZhbHVlfWA7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChyYWRpby5jaGVja2VkKSB7XG4gICAgICAgICAgICAgICAgcmFkaW8uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCByYWRpb0J1dHRvbnMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwiYXR0cmlidXRlX3BhX2NvbG9yXCJdJykpO1xuICAgICAgICBpZiAoIXJhZGlvQnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDaGFuZ2VWYXJpYW50Q29sb3IocmFkaW9CdXR0b25zKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlVmFyaWFudFByaWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50cyA9IFtdO1xuICAgICAgICB0aGlzLnNhbGVQcmljZUVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWRldGFpbF9fcHJpY2UgaW5zIFtkYXRhLXByb2R1Y3QtcHJpY2VdJykpO1xuICAgICAgICBpZiAoIXRoaXMucmVndWxhclByaWNlRWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX3ByaWNlIFtkYXRhLXByb2R1Y3QtcHJpY2VdJykpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fcHJpY2UgZGVsIFtkYXRhLXByb2R1Y3QtcHJpY2VdJyk7XG4gICAgICAgIGlmICghdGhpcy5zYWxlUHJpY2VFbGVtZW50ICYmICF0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmVsZW1lbnRzWzBdLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBwcm9kdWN0X2lkIH0gPSBmb3JtLmRhdGFzZXQ7XG4gICAgICAgIGlmICghcHJvZHVjdF9pZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYXRpb25JZEVsZW1lbnQgPSBmb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidmFyaWF0aW9uX2lkXCJdJyk7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uX2lkID0gdmFyaWF0aW9uSWRFbGVtZW50ID09PSBudWxsIHx8IHZhcmlhdGlvbklkRWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogdmFyaWF0aW9uSWRFbGVtZW50LnZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghdmFyaWF0aW9uX2lkIHx8ICFwcm9kdWN0X2lkKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheGdldHZhcmlhbnRwcmljZScsXG4gICAgICAgICAgICAgICAgICAgIHByb2R1Y3RfaWQsXG4gICAgICAgICAgICAgICAgICAgIHZhcmlhdGlvbl9pZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSB8fCAoIXJlc3BvbnNlLmRhdGEuc2FsZVByaWNlICYmICFyZXNwb25zZS5kYXRhLnJlZ3VsYXJQcmljZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZGF0YScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlZ3VsYXJQcmljZSA9IE51bWJlcihyZXNwb25zZS5kYXRhLnJlZ3VsYXJQcmljZSkudG9GaXhlZCgyKTtcbiAgICAgICAgY29uc3Qgc2FsZVByaWNlID0gTnVtYmVyKHJlc3BvbnNlLmRhdGEuc2FsZVByaWNlKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50cy5sZW5ndGggJiYgcmVndWxhclByaWNlKSB7XG4gICAgICAgICAgICB0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnRzLmZvckVhY2goKGVsKSA9PiB7XG4gICAgICAgICAgICAgICAgZWwuaW5uZXJUZXh0ID0gcmVndWxhclByaWNlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2FsZVByaWNlRWxlbWVudCAmJiBzYWxlUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudC5pbm5lclRleHQgPSBzYWxlUHJpY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGV0YWlsX192YXJpYXRpb25zIGlucHV0W3R5cGU9XCJyYWRpbycpKTtcbiAgICAgICAgaWYgKCFyYWRpb0J1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2hhbmdlVmFyaWFudFByaWNlKHJhZGlvQnV0dG9ucyk7XG4gICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IHRodW1ibmFpbEFuY2hvcnMgPSBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX2dhbGxlcnlfX3RodW1ibmFpbHMgYScpKTtcbiAgICAgICAgdGh1bWJuYWlsQW5jaG9ycy5mb3JFYWNoKChhbmNob3IpID0+IHtcbiAgICAgICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBhbmNob3IuZGF0YXNldC50aHVtYm5haWxJZDtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbWFnZS1pZD1cIiR7aWR9XCJdYCk7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VQYXJlbnQgPSBpbWFnZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oaW1hZ2VQYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnbGkuYWN0aXZlJykpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kZXRhaWxfX2dhbGxlcnknKTtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBJbWFnZUdhbGxlcnkoZWxlbWVudCk7XG4gICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgRGF0YUxheWVyIGZyb20gJy4vY29tbW9uL0RhdGFMYXllcic7XG5pbXBvcnQgQWpheEFkZFRvQ2FydCBmcm9tICcuL2NvbXBvbmVudHMvQWpheEFkZFRvQ2FydCc7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSAnLi9jb21wb25lbnRzL0Ftb3VudFNlbGVjdG9yJztcbmltcG9ydCBDaGFuZ2VWYXJpYW50Q29sb3IgZnJvbSAnLi9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRDb2xvcic7XG5pbXBvcnQgQ2hhbmdlVmFyaWFudFByaWNlIGZyb20gJy4vY29tcG9uZW50cy9DaGFuZ2VWYXJpYW50UHJpY2UnO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuL2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5JztcbmltcG9ydCBNb2R1bGUgZnJvbSAnLi9Nb2R1bGUnO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm0nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbCBleHRlbmRzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIEFqYXhBZGRUb0NhcnQsXG4gICAgICAgICAgICBBbW91bnRTZWxlY3RvcixcbiAgICAgICAgICAgIEltYWdlR2FsbGVyeSxcbiAgICAgICAgICAgIENoYW5nZVZhcmlhbnRQcmljZSxcbiAgICAgICAgICAgIENoYW5nZVZhcmlhbnRDb2xvclxuICAgICAgICBdO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6ICd2aWV3X2l0ZW0nLFxuICAgICAgICAgICAgZWNvbW1lcmNlOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW2RhdGEtcHJvZHVjdF9pZF0nKTtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3REYXRhID0ge1xuICAgICAgICAgICAgaXRlbV9pZDogKGZvcm0gPT09IG51bGwgfHwgZm9ybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybS5kYXRhc2V0LnByb2R1Y3RfaWQpIHx8ICcnLFxuICAgICAgICAgICAgaXRlbV9uYW1lOiAoKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX190aXRsZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGV4dENvbnRlbnQpIHx8ICcnLFxuICAgICAgICAgICAgaXRlbV92YXJpYW50OiAodmFyaWF0aW9uRmllbGQgPT09IG51bGwgfHwgdmFyaWF0aW9uRmllbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhdGlvbkZpZWxkLnZhbHVlKSB8fCAnJyxcbiAgICAgICAgICAgIHByaWNlOiBOdW1iZXIoKF9jID0gKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvZHVjdC1wcmljZV0nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucmVwbGFjZSgnLCcsICcuJykpIHx8IDAsXG4gICAgICAgICAgICBpdGVtX2JyYW5kOiAnTGF2YW5kcsOpJ1xuICAgICAgICB9O1xuICAgICAgICBkYXRhLmVjb21tZXJjZS5pdGVtcy5wdXNoKHByb2R1Y3REYXRhKTtcbiAgICAgICAgRGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxufVxuKGZ1bmN0aW9uIHByb2R1Y3REZXRhaWxJbml0KCkge1xuICAgIGNvbnN0IHByb2R1Y3REZXRhaWwgPSBuZXcgUHJvZHVjdERldGFpbCgpO1xuICAgIHByb2R1Y3REZXRhaWwuaW5pdGlhbGl6ZSgpO1xufSkoKTtcbiIsImltcG9ydCBkaWFsb2dQb2x5ZmlsbCBmcm9tICdkaWFsb2ctcG9seWZpbGwnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IGRpc2FibGVCb2R5U2Nyb2xsLCBlbmFibGVCb2R5U2Nyb2xsIH0gZnJvbSAnLi4vdXRpbC9ib2R5JztcbmltcG9ydCB7IHRvQ2FtZWxDYXNlIH0gZnJvbSAnLi4vdXRpbC9zdHJpbmcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuICAgIHNldCBpc09wZW4odmFsdWUpIHtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBjYW1lbERhdGFBdHRyaWJ1dGUoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhQXR0cmlidXRlLnJlcGxhY2UoJ2RhdGEtJywgJycpO1xuICAgICAgICByZXR1cm4gdG9DYW1lbENhc2UodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgdHJhbnNpdGlvblRpbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uVGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb25UaW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lID0gdGhpcy5nZXRUcmFuc2l0aW9uVGltZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvblRpbWU7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMucG9seWZpbGxEaWFsb2coKTtcbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZV0nKSk7XG4gICAgICAgIGNsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm91dHNpZGVDbGljayhlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG91dHNpZGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRJbkRpYWxvZyA9IHJlY3QudG9wIDw9IGV2ZW50LmNsaWVudFkgJiZcbiAgICAgICAgICAgICAgICBldmVudC5jbGllbnRZIDw9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgICByZWN0LmxlZnQgPD0gZXZlbnQuY2xpZW50WCAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPD0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aDtcbiAgICAgICAgICAgIGlmICghY2xpY2tlZEluRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoYFske3RoaXMuZGF0YUF0dHJpYnV0ZX09XCIke3RoaXMuZWxlbWVudC5kYXRhc2V0W2Ake3RoaXMuY2FtZWxEYXRhQXR0cmlidXRlfWBdfVwiXWApKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzYWJsZUJvZHlTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNob3dNb2RhbCgpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5vcGVuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2xvc2VkKTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBlbmFibGVCb2R5U2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5vcGVuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuY2xvc2VkKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuICAgIGdldFRyYW5zaXRpb25UaW1lKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gKF9hID0gc3R5bGVzLnRyYW5zaXRpb25EdXJhdGlvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyc7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLmluZGV4T2YoJ21zJykgPiAtMVxuICAgICAgICAgICAgPyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgICAgIDogcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICogMTAwMDtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uIHx8IDQwMDtcbiAgICB9XG4gICAgcG9seWZpbGxEaWFsb2coKSB7XG4gICAgICAgIGRpYWxvZ1BvbHlmaWxsID09PSBudWxsIHx8IGRpYWxvZ1BvbHlmaWxsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaWFsb2dQb2x5ZmlsbC5yZWdpc3RlckRpYWxvZyh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX3NpZGVQYW5lbC5wY3NzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVQYW5lbCBleHRlbmRzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGF0YUF0dHJpYnV0ZSA9ICdkYXRhLXBhbmVsLW5hbWUnO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAgICAgICBvcGVuOiAnc2lkZS1wYW5lbC0tb3BlbmVkJyxcbiAgICAgICAgICAgIGNsb3NlZDogJ3NpZGUtcGFuZWwtLWNsb3NlZCcsXG4gICAgICAgICAgICBsZWZ0OiAnc2lkZS1wYW5lbC0tbGVmdCcsXG4gICAgICAgICAgICByaWdodDogJ3NpZGUtcGFuZWwtLXJpZ2h0J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgb3BlblNpZGVQYW5lbChwYW5lbElELCBlbGVtZW50ID0gbnVsbCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLW5hbWU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgIGlmIChwYW5lbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYW5lbC10ZW1wbGF0ZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGVsZW1lbnQuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gY2xvbmU7XG4gICAgICAgICAgICAoX2EgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLW5hbWU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdCgndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgcGFuZWwpO1xuICAgICAgICAgICAgaWYgKHBhbmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2lkZVBhbmVsSW5zdGFuY2UgPSBuZXcgU2lkZVBhbmVsKHBhbmVsKTtcbiAgICAgICAgICAgIHNpZGVQYW5lbEluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2dnbGVFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJyk7XG4gICAgICAgIHBhbmVsLmRpc3BhdGNoRXZlbnQodG9nZ2xlRXZlbnQpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGFuZWxdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFuZWxMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYW5lbExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNyZWF0aW9uRXZlbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZUNyZWF0aW9uRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxJRCA9IHRoaXMuZGF0YXNldC5wYW5lbCB8fCAnJztcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBsb2dnZWQgaW4gZm9sbG93IGxpbmtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCAmJlxuICAgICAgICAgICAgcGFuZWxJRCA9PT0gJ215LWFjY291bnQtcGFuZWwnICYmXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNpZGVQYW5lbC5vcGVuU2lkZVBhbmVsKHBhbmVsSUQsIHRoaXMpO1xuICAgIH1cbn1cbiIsImNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IHNjcm9sbFBvc2l0aW9uID0gMDtcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlQm9keVNjcm9sbCgpIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBib2R5RWxlbWVudC5zdHlsZS50b3AgPSBgLSR7c2Nyb2xsUG9zaXRpb259cHhgO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICdpbml0aWFsJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVCb2R5U2Nyb2xsKCkge1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb3NpdGlvbicpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnd2lkdGgnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFBvc2l0aW9uKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Njcm9sbC1iZWhhdmlvcicpO1xufVxuIiwiY29uc3QgZW5kcG9pbnRzID0ge1xuICAgIGFqYXg6IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYFxufTtcbmV4cG9ydCBkZWZhdWx0IGVuZHBvaW50cztcbiIsImV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG1hdGNoLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcd1xcUyovZywgKHR4dCkgPT4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpKTtcbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhGb3JtIGV4dGVuZHMgSFRNTEZvcm1FbGVtZW50IHtcbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN1Ym1pdEhhbmRsZXIpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCB0aGlzLnN1Ym1pdEhhbmRsZXIpO1xuICAgIH1cbiAgICBzdWJtaXRIYW5kbGVyKGV2ZW50KSB7IH1cbn1cbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9pbnN0YW5jZXMsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2VtYWlsRmllbGQsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2Zvcm0sIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2dldFByb2R1Y3RTaXplLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9nZXRQcm9kdWN0QW1vdW50LCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9vblN1Y2Nlc3MsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX29uRmFpbHVyZTtcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi4vY29tcG9uZW50cy9GaWVsZFZhbGlkYXRpb24nO1xuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuLi91dGlsL2VuZHBvaW50cyc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCBBamF4Rm9ybSBmcm9tICcuL0FqYXhGb3JtJztcbmNsYXNzIFByb2R1Y3RCYWNrSW5TdG9ja0Zvcm0gZXh0ZW5kcyBBamF4Rm9ybSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2VtYWlsRmllbGQuc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9XCJlbWFpbFwiXScpKTtcbiAgICAgICAgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZm9ybS5zZXQodGhpcywgbnVsbCk7XG4gICAgfVxuICAgIGdldCBmb3JtKCkge1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZm9ybSwgXCJmXCIpKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2Zvcm0sIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy52YXJpYXRpb25zX2Zvcm0nKSwgXCJmXCIpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2Zvcm0sIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0IHN1Y2Nlc3NNZXNzYWdlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5kYXRhc2V0LnN1Y2Nlc3MgfHwgXCJZb3UncmUgaW4hIFdlJ2xsIGxldCB5b3Uga25vdyB3aGVuIGl0J3MgYmFjay5cIjtcbiAgICB9XG4gICAgc3VibWl0SGFuZGxlcihldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2VtYWlsRmllbGQsIFwiZlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuICAgICAgICBjb25zdCBlbWFpbCA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgaWYgKCFlbWFpbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4cHJvZHVjdGJhY2tpbnN0b2NrZW1haWwnLFxuICAgICAgICAgICAgZW1haWw6IGVtYWlsLFxuICAgICAgICAgICAgc2l6ZTogKF9iID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9nZXRQcm9kdWN0U2l6ZSkuY2FsbCh0aGlzKSkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJycsXG4gICAgICAgICAgICBhbW91bnQ6IChfYyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1faW5zdGFuY2VzLCBcIm1cIiwgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZ2V0UHJvZHVjdEFtb3VudCkuY2FsbCh0aGlzKSkgIT09IG51bGwgJiYgX2MgIT09IHZvaWQgMCA/IF9jIDogJydcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24ucmVtb3ZlRXJyb3JUZXh0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZW1haWxGaWVsZCwgXCJmXCIpKTtcbiAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIGVuZHBvaW50cy5hamF4LCBudWxsLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX29uU3VjY2VzcykuYmluZCh0aGlzKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9vbkZhaWx1cmUpLmJpbmQodGhpcyksIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgIH1cbn1cbl9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2VtYWlsRmllbGQgPSBuZXcgV2Vha01hcCgpLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9mb3JtID0gbmV3IFdlYWtNYXAoKSwgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1faW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZ2V0UHJvZHVjdFNpemUgPSBmdW5jdGlvbiBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9nZXRQcm9kdWN0U2l6ZSgpIHtcbiAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgY29uc3Qgc2l6ZSA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImF0dHJpYnV0ZV9wYV9zaXplXCJdOmNoZWNrZWQnKTtcbiAgICBpZiAoIXNpemUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBzaXplLnZhbHVlO1xufSwgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZ2V0UHJvZHVjdEFtb3VudCA9IGZ1bmN0aW9uIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2dldFByb2R1Y3RBbW91bnQoKSB7XG4gICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIGNvbnN0IHNpemUgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJhdHRyaWJ1dGVfcGFfYW1vdW50XCJdOmNoZWNrZWQnKTtcbiAgICBpZiAoIXNpemUpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBzaXplLnZhbHVlO1xufSwgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fb25TdWNjZXNzID0gZnVuY3Rpb24gX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fb25TdWNjZXNzKCkge1xuICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9lbWFpbEZpZWxkLCBcImZcIikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kU3VjY2Vzc1RleHQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9lbWFpbEZpZWxkLCBcImZcIiksIHRoaXMuc3VjY2Vzc01lc3NhZ2UpO1xufSwgX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fb25GYWlsdXJlID0gZnVuY3Rpb24gX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fb25GYWlsdXJlKGVycm9yKSB7XG4gICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2VtYWlsRmllbGQsIFwiZlwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIEZpZWxkVmFsaWRhdGlvbi5hcHBlbmRTdWNjZXNzVGV4dChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2VtYWlsRmllbGQsIFwiZlwiKSwgdGhpcy5zdWNjZXNzTWVzc2FnZSk7XG4gICAgdGhyb3cgZXJyb3I7XG59O1xud2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgncHJvZHVjdC1iYWNrLWluLXN0b2NrLWZvcm0nLCBQcm9kdWN0QmFja0luU3RvY2tGb3JtLCB7XG4gICAgZXh0ZW5kczogJ2Zvcm0nXG59KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImV2ZW50RW1pdHRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXplQ29tcG9uZW50cyIsIm9uIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJjb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsIm9uSW5pdCIsIkRhdGFMYXllciIsImRhdGFMYXllciIsIndpbmRvdyIsInB1c2giLCJkYXRhIiwiZWNvbW1lcmNlIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiZiIsIlR5cGVFcnJvciIsImhhcyIsImNhbGwiLCJ2YWx1ZSIsImdldCIsIl9BamF4QWRkVG9DYXJ0X2luc3RhbmNlcyIsIl9BamF4QWRkVG9DYXJ0X2Rpc2FibGVGaWVsZCIsIl9BamF4QWRkVG9DYXJ0X2VuYWJsZUZpZWxkIiwiQ2FydCIsIkNvbXBvbmVudCIsIlNpZGVQYW5lbCIsImFkZE9yVXBkYXRlQ2FydFRvdGFscyIsInNlbmRBamF4UmVxdWVzdCIsIkFqYXhBZGRUb0NhcnQiLCJmb3JtIiwiYWRkIiwidmFyaWF0aW9uRGF0YSIsImFqYXhFbmRwb2ludCIsImxvY2F0aW9uIiwib3JpZ2luIiwib3V0T2ZTdG9ja0Zvcm0iLCJnZXRFbGVtZW50QnlJZCIsImJ1dHRvbiIsInF1ZXJ5U2VsZWN0b3IiLCJ2YXJpYXRpb25GaWVsZHMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlIiwiY3VycmVudFNpemVOYW1lIiwiY3VycmVudFNpemVWYWx1ZSIsInZhcmlhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYW1lIiwiaGFuZGxlQWRkVG9DYXJ0Q2xpY2siLCJiaW5kIiwiY3VycmVudE9wdGlvbnMiLCJpbmRleCIsImxlbmd0aCIsInZhcmlhdGlvbklEIiwiZmluZE1hdGNoaW5nVmFyaWFudCIsImRpc2FibGVPdXRPZlN0b2NrVmFyaWFudHMiLCJzZWxlY3RlZFZhcmlhdGlvbiIsImZpbmQiLCJ2YXJpYXRpb25faWQiLCJkaXNhYmxlZENoZWNrZXIiLCJzZWxlY3RGaXJzdEF2YWlsYWJsZVZhcmlhbnQiLCJzZXRUaW1lb3V0IiwiZGlzYWJsZVN1YnNjcmlwdGlvblZhcmlhbnRzIiwiaXNfaW5fc3RvY2siLCJkaXNhYmxlQnV0dG9uT25PdXRPZlN0b2NrIiwiZW5hYmxlQnV0dG9uT25PdXRPZlN0b2NrIiwiZGlzYWJsZUJ1dHRvbklmT3V0T2ZTdG9jayIsInNldEZvcm1JbnZhbGlkIiwialF1ZXJ5IiwidHJpZ2dlciIsImZpbmRNYXRjaGluZ1ZhcmlhbnREYXRhIiwicHJvZHVjdF9pZCIsInJldHVyblZhbHVlIiwiZmllbGQiLCJkaXNhYmxlZCIsIm5hbWVzIiwiU2V0IiwiZmllbGRzIiwic2VsZWN0ZWRGaWVsZCIsImNoZWNrZWQiLCJoYXNBdHRyaWJ1dGUiLCJpc0luU3RvY2siLCJfYSIsImlzRGlzYWJsZWQiLCJsYWJlbCIsImRhdGFzZXQiLCJvdXRPZlN0b2NrIiwicmVtb3ZlQXR0cmlidXRlIiwiaW5TdG9jayIsInRvZ2dsZUF0dHJpYnV0ZSIsImF0dHJpYnV0ZXMiLCJFcnJvciIsIm1hdGNoIiwicHJvZHVjdF92YXJpYXRpb25zIiwiSlNPTiIsInBhcnNlIiwia2V5IiwiT2JqZWN0IiwiZW50cmllcyIsInVuZGVmaW5lZCIsImV2ZW50IiwiX2IiLCJwcmV2ZW50RGVmYXVsdCIsInByb2R1Y3RJZEVsZW1lbnQiLCJ2YXJpYXRpb25JZEVsZW1lbnQiLCJOdW1iZXIiLCJmb3JtSXNWYWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJxdWFudGl0eSIsImFjdGlvbiIsInRvU3RyaW5nIiwic3Vic2NyaXB0aW9uIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsIm5hbWVGaWVsZCIsInN1YnNjcmlwdGlvblRlcm0iLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJvcGVuU2lkZVBhbmVsIiwidXBkYXRlQ2FydCIsImNhcnRBbW91bnQiLCJhZGRUb0NhcnRGb3JtIiwiYWpheEFkZFRvQ2FydCIsIldlYWtTZXQiLCJ0b1RpdGxlQ2FzZSIsIkNoYW5nZVZhcmlhbnRDb2xvciIsImVsZW1lbnRzIiwidGV4dCIsInRleHRDb250ZW50IiwicmFkaW8iLCJpbm5lclRleHQiLCJyYWRpb0J1dHRvbnMiLCJpbnN0YW5jZSIsIkNoYW5nZVZhcmlhbnRQcmljZSIsInJlZ3VsYXJQcmljZUVsZW1lbnRzIiwic2FsZVByaWNlRWxlbWVudCIsImNsb3Nlc3QiLCJzYWxlUHJpY2UiLCJyZWd1bGFyUHJpY2UiLCJ0b0ZpeGVkIiwiZWwiLCJJbWFnZUdhbGxlcnkiLCJ0aHVtYm5haWxBbmNob3JzIiwiYW5jaG9yIiwiaWQiLCJ0aHVtYm5haWxJZCIsImltYWdlIiwiaW1hZ2VQYXJlbnQiLCJwYXJlbnRFbGVtZW50IiwiY2xhc3NMaXN0IiwicmVtb3ZlIiwiQW1vdW50U2VsZWN0b3IiLCJQcm9kdWN0RGV0YWlsIiwiYXJndW1lbnRzIiwiX2MiLCJpdGVtcyIsInZhcmlhdGlvbkZpZWxkIiwicHJvZHVjdERhdGEiLCJpdGVtX2lkIiwiaXRlbV9uYW1lIiwiaXRlbV92YXJpYW50IiwicHJpY2UiLCJyZXBsYWNlIiwiaXRlbV9icmFuZCIsInByb2R1Y3REZXRhaWxJbml0IiwicHJvZHVjdERldGFpbCIsImRpYWxvZ1BvbHlmaWxsIiwiZGlzYWJsZUJvZHlTY3JvbGwiLCJlbmFibGVCb2R5U2Nyb2xsIiwidG9DYW1lbENhc2UiLCJEaWFsb2ciLCJfaXNPcGVuIiwiX3RyYW5zaXRpb25UaW1lIiwiaXNPcGVuIiwiY2FtZWxEYXRhQXR0cmlidXRlIiwiZGF0YUF0dHJpYnV0ZSIsInRyYW5zaXRpb25UaW1lIiwiZ2V0VHJhbnNpdGlvblRpbWUiLCJwb2x5ZmlsbERpYWxvZyIsInNldEV2ZW50TGlzdGVuZXJzIiwib3BlbiIsInRvZ2dsZSIsImNsb3NlQnV0dG9ucyIsImNsb3NlIiwiZSIsIm91dHNpZGVDbGljayIsInRhcmdldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGlja2VkSW5EaWFsb2ciLCJ0b3AiLCJjbGllbnRZIiwiaGVpZ2h0IiwibGVmdCIsImNsaWVudFgiLCJ3aWR0aCIsInNob3dNb2RhbCIsImNsYXNzZXMiLCJjbG9zZWQiLCJzdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZHVyYXRpb24iLCJpbmRleE9mIiwicGFyc2VGbG9hdCIsInJlZ2lzdGVyRGlhbG9nIiwicmlnaHQiLCJwYW5lbElEIiwicGFuZWwiLCJ0ZW1wbGF0ZSIsIkhUTUxBbmNob3JFbGVtZW50IiwiaHJlZiIsImNsb25lIiwiY2xvbmVOb2RlIiwiY29udGVudCIsImFwcGVuZENoaWxkIiwiZW1pdCIsInNpZGVQYW5lbEluc3RhbmNlIiwidG9nZ2xlRXZlbnQiLCJDdXN0b21FdmVudCIsInBhbmVsTGlua3MiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQ3JlYXRpb25FdmVudCIsImJvZHkiLCJjb250YWlucyIsImJvZHlFbGVtZW50Iiwic2Nyb2xsUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsInN0eWxlIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEJlaGF2aW9yIiwicmVtb3ZlUHJvcGVydHkiLCJzY3JvbGxUbyIsImVuZHBvaW50cyIsImFqYXgiLCJzdHIiLCJjaHIiLCJ0b1VwcGVyQ2FzZSIsInR4dCIsImNoYXJBdCIsInN1YnN0ciIsInRvTG93ZXJDYXNlIiwiQWpheEZvcm0iLCJIVE1MRm9ybUVsZW1lbnQiLCJjb25uZWN0ZWRDYWxsYmFjayIsInN1Ym1pdEhhbmRsZXIiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJzZXQiLCJfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9pbnN0YW5jZXMiLCJfUHJvZHVjdEJhY2tJblN0b2NrRm9ybV9lbWFpbEZpZWxkIiwiX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZm9ybSIsIl9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX2dldFByb2R1Y3RTaXplIiwiX1Byb2R1Y3RCYWNrSW5TdG9ja0Zvcm1fZ2V0UHJvZHVjdEFtb3VudCIsIl9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX29uU3VjY2VzcyIsIl9Qcm9kdWN0QmFja0luU3RvY2tGb3JtX29uRmFpbHVyZSIsIkZpZWxkVmFsaWRhdGlvbiIsIlByb2R1Y3RCYWNrSW5TdG9ja0Zvcm0iLCJzdWNjZXNzTWVzc2FnZSIsImVtYWlsIiwic2l6ZSIsImFtb3VudCIsInN1Ym1pdEJ1dHRvbiIsInJlbW92ZUVycm9yVGV4dCIsIldlYWtNYXAiLCJhcHBlbmRTdWNjZXNzVGV4dCIsImVycm9yIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJleHRlbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==