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
/* harmony import */ var _web_components_SignupBlock__WEBPACK_IMPORTED_MODULE_31__ = __webpack_require__(/*! ./web-components/SignupBlock */ "./assets/js/web-components/SignupBlock.ts");
































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
  lazyBackgrounds();
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

function lazyBackgrounds() {
  document.addEventListener('DOMContentLoaded', () => {
    const lazyBackgrounds = [].slice.call(document.querySelectorAll('.lazy-background'));

    if ('IntersectionObserver' in window) {
      const lazyBackgroundObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            lazyBackgroundObserver.unobserve(entry.target);
          }
        });
      });
      lazyBackgrounds.forEach(lazyBackground => {
        lazyBackgroundObserver.observe(lazyBackground);
      });
    }
  });
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9hcHAudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tbW9uL0RhdGFMYXllci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FqYXhMb2dpbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FqYXhSZWdpc3Rlci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbmZpcm1WYWxpZGF0aW9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29va2llQmFyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29weUNvdXBvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0N1cnRhaW4udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9FbWFpbFZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkVG9nZ2xlLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSGVhZGVyU2VhcmNoLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSW5mb1BvcHVwLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGF6eUxvYWRlci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05ld3NsZXR0ZXJTdWJzY3JpYmUudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9QYXNzd29yZFJldmVhbC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZGVlbVBvaW50c0ZvckNvdXBvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Njcm9sbFRvQ29udGVudC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvTWVkaWFSZXNvbHZlci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9wb2x5ZmlsbHMvbWF0Y2hNZWRpYS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9EaWFsb2cudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdWkvTGFuZ3VhZ2VQb3B1cC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9Qb3B1cC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9TaWRlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9ib2R5LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvY29va2llcy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2RhdGVIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9kb20udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9lbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9saW5rcy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2xvYWRSZWNhcHRjaGEudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9zY3JvbGxUb1RhcmdldC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL3N0cmluZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvQWNjb3JkaW9uRWxlbWVudC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy93ZWItY29tcG9uZW50cy9CaXJ0aGRheUZvcm0udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvQ2Fyb3VzZWxFbGVtZW50LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0xhbmd1YWdlU3dpdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvTGF2YW5kcmVTZWxlY3QudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvTGF2YW5kcmVUb2dnbGUudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvU2lnbnVwQmxvY2sudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvYnV0dG9uL0xhdmFuZHJlQnV0dG9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9hcHAucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fYWNjb3JkaW9uLnBjc3MiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX2Nvb2tpZS1iYXIucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fY3VydGFpbi5wY3NzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19pbmZvUG9wdXAucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fcG9wdXAucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fc2lkZVBhbmVsLnBjc3MiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvYnV0dG9uL3N0eWxlLnBjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgJy4vY2FydCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5vbigndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0aWFsaXplQ29tcG9uZW50cyhzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbXBvbmVudC5vbkluaXQoc2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJ0B1bmdhcC9jdXN0b20tZWxlbWVudHMnO1xuaW1wb3J0ICcuLi9jc3MvYXBwLnBjc3MnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IEFqYXhMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvQWpheExvZ2luJztcbmltcG9ydCBBamF4UmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL0FqYXhSZWdpc3Rlcic7XG5pbXBvcnQgQ29va2llQmFyIGZyb20gJy4vY29tcG9uZW50cy9Db29raWVCYXInO1xuaW1wb3J0IENvcHlDb3Vwb24gZnJvbSAnLi9jb21wb25lbnRzL0NvcHlDb3Vwb24nO1xuaW1wb3J0IEN1cnRhaW4gZnJvbSAnLi9jb21wb25lbnRzL0N1cnRhaW4nO1xuaW1wb3J0IEVtYWlsVmFsaWRhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRW1haWxWYWxpZGF0aW9uJztcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL0ZpZWxkVmFsaWRhdGlvbic7XG5pbXBvcnQgRm9yZ290UGFzc3dvcmQgZnJvbSAnLi9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkJztcbmltcG9ydCBGb3Jnb3RQYXNzd29yZFRvZ2dsZSBmcm9tICcuL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmRUb2dnbGUnO1xuaW1wb3J0IEhlYWRlclNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyU2VhcmNoJztcbmltcG9ydCBJbmZvUG9wdXAgZnJvbSAnLi9jb21wb25lbnRzL0luZm9Qb3B1cCc7XG5pbXBvcnQgTGF6eUxvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvTGF6eUxvYWRlcic7XG5pbXBvcnQgTmV3c2xldHRlclN1YnNjcmliZSBmcm9tICcuL2NvbXBvbmVudHMvTmV3c2xldHRlclN1YnNjcmliZSc7XG5pbXBvcnQgUGFzc3dvcmRSZXZlYWwgZnJvbSAnLi9jb21wb25lbnRzL1Bhc3N3b3JkUmV2ZWFsJztcbmltcG9ydCBSZWRlZW1Qb2ludHNGb3JDb3Vwb24gZnJvbSAnLi9jb21wb25lbnRzL1JlZGVlbVBvaW50c0ZvckNvdXBvbic7XG5pbXBvcnQgU2Nyb2xsVG9Db250ZW50IGZyb20gJy4vY29tcG9uZW50cy9TY3JvbGxUb0NvbnRlbnQnO1xuaW1wb3J0IFZpZGVvTWVkaWFSZXNvbHZlciBmcm9tICcuL2NvbXBvbmVudHMvVmlkZW9NZWRpYVJlc29sdmVyJztcbmltcG9ydCBNb2R1bGUgZnJvbSAnLi9Nb2R1bGUnO1xuaW1wb3J0IExhbmd1YWdlUG9wdXAgZnJvbSAnLi91aS9MYW5ndWFnZVBvcHVwJztcbmltcG9ydCBTaWRlUGFuZWwgZnJvbSAnLi91aS9TaWRlUGFuZWwnO1xuaW1wb3J0IHsgc2V0Q3VycmVudExpbmtDbGFzcyB9IGZyb20gJy4vdXRpbC9saW5rcyc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvQWNjb3JkaW9uRWxlbWVudCc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvQmlydGhkYXlGb3JtJztcbmltcG9ydCBMYXZhbmRyZUJ1dHRvbiBmcm9tICcuL3dlYi1jb21wb25lbnRzL2J1dHRvbi9MYXZhbmRyZUJ1dHRvbic7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvQ2Fyb3VzZWxFbGVtZW50JztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9MYW5ndWFnZVN3aXRjaGVyJztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9MYXZhbmRyZVNlbGVjdCc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvTGF2YW5kcmVUb2dnbGUnO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL1NpZ251cEJsb2NrJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFwcCBleHRlbmRzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXG4gICAgICAgICAgICBDb29raWVCYXIsXG4gICAgICAgICAgICBTaWRlUGFuZWwsXG4gICAgICAgICAgICBDdXJ0YWluLFxuICAgICAgICAgICAgSW5mb1BvcHVwLFxuICAgICAgICAgICAgUGFzc3dvcmRSZXZlYWwsXG4gICAgICAgICAgICBFbWFpbFZhbGlkYXRpb24sXG4gICAgICAgICAgICBOZXdzbGV0dGVyU3Vic2NyaWJlLFxuICAgICAgICAgICAgRm9yZ290UGFzc3dvcmQsXG4gICAgICAgICAgICBGb3Jnb3RQYXNzd29yZFRvZ2dsZSxcbiAgICAgICAgICAgIEFqYXhMb2dpbixcbiAgICAgICAgICAgIEFqYXhSZWdpc3RlcixcbiAgICAgICAgICAgIEZpZWxkVmFsaWRhdGlvbixcbiAgICAgICAgICAgIEhlYWRlclNlYXJjaCxcbiAgICAgICAgICAgIExhenlMb2FkZXIsXG4gICAgICAgICAgICBTY3JvbGxUb0NvbnRlbnQsXG4gICAgICAgICAgICBWaWRlb01lZGlhUmVzb2x2ZXIsXG4gICAgICAgICAgICBSZWRlZW1Qb2ludHNGb3JDb3Vwb24sXG4gICAgICAgICAgICBDb3B5Q291cG9uLFxuICAgICAgICAgICAgTGFuZ3VhZ2VQb3B1cFxuICAgICAgICBdO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIHNldEN1cnJlbnRMaW5rQ2xhc3MoKTtcbiAgICAgICAgY29uc3Qgd3BGb3Jtc1N1Ym1pdEJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tuYW1lPVwid3Bmb3Jtc1tzdWJtaXRdXCJdJykpO1xuICAgICAgICB3cEZvcm1zU3VibWl0QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5yZW1vdmVBdHRyaWJ1dGUoJ2NsYXNzJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdpcycsICdsYXZhbmRyZS1idXR0b24nKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ3NpemUnLCAnbGFyZ2UnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2Z1bGwtd2lkdGgnLCAnbGFyZ2UnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ291dGxpbmUnLCAndHJ1ZScpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4oZnVuY3Rpb24gYXBwSW5pdCgpIHtcbiAgICBjb25zdCBhcHAgPSBuZXcgQXBwKCk7XG4gICAgYXBwLmluaXRpYWxpemUoKTtcbiAgICBsYXp5QmFja2dyb3VuZHMoKTtcbiAgICBmb290ZXJVc3BTbGlkZXIoKTtcbn0pKCk7XG5mdW5jdGlvbiBmb290ZXJVc3BTbGlkZXIoKSB7XG4gICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxpc3QgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcudXNwLXNsaWRlcicpO1xuICAgICAgICBpZiAoIWxpc3QpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpdGVtcyA9IEFycmF5LmZyb20obGlzdC5xdWVyeVNlbGVjdG9yQWxsKCcudXNwLXNsaWRlcl9faXRlbScpKTtcbiAgICAgICAgbGV0IHRvdGFsV2lkdGggPSAwO1xuICAgICAgICBpdGVtcy5mb3JFYWNoKChpdGVtKSA9PiB7XG4gICAgICAgICAgICB0b3RhbFdpZHRoICs9IGl0ZW0uY2xpZW50V2lkdGg7XG4gICAgICAgIH0pO1xuICAgICAgICBsaXN0LnN0eWxlLndpZHRoID0gYCR7dG90YWxXaWR0aH1weGA7XG4gICAgfSwgMzAwKTtcbn1cbmZ1bmN0aW9uIGxhenlCYWNrZ3JvdW5kcygpIHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdET01Db250ZW50TG9hZGVkJywgKCkgPT4ge1xuICAgICAgICBjb25zdCBsYXp5QmFja2dyb3VuZHMgPSBbXS5zbGljZS5jYWxsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXp5LWJhY2tncm91bmQnKSk7XG4gICAgICAgIGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgICAgICAgY29uc3QgbGF6eUJhY2tncm91bmRPYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICAgICAgZW50cnkudGFyZ2V0LmNsYXNzTGlzdC5hZGQoJ3Zpc2libGUnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxhenlCYWNrZ3JvdW5kT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgbGF6eUJhY2tncm91bmRzLmZvckVhY2goKGxhenlCYWNrZ3JvdW5kKSA9PiB7XG4gICAgICAgICAgICAgICAgbGF6eUJhY2tncm91bmRPYnNlcnZlci5vYnNlcnZlKGxhenlCYWNrZ3JvdW5kKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfSk7XG59XG5pZiAoTGF2YW5kcmVCdXR0b24pIHtcbiAgICB3aW5kb3cuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsYXZhbmRyZS1idXR0b24nLCBMYXZhbmRyZUJ1dHRvbiwgeyBleHRlbmRzOiAnYnV0dG9uJyB9KTtcbn1cbiIsImNsYXNzIERhdGFMYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YUxheWVyID0gd2luZG93LmRhdGFMYXllciA/IHdpbmRvdy5kYXRhTGF5ZXIgOiBbXTtcbiAgICB9XG4gICAgcHVzaChkYXRhKSB7XG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goeyBlY29tbWVyY2U6IG51bGwgfSk7IC8vIENsZWFyIHRoZSBwcmV2aW91cyBlY29tbWVyY2Ugb2JqZWN0LlxuICAgICAgICB0aGlzLmRhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgIH1cbn1cbmV4cG9ydCB7IERhdGFMYXllciB9O1xuZXhwb3J0IGRlZmF1bHQgbmV3IERhdGFMYXllcigpO1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBEYXRhTGF5ZXIgZnJvbSAnLi4vY29tbW9uL0RhdGFMYXllcic7XG5pbXBvcnQgeyBsb2FkUmVjYXB0Y2hhLCBzaXRla2V5IH0gZnJvbSAnLi4vdXRpbC9sb2FkUmVjYXB0Y2hhJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IHsgc2V0VmFsaWRhdGlvbk1lc3NhZ2UgfSBmcm9tICcuLi91dGlsL3ZhbGlkYXRpb24nO1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuL0ZpZWxkVmFsaWRhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4TG9naW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICAgICAgLy8gTG9hZCByZWNhcHRjaGFcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXdpbmRvdy5DeXByZXNzKSB7XG4gICAgICAgICAgICBsb2FkUmVjYXB0Y2hhKGZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLm1hdGNoZXMoJzotd2Via2l0LWF1dG9maWxsJykpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2lucHV0JykpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sIDEwMCk7XG4gICAgICAgICAgICB2YWxpZGF0b3IuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgICAgICBpZiAoc3VibWl0QnV0dG9uID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgc3VibWl0QnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdChldmVudCwgZmllbGRzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHN1Ym1pdEJ1dHRvbiA9PT0gbnVsbCB8fCBzdWJtaXRCdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN1Ym1pdEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdChldmVudCwgZmllbGRzKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VibWl0KGV2ZW50LCBmaWVsZHMpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICB2YWxpZCA9IGZpZWxkLnZhbGlkaXR5LnZhbGlkO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBjb25zdCB1c2VybmFtZSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgIGlmICghdXNlcm5hbWUgfHwgIXBhc3N3b3JkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCB7IGdyZWNhcHRjaGEgfSA9IHdpbmRvdztcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnYWpheGxvZ2luJyxcbiAgICAgICAgICAgIHJlY2FwdGNoYVRva2VuOiAnJyxcbiAgICAgICAgICAgIHVzZXJuYW1lLFxuICAgICAgICAgICAgcGFzc3dvcmRcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwiYnV0dG9uXCJdW25hbWU9XCJsb2dpblwiXScpIHx8XG4gICAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCF3aW5kb3cuQ3lwcmVzcykge1xuICAgICAgICAgICAgZ3JlY2FwdGNoYS5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgZ3JlY2FwdGNoYS5leGVjdXRlKHNpdGVrZXksIHsgYWN0aW9uOiAnQWpheExvZ2luJyB9KS50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICBkYXRhLnJlY2FwdGNoYVRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cImJ1dHRvblwiXVtuYW1lPVwibG9naW5cIl0nKSB8fCB1bmRlZmluZWQ7XG4gICAgICAgICAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSwgZXZlbnQsIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSwgZXZlbnQsIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzLCBldmVudCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyBpcyB3cm9uZycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ2xvZ2luJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ0FqYXhMb2dpbidcbiAgICAgICAgfTtcbiAgICAgICAgRGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgICAgIGNvbnN0IGhyZWYgPSB0aGlzLmZvcm0uZGF0YXNldC5yZWRpcmVjdFVybCB8fCAnL215LWFjY291bnQvJztcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICBjb25zdCBtZXNzYWdlID0gcmVzcG9uc2UuZGF0YSB8fFxuICAgICAgICAgICAgJ1RoaXMgY29tYmluYXRpb24gb2YgZW1haWwgYW5kIHBhc3N3b3JkIGlzIG5vdCBrbm93biB0byB1cy4gUGxlYXNlIHRyeSBhZ2FpbiBvciByZXF1ZXN0IGEgbmV3IHBhc3N3b3JkLic7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKG1lc3NhZ2UsIHRoaXMuZm9ybSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBsb2dpbkZvcm1zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcjYWpheC1sb2dpbi1mb3JtJykpO1xuICAgICAgICBpZiAobG9naW5Gb3Jtcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBsb2dpbkZvcm1zLmZvckVhY2goKGZvcm0pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGFqYXhMb2dpbiA9IG5ldyBBamF4TG9naW4oZm9ybSk7XG4gICAgICAgICAgICBhamF4TG9naW4uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IERhdGFMYXllciBmcm9tICcuLi9jb21tb24vRGF0YUxheWVyJztcbmltcG9ydCB7IGxvYWRSZWNhcHRjaGEsIHNpdGVrZXkgfSBmcm9tICcuLi91dGlsL2xvYWRSZWNhcHRjaGEnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgQ29uZmlybVZhbGlkYXRpb24gZnJvbSAnLi9Db25maXJtVmFsaWRhdGlvbic7XG5pbXBvcnQgRW1haWxWYWxpZGF0aW9uIGZyb20gJy4vRW1haWxWYWxpZGF0aW9uJztcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi9GaWVsZFZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheFJlZ2lzdGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgZW1haWxGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwiZW1haWxcIl0nKTtcbiAgICAgICAgaWYgKGVtYWlsRmllbGQgIT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsVmFsaWRhdGlvbiA9IG5ldyBFbWFpbFZhbGlkYXRpb24oZW1haWxGaWVsZCk7XG4gICAgICAgICAgICBlbWFpbFZhbGlkYXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignI3JlZ2lzdGVyLXBhc3N3b3JkJyk7XG4gICAgICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJyNjb25maXJtLXBhc3N3b3JkJyk7XG4gICAgICAgIGlmIChwYXNzd29yZEZpZWxkICYmIGNvbmZpcm1QYXNzd29yZEZpZWxkKSB7XG4gICAgICAgICAgICBjb25zdCBjb25maXJtVmFsaWRhdGlvbiA9IG5ldyBDb25maXJtVmFsaWRhdGlvbihwYXNzd29yZEZpZWxkLCBjb25maXJtUGFzc3dvcmRGaWVsZCk7XG4gICAgICAgICAgICBjb25maXJtVmFsaWRhdGlvbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgICAgIC8vIExvYWQgcmVjYXB0Y2hhXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCF3aW5kb3cuQ3lwcmVzcykge1xuICAgICAgICAgICAgbG9hZFJlY2FwdGNoYShmaWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRmllbGRWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIHZhbGlkYXRvci5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2MsIF9kO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgICAgIHZhbGlkID0gZmllbGQudmFsaWRpdHkudmFsaWQ7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gKChfYSA9IGZvcm1EYXRhLmdldCgnZW1haWwnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gKChfYiA9IGZvcm1EYXRhLmdldCgnZmlyc3RfbmFtZScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBsYXN0TmFtZSA9ICgoX2MgPSBmb3JtRGF0YS5nZXQoJ2xhc3RfbmFtZScpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZCA9ICgoX2QgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykpID09PSBudWxsIHx8IF9kID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfZC50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29uc3QgeyBncmVjYXB0Y2hhIH0gPSB3aW5kb3c7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhyZWdpc3RlcicsXG4gICAgICAgICAgICAgICAgcmVjYXB0Y2hhVG9rZW46ICcnLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBhc3N3b3JkLFxuICAgICAgICAgICAgICAgIGZpcnN0X25hbWU6IGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBsYXN0X25hbWU6IGxhc3ROYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwic3VibWl0XCJdJykgfHxcbiAgICAgICAgICAgICAgICB1bmRlZmluZWQ7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBpZiAoIXdpbmRvdy5DeXByZXNzKSB7XG4gICAgICAgICAgICAgICAgZ3JlY2FwdGNoYS5yZWFkeSgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGdyZWNhcHRjaGFcbiAgICAgICAgICAgICAgICAgICAgICAgIC5leGVjdXRlKHNpdGVrZXksIHsgYWN0aW9uOiAnQWpheFJlZ2lzdGVyJyB9KVxuICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBkYXRhLnJlY2FwdGNoYVRva2VuID0gdG9rZW47XG4gICAgICAgICAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHVuZGVmaW5lZCwgZXZlbnQsIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB1bmRlZmluZWQsIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzb21ldGhpbmcgaXMgd3JvbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6ICdzaWduLXVwJyxcbiAgICAgICAgICAgIG1ldGhvZDogJ0FqYXhSZWdpc3RlcidcbiAgICAgICAgfTtcbiAgICAgICAgRGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgICAgIGNvbnN0IGhyZWYgPSB0aGlzLmZvcm0uZGF0YXNldC5yZWRpcmVjdFVybCB8fCAnL215LWFjY291bnQvJztcbiAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBocmVmO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJGb3JtID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignI2FqYXgtcmVnaXN0ZXItZm9ybScpO1xuICAgICAgICBpZiAocmVnaXN0ZXJGb3JtID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWpheFJlZ2lzdGVyID0gbmV3IEFqYXhSZWdpc3RlcihyZWdpc3RlckZvcm0pO1xuICAgICAgICBhamF4UmVnaXN0ZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGNsYXNzIENvbmZpcm1WYWxpZGF0aW9uIHtcbiAgICBjb25zdHJ1Y3RvcihmaWVsZCwgY29uZmlybUZpZWxkKSB7XG4gICAgICAgIHRoaXMuZmllbGQgPSBmaWVsZDtcbiAgICAgICAgdGhpcy5jb25maXJtRmllbGQgPSBjb25maXJtRmllbGQ7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5maWVsZCB8fCAhdGhpcy5jb25maXJtRmllbGQpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTWlzc2luZyBmaWVsZHMnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBldmVudHMgPSBbJ2NoYW5nZScsICdpbnB1dCddO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZXZlbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZXZlbnQgPSBldmVudHNbaW5kZXhdO1xuICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQuYWRkRXZlbnRMaXN0ZW5lcihldmVudCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICh0aGlzLmZpZWxkLnZhbHVlICE9PSB0aGlzLmNvbmZpcm1GaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBtZXNzYWdlID0gJ1ZhbHVlIGlzIG5vdCBlcXVhbCc7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KG1lc3NhZ2UpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkoJycpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5yZXBvcnRWYWxpZGl0eSgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9Db29raWVCYXJfaW5zdGFuY2VzLCBfQ29va2llQmFyX2VsZW1lbnQsIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LCBfQ29va2llQmFyX2FjY2VwdEJ1dHRvbiwgX0Nvb2tpZUJhcl9nZXRFbGVtZW50LCBfQ29va2llQmFyX2FjY2VwdENvb2tpZXM7XG5pbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19jb29raWUtYmFyLnBjc3MnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IGdldENvb2tpZVZhbHVlLCBzZXRDb29raWVWYWx1ZSB9IGZyb20gJy4uL3V0aWwvY29va2llcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb29raWVCYXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0Nvb2tpZUJhcl9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQ29va2llQmFyX2VsZW1lbnQuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0Nvb2tpZUJhcl9hY2NlcHRCdXR0b24uc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LCBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcjY29va2llLWJhci10ZW1wbGF0ZScpLCBcImZcIik7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIFwiZlwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChnZXRDb29raWVWYWx1ZShDb29raWVCYXIuY29va2llTmFtZSkpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIFwiZlwiKS5yZW1vdmUoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Db29raWVCYXJfZWxlbWVudCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX2luc3RhbmNlcywgXCJtXCIsIF9Db29raWVCYXJfZ2V0RWxlbWVudCkuY2FsbCh0aGlzKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Db29raWVCYXJfYWNjZXB0QnV0dG9uLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfZWxlbWVudCwgXCJmXCIpLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJjb29raWVzLWFjY2VwdFwiXScpLCBcImZcIik7XG4gICAgICAgIChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl9hY2NlcHRCdXR0b24sIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX2luc3RhbmNlcywgXCJtXCIsIF9Db29raWVCYXJfYWNjZXB0Q29va2llcykuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHN0YXRpYyBzZXRBY2NlcHRDb29raWUoKSB7XG4gICAgICAgIHNldENvb2tpZVZhbHVlKENvb2tpZUJhci5jb29raWVOYW1lLCAndHJ1ZScsIHtcbiAgICAgICAgICAgICdtYXgtYWdlJzogMzE1MzYwMDBcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBjb29raWVCYXIgPSBuZXcgQ29va2llQmFyKHNlbGVjdG9yKTtcbiAgICAgICAgY29va2llQmFyLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG5fQ29va2llQmFyX2VsZW1lbnQgPSBuZXcgV2Vha01hcCgpLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCA9IG5ldyBXZWFrTWFwKCksIF9Db29raWVCYXJfYWNjZXB0QnV0dG9uID0gbmV3IFdlYWtNYXAoKSwgX0Nvb2tpZUJhcl9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQ29va2llQmFyX2dldEVsZW1lbnQgPSBmdW5jdGlvbiBfQ29va2llQmFyX2dldEVsZW1lbnQoKSB7XG4gICAgY29uc3QgY2xvbmUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LCBcImZcIikuY2xvbmVOb2RlKHRydWUpO1xuICAgIGNvbnN0IHsgY29udGVudCB9ID0gY2xvbmU7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgXCJmXCIpLnBhcmVudEVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgcmV0dXJuIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXJvbGU9XCJjb29raWUtYmFyXCJdJyk7XG59LCBfQ29va2llQmFyX2FjY2VwdENvb2tpZXMgPSBmdW5jdGlvbiBfQ29va2llQmFyX2FjY2VwdENvb2tpZXMoKSB7XG4gICAgdmFyIF9hO1xuICAgIENvb2tpZUJhci5zZXRBY2NlcHRDb29raWUoKTtcbiAgICAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfZWxlbWVudCwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKCk7XG59O1xuQ29va2llQmFyLmNvb2tpZU5hbWUgPSAnYXBwcm92ZWRfY29va2llcyc7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0NvcHlDb3Vwb25fYnV0dG9uO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvcHlDb3Vwb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGJ1dHRvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfQ29weUNvdXBvbl9idXR0b24uc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBidXR0b24sIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DbGljayhldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvbkNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGNvZGUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmRhdGFzZXQuY29kZTtcbiAgICAgICAgY29uc3QgdGV4dCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikuZGF0YXNldC50ZXh0O1xuICAgICAgICBjb25zdCBjb3BpZWRUZXh0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5kYXRhc2V0LmNvcGllZFRleHQ7XG4gICAgICAgIGlmICghY29kZSB8fCAhdGV4dCB8fCAhY29waWVkVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGUpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmlubmVyVGV4dCA9IGNvcGllZFRleHQ7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgfVxuICAgIG9uRmFpbHVyZShyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBjb3B5QnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cImNvcHktY291cG9uXCJdJykpO1xuICAgICAgICBpZiAoY29weUJ1dHRvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29weUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBjb3B5Q291cG9uID0gbmV3IENvcHlDb3Vwb24oYnV0dG9uKTtcbiAgICAgICAgICAgIGNvcHlDb3Vwb24uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fQ29weUNvdXBvbl9idXR0b24gPSBuZXcgV2Vha01hcCgpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0N1cnRhaW5faW5zdGFuY2VzLCBfQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIsIF9DdXJ0YWluX2hhbmRsZVRyYW5zaXRpb247XG5pbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19jdXJ0YWluLnBjc3MnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEN1cnRhaW4gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGZvbGRCdXR0b24sIG9ubHlPbk1vYmlsZSA9IGZhbHNlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9DdXJ0YWluX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lci5zZXQodGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbl9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbl9oYW5kbGVUcmFuc2l0aW9uKS5jYWxsKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5mb2xkQnV0dG9uID0gZm9sZEJ1dHRvbjtcbiAgICAgICAgdGhpcy5vbmx5T25Nb2JpbGUgPSBvbmx5T25Nb2JpbGU7XG4gICAgICAgIHRoaXMuZGVmYXVsdEhlaWdodCA9XG4gICAgICAgICAgICBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCkubWF4SGVpZ2h0ICE9PSB1bmRlZmluZWQgJiZcbiAgICAgICAgICAgICAgICBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCkubWF4SGVpZ2h0ICE9PSAnbm9uZSdcbiAgICAgICAgICAgICAgICA/IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5tYXhIZWlnaHRcbiAgICAgICAgICAgICAgICA6ICcwcHgnO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm9ubHlPbk1vYmlsZSAmJiB3aW5kb3cuaW5uZXJXaWR0aCA+PSAxMDI0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZS5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZGVmYXVsdEhlaWdodDtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IGAke3RoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7dGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmRlZmF1bHRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRMZXNzIHx8ICF0aGlzLmZvbGRCdXR0b24uZGF0YXNldC5yZWFkTW9yZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICh0aGlzLmZvbGRCdXR0b24uaW5uZXJUZXh0ID09PSB0aGlzLmZvbGRCdXR0b24uZGF0YXNldC5yZWFkTW9yZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmZvbGRCdXR0b24uZGF0YXNldC5yZWFkTGVzcztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uaW5uZXJUZXh0ID0gdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZE1vcmU7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5fdHJhbnNpdGlvbkxpc3RlbmVyLCBcImZcIikpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5fdHJhbnNpdGlvbkxpc3RlbmVyLCBcImZcIikpO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCB8fCAhdGhpcy5mb2xkQnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCB0b2dnbGVzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jdXJ0YWluLXRvZ2dsZV0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0b2dnbGVzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgdG9nZ2xlID0gdG9nZ2xlc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihgW2RhdGEtY3VydGFpbi1jb250ZW50PVwiJHt0b2dnbGUuZGF0YXNldC5jdXJ0YWluVG9nZ2xlfVwiXWApO1xuICAgICAgICAgICAgaWYgKCFjb250ZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBvbmx5T25Nb2JpbGUgPSAhIShjb250ZW50LmRhdGFzZXQub25seU9uTW9iaWxlICYmIGNvbnRlbnQuZGF0YXNldC5vbmx5T25Nb2JpbGUgPT09ICd0cnVlJyk7XG4gICAgICAgICAgICBjb25zdCBjdXJ0YWluID0gbmV3IEN1cnRhaW4oY29udGVudCwgdG9nZ2xlLCBvbmx5T25Nb2JpbGUpO1xuICAgICAgICAgICAgY3VydGFpbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG5fQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbl9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQ3VydGFpbl9oYW5kbGVUcmFuc2l0aW9uID0gZnVuY3Rpb24gX0N1cnRhaW5faGFuZGxlVHJhbnNpdGlvbigpIHtcbiAgICBpZiAodGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9ICdub25lJztcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLmVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ21heEhlaWdodCcpO1xufTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCB7IHJlbW92ZUV4aXN0aW5nVmFsaWRhdGlvbk1lc3NhZ2VzLCBzZXRWYWxpZGF0aW9uTWVzc2FnZSB9IGZyb20gJy4uL3V0aWwvdmFsaWRhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBFbWFpbFZhbGlkYXRpb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuZW1haWxJbnB1dCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMuZW1haWxJbnB1dC5jbG9zZXN0KCdmb3JtJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBsZXQgYmx1clRpbWVvdXQgPSBudWxsO1xuICAgICAgICB0aGlzLmVtYWlsSW5wdXQuYWRkRXZlbnRMaXN0ZW5lcignYmx1cicsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChibHVyVGltZW91dCkge1xuICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoYmx1clRpbWVvdXQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYmx1clRpbWVvdXQgPSB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVCbHVyRXZlbnQoKTtcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBoYW5kbGVCbHVyRXZlbnQoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgY29uc3QgeyB2YWx1ZSB9ID0gdGhpcy5lbWFpbElucHV0O1xuICAgICAgICBjb25zdCBzZWN1cml0eSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ3dvb2NvbW1lcmNlLWVtYWlsLWNoZWNrLW5vbmNlJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4ZW1haWxjaGVjaycsXG4gICAgICAgICAgICBlbWFpbDogdmFsdWUsXG4gICAgICAgICAgICBzZWN1cml0eVxuICAgICAgICB9O1xuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MoKSB7XG4gICAgICAgIHJlbW92ZUV4aXN0aW5nVmFsaWRhdGlvbk1lc3NhZ2VzKHRoaXMuZW1haWxJbnB1dCk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShlcnJvcikge1xuICAgICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShlcnJvci5tZXNzYWdlLCB0aGlzLmVtYWlsSW5wdXQpO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZW1haWxJbnB1dCB8fCAhdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCByZWdpc3RlckVtYWlsSW5wdXQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcjcmVnX2VtYWlsJyk7XG4gICAgICAgIGlmIChyZWdpc3RlckVtYWlsSW5wdXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBlbWFpbFZhbGlkYXRpb24gPSBuZXcgRW1haWxWYWxpZGF0aW9uKHJlZ2lzdGVyRW1haWxJbnB1dCk7XG4gICAgICAgIGVtYWlsVmFsaWRhdGlvbi5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IHsgc2V0VmFsaWRhdGlvbk1lc3NhZ2UgfSBmcm9tICcuLi91dGlsL3ZhbGlkYXRpb24nO1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuL0ZpZWxkVmFsaWRhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3Jnb3RQYXNzd29yZCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoYW5jaG9yKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLnBhc3N3b3JkRm9yZ2V0QW5jaG9yID0gYW5jaG9yO1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLnBhc3N3b3JkRm9yZ2V0QW5jaG9yLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAoKF9hID0gZm9ybURhdGEuZ2V0KCd1c2VybmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICAvLyBjb25zdCBzZWN1cml0eTogc3RyaW5nID0gZm9ybURhdGEuZ2V0KCdmb3Jnb3RzZWN1cml0eScpPy50b1N0cmluZygpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZW1haWxGaWVsZCA9IHRoaXMuZm9ybS51c2VybmFtZTtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkVmFsaWRhdGlvbiA9IG5ldyBGaWVsZFZhbGlkYXRpb24oZW1haWxGaWVsZCk7XG4gICAgICAgICAgICBmaWVsZFZhbGlkYXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgZW1haWxGaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndmFsaWRhdGUnKSk7XG4gICAgICAgICAgICBpZiAoIXVzZXJuYW1lKSB7XG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdVc2VybmFtZSBub3Qgc2V0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhmb3Jnb3RwYXNzd29yZCcsXG4gICAgICAgICAgICAgICAgdXNlcl9sb2dpbjogdXNlcm5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcykge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YSwgdGhpcy5mb3JtKTtcbiAgICB9XG4gICAgb25GYWlsdXJlKHJlcykge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzKTtcbiAgICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UocmVzcG9uc2UuZGF0YSwgdGhpcy5mb3JtKTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkRm9yZ2V0QW5jaG9yIHx8ICF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRm9yZ2V0TGlua3MgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJwYXNzd29yZC1mb3JnZXRcIl0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXNzd29yZEZvcmdldExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IHBhc3N3b3JkRm9yZ2V0TGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmQgPSBuZXcgRm9yZ290UGFzc3dvcmQobGluayk7XG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ290UGFzc3dvcmRUb2dnbGUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKHRvZ2dsZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnRvZ2dsZSA9IHRvZ2dsZTtcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldFdyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncGFzc3dvcmQtZm9yZ2V0LWZvcm0nKTtcbiAgICAgICAgdGhpcy5sb2dpbldyYXBwZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbG9naW4tcmVnaXN0ZXItZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy50b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB0aGlzLmxvZ2luV3JhcHBlci50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldFdyYXBwZXIudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXNzd29yZEZvcmdldFdyYXBwZXIgfHwgIXRoaXMubG9naW5XcmFwcGVyKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBwYXNzd29yZEZvcmdldExpbmtzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwicGFzc3dvcmQtZm9yZ2V0LXRvZ2dsZVwiXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhc3N3b3JkRm9yZ2V0TGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gcGFzc3dvcmRGb3JnZXRMaW5rc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBmb3Jnb3RQYXNzd29yZCA9IG5ldyBGb3Jnb3RQYXNzd29yZFRvZ2dsZShsaW5rKTtcbiAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIZWFkZXJTZWFyY2ggZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgZG9jdW1lbnRDbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50VGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKGV2ZW50VGFyZ2V0ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgd2l0aGluSGVhZGVyID0gZXZlbnRUYXJnZXQuY2xvc2VzdCgnLmhlYWRlcl9fc2VhcmNoJykgIT09IG51bGw7XG4gICAgICAgICAgICBpZiAod2l0aGluSGVhZGVyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGNvbnN0IHNlYXJjaElucHV0RWxlbWVudCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1zZWFyY2gtZmllbGQnKTtcbiAgICAgICAgICAgIGlmIChzZWFyY2hJbnB1dEVsZW1lbnQgIT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBzZWFyY2hJbnB1dEVsZW1lbnQuZm9jdXMoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlclNlYXJjaCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5oZWFkZXJfX3NlYXJjaCcpO1xuICAgICAgICBpZiAoaGVhZGVyU2VhcmNoID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSGVhZGVyU2VhcmNoKGhlYWRlclNlYXJjaCk7XG4gICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19pbmZvUG9wdXAucGNzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSW5mb1BvcHVwIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBldmVudCA9ICdtb3VzZW92ZXInKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZXZlbnQgPSBldmVudDtcbiAgICAgICAgdGhpcy5jb250ZW50ID0gdGhpcy5lbGVtZW50LmRhdGFzZXQuY29udGVudCB8fCAnJztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNWYWxpZCgpID09PSBmYWxzZSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKHRoaXMuZXZlbnQsIHRoaXMuc2hvd1RpcHB5LmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzaG93VGlwcHkoZSkge1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gd2luZG93LnRpcHB5KHRoaXMuZWxlbWVudCwge1xuICAgICAgICAgICAgY29udGVudDogdGhpcy5jb250ZW50LFxuICAgICAgICAgICAgdGhlbWU6ICdsaWdodCcsXG4gICAgICAgICAgICBhbGxvd0hUTUw6IHRydWUsXG4gICAgICAgICAgICBoaWRlT25DbGljazogdHJ1ZSxcbiAgICAgICAgICAgIHNob3dPbkNyZWF0ZTogdHJ1ZSxcbiAgICAgICAgICAgIGludGVyYWN0aXZlOiB0cnVlLFxuICAgICAgICAgICAgb25IaWRkZW46IChpKSA9PiB7XG4gICAgICAgICAgICAgICAgaS5kZXN0cm95KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoaW5zdGFuY2UgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGluc3RhbmNlLnNob3coKTtcbiAgICAgICAgaW5zdGFuY2UuaGlkZVdpdGhJbnRlcmFjdGl2aXR5KGUpO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCB8fCAhdGhpcy5jb250ZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCB0aXBweUVsZW1lbnRzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwidGlwcHlcIl0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCB0aXBweUVsZW1lbnRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgdGlwcHlFbGVtZW50ID0gdGlwcHlFbGVtZW50c1tpbmRleF07XG4gICAgICAgICAgICBpZiAoIXRpcHB5RWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5mb1BvcHVwID0gbmV3IEluZm9Qb3B1cCh0aXBweUVsZW1lbnQsICdtb3VzZW92ZXInKTtcbiAgICAgICAgICAgIGluZm9Qb3B1cC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF6eUxvYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gdGhpcy5nZXRFbGVtZW50cygpO1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudHMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICgnSW50ZXJzZWN0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgICAgICAgICAgdGhpcy5vbkludGVyc2VjdGlvbk9ic2VydmVyKEludGVyc2VjdGlvbk9ic2VydmVyKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IHRoaXMuZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgdGhpcy5sYXp5bG9hZChlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBvbkludGVyc2VjdGlvbk9ic2VydmVyKE9ic2VydmVyQ2xhc3MgPSBJbnRlcnNlY3Rpb25PYnNlcnZlcikge1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46ICcyNTBweCAwcHgnLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGxhenlJbWFnZU9ic2VydmVyID0gbmV3IE9ic2VydmVyQ2xhc3MoKGVudHJpZXMsIGxhenlJbWFnZU9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgobGF6eSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF6eWxvYWQobGF6eSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMubGF6eWxvYWQoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCkge1xuICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIub2JzZXJ2ZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgobGF6eUltYWdlKSA9PiB7XG4gICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5vYnNlcnZlKGxhenlJbWFnZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBsYXp5bG9hZChlbCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gZWw7XG4gICAgICAgIHRoaXMubWFuYWdlQ3NzQ2xhc3NlcyhlbCk7XG4gICAgICAgIGlmICh3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50ICYmIHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW1nJyk7XG4gICAgICAgICAgICBpZiAoaW1hZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLm1hbmFnZUNzc0NsYXNzZXMoaW1hZ2UpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGxvYWRpbmdTcGlubmVyID0gdGhpcy5lbGVtZW50LmNsb3Nlc3QoJy5sb2FkaW5nLXNwaW5uZXInKTtcbiAgICAgICAgaWYgKGxvYWRpbmdTcGlubmVyKSB7XG4gICAgICAgICAgICBsb2FkaW5nU3Bpbm5lci5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nLXNwaW5uZXInKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU291cmNlRWxlbWVudCkgJiZcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5zaXplcykge1xuICAgICAgICAgICAgZWxlbWVudC5zaXplcyA9IGVsZW1lbnQuZGF0YXNldC5zaXplcztcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNpemVzJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNvdXJjZUVsZW1lbnQpICYmXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuc3Jjc2V0KSB7XG4gICAgICAgICAgICBlbGVtZW50LnNyY3NldCA9IGVsZW1lbnQuZGF0YXNldC5zcmNzZXQ7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmNzZXQnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU291cmNlRWxlbWVudCkgJiZcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5zcmMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3JjID0gZWxlbWVudC5kYXRhc2V0LnNyYztcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyYycpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGdldEVsZW1lbnRzKCkge1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIFtdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50ICYmXG4gICAgICAgICAgICAodGhpcy5lbGVtZW50LmRhdGFzZXQuc3JjIHx8IHRoaXMuZWxlbWVudC5kYXRhc2V0LnNyY3NldCkpIHtcbiAgICAgICAgICAgIHJldHVybiBbdGhpcy5lbGVtZW50XTtcbiAgICAgICAgfVxuICAgICAgICBpZiAod2luZG93LkhUTUxQaWN0dXJlRWxlbWVudCAmJiB0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbZGF0YS1zcmNdLCBzb3VyY2VbZGF0YS1zcmNzZXRdJykpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBBcnJheS5mcm9tKHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yQWxsKCdpbWdbZGF0YS1zcmNdJykpO1xuICAgIH1cbiAgICBtYW5hZ2VDc3NDbGFzc2VzKGVsZW1lbnQpIHtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdsb2FkZWQnKTtcbiAgICAgICAgZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdsb2FkaW5nJyk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgICAgICBjb25zdCBsYXp5bG9hZEVsZW1lbnRzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1sYXp5bG9hZF0nKSk7XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgbGF6eWxvYWRFbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IGxhenlsb2FkRWxlbWVudHNbaV07XG4gICAgICAgICAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgbm8tbmV3XG4gICAgICAgICAgICBuZXcgTGF6eUxvYWRlcihlbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gJy4uL2NvbW1vbi9EYXRhTGF5ZXInO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4vRmllbGRWYWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE5ld3NsZXR0ZXJTdWJzY3JpYmUgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuZGF0YUxheWVyID0gRGF0YUxheWVyO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgICAgICB0aGlzLmVtYWlsRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJlbWFpbFwiXScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05ld3NsZXR0ZXIgc3Vic2NyaWJlIGNvbXBvbmVudCBub3QgdmFsaWQnKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRmllbGRWYWxpZGF0aW9uKHRoaXMuZW1haWxGaWVsZCk7XG4gICAgICAgIHZhbGlkYXRvci5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSAoKF9hID0gZm9ybURhdGEuZ2V0KCdmaXJzdC1uYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGNvbXBhbnlOYW1lID0gKChfYiA9IGZvcm1EYXRhLmdldCgnY29tcGFueS1uYW1lJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsID0gKChfYyA9IGZvcm1EYXRhLmdldCgnZW1haWwnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgaWYgKCFlbWFpbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnbWFpbGNoaW1wc3Vic2NyaWJlJyxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgY29tcGFueU5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBGaWVsZFZhbGlkYXRpb24ucmVtb3ZlRXJyb3JUZXh0KHRoaXMuZW1haWxGaWVsZCk7XG4gICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcykpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0gfHwgIXRoaXMuZW1haWxGaWVsZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzcG9uc2UsIGV2ZW50KSB7XG4gICAgICAgIEZpZWxkVmFsaWRhdGlvbi5hcHBlbmRTdWNjZXNzVGV4dCh0aGlzLmVtYWlsRmllbGQsIHJlc3BvbnNlLmRhdGEudG9TdHJpbmcoKSk7XG4gICAgICAgIHRoaXMuZW1haWxGaWVsZC52YWx1ZSA9ICcnO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6ICdHQUV2ZW50JyxcbiAgICAgICAgICAgIGV2ZW50Q2F0ZWdvcnk6ICduZXdzbGV0dGVyJyxcbiAgICAgICAgICAgIGV2ZW50QWN0aW9uOiAnc3Vic2NyaWJlJyxcbiAgICAgICAgICAgIGV2ZW50TGFiZWw6IHRoaXMuZm9ybS5pZCB8fCAnZ2VuZXJpYydcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICB9XG4gICAgb25GYWlsdXJlKGVycm9yKSB7XG4gICAgICAgIEZpZWxkVmFsaWRhdGlvbi5hcHBlbmRFcnJvclRleHQodGhpcy5lbWFpbEZpZWxkLCBlcnJvci5tZXNzYWdlKTtcbiAgICAgICAgdGhyb3cgZXJyb3I7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICAvLyAjVE9ETzogU3dpdGNoIHRvIGNvbW1vbiBzZWxlY3RvclxuICAgICAgICBjb25zdCBmb3JtcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnI2Zvb3Rlci1uZXdzbGV0dGVyLWZvcm0sICNob21lcGFnZS1uZXdzbGV0dGVyLWZvcm0sICNhamF4LW5ld3NsZXR0ZXItZm9ybScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZvcm1zLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZm9ybSA9IGZvcm1zW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IG5ld3NsZXR0ZXJTdWJzY3JpYmUgPSBuZXcgTmV3c2xldHRlclN1YnNjcmliZShmb3JtKTtcbiAgICAgICAgICAgIG5ld3NsZXR0ZXJTdWJzY3JpYmUuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFBhc3N3b3JkUmV2ZWFsIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dCA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFt0eXBlPVwicGFzc3dvcmRcIl0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gdGhpcy5jcmVhdGVSZXZlYWxCdXR0b24oKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFwcGVuZENoaWxkKGJ1dHRvbik7XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5jbGFzc0xpc3QudG9nZ2xlKCdvcGVuZWQnKTtcbiAgICAgICAgICAgIGlmICh0aGlzLnBhc3N3b3JkSW5wdXQudHlwZSA9PT0gJ3Bhc3N3b3JkJykge1xuICAgICAgICAgICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dC50eXBlID0gJ3RleHQnO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRJbnB1dC50eXBlID0gJ3Bhc3N3b3JkJztcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNyZWF0ZVJldmVhbEJ1dHRvbigpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XG4gICAgICAgIGJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIGJ1dHRvbi5jbGFzc05hbWUgPSAncGFzc3dvcmQtcmV2ZWFsLXRvZ2dsZSc7XG4gICAgICAgIGJ1dHRvbi50YWJJbmRleCA9IC0xO1xuICAgICAgICByZXR1cm4gYnV0dG9uO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRSb3dzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcucGFzc3dvcmQtcm93JykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFzc3dvcmRSb3dzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRSb3cgPSBwYXNzd29yZFJvd3NbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKHBhc3N3b3JkUm93ID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmRSZXZlYWwgPSBuZXcgUGFzc3dvcmRSZXZlYWwocGFzc3dvcmRSb3cpO1xuICAgICAgICAgICAgcGFzc3dvcmRSZXZlYWwuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uO1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBlbmRwb2ludHMgZnJvbSAnLi4vdXRpbC9lbmRwb2ludHMnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWRlZW1Qb2ludHNGb3JDb3Vwb24gZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGJ1dHRvbikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbi5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiwgYnV0dG9uLCBcImZcIik7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXQoZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25TdWJtaXQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgaWQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLCBcImZcIikuZGF0YXNldC5pZDtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4cmVkZWVtY291cG9uJyxcbiAgICAgICAgICAgIGlkOiBpZFxuICAgICAgICB9O1xuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgZW5kcG9pbnRzLmFqYXgsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIGV2ZW50LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLCBcImZcIikpO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiwgXCJmXCIpKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmVkZWVtQnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInJlZGVlbS1jb3Vwb25cIl0nKSk7XG4gICAgICAgIGlmIChyZWRlZW1CdXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlZGVlbUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWRlZW1Qb2ludHNGb3JDb3Vwb24gPSBuZXcgUmVkZWVtUG9pbnRzRm9yQ291cG9uKGJ1dHRvbik7XG4gICAgICAgICAgICByZWRlZW1Qb2ludHNGb3JDb3Vwb24uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiA9IG5ldyBXZWFrTWFwKCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldDtcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgc2Nyb2xsVG9UYXJnZXQgZnJvbSAnLi4vdXRpbC9zY3JvbGxUb1RhcmdldCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxUb0NvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHRhcmdldCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgZWxlbWVudCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0LCB0YXJnZXQsIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQsIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlck9mZnNldCA9ICFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgXCJmXCIpLmRhdGFzZXQuaGVhZGVyT2Zmc2V0O1xuICAgICAgICAgICAgc2Nyb2xsVG9UYXJnZXQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldCwgXCJmXCIpLCAwLCBoZWFkZXJPZmZzZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zY3JvbGwtdG9dJykpO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGVsZW1lbnQuZGF0YXNldC5zY3JvbGxUbyB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2Nyb2xsVG9Db250ZW50KGVsZW1lbnQsIHRhcmdldCk7XG4gICAgICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCA9IG5ldyBXZWFrTWFwKCksIF9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0ID0gbmV3IFdlYWtNYXAoKTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9lbGVtZW50LCBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfdGltZW91dCwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUsIF9WaWRlb01lZGlhUmVzb2x2ZXJfc2hvd1NvdXJjZTtcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL3BvbHlmaWxscy9tYXRjaE1lZGlhJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvTWVkaWFSZXNvbHZlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zb3VyY2VzLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfVmlkZW9NZWRpYVJlc29sdmVyX3RpbWVvdXQuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCwgZWxlbWVudCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcywgQXJyYXkuZnJvbShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCwgXCJmXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NvdXJjZScpKSwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzLCBcIm1cIiwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUpLmNhbGwodGhpcyk7XG4gICAgICAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpO1xuICAgICAgICBjb25zdCBtcTIgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknKTtcbiAgICAgICAgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIobXEsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgXCJtXCIsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplKS5jYWxsKHRoaXMpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyKG1xMiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzLCBcIm1cIiwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUpLmNhbGwodGhpcyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlb1tkYXRhLXJlc29sdmVdJykpO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBWaWRlb01lZGlhUmVzb2x2ZXIoZWxlbWVudCk7XG4gICAgICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCA9IG5ldyBXZWFrTWFwKCksIF9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcyA9IG5ldyBXZWFrTWFwKCksIF9WaWRlb01lZGlhUmVzb2x2ZXJfdGltZW91dCA9IG5ldyBXZWFrTWFwKCksIF9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiBfVmlkZW9NZWRpYVJlc29sdmVyX2hhbmRsZVJlc2l6ZSgpIHtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcywgXCJmXCIpLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHNvdXJjZS5kYXRhc2V0Lm9yaWVudGF0aW9uIHx8ICcnO1xuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IE51bWJlcihzb3VyY2UuZGF0YXNldC5tYXhXaWR0aCkgfHwgMDtcbiAgICAgICAgY29uc3QgY3VycmVudE9yaWVudGF0aW9uID0gd2luZG93Lm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJykubWF0Y2hlc1xuICAgICAgICAgICAgPyAncG9ydHJhaXQnXG4gICAgICAgICAgICA6ICdsYW5kc2NhcGUnO1xuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgaWYgKGN1cnJlbnRPcmllbnRhdGlvbiAhPT0gb3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4V2lkdGggJiYgY3VycmVudFdpZHRoID49IG1heFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgXCJtXCIsIF9WaWRlb01lZGlhUmVzb2x2ZXJfc2hvd1NvdXJjZSkuY2FsbCh0aGlzLCBzb3VyY2UpO1xuICAgIH0pO1xufSwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zaG93U291cmNlID0gZnVuY3Rpb24gX1ZpZGVvTWVkaWFSZXNvbHZlcl9zaG93U291cmNlKHNvdXJjZSkge1xuICAgIGNvbnN0IGRhdGFTcmMgPSBzb3VyY2UuZGF0YXNldC5zcmM7XG4gICAgaWYgKCFkYXRhU3JjKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQsIFwiZlwiKS5zcmMgPSBkYXRhU3JjO1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihtcSwgY2FsbGJhY2ssIGV2ZW50QnViYmxpbmcgPSBmYWxzZSkge1xuICAgIHRyeSB7XG4gICAgICAgIG1xLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNhbGxiYWNrLCBldmVudEJ1YmJsaW5nKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgbXEuYWRkTGlzdGVuZXIoKCkgPT4gY2FsbGJhY2spO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaE1lZGlhUmVtb3ZlRXZlbnRMaXN0ZW5lcihtcSwgY2FsbGJhY2spIHtcbiAgICB0cnkge1xuICAgICAgICBtcS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIG1xLnJlbW92ZUxpc3RlbmVyKCgpID0+IGNhbGxiYWNrKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZGlhbG9nUG9seWZpbGwgZnJvbSAnZGlhbG9nLXBvbHlmaWxsJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBkaXNhYmxlQm9keVNjcm9sbCwgZW5hYmxlQm9keVNjcm9sbCB9IGZyb20gJy4uL3V0aWwvYm9keSc7XG5pbXBvcnQgeyB0b0NhbWVsQ2FzZSB9IGZyb20gJy4uL3V0aWwvc3RyaW5nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBnZXQgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH1cbiAgICBzZXQgaXNPcGVuKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY2FtZWxEYXRhQXR0cmlidXRlKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YUF0dHJpYnV0ZS5yZXBsYWNlKCdkYXRhLScsICcnKTtcbiAgICAgICAgcmV0dXJuIHRvQ2FtZWxDYXNlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IHRyYW5zaXRpb25UaW1lKCkge1xuICAgICAgICBpZiAodGhpcy5fdHJhbnNpdGlvblRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uVGltZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uVGltZSA9IHRoaXMuZ2V0VHJhbnNpdGlvblRpbWUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb25UaW1lO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLnBvbHlmaWxsRGlhbG9nKCk7XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2VdJykpO1xuICAgICAgICBjbG9zZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRzaWRlQ2xpY2soZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvdXRzaWRlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBjbGlja2VkSW5EaWFsb2cgPSByZWN0LnRvcCA8PSBldmVudC5jbGllbnRZICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WSA8PSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgcmVjdC5sZWZ0IDw9IGV2ZW50LmNsaWVudFggJiZcbiAgICAgICAgICAgICAgICBldmVudC5jbGllbnRYIDw9IHJlY3QubGVmdCArIHJlY3Qud2lkdGg7XG4gICAgICAgICAgICBpZiAoIWNsaWNrZWRJbkRpYWxvZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KGBbJHt0aGlzLmRhdGFBdHRyaWJ1dGV9PVwiJHt0aGlzLmVsZW1lbnQuZGF0YXNldFtgJHt0aGlzLmNhbWVsRGF0YUF0dHJpYnV0ZX1gXX1cIl1gKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIG9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRpc2FibGVCb2R5U2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zaG93TW9kYWwoKTtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMub3Blbik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmNsb3NlZCk7XG4gICAgICAgIH0sIHRoaXMudHJhbnNpdGlvblRpbWUpO1xuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgZW5hYmxlQm9keVNjcm9sbCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMub3Blbik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmNsb3NlZCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMudHJhbnNpdGlvblRpbWUpO1xuICAgIH1cbiAgICBnZXRUcmFuc2l0aW9uVGltZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IChfYSA9IHN0eWxlcy50cmFuc2l0aW9uRHVyYXRpb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnO1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5pbmRleE9mKCdtcycpID4gLTFcbiAgICAgICAgICAgID8gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgICAgICA6IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSAqIDEwMDA7XG4gICAgICAgIHJldHVybiBkdXJhdGlvbiB8fCA0MDA7XG4gICAgfVxuICAgIHBvbHlmaWxsRGlhbG9nKCkge1xuICAgICAgICBkaWFsb2dQb2x5ZmlsbCA9PT0gbnVsbCB8fCBkaWFsb2dQb2x5ZmlsbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGlhbG9nUG9seWZpbGwucmVnaXN0ZXJEaWFsb2codGhpcy5lbGVtZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgeyBnZXRDb29raWVWYWx1ZSwgc2V0Q29va2llVmFsdWUgfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZ3VhZ2VQb3B1cCBleHRlbmRzIFBvcHVwIHtcbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoc2VsZWN0b3IgIT09IGRvY3VtZW50KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldENvb2tpZVZhbHVlKCdsYW5ndWFnZS1wb3B1cC1zZWVuJykpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXRoID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgICAgICBpZiAocGF0aCA9PT0gJy9ubC8nIHx8IHBhdGggPT09ICcvZnIvJyB8fCBwYXRoID09PSAnL2RlLycpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwcmVmZXJyZWRMYW5ndWFnZSA9IChfYSA9IHdpbmRvdy5uYXZpZ2F0b3IubGFuZ3VhZ2UpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICdlbic7XG4gICAgICAgIGNvbnN0IGxhbmd1YWdlID0gcHJlZmVycmVkTGFuZ3VhZ2Uuc3Vic3RyaW5nKDAsIDIpO1xuICAgICAgICBpZiAobGFuZ3VhZ2UgPT09ICdlbicpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwID0gTGFuZ3VhZ2VQb3B1cC5vcGVuUG9wdXAoJ2xhbmd1YWdlLXBvcHVwJywgbnVsbCwgc2VsZWN0b3IpO1xuICAgICAgICAgICAgc2V0Q29va2llVmFsdWUoJ2xhbmd1YWdlLXBvcHVwLXNlZW4nLCAndHJ1ZScsIHtcbiAgICAgICAgICAgICAgICAnbWF4LWFnZSc6IDMxNTM2MDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwb3B1cCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRvbWFpbkRyb3Bkb3duID0gcG9wdXAucXVlcnlTZWxlY3RvcignI2RvbWFpbi1kcm9wZG93bicpO1xuICAgICAgICAgICAgY29uc3Qgc3RheURvbWFpbkJ1dHRvbiA9IChfYSA9IHBvcHVwID09PSBudWxsIHx8IHBvcHVwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3B1cC5xdWVyeVNlbGVjdG9yKCcjc3RheURvbWFpbicpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBudWxsO1xuICAgICAgICAgICAgY29uc3Qgb3RoZXJEb21haW5CdXR0b25zID0gQXJyYXkuZnJvbShwb3B1cCA9PT0gbnVsbCB8fCBwb3B1cCA9PT0gdm9pZCAwID8gdm9pZCAwIDogcG9wdXAucXVlcnlTZWxlY3RvckFsbCgnLm90aGVyRG9tYWlucycpKTtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdERvbWFpbkJ1dHRvbiA9IHBvcHVwID09PSBudWxsIHx8IHBvcHVwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3B1cC5xdWVyeVNlbGVjdG9yKCcjc3VibWl0LWRvbWFpbicpO1xuICAgICAgICAgICAgc3RheURvbWFpbkJ1dHRvbiA9PT0gbnVsbCB8fCBzdGF5RG9tYWluQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdGF5RG9tYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHBvcHVwID09PSBudWxsIHx8IHBvcHVwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3B1cC5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJykpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBvdGhlckRvbWFpbkJ1dHRvbnMuZm9yRWFjaCgob3RoZXJEb21haW5CdXR0b24pID0+IHtcbiAgICAgICAgICAgICAgICBvdGhlckRvbWFpbkJ1dHRvbiA9PT0gbnVsbCB8fCBvdGhlckRvbWFpbkJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogb3RoZXJEb21haW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGNvbnRhaW5lcnMgPSBBcnJheS5mcm9tKHBvcHVwID09PSBudWxsIHx8IHBvcHVwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcubGFuZ3VhZ2UtcG9wdXBfX2NvbnRhaW5lcicpKTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVycy5mb3JFYWNoKChjb250YWluZXIpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRhaW5lci50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgc3VibWl0RG9tYWluQnV0dG9uID09PSBudWxsIHx8IHN1Ym1pdERvbWFpbkJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3VibWl0RG9tYWluQnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gZG9tYWluRHJvcGRvd24gPT09IG51bGwgfHwgZG9tYWluRHJvcGRvd24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRvbWFpbkRyb3Bkb3duLnNlbGVjdGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF2YWx1ZSB8fCAhZG9tYWluRHJvcGRvd24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBtYXBwaW5nID0gZG9tYWluRHJvcGRvd24uZGF0YXNldC5tYXBwaW5nXG4gICAgICAgICAgICAgICAgICAgID8gSlNPTi5wYXJzZShkb21haW5Ecm9wZG93bi5kYXRhc2V0Lm1hcHBpbmcpXG4gICAgICAgICAgICAgICAgICAgIDoge307XG4gICAgICAgICAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTChtYXBwaW5nW3ZhbHVlXSk7XG4gICAgICAgICAgICAgICAgaWYgKCF1cmwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC5ocmVmO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX3BvcHVwLnBjc3MnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUG9wdXAgZXh0ZW5kcyBEaWFsb2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRhdGFBdHRyaWJ1dGUgPSAnZGF0YS1wb3B1cC1uYW1lJztcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgICAgICAgb3BlbjogJ3BvcHVwLS1vcGVuZWQnLFxuICAgICAgICAgICAgY2xvc2VkOiAncG9wdXAtLWNsb3NlZCdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIG9wZW5Qb3B1cChwb3B1cElELCBlbGVtZW50ID0gbnVsbCwgc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBwb3B1cCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLW5hbWU9XCIke3BvcHVwSUR9XCJdYCk7XG4gICAgICAgIGlmIChwb3B1cCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cC10ZW1wbGF0ZT1cIiR7cG9wdXBJRH1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGVsZW1lbnQuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGNsb25lO1xuICAgICAgICAgICAgKF9hID0gdGVtcGxhdGUucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgICAgcG9wdXAgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wb3B1cC1uYW1lPVwiJHtwb3B1cElEfVwiXWApO1xuICAgICAgICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIHBvcHVwKTtcbiAgICAgICAgICAgIGlmIChwb3B1cCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgcG9wdXBJbnN0YW5jZSA9IG5ldyBQb3B1cChwb3B1cCk7XG4gICAgICAgICAgICBwb3B1cEluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXBvcHVwLm9wZW4pIHtcbiAgICAgICAgICAgIGNvbnN0IG9wZW5FdmVudCA9IG5ldyBDdXN0b21FdmVudCgnb3BlbicpO1xuICAgICAgICAgICAgcG9wdXAuZGlzcGF0Y2hFdmVudChvcGVuRXZlbnQpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBwb3B1cDtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XG4gICAgICAgIGNvbnN0IHBvcHVwTGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBvcHVwXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBvcHVwTGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcG9wdXBMaW5rc1tpbmRleF07XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNyZWF0aW9uRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBoYW5kbGVDcmVhdGlvbkV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHBvcHVwSUQgPSB0aGlzLmRhdGFzZXQucG9wdXAgfHwgJyc7XG4gICAgICAgIFBvcHVwLm9wZW5Qb3B1cChwb3B1cElELCB0aGlzKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19zaWRlUGFuZWwucGNzcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlUGFuZWwgZXh0ZW5kcyBEaWFsb2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRhdGFBdHRyaWJ1dGUgPSAnZGF0YS1wYW5lbC1uYW1lJztcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgICAgICAgb3BlbjogJ3NpZGUtcGFuZWwtLW9wZW5lZCcsXG4gICAgICAgICAgICBjbG9zZWQ6ICdzaWRlLXBhbmVsLS1jbG9zZWQnLFxuICAgICAgICAgICAgbGVmdDogJ3NpZGUtcGFuZWwtLWxlZnQnLFxuICAgICAgICAgICAgcmlnaHQ6ICdzaWRlLXBhbmVsLS1yaWdodCdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIG9wZW5TaWRlUGFuZWwocGFuZWxJRCwgZWxlbWVudCA9IG51bGwpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYW5lbC1uYW1lPVwiJHtwYW5lbElEfVwiXWApO1xuICAgICAgICBpZiAocGFuZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtdGVtcGxhdGU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgICAgICBpZiAodGVtcGxhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBlbGVtZW50LmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGNsb25lO1xuICAgICAgICAgICAgKF9hID0gdGVtcGxhdGUucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgICAgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYW5lbC1uYW1lPVwiJHtwYW5lbElEfVwiXWApO1xuICAgICAgICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIHBhbmVsKTtcbiAgICAgICAgICAgIGlmIChwYW5lbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNpZGVQYW5lbEluc3RhbmNlID0gbmV3IFNpZGVQYW5lbChwYW5lbCk7XG4gICAgICAgICAgICBzaWRlUGFuZWxJbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9nZ2xlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RvZ2dsZScpO1xuICAgICAgICBwYW5lbC5kaXNwYXRjaEV2ZW50KHRvZ2dsZUV2ZW50KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XG4gICAgICAgIGNvbnN0IHBhbmVsTGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhbmVsXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhbmVsTGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcGFuZWxMaW5rc1tpbmRleF07XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNyZWF0aW9uRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBoYW5kbGVDcmVhdGlvbkV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHBhbmVsSUQgPSB0aGlzLmRhdGFzZXQucGFuZWwgfHwgJyc7XG4gICAgICAgIC8vIElmIGFscmVhZHkgbG9nZ2VkIGluIGZvbGxvdyBsaW5rXG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgJiZcbiAgICAgICAgICAgIHBhbmVsSUQgPT09ICdteS1hY2NvdW50LXBhbmVsJyAmJlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvZ2dlZC1pbicpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuaHJlZjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBTaWRlUGFuZWwub3BlblNpZGVQYW5lbChwYW5lbElELCB0aGlzKTtcbiAgICB9XG59XG4iLCJjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmxldCBzY3JvbGxQb3NpdGlvbiA9IDA7XG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZUJvZHlTY3JvbGwoKSB7XG4gICAgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBib2R5RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUudG9wID0gYC0ke3Njcm9sbFBvc2l0aW9ufXB4YDtcbiAgICBib2R5RWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnaW5pdGlhbCc7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQm9keVNjcm9sbCgpIHtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncG9zaXRpb24nKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxQb3NpdGlvbik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdzY3JvbGwtYmVoYXZpb3InKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWVWYWx1ZShuYW1lKSB7XG4gICAgY29uc3QgY29va2llID0gZG9jdW1lbnQuY29va2llXG4gICAgICAgIC5zcGxpdCgnOyAnKVxuICAgICAgICAuZmluZCgocm93KSA9PiByb3cuc3RhcnRzV2l0aChuYW1lKSk7XG4gICAgaWYgKGNvb2tpZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY29va2llLnNwbGl0KCc9JylbMV07XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0Q29va2llVmFsdWUobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb29raWVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6ICcvJyB9LCBvcHRpb25zKTtcbiAgICBsZXQgdXBkYXRlZENvb2tpZSA9IGAke25hbWV9PSR7dmFsdWV9YDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG4gICAgZm9yIChjb25zdCBvcHRpb25LZXkgaW4gY29va2llT3B0aW9ucykge1xuICAgICAgICB1cGRhdGVkQ29va2llICs9IGA7ICR7b3B0aW9uS2V5fWA7XG4gICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gY29va2llT3B0aW9uc1tvcHRpb25LZXldO1xuICAgICAgICBpZiAob3B0aW9uVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gYD0ke29wdGlvblZhbHVlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0RhdGVWYWxpZChkYXRlKSB7XG4gICAgcmV0dXJuICFOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgIGNvbnN0IGRheSA9IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyhkYXRlLmdldERhdGUoKSk7XG4gICAgY29uc3QgbW9udGggPSBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHttb250aH0tJHtkYXl9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8obnVtYmVyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhudW1iZXIpLnBhZFN0YXJ0KDIsICcwJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbE1vbnRoTmFtZShtb250aCwgbG9jYWxlID0gJ2RlZmF1bHQnKSB7XG4gICAgcmV0dXJuIG1vbnRoLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgeyBtb250aDogJ2xvbmcnIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3RyaW5nQXNIdG1sKGNvbnRlbnQsIHNlbGVjdG9yID0gJ3RlbXBsYXRlJykge1xuICAgIGNvbnN0IGRvbVBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBjb25zdCBwYXJzZWQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICd0ZXh0L2h0bWwnKTtcbiAgICByZXR1cm4gcGFyc2VkLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIHx8IHBhcnNlZC5ib2R5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFic29sdXRlSGVpZ2h0KGVsKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIGNvbnN0IG1hcmdpbiA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20pO1xuICAgIHJldHVybiBNYXRoLmNlaWwoZWwub2Zmc2V0SGVpZ2h0ICsgbWFyZ2luKTtcbn1cbiIsImNvbnN0IGVuZHBvaW50cyA9IHtcbiAgICBhamF4OiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGBcbn07XG5leHBvcnQgZGVmYXVsdCBlbmRwb2ludHM7XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudExpbmtDbGFzcygpIHtcbiAgICBjb25zdCBwYXRoTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBjb25zdCBmb3JtYXR0ZWRQYXRoTmFtZSA9IHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoTmFtZSk7XG4gICAgY29uc3QgZnVsbFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IGZvcm1hdHRlZFVybCA9IHN0cmlwVHJhaWxpbmdTbGFzaChmdWxsVXJsKTtcbiAgICBjb25zdCBhbmNob3JzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7cGF0aE5hbWV9XCJdLFxuICAgICAgICBuYXYgYVtocmVmPVwiJHtmb3JtYXR0ZWRQYXRoTmFtZX1cIl0sXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke2Z1bGxVcmx9XCJdLFxuICAgICAgICBuYXYgYVtocmVmPVwiJHtmb3JtYXR0ZWRVcmx9XCJdXG4gICAgYCkpO1xuICAgIGFuY2hvcnMuZm9yRWFjaCgoYW5jaG9yKSA9PiB7XG4gICAgICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWxpbmsnKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdHJpcFRyYWlsaW5nU2xhc2goc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5lbmRzV2l0aCgnLycpID8gc3RyLnNsaWNlKDAsIC0xKSA6IHN0cjtcbn1cbiIsImxldCBsb2FkZWQgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBzaXRla2V5ID0gJzZMZHYyUmtjQUFBQUFCQ0NMMUpSNURsbUVFVDROeV8yQ21rVmE4TnYnO1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRSZWNhcHRjaGEoZWxlbWVudHMpIHtcbiAgICBsb29wVGhyb3VnaEVsZW1lbnRzKGVsZW1lbnRzLCB0cnVlLCAoKSA9PiB7XG4gICAgICAgIGluc2VydFJlY2FwdGNoYVNjcmlwdChlbGVtZW50cyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbnNlcnRSZWNhcHRjaGFTY3JpcHQoZWxlbWVudHMpIHtcbiAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzP3JlbmRlcj0ke3NpdGVrZXl9YDtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICBsb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsb29wVGhyb3VnaEVsZW1lbnRzKGVsZW1lbnRzLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICBpbnNlcnRSZWNhcHRjaGFTY3JpcHQoZWxlbWVudHMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbG9vcFRocm91Z2hFbGVtZW50cyhlbGVtZW50cywgYWRkRXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBbJ2ZvY3VzJywgJ2NsaWNrJywgJ3RvdWNoZW5kJywgJ2JsdXInLCAnaW5wdXQnLCAnY2hhbmdlJywgJ3Byb3BlcnR5Y2hhbmdlJ10uZm9yRWFjaCgoZXZ0KSA9PiB7XG4gICAgICAgICAgICBpZiAoYWRkRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2dCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Nyb2xsVG9UYXJnZXQodGFyZ2V0LCBkZWZhdWx0T2Zmc2V0ID0gMCwgaGVhZGVyT2Zmc2V0ID0gdHJ1ZSkge1xuICAgIGNvbnN0IGJvZHlUb3BQb3NpdGlvbiA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBib2R5VG9wUG9zaXRpb247XG4gICAgbGV0IG9mZnNldCA9IGRlZmF1bHRPZmZzZXQ7XG4gICAgaWYgKGhlYWRlck9mZnNldCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICAgIG9mZnNldCArPSBoZWFkZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9mZnNldFBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uIC0gb2Zmc2V0ICsgMTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG1hdGNoLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcd1xcUyovZywgKHR4dCkgPT4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRWYWxpZGF0aW9uTWVzc2FnZShtZXNzYWdlLCBlbGVtZW50KSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGZvcm1Sb3cgPSAoX2EgPSBlbGVtZW50LmNsb3Nlc3QoJy5mb3JtLXJvdycpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBlbGVtZW50O1xuICAgIGNvbnN0IGZvcm1Sb3dQYXJlbnQgPSBmb3JtUm93ID09PSBudWxsIHx8IGZvcm1Sb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1Sb3cucGFyZW50RWxlbWVudDtcbiAgICBpZiAoZm9ybVJvdyA9PT0gbnVsbCB8fCAhZm9ybVJvd1BhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlbW92ZUV4aXN0aW5nVmFsaWRhdGlvbk1lc3NhZ2VzKGVsZW1lbnQsIGZvcm1Sb3dQYXJlbnQpO1xuICAgIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ2FsZXJ0IGFsZXJ0LS13YXJuaW5nIGlubGluZS1mb3JtLWVycm9yJztcbiAgICB2YWxpZGF0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgZm9ybVJvd1BhcmVudC5pbnNlcnRCZWZvcmUodmFsaWRhdGlvbkVsZW1lbnQsIGZvcm1Sb3cpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV4aXN0aW5nVmFsaWRhdGlvbk1lc3NhZ2VzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gc2VsZWN0b3IgfHwgKChfYSA9IGVsZW1lbnQucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhcmVudEVsZW1lbnQpO1xuICAgIGlmICghZ3JhbmRwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBleGlzdGluZ1ZhbGlkYXRpb25zID0gQXJyYXkuZnJvbShncmFuZHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQtLXdhcm5pbmcnKSk7XG4gICAgZXhpc3RpbmdWYWxpZGF0aW9ucy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIHYucmVtb3ZlKCk7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIF9DdXJ0YWluRWxlbWVudF9jb250ZW50LCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2ssIF9DdXJ0YWluRWxlbWVudF9vcGVuLCBfQ3VydGFpbkVsZW1lbnRfZXhwYW5kLCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gsIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucztcbmltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2FjY29yZGlvbi5wY3NzJztcbmltcG9ydCB7IGdldEFic29sdXRlSGVpZ2h0IH0gZnJvbSAnLi4vdXRpbC9kb20nO1xuY2xhc3MgQ3VydGFpbkVsZW1lbnQgZXh0ZW5kcyBIVE1MRGV0YWlsc0VsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnkuc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3Rvcignc3VtbWFyeScpKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQuc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcignLmN1cnRhaW4tY29udGVudCcpKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZy5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrLnNldCh0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIC8vIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgLy8gZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9jb250ZW50LCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbG9zZScpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBcImZcIikgfHwgdGhpcy5vcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluRWxlbWVudF9vcGVuKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBvcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICB9XG4gICAgc2V0IG9wZW4odmFsdWUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoJ29wZW4nLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICAvLyB0aGlzLiNzdW1tYXJ5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy4jaGFuZGxlQ2xpY2ssIHtcbiAgICAgICAgLy8gICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgIC8vICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICAvLyB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIFwiZlwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrLCBcImZcIikpO1xuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCB0cnVlLCBcImZcIik7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnY2xvc2luZycpO1xuICAgICAgICBjb25zdCBzdGFydEhlaWdodCA9IGAke3RoaXMub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgICAgY29uc3QgZW5kSGVpZ2h0ID0gYCR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgXCJmXCIpLm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKSkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCB0aGlzLmFuaW1hdGUoe1xuICAgICAgICAgICAgaGVpZ2h0OiBbc3RhcnRIZWlnaHQsIGVuZEhlaWdodF1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0J1xuICAgICAgICB9KSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5vbmZpbmlzaCA9ICgpID0+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCkuY2FsbCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLm9uY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBmYWxzZSwgXCJmXCIpO1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJyk7XG4gICAgICAgIH07XG4gICAgfVxufVxuX0N1cnRhaW5FbGVtZW50X3N1bW1hcnkgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9DdXJ0YWluRWxlbWVudF9vcGVuID0gZnVuY3Rpb24gX0N1cnRhaW5FbGVtZW50X29wZW4oKSB7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluRWxlbWVudF9leHBhbmQpLmNhbGwodGhpcykpO1xufSwgX0N1cnRhaW5FbGVtZW50X2V4cGFuZCA9IGZ1bmN0aW9uIF9DdXJ0YWluRWxlbWVudF9leHBhbmQoKSB7XG4gICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgY29uc3QgZW5kSGVpZ2h0ID0gYCR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgXCJmXCIpLm9mZnNldEhlaWdodCArIGdldEFic29sdXRlSGVpZ2h0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQsIFwiZlwiKSl9cHhgO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5jYW5jZWwoKTtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCB0aGlzLmFuaW1hdGUoe1xuICAgICAgICBoZWlnaHQ6IFtzdGFydEhlaWdodCwgZW5kSGVpZ2h0XVxuICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnXG4gICAgfSksIFwiZlwiKTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5vbmZpbmlzaCA9ICgpID0+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCkuY2FsbCh0aGlzLCB0cnVlKTtcbn0sIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCA9IGZ1bmN0aW9uIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaChvcGVuKSB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIG51bGwsIFwiZlwiKTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIGZhbHNlLCBcImZcIik7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJyk7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd0b2dnbGUnKSk7XG59O1xuY2xhc3MgQWNjb3JkaW9uRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMuc2V0KHRoaXMsIFtdKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdkZXRhaWxzJykpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIFwiZlwiKS5mb3JFYWNoKChjdXJ0YWluKSA9PiB7XG4gICAgICAgICAgICBjdXJ0YWluLmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnRhaW4ub3Blbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zKS5jYWxsKHRoaXMsIGN1cnRhaW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zID0gbmV3IFdlYWtNYXAoKSwgX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zID0gZnVuY3Rpb24gX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zKGN1cnRhaW4pIHtcbiAgICBjb25zdCBvdGhlckN1cnRhaW5zID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucywgXCJmXCIpLmZpbHRlcigoYykgPT4gY3VydGFpbiAhPT0gYyk7XG4gICAgb3RoZXJDdXJ0YWlucy5mb3JFYWNoKChvdGhlckN1cnRhaW4pID0+IHtcbiAgICAgICAgY29uc3QgY3VydGFpbkVsZW1lbnQgPSBvdGhlckN1cnRhaW47XG4gICAgICAgIGN1cnRhaW5FbGVtZW50Lm9wZW4gPSBmYWxzZTtcbiAgICB9KTtcbn07XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FjY29yZGlvbi1lbGVtZW50JywgQWNjb3JkaW9uRWxlbWVudCk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2N1cnRhaW4tZWxlbWVudCcsIEN1cnRhaW5FbGVtZW50LCB7IGV4dGVuZHM6ICdkZXRhaWxzJyB9KTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBfQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbiwgX0JpcnRoZGF5Rm9ybV9kYXlGaWVsZCwgX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkLCBfQmlydGhkYXlGb3JtX2dldERheVZhbHVlcywgX0JpcnRoZGF5Rm9ybV9nZXRNb250aFZhbHVlcywgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCwgX0JpcnRoZGF5Rm9ybV9vblN1Y2Nlc3MsIF9CaXJ0aGRheUZvcm1fb25GYWlsdXJlO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvLCBnZXRGdWxsTW9udGhOYW1lIH0gZnJvbSAnLi4vdXRpbC9kYXRlSGVscGVyJztcbmltcG9ydCBlbmRwb2ludHMgZnJvbSAnLi4vdXRpbC9lbmRwb2ludHMnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5jbGFzcyBCaXJ0aGRheUZvcm0gZXh0ZW5kcyBIVE1MRm9ybUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfQmlydGhkYXlGb3JtX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uLnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJykpO1xuICAgICAgICBfQmlydGhkYXlGb3JtX2RheUZpZWxkLnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJyNiaXJ0aGRheS1kYXknKSk7XG4gICAgICAgIF9CaXJ0aGRheUZvcm1fbW9udGhGaWVsZC5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKCcjYmlydGhkYXktbW9udGgnKSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX29uU3VibWl0KS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbiwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQpLmJpbmQodGhpcykpO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2RheUZpZWxkLCBcImZcIikgPT09IG51bGwgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX21vbnRoRmllbGQsIFwiZlwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9kYXlGaWVsZCwgXCJmXCIpLm9wdGlvblZhbHVlcyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX2dldERheVZhbHVlcykuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkLCBcImZcIikub3B0aW9uVmFsdWVzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fZ2V0TW9udGhWYWx1ZXMpLmNhbGwodGhpcyk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCkuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24sIFwiZlwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX29uU3VibWl0KS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5fQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbiA9IG5ldyBXZWFrTWFwKCksIF9CaXJ0aGRheUZvcm1fZGF5RmllbGQgPSBuZXcgV2Vha01hcCgpLCBfQmlydGhkYXlGb3JtX21vbnRoRmllbGQgPSBuZXcgV2Vha01hcCgpLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9CaXJ0aGRheUZvcm1fZ2V0RGF5VmFsdWVzID0gZnVuY3Rpb24gX0JpcnRoZGF5Rm9ybV9nZXREYXlWYWx1ZXMoKSB7XG4gICAgY29uc3QgcmV0dXJuVmFsdWUgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG51bSA9IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyhpKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm5WYWx1ZVtudW1dID0gbnVtO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59LCBfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzID0gZnVuY3Rpb24gX0JpcnRoZGF5Rm9ybV9nZXRNb250aFZhbHVlcygpIHtcbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICAgICAgY29uc3QgbnVtID0gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKGkpLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgMjAyMS0ke251bX0tMDJgKTtcbiAgICAgICAgY29uc3QgbW9udGhOYW1lID0gZ2V0RnVsbE1vbnRoTmFtZShkYXRlKTtcbiAgICAgICAgcmV0dXJuVmFsdWVbaV0gPSBtb250aE5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbn0sIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX29uU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCBkYXkgPSBmb3JtRGF0YS5nZXQoJ2RheScpO1xuICAgIGNvbnN0IG1vbnRoID0gZm9ybURhdGEuZ2V0KCdtb250aCcpO1xuICAgIGNvbnN0IHllYXIgPSAnMTk3MCc7XG4gICAgaWYgKCFkYXkgfHwgIW1vbnRoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWApO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGFjdGlvbjogJ2FqYXhkYXRlb2ZiaXJ0aCcsXG4gICAgICAgIGRhdGU6IGZvcm1hdERhdGUoZGF0ZSlcbiAgICB9O1xuICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludHMuYWpheCwgbnVsbCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25TdWNjZXNzKS5iaW5kKHRoaXMpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmUpLmJpbmQodGhpcyksIGV2ZW50LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uLCBcImZcIikpO1xuICAgIHJldHVybiBmYWxzZTtcbn0sIF9CaXJ0aGRheUZvcm1fb25TdWNjZXNzID0gZnVuY3Rpb24gX0JpcnRoZGF5Rm9ybV9vblN1Y2Nlc3MoKSB7XG4gICAgY29uc3QgYmxvY2sgPSB0aGlzLmNsb3Nlc3QoJ1tpcz1cInNpZ251cC1ibG9ja1wiXScpO1xuICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBibG9jay5jb21wbGV0ZWQgPSB0cnVlO1xufSwgX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmUgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX29uRmFpbHVyZSgpIHtcbiAgICAvLyBzdHVmZlxufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmlydGhkYXktZm9ybScsIEJpcnRoZGF5Rm9ybSwgeyBleHRlbmRzOiAnZm9ybScgfSk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgX0Nhcm91c2VsRWxlbWVudF9wcmV2QnV0dG9uLCBfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24sIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLCBfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsLCBfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUsIF9DYXJvdXNlbEVsZW1lbnRfZ2V0VHJhbnNsYXRlWCwgX0Nhcm91c2VsRWxlbWVudF9nZXRJdGVtV2lkdGg7XG5pbXBvcnQgeyBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL3BvbHlmaWxscy9tYXRjaE1lZGlhJztcbmNsYXNzIENhcm91c2VsRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zLnNldCh0aGlzLCBbXSk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfbGlzdC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudC5zZXQodGhpcywgMCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlci5zZXQodGhpcywgMyk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwuc2V0KHRoaXMsIDApO1xuICAgIH1cbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBzZXQgYWN0aXZlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKCdhY3RpdmUnLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pdGVtXScpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgdGhpcy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pdGVtc10nKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbiwgdGhpcy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcmV2XScpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5leHRdJyksIFwiZlwiKTtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgXCJmXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X3ByZXZCdXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlKS5jYWxsKHRoaXMsIC0xKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uLCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSkuY2FsbCh0aGlzLCAxKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudENoZWNrID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEwMjNweCknKTtcbiAgICAgICAgY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Q2hlY2subWF0Y2hlcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBzZXR1cCgpO1xuICAgICAgICBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihjb21wb25lbnRDaGVjaywgc2V0dXAsIGZhbHNlKTtcbiAgICB9XG4gICAgZGVpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbCwgXCJmXCIpKTtcbiAgICAgICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QsIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUpLmNhbGwodGhpcywgMCk7XG4gICAgICAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDQ3OXB4KScpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50KS5jYWxsKHRoaXMsIG1xKTtcbiAgICAgICAgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIobXEsICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQpLmNhbGwodGhpcywgbXEpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbCwgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoZXMoJzpob3ZlcicpIHx8IHRoaXMubWF0Y2hlcygnOmZvY3VzLXdpdGhpbicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUpLmNhbGwodGhpcywgMSk7XG4gICAgICAgIH0sIDcwMDApLCBcImZcIik7XG4gICAgfVxufVxuX0Nhcm91c2VsRWxlbWVudF9pdGVtcyA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbiA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbiA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlciA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwgPSBuZXcgV2Vha01hcCgpLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudCA9IGZ1bmN0aW9uIF9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudChtcSkge1xuICAgIGNvbnN0IGl0ZW1zU2hvd24gPSBtcS5tYXRjaGVzID8gMSA6IDI7XG4gICAgaWYgKGl0ZW1zU2hvd24gPCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIFwiZlwiKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlciwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zLCBcImZcIikubGVuZ3RoIC0gaXRlbXNTaG93biwgXCJmXCIpO1xufSwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSA9IGZ1bmN0aW9uIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUoaW5jcmVtZW50KSB7XG4gICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgXCJmXCIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBcImZcIikgKyBpbmNyZW1lbnQsIFwiZlwiKTtcbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIFwiZlwiKSA8IDApIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLCBcImZcIiksIFwiZlwiKTtcbiAgICB9XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBcImZcIikgPiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlciwgXCJmXCIpKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCAwLCBcImZcIik7XG4gICAgfVxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBcImZcIikuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9nZXRUcmFuc2xhdGVYKS5jYWxsKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBcImZcIikpfXB4KWA7XG59LCBfQ2Fyb3VzZWxFbGVtZW50X2dldFRyYW5zbGF0ZVggPSBmdW5jdGlvbiBfQ2Fyb3VzZWxFbGVtZW50X2dldFRyYW5zbGF0ZVgoY291bnQpIHtcbiAgICBjb25zdCBtb250aFdpZHRoID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoKS5jYWxsKHRoaXMpO1xuICAgIHJldHVybiAtKG1vbnRoV2lkdGggKiBjb3VudCk7XG59LCBfQ2Fyb3VzZWxFbGVtZW50X2dldEl0ZW1XaWR0aCA9IGZ1bmN0aW9uIF9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoKCkge1xuICAgIGNvbnN0IGl0ZW0gPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIFwiZlwiKVswXTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1XaWR0aCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgZ3JpZEdhcCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBcImZcIikpLmNvbHVtbkdhcCwgMTApO1xuICAgIHJldHVybiBpdGVtV2lkdGggKyBncmlkR2FwO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2Fyb3VzZWwtZWxlbWVudCcsIENhcm91c2VsRWxlbWVudCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfTGFuZ3VhZ2VTd2l0Y2hlcl9pbnN0YW5jZXMsIF9MYW5ndWFnZVN3aXRjaGVyX2dldFZhbHVlLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9vbkNoYW5nZTtcbmltcG9ydCBMYXZhbmRyZVNlbGVjdCBmcm9tICcuL0xhdmFuZHJlU2VsZWN0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhbmd1YWdlU3dpdGNoZXIgZXh0ZW5kcyBMYXZhbmRyZVNlbGVjdCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9MYW5ndWFnZVN3aXRjaGVyX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnbGFuZ3VhZ2Utc3dpdGNoZXInKTtcbiAgICAgICAgY29uc3QganNvbiA9IHRoaXMuZGF0YXNldC5qc29uO1xuICAgICAgICBpZiAoIWpzb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmlkID0gJ2RvbWFpbi1kcm9wZG93bi1maWVsZCc7XG4gICAgICAgIHRoaXMuaWNvbiA9IChfYiA9IChfYSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjYXJ0JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5vdXRlckhUTUwpICE9PSBudWxsICYmIF9iICE9PSB2b2lkIDAgPyBfYiA6ICcnO1xuICAgICAgICB0aGlzLm9wdGlvblZhbHVlcyA9IEpTT04ucGFyc2UoanNvbikgfHwgW107XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBzdXBlci5jb25uZWN0ZWRDYWxsYmFjaygpO1xuICAgICAgICBpZiAodGhpcy5oYXNBdHRyaWJ1dGUoJ2RhdGEtY2hhbmdlJykpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9pbnN0YW5jZXMsIFwibVwiLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9vbkNoYW5nZSkuYmluZCh0aGlzKSk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmRpc2Nvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9pbnN0YW5jZXMsIFwibVwiLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9vbkNoYW5nZSkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgc3VwZXIudXBkYXRlKCk7XG4gICAgICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWUuc3Vic3RyaW5nKDAsIDQpO1xuICAgICAgICBsZXQgdmFsdWU7XG4gICAgICAgIHN3aXRjaCAocGF0aCkge1xuICAgICAgICAgICAgY2FzZSAnL25sLyc6XG4gICAgICAgICAgICAgICAgdmFsdWUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYW5ndWFnZVN3aXRjaGVyX2luc3RhbmNlcywgXCJtXCIsIF9MYW5ndWFnZVN3aXRjaGVyX2dldFZhbHVlKS5jYWxsKHRoaXMsICdOZWRlcmxhbmRzJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcvZGUvJzpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhbmd1YWdlU3dpdGNoZXJfaW5zdGFuY2VzLCBcIm1cIiwgX0xhbmd1YWdlU3dpdGNoZXJfZ2V0VmFsdWUpLmNhbGwodGhpcywgJ0RldXRzY2hsYW5kJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICcvZnIvJzpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhbmd1YWdlU3dpdGNoZXJfaW5zdGFuY2VzLCBcIm1cIiwgX0xhbmd1YWdlU3dpdGNoZXJfZ2V0VmFsdWUpLmNhbGwodGhpcywgJ0ZyYW5jZScpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhbmd1YWdlU3dpdGNoZXJfaW5zdGFuY2VzLCBcIm1cIiwgX0xhbmd1YWdlU3dpdGNoZXJfZ2V0VmFsdWUpLmNhbGwodGhpcywgJ0ludGVybmF0aW9uYWwnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwID8gdmFsdWUgOiAnSW50ZXJuYXRpb25hbCc7XG4gICAgfVxufVxuX0xhbmd1YWdlU3dpdGNoZXJfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0xhbmd1YWdlU3dpdGNoZXJfZ2V0VmFsdWUgPSBmdW5jdGlvbiBfTGFuZ3VhZ2VTd2l0Y2hlcl9nZXRWYWx1ZSh2YWx1ZSkge1xuICAgIGNvbnN0IG1hcHBpbmcgPSB0aGlzLmRhdGFzZXQubWFwcGluZyA/IEpTT04ucGFyc2UodGhpcy5kYXRhc2V0Lm1hcHBpbmcpIDoge307XG4gICAgcmV0dXJuIG1hcHBpbmdbdmFsdWVdID8gdmFsdWUgOiAnJztcbn0sIF9MYW5ndWFnZVN3aXRjaGVyX29uQ2hhbmdlID0gZnVuY3Rpb24gX0xhbmd1YWdlU3dpdGNoZXJfb25DaGFuZ2UoKSB7XG4gICAgY29uc3QgdmFsdWUgPSB0aGlzLnNlbGVjdGVkVmFsdWU7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG1hcHBpbmcgPSB0aGlzLmRhdGFzZXQubWFwcGluZyA/IEpTT04ucGFyc2UodGhpcy5kYXRhc2V0Lm1hcHBpbmcpIDoge307XG4gICAgY29uc3QgdXJsID0gbmV3IFVSTChtYXBwaW5nW3ZhbHVlXSk7XG4gICAgaWYgKCF1cmwpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHVybC5ocmVmO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGFuZ3VhZ2Utc3dpdGNoZXInLCBMYW5ndWFnZVN3aXRjaGVyKTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcywgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUsIF9MYXZhbmRyZVNlbGVjdF9uYW1lLCBfTGF2YW5kcmVTZWxlY3RfcGxhY2Vob2xkZXIsIF9MYXZhbmRyZVNlbGVjdF9pY29uLCBfTGF2YW5kcmVTZWxlY3RfaWQsIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciwgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbiwgX0xhdmFuZHJlU2VsZWN0X2ZpbHRlciwgX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93biwgX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93bjtcbmltcG9ydCB7IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyB9IGZyb20gJy4uL3V0aWwvZGF0ZUhlbHBlcic7XG5pbXBvcnQgeyBwYXJzZVN0cmluZ0FzSHRtbCB9IGZyb20gJy4uL3V0aWwvZG9tJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdmFuZHJlU2VsZWN0IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKGlkID0gJycsIHBsYWNlaG9sZGVyID0gJycpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLnNldCh0aGlzLCBbXSk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlLnNldCh0aGlzLCAnJyk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9uYW1lLnNldCh0aGlzLCB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8ICcnKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X3BsYWNlaG9sZGVyLnNldCh0aGlzLCAnJyk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9pY29uLnNldCh0aGlzLCAnJyk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9pZC5zZXQodGhpcywgJycpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIuc2V0KHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdCkge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24pLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2xvc2VzdCA9IHRhcmdldC5jbG9zZXN0KCcubGF2YW5kcmUtc2VsZWN0Jyk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCB8fCBjbG9zZXN0ID09PSBudWxsIHx8IGNsb3Nlc3QgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdsYXZhbmRyZS1zZWxlY3QnKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5jbGFzc0xpc3QuYWRkKCdsYXZhbmRyZS1zZWxlY3RfX2lucHV0Jyk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5hdXRvY2FwaXRhbGl6ZSA9ICdvZmYnO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEFCRUwnKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLCBcImZcIikuY2xhc3NMaXN0LmFkZCgnbGF2YW5kcmUtc2VsZWN0X19sYWJlbCcpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLCBcImZcIikuaW5uZXJUZXh0ID0gcGxhY2Vob2xkZXI7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwsIFwiZlwiKS5odG1sRm9yID0gaWQ7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgXCJmXCIpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVUwnKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpLmNsYXNzTGlzdC5hZGQoJ2xhdmFuZHJlLXNlbGVjdF9fZHJvcGRvd24nKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikpO1xuICAgIH1cbiAgICBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9wbGFjZWhvbGRlciwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgcGxhY2Vob2xkZXIodmFsdWUpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfcGxhY2Vob2xkZXIsIHZhbHVlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikucGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgXCJmXCIpLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaWNvbigpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2ljb24sIFwiZlwiKTtcbiAgICB9XG4gICAgc2V0IGljb24odmFsdWUpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaWNvbiwgdmFsdWUsIFwiZlwiKTtcbiAgICB9XG4gICAgZ2V0IGlkKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaWQsIFwiZlwiKTtcbiAgICB9XG4gICAgc2V0IGlkKHZhbHVlKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2lkLCB2YWx1ZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmlkID0gdmFsdWU7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwsIFwiZlwiKS5odG1sRm9yID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfbmFtZSwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9uYW1lLCB2YWx1ZSwgXCJmXCIpO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0ZWRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUsIFwiZlwiKTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkVmFsdWUodmFsdWUpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZSwgdmFsdWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS52YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14wKy8sICcnKTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvblZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcywgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgb3B0aW9uVmFsdWVzKHZhbHVlKSB7XG4gICAgICAgIGNvbnN0IGFyciA9IE9iamVjdC5lbnRyaWVzKHZhbHVlKS5zb3J0KChbLCBhXSwgWywgYl0pID0+IGEgLSBiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLCBhcnIsIFwiZlwiKTtcbiAgICAgICAgdGhpcy51cGRhdGUoKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfZmlsdGVyKS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9zaG93RHJvcGRvd24pLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9maWx0ZXIpLmJpbmQodGhpcykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93bikuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHVwZGF0ZSgpIHtcbiAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLCBcImZcIikpIHtcbiAgICAgICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0T3B0aW9uKS5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdsYXZhbmRyZS1zZWxlY3RfX2Ryb3Bkb3duX19pdGVtJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5pY29uKSB7XG4gICAgICAgICAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKHBhcnNlU3RyaW5nQXNIdG1sKHRoaXMuaWNvbiwgJ3N2ZycpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNwYW4gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzcGFuJyk7XG4gICAgICAgICAgICBzcGFuLmNsYXNzTGlzdC5hZGQoJ2xhdmFuZHJlLXNlbGVjdF9fZHJvcGRvd25fX2l0ZW1fX3RleHQnKTtcbiAgICAgICAgICAgIHNwYW4uaW5uZXJUZXh0ID0gdmFsdWUucmVwbGFjZSgvXjArLywgJycpO1xuICAgICAgICAgICAgb3B0aW9uLmFwcGVuZENoaWxkKHNwYW4pO1xuICAgICAgICAgICAgY29uc3QgdmFsdWUyID0gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKHZhbHVlKS50b1N0cmluZygpO1xuICAgICAgICAgICAgb3B0aW9uLmRhdGFzZXQudmFsdWUgPSB2YWx1ZTI7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignLmxhdmFuZHJlLXNlbGVjdF9fZHJvcGRvd25fX2l0ZW0nKTtcbiAgICAgICAgaWYgKCFmaXJzdE9wdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZpcnN0T3B0aW9uLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbGljaycpKTtcbiAgICB9XG59XG5fTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcyA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X25hbWUgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3RfcGxhY2Vob2xkZXIgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3RfaWNvbiA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9pZCA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0T3B0aW9uID0gZnVuY3Rpb24gX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC5kYXRhc2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93bikuY2FsbCh0aGlzKTtcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCdjaGFuZ2UnLCB7IGRldGFpbDogeyB2YWx1ZSB9IH0pKTtcbn0sIF9MYXZhbmRyZVNlbGVjdF9maWx0ZXIgPSBmdW5jdGlvbiBfTGF2YW5kcmVTZWxlY3RfZmlsdGVyKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLmxhdmFuZHJlLXNlbGVjdF9fZHJvcGRvd25fX2l0ZW0nKSk7XG4gICAgY29uc3QgdmFsdWUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gb3B0aW9uLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGV4dC5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG59LCBfTGF2YW5kcmVTZWxlY3Rfc2hvd0Ryb3Bkb3duID0gZnVuY3Rpb24gX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93bigpIHtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikuaGlkZGVuID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciwgXCJmXCIpKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSwgX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93biA9IGZ1bmN0aW9uIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24oKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciwgXCJmXCIpKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGF2YW5kcmUtc2VsZWN0JywgTGF2YW5kcmVTZWxlY3QpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9MYXZhbmRyZVRvZ2dsZV9pbnN0YW5jZXMsIF9MYXZhbmRyZVRvZ2dsZV9lbGVtZW50cywgX0xhdmFuZHJlVG9nZ2xlX3RvZ2dsZXMsIF9MYXZhbmRyZVRvZ2dsZV9jbGlja0hhbmRsZXI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhbmRyZVRvZ2dsZSBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0xhdmFuZHJlVG9nZ2xlX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9MYXZhbmRyZVRvZ2dsZV9lbGVtZW50cy5zZXQodGhpcywgW10pO1xuICAgICAgICBfTGF2YW5kcmVUb2dnbGVfdG9nZ2xlcy5zZXQodGhpcywgW10pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVUb2dnbGVfZWxlbWVudHMsIEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1uYW1lXScpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVRvZ2dsZV90b2dnbGVzLCBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtdG9nZ2xlXScpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVRvZ2dsZV90b2dnbGVzLCBcImZcIikuZm9yRWFjaCgodG9nZ2xlKSA9PiB7XG4gICAgICAgICAgICB0b2dnbGUuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVRvZ2dsZV9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVUb2dnbGVfY2xpY2tIYW5kbGVyKS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlVG9nZ2xlX2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVRvZ2dsZV9jbGlja0hhbmRsZXIpLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB9XG59XG5fTGF2YW5kcmVUb2dnbGVfZWxlbWVudHMgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVUb2dnbGVfdG9nZ2xlcyA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVRvZ2dsZV9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfTGF2YW5kcmVUb2dnbGVfY2xpY2tIYW5kbGVyID0gZnVuY3Rpb24gX0xhdmFuZHJlVG9nZ2xlX2NsaWNrSGFuZGxlcigpIHtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVRvZ2dsZV9lbGVtZW50cywgXCJmXCIpLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgZWxlbWVudC50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicsICFlbGVtZW50LmhpZGRlbik7XG4gICAgfSk7XG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsYXZhbmRyZS10b2dnbGUnLCBMYXZhbmRyZVRvZ2dsZSk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgX1NpZ251cEJsb2NrX3RlbXBsYXRlLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgX1NpZ251cEJsb2NrX2hyZWYsIF9TaWdudXBCbG9ja19wb2ludHMsIF9TaWdudXBCbG9ja190eXBlLCBfU2lnbnVwQmxvY2tfY29tcGxldGVkLCBfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeSwgX1NpZ251cEJsb2NrX21xLCBfU2lnbnVwQmxvY2tfaXNNb2JpbGUsIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlLCBfU2lnbnVwQmxvY2tfc2V0VGVtcGxhdGUsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLCBfU2lnbnVwQmxvY2tfY2xpY2tIYW5kbGVyLCBfU2lnbnVwQmxvY2tfc2V0T3ZlcmxheUV2ZW50TGlzdGVuZXJzLCBfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGU7XG5pbXBvcnQgeyBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lciwgbWF0Y2hNZWRpYVJlbW92ZUV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9wb2x5ZmlsbHMvbWF0Y2hNZWRpYSc7XG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4uL3V0aWwvZW5kcG9pbnRzJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lnbnVwQmxvY2sgZXh0ZW5kcyBIVE1MTElFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9TaWdudXBCbG9ja190ZW1wbGF0ZS5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9TaWdudXBCbG9ja19vdmVybGF5LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX2hyZWYuc2V0KHRoaXMsIHRoaXMuZGF0YXNldC5ocmVmIHx8IG51bGwpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfcG9pbnRzLnNldCh0aGlzLCBOdW1iZXIodGhpcy5kYXRhc2V0LnBvaW50cykgfHwgMCk7XG4gICAgICAgIF9TaWdudXBCbG9ja190eXBlLnNldCh0aGlzLCB0aGlzLmdldEF0dHJpYnV0ZSgndHlwZScpIHx8ICcnKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX2NvbXBsZXRlZC5zZXQodGhpcywgdGhpcy5oYXNBdHRyaWJ1dGUoJ2NvbXBsZXRlZCcpIHx8IGZhbHNlKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX21lZGlhUXVlcnkuc2V0KHRoaXMsIGdldENvbXB1dGVkU3R5bGUoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50KS5nZXRQcm9wZXJ0eVZhbHVlKCctLXRhYmxldC1sYW5kc2NhcGUnKSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19tcS5zZXQodGhpcywgbWF0Y2hNZWRpYShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tZWRpYVF1ZXJ5LCBcImZcIikpKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX2lzTW9iaWxlLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlci5zZXQodGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIFwiZlwiKS5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfc2V0VGVtcGxhdGUpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfc2V0T3ZlcmxheUV2ZW50TGlzdGVuZXJzKS5jYWxsKHRoaXMpO1xuICAgICAgICB9KTtcbiAgICAgICAgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLnNldCh0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGlmIChldmVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nLCB0cnVlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19jbGlja0hhbmRsZXIuc2V0KHRoaXMsICgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmNvbXBsZXRlZCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheGFkZGxveWFsdHlwb2ludHMnLFxuICAgICAgICAgICAgICAgIHBvaW50czogU3RyaW5nKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3BvaW50cywgXCJmXCIpKSxcbiAgICAgICAgICAgICAgICBwb29sOiAnZGVmYXVsdCcsXG4gICAgICAgICAgICAgICAgdHlwZTogX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfdHlwZSwgXCJmXCIpXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIGVuZHBvaW50cy5hamF4LCBudWxsLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jb21wbGV0ZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB3aW5kb3cub3BlbihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19ocmVmLCBcImZcIiksICdfYmxhbmsnKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBjb21wbGV0ZWQoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19jb21wbGV0ZWQsIFwiZlwiKTtcbiAgICB9XG4gICAgc2V0IGNvbXBsZXRlZCh2YWx1ZSkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX2NvbXBsZXRlZCwgdmFsdWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfdGVtcGxhdGUsIG51bGwsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgbnVsbCwgXCJmXCIpO1xuICAgICAgICAoX2EgPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb2ludHMtZ3JpZF9fb3ZlcmxheScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucmVtb3ZlKCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19zZXRUZW1wbGF0ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgY29uc3QgdGl0bGVzID0gQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wb2ludHMtZ3JpZF9fdGl0bGUtY29udGVudCcpKTtcbiAgICAgICAgdGl0bGVzLmZvckVhY2goKHRpdGxlKSA9PiB7XG4gICAgICAgICAgICB0aXRsZS50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicsICF0aXRsZS5oaWRkZW4pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlKS5jYWxsKHRoaXMpO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaXNNb2JpbGUsIFwiZlwiKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbXEsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUpKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICBtYXRjaE1lZGlhUmVtb3ZlRXZlbnRMaXN0ZW5lcihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tcSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSkpO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaHJlZiwgXCJmXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfY2xpY2tIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICB9XG4gICAgfVxufVxuX1NpZ251cEJsb2NrX3RlbXBsYXRlID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX292ZXJsYXkgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfaHJlZiA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19wb2ludHMgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfdHlwZSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19jb21wbGV0ZWQgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19tcSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19pc01vYmlsZSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19jbGlja0hhbmRsZXIgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUgPSBmdW5jdGlvbiBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSgpIHtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja19pc01vYmlsZSwgIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21xLCBcImZcIikubWF0Y2hlcywgXCJmXCIpO1xuICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pc01vYmlsZSwgXCJmXCIpO1xufSwgX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlID0gZnVuY3Rpb24gX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3RlbXBsYXRlLCBcImZcIikpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfdGVtcGxhdGUsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19nZXRUZW1wbGF0ZSkuY2FsbCh0aGlzKSwgXCJmXCIpO1xuICAgIH1cbiAgICB0aGlzLmFwcGVuZENoaWxkKChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3RlbXBsYXRlLCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5jb250ZW50LmNsb25lTm9kZSh0cnVlKSk7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgdGhpcy5xdWVyeVNlbGVjdG9yKCcucG9pbnRzLWdyaWRfX292ZXJsYXknKSwgXCJmXCIpO1xuICAgIGNvbnN0IGNsb3NlT3ZlcmxheUJ1dHRvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignW2RhdGEtY2xvc2VdJyk7XG4gICAgaWYgKCFjbG9zZU92ZXJsYXlCdXR0b24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjbG9zZU92ZXJsYXlCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciwgXCJmXCIpLmJpbmQodGhpcyksIGZhbHNlKTtcbn0sIF9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMgPSBmdW5jdGlvbiBfU2lnbnVwQmxvY2tfc2V0T3ZlcmxheUV2ZW50TGlzdGVuZXJzKCkge1xuICAgIHZhciBfYTtcbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaHJlZiwgXCJmXCIpKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvbltpcz1cImxhdmFuZHJlLWJ1dHRvblwiXScpO1xuICAgICAgICBpZiAoIWJ1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciwgXCJmXCIpKTtcbiAgICB9XG59LCBfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGUgPSBmdW5jdGlvbiBfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGUoKSB7XG4gICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pbnRzLWdyaWQtb3ZlcmxheScpO1xuICAgIGlmICghZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvZ2dlZC1pbicpKSB7XG4gICAgICAgIHJldHVybiB0ZW1wbGF0ZTtcbiAgICB9XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2NvbXBsZXRlZCwgXCJmXCIpKSB7XG4gICAgICAgIHJldHVybiAoZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBvaW50cy1ncmlkLW92ZXJsYXktLWNvbXBsZXRlZC0tJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja190eXBlLCBcImZcIil9YCkgfHxcbiAgICAgICAgICAgIGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2ludHMtZ3JpZC1vdmVybGF5LS1jb21wbGV0ZWQnKSk7XG4gICAgfVxuICAgIGNvbnN0IHR5cGVUZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwb2ludHMtZ3JpZC1vdmVybGF5LS0ke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3R5cGUsIFwiZlwiKX1gKTtcbiAgICBpZiAodHlwZVRlbXBsYXRlKSB7XG4gICAgICAgIHJldHVybiB0eXBlVGVtcGxhdGU7XG4gICAgfVxuICAgIHJldHVybiB0ZW1wbGF0ZTtcbn07XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3NpZ251cC1ibG9jaycsIFNpZ251cEJsb2NrLCB7IGV4dGVuZHM6ICdsaScgfSk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX0xhdmFuZHJlQnV0dG9uX2lzRGlzYWJsZWQ7XG5pbXBvcnQgJy4vc3R5bGUucGNzcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhbmRyZUJ1dHRvbiBleHRlbmRzIEhUTUxCdXR0b25FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0xhdmFuZHJlQnV0dG9uX2lzRGlzYWJsZWQuc2V0KHRoaXMsIHRoaXMuaGFzQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJykpO1xuICAgICAgICB0aGlzLmNsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuaHJlZiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuaHJlZjtcbiAgICAgICAgfTtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2lzJywgJ2xhdmFuZHJlLWJ1dHRvbicpO1xuICAgIH1cbiAgICBnZXQgbGFiZWwoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmlubmVyVGV4dDtcbiAgICB9XG4gICAgc2V0IGxhYmVsKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBocmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJztcbiAgICB9XG4gICAgc2V0IGhyZWYodXJsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc2l6ZScpIHx8ICcnO1xuICAgIH1cbiAgICBzZXQgc2l6ZSh1cmwpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCB1cmwpO1xuICAgIH1cbiAgICBnZXQgcHJpbWFyeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBwcmltYXJ5KGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ByaW1hcnknLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgb3V0bGluZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBvdXRsaW5lKGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ291dGxpbmUnLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgbGluaygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdsaW5rJyk7XG4gICAgfVxuICAgIHNldCBsaW5rKGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2xpbmsnLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgZnVsbFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgc2V0IGZ1bGxXaWR0aChib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmdWxsLXdpZHRoJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IGxvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgncHJpbWFyeScpO1xuICAgIH1cbiAgICBzZXQgbG9hZGluZyhib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IGlzRGlzYWJsZWQoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZUJ1dHRvbl9pc0Rpc2FibGVkLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBpc0Rpc2FibGVkKHZhbHVlKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlQnV0dG9uX2lzRGlzYWJsZWQsIHZhbHVlLCBcImZcIik7XG4gICAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKCdhcmlhLWRpc2FibGVkJywgdmFsdWUpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgaWYgKHRoaXMuaHJlZikge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuY2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbl9MYXZhbmRyZUJ1dHRvbl9pc0Rpc2FibGVkID0gbmV3IFdlYWtNYXAoKTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImV2ZW50RW1pdHRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXplQ29tcG9uZW50cyIsIm9uIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJjb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsIm9uSW5pdCIsIkFqYXhMb2dpbiIsIkFqYXhSZWdpc3RlciIsIkNvb2tpZUJhciIsIkNvcHlDb3Vwb24iLCJDdXJ0YWluIiwiRW1haWxWYWxpZGF0aW9uIiwiRmllbGRWYWxpZGF0aW9uIiwiRm9yZ290UGFzc3dvcmQiLCJGb3Jnb3RQYXNzd29yZFRvZ2dsZSIsIkhlYWRlclNlYXJjaCIsIkluZm9Qb3B1cCIsIkxhenlMb2FkZXIiLCJOZXdzbGV0dGVyU3Vic2NyaWJlIiwiUGFzc3dvcmRSZXZlYWwiLCJSZWRlZW1Qb2ludHNGb3JDb3Vwb24iLCJTY3JvbGxUb0NvbnRlbnQiLCJWaWRlb01lZGlhUmVzb2x2ZXIiLCJMYW5ndWFnZVBvcHVwIiwiU2lkZVBhbmVsIiwic2V0Q3VycmVudExpbmtDbGFzcyIsIkxhdmFuZHJlQnV0dG9uIiwiQXBwIiwiYXJndW1lbnRzIiwid3BGb3Jtc1N1Ym1pdEJ1dHRvbnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYXBwSW5pdCIsImFwcCIsImxhenlCYWNrZ3JvdW5kcyIsImZvb3RlclVzcFNsaWRlciIsInNldFRpbWVvdXQiLCJsaXN0IiwicXVlcnlTZWxlY3RvciIsIml0ZW1zIiwidG90YWxXaWR0aCIsIml0ZW0iLCJjbGllbnRXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpY2UiLCJjYWxsIiwid2luZG93IiwibGF6eUJhY2tncm91bmRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsImxhenlCYWNrZ3JvdW5kIiwib2JzZXJ2ZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiZXh0ZW5kcyIsIkRhdGFMYXllciIsImRhdGFMYXllciIsInB1c2giLCJkYXRhIiwiZWNvbW1lcmNlIiwiQ29tcG9uZW50IiwibG9hZFJlY2FwdGNoYSIsInNpdGVrZXkiLCJzZW5kQWpheFJlcXVlc3QiLCJzZXRWYWxpZGF0aW9uTWVzc2FnZSIsImZvcm0iLCJhamF4RW5kcG9pbnQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzVmFsaWQiLCJzZXRFdmVudExpc3RlbmVycyIsImZpZWxkcyIsIkN5cHJlc3MiLCJpbmRleCIsImxlbmd0aCIsImZpZWxkIiwidmFsaWRhdG9yIiwibWF0Y2hlcyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInN1Ym1pdEJ1dHRvbiIsInR5cGUiLCJldmVudCIsIm9uU3VibWl0IiwiX2EiLCJfYiIsInByZXZlbnREZWZhdWx0IiwidmFsaWQiLCJ2YWxpZGl0eSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ1c2VybmFtZSIsImdldCIsInRvU3RyaW5nIiwicGFzc3dvcmQiLCJncmVjYXB0Y2hhIiwiYWN0aW9uIiwicmVjYXB0Y2hhVG9rZW4iLCJ1bmRlZmluZWQiLCJyZWFkeSIsImV4ZWN1dGUiLCJ0aGVuIiwidG9rZW4iLCJvblN1Y2Nlc3MiLCJiaW5kIiwib25GYWlsdXJlIiwicmVzIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiRXJyb3IiLCJtZXRob2QiLCJocmVmIiwiZGF0YXNldCIsInJlZGlyZWN0VXJsIiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZSIsImxvZ2luRm9ybXMiLCJhamF4TG9naW4iLCJDb25maXJtVmFsaWRhdGlvbiIsImVtYWlsRmllbGQiLCJlbWFpbFZhbGlkYXRpb24iLCJwYXNzd29yZEZpZWxkIiwiY29uZmlybVBhc3N3b3JkRmllbGQiLCJjb25maXJtVmFsaWRhdGlvbiIsIl9jIiwiX2QiLCJlbWFpbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInJlZ2lzdGVyRm9ybSIsImFqYXhSZWdpc3RlciIsImNvbmZpcm1GaWVsZCIsImV2ZW50cyIsInZhbHVlIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJzZXQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiX0Nvb2tpZUJhcl9pbnN0YW5jZXMiLCJfQ29va2llQmFyX2VsZW1lbnQiLCJfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCIsIl9Db29raWVCYXJfYWNjZXB0QnV0dG9uIiwiX0Nvb2tpZUJhcl9nZXRFbGVtZW50IiwiX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzIiwiZ2V0Q29va2llVmFsdWUiLCJzZXRDb29raWVWYWx1ZSIsImNvb2tpZU5hbWUiLCJyZW1vdmUiLCJzZXRBY2NlcHRDb29raWUiLCJjb29raWVCYXIiLCJXZWFrTWFwIiwiV2Vha1NldCIsImNsb25lIiwiY2xvbmVOb2RlIiwiY29udGVudCIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIl9Db3B5Q291cG9uX2J1dHRvbiIsIm9uQ2xpY2siLCJjb2RlIiwidGV4dCIsImNvcGllZFRleHQiLCJuYXZpZ2F0b3IiLCJjbGlwYm9hcmQiLCJ3cml0ZVRleHQiLCJpbm5lclRleHQiLCJjb3B5QnV0dG9ucyIsImNvcHlDb3Vwb24iLCJfQ3VydGFpbl9pbnN0YW5jZXMiLCJfQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIiLCJfQ3VydGFpbl9oYW5kbGVUcmFuc2l0aW9uIiwiZm9sZEJ1dHRvbiIsIm9ubHlPbk1vYmlsZSIsImRlZmF1bHRIZWlnaHQiLCJnZXRDb21wdXRlZFN0eWxlIiwibWF4SGVpZ2h0IiwiZSIsImlubmVyV2lkdGgiLCJjb250YWlucyIsInNjcm9sbEhlaWdodCIsInJlYWRMZXNzIiwicmVhZE1vcmUiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwidG9nZ2xlcyIsInRvZ2dsZSIsImN1cnRhaW5Ub2dnbGUiLCJjdXJ0YWluIiwicmVtb3ZlUHJvcGVydHkiLCJyZW1vdmVFeGlzdGluZ1ZhbGlkYXRpb25NZXNzYWdlcyIsImVtYWlsSW5wdXQiLCJjbG9zZXN0IiwiYmx1clRpbWVvdXQiLCJjbGVhclRpbWVvdXQiLCJoYW5kbGVCbHVyRXZlbnQiLCJzZWN1cml0eSIsImVycm9yIiwicmVnaXN0ZXJFbWFpbElucHV0IiwiYW5jaG9yIiwicGFzc3dvcmRGb3JnZXRBbmNob3IiLCJmaWVsZFZhbGlkYXRpb24iLCJ1c2VyX2xvZ2luIiwicGFzc3dvcmRGb3JnZXRMaW5rcyIsImxpbmsiLCJmb3Jnb3RQYXNzd29yZCIsInBhc3N3b3JkRm9yZ2V0V3JhcHBlciIsImdldEVsZW1lbnRCeUlkIiwibG9naW5XcmFwcGVyIiwidG9nZ2xlQXR0cmlidXRlIiwiZG9jdW1lbnRDbGlja0hhbmRsZXIiLCJldmVudFRhcmdldCIsIndpdGhpbkhlYWRlciIsImJvZHkiLCJzdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24iLCJzZWFyY2hJbnB1dEVsZW1lbnQiLCJmb2N1cyIsImhlYWRlclNlYXJjaCIsImluc3RhbmNlIiwic2hvd1RpcHB5IiwidGlwcHkiLCJ0aGVtZSIsImFsbG93SFRNTCIsImhpZGVPbkNsaWNrIiwic2hvd09uQ3JlYXRlIiwiaW50ZXJhY3RpdmUiLCJvbkhpZGRlbiIsImkiLCJkZXN0cm95Iiwic2hvdyIsImhpZGVXaXRoSW50ZXJhY3Rpdml0eSIsInRpcHB5RWxlbWVudHMiLCJ0aXBweUVsZW1lbnQiLCJpbmZvUG9wdXAiLCJlbGVtZW50cyIsImdldEVsZW1lbnRzIiwib25JbnRlcnNlY3Rpb25PYnNlcnZlciIsImxhenlsb2FkIiwiT2JzZXJ2ZXJDbGFzcyIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsInRocmVzaG9sZCIsImxhenlJbWFnZU9ic2VydmVyIiwiSFRNTFBpY3R1cmVFbGVtZW50IiwibGF6eSIsImRpc2Nvbm5lY3QiLCJsYXp5SW1hZ2UiLCJlbCIsIm1hbmFnZUNzc0NsYXNzZXMiLCJpbWFnZSIsImxvYWRpbmdTcGlubmVyIiwiSFRNTEltYWdlRWxlbWVudCIsIkhUTUxTb3VyY2VFbGVtZW50Iiwic2l6ZXMiLCJzcmNzZXQiLCJzcmMiLCJsYXp5bG9hZEVsZW1lbnRzIiwiY29tcGFueU5hbWUiLCJyZW1vdmVFcnJvclRleHQiLCJhcHBlbmRTdWNjZXNzVGV4dCIsImV2ZW50Q2F0ZWdvcnkiLCJldmVudEFjdGlvbiIsImV2ZW50TGFiZWwiLCJpZCIsImFwcGVuZEVycm9yVGV4dCIsImZvcm1zIiwibmV3c2xldHRlclN1YnNjcmliZSIsInBhc3N3b3JkSW5wdXQiLCJjcmVhdGVSZXZlYWxCdXR0b24iLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGFiSW5kZXgiLCJwYXNzd29yZFJvd3MiLCJwYXNzd29yZFJvdyIsInBhc3N3b3JkUmV2ZWFsIiwiX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24iLCJlbmRwb2ludHMiLCJhamF4IiwicmVkZWVtQnV0dG9ucyIsInJlZGVlbVBvaW50c0ZvckNvdXBvbiIsIl9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCIsIl9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0Iiwic2Nyb2xsVG9UYXJnZXQiLCJoZWFkZXJPZmZzZXQiLCJ0YXJnZXRJZCIsInNjcm9sbFRvIiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMiLCJfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQiLCJfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMiLCJfVmlkZW9NZWRpYVJlc29sdmVyX3RpbWVvdXQiLCJfVmlkZW9NZWRpYVJlc29sdmVyX2hhbmRsZVJlc2l6ZSIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfc2hvd1NvdXJjZSIsIm1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyIiwibXEiLCJtYXRjaE1lZGlhIiwibXEyIiwic291cmNlIiwib3JpZW50YXRpb24iLCJtYXhXaWR0aCIsIk51bWJlciIsImN1cnJlbnRPcmllbnRhdGlvbiIsImN1cnJlbnRXaWR0aCIsImRhdGFTcmMiLCJjYWxsYmFjayIsImV2ZW50QnViYmxpbmciLCJhZGRMaXN0ZW5lciIsIm1hdGNoTWVkaWFSZW1vdmVFdmVudExpc3RlbmVyIiwicmVtb3ZlTGlzdGVuZXIiLCJkaWFsb2dQb2x5ZmlsbCIsImRpc2FibGVCb2R5U2Nyb2xsIiwiZW5hYmxlQm9keVNjcm9sbCIsInRvQ2FtZWxDYXNlIiwiRGlhbG9nIiwiX2lzT3BlbiIsIl90cmFuc2l0aW9uVGltZSIsImlzT3BlbiIsImNhbWVsRGF0YUF0dHJpYnV0ZSIsImRhdGFBdHRyaWJ1dGUiLCJyZXBsYWNlIiwidHJhbnNpdGlvblRpbWUiLCJnZXRUcmFuc2l0aW9uVGltZSIsInBvbHlmaWxsRGlhbG9nIiwib3BlbiIsImNsb3NlQnV0dG9ucyIsImNsb3NlIiwib3V0c2lkZUNsaWNrIiwicmVjdCIsImdldEJvdW5kaW5nQ2xpZW50UmVjdCIsImNsaWNrZWRJbkRpYWxvZyIsInRvcCIsImNsaWVudFkiLCJoZWlnaHQiLCJsZWZ0IiwiY2xpZW50WCIsInNob3dNb2RhbCIsImNsYXNzZXMiLCJjbG9zZWQiLCJzdHlsZXMiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJkdXJhdGlvbiIsImluZGV4T2YiLCJwYXJzZUZsb2F0IiwicmVnaXN0ZXJEaWFsb2ciLCJQb3B1cCIsInBhdGgiLCJwYXRobmFtZSIsInByZWZlcnJlZExhbmd1YWdlIiwibGFuZ3VhZ2UiLCJzdWJzdHJpbmciLCJwb3B1cCIsIm9wZW5Qb3B1cCIsImRvbWFpbkRyb3Bkb3duIiwic3RheURvbWFpbkJ1dHRvbiIsIm90aGVyRG9tYWluQnV0dG9ucyIsInN1Ym1pdERvbWFpbkJ1dHRvbiIsIkN1c3RvbUV2ZW50Iiwib3RoZXJEb21haW5CdXR0b24iLCJjb250YWluZXJzIiwiY29udGFpbmVyIiwic2VsZWN0ZWRWYWx1ZSIsIm1hcHBpbmciLCJ1cmwiLCJVUkwiLCJwb3B1cElEIiwidGVtcGxhdGUiLCJIVE1MQW5jaG9yRWxlbWVudCIsImVtaXQiLCJwb3B1cEluc3RhbmNlIiwib3BlbkV2ZW50IiwicG9wdXBMaW5rcyIsImhhbmRsZUNyZWF0aW9uRXZlbnQiLCJyaWdodCIsIm9wZW5TaWRlUGFuZWwiLCJwYW5lbElEIiwicGFuZWwiLCJzaWRlUGFuZWxJbnN0YW5jZSIsInRvZ2dsZUV2ZW50IiwicGFuZWxMaW5rcyIsImJvZHlFbGVtZW50Iiwic2Nyb2xsUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxCZWhhdmlvciIsIm5hbWUiLCJjb29raWUiLCJzcGxpdCIsImZpbmQiLCJyb3ciLCJzdGFydHNXaXRoIiwiY29va2llT3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInVwZGF0ZWRDb29raWUiLCJvcHRpb25LZXkiLCJvcHRpb25WYWx1ZSIsImlzRGF0ZVZhbGlkIiwiZGF0ZSIsImlzTmFOIiwiZ2V0VGltZSIsImZvcm1hdERhdGUiLCJkYXkiLCJmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8iLCJnZXREYXRlIiwibW9udGgiLCJnZXRNb250aCIsImdldEZ1bGxZZWFyIiwibnVtYmVyIiwiU3RyaW5nIiwicGFkU3RhcnQiLCJnZXRGdWxsTW9udGhOYW1lIiwibG9jYWxlIiwidG9Mb2NhbGVTdHJpbmciLCJwYXJzZVN0cmluZ0FzSHRtbCIsImRvbVBhcnNlciIsIkRPTVBhcnNlciIsInBhcnNlZCIsInBhcnNlRnJvbVN0cmluZyIsImdldEFic29sdXRlSGVpZ2h0IiwibWFyZ2luIiwibWFyZ2luVG9wIiwibWFyZ2luQm90dG9tIiwiTWF0aCIsImNlaWwiLCJvZmZzZXRIZWlnaHQiLCJwYXRoTmFtZSIsImZvcm1hdHRlZFBhdGhOYW1lIiwic3RyaXBUcmFpbGluZ1NsYXNoIiwiZnVsbFVybCIsImZvcm1hdHRlZFVybCIsImFuY2hvcnMiLCJzdHIiLCJlbmRzV2l0aCIsImxvYWRlZCIsImxvb3BUaHJvdWdoRWxlbWVudHMiLCJpbnNlcnRSZWNhcHRjaGFTY3JpcHQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHQiLCJhZGRFdmVudCIsImV2dCIsImRlZmF1bHRPZmZzZXQiLCJib2R5VG9wUG9zaXRpb24iLCJlbGVtZW50UG9zaXRpb24iLCJvZmZzZXQiLCJoZWFkZXIiLCJjbGllbnRIZWlnaHQiLCJvZmZzZXRQb3NpdGlvbiIsImJlaGF2aW9yIiwibWF0Y2giLCJjaHIiLCJ0b1VwcGVyQ2FzZSIsInRvVGl0bGVDYXNlIiwidHh0IiwiY2hhckF0Iiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJmb3JtUm93IiwiZm9ybVJvd1BhcmVudCIsInZhbGlkYXRpb25FbGVtZW50IiwidGV4dENvbnRlbnQiLCJpbnNlcnRCZWZvcmUiLCJncmFuZHBhcmVudCIsImV4aXN0aW5nVmFsaWRhdGlvbnMiLCJ2IiwiX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcyIsIl9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5IiwiX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQiLCJfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nIiwiX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiIsIl9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljayIsIl9DdXJ0YWluRWxlbWVudF9vcGVuIiwiX0N1cnRhaW5FbGVtZW50X2V4cGFuZCIsIl9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCIsIl9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcyIsIl9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zIiwiX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zIiwiQ3VydGFpbkVsZW1lbnQiLCJIVE1MRGV0YWlsc0VsZW1lbnQiLCJoYXNBdHRyaWJ1dGUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImRpc2Nvbm5lY3RlZENhbGxiYWNrIiwic3RhcnRIZWlnaHQiLCJlbmRIZWlnaHQiLCJjYW5jZWwiLCJhbmltYXRlIiwiZWFzaW5nIiwib25maW5pc2giLCJvbmNhbmNlbCIsInJlcXVlc3RBbmltYXRpb25GcmFtZSIsIkFjY29yZGlvbkVsZW1lbnQiLCJIVE1MRWxlbWVudCIsIm90aGVyQ3VydGFpbnMiLCJmaWx0ZXIiLCJjIiwib3RoZXJDdXJ0YWluIiwiY3VydGFpbkVsZW1lbnQiLCJfQmlydGhkYXlGb3JtX2luc3RhbmNlcyIsIl9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uIiwiX0JpcnRoZGF5Rm9ybV9kYXlGaWVsZCIsIl9CaXJ0aGRheUZvcm1fbW9udGhGaWVsZCIsIl9CaXJ0aGRheUZvcm1fZ2V0RGF5VmFsdWVzIiwiX0JpcnRoZGF5Rm9ybV9nZXRNb250aFZhbHVlcyIsIl9CaXJ0aGRheUZvcm1fb25TdWJtaXQiLCJfQmlydGhkYXlGb3JtX29uU3VjY2VzcyIsIl9CaXJ0aGRheUZvcm1fb25GYWlsdXJlIiwiQmlydGhkYXlGb3JtIiwiSFRNTEZvcm1FbGVtZW50Iiwib3B0aW9uVmFsdWVzIiwicmV0dXJuVmFsdWUiLCJudW0iLCJEYXRlIiwibW9udGhOYW1lIiwieWVhciIsImJsb2NrIiwiY29tcGxldGVkIiwiX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMiLCJfQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zIiwiX0Nhcm91c2VsRWxlbWVudF9saXN0IiwiX0Nhcm91c2VsRWxlbWVudF9wcmV2QnV0dG9uIiwiX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uIiwiX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50IiwiX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyIiwiX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbCIsIl9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudCIsIl9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUiLCJfQ2Fyb3VzZWxFbGVtZW50X2dldFRyYW5zbGF0ZVgiLCJfQ2Fyb3VzZWxFbGVtZW50X2dldEl0ZW1XaWR0aCIsIkNhcm91c2VsRWxlbWVudCIsImFjdGl2ZSIsImNvbXBvbmVudENoZWNrIiwic2V0dXAiLCJkZWluaXRpYWxpemUiLCJjbGVhckludGVydmFsIiwic2V0SW50ZXJ2YWwiLCJpdGVtc1Nob3duIiwiaW5jcmVtZW50IiwidHJhbnNmb3JtIiwiY291bnQiLCJtb250aFdpZHRoIiwiaXRlbVdpZHRoIiwiZ3JpZEdhcCIsInBhcnNlSW50IiwiY29sdW1uR2FwIiwiX0xhbmd1YWdlU3dpdGNoZXJfaW5zdGFuY2VzIiwiX0xhbmd1YWdlU3dpdGNoZXJfZ2V0VmFsdWUiLCJfTGFuZ3VhZ2VTd2l0Y2hlcl9vbkNoYW5nZSIsIkxhdmFuZHJlU2VsZWN0IiwiTGFuZ3VhZ2VTd2l0Y2hlciIsImpzb24iLCJpY29uIiwib3V0ZXJIVE1MIiwidXBkYXRlIiwiX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcyIsIl9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCIsIl9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsIiwiX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQiLCJfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzIiwiX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUiLCJfTGF2YW5kcmVTZWxlY3RfbmFtZSIsIl9MYXZhbmRyZVNlbGVjdF9wbGFjZWhvbGRlciIsIl9MYXZhbmRyZVNlbGVjdF9pY29uIiwiX0xhdmFuZHJlU2VsZWN0X2lkIiwiX0xhdmFuZHJlU2VsZWN0X291dHNpZGVDbGlja0xpc3RlbmVyIiwiX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbiIsIl9MYXZhbmRyZVNlbGVjdF9maWx0ZXIiLCJfTGF2YW5kcmVTZWxlY3Rfc2hvd0Ryb3Bkb3duIiwiX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93biIsInBsYWNlaG9sZGVyIiwiZ2V0QXR0cmlidXRlIiwiYXV0b2NhcGl0YWxpemUiLCJhdXRvY29tcGxldGUiLCJodG1sRm9yIiwiaGlkZGVuIiwiYXJyIiwic29ydCIsImEiLCJiIiwia2V5Iiwib3B0aW9uIiwic3BhbiIsInZhbHVlMiIsImZpcnN0T3B0aW9uIiwiZGV0YWlsIiwiX0xhdmFuZHJlVG9nZ2xlX2luc3RhbmNlcyIsIl9MYXZhbmRyZVRvZ2dsZV9lbGVtZW50cyIsIl9MYXZhbmRyZVRvZ2dsZV90b2dnbGVzIiwiX0xhdmFuZHJlVG9nZ2xlX2NsaWNrSGFuZGxlciIsIkxhdmFuZHJlVG9nZ2xlIiwiX1NpZ251cEJsb2NrX2luc3RhbmNlcyIsIl9TaWdudXBCbG9ja190ZW1wbGF0ZSIsIl9TaWdudXBCbG9ja19vdmVybGF5IiwiX1NpZ251cEJsb2NrX2hyZWYiLCJfU2lnbnVwQmxvY2tfcG9pbnRzIiwiX1NpZ251cEJsb2NrX3R5cGUiLCJfU2lnbnVwQmxvY2tfY29tcGxldGVkIiwiX1NpZ251cEJsb2NrX21lZGlhUXVlcnkiLCJfU2lnbnVwQmxvY2tfbXEiLCJfU2lnbnVwQmxvY2tfaXNNb2JpbGUiLCJfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSIsIl9TaWdudXBCbG9ja19zZXRUZW1wbGF0ZSIsIl9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciIsIl9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciIsIl9TaWdudXBCbG9ja19jbGlja0hhbmRsZXIiLCJfU2lnbnVwQmxvY2tfc2V0T3ZlcmxheUV2ZW50TGlzdGVuZXJzIiwiX1NpZ251cEJsb2NrX2dldFRlbXBsYXRlIiwiU2lnbnVwQmxvY2siLCJIVE1MTElFbGVtZW50IiwicG9pbnRzIiwiZ2V0UHJvcGVydHlWYWx1ZSIsInN0b3BQcm9wYWdhdGlvbiIsInBvb2wiLCJ0aXRsZXMiLCJ0aXRsZSIsImNsb3NlT3ZlcmxheUJ1dHRvbiIsInR5cGVUZW1wbGF0ZSIsIl9MYXZhbmRyZUJ1dHRvbl9pc0Rpc2FibGVkIiwiSFRNTEJ1dHRvbkVsZW1lbnQiLCJjbGlja0hhbmRsZXIiLCJsYWJlbCIsInNpemUiLCJwcmltYXJ5IiwiYm9vbCIsIm91dGxpbmUiLCJmdWxsV2lkdGgiLCJsb2FkaW5nIiwiaXNEaXNhYmxlZCJdLCJzb3VyY2VSb290IjoiIn0=