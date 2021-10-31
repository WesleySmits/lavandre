(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~cart~checkout~home~productDetail"],{

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

      this.initializeCouponCodeForm();

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
    const productID = input.dataset.productId;
    const variation_id = (_a = Number(input.dataset.variationId)) !== null && _a !== void 0 ? _a : 0;

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
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter */ "./assets/js/common/EventEmitter.ts");


class AmountSelector extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(selector = document) {
    super();
    this.buttons = [];
    this.eventEmitter = _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"];

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
      submitButton.addEventListener('click', event => {
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
      console.log(ajaxResponse);
      throw new Error(data);
    }

    onSuccess(ajaxResponse, event);
    if (loadingElement) removeLoadingState(loadingElement);
    if (button) removeButtonLoadingState(button);
  })).catch(error => {
    console.error(error);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2FydC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tbW9uL0NvbXBvbmVudC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tbW9uL0V2ZW50RW1pdHRlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tbW9uL0h0dHBDbGllbnQudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWRkQ291cG9uQ29kZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BbW91bnRTZWxlY3Rvci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9GaWVsZFZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwvY2FydC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC9yZXF1ZXN0cy50cyJdLCJuYW1lcyI6WyJDYXJ0IiwiY29uc3RydWN0b3IiLCJldmVudEVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJhamF4RW5kcG9pbnQiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsIm9yaWdpbiIsIl9jYXJ0RWxlbWVudCIsImRvY3VtZW50IiwiZ2V0RWxlbWVudEJ5SWQiLCJ1cGRhdGVUaW1lb3V0IiwidXBkYXRlVGltZW91dER1cmF0aW9uIiwiYW1vdW50U2VsZWN0b3IiLCJvbiIsImVsZW1lbnQiLCJkYXRhc2V0IiwicGFuZWxOYW1lIiwiaW5pdGlhbGl6ZUNvdXBvbkNvZGVGb3JtIiwiaGFuZGxlQ2FydFBhbmVsIiwiaW5pdGlhbGl6ZSIsInNldEV2ZW50TGlzdGVuZXJzIiwiY2FydEVsZW1lbnQiLCJjYXJ0U2hvcnRDb2RlIiwiY2xhc3NMaXN0IiwiY29udGFpbnMiLCJBbW91bnRTZWxlY3RvciIsImRlbGV0ZUNhcnRJdGVtQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJpIiwibGVuZ3RoIiwiYnV0dG9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsImRlbGV0ZUNhcnRJdGVtIiwiaW5wdXQiLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwidXBkYXRlQ2FydEl0ZW0iLCJyZW1vdmVDb3Vwb25Db2RlTGlua3MiLCJpbmRleCIsImFuY2hvciIsImV2ZW50IiwicHJldmVudERlZmF1bHQiLCJjb2RlIiwicmVtb3ZlQ29kZSIsImhyZWYiLCJkYXRhIiwiYWN0aW9uIiwic2hvcnRjb2RlIiwic2VuZEFqYXhSZXF1ZXN0IiwidXBkYXRlQ2FydCIsImJpbmQiLCJjb3Vwb25Gb3JtIiwiYWRkQ291cG9uQ29kZSIsIkFkZENvdXBvbkNvZGUiLCJfYSIsIml0ZW0iLCJjbG9zZXN0IiwicHJvZHVjdElEIiwicHJvZHVjdElkIiwidmFyaWF0aW9uX2lkIiwiTnVtYmVyIiwidmFyaWF0aW9uSWQiLCJFcnJvciIsInByb2R1Y3RfaWQiLCJxdWFudGl0eSIsInZhbHVlIiwidG9TdHJpbmciLCJ2YXJpYXRpb25JRCIsImNvbnRlbnQiLCJ1cGRhdGVDYXJ0Q29udGVudCIsImdldENhcnRDb250ZW50IiwicmVzcG9uc2UiLCJvdXRlckhUTUwiLCJhZGRPclVwZGF0ZUNhcnRUb3RhbHMiLCJwYW5lbCIsInF1ZXJ5U2VsZWN0b3IiLCJjYXJ0IiwiQ29tcG9uZW50Iiwib25Jbml0Iiwic2VsZWN0b3IiLCJFdmVudEVtaXR0ZXJDbGFzcyIsImV2ZW50cyIsImxpc3RlbmVyIiwicHVzaCIsInJlbW92ZUxpc3RlbmVyIiwiaW5kZXhPZiIsInNwbGljZSIsInVuZGVmaW5lZCIsInJlbW92ZUFsbExpc3RlbmVycyIsImVtaXQiLCJhcmdzIiwiZm9yRWFjaCIsImFwcGx5Iiwib25jZSIsInJlbW92ZSIsIkh0dHBDbGllbnQiLCJnZXQiLCJ1cmwiLCJvcHRpb25zIiwicmVxdWVzdCIsInBvc3QiLCJkZWZhdWx0T3B0aW9ucyIsIm1ldGhvZCIsImJvZHkiLCJoZWFkZXJzIiwicmVxdWVzdE9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJwdXQiLCJkZWxldGUiLCJjcmVkZW50aWFscyIsImZldGNoIiwidGhlbiIsInJlcXVlc3RTdGF0dXMiLCJyZXNwb25zZVR5cGUiLCJzdGF0dXMiLCJQcm9taXNlIiwicmVzb2x2ZSIsInRleHQiLCJyZWplY3QiLCJzdGF0dXNUZXh0IiwiY29udGVudFR5cGUiLCJqc29uIiwiY29udmVydEZvcm1EYXRhVG9RdWVyeVN0cmluZyIsIlVSTFNlYXJjaFBhcmFtcyIsImh0dHBDbGllbnRJbnN0YW5jZSIsImZvcm0iLCJjb3Vwb25GaWVsZCIsInN1Ym1pdEJ1dHRvbiIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjb3Vwb25Db2RlIiwidG9Mb3dlckNhc2UiLCJGaWVsZFZhbGlkYXRpb24iLCJyZW1vdmVFcnJvclRleHQiLCJvblN1Y2Nlc3MiLCJvbkZhaWx1cmUiLCJkaXNwYXRjaEV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJlcnJvciIsImFwcGVuZEVycm9yVGV4dCIsIm1lc3NhZ2UiLCJidXR0b25zIiwiaGFuZGxlQ2xpY2siLCJ0YXJnZXQiLCJwYXJlbnRFbGVtZW50IiwiSFRNTElucHV0RWxlbWVudCIsImNoYW5nZUFtb3VudCIsImV2ZW50TGlzdGVuZXIiLCJtYXgiLCJtaW4iLCJpbnB1dHMiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwic3RlcCIsImdldEF0dHJpYnV0ZSIsIkV2ZW50IiwiZmllbGQiLCJlIiwib25DaGFuZ2UiLCJ2YWxpZGl0eSIsInZhbGlkIiwidmFsaWRhdGlvbk1lc3NhZ2UiLCJnZXRWYWxpZGF0aW9uTWVzc2FnZSIsImFkZCIsImRlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZSIsInZhbHVlTWlzc2luZyIsInRpdGxlIiwiY3VzdG9tRXJyb3IiLCJjdXN0b21NZXNzYWdlIiwidHlwZU1pc21hdGNoIiwicGF0dGVybk1pc21hdGNoIiwic3BhbiIsImNyZWF0ZUVsZW1lbnQiLCJpbm5lclRleHQiLCJhcHBlbmRDaGlsZCIsImFwcGVuZFN1Y2Nlc3NUZXh0IiwibG9naW5Gb3JtIiwiZmllbGRzIiwiZmllbGRWYWxpZGF0aW9uIiwic3VibWl0IiwiY2FydEFtb3VudCIsInBhcmVudCIsImNhcnRBbW91bnRFbGVtZW50IiwiZW5kcG9pbnQiLCJsb2FkaW5nRWxlbWVudCIsImh0dHBDbGllbnQiLCJhZGRMb2FkaW5nU3RhdGUiLCJzZXRCdXR0b25Mb2FkaW5nU3RhdGUiLCJhamF4UmVzcG9uc2UiLCJzdWNjZXNzIiwiY29uc29sZSIsImxvZyIsInJlbW92ZUxvYWRpbmdTdGF0ZSIsInJlbW92ZUJ1dHRvbkxvYWRpbmdTdGF0ZSIsImNhdGNoIiwibG9hZGVyIiwicmVtb3ZlQ2hpbGQiLCJkaXNhYmxlZCIsInNldEF0dHJpYnV0ZSIsInJlbW92ZUF0dHJpYnV0ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFDQSxNQUFNQSxJQUFOLENBQVc7QUFDUEMsYUFBVyxHQUFHO0FBQ1YsU0FBS0MsWUFBTCxHQUFvQkMsNERBQXBCO0FBQ0EsU0FBS0MsWUFBTCxHQUFxQixHQUFFQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQU8sMEJBQTlDO0FBQ0EsU0FBS0MsWUFBTCxHQUFvQkMsUUFBUSxDQUFDQyxjQUFULENBQXdCLGFBQXhCLENBQXBCO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixJQUFyQjtBQUNBLFNBQUtDLHFCQUFMLEdBQTZCLEdBQTdCO0FBQ0EsU0FBS0MsY0FBTCxHQUFzQixJQUF0QjtBQUNBLFNBQUtYLFlBQUwsQ0FBa0JZLEVBQWxCLENBQXFCLHVCQUFyQixFQUErQ0MsT0FBRCxJQUFhO0FBQ3ZELFVBQUksQ0FBQ0EsT0FBRCxJQUFZLENBQUNBLE9BQU8sQ0FBQ0MsT0FBUixDQUFnQkMsU0FBakMsRUFBNEM7QUFDeEM7QUFDSDs7QUFDRCxXQUFLQyx3QkFBTDs7QUFDQSxVQUFJSCxPQUFPLENBQUNDLE9BQVIsQ0FBZ0JDLFNBQWhCLEtBQThCLFlBQWxDLEVBQWdEO0FBQzVDLGFBQUtF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QUFDREEsTUFBSSxDQUFDbEMsU0FBTCxDQUFleUUsTUFBZixDQUFzQiw0QkFBdEI7QUFDQSxRQUFNcUcsTUFBTSxHQUFHNUksSUFBSSxDQUFDb0IsYUFBTCxDQUFtQixZQUFuQixDQUFmOztBQUNBLE1BQUl3SCxNQUFKLEVBQVk7QUFDUkEsVUFBTSxDQUFDbEQsYUFBUCxDQUFxQm1ELFdBQXJCLENBQWlDRCxNQUFqQztBQUNIO0FBQ0o7QUFDTSxTQUFTUixxQkFBVCxDQUErQjdKLE1BQS9CLEVBQXVDO0FBQzFDQSxRQUFNLENBQUN1SyxRQUFQLEdBQWtCLElBQWxCO0FBQ0F2SyxRQUFNLENBQUN3SyxZQUFQLENBQW9CLFNBQXBCLEVBQStCLE1BQS9CO0FBQ0g7QUFDTSxTQUFTTCx3QkFBVCxDQUFrQ25LLE1BQWxDLEVBQTBDO0FBQzdDQSxRQUFNLENBQUN1SyxRQUFQLEdBQWtCLEtBQWxCO0FBQ0F2SyxRQUFNLENBQUN5SyxlQUFQLENBQXVCLFNBQXZCO0FBQ0gsQyIsImZpbGUiOiJhcHB+Y2FydH5jaGVja291dH5ob21lfnByb2R1Y3REZXRhaWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCIuL2NvbW1vbi9FdmVudEVtaXR0ZXJcIjtcbmltcG9ydCBBZGRDb3Vwb25Db2RlIGZyb20gXCIuL2NvbXBvbmVudHMvQWRkQ291cG9uQ29kZVwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuL2NvbXBvbmVudHMvQW1vdW50U2VsZWN0b3JcIjtcbmltcG9ydCB7IGFkZE9yVXBkYXRlQ2FydFRvdGFscyB9IGZyb20gXCIuL3V0aWwvY2FydFwiO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSBcIi4vdXRpbC9yZXF1ZXN0c1wiO1xuY2xhc3MgQ2FydCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5fY2FydEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY3VzdG9tLWNhcnQnKTtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy51cGRhdGVUaW1lb3V0RHVyYXRpb24gPSA4MDA7XG4gICAgICAgIHRoaXMuYW1vdW50U2VsZWN0b3IgPSBudWxsO1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5vbigndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGlmICghZWxlbWVudCB8fCAhZWxlbWVudC5kYXRhc2V0LnBhbmVsTmFtZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvdXBvbkNvZGVGb3JtKCk7XG4gICAgICAgICAgICBpZiAoZWxlbWVudC5kYXRhc2V0LnBhbmVsTmFtZSA9PT0gJ2NhcnQtcGFuZWwnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDYXJ0UGFuZWwoZWxlbWVudCk7XG4gICAgICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuX2NhcnRFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBnZXQgY2FydEVsZW1lbnQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJ0RWxlbWVudDtcbiAgICB9XG4gICAgc2V0IGNhcnRFbGVtZW50KGVsZW1lbnQpIHtcbiAgICAgICAgdGhpcy5fY2FydEVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBnZXQgY2FydFNob3J0Q29kZSgpIHtcbiAgICAgICAgcmV0dXJuICh0aGlzLl9jYXJ0RWxlbWVudCAmJiB0aGlzLl9jYXJ0RWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2N1c3RvbS1jYXJ0LS1taW5pJykpID8gJ1t3d19jdXN0b21fY2FydF9taW5pXScgOiAnW3d3X2N1c3RvbV9jYXJ0XSc7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmFtb3VudFNlbGVjdG9yID0gbmV3IEFtb3VudFNlbGVjdG9yKHRoaXMuX2NhcnRFbGVtZW50KTtcbiAgICAgICAgdGhpcy5hbW91bnRTZWxlY3Rvci5pbml0aWFsaXplKCk7XG4gICAgICAgIGNvbnN0IGRlbGV0ZUNhcnRJdGVtQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtZGVsZXRlLWl0ZW1dJykpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGRlbGV0ZUNhcnRJdGVtQnV0dG9ucy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gZGVsZXRlQ2FydEl0ZW1CdXR0b25zW2ldO1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4geyB0aGlzLmRlbGV0ZUNhcnRJdGVtKGJ1dHRvbik7IH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCdhbW91bnQtY2hhbmdlZCcsIChpbnB1dCkgPT4ge1xuICAgICAgICAgICAgaWYgKCF0aGlzLl9jYXJ0RWxlbWVudC5jb250YWlucyhpbnB1dCkpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy51cGRhdGVUaW1lb3V0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dCh0aGlzLnVwZGF0ZVRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy51cGRhdGVUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydEl0ZW0oaW5wdXQpO1xuICAgICAgICAgICAgfSwgdGhpcy51cGRhdGVUaW1lb3V0RHVyYXRpb24pO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgcmVtb3ZlQ291cG9uQ29kZUxpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yZW1vdmUtY29kZV0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCByZW1vdmVDb3Vwb25Db2RlTGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBhbmNob3IgPSByZW1vdmVDb3Vwb25Db2RlTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBjb2RlID0gYW5jaG9yLmRhdGFzZXQucmVtb3ZlQ29kZTtcbiAgICAgICAgICAgICAgICBpZiAoIWNvZGUpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhbmNob3IuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdjb3Vwb25fY29kZV9yZW1vdmUnLFxuICAgICAgICAgICAgICAgICAgICBjb2RlOiBjb2RlLFxuICAgICAgICAgICAgICAgICAgICBzaG9ydGNvZGU6IHRoaXMuY2FydFNob3J0Q29kZVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCB0aGlzLl9jYXJ0RWxlbWVudCwgdGhpcy51cGRhdGVDYXJ0LmJpbmQodGhpcyksICgpID0+IHsgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBhbmNob3IuaHJlZjsgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0aWFsaXplQ291cG9uQ29kZUZvcm0oKSB7XG4gICAgICAgIGNvbnN0IGNvdXBvbkZvcm0gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY291cG9uLWNvZGUtZm9ybScpO1xuICAgICAgICBpZiAoY291cG9uRm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFkZENvdXBvbkNvZGUgPSBuZXcgQWRkQ291cG9uQ29kZShjb3Vwb25Gb3JtKTtcbiAgICAgICAgYWRkQ291cG9uQ29kZS5pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIHVwZGF0ZUNhcnRJdGVtKGlucHV0KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgaXRlbSA9IGlucHV0LmNsb3Nlc3QoJy5jdXN0b20tY2FydF9faXRlbScpO1xuICAgICAgICBjb25zdCBwcm9kdWN0SUQgPSBpbnB1dC5kYXRhc2V0LnByb2R1Y3RJZDtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9uX2lkID0gKF9hID0gTnVtYmVyKGlucHV0LmRhdGFzZXQudmFyaWF0aW9uSWQpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAwO1xuICAgICAgICBpZiAoIWl0ZW0gfHwgIXByb2R1Y3RJRCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdubyBpdGVtIGZvdW5kJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZV9jYXJ0X2l0ZW0nLFxuICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdElELFxuICAgICAgICAgICAgcXVhbnRpdHk6IGlucHV0LnZhbHVlLFxuICAgICAgICAgICAgdmFyaWF0aW9uX2lkOiB2YXJpYXRpb25faWQudG9TdHJpbmcoKSxcbiAgICAgICAgICAgIHNob3J0Y29kZTogdGhpcy5jYXJ0U2hvcnRDb2RlXG4gICAgICAgIH07XG4gICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgdGhpcy5fY2FydEVsZW1lbnQsIHRoaXMudXBkYXRlQ2FydC5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgZGVsZXRlQ2FydEl0ZW0oYnV0dG9uKSB7XG4gICAgICAgIGNvbnN0IGl0ZW0gPSBidXR0b24uY2xvc2VzdCgnLmN1c3RvbS1jYXJ0X19pdGVtJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJRCA9IGJ1dHRvbi5kYXRhc2V0LnByb2R1Y3RJZDtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9uSUQgPSBidXR0b24uZGF0YXNldC52YXJpYXRpb25JZCB8fCAnJztcbiAgICAgICAgaWYgKCFpdGVtIHx8ICFwcm9kdWN0SUQgfHwgIXZhcmlhdGlvbklEKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGl0ZW0gZm91bmQnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnZGVsZXRlX2NhcnRfaXRlbScsXG4gICAgICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0SUQsXG4gICAgICAgICAgICB2YXJpYXRpb25faWQ6IHZhcmlhdGlvbklELFxuICAgICAgICAgICAgc2hvcnRjb2RlOiB0aGlzLmNhcnRTaG9ydENvZGVcbiAgICAgICAgfTtcbiAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCB0aGlzLl9jYXJ0RWxlbWVudCwgdGhpcy51cGRhdGVDYXJ0LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICB1cGRhdGVDYXJ0KGNvbnRlbnQpIHtcbiAgICAgICAgaWYgKGNvbnRlbnQpIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlQ2FydENvbnRlbnQoY29udGVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5nZXRDYXJ0Q29udGVudCgpO1xuICAgIH1cbiAgICBnZXRDYXJ0Q29udGVudCgpIHtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ3VwZGF0ZV9jYXJ0JyxcbiAgICAgICAgICAgIHNob3J0Y29kZTogdGhpcy5jYXJ0U2hvcnRDb2RlXG4gICAgICAgIH07XG4gICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgdGhpcy5fY2FydEVsZW1lbnQsIHRoaXMudXBkYXRlQ2FydENvbnRlbnQuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHVwZGF0ZUNhcnRDb250ZW50KHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UgfHwgIXJlc3BvbnNlLmRhdGEgfHwgIXJlc3BvbnNlLmRhdGFbJ2NvbnRlbnQnXSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGNvbnRlbnQgPSByZXNwb25zZS5kYXRhWydjb250ZW50J107XG4gICAgICAgIHRoaXMuX2NhcnRFbGVtZW50Lm91dGVySFRNTCA9IGNvbnRlbnQ7XG4gICAgICAgIHRoaXMuX2NhcnRFbGVtZW50ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2N1c3RvbS1jYXJ0Jyk7XG4gICAgICAgIGFkZE9yVXBkYXRlQ2FydFRvdGFscyhyZXNwb25zZS5kYXRhWyd0b3RhbC1jYXJ0LXF1YW50aXR5J10pO1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIGhhbmRsZUNhcnRQYW5lbChwYW5lbCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gcGFuZWwucXVlcnlTZWxlY3RvcignI2N1c3RvbS1jYXJ0Jyk7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5jYXJ0RWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMudXBkYXRlQ2FydCgpO1xuICAgIH1cbn1cbmNvbnN0IGNhcnQgPSBuZXcgQ2FydCgpO1xuY2FydC5pbml0aWFsaXplKCk7XG5leHBvcnQgeyBDYXJ0IH07XG5leHBvcnQgZGVmYXVsdCBjYXJ0O1xuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29tcG9uZW50IHtcbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICB9XG59XG4iLCJjbGFzcyBFdmVudEVtaXR0ZXJDbGFzcyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRzID0ge307XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGxpc3RlbmVyIGNhbGxiYWNrIGZ1bmN0aW9uIHVwb24gdHJpZ2dlcmVkIGV2ZW50XG4gICAgICovXG4gICAgb24oZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ldmVudHNbZXZlbnRdICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdID0gW107XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5ldmVudHNbZXZlbnRdLnB1c2gobGlzdGVuZXIpO1xuICAgICAgICByZXR1cm4gKCkgPT4gdGhpcy5yZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBSZW1vdmUgbGlzdGVuZXIgZnJvbSBldmVudCBlbWl0dGVyIGxpc3RcbiAgICAgKi9cbiAgICByZW1vdmVMaXN0ZW5lcihldmVudCwgbGlzdGVuZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB0aGlzLmV2ZW50c1tldmVudF0gIT09ICdvYmplY3QnKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbmRleCA9IHRoaXMuZXZlbnRzW2V2ZW50XS5pbmRleE9mKGxpc3RlbmVyKTtcbiAgICAgICAgaWYgKGluZGV4ID4gLTEpIHtcbiAgICAgICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB1bmRlZmluZWQ7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFJlbW92ZSBhbGwgbGlzdGVuZXJzIGZyb20gZXZlbnQgZW1pdHRlciBsaXN0XG4gICAgICovXG4gICAgcmVtb3ZlQWxsTGlzdGVuZXJzKGV2ZW50KSB7XG4gICAgICAgIGlmICh0eXBlb2YgdGhpcy5ldmVudHNbZXZlbnRdICE9PSAnb2JqZWN0Jykge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICAgICAgZGVsZXRlIHRoaXMuZXZlbnRzW2V2ZW50XTtcbiAgICAgICAgcmV0dXJuIHVuZGVmaW5lZDtcbiAgICB9XG4gICAgLyoqXG4gICAgICogRW1pdHMgZXZlbnQgc28gdGhhdCBhbnkgbGlzdGVuZXJzIGNhbiBwZXJmb3JtIHRoZWlyIGNhbGxiYWNrIGZ1bmN0aW9uXG4gICAgICovXG4gICAgZW1pdChldmVudCwgLi4uYXJncykge1xuICAgICAgICBpZiAodHlwZW9mIHRoaXMuZXZlbnRzW2V2ZW50XSAhPT0gJ29iamVjdCcpIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZXZlbnRzW2V2ZW50XS5mb3JFYWNoKChsaXN0ZW5lcikgPT4gbGlzdGVuZXIuYXBwbHkodGhpcywgYXJncykpO1xuICAgICAgICByZXR1cm4gdW5kZWZpbmVkO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDYWxsIGV2ZW50IG9uY2UgYW5kIHRoZW4gcmVtb3ZlIGl0IGZyb20gdGhlIGV2ZW50IGVtaXR0ZXIgbGlzdFxuICAgICAqL1xuICAgIG9uY2UoZXZlbnQsIGxpc3RlbmVyKSB7XG4gICAgICAgIGNvbnN0IHJlbW92ZSA9IHRoaXMub24oZXZlbnQsICguLi5hcmdzKSA9PiB7XG4gICAgICAgICAgICByZW1vdmUoKTtcbiAgICAgICAgICAgIGxpc3RlbmVyLmFwcGx5KHRoaXMsIGFyZ3MpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5leHBvcnQgeyBFdmVudEVtaXR0ZXJDbGFzcyB9O1xuZXhwb3J0IGRlZmF1bHQgbmV3IEV2ZW50RW1pdHRlckNsYXNzKCk7XG4iLCJjbGFzcyBIdHRwQ2xpZW50IHtcbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIEdFVCByZXF1ZXN0IHRvIHRoZSBzcGVjaWZpZWQgVVJMXG4gICAgICovXG4gICAgZ2V0KHVybCwgb3B0aW9ucykge1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgb3B0aW9ucyk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgUE9TVCByZXF1ZXN0IHRvIHRoZSBzcGVjaWZpZWQgVVJMXG4gICAgICovXG4gICAgcG9zdCh1cmwsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgICAgIGJvZHk6IGRhdGEsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gdGhpcy5yZXF1ZXN0KHVybCwgcmVxdWVzdE9wdGlvbnMpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhIFBVVCByZXF1ZXN0IHRvIHRoZSBzcGVjaWZpZWQgVVJMXG4gICAgICovXG4gICAgcHV0KHVybCwgZGF0YSwgb3B0aW9ucykge1xuICAgICAgICBjb25zdCBkZWZhdWx0T3B0aW9ucyA9IHtcbiAgICAgICAgICAgIG1ldGhvZDogJ3B1dCcsXG4gICAgICAgICAgICBib2R5OiBkYXRhLFxuICAgICAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgICAgICdDb250ZW50LVR5cGUnOiAnYXBwbGljYXRpb24veC13d3ctZm9ybS11cmxlbmNvZGVkOyBjaGFyc2V0PVVURi04J1xuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYSBERUxFVEUgcmVxdWVzdCB0byB0aGUgc3BlY2lmaWVkIFVSTFxuICAgICAqL1xuICAgIGRlbGV0ZSh1cmwsIGRhdGEsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdkZWxldGUnLFxuICAgICAgICAgICAgYm9keTogZGF0YVxuICAgICAgICB9O1xuICAgICAgICBjb25zdCByZXF1ZXN0T3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oT2JqZWN0LmFzc2lnbih7fSwgZGVmYXVsdE9wdGlvbnMpLCBvcHRpb25zKTtcbiAgICAgICAgcmV0dXJuIHRoaXMucmVxdWVzdCh1cmwsIHJlcXVlc3RPcHRpb25zKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogSW50ZXJuYWwgbWV0aG9kIHdoaWNoIGludm9rZXMgdGhlIGZldGNoIEFQSSBhbmQgcmV0dXJucyBhIHByb21pc2UuXG4gICAgICovXG4gICAgcmVxdWVzdCh1cmwsIG9wdGlvbnMpIHtcbiAgICAgICAgY29uc3QgZGVmYXVsdE9wdGlvbnMgPSB7XG4gICAgICAgICAgICBtZXRob2Q6ICdnZXQnLFxuICAgICAgICAgICAgY3JlZGVudGlhbHM6ICdzYW1lLW9yaWdpbicsXG4gICAgICAgICAgICBoZWFkZXJzOiB7XG4gICAgICAgICAgICAgICAgJ0FjY2VwdCc6ICdhcHBsaWNhdGlvbi9qc29uJyxcbiAgICAgICAgICAgICAgICAnQ29udGVudC1UeXBlJzogJ2FwcGxpY2F0aW9uL2pzb24nXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHJlcXVlc3RPcHRpb25zID0gT2JqZWN0LmFzc2lnbihPYmplY3QuYXNzaWduKHt9LCBkZWZhdWx0T3B0aW9ucyksIG9wdGlvbnMpO1xuICAgICAgICByZXR1cm4gZmV0Y2godXJsLCByZXF1ZXN0T3B0aW9ucylcbiAgICAgICAgICAgIC50aGVuKHRoaXMucmVxdWVzdFN0YXR1cylcbiAgICAgICAgICAgIC50aGVuKHRoaXMucmVzcG9uc2VUeXBlKTtcbiAgICB9XG4gICAgLyoqXG4gICAgICogQ2hlY2tzIHRoZSByZXNwb25zZSBzdGF0dXNDb2RlIGFuZCByZXR1cm5zIHRoZSBjb3JyZWN0IHZhbHVlXG4gICAgICovXG4gICAgcmVxdWVzdFN0YXR1cyhyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3RhdHVzID49IDIwMCAmJiByZXNwb25zZS5zdGF0dXMgPCAzMDApIHtcbiAgICAgICAgICAgIHJldHVybiBQcm9taXNlLnJlc29sdmUocmVzcG9uc2UpO1xuICAgICAgICB9XG4gICAgICAgIGlmIChyZXNwb25zZS5zdGF0dXMgPj0gNDAwICYmIHJlc3BvbnNlLnN0YXR1cyA8IDUwMCkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLnRleHQoKS50aGVuKCh0ZXh0KSA9PiBQcm9taXNlLnJlamVjdCh0ZXh0KSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIFByb21pc2UucmVqZWN0KG5ldyBFcnJvcihyZXNwb25zZS5zdGF0dXNUZXh0KSk7XG4gICAgfVxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIFByb21pc2UgcmVzcG9uc2UgdG8gY29udGVudFR5cGUgYmFzZWQgb24gaGVhZGVyXG4gICAgICovXG4gICAgcmVzcG9uc2VUeXBlKHJlc3BvbnNlKSB7XG4gICAgICAgIGNvbnN0IGNvbnRlbnRUeXBlID0gcmVzcG9uc2UuaGVhZGVycy5nZXQoJ2NvbnRlbnQtdHlwZScpO1xuICAgICAgICBpZiAoY29udGVudFR5cGUgIT09IG51bGwgJiYgY29udGVudFR5cGUuaW5kZXhPZignYXBwbGljYXRpb24vanNvbicpICE9PSAtMSkge1xuICAgICAgICAgICAgcmV0dXJuIHJlc3BvbnNlLmpzb24oKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcmVzcG9uc2UudGV4dCgpO1xuICAgIH1cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhIEZvcm1EYXRhIG9iamVjdCBpbnRvIGEgVVJMU2VhcmNoUGFyYW1zIHN0cmluZ1xuICAgICAqL1xuICAgIGNvbnZlcnRGb3JtRGF0YVRvUXVlcnlTdHJpbmcoZGF0YSkge1xuICAgICAgICByZXR1cm4gbmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhKS50b1N0cmluZygpO1xuICAgIH1cbn1cbmNvbnN0IGh0dHBDbGllbnRJbnN0YW5jZSA9IG5ldyBIdHRwQ2xpZW50KCk7XG5leHBvcnQgZGVmYXVsdCBodHRwQ2xpZW50SW5zdGFuY2U7XG4iLCJpbXBvcnQgY2FydCBmcm9tIFwiLi4vY2FydFwiO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWwvcmVxdWVzdHNcIjtcbmltcG9ydCB7IEZpZWxkVmFsaWRhdGlvbiB9IGZyb20gXCIuL0ZpZWxkVmFsaWRhdGlvblwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWRkQ291cG9uQ29kZSB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5jYXJ0RWxlbWVudCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjdXN0b20tY2FydCcpO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICB0aGlzLmNvdXBvbkZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiY291cG9uLWNvZGVcIl0nKTtcbiAgICAgICAgdGhpcy5zdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICBsZXQgY291cG9uQ29kZSA9IGZvcm1EYXRhLmdldCgnY291cG9uLWNvZGUnKSB8fCAnJztcbiAgICAgICAgICAgIGlmICghY291cG9uQ29kZSB8fCB0eXBlb2YgY291cG9uQ29kZSAhPT0gJ3N0cmluZycpIHtcbiAgICAgICAgICAgICAgICBjb3Vwb25Db2RlID0gJyc7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2NvdXBvbl9jb2RlX2FkZCcsXG4gICAgICAgICAgICAgICAgY29kZTogY291cG9uQ29kZS50b0xvd2VyQ2FzZSgpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgRmllbGRWYWxpZGF0aW9uLnJlbW92ZUVycm9yVGV4dCh0aGlzLmNvdXBvbkZpZWxkKTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgdGhpcy5jYXJ0RWxlbWVudCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSwgZXZlbnQsIHRoaXMuc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSwgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcGFuZWwgPSB0aGlzLmZvcm0uY2xvc2VzdCgnW2RhdGEtcGFuZWwtbmFtZV0nKTtcbiAgICAgICAgaWYgKHBhbmVsKSB7XG4gICAgICAgICAgICBwYW5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJykpO1xuICAgICAgICB9XG4gICAgICAgIGNhcnQudXBkYXRlQ2FydENvbnRlbnQocmVzcG9uc2UpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUoZXJyb3IpIHtcbiAgICAgICAgRmllbGRWYWxpZGF0aW9uLmFwcGVuZEVycm9yVGV4dCh0aGlzLmNvdXBvbkZpZWxkLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tIFwiLi4vY29tbW9uL0V2ZW50RW1pdHRlclwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQW1vdW50U2VsZWN0b3IgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5idXR0b25zID0gW107XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgICAgICB0aGlzLmhhbmRsZUNsaWNrID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCB8fCAhdGFyZ2V0LnBhcmVudEVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBsZXQgYnV0dG9uID0gdGFyZ2V0LmNsb3Nlc3QoJ2J1dHRvbicpO1xuICAgICAgICAgICAgaWYgKCFidXR0b24gfHwgIWJ1dHRvbi5wYXJlbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBidXR0b24ucGFyZW50RWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucXR5Jyk7XG4gICAgICAgICAgICBpZiAoIWlucHV0IHx8ICEoaW5wdXQgaW5zdGFuY2VvZiBIVE1MSW5wdXRFbGVtZW50KSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2hhbmdlQW1vdW50KGJ1dHRvbiwgaW5wdXQpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmJ1dHRvbnMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wbHVzLWFtb3VudCwgLm1pbnVzLWFtb3VudCcpKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgZXZlbnRMaXN0ZW5lciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIWlucHV0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCtpbnB1dC52YWx1ZSA+ICtpbnB1dC5tYXgpIHtcbiAgICAgICAgICAgICAgICBpbnB1dC52YWx1ZSA9IGlucHV0Lm1heDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICgraW5wdXQudmFsdWUgPCAraW5wdXQubWluKSB7XG4gICAgICAgICAgICAgICAgaW5wdXQudmFsdWUgPSBpbnB1dC5taW47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5lbWl0KCdhbW91bnQtY2hhbmdlZCcsIGV2ZW50LnRhcmdldCk7XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGlucHV0cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQucXR5JykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgaW5wdXRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgaW5wdXQgPSBpbnB1dHNbaW5kZXhdO1xuICAgICAgICAgICAgaW5wdXQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgZXZlbnRMaXN0ZW5lcik7XG4gICAgICAgICAgICBpbnB1dC5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBldmVudExpc3RlbmVyKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy5idXR0b25zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5idXR0b25zW2luZGV4XTtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ2xpY2suYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNsaWNrLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGNoYW5nZUFtb3VudCh0YXJnZXQsIGlucHV0KSB7XG4gICAgICAgIGxldCB2YWx1ZSA9IE51bWJlcihpbnB1dC52YWx1ZSk7XG4gICAgICAgIGNvbnN0IHN0ZXAgPSBOdW1iZXIoaW5wdXQuZ2V0QXR0cmlidXRlKCdzdGVwJykpO1xuICAgICAgICBpZiAodGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncGx1cy1hbW91bnQnKSkge1xuICAgICAgICAgICAgdmFsdWUgKz0gc3RlcDtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHZhbHVlIC09IHN0ZXA7XG4gICAgICAgIH1cbiAgICAgICAgaW5wdXQudmFsdWUgPSB2YWx1ZS50b1N0cmluZygpO1xuICAgICAgICBpbnB1dC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgYW1vdW50U2VsZWN0b3IgPSBuZXcgQW1vdW50U2VsZWN0b3Ioc2VsZWN0b3IpO1xuICAgICAgICBhbW91bnRTZWxlY3Rvci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGNsYXNzIEZpZWxkVmFsaWRhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZmllbGQpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudHMgPSBbJ2NoYW5nZScsICd2YWxpZGF0ZSddO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHNbaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5maWVsZC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoZSkgPT4geyB0aGlzLm9uQ2hhbmdlKGUudGFyZ2V0LCBlKTsgfSk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5maWVsZC5hZGRFdmVudExpc3RlbmVyKCdpbnZhbGlkJywgKGUpID0+IHtcbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2hhbmdlKGZpZWxkLCBldmVudCkge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24ucmVtb3ZlRXJyb3JUZXh0KHRoaXMuZmllbGQpO1xuICAgICAgICBpZiAodGhpcy5maWVsZC52YWxpZGl0eS52YWxpZCA9PT0gdHJ1ZSkge1xuICAgICAgICAgICAgZmllbGQuY2xhc3NMaXN0LnJlbW92ZSgnaW52YWxpZCcpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25NZXNzYWdlID0gdGhpcy5nZXRWYWxpZGF0aW9uTWVzc2FnZShmaWVsZC52YWxpZGl0eSwgZmllbGQpO1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kRXJyb3JUZXh0KHRoaXMuZmllbGQsIHZhbGlkYXRpb25NZXNzYWdlKTtcbiAgICAgICAgZmllbGQuY2xhc3NMaXN0LmFkZCgnaW52YWxpZCcpO1xuICAgIH1cbiAgICBnZXRWYWxpZGF0aW9uTWVzc2FnZSh2YWxpZGl0eSwgZmllbGQpIHtcbiAgICAgICAgbGV0IGRlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZSA9ICdWdWwgZWVuIGdlbGRpZ2Ugd2FhcmRlIGluLic7XG4gICAgICAgIGlmICh2YWxpZGl0eS52YWx1ZU1pc3NpbmcgPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC5kYXRhc2V0LnZhbHVlTWlzc2luZyB8fCBmaWVsZC50aXRsZSB8fCAnRGl0IHZlbGQgaXMgdmVycGxpY2h0Lic7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHZhbGlkaXR5LmN1c3RvbUVycm9yID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGQuZGF0YXNldC5jdXN0b21NZXNzYWdlIHx8IGZpZWxkLnRpdGxlIHx8IGRlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodmFsaWRpdHkudHlwZU1pc21hdGNoID09PSB0cnVlKSB7XG4gICAgICAgICAgICByZXR1cm4gZmllbGQudGl0bGUgfHwgZGVmYXVsdFZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICB9XG4gICAgICAgIGlmICh2YWxpZGl0eS5wYXR0ZXJuTWlzbWF0Y2ggPT09IHRydWUpIHtcbiAgICAgICAgICAgIHJldHVybiBmaWVsZC50aXRsZSB8fCBkZWZhdWx0VmFsaWRhdGlvbk1lc3NhZ2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWxpZGF0aW9uTWVzc2FnZTtcbiAgICB9XG4gICAgc3RhdGljIGFwcGVuZEVycm9yVGV4dChmaWVsZCwgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb24tbWVzc2FnZScpO1xuICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHZhbGlkYXRpb25NZXNzYWdlO1xuICAgICAgICAoX2EgPSBmaWVsZC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgfVxuICAgIHN0YXRpYyBhcHBlbmRTdWNjZXNzVGV4dChmaWVsZCwgdmFsaWRhdGlvbk1lc3NhZ2UpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpO1xuICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ3ZhbGlkYXRpb24tbWVzc2FnZScsICd2YWxpZGF0aW9uLW1lc3NhZ2UtLXN1Y2Nlc3MnKTtcbiAgICAgICAgc3Bhbi5pbm5lclRleHQgPSB2YWxpZGF0aW9uTWVzc2FnZTtcbiAgICAgICAgKF9hID0gZmllbGQucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgIH1cbiAgICBzdGF0aWMgcmVtb3ZlRXJyb3JUZXh0KGZpZWxkKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9ICgoX2EgPSBmaWVsZC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcignLnZhbGlkYXRpb24tbWVzc2FnZScpKSB8fCBudWxsO1xuICAgICAgICBpZiAoIWVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBlbGVtZW50LnJlbW92ZSgpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1maWVsZC12YWxpZGF0aW9uXScpKTtcbiAgICAgICAgbG9naW5Gb3JtLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20oZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dDpub3QoW3R5cGU9XCJoaWRkZW5cIl0pJykpO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGRWYWxpZGF0aW9uID0gbmV3IEZpZWxkVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IGZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAgICAgICAgIHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICAgICAgICAgIHZhbGlkID0gZmllbGQudmFsaWRpdHkudmFsaWQ7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBhZGRPclVwZGF0ZUNhcnRUb3RhbHMoY2FydEFtb3VudCkge1xuICAgIGNvbnN0IHBhcmVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LWFtb3VudC1pY29uJyk7XG4gICAgaWYgKHBhcmVudCA9PT0gbnVsbCkge1xuICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGNhcnQgYW1vdW50IHdyYXBwZXIgZm91bmQnKTtcbiAgICB9XG4gICAgbGV0IGNhcnRBbW91bnRFbGVtZW50ID0gcGFyZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJ0LWFtb3VudC1jb3VudGVyJyk7XG4gICAgaWYgKCFjYXJ0QW1vdW50IHx8IGNhcnRBbW91bnQgPT09ICcwJykge1xuICAgICAgICBjYXJ0QW1vdW50RWxlbWVudCA9PT0gbnVsbCB8fCBjYXJ0QW1vdW50RWxlbWVudCA9PT0gdm9pZCAwID8gdm9pZCAwIDogY2FydEFtb3VudEVsZW1lbnQucmVtb3ZlKCk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgaWYgKGNhcnRBbW91bnRFbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgIGNhcnRBbW91bnRFbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnU1BBTicpO1xuICAgICAgICBjYXJ0QW1vdW50RWxlbWVudC5jbGFzc0xpc3QuYWRkKCdjYXJ0LWFtb3VudC1jb3VudGVyJyk7XG4gICAgICAgIHBhcmVudC5hcHBlbmRDaGlsZChjYXJ0QW1vdW50RWxlbWVudCk7XG4gICAgfVxuICAgIGNhcnRBbW91bnRFbGVtZW50LmlubmVyVGV4dCA9IGNhcnRBbW91bnQ7XG59XG4iLCJpbXBvcnQgaHR0cENsaWVudEluc3RhbmNlIGZyb20gXCIuLi9jb21tb24vSHR0cENsaWVudFwiO1xuZXhwb3J0IGZ1bmN0aW9uIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludCwgbG9hZGluZ0VsZW1lbnQsIG9uU3VjY2Vzcywgb25GYWlsdXJlLCBldmVudCwgYnV0dG9uKSB7XG4gICAgY29uc3QgaHR0cENsaWVudCA9IGh0dHBDbGllbnRJbnN0YW5jZTtcbiAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICBtZXRob2Q6ICdwb3N0JyxcbiAgICAgICAgYm9keTogbmV3IFVSTFNlYXJjaFBhcmFtcyhkYXRhKS50b1N0cmluZygpLFxuICAgICAgICBjcmVkZW50aWFsczogJ3NhbWUtb3JpZ2luJyxcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgICAgJ0NvbnRlbnQtVHlwZSc6ICdhcHBsaWNhdGlvbi94LXd3dy1mb3JtLXVybGVuY29kZWQ7IGNoYXJzZXQ9VVRGLTgnXG4gICAgICAgIH1cbiAgICB9O1xuICAgIGlmIChsb2FkaW5nRWxlbWVudClcbiAgICAgICAgYWRkTG9hZGluZ1N0YXRlKGxvYWRpbmdFbGVtZW50KTtcbiAgICBpZiAoYnV0dG9uKVxuICAgICAgICBzZXRCdXR0b25Mb2FkaW5nU3RhdGUoYnV0dG9uKTtcbiAgICBodHRwQ2xpZW50LnBvc3QoZW5kcG9pbnQsICcnLCBvcHRpb25zKS50aGVuKChyZXNwb25zZSkgPT4gbmV3IFByb21pc2UoKCkgPT4ge1xuICAgICAgICBjb25zdCBhamF4UmVzcG9uc2UgPSByZXNwb25zZTtcbiAgICAgICAgY29uc3QgZGF0YSA9IGFqYXhSZXNwb25zZS5kYXRhO1xuICAgICAgICBpZiAoYWpheFJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZyhhamF4UmVzcG9uc2UpO1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKGRhdGEpO1xuICAgICAgICB9XG4gICAgICAgIG9uU3VjY2VzcyhhamF4UmVzcG9uc2UsIGV2ZW50KTtcbiAgICAgICAgaWYgKGxvYWRpbmdFbGVtZW50KVxuICAgICAgICAgICAgcmVtb3ZlTG9hZGluZ1N0YXRlKGxvYWRpbmdFbGVtZW50KTtcbiAgICAgICAgaWYgKGJ1dHRvbilcbiAgICAgICAgICAgIHJlbW92ZUJ1dHRvbkxvYWRpbmdTdGF0ZShidXR0b24pO1xuICAgIH0pKS5jYXRjaCgoZXJyb3IpID0+IHtcbiAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIGlmIChsb2FkaW5nRWxlbWVudClcbiAgICAgICAgICAgIHJlbW92ZUxvYWRpbmdTdGF0ZShsb2FkaW5nRWxlbWVudCk7XG4gICAgICAgIGlmIChidXR0b24pXG4gICAgICAgICAgICByZW1vdmVCdXR0b25Mb2FkaW5nU3RhdGUoYnV0dG9uKTtcbiAgICAgICAgaWYgKG9uRmFpbHVyZSlcbiAgICAgICAgICAgIG9uRmFpbHVyZShlcnJvcik7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gYWRkTG9hZGluZ1N0YXRlKGl0ZW0pIHtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBpdGVtLmNsYXNzTGlzdC5hZGQoJ2N1c3RvbS1jYXJ0X19pdGVtLS1sb2FkaW5nJyk7XG4gICAgY29uc3QgbG9hZGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgbG9hZGVyLmNsYXNzTGlzdC5hZGQoJ3d3LWxvYWRlcicpO1xuICAgIGl0ZW0uYXBwZW5kQ2hpbGQobG9hZGVyKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVMb2FkaW5nU3RhdGUoaXRlbSkge1xuICAgIGlmICghaXRlbSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGl0ZW0uY2xhc3NMaXN0LnJlbW92ZSgnY3VzdG9tLWNhcnRfX2l0ZW0tLWxvYWRpbmcnKTtcbiAgICBjb25zdCBsb2FkZXIgPSBpdGVtLnF1ZXJ5U2VsZWN0b3IoJy53dy1sb2FkZXInKTtcbiAgICBpZiAobG9hZGVyKSB7XG4gICAgICAgIGxvYWRlci5wYXJlbnRFbGVtZW50LnJlbW92ZUNoaWxkKGxvYWRlcik7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIHNldEJ1dHRvbkxvYWRpbmdTdGF0ZShidXR0b24pIHtcbiAgICBidXR0b24uZGlzYWJsZWQgPSB0cnVlO1xuICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAndHJ1ZScpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUJ1dHRvbkxvYWRpbmdTdGF0ZShidXR0b24pIHtcbiAgICBidXR0b24uZGlzYWJsZWQgPSBmYWxzZTtcbiAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdsb2FkaW5nJyk7XG59XG4iXSwic291cmNlUm9vdCI6IiJ9