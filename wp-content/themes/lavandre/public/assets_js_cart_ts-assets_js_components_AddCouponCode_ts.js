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
      console.log('ajaxResponse.success === false', data);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXNzZXRzX2pzX2NhcnRfdHMtYXNzZXRzX2pzX2NvbXBvbmVudHNfQWRkQ291cG9uQ29kZV90cy5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBQ0EsTUFBTUssSUFBTixDQUFXO0FBQ1BDLEVBQUFBLFdBQVcsR0FBRztBQUNWLFNBQUtDLFlBQUwsR0FBb0JQLDREQUFwQjtBQUNBLFNBQUtRLFlBQUwsR0FBcUIsR0FBRUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFPLDBCQUE5QztBQUNBLFNBQUtDLFlBQUwsR0FBb0JDLFFBQVEsQ0FBQ0MsY0FBVCxDQUF3QixhQUF4QixDQUFwQjtBQUNBLFNBQUtDLGFBQUwsR0FBcUIsSUFBckI7QUFDQSxTQUFLQyxxQkFBTCxHQUE2QixHQUE3QjtBQUNBLFNBQUtDLGNBQUwsR0FBc0IsSUFBdEI7QUFDQSxTQUFLVixZQUFMLENBQWtCVyxFQUFsQixDQUFxQix1QkFBckIsRUFBK0NDLE9BQUQsSUFBYTtBQUN2RCxVQUFJLENBQUNBLE9BQUQsSUFBWSxDQUFDQSxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFNBQWpDLEVBQTRDO0FBQ3hDO0FBQ0g7O0FBQ0QsVUFBSUYsT0FBTyxDQUFDQyxPQUFSLENBQWdCQyxTQUFoQixLQUE4QixZQUFsQyxFQUFnRDtBQUM1QyxhQUFLQyxlQUFMLENBQXFCSCxPQUFyQjtBQUNBLGFBQUtJLFVBQUw7QUFDSDtBQUNKLEtBUkQ7QUFTSDs7QUFDREEsRUFBQUEsVUFBVSxHQUFHO0FBQ1QsUUFBSSxDQUFDLEtBQUtYLFlBQVYsRUFBd0I7QUFDcEI7QUFDSDs7QUFDRCxTQUFLWSx3QkFBTDtBQUNBLFNBQUtDLGlCQUFMO0FBQ0g7O0FBQ2MsTUFBWEMsV0FBVyxHQUFHO0FBQ2QsV0FBTyxLQUFLZCxZQUFaO0FBQ0g7O0FBQ2MsTUFBWGMsV0FBVyxDQUFDUCxPQUFELEVBQVU7QUFDckIsU0FBS1AsWUFBTCxHQUFvQk8sT0FBcEI7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QStCLE1BQS9CO0FBQ0g7QUFDTSxTQUFTTCx3QkFBVCxDQUFrQ2pLLE1BQWxDLEVBQTBDO0FBQzdDQSxFQUFBQSxNQUFNLENBQUNxSyxRQUFQLEdBQWtCLEtBQWxCO0FBQ0FySyxFQUFBQSxNQUFNLENBQUN1SyxlQUFQLENBQXVCLFNBQXZCO0FBQ0g7Ozs7Ozs7Ozs7O0FDbEVEIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY2FydC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21tb24vQ29tcG9uZW50LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbW1vbi9FdmVudEVtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tbW9uL0h0dHBDbGllbnQudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9BZGRDb3Vwb25Db2RlLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQW1vdW50U2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9GaWVsZFZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9jYXJ0LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvcmVxdWVzdHMudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3F1YW50aXR5LnBjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgY2FtZWxjYXNlICovXG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgQWRkQ291cG9uQ29kZSBmcm9tICcuL2NvbXBvbmVudHMvQWRkQ291cG9uQ29kZSc7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSAnLi9jb21wb25lbnRzL0Ftb3VudFNlbGVjdG9yJztcbmltcG9ydCBhZGRPclVwZGF0ZUNhcnRUb3RhbHMgZnJvbSAnLi91dGlsL2NhcnQnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi91dGlsL3JlcXVlc3RzJztcbmNsYXNzIENhcnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuX2NhcnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1jYXJ0Jyk7XG4gICAgICAgIHRoaXMudXBkYXRlVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMudXBkYXRlVGltZW91dER1cmF0aW9uID0gODAwO1xuICAgICAgICB0aGlzLmFtb3VudFNlbGVjdG9yID0gbnVsbDtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIub24oJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAoIWVsZW1lbnQgfHwgIWVsZW1lbnQuZGF0YXNldC5wYW5lbE5hbWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kYXRhc2V0LnBhbmVsTmFtZSA9PT0gJ2NhcnQtcGFuZWwnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYXJ0UGFuZWwoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NhcnRFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ291cG9uQ29kZUZvcm0oKTtcbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBnZXQgY2FydEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJ0RWxlbWVudDtcbiAgICB9XG4gICAgc2V0IGNhcnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fY2FydEVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBnZXQgY2FydFNob3J0Q29kZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnRFbGVtZW50ICYmIHRoaXMuX2NhcnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY3VzdG9tLWNhcnQtLW1pbmknKVxuICAgICAgICAgICAgPyAnW3d3X2N1c3RvbV9jYXJ0X21pbmldJ1xuICAgICAgICAgICAgOiAnW3d3X2N1c3RvbV9jYXJ0XSc7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmFtb3VudFNlbGVjdG9yID0gbmV3IEFtb3VudFNlbGVjdG9yKHRoaXMuX2NhcnRFbGVtZW50KTtcbiAgICAgICAgdGhpcy5hbW91bnRTZWxlY3Rvci5pbml0aWFsaXplKCk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUNhcnRJdGVtQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGVsZXRlLWl0ZW1dJykpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbGV0ZUNhcnRJdGVtQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZGVsZXRlQ2FydEl0ZW1CdXR0b25zW2ldO1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVsZXRlQ2FydEl0ZW0oYnV0dG9uKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCdhbW91bnQtY2hhbmdlZCcsIChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jYXJ0RWxlbWVudC5jb250YWlucyhpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy51cGRhdGVUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnVwZGF0ZVRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydEl0ZW0oaW5wdXQpO1xuICAgICAgICAgICAgfSwgdGhpcy51cGRhdGVUaW1lb3V0RHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQ291cG9uQ29kZUxpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZW1vdmUtY29kZV0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZW1vdmVDb3Vwb25Db2RlTGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBhbmNob3IgPSByZW1vdmVDb3Vwb25Db2RlTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLWxvb3AtZnVuY1xuICAgICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gYW5jaG9yLmRhdGFzZXQucmVtb3ZlQ29kZTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhbmNob3IuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdjb3Vwb25fY29kZV9yZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICBjb2RlLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydGNvZGU6IHRoaXMuY2FydFNob3J0Q29kZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCB0aGlzLl9jYXJ0RWxlbWVudCwgdGhpcy51cGRhdGVDYXJ0LmJpbmQodGhpcyksICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhbmNob3IuaHJlZjtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaXRpYWxpemVDb3Vwb25Db2RlRm9ybSgpIHtcbiAgICAgICAgY29uc3QgY291cG9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3Vwb24tY29kZS1mb3JtJyk7XG4gICAgICAgIGlmIChjb3Vwb25Gb3JtID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWRkQ291cG9uQ29kZSA9IG5ldyBBZGRDb3Vwb25Db2RlKGNvdXBvbkZvcm0pO1xuICAgICAgICBhZGRDb3Vwb25Db2RlLmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgdXBkYXRlQ2FydEl0ZW0oaW5wdXQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBpdGVtID0gaW5wdXQuY2xvc2VzdCgnLmN1c3RvbS1jYXJ0X19pdGVtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJRCA9IGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbS5kYXRhc2V0LnByb2R1Y3RJZDtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9uX2lkID0gKF9hID0gTnVtYmVyKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbS5kYXRhc2V0LnZhcmlhdGlvbklkKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMDtcbiAgICAgICAgaWYgKCFpdGVtIHx8ICFwcm9kdWN0SUQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gaXRlbSBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVfY2FydF9pdGVtJyxcbiAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJRCxcbiAgICAgICAgICAgIHF1YW50aXR5OiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHZhcmlhdGlvbl9pZDogdmFyaWF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzaG9ydGNvZGU6IHRoaXMuY2FydFNob3J0Q29kZVxuICAgICAgICB9O1xuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIHRoaXMuX2NhcnRFbGVtZW50LCB0aGlzLnVwZGF0ZUNhcnQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGRlbGV0ZUNhcnRJdGVtKGJ1dHRvbikge1xuICAgICAgICBjb25zdCBpdGVtID0gYnV0dG9uLmNsb3Nlc3QoJy5jdXN0b20tY2FydF9faXRlbScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SUQgPSBidXR0b24uZGF0YXNldC5wcm9kdWN0SWQ7XG4gICAgICAgIGNvbnN0IHZhcmlhdGlvbklEID0gYnV0dG9uLmRhdGFzZXQudmFyaWF0aW9uSWQgfHwgJyc7XG4gICAgICAgIGlmICghaXRlbSB8fCAhcHJvZHVjdElEIHx8ICF2YXJpYXRpb25JRCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBpdGVtIGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2RlbGV0ZV9jYXJ0X2l0ZW0nLFxuICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElELFxuICAgICAgICAgICAgdmFyaWF0aW9uX2lkOiB2YXJpYXRpb25JRCxcbiAgICAgICAgICAgIHNob3J0Y29kZTogdGhpcy5jYXJ0U2hvcnRDb2RlXG4gICAgICAgIH07XG4gICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgdGhpcy5fY2FydEVsZW1lbnQsIHRoaXMudXBkYXRlQ2FydC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgdXBkYXRlQ2FydChjb250ZW50KSB7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRDb250ZW50KGNvbnRlbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0Q2FydENvbnRlbnQoKTtcbiAgICB9XG4gICAgZ2V0Q2FydENvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVfY2FydCcsXG4gICAgICAgICAgICBzaG9ydGNvZGU6IHRoaXMuY2FydFNob3J0Q29kZVxuICAgICAgICB9O1xuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIHRoaXMuX2NhcnRFbGVtZW50LCB0aGlzLnVwZGF0ZUNhcnRDb250ZW50LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICB1cGRhdGVDYXJ0Q29udGVudChyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5kYXRhIHx8ICFyZXNwb25zZS5kYXRhLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IHJlc3BvbnNlLmRhdGE7XG4gICAgICAgIHRoaXMuX2NhcnRFbGVtZW50Lm91dGVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuX2NhcnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1jYXJ0Jyk7XG4gICAgICAgIGFkZE9yVXBkYXRlQ2FydFRvdGFscyhyZXNwb25zZS5kYXRhWyd0b3RhbC1jYXJ0LXF1YW50aXR5J10pO1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIGhhbmRsZUNhcnRQYW5lbChwYW5lbCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcGFuZWwucXVlcnlTZWxlY3RvcignI2N1c3RvbS1jYXJ0Jyk7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXJ0RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FydCgpO1xuICAgIH1cbn1cbmNvbnN0IGNhcnQgPSBuZXcgQ2FydCgpO1xuY2FydC5pbml0aWFsaXplKCk7XG5leHBvcnQgeyBDYXJ0IH07XG5leHBvcnQgZGVmYXVsdCBjYXJ0O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHsgfVxufVxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIHRyaWdnZXJlZCBldmVudFxuICAgICAqL1xuICAgIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2V2ZW50XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGxpc3RlbmVyIGZyb20gZXZlbnQgZW1pdHRlciBsaXN0XG4gICAgICovXG4gICAgcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ldmVudHNbZXZlbnRdICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudF0uaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBmcm9tIGV2ZW50IGVtaXR0ZXIgbGlzdFxuICAgICAqL1xuICAgIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2V2ZW50XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudF07XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXRzIGV2ZW50IHNvIHRoYXQgYW55IGxpc3RlbmVycyBjYW4gcGVyZm9ybSB0aGVpciBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmV2ZW50c1tldmVudF0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbCBldmVudCBvbmNlIGFuZCB0aGVuIHJlbW92ZSBpdCBmcm9tIHRoZSBldmVudCBlbWl0dGVyIGxpc3RcbiAgICAgKi9cbiAgICBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgICAgICBjb25zdCByZW1vdmUgPSB0aGlzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRXZlbnRFbWl0dGVyQ2xhc3MgfTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBFdmVudEVtaXR0ZXJDbGFzcygpO1xuIiwiY2xhc3MgSHR0cENsaWVudCB7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBHRVQgcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIFVSTFxuICAgICAqL1xuICAgIGdldCh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIFBPU1QgcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIFVSTFxuICAgICAqL1xuICAgIHBvc3QodXJsLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBQVVQgcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIFVSTFxuICAgICAqL1xuICAgIHB1dCh1cmwsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwdXQnLFxuICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgREVMRVRFIHJlcXVlc3QgdG8gdGhlIHNwZWNpZmllZCBVUkxcbiAgICAgKi9cbiAgICBkZWxldGUodXJsLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludGVybmFsIG1ldGhvZCB3aGljaCBpbnZva2VzIHRoZSBmZXRjaCBBUEkgYW5kIHJldHVybnMgYSBwcm9taXNlLlxuICAgICAqL1xuICAgIHJlcXVlc3QodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpLnRoZW4odGhpcy5yZXF1ZXN0U3RhdHVzKS50aGVuKHRoaXMucmVzcG9uc2VUeXBlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRoZSByZXNwb25zZSBzdGF0dXNDb2RlIGFuZCByZXR1cm5zIHRoZSBjb3JyZWN0IHZhbHVlXG4gICAgICovXG4gICAgcmVxdWVzdFN0YXR1cyhyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDUwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKCh0ZXh0KSA9PiBQcm9taXNlLnJlamVjdCh0ZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFByb21pc2UgcmVzcG9uc2UgdG8gY29udGVudFR5cGUgYmFzZWQgb24gaGVhZGVyXG4gICAgICovXG4gICAgcmVzcG9uc2VUeXBlKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgICBpZiAoY29udGVudFR5cGUgIT09IG51bGwgJiYgY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIEZvcm1EYXRhIG9iamVjdCBpbnRvIGEgVVJMU2VhcmNoUGFyYW1zIHN0cmluZ1xuICAgICAqL1xuICAgIGNvbnZlcnRGb3JtRGF0YVRvUXVlcnlTdHJpbmcoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhKS50b1N0cmluZygpO1xuICAgIH1cbn1cbmNvbnN0IGh0dHBDbGllbnRJbnN0YW5jZSA9IG5ldyBIdHRwQ2xpZW50KCk7XG5leHBvcnQgZGVmYXVsdCBodHRwQ2xpZW50SW5zdGFuY2U7XG4iLCJpbXBvcnQgY2FydCBmcm9tICcuLi9jYXJ0JztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuL0ZpZWxkVmFsaWRhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBZGRDb3Vwb25Db2RlIHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmNhcnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1jYXJ0Jyk7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuY291cG9uRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJjb3Vwb24tY29kZVwiXScpO1xuICAgICAgICB0aGlzLnN1Ym1pdEJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGxldCBjb3Vwb25Db2RlID0gZm9ybURhdGEuZ2V0KCdjb3Vwb24tY29kZScpIHx8ICcnO1xuICAgICAgICAgICAgaWYgKCFjb3Vwb25Db2RlIHx8IHR5cGVvZiBjb3Vwb25Db2RlICE9PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgICAgIGNvdXBvbkNvZGUgPSAnJztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnY291cG9uX2NvZGVfYWRkJyxcbiAgICAgICAgICAgICAgICBjb2RlOiBjb3Vwb25Db2RlLnRvTG93ZXJDYXNlKClcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBGaWVsZFZhbGlkYXRpb24ucmVtb3ZlRXJyb3JUZXh0KHRoaXMuY291cG9uRmllbGQpO1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCB0aGlzLmNhcnRFbGVtZW50LCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCBldmVudCwgdGhpcy5zdWJtaXRCdXR0b24pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlc3BvbnNlLCBldmVudCkge1xuICAgICAgICBjb25zdCBwYW5lbCA9IHRoaXMuZm9ybS5jbG9zZXN0KCdbZGF0YS1wYW5lbC1uYW1lXScpO1xuICAgICAgICBpZiAocGFuZWwpIHtcbiAgICAgICAgICAgIHBhbmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgY2FydC51cGRhdGVDYXJ0Q29udGVudChyZXNwb25zZSk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShlcnJvcikge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kRXJyb3JUZXh0KHRoaXMuY291cG9uRmllbGQsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19xdWFudGl0eS5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW1vdW50U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5idXR0b25zID0gW107XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSB0YXJnZXQuY2xvc2VzdCgnYnV0dG9uJyk7XG4gICAgICAgICAgICBpZiAoIWJ1dHRvbiB8fCAhYnV0dG9uLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGJ1dHRvbi5wYXJlbnRFbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5xdHknKTtcbiAgICAgICAgICAgIGlmICghaW5wdXQgfHwgIShpbnB1dCBpbnN0YW5jZW9mIEhUTUxJbnB1dEVsZW1lbnQpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jaGFuZ2VBbW91bnQoYnV0dG9uLCBpbnB1dCk7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuYnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnLnBsdXMtYW1vdW50LCAubWludXMtYW1vdW50JykpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBldmVudExpc3RlbmVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnB1dCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmICghaW5wdXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoaW5wdXQubWF4ICYmICtpbnB1dC52YWx1ZSA+ICtpbnB1dC5tYXgpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0Lm1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChpbnB1dC5taW4gJiYgK2lucHV0LnZhbHVlIDwgK2lucHV0Lm1pbikge1xuICAgICAgICAgICAgICAgIGlucHV0LnZhbHVlID0gaW5wdXQubWluO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIuZW1pdCgnYW1vdW50LWNoYW5nZWQnLCBldmVudC50YXJnZXQpO1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCBpbnB1dHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0LnF0eScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGlucHV0cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGlucHV0ID0gaW5wdXRzW2luZGV4XTtcbiAgICAgICAgICAgIGlucHV0LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGV2ZW50TGlzdGVuZXIpO1xuICAgICAgICAgICAgaW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnRMaXN0ZW5lcik7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMuYnV0dG9ucy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuYnV0dG9uc1tpbmRleF07XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDbGljay5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjaGFuZ2VBbW91bnQodGFyZ2V0LCBpbnB1dCkge1xuICAgICAgICBsZXQgdmFsdWUgPSBOdW1iZXIoaW5wdXQudmFsdWUpO1xuICAgICAgICBjb25zdCBzdGVwID0gTnVtYmVyKGlucHV0LmdldEF0dHJpYnV0ZSgnc3RlcCcpKTtcbiAgICAgICAgaWYgKHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3BsdXMtYW1vdW50JykpIHtcbiAgICAgICAgICAgIHZhbHVlICs9IHN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB2YWx1ZSAtPSBzdGVwO1xuICAgICAgICB9XG4gICAgICAgIGlucHV0LnZhbHVlID0gdmFsdWUudG9TdHJpbmcoKTtcbiAgICAgICAgaW5wdXQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGFtb3VudFNlbGVjdG9yID0gbmV3IEFtb3VudFNlbGVjdG9yKHNlbGVjdG9yKTtcbiAgICAgICAgYW1vdW50U2VsZWN0b3IuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIEZpZWxkVmFsaWRhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZmllbGQpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudHMgPSBbJ2NoYW5nZScsICd2YWxpZGF0ZSddO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHNbaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZSkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZS50YXJnZXQsIGUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnZhbGlkJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2hhbmdlKGZpZWxkLCBldmVudCkge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24ucmVtb3ZlRXJyb3JUZXh0KHRoaXMuZmllbGQpO1xuICAgICAgICBpZiAodGhpcy5maWVsZC52YWxpZGl0eS52YWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlID0gdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZShmaWVsZC52YWxpZGl0eSwgZmllbGQpO1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kRXJyb3JUZXh0KHRoaXMuZmllbGQsIHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgIH1cbiAgICBnZXRWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGl0eSwgZmllbGQpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlID0gJ1Z1bCBlZW4gZ2VsZGlnZSB3YWFyZGUgaW4uJztcbiAgICAgICAgaWYgKHZhbGlkaXR5LnZhbHVlTWlzc2luZyA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkLmRhdGFzZXQudmFsdWVNaXNzaW5nIHx8IGZpZWxkLnRpdGxlIHx8ICdEaXQgdmVsZCBpcyB2ZXJwbGljaHQuJztcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsaWRpdHkuY3VzdG9tRXJyb3IgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC5kYXRhc2V0LmN1c3RvbU1lc3NhZ2UgfHwgZmllbGQudGl0bGUgfHwgZGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWxpZGl0eS50eXBlTWlzbWF0Y2ggPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC50aXRsZSB8fCBkZWZhdWx0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbGlkaXR5LnBhdHRlcm5NaXNtYXRjaCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZpZWxkLnRpdGxlIHx8IGRlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlO1xuICAgIH1cbiAgICBzdGF0aWMgYXBwZW5kRXJyb3JUZXh0KGZpZWxkLCB2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTUEFOJyk7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgndmFsaWRhdGlvbi1tZXNzYWdlJyk7XG4gICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgIChfYSA9IGZpZWxkLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICB9XG4gICAgc3RhdGljIGFwcGVuZFN1Y2Nlc3NUZXh0KGZpZWxkLCB2YWxpZGF0aW9uTWVzc2FnZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTUEFOJyk7XG4gICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgndmFsaWRhdGlvbi1tZXNzYWdlJywgJ3ZhbGlkYXRpb24tbWVzc2FnZS0tc3VjY2VzcycpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICAoX2EgPSBmaWVsZC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIHN0YXRpYyByZW1vdmVFcnJvclRleHQoZmllbGQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gKChfYSA9IGZpZWxkLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKCcudmFsaWRhdGlvbi1tZXNzYWdlJykpIHx8IG51bGw7XG4gICAgICAgIGlmICghZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGVsZW1lbnQucmVtb3ZlKCk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBsb2dpbkZvcm0gPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWZpZWxkLXZhbGlkYXRpb25dJykpO1xuICAgICAgICBsb2dpbkZvcm0uZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbShmb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0Om5vdChbdHlwZT1cImhpZGRlblwiXSknKSk7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZFZhbGlkYXRpb24gPSBuZXcgRmllbGRWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgICAgICBmaWVsZFZhbGlkYXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgICAgICAgICAgc3VibWl0QnV0dG9uID09PSBudWxsIHx8IHN1Ym1pdEJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgICAgICAgICAgdmFsaWQgPSBmaWVsZC52YWxpZGl0eS52YWxpZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gYWRkT3JVcGRhdGVDYXJ0VG90YWxzKGNhcnRBbW91bnQpIHtcbiAgICBjb25zdCBwYXJlbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1hbW91bnQtaWNvbicpO1xuICAgIGlmIChwYXJlbnQgPT09IG51bGwpIHtcbiAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdObyBjYXJ0IGFtb3VudCB3cmFwcGVyIGZvdW5kJyk7XG4gICAgfVxuICAgIGxldCBjYXJ0QW1vdW50RWxlbWVudCA9IHBhcmVudC5xdWVyeVNlbGVjdG9yKCcuY2FydC1hbW91bnQtY291bnRlcicpO1xuICAgIGlmICghY2FydEFtb3VudCB8fCBjYXJ0QW1vdW50ID09PSAnMCcpIHtcbiAgICAgICAgY2FydEFtb3VudEVsZW1lbnQgPT09IG51bGwgfHwgY2FydEFtb3VudEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGNhcnRBbW91bnRFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGlmIChjYXJ0QW1vdW50RWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICBjYXJ0QW1vdW50RWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NQQU4nKTtcbiAgICAgICAgY2FydEFtb3VudEVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnY2FydC1hbW91bnQtY291bnRlcicpO1xuICAgICAgICBwYXJlbnQuYXBwZW5kQ2hpbGQoY2FydEFtb3VudEVsZW1lbnQpO1xuICAgIH1cbiAgICBjYXJ0QW1vdW50RWxlbWVudC5pbm5lclRleHQgPSBjYXJ0QW1vdW50O1xufVxuIiwiaW1wb3J0IGh0dHBDbGllbnRJbnN0YW5jZSBmcm9tICcuLi9jb21tb24vSHR0cENsaWVudCc7XG5leHBvcnQgZnVuY3Rpb24gc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIGVuZHBvaW50LCBsb2FkaW5nRWxlbWVudCwgb25TdWNjZXNzLCBvbkZhaWx1cmUsIGV2ZW50LCBidXR0b24pIHtcbiAgICBjb25zdCBodHRwQ2xpZW50ID0gaHR0cENsaWVudEluc3RhbmNlO1xuICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgIG1ldGhvZDogJ3Bvc3QnLFxuICAgICAgICBib2R5OiBuZXcgVVJMU2VhcmNoUGFyYW1zKGRhdGEpLnRvU3RyaW5nKCksXG4gICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCdcbiAgICAgICAgfVxuICAgIH07XG4gICAgaWYgKGxvYWRpbmdFbGVtZW50KVxuICAgICAgICBhZGRMb2FkaW5nU3RhdGUobG9hZGluZ0VsZW1lbnQpO1xuICAgIGlmIChidXR0b24pXG4gICAgICAgIHNldEJ1dHRvbkxvYWRpbmdTdGF0ZShidXR0b24pO1xuICAgIGh0dHBDbGllbnRcbiAgICAgICAgLnBvc3QoZW5kcG9pbnQsICcnLCBvcHRpb25zKVxuICAgICAgICAudGhlbigocmVzcG9uc2UpID0+IG5ldyBQcm9taXNlKCgpID0+IHtcbiAgICAgICAgY29uc3QgYWpheFJlc3BvbnNlID0gcmVzcG9uc2U7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhamF4UmVzcG9uc2UuZGF0YTtcbiAgICAgICAgaWYgKGFqYXhSZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgY29uc29sZS5sb2coJ2FqYXhSZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZScsIGRhdGEpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFN0cmluZyhkYXRhKSk7XG4gICAgICAgIH1cbiAgICAgICAgb25TdWNjZXNzKGFqYXhSZXNwb25zZSwgZXZlbnQpO1xuICAgICAgICBpZiAobG9hZGluZ0VsZW1lbnQpXG4gICAgICAgICAgICByZW1vdmVMb2FkaW5nU3RhdGUobG9hZGluZ0VsZW1lbnQpO1xuICAgICAgICBpZiAoYnV0dG9uKVxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uTG9hZGluZ1N0YXRlKGJ1dHRvbik7XG4gICAgfSkpXG4gICAgICAgIC5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgLy8gY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIGlmIChsb2FkaW5nRWxlbWVudClcbiAgICAgICAgICAgIHJlbW92ZUxvYWRpbmdTdGF0ZShsb2FkaW5nRWxlbWVudCk7XG4gICAgICAgIGlmIChidXR0b24pXG4gICAgICAgICAgICByZW1vdmVCdXR0b25Mb2FkaW5nU3RhdGUoYnV0dG9uKTtcbiAgICAgICAgaWYgKG9uRmFpbHVyZSlcbiAgICAgICAgICAgIG9uRmFpbHVyZShlcnJvcik7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkTG9hZGluZ1N0YXRlKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1jYXJ0X19pdGVtLS1sb2FkaW5nJyk7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ3d3LWxvYWRlcicpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobG9hZGVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMb2FkaW5nU3RhdGUoaXRlbSkge1xuICAgIGlmICghaXRlbSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLWNhcnRfX2l0ZW0tLWxvYWRpbmcnKTtcbiAgICBjb25zdCBsb2FkZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy53dy1sb2FkZXInKTtcbiAgICBpZiAobG9hZGVyKSB7XG4gICAgICAgIGxvYWRlci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGxvYWRlcik7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEJ1dHRvbkxvYWRpbmdTdGF0ZShidXR0b24pIHtcbiAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAndHJ1ZScpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJ1dHRvbkxvYWRpbmdTdGF0ZShidXR0b24pIHtcbiAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdsb2FkaW5nJyk7XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiQWRkQ291cG9uQ29kZSIsIkFtb3VudFNlbGVjdG9yIiwiYWRkT3JVcGRhdGVDYXJ0VG90YWxzIiwic2VuZEFqYXhSZXF1ZXN0IiwiQ2FydCIsImNvbnN0cnVjdG9yIiwiZXZlbnRFbWl0dGVyIiwiYWpheEVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJfY2FydEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXBkYXRlVGltZW91dCIsInVwZGF0ZVRpbWVvdXREdXJhdGlvbiIsImFtb3VudFNlbGVjdG9yIiwib24iLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVsTmFtZSIsImhhbmRsZUNhcnRQYW5lbCIsImluaXRpYWxpemUiLCJpbml0aWFsaXplQ291cG9uQ29kZUZvcm0iLCJzZXRFdmVudExpc3RlbmVycyIsImNhcnRFbGVtZW50IiwiY2FydFNob3J0Q29kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiZGVsZXRlQ2FydEl0ZW1CdXR0b25zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImkiLCJsZW5ndGgiLCJidXR0b24iLCJhZGRFdmVudExpc3RlbmVyIiwiZGVsZXRlQ2FydEl0ZW0iLCJpbnB1dCIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJ1cGRhdGVDYXJ0SXRlbSIsInJlbW92ZUNvdXBvbkNvZGVMaW5rcyIsImluZGV4IiwiYW5jaG9yIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvZGUiLCJyZW1vdmVDb2RlIiwiaHJlZiIsImRhdGEiLCJhY3Rpb24iLCJzaG9ydGNvZGUiLCJ1cGRhdGVDYXJ0IiwiYmluZCIsImNvdXBvbkZvcm0iLCJhZGRDb3Vwb25Db2RlIiwiX2EiLCJpdGVtIiwiY2xvc2VzdCIsInByb2R1Y3RJRCIsInByb2R1Y3RJZCIsInZhcmlhdGlvbl9pZCIsIk51bWJlciIsInZhcmlhdGlvbklkIiwiRXJyb3IiLCJwcm9kdWN0X2lkIiwicXVhbnRpdHkiLCJ2YWx1ZSIsInRvU3RyaW5nIiwidmFyaWF0aW9uSUQiLCJjb250ZW50IiwidXBkYXRlQ2FydENvbnRlbnQiLCJnZXRDYXJ0Q29udGVudCIsInJlc3BvbnNlIiwib3V0ZXJIVE1MIiwicGFuZWwiLCJxdWVyeVNlbGVjdG9yIiwiY2FydCIsIkNvbXBvbmVudCIsIm9uSW5pdCIsInNlbGVjdG9yIiwiRXZlbnRFbWl0dGVyQ2xhc3MiLCJldmVudHMiLCJsaXN0ZW5lciIsInB1c2giLCJyZW1vdmVMaXN0ZW5lciIsImluZGV4T2YiLCJzcGxpY2UiLCJ1bmRlZmluZWQiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwiYXJncyIsImZvckVhY2giLCJhcHBseSIsIm9uY2UiLCJyZW1vdmUiLCJIdHRwQ2xpZW50IiwiZ2V0IiwidXJsIiwib3B0aW9ucyIsInJlcXVlc3QiLCJwb3N0IiwiZGVmYXVsdE9wdGlvbnMiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInJlcXVlc3RPcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwicHV0IiwiZGVsZXRlIiwiY3JlZGVudGlhbHMiLCJmZXRjaCIsInRoZW4iLCJyZXF1ZXN0U3RhdHVzIiwicmVzcG9uc2VUeXBlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0ZXh0IiwicmVqZWN0Iiwic3RhdHVzVGV4dCIsImNvbnRlbnRUeXBlIiwianNvbiIsImNvbnZlcnRGb3JtRGF0YVRvUXVlcnlTdHJpbmciLCJVUkxTZWFyY2hQYXJhbXMiLCJodHRwQ2xpZW50SW5zdGFuY2UiLCJGaWVsZFZhbGlkYXRpb24iLCJmb3JtIiwiY291cG9uRmllbGQiLCJzdWJtaXRCdXR0b24iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY291cG9uQ29kZSIsInRvTG93ZXJDYXNlIiwicmVtb3ZlRXJyb3JUZXh0Iiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZXJyb3IiLCJhcHBlbmRFcnJvclRleHQiLCJtZXNzYWdlIiwiYnV0dG9ucyIsImhhbmRsZUNsaWNrIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJjaGFuZ2VBbW91bnQiLCJldmVudExpc3RlbmVyIiwibWF4IiwibWluIiwiaW5wdXRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0ZXAiLCJnZXRBdHRyaWJ1dGUiLCJFdmVudCIsImZpZWxkIiwiZSIsIm9uQ2hhbmdlIiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiZ2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJhZGQiLCJkZWZhdWx0VmFsaWRhdGlvbk1lc3NhZ2UiLCJ2YWx1ZU1pc3NpbmciLCJ0aXRsZSIsImN1c3RvbUVycm9yIiwiY3VzdG9tTWVzc2FnZSIsInR5cGVNaXNtYXRjaCIsInBhdHRlcm5NaXNtYXRjaCIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmRTdWNjZXNzVGV4dCIsImxvZ2luRm9ybSIsImZpZWxkcyIsImZpZWxkVmFsaWRhdGlvbiIsInN1Ym1pdCIsImNhcnRBbW91bnQiLCJwYXJlbnQiLCJjYXJ0QW1vdW50RWxlbWVudCIsImVuZHBvaW50IiwibG9hZGluZ0VsZW1lbnQiLCJodHRwQ2xpZW50IiwiYWRkTG9hZGluZ1N0YXRlIiwic2V0QnV0dG9uTG9hZGluZ1N0YXRlIiwiYWpheFJlc3BvbnNlIiwic3VjY2VzcyIsImNvbnNvbGUiLCJsb2ciLCJTdHJpbmciLCJyZW1vdmVMb2FkaW5nU3RhdGUiLCJyZW1vdmVCdXR0b25Mb2FkaW5nU3RhdGUiLCJjYXRjaCIsImxvYWRlciIsInJlbW92ZUNoaWxkIiwiZGlzYWJsZWQiLCJzZXRBdHRyaWJ1dGUiLCJyZW1vdmVBdHRyaWJ1dGUiXSwic291cmNlUm9vdCI6IiJ9