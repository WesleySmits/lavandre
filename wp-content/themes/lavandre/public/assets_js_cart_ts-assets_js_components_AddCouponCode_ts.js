"use strict";
(self["webpackChunklavandre"] = self["webpackChunklavandre"] || []).push([["assets_js_cart_ts-assets_js_components_AddCouponCode_ts"],{

/***/ "./assets/js/cart.ts":
/*!***************************!*\
  !*** ./assets/js/cart.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Cart": function() { return /* binding */ Cart; }
/* harmony export */ });
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/EventEmitter */ "./assets/js/common/EventEmitter.ts");
/* harmony import */ var _components_AddCouponCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AddCouponCode */ "./assets/js/components/AddCouponCode.ts");
/* harmony import */ var _components_AmountSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AmountSelector */ "./assets/js/components/AmountSelector.ts");
/* harmony import */ var _util_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/cart */ "./assets/js/util/cart.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/requests */ "./assets/js/util/requests.ts");
/* eslint-disable camelcase */






class Cart {
  constructor() {
    this.eventEmitter = _common_EventEmitter__WEBPACK_IMPORTED_MODULE_0__["default"];
    this.ajaxEndpoint = `${window.location.origin}/wp-admin/admin-ajax.php`;
    this._cartElement = document.getElementById('custom-cart');
    this.updateTimeout = null;
    this.updateTimeoutDuration = 800;
    this.amountSelector = null;
    this.eventEmitter.on('template-instantiated', element => {
      if (!element || !element.dataset.panelName) {
        return;
      }

      if (element.dataset.panelName === 'cart-panel') {
        this.handleCartPanel(element);
        this.initialize();
      }
    });
  }

  initialize() {
    if (!this._cartElement) {
      return;
    }

    this.initializeCouponCodeForm();
    this.setEventListeners();
  }

  get cartElement() {
    return this._cartElement;
  }

  set cartElement(element) {
    this._cartElement = element;
  }

  get cartShortCode() {
    return this._cartElement && this._cartElement.classList.contains('custom-cart--mini') ? '[ww_custom_cart_mini]' : '[ww_custom_cart]';
  }

  setEventListeners() {
    this.amountSelector = new _components_AmountSelector__WEBPACK_IMPORTED_MODULE_2__["default"](this._cartElement);
    this.amountSelector.initialize();
    const deleteCartItemButtons = Array.from(document.querySelectorAll('[data-delete-item]'));

    for (let i = 0; i < deleteCartItemButtons.length; i++) {
      const button = deleteCartItemButtons[i];
      button.addEventListener('click', () => {
        this.deleteCartItem(button);
      });
    }

    this.eventEmitter.on('amount-changed', input => {
      if (!this._cartElement.contains(input)) {
        return;
      }

      if (this.updateTimeout !== null) {
        window.clearTimeout(this.updateTimeout);
      }

      this.updateTimeout = window.setTimeout(() => {
        this.updateCartItem(input);
      }, this.updateTimeoutDuration);
    });
    const removeCouponCodeLinks = Array.from(document.querySelectorAll('[data-remove-code]'));

    for (let index = 0; index < removeCouponCodeLinks.length; index++) {
      const anchor = removeCouponCodeLinks[index]; // eslint-disable-next-line no-loop-func

      anchor.addEventListener('click', event => {
        event.preventDefault();
        const code = anchor.dataset.removeCode;

        if (!code) {
          window.location.href = anchor.href;
          return;
        }

        const data = {
          action: 'coupon_code_remove',
          code,
          shortcode: this.cartShortCode
        };
        (0,_util_requests__WEBPACK_IMPORTED_MODULE_4__.sendAjaxRequest)(data, this.ajaxEndpoint, this._cartElement, this.updateCart.bind(this), () => {
          window.location.href = anchor.href;
        });
      });
    }
  }

  initializeCouponCodeForm() {
    const couponForm = document.getElementById('coupon-code-form');

    if (couponForm === null) {
      return;
    }

    const addCouponCode = new _components_AddCouponCode__WEBPACK_IMPORTED_MODULE_1__["default"](couponForm);
    addCouponCode.initialize();
  }

  updateCartItem(input) {
    var _a;

    const item = input.closest('.custom-cart__item');
    const productID = item === null || item === void 0 ? void 0 : item.dataset.productId;
    const variation_id = (_a = Number(item === null || item === void 0 ? void 0 : item.dataset.variationId)) !== null && _a !== void 0 ? _a : 0;

    if (!item || !productID) {
      throw new Error('no item found');
    }

    const data = {
      action: 'update_cart_item',
      product_id: productID,
      quantity: input.value,
      variation_id: variation_id.toString(),
      shortcode: this.cartShortCode
    };
    (0,_util_requests__WEBPACK_IMPORTED_MODULE_4__.sendAjaxRequest)(data, this.ajaxEndpoint, this._cartElement, this.updateCart.bind(this));
  }

  deleteCartItem(button) {
    const item = button.closest('.custom-cart__item');
    const productID = button.dataset.productId;
    const variationID = button.dataset.variationId || '';

    if (!item || !productID || !variationID) {
      throw new Error('no item found');
    }

    const data = {
      action: 'delete_cart_item',
      product_id: productID,
      variation_id: variationID,
      shortcode: this.cartShortCode
    };
    (0,_util_requests__WEBPACK_IMPORTED_MODULE_4__.sendAjaxRequest)(data, this.ajaxEndpoint, this._cartElement, this.updateCart.bind(this));
  }

  updateCart(content) {
    if (content) {
      this.updateCartContent(content);
      return;
    }

    this.getCartContent();
  }

  getCartContent() {
    const data = {
      action: 'update_cart',
      shortcode: this.cartShortCode
    };
    (0,_util_requests__WEBPACK_IMPORTED_MODULE_4__.sendAjaxRequest)(data, this.ajaxEndpoint, this._cartElement, this.updateCartContent.bind(this));
  }

  updateCartContent(response) {
    if (!response || !response.data || !response.data.content) {
      return;
    }

    const {
      content
    } = response.data;
    this._cartElement.outerHTML = content;
    this._cartElement = document.getElementById('custom-cart');
    (0,_util_cart__WEBPACK_IMPORTED_MODULE_3__["default"])(response.data['total-cart-quantity']);
    this.setEventListeners();
  }

  handleCartPanel(panel) {
    const element = panel.querySelector('#custom-cart');

    if (element === null) {
      return;
    }

    this.cartElement = element;
    this.updateCart();
  }

}

const cart = new Cart();
cart.initialize();

/* harmony default export */ __webpack_exports__["default"] = (cart);

/***/ }),

/***/ "./assets/js/common/Component.ts":
/*!***************************************!*\
  !*** ./assets/js/common/Component.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Component; }
/* harmony export */ });
class Component {
  static onInit(selector = document) {}

}

/***/ }),

/***/ "./assets/js/common/EventEmitter.ts":
/*!******************************************!*\
  !*** ./assets/js/common/EventEmitter.ts ***!
  \******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "EventEmitterClass": function() { return /* binding */ EventEmitterClass; }
/* harmony export */ });
class EventEmitterClass {
  constructor() {
    this.events = {};
  }
  /**
   * Performs listener callback function upon triggered event
   */


  on(event, listener) {
    if (typeof this.events[event] !== 'object') {
      this.events[event] = [];
    }

    this.events[event].push(listener);
    return () => this.removeListener(event, listener);
  }
  /**
   * Remove listener from event emitter list
   */


  removeListener(event, listener) {
    if (typeof this.events[event] !== 'object') {
      return null;
    }

    const index = this.events[event].indexOf(listener);

    if (index > -1) {
      this.events[event].splice(index, 1);
    }

    return undefined;
  }
  /**
   * Remove all listeners from event emitter list
   */


  removeAllListeners(event) {
    if (typeof this.events[event] !== 'object') {
      return null;
    }

    delete this.events[event];
    return undefined;
  }
  /**
   * Emits event so that any listeners can perform their callback function
   */


  emit(event, ...args) {
    if (typeof this.events[event] !== 'object') {
      return null;
    }

    this.events[event].forEach(listener => listener.apply(this, args));
    return undefined;
  }
  /**
   * Call event once and then remove it from the event emitter list
   */


  once(event, listener) {
    const remove = this.on(event, (...args) => {
      remove();
      listener.apply(this, args);
    });
  }

}


/* harmony default export */ __webpack_exports__["default"] = (new EventEmitterClass());

/***/ }),

/***/ "./assets/js/common/HttpClient.ts":
/*!****************************************!*\
  !*** ./assets/js/common/HttpClient.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
class HttpClient {
  /**
   * Performs a GET request to the specified URL
   */
  get(url, options) {
    return this.request(url, options);
  }
  /**
   * Performs a POST request to the specified URL
   */


  post(url, data, options) {
    const defaultOptions = {
      method: 'post',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    };
    const requestOptions = Object.assign(Object.assign({}, defaultOptions), options);
    return this.request(url, requestOptions);
  }
  /**
   * Performs a PUT request to the specified URL
   */


  put(url, data, options) {
    const defaultOptions = {
      method: 'put',
      body: data,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
      }
    };
    const requestOptions = Object.assign(Object.assign({}, defaultOptions), options);
    return this.request(url, requestOptions);
  }
  /**
   * Performs a DELETE request to the specified URL
   */


  delete(url, data, options) {
    const defaultOptions = {
      method: 'delete',
      body: data
    };
    const requestOptions = Object.assign(Object.assign({}, defaultOptions), options);
    return this.request(url, requestOptions);
  }
  /**
   * Internal method which invokes the fetch API and returns a promise.
   */


  request(url, options) {
    const defaultOptions = {
      method: 'get',
      credentials: 'same-origin',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      }
    };
    const requestOptions = Object.assign(Object.assign({}, defaultOptions), options);
    return fetch(url, requestOptions).then(this.requestStatus).then(this.responseType);
  }
  /**
   * Checks the response statusCode and returns the correct value
   */


  requestStatus(response) {
    if (response.status >= 200 && response.status < 300) {
      return Promise.resolve(response);
    }

    if (response.status >= 400 && response.status < 500) {
      return response.text().then(text => Promise.reject(text));
    }

    return Promise.reject(new Error(response.statusText));
  }
  /**
   * Converts Promise response to contentType based on header
   */


  responseType(response) {
    const contentType = response.headers.get('content-type');

    if (contentType !== null && contentType.indexOf('application/json') !== -1) {
      return response.json();
    }

    return response.text();
  }
  /**
   * Converts a FormData object into a URLSearchParams string
   */


  convertFormDataToQueryString(data) {
    return new URLSearchParams(data).toString();
  }

}

const httpClientInstance = new HttpClient();
/* harmony default export */ __webpack_exports__["default"] = (httpClientInstance);

/***/ }),

/***/ "./assets/js/components/AddCouponCode.ts":
/*!***********************************************!*\
  !*** ./assets/js/components/AddCouponCode.ts ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AddCouponCode; }
/* harmony export */ });
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../cart */ "./assets/js/cart.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* harmony import */ var _FieldValidation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./FieldValidation */ "./assets/js/components/FieldValidation.ts");



class AddCouponCode {
  constructor(form) {
    this.ajaxEndpoint = `${window.location.origin}/wp-admin/admin-ajax.php`;
    this.cartElement = document.getElementById('custom-cart');
    this.form = form;
    this.couponField = this.form.querySelector('[name="coupon-code"]');
    this.submitButton = this.form.querySelector('[type="submit"]');
  }

  initialize() {
    this.form.addEventListener('submit', event => {
      event.preventDefault();
      const formData = new FormData(this.form);
      let couponCode = formData.get('coupon-code') || '';

      if (!couponCode || typeof couponCode !== 'string') {
        couponCode = '';
      }

      const data = {
        action: 'coupon_code_add',
        code: couponCode.toLowerCase()
      };
      _FieldValidation__WEBPACK_IMPORTED_MODULE_2__["default"].removeErrorText(this.couponField);
      (0,_util_requests__WEBPACK_IMPORTED_MODULE_1__.sendAjaxRequest)(data, this.ajaxEndpoint, this.cartElement, this.onSuccess.bind(this), this.onFailure.bind(this), event, this.submitButton);
      return false;
    });
  }

  onSuccess(response, event) {
    const panel = this.form.closest('[data-panel-name]');

    if (panel) {
      panel.dispatchEvent(new CustomEvent('toggle'));
    }

    _cart__WEBPACK_IMPORTED_MODULE_0__["default"].updateCartContent(response);
  }

  onFailure(error) {
    _FieldValidation__WEBPACK_IMPORTED_MODULE_2__["default"].appendErrorText(this.couponField, error.message);
    throw error;
  }

}

/***/ }),

/***/ "./assets/js/components/AmountSelector.ts":
/*!************************************************!*\
  !*** ./assets/js/components/AmountSelector.ts ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AmountSelector; }
/* harmony export */ });
/* harmony import */ var _css_components_quantity_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_quantity.pcss */ "./assets/css/components/_quantity.pcss");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../common/EventEmitter */ "./assets/js/common/EventEmitter.ts");



class AmountSelector extends _common_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(selector = document) {
    super();
    this.buttons = [];
    this.eventEmitter = _common_EventEmitter__WEBPACK_IMPORTED_MODULE_2__["default"];

    this.handleClick = event => {
      const target = event.target;

      if (!target || !target.parentElement) {
        return;
      }

      const button = target.closest('button');

      if (!button || !button.parentElement) {
        return;
      }

      const input = button.parentElement.querySelector('.qty');

      if (!input || !(input instanceof HTMLInputElement)) {
        return;
      }

      this.changeAmount(button, input);
    };

    this.buttons = Array.from(selector.querySelectorAll('.plus-amount, .minus-amount'));
  }

  initialize() {
    const eventListener = event => {
      const input = event.target;

      if (!input) {
        return;
      }

      if (input.max && +input.value > +input.max) {
        input.value = input.max;
      }

      if (input.min && +input.value < +input.min) {
        input.value = input.min;
      }

      this.eventEmitter.emit('amount-changed', event.target);
    };

    const inputs = Array.from(document.querySelectorAll('input.qty'));

    for (let index = 0; index < inputs.length; index++) {
      const input = inputs[index];
      input.removeEventListener('change', eventListener);
      input.addEventListener('change', eventListener);
    }

    for (let index = 0; index < this.buttons.length; index++) {
      const button = this.buttons[index];
      button.removeEventListener('click', this.handleClick.bind(this));
      button.addEventListener('click', this.handleClick.bind(this));
    }
  }

  changeAmount(target, input) {
    let value = Number(input.value);
    const step = Number(input.getAttribute('step'));

    if (target.classList.contains('plus-amount')) {
      value += step;
    } else {
      value -= step;
    }

    input.value = value.toString();
    input.dispatchEvent(new Event('change'));
  }

  static onInit(selector = document) {
    const amountSelector = new AmountSelector(selector);
    amountSelector.initialize();
  }

}

/***/ }),

/***/ "./assets/js/components/FieldValidation.ts":
/*!*************************************************!*\
  !*** ./assets/js/components/FieldValidation.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ FieldValidation; }
/* harmony export */ });
class FieldValidation {
  constructor(field) {
    this.field = field;
  }

  initialize() {
    if (!this.field) {
      return;
    }

    const events = ['change', 'validate'];

    for (let index = 0; index < events.length; index++) {
      const event = events[index];
      this.field.addEventListener(event, e => {
        this.onChange(e.target, e);
      });
    }

    this.field.addEventListener('invalid', e => {
      e.preventDefault();
    });
  }

  onChange(field, event) {
    FieldValidation.removeErrorText(this.field);

    if (this.field.validity.valid === true) {
      field.classList.remove('invalid');
      return;
    }

    const validationMessage = this.getValidationMessage(field.validity, field);
    FieldValidation.appendErrorText(this.field, validationMessage);
    field.classList.add('invalid');
  }

  getValidationMessage(validity, field) {
    const defaultValidationMessage = 'Vul een geldige waarde in.';

    if (validity.valueMissing === true) {
      return field.dataset.valueMissing || field.title || 'Dit veld is verplicht.';
    }

    if (validity.customError === true) {
      return field.dataset.customMessage || field.title || defaultValidationMessage;
    }

    if (validity.typeMismatch === true) {
      return field.title || defaultValidationMessage;
    }

    if (validity.patternMismatch === true) {
      return field.title || defaultValidationMessage;
    }

    return defaultValidationMessage;
  }

  static appendErrorText(field, validationMessage) {
    var _a;

    const span = document.createElement('SPAN');
    span.classList.add('validation-message');
    span.innerText = validationMessage;
    (_a = field.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(span);
  }

  static appendSuccessText(field, validationMessage) {
    var _a;

    const span = document.createElement('SPAN');
    span.classList.add('validation-message', 'validation-message--success');
    span.innerText = validationMessage;
    (_a = field.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(span);
  }

  static removeErrorText(field) {
    var _a;

    const element = ((_a = field.parentElement) === null || _a === void 0 ? void 0 : _a.querySelector('.validation-message')) || null;

    if (!element) {
      return;
    }

    element.remove();
  }

  static onInit(selector = document) {
    const loginForm = Array.from(selector.querySelectorAll('[data-field-validation]'));
    loginForm.forEach(form => {
      const fields = Array.from(form.querySelectorAll('input:not([type="hidden"])'));

      for (let index = 0; index < fields.length; index++) {
        const field = fields[index];
        const fieldValidation = new FieldValidation(field);
        fieldValidation.initialize();
      }

      const submitButton = form.querySelector('button[type="submit"]');
      submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', event => {
        event.preventDefault();
        let valid = true;

        for (let index = 0; index < fields.length; index++) {
          const field = fields[index];
          field.dispatchEvent(new Event('change'));
          valid = field.validity.valid;
        }

        if (!valid) {
          return;
        }

        form.submit();
      });
    });
  }

}

/***/ }),

/***/ "./assets/js/util/cart.ts":
/*!********************************!*\
  !*** ./assets/js/util/cart.ts ***!
  \********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ addOrUpdateCartTotals; }
/* harmony export */ });
function addOrUpdateCartTotals(cartAmount) {
  const parent = document.querySelector('.cart-amount-icon');

  if (parent === null) {
    throw new Error('No cart amount wrapper found');
  }

  let cartAmountElement = parent.querySelector('.cart-amount-counter');

  if (!cartAmount || cartAmount === '0') {
    cartAmountElement === null || cartAmountElement === void 0 ? void 0 : cartAmountElement.remove();
    return;
  }

  if (cartAmountElement === null) {
    cartAmountElement = document.createElement('SPAN');
    cartAmountElement.classList.add('cart-amount-counter');
    parent.appendChild(cartAmountElement);
  }

  cartAmountElement.innerText = cartAmount;
}

/***/ }),

/***/ "./assets/js/util/requests.ts":
/*!************************************!*\
  !*** ./assets/js/util/requests.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sendAjaxRequest": function() { return /* binding */ sendAjaxRequest; },
/* harmony export */   "addLoadingState": function() { return /* binding */ addLoadingState; },
/* harmony export */   "removeLoadingState": function() { return /* binding */ removeLoadingState; },
/* harmony export */   "setButtonLoadingState": function() { return /* binding */ setButtonLoadingState; },
/* harmony export */   "removeButtonLoadingState": function() { return /* binding */ removeButtonLoadingState; }
/* harmony export */ });
/* harmony import */ var _common_HttpClient__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/HttpClient */ "./assets/js/common/HttpClient.ts");

function sendAjaxRequest(data, endpoint, loadingElement, onSuccess, onFailure, event, button) {
  const httpClient = _common_HttpClient__WEBPACK_IMPORTED_MODULE_0__["default"];
  const options = {
    method: 'post',
    body: new URLSearchParams(data).toString(),
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  };
  if (loadingElement) addLoadingState(loadingElement);
  if (button) setButtonLoadingState(button);
  httpClient.post(endpoint, '', options).then(response => new Promise(() => {
    const ajaxResponse = response;
    const data = ajaxResponse.data;

    if (ajaxResponse.success === false) {
      throw new Error(String(data));
    }

    onSuccess(ajaxResponse, event);
    if (loadingElement) removeLoadingState(loadingElement);
    if (button) removeButtonLoadingState(button);
  })).catch(error => {
    // console.error(error);
    if (loadingElement) removeLoadingState(loadingElement);
    if (button) removeButtonLoadingState(button);
    if (onFailure) onFailure(error);
  });
}
function addLoadingState(item) {
  if (!item) {
    return;
  }

  item.classList.add('custom-cart__item--loading');
  const loader = document.createElement('DIV');
  loader.classList.add('ww-loader');
  item.appendChild(loader);
}
function removeLoadingState(item) {
  if (!item) {
    return;
  }

  item.classList.remove('custom-cart__item--loading');
  const loader = item.querySelector('.ww-loader');

  if (loader) {
    loader.parentElement.removeChild(loader);
  }
}
function setButtonLoadingState(button) {
  button.disabled = true;
  button.setAttribute('loading', 'true');
}
function removeButtonLoadingState(button) {
  button.disabled = false;
  button.removeAttribute('loading');
}

/***/ }),

/***/ "./assets/css/components/_quantity.pcss":
/*!**********************************************!*\
  !*** ./assets/css/components/_quantity.pcss ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2pzX2NhcnRfdHMtYXNzZXRzX2pzX2NvbXBvbmVudHNfQWRkQ291cG9uQ29kZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUssSUFBTixDQUFXO0FBQ1BDLEVBQUFBLFdBQVcsR0FBRztBQUNWLFNBQUtDLFlBQUwsR0FBb0JQLDREQUFwQjtBQUNBLFNBQUtRLFlBQUwsR0FBcUIsR0FBRUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFPLDBCQUE5QztBQUNBLFNBQUtDLFlBQUwsR0FBb0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxTQUFLQyxxQkFBTCxHQUE2QixHQUE3QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxTQUFLVixZQUFMLENBQWtCVyxFQUFsQixDQUFxQix1QkFBckIsRUFBK0NDLE9BQUQsSUFBYTtBQUN2RCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFNBQWpDLEVBQTRDO0FBQ3hDO0FBQ0g7O0FBQ0QsVUFBSUYsT0FBTyxDQUFDQyxPQUFSLENBQWdCQyxTQUFoQixLQUE4QixZQUFsQyxFQUFnRDtBQUM1QyxhQUFLQyxlQUFMLENBQXFCSCxPQUFyQjtBQUNBLGFBQUtJLFVBQUw7QUFDSDtBQUNKLEtBUkQ7QUFTSDs7QUFDREEsRUFBQUEsVUFBVSxHQUFHO0FBQ1QsUUFBSSxDQUFDLEtBQUtYLFlBQVYsRUFBd0I7QUFDcEI7QUFDSDs7QUFDRCxTQUFLWSx3QkFBTDtBQUNBLFNBQUtDLGlCQUFMO0FBQ0g7O0FBQ2MsTUFBWEMsV0FBVyxHQUFHO0FBQ2QsV0FBTyxLQUFLZCxZQUFaO0FBQ0g7O0FBQ2MsTUFBWGMsV0FBVyxDQUFDUCxPQUFELEVBQVU7QUFDckIsU0FBS1AsWUFBTCxHQUFvQk8sT0FBcEI7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QUFDN0NBLEVBQUFBLE1BQU0sQ0FBQ21LLFFBQVAsR0FBa0IsS0FBbEI7QUFDQW5LLEVBQUFBLE1BQU0sQ0FBQ3FLLGVBQVAsQ0FBdUIsU0FBdkI7QUFDSDs7Ozs7Ozs7Ozs7QUNqRUQiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jYXJ0LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbW1vbi9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tbW9uL0V2ZW50RW1pdHRlci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21tb24vSHR0cENsaWVudC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FkZENvdXBvbkNvZGUudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9BbW91bnRTZWxlY3Rvci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZpZWxkVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2NhcnQudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9yZXF1ZXN0cy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fcXVhbnRpdHkucGNzcz8yNTlkIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGNhbWVsY2FzZSAqL1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IEFkZENvdXBvbkNvZGUgZnJvbSAnLi9jb21wb25lbnRzL0FkZENvdXBvbkNvZGUnO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gJy4vY29tcG9uZW50cy9BbW91bnRTZWxlY3Rvcic7XG5pbXBvcnQgYWRkT3JVcGRhdGVDYXJ0VG90YWxzIGZyb20gJy4vdXRpbC9jYXJ0JztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4vdXRpbC9yZXF1ZXN0cyc7XG5jbGFzcyBDYXJ0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLl9jYXJ0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tY2FydCcpO1xuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLnVwZGF0ZVRpbWVvdXREdXJhdGlvbiA9IDgwMDtcbiAgICAgICAgdGhpcy5hbW91bnRTZWxlY3RvciA9IG51bGw7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKCFlbGVtZW50IHx8ICFlbGVtZW50LmRhdGFzZXQucGFuZWxOYW1lKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGVsZW1lbnQuZGF0YXNldC5wYW5lbE5hbWUgPT09ICdjYXJ0LXBhbmVsJykge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2FydFBhbmVsKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLl9jYXJ0RWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvdXBvbkNvZGVGb3JtKCk7XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgZ2V0IGNhcnRFbGVtZW50KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FydEVsZW1lbnQ7XG4gICAgfVxuICAgIHNldCBjYXJ0RWxlbWVudChlbGVtZW50KSB7XG4gICAgICAgIHRoaXMuX2NhcnRFbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGNhcnRTaG9ydENvZGUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJ0RWxlbWVudCAmJiB0aGlzLl9jYXJ0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2N1c3RvbS1jYXJ0LS1taW5pJylcbiAgICAgICAgICAgID8gJ1t3d19jdXN0b21fY2FydF9taW5pXSdcbiAgICAgICAgICAgIDogJ1t3d19jdXN0b21fY2FydF0nO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5hbW91bnRTZWxlY3RvciA9IG5ldyBBbW91bnRTZWxlY3Rvcih0aGlzLl9jYXJ0RWxlbWVudCk7XG4gICAgICAgIHRoaXMuYW1vdW50U2VsZWN0b3IuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBjb25zdCBkZWxldGVDYXJ0SXRlbUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWRlbGV0ZS1pdGVtXScpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBkZWxldGVDYXJ0SXRlbUJ1dHRvbnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRlbGV0ZUNhcnRJdGVtQnV0dG9uc1tpXTtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlbGV0ZUNhcnRJdGVtKGJ1dHRvbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5vbignYW1vdW50LWNoYW5nZWQnLCAoaW5wdXQpID0+IHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fY2FydEVsZW1lbnQuY29udGFpbnMoaW5wdXQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMudXBkYXRlVGltZW91dCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQodGhpcy51cGRhdGVUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudXBkYXRlVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRJdGVtKGlucHV0KTtcbiAgICAgICAgICAgIH0sIHRoaXMudXBkYXRlVGltZW91dER1cmF0aW9uKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IHJlbW92ZUNvdXBvbkNvZGVMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcmVtb3ZlLWNvZGVdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcmVtb3ZlQ291cG9uQ29kZUxpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgYW5jaG9yID0gcmVtb3ZlQ291cG9uQ29kZUxpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1sb29wLWZ1bmNcbiAgICAgICAgICAgIGFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgY29uc3QgY29kZSA9IGFuY2hvci5kYXRhc2V0LnJlbW92ZUNvZGU7XG4gICAgICAgICAgICAgICAgaWYgKCFjb2RlKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYW5jaG9yLmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uOiAnY291cG9uX2NvZGVfcmVtb3ZlJyxcbiAgICAgICAgICAgICAgICAgICAgY29kZSxcbiAgICAgICAgICAgICAgICAgICAgc2hvcnRjb2RlOiB0aGlzLmNhcnRTaG9ydENvZGVcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgdGhpcy5fY2FydEVsZW1lbnQsIHRoaXMudXBkYXRlQ2FydC5iaW5kKHRoaXMpLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gYW5jaG9yLmhyZWY7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0aWFsaXplQ291cG9uQ29kZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGNvdXBvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291cG9uLWNvZGUtZm9ybScpO1xuICAgICAgICBpZiAoY291cG9uRm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFkZENvdXBvbkNvZGUgPSBuZXcgQWRkQ291cG9uQ29kZShjb3Vwb25Gb3JtKTtcbiAgICAgICAgYWRkQ291cG9uQ29kZS5pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIHVwZGF0ZUNhcnRJdGVtKGlucHV0KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGlucHV0LmNsb3Nlc3QoJy5jdXN0b20tY2FydF9faXRlbScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SUQgPSBpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGl0ZW0uZGF0YXNldC5wcm9kdWN0SWQ7XG4gICAgICAgIGNvbnN0IHZhcmlhdGlvbl9pZCA9IChfYSA9IE51bWJlcihpdGVtID09PSBudWxsIHx8IGl0ZW0gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGl0ZW0uZGF0YXNldC52YXJpYXRpb25JZCkpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IDA7XG4gICAgICAgIGlmICghaXRlbSB8fCAhcHJvZHVjdElEKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGl0ZW0gZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlX2NhcnRfaXRlbScsXG4gICAgICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SUQsXG4gICAgICAgICAgICBxdWFudGl0eTogaW5wdXQudmFsdWUsXG4gICAgICAgICAgICB2YXJpYXRpb25faWQ6IHZhcmlhdGlvbl9pZC50b1N0cmluZygpLFxuICAgICAgICAgICAgc2hvcnRjb2RlOiB0aGlzLmNhcnRTaG9ydENvZGVcbiAgICAgICAgfTtcbiAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCB0aGlzLl9jYXJ0RWxlbWVudCwgdGhpcy51cGRhdGVDYXJ0LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBkZWxldGVDYXJ0SXRlbShidXR0b24pIHtcbiAgICAgICAgY29uc3QgaXRlbSA9IGJ1dHRvbi5jbG9zZXN0KCcuY3VzdG9tLWNhcnRfX2l0ZW0nKTtcbiAgICAgICAgY29uc3QgcHJvZHVjdElEID0gYnV0dG9uLmRhdGFzZXQucHJvZHVjdElkO1xuICAgICAgICBjb25zdCB2YXJpYXRpb25JRCA9IGJ1dHRvbi5kYXRhc2V0LnZhcmlhdGlvbklkIHx8ICcnO1xuICAgICAgICBpZiAoIWl0ZW0gfHwgIXByb2R1Y3RJRCB8fCAhdmFyaWF0aW9uSUQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gaXRlbSBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdkZWxldGVfY2FydF9pdGVtJyxcbiAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJRCxcbiAgICAgICAgICAgIHZhcmlhdGlvbl9pZDogdmFyaWF0aW9uSUQsXG4gICAgICAgICAgICBzaG9ydGNvZGU6IHRoaXMuY2FydFNob3J0Q29kZVxuICAgICAgICB9O1xuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIHRoaXMuX2NhcnRFbGVtZW50LCB0aGlzLnVwZGF0ZUNhcnQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHVwZGF0ZUNhcnQoY29udGVudCkge1xuICAgICAgICBpZiAoY29udGVudCkge1xuICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0Q29udGVudChjb250ZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmdldENhcnRDb250ZW50KCk7XG4gICAgfVxuICAgIGdldENhcnRDb250ZW50KCkge1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAndXBkYXRlX2NhcnQnLFxuICAgICAgICAgICAgc2hvcnRjb2RlOiB0aGlzLmNhcnRTaG9ydENvZGVcbiAgICAgICAgfTtcbiAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCB0aGlzLl9jYXJ0RWxlbWVudCwgdGhpcy51cGRhdGVDYXJ0Q29udGVudC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgdXBkYXRlQ2FydENvbnRlbnQocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKCFyZXNwb25zZSB8fCAhcmVzcG9uc2UuZGF0YSB8fCAhcmVzcG9uc2UuZGF0YS5jb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSByZXNwb25zZS5kYXRhO1xuICAgICAgICB0aGlzLl9jYXJ0RWxlbWVudC5vdXRlckhUTUwgPSBjb250ZW50O1xuICAgICAgICB0aGlzLl9jYXJ0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tY2FydCcpO1xuICAgICAgICBhZGRPclVwZGF0ZUNhcnRUb3RhbHMocmVzcG9uc2UuZGF0YVsndG90YWwtY2FydC1xdWFudGl0eSddKTtcbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBoYW5kbGVDYXJ0UGFuZWwocGFuZWwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b20tY2FydCcpO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FydEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnVwZGF0ZUNhcnQoKTtcbiAgICB9XG59XG5jb25zdCBjYXJ0ID0gbmV3IENhcnQoKTtcbmNhcnQuaW5pdGlhbGl6ZSgpO1xuZXhwb3J0IHsgQ2FydCB9O1xuZXhwb3J0IGRlZmF1bHQgY2FydDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7IH1cbn1cbiIsImNsYXNzIEV2ZW50RW1pdHRlckNsYXNzIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudHMgPSB7fTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgbGlzdGVuZXIgY2FsbGJhY2sgZnVuY3Rpb24gdXBvbiB0cmlnZ2VyZWQgZXZlbnRcbiAgICAgKi9cbiAgICBvbihldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmV2ZW50c1tldmVudF0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0gPSBbXTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0ucHVzaChsaXN0ZW5lcik7XG4gICAgICAgIHJldHVybiAoKSA9PiB0aGlzLnJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcik7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBsaXN0ZW5lciBmcm9tIGV2ZW50IGVtaXR0ZXIgbGlzdFxuICAgICAqL1xuICAgIHJlbW92ZUxpc3RlbmVyKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2V2ZW50XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluZGV4ID0gdGhpcy5ldmVudHNbZXZlbnRdLmluZGV4T2YobGlzdGVuZXIpO1xuICAgICAgICBpZiAoaW5kZXggPiAtMSkge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGFsbCBsaXN0ZW5lcnMgZnJvbSBldmVudCBlbWl0dGVyIGxpc3RcbiAgICAgKi9cbiAgICByZW1vdmVBbGxMaXN0ZW5lcnMoZXZlbnQpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmV2ZW50c1tldmVudF0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBkZWxldGUgdGhpcy5ldmVudHNbZXZlbnRdO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBFbWl0cyBldmVudCBzbyB0aGF0IGFueSBsaXN0ZW5lcnMgY2FuIHBlcmZvcm0gdGhlaXIgY2FsbGJhY2sgZnVuY3Rpb25cbiAgICAgKi9cbiAgICBlbWl0KGV2ZW50LCAuLi5hcmdzKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ldmVudHNbZXZlbnRdICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLmZvckVhY2goKGxpc3RlbmVyKSA9PiBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKSk7XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENhbGwgZXZlbnQgb25jZSBhbmQgdGhlbiByZW1vdmUgaXQgZnJvbSB0aGUgZXZlbnQgZW1pdHRlciBsaXN0XG4gICAgICovXG4gICAgb25jZShldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgY29uc3QgcmVtb3ZlID0gdGhpcy5vbihldmVudCwgKC4uLmFyZ3MpID0+IHtcbiAgICAgICAgICAgIHJlbW92ZSgpO1xuICAgICAgICAgICAgbGlzdGVuZXIuYXBwbHkodGhpcywgYXJncyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbmV4cG9ydCB7IEV2ZW50RW1pdHRlckNsYXNzIH07XG5leHBvcnQgZGVmYXVsdCBuZXcgRXZlbnRFbWl0dGVyQ2xhc3MoKTtcbiIsImNsYXNzIEh0dHBDbGllbnQge1xuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgR0VUIHJlcXVlc3QgdG8gdGhlIHNwZWNpZmllZCBVUkxcbiAgICAgKi9cbiAgICBnZXQodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCBvcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBQT1NUIHJlcXVlc3QgdG8gdGhlIHNwZWNpZmllZCBVUkxcbiAgICAgKi9cbiAgICBwb3N0KHVybCwgZGF0YSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgUFVUIHJlcXVlc3QgdG8gdGhlIHNwZWNpZmllZCBVUkxcbiAgICAgKi9cbiAgICBwdXQodXJsLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAncHV0JyxcbiAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIERFTEVURSByZXF1ZXN0IHRvIHRoZSBzcGVjaWZpZWQgVVJMXG4gICAgICovXG4gICAgZGVsZXRlKHVybCwgZGF0YSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2RlbGV0ZScsXG4gICAgICAgICAgICBib2R5OiBkYXRhXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBJbnRlcm5hbCBtZXRob2Qgd2hpY2ggaW52b2tlcyB0aGUgZmV0Y2ggQVBJIGFuZCByZXR1cm5zIGEgcHJvbWlzZS5cbiAgICAgKi9cbiAgICByZXF1ZXN0KHVybCwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ2dldCcsXG4gICAgICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQWNjZXB0JzogJ2FwcGxpY2F0aW9uL2pzb24nLFxuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24vanNvbidcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiBmZXRjaCh1cmwsIHJlcXVlc3RPcHRpb25zKS50aGVuKHRoaXMucmVxdWVzdFN0YXR1cykudGhlbih0aGlzLnJlc3BvbnNlVHlwZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgcmVzcG9uc2Ugc3RhdHVzQ29kZSBhbmQgcmV0dXJucyB0aGUgY29ycmVjdCB2YWx1ZVxuICAgICAqL1xuICAgIHJlcXVlc3RTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCAmJiByZXNwb25zZS5zdGF0dXMgPCA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkudGhlbigodGV4dCkgPT4gUHJvbWlzZS5yZWplY3QodGV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBQcm9taXNlIHJlc3BvbnNlIHRvIGNvbnRlbnRUeXBlIGJhc2VkIG9uIGhlYWRlclxuICAgICAqL1xuICAgIHJlc3BvbnNlVHlwZShyZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlICE9PSBudWxsICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBGb3JtRGF0YSBvYmplY3QgaW50byBhIFVSTFNlYXJjaFBhcmFtcyBzdHJpbmdcbiAgICAgKi9cbiAgICBjb252ZXJ0Rm9ybURhdGFUb1F1ZXJ5U3RyaW5nKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5jb25zdCBodHRwQ2xpZW50SW5zdGFuY2UgPSBuZXcgSHR0cENsaWVudCgpO1xuZXhwb3J0IGRlZmF1bHQgaHR0cENsaWVudEluc3RhbmNlO1xuIiwiaW1wb3J0IGNhcnQgZnJvbSAnLi4vY2FydCc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi9GaWVsZFZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkQ291cG9uQ29kZSB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5jYXJ0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tY2FydCcpO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICB0aGlzLmNvdXBvbkZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY291cG9uLWNvZGVcIl0nKTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICBsZXQgY291cG9uQ29kZSA9IGZvcm1EYXRhLmdldCgnY291cG9uLWNvZGUnKSB8fCAnJztcbiAgICAgICAgICAgIGlmICghY291cG9uQ29kZSB8fCB0eXBlb2YgY291cG9uQ29kZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb3Vwb25Db2RlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2NvdXBvbl9jb2RlX2FkZCcsXG4gICAgICAgICAgICAgICAgY29kZTogY291cG9uQ29kZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgRmllbGRWYWxpZGF0aW9uLnJlbW92ZUVycm9yVGV4dCh0aGlzLmNvdXBvbkZpZWxkKTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgdGhpcy5jYXJ0RWxlbWVudCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSwgZXZlbnQsIHRoaXMuc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSwgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcGFuZWwgPSB0aGlzLmZvcm0uY2xvc2VzdCgnW2RhdGEtcGFuZWwtbmFtZV0nKTtcbiAgICAgICAgaWYgKHBhbmVsKSB7XG4gICAgICAgICAgICBwYW5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJykpO1xuICAgICAgICB9XG4gICAgICAgIGNhcnQudXBkYXRlQ2FydENvbnRlbnQocmVzcG9uc2UpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUoZXJyb3IpIHtcbiAgICAgICAgRmllbGRWYWxpZGF0aW9uLmFwcGVuZEVycm9yVGV4dCh0aGlzLmNvdXBvbkZpZWxkLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fcXVhbnRpdHkucGNzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFtb3VudFNlbGVjdG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IFtdO1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgICAgICAgdGhpcy5oYW5kbGVDbGljayA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQgfHwgIXRhcmdldC5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gdGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpO1xuICAgICAgICAgICAgaWYgKCFidXR0b24gfHwgIWJ1dHRvbi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucXR5Jyk7XG4gICAgICAgICAgICBpZiAoIWlucHV0IHx8ICEoaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQW1vdW50KGJ1dHRvbiwgaW5wdXQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbHVzLWFtb3VudCwgLm1pbnVzLWFtb3VudCcpKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGlucHV0Lm1heCAmJiAraW5wdXQudmFsdWUgPiAraW5wdXQubWF4KSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5tYXg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5wdXQubWluICYmICtpbnB1dC52YWx1ZSA8ICtpbnB1dC5taW4pIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0Lm1pbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLmVtaXQoJ2Ftb3VudC1jaGFuZ2VkJywgZXZlbnQudGFyZ2V0KTtcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgaW5wdXRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dC5xdHknKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBpbnB1dHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGlucHV0c1tpbmRleF07XG4gICAgICAgICAgICBpbnB1dC5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudExpc3RlbmVyKTtcbiAgICAgICAgICAgIGlucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aGlzLmJ1dHRvbnMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmJ1dHRvbnNbaW5kZXhdO1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY2hhbmdlQW1vdW50KHRhcmdldCwgaW5wdXQpIHtcbiAgICAgICAgbGV0IHZhbHVlID0gTnVtYmVyKGlucHV0LnZhbHVlKTtcbiAgICAgICAgY29uc3Qgc3RlcCA9IE51bWJlcihpbnB1dC5nZXRBdHRyaWJ1dGUoJ3N0ZXAnKSk7XG4gICAgICAgIGlmICh0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwbHVzLWFtb3VudCcpKSB7XG4gICAgICAgICAgICB2YWx1ZSArPSBzdGVwO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdmFsdWUgLT0gc3RlcDtcbiAgICAgICAgfVxuICAgICAgICBpbnB1dC52YWx1ZSA9IHZhbHVlLnRvU3RyaW5nKCk7XG4gICAgICAgIGlucHV0LmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBhbW91bnRTZWxlY3RvciA9IG5ldyBBbW91bnRTZWxlY3RvcihzZWxlY3Rvcik7XG4gICAgICAgIGFtb3VudFNlbGVjdG9yLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBGaWVsZFZhbGlkYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkKSB7XG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnRzID0gWydjaGFuZ2UnLCAndmFsaWRhdGUnXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGV2ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuZmllbGQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKGUpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGUudGFyZ2V0LCBlKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZmllbGQuYWRkRXZlbnRMaXN0ZW5lcignaW52YWxpZCcsIChlKSA9PiB7XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkNoYW5nZShmaWVsZCwgZXZlbnQpIHtcbiAgICAgICAgRmllbGRWYWxpZGF0aW9uLnJlbW92ZUVycm9yVGV4dCh0aGlzLmZpZWxkKTtcbiAgICAgICAgaWYgKHRoaXMuZmllbGQudmFsaWRpdHkudmFsaWQgPT09IHRydWUpIHtcbiAgICAgICAgICAgIGZpZWxkLmNsYXNzTGlzdC5yZW1vdmUoJ2ludmFsaWQnKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YWxpZGF0aW9uTWVzc2FnZSA9IHRoaXMuZ2V0VmFsaWRhdGlvbk1lc3NhZ2UoZmllbGQudmFsaWRpdHksIGZpZWxkKTtcbiAgICAgICAgRmllbGRWYWxpZGF0aW9uLmFwcGVuZEVycm9yVGV4dCh0aGlzLmZpZWxkLCB2YWxpZGF0aW9uTWVzc2FnZSk7XG4gICAgICAgIGZpZWxkLmNsYXNzTGlzdC5hZGQoJ2ludmFsaWQnKTtcbiAgICB9XG4gICAgZ2V0VmFsaWRhdGlvbk1lc3NhZ2UodmFsaWRpdHksIGZpZWxkKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZSA9ICdWdWwgZWVuIGdlbGRpZ2Ugd2FhcmRlIGluLic7XG4gICAgICAgIGlmICh2YWxpZGl0eS52YWx1ZU1pc3NpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC5kYXRhc2V0LnZhbHVlTWlzc2luZyB8fCBmaWVsZC50aXRsZSB8fCAnRGl0IHZlbGQgaXMgdmVycGxpY2h0Lic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbGlkaXR5LmN1c3RvbUVycm9yID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGQuZGF0YXNldC5jdXN0b21NZXNzYWdlIHx8IGZpZWxkLnRpdGxlIHx8IGRlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsaWRpdHkudHlwZU1pc21hdGNoID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGQudGl0bGUgfHwgZGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC50aXRsZSB8fCBkZWZhdWx0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICB9XG4gICAgc3RhdGljIGFwcGVuZEVycm9yVGV4dChmaWVsZCwgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb24tbWVzc2FnZScpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICAoX2EgPSBmaWVsZC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIHN0YXRpYyBhcHBlbmRTdWNjZXNzVGV4dChmaWVsZCwgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb24tbWVzc2FnZScsICd2YWxpZGF0aW9uLW1lc3NhZ2UtLXN1Y2Nlc3MnKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgKF9hID0gZmllbGQucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlRXJyb3JUZXh0KGZpZWxkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICgoX2EgPSBmaWVsZC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcignLnZhbGlkYXRpb24tbWVzc2FnZScpKSB8fCBudWxsO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWVsZC12YWxpZGF0aW9uXScpKTtcbiAgICAgICAgbG9naW5Gb3JtLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pJykpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWxpZGF0aW9uID0gbmV3IEZpZWxkVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiA9PT0gbnVsbCB8fCBzdWJtaXRCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmllbGQudmFsaWRpdHkudmFsaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIGFkZE9yVXBkYXRlQ2FydFRvdGFscyhjYXJ0QW1vdW50KSB7XG4gICAgY29uc3QgcGFyZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmNhcnQtYW1vdW50LWljb24nKTtcbiAgICBpZiAocGFyZW50ID09PSBudWxsKSB7XG4gICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gY2FydCBhbW91bnQgd3JhcHBlciBmb3VuZCcpO1xuICAgIH1cbiAgICBsZXQgY2FydEFtb3VudEVsZW1lbnQgPSBwYXJlbnQucXVlcnlTZWxlY3RvcignLmNhcnQtYW1vdW50LWNvdW50ZXInKTtcbiAgICBpZiAoIWNhcnRBbW91bnQgfHwgY2FydEFtb3VudCA9PT0gJzAnKSB7XG4gICAgICAgIGNhcnRBbW91bnRFbGVtZW50ID09PSBudWxsIHx8IGNhcnRBbW91bnRFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBjYXJ0QW1vdW50RWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpZiAoY2FydEFtb3VudEVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgY2FydEFtb3VudEVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTUEFOJyk7XG4gICAgICAgIGNhcnRBbW91bnRFbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2NhcnQtYW1vdW50LWNvdW50ZXInKTtcbiAgICAgICAgcGFyZW50LmFwcGVuZENoaWxkKGNhcnRBbW91bnRFbGVtZW50KTtcbiAgICB9XG4gICAgY2FydEFtb3VudEVsZW1lbnQuaW5uZXJUZXh0ID0gY2FydEFtb3VudDtcbn1cbiIsImltcG9ydCBodHRwQ2xpZW50SW5zdGFuY2UgZnJvbSAnLi4vY29tbW9uL0h0dHBDbGllbnQnO1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludCwgbG9hZGluZ0VsZW1lbnQsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBldmVudCwgYnV0dG9uKSB7XG4gICAgY29uc3QgaHR0cENsaWVudCA9IGh0dHBDbGllbnRJbnN0YW5jZTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhKS50b1N0cmluZygpLFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChsb2FkaW5nRWxlbWVudClcbiAgICAgICAgYWRkTG9hZGluZ1N0YXRlKGxvYWRpbmdFbGVtZW50KTtcbiAgICBpZiAoYnV0dG9uKVxuICAgICAgICBzZXRCdXR0b25Mb2FkaW5nU3RhdGUoYnV0dG9uKTtcbiAgICBodHRwQ2xpZW50XG4gICAgICAgIC5wb3N0KGVuZHBvaW50LCAnJywgb3B0aW9ucylcbiAgICAgICAgLnRoZW4oKHJlc3BvbnNlKSA9PiBuZXcgUHJvbWlzZSgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGFqYXhSZXNwb25zZSA9IHJlc3BvbnNlO1xuICAgICAgICBjb25zdCBkYXRhID0gYWpheFJlc3BvbnNlLmRhdGE7XG4gICAgICAgIGlmIChhamF4UmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihTdHJpbmcoZGF0YSkpO1xuICAgICAgICB9XG4gICAgICAgIG9uU3VjY2VzcyhhamF4UmVzcG9uc2UsIGV2ZW50KTtcbiAgICAgICAgaWYgKGxvYWRpbmdFbGVtZW50KVxuICAgICAgICAgICAgcmVtb3ZlTG9hZGluZ1N0YXRlKGxvYWRpbmdFbGVtZW50KTtcbiAgICAgICAgaWYgKGJ1dHRvbilcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbkxvYWRpbmdTdGF0ZShidXR0b24pO1xuICAgIH0pKVxuICAgICAgICAuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICBpZiAobG9hZGluZ0VsZW1lbnQpXG4gICAgICAgICAgICByZW1vdmVMb2FkaW5nU3RhdGUobG9hZGluZ0VsZW1lbnQpO1xuICAgICAgICBpZiAoYnV0dG9uKVxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uTG9hZGluZ1N0YXRlKGJ1dHRvbik7XG4gICAgICAgIGlmIChvbkZhaWx1cmUpXG4gICAgICAgICAgICBvbkZhaWx1cmUoZXJyb3IpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvYWRpbmdTdGF0ZShpdGVtKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tY2FydF9faXRlbS0tbG9hZGluZycpO1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCd3dy1sb2FkZXInKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGxvYWRlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTG9hZGluZ1N0YXRlKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1jYXJ0X19pdGVtLS1sb2FkaW5nJyk7XG4gICAgY29uc3QgbG9hZGVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcud3ctbG9hZGVyJyk7XG4gICAgaWYgKGxvYWRlcikge1xuICAgICAgICBsb2FkZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChsb2FkZXIpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRCdXR0b25Mb2FkaW5nU3RhdGUoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgJ3RydWUnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCdXR0b25Mb2FkaW5nU3RhdGUoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnbG9hZGluZycpO1xufVxuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIkFkZENvdXBvbkNvZGUiLCJBbW91bnRTZWxlY3RvciIsImFkZE9yVXBkYXRlQ2FydFRvdGFscyIsInNlbmRBamF4UmVxdWVzdCIsIkNhcnQiLCJjb25zdHJ1Y3RvciIsImV2ZW50RW1pdHRlciIsImFqYXhFbmRwb2ludCIsIndpbmRvdyIsImxvY2F0aW9uIiwib3JpZ2luIiwiX2NhcnRFbGVtZW50IiwiZG9jdW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsInVwZGF0ZVRpbWVvdXQiLCJ1cGRhdGVUaW1lb3V0RHVyYXRpb24iLCJhbW91bnRTZWxlY3RvciIsIm9uIiwiZWxlbWVudCIsImRhdGFzZXQiLCJwYW5lbE5hbWUiLCJoYW5kbGVDYXJ0UGFuZWwiLCJpbml0aWFsaXplIiwiaW5pdGlhbGl6ZUNvdXBvbkNvZGVGb3JtIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJjYXJ0RWxlbWVudCIsImNhcnRTaG9ydENvZGUiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsImRlbGV0ZUNhcnRJdGVtQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlbGV0ZUNhcnRJdGVtIiwiaW5wdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidXBkYXRlQ2FydEl0ZW0iLCJyZW1vdmVDb3Vwb25Db2RlTGlua3MiLCJpbmRleCIsImFuY2hvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb2RlIiwicmVtb3ZlQ29kZSIsImhyZWYiLCJkYXRhIiwiYWN0aW9uIiwic2hvcnRjb2RlIiwidXBkYXRlQ2FydCIsImJpbmQiLCJjb3Vwb25Gb3JtIiwiYWRkQ291cG9uQ29kZSIsIl9hIiwiaXRlbSIsImNsb3Nlc3QiLCJwcm9kdWN0SUQiLCJwcm9kdWN0SWQiLCJ2YXJpYXRpb25faWQiLCJOdW1iZXIiLCJ2YXJpYXRpb25JZCIsIkVycm9yIiwicHJvZHVjdF9pZCIsInF1YW50aXR5IiwidmFsdWUiLCJ0b1N0cmluZyIsInZhcmlhdGlvbklEIiwiY29udGVudCIsInVwZGF0ZUNhcnRDb250ZW50IiwiZ2V0Q2FydENvbnRlbnQiLCJyZXNwb25zZSIsIm91dGVySFRNTCIsInBhbmVsIiwicXVlcnlTZWxlY3RvciIsImNhcnQiLCJDb21wb25lbnQiLCJvbkluaXQiLCJzZWxlY3RvciIsIkV2ZW50RW1pdHRlckNsYXNzIiwiZXZlbnRzIiwibGlzdGVuZXIiLCJwdXNoIiwicmVtb3ZlTGlzdGVuZXIiLCJpbmRleE9mIiwic3BsaWNlIiwidW5kZWZpbmVkIiwicmVtb3ZlQWxsTGlzdGVuZXJzIiwiZW1pdCIsImFyZ3MiLCJmb3JFYWNoIiwiYXBwbHkiLCJvbmNlIiwicmVtb3ZlIiwiSHR0cENsaWVudCIsImdldCIsInVybCIsIm9wdGlvbnMiLCJyZXF1ZXN0IiwicG9zdCIsImRlZmF1bHRPcHRpb25zIiwibWV0aG9kIiwiYm9keSIsImhlYWRlcnMiLCJyZXF1ZXN0T3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInB1dCIsImRlbGV0ZSIsImNyZWRlbnRpYWxzIiwiZmV0Y2giLCJ0aGVuIiwicmVxdWVzdFN0YXR1cyIsInJlc3BvbnNlVHlwZSIsInN0YXR1cyIsIlByb21pc2UiLCJyZXNvbHZlIiwidGV4dCIsInJlamVjdCIsInN0YXR1c1RleHQiLCJjb250ZW50VHlwZSIsImpzb24iLCJjb252ZXJ0Rm9ybURhdGFUb1F1ZXJ5U3RyaW5nIiwiVVJMU2VhcmNoUGFyYW1zIiwiaHR0cENsaWVudEluc3RhbmNlIiwiRmllbGRWYWxpZGF0aW9uIiwiZm9ybSIsImNvdXBvbkZpZWxkIiwic3VibWl0QnV0dG9uIiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImNvdXBvbkNvZGUiLCJ0b0xvd2VyQ2FzZSIsInJlbW92ZUVycm9yVGV4dCIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsImRpc3BhdGNoRXZlbnQiLCJDdXN0b21FdmVudCIsImVycm9yIiwiYXBwZW5kRXJyb3JUZXh0IiwibWVzc2FnZSIsImJ1dHRvbnMiLCJoYW5kbGVDbGljayIsInRhcmdldCIsInBhcmVudEVsZW1lbnQiLCJIVE1MSW5wdXRFbGVtZW50IiwiY2hhbmdlQW1vdW50IiwiZXZlbnRMaXN0ZW5lciIsIm1heCIsIm1pbiIsImlucHV0cyIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdGVwIiwiZ2V0QXR0cmlidXRlIiwiRXZlbnQiLCJmaWVsZCIsImUiLCJvbkNoYW5nZSIsInZhbGlkaXR5IiwidmFsaWQiLCJ2YWxpZGF0aW9uTWVzc2FnZSIsImdldFZhbGlkYXRpb25NZXNzYWdlIiwiYWRkIiwiZGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlIiwidmFsdWVNaXNzaW5nIiwidGl0bGUiLCJjdXN0b21FcnJvciIsImN1c3RvbU1lc3NhZ2UiLCJ0eXBlTWlzbWF0Y2giLCJwYXR0ZXJuTWlzbWF0Y2giLCJzcGFuIiwiY3JlYXRlRWxlbWVudCIsImlubmVyVGV4dCIsImFwcGVuZENoaWxkIiwiYXBwZW5kU3VjY2Vzc1RleHQiLCJsb2dpbkZvcm0iLCJmaWVsZHMiLCJmaWVsZFZhbGlkYXRpb24iLCJzdWJtaXQiLCJjYXJ0QW1vdW50IiwicGFyZW50IiwiY2FydEFtb3VudEVsZW1lbnQiLCJlbmRwb2ludCIsImxvYWRpbmdFbGVtZW50IiwiaHR0cENsaWVudCIsImFkZExvYWRpbmdTdGF0ZSIsInNldEJ1dHRvbkxvYWRpbmdTdGF0ZSIsImFqYXhSZXNwb25zZSIsInN1Y2Nlc3MiLCJTdHJpbmciLCJyZW1vdmVMb2FkaW5nU3RhdGUiLCJyZW1vdmVCdXR0b25Mb2FkaW5nU3RhdGUiLCJjYXRjaCIsImxvYWRlciIsInJlbW92ZUNoaWxkIiwiZGlzYWJsZWQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9