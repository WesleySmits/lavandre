(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app"],{

/***/ "./assets/css/app.pcss":
/*!*****************************!*\
  !*** ./assets/css/app.pcss ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/components/_accordion.pcss":
/*!***********************************************!*\
  !*** ./assets/css/components/_accordion.pcss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/components/_cookie-bar.pcss":
/*!************************************************!*\
  !*** ./assets/css/components/_cookie-bar.pcss ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/components/_curtain.pcss":
/*!*********************************************!*\
  !*** ./assets/css/components/_curtain.pcss ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/components/_infoPopup.pcss":
/*!***********************************************!*\
  !*** ./assets/css/components/_infoPopup.pcss ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/components/_popup.pcss":
/*!*******************************************!*\
  !*** ./assets/css/components/_popup.pcss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/css/components/_toast.pcss":
/*!*******************************************!*\
  !*** ./assets/css/components/_toast.pcss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/app.ts":
/*!**************************!*\
  !*** ./assets/js/app.ts ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return App; });
/* harmony import */ var _css_app_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/app.pcss */ "./assets/css/app.pcss");
/* harmony import */ var _css_app_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_app_pcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/custom-elements */ "./node_modules/@ungap/custom-elements/index.js");
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ungap_custom_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _lavandre_button_dist_src_lavandre_button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lavandre/button/dist/src/lavandre-button */ "./node_modules/@lavandre/button/dist/src/lavandre-button.js");
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/EventEmitter */ "./assets/js/common/EventEmitter.ts");
/* harmony import */ var _components_AjaxLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AjaxLogin */ "./assets/js/components/AjaxLogin.ts");
/* harmony import */ var _components_AjaxRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AjaxRegister */ "./assets/js/components/AjaxRegister.ts");
/* harmony import */ var _components_Curtain__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/Curtain */ "./assets/js/components/Curtain.ts");
/* harmony import */ var _components_EmailValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/EmailValidation */ "./assets/js/components/EmailValidation.ts");
/* harmony import */ var _components_PasswordReveal__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/PasswordReveal */ "./assets/js/components/PasswordReveal.ts");
/* harmony import */ var _components_NewsletterSubscribe__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/NewsletterSubscribe */ "./assets/js/components/NewsletterSubscribe.ts");
/* harmony import */ var _components_FieldValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/FieldValidation */ "./assets/js/components/FieldValidation.ts");
/* harmony import */ var _components_InfoPopup__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/InfoPopup */ "./assets/js/components/InfoPopup.ts");
/* harmony import */ var _components_CookieBar__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/CookieBar */ "./assets/js/components/CookieBar.ts");
/* harmony import */ var _components_ForgotPassword__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/ForgotPassword */ "./assets/js/components/ForgotPassword.ts");
/* harmony import */ var _ui_SidePanel__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./ui/SidePanel */ "./assets/js/ui/SidePanel.ts");
/* harmony import */ var _components_HeaderSearch__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/HeaderSearch */ "./assets/js/components/HeaderSearch.ts");
/* harmony import */ var _util_links__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util/links */ "./assets/js/util/links.ts");
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");
/* harmony import */ var _components_LazyLoader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/LazyLoader */ "./assets/js/components/LazyLoader.ts");
/* harmony import */ var _ui_NewsletterPopup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/NewsletterPopup */ "./assets/js/ui/NewsletterPopup.ts");
/* harmony import */ var _web_components_AccordionElement__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./web-components/AccordionElement */ "./assets/js/web-components/AccordionElement.ts");
/* harmony import */ var _components_ScrollToContent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ScrollToContent */ "./assets/js/components/ScrollToContent.ts");
/* harmony import */ var _components_ForgotPasswordToggle__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./components/ForgotPasswordToggle */ "./assets/js/components/ForgotPasswordToggle.ts");























class App extends _Module__WEBPACK_IMPORTED_MODULE_17__["default"] {
  constructor() {
    super(...arguments);
    this.eventEmitter = _common_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["default"];
    this.components = [_components_CookieBar__WEBPACK_IMPORTED_MODULE_12__["default"], _ui_SidePanel__WEBPACK_IMPORTED_MODULE_14__["default"], _components_Curtain__WEBPACK_IMPORTED_MODULE_6__["default"], _components_InfoPopup__WEBPACK_IMPORTED_MODULE_11__["default"], _components_PasswordReveal__WEBPACK_IMPORTED_MODULE_8__["default"], _components_EmailValidation__WEBPACK_IMPORTED_MODULE_7__["default"], _components_NewsletterSubscribe__WEBPACK_IMPORTED_MODULE_9__["default"], _components_ForgotPassword__WEBPACK_IMPORTED_MODULE_13__["default"], _components_ForgotPasswordToggle__WEBPACK_IMPORTED_MODULE_22__["default"], _components_AjaxLogin__WEBPACK_IMPORTED_MODULE_4__["default"], _components_AjaxRegister__WEBPACK_IMPORTED_MODULE_5__["default"], _components_FieldValidation__WEBPACK_IMPORTED_MODULE_10__["FieldValidation"], _components_HeaderSearch__WEBPACK_IMPORTED_MODULE_15__["default"], _components_LazyLoader__WEBPACK_IMPORTED_MODULE_18__["default"], _ui_NewsletterPopup__WEBPACK_IMPORTED_MODULE_19__["default"], _components_ScrollToContent__WEBPACK_IMPORTED_MODULE_21__["default"]];
  }

  initialize() {
    super.initialize();
    Object(_util_links__WEBPACK_IMPORTED_MODULE_16__["setCurrentLinkClass"])();
    const wpFormsSubmitButtons = Array.from(document.querySelectorAll('[name="wpforms[submit]"]'));
    wpFormsSubmitButtons.forEach(button => {
      button.removeAttribute('class');
      button.setAttribute('is', 'lavandre-button');
      button.setAttribute('size', 'large');
      button.setAttribute('full-width', 'large');
      button.setAttribute('outline', 'true');
    });
  }

}

(function appInit() {
  const app = new App();
  app.initialize();
  const list = document.querySelector('.usp-slider');

  if (!list) {
    return;
  }

  const items = Array.from(list.querySelectorAll('.usp-slider__item'));
  let totalWidth = 0;
  items.forEach(item => {
    totalWidth += item.clientWidth;
  });
  list.style.width = `${totalWidth}px`;
})();

/***/ }),

/***/ "./assets/js/components/AjaxLogin.ts":
/*!*******************************************!*\
  !*** ./assets/js/components/AjaxLogin.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AjaxLogin; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _common_DataLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/DataLayer */ "./assets/js/common/DataLayer.ts");
/* harmony import */ var _enums_ToastType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/ToastType */ "./assets/js/enums/ToastType.ts");
/* harmony import */ var _util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/loadRecaptcha */ "./assets/js/util/loadRecaptcha.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* harmony import */ var _FieldValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FieldValidation */ "./assets/js/components/FieldValidation.ts");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./Toast */ "./assets/js/components/Toast.ts");







class AjaxLogin extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(form) {
    super();
    this.ajaxEndpoint = `${window.location.origin}/wp-admin/admin-ajax.php`;
    this.form = form;
  }

  initialize() {
    if (!this.isValid()) {
      return;
    }

    this.setEventListeners();
  }

  setEventListeners() {
    const fields = Array.from(this.form.querySelectorAll('input')); // Load recaptcha
    // @ts-ignore

    if (!window.Cypress) {
      Object(_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_3__["loadRecaptcha"])(fields);
    }

    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      const validator = new _FieldValidation__WEBPACK_IMPORTED_MODULE_5__["FieldValidation"](field);
      setTimeout(() => {
        if (field.matches(':-webkit-autofill')) {
          field.dispatchEvent(new Event('input'));
        }
      }, 100);
      validator.initialize();
    }

    const submitButton = this.form.querySelector('[type="submit"]');

    if (submitButton === null) {
      return;
    }

    submitButton.type = 'button';
    this.form.addEventListener('submit', event => {
      this.onSubmit(event, fields);
    });
    submitButton === null || submitButton === void 0 ? void 0 : submitButton.addEventListener('click', event => {
      submitButton.setAttribute('loading', 'true');
      this.onSubmit(event, fields);
    });
  }

  onSubmit(event, fields) {
    var _a, _b;

    event.preventDefault();
    let valid = true;

    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      field.dispatchEvent(new Event('change'));
      valid = field.validity.valid;
    }

    if (!valid) {
      return false;
    }

    const formData = new FormData(this.form);
    const username = ((_a = formData.get('username')) === null || _a === void 0 ? void 0 : _a.toString()) || '';
    const password = ((_b = formData.get('password')) === null || _b === void 0 ? void 0 : _b.toString()) || '';

    if (!username || !password) {
      return false;
    } // @ts-ignore


    const grecaptcha = window.grecaptcha; //@ts-ignore

    const data = {
      'action': 'ajaxlogin',
      'recaptchaToken': '',
      'username': username,
      'password': password
    };
    const submitButton = this.form.querySelector('button[type="submit"]') || undefined; // @ts-ignore

    if (!window.Cypress) {
      grecaptcha.ready(() => {
        grecaptcha.execute(_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_3__["sitekey"], {
          action: 'AjaxLogin'
        }).then(token => {
          data.recaptchaToken = token;
          const submitButton = this.form.querySelector('button[type="submit"]') || undefined;
          Object(_util_requests__WEBPACK_IMPORTED_MODULE_4__["sendAjaxRequest"])(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this), event, submitButton);
        });
      });
    } else {
      Object(_util_requests__WEBPACK_IMPORTED_MODULE_4__["sendAjaxRequest"])(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this), event, submitButton);
    }

    return false;
  }

  isValid() {
    if (!this.form) {
      return false;
    }

    return true;
  }

  onSuccess(res, event) {
    const response = res;

    if (response.success === false) {
      throw new Error('something is wrong');
    }

    const href = this.form.dataset.redirectUrl || '/my-account/';

    if (this.form.dataset.redirect === 'true') {
      window.location.href = href;
      return;
    }

    const ctaButton = {
      text: 'My account',
      href: href
    };
    const toast = new _Toast__WEBPACK_IMPORTED_MODULE_6__["default"](response.data, _enums_ToastType__WEBPACK_IMPORTED_MODULE_2__["ToastType"].success, ctaButton, 20000);
    toast.initialize();
    const panel = this.form.closest('[data-panel-name]');

    if (panel) {
      panel.dispatchEvent(new CustomEvent('toggle'));
    }

    document.body.classList.add('logged-in');
    const data = {
      event: 'login',
      method: 'AjaxLogin'
    };
    _common_DataLayer__WEBPACK_IMPORTED_MODULE_1__["default"].push(data);
  }

  onFailure(res) {
    const response = JSON.parse(res);
    const message = response.data || 'This combination of email and password is not known to us. Please try again or request a new password.';
    const toast = new _Toast__WEBPACK_IMPORTED_MODULE_6__["default"](message, _enums_ToastType__WEBPACK_IMPORTED_MODULE_2__["ToastType"].warning);
    toast.initialize();
  }

  static onInit(selector = document) {
    const loginForms = Array.from(selector.querySelectorAll('#ajax-login-form'));

    if (loginForms.length === 0) {
      return;
    }

    loginForms.forEach(form => {
      const ajaxLogin = new AjaxLogin(form);
      ajaxLogin.initialize();
    });
  }

}

/***/ }),

/***/ "./assets/js/components/AjaxRegister.ts":
/*!**********************************************!*\
  !*** ./assets/js/components/AjaxRegister.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AjaxRegister; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _common_DataLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/DataLayer */ "./assets/js/common/DataLayer.ts");
/* harmony import */ var _util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/loadRecaptcha */ "./assets/js/util/loadRecaptcha.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* harmony import */ var _ConfirmValidation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ConfirmValidation */ "./assets/js/components/ConfirmValidation.ts");
/* harmony import */ var _EmailValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./EmailValidation */ "./assets/js/components/EmailValidation.ts");
/* harmony import */ var _FieldValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./FieldValidation */ "./assets/js/components/FieldValidation.ts");







class AjaxRegister extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(form) {
    super();
    this.ajaxEndpoint = `${window.location.origin}/wp-admin/admin-ajax.php`;
    this.form = form;
  }

  initialize() {
    if (!this.isValid()) {
      return;
    }

    this.setEventListeners();
  }

  setEventListeners() {
    const emailField = this.form.querySelector('input[type="email"]');

    if (emailField !== null) {
      const emailValidation = new _EmailValidation__WEBPACK_IMPORTED_MODULE_5__["default"](emailField);
      emailValidation.initialize();
    }

    const passwordField = this.form.querySelector('#register-password');
    const confirmPasswordField = this.form.querySelector('#confirm-password');

    if (passwordField && confirmPasswordField) {
      const confirmValidation = new _ConfirmValidation__WEBPACK_IMPORTED_MODULE_4__["default"](passwordField, confirmPasswordField);
      confirmValidation.initialize();
    }

    const fields = Array.from(this.form.querySelectorAll('input')); // Load recaptcha
    // @ts-ignore

    if (!window.Cypress) {
      Object(_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_2__["loadRecaptcha"])(fields);
    }

    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      const validator = new _FieldValidation__WEBPACK_IMPORTED_MODULE_6__["FieldValidation"](field);
      validator.initialize();
    }

    this.form.addEventListener('submit', event => {
      var _a, _b, _c, _d;

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

      const formData = new FormData(this.form);
      const email = ((_a = formData.get('email')) === null || _a === void 0 ? void 0 : _a.toString()) || '';
      const firstName = ((_b = formData.get('first_name')) === null || _b === void 0 ? void 0 : _b.toString()) || '';
      const lastName = ((_c = formData.get('last_name')) === null || _c === void 0 ? void 0 : _c.toString()) || '';
      const password = ((_d = formData.get('password')) === null || _d === void 0 ? void 0 : _d.toString()) || '';

      if (!email || !password) {
        return;
      } // @ts-ignore


      const grecaptcha = window.grecaptcha;
      const data = {
        'action': 'ajaxregister',
        'recaptchaToken': '',
        'email': email,
        'password': password,
        'first_name': firstName,
        'last_name': lastName
      };
      const submitButton = this.form.querySelector('button[type="submit"]') || undefined; //@ts-ignore

      if (!window.Cypress) {
        grecaptcha.ready(() => {
          grecaptcha.execute(_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_2__["sitekey"], {
            action: 'AjaxRegister'
          }).then(token => {
            data.recaptchaToken = token;
            Object(_util_requests__WEBPACK_IMPORTED_MODULE_3__["sendAjaxRequest"])(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), undefined, event, submitButton);
          });
        });
      } else {
        Object(_util_requests__WEBPACK_IMPORTED_MODULE_3__["sendAjaxRequest"])(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), undefined, event, submitButton);
      }

      return false;
    });
  }

  isValid() {
    if (!this.form) {
      return false;
    }

    return true;
  }

  onSuccess(res, event) {
    const response = res;

    if (response.success === false) {
      throw new Error('something is wrong');
    }

    const data = {
      event: 'sign-up',
      method: 'AjaxRegister'
    };
    _common_DataLayer__WEBPACK_IMPORTED_MODULE_1__["default"].push(data);
    const href = this.form.dataset.redirectUrl || '/my-account/';
    window.location.href = href;
  }

  static onInit(selector = document) {
    const registerForm = selector.querySelector('#ajax-register-form');

    if (registerForm === null) {
      return;
    }

    const ajaxRegister = new AjaxRegister(registerForm);
    ajaxRegister.initialize();
  }

}

/***/ }),

/***/ "./assets/js/components/ConfirmValidation.ts":
/*!***************************************************!*\
  !*** ./assets/js/components/ConfirmValidation.ts ***!
  \***************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ConfirmValidation; });
class ConfirmValidation {
  constructor(field, confirmField) {
    this.field = field;
    this.confirmField = confirmField;
  }

  initialize() {
    if (!this.field || !this.confirmField) {
      throw new Error('Missing fields');
    }

    const events = ['change', 'input'];

    for (let index = 0; index < events.length; index++) {
      const event = events[index];
      this.confirmField.addEventListener(event, () => {
        if (this.field.value !== this.confirmField.value) {
          const message = 'Value is not equal';
          this.confirmField.setCustomValidity(message);
          this.confirmField.reportValidity();
        } else {
          this.confirmField.setCustomValidity('');
          this.confirmField.reportValidity();
        }
      });
    }
  }

}

/***/ }),

/***/ "./assets/js/components/CookieBar.ts":
/*!*******************************************!*\
  !*** ./assets/js/components/CookieBar.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CookieBar; });
/* harmony import */ var _css_components_cookie_bar_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_cookie-bar.pcss */ "./assets/css/components/_cookie-bar.pcss");
/* harmony import */ var _css_components_cookie_bar_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_components_cookie_bar_pcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/cookies */ "./assets/js/util/cookies.ts");



class CookieBar extends _common_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(selector = document) {
    super();
    this.element = null;
    this.acceptButton = null;
    this.rejectButton = null;
    this.templateElement = selector.querySelector('#cookie-bar-template');
  }

  initialize() {
    var _a, _b;

    if (this.templateElement === null) {
      return;
    }

    if (Object(_util_cookies__WEBPACK_IMPORTED_MODULE_2__["getCookieValue"])(CookieBar.cookieName)) {
      this.templateElement.remove();
      return;
    }

    this.element = this.getElement();
    this.acceptButton = this.element.querySelector('[data-role="cookies-accept"]');
    this.rejectButton = this.element.querySelector('[data-role="cookies-reject"]');
    (_a = this.acceptButton) === null || _a === void 0 ? void 0 : _a.addEventListener('click', this.acceptCookies.bind(this));
    (_b = this.rejectButton) === null || _b === void 0 ? void 0 : _b.addEventListener('click', this.rejectCookies.bind(this));
  }

  getElement() {
    const clone = this.templateElement.cloneNode(true);
    const content = clone.content;
    this.templateElement.parentElement.appendChild(content);
    return document.querySelector('[data-role="cookie-bar"]');
  }

  acceptCookies() {
    var _a;

    CookieBar.setAcceptCookie();
    (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
  }

  rejectCookies() {
    var _a;

    CookieBar.setRejectCookie();
    (_a = this.element) === null || _a === void 0 ? void 0 : _a.remove();
  }

  static setAcceptCookie() {
    Object(_util_cookies__WEBPACK_IMPORTED_MODULE_2__["setCookieValue"])(CookieBar.cookieName, 'true', {
      "max-age": 31536000
    });
  }

  static setRejectCookie() {
    Object(_util_cookies__WEBPACK_IMPORTED_MODULE_2__["setCookieValue"])(CookieBar.cookieName, 'false', {
      "max-age": 31536000
    });
  }

  static onInit(selector = document) {
    const cookieBar = new CookieBar(selector);
    cookieBar.initialize();
  }

}
CookieBar.cookieName = 'approved_cookies';

/***/ }),

/***/ "./assets/js/components/Curtain.ts":
/*!*****************************************!*\
  !*** ./assets/js/components/Curtain.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Curtain; });
/* harmony import */ var _css_components_curtain_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_curtain.pcss */ "./assets/css/components/_curtain.pcss");
/* harmony import */ var _css_components_curtain_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_components_curtain_pcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");


class Curtain extends _common_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(element, foldButton, onlyOnMobile = false) {
    super();
    this.element = element;
    this.foldButton = foldButton;
    this.onlyOnMobile = onlyOnMobile;
    this.defaultHeight = getComputedStyle(this.element).maxHeight !== undefined && getComputedStyle(this.element).maxHeight !== 'none' ? getComputedStyle(this.element).maxHeight : '0px';
  }

  initialize() {
    if (!this.isValid()) {
      return;
    }

    this.setEventListeners();
  }

  setEventListeners() {
    this.foldButton.addEventListener('click', e => {
      if (this.onlyOnMobile && window.innerWidth >= 1024) {
        return;
      }

      e.preventDefault();

      if (!this.element.classList.contains('active')) {
        this.foldButton.classList.add('active');
        this.element.classList.add('active');
        this.element.style.maxHeight = this.defaultHeight;
        setTimeout(() => {
          this.element.style.maxHeight = `${this.element.scrollHeight}px`;
        }, 1);
      } else {
        this.foldButton.classList.remove('active');
        this.element.classList.remove('active');
        this.element.style.maxHeight = `${this.element.scrollHeight}px`;
        setTimeout(() => {
          this.element.style.maxHeight = this.defaultHeight;
        }, 1);
      }

      if (!this.foldButton.dataset.readLess || !this.foldButton.dataset.readMore) {
        return;
      }

      if (this.foldButton.innerText === this.foldButton.dataset.readMore) {
        this.foldButton.innerText = this.foldButton.dataset.readLess;
        return;
      }

      this.foldButton.innerText = this.foldButton.dataset.readMore;
    });
  }

  isValid() {
    if (!this.element || !this.foldButton) {
      return false;
    }

    return true;
  }

  static onInit(selector = document) {
    const toggles = Array.from(selector.querySelectorAll('[data-curtain-toggle]'));

    for (let index = 0; index < toggles.length; index++) {
      const toggle = toggles[index];
      const content = selector.querySelector(`[data-curtain-content="${toggle.dataset.curtainToggle}"]`);

      if (!content) {
        continue;
      }

      const onlyOnMobile = content.dataset.onlyOnMobile && content.dataset.onlyOnMobile === 'true' ? true : false;
      const curtain = new Curtain(content, toggle, onlyOnMobile);
      curtain.initialize();
    }
  }

}

/***/ }),

/***/ "./assets/js/components/EmailValidation.ts":
/*!*************************************************!*\
  !*** ./assets/js/components/EmailValidation.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return EmailValidation; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");


class EmailValidation extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element) {
    super();
    this.ajaxEndpoint = `${window.location.origin}/wp-admin/admin-ajax.php`;
    this.emailInput = element;
    this.form = this.emailInput.closest('form');
  }

  initialize() {
    if (!this.isValid()) {
      return;
    }

    this.setEventListeners();
  }

  setEventListeners() {
    let blurTimeout = null;
    this.emailInput.addEventListener('blur', () => {
      if (blurTimeout) {
        window.clearTimeout(blurTimeout);
      }

      blurTimeout = window.setTimeout(() => {
        this.handleBlurEvent();
      }, 500);
    });
  }

  handleBlurEvent() {
    var _a;

    const formData = new FormData(this.form);
    const value = this.emailInput.value;
    const security = ((_a = formData.get('woocommerce-email-check-nonce')) === null || _a === void 0 ? void 0 : _a.toString()) || '';

    if (!value) {
      return;
    }

    const data = {
      action: 'ajaxemailcheck',
      'email': value,
      'security': security
    };
    Object(_util_requests__WEBPACK_IMPORTED_MODULE_1__["sendAjaxRequest"])(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this));
  }

  onSuccess() {
    this.removeExistingMessages();
  }

  onFailure(error) {
    this.setValidationMessage(error.message);
  }

  setValidationMessage(message) {
    const formRow = this.emailInput.parentElement;
    const formRowParent = formRow === null || formRow === void 0 ? void 0 : formRow.parentElement;

    if (formRow === null || !formRowParent) {
      return;
    }

    this.removeExistingMessages(formRowParent);
    const validationElement = document.createElement('div');
    validationElement.className = 'alert alert--warning inline-form-error';
    validationElement.textContent = message;
    formRowParent.insertBefore(validationElement, formRow);
  }

  removeExistingMessages(selector) {
    var _a;

    const grandparent = selector || ((_a = this.emailInput.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement);

    if (!grandparent) {
      return;
    }

    const existingValidations = Array.from(grandparent.querySelectorAll('.alert--warning'));
    existingValidations.forEach(v => {
      v.remove();
    });
  }

  isValid() {
    if (!this.emailInput || !this.form) {
      return false;
    }

    return true;
  }

  static onInit(selector = document) {
    const registerEmailInput = selector.querySelector('#reg_email');

    if (registerEmailInput === null) {
      return;
    }

    const emailValidation = new EmailValidation(registerEmailInput);
    emailValidation.initialize();
  }

}

/***/ }),

/***/ "./assets/js/components/ForgotPassword.ts":
/*!************************************************!*\
  !*** ./assets/js/components/ForgotPassword.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgotPassword; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _enums_ToastType__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../enums/ToastType */ "./assets/js/enums/ToastType.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* harmony import */ var _FieldValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldValidation */ "./assets/js/components/FieldValidation.ts");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Toast */ "./assets/js/components/Toast.ts");





class ForgotPassword extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(anchor) {
    super();
    this.ajaxEndpoint = `${window.location.origin}/wp-admin/admin-ajax.php`;
    this.passwordForgetAnchor = anchor;
    this.form = this.passwordForgetAnchor.closest('form');
  }

  initialize() {
    if (!this.isValid()) {
      return;
    }

    this.setEventListeners();
  }

  setEventListeners() {
    this.passwordForgetAnchor.addEventListener('click', event => {
      var _a;

      event.preventDefault();
      const formData = new FormData(this.form);
      const username = ((_a = formData.get('username')) === null || _a === void 0 ? void 0 : _a.toString()) || ''; // const security: string = formData.get('forgotsecurity')?.toString() || '';

      const emailField = this.form.username;
      const fieldValidation = new _FieldValidation__WEBPACK_IMPORTED_MODULE_3__["FieldValidation"](emailField);
      fieldValidation.initialize();
      emailField.dispatchEvent(new Event('validate'));

      if (!username) {
        throw new Error('Username not set');
        return;
      }

      const data = {
        action: 'ajaxforgotpassword',
        'user_login': username
      };
      Object(_util_requests__WEBPACK_IMPORTED_MODULE_2__["sendAjaxRequest"])(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this));
    });
  }

  onSuccess(res) {
    const response = res;
    const toast = new _Toast__WEBPACK_IMPORTED_MODULE_4__["default"](response.data, _enums_ToastType__WEBPACK_IMPORTED_MODULE_1__["ToastType"].success);
    toast.initialize();
  }

  onFailure(res) {
    const response = JSON.parse(res);
    const toast = new _Toast__WEBPACK_IMPORTED_MODULE_4__["default"](response.data, _enums_ToastType__WEBPACK_IMPORTED_MODULE_1__["ToastType"].warning);
    toast.initialize();
  }

  isValid() {
    if (!this.passwordForgetAnchor || !this.form) {
      return false;
    }

    return true;
  }

  static onInit(selector = document) {
    const passwordForgetLinks = Array.from(selector.querySelectorAll('[data-role="password-forget"]'));

    for (let index = 0; index < passwordForgetLinks.length; index++) {
      const link = passwordForgetLinks[index];
      const forgotPassword = new ForgotPassword(link);
      forgotPassword.initialize();
    }
  }

}

/***/ }),

/***/ "./assets/js/components/ForgotPasswordToggle.ts":
/*!******************************************************!*\
  !*** ./assets/js/components/ForgotPasswordToggle.ts ***!
  \******************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ForgotPasswordToggle; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");

class ForgotPasswordToggle extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(toggle) {
    super();
    this.toggle = toggle;
    this.passwordForgetWrapper = document.getElementById('password-forget-form');
    this.loginWrapper = document.getElementById('login-register-form');
  }

  initialize() {
    if (!this.isValid()) {
      return;
    }

    this.setEventListeners();
  }

  setEventListeners() {
    this.toggle.addEventListener('click', event => {
      event.preventDefault();
      this.loginWrapper.toggleAttribute('hidden');
      this.passwordForgetWrapper.toggleAttribute('hidden');
    });
  }

  isValid() {
    if (!this.passwordForgetWrapper || !this.loginWrapper) {
      return false;
    }

    return true;
  }

  static onInit(selector = document) {
    const passwordForgetLinks = Array.from(selector.querySelectorAll('[data-role="password-forget-toggle"]'));

    for (let index = 0; index < passwordForgetLinks.length; index++) {
      const link = passwordForgetLinks[index];
      const forgotPassword = new ForgotPasswordToggle(link);
      forgotPassword.initialize();
    }
  }

}

/***/ }),

/***/ "./assets/js/components/HeaderSearch.ts":
/*!**********************************************!*\
  !*** ./assets/js/components/HeaderSearch.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HeaderSearch; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");

class HeaderSearch extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element) {
    super();
    this.element = element;
  }

  initialize() {
    const documentClickHandler = event => {
      const eventTarget = event.target;

      if (eventTarget === null) {
        return;
      }

      const withinHeader = eventTarget.closest('.header__search') !== null ? true : false;

      if (withinHeader) {
        return;
      }

      this.element.classList.remove('active');
      document.body.removeEventListener('click', documentClickHandler);
    };

    this.element.addEventListener('click', event => {
      event.stopImmediatePropagation();
      this.element.classList.add('active');
      const searchInputElement = this.element.querySelector('.product-search-field');

      if (searchInputElement !== null) {
        searchInputElement.focus();
      }

      document.body.removeEventListener('click', documentClickHandler);
      document.body.addEventListener('click', documentClickHandler);
    });
  }

  static onInit(selector = document) {
    const headerSearch = selector.querySelector('.header__search');

    if (headerSearch === null) {
      return;
    }

    const instance = new HeaderSearch(headerSearch);
    instance.initialize();
  }

}

/***/ }),

/***/ "./assets/js/components/InfoPopup.ts":
/*!*******************************************!*\
  !*** ./assets/js/components/InfoPopup.ts ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return InfoPopup; });
/* harmony import */ var _css_components_infoPopup_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_infoPopup.pcss */ "./assets/css/components/_infoPopup.pcss");
/* harmony import */ var _css_components_infoPopup_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_components_infoPopup_pcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");


class InfoPopup extends _common_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(element, event = 'mouseover') {
    super();
    this.element = element;
    this.event = event;
    this.content = this.element.dataset.content || '';
  }

  initialize() {
    if (this.isValid() === false) {
      return;
    }

    this.element.addEventListener(this.event, this.showTippy.bind(this));
  }

  showTippy(e) {
    // @ts-ignore
    let instance = window.tippy(this.element, {
      content: this.content,
      theme: 'light',
      allowHTML: true,
      hideOnClick: true,
      showOnCreate: true,
      interactive: true,
      onHidden: i => {
        i.destroy();
      }
    });

    if (instance === undefined) {
      return;
    }

    instance.show();
    instance.hideWithInteractivity(e);
  }

  isValid() {
    if (!this.element || !this.content) {
      return false;
    }

    return true;
  }

  static onInit(selector = document) {
    const tippyElements = Array.from(selector.querySelectorAll('[data-role="tippy"]'));

    for (let index = 0; index < tippyElements.length; index++) {
      const tippyElement = tippyElements[index];

      if (!tippyElement) {
        continue;
      }

      const infoPopup = new InfoPopup(tippyElement, 'mouseover');
      infoPopup.initialize();
    }
  }

}

/***/ }),

/***/ "./assets/js/components/LazyLoader.ts":
/*!********************************************!*\
  !*** ./assets/js/components/LazyLoader.ts ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return LazyLoader; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");

class LazyLoader extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element) {
    super();
    this.element = element;
    this.elements = this.getElements();

    if (!this.elements.length) {
      return;
    }

    this.initialize();
  }

  initialize() {
    if ('IntersectionObserver' in window) {
      this.onIntersectionObserver(IntersectionObserver);
      return;
    }

    for (let i = 0; i < this.elements.length; i++) {
      const element = this.elements[i];
      this.lazyload(element);
    }
  }

  onIntersectionObserver(ObserverClass = IntersectionObserver) {
    const options = {
      root: null,
      rootMargin: '250px 0px',
      threshold: 0
    };
    const lazyImageObserver = new ObserverClass((entries, lazyImageObserver) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          if (this.element instanceof HTMLPictureElement) {
            this.elements.forEach(lazy => {
              this.lazyload(lazy);
            });
          } else {
            this.lazyload(entry.target);
          }

          lazyImageObserver.unobserve(entry.target);
          lazyImageObserver.disconnect();
        }
      });
    }, options);

    if (this.element instanceof HTMLPictureElement) {
      lazyImageObserver.observe(this.element);
      return;
    }

    this.elements.forEach(lazyImage => {
      lazyImageObserver.observe(lazyImage);
    });
  }

  lazyload(el) {
    const element = el;
    this.manageCssClasses(el);

    if (window.HTMLPictureElement && this.element instanceof HTMLPictureElement) {
      const image = this.element.querySelector('img');

      if (image === null) {
        return;
      }

      this.manageCssClasses(image);
    }

    const loadingSpinner = this.element.closest('.loading-spinner');

    if (loadingSpinner) {
      loadingSpinner.classList.remove('loading-spinner');
    }

    if ((element instanceof HTMLImageElement || element instanceof HTMLSourceElement) && element.dataset.sizes) {
      element.sizes = element.dataset.sizes;
      element.removeAttribute('data-sizes');
    }

    if ((element instanceof HTMLImageElement || element instanceof HTMLSourceElement) && element.dataset.srcset) {
      element.srcset = element.dataset.srcset;
      element.removeAttribute('data-srcset');
    }

    if ((element instanceof HTMLImageElement || element instanceof HTMLSourceElement) && element.dataset.src) {
      element.src = element.dataset.src;
      element.removeAttribute('data-src');
    }
  }

  getElements() {
    if (!this.element) {
      return [];
    }

    if (this.element instanceof HTMLImageElement && (this.element.dataset.src || this.element.dataset.srcset)) {
      return [this.element];
    } else if (window.HTMLPictureElement && this.element instanceof HTMLPictureElement) {
      return Array.from(this.element.querySelectorAll('img[data-src], source[data-srcset]'));
    } else {
      return Array.from(this.element.querySelectorAll('img[data-src]'));
    }
  }

  manageCssClasses(element) {
    element.classList.add('loaded');
    element.classList.remove('loading');
  }

  static onInit() {
    super.onInit();
    const lazyloadElements = Array.from(document.querySelectorAll('[data-lazyload]'));

    for (let i = 0; i < lazyloadElements.length; i++) {
      const element = lazyloadElements[i];
      new LazyLoader(element);
    }
  }

}

/***/ }),

/***/ "./assets/js/components/NewsletterSubscribe.ts":
/*!*****************************************************!*\
  !*** ./assets/js/components/NewsletterSubscribe.ts ***!
  \*****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsletterSubscribe; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _common_DataLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/DataLayer */ "./assets/js/common/DataLayer.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* harmony import */ var _FieldValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldValidation */ "./assets/js/components/FieldValidation.ts");




class NewsletterSubscribe extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(form) {
    super();
    this.ajaxEndpoint = `${window.location.origin}/wp-admin/admin-ajax.php`;
    this.dataLayer = _common_DataLayer__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.form = form;
    this.emailField = this.form.querySelector('[name="email"]');
  }

  initialize() {
    if (!this.isValid()) {
      throw new Error('Newsletter subscribe component not valid');
    }

    this.setEventListeners();
  }

  setEventListeners() {
    const validator = new _FieldValidation__WEBPACK_IMPORTED_MODULE_3__["FieldValidation"](this.emailField);
    validator.initialize();
    this.form.addEventListener('submit', event => {
      var _a, _b, _c;

      event.preventDefault();
      const formData = new FormData(this.form);
      const firstName = ((_a = formData.get('first-name')) === null || _a === void 0 ? void 0 : _a.toString()) || '';
      const companyName = ((_b = formData.get('company-name')) === null || _b === void 0 ? void 0 : _b.toString()) || '';
      const email = ((_c = formData.get('email')) === null || _c === void 0 ? void 0 : _c.toString()) || '';

      if (!email) {
        return;
      }

      const data = {
        action: 'mailchimpsubscribe',
        'email': email,
        'firstName': firstName,
        'companyName': companyName
      };
      _FieldValidation__WEBPACK_IMPORTED_MODULE_3__["FieldValidation"].removeErrorText(this.emailField);
      Object(_util_requests__WEBPACK_IMPORTED_MODULE_2__["sendAjaxRequest"])(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this));
    });
  }

  isValid() {
    if (!this.form || !this.emailField) {
      return false;
    }

    return true;
  }

  onSuccess(response, event) {
    _FieldValidation__WEBPACK_IMPORTED_MODULE_3__["FieldValidation"].appendSuccessText(this.emailField, response.data.toString());
    this.emailField.value = '';
    const data = {
      event: 'GAEvent',
      eventCategory: 'newsletter',
      eventAction: 'subscribe',
      eventLabel: this.form.id || 'generic'
    };
    this.dataLayer.push(data);
  }

  onFailure(error) {
    _FieldValidation__WEBPACK_IMPORTED_MODULE_3__["FieldValidation"].appendErrorText(this.emailField, error.message);
    throw error;
  }

  static onInit(selector = document) {
    // #TODO: Switch to common selector
    const forms = Array.from(selector.querySelectorAll('#footer-newsletter-form, #homepage-newsletter-form, #ajax-newsletter-form'));

    for (let index = 0; index < forms.length; index++) {
      const form = forms[index];
      const newsletterSubscribe = new NewsletterSubscribe(form);
      newsletterSubscribe.initialize();
    }
  }

}

/***/ }),

/***/ "./assets/js/components/PasswordReveal.ts":
/*!************************************************!*\
  !*** ./assets/js/components/PasswordReveal.ts ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PasswordReveal; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");

class PasswordReveal extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element) {
    super();
    this.element = element;
    this.passwordInput = this.element.querySelector('input[type="password"]');
  }

  initialize() {
    const button = this.createRevealButton();
    this.element.appendChild(button);
    button.addEventListener('click', () => {
      button.classList.toggle('opened');

      if (this.passwordInput.type === 'password') {
        this.passwordInput.type = 'text';
        return;
      }

      this.passwordInput.type = 'password';
    });
  }

  createRevealButton() {
    const button = document.createElement('BUTTON');
    button.type = 'button';
    button.className = 'password-reveal-toggle';
    button.tabIndex = -1;
    return button;
  }

  static onInit(selector = document) {
    const passwordRows = Array.from(selector.querySelectorAll('.password-row'));

    for (let index = 0; index < passwordRows.length; index++) {
      const passwordRow = passwordRows[index];

      if (passwordRow === null) {
        return;
      }

      const passwordReveal = new PasswordReveal(passwordRow);
      passwordReveal.initialize();
    }
  }

}

/***/ }),

/***/ "./assets/js/components/ScrollToContent.ts":
/*!*************************************************!*\
  !*** ./assets/js/components/ScrollToContent.ts ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScrollToContent; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_scrollToTarget__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/scrollToTarget */ "./assets/js/util/scrollToTarget.ts");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _ScrollToContent_element, _ScrollToContent_target;



class ScrollToContent extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element, target) {
    super();

    _ScrollToContent_element.set(this, void 0);

    _ScrollToContent_target.set(this, void 0);

    __classPrivateFieldSet(this, _ScrollToContent_element, element, "f");

    __classPrivateFieldSet(this, _ScrollToContent_target, target, "f");
  }

  initialize() {
    __classPrivateFieldGet(this, _ScrollToContent_element, "f").addEventListener('click', event => {
      event.preventDefault();
      const headerOffset = !__classPrivateFieldGet(this, _ScrollToContent_element, "f").dataset.headerOffset;
      Object(_util_scrollToTarget__WEBPACK_IMPORTED_MODULE_1__["default"])(__classPrivateFieldGet(this, _ScrollToContent_target, "f"), 0, headerOffset);
    });
  }

  static onInit(selector = document) {
    const elements = Array.from(selector.querySelectorAll('[data-scroll-to]'));
    elements.forEach(element => {
      const targetId = element.dataset.scrollTo || '';
      const target = document.getElementById(targetId);

      if (!target) {
        return;
      }

      const instance = new ScrollToContent(element, target);
      instance.initialize();
    });
  }

}
_ScrollToContent_element = new WeakMap(), _ScrollToContent_target = new WeakMap();

/***/ }),

/***/ "./assets/js/components/Toast.ts":
/*!***************************************!*\
  !*** ./assets/js/components/Toast.ts ***!
  \***************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Toast; });
/* harmony import */ var _css_components_toast_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_toast.pcss */ "./assets/css/components/_toast.pcss");
/* harmony import */ var _css_components_toast_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_components_toast_pcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _lavandre_button_dist_src_lavandre_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lavandre/button/dist/src/lavandre-button */ "./node_modules/@lavandre/button/dist/src/lavandre-button.js");
/* harmony import */ var _lavandre_button_dist_src_LavandreButton_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @lavandre/button/dist/src/LavandreButton.js */ "./node_modules/@lavandre/button/dist/src/LavandreButton.js");



class Toast {
  constructor(message, type, cta, timeout = 5000) {
    this.element = null;
    this.message = message;
    this.type = type;
    this.timeout = timeout;

    if (cta) {
      this.ctaButton = cta;
    }
  }

  initialize() {
    if (!this.isValid()) {
      return;
    }

    const element = this.create();
    document.body.appendChild(element);
    element.classList.add('toast--visible');
    setTimeout(() => {
      this.remove();
    }, this.timeout);
  }

  remove() {
    if (this.element === null) {
      return;
    }

    this.element.addEventListener('transitionend', () => {
      document.body.removeChild(this.element);
    });
    this.element.classList.remove('toast--visible');
  }

  create() {
    this.element = document.createElement('DIV');
    this.element.classList.add('toast');
    const container = document.createElement('DIV');
    container.classList.add('toast__container');
    const icon = document.createElement('IMG');
    icon.src = `/wp-content/themes/lavandre/public/images/icons/${this.type}.svg`;
    icon.alt = `${this.type} icon`;
    icon.classList.add('toast__icon');
    icon.width = 24;
    icon.height = 24;
    const paragraph = document.createElement('P');
    const message = document.createElement('STRONG');
    message.classList.add('toast__message');
    message.innerText = this.message;
    paragraph.appendChild(message);
    const closeButton = document.createElement('BUTTON');
    closeButton.classList.add('eicon-close', 'toast__close');
    closeButton.addEventListener('click', () => {
      this.remove();
    });
    container.appendChild(icon);
    container.appendChild(paragraph);
    container.appendChild(closeButton);

    if (this.ctaButton) {
      const button = new _lavandre_button_dist_src_LavandreButton_js__WEBPACK_IMPORTED_MODULE_2__["LavandreButton"]();
      button.href = this.ctaButton.href;
      button.primary = true;
      button.size = 'large';
      button.innerText = this.ctaButton.text;
      container.appendChild(button);
    }

    this.element.appendChild(container);
    return this.element;
  }

  isValid() {
    if (!this.message || !this.type) {
      return false;
    }

    return true;
  }

}

/***/ }),

/***/ "./assets/js/enums/ToastType.ts":
/*!**************************************!*\
  !*** ./assets/js/enums/ToastType.ts ***!
  \**************************************/
/*! exports provided: ToastType */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ToastType", function() { return ToastType; });
var ToastType;

(function (ToastType) {
  ToastType["success"] = "success";
  ToastType["warning"] = "warning";
  ToastType["danger"] = "danger";
})(ToastType || (ToastType = {}));

/***/ }),

/***/ "./assets/js/ui/NewsletterPopup.ts":
/*!*****************************************!*\
  !*** ./assets/js/ui/NewsletterPopup.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return NewsLetterPopup; });
/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/cookies */ "./assets/js/util/cookies.ts");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup */ "./assets/js/ui/Popup.ts");


class NewsLetterPopup extends _Popup__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static onInit(selector = document) {
    if (Object(_util_cookies__WEBPACK_IMPORTED_MODULE_0__["getCookieValue"])('newsletter-popup-seen')) {
      return;
    }

    setTimeout(() => {
      NewsLetterPopup.openPopup('newsletter-popup', null, selector);
      Object(_util_cookies__WEBPACK_IMPORTED_MODULE_0__["setCookieValue"])('newsletter-popup-seen', 'true', {
        "max-age": 31536000
      });
    }, 3000);
  }

}

/***/ }),

/***/ "./assets/js/ui/Popup.ts":
/*!*******************************!*\
  !*** ./assets/js/ui/Popup.ts ***!
  \*******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Popup; });
/* harmony import */ var _css_components_popup_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_popup.pcss */ "./assets/css/components/_popup.pcss");
/* harmony import */ var _css_components_popup_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_components_popup_pcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/EventEmitter */ "./assets/js/common/EventEmitter.ts");
/* harmony import */ var _Dialog__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Dialog */ "./assets/js/ui/Dialog.ts");



class Popup extends _Dialog__WEBPACK_IMPORTED_MODULE_2__["default"] {
  constructor() {
    super(...arguments);
    this.dataAttribute = 'data-popup-name';
    this.classes = {
      open: 'popup--opened',
      closed: 'popup--closed'
    };
  }

  static openPopup(popupID, element = null, selector = document) {
    var _a;

    let popup = selector.querySelector(`[data-popup-name="${popupID}"]`);

    if (popup === null) {
      const template = document.querySelector(`[data-popup-template="${popupID}"]`);

      if (template === null) {
        if (element && element instanceof HTMLAnchorElement) {
          window.location.href = element.href;
          return;
        }

        return;
      }

      const clone = template.cloneNode(true);
      const content = clone.content;
      (_a = template.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(content);
      popup = document.querySelector(`[data-popup-name="${popupID}"]`);
      _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit('template-instantiated', popup);

      if (popup === null) {
        return;
      }

      const popupInstance = new Popup(popup);
      popupInstance.initialize();
    }

    if (!popup.open) {
      const openEvent = new CustomEvent('open');
      popup.dispatchEvent(openEvent);
    }
  }

  static onInit() {
    super.onInit();
    const popupLinks = Array.from(document.querySelectorAll('[data-popup]'));

    for (let index = 0; index < popupLinks.length; index++) {
      const element = popupLinks[index];
      element.removeEventListener('click', this.handleCreationEvent);
      element.addEventListener('click', this.handleCreationEvent);
    }
  }

  static handleCreationEvent(event) {
    event.preventDefault();
    const popupID = this.dataset.popup || "";
    Popup.openPopup(popupID, this);
  }

}

/***/ }),

/***/ "./assets/js/util/cookies.ts":
/*!***********************************!*\
  !*** ./assets/js/util/cookies.ts ***!
  \***********************************/
/*! exports provided: getCookieValue, setCookieValue */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getCookieValue", function() { return getCookieValue; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCookieValue", function() { return setCookieValue; });
function getCookieValue(name) {
  const cookie = document.cookie.split('; ').find(row => row.startsWith(name));

  if (cookie === undefined) {
    return null;
  }

  return cookie.split('=')[1];
}
function setCookieValue(name, value, options) {
  const cookieOptions = Object.assign({
    path: '/'
  }, options);
  let updatedCookie = `${name}=${value}`; // eslint-disable-next-line guard-for-in

  for (const optionKey in cookieOptions) {
    updatedCookie += `; ${optionKey}`;
    const optionValue = cookieOptions[optionKey];

    if (optionValue !== true) {
      updatedCookie += `=${optionValue}`;
    }
  }

  document.cookie = updatedCookie;
}

/***/ }),

/***/ "./assets/js/util/dom.ts":
/*!*******************************!*\
  !*** ./assets/js/util/dom.ts ***!
  \*******************************/
/*! exports provided: parseStringAsHtml, getAbsoluteHeight */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "parseStringAsHtml", function() { return parseStringAsHtml; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getAbsoluteHeight", function() { return getAbsoluteHeight; });
function parseStringAsHtml(content, selector = 'template') {
  const domParser = new DOMParser();
  const parsed = domParser.parseFromString(content, 'text/html');
  return parsed.querySelector(selector) || parsed.body;
}
function getAbsoluteHeight(el) {
  const styles = window.getComputedStyle(el);
  const margin = parseFloat(styles['marginTop']) + parseFloat(styles['marginBottom']);
  return Math.ceil(el.offsetHeight + margin);
}

/***/ }),

/***/ "./assets/js/util/links.ts":
/*!*********************************!*\
  !*** ./assets/js/util/links.ts ***!
  \*********************************/
/*! exports provided: setCurrentLinkClass, stripTrailingSlash */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "setCurrentLinkClass", function() { return setCurrentLinkClass; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "stripTrailingSlash", function() { return stripTrailingSlash; });
function setCurrentLinkClass() {
  const pathName = window.location.pathname;
  const formattedPathName = stripTrailingSlash(pathName);
  const fullUrl = window.location.href;
  const formattedUrl = stripTrailingSlash(fullUrl);
  const anchors = Array.from(document.querySelectorAll(`
        nav a[href="${pathName}"],
        nav a[href="${formattedPathName}"],
        nav a[href="${fullUrl}"],
        nav a[href="${formattedUrl}"]
    `));
  anchors.forEach(anchor => {
    anchor.classList.add('current-link');
  });
}
function stripTrailingSlash(str) {
  return str.endsWith('/') ? str.slice(0, -1) : str;
}

/***/ }),

/***/ "./assets/js/util/loadRecaptcha.ts":
/*!*****************************************!*\
  !*** ./assets/js/util/loadRecaptcha.ts ***!
  \*****************************************/
/*! exports provided: sitekey, loadRecaptcha */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "sitekey", function() { return sitekey; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "loadRecaptcha", function() { return loadRecaptcha; });
let loaded = false;
const sitekey = '6Ldv2RkcAAAAABCCL1JR5DlmEET4Ny_2CmkVa8Nv';
function loadRecaptcha(elements) {
  loopThroughElements(elements, true, () => {
    insertRecaptchaScript(elements);
  });
}

function insertRecaptchaScript(elements) {
  if (!loaded) {
    var head = document.getElementsByTagName('head')[0];
    var script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = 'https://www.google.com/recaptcha/api.js?render=' + sitekey;
    head.appendChild(script);
    loaded = true;
  }

  loopThroughElements(elements, false, () => {
    insertRecaptchaScript(elements);
  });
}

function loopThroughElements(elements, addEvent, callback) {
  for (let i = 0; i < elements.length; i++) {
    ['focus', 'click', 'touchend', 'blur', 'input', 'change', 'propertychange'].forEach(function (evt) {
      if (addEvent) {
        elements[i].addEventListener(evt, callback);
      } else {
        elements[i].removeEventListener(evt, callback);
      }
    });
  }
}

/***/ }),

/***/ "./assets/js/util/scrollToTarget.ts":
/*!******************************************!*\
  !*** ./assets/js/util/scrollToTarget.ts ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return scrollToTarget; });
function scrollToTarget(target, defaultOffset = 0, headerOffset = true) {
  const bodyTopPosition = document.body.getBoundingClientRect().top;
  const elementPosition = target.getBoundingClientRect().top - bodyTopPosition;
  let offset = defaultOffset;

  if (headerOffset) {
    const header = document.getElementById('header');

    if (header) {
      offset += header.clientHeight;
    }
  }

  const offsetPosition = elementPosition - offset + 1;
  window.scrollTo({
    top: offsetPosition,
    behavior: 'smooth'
  });
}

/***/ }),

/***/ "./assets/js/web-components/AccordionElement.ts":
/*!******************************************************!*\
  !*** ./assets/js/web-components/AccordionElement.ts ***!
  \******************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_components_accordion_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_accordion.pcss */ "./assets/css/components/_accordion.pcss");
/* harmony import */ var _css_components_accordion_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_components_accordion_pcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dom */ "./assets/js/util/dom.ts");
var __classPrivateFieldSet = undefined && undefined.__classPrivateFieldSet || function (receiver, state, value, kind, f) {
  if (kind === "m") throw new TypeError("Private method is not writable");
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
  return kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value), value;
};

var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _AccordionElement_instances, _AccordionElement_curtains, _AccordionElement_closeOtherCurtains, _CurtainElement_instances, _CurtainElement_summary, _CurtainElement_content, _CurtainElement_isClosing, _CurtainElement_animation, _CurtainElement_handleClick, _CurtainElement_open, _CurtainElement_expand, _CurtainElement_onAnimationFinish;




class AccordionElement extends HTMLElement {
  constructor() {
    super(...arguments);

    _AccordionElement_instances.add(this);

    _AccordionElement_curtains.set(this, []);
  }

  connectedCallback() {
    __classPrivateFieldSet(this, _AccordionElement_curtains, Array.from(this.querySelectorAll("details")), "f");

    __classPrivateFieldGet(this, _AccordionElement_curtains, "f").forEach(curtain => {
      curtain.addEventListener("toggle", () => {
        if (!curtain.open) {
          return;
        }

        __classPrivateFieldGet(this, _AccordionElement_instances, "m", _AccordionElement_closeOtherCurtains).call(this, curtain);
      });
    });
  }

}

_AccordionElement_curtains = new WeakMap(), _AccordionElement_instances = new WeakSet(), _AccordionElement_closeOtherCurtains = function _AccordionElement_closeOtherCurtains(curtain) {
  const otherCurtains = __classPrivateFieldGet(this, _AccordionElement_curtains, "f").filter(c => curtain !== c);

  otherCurtains.forEach(curtain => {
    const curtainElement = curtain;
    curtainElement.open = false;
  });
};

class CurtainElement extends HTMLDetailsElement {
  constructor() {
    super(...arguments);

    _CurtainElement_instances.add(this);

    _CurtainElement_summary.set(this, this.querySelector("summary"));

    _CurtainElement_content.set(this, this.querySelector(".curtain-content"));

    _CurtainElement_isClosing.set(this, false);

    _CurtainElement_animation.set(this, null);

    _CurtainElement_handleClick.set(this, event => {
      event.stopPropagation();
      event.stopImmediatePropagation();

      if (event.target instanceof HTMLAnchorElement) {
        event.preventDefault();
      }

      if (!__classPrivateFieldGet(this, _CurtainElement_content, "f")) {
        this.dispatchEvent(new Event('close'));
        return;
      }

      if (__classPrivateFieldGet(this, _CurtainElement_isClosing, "f") || this.open === false) {
        __classPrivateFieldGet(this, _CurtainElement_instances, "m", _CurtainElement_open).call(this);

        return;
      }

      this.close();
    });
  }

  get open() {
    return this.hasAttribute('open');
  }

  set open(value) {
    this.toggleAttribute('open', value);
  }

  connectedCallback() {
    __classPrivateFieldGet(this, _CurtainElement_summary, "f").addEventListener("click", __classPrivateFieldGet(this, _CurtainElement_handleClick, "f"), {
      capture: true,
      passive: false
    });
  }

  disconnectedCallback() {
    __classPrivateFieldGet(this, _CurtainElement_summary, "f").removeEventListener("click", __classPrivateFieldGet(this, _CurtainElement_handleClick, "f"));
  }

  close() {
    __classPrivateFieldSet(this, _CurtainElement_isClosing, true, "f");

    this.classList.add('closing');
    const startHeight = `${this.offsetHeight}px`;
    const endHeight = `${__classPrivateFieldGet(this, _CurtainElement_summary, "f").offsetHeight}px`;

    if (__classPrivateFieldGet(this, _CurtainElement_animation, "f")) {
      __classPrivateFieldGet(this, _CurtainElement_animation, "f").cancel();
    }

    __classPrivateFieldSet(this, _CurtainElement_animation, this.animate({
      height: [startHeight, endHeight]
    }, {
      duration: 400,
      easing: "ease-out"
    }), "f");

    __classPrivateFieldGet(this, _CurtainElement_animation, "f").onfinish = () => __classPrivateFieldGet(this, _CurtainElement_instances, "m", _CurtainElement_onAnimationFinish).call(this, false);

    __classPrivateFieldGet(this, _CurtainElement_animation, "f").oncancel = () => {
      __classPrivateFieldSet(this, _CurtainElement_isClosing, false, "f");

      this.classList.remove('closing');
    };
  }

}

_CurtainElement_summary = new WeakMap(), _CurtainElement_content = new WeakMap(), _CurtainElement_isClosing = new WeakMap(), _CurtainElement_animation = new WeakMap(), _CurtainElement_handleClick = new WeakMap(), _CurtainElement_instances = new WeakSet(), _CurtainElement_open = function _CurtainElement_open() {
  this.style.height = `${this.offsetHeight}px`;
  this.open = true;
  window.requestAnimationFrame(() => __classPrivateFieldGet(this, _CurtainElement_instances, "m", _CurtainElement_expand).call(this));
}, _CurtainElement_expand = function _CurtainElement_expand() {
  const startHeight = `${this.offsetHeight}px`;
  const endHeight = `${__classPrivateFieldGet(this, _CurtainElement_summary, "f").offsetHeight + Object(_util_dom__WEBPACK_IMPORTED_MODULE_1__["getAbsoluteHeight"])(__classPrivateFieldGet(this, _CurtainElement_content, "f"))}px`;

  if (__classPrivateFieldGet(this, _CurtainElement_animation, "f")) {
    __classPrivateFieldGet(this, _CurtainElement_animation, "f").cancel();
  }

  __classPrivateFieldSet(this, _CurtainElement_animation, this.animate({
    height: [startHeight, endHeight]
  }, {
    duration: 400,
    easing: "ease-out"
  }), "f");

  __classPrivateFieldGet(this, _CurtainElement_animation, "f").onfinish = () => __classPrivateFieldGet(this, _CurtainElement_instances, "m", _CurtainElement_onAnimationFinish).call(this, true);
}, _CurtainElement_onAnimationFinish = function _CurtainElement_onAnimationFinish(open) {
  this.open = open;

  __classPrivateFieldSet(this, _CurtainElement_animation, null, "f");

  __classPrivateFieldSet(this, _CurtainElement_isClosing, false, "f");

  this.classList.remove('closing');
  this.style.height = '';
  this.dispatchEvent(new Event('toggle'));
};
customElements.define("accordion-element", AccordionElement);
customElements.define("curtain-element", CurtainElement, {
  extends: 'details'
});

/***/ })

},[["./assets/js/app.ts","runtime","vendors~app~productDetail","vendors~app~checkout","app~cart~checkout~home~productDetail~sustainability","app~productDetail"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5wY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fYWNjb3JkaW9uLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19jb29raWUtYmFyLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19jdXJ0YWluLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19pbmZvUG9wdXAucGNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3BvcHVwLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL190b2FzdC5wY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheExvZ2luLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FqYXhSZWdpc3Rlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Db25maXJtVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Db29raWVCYXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ3VydGFpbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbWFpbFZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmRUb2dnbGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSGVhZGVyU2VhcmNoLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0luZm9Qb3B1cC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9MYXp5TG9hZGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05ld3NsZXR0ZXJTdWJzY3JpYmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFzc3dvcmRSZXZlYWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2Nyb2xsVG9Db250ZW50LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1RvYXN0LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9lbnVtcy9Ub2FzdFR5cGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3VpL05ld3NsZXR0ZXJQb3B1cC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdWkvUG9wdXAudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwvY29va2llcy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC9kb20udHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwvbGlua3MudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwvbG9hZFJlY2FwdGNoYS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC9zY3JvbGxUb1RhcmdldC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvQWNjb3JkaW9uRWxlbWVudC50cyJdLCJuYW1lcyI6WyJBcHAiLCJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImV2ZW50RW1pdHRlciIsIkV2ZW50RW1pdHRlciIsImNvbXBvbmVudHMiLCJDb29raWVCYXIiLCJTaWRlUGFuZWwiLCJDdXJ0YWluIiwiSW5mb1BvcHVwIiwiUGFzc3dvcmRSZXZlYWwiLCJFbWFpbFZhbGlkYXRpb24iLCJOZXdzbGV0dGVyU3Vic2NyaWJlIiwiRm9yZ290UGFzc3dvcmQiLCJGb3Jnb3RQYXNzd29yZFRvZ2dsZSIsIkFqYXhMb2dpbiIsIkFqYXhSZWdpc3RlciIsIkZpZWxkVmFsaWRhdGlvbiIsIkhlYWRlclNlYXJjaCIsIkxhenlMb2FkZXIiLCJOZXdzTGV0dGVyUG9wdXAiLCJTY3JvbGxUb0NvbnRlbnQiLCJpbml0aWFsaXplIiwic2V0Q3VycmVudExpbmtDbGFzcyIsIndwRm9ybXNTdWJtaXRCdXR0b25zIiwiQXJyYXkiLCJmcm9tIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yQWxsIiwiZm9yRWFjaCIsImJ1dHRvbiIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImFwcEluaXQiLCJhcHAiLCJsaXN0IiwicXVlcnlTZWxlY3RvciIsIml0ZW1zIiwidG90YWxXaWR0aCIsIml0ZW0iLCJjbGllbnRXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJDb21wb25lbnQiLCJmb3JtIiwiYWpheEVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJpc1ZhbGlkIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJmaWVsZHMiLCJDeXByZXNzIiwibG9hZFJlY2FwdGNoYSIsImluZGV4IiwibGVuZ3RoIiwiZmllbGQiLCJ2YWxpZGF0b3IiLCJzZXRUaW1lb3V0IiwibWF0Y2hlcyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInN1Ym1pdEJ1dHRvbiIsInR5cGUiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJvblN1Ym1pdCIsIl9hIiwiX2IiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkIiwidmFsaWRpdHkiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidXNlcm5hbWUiLCJnZXQiLCJ0b1N0cmluZyIsInBhc3N3b3JkIiwiZ3JlY2FwdGNoYSIsImRhdGEiLCJ1bmRlZmluZWQiLCJyZWFkeSIsImV4ZWN1dGUiLCJzaXRla2V5IiwiYWN0aW9uIiwidGhlbiIsInRva2VuIiwicmVjYXB0Y2hhVG9rZW4iLCJzZW5kQWpheFJlcXVlc3QiLCJvblN1Y2Nlc3MiLCJiaW5kIiwib25GYWlsdXJlIiwicmVzIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiRXJyb3IiLCJocmVmIiwiZGF0YXNldCIsInJlZGlyZWN0VXJsIiwicmVkaXJlY3QiLCJjdGFCdXR0b24iLCJ0ZXh0IiwidG9hc3QiLCJUb2FzdCIsIlRvYXN0VHlwZSIsInBhbmVsIiwiY2xvc2VzdCIsIkN1c3RvbUV2ZW50IiwiYm9keSIsImNsYXNzTGlzdCIsImFkZCIsIm1ldGhvZCIsIkRhdGFMYXllciIsInB1c2giLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwid2FybmluZyIsIm9uSW5pdCIsInNlbGVjdG9yIiwibG9naW5Gb3JtcyIsImFqYXhMb2dpbiIsImVtYWlsRmllbGQiLCJlbWFpbFZhbGlkYXRpb24iLCJwYXNzd29yZEZpZWxkIiwiY29uZmlybVBhc3N3b3JkRmllbGQiLCJjb25maXJtVmFsaWRhdGlvbiIsIkNvbmZpcm1WYWxpZGF0aW9uIiwiX2MiLCJfZCIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyZWdpc3RlckZvcm0iLCJhamF4UmVnaXN0ZXIiLCJjb25maXJtRmllbGQiLCJldmVudHMiLCJ2YWx1ZSIsInNldEN1c3RvbVZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJlbGVtZW50IiwiYWNjZXB0QnV0dG9uIiwicmVqZWN0QnV0dG9uIiwidGVtcGxhdGVFbGVtZW50IiwiZ2V0Q29va2llVmFsdWUiLCJjb29raWVOYW1lIiwicmVtb3ZlIiwiZ2V0RWxlbWVudCIsImFjY2VwdENvb2tpZXMiLCJyZWplY3RDb29raWVzIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJjb250ZW50IiwicGFyZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0QWNjZXB0Q29va2llIiwic2V0UmVqZWN0Q29va2llIiwic2V0Q29va2llVmFsdWUiLCJjb29raWVCYXIiLCJmb2xkQnV0dG9uIiwib25seU9uTW9iaWxlIiwiZGVmYXVsdEhlaWdodCIsImdldENvbXB1dGVkU3R5bGUiLCJtYXhIZWlnaHQiLCJlIiwiaW5uZXJXaWR0aCIsImNvbnRhaW5zIiwic2Nyb2xsSGVpZ2h0IiwicmVhZExlc3MiLCJyZWFkTW9yZSIsImlubmVyVGV4dCIsInRvZ2dsZXMiLCJ0b2dnbGUiLCJjdXJ0YWluVG9nZ2xlIiwiY3VydGFpbiIsImVtYWlsSW5wdXQiLCJibHVyVGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZUJsdXJFdmVudCIsInNlY3VyaXR5IiwicmVtb3ZlRXhpc3RpbmdNZXNzYWdlcyIsImVycm9yIiwic2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJmb3JtUm93IiwiZm9ybVJvd1BhcmVudCIsInZhbGlkYXRpb25FbGVtZW50IiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRleHRDb250ZW50IiwiaW5zZXJ0QmVmb3JlIiwiZ3JhbmRwYXJlbnQiLCJleGlzdGluZ1ZhbGlkYXRpb25zIiwidiIsInJlZ2lzdGVyRW1haWxJbnB1dCIsImFuY2hvciIsInBhc3N3b3JkRm9yZ2V0QW5jaG9yIiwiZmllbGRWYWxpZGF0aW9uIiwicGFzc3dvcmRGb3JnZXRMaW5rcyIsImxpbmsiLCJmb3Jnb3RQYXNzd29yZCIsInBhc3N3b3JkRm9yZ2V0V3JhcHBlciIsImdldEVsZW1lbnRCeUlkIiwibG9naW5XcmFwcGVyIiwidG9nZ2xlQXR0cmlidXRlIiwiZG9jdW1lbnRDbGlja0hhbmRsZXIiLCJldmVudFRhcmdldCIsInRhcmdldCIsIndpdGhpbkhlYWRlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzZWFyY2hJbnB1dEVsZW1lbnQiLCJmb2N1cyIsImhlYWRlclNlYXJjaCIsImluc3RhbmNlIiwic2hvd1RpcHB5IiwidGlwcHkiLCJ0aGVtZSIsImFsbG93SFRNTCIsImhpZGVPbkNsaWNrIiwic2hvd09uQ3JlYXRlIiwiaW50ZXJhY3RpdmUiLCJvbkhpZGRlbiIsImkiLCJkZXN0cm95Iiwic2hvdyIsImhpZGVXaXRoSW50ZXJhY3Rpdml0eSIsInRpcHB5RWxlbWVudHMiLCJ0aXBweUVsZW1lbnQiLCJpbmZvUG9wdXAiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzIiwib25JbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwibGF6eWxvYWQiLCJPYnNlcnZlckNsYXNzIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwibGF6eUltYWdlT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIkhUTUxQaWN0dXJlRWxlbWVudCIsImxhenkiLCJ1bm9ic2VydmUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImxhenlJbWFnZSIsImVsIiwibWFuYWdlQ3NzQ2xhc3NlcyIsImltYWdlIiwibG9hZGluZ1NwaW5uZXIiLCJIVE1MSW1hZ2VFbGVtZW50IiwiSFRNTFNvdXJjZUVsZW1lbnQiLCJzaXplcyIsInNyY3NldCIsInNyYyIsImxhenlsb2FkRWxlbWVudHMiLCJkYXRhTGF5ZXIiLCJjb21wYW55TmFtZSIsInJlbW92ZUVycm9yVGV4dCIsImFwcGVuZFN1Y2Nlc3NUZXh0IiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiZXZlbnRMYWJlbCIsImlkIiwiYXBwZW5kRXJyb3JUZXh0IiwiZm9ybXMiLCJuZXdzbGV0dGVyU3Vic2NyaWJlIiwicGFzc3dvcmRJbnB1dCIsImNyZWF0ZVJldmVhbEJ1dHRvbiIsInRhYkluZGV4IiwicGFzc3dvcmRSb3dzIiwicGFzc3dvcmRSb3ciLCJwYXNzd29yZFJldmVhbCIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJjYWxsIiwic2V0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsIl9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCIsIl9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0IiwiaGVhZGVyT2Zmc2V0Iiwic2Nyb2xsVG9UYXJnZXQiLCJ0YXJnZXRJZCIsInNjcm9sbFRvIiwiV2Vha01hcCIsImN0YSIsInRpbWVvdXQiLCJjcmVhdGUiLCJyZW1vdmVDaGlsZCIsImNvbnRhaW5lciIsImljb24iLCJhbHQiLCJoZWlnaHQiLCJwYXJhZ3JhcGgiLCJjbG9zZUJ1dHRvbiIsIkxhdmFuZHJlQnV0dG9uIiwicHJpbWFyeSIsInNpemUiLCJQb3B1cCIsIm9wZW5Qb3B1cCIsIkRpYWxvZyIsImRhdGFBdHRyaWJ1dGUiLCJjbGFzc2VzIiwib3BlbiIsImNsb3NlZCIsInBvcHVwSUQiLCJwb3B1cCIsInRlbXBsYXRlIiwiSFRNTEFuY2hvckVsZW1lbnQiLCJlbWl0IiwicG9wdXBJbnN0YW5jZSIsIm9wZW5FdmVudCIsInBvcHVwTGlua3MiLCJoYW5kbGVDcmVhdGlvbkV2ZW50IiwibmFtZSIsImNvb2tpZSIsInNwbGl0IiwiZmluZCIsInJvdyIsInN0YXJ0c1dpdGgiLCJjb29raWVPcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwicGF0aCIsInVwZGF0ZWRDb29raWUiLCJvcHRpb25LZXkiLCJvcHRpb25WYWx1ZSIsInBhcnNlU3RyaW5nQXNIdG1sIiwiZG9tUGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VkIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2V0QWJzb2x1dGVIZWlnaHQiLCJzdHlsZXMiLCJtYXJnaW4iLCJwYXJzZUZsb2F0IiwiTWF0aCIsImNlaWwiLCJvZmZzZXRIZWlnaHQiLCJwYXRoTmFtZSIsInBhdGhuYW1lIiwiZm9ybWF0dGVkUGF0aE5hbWUiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJmdWxsVXJsIiwiZm9ybWF0dGVkVXJsIiwiYW5jaG9ycyIsInN0ciIsImVuZHNXaXRoIiwic2xpY2UiLCJsb2FkZWQiLCJsb29wVGhyb3VnaEVsZW1lbnRzIiwiaW5zZXJ0UmVjYXB0Y2hhU2NyaXB0IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2NyaXB0IiwiYWRkRXZlbnQiLCJjYWxsYmFjayIsImV2dCIsImRlZmF1bHRPZmZzZXQiLCJib2R5VG9wUG9zaXRpb24iLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJ0b3AiLCJlbGVtZW50UG9zaXRpb24iLCJvZmZzZXQiLCJoZWFkZXIiLCJjbGllbnRIZWlnaHQiLCJvZmZzZXRQb3NpdGlvbiIsImJlaGF2aW9yIiwiX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzIiwiX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMiLCJfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMiLCJfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzIiwiX0N1cnRhaW5FbGVtZW50X3N1bW1hcnkiLCJfQ3VydGFpbkVsZW1lbnRfY29udGVudCIsIl9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmciLCJfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uIiwiX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrIiwiX0N1cnRhaW5FbGVtZW50X29wZW4iLCJfQ3VydGFpbkVsZW1lbnRfZXhwYW5kIiwiX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoIiwiQWNjb3JkaW9uRWxlbWVudCIsIkhUTUxFbGVtZW50IiwiY29ubmVjdGVkQ2FsbGJhY2siLCJXZWFrU2V0Iiwib3RoZXJDdXJ0YWlucyIsImZpbHRlciIsImMiLCJjdXJ0YWluRWxlbWVudCIsIkN1cnRhaW5FbGVtZW50IiwiSFRNTERldGFpbHNFbGVtZW50Iiwic3RvcFByb3BhZ2F0aW9uIiwiY2xvc2UiLCJoYXNBdHRyaWJ1dGUiLCJjYXB0dXJlIiwicGFzc2l2ZSIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwic3RhcnRIZWlnaHQiLCJlbmRIZWlnaHQiLCJjYW5jZWwiLCJhbmltYXRlIiwiZHVyYXRpb24iLCJlYXNpbmciLCJvbmZpbmlzaCIsIm9uY2FuY2VsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJleHRlbmRzIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7Ozs7Ozs7QUNBQSx1Qzs7Ozs7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TzhGLHlCQUFQLEVBQWtDLEdBQWxDLEVBQXVDUSxpQ0FBdkMsQ0FBdEIsQ0FBZ0d4RyxJQUFoRyxDQUFxRyxJQUFyRyxFQUEyRyxJQUEzRyxDQUE5RTtBQUNILENBakJELEVBaUJHd0csaUNBQWlDLEdBQUcsU0FBU0EsaUNBQVQsQ0FBMkM1RSxJQUEzQyxFQUFpRDtBQUNwRixPQUFLQSxJQUFMLEdBQVlBLElBQVo7O0FBQ0FuQyx3QkFBc0IsQ0FBQyxJQUFELEVBQU8yRyx5QkFBUCxFQUFrQyxJQUFsQyxFQUF3QyxHQUF4QyxDQUF0Qjs7QUFDQTNHLHdCQUFzQixDQUFDLElBQUQsRUFBTzBHLHlCQUFQLEVBQWtDLEtBQWxDLEVBQXlDLEdBQXpDLENBQXRCOztBQUNBLE9BQUtqUixTQUFMLENBQWVxQyxNQUFmLENBQXNCLFNBQXRCO0FBQ0EsT0FBS3pHLEtBQUwsQ0FBV21RLE1BQVgsR0FBb0IsRUFBcEI7QUFDQSxPQUFLaFAsYUFBTCxDQUFtQixJQUFJQyxLQUFKLENBQVUsUUFBVixDQUFuQjtBQUNILENBeEJEO0FBeUJBZ1csY0FBYyxDQUFDQyxNQUFmLENBQXNCLG1CQUF0QixFQUEyQzFCLGdCQUEzQztBQUNBeUIsY0FBYyxDQUFDQyxNQUFmLENBQXNCLGlCQUF0QixFQUF5Q2xCLGNBQXpDLEVBQXlEO0FBQUVtQixTQUFPLEVBQUU7QUFBWCxDQUF6RCxFIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2FwcC5wY3NzJztcbmltcG9ydCAnQHVuZ2FwL2N1c3RvbS1lbGVtZW50cyc7XG5pbXBvcnQgJ0BsYXZhbmRyZS9idXR0b24vZGlzdC9zcmMvbGF2YW5kcmUtYnV0dG9uJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmltcG9ydCBBamF4TG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0FqYXhMb2dpbic7XG5pbXBvcnQgQWpheFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9BamF4UmVnaXN0ZXInO1xuaW1wb3J0IEN1cnRhaW4gZnJvbSAnLi9jb21wb25lbnRzL0N1cnRhaW4nO1xuaW1wb3J0IEVtYWlsVmFsaWRhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRW1haWxWYWxpZGF0aW9uJztcbmltcG9ydCBQYXNzd29yZFJldmVhbCBmcm9tICcuL2NvbXBvbmVudHMvUGFzc3dvcmRSZXZlYWwnO1xuaW1wb3J0IE5ld3NsZXR0ZXJTdWJzY3JpYmUgZnJvbSAnLi9jb21wb25lbnRzL05ld3NsZXR0ZXJTdWJzY3JpYmUnO1xuaW1wb3J0IHsgRmllbGRWYWxpZGF0aW9uIH0gZnJvbSAnLi9jb21wb25lbnRzL0ZpZWxkVmFsaWRhdGlvbic7XG5pbXBvcnQgSW5mb1BvcHVwIGZyb20gJy4vY29tcG9uZW50cy9JbmZvUG9wdXAnO1xuaW1wb3J0IENvb2tpZUJhciBmcm9tICcuL2NvbXBvbmVudHMvQ29va2llQmFyJztcbmltcG9ydCBGb3Jnb3RQYXNzd29yZCBmcm9tICcuL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQnO1xuaW1wb3J0IFNpZGVQYW5lbCBmcm9tICcuL3VpL1NpZGVQYW5lbCc7XG5pbXBvcnQgSGVhZGVyU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXJTZWFyY2gnO1xuaW1wb3J0IHsgc2V0Q3VycmVudExpbmtDbGFzcyB9IGZyb20gJy4vdXRpbC9saW5rcyc7XG5pbXBvcnQgTW9kdWxlIGZyb20gJy4vTW9kdWxlJztcbmltcG9ydCBMYXp5TG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9MYXp5TG9hZGVyJztcbmltcG9ydCBOZXdzTGV0dGVyUG9wdXAgZnJvbSAnLi91aS9OZXdzbGV0dGVyUG9wdXAnO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL0FjY29yZGlvbkVsZW1lbnQnO1xuaW1wb3J0IFNjcm9sbFRvQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvU2Nyb2xsVG9Db250ZW50JztcbmltcG9ydCBGb3Jnb3RQYXNzd29yZFRvZ2dsZSBmcm9tICcuL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmRUb2dnbGUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIENvb2tpZUJhcixcbiAgICAgICAgICAgIFNpZGVQYW5lbCxcbiAgICAgICAgICAgIEN1cnRhaW4sXG4gICAgICAgICAgICBJbmZvUG9wdXAsXG4gICAgICAgICAgICBQYXNzd29yZFJldmVhbCxcbiAgICAgICAgICAgIEVtYWlsVmFsaWRhdGlvbixcbiAgICAgICAgICAgIE5ld3NsZXR0ZXJTdWJzY3JpYmUsXG4gICAgICAgICAgICBGb3Jnb3RQYXNzd29yZCxcbiAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkVG9nZ2xlLFxuICAgICAgICAgICAgQWpheExvZ2luLFxuICAgICAgICAgICAgQWpheFJlZ2lzdGVyLFxuICAgICAgICAgICAgRmllbGRWYWxpZGF0aW9uLFxuICAgICAgICAgICAgSGVhZGVyU2VhcmNoLFxuICAgICAgICAgICAgTGF6eUxvYWRlcixcbiAgICAgICAgICAgIE5ld3NMZXR0ZXJQb3B1cCxcbiAgICAgICAgICAgIFNjcm9sbFRvQ29udGVudFxuICAgICAgICBdO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIHNldEN1cnJlbnRMaW5rQ2xhc3MoKTtcbiAgICAgICAgY29uc3Qgd3BGb3Jtc1N1Ym1pdEJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwid3Bmb3Jtc1tzdWJtaXRdXCJdJykpO1xuICAgICAgICB3cEZvcm1zU3VibWl0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpcycsICdsYXZhbmRyZS1idXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3NpemUnLCAnbGFyZ2UnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Z1bGwtd2lkdGgnLCAnbGFyZ2UnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ291dGxpbmUnLCAndHJ1ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4oZnVuY3Rpb24gYXBwSW5pdCgpIHtcbiAgICBjb25zdCBhcHAgPSBuZXcgQXBwKCk7XG4gICAgYXBwLmluaXRpYWxpemUoKTtcbiAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzcC1zbGlkZXInKTtcbiAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20obGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcudXNwLXNsaWRlcl9faXRlbScpKTtcbiAgICBsZXQgdG90YWxXaWR0aCA9IDA7XG4gICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICB0b3RhbFdpZHRoICs9IGl0ZW0uY2xpZW50V2lkdGg7XG4gICAgfSk7XG4gICAgbGlzdC5zdHlsZS53aWR0aCA9IGAke3RvdGFsV2lkdGh9cHhgO1xufSkoKTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gJy4uL2NvbW1vbi9EYXRhTGF5ZXInO1xuaW1wb3J0IHsgVG9hc3RUeXBlIH0gZnJvbSAnLi4vZW51bXMvVG9hc3RUeXBlJztcbmltcG9ydCB7IGxvYWRSZWNhcHRjaGEsIHNpdGVrZXkgfSBmcm9tICcuLi91dGlsL2xvYWRSZWNhcHRjaGEnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgeyBGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuL0ZpZWxkVmFsaWRhdGlvbic7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4TG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICAgICAgLy8gTG9hZCByZWNhcHRjaGFcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXdpbmRvdy5DeXByZXNzKSB7XG4gICAgICAgICAgICBsb2FkUmVjYXB0Y2hhKGZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLm1hdGNoZXMoJzotd2Via2l0LWF1dG9maWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB2YWxpZGF0b3IuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgICAgICBpZiAoc3VibWl0QnV0dG9uID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4geyB0aGlzLm9uU3VibWl0KGV2ZW50LCBmaWVsZHMpOyB9KTtcbiAgICAgICAgc3VibWl0QnV0dG9uID09PSBudWxsIHx8IHN1Ym1pdEJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7IHN1Ym1pdEJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCAndHJ1ZScpOyB0aGlzLm9uU3VibWl0KGV2ZW50LCBmaWVsZHMpOyB9KTtcbiAgICB9XG4gICAgb25TdWJtaXQoZXZlbnQsIGZpZWxkcykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIHZhbGlkID0gZmllbGQudmFsaWRpdHkudmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgndXNlcm5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9ICgoX2IgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGdyZWNhcHRjaGEgPSB3aW5kb3cuZ3JlY2FwdGNoYTtcbiAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAnYWN0aW9uJzogJ2FqYXhsb2dpbicsXG4gICAgICAgICAgICAncmVjYXB0Y2hhVG9rZW4nOiAnJyxcbiAgICAgICAgICAgICd1c2VybmFtZSc6IHVzZXJuYW1lLFxuICAgICAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmQsXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXdpbmRvdy5DeXByZXNzKSB7XG4gICAgICAgICAgICBncmVjYXB0Y2hhLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBncmVjYXB0Y2hhLmV4ZWN1dGUoc2l0ZWtleSwgeyBhY3Rpb246ICdBamF4TG9naW4nIH0pLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmVjYXB0Y2hhVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzb21ldGhpbmcgaXMgd3JvbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBocmVmID0gdGhpcy5mb3JtLmRhdGFzZXQucmVkaXJlY3RVcmwgfHwgJy9teS1hY2NvdW50Lyc7XG4gICAgICAgIGlmICh0aGlzLmZvcm0uZGF0YXNldC5yZWRpcmVjdCA9PT0gJ3RydWUnKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3RhQnV0dG9uID0ge1xuICAgICAgICAgICAgdGV4dDogJ015IGFjY291bnQnLFxuICAgICAgICAgICAgaHJlZjogaHJlZlxuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdChyZXNwb25zZS5kYXRhLCBUb2FzdFR5cGUuc3VjY2VzcywgY3RhQnV0dG9uLCAyMDAwMCk7XG4gICAgICAgIHRvYXN0LmluaXRpYWxpemUoKTtcbiAgICAgICAgY29uc3QgcGFuZWwgPSB0aGlzLmZvcm0uY2xvc2VzdCgnW2RhdGEtcGFuZWwtbmFtZV0nKTtcbiAgICAgICAgaWYgKHBhbmVsKSB7XG4gICAgICAgICAgICBwYW5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJykpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9nZ2VkLWluJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ2xvZ2luJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ0FqYXhMb2dpbidcbiAgICAgICAgfTtcbiAgICAgICAgRGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZXNwb25zZS5kYXRhIHx8ICdUaGlzIGNvbWJpbmF0aW9uIG9mIGVtYWlsIGFuZCBwYXNzd29yZCBpcyBub3Qga25vd24gdG8gdXMuIFBsZWFzZSB0cnkgYWdhaW4gb3IgcmVxdWVzdCBhIG5ldyBwYXNzd29yZC4nO1xuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdChtZXNzYWdlLCBUb2FzdFR5cGUud2FybmluZyk7XG4gICAgICAgIHRvYXN0LmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvZ2luRm9ybXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJyNhamF4LWxvZ2luLWZvcm0nKSk7XG4gICAgICAgIGlmIChsb2dpbkZvcm1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2luRm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWpheExvZ2luID0gbmV3IEFqYXhMb2dpbihmb3JtKTtcbiAgICAgICAgICAgIGFqYXhMb2dpbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gJy4uL2NvbW1vbi9EYXRhTGF5ZXInO1xuaW1wb3J0IHsgbG9hZFJlY2FwdGNoYSwgc2l0ZWtleSB9IGZyb20gJy4uL3V0aWwvbG9hZFJlY2FwdGNoYSc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCBDb25maXJtVmFsaWRhdGlvbiBmcm9tICcuL0NvbmZpcm1WYWxpZGF0aW9uJztcbmltcG9ydCBFbWFpbFZhbGlkYXRpb24gZnJvbSAnLi9FbWFpbFZhbGlkYXRpb24nO1xuaW1wb3J0IHsgRmllbGRWYWxpZGF0aW9uIH0gZnJvbSAnLi9GaWVsZFZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgZW1haWxGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgICAgICAgaWYgKGVtYWlsRmllbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsVmFsaWRhdGlvbiA9IG5ldyBFbWFpbFZhbGlkYXRpb24oZW1haWxGaWVsZCk7XG4gICAgICAgICAgICBlbWFpbFZhbGlkYXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignI3JlZ2lzdGVyLXBhc3N3b3JkJyk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLXBhc3N3b3JkJyk7XG4gICAgICAgIGlmIChwYXNzd29yZEZpZWxkICYmIGNvbmZpcm1QYXNzd29yZEZpZWxkKSB7XG4gICAgICAgICAgICBjb25zdCBjb25maXJtVmFsaWRhdGlvbiA9IG5ldyBDb25maXJtVmFsaWRhdGlvbihwYXNzd29yZEZpZWxkLCBjb25maXJtUGFzc3dvcmRGaWVsZCk7XG4gICAgICAgICAgICBjb25maXJtVmFsaWRhdGlvbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgICAgIC8vIExvYWQgcmVjYXB0Y2hhXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCF3aW5kb3cuQ3lwcmVzcykge1xuICAgICAgICAgICAgbG9hZFJlY2FwdGNoYShmaWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRmllbGRWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIHZhbGlkYXRvci5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmllbGQudmFsaWRpdHkudmFsaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gKChfYSA9IGZvcm1EYXRhLmdldCgnZW1haWwnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gKChfYiA9IGZvcm1EYXRhLmdldCgnZmlyc3RfbmFtZScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9ICgoX2MgPSBmb3JtRGF0YS5nZXQoJ2xhc3RfbmFtZScpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9ICgoX2QgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgZ3JlY2FwdGNoYSA9IHdpbmRvdy5ncmVjYXB0Y2hhO1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAnYWN0aW9uJzogJ2FqYXhyZWdpc3RlcicsXG4gICAgICAgICAgICAgICAgJ3JlY2FwdGNoYVRva2VuJzogJycsXG4gICAgICAgICAgICAgICAgJ2VtYWlsJzogZW1haWwsXG4gICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgJ2ZpcnN0X25hbWUnOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgJ2xhc3RfbmFtZSc6IGxhc3ROYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgLy9AdHMtaWdub3JlXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DeXByZXNzKSB7XG4gICAgICAgICAgICAgICAgZ3JlY2FwdGNoYS5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdyZWNhcHRjaGEuZXhlY3V0ZShzaXRla2V5LCB7IGFjdGlvbjogJ0FqYXhSZWdpc3RlcicgfSkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucmVjYXB0Y2hhVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdW5kZWZpbmVkLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHVuZGVmaW5lZCwgZXZlbnQsIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzLCBldmVudCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyBpcyB3cm9uZycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ3NpZ24tdXAnLFxuICAgICAgICAgICAgbWV0aG9kOiAnQWpheFJlZ2lzdGVyJ1xuICAgICAgICB9O1xuICAgICAgICBEYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZm9ybS5kYXRhc2V0LnJlZGlyZWN0VXJsIHx8ICcvbXktYWNjb3VudC8nO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCByZWdpc3RlckZvcm0gPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcjYWpheC1yZWdpc3Rlci1mb3JtJyk7XG4gICAgICAgIGlmIChyZWdpc3RlckZvcm0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhamF4UmVnaXN0ZXIgPSBuZXcgQWpheFJlZ2lzdGVyKHJlZ2lzdGVyRm9ybSk7XG4gICAgICAgIGFqYXhSZWdpc3Rlci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybVZhbGlkYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkLCBjb25maXJtRmllbGQpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZCA9IGNvbmZpcm1GaWVsZDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkXG4gICAgICAgICAgICB8fCAhdGhpcy5jb25maXJtRmllbGQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBmaWVsZHMnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudHMgPSBbJ2NoYW5nZScsICdpbnB1dCddO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHNbaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkLnZhbHVlICE9PSB0aGlzLmNvbmZpcm1GaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1ZhbHVlIGlzIG5vdCBlcXVhbCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fY29va2llLWJhci5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBnZXRDb29raWVWYWx1ZSwgc2V0Q29va2llVmFsdWUgfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuYWNjZXB0QnV0dG9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWplY3RCdXR0b24gPSBudWxsO1xuICAgICAgICB0aGlzLnRlbXBsYXRlRWxlbWVudCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNjb29raWUtYmFyLXRlbXBsYXRlJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRDb29raWVWYWx1ZShDb29raWVCYXIuY29va2llTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB0aGlzLmFjY2VwdEJ1dHRvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwiY29va2llcy1hY2NlcHRcIl0nKTtcbiAgICAgICAgdGhpcy5yZWplY3RCdXR0b24gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImNvb2tpZXMtcmVqZWN0XCJdJyk7XG4gICAgICAgIChfYSA9IHRoaXMuYWNjZXB0QnV0dG9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjY2VwdENvb2tpZXMuYmluZCh0aGlzKSk7XG4gICAgICAgIChfYiA9IHRoaXMucmVqZWN0QnV0dG9uKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlamVjdENvb2tpZXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGhpcy50ZW1wbGF0ZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY2xvbmUuY29udGVudDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJjb29raWUtYmFyXCJdJyk7XG4gICAgfVxuICAgIGFjY2VwdENvb2tpZXMoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgQ29va2llQmFyLnNldEFjY2VwdENvb2tpZSgpO1xuICAgICAgICAoX2EgPSB0aGlzLmVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmVqZWN0Q29va2llcygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBDb29raWVCYXIuc2V0UmVqZWN0Q29va2llKCk7XG4gICAgICAgIChfYSA9IHRoaXMuZWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0QWNjZXB0Q29va2llKCkge1xuICAgICAgICBzZXRDb29raWVWYWx1ZShDb29raWVCYXIuY29va2llTmFtZSwgJ3RydWUnLCB7XG4gICAgICAgICAgICBcIm1heC1hZ2VcIjogMzE1MzYwMDBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRSZWplY3RDb29raWUoKSB7XG4gICAgICAgIHNldENvb2tpZVZhbHVlKENvb2tpZUJhci5jb29raWVOYW1lLCAnZmFsc2UnLCB7XG4gICAgICAgICAgICBcIm1heC1hZ2VcIjogMzE1MzYwMDBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBjb29raWVCYXIgPSBuZXcgQ29va2llQmFyKHNlbGVjdG9yKTtcbiAgICAgICAgY29va2llQmFyLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG5Db29raWVCYXIuY29va2llTmFtZSA9ICdhcHByb3ZlZF9jb29raWVzJztcbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2N1cnRhaW4ucGNzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VydGFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZm9sZEJ1dHRvbiwgb25seU9uTW9iaWxlID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5mb2xkQnV0dG9uID0gZm9sZEJ1dHRvbjtcbiAgICAgICAgdGhpcy5vbmx5T25Nb2JpbGUgPSBvbmx5T25Nb2JpbGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdEhlaWdodCA9IChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCkubWF4SGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLm1heEhlaWdodCAhPT0gJ25vbmUnKSA/IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5tYXhIZWlnaHQgOiAnMHB4JztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vbmx5T25Nb2JpbGUgJiYgd2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmRlZmF1bHRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHt0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IGAke3RoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmZvbGRCdXR0b24uZGF0YXNldC5yZWFkTGVzcyB8fCAhdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZE1vcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9PT0gdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZE1vcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uaW5uZXJUZXh0ID0gdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZExlc3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRcbiAgICAgICAgICAgIHx8ICF0aGlzLmZvbGRCdXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWN1cnRhaW4tdG9nZ2xlXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvZ2dsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSB0b2dnbGVzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jdXJ0YWluLWNvbnRlbnQ9XCIke3RvZ2dsZS5kYXRhc2V0LmN1cnRhaW5Ub2dnbGV9XCJdYCk7XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9ubHlPbk1vYmlsZSA9IChjb250ZW50LmRhdGFzZXQub25seU9uTW9iaWxlICYmIGNvbnRlbnQuZGF0YXNldC5vbmx5T25Nb2JpbGUgPT09ICd0cnVlJykgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBjdXJ0YWluID0gbmV3IEN1cnRhaW4oY29udGVudCwgdG9nZ2xlLCBvbmx5T25Nb2JpbGUpO1xuICAgICAgICAgICAgY3VydGFpbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbC9yZXF1ZXN0c1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1haWxWYWxpZGF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmVtYWlsSW5wdXQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmVtYWlsSW5wdXQuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IGJsdXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYmx1clRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGJsdXJUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsdXJUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQmx1ckV2ZW50KCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQmx1ckV2ZW50KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lbWFpbElucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBzZWN1cml0eSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ3dvb2NvbW1lcmNlLWVtYWlsLWNoZWNrLW5vbmNlJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4ZW1haWxjaGVjaycsXG4gICAgICAgICAgICAnZW1haWwnOiB2YWx1ZSxcbiAgICAgICAgICAgICdzZWN1cml0eSc6IHNlY3VyaXR5LFxuICAgICAgICB9O1xuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXhpc3RpbmdNZXNzYWdlcygpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXRWYWxpZGF0aW9uTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICBjb25zdCBmb3JtUm93ID0gdGhpcy5lbWFpbElucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGZvcm1Sb3dQYXJlbnQgPSBmb3JtUm93ID09PSBudWxsIHx8IGZvcm1Sb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1Sb3cucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKGZvcm1Sb3cgPT09IG51bGwgfHwgIWZvcm1Sb3dQYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV4aXN0aW5nTWVzc2FnZXMoZm9ybVJvd1BhcmVudCk7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTmFtZSA9ICdhbGVydCBhbGVydC0td2FybmluZyBpbmxpbmUtZm9ybS1lcnJvcic7XG4gICAgICAgIHZhbGlkYXRpb25FbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgZm9ybVJvd1BhcmVudC5pbnNlcnRCZWZvcmUodmFsaWRhdGlvbkVsZW1lbnQsIGZvcm1Sb3cpO1xuICAgIH1cbiAgICByZW1vdmVFeGlzdGluZ01lc3NhZ2VzKHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBzZWxlY3RvciB8fCAoKF9hID0gdGhpcy5lbWFpbElucHV0LnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgaWYgKCFncmFuZHBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsaWRhdGlvbnMgPSBBcnJheS5mcm9tKGdyYW5kcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGVydC0td2FybmluZycpKTtcbiAgICAgICAgZXhpc3RpbmdWYWxpZGF0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHYucmVtb3ZlKCk7IH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW1haWxJbnB1dFxuICAgICAgICAgICAgfHwgIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJFbWFpbElucHV0ID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignI3JlZ19lbWFpbCcpO1xuICAgICAgICBpZiAocmVnaXN0ZXJFbWFpbElucHV0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW1haWxWYWxpZGF0aW9uID0gbmV3IEVtYWlsVmFsaWRhdGlvbihyZWdpc3RlckVtYWlsSW5wdXQpO1xuICAgICAgICBlbWFpbFZhbGlkYXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbW1vbi9Db21wb25lbnRcIjtcbmltcG9ydCB7IFRvYXN0VHlwZSB9IGZyb20gXCIuLi9lbnVtcy9Ub2FzdFR5cGVcIjtcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gXCIuLi91dGlsL3JlcXVlc3RzXCI7XG5pbXBvcnQgeyBGaWVsZFZhbGlkYXRpb24gfSBmcm9tIFwiLi9GaWVsZFZhbGlkYXRpb25cIjtcbmltcG9ydCBUb2FzdCBmcm9tIFwiLi9Ub2FzdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ290UGFzc3dvcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGFuY2hvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvciA9IGFuY2hvcjtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvci5jbG9zZXN0KCdmb3JtJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnBhc3N3b3JkRm9yZ2V0QW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgndXNlcm5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgLy8gY29uc3Qgc2VjdXJpdHk6IHN0cmluZyA9IGZvcm1EYXRhLmdldCgnZm9yZ290c2VjdXJpdHknKT8udG9TdHJpbmcoKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsRmllbGQgPSB0aGlzLmZvcm0udXNlcm5hbWU7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbGlkYXRpb24gPSBuZXcgRmllbGRWYWxpZGF0aW9uKGVtYWlsRmllbGQpO1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIGVtYWlsRmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZhbGlkYXRlJykpO1xuICAgICAgICAgICAgaWYgKCF1c2VybmFtZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlcm5hbWUgbm90IHNldCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheGZvcmdvdHBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAndXNlcl9sb2dpbic6IHVzZXJuYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0KHJlc3BvbnNlLmRhdGEsIFRvYXN0VHlwZS5zdWNjZXNzKTtcbiAgICAgICAgdG9hc3QuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdChyZXNwb25zZS5kYXRhLCBUb2FzdFR5cGUud2FybmluZyk7XG4gICAgICAgIHRvYXN0LmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkRm9yZ2V0QW5jaG9yXG4gICAgICAgICAgICB8fCAhdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBwYXNzd29yZEZvcmdldExpbmtzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwicGFzc3dvcmQtZm9yZ2V0XCJdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFzc3dvcmRGb3JnZXRMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBwYXNzd29yZEZvcmdldExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gbmV3IEZvcmdvdFBhc3N3b3JkKGxpbmspO1xuICAgICAgICAgICAgZm9yZ290UGFzc3dvcmQuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ290UGFzc3dvcmRUb2dnbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHRvZ2dsZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRvZ2dsZTtcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtZm9yZ2V0LWZvcm0nKTtcbiAgICAgICAgdGhpcy5sb2dpbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tcmVnaXN0ZXItZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luV3JhcHBlci50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldFdyYXBwZXIudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXNzd29yZEZvcmdldFdyYXBwZXJcbiAgICAgICAgICAgIHx8ICF0aGlzLmxvZ2luV3JhcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRGb3JnZXRMaW5rcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBhc3N3b3JkLWZvcmdldC10b2dnbGVcIl0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXNzd29yZEZvcmdldExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IHBhc3N3b3JkRm9yZ2V0TGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmQgPSBuZXcgRm9yZ290UGFzc3dvcmRUb2dnbGUobGluayk7XG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRDbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGV2ZW50VGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgd2l0aGluSGVhZGVyID0gKGV2ZW50VGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX3NlYXJjaCcpICE9PSBudWxsKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIGlmICh3aXRoaW5IZWFkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNlYXJjaC1maWVsZCcpO1xuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlYXJjaElucHV0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyU2VhcmNoID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoJyk7XG4gICAgICAgIGlmIChoZWFkZXJTZWFyY2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIZWFkZXJTZWFyY2goaGVhZGVyU2VhcmNoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2luZm9Qb3B1cC5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGV2ZW50ID0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5jb250ZW50IHx8ICcnO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudCwgdGhpcy5zaG93VGlwcHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHNob3dUaXBweShlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbGV0IGluc3RhbmNlID0gd2luZG93LnRpcHB5KHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgdGhlbWU6ICdsaWdodCcsXG4gICAgICAgICAgICBhbGxvd0hUTUw6IHRydWUsXG4gICAgICAgICAgICBoaWRlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dPbkNyZWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgb25IaWRkZW46IChpKSA9PiB7XG4gICAgICAgICAgICAgICAgaS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICAgICAgaW5zdGFuY2UuaGlkZVdpdGhJbnRlcmFjdGl2aXR5KGUpO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudFxuICAgICAgICAgICAgfHwgIXRoaXMuY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgdGlwcHlFbGVtZW50cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInRpcHB5XCJdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGlwcHlFbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRpcHB5RWxlbWVudCA9IHRpcHB5RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKCF0aXBweUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZm9Qb3B1cCA9IG5ldyBJbmZvUG9wdXAodGlwcHlFbGVtZW50LCAnbW91c2VvdmVyJyk7XG4gICAgICAgICAgICBpbmZvUG9wdXAuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gdGhpcy5nZXRFbGVtZW50cygpO1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgICAgICAgdGhpcy5vbkludGVyc2VjdGlvbk9ic2VydmVyKEludGVyc2VjdGlvbk9ic2VydmVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgdGhpcy5sYXp5bG9hZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkludGVyc2VjdGlvbk9ic2VydmVyKE9ic2VydmVyQ2xhc3MgPSBJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICcyNTBweCAwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGxhenlJbWFnZU9ic2VydmVyID0gbmV3IE9ic2VydmVyQ2xhc3MoKGVudHJpZXMsIGxhenlJbWFnZU9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgobGF6eSkgPT4geyB0aGlzLmxhenlsb2FkKGxhenkpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF6eWxvYWQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCkge1xuICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgobGF6eUltYWdlKSA9PiB7IGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUobGF6eUltYWdlKTsgfSk7XG4gICAgfVxuICAgIGxhenlsb2FkKGVsKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgICAgICAgdGhpcy5tYW5hZ2VDc3NDbGFzc2VzKGVsKTtcbiAgICAgICAgaWYgKHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgICAgIGlmIChpbWFnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFuYWdlQ3NzQ2xhc3NlcyhpbWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLmxvYWRpbmctc3Bpbm5lcicpO1xuICAgICAgICBpZiAobG9hZGluZ1NwaW5uZXIpIHtcbiAgICAgICAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmctc3Bpbm5lcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KVxuICAgICAgICAgICAgJiYgZWxlbWVudC5kYXRhc2V0LnNpemVzKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNpemVzID0gZWxlbWVudC5kYXRhc2V0LnNpemVzO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU291cmNlRWxlbWVudClcbiAgICAgICAgICAgICYmIGVsZW1lbnQuZGF0YXNldC5zcmNzZXQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3Jjc2V0ID0gZWxlbWVudC5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KVxuICAgICAgICAgICAgJiYgZWxlbWVudC5kYXRhc2V0LnNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmRhdGFzZXQuc3JjO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RWxlbWVudHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnRcbiAgICAgICAgICAgICYmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5zcmMgfHwgdGhpcy5lbGVtZW50LmRhdGFzZXQuc3Jjc2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLmVsZW1lbnRdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtc3JjXSwgc291cmNlW2RhdGEtc3Jjc2V0XScpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbZGF0YS1zcmNdJykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1hbmFnZUNzc0NsYXNzZXMoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XG4gICAgICAgIGNvbnN0IGxhenlsb2FkRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxhenlsb2FkXScpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXp5bG9hZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbGF6eWxvYWRFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIG5ldyBMYXp5TG9hZGVyKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuaW1wb3J0IERhdGFMYXllciBmcm9tIFwiLi4vY29tbW9uL0RhdGFMYXllclwiO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWwvcmVxdWVzdHNcIjtcbmltcG9ydCB7IEZpZWxkVmFsaWRhdGlvbiB9IGZyb20gXCIuL0ZpZWxkVmFsaWRhdGlvblwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c2xldHRlclN1YnNjcmliZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIgPSBEYXRhTGF5ZXI7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuZW1haWxGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV3c2xldHRlciBzdWJzY3JpYmUgY29tcG9uZW50IG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24odGhpcy5lbWFpbEZpZWxkKTtcbiAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ2ZpcnN0LW5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgY29tcGFueU5hbWUgPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdjb21wYW55LW5hbWUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSAoKF9jID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBpZiAoIWVtYWlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWlsY2hpbXBzdWJzY3JpYmUnLFxuICAgICAgICAgICAgICAgICdlbWFpbCc6IGVtYWlsLFxuICAgICAgICAgICAgICAgICdmaXJzdE5hbWUnOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgJ2NvbXBhbnlOYW1lJzogY29tcGFueU5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBGaWVsZFZhbGlkYXRpb24ucmVtb3ZlRXJyb3JUZXh0KHRoaXMuZW1haWxGaWVsZCk7XG4gICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm1cbiAgICAgICAgICAgIHx8ICF0aGlzLmVtYWlsRmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlc3BvbnNlLCBldmVudCkge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kU3VjY2Vzc1RleHQodGhpcy5lbWFpbEZpZWxkLCByZXNwb25zZS5kYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLmVtYWlsRmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiAnR0FFdmVudCcsXG4gICAgICAgICAgICBldmVudENhdGVnb3J5OiAnbmV3c2xldHRlcicsXG4gICAgICAgICAgICBldmVudEFjdGlvbjogJ3N1YnNjcmliZScsXG4gICAgICAgICAgICBldmVudExhYmVsOiB0aGlzLmZvcm0uaWQgfHwgJ2dlbmVyaWMnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShlcnJvcikge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kRXJyb3JUZXh0KHRoaXMuZW1haWxGaWVsZCwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgLy8gI1RPRE86IFN3aXRjaCB0byBjb21tb24gc2VsZWN0b3JcbiAgICAgICAgY29uc3QgZm9ybXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJyNmb290ZXItbmV3c2xldHRlci1mb3JtLCAjaG9tZXBhZ2UtbmV3c2xldHRlci1mb3JtLCAjYWpheC1uZXdzbGV0dGVyLWZvcm0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb3Jtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBmb3Jtc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBuZXdzbGV0dGVyU3Vic2NyaWJlID0gbmV3IE5ld3NsZXR0ZXJTdWJzY3JpYmUoZm9ybSk7XG4gICAgICAgICAgICBuZXdzbGV0dGVyU3Vic2NyaWJlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbW1vbi9Db21wb25lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkUmV2ZWFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVSZXZlYWxCdXR0b24oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3N3b3JkSW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVJldmVhbEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAncGFzc3dvcmQtcmV2ZWFsLXRvZ2dsZSc7XG4gICAgICAgIGJ1dHRvbi50YWJJbmRleCA9IC0xO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRSb3dzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcucGFzc3dvcmQtcm93JykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFzc3dvcmRSb3dzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRSb3cgPSBwYXNzd29yZFJvd3NbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHBhc3N3b3JkUm93ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRSZXZlYWwgPSBuZXcgUGFzc3dvcmRSZXZlYWwocGFzc3dvcmRSb3cpO1xuICAgICAgICAgICAgcGFzc3dvcmRSZXZlYWwuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgX1Njcm9sbFRvQ29udGVudF90YXJnZXQ7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5pbXBvcnQgc2Nyb2xsVG9UYXJnZXQgZnJvbSBcIi4uL3V0aWwvc2Nyb2xsVG9UYXJnZXRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRvQ29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgdGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1Njcm9sbFRvQ29udGVudF90YXJnZXQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBlbGVtZW50LCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF90YXJnZXQsIHRhcmdldCwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyT2Zmc2V0ID0gIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBcImZcIikuZGF0YXNldC5oZWFkZXJPZmZzZXQ7XG4gICAgICAgICAgICBzY3JvbGxUb1RhcmdldChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0LCBcImZcIiksIDAsIGhlYWRlck9mZnNldCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNjcm9sbC10b10nKSk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gZWxlbWVudC5kYXRhc2V0LnNjcm9sbFRvIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTY3JvbGxUb0NvbnRlbnQoZWxlbWVudCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX1Njcm9sbFRvQ29udGVudF9lbGVtZW50ID0gbmV3IFdlYWtNYXAoKSwgX1Njcm9sbFRvQ29udGVudF90YXJnZXQgPSBuZXcgV2Vha01hcCgpO1xuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fdG9hc3QucGNzcyc7XG5pbXBvcnQgJ0BsYXZhbmRyZS9idXR0b24vZGlzdC9zcmMvbGF2YW5kcmUtYnV0dG9uJztcbmltcG9ydCB7IExhdmFuZHJlQnV0dG9uIH0gZnJvbSAnQGxhdmFuZHJlL2J1dHRvbi9kaXN0L3NyYy9MYXZhbmRyZUJ1dHRvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgdHlwZSwgY3RhLCB0aW1lb3V0ID0gNTAwMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICBpZiAoY3RhKSB7XG4gICAgICAgICAgICB0aGlzLmN0YUJ1dHRvbiA9IGN0YTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY3JlYXRlKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QtLXZpc2libGUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xuICAgIH1cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0b2FzdC0tdmlzaWJsZScpO1xuICAgIH1cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2FzdF9fY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcbiAgICAgICAgaWNvbi5zcmMgPSBgL3dwLWNvbnRlbnQvdGhlbWVzL2xhdmFuZHJlL3B1YmxpYy9pbWFnZXMvaWNvbnMvJHt0aGlzLnR5cGV9LnN2Z2A7XG4gICAgICAgIGljb24uYWx0ID0gYCR7dGhpcy50eXBlfSBpY29uYDtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCd0b2FzdF9faWNvbicpO1xuICAgICAgICBpY29uLndpZHRoID0gMjQ7XG4gICAgICAgIGljb24uaGVpZ2h0ID0gMjQ7XG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NUUk9ORycpO1xuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3RvYXN0X19tZXNzYWdlJyk7XG4gICAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gdGhpcy5tZXNzYWdlO1xuICAgICAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VpY29uLWNsb3NlJywgJ3RvYXN0X19jbG9zZScpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5yZW1vdmUoKTsgfSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIGlmICh0aGlzLmN0YUJ1dHRvbikge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IExhdmFuZHJlQnV0dG9uKCk7XG4gICAgICAgICAgICBidXR0b24uaHJlZiA9IHRoaXMuY3RhQnV0dG9uLmhyZWY7XG4gICAgICAgICAgICBidXR0b24ucHJpbWFyeSA9IHRydWU7XG4gICAgICAgICAgICBidXR0b24uc2l6ZSA9ICdsYXJnZSc7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gdGhpcy5jdGFCdXR0b24udGV4dDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVxuICAgICAgICAgICAgfHwgIXRoaXMudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgVG9hc3RUeXBlO1xuKGZ1bmN0aW9uIChUb2FzdFR5cGUpIHtcbiAgICBUb2FzdFR5cGVbXCJzdWNjZXNzXCJdID0gXCJzdWNjZXNzXCI7XG4gICAgVG9hc3RUeXBlW1wid2FybmluZ1wiXSA9IFwid2FybmluZ1wiO1xuICAgIFRvYXN0VHlwZVtcImRhbmdlclwiXSA9IFwiZGFuZ2VyXCI7XG59KShUb2FzdFR5cGUgfHwgKFRvYXN0VHlwZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBnZXRDb29raWVWYWx1ZSwgc2V0Q29va2llVmFsdWUgfSBmcm9tIFwiLi4vdXRpbC9jb29raWVzXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3NMZXR0ZXJQb3B1cCBleHRlbmRzIFBvcHVwIHtcbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKGdldENvb2tpZVZhbHVlKCduZXdzbGV0dGVyLXBvcHVwLXNlZW4nKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgTmV3c0xldHRlclBvcHVwLm9wZW5Qb3B1cCgnbmV3c2xldHRlci1wb3B1cCcsIG51bGwsIHNlbGVjdG9yKTtcbiAgICAgICAgICAgIHNldENvb2tpZVZhbHVlKCduZXdzbGV0dGVyLXBvcHVwLXNlZW4nLCAndHJ1ZScsIHtcbiAgICAgICAgICAgICAgICBcIm1heC1hZ2VcIjogMzE1MzYwMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19wb3B1cC5wY3NzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcIi4uL2NvbW1vbi9FdmVudEVtaXR0ZXJcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGF0YUF0dHJpYnV0ZSA9ICdkYXRhLXBvcHVwLW5hbWUnO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAgICAgICBvcGVuOiAncG9wdXAtLW9wZW5lZCcsXG4gICAgICAgICAgICBjbG9zZWQ6ICdwb3B1cC0tY2xvc2VkJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgb3BlblBvcHVwKHBvcHVwSUQsIGVsZW1lbnQgPSBudWxsLCBzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IHBvcHVwID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXAtbmFtZT1cIiR7cG9wdXBJRH1cIl1gKTtcbiAgICAgICAgaWYgKHBvcHVwID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLXRlbXBsYXRlPVwiJHtwb3B1cElEfVwiXWApO1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZWxlbWVudC5ocmVmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNsb25lLmNvbnRlbnQ7XG4gICAgICAgICAgICAoX2EgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLW5hbWU9XCIke3BvcHVwSUR9XCJdYCk7XG4gICAgICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdCgndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgcG9wdXApO1xuICAgICAgICAgICAgaWYgKHBvcHVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcG9wdXBJbnN0YW5jZSA9IG5ldyBQb3B1cChwb3B1cCk7XG4gICAgICAgICAgICBwb3B1cEluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBvcHVwLm9wZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZW5FdmVudCA9IG5ldyBDdXN0b21FdmVudCgnb3BlbicpO1xuICAgICAgICAgICAgcG9wdXAuZGlzcGF0Y2hFdmVudChvcGVuRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgICAgICBjb25zdCBwb3B1cExpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wb3B1cF0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3B1cExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBvcHVwTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlQ3JlYXRpb25FdmVudChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwb3B1cElEID0gdGhpcy5kYXRhc2V0LnBvcHVwIHx8IFwiXCI7XG4gICAgICAgIFBvcHVwLm9wZW5Qb3B1cChwb3B1cElELCB0aGlzKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llVmFsdWUobmFtZSkge1xuICAgIGNvbnN0IGNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZVxuICAgICAgICAuc3BsaXQoJzsgJylcbiAgICAgICAgLmZpbmQoKHJvdykgPT4gcm93LnN0YXJ0c1dpdGgobmFtZSkpO1xuICAgIGlmIChjb29raWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvb2tpZS5zcGxpdCgnPScpWzFdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZVZhbHVlKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgY29va2llT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBwYXRoOiAnLycgfSwgb3B0aW9ucyk7XG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfWA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAoY29uc3Qgb3B0aW9uS2V5IGluIGNvb2tpZU9wdGlvbnMpIHtcbiAgICAgICAgdXBkYXRlZENvb2tpZSArPSBgOyAke29wdGlvbktleX1gO1xuICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IGNvb2tpZU9wdGlvbnNbb3B0aW9uS2V5XTtcbiAgICAgICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IGA9JHtvcHRpb25WYWx1ZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2VTdHJpbmdBc0h0bWwoY29udGVudCwgc2VsZWN0b3IgPSAndGVtcGxhdGUnKSB7XG4gICAgY29uc3QgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IHBhcnNlZCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ3RleHQvaHRtbCcpO1xuICAgIHJldHVybiBwYXJzZWQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgfHwgcGFyc2VkLmJvZHk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWJzb2x1dGVIZWlnaHQoZWwpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgY29uc3QgbWFyZ2luID0gcGFyc2VGbG9hdChzdHlsZXNbJ21hcmdpblRvcCddKSArXG4gICAgICAgIHBhcnNlRmxvYXQoc3R5bGVzWydtYXJnaW5Cb3R0b20nXSk7XG4gICAgcmV0dXJuIE1hdGguY2VpbChlbC5vZmZzZXRIZWlnaHQgKyBtYXJnaW4pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRMaW5rQ2xhc3MoKSB7XG4gICAgY29uc3QgcGF0aE5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgY29uc3QgZm9ybWF0dGVkUGF0aE5hbWUgPSBzdHJpcFRyYWlsaW5nU2xhc2gocGF0aE5hbWUpO1xuICAgIGNvbnN0IGZ1bGxVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zdCBmb3JtYXR0ZWRVcmwgPSBzdHJpcFRyYWlsaW5nU2xhc2goZnVsbFVybCk7XG4gICAgY29uc3QgYW5jaG9ycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke3BhdGhOYW1lfVwiXSxcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7Zm9ybWF0dGVkUGF0aE5hbWV9XCJdLFxuICAgICAgICBuYXYgYVtocmVmPVwiJHtmdWxsVXJsfVwiXSxcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7Zm9ybWF0dGVkVXJsfVwiXVxuICAgIGApKTtcbiAgICBhbmNob3JzLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICAgICAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1saW5rJyk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHN0cikge1xuICAgIHJldHVybiBzdHIuZW5kc1dpdGgoJy8nKSA/XG4gICAgICAgIHN0ci5zbGljZSgwLCAtMSkgOlxuICAgICAgICBzdHI7XG59XG4iLCJsZXQgbG9hZGVkID0gZmFsc2U7XG5leHBvcnQgY29uc3Qgc2l0ZWtleSA9ICc2TGR2MlJrY0FBQUFBQkNDTDFKUjVEbG1FRVQ0TnlfMkNta1ZhOE52JztcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUmVjYXB0Y2hhKGVsZW1lbnRzKSB7XG4gICAgbG9vcFRocm91Z2hFbGVtZW50cyhlbGVtZW50cywgdHJ1ZSwgKCkgPT4geyBpbnNlcnRSZWNhcHRjaGFTY3JpcHQoZWxlbWVudHMpOyB9KTtcbn1cbmZ1bmN0aW9uIGluc2VydFJlY2FwdGNoYVNjcmlwdChlbGVtZW50cykge1xuICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcz9yZW5kZXI9JyArIHNpdGVrZXk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9vcFRocm91Z2hFbGVtZW50cyhlbGVtZW50cywgZmFsc2UsICgpID0+IHsgaW5zZXJ0UmVjYXB0Y2hhU2NyaXB0KGVsZW1lbnRzKTsgfSk7XG59XG5mdW5jdGlvbiBsb29wVGhyb3VnaEVsZW1lbnRzKGVsZW1lbnRzLCBhZGRFdmVudCwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFsnZm9jdXMnLCAnY2xpY2snLCAndG91Y2hlbmQnLCAnYmx1cicsICdpbnB1dCcsICdjaGFuZ2UnLCAncHJvcGVydHljaGFuZ2UnXS5mb3JFYWNoKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIGlmIChhZGRFdmVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGxUb1RhcmdldCh0YXJnZXQsIGRlZmF1bHRPZmZzZXQgPSAwLCBoZWFkZXJPZmZzZXQgPSB0cnVlKSB7XG4gICAgY29uc3QgYm9keVRvcFBvc2l0aW9uID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGJvZHlUb3BQb3NpdGlvbjtcbiAgICBsZXQgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldDtcbiAgICBpZiAoaGVhZGVyT2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IGhlYWRlci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gLSBvZmZzZXQgKyAxO1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogb2Zmc2V0UG9zaXRpb24sXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgIH0pO1xufVxuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIF9DdXJ0YWluRWxlbWVudF9jb250ZW50LCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2ssIF9DdXJ0YWluRWxlbWVudF9vcGVuLCBfQ3VydGFpbkVsZW1lbnRfZXhwYW5kLCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2g7XG5pbXBvcnQgXCIuLi8uLi9jc3MvY29tcG9uZW50cy9fYWNjb3JkaW9uLnBjc3NcIjtcbmltcG9ydCB7IGdldEFic29sdXRlSGVpZ2h0IH0gZnJvbSBcIi4uL3V0aWwvZG9tXCI7XG5jbGFzcyBBY2NvcmRpb25FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucy5zZXQodGhpcywgW10pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucywgQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoXCJkZXRhaWxzXCIpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBcImZcIikuZm9yRWFjaCgoY3VydGFpbikgPT4ge1xuICAgICAgICAgICAgY3VydGFpbi5hZGRFdmVudExpc3RlbmVyKFwidG9nZ2xlXCIsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnRhaW4ub3Blbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zKS5jYWxsKHRoaXMsIGN1cnRhaW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zID0gbmV3IFdlYWtNYXAoKSwgX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zID0gZnVuY3Rpb24gX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zKGN1cnRhaW4pIHtcbiAgICBjb25zdCBvdGhlckN1cnRhaW5zID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucywgXCJmXCIpLmZpbHRlcigoYykgPT4gY3VydGFpbiAhPT0gYyk7XG4gICAgb3RoZXJDdXJ0YWlucy5mb3JFYWNoKChjdXJ0YWluKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnRhaW5FbGVtZW50ID0gY3VydGFpbjtcbiAgICAgICAgY3VydGFpbkVsZW1lbnQub3BlbiA9IGZhbHNlO1xuICAgIH0pO1xufTtcbmNsYXNzIEN1cnRhaW5FbGVtZW50IGV4dGVuZHMgSFRNTERldGFpbHNFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCJzdW1tYXJ5XCIpKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQuc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcihcIi5jdXJ0YWluLWNvbnRlbnRcIikpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24uc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2suc2V0KHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2Nsb3NlJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIFwiZlwiKSB8fCB0aGlzLm9wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X29wZW4pLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnb3BlbicpO1xuICAgIH1cbiAgICBzZXQgb3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSgnb3BlbicsIHZhbHVlKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2ssIFwiZlwiKSwge1xuICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgXCJmXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljaywgXCJmXCIpKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgdHJ1ZSwgXCJmXCIpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTtcbiAgICAgICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIGNvbnN0IGVuZEhlaWdodCA9IGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIFwiZlwiKS5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgdGhpcy5hbmltYXRlKHtcbiAgICAgICAgICAgIGhlaWdodDogW3N0YXJ0SGVpZ2h0LCBlbmRIZWlnaHRdLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2Utb3V0XCIsXG4gICAgICAgIH0pLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLm9uZmluaXNoID0gKCkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoKS5jYWxsKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikub25jYW5jZWwgPSAoKSA9PiB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgZmFsc2UsIFwiZlwiKTsgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJyk7IH07XG4gICAgfVxufVxuX0N1cnRhaW5FbGVtZW50X3N1bW1hcnkgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9DdXJ0YWluRWxlbWVudF9vcGVuID0gZnVuY3Rpb24gX0N1cnRhaW5FbGVtZW50X29wZW4oKSB7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluRWxlbWVudF9leHBhbmQpLmNhbGwodGhpcykpO1xufSwgX0N1cnRhaW5FbGVtZW50X2V4cGFuZCA9IGZ1bmN0aW9uIF9DdXJ0YWluRWxlbWVudF9leHBhbmQoKSB7XG4gICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgY29uc3QgZW5kSGVpZ2h0ID0gYCR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgXCJmXCIpLm9mZnNldEhlaWdodCArIGdldEFic29sdXRlSGVpZ2h0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQsIFwiZlwiKSl9cHhgO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5jYW5jZWwoKTtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCB0aGlzLmFuaW1hdGUoe1xuICAgICAgICBoZWlnaHQ6IFtzdGFydEhlaWdodCwgZW5kSGVpZ2h0XSxcbiAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgIGVhc2luZzogXCJlYXNlLW91dFwiLFxuICAgIH0pLCBcImZcIik7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikub25maW5pc2ggPSAoKSA9PiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gpLmNhbGwodGhpcywgdHJ1ZSk7XG59LCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2ggPSBmdW5jdGlvbiBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gob3Blbikge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBudWxsLCBcImZcIik7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBmYWxzZSwgXCJmXCIpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycpO1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndG9nZ2xlJykpO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImFjY29yZGlvbi1lbGVtZW50XCIsIEFjY29yZGlvbkVsZW1lbnQpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiY3VydGFpbi1lbGVtZW50XCIsIEN1cnRhaW5FbGVtZW50LCB7IGV4dGVuZHM6ICdkZXRhaWxzJyB9KTtcbiJdLCJzb3VyY2VSb290IjoiIn0=