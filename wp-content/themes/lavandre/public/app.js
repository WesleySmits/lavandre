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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9hcHAudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tbW9uL0RhdGFMYXllci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FqYXhMb2dpbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0FqYXhSZWdpc3Rlci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NvbmZpcm1WYWxpZGF0aW9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29va2llQmFyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29weUNvdXBvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0N1cnRhaW4udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9FbWFpbFZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkVG9nZ2xlLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSGVhZGVyU2VhcmNoLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSW5mb1BvcHVwLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTGF6eUxvYWRlci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL05ld3NsZXR0ZXJTdWJzY3JpYmUudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9QYXNzd29yZFJldmVhbC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1JlZGVlbVBvaW50c0ZvckNvdXBvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Njcm9sbFRvQ29udGVudC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1ZpZGVvTWVkaWFSZXNvbHZlci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9wb2x5ZmlsbHMvbWF0Y2hNZWRpYS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9EaWFsb2cudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdWkvTGFuZ3VhZ2VQb3B1cC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9Qb3B1cC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9TaWRlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9ib2R5LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvY29va2llcy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2RhdGVIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9kb20udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9lbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9saW5rcy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2xvYWRSZWNhcHRjaGEudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9zY3JvbGxUb1RhcmdldC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL3N0cmluZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvQWNjb3JkaW9uRWxlbWVudC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy93ZWItY29tcG9uZW50cy9CaXJ0aGRheUZvcm0udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvQ2Fyb3VzZWxFbGVtZW50LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0xhbmd1YWdlU3dpdGNoZXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvTGF2YW5kcmVTZWxlY3QudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvTGF2YW5kcmVUb2dnbGUudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvU2lnbnVwQmxvY2sudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvYnV0dG9uL0xhdmFuZHJlQnV0dG9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9hcHAucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fYWNjb3JkaW9uLnBjc3M/ZGNhNiIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fY29va2llLWJhci5wY3NzP2M0ZDIiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX2N1cnRhaW4ucGNzcz9mYWQzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19pbmZvUG9wdXAucGNzcz82MTYwIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19wb3B1cC5wY3NzP2IyZDgiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3NpZGVQYW5lbC5wY3NzPzY2MmIiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvYnV0dG9uL3N0eWxlLnBjc3M/NTM1MSJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCAnLi9jYXJ0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb21wb25lbnRzKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29tcG9uZW50Lm9uSW5pdChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnQHVuZ2FwL2N1c3RvbS1lbGVtZW50cyc7XG5pbXBvcnQgJy4uL2Nzcy9hcHAucGNzcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgQWpheExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9BamF4TG9naW4nO1xuaW1wb3J0IEFqYXhSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvQWpheFJlZ2lzdGVyJztcbmltcG9ydCBDb29raWVCYXIgZnJvbSAnLi9jb21wb25lbnRzL0Nvb2tpZUJhcic7XG5pbXBvcnQgQ29weUNvdXBvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29weUNvdXBvbic7XG5pbXBvcnQgQ3VydGFpbiBmcm9tICcuL2NvbXBvbmVudHMvQ3VydGFpbic7XG5pbXBvcnQgRW1haWxWYWxpZGF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9FbWFpbFZhbGlkYXRpb24nO1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRmllbGRWYWxpZGF0aW9uJztcbmltcG9ydCBGb3Jnb3RQYXNzd29yZCBmcm9tICcuL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQnO1xuaW1wb3J0IEZvcmdvdFBhc3N3b3JkVG9nZ2xlIGZyb20gJy4vY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZFRvZ2dsZSc7XG5pbXBvcnQgSGVhZGVyU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXJTZWFyY2gnO1xuaW1wb3J0IEluZm9Qb3B1cCBmcm9tICcuL2NvbXBvbmVudHMvSW5mb1BvcHVwJztcbmltcG9ydCBMYXp5TG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9MYXp5TG9hZGVyJztcbmltcG9ydCBOZXdzbGV0dGVyU3Vic2NyaWJlIGZyb20gJy4vY29tcG9uZW50cy9OZXdzbGV0dGVyU3Vic2NyaWJlJztcbmltcG9ydCBQYXNzd29yZFJldmVhbCBmcm9tICcuL2NvbXBvbmVudHMvUGFzc3dvcmRSZXZlYWwnO1xuaW1wb3J0IFJlZGVlbVBvaW50c0ZvckNvdXBvbiBmcm9tICcuL2NvbXBvbmVudHMvUmVkZWVtUG9pbnRzRm9yQ291cG9uJztcbmltcG9ydCBTY3JvbGxUb0NvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL1Njcm9sbFRvQ29udGVudCc7XG5pbXBvcnQgVmlkZW9NZWRpYVJlc29sdmVyIGZyb20gJy4vY29tcG9uZW50cy9WaWRlb01lZGlhUmVzb2x2ZXInO1xuaW1wb3J0IE1vZHVsZSBmcm9tICcuL01vZHVsZSc7XG5pbXBvcnQgTGFuZ3VhZ2VQb3B1cCBmcm9tICcuL3VpL0xhbmd1YWdlUG9wdXAnO1xuaW1wb3J0IFNpZGVQYW5lbCBmcm9tICcuL3VpL1NpZGVQYW5lbCc7XG5pbXBvcnQgeyBzZXRDdXJyZW50TGlua0NsYXNzIH0gZnJvbSAnLi91dGlsL2xpbmtzJztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9BY2NvcmRpb25FbGVtZW50JztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9CaXJ0aGRheUZvcm0nO1xuaW1wb3J0IExhdmFuZHJlQnV0dG9uIGZyb20gJy4vd2ViLWNvbXBvbmVudHMvYnV0dG9uL0xhdmFuZHJlQnV0dG9uJztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9DYXJvdXNlbEVsZW1lbnQnO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL0xhbmd1YWdlU3dpdGNoZXInO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL0xhdmFuZHJlU2VsZWN0JztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9MYXZhbmRyZVRvZ2dsZSc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvU2lnbnVwQmxvY2snO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIENvb2tpZUJhcixcbiAgICAgICAgICAgIFNpZGVQYW5lbCxcbiAgICAgICAgICAgIEN1cnRhaW4sXG4gICAgICAgICAgICBJbmZvUG9wdXAsXG4gICAgICAgICAgICBQYXNzd29yZFJldmVhbCxcbiAgICAgICAgICAgIEVtYWlsVmFsaWRhdGlvbixcbiAgICAgICAgICAgIE5ld3NsZXR0ZXJTdWJzY3JpYmUsXG4gICAgICAgICAgICBGb3Jnb3RQYXNzd29yZCxcbiAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkVG9nZ2xlLFxuICAgICAgICAgICAgQWpheExvZ2luLFxuICAgICAgICAgICAgQWpheFJlZ2lzdGVyLFxuICAgICAgICAgICAgRmllbGRWYWxpZGF0aW9uLFxuICAgICAgICAgICAgSGVhZGVyU2VhcmNoLFxuICAgICAgICAgICAgTGF6eUxvYWRlcixcbiAgICAgICAgICAgIFNjcm9sbFRvQ29udGVudCxcbiAgICAgICAgICAgIFZpZGVvTWVkaWFSZXNvbHZlcixcbiAgICAgICAgICAgIFJlZGVlbVBvaW50c0ZvckNvdXBvbixcbiAgICAgICAgICAgIENvcHlDb3Vwb24sXG4gICAgICAgICAgICBMYW5ndWFnZVBvcHVwXG4gICAgICAgIF07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgc2V0Q3VycmVudExpbmtDbGFzcygpO1xuICAgICAgICBjb25zdCB3cEZvcm1zU3VibWl0QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJ3cGZvcm1zW3N1Ym1pdF1cIl0nKSk7XG4gICAgICAgIHdwRm9ybXNTdWJtaXRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzJywgJ2xhdmFuZHJlLWJ1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnc2l6ZScsICdsYXJnZScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZnVsbC13aWR0aCcsICdsYXJnZScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnb3V0bGluZScsICd0cnVlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbihmdW5jdGlvbiBhcHBJbml0KCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbiAgICBhcHAuaW5pdGlhbGl6ZSgpO1xuICAgIGxhenlCYWNrZ3JvdW5kcygpO1xuICAgIGZvb3RlclVzcFNsaWRlcigpO1xufSkoKTtcbmZ1bmN0aW9uIGZvb3RlclVzcFNsaWRlcigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c3Atc2xpZGVyJyk7XG4gICAgICAgIGlmICghbGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy51c3Atc2xpZGVyX19pdGVtJykpO1xuICAgICAgICBsZXQgdG90YWxXaWR0aCA9IDA7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gaXRlbS5jbGllbnRXaWR0aDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3Quc3R5bGUud2lkdGggPSBgJHt0b3RhbFdpZHRofXB4YDtcbiAgICB9LCAzMDApO1xufVxuZnVuY3Rpb24gbGF6eUJhY2tncm91bmRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhenlCYWNrZ3JvdW5kcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhenktYmFja2dyb3VuZCcpKTtcbiAgICAgICAgaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgICAgICAgICBjb25zdCBsYXp5QmFja2dyb3VuZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF6eUJhY2tncm91bmRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsYXp5QmFja2dyb3VuZHMuZm9yRWFjaCgobGF6eUJhY2tncm91bmQpID0+IHtcbiAgICAgICAgICAgICAgICBsYXp5QmFja2dyb3VuZE9ic2VydmVyLm9ic2VydmUobGF6eUJhY2tncm91bmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmlmIChMYXZhbmRyZUJ1dHRvbikge1xuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xhdmFuZHJlLWJ1dHRvbicsIExhdmFuZHJlQnV0dG9uLCB7IGV4dGVuZHM6ICdidXR0b24nIH0pO1xufVxuIiwiY2xhc3MgRGF0YUxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyID8gd2luZG93LmRhdGFMYXllciA6IFtdO1xuICAgIH1cbiAgICBwdXNoKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaCh7IGVjb21tZXJjZTogbnVsbCB9KTsgLy8gQ2xlYXIgdGhlIHByZXZpb3VzIGVjb21tZXJjZSBvYmplY3QuXG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRGF0YUxheWVyIH07XG5leHBvcnQgZGVmYXVsdCBuZXcgRGF0YUxheWVyKCk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IERhdGFMYXllciBmcm9tICcuLi9jb21tb24vRGF0YUxheWVyJztcbmltcG9ydCB7IGxvYWRSZWNhcHRjaGEsIHNpdGVrZXkgfSBmcm9tICcuLi91dGlsL2xvYWRSZWNhcHRjaGEnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgeyBzZXRWYWxpZGF0aW9uTWVzc2FnZSB9IGZyb20gJy4uL3V0aWwvdmFsaWRhdGlvbic7XG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4vRmllbGRWYWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgICAgICAvLyBMb2FkIHJlY2FwdGNoYVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICghd2luZG93LkN5cHJlc3MpIHtcbiAgICAgICAgICAgIGxvYWRSZWNhcHRjaGEoZmllbGRzKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZpZWxkVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQubWF0Y2hlcygnOi13ZWJraXQtYXV0b2ZpbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIHZhbGlkYXRvci5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgICAgIGlmIChzdWJtaXRCdXR0b24gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU3VibWl0KGV2ZW50LCBmaWVsZHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3VibWl0QnV0dG9uID09PSBudWxsIHx8IHN1Ym1pdEJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU3VibWl0KGV2ZW50LCBmaWVsZHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25TdWJtaXQoZXZlbnQsIGZpZWxkcykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIHZhbGlkID0gZmllbGQudmFsaWRpdHkudmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgndXNlcm5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9ICgoX2IgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgZ3JlY2FwdGNoYSB9ID0gd2luZG93O1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4bG9naW4nLFxuICAgICAgICAgICAgcmVjYXB0Y2hhVG9rZW46ICcnLFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJidXR0b25cIl1bbmFtZT1cImxvZ2luXCJdJykgfHxcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXdpbmRvdy5DeXByZXNzKSB7XG4gICAgICAgICAgICBncmVjYXB0Y2hhLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBncmVjYXB0Y2hhLmV4ZWN1dGUoc2l0ZWtleSwgeyBhY3Rpb246ICdBamF4TG9naW4nIH0pLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmVjYXB0Y2hhVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwiYnV0dG9uXCJdW25hbWU9XCJsb2dpblwiXScpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIGlzIHdyb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiAnbG9naW4nLFxuICAgICAgICAgICAgbWV0aG9kOiAnQWpheExvZ2luJ1xuICAgICAgICB9O1xuICAgICAgICBEYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZm9ybS5kYXRhc2V0LnJlZGlyZWN0VXJsIHx8ICcvbXktYWNjb3VudC8nO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfVxuICAgIG9uRmFpbHVyZShyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZXNwb25zZS5kYXRhIHx8XG4gICAgICAgICAgICAnVGhpcyBjb21iaW5hdGlvbiBvZiBlbWFpbCBhbmQgcGFzc3dvcmQgaXMgbm90IGtub3duIHRvIHVzLiBQbGVhc2UgdHJ5IGFnYWluIG9yIHJlcXVlc3QgYSBuZXcgcGFzc3dvcmQuJztcbiAgICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UobWVzc2FnZSwgdGhpcy5mb3JtKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvZ2luRm9ybXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJyNhamF4LWxvZ2luLWZvcm0nKSk7XG4gICAgICAgIGlmIChsb2dpbkZvcm1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2luRm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWpheExvZ2luID0gbmV3IEFqYXhMb2dpbihmb3JtKTtcbiAgICAgICAgICAgIGFqYXhMb2dpbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gJy4uL2NvbW1vbi9EYXRhTGF5ZXInO1xuaW1wb3J0IHsgbG9hZFJlY2FwdGNoYSwgc2l0ZWtleSB9IGZyb20gJy4uL3V0aWwvbG9hZFJlY2FwdGNoYSc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCBDb25maXJtVmFsaWRhdGlvbiBmcm9tICcuL0NvbmZpcm1WYWxpZGF0aW9uJztcbmltcG9ydCBFbWFpbFZhbGlkYXRpb24gZnJvbSAnLi9FbWFpbFZhbGlkYXRpb24nO1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuL0ZpZWxkVmFsaWRhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4UmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBlbWFpbEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICAgICAgICBpZiAoZW1haWxGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZW1haWxWYWxpZGF0aW9uID0gbmV3IEVtYWlsVmFsaWRhdGlvbihlbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIGVtYWlsVmFsaWRhdGlvbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXItcGFzc3dvcmQnKTtcbiAgICAgICAgY29uc3QgY29uZmlybVBhc3N3b3JkRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tcGFzc3dvcmQnKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkRmllbGQgJiYgY29uZmlybVBhc3N3b3JkRmllbGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1WYWxpZGF0aW9uID0gbmV3IENvbmZpcm1WYWxpZGF0aW9uKHBhc3N3b3JkRmllbGQsIGNvbmZpcm1QYXNzd29yZEZpZWxkKTtcbiAgICAgICAgICAgIGNvbmZpcm1WYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICAgICAgLy8gTG9hZCByZWNhcHRjaGFcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXdpbmRvdy5DeXByZXNzKSB7XG4gICAgICAgICAgICBsb2FkUmVjYXB0Y2hhKGZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSBmaWVsZC52YWxpZGl0eS52YWxpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSAoKF9hID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdmaXJzdF9uYW1lJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROYW1lID0gKChfYyA9IGZvcm1EYXRhLmdldCgnbGFzdF9uYW1lJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gKChfZCA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IGdyZWNhcHRjaGEgfSA9IHdpbmRvdztcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheHJlZ2lzdGVyJyxcbiAgICAgICAgICAgICAgICByZWNhcHRjaGFUb2tlbjogJycsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogbGFzdE5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKSB8fFxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmICghd2luZG93LkN5cHJlc3MpIHtcbiAgICAgICAgICAgICAgICBncmVjYXB0Y2hhLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JlY2FwdGNoYVxuICAgICAgICAgICAgICAgICAgICAgICAgLmV4ZWN1dGUoc2l0ZWtleSwgeyBhY3Rpb246ICdBamF4UmVnaXN0ZXInIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucmVjYXB0Y2hhVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdW5kZWZpbmVkLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHVuZGVmaW5lZCwgZXZlbnQsIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzLCBldmVudCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyBpcyB3cm9uZycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ3NpZ24tdXAnLFxuICAgICAgICAgICAgbWV0aG9kOiAnQWpheFJlZ2lzdGVyJ1xuICAgICAgICB9O1xuICAgICAgICBEYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZm9ybS5kYXRhc2V0LnJlZGlyZWN0VXJsIHx8ICcvbXktYWNjb3VudC8nO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCByZWdpc3RlckZvcm0gPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcjYWpheC1yZWdpc3Rlci1mb3JtJyk7XG4gICAgICAgIGlmIChyZWdpc3RlckZvcm0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhamF4UmVnaXN0ZXIgPSBuZXcgQWpheFJlZ2lzdGVyKHJlZ2lzdGVyRm9ybSk7XG4gICAgICAgIGFqYXhSZWdpc3Rlci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybVZhbGlkYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkLCBjb25maXJtRmllbGQpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZCA9IGNvbmZpcm1GaWVsZDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkIHx8ICF0aGlzLmNvbmZpcm1GaWVsZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGZpZWxkcycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IFsnY2hhbmdlJywgJ2lucHV0J107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBldmVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tpbmRleF07XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGQudmFsdWUgIT09IHRoaXMuY29uZmlybUZpZWxkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnVmFsdWUgaXMgbm90IGVxdWFsJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0Nvb2tpZUJhcl9pbnN0YW5jZXMsIF9Db29raWVCYXJfZWxlbWVudCwgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIF9Db29raWVCYXJfYWNjZXB0QnV0dG9uLCBfQ29va2llQmFyX2dldEVsZW1lbnQsIF9Db29raWVCYXJfYWNjZXB0Q29va2llcztcbmltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2Nvb2tpZS1iYXIucGNzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgZ2V0Q29va2llVmFsdWUsIHNldENvb2tpZVZhbHVlIH0gZnJvbSAnLi4vdXRpbC9jb29raWVzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfQ29va2llQmFyX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9Db29raWVCYXJfZWxlbWVudC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ29va2llQmFyX2FjY2VwdEJ1dHRvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNjb29raWUtYmFyLXRlbXBsYXRlJyksIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgXCJmXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldENvb2tpZVZhbHVlKENvb2tpZUJhci5jb29raWVOYW1lKSkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgXCJmXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nvb2tpZUJhcl9lbGVtZW50LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfaW5zdGFuY2VzLCBcIm1cIiwgX0Nvb2tpZUJhcl9nZXRFbGVtZW50KS5jYWxsKHRoaXMpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nvb2tpZUJhcl9hY2NlcHRCdXR0b24sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl9lbGVtZW50LCBcImZcIikucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImNvb2tpZXMtYWNjZXB0XCJdJyksIFwiZlwiKTtcbiAgICAgICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX2FjY2VwdEJ1dHRvbiwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfaW5zdGFuY2VzLCBcIm1cIiwgX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzKS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc3RhdGljIHNldEFjY2VwdENvb2tpZSgpIHtcbiAgICAgICAgc2V0Q29va2llVmFsdWUoQ29va2llQmFyLmNvb2tpZU5hbWUsICd0cnVlJywge1xuICAgICAgICAgICAgJ21heC1hZ2UnOiAzMTUzNjAwMFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZUJhciA9IG5ldyBDb29raWVCYXIoc2VsZWN0b3IpO1xuICAgICAgICBjb29raWVCYXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbl9Db29raWVCYXJfZWxlbWVudCA9IG5ldyBXZWFrTWFwKCksIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50ID0gbmV3IFdlYWtNYXAoKSwgX0Nvb2tpZUJhcl9hY2NlcHRCdXR0b24gPSBuZXcgV2Vha01hcCgpLCBfQ29va2llQmFyX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9Db29raWVCYXJfZ2V0RWxlbWVudCA9IGZ1bmN0aW9uIF9Db29raWVCYXJfZ2V0RWxlbWVudCgpIHtcbiAgICBjb25zdCBjbG9uZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIFwiZlwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSBjbG9uZTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LCBcImZcIikucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImNvb2tpZS1iYXJcIl0nKTtcbn0sIF9Db29raWVCYXJfYWNjZXB0Q29va2llcyA9IGZ1bmN0aW9uIF9Db29raWVCYXJfYWNjZXB0Q29va2llcygpIHtcbiAgICB2YXIgX2E7XG4gICAgQ29va2llQmFyLnNldEFjY2VwdENvb2tpZSgpO1xuICAgIChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl9lbGVtZW50LCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbn07XG5Db29raWVCYXIuY29va2llTmFtZSA9ICdhcHByb3ZlZF9jb29raWVzJztcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQ29weUNvdXBvbl9idXR0b247XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29weUNvdXBvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoYnV0dG9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9Db3B5Q291cG9uX2J1dHRvbi5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIGJ1dHRvbiwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgY29kZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikuZGF0YXNldC5jb2RlO1xuICAgICAgICBjb25zdCB0ZXh0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5kYXRhc2V0LnRleHQ7XG4gICAgICAgIGNvbnN0IGNvcGllZFRleHQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmRhdGFzZXQuY29waWVkVGV4dDtcbiAgICAgICAgaWYgKCFjb2RlIHx8ICF0ZXh0IHx8ICFjb3BpZWRUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29kZSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikuaW5uZXJUZXh0ID0gY29waWVkVGV4dDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzLCBldmVudCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICB9XG4gICAgb25GYWlsdXJlKHJlcykge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGNvcHlCdXR0b25zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwiY29weS1jb3Vwb25cIl0nKSk7XG4gICAgICAgIGlmIChjb3B5QnV0dG9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb3B5QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvcHlDb3Vwb24gPSBuZXcgQ29weUNvdXBvbihidXR0b24pO1xuICAgICAgICAgICAgY29weUNvdXBvbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9Db3B5Q291cG9uX2J1dHRvbiA9IG5ldyBXZWFrTWFwKCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQ3VydGFpbl9pbnN0YW5jZXMsIF9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciwgX0N1cnRhaW5faGFuZGxlVHJhbnNpdGlvbjtcbmltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2N1cnRhaW4ucGNzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VydGFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZm9sZEJ1dHRvbiwgb25seU9uTW9iaWxlID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0N1cnRhaW5faW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0N1cnRhaW5fdHJhbnNpdGlvbkxpc3RlbmVyLnNldCh0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluX2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluX2hhbmRsZVRyYW5zaXRpb24pLmNhbGwodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmZvbGRCdXR0b24gPSBmb2xkQnV0dG9uO1xuICAgICAgICB0aGlzLm9ubHlPbk1vYmlsZSA9IG9ubHlPbk1vYmlsZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVpZ2h0ID1cbiAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5tYXhIZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5tYXhIZWlnaHQgIT09ICdub25lJ1xuICAgICAgICAgICAgICAgID8gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLm1heEhlaWdodFxuICAgICAgICAgICAgICAgIDogJzBweCc7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmZvbGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub25seU9uTW9iaWxlICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7dGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHt0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZGVmYXVsdEhlaWdodDtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZExlc3MgfHwgIXRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9sZEJ1dHRvbi5pbm5lclRleHQgPT09IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRMZXNzO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmZvbGRCdXR0b24uZGF0YXNldC5yZWFkTW9yZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIsIFwiZlwiKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIsIFwiZlwiKSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50IHx8ICF0aGlzLmZvbGRCdXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWN1cnRhaW4tdG9nZ2xlXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvZ2dsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSB0b2dnbGVzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jdXJ0YWluLWNvbnRlbnQ9XCIke3RvZ2dsZS5kYXRhc2V0LmN1cnRhaW5Ub2dnbGV9XCJdYCk7XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9ubHlPbk1vYmlsZSA9ICEhKGNvbnRlbnQuZGF0YXNldC5vbmx5T25Nb2JpbGUgJiYgY29udGVudC5kYXRhc2V0Lm9ubHlPbk1vYmlsZSA9PT0gJ3RydWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnRhaW4gPSBuZXcgQ3VydGFpbihjb250ZW50LCB0b2dnbGUsIG9ubHlPbk1vYmlsZSk7XG4gICAgICAgICAgICBjdXJ0YWluLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbl9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9DdXJ0YWluX2hhbmRsZVRyYW5zaXRpb24gPSBmdW5jdGlvbiBfQ3VydGFpbl9oYW5kbGVUcmFuc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWF4SGVpZ2h0Jyk7XG59O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IHsgcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXMsIHNldFZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSAnLi4vdXRpbC92YWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYWlsVmFsaWRhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5lbWFpbElucHV0ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5lbWFpbElucHV0LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBibHVyVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJsdXJUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChibHVyVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibHVyVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUJsdXJFdmVudCgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUJsdXJFdmVudCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmVtYWlsSW5wdXQ7XG4gICAgICAgIGNvbnN0IHNlY3VyaXR5ID0gKChfYSA9IGZvcm1EYXRhLmdldCgnd29vY29tbWVyY2UtZW1haWwtY2hlY2stbm9uY2UnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhlbWFpbGNoZWNrJyxcbiAgICAgICAgICAgIGVtYWlsOiB2YWx1ZSxcbiAgICAgICAgICAgIHNlY3VyaXR5XG4gICAgICAgIH07XG4gICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uU3VjY2VzcygpIHtcbiAgICAgICAgcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXModGhpcy5lbWFpbElucHV0KTtcbiAgICB9XG4gICAgb25GYWlsdXJlKGVycm9yKSB7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKGVycm9yLm1lc3NhZ2UsIHRoaXMuZW1haWxJbnB1dCk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbWFpbElucHV0IHx8ICF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRW1haWxJbnB1dCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNyZWdfZW1haWwnKTtcbiAgICAgICAgaWYgKHJlZ2lzdGVyRW1haWxJbnB1dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtYWlsVmFsaWRhdGlvbiA9IG5ldyBFbWFpbFZhbGlkYXRpb24ocmVnaXN0ZXJFbWFpbElucHV0KTtcbiAgICAgICAgZW1haWxWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgeyBzZXRWYWxpZGF0aW9uTWVzc2FnZSB9IGZyb20gJy4uL3V0aWwvdmFsaWRhdGlvbic7XG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4vRmllbGRWYWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdvdFBhc3N3b3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihhbmNob3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IgPSBhbmNob3I7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIC8vIGNvbnN0IHNlY3VyaXR5OiBzdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ2ZvcmdvdHNlY3VyaXR5Jyk/LnRvU3RyaW5nKCkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBlbWFpbEZpZWxkID0gdGhpcy5mb3JtLnVzZXJuYW1lO1xuICAgICAgICAgICAgY29uc3QgZmllbGRWYWxpZGF0aW9uID0gbmV3IEZpZWxkVmFsaWRhdGlvbihlbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbi5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICBlbWFpbEZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd2YWxpZGF0ZScpKTtcbiAgICAgICAgICAgIGlmICghdXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXJuYW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheGZvcmdvdHBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICB1c2VyX2xvZ2luOiB1c2VybmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLCB0aGlzLmZvcm0pO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLCB0aGlzLmZvcm0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IgfHwgIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRGb3JnZXRMaW5rcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBhc3N3b3JkLWZvcmdldFwiXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhc3N3b3JkRm9yZ2V0TGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gcGFzc3dvcmRGb3JnZXRMaW5rc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBmb3Jnb3RQYXNzd29yZCA9IG5ldyBGb3Jnb3RQYXNzd29yZChsaW5rKTtcbiAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3Jnb3RQYXNzd29yZFRvZ2dsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IodG9nZ2xlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlID0gdG9nZ2xlO1xuICAgICAgICB0aGlzLnBhc3N3b3JkRm9yZ2V0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1mb3JnZXQtZm9ybScpO1xuICAgICAgICB0aGlzLmxvZ2luV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1yZWdpc3Rlci1mb3JtJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5XcmFwcGVyLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkRm9yZ2V0V3JhcHBlci50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkRm9yZ2V0V3JhcHBlciB8fCAhdGhpcy5sb2dpbldyYXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRm9yZ2V0TGlua3MgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJwYXNzd29yZC1mb3JnZXQtdG9nZ2xlXCJdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFzc3dvcmRGb3JnZXRMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBwYXNzd29yZEZvcmdldExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gbmV3IEZvcmdvdFBhc3N3b3JkVG9nZ2xlKGxpbmspO1xuICAgICAgICAgICAgZm9yZ290UGFzc3dvcmQuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlclNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBkb2N1bWVudENsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoZXZlbnRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5IZWFkZXIgPSBldmVudFRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19zZWFyY2gnKSAhPT0gbnVsbDtcbiAgICAgICAgICAgIGlmICh3aXRoaW5IZWFkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNlYXJjaC1maWVsZCcpO1xuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlYXJjaElucHV0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyU2VhcmNoID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoJyk7XG4gICAgICAgIGlmIChoZWFkZXJTZWFyY2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIZWFkZXJTZWFyY2goaGVhZGVyU2VhcmNoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2luZm9Qb3B1cC5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGV2ZW50ID0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5jb250ZW50IHx8ICcnO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudCwgdGhpcy5zaG93VGlwcHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHNob3dUaXBweShlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB3aW5kb3cudGlwcHkodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICB0aGVtZTogJ2xpZ2h0JyxcbiAgICAgICAgICAgIGFsbG93SFRNTDogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgc2hvd09uQ3JlYXRlOiB0cnVlLFxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBvbkhpZGRlbjogKGkpID0+IHtcbiAgICAgICAgICAgICAgICBpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgICBpbnN0YW5jZS5oaWRlV2l0aEludGVyYWN0aXZpdHkoZSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50IHx8ICF0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHRpcHB5RWxlbWVudHMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJ0aXBweVwiXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRpcHB5RWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0aXBweUVsZW1lbnQgPSB0aXBweUVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgIGlmICghdGlwcHlFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbmZvUG9wdXAgPSBuZXcgSW5mb1BvcHVwKHRpcHB5RWxlbWVudCwgJ21vdXNlb3ZlcicpO1xuICAgICAgICAgICAgaW5mb1BvcHVwLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5TG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKCk7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgICAgICAgICB0aGlzLm9uSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudHNbaV07XG4gICAgICAgICAgICB0aGlzLmxhenlsb2FkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoT2JzZXJ2ZXJDbGFzcyA9IEludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzI1MHB4IDBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbGF6eUltYWdlT2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJDbGFzcygoZW50cmllcywgbGF6eUltYWdlT2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChsYXp5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXp5bG9hZChsYXp5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXp5bG9hZChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChsYXp5SW1hZ2UpID0+IHtcbiAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUobGF6eUltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxhenlsb2FkKGVsKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgICAgICAgdGhpcy5tYW5hZ2VDc3NDbGFzc2VzKGVsKTtcbiAgICAgICAgaWYgKHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgICAgIGlmIChpbWFnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFuYWdlQ3NzQ2xhc3NlcyhpbWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLmxvYWRpbmctc3Bpbm5lcicpO1xuICAgICAgICBpZiAobG9hZGluZ1NwaW5uZXIpIHtcbiAgICAgICAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmctc3Bpbm5lcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnNpemVzKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNpemVzID0gZWxlbWVudC5kYXRhc2V0LnNpemVzO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU291cmNlRWxlbWVudCkgJiZcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5zcmNzZXQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3Jjc2V0ID0gZWxlbWVudC5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmRhdGFzZXQuc3JjO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RWxlbWVudHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiZcbiAgICAgICAgICAgICh0aGlzLmVsZW1lbnQuZGF0YXNldC5zcmMgfHwgdGhpcy5lbGVtZW50LmRhdGFzZXQuc3Jjc2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLmVsZW1lbnRdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50ICYmIHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLXNyY10sIHNvdXJjZVtkYXRhLXNyY3NldF0nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLXNyY10nKSk7XG4gICAgfVxuICAgIG1hbmFnZUNzc0NsYXNzZXMoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XG4gICAgICAgIGNvbnN0IGxhenlsb2FkRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxhenlsb2FkXScpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXp5bG9hZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbGF6eWxvYWRFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICAgICAgICAgIG5ldyBMYXp5TG9hZGVyKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBEYXRhTGF5ZXIgZnJvbSAnLi4vY29tbW9uL0RhdGFMYXllcic7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi9GaWVsZFZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c2xldHRlclN1YnNjcmliZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIgPSBEYXRhTGF5ZXI7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuZW1haWxGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV3c2xldHRlciBzdWJzY3JpYmUgY29tcG9uZW50IG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24odGhpcy5lbWFpbEZpZWxkKTtcbiAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ2ZpcnN0LW5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgY29tcGFueU5hbWUgPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdjb21wYW55LW5hbWUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSAoKF9jID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBpZiAoIWVtYWlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWlsY2hpbXBzdWJzY3JpYmUnLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBjb21wYW55TmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEZpZWxkVmFsaWRhdGlvbi5yZW1vdmVFcnJvclRleHQodGhpcy5lbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSB8fCAhdGhpcy5lbWFpbEZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSwgZXZlbnQpIHtcbiAgICAgICAgRmllbGRWYWxpZGF0aW9uLmFwcGVuZFN1Y2Nlc3NUZXh0KHRoaXMuZW1haWxGaWVsZCwgcmVzcG9uc2UuZGF0YS50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5lbWFpbEZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ0dBRXZlbnQnLFxuICAgICAgICAgICAgZXZlbnRDYXRlZ29yeTogJ25ld3NsZXR0ZXInLFxuICAgICAgICAgICAgZXZlbnRBY3Rpb246ICdzdWJzY3JpYmUnLFxuICAgICAgICAgICAgZXZlbnRMYWJlbDogdGhpcy5mb3JtLmlkIHx8ICdnZW5lcmljJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUoZXJyb3IpIHtcbiAgICAgICAgRmllbGRWYWxpZGF0aW9uLmFwcGVuZEVycm9yVGV4dCh0aGlzLmVtYWlsRmllbGQsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIC8vICNUT0RPOiBTd2l0Y2ggdG8gY29tbW9uIHNlbGVjdG9yXG4gICAgICAgIGNvbnN0IGZvcm1zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcjZm9vdGVyLW5ld3NsZXR0ZXItZm9ybSwgI2hvbWVwYWdlLW5ld3NsZXR0ZXItZm9ybSwgI2FqYXgtbmV3c2xldHRlci1mb3JtJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZm9ybXNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgbmV3c2xldHRlclN1YnNjcmliZSA9IG5ldyBOZXdzbGV0dGVyU3Vic2NyaWJlKGZvcm0pO1xuICAgICAgICAgICAgbmV3c2xldHRlclN1YnNjcmliZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRSZXZlYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5wYXNzd29yZElucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmNyZWF0ZVJldmVhbEJ1dHRvbigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFzc3dvcmRJbnB1dC50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlUmV2ZWFsQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdwYXNzd29yZC1yZXZlYWwtdG9nZ2xlJztcbiAgICAgICAgYnV0dG9uLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBwYXNzd29yZFJvd3MgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXNzd29yZC1yb3cnKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXNzd29yZFJvd3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFJvdyA9IHBhc3N3b3JkUm93c1tpbmRleF07XG4gICAgICAgICAgICBpZiAocGFzc3dvcmRSb3cgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFJldmVhbCA9IG5ldyBQYXNzd29yZFJldmVhbChwYXNzd29yZFJvdyk7XG4gICAgICAgICAgICBwYXNzd29yZFJldmVhbC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b247XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuLi91dGlsL2VuZHBvaW50cyc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZGVlbVBvaW50c0ZvckNvdXBvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoYnV0dG9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLCBidXR0b24sIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpZCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIFwiZlwiKS5kYXRhc2V0LmlkO1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhyZWRlZW1jb3Vwb24nLFxuICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgIH07XG4gICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludHMuYWpheCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSwgZXZlbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIFwiZlwiKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLCBcImZcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgfVxuICAgIG9uRmFpbHVyZShyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCByZWRlZW1CdXR0b25zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwicmVkZWVtLWNvdXBvblwiXScpKTtcbiAgICAgICAgaWYgKHJlZGVlbUJ1dHRvbnMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgcmVkZWVtQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHJlZGVlbVBvaW50c0ZvckNvdXBvbiA9IG5ldyBSZWRlZW1Qb2ludHNGb3JDb3Vwb24oYnV0dG9uKTtcbiAgICAgICAgICAgIHJlZGVlbVBvaW50c0ZvckNvdXBvbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uID0gbmV3IFdlYWtNYXAoKTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQsIF9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0O1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBzY3JvbGxUb1RhcmdldCBmcm9tICcuLi91dGlsL3Njcm9sbFRvVGFyZ2V0JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNjcm9sbFRvQ29udGVudCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgdGFyZ2V0KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1Njcm9sbFRvQ29udGVudF90YXJnZXQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBlbGVtZW50LCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF90YXJnZXQsIHRhcmdldCwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgaGVhZGVyT2Zmc2V0ID0gIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBcImZcIikuZGF0YXNldC5oZWFkZXJPZmZzZXQ7XG4gICAgICAgICAgICBzY3JvbGxUb1RhcmdldChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0LCBcImZcIiksIDAsIGhlYWRlck9mZnNldCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXNjcm9sbC10b10nKSk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldElkID0gZWxlbWVudC5kYXRhc2V0LnNjcm9sbFRvIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQodGFyZ2V0SWQpO1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBTY3JvbGxUb0NvbnRlbnQoZWxlbWVudCwgdGFyZ2V0KTtcbiAgICAgICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX1Njcm9sbFRvQ29udGVudF9lbGVtZW50ID0gbmV3IFdlYWtNYXAoKSwgX1Njcm9sbFRvQ29udGVudF90YXJnZXQgPSBuZXcgV2Vha01hcCgpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQsIF9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl90aW1lb3V0LCBfVmlkZW9NZWRpYVJlc29sdmVyX2hhbmRsZVJlc2l6ZSwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zaG93U291cmNlO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vcG9seWZpbGxzL21hdGNoTWVkaWEnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVmlkZW9NZWRpYVJlc29sdmVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX1ZpZGVvTWVkaWFSZXNvbHZlcl9lbGVtZW50LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9WaWRlb01lZGlhUmVzb2x2ZXJfdGltZW91dC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9lbGVtZW50LCBlbGVtZW50LCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zb3VyY2VzLCBBcnJheS5mcm9tKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9lbGVtZW50LCBcImZcIikucXVlcnlTZWxlY3RvckFsbCgnc291cmNlJykpLCBcImZcIik7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMsIFwibVwiLCBfVmlkZW9NZWRpYVJlc29sdmVyX2hhbmRsZVJlc2l6ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNzY3cHgpJyk7XG4gICAgICAgIGNvbnN0IG1xMiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpO1xuICAgICAgICBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihtcSwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzLCBcIm1cIiwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUpLmNhbGwodGhpcyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIobXEyLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMsIFwibVwiLCBfVmlkZW9NZWRpYVJlc29sdmVyX2hhbmRsZVJlc2l6ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudHMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ3ZpZGVvW2RhdGEtcmVzb2x2ZV0nKSk7XG4gICAgICAgIGVsZW1lbnRzLmZvckVhY2goKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFZpZGVvTWVkaWFSZXNvbHZlcihlbGVtZW50KTtcbiAgICAgICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX1ZpZGVvTWVkaWFSZXNvbHZlcl9lbGVtZW50ID0gbmV3IFdlYWtNYXAoKSwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zb3VyY2VzID0gbmV3IFdlYWtNYXAoKSwgX1ZpZGVvTWVkaWFSZXNvbHZlcl90aW1lb3V0ID0gbmV3IFdlYWtNYXAoKSwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfVmlkZW9NZWRpYVJlc29sdmVyX2hhbmRsZVJlc2l6ZSA9IGZ1bmN0aW9uIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplKCkge1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zb3VyY2VzLCBcImZcIikuZm9yRWFjaCgoc291cmNlKSA9PiB7XG4gICAgICAgIGNvbnN0IG9yaWVudGF0aW9uID0gc291cmNlLmRhdGFzZXQub3JpZW50YXRpb24gfHwgJyc7XG4gICAgICAgIGNvbnN0IG1heFdpZHRoID0gTnVtYmVyKHNvdXJjZS5kYXRhc2V0Lm1heFdpZHRoKSB8fCAwO1xuICAgICAgICBjb25zdCBjdXJyZW50T3JpZW50YXRpb24gPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknKS5tYXRjaGVzXG4gICAgICAgICAgICA/ICdwb3J0cmFpdCdcbiAgICAgICAgICAgIDogJ2xhbmRzY2FwZSc7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRXaWR0aCA9IHdpbmRvdy5pbm5lcldpZHRoO1xuICAgICAgICBpZiAoY3VycmVudE9yaWVudGF0aW9uICE9PSBvcmllbnRhdGlvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChtYXhXaWR0aCAmJiBjdXJyZW50V2lkdGggPj0gbWF4V2lkdGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzLCBcIm1cIiwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zaG93U291cmNlKS5jYWxsKHRoaXMsIHNvdXJjZSk7XG4gICAgfSk7XG59LCBfVmlkZW9NZWRpYVJlc29sdmVyX3Nob3dTb3VyY2UgPSBmdW5jdGlvbiBfVmlkZW9NZWRpYVJlc29sdmVyX3Nob3dTb3VyY2Uoc291cmNlKSB7XG4gICAgY29uc3QgZGF0YVNyYyA9IHNvdXJjZS5kYXRhc2V0LnNyYztcbiAgICBpZiAoIWRhdGFTcmMpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCwgXCJmXCIpLnNyYyA9IGRhdGFTcmM7XG59O1xuIiwiZXhwb3J0IGZ1bmN0aW9uIG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyKG1xLCBjYWxsYmFjaywgZXZlbnRCdWJibGluZyA9IGZhbHNlKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbXEuYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2FsbGJhY2ssIGV2ZW50QnViYmxpbmcpO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBtcS5hZGRMaXN0ZW5lcigoKSA9PiBjYWxsYmFjayk7XG4gICAgfVxufVxuZXhwb3J0IGZ1bmN0aW9uIG1hdGNoTWVkaWFSZW1vdmVFdmVudExpc3RlbmVyKG1xLCBjYWxsYmFjaykge1xuICAgIHRyeSB7XG4gICAgICAgIG1xLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNhbGxiYWNrKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgbXEucmVtb3ZlTGlzdGVuZXIoKCkgPT4gY2FsbGJhY2spO1xuICAgIH1cbn1cbiIsImltcG9ydCBkaWFsb2dQb2x5ZmlsbCBmcm9tICdkaWFsb2ctcG9seWZpbGwnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IGRpc2FibGVCb2R5U2Nyb2xsLCBlbmFibGVCb2R5U2Nyb2xsIH0gZnJvbSAnLi4vdXRpbC9ib2R5JztcbmltcG9ydCB7IHRvQ2FtZWxDYXNlIH0gZnJvbSAnLi4vdXRpbC9zdHJpbmcnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRGlhbG9nIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IGZhbHNlO1xuICAgICAgICB0aGlzLl90cmFuc2l0aW9uVGltZSA9IDA7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGdldCBpc09wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLl9pc09wZW47XG4gICAgfVxuICAgIHNldCBpc09wZW4odmFsdWUpIHtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBjYW1lbERhdGFBdHRyaWJ1dGUoKSB7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gdGhpcy5kYXRhQXR0cmlidXRlLnJlcGxhY2UoJ2RhdGEtJywgJycpO1xuICAgICAgICByZXR1cm4gdG9DYW1lbENhc2UodmFsdWUpO1xuICAgIH1cbiAgICBnZXQgdHJhbnNpdGlvblRpbWUoKSB7XG4gICAgICAgIGlmICh0aGlzLl90cmFuc2l0aW9uVGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb25UaW1lO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lID0gdGhpcy5nZXRUcmFuc2l0aW9uVGltZSgpO1xuICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvblRpbWU7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMucG9seWZpbGxEaWFsb2coKTtcbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ29wZW4nLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCAoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnRvZ2dsZSgpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY2xvc2VCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1jbG9zZV0nKSk7XG4gICAgICAgIGNsb3NlQnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm91dHNpZGVDbGljayhlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG91dHNpZGVDbGljayhldmVudCkge1xuICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgIGlmICh0YXJnZXQgPT09IHRoaXMuZWxlbWVudCkge1xuICAgICAgICAgICAgY29uc3QgcmVjdCA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKTtcbiAgICAgICAgICAgIGNvbnN0IGNsaWNrZWRJbkRpYWxvZyA9IHJlY3QudG9wIDw9IGV2ZW50LmNsaWVudFkgJiZcbiAgICAgICAgICAgICAgICBldmVudC5jbGllbnRZIDw9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgICByZWN0LmxlZnQgPD0gZXZlbnQuY2xpZW50WCAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPD0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aDtcbiAgICAgICAgICAgIGlmICghY2xpY2tlZEluRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoYFske3RoaXMuZGF0YUF0dHJpYnV0ZX09XCIke3RoaXMuZWxlbWVudC5kYXRhc2V0W2Ake3RoaXMuY2FtZWxEYXRhQXR0cmlidXRlfWBdfVwiXWApKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzYWJsZUJvZHlTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNob3dNb2RhbCgpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5vcGVuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2xvc2VkKTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBlbmFibGVCb2R5U2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5vcGVuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuY2xvc2VkKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuICAgIGdldFRyYW5zaXRpb25UaW1lKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgY29uc3QgdHJhbnNpdGlvbkR1cmF0aW9uID0gKF9hID0gc3R5bGVzLnRyYW5zaXRpb25EdXJhdGlvbikgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJyc7XG4gICAgICAgIGNvbnN0IGR1cmF0aW9uID0gdHJhbnNpdGlvbkR1cmF0aW9uLmluZGV4T2YoJ21zJykgPiAtMVxuICAgICAgICAgICAgPyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbilcbiAgICAgICAgICAgIDogcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pICogMTAwMDtcbiAgICAgICAgcmV0dXJuIGR1cmF0aW9uIHx8IDQwMDtcbiAgICB9XG4gICAgcG9seWZpbGxEaWFsb2coKSB7XG4gICAgICAgIGRpYWxvZ1BvbHlmaWxsID09PSBudWxsIHx8IGRpYWxvZ1BvbHlmaWxsID09PSB2b2lkIDAgPyB2b2lkIDAgOiBkaWFsb2dQb2x5ZmlsbC5yZWdpc3RlckRpYWxvZyh0aGlzLmVsZW1lbnQpO1xuICAgIH1cbn1cbiIsImltcG9ydCB7IGdldENvb2tpZVZhbHVlLCBzZXRDb29raWVWYWx1ZSB9IGZyb20gJy4uL3V0aWwvY29va2llcyc7XG5pbXBvcnQgUG9wdXAgZnJvbSAnLi9Qb3B1cCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYW5ndWFnZVBvcHVwIGV4dGVuZHMgUG9wdXAge1xuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChzZWxlY3RvciAhPT0gZG9jdW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0Q29va2llVmFsdWUoJ2xhbmd1YWdlLXBvcHVwLXNlZW4nKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHBhdGggPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgICAgIGlmIChwYXRoID09PSAnL25sLycgfHwgcGF0aCA9PT0gJy9mci8nIHx8IHBhdGggPT09ICcvZGUvJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByZWZlcnJlZExhbmd1YWdlID0gKF9hID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogJ2VuJztcbiAgICAgICAgY29uc3QgbGFuZ3VhZ2UgPSBwcmVmZXJyZWRMYW5ndWFnZS5zdWJzdHJpbmcoMCwgMik7XG4gICAgICAgIGlmIChsYW5ndWFnZSA9PT0gJ2VuJykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgY29uc3QgcG9wdXAgPSBMYW5ndWFnZVBvcHVwLm9wZW5Qb3B1cCgnbGFuZ3VhZ2UtcG9wdXAnLCBudWxsLCBzZWxlY3Rvcik7XG4gICAgICAgICAgICBzZXRDb29raWVWYWx1ZSgnbGFuZ3VhZ2UtcG9wdXAtc2VlbicsICd0cnVlJywge1xuICAgICAgICAgICAgICAgICdtYXgtYWdlJzogMzE1MzYwMDBcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHBvcHVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZG9tYWluRHJvcGRvd24gPSBwb3B1cC5xdWVyeVNlbGVjdG9yKCcjZG9tYWluLWRyb3Bkb3duJyk7XG4gICAgICAgICAgICBjb25zdCBzdGF5RG9tYWluQnV0dG9uID0gKF9hID0gcG9wdXAgPT09IG51bGwgfHwgcG9wdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJyNzdGF5RG9tYWluJykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XG4gICAgICAgICAgICBjb25zdCBvdGhlckRvbWFpbkJ1dHRvbnMgPSBBcnJheS5mcm9tKHBvcHVwID09PSBudWxsIHx8IHBvcHVwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcub3RoZXJEb21haW5zJykpO1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0RG9tYWluQnV0dG9uID0gcG9wdXAgPT09IG51bGwgfHwgcG9wdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtZG9tYWluJyk7XG4gICAgICAgICAgICBzdGF5RG9tYWluQnV0dG9uID09PSBudWxsIHx8IHN0YXlEb21haW5CdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YXlEb21haW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXAgPT09IG51bGwgfHwgcG9wdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvcHVwLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG90aGVyRG9tYWluQnV0dG9ucy5mb3JFYWNoKChvdGhlckRvbWFpbkJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIG90aGVyRG9tYWluQnV0dG9uID09PSBudWxsIHx8IG90aGVyRG9tYWluQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvdGhlckRvbWFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVycyA9IEFycmF5LmZyb20ocG9wdXAgPT09IG51bGwgfHwgcG9wdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5ndWFnZS1wb3B1cF9fY29udGFpbmVyJykpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdWJtaXREb21haW5CdXR0b24gPT09IG51bGwgfHwgc3VibWl0RG9tYWluQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdWJtaXREb21haW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkb21haW5Ecm9wZG93biA9PT0gbnVsbCB8fCBkb21haW5Ecm9wZG93biA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9tYWluRHJvcGRvd24uc2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8ICFkb21haW5Ecm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBpbmcgPSBkb21haW5Ecm9wZG93bi5kYXRhc2V0Lm1hcHBpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBKU09OLnBhcnNlKGRvbWFpbkRyb3Bkb3duLmRhdGFzZXQubWFwcGluZylcbiAgICAgICAgICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKG1hcHBpbmdbdmFsdWVdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsLmhyZWY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fcG9wdXAucGNzcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGF0YUF0dHJpYnV0ZSA9ICdkYXRhLXBvcHVwLW5hbWUnO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAgICAgICBvcGVuOiAncG9wdXAtLW9wZW5lZCcsXG4gICAgICAgICAgICBjbG9zZWQ6ICdwb3B1cC0tY2xvc2VkJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgb3BlblBvcHVwKHBvcHVwSUQsIGVsZW1lbnQgPSBudWxsLCBzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IHBvcHVwID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXAtbmFtZT1cIiR7cG9wdXBJRH1cIl1gKTtcbiAgICAgICAgaWYgKHBvcHVwID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLXRlbXBsYXRlPVwiJHtwb3B1cElEfVwiXWApO1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZWxlbWVudC5ocmVmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gY2xvbmU7XG4gICAgICAgICAgICAoX2EgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLW5hbWU9XCIke3BvcHVwSUR9XCJdYCk7XG4gICAgICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdCgndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgcG9wdXApO1xuICAgICAgICAgICAgaWYgKHBvcHVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwb3B1cEluc3RhbmNlID0gbmV3IFBvcHVwKHBvcHVwKTtcbiAgICAgICAgICAgIHBvcHVwSW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcG9wdXAub3Blbikge1xuICAgICAgICAgICAgY29uc3Qgb3BlbkV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdvcGVuJyk7XG4gICAgICAgICAgICBwb3B1cC5kaXNwYXRjaEV2ZW50KG9wZW5FdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvcHVwO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcbiAgICAgICAgY29uc3QgcG9wdXBMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcG9wdXBdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcG9wdXBMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwb3B1cExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNyZWF0aW9uRXZlbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZUNyZWF0aW9uRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcG9wdXBJRCA9IHRoaXMuZGF0YXNldC5wb3B1cCB8fCAnJztcbiAgICAgICAgUG9wdXAub3BlblBvcHVwKHBvcHVwSUQsIHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX3NpZGVQYW5lbC5wY3NzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVQYW5lbCBleHRlbmRzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGF0YUF0dHJpYnV0ZSA9ICdkYXRhLXBhbmVsLW5hbWUnO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAgICAgICBvcGVuOiAnc2lkZS1wYW5lbC0tb3BlbmVkJyxcbiAgICAgICAgICAgIGNsb3NlZDogJ3NpZGUtcGFuZWwtLWNsb3NlZCcsXG4gICAgICAgICAgICBsZWZ0OiAnc2lkZS1wYW5lbC0tbGVmdCcsXG4gICAgICAgICAgICByaWdodDogJ3NpZGUtcGFuZWwtLXJpZ2h0J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgb3BlblNpZGVQYW5lbChwYW5lbElELCBlbGVtZW50ID0gbnVsbCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLW5hbWU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgIGlmIChwYW5lbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYW5lbC10ZW1wbGF0ZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGVsZW1lbnQuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gY2xvbmU7XG4gICAgICAgICAgICAoX2EgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLW5hbWU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdCgndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgcGFuZWwpO1xuICAgICAgICAgICAgaWYgKHBhbmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2lkZVBhbmVsSW5zdGFuY2UgPSBuZXcgU2lkZVBhbmVsKHBhbmVsKTtcbiAgICAgICAgICAgIHNpZGVQYW5lbEluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2dnbGVFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJyk7XG4gICAgICAgIHBhbmVsLmRpc3BhdGNoRXZlbnQodG9nZ2xlRXZlbnQpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGFuZWxdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFuZWxMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYW5lbExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNyZWF0aW9uRXZlbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZUNyZWF0aW9uRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxJRCA9IHRoaXMuZGF0YXNldC5wYW5lbCB8fCAnJztcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBsb2dnZWQgaW4gZm9sbG93IGxpbmtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCAmJlxuICAgICAgICAgICAgcGFuZWxJRCA9PT0gJ215LWFjY291bnQtcGFuZWwnICYmXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNpZGVQYW5lbC5vcGVuU2lkZVBhbmVsKHBhbmVsSUQsIHRoaXMpO1xuICAgIH1cbn1cbiIsImNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IHNjcm9sbFBvc2l0aW9uID0gMDtcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlQm9keVNjcm9sbCgpIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBib2R5RWxlbWVudC5zdHlsZS50b3AgPSBgLSR7c2Nyb2xsUG9zaXRpb259cHhgO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICdpbml0aWFsJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVCb2R5U2Nyb2xsKCkge1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb3NpdGlvbicpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnd2lkdGgnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFBvc2l0aW9uKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Njcm9sbC1iZWhhdmlvcicpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZVZhbHVlKG5hbWUpIHtcbiAgICBjb25zdCBjb29raWUgPSBkb2N1bWVudC5jb29raWVcbiAgICAgICAgLnNwbGl0KCc7ICcpXG4gICAgICAgIC5maW5kKChyb3cpID0+IHJvdy5zdGFydHNXaXRoKG5hbWUpKTtcbiAgICBpZiAoY29va2llID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb29raWUuc3BsaXQoJz0nKVsxXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWVWYWx1ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNvb2tpZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgcGF0aDogJy8nIH0sIG9wdGlvbnMpO1xuICAgIGxldCB1cGRhdGVkQ29va2llID0gYCR7bmFtZX09JHt2YWx1ZX1gO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKGNvbnN0IG9wdGlvbktleSBpbiBjb29raWVPcHRpb25zKSB7XG4gICAgICAgIHVwZGF0ZWRDb29raWUgKz0gYDsgJHtvcHRpb25LZXl9YDtcbiAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBjb29raWVPcHRpb25zW29wdGlvbktleV07XG4gICAgICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBgPSR7b3B0aW9uVmFsdWV9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZVZhbGlkKGRhdGUpIHtcbiAgICByZXR1cm4gIU51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgY29uc3QgZGF5ID0gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCBtb250aCA9IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke21vbnRofS0ke2RheX1gO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyhudW1iZXIpIHtcbiAgICByZXR1cm4gU3RyaW5nKG51bWJlcikucGFkU3RhcnQoMiwgJzAnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsTW9udGhOYW1lKG1vbnRoLCBsb2NhbGUgPSAnZGVmYXVsdCcpIHtcbiAgICByZXR1cm4gbW9udGgudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCB7IG1vbnRoOiAnbG9uZycgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2VTdHJpbmdBc0h0bWwoY29udGVudCwgc2VsZWN0b3IgPSAndGVtcGxhdGUnKSB7XG4gICAgY29uc3QgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IHBhcnNlZCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ3RleHQvaHRtbCcpO1xuICAgIHJldHVybiBwYXJzZWQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgfHwgcGFyc2VkLmJvZHk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWJzb2x1dGVIZWlnaHQoZWwpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgY29uc3QgbWFyZ2luID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkJvdHRvbSk7XG4gICAgcmV0dXJuIE1hdGguY2VpbChlbC5vZmZzZXRIZWlnaHQgKyBtYXJnaW4pO1xufVxuIiwiY29uc3QgZW5kcG9pbnRzID0ge1xuICAgIGFqYXg6IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYFxufTtcbmV4cG9ydCBkZWZhdWx0IGVuZHBvaW50cztcbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50TGlua0NsYXNzKCkge1xuICAgIGNvbnN0IHBhdGhOYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGNvbnN0IGZvcm1hdHRlZFBhdGhOYW1lID0gc3RyaXBUcmFpbGluZ1NsYXNoKHBhdGhOYW1lKTtcbiAgICBjb25zdCBmdWxsVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgZm9ybWF0dGVkVXJsID0gc3RyaXBUcmFpbGluZ1NsYXNoKGZ1bGxVcmwpO1xuICAgIGNvbnN0IGFuY2hvcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFxuICAgICAgICBuYXYgYVtocmVmPVwiJHtwYXRoTmFtZX1cIl0sXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke2Zvcm1hdHRlZFBhdGhOYW1lfVwiXSxcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7ZnVsbFVybH1cIl0sXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke2Zvcm1hdHRlZFVybH1cIl1cbiAgICBgKSk7XG4gICAgYW5jaG9ycy5mb3JFYWNoKChhbmNob3IpID0+IHtcbiAgICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbGluaycpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChzdHIpIHtcbiAgICByZXR1cm4gc3RyLmVuZHNXaXRoKCcvJykgPyBzdHIuc2xpY2UoMCwgLTEpIDogc3RyO1xufVxuIiwibGV0IGxvYWRlZCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IHNpdGVrZXkgPSAnNkxkdjJSa2NBQUFBQUJDQ0wxSlI1RGxtRUVUNE55XzJDbWtWYThOdic7XG5leHBvcnQgZnVuY3Rpb24gbG9hZFJlY2FwdGNoYShlbGVtZW50cykge1xuICAgIGxvb3BUaHJvdWdoRWxlbWVudHMoZWxlbWVudHMsIHRydWUsICgpID0+IHtcbiAgICAgICAgaW5zZXJ0UmVjYXB0Y2hhU2NyaXB0KGVsZW1lbnRzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGluc2VydFJlY2FwdGNoYVNjcmlwdChlbGVtZW50cykge1xuICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LnNyYyA9IGBodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanM/cmVuZGVyPSR7c2l0ZWtleX1gO1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICAgIGxvb3BUaHJvdWdoRWxlbWVudHMoZWxlbWVudHMsIGZhbHNlLCAoKSA9PiB7XG4gICAgICAgIGluc2VydFJlY2FwdGNoYVNjcmlwdChlbGVtZW50cyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBsb29wVGhyb3VnaEVsZW1lbnRzKGVsZW1lbnRzLCBhZGRFdmVudCwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFsnZm9jdXMnLCAnY2xpY2snLCAndG91Y2hlbmQnLCAnYmx1cicsICdpbnB1dCcsICdjaGFuZ2UnLCAncHJvcGVydHljaGFuZ2UnXS5mb3JFYWNoKChldnQpID0+IHtcbiAgICAgICAgICAgIGlmIChhZGRFdmVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGxUb1RhcmdldCh0YXJnZXQsIGRlZmF1bHRPZmZzZXQgPSAwLCBoZWFkZXJPZmZzZXQgPSB0cnVlKSB7XG4gICAgY29uc3QgYm9keVRvcFBvc2l0aW9uID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGJvZHlUb3BQb3NpdGlvbjtcbiAgICBsZXQgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldDtcbiAgICBpZiAoaGVhZGVyT2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IGhlYWRlci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gLSBvZmZzZXQgKyAxO1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogb2Zmc2V0UG9zaXRpb24sXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobWF0Y2gsIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvVGl0bGVDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3XFxTKi9nLCAodHh0KSA9PiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldFZhbGlkYXRpb25NZXNzYWdlKG1lc3NhZ2UsIGVsZW1lbnQpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZm9ybVJvdyA9IChfYSA9IGVsZW1lbnQuY2xvc2VzdCgnLmZvcm0tcm93JykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGVsZW1lbnQ7XG4gICAgY29uc3QgZm9ybVJvd1BhcmVudCA9IGZvcm1Sb3cgPT09IG51bGwgfHwgZm9ybVJvdyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybVJvdy5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChmb3JtUm93ID09PSBudWxsIHx8ICFmb3JtUm93UGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXMoZWxlbWVudCwgZm9ybVJvd1BhcmVudCk7XG4gICAgY29uc3QgdmFsaWRhdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc05hbWUgPSAnYWxlcnQgYWxlcnQtLXdhcm5pbmcgaW5saW5lLWZvcm0tZXJyb3InO1xuICAgIHZhbGlkYXRpb25FbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICBmb3JtUm93UGFyZW50Lmluc2VydEJlZm9yZSh2YWxpZGF0aW9uRWxlbWVudCwgZm9ybVJvdyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBzZWxlY3RvciB8fCAoKF9hID0gZWxlbWVudC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFyZW50RWxlbWVudCk7XG4gICAgaWYgKCFncmFuZHBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGV4aXN0aW5nVmFsaWRhdGlvbnMgPSBBcnJheS5mcm9tKGdyYW5kcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGVydC0td2FybmluZycpKTtcbiAgICBleGlzdGluZ1ZhbGlkYXRpb25zLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgdi5yZW1vdmUoKTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIF9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljaywgX0N1cnRhaW5FbGVtZW50X29wZW4sIF9DdXJ0YWluRWxlbWVudF9leHBhbmQsIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCwgX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzLCBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucywgX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zO1xuaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fYWNjb3JkaW9uLnBjc3MnO1xuaW1wb3J0IHsgZ2V0QWJzb2x1dGVIZWlnaHQgfSBmcm9tICcuLi91dGlsL2RvbSc7XG5jbGFzcyBDdXJ0YWluRWxlbWVudCBleHRlbmRzIEhUTUxEZXRhaWxzRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeS5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5JykpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfY29udGVudC5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKCcuY3VydGFpbi1jb250ZW50JykpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24uc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2suc2V0KHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICAvLyBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2Nsb3NlJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIFwiZlwiKSB8fCB0aGlzLm9wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X29wZW4pLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnb3BlbicpO1xuICAgIH1cbiAgICBzZXQgb3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSgnb3BlbicsIHZhbHVlKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIC8vIHRoaXMuI3N1bW1hcnkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLiNoYW5kbGVDbGljaywge1xuICAgICAgICAvLyAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgLy8gICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIC8vIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgXCJmXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2ssIFwiZlwiKSk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdjbG9zaW5nJyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0SGVpZ2h0ID0gYCR7dGhpcy5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgICBjb25zdCBlbmRIZWlnaHQgPSBgJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBcImZcIikub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIHRoaXMuYW5pbWF0ZSh7XG4gICAgICAgICAgICBoZWlnaHQ6IFtzdGFydEhlaWdodCwgZW5kSGVpZ2h0XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnXG4gICAgICAgIH0pLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLm9uZmluaXNoID0gKCkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoKS5jYWxsKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikub25jYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIGZhbHNlLCBcImZcIik7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NpbmcnKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5fQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9jb250ZW50ID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZyA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24gPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2sgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0N1cnRhaW5FbGVtZW50X29wZW4gPSBmdW5jdGlvbiBfQ3VydGFpbkVsZW1lbnRfb3BlbigpIHtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X2V4cGFuZCkuY2FsbCh0aGlzKSk7XG59LCBfQ3VydGFpbkVsZW1lbnRfZXhwYW5kID0gZnVuY3Rpb24gX0N1cnRhaW5FbGVtZW50X2V4cGFuZCgpIHtcbiAgICBjb25zdCBzdGFydEhlaWdodCA9IGAke3RoaXMub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICBjb25zdCBlbmRIZWlnaHQgPSBgJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBcImZcIikub2Zmc2V0SGVpZ2h0ICsgZ2V0QWJzb2x1dGVIZWlnaHQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCwgXCJmXCIpKX1weGA7XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLmNhbmNlbCgpO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIHRoaXMuYW5pbWF0ZSh7XG4gICAgICAgIGhlaWdodDogW3N0YXJ0SGVpZ2h0LCBlbmRIZWlnaHRdXG4gICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCdcbiAgICB9KSwgXCJmXCIpO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLm9uZmluaXNoID0gKCkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoKS5jYWxsKHRoaXMsIHRydWUpO1xufSwgX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoID0gZnVuY3Rpb24gX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoKG9wZW4pIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgbnVsbCwgXCJmXCIpO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgZmFsc2UsIFwiZlwiKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NpbmcnKTtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3RvZ2dsZScpKTtcbn07XG5jbGFzcyBBY2NvcmRpb25FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucy5zZXQodGhpcywgW10pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucywgQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RldGFpbHMnKSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucywgXCJmXCIpLmZvckVhY2goKGN1cnRhaW4pID0+IHtcbiAgICAgICAgICAgIGN1cnRhaW4uYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY3VydGFpbi5vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMpLmNhbGwodGhpcywgY3VydGFpbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMgPSBuZXcgV2Vha01hcCgpLCBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMgPSBmdW5jdGlvbiBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMoY3VydGFpbikge1xuICAgIGNvbnN0IG90aGVyQ3VydGFpbnMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBcImZcIikuZmlsdGVyKChjKSA9PiBjdXJ0YWluICE9PSBjKTtcbiAgICBvdGhlckN1cnRhaW5zLmZvckVhY2goKG90aGVyQ3VydGFpbikgPT4ge1xuICAgICAgICBjb25zdCBjdXJ0YWluRWxlbWVudCA9IG90aGVyQ3VydGFpbjtcbiAgICAgICAgY3VydGFpbkVsZW1lbnQub3BlbiA9IGZhbHNlO1xuICAgIH0pO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYWNjb3JkaW9uLWVsZW1lbnQnLCBBY2NvcmRpb25FbGVtZW50KTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY3VydGFpbi1lbGVtZW50JywgQ3VydGFpbkVsZW1lbnQsIHsgZXh0ZW5kczogJ2RldGFpbHMnIH0pO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIF9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uLCBfQmlydGhkYXlGb3JtX2RheUZpZWxkLCBfQmlydGhkYXlGb3JtX21vbnRoRmllbGQsIF9CaXJ0aGRheUZvcm1fZ2V0RGF5VmFsdWVzLCBfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzLCBfQmlydGhkYXlGb3JtX29uU3VibWl0LCBfQmlydGhkYXlGb3JtX29uU3VjY2VzcywgX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmU7XG5pbXBvcnQgeyBmb3JtYXREYXRlLCBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8sIGdldEZ1bGxNb250aE5hbWUgfSBmcm9tICcuLi91dGlsL2RhdGVIZWxwZXInO1xuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuLi91dGlsL2VuZHBvaW50cyc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmNsYXNzIEJpcnRoZGF5Rm9ybSBleHRlbmRzIEhUTUxGb3JtRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24uc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzdWJtaXRcIl0nKSk7XG4gICAgICAgIF9CaXJ0aGRheUZvcm1fZGF5RmllbGQuc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcignI2JpcnRoZGF5LWRheScpKTtcbiAgICAgICAgX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkLnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJyNiaXJ0aGRheS1tb250aCcpKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQpLmJpbmQodGhpcykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uLCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCkuYmluZCh0aGlzKSk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fZGF5RmllbGQsIFwiZlwiKSA9PT0gbnVsbCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fbW9udGhGaWVsZCwgXCJmXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2RheUZpZWxkLCBcImZcIikub3B0aW9uVmFsdWVzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fZ2V0RGF5VmFsdWVzKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX21vbnRoRmllbGQsIFwiZlwiKS5vcHRpb25WYWx1ZXMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9nZXRNb250aFZhbHVlcykuY2FsbCh0aGlzKTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX29uU3VibWl0KS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbiwgXCJmXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQpLmJpbmQodGhpcykpO1xuICAgIH1cbn1cbl9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uID0gbmV3IFdlYWtNYXAoKSwgX0JpcnRoZGF5Rm9ybV9kYXlGaWVsZCA9IG5ldyBXZWFrTWFwKCksIF9CaXJ0aGRheUZvcm1fbW9udGhGaWVsZCA9IG5ldyBXZWFrTWFwKCksIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0JpcnRoZGF5Rm9ybV9nZXREYXlWYWx1ZXMgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX2dldERheVZhbHVlcygpIHtcbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDMxOyBpKyspIHtcbiAgICAgICAgY29uc3QgbnVtID0gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKGkpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVyblZhbHVlW251bV0gPSBudW07XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbn0sIF9CaXJ0aGRheUZvcm1fZ2V0TW9udGhWYWx1ZXMgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzKCkge1xuICAgIGNvbnN0IHJldHVyblZhbHVlID0ge307XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgICAgICBjb25zdCBudW0gPSBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8oaSkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAyMDIxLSR7bnVtfS0wMmApO1xuICAgICAgICBjb25zdCBtb250aE5hbWUgPSBnZXRGdWxsTW9udGhOYW1lKGRhdGUpO1xuICAgICAgICByZXR1cm5WYWx1ZVtpXSA9IG1vbnRoTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xufSwgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCA9IGZ1bmN0aW9uIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuICAgIGNvbnN0IGRheSA9IGZvcm1EYXRhLmdldCgnZGF5Jyk7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJyk7XG4gICAgY29uc3QgeWVhciA9ICcxOTcwJztcbiAgICBpZiAoIWRheSB8fCAhbW9udGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YCk7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgYWN0aW9uOiAnYWpheGRhdGVvZmJpcnRoJyxcbiAgICAgICAgZGF0ZTogZm9ybWF0RGF0ZShkYXRlKVxuICAgIH07XG4gICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIGVuZHBvaW50cy5hamF4LCBudWxsLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vblN1Y2Nlc3MpLmJpbmQodGhpcyksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX29uRmFpbHVyZSkuYmluZCh0aGlzKSwgZXZlbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24sIFwiZlwiKSk7XG4gICAgcmV0dXJuIGZhbHNlO1xufSwgX0JpcnRoZGF5Rm9ybV9vblN1Y2Nlc3MgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX29uU3VjY2VzcygpIHtcbiAgICBjb25zdCBibG9jayA9IHRoaXMuY2xvc2VzdCgnW2lzPVwic2lnbnVwLWJsb2NrXCJdJyk7XG4gICAgaWYgKCFibG9jaykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGJsb2NrLmNvbXBsZXRlZCA9IHRydWU7XG59LCBfQmlydGhkYXlGb3JtX29uRmFpbHVyZSA9IGZ1bmN0aW9uIF9CaXJ0aGRheUZvcm1fb25GYWlsdXJlKCkge1xuICAgIC8vIHN0dWZmXG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiaXJ0aGRheS1mb3JtJywgQmlydGhkYXlGb3JtLCB7IGV4dGVuZHM6ICdmb3JtJyB9KTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgX0Nhcm91c2VsRWxlbWVudF9pdGVtcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBfQ2Fyb3VzZWxFbGVtZW50X3ByZXZCdXR0b24sIF9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbiwgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBfQ2Fyb3VzZWxFbGVtZW50X2NvdW50ZXIsIF9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwsIF9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudCwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSwgX0Nhcm91c2VsRWxlbWVudF9nZXRUcmFuc2xhdGVYLCBfQ2Fyb3VzZWxFbGVtZW50X2dldEl0ZW1XaWR0aDtcbmltcG9ydCB7IG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vcG9seWZpbGxzL21hdGNoTWVkaWEnO1xuY2xhc3MgQ2Fyb3VzZWxFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMuc2V0KHRoaXMsIFtdKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9saXN0LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9wcmV2QnV0dG9uLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LnNldCh0aGlzLCAwKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLnNldCh0aGlzLCAzKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbC5zZXQodGhpcywgMCk7XG4gICAgfVxuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIHNldCBhY3RpdmUodmFsdWUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoJ2FjdGl2ZScsIHZhbHVlKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pdGVtcywgQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWl0ZW1dJykpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWl0ZW1zXScpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9wcmV2QnV0dG9uLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByZXZdJyksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24sIHRoaXMucXVlcnlTZWxlY3RvcignW2RhdGEtbmV4dF0nKSwgXCJmXCIpO1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBcImZcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbiwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUpLmNhbGwodGhpcywgLTEpO1xuICAgICAgICB9KTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlKS5jYWxsKHRoaXMsIDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50Q2hlY2sgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTAyM3B4KScpO1xuICAgICAgICBjb25zdCBzZXR1cCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRDaGVjay5tYXRjaGVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVpbml0aWFsaXplKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldHVwKCk7XG4gICAgICAgIG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyKGNvbXBvbmVudENoZWNrLCBzZXR1cCwgZmFsc2UpO1xuICAgIH1cbiAgICBkZWluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsLCBcImZcIikpO1xuICAgICAgICAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSkuY2FsbCh0aGlzLCAwKTtcbiAgICAgICAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDc5cHgpJyk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQpLmNhbGwodGhpcywgbXEpO1xuICAgICAgICBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihtcSwgKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudCkuY2FsbCh0aGlzLCBtcSk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsLCB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2hlcygnOmhvdmVyJykgfHwgdGhpcy5tYXRjaGVzKCc6Zm9jdXMtd2l0aGluJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSkuY2FsbCh0aGlzLCAxKTtcbiAgICAgICAgfSwgNzAwMCksIFwiZlwiKTtcbiAgICB9XG59XG5fQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9saXN0ID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9wcmV2QnV0dG9uID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50ID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbCA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50ID0gZnVuY3Rpb24gX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50KG1xKSB7XG4gICAgY29uc3QgaXRlbXNTaG93biA9IG1xLm1hdGNoZXMgPyAxIDogMjtcbiAgICBpZiAoaXRlbXNTaG93biA8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pdGVtcywgXCJmXCIpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIFwiZlwiKS5sZW5ndGggLSBpdGVtc1Nob3duLCBcImZcIik7XG59LCBfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlID0gZnVuY3Rpb24gX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZShpbmNyZW1lbnQpIHtcbiAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBcImZcIikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIFwiZlwiKSArIGluY3JlbWVudCwgXCJmXCIpO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgXCJmXCIpIDwgMCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2NvdW50ZXIsIFwiZlwiKSwgXCJmXCIpO1xuICAgIH1cbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIFwiZlwiKSA+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLCBcImZcIikpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIDAsIFwiZlwiKTtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QsIFwiZlwiKS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X2dldFRyYW5zbGF0ZVgpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIFwiZlwiKSl9cHgpYDtcbn0sIF9DYXJvdXNlbEVsZW1lbnRfZ2V0VHJhbnNsYXRlWCA9IGZ1bmN0aW9uIF9DYXJvdXNlbEVsZW1lbnRfZ2V0VHJhbnNsYXRlWChjb3VudCkge1xuICAgIGNvbnN0IG1vbnRoV2lkdGggPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9nZXRJdGVtV2lkdGgpLmNhbGwodGhpcyk7XG4gICAgcmV0dXJuIC0obW9udGhXaWR0aCAqIGNvdW50KTtcbn0sIF9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoID0gZnVuY3Rpb24gX0Nhcm91c2VsRWxlbWVudF9nZXRJdGVtV2lkdGgoKSB7XG4gICAgY29uc3QgaXRlbSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pdGVtcywgXCJmXCIpWzBdO1xuICAgIGlmICghaXRlbSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgaXRlbVdpZHRoID0gaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBjb25zdCBncmlkR2FwID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QsIFwiZlwiKSkuY29sdW1uR2FwLCAxMCk7XG4gICAgcmV0dXJuIGl0ZW1XaWR0aCArIGdyaWRHYXA7XG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJvdXNlbC1lbGVtZW50JywgQ2Fyb3VzZWxFbGVtZW50KTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9MYW5ndWFnZVN3aXRjaGVyX2luc3RhbmNlcywgX0xhbmd1YWdlU3dpdGNoZXJfZ2V0VmFsdWUsIF9MYW5ndWFnZVN3aXRjaGVyX29uQ2hhbmdlO1xuaW1wb3J0IExhdmFuZHJlU2VsZWN0IGZyb20gJy4vTGF2YW5kcmVTZWxlY3QnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZ3VhZ2VTd2l0Y2hlciBleHRlbmRzIExhdmFuZHJlU2VsZWN0IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdmFyIF9hLCBfYjtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0xhbmd1YWdlU3dpdGNoZXJfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdsYW5ndWFnZS1zd2l0Y2hlcicpO1xuICAgICAgICBjb25zdCBqc29uID0gdGhpcy5kYXRhc2V0Lmpzb247XG4gICAgICAgIGlmICghanNvbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaWQgPSAnZG9tYWluLWRyb3Bkb3duLWZpZWxkJztcbiAgICAgICAgdGhpcy5pY29uID0gKF9iID0gKF9hID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2NhcnQnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLm91dGVySFRNTCkgIT09IG51bGwgJiYgX2IgIT09IHZvaWQgMCA/IF9iIDogJyc7XG4gICAgICAgIHRoaXMub3B0aW9uVmFsdWVzID0gSlNPTi5wYXJzZShqc29uKSB8fCBbXTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHN1cGVyLmNvbm5lY3RlZENhbGxiYWNrKCk7XG4gICAgICAgIGlmICh0aGlzLmhhc0F0dHJpYnV0ZSgnZGF0YS1jaGFuZ2UnKSkge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYW5ndWFnZVN3aXRjaGVyX2luc3RhbmNlcywgXCJtXCIsIF9MYW5ndWFnZVN3aXRjaGVyX29uQ2hhbmdlKS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgc3VwZXIuZGlzY29ubmVjdGVkQ2FsbGJhY2soKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYW5ndWFnZVN3aXRjaGVyX2luc3RhbmNlcywgXCJtXCIsIF9MYW5ndWFnZVN3aXRjaGVyX29uQ2hhbmdlKS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBzdXBlci51cGRhdGUoKTtcbiAgICAgICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZS5zdWJzdHJpbmcoMCwgNCk7XG4gICAgICAgIGxldCB2YWx1ZTtcbiAgICAgICAgc3dpdGNoIChwYXRoKSB7XG4gICAgICAgICAgICBjYXNlICcvbmwvJzpcbiAgICAgICAgICAgICAgICB2YWx1ZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhbmd1YWdlU3dpdGNoZXJfaW5zdGFuY2VzLCBcIm1cIiwgX0xhbmd1YWdlU3dpdGNoZXJfZ2V0VmFsdWUpLmNhbGwodGhpcywgJ05lZGVybGFuZHMnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy9kZS8nOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9pbnN0YW5jZXMsIFwibVwiLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9nZXRWYWx1ZSkuY2FsbCh0aGlzLCAnRGV1dHNjaGxhbmQnKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJy9mci8nOlxuICAgICAgICAgICAgICAgIHZhbHVlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9pbnN0YW5jZXMsIFwibVwiLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9nZXRWYWx1ZSkuY2FsbCh0aGlzLCAnRnJhbmNlJyk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHZhbHVlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9pbnN0YW5jZXMsIFwibVwiLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9nZXRWYWx1ZSkuY2FsbCh0aGlzLCAnSW50ZXJuYXRpb25hbCcpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlICE9PSBudWxsICYmIHZhbHVlICE9PSB2b2lkIDAgPyB2YWx1ZSA6ICdJbnRlcm5hdGlvbmFsJztcbiAgICB9XG59XG5fTGFuZ3VhZ2VTd2l0Y2hlcl9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfTGFuZ3VhZ2VTd2l0Y2hlcl9nZXRWYWx1ZSA9IGZ1bmN0aW9uIF9MYW5ndWFnZVN3aXRjaGVyX2dldFZhbHVlKHZhbHVlKSB7XG4gICAgY29uc3QgbWFwcGluZyA9IHRoaXMuZGF0YXNldC5tYXBwaW5nID8gSlNPTi5wYXJzZSh0aGlzLmRhdGFzZXQubWFwcGluZykgOiB7fTtcbiAgICByZXR1cm4gbWFwcGluZ1t2YWx1ZV0gPyB2YWx1ZSA6ICcnO1xufSwgX0xhbmd1YWdlU3dpdGNoZXJfb25DaGFuZ2UgPSBmdW5jdGlvbiBfTGFuZ3VhZ2VTd2l0Y2hlcl9vbkNoYW5nZSgpIHtcbiAgICBjb25zdCB2YWx1ZSA9IHRoaXMuc2VsZWN0ZWRWYWx1ZTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbWFwcGluZyA9IHRoaXMuZGF0YXNldC5tYXBwaW5nID8gSlNPTi5wYXJzZSh0aGlzLmRhdGFzZXQubWFwcGluZykgOiB7fTtcbiAgICBjb25zdCB1cmwgPSBuZXcgVVJMKG1hcHBpbmdbdmFsdWVdKTtcbiAgICBpZiAoIXVybCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsLmhyZWY7XG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsYW5ndWFnZS1zd2l0Y2hlcicsIExhbmd1YWdlU3dpdGNoZXIpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZSwgX0xhdmFuZHJlU2VsZWN0X25hbWUsIF9MYXZhbmRyZVNlbGVjdF9wbGFjZWhvbGRlciwgX0xhdmFuZHJlU2VsZWN0X2ljb24sIF9MYXZhbmRyZVNlbGVjdF9pZCwgX0xhdmFuZHJlU2VsZWN0X291dHNpZGVDbGlja0xpc3RlbmVyLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0T3B0aW9uLCBfTGF2YW5kcmVTZWxlY3RfZmlsdGVyLCBfTGF2YW5kcmVTZWxlY3Rfc2hvd0Ryb3Bkb3duLCBfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duO1xuaW1wb3J0IHsgZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvIH0gZnJvbSAnLi4vdXRpbC9kYXRlSGVscGVyJztcbmltcG9ydCB7IHBhcnNlU3RyaW5nQXNIdG1sIH0gZnJvbSAnLi4vdXRpbC9kb20nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF2YW5kcmVTZWxlY3QgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoaWQgPSAnJywgcGxhY2Vob2xkZXIgPSAnJykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMuc2V0KHRoaXMsIFtdKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUuc2V0KHRoaXMsICcnKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X25hbWUuc2V0KHRoaXMsIHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykgfHwgJycpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3RfcGxhY2Vob2xkZXIuc2V0KHRoaXMsICcnKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X2ljb24uc2V0KHRoaXMsICcnKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X2lkLnNldCh0aGlzLCAnJyk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lci5zZXQodGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93bikuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbG9zZXN0ID0gdGFyZ2V0LmNsb3Nlc3QoJy5sYXZhbmRyZS1zZWxlY3QnKTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0IHx8IGNsb3Nlc3QgPT09IG51bGwgfHwgY2xvc2VzdCAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24pLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2xhdmFuZHJlLXNlbGVjdCcpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU5QVVQnKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmNsYXNzTGlzdC5hZGQoJ2xhdmFuZHJlLXNlbGVjdF9faW5wdXQnKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmF1dG9jYXBpdGFsaXplID0gJ29mZic7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikuYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikucGxhY2Vob2xkZXIgPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5pZCA9IGlkO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdMQUJFTCcpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwsIFwiZlwiKS5jbGFzc0xpc3QuYWRkKCdsYXZhbmRyZS1zZWxlY3RfX2xhYmVsJyk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwsIFwiZlwiKS5pbm5lclRleHQgPSBwbGFjZWhvbGRlcjtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgXCJmXCIpLmh0bWxGb3IgPSBpZDtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLCBcImZcIikpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdVTCcpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikuY2xhc3NMaXN0LmFkZCgnbGF2YW5kcmUtc2VsZWN0X19kcm9wZG93bicpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKSk7XG4gICAgfVxuICAgIGdldCBwbGFjZWhvbGRlcigpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3BsYWNlaG9sZGVyLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBwbGFjZWhvbGRlcih2YWx1ZSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9wbGFjZWhvbGRlciwgdmFsdWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5wbGFjZWhvbGRlciA9IHZhbHVlO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLCBcImZcIikuaW5uZXJUZXh0ID0gdmFsdWU7XG4gICAgfVxuICAgIGdldCBpY29uKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaWNvbiwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgaWNvbih2YWx1ZSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pY29uLCB2YWx1ZSwgXCJmXCIpO1xuICAgIH1cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pZCwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgaWQodmFsdWUpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaWQsIHZhbHVlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikuaWQgPSB2YWx1ZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgXCJmXCIpLmh0bWxGb3IgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9uYW1lLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X25hbWUsIHZhbHVlLCBcImZcIik7XG4gICAgfVxuICAgIGdldCBzZWxlY3RlZFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZSwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlLCB2YWx1ZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnZhbHVlID0gdmFsdWUucmVwbGFjZSgvXjArLywgJycpO1xuICAgIH1cbiAgICBnZXQgb3B0aW9uVmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBvcHRpb25WYWx1ZXModmFsdWUpIHtcbiAgICAgICAgY29uc3QgYXJyID0gT2JqZWN0LmVudHJpZXModmFsdWUpLnNvcnQoKFssIGFdLCBbLCBiXSkgPT4gYSAtIGIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMsIGFyciwgXCJmXCIpO1xuICAgICAgICB0aGlzLnVwZGF0ZSgpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9maWx0ZXIpLmJpbmQodGhpcykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93bikuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X2ZpbHRlcikuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3Rfc2hvd0Ryb3Bkb3duKS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgdXBkYXRlKCkge1xuICAgICAgICBmb3IgKGNvbnN0IFtrZXksIHZhbHVlXSBvZiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMsIFwiZlwiKSkge1xuICAgICAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RPcHRpb24pLmJpbmQodGhpcykpO1xuICAgICAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2xhdmFuZHJlLXNlbGVjdF9fZHJvcGRvd25fX2l0ZW0nKTtcbiAgICAgICAgICAgIGlmICh0aGlzLmljb24pIHtcbiAgICAgICAgICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQocGFyc2VTdHJpbmdBc0h0bWwodGhpcy5pY29uLCAnc3ZnJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc3BhbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NwYW4nKTtcbiAgICAgICAgICAgIHNwYW4uY2xhc3NMaXN0LmFkZCgnbGF2YW5kcmUtc2VsZWN0X19kcm9wZG93bl9faXRlbV9fdGV4dCcpO1xuICAgICAgICAgICAgc3Bhbi5pbm5lclRleHQgPSB2YWx1ZS5yZXBsYWNlKC9eMCsvLCAnJyk7XG4gICAgICAgICAgICBvcHRpb24uYXBwZW5kQ2hpbGQoc3Bhbik7XG4gICAgICAgICAgICBjb25zdCB2YWx1ZTIgPSBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8odmFsdWUpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBvcHRpb24uZGF0YXNldC52YWx1ZSA9IHZhbHVlMjtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpcnN0T3B0aW9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcubGF2YW5kcmUtc2VsZWN0X19kcm9wZG93bl9faXRlbScpO1xuICAgICAgICBpZiAoIWZpcnN0T3B0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZmlyc3RPcHRpb24uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xuICAgIH1cbn1cbl9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3RfbmFtZSA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9wbGFjZWhvbGRlciA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9pY29uID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X2lkID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X291dHNpZGVDbGlja0xpc3RlbmVyID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RPcHRpb24gPSBmdW5jdGlvbiBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0T3B0aW9uKGV2ZW50KSB7XG4gICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgIGNvbnN0IHZhbHVlID0gdGFyZ2V0LmRhdGFzZXQudmFsdWU7XG4gICAgaWYgKHZhbHVlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0aGlzLnNlbGVjdGVkVmFsdWUgPSB2YWx1ZTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duKS5jYWxsKHRoaXMpO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ2NoYW5nZScsIHsgZGV0YWlsOiB7IHZhbHVlIH0gfSkpO1xufSwgX0xhdmFuZHJlU2VsZWN0X2ZpbHRlciA9IGZ1bmN0aW9uIF9MYXZhbmRyZVNlbGVjdF9maWx0ZXIoKSB7XG4gICAgY29uc3Qgb3B0aW9ucyA9IEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcubGF2YW5kcmUtc2VsZWN0X19kcm9wZG93bl9faXRlbScpKTtcbiAgICBjb25zdCB2YWx1ZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikudmFsdWUudG9Mb3dlckNhc2UoKTtcbiAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgICAgICBvcHRpb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIG9wdGlvbnMuZm9yRWFjaCgob3B0aW9uKSA9PiB7XG4gICAgICAgIGNvbnN0IHRleHQgPSBvcHRpb24uaW5uZXJUZXh0LnRvTG93ZXJDYXNlKCk7XG4gICAgICAgIGlmICh0ZXh0LmluZGV4T2YodmFsdWUpICE9PSAtMSkge1xuICAgICAgICAgICAgb3B0aW9uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgb3B0aW9uLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9KTtcbn0sIF9MYXZhbmRyZVNlbGVjdF9zaG93RHJvcGRvd24gPSBmdW5jdGlvbiBfTGF2YW5kcmVTZWxlY3Rfc2hvd0Ryb3Bkb3duKCkge1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKS5oaWRkZW4gPSBmYWxzZTtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X291dHNpZGVDbGlja0xpc3RlbmVyLCBcImZcIikpO1xuICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG59LCBfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duID0gZnVuY3Rpb24gX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93bigpIHtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICBkb2N1bWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X291dHNpZGVDbGlja0xpc3RlbmVyLCBcImZcIikpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdsYXZhbmRyZS1zZWxlY3QnLCBMYXZhbmRyZVNlbGVjdCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX0xhdmFuZHJlVG9nZ2xlX2luc3RhbmNlcywgX0xhdmFuZHJlVG9nZ2xlX2VsZW1lbnRzLCBfTGF2YW5kcmVUb2dnbGVfdG9nZ2xlcywgX0xhdmFuZHJlVG9nZ2xlX2NsaWNrSGFuZGxlcjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdmFuZHJlVG9nZ2xlIGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfTGF2YW5kcmVUb2dnbGVfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0xhdmFuZHJlVG9nZ2xlX2VsZW1lbnRzLnNldCh0aGlzLCBbXSk7XG4gICAgICAgIF9MYXZhbmRyZVRvZ2dsZV90b2dnbGVzLnNldCh0aGlzLCBbXSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVRvZ2dsZV9lbGVtZW50cywgQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLW5hbWVdJykpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlVG9nZ2xlX3RvZ2dsZXMsIEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS10b2dnbGVdJykpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlVG9nZ2xlX3RvZ2dsZXMsIFwiZlwiKS5mb3JFYWNoKCh0b2dnbGUpID0+IHtcbiAgICAgICAgICAgIHRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlVG9nZ2xlX2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVRvZ2dsZV9jbGlja0hhbmRsZXIpLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVUb2dnbGVfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlVG9nZ2xlX2NsaWNrSGFuZGxlcikuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIH1cbn1cbl9MYXZhbmRyZVRvZ2dsZV9lbGVtZW50cyA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVRvZ2dsZV90b2dnbGVzID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlVG9nZ2xlX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9MYXZhbmRyZVRvZ2dsZV9jbGlja0hhbmRsZXIgPSBmdW5jdGlvbiBfTGF2YW5kcmVUb2dnbGVfY2xpY2tIYW5kbGVyKCkge1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlVG9nZ2xlX2VsZW1lbnRzLCBcImZcIikuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICBlbGVtZW50LnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJywgIWVsZW1lbnQuaGlkZGVuKTtcbiAgICB9KTtcbn07XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xhdmFuZHJlLXRvZ2dsZScsIExhdmFuZHJlVG9nZ2xlKTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBfU2lnbnVwQmxvY2tfdGVtcGxhdGUsIF9TaWdudXBCbG9ja19vdmVybGF5LCBfU2lnbnVwQmxvY2tfaHJlZiwgX1NpZ251cEJsb2NrX3BvaW50cywgX1NpZ251cEJsb2NrX3R5cGUsIF9TaWdudXBCbG9ja19jb21wbGV0ZWQsIF9TaWdudXBCbG9ja19tZWRpYVF1ZXJ5LCBfU2lnbnVwQmxvY2tfbXEsIF9TaWdudXBCbG9ja19pc01vYmlsZSwgX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUsIF9TaWdudXBCbG9ja19zZXRUZW1wbGF0ZSwgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIsIF9TaWdudXBCbG9ja19jbGlja0hhbmRsZXIsIF9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMsIF9TaWdudXBCbG9ja19nZXRUZW1wbGF0ZTtcbmltcG9ydCB7IG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyLCBtYXRjaE1lZGlhUmVtb3ZlRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL3BvbHlmaWxscy9tYXRjaE1lZGlhJztcbmltcG9ydCBlbmRwb2ludHMgZnJvbSAnLi4vdXRpbC9lbmRwb2ludHMnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWdudXBCbG9jayBleHRlbmRzIEhUTUxMSUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX3RlbXBsYXRlLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX292ZXJsYXkuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfaHJlZi5zZXQodGhpcywgdGhpcy5kYXRhc2V0LmhyZWYgfHwgbnVsbCk7XG4gICAgICAgIF9TaWdudXBCbG9ja19wb2ludHMuc2V0KHRoaXMsIE51bWJlcih0aGlzLmRhdGFzZXQucG9pbnRzKSB8fCAwKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX3R5cGUuc2V0KHRoaXMsIHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJykgfHwgJycpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfY29tcGxldGVkLnNldCh0aGlzLCB0aGlzLmhhc0F0dHJpYnV0ZSgnY29tcGxldGVkJykgfHwgZmFsc2UpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeS5zZXQodGhpcywgZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tdGFibGV0LWxhbmRzY2FwZScpKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX21xLnNldCh0aGlzLCBtYXRjaE1lZGlhKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21lZGlhUXVlcnksIFwiZlwiKSkpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfaXNNb2JpbGUuc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLnNldCh0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgXCJmXCIpLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19zZXRUZW1wbGF0ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMpLmNhbGwodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIuc2V0KHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlci5zZXQodGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhamF4YWRkbG95YWx0eXBvaW50cycsXG4gICAgICAgICAgICAgICAgcG9pbnRzOiBTdHJpbmcoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfcG9pbnRzLCBcImZcIikpLFxuICAgICAgICAgICAgICAgIHBvb2w6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja190eXBlLCBcImZcIilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgZW5kcG9pbnRzLmFqYXgsIG51bGwsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2hyZWYsIFwiZlwiKSwgJ19ibGFuaycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGNvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2NvbXBsZXRlZCwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgY29tcGxldGVkKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfY29tcGxldGVkLCB2YWx1ZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja190ZW1wbGF0ZSwgbnVsbCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCBudWxsLCBcImZcIik7XG4gICAgICAgIChfYSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvaW50cy1ncmlkX19vdmVybGF5JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlKS5jYWxsKHRoaXMpO1xuICAgICAgICBjb25zdCB0aXRsZXMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLnBvaW50cy1ncmlkX190aXRsZS1jb250ZW50JykpO1xuICAgICAgICB0aXRsZXMuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICAgICAgICAgIHRpdGxlLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJywgIXRpdGxlLmhpZGRlbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUpLmNhbGwodGhpcyk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pc01vYmlsZSwgXCJmXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tcSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSkpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIG1hdGNoTWVkaWFSZW1vdmVFdmVudExpc3RlbmVyKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21xLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlKSk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19ocmVmLCBcImZcIikpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19jbGlja0hhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5fU2lnbnVwQmxvY2tfdGVtcGxhdGUgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19ocmVmID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX3BvaW50cyA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja190eXBlID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX2NvbXBsZXRlZCA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19tZWRpYVF1ZXJ5ID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX21xID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX2lzTW9iaWxlID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSA9IGZ1bmN0aW9uIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlKCkge1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX2lzTW9iaWxlLCAhX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbXEsIFwiZlwiKS5tYXRjaGVzLCBcImZcIik7XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2lzTW9iaWxlLCBcImZcIik7XG59LCBfU2lnbnVwQmxvY2tfc2V0VGVtcGxhdGUgPSBmdW5jdGlvbiBfU2lnbnVwQmxvY2tfc2V0VGVtcGxhdGUoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfdGVtcGxhdGUsIFwiZlwiKSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja190ZW1wbGF0ZSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX2dldFRlbXBsYXRlKS5jYWxsKHRoaXMpLCBcImZcIik7XG4gICAgfVxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfdGVtcGxhdGUsIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb2ludHMtZ3JpZF9fb3ZlcmxheScpLCBcImZcIik7XG4gICAgY29uc3QgY2xvc2VPdmVybGF5QnV0dG9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jbG9zZV0nKTtcbiAgICBpZiAoIWNsb3NlT3ZlcmxheUJ1dHRvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsb3NlT3ZlcmxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLCBcImZcIikuYmluZCh0aGlzKSwgZmFsc2UpO1xufSwgX1NpZ251cEJsb2NrX3NldE92ZXJsYXlFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19ocmVmLCBcImZcIikpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcignYnV0dG9uW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdJyk7XG4gICAgICAgIGlmICghYnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfY2xpY2tIYW5kbGVyLCBcImZcIikpO1xuICAgIH1cbn0sIF9TaWdudXBCbG9ja19nZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIF9TaWdudXBCbG9ja19nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2ludHMtZ3JpZC1vdmVybGF5Jyk7XG4gICAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykpIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfY29tcGxldGVkLCBcImZcIikpIHtcbiAgICAgICAgcmV0dXJuIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG9pbnRzLWdyaWQtb3ZlcmxheS0tY29tcGxldGVkLS0ke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3R5cGUsIFwiZlwiKX1gKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaW50cy1ncmlkLW92ZXJsYXktLWNvbXBsZXRlZCcpKTtcbiAgICB9XG4gICAgY29uc3QgdHlwZVRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBvaW50cy1ncmlkLW92ZXJsYXktLSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfdHlwZSwgXCJmXCIpfWApO1xuICAgIGlmICh0eXBlVGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVUZW1wbGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2lnbnVwLWJsb2NrJywgU2lnbnVwQmxvY2ssIHsgZXh0ZW5kczogJ2xpJyB9KTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfTGF2YW5kcmVCdXR0b25faXNEaXNhYmxlZDtcbmltcG9ydCAnLi9zdHlsZS5wY3NzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhdmFuZHJlQnV0dG9uIGV4dGVuZHMgSFRNTEJ1dHRvbkVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfTGF2YW5kcmVCdXR0b25faXNEaXNhYmxlZC5zZXQodGhpcywgdGhpcy5oYXNBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnKSk7XG4gICAgICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5ocmVmID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaXMnLCAnbGF2YW5kcmUtYnV0dG9uJyk7XG4gICAgfVxuICAgIGdldCBsYWJlbCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJUZXh0O1xuICAgIH1cbiAgICBzZXQgbGFiZWwodmFsdWUpIHtcbiAgICAgICAgdGhpcy5pbm5lclRleHQgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGhyZWYoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnaHJlZicpIHx8ICcnO1xuICAgIH1cbiAgICBzZXQgaHJlZih1cmwpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2hyZWYnLCB1cmwpO1xuICAgIH1cbiAgICBnZXQgc2l6ZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdzaXplJykgfHwgJyc7XG4gICAgfVxuICAgIHNldCBzaXplKHVybCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnc2l6ZScsIHVybCk7XG4gICAgfVxuICAgIGdldCBwcmltYXJ5KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgc2V0IHByaW1hcnkoYm9vbCkge1xuICAgICAgICBpZiAoIWJvb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgncHJpbWFyeScsIGJvb2wudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGdldCBvdXRsaW5lKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgc2V0IG91dGxpbmUoYm9vbCkge1xuICAgICAgICBpZiAoIWJvb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnb3V0bGluZScsIGJvb2wudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGdldCBsaW5rKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2xpbmsnKTtcbiAgICB9XG4gICAgc2V0IGxpbmsoYm9vbCkge1xuICAgICAgICBpZiAoIWJvb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbGluaycsIGJvb2wudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGdldCBmdWxsV2lkdGgoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgncHJpbWFyeScpO1xuICAgIH1cbiAgICBzZXQgZnVsbFdpZHRoKGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2Z1bGwtd2lkdGgnLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgbG9hZGluZygpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBsb2FkaW5nKGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ2xvYWRpbmcnLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgaXNEaXNhYmxlZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlQnV0dG9uX2lzRGlzYWJsZWQsIFwiZlwiKTtcbiAgICB9XG4gICAgc2V0IGlzRGlzYWJsZWQodmFsdWUpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVCdXR0b25faXNEaXNhYmxlZCwgdmFsdWUsIFwiZlwiKTtcbiAgICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoJ2FyaWEtZGlzYWJsZWQnLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuX0xhdmFuZHJlQnV0dG9uX2lzRGlzYWJsZWQgPSBuZXcgV2Vha01hcCgpO1xuIiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307IiwiLy8gZXh0cmFjdGVkIGJ5IG1pbmktY3NzLWV4dHJhY3QtcGx1Z2luXG5leHBvcnQge307Il0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIk1vZHVsZSIsImNvbnN0cnVjdG9yIiwiZXZlbnRFbWl0dGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDb21wb25lbnRzIiwib24iLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwiY29tcG9uZW50Iiwib25Jbml0IiwiQWpheExvZ2luIiwiQWpheFJlZ2lzdGVyIiwiQ29va2llQmFyIiwiQ29weUNvdXBvbiIsIkN1cnRhaW4iLCJFbWFpbFZhbGlkYXRpb24iLCJGaWVsZFZhbGlkYXRpb24iLCJGb3Jnb3RQYXNzd29yZCIsIkZvcmdvdFBhc3N3b3JkVG9nZ2xlIiwiSGVhZGVyU2VhcmNoIiwiSW5mb1BvcHVwIiwiTGF6eUxvYWRlciIsIk5ld3NsZXR0ZXJTdWJzY3JpYmUiLCJQYXNzd29yZFJldmVhbCIsIlJlZGVlbVBvaW50c0ZvckNvdXBvbiIsIlNjcm9sbFRvQ29udGVudCIsIlZpZGVvTWVkaWFSZXNvbHZlciIsIkxhbmd1YWdlUG9wdXAiLCJTaWRlUGFuZWwiLCJzZXRDdXJyZW50TGlua0NsYXNzIiwiTGF2YW5kcmVCdXR0b24iLCJBcHAiLCJhcmd1bWVudHMiLCJ3cEZvcm1zU3VibWl0QnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJyZW1vdmVBdHRyaWJ1dGUiLCJzZXRBdHRyaWJ1dGUiLCJhcHBJbml0IiwiYXBwIiwibGF6eUJhY2tncm91bmRzIiwiZm9vdGVyVXNwU2xpZGVyIiwic2V0VGltZW91dCIsImxpc3QiLCJxdWVyeVNlbGVjdG9yIiwiaXRlbXMiLCJ0b3RhbFdpZHRoIiwiaXRlbSIsImNsaWVudFdpZHRoIiwic3R5bGUiLCJ3aWR0aCIsImFkZEV2ZW50TGlzdGVuZXIiLCJzbGljZSIsImNhbGwiLCJ3aW5kb3ciLCJsYXp5QmFja2dyb3VuZE9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib2JzZXJ2ZXIiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwidGFyZ2V0IiwiY2xhc3NMaXN0IiwiYWRkIiwidW5vYnNlcnZlIiwibGF6eUJhY2tncm91bmQiLCJvYnNlcnZlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJleHRlbmRzIiwiRGF0YUxheWVyIiwiZGF0YUxheWVyIiwicHVzaCIsImRhdGEiLCJlY29tbWVyY2UiLCJDb21wb25lbnQiLCJsb2FkUmVjYXB0Y2hhIiwic2l0ZWtleSIsInNlbmRBamF4UmVxdWVzdCIsInNldFZhbGlkYXRpb25NZXNzYWdlIiwiZm9ybSIsImFqYXhFbmRwb2ludCIsImxvY2F0aW9uIiwib3JpZ2luIiwiaXNWYWxpZCIsInNldEV2ZW50TGlzdGVuZXJzIiwiZmllbGRzIiwiQ3lwcmVzcyIsImluZGV4IiwibGVuZ3RoIiwiZmllbGQiLCJ2YWxpZGF0b3IiLCJtYXRjaGVzIiwiZGlzcGF0Y2hFdmVudCIsIkV2ZW50Iiwic3VibWl0QnV0dG9uIiwidHlwZSIsImV2ZW50Iiwib25TdWJtaXQiLCJfYSIsIl9iIiwicHJldmVudERlZmF1bHQiLCJ2YWxpZCIsInZhbGlkaXR5IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsInVzZXJuYW1lIiwiZ2V0IiwidG9TdHJpbmciLCJwYXNzd29yZCIsImdyZWNhcHRjaGEiLCJhY3Rpb24iLCJyZWNhcHRjaGFUb2tlbiIsInVuZGVmaW5lZCIsInJlYWR5IiwiZXhlY3V0ZSIsInRoZW4iLCJ0b2tlbiIsIm9uU3VjY2VzcyIsImJpbmQiLCJvbkZhaWx1cmUiLCJyZXMiLCJyZXNwb25zZSIsInN1Y2Nlc3MiLCJFcnJvciIsIm1ldGhvZCIsImhyZWYiLCJkYXRhc2V0IiwicmVkaXJlY3RVcmwiLCJKU09OIiwicGFyc2UiLCJtZXNzYWdlIiwibG9naW5Gb3JtcyIsImFqYXhMb2dpbiIsIkNvbmZpcm1WYWxpZGF0aW9uIiwiZW1haWxGaWVsZCIsImVtYWlsVmFsaWRhdGlvbiIsInBhc3N3b3JkRmllbGQiLCJjb25maXJtUGFzc3dvcmRGaWVsZCIsImNvbmZpcm1WYWxpZGF0aW9uIiwiX2MiLCJfZCIsImVtYWlsIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJmaXJzdF9uYW1lIiwibGFzdF9uYW1lIiwicmVnaXN0ZXJGb3JtIiwiYWpheFJlZ2lzdGVyIiwiY29uZmlybUZpZWxkIiwiZXZlbnRzIiwidmFsdWUiLCJzZXRDdXN0b21WYWxpZGl0eSIsInJlcG9ydFZhbGlkaXR5IiwiX19jbGFzc1ByaXZhdGVGaWVsZFNldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiZiIsIlR5cGVFcnJvciIsImhhcyIsInNldCIsIl9fY2xhc3NQcml2YXRlRmllbGRHZXQiLCJfQ29va2llQmFyX2luc3RhbmNlcyIsIl9Db29raWVCYXJfZWxlbWVudCIsIl9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50IiwiX0Nvb2tpZUJhcl9hY2NlcHRCdXR0b24iLCJfQ29va2llQmFyX2dldEVsZW1lbnQiLCJfQ29va2llQmFyX2FjY2VwdENvb2tpZXMiLCJnZXRDb29raWVWYWx1ZSIsInNldENvb2tpZVZhbHVlIiwiY29va2llTmFtZSIsInJlbW92ZSIsInNldEFjY2VwdENvb2tpZSIsImNvb2tpZUJhciIsIldlYWtNYXAiLCJXZWFrU2V0IiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJjb250ZW50IiwicGFyZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiX0NvcHlDb3Vwb25fYnV0dG9uIiwib25DbGljayIsImNvZGUiLCJ0ZXh0IiwiY29waWVkVGV4dCIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImlubmVyVGV4dCIsImNvcHlCdXR0b25zIiwiY29weUNvdXBvbiIsIl9DdXJ0YWluX2luc3RhbmNlcyIsIl9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciIsIl9DdXJ0YWluX2hhbmRsZVRyYW5zaXRpb24iLCJmb2xkQnV0dG9uIiwib25seU9uTW9iaWxlIiwiZGVmYXVsdEhlaWdodCIsImdldENvbXB1dGVkU3R5bGUiLCJtYXhIZWlnaHQiLCJlIiwiaW5uZXJXaWR0aCIsImNvbnRhaW5zIiwic2Nyb2xsSGVpZ2h0IiwicmVhZExlc3MiLCJyZWFkTW9yZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVzIiwidG9nZ2xlIiwiY3VydGFpblRvZ2dsZSIsImN1cnRhaW4iLCJyZW1vdmVQcm9wZXJ0eSIsInJlbW92ZUV4aXN0aW5nVmFsaWRhdGlvbk1lc3NhZ2VzIiwiZW1haWxJbnB1dCIsImNsb3Nlc3QiLCJibHVyVGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZUJsdXJFdmVudCIsInNlY3VyaXR5IiwiZXJyb3IiLCJyZWdpc3RlckVtYWlsSW5wdXQiLCJhbmNob3IiLCJwYXNzd29yZEZvcmdldEFuY2hvciIsImZpZWxkVmFsaWRhdGlvbiIsInVzZXJfbG9naW4iLCJwYXNzd29yZEZvcmdldExpbmtzIiwibGluayIsImZvcmdvdFBhc3N3b3JkIiwicGFzc3dvcmRGb3JnZXRXcmFwcGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dpbldyYXBwZXIiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJkb2N1bWVudENsaWNrSGFuZGxlciIsImV2ZW50VGFyZ2V0Iiwid2l0aGluSGVhZGVyIiwiYm9keSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInNlYXJjaElucHV0RWxlbWVudCIsImZvY3VzIiwiaGVhZGVyU2VhcmNoIiwiaW5zdGFuY2UiLCJzaG93VGlwcHkiLCJ0aXBweSIsInRoZW1lIiwiYWxsb3dIVE1MIiwiaGlkZU9uQ2xpY2siLCJzaG93T25DcmVhdGUiLCJpbnRlcmFjdGl2ZSIsIm9uSGlkZGVuIiwiaSIsImRlc3Ryb3kiLCJzaG93IiwiaGlkZVdpdGhJbnRlcmFjdGl2aXR5IiwidGlwcHlFbGVtZW50cyIsInRpcHB5RWxlbWVudCIsImluZm9Qb3B1cCIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHMiLCJvbkludGVyc2VjdGlvbk9ic2VydmVyIiwibGF6eWxvYWQiLCJPYnNlcnZlckNsYXNzIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwibGF6eUltYWdlT2JzZXJ2ZXIiLCJIVE1MUGljdHVyZUVsZW1lbnQiLCJsYXp5IiwiZGlzY29ubmVjdCIsImxhenlJbWFnZSIsImVsIiwibWFuYWdlQ3NzQ2xhc3NlcyIsImltYWdlIiwibG9hZGluZ1NwaW5uZXIiLCJIVE1MSW1hZ2VFbGVtZW50IiwiSFRNTFNvdXJjZUVsZW1lbnQiLCJzaXplcyIsInNyY3NldCIsInNyYyIsImxhenlsb2FkRWxlbWVudHMiLCJjb21wYW55TmFtZSIsInJlbW92ZUVycm9yVGV4dCIsImFwcGVuZFN1Y2Nlc3NUZXh0IiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiZXZlbnRMYWJlbCIsImlkIiwiYXBwZW5kRXJyb3JUZXh0IiwiZm9ybXMiLCJuZXdzbGV0dGVyU3Vic2NyaWJlIiwicGFzc3dvcmRJbnB1dCIsImNyZWF0ZVJldmVhbEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0YWJJbmRleCIsInBhc3N3b3JkUm93cyIsInBhc3N3b3JkUm93IiwicGFzc3dvcmRSZXZlYWwiLCJfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiIsImVuZHBvaW50cyIsImFqYXgiLCJyZWRlZW1CdXR0b25zIiwicmVkZWVtUG9pbnRzRm9yQ291cG9uIiwiX1Njcm9sbFRvQ29udGVudF9lbGVtZW50IiwiX1Njcm9sbFRvQ29udGVudF90YXJnZXQiLCJzY3JvbGxUb1RhcmdldCIsImhlYWRlck9mZnNldCIsInRhcmdldElkIiwic2Nyb2xsVG8iLCJfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcyIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcyIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfdGltZW91dCIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplIiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl9zaG93U291cmNlIiwibWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIiLCJtcSIsIm1hdGNoTWVkaWEiLCJtcTIiLCJzb3VyY2UiLCJvcmllbnRhdGlvbiIsIm1heFdpZHRoIiwiTnVtYmVyIiwiY3VycmVudE9yaWVudGF0aW9uIiwiY3VycmVudFdpZHRoIiwiZGF0YVNyYyIsImNhbGxiYWNrIiwiZXZlbnRCdWJibGluZyIsImFkZExpc3RlbmVyIiwibWF0Y2hNZWRpYVJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImRpYWxvZ1BvbHlmaWxsIiwiZGlzYWJsZUJvZHlTY3JvbGwiLCJlbmFibGVCb2R5U2Nyb2xsIiwidG9DYW1lbENhc2UiLCJEaWFsb2ciLCJfaXNPcGVuIiwiX3RyYW5zaXRpb25UaW1lIiwiaXNPcGVuIiwiY2FtZWxEYXRhQXR0cmlidXRlIiwiZGF0YUF0dHJpYnV0ZSIsInJlcGxhY2UiLCJ0cmFuc2l0aW9uVGltZSIsImdldFRyYW5zaXRpb25UaW1lIiwicG9seWZpbGxEaWFsb2ciLCJvcGVuIiwiY2xvc2VCdXR0b25zIiwiY2xvc2UiLCJvdXRzaWRlQ2xpY2siLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpY2tlZEluRGlhbG9nIiwidG9wIiwiY2xpZW50WSIsImhlaWdodCIsImxlZnQiLCJjbGllbnRYIiwic2hvd01vZGFsIiwiY2xhc3NlcyIsImNsb3NlZCIsInN0eWxlcyIsInRyYW5zaXRpb25EdXJhdGlvbiIsImR1cmF0aW9uIiwiaW5kZXhPZiIsInBhcnNlRmxvYXQiLCJyZWdpc3RlckRpYWxvZyIsIlBvcHVwIiwicGF0aCIsInBhdGhuYW1lIiwicHJlZmVycmVkTGFuZ3VhZ2UiLCJsYW5ndWFnZSIsInN1YnN0cmluZyIsInBvcHVwIiwib3BlblBvcHVwIiwiZG9tYWluRHJvcGRvd24iLCJzdGF5RG9tYWluQnV0dG9uIiwib3RoZXJEb21haW5CdXR0b25zIiwic3VibWl0RG9tYWluQnV0dG9uIiwiQ3VzdG9tRXZlbnQiLCJvdGhlckRvbWFpbkJ1dHRvbiIsImNvbnRhaW5lcnMiLCJjb250YWluZXIiLCJzZWxlY3RlZFZhbHVlIiwibWFwcGluZyIsInVybCIsIlVSTCIsInBvcHVwSUQiLCJ0ZW1wbGF0ZSIsIkhUTUxBbmNob3JFbGVtZW50IiwiZW1pdCIsInBvcHVwSW5zdGFuY2UiLCJvcGVuRXZlbnQiLCJwb3B1cExpbmtzIiwiaGFuZGxlQ3JlYXRpb25FdmVudCIsInJpZ2h0Iiwib3BlblNpZGVQYW5lbCIsInBhbmVsSUQiLCJwYW5lbCIsInNpZGVQYW5lbEluc3RhbmNlIiwidG9nZ2xlRXZlbnQiLCJwYW5lbExpbmtzIiwiYm9keUVsZW1lbnQiLCJzY3JvbGxQb3NpdGlvbiIsInBhZ2VZT2Zmc2V0Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEJlaGF2aW9yIiwibmFtZSIsImNvb2tpZSIsInNwbGl0IiwiZmluZCIsInJvdyIsInN0YXJ0c1dpdGgiLCJjb29raWVPcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwidXBkYXRlZENvb2tpZSIsIm9wdGlvbktleSIsIm9wdGlvblZhbHVlIiwiaXNEYXRlVmFsaWQiLCJkYXRlIiwiaXNOYU4iLCJnZXRUaW1lIiwiZm9ybWF0RGF0ZSIsImRheSIsImZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJudW1iZXIiLCJTdHJpbmciLCJwYWRTdGFydCIsImdldEZ1bGxNb250aE5hbWUiLCJsb2NhbGUiLCJ0b0xvY2FsZVN0cmluZyIsInBhcnNlU3RyaW5nQXNIdG1sIiwiZG9tUGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VkIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2V0QWJzb2x1dGVIZWlnaHQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJNYXRoIiwiY2VpbCIsIm9mZnNldEhlaWdodCIsInBhdGhOYW1lIiwiZm9ybWF0dGVkUGF0aE5hbWUiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJmdWxsVXJsIiwiZm9ybWF0dGVkVXJsIiwiYW5jaG9ycyIsInN0ciIsImVuZHNXaXRoIiwibG9hZGVkIiwibG9vcFRocm91Z2hFbGVtZW50cyIsImluc2VydFJlY2FwdGNoYVNjcmlwdCIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNjcmlwdCIsImFkZEV2ZW50IiwiZXZ0IiwiZGVmYXVsdE9mZnNldCIsImJvZHlUb3BQb3NpdGlvbiIsImVsZW1lbnRQb3NpdGlvbiIsIm9mZnNldCIsImhlYWRlciIsImNsaWVudEhlaWdodCIsIm9mZnNldFBvc2l0aW9uIiwiYmVoYXZpb3IiLCJtYXRjaCIsImNociIsInRvVXBwZXJDYXNlIiwidG9UaXRsZUNhc2UiLCJ0eHQiLCJjaGFyQXQiLCJzdWJzdHIiLCJ0b0xvd2VyQ2FzZSIsImZvcm1Sb3ciLCJmb3JtUm93UGFyZW50IiwidmFsaWRhdGlvbkVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImluc2VydEJlZm9yZSIsImdyYW5kcGFyZW50IiwiZXhpc3RpbmdWYWxpZGF0aW9ucyIsInYiLCJfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzIiwiX0N1cnRhaW5FbGVtZW50X3N1bW1hcnkiLCJfQ3VydGFpbkVsZW1lbnRfY29udGVudCIsIl9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmciLCJfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uIiwiX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrIiwiX0N1cnRhaW5FbGVtZW50X29wZW4iLCJfQ3VydGFpbkVsZW1lbnRfZXhwYW5kIiwiX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoIiwiX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzIiwiX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMiLCJfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMiLCJDdXJ0YWluRWxlbWVudCIsIkhUTUxEZXRhaWxzRWxlbWVudCIsImhhc0F0dHJpYnV0ZSIsImNvbm5lY3RlZENhbGxiYWNrIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJzdGFydEhlaWdodCIsImVuZEhlaWdodCIsImNhbmNlbCIsImFuaW1hdGUiLCJlYXNpbmciLCJvbmZpbmlzaCIsIm9uY2FuY2VsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiQWNjb3JkaW9uRWxlbWVudCIsIkhUTUxFbGVtZW50Iiwib3RoZXJDdXJ0YWlucyIsImZpbHRlciIsImMiLCJvdGhlckN1cnRhaW4iLCJjdXJ0YWluRWxlbWVudCIsIl9CaXJ0aGRheUZvcm1faW5zdGFuY2VzIiwiX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24iLCJfQmlydGhkYXlGb3JtX2RheUZpZWxkIiwiX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkIiwiX0JpcnRoZGF5Rm9ybV9nZXREYXlWYWx1ZXMiLCJfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzIiwiX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCIsIl9CaXJ0aGRheUZvcm1fb25TdWNjZXNzIiwiX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmUiLCJCaXJ0aGRheUZvcm0iLCJIVE1MRm9ybUVsZW1lbnQiLCJvcHRpb25WYWx1ZXMiLCJyZXR1cm5WYWx1ZSIsIm51bSIsIkRhdGUiLCJtb250aE5hbWUiLCJ5ZWFyIiwiYmxvY2siLCJjb21wbGV0ZWQiLCJfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcyIsIl9DYXJvdXNlbEVsZW1lbnRfaXRlbXMiLCJfQ2Fyb3VzZWxFbGVtZW50X2xpc3QiLCJfQ2Fyb3VzZWxFbGVtZW50X3ByZXZCdXR0b24iLCJfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24iLCJfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQiLCJfQ2Fyb3VzZWxFbGVtZW50X2NvdW50ZXIiLCJfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsIiwiX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50IiwiX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSIsIl9DYXJvdXNlbEVsZW1lbnRfZ2V0VHJhbnNsYXRlWCIsIl9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoIiwiQ2Fyb3VzZWxFbGVtZW50IiwiYWN0aXZlIiwiY29tcG9uZW50Q2hlY2siLCJzZXR1cCIsImRlaW5pdGlhbGl6ZSIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIml0ZW1zU2hvd24iLCJpbmNyZW1lbnQiLCJ0cmFuc2Zvcm0iLCJjb3VudCIsIm1vbnRoV2lkdGgiLCJpdGVtV2lkdGgiLCJncmlkR2FwIiwicGFyc2VJbnQiLCJjb2x1bW5HYXAiLCJfTGFuZ3VhZ2VTd2l0Y2hlcl9pbnN0YW5jZXMiLCJfTGFuZ3VhZ2VTd2l0Y2hlcl9nZXRWYWx1ZSIsIl9MYW5ndWFnZVN3aXRjaGVyX29uQ2hhbmdlIiwiTGF2YW5kcmVTZWxlY3QiLCJMYW5ndWFnZVN3aXRjaGVyIiwianNvbiIsImljb24iLCJvdXRlckhUTUwiLCJ1cGRhdGUiLCJfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzIiwiX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkIiwiX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwiLCJfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCIsIl9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMiLCJfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZSIsIl9MYXZhbmRyZVNlbGVjdF9uYW1lIiwiX0xhdmFuZHJlU2VsZWN0X3BsYWNlaG9sZGVyIiwiX0xhdmFuZHJlU2VsZWN0X2ljb24iLCJfTGF2YW5kcmVTZWxlY3RfaWQiLCJfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIiLCJfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0T3B0aW9uIiwiX0xhdmFuZHJlU2VsZWN0X2ZpbHRlciIsIl9MYXZhbmRyZVNlbGVjdF9zaG93RHJvcGRvd24iLCJfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duIiwicGxhY2Vob2xkZXIiLCJnZXRBdHRyaWJ1dGUiLCJhdXRvY2FwaXRhbGl6ZSIsImF1dG9jb21wbGV0ZSIsImh0bWxGb3IiLCJoaWRkZW4iLCJhcnIiLCJzb3J0IiwiYSIsImIiLCJrZXkiLCJvcHRpb24iLCJzcGFuIiwidmFsdWUyIiwiZmlyc3RPcHRpb24iLCJkZXRhaWwiLCJfTGF2YW5kcmVUb2dnbGVfaW5zdGFuY2VzIiwiX0xhdmFuZHJlVG9nZ2xlX2VsZW1lbnRzIiwiX0xhdmFuZHJlVG9nZ2xlX3RvZ2dsZXMiLCJfTGF2YW5kcmVUb2dnbGVfY2xpY2tIYW5kbGVyIiwiTGF2YW5kcmVUb2dnbGUiLCJfU2lnbnVwQmxvY2tfaW5zdGFuY2VzIiwiX1NpZ251cEJsb2NrX3RlbXBsYXRlIiwiX1NpZ251cEJsb2NrX292ZXJsYXkiLCJfU2lnbnVwQmxvY2tfaHJlZiIsIl9TaWdudXBCbG9ja19wb2ludHMiLCJfU2lnbnVwQmxvY2tfdHlwZSIsIl9TaWdudXBCbG9ja19jb21wbGV0ZWQiLCJfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeSIsIl9TaWdudXBCbG9ja19tcSIsIl9TaWdudXBCbG9ja19pc01vYmlsZSIsIl9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlIiwiX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlIiwiX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyIiwiX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyIiwiX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciIsIl9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMiLCJfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGUiLCJTaWdudXBCbG9jayIsIkhUTUxMSUVsZW1lbnQiLCJwb2ludHMiLCJnZXRQcm9wZXJ0eVZhbHVlIiwic3RvcFByb3BhZ2F0aW9uIiwicG9vbCIsInRpdGxlcyIsInRpdGxlIiwiY2xvc2VPdmVybGF5QnV0dG9uIiwidHlwZVRlbXBsYXRlIiwiX0xhdmFuZHJlQnV0dG9uX2lzRGlzYWJsZWQiLCJIVE1MQnV0dG9uRWxlbWVudCIsImNsaWNrSGFuZGxlciIsImxhYmVsIiwic2l6ZSIsInByaW1hcnkiLCJib29sIiwib3V0bGluZSIsImZ1bGxXaWR0aCIsImxvYWRpbmciLCJpc0Rpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==