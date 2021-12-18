(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~cart~checkout~home~productDetail~sustainability"],{

/***/ "./assets/css/components/_quantity.pcss":
/*!**********************************************!*\
  !*** ./assets/css/components/_quantity.pcss ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/cart.ts":
/*!***************************!*\
  !*** ./assets/js/cart.ts ***!
  \***************************/
/*! exports provided: Cart, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Cart", function() { return Cart; });
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./common/EventEmitter */ "./assets/js/common/EventEmitter.ts");
/* harmony import */ var _components_AddCouponCode__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AddCouponCode */ "./assets/js/components/AddCouponCode.ts");
/* harmony import */ var _components_AmountSelector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/AmountSelector */ "./assets/js/components/AmountSelector.ts");
/* harmony import */ var _util_cart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./util/cart */ "./assets/js/util/cart.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/requests */ "./assets/js/util/requests.ts");






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
      const anchor = removeCouponCodeLinks[index];
      anchor.addEventListener('click', event => {
        event.preventDefault();
        const code = anchor.dataset.removeCode;

        if (!code) {
          window.location.href = anchor.href;
          return;
        }

        const data = {
          action: 'coupon_code_remove',
          code: code,
          shortcode: this.cartShortCode
        };
        Object(_util_requests__WEBPACK_IMPORTED_MODULE_4__["sendAjaxRequest"])(data, this.ajaxEndpoint, this._cartElement, this.updateCart.bind(this), () => {
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
    Object(_util_requests__WEBPACK_IMPORTED_MODULE_4__["sendAjaxRequest"])(data, this.ajaxEndpoint, this._cartElement, this.updateCart.bind(this));
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
    Object(_util_requests__WEBPACK_IMPORTED_MODULE_4__["sendAjaxRequest"])(data, this.ajaxEndpoint, this._cartElement, this.updateCart.bind(this));
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
    Object(_util_requests__WEBPACK_IMPORTED_MODULE_4__["sendAjaxRequest"])(data, this.ajaxEndpoint, this._cartElement, this.updateCartContent.bind(this));
  }

  updateCartContent(response) {
    if (!response || !response.data || !response.data['content']) {
      return;
    }

    const content = response.data['content'];
    this._cartElement.outerHTML = content;
    this._cartElement = document.getElementById('custom-cart');
    Object(_util_cart__WEBPACK_IMPORTED_MODULE_3__["addOrUpdateCartTotals"])(response.data['total-cart-quantity']);
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Component; });
class Component {
  static onInit(selector = document) {}

}

/***/ }),

/***/ "./assets/js/common/EventEmitter.ts":
/*!******************************************!*\
  !*** ./assets/js/common/EventEmitter.ts ***!
  \******************************************/
/*! exports provided: EventEmitterClass, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EventEmitterClass", function() { return EventEmitterClass; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AddCouponCode; });
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
      _FieldValidation__WEBPACK_IMPORTED_MODULE_2__["FieldValidation"].removeErrorText(this.couponField);
      Object(_util_requests__WEBPACK_IMPORTED_MODULE_1__["sendAjaxRequest"])(data, this.ajaxEndpoint, this.cartElement, this.onSuccess.bind(this), this.onFailure.bind(this), event, this.submitButton);
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
    _FieldValidation__WEBPACK_IMPORTED_MODULE_2__["FieldValidation"].appendErrorText(this.couponField, error.message);
    throw error;
  }

}

/***/ }),

/***/ "./assets/js/components/AmountSelector.ts":
/*!************************************************!*\
  !*** ./assets/js/components/AmountSelector.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AmountSelector; });
/* harmony import */ var _css_components_quantity_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_quantity.pcss */ "./assets/css/components/_quantity.pcss");
/* harmony import */ var _css_components_quantity_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_components_quantity_pcss__WEBPACK_IMPORTED_MODULE_0__);
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

      let button = target.closest('button');

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

      if (+input.value > +input.max) {
        input.value = input.max;
      }

      if (+input.value < +input.min) {
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
/*! exports provided: FieldValidation */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FieldValidation", function() { return FieldValidation; });
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
    let defaultValidationMessage = 'Vul een geldige waarde in.';

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
/*! exports provided: addOrUpdateCartTotals */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addOrUpdateCartTotals", function() { return addOrUpdateCartTotals; });
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
/*! exports provided: sendAjaxRequest, addLoadingState, removeLoadingState, setButtonLoadingState, removeButtonLoadingState */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sendAjaxRequest", function() { return sendAjaxRequest; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addLoadingState", function() { return addLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeLoadingState", function() { return removeLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setButtonLoadingState", function() { return setButtonLoadingState; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeButtonLoadingState", function() { return removeButtonLoadingState; });
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

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3F1YW50aXR5LnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbW1vbi9Db21wb25lbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbW1vbi9FdmVudEVtaXR0ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbW1vbi9IdHRwQ2xpZW50LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FkZENvdXBvbkNvZGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQW1vdW50U2VsZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRmllbGRWYWxpZGF0aW9uLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsL2NhcnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwvcmVxdWVzdHMudHMiXSwibmFtZXMiOlsiQ2FydCIsImNvbnN0cnVjdG9yIiwiZXZlbnRFbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiYWpheEVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJfY2FydEVsZW1lbnQiLCJkb2N1bWVudCIsImdldEVsZW1lbnRCeUlkIiwidXBkYXRlVGltZW91dCIsInVwZGF0ZVRpbWVvdXREdXJhdGlvbiIsImFtb3VudFNlbGVjdG9yIiwib24iLCJlbGVtZW50IiwiZGF0YXNldCIsInBhbmVsTmFtZSIsImhhbmRsZUNhcnRQYW5lbCIsImluaXRpYWxpemUiLCJpbml0aWFsaXplQ291cG9uQ29kZUZvcm0iLCJzZXRFdmVudExpc3RlbmVycyIsImNhcnRFbGVtZW50IiwiY2FydFNob3J0Q29kZSIsImNsYXNzTGlzdCIsImNvbnRhaW5zIiwiQW1vdW50U2VsZWN0b3IiLCJkZWxldGVDYXJ0SXRlbUJ1dHRvbnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiaSIsImxlbmd0aCIsImJ1dHRvbiIsImFkZEV2ZW50TGlzdGVuZXIiLCJkZWxldGVDYXJ0SXRlbSIsImlucHV0IiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsInVwZGF0ZUNhcnRJdGVtIiwicmVtb3ZlQ291cG9uQ29kZUxpbmtzIiwiaW5kZXgiLCJhbmNob3IiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29kZSIsInJlbW92ZUNvZGUiLCJocmVmIiwiZGF0YSIsImFjdGlvbiIsInNob3J0Y29kZSIsInNlbmRBamF4UmVxdWVzdCIsInVwZGF0ZUNhcnQiLCJiaW5kIiwiY291cG9uRm9ybSIsImFkZENvdXBvbkNvZGUiLCJBZGRDb3Vwb25Db2RlIiwiX2EiLCJpdGVtIiwiY2xvc2VzdCIsInByb2R1Y3RJRCIsInByb2R1Y3RJZCIsInZhcmlhdGlvbl9pZCIsIk51bWJlciIsInZhcmlhdGlvbklkIiwiRXJyb3IiLCJwcm9kdWN0X2lkIiwicXVhbnRpdHkiLCJ2YWx1ZSIsInRvU3RyaW5nIiwidmFyaWF0aW9uSUQiLCJjb250ZW50IiwidXBkYXRlQ2FydENvbnRlbnQiLCJnZXRDYXJ0Q29udGVudCIsInJlc3BvbnNlIiwib3V0ZXJIVE1MIiwiYWRkT3JVcGRhdGVDYXJ0VG90YWxzIiwicGFuZWwiLCJxdWVyeVNlbGVjdG9yIiwiY2FydCIsIkNvbXBvbmVudCIsIm9uSW5pdCIsInNlbGVjdG9yIiwiRXZlbnRFbWl0dGVyQ2xhc3MiLCJldmVudHMiLCJsaXN0ZW5lciIsInB1c2giLCJyZW1vdmVMaXN0ZW5lciIsImluZGV4T2YiLCJzcGxpY2UiLCJ1bmRlZmluZWQiLCJyZW1vdmVBbGxMaXN0ZW5lcnMiLCJlbWl0IiwiYXJncyIsImZvckVhY2giLCJhcHBseSIsIm9uY2UiLCJyZW1vdmUiLCJIdHRwQ2xpZW50IiwiZ2V0IiwidXJsIiwib3B0aW9ucyIsInJlcXVlc3QiLCJwb3N0IiwiZGVmYXVsdE9wdGlvbnMiLCJtZXRob2QiLCJib2R5IiwiaGVhZGVycyIsInJlcXVlc3RPcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwicHV0IiwiZGVsZXRlIiwiY3JlZGVudGlhbHMiLCJmZXRjaCIsInRoZW4iLCJyZXF1ZXN0U3RhdHVzIiwicmVzcG9uc2VUeXBlIiwic3RhdHVzIiwiUHJvbWlzZSIsInJlc29sdmUiLCJ0ZXh0IiwicmVqZWN0Iiwic3RhdHVzVGV4dCIsImNvbnRlbnRUeXBlIiwianNvbiIsImNvbnZlcnRGb3JtRGF0YVRvUXVlcnlTdHJpbmciLCJVUkxTZWFyY2hQYXJhbXMiLCJodHRwQ2xpZW50SW5zdGFuY2UiLCJmb3JtIiwiY291cG9uRmllbGQiLCJzdWJtaXRCdXR0b24iLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwiY291cG9uQ29kZSIsInRvTG93ZXJDYXNlIiwiRmllbGRWYWxpZGF0aW9uIiwicmVtb3ZlRXJyb3JUZXh0Iiwib25TdWNjZXNzIiwib25GYWlsdXJlIiwiZGlzcGF0Y2hFdmVudCIsIkN1c3RvbUV2ZW50IiwiZXJyb3IiLCJhcHBlbmRFcnJvclRleHQiLCJtZXNzYWdlIiwiYnV0dG9ucyIsImhhbmRsZUNsaWNrIiwidGFyZ2V0IiwicGFyZW50RWxlbWVudCIsIkhUTUxJbnB1dEVsZW1lbnQiLCJjaGFuZ2VBbW91bnQiLCJldmVudExpc3RlbmVyIiwibWF4IiwibWluIiwiaW5wdXRzIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInN0ZXAiLCJnZXRBdHRyaWJ1dGUiLCJFdmVudCIsImZpZWxkIiwiZSIsIm9uQ2hhbmdlIiwidmFsaWRpdHkiLCJ2YWxpZCIsInZhbGlkYXRpb25NZXNzYWdlIiwiZ2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJhZGQiLCJkZWZhdWx0VmFsaWRhdGlvbk1lc3NhZ2UiLCJ2YWx1ZU1pc3NpbmciLCJ0aXRsZSIsImN1c3RvbUVycm9yIiwiY3VzdG9tTWVzc2FnZSIsInR5cGVNaXNtYXRjaCIsInBhdHRlcm5NaXNtYXRjaCIsInNwYW4iLCJjcmVhdGVFbGVtZW50IiwiaW5uZXJUZXh0IiwiYXBwZW5kQ2hpbGQiLCJhcHBlbmRTdWNjZXNzVGV4dCIsImxvZ2luRm9ybSIsImZpZWxkcyIsImZpZWxkVmFsaWRhdGlvbiIsInN1Ym1pdCIsImNhcnRBbW91bnQiLCJwYXJlbnQiLCJjYXJ0QW1vdW50RWxlbWVudCIsImVuZHBvaW50IiwibG9hZGluZ0VsZW1lbnQiLCJodHRwQ2xpZW50IiwiYWRkTG9hZGluZ1N0YXRlIiwic2V0QnV0dG9uTG9hZGluZ1N0YXRlIiwiYWpheFJlc3BvbnNlIiwic3VjY2VzcyIsIlN0cmluZyIsInJlbW92ZUxvYWRpbmdTdGF0ZSIsInJlbW92ZUJ1dHRvbkxvYWRpbmdTdGF0ZSIsImNhdGNoIiwibG9hZGVyIiwicmVtb3ZlQ2hpbGQiLCJkaXNhYmxlZCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxJQUFOLENBQVc7QUFDUEMsYUFBVyxHQUFHO0FBQ1YsU0FBS0MsWUFBTCxHQUFvQkMsNERBQXBCO0FBQ0EsU0FBS0MsWUFBTCxHQUFxQixHQUFFQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQU8sMEJBQTlDO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFNBQUtDLHFCQUFMLEdBQTZCLEdBQTdCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFNBQUtYLFlBQUwsQ0FBa0JZLEVBQWxCLENBQXFCLHVCQUFyQixFQUErQ0MsT0FBRCxJQUFhO0FBQ3ZELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkMsU0FBakMsRUFBNEM7QUFDeEM7QUFDSDs7QUFDRCxVQUFJRixPQUFPLENBQUNDLE9B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LENBQW1CLDRCQUFuQjtBQUNBLFFBQU0rQixNQUFNLEdBQUc1TCxRQUFRLENBQUNzSyxhQUFULENBQXVCLEtBQXZCLENBQWY7QUFDQXNCLFFBQU0sQ0FBQzdLLFNBQVAsQ0FBaUI4SSxHQUFqQixDQUFxQixXQUFyQjtBQUNBNUcsTUFBSSxDQUFDdUgsV0FBTCxDQUFpQm9CLE1BQWpCO0FBQ0g7QUFDTSxTQUFTSCxrQkFBVCxDQUE0QnhJLElBQTVCLEVBQWtDO0FBQ3JDLE1BQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDREEsTUFBSSxDQUFDbEMsU0FBTCxDQUFleUUsTUFBZixDQUFzQiw0QkFBdEI7QUFDQSxRQUFNb0csTUFBTSxHQUFHM0ksSUFBSSxDQUFDb0IsYUFBTCxDQUFtQixZQUFuQixDQUFmOztBQUNBLE1BQUl1SCxNQUFKLEVBQVk7QUFDUkEsVUFBTSxDQUFDakQsYUFBUCxDQUFxQmtELFdBQXJCLENBQWlDRCxNQUFqQztBQUNIO0FBQ0o7QUFDTSxTQUFTUCxxQkFBVCxDQUErQjdKLE1BQS9CLEVBQXVDO0FBQzFDQSxRQUFNLENBQUNzSyxRQUFQLEdBQWtCLElBQWxCO0FBQ0F0SyxRQUFNLENBQUN1SyxZQUFQLENBQW9CLFNBQXBCLEVBQStCLE1BQS9CO0FBQ0g7QUFDTSxTQUFTTCx3QkFBVCxDQUFrQ2xLLE1BQWxDLEVBQTBDO0FBQzdDQSxRQUFNLENBQUNzSyxRQUFQLEdBQWtCLEtBQWxCO0FBQ0F0SyxRQUFNLENBQUN3SyxlQUFQLENBQXVCLFNBQXZCO0FBQ0gsQyIsImZpbGUiOiJhcHB+Y2FydH5jaGVja291dH5ob21lfnByb2R1Y3REZXRhaWx+c3VzdGFpbmFiaWxpdHkuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCIuL2NvbW1vbi9FdmVudEVtaXR0ZXJcIjtcbmltcG9ydCBBZGRDb3Vwb25Db2RlIGZyb20gXCIuL2NvbXBvbmVudHMvQWRkQ291cG9uQ29kZVwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuL2NvbXBvbmVudHMvQW1vdW50U2VsZWN0b3JcIjtcbmltcG9ydCB7IGFkZE9yVXBkYXRlQ2FydFRvdGFscyB9IGZyb20gXCIuL3V0aWwvY2FydFwiO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSBcIi4vdXRpbC9yZXF1ZXN0c1wiO1xuY2xhc3MgQ2FydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5fY2FydEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWNhcnQnKTtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lb3V0RHVyYXRpb24gPSA4MDA7XG4gICAgICAgIHRoaXMuYW1vdW50U2VsZWN0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5vbigndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5kYXRhc2V0LnBhbmVsTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChlbGVtZW50LmRhdGFzZXQucGFuZWxOYW1lID09PSAnY2FydC1wYW5lbCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUNhcnRQYW5lbChlbGVtZW50KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5fY2FydEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemVDb3Vwb25Db2RlRm9ybSgpO1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIGdldCBjYXJ0RWxlbWVudCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnRFbGVtZW50O1xuICAgIH1cbiAgICBzZXQgY2FydEVsZW1lbnQoZWxlbWVudCkge1xuICAgICAgICB0aGlzLl9jYXJ0RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBjYXJ0U2hvcnRDb2RlKCkge1xuICAgICAgICByZXR1cm4gKHRoaXMuX2NhcnRFbGVtZW50ICYmIHRoaXMuX2NhcnRFbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnY3VzdG9tLWNhcnQtLW1pbmknKSkgPyAnW3d3X2N1c3RvbV9jYXJ0X21pbmldJyA6ICdbd3dfY3VzdG9tX2NhcnRdJztcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuYW1vdW50U2VsZWN0b3IgPSBuZXcgQW1vdW50U2VsZWN0b3IodGhpcy5fY2FydEVsZW1lbnQpO1xuICAgICAgICB0aGlzLmFtb3VudFNlbGVjdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgY29uc3QgZGVsZXRlQ2FydEl0ZW1CdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1kZWxldGUtaXRlbV0nKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZGVsZXRlQ2FydEl0ZW1CdXR0b25zLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBidXR0b24gPSBkZWxldGVDYXJ0SXRlbUJ1dHRvbnNbaV07XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMuZGVsZXRlQ2FydEl0ZW0oYnV0dG9uKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIub24oJ2Ftb3VudC1jaGFuZ2VkJywgKGlucHV0KSA9PiB7XG4gICAgICAgICAgICBpZiAoIXRoaXMuX2NhcnRFbGVtZW50LmNvbnRhaW5zKGlucHV0KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLnVwZGF0ZVRpbWVvdXQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRoaXMudXBkYXRlVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZVRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy51cGRhdGVDYXJ0SXRlbShpbnB1dCk7XG4gICAgICAgICAgICB9LCB0aGlzLnVwZGF0ZVRpbWVvdXREdXJhdGlvbik7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCByZW1vdmVDb3Vwb25Db2RlTGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJlbW92ZS1jb2RlXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHJlbW92ZUNvdXBvbkNvZGVMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGFuY2hvciA9IHJlbW92ZUNvdXBvbkNvZGVMaW5rc1tpbmRleF07XG4gICAgICAgICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGNvZGUgPSBhbmNob3IuZGF0YXNldC5yZW1vdmVDb2RlO1xuICAgICAgICAgICAgICAgIGlmICghY29kZSkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFuY2hvci5ocmVmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2NvdXBvbl9jb2RlX3JlbW92ZScsXG4gICAgICAgICAgICAgICAgICAgIGNvZGU6IGNvZGUsXG4gICAgICAgICAgICAgICAgICAgIHNob3J0Y29kZTogdGhpcy5jYXJ0U2hvcnRDb2RlXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIHRoaXMuX2NhcnRFbGVtZW50LCB0aGlzLnVwZGF0ZUNhcnQuYmluZCh0aGlzKSwgKCkgPT4geyB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGFuY2hvci5ocmVmOyB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxuICAgIGluaXRpYWxpemVDb3Vwb25Db2RlRm9ybSgpIHtcbiAgICAgICAgY29uc3QgY291cG9uRm9ybSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3Vwb24tY29kZS1mb3JtJyk7XG4gICAgICAgIGlmIChjb3Vwb25Gb3JtID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWRkQ291cG9uQ29kZSA9IG5ldyBBZGRDb3Vwb25Db2RlKGNvdXBvbkZvcm0pO1xuICAgICAgICBhZGRDb3Vwb25Db2RlLmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgdXBkYXRlQ2FydEl0ZW0oaW5wdXQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBpdGVtID0gaW5wdXQuY2xvc2VzdCgnLmN1c3RvbS1jYXJ0X19pdGVtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJRCA9IGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbS5kYXRhc2V0LnByb2R1Y3RJZDtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9uX2lkID0gKF9hID0gTnVtYmVyKGl0ZW0gPT09IG51bGwgfHwgaXRlbSA9PT0gdm9pZCAwID8gdm9pZCAwIDogaXRlbS5kYXRhc2V0LnZhcmlhdGlvbklkKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogMDtcbiAgICAgICAgaWYgKCFpdGVtIHx8ICFwcm9kdWN0SUQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gaXRlbSBmb3VuZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVfY2FydF9pdGVtJyxcbiAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHByb2R1Y3RJRCxcbiAgICAgICAgICAgIHF1YW50aXR5OiBpbnB1dC52YWx1ZSxcbiAgICAgICAgICAgIHZhcmlhdGlvbl9pZDogdmFyaWF0aW9uX2lkLnRvU3RyaW5nKCksXG4gICAgICAgICAgICBzaG9ydGNvZGU6IHRoaXMuY2FydFNob3J0Q29kZVxuICAgICAgICB9O1xuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIHRoaXMuX2NhcnRFbGVtZW50LCB0aGlzLnVwZGF0ZUNhcnQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGRlbGV0ZUNhcnRJdGVtKGJ1dHRvbikge1xuICAgICAgICBjb25zdCBpdGVtID0gYnV0dG9uLmNsb3Nlc3QoJy5jdXN0b20tY2FydF9faXRlbScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SUQgPSBidXR0b24uZGF0YXNldC5wcm9kdWN0SWQ7XG4gICAgICAgIGNvbnN0IHZhcmlhdGlvbklEID0gYnV0dG9uLmRhdGFzZXQudmFyaWF0aW9uSWQgfHwgJyc7XG4gICAgICAgIGlmICghaXRlbSB8fCAhcHJvZHVjdElEIHx8ICF2YXJpYXRpb25JRCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBpdGVtIGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2RlbGV0ZV9jYXJ0X2l0ZW0nLFxuICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElELFxuICAgICAgICAgICAgdmFyaWF0aW9uX2lkOiB2YXJpYXRpb25JRCxcbiAgICAgICAgICAgIHNob3J0Y29kZTogdGhpcy5jYXJ0U2hvcnRDb2RlXG4gICAgICAgIH07XG4gICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgdGhpcy5fY2FydEVsZW1lbnQsIHRoaXMudXBkYXRlQ2FydC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgdXBkYXRlQ2FydChjb250ZW50KSB7XG4gICAgICAgIGlmIChjb250ZW50KSB7XG4gICAgICAgICAgICB0aGlzLnVwZGF0ZUNhcnRDb250ZW50KGNvbnRlbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZ2V0Q2FydENvbnRlbnQoKTtcbiAgICB9XG4gICAgZ2V0Q2FydENvbnRlbnQoKSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICd1cGRhdGVfY2FydCcsXG4gICAgICAgICAgICBzaG9ydGNvZGU6IHRoaXMuY2FydFNob3J0Q29kZVxuICAgICAgICB9O1xuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIHRoaXMuX2NhcnRFbGVtZW50LCB0aGlzLnVwZGF0ZUNhcnRDb250ZW50LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICB1cGRhdGVDYXJ0Q29udGVudChyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlIHx8ICFyZXNwb25zZS5kYXRhIHx8ICFyZXNwb25zZS5kYXRhWydjb250ZW50J10pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjb250ZW50ID0gcmVzcG9uc2UuZGF0YVsnY29udGVudCddO1xuICAgICAgICB0aGlzLl9jYXJ0RWxlbWVudC5vdXRlckhUTUwgPSBjb250ZW50O1xuICAgICAgICB0aGlzLl9jYXJ0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tY2FydCcpO1xuICAgICAgICBhZGRPclVwZGF0ZUNhcnRUb3RhbHMocmVzcG9uc2UuZGF0YVsndG90YWwtY2FydC1xdWFudGl0eSddKTtcbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBoYW5kbGVDYXJ0UGFuZWwocGFuZWwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhbmVsLnF1ZXJ5U2VsZWN0b3IoJyNjdXN0b20tY2FydCcpO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuY2FydEVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnVwZGF0ZUNhcnQoKTtcbiAgICB9XG59XG5jb25zdCBjYXJ0ID0gbmV3IENhcnQoKTtcbmNhcnQuaW5pdGlhbGl6ZSgpO1xuZXhwb3J0IHsgQ2FydCB9O1xuZXhwb3J0IGRlZmF1bHQgY2FydDtcbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbXBvbmVudCB7XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgfVxufVxuIiwiY2xhc3MgRXZlbnRFbWl0dGVyQ2xhc3Mge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50cyA9IHt9O1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBsaXN0ZW5lciBjYWxsYmFjayBmdW5jdGlvbiB1cG9uIHRyaWdnZXJlZCBldmVudFxuICAgICAqL1xuICAgIG9uKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2V2ZW50XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XSA9IFtdO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5wdXNoKGxpc3RlbmVyKTtcbiAgICAgICAgcmV0dXJuICgpID0+IHRoaXMucmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUmVtb3ZlIGxpc3RlbmVyIGZyb20gZXZlbnQgZW1pdHRlciBsaXN0XG4gICAgICovXG4gICAgcmVtb3ZlTGlzdGVuZXIoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ldmVudHNbZXZlbnRdICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5kZXggPSB0aGlzLmV2ZW50c1tldmVudF0uaW5kZXhPZihsaXN0ZW5lcik7XG4gICAgICAgIGlmIChpbmRleCA+IC0xKSB7XG4gICAgICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uc3BsaWNlKGluZGV4LCAxKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgYWxsIGxpc3RlbmVycyBmcm9tIGV2ZW50IGVtaXR0ZXIgbGlzdFxuICAgICAqL1xuICAgIHJlbW92ZUFsbExpc3RlbmVycyhldmVudCkge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2V2ZW50XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIGRlbGV0ZSB0aGlzLmV2ZW50c1tldmVudF07XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEVtaXRzIGV2ZW50IHNvIHRoYXQgYW55IGxpc3RlbmVycyBjYW4gcGVyZm9ybSB0aGVpciBjYWxsYmFjayBmdW5jdGlvblxuICAgICAqL1xuICAgIGVtaXQoZXZlbnQsIC4uLmFyZ3MpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmV2ZW50c1tldmVudF0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmV2ZW50c1tldmVudF0uZm9yRWFjaCgobGlzdGVuZXIpID0+IGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpKTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2FsbCBldmVudCBvbmNlIGFuZCB0aGVuIHJlbW92ZSBpdCBmcm9tIHRoZSBldmVudCBlbWl0dGVyIGxpc3RcbiAgICAgKi9cbiAgICBvbmNlKGV2ZW50LCBsaXN0ZW5lcikge1xuICAgICAgICBjb25zdCByZW1vdmUgPSB0aGlzLm9uKGV2ZW50LCAoLi4uYXJncykgPT4ge1xuICAgICAgICAgICAgcmVtb3ZlKCk7XG4gICAgICAgICAgICBsaXN0ZW5lci5hcHBseSh0aGlzLCBhcmdzKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRXZlbnRFbWl0dGVyQ2xhc3MgfTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBFdmVudEVtaXR0ZXJDbGFzcygpO1xuIiwiY2xhc3MgSHR0cENsaWVudCB7XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBHRVQgcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIFVSTFxuICAgICAqL1xuICAgIGdldCh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIG9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIFBPU1QgcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIFVSTFxuICAgICAqL1xuICAgIHBvc3QodXJsLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAncG9zdCcsXG4gICAgICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBQVVQgcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIFVSTFxuICAgICAqL1xuICAgIHB1dCh1cmwsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwdXQnLFxuICAgICAgICAgICAgYm9keTogZGF0YSxcbiAgICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL3gtd3d3LWZvcm0tdXJsZW5jb2RlZDsgY2hhcnNldD1VVEYtOCdcbiAgICAgICAgICAgIH1cbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgREVMRVRFIHJlcXVlc3QgdG8gdGhlIHNwZWNpZmllZCBVUkxcbiAgICAgKi9cbiAgICBkZWxldGUodXJsLCBkYXRhLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnZGVsZXRlJyxcbiAgICAgICAgICAgIGJvZHk6IGRhdGFcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgcmVxdWVzdE9wdGlvbnMgPSBPYmplY3QuYXNzaWduKE9iamVjdC5hc3NpZ24oe30sIGRlZmF1bHRPcHRpb25zKSwgb3B0aW9ucyk7XG4gICAgICAgIHJldHVybiB0aGlzLnJlcXVlc3QodXJsLCByZXF1ZXN0T3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIEludGVybmFsIG1ldGhvZCB3aGljaCBpbnZva2VzIHRoZSBmZXRjaCBBUEkgYW5kIHJldHVybnMgYSBwcm9taXNlLlxuICAgICAqL1xuICAgIHJlcXVlc3QodXJsLCBvcHRpb25zKSB7XG4gICAgICAgIGNvbnN0IGRlZmF1bHRPcHRpb25zID0ge1xuICAgICAgICAgICAgbWV0aG9kOiAnZ2V0JyxcbiAgICAgICAgICAgIGNyZWRlbnRpYWxzOiAnc2FtZS1vcmlnaW4nLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdBY2NlcHQnOiAnYXBwbGljYXRpb24vanNvbicsXG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJ1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIGZldGNoKHVybCwgcmVxdWVzdE9wdGlvbnMpXG4gICAgICAgICAgICAudGhlbih0aGlzLnJlcXVlc3RTdGF0dXMpXG4gICAgICAgICAgICAudGhlbih0aGlzLnJlc3BvbnNlVHlwZSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENoZWNrcyB0aGUgcmVzcG9uc2Ugc3RhdHVzQ29kZSBhbmQgcmV0dXJucyB0aGUgY29ycmVjdCB2YWx1ZVxuICAgICAqL1xuICAgIHJlcXVlc3RTdGF0dXMocmVzcG9uc2UpIHtcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN0YXR1cyA+PSAyMDAgJiYgcmVzcG9uc2Uuc3RhdHVzIDwgMzAwKSB7XG4gICAgICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKHJlc3BvbnNlKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDQwMCAmJiByZXNwb25zZS5zdGF0dXMgPCA1MDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS50ZXh0KCkudGhlbigodGV4dCkgPT4gUHJvbWlzZS5yZWplY3QodGV4dCkpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IocmVzcG9uc2Uuc3RhdHVzVGV4dCkpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBQcm9taXNlIHJlc3BvbnNlIHRvIGNvbnRlbnRUeXBlIGJhc2VkIG9uIGhlYWRlclxuICAgICAqL1xuICAgIHJlc3BvbnNlVHlwZShyZXNwb25zZSkge1xuICAgICAgICBjb25zdCBjb250ZW50VHlwZSA9IHJlc3BvbnNlLmhlYWRlcnMuZ2V0KCdjb250ZW50LXR5cGUnKTtcbiAgICAgICAgaWYgKGNvbnRlbnRUeXBlICE9PSBudWxsICYmIGNvbnRlbnRUeXBlLmluZGV4T2YoJ2FwcGxpY2F0aW9uL2pzb24nKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIHJldHVybiByZXNwb25zZS5qc29uKCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ29udmVydHMgYSBGb3JtRGF0YSBvYmplY3QgaW50byBhIFVSTFNlYXJjaFBhcmFtcyBzdHJpbmdcbiAgICAgKi9cbiAgICBjb252ZXJ0Rm9ybURhdGFUb1F1ZXJ5U3RyaW5nKGRhdGEpIHtcbiAgICAgICAgcmV0dXJuIG5ldyBVUkxTZWFyY2hQYXJhbXMoZGF0YSkudG9TdHJpbmcoKTtcbiAgICB9XG59XG5jb25zdCBodHRwQ2xpZW50SW5zdGFuY2UgPSBuZXcgSHR0cENsaWVudCgpO1xuZXhwb3J0IGRlZmF1bHQgaHR0cENsaWVudEluc3RhbmNlO1xuIiwiaW1wb3J0IGNhcnQgZnJvbSBcIi4uL2NhcnRcIjtcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gXCIuLi91dGlsL3JlcXVlc3RzXCI7XG5pbXBvcnQgeyBGaWVsZFZhbGlkYXRpb24gfSBmcm9tIFwiLi9GaWVsZFZhbGlkYXRpb25cIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFkZENvdXBvbkNvZGUge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuY2FydEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWNhcnQnKTtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgICAgdGhpcy5jb3Vwb25GaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImNvdXBvbi1jb2RlXCJdJyk7XG4gICAgICAgIHRoaXMuc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICAgICAgbGV0IGNvdXBvbkNvZGUgPSBmb3JtRGF0YS5nZXQoJ2NvdXBvbi1jb2RlJykgfHwgJyc7XG4gICAgICAgICAgICBpZiAoIWNvdXBvbkNvZGUgfHwgdHlwZW9mIGNvdXBvbkNvZGUgIT09ICdzdHJpbmcnKSB7XG4gICAgICAgICAgICAgICAgY291cG9uQ29kZSA9ICcnO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdjb3Vwb25fY29kZV9hZGQnLFxuICAgICAgICAgICAgICAgIGNvZGU6IGNvdXBvbkNvZGUudG9Mb3dlckNhc2UoKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEZpZWxkVmFsaWRhdGlvbi5yZW1vdmVFcnJvclRleHQodGhpcy5jb3Vwb25GaWVsZCk7XG4gICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIHRoaXMuY2FydEVsZW1lbnQsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIGV2ZW50LCB0aGlzLnN1Ym1pdEJ1dHRvbik7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzcG9uc2UsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHBhbmVsID0gdGhpcy5mb3JtLmNsb3Nlc3QoJ1tkYXRhLXBhbmVsLW5hbWVdJyk7XG4gICAgICAgIGlmIChwYW5lbCkge1xuICAgICAgICAgICAgcGFuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RvZ2dsZScpKTtcbiAgICAgICAgfVxuICAgICAgICBjYXJ0LnVwZGF0ZUNhcnRDb250ZW50KHJlc3BvbnNlKTtcbiAgICB9XG4gICAgb25GYWlsdXJlKGVycm9yKSB7XG4gICAgICAgIEZpZWxkVmFsaWRhdGlvbi5hcHBlbmRFcnJvclRleHQodGhpcy5jb3Vwb25GaWVsZCwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX3F1YW50aXR5LnBjc3MnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiLi4vY29tbW9uL0V2ZW50RW1pdHRlclwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW1vdW50U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5idXR0b25zID0gW107XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gdGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpO1xuICAgICAgICAgICAgaWYgKCFidXR0b24gfHwgIWJ1dHRvbi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucXR5Jyk7XG4gICAgICAgICAgICBpZiAoIWlucHV0IHx8ICEoaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQW1vdW50KGJ1dHRvbiwgaW5wdXQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbHVzLWFtb3VudCwgLm1pbnVzLWFtb3VudCcpKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCtpbnB1dC52YWx1ZSA+ICtpbnB1dC5tYXgpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0Lm1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgraW5wdXQudmFsdWUgPCAraW5wdXQubWluKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5taW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdhbW91bnQtY2hhbmdlZCcsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQucXR5JykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5wdXRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dHNbaW5kZXhdO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5idXR0b25zW2luZGV4XTtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZUFtb3VudCh0YXJnZXQsIGlucHV0KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IE51bWJlcihpbnB1dC52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoaW5wdXQuZ2V0QXR0cmlidXRlKCdzdGVwJykpO1xuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGx1cy1hbW91bnQnKSkge1xuICAgICAgICAgICAgdmFsdWUgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlIC09IHN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgYW1vdW50U2VsZWN0b3IgPSBuZXcgQW1vdW50U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICBhbW91bnRTZWxlY3Rvci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZpZWxkVmFsaWRhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZmllbGQpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudHMgPSBbJ2NoYW5nZScsICd2YWxpZGF0ZSddO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHNbaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZSkgPT4geyB0aGlzLm9uQ2hhbmdlKGUudGFyZ2V0LCBlKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnZhbGlkJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2hhbmdlKGZpZWxkLCBldmVudCkge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24ucmVtb3ZlRXJyb3JUZXh0KHRoaXMuZmllbGQpO1xuICAgICAgICBpZiAodGhpcy5maWVsZC52YWxpZGl0eS52YWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlID0gdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZShmaWVsZC52YWxpZGl0eSwgZmllbGQpO1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kRXJyb3JUZXh0KHRoaXMuZmllbGQsIHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgIH1cbiAgICBnZXRWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGl0eSwgZmllbGQpIHtcbiAgICAgICAgbGV0IGRlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZSA9ICdWdWwgZWVuIGdlbGRpZ2Ugd2FhcmRlIGluLic7XG4gICAgICAgIGlmICh2YWxpZGl0eS52YWx1ZU1pc3NpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC5kYXRhc2V0LnZhbHVlTWlzc2luZyB8fCBmaWVsZC50aXRsZSB8fCAnRGl0IHZlbGQgaXMgdmVycGxpY2h0Lic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbGlkaXR5LmN1c3RvbUVycm9yID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGQuZGF0YXNldC5jdXN0b21NZXNzYWdlIHx8IGZpZWxkLnRpdGxlIHx8IGRlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsaWRpdHkudHlwZU1pc21hdGNoID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGQudGl0bGUgfHwgZGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC50aXRsZSB8fCBkZWZhdWx0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICB9XG4gICAgc3RhdGljIGFwcGVuZEVycm9yVGV4dChmaWVsZCwgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb24tbWVzc2FnZScpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICAoX2EgPSBmaWVsZC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIHN0YXRpYyBhcHBlbmRTdWNjZXNzVGV4dChmaWVsZCwgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb24tbWVzc2FnZScsICd2YWxpZGF0aW9uLW1lc3NhZ2UtLXN1Y2Nlc3MnKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgKF9hID0gZmllbGQucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlRXJyb3JUZXh0KGZpZWxkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICgoX2EgPSBmaWVsZC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcignLnZhbGlkYXRpb24tbWVzc2FnZScpKSB8fCBudWxsO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWVsZC12YWxpZGF0aW9uXScpKTtcbiAgICAgICAgbG9naW5Gb3JtLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pJykpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWxpZGF0aW9uID0gbmV3IEZpZWxkVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbiA9PT0gbnVsbCB8fCBzdWJtaXRCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmllbGQudmFsaWRpdHkudmFsaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRPclVwZGF0ZUNhcnRUb3RhbHMoY2FydEFtb3VudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LWFtb3VudC1pY29uJyk7XG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNhcnQgYW1vdW50IHdyYXBwZXIgZm91bmQnKTtcbiAgICB9XG4gICAgbGV0IGNhcnRBbW91bnRFbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LWFtb3VudC1jb3VudGVyJyk7XG4gICAgaWYgKCFjYXJ0QW1vdW50IHx8IGNhcnRBbW91bnQgPT09ICcwJykge1xuICAgICAgICBjYXJ0QW1vdW50RWxlbWVudCA9PT0gbnVsbCB8fCBjYXJ0QW1vdW50RWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FydEFtb3VudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhcnRBbW91bnRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIGNhcnRBbW91bnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpO1xuICAgICAgICBjYXJ0QW1vdW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJ0LWFtb3VudC1jb3VudGVyJyk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjYXJ0QW1vdW50RWxlbWVudCk7XG4gICAgfVxuICAgIGNhcnRBbW91bnRFbGVtZW50LmlubmVyVGV4dCA9IGNhcnRBbW91bnQ7XG59XG4iLCJpbXBvcnQgaHR0cENsaWVudEluc3RhbmNlIGZyb20gXCIuLi9jb21tb24vSHR0cENsaWVudFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludCwgbG9hZGluZ0VsZW1lbnQsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBldmVudCwgYnV0dG9uKSB7XG4gICAgY29uc3QgaHR0cENsaWVudCA9IGh0dHBDbGllbnRJbnN0YW5jZTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhKS50b1N0cmluZygpLFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChsb2FkaW5nRWxlbWVudClcbiAgICAgICAgYWRkTG9hZGluZ1N0YXRlKGxvYWRpbmdFbGVtZW50KTtcbiAgICBpZiAoYnV0dG9uKVxuICAgICAgICBzZXRCdXR0b25Mb2FkaW5nU3RhdGUoYnV0dG9uKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoZW5kcG9pbnQsICcnLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgICAgICBjb25zdCBhamF4UmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGFqYXhSZXNwb25zZS5kYXRhO1xuICAgICAgICBpZiAoYWpheFJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoU3RyaW5nKGRhdGEpKTtcbiAgICAgICAgfVxuICAgICAgICBvblN1Y2Nlc3MoYWpheFJlc3BvbnNlLCBldmVudCk7XG4gICAgICAgIGlmIChsb2FkaW5nRWxlbWVudClcbiAgICAgICAgICAgIHJlbW92ZUxvYWRpbmdTdGF0ZShsb2FkaW5nRWxlbWVudCk7XG4gICAgICAgIGlmIChidXR0b24pXG4gICAgICAgICAgICByZW1vdmVCdXR0b25Mb2FkaW5nU3RhdGUoYnV0dG9uKTtcbiAgICB9KSkuY2F0Y2goKGVycm9yKSA9PiB7XG4gICAgICAgIC8vIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgICBpZiAobG9hZGluZ0VsZW1lbnQpXG4gICAgICAgICAgICByZW1vdmVMb2FkaW5nU3RhdGUobG9hZGluZ0VsZW1lbnQpO1xuICAgICAgICBpZiAoYnV0dG9uKVxuICAgICAgICAgICAgcmVtb3ZlQnV0dG9uTG9hZGluZ1N0YXRlKGJ1dHRvbik7XG4gICAgICAgIGlmIChvbkZhaWx1cmUpXG4gICAgICAgICAgICBvbkZhaWx1cmUoZXJyb3IpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGFkZExvYWRpbmdTdGF0ZShpdGVtKSB7XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaXRlbS5jbGFzc0xpc3QuYWRkKCdjdXN0b20tY2FydF9faXRlbS0tbG9hZGluZycpO1xuICAgIGNvbnN0IGxvYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgIGxvYWRlci5jbGFzc0xpc3QuYWRkKCd3dy1sb2FkZXInKTtcbiAgICBpdGVtLmFwcGVuZENoaWxkKGxvYWRlcik7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlTG9hZGluZ1N0YXRlKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpdGVtLmNsYXNzTGlzdC5yZW1vdmUoJ2N1c3RvbS1jYXJ0X19pdGVtLS1sb2FkaW5nJyk7XG4gICAgY29uc3QgbG9hZGVyID0gaXRlbS5xdWVyeVNlbGVjdG9yKCcud3ctbG9hZGVyJyk7XG4gICAgaWYgKGxvYWRlcikge1xuICAgICAgICBsb2FkZXIucGFyZW50RWxlbWVudC5yZW1vdmVDaGlsZChsb2FkZXIpO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRCdXR0b25Mb2FkaW5nU3RhdGUoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gdHJ1ZTtcbiAgICBidXR0b24uc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgJ3RydWUnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVCdXR0b25Mb2FkaW5nU3RhdGUoYnV0dG9uKSB7XG4gICAgYnV0dG9uLmRpc2FibGVkID0gZmFsc2U7XG4gICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnbG9hZGluZycpO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==