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
/* harmony import */ var _lavandre_button_dist_src_lavandre_button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @lavandre/button/dist/src/lavandre-button */ "./node_modules/@lavandre/button/dist/src/lavandre-button.js");
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/EventEmitter */ "./assets/js/common/EventEmitter.ts");
/* harmony import */ var _components_AjaxLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AjaxLogin */ "./assets/js/components/AjaxLogin.ts");
/* harmony import */ var _components_AjaxRegister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AjaxRegister */ "./assets/js/components/AjaxRegister.ts");
/* harmony import */ var _components_Curtain__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/Curtain */ "./assets/js/components/Curtain.ts");
/* harmony import */ var _components_EmailValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/EmailValidation */ "./assets/js/components/EmailValidation.ts");
/* harmony import */ var _components_PasswordReveal__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/PasswordReveal */ "./assets/js/components/PasswordReveal.ts");
/* harmony import */ var _components_NewsletterSubscribe__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/NewsletterSubscribe */ "./assets/js/components/NewsletterSubscribe.ts");
/* harmony import */ var _components_FieldValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/FieldValidation */ "./assets/js/components/FieldValidation.ts");
/* harmony import */ var _components_InfoPopup__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/InfoPopup */ "./assets/js/components/InfoPopup.ts");
/* harmony import */ var _components_CookieBar__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/CookieBar */ "./assets/js/components/CookieBar.ts");
/* harmony import */ var _components_ForgotPassword__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ForgotPassword */ "./assets/js/components/ForgotPassword.ts");
/* harmony import */ var _ui_SidePanel__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./ui/SidePanel */ "./assets/js/ui/SidePanel.ts");
/* harmony import */ var _components_HeaderSearch__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/HeaderSearch */ "./assets/js/components/HeaderSearch.ts");
/* harmony import */ var _components_SubMenu__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/SubMenu */ "./assets/js/components/SubMenu.ts");
/* harmony import */ var _util_links__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./util/links */ "./assets/js/util/links.ts");
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");
/* harmony import */ var _components_LazyLoader__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/LazyLoader */ "./assets/js/components/LazyLoader.ts");
/* harmony import */ var _ui_NewsletterPopup__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./ui/NewsletterPopup */ "./assets/js/ui/NewsletterPopup.ts");
/* harmony import */ var _web_components_AccordionElement__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./web-components/AccordionElement */ "./assets/js/web-components/AccordionElement.ts");
/* harmony import */ var _components_ScrollToContent__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./components/ScrollToContent */ "./assets/js/components/ScrollToContent.ts");






















class App extends _Module__WEBPACK_IMPORTED_MODULE_17__["default"] {
  constructor() {
    super(...arguments);
    this.eventEmitter = _common_EventEmitter__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.components = [_components_CookieBar__WEBPACK_IMPORTED_MODULE_11__["default"], _ui_SidePanel__WEBPACK_IMPORTED_MODULE_13__["default"], _components_Curtain__WEBPACK_IMPORTED_MODULE_5__["default"], _components_InfoPopup__WEBPACK_IMPORTED_MODULE_10__["default"], _components_PasswordReveal__WEBPACK_IMPORTED_MODULE_7__["default"], _components_EmailValidation__WEBPACK_IMPORTED_MODULE_6__["default"], _components_NewsletterSubscribe__WEBPACK_IMPORTED_MODULE_8__["default"], _components_ForgotPassword__WEBPACK_IMPORTED_MODULE_12__["default"], _components_AjaxLogin__WEBPACK_IMPORTED_MODULE_3__["default"], _components_AjaxRegister__WEBPACK_IMPORTED_MODULE_4__["default"], _components_FieldValidation__WEBPACK_IMPORTED_MODULE_9__["FieldValidation"], _components_HeaderSearch__WEBPACK_IMPORTED_MODULE_14__["default"], _components_SubMenu__WEBPACK_IMPORTED_MODULE_15__["default"], _components_LazyLoader__WEBPACK_IMPORTED_MODULE_18__["default"], _ui_NewsletterPopup__WEBPACK_IMPORTED_MODULE_19__["default"], _components_ScrollToContent__WEBPACK_IMPORTED_MODULE_21__["default"]];
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

/***/ "./assets/js/common/DataLayer.ts":
/*!***************************************!*\
  !*** ./assets/js/common/DataLayer.ts ***!
  \***************************************/
/*! exports provided: DataLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayer", function() { return DataLayer; });
class DataLayer {
  constructor() {
    this.dataLayer = window.dataLayer ? window.dataLayer : [];
  }

  push(data) {
    this.dataLayer.push(data);
  }

}


/* harmony default export */ __webpack_exports__["default"] = (new DataLayer());

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

    Object(_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_3__["loadRecaptcha"])(fields);

    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      const validator = new _FieldValidation__WEBPACK_IMPORTED_MODULE_5__["FieldValidation"](field);
      validator.initialize();
    }

    this.form.addEventListener('submit', event => {
      var _a, _b;

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
      const username = ((_a = formData.get('username')) === null || _a === void 0 ? void 0 : _a.toString()) || '';
      const password = ((_b = formData.get('password')) === null || _b === void 0 ? void 0 : _b.toString()) || '';

      if (!username || !password) {
        return;
      } // @ts-ignore


      const grecaptcha = window.grecaptcha;
      grecaptcha.ready(() => {
        grecaptcha.execute(_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_3__["sitekey"], {
          action: 'AjaxLogin'
        }).then(token => {
          const data = {
            'action': 'ajaxlogin',
            'recaptchaToken': token,
            'username': username,
            'password': password
          };
          const submitButton = this.form.querySelector('button[type="submit"]') || undefined;
          Object(_util_requests__WEBPACK_IMPORTED_MODULE_4__["sendAjaxRequest"])(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this), event, submitButton);
        });
      });
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

    const ctaButton = {
      text: 'My account',
      href: '/my-account/'
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
    const loginForm = selector.querySelector('#ajax-login-form');

    if (loginForm === null) {
      return;
    }

    const ajaxLogin = new AjaxLogin(loginForm);
    ajaxLogin.initialize();
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
/* harmony import */ var _enums_ToastType__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../enums/ToastType */ "./assets/js/enums/ToastType.ts");
/* harmony import */ var _util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/loadRecaptcha */ "./assets/js/util/loadRecaptcha.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* harmony import */ var _ConfirmValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ConfirmValidation */ "./assets/js/components/ConfirmValidation.ts");
/* harmony import */ var _EmailValidation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./EmailValidation */ "./assets/js/components/EmailValidation.ts");
/* harmony import */ var _FieldValidation__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./FieldValidation */ "./assets/js/components/FieldValidation.ts");
/* harmony import */ var _Toast__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./Toast */ "./assets/js/components/Toast.ts");









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
      const emailValidation = new _EmailValidation__WEBPACK_IMPORTED_MODULE_6__["default"](emailField);
      emailValidation.initialize();
    }

    const passwordField = this.form.querySelector('#register-password');
    const confirmPasswordField = this.form.querySelector('#confirm-password');

    if (passwordField && confirmPasswordField) {
      const confirmValidation = new _ConfirmValidation__WEBPACK_IMPORTED_MODULE_5__["default"](passwordField, confirmPasswordField);
      confirmValidation.initialize();
    }

    const fields = Array.from(this.form.querySelectorAll('input')); // Load recaptcha

    Object(_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_3__["loadRecaptcha"])(fields);

    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      const validator = new _FieldValidation__WEBPACK_IMPORTED_MODULE_7__["FieldValidation"](field);
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
      grecaptcha.ready(() => {
        grecaptcha.execute(_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_3__["sitekey"], {
          action: 'AjaxRegister'
        }).then(token => {
          const data = {
            'action': 'ajaxregister',
            'recaptchaToken': token,
            'email': email,
            'password': password,
            'first_name': firstName,
            'last_name': lastName
          };
          const submitButton = this.form.querySelector('button[type="submit"]') || undefined;
          Object(_util_requests__WEBPACK_IMPORTED_MODULE_4__["sendAjaxRequest"])(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), undefined, event, submitButton);
        });
      });
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

    const ctaButton = {
      text: 'My account',
      href: '/my-account/'
    };
    const toast = new _Toast__WEBPACK_IMPORTED_MODULE_8__["default"](response.data, _enums_ToastType__WEBPACK_IMPORTED_MODULE_2__["ToastType"].success, ctaButton, 20000);
    toast.initialize();
    const panel = this.form.closest('[data-panel-name]');

    if (panel) {
      panel.dispatchEvent(new CustomEvent('toggle'));
    }

    document.body.classList.add('logged-in');
    const data = {
      event: 'sign-up',
      method: 'AjaxRegister'
    };
    _common_DataLayer__WEBPACK_IMPORTED_MODULE_1__["default"].push(data);
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
    const passwordForgetLinks = Array.from(selector.querySelectorAll('a[data-role="password-forget"]'));

    for (let index = 0; index < passwordForgetLinks.length; index++) {
      const link = passwordForgetLinks[index];
      const forgotPassword = new ForgotPassword(link);
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

/***/ "./assets/js/components/SubMenu.ts":
/*!*****************************************!*\
  !*** ./assets/js/components/SubMenu.ts ***!
  \*****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SubMenu; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");

class SubMenu extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element) {
    super();
    this.header = document.querySelector('.ww-site-header');
    this.element = element;
  }

  initialize() {
    this.element.addEventListener('mouseenter', () => {
      const target = this.element.querySelector('.ww-sub-menu');

      if (target === null) {
        return;
      }

      target.classList.remove('hidden');
      target.classList.add('active');
      this.header.classList.add('ww-submenu-open');
    });
    this.element.addEventListener('mouseleave', () => {
      const target = this.element.querySelector('.ww-sub-menu');

      if (target === null) {
        return;
      }

      target.classList.remove('active');
      this.header.classList.remove('ww-submenu-open');
      setTimeout(() => {
        target.classList.add('hidden');
      }, 400);
    });
  }

  static onInit(selector = document) {
    const hoverElements = Array.from(selector.querySelectorAll('[data-sub-menu]'));
    hoverElements.forEach(element => {
      const subMenu = new SubMenu(element);
      subMenu.initialize();
    });
  }

}

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

var _AccordionElement_instances, _AccordionElement_curtains, _AccordionElement_closeOtherCurtains, _CurtainElement_instances, _CurtainElement_summary, _CurtainElement_content, _CurtainElement_isClosing, _CurtainElement_animation, _CurtainElement_open, _CurtainElement_expand, _CurtainElement_onAnimationFinish;




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
  }

  connectedCallback() {
    __classPrivateFieldGet(this, _CurtainElement_summary, "f").addEventListener("click", event => {
      event.preventDefault();

      if (__classPrivateFieldGet(this, _CurtainElement_isClosing, "f") || this.open === false) {
        __classPrivateFieldGet(this, _CurtainElement_instances, "m", _CurtainElement_open).call(this);

        return;
      }

      this.close();
    });
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

_CurtainElement_summary = new WeakMap(), _CurtainElement_content = new WeakMap(), _CurtainElement_isClosing = new WeakMap(), _CurtainElement_animation = new WeakMap(), _CurtainElement_instances = new WeakSet(), _CurtainElement_open = function _CurtainElement_open() {
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

/***/ }),

/***/ "./node_modules/@lavandre/button/dist/src/LavandreButton.js":
/*!******************************************************************!*\
  !*** ./node_modules/@lavandre/button/dist/src/LavandreButton.js ***!
  \******************************************************************/
/*! exports provided: LavandreButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavandreButton", function() { return LavandreButton; });
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :root {
        --white: #FFFFFF;
        --jet: #2B2B2B;
        --old-burgundy: #3D2B30;
        --subdued: #babfc3;
        --font-family-accent: adobe-garamond-pro, serif;

        --button-background-color: transparent;
        --button-background-hover-color: var(--old-burgundy);

        --button-border-color: var(--old-burgundy);
        --button-border-hover-color: var(--old-burgundy);

        --button-text-color: var(--old-burgundy);
        --button-text-hover-color: var(--white);

        --button-font-size: calc(13rem / 16);
    }

    [is="lavandre-button"][primary] {
        --button-background-color: var(--old-burgundy);
        --button-background-hover-color: var(--transparent);

        --button-border-color: var(--old-burgundy);
        --button-border-hover-color: var(--old-burgundy);

        --button-text-color: var(--white);
        --button-text-hover-color: var(--old-burgundy);
    }

    [is="lavandre-button"][outline] {
        --button-background-color: transparent;
    }

    [is="lavandre-button"][size="small"] {
        min-height: 1.75rem;
        padding: .3rem .75rem;
    }

    [is="lavandre-button"][size="large"] {
        min-height: 3.75rem;
        min-width: 3.75rem;
        padding: .75rem 1.5rem;
        font-size: 1.5rem;
    }

    [is="lavandre-button"][full-width] {
        width: 100%;
    }

    [is="lavandre-button"] {
        position: relative;
        z-index: 0;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.25rem;
        min-width: 2.25rem;
        margin: 0 auto;
        padding: .5rem 1.5rem;

        background: var(--button-background-color);
        border: 1px solid var(--button-border-color);
        border-radius: 0;
        outline: 0;

        color: var(--button-text-color);
        font-family: var(--font-family-accent);
        font-weight: 100;
        font-style: italic;
        font-size: var(--button-font-size);
        line-height: 1;
        text-transform: initial;
        text-align: center;

        cursor: pointer;
        transition: all .4s ease;
    }

    [is="lavandre-button"]:hover {
        background-color: var(--button-background-hover-color);
        border-color: var(--button-border-hover-color);
        color: var(--button-text-hover-color);
        text-decoration: none;
    }

    [is="lavandre-button"] svg,
    [is="lavandre-button"] path {
        fill: var(--button-text-color);
        stroke: var(--button-text-color);
    }

    [is="lavandre-button"]:hover svg,
    [is="lavandre-button"]:hover path {
        fill: var(--button-text-hover-color);
        stroke: var(--button-text-hover-color);
    }

    [is="lavandre-button"] svg {
        margin-right: .5rem;
    }

    [is="lavandre-button"][loading] {
        color: transparent !important;
    }

    [is="lavandre-button"][loading] {
        color: transparent !important;
    }

    [is="lavandre-button"][loading]:after {
        content: "";
        position: absolute;
        inset: 0;
        margin: auto;

        width: .75em;
        height: .75em;
        border-color: transparent transparent var(--button-border-color) var(--button-border-color);
        border-style: solid;
        border-width: 3px;
        border-radius: 50%;
        transform: translateZ(0);
        animation: btnloading 1s linear infinite;
    }

    [is="lavandre-button"][loading][primary]:after {
        border-color: transparent transparent #FFFFFF #FFFFFF;
    }

    @keyframes btnloading {
        0% {
            transform: rotate(0deg)
        }

        to {
            transform: rotate(1turn)
        }
    }
  </style>
`;
class LavandreButton extends HTMLButtonElement {
    constructor() {
        super();
        this.clickHandler = (event) => {
            if (this.href === null) {
                return;
            }
            event.preventDefault();
            window.location.href = this.href;
        };
        this.setAttribute('is', 'lavandre-button');
    }
    get href() {
        return this.getAttribute('href') || '';
    }
    set href(url) {
        this.setAttribute('href', url);
    }
    get size() {
        return this.getAttribute('size') || '';
    }
    set size(url) {
        this.setAttribute('size', url);
    }
    get primary() {
        return this.hasAttribute('primary');
    }
    set primary(bool) {
        if (!bool) {
            return;
        }
        this.setAttribute('primary', bool.toString());
    }
    get outline() {
        return this.hasAttribute('primary');
    }
    set outline(bool) {
        if (!bool) {
            return;
        }
        this.setAttribute('outline', bool.toString());
    }
    get fullWidth() {
        return this.hasAttribute('primary');
    }
    set fullWidth(bool) {
        if (!bool) {
            return;
        }
        this.setAttribute('full-width', bool.toString());
    }
    get loading() {
        return this.hasAttribute('primary');
    }
    set loading(bool) {
        if (!bool) {
            return;
        }
        this.setAttribute('loading', bool.toString());
    }
    connectedCallback() {
        this.appendChild(template.content.cloneNode(true));
        if (this.href) {
            this.addEventListener('click', this.clickHandler);
        }
    }
    disconnectedCallback() {
        if (this.href) {
            this.removeEventListener('click', this.clickHandler);
        }
    }
}
//# sourceMappingURL=LavandreButton.js.map

/***/ }),

/***/ "./node_modules/@lavandre/button/dist/src/lavandre-button.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lavandre/button/dist/src/lavandre-button.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LavandreButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LavandreButton.js */ "./node_modules/@lavandre/button/dist/src/LavandreButton.js");

window.customElements.define('lavandre-button', _LavandreButton_js__WEBPACK_IMPORTED_MODULE_0__["LavandreButton"], { extends: 'button' });
//# sourceMappingURL=lavandre-button.js.map

/***/ })

},[["./assets/js/app.ts","runtime","vendors~app~productDetail","app~cart~checkout~home~productDetail","app~productDetail"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5wY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fYWNjb3JkaW9uLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19jb29raWUtYmFyLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19jdXJ0YWluLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19pbmZvUG9wdXAucGNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3BvcHVwLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL190b2FzdC5wY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbW1vbi9EYXRhTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheExvZ2luLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FqYXhSZWdpc3Rlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Db25maXJtVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Db29raWVCYXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ3VydGFpbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbWFpbFZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSGVhZGVyU2VhcmNoLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0luZm9Qb3B1cC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9MYXp5TG9hZGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05ld3NsZXR0ZXJTdWJzY3JpYmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFzc3dvcmRSZXZlYWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2Nyb2xsVG9Db250ZW50LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N1Yk1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9hc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VudW1zL1RvYXN0VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdWkvTmV3c2xldHRlclBvcHVwLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91aS9Qb3B1cC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC9jb29raWVzLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsL2RvbS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC9saW5rcy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC9sb2FkUmVjYXB0Y2hhLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsL3Njcm9sbFRvVGFyZ2V0LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy93ZWItY29tcG9uZW50cy9BY2NvcmRpb25FbGVtZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGF2YW5kcmUvYnV0dG9uL2Rpc3Qvc3JjL0xhdmFuZHJlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGF2YW5kcmUvYnV0dG9uL2Rpc3Qvc3JjL2xhdmFuZHJlLWJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJBcHAiLCJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImV2ZW50RW1pdHRlciIsIkV2ZW50RW1pdHRlciIsImNvbXBvbmVudHMiLCJDb29raWVCYXIiLCJTaWRlUGFuZWwiLCJDdXJ0YWluIiwiSW5mb1BvcHVwIiwiUGFzc3dvcmRSZXZlYWwiLCJFbWFpbFZhbGlkYXRpb24iLCJOZXdzbGV0dGVyU3Vic2NyaWJlIiwiRm9yZ290UGFzc3dvcmQiLCJBamF4TG9naW4iLCJBamF4UmVnaXN0ZXIiLCJGaWVsZFZhbGlkYXRpb24iLCJIZWFkZXJTZWFyY2giLCJTdWJNZW51IiwiTGF6eUxvYWRlciIsIk5ld3NMZXR0ZXJQb3B1cCIsIlNjcm9sbFRvQ29udGVudCIsImluaXRpYWxpemUiLCJzZXRDdXJyZW50TGlua0NsYXNzIiwid3BGb3Jtc1N1Ym1pdEJ1dHRvbnMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYXBwSW5pdCIsImFwcCIsImxpc3QiLCJxdWVyeVNlbGVjdG9yIiwiaXRlbXMiLCJ0b3RhbFdpZHRoIiwiaXRlbSIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJ3aWR0aCIsIkRhdGFMYXllciIsImRhdGFMYXllciIsIndpbmRvdyIsInB1c2giLCJkYXRhIiwiQ29tcG9uZW50IiwiZm9ybSIsImFqYXhFbmRwb2ludCIsImxvY2F0aW9uIiwib3JpZ2luIiwiaXNWYWxpZCIsInNldEV2ZW50TGlzdGVuZXJzIiwiZmllbGRzIiwibG9hZFJlY2FwdGNoYSIsImluZGV4IiwibGVuZ3RoIiwiZmllbGQiLCJ2YWxpZGF0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJfYSIsIl9iIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInZhbGlkaXR5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInVzZXJuYW1lIiwiZ2V0IiwidG9TdHJpbmciLCJwYXNzd29yZCIsImdyZWNhcHRjaGEiLCJyZWFkeSIsImV4ZWN1dGUiLCJzaXRla2V5IiwiYWN0aW9uIiwidGhlbiIsInRva2VuIiwic3VibWl0QnV0dG9uIiwidW5kZWZpbmVkIiwic2VuZEFqYXhSZXF1ZXN0Iiwib25TdWNjZXNzIiwiYmluZCIsIm9uRmFpbHVyZSIsInJlcyIsInJlc3BvbnNlIiwic3VjY2VzcyIsIkVycm9yIiwiY3RhQnV0dG9uIiwidGV4dCIsImhyZWYiLCJ0b2FzdCIsIlRvYXN0IiwiVG9hc3RUeXBlIiwicGFuZWwiLCJjbG9zZXN0IiwiQ3VzdG9tRXZlbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwibWV0aG9kIiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZSIsIndhcm5pbmciLCJvbkluaXQiLCJzZWxlY3RvciIsImxvZ2luRm9ybSIsImFqYXhMb2dpbiIsImVtYWlsRmllbGQiLCJlbWFpbFZhbGlkYXRpb24iLCJwYXNzd29yZEZpZWxkIiwiY29uZmlybVBhc3N3b3JkRmllbGQiLCJjb25maXJtVmFsaWRhdGlvbiIsIkNvbmZpcm1WYWxpZGF0aW9uIiwiX2MiLCJfZCIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyZWdpc3RlckZvcm0iLCJhamF4UmVnaXN0ZXIiLCJjb25maXJtRmllbGQiLCJldmVudHMiLCJ2YWx1ZSIsInNldEN1c3RvbVZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJlbGVtZW50IiwiYWNjZXB0QnV0dG9uIiwicmVqZWN0QnV0dG9uIiwidGVtcGxhdGVFbGVtZW50IiwiZ2V0Q29va2llVmFsdWUiLCJjb29raWVOYW1lIiwicmVtb3ZlIiwiZ2V0RWxlbWVudCIsImFjY2VwdENvb2tpZXMiLCJyZWplY3RDb29raWVzIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJjb250ZW50IiwicGFyZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0QWNjZXB0Q29va2llIiwic2V0UmVqZWN0Q29va2llIiwic2V0Q29va2llVmFsdWUiLCJjb29raWVCYXIiLCJmb2xkQnV0dG9uIiwib25seU9uTW9iaWxlIiwiZGVmYXVsdEhlaWdodCIsImdldENvbXB1dGVkU3R5bGUiLCJtYXhIZWlnaHQiLCJlIiwiaW5uZXJXaWR0aCIsImNvbnRhaW5zIiwic2V0VGltZW91dCIsInNjcm9sbEhlaWdodCIsImRhdGFzZXQiLCJyZWFkTGVzcyIsInJlYWRNb3JlIiwiaW5uZXJUZXh0IiwidG9nZ2xlcyIsInRvZ2dsZSIsImN1cnRhaW5Ub2dnbGUiLCJjdXJ0YWluIiwiZW1haWxJbnB1dCIsImJsdXJUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlQmx1ckV2ZW50Iiwic2VjdXJpdHkiLCJyZW1vdmVFeGlzdGluZ01lc3NhZ2VzIiwiZXJyb3IiLCJzZXRWYWxpZGF0aW9uTWVzc2FnZSIsImZvcm1Sb3ciLCJmb3JtUm93UGFyZW50IiwidmFsaWRhdGlvbkVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJpbnNlcnRCZWZvcmUiLCJncmFuZHBhcmVudCIsImV4aXN0aW5nVmFsaWRhdGlvbnMiLCJ2IiwicmVnaXN0ZXJFbWFpbElucHV0IiwiYW5jaG9yIiwicGFzc3dvcmRGb3JnZXRBbmNob3IiLCJmaWVsZFZhbGlkYXRpb24iLCJwYXNzd29yZEZvcmdldExpbmtzIiwibGluayIsImZvcmdvdFBhc3N3b3JkIiwiZG9jdW1lbnRDbGlja0hhbmRsZXIiLCJldmVudFRhcmdldCIsInRhcmdldCIsIndpdGhpbkhlYWRlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzZWFyY2hJbnB1dEVsZW1lbnQiLCJmb2N1cyIsImhlYWRlclNlYXJjaCIsImluc3RhbmNlIiwic2hvd1RpcHB5IiwidGlwcHkiLCJ0aGVtZSIsImFsbG93SFRNTCIsImhpZGVPbkNsaWNrIiwic2hvd09uQ3JlYXRlIiwiaW50ZXJhY3RpdmUiLCJvbkhpZGRlbiIsImkiLCJkZXN0cm95Iiwic2hvdyIsImhpZGVXaXRoSW50ZXJhY3Rpdml0eSIsInRpcHB5RWxlbWVudHMiLCJ0aXBweUVsZW1lbnQiLCJpbmZvUG9wdXAiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzIiwib25JbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwibGF6eWxvYWQiLCJPYnNlcnZlckNsYXNzIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwibGF6eUltYWdlT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIkhUTUxQaWN0dXJlRWxlbWVudCIsImxhenkiLCJ1bm9ic2VydmUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImxhenlJbWFnZSIsImVsIiwibWFuYWdlQ3NzQ2xhc3NlcyIsImltYWdlIiwibG9hZGluZ1NwaW5uZXIiLCJIVE1MSW1hZ2VFbGVtZW50IiwiSFRNTFNvdXJjZUVsZW1lbnQiLCJzaXplcyIsInNyY3NldCIsInNyYyIsImxhenlsb2FkRWxlbWVudHMiLCJjb21wYW55TmFtZSIsInJlbW92ZUVycm9yVGV4dCIsImFwcGVuZFN1Y2Nlc3NUZXh0IiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiZXZlbnRMYWJlbCIsImlkIiwiYXBwZW5kRXJyb3JUZXh0IiwiZm9ybXMiLCJuZXdzbGV0dGVyU3Vic2NyaWJlIiwicGFzc3dvcmRJbnB1dCIsImNyZWF0ZVJldmVhbEJ1dHRvbiIsInR5cGUiLCJ0YWJJbmRleCIsInBhc3N3b3JkUm93cyIsInBhc3N3b3JkUm93IiwicGFzc3dvcmRSZXZlYWwiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwicmVjZWl2ZXIiLCJzdGF0ZSIsImtpbmQiLCJmIiwiVHlwZUVycm9yIiwiaGFzIiwiY2FsbCIsInNldCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQiLCJfU2Nyb2xsVG9Db250ZW50X3RhcmdldCIsImhlYWRlck9mZnNldCIsInNjcm9sbFRvVGFyZ2V0IiwidGFyZ2V0SWQiLCJzY3JvbGxUbyIsImdldEVsZW1lbnRCeUlkIiwiV2Vha01hcCIsImhlYWRlciIsImhvdmVyRWxlbWVudHMiLCJzdWJNZW51IiwiY3RhIiwidGltZW91dCIsImNyZWF0ZSIsInJlbW92ZUNoaWxkIiwiY29udGFpbmVyIiwiaWNvbiIsImFsdCIsImhlaWdodCIsInBhcmFncmFwaCIsImNsb3NlQnV0dG9uIiwiTGF2YW5kcmVCdXR0b24iLCJwcmltYXJ5Iiwic2l6ZSIsIlBvcHVwIiwib3BlblBvcHVwIiwiRGlhbG9nIiwiZGF0YUF0dHJpYnV0ZSIsImNsYXNzZXMiLCJvcGVuIiwiY2xvc2VkIiwicG9wdXBJRCIsInBvcHVwIiwidGVtcGxhdGUiLCJIVE1MQW5jaG9yRWxlbWVudCIsImVtaXQiLCJwb3B1cEluc3RhbmNlIiwib3BlbkV2ZW50IiwicG9wdXBMaW5rcyIsImhhbmRsZUNyZWF0aW9uRXZlbnQiLCJuYW1lIiwiY29va2llIiwic3BsaXQiLCJmaW5kIiwicm93Iiwic3RhcnRzV2l0aCIsImNvb2tpZU9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXRoIiwidXBkYXRlZENvb2tpZSIsIm9wdGlvbktleSIsIm9wdGlvblZhbHVlIiwicGFyc2VTdHJpbmdBc0h0bWwiLCJkb21QYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZWQiLCJwYXJzZUZyb21TdHJpbmciLCJnZXRBYnNvbHV0ZUhlaWdodCIsInN0eWxlcyIsIm1hcmdpbiIsInBhcnNlRmxvYXQiLCJNYXRoIiwiY2VpbCIsIm9mZnNldEhlaWdodCIsInBhdGhOYW1lIiwicGF0aG5hbWUiLCJmb3JtYXR0ZWRQYXRoTmFtZSIsInN0cmlwVHJhaWxpbmdTbGFzaCIsImZ1bGxVcmwiLCJmb3JtYXR0ZWRVcmwiLCJhbmNob3JzIiwic3RyIiwiZW5kc1dpdGgiLCJzbGljZSIsImxvYWRlZCIsImxvb3BUaHJvdWdoRWxlbWVudHMiLCJpbnNlcnRSZWNhcHRjaGFTY3JpcHQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHQiLCJhZGRFdmVudCIsImNhbGxiYWNrIiwiZXZ0IiwiZGVmYXVsdE9mZnNldCIsImJvZHlUb3BQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsZW1lbnRQb3NpdGlvbiIsIm9mZnNldCIsImNsaWVudEhlaWdodCIsIm9mZnNldFBvc2l0aW9uIiwiYmVoYXZpb3IiLCJfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMiLCJfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucyIsIl9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucyIsIl9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMiLCJfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSIsIl9DdXJ0YWluRWxlbWVudF9jb250ZW50IiwiX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZyIsIl9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24iLCJfQ3VydGFpbkVsZW1lbnRfb3BlbiIsIl9DdXJ0YWluRWxlbWVudF9leHBhbmQiLCJfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2giLCJBY2NvcmRpb25FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJjb25uZWN0ZWRDYWxsYmFjayIsIldlYWtTZXQiLCJvdGhlckN1cnRhaW5zIiwiZmlsdGVyIiwiYyIsImN1cnRhaW5FbGVtZW50IiwiQ3VydGFpbkVsZW1lbnQiLCJIVE1MRGV0YWlsc0VsZW1lbnQiLCJjbG9zZSIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwiY2FuY2VsIiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwiZWFzaW5nIiwib25maW5pc2giLCJvbmNhbmNlbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEs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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQzs7Ozs7Ozs7Ozs7O0FDek5BO0FBQUE7QUFBcUQ7QUFDckQsZ0RBQWdELGlFQUFjLEdBQUcsb0JBQW9CO0FBQ3JGLDJDIiwiZmlsZSI6ImFwcC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi4vY3NzL2FwcC5wY3NzJztcbmltcG9ydCAnQGxhdmFuZHJlL2J1dHRvbi9kaXN0L3NyYy9sYXZhbmRyZS1idXR0b24nO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IEFqYXhMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvQWpheExvZ2luJztcbmltcG9ydCBBamF4UmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL0FqYXhSZWdpc3Rlcic7XG5pbXBvcnQgQ3VydGFpbiBmcm9tICcuL2NvbXBvbmVudHMvQ3VydGFpbic7XG5pbXBvcnQgRW1haWxWYWxpZGF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9FbWFpbFZhbGlkYXRpb24nO1xuaW1wb3J0IFBhc3N3b3JkUmV2ZWFsIGZyb20gJy4vY29tcG9uZW50cy9QYXNzd29yZFJldmVhbCc7XG5pbXBvcnQgTmV3c2xldHRlclN1YnNjcmliZSBmcm9tICcuL2NvbXBvbmVudHMvTmV3c2xldHRlclN1YnNjcmliZSc7XG5pbXBvcnQgeyBGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuL2NvbXBvbmVudHMvRmllbGRWYWxpZGF0aW9uJztcbmltcG9ydCBJbmZvUG9wdXAgZnJvbSAnLi9jb21wb25lbnRzL0luZm9Qb3B1cCc7XG5pbXBvcnQgQ29va2llQmFyIGZyb20gJy4vY29tcG9uZW50cy9Db29raWVCYXInO1xuaW1wb3J0IEZvcmdvdFBhc3N3b3JkIGZyb20gJy4vY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZCc7XG5pbXBvcnQgU2lkZVBhbmVsIGZyb20gJy4vdWkvU2lkZVBhbmVsJztcbmltcG9ydCBIZWFkZXJTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlclNlYXJjaCc7XG5pbXBvcnQgU3ViTWVudSBmcm9tICcuL2NvbXBvbmVudHMvU3ViTWVudSc7XG5pbXBvcnQgeyBzZXRDdXJyZW50TGlua0NsYXNzIH0gZnJvbSAnLi91dGlsL2xpbmtzJztcbmltcG9ydCBNb2R1bGUgZnJvbSAnLi9Nb2R1bGUnO1xuaW1wb3J0IExhenlMb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL0xhenlMb2FkZXInO1xuaW1wb3J0IE5ld3NMZXR0ZXJQb3B1cCBmcm9tICcuL3VpL05ld3NsZXR0ZXJQb3B1cCc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvQWNjb3JkaW9uRWxlbWVudCc7XG5pbXBvcnQgU2Nyb2xsVG9Db250ZW50IGZyb20gJy4vY29tcG9uZW50cy9TY3JvbGxUb0NvbnRlbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIENvb2tpZUJhcixcbiAgICAgICAgICAgIFNpZGVQYW5lbCxcbiAgICAgICAgICAgIEN1cnRhaW4sXG4gICAgICAgICAgICBJbmZvUG9wdXAsXG4gICAgICAgICAgICBQYXNzd29yZFJldmVhbCxcbiAgICAgICAgICAgIEVtYWlsVmFsaWRhdGlvbixcbiAgICAgICAgICAgIE5ld3NsZXR0ZXJTdWJzY3JpYmUsXG4gICAgICAgICAgICBGb3Jnb3RQYXNzd29yZCxcbiAgICAgICAgICAgIEFqYXhMb2dpbixcbiAgICAgICAgICAgIEFqYXhSZWdpc3RlcixcbiAgICAgICAgICAgIEZpZWxkVmFsaWRhdGlvbixcbiAgICAgICAgICAgIEhlYWRlclNlYXJjaCxcbiAgICAgICAgICAgIFN1Yk1lbnUsXG4gICAgICAgICAgICBMYXp5TG9hZGVyLFxuICAgICAgICAgICAgTmV3c0xldHRlclBvcHVwLFxuICAgICAgICAgICAgU2Nyb2xsVG9Db250ZW50XG4gICAgICAgIF07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgc2V0Q3VycmVudExpbmtDbGFzcygpO1xuICAgICAgICBjb25zdCB3cEZvcm1zU3VibWl0QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJ3cGZvcm1zW3N1Ym1pdF1cIl0nKSk7XG4gICAgICAgIHdwRm9ybXNTdWJtaXRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzJywgJ2xhdmFuZHJlLWJ1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnc2l6ZScsICdsYXJnZScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZnVsbC13aWR0aCcsICdsYXJnZScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnb3V0bGluZScsICd0cnVlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbihmdW5jdGlvbiBhcHBJbml0KCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbiAgICBhcHAuaW5pdGlhbGl6ZSgpO1xuICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNwLXNsaWRlcicpO1xuICAgIGlmICghbGlzdCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy51c3Atc2xpZGVyX19pdGVtJykpO1xuICAgIGxldCB0b3RhbFdpZHRoID0gMDtcbiAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgIHRvdGFsV2lkdGggKz0gaXRlbS5jbGllbnRXaWR0aDtcbiAgICB9KTtcbiAgICBsaXN0LnN0eWxlLndpZHRoID0gYCR7dG90YWxXaWR0aH1weGA7XG59KSgpO1xuIiwiY2xhc3MgRGF0YUxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIgPSAod2luZG93LmRhdGFMYXllcikgPyB3aW5kb3cuZGF0YUxheWVyIDogW107XG4gICAgfVxuICAgIHB1c2goZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgIH1cbn1cbmV4cG9ydCB7IERhdGFMYXllciB9O1xuZXhwb3J0IGRlZmF1bHQgbmV3IERhdGFMYXllcigpO1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBEYXRhTGF5ZXIgZnJvbSAnLi4vY29tbW9uL0RhdGFMYXllcic7XG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICcuLi9lbnVtcy9Ub2FzdFR5cGUnO1xuaW1wb3J0IHsgbG9hZFJlY2FwdGNoYSwgc2l0ZWtleSB9IGZyb20gJy4uL3V0aWwvbG9hZFJlY2FwdGNoYSc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCB7IEZpZWxkVmFsaWRhdGlvbiB9IGZyb20gJy4vRmllbGRWYWxpZGF0aW9uJztcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgICAgICAvLyBMb2FkIHJlY2FwdGNoYVxuICAgICAgICBsb2FkUmVjYXB0Y2hhKGZpZWxkcyk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRmllbGRWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIHZhbGlkYXRvci5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZpZWxkLnZhbGlkaXR5LnZhbGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gKChfYiA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCBncmVjYXB0Y2hhID0gd2luZG93LmdyZWNhcHRjaGE7XG4gICAgICAgICAgICBncmVjYXB0Y2hhLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBncmVjYXB0Y2hhLmV4ZWN1dGUoc2l0ZWtleSwgeyBhY3Rpb246ICdBamF4TG9naW4nIH0pLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAnYWN0aW9uJzogJ2FqYXhsb2dpbicsXG4gICAgICAgICAgICAgICAgICAgICAgICAncmVjYXB0Y2hhVG9rZW4nOiB0b2tlbixcbiAgICAgICAgICAgICAgICAgICAgICAgICd1c2VybmFtZSc6IHVzZXJuYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3Bhc3N3b3JkJzogcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzb21ldGhpbmcgaXMgd3JvbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBjdGFCdXR0b24gPSB7XG4gICAgICAgICAgICB0ZXh0OiAnTXkgYWNjb3VudCcsXG4gICAgICAgICAgICBocmVmOiAnL215LWFjY291bnQvJ1xuICAgICAgICB9O1xuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdChyZXNwb25zZS5kYXRhLCBUb2FzdFR5cGUuc3VjY2VzcywgY3RhQnV0dG9uLCAyMDAwMCk7XG4gICAgICAgIHRvYXN0LmluaXRpYWxpemUoKTtcbiAgICAgICAgY29uc3QgcGFuZWwgPSB0aGlzLmZvcm0uY2xvc2VzdCgnW2RhdGEtcGFuZWwtbmFtZV0nKTtcbiAgICAgICAgaWYgKHBhbmVsKSB7XG4gICAgICAgICAgICBwYW5lbC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJykpO1xuICAgICAgICB9XG4gICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmFkZCgnbG9nZ2VkLWluJyk7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ2xvZ2luJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ0FqYXhMb2dpbidcbiAgICAgICAgfTtcbiAgICAgICAgRGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZXNwb25zZS5kYXRhIHx8ICdUaGlzIGNvbWJpbmF0aW9uIG9mIGVtYWlsIGFuZCBwYXNzd29yZCBpcyBub3Qga25vd24gdG8gdXMuIFBsZWFzZSB0cnkgYWdhaW4gb3IgcmVxdWVzdCBhIG5ldyBwYXNzd29yZC4nO1xuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdChtZXNzYWdlLCBUb2FzdFR5cGUud2FybmluZyk7XG4gICAgICAgIHRvYXN0LmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvZ2luRm9ybSA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNhamF4LWxvZ2luLWZvcm0nKTtcbiAgICAgICAgaWYgKGxvZ2luRm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFqYXhMb2dpbiA9IG5ldyBBamF4TG9naW4obG9naW5Gb3JtKTtcbiAgICAgICAgYWpheExvZ2luLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IERhdGFMYXllciBmcm9tICcuLi9jb21tb24vRGF0YUxheWVyJztcbmltcG9ydCB7IFRvYXN0VHlwZSB9IGZyb20gJy4uL2VudW1zL1RvYXN0VHlwZSc7XG5pbXBvcnQgeyBsb2FkUmVjYXB0Y2hhLCBzaXRla2V5IH0gZnJvbSAnLi4vdXRpbC9sb2FkUmVjYXB0Y2hhJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IENvbmZpcm1WYWxpZGF0aW9uIGZyb20gJy4vQ29uZmlybVZhbGlkYXRpb24nO1xuaW1wb3J0IEVtYWlsVmFsaWRhdGlvbiBmcm9tICcuL0VtYWlsVmFsaWRhdGlvbic7XG5pbXBvcnQgeyBGaWVsZFZhbGlkYXRpb24gfSBmcm9tICcuL0ZpZWxkVmFsaWRhdGlvbic7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9Ub2FzdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4UmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBlbWFpbEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICAgICAgICBpZiAoZW1haWxGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZW1haWxWYWxpZGF0aW9uID0gbmV3IEVtYWlsVmFsaWRhdGlvbihlbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIGVtYWlsVmFsaWRhdGlvbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXItcGFzc3dvcmQnKTtcbiAgICAgICAgY29uc3QgY29uZmlybVBhc3N3b3JkRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tcGFzc3dvcmQnKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkRmllbGQgJiYgY29uZmlybVBhc3N3b3JkRmllbGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1WYWxpZGF0aW9uID0gbmV3IENvbmZpcm1WYWxpZGF0aW9uKHBhc3N3b3JkRmllbGQsIGNvbmZpcm1QYXNzd29yZEZpZWxkKTtcbiAgICAgICAgICAgIGNvbmZpcm1WYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICAgICAgLy8gTG9hZCByZWNhcHRjaGFcbiAgICAgICAgbG9hZFJlY2FwdGNoYShmaWVsZHMpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZpZWxkVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB2YWxpZGF0b3IuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZpZWxkLnZhbGlkaXR5LnZhbGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9ICgoX2IgPSBmb3JtRGF0YS5nZXQoJ2ZpcnN0X25hbWUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSAoKF9jID0gZm9ybURhdGEuZ2V0KCdsYXN0X25hbWUnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAoKF9kID0gZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGdyZWNhcHRjaGEgPSB3aW5kb3cuZ3JlY2FwdGNoYTtcbiAgICAgICAgICAgIGdyZWNhcHRjaGEucmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdyZWNhcHRjaGEuZXhlY3V0ZShzaXRla2V5LCB7IGFjdGlvbjogJ0FqYXhSZWdpc3RlcicgfSkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhY3Rpb24nOiAnYWpheHJlZ2lzdGVyJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZWNhcHRjaGFUb2tlbic6IHRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2VtYWlsJzogZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdmaXJzdF9uYW1lJzogZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2xhc3RfbmFtZSc6IGxhc3ROYW1lXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB1bmRlZmluZWQsIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzLCBldmVudCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyBpcyB3cm9uZycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN0YUJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHRleHQ6ICdNeSBhY2NvdW50JyxcbiAgICAgICAgICAgIGhyZWY6ICcvbXktYWNjb3VudC8nXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0KHJlc3BvbnNlLmRhdGEsIFRvYXN0VHlwZS5zdWNjZXNzLCBjdGFCdXR0b24sIDIwMDAwKTtcbiAgICAgICAgdG9hc3QuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBjb25zdCBwYW5lbCA9IHRoaXMuZm9ybS5jbG9zZXN0KCdbZGF0YS1wYW5lbC1uYW1lXScpO1xuICAgICAgICBpZiAocGFuZWwpIHtcbiAgICAgICAgICAgIHBhbmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2dnZWQtaW4nKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiAnc2lnbi11cCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdBamF4UmVnaXN0ZXInXG4gICAgICAgIH07XG4gICAgICAgIERhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignI2FqYXgtcmVnaXN0ZXItZm9ybScpO1xuICAgICAgICBpZiAocmVnaXN0ZXJGb3JtID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWpheFJlZ2lzdGVyID0gbmV3IEFqYXhSZWdpc3RlcihyZWdpc3RlckZvcm0pO1xuICAgICAgICBhamF4UmVnaXN0ZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1WYWxpZGF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZCwgY29uZmlybUZpZWxkKSB7XG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICAgICAgdGhpcy5jb25maXJtRmllbGQgPSBjb25maXJtRmllbGQ7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5maWVsZFxuICAgICAgICAgICAgfHwgIXRoaXMuY29uZmlybUZpZWxkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZmllbGRzJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnRzID0gWydjaGFuZ2UnLCAnaW5wdXQnXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGV2ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZC52YWx1ZSAhPT0gdGhpcy5jb25maXJtRmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdWYWx1ZSBpcyBub3QgZXF1YWwnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5zZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2Nvb2tpZS1iYXIucGNzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgZ2V0Q29va2llVmFsdWUsIHNldENvb2tpZVZhbHVlIH0gZnJvbSAnLi4vdXRpbC9jb29raWVzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLmFjY2VwdEJ1dHRvbiA9IG51bGw7XG4gICAgICAgIHRoaXMucmVqZWN0QnV0dG9uID0gbnVsbDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcjY29va2llLWJhci10ZW1wbGF0ZScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBpZiAodGhpcy50ZW1wbGF0ZUVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0Q29va2llVmFsdWUoQ29va2llQmFyLmNvb2tpZU5hbWUpKSB7XG4gICAgICAgICAgICB0aGlzLnRlbXBsYXRlRWxlbWVudC5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQgPSB0aGlzLmdldEVsZW1lbnQoKTtcbiAgICAgICAgdGhpcy5hY2NlcHRCdXR0b24gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImNvb2tpZXMtYWNjZXB0XCJdJyk7XG4gICAgICAgIHRoaXMucmVqZWN0QnV0dG9uID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJjb29raWVzLXJlamVjdFwiXScpO1xuICAgICAgICAoX2EgPSB0aGlzLmFjY2VwdEJ1dHRvbikgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5hY2NlcHRDb29raWVzLmJpbmQodGhpcykpO1xuICAgICAgICAoX2IgPSB0aGlzLnJlamVjdEJ1dHRvbikgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5yZWplY3RDb29raWVzLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBnZXRFbGVtZW50KCkge1xuICAgICAgICBjb25zdCBjbG9uZSA9IHRoaXMudGVtcGxhdGVFbGVtZW50LmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgY29uc3QgY29udGVudCA9IGNsb25lLmNvbnRlbnQ7XG4gICAgICAgIHRoaXMudGVtcGxhdGVFbGVtZW50LnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwiY29va2llLWJhclwiXScpO1xuICAgIH1cbiAgICBhY2NlcHRDb29raWVzKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIENvb2tpZUJhci5zZXRBY2NlcHRDb29raWUoKTtcbiAgICAgICAgKF9hID0gdGhpcy5lbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKCk7XG4gICAgfVxuICAgIHJlamVjdENvb2tpZXMoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgQ29va2llQmFyLnNldFJlamVjdENvb2tpZSgpO1xuICAgICAgICAoX2EgPSB0aGlzLmVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbiAgICB9XG4gICAgc3RhdGljIHNldEFjY2VwdENvb2tpZSgpIHtcbiAgICAgICAgc2V0Q29va2llVmFsdWUoQ29va2llQmFyLmNvb2tpZU5hbWUsICd0cnVlJywge1xuICAgICAgICAgICAgXCJtYXgtYWdlXCI6IDMxNTM2MDAwXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0UmVqZWN0Q29va2llKCkge1xuICAgICAgICBzZXRDb29raWVWYWx1ZShDb29raWVCYXIuY29va2llTmFtZSwgJ2ZhbHNlJywge1xuICAgICAgICAgICAgXCJtYXgtYWdlXCI6IDMxNTM2MDAwXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgY29va2llQmFyID0gbmV3IENvb2tpZUJhcihzZWxlY3Rvcik7XG4gICAgICAgIGNvb2tpZUJhci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuQ29va2llQmFyLmNvb2tpZU5hbWUgPSAnYXBwcm92ZWRfY29va2llcyc7XG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19jdXJ0YWluLnBjc3MnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnRhaW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGZvbGRCdXR0b24sIG9ubHlPbk1vYmlsZSA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZm9sZEJ1dHRvbiA9IGZvbGRCdXR0b247XG4gICAgICAgIHRoaXMub25seU9uTW9iaWxlID0gb25seU9uTW9iaWxlO1xuICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPSAoZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLm1heEhlaWdodCAhPT0gdW5kZWZpbmVkICYmIGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5tYXhIZWlnaHQgIT09ICdub25lJykgPyBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCkubWF4SGVpZ2h0IDogJzBweCc7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmZvbGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub25seU9uTW9iaWxlICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7dGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHt0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZGVmYXVsdEhlaWdodDtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZExlc3MgfHwgIXRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9sZEJ1dHRvbi5pbm5lclRleHQgPT09IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRMZXNzO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmZvbGRCdXR0b24uZGF0YXNldC5yZWFkTW9yZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50XG4gICAgICAgICAgICB8fCAhdGhpcy5mb2xkQnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCB0b2dnbGVzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jdXJ0YWluLXRvZ2dsZV0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2dnbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlID0gdG9nZ2xlc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihgW2RhdGEtY3VydGFpbi1jb250ZW50PVwiJHt0b2dnbGUuZGF0YXNldC5jdXJ0YWluVG9nZ2xlfVwiXWApO1xuICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvbmx5T25Nb2JpbGUgPSAoY29udGVudC5kYXRhc2V0Lm9ubHlPbk1vYmlsZSAmJiBjb250ZW50LmRhdGFzZXQub25seU9uTW9iaWxlID09PSAndHJ1ZScpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgY29uc3QgY3VydGFpbiA9IG5ldyBDdXJ0YWluKGNvbnRlbnQsIHRvZ2dsZSwgb25seU9uTW9iaWxlKTtcbiAgICAgICAgICAgIGN1cnRhaW4uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWwvcmVxdWVzdHNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYWlsVmFsaWRhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5lbWFpbElucHV0ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5lbWFpbElucHV0LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBibHVyVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJsdXJUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChibHVyVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibHVyVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUJsdXJFdmVudCgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUJsdXJFdmVudCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZW1haWxJbnB1dC52YWx1ZTtcbiAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSAoKF9hID0gZm9ybURhdGEuZ2V0KCd3b29jb21tZXJjZS1lbWFpbC1jaGVjay1ub25jZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnYWpheGVtYWlsY2hlY2snLFxuICAgICAgICAgICAgJ2VtYWlsJzogdmFsdWUsXG4gICAgICAgICAgICAnc2VjdXJpdHknOiBzZWN1cml0eSxcbiAgICAgICAgfTtcbiAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25TdWNjZXNzKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUV4aXN0aW5nTWVzc2FnZXMoKTtcbiAgICB9XG4gICAgb25GYWlsdXJlKGVycm9yKSB7XG4gICAgICAgIHRoaXMuc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3IubWVzc2FnZSk7XG4gICAgfVxuICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKG1lc3NhZ2UpIHtcbiAgICAgICAgY29uc3QgZm9ybVJvdyA9IHRoaXMuZW1haWxJbnB1dC5wYXJlbnRFbGVtZW50O1xuICAgICAgICBjb25zdCBmb3JtUm93UGFyZW50ID0gZm9ybVJvdyA9PT0gbnVsbCB8fCBmb3JtUm93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtUm93LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGlmIChmb3JtUm93ID09PSBudWxsIHx8ICFmb3JtUm93UGFyZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5yZW1vdmVFeGlzdGluZ01lc3NhZ2VzKGZvcm1Sb3dQYXJlbnQpO1xuICAgICAgICBjb25zdCB2YWxpZGF0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc05hbWUgPSAnYWxlcnQgYWxlcnQtLXdhcm5pbmcgaW5saW5lLWZvcm0tZXJyb3InO1xuICAgICAgICB2YWxpZGF0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgICAgIGZvcm1Sb3dQYXJlbnQuaW5zZXJ0QmVmb3JlKHZhbGlkYXRpb25FbGVtZW50LCBmb3JtUm93KTtcbiAgICB9XG4gICAgcmVtb3ZlRXhpc3RpbmdNZXNzYWdlcyhzZWxlY3Rvcikge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gc2VsZWN0b3IgfHwgKChfYSA9IHRoaXMuZW1haWxJbnB1dC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFyZW50RWxlbWVudCk7XG4gICAgICAgIGlmICghZ3JhbmRwYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBleGlzdGluZ1ZhbGlkYXRpb25zID0gQXJyYXkuZnJvbShncmFuZHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQtLXdhcm5pbmcnKSk7XG4gICAgICAgIGV4aXN0aW5nVmFsaWRhdGlvbnMuZm9yRWFjaCgodikgPT4geyB2LnJlbW92ZSgpOyB9KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVtYWlsSW5wdXRcbiAgICAgICAgICAgIHx8ICF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRW1haWxJbnB1dCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNyZWdfZW1haWwnKTtcbiAgICAgICAgaWYgKHJlZ2lzdGVyRW1haWxJbnB1dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtYWlsVmFsaWRhdGlvbiA9IG5ldyBFbWFpbFZhbGlkYXRpb24ocmVnaXN0ZXJFbWFpbElucHV0KTtcbiAgICAgICAgZW1haWxWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tIFwiLi4vZW51bXMvVG9hc3RUeXBlXCI7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbC9yZXF1ZXN0c1wiO1xuaW1wb3J0IHsgRmllbGRWYWxpZGF0aW9uIH0gZnJvbSBcIi4vRmllbGRWYWxpZGF0aW9uXCI7XG5pbXBvcnQgVG9hc3QgZnJvbSBcIi4vVG9hc3RcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdvdFBhc3N3b3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihhbmNob3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IgPSBhbmNob3I7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIC8vIGNvbnN0IHNlY3VyaXR5OiBzdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ2ZvcmdvdHNlY3VyaXR5Jyk/LnRvU3RyaW5nKCkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBlbWFpbEZpZWxkID0gdGhpcy5mb3JtLnVzZXJuYW1lO1xuICAgICAgICAgICAgY29uc3QgZmllbGRWYWxpZGF0aW9uID0gbmV3IEZpZWxkVmFsaWRhdGlvbihlbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbi5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICBlbWFpbEZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd2YWxpZGF0ZScpKTtcbiAgICAgICAgICAgIGlmICghdXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXJuYW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhmb3Jnb3RwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgJ3VzZXJfbG9naW4nOiB1c2VybmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdChyZXNwb25zZS5kYXRhLCBUb2FzdFR5cGUuc3VjY2Vzcyk7XG4gICAgICAgIHRvYXN0LmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgb25GYWlsdXJlKHJlcykge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzKTtcbiAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3QocmVzcG9uc2UuZGF0YSwgVG9hc3RUeXBlLndhcm5pbmcpO1xuICAgICAgICB0b2FzdC5pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvclxuICAgICAgICAgICAgfHwgIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRGb3JnZXRMaW5rcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnYVtkYXRhLXJvbGU9XCJwYXNzd29yZC1mb3JnZXRcIl0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXNzd29yZEZvcmdldExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IHBhc3N3b3JkRm9yZ2V0TGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmQgPSBuZXcgRm9yZ290UGFzc3dvcmQobGluayk7XG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRDbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGV2ZW50VGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgd2l0aGluSGVhZGVyID0gKGV2ZW50VGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX3NlYXJjaCcpICE9PSBudWxsKSA/IHRydWUgOiBmYWxzZTtcbiAgICAgICAgICAgIGlmICh3aXRoaW5IZWFkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNlYXJjaC1maWVsZCcpO1xuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlYXJjaElucHV0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyU2VhcmNoID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoJyk7XG4gICAgICAgIGlmIChoZWFkZXJTZWFyY2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIZWFkZXJTZWFyY2goaGVhZGVyU2VhcmNoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2luZm9Qb3B1cC5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGV2ZW50ID0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5jb250ZW50IHx8ICcnO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudCwgdGhpcy5zaG93VGlwcHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHNob3dUaXBweShlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgbGV0IGluc3RhbmNlID0gd2luZG93LnRpcHB5KHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgdGhlbWU6ICdsaWdodCcsXG4gICAgICAgICAgICBhbGxvd0hUTUw6IHRydWUsXG4gICAgICAgICAgICBoaWRlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dPbkNyZWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgb25IaWRkZW46IChpKSA9PiB7XG4gICAgICAgICAgICAgICAgaS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICAgICAgaW5zdGFuY2UuaGlkZVdpdGhJbnRlcmFjdGl2aXR5KGUpO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudFxuICAgICAgICAgICAgfHwgIXRoaXMuY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgdGlwcHlFbGVtZW50cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInRpcHB5XCJdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGlwcHlFbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRpcHB5RWxlbWVudCA9IHRpcHB5RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKCF0aXBweUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZm9Qb3B1cCA9IG5ldyBJbmZvUG9wdXAodGlwcHlFbGVtZW50LCAnbW91c2VvdmVyJyk7XG4gICAgICAgICAgICBpbmZvUG9wdXAuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gdGhpcy5nZXRFbGVtZW50cygpO1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgICAgICAgdGhpcy5vbkludGVyc2VjdGlvbk9ic2VydmVyKEludGVyc2VjdGlvbk9ic2VydmVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgdGhpcy5sYXp5bG9hZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkludGVyc2VjdGlvbk9ic2VydmVyKE9ic2VydmVyQ2xhc3MgPSBJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICcyNTBweCAwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGxhenlJbWFnZU9ic2VydmVyID0gbmV3IE9ic2VydmVyQ2xhc3MoKGVudHJpZXMsIGxhenlJbWFnZU9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgobGF6eSkgPT4geyB0aGlzLmxhenlsb2FkKGxhenkpOyB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF6eWxvYWQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCkge1xuICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgobGF6eUltYWdlKSA9PiB7IGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUobGF6eUltYWdlKTsgfSk7XG4gICAgfVxuICAgIGxhenlsb2FkKGVsKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgICAgICAgdGhpcy5tYW5hZ2VDc3NDbGFzc2VzKGVsKTtcbiAgICAgICAgaWYgKHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgICAgIGlmIChpbWFnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFuYWdlQ3NzQ2xhc3NlcyhpbWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLmxvYWRpbmctc3Bpbm5lcicpO1xuICAgICAgICBpZiAobG9hZGluZ1NwaW5uZXIpIHtcbiAgICAgICAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmctc3Bpbm5lcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KVxuICAgICAgICAgICAgJiYgZWxlbWVudC5kYXRhc2V0LnNpemVzKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNpemVzID0gZWxlbWVudC5kYXRhc2V0LnNpemVzO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU291cmNlRWxlbWVudClcbiAgICAgICAgICAgICYmIGVsZW1lbnQuZGF0YXNldC5zcmNzZXQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3Jjc2V0ID0gZWxlbWVudC5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KVxuICAgICAgICAgICAgJiYgZWxlbWVudC5kYXRhc2V0LnNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmRhdGFzZXQuc3JjO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RWxlbWVudHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnRcbiAgICAgICAgICAgICYmICh0aGlzLmVsZW1lbnQuZGF0YXNldC5zcmMgfHwgdGhpcy5lbGVtZW50LmRhdGFzZXQuc3Jjc2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLmVsZW1lbnRdO1xuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYgKHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtc3JjXSwgc291cmNlW2RhdGEtc3Jjc2V0XScpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbZGF0YS1zcmNdJykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG1hbmFnZUNzc0NsYXNzZXMoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XG4gICAgICAgIGNvbnN0IGxhenlsb2FkRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxhenlsb2FkXScpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXp5bG9hZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbGF6eWxvYWRFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIG5ldyBMYXp5TG9hZGVyKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuaW1wb3J0IERhdGFMYXllciBmcm9tIFwiLi4vY29tbW9uL0RhdGFMYXllclwiO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWwvcmVxdWVzdHNcIjtcbmltcG9ydCB7IEZpZWxkVmFsaWRhdGlvbiB9IGZyb20gXCIuL0ZpZWxkVmFsaWRhdGlvblwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c2xldHRlclN1YnNjcmliZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIgPSBEYXRhTGF5ZXI7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuZW1haWxGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV3c2xldHRlciBzdWJzY3JpYmUgY29tcG9uZW50IG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24odGhpcy5lbWFpbEZpZWxkKTtcbiAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ2ZpcnN0LW5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgY29tcGFueU5hbWUgPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdjb21wYW55LW5hbWUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSAoKF9jID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBpZiAoIWVtYWlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWlsY2hpbXBzdWJzY3JpYmUnLFxuICAgICAgICAgICAgICAgICdlbWFpbCc6IGVtYWlsLFxuICAgICAgICAgICAgICAgICdmaXJzdE5hbWUnOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgJ2NvbXBhbnlOYW1lJzogY29tcGFueU5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBGaWVsZFZhbGlkYXRpb24ucmVtb3ZlRXJyb3JUZXh0KHRoaXMuZW1haWxGaWVsZCk7XG4gICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm1cbiAgICAgICAgICAgIHx8ICF0aGlzLmVtYWlsRmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlc3BvbnNlLCBldmVudCkge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kU3VjY2Vzc1RleHQodGhpcy5lbWFpbEZpZWxkLCByZXNwb25zZS5kYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLmVtYWlsRmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiAnR0FFdmVudCcsXG4gICAgICAgICAgICBldmVudENhdGVnb3J5OiAnbmV3c2xldHRlcicsXG4gICAgICAgICAgICBldmVudEFjdGlvbjogJ3N1YnNjcmliZScsXG4gICAgICAgICAgICBldmVudExhYmVsOiB0aGlzLmZvcm0uaWQgfHwgJ2dlbmVyaWMnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShlcnJvcikge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kRXJyb3JUZXh0KHRoaXMuZW1haWxGaWVsZCwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgLy8gI1RPRE86IFN3aXRjaCB0byBjb21tb24gc2VsZWN0b3JcbiAgICAgICAgY29uc3QgZm9ybXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJyNmb290ZXItbmV3c2xldHRlci1mb3JtLCAjaG9tZXBhZ2UtbmV3c2xldHRlci1mb3JtLCAjYWpheC1uZXdzbGV0dGVyLWZvcm0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb3Jtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBmb3Jtc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBuZXdzbGV0dGVyU3Vic2NyaWJlID0gbmV3IE5ld3NsZXR0ZXJTdWJzY3JpYmUoZm9ybSk7XG4gICAgICAgICAgICBuZXdzbGV0dGVyU3Vic2NyaWJlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbW1vbi9Db21wb25lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkUmV2ZWFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVSZXZlYWxCdXR0b24oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3N3b3JkSW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVJldmVhbEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAncGFzc3dvcmQtcmV2ZWFsLXRvZ2dsZSc7XG4gICAgICAgIGJ1dHRvbi50YWJJbmRleCA9IC0xO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRSb3dzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcucGFzc3dvcmQtcm93JykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFzc3dvcmRSb3dzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRSb3cgPSBwYXNzd29yZFJvd3NbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHBhc3N3b3JkUm93ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRSZXZlYWwgPSBuZXcgUGFzc3dvcmRSZXZlYWwocGFzc3dvcmRSb3cpO1xuICAgICAgICAgICAgcGFzc3dvcmRSZXZlYWwuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgX1Njcm9sbFRvQ29udGVudF90YXJnZXQ7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5pbXBvcnQgc2Nyb2xsVG9UYXJnZXQgZnJvbSBcIi4uL3V0aWwvc2Nyb2xsVG9UYXJnZXRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRvQ29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgdGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1Njcm9sbFRvQ29udGVudF90YXJnZXQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBlbGVtZW50LCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF90YXJnZXQsIHRhcmdldCwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyT2Zmc2V0ID0gIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBcImZcIikuZGF0YXNldC5oZWFkZXJPZmZzZXQ7XG4gICAgICAgICAgICBzY3JvbGxUb1RhcmdldChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0LCBcImZcIiksIDAsIGhlYWRlck9mZnNldCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNjcm9sbC10b10nKSk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gZWxlbWVudC5kYXRhc2V0LnNjcm9sbFRvIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTY3JvbGxUb0NvbnRlbnQoZWxlbWVudCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX1Njcm9sbFRvQ29udGVudF9lbGVtZW50ID0gbmV3IFdlYWtNYXAoKSwgX1Njcm9sbFRvQ29udGVudF90YXJnZXQgPSBuZXcgV2Vha01hcCgpO1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3ViTWVudSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53dy1zaXRlLWhlYWRlcicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsICgpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcud3ctc3ViLW1lbnUnKTtcbiAgICAgICAgICAgIGlmICh0YXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0YXJnZXQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKCd3dy1zdWJtZW51LW9wZW4nKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53dy1zdWItbWVudScpO1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUoJ3d3LXN1Ym1lbnUtb3BlbicpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7IHRhcmdldC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTsgfSwgNDAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBob3ZlckVsZW1lbnRzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zdWItbWVudV0nKSk7XG4gICAgICAgIGhvdmVyRWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3Qgc3ViTWVudSA9IG5ldyBTdWJNZW51KGVsZW1lbnQpO1xuICAgICAgICAgICAgc3ViTWVudS5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX3RvYXN0LnBjc3MnO1xuaW1wb3J0ICdAbGF2YW5kcmUvYnV0dG9uL2Rpc3Qvc3JjL2xhdmFuZHJlLWJ1dHRvbic7XG5pbXBvcnQgeyBMYXZhbmRyZUJ1dHRvbiB9IGZyb20gJ0BsYXZhbmRyZS9idXR0b24vZGlzdC9zcmMvTGF2YW5kcmVCdXR0b24uanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3Qge1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHR5cGUsIGN0YSwgdGltZW91dCA9IDUwMDApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgaWYgKGN0YSkge1xuICAgICAgICAgICAgdGhpcy5jdGFCdXR0b24gPSBjdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNyZWF0ZSgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvYXN0LS12aXNpYmxlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICB9XG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndG9hc3QtLXZpc2libGUnKTtcbiAgICB9XG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvYXN0Jyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9hc3RfX2NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XG4gICAgICAgIGljb24uc3JjID0gYC93cC1jb250ZW50L3RoZW1lcy9sYXZhbmRyZS9wdWJsaWMvaW1hZ2VzL2ljb25zLyR7dGhpcy50eXBlfS5zdmdgO1xuICAgICAgICBpY29uLmFsdCA9IGAke3RoaXMudHlwZX0gaWNvbmA7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgndG9hc3RfX2ljb24nKTtcbiAgICAgICAgaWNvbi53aWR0aCA9IDI0O1xuICAgICAgICBpY29uLmhlaWdodCA9IDI0O1xuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTVFJPTkcnKTtcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCd0b2FzdF9fbWVzc2FnZScpO1xuICAgICAgICBtZXNzYWdlLmlubmVyVGV4dCA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlaWNvbi1jbG9zZScsICd0b2FzdF9fY2xvc2UnKTtcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMucmVtb3ZlKCk7IH0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICBpZiAodGhpcy5jdGFCdXR0b24pIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBMYXZhbmRyZUJ1dHRvbigpO1xuICAgICAgICAgICAgYnV0dG9uLmhyZWYgPSB0aGlzLmN0YUJ1dHRvbi5ocmVmO1xuICAgICAgICAgICAgYnV0dG9uLnByaW1hcnkgPSB0cnVlO1xuICAgICAgICAgICAgYnV0dG9uLnNpemUgPSAnbGFyZ2UnO1xuICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuY3RhQnV0dG9uLnRleHQ7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VcbiAgICAgICAgICAgIHx8ICF0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIFRvYXN0VHlwZTtcbihmdW5jdGlvbiAoVG9hc3RUeXBlKSB7XG4gICAgVG9hc3RUeXBlW1wic3VjY2Vzc1wiXSA9IFwic3VjY2Vzc1wiO1xuICAgIFRvYXN0VHlwZVtcIndhcm5pbmdcIl0gPSBcIndhcm5pbmdcIjtcbiAgICBUb2FzdFR5cGVbXCJkYW5nZXJcIl0gPSBcImRhbmdlclwiO1xufSkoVG9hc3RUeXBlIHx8IChUb2FzdFR5cGUgPSB7fSkpO1xuIiwiaW1wb3J0IHsgZ2V0Q29va2llVmFsdWUsIHNldENvb2tpZVZhbHVlIH0gZnJvbSBcIi4uL3V0aWwvY29va2llc1wiO1xuaW1wb3J0IFBvcHVwIGZyb20gXCIuL1BvcHVwXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzTGV0dGVyUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGlmIChnZXRDb29raWVWYWx1ZSgnbmV3c2xldHRlci1wb3B1cC1zZWVuJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIE5ld3NMZXR0ZXJQb3B1cC5vcGVuUG9wdXAoJ25ld3NsZXR0ZXItcG9wdXAnLCBudWxsLCBzZWxlY3Rvcik7XG4gICAgICAgICAgICBzZXRDb29raWVWYWx1ZSgnbmV3c2xldHRlci1wb3B1cC1zZWVuJywgJ3RydWUnLCB7XG4gICAgICAgICAgICAgICAgXCJtYXgtYWdlXCI6IDMxNTM2MDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fcG9wdXAucGNzcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCIuLi9jb21tb24vRXZlbnRFbWl0dGVyXCI7XG5pbXBvcnQgRGlhbG9nIGZyb20gXCIuL0RpYWxvZ1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBEaWFsb2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRhdGFBdHRyaWJ1dGUgPSAnZGF0YS1wb3B1cC1uYW1lJztcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgICAgICAgb3BlbjogJ3BvcHVwLS1vcGVuZWQnLFxuICAgICAgICAgICAgY2xvc2VkOiAncG9wdXAtLWNsb3NlZCdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIG9wZW5Qb3B1cChwb3B1cElELCBlbGVtZW50ID0gbnVsbCwgc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBwb3B1cCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLW5hbWU9XCIke3BvcHVwSUR9XCJdYCk7XG4gICAgICAgIGlmIChwb3B1cCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cC10ZW1wbGF0ZT1cIiR7cG9wdXBJRH1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGVsZW1lbnQuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBjbG9uZS5jb250ZW50O1xuICAgICAgICAgICAgKF9hID0gdGVtcGxhdGUucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgICAgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cC1uYW1lPVwiJHtwb3B1cElEfVwiXWApO1xuICAgICAgICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIHBvcHVwKTtcbiAgICAgICAgICAgIGlmIChwb3B1cCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBvcHVwSW5zdGFuY2UgPSBuZXcgUG9wdXAocG9wdXApO1xuICAgICAgICAgICAgcG9wdXBJbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwb3B1cC5vcGVuKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVuRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ29wZW4nKTtcbiAgICAgICAgICAgIHBvcHVwLmRpc3BhdGNoRXZlbnQob3BlbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcbiAgICAgICAgY29uc3QgcG9wdXBMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcG9wdXBdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcG9wdXBMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwb3B1cExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNyZWF0aW9uRXZlbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZUNyZWF0aW9uRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcG9wdXBJRCA9IHRoaXMuZGF0YXNldC5wb3B1cCB8fCBcIlwiO1xuICAgICAgICBQb3B1cC5vcGVuUG9wdXAocG9wdXBJRCwgdGhpcyk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZVZhbHVlKG5hbWUpIHtcbiAgICBjb25zdCBjb29raWUgPSBkb2N1bWVudC5jb29raWVcbiAgICAgICAgLnNwbGl0KCc7ICcpXG4gICAgICAgIC5maW5kKChyb3cpID0+IHJvdy5zdGFydHNXaXRoKG5hbWUpKTtcbiAgICBpZiAoY29va2llID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb29raWUuc3BsaXQoJz0nKVsxXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWVWYWx1ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNvb2tpZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgcGF0aDogJy8nIH0sIG9wdGlvbnMpO1xuICAgIGxldCB1cGRhdGVkQ29va2llID0gYCR7bmFtZX09JHt2YWx1ZX1gO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKGNvbnN0IG9wdGlvbktleSBpbiBjb29raWVPcHRpb25zKSB7XG4gICAgICAgIHVwZGF0ZWRDb29raWUgKz0gYDsgJHtvcHRpb25LZXl9YDtcbiAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBjb29raWVPcHRpb25zW29wdGlvbktleV07XG4gICAgICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBgPSR7b3B0aW9uVmFsdWV9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3RyaW5nQXNIdG1sKGNvbnRlbnQsIHNlbGVjdG9yID0gJ3RlbXBsYXRlJykge1xuICAgIGNvbnN0IGRvbVBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBjb25zdCBwYXJzZWQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICd0ZXh0L2h0bWwnKTtcbiAgICByZXR1cm4gcGFyc2VkLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIHx8IHBhcnNlZC5ib2R5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFic29sdXRlSGVpZ2h0KGVsKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIGNvbnN0IG1hcmdpbiA9IHBhcnNlRmxvYXQoc3R5bGVzWydtYXJnaW5Ub3AnXSkgK1xuICAgICAgICBwYXJzZUZsb2F0KHN0eWxlc1snbWFyZ2luQm90dG9tJ10pO1xuICAgIHJldHVybiBNYXRoLmNlaWwoZWwub2Zmc2V0SGVpZ2h0ICsgbWFyZ2luKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50TGlua0NsYXNzKCkge1xuICAgIGNvbnN0IHBhdGhOYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGNvbnN0IGZvcm1hdHRlZFBhdGhOYW1lID0gc3RyaXBUcmFpbGluZ1NsYXNoKHBhdGhOYW1lKTtcbiAgICBjb25zdCBmdWxsVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgZm9ybWF0dGVkVXJsID0gc3RyaXBUcmFpbGluZ1NsYXNoKGZ1bGxVcmwpO1xuICAgIGNvbnN0IGFuY2hvcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFxuICAgICAgICBuYXYgYVtocmVmPVwiJHtwYXRoTmFtZX1cIl0sXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke2Zvcm1hdHRlZFBhdGhOYW1lfVwiXSxcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7ZnVsbFVybH1cIl0sXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke2Zvcm1hdHRlZFVybH1cIl1cbiAgICBgKSk7XG4gICAgYW5jaG9ycy5mb3JFYWNoKChhbmNob3IpID0+IHtcbiAgICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbGluaycpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChzdHIpIHtcbiAgICByZXR1cm4gc3RyLmVuZHNXaXRoKCcvJykgP1xuICAgICAgICBzdHIuc2xpY2UoMCwgLTEpIDpcbiAgICAgICAgc3RyO1xufVxuIiwibGV0IGxvYWRlZCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IHNpdGVrZXkgPSAnNkxkdjJSa2NBQUFBQUJDQ0wxSlI1RGxtRUVUNE55XzJDbWtWYThOdic7XG5leHBvcnQgZnVuY3Rpb24gbG9hZFJlY2FwdGNoYShlbGVtZW50cykge1xuICAgIGxvb3BUaHJvdWdoRWxlbWVudHMoZWxlbWVudHMsIHRydWUsICgpID0+IHsgaW5zZXJ0UmVjYXB0Y2hhU2NyaXB0KGVsZW1lbnRzKTsgfSk7XG59XG5mdW5jdGlvbiBpbnNlcnRSZWNhcHRjaGFTY3JpcHQoZWxlbWVudHMpIHtcbiAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgICB2YXIgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIHZhciBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LnNyYyA9ICdodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanM/cmVuZGVyPScgKyBzaXRla2V5O1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICAgIGxvb3BUaHJvdWdoRWxlbWVudHMoZWxlbWVudHMsIGZhbHNlLCAoKSA9PiB7IGluc2VydFJlY2FwdGNoYVNjcmlwdChlbGVtZW50cyk7IH0pO1xufVxuZnVuY3Rpb24gbG9vcFRocm91Z2hFbGVtZW50cyhlbGVtZW50cywgYWRkRXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBbJ2ZvY3VzJywgJ2NsaWNrJywgJ3RvdWNoZW5kJywgJ2JsdXInLCAnaW5wdXQnLCAnY2hhbmdlJywgJ3Byb3BlcnR5Y2hhbmdlJ10uZm9yRWFjaChmdW5jdGlvbiAoZXZ0KSB7XG4gICAgICAgICAgICBpZiAoYWRkRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2dCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Nyb2xsVG9UYXJnZXQodGFyZ2V0LCBkZWZhdWx0T2Zmc2V0ID0gMCwgaGVhZGVyT2Zmc2V0ID0gdHJ1ZSkge1xuICAgIGNvbnN0IGJvZHlUb3BQb3NpdGlvbiA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBib2R5VG9wUG9zaXRpb247XG4gICAgbGV0IG9mZnNldCA9IGRlZmF1bHRPZmZzZXQ7XG4gICAgaWYgKGhlYWRlck9mZnNldCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICAgIG9mZnNldCArPSBoZWFkZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9mZnNldFBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uIC0gb2Zmc2V0ICsgMTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KTtcbn1cbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCwgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgX0N1cnRhaW5FbGVtZW50X29wZW4sIF9DdXJ0YWluRWxlbWVudF9leHBhbmQsIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaDtcbmltcG9ydCBcIi4uLy4uL2Nzcy9jb21wb25lbnRzL19hY2NvcmRpb24ucGNzc1wiO1xuaW1wb3J0IHsgZ2V0QWJzb2x1dGVIZWlnaHQgfSBmcm9tIFwiLi4vdXRpbC9kb21cIjtcbmNsYXNzIEFjY29yZGlvbkVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLnNldCh0aGlzLCBbXSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbChcImRldGFpbHNcIikpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIFwiZlwiKS5mb3JFYWNoKChjdXJ0YWluKSA9PiB7XG4gICAgICAgICAgICBjdXJ0YWluLmFkZEV2ZW50TGlzdGVuZXIoXCJ0b2dnbGVcIiwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY3VydGFpbi5vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMpLmNhbGwodGhpcywgY3VydGFpbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMgPSBuZXcgV2Vha01hcCgpLCBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMgPSBmdW5jdGlvbiBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMoY3VydGFpbikge1xuICAgIGNvbnN0IG90aGVyQ3VydGFpbnMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBcImZcIikuZmlsdGVyKChjKSA9PiBjdXJ0YWluICE9PSBjKTtcbiAgICBvdGhlckN1cnRhaW5zLmZvckVhY2goKGN1cnRhaW4pID0+IHtcbiAgICAgICAgY29uc3QgY3VydGFpbkVsZW1lbnQgPSBjdXJ0YWluO1xuICAgICAgICBjdXJ0YWluRWxlbWVudC5vcGVuID0gZmFsc2U7XG4gICAgfSk7XG59O1xuY2xhc3MgQ3VydGFpbkVsZW1lbnQgZXh0ZW5kcyBIVE1MRGV0YWlsc0VsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnkuc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcihcInN1bW1hcnlcIikpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfY29udGVudC5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKFwiLmN1cnRhaW4tY29udGVudFwiKSk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3Npbmcuc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcihcImNsaWNrXCIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIFwiZlwiKSB8fCB0aGlzLm9wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X29wZW4pLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgdHJ1ZSwgXCJmXCIpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTtcbiAgICAgICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIGNvbnN0IGVuZEhlaWdodCA9IGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIFwiZlwiKS5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgdGhpcy5hbmltYXRlKHtcbiAgICAgICAgICAgIGhlaWdodDogW3N0YXJ0SGVpZ2h0LCBlbmRIZWlnaHRdLFxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgZWFzaW5nOiBcImVhc2Utb3V0XCIsXG4gICAgICAgIH0pLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLm9uZmluaXNoID0gKCkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoKS5jYWxsKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikub25jYW5jZWwgPSAoKSA9PiB7IF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgZmFsc2UsIFwiZlwiKTsgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJyk7IH07XG4gICAgfVxufVxuX0N1cnRhaW5FbGVtZW50X3N1bW1hcnkgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9DdXJ0YWluRWxlbWVudF9vcGVuID0gZnVuY3Rpb24gX0N1cnRhaW5FbGVtZW50X29wZW4oKSB7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluRWxlbWVudF9leHBhbmQpLmNhbGwodGhpcykpO1xufSwgX0N1cnRhaW5FbGVtZW50X2V4cGFuZCA9IGZ1bmN0aW9uIF9DdXJ0YWluRWxlbWVudF9leHBhbmQoKSB7XG4gICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgY29uc3QgZW5kSGVpZ2h0ID0gYCR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgXCJmXCIpLm9mZnNldEhlaWdodCArIGdldEFic29sdXRlSGVpZ2h0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQsIFwiZlwiKSl9cHhgO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5jYW5jZWwoKTtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCB0aGlzLmFuaW1hdGUoe1xuICAgICAgICBoZWlnaHQ6IFtzdGFydEhlaWdodCwgZW5kSGVpZ2h0XSxcbiAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgIGVhc2luZzogXCJlYXNlLW91dFwiLFxuICAgIH0pLCBcImZcIik7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikub25maW5pc2ggPSAoKSA9PiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gpLmNhbGwodGhpcywgdHJ1ZSk7XG59LCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2ggPSBmdW5jdGlvbiBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gob3Blbikge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBudWxsLCBcImZcIik7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBmYWxzZSwgXCJmXCIpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycpO1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndG9nZ2xlJykpO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZShcImFjY29yZGlvbi1lbGVtZW50XCIsIEFjY29yZGlvbkVsZW1lbnQpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiY3VydGFpbi1lbGVtZW50XCIsIEN1cnRhaW5FbGVtZW50LCB7IGV4dGVuZHM6ICdkZXRhaWxzJyB9KTtcbiIsImNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgndGVtcGxhdGUnKTtcbnRlbXBsYXRlLmlubmVySFRNTCA9IGBcbiAgPHN0eWxlPlxuICAgIDpyb290IHtcbiAgICAgICAgLS13aGl0ZTogI0ZGRkZGRjtcbiAgICAgICAgLS1qZXQ6ICMyQjJCMkI7XG4gICAgICAgIC0tb2xkLWJ1cmd1bmR5OiAjM0QyQjMwO1xuICAgICAgICAtLXN1YmR1ZWQ6ICNiYWJmYzM7XG4gICAgICAgIC0tZm9udC1mYW1pbHktYWNjZW50OiBhZG9iZS1nYXJhbW9uZC1wcm8sIHNlcmlmO1xuXG4gICAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuXG4gICAgICAgIC0tYnV0dG9uLWJvcmRlci1jb2xvcjogdmFyKC0tb2xkLWJ1cmd1bmR5KTtcbiAgICAgICAgLS1idXR0b24tYm9yZGVyLWhvdmVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuXG4gICAgICAgIC0tYnV0dG9uLXRleHQtY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG4gICAgICAgIC0tYnV0dG9uLXRleHQtaG92ZXItY29sb3I6IHZhcigtLXdoaXRlKTtcblxuICAgICAgICAtLWJ1dHRvbi1mb250LXNpemU6IGNhbGMoMTNyZW0gLyAxNik7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW3ByaW1hcnldIHtcbiAgICAgICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tb2xkLWJ1cmd1bmR5KTtcbiAgICAgICAgLS1idXR0b24tYmFja2dyb3VuZC1ob3Zlci1jb2xvcjogdmFyKC0tdHJhbnNwYXJlbnQpO1xuXG4gICAgICAgIC0tYnV0dG9uLWJvcmRlci1jb2xvcjogdmFyKC0tb2xkLWJ1cmd1bmR5KTtcbiAgICAgICAgLS1idXR0b24tYm9yZGVyLWhvdmVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuXG4gICAgICAgIC0tYnV0dG9uLXRleHQtY29sb3I6IHZhcigtLXdoaXRlKTtcbiAgICAgICAgLS1idXR0b24tdGV4dC1ob3Zlci1jb2xvcjogdmFyKC0tb2xkLWJ1cmd1bmR5KTtcbiAgICB9XG5cbiAgICBbaXM9XCJsYXZhbmRyZS1idXR0b25cIl1bb3V0bGluZV0ge1xuICAgICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICB9XG5cbiAgICBbaXM9XCJsYXZhbmRyZS1idXR0b25cIl1bc2l6ZT1cInNtYWxsXCJdIHtcbiAgICAgICAgbWluLWhlaWdodDogMS43NXJlbTtcbiAgICAgICAgcGFkZGluZzogLjNyZW0gLjc1cmVtO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtzaXplPVwibGFyZ2VcIl0ge1xuICAgICAgICBtaW4taGVpZ2h0OiAzLjc1cmVtO1xuICAgICAgICBtaW4td2lkdGg6IDMuNzVyZW07XG4gICAgICAgIHBhZGRpbmc6IC43NXJlbSAxLjVyZW07XG4gICAgICAgIGZvbnQtc2l6ZTogMS41cmVtO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtmdWxsLXdpZHRoXSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcblxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIuMjVyZW07XG4gICAgICAgIG1pbi13aWR0aDogMi4yNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDEuNXJlbTtcblxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiB2YXIoLS1mb250LWZhbWlseS1hY2NlbnQpO1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWhvdmVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LWhvdmVyLWNvbG9yKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXSBzdmcsXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdIHBhdGgge1xuICAgICAgICBmaWxsOiB2YXIoLS1idXR0b24tdGV4dC1jb2xvcik7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tYnV0dG9uLXRleHQtY29sb3IpO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXTpob3ZlciBzdmcsXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdOmhvdmVyIHBhdGgge1xuICAgICAgICBmaWxsOiB2YXIoLS1idXR0b24tdGV4dC1ob3Zlci1jb2xvcik7XG4gICAgICAgIHN0cm9rZTogdmFyKC0tYnV0dG9uLXRleHQtaG92ZXItY29sb3IpO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXSBzdmcge1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IC41cmVtO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtsb2FkaW5nXSB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtsb2FkaW5nXSB7XG4gICAgICAgIGNvbG9yOiB0cmFuc3BhcmVudCAhaW1wb3J0YW50O1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtsb2FkaW5nXTphZnRlciB7XG4gICAgICAgIGNvbnRlbnQ6IFwiXCI7XG4gICAgICAgIHBvc2l0aW9uOiBhYnNvbHV0ZTtcbiAgICAgICAgaW5zZXQ6IDA7XG4gICAgICAgIG1hcmdpbjogYXV0bztcblxuICAgICAgICB3aWR0aDogLjc1ZW07XG4gICAgICAgIGhlaWdodDogLjc1ZW07XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvcikgdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1zdHlsZTogc29saWQ7XG4gICAgICAgIGJvcmRlci13aWR0aDogM3B4O1xuICAgICAgICBib3JkZXItcmFkaXVzOiA1MCU7XG4gICAgICAgIHRyYW5zZm9ybTogdHJhbnNsYXRlWigwKTtcbiAgICAgICAgYW5pbWF0aW9uOiBidG5sb2FkaW5nIDFzIGxpbmVhciBpbmZpbml0ZTtcbiAgICB9XG5cbiAgICBbaXM9XCJsYXZhbmRyZS1idXR0b25cIl1bbG9hZGluZ11bcHJpbWFyeV06YWZ0ZXIge1xuICAgICAgICBib3JkZXItY29sb3I6IHRyYW5zcGFyZW50IHRyYW5zcGFyZW50ICNGRkZGRkYgI0ZGRkZGRjtcbiAgICB9XG5cbiAgICBAa2V5ZnJhbWVzIGJ0bmxvYWRpbmcge1xuICAgICAgICAwJSB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgwZGVnKVxuICAgICAgICB9XG5cbiAgICAgICAgdG8ge1xuICAgICAgICAgICAgdHJhbnNmb3JtOiByb3RhdGUoMXR1cm4pXG4gICAgICAgIH1cbiAgICB9XG4gIDwvc3R5bGU+XG5gO1xuZXhwb3J0IGNsYXNzIExhdmFuZHJlQnV0dG9uIGV4dGVuZHMgSFRNTEJ1dHRvbkVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaHJlZiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuaHJlZjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2lzJywgJ2xhdmFuZHJlLWJ1dHRvbicpO1xuICAgIH1cbiAgICBnZXQgaHJlZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJyc7XG4gICAgfVxuICAgIHNldCBocmVmKHVybCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NpemUnKSB8fCAnJztcbiAgICB9XG4gICAgc2V0IHNpemUodXJsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzaXplJywgdXJsKTtcbiAgICB9XG4gICAgZ2V0IHByaW1hcnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgncHJpbWFyeScpO1xuICAgIH1cbiAgICBzZXQgcHJpbWFyeShib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdwcmltYXJ5JywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IG91dGxpbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgncHJpbWFyeScpO1xuICAgIH1cbiAgICBzZXQgb3V0bGluZShib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdvdXRsaW5lJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IGZ1bGxXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBmdWxsV2lkdGgoYm9vbCkge1xuICAgICAgICBpZiAoIWJvb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZnVsbC13aWR0aCcsIGJvb2wudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGdldCBsb2FkaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgc2V0IGxvYWRpbmcoYm9vbCkge1xuICAgICAgICBpZiAoIWJvb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsIGJvb2wudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxhdmFuZHJlQnV0dG9uLmpzLm1hcCIsImltcG9ydCB7IExhdmFuZHJlQnV0dG9uIH0gZnJvbSAnLi9MYXZhbmRyZUJ1dHRvbi5qcyc7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsYXZhbmRyZS1idXR0b24nLCBMYXZhbmRyZUJ1dHRvbiwgeyBleHRlbmRzOiAnYnV0dG9uJyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxhdmFuZHJlLWJ1dHRvbi5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9