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
/* eslint-disable camelcase */





class AjaxAddToCart extends _common_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(form) {
    super();
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

  onFailure() {// const form: HTMLFormElement | null = this.button.closest('form');
    // if (form === null) {
    //     return;
    // }
    // form.submit();
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
    this.regularPriceElement = null;
    this.salePriceElement = null;
    this.elements = elements;
  }

  initialize() {
    this.regularPriceElement = document.querySelector('.product-detail__price ins [data-product-price]') || document.querySelector('.product-detail__price [data-product-price]');
    this.salePriceElement = document.querySelector('.product-detail__price del [data-product-price]');

    if (!this.salePriceElement && !this.regularPriceElement) {
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

    if (this.regularPriceElement && regularPrice) {
      this.regularPriceElement.innerText = regularPrice;
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Ly4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21tb24vRGF0YUxheWVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheEFkZFRvQ2FydC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRDb2xvci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRQcmljZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ltYWdlR2FsbGVyeS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9wcm9kdWN0RGV0YWlsLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9TaWRlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9ib2R5LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvc3RyaW5nLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19zaWRlUGFuZWwucGNzcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCAnLi9jYXJ0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb21wb25lbnRzKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29tcG9uZW50Lm9uSW5pdChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNsYXNzIERhdGFMYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciA/IHdpbmRvdy5kYXRhTGF5ZXIgOiBbXTtcbiAgICB9XG4gICAgcHVzaChkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goeyBlY29tbWVyY2U6IG51bGwgfSk7IC8vIENsZWFyIHRoZSBwcmV2aW91cyBlY29tbWVyY2Ugb2JqZWN0LlxuICAgICAgICB0aGlzLmRhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgIH1cbn1cbmV4cG9ydCB7IERhdGFMYXllciB9O1xuZXhwb3J0IGRlZmF1bHQgbmV3IERhdGFMYXllcigpO1xuIiwiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgQ2FydCBmcm9tICcuLi9jYXJ0JztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgU2lkZVBhbmVsIGZyb20gJy4uL3VpL1NpZGVQYW5lbCc7XG5pbXBvcnQgYWRkT3JVcGRhdGVDYXJ0VG90YWxzIGZyb20gJy4uL3V0aWwvY2FydCc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhBZGRUb0NhcnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhID0gW107XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICB0aGlzLmJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bbmFtZT1cImFkZC10by1jYXJ0XCJdJyk7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGV0YWlsX192YXJpYXRpb25zIGlucHV0JykpO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZSgpO1xuICAgICAgICBjb25zdCBjdXJyZW50U2l6ZU5hbWUgPSAnYXR0cmlidXRlX3BhX3NpemUnO1xuICAgICAgICBjb25zdCBjdXJyZW50U2l6ZVZhbHVlID0gdGhpcy5mb3JtW2N1cnJlbnRTaXplTmFtZV0udmFsdWU7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlKGN1cnJlbnRTaXplTmFtZSwgY3VycmVudFNpemVWYWx1ZSk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgdmFyaWF0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZSh2YXJpYXRpb24ubmFtZSwgdmFyaWF0aW9uLnZhbHVlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5idXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUFkZFRvQ2FydENsaWNrLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBoYW5kbGVDaGFuZ2VWYXJpYXRpb25BdHRyaWJ1dGUobmFtZSA9ICcnLCB2YWx1ZSA9ICcnKSB7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPcHRpb25zID0ge307XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLnZhcmlhdGlvbkZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbiA9IHRoaXMudmFyaWF0aW9uRmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHsgbmFtZSB9ID0gdmFyaWF0aW9uO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm1bbmFtZV0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9uc1tuYW1lXSA9IHRoaXMuZm9ybVtuYW1lXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YXJpYXRpb25JRCA9IHRoaXMuZmluZE1hdGNoaW5nVmFyaWFudChjdXJyZW50T3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZGlzYWJsZU5vbkV4aXN0aW5nVmFyaWFudHMobmFtZSwgdmFsdWUpO1xuICAgICAgICBpZiAoIXZhcmlhdGlvbklEKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZvcm1JbnZhbGlkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtLnZhcmlhdGlvbl9pZC52YWx1ZSA9IHZhcmlhdGlvbklEO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICh3aW5kb3cualF1ZXJ5KSB7XG4gICAgICAgICAgICB3aW5kb3dcbiAgICAgICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICAgICAgLmpRdWVyeSh0aGlzLmZvcm0pXG4gICAgICAgICAgICAgICAgLnRyaWdnZXIoJ3Nob3dfdmFyaWF0aW9uJywgW3RoaXMuZmluZE1hdGNoaW5nVmFyaWFudERhdGEoY3VycmVudE9wdGlvbnMpXSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc2V0Rm9ybUludmFsaWQoKSB7XG4gICAgICAgIHRoaXMuZm9ybS5wcm9kdWN0X2lkLnZhbHVlID0gJyc7XG4gICAgICAgIHRoaXMuZm9ybS52YXJpYXRpb25faWQudmFsdWUgPSAnJztcbiAgICB9XG4gICAgZGlzYWJsZU5vbkV4aXN0aW5nVmFyaWFudHMobmFtZSA9ICcnLCB2YWx1ZSA9ICcnKSB7XG4gICAgICAgIGlmIChuYW1lID09PSAnYXR0cmlidXRlX3BhX2Ftb3VudCcpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobmFtZSAmJiB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQubmFtZSAhPT0gbmFtZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXNhYmxlZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhLmZvckVhY2goKHZhcmlhdGlvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgeyBhdHRyaWJ1dGVzIH0gPSB2YXJpYXRpb247XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBhdHRyaWJ1dGVzW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gZmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbmRNYXRjaGluZ1ZhcmlhbnQoY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHZhcmlhdGlvbklEID0gbnVsbDtcbiAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5mb3JtLmRhdGFzZXQucHJvZHVjdF92YXJpYXRpb25zO1xuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhcmlhdGlvbklEID0gdmFyaWF0aW9uLnZhcmlhdGlvbl9pZDtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YXJpYXRpb25JRDtcbiAgICB9XG4gICAgZmluZE1hdGNoaW5nVmFyaWFudERhdGEoY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHJldHVyblZhbHVlO1xuICAgICAgICBpZiAoIXRoaXMudmFyaWF0aW9uRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZvcm0uZGF0YXNldC5wcm9kdWN0X3ZhcmlhdGlvbnM7XG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25EYXRhID0gSlNPTi5wYXJzZShkYXRhKTtcbiAgICAgICAgICAgIGlmICghdGhpcy52YXJpYXRpb25EYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IGF0dHJpYnV0ZXMgfSA9IHZhcmlhdGlvbjtcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVyblZhbHVlID0gdmFyaWF0aW9uO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJldHVyblZhbHVlO1xuICAgIH1cbiAgICBoYW5kbGVBZGRUb0NhcnRDbGljayhldmVudCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFyaWF0aW9uX2lkID0gMDtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkRWxlbWVudCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScpO1xuICAgICAgICBjb25zdCB2YXJpYXRpb25JZEVsZW1lbnQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgaWYgKHZhcmlhdGlvbklkRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyaWF0aW9uX2lkID0gTnVtYmVyKHZhcmlhdGlvbklkRWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvcm1Jc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZhbGlkYXRlJykpO1xuICAgICAgICAgICAgaWYgKCFmaWVsZC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgICAgIGZvcm1Jc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWZvcm1Jc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2R1Y3QgYWRkIGZvcm0gaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBOdW1iZXIoKF9hID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWFudGl0eVwiXScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpIHx8IDE7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4YWRkdG9jYXJ0JyxcbiAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHRoaXMuYnV0dG9uLnZhbHVlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICB2YXJpYXRpb25faWQ6IHZhcmlhdGlvbl9pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgc3Vic2NyaXB0aW9uOiAnJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBjb25zdCBuYW1lRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignI29uZV90aW1lX3B1cmNoYXNlJyk7XG4gICAgICAgIGNvbnN0IG5hbWUgPSBuYW1lRmllbGQgPT09IG51bGwgfHwgbmFtZUZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lRmllbGQubmFtZTtcbiAgICAgICAgY29uc3Qgc3Vic2NyaXB0aW9uID0gIShuYW1lRmllbGQgPT09IG51bGwgfHwgbmFtZUZpZWxkID09PSB2b2lkIDAgPyB2b2lkIDAgOiBuYW1lRmllbGQuY2hlY2tlZCk7XG4gICAgICAgIGNvbnN0IHN1YnNjcmlwdGlvblRlcm0gPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdzdWJzY3JpcHRpb24tdGVybScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgIGlmIChzdWJzY3JpcHRpb24pIHtcbiAgICAgICAgICAgIGRhdGEuc3Vic2NyaXB0aW9uID0gc3Vic2NyaXB0aW9uVGVybTtcbiAgICAgICAgfVxuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIHVuZGVmaW5lZCwgdGhpcy5idXR0b24pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIGlzIHdyb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwoJ2NhcnQtcGFuZWwnKTtcbiAgICAgICAgQ2FydC51cGRhdGVDYXJ0KCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNhcnRBbW91bnQpIHtcbiAgICAgICAgICAgIGFkZE9yVXBkYXRlQ2FydFRvdGFscyhyZXNwb25zZS5kYXRhLmNhcnRBbW91bnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uRmFpbHVyZSgpIHtcbiAgICAgICAgLy8gY29uc3QgZm9ybTogSFRNTEZvcm1FbGVtZW50IHwgbnVsbCA9IHRoaXMuYnV0dG9uLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgLy8gaWYgKGZvcm0gPT09IG51bGwpIHtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICAvLyBmb3JtLnN1Ym1pdCgpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0Rm9ybSA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uY2FydCcpO1xuICAgICAgICBpZiAoYWRkVG9DYXJ0Rm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFqYXhBZGRUb0NhcnQgPSBuZXcgQWpheEFkZFRvQ2FydChhZGRUb0NhcnRGb3JtKTtcbiAgICAgICAgYWpheEFkZFRvQ2FydC5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IHRvVGl0bGVDYXNlIH0gZnJvbSAnLi4vdXRpbC9zdHJpbmcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlVmFyaWFudENvbG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX192YXJpYXRpb25fX2xhYmVsLS1jb2xvcicpO1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudHMubGVuZ3RoIHx8ICFsYWJlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRleHQgPSBsYWJlbC50ZXh0Q29udGVudDtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdG9UaXRsZUNhc2UocmFkaW8udmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBgJHt0ZXh0fTogJHt2YWx1ZX1gO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmFkaW8uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJhZGlvLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cImF0dHJpYnV0ZV9wYV9jb2xvclwiXScpKTtcbiAgICAgICAgaWYgKCFyYWRpb0J1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2hhbmdlVmFyaWFudENvbG9yKHJhZGlvQnV0dG9ucyk7XG4gICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCIvKiBlc2xpbnQtZGlzYWJsZSBjYW1lbGNhc2UgKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZVZhcmlhbnRQcmljZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50ID1cbiAgICAgICAgICAgIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fcHJpY2UgaW5zIFtkYXRhLXByb2R1Y3QtcHJpY2VdJykgfHxcbiAgICAgICAgICAgICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kZXRhaWxfX3ByaWNlIFtkYXRhLXByb2R1Y3QtcHJpY2VdJyk7XG4gICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fcHJpY2UgZGVsIFtkYXRhLXByb2R1Y3QtcHJpY2VdJyk7XG4gICAgICAgIGlmICghdGhpcy5zYWxlUHJpY2VFbGVtZW50ICYmICF0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5lbGVtZW50c1swXS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHsgcHJvZHVjdF9pZCB9ID0gZm9ybS5kYXRhc2V0O1xuICAgICAgICBpZiAoIXByb2R1Y3RfaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uSWRFbGVtZW50ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbl9pZCA9IHZhcmlhdGlvbklkRWxlbWVudCA9PT0gbnVsbCB8fCB2YXJpYXRpb25JZEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhdGlvbklkRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhcmlhdGlvbl9pZCB8fCAhcHJvZHVjdF9pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhnZXR2YXJpYW50cHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2lkLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25faWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEgfHwgKCFyZXNwb25zZS5kYXRhLnNhbGVQcmljZSAmJiAhcmVzcG9uc2UuZGF0YS5yZWd1bGFyUHJpY2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRhdGEnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWd1bGFyUHJpY2UgPSBOdW1iZXIocmVzcG9uc2UuZGF0YS5yZWd1bGFyUHJpY2UpLnRvRml4ZWQoMik7XG4gICAgICAgIGNvbnN0IHNhbGVQcmljZSA9IE51bWJlcihyZXNwb25zZS5kYXRhLnNhbGVQcmljZSkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHRoaXMucmVndWxhclByaWNlRWxlbWVudCAmJiByZWd1bGFyUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudC5pbm5lclRleHQgPSByZWd1bGFyUHJpY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2FsZVByaWNlRWxlbWVudCAmJiBzYWxlUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudC5pbm5lclRleHQgPSBzYWxlUHJpY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGV0YWlsX192YXJpYXRpb25zIGlucHV0W3R5cGU9XCJyYWRpbycpKTtcbiAgICAgICAgaWYgKCFyYWRpb0J1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2hhbmdlVmFyaWFudFByaWNlKHJhZGlvQnV0dG9ucyk7XG4gICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW1hZ2VHYWxsZXJ5IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IHRodW1ibmFpbEFuY2hvcnMgPSBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX2dhbGxlcnlfX3RodW1ibmFpbHMgYScpKTtcbiAgICAgICAgdGh1bWJuYWlsQW5jaG9ycy5mb3JFYWNoKChhbmNob3IpID0+IHtcbiAgICAgICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgaWQgPSBhbmNob3IuZGF0YXNldC50aHVtYm5haWxJZDtcbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1pbWFnZS1pZD1cIiR7aWR9XCJdYCk7XG4gICAgICAgICAgICAgICAgaWYgKGltYWdlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2VQYXJlbnQgPSBpbWFnZS5wYXJlbnRFbGVtZW50O1xuICAgICAgICAgICAgICAgIEFycmF5LmZyb20oaW1hZ2VQYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnbGkuYWN0aXZlJykpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICBpbWFnZS5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kZXRhaWxfX2dhbGxlcnknKTtcbiAgICAgICAgaWYgKGVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBJbWFnZUdhbGxlcnkoZWxlbWVudCk7XG4gICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQWpheEFkZFRvQ2FydCBmcm9tICcuL2NvbXBvbmVudHMvQWpheEFkZFRvQ2FydCc7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSAnLi9jb21wb25lbnRzL0Ftb3VudFNlbGVjdG9yJztcbmltcG9ydCBDaGFuZ2VWYXJpYW50Q29sb3IgZnJvbSAnLi9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRDb2xvcic7XG5pbXBvcnQgQ2hhbmdlVmFyaWFudFByaWNlIGZyb20gJy4vY29tcG9uZW50cy9DaGFuZ2VWYXJpYW50UHJpY2UnO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tICcuL2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5JztcbmltcG9ydCBNb2R1bGUgZnJvbSAnLi9Nb2R1bGUnO1xuaW1wb3J0IERhdGFMYXllciBmcm9tICcuL2NvbW1vbi9EYXRhTGF5ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUHJvZHVjdERldGFpbCBleHRlbmRzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIEFqYXhBZGRUb0NhcnQsXG4gICAgICAgICAgICBBbW91bnRTZWxlY3RvcixcbiAgICAgICAgICAgIEltYWdlR2FsbGVyeSxcbiAgICAgICAgICAgIENoYW5nZVZhcmlhbnRQcmljZSxcbiAgICAgICAgICAgIENoYW5nZVZhcmlhbnRDb2xvclxuICAgICAgICBdO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6ICd2aWV3X2l0ZW0nLFxuICAgICAgICAgICAgZWNvbW1lcmNlOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW2RhdGEtcHJvZHVjdF9pZF0nKTtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3REYXRhID0ge1xuICAgICAgICAgICAgaXRlbV9pZDogKGZvcm0gPT09IG51bGwgfHwgZm9ybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybS5kYXRhc2V0LnByb2R1Y3RfaWQpIHx8ICcnLFxuICAgICAgICAgICAgaXRlbV9uYW1lOiAoKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX190aXRsZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGV4dENvbnRlbnQpIHx8ICcnLFxuICAgICAgICAgICAgaXRlbV92YXJpYW50OiAodmFyaWF0aW9uRmllbGQgPT09IG51bGwgfHwgdmFyaWF0aW9uRmllbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhdGlvbkZpZWxkLnZhbHVlKSB8fCAnJyxcbiAgICAgICAgICAgIHByaWNlOiBOdW1iZXIoKF9jID0gKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvZHVjdC1wcmljZV0nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucmVwbGFjZSgnLCcsICcuJykpIHx8IDAsXG4gICAgICAgICAgICBpdGVtX2JyYW5kOiAnTGF2YW5kcsOpJ1xuICAgICAgICB9O1xuICAgICAgICBkYXRhLmVjb21tZXJjZS5pdGVtcy5wdXNoKHByb2R1Y3REYXRhKTtcbiAgICAgICAgRGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxufVxuKGZ1bmN0aW9uIHByb2R1Y3REZXRhaWxJbml0KCkge1xuICAgIGNvbnN0IHByb2R1Y3REZXRhaWwgPSBuZXcgUHJvZHVjdERldGFpbCgpO1xuICAgIHByb2R1Y3REZXRhaWwuaW5pdGlhbGl6ZSgpO1xufSkoKTtcbiIsImltcG9ydCBkaWFsb2dQb2x5ZmlsbCBmcm9tICdkaWFsb2ctcG9seWZpbGwnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IGRpc2FibGVCb2R5U2Nyb2xsLCBlbmFibGVCb2R5U2Nyb2xsIH0gZnJvbSAnLi4vdXRpbC9ib2R5JztcbmltcG9ydCB7IHRvQ2FtZWxDYXNlIH0gZnJvbSAnLi4vdXRpbC9zdHJpbmcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuICAgIHNldCBpc09wZW4odmFsdWUpIHtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBjYW1lbERhdGFBdHRyaWJ1dGUoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhQXR0cmlidXRlLnJlcGxhY2UoJ2RhdGEtJywgJycpO1xuICAgICAgICByZXR1cm4gdG9DYW1lbENhc2UodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgdHJhbnNpdGlvblRpbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uVGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb25UaW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lID0gdGhpcy5nZXRUcmFuc2l0aW9uVGltZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvblRpbWU7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMucG9seWZpbGxEaWFsb2coKTtcbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZV0nKSk7XG4gICAgICAgIGNsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm91dHNpZGVDbGljayhlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG91dHNpZGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRJbkRpYWxvZyA9IHJlY3QudG9wIDw9IGV2ZW50LmNsaWVudFkgJiZcbiAgICAgICAgICAgICAgICBldmVudC5jbGllbnRZIDw9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgICByZWN0LmxlZnQgPD0gZXZlbnQuY2xpZW50WCAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPD0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aDtcbiAgICAgICAgICAgIGlmICghY2xpY2tlZEluRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoYFske3RoaXMuZGF0YUF0dHJpYnV0ZX09XCIke3RoaXMuZWxlbWVudC5kYXRhc2V0W2Ake3RoaXMuY2FtZWxEYXRhQXR0cmlidXRlfWBdfVwiXWApKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzYWJsZUJvZHlTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNob3dNb2RhbCgpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5vcGVuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2xvc2VkKTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBlbmFibGVCb2R5U2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5vcGVuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuY2xvc2VkKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuICAgIGdldFRyYW5zaXRpb25UaW1lKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gKF9hID0gc3R5bGVzLnRyYW5zaXRpb25EdXJhdGlvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyc7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLmluZGV4T2YoJ21zJykgPiAtMVxuICAgICAgICAgICAgPyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgICAgIDogcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICogMTAwMDtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uIHx8IDQwMDtcbiAgICB9XG4gICAgcG9seWZpbGxEaWFsb2coKSB7XG4gICAgICAgIGRpYWxvZ1BvbHlmaWxsID09PSBudWxsIHx8IGRpYWxvZ1BvbHlmaWxsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaWFsb2dQb2x5ZmlsbC5yZWdpc3RlckRpYWxvZyh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX3NpZGVQYW5lbC5wY3NzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVQYW5lbCBleHRlbmRzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGF0YUF0dHJpYnV0ZSA9ICdkYXRhLXBhbmVsLW5hbWUnO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAgICAgICBvcGVuOiAnc2lkZS1wYW5lbC0tb3BlbmVkJyxcbiAgICAgICAgICAgIGNsb3NlZDogJ3NpZGUtcGFuZWwtLWNsb3NlZCcsXG4gICAgICAgICAgICBsZWZ0OiAnc2lkZS1wYW5lbC0tbGVmdCcsXG4gICAgICAgICAgICByaWdodDogJ3NpZGUtcGFuZWwtLXJpZ2h0J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgb3BlblNpZGVQYW5lbChwYW5lbElELCBlbGVtZW50ID0gbnVsbCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLW5hbWU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgIGlmIChwYW5lbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYW5lbC10ZW1wbGF0ZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGVsZW1lbnQuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gY2xvbmU7XG4gICAgICAgICAgICAoX2EgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLW5hbWU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdCgndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgcGFuZWwpO1xuICAgICAgICAgICAgaWYgKHBhbmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2lkZVBhbmVsSW5zdGFuY2UgPSBuZXcgU2lkZVBhbmVsKHBhbmVsKTtcbiAgICAgICAgICAgIHNpZGVQYW5lbEluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2dnbGVFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJyk7XG4gICAgICAgIHBhbmVsLmRpc3BhdGNoRXZlbnQodG9nZ2xlRXZlbnQpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGFuZWxdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFuZWxMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYW5lbExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNyZWF0aW9uRXZlbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZUNyZWF0aW9uRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxJRCA9IHRoaXMuZGF0YXNldC5wYW5lbCB8fCAnJztcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBsb2dnZWQgaW4gZm9sbG93IGxpbmtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCAmJlxuICAgICAgICAgICAgcGFuZWxJRCA9PT0gJ215LWFjY291bnQtcGFuZWwnICYmXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNpZGVQYW5lbC5vcGVuU2lkZVBhbmVsKHBhbmVsSUQsIHRoaXMpO1xuICAgIH1cbn1cbiIsImNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IHNjcm9sbFBvc2l0aW9uID0gMDtcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlQm9keVNjcm9sbCgpIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBib2R5RWxlbWVudC5zdHlsZS50b3AgPSBgLSR7c2Nyb2xsUG9zaXRpb259cHhgO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICdpbml0aWFsJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVCb2R5U2Nyb2xsKCkge1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb3NpdGlvbicpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnd2lkdGgnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFBvc2l0aW9uKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Njcm9sbC1iZWhhdmlvcicpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobWF0Y2gsIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvVGl0bGVDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3XFxTKi9nLCAodHh0KSA9PiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIk1vZHVsZSIsImNvbnN0cnVjdG9yIiwiZXZlbnRFbWl0dGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDb21wb25lbnRzIiwib24iLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwiY29tcG9uZW50Iiwib25Jbml0IiwiRGF0YUxheWVyIiwiZGF0YUxheWVyIiwid2luZG93IiwicHVzaCIsImRhdGEiLCJlY29tbWVyY2UiLCJDYXJ0IiwiQ29tcG9uZW50IiwiU2lkZVBhbmVsIiwiYWRkT3JVcGRhdGVDYXJ0VG90YWxzIiwic2VuZEFqYXhSZXF1ZXN0IiwiQWpheEFkZFRvQ2FydCIsImZvcm0iLCJ2YXJpYXRpb25EYXRhIiwiYWpheEVuZHBvaW50IiwibG9jYXRpb24iLCJvcmlnaW4iLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yIiwidmFyaWF0aW9uRmllbGRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZSIsImN1cnJlbnRTaXplTmFtZSIsImN1cnJlbnRTaXplVmFsdWUiLCJ2YWx1ZSIsInZhcmlhdGlvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJuYW1lIiwiaGFuZGxlQWRkVG9DYXJ0Q2xpY2siLCJiaW5kIiwiY3VycmVudE9wdGlvbnMiLCJpbmRleCIsImxlbmd0aCIsInZhcmlhdGlvbklEIiwiZmluZE1hdGNoaW5nVmFyaWFudCIsImRpc2FibGVOb25FeGlzdGluZ1ZhcmlhbnRzIiwic2V0Rm9ybUludmFsaWQiLCJ2YXJpYXRpb25faWQiLCJqUXVlcnkiLCJ0cmlnZ2VyIiwiZmluZE1hdGNoaW5nVmFyaWFudERhdGEiLCJwcm9kdWN0X2lkIiwiZmllbGQiLCJkaXNhYmxlZCIsImF0dHJpYnV0ZXMiLCJFcnJvciIsIm1hdGNoIiwiZGF0YXNldCIsInByb2R1Y3RfdmFyaWF0aW9ucyIsIkpTT04iLCJwYXJzZSIsImtleSIsIk9iamVjdCIsImVudHJpZXMiLCJyZXR1cm5WYWx1ZSIsInVuZGVmaW5lZCIsImV2ZW50IiwiX2EiLCJfYiIsInByZXZlbnREZWZhdWx0IiwicHJvZHVjdElkRWxlbWVudCIsInZhcmlhdGlvbklkRWxlbWVudCIsIk51bWJlciIsImZvcm1Jc1ZhbGlkIiwiZmllbGRzIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50IiwidmFsaWRpdHkiLCJ2YWxpZCIsInF1YW50aXR5IiwiYWN0aW9uIiwidG9TdHJpbmciLCJzdWJzY3JpcHRpb24iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwibmFtZUZpZWxkIiwiY2hlY2tlZCIsInN1YnNjcmlwdGlvblRlcm0iLCJnZXQiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJvcGVuU2lkZVBhbmVsIiwidXBkYXRlQ2FydCIsImNhcnRBbW91bnQiLCJhZGRUb0NhcnRGb3JtIiwiYWpheEFkZFRvQ2FydCIsInRvVGl0bGVDYXNlIiwiQ2hhbmdlVmFyaWFudENvbG9yIiwiZWxlbWVudHMiLCJsYWJlbCIsInRleHQiLCJ0ZXh0Q29udGVudCIsInJhZGlvIiwiaW5uZXJUZXh0IiwicmFkaW9CdXR0b25zIiwiaW5zdGFuY2UiLCJDaGFuZ2VWYXJpYW50UHJpY2UiLCJyZWd1bGFyUHJpY2VFbGVtZW50Iiwic2FsZVByaWNlRWxlbWVudCIsImNsb3Nlc3QiLCJzYWxlUHJpY2UiLCJyZWd1bGFyUHJpY2UiLCJ0b0ZpeGVkIiwiSW1hZ2VHYWxsZXJ5IiwidGh1bWJuYWlsQW5jaG9ycyIsImFuY2hvciIsImlkIiwidGh1bWJuYWlsSWQiLCJpbWFnZSIsImltYWdlUGFyZW50IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIkFtb3VudFNlbGVjdG9yIiwiUHJvZHVjdERldGFpbCIsImFyZ3VtZW50cyIsIl9jIiwiaXRlbXMiLCJ2YXJpYXRpb25GaWVsZCIsInByb2R1Y3REYXRhIiwiaXRlbV9pZCIsIml0ZW1fbmFtZSIsIml0ZW1fdmFyaWFudCIsInByaWNlIiwicmVwbGFjZSIsIml0ZW1fYnJhbmQiLCJwcm9kdWN0RGV0YWlsSW5pdCIsInByb2R1Y3REZXRhaWwiLCJkaWFsb2dQb2x5ZmlsbCIsImRpc2FibGVCb2R5U2Nyb2xsIiwiZW5hYmxlQm9keVNjcm9sbCIsInRvQ2FtZWxDYXNlIiwiRGlhbG9nIiwiX2lzT3BlbiIsIl90cmFuc2l0aW9uVGltZSIsImlzT3BlbiIsImNhbWVsRGF0YUF0dHJpYnV0ZSIsImRhdGFBdHRyaWJ1dGUiLCJ0cmFuc2l0aW9uVGltZSIsImdldFRyYW5zaXRpb25UaW1lIiwicG9seWZpbGxEaWFsb2ciLCJzZXRFdmVudExpc3RlbmVycyIsIm9wZW4iLCJ0b2dnbGUiLCJjbG9zZUJ1dHRvbnMiLCJjbG9zZSIsImUiLCJvdXRzaWRlQ2xpY2siLCJ0YXJnZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpY2tlZEluRGlhbG9nIiwidG9wIiwiY2xpZW50WSIsImhlaWdodCIsImxlZnQiLCJjbGllbnRYIiwid2lkdGgiLCJzaG93TW9kYWwiLCJjbGFzc2VzIiwic2V0VGltZW91dCIsImNsb3NlZCIsInN0eWxlcyIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJkdXJhdGlvbiIsImluZGV4T2YiLCJwYXJzZUZsb2F0IiwicmVnaXN0ZXJEaWFsb2ciLCJyaWdodCIsInBhbmVsSUQiLCJwYW5lbCIsInRlbXBsYXRlIiwiSFRNTEFuY2hvckVsZW1lbnQiLCJocmVmIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJjb250ZW50IiwiYXBwZW5kQ2hpbGQiLCJlbWl0Iiwic2lkZVBhbmVsSW5zdGFuY2UiLCJ0b2dnbGVFdmVudCIsIkN1c3RvbUV2ZW50IiwicGFuZWxMaW5rcyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJoYW5kbGVDcmVhdGlvbkV2ZW50IiwiYm9keSIsImNvbnRhaW5zIiwiYm9keUVsZW1lbnQiLCJzY3JvbGxQb3NpdGlvbiIsInBhZ2VZT2Zmc2V0Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsQmVoYXZpb3IiLCJyZW1vdmVQcm9wZXJ0eSIsInNjcm9sbFRvIiwic3RyIiwiY2hyIiwidG9VcHBlckNhc2UiLCJ0eHQiLCJjaGFyQXQiLCJzdWJzdHIiLCJ0b0xvd2VyQ2FzZSJdLCJzb3VyY2VSb290IjoiIn0=