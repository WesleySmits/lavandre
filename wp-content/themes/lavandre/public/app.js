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
        --font-family: 'Nunito', sans-serif;

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
        font-size: 1.25rem;
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
        font-family: --font-family;
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
  </style>
`;
class LavandreButton extends HTMLButtonElement {
    constructor() {
        super(...arguments);
        this.clickHandler = (event) => {
            if (this.href === null) {
                return;
            }
            event.preventDefault();
            window.location.href = this.href;
        };
    }
    get href() {
        return this.getAttribute('href');
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2FwcC5wY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fYWNjb3JkaW9uLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19jb29raWUtYmFyLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19jdXJ0YWluLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19pbmZvUG9wdXAucGNzcyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3BvcHVwLnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL190b2FzdC5wY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9hcHAudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbW1vbi9EYXRhTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheExvZ2luLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FqYXhSZWdpc3Rlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Db25maXJtVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9Db29raWVCYXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ3VydGFpbi50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9FbWFpbFZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSGVhZGVyU2VhcmNoLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0luZm9Qb3B1cC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9MYXp5TG9hZGVyLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05ld3NsZXR0ZXJTdWJzY3JpYmUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFzc3dvcmRSZXZlYWwudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2Nyb2xsVG9Db250ZW50LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N1Yk1lbnUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9hc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VudW1zL1RvYXN0VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdWkvTmV3c2xldHRlclBvcHVwLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91aS9Qb3B1cC50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC9jb29raWVzLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsL2RvbS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC9saW5rcy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdXRpbC9sb2FkUmVjYXB0Y2hhLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsL3Njcm9sbFRvVGFyZ2V0LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy93ZWItY29tcG9uZW50cy9BY2NvcmRpb25FbGVtZW50LnRzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGF2YW5kcmUvYnV0dG9uL2Rpc3Qvc3JjL0xhdmFuZHJlQnV0dG9uLmpzIiwid2VicGFjazovLy8uL25vZGVfbW9kdWxlcy9AbGF2YW5kcmUvYnV0dG9uL2Rpc3Qvc3JjL2xhdmFuZHJlLWJ1dHRvbi5qcyJdLCJuYW1lcyI6WyJBcHAiLCJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImFyZ3VtZW50cyIsImV2ZW50RW1pdHRlciIsIkV2ZW50RW1pdHRlciIsImNvbXBvbmVudHMiLCJDb29raWVCYXIiLCJTaWRlUGFuZWwiLCJDdXJ0YWluIiwiSW5mb1BvcHVwIiwiUGFzc3dvcmRSZXZlYWwiLCJFbWFpbFZhbGlkYXRpb24iLCJOZXdzbGV0dGVyU3Vic2NyaWJlIiwiRm9yZ290UGFzc3dvcmQiLCJBamF4TG9naW4iLCJBamF4UmVnaXN0ZXIiLCJGaWVsZFZhbGlkYXRpb24iLCJIZWFkZXJTZWFyY2giLCJTdWJNZW51IiwiTGF6eUxvYWRlciIsIk5ld3NMZXR0ZXJQb3B1cCIsIlNjcm9sbFRvQ29udGVudCIsImluaXRpYWxpemUiLCJzZXRDdXJyZW50TGlua0NsYXNzIiwid3BGb3Jtc1N1Ym1pdEJ1dHRvbnMiLCJBcnJheSIsImZyb20iLCJkb2N1bWVudCIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJmb3JFYWNoIiwiYnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYXBwSW5pdCIsImFwcCIsImxpc3QiLCJxdWVyeVNlbGVjdG9yIiwiaXRlbXMiLCJ0b3RhbFdpZHRoIiwiaXRlbSIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJ3aWR0aCIsIkRhdGFMYXllciIsImRhdGFMYXllciIsIndpbmRvdyIsInB1c2giLCJkYXRhIiwiQ29tcG9uZW50IiwiZm9ybSIsImFqYXhFbmRwb2ludCIsImxvY2F0aW9uIiwib3JpZ2luIiwiaXNWYWxpZCIsInNldEV2ZW50TGlzdGVuZXJzIiwiZmllbGRzIiwibG9hZFJlY2FwdGNoYSIsImluZGV4IiwibGVuZ3RoIiwiZmllbGQiLCJ2YWxpZGF0b3IiLCJhZGRFdmVudExpc3RlbmVyIiwiZXZlbnQiLCJfYSIsIl9iIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZCIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInZhbGlkaXR5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInVzZXJuYW1lIiwiZ2V0IiwidG9TdHJpbmciLCJwYXNzd29yZCIsImdyZWNhcHRjaGEiLCJyZWFkeSIsImV4ZWN1dGUiLCJzaXRla2V5IiwiYWN0aW9uIiwidGhlbiIsInRva2VuIiwic3VibWl0QnV0dG9uIiwidW5kZWZpbmVkIiwic2VuZEFqYXhSZXF1ZXN0Iiwib25TdWNjZXNzIiwiYmluZCIsIm9uRmFpbHVyZSIsInJlcyIsInJlc3BvbnNlIiwic3VjY2VzcyIsIkVycm9yIiwiY3RhQnV0dG9uIiwidGV4dCIsImhyZWYiLCJ0b2FzdCIsIlRvYXN0IiwiVG9hc3RUeXBlIiwicGFuZWwiLCJjbG9zZXN0IiwiQ3VzdG9tRXZlbnQiLCJib2R5IiwiY2xhc3NMaXN0IiwiYWRkIiwibWV0aG9kIiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZSIsIndhcm5pbmciLCJvbkluaXQiLCJzZWxlY3RvciIsImxvZ2luRm9ybSIsImFqYXhMb2dpbiIsImVtYWlsRmllbGQiLCJlbWFpbFZhbGlkYXRpb24iLCJwYXNzd29yZEZpZWxkIiwiY29uZmlybVBhc3N3b3JkRmllbGQiLCJjb25maXJtVmFsaWRhdGlvbiIsIkNvbmZpcm1WYWxpZGF0aW9uIiwiX2MiLCJfZCIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJyZWdpc3RlckZvcm0iLCJhamF4UmVnaXN0ZXIiLCJjb25maXJtRmllbGQiLCJldmVudHMiLCJ2YWx1ZSIsInNldEN1c3RvbVZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJlbGVtZW50IiwiYWNjZXB0QnV0dG9uIiwicmVqZWN0QnV0dG9uIiwidGVtcGxhdGVFbGVtZW50IiwiZ2V0Q29va2llVmFsdWUiLCJjb29raWVOYW1lIiwicmVtb3ZlIiwiZ2V0RWxlbWVudCIsImFjY2VwdENvb2tpZXMiLCJyZWplY3RDb29raWVzIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJjb250ZW50IiwicGFyZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwic2V0QWNjZXB0Q29va2llIiwic2V0UmVqZWN0Q29va2llIiwic2V0Q29va2llVmFsdWUiLCJjb29raWVCYXIiLCJmb2xkQnV0dG9uIiwib25seU9uTW9iaWxlIiwiZGVmYXVsdEhlaWdodCIsImdldENvbXB1dGVkU3R5bGUiLCJtYXhIZWlnaHQiLCJlIiwiaW5uZXJXaWR0aCIsImNvbnRhaW5zIiwic2V0VGltZW91dCIsInNjcm9sbEhlaWdodCIsImRhdGFzZXQiLCJyZWFkTGVzcyIsInJlYWRNb3JlIiwiaW5uZXJUZXh0IiwidG9nZ2xlcyIsInRvZ2dsZSIsImN1cnRhaW5Ub2dnbGUiLCJjdXJ0YWluIiwiZW1haWxJbnB1dCIsImJsdXJUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlQmx1ckV2ZW50Iiwic2VjdXJpdHkiLCJyZW1vdmVFeGlzdGluZ01lc3NhZ2VzIiwiZXJyb3IiLCJzZXRWYWxpZGF0aW9uTWVzc2FnZSIsImZvcm1Sb3ciLCJmb3JtUm93UGFyZW50IiwidmFsaWRhdGlvbkVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJpbnNlcnRCZWZvcmUiLCJncmFuZHBhcmVudCIsImV4aXN0aW5nVmFsaWRhdGlvbnMiLCJ2IiwicmVnaXN0ZXJFbWFpbElucHV0IiwiYW5jaG9yIiwicGFzc3dvcmRGb3JnZXRBbmNob3IiLCJmaWVsZFZhbGlkYXRpb24iLCJwYXNzd29yZEZvcmdldExpbmtzIiwibGluayIsImZvcmdvdFBhc3N3b3JkIiwiZG9jdW1lbnRDbGlja0hhbmRsZXIiLCJldmVudFRhcmdldCIsInRhcmdldCIsIndpdGhpbkhlYWRlciIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzZWFyY2hJbnB1dEVsZW1lbnQiLCJmb2N1cyIsImhlYWRlclNlYXJjaCIsImluc3RhbmNlIiwic2hvd1RpcHB5IiwidGlwcHkiLCJ0aGVtZSIsImFsbG93SFRNTCIsImhpZGVPbkNsaWNrIiwic2hvd09uQ3JlYXRlIiwiaW50ZXJhY3RpdmUiLCJvbkhpZGRlbiIsImkiLCJkZXN0cm95Iiwic2hvdyIsImhpZGVXaXRoSW50ZXJhY3Rpdml0eSIsInRpcHB5RWxlbWVudHMiLCJ0aXBweUVsZW1lbnQiLCJpbmZvUG9wdXAiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzIiwib25JbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwibGF6eWxvYWQiLCJPYnNlcnZlckNsYXNzIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwibGF6eUltYWdlT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIkhUTUxQaWN0dXJlRWxlbWVudCIsImxhenkiLCJ1bm9ic2VydmUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImxhenlJbWFnZSIsImVsIiwibWFuYWdlQ3NzQ2xhc3NlcyIsImltYWdlIiwibG9hZGluZ1NwaW5uZXIiLCJIVE1MSW1hZ2VFbGVtZW50IiwiSFRNTFNvdXJjZUVsZW1lbnQiLCJzaXplcyIsInNyY3NldCIsInNyYyIsImxhenlsb2FkRWxlbWVudHMiLCJjb21wYW55TmFtZSIsInJlbW92ZUVycm9yVGV4dCIsImFwcGVuZFN1Y2Nlc3NUZXh0IiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiZXZlbnRMYWJlbCIsImlkIiwiYXBwZW5kRXJyb3JUZXh0IiwiZm9ybXMiLCJuZXdzbGV0dGVyU3Vic2NyaWJlIiwicGFzc3dvcmRJbnB1dCIsImNyZWF0ZVJldmVhbEJ1dHRvbiIsInR5cGUiLCJ0YWJJbmRleCIsInBhc3N3b3JkUm93cyIsInBhc3N3b3JkUm93IiwicGFzc3dvcmRSZXZlYWwiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwicmVjZWl2ZXIiLCJzdGF0ZSIsImtpbmQiLCJmIiwiVHlwZUVycm9yIiwiaGFzIiwiY2FsbCIsInNldCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQiLCJfU2Nyb2xsVG9Db250ZW50X3RhcmdldCIsImhlYWRlck9mZnNldCIsInNjcm9sbFRvVGFyZ2V0IiwidGFyZ2V0SWQiLCJzY3JvbGxUbyIsImdldEVsZW1lbnRCeUlkIiwiV2Vha01hcCIsImhlYWRlciIsImhvdmVyRWxlbWVudHMiLCJzdWJNZW51IiwiY3RhIiwidGltZW91dCIsImNyZWF0ZSIsInJlbW92ZUNoaWxkIiwiY29udGFpbmVyIiwiaWNvbiIsImFsdCIsImhlaWdodCIsInBhcmFncmFwaCIsImNsb3NlQnV0dG9uIiwiTGF2YW5kcmVCdXR0b24iLCJwcmltYXJ5Iiwic2l6ZSIsIlBvcHVwIiwib3BlblBvcHVwIiwiRGlhbG9nIiwiZGF0YUF0dHJpYnV0ZSIsImNsYXNzZXMiLCJvcGVuIiwiY2xvc2VkIiwicG9wdXBJRCIsInBvcHVwIiwidGVtcGxhdGUiLCJIVE1MQW5jaG9yRWxlbWVudCIsImVtaXQiLCJwb3B1cEluc3RhbmNlIiwib3BlbkV2ZW50IiwicG9wdXBMaW5rcyIsImhhbmRsZUNyZWF0aW9uRXZlbnQiLCJuYW1lIiwiY29va2llIiwic3BsaXQiLCJmaW5kIiwicm93Iiwic3RhcnRzV2l0aCIsImNvb2tpZU9wdGlvbnMiLCJPYmplY3QiLCJhc3NpZ24iLCJwYXRoIiwidXBkYXRlZENvb2tpZSIsIm9wdGlvbktleSIsIm9wdGlvblZhbHVlIiwicGFyc2VTdHJpbmdBc0h0bWwiLCJkb21QYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZWQiLCJwYXJzZUZyb21TdHJpbmciLCJnZXRBYnNvbHV0ZUhlaWdodCIsInN0eWxlcyIsIm1hcmdpbiIsInBhcnNlRmxvYXQiLCJNYXRoIiwiY2VpbCIsIm9mZnNldEhlaWdodCIsInBhdGhOYW1lIiwicGF0aG5hbWUiLCJmb3JtYXR0ZWRQYXRoTmFtZSIsInN0cmlwVHJhaWxpbmdTbGFzaCIsImZ1bGxVcmwiLCJmb3JtYXR0ZWRVcmwiLCJhbmNob3JzIiwic3RyIiwiZW5kc1dpdGgiLCJzbGljZSIsImxvYWRlZCIsImxvb3BUaHJvdWdoRWxlbWVudHMiLCJpbnNlcnRSZWNhcHRjaGFTY3JpcHQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHQiLCJhZGRFdmVudCIsImNhbGxiYWNrIiwiZXZ0IiwiZGVmYXVsdE9mZnNldCIsImJvZHlUb3BQb3NpdGlvbiIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsInRvcCIsImVsZW1lbnRQb3NpdGlvbiIsIm9mZnNldCIsImNsaWVudEhlaWdodCIsIm9mZnNldFBvc2l0aW9uIiwiYmVoYXZpb3IiLCJfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMiLCJfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucyIsIl9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucyIsIl9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMiLCJfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSIsIl9DdXJ0YWluRWxlbWVudF9jb250ZW50IiwiX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZyIsIl9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24iLCJfQ3VydGFpbkVsZW1lbnRfb3BlbiIsIl9DdXJ0YWluRWxlbWVudF9leHBhbmQiLCJfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2giLCJBY2NvcmRpb25FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJjb25uZWN0ZWRDYWxsYmFjayIsIldlYWtTZXQiLCJvdGhlckN1cnRhaW5zIiwiZmlsdGVyIiwiYyIsImN1cnRhaW5FbGVtZW50IiwiQ3VydGFpbkVsZW1lbnQiLCJIVE1MRGV0YWlsc0VsZW1lbnQiLCJjbG9zZSIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwiY2FuY2VsIiwiYW5pbWF0ZSIsImR1cmF0aW9uIiwiZWFzaW5nIiwib25maW5pc2giLCJvbmNhbmNlbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiZXh0ZW5kcyJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEsdUM7Ozs7Ozs7Ozs7O0FDQUEs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Q0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDOzs7Ozs7Ozs7Ozs7QUNySEE7QUFBQTtBQUFxRDtBQUNyRCxnREFBZ0QsaUVBQWMsR0FBRyxvQkFBb0I7QUFDckYsMkMiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luIiwiaW1wb3J0ICcuLi9jc3MvYXBwLnBjc3MnO1xuaW1wb3J0ICdAbGF2YW5kcmUvYnV0dG9uL2Rpc3Qvc3JjL2xhdmFuZHJlLWJ1dHRvbic7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgQWpheExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9BamF4TG9naW4nO1xuaW1wb3J0IEFqYXhSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvQWpheFJlZ2lzdGVyJztcbmltcG9ydCBDdXJ0YWluIGZyb20gJy4vY29tcG9uZW50cy9DdXJ0YWluJztcbmltcG9ydCBFbWFpbFZhbGlkYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL0VtYWlsVmFsaWRhdGlvbic7XG5pbXBvcnQgUGFzc3dvcmRSZXZlYWwgZnJvbSAnLi9jb21wb25lbnRzL1Bhc3N3b3JkUmV2ZWFsJztcbmltcG9ydCBOZXdzbGV0dGVyU3Vic2NyaWJlIGZyb20gJy4vY29tcG9uZW50cy9OZXdzbGV0dGVyU3Vic2NyaWJlJztcbmltcG9ydCB7IEZpZWxkVmFsaWRhdGlvbiB9IGZyb20gJy4vY29tcG9uZW50cy9GaWVsZFZhbGlkYXRpb24nO1xuaW1wb3J0IEluZm9Qb3B1cCBmcm9tICcuL2NvbXBvbmVudHMvSW5mb1BvcHVwJztcbmltcG9ydCBDb29raWVCYXIgZnJvbSAnLi9jb21wb25lbnRzL0Nvb2tpZUJhcic7XG5pbXBvcnQgRm9yZ290UGFzc3dvcmQgZnJvbSAnLi9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkJztcbmltcG9ydCBTaWRlUGFuZWwgZnJvbSAnLi91aS9TaWRlUGFuZWwnO1xuaW1wb3J0IEhlYWRlclNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyU2VhcmNoJztcbmltcG9ydCBTdWJNZW51IGZyb20gJy4vY29tcG9uZW50cy9TdWJNZW51JztcbmltcG9ydCB7IHNldEN1cnJlbnRMaW5rQ2xhc3MgfSBmcm9tICcuL3V0aWwvbGlua3MnO1xuaW1wb3J0IE1vZHVsZSBmcm9tICcuL01vZHVsZSc7XG5pbXBvcnQgTGF6eUxvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvTGF6eUxvYWRlcic7XG5pbXBvcnQgTmV3c0xldHRlclBvcHVwIGZyb20gJy4vdWkvTmV3c2xldHRlclBvcHVwJztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9BY2NvcmRpb25FbGVtZW50JztcbmltcG9ydCBTY3JvbGxUb0NvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL1Njcm9sbFRvQ29udGVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBcHAgZXh0ZW5kcyBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW1xuICAgICAgICAgICAgQ29va2llQmFyLFxuICAgICAgICAgICAgU2lkZVBhbmVsLFxuICAgICAgICAgICAgQ3VydGFpbixcbiAgICAgICAgICAgIEluZm9Qb3B1cCxcbiAgICAgICAgICAgIFBhc3N3b3JkUmV2ZWFsLFxuICAgICAgICAgICAgRW1haWxWYWxpZGF0aW9uLFxuICAgICAgICAgICAgTmV3c2xldHRlclN1YnNjcmliZSxcbiAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkLFxuICAgICAgICAgICAgQWpheExvZ2luLFxuICAgICAgICAgICAgQWpheFJlZ2lzdGVyLFxuICAgICAgICAgICAgRmllbGRWYWxpZGF0aW9uLFxuICAgICAgICAgICAgSGVhZGVyU2VhcmNoLFxuICAgICAgICAgICAgU3ViTWVudSxcbiAgICAgICAgICAgIExhenlMb2FkZXIsXG4gICAgICAgICAgICBOZXdzTGV0dGVyUG9wdXAsXG4gICAgICAgICAgICBTY3JvbGxUb0NvbnRlbnRcbiAgICAgICAgXTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBzZXRDdXJyZW50TGlua0NsYXNzKCk7XG4gICAgICAgIGNvbnN0IHdwRm9ybXNTdWJtaXRCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIndwZm9ybXNbc3VibWl0XVwiXScpKTtcbiAgICAgICAgd3BGb3Jtc1N1Ym1pdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaXMnLCAnbGF2YW5kcmUtYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdzaXplJywgJ2xhcmdlJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdmdWxsLXdpZHRoJywgJ2xhcmdlJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdvdXRsaW5lJywgJ3RydWUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuKGZ1bmN0aW9uIGFwcEluaXQoKSB7XG4gICAgY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuICAgIGFwcC5pbml0aWFsaXplKCk7XG4gICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c3Atc2xpZGVyJyk7XG4gICAgaWYgKCFsaXN0KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnVzcC1zbGlkZXJfX2l0ZW0nKSk7XG4gICAgbGV0IHRvdGFsV2lkdGggPSAwO1xuICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgdG90YWxXaWR0aCArPSBpdGVtLmNsaWVudFdpZHRoO1xuICAgIH0pO1xuICAgIGxpc3Quc3R5bGUud2lkdGggPSBgJHt0b3RhbFdpZHRofXB4YDtcbn0pKCk7XG4iLCJjbGFzcyBEYXRhTGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGFMYXllciA9ICh3aW5kb3cuZGF0YUxheWVyKSA/IHdpbmRvdy5kYXRhTGF5ZXIgOiBbXTtcbiAgICB9XG4gICAgcHVzaChkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRGF0YUxheWVyIH07XG5leHBvcnQgZGVmYXVsdCBuZXcgRGF0YUxheWVyKCk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IERhdGFMYXllciBmcm9tICcuLi9jb21tb24vRGF0YUxheWVyJztcbmltcG9ydCB7IFRvYXN0VHlwZSB9IGZyb20gJy4uL2VudW1zL1RvYXN0VHlwZSc7XG5pbXBvcnQgeyBsb2FkUmVjYXB0Y2hhLCBzaXRla2V5IH0gZnJvbSAnLi4vdXRpbC9sb2FkUmVjYXB0Y2hhJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IHsgRmllbGRWYWxpZGF0aW9uIH0gZnJvbSAnLi9GaWVsZFZhbGlkYXRpb24nO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vVG9hc3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgICAgIC8vIExvYWQgcmVjYXB0Y2hhXG4gICAgICAgIGxvYWRSZWNhcHRjaGEoZmllbGRzKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmllbGQudmFsaWRpdHkudmFsaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgndXNlcm5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IGdyZWNhcHRjaGEgPSB3aW5kb3cuZ3JlY2FwdGNoYTtcbiAgICAgICAgICAgIGdyZWNhcHRjaGEucmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdyZWNhcHRjaGEuZXhlY3V0ZShzaXRla2V5LCB7IGFjdGlvbjogJ0FqYXhMb2dpbicgfSkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICdhY3Rpb24nOiAnYWpheGxvZ2luJyxcbiAgICAgICAgICAgICAgICAgICAgICAgICdyZWNhcHRjaGFUb2tlbic6IHRva2VuLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3VzZXJuYW1lJzogdXNlcm5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAncGFzc3dvcmQnOiBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzLCBldmVudCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyBpcyB3cm9uZycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGN0YUJ1dHRvbiA9IHtcbiAgICAgICAgICAgIHRleHQ6ICdNeSBhY2NvdW50JyxcbiAgICAgICAgICAgIGhyZWY6ICcvbXktYWNjb3VudC8nXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0KHJlc3BvbnNlLmRhdGEsIFRvYXN0VHlwZS5zdWNjZXNzLCBjdGFCdXR0b24sIDIwMDAwKTtcbiAgICAgICAgdG9hc3QuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBjb25zdCBwYW5lbCA9IHRoaXMuZm9ybS5jbG9zZXN0KCdbZGF0YS1wYW5lbC1uYW1lXScpO1xuICAgICAgICBpZiAocGFuZWwpIHtcbiAgICAgICAgICAgIHBhbmVsLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKSk7XG4gICAgICAgIH1cbiAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuYWRkKCdsb2dnZWQtaW4nKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiAnbG9naW4nLFxuICAgICAgICAgICAgbWV0aG9kOiAnQWpheExvZ2luJ1xuICAgICAgICB9O1xuICAgICAgICBEYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICB9XG4gICAgb25GYWlsdXJlKHJlcykge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlc3BvbnNlLmRhdGEgfHwgJ1RoaXMgY29tYmluYXRpb24gb2YgZW1haWwgYW5kIHBhc3N3b3JkIGlzIG5vdCBrbm93biB0byB1cy4gUGxlYXNlIHRyeSBhZ2FpbiBvciByZXF1ZXN0IGEgbmV3IHBhc3N3b3JkLic7XG4gICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0KG1lc3NhZ2UsIFRvYXN0VHlwZS53YXJuaW5nKTtcbiAgICAgICAgdG9hc3QuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignI2FqYXgtbG9naW4tZm9ybScpO1xuICAgICAgICBpZiAobG9naW5Gb3JtID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWpheExvZ2luID0gbmV3IEFqYXhMb2dpbihsb2dpbkZvcm0pO1xuICAgICAgICBhamF4TG9naW4uaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gJy4uL2NvbW1vbi9EYXRhTGF5ZXInO1xuaW1wb3J0IHsgVG9hc3RUeXBlIH0gZnJvbSAnLi4vZW51bXMvVG9hc3RUeXBlJztcbmltcG9ydCB7IGxvYWRSZWNhcHRjaGEsIHNpdGVrZXkgfSBmcm9tICcuLi91dGlsL2xvYWRSZWNhcHRjaGEnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgQ29uZmlybVZhbGlkYXRpb24gZnJvbSAnLi9Db25maXJtVmFsaWRhdGlvbic7XG5pbXBvcnQgRW1haWxWYWxpZGF0aW9uIGZyb20gJy4vRW1haWxWYWxpZGF0aW9uJztcbmltcG9ydCB7IEZpZWxkVmFsaWRhdGlvbiB9IGZyb20gJy4vRmllbGRWYWxpZGF0aW9uJztcbmltcG9ydCBUb2FzdCBmcm9tICcuL1RvYXN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gICAgICAgIGlmIChlbWFpbEZpZWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBlbWFpbFZhbGlkYXRpb24gPSBuZXcgRW1haWxWYWxpZGF0aW9uKGVtYWlsRmllbGQpO1xuICAgICAgICAgICAgZW1haWxWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXNzd29yZEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3Rlci1wYXNzd29yZCcpO1xuICAgICAgICBjb25zdCBjb25maXJtUGFzc3dvcmRGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcjY29uZmlybS1wYXNzd29yZCcpO1xuICAgICAgICBpZiAocGFzc3dvcmRGaWVsZCAmJiBjb25maXJtUGFzc3dvcmRGaWVsZCkge1xuICAgICAgICAgICAgY29uc3QgY29uZmlybVZhbGlkYXRpb24gPSBuZXcgQ29uZmlybVZhbGlkYXRpb24ocGFzc3dvcmRGaWVsZCwgY29uZmlybVBhc3N3b3JkRmllbGQpO1xuICAgICAgICAgICAgY29uZmlybVZhbGlkYXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgICAgICAvLyBMb2FkIHJlY2FwdGNoYVxuICAgICAgICBsb2FkUmVjYXB0Y2hhKGZpZWxkcyk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRmllbGRWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIHZhbGlkYXRvci5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmllbGQudmFsaWRpdHkudmFsaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gKChfYSA9IGZvcm1EYXRhLmdldCgnZW1haWwnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gKChfYiA9IGZvcm1EYXRhLmdldCgnZmlyc3RfbmFtZScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9ICgoX2MgPSBmb3JtRGF0YS5nZXQoJ2xhc3RfbmFtZScpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9ICgoX2QgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgZ3JlY2FwdGNoYSA9IHdpbmRvdy5ncmVjYXB0Y2hhO1xuICAgICAgICAgICAgZ3JlY2FwdGNoYS5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ3JlY2FwdGNoYS5leGVjdXRlKHNpdGVrZXksIHsgYWN0aW9uOiAnQWpheFJlZ2lzdGVyJyB9KS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgJ2FjdGlvbic6ICdhamF4cmVnaXN0ZXInLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ3JlY2FwdGNoYVRva2VuJzogdG9rZW4sXG4gICAgICAgICAgICAgICAgICAgICAgICAnZW1haWwnOiBlbWFpbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICdwYXNzd29yZCc6IHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgICAgICAgICAgJ2ZpcnN0X25hbWUnOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAnbGFzdF9uYW1lJzogbGFzdE5hbWVcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHVuZGVmaW5lZCwgZXZlbnQsIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIGlzIHdyb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgY3RhQnV0dG9uID0ge1xuICAgICAgICAgICAgdGV4dDogJ015IGFjY291bnQnLFxuICAgICAgICAgICAgaHJlZjogJy9teS1hY2NvdW50LydcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3QocmVzcG9uc2UuZGF0YSwgVG9hc3RUeXBlLnN1Y2Nlc3MsIGN0YUJ1dHRvbiwgMjAwMDApO1xuICAgICAgICB0b2FzdC5pbml0aWFsaXplKCk7XG4gICAgICAgIGNvbnN0IHBhbmVsID0gdGhpcy5mb3JtLmNsb3Nlc3QoJ1tkYXRhLXBhbmVsLW5hbWVdJyk7XG4gICAgICAgIGlmIChwYW5lbCkge1xuICAgICAgICAgICAgcGFuZWwuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RvZ2dsZScpKTtcbiAgICAgICAgfVxuICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5hZGQoJ2xvZ2dlZC1pbicpO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6ICdzaWduLXVwJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ0FqYXhSZWdpc3RlcidcbiAgICAgICAgfTtcbiAgICAgICAgRGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCByZWdpc3RlckZvcm0gPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcjYWpheC1yZWdpc3Rlci1mb3JtJyk7XG4gICAgICAgIGlmIChyZWdpc3RlckZvcm0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhamF4UmVnaXN0ZXIgPSBuZXcgQWpheFJlZ2lzdGVyKHJlZ2lzdGVyRm9ybSk7XG4gICAgICAgIGFqYXhSZWdpc3Rlci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybVZhbGlkYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkLCBjb25maXJtRmllbGQpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZCA9IGNvbmZpcm1GaWVsZDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkXG4gICAgICAgICAgICB8fCAhdGhpcy5jb25maXJtRmllbGQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBmaWVsZHMnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudHMgPSBbJ2NoYW5nZScsICdpbnB1dCddO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHNbaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkLnZhbHVlICE9PSB0aGlzLmNvbmZpcm1GaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1ZhbHVlIGlzIG5vdCBlcXVhbCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fY29va2llLWJhci5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBnZXRDb29raWVWYWx1ZSwgc2V0Q29va2llVmFsdWUgfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuYWNjZXB0QnV0dG9uID0gbnVsbDtcbiAgICAgICAgdGhpcy5yZWplY3RCdXR0b24gPSBudWxsO1xuICAgICAgICB0aGlzLnRlbXBsYXRlRWxlbWVudCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNjb29raWUtYmFyLXRlbXBsYXRlJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGlmICh0aGlzLnRlbXBsYXRlRWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRDb29raWVWYWx1ZShDb29raWVCYXIuY29va2llTmFtZSkpIHtcbiAgICAgICAgICAgIHRoaXMudGVtcGxhdGVFbGVtZW50LnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IHRoaXMuZ2V0RWxlbWVudCgpO1xuICAgICAgICB0aGlzLmFjY2VwdEJ1dHRvbiA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwiY29va2llcy1hY2NlcHRcIl0nKTtcbiAgICAgICAgdGhpcy5yZWplY3RCdXR0b24gPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImNvb2tpZXMtcmVqZWN0XCJdJyk7XG4gICAgICAgIChfYSA9IHRoaXMuYWNjZXB0QnV0dG9uKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmFjY2VwdENvb2tpZXMuYmluZCh0aGlzKSk7XG4gICAgICAgIChfYiA9IHRoaXMucmVqZWN0QnV0dG9uKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLnJlamVjdENvb2tpZXMuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGdldEVsZW1lbnQoKSB7XG4gICAgICAgIGNvbnN0IGNsb25lID0gdGhpcy50ZW1wbGF0ZUVsZW1lbnQuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICBjb25zdCBjb250ZW50ID0gY2xvbmUuY29udGVudDtcbiAgICAgICAgdGhpcy50ZW1wbGF0ZUVsZW1lbnQucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJjb29raWUtYmFyXCJdJyk7XG4gICAgfVxuICAgIGFjY2VwdENvb2tpZXMoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgQ29va2llQmFyLnNldEFjY2VwdENvb2tpZSgpO1xuICAgICAgICAoX2EgPSB0aGlzLmVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbiAgICB9XG4gICAgcmVqZWN0Q29va2llcygpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBDb29raWVCYXIuc2V0UmVqZWN0Q29va2llKCk7XG4gICAgICAgIChfYSA9IHRoaXMuZWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0QWNjZXB0Q29va2llKCkge1xuICAgICAgICBzZXRDb29raWVWYWx1ZShDb29raWVCYXIuY29va2llTmFtZSwgJ3RydWUnLCB7XG4gICAgICAgICAgICBcIm1heC1hZ2VcIjogMzE1MzYwMDBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRSZWplY3RDb29raWUoKSB7XG4gICAgICAgIHNldENvb2tpZVZhbHVlKENvb2tpZUJhci5jb29raWVOYW1lLCAnZmFsc2UnLCB7XG4gICAgICAgICAgICBcIm1heC1hZ2VcIjogMzE1MzYwMDBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBjb29raWVCYXIgPSBuZXcgQ29va2llQmFyKHNlbGVjdG9yKTtcbiAgICAgICAgY29va2llQmFyLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG5Db29raWVCYXIuY29va2llTmFtZSA9ICdhcHByb3ZlZF9jb29raWVzJztcbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2N1cnRhaW4ucGNzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VydGFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZm9sZEJ1dHRvbiwgb25seU9uTW9iaWxlID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5mb2xkQnV0dG9uID0gZm9sZEJ1dHRvbjtcbiAgICAgICAgdGhpcy5vbmx5T25Nb2JpbGUgPSBvbmx5T25Nb2JpbGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdEhlaWdodCA9IChnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCkubWF4SGVpZ2h0ICE9PSB1bmRlZmluZWQgJiYgZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLm1heEhlaWdodCAhPT0gJ25vbmUnKSA/IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5tYXhIZWlnaHQgOiAnMHB4JztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vbmx5T25Nb2JpbGUgJiYgd2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmRlZmF1bHRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHt0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IGAke3RoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmZvbGRCdXR0b24uZGF0YXNldC5yZWFkTGVzcyB8fCAhdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZE1vcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9PT0gdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZE1vcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uaW5uZXJUZXh0ID0gdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZExlc3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRcbiAgICAgICAgICAgIHx8ICF0aGlzLmZvbGRCdXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWN1cnRhaW4tdG9nZ2xlXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvZ2dsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSB0b2dnbGVzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jdXJ0YWluLWNvbnRlbnQ9XCIke3RvZ2dsZS5kYXRhc2V0LmN1cnRhaW5Ub2dnbGV9XCJdYCk7XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9ubHlPbk1vYmlsZSA9IChjb250ZW50LmRhdGFzZXQub25seU9uTW9iaWxlICYmIGNvbnRlbnQuZGF0YXNldC5vbmx5T25Nb2JpbGUgPT09ICd0cnVlJykgPyB0cnVlIDogZmFsc2U7XG4gICAgICAgICAgICBjb25zdCBjdXJ0YWluID0gbmV3IEN1cnRhaW4oY29udGVudCwgdG9nZ2xlLCBvbmx5T25Nb2JpbGUpO1xuICAgICAgICAgICAgY3VydGFpbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbC9yZXF1ZXN0c1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1haWxWYWxpZGF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmVtYWlsSW5wdXQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmVtYWlsSW5wdXQuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IGJsdXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYmx1clRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGJsdXJUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsdXJUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQmx1ckV2ZW50KCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQmx1ckV2ZW50KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5lbWFpbElucHV0LnZhbHVlO1xuICAgICAgICBjb25zdCBzZWN1cml0eSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ3dvb2NvbW1lcmNlLWVtYWlsLWNoZWNrLW5vbmNlJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4ZW1haWxjaGVjaycsXG4gICAgICAgICAgICAnZW1haWwnOiB2YWx1ZSxcbiAgICAgICAgICAgICdzZWN1cml0eSc6IHNlY3VyaXR5LFxuICAgICAgICB9O1xuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MoKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXhpc3RpbmdNZXNzYWdlcygpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUoZXJyb3IpIHtcbiAgICAgICAgdGhpcy5zZXRWYWxpZGF0aW9uTWVzc2FnZShlcnJvci5tZXNzYWdlKTtcbiAgICB9XG4gICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UobWVzc2FnZSkge1xuICAgICAgICBjb25zdCBmb3JtUm93ID0gdGhpcy5lbWFpbElucHV0LnBhcmVudEVsZW1lbnQ7XG4gICAgICAgIGNvbnN0IGZvcm1Sb3dQYXJlbnQgPSBmb3JtUm93ID09PSBudWxsIHx8IGZvcm1Sb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1Sb3cucGFyZW50RWxlbWVudDtcbiAgICAgICAgaWYgKGZvcm1Sb3cgPT09IG51bGwgfHwgIWZvcm1Sb3dQYXJlbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnJlbW92ZUV4aXN0aW5nTWVzc2FnZXMoZm9ybVJvd1BhcmVudCk7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTmFtZSA9ICdhbGVydCBhbGVydC0td2FybmluZyBpbmxpbmUtZm9ybS1lcnJvcic7XG4gICAgICAgIHZhbGlkYXRpb25FbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICAgICAgZm9ybVJvd1BhcmVudC5pbnNlcnRCZWZvcmUodmFsaWRhdGlvbkVsZW1lbnQsIGZvcm1Sb3cpO1xuICAgIH1cbiAgICByZW1vdmVFeGlzdGluZ01lc3NhZ2VzKHNlbGVjdG9yKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBzZWxlY3RvciB8fCAoKF9hID0gdGhpcy5lbWFpbElucHV0LnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXJlbnRFbGVtZW50KTtcbiAgICAgICAgaWYgKCFncmFuZHBhcmVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV4aXN0aW5nVmFsaWRhdGlvbnMgPSBBcnJheS5mcm9tKGdyYW5kcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGVydC0td2FybmluZycpKTtcbiAgICAgICAgZXhpc3RpbmdWYWxpZGF0aW9ucy5mb3JFYWNoKCh2KSA9PiB7IHYucmVtb3ZlKCk7IH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW1haWxJbnB1dFxuICAgICAgICAgICAgfHwgIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJFbWFpbElucHV0ID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignI3JlZ19lbWFpbCcpO1xuICAgICAgICBpZiAocmVnaXN0ZXJFbWFpbElucHV0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW1haWxWYWxpZGF0aW9uID0gbmV3IEVtYWlsVmFsaWRhdGlvbihyZWdpc3RlckVtYWlsSW5wdXQpO1xuICAgICAgICBlbWFpbFZhbGlkYXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbW1vbi9Db21wb25lbnRcIjtcbmltcG9ydCB7IFRvYXN0VHlwZSB9IGZyb20gXCIuLi9lbnVtcy9Ub2FzdFR5cGVcIjtcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gXCIuLi91dGlsL3JlcXVlc3RzXCI7XG5pbXBvcnQgeyBGaWVsZFZhbGlkYXRpb24gfSBmcm9tIFwiLi9GaWVsZFZhbGlkYXRpb25cIjtcbmltcG9ydCBUb2FzdCBmcm9tIFwiLi9Ub2FzdFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ290UGFzc3dvcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGFuY2hvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvciA9IGFuY2hvcjtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvci5jbG9zZXN0KCdmb3JtJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnBhc3N3b3JkRm9yZ2V0QW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgndXNlcm5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgLy8gY29uc3Qgc2VjdXJpdHk6IHN0cmluZyA9IGZvcm1EYXRhLmdldCgnZm9yZ290c2VjdXJpdHknKT8udG9TdHJpbmcoKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsRmllbGQgPSB0aGlzLmZvcm0udXNlcm5hbWU7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbGlkYXRpb24gPSBuZXcgRmllbGRWYWxpZGF0aW9uKGVtYWlsRmllbGQpO1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIGVtYWlsRmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZhbGlkYXRlJykpO1xuICAgICAgICAgICAgaWYgKCF1c2VybmFtZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlcm5hbWUgbm90IHNldCcpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheGZvcmdvdHBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICAndXNlcl9sb2dpbic6IHVzZXJuYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0KHJlc3BvbnNlLmRhdGEsIFRvYXN0VHlwZS5zdWNjZXNzKTtcbiAgICAgICAgdG9hc3QuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICBjb25zdCB0b2FzdCA9IG5ldyBUb2FzdChyZXNwb25zZS5kYXRhLCBUb2FzdFR5cGUud2FybmluZyk7XG4gICAgICAgIHRvYXN0LmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkRm9yZ2V0QW5jaG9yXG4gICAgICAgICAgICB8fCAhdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBwYXNzd29yZEZvcmdldExpbmtzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdhW2RhdGEtcm9sZT1cInBhc3N3b3JkLWZvcmdldFwiXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhc3N3b3JkRm9yZ2V0TGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gcGFzc3dvcmRGb3JnZXRMaW5rc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBmb3Jnb3RQYXNzd29yZCA9IG5ldyBGb3Jnb3RQYXNzd29yZChsaW5rKTtcbiAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbW1vbi9Db21wb25lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlclNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBkb2N1bWVudENsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoZXZlbnRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5IZWFkZXIgPSAoZXZlbnRUYXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fc2VhcmNoJykgIT09IG51bGwpID8gdHJ1ZSA6IGZhbHNlO1xuICAgICAgICAgICAgaWYgKHdpdGhpbkhlYWRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zdCBzZWFyY2hJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VhcmNoLWZpZWxkJyk7XG4gICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoSW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBoZWFkZXJTZWFyY2ggPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gnKTtcbiAgICAgICAgaWYgKGhlYWRlclNlYXJjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEhlYWRlclNlYXJjaChoZWFkZXJTZWFyY2gpO1xuICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9faW5mb1BvcHVwLnBjc3MnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm9Qb3B1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZXZlbnQgPSAnbW91c2VvdmVyJykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmNvbnRlbnQgfHwgJyc7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50LCB0aGlzLnNob3dUaXBweS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc2hvd1RpcHB5KGUpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBsZXQgaW5zdGFuY2UgPSB3aW5kb3cudGlwcHkodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICB0aGVtZTogJ2xpZ2h0JyxcbiAgICAgICAgICAgIGFsbG93SFRNTDogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgc2hvd09uQ3JlYXRlOiB0cnVlLFxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBvbkhpZGRlbjogKGkpID0+IHtcbiAgICAgICAgICAgICAgICBpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgICBpbnN0YW5jZS5oaWRlV2l0aEludGVyYWN0aXZpdHkoZSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50XG4gICAgICAgICAgICB8fCAhdGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCB0aXBweUVsZW1lbnRzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwidGlwcHlcIl0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aXBweUVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgdGlwcHlFbGVtZW50ID0gdGlwcHlFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICBpZiAoIXRpcHB5RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5mb1BvcHVwID0gbmV3IEluZm9Qb3B1cCh0aXBweUVsZW1lbnQsICdtb3VzZW92ZXInKTtcbiAgICAgICAgICAgIGluZm9Qb3B1cC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5TG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKCk7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgICAgICAgICB0aGlzLm9uSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudHNbaV07XG4gICAgICAgICAgICB0aGlzLmxhenlsb2FkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoT2JzZXJ2ZXJDbGFzcyA9IEludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzI1MHB4IDBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbGF6eUltYWdlT2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJDbGFzcygoZW50cmllcywgbGF6eUltYWdlT2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChsYXp5KSA9PiB7IHRoaXMubGF6eWxvYWQobGF6eSk7IH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXp5bG9hZChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChsYXp5SW1hZ2UpID0+IHsgbGF6eUltYWdlT2JzZXJ2ZXIub2JzZXJ2ZShsYXp5SW1hZ2UpOyB9KTtcbiAgICB9XG4gICAgbGF6eWxvYWQoZWwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsO1xuICAgICAgICB0aGlzLm1hbmFnZUNzc0NsYXNzZXMoZWwpO1xuICAgICAgICBpZiAod2luZG93LkhUTUxQaWN0dXJlRWxlbWVudCAmJiB0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICAgICAgaWYgKGltYWdlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VDc3NDbGFzc2VzKGltYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2FkaW5nU3Bpbm5lciA9IHRoaXMuZWxlbWVudC5jbG9zZXN0KCcubG9hZGluZy1zcGlubmVyJyk7XG4gICAgICAgIGlmIChsb2FkaW5nU3Bpbm5lcikge1xuICAgICAgICAgICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZy1zcGlubmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNvdXJjZUVsZW1lbnQpXG4gICAgICAgICAgICAmJiBlbGVtZW50LmRhdGFzZXQuc2l6ZXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2l6ZXMgPSBlbGVtZW50LmRhdGFzZXQuc2l6ZXM7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zaXplcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KVxuICAgICAgICAgICAgJiYgZWxlbWVudC5kYXRhc2V0LnNyY3NldCkge1xuICAgICAgICAgICAgZWxlbWVudC5zcmNzZXQgPSBlbGVtZW50LmRhdGFzZXQuc3Jjc2V0O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNvdXJjZUVsZW1lbnQpXG4gICAgICAgICAgICAmJiBlbGVtZW50LmRhdGFzZXQuc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZGF0YXNldC5zcmM7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRFbGVtZW50cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudFxuICAgICAgICAgICAgJiYgKHRoaXMuZWxlbWVudC5kYXRhc2V0LnNyYyB8fCB0aGlzLmVsZW1lbnQuZGF0YXNldC5zcmNzZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMuZWxlbWVudF07XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSBpZiAod2luZG93LkhUTUxQaWN0dXJlRWxlbWVudCAmJiB0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbZGF0YS1zcmNdLCBzb3VyY2VbZGF0YS1zcmNzZXRdJykpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLXNyY10nKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgbWFuYWdlQ3NzQ2xhc3NlcyhlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcbiAgICAgICAgY29uc3QgbGF6eWxvYWRFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGF6eWxvYWRdJykpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhenlsb2FkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBsYXp5bG9hZEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgbmV3IExhenlMb2FkZXIoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gXCIuLi9jb21tb24vRGF0YUxheWVyXCI7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbC9yZXF1ZXN0c1wiO1xuaW1wb3J0IHsgRmllbGRWYWxpZGF0aW9uIH0gZnJvbSBcIi4vRmllbGRWYWxpZGF0aW9uXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzbGV0dGVyU3Vic2NyaWJlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmRhdGFMYXllciA9IERhdGFMYXllcjtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgICAgdGhpcy5lbWFpbEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZW1haWxcIl0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXdzbGV0dGVyIHN1YnNjcmliZSBjb21wb25lbnQgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZpZWxkVmFsaWRhdGlvbih0aGlzLmVtYWlsRmllbGQpO1xuICAgICAgICB2YWxpZGF0b3IuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgnZmlyc3QtbmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBjb21wYW55TmFtZSA9ICgoX2IgPSBmb3JtRGF0YS5nZXQoJ2NvbXBhbnktbmFtZScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9ICgoX2MgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGlmICghZW1haWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ21haWxjaGltcHN1YnNjcmliZScsXG4gICAgICAgICAgICAgICAgJ2VtYWlsJzogZW1haWwsXG4gICAgICAgICAgICAgICAgJ2ZpcnN0TmFtZSc6IGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICAnY29tcGFueU5hbWUnOiBjb21wYW55TmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEZpZWxkVmFsaWRhdGlvbi5yZW1vdmVFcnJvclRleHQodGhpcy5lbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybVxuICAgICAgICAgICAgfHwgIXRoaXMuZW1haWxGaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzcG9uc2UsIGV2ZW50KSB7XG4gICAgICAgIEZpZWxkVmFsaWRhdGlvbi5hcHBlbmRTdWNjZXNzVGV4dCh0aGlzLmVtYWlsRmllbGQsIHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuZW1haWxGaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6ICdHQUV2ZW50JyxcbiAgICAgICAgICAgIGV2ZW50Q2F0ZWdvcnk6ICduZXdzbGV0dGVyJyxcbiAgICAgICAgICAgIGV2ZW50QWN0aW9uOiAnc3Vic2NyaWJlJyxcbiAgICAgICAgICAgIGV2ZW50TGFiZWw6IHRoaXMuZm9ybS5pZCB8fCAnZ2VuZXJpYydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICB9XG4gICAgb25GYWlsdXJlKGVycm9yKSB7XG4gICAgICAgIEZpZWxkVmFsaWRhdGlvbi5hcHBlbmRFcnJvclRleHQodGhpcy5lbWFpbEZpZWxkLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICAvLyAjVE9ETzogU3dpdGNoIHRvIGNvbW1vbiBzZWxlY3RvclxuICAgICAgICBjb25zdCBmb3JtcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnI2Zvb3Rlci1uZXdzbGV0dGVyLWZvcm0sICNob21lcGFnZS1uZXdzbGV0dGVyLWZvcm0sICNhamF4LW5ld3NsZXR0ZXItZm9ybScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZvcm1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGZvcm1zW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IG5ld3NsZXR0ZXJTdWJzY3JpYmUgPSBuZXcgTmV3c2xldHRlclN1YnNjcmliZShmb3JtKTtcbiAgICAgICAgICAgIG5ld3NsZXR0ZXJTdWJzY3JpYmUuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRSZXZlYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5wYXNzd29yZElucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmNyZWF0ZVJldmVhbEJ1dHRvbigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFzc3dvcmRJbnB1dC50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlUmV2ZWFsQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdwYXNzd29yZC1yZXZlYWwtdG9nZ2xlJztcbiAgICAgICAgYnV0dG9uLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBwYXNzd29yZFJvd3MgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXNzd29yZC1yb3cnKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXNzd29yZFJvd3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFJvdyA9IHBhc3N3b3JkUm93c1tpbmRleF07XG4gICAgICAgICAgICBpZiAocGFzc3dvcmRSb3cgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFJldmVhbCA9IG5ldyBQYXNzd29yZFJldmVhbChwYXNzd29yZFJvdyk7XG4gICAgICAgICAgICBwYXNzd29yZFJldmVhbC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldDtcbmltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbW1vbi9Db21wb25lbnRcIjtcbmltcG9ydCBzY3JvbGxUb1RhcmdldCBmcm9tIFwiLi4vdXRpbC9zY3JvbGxUb1RhcmdldFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9Db250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCB0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfU2Nyb2xsVG9Db250ZW50X3RhcmdldC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQsIGVsZW1lbnQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldCwgdGFyZ2V0LCBcImZcIik7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJPZmZzZXQgPSAhX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQsIFwiZlwiKS5kYXRhc2V0LmhlYWRlck9mZnNldDtcbiAgICAgICAgICAgIHNjcm9sbFRvVGFyZ2V0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF90YXJnZXQsIFwiZlwiKSwgMCwgaGVhZGVyT2Zmc2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2Nyb2xsLXRvXScpKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlbGVtZW50LmRhdGFzZXQuc2Nyb2xsVG8gfHwgJyc7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNjcm9sbFRvQ29udGVudChlbGVtZW50LCB0YXJnZXQpO1xuICAgICAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQgPSBuZXcgV2Vha01hcCgpLCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldCA9IG5ldyBXZWFrTWFwKCk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdWJNZW51IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnd3LXNpdGUtaGVhZGVyJyk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgKCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy53dy1zdWItbWVudScpO1xuICAgICAgICAgICAgaWYgKHRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRhcmdldC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQoJ3d3LXN1Ym1lbnUtb3BlbicpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCAoKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnd3LXN1Yi1tZW51Jyk7XG4gICAgICAgICAgICBpZiAodGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGFyZ2V0LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSgnd3ctc3VibWVudS1vcGVuJyk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgdGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ2hpZGRlbicpOyB9LCA0MDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGhvdmVyRWxlbWVudHMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXN1Yi1tZW51XScpKTtcbiAgICAgICAgaG92ZXJFbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBzdWJNZW51ID0gbmV3IFN1Yk1lbnUoZWxlbWVudCk7XG4gICAgICAgICAgICBzdWJNZW51LmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fdG9hc3QucGNzcyc7XG5pbXBvcnQgJ0BsYXZhbmRyZS9idXR0b24vZGlzdC9zcmMvbGF2YW5kcmUtYnV0dG9uJztcbmltcG9ydCB7IExhdmFuZHJlQnV0dG9uIH0gZnJvbSAnQGxhdmFuZHJlL2J1dHRvbi9kaXN0L3NyYy9MYXZhbmRyZUJ1dHRvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgdHlwZSwgY3RhLCB0aW1lb3V0ID0gNTAwMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICBpZiAoY3RhKSB7XG4gICAgICAgICAgICB0aGlzLmN0YUJ1dHRvbiA9IGN0YTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY3JlYXRlKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QtLXZpc2libGUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xuICAgIH1cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0b2FzdC0tdmlzaWJsZScpO1xuICAgIH1cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2FzdF9fY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcbiAgICAgICAgaWNvbi5zcmMgPSBgL3dwLWNvbnRlbnQvdGhlbWVzL2xhdmFuZHJlL3B1YmxpYy9pbWFnZXMvaWNvbnMvJHt0aGlzLnR5cGV9LnN2Z2A7XG4gICAgICAgIGljb24uYWx0ID0gYCR7dGhpcy50eXBlfSBpY29uYDtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCd0b2FzdF9faWNvbicpO1xuICAgICAgICBpY29uLndpZHRoID0gMjQ7XG4gICAgICAgIGljb24uaGVpZ2h0ID0gMjQ7XG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NUUk9ORycpO1xuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3RvYXN0X19tZXNzYWdlJyk7XG4gICAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gdGhpcy5tZXNzYWdlO1xuICAgICAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VpY29uLWNsb3NlJywgJ3RvYXN0X19jbG9zZScpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5yZW1vdmUoKTsgfSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIGlmICh0aGlzLmN0YUJ1dHRvbikge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IExhdmFuZHJlQnV0dG9uKCk7XG4gICAgICAgICAgICBidXR0b24uaHJlZiA9IHRoaXMuY3RhQnV0dG9uLmhyZWY7XG4gICAgICAgICAgICBidXR0b24ucHJpbWFyeSA9IHRydWU7XG4gICAgICAgICAgICBidXR0b24uc2l6ZSA9ICdsYXJnZSc7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gdGhpcy5jdGFCdXR0b24udGV4dDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVxuICAgICAgICAgICAgfHwgIXRoaXMudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgVG9hc3RUeXBlO1xuKGZ1bmN0aW9uIChUb2FzdFR5cGUpIHtcbiAgICBUb2FzdFR5cGVbXCJzdWNjZXNzXCJdID0gXCJzdWNjZXNzXCI7XG4gICAgVG9hc3RUeXBlW1wid2FybmluZ1wiXSA9IFwid2FybmluZ1wiO1xuICAgIFRvYXN0VHlwZVtcImRhbmdlclwiXSA9IFwiZGFuZ2VyXCI7XG59KShUb2FzdFR5cGUgfHwgKFRvYXN0VHlwZSA9IHt9KSk7XG4iLCJpbXBvcnQgeyBnZXRDb29raWVWYWx1ZSwgc2V0Q29va2llVmFsdWUgfSBmcm9tIFwiLi4vdXRpbC9jb29raWVzXCI7XG5pbXBvcnQgUG9wdXAgZnJvbSBcIi4vUG9wdXBcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3NMZXR0ZXJQb3B1cCBleHRlbmRzIFBvcHVwIHtcbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKGdldENvb2tpZVZhbHVlKCduZXdzbGV0dGVyLXBvcHVwLXNlZW4nKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgTmV3c0xldHRlclBvcHVwLm9wZW5Qb3B1cCgnbmV3c2xldHRlci1wb3B1cCcsIG51bGwsIHNlbGVjdG9yKTtcbiAgICAgICAgICAgIHNldENvb2tpZVZhbHVlKCduZXdzbGV0dGVyLXBvcHVwLXNlZW4nLCAndHJ1ZScsIHtcbiAgICAgICAgICAgICAgICBcIm1heC1hZ2VcIjogMzE1MzYwMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAzMDAwKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19wb3B1cC5wY3NzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcIi4uL2NvbW1vbi9FdmVudEVtaXR0ZXJcIjtcbmltcG9ydCBEaWFsb2cgZnJvbSBcIi4vRGlhbG9nXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGF0YUF0dHJpYnV0ZSA9ICdkYXRhLXBvcHVwLW5hbWUnO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAgICAgICBvcGVuOiAncG9wdXAtLW9wZW5lZCcsXG4gICAgICAgICAgICBjbG9zZWQ6ICdwb3B1cC0tY2xvc2VkJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgb3BlblBvcHVwKHBvcHVwSUQsIGVsZW1lbnQgPSBudWxsLCBzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IHBvcHVwID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXAtbmFtZT1cIiR7cG9wdXBJRH1cIl1gKTtcbiAgICAgICAgaWYgKHBvcHVwID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLXRlbXBsYXRlPVwiJHtwb3B1cElEfVwiXWApO1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZWxlbWVudC5ocmVmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IGNsb25lLmNvbnRlbnQ7XG4gICAgICAgICAgICAoX2EgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLW5hbWU9XCIke3BvcHVwSUR9XCJdYCk7XG4gICAgICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdCgndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgcG9wdXApO1xuICAgICAgICAgICAgaWYgKHBvcHVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcG9wdXBJbnN0YW5jZSA9IG5ldyBQb3B1cChwb3B1cCk7XG4gICAgICAgICAgICBwb3B1cEluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBvcHVwLm9wZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZW5FdmVudCA9IG5ldyBDdXN0b21FdmVudCgnb3BlbicpO1xuICAgICAgICAgICAgcG9wdXAuZGlzcGF0Y2hFdmVudChvcGVuRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgICAgICBjb25zdCBwb3B1cExpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wb3B1cF0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3B1cExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBvcHVwTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlQ3JlYXRpb25FdmVudChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwb3B1cElEID0gdGhpcy5kYXRhc2V0LnBvcHVwIHx8IFwiXCI7XG4gICAgICAgIFBvcHVwLm9wZW5Qb3B1cChwb3B1cElELCB0aGlzKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llVmFsdWUobmFtZSkge1xuICAgIGNvbnN0IGNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZVxuICAgICAgICAuc3BsaXQoJzsgJylcbiAgICAgICAgLmZpbmQoKHJvdykgPT4gcm93LnN0YXJ0c1dpdGgobmFtZSkpO1xuICAgIGlmIChjb29raWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvb2tpZS5zcGxpdCgnPScpWzFdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZVZhbHVlKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgY29va2llT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBwYXRoOiAnLycgfSwgb3B0aW9ucyk7XG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfWA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAoY29uc3Qgb3B0aW9uS2V5IGluIGNvb2tpZU9wdGlvbnMpIHtcbiAgICAgICAgdXBkYXRlZENvb2tpZSArPSBgOyAke29wdGlvbktleX1gO1xuICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IGNvb2tpZU9wdGlvbnNbb3B0aW9uS2V5XTtcbiAgICAgICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IGA9JHtvcHRpb25WYWx1ZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2VTdHJpbmdBc0h0bWwoY29udGVudCwgc2VsZWN0b3IgPSAndGVtcGxhdGUnKSB7XG4gICAgY29uc3QgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IHBhcnNlZCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ3RleHQvaHRtbCcpO1xuICAgIHJldHVybiBwYXJzZWQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgfHwgcGFyc2VkLmJvZHk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWJzb2x1dGVIZWlnaHQoZWwpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgY29uc3QgbWFyZ2luID0gcGFyc2VGbG9hdChzdHlsZXNbJ21hcmdpblRvcCddKSArXG4gICAgICAgIHBhcnNlRmxvYXQoc3R5bGVzWydtYXJnaW5Cb3R0b20nXSk7XG4gICAgcmV0dXJuIE1hdGguY2VpbChlbC5vZmZzZXRIZWlnaHQgKyBtYXJnaW4pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRMaW5rQ2xhc3MoKSB7XG4gICAgY29uc3QgcGF0aE5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgY29uc3QgZm9ybWF0dGVkUGF0aE5hbWUgPSBzdHJpcFRyYWlsaW5nU2xhc2gocGF0aE5hbWUpO1xuICAgIGNvbnN0IGZ1bGxVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zdCBmb3JtYXR0ZWRVcmwgPSBzdHJpcFRyYWlsaW5nU2xhc2goZnVsbFVybCk7XG4gICAgY29uc3QgYW5jaG9ycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke3BhdGhOYW1lfVwiXSxcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7Zm9ybWF0dGVkUGF0aE5hbWV9XCJdLFxuICAgICAgICBuYXYgYVtocmVmPVwiJHtmdWxsVXJsfVwiXSxcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7Zm9ybWF0dGVkVXJsfVwiXVxuICAgIGApKTtcbiAgICBhbmNob3JzLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICAgICAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1saW5rJyk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHN0cikge1xuICAgIHJldHVybiBzdHIuZW5kc1dpdGgoJy8nKSA/XG4gICAgICAgIHN0ci5zbGljZSgwLCAtMSkgOlxuICAgICAgICBzdHI7XG59XG4iLCJsZXQgbG9hZGVkID0gZmFsc2U7XG5leHBvcnQgY29uc3Qgc2l0ZWtleSA9ICc2TGR2MlJrY0FBQUFBQkNDTDFKUjVEbG1FRVQ0TnlfMkNta1ZhOE52JztcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUmVjYXB0Y2hhKGVsZW1lbnRzKSB7XG4gICAgbG9vcFRocm91Z2hFbGVtZW50cyhlbGVtZW50cywgdHJ1ZSwgKCkgPT4geyBpbnNlcnRSZWNhcHRjaGFTY3JpcHQoZWxlbWVudHMpOyB9KTtcbn1cbmZ1bmN0aW9uIGluc2VydFJlY2FwdGNoYVNjcmlwdChlbGVtZW50cykge1xuICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgIHZhciBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgdmFyIHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuc3JjID0gJ2h0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcz9yZW5kZXI9JyArIHNpdGVrZXk7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9vcFRocm91Z2hFbGVtZW50cyhlbGVtZW50cywgZmFsc2UsICgpID0+IHsgaW5zZXJ0UmVjYXB0Y2hhU2NyaXB0KGVsZW1lbnRzKTsgfSk7XG59XG5mdW5jdGlvbiBsb29wVGhyb3VnaEVsZW1lbnRzKGVsZW1lbnRzLCBhZGRFdmVudCwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFsnZm9jdXMnLCAnY2xpY2snLCAndG91Y2hlbmQnLCAnYmx1cicsICdpbnB1dCcsICdjaGFuZ2UnLCAncHJvcGVydHljaGFuZ2UnXS5mb3JFYWNoKGZ1bmN0aW9uIChldnQpIHtcbiAgICAgICAgICAgIGlmIChhZGRFdmVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGxUb1RhcmdldCh0YXJnZXQsIGRlZmF1bHRPZmZzZXQgPSAwLCBoZWFkZXJPZmZzZXQgPSB0cnVlKSB7XG4gICAgY29uc3QgYm9keVRvcFBvc2l0aW9uID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGJvZHlUb3BQb3NpdGlvbjtcbiAgICBsZXQgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldDtcbiAgICBpZiAoaGVhZGVyT2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IGhlYWRlci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gLSBvZmZzZXQgKyAxO1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogb2Zmc2V0UG9zaXRpb24sXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgIH0pO1xufVxuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIF9DdXJ0YWluRWxlbWVudF9jb250ZW50LCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBfQ3VydGFpbkVsZW1lbnRfb3BlbiwgX0N1cnRhaW5FbGVtZW50X2V4cGFuZCwgX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoO1xuaW1wb3J0IFwiLi4vLi4vY3NzL2NvbXBvbmVudHMvX2FjY29yZGlvbi5wY3NzXCI7XG5pbXBvcnQgeyBnZXRBYnNvbHV0ZUhlaWdodCB9IGZyb20gXCIuLi91dGlsL2RvbVwiO1xuY2xhc3MgQWNjb3JkaW9uRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMuc2V0KHRoaXMsIFtdKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKFwiZGV0YWlsc1wiKSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucywgXCJmXCIpLmZvckVhY2goKGN1cnRhaW4pID0+IHtcbiAgICAgICAgICAgIGN1cnRhaW4uYWRkRXZlbnRMaXN0ZW5lcihcInRvZ2dsZVwiLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJ0YWluLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucykuY2FsbCh0aGlzLCBjdXJ0YWluKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucyA9IG5ldyBXZWFrTWFwKCksIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucyA9IGZ1bmN0aW9uIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucyhjdXJ0YWluKSB7XG4gICAgY29uc3Qgb3RoZXJDdXJ0YWlucyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIFwiZlwiKS5maWx0ZXIoKGMpID0+IGN1cnRhaW4gIT09IGMpO1xuICAgIG90aGVyQ3VydGFpbnMuZm9yRWFjaCgoY3VydGFpbikgPT4ge1xuICAgICAgICBjb25zdCBjdXJ0YWluRWxlbWVudCA9IGN1cnRhaW47XG4gICAgICAgIGN1cnRhaW5FbGVtZW50Lm9wZW4gPSBmYWxzZTtcbiAgICB9KTtcbn07XG5jbGFzcyBDdXJ0YWluRWxlbWVudCBleHRlbmRzIEhUTUxEZXRhaWxzRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeS5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKFwic3VtbWFyeVwiKSk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9jb250ZW50LnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoXCIuY3VydGFpbi1jb250ZW50XCIpKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZy5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLnNldCh0aGlzLCBudWxsKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgXCJmXCIpIHx8IHRoaXMub3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfb3BlbikuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCB0cnVlLCBcImZcIik7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnY2xvc2luZycpO1xuICAgICAgICBjb25zdCBzdGFydEhlaWdodCA9IGAke3RoaXMub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgICAgY29uc3QgZW5kSGVpZ2h0ID0gYCR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgXCJmXCIpLm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKSkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCB0aGlzLmFuaW1hdGUoe1xuICAgICAgICAgICAgaGVpZ2h0OiBbc3RhcnRIZWlnaHQsIGVuZEhlaWdodF0sXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICBlYXNpbmc6IFwiZWFzZS1vdXRcIixcbiAgICAgICAgfSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikub25maW5pc2ggPSAoKSA9PiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gpLmNhbGwodGhpcywgZmFsc2UpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5vbmNhbmNlbCA9ICgpID0+IHsgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBmYWxzZSwgXCJmXCIpOyB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NpbmcnKTsgfTtcbiAgICB9XG59XG5fQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9jb250ZW50ID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZyA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24gPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0N1cnRhaW5FbGVtZW50X29wZW4gPSBmdW5jdGlvbiBfQ3VydGFpbkVsZW1lbnRfb3BlbigpIHtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X2V4cGFuZCkuY2FsbCh0aGlzKSk7XG59LCBfQ3VydGFpbkVsZW1lbnRfZXhwYW5kID0gZnVuY3Rpb24gX0N1cnRhaW5FbGVtZW50X2V4cGFuZCgpIHtcbiAgICBjb25zdCBzdGFydEhlaWdodCA9IGAke3RoaXMub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICBjb25zdCBlbmRIZWlnaHQgPSBgJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBcImZcIikub2Zmc2V0SGVpZ2h0ICsgZ2V0QWJzb2x1dGVIZWlnaHQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCwgXCJmXCIpKX1weGA7XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLmNhbmNlbCgpO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIHRoaXMuYW5pbWF0ZSh7XG4gICAgICAgIGhlaWdodDogW3N0YXJ0SGVpZ2h0LCBlbmRIZWlnaHRdLFxuICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgZWFzaW5nOiBcImVhc2Utb3V0XCIsXG4gICAgfSksIFwiZlwiKTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5vbmZpbmlzaCA9ICgpID0+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCkuY2FsbCh0aGlzLCB0cnVlKTtcbn0sIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCA9IGZ1bmN0aW9uIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaChvcGVuKSB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIG51bGwsIFwiZlwiKTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIGZhbHNlLCBcImZcIik7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJyk7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd0b2dnbGUnKSk7XG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKFwiYWNjb3JkaW9uLWVsZW1lbnRcIiwgQWNjb3JkaW9uRWxlbWVudCk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoXCJjdXJ0YWluLWVsZW1lbnRcIiwgQ3VydGFpbkVsZW1lbnQsIHsgZXh0ZW5kczogJ2RldGFpbHMnIH0pO1xuIiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICA8c3R5bGU+XG4gICAgOnJvb3Qge1xuICAgICAgICAtLXdoaXRlOiAjRkZGRkZGO1xuICAgICAgICAtLWpldDogIzJCMkIyQjtcbiAgICAgICAgLS1vbGQtYnVyZ3VuZHk6ICMzRDJCMzA7XG4gICAgICAgIC0tc3ViZHVlZDogI2JhYmZjMztcbiAgICAgICAgLS1mb250LWZhbWlseTogJ051bml0bycsIHNhbnMtc2VyaWY7XG5cbiAgICAgICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQtaG92ZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG5cbiAgICAgICAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgICAgICAtLWJ1dHRvbi1ib3JkZXItaG92ZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG5cbiAgICAgICAgLS1idXR0b24tdGV4dC1jb2xvcjogdmFyKC0tb2xkLWJ1cmd1bmR5KTtcbiAgICAgICAgLS1idXR0b24tdGV4dC1ob3Zlci1jb2xvcjogdmFyKC0td2hpdGUpO1xuXG4gICAgICAgIC0tYnV0dG9uLWZvbnQtc2l6ZTogY2FsYygxM3JlbSAvIDE2KTtcbiAgICB9XG5cbiAgICBbaXM9XCJsYXZhbmRyZS1idXR0b25cIl1bcHJpbWFyeV0ge1xuICAgICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cbiAgICAgICAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgICAgICAtLWJ1dHRvbi1ib3JkZXItaG92ZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG5cbiAgICAgICAgLS1idXR0b24tdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAtLWJ1dHRvbi10ZXh0LWhvdmVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtvdXRsaW5lXSB7XG4gICAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtzaXplPVwic21hbGxcIl0ge1xuICAgICAgICBtaW4taGVpZ2h0OiAxLjc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAuM3JlbSAuNzVyZW07XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW3NpemU9XCJsYXJnZVwiXSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMuNzVyZW07XG4gICAgICAgIG1pbi13aWR0aDogMy43NXJlbTtcbiAgICAgICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjI1cmVtO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtmdWxsLXdpZHRoXSB7XG4gICAgICAgIHdpZHRoOiAxMDAlO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXSB7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgei1pbmRleDogMDtcblxuICAgICAgICBkaXNwbGF5OiBpbmxpbmUtZmxleDtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDIuMjVyZW07XG4gICAgICAgIG1pbi13aWR0aDogMi4yNXJlbTtcbiAgICAgICAgbWFyZ2luOiAwIGF1dG87XG4gICAgICAgIHBhZGRpbmc6IC41cmVtIDEuNXJlbTtcblxuICAgICAgICBiYWNrZ3JvdW5kOiB2YXIoLS1idXR0b24tYmFja2dyb3VuZC1jb2xvcik7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkIHZhcigtLWJ1dHRvbi1ib3JkZXItY29sb3IpO1xuICAgICAgICBib3JkZXItcmFkaXVzOiAwO1xuICAgICAgICBvdXRsaW5lOiAwO1xuXG4gICAgICAgIGNvbG9yOiB2YXIoLS1idXR0b24tdGV4dC1jb2xvcik7XG4gICAgICAgIGZvbnQtZmFtaWx5OiAtLWZvbnQtZmFtaWx5O1xuICAgICAgICBmb250LXdlaWdodDogMTAwO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGZvbnQtc2l6ZTogdmFyKC0tYnV0dG9uLWZvbnQtc2l6ZSk7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxO1xuICAgICAgICB0ZXh0LXRyYW5zZm9ybTogaW5pdGlhbDtcbiAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuXG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgdHJhbnNpdGlvbjogYWxsIC40cyBlYXNlO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXTpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQtY29sb3I6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB2YXIoLS1idXR0b24tYm9yZGVyLWhvdmVyLWNvbG9yKTtcbiAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LWhvdmVyLWNvbG9yKTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgIH1cbiAgPC9zdHlsZT5cbmA7XG5leHBvcnQgY2xhc3MgTGF2YW5kcmVCdXR0b24gZXh0ZW5kcyBIVE1MQnV0dG9uRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5ocmVmID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICB9O1xuICAgIH1cbiAgICBnZXQgaHJlZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJyk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKHRlbXBsYXRlLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICAgICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbi8vIyBzb3VyY2VNYXBwaW5nVVJMPUxhdmFuZHJlQnV0dG9uLmpzLm1hcCIsImltcG9ydCB7IExhdmFuZHJlQnV0dG9uIH0gZnJvbSAnLi9MYXZhbmRyZUJ1dHRvbi5qcyc7XG53aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsYXZhbmRyZS1idXR0b24nLCBMYXZhbmRyZUJ1dHRvbiwgeyBleHRlbmRzOiAnYnV0dG9uJyB9KTtcbi8vIyBzb3VyY2VNYXBwaW5nVVJMPWxhdmFuZHJlLWJ1dHRvbi5qcy5tYXAiXSwic291cmNlUm9vdCI6IiJ9