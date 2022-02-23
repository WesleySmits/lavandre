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
/* harmony import */ var _web_components_LavandreSelect__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./web-components/LavandreSelect */ "./assets/js/web-components/LavandreSelect.ts");
/* harmony import */ var _web_components_SignupBlock__WEBPACK_IMPORTED_MODULE_29__ = __webpack_require__(/*! ./web-components/SignupBlock */ "./assets/js/web-components/SignupBlock.ts");






























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
/* eslint-disable no-console */



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

    console.log(text, copiedText);

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
    console.log('success', response);
  }

  onFailure(res) {
    const response = JSON.parse(res);
    console.log('failure', response);
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
    console.log('success', response);
  }

  onFailure(res) {
    const response = JSON.parse(res);
    console.log('failure', response);
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
/* eslint-disable no-console */


class LanguagePopup extends _Popup__WEBPACK_IMPORTED_MODULE_1__["default"] {
  static onInit(selector = document) {
    if (selector !== document) {
      return;
    } // if (getCookieValue('language-popup-seen')) {
    //     return;
    // }


    const path = window.location.pathname;

    if (path === '/nl/' || path === '/fr/' || path === '/de/') {
      console.log('path wrong');
      return;
    } // const preferredLanguage = window.navigator.language ?? 'en';
    // const language = preferredLanguage.substring(0, 2);
    // if (language === 'en') {
    //     console.log('language wrong');
    //     return;
    // }


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

      if (domainDropdown) {
        const json = domainDropdown.dataset.json;

        if (!json) {
          return;
        }

        domainDropdown.id = 'domain-dropdown-field';
        const data = JSON.parse(json) || [];
        domainDropdown.optionValues = data;
      }

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
    __classPrivateFieldGet(this, _CurtainElement_summary, "f").addEventListener('click', __classPrivateFieldGet(this, _CurtainElement_handleClick, "f"), {
      capture: true,
      passive: false
    });
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

var _LavandreSelect_instances, _LavandreSelect_searchField, _LavandreSelect_searchFieldLabel, _LavandreSelect_dropdownField, _LavandreSelect_optionValues, _LavandreSelect_selectedValue, _LavandreSelect_name, _LavandreSelect_placeholder, _LavandreSelect_id, _LavandreSelect_outsideClickListener, _LavandreSelect_update, _LavandreSelect_selectOption, _LavandreSelect_filter, _LavandreSelect_showDropdown, _LavandreSelect_hideDropdown;


class LavandreSelect extends HTMLElement {
  constructor(id = '', placeholder = '') {
    super();

    _LavandreSelect_instances.add(this);

    _LavandreSelect_searchField.set(this, void 0);

    _LavandreSelect_searchFieldLabel.set(this, void 0);

    _LavandreSelect_dropdownField.set(this, void 0);

    _LavandreSelect_optionValues.set(this, {});

    _LavandreSelect_selectedValue.set(this, '');

    _LavandreSelect_name.set(this, this.getAttribute('name') || '');

    _LavandreSelect_placeholder.set(this, '');

    _LavandreSelect_id.set(this, '');

    _LavandreSelect_outsideClickListener.set(this, event => {
      const target = event.target;

      if (!target.closest) {
        __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_hideDropdown).call(this);

        return;
      }

      const closest = target.closest('lavandre-select');

      if (!target || closest === null || closest !== this) {
        __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_hideDropdown).call(this);
      }
    });

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
    __classPrivateFieldSet(this, _LavandreSelect_optionValues, value, "f");

    __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_update).call(this);
  }

  connectedCallback() {
    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").addEventListener('input', __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_filter).bind(this));

    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").addEventListener('focus', __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_showDropdown).bind(this));
  }

  disconnectedCallback() {
    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").removeEventListener('input', __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_filter).bind(this));

    __classPrivateFieldGet(this, _LavandreSelect_searchField, "f").removeEventListener('focus', __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_showDropdown).bind(this));
  }

}
_LavandreSelect_searchField = new WeakMap(), _LavandreSelect_searchFieldLabel = new WeakMap(), _LavandreSelect_dropdownField = new WeakMap(), _LavandreSelect_optionValues = new WeakMap(), _LavandreSelect_selectedValue = new WeakMap(), _LavandreSelect_name = new WeakMap(), _LavandreSelect_placeholder = new WeakMap(), _LavandreSelect_id = new WeakMap(), _LavandreSelect_outsideClickListener = new WeakMap(), _LavandreSelect_instances = new WeakSet(), _LavandreSelect_update = function _LavandreSelect_update() {
  Object.keys(__classPrivateFieldGet(this, _LavandreSelect_optionValues, "f")).forEach(key => {
    const option = document.createElement('li');
    option.addEventListener('click', __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_selectOption).bind(this));
    option.classList.add('lavandre-select__dropdown__item');
    const value = (0,_util_dateHelper__WEBPACK_IMPORTED_MODULE_0__.formatNumberWithLeadingZero)(__classPrivateFieldGet(this, _LavandreSelect_optionValues, "f")[key]).toString();
    option.dataset.value = value;
    option.innerText = key.replace(/^0+/, '');

    __classPrivateFieldGet(this, _LavandreSelect_dropdownField, "f").appendChild(option);
  });
  const firstOption = this.querySelector('.lavandre-select__dropdown__item');

  if (!firstOption) {
    return;
  }

  firstOption.dispatchEvent(new Event('click'));
}, _LavandreSelect_selectOption = function _LavandreSelect_selectOption(event) {
  const target = event.target;
  const value = target.dataset.value;

  if (value === undefined) {
    return;
  }

  this.selectedValue = value;

  __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_hideDropdown).call(this);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Q2hCLFFBQUksS0FBSzdYLElBQVQsRUFBZTtBQUNYLFdBQUszRSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixLQUFLK2pCLFlBQXBDO0FBQ0g7QUFDSjs7QUFDRHBILEVBQUFBLG9CQUFvQixHQUFHO0FBQ25CLFFBQUksS0FBS2hZLElBQVQsRUFBZTtBQUNYLFdBQUttRixtQkFBTCxDQUF5QixPQUF6QixFQUFrQyxLQUFLaWEsWUFBdkM7QUFDSDtBQUNKOztBQTVGeUQ7QUE4RjlERiwwQkFBMEIsR0FBRyxJQUFJamMsT0FBSixFQUE3Qjs7Ozs7Ozs7Ozs7QUMzR0E7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvTW9kdWxlLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2FwcC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21tb24vRGF0YUxheWVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheExvZ2luLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheFJlZ2lzdGVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29uZmlybVZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9Db29raWVCYXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9Db3B5Q291cG9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ3VydGFpbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VtYWlsVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmRUb2dnbGUudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9IZWFkZXJTZWFyY2gudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9JbmZvUG9wdXAudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9MYXp5TG9hZGVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTmV3c2xldHRlclN1YnNjcmliZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Bhc3N3b3JkUmV2ZWFsLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVkZWVtUG9pbnRzRm9yQ291cG9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2Nyb2xsVG9Db250ZW50LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9NZWRpYVJlc29sdmVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3BvbHlmaWxscy9tYXRjaE1lZGlhLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9MYW5ndWFnZVBvcHVwLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3VpL1BvcHVwLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3VpL1NpZGVQYW5lbC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2JvZHkudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9jb29raWVzLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvZGF0ZUhlbHBlci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2RvbS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2VuZHBvaW50cy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2xpbmtzLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvbG9hZFJlY2FwdGNoYS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL3Njcm9sbFRvVGFyZ2V0LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvc3RyaW5nLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvdmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy93ZWItY29tcG9uZW50cy9BY2NvcmRpb25FbGVtZW50LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0JpcnRoZGF5Rm9ybS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy93ZWItY29tcG9uZW50cy9DYXJvdXNlbEVsZW1lbnQudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvTGF2YW5kcmVTZWxlY3QudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvU2lnbnVwQmxvY2sudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvYnV0dG9uL0xhdmFuZHJlQnV0dG9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9hcHAucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fYWNjb3JkaW9uLnBjc3MiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX2Nvb2tpZS1iYXIucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fY3VydGFpbi5wY3NzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19pbmZvUG9wdXAucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fcG9wdXAucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fc2lkZVBhbmVsLnBjc3MiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvYnV0dG9uL3N0eWxlLnBjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgJy4vY2FydCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5vbigndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0aWFsaXplQ29tcG9uZW50cyhzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbXBvbmVudC5vbkluaXQoc2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJ0B1bmdhcC9jdXN0b20tZWxlbWVudHMnO1xuaW1wb3J0ICcuLi9jc3MvYXBwLnBjc3MnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IEFqYXhMb2dpbiBmcm9tICcuL2NvbXBvbmVudHMvQWpheExvZ2luJztcbmltcG9ydCBBamF4UmVnaXN0ZXIgZnJvbSAnLi9jb21wb25lbnRzL0FqYXhSZWdpc3Rlcic7XG5pbXBvcnQgQ29va2llQmFyIGZyb20gJy4vY29tcG9uZW50cy9Db29raWVCYXInO1xuaW1wb3J0IENvcHlDb3Vwb24gZnJvbSAnLi9jb21wb25lbnRzL0NvcHlDb3Vwb24nO1xuaW1wb3J0IEN1cnRhaW4gZnJvbSAnLi9jb21wb25lbnRzL0N1cnRhaW4nO1xuaW1wb3J0IEVtYWlsVmFsaWRhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRW1haWxWYWxpZGF0aW9uJztcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL0ZpZWxkVmFsaWRhdGlvbic7XG5pbXBvcnQgRm9yZ290UGFzc3dvcmQgZnJvbSAnLi9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkJztcbmltcG9ydCBGb3Jnb3RQYXNzd29yZFRvZ2dsZSBmcm9tICcuL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmRUb2dnbGUnO1xuaW1wb3J0IEhlYWRlclNlYXJjaCBmcm9tICcuL2NvbXBvbmVudHMvSGVhZGVyU2VhcmNoJztcbmltcG9ydCBJbmZvUG9wdXAgZnJvbSAnLi9jb21wb25lbnRzL0luZm9Qb3B1cCc7XG5pbXBvcnQgTGF6eUxvYWRlciBmcm9tICcuL2NvbXBvbmVudHMvTGF6eUxvYWRlcic7XG5pbXBvcnQgTmV3c2xldHRlclN1YnNjcmliZSBmcm9tICcuL2NvbXBvbmVudHMvTmV3c2xldHRlclN1YnNjcmliZSc7XG5pbXBvcnQgUGFzc3dvcmRSZXZlYWwgZnJvbSAnLi9jb21wb25lbnRzL1Bhc3N3b3JkUmV2ZWFsJztcbmltcG9ydCBSZWRlZW1Qb2ludHNGb3JDb3Vwb24gZnJvbSAnLi9jb21wb25lbnRzL1JlZGVlbVBvaW50c0ZvckNvdXBvbic7XG5pbXBvcnQgU2Nyb2xsVG9Db250ZW50IGZyb20gJy4vY29tcG9uZW50cy9TY3JvbGxUb0NvbnRlbnQnO1xuaW1wb3J0IFZpZGVvTWVkaWFSZXNvbHZlciBmcm9tICcuL2NvbXBvbmVudHMvVmlkZW9NZWRpYVJlc29sdmVyJztcbmltcG9ydCBNb2R1bGUgZnJvbSAnLi9Nb2R1bGUnO1xuaW1wb3J0IExhbmd1YWdlUG9wdXAgZnJvbSAnLi91aS9MYW5ndWFnZVBvcHVwJztcbmltcG9ydCBTaWRlUGFuZWwgZnJvbSAnLi91aS9TaWRlUGFuZWwnO1xuaW1wb3J0IHsgc2V0Q3VycmVudExpbmtDbGFzcyB9IGZyb20gJy4vdXRpbC9saW5rcyc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvQWNjb3JkaW9uRWxlbWVudCc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvQmlydGhkYXlGb3JtJztcbmltcG9ydCBMYXZhbmRyZUJ1dHRvbiBmcm9tICcuL3dlYi1jb21wb25lbnRzL2J1dHRvbi9MYXZhbmRyZUJ1dHRvbic7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvQ2Fyb3VzZWxFbGVtZW50JztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9MYXZhbmRyZVNlbGVjdCc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvU2lnbnVwQmxvY2snO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIENvb2tpZUJhcixcbiAgICAgICAgICAgIFNpZGVQYW5lbCxcbiAgICAgICAgICAgIEN1cnRhaW4sXG4gICAgICAgICAgICBJbmZvUG9wdXAsXG4gICAgICAgICAgICBQYXNzd29yZFJldmVhbCxcbiAgICAgICAgICAgIEVtYWlsVmFsaWRhdGlvbixcbiAgICAgICAgICAgIE5ld3NsZXR0ZXJTdWJzY3JpYmUsXG4gICAgICAgICAgICBGb3Jnb3RQYXNzd29yZCxcbiAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkVG9nZ2xlLFxuICAgICAgICAgICAgQWpheExvZ2luLFxuICAgICAgICAgICAgQWpheFJlZ2lzdGVyLFxuICAgICAgICAgICAgRmllbGRWYWxpZGF0aW9uLFxuICAgICAgICAgICAgSGVhZGVyU2VhcmNoLFxuICAgICAgICAgICAgTGF6eUxvYWRlcixcbiAgICAgICAgICAgIFNjcm9sbFRvQ29udGVudCxcbiAgICAgICAgICAgIFZpZGVvTWVkaWFSZXNvbHZlcixcbiAgICAgICAgICAgIFJlZGVlbVBvaW50c0ZvckNvdXBvbixcbiAgICAgICAgICAgIENvcHlDb3Vwb24sXG4gICAgICAgICAgICBMYW5ndWFnZVBvcHVwXG4gICAgICAgIF07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgc2V0Q3VycmVudExpbmtDbGFzcygpO1xuICAgICAgICBjb25zdCB3cEZvcm1zU3VibWl0QnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJ3cGZvcm1zW3N1Ym1pdF1cIl0nKSk7XG4gICAgICAgIHdwRm9ybXNTdWJtaXRCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLnJlbW92ZUF0dHJpYnV0ZSgnY2xhc3MnKTtcbiAgICAgICAgICAgIGJ1dHRvbi5zZXRBdHRyaWJ1dGUoJ2lzJywgJ2xhdmFuZHJlLWJ1dHRvbicpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnc2l6ZScsICdsYXJnZScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnZnVsbC13aWR0aCcsICdsYXJnZScpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnb3V0bGluZScsICd0cnVlJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbihmdW5jdGlvbiBhcHBJbml0KCkge1xuICAgIGNvbnN0IGFwcCA9IG5ldyBBcHAoKTtcbiAgICBhcHAuaW5pdGlhbGl6ZSgpO1xuICAgIGxhenlCYWNrZ3JvdW5kcygpO1xuICAgIGZvb3RlclVzcFNsaWRlcigpO1xufSkoKTtcbmZ1bmN0aW9uIGZvb3RlclVzcFNsaWRlcigpIHtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgY29uc3QgbGlzdCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy51c3Atc2xpZGVyJyk7XG4gICAgICAgIGlmICghbGlzdCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGl0ZW1zID0gQXJyYXkuZnJvbShsaXN0LnF1ZXJ5U2VsZWN0b3JBbGwoJy51c3Atc2xpZGVyX19pdGVtJykpO1xuICAgICAgICBsZXQgdG90YWxXaWR0aCA9IDA7XG4gICAgICAgIGl0ZW1zLmZvckVhY2goKGl0ZW0pID0+IHtcbiAgICAgICAgICAgIHRvdGFsV2lkdGggKz0gaXRlbS5jbGllbnRXaWR0aDtcbiAgICAgICAgfSk7XG4gICAgICAgIGxpc3Quc3R5bGUud2lkdGggPSBgJHt0b3RhbFdpZHRofXB4YDtcbiAgICB9LCAzMDApO1xufVxuZnVuY3Rpb24gbGF6eUJhY2tncm91bmRzKCkge1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ0RPTUNvbnRlbnRMb2FkZWQnLCAoKSA9PiB7XG4gICAgICAgIGNvbnN0IGxhenlCYWNrZ3JvdW5kcyA9IFtdLnNsaWNlLmNhbGwoZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLmxhenktYmFja2dyb3VuZCcpKTtcbiAgICAgICAgaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgICAgICAgICBjb25zdCBsYXp5QmFja2dyb3VuZE9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBlbnRyeS50YXJnZXQuY2xhc3NMaXN0LmFkZCgndmlzaWJsZScpO1xuICAgICAgICAgICAgICAgICAgICAgICAgbGF6eUJhY2tncm91bmRPYnNlcnZlci51bm9ic2VydmUoZW50cnkudGFyZ2V0KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBsYXp5QmFja2dyb3VuZHMuZm9yRWFjaCgobGF6eUJhY2tncm91bmQpID0+IHtcbiAgICAgICAgICAgICAgICBsYXp5QmFja2dyb3VuZE9ic2VydmVyLm9ic2VydmUobGF6eUJhY2tncm91bmQpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9KTtcbn1cbmlmIChMYXZhbmRyZUJ1dHRvbikge1xuICAgIHdpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xhdmFuZHJlLWJ1dHRvbicsIExhdmFuZHJlQnV0dG9uLCB7IGV4dGVuZHM6ICdidXR0b24nIH0pO1xufVxuIiwiY2xhc3MgRGF0YUxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyID8gd2luZG93LmRhdGFMYXllciA6IFtdO1xuICAgIH1cbiAgICBwdXNoKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaCh7IGVjb21tZXJjZTogbnVsbCB9KTsgLy8gQ2xlYXIgdGhlIHByZXZpb3VzIGVjb21tZXJjZSBvYmplY3QuXG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRGF0YUxheWVyIH07XG5leHBvcnQgZGVmYXVsdCBuZXcgRGF0YUxheWVyKCk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IERhdGFMYXllciBmcm9tICcuLi9jb21tb24vRGF0YUxheWVyJztcbmltcG9ydCB7IGxvYWRSZWNhcHRjaGEsIHNpdGVrZXkgfSBmcm9tICcuLi91dGlsL2xvYWRSZWNhcHRjaGEnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgeyBzZXRWYWxpZGF0aW9uTWVzc2FnZSB9IGZyb20gJy4uL3V0aWwvdmFsaWRhdGlvbic7XG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4vRmllbGRWYWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgICAgICAvLyBMb2FkIHJlY2FwdGNoYVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICghd2luZG93LkN5cHJlc3MpIHtcbiAgICAgICAgICAgIGxvYWRSZWNhcHRjaGEoZmllbGRzKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZpZWxkVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQubWF0Y2hlcygnOi13ZWJraXQtYXV0b2ZpbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIHZhbGlkYXRvci5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgICAgIGlmIChzdWJtaXRCdXR0b24gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU3VibWl0KGV2ZW50LCBmaWVsZHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3VibWl0QnV0dG9uID09PSBudWxsIHx8IHN1Ym1pdEJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU3VibWl0KGV2ZW50LCBmaWVsZHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25TdWJtaXQoZXZlbnQsIGZpZWxkcykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIHZhbGlkID0gZmllbGQudmFsaWRpdHkudmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgndXNlcm5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9ICgoX2IgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgZ3JlY2FwdGNoYSB9ID0gd2luZG93O1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4bG9naW4nLFxuICAgICAgICAgICAgcmVjYXB0Y2hhVG9rZW46ICcnLFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJidXR0b25cIl1bbmFtZT1cImxvZ2luXCJdJykgfHxcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXdpbmRvdy5DeXByZXNzKSB7XG4gICAgICAgICAgICBncmVjYXB0Y2hhLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBncmVjYXB0Y2hhLmV4ZWN1dGUoc2l0ZWtleSwgeyBhY3Rpb246ICdBamF4TG9naW4nIH0pLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmVjYXB0Y2hhVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwiYnV0dG9uXCJdW25hbWU9XCJsb2dpblwiXScpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIGlzIHdyb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiAnbG9naW4nLFxuICAgICAgICAgICAgbWV0aG9kOiAnQWpheExvZ2luJ1xuICAgICAgICB9O1xuICAgICAgICBEYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZm9ybS5kYXRhc2V0LnJlZGlyZWN0VXJsIHx8ICcvbXktYWNjb3VudC8nO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfVxuICAgIG9uRmFpbHVyZShyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZXNwb25zZS5kYXRhIHx8XG4gICAgICAgICAgICAnVGhpcyBjb21iaW5hdGlvbiBvZiBlbWFpbCBhbmQgcGFzc3dvcmQgaXMgbm90IGtub3duIHRvIHVzLiBQbGVhc2UgdHJ5IGFnYWluIG9yIHJlcXVlc3QgYSBuZXcgcGFzc3dvcmQuJztcbiAgICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UobWVzc2FnZSwgdGhpcy5mb3JtKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvZ2luRm9ybXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJyNhamF4LWxvZ2luLWZvcm0nKSk7XG4gICAgICAgIGlmIChsb2dpbkZvcm1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2luRm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWpheExvZ2luID0gbmV3IEFqYXhMb2dpbihmb3JtKTtcbiAgICAgICAgICAgIGFqYXhMb2dpbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gJy4uL2NvbW1vbi9EYXRhTGF5ZXInO1xuaW1wb3J0IHsgbG9hZFJlY2FwdGNoYSwgc2l0ZWtleSB9IGZyb20gJy4uL3V0aWwvbG9hZFJlY2FwdGNoYSc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCBDb25maXJtVmFsaWRhdGlvbiBmcm9tICcuL0NvbmZpcm1WYWxpZGF0aW9uJztcbmltcG9ydCBFbWFpbFZhbGlkYXRpb24gZnJvbSAnLi9FbWFpbFZhbGlkYXRpb24nO1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuL0ZpZWxkVmFsaWRhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4UmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBlbWFpbEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICAgICAgICBpZiAoZW1haWxGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZW1haWxWYWxpZGF0aW9uID0gbmV3IEVtYWlsVmFsaWRhdGlvbihlbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIGVtYWlsVmFsaWRhdGlvbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXItcGFzc3dvcmQnKTtcbiAgICAgICAgY29uc3QgY29uZmlybVBhc3N3b3JkRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tcGFzc3dvcmQnKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkRmllbGQgJiYgY29uZmlybVBhc3N3b3JkRmllbGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1WYWxpZGF0aW9uID0gbmV3IENvbmZpcm1WYWxpZGF0aW9uKHBhc3N3b3JkRmllbGQsIGNvbmZpcm1QYXNzd29yZEZpZWxkKTtcbiAgICAgICAgICAgIGNvbmZpcm1WYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICAgICAgLy8gTG9hZCByZWNhcHRjaGFcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXdpbmRvdy5DeXByZXNzKSB7XG4gICAgICAgICAgICBsb2FkUmVjYXB0Y2hhKGZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSBmaWVsZC52YWxpZGl0eS52YWxpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSAoKF9hID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdmaXJzdF9uYW1lJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROYW1lID0gKChfYyA9IGZvcm1EYXRhLmdldCgnbGFzdF9uYW1lJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gKChfZCA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IGdyZWNhcHRjaGEgfSA9IHdpbmRvdztcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheHJlZ2lzdGVyJyxcbiAgICAgICAgICAgICAgICByZWNhcHRjaGFUb2tlbjogJycsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogbGFzdE5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKSB8fFxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmICghd2luZG93LkN5cHJlc3MpIHtcbiAgICAgICAgICAgICAgICBncmVjYXB0Y2hhLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JlY2FwdGNoYVxuICAgICAgICAgICAgICAgICAgICAgICAgLmV4ZWN1dGUoc2l0ZWtleSwgeyBhY3Rpb246ICdBamF4UmVnaXN0ZXInIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucmVjYXB0Y2hhVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdW5kZWZpbmVkLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHVuZGVmaW5lZCwgZXZlbnQsIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzLCBldmVudCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyBpcyB3cm9uZycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ3NpZ24tdXAnLFxuICAgICAgICAgICAgbWV0aG9kOiAnQWpheFJlZ2lzdGVyJ1xuICAgICAgICB9O1xuICAgICAgICBEYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZm9ybS5kYXRhc2V0LnJlZGlyZWN0VXJsIHx8ICcvbXktYWNjb3VudC8nO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCByZWdpc3RlckZvcm0gPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcjYWpheC1yZWdpc3Rlci1mb3JtJyk7XG4gICAgICAgIGlmIChyZWdpc3RlckZvcm0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhamF4UmVnaXN0ZXIgPSBuZXcgQWpheFJlZ2lzdGVyKHJlZ2lzdGVyRm9ybSk7XG4gICAgICAgIGFqYXhSZWdpc3Rlci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybVZhbGlkYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkLCBjb25maXJtRmllbGQpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZCA9IGNvbmZpcm1GaWVsZDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkIHx8ICF0aGlzLmNvbmZpcm1GaWVsZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGZpZWxkcycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IFsnY2hhbmdlJywgJ2lucHV0J107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBldmVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tpbmRleF07XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGQudmFsdWUgIT09IHRoaXMuY29uZmlybUZpZWxkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnVmFsdWUgaXMgbm90IGVxdWFsJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0Nvb2tpZUJhcl9pbnN0YW5jZXMsIF9Db29raWVCYXJfZWxlbWVudCwgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIF9Db29raWVCYXJfYWNjZXB0QnV0dG9uLCBfQ29va2llQmFyX2dldEVsZW1lbnQsIF9Db29raWVCYXJfYWNjZXB0Q29va2llcztcbmltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2Nvb2tpZS1iYXIucGNzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgZ2V0Q29va2llVmFsdWUsIHNldENvb2tpZVZhbHVlIH0gZnJvbSAnLi4vdXRpbC9jb29raWVzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfQ29va2llQmFyX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9Db29raWVCYXJfZWxlbWVudC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ29va2llQmFyX2FjY2VwdEJ1dHRvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNjb29raWUtYmFyLXRlbXBsYXRlJyksIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgXCJmXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldENvb2tpZVZhbHVlKENvb2tpZUJhci5jb29raWVOYW1lKSkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgXCJmXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nvb2tpZUJhcl9lbGVtZW50LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfaW5zdGFuY2VzLCBcIm1cIiwgX0Nvb2tpZUJhcl9nZXRFbGVtZW50KS5jYWxsKHRoaXMpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nvb2tpZUJhcl9hY2NlcHRCdXR0b24sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl9lbGVtZW50LCBcImZcIikucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImNvb2tpZXMtYWNjZXB0XCJdJyksIFwiZlwiKTtcbiAgICAgICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX2FjY2VwdEJ1dHRvbiwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfaW5zdGFuY2VzLCBcIm1cIiwgX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzKS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc3RhdGljIHNldEFjY2VwdENvb2tpZSgpIHtcbiAgICAgICAgc2V0Q29va2llVmFsdWUoQ29va2llQmFyLmNvb2tpZU5hbWUsICd0cnVlJywge1xuICAgICAgICAgICAgJ21heC1hZ2UnOiAzMTUzNjAwMFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZUJhciA9IG5ldyBDb29raWVCYXIoc2VsZWN0b3IpO1xuICAgICAgICBjb29raWVCYXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbl9Db29raWVCYXJfZWxlbWVudCA9IG5ldyBXZWFrTWFwKCksIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50ID0gbmV3IFdlYWtNYXAoKSwgX0Nvb2tpZUJhcl9hY2NlcHRCdXR0b24gPSBuZXcgV2Vha01hcCgpLCBfQ29va2llQmFyX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9Db29raWVCYXJfZ2V0RWxlbWVudCA9IGZ1bmN0aW9uIF9Db29raWVCYXJfZ2V0RWxlbWVudCgpIHtcbiAgICBjb25zdCBjbG9uZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIFwiZlwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSBjbG9uZTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LCBcImZcIikucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImNvb2tpZS1iYXJcIl0nKTtcbn0sIF9Db29raWVCYXJfYWNjZXB0Q29va2llcyA9IGZ1bmN0aW9uIF9Db29raWVCYXJfYWNjZXB0Q29va2llcygpIHtcbiAgICB2YXIgX2E7XG4gICAgQ29va2llQmFyLnNldEFjY2VwdENvb2tpZSgpO1xuICAgIChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl9lbGVtZW50LCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbn07XG5Db29raWVCYXIuY29va2llTmFtZSA9ICdhcHByb3ZlZF9jb29raWVzJztcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQ29weUNvdXBvbl9idXR0b247XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29weUNvdXBvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoYnV0dG9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9Db3B5Q291cG9uX2J1dHRvbi5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIGJ1dHRvbiwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgY29kZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikuZGF0YXNldC5jb2RlO1xuICAgICAgICBjb25zdCB0ZXh0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5kYXRhc2V0LnRleHQ7XG4gICAgICAgIGNvbnN0IGNvcGllZFRleHQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmRhdGFzZXQuY29waWVkVGV4dDtcbiAgICAgICAgY29uc29sZS5sb2codGV4dCwgY29waWVkVGV4dCk7XG4gICAgICAgIGlmICghY29kZSB8fCAhdGV4dCB8fCAhY29waWVkVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGUpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmlubmVyVGV4dCA9IGNvcGllZFRleHQ7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJywgcmVzcG9uc2UpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnZmFpbHVyZScsIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGNvcHlCdXR0b25zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwiY29weS1jb3Vwb25cIl0nKSk7XG4gICAgICAgIGlmIChjb3B5QnV0dG9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb3B5QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvcHlDb3Vwb24gPSBuZXcgQ29weUNvdXBvbihidXR0b24pO1xuICAgICAgICAgICAgY29weUNvdXBvbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9Db3B5Q291cG9uX2J1dHRvbiA9IG5ldyBXZWFrTWFwKCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQ3VydGFpbl9pbnN0YW5jZXMsIF9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciwgX0N1cnRhaW5faGFuZGxlVHJhbnNpdGlvbjtcbmltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2N1cnRhaW4ucGNzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VydGFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZm9sZEJ1dHRvbiwgb25seU9uTW9iaWxlID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0N1cnRhaW5faW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0N1cnRhaW5fdHJhbnNpdGlvbkxpc3RlbmVyLnNldCh0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluX2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluX2hhbmRsZVRyYW5zaXRpb24pLmNhbGwodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmZvbGRCdXR0b24gPSBmb2xkQnV0dG9uO1xuICAgICAgICB0aGlzLm9ubHlPbk1vYmlsZSA9IG9ubHlPbk1vYmlsZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVpZ2h0ID1cbiAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5tYXhIZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5tYXhIZWlnaHQgIT09ICdub25lJ1xuICAgICAgICAgICAgICAgID8gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLm1heEhlaWdodFxuICAgICAgICAgICAgICAgIDogJzBweCc7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmZvbGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub25seU9uTW9iaWxlICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7dGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHt0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZGVmYXVsdEhlaWdodDtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZExlc3MgfHwgIXRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9sZEJ1dHRvbi5pbm5lclRleHQgPT09IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRMZXNzO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmZvbGRCdXR0b24uZGF0YXNldC5yZWFkTW9yZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIsIFwiZlwiKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIsIFwiZlwiKSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50IHx8ICF0aGlzLmZvbGRCdXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWN1cnRhaW4tdG9nZ2xlXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvZ2dsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSB0b2dnbGVzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jdXJ0YWluLWNvbnRlbnQ9XCIke3RvZ2dsZS5kYXRhc2V0LmN1cnRhaW5Ub2dnbGV9XCJdYCk7XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9ubHlPbk1vYmlsZSA9ICEhKGNvbnRlbnQuZGF0YXNldC5vbmx5T25Nb2JpbGUgJiYgY29udGVudC5kYXRhc2V0Lm9ubHlPbk1vYmlsZSA9PT0gJ3RydWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnRhaW4gPSBuZXcgQ3VydGFpbihjb250ZW50LCB0b2dnbGUsIG9ubHlPbk1vYmlsZSk7XG4gICAgICAgICAgICBjdXJ0YWluLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbl9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9DdXJ0YWluX2hhbmRsZVRyYW5zaXRpb24gPSBmdW5jdGlvbiBfQ3VydGFpbl9oYW5kbGVUcmFuc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWF4SGVpZ2h0Jyk7XG59O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IHsgcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXMsIHNldFZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSAnLi4vdXRpbC92YWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYWlsVmFsaWRhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5lbWFpbElucHV0ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5lbWFpbElucHV0LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBibHVyVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJsdXJUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChibHVyVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibHVyVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUJsdXJFdmVudCgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUJsdXJFdmVudCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmVtYWlsSW5wdXQ7XG4gICAgICAgIGNvbnN0IHNlY3VyaXR5ID0gKChfYSA9IGZvcm1EYXRhLmdldCgnd29vY29tbWVyY2UtZW1haWwtY2hlY2stbm9uY2UnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhlbWFpbGNoZWNrJyxcbiAgICAgICAgICAgIGVtYWlsOiB2YWx1ZSxcbiAgICAgICAgICAgIHNlY3VyaXR5XG4gICAgICAgIH07XG4gICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uU3VjY2VzcygpIHtcbiAgICAgICAgcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXModGhpcy5lbWFpbElucHV0KTtcbiAgICB9XG4gICAgb25GYWlsdXJlKGVycm9yKSB7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKGVycm9yLm1lc3NhZ2UsIHRoaXMuZW1haWxJbnB1dCk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbWFpbElucHV0IHx8ICF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRW1haWxJbnB1dCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNyZWdfZW1haWwnKTtcbiAgICAgICAgaWYgKHJlZ2lzdGVyRW1haWxJbnB1dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtYWlsVmFsaWRhdGlvbiA9IG5ldyBFbWFpbFZhbGlkYXRpb24ocmVnaXN0ZXJFbWFpbElucHV0KTtcbiAgICAgICAgZW1haWxWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgeyBzZXRWYWxpZGF0aW9uTWVzc2FnZSB9IGZyb20gJy4uL3V0aWwvdmFsaWRhdGlvbic7XG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4vRmllbGRWYWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdvdFBhc3N3b3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihhbmNob3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IgPSBhbmNob3I7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIC8vIGNvbnN0IHNlY3VyaXR5OiBzdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ2ZvcmdvdHNlY3VyaXR5Jyk/LnRvU3RyaW5nKCkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBlbWFpbEZpZWxkID0gdGhpcy5mb3JtLnVzZXJuYW1lO1xuICAgICAgICAgICAgY29uc3QgZmllbGRWYWxpZGF0aW9uID0gbmV3IEZpZWxkVmFsaWRhdGlvbihlbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbi5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICBlbWFpbEZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd2YWxpZGF0ZScpKTtcbiAgICAgICAgICAgIGlmICghdXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXJuYW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheGZvcmdvdHBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICB1c2VyX2xvZ2luOiB1c2VybmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLCB0aGlzLmZvcm0pO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLCB0aGlzLmZvcm0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IgfHwgIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRGb3JnZXRMaW5rcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBhc3N3b3JkLWZvcmdldFwiXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhc3N3b3JkRm9yZ2V0TGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gcGFzc3dvcmRGb3JnZXRMaW5rc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBmb3Jnb3RQYXNzd29yZCA9IG5ldyBGb3Jnb3RQYXNzd29yZChsaW5rKTtcbiAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3Jnb3RQYXNzd29yZFRvZ2dsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IodG9nZ2xlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlID0gdG9nZ2xlO1xuICAgICAgICB0aGlzLnBhc3N3b3JkRm9yZ2V0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1mb3JnZXQtZm9ybScpO1xuICAgICAgICB0aGlzLmxvZ2luV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1yZWdpc3Rlci1mb3JtJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5XcmFwcGVyLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkRm9yZ2V0V3JhcHBlci50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkRm9yZ2V0V3JhcHBlciB8fCAhdGhpcy5sb2dpbldyYXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRm9yZ2V0TGlua3MgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJwYXNzd29yZC1mb3JnZXQtdG9nZ2xlXCJdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFzc3dvcmRGb3JnZXRMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBwYXNzd29yZEZvcmdldExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gbmV3IEZvcmdvdFBhc3N3b3JkVG9nZ2xlKGxpbmspO1xuICAgICAgICAgICAgZm9yZ290UGFzc3dvcmQuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlclNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBkb2N1bWVudENsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoZXZlbnRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5IZWFkZXIgPSBldmVudFRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19zZWFyY2gnKSAhPT0gbnVsbDtcbiAgICAgICAgICAgIGlmICh3aXRoaW5IZWFkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNlYXJjaC1maWVsZCcpO1xuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlYXJjaElucHV0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyU2VhcmNoID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoJyk7XG4gICAgICAgIGlmIChoZWFkZXJTZWFyY2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIZWFkZXJTZWFyY2goaGVhZGVyU2VhcmNoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2luZm9Qb3B1cC5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGV2ZW50ID0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5jb250ZW50IHx8ICcnO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudCwgdGhpcy5zaG93VGlwcHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHNob3dUaXBweShlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB3aW5kb3cudGlwcHkodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICB0aGVtZTogJ2xpZ2h0JyxcbiAgICAgICAgICAgIGFsbG93SFRNTDogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgc2hvd09uQ3JlYXRlOiB0cnVlLFxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBvbkhpZGRlbjogKGkpID0+IHtcbiAgICAgICAgICAgICAgICBpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgICBpbnN0YW5jZS5oaWRlV2l0aEludGVyYWN0aXZpdHkoZSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50IHx8ICF0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHRpcHB5RWxlbWVudHMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJ0aXBweVwiXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRpcHB5RWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0aXBweUVsZW1lbnQgPSB0aXBweUVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgIGlmICghdGlwcHlFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbmZvUG9wdXAgPSBuZXcgSW5mb1BvcHVwKHRpcHB5RWxlbWVudCwgJ21vdXNlb3ZlcicpO1xuICAgICAgICAgICAgaW5mb1BvcHVwLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5TG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKCk7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgICAgICAgICB0aGlzLm9uSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudHNbaV07XG4gICAgICAgICAgICB0aGlzLmxhenlsb2FkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoT2JzZXJ2ZXJDbGFzcyA9IEludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzI1MHB4IDBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbGF6eUltYWdlT2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJDbGFzcygoZW50cmllcywgbGF6eUltYWdlT2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChsYXp5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXp5bG9hZChsYXp5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXp5bG9hZChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChsYXp5SW1hZ2UpID0+IHtcbiAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUobGF6eUltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxhenlsb2FkKGVsKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgICAgICAgdGhpcy5tYW5hZ2VDc3NDbGFzc2VzKGVsKTtcbiAgICAgICAgaWYgKHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgICAgIGlmIChpbWFnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFuYWdlQ3NzQ2xhc3NlcyhpbWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLmxvYWRpbmctc3Bpbm5lcicpO1xuICAgICAgICBpZiAobG9hZGluZ1NwaW5uZXIpIHtcbiAgICAgICAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmctc3Bpbm5lcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnNpemVzKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNpemVzID0gZWxlbWVudC5kYXRhc2V0LnNpemVzO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU291cmNlRWxlbWVudCkgJiZcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5zcmNzZXQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3Jjc2V0ID0gZWxlbWVudC5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmRhdGFzZXQuc3JjO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RWxlbWVudHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiZcbiAgICAgICAgICAgICh0aGlzLmVsZW1lbnQuZGF0YXNldC5zcmMgfHwgdGhpcy5lbGVtZW50LmRhdGFzZXQuc3Jjc2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLmVsZW1lbnRdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50ICYmIHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLXNyY10sIHNvdXJjZVtkYXRhLXNyY3NldF0nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLXNyY10nKSk7XG4gICAgfVxuICAgIG1hbmFnZUNzc0NsYXNzZXMoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XG4gICAgICAgIGNvbnN0IGxhenlsb2FkRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxhenlsb2FkXScpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXp5bG9hZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbGF6eWxvYWRFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICAgICAgICAgIG5ldyBMYXp5TG9hZGVyKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBEYXRhTGF5ZXIgZnJvbSAnLi4vY29tbW9uL0RhdGFMYXllcic7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi9GaWVsZFZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c2xldHRlclN1YnNjcmliZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIgPSBEYXRhTGF5ZXI7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuZW1haWxGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV3c2xldHRlciBzdWJzY3JpYmUgY29tcG9uZW50IG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24odGhpcy5lbWFpbEZpZWxkKTtcbiAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ2ZpcnN0LW5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgY29tcGFueU5hbWUgPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdjb21wYW55LW5hbWUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSAoKF9jID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBpZiAoIWVtYWlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWlsY2hpbXBzdWJzY3JpYmUnLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBjb21wYW55TmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEZpZWxkVmFsaWRhdGlvbi5yZW1vdmVFcnJvclRleHQodGhpcy5lbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSB8fCAhdGhpcy5lbWFpbEZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSwgZXZlbnQpIHtcbiAgICAgICAgRmllbGRWYWxpZGF0aW9uLmFwcGVuZFN1Y2Nlc3NUZXh0KHRoaXMuZW1haWxGaWVsZCwgcmVzcG9uc2UuZGF0YS50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5lbWFpbEZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ0dBRXZlbnQnLFxuICAgICAgICAgICAgZXZlbnRDYXRlZ29yeTogJ25ld3NsZXR0ZXInLFxuICAgICAgICAgICAgZXZlbnRBY3Rpb246ICdzdWJzY3JpYmUnLFxuICAgICAgICAgICAgZXZlbnRMYWJlbDogdGhpcy5mb3JtLmlkIHx8ICdnZW5lcmljJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUoZXJyb3IpIHtcbiAgICAgICAgRmllbGRWYWxpZGF0aW9uLmFwcGVuZEVycm9yVGV4dCh0aGlzLmVtYWlsRmllbGQsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIC8vICNUT0RPOiBTd2l0Y2ggdG8gY29tbW9uIHNlbGVjdG9yXG4gICAgICAgIGNvbnN0IGZvcm1zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcjZm9vdGVyLW5ld3NsZXR0ZXItZm9ybSwgI2hvbWVwYWdlLW5ld3NsZXR0ZXItZm9ybSwgI2FqYXgtbmV3c2xldHRlci1mb3JtJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZm9ybXNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgbmV3c2xldHRlclN1YnNjcmliZSA9IG5ldyBOZXdzbGV0dGVyU3Vic2NyaWJlKGZvcm0pO1xuICAgICAgICAgICAgbmV3c2xldHRlclN1YnNjcmliZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRSZXZlYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5wYXNzd29yZElucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmNyZWF0ZVJldmVhbEJ1dHRvbigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFzc3dvcmRJbnB1dC50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlUmV2ZWFsQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdwYXNzd29yZC1yZXZlYWwtdG9nZ2xlJztcbiAgICAgICAgYnV0dG9uLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBwYXNzd29yZFJvd3MgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXNzd29yZC1yb3cnKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXNzd29yZFJvd3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFJvdyA9IHBhc3N3b3JkUm93c1tpbmRleF07XG4gICAgICAgICAgICBpZiAocGFzc3dvcmRSb3cgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFJldmVhbCA9IG5ldyBQYXNzd29yZFJldmVhbChwYXNzd29yZFJvdyk7XG4gICAgICAgICAgICBwYXNzd29yZFJldmVhbC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b247XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuLi91dGlsL2VuZHBvaW50cyc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZGVlbVBvaW50c0ZvckNvdXBvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoYnV0dG9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLCBidXR0b24sIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpZCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIFwiZlwiKS5kYXRhc2V0LmlkO1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhyZWRlZW1jb3Vwb24nLFxuICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgIH07XG4gICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludHMuYWpheCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSwgZXZlbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIFwiZlwiKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLCBcImZcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJywgcmVzcG9uc2UpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnZmFpbHVyZScsIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZGVlbUJ1dHRvbnMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJyZWRlZW0tY291cG9uXCJdJykpO1xuICAgICAgICBpZiAocmVkZWVtQnV0dG9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWRlZW1CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkZWVtUG9pbnRzRm9yQ291cG9uID0gbmV3IFJlZGVlbVBvaW50c0ZvckNvdXBvbihidXR0b24pO1xuICAgICAgICAgICAgcmVkZWVtUG9pbnRzRm9yQ291cG9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24gPSBuZXcgV2Vha01hcCgpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgX1Njcm9sbFRvQ29udGVudF90YXJnZXQ7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHNjcm9sbFRvVGFyZ2V0IGZyb20gJy4uL3V0aWwvc2Nyb2xsVG9UYXJnZXQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9Db250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCB0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfU2Nyb2xsVG9Db250ZW50X3RhcmdldC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQsIGVsZW1lbnQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldCwgdGFyZ2V0LCBcImZcIik7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJPZmZzZXQgPSAhX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQsIFwiZlwiKS5kYXRhc2V0LmhlYWRlck9mZnNldDtcbiAgICAgICAgICAgIHNjcm9sbFRvVGFyZ2V0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF90YXJnZXQsIFwiZlwiKSwgMCwgaGVhZGVyT2Zmc2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2Nyb2xsLXRvXScpKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlbGVtZW50LmRhdGFzZXQuc2Nyb2xsVG8gfHwgJyc7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNjcm9sbFRvQ29udGVudChlbGVtZW50LCB0YXJnZXQpO1xuICAgICAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQgPSBuZXcgV2Vha01hcCgpLCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldCA9IG5ldyBXZWFrTWFwKCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zb3VyY2VzLCBfVmlkZW9NZWRpYVJlc29sdmVyX3RpbWVvdXQsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplLCBfVmlkZW9NZWRpYVJlc29sdmVyX3Nob3dTb3VyY2U7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9wb2x5ZmlsbHMvbWF0Y2hNZWRpYSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb01lZGlhUmVzb2x2ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcy5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1ZpZGVvTWVkaWFSZXNvbHZlcl90aW1lb3V0LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQsIGVsZW1lbnQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMsIEFycmF5LmZyb20oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQsIFwiZlwiKS5xdWVyeVNlbGVjdG9yQWxsKCdzb3VyY2UnKSksIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgXCJtXCIsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplKS5jYWxsKHRoaXMpO1xuICAgICAgICBjb25zdCBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKTtcbiAgICAgICAgY29uc3QgbXEyID0gd2luZG93Lm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyk7XG4gICAgICAgIG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyKG1xLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMsIFwibVwiLCBfVmlkZW9NZWRpYVJlc29sdmVyX2hhbmRsZVJlc2l6ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihtcTIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgXCJtXCIsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplKS5jYWxsKHRoaXMpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgndmlkZW9bZGF0YS1yZXNvbHZlXScpKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVmlkZW9NZWRpYVJlc29sdmVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQgPSBuZXcgV2Vha01hcCgpLCBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMgPSBuZXcgV2Vha01hcCgpLCBfVmlkZW9NZWRpYVJlc29sdmVyX3RpbWVvdXQgPSBuZXcgV2Vha01hcCgpLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplID0gZnVuY3Rpb24gX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUoKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMsIFwiZlwiKS5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBzb3VyY2UuZGF0YXNldC5vcmllbnRhdGlvbiB8fCAnJztcbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSBOdW1iZXIoc291cmNlLmRhdGFzZXQubWF4V2lkdGgpIHx8IDA7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPcmllbnRhdGlvbiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXNcbiAgICAgICAgICAgID8gJ3BvcnRyYWl0J1xuICAgICAgICAgICAgOiAnbGFuZHNjYXBlJztcbiAgICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGlmIChjdXJyZW50T3JpZW50YXRpb24gIT09IG9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heFdpZHRoICYmIGN1cnJlbnRXaWR0aCA+PSBtYXhXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMsIFwibVwiLCBfVmlkZW9NZWRpYVJlc29sdmVyX3Nob3dTb3VyY2UpLmNhbGwodGhpcywgc291cmNlKTtcbiAgICB9KTtcbn0sIF9WaWRlb01lZGlhUmVzb2x2ZXJfc2hvd1NvdXJjZSA9IGZ1bmN0aW9uIF9WaWRlb01lZGlhUmVzb2x2ZXJfc2hvd1NvdXJjZShzb3VyY2UpIHtcbiAgICBjb25zdCBkYXRhU3JjID0gc291cmNlLmRhdGFzZXQuc3JjO1xuICAgIGlmICghZGF0YVNyYykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9lbGVtZW50LCBcImZcIikuc3JjID0gZGF0YVNyYztcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIobXEsIGNhbGxiYWNrLCBldmVudEJ1YmJsaW5nID0gZmFsc2UpIHtcbiAgICB0cnkge1xuICAgICAgICBtcS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjYWxsYmFjaywgZXZlbnRCdWJibGluZyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIG1xLmFkZExpc3RlbmVyKCgpID0+IGNhbGxiYWNrKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hNZWRpYVJlbW92ZUV2ZW50TGlzdGVuZXIobXEsIGNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbXEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBtcS5yZW1vdmVMaXN0ZW5lcigoKSA9PiBjYWxsYmFjayk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGRpYWxvZ1BvbHlmaWxsIGZyb20gJ2RpYWxvZy1wb2x5ZmlsbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgZGlzYWJsZUJvZHlTY3JvbGwsIGVuYWJsZUJvZHlTY3JvbGwgfSBmcm9tICcuLi91dGlsL2JvZHknO1xuaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tICcuLi91dGlsL3N0cmluZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG4gICAgc2V0IGlzT3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNhbWVsRGF0YUF0dHJpYnV0ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGFBdHRyaWJ1dGUucmVwbGFjZSgnZGF0YS0nLCAnJyk7XG4gICAgICAgIHJldHVybiB0b0NhbWVsQ2FzZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCB0cmFuc2l0aW9uVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zaXRpb25UaW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvblRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWUgPSB0aGlzLmdldFRyYW5zaXRpb25UaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uVGltZTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5wb2x5ZmlsbERpYWxvZygpO1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlXScpKTtcbiAgICAgICAgY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0c2lkZUNsaWNrKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZEluRGlhbG9nID0gcmVjdC50b3AgPD0gZXZlbnQuY2xpZW50WSAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgPD0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHJlY3QubGVmdCA8PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8PSByZWN0LmxlZnQgKyByZWN0LndpZHRoO1xuICAgICAgICAgICAgaWYgKCFjbGlja2VkSW5EaWFsb2cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdChgWyR7dGhpcy5kYXRhQXR0cmlidXRlfT1cIiR7dGhpcy5lbGVtZW50LmRhdGFzZXRbYCR7dGhpcy5jYW1lbERhdGFBdHRyaWJ1dGV9YF19XCJdYCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNhYmxlQm9keVNjcm9sbCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2hvd01vZGFsKCk7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGVuYWJsZUJvZHlTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgZ2V0VHJhbnNpdGlvblRpbWUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSAoX2EgPSBzdHlsZXMudHJhbnNpdGlvbkR1cmF0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uaW5kZXhPZignbXMnKSA+IC0xXG4gICAgICAgICAgICA/IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKiAxMDAwO1xuICAgICAgICByZXR1cm4gZHVyYXRpb24gfHwgNDAwO1xuICAgIH1cbiAgICBwb2x5ZmlsbERpYWxvZygpIHtcbiAgICAgICAgZGlhbG9nUG9seWZpbGwgPT09IG51bGwgfHwgZGlhbG9nUG9seWZpbGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpYWxvZ1BvbHlmaWxsLnJlZ2lzdGVyRGlhbG9nKHRoaXMuZWxlbWVudCk7XG4gICAgfVxufVxuIiwiLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IHsgc2V0Q29va2llVmFsdWUgfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuaW1wb3J0IFBvcHVwIGZyb20gJy4vUG9wdXAnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGFuZ3VhZ2VQb3B1cCBleHRlbmRzIFBvcHVwIHtcbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgaWYgKHNlbGVjdG9yICE9PSBkb2N1bWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGlmIChnZXRDb29raWVWYWx1ZSgnbGFuZ3VhZ2UtcG9wdXAtc2VlbicpKSB7XG4gICAgICAgIC8vICAgICByZXR1cm47XG4gICAgICAgIC8vIH1cbiAgICAgICAgY29uc3QgcGF0aCA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICAgICAgaWYgKHBhdGggPT09ICcvbmwvJyB8fCBwYXRoID09PSAnL2ZyLycgfHwgcGF0aCA9PT0gJy9kZS8nKSB7XG4gICAgICAgICAgICBjb25zb2xlLmxvZygncGF0aCB3cm9uZycpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIC8vIGNvbnN0IHByZWZlcnJlZExhbmd1YWdlID0gd2luZG93Lm5hdmlnYXRvci5sYW5ndWFnZSA/PyAnZW4nO1xuICAgICAgICAvLyBjb25zdCBsYW5ndWFnZSA9IHByZWZlcnJlZExhbmd1YWdlLnN1YnN0cmluZygwLCAyKTtcbiAgICAgICAgLy8gaWYgKGxhbmd1YWdlID09PSAnZW4nKSB7XG4gICAgICAgIC8vICAgICBjb25zb2xlLmxvZygnbGFuZ3VhZ2Ugd3JvbmcnKTtcbiAgICAgICAgLy8gICAgIHJldHVybjtcbiAgICAgICAgLy8gfVxuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgIGNvbnN0IHBvcHVwID0gTGFuZ3VhZ2VQb3B1cC5vcGVuUG9wdXAoJ2xhbmd1YWdlLXBvcHVwJywgbnVsbCwgc2VsZWN0b3IpO1xuICAgICAgICAgICAgc2V0Q29va2llVmFsdWUoJ2xhbmd1YWdlLXBvcHVwLXNlZW4nLCAndHJ1ZScsIHtcbiAgICAgICAgICAgICAgICAnbWF4LWFnZSc6IDMxNTM2MDAwXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGlmIChwb3B1cCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRvbWFpbkRyb3Bkb3duID0gcG9wdXAucXVlcnlTZWxlY3RvcignI2RvbWFpbi1kcm9wZG93bicpO1xuICAgICAgICAgICAgaWYgKGRvbWFpbkRyb3Bkb3duKSB7XG4gICAgICAgICAgICAgICAgY29uc3QganNvbiA9IGRvbWFpbkRyb3Bkb3duLmRhdGFzZXQuanNvbjtcbiAgICAgICAgICAgICAgICBpZiAoIWpzb24pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkb21haW5Ecm9wZG93bi5pZCA9ICdkb21haW4tZHJvcGRvd24tZmllbGQnO1xuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSBKU09OLnBhcnNlKGpzb24pIHx8IFtdO1xuICAgICAgICAgICAgICAgIGRvbWFpbkRyb3Bkb3duLm9wdGlvblZhbHVlcyA9IGRhdGE7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzdGF5RG9tYWluQnV0dG9uID0gKF9hID0gcG9wdXAgPT09IG51bGwgfHwgcG9wdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJyNzdGF5RG9tYWluJykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IG51bGw7XG4gICAgICAgICAgICBjb25zdCBvdGhlckRvbWFpbkJ1dHRvbnMgPSBBcnJheS5mcm9tKHBvcHVwID09PSBudWxsIHx8IHBvcHVwID09PSB2b2lkIDAgPyB2b2lkIDAgOiBwb3B1cC5xdWVyeVNlbGVjdG9yQWxsKCcub3RoZXJEb21haW5zJykpO1xuICAgICAgICAgICAgY29uc3Qgc3VibWl0RG9tYWluQnV0dG9uID0gcG9wdXAgPT09IG51bGwgfHwgcG9wdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvcHVwLnF1ZXJ5U2VsZWN0b3IoJyNzdWJtaXQtZG9tYWluJyk7XG4gICAgICAgICAgICBzdGF5RG9tYWluQnV0dG9uID09PSBudWxsIHx8IHN0YXlEb21haW5CdXR0b24gPT09IHZvaWQgMCA/IHZvaWQgMCA6IHN0YXlEb21haW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgcG9wdXAgPT09IG51bGwgfHwgcG9wdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvcHVwLmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIG90aGVyRG9tYWluQnV0dG9ucy5mb3JFYWNoKChvdGhlckRvbWFpbkJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgICAgIG90aGVyRG9tYWluQnV0dG9uID09PSBudWxsIHx8IG90aGVyRG9tYWluQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBvdGhlckRvbWFpbkJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgY29udGFpbmVycyA9IEFycmF5LmZyb20ocG9wdXAgPT09IG51bGwgfHwgcG9wdXAgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHBvcHVwLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYW5ndWFnZS1wb3B1cF9fY29udGFpbmVyJykpO1xuICAgICAgICAgICAgICAgICAgICBjb250YWluZXJzLmZvckVhY2goKGNvbnRhaW5lcikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBzdWJtaXREb21haW5CdXR0b24gPT09IG51bGwgfHwgc3VibWl0RG9tYWluQnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdWJtaXREb21haW5CdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFsdWUgPSBkb21haW5Ecm9wZG93biA9PT0gbnVsbCB8fCBkb21haW5Ecm9wZG93biA9PT0gdm9pZCAwID8gdm9pZCAwIDogZG9tYWluRHJvcGRvd24uc2VsZWN0ZWRWYWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlIHx8ICFkb21haW5Ecm9wZG93bikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IG1hcHBpbmcgPSBkb21haW5Ecm9wZG93bi5kYXRhc2V0Lm1hcHBpbmdcbiAgICAgICAgICAgICAgICAgICAgPyBKU09OLnBhcnNlKGRvbWFpbkRyb3Bkb3duLmRhdGFzZXQubWFwcGluZylcbiAgICAgICAgICAgICAgICAgICAgOiB7fTtcbiAgICAgICAgICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKG1hcHBpbmdbdmFsdWVdKTtcbiAgICAgICAgICAgICAgICBpZiAoIXVybCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdXJsLmhyZWY7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fcG9wdXAucGNzcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQb3B1cCBleHRlbmRzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGF0YUF0dHJpYnV0ZSA9ICdkYXRhLXBvcHVwLW5hbWUnO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAgICAgICBvcGVuOiAncG9wdXAtLW9wZW5lZCcsXG4gICAgICAgICAgICBjbG9zZWQ6ICdwb3B1cC0tY2xvc2VkJ1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgb3BlblBvcHVwKHBvcHVwSUQsIGVsZW1lbnQgPSBudWxsLCBzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IHBvcHVwID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcihgW2RhdGEtcG9wdXAtbmFtZT1cIiR7cG9wdXBJRH1cIl1gKTtcbiAgICAgICAgaWYgKHBvcHVwID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLXRlbXBsYXRlPVwiJHtwb3B1cElEfVwiXWApO1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZWxlbWVudC5ocmVmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gY2xvbmU7XG4gICAgICAgICAgICAoX2EgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICBwb3B1cCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBvcHVwLW5hbWU9XCIke3BvcHVwSUR9XCJdYCk7XG4gICAgICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdCgndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgcG9wdXApO1xuICAgICAgICAgICAgaWYgKHBvcHVwID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwb3B1cEluc3RhbmNlID0gbmV3IFBvcHVwKHBvcHVwKTtcbiAgICAgICAgICAgIHBvcHVwSW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGlmICghcG9wdXAub3Blbikge1xuICAgICAgICAgICAgY29uc3Qgb3BlbkV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCdvcGVuJyk7XG4gICAgICAgICAgICBwb3B1cC5kaXNwYXRjaEV2ZW50KG9wZW5FdmVudCk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHBvcHVwO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcbiAgICAgICAgY29uc3QgcG9wdXBMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcG9wdXBdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcG9wdXBMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwb3B1cExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNyZWF0aW9uRXZlbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZUNyZWF0aW9uRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcG9wdXBJRCA9IHRoaXMuZGF0YXNldC5wb3B1cCB8fCAnJztcbiAgICAgICAgUG9wdXAub3BlblBvcHVwKHBvcHVwSUQsIHRoaXMpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX3NpZGVQYW5lbC5wY3NzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgRGlhbG9nIGZyb20gJy4vRGlhbG9nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZGVQYW5lbCBleHRlbmRzIERpYWxvZyB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZGF0YUF0dHJpYnV0ZSA9ICdkYXRhLXBhbmVsLW5hbWUnO1xuICAgICAgICB0aGlzLmNsYXNzZXMgPSB7XG4gICAgICAgICAgICBvcGVuOiAnc2lkZS1wYW5lbC0tb3BlbmVkJyxcbiAgICAgICAgICAgIGNsb3NlZDogJ3NpZGUtcGFuZWwtLWNsb3NlZCcsXG4gICAgICAgICAgICBsZWZ0OiAnc2lkZS1wYW5lbC0tbGVmdCcsXG4gICAgICAgICAgICByaWdodDogJ3NpZGUtcGFuZWwtLXJpZ2h0J1xuICAgICAgICB9O1xuICAgIH1cbiAgICBzdGF0aWMgb3BlblNpZGVQYW5lbChwYW5lbElELCBlbGVtZW50ID0gbnVsbCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGxldCBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLW5hbWU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgIGlmIChwYW5lbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYW5lbC10ZW1wbGF0ZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIGlmICh0ZW1wbGF0ZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIGlmIChlbGVtZW50ICYmIGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGVsZW1lbnQuaHJlZjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBjbG9uZSA9IHRlbXBsYXRlLmNsb25lTm9kZSh0cnVlKTtcbiAgICAgICAgICAgIGNvbnN0IHsgY29udGVudCB9ID0gY2xvbmU7XG4gICAgICAgICAgICAoX2EgPSB0ZW1wbGF0ZS5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYXBwZW5kQ2hpbGQoY29udGVudCk7XG4gICAgICAgICAgICBwYW5lbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLW5hbWU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgICAgICBFdmVudEVtaXR0ZXIuZW1pdCgndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgcGFuZWwpO1xuICAgICAgICAgICAgaWYgKHBhbmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgc2lkZVBhbmVsSW5zdGFuY2UgPSBuZXcgU2lkZVBhbmVsKHBhbmVsKTtcbiAgICAgICAgICAgIHNpZGVQYW5lbEluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0b2dnbGVFdmVudCA9IG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJyk7XG4gICAgICAgIHBhbmVsLmRpc3BhdGNoRXZlbnQodG9nZ2xlRXZlbnQpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxMaW5rcyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcGFuZWxdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFuZWxMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBwYW5lbExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNyZWF0aW9uRXZlbnQpO1xuICAgICAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIGhhbmRsZUNyZWF0aW9uRXZlbnQoZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgcGFuZWxJRCA9IHRoaXMuZGF0YXNldC5wYW5lbCB8fCAnJztcbiAgICAgICAgLy8gSWYgYWxyZWFkeSBsb2dnZWQgaW4gZm9sbG93IGxpbmtcbiAgICAgICAgaWYgKHRoaXMgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCAmJlxuICAgICAgICAgICAgcGFuZWxJRCA9PT0gJ215LWFjY291bnQtcGFuZWwnICYmXG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykpIHtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIFNpZGVQYW5lbC5vcGVuU2lkZVBhbmVsKHBhbmVsSUQsIHRoaXMpO1xuICAgIH1cbn1cbiIsImNvbnN0IGJvZHlFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignYm9keScpO1xubGV0IHNjcm9sbFBvc2l0aW9uID0gMDtcbmV4cG9ydCBmdW5jdGlvbiBkaXNhYmxlQm9keVNjcm9sbCgpIHtcbiAgICBzY3JvbGxQb3NpdGlvbiA9IHdpbmRvdy5wYWdlWU9mZnNldDtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5vdmVyZmxvdyA9ICdoaWRkZW4nO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnBvc2l0aW9uID0gJ2ZpeGVkJztcbiAgICBib2R5RWxlbWVudC5zdHlsZS50b3AgPSBgLSR7c2Nyb2xsUG9zaXRpb259cHhgO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLndpZHRoID0gJzEwMCUnO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5zY3JvbGxCZWhhdmlvciA9ICdpbml0aWFsJztcbn1cbmV4cG9ydCBmdW5jdGlvbiBlbmFibGVCb2R5U2Nyb2xsKCkge1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdvdmVyZmxvdycpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdwb3NpdGlvbicpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnd2lkdGgnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgd2luZG93LnNjcm9sbFRvKDAsIHNjcm9sbFBvc2l0aW9uKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Njcm9sbC1iZWhhdmlvcicpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGdldENvb2tpZVZhbHVlKG5hbWUpIHtcbiAgICBjb25zdCBjb29raWUgPSBkb2N1bWVudC5jb29raWVcbiAgICAgICAgLnNwbGl0KCc7ICcpXG4gICAgICAgIC5maW5kKChyb3cpID0+IHJvdy5zdGFydHNXaXRoKG5hbWUpKTtcbiAgICBpZiAoY29va2llID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICAgIHJldHVybiBjb29raWUuc3BsaXQoJz0nKVsxXTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzZXRDb29raWVWYWx1ZShuYW1lLCB2YWx1ZSwgb3B0aW9ucykge1xuICAgIGNvbnN0IGNvb2tpZU9wdGlvbnMgPSBPYmplY3QuYXNzaWduKHsgcGF0aDogJy8nIH0sIG9wdGlvbnMpO1xuICAgIGxldCB1cGRhdGVkQ29va2llID0gYCR7bmFtZX09JHt2YWx1ZX1gO1xuICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBndWFyZC1mb3ItaW5cbiAgICBmb3IgKGNvbnN0IG9wdGlvbktleSBpbiBjb29raWVPcHRpb25zKSB7XG4gICAgICAgIHVwZGF0ZWRDb29raWUgKz0gYDsgJHtvcHRpb25LZXl9YDtcbiAgICAgICAgY29uc3Qgb3B0aW9uVmFsdWUgPSBjb29raWVPcHRpb25zW29wdGlvbktleV07XG4gICAgICAgIGlmIChvcHRpb25WYWx1ZSAhPT0gdHJ1ZSkge1xuICAgICAgICAgICAgdXBkYXRlZENvb2tpZSArPSBgPSR7b3B0aW9uVmFsdWV9YDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBkb2N1bWVudC5jb29raWUgPSB1cGRhdGVkQ29va2llO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIGlzRGF0ZVZhbGlkKGRhdGUpIHtcbiAgICByZXR1cm4gIU51bWJlci5pc05hTihkYXRlLmdldFRpbWUoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0RGF0ZShkYXRlKSB7XG4gICAgY29uc3QgZGF5ID0gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKGRhdGUuZ2V0RGF0ZSgpKTtcbiAgICBjb25zdCBtb250aCA9IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyhkYXRlLmdldE1vbnRoKCkgKyAxKTtcbiAgICByZXR1cm4gYCR7ZGF0ZS5nZXRGdWxsWWVhcigpfS0ke21vbnRofS0ke2RheX1gO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyhudW1iZXIpIHtcbiAgICByZXR1cm4gU3RyaW5nKG51bWJlcikucGFkU3RhcnQoMiwgJzAnKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRGdWxsTW9udGhOYW1lKG1vbnRoLCBsb2NhbGUgPSAnZGVmYXVsdCcpIHtcbiAgICByZXR1cm4gbW9udGgudG9Mb2NhbGVTdHJpbmcobG9jYWxlLCB7IG1vbnRoOiAnbG9uZycgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gcGFyc2VTdHJpbmdBc0h0bWwoY29udGVudCwgc2VsZWN0b3IgPSAndGVtcGxhdGUnKSB7XG4gICAgY29uc3QgZG9tUGFyc2VyID0gbmV3IERPTVBhcnNlcigpO1xuICAgIGNvbnN0IHBhcnNlZCA9IGRvbVBhcnNlci5wYXJzZUZyb21TdHJpbmcoY29udGVudCwgJ3RleHQvaHRtbCcpO1xuICAgIHJldHVybiBwYXJzZWQucXVlcnlTZWxlY3RvcihzZWxlY3RvcikgfHwgcGFyc2VkLmJvZHk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0QWJzb2x1dGVIZWlnaHQoZWwpIHtcbiAgICBjb25zdCBzdHlsZXMgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShlbCk7XG4gICAgY29uc3QgbWFyZ2luID0gcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luVG9wKSArIHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpbkJvdHRvbSk7XG4gICAgcmV0dXJuIE1hdGguY2VpbChlbC5vZmZzZXRIZWlnaHQgKyBtYXJnaW4pO1xufVxuIiwiY29uc3QgZW5kcG9pbnRzID0ge1xuICAgIGFqYXg6IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYFxufTtcbmV4cG9ydCBkZWZhdWx0IGVuZHBvaW50cztcbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRDdXJyZW50TGlua0NsYXNzKCkge1xuICAgIGNvbnN0IHBhdGhOYW1lID0gd2luZG93LmxvY2F0aW9uLnBhdGhuYW1lO1xuICAgIGNvbnN0IGZvcm1hdHRlZFBhdGhOYW1lID0gc3RyaXBUcmFpbGluZ1NsYXNoKHBhdGhOYW1lKTtcbiAgICBjb25zdCBmdWxsVXJsID0gd2luZG93LmxvY2F0aW9uLmhyZWY7XG4gICAgY29uc3QgZm9ybWF0dGVkVXJsID0gc3RyaXBUcmFpbGluZ1NsYXNoKGZ1bGxVcmwpO1xuICAgIGNvbnN0IGFuY2hvcnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoYFxuICAgICAgICBuYXYgYVtocmVmPVwiJHtwYXRoTmFtZX1cIl0sXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke2Zvcm1hdHRlZFBhdGhOYW1lfVwiXSxcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7ZnVsbFVybH1cIl0sXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke2Zvcm1hdHRlZFVybH1cIl1cbiAgICBgKSk7XG4gICAgYW5jaG9ycy5mb3JFYWNoKChhbmNob3IpID0+IHtcbiAgICAgICAgYW5jaG9yLmNsYXNzTGlzdC5hZGQoJ2N1cnJlbnQtbGluaycpO1xuICAgIH0pO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHN0cmlwVHJhaWxpbmdTbGFzaChzdHIpIHtcbiAgICByZXR1cm4gc3RyLmVuZHNXaXRoKCcvJykgPyBzdHIuc2xpY2UoMCwgLTEpIDogc3RyO1xufVxuIiwibGV0IGxvYWRlZCA9IGZhbHNlO1xuZXhwb3J0IGNvbnN0IHNpdGVrZXkgPSAnNkxkdjJSa2NBQUFBQUJDQ0wxSlI1RGxtRUVUNE55XzJDbWtWYThOdic7XG5leHBvcnQgZnVuY3Rpb24gbG9hZFJlY2FwdGNoYShlbGVtZW50cykge1xuICAgIGxvb3BUaHJvdWdoRWxlbWVudHMoZWxlbWVudHMsIHRydWUsICgpID0+IHtcbiAgICAgICAgaW5zZXJ0UmVjYXB0Y2hhU2NyaXB0KGVsZW1lbnRzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGluc2VydFJlY2FwdGNoYVNjcmlwdChlbGVtZW50cykge1xuICAgIGlmICghbG9hZGVkKSB7XG4gICAgICAgIGNvbnN0IGhlYWQgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZSgnaGVhZCcpWzBdO1xuICAgICAgICBjb25zdCBzY3JpcHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdzY3JpcHQnKTtcbiAgICAgICAgc2NyaXB0LnR5cGUgPSAndGV4dC9qYXZhc2NyaXB0JztcbiAgICAgICAgc2NyaXB0LnNyYyA9IGBodHRwczovL3d3dy5nb29nbGUuY29tL3JlY2FwdGNoYS9hcGkuanM/cmVuZGVyPSR7c2l0ZWtleX1gO1xuICAgICAgICBoZWFkLmFwcGVuZENoaWxkKHNjcmlwdCk7XG4gICAgICAgIGxvYWRlZCA9IHRydWU7XG4gICAgfVxuICAgIGxvb3BUaHJvdWdoRWxlbWVudHMoZWxlbWVudHMsIGZhbHNlLCAoKSA9PiB7XG4gICAgICAgIGluc2VydFJlY2FwdGNoYVNjcmlwdChlbGVtZW50cyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBsb29wVGhyb3VnaEVsZW1lbnRzKGVsZW1lbnRzLCBhZGRFdmVudCwgY2FsbGJhY2spIHtcbiAgICBmb3IgKGxldCBpID0gMDsgaSA8IGVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgIFsnZm9jdXMnLCAnY2xpY2snLCAndG91Y2hlbmQnLCAnYmx1cicsICdpbnB1dCcsICdjaGFuZ2UnLCAncHJvcGVydHljaGFuZ2UnXS5mb3JFYWNoKChldnQpID0+IHtcbiAgICAgICAgICAgIGlmIChhZGRFdmVudCkge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLmFkZEV2ZW50TGlzdGVuZXIoZXZ0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5yZW1vdmVFdmVudExpc3RlbmVyKGV2dCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBzY3JvbGxUb1RhcmdldCh0YXJnZXQsIGRlZmF1bHRPZmZzZXQgPSAwLCBoZWFkZXJPZmZzZXQgPSB0cnVlKSB7XG4gICAgY29uc3QgYm9keVRvcFBvc2l0aW9uID0gZG9jdW1lbnQuYm9keS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3A7XG4gICAgY29uc3QgZWxlbWVudFBvc2l0aW9uID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcCAtIGJvZHlUb3BQb3NpdGlvbjtcbiAgICBsZXQgb2Zmc2V0ID0gZGVmYXVsdE9mZnNldDtcbiAgICBpZiAoaGVhZGVyT2Zmc2V0KSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdoZWFkZXInKTtcbiAgICAgICAgaWYgKGhlYWRlcikge1xuICAgICAgICAgICAgb2Zmc2V0ICs9IGhlYWRlci5jbGllbnRIZWlnaHQ7XG4gICAgICAgIH1cbiAgICB9XG4gICAgY29uc3Qgb2Zmc2V0UG9zaXRpb24gPSBlbGVtZW50UG9zaXRpb24gLSBvZmZzZXQgKyAxO1xuICAgIHdpbmRvdy5zY3JvbGxUbyh7XG4gICAgICAgIHRvcDogb2Zmc2V0UG9zaXRpb24sXG4gICAgICAgIGJlaGF2aW9yOiAnc21vb3RoJ1xuICAgIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHRvQ2FtZWxDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFxXKyguKS9nLCAobWF0Y2gsIGNocikgPT4gY2hyLnRvVXBwZXJDYXNlKCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHRvVGl0bGVDYXNlKHN0cikge1xuICAgIHJldHVybiBzdHIucmVwbGFjZSgvXFx3XFxTKi9nLCAodHh0KSA9PiB0eHQuY2hhckF0KDApLnRvVXBwZXJDYXNlKCkgKyB0eHQuc3Vic3RyKDEpLnRvTG93ZXJDYXNlKCkpO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldFZhbGlkYXRpb25NZXNzYWdlKG1lc3NhZ2UsIGVsZW1lbnQpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZm9ybVJvdyA9IChfYSA9IGVsZW1lbnQuY2xvc2VzdCgnLmZvcm0tcm93JykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGVsZW1lbnQ7XG4gICAgY29uc3QgZm9ybVJvd1BhcmVudCA9IGZvcm1Sb3cgPT09IG51bGwgfHwgZm9ybVJvdyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybVJvdy5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChmb3JtUm93ID09PSBudWxsIHx8ICFmb3JtUm93UGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXMoZWxlbWVudCwgZm9ybVJvd1BhcmVudCk7XG4gICAgY29uc3QgdmFsaWRhdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc05hbWUgPSAnYWxlcnQgYWxlcnQtLXdhcm5pbmcgaW5saW5lLWZvcm0tZXJyb3InO1xuICAgIHZhbGlkYXRpb25FbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICBmb3JtUm93UGFyZW50Lmluc2VydEJlZm9yZSh2YWxpZGF0aW9uRWxlbWVudCwgZm9ybVJvdyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBzZWxlY3RvciB8fCAoKF9hID0gZWxlbWVudC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFyZW50RWxlbWVudCk7XG4gICAgaWYgKCFncmFuZHBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGV4aXN0aW5nVmFsaWRhdGlvbnMgPSBBcnJheS5mcm9tKGdyYW5kcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGVydC0td2FybmluZycpKTtcbiAgICBleGlzdGluZ1ZhbGlkYXRpb25zLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgdi5yZW1vdmUoKTtcbiAgICB9KTtcbn1cbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIF9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljaywgX0N1cnRhaW5FbGVtZW50X29wZW4sIF9DdXJ0YWluRWxlbWVudF9leHBhbmQsIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCwgX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzLCBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucywgX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zO1xuaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fYWNjb3JkaW9uLnBjc3MnO1xuaW1wb3J0IHsgZ2V0QWJzb2x1dGVIZWlnaHQgfSBmcm9tICcuLi91dGlsL2RvbSc7XG5jbGFzcyBDdXJ0YWluRWxlbWVudCBleHRlbmRzIEhUTUxEZXRhaWxzRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeS5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKCdzdW1tYXJ5JykpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfY29udGVudC5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKCcuY3VydGFpbi1jb250ZW50JykpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLnNldCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24uc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2suc2V0KHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBldmVudC5zdG9wSW1tZWRpYXRlUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGlmIChldmVudC50YXJnZXQgaW5zdGFuY2VvZiBIVE1MQW5jaG9yRWxlbWVudCkge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQsIFwiZlwiKSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2Nsb3NlJykpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIFwiZlwiKSB8fCB0aGlzLm9wZW4gPT09IGZhbHNlKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X29wZW4pLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IG9wZW4oKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnb3BlbicpO1xuICAgIH1cbiAgICBzZXQgb3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSgnb3BlbicsIHZhbHVlKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrLCBcImZcIiksIHtcbiAgICAgICAgICAgIGNhcHR1cmU6IHRydWUsXG4gICAgICAgICAgICBwYXNzaXZlOiBmYWxzZVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIFwiZlwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrLCBcImZcIikpO1xuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCB0cnVlLCBcImZcIik7XG4gICAgICAgIHRoaXMuY2xhc3NMaXN0LmFkZCgnY2xvc2luZycpO1xuICAgICAgICBjb25zdCBzdGFydEhlaWdodCA9IGAke3RoaXMub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgICAgY29uc3QgZW5kSGVpZ2h0ID0gYCR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgXCJmXCIpLm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKSkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikuY2FuY2VsKCk7XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCB0aGlzLmFuaW1hdGUoe1xuICAgICAgICAgICAgaGVpZ2h0OiBbc3RhcnRIZWlnaHQsIGVuZEhlaWdodF1cbiAgICAgICAgfSwge1xuICAgICAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0J1xuICAgICAgICB9KSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5vbmZpbmlzaCA9ICgpID0+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCkuY2FsbCh0aGlzLCBmYWxzZSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLm9uY2FuY2VsID0gKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBmYWxzZSwgXCJmXCIpO1xuICAgICAgICAgICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJyk7XG4gICAgICAgIH07XG4gICAgfVxufVxuX0N1cnRhaW5FbGVtZW50X3N1bW1hcnkgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9DdXJ0YWluRWxlbWVudF9vcGVuID0gZnVuY3Rpb24gX0N1cnRhaW5FbGVtZW50X29wZW4oKSB7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgdGhpcy5vcGVuID0gdHJ1ZTtcbiAgICB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lKCgpID0+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluRWxlbWVudF9leHBhbmQpLmNhbGwodGhpcykpO1xufSwgX0N1cnRhaW5FbGVtZW50X2V4cGFuZCA9IGZ1bmN0aW9uIF9DdXJ0YWluRWxlbWVudF9leHBhbmQoKSB7XG4gICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgY29uc3QgZW5kSGVpZ2h0ID0gYCR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgXCJmXCIpLm9mZnNldEhlaWdodCArIGdldEFic29sdXRlSGVpZ2h0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQsIFwiZlwiKSl9cHhgO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5jYW5jZWwoKTtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCB0aGlzLmFuaW1hdGUoe1xuICAgICAgICBoZWlnaHQ6IFtzdGFydEhlaWdodCwgZW5kSGVpZ2h0XVxuICAgIH0sIHtcbiAgICAgICAgZHVyYXRpb246IDQwMCxcbiAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnXG4gICAgfSksIFwiZlwiKTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5vbmZpbmlzaCA9ICgpID0+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCkuY2FsbCh0aGlzLCB0cnVlKTtcbn0sIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCA9IGZ1bmN0aW9uIF9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaChvcGVuKSB7XG4gICAgdGhpcy5vcGVuID0gb3BlbjtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIG51bGwsIFwiZlwiKTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIGZhbHNlLCBcImZcIik7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdjbG9zaW5nJyk7XG4gICAgdGhpcy5zdHlsZS5oZWlnaHQgPSAnJztcbiAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd0b2dnbGUnKSk7XG59O1xuY2xhc3MgQWNjb3JkaW9uRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMuc2V0KHRoaXMsIFtdKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdkZXRhaWxzJykpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIFwiZlwiKS5mb3JFYWNoKChjdXJ0YWluKSA9PiB7XG4gICAgICAgICAgICBjdXJ0YWluLmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoIWN1cnRhaW4ub3Blbikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zKS5jYWxsKHRoaXMsIGN1cnRhaW4pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zID0gbmV3IFdlYWtNYXAoKSwgX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zID0gZnVuY3Rpb24gX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zKGN1cnRhaW4pIHtcbiAgICBjb25zdCBvdGhlckN1cnRhaW5zID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucywgXCJmXCIpLmZpbHRlcigoYykgPT4gY3VydGFpbiAhPT0gYyk7XG4gICAgb3RoZXJDdXJ0YWlucy5mb3JFYWNoKChvdGhlckN1cnRhaW4pID0+IHtcbiAgICAgICAgY29uc3QgY3VydGFpbkVsZW1lbnQgPSBvdGhlckN1cnRhaW47XG4gICAgICAgIGN1cnRhaW5FbGVtZW50Lm9wZW4gPSBmYWxzZTtcbiAgICB9KTtcbn07XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2FjY29yZGlvbi1lbGVtZW50JywgQWNjb3JkaW9uRWxlbWVudCk7XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2N1cnRhaW4tZWxlbWVudCcsIEN1cnRhaW5FbGVtZW50LCB7IGV4dGVuZHM6ICdkZXRhaWxzJyB9KTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBfQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbiwgX0JpcnRoZGF5Rm9ybV9kYXlGaWVsZCwgX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkLCBfQmlydGhkYXlGb3JtX2dldERheVZhbHVlcywgX0JpcnRoZGF5Rm9ybV9nZXRNb250aFZhbHVlcywgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCwgX0JpcnRoZGF5Rm9ybV9vblN1Y2Nlc3MsIF9CaXJ0aGRheUZvcm1fb25GYWlsdXJlO1xuaW1wb3J0IHsgZm9ybWF0RGF0ZSwgZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvLCBnZXRGdWxsTW9udGhOYW1lIH0gZnJvbSAnLi4vdXRpbC9kYXRlSGVscGVyJztcbmltcG9ydCBlbmRwb2ludHMgZnJvbSAnLi4vdXRpbC9lbmRwb2ludHMnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5jbGFzcyBCaXJ0aGRheUZvcm0gZXh0ZW5kcyBIVE1MRm9ybUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfQmlydGhkYXlGb3JtX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uLnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJykpO1xuICAgICAgICBfQmlydGhkYXlGb3JtX2RheUZpZWxkLnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJyNiaXJ0aGRheS1kYXknKSk7XG4gICAgICAgIF9CaXJ0aGRheUZvcm1fbW9udGhGaWVsZC5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKCcjYmlydGhkYXktbW9udGgnKSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX29uU3VibWl0KS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbiwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQpLmJpbmQodGhpcykpO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2RheUZpZWxkLCBcImZcIikgPT09IG51bGwgfHwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX21vbnRoRmllbGQsIFwiZlwiKSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9kYXlGaWVsZCwgXCJmXCIpLm9wdGlvblZhbHVlcyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX2dldERheVZhbHVlcykuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkLCBcImZcIikub3B0aW9uVmFsdWVzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fZ2V0TW9udGhWYWx1ZXMpLmNhbGwodGhpcyk7XG4gICAgICAgIH0sIDEpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCkuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24sIFwiZlwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX29uU3VibWl0KS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5fQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbiA9IG5ldyBXZWFrTWFwKCksIF9CaXJ0aGRheUZvcm1fZGF5RmllbGQgPSBuZXcgV2Vha01hcCgpLCBfQmlydGhkYXlGb3JtX21vbnRoRmllbGQgPSBuZXcgV2Vha01hcCgpLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9CaXJ0aGRheUZvcm1fZ2V0RGF5VmFsdWVzID0gZnVuY3Rpb24gX0JpcnRoZGF5Rm9ybV9nZXREYXlWYWx1ZXMoKSB7XG4gICAgY29uc3QgcmV0dXJuVmFsdWUgPSB7fTtcbiAgICBmb3IgKGxldCBpID0gMTsgaSA8PSAzMTsgaSsrKSB7XG4gICAgICAgIGNvbnN0IG51bSA9IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyhpKS50b1N0cmluZygpO1xuICAgICAgICByZXR1cm5WYWx1ZVtudW1dID0gbnVtO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59LCBfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzID0gZnVuY3Rpb24gX0JpcnRoZGF5Rm9ybV9nZXRNb250aFZhbHVlcygpIHtcbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICAgICAgY29uc3QgbnVtID0gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKGkpLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgMjAyMS0ke251bX0tMDJgKTtcbiAgICAgICAgY29uc3QgbW9udGhOYW1lID0gZ2V0RnVsbE1vbnRoTmFtZShkYXRlKTtcbiAgICAgICAgcmV0dXJuVmFsdWVbaV0gPSBtb250aE5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbn0sIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX29uU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCBkYXkgPSBmb3JtRGF0YS5nZXQoJ2RheScpO1xuICAgIGNvbnN0IG1vbnRoID0gZm9ybURhdGEuZ2V0KCdtb250aCcpO1xuICAgIGNvbnN0IHllYXIgPSAnMTk3MCc7XG4gICAgaWYgKCFkYXkgfHwgIW1vbnRoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWApO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGFjdGlvbjogJ2FqYXhkYXRlb2ZiaXJ0aCcsXG4gICAgICAgIGRhdGU6IGZvcm1hdERhdGUoZGF0ZSlcbiAgICB9O1xuICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludHMuYWpheCwgbnVsbCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25TdWNjZXNzKS5iaW5kKHRoaXMpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmUpLmJpbmQodGhpcyksIGV2ZW50LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uLCBcImZcIikpO1xuICAgIHJldHVybiBmYWxzZTtcbn0sIF9CaXJ0aGRheUZvcm1fb25TdWNjZXNzID0gZnVuY3Rpb24gX0JpcnRoZGF5Rm9ybV9vblN1Y2Nlc3MoKSB7XG4gICAgY29uc3QgYmxvY2sgPSB0aGlzLmNsb3Nlc3QoJ1tpcz1cInNpZ251cC1ibG9ja1wiXScpO1xuICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBibG9jay5jb21wbGV0ZWQgPSB0cnVlO1xufSwgX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmUgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX29uRmFpbHVyZSgpIHtcbiAgICAvLyBzdHVmZlxufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmlydGhkYXktZm9ybScsIEJpcnRoZGF5Rm9ybSwgeyBleHRlbmRzOiAnZm9ybScgfSk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgX0Nhcm91c2VsRWxlbWVudF9wcmV2QnV0dG9uLCBfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24sIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLCBfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsLCBfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUsIF9DYXJvdXNlbEVsZW1lbnRfZ2V0VHJhbnNsYXRlWCwgX0Nhcm91c2VsRWxlbWVudF9nZXRJdGVtV2lkdGg7XG5pbXBvcnQgeyBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL3BvbHlmaWxscy9tYXRjaE1lZGlhJztcbmNsYXNzIENhcm91c2VsRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zLnNldCh0aGlzLCBbXSk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfbGlzdC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudC5zZXQodGhpcywgMCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlci5zZXQodGhpcywgMyk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwuc2V0KHRoaXMsIDApO1xuICAgIH1cbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBzZXQgYWN0aXZlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKCdhY3RpdmUnLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pdGVtXScpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgdGhpcy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pdGVtc10nKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbiwgdGhpcy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcmV2XScpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5leHRdJyksIFwiZlwiKTtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgXCJmXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X3ByZXZCdXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlKS5jYWxsKHRoaXMsIC0xKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uLCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSkuY2FsbCh0aGlzLCAxKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudENoZWNrID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEwMjNweCknKTtcbiAgICAgICAgY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Q2hlY2subWF0Y2hlcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBzZXR1cCgpO1xuICAgICAgICBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihjb21wb25lbnRDaGVjaywgc2V0dXAsIGZhbHNlKTtcbiAgICB9XG4gICAgZGVpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbCwgXCJmXCIpKTtcbiAgICAgICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QsIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUpLmNhbGwodGhpcywgMCk7XG4gICAgICAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDQ3OXB4KScpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50KS5jYWxsKHRoaXMsIG1xKTtcbiAgICAgICAgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIobXEsICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQpLmNhbGwodGhpcywgbXEpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbCwgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoZXMoJzpob3ZlcicpIHx8IHRoaXMubWF0Y2hlcygnOmZvY3VzLXdpdGhpbicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUpLmNhbGwodGhpcywgMSk7XG4gICAgICAgIH0sIDcwMDApLCBcImZcIik7XG4gICAgfVxufVxuX0Nhcm91c2VsRWxlbWVudF9pdGVtcyA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbiA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbiA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlciA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwgPSBuZXcgV2Vha01hcCgpLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudCA9IGZ1bmN0aW9uIF9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudChtcSkge1xuICAgIGNvbnN0IGl0ZW1zU2hvd24gPSBtcS5tYXRjaGVzID8gMSA6IDI7XG4gICAgaWYgKGl0ZW1zU2hvd24gPCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIFwiZlwiKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlciwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zLCBcImZcIikubGVuZ3RoIC0gaXRlbXNTaG93biwgXCJmXCIpO1xufSwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSA9IGZ1bmN0aW9uIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUoaW5jcmVtZW50KSB7XG4gICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgXCJmXCIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBcImZcIikgKyBpbmNyZW1lbnQsIFwiZlwiKTtcbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIFwiZlwiKSA8IDApIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLCBcImZcIiksIFwiZlwiKTtcbiAgICB9XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBcImZcIikgPiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlciwgXCJmXCIpKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCAwLCBcImZcIik7XG4gICAgfVxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBcImZcIikuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9nZXRUcmFuc2xhdGVYKS5jYWxsKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBcImZcIikpfXB4KWA7XG59LCBfQ2Fyb3VzZWxFbGVtZW50X2dldFRyYW5zbGF0ZVggPSBmdW5jdGlvbiBfQ2Fyb3VzZWxFbGVtZW50X2dldFRyYW5zbGF0ZVgoY291bnQpIHtcbiAgICBjb25zdCBtb250aFdpZHRoID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoKS5jYWxsKHRoaXMpO1xuICAgIHJldHVybiAtKG1vbnRoV2lkdGggKiBjb3VudCk7XG59LCBfQ2Fyb3VzZWxFbGVtZW50X2dldEl0ZW1XaWR0aCA9IGZ1bmN0aW9uIF9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoKCkge1xuICAgIGNvbnN0IGl0ZW0gPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIFwiZlwiKVswXTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1XaWR0aCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgZ3JpZEdhcCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBcImZcIikpLmNvbHVtbkdhcCwgMTApO1xuICAgIHJldHVybiBpdGVtV2lkdGggKyBncmlkR2FwO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2Fyb3VzZWwtZWxlbWVudCcsIENhcm91c2VsRWxlbWVudCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIF9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMsIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlLCBfTGF2YW5kcmVTZWxlY3RfbmFtZSwgX0xhdmFuZHJlU2VsZWN0X3BsYWNlaG9sZGVyLCBfTGF2YW5kcmVTZWxlY3RfaWQsIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciwgX0xhdmFuZHJlU2VsZWN0X3VwZGF0ZSwgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbiwgX0xhdmFuZHJlU2VsZWN0X2ZpbHRlciwgX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93biwgX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93bjtcbmltcG9ydCB7IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyB9IGZyb20gJy4uL3V0aWwvZGF0ZUhlbHBlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhbmRyZVNlbGVjdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcihpZCA9ICcnLCBwbGFjZWhvbGRlciA9ICcnKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcy5zZXQodGhpcywge30pO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZS5zZXQodGhpcywgJycpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3RfbmFtZS5zZXQodGhpcywgdGhpcy5nZXRBdHRyaWJ1dGUoJ25hbWUnKSB8fCAnJyk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9wbGFjZWhvbGRlci5zZXQodGhpcywgJycpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3RfaWQuc2V0KHRoaXMsICcnKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X291dHNpZGVDbGlja0xpc3RlbmVyLnNldCh0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3QgPSB0YXJnZXQuY2xvc2VzdCgnbGF2YW5kcmUtc2VsZWN0Jyk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCB8fCBjbG9zZXN0ID09PSBudWxsIHx8IGNsb3Nlc3QgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5jbGFzc0xpc3QuYWRkKCdsYXZhbmRyZS1zZWxlY3RfX2lucHV0Jyk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5hdXRvY2FwaXRhbGl6ZSA9ICdvZmYnO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnBsYWNlaG9sZGVyID0gcGxhY2Vob2xkZXI7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikuaWQgPSBpZDtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnTEFCRUwnKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLCBcImZcIikuY2xhc3NMaXN0LmFkZCgnbGF2YW5kcmUtc2VsZWN0X19sYWJlbCcpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZExhYmVsLCBcImZcIikuaW5uZXJUZXh0ID0gcGxhY2Vob2xkZXI7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkTGFiZWwsIFwiZlwiKS5odG1sRm9yID0gaWQ7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgXCJmXCIpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnVUwnKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikuaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpLmNsYXNzTGlzdC5hZGQoJ2xhdmFuZHJlLXNlbGVjdF9fZHJvcGRvd24nKTtcbiAgICAgICAgdGhpcy5hcHBlbmRDaGlsZChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikpO1xuICAgIH1cbiAgICBnZXQgcGxhY2Vob2xkZXIoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9wbGFjZWhvbGRlciwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgcGxhY2Vob2xkZXIodmFsdWUpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfcGxhY2Vob2xkZXIsIHZhbHVlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikucGxhY2Vob2xkZXIgPSB2YWx1ZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgXCJmXCIpLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaWQoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pZCwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgaWQodmFsdWUpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaWQsIHZhbHVlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikuaWQgPSB2YWx1ZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCwgXCJmXCIpLmh0bWxGb3IgPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9uYW1lLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X25hbWUsIHZhbHVlLCBcImZcIik7XG4gICAgfVxuICAgIGdldCBzZWxlY3RlZFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZSwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlLCB2YWx1ZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnZhbHVlID0gdmFsdWUucmVwbGFjZSgvXjArLywgJycpO1xuICAgIH1cbiAgICBnZXQgb3B0aW9uVmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBvcHRpb25WYWx1ZXModmFsdWUpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLCB2YWx1ZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfdXBkYXRlKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9maWx0ZXIpLmJpbmQodGhpcykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93bikuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X2ZpbHRlcikuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3Rfc2hvd0Ryb3Bkb3duKS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5fTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcyA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X25hbWUgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3RfcGxhY2Vob2xkZXIgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3RfaWQgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0xhdmFuZHJlU2VsZWN0X3VwZGF0ZSA9IGZ1bmN0aW9uIF9MYXZhbmRyZVNlbGVjdF91cGRhdGUoKSB7XG4gICAgT2JqZWN0LmtleXMoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLCBcImZcIikpLmZvckVhY2goKGtleSkgPT4ge1xuICAgICAgICBjb25zdCBvcHRpb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdsaScpO1xuICAgICAgICBvcHRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0T3B0aW9uKS5iaW5kKHRoaXMpKTtcbiAgICAgICAgb3B0aW9uLmNsYXNzTGlzdC5hZGQoJ2xhdmFuZHJlLXNlbGVjdF9fZHJvcGRvd25fX2l0ZW0nKTtcbiAgICAgICAgY29uc3QgdmFsdWUgPSBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLCBcImZcIilba2V5XSkudG9TdHJpbmcoKTtcbiAgICAgICAgb3B0aW9uLmRhdGFzZXQudmFsdWUgPSB2YWx1ZTtcbiAgICAgICAgb3B0aW9uLmlubmVyVGV4dCA9IGtleS5yZXBsYWNlKC9eMCsvLCAnJyk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIGNvbnN0IGZpcnN0T3B0aW9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcubGF2YW5kcmUtc2VsZWN0X19kcm9wZG93bl9faXRlbScpO1xuICAgIGlmICghZmlyc3RPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaXJzdE9wdGlvbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG59LCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0T3B0aW9uID0gZnVuY3Rpb24gX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC5kYXRhc2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93bikuY2FsbCh0aGlzKTtcbn0sIF9MYXZhbmRyZVNlbGVjdF9maWx0ZXIgPSBmdW5jdGlvbiBfTGF2YW5kcmVTZWxlY3RfZmlsdGVyKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLmxhdmFuZHJlLXNlbGVjdF9fZHJvcGRvd25fX2l0ZW0nKSk7XG4gICAgY29uc3QgdmFsdWUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gb3B0aW9uLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGV4dC5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG59LCBfTGF2YW5kcmVTZWxlY3Rfc2hvd0Ryb3Bkb3duID0gZnVuY3Rpb24gX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93bigpIHtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikuaGlkZGVuID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciwgXCJmXCIpKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSwgX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93biA9IGZ1bmN0aW9uIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24oKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciwgXCJmXCIpKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGF2YW5kcmUtc2VsZWN0JywgTGF2YW5kcmVTZWxlY3QpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIF9TaWdudXBCbG9ja190ZW1wbGF0ZSwgX1NpZ251cEJsb2NrX292ZXJsYXksIF9TaWdudXBCbG9ja19ocmVmLCBfU2lnbnVwQmxvY2tfcG9pbnRzLCBfU2lnbnVwQmxvY2tfdHlwZSwgX1NpZ251cEJsb2NrX2NvbXBsZXRlZCwgX1NpZ251cEJsb2NrX21lZGlhUXVlcnksIF9TaWdudXBCbG9ja19tcSwgX1NpZ251cEJsb2NrX2lzTW9iaWxlLCBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSwgX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciwgX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciwgX1NpZ251cEJsb2NrX3NldE92ZXJsYXlFdmVudExpc3RlbmVycywgX1NpZ251cEJsb2NrX2dldFRlbXBsYXRlO1xuaW1wb3J0IHsgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIsIG1hdGNoTWVkaWFSZW1vdmVFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vcG9seWZpbGxzL21hdGNoTWVkaWEnO1xuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuLi91dGlsL2VuZHBvaW50cyc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ251cEJsb2NrIGV4dGVuZHMgSFRNTExJRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9TaWdudXBCbG9ja19pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfdGVtcGxhdGUuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfb3ZlcmxheS5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9TaWdudXBCbG9ja19ocmVmLnNldCh0aGlzLCB0aGlzLmRhdGFzZXQuaHJlZiB8fCBudWxsKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX3BvaW50cy5zZXQodGhpcywgTnVtYmVyKHRoaXMuZGF0YXNldC5wb2ludHMpIHx8IDApO1xuICAgICAgICBfU2lnbnVwQmxvY2tfdHlwZS5zZXQodGhpcywgdGhpcy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSB8fCAnJyk7XG4gICAgICAgIF9TaWdudXBCbG9ja19jb21wbGV0ZWQuc2V0KHRoaXMsIHRoaXMuaGFzQXR0cmlidXRlKCdjb21wbGV0ZWQnKSB8fCBmYWxzZSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19tZWRpYVF1ZXJ5LnNldCh0aGlzLCBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS10YWJsZXQtbGFuZHNjYXBlJykpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfbXEuc2V0KHRoaXMsIG1hdGNoTWVkaWEoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeSwgXCJmXCIpKSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19pc01vYmlsZS5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIuc2V0KHRoaXMsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCBcImZcIikuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX3NldE92ZXJsYXlFdmVudExpc3RlbmVycykuY2FsbCh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlci5zZXQodGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBfU2lnbnVwQmxvY2tfY2xpY2tIYW5kbGVyLnNldCh0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhhZGRsb3lhbHR5cG9pbnRzJyxcbiAgICAgICAgICAgICAgICBwb2ludHM6IFN0cmluZyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19wb2ludHMsIFwiZlwiKSksXG4gICAgICAgICAgICAgICAgcG9vbDogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIHR5cGU6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3R5cGUsIFwiZlwiKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludHMuYWpheCwgbnVsbCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaHJlZiwgXCJmXCIpLCAnX2JsYW5rJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgY29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfY29tcGxldGVkLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBjb21wbGV0ZWQodmFsdWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja19jb21wbGV0ZWQsIHZhbHVlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX3RlbXBsYXRlLCBudWxsLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIG51bGwsIFwiZlwiKTtcbiAgICAgICAgKF9hID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcucG9pbnRzLWdyaWRfX292ZXJsYXknKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfc2V0VGVtcGxhdGUpLmNhbGwodGhpcyk7XG4gICAgICAgIGNvbnN0IHRpdGxlcyA9IEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcucG9pbnRzLWdyaWRfX3RpdGxlLWNvbnRlbnQnKSk7XG4gICAgICAgIHRpdGxlcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgICAgICAgICAgdGl0bGUudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nLCAhdGl0bGUuaGlkZGVuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2lzTW9iaWxlLCBcImZcIikpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21xLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlKSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgbWF0Y2hNZWRpYVJlbW92ZUV2ZW50TGlzdGVuZXIoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbXEsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUpKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2hyZWYsIFwiZlwiKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbl9TaWdudXBCbG9ja190ZW1wbGF0ZSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19vdmVybGF5ID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX2hyZWYgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfcG9pbnRzID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX3R5cGUgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfY29tcGxldGVkID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX21lZGlhUXVlcnkgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfbXEgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfaXNNb2JpbGUgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfY2xpY2tIYW5kbGVyID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlID0gZnVuY3Rpb24gX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUoKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfaXNNb2JpbGUsICFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tcSwgXCJmXCIpLm1hdGNoZXMsIFwiZlwiKTtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaXNNb2JpbGUsIFwiZlwiKTtcbn0sIF9TaWdudXBCbG9ja19zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIF9TaWdudXBCbG9ja19zZXRUZW1wbGF0ZSgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja190ZW1wbGF0ZSwgXCJmXCIpKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX3RlbXBsYXRlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGUpLmNhbGwodGhpcyksIFwiZlwiKTtcbiAgICB9XG4gICAgdGhpcy5hcHBlbmRDaGlsZCgoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja190ZW1wbGF0ZSwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIHRoaXMucXVlcnlTZWxlY3RvcignLnBvaW50cy1ncmlkX19vdmVybGF5JyksIFwiZlwiKTtcbiAgICBjb25zdCBjbG9zZU92ZXJsYXlCdXR0b24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNsb3NlXScpO1xuICAgIGlmICghY2xvc2VPdmVybGF5QnV0dG9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xvc2VPdmVybGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIsIFwiZlwiKS5iaW5kKHRoaXMpLCBmYWxzZSk7XG59LCBfU2lnbnVwQmxvY2tfc2V0T3ZlcmxheUV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX1NpZ251cEJsb2NrX3NldE92ZXJsYXlFdmVudExpc3RlbmVycygpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2hyZWYsIFwiZlwiKSkge1xuICAgICAgICBjb25zdCBidXR0b24gPSAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKCdidXR0b25baXM9XCJsYXZhbmRyZS1idXR0b25cIl0nKTtcbiAgICAgICAgaWYgKCFidXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19jbGlja0hhbmRsZXIsIFwiZlwiKSk7XG4gICAgfVxufSwgX1NpZ251cEJsb2NrX2dldFRlbXBsYXRlID0gZnVuY3Rpb24gX1NpZ251cEJsb2NrX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaW50cy1ncmlkLW92ZXJsYXknKTtcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2dnZWQtaW4nKSkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19jb21wbGV0ZWQsIFwiZlwiKSkge1xuICAgICAgICByZXR1cm4gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwb2ludHMtZ3JpZC1vdmVybGF5LS1jb21wbGV0ZWQtLSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfdHlwZSwgXCJmXCIpfWApIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pbnRzLWdyaWQtb3ZlcmxheS0tY29tcGxldGVkJykpO1xuICAgIH1cbiAgICBjb25zdCB0eXBlVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG9pbnRzLWdyaWQtb3ZlcmxheS0tJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja190eXBlLCBcImZcIil9YCk7XG4gICAgaWYgKHR5cGVUZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gdHlwZVRlbXBsYXRlO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzaWdudXAtYmxvY2snLCBTaWdudXBCbG9jaywgeyBleHRlbmRzOiAnbGknIH0pO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9MYXZhbmRyZUJ1dHRvbl9pc0Rpc2FibGVkO1xuaW1wb3J0ICcuL3N0eWxlLnBjc3MnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF2YW5kcmVCdXR0b24gZXh0ZW5kcyBIVE1MQnV0dG9uRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9MYXZhbmRyZUJ1dHRvbl9pc0Rpc2FibGVkLnNldCh0aGlzLCB0aGlzLmhhc0F0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcpKTtcbiAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhyZWYgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdpcycsICdsYXZhbmRyZS1idXR0b24nKTtcbiAgICB9XG4gICAgZ2V0IGxhYmVsKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5pbm5lclRleHQ7XG4gICAgfVxuICAgIHNldCBsYWJlbCh2YWx1ZSkge1xuICAgICAgICB0aGlzLmlubmVyVGV4dCA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgaHJlZigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuZ2V0QXR0cmlidXRlKCdocmVmJykgfHwgJyc7XG4gICAgfVxuICAgIHNldCBocmVmKHVybCkge1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaHJlZicsIHVybCk7XG4gICAgfVxuICAgIGdldCBzaXplKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ3NpemUnKSB8fCAnJztcbiAgICB9XG4gICAgc2V0IHNpemUodXJsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdzaXplJywgdXJsKTtcbiAgICB9XG4gICAgZ2V0IHByaW1hcnkoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgncHJpbWFyeScpO1xuICAgIH1cbiAgICBzZXQgcHJpbWFyeShib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdwcmltYXJ5JywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IG91dGxpbmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgncHJpbWFyeScpO1xuICAgIH1cbiAgICBzZXQgb3V0bGluZShib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdvdXRsaW5lJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IGxpbmsoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnbGluaycpO1xuICAgIH1cbiAgICBzZXQgbGluayhib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdsaW5rJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IGZ1bGxXaWR0aCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBmdWxsV2lkdGgoYm9vbCkge1xuICAgICAgICBpZiAoIWJvb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnZnVsbC13aWR0aCcsIGJvb2wudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGdldCBsb2FkaW5nKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgc2V0IGxvYWRpbmcoYm9vbCkge1xuICAgICAgICBpZiAoIWJvb2wpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnbG9hZGluZycsIGJvb2wudG9TdHJpbmcoKSk7XG4gICAgfVxuICAgIGdldCBpc0Rpc2FibGVkKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVCdXR0b25faXNEaXNhYmxlZCwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgaXNEaXNhYmxlZCh2YWx1ZSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZUJ1dHRvbl9pc0Rpc2FibGVkLCB2YWx1ZSwgXCJmXCIpO1xuICAgICAgICB0aGlzLnRvZ2dsZUF0dHJpYnV0ZSgnYXJpYS1kaXNhYmxlZCcsIHZhbHVlKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmhyZWYpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmhyZWYpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG5fTGF2YW5kcmVCdXR0b25faXNEaXNhYmxlZCA9IG5ldyBXZWFrTWFwKCk7XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiTW9kdWxlIiwiY29uc3RydWN0b3IiLCJldmVudEVtaXR0ZXIiLCJpbml0aWFsaXplIiwiaW5pdGlhbGl6ZUNvbXBvbmVudHMiLCJvbiIsImVsZW1lbnQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwiY29tcG9uZW50cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJvbkluaXQiLCJBamF4TG9naW4iLCJBamF4UmVnaXN0ZXIiLCJDb29raWVCYXIiLCJDb3B5Q291cG9uIiwiQ3VydGFpbiIsIkVtYWlsVmFsaWRhdGlvbiIsIkZpZWxkVmFsaWRhdGlvbiIsIkZvcmdvdFBhc3N3b3JkIiwiRm9yZ290UGFzc3dvcmRUb2dnbGUiLCJIZWFkZXJTZWFyY2giLCJJbmZvUG9wdXAiLCJMYXp5TG9hZGVyIiwiTmV3c2xldHRlclN1YnNjcmliZSIsIlBhc3N3b3JkUmV2ZWFsIiwiUmVkZWVtUG9pbnRzRm9yQ291cG9uIiwiU2Nyb2xsVG9Db250ZW50IiwiVmlkZW9NZWRpYVJlc29sdmVyIiwiTGFuZ3VhZ2VQb3B1cCIsIlNpZGVQYW5lbCIsInNldEN1cnJlbnRMaW5rQ2xhc3MiLCJMYXZhbmRyZUJ1dHRvbiIsIkFwcCIsImFyZ3VtZW50cyIsIndwRm9ybXNTdWJtaXRCdXR0b25zIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImJ1dHRvbiIsInJlbW92ZUF0dHJpYnV0ZSIsInNldEF0dHJpYnV0ZSIsImFwcEluaXQiLCJhcHAiLCJsYXp5QmFja2dyb3VuZHMiLCJmb290ZXJVc3BTbGlkZXIiLCJzZXRUaW1lb3V0IiwibGlzdCIsInF1ZXJ5U2VsZWN0b3IiLCJpdGVtcyIsInRvdGFsV2lkdGgiLCJpdGVtIiwiY2xpZW50V2lkdGgiLCJzdHlsZSIsIndpZHRoIiwiYWRkRXZlbnRMaXN0ZW5lciIsInNsaWNlIiwiY2FsbCIsIndpbmRvdyIsImxhenlCYWNrZ3JvdW5kT2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvYnNlcnZlciIsImVudHJ5IiwiaXNJbnRlcnNlY3RpbmciLCJ0YXJnZXQiLCJjbGFzc0xpc3QiLCJhZGQiLCJ1bm9ic2VydmUiLCJsYXp5QmFja2dyb3VuZCIsIm9ic2VydmUiLCJjdXN0b21FbGVtZW50cyIsImRlZmluZSIsImV4dGVuZHMiLCJEYXRhTGF5ZXIiLCJkYXRhTGF5ZXIiLCJwdXNoIiwiZGF0YSIsImVjb21tZXJjZSIsIkNvbXBvbmVudCIsImxvYWRSZWNhcHRjaGEiLCJzaXRla2V5Iiwic2VuZEFqYXhSZXF1ZXN0Iiwic2V0VmFsaWRhdGlvbk1lc3NhZ2UiLCJmb3JtIiwiYWpheEVuZHBvaW50IiwibG9jYXRpb24iLCJvcmlnaW4iLCJpc1ZhbGlkIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJmaWVsZHMiLCJDeXByZXNzIiwiaW5kZXgiLCJsZW5ndGgiLCJmaWVsZCIsInZhbGlkYXRvciIsIm1hdGNoZXMiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJzdWJtaXRCdXR0b24iLCJ0eXBlIiwiZXZlbnQiLCJvblN1Ym1pdCIsIl9hIiwiX2IiLCJwcmV2ZW50RGVmYXVsdCIsInZhbGlkIiwidmFsaWRpdHkiLCJmb3JtRGF0YSIsIkZvcm1EYXRhIiwidXNlcm5hbWUiLCJnZXQiLCJ0b1N0cmluZyIsInBhc3N3b3JkIiwiZ3JlY2FwdGNoYSIsImFjdGlvbiIsInJlY2FwdGNoYVRva2VuIiwidW5kZWZpbmVkIiwicmVhZHkiLCJleGVjdXRlIiwidGhlbiIsInRva2VuIiwib25TdWNjZXNzIiwiYmluZCIsIm9uRmFpbHVyZSIsInJlcyIsInJlc3BvbnNlIiwic3VjY2VzcyIsIkVycm9yIiwibWV0aG9kIiwiaHJlZiIsImRhdGFzZXQiLCJyZWRpcmVjdFVybCIsIkpTT04iLCJwYXJzZSIsIm1lc3NhZ2UiLCJsb2dpbkZvcm1zIiwiYWpheExvZ2luIiwiQ29uZmlybVZhbGlkYXRpb24iLCJlbWFpbEZpZWxkIiwiZW1haWxWYWxpZGF0aW9uIiwicGFzc3dvcmRGaWVsZCIsImNvbmZpcm1QYXNzd29yZEZpZWxkIiwiY29uZmlybVZhbGlkYXRpb24iLCJfYyIsIl9kIiwiZW1haWwiLCJmaXJzdE5hbWUiLCJsYXN0TmFtZSIsImZpcnN0X25hbWUiLCJsYXN0X25hbWUiLCJyZWdpc3RlckZvcm0iLCJhamF4UmVnaXN0ZXIiLCJjb25maXJtRmllbGQiLCJldmVudHMiLCJ2YWx1ZSIsInNldEN1c3RvbVZhbGlkaXR5IiwicmVwb3J0VmFsaWRpdHkiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0IiwicmVjZWl2ZXIiLCJzdGF0ZSIsImtpbmQiLCJmIiwiVHlwZUVycm9yIiwiaGFzIiwic2V0IiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsIl9Db29raWVCYXJfaW5zdGFuY2VzIiwiX0Nvb2tpZUJhcl9lbGVtZW50IiwiX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQiLCJfQ29va2llQmFyX2FjY2VwdEJ1dHRvbiIsIl9Db29raWVCYXJfZ2V0RWxlbWVudCIsIl9Db29raWVCYXJfYWNjZXB0Q29va2llcyIsImdldENvb2tpZVZhbHVlIiwic2V0Q29va2llVmFsdWUiLCJjb29raWVOYW1lIiwicmVtb3ZlIiwic2V0QWNjZXB0Q29va2llIiwiY29va2llQmFyIiwiV2Vha01hcCIsIldlYWtTZXQiLCJjbG9uZSIsImNsb25lTm9kZSIsImNvbnRlbnQiLCJwYXJlbnRFbGVtZW50IiwiYXBwZW5kQ2hpbGQiLCJfQ29weUNvdXBvbl9idXR0b24iLCJvbkNsaWNrIiwiY29kZSIsInRleHQiLCJjb3BpZWRUZXh0IiwiY29uc29sZSIsImxvZyIsIm5hdmlnYXRvciIsImNsaXBib2FyZCIsIndyaXRlVGV4dCIsImlubmVyVGV4dCIsImNvcHlCdXR0b25zIiwiY29weUNvdXBvbiIsIl9DdXJ0YWluX2luc3RhbmNlcyIsIl9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciIsIl9DdXJ0YWluX2hhbmRsZVRyYW5zaXRpb24iLCJmb2xkQnV0dG9uIiwib25seU9uTW9iaWxlIiwiZGVmYXVsdEhlaWdodCIsImdldENvbXB1dGVkU3R5bGUiLCJtYXhIZWlnaHQiLCJlIiwiaW5uZXJXaWR0aCIsImNvbnRhaW5zIiwic2Nyb2xsSGVpZ2h0IiwicmVhZExlc3MiLCJyZWFkTW9yZSIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJ0b2dnbGVzIiwidG9nZ2xlIiwiY3VydGFpblRvZ2dsZSIsImN1cnRhaW4iLCJyZW1vdmVQcm9wZXJ0eSIsInJlbW92ZUV4aXN0aW5nVmFsaWRhdGlvbk1lc3NhZ2VzIiwiZW1haWxJbnB1dCIsImNsb3Nlc3QiLCJibHVyVGltZW91dCIsImNsZWFyVGltZW91dCIsImhhbmRsZUJsdXJFdmVudCIsInNlY3VyaXR5IiwiZXJyb3IiLCJyZWdpc3RlckVtYWlsSW5wdXQiLCJhbmNob3IiLCJwYXNzd29yZEZvcmdldEFuY2hvciIsImZpZWxkVmFsaWRhdGlvbiIsInVzZXJfbG9naW4iLCJwYXNzd29yZEZvcmdldExpbmtzIiwibGluayIsImZvcmdvdFBhc3N3b3JkIiwicGFzc3dvcmRGb3JnZXRXcmFwcGVyIiwiZ2V0RWxlbWVudEJ5SWQiLCJsb2dpbldyYXBwZXIiLCJ0b2dnbGVBdHRyaWJ1dGUiLCJkb2N1bWVudENsaWNrSGFuZGxlciIsImV2ZW50VGFyZ2V0Iiwid2l0aGluSGVhZGVyIiwiYm9keSIsInN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbiIsInNlYXJjaElucHV0RWxlbWVudCIsImZvY3VzIiwiaGVhZGVyU2VhcmNoIiwiaW5zdGFuY2UiLCJzaG93VGlwcHkiLCJ0aXBweSIsInRoZW1lIiwiYWxsb3dIVE1MIiwiaGlkZU9uQ2xpY2siLCJzaG93T25DcmVhdGUiLCJpbnRlcmFjdGl2ZSIsIm9uSGlkZGVuIiwiaSIsImRlc3Ryb3kiLCJzaG93IiwiaGlkZVdpdGhJbnRlcmFjdGl2aXR5IiwidGlwcHlFbGVtZW50cyIsInRpcHB5RWxlbWVudCIsImluZm9Qb3B1cCIsImVsZW1lbnRzIiwiZ2V0RWxlbWVudHMiLCJvbkludGVyc2VjdGlvbk9ic2VydmVyIiwibGF6eWxvYWQiLCJPYnNlcnZlckNsYXNzIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwidGhyZXNob2xkIiwibGF6eUltYWdlT2JzZXJ2ZXIiLCJIVE1MUGljdHVyZUVsZW1lbnQiLCJsYXp5IiwiZGlzY29ubmVjdCIsImxhenlJbWFnZSIsImVsIiwibWFuYWdlQ3NzQ2xhc3NlcyIsImltYWdlIiwibG9hZGluZ1NwaW5uZXIiLCJIVE1MSW1hZ2VFbGVtZW50IiwiSFRNTFNvdXJjZUVsZW1lbnQiLCJzaXplcyIsInNyY3NldCIsInNyYyIsImxhenlsb2FkRWxlbWVudHMiLCJjb21wYW55TmFtZSIsInJlbW92ZUVycm9yVGV4dCIsImFwcGVuZFN1Y2Nlc3NUZXh0IiwiZXZlbnRDYXRlZ29yeSIsImV2ZW50QWN0aW9uIiwiZXZlbnRMYWJlbCIsImlkIiwiYXBwZW5kRXJyb3JUZXh0IiwiZm9ybXMiLCJuZXdzbGV0dGVyU3Vic2NyaWJlIiwicGFzc3dvcmRJbnB1dCIsImNyZWF0ZVJldmVhbEJ1dHRvbiIsImNyZWF0ZUVsZW1lbnQiLCJjbGFzc05hbWUiLCJ0YWJJbmRleCIsInBhc3N3b3JkUm93cyIsInBhc3N3b3JkUm93IiwicGFzc3dvcmRSZXZlYWwiLCJfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiIsImVuZHBvaW50cyIsImFqYXgiLCJyZWRlZW1CdXR0b25zIiwicmVkZWVtUG9pbnRzRm9yQ291cG9uIiwiX1Njcm9sbFRvQ29udGVudF9lbGVtZW50IiwiX1Njcm9sbFRvQ29udGVudF90YXJnZXQiLCJzY3JvbGxUb1RhcmdldCIsImhlYWRlck9mZnNldCIsInRhcmdldElkIiwic2Nyb2xsVG8iLCJfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcyIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcyIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfdGltZW91dCIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplIiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl9zaG93U291cmNlIiwibWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIiLCJtcSIsIm1hdGNoTWVkaWEiLCJtcTIiLCJzb3VyY2UiLCJvcmllbnRhdGlvbiIsIm1heFdpZHRoIiwiTnVtYmVyIiwiY3VycmVudE9yaWVudGF0aW9uIiwiY3VycmVudFdpZHRoIiwiZGF0YVNyYyIsImNhbGxiYWNrIiwiZXZlbnRCdWJibGluZyIsImFkZExpc3RlbmVyIiwibWF0Y2hNZWRpYVJlbW92ZUV2ZW50TGlzdGVuZXIiLCJyZW1vdmVMaXN0ZW5lciIsImRpYWxvZ1BvbHlmaWxsIiwiZGlzYWJsZUJvZHlTY3JvbGwiLCJlbmFibGVCb2R5U2Nyb2xsIiwidG9DYW1lbENhc2UiLCJEaWFsb2ciLCJfaXNPcGVuIiwiX3RyYW5zaXRpb25UaW1lIiwiaXNPcGVuIiwiY2FtZWxEYXRhQXR0cmlidXRlIiwiZGF0YUF0dHJpYnV0ZSIsInJlcGxhY2UiLCJ0cmFuc2l0aW9uVGltZSIsImdldFRyYW5zaXRpb25UaW1lIiwicG9seWZpbGxEaWFsb2ciLCJvcGVuIiwiY2xvc2VCdXR0b25zIiwiY2xvc2UiLCJvdXRzaWRlQ2xpY2siLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpY2tlZEluRGlhbG9nIiwidG9wIiwiY2xpZW50WSIsImhlaWdodCIsImxlZnQiLCJjbGllbnRYIiwic2hvd01vZGFsIiwiY2xhc3NlcyIsImNsb3NlZCIsInN0eWxlcyIsInRyYW5zaXRpb25EdXJhdGlvbiIsImR1cmF0aW9uIiwiaW5kZXhPZiIsInBhcnNlRmxvYXQiLCJyZWdpc3RlckRpYWxvZyIsIlBvcHVwIiwicGF0aCIsInBhdGhuYW1lIiwicG9wdXAiLCJvcGVuUG9wdXAiLCJkb21haW5Ecm9wZG93biIsImpzb24iLCJvcHRpb25WYWx1ZXMiLCJzdGF5RG9tYWluQnV0dG9uIiwib3RoZXJEb21haW5CdXR0b25zIiwic3VibWl0RG9tYWluQnV0dG9uIiwiQ3VzdG9tRXZlbnQiLCJvdGhlckRvbWFpbkJ1dHRvbiIsImNvbnRhaW5lcnMiLCJjb250YWluZXIiLCJzZWxlY3RlZFZhbHVlIiwibWFwcGluZyIsInVybCIsIlVSTCIsInBvcHVwSUQiLCJ0ZW1wbGF0ZSIsIkhUTUxBbmNob3JFbGVtZW50IiwiZW1pdCIsInBvcHVwSW5zdGFuY2UiLCJvcGVuRXZlbnQiLCJwb3B1cExpbmtzIiwiaGFuZGxlQ3JlYXRpb25FdmVudCIsInJpZ2h0Iiwib3BlblNpZGVQYW5lbCIsInBhbmVsSUQiLCJwYW5lbCIsInNpZGVQYW5lbEluc3RhbmNlIiwidG9nZ2xlRXZlbnQiLCJwYW5lbExpbmtzIiwiYm9keUVsZW1lbnQiLCJzY3JvbGxQb3NpdGlvbiIsInBhZ2VZT2Zmc2V0Iiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEJlaGF2aW9yIiwibmFtZSIsImNvb2tpZSIsInNwbGl0IiwiZmluZCIsInJvdyIsInN0YXJ0c1dpdGgiLCJjb29raWVPcHRpb25zIiwiT2JqZWN0IiwiYXNzaWduIiwidXBkYXRlZENvb2tpZSIsIm9wdGlvbktleSIsIm9wdGlvblZhbHVlIiwiaXNEYXRlVmFsaWQiLCJkYXRlIiwiaXNOYU4iLCJnZXRUaW1lIiwiZm9ybWF0RGF0ZSIsImRheSIsImZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyIsImdldERhdGUiLCJtb250aCIsImdldE1vbnRoIiwiZ2V0RnVsbFllYXIiLCJudW1iZXIiLCJTdHJpbmciLCJwYWRTdGFydCIsImdldEZ1bGxNb250aE5hbWUiLCJsb2NhbGUiLCJ0b0xvY2FsZVN0cmluZyIsInBhcnNlU3RyaW5nQXNIdG1sIiwiZG9tUGFyc2VyIiwiRE9NUGFyc2VyIiwicGFyc2VkIiwicGFyc2VGcm9tU3RyaW5nIiwiZ2V0QWJzb2x1dGVIZWlnaHQiLCJtYXJnaW4iLCJtYXJnaW5Ub3AiLCJtYXJnaW5Cb3R0b20iLCJNYXRoIiwiY2VpbCIsIm9mZnNldEhlaWdodCIsInBhdGhOYW1lIiwiZm9ybWF0dGVkUGF0aE5hbWUiLCJzdHJpcFRyYWlsaW5nU2xhc2giLCJmdWxsVXJsIiwiZm9ybWF0dGVkVXJsIiwiYW5jaG9ycyIsInN0ciIsImVuZHNXaXRoIiwibG9hZGVkIiwibG9vcFRocm91Z2hFbGVtZW50cyIsImluc2VydFJlY2FwdGNoYVNjcmlwdCIsImhlYWQiLCJnZXRFbGVtZW50c0J5VGFnTmFtZSIsInNjcmlwdCIsImFkZEV2ZW50IiwiZXZ0IiwiZGVmYXVsdE9mZnNldCIsImJvZHlUb3BQb3NpdGlvbiIsImVsZW1lbnRQb3NpdGlvbiIsIm9mZnNldCIsImhlYWRlciIsImNsaWVudEhlaWdodCIsIm9mZnNldFBvc2l0aW9uIiwiYmVoYXZpb3IiLCJtYXRjaCIsImNociIsInRvVXBwZXJDYXNlIiwidG9UaXRsZUNhc2UiLCJ0eHQiLCJjaGFyQXQiLCJzdWJzdHIiLCJ0b0xvd2VyQ2FzZSIsImZvcm1Sb3ciLCJmb3JtUm93UGFyZW50IiwidmFsaWRhdGlvbkVsZW1lbnQiLCJ0ZXh0Q29udGVudCIsImluc2VydEJlZm9yZSIsImdyYW5kcGFyZW50IiwiZXhpc3RpbmdWYWxpZGF0aW9ucyIsInYiLCJfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzIiwiX0N1cnRhaW5FbGVtZW50X3N1bW1hcnkiLCJfQ3VydGFpbkVsZW1lbnRfY29udGVudCIsIl9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmciLCJfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uIiwiX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrIiwiX0N1cnRhaW5FbGVtZW50X29wZW4iLCJfQ3VydGFpbkVsZW1lbnRfZXhwYW5kIiwiX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoIiwiX0FjY29yZGlvbkVsZW1lbnRfaW5zdGFuY2VzIiwiX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMiLCJfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMiLCJDdXJ0YWluRWxlbWVudCIsIkhUTUxEZXRhaWxzRWxlbWVudCIsInN0b3BQcm9wYWdhdGlvbiIsImhhc0F0dHJpYnV0ZSIsImNvbm5lY3RlZENhbGxiYWNrIiwiY2FwdHVyZSIsInBhc3NpdmUiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsInN0YXJ0SGVpZ2h0IiwiZW5kSGVpZ2h0IiwiY2FuY2VsIiwiYW5pbWF0ZSIsImVhc2luZyIsIm9uZmluaXNoIiwib25jYW5jZWwiLCJyZXF1ZXN0QW5pbWF0aW9uRnJhbWUiLCJBY2NvcmRpb25FbGVtZW50IiwiSFRNTEVsZW1lbnQiLCJvdGhlckN1cnRhaW5zIiwiZmlsdGVyIiwiYyIsIm90aGVyQ3VydGFpbiIsImN1cnRhaW5FbGVtZW50IiwiX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMiLCJfQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbiIsIl9CaXJ0aGRheUZvcm1fZGF5RmllbGQiLCJfQmlydGhkYXlGb3JtX21vbnRoRmllbGQiLCJfQmlydGhkYXlGb3JtX2dldERheVZhbHVlcyIsIl9CaXJ0aGRheUZvcm1fZ2V0TW9udGhWYWx1ZXMiLCJfQmlydGhkYXlGb3JtX29uU3VibWl0IiwiX0JpcnRoZGF5Rm9ybV9vblN1Y2Nlc3MiLCJfQmlydGhkYXlGb3JtX29uRmFpbHVyZSIsIkJpcnRoZGF5Rm9ybSIsIkhUTUxGb3JtRWxlbWVudCIsInJldHVyblZhbHVlIiwibnVtIiwiRGF0ZSIsIm1vbnRoTmFtZSIsInllYXIiLCJibG9jayIsImNvbXBsZXRlZCIsIl9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzIiwiX0Nhcm91c2VsRWxlbWVudF9pdGVtcyIsIl9DYXJvdXNlbEVsZW1lbnRfbGlzdCIsIl9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbiIsIl9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbiIsIl9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCIsIl9DYXJvdXNlbEVsZW1lbnRfY291bnRlciIsIl9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwiLCJfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQiLCJfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlIiwiX0Nhcm91c2VsRWxlbWVudF9nZXRUcmFuc2xhdGVYIiwiX0Nhcm91c2VsRWxlbWVudF9nZXRJdGVtV2lkdGgiLCJDYXJvdXNlbEVsZW1lbnQiLCJhY3RpdmUiLCJjb21wb25lbnRDaGVjayIsInNldHVwIiwiZGVpbml0aWFsaXplIiwiY2xlYXJJbnRlcnZhbCIsInNldEludGVydmFsIiwiaXRlbXNTaG93biIsImluY3JlbWVudCIsInRyYW5zZm9ybSIsImNvdW50IiwibW9udGhXaWR0aCIsIml0ZW1XaWR0aCIsImdyaWRHYXAiLCJwYXJzZUludCIsImNvbHVtbkdhcCIsIl9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMiLCJfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQiLCJfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGRMYWJlbCIsIl9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkIiwiX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcyIsIl9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlIiwiX0xhdmFuZHJlU2VsZWN0X25hbWUiLCJfTGF2YW5kcmVTZWxlY3RfcGxhY2Vob2xkZXIiLCJfTGF2YW5kcmVTZWxlY3RfaWQiLCJfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIiLCJfTGF2YW5kcmVTZWxlY3RfdXBkYXRlIiwiX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbiIsIl9MYXZhbmRyZVNlbGVjdF9maWx0ZXIiLCJfTGF2YW5kcmVTZWxlY3Rfc2hvd0Ryb3Bkb3duIiwiX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93biIsIkxhdmFuZHJlU2VsZWN0IiwicGxhY2Vob2xkZXIiLCJnZXRBdHRyaWJ1dGUiLCJhdXRvY2FwaXRhbGl6ZSIsImF1dG9jb21wbGV0ZSIsImh0bWxGb3IiLCJoaWRkZW4iLCJrZXlzIiwia2V5Iiwib3B0aW9uIiwiZmlyc3RPcHRpb24iLCJfU2lnbnVwQmxvY2tfaW5zdGFuY2VzIiwiX1NpZ251cEJsb2NrX3RlbXBsYXRlIiwiX1NpZ251cEJsb2NrX292ZXJsYXkiLCJfU2lnbnVwQmxvY2tfaHJlZiIsIl9TaWdudXBCbG9ja19wb2ludHMiLCJfU2lnbnVwQmxvY2tfdHlwZSIsIl9TaWdudXBCbG9ja19jb21wbGV0ZWQiLCJfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeSIsIl9TaWdudXBCbG9ja19tcSIsIl9TaWdudXBCbG9ja19pc01vYmlsZSIsIl9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlIiwiX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlIiwiX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyIiwiX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyIiwiX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciIsIl9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMiLCJfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGUiLCJTaWdudXBCbG9jayIsIkhUTUxMSUVsZW1lbnQiLCJwb2ludHMiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicG9vbCIsInRpdGxlcyIsInRpdGxlIiwiY2xvc2VPdmVybGF5QnV0dG9uIiwidHlwZVRlbXBsYXRlIiwiX0xhdmFuZHJlQnV0dG9uX2lzRGlzYWJsZWQiLCJIVE1MQnV0dG9uRWxlbWVudCIsImNsaWNrSGFuZGxlciIsImxhYmVsIiwic2l6ZSIsInByaW1hcnkiLCJib29sIiwib3V0bGluZSIsImZ1bGxXaWR0aCIsImxvYWRpbmciLCJpc0Rpc2FibGVkIl0sInNvdXJjZVJvb3QiOiIifQ==