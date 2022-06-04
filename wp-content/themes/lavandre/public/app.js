"use strict";
(self["webpackChunklavandre"] = self["webpackChunklavandre"] || []).push([["app"],{

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

/***/ "./assets/js/app.ts":
/*!**************************!*\
  !*** ./assets/js/app.ts ***!
  \**************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ App; }
/* harmony export */ });
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/custom-elements */ "./node_modules/@ungap/custom-elements/index.js");
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ungap_custom_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_app_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/app.pcss */ "./assets/css/app.pcss");
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/EventEmitter */ "./assets/js/common/EventEmitter.ts");
/* harmony import */ var _components_AjaxLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/AjaxLogin */ "./assets/js/components/AjaxLogin.ts");
/* harmony import */ var _components_AjaxRegister__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AjaxRegister */ "./assets/js/components/AjaxRegister.ts");
/* harmony import */ var _components_CookieBar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/CookieBar */ "./assets/js/components/CookieBar.ts");
/* harmony import */ var _components_CopyCoupon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CopyCoupon */ "./assets/js/components/CopyCoupon.ts");
/* harmony import */ var _components_Curtain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/Curtain */ "./assets/js/components/Curtain.ts");
/* harmony import */ var _components_EmailValidation__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/EmailValidation */ "./assets/js/components/EmailValidation.ts");
/* harmony import */ var _components_FieldValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/FieldValidation */ "./assets/js/components/FieldValidation.ts");
/* harmony import */ var _components_ForgotPassword__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/ForgotPassword */ "./assets/js/components/ForgotPassword.ts");
/* harmony import */ var _components_ForgotPasswordToggle__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ForgotPasswordToggle */ "./assets/js/components/ForgotPasswordToggle.ts");
/* harmony import */ var _components_HeaderSearch__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/HeaderSearch */ "./assets/js/components/HeaderSearch.ts");
/* harmony import */ var _components_InfoPopup__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/InfoPopup */ "./assets/js/components/InfoPopup.ts");
/* harmony import */ var _components_LazyLoader__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/LazyLoader */ "./assets/js/components/LazyLoader.ts");
/* harmony import */ var _components_NewsletterSubscribe__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/NewsletterSubscribe */ "./assets/js/components/NewsletterSubscribe.ts");
/* harmony import */ var _components_PasswordReveal__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/PasswordReveal */ "./assets/js/components/PasswordReveal.ts");
/* harmony import */ var _components_RedeemPointsForCoupon__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/RedeemPointsForCoupon */ "./assets/js/components/RedeemPointsForCoupon.ts");
/* harmony import */ var _components_ScrollToContent__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/ScrollToContent */ "./assets/js/components/ScrollToContent.ts");
/* harmony import */ var _components_VideoMediaResolver__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/VideoMediaResolver */ "./assets/js/components/VideoMediaResolver.ts");
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");
/* harmony import */ var _ui_LanguagePopup__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/LanguagePopup */ "./assets/js/ui/LanguagePopup.ts");
/* harmony import */ var _ui_SidePanel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/SidePanel */ "./assets/js/ui/SidePanel.ts");
/* harmony import */ var _util_links__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./util/links */ "./assets/js/util/links.ts");
/* harmony import */ var _web_components_AccordionElement__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./web-components/AccordionElement */ "./assets/js/web-components/AccordionElement.ts");
/* harmony import */ var _web_components_BirthdayForm__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./web-components/BirthdayForm */ "./assets/js/web-components/BirthdayForm.ts");
/* harmony import */ var _web_components_button_LavandreButton__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./web-components/button/LavandreButton */ "./assets/js/web-components/button/LavandreButton.ts");
/* harmony import */ var _web_components_CarouselElement__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./web-components/CarouselElement */ "./assets/js/web-components/CarouselElement.ts");
/* harmony import */ var _web_components_LanguageSwitcher__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./web-components/LanguageSwitcher */ "./assets/js/web-components/LanguageSwitcher.ts");
/* harmony import */ var _web_components_LavandreSelect__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./web-components/LavandreSelect */ "./assets/js/web-components/LavandreSelect.ts");
/* harmony import */ var _web_components_LavandreToggle__WEBPACK_IMPORTED_MODULE_30__ = __webpack_require__(/*! ./web-components/LavandreToggle */ "./assets/js/web-components/LavandreToggle.ts");
/* harmony import */ var _web_components_LazyBackground__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./web-components/LazyBackground */ "./assets/js/web-components/LazyBackground.ts");
/* harmony import */ var _web_components_SignupBlock__WEBPACK_IMPORTED_MODULE_32__ = __webpack_require__(/*! ./web-components/SignupBlock */ "./assets/js/web-components/SignupBlock.ts");

































class App extends _Module__WEBPACK_IMPORTED_MODULE_20__["default"] {
  constructor() {
    super(...arguments);
    this.eventEmitter = _common_EventEmitter__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.components = [_components_CookieBar__WEBPACK_IMPORTED_MODULE_5__["default"], _ui_SidePanel__WEBPACK_IMPORTED_MODULE_22__["default"], _components_Curtain__WEBPACK_IMPORTED_MODULE_7__["default"], _components_InfoPopup__WEBPACK_IMPORTED_MODULE_13__["default"], _components_PasswordReveal__WEBPACK_IMPORTED_MODULE_16__["default"], _components_EmailValidation__WEBPACK_IMPORTED_MODULE_8__["default"], _components_NewsletterSubscribe__WEBPACK_IMPORTED_MODULE_15__["default"], _components_ForgotPassword__WEBPACK_IMPORTED_MODULE_10__["default"], _components_ForgotPasswordToggle__WEBPACK_IMPORTED_MODULE_11__["default"], _components_AjaxLogin__WEBPACK_IMPORTED_MODULE_3__["default"], _components_AjaxRegister__WEBPACK_IMPORTED_MODULE_4__["default"], _components_FieldValidation__WEBPACK_IMPORTED_MODULE_9__["default"], _components_HeaderSearch__WEBPACK_IMPORTED_MODULE_12__["default"], _components_LazyLoader__WEBPACK_IMPORTED_MODULE_14__["default"], _components_ScrollToContent__WEBPACK_IMPORTED_MODULE_18__["default"], _components_VideoMediaResolver__WEBPACK_IMPORTED_MODULE_19__["default"], _components_RedeemPointsForCoupon__WEBPACK_IMPORTED_MODULE_17__["default"], _components_CopyCoupon__WEBPACK_IMPORTED_MODULE_6__["default"], _ui_LanguagePopup__WEBPACK_IMPORTED_MODULE_21__["default"]];
  }

  initialize() {
    super.initialize();
    (0,_util_links__WEBPACK_IMPORTED_MODULE_23__.setCurrentLinkClass)();
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
  footerUspSlider();
})();

function footerUspSlider() {
  setTimeout(() => {
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
  }, 300);
}

if (_web_components_button_LavandreButton__WEBPACK_IMPORTED_MODULE_26__["default"]) {
  window.customElements.define('lavandre-button', _web_components_button_LavandreButton__WEBPACK_IMPORTED_MODULE_26__["default"], {
    extends: 'button'
  });
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

/***/ "./assets/js/components/AjaxLogin.ts":
/*!*******************************************!*\
  !*** ./assets/js/components/AjaxLogin.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AjaxLogin; }
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _common_DataLayer__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/DataLayer */ "./assets/js/common/DataLayer.ts");
/* harmony import */ var _util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/loadRecaptcha */ "./assets/js/util/loadRecaptcha.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../util/validation */ "./assets/js/util/validation.ts");
/* harmony import */ var _FieldValidation__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./FieldValidation */ "./assets/js/components/FieldValidation.ts");






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
      (0,_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_2__.loadRecaptcha)(fields);
    }

    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      const validator = new _FieldValidation__WEBPACK_IMPORTED_MODULE_5__["default"](field);
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


    const {
      grecaptcha
    } = window; // @ts-ignore

    const data = {
      action: 'ajaxlogin',
      recaptchaToken: '',
      username,
      password
    };
    const submitButton = this.form.querySelector('button[type="button"][name="login"]') || undefined; // @ts-ignore

    if (!window.Cypress) {
      grecaptcha.ready(() => {
        grecaptcha.execute(_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_2__.sitekey, {
          action: 'AjaxLogin'
        }).then(token => {
          data.recaptchaToken = token;
          const submitButton = this.form.querySelector('button[type="button"][name="login"]') || undefined;
          (0,_util_requests__WEBPACK_IMPORTED_MODULE_3__.sendAjaxRequest)(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this), event, submitButton);
        });
      });
    } else {
      (0,_util_requests__WEBPACK_IMPORTED_MODULE_3__.sendAjaxRequest)(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this), event, submitButton);
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

    const data = {
      event: 'login',
      method: 'AjaxLogin'
    };
    _common_DataLayer__WEBPACK_IMPORTED_MODULE_1__["default"].push(data);
    const href = this.form.dataset.redirectUrl || '/my-account/';
    window.location.href = href;
  }

  onFailure(res) {
    const response = JSON.parse(res);
    const message = response.data || 'This combination of email and password is not known to us. Please try again or request a new password.';
    (0,_util_validation__WEBPACK_IMPORTED_MODULE_4__.setValidationMessage)(message, this.form);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ AjaxRegister; }
/* harmony export */ });
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
      (0,_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_2__.loadRecaptcha)(fields);
    }

    for (let index = 0; index < fields.length; index++) {
      const field = fields[index];
      const validator = new _FieldValidation__WEBPACK_IMPORTED_MODULE_6__["default"](field);
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
        return false;
      }

      const formData = new FormData(this.form);
      const email = ((_a = formData.get('email')) === null || _a === void 0 ? void 0 : _a.toString()) || '';
      const firstName = ((_b = formData.get('first_name')) === null || _b === void 0 ? void 0 : _b.toString()) || '';
      const lastName = ((_c = formData.get('last_name')) === null || _c === void 0 ? void 0 : _c.toString()) || '';
      const password = ((_d = formData.get('password')) === null || _d === void 0 ? void 0 : _d.toString()) || '';

      if (!email || !password) {
        return false;
      } // @ts-ignore


      const {
        grecaptcha
      } = window;
      const data = {
        action: 'ajaxregister',
        recaptchaToken: '',
        email,
        password,
        first_name: firstName,
        last_name: lastName
      };
      const submitButton = this.form.querySelector('button[type="submit"]') || undefined; // @ts-ignore

      if (!window.Cypress) {
        grecaptcha.ready(() => {
          grecaptcha.execute(_util_loadRecaptcha__WEBPACK_IMPORTED_MODULE_2__.sitekey, {
            action: 'AjaxRegister'
          }).then(token => {
            data.recaptchaToken = token;
            (0,_util_requests__WEBPACK_IMPORTED_MODULE_3__.sendAjaxRequest)(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), undefined, event, submitButton);
          });
        });
      } else {
        (0,_util_requests__WEBPACK_IMPORTED_MODULE_3__.sendAjaxRequest)(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), undefined, event, submitButton);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ConfirmValidation; }
/* harmony export */ });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CookieBar; }
/* harmony export */ });
/* harmony import */ var _css_components_cookie_bar_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_cookie-bar.pcss */ "./assets/css/components/_cookie-bar.pcss");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/cookies */ "./assets/js/util/cookies.ts");
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

var _CookieBar_instances, _CookieBar_element, _CookieBar_templateElement, _CookieBar_acceptButton, _CookieBar_getElement, _CookieBar_acceptCookies;




class CookieBar extends _common_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(selector = document) {
    super();

    _CookieBar_instances.add(this);

    _CookieBar_element.set(this, null);

    _CookieBar_templateElement.set(this, void 0);

    _CookieBar_acceptButton.set(this, null);

    __classPrivateFieldSet(this, _CookieBar_templateElement, selector.querySelector('#cookie-bar-template'), "f");
  }

  initialize() {
    var _a;

    if (__classPrivateFieldGet(this, _CookieBar_templateElement, "f") === null) {
      return;
    }

    if ((0,_util_cookies__WEBPACK_IMPORTED_MODULE_2__.getCookieValue)(CookieBar.cookieName)) {
      __classPrivateFieldGet(this, _CookieBar_templateElement, "f").remove();

      return;
    }

    __classPrivateFieldSet(this, _CookieBar_element, __classPrivateFieldGet(this, _CookieBar_instances, "m", _CookieBar_getElement).call(this), "f");

    __classPrivateFieldSet(this, _CookieBar_acceptButton, __classPrivateFieldGet(this, _CookieBar_element, "f").querySelector('[data-role="cookies-accept"]'), "f");

    (_a = __classPrivateFieldGet(this, _CookieBar_acceptButton, "f")) === null || _a === void 0 ? void 0 : _a.addEventListener('click', __classPrivateFieldGet(this, _CookieBar_instances, "m", _CookieBar_acceptCookies).bind(this));
  }

  static setAcceptCookie() {
    (0,_util_cookies__WEBPACK_IMPORTED_MODULE_2__.setCookieValue)(CookieBar.cookieName, 'true', {
      'max-age': 31536000
    });
  }

  static onInit(selector = document) {
    const cookieBar = new CookieBar(selector);
    cookieBar.initialize();
  }

}
_CookieBar_element = new WeakMap(), _CookieBar_templateElement = new WeakMap(), _CookieBar_acceptButton = new WeakMap(), _CookieBar_instances = new WeakSet(), _CookieBar_getElement = function _CookieBar_getElement() {
  const clone = __classPrivateFieldGet(this, _CookieBar_templateElement, "f").cloneNode(true);

  const {
    content
  } = clone;

  __classPrivateFieldGet(this, _CookieBar_templateElement, "f").parentElement.appendChild(content);

  return document.querySelector('[data-role="cookie-bar"]');
}, _CookieBar_acceptCookies = function _CookieBar_acceptCookies() {
  var _a;

  CookieBar.setAcceptCookie();
  (_a = __classPrivateFieldGet(this, _CookieBar_element, "f")) === null || _a === void 0 ? void 0 : _a.remove();
};
CookieBar.cookieName = 'approved_cookies';

/***/ }),

/***/ "./assets/js/components/CopyCoupon.ts":
/*!********************************************!*\
  !*** ./assets/js/components/CopyCoupon.ts ***!
  \********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CopyCoupon; }
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
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

var _CopyCoupon_button;


class CopyCoupon extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(button) {
    super();

    _CopyCoupon_button.set(this, void 0);

    __classPrivateFieldSet(this, _CopyCoupon_button, button, "f");
  }

  initialize() {
    if (!this.isValid()) {
      return;
    }

    this.setEventListeners();
  }

  setEventListeners() {
    __classPrivateFieldGet(this, _CopyCoupon_button, "f").addEventListener('click', event => {
      this.onClick(event);
    });
  }

  onClick(event) {
    event.preventDefault();

    const code = __classPrivateFieldGet(this, _CopyCoupon_button, "f").dataset.code;

    const text = __classPrivateFieldGet(this, _CopyCoupon_button, "f").dataset.text;

    const copiedText = __classPrivateFieldGet(this, _CopyCoupon_button, "f").dataset.copiedText;

    if (!code || !text || !copiedText) {
      return false;
    }

    navigator.clipboard.writeText(code);
    __classPrivateFieldGet(this, _CopyCoupon_button, "f").innerText = copiedText;
    setTimeout(() => {
      __classPrivateFieldGet(this, _CopyCoupon_button, "f").innerText = text;
    }, 3000);
    return false;
  }

  isValid() {
    if (!__classPrivateFieldGet(this, _CopyCoupon_button, "f")) {
      return false;
    }

    return true;
  }

  onSuccess(res, event) {
    const response = res;
  }

  onFailure(res) {
    const response = JSON.parse(res);
  }

  static onInit(selector = document) {
    const copyButtons = Array.from(selector.querySelectorAll('[data-role="copy-coupon"]'));

    if (copyButtons.length === 0) {
      return;
    }

    copyButtons.forEach(button => {
      const copyCoupon = new CopyCoupon(button);
      copyCoupon.initialize();
    });
  }

}
_CopyCoupon_button = new WeakMap();

/***/ }),

/***/ "./assets/js/components/Curtain.ts":
/*!*****************************************!*\
  !*** ./assets/js/components/Curtain.ts ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Curtain; }
/* harmony export */ });
/* harmony import */ var _css_components_curtain_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_curtain.pcss */ "./assets/css/components/_curtain.pcss");
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _Curtain_instances, _Curtain_transitionListener, _Curtain_handleTransition;



class Curtain extends _common_Component__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor(element, foldButton, onlyOnMobile = false) {
    super();

    _Curtain_instances.add(this);

    _Curtain_transitionListener.set(this, () => {
      __classPrivateFieldGet(this, _Curtain_instances, "m", _Curtain_handleTransition).call(this);
    });

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
    this.element.removeEventListener('transitionend', __classPrivateFieldGet(this, _Curtain_transitionListener, "f"));
    this.element.addEventListener('transitionend', __classPrivateFieldGet(this, _Curtain_transitionListener, "f"));
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

      const onlyOnMobile = !!(content.dataset.onlyOnMobile && content.dataset.onlyOnMobile === 'true');
      const curtain = new Curtain(content, toggle, onlyOnMobile);
      curtain.initialize();
    }
  }

}
_Curtain_transitionListener = new WeakMap(), _Curtain_instances = new WeakSet(), _Curtain_handleTransition = function _Curtain_handleTransition() {
  if (this.element.classList.contains('active')) {
    this.element.style.maxHeight = 'none';
    return;
  }

  this.element.style.removeProperty('maxHeight');
};

/***/ }),

/***/ "./assets/js/components/EmailValidation.ts":
/*!*************************************************!*\
  !*** ./assets/js/components/EmailValidation.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ EmailValidation; }
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/validation */ "./assets/js/util/validation.ts");



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
    const {
      value
    } = this.emailInput;
    const security = ((_a = formData.get('woocommerce-email-check-nonce')) === null || _a === void 0 ? void 0 : _a.toString()) || '';

    if (!value) {
      return;
    }

    const data = {
      action: 'ajaxemailcheck',
      email: value,
      security
    };
    (0,_util_requests__WEBPACK_IMPORTED_MODULE_1__.sendAjaxRequest)(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this));
  }

  onSuccess() {
    (0,_util_validation__WEBPACK_IMPORTED_MODULE_2__.removeExistingValidationMessages)(this.emailInput);
  }

  onFailure(error) {
    (0,_util_validation__WEBPACK_IMPORTED_MODULE_2__.setValidationMessage)(error.message, this.emailInput);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ForgotPassword; }
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/validation */ "./assets/js/util/validation.ts");
/* harmony import */ var _FieldValidation__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./FieldValidation */ "./assets/js/components/FieldValidation.ts");




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
      const fieldValidation = new _FieldValidation__WEBPACK_IMPORTED_MODULE_3__["default"](emailField);
      fieldValidation.initialize();
      emailField.dispatchEvent(new Event('validate'));

      if (!username) {
        throw new Error('Username not set');
      }

      const data = {
        action: 'ajaxforgotpassword',
        user_login: username
      };
      (0,_util_requests__WEBPACK_IMPORTED_MODULE_1__.sendAjaxRequest)(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this));
    });
  }

  onSuccess(res) {
    const response = res;
    (0,_util_validation__WEBPACK_IMPORTED_MODULE_2__.setValidationMessage)(response.data, this.form);
  }

  onFailure(res) {
    const response = JSON.parse(res);
    (0,_util_validation__WEBPACK_IMPORTED_MODULE_2__.setValidationMessage)(response.data, this.form);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ForgotPasswordToggle; }
/* harmony export */ });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HeaderSearch; }
/* harmony export */ });
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

      const withinHeader = eventTarget.closest('.header__search') !== null;

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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ InfoPopup; }
/* harmony export */ });
/* harmony import */ var _css_components_infoPopup_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_infoPopup.pcss */ "./assets/css/components/_infoPopup.pcss");
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
    const instance = window.tippy(this.element, {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LazyLoader; }
/* harmony export */ });
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
    }

    if (window.HTMLPictureElement && this.element instanceof HTMLPictureElement) {
      return Array.from(this.element.querySelectorAll('img[data-src], source[data-srcset]'));
    }

    return Array.from(this.element.querySelectorAll('img[data-src]'));
  }

  manageCssClasses(element) {
    element.classList.add('loaded');
    element.classList.remove('loading');
  }

  static onInit() {
    super.onInit();
    const lazyloadElements = Array.from(document.querySelectorAll('[data-lazyload]'));

    for (let i = 0; i < lazyloadElements.length; i++) {
      const element = lazyloadElements[i]; // eslint-disable-next-line no-new

      new LazyLoader(element);
    }
  }

}

/***/ }),

/***/ "./assets/js/components/NewsletterSubscribe.ts":
/*!*****************************************************!*\
  !*** ./assets/js/components/NewsletterSubscribe.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ NewsletterSubscribe; }
/* harmony export */ });
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
    const validator = new _FieldValidation__WEBPACK_IMPORTED_MODULE_3__["default"](this.emailField);
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
        email,
        firstName,
        companyName
      };
      _FieldValidation__WEBPACK_IMPORTED_MODULE_3__["default"].removeErrorText(this.emailField);
      (0,_util_requests__WEBPACK_IMPORTED_MODULE_2__.sendAjaxRequest)(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this));
    });
  }

  isValid() {
    if (!this.form || !this.emailField) {
      return false;
    }

    return true;
  }

  onSuccess(response, event) {
    _FieldValidation__WEBPACK_IMPORTED_MODULE_3__["default"].appendSuccessText(this.emailField, response.data.toString());
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
    _FieldValidation__WEBPACK_IMPORTED_MODULE_3__["default"].appendErrorText(this.emailField, error.message);
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ PasswordReveal; }
/* harmony export */ });
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

/***/ "./assets/js/components/RedeemPointsForCoupon.ts":
/*!*******************************************************!*\
  !*** ./assets/js/components/RedeemPointsForCoupon.ts ***!
  \*******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RedeemPointsForCoupon; }
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/endpoints */ "./assets/js/util/endpoints.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
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

var _RedeemPointsForCoupon_button;
/* eslint-disable no-console */





class RedeemPointsForCoupon extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(button) {
    super();

    _RedeemPointsForCoupon_button.set(this, void 0);

    __classPrivateFieldSet(this, _RedeemPointsForCoupon_button, button, "f");
  }

  initialize() {
    if (!this.isValid()) {
      return;
    }

    this.setEventListeners();
  }

  setEventListeners() {
    __classPrivateFieldGet(this, _RedeemPointsForCoupon_button, "f").addEventListener('click', event => {
      this.onSubmit(event);
    });
  }

  onSubmit(event) {
    event.preventDefault();

    const id = __classPrivateFieldGet(this, _RedeemPointsForCoupon_button, "f").dataset.id;

    if (!id) {
      return false;
    }

    const data = {
      action: 'ajaxredeemcoupon',
      id: id
    };
    (0,_util_requests__WEBPACK_IMPORTED_MODULE_2__.sendAjaxRequest)(data, _util_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].ajax, null, this.onSuccess.bind(this), this.onFailure.bind(this), event, __classPrivateFieldGet(this, _RedeemPointsForCoupon_button, "f"));
    return false;
  }

  isValid() {
    if (!__classPrivateFieldGet(this, _RedeemPointsForCoupon_button, "f")) {
      return false;
    }

    return true;
  }

  onSuccess(res, event) {
    const response = res;
  }

  onFailure(res) {
    const response = JSON.parse(res);
  }

  static onInit(selector = document) {
    const redeemButtons = Array.from(selector.querySelectorAll('[data-role="redeem-coupon"]'));

    if (redeemButtons.length === 0) {
      return;
    }

    redeemButtons.forEach(button => {
      const redeemPointsForCoupon = new RedeemPointsForCoupon(button);
      redeemPointsForCoupon.initialize();
    });
  }

}
_RedeemPointsForCoupon_button = new WeakMap();

/***/ }),

/***/ "./assets/js/components/ScrollToContent.ts":
/*!*************************************************!*\
  !*** ./assets/js/components/ScrollToContent.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ScrollToContent; }
/* harmony export */ });
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
      (0,_util_scrollToTarget__WEBPACK_IMPORTED_MODULE_1__["default"])(__classPrivateFieldGet(this, _ScrollToContent_target, "f"), 0, headerOffset);
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

/***/ "./assets/js/components/VideoMediaResolver.ts":
/*!****************************************************!*\
  !*** ./assets/js/components/VideoMediaResolver.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ VideoMediaResolver; }
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _polyfills_matchMedia__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../polyfills/matchMedia */ "./assets/js/polyfills/matchMedia.ts");
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

var _VideoMediaResolver_instances, _VideoMediaResolver_element, _VideoMediaResolver_sources, _VideoMediaResolver_timeout, _VideoMediaResolver_handleResize, _VideoMediaResolver_showSource;



class VideoMediaResolver extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element) {
    super();

    _VideoMediaResolver_instances.add(this);

    _VideoMediaResolver_element.set(this, void 0);

    _VideoMediaResolver_sources.set(this, void 0);

    _VideoMediaResolver_timeout.set(this, null);

    __classPrivateFieldSet(this, _VideoMediaResolver_element, element, "f");

    __classPrivateFieldSet(this, _VideoMediaResolver_sources, Array.from(__classPrivateFieldGet(this, _VideoMediaResolver_element, "f").querySelectorAll('source')), "f");
  }

  initialize() {
    __classPrivateFieldGet(this, _VideoMediaResolver_instances, "m", _VideoMediaResolver_handleResize).call(this);

    const mq = window.matchMedia('(max-width: 767px)');
    const mq2 = window.matchMedia('(orientation: portrait)');
    (0,_polyfills_matchMedia__WEBPACK_IMPORTED_MODULE_1__.matchMediaAddEventListener)(mq, event => {
      __classPrivateFieldGet(this, _VideoMediaResolver_instances, "m", _VideoMediaResolver_handleResize).call(this);
    }, false);
    (0,_polyfills_matchMedia__WEBPACK_IMPORTED_MODULE_1__.matchMediaAddEventListener)(mq2, event => {
      __classPrivateFieldGet(this, _VideoMediaResolver_instances, "m", _VideoMediaResolver_handleResize).call(this);
    }, false);
  }

  static onInit(selector = document) {
    const elements = Array.from(selector.querySelectorAll('video[data-resolve]'));
    elements.forEach(element => {
      const instance = new VideoMediaResolver(element);
      instance.initialize();
    });
  }

}
_VideoMediaResolver_element = new WeakMap(), _VideoMediaResolver_sources = new WeakMap(), _VideoMediaResolver_timeout = new WeakMap(), _VideoMediaResolver_instances = new WeakSet(), _VideoMediaResolver_handleResize = function _VideoMediaResolver_handleResize() {
  __classPrivateFieldGet(this, _VideoMediaResolver_sources, "f").forEach(source => {
    const orientation = source.dataset.orientation || '';
    const maxWidth = Number(source.dataset.maxWidth) || 0;
    const currentOrientation = window.matchMedia('(orientation: portrait)').matches ? 'portrait' : 'landscape';
    const currentWidth = window.innerWidth;

    if (currentOrientation !== orientation) {
      return;
    }

    if (maxWidth && currentWidth >= maxWidth) {
      return;
    }

    __classPrivateFieldGet(this, _VideoMediaResolver_instances, "m", _VideoMediaResolver_showSource).call(this, source);
  });
}, _VideoMediaResolver_showSource = function _VideoMediaResolver_showSource(source) {
  const dataSrc = source.dataset.src;

  if (!dataSrc) {
    return;
  }

  __classPrivateFieldGet(this, _VideoMediaResolver_element, "f").src = dataSrc;
};

/***/ }),

/***/ "./assets/js/polyfills/matchMedia.ts":
/*!*******************************************!*\
  !*** ./assets/js/polyfills/matchMedia.ts ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "matchMediaAddEventListener": function() { return /* binding */ matchMediaAddEventListener; },
/* harmony export */   "matchMediaRemoveEventListener": function() { return /* binding */ matchMediaRemoveEventListener; }
/* harmony export */ });
function matchMediaAddEventListener(mq, callback, eventBubbling = false) {
  try {
    mq.addEventListener('change', callback, eventBubbling);
  } catch (e) {
    mq.addListener(() => callback);
  }
}
function matchMediaRemoveEventListener(mq, callback) {
  try {
    mq.removeEventListener('change', callback);
  } catch (e) {
    mq.removeListener(() => callback);
  }
}

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

/***/ "./assets/js/ui/LanguagePopup.ts":
/*!***************************************!*\
  !*** ./assets/js/ui/LanguagePopup.ts ***!
  \***************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LanguagePopup; }
/* harmony export */ });
/* harmony import */ var _util_cookies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/cookies */ "./assets/js/util/cookies.ts");
/* harmony import */ var _Popup__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Popup */ "./assets/js/ui/Popup.ts");


class LanguagePopup extends _Popup__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static onInit(selector = document) {
    var _a;

    if (selector !== document) {
      return;
    }

    if ((0,_util_cookies__WEBPACK_IMPORTED_MODULE_0__.getCookieValue)('language-popup-seen')) {
      return;
    }

    const path = window.location.pathname;

    if (path === '/nl/' || path === '/fr/' || path === '/de/') {
      return;
    }

    const preferredLanguage = (_a = window.navigator.language) !== null && _a !== void 0 ? _a : 'en';
    const language = preferredLanguage.substring(0, 2);

    if (language === 'en') {
      return;
    }

    setTimeout(() => {
      var _a;

      const popup = LanguagePopup.openPopup('language-popup', null, selector);
      (0,_util_cookies__WEBPACK_IMPORTED_MODULE_0__.setCookieValue)('language-popup-seen', 'true', {
        'max-age': 31536000
      });

      if (popup === null) {
        return;
      }

      const domainDropdown = popup.querySelector('#domain-dropdown');
      const stayDomainButton = (_a = popup === null || popup === void 0 ? void 0 : popup.querySelector('#stayDomain')) !== null && _a !== void 0 ? _a : null;
      const otherDomainButtons = Array.from(popup === null || popup === void 0 ? void 0 : popup.querySelectorAll('.otherDomains'));
      const submitDomainButton = popup === null || popup === void 0 ? void 0 : popup.querySelector('#submit-domain');
      stayDomainButton === null || stayDomainButton === void 0 ? void 0 : stayDomainButton.addEventListener('click', () => {
        popup === null || popup === void 0 ? void 0 : popup.dispatchEvent(new CustomEvent('toggle'));
      });
      otherDomainButtons.forEach(otherDomainButton => {
        otherDomainButton === null || otherDomainButton === void 0 ? void 0 : otherDomainButton.addEventListener('click', () => {
          const containers = Array.from(popup === null || popup === void 0 ? void 0 : popup.querySelectorAll('.language-popup__container'));
          containers.forEach(container => {
            container.toggleAttribute('hidden');
          });
        });
      });
      submitDomainButton === null || submitDomainButton === void 0 ? void 0 : submitDomainButton.addEventListener('click', () => {
        const value = domainDropdown === null || domainDropdown === void 0 ? void 0 : domainDropdown.selectedValue;

        if (!value || !domainDropdown) {
          return;
        }

        const mapping = domainDropdown.dataset.mapping ? JSON.parse(domainDropdown.dataset.mapping) : {};
        const url = new URL(mapping[value]);

        if (!url) {
          return;
        }

        window.location.href = url.href;
      });
    }, 1);
  }

}

/***/ }),

/***/ "./assets/js/ui/Popup.ts":
/*!*******************************!*\
  !*** ./assets/js/ui/Popup.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ Popup; }
/* harmony export */ });
/* harmony import */ var _css_components_popup_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_popup.pcss */ "./assets/css/components/_popup.pcss");
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
          return null;
        }

        return null;
      }

      const clone = template.cloneNode(true);
      const {
        content
      } = clone;
      (_a = template.parentElement) === null || _a === void 0 ? void 0 : _a.appendChild(content);
      popup = document.querySelector(`[data-popup-name="${popupID}"]`);
      _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"].emit('template-instantiated', popup);

      if (popup === null) {
        return null;
      }

      const popupInstance = new Popup(popup);
      popupInstance.initialize();
    }

    if (!popup.open) {
      const openEvent = new CustomEvent('open');
      popup.dispatchEvent(openEvent);
    }

    return popup;
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
    const popupID = this.dataset.popup || '';
    Popup.openPopup(popupID, this);
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

/***/ "./assets/js/util/cookies.ts":
/*!***********************************!*\
  !*** ./assets/js/util/cookies.ts ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "getCookieValue": function() { return /* binding */ getCookieValue; },
/* harmony export */   "setCookieValue": function() { return /* binding */ setCookieValue; }
/* harmony export */ });
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

/***/ "./assets/js/util/dateHelper.ts":
/*!**************************************!*\
  !*** ./assets/js/util/dateHelper.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "isDateValid": function() { return /* binding */ isDateValid; },
/* harmony export */   "formatDate": function() { return /* binding */ formatDate; },
/* harmony export */   "formatNumberWithLeadingZero": function() { return /* binding */ formatNumberWithLeadingZero; },
/* harmony export */   "getFullMonthName": function() { return /* binding */ getFullMonthName; }
/* harmony export */ });
function isDateValid(date) {
  return !Number.isNaN(date.getTime());
}
function formatDate(date) {
  const day = formatNumberWithLeadingZero(date.getDate());
  const month = formatNumberWithLeadingZero(date.getMonth() + 1);
  return `${date.getFullYear()}-${month}-${day}`;
}
function formatNumberWithLeadingZero(number) {
  return String(number).padStart(2, '0');
}
function getFullMonthName(month, locale = 'default') {
  return month.toLocaleString(locale, {
    month: 'long'
  });
}

/***/ }),

/***/ "./assets/js/util/dom.ts":
/*!*******************************!*\
  !*** ./assets/js/util/dom.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "parseStringAsHtml": function() { return /* binding */ parseStringAsHtml; },
/* harmony export */   "getAbsoluteHeight": function() { return /* binding */ getAbsoluteHeight; }
/* harmony export */ });
function parseStringAsHtml(content, selector = 'template') {
  const domParser = new DOMParser();
  const parsed = domParser.parseFromString(content, 'text/html');
  return parsed.querySelector(selector) || parsed.body;
}
function getAbsoluteHeight(el) {
  const styles = window.getComputedStyle(el);
  const margin = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  return Math.ceil(el.offsetHeight + margin);
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

/***/ "./assets/js/util/links.ts":
/*!*********************************!*\
  !*** ./assets/js/util/links.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setCurrentLinkClass": function() { return /* binding */ setCurrentLinkClass; },
/* harmony export */   "stripTrailingSlash": function() { return /* binding */ stripTrailingSlash; }
/* harmony export */ });
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "sitekey": function() { return /* binding */ sitekey; },
/* harmony export */   "loadRecaptcha": function() { return /* binding */ loadRecaptcha; }
/* harmony export */ });
let loaded = false;
const sitekey = '6Ldv2RkcAAAAABCCL1JR5DlmEET4Ny_2CmkVa8Nv';
function loadRecaptcha(elements) {
  loopThroughElements(elements, true, () => {
    insertRecaptchaScript(elements);
  });
}

function insertRecaptchaScript(elements) {
  if (!loaded) {
    const head = document.getElementsByTagName('head')[0];
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.src = `https://www.google.com/recaptcha/api.js?render=${sitekey}`;
    head.appendChild(script);
    loaded = true;
  }

  loopThroughElements(elements, false, () => {
    insertRecaptchaScript(elements);
  });
}

function loopThroughElements(elements, addEvent, callback) {
  for (let i = 0; i < elements.length; i++) {
    ['focus', 'click', 'touchend', 'blur', 'input', 'change', 'propertychange'].forEach(evt => {
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
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ scrollToTarget; }
/* harmony export */ });
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

/***/ "./assets/js/util/validation.ts":
/*!**************************************!*\
  !*** ./assets/js/util/validation.ts ***!
  \**************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "setValidationMessage": function() { return /* binding */ setValidationMessage; },
/* harmony export */   "removeExistingValidationMessages": function() { return /* binding */ removeExistingValidationMessages; }
/* harmony export */ });
function setValidationMessage(message, element) {
  var _a;

  const formRow = (_a = element.closest('.form-row')) !== null && _a !== void 0 ? _a : element;
  const formRowParent = formRow === null || formRow === void 0 ? void 0 : formRow.parentElement;

  if (formRow === null || !formRowParent) {
    return;
  }

  removeExistingValidationMessages(element, formRowParent);
  const validationElement = document.createElement('div');
  validationElement.className = 'alert alert--warning inline-form-error';
  validationElement.textContent = message;
  formRowParent.insertBefore(validationElement, formRow);
}
function removeExistingValidationMessages(element, selector) {
  var _a;

  const grandparent = selector || ((_a = element.parentElement) === null || _a === void 0 ? void 0 : _a.parentElement);

  if (!grandparent) {
    return;
  }

  const existingValidations = Array.from(grandparent.querySelectorAll('.alert--warning'));
  existingValidations.forEach(v => {
    v.remove();
  });
}

/***/ }),

/***/ "./assets/js/web-components/AccordionElement.ts":
/*!******************************************************!*\
  !*** ./assets/js/web-components/AccordionElement.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _css_components_accordion_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_accordion.pcss */ "./assets/css/components/_accordion.pcss");
/* harmony import */ var _util_dom__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/dom */ "./assets/js/util/dom.ts");
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

var _CurtainElement_instances, _CurtainElement_summary, _CurtainElement_content, _CurtainElement_isClosing, _CurtainElement_animation, _CurtainElement_handleClick, _CurtainElement_open, _CurtainElement_expand, _CurtainElement_onAnimationFinish, _AccordionElement_instances, _AccordionElement_curtains, _AccordionElement_closeOtherCurtains;




class CurtainElement extends HTMLDetailsElement {
  constructor() {
    super(...arguments);

    _CurtainElement_instances.add(this);

    _CurtainElement_summary.set(this, this.querySelector('summary'));

    _CurtainElement_content.set(this, this.querySelector('.curtain-content'));

    _CurtainElement_isClosing.set(this, false);

    _CurtainElement_animation.set(this, null);

    _CurtainElement_handleClick.set(this, event => {
      // event.stopPropagation();
      // event.stopImmediatePropagation();
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

  connectedCallback() {// this.#summary.addEventListener('click', this.#handleClick, {
    //     capture: true,
    //     passive: false
    // });
  }

  disconnectedCallback() {
    __classPrivateFieldGet(this, _CurtainElement_summary, "f").removeEventListener('click', __classPrivateFieldGet(this, _CurtainElement_handleClick, "f"));
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
      easing: 'ease-out'
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
  const endHeight = `${__classPrivateFieldGet(this, _CurtainElement_summary, "f").offsetHeight + (0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.getAbsoluteHeight)(__classPrivateFieldGet(this, _CurtainElement_content, "f"))}px`;

  if (__classPrivateFieldGet(this, _CurtainElement_animation, "f")) {
    __classPrivateFieldGet(this, _CurtainElement_animation, "f").cancel();
  }

  __classPrivateFieldSet(this, _CurtainElement_animation, this.animate({
    height: [startHeight, endHeight]
  }, {
    duration: 400,
    easing: 'ease-out'
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

class AccordionElement extends HTMLElement {
  constructor() {
    super(...arguments);

    _AccordionElement_instances.add(this);

    _AccordionElement_curtains.set(this, []);
  }

  connectedCallback() {
    __classPrivateFieldSet(this, _AccordionElement_curtains, Array.from(this.querySelectorAll('details')), "f");

    __classPrivateFieldGet(this, _AccordionElement_curtains, "f").forEach(curtain => {
      curtain.addEventListener('toggle', () => {
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

  otherCurtains.forEach(otherCurtain => {
    const curtainElement = otherCurtain;
    curtainElement.open = false;
  });
};
customElements.define('accordion-element', AccordionElement);
customElements.define('curtain-element', CurtainElement, {
  extends: 'details'
});

/***/ }),

/***/ "./assets/js/web-components/BirthdayForm.ts":
/*!**************************************************!*\
  !*** ./assets/js/web-components/BirthdayForm.ts ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _util_dateHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dateHelper */ "./assets/js/util/dateHelper.ts");
/* harmony import */ var _util_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/endpoints */ "./assets/js/util/endpoints.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _BirthdayForm_instances, _BirthdayForm_submitButton, _BirthdayForm_dayField, _BirthdayForm_monthField, _BirthdayForm_getDayValues, _BirthdayForm_getMonthValues, _BirthdayForm_onSubmit, _BirthdayForm_onSuccess, _BirthdayForm_onFailure;





class BirthdayForm extends HTMLFormElement {
  constructor() {
    super(...arguments);

    _BirthdayForm_instances.add(this);

    _BirthdayForm_submitButton.set(this, this.querySelector('[type="submit"]'));

    _BirthdayForm_dayField.set(this, this.querySelector('#birthday-day'));

    _BirthdayForm_monthField.set(this, this.querySelector('#birthday-month'));
  }

  connectedCallback() {
    this.addEventListener('submit', __classPrivateFieldGet(this, _BirthdayForm_instances, "m", _BirthdayForm_onSubmit).bind(this));

    __classPrivateFieldGet(this, _BirthdayForm_submitButton, "f").addEventListener('click', __classPrivateFieldGet(this, _BirthdayForm_instances, "m", _BirthdayForm_onSubmit).bind(this));

    if (__classPrivateFieldGet(this, _BirthdayForm_dayField, "f") === null || __classPrivateFieldGet(this, _BirthdayForm_monthField, "f") === null) {
      return;
    }

    window.setTimeout(() => {
      __classPrivateFieldGet(this, _BirthdayForm_dayField, "f").optionValues = __classPrivateFieldGet(this, _BirthdayForm_instances, "m", _BirthdayForm_getDayValues).call(this);
      __classPrivateFieldGet(this, _BirthdayForm_monthField, "f").optionValues = __classPrivateFieldGet(this, _BirthdayForm_instances, "m", _BirthdayForm_getMonthValues).call(this);
    }, 1);
  }

  disconnectedCallback() {
    this.removeEventListener('submit', __classPrivateFieldGet(this, _BirthdayForm_instances, "m", _BirthdayForm_onSubmit).bind(this));

    __classPrivateFieldGet(this, _BirthdayForm_submitButton, "f").removeEventListener('click', __classPrivateFieldGet(this, _BirthdayForm_instances, "m", _BirthdayForm_onSubmit).bind(this));
  }

}

_BirthdayForm_submitButton = new WeakMap(), _BirthdayForm_dayField = new WeakMap(), _BirthdayForm_monthField = new WeakMap(), _BirthdayForm_instances = new WeakSet(), _BirthdayForm_getDayValues = function _BirthdayForm_getDayValues() {
  const returnValue = {};

  for (let i = 1; i <= 31; i++) {
    const num = (0,_util_dateHelper__WEBPACK_IMPORTED_MODULE_0__.formatNumberWithLeadingZero)(i).toString();
    returnValue[num] = num;
  }

  return returnValue;
}, _BirthdayForm_getMonthValues = function _BirthdayForm_getMonthValues() {
  const returnValue = {};

  for (let i = 1; i <= 12; i++) {
    const num = (0,_util_dateHelper__WEBPACK_IMPORTED_MODULE_0__.formatNumberWithLeadingZero)(i).toString();
    const date = new Date(`2021-${num}-02`);
    const monthName = (0,_util_dateHelper__WEBPACK_IMPORTED_MODULE_0__.getFullMonthName)(date);
    returnValue[i] = monthName;
  }

  return returnValue;
}, _BirthdayForm_onSubmit = function _BirthdayForm_onSubmit(event) {
  event.preventDefault();
  const formData = new FormData(this);
  const day = formData.get('day');
  const month = formData.get('month');
  const year = '1970';

  if (!day || !month) {
    return false;
  }

  const date = new Date(`${year}-${month}-${day}`);
  const data = {
    action: 'ajaxdateofbirth',
    date: (0,_util_dateHelper__WEBPACK_IMPORTED_MODULE_0__.formatDate)(date)
  };
  (0,_util_requests__WEBPACK_IMPORTED_MODULE_2__.sendAjaxRequest)(data, _util_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].ajax, null, __classPrivateFieldGet(this, _BirthdayForm_instances, "m", _BirthdayForm_onSuccess).bind(this), __classPrivateFieldGet(this, _BirthdayForm_instances, "m", _BirthdayForm_onFailure).bind(this), event, __classPrivateFieldGet(this, _BirthdayForm_submitButton, "f"));
  return false;
}, _BirthdayForm_onSuccess = function _BirthdayForm_onSuccess() {
  const block = this.closest('[is="signup-block"]');

  if (!block) {
    return;
  }

  block.completed = true;
}, _BirthdayForm_onFailure = function _BirthdayForm_onFailure() {// stuff
};
customElements.define('birthday-form', BirthdayForm, {
  extends: 'form'
});

/***/ }),

/***/ "./assets/js/web-components/CarouselElement.ts":
/*!*****************************************************!*\
  !*** ./assets/js/web-components/CarouselElement.ts ***!
  \*****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _polyfills_matchMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/matchMedia */ "./assets/js/polyfills/matchMedia.ts");
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

var _CarouselElement_instances, _CarouselElement_items, _CarouselElement_list, _CarouselElement_prevButton, _CarouselElement_nextButton, _CarouselElement_current, _CarouselElement_counter, _CarouselElement_interval, _CarouselElement_setCurrent, _CarouselElement_navigate, _CarouselElement_getTranslateX, _CarouselElement_getItemWidth;



class CarouselElement extends HTMLElement {
  constructor() {
    super(...arguments);

    _CarouselElement_instances.add(this);

    _CarouselElement_items.set(this, []);

    _CarouselElement_list.set(this, null);

    _CarouselElement_prevButton.set(this, null);

    _CarouselElement_nextButton.set(this, null);

    _CarouselElement_current.set(this, 0);

    _CarouselElement_counter.set(this, 3);

    _CarouselElement_interval.set(this, 0);
  }

  get active() {
    return this.hasAttribute('active');
  }

  set active(value) {
    this.toggleAttribute('active', value);
  }

  connectedCallback() {
    __classPrivateFieldSet(this, _CarouselElement_items, Array.from(this.querySelectorAll('[data-item]')), "f");

    __classPrivateFieldSet(this, _CarouselElement_list, this.querySelector('[data-items]'), "f");

    __classPrivateFieldSet(this, _CarouselElement_prevButton, this.querySelector('[data-prev]'), "f");

    __classPrivateFieldSet(this, _CarouselElement_nextButton, this.querySelector('[data-next]'), "f");

    if (!__classPrivateFieldGet(this, _CarouselElement_list, "f")) {
      return;
    }

    __classPrivateFieldGet(this, _CarouselElement_prevButton, "f").addEventListener('click', () => {
      __classPrivateFieldGet(this, _CarouselElement_instances, "m", _CarouselElement_navigate).call(this, -1);
    });

    __classPrivateFieldGet(this, _CarouselElement_nextButton, "f").addEventListener('click', () => {
      __classPrivateFieldGet(this, _CarouselElement_instances, "m", _CarouselElement_navigate).call(this, 1);
    });

    const componentCheck = window.matchMedia('(max-width: 1023px)');

    const setup = () => {
      if (componentCheck.matches === false) {
        this.deinitialize();
        return;
      }

      this.initialize();
    };

    setup();
    (0,_polyfills_matchMedia__WEBPACK_IMPORTED_MODULE_0__.matchMediaAddEventListener)(componentCheck, setup, false);
  }

  deinitialize() {
    var _a;

    this.active = false;
    window.clearInterval(__classPrivateFieldGet(this, _CarouselElement_interval, "f"));
    (_a = __classPrivateFieldGet(this, _CarouselElement_list, "f")) === null || _a === void 0 ? void 0 : _a.style.removeProperty('transform');
  }

  initialize() {
    __classPrivateFieldGet(this, _CarouselElement_instances, "m", _CarouselElement_navigate).call(this, 0);

    const mq = window.matchMedia('(max-width: 479px)');

    __classPrivateFieldGet(this, _CarouselElement_instances, "m", _CarouselElement_setCurrent).call(this, mq);

    (0,_polyfills_matchMedia__WEBPACK_IMPORTED_MODULE_0__.matchMediaAddEventListener)(mq, () => {
      __classPrivateFieldGet(this, _CarouselElement_instances, "m", _CarouselElement_setCurrent).call(this, mq);
    }, false);

    __classPrivateFieldSet(this, _CarouselElement_interval, window.setInterval(() => {
      if (this.matches(':hover') || this.matches(':focus-within')) {
        return;
      }

      __classPrivateFieldGet(this, _CarouselElement_instances, "m", _CarouselElement_navigate).call(this, 1);
    }, 7000), "f");
  }

}

_CarouselElement_items = new WeakMap(), _CarouselElement_list = new WeakMap(), _CarouselElement_prevButton = new WeakMap(), _CarouselElement_nextButton = new WeakMap(), _CarouselElement_current = new WeakMap(), _CarouselElement_counter = new WeakMap(), _CarouselElement_interval = new WeakMap(), _CarouselElement_instances = new WeakSet(), _CarouselElement_setCurrent = function _CarouselElement_setCurrent(mq) {
  const itemsShown = mq.matches ? 1 : 2;

  if (itemsShown < __classPrivateFieldGet(this, _CarouselElement_items, "f").length) {
    this.active = true;
  }

  __classPrivateFieldSet(this, _CarouselElement_counter, __classPrivateFieldGet(this, _CarouselElement_items, "f").length - itemsShown, "f");
}, _CarouselElement_navigate = function _CarouselElement_navigate(increment) {
  if (!__classPrivateFieldGet(this, _CarouselElement_list, "f")) {
    return;
  }

  __classPrivateFieldSet(this, _CarouselElement_current, __classPrivateFieldGet(this, _CarouselElement_current, "f") + increment, "f");

  if (__classPrivateFieldGet(this, _CarouselElement_current, "f") < 0) {
    __classPrivateFieldSet(this, _CarouselElement_current, __classPrivateFieldGet(this, _CarouselElement_counter, "f"), "f");
  }

  if (__classPrivateFieldGet(this, _CarouselElement_current, "f") > __classPrivateFieldGet(this, _CarouselElement_counter, "f")) {
    __classPrivateFieldSet(this, _CarouselElement_current, 0, "f");
  }

  __classPrivateFieldGet(this, _CarouselElement_list, "f").style.transform = `translateX(${__classPrivateFieldGet(this, _CarouselElement_instances, "m", _CarouselElement_getTranslateX).call(this, __classPrivateFieldGet(this, _CarouselElement_current, "f"))}px)`;
}, _CarouselElement_getTranslateX = function _CarouselElement_getTranslateX(count) {
  const monthWidth = __classPrivateFieldGet(this, _CarouselElement_instances, "m", _CarouselElement_getItemWidth).call(this);

  return -(monthWidth * count);
}, _CarouselElement_getItemWidth = function _CarouselElement_getItemWidth() {
  const item = __classPrivateFieldGet(this, _CarouselElement_items, "f")[0];

  if (!item) {
    return 0;
  }

  const itemWidth = item.getBoundingClientRect().width;
  const gridGap = parseInt(window.getComputedStyle(__classPrivateFieldGet(this, _CarouselElement_list, "f")).columnGap, 10);
  return itemWidth + gridGap;
};
customElements.define('carousel-element', CarouselElement);

/***/ }),

/***/ "./assets/js/web-components/LanguageSwitcher.ts":
/*!******************************************************!*\
  !*** ./assets/js/web-components/LanguageSwitcher.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LanguageSwitcher; }
/* harmony export */ });
/* harmony import */ var _LavandreSelect__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LavandreSelect */ "./assets/js/web-components/LavandreSelect.ts");
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _LanguageSwitcher_instances, _LanguageSwitcher_getValue, _LanguageSwitcher_onChange;


class LanguageSwitcher extends _LavandreSelect__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    var _a, _b;

    super();

    _LanguageSwitcher_instances.add(this);

    this.classList.add('language-switcher');
    const json = this.dataset.json;

    if (!json) {
      return;
    }

    this.id = 'domain-dropdown-field';
    this.icon = (_b = (_a = document.getElementById('cart')) === null || _a === void 0 ? void 0 : _a.outerHTML) !== null && _b !== void 0 ? _b : '';
    this.optionValues = JSON.parse(json) || [];
  }

  connectedCallback() {
    super.connectedCallback();

    if (this.hasAttribute('data-change')) {
      this.addEventListener('change', __classPrivateFieldGet(this, _LanguageSwitcher_instances, "m", _LanguageSwitcher_onChange).bind(this));
    }
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    this.removeEventListener('change', __classPrivateFieldGet(this, _LanguageSwitcher_instances, "m", _LanguageSwitcher_onChange).bind(this));
  }

  update() {
    super.update();
    const path = window.location.pathname.substring(0, 4);
    let value;

    switch (path) {
      case '/nl/':
        value = __classPrivateFieldGet(this, _LanguageSwitcher_instances, "m", _LanguageSwitcher_getValue).call(this, 'Nederlands');
        break;

      case '/de/':
        value = __classPrivateFieldGet(this, _LanguageSwitcher_instances, "m", _LanguageSwitcher_getValue).call(this, 'Deutschland');
        break;

      case '/fr/':
        value = __classPrivateFieldGet(this, _LanguageSwitcher_instances, "m", _LanguageSwitcher_getValue).call(this, 'France');
        break;

      default:
        value = __classPrivateFieldGet(this, _LanguageSwitcher_instances, "m", _LanguageSwitcher_getValue).call(this, 'International');
        break;
    }

    this.selectedValue = value !== null && value !== void 0 ? value : 'International';
  }

}
_LanguageSwitcher_instances = new WeakSet(), _LanguageSwitcher_getValue = function _LanguageSwitcher_getValue(value) {
  const mapping = this.dataset.mapping ? JSON.parse(this.dataset.mapping) : {};
  return mapping[value] ? value : '';
}, _LanguageSwitcher_onChange = function _LanguageSwitcher_onChange() {
  const value = this.selectedValue;

  if (!value) {
    return;
  }

  const mapping = this.dataset.mapping ? JSON.parse(this.dataset.mapping) : {};
  const url = new URL(mapping[value]);

  if (!url) {
    return;
  }

  window.location.href = url.href;
};
customElements.define('language-switcher', LanguageSwitcher);

/***/ }),

/***/ "./assets/js/web-components/LavandreSelect.ts":
/*!****************************************************!*\
  !*** ./assets/js/web-components/LavandreSelect.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LavandreSelect; }
/* harmony export */ });
/* harmony import */ var _util_dateHelper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../util/dateHelper */ "./assets/js/util/dateHelper.ts");
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

var _LavandreSelect_instances, _LavandreSelect_searchField, _LavandreSelect_searchFieldLabel, _LavandreSelect_dropdownField, _LavandreSelect_optionValues, _LavandreSelect_selectedValue, _LavandreSelect_name, _LavandreSelect_placeholder, _LavandreSelect_icon, _LavandreSelect_id, _LavandreSelect_outsideClickListener, _LavandreSelect_selectOption, _LavandreSelect_filter, _LavandreSelect_showDropdown, _LavandreSelect_hideDropdown;



class LavandreSelect extends HTMLElement {
  constructor(id = '', placeholder = '') {
    super();

    _LavandreSelect_instances.add(this);

    _LavandreSelect_searchField.set(this, void 0);

    _LavandreSelect_searchFieldLabel.set(this, void 0);

    _LavandreSelect_dropdownField.set(this, void 0);

    _LavandreSelect_optionValues.set(this, []);

    _LavandreSelect_selectedValue.set(this, '');

    _LavandreSelect_name.set(this, this.getAttribute('name') || '');

    _LavandreSelect_placeholder.set(this, '');

    _LavandreSelect_icon.set(this, '');

    _LavandreSelect_id.set(this, '');

    _LavandreSelect_outsideClickListener.set(this, event => {
      const target = event.target;

      if (!target.closest) {
        __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_hideDropdown).call(this);

        return;
      }

      const closest = target.closest('.lavandre-select');

      if (!target || closest === null || closest !== this) {
        __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_hideDropdown).call(this);
      }
    });

    this.classList.add('lavandre-select');

    __classPrivateFieldSet(this, _LavandreSelect_searchField, document.createElement('INPUT'), "f");

    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").classList.add('lavandre-select__input');

    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").name = this.name;
    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").autocapitalize = 'off';
    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").autocomplete = 'off';
    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").placeholder = placeholder;
    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").id = id;
    this.appendChild(__classPrivateFieldGet(this, _LavandreSelect_searchField, "f"));

    __classPrivateFieldSet(this, _LavandreSelect_searchFieldLabel, document.createElement('LABEL'), "f");

    __classPrivateFieldGet(this, _LavandreSelect_searchFieldLabel, "f").classList.add('lavandre-select__label');

    __classPrivateFieldGet(this, _LavandreSelect_searchFieldLabel, "f").innerText = placeholder;
    __classPrivateFieldGet(this, _LavandreSelect_searchFieldLabel, "f").htmlFor = id;
    this.appendChild(__classPrivateFieldGet(this, _LavandreSelect_searchFieldLabel, "f"));

    __classPrivateFieldSet(this, _LavandreSelect_dropdownField, document.createElement('UL'), "f");

    __classPrivateFieldGet(this, _LavandreSelect_dropdownField, "f").hidden = true;

    __classPrivateFieldGet(this, _LavandreSelect_dropdownField, "f").classList.add('lavandre-select__dropdown');

    this.appendChild(__classPrivateFieldGet(this, _LavandreSelect_dropdownField, "f"));
  }

  get placeholder() {
    return __classPrivateFieldGet(this, _LavandreSelect_placeholder, "f");
  }

  set placeholder(value) {
    __classPrivateFieldSet(this, _LavandreSelect_placeholder, value, "f");

    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").placeholder = value;
    __classPrivateFieldGet(this, _LavandreSelect_searchFieldLabel, "f").innerText = value;
  }

  get icon() {
    return __classPrivateFieldGet(this, _LavandreSelect_icon, "f");
  }

  set icon(value) {
    __classPrivateFieldSet(this, _LavandreSelect_icon, value, "f");
  }

  get id() {
    return __classPrivateFieldGet(this, _LavandreSelect_id, "f");
  }

  set id(value) {
    __classPrivateFieldSet(this, _LavandreSelect_id, value, "f");

    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").id = value;
    __classPrivateFieldGet(this, _LavandreSelect_searchFieldLabel, "f").htmlFor = value;
  }

  get name() {
    return __classPrivateFieldGet(this, _LavandreSelect_name, "f");
  }

  set name(value) {
    __classPrivateFieldSet(this, _LavandreSelect_name, value, "f");
  }

  get selectedValue() {
    return __classPrivateFieldGet(this, _LavandreSelect_selectedValue, "f");
  }

  set selectedValue(value) {
    __classPrivateFieldSet(this, _LavandreSelect_selectedValue, value, "f");

    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").value = value.replace(/^0+/, '');
  }

  get optionValues() {
    return __classPrivateFieldGet(this, _LavandreSelect_optionValues, "f");
  }

  set optionValues(value) {
    const arr = Object.entries(value).sort(([, a], [, b]) => a - b);

    __classPrivateFieldSet(this, _LavandreSelect_optionValues, arr, "f");

    this.update();
  }

  connectedCallback() {
    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").addEventListener('input', __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_filter).bind(this));

    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").addEventListener('focus', __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_showDropdown).bind(this));
  }

  disconnectedCallback() {
    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").removeEventListener('input', __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_filter).bind(this));

    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").removeEventListener('focus', __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_showDropdown).bind(this));
  }

  update() {
    for (const [key, value] of __classPrivateFieldGet(this, _LavandreSelect_optionValues, "f")) {
      const option = document.createElement('li');
      option.addEventListener('click', __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_selectOption).bind(this));
      option.classList.add('lavandre-select__dropdown__item');

      if (this.icon) {
        option.appendChild((0,_util_dom__WEBPACK_IMPORTED_MODULE_1__.parseStringAsHtml)(this.icon, 'svg'));
      }

      const span = document.createElement('span');
      span.classList.add('lavandre-select__dropdown__item__text');
      span.innerText = value.replace(/^0+/, '');
      option.appendChild(span);
      const value2 = (0,_util_dateHelper__WEBPACK_IMPORTED_MODULE_0__.formatNumberWithLeadingZero)(value).toString();
      option.dataset.value = value2;

      __classPrivateFieldGet(this, _LavandreSelect_dropdownField, "f").appendChild(option);
    }

    const firstOption = this.querySelector('.lavandre-select__dropdown__item');

    if (!firstOption) {
      return;
    }

    firstOption.dispatchEvent(new Event('click'));
  }

}
_LavandreSelect_searchField = new WeakMap(), _LavandreSelect_searchFieldLabel = new WeakMap(), _LavandreSelect_dropdownField = new WeakMap(), _LavandreSelect_optionValues = new WeakMap(), _LavandreSelect_selectedValue = new WeakMap(), _LavandreSelect_name = new WeakMap(), _LavandreSelect_placeholder = new WeakMap(), _LavandreSelect_icon = new WeakMap(), _LavandreSelect_id = new WeakMap(), _LavandreSelect_outsideClickListener = new WeakMap(), _LavandreSelect_instances = new WeakSet(), _LavandreSelect_selectOption = function _LavandreSelect_selectOption(event) {
  const target = event.target;
  const value = target.dataset.value;

  if (value === undefined) {
    return;
  }

  this.selectedValue = value;

  __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_hideDropdown).call(this);

  this.dispatchEvent(new CustomEvent('change', {
    detail: {
      value
    }
  }));
}, _LavandreSelect_filter = function _LavandreSelect_filter() {
  const options = Array.from(this.querySelectorAll('.lavandre-select__dropdown__item'));

  const value = __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").value.toLowerCase();

  if (!value) {
    options.forEach(option => {
      option.hidden = false;
    });
    return;
  }

  options.forEach(option => {
    const text = option.innerText.toLowerCase();

    if (text.indexOf(value) !== -1) {
      option.hidden = false;
    } else {
      option.hidden = true;
    }
  });
}, _LavandreSelect_showDropdown = function _LavandreSelect_showDropdown() {
  __classPrivateFieldGet(this, _LavandreSelect_dropdownField, "f").hidden = false;
  document.addEventListener('click', __classPrivateFieldGet(this, _LavandreSelect_outsideClickListener, "f"));
  this.classList.add('active');
}, _LavandreSelect_hideDropdown = function _LavandreSelect_hideDropdown() {
  __classPrivateFieldGet(this, _LavandreSelect_dropdownField, "f").hidden = true;
  document.removeEventListener('click', __classPrivateFieldGet(this, _LavandreSelect_outsideClickListener, "f"));
  this.classList.remove('active');
};
customElements.define('lavandre-select', LavandreSelect);

/***/ }),

/***/ "./assets/js/web-components/LavandreToggle.ts":
/*!****************************************************!*\
  !*** ./assets/js/web-components/LavandreToggle.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LavandreToggle; }
/* harmony export */ });
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

var _LavandreToggle_instances, _LavandreToggle_elements, _LavandreToggle_toggles, _LavandreToggle_clickHandler;

class LavandreToggle extends HTMLElement {
  constructor() {
    super(...arguments);

    _LavandreToggle_instances.add(this);

    _LavandreToggle_elements.set(this, []);

    _LavandreToggle_toggles.set(this, []);
  }

  connectedCallback() {
    __classPrivateFieldSet(this, _LavandreToggle_elements, Array.from(this.querySelectorAll('[data-name]')), "f");

    __classPrivateFieldSet(this, _LavandreToggle_toggles, Array.from(this.querySelectorAll('[data-toggle]')), "f");

    __classPrivateFieldGet(this, _LavandreToggle_toggles, "f").forEach(toggle => {
      toggle.addEventListener('click', __classPrivateFieldGet(this, _LavandreToggle_instances, "m", _LavandreToggle_clickHandler).bind(this), false);
    });

    this.addEventListener('toggle', __classPrivateFieldGet(this, _LavandreToggle_instances, "m", _LavandreToggle_clickHandler).bind(this), false);
  }

}
_LavandreToggle_elements = new WeakMap(), _LavandreToggle_toggles = new WeakMap(), _LavandreToggle_instances = new WeakSet(), _LavandreToggle_clickHandler = function _LavandreToggle_clickHandler() {
  __classPrivateFieldGet(this, _LavandreToggle_elements, "f").forEach(element => {
    element.toggleAttribute('hidden', !element.hidden);
  });
};
customElements.define('lavandre-toggle', LavandreToggle);

/***/ }),

/***/ "./assets/js/web-components/LazyBackground.ts":
/*!****************************************************!*\
  !*** ./assets/js/web-components/LazyBackground.ts ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LazyBackground; }
/* harmony export */ });
var __classPrivateFieldGet = undefined && undefined.__classPrivateFieldGet || function (receiver, state, kind, f) {
  if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
  if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
  return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};

var _LazyBackground_instances, _LazyBackground_loadHandler;

class LazyBackground extends HTMLElement {
  constructor() {
    super(...arguments);

    _LazyBackground_instances.add(this);
  }

  connectedCallback() {
    __classPrivateFieldGet(this, _LazyBackground_instances, "m", _LazyBackground_loadHandler).call(this);
  }

}
_LazyBackground_instances = new WeakSet(), _LazyBackground_loadHandler = function _LazyBackground_loadHandler() {
  if (!('IntersectionObserver' in window)) {
    this.classList.add('visible');
    return;
  }

  const lazyBackgroundObserver = new IntersectionObserver((entries, observer) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        lazyBackgroundObserver.unobserve(entry.target);
      }
    });
  });
  lazyBackgroundObserver.observe(this);
};
customElements.define('lv-lazy-background', LazyBackground, {
  extends: 'footer'
});

/***/ }),

/***/ "./assets/js/web-components/SignupBlock.ts":
/*!*************************************************!*\
  !*** ./assets/js/web-components/SignupBlock.ts ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SignupBlock; }
/* harmony export */ });
/* harmony import */ var _polyfills_matchMedia__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../polyfills/matchMedia */ "./assets/js/polyfills/matchMedia.ts");
/* harmony import */ var _util_endpoints__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/endpoints */ "./assets/js/util/endpoints.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
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

var _SignupBlock_instances, _SignupBlock_template, _SignupBlock_overlay, _SignupBlock_href, _SignupBlock_points, _SignupBlock_type, _SignupBlock_completed, _SignupBlock_mediaQuery, _SignupBlock_mq, _SignupBlock_isMobile, _SignupBlock_checkIsMobile, _SignupBlock_setTemplate, _SignupBlock_mouseenterHandler, _SignupBlock_mouseLeaveHandler, _SignupBlock_clickHandler, _SignupBlock_setOverlayEventListeners, _SignupBlock_getTemplate;




class SignupBlock extends HTMLLIElement {
  constructor() {
    super(...arguments);

    _SignupBlock_instances.add(this);

    _SignupBlock_template.set(this, null);

    _SignupBlock_overlay.set(this, null);

    _SignupBlock_href.set(this, this.dataset.href || null);

    _SignupBlock_points.set(this, Number(this.dataset.points) || 0);

    _SignupBlock_type.set(this, this.getAttribute('type') || '');

    _SignupBlock_completed.set(this, this.hasAttribute('completed') || false);

    _SignupBlock_mediaQuery.set(this, getComputedStyle(document.documentElement).getPropertyValue('--tablet-landscape'));

    _SignupBlock_mq.set(this, matchMedia(__classPrivateFieldGet(this, _SignupBlock_mediaQuery, "f")));

    _SignupBlock_isMobile.set(this, false);

    _SignupBlock_mouseenterHandler.set(this, () => {
      if (__classPrivateFieldGet(this, _SignupBlock_overlay, "f")) {
        __classPrivateFieldGet(this, _SignupBlock_overlay, "f").hidden = false;
        return;
      }

      __classPrivateFieldGet(this, _SignupBlock_instances, "m", _SignupBlock_setTemplate).call(this);

      __classPrivateFieldGet(this, _SignupBlock_instances, "m", _SignupBlock_setOverlayEventListeners).call(this);
    });

    _SignupBlock_mouseLeaveHandler.set(this, event => {
      var _a;

      if (event) {
        event.stopPropagation();
      }

      (_a = __classPrivateFieldGet(this, _SignupBlock_overlay, "f")) === null || _a === void 0 ? void 0 : _a.toggleAttribute('hidden', true);
    });

    _SignupBlock_clickHandler.set(this, () => {
      if (this.completed) {
        return;
      }

      const data = {
        action: 'ajaxaddloyaltypoints',
        points: String(__classPrivateFieldGet(this, _SignupBlock_points, "f")),
        pool: 'default',
        type: __classPrivateFieldGet(this, _SignupBlock_type, "f")
      };
      (0,_util_requests__WEBPACK_IMPORTED_MODULE_2__.sendAjaxRequest)(data, _util_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].ajax, null, () => {
        this.completed = true;
      });
      window.open(__classPrivateFieldGet(this, _SignupBlock_href, "f"), '_blank');
    });
  }

  get completed() {
    return __classPrivateFieldGet(this, _SignupBlock_completed, "f");
  }

  set completed(value) {
    var _a;

    __classPrivateFieldSet(this, _SignupBlock_completed, value, "f");

    __classPrivateFieldSet(this, _SignupBlock_template, null, "f");

    __classPrivateFieldSet(this, _SignupBlock_overlay, null, "f");

    (_a = this.querySelector('.points-grid__overlay')) === null || _a === void 0 ? void 0 : _a.remove();

    __classPrivateFieldGet(this, _SignupBlock_instances, "m", _SignupBlock_setTemplate).call(this);

    const titles = Array.from(this.querySelectorAll('.points-grid__title-content'));
    titles.forEach(title => {
      title.toggleAttribute('hidden', !title.hidden);
    });
  }

  connectedCallback() {
    __classPrivateFieldGet(this, _SignupBlock_instances, "m", _SignupBlock_checkIsMobile).call(this);

    if (__classPrivateFieldGet(this, _SignupBlock_isMobile, "f")) {
      this.removeEventListener('mouseenter', __classPrivateFieldGet(this, _SignupBlock_mouseenterHandler, "f"));
      this.removeEventListener('mouseleave', __classPrivateFieldGet(this, _SignupBlock_mouseLeaveHandler, "f"));
      this.addEventListener('click', __classPrivateFieldGet(this, _SignupBlock_mouseenterHandler, "f"));
    } else {
      this.addEventListener('mouseenter', __classPrivateFieldGet(this, _SignupBlock_mouseenterHandler, "f"));
      this.addEventListener('mouseleave', __classPrivateFieldGet(this, _SignupBlock_mouseLeaveHandler, "f"));
      this.removeEventListener('click', __classPrivateFieldGet(this, _SignupBlock_mouseenterHandler, "f"));
    }

    (0,_polyfills_matchMedia__WEBPACK_IMPORTED_MODULE_0__.matchMediaAddEventListener)(__classPrivateFieldGet(this, _SignupBlock_mq, "f"), __classPrivateFieldGet(this, _SignupBlock_instances, "m", _SignupBlock_checkIsMobile));
  }

  disconnectedCallback() {
    this.removeEventListener('mouseenter', __classPrivateFieldGet(this, _SignupBlock_mouseenterHandler, "f"));
    this.removeEventListener('mouseleave', __classPrivateFieldGet(this, _SignupBlock_mouseLeaveHandler, "f"));
    this.removeEventListener('click', __classPrivateFieldGet(this, _SignupBlock_mouseenterHandler, "f"));
    (0,_polyfills_matchMedia__WEBPACK_IMPORTED_MODULE_0__.matchMediaRemoveEventListener)(__classPrivateFieldGet(this, _SignupBlock_mq, "f"), __classPrivateFieldGet(this, _SignupBlock_instances, "m", _SignupBlock_checkIsMobile));

    if (__classPrivateFieldGet(this, _SignupBlock_href, "f")) {
      this.removeEventListener('click', __classPrivateFieldGet(this, _SignupBlock_clickHandler, "f"));
    }
  }

}
_SignupBlock_template = new WeakMap(), _SignupBlock_overlay = new WeakMap(), _SignupBlock_href = new WeakMap(), _SignupBlock_points = new WeakMap(), _SignupBlock_type = new WeakMap(), _SignupBlock_completed = new WeakMap(), _SignupBlock_mediaQuery = new WeakMap(), _SignupBlock_mq = new WeakMap(), _SignupBlock_isMobile = new WeakMap(), _SignupBlock_mouseenterHandler = new WeakMap(), _SignupBlock_mouseLeaveHandler = new WeakMap(), _SignupBlock_clickHandler = new WeakMap(), _SignupBlock_instances = new WeakSet(), _SignupBlock_checkIsMobile = function _SignupBlock_checkIsMobile() {
  __classPrivateFieldSet(this, _SignupBlock_isMobile, !__classPrivateFieldGet(this, _SignupBlock_mq, "f").matches, "f");

  return __classPrivateFieldGet(this, _SignupBlock_isMobile, "f");
}, _SignupBlock_setTemplate = function _SignupBlock_setTemplate() {
  var _a;

  if (!__classPrivateFieldGet(this, _SignupBlock_template, "f")) {
    __classPrivateFieldSet(this, _SignupBlock_template, __classPrivateFieldGet(this, _SignupBlock_instances, "m", _SignupBlock_getTemplate).call(this), "f");
  }

  this.appendChild((_a = __classPrivateFieldGet(this, _SignupBlock_template, "f")) === null || _a === void 0 ? void 0 : _a.content.cloneNode(true));

  __classPrivateFieldSet(this, _SignupBlock_overlay, this.querySelector('.points-grid__overlay'), "f");

  const closeOverlayButton = this.querySelector('[data-close]');

  if (!closeOverlayButton) {
    return;
  }

  closeOverlayButton.addEventListener('click', __classPrivateFieldGet(this, _SignupBlock_mouseLeaveHandler, "f").bind(this), false);
}, _SignupBlock_setOverlayEventListeners = function _SignupBlock_setOverlayEventListeners() {
  var _a;

  if (__classPrivateFieldGet(this, _SignupBlock_href, "f")) {
    const button = (_a = __classPrivateFieldGet(this, _SignupBlock_overlay, "f")) === null || _a === void 0 ? void 0 : _a.querySelector('button[is="lavandre-button"]');

    if (!button) {
      return;
    }

    button.addEventListener('click', __classPrivateFieldGet(this, _SignupBlock_clickHandler, "f"));
  }
}, _SignupBlock_getTemplate = function _SignupBlock_getTemplate() {
  const template = document.getElementById('points-grid-overlay');

  if (!document.body.classList.contains('logged-in')) {
    return template;
  }

  if (__classPrivateFieldGet(this, _SignupBlock_completed, "f")) {
    return document.getElementById(`points-grid-overlay--completed--${__classPrivateFieldGet(this, _SignupBlock_type, "f")}`) || document.getElementById('points-grid-overlay--completed');
  }

  const typeTemplate = document.getElementById(`points-grid-overlay--${__classPrivateFieldGet(this, _SignupBlock_type, "f")}`);

  if (typeTemplate) {
    return typeTemplate;
  }

  return template;
};
customElements.define('signup-block', SignupBlock, {
  extends: 'li'
});

/***/ }),

/***/ "./assets/js/web-components/button/LavandreButton.ts":
/*!***********************************************************!*\
  !*** ./assets/js/web-components/button/LavandreButton.ts ***!
  \***********************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ LavandreButton; }
/* harmony export */ });
/* harmony import */ var _style_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./style.pcss */ "./assets/js/web-components/button/style.pcss");
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

var _LavandreButton_isDisabled;


class LavandreButton extends HTMLButtonElement {
  constructor() {
    super();

    _LavandreButton_isDisabled.set(this, this.hasAttribute('aria-disabled'));

    this.clickHandler = event => {
      if (this.href === null) {
        return;
      }

      event.preventDefault();
      window.location.href = this.href;
    };

    this.setAttribute('is', 'lavandre-button');
  }

  get label() {
    return this.innerText;
  }

  set label(value) {
    this.innerText = value;
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

  get link() {
    return this.hasAttribute('link');
  }

  set link(bool) {
    if (!bool) {
      return;
    }

    this.setAttribute('link', bool.toString());
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

  get isDisabled() {
    return __classPrivateFieldGet(this, _LavandreButton_isDisabled, "f");
  }

  set isDisabled(value) {
    __classPrivateFieldSet(this, _LavandreButton_isDisabled, value, "f");

    this.toggleAttribute('aria-disabled', value);
  }

  connectedCallback() {
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
_LavandreButton_isDisabled = new WeakMap();

/***/ }),

/***/ "./assets/css/app.pcss":
/*!*****************************!*\
  !*** ./assets/css/app.pcss ***!
  \*****************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/components/_accordion.pcss":
/*!***********************************************!*\
  !*** ./assets/css/components/_accordion.pcss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/components/_cookie-bar.pcss":
/*!************************************************!*\
  !*** ./assets/css/components/_cookie-bar.pcss ***!
  \************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/components/_curtain.pcss":
/*!*********************************************!*\
  !*** ./assets/css/components/_curtain.pcss ***!
  \*********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/components/_infoPopup.pcss":
/*!***********************************************!*\
  !*** ./assets/css/components/_infoPopup.pcss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/components/_popup.pcss":
/*!*******************************************!*\
  !*** ./assets/css/components/_popup.pcss ***!
  \*******************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/css/components/_sidePanel.pcss":
/*!***********************************************!*\
  !*** ./assets/css/components/_sidePanel.pcss ***!
  \***********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ "./assets/js/web-components/button/style.pcss":
/*!****************************************************!*\
  !*** ./assets/js/web-components/button/style.pcss ***!
  \****************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_dialog-polyfill_dist_dialog-polyfill_esm_js","vendors-node_modules_ungap_custom-elements_index_js","assets_js_cart_ts-assets_js_components_AddCouponCode_ts"], function() { return __webpack_exec__("./assets/js/app.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QVB1SixPQUFPLENBQUNILElBQUQsRUFBTztBQUNkLFFBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDRCxTQUFLbm1CLFlBQUwsQ0FBa0IsU0FBbEIsRUFBNkJtbUIsSUFBSSxDQUFDM2lCLFFBQUwsRUFBN0I7QUFDSDs7QUFDYSxNQUFWK2lCLFVBQVUsR0FBRztBQUNiLFdBQU94ZixzQkFBc0IsQ0FBQyxJQUFELEVBQU84ZSwwQkFBUCxFQUFtQyxHQUFuQyxDQUE3QjtBQUNIOztBQUNhLE1BQVZVLFVBQVUsQ0FBQ3BnQixLQUFELEVBQVE7QUFDbEJHLElBQUFBLHNCQUFzQixDQUFDLElBQUQsRUFBT3VmLDBCQUFQLEVBQW1DMWYsS0FBbkMsRUFBMEMsR0FBMUMsQ0FBdEI7O0FBQ0EsU0FBS29GLGVBQUwsQ0FBcUIsZUFBckIsRUFBc0NwRixLQUF0QztBQUNIOztBQUNENlcsRUFBQUEsaUJBQWlCLEdBQUc7QUFDaEIsUUFBSSxLQUFLdFksSUFBVCxFQUFlO0FBQ1gsV0FBSzlCLGdCQUFMLENBQXNCLE9BQXRCLEVBQStCLEtBQUttakIsWUFBcEM7QUFDSDtBQUNKOztBQUNEOUksRUFBQUEsb0JBQW9CLEdBQUc7QUFDbkIsUUFBSSxLQUFLdlksSUFBVCxFQUFlO0FBQ1gsV0FBS29GLG1CQUFMLENBQXlCLE9BQXpCLEVBQWtDLEtBQUtpYyxZQUF2QztBQUNIO0FBQ0o7O0FBNUZ5RDtBQThGOURGLDBCQUEwQixHQUFHLElBQUloZSxPQUFKLEVBQTdCOzs7Ozs7Ozs7OztBQzNHQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9Nb2R1bGUudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvYXBwLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbW1vbi9EYXRhTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9BamF4TG9naW4udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9BamF4UmVnaXN0ZXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9Db25maXJtVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0Nvb2tpZUJhci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvcHlDb3Vwb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9DdXJ0YWluLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRW1haWxWYWxpZGF0aW9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZFRvZ2dsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0hlYWRlclNlYXJjaC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0luZm9Qb3B1cC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0xhenlMb2FkZXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9OZXdzbGV0dGVyU3Vic2NyaWJlLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUGFzc3dvcmRSZXZlYWwudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9SZWRlZW1Qb2ludHNGb3JDb3Vwb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9TY3JvbGxUb0NvbnRlbnQudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9WaWRlb01lZGlhUmVzb2x2ZXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvcG9seWZpbGxzL21hdGNoTWVkaWEudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdWkvRGlhbG9nLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3VpL0xhbmd1YWdlUG9wdXAudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdWkvUG9wdXAudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdWkvU2lkZVBhbmVsLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvYm9keS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2Nvb2tpZXMudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9kYXRlSGVscGVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvZG9tLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvZW5kcG9pbnRzLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvbGlua3MudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9sb2FkUmVjYXB0Y2hhLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvc2Nyb2xsVG9UYXJnZXQudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9zdHJpbmcudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC92YWxpZGF0aW9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0FjY29yZGlvbkVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvQmlydGhkYXlGb3JtLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0Nhcm91c2VsRWxlbWVudC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy93ZWItY29tcG9uZW50cy9MYW5ndWFnZVN3aXRjaGVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0xhdmFuZHJlU2VsZWN0LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0xhdmFuZHJlVG9nZ2xlLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0xhenlCYWNrZ3JvdW5kLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL1NpZ251cEJsb2NrLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL2J1dHRvbi9MYXZhbmRyZUJ1dHRvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvYXBwLnBjc3MiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX2FjY29yZGlvbi5wY3NzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19jb29raWUtYmFyLnBjc3MiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX2N1cnRhaW4ucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9faW5mb1BvcHVwLnBjc3MiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3BvcHVwLnBjc3MiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3NpZGVQYW5lbC5wY3NzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL2J1dHRvbi9zdHlsZS5wY3NzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0ICcuL2NhcnQnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIub24oJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudHMoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb21wb25lbnQub25Jbml0KHNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICdAdW5nYXAvY3VzdG9tLWVsZW1lbnRzJztcbmltcG9ydCAnLi4vY3NzL2FwcC5wY3NzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmltcG9ydCBBamF4TG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0FqYXhMb2dpbic7XG5pbXBvcnQgQWpheFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9BamF4UmVnaXN0ZXInO1xuaW1wb3J0IENvb2tpZUJhciBmcm9tICcuL2NvbXBvbmVudHMvQ29va2llQmFyJztcbmltcG9ydCBDb3B5Q291cG9uIGZyb20gJy4vY29tcG9uZW50cy9Db3B5Q291cG9uJztcbmltcG9ydCBDdXJ0YWluIGZyb20gJy4vY29tcG9uZW50cy9DdXJ0YWluJztcbmltcG9ydCBFbWFpbFZhbGlkYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL0VtYWlsVmFsaWRhdGlvbic7XG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9GaWVsZFZhbGlkYXRpb24nO1xuaW1wb3J0IEZvcmdvdFBhc3N3b3JkIGZyb20gJy4vY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZCc7XG5pbXBvcnQgRm9yZ290UGFzc3dvcmRUb2dnbGUgZnJvbSAnLi9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkVG9nZ2xlJztcbmltcG9ydCBIZWFkZXJTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlclNlYXJjaCc7XG5pbXBvcnQgSW5mb1BvcHVwIGZyb20gJy4vY29tcG9uZW50cy9JbmZvUG9wdXAnO1xuaW1wb3J0IExhenlMb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL0xhenlMb2FkZXInO1xuaW1wb3J0IE5ld3NsZXR0ZXJTdWJzY3JpYmUgZnJvbSAnLi9jb21wb25lbnRzL05ld3NsZXR0ZXJTdWJzY3JpYmUnO1xuaW1wb3J0IFBhc3N3b3JkUmV2ZWFsIGZyb20gJy4vY29tcG9uZW50cy9QYXNzd29yZFJldmVhbCc7XG5pbXBvcnQgUmVkZWVtUG9pbnRzRm9yQ291cG9uIGZyb20gJy4vY29tcG9uZW50cy9SZWRlZW1Qb2ludHNGb3JDb3Vwb24nO1xuaW1wb3J0IFNjcm9sbFRvQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvU2Nyb2xsVG9Db250ZW50JztcbmltcG9ydCBWaWRlb01lZGlhUmVzb2x2ZXIgZnJvbSAnLi9jb21wb25lbnRzL1ZpZGVvTWVkaWFSZXNvbHZlcic7XG5pbXBvcnQgTW9kdWxlIGZyb20gJy4vTW9kdWxlJztcbmltcG9ydCBMYW5ndWFnZVBvcHVwIGZyb20gJy4vdWkvTGFuZ3VhZ2VQb3B1cCc7XG5pbXBvcnQgU2lkZVBhbmVsIGZyb20gJy4vdWkvU2lkZVBhbmVsJztcbmltcG9ydCB7IHNldEN1cnJlbnRMaW5rQ2xhc3MgfSBmcm9tICcuL3V0aWwvbGlua3MnO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL0FjY29yZGlvbkVsZW1lbnQnO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL0JpcnRoZGF5Rm9ybSc7XG5pbXBvcnQgTGF2YW5kcmVCdXR0b24gZnJvbSAnLi93ZWItY29tcG9uZW50cy9idXR0b24vTGF2YW5kcmVCdXR0b24nO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL0Nhcm91c2VsRWxlbWVudCc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvTGFuZ3VhZ2VTd2l0Y2hlcic7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvTGF2YW5kcmVTZWxlY3QnO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL0xhdmFuZHJlVG9nZ2xlJztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9MYXp5QmFja2dyb3VuZCc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvU2lnbnVwQmxvY2snO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIENvb2tpZUJhcixcbiAgICAgICAgICAgIFNpZGVQYW5lbCxcbiAgICAgICAgICAgIEN1cnRhaW4sXG4gICAgICAgICAgICBJbmZvUG9wdXAsXG4gICAgICAgICAgICBQYXNzd29yZFJldmVhbCxcbiAgICAgICAgICAgIEVtYWlsVmFsaWRhdGlvbixcbiAgICAgICAgICAgIE5ld3NsZXR0ZXJTdWJzY3JpYmUsXG4gICAgICAgICAgICBGb3Jnb3RQYXNzd29yZCxcbiAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkVG9nZ2xlLFxuICAgICAgICAgICAgQWpheExvZ2luLFxuICAgICAgICAgICAgQWpheFJlZ2lzdGVyLFxuICAgICAgICAgICAgRmllbGRWYWxpZGF0aW9uLFxuICAgICAgICAgICAgSGVhZGVyU2VhcmNoLFxuICAgICAgICAgICAgTGF6eUxvYWRlcixcbiAgICAgICAgICAgIFNjcm9sbFRvQ29udGVudCxcbiAgICAgICAgICAgIFZpZGVvTWVkaWFSZXNvbHZlcixcbiAgICAgICAgICAgIFJlZGVlbVBvaW50c0ZvckNvdXBvbixcbiAgICAgICAgICAgIENvcHlDb3Vwb24sXG4gICAgICAgICAgICBMYW5ndWFnZVBvcHVwXG4gICAgICAgIF07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgc2V0Q3VycmVudExpbmtDbGFzcygpO1xuICAgICAgICBjb25zdCB3cEZvcm1zU3VibWl0QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJ3cGZvcm1zW3N1Ym1pdF1cIl0nKSk7XG4gICAgICAgIHdwRm9ybXNTdWJtaXRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzJywgJ2xhdmFuZHJlLWJ1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnc2l6ZScsICdsYXJnZScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZnVsbC13aWR0aCcsICdsYXJnZScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnb3V0bGluZScsICd0cnVlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbihmdW5jdGlvbiBhcHBJbml0KCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbiAgICBhcHAuaW5pdGlhbGl6ZSgpO1xuICAgIGZvb3RlclVzcFNsaWRlcigpO1xufSkoKTtcbmZ1bmN0aW9uIGZvb3RlclVzcFNsaWRlcigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c3Atc2xpZGVyJyk7XG4gICAgICAgIGlmICghbGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy51c3Atc2xpZGVyX19pdGVtJykpO1xuICAgICAgICBsZXQgdG90YWxXaWR0aCA9IDA7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gaXRlbS5jbGllbnRXaWR0aDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3Quc3R5bGUud2lkdGggPSBgJHt0b3RhbFdpZHRofXB4YDtcbiAgICB9LCAzMDApO1xufVxuaWYgKExhdmFuZHJlQnV0dG9uKSB7XG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGF2YW5kcmUtYnV0dG9uJywgTGF2YW5kcmVCdXR0b24sIHsgZXh0ZW5kczogJ2J1dHRvbicgfSk7XG59XG4iLCJjbGFzcyBEYXRhTGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgPyB3aW5kb3cuZGF0YUxheWVyIDogW107XG4gICAgfVxuICAgIHB1c2goZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFMYXllci5wdXNoKHsgZWNvbW1lcmNlOiBudWxsIH0pOyAvLyBDbGVhciB0aGUgcHJldmlvdXMgZWNvbW1lcmNlIG9iamVjdC5cbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICB9XG59XG5leHBvcnQgeyBEYXRhTGF5ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBEYXRhTGF5ZXIoKTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gJy4uL2NvbW1vbi9EYXRhTGF5ZXInO1xuaW1wb3J0IHsgbG9hZFJlY2FwdGNoYSwgc2l0ZWtleSB9IGZyb20gJy4uL3V0aWwvbG9hZFJlY2FwdGNoYSc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCB7IHNldFZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSAnLi4vdXRpbC92YWxpZGF0aW9uJztcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi9GaWVsZFZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgICAgIC8vIExvYWQgcmVjYXB0Y2hhXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCF3aW5kb3cuQ3lwcmVzcykge1xuICAgICAgICAgICAgbG9hZFJlY2FwdGNoYShmaWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRmllbGRWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5tYXRjaGVzKCc6LXdlYmtpdC1hdXRvZmlsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAgICAgaWYgKHN1Ym1pdEJ1dHRvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXQoZXZlbnQsIGZpZWxkcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJtaXRCdXR0b24gPT09IG51bGwgfHwgc3VibWl0QnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXQoZXZlbnQsIGZpZWxkcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Ym1pdChldmVudCwgZmllbGRzKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgdmFsaWQgPSBmaWVsZC52YWxpZGl0eS52YWxpZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAoKF9hID0gZm9ybURhdGEuZ2V0KCd1c2VybmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gKChfYiA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBncmVjYXB0Y2hhIH0gPSB3aW5kb3c7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhsb2dpbicsXG4gICAgICAgICAgICByZWNhcHRjaGFUb2tlbjogJycsXG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cImJ1dHRvblwiXVtuYW1lPVwibG9naW5cIl0nKSB8fFxuICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICghd2luZG93LkN5cHJlc3MpIHtcbiAgICAgICAgICAgIGdyZWNhcHRjaGEucmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdyZWNhcHRjaGEuZXhlY3V0ZShzaXRla2V5LCB7IGFjdGlvbjogJ0FqYXhMb2dpbicgfSkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yZWNhcHRjaGFUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJidXR0b25cIl1bbmFtZT1cImxvZ2luXCJdJykgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzb21ldGhpbmcgaXMgd3JvbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6ICdsb2dpbicsXG4gICAgICAgICAgICBtZXRob2Q6ICdBamF4TG9naW4nXG4gICAgICAgIH07XG4gICAgICAgIERhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgICAgICBjb25zdCBocmVmID0gdGhpcy5mb3JtLmRhdGFzZXQucmVkaXJlY3RVcmwgfHwgJy9teS1hY2NvdW50Lyc7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICB9XG4gICAgb25GYWlsdXJlKHJlcykge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlc3BvbnNlLmRhdGEgfHxcbiAgICAgICAgICAgICdUaGlzIGNvbWJpbmF0aW9uIG9mIGVtYWlsIGFuZCBwYXNzd29yZCBpcyBub3Qga25vd24gdG8gdXMuIFBsZWFzZSB0cnkgYWdhaW4gb3IgcmVxdWVzdCBhIG5ldyBwYXNzd29yZC4nO1xuICAgICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShtZXNzYWdlLCB0aGlzLmZvcm0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnI2FqYXgtbG9naW4tZm9ybScpKTtcbiAgICAgICAgaWYgKGxvZ2luRm9ybXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9naW5Gb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhamF4TG9naW4gPSBuZXcgQWpheExvZ2luKGZvcm0pO1xuICAgICAgICAgICAgYWpheExvZ2luLmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBEYXRhTGF5ZXIgZnJvbSAnLi4vY29tbW9uL0RhdGFMYXllcic7XG5pbXBvcnQgeyBsb2FkUmVjYXB0Y2hhLCBzaXRla2V5IH0gZnJvbSAnLi4vdXRpbC9sb2FkUmVjYXB0Y2hhJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IENvbmZpcm1WYWxpZGF0aW9uIGZyb20gJy4vQ29uZmlybVZhbGlkYXRpb24nO1xuaW1wb3J0IEVtYWlsVmFsaWRhdGlvbiBmcm9tICcuL0VtYWlsVmFsaWRhdGlvbic7XG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4vRmllbGRWYWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gICAgICAgIGlmIChlbWFpbEZpZWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBlbWFpbFZhbGlkYXRpb24gPSBuZXcgRW1haWxWYWxpZGF0aW9uKGVtYWlsRmllbGQpO1xuICAgICAgICAgICAgZW1haWxWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXNzd29yZEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3Rlci1wYXNzd29yZCcpO1xuICAgICAgICBjb25zdCBjb25maXJtUGFzc3dvcmRGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcjY29uZmlybS1wYXNzd29yZCcpO1xuICAgICAgICBpZiAocGFzc3dvcmRGaWVsZCAmJiBjb25maXJtUGFzc3dvcmRGaWVsZCkge1xuICAgICAgICAgICAgY29uc3QgY29uZmlybVZhbGlkYXRpb24gPSBuZXcgQ29uZmlybVZhbGlkYXRpb24ocGFzc3dvcmRGaWVsZCwgY29uZmlybVBhc3N3b3JkRmllbGQpO1xuICAgICAgICAgICAgY29uZmlybVZhbGlkYXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgICAgICAvLyBMb2FkIHJlY2FwdGNoYVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICghd2luZG93LkN5cHJlc3MpIHtcbiAgICAgICAgICAgIGxvYWRSZWNhcHRjaGEoZmllbGRzKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZpZWxkVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB2YWxpZGF0b3IuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZpZWxkLnZhbGlkaXR5LnZhbGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9ICgoX2IgPSBmb3JtRGF0YS5nZXQoJ2ZpcnN0X25hbWUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSAoKF9jID0gZm9ybURhdGEuZ2V0KCdsYXN0X25hbWUnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAoKF9kID0gZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgZ3JlY2FwdGNoYSB9ID0gd2luZG93O1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhamF4cmVnaXN0ZXInLFxuICAgICAgICAgICAgICAgIHJlY2FwdGNoYVRva2VuOiAnJyxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiBsYXN0TmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpIHx8XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuQ3lwcmVzcykge1xuICAgICAgICAgICAgICAgIGdyZWNhcHRjaGEucmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBncmVjYXB0Y2hhXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhlY3V0ZShzaXRla2V5LCB7IGFjdGlvbjogJ0FqYXhSZWdpc3RlcicgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5yZWNhcHRjaGFUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB1bmRlZmluZWQsIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdW5kZWZpbmVkLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIGlzIHdyb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiAnc2lnbi11cCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdBamF4UmVnaXN0ZXInXG4gICAgICAgIH07XG4gICAgICAgIERhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgICAgICBjb25zdCBocmVmID0gdGhpcy5mb3JtLmRhdGFzZXQucmVkaXJlY3RVcmwgfHwgJy9teS1hY2NvdW50Lyc7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNhamF4LXJlZ2lzdGVyLWZvcm0nKTtcbiAgICAgICAgaWYgKHJlZ2lzdGVyRm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFqYXhSZWdpc3RlciA9IG5ldyBBamF4UmVnaXN0ZXIocmVnaXN0ZXJGb3JtKTtcbiAgICAgICAgYWpheFJlZ2lzdGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maXJtVmFsaWRhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZmllbGQsIGNvbmZpcm1GaWVsZCkge1xuICAgICAgICB0aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgICAgIHRoaXMuY29uZmlybUZpZWxkID0gY29uZmlybUZpZWxkO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGQgfHwgIXRoaXMuY29uZmlybUZpZWxkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZmllbGRzJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnRzID0gWydjaGFuZ2UnLCAnaW5wdXQnXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGV2ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZC52YWx1ZSAhPT0gdGhpcy5jb25maXJtRmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdWYWx1ZSBpcyBub3QgZXF1YWwnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5zZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQ29va2llQmFyX2luc3RhbmNlcywgX0Nvb2tpZUJhcl9lbGVtZW50LCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgX0Nvb2tpZUJhcl9hY2NlcHRCdXR0b24sIF9Db29raWVCYXJfZ2V0RWxlbWVudCwgX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzO1xuaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fY29va2llLWJhci5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBnZXRDb29raWVWYWx1ZSwgc2V0Q29va2llVmFsdWUgfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9Db29raWVCYXJfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0Nvb2tpZUJhcl9lbGVtZW50LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9Db29raWVCYXJfYWNjZXB0QnV0dG9uLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgc2VsZWN0b3IucXVlcnlTZWxlY3RvcignI2Nvb2tpZS1iYXItdGVtcGxhdGUnKSwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LCBcImZcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0Q29va2llVmFsdWUoQ29va2llQmFyLmNvb2tpZU5hbWUpKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LCBcImZcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29va2llQmFyX2VsZW1lbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl9pbnN0YW5jZXMsIFwibVwiLCBfQ29va2llQmFyX2dldEVsZW1lbnQpLmNhbGwodGhpcyksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29va2llQmFyX2FjY2VwdEJ1dHRvbiwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX2VsZW1lbnQsIFwiZlwiKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwiY29va2llcy1hY2NlcHRcIl0nKSwgXCJmXCIpO1xuICAgICAgICAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfYWNjZXB0QnV0dG9uLCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl9pbnN0YW5jZXMsIFwibVwiLCBfQ29va2llQmFyX2FjY2VwdENvb2tpZXMpLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0QWNjZXB0Q29va2llKCkge1xuICAgICAgICBzZXRDb29raWVWYWx1ZShDb29raWVCYXIuY29va2llTmFtZSwgJ3RydWUnLCB7XG4gICAgICAgICAgICAnbWF4LWFnZSc6IDMxNTM2MDAwXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgY29va2llQmFyID0gbmV3IENvb2tpZUJhcihzZWxlY3Rvcik7XG4gICAgICAgIGNvb2tpZUJhci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuX0Nvb2tpZUJhcl9lbGVtZW50ID0gbmV3IFdlYWtNYXAoKSwgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQgPSBuZXcgV2Vha01hcCgpLCBfQ29va2llQmFyX2FjY2VwdEJ1dHRvbiA9IG5ldyBXZWFrTWFwKCksIF9Db29raWVCYXJfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0Nvb2tpZUJhcl9nZXRFbGVtZW50ID0gZnVuY3Rpb24gX0Nvb2tpZUJhcl9nZXRFbGVtZW50KCkge1xuICAgIGNvbnN0IGNsb25lID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgXCJmXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGNsb25lO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIFwiZlwiKS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwiY29va2llLWJhclwiXScpO1xufSwgX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzID0gZnVuY3Rpb24gX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzKCkge1xuICAgIHZhciBfYTtcbiAgICBDb29raWVCYXIuc2V0QWNjZXB0Q29va2llKCk7XG4gICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX2VsZW1lbnQsIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xufTtcbkNvb2tpZUJhci5jb29raWVOYW1lID0gJ2FwcHJvdmVkX2Nvb2tpZXMnO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9Db3B5Q291cG9uX2J1dHRvbjtcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3B5Q291cG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihidXR0b24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0NvcHlDb3Vwb25fYnV0dG9uLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgYnV0dG9uLCBcImZcIik7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBjb2RlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5kYXRhc2V0LmNvZGU7XG4gICAgICAgIGNvbnN0IHRleHQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmRhdGFzZXQudGV4dDtcbiAgICAgICAgY29uc3QgY29waWVkVGV4dCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikuZGF0YXNldC5jb3BpZWRUZXh0O1xuICAgICAgICBpZiAoIWNvZGUgfHwgIXRleHQgfHwgIWNvcGllZFRleHQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBuYXZpZ2F0b3IuY2xpcGJvYXJkLndyaXRlVGV4dChjb2RlKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5pbm5lclRleHQgPSBjb3BpZWRUZXh0O1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikuaW5uZXJUZXh0ID0gdGV4dDtcbiAgICAgICAgfSwgMzAwMCk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgY29weUJ1dHRvbnMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJjb3B5LWNvdXBvblwiXScpKTtcbiAgICAgICAgaWYgKGNvcHlCdXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvcHlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29weUNvdXBvbiA9IG5ldyBDb3B5Q291cG9uKGJ1dHRvbik7XG4gICAgICAgICAgICBjb3B5Q291cG9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX0NvcHlDb3Vwb25fYnV0dG9uID0gbmV3IFdlYWtNYXAoKTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9DdXJ0YWluX2luc3RhbmNlcywgX0N1cnRhaW5fdHJhbnNpdGlvbkxpc3RlbmVyLCBfQ3VydGFpbl9oYW5kbGVUcmFuc2l0aW9uO1xuaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fY3VydGFpbi5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJ0YWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBmb2xkQnV0dG9uLCBvbmx5T25Nb2JpbGUgPSBmYWxzZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfQ3VydGFpbl9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIuc2V0KHRoaXMsICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5faW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5faGFuZGxlVHJhbnNpdGlvbikuY2FsbCh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZm9sZEJ1dHRvbiA9IGZvbGRCdXR0b247XG4gICAgICAgIHRoaXMub25seU9uTW9iaWxlID0gb25seU9uTW9iaWxlO1xuICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPVxuICAgICAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLm1heEhlaWdodCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLm1heEhlaWdodCAhPT0gJ25vbmUnXG4gICAgICAgICAgICAgICAgPyBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCkubWF4SGVpZ2h0XG4gICAgICAgICAgICAgICAgOiAnMHB4JztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vbmx5T25Nb2JpbGUgJiYgd2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmRlZmF1bHRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHt0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IGAke3RoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmZvbGRCdXR0b24uZGF0YXNldC5yZWFkTGVzcyB8fCAhdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZE1vcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9PT0gdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZE1vcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uaW5uZXJUZXh0ID0gdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZExlc3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciwgXCJmXCIpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciwgXCJmXCIpKTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQgfHwgIXRoaXMuZm9sZEJ1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY3VydGFpbi10b2dnbGVdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9nZ2xlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZSA9IHRvZ2dsZXNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWN1cnRhaW4tY29udGVudD1cIiR7dG9nZ2xlLmRhdGFzZXQuY3VydGFpblRvZ2dsZX1cIl1gKTtcbiAgICAgICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb25seU9uTW9iaWxlID0gISEoY29udGVudC5kYXRhc2V0Lm9ubHlPbk1vYmlsZSAmJiBjb250ZW50LmRhdGFzZXQub25seU9uTW9iaWxlID09PSAndHJ1ZScpO1xuICAgICAgICAgICAgY29uc3QgY3VydGFpbiA9IG5ldyBDdXJ0YWluKGNvbnRlbnQsIHRvZ2dsZSwgb25seU9uTW9iaWxlKTtcbiAgICAgICAgICAgIGN1cnRhaW4uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuX0N1cnRhaW5fdHJhbnNpdGlvbkxpc3RlbmVyID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5faW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0N1cnRhaW5faGFuZGxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIF9DdXJ0YWluX2hhbmRsZVRyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnbm9uZSc7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXhIZWlnaHQnKTtcbn07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgeyByZW1vdmVFeGlzdGluZ1ZhbGlkYXRpb25NZXNzYWdlcywgc2V0VmFsaWRhdGlvbk1lc3NhZ2UgfSBmcm9tICcuLi91dGlsL3ZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1haWxWYWxpZGF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmVtYWlsSW5wdXQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmVtYWlsSW5wdXQuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IGJsdXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYmx1clRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGJsdXJUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsdXJUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQmx1ckV2ZW50KCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQmx1ckV2ZW50KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZW1haWxJbnB1dDtcbiAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSAoKF9hID0gZm9ybURhdGEuZ2V0KCd3b29jb21tZXJjZS1lbWFpbC1jaGVjay1ub25jZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnYWpheGVtYWlsY2hlY2snLFxuICAgICAgICAgICAgZW1haWw6IHZhbHVlLFxuICAgICAgICAgICAgc2VjdXJpdHlcbiAgICAgICAgfTtcbiAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25TdWNjZXNzKCkge1xuICAgICAgICByZW1vdmVFeGlzdGluZ1ZhbGlkYXRpb25NZXNzYWdlcyh0aGlzLmVtYWlsSW5wdXQpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUoZXJyb3IpIHtcbiAgICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3IubWVzc2FnZSwgdGhpcy5lbWFpbElucHV0KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVtYWlsSW5wdXQgfHwgIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJFbWFpbElucHV0ID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignI3JlZ19lbWFpbCcpO1xuICAgICAgICBpZiAocmVnaXN0ZXJFbWFpbElucHV0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW1haWxWYWxpZGF0aW9uID0gbmV3IEVtYWlsVmFsaWRhdGlvbihyZWdpc3RlckVtYWlsSW5wdXQpO1xuICAgICAgICBlbWFpbFZhbGlkYXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCB7IHNldFZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSAnLi4vdXRpbC92YWxpZGF0aW9uJztcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi9GaWVsZFZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ290UGFzc3dvcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGFuY2hvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvciA9IGFuY2hvcjtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvci5jbG9zZXN0KCdmb3JtJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnBhc3N3b3JkRm9yZ2V0QW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgndXNlcm5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgLy8gY29uc3Qgc2VjdXJpdHk6IHN0cmluZyA9IGZvcm1EYXRhLmdldCgnZm9yZ290c2VjdXJpdHknKT8udG9TdHJpbmcoKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsRmllbGQgPSB0aGlzLmZvcm0udXNlcm5hbWU7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbGlkYXRpb24gPSBuZXcgRmllbGRWYWxpZGF0aW9uKGVtYWlsRmllbGQpO1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIGVtYWlsRmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZhbGlkYXRlJykpO1xuICAgICAgICAgICAgaWYgKCF1c2VybmFtZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlcm5hbWUgbm90IHNldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhamF4Zm9yZ290cGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIHVzZXJfbG9naW46IHVzZXJuYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEsIHRoaXMuZm9ybSk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEsIHRoaXMuZm9ybSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvciB8fCAhdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBwYXNzd29yZEZvcmdldExpbmtzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwicGFzc3dvcmQtZm9yZ2V0XCJdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFzc3dvcmRGb3JnZXRMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBwYXNzd29yZEZvcmdldExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gbmV3IEZvcmdvdFBhc3N3b3JkKGxpbmspO1xuICAgICAgICAgICAgZm9yZ290UGFzc3dvcmQuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdvdFBhc3N3b3JkVG9nZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0b2dnbGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0b2dnbGU7XG4gICAgICAgIHRoaXMucGFzc3dvcmRGb3JnZXRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWZvcmdldC1mb3JtJyk7XG4gICAgICAgIHRoaXMubG9naW5XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXJlZ2lzdGVyLWZvcm0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbldyYXBwZXIudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRGb3JnZXRXcmFwcGVyLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMucGFzc3dvcmRGb3JnZXRXcmFwcGVyIHx8ICF0aGlzLmxvZ2luV3JhcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRGb3JnZXRMaW5rcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBhc3N3b3JkLWZvcmdldC10b2dnbGVcIl0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXNzd29yZEZvcmdldExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IHBhc3N3b3JkRm9yZ2V0TGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmQgPSBuZXcgRm9yZ290UGFzc3dvcmRUb2dnbGUobGluayk7XG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50Q2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChldmVudFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbkhlYWRlciA9IGV2ZW50VGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX3NlYXJjaCcpICE9PSBudWxsO1xuICAgICAgICAgICAgaWYgKHdpdGhpbkhlYWRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zdCBzZWFyY2hJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VhcmNoLWZpZWxkJyk7XG4gICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoSW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBoZWFkZXJTZWFyY2ggPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gnKTtcbiAgICAgICAgaWYgKGhlYWRlclNlYXJjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEhlYWRlclNlYXJjaChoZWFkZXJTZWFyY2gpO1xuICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9faW5mb1BvcHVwLnBjc3MnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm9Qb3B1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZXZlbnQgPSAnbW91c2VvdmVyJykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmNvbnRlbnQgfHwgJyc7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50LCB0aGlzLnNob3dUaXBweS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc2hvd1RpcHB5KGUpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHdpbmRvdy50aXBweSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQnLFxuICAgICAgICAgICAgYWxsb3dIVE1MOiB0cnVlLFxuICAgICAgICAgICAgaGlkZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBzaG93T25DcmVhdGU6IHRydWUsXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG9uSGlkZGVuOiAoaSkgPT4ge1xuICAgICAgICAgICAgICAgIGkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZS5zaG93KCk7XG4gICAgICAgIGluc3RhbmNlLmhpZGVXaXRoSW50ZXJhY3Rpdml0eShlKTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQgfHwgIXRoaXMuY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgdGlwcHlFbGVtZW50cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInRpcHB5XCJdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGlwcHlFbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRpcHB5RWxlbWVudCA9IHRpcHB5RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKCF0aXBweUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZm9Qb3B1cCA9IG5ldyBJbmZvUG9wdXAodGlwcHlFbGVtZW50LCAnbW91c2VvdmVyJyk7XG4gICAgICAgICAgICBpbmZvUG9wdXAuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhenlMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHMoKTtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIHRoaXMub25JbnRlcnNlY3Rpb25PYnNlcnZlcihJbnRlcnNlY3Rpb25PYnNlcnZlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50c1tpXTtcbiAgICAgICAgICAgIHRoaXMubGF6eWxvYWQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25JbnRlcnNlY3Rpb25PYnNlcnZlcihPYnNlcnZlckNsYXNzID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICByb290TWFyZ2luOiAnMjUwcHggMHB4JyxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBsYXp5SW1hZ2VPYnNlcnZlciA9IG5ldyBPYnNlcnZlckNsYXNzKChlbnRyaWVzLCBsYXp5SW1hZ2VPYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGxhenkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhenlsb2FkKGxhenkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhenlsb2FkKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGxhenlJbWFnZSkgPT4ge1xuICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIub2JzZXJ2ZShsYXp5SW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGF6eWxvYWQoZWwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsO1xuICAgICAgICB0aGlzLm1hbmFnZUNzc0NsYXNzZXMoZWwpO1xuICAgICAgICBpZiAod2luZG93LkhUTUxQaWN0dXJlRWxlbWVudCAmJiB0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICAgICAgaWYgKGltYWdlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VDc3NDbGFzc2VzKGltYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2FkaW5nU3Bpbm5lciA9IHRoaXMuZWxlbWVudC5jbG9zZXN0KCcubG9hZGluZy1zcGlubmVyJyk7XG4gICAgICAgIGlmIChsb2FkaW5nU3Bpbm5lcikge1xuICAgICAgICAgICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZy1zcGlubmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNvdXJjZUVsZW1lbnQpICYmXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuc2l6ZXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2l6ZXMgPSBlbGVtZW50LmRhdGFzZXQuc2l6ZXM7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zaXplcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnNyY3NldCkge1xuICAgICAgICAgICAgZWxlbWVudC5zcmNzZXQgPSBlbGVtZW50LmRhdGFzZXQuc3Jjc2V0O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNvdXJjZUVsZW1lbnQpICYmXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZGF0YXNldC5zcmM7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRFbGVtZW50cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCAmJlxuICAgICAgICAgICAgKHRoaXMuZWxlbWVudC5kYXRhc2V0LnNyYyB8fCB0aGlzLmVsZW1lbnQuZGF0YXNldC5zcmNzZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMuZWxlbWVudF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtc3JjXSwgc291cmNlW2RhdGEtc3Jjc2V0XScpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtc3JjXScpKTtcbiAgICB9XG4gICAgbWFuYWdlQ3NzQ2xhc3NlcyhlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcbiAgICAgICAgY29uc3QgbGF6eWxvYWRFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGF6eWxvYWRdJykpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhenlsb2FkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBsYXp5bG9hZEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgICAgICAgICAgbmV3IExhenlMb2FkZXIoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IERhdGFMYXllciBmcm9tICcuLi9jb21tb24vRGF0YUxheWVyJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuL0ZpZWxkVmFsaWRhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzbGV0dGVyU3Vic2NyaWJlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmRhdGFMYXllciA9IERhdGFMYXllcjtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgICAgdGhpcy5lbWFpbEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZW1haWxcIl0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXdzbGV0dGVyIHN1YnNjcmliZSBjb21wb25lbnQgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZpZWxkVmFsaWRhdGlvbih0aGlzLmVtYWlsRmllbGQpO1xuICAgICAgICB2YWxpZGF0b3IuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgnZmlyc3QtbmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBjb21wYW55TmFtZSA9ICgoX2IgPSBmb3JtRGF0YS5nZXQoJ2NvbXBhbnktbmFtZScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9ICgoX2MgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGlmICghZW1haWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ21haWxjaGltcHN1YnNjcmliZScsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGNvbXBhbnlOYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgRmllbGRWYWxpZGF0aW9uLnJlbW92ZUVycm9yVGV4dCh0aGlzLmVtYWlsRmllbGQpO1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtIHx8ICF0aGlzLmVtYWlsRmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlc3BvbnNlLCBldmVudCkge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kU3VjY2Vzc1RleHQodGhpcy5lbWFpbEZpZWxkLCByZXNwb25zZS5kYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLmVtYWlsRmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiAnR0FFdmVudCcsXG4gICAgICAgICAgICBldmVudENhdGVnb3J5OiAnbmV3c2xldHRlcicsXG4gICAgICAgICAgICBldmVudEFjdGlvbjogJ3N1YnNjcmliZScsXG4gICAgICAgICAgICBldmVudExhYmVsOiB0aGlzLmZvcm0uaWQgfHwgJ2dlbmVyaWMnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShlcnJvcikge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kRXJyb3JUZXh0KHRoaXMuZW1haWxGaWVsZCwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgLy8gI1RPRE86IFN3aXRjaCB0byBjb21tb24gc2VsZWN0b3JcbiAgICAgICAgY29uc3QgZm9ybXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJyNmb290ZXItbmV3c2xldHRlci1mb3JtLCAjaG9tZXBhZ2UtbmV3c2xldHRlci1mb3JtLCAjYWpheC1uZXdzbGV0dGVyLWZvcm0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb3Jtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBmb3Jtc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBuZXdzbGV0dGVyU3Vic2NyaWJlID0gbmV3IE5ld3NsZXR0ZXJTdWJzY3JpYmUoZm9ybSk7XG4gICAgICAgICAgICBuZXdzbGV0dGVyU3Vic2NyaWJlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZFJldmVhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnBhc3N3b3JkSW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuY3JlYXRlUmV2ZWFsQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZElucHV0LnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkSW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVSZXZlYWxCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xuICAgICAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ3Bhc3N3b3JkLXJldmVhbC10b2dnbGUnO1xuICAgICAgICBidXR0b24udGFiSW5kZXggPSAtMTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkUm93cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnLnBhc3N3b3JkLXJvdycpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhc3N3b3JkUm93cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkUm93ID0gcGFzc3dvcmRSb3dzW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChwYXNzd29yZFJvdyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkUmV2ZWFsID0gbmV3IFBhc3N3b3JkUmV2ZWFsKHBhc3N3b3JkUm93KTtcbiAgICAgICAgICAgIHBhc3N3b3JkUmV2ZWFsLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbjtcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4uL3V0aWwvZW5kcG9pbnRzJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkZWVtUG9pbnRzRm9yQ291cG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihidXR0b24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24uc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIGJ1dHRvbiwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU3VibWl0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGlkID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiwgXCJmXCIpLmRhdGFzZXQuaWQ7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnYWpheHJlZGVlbWNvdXBvbicsXG4gICAgICAgICAgICBpZDogaWRcbiAgICAgICAgfTtcbiAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIGVuZHBvaW50cy5hamF4LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCBldmVudCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiwgXCJmXCIpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIFwiZlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzLCBldmVudCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICB9XG4gICAgb25GYWlsdXJlKHJlcykge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZGVlbUJ1dHRvbnMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJyZWRlZW0tY291cG9uXCJdJykpO1xuICAgICAgICBpZiAocmVkZWVtQnV0dG9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWRlZW1CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkZWVtUG9pbnRzRm9yQ291cG9uID0gbmV3IFJlZGVlbVBvaW50c0ZvckNvdXBvbihidXR0b24pO1xuICAgICAgICAgICAgcmVkZWVtUG9pbnRzRm9yQ291cG9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24gPSBuZXcgV2Vha01hcCgpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgX1Njcm9sbFRvQ29udGVudF90YXJnZXQ7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHNjcm9sbFRvVGFyZ2V0IGZyb20gJy4uL3V0aWwvc2Nyb2xsVG9UYXJnZXQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9Db250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCB0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfU2Nyb2xsVG9Db250ZW50X3RhcmdldC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQsIGVsZW1lbnQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldCwgdGFyZ2V0LCBcImZcIik7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJPZmZzZXQgPSAhX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQsIFwiZlwiKS5kYXRhc2V0LmhlYWRlck9mZnNldDtcbiAgICAgICAgICAgIHNjcm9sbFRvVGFyZ2V0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF90YXJnZXQsIFwiZlwiKSwgMCwgaGVhZGVyT2Zmc2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2Nyb2xsLXRvXScpKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlbGVtZW50LmRhdGFzZXQuc2Nyb2xsVG8gfHwgJyc7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNjcm9sbFRvQ29udGVudChlbGVtZW50LCB0YXJnZXQpO1xuICAgICAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQgPSBuZXcgV2Vha01hcCgpLCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldCA9IG5ldyBXZWFrTWFwKCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zb3VyY2VzLCBfVmlkZW9NZWRpYVJlc29sdmVyX3RpbWVvdXQsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplLCBfVmlkZW9NZWRpYVJlc29sdmVyX3Nob3dTb3VyY2U7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9wb2x5ZmlsbHMvbWF0Y2hNZWRpYSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb01lZGlhUmVzb2x2ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcy5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1ZpZGVvTWVkaWFSZXNvbHZlcl90aW1lb3V0LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQsIGVsZW1lbnQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMsIEFycmF5LmZyb20oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQsIFwiZlwiKS5xdWVyeVNlbGVjdG9yQWxsKCdzb3VyY2UnKSksIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgXCJtXCIsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplKS5jYWxsKHRoaXMpO1xuICAgICAgICBjb25zdCBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKTtcbiAgICAgICAgY29uc3QgbXEyID0gd2luZG93Lm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyk7XG4gICAgICAgIG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyKG1xLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMsIFwibVwiLCBfVmlkZW9NZWRpYVJlc29sdmVyX2hhbmRsZVJlc2l6ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihtcTIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgXCJtXCIsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplKS5jYWxsKHRoaXMpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgndmlkZW9bZGF0YS1yZXNvbHZlXScpKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVmlkZW9NZWRpYVJlc29sdmVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQgPSBuZXcgV2Vha01hcCgpLCBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMgPSBuZXcgV2Vha01hcCgpLCBfVmlkZW9NZWRpYVJlc29sdmVyX3RpbWVvdXQgPSBuZXcgV2Vha01hcCgpLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplID0gZnVuY3Rpb24gX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUoKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMsIFwiZlwiKS5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBzb3VyY2UuZGF0YXNldC5vcmllbnRhdGlvbiB8fCAnJztcbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSBOdW1iZXIoc291cmNlLmRhdGFzZXQubWF4V2lkdGgpIHx8IDA7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPcmllbnRhdGlvbiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXNcbiAgICAgICAgICAgID8gJ3BvcnRyYWl0J1xuICAgICAgICAgICAgOiAnbGFuZHNjYXBlJztcbiAgICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGlmIChjdXJyZW50T3JpZW50YXRpb24gIT09IG9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heFdpZHRoICYmIGN1cnJlbnRXaWR0aCA+PSBtYXhXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMsIFwibVwiLCBfVmlkZW9NZWRpYVJlc29sdmVyX3Nob3dTb3VyY2UpLmNhbGwodGhpcywgc291cmNlKTtcbiAgICB9KTtcbn0sIF9WaWRlb01lZGlhUmVzb2x2ZXJfc2hvd1NvdXJjZSA9IGZ1bmN0aW9uIF9WaWRlb01lZGlhUmVzb2x2ZXJfc2hvd1NvdXJjZShzb3VyY2UpIHtcbiAgICBjb25zdCBkYXRhU3JjID0gc291cmNlLmRhdGFzZXQuc3JjO1xuICAgIGlmICghZGF0YVNyYykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9lbGVtZW50LCBcImZcIikuc3JjID0gZGF0YVNyYztcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIobXEsIGNhbGxiYWNrLCBldmVudEJ1YmJsaW5nID0gZmFsc2UpIHtcbiAgICB0cnkge1xuICAgICAgICBtcS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjYWxsYmFjaywgZXZlbnRCdWJibGluZyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIG1xLmFkZExpc3RlbmVyKCgpID0+IGNhbGxiYWNrKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hNZWRpYVJlbW92ZUV2ZW50TGlzdGVuZXIobXEsIGNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbXEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBtcS5yZW1vdmVMaXN0ZW5lcigoKSA9PiBjYWxsYmFjayk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGRpYWxvZ1BvbHlmaWxsIGZyb20gJ2RpYWxvZy1wb2x5ZmlsbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgZGlzYWJsZUJvZHlTY3JvbGwsIGVuYWJsZUJvZHlTY3JvbGwgfSBmcm9tICcuLi91dGlsL2JvZHknO1xuaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tICcuLi91dGlsL3N0cmluZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG4gICAgc2V0IGlzT3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNhbWVsRGF0YUF0dHJpYnV0ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGFBdHRyaWJ1dGUucmVwbGFjZSgnZGF0YS0nLCAnJyk7XG4gICAgICAgIHJldHVybiB0b0NhbWVsQ2FzZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCB0cmFuc2l0aW9uVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zaXRpb25UaW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvblRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWUgPSB0aGlzLmdldFRyYW5zaXRpb25UaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uVGltZTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5wb2x5ZmlsbERpYWxvZygpO1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlXScpKTtcbiAgICAgICAgY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0c2lkZUNsaWNrKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZEluRGlhbG9nID0gcmVjdC50b3AgPD0gZXZlbnQuY2xpZW50WSAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgPD0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHJlY3QubGVmdCA8PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8PSByZWN0LmxlZnQgKyByZWN0LndpZHRoO1xuICAgICAgICAgICAgaWYgKCFjbGlja2VkSW5EaWFsb2cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdChgWyR7dGhpcy5kYXRhQXR0cmlidXRlfT1cIiR7dGhpcy5lbGVtZW50LmRhdGFzZXRbYCR7dGhpcy5jYW1lbERhdGFBdHRyaWJ1dGV9YF19XCJdYCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNhYmxlQm9keVNjcm9sbCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2hvd01vZGFsKCk7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGVuYWJsZUJvZHlTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgZ2V0VHJhbnNpdGlvblRpbWUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSAoX2EgPSBzdHlsZXMudHJhbnNpdGlvbkR1cmF0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uaW5kZXhPZignbXMnKSA+IC0xXG4gICAgICAgICAgICA/IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKiAxMDAwO1xuICAgICAgICByZXR1cm4gZHVyYXRpb24gfHwgNDAwO1xuICAgIH1cbiAgICBwb2x5ZmlsbERpYWxvZygpIHtcbiAgICAgICAgZGlhbG9nUG9seWZpbGwgPT09IG51bGwgfHwgZGlhbG9nUG9seWZpbGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpYWxvZ1BvbHlmaWxsLnJlZ2lzdGVyRGlhbG9nKHRoaXMuZWxlbWVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IHsgZ2V0Q29va2llVmFsdWUsIHNldENvb2tpZVZhbHVlIH0gZnJvbSAnLi4vdXRpbC9jb29raWVzJztcbmltcG9ydCBQb3B1cCBmcm9tICcuL1BvcHVwJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmd1YWdlUG9wdXAgZXh0ZW5kcyBQb3B1cCB7XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRDb29raWVWYWx1ZSgnbGFuZ3VhZ2UtcG9wdXAtc2VlbicpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgaWYgKHBhdGggPT09ICcvbmwvJyB8fCBwYXRoID09PSAnL2ZyLycgfHwgcGF0aCA9PT0gJy9kZS8nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJlZmVycmVkTGFuZ3VhZ2UgPSAoX2EgPSB3aW5kb3cubmF2aWdhdG9yLmxhbmd1YWdlKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnZW4nO1xuICAgICAgICBjb25zdCBsYW5ndWFnZSA9IHByZWZlcnJlZExhbmd1YWdlLnN1YnN0cmluZygwLCAyKTtcbiAgICAgICAgaWYgKGxhbmd1YWdlID09PSAnZW4nKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBjb25zdCBwb3B1cCA9IExhbmd1YWdlUG9wdXAub3BlblBvcHVwKCdsYW5ndWFnZS1wb3B1cCcsIG51bGwsIHNlbGVjdG9yKTtcbiAgICAgICAgICAgIHNldENvb2tpZVZhbHVlKCdsYW5ndWFnZS1wb3B1cC1zZWVuJywgJ3RydWUnLCB7XG4gICAgICAgICAgICAgICAgJ21heC1hZ2UnOiAzMTUzNjAwMFxuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocG9wdXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkb21haW5Ecm9wZG93biA9IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJyNkb21haW4tZHJvcGRvd24nKTtcbiAgICAgICAgICAgIGNvbnN0IHN0YXlEb21haW5CdXR0b24gPSAoX2EgPSBwb3B1cCA9PT0gbnVsbCB8fCBwb3B1cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9wdXAucXVlcnlTZWxlY3RvcignI3N0YXlEb21haW4nKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogbnVsbDtcbiAgICAgICAgICAgIGNvbnN0IG90aGVyRG9tYWluQnV0dG9ucyA9IEFycmF5LmZyb20ocG9wdXAgPT09IG51bGwgfHwgcG9wdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5vdGhlckRvbWFpbnMnKSk7XG4gICAgICAgICAgICBjb25zdCBzdWJtaXREb21haW5CdXR0b24gPSBwb3B1cCA9PT0gbnVsbCB8fCBwb3B1cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9wdXAucXVlcnlTZWxlY3RvcignI3N1Ym1pdC1kb21haW4nKTtcbiAgICAgICAgICAgIHN0YXlEb21haW5CdXR0b24gPT09IG51bGwgfHwgc3RheURvbWFpbkJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3RheURvbWFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBwb3B1cCA9PT0gbnVsbCB8fCBwb3B1cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9wdXAuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RvZ2dsZScpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgb3RoZXJEb21haW5CdXR0b25zLmZvckVhY2goKG90aGVyRG9tYWluQnV0dG9uKSA9PiB7XG4gICAgICAgICAgICAgICAgb3RoZXJEb21haW5CdXR0b24gPT09IG51bGwgfHwgb3RoZXJEb21haW5CdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IG90aGVyRG9tYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjb250YWluZXJzID0gQXJyYXkuZnJvbShwb3B1cCA9PT0gbnVsbCB8fCBwb3B1cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnLmxhbmd1YWdlLXBvcHVwX19jb250YWluZXInKSk7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lcnMuZm9yRWFjaCgoY29udGFpbmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb250YWluZXIudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHN1Ym1pdERvbWFpbkJ1dHRvbiA9PT0gbnVsbCB8fCBzdWJtaXREb21haW5CdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN1Ym1pdERvbWFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IGRvbWFpbkRyb3Bkb3duID09PSBudWxsIHx8IGRvbWFpbkRyb3Bkb3duID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkb21haW5Ecm9wZG93bi5zZWxlY3RlZFZhbHVlO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUgfHwgIWRvbWFpbkRyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY29uc3QgbWFwcGluZyA9IGRvbWFpbkRyb3Bkb3duLmRhdGFzZXQubWFwcGluZ1xuICAgICAgICAgICAgICAgICAgICA/IEpTT04ucGFyc2UoZG9tYWluRHJvcGRvd24uZGF0YXNldC5tYXBwaW5nKVxuICAgICAgICAgICAgICAgICAgICA6IHt9O1xuICAgICAgICAgICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobWFwcGluZ1t2YWx1ZV0pO1xuICAgICAgICAgICAgICAgIGlmICghdXJsKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmwuaHJlZjtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19wb3B1cC5wY3NzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBvcHVwIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kYXRhQXR0cmlidXRlID0gJ2RhdGEtcG9wdXAtbmFtZSc7XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgICAgICAgIG9wZW46ICdwb3B1cC0tb3BlbmVkJyxcbiAgICAgICAgICAgIGNsb3NlZDogJ3BvcHVwLS1jbG9zZWQnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBvcGVuUG9wdXAocG9wdXBJRCwgZWxlbWVudCA9IG51bGwsIHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgcG9wdXAgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cC1uYW1lPVwiJHtwb3B1cElEfVwiXWApO1xuICAgICAgICBpZiAocG9wdXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXAtdGVtcGxhdGU9XCIke3BvcHVwSUR9XCJdYCk7XG4gICAgICAgICAgICBpZiAodGVtcGxhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBlbGVtZW50LmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSBjbG9uZTtcbiAgICAgICAgICAgIChfYSA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICAgIHBvcHVwID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXAtbmFtZT1cIiR7cG9wdXBJRH1cIl1gKTtcbiAgICAgICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCBwb3B1cCk7XG4gICAgICAgICAgICBpZiAocG9wdXAgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBvcHVwSW5zdGFuY2UgPSBuZXcgUG9wdXAocG9wdXApO1xuICAgICAgICAgICAgcG9wdXBJbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCFwb3B1cC5vcGVuKSB7XG4gICAgICAgICAgICBjb25zdCBvcGVuRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ29wZW4nKTtcbiAgICAgICAgICAgIHBvcHVwLmRpc3BhdGNoRXZlbnQob3BlbkV2ZW50KTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gcG9wdXA7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgICAgICBjb25zdCBwb3B1cExpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wb3B1cF0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwb3B1cExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBvcHVwTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlQ3JlYXRpb25FdmVudChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwb3B1cElEID0gdGhpcy5kYXRhc2V0LnBvcHVwIHx8ICcnO1xuICAgICAgICBQb3B1cC5vcGVuUG9wdXAocG9wdXBJRCwgdGhpcyk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fc2lkZVBhbmVsLnBjc3MnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZVBhbmVsIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kYXRhQXR0cmlidXRlID0gJ2RhdGEtcGFuZWwtbmFtZSc7XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgICAgICAgIG9wZW46ICdzaWRlLXBhbmVsLS1vcGVuZWQnLFxuICAgICAgICAgICAgY2xvc2VkOiAnc2lkZS1wYW5lbC0tY2xvc2VkJyxcbiAgICAgICAgICAgIGxlZnQ6ICdzaWRlLXBhbmVsLS1sZWZ0JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnc2lkZS1wYW5lbC0tcmlnaHQnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBvcGVuU2lkZVBhbmVsKHBhbmVsSUQsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgaWYgKHBhbmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLXRlbXBsYXRlPVwiJHtwYW5lbElEfVwiXWApO1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZWxlbWVudC5ocmVmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSBjbG9uZTtcbiAgICAgICAgICAgIChfYSA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICAgIHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCBwYW5lbCk7XG4gICAgICAgICAgICBpZiAocGFuZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzaWRlUGFuZWxJbnN0YW5jZSA9IG5ldyBTaWRlUGFuZWwocGFuZWwpO1xuICAgICAgICAgICAgc2lkZVBhbmVsSW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvZ2dsZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKTtcbiAgICAgICAgcGFuZWwuZGlzcGF0Y2hFdmVudCh0b2dnbGVFdmVudCk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgICAgICBjb25zdCBwYW5lbExpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW5lbF0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYW5lbExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhbmVsTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlQ3JlYXRpb25FdmVudChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwYW5lbElEID0gdGhpcy5kYXRhc2V0LnBhbmVsIHx8ICcnO1xuICAgICAgICAvLyBJZiBhbHJlYWR5IGxvZ2dlZCBpbiBmb2xsb3cgbGlua1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmXG4gICAgICAgICAgICBwYW5lbElEID09PSAnbXktYWNjb3VudC1wYW5lbCcgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2dnZWQtaW4nKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwocGFuZWxJRCwgdGhpcyk7XG4gICAgfVxufVxuIiwiY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgc2Nyb2xsUG9zaXRpb24gPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVCb2R5U2Nyb2xsKCkge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnRvcCA9IGAtJHtzY3JvbGxQb3NpdGlvbn1weGA7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ2luaXRpYWwnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUJvZHlTY3JvbGwoKSB7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Bvc2l0aW9uJyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnc2Nyb2xsLWJlaGF2aW9yJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llVmFsdWUobmFtZSkge1xuICAgIGNvbnN0IGNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZVxuICAgICAgICAuc3BsaXQoJzsgJylcbiAgICAgICAgLmZpbmQoKHJvdykgPT4gcm93LnN0YXJ0c1dpdGgobmFtZSkpO1xuICAgIGlmIChjb29raWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvb2tpZS5zcGxpdCgnPScpWzFdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZVZhbHVlKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgY29va2llT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBwYXRoOiAnLycgfSwgb3B0aW9ucyk7XG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfWA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAoY29uc3Qgb3B0aW9uS2V5IGluIGNvb2tpZU9wdGlvbnMpIHtcbiAgICAgICAgdXBkYXRlZENvb2tpZSArPSBgOyAke29wdGlvbktleX1gO1xuICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IGNvb2tpZU9wdGlvbnNbb3B0aW9uS2V5XTtcbiAgICAgICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IGA9JHtvcHRpb25WYWx1ZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNEYXRlVmFsaWQoZGF0ZSkge1xuICAgIHJldHVybiAhTnVtYmVyLmlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICBjb25zdCBkYXkgPSBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpO1xuICAgIGNvbnN0IG1vbnRoID0gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7bW9udGh9LSR7ZGF5fWA7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKG51bWJlcikge1xuICAgIHJldHVybiBTdHJpbmcobnVtYmVyKS5wYWRTdGFydCgyLCAnMCcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxNb250aE5hbWUobW9udGgsIGxvY2FsZSA9ICdkZWZhdWx0Jykge1xuICAgIHJldHVybiBtb250aC50b0xvY2FsZVN0cmluZyhsb2NhbGUsIHsgbW9udGg6ICdsb25nJyB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0cmluZ0FzSHRtbChjb250ZW50LCBzZWxlY3RvciA9ICd0ZW1wbGF0ZScpIHtcbiAgICBjb25zdCBkb21QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgcGFyc2VkID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyhjb250ZW50LCAndGV4dC9odG1sJyk7XG4gICAgcmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSB8fCBwYXJzZWQuYm9keTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBYnNvbHV0ZUhlaWdodChlbCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICBjb25zdCBtYXJnaW4gPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3ApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tKTtcbiAgICByZXR1cm4gTWF0aC5jZWlsKGVsLm9mZnNldEhlaWdodCArIG1hcmdpbik7XG59XG4iLCJjb25zdCBlbmRwb2ludHMgPSB7XG4gICAgYWpheDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgXG59O1xuZXhwb3J0IGRlZmF1bHQgZW5kcG9pbnRzO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRMaW5rQ2xhc3MoKSB7XG4gICAgY29uc3QgcGF0aE5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgY29uc3QgZm9ybWF0dGVkUGF0aE5hbWUgPSBzdHJpcFRyYWlsaW5nU2xhc2gocGF0aE5hbWUpO1xuICAgIGNvbnN0IGZ1bGxVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zdCBmb3JtYXR0ZWRVcmwgPSBzdHJpcFRyYWlsaW5nU2xhc2goZnVsbFVybCk7XG4gICAgY29uc3QgYW5jaG9ycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke3BhdGhOYW1lfVwiXSxcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7Zm9ybWF0dGVkUGF0aE5hbWV9XCJdLFxuICAgICAgICBuYXYgYVtocmVmPVwiJHtmdWxsVXJsfVwiXSxcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7Zm9ybWF0dGVkVXJsfVwiXVxuICAgIGApKTtcbiAgICBhbmNob3JzLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICAgICAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1saW5rJyk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHN0cikge1xuICAgIHJldHVybiBzdHIuZW5kc1dpdGgoJy8nKSA/IHN0ci5zbGljZSgwLCAtMSkgOiBzdHI7XG59XG4iLCJsZXQgbG9hZGVkID0gZmFsc2U7XG5leHBvcnQgY29uc3Qgc2l0ZWtleSA9ICc2TGR2MlJrY0FBQUFBQkNDTDFKUjVEbG1FRVQ0TnlfMkNta1ZhOE52JztcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUmVjYXB0Y2hhKGVsZW1lbnRzKSB7XG4gICAgbG9vcFRocm91Z2hFbGVtZW50cyhlbGVtZW50cywgdHJ1ZSwgKCkgPT4ge1xuICAgICAgICBpbnNlcnRSZWNhcHRjaGFTY3JpcHQoZWxlbWVudHMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaW5zZXJ0UmVjYXB0Y2hhU2NyaXB0KGVsZW1lbnRzKSB7XG4gICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuc3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcz9yZW5kZXI9JHtzaXRla2V5fWA7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9vcFRocm91Z2hFbGVtZW50cyhlbGVtZW50cywgZmFsc2UsICgpID0+IHtcbiAgICAgICAgaW5zZXJ0UmVjYXB0Y2hhU2NyaXB0KGVsZW1lbnRzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGxvb3BUaHJvdWdoRWxlbWVudHMoZWxlbWVudHMsIGFkZEV2ZW50LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgWydmb2N1cycsICdjbGljaycsICd0b3VjaGVuZCcsICdibHVyJywgJ2lucHV0JywgJ2NoYW5nZScsICdwcm9wZXJ0eWNoYW5nZSddLmZvckVhY2goKGV2dCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFkZEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihldnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcm9sbFRvVGFyZ2V0KHRhcmdldCwgZGVmYXVsdE9mZnNldCA9IDAsIGhlYWRlck9mZnNldCA9IHRydWUpIHtcbiAgICBjb25zdCBib2R5VG9wUG9zaXRpb24gPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gYm9keVRvcFBvc2l0aW9uO1xuICAgIGxldCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0O1xuICAgIGlmIChoZWFkZXJPZmZzZXQpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gaGVhZGVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvZmZzZXRQb3NpdGlvbiA9IGVsZW1lbnRQb3NpdGlvbiAtIG9mZnNldCArIDE7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtYXRjaCwgY2hyKSA9PiBjaHIudG9VcHBlckNhc2UoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csICh0eHQpID0+IHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0VmFsaWRhdGlvbk1lc3NhZ2UobWVzc2FnZSwgZWxlbWVudCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBmb3JtUm93ID0gKF9hID0gZWxlbWVudC5jbG9zZXN0KCcuZm9ybS1yb3cnKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZWxlbWVudDtcbiAgICBjb25zdCBmb3JtUm93UGFyZW50ID0gZm9ybVJvdyA9PT0gbnVsbCB8fCBmb3JtUm93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtUm93LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKGZvcm1Sb3cgPT09IG51bGwgfHwgIWZvcm1Sb3dQYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZW1vdmVFeGlzdGluZ1ZhbGlkYXRpb25NZXNzYWdlcyhlbGVtZW50LCBmb3JtUm93UGFyZW50KTtcbiAgICBjb25zdCB2YWxpZGF0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTmFtZSA9ICdhbGVydCBhbGVydC0td2FybmluZyBpbmxpbmUtZm9ybS1lcnJvcic7XG4gICAgdmFsaWRhdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIGZvcm1Sb3dQYXJlbnQuaW5zZXJ0QmVmb3JlKHZhbGlkYXRpb25FbGVtZW50LCBmb3JtUm93KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFeGlzdGluZ1ZhbGlkYXRpb25NZXNzYWdlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBncmFuZHBhcmVudCA9IHNlbGVjdG9yIHx8ICgoX2EgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXJlbnRFbGVtZW50KTtcbiAgICBpZiAoIWdyYW5kcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZXhpc3RpbmdWYWxpZGF0aW9ucyA9IEFycmF5LmZyb20oZ3JhbmRwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsZXJ0LS13YXJuaW5nJykpO1xuICAgIGV4aXN0aW5nVmFsaWRhdGlvbnMuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICB2LnJlbW92ZSgpO1xuICAgIH0pO1xufVxuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCwgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrLCBfQ3VydGFpbkVsZW1lbnRfb3BlbiwgX0N1cnRhaW5FbGVtZW50X2V4cGFuZCwgX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoLCBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnM7XG5pbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19hY2NvcmRpb24ucGNzcyc7XG5pbXBvcnQgeyBnZXRBYnNvbHV0ZUhlaWdodCB9IGZyb20gJy4uL3V0aWwvZG9tJztcbmNsYXNzIEN1cnRhaW5FbGVtZW50IGV4dGVuZHMgSFRNTERldGFpbHNFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3N1bW1hcnknKSk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9jb250ZW50LnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jdXJ0YWluLWNvbnRlbnQnKSk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3Npbmcuc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljay5zZXQodGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIC8vIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xvc2UnKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgXCJmXCIpIHx8IHRoaXMub3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfb3BlbikuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgb3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdvcGVuJyk7XG4gICAgfVxuICAgIHNldCBvcGVuKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKCdvcGVuJywgdmFsdWUpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgLy8gdGhpcy4jc3VtbWFyeS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuI2hhbmRsZUNsaWNrLCB7XG4gICAgICAgIC8vICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICAvLyAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgLy8gfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBcImZcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljaywgXCJmXCIpKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgdHJ1ZSwgXCJmXCIpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTtcbiAgICAgICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIGNvbnN0IGVuZEhlaWdodCA9IGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIFwiZlwiKS5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgdGhpcy5hbmltYXRlKHtcbiAgICAgICAgICAgIGhlaWdodDogW3N0YXJ0SGVpZ2h0LCBlbmRIZWlnaHRdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCdcbiAgICAgICAgfSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikub25maW5pc2ggPSAoKSA9PiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gpLmNhbGwodGhpcywgZmFsc2UpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5vbmNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbl9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5ID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljayA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQ3VydGFpbkVsZW1lbnRfb3BlbiA9IGZ1bmN0aW9uIF9DdXJ0YWluRWxlbWVudF9vcGVuKCkge1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5vZmZzZXRIZWlnaHR9cHhgO1xuICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfZXhwYW5kKS5jYWxsKHRoaXMpKTtcbn0sIF9DdXJ0YWluRWxlbWVudF9leHBhbmQgPSBmdW5jdGlvbiBfQ3VydGFpbkVsZW1lbnRfZXhwYW5kKCkge1xuICAgIGNvbnN0IHN0YXJ0SGVpZ2h0ID0gYCR7dGhpcy5vZmZzZXRIZWlnaHR9cHhgO1xuICAgIGNvbnN0IGVuZEhlaWdodCA9IGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIFwiZlwiKS5vZmZzZXRIZWlnaHQgKyBnZXRBYnNvbHV0ZUhlaWdodChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9jb250ZW50LCBcImZcIikpfXB4YDtcbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikuY2FuY2VsKCk7XG4gICAgfVxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgdGhpcy5hbmltYXRlKHtcbiAgICAgICAgaGVpZ2h0OiBbc3RhcnRIZWlnaHQsIGVuZEhlaWdodF1cbiAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0J1xuICAgIH0pLCBcImZcIik7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikub25maW5pc2ggPSAoKSA9PiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gpLmNhbGwodGhpcywgdHJ1ZSk7XG59LCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2ggPSBmdW5jdGlvbiBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gob3Blbikge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBudWxsLCBcImZcIik7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBmYWxzZSwgXCJmXCIpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycpO1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndG9nZ2xlJykpO1xufTtcbmNsYXNzIEFjY29yZGlvbkVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLnNldCh0aGlzLCBbXSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnZGV0YWlscycpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBcImZcIikuZm9yRWFjaCgoY3VydGFpbikgPT4ge1xuICAgICAgICAgICAgY3VydGFpbi5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJ0YWluLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucykuY2FsbCh0aGlzLCBjdXJ0YWluKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucyA9IG5ldyBXZWFrTWFwKCksIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucyA9IGZ1bmN0aW9uIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucyhjdXJ0YWluKSB7XG4gICAgY29uc3Qgb3RoZXJDdXJ0YWlucyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIFwiZlwiKS5maWx0ZXIoKGMpID0+IGN1cnRhaW4gIT09IGMpO1xuICAgIG90aGVyQ3VydGFpbnMuZm9yRWFjaCgob3RoZXJDdXJ0YWluKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnRhaW5FbGVtZW50ID0gb3RoZXJDdXJ0YWluO1xuICAgICAgICBjdXJ0YWluRWxlbWVudC5vcGVuID0gZmFsc2U7XG4gICAgfSk7XG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhY2NvcmRpb24tZWxlbWVudCcsIEFjY29yZGlvbkVsZW1lbnQpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjdXJ0YWluLWVsZW1lbnQnLCBDdXJ0YWluRWxlbWVudCwgeyBleHRlbmRzOiAnZGV0YWlscycgfSk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24sIF9CaXJ0aGRheUZvcm1fZGF5RmllbGQsIF9CaXJ0aGRheUZvcm1fbW9udGhGaWVsZCwgX0JpcnRoZGF5Rm9ybV9nZXREYXlWYWx1ZXMsIF9CaXJ0aGRheUZvcm1fZ2V0TW9udGhWYWx1ZXMsIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQsIF9CaXJ0aGRheUZvcm1fb25TdWNjZXNzLCBfQmlydGhkYXlGb3JtX29uRmFpbHVyZTtcbmltcG9ydCB7IGZvcm1hdERhdGUsIGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybywgZ2V0RnVsbE1vbnRoTmFtZSB9IGZyb20gJy4uL3V0aWwvZGF0ZUhlbHBlcic7XG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4uL3V0aWwvZW5kcG9pbnRzJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuY2xhc3MgQmlydGhkYXlGb3JtIGV4dGVuZHMgSFRNTEZvcm1FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbi5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpKTtcbiAgICAgICAgX0JpcnRoZGF5Rm9ybV9kYXlGaWVsZC5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKCcjYmlydGhkYXktZGF5JykpO1xuICAgICAgICBfQmlydGhkYXlGb3JtX21vbnRoRmllbGQuc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcignI2JpcnRoZGF5LW1vbnRoJykpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCkuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX29uU3VibWl0KS5iaW5kKHRoaXMpKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9kYXlGaWVsZCwgXCJmXCIpID09PSBudWxsIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkLCBcImZcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fZGF5RmllbGQsIFwiZlwiKS5vcHRpb25WYWx1ZXMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9nZXREYXlWYWx1ZXMpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fbW9udGhGaWVsZCwgXCJmXCIpLm9wdGlvblZhbHVlcyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzKS5jYWxsKHRoaXMpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQpLmJpbmQodGhpcykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uLCBcImZcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCkuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24gPSBuZXcgV2Vha01hcCgpLCBfQmlydGhkYXlGb3JtX2RheUZpZWxkID0gbmV3IFdlYWtNYXAoKSwgX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkID0gbmV3IFdlYWtNYXAoKSwgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQmlydGhkYXlGb3JtX2dldERheVZhbHVlcyA9IGZ1bmN0aW9uIF9CaXJ0aGRheUZvcm1fZ2V0RGF5VmFsdWVzKCkge1xuICAgIGNvbnN0IHJldHVyblZhbHVlID0ge307XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzE7IGkrKykge1xuICAgICAgICBjb25zdCBudW0gPSBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8oaSkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuVmFsdWVbbnVtXSA9IG51bTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xufSwgX0JpcnRoZGF5Rm9ybV9nZXRNb250aFZhbHVlcyA9IGZ1bmN0aW9uIF9CaXJ0aGRheUZvcm1fZ2V0TW9udGhWYWx1ZXMoKSB7XG4gICAgY29uc3QgcmV0dXJuVmFsdWUgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAxMjsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG51bSA9IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyhpKS50b1N0cmluZygpO1xuICAgICAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYDIwMjEtJHtudW19LTAyYCk7XG4gICAgICAgIGNvbnN0IG1vbnRoTmFtZSA9IGdldEZ1bGxNb250aE5hbWUoZGF0ZSk7XG4gICAgICAgIHJldHVyblZhbHVlW2ldID0gbW9udGhOYW1lO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59LCBfQmlydGhkYXlGb3JtX29uU3VibWl0ID0gZnVuY3Rpb24gX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdChldmVudCkge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgY29uc3QgZGF5ID0gZm9ybURhdGEuZ2V0KCdkYXknKTtcbiAgICBjb25zdCBtb250aCA9IGZvcm1EYXRhLmdldCgnbW9udGgnKTtcbiAgICBjb25zdCB5ZWFyID0gJzE5NzAnO1xuICAgIGlmICghZGF5IHx8ICFtb250aCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgJHt5ZWFyfS0ke21vbnRofS0ke2RheX1gKTtcbiAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICBhY3Rpb246ICdhamF4ZGF0ZW9mYmlydGgnLFxuICAgICAgICBkYXRlOiBmb3JtYXREYXRlKGRhdGUpXG4gICAgfTtcbiAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgZW5kcG9pbnRzLmFqYXgsIG51bGwsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX29uU3VjY2VzcykuYmluZCh0aGlzKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25GYWlsdXJlKS5iaW5kKHRoaXMpLCBldmVudCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbiwgXCJmXCIpKTtcbiAgICByZXR1cm4gZmFsc2U7XG59LCBfQmlydGhkYXlGb3JtX29uU3VjY2VzcyA9IGZ1bmN0aW9uIF9CaXJ0aGRheUZvcm1fb25TdWNjZXNzKCkge1xuICAgIGNvbnN0IGJsb2NrID0gdGhpcy5jbG9zZXN0KCdbaXM9XCJzaWdudXAtYmxvY2tcIl0nKTtcbiAgICBpZiAoIWJsb2NrKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgYmxvY2suY29tcGxldGVkID0gdHJ1ZTtcbn0sIF9CaXJ0aGRheUZvcm1fb25GYWlsdXJlID0gZnVuY3Rpb24gX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmUoKSB7XG4gICAgLy8gc3R1ZmZcbn07XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2JpcnRoZGF5LWZvcm0nLCBCaXJ0aGRheUZvcm0sIHsgZXh0ZW5kczogJ2Zvcm0nIH0pO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBfQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QsIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbiwgX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlciwgX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbCwgX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50LCBfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlLCBfQ2Fyb3VzZWxFbGVtZW50X2dldFRyYW5zbGF0ZVgsIF9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoO1xuaW1wb3J0IHsgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9wb2x5ZmlsbHMvbWF0Y2hNZWRpYSc7XG5jbGFzcyBDYXJvdXNlbEVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9pdGVtcy5zZXQodGhpcywgW10pO1xuICAgICAgICBfQ2Fyb3VzZWxFbGVtZW50X2xpc3Quc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfQ2Fyb3VzZWxFbGVtZW50X3ByZXZCdXR0b24uc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24uc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQuc2V0KHRoaXMsIDApO1xuICAgICAgICBfQ2Fyb3VzZWxFbGVtZW50X2NvdW50ZXIuc2V0KHRoaXMsIDMpO1xuICAgICAgICBfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsLnNldCh0aGlzLCAwKTtcbiAgICB9XG4gICAgZ2V0IGFjdGl2ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdhY3RpdmUnKTtcbiAgICB9XG4gICAgc2V0IGFjdGl2ZSh2YWx1ZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSgnYWN0aXZlJywgdmFsdWUpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zLCBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtaXRlbV0nKSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QsIHRoaXMucXVlcnlTZWxlY3RvcignW2RhdGEtaXRlbXNdJyksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X3ByZXZCdXR0b24sIHRoaXMucXVlcnlTZWxlY3RvcignW2RhdGEtcHJldl0nKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbiwgdGhpcy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1uZXh0XScpLCBcImZcIik7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QsIFwiZlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9wcmV2QnV0dG9uLCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSkuY2FsbCh0aGlzLCAtMSk7XG4gICAgICAgIH0pO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbiwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUpLmNhbGwodGhpcywgMSk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjb21wb25lbnRDaGVjayA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiAxMDIzcHgpJyk7XG4gICAgICAgIGNvbnN0IHNldHVwID0gKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGNvbXBvbmVudENoZWNrLm1hdGNoZXMgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kZWluaXRpYWxpemUoKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICAgICAgfTtcbiAgICAgICAgc2V0dXAoKTtcbiAgICAgICAgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIoY29tcG9uZW50Q2hlY2ssIHNldHVwLCBmYWxzZSk7XG4gICAgfVxuICAgIGRlaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IGZhbHNlO1xuICAgICAgICB3aW5kb3cuY2xlYXJJbnRlcnZhbChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwsIFwiZlwiKSk7XG4gICAgICAgIChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndHJhbnNmb3JtJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlKS5jYWxsKHRoaXMsIDApO1xuICAgICAgICBjb25zdCBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA0NzlweCknKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudCkuY2FsbCh0aGlzLCBtcSk7XG4gICAgICAgIG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyKG1xLCAoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50KS5jYWxsKHRoaXMsIG1xKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwsIHdpbmRvdy5zZXRJbnRlcnZhbCgoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5tYXRjaGVzKCc6aG92ZXInKSB8fCB0aGlzLm1hdGNoZXMoJzpmb2N1cy13aXRoaW4nKSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlKS5jYWxsKHRoaXMsIDEpO1xuICAgICAgICB9LCA3MDAwKSwgXCJmXCIpO1xuICAgIH1cbn1cbl9DYXJvdXNlbEVsZW1lbnRfaXRlbXMgPSBuZXcgV2Vha01hcCgpLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QgPSBuZXcgV2Vha01hcCgpLCBfQ2Fyb3VzZWxFbGVtZW50X3ByZXZCdXR0b24gPSBuZXcgV2Vha01hcCgpLCBfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24gPSBuZXcgV2Vha01hcCgpLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQgPSBuZXcgV2Vha01hcCgpLCBfQ2Fyb3VzZWxFbGVtZW50X2NvdW50ZXIgPSBuZXcgV2Vha01hcCgpLCBfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQgPSBmdW5jdGlvbiBfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQobXEpIHtcbiAgICBjb25zdCBpdGVtc1Nob3duID0gbXEubWF0Y2hlcyA/IDEgOiAyO1xuICAgIGlmIChpdGVtc1Nob3duIDwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zLCBcImZcIikubGVuZ3RoKSB7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gdHJ1ZTtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2NvdW50ZXIsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pdGVtcywgXCJmXCIpLmxlbmd0aCAtIGl0ZW1zU2hvd24sIFwiZlwiKTtcbn0sIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUgPSBmdW5jdGlvbiBfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlKGluY3JlbWVudCkge1xuICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QsIFwiZlwiKSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgXCJmXCIpICsgaW5jcmVtZW50LCBcImZcIik7XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBcImZcIikgPCAwKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlciwgXCJmXCIpLCBcImZcIik7XG4gICAgfVxuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgXCJmXCIpID4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2NvdW50ZXIsIFwiZlwiKSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgMCwgXCJmXCIpO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgXCJmXCIpLnN0eWxlLnRyYW5zZm9ybSA9IGB0cmFuc2xhdGVYKCR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfZ2V0VHJhbnNsYXRlWCkuY2FsbCh0aGlzLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgXCJmXCIpKX1weClgO1xufSwgX0Nhcm91c2VsRWxlbWVudF9nZXRUcmFuc2xhdGVYID0gZnVuY3Rpb24gX0Nhcm91c2VsRWxlbWVudF9nZXRUcmFuc2xhdGVYKGNvdW50KSB7XG4gICAgY29uc3QgbW9udGhXaWR0aCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X2dldEl0ZW1XaWR0aCkuY2FsbCh0aGlzKTtcbiAgICByZXR1cm4gLShtb250aFdpZHRoICogY291bnQpO1xufSwgX0Nhcm91c2VsRWxlbWVudF9nZXRJdGVtV2lkdGggPSBmdW5jdGlvbiBfQ2Fyb3VzZWxFbGVtZW50X2dldEl0ZW1XaWR0aCgpIHtcbiAgICBjb25zdCBpdGVtID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zLCBcImZcIilbMF07XG4gICAgaWYgKCFpdGVtKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBjb25zdCBpdGVtV2lkdGggPSBpdGVtLmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLndpZHRoO1xuICAgIGNvbnN0IGdyaWRHYXAgPSBwYXJzZUludCh3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgXCJmXCIpKS5jb2x1bW5HYXAsIDEwKTtcbiAgICByZXR1cm4gaXRlbVdpZHRoICsgZ3JpZEdhcDtcbn07XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2Nhcm91c2VsLWVsZW1lbnQnLCBDYXJvdXNlbEVsZW1lbnQpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0xhbmd1YWdlU3dpdGNoZXJfaW5zdGFuY2VzLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9nZXRWYWx1ZSwgX0xhbmd1YWdlU3dpdGNoZXJfb25DaGFuZ2U7XG5pbXBvcnQgTGF2YW5kcmVTZWxlY3QgZnJvbSAnLi9MYXZhbmRyZVNlbGVjdCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5ndWFnZVN3aXRjaGVyIGV4dGVuZHMgTGF2YW5kcmVTZWxlY3Qge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfTGFuZ3VhZ2VTd2l0Y2hlcl9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2xhbmd1YWdlLXN3aXRjaGVyJyk7XG4gICAgICAgIGNvbnN0IGpzb24gPSB0aGlzLmRhdGFzZXQuanNvbjtcbiAgICAgICAgaWYgKCFqc29uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pZCA9ICdkb21haW4tZHJvcGRvd24tZmllbGQnO1xuICAgICAgICB0aGlzLmljb24gPSAoX2IgPSAoX2EgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2FydCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Eub3V0ZXJIVE1MKSAhPT0gbnVsbCAmJiBfYiAhPT0gdm9pZCAwID8gX2IgOiAnJztcbiAgICAgICAgdGhpcy5vcHRpb25WYWx1ZXMgPSBKU09OLnBhcnNlKGpzb24pIHx8IFtdO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgaWYgKHRoaXMuaGFzQXR0cmlidXRlKCdkYXRhLWNoYW5nZScpKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhbmd1YWdlU3dpdGNoZXJfaW5zdGFuY2VzLCBcIm1cIiwgX0xhbmd1YWdlU3dpdGNoZXJfb25DaGFuZ2UpLmJpbmQodGhpcykpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5kaXNjb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhbmd1YWdlU3dpdGNoZXJfaW5zdGFuY2VzLCBcIm1cIiwgX0xhbmd1YWdlU3dpdGNoZXJfb25DaGFuZ2UpLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIHN1cGVyLnVwZGF0ZSgpO1xuICAgICAgICBjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lLnN1YnN0cmluZygwLCA0KTtcbiAgICAgICAgbGV0IHZhbHVlO1xuICAgICAgICBzd2l0Y2ggKHBhdGgpIHtcbiAgICAgICAgICAgIGNhc2UgJy9ubC8nOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9pbnN0YW5jZXMsIFwibVwiLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9nZXRWYWx1ZSkuY2FsbCh0aGlzLCAnTmVkZXJsYW5kcycpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnL2RlLyc6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYW5ndWFnZVN3aXRjaGVyX2luc3RhbmNlcywgXCJtXCIsIF9MYW5ndWFnZVN3aXRjaGVyX2dldFZhbHVlKS5jYWxsKHRoaXMsICdEZXV0c2NobGFuZCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnL2ZyLyc6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYW5ndWFnZVN3aXRjaGVyX2luc3RhbmNlcywgXCJtXCIsIF9MYW5ndWFnZVN3aXRjaGVyX2dldFZhbHVlKS5jYWxsKHRoaXMsICdGcmFuY2UnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYW5ndWFnZVN3aXRjaGVyX2luc3RhbmNlcywgXCJtXCIsIF9MYW5ndWFnZVN3aXRjaGVyX2dldFZhbHVlKS5jYWxsKHRoaXMsICdJbnRlcm5hdGlvbmFsJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsdWUgIT09IG51bGwgJiYgdmFsdWUgIT09IHZvaWQgMCA/IHZhbHVlIDogJ0ludGVybmF0aW9uYWwnO1xuICAgIH1cbn1cbl9MYW5ndWFnZVN3aXRjaGVyX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9MYW5ndWFnZVN3aXRjaGVyX2dldFZhbHVlID0gZnVuY3Rpb24gX0xhbmd1YWdlU3dpdGNoZXJfZ2V0VmFsdWUodmFsdWUpIHtcbiAgICBjb25zdCBtYXBwaW5nID0gdGhpcy5kYXRhc2V0Lm1hcHBpbmcgPyBKU09OLnBhcnNlKHRoaXMuZGF0YXNldC5tYXBwaW5nKSA6IHt9O1xuICAgIHJldHVybiBtYXBwaW5nW3ZhbHVlXSA/IHZhbHVlIDogJyc7XG59LCBfTGFuZ3VhZ2VTd2l0Y2hlcl9vbkNoYW5nZSA9IGZ1bmN0aW9uIF9MYW5ndWFnZVN3aXRjaGVyX29uQ2hhbmdlKCkge1xuICAgIGNvbnN0IHZhbHVlID0gdGhpcy5zZWxlY3RlZFZhbHVlO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBtYXBwaW5nID0gdGhpcy5kYXRhc2V0Lm1hcHBpbmcgPyBKU09OLnBhcnNlKHRoaXMuZGF0YXNldC5tYXBwaW5nKSA6IHt9O1xuICAgIGNvbnN0IHVybCA9IG5ldyBVUkwobWFwcGluZ1t2YWx1ZV0pO1xuICAgIGlmICghdXJsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB1cmwuaHJlZjtcbn07XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xhbmd1YWdlLXN3aXRjaGVyJywgTGFuZ3VhZ2VTd2l0Y2hlcik7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIF9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMsIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlLCBfTGF2YW5kcmVTZWxlY3RfbmFtZSwgX0xhdmFuZHJlU2VsZWN0X3BsYWNlaG9sZGVyLCBfTGF2YW5kcmVTZWxlY3RfaWNvbiwgX0xhdmFuZHJlU2VsZWN0X2lkLCBfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIsIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RPcHRpb24sIF9MYXZhbmRyZVNlbGVjdF9maWx0ZXIsIF9MYXZhbmRyZVNlbGVjdF9zaG93RHJvcGRvd24sIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd247XG5pbXBvcnQgeyBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8gfSBmcm9tICcuLi91dGlsL2RhdGVIZWxwZXInO1xuaW1wb3J0IHsgcGFyc2VTdHJpbmdBc0h0bWwgfSBmcm9tICcuLi91dGlsL2RvbSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhbmRyZVNlbGVjdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcihpZCA9ICcnLCBwbGFjZWhvbGRlciA9ICcnKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcy5zZXQodGhpcywgW10pO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZS5zZXQodGhpcywgJycpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3RfbmFtZS5zZXQodGhpcywgdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCAnJyk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9wbGFjZWhvbGRlci5zZXQodGhpcywgJycpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3RfaWNvbi5zZXQodGhpcywgJycpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3RfaWQuc2V0KHRoaXMsICcnKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X291dHNpZGVDbGlja0xpc3RlbmVyLnNldCh0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3QgPSB0YXJnZXQuY2xvc2VzdCgnLmxhdmFuZHJlLXNlbGVjdCcpO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQgfHwgY2xvc2VzdCA9PT0gbnVsbCB8fCBjbG9zZXN0ICE9PSB0aGlzKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93bikuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbGF2YW5kcmUtc2VsZWN0Jyk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTlBVVCcpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikuY2xhc3NMaXN0LmFkZCgnbGF2YW5kcmUtc2VsZWN0X19pbnB1dCcpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLm5hbWUgPSB0aGlzLm5hbWU7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikuYXV0b2NhcGl0YWxpemUgPSAnb2ZmJztcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5hdXRvY29tcGxldGUgPSAnb2ZmJztcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5wbGFjZWhvbGRlciA9IHBsYWNlaG9sZGVyO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmlkID0gaWQ7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0xBQkVMJyksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgXCJmXCIpLmNsYXNzTGlzdC5hZGQoJ2xhdmFuZHJlLXNlbGVjdF9fbGFiZWwnKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgXCJmXCIpLmlubmVyVGV4dCA9IHBsYWNlaG9sZGVyO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLCBcImZcIikuaHRtbEZvciA9IGlkO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwsIFwiZlwiKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1VMJyksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKS5jbGFzc0xpc3QuYWRkKCdsYXZhbmRyZS1zZWxlY3RfX2Ryb3Bkb3duJyk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpKTtcbiAgICB9XG4gICAgZ2V0IHBsYWNlaG9sZGVyKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfcGxhY2Vob2xkZXIsIFwiZlwiKTtcbiAgICB9XG4gICAgc2V0IHBsYWNlaG9sZGVyKHZhbHVlKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3BsYWNlaG9sZGVyLCB2YWx1ZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnBsYWNlaG9sZGVyID0gdmFsdWU7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwsIFwiZlwiKS5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGljb24oKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pY29uLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBpY29uKHZhbHVlKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2ljb24sIHZhbHVlLCBcImZcIik7XG4gICAgfVxuICAgIGdldCBpZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2lkLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBpZCh2YWx1ZSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pZCwgdmFsdWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5pZCA9IHZhbHVlO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLCBcImZcIikuaHRtbEZvciA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgbmFtZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X25hbWUsIFwiZlwiKTtcbiAgICB9XG4gICAgc2V0IG5hbWUodmFsdWUpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfbmFtZSwgdmFsdWUsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0IHNlbGVjdGVkVmFsdWUoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBzZWxlY3RlZFZhbHVlKHZhbHVlKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUsIHZhbHVlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikudmFsdWUgPSB2YWx1ZS5yZXBsYWNlKC9eMCsvLCAnJyk7XG4gICAgfVxuICAgIGdldCBvcHRpb25WYWx1ZXMoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMsIFwiZlwiKTtcbiAgICB9XG4gICAgc2V0IG9wdGlvblZhbHVlcyh2YWx1ZSkge1xuICAgICAgICBjb25zdCBhcnIgPSBPYmplY3QuZW50cmllcyh2YWx1ZSkuc29ydCgoWywgYV0sIFssIGJdKSA9PiBhIC0gYik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcywgYXJyLCBcImZcIik7XG4gICAgICAgIHRoaXMudXBkYXRlKCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2lucHV0JywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X2ZpbHRlcikuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3Rfc2hvd0Ryb3Bkb3duKS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfZmlsdGVyKS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdmb2N1cycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9zaG93RHJvcGRvd24pLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICB1cGRhdGUoKSB7XG4gICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcywgXCJmXCIpKSB7XG4gICAgICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbikuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnbGF2YW5kcmUtc2VsZWN0X19kcm9wZG93bl9faXRlbScpO1xuICAgICAgICAgICAgaWYgKHRoaXMuaWNvbikge1xuICAgICAgICAgICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZChwYXJzZVN0cmluZ0FzSHRtbCh0aGlzLmljb24sICdzdmcnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzcGFuID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc3BhbicpO1xuICAgICAgICAgICAgc3Bhbi5jbGFzc0xpc3QuYWRkKCdsYXZhbmRyZS1zZWxlY3RfX2Ryb3Bkb3duX19pdGVtX190ZXh0Jyk7XG4gICAgICAgICAgICBzcGFuLmlubmVyVGV4dCA9IHZhbHVlLnJlcGxhY2UoL14wKy8sICcnKTtcbiAgICAgICAgICAgIG9wdGlvbi5hcHBlbmRDaGlsZChzcGFuKTtcbiAgICAgICAgICAgIGNvbnN0IHZhbHVlMiA9IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyh2YWx1ZSkudG9TdHJpbmcoKTtcbiAgICAgICAgICAgIG9wdGlvbi5kYXRhc2V0LnZhbHVlID0gdmFsdWUyO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpLmFwcGVuZENoaWxkKG9wdGlvbik7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmlyc3RPcHRpb24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5sYXZhbmRyZS1zZWxlY3RfX2Ryb3Bkb3duX19pdGVtJyk7XG4gICAgICAgIGlmICghZmlyc3RPcHRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmaXJzdE9wdGlvbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG4gICAgfVxufVxuX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZSA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9uYW1lID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X3BsYWNlaG9sZGVyID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X2ljb24gPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3RfaWQgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbiA9IGZ1bmN0aW9uIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RPcHRpb24oZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQuZGF0YXNldC52YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24pLmNhbGwodGhpcyk7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgnY2hhbmdlJywgeyBkZXRhaWw6IHsgdmFsdWUgfSB9KSk7XG59LCBfTGF2YW5kcmVTZWxlY3RfZmlsdGVyID0gZnVuY3Rpb24gX0xhdmFuZHJlU2VsZWN0X2ZpbHRlcigpIHtcbiAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXZhbmRyZS1zZWxlY3RfX2Ryb3Bkb3duX19pdGVtJykpO1xuICAgIGNvbnN0IHZhbHVlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IG9wdGlvbi5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRleHQuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBvcHRpb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcHRpb24uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufSwgX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93biA9IGZ1bmN0aW9uIF9MYXZhbmRyZVNlbGVjdF9zaG93RHJvcGRvd24oKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpLmhpZGRlbiA9IGZhbHNlO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIsIFwiZlwiKSk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0sIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24gPSBmdW5jdGlvbiBfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duKCkge1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIsIFwiZlwiKSk7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn07XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xhdmFuZHJlLXNlbGVjdCcsIExhdmFuZHJlU2VsZWN0KTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfTGF2YW5kcmVUb2dnbGVfaW5zdGFuY2VzLCBfTGF2YW5kcmVUb2dnbGVfZWxlbWVudHMsIF9MYXZhbmRyZVRvZ2dsZV90b2dnbGVzLCBfTGF2YW5kcmVUb2dnbGVfY2xpY2tIYW5kbGVyO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF2YW5kcmVUb2dnbGUgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9MYXZhbmRyZVRvZ2dsZV9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfTGF2YW5kcmVUb2dnbGVfZWxlbWVudHMuc2V0KHRoaXMsIFtdKTtcbiAgICAgICAgX0xhdmFuZHJlVG9nZ2xlX3RvZ2dsZXMuc2V0KHRoaXMsIFtdKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlVG9nZ2xlX2VsZW1lbnRzLCBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbmFtZV0nKSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVUb2dnbGVfdG9nZ2xlcywgQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXRvZ2dsZV0nKSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVUb2dnbGVfdG9nZ2xlcywgXCJmXCIpLmZvckVhY2goKHRvZ2dsZSkgPT4ge1xuICAgICAgICAgICAgdG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVUb2dnbGVfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlVG9nZ2xlX2NsaWNrSGFuZGxlcikuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVRvZ2dsZV9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVUb2dnbGVfY2xpY2tIYW5kbGVyKS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgfVxufVxuX0xhdmFuZHJlVG9nZ2xlX2VsZW1lbnRzID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlVG9nZ2xlX3RvZ2dsZXMgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVUb2dnbGVfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0xhdmFuZHJlVG9nZ2xlX2NsaWNrSGFuZGxlciA9IGZ1bmN0aW9uIF9MYXZhbmRyZVRvZ2dsZV9jbGlja0hhbmRsZXIoKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVUb2dnbGVfZWxlbWVudHMsIFwiZlwiKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgIGVsZW1lbnQudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nLCAhZWxlbWVudC5oaWRkZW4pO1xuICAgIH0pO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGF2YW5kcmUtdG9nZ2xlJywgTGF2YW5kcmVUb2dnbGUpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0xhenlCYWNrZ3JvdW5kX2luc3RhbmNlcywgX0xhenlCYWNrZ3JvdW5kX2xvYWRIYW5kbGVyO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUJhY2tncm91bmQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9MYXp5QmFja2dyb3VuZF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF6eUJhY2tncm91bmRfaW5zdGFuY2VzLCBcIm1cIiwgX0xhenlCYWNrZ3JvdW5kX2xvYWRIYW5kbGVyKS5jYWxsKHRoaXMpO1xuICAgIH1cbn1cbl9MYXp5QmFja2dyb3VuZF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfTGF6eUJhY2tncm91bmRfbG9hZEhhbmRsZXIgPSBmdW5jdGlvbiBfTGF6eUJhY2tncm91bmRfbG9hZEhhbmRsZXIoKSB7XG4gICAgaWYgKCEoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpKSB7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGxhenlCYWNrZ3JvdW5kT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgbGF6eUJhY2tncm91bmRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfSk7XG4gICAgbGF6eUJhY2tncm91bmRPYnNlcnZlci5vYnNlcnZlKHRoaXMpO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbHYtbGF6eS1iYWNrZ3JvdW5kJywgTGF6eUJhY2tncm91bmQsIHsgZXh0ZW5kczogJ2Zvb3RlcicgfSk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgX1NpZ251cEJsb2NrX3RlbXBsYXRlLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgX1NpZ251cEJsb2NrX2hyZWYsIF9TaWdudXBCbG9ja19wb2ludHMsIF9TaWdudXBCbG9ja190eXBlLCBfU2lnbnVwQmxvY2tfY29tcGxldGVkLCBfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeSwgX1NpZ251cEJsb2NrX21xLCBfU2lnbnVwQmxvY2tfaXNNb2JpbGUsIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlLCBfU2lnbnVwQmxvY2tfc2V0VGVtcGxhdGUsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLCBfU2lnbnVwQmxvY2tfY2xpY2tIYW5kbGVyLCBfU2lnbnVwQmxvY2tfc2V0T3ZlcmxheUV2ZW50TGlzdGVuZXJzLCBfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGU7XG5pbXBvcnQgeyBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lciwgbWF0Y2hNZWRpYVJlbW92ZUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9wb2x5ZmlsbHMvbWF0Y2hNZWRpYSc7XG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4uL3V0aWwvZW5kcG9pbnRzJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbnVwQmxvY2sgZXh0ZW5kcyBIVE1MTElFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9TaWdudXBCbG9ja190ZW1wbGF0ZS5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9TaWdudXBCbG9ja19vdmVybGF5LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX2hyZWYuc2V0KHRoaXMsIHRoaXMuZGF0YXNldC5ocmVmIHx8IG51bGwpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfcG9pbnRzLnNldCh0aGlzLCBOdW1iZXIodGhpcy5kYXRhc2V0LnBvaW50cykgfHwgMCk7XG4gICAgICAgIF9TaWdudXBCbG9ja190eXBlLnNldCh0aGlzLCB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpIHx8ICcnKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX2NvbXBsZXRlZC5zZXQodGhpcywgdGhpcy5oYXNBdHRyaWJ1dGUoJ2NvbXBsZXRlZCcpIHx8IGZhbHNlKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX21lZGlhUXVlcnkuc2V0KHRoaXMsIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXRhYmxldC1sYW5kc2NhcGUnKSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19tcS5zZXQodGhpcywgbWF0Y2hNZWRpYShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tZWRpYVF1ZXJ5LCBcImZcIikpKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX2lzTW9iaWxlLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlci5zZXQodGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIFwiZlwiKS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfc2V0VGVtcGxhdGUpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfc2V0T3ZlcmxheUV2ZW50TGlzdGVuZXJzKS5jYWxsKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLnNldCh0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19jbGlja0hhbmRsZXIuc2V0KHRoaXMsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheGFkZGxveWFsdHlwb2ludHMnLFxuICAgICAgICAgICAgICAgIHBvaW50czogU3RyaW5nKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3BvaW50cywgXCJmXCIpKSxcbiAgICAgICAgICAgICAgICBwb29sOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfdHlwZSwgXCJmXCIpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIGVuZHBvaW50cy5hamF4LCBudWxsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19ocmVmLCBcImZcIiksICdfYmxhbmsnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBjb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19jb21wbGV0ZWQsIFwiZlwiKTtcbiAgICB9XG4gICAgc2V0IGNvbXBsZXRlZCh2YWx1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX2NvbXBsZXRlZCwgdmFsdWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfdGVtcGxhdGUsIG51bGwsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgbnVsbCwgXCJmXCIpO1xuICAgICAgICAoX2EgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb2ludHMtZ3JpZF9fb3ZlcmxheScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19zZXRUZW1wbGF0ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgY29uc3QgdGl0bGVzID0gQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb2ludHMtZ3JpZF9fdGl0bGUtY29udGVudCcpKTtcbiAgICAgICAgdGl0bGVzLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgICAgICAgICB0aXRsZS50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicsICF0aXRsZS5oaWRkZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlKS5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaXNNb2JpbGUsIFwiZlwiKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbXEsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUpKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICBtYXRjaE1lZGlhUmVtb3ZlRXZlbnRMaXN0ZW5lcihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tcSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSkpO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaHJlZiwgXCJmXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfY2xpY2tIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICB9XG4gICAgfVxufVxuX1NpZ251cEJsb2NrX3RlbXBsYXRlID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX292ZXJsYXkgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfaHJlZiA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19wb2ludHMgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfdHlwZSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19jb21wbGV0ZWQgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19tcSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19pc01vYmlsZSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19jbGlja0hhbmRsZXIgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUgPSBmdW5jdGlvbiBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSgpIHtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja19pc01vYmlsZSwgIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21xLCBcImZcIikubWF0Y2hlcywgXCJmXCIpO1xuICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pc01vYmlsZSwgXCJmXCIpO1xufSwgX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlID0gZnVuY3Rpb24gX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3RlbXBsYXRlLCBcImZcIikpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfdGVtcGxhdGUsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19nZXRUZW1wbGF0ZSkuY2FsbCh0aGlzKSwgXCJmXCIpO1xuICAgIH1cbiAgICB0aGlzLmFwcGVuZENoaWxkKChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3RlbXBsYXRlLCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgdGhpcy5xdWVyeVNlbGVjdG9yKCcucG9pbnRzLWdyaWRfX292ZXJsYXknKSwgXCJmXCIpO1xuICAgIGNvbnN0IGNsb3NlT3ZlcmxheUJ1dHRvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignW2RhdGEtY2xvc2VdJyk7XG4gICAgaWYgKCFjbG9zZU92ZXJsYXlCdXR0b24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbG9zZU92ZXJsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciwgXCJmXCIpLmJpbmQodGhpcyksIGZhbHNlKTtcbn0sIF9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfU2lnbnVwQmxvY2tfc2V0T3ZlcmxheUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaHJlZiwgXCJmXCIpKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltpcz1cImxhdmFuZHJlLWJ1dHRvblwiXScpO1xuICAgICAgICBpZiAoIWJ1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciwgXCJmXCIpKTtcbiAgICB9XG59LCBfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGUgPSBmdW5jdGlvbiBfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pbnRzLWdyaWQtb3ZlcmxheScpO1xuICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvZ2dlZC1pbicpKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2NvbXBsZXRlZCwgXCJmXCIpKSB7XG4gICAgICAgIHJldHVybiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBvaW50cy1ncmlkLW92ZXJsYXktLWNvbXBsZXRlZC0tJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja190eXBlLCBcImZcIil9YCkgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2ludHMtZ3JpZC1vdmVybGF5LS1jb21wbGV0ZWQnKSk7XG4gICAgfVxuICAgIGNvbnN0IHR5cGVUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwb2ludHMtZ3JpZC1vdmVybGF5LS0ke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3R5cGUsIFwiZlwiKX1gKTtcbiAgICBpZiAodHlwZVRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiB0eXBlVGVtcGxhdGU7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NpZ251cC1ibG9jaycsIFNpZ251cEJsb2NrLCB7IGV4dGVuZHM6ICdsaScgfSk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX0xhdmFuZHJlQnV0dG9uX2lzRGlzYWJsZWQ7XG5pbXBvcnQgJy4vc3R5bGUucGNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhbmRyZUJ1dHRvbiBleHRlbmRzIEhUTUxCdXR0b25FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0xhdmFuZHJlQnV0dG9uX2lzRGlzYWJsZWQuc2V0KHRoaXMsIHRoaXMuaGFzQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykpO1xuICAgICAgICB0aGlzLmNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaHJlZiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuaHJlZjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2lzJywgJ2xhdmFuZHJlLWJ1dHRvbicpO1xuICAgIH1cbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyVGV4dDtcbiAgICB9XG4gICAgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBocmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJztcbiAgICB9XG4gICAgc2V0IGhyZWYodXJsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc2l6ZScpIHx8ICcnO1xuICAgIH1cbiAgICBzZXQgc2l6ZSh1cmwpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCB1cmwpO1xuICAgIH1cbiAgICBnZXQgcHJpbWFyeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBwcmltYXJ5KGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ByaW1hcnknLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgb3V0bGluZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBvdXRsaW5lKGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ291dGxpbmUnLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgbGluaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdsaW5rJyk7XG4gICAgfVxuICAgIHNldCBsaW5rKGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2xpbmsnLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgZnVsbFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgc2V0IGZ1bGxXaWR0aChib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmdWxsLXdpZHRoJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IGxvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgncHJpbWFyeScpO1xuICAgIH1cbiAgICBzZXQgbG9hZGluZyhib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IGlzRGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZUJ1dHRvbl9pc0Rpc2FibGVkLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBpc0Rpc2FibGVkKHZhbHVlKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlQnV0dG9uX2lzRGlzYWJsZWQsIHZhbHVlLCBcImZcIik7XG4gICAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdmFsdWUpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbl9MYXZhbmRyZUJ1dHRvbl9pc0Rpc2FibGVkID0gbmV3IFdlYWtNYXAoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImV2ZW50RW1pdHRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXplQ29tcG9uZW50cyIsIm9uIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJjb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsIm9uSW5pdCIsIkFqYXhMb2dpbiIsIkFqYXhSZWdpc3RlciIsIkNvb2tpZUJhciIsIkNvcHlDb3Vwb24iLCJDdXJ0YWluIiwiRW1haWxWYWxpZGF0aW9uIiwiRmllbGRWYWxpZGF0aW9uIiwiRm9yZ290UGFzc3dvcmQiLCJGb3Jnb3RQYXNzd29yZFRvZ2dsZSIsIkhlYWRlclNlYXJjaCIsIkluZm9Qb3B1cCIsIkxhenlMb2FkZXIiLCJOZXdzbGV0dGVyU3Vic2NyaWJlIiwiUGFzc3dvcmRSZXZlYWwiLCJSZWRlZW1Qb2ludHNGb3JDb3Vwb24iLCJTY3JvbGxUb0NvbnRlbnQiLCJWaWRlb01lZGlhUmVzb2x2ZXIiLCJMYW5ndWFnZVBvcHVwIiwiU2lkZVBhbmVsIiwic2V0Q3VycmVudExpbmtDbGFzcyIsIkxhdmFuZHJlQnV0dG9uIiwiQXBwIiwiYXJndW1lbnRzIiwid3BGb3Jtc1N1Ym1pdEJ1dHRvbnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYXBwSW5pdCIsImFwcCIsImZvb3RlclVzcFNsaWRlciIsInNldFRpbWVvdXQiLCJsaXN0IiwicXVlcnlTZWxlY3RvciIsIml0ZW1zIiwidG90YWxXaWR0aCIsIml0ZW0iLCJjbGllbnRXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJ3aW5kb3ciLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsImV4dGVuZHMiLCJEYXRhTGF5ZXIiLCJkYXRhTGF5ZXIiLCJwdXNoIiwiZGF0YSIsImVjb21tZXJjZSIsIkNvbXBvbmVudCIsImxvYWRSZWNhcHRjaGEiLCJzaXRla2V5Iiwic2VuZEFqYXhSZXF1ZXN0Iiwic2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJmb3JtIiwiYWpheEVuZHBvaW50IiwibG9jYXRpb24iLCJvcmlnaW4iLCJpc1ZhbGlkIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJmaWVsZHMiLCJDeXByZXNzIiwiaW5kZXgiLCJsZW5ndGgiLCJmaWVsZCIsInZhbGlkYXRvciIsIm1hdGNoZXMiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJzdWJtaXRCdXR0b24iLCJ0eXBlIiwiYWRkRXZlbnRMaXN0ZW5lciIsImV2ZW50Iiwib25TdWJtaXQiLCJfYSIsIl9iIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZCIsInZhbGlkaXR5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInVzZXJuYW1lIiwiZ2V0IiwidG9TdHJpbmciLCJwYXNzd29yZCIsImdyZWNhcHRjaGEiLCJhY3Rpb24iLCJyZWNhcHRjaGFUb2tlbiIsInVuZGVmaW5lZCIsInJlYWR5IiwiZXhlY3V0ZSIsInRoZW4iLCJ0b2tlbiIsIm9uU3VjY2VzcyIsImJpbmQiLCJvbkZhaWx1cmUiLCJyZXMiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJFcnJvciIsIm1ldGhvZCIsImhyZWYiLCJkYXRhc2V0IiwicmVkaXJlY3RVcmwiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwibG9naW5Gb3JtcyIsImFqYXhMb2dpbiIsIkNvbmZpcm1WYWxpZGF0aW9uIiwiZW1haWxGaWVsZCIsImVtYWlsVmFsaWRhdGlvbiIsInBhc3N3b3JkRmllbGQiLCJjb25maXJtUGFzc3dvcmRGaWVsZCIsImNvbmZpcm1WYWxpZGF0aW9uIiwiX2MiLCJfZCIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicmVnaXN0ZXJGb3JtIiwiYWpheFJlZ2lzdGVyIiwiY29uZmlybUZpZWxkIiwiZXZlbnRzIiwidmFsdWUiLCJzZXRDdXN0b21WYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiZiIsIlR5cGVFcnJvciIsImhhcyIsImNhbGwiLCJzZXQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiX0Nvb2tpZUJhcl9pbnN0YW5jZXMiLCJfQ29va2llQmFyX2VsZW1lbnQiLCJfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCIsIl9Db29raWVCYXJfYWNjZXB0QnV0dG9uIiwiX0Nvb2tpZUJhcl9nZXRFbGVtZW50IiwiX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzIiwiZ2V0Q29va2llVmFsdWUiLCJzZXRDb29raWVWYWx1ZSIsImFkZCIsImNvb2tpZU5hbWUiLCJyZW1vdmUiLCJzZXRBY2NlcHRDb29raWUiLCJjb29raWVCYXIiLCJXZWFrTWFwIiwiV2Vha1NldCIsImNsb25lIiwiY2xvbmVOb2RlIiwiY29udGVudCIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIl9Db3B5Q291cG9uX2J1dHRvbiIsIm9uQ2xpY2siLCJjb2RlIiwidGV4dCIsImNvcGllZFRleHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJpbm5lclRleHQiLCJjb3B5QnV0dG9ucyIsImNvcHlDb3Vwb24iLCJfQ3VydGFpbl9pbnN0YW5jZXMiLCJfQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIiLCJfQ3VydGFpbl9oYW5kbGVUcmFuc2l0aW9uIiwiZm9sZEJ1dHRvbiIsIm9ubHlPbk1vYmlsZSIsImRlZmF1bHRIZWlnaHQiLCJnZXRDb21wdXRlZFN0eWxlIiwibWF4SGVpZ2h0IiwiZSIsImlubmVyV2lkdGgiLCJjbGFzc0xpc3QiLCJjb250YWlucyIsInNjcm9sbEhlaWdodCIsInJlYWRMZXNzIiwicmVhZE1vcmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlcyIsInRvZ2dsZSIsImN1cnRhaW5Ub2dnbGUiLCJjdXJ0YWluIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1vdmVFeGlzdGluZ1ZhbGlkYXRpb25NZXNzYWdlcyIsImVtYWlsSW5wdXQiLCJjbG9zZXN0IiwiYmx1clRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVCbHVyRXZlbnQiLCJzZWN1cml0eSIsImVycm9yIiwicmVnaXN0ZXJFbWFpbElucHV0IiwiYW5jaG9yIiwicGFzc3dvcmRGb3JnZXRBbmNob3IiLCJmaWVsZFZhbGlkYXRpb24iLCJ1c2VyX2xvZ2luIiwicGFzc3dvcmRGb3JnZXRMaW5rcyIsImxpbmsiLCJmb3Jnb3RQYXNzd29yZCIsInBhc3N3b3JkRm9yZ2V0V3JhcHBlciIsImdldEVsZW1lbnRCeUlkIiwibG9naW5XcmFwcGVyIiwidG9nZ2xlQXR0cmlidXRlIiwiZG9jdW1lbnRDbGlja0hhbmRsZXIiLCJldmVudFRhcmdldCIsInRhcmdldCIsIndpdGhpbkhlYWRlciIsImJvZHkiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzZWFyY2hJbnB1dEVsZW1lbnQiLCJmb2N1cyIsImhlYWRlclNlYXJjaCIsImluc3RhbmNlIiwic2hvd1RpcHB5IiwidGlwcHkiLCJ0aGVtZSIsImFsbG93SFRNTCIsImhpZGVPbkNsaWNrIiwic2hvd09uQ3JlYXRlIiwiaW50ZXJhY3RpdmUiLCJvbkhpZGRlbiIsImkiLCJkZXN0cm95Iiwic2hvdyIsImhpZGVXaXRoSW50ZXJhY3Rpdml0eSIsInRpcHB5RWxlbWVudHMiLCJ0aXBweUVsZW1lbnQiLCJpbmZvUG9wdXAiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzIiwib25JbnRlcnNlY3Rpb25PYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwibGF6eWxvYWQiLCJPYnNlcnZlckNsYXNzIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwibGF6eUltYWdlT2JzZXJ2ZXIiLCJlbnRyaWVzIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsIkhUTUxQaWN0dXJlRWxlbWVudCIsImxhenkiLCJ1bm9ic2VydmUiLCJkaXNjb25uZWN0Iiwib2JzZXJ2ZSIsImxhenlJbWFnZSIsImVsIiwibWFuYWdlQ3NzQ2xhc3NlcyIsImltYWdlIiwibG9hZGluZ1NwaW5uZXIiLCJIVE1MSW1hZ2VFbGVtZW50IiwiSFRNTFNvdXJjZUVsZW1lbnQiLCJzaXplcyIsInNyY3NldCIsInNyYyIsImxhenlsb2FkRWxlbWVudHMiLCJjb21wYW55TmFtZSIsInJlbW92ZUVycm9yVGV4dCIsImFwcGVuZFN1Y2Nlc3NUZXh0IiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiZXZlbnRMYWJlbCIsImlkIiwiYXBwZW5kRXJyb3JUZXh0IiwiZm9ybXMiLCJuZXdzbGV0dGVyU3Vic2NyaWJlIiwicGFzc3dvcmRJbnB1dCIsImNyZWF0ZVJldmVhbEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0YWJJbmRleCIsInBhc3N3b3JkUm93cyIsInBhc3N3b3JkUm93IiwicGFzc3dvcmRSZXZlYWwiLCJfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiIsImVuZHBvaW50cyIsImFqYXgiLCJyZWRlZW1CdXR0b25zIiwicmVkZWVtUG9pbnRzRm9yQ291cG9uIiwiX1Njcm9sbFRvQ29udGVudF9lbGVtZW50IiwiX1Njcm9sbFRvQ29udGVudF90YXJnZXQiLCJzY3JvbGxUb1RhcmdldCIsImhlYWRlck9mZnNldCIsInRhcmdldElkIiwic2Nyb2xsVG8iLCJfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcyIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcyIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfdGltZW91dCIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplIiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl9zaG93U291cmNlIiwibWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIiLCJtcSIsIm1hdGNoTWVkaWEiLCJtcTIiLCJzb3VyY2UiLCJvcmllbnRhdGlvbiIsIm1heFdpZHRoIiwiTnVtYmVyIiwiY3VycmVudE9yaWVudGF0aW9uIiwiY3VycmVudFdpZHRoIiwiZGF0YVNyYyIsImNhbGxiYWNrIiwiZXZlbnRCdWJibGluZyIsImFkZExpc3RlbmVyIiwibWF0Y2hNZWRpYVJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImRpYWxvZ1BvbHlmaWxsIiwiZGlzYWJsZUJvZHlTY3JvbGwiLCJlbmFibGVCb2R5U2Nyb2xsIiwidG9DYW1lbENhc2UiLCJEaWFsb2ciLCJfaXNPcGVuIiwiX3RyYW5zaXRpb25UaW1lIiwiaXNPcGVuIiwiY2FtZWxEYXRhQXR0cmlidXRlIiwiZGF0YUF0dHJpYnV0ZSIsInJlcGxhY2UiLCJ0cmFuc2l0aW9uVGltZSIsImdldFRyYW5zaXRpb25UaW1lIiwicG9seWZpbGxEaWFsb2ciLCJvcGVuIiwiY2xvc2VCdXR0b25zIiwiY2xvc2UiLCJvdXRzaWRlQ2xpY2siLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpY2tlZEluRGlhbG9nIiwidG9wIiwiY2xpZW50WSIsImhlaWdodCIsImxlZnQiLCJjbGllbnRYIiwic2hvd01vZGFsIiwiY2xhc3NlcyIsImNsb3NlZCIsInN0eWxlcyIsInRyYW5zaXRpb25EdXJhdGlvbiIsImR1cmF0aW9uIiwiaW5kZXhPZiIsInBhcnNlRmxvYXQiLCJyZWdpc3RlckRpYWxvZyIsIlBvcHVwIiwicGF0aCIsInBhdGhuYW1lIiwicHJlZmVycmVkTGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInN1YnN0cmluZyIsInBvcHVwIiwib3BlblBvcHVwIiwiZG9tYWluRHJvcGRvd24iLCJzdGF5RG9tYWluQnV0dG9uIiwib3RoZXJEb21haW5CdXR0b25zIiwic3VibWl0RG9tYWluQnV0dG9uIiwiQ3VzdG9tRXZlbnQiLCJvdGhlckRvbWFpbkJ1dHRvbiIsImNvbnRhaW5lcnMiLCJjb250YWluZXIiLCJzZWxlY3RlZFZhbHVlIiwibWFwcGluZyIsInVybCIsIlVSTCIsInBvcHVwSUQiLCJ0ZW1wbGF0ZSIsIkhUTUxBbmNob3JFbGVtZW50IiwiZW1pdCIsInBvcHVwSW5zdGFuY2UiLCJvcGVuRXZlbnQiLCJwb3B1cExpbmtzIiwiaGFuZGxlQ3JlYXRpb25FdmVudCIsInJpZ2h0Iiwib3BlblNpZGVQYW5lbCIsInBhbmVsSUQiLCJwYW5lbCIsInNpZGVQYW5lbEluc3RhbmNlIiwidG9nZ2xlRXZlbnQiLCJwYW5lbExpbmtzIiwiYm9keUVsZW1lbnQiLCJzY3JvbGxQb3NpdGlvbiIsInBhZ2VZT2Zmc2V0Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEJlaGF2aW9yIiwibmFtZSIsImNvb2tpZSIsInNwbGl0IiwiZmluZCIsInJvdyIsInN0YXJ0c1dpdGgiLCJjb29raWVPcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwidXBkYXRlZENvb2tpZSIsIm9wdGlvbktleSIsIm9wdGlvblZhbHVlIiwiaXNEYXRlVmFsaWQiLCJkYXRlIiwiaXNOYU4iLCJnZXRUaW1lIiwiZm9ybWF0RGF0ZSIsImRheSIsImZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJudW1iZXIiLCJTdHJpbmciLCJwYWRTdGFydCIsImdldEZ1bGxNb250aE5hbWUiLCJsb2NhbGUiLCJ0b0xvY2FsZVN0cmluZyIsInBhcnNlU3RyaW5nQXNIdG1sIiwiZG9tUGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VkIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2V0QWJzb2x1dGVIZWlnaHQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJNYXRoIiwiY2VpbCIsIm9mZnNldEhlaWdodCIsInBhdGhOYW1lIiwiZm9ybWF0dGVkUGF0aE5hbWUiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJmdWxsVXJsIiwiZm9ybWF0dGVkVXJsIiwiYW5jaG9ycyIsInN0ciIsImVuZHNXaXRoIiwic2xpY2UiLCJsb2FkZWQiLCJsb29wVGhyb3VnaEVsZW1lbnRzIiwiaW5zZXJ0UmVjYXB0Y2hhU2NyaXB0IiwiaGVhZCIsImdldEVsZW1lbnRzQnlUYWdOYW1lIiwic2NyaXB0IiwiYWRkRXZlbnQiLCJldnQiLCJkZWZhdWx0T2Zmc2V0IiwiYm9keVRvcFBvc2l0aW9uIiwiZWxlbWVudFBvc2l0aW9uIiwib2Zmc2V0IiwiaGVhZGVyIiwiY2xpZW50SGVpZ2h0Iiwib2Zmc2V0UG9zaXRpb24iLCJiZWhhdmlvciIsIm1hdGNoIiwiY2hyIiwidG9VcHBlckNhc2UiLCJ0b1RpdGxlQ2FzZSIsInR4dCIsImNoYXJBdCIsInN1YnN0ciIsInRvTG93ZXJDYXNlIiwiZm9ybVJvdyIsImZvcm1Sb3dQYXJlbnQiLCJ2YWxpZGF0aW9uRWxlbWVudCIsInRleHRDb250ZW50IiwiaW5zZXJ0QmVmb3JlIiwiZ3JhbmRwYXJlbnQiLCJleGlzdGluZ1ZhbGlkYXRpb25zIiwidiIsIl9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMiLCJfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSIsIl9DdXJ0YWluRWxlbWVudF9jb250ZW50IiwiX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZyIsIl9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24iLCJfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2siLCJfQ3VydGFpbkVsZW1lbnRfb3BlbiIsIl9DdXJ0YWluRWxlbWVudF9leHBhbmQiLCJfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2giLCJfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMiLCJfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucyIsIl9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucyIsIkN1cnRhaW5FbGVtZW50IiwiSFRNTERldGFpbHNFbGVtZW50IiwiaGFzQXR0cmlidXRlIiwiY29ubmVjdGVkQ2FsbGJhY2siLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwiY2FuY2VsIiwiYW5pbWF0ZSIsImVhc2luZyIsIm9uZmluaXNoIiwib25jYW5jZWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJBY2NvcmRpb25FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJvdGhlckN1cnRhaW5zIiwiZmlsdGVyIiwiYyIsIm90aGVyQ3VydGFpbiIsImN1cnRhaW5FbGVtZW50IiwiX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMiLCJfQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbiIsIl9CaXJ0aGRheUZvcm1fZGF5RmllbGQiLCJfQmlydGhkYXlGb3JtX21vbnRoRmllbGQiLCJfQmlydGhkYXlGb3JtX2dldERheVZhbHVlcyIsIl9CaXJ0aGRheUZvcm1fZ2V0TW9udGhWYWx1ZXMiLCJfQmlydGhkYXlGb3JtX29uU3VibWl0IiwiX0JpcnRoZGF5Rm9ybV9vblN1Y2Nlc3MiLCJfQmlydGhkYXlGb3JtX29uRmFpbHVyZSIsIkJpcnRoZGF5Rm9ybSIsIkhUTUxGb3JtRWxlbWVudCIsIm9wdGlvblZhbHVlcyIsInJldHVyblZhbHVlIiwibnVtIiwiRGF0ZSIsIm1vbnRoTmFtZSIsInllYXIiLCJibG9jayIsImNvbXBsZXRlZCIsIl9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzIiwiX0Nhcm91c2VsRWxlbWVudF9pdGVtcyIsIl9DYXJvdXNlbEVsZW1lbnRfbGlzdCIsIl9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbiIsIl9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbiIsIl9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCIsIl9DYXJvdXNlbEVsZW1lbnRfY291bnRlciIsIl9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwiLCJfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQiLCJfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlIiwiX0Nhcm91c2VsRWxlbWVudF9nZXRUcmFuc2xhdGVYIiwiX0Nhcm91c2VsRWxlbWVudF9nZXRJdGVtV2lkdGgiLCJDYXJvdXNlbEVsZW1lbnQiLCJhY3RpdmUiLCJjb21wb25lbnRDaGVjayIsInNldHVwIiwiZGVpbml0aWFsaXplIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiaXRlbXNTaG93biIsImluY3JlbWVudCIsInRyYW5zZm9ybSIsImNvdW50IiwibW9udGhXaWR0aCIsIml0ZW1XaWR0aCIsImdyaWRHYXAiLCJwYXJzZUludCIsImNvbHVtbkdhcCIsIl9MYW5ndWFnZVN3aXRjaGVyX2luc3RhbmNlcyIsIl9MYW5ndWFnZVN3aXRjaGVyX2dldFZhbHVlIiwiX0xhbmd1YWdlU3dpdGNoZXJfb25DaGFuZ2UiLCJMYXZhbmRyZVNlbGVjdCIsIkxhbmd1YWdlU3dpdGNoZXIiLCJqc29uIiwiaWNvbiIsIm91dGVySFRNTCIsInVwZGF0ZSIsIl9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMiLCJfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQiLCJfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCIsIl9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkIiwiX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcyIsIl9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlIiwiX0xhdmFuZHJlU2VsZWN0X25hbWUiLCJfTGF2YW5kcmVTZWxlY3RfcGxhY2Vob2xkZXIiLCJfTGF2YW5kcmVTZWxlY3RfaWNvbiIsIl9MYXZhbmRyZVNlbGVjdF9pZCIsIl9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciIsIl9MYXZhbmRyZVNlbGVjdF9zZWxlY3RPcHRpb24iLCJfTGF2YW5kcmVTZWxlY3RfZmlsdGVyIiwiX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93biIsIl9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24iLCJwbGFjZWhvbGRlciIsImdldEF0dHJpYnV0ZSIsImF1dG9jYXBpdGFsaXplIiwiYXV0b2NvbXBsZXRlIiwiaHRtbEZvciIsImhpZGRlbiIsImFyciIsInNvcnQiLCJhIiwiYiIsImtleSIsIm9wdGlvbiIsInNwYW4iLCJ2YWx1ZTIiLCJmaXJzdE9wdGlvbiIsImRldGFpbCIsIl9MYXZhbmRyZVRvZ2dsZV9pbnN0YW5jZXMiLCJfTGF2YW5kcmVUb2dnbGVfZWxlbWVudHMiLCJfTGF2YW5kcmVUb2dnbGVfdG9nZ2xlcyIsIl9MYXZhbmRyZVRvZ2dsZV9jbGlja0hhbmRsZXIiLCJMYXZhbmRyZVRvZ2dsZSIsIl9MYXp5QmFja2dyb3VuZF9pbnN0YW5jZXMiLCJfTGF6eUJhY2tncm91bmRfbG9hZEhhbmRsZXIiLCJMYXp5QmFja2dyb3VuZCIsImxhenlCYWNrZ3JvdW5kT2JzZXJ2ZXIiLCJvYnNlcnZlciIsIl9TaWdudXBCbG9ja19pbnN0YW5jZXMiLCJfU2lnbnVwQmxvY2tfdGVtcGxhdGUiLCJfU2lnbnVwQmxvY2tfb3ZlcmxheSIsIl9TaWdudXBCbG9ja19ocmVmIiwiX1NpZ251cEJsb2NrX3BvaW50cyIsIl9TaWdudXBCbG9ja190eXBlIiwiX1NpZ251cEJsb2NrX2NvbXBsZXRlZCIsIl9TaWdudXBCbG9ja19tZWRpYVF1ZXJ5IiwiX1NpZ251cEJsb2NrX21xIiwiX1NpZ251cEJsb2NrX2lzTW9iaWxlIiwiX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUiLCJfU2lnbnVwQmxvY2tfc2V0VGVtcGxhdGUiLCJfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIiLCJfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIiLCJfU2lnbnVwQmxvY2tfY2xpY2tIYW5kbGVyIiwiX1NpZ251cEJsb2NrX3NldE92ZXJsYXlFdmVudExpc3RlbmVycyIsIl9TaWdudXBCbG9ja19nZXRUZW1wbGF0ZSIsIlNpZ251cEJsb2NrIiwiSFRNTExJRWxlbWVudCIsInBvaW50cyIsImdldFByb3BlcnR5VmFsdWUiLCJzdG9wUHJvcGFnYXRpb24iLCJwb29sIiwidGl0bGVzIiwidGl0bGUiLCJjbG9zZU92ZXJsYXlCdXR0b24iLCJ0eXBlVGVtcGxhdGUiLCJfTGF2YW5kcmVCdXR0b25faXNEaXNhYmxlZCIsIkhUTUxCdXR0b25FbGVtZW50IiwiY2xpY2tIYW5kbGVyIiwibGFiZWwiLCJzaXplIiwicHJpbWFyeSIsImJvb2wiLCJvdXRsaW5lIiwiZnVsbFdpZHRoIiwibG9hZGluZyIsImlzRGlzYWJsZWQiXSwic291cmNlUm9vdCI6IiJ9