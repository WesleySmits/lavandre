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
/* harmony import */ var _ui_SidePanel__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./ui/SidePanel */ "./assets/js/ui/SidePanel.ts");
/* harmony import */ var _util_links__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./util/links */ "./assets/js/util/links.ts");
/* harmony import */ var _web_components_AccordionElement__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./web-components/AccordionElement */ "./assets/js/web-components/AccordionElement.ts");
/* harmony import */ var _web_components_BirthdayForm__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./web-components/BirthdayForm */ "./assets/js/web-components/BirthdayForm.ts");
/* harmony import */ var _web_components_button_LavandreButton__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./web-components/button/LavandreButton */ "./assets/js/web-components/button/LavandreButton.ts");
/* harmony import */ var _web_components_CarouselElement__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./web-components/CarouselElement */ "./assets/js/web-components/CarouselElement.ts");
/* harmony import */ var _web_components_LavandreSelect__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./web-components/LavandreSelect */ "./assets/js/web-components/LavandreSelect.ts");
/* harmony import */ var _web_components_SignupBlock__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./web-components/SignupBlock */ "./assets/js/web-components/SignupBlock.ts");





























class App extends _Module__WEBPACK_IMPORTED_MODULE_20__["default"] {
  constructor() {
    super(...arguments);
    this.eventEmitter = _common_EventEmitter__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.components = [_components_CookieBar__WEBPACK_IMPORTED_MODULE_5__["default"], _ui_SidePanel__WEBPACK_IMPORTED_MODULE_21__["default"], _components_Curtain__WEBPACK_IMPORTED_MODULE_7__["default"], _components_InfoPopup__WEBPACK_IMPORTED_MODULE_13__["default"], _components_PasswordReveal__WEBPACK_IMPORTED_MODULE_16__["default"], _components_EmailValidation__WEBPACK_IMPORTED_MODULE_8__["default"], _components_NewsletterSubscribe__WEBPACK_IMPORTED_MODULE_15__["default"], _components_ForgotPassword__WEBPACK_IMPORTED_MODULE_10__["default"], _components_ForgotPasswordToggle__WEBPACK_IMPORTED_MODULE_11__["default"], _components_AjaxLogin__WEBPACK_IMPORTED_MODULE_3__["default"], _components_AjaxRegister__WEBPACK_IMPORTED_MODULE_4__["default"], _components_FieldValidation__WEBPACK_IMPORTED_MODULE_9__["default"], _components_HeaderSearch__WEBPACK_IMPORTED_MODULE_12__["default"], _components_LazyLoader__WEBPACK_IMPORTED_MODULE_14__["default"], _components_ScrollToContent__WEBPACK_IMPORTED_MODULE_18__["default"], _components_VideoMediaResolver__WEBPACK_IMPORTED_MODULE_19__["default"], _components_RedeemPointsForCoupon__WEBPACK_IMPORTED_MODULE_17__["default"], _components_CopyCoupon__WEBPACK_IMPORTED_MODULE_6__["default"]];
  }

  initialize() {
    super.initialize();
    (0,_util_links__WEBPACK_IMPORTED_MODULE_22__.setCurrentLinkClass)();
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

if (_web_components_button_LavandreButton__WEBPACK_IMPORTED_MODULE_25__["default"]) {
  window.customElements.define('lavandre-button', _web_components_button_LavandreButton__WEBPACK_IMPORTED_MODULE_25__["default"], {
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
    returnValue[i] = num;
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

var _LavandreSelect_instances, _LavandreSelect_searchField, _LavandreSelect_dropdownField, _LavandreSelect_optionValues, _LavandreSelect_selectedValue, _LavandreSelect_name, _LavandreSelect_outsideClickListener, _LavandreSelect_update, _LavandreSelect_selectOption, _LavandreSelect_filter, _LavandreSelect_showDropdown, _LavandreSelect_hideDropdown;


class LavandreSelect extends HTMLElement {
  constructor() {
    super();

    _LavandreSelect_instances.add(this);

    _LavandreSelect_searchField.set(this, void 0);

    _LavandreSelect_dropdownField.set(this, void 0);

    _LavandreSelect_optionValues.set(this, {});

    _LavandreSelect_selectedValue.set(this, '');

    _LavandreSelect_name.set(this, this.getAttribute('name') || '');

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
    this.appendChild(__classPrivateFieldGet(this, _LavandreSelect_searchField, "f"));

    __classPrivateFieldSet(this, _LavandreSelect_dropdownField, document.createElement('UL'), "f");

    __classPrivateFieldGet(this, _LavandreSelect_dropdownField, "f").hidden = true;

    __classPrivateFieldGet(this, _LavandreSelect_dropdownField, "f").classList.add('lavandre-select__dropdown');

    this.appendChild(__classPrivateFieldGet(this, _LavandreSelect_dropdownField, "f"));
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
_LavandreSelect_searchField = new WeakMap(), _LavandreSelect_dropdownField = new WeakMap(), _LavandreSelect_optionValues = new WeakMap(), _LavandreSelect_selectedValue = new WeakMap(), _LavandreSelect_name = new WeakMap(), _LavandreSelect_outsideClickListener = new WeakMap(), _LavandreSelect_instances = new WeakSet(), _LavandreSelect_update = function _LavandreSelect_update() {
  Object.keys(__classPrivateFieldGet(this, _LavandreSelect_optionValues, "f")).forEach(key => {
    const option = document.createElement('li');
    option.addEventListener('click', __classPrivateFieldGet(this, _LavandreSelect_instances, "m", _LavandreSelect_selectOption).bind(this));
    option.classList.add('lavandre-select__dropdown__item');
    const value = (0,_util_dateHelper__WEBPACK_IMPORTED_MODULE_0__.formatNumberWithLeadingZero)(__classPrivateFieldGet(this, _LavandreSelect_optionValues, "f")[key]).toString();
    option.dataset.value = value;
    option.innerText = value.replace(/^0+/, '');

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

class LavandreButton extends HTMLButtonElement {
  constructor() {
    super();

    this.clickHandler = event => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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SDs7QUFDWSxNQUFUb2YsU0FBUyxHQUFHO0FBQ1osV0FBTyxLQUFLMUgsWUFBTCxDQUFrQixTQUFsQixDQUFQO0FBQ0g7O0FBQ1ksTUFBVDBILFNBQVMsQ0FBQ0YsSUFBRCxFQUFPO0FBQ2hCLFFBQUksQ0FBQ0EsSUFBTCxFQUFXO0FBQ1A7QUFDSDs7QUFDRCxTQUFLempCLFlBQUwsQ0FBa0IsWUFBbEIsRUFBZ0N5akIsSUFBSSxDQUFDbGYsUUFBTCxFQUFoQztBQUNIOztBQUNVLE1BQVBxZixPQUFPLEdBQUc7QUFDVixXQUFPLEtBQUszSCxZQUFMLENBQWtCLFNBQWxCLENBQVA7QUFDSDs7QUFDVSxNQUFQMkgsT0FBTyxDQUFDSCxJQUFELEVBQU87QUFDZCxRQUFJLENBQUNBLElBQUwsRUFBVztBQUNQO0FBQ0g7O0FBQ0QsU0FBS3pqQixZQUFMLENBQWtCLFNBQWxCLEVBQTZCeWpCLElBQUksQ0FBQ2xmLFFBQUwsRUFBN0I7QUFDSDs7QUFDRDJYLEVBQUFBLGlCQUFpQixHQUFHO0FBQ2hCLFFBQUksS0FBS3pXLElBQVQsRUFBZTtBQUNYLFdBQUszRSxnQkFBTCxDQUFzQixPQUF0QixFQUErQixLQUFLdWlCLFlBQXBDO0FBQ0g7QUFDSjs7QUFDRGhILEVBQUFBLG9CQUFvQixHQUFHO0FBQ25CLFFBQUksS0FBSzVXLElBQVQsRUFBZTtBQUNYLFdBQUttRixtQkFBTCxDQUF5QixPQUF6QixFQUFrQyxLQUFLeVksWUFBdkM7QUFDSDtBQUNKOztBQXJFeUQ7Ozs7Ozs7Ozs7O0FDRDlEOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvTW9kdWxlLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2FwcC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21tb24vRGF0YUxheWVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheExvZ2luLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheFJlZ2lzdGVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29uZmlybVZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9Db29raWVCYXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9Db3B5Q291cG9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ3VydGFpbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VtYWlsVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmRUb2dnbGUudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9IZWFkZXJTZWFyY2gudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9JbmZvUG9wdXAudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9MYXp5TG9hZGVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTmV3c2xldHRlclN1YnNjcmliZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Bhc3N3b3JkUmV2ZWFsLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVkZWVtUG9pbnRzRm9yQ291cG9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2Nyb2xsVG9Db250ZW50LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9NZWRpYVJlc29sdmVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3BvbHlmaWxscy9tYXRjaE1lZGlhLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9TaWRlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9ib2R5LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvY29va2llcy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2RhdGVIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9kb20udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9lbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9saW5rcy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2xvYWRSZWNhcHRjaGEudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9zY3JvbGxUb1RhcmdldC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL3N0cmluZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvQWNjb3JkaW9uRWxlbWVudC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy93ZWItY29tcG9uZW50cy9CaXJ0aGRheUZvcm0udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvQ2Fyb3VzZWxFbGVtZW50LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0xhdmFuZHJlU2VsZWN0LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL1NpZ251cEJsb2NrLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL2J1dHRvbi9MYXZhbmRyZUJ1dHRvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvYXBwLnBjc3MiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX2FjY29yZGlvbi5wY3NzP2RjYTYiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX2Nvb2tpZS1iYXIucGNzcz9jNGQyIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19jdXJ0YWluLnBjc3M/ZmFkMyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9faW5mb1BvcHVwLnBjc3M/NjE2MCIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fc2lkZVBhbmVsLnBjc3M/NjYyYiIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy93ZWItY29tcG9uZW50cy9idXR0b24vc3R5bGUucGNzcz81MzUxIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0ICcuL2NhcnQnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIub24oJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudHMoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb21wb25lbnQub25Jbml0KHNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICdAdW5nYXAvY3VzdG9tLWVsZW1lbnRzJztcbmltcG9ydCAnLi4vY3NzL2FwcC5wY3NzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmltcG9ydCBBamF4TG9naW4gZnJvbSAnLi9jb21wb25lbnRzL0FqYXhMb2dpbic7XG5pbXBvcnQgQWpheFJlZ2lzdGVyIGZyb20gJy4vY29tcG9uZW50cy9BamF4UmVnaXN0ZXInO1xuaW1wb3J0IENvb2tpZUJhciBmcm9tICcuL2NvbXBvbmVudHMvQ29va2llQmFyJztcbmltcG9ydCBDb3B5Q291cG9uIGZyb20gJy4vY29tcG9uZW50cy9Db3B5Q291cG9uJztcbmltcG9ydCBDdXJ0YWluIGZyb20gJy4vY29tcG9uZW50cy9DdXJ0YWluJztcbmltcG9ydCBFbWFpbFZhbGlkYXRpb24gZnJvbSAnLi9jb21wb25lbnRzL0VtYWlsVmFsaWRhdGlvbic7XG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9GaWVsZFZhbGlkYXRpb24nO1xuaW1wb3J0IEZvcmdvdFBhc3N3b3JkIGZyb20gJy4vY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZCc7XG5pbXBvcnQgRm9yZ290UGFzc3dvcmRUb2dnbGUgZnJvbSAnLi9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkVG9nZ2xlJztcbmltcG9ydCBIZWFkZXJTZWFyY2ggZnJvbSAnLi9jb21wb25lbnRzL0hlYWRlclNlYXJjaCc7XG5pbXBvcnQgSW5mb1BvcHVwIGZyb20gJy4vY29tcG9uZW50cy9JbmZvUG9wdXAnO1xuaW1wb3J0IExhenlMb2FkZXIgZnJvbSAnLi9jb21wb25lbnRzL0xhenlMb2FkZXInO1xuaW1wb3J0IE5ld3NsZXR0ZXJTdWJzY3JpYmUgZnJvbSAnLi9jb21wb25lbnRzL05ld3NsZXR0ZXJTdWJzY3JpYmUnO1xuaW1wb3J0IFBhc3N3b3JkUmV2ZWFsIGZyb20gJy4vY29tcG9uZW50cy9QYXNzd29yZFJldmVhbCc7XG5pbXBvcnQgUmVkZWVtUG9pbnRzRm9yQ291cG9uIGZyb20gJy4vY29tcG9uZW50cy9SZWRlZW1Qb2ludHNGb3JDb3Vwb24nO1xuaW1wb3J0IFNjcm9sbFRvQ29udGVudCBmcm9tICcuL2NvbXBvbmVudHMvU2Nyb2xsVG9Db250ZW50JztcbmltcG9ydCBWaWRlb01lZGlhUmVzb2x2ZXIgZnJvbSAnLi9jb21wb25lbnRzL1ZpZGVvTWVkaWFSZXNvbHZlcic7XG5pbXBvcnQgTW9kdWxlIGZyb20gJy4vTW9kdWxlJztcbmltcG9ydCBTaWRlUGFuZWwgZnJvbSAnLi91aS9TaWRlUGFuZWwnO1xuaW1wb3J0IHsgc2V0Q3VycmVudExpbmtDbGFzcyB9IGZyb20gJy4vdXRpbC9saW5rcyc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvQWNjb3JkaW9uRWxlbWVudCc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvQmlydGhkYXlGb3JtJztcbmltcG9ydCBMYXZhbmRyZUJ1dHRvbiBmcm9tICcuL3dlYi1jb21wb25lbnRzL2J1dHRvbi9MYXZhbmRyZUJ1dHRvbic7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvQ2Fyb3VzZWxFbGVtZW50JztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9MYXZhbmRyZVNlbGVjdCc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvU2lnbnVwQmxvY2snO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIENvb2tpZUJhcixcbiAgICAgICAgICAgIFNpZGVQYW5lbCxcbiAgICAgICAgICAgIEN1cnRhaW4sXG4gICAgICAgICAgICBJbmZvUG9wdXAsXG4gICAgICAgICAgICBQYXNzd29yZFJldmVhbCxcbiAgICAgICAgICAgIEVtYWlsVmFsaWRhdGlvbixcbiAgICAgICAgICAgIE5ld3NsZXR0ZXJTdWJzY3JpYmUsXG4gICAgICAgICAgICBGb3Jnb3RQYXNzd29yZCxcbiAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkVG9nZ2xlLFxuICAgICAgICAgICAgQWpheExvZ2luLFxuICAgICAgICAgICAgQWpheFJlZ2lzdGVyLFxuICAgICAgICAgICAgRmllbGRWYWxpZGF0aW9uLFxuICAgICAgICAgICAgSGVhZGVyU2VhcmNoLFxuICAgICAgICAgICAgTGF6eUxvYWRlcixcbiAgICAgICAgICAgIFNjcm9sbFRvQ29udGVudCxcbiAgICAgICAgICAgIFZpZGVvTWVkaWFSZXNvbHZlcixcbiAgICAgICAgICAgIFJlZGVlbVBvaW50c0ZvckNvdXBvbixcbiAgICAgICAgICAgIENvcHlDb3Vwb25cbiAgICAgICAgXTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBzZXRDdXJyZW50TGlua0NsYXNzKCk7XG4gICAgICAgIGNvbnN0IHdwRm9ybXNTdWJtaXRCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIndwZm9ybXNbc3VibWl0XVwiXScpKTtcbiAgICAgICAgd3BGb3Jtc1N1Ym1pdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaXMnLCAnbGF2YW5kcmUtYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdzaXplJywgJ2xhcmdlJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdmdWxsLXdpZHRoJywgJ2xhcmdlJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdvdXRsaW5lJywgJ3RydWUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuKGZ1bmN0aW9uIGFwcEluaXQoKSB7XG4gICAgY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuICAgIGFwcC5pbml0aWFsaXplKCk7XG4gICAgbGF6eUJhY2tncm91bmRzKCk7XG4gICAgZm9vdGVyVXNwU2xpZGVyKCk7XG59KSgpO1xuZnVuY3Rpb24gZm9vdGVyVXNwU2xpZGVyKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzcC1zbGlkZXInKTtcbiAgICAgICAgaWYgKCFsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnVzcC1zbGlkZXJfX2l0ZW0nKSk7XG4gICAgICAgIGxldCB0b3RhbFdpZHRoID0gMDtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdG90YWxXaWR0aCArPSBpdGVtLmNsaWVudFdpZHRoO1xuICAgICAgICB9KTtcbiAgICAgICAgbGlzdC5zdHlsZS53aWR0aCA9IGAke3RvdGFsV2lkdGh9cHhgO1xuICAgIH0sIDMwMCk7XG59XG5mdW5jdGlvbiBsYXp5QmFja2dyb3VuZHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgbGF6eUJhY2tncm91bmRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eS1iYWNrZ3JvdW5kJykpO1xuICAgICAgICBpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhenlCYWNrZ3JvdW5kT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5QmFja2dyb3VuZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxhenlCYWNrZ3JvdW5kcy5mb3JFYWNoKChsYXp5QmFja2dyb3VuZCkgPT4ge1xuICAgICAgICAgICAgICAgIGxhenlCYWNrZ3JvdW5kT2JzZXJ2ZXIub2JzZXJ2ZShsYXp5QmFja2dyb3VuZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuaWYgKExhdmFuZHJlQnV0dG9uKSB7XG4gICAgd2luZG93LmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGF2YW5kcmUtYnV0dG9uJywgTGF2YW5kcmVCdXR0b24sIHsgZXh0ZW5kczogJ2J1dHRvbicgfSk7XG59XG4iLCJjbGFzcyBEYXRhTGF5ZXIge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmRhdGFMYXllciA9IHdpbmRvdy5kYXRhTGF5ZXIgPyB3aW5kb3cuZGF0YUxheWVyIDogW107XG4gICAgfVxuICAgIHB1c2goZGF0YSkge1xuICAgICAgICB0aGlzLmRhdGFMYXllci5wdXNoKHsgZWNvbW1lcmNlOiBudWxsIH0pOyAvLyBDbGVhciB0aGUgcHJldmlvdXMgZWNvbW1lcmNlIG9iamVjdC5cbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICB9XG59XG5leHBvcnQgeyBEYXRhTGF5ZXIgfTtcbmV4cG9ydCBkZWZhdWx0IG5ldyBEYXRhTGF5ZXIoKTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gJy4uL2NvbW1vbi9EYXRhTGF5ZXInO1xuaW1wb3J0IHsgbG9hZFJlY2FwdGNoYSwgc2l0ZWtleSB9IGZyb20gJy4uL3V0aWwvbG9hZFJlY2FwdGNoYSc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCB7IHNldFZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSAnLi4vdXRpbC92YWxpZGF0aW9uJztcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi9GaWVsZFZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheExvZ2luIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmZvcm0gPSBmb3JtO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgICAgIC8vIExvYWQgcmVjYXB0Y2hhXG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgaWYgKCF3aW5kb3cuQ3lwcmVzcykge1xuICAgICAgICAgICAgbG9hZFJlY2FwdGNoYShmaWVsZHMpO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRmllbGRWYWxpZGF0aW9uKGZpZWxkKTtcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5tYXRjaGVzKCc6LXdlYmtpdC1hdXRvZmlsbCcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdpbnB1dCcpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LCAxMDApO1xuICAgICAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzdWJtaXRcIl0nKTtcbiAgICAgICAgaWYgKHN1Ym1pdEJ1dHRvbiA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHN1Ym1pdEJ1dHRvbi50eXBlID0gJ2J1dHRvbic7XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXQoZXZlbnQsIGZpZWxkcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBzdWJtaXRCdXR0b24gPT09IG51bGwgfHwgc3VibWl0QnV0dG9uID09PSB2b2lkIDAgPyB2b2lkIDAgOiBzdWJtaXRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25TdWJtaXQoZXZlbnQsIGZpZWxkcyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Ym1pdChldmVudCwgZmllbGRzKSB7XG4gICAgICAgIHZhciBfYSwgX2I7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGxldCB2YWxpZCA9IHRydWU7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgdmFsaWQgPSBmaWVsZC52YWxpZGl0eS52YWxpZDtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXZhbGlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgY29uc3QgdXNlcm5hbWUgPSAoKF9hID0gZm9ybURhdGEuZ2V0KCd1c2VybmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkID0gKChfYiA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBpZiAoIXVzZXJuYW1lIHx8ICFwYXNzd29yZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgeyBncmVjYXB0Y2hhIH0gPSB3aW5kb3c7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhsb2dpbicsXG4gICAgICAgICAgICByZWNhcHRjaGFUb2tlbjogJycsXG4gICAgICAgICAgICB1c2VybmFtZSxcbiAgICAgICAgICAgIHBhc3N3b3JkXG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cImJ1dHRvblwiXVtuYW1lPVwibG9naW5cIl0nKSB8fFxuICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICghd2luZG93LkN5cHJlc3MpIHtcbiAgICAgICAgICAgIGdyZWNhcHRjaGEucmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgIGdyZWNhcHRjaGEuZXhlY3V0ZShzaXRla2V5LCB7IGFjdGlvbjogJ0FqYXhMb2dpbicgfSkudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZGF0YS5yZWNhcHRjaGFUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJidXR0b25cIl1bbmFtZT1cImxvZ2luXCJdJykgfHwgdW5kZWZpbmVkO1xuICAgICAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzb21ldGhpbmcgaXMgd3JvbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgZXZlbnQ6ICdsb2dpbicsXG4gICAgICAgICAgICBtZXRob2Q6ICdBamF4TG9naW4nXG4gICAgICAgIH07XG4gICAgICAgIERhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgICAgICBjb25zdCBocmVmID0gdGhpcy5mb3JtLmRhdGFzZXQucmVkaXJlY3RVcmwgfHwgJy9teS1hY2NvdW50Lyc7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICB9XG4gICAgb25GYWlsdXJlKHJlcykge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IEpTT04ucGFyc2UocmVzKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IHJlc3BvbnNlLmRhdGEgfHxcbiAgICAgICAgICAgICdUaGlzIGNvbWJpbmF0aW9uIG9mIGVtYWlsIGFuZCBwYXNzd29yZCBpcyBub3Qga25vd24gdG8gdXMuIFBsZWFzZSB0cnkgYWdhaW4gb3IgcmVxdWVzdCBhIG5ldyBwYXNzd29yZC4nO1xuICAgICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShtZXNzYWdlLCB0aGlzLmZvcm0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgbG9naW5Gb3JtcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnI2FqYXgtbG9naW4tZm9ybScpKTtcbiAgICAgICAgaWYgKGxvZ2luRm9ybXMubGVuZ3RoID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgbG9naW5Gb3Jtcy5mb3JFYWNoKChmb3JtKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhamF4TG9naW4gPSBuZXcgQWpheExvZ2luKGZvcm0pO1xuICAgICAgICAgICAgYWpheExvZ2luLmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBEYXRhTGF5ZXIgZnJvbSAnLi4vY29tbW9uL0RhdGFMYXllcic7XG5pbXBvcnQgeyBsb2FkUmVjYXB0Y2hhLCBzaXRla2V5IH0gZnJvbSAnLi4vdXRpbC9sb2FkUmVjYXB0Y2hhJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IENvbmZpcm1WYWxpZGF0aW9uIGZyb20gJy4vQ29uZmlybVZhbGlkYXRpb24nO1xuaW1wb3J0IEVtYWlsVmFsaWRhdGlvbiBmcm9tICcuL0VtYWlsVmFsaWRhdGlvbic7XG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4vRmllbGRWYWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhSZWdpc3RlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGVtYWlsRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cImVtYWlsXCJdJyk7XG4gICAgICAgIGlmIChlbWFpbEZpZWxkICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCBlbWFpbFZhbGlkYXRpb24gPSBuZXcgRW1haWxWYWxpZGF0aW9uKGVtYWlsRmllbGQpO1xuICAgICAgICAgICAgZW1haWxWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBwYXNzd29yZEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJyNyZWdpc3Rlci1wYXNzd29yZCcpO1xuICAgICAgICBjb25zdCBjb25maXJtUGFzc3dvcmRGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcjY29uZmlybS1wYXNzd29yZCcpO1xuICAgICAgICBpZiAocGFzc3dvcmRGaWVsZCAmJiBjb25maXJtUGFzc3dvcmRGaWVsZCkge1xuICAgICAgICAgICAgY29uc3QgY29uZmlybVZhbGlkYXRpb24gPSBuZXcgQ29uZmlybVZhbGlkYXRpb24ocGFzc3dvcmRGaWVsZCwgY29uZmlybVBhc3N3b3JkRmllbGQpO1xuICAgICAgICAgICAgY29uZmlybVZhbGlkYXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgICAgICAvLyBMb2FkIHJlY2FwdGNoYVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICghd2luZG93LkN5cHJlc3MpIHtcbiAgICAgICAgICAgIGxvYWRSZWNhcHRjaGEoZmllbGRzKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZpZWxkVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICB2YWxpZGF0b3IuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZm9ybS5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIHZhciBfYSwgX2IsIF9jLCBfZDtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgICAgICBjb25zdCBmaWVsZCA9IGZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgICAgICB2YWxpZCA9IGZpZWxkLnZhbGlkaXR5LnZhbGlkO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9ICgoX2IgPSBmb3JtRGF0YS5nZXQoJ2ZpcnN0X25hbWUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgbGFzdE5hbWUgPSAoKF9jID0gZm9ybURhdGEuZ2V0KCdsYXN0X25hbWUnKSkgPT09IG51bGwgfHwgX2MgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9jLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgcGFzc3dvcmQgPSAoKF9kID0gZm9ybURhdGEuZ2V0KCdwYXNzd29yZCcpKSA9PT0gbnVsbCB8fCBfZCA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2QudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBpZiAoIWVtYWlsIHx8ICFwYXNzd29yZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbnN0IHsgZ3JlY2FwdGNoYSB9ID0gd2luZG93O1xuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhamF4cmVnaXN0ZXInLFxuICAgICAgICAgICAgICAgIHJlY2FwdGNoYVRva2VuOiAnJyxcbiAgICAgICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgICAgICBwYXNzd29yZCxcbiAgICAgICAgICAgICAgICBmaXJzdF9uYW1lOiBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdF9uYW1lOiBsYXN0TmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIGNvbnN0IHN1Ym1pdEJ1dHRvbiA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdidXR0b25bdHlwZT1cInN1Ym1pdFwiXScpIHx8XG4gICAgICAgICAgICAgICAgdW5kZWZpbmVkO1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgaWYgKCF3aW5kb3cuQ3lwcmVzcykge1xuICAgICAgICAgICAgICAgIGdyZWNhcHRjaGEucmVhZHkoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBncmVjYXB0Y2hhXG4gICAgICAgICAgICAgICAgICAgICAgICAuZXhlY3V0ZShzaXRla2V5LCB7IGFjdGlvbjogJ0FqYXhSZWdpc3RlcicgfSlcbiAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKCh0b2tlbikgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgZGF0YS5yZWNhcHRjaGFUb2tlbiA9IHRva2VuO1xuICAgICAgICAgICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB1bmRlZmluZWQsIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdW5kZWZpbmVkLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIGlzIHdyb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiAnc2lnbi11cCcsXG4gICAgICAgICAgICBtZXRob2Q6ICdBamF4UmVnaXN0ZXInXG4gICAgICAgIH07XG4gICAgICAgIERhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgICAgICBjb25zdCBocmVmID0gdGhpcy5mb3JtLmRhdGFzZXQucmVkaXJlY3RVcmwgfHwgJy9teS1hY2NvdW50Lyc7XG4gICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gaHJlZjtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRm9ybSA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNhamF4LXJlZ2lzdGVyLWZvcm0nKTtcbiAgICAgICAgaWYgKHJlZ2lzdGVyRm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFqYXhSZWdpc3RlciA9IG5ldyBBamF4UmVnaXN0ZXIocmVnaXN0ZXJGb3JtKTtcbiAgICAgICAgYWpheFJlZ2lzdGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJleHBvcnQgZGVmYXVsdCBjbGFzcyBDb25maXJtVmFsaWRhdGlvbiB7XG4gICAgY29uc3RydWN0b3IoZmllbGQsIGNvbmZpcm1GaWVsZCkge1xuICAgICAgICB0aGlzLmZpZWxkID0gZmllbGQ7XG4gICAgICAgIHRoaXMuY29uZmlybUZpZWxkID0gY29uZmlybUZpZWxkO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuZmllbGQgfHwgIXRoaXMuY29uZmlybUZpZWxkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01pc3NpbmcgZmllbGRzJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZXZlbnRzID0gWydjaGFuZ2UnLCAnaW5wdXQnXTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGV2ZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGV2ZW50ID0gZXZlbnRzW2luZGV4XTtcbiAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLmFkZEV2ZW50TGlzdGVuZXIoZXZlbnQsICgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5maWVsZC52YWx1ZSAhPT0gdGhpcy5jb25maXJtRmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgbWVzc2FnZSA9ICdWYWx1ZSBpcyBub3QgZXF1YWwnO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5zZXRDdXN0b21WYWxpZGl0eShtZXNzYWdlKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnNldEN1c3RvbVZhbGlkaXR5KCcnKTtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQucmVwb3J0VmFsaWRpdHkoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQ29va2llQmFyX2luc3RhbmNlcywgX0Nvb2tpZUJhcl9lbGVtZW50LCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgX0Nvb2tpZUJhcl9hY2NlcHRCdXR0b24sIF9Db29raWVCYXJfZ2V0RWxlbWVudCwgX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzO1xuaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fY29va2llLWJhci5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBnZXRDb29raWVWYWx1ZSwgc2V0Q29va2llVmFsdWUgfSBmcm9tICcuLi91dGlsL2Nvb2tpZXMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29va2llQmFyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9Db29raWVCYXJfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0Nvb2tpZUJhcl9lbGVtZW50LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9Db29raWVCYXJfYWNjZXB0QnV0dG9uLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgc2VsZWN0b3IucXVlcnlTZWxlY3RvcignI2Nvb2tpZS1iYXItdGVtcGxhdGUnKSwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LCBcImZcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZ2V0Q29va2llVmFsdWUoQ29va2llQmFyLmNvb2tpZU5hbWUpKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LCBcImZcIikucmVtb3ZlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29va2llQmFyX2VsZW1lbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl9pbnN0YW5jZXMsIFwibVwiLCBfQ29va2llQmFyX2dldEVsZW1lbnQpLmNhbGwodGhpcyksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29va2llQmFyX2FjY2VwdEJ1dHRvbiwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX2VsZW1lbnQsIFwiZlwiKS5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwiY29va2llcy1hY2NlcHRcIl0nKSwgXCJmXCIpO1xuICAgICAgICAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfYWNjZXB0QnV0dG9uLCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl9pbnN0YW5jZXMsIFwibVwiLCBfQ29va2llQmFyX2FjY2VwdENvb2tpZXMpLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBzdGF0aWMgc2V0QWNjZXB0Q29va2llKCkge1xuICAgICAgICBzZXRDb29raWVWYWx1ZShDb29raWVCYXIuY29va2llTmFtZSwgJ3RydWUnLCB7XG4gICAgICAgICAgICAnbWF4LWFnZSc6IDMxNTM2MDAwXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgY29va2llQmFyID0gbmV3IENvb2tpZUJhcihzZWxlY3Rvcik7XG4gICAgICAgIGNvb2tpZUJhci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuX0Nvb2tpZUJhcl9lbGVtZW50ID0gbmV3IFdlYWtNYXAoKSwgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQgPSBuZXcgV2Vha01hcCgpLCBfQ29va2llQmFyX2FjY2VwdEJ1dHRvbiA9IG5ldyBXZWFrTWFwKCksIF9Db29raWVCYXJfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0Nvb2tpZUJhcl9nZXRFbGVtZW50ID0gZnVuY3Rpb24gX0Nvb2tpZUJhcl9nZXRFbGVtZW50KCkge1xuICAgIGNvbnN0IGNsb25lID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgXCJmXCIpLmNsb25lTm9kZSh0cnVlKTtcbiAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGNsb25lO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIFwiZlwiKS5wYXJlbnRFbGVtZW50LmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgIHJldHVybiBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdbZGF0YS1yb2xlPVwiY29va2llLWJhclwiXScpO1xufSwgX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzID0gZnVuY3Rpb24gX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzKCkge1xuICAgIHZhciBfYTtcbiAgICBDb29raWVCYXIuc2V0QWNjZXB0Q29va2llKCk7XG4gICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX2VsZW1lbnQsIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xufTtcbkNvb2tpZUJhci5jb29raWVOYW1lID0gJ2FwcHJvdmVkX2Nvb2tpZXMnO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9Db3B5Q291cG9uX2J1dHRvbjtcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDb3B5Q291cG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihidXR0b24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0NvcHlDb3Vwb25fYnV0dG9uLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgYnV0dG9uLCBcImZcIik7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQ2xpY2soZXZlbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25DbGljayhldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBjb2RlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5kYXRhc2V0LmNvZGU7XG4gICAgICAgIGNvbnN0IHRleHQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmRhdGFzZXQudGV4dDtcbiAgICAgICAgY29uc3QgY29waWVkVGV4dCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikuZGF0YXNldC5jb3BpZWRUZXh0O1xuICAgICAgICBjb25zb2xlLmxvZyh0ZXh0LCBjb3BpZWRUZXh0KTtcbiAgICAgICAgaWYgKCFjb2RlIHx8ICF0ZXh0IHx8ICFjb3BpZWRUZXh0KSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgbmF2aWdhdG9yLmNsaXBib2FyZC53cml0ZVRleHQoY29kZSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikuaW5uZXJUZXh0ID0gY29waWVkVGV4dDtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmlubmVyVGV4dCA9IHRleHQ7XG4gICAgICAgIH0sIDMwMDApO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzLCBldmVudCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsdXJlJywgcmVzcG9uc2UpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgY29weUJ1dHRvbnMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJjb3B5LWNvdXBvblwiXScpKTtcbiAgICAgICAgaWYgKGNvcHlCdXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvcHlCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgY29weUNvdXBvbiA9IG5ldyBDb3B5Q291cG9uKGJ1dHRvbik7XG4gICAgICAgICAgICBjb3B5Q291cG9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX0NvcHlDb3Vwb25fYnV0dG9uID0gbmV3IFdlYWtNYXAoKTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9DdXJ0YWluX2luc3RhbmNlcywgX0N1cnRhaW5fdHJhbnNpdGlvbkxpc3RlbmVyLCBfQ3VydGFpbl9oYW5kbGVUcmFuc2l0aW9uO1xuaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fY3VydGFpbi5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDdXJ0YWluIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCBmb2xkQnV0dG9uLCBvbmx5T25Nb2JpbGUgPSBmYWxzZSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfQ3VydGFpbl9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIuc2V0KHRoaXMsICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5faW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5faGFuZGxlVHJhbnNpdGlvbikuY2FsbCh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZm9sZEJ1dHRvbiA9IGZvbGRCdXR0b247XG4gICAgICAgIHRoaXMub25seU9uTW9iaWxlID0gb25seU9uTW9iaWxlO1xuICAgICAgICB0aGlzLmRlZmF1bHRIZWlnaHQgPVxuICAgICAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLm1heEhlaWdodCAhPT0gdW5kZWZpbmVkICYmXG4gICAgICAgICAgICAgICAgZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLm1heEhlaWdodCAhPT0gJ25vbmUnXG4gICAgICAgICAgICAgICAgPyBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCkubWF4SGVpZ2h0XG4gICAgICAgICAgICAgICAgOiAnMHB4JztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChlKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5vbmx5T25Nb2JpbGUgJiYgd2luZG93LmlubmVyV2lkdGggPj0gMTAyNCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGUucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGlmICghdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5jb250YWlucygnYWN0aXZlJykpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSB0aGlzLmRlZmF1bHRIZWlnaHQ7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHt0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IGAke3RoaXMuZWxlbWVudC5zY3JvbGxIZWlnaHR9cHhgO1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIH0sIDEpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCF0aGlzLmZvbGRCdXR0b24uZGF0YXNldC5yZWFkTGVzcyB8fCAhdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZE1vcmUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAodGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9PT0gdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZE1vcmUpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uaW5uZXJUZXh0ID0gdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZExlc3M7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciwgXCJmXCIpKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciwgXCJmXCIpKTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQgfHwgIXRoaXMuZm9sZEJ1dHRvbikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgdG9nZ2xlcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY3VydGFpbi10b2dnbGVdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdG9nZ2xlcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRvZ2dsZSA9IHRvZ2dsZXNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgY29udGVudCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWN1cnRhaW4tY29udGVudD1cIiR7dG9nZ2xlLmRhdGFzZXQuY3VydGFpblRvZ2dsZX1cIl1gKTtcbiAgICAgICAgICAgIGlmICghY29udGVudCkge1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3Qgb25seU9uTW9iaWxlID0gISEoY29udGVudC5kYXRhc2V0Lm9ubHlPbk1vYmlsZSAmJiBjb250ZW50LmRhdGFzZXQub25seU9uTW9iaWxlID09PSAndHJ1ZScpO1xuICAgICAgICAgICAgY29uc3QgY3VydGFpbiA9IG5ldyBDdXJ0YWluKGNvbnRlbnQsIHRvZ2dsZSwgb25seU9uTW9iaWxlKTtcbiAgICAgICAgICAgIGN1cnRhaW4uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuX0N1cnRhaW5fdHJhbnNpdGlvbkxpc3RlbmVyID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5faW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0N1cnRhaW5faGFuZGxlVHJhbnNpdGlvbiA9IGZ1bmN0aW9uIF9DdXJ0YWluX2hhbmRsZVRyYW5zaXRpb24oKSB7XG4gICAgaWYgKHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSAnbm9uZSc7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5lbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdtYXhIZWlnaHQnKTtcbn07XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgeyByZW1vdmVFeGlzdGluZ1ZhbGlkYXRpb25NZXNzYWdlcywgc2V0VmFsaWRhdGlvbk1lc3NhZ2UgfSBmcm9tICcuLi91dGlsL3ZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRW1haWxWYWxpZGF0aW9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmVtYWlsSW5wdXQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmZvcm0gPSB0aGlzLmVtYWlsSW5wdXQuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgbGV0IGJsdXJUaW1lb3V0ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbWFpbElucHV0LmFkZEV2ZW50TGlzdGVuZXIoJ2JsdXInLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoYmx1clRpbWVvdXQpIHtcbiAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KGJsdXJUaW1lb3V0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJsdXJUaW1lb3V0ID0gd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQmx1ckV2ZW50KCk7XG4gICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaGFuZGxlQmx1ckV2ZW50KCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIGNvbnN0IHsgdmFsdWUgfSA9IHRoaXMuZW1haWxJbnB1dDtcbiAgICAgICAgY29uc3Qgc2VjdXJpdHkgPSAoKF9hID0gZm9ybURhdGEuZ2V0KCd3b29jb21tZXJjZS1lbWFpbC1jaGVjay1ub25jZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnYWpheGVtYWlsY2hlY2snLFxuICAgICAgICAgICAgZW1haWw6IHZhbHVlLFxuICAgICAgICAgICAgc2VjdXJpdHlcbiAgICAgICAgfTtcbiAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgb25TdWNjZXNzKCkge1xuICAgICAgICByZW1vdmVFeGlzdGluZ1ZhbGlkYXRpb25NZXNzYWdlcyh0aGlzLmVtYWlsSW5wdXQpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUoZXJyb3IpIHtcbiAgICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoZXJyb3IubWVzc2FnZSwgdGhpcy5lbWFpbElucHV0KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVtYWlsSW5wdXQgfHwgIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmVnaXN0ZXJFbWFpbElucHV0ID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignI3JlZ19lbWFpbCcpO1xuICAgICAgICBpZiAocmVnaXN0ZXJFbWFpbElucHV0ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZW1haWxWYWxpZGF0aW9uID0gbmV3IEVtYWlsVmFsaWRhdGlvbihyZWdpc3RlckVtYWlsSW5wdXQpO1xuICAgICAgICBlbWFpbFZhbGlkYXRpb24uaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCB7IHNldFZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSAnLi4vdXRpbC92YWxpZGF0aW9uJztcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi9GaWVsZFZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgRm9yZ290UGFzc3dvcmQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGFuY2hvcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvciA9IGFuY2hvcjtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvci5jbG9zZXN0KCdmb3JtJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnBhc3N3b3JkRm9yZ2V0QW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IHVzZXJuYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgndXNlcm5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgLy8gY29uc3Qgc2VjdXJpdHk6IHN0cmluZyA9IGZvcm1EYXRhLmdldCgnZm9yZ290c2VjdXJpdHknKT8udG9TdHJpbmcoKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGVtYWlsRmllbGQgPSB0aGlzLmZvcm0udXNlcm5hbWU7XG4gICAgICAgICAgICBjb25zdCBmaWVsZFZhbGlkYXRpb24gPSBuZXcgRmllbGRWYWxpZGF0aW9uKGVtYWlsRmllbGQpO1xuICAgICAgICAgICAgZmllbGRWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgICAgIGVtYWlsRmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZhbGlkYXRlJykpO1xuICAgICAgICAgICAgaWYgKCF1c2VybmFtZSkge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignVXNlcm5hbWUgbm90IHNldCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhamF4Zm9yZ290cGFzc3dvcmQnLFxuICAgICAgICAgICAgICAgIHVzZXJfbG9naW46IHVzZXJuYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEsIHRoaXMuZm9ybSk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKHJlc3BvbnNlLmRhdGEsIHRoaXMuZm9ybSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvciB8fCAhdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBwYXNzd29yZEZvcmdldExpbmtzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwicGFzc3dvcmQtZm9yZ2V0XCJdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFzc3dvcmRGb3JnZXRMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBwYXNzd29yZEZvcmdldExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gbmV3IEZvcmdvdFBhc3N3b3JkKGxpbmspO1xuICAgICAgICAgICAgZm9yZ290UGFzc3dvcmQuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdvdFBhc3N3b3JkVG9nZ2xlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcih0b2dnbGUpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy50b2dnbGUgPSB0b2dnbGU7XG4gICAgICAgIHRoaXMucGFzc3dvcmRGb3JnZXRXcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3Bhc3N3b3JkLWZvcmdldC1mb3JtJyk7XG4gICAgICAgIHRoaXMubG9naW5XcmFwcGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2xvZ2luLXJlZ2lzdGVyLWZvcm0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgdGhpcy5sb2dpbldyYXBwZXIudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nKTtcbiAgICAgICAgICAgIHRoaXMucGFzc3dvcmRGb3JnZXRXcmFwcGVyLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMucGFzc3dvcmRGb3JnZXRXcmFwcGVyIHx8ICF0aGlzLmxvZ2luV3JhcHBlcikge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRGb3JnZXRMaW5rcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBhc3N3b3JkLWZvcmdldC10b2dnbGVcIl0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXNzd29yZEZvcmdldExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgbGluayA9IHBhc3N3b3JkRm9yZ2V0TGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgZm9yZ290UGFzc3dvcmQgPSBuZXcgRm9yZ290UGFzc3dvcmRUb2dnbGUobGluayk7XG4gICAgICAgICAgICBmb3Jnb3RQYXNzd29yZC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgSGVhZGVyU2VhcmNoIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGRvY3VtZW50Q2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBldmVudFRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmIChldmVudFRhcmdldCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHdpdGhpbkhlYWRlciA9IGV2ZW50VGFyZ2V0LmNsb3Nlc3QoJy5oZWFkZXJfX3NlYXJjaCcpICE9PSBudWxsO1xuICAgICAgICAgICAgaWYgKHdpdGhpbkhlYWRlcikge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICBjb25zdCBzZWFyY2hJbnB1dEVsZW1lbnQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3Qtc2VhcmNoLWZpZWxkJyk7XG4gICAgICAgICAgICBpZiAoc2VhcmNoSW5wdXRFbGVtZW50ICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgc2VhcmNoSW5wdXRFbGVtZW50LmZvY3VzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBoZWFkZXJTZWFyY2ggPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcuaGVhZGVyX19zZWFyY2gnKTtcbiAgICAgICAgaWYgKGhlYWRlclNlYXJjaCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEhlYWRlclNlYXJjaChoZWFkZXJTZWFyY2gpO1xuICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9faW5mb1BvcHVwLnBjc3MnO1xuaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEluZm9Qb3B1cCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZXZlbnQgPSAnbW91c2VvdmVyJykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmV2ZW50ID0gZXZlbnQ7XG4gICAgICAgIHRoaXMuY29udGVudCA9IHRoaXMuZWxlbWVudC5kYXRhc2V0LmNvbnRlbnQgfHwgJyc7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzVmFsaWQoKSA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcih0aGlzLmV2ZW50LCB0aGlzLnNob3dUaXBweS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc2hvd1RpcHB5KGUpIHtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IHdpbmRvdy50aXBweSh0aGlzLmVsZW1lbnQsIHtcbiAgICAgICAgICAgIGNvbnRlbnQ6IHRoaXMuY29udGVudCxcbiAgICAgICAgICAgIHRoZW1lOiAnbGlnaHQnLFxuICAgICAgICAgICAgYWxsb3dIVE1MOiB0cnVlLFxuICAgICAgICAgICAgaGlkZU9uQ2xpY2s6IHRydWUsXG4gICAgICAgICAgICBzaG93T25DcmVhdGU6IHRydWUsXG4gICAgICAgICAgICBpbnRlcmFjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIG9uSGlkZGVuOiAoaSkgPT4ge1xuICAgICAgICAgICAgICAgIGkuZGVzdHJveSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKGluc3RhbmNlID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpbnN0YW5jZS5zaG93KCk7XG4gICAgICAgIGluc3RhbmNlLmhpZGVXaXRoSW50ZXJhY3Rpdml0eShlKTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQgfHwgIXRoaXMuY29udGVudCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgdGlwcHlFbGVtZW50cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInRpcHB5XCJdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGlwcHlFbGVtZW50cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHRpcHB5RWxlbWVudCA9IHRpcHB5RWxlbWVudHNbaW5kZXhdO1xuICAgICAgICAgICAgaWYgKCF0aXBweUVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluZm9Qb3B1cCA9IG5ldyBJbmZvUG9wdXAodGlwcHlFbGVtZW50LCAnbW91c2VvdmVyJyk7XG4gICAgICAgICAgICBpbmZvUG9wdXAuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIExhenlMb2FkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IHRoaXMuZ2V0RWxlbWVudHMoKTtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIHRoaXMub25JbnRlcnNlY3Rpb25PYnNlcnZlcihJbnRlcnNlY3Rpb25PYnNlcnZlcik7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCB0aGlzLmVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gdGhpcy5lbGVtZW50c1tpXTtcbiAgICAgICAgICAgIHRoaXMubGF6eWxvYWQoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25JbnRlcnNlY3Rpb25PYnNlcnZlcihPYnNlcnZlckNsYXNzID0gSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpIHtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICByb290TWFyZ2luOiAnMjUwcHggMHB4JyxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBsYXp5SW1hZ2VPYnNlcnZlciA9IG5ldyBPYnNlcnZlckNsYXNzKChlbnRyaWVzLCBsYXp5SW1hZ2VPYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgICAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGxhenkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhenlsb2FkKGxhenkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLmxhenlsb2FkKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIudW5vYnNlcnZlKGVudHJ5LnRhcmdldCk7XG4gICAgICAgICAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLmRpc2Nvbm5lY3QoKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKGxhenlJbWFnZSkgPT4ge1xuICAgICAgICAgICAgbGF6eUltYWdlT2JzZXJ2ZXIub2JzZXJ2ZShsYXp5SW1hZ2UpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgbGF6eWxvYWQoZWwpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IGVsO1xuICAgICAgICB0aGlzLm1hbmFnZUNzc0NsYXNzZXMoZWwpO1xuICAgICAgICBpZiAod2luZG93LkhUTUxQaWN0dXJlRWxlbWVudCAmJiB0aGlzLmVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MUGljdHVyZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2ltZycpO1xuICAgICAgICAgICAgaWYgKGltYWdlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5tYW5hZ2VDc3NDbGFzc2VzKGltYWdlKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBsb2FkaW5nU3Bpbm5lciA9IHRoaXMuZWxlbWVudC5jbG9zZXN0KCcubG9hZGluZy1zcGlubmVyJyk7XG4gICAgICAgIGlmIChsb2FkaW5nU3Bpbm5lcikge1xuICAgICAgICAgICAgbG9hZGluZ1NwaW5uZXIuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZy1zcGlubmVyJyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNvdXJjZUVsZW1lbnQpICYmXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuc2l6ZXMpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc2l6ZXMgPSBlbGVtZW50LmRhdGFzZXQuc2l6ZXM7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zaXplcycpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnNyY3NldCkge1xuICAgICAgICAgICAgZWxlbWVudC5zcmNzZXQgPSBlbGVtZW50LmRhdGFzZXQuc3Jjc2V0O1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3Jjc2V0Jyk7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKChlbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCB8fCBlbGVtZW50IGluc3RhbmNlb2YgSFRNTFNvdXJjZUVsZW1lbnQpICYmXG4gICAgICAgICAgICBlbGVtZW50LmRhdGFzZXQuc3JjKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNyYyA9IGVsZW1lbnQuZGF0YXNldC5zcmM7XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUF0dHJpYnV0ZSgnZGF0YS1zcmMnKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBnZXRFbGVtZW50cygpIHtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBbXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTEltYWdlRWxlbWVudCAmJlxuICAgICAgICAgICAgKHRoaXMuZWxlbWVudC5kYXRhc2V0LnNyYyB8fCB0aGlzLmVsZW1lbnQuZGF0YXNldC5zcmNzZXQpKSB7XG4gICAgICAgICAgICByZXR1cm4gW3RoaXMuZWxlbWVudF07XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtc3JjXSwgc291cmNlW2RhdGEtc3Jjc2V0XScpKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnaW1nW2RhdGEtc3JjXScpKTtcbiAgICB9XG4gICAgbWFuYWdlQ3NzQ2xhc3NlcyhlbGVtZW50KSB7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgnbG9hZGVkJyk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnbG9hZGluZycpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBzdXBlci5vbkluaXQoKTtcbiAgICAgICAgY29uc3QgbGF6eWxvYWRFbGVtZW50cyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtbGF6eWxvYWRdJykpO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxhenlsb2FkRWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGNvbnN0IGVsZW1lbnQgPSBsYXp5bG9hZEVsZW1lbnRzW2ldO1xuICAgICAgICAgICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIG5vLW5ld1xuICAgICAgICAgICAgbmV3IExhenlMb2FkZXIoZWxlbWVudCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IERhdGFMYXllciBmcm9tICcuLi9jb21tb24vRGF0YUxheWVyJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuL0ZpZWxkVmFsaWRhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBOZXdzbGV0dGVyU3Vic2NyaWJlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuYWpheEVuZHBvaW50ID0gYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgO1xuICAgICAgICB0aGlzLmRhdGFMYXllciA9IERhdGFMYXllcjtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgICAgdGhpcy5lbWFpbEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZW1haWxcIl0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdOZXdzbGV0dGVyIHN1YnNjcmliZSBjb21wb25lbnQgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZpZWxkVmFsaWRhdGlvbih0aGlzLmVtYWlsRmllbGQpO1xuICAgICAgICB2YWxpZGF0b3IuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYztcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICAgICAgY29uc3QgZmlyc3ROYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgnZmlyc3QtbmFtZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBjb21wYW55TmFtZSA9ICgoX2IgPSBmb3JtRGF0YS5nZXQoJ2NvbXBhbnktbmFtZScpKSA9PT0gbnVsbCB8fCBfYiA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2IudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBlbWFpbCA9ICgoX2MgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGlmICghZW1haWwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ21haWxjaGltcHN1YnNjcmliZScsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGNvbXBhbnlOYW1lXG4gICAgICAgICAgICB9O1xuICAgICAgICAgICAgRmllbGRWYWxpZGF0aW9uLnJlbW92ZUVycm9yVGV4dCh0aGlzLmVtYWlsRmllbGQpO1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtIHx8ICF0aGlzLmVtYWlsRmllbGQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlc3BvbnNlLCBldmVudCkge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kU3VjY2Vzc1RleHQodGhpcy5lbWFpbEZpZWxkLCByZXNwb25zZS5kYXRhLnRvU3RyaW5nKCkpO1xuICAgICAgICB0aGlzLmVtYWlsRmllbGQudmFsdWUgPSAnJztcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiAnR0FFdmVudCcsXG4gICAgICAgICAgICBldmVudENhdGVnb3J5OiAnbmV3c2xldHRlcicsXG4gICAgICAgICAgICBldmVudEFjdGlvbjogJ3N1YnNjcmliZScsXG4gICAgICAgICAgICBldmVudExhYmVsOiB0aGlzLmZvcm0uaWQgfHwgJ2dlbmVyaWMnXG4gICAgICAgIH07XG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShlcnJvcikge1xuICAgICAgICBGaWVsZFZhbGlkYXRpb24uYXBwZW5kRXJyb3JUZXh0KHRoaXMuZW1haWxGaWVsZCwgZXJyb3IubWVzc2FnZSk7XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgLy8gI1RPRE86IFN3aXRjaCB0byBjb21tb24gc2VsZWN0b3JcbiAgICAgICAgY29uc3QgZm9ybXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJyNmb290ZXItbmV3c2xldHRlci1mb3JtLCAjaG9tZXBhZ2UtbmV3c2xldHRlci1mb3JtLCAjYWpheC1uZXdzbGV0dGVyLWZvcm0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmb3Jtcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZvcm0gPSBmb3Jtc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBuZXdzbGV0dGVyU3Vic2NyaWJlID0gbmV3IE5ld3NsZXR0ZXJTdWJzY3JpYmUoZm9ybSk7XG4gICAgICAgICAgICBuZXdzbGV0dGVyU3Vic2NyaWJlLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQYXNzd29yZFJldmVhbCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLnBhc3N3b3JkSW5wdXQgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcignaW5wdXRbdHlwZT1cInBhc3N3b3JkXCJdJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IHRoaXMuY3JlYXRlUmV2ZWFsQnV0dG9uKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uY2xhc3NMaXN0LnRvZ2dsZSgnb3BlbmVkJyk7XG4gICAgICAgICAgICBpZiAodGhpcy5wYXNzd29yZElucHV0LnR5cGUgPT09ICdwYXNzd29yZCcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLnBhc3N3b3JkSW5wdXQudHlwZSA9ICd0ZXh0JztcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkSW5wdXQudHlwZSA9ICdwYXNzd29yZCc7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjcmVhdGVSZXZlYWxCdXR0b24oKSB7XG4gICAgICAgIGNvbnN0IGJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xuICAgICAgICBidXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICBidXR0b24uY2xhc3NOYW1lID0gJ3Bhc3N3b3JkLXJldmVhbC10b2dnbGUnO1xuICAgICAgICBidXR0b24udGFiSW5kZXggPSAtMTtcbiAgICAgICAgcmV0dXJuIGJ1dHRvbjtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkUm93cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnLnBhc3N3b3JkLXJvdycpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhc3N3b3JkUm93cy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkUm93ID0gcGFzc3dvcmRSb3dzW2luZGV4XTtcbiAgICAgICAgICAgIGlmIChwYXNzd29yZFJvdyA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkUmV2ZWFsID0gbmV3IFBhc3N3b3JkUmV2ZWFsKHBhc3N3b3JkUm93KTtcbiAgICAgICAgICAgIHBhc3N3b3JkUmV2ZWFsLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbjtcbi8qIGVzbGludC1kaXNhYmxlIG5vLWNvbnNvbGUgKi9cbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4uL3V0aWwvZW5kcG9pbnRzJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVkZWVtUG9pbnRzRm9yQ291cG9uIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihidXR0b24pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24uc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIGJ1dHRvbiwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU3VibWl0KGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VibWl0KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IGlkID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiwgXCJmXCIpLmRhdGFzZXQuaWQ7XG4gICAgICAgIGlmICghaWQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnYWpheHJlZGVlbWNvdXBvbicsXG4gICAgICAgICAgICBpZDogaWRcbiAgICAgICAgfTtcbiAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIGVuZHBvaW50cy5hamF4LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCBldmVudCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiwgXCJmXCIpKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIFwiZlwiKSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzLCBldmVudCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICAgICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XG4gICAgfVxuICAgIG9uRmFpbHVyZShyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgIGNvbnNvbGUubG9nKCdmYWlsdXJlJywgcmVzcG9uc2UpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmVkZWVtQnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInJlZGVlbS1jb3Vwb25cIl0nKSk7XG4gICAgICAgIGlmIChyZWRlZW1CdXR0b25zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHJlZGVlbUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCByZWRlZW1Qb2ludHNGb3JDb3Vwb24gPSBuZXcgUmVkZWVtUG9pbnRzRm9yQ291cG9uKGJ1dHRvbik7XG4gICAgICAgICAgICByZWRlZW1Qb2ludHNGb3JDb3Vwb24uaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fUmVkZWVtUG9pbnRzRm9yQ291cG9uX2J1dHRvbiA9IG5ldyBXZWFrTWFwKCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldDtcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgc2Nyb2xsVG9UYXJnZXQgZnJvbSAnLi4vdXRpbC9zY3JvbGxUb1RhcmdldCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTY3JvbGxUb0NvbnRlbnQgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIHRhcmdldCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgZWxlbWVudCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0LCB0YXJnZXQsIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQsIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGhlYWRlck9mZnNldCA9ICFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgXCJmXCIpLmRhdGFzZXQuaGVhZGVyT2Zmc2V0O1xuICAgICAgICAgICAgc2Nyb2xsVG9UYXJnZXQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldCwgXCJmXCIpLCAwLCBoZWFkZXJPZmZzZXQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1zY3JvbGwtdG9dJykpO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXRJZCA9IGVsZW1lbnQuZGF0YXNldC5zY3JvbGxUbyB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKHRhcmdldElkKTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgU2Nyb2xsVG9Db250ZW50KGVsZW1lbnQsIHRhcmdldCk7XG4gICAgICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCA9IG5ldyBXZWFrTWFwKCksIF9TY3JvbGxUb0NvbnRlbnRfdGFyZ2V0ID0gbmV3IFdlYWtNYXAoKTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9lbGVtZW50LCBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfdGltZW91dCwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUsIF9WaWRlb01lZGlhUmVzb2x2ZXJfc2hvd1NvdXJjZTtcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL3BvbHlmaWxscy9tYXRjaE1lZGlhJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFZpZGVvTWVkaWFSZXNvbHZlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zb3VyY2VzLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfVmlkZW9NZWRpYVJlc29sdmVyX3RpbWVvdXQuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCwgZWxlbWVudCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcywgQXJyYXkuZnJvbShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCwgXCJmXCIpLnF1ZXJ5U2VsZWN0b3JBbGwoJ3NvdXJjZScpKSwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzLCBcIm1cIiwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUpLmNhbGwodGhpcyk7XG4gICAgICAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDc2N3B4KScpO1xuICAgICAgICBjb25zdCBtcTIgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG9yaWVudGF0aW9uOiBwb3J0cmFpdCknKTtcbiAgICAgICAgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIobXEsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgXCJtXCIsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplKS5jYWxsKHRoaXMpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyKG1xMiwgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzLCBcIm1cIiwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUpLmNhbGwodGhpcyk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnRzID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCd2aWRlb1tkYXRhLXJlc29sdmVdJykpO1xuICAgICAgICBlbGVtZW50cy5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBWaWRlb01lZGlhUmVzb2x2ZXIoZWxlbWVudCk7XG4gICAgICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCA9IG5ldyBXZWFrTWFwKCksIF9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcyA9IG5ldyBXZWFrTWFwKCksIF9WaWRlb01lZGlhUmVzb2x2ZXJfdGltZW91dCA9IG5ldyBXZWFrTWFwKCksIF9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUgPSBmdW5jdGlvbiBfVmlkZW9NZWRpYVJlc29sdmVyX2hhbmRsZVJlc2l6ZSgpIHtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcywgXCJmXCIpLmZvckVhY2goKHNvdXJjZSkgPT4ge1xuICAgICAgICBjb25zdCBvcmllbnRhdGlvbiA9IHNvdXJjZS5kYXRhc2V0Lm9yaWVudGF0aW9uIHx8ICcnO1xuICAgICAgICBjb25zdCBtYXhXaWR0aCA9IE51bWJlcihzb3VyY2UuZGF0YXNldC5tYXhXaWR0aCkgfHwgMDtcbiAgICAgICAgY29uc3QgY3VycmVudE9yaWVudGF0aW9uID0gd2luZG93Lm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJykubWF0Y2hlc1xuICAgICAgICAgICAgPyAncG9ydHJhaXQnXG4gICAgICAgICAgICA6ICdsYW5kc2NhcGUnO1xuICAgICAgICBjb25zdCBjdXJyZW50V2lkdGggPSB3aW5kb3cuaW5uZXJXaWR0aDtcbiAgICAgICAgaWYgKGN1cnJlbnRPcmllbnRhdGlvbiAhPT0gb3JpZW50YXRpb24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF4V2lkdGggJiYgY3VycmVudFdpZHRoID49IG1heFdpZHRoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgXCJtXCIsIF9WaWRlb01lZGlhUmVzb2x2ZXJfc2hvd1NvdXJjZSkuY2FsbCh0aGlzLCBzb3VyY2UpO1xuICAgIH0pO1xufSwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zaG93U291cmNlID0gZnVuY3Rpb24gX1ZpZGVvTWVkaWFSZXNvbHZlcl9zaG93U291cmNlKHNvdXJjZSkge1xuICAgIGNvbnN0IGRhdGFTcmMgPSBzb3VyY2UuZGF0YXNldC5zcmM7XG4gICAgaWYgKCFkYXRhU3JjKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQsIFwiZlwiKS5zcmMgPSBkYXRhU3JjO1xufTtcbiIsImV4cG9ydCBmdW5jdGlvbiBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihtcSwgY2FsbGJhY2ssIGV2ZW50QnViYmxpbmcgPSBmYWxzZSkge1xuICAgIHRyeSB7XG4gICAgICAgIG1xLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsIGNhbGxiYWNrLCBldmVudEJ1YmJsaW5nKTtcbiAgICB9XG4gICAgY2F0Y2ggKGUpIHtcbiAgICAgICAgbXEuYWRkTGlzdGVuZXIoKCkgPT4gY2FsbGJhY2spO1xuICAgIH1cbn1cbmV4cG9ydCBmdW5jdGlvbiBtYXRjaE1lZGlhUmVtb3ZlRXZlbnRMaXN0ZW5lcihtcSwgY2FsbGJhY2spIHtcbiAgICB0cnkge1xuICAgICAgICBtcS5yZW1vdmVFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjYWxsYmFjayk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIG1xLnJlbW92ZUxpc3RlbmVyKCgpID0+IGNhbGxiYWNrKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgZGlhbG9nUG9seWZpbGwgZnJvbSAnZGlhbG9nLXBvbHlmaWxsJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgeyBkaXNhYmxlQm9keVNjcm9sbCwgZW5hYmxlQm9keVNjcm9sbCB9IGZyb20gJy4uL3V0aWwvYm9keSc7XG5pbXBvcnQgeyB0b0NhbWVsQ2FzZSB9IGZyb20gJy4uL3V0aWwvc3RyaW5nJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBnZXQgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH1cbiAgICBzZXQgaXNPcGVuKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY2FtZWxEYXRhQXR0cmlidXRlKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YUF0dHJpYnV0ZS5yZXBsYWNlKCdkYXRhLScsICcnKTtcbiAgICAgICAgcmV0dXJuIHRvQ2FtZWxDYXNlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IHRyYW5zaXRpb25UaW1lKCkge1xuICAgICAgICBpZiAodGhpcy5fdHJhbnNpdGlvblRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uVGltZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uVGltZSA9IHRoaXMuZ2V0VHJhbnNpdGlvblRpbWUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb25UaW1lO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLnBvbHlmaWxsRGlhbG9nKCk7XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2VdJykpO1xuICAgICAgICBjbG9zZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRzaWRlQ2xpY2soZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvdXRzaWRlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBjbGlja2VkSW5EaWFsb2cgPSByZWN0LnRvcCA8PSBldmVudC5jbGllbnRZICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WSA8PSByZWN0LnRvcCArIHJlY3QuaGVpZ2h0ICYmXG4gICAgICAgICAgICAgICAgcmVjdC5sZWZ0IDw9IGV2ZW50LmNsaWVudFggJiZcbiAgICAgICAgICAgICAgICBldmVudC5jbGllbnRYIDw9IHJlY3QubGVmdCArIHJlY3Qud2lkdGg7XG4gICAgICAgICAgICBpZiAoIWNsaWNrZWRJbkRpYWxvZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KGBbJHt0aGlzLmRhdGFBdHRyaWJ1dGV9PVwiJHt0aGlzLmVsZW1lbnQuZGF0YXNldFtgJHt0aGlzLmNhbWVsRGF0YUF0dHJpYnV0ZX1gXX1cIl1gKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIG9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRpc2FibGVCb2R5U2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zaG93TW9kYWwoKTtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMub3Blbik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmNsb3NlZCk7XG4gICAgICAgIH0sIHRoaXMudHJhbnNpdGlvblRpbWUpO1xuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgZW5hYmxlQm9keVNjcm9sbCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMub3Blbik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmNsb3NlZCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMudHJhbnNpdGlvblRpbWUpO1xuICAgIH1cbiAgICBnZXRUcmFuc2l0aW9uVGltZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGNvbnN0IHRyYW5zaXRpb25EdXJhdGlvbiA9IChfYSA9IHN0eWxlcy50cmFuc2l0aW9uRHVyYXRpb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnO1xuICAgICAgICBjb25zdCBkdXJhdGlvbiA9IHRyYW5zaXRpb25EdXJhdGlvbi5pbmRleE9mKCdtcycpID4gLTFcbiAgICAgICAgICAgID8gcGFyc2VGbG9hdCh0cmFuc2l0aW9uRHVyYXRpb24pXG4gICAgICAgICAgICA6IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSAqIDEwMDA7XG4gICAgICAgIHJldHVybiBkdXJhdGlvbiB8fCA0MDA7XG4gICAgfVxuICAgIHBvbHlmaWxsRGlhbG9nKCkge1xuICAgICAgICBkaWFsb2dQb2x5ZmlsbCA9PT0gbnVsbCB8fCBkaWFsb2dQb2x5ZmlsbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGlhbG9nUG9seWZpbGwucmVnaXN0ZXJEaWFsb2codGhpcy5lbGVtZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19zaWRlUGFuZWwucGNzcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlUGFuZWwgZXh0ZW5kcyBEaWFsb2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRhdGFBdHRyaWJ1dGUgPSAnZGF0YS1wYW5lbC1uYW1lJztcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgICAgICAgb3BlbjogJ3NpZGUtcGFuZWwtLW9wZW5lZCcsXG4gICAgICAgICAgICBjbG9zZWQ6ICdzaWRlLXBhbmVsLS1jbG9zZWQnLFxuICAgICAgICAgICAgbGVmdDogJ3NpZGUtcGFuZWwtLWxlZnQnLFxuICAgICAgICAgICAgcmlnaHQ6ICdzaWRlLXBhbmVsLS1yaWdodCdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIG9wZW5TaWRlUGFuZWwocGFuZWxJRCwgZWxlbWVudCA9IG51bGwpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYW5lbC1uYW1lPVwiJHtwYW5lbElEfVwiXWApO1xuICAgICAgICBpZiAocGFuZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtdGVtcGxhdGU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgICAgICBpZiAodGVtcGxhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBlbGVtZW50LmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCB7IGNvbnRlbnQgfSA9IGNsb25lO1xuICAgICAgICAgICAgKF9hID0gdGVtcGxhdGUucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmFwcGVuZENoaWxkKGNvbnRlbnQpO1xuICAgICAgICAgICAgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYW5lbC1uYW1lPVwiJHtwYW5lbElEfVwiXWApO1xuICAgICAgICAgICAgRXZlbnRFbWl0dGVyLmVtaXQoJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIHBhbmVsKTtcbiAgICAgICAgICAgIGlmIChwYW5lbCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IHNpZGVQYW5lbEluc3RhbmNlID0gbmV3IFNpZGVQYW5lbChwYW5lbCk7XG4gICAgICAgICAgICBzaWRlUGFuZWxJbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgdG9nZ2xlRXZlbnQgPSBuZXcgQ3VzdG9tRXZlbnQoJ3RvZ2dsZScpO1xuICAgICAgICBwYW5lbC5kaXNwYXRjaEV2ZW50KHRvZ2dsZUV2ZW50KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XG4gICAgICAgIGNvbnN0IHBhbmVsTGlua3MgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXBhbmVsXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhbmVsTGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gcGFuZWxMaW5rc1tpbmRleF07XG4gICAgICAgICAgICBlbGVtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmhhbmRsZUNyZWF0aW9uRXZlbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHN0YXRpYyBoYW5kbGVDcmVhdGlvbkV2ZW50KGV2ZW50KSB7XG4gICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgIGNvbnN0IHBhbmVsSUQgPSB0aGlzLmRhdGFzZXQucGFuZWwgfHwgJyc7XG4gICAgICAgIC8vIElmIGFscmVhZHkgbG9nZ2VkIGluIGZvbGxvdyBsaW5rXG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQgJiZcbiAgICAgICAgICAgIHBhbmVsSUQgPT09ICdteS1hY2NvdW50LXBhbmVsJyAmJlxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvZ2dlZC1pbicpKSB7XG4gICAgICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IHRoaXMuaHJlZjtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBTaWRlUGFuZWwub3BlblNpZGVQYW5lbChwYW5lbElELCB0aGlzKTtcbiAgICB9XG59XG4iLCJjb25zdCBib2R5RWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJ2JvZHknKTtcbmxldCBzY3JvbGxQb3NpdGlvbiA9IDA7XG5leHBvcnQgZnVuY3Rpb24gZGlzYWJsZUJvZHlTY3JvbGwoKSB7XG4gICAgc2Nyb2xsUG9zaXRpb24gPSB3aW5kb3cucGFnZVlPZmZzZXQ7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUub3ZlcmZsb3cgPSAnaGlkZGVuJztcbiAgICBib2R5RWxlbWVudC5zdHlsZS5wb3NpdGlvbiA9ICdmaXhlZCc7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUudG9wID0gYC0ke3Njcm9sbFBvc2l0aW9ufXB4YDtcbiAgICBib2R5RWxlbWVudC5zdHlsZS53aWR0aCA9ICcxMDAlJztcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUuc2Nyb2xsQmVoYXZpb3IgPSAnaW5pdGlhbCc7XG59XG5leHBvcnQgZnVuY3Rpb24gZW5hYmxlQm9keVNjcm9sbCgpIHtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnb3ZlcmZsb3cnKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgncG9zaXRpb24nKTtcbiAgICBib2R5RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgndG9wJyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3dpZHRoJyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxQb3NpdGlvbik7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCdzY3JvbGwtYmVoYXZpb3InKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBnZXRDb29raWVWYWx1ZShuYW1lKSB7XG4gICAgY29uc3QgY29va2llID0gZG9jdW1lbnQuY29va2llXG4gICAgICAgIC5zcGxpdCgnOyAnKVxuICAgICAgICAuZmluZCgocm93KSA9PiByb3cuc3RhcnRzV2l0aChuYW1lKSk7XG4gICAgaWYgKGNvb2tpZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICByZXR1cm4gY29va2llLnNwbGl0KCc9JylbMV07XG59XG5leHBvcnQgZnVuY3Rpb24gc2V0Q29va2llVmFsdWUobmFtZSwgdmFsdWUsIG9wdGlvbnMpIHtcbiAgICBjb25zdCBjb29raWVPcHRpb25zID0gT2JqZWN0LmFzc2lnbih7IHBhdGg6ICcvJyB9LCBvcHRpb25zKTtcbiAgICBsZXQgdXBkYXRlZENvb2tpZSA9IGAke25hbWV9PSR7dmFsdWV9YDtcbiAgICAvLyBlc2xpbnQtZGlzYWJsZS1uZXh0LWxpbmUgZ3VhcmQtZm9yLWluXG4gICAgZm9yIChjb25zdCBvcHRpb25LZXkgaW4gY29va2llT3B0aW9ucykge1xuICAgICAgICB1cGRhdGVkQ29va2llICs9IGA7ICR7b3B0aW9uS2V5fWA7XG4gICAgICAgIGNvbnN0IG9wdGlvblZhbHVlID0gY29va2llT3B0aW9uc1tvcHRpb25LZXldO1xuICAgICAgICBpZiAob3B0aW9uVmFsdWUgIT09IHRydWUpIHtcbiAgICAgICAgICAgIHVwZGF0ZWRDb29raWUgKz0gYD0ke29wdGlvblZhbHVlfWA7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZG9jdW1lbnQuY29va2llID0gdXBkYXRlZENvb2tpZTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBpc0RhdGVWYWxpZChkYXRlKSB7XG4gICAgcmV0dXJuICFOdW1iZXIuaXNOYU4oZGF0ZS5nZXRUaW1lKCkpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGZvcm1hdERhdGUoZGF0ZSkge1xuICAgIGNvbnN0IGRheSA9IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyhkYXRlLmdldERhdGUoKSk7XG4gICAgY29uc3QgbW9udGggPSBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8oZGF0ZS5nZXRNb250aCgpICsgMSk7XG4gICAgcmV0dXJuIGAke2RhdGUuZ2V0RnVsbFllYXIoKX0tJHttb250aH0tJHtkYXl9YDtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8obnVtYmVyKSB7XG4gICAgcmV0dXJuIFN0cmluZyhudW1iZXIpLnBhZFN0YXJ0KDIsICcwJyk7XG59XG5leHBvcnQgZnVuY3Rpb24gZ2V0RnVsbE1vbnRoTmFtZShtb250aCwgbG9jYWxlID0gJ2RlZmF1bHQnKSB7XG4gICAgcmV0dXJuIG1vbnRoLnRvTG9jYWxlU3RyaW5nKGxvY2FsZSwgeyBtb250aDogJ2xvbmcnIH0pO1xufVxuIiwiZXhwb3J0IGZ1bmN0aW9uIHBhcnNlU3RyaW5nQXNIdG1sKGNvbnRlbnQsIHNlbGVjdG9yID0gJ3RlbXBsYXRlJykge1xuICAgIGNvbnN0IGRvbVBhcnNlciA9IG5ldyBET01QYXJzZXIoKTtcbiAgICBjb25zdCBwYXJzZWQgPSBkb21QYXJzZXIucGFyc2VGcm9tU3RyaW5nKGNvbnRlbnQsICd0ZXh0L2h0bWwnKTtcbiAgICByZXR1cm4gcGFyc2VkLnF1ZXJ5U2VsZWN0b3Ioc2VsZWN0b3IpIHx8IHBhcnNlZC5ib2R5O1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEFic29sdXRlSGVpZ2h0KGVsKSB7XG4gICAgY29uc3Qgc3R5bGVzID0gd2luZG93LmdldENvbXB1dGVkU3R5bGUoZWwpO1xuICAgIGNvbnN0IG1hcmdpbiA9IHBhcnNlRmxvYXQoc3R5bGVzLm1hcmdpblRvcCkgKyBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Cb3R0b20pO1xuICAgIHJldHVybiBNYXRoLmNlaWwoZWwub2Zmc2V0SGVpZ2h0ICsgbWFyZ2luKTtcbn1cbiIsImNvbnN0IGVuZHBvaW50cyA9IHtcbiAgICBhamF4OiBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGBcbn07XG5leHBvcnQgZGVmYXVsdCBlbmRwb2ludHM7XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0Q3VycmVudExpbmtDbGFzcygpIHtcbiAgICBjb25zdCBwYXRoTmFtZSA9IHdpbmRvdy5sb2NhdGlvbi5wYXRobmFtZTtcbiAgICBjb25zdCBmb3JtYXR0ZWRQYXRoTmFtZSA9IHN0cmlwVHJhaWxpbmdTbGFzaChwYXRoTmFtZSk7XG4gICAgY29uc3QgZnVsbFVybCA9IHdpbmRvdy5sb2NhdGlvbi5ocmVmO1xuICAgIGNvbnN0IGZvcm1hdHRlZFVybCA9IHN0cmlwVHJhaWxpbmdTbGFzaChmdWxsVXJsKTtcbiAgICBjb25zdCBhbmNob3JzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKGBcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7cGF0aE5hbWV9XCJdLFxuICAgICAgICBuYXYgYVtocmVmPVwiJHtmb3JtYXR0ZWRQYXRoTmFtZX1cIl0sXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke2Z1bGxVcmx9XCJdLFxuICAgICAgICBuYXYgYVtocmVmPVwiJHtmb3JtYXR0ZWRVcmx9XCJdXG4gICAgYCkpO1xuICAgIGFuY2hvcnMuZm9yRWFjaCgoYW5jaG9yKSA9PiB7XG4gICAgICAgIGFuY2hvci5jbGFzc0xpc3QuYWRkKCdjdXJyZW50LWxpbmsnKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBzdHJpcFRyYWlsaW5nU2xhc2goc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5lbmRzV2l0aCgnLycpID8gc3RyLnNsaWNlKDAsIC0xKSA6IHN0cjtcbn1cbiIsImxldCBsb2FkZWQgPSBmYWxzZTtcbmV4cG9ydCBjb25zdCBzaXRla2V5ID0gJzZMZHYyUmtjQUFBQUFCQ0NMMUpSNURsbUVFVDROeV8yQ21rVmE4TnYnO1xuZXhwb3J0IGZ1bmN0aW9uIGxvYWRSZWNhcHRjaGEoZWxlbWVudHMpIHtcbiAgICBsb29wVGhyb3VnaEVsZW1lbnRzKGVsZW1lbnRzLCB0cnVlLCAoKSA9PiB7XG4gICAgICAgIGluc2VydFJlY2FwdGNoYVNjcmlwdChlbGVtZW50cyk7XG4gICAgfSk7XG59XG5mdW5jdGlvbiBpbnNlcnRSZWNhcHRjaGFTY3JpcHQoZWxlbWVudHMpIHtcbiAgICBpZiAoIWxvYWRlZCkge1xuICAgICAgICBjb25zdCBoZWFkID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoJ2hlYWQnKVswXTtcbiAgICAgICAgY29uc3Qgc2NyaXB0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2NyaXB0Jyk7XG4gICAgICAgIHNjcmlwdC50eXBlID0gJ3RleHQvamF2YXNjcmlwdCc7XG4gICAgICAgIHNjcmlwdC5zcmMgPSBgaHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS9yZWNhcHRjaGEvYXBpLmpzP3JlbmRlcj0ke3NpdGVrZXl9YDtcbiAgICAgICAgaGVhZC5hcHBlbmRDaGlsZChzY3JpcHQpO1xuICAgICAgICBsb2FkZWQgPSB0cnVlO1xuICAgIH1cbiAgICBsb29wVGhyb3VnaEVsZW1lbnRzKGVsZW1lbnRzLCBmYWxzZSwgKCkgPT4ge1xuICAgICAgICBpbnNlcnRSZWNhcHRjaGFTY3JpcHQoZWxlbWVudHMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gbG9vcFRocm91Z2hFbGVtZW50cyhlbGVtZW50cywgYWRkRXZlbnQsIGNhbGxiYWNrKSB7XG4gICAgZm9yIChsZXQgaSA9IDA7IGkgPCBlbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICBbJ2ZvY3VzJywgJ2NsaWNrJywgJ3RvdWNoZW5kJywgJ2JsdXInLCAnaW5wdXQnLCAnY2hhbmdlJywgJ3Byb3BlcnR5Y2hhbmdlJ10uZm9yRWFjaCgoZXZ0KSA9PiB7XG4gICAgICAgICAgICBpZiAoYWRkRXZlbnQpIHtcbiAgICAgICAgICAgICAgICBlbGVtZW50c1tpXS5hZGRFdmVudExpc3RlbmVyKGV2dCwgY2FsbGJhY2spO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0ucmVtb3ZlRXZlbnRMaXN0ZW5lcihldnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gc2Nyb2xsVG9UYXJnZXQodGFyZ2V0LCBkZWZhdWx0T2Zmc2V0ID0gMCwgaGVhZGVyT2Zmc2V0ID0gdHJ1ZSkge1xuICAgIGNvbnN0IGJvZHlUb3BQb3NpdGlvbiA9IGRvY3VtZW50LmJvZHkuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wO1xuICAgIGNvbnN0IGVsZW1lbnRQb3NpdGlvbiA9IHRhcmdldC5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS50b3AgLSBib2R5VG9wUG9zaXRpb247XG4gICAgbGV0IG9mZnNldCA9IGRlZmF1bHRPZmZzZXQ7XG4gICAgaWYgKGhlYWRlck9mZnNldCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnaGVhZGVyJyk7XG4gICAgICAgIGlmIChoZWFkZXIpIHtcbiAgICAgICAgICAgIG9mZnNldCArPSBoZWFkZXIuY2xpZW50SGVpZ2h0O1xuICAgICAgICB9XG4gICAgfVxuICAgIGNvbnN0IG9mZnNldFBvc2l0aW9uID0gZWxlbWVudFBvc2l0aW9uIC0gb2Zmc2V0ICsgMTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oe1xuICAgICAgICB0b3A6IG9mZnNldFBvc2l0aW9uLFxuICAgICAgICBiZWhhdmlvcjogJ3Ntb290aCdcbiAgICB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiB0b0NhbWVsQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcVysoLikvZywgKG1hdGNoLCBjaHIpID0+IGNoci50b1VwcGVyQ2FzZSgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcd1xcUyovZywgKHR4dCkgPT4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpKTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBzZXRWYWxpZGF0aW9uTWVzc2FnZShtZXNzYWdlLCBlbGVtZW50KSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGZvcm1Sb3cgPSAoX2EgPSBlbGVtZW50LmNsb3Nlc3QoJy5mb3JtLXJvdycpKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiBlbGVtZW50O1xuICAgIGNvbnN0IGZvcm1Sb3dQYXJlbnQgPSBmb3JtUm93ID09PSBudWxsIHx8IGZvcm1Sb3cgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGZvcm1Sb3cucGFyZW50RWxlbWVudDtcbiAgICBpZiAoZm9ybVJvdyA9PT0gbnVsbCB8fCAhZm9ybVJvd1BhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHJlbW92ZUV4aXN0aW5nVmFsaWRhdGlvbk1lc3NhZ2VzKGVsZW1lbnQsIGZvcm1Sb3dQYXJlbnQpO1xuICAgIGNvbnN0IHZhbGlkYXRpb25FbGVtZW50ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgdmFsaWRhdGlvbkVsZW1lbnQuY2xhc3NOYW1lID0gJ2FsZXJ0IGFsZXJ0LS13YXJuaW5nIGlubGluZS1mb3JtLWVycm9yJztcbiAgICB2YWxpZGF0aW9uRWxlbWVudC50ZXh0Q29udGVudCA9IG1lc3NhZ2U7XG4gICAgZm9ybVJvd1BhcmVudC5pbnNlcnRCZWZvcmUodmFsaWRhdGlvbkVsZW1lbnQsIGZvcm1Sb3cpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHJlbW92ZUV4aXN0aW5nVmFsaWRhdGlvbk1lc3NhZ2VzKGVsZW1lbnQsIHNlbGVjdG9yKSB7XG4gICAgdmFyIF9hO1xuICAgIGNvbnN0IGdyYW5kcGFyZW50ID0gc2VsZWN0b3IgfHwgKChfYSA9IGVsZW1lbnQucGFyZW50RWxlbWVudCkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnBhcmVudEVsZW1lbnQpO1xuICAgIGlmICghZ3JhbmRwYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBjb25zdCBleGlzdGluZ1ZhbGlkYXRpb25zID0gQXJyYXkuZnJvbShncmFuZHBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCcuYWxlcnQtLXdhcm5pbmcnKSk7XG4gICAgZXhpc3RpbmdWYWxpZGF0aW9ucy5mb3JFYWNoKCh2KSA9PiB7XG4gICAgICAgIHYucmVtb3ZlKCk7XG4gICAgfSk7XG59XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIF9DdXJ0YWluRWxlbWVudF9jb250ZW50LCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2ssIF9DdXJ0YWluRWxlbWVudF9vcGVuLCBfQ3VydGFpbkVsZW1lbnRfZXhwYW5kLCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gsIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucztcbmltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2FjY29yZGlvbi5wY3NzJztcbmltcG9ydCB7IGdldEFic29sdXRlSGVpZ2h0IH0gZnJvbSAnLi4vdXRpbC9kb20nO1xuY2xhc3MgQ3VydGFpbkVsZW1lbnQgZXh0ZW5kcyBIVE1MRGV0YWlsc0VsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnkuc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3Rvcignc3VtbWFyeScpKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQuc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcignLmN1cnRhaW4tY29udGVudCcpKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZy5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrLnNldCh0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgZXZlbnQuc3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICBpZiAoZXZlbnQudGFyZ2V0IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9jb250ZW50LCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjbG9zZScpKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBcImZcIikgfHwgdGhpcy5vcGVuID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluRWxlbWVudF9vcGVuKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldCBvcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ29wZW4nKTtcbiAgICB9XG4gICAgc2V0IG9wZW4odmFsdWUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoJ29wZW4nLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljaywgXCJmXCIpLCB7XG4gICAgICAgICAgICBjYXB0dXJlOiB0cnVlLFxuICAgICAgICAgICAgcGFzc2l2ZTogZmFsc2VcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBcImZcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljaywgXCJmXCIpKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgdHJ1ZSwgXCJmXCIpO1xuICAgICAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2Nsb3NpbmcnKTtcbiAgICAgICAgY29uc3Qgc3RhcnRIZWlnaHQgPSBgJHt0aGlzLm9mZnNldEhlaWdodH1weGA7XG4gICAgICAgIGNvbnN0IGVuZEhlaWdodCA9IGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIFwiZlwiKS5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikpIHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLmNhbmNlbCgpO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgdGhpcy5hbmltYXRlKHtcbiAgICAgICAgICAgIGhlaWdodDogW3N0YXJ0SGVpZ2h0LCBlbmRIZWlnaHRdXG4gICAgICAgIH0sIHtcbiAgICAgICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCdcbiAgICAgICAgfSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikub25maW5pc2ggPSAoKSA9PiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gpLmNhbGwodGhpcywgZmFsc2UpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5vbmNhbmNlbCA9ICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgZmFsc2UsIFwiZlwiKTtcbiAgICAgICAgICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycpO1xuICAgICAgICB9O1xuICAgIH1cbn1cbl9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5ID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljayA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQ3VydGFpbkVsZW1lbnRfb3BlbiA9IGZ1bmN0aW9uIF9DdXJ0YWluRWxlbWVudF9vcGVuKCkge1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gYCR7dGhpcy5vZmZzZXRIZWlnaHR9cHhgO1xuICAgIHRoaXMub3BlbiA9IHRydWU7XG4gICAgd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSgoKSA9PiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfZXhwYW5kKS5jYWxsKHRoaXMpKTtcbn0sIF9DdXJ0YWluRWxlbWVudF9leHBhbmQgPSBmdW5jdGlvbiBfQ3VydGFpbkVsZW1lbnRfZXhwYW5kKCkge1xuICAgIGNvbnN0IHN0YXJ0SGVpZ2h0ID0gYCR7dGhpcy5vZmZzZXRIZWlnaHR9cHhgO1xuICAgIGNvbnN0IGVuZEhlaWdodCA9IGAke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X3N1bW1hcnksIFwiZlwiKS5vZmZzZXRIZWlnaHQgKyBnZXRBYnNvbHV0ZUhlaWdodChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9jb250ZW50LCBcImZcIikpfXB4YDtcbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikuY2FuY2VsKCk7XG4gICAgfVxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgdGhpcy5hbmltYXRlKHtcbiAgICAgICAgaGVpZ2h0OiBbc3RhcnRIZWlnaHQsIGVuZEhlaWdodF1cbiAgICB9LCB7XG4gICAgICAgIGR1cmF0aW9uOiA0MDAsXG4gICAgICAgIGVhc2luZzogJ2Vhc2Utb3V0J1xuICAgIH0pLCBcImZcIik7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikub25maW5pc2ggPSAoKSA9PiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gpLmNhbGwodGhpcywgdHJ1ZSk7XG59LCBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2ggPSBmdW5jdGlvbiBfQ3VydGFpbkVsZW1lbnRfb25BbmltYXRpb25GaW5pc2gob3Blbikge1xuICAgIHRoaXMub3BlbiA9IG9wZW47XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBudWxsLCBcImZcIik7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nLCBmYWxzZSwgXCJmXCIpO1xuICAgIHRoaXMuY2xhc3NMaXN0LnJlbW92ZSgnY2xvc2luZycpO1xuICAgIHRoaXMuc3R5bGUuaGVpZ2h0ID0gJyc7XG4gICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndG9nZ2xlJykpO1xufTtcbmNsYXNzIEFjY29yZGlvbkVsZW1lbnQgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLnNldCh0aGlzLCBbXSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnZGV0YWlscycpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBcImZcIikuZm9yRWFjaCgoY3VydGFpbikgPT4ge1xuICAgICAgICAgICAgY3VydGFpbi5hZGRFdmVudExpc3RlbmVyKCd0b2dnbGUnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKCFjdXJ0YWluLm9wZW4pIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucykuY2FsbCh0aGlzLCBjdXJ0YWluKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucyA9IG5ldyBXZWFrTWFwKCksIF9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucyA9IGZ1bmN0aW9uIF9BY2NvcmRpb25FbGVtZW50X2Nsb3NlT3RoZXJDdXJ0YWlucyhjdXJ0YWluKSB7XG4gICAgY29uc3Qgb3RoZXJDdXJ0YWlucyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMsIFwiZlwiKS5maWx0ZXIoKGMpID0+IGN1cnRhaW4gIT09IGMpO1xuICAgIG90aGVyQ3VydGFpbnMuZm9yRWFjaCgob3RoZXJDdXJ0YWluKSA9PiB7XG4gICAgICAgIGNvbnN0IGN1cnRhaW5FbGVtZW50ID0gb3RoZXJDdXJ0YWluO1xuICAgICAgICBjdXJ0YWluRWxlbWVudC5vcGVuID0gZmFsc2U7XG4gICAgfSk7XG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdhY2NvcmRpb24tZWxlbWVudCcsIEFjY29yZGlvbkVsZW1lbnQpO1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjdXJ0YWluLWVsZW1lbnQnLCBDdXJ0YWluRWxlbWVudCwgeyBleHRlbmRzOiAnZGV0YWlscycgfSk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24sIF9CaXJ0aGRheUZvcm1fZGF5RmllbGQsIF9CaXJ0aGRheUZvcm1fbW9udGhGaWVsZCwgX0JpcnRoZGF5Rm9ybV9nZXREYXlWYWx1ZXMsIF9CaXJ0aGRheUZvcm1fZ2V0TW9udGhWYWx1ZXMsIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQsIF9CaXJ0aGRheUZvcm1fb25TdWNjZXNzLCBfQmlydGhkYXlGb3JtX29uRmFpbHVyZTtcbmltcG9ydCB7IGZvcm1hdERhdGUsIGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybywgZ2V0RnVsbE1vbnRoTmFtZSB9IGZyb20gJy4uL3V0aWwvZGF0ZUhlbHBlcic7XG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4uL3V0aWwvZW5kcG9pbnRzJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuY2xhc3MgQmlydGhkYXlGb3JtIGV4dGVuZHMgSFRNTEZvcm1FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbi5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpKTtcbiAgICAgICAgX0JpcnRoZGF5Rm9ybV9kYXlGaWVsZC5zZXQodGhpcywgdGhpcy5xdWVyeVNlbGVjdG9yKCcjYmlydGhkYXktZGF5JykpO1xuICAgICAgICBfQmlydGhkYXlGb3JtX21vbnRoRmllbGQuc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcignI2JpcnRoZGF5LW1vbnRoJykpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCkuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX29uU3VibWl0KS5iaW5kKHRoaXMpKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9kYXlGaWVsZCwgXCJmXCIpID09PSBudWxsIHx8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkLCBcImZcIikgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fZGF5RmllbGQsIFwiZlwiKS5vcHRpb25WYWx1ZXMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9nZXREYXlWYWx1ZXMpLmNhbGwodGhpcyk7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fbW9udGhGaWVsZCwgXCJmXCIpLm9wdGlvblZhbHVlcyA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzKS5jYWxsKHRoaXMpO1xuICAgICAgICB9LCAxKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQpLmJpbmQodGhpcykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uLCBcImZcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCkuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24gPSBuZXcgV2Vha01hcCgpLCBfQmlydGhkYXlGb3JtX2RheUZpZWxkID0gbmV3IFdlYWtNYXAoKSwgX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkID0gbmV3IFdlYWtNYXAoKSwgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQmlydGhkYXlGb3JtX2dldERheVZhbHVlcyA9IGZ1bmN0aW9uIF9CaXJ0aGRheUZvcm1fZ2V0RGF5VmFsdWVzKCkge1xuICAgIGNvbnN0IHJldHVyblZhbHVlID0ge307XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMzE7IGkrKykge1xuICAgICAgICBjb25zdCBudW0gPSBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8oaSkudG9TdHJpbmcoKTtcbiAgICAgICAgcmV0dXJuVmFsdWVbaV0gPSBudW07XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbn0sIF9CaXJ0aGRheUZvcm1fZ2V0TW9udGhWYWx1ZXMgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzKCkge1xuICAgIGNvbnN0IHJldHVyblZhbHVlID0ge307XG4gICAgZm9yIChsZXQgaSA9IDE7IGkgPD0gMTI7IGkrKykge1xuICAgICAgICBjb25zdCBudW0gPSBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8oaSkudG9TdHJpbmcoKTtcbiAgICAgICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAyMDIxLSR7bnVtfS0wMmApO1xuICAgICAgICBjb25zdCBtb250aE5hbWUgPSBnZXRGdWxsTW9udGhOYW1lKGRhdGUpO1xuICAgICAgICByZXR1cm5WYWx1ZVtpXSA9IG1vbnRoTmFtZTtcbiAgICB9XG4gICAgcmV0dXJuIHJldHVyblZhbHVlO1xufSwgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCA9IGZ1bmN0aW9uIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQoZXZlbnQpIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMpO1xuICAgIGNvbnN0IGRheSA9IGZvcm1EYXRhLmdldCgnZGF5Jyk7XG4gICAgY29uc3QgbW9udGggPSBmb3JtRGF0YS5nZXQoJ21vbnRoJyk7XG4gICAgY29uc3QgeWVhciA9ICcxOTcwJztcbiAgICBpZiAoIWRheSB8fCAhbW9udGgpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBjb25zdCBkYXRlID0gbmV3IERhdGUoYCR7eWVhcn0tJHttb250aH0tJHtkYXl9YCk7XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgYWN0aW9uOiAnYWpheGRhdGVvZmJpcnRoJyxcbiAgICAgICAgZGF0ZTogZm9ybWF0RGF0ZShkYXRlKVxuICAgIH07XG4gICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIGVuZHBvaW50cy5hamF4LCBudWxsLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vblN1Y2Nlc3MpLmJpbmQodGhpcyksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX29uRmFpbHVyZSkuYmluZCh0aGlzKSwgZXZlbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24sIFwiZlwiKSk7XG4gICAgcmV0dXJuIGZhbHNlO1xufSwgX0JpcnRoZGF5Rm9ybV9vblN1Y2Nlc3MgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX29uU3VjY2VzcygpIHtcbiAgICBjb25zdCBibG9jayA9IHRoaXMuY2xvc2VzdCgnW2lzPVwic2lnbnVwLWJsb2NrXCJdJyk7XG4gICAgaWYgKCFibG9jaykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGJsb2NrLmNvbXBsZXRlZCA9IHRydWU7XG59LCBfQmlydGhkYXlGb3JtX29uRmFpbHVyZSA9IGZ1bmN0aW9uIF9CaXJ0aGRheUZvcm1fb25GYWlsdXJlKCkge1xuICAgIC8vIHN0dWZmXG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdiaXJ0aGRheS1mb3JtJywgQmlydGhkYXlGb3JtLCB7IGV4dGVuZHM6ICdmb3JtJyB9KTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgX0Nhcm91c2VsRWxlbWVudF9pdGVtcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBfQ2Fyb3VzZWxFbGVtZW50X3ByZXZCdXR0b24sIF9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbiwgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBfQ2Fyb3VzZWxFbGVtZW50X2NvdW50ZXIsIF9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwsIF9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudCwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSwgX0Nhcm91c2VsRWxlbWVudF9nZXRUcmFuc2xhdGVYLCBfQ2Fyb3VzZWxFbGVtZW50X2dldEl0ZW1XaWR0aDtcbmltcG9ydCB7IG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vcG9seWZpbGxzL21hdGNoTWVkaWEnO1xuY2xhc3MgQ2Fyb3VzZWxFbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMuc2V0KHRoaXMsIFtdKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9saXN0LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9wcmV2QnV0dG9uLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LnNldCh0aGlzLCAwKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLnNldCh0aGlzLCAzKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbC5zZXQodGhpcywgMCk7XG4gICAgfVxuICAgIGdldCBhY3RpdmUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgnYWN0aXZlJyk7XG4gICAgfVxuICAgIHNldCBhY3RpdmUodmFsdWUpIHtcbiAgICAgICAgdGhpcy50b2dnbGVBdHRyaWJ1dGUoJ2FjdGl2ZScsIHZhbHVlKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pdGVtcywgQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWl0ZW1dJykpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWl0ZW1zXScpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9wcmV2QnV0dG9uLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLXByZXZdJyksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24sIHRoaXMucXVlcnlTZWxlY3RvcignW2RhdGEtbmV4dF0nKSwgXCJmXCIpO1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBcImZcIikpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbiwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUpLmNhbGwodGhpcywgLTEpO1xuICAgICAgICB9KTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlKS5jYWxsKHRoaXMsIDEpO1xuICAgICAgICB9KTtcbiAgICAgICAgY29uc3QgY29tcG9uZW50Q2hlY2sgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogMTAyM3B4KScpO1xuICAgICAgICBjb25zdCBzZXR1cCA9ICgpID0+IHtcbiAgICAgICAgICAgIGlmIChjb21wb25lbnRDaGVjay5tYXRjaGVzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgICAgIHRoaXMuZGVpbml0aWFsaXplKCk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplKCk7XG4gICAgICAgIH07XG4gICAgICAgIHNldHVwKCk7XG4gICAgICAgIG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyKGNvbXBvbmVudENoZWNrLCBzZXR1cCwgZmFsc2UpO1xuICAgIH1cbiAgICBkZWluaXRpYWxpemUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgd2luZG93LmNsZWFySW50ZXJ2YWwoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsLCBcImZcIikpO1xuICAgICAgICAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2Euc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RyYW5zZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSkuY2FsbCh0aGlzLCAwKTtcbiAgICAgICAgY29uc3QgbXEgPSB3aW5kb3cubWF0Y2hNZWRpYSgnKG1heC13aWR0aDogNDc5cHgpJyk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQpLmNhbGwodGhpcywgbXEpO1xuICAgICAgICBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihtcSwgKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudCkuY2FsbCh0aGlzLCBtcSk7XG4gICAgICAgIH0sIGZhbHNlKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsLCB3aW5kb3cuc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMubWF0Y2hlcygnOmhvdmVyJykgfHwgdGhpcy5tYXRjaGVzKCc6Zm9jdXMtd2l0aGluJykpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSkuY2FsbCh0aGlzLCAxKTtcbiAgICAgICAgfSwgNzAwMCksIFwiZlwiKTtcbiAgICB9XG59XG5fQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9saXN0ID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9wcmV2QnV0dG9uID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50ID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyID0gbmV3IFdlYWtNYXAoKSwgX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbCA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50ID0gZnVuY3Rpb24gX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50KG1xKSB7XG4gICAgY29uc3QgaXRlbXNTaG93biA9IG1xLm1hdGNoZXMgPyAxIDogMjtcbiAgICBpZiAoaXRlbXNTaG93biA8IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pdGVtcywgXCJmXCIpLmxlbmd0aCkge1xuICAgICAgICB0aGlzLmFjdGl2ZSA9IHRydWU7XG4gICAgfVxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIFwiZlwiKS5sZW5ndGggLSBpdGVtc1Nob3duLCBcImZcIik7XG59LCBfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlID0gZnVuY3Rpb24gX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZShpbmNyZW1lbnQpIHtcbiAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBcImZcIikpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIFwiZlwiKSArIGluY3JlbWVudCwgXCJmXCIpO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgXCJmXCIpIDwgMCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2NvdW50ZXIsIFwiZlwiKSwgXCJmXCIpO1xuICAgIH1cbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIFwiZlwiKSA+IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLCBcImZcIikpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIDAsIFwiZlwiKTtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QsIFwiZlwiKS5zdHlsZS50cmFuc2Zvcm0gPSBgdHJhbnNsYXRlWCgke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X2dldFRyYW5zbGF0ZVgpLmNhbGwodGhpcywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIFwiZlwiKSl9cHgpYDtcbn0sIF9DYXJvdXNlbEVsZW1lbnRfZ2V0VHJhbnNsYXRlWCA9IGZ1bmN0aW9uIF9DYXJvdXNlbEVsZW1lbnRfZ2V0VHJhbnNsYXRlWChjb3VudCkge1xuICAgIGNvbnN0IG1vbnRoV2lkdGggPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9nZXRJdGVtV2lkdGgpLmNhbGwodGhpcyk7XG4gICAgcmV0dXJuIC0obW9udGhXaWR0aCAqIGNvdW50KTtcbn0sIF9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoID0gZnVuY3Rpb24gX0Nhcm91c2VsRWxlbWVudF9nZXRJdGVtV2lkdGgoKSB7XG4gICAgY29uc3QgaXRlbSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pdGVtcywgXCJmXCIpWzBdO1xuICAgIGlmICghaXRlbSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgY29uc3QgaXRlbVdpZHRoID0gaXRlbS5nZXRCb3VuZGluZ0NsaWVudFJlY3QoKS53aWR0aDtcbiAgICBjb25zdCBncmlkR2FwID0gcGFyc2VJbnQod2luZG93LmdldENvbXB1dGVkU3R5bGUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QsIFwiZlwiKSkuY29sdW1uR2FwLCAxMCk7XG4gICAgcmV0dXJuIGl0ZW1XaWR0aCArIGdyaWRHYXA7XG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdjYXJvdXNlbC1lbGVtZW50JywgQ2Fyb3VzZWxFbGVtZW50KTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZSwgX0xhdmFuZHJlU2VsZWN0X25hbWUsIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciwgX0xhdmFuZHJlU2VsZWN0X3VwZGF0ZSwgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbiwgX0xhdmFuZHJlU2VsZWN0X2ZpbHRlciwgX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93biwgX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93bjtcbmltcG9ydCB7IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyB9IGZyb20gJy4uL3V0aWwvZGF0ZUhlbHBlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXZhbmRyZVNlbGVjdCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMuc2V0KHRoaXMsIHt9KTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUuc2V0KHRoaXMsICcnKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X25hbWUuc2V0KHRoaXMsIHRoaXMuZ2V0QXR0cmlidXRlKCduYW1lJykgfHwgJycpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIuc2V0KHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdCkge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24pLmNhbGwodGhpcyk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2xvc2VzdCA9IHRhcmdldC5jbG9zZXN0KCdsYXZhbmRyZS1zZWxlY3QnKTtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0IHx8IGNsb3Nlc3QgPT09IG51bGwgfHwgY2xvc2VzdCAhPT0gdGhpcykge1xuICAgICAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24pLmNhbGwodGhpcyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU5QVVQnKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmNsYXNzTGlzdC5hZGQoJ2xhdmFuZHJlLXNlbGVjdF9faW5wdXQnKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5uYW1lID0gdGhpcy5uYW1lO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmF1dG9jYXBpdGFsaXplID0gJ29mZic7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikuYXV0b2NvbXBsZXRlID0gJ29mZic7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1VMJyksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKS5jbGFzc0xpc3QuYWRkKCdsYXZhbmRyZS1zZWxlY3RfX2Ryb3Bkb3duJyk7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpKTtcbiAgICB9XG4gICAgZ2V0IG5hbWUoKSB7XG4gICAgICAgIHJldHVybiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9uYW1lLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBuYW1lKHZhbHVlKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X25hbWUsIHZhbHVlLCBcImZcIik7XG4gICAgfVxuICAgIGdldCBzZWxlY3RlZFZhbHVlKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZSwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgc2VsZWN0ZWRWYWx1ZSh2YWx1ZSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlLCB2YWx1ZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnZhbHVlID0gdmFsdWUucmVwbGFjZSgvXjArLywgJycpO1xuICAgIH1cbiAgICBnZXQgb3B0aW9uVmFsdWVzKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBvcHRpb25WYWx1ZXModmFsdWUpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLCB2YWx1ZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfdXBkYXRlKS5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdpbnB1dCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9maWx0ZXIpLmJpbmQodGhpcykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93bikuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2lucHV0JywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X2ZpbHRlcikuYmluZCh0aGlzKSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3Rfc2hvd0Ryb3Bkb3duKS5iaW5kKHRoaXMpKTtcbiAgICB9XG59XG5fTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZSA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9uYW1lID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X291dHNpZGVDbGlja0xpc3RlbmVyID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9MYXZhbmRyZVNlbGVjdF91cGRhdGUgPSBmdW5jdGlvbiBfTGF2YW5kcmVTZWxlY3RfdXBkYXRlKCkge1xuICAgIE9iamVjdC5rZXlzKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcywgXCJmXCIpKS5mb3JFYWNoKChrZXkpID0+IHtcbiAgICAgICAgY29uc3Qgb3B0aW9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnbGknKTtcbiAgICAgICAgb3B0aW9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbikuYmluZCh0aGlzKSk7XG4gICAgICAgIG9wdGlvbi5jbGFzc0xpc3QuYWRkKCdsYXZhbmRyZS1zZWxlY3RfX2Ryb3Bkb3duX19pdGVtJyk7XG4gICAgICAgIGNvbnN0IHZhbHVlID0gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcywgXCJmXCIpW2tleV0pLnRvU3RyaW5nKCk7XG4gICAgICAgIG9wdGlvbi5kYXRhc2V0LnZhbHVlID0gdmFsdWU7XG4gICAgICAgIG9wdGlvbi5pbm5lclRleHQgPSB2YWx1ZS5yZXBsYWNlKC9eMCsvLCAnJyk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKS5hcHBlbmRDaGlsZChvcHRpb24pO1xuICAgIH0pO1xuICAgIGNvbnN0IGZpcnN0T3B0aW9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcubGF2YW5kcmUtc2VsZWN0X19kcm9wZG93bl9faXRlbScpO1xuICAgIGlmICghZmlyc3RPcHRpb24pIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBmaXJzdE9wdGlvbi5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xpY2snKSk7XG59LCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0T3B0aW9uID0gZnVuY3Rpb24gX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbihldmVudCkge1xuICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICBjb25zdCB2YWx1ZSA9IHRhcmdldC5kYXRhc2V0LnZhbHVlO1xuICAgIGlmICh2YWx1ZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgdGhpcy5zZWxlY3RlZFZhbHVlID0gdmFsdWU7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93bikuY2FsbCh0aGlzKTtcbn0sIF9MYXZhbmRyZVNlbGVjdF9maWx0ZXIgPSBmdW5jdGlvbiBfTGF2YW5kcmVTZWxlY3RfZmlsdGVyKCkge1xuICAgIGNvbnN0IG9wdGlvbnMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLmxhdmFuZHJlLXNlbGVjdF9fZHJvcGRvd25fX2l0ZW0nKSk7XG4gICAgY29uc3QgdmFsdWUgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnZhbHVlLnRvTG93ZXJDYXNlKCk7XG4gICAgaWYgKCF2YWx1ZSkge1xuICAgICAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICAgICAgb3B0aW9uLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBvcHRpb25zLmZvckVhY2goKG9wdGlvbikgPT4ge1xuICAgICAgICBjb25zdCB0ZXh0ID0gb3B0aW9uLmlubmVyVGV4dC50b0xvd2VyQ2FzZSgpO1xuICAgICAgICBpZiAodGV4dC5pbmRleE9mKHZhbHVlKSAhPT0gLTEpIHtcbiAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSB0cnVlO1xuICAgICAgICB9XG4gICAgfSk7XG59LCBfTGF2YW5kcmVTZWxlY3Rfc2hvd0Ryb3Bkb3duID0gZnVuY3Rpb24gX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93bigpIHtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikuaGlkZGVuID0gZmFsc2U7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciwgXCJmXCIpKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xufSwgX0xhdmFuZHJlU2VsZWN0X2hpZGVEcm9wZG93biA9IGZ1bmN0aW9uIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24oKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpLmhpZGRlbiA9IHRydWU7XG4gICAgZG9jdW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciwgXCJmXCIpKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnbGF2YW5kcmUtc2VsZWN0JywgTGF2YW5kcmVTZWxlY3QpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIF9TaWdudXBCbG9ja190ZW1wbGF0ZSwgX1NpZ251cEJsb2NrX292ZXJsYXksIF9TaWdudXBCbG9ja19ocmVmLCBfU2lnbnVwQmxvY2tfcG9pbnRzLCBfU2lnbnVwQmxvY2tfdHlwZSwgX1NpZ251cEJsb2NrX2NvbXBsZXRlZCwgX1NpZ251cEJsb2NrX21lZGlhUXVlcnksIF9TaWdudXBCbG9ja19tcSwgX1NpZ251cEJsb2NrX2lzTW9iaWxlLCBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSwgX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciwgX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciwgX1NpZ251cEJsb2NrX3NldE92ZXJsYXlFdmVudExpc3RlbmVycywgX1NpZ251cEJsb2NrX2dldFRlbXBsYXRlO1xuaW1wb3J0IHsgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIsIG1hdGNoTWVkaWFSZW1vdmVFdmVudExpc3RlbmVyIH0gZnJvbSAnLi4vcG9seWZpbGxzL21hdGNoTWVkaWEnO1xuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuLi91dGlsL2VuZHBvaW50cyc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFNpZ251cEJsb2NrIGV4dGVuZHMgSFRNTExJRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9TaWdudXBCbG9ja19pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfdGVtcGxhdGUuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfb3ZlcmxheS5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9TaWdudXBCbG9ja19ocmVmLnNldCh0aGlzLCB0aGlzLmRhdGFzZXQuaHJlZiB8fCBudWxsKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX3BvaW50cy5zZXQodGhpcywgTnVtYmVyKHRoaXMuZGF0YXNldC5wb2ludHMpIHx8IDApO1xuICAgICAgICBfU2lnbnVwQmxvY2tfdHlwZS5zZXQodGhpcywgdGhpcy5nZXRBdHRyaWJ1dGUoJ3R5cGUnKSB8fCAnJyk7XG4gICAgICAgIF9TaWdudXBCbG9ja19jb21wbGV0ZWQuc2V0KHRoaXMsIHRoaXMuaGFzQXR0cmlidXRlKCdjb21wbGV0ZWQnKSB8fCBmYWxzZSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19tZWRpYVF1ZXJ5LnNldCh0aGlzLCBnZXRDb21wdXRlZFN0eWxlKGRvY3VtZW50LmRvY3VtZW50RWxlbWVudCkuZ2V0UHJvcGVydHlWYWx1ZSgnLS10YWJsZXQtbGFuZHNjYXBlJykpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfbXEuc2V0KHRoaXMsIG1hdGNoTWVkaWEoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeSwgXCJmXCIpKSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19pc01vYmlsZS5zZXQodGhpcywgZmFsc2UpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIuc2V0KHRoaXMsICgpID0+IHtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCBcImZcIikpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCBcImZcIikuaGlkZGVuID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX3NldE92ZXJsYXlFdmVudExpc3RlbmVycykuY2FsbCh0aGlzKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlci5zZXQodGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2E7XG4gICAgICAgICAgICBpZiAoZXZlbnQpIHtcbiAgICAgICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJywgdHJ1ZSk7XG4gICAgICAgIH0pO1xuICAgICAgICBfU2lnbnVwQmxvY2tfY2xpY2tIYW5kbGVyLnNldCh0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5jb21wbGV0ZWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhhZGRsb3lhbHR5cG9pbnRzJyxcbiAgICAgICAgICAgICAgICBwb2ludHM6IFN0cmluZyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19wb2ludHMsIFwiZlwiKSksXG4gICAgICAgICAgICAgICAgcG9vbDogJ2RlZmF1bHQnLFxuICAgICAgICAgICAgICAgIHR5cGU6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3R5cGUsIFwiZlwiKVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludHMuYWpheCwgbnVsbCwgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY29tcGxldGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgd2luZG93Lm9wZW4oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaHJlZiwgXCJmXCIpLCAnX2JsYW5rJyk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgY29tcGxldGVkKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfY29tcGxldGVkLCBcImZcIik7XG4gICAgfVxuICAgIHNldCBjb21wbGV0ZWQodmFsdWUpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja19jb21wbGV0ZWQsIHZhbHVlLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX3RlbXBsYXRlLCBudWxsLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIG51bGwsIFwiZlwiKTtcbiAgICAgICAgKF9hID0gdGhpcy5xdWVyeVNlbGVjdG9yKCcucG9pbnRzLWdyaWRfX292ZXJsYXknKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnJlbW92ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfc2V0VGVtcGxhdGUpLmNhbGwodGhpcyk7XG4gICAgICAgIGNvbnN0IHRpdGxlcyA9IEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKCcucG9pbnRzLWdyaWRfX3RpdGxlLWNvbnRlbnQnKSk7XG4gICAgICAgIHRpdGxlcy5mb3JFYWNoKCh0aXRsZSkgPT4ge1xuICAgICAgICAgICAgdGl0bGUudG9nZ2xlQXR0cmlidXRlKCdoaWRkZW4nLCAhdGl0bGUuaGlkZGVuKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2lzTW9iaWxlLCBcImZcIikpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VlbnRlcicsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICB9XG4gICAgICAgIG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21xLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlKSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWxlYXZlJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgbWF0Y2hNZWRpYVJlbW92ZUV2ZW50TGlzdGVuZXIoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbXEsIFwiZlwiKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUpKTtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2hyZWYsIFwiZlwiKSkge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbl9TaWdudXBCbG9ja190ZW1wbGF0ZSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19vdmVybGF5ID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX2hyZWYgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfcG9pbnRzID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX3R5cGUgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfY29tcGxldGVkID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX21lZGlhUXVlcnkgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfbXEgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfaXNNb2JpbGUgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfY2xpY2tIYW5kbGVyID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlID0gZnVuY3Rpb24gX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUoKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfaXNNb2JpbGUsICFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tcSwgXCJmXCIpLm1hdGNoZXMsIFwiZlwiKTtcbiAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaXNNb2JpbGUsIFwiZlwiKTtcbn0sIF9TaWdudXBCbG9ja19zZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIF9TaWdudXBCbG9ja19zZXRUZW1wbGF0ZSgpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja190ZW1wbGF0ZSwgXCJmXCIpKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX3RlbXBsYXRlLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGUpLmNhbGwodGhpcyksIFwiZlwiKTtcbiAgICB9XG4gICAgdGhpcy5hcHBlbmRDaGlsZCgoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja190ZW1wbGF0ZSwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX292ZXJsYXksIHRoaXMucXVlcnlTZWxlY3RvcignLnBvaW50cy1ncmlkX19vdmVybGF5JyksIFwiZlwiKTtcbiAgICBjb25zdCBjbG9zZU92ZXJsYXlCdXR0b24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLWNsb3NlXScpO1xuICAgIGlmICghY2xvc2VPdmVybGF5QnV0dG9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY2xvc2VPdmVybGF5QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIsIFwiZlwiKS5iaW5kKHRoaXMpLCBmYWxzZSk7XG59LCBfU2lnbnVwQmxvY2tfc2V0T3ZlcmxheUV2ZW50TGlzdGVuZXJzID0gZnVuY3Rpb24gX1NpZ251cEJsb2NrX3NldE92ZXJsYXlFdmVudExpc3RlbmVycygpIHtcbiAgICB2YXIgX2E7XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2hyZWYsIFwiZlwiKSkge1xuICAgICAgICBjb25zdCBidXR0b24gPSAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5xdWVyeVNlbGVjdG9yKCdidXR0b25baXM9XCJsYXZhbmRyZS1idXR0b25cIl0nKTtcbiAgICAgICAgaWYgKCFidXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19jbGlja0hhbmRsZXIsIFwiZlwiKSk7XG4gICAgfVxufSwgX1NpZ251cEJsb2NrX2dldFRlbXBsYXRlID0gZnVuY3Rpb24gX1NpZ251cEJsb2NrX2dldFRlbXBsYXRlKCkge1xuICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaW50cy1ncmlkLW92ZXJsYXknKTtcbiAgICBpZiAoIWRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2dnZWQtaW4nKSkge1xuICAgICAgICByZXR1cm4gdGVtcGxhdGU7XG4gICAgfVxuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19jb21wbGV0ZWQsIFwiZlwiKSkge1xuICAgICAgICByZXR1cm4gKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKGBwb2ludHMtZ3JpZC1vdmVybGF5LS1jb21wbGV0ZWQtLSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfdHlwZSwgXCJmXCIpfWApIHx8XG4gICAgICAgICAgICBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncG9pbnRzLWdyaWQtb3ZlcmxheS0tY29tcGxldGVkJykpO1xuICAgIH1cbiAgICBjb25zdCB0eXBlVGVtcGxhdGUgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG9pbnRzLWdyaWQtb3ZlcmxheS0tJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja190eXBlLCBcImZcIil9YCk7XG4gICAgaWYgKHR5cGVUZW1wbGF0ZSkge1xuICAgICAgICByZXR1cm4gdHlwZVRlbXBsYXRlO1xuICAgIH1cbiAgICByZXR1cm4gdGVtcGxhdGU7XG59O1xuY3VzdG9tRWxlbWVudHMuZGVmaW5lKCdzaWdudXAtYmxvY2snLCBTaWdudXBCbG9jaywgeyBleHRlbmRzOiAnbGknIH0pO1xuIiwiaW1wb3J0ICcuL3N0eWxlLnBjc3MnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF2YW5kcmVCdXR0b24gZXh0ZW5kcyBIVE1MQnV0dG9uRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5ocmVmID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaXMnLCAnbGF2YW5kcmUtYnV0dG9uJyk7XG4gICAgfVxuICAgIGdldCBocmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJztcbiAgICB9XG4gICAgc2V0IGhyZWYodXJsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc2l6ZScpIHx8ICcnO1xuICAgIH1cbiAgICBzZXQgc2l6ZSh1cmwpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCB1cmwpO1xuICAgIH1cbiAgICBnZXQgcHJpbWFyeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBwcmltYXJ5KGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ByaW1hcnknLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgb3V0bGluZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBvdXRsaW5lKGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ291dGxpbmUnLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgZnVsbFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgc2V0IGZ1bGxXaWR0aChib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmdWxsLXdpZHRoJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IGxvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgncHJpbWFyeScpO1xuICAgIH1cbiAgICBzZXQgbG9hZGluZyhib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmhyZWYpIHtcbiAgICAgICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIGlmICh0aGlzLmhyZWYpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCB0aGlzLmNsaWNrSGFuZGxlcik7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiLCIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW5cbmV4cG9ydCB7fTsiXSwibmFtZXMiOlsiRXZlbnRFbWl0dGVyIiwiTW9kdWxlIiwiY29uc3RydWN0b3IiLCJldmVudEVtaXR0ZXIiLCJpbml0aWFsaXplIiwiaW5pdGlhbGl6ZUNvbXBvbmVudHMiLCJvbiIsImVsZW1lbnQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwiY29tcG9uZW50cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJvbkluaXQiLCJBamF4TG9naW4iLCJBamF4UmVnaXN0ZXIiLCJDb29raWVCYXIiLCJDb3B5Q291cG9uIiwiQ3VydGFpbiIsIkVtYWlsVmFsaWRhdGlvbiIsIkZpZWxkVmFsaWRhdGlvbiIsIkZvcmdvdFBhc3N3b3JkIiwiRm9yZ290UGFzc3dvcmRUb2dnbGUiLCJIZWFkZXJTZWFyY2giLCJJbmZvUG9wdXAiLCJMYXp5TG9hZGVyIiwiTmV3c2xldHRlclN1YnNjcmliZSIsIlBhc3N3b3JkUmV2ZWFsIiwiUmVkZWVtUG9pbnRzRm9yQ291cG9uIiwiU2Nyb2xsVG9Db250ZW50IiwiVmlkZW9NZWRpYVJlc29sdmVyIiwiU2lkZVBhbmVsIiwic2V0Q3VycmVudExpbmtDbGFzcyIsIkxhdmFuZHJlQnV0dG9uIiwiQXBwIiwiYXJndW1lbnRzIiwid3BGb3Jtc1N1Ym1pdEJ1dHRvbnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYXBwSW5pdCIsImFwcCIsImxhenlCYWNrZ3JvdW5kcyIsImZvb3RlclVzcFNsaWRlciIsInNldFRpbWVvdXQiLCJsaXN0IiwicXVlcnlTZWxlY3RvciIsIml0ZW1zIiwidG90YWxXaWR0aCIsIml0ZW0iLCJjbGllbnRXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpY2UiLCJjYWxsIiwid2luZG93IiwibGF6eUJhY2tncm91bmRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsImxhenlCYWNrZ3JvdW5kIiwib2JzZXJ2ZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiZXh0ZW5kcyIsIkRhdGFMYXllciIsImRhdGFMYXllciIsInB1c2giLCJkYXRhIiwiZWNvbW1lcmNlIiwiQ29tcG9uZW50IiwibG9hZFJlY2FwdGNoYSIsInNpdGVrZXkiLCJzZW5kQWpheFJlcXVlc3QiLCJzZXRWYWxpZGF0aW9uTWVzc2FnZSIsImZvcm0iLCJhamF4RW5kcG9pbnQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzVmFsaWQiLCJzZXRFdmVudExpc3RlbmVycyIsImZpZWxkcyIsIkN5cHJlc3MiLCJpbmRleCIsImxlbmd0aCIsImZpZWxkIiwidmFsaWRhdG9yIiwibWF0Y2hlcyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInN1Ym1pdEJ1dHRvbiIsInR5cGUiLCJldmVudCIsIm9uU3VibWl0IiwiX2EiLCJfYiIsInByZXZlbnREZWZhdWx0IiwidmFsaWQiLCJ2YWxpZGl0eSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ1c2VybmFtZSIsImdldCIsInRvU3RyaW5nIiwicGFzc3dvcmQiLCJncmVjYXB0Y2hhIiwiYWN0aW9uIiwicmVjYXB0Y2hhVG9rZW4iLCJ1bmRlZmluZWQiLCJyZWFkeSIsImV4ZWN1dGUiLCJ0aGVuIiwidG9rZW4iLCJvblN1Y2Nlc3MiLCJiaW5kIiwib25GYWlsdXJlIiwicmVzIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiRXJyb3IiLCJtZXRob2QiLCJocmVmIiwiZGF0YXNldCIsInJlZGlyZWN0VXJsIiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZSIsImxvZ2luRm9ybXMiLCJhamF4TG9naW4iLCJDb25maXJtVmFsaWRhdGlvbiIsImVtYWlsRmllbGQiLCJlbWFpbFZhbGlkYXRpb24iLCJwYXNzd29yZEZpZWxkIiwiY29uZmlybVBhc3N3b3JkRmllbGQiLCJjb25maXJtVmFsaWRhdGlvbiIsIl9jIiwiX2QiLCJlbWFpbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInJlZ2lzdGVyRm9ybSIsImFqYXhSZWdpc3RlciIsImNvbmZpcm1GaWVsZCIsImV2ZW50cyIsInZhbHVlIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJzZXQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiX0Nvb2tpZUJhcl9pbnN0YW5jZXMiLCJfQ29va2llQmFyX2VsZW1lbnQiLCJfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCIsIl9Db29raWVCYXJfYWNjZXB0QnV0dG9uIiwiX0Nvb2tpZUJhcl9nZXRFbGVtZW50IiwiX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzIiwiZ2V0Q29va2llVmFsdWUiLCJzZXRDb29raWVWYWx1ZSIsImNvb2tpZU5hbWUiLCJyZW1vdmUiLCJzZXRBY2NlcHRDb29raWUiLCJjb29raWVCYXIiLCJXZWFrTWFwIiwiV2Vha1NldCIsImNsb25lIiwiY2xvbmVOb2RlIiwiY29udGVudCIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIl9Db3B5Q291cG9uX2J1dHRvbiIsIm9uQ2xpY2siLCJjb2RlIiwidGV4dCIsImNvcGllZFRleHQiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiaW5uZXJUZXh0IiwiY29weUJ1dHRvbnMiLCJjb3B5Q291cG9uIiwiX0N1cnRhaW5faW5zdGFuY2VzIiwiX0N1cnRhaW5fdHJhbnNpdGlvbkxpc3RlbmVyIiwiX0N1cnRhaW5faGFuZGxlVHJhbnNpdGlvbiIsImZvbGRCdXR0b24iLCJvbmx5T25Nb2JpbGUiLCJkZWZhdWx0SGVpZ2h0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1heEhlaWdodCIsImUiLCJpbm5lcldpZHRoIiwiY29udGFpbnMiLCJzY3JvbGxIZWlnaHQiLCJyZWFkTGVzcyIsInJlYWRNb3JlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZXMiLCJ0b2dnbGUiLCJjdXJ0YWluVG9nZ2xlIiwiY3VydGFpbiIsInJlbW92ZVByb3BlcnR5IiwicmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXMiLCJlbWFpbElucHV0IiwiY2xvc2VzdCIsImJsdXJUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlQmx1ckV2ZW50Iiwic2VjdXJpdHkiLCJlcnJvciIsInJlZ2lzdGVyRW1haWxJbnB1dCIsImFuY2hvciIsInBhc3N3b3JkRm9yZ2V0QW5jaG9yIiwiZmllbGRWYWxpZGF0aW9uIiwidXNlcl9sb2dpbiIsInBhc3N3b3JkRm9yZ2V0TGlua3MiLCJsaW5rIiwiZm9yZ290UGFzc3dvcmQiLCJwYXNzd29yZEZvcmdldFdyYXBwZXIiLCJnZXRFbGVtZW50QnlJZCIsImxvZ2luV3JhcHBlciIsInRvZ2dsZUF0dHJpYnV0ZSIsImRvY3VtZW50Q2xpY2tIYW5kbGVyIiwiZXZlbnRUYXJnZXQiLCJ3aXRoaW5IZWFkZXIiLCJib2R5Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic2VhcmNoSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJoZWFkZXJTZWFyY2giLCJpbnN0YW5jZSIsInNob3dUaXBweSIsInRpcHB5IiwidGhlbWUiLCJhbGxvd0hUTUwiLCJoaWRlT25DbGljayIsInNob3dPbkNyZWF0ZSIsImludGVyYWN0aXZlIiwib25IaWRkZW4iLCJpIiwiZGVzdHJveSIsInNob3ciLCJoaWRlV2l0aEludGVyYWN0aXZpdHkiLCJ0aXBweUVsZW1lbnRzIiwidGlwcHlFbGVtZW50IiwiaW5mb1BvcHVwIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50cyIsIm9uSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJsYXp5bG9hZCIsIk9ic2VydmVyQ2xhc3MiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJsYXp5SW1hZ2VPYnNlcnZlciIsIkhUTUxQaWN0dXJlRWxlbWVudCIsImxhenkiLCJkaXNjb25uZWN0IiwibGF6eUltYWdlIiwiZWwiLCJtYW5hZ2VDc3NDbGFzc2VzIiwiaW1hZ2UiLCJsb2FkaW5nU3Bpbm5lciIsIkhUTUxJbWFnZUVsZW1lbnQiLCJIVE1MU291cmNlRWxlbWVudCIsInNpemVzIiwic3Jjc2V0Iiwic3JjIiwibGF6eWxvYWRFbGVtZW50cyIsImNvbXBhbnlOYW1lIiwicmVtb3ZlRXJyb3JUZXh0IiwiYXBwZW5kU3VjY2Vzc1RleHQiLCJldmVudENhdGVnb3J5IiwiZXZlbnRBY3Rpb24iLCJldmVudExhYmVsIiwiaWQiLCJhcHBlbmRFcnJvclRleHQiLCJmb3JtcyIsIm5ld3NsZXR0ZXJTdWJzY3JpYmUiLCJwYXNzd29yZElucHV0IiwiY3JlYXRlUmV2ZWFsQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRhYkluZGV4IiwicGFzc3dvcmRSb3dzIiwicGFzc3dvcmRSb3ciLCJwYXNzd29yZFJldmVhbCIsIl9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uIiwiZW5kcG9pbnRzIiwiYWpheCIsInJlZGVlbUJ1dHRvbnMiLCJyZWRlZW1Qb2ludHNGb3JDb3Vwb24iLCJfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQiLCJfU2Nyb2xsVG9Db250ZW50X3RhcmdldCIsInNjcm9sbFRvVGFyZ2V0IiwiaGVhZGVyT2Zmc2V0IiwidGFyZ2V0SWQiLCJzY3JvbGxUbyIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzIiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl9lbGVtZW50IiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl9zb3VyY2VzIiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl90aW1lb3V0IiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUiLCJfVmlkZW9NZWRpYVJlc29sdmVyX3Nob3dTb3VyY2UiLCJtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lciIsIm1xIiwibWF0Y2hNZWRpYSIsIm1xMiIsInNvdXJjZSIsIm9yaWVudGF0aW9uIiwibWF4V2lkdGgiLCJOdW1iZXIiLCJjdXJyZW50T3JpZW50YXRpb24iLCJjdXJyZW50V2lkdGgiLCJkYXRhU3JjIiwiY2FsbGJhY2siLCJldmVudEJ1YmJsaW5nIiwiYWRkTGlzdGVuZXIiLCJtYXRjaE1lZGlhUmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiZGlhbG9nUG9seWZpbGwiLCJkaXNhYmxlQm9keVNjcm9sbCIsImVuYWJsZUJvZHlTY3JvbGwiLCJ0b0NhbWVsQ2FzZSIsIkRpYWxvZyIsIl9pc09wZW4iLCJfdHJhbnNpdGlvblRpbWUiLCJpc09wZW4iLCJjYW1lbERhdGFBdHRyaWJ1dGUiLCJkYXRhQXR0cmlidXRlIiwicmVwbGFjZSIsInRyYW5zaXRpb25UaW1lIiwiZ2V0VHJhbnNpdGlvblRpbWUiLCJwb2x5ZmlsbERpYWxvZyIsIm9wZW4iLCJjbG9zZUJ1dHRvbnMiLCJjbG9zZSIsIm91dHNpZGVDbGljayIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGlja2VkSW5EaWFsb2ciLCJ0b3AiLCJjbGllbnRZIiwiaGVpZ2h0IiwibGVmdCIsImNsaWVudFgiLCJzaG93TW9kYWwiLCJjbGFzc2VzIiwiY2xvc2VkIiwic3R5bGVzIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZHVyYXRpb24iLCJpbmRleE9mIiwicGFyc2VGbG9hdCIsInJlZ2lzdGVyRGlhbG9nIiwicmlnaHQiLCJvcGVuU2lkZVBhbmVsIiwicGFuZWxJRCIsInBhbmVsIiwidGVtcGxhdGUiLCJIVE1MQW5jaG9yRWxlbWVudCIsImVtaXQiLCJzaWRlUGFuZWxJbnN0YW5jZSIsInRvZ2dsZUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJwYW5lbExpbmtzIiwiaGFuZGxlQ3JlYXRpb25FdmVudCIsImJvZHlFbGVtZW50Iiwic2Nyb2xsUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxCZWhhdmlvciIsIm5hbWUiLCJjb29raWUiLCJzcGxpdCIsImZpbmQiLCJyb3ciLCJzdGFydHNXaXRoIiwiY29va2llT3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInBhdGgiLCJ1cGRhdGVkQ29va2llIiwib3B0aW9uS2V5Iiwib3B0aW9uVmFsdWUiLCJpc0RhdGVWYWxpZCIsImRhdGUiLCJpc05hTiIsImdldFRpbWUiLCJmb3JtYXREYXRlIiwiZGF5IiwiZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIm51bWJlciIsIlN0cmluZyIsInBhZFN0YXJ0IiwiZ2V0RnVsbE1vbnRoTmFtZSIsImxvY2FsZSIsInRvTG9jYWxlU3RyaW5nIiwicGFyc2VTdHJpbmdBc0h0bWwiLCJkb21QYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZWQiLCJwYXJzZUZyb21TdHJpbmciLCJnZXRBYnNvbHV0ZUhlaWdodCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk1hdGgiLCJjZWlsIiwib2Zmc2V0SGVpZ2h0IiwicGF0aE5hbWUiLCJwYXRobmFtZSIsImZvcm1hdHRlZFBhdGhOYW1lIiwic3RyaXBUcmFpbGluZ1NsYXNoIiwiZnVsbFVybCIsImZvcm1hdHRlZFVybCIsImFuY2hvcnMiLCJzdHIiLCJlbmRzV2l0aCIsImxvYWRlZCIsImxvb3BUaHJvdWdoRWxlbWVudHMiLCJpbnNlcnRSZWNhcHRjaGFTY3JpcHQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHQiLCJhZGRFdmVudCIsImV2dCIsImRlZmF1bHRPZmZzZXQiLCJib2R5VG9wUG9zaXRpb24iLCJlbGVtZW50UG9zaXRpb24iLCJvZmZzZXQiLCJoZWFkZXIiLCJjbGllbnRIZWlnaHQiLCJvZmZzZXRQb3NpdGlvbiIsImJlaGF2aW9yIiwibWF0Y2giLCJjaHIiLCJ0b1VwcGVyQ2FzZSIsInRvVGl0bGVDYXNlIiwidHh0IiwiY2hhckF0Iiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJmb3JtUm93IiwiZm9ybVJvd1BhcmVudCIsInZhbGlkYXRpb25FbGVtZW50IiwidGV4dENvbnRlbnQiLCJpbnNlcnRCZWZvcmUiLCJncmFuZHBhcmVudCIsImV4aXN0aW5nVmFsaWRhdGlvbnMiLCJ2IiwiX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcyIsIl9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5IiwiX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQiLCJfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nIiwiX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiIsIl9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljayIsIl9DdXJ0YWluRWxlbWVudF9vcGVuIiwiX0N1cnRhaW5FbGVtZW50X2V4cGFuZCIsIl9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCIsIl9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcyIsIl9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zIiwiX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zIiwiQ3VydGFpbkVsZW1lbnQiLCJIVE1MRGV0YWlsc0VsZW1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYXNBdHRyaWJ1dGUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImNhcHR1cmUiLCJwYXNzaXZlIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJzdGFydEhlaWdodCIsImVuZEhlaWdodCIsImNhbmNlbCIsImFuaW1hdGUiLCJlYXNpbmciLCJvbmZpbmlzaCIsIm9uY2FuY2VsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiQWNjb3JkaW9uRWxlbWVudCIsIkhUTUxFbGVtZW50Iiwib3RoZXJDdXJ0YWlucyIsImZpbHRlciIsImMiLCJvdGhlckN1cnRhaW4iLCJjdXJ0YWluRWxlbWVudCIsIl9CaXJ0aGRheUZvcm1faW5zdGFuY2VzIiwiX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24iLCJfQmlydGhkYXlGb3JtX2RheUZpZWxkIiwiX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkIiwiX0JpcnRoZGF5Rm9ybV9nZXREYXlWYWx1ZXMiLCJfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzIiwiX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCIsIl9CaXJ0aGRheUZvcm1fb25TdWNjZXNzIiwiX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmUiLCJCaXJ0aGRheUZvcm0iLCJIVE1MRm9ybUVsZW1lbnQiLCJvcHRpb25WYWx1ZXMiLCJyZXR1cm5WYWx1ZSIsIm51bSIsIkRhdGUiLCJtb250aE5hbWUiLCJ5ZWFyIiwiYmxvY2siLCJjb21wbGV0ZWQiLCJfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcyIsIl9DYXJvdXNlbEVsZW1lbnRfaXRlbXMiLCJfQ2Fyb3VzZWxFbGVtZW50X2xpc3QiLCJfQ2Fyb3VzZWxFbGVtZW50X3ByZXZCdXR0b24iLCJfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24iLCJfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQiLCJfQ2Fyb3VzZWxFbGVtZW50X2NvdW50ZXIiLCJfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsIiwiX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50IiwiX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSIsIl9DYXJvdXNlbEVsZW1lbnRfZ2V0VHJhbnNsYXRlWCIsIl9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoIiwiQ2Fyb3VzZWxFbGVtZW50IiwiYWN0aXZlIiwiY29tcG9uZW50Q2hlY2siLCJzZXR1cCIsImRlaW5pdGlhbGl6ZSIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIml0ZW1zU2hvd24iLCJpbmNyZW1lbnQiLCJ0cmFuc2Zvcm0iLCJjb3VudCIsIm1vbnRoV2lkdGgiLCJpdGVtV2lkdGgiLCJncmlkR2FwIiwicGFyc2VJbnQiLCJjb2x1bW5HYXAiLCJfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzIiwiX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkIiwiX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQiLCJfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzIiwiX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUiLCJfTGF2YW5kcmVTZWxlY3RfbmFtZSIsIl9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciIsIl9MYXZhbmRyZVNlbGVjdF91cGRhdGUiLCJfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0T3B0aW9uIiwiX0xhdmFuZHJlU2VsZWN0X2ZpbHRlciIsIl9MYXZhbmRyZVNlbGVjdF9zaG93RHJvcGRvd24iLCJfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duIiwiTGF2YW5kcmVTZWxlY3QiLCJnZXRBdHRyaWJ1dGUiLCJhdXRvY2FwaXRhbGl6ZSIsImF1dG9jb21wbGV0ZSIsImhpZGRlbiIsInNlbGVjdGVkVmFsdWUiLCJrZXlzIiwia2V5Iiwib3B0aW9uIiwiZmlyc3RPcHRpb24iLCJfU2lnbnVwQmxvY2tfaW5zdGFuY2VzIiwiX1NpZ251cEJsb2NrX3RlbXBsYXRlIiwiX1NpZ251cEJsb2NrX292ZXJsYXkiLCJfU2lnbnVwQmxvY2tfaHJlZiIsIl9TaWdudXBCbG9ja19wb2ludHMiLCJfU2lnbnVwQmxvY2tfdHlwZSIsIl9TaWdudXBCbG9ja19jb21wbGV0ZWQiLCJfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeSIsIl9TaWdudXBCbG9ja19tcSIsIl9TaWdudXBCbG9ja19pc01vYmlsZSIsIl9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlIiwiX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlIiwiX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyIiwiX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyIiwiX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciIsIl9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMiLCJfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGUiLCJTaWdudXBCbG9jayIsIkhUTUxMSUVsZW1lbnQiLCJwb2ludHMiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicG9vbCIsInRpdGxlcyIsInRpdGxlIiwiY2xvc2VPdmVybGF5QnV0dG9uIiwidHlwZVRlbXBsYXRlIiwiSFRNTEJ1dHRvbkVsZW1lbnQiLCJjbGlja0hhbmRsZXIiLCJ1cmwiLCJzaXplIiwicHJpbWFyeSIsImJvb2wiLCJvdXRsaW5lIiwiZnVsbFdpZHRoIiwibG9hZGluZyJdLCJzb3VyY2VSb290IjoiIn0=