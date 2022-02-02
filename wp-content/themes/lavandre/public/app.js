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
/* harmony import */ var _lavandre_button_dist_src_lavandre_button__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @lavandre/button/dist/src/lavandre-button */ "./node_modules/@lavandre/button/dist/src/lavandre-button.js");
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @ungap/custom-elements */ "./node_modules/@ungap/custom-elements/index.js");
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_ungap_custom_elements__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _css_app_pcss__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/app.pcss */ "./assets/css/app.pcss");
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./common/EventEmitter */ "./assets/js/common/EventEmitter.ts");
/* harmony import */ var _components_AjaxLogin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/AjaxLogin */ "./assets/js/components/AjaxLogin.ts");
/* harmony import */ var _components_AjaxRegister__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/AjaxRegister */ "./assets/js/components/AjaxRegister.ts");
/* harmony import */ var _components_CookieBar__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/CookieBar */ "./assets/js/components/CookieBar.ts");
/* harmony import */ var _components_CopyCoupon__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./components/CopyCoupon */ "./assets/js/components/CopyCoupon.ts");
/* harmony import */ var _components_Curtain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./components/Curtain */ "./assets/js/components/Curtain.ts");
/* harmony import */ var _components_EmailValidation__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./components/EmailValidation */ "./assets/js/components/EmailValidation.ts");
/* harmony import */ var _components_FieldValidation__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./components/FieldValidation */ "./assets/js/components/FieldValidation.ts");
/* harmony import */ var _components_ForgotPassword__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./components/ForgotPassword */ "./assets/js/components/ForgotPassword.ts");
/* harmony import */ var _components_ForgotPasswordToggle__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/ForgotPasswordToggle */ "./assets/js/components/ForgotPasswordToggle.ts");
/* harmony import */ var _components_HeaderSearch__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./components/HeaderSearch */ "./assets/js/components/HeaderSearch.ts");
/* harmony import */ var _components_InfoPopup__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./components/InfoPopup */ "./assets/js/components/InfoPopup.ts");
/* harmony import */ var _components_LazyLoader__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./components/LazyLoader */ "./assets/js/components/LazyLoader.ts");
/* harmony import */ var _components_NewsletterSubscribe__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./components/NewsletterSubscribe */ "./assets/js/components/NewsletterSubscribe.ts");
/* harmony import */ var _components_PasswordReveal__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./components/PasswordReveal */ "./assets/js/components/PasswordReveal.ts");
/* harmony import */ var _components_RedeemPointsForCoupon__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ./components/RedeemPointsForCoupon */ "./assets/js/components/RedeemPointsForCoupon.ts");
/* harmony import */ var _components_ScrollToContent__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ./components/ScrollToContent */ "./assets/js/components/ScrollToContent.ts");
/* harmony import */ var _components_VideoMediaResolver__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/VideoMediaResolver */ "./assets/js/components/VideoMediaResolver.ts");
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");
/* harmony import */ var _ui_SidePanel__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(/*! ./ui/SidePanel */ "./assets/js/ui/SidePanel.ts");
/* harmony import */ var _util_links__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(/*! ./util/links */ "./assets/js/util/links.ts");
/* harmony import */ var _web_components_AccordionElement__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(/*! ./web-components/AccordionElement */ "./assets/js/web-components/AccordionElement.ts");
/* harmony import */ var _web_components_BirthdayForm__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(/*! ./web-components/BirthdayForm */ "./assets/js/web-components/BirthdayForm.ts");
/* harmony import */ var _web_components_CarouselElement__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(/*! ./web-components/CarouselElement */ "./assets/js/web-components/CarouselElement.ts");
/* harmony import */ var _web_components_LavandreSelect__WEBPACK_IMPORTED_MODULE_27__ = __webpack_require__(/*! ./web-components/LavandreSelect */ "./assets/js/web-components/LavandreSelect.ts");
/* harmony import */ var _web_components_SignupBlock__WEBPACK_IMPORTED_MODULE_28__ = __webpack_require__(/*! ./web-components/SignupBlock */ "./assets/js/web-components/SignupBlock.ts");





























class App extends _Module__WEBPACK_IMPORTED_MODULE_21__["default"] {
  constructor() {
    super(...arguments);
    this.eventEmitter = _common_EventEmitter__WEBPACK_IMPORTED_MODULE_3__["default"];
    this.components = [_components_CookieBar__WEBPACK_IMPORTED_MODULE_6__["default"], _ui_SidePanel__WEBPACK_IMPORTED_MODULE_22__["default"], _components_Curtain__WEBPACK_IMPORTED_MODULE_8__["default"], _components_InfoPopup__WEBPACK_IMPORTED_MODULE_14__["default"], _components_PasswordReveal__WEBPACK_IMPORTED_MODULE_17__["default"], _components_EmailValidation__WEBPACK_IMPORTED_MODULE_9__["default"], _components_NewsletterSubscribe__WEBPACK_IMPORTED_MODULE_16__["default"], _components_ForgotPassword__WEBPACK_IMPORTED_MODULE_11__["default"], _components_ForgotPasswordToggle__WEBPACK_IMPORTED_MODULE_12__["default"], _components_AjaxLogin__WEBPACK_IMPORTED_MODULE_4__["default"], _components_AjaxRegister__WEBPACK_IMPORTED_MODULE_5__["default"], _components_FieldValidation__WEBPACK_IMPORTED_MODULE_10__["default"], _components_HeaderSearch__WEBPACK_IMPORTED_MODULE_13__["default"], _components_LazyLoader__WEBPACK_IMPORTED_MODULE_15__["default"], _components_ScrollToContent__WEBPACK_IMPORTED_MODULE_19__["default"], _components_VideoMediaResolver__WEBPACK_IMPORTED_MODULE_20__["default"], _components_RedeemPointsForCoupon__WEBPACK_IMPORTED_MODULE_18__["default"], _components_CopyCoupon__WEBPACK_IMPORTED_MODULE_7__["default"]];
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


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_dialog-polyfill_dist_dialog-polyfill_esm_js","vendors-node_modules_lavandre_button_dist_src_lavandre-button_js","assets_js_cart_ts-assets_js_components_AddCouponCode_ts"], function() { return __webpack_exec__("./assets/js/app.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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TUFBSSxDQUFDaE8sUUFBUSxDQUFDc08sSUFBVCxDQUFjN0ssU0FBZCxDQUF3QjRJLFFBQXhCLENBQWlDLFdBQWpDLENBQUwsRUFBb0Q7QUFDaEQsV0FBT3dLLFFBQVA7QUFDSDs7QUFDRCxNQUFJbk4sc0JBQXNCLENBQUMsSUFBRCxFQUFPc2Esc0JBQVAsRUFBK0IsR0FBL0IsQ0FBMUIsRUFBK0Q7QUFDM0QsV0FBUWhrQixRQUFRLENBQUNnTyxjQUFULENBQXlCLG1DQUFrQ3RFLHNCQUFzQixDQUFDLElBQUQsRUFBT3FhLGlCQUFQLEVBQTBCLEdBQTFCLENBQStCLEVBQWhILEtBQ0ovakIsUUFBUSxDQUFDZ08sY0FBVCxDQUF3QixnQ0FBeEIsQ0FESjtBQUVIOztBQUNELFFBQU1tWCxZQUFZLEdBQUdubEIsUUFBUSxDQUFDZ08sY0FBVCxDQUF5Qix3QkFBdUJ0RSxzQkFBc0IsQ0FBQyxJQUFELEVBQU9xYSxpQkFBUCxFQUEwQixHQUExQixDQUErQixFQUFyRyxDQUFyQjs7QUFDQSxNQUFJb0IsWUFBSixFQUFrQjtBQUNkLFdBQU9BLFlBQVA7QUFDSDs7QUFDRCxTQUFPdE8sUUFBUDtBQUNILENBdENEO0FBdUNBcUksY0FBYyxDQUFDQyxNQUFmLENBQXNCLGNBQXRCLEVBQXNDd0YsV0FBdEMsRUFBbUQ7QUFBRXZGLEVBQUFBLE9BQU8sRUFBRTtBQUFYLENBQW5EOzs7Ozs7Ozs7OztBQ3pJQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBOzs7Ozs7Ozs7Ozs7QUNBQTs7Ozs7Ozs7Ozs7O0FDQUE7Ozs7Ozs7Ozs7OztBQ0FBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvTW9kdWxlLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2FwcC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21tb24vRGF0YUxheWVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheExvZ2luLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQWpheFJlZ2lzdGVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ29uZmlybVZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9Db29raWVCYXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9Db3B5Q291cG9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvQ3VydGFpbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0VtYWlsVmFsaWRhdGlvbi50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0ZvcmdvdFBhc3N3b3JkLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmRUb2dnbGUudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9IZWFkZXJTZWFyY2gudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9JbmZvUG9wdXAudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvY29tcG9uZW50cy9MYXp5TG9hZGVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvTmV3c2xldHRlclN1YnNjcmliZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1Bhc3N3b3JkUmV2ZWFsLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvUmVkZWVtUG9pbnRzRm9yQ291cG9uLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU2Nyb2xsVG9Db250ZW50LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVmlkZW9NZWRpYVJlc29sdmVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3BvbHlmaWxscy9tYXRjaE1lZGlhLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91aS9TaWRlUGFuZWwudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9ib2R5LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvY29va2llcy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2RhdGVIZWxwZXIudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9kb20udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9lbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9saW5rcy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL2xvYWRSZWNhcHRjaGEudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9zY3JvbGxUb1RhcmdldC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL3N0cmluZy50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvQWNjb3JkaW9uRWxlbWVudC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy93ZWItY29tcG9uZW50cy9CaXJ0aGRheUZvcm0udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvQ2Fyb3VzZWxFbGVtZW50LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL0xhdmFuZHJlU2VsZWN0LnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL1NpZ251cEJsb2NrLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9hcHAucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fYWNjb3JkaW9uLnBjc3MiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX2Nvb2tpZS1iYXIucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fY3VydGFpbi5wY3NzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2Nzcy9jb21wb25lbnRzL19pbmZvUG9wdXAucGNzcyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9jc3MvY29tcG9uZW50cy9fc2lkZVBhbmVsLnBjc3MiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgJy4vY2FydCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5vbigndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0aWFsaXplQ29tcG9uZW50cyhzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbXBvbmVudC5vbkluaXQoc2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJ0BsYXZhbmRyZS9idXR0b24vZGlzdC9zcmMvbGF2YW5kcmUtYnV0dG9uJztcbmltcG9ydCAnQHVuZ2FwL2N1c3RvbS1lbGVtZW50cyc7XG5pbXBvcnQgJy4uL2Nzcy9hcHAucGNzcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgQWpheExvZ2luIGZyb20gJy4vY29tcG9uZW50cy9BamF4TG9naW4nO1xuaW1wb3J0IEFqYXhSZWdpc3RlciBmcm9tICcuL2NvbXBvbmVudHMvQWpheFJlZ2lzdGVyJztcbmltcG9ydCBDb29raWVCYXIgZnJvbSAnLi9jb21wb25lbnRzL0Nvb2tpZUJhcic7XG5pbXBvcnQgQ29weUNvdXBvbiBmcm9tICcuL2NvbXBvbmVudHMvQ29weUNvdXBvbic7XG5pbXBvcnQgQ3VydGFpbiBmcm9tICcuL2NvbXBvbmVudHMvQ3VydGFpbic7XG5pbXBvcnQgRW1haWxWYWxpZGF0aW9uIGZyb20gJy4vY29tcG9uZW50cy9FbWFpbFZhbGlkYXRpb24nO1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuL2NvbXBvbmVudHMvRmllbGRWYWxpZGF0aW9uJztcbmltcG9ydCBGb3Jnb3RQYXNzd29yZCBmcm9tICcuL2NvbXBvbmVudHMvRm9yZ290UGFzc3dvcmQnO1xuaW1wb3J0IEZvcmdvdFBhc3N3b3JkVG9nZ2xlIGZyb20gJy4vY29tcG9uZW50cy9Gb3Jnb3RQYXNzd29yZFRvZ2dsZSc7XG5pbXBvcnQgSGVhZGVyU2VhcmNoIGZyb20gJy4vY29tcG9uZW50cy9IZWFkZXJTZWFyY2gnO1xuaW1wb3J0IEluZm9Qb3B1cCBmcm9tICcuL2NvbXBvbmVudHMvSW5mb1BvcHVwJztcbmltcG9ydCBMYXp5TG9hZGVyIGZyb20gJy4vY29tcG9uZW50cy9MYXp5TG9hZGVyJztcbmltcG9ydCBOZXdzbGV0dGVyU3Vic2NyaWJlIGZyb20gJy4vY29tcG9uZW50cy9OZXdzbGV0dGVyU3Vic2NyaWJlJztcbmltcG9ydCBQYXNzd29yZFJldmVhbCBmcm9tICcuL2NvbXBvbmVudHMvUGFzc3dvcmRSZXZlYWwnO1xuaW1wb3J0IFJlZGVlbVBvaW50c0ZvckNvdXBvbiBmcm9tICcuL2NvbXBvbmVudHMvUmVkZWVtUG9pbnRzRm9yQ291cG9uJztcbmltcG9ydCBTY3JvbGxUb0NvbnRlbnQgZnJvbSAnLi9jb21wb25lbnRzL1Njcm9sbFRvQ29udGVudCc7XG5pbXBvcnQgVmlkZW9NZWRpYVJlc29sdmVyIGZyb20gJy4vY29tcG9uZW50cy9WaWRlb01lZGlhUmVzb2x2ZXInO1xuaW1wb3J0IE1vZHVsZSBmcm9tICcuL01vZHVsZSc7XG5pbXBvcnQgU2lkZVBhbmVsIGZyb20gJy4vdWkvU2lkZVBhbmVsJztcbmltcG9ydCB7IHNldEN1cnJlbnRMaW5rQ2xhc3MgfSBmcm9tICcuL3V0aWwvbGlua3MnO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL0FjY29yZGlvbkVsZW1lbnQnO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL0JpcnRoZGF5Rm9ybSc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvQ2Fyb3VzZWxFbGVtZW50JztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9MYXZhbmRyZVNlbGVjdCc7XG5pbXBvcnQgJy4vd2ViLWNvbXBvbmVudHMvU2lnbnVwQmxvY2snO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQXBwIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtcbiAgICAgICAgICAgIENvb2tpZUJhcixcbiAgICAgICAgICAgIFNpZGVQYW5lbCxcbiAgICAgICAgICAgIEN1cnRhaW4sXG4gICAgICAgICAgICBJbmZvUG9wdXAsXG4gICAgICAgICAgICBQYXNzd29yZFJldmVhbCxcbiAgICAgICAgICAgIEVtYWlsVmFsaWRhdGlvbixcbiAgICAgICAgICAgIE5ld3NsZXR0ZXJTdWJzY3JpYmUsXG4gICAgICAgICAgICBGb3Jnb3RQYXNzd29yZCxcbiAgICAgICAgICAgIEZvcmdvdFBhc3N3b3JkVG9nZ2xlLFxuICAgICAgICAgICAgQWpheExvZ2luLFxuICAgICAgICAgICAgQWpheFJlZ2lzdGVyLFxuICAgICAgICAgICAgRmllbGRWYWxpZGF0aW9uLFxuICAgICAgICAgICAgSGVhZGVyU2VhcmNoLFxuICAgICAgICAgICAgTGF6eUxvYWRlcixcbiAgICAgICAgICAgIFNjcm9sbFRvQ29udGVudCxcbiAgICAgICAgICAgIFZpZGVvTWVkaWFSZXNvbHZlcixcbiAgICAgICAgICAgIFJlZGVlbVBvaW50c0ZvckNvdXBvbixcbiAgICAgICAgICAgIENvcHlDb3Vwb25cbiAgICAgICAgXTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBzZXRDdXJyZW50TGlua0NsYXNzKCk7XG4gICAgICAgIGNvbnN0IHdwRm9ybXNTdWJtaXRCdXR0b25zID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cIndwZm9ybXNbc3VibWl0XVwiXScpKTtcbiAgICAgICAgd3BGb3Jtc1N1Ym1pdEJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24ucmVtb3ZlQXR0cmlidXRlKCdjbGFzcycpO1xuICAgICAgICAgICAgYnV0dG9uLnNldEF0dHJpYnV0ZSgnaXMnLCAnbGF2YW5kcmUtYnV0dG9uJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdzaXplJywgJ2xhcmdlJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdmdWxsLXdpZHRoJywgJ2xhcmdlJyk7XG4gICAgICAgICAgICBidXR0b24uc2V0QXR0cmlidXRlKCdvdXRsaW5lJywgJ3RydWUnKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuKGZ1bmN0aW9uIGFwcEluaXQoKSB7XG4gICAgY29uc3QgYXBwID0gbmV3IEFwcCgpO1xuICAgIGFwcC5pbml0aWFsaXplKCk7XG4gICAgbGF6eUJhY2tncm91bmRzKCk7XG4gICAgZm9vdGVyVXNwU2xpZGVyKCk7XG59KSgpO1xuZnVuY3Rpb24gZm9vdGVyVXNwU2xpZGVyKCkge1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICBjb25zdCBsaXN0ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnVzcC1zbGlkZXInKTtcbiAgICAgICAgaWYgKCFsaXN0KSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaXRlbXMgPSBBcnJheS5mcm9tKGxpc3QucXVlcnlTZWxlY3RvckFsbCgnLnVzcC1zbGlkZXJfX2l0ZW0nKSk7XG4gICAgICAgIGxldCB0b3RhbFdpZHRoID0gMDtcbiAgICAgICAgaXRlbXMuZm9yRWFjaCgoaXRlbSkgPT4ge1xuICAgICAgICAgICAgdG90YWxXaWR0aCArPSBpdGVtLmNsaWVudFdpZHRoO1xuICAgICAgICB9KTtcbiAgICAgICAgbGlzdC5zdHlsZS53aWR0aCA9IGAke3RvdGFsV2lkdGh9cHhgO1xuICAgIH0sIDMwMCk7XG59XG5mdW5jdGlvbiBsYXp5QmFja2dyb3VuZHMoKSB7XG4gICAgZG9jdW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignRE9NQ29udGVudExvYWRlZCcsICgpID0+IHtcbiAgICAgICAgY29uc3QgbGF6eUJhY2tncm91bmRzID0gW10uc2xpY2UuY2FsbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCcubGF6eS1iYWNrZ3JvdW5kJykpO1xuICAgICAgICBpZiAoJ0ludGVyc2VjdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICAgICAgICAgIGNvbnN0IGxhenlCYWNrZ3JvdW5kT2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGVudHJ5LnRhcmdldC5jbGFzc0xpc3QuYWRkKCd2aXNpYmxlJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBsYXp5QmFja2dyb3VuZE9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIGxhenlCYWNrZ3JvdW5kcy5mb3JFYWNoKChsYXp5QmFja2dyb3VuZCkgPT4ge1xuICAgICAgICAgICAgICAgIGxhenlCYWNrZ3JvdW5kT2JzZXJ2ZXIub2JzZXJ2ZShsYXp5QmFja2dyb3VuZCk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH0pO1xufVxuIiwiY2xhc3MgRGF0YUxheWVyIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIgPSB3aW5kb3cuZGF0YUxheWVyID8gd2luZG93LmRhdGFMYXllciA6IFtdO1xuICAgIH1cbiAgICBwdXNoKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaCh7IGVjb21tZXJjZTogbnVsbCB9KTsgLy8gQ2xlYXIgdGhlIHByZXZpb3VzIGVjb21tZXJjZSBvYmplY3QuXG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRGF0YUxheWVyIH07XG5leHBvcnQgZGVmYXVsdCBuZXcgRGF0YUxheWVyKCk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IERhdGFMYXllciBmcm9tICcuLi9jb21tb24vRGF0YUxheWVyJztcbmltcG9ydCB7IGxvYWRSZWNhcHRjaGEsIHNpdGVrZXkgfSBmcm9tICcuLi91dGlsL2xvYWRSZWNhcHRjaGEnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgeyBzZXRWYWxpZGF0aW9uTWVzc2FnZSB9IGZyb20gJy4uL3V0aWwvdmFsaWRhdGlvbic7XG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4vRmllbGRWYWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEFqYXhMb2dpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgICAgICAvLyBMb2FkIHJlY2FwdGNoYVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGlmICghd2luZG93LkN5cHJlc3MpIHtcbiAgICAgICAgICAgIGxvYWRSZWNhcHRjaGEoZmllbGRzKTtcbiAgICAgICAgfVxuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgdmFsaWRhdG9yID0gbmV3IEZpZWxkVmFsaWRhdGlvbihmaWVsZCk7XG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmllbGQubWF0Y2hlcygnOi13ZWJraXQtYXV0b2ZpbGwnKSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnaW5wdXQnKSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSwgMTAwKTtcbiAgICAgICAgICAgIHZhbGlkYXRvci5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgICAgIGlmIChzdWJtaXRCdXR0b24gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBzdWJtaXRCdXR0b24udHlwZSA9ICdidXR0b24nO1xuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU3VibWl0KGV2ZW50LCBmaWVsZHMpO1xuICAgICAgICB9KTtcbiAgICAgICAgc3VibWl0QnV0dG9uID09PSBudWxsIHx8IHN1Ym1pdEJ1dHRvbiA9PT0gdm9pZCAwID8gdm9pZCAwIDogc3VibWl0QnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uU3VibWl0KGV2ZW50LCBmaWVsZHMpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25TdWJtaXQoZXZlbnQsIGZpZWxkcykge1xuICAgICAgICB2YXIgX2EsIF9iO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFsaWQgPSB0cnVlO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NoYW5nZScpKTtcbiAgICAgICAgICAgIHZhbGlkID0gZmllbGQudmFsaWRpdHkudmFsaWQ7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF2YWxpZCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgIGNvbnN0IHVzZXJuYW1lID0gKChfYSA9IGZvcm1EYXRhLmdldCgndXNlcm5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBjb25zdCBwYXNzd29yZCA9ICgoX2IgPSBmb3JtRGF0YS5nZXQoJ3Bhc3N3b3JkJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgaWYgKCF1c2VybmFtZSB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IHsgZ3JlY2FwdGNoYSB9ID0gd2luZG93O1xuICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4bG9naW4nLFxuICAgICAgICAgICAgcmVjYXB0Y2hhVG9rZW46ICcnLFxuICAgICAgICAgICAgdXNlcm5hbWUsXG4gICAgICAgICAgICBwYXNzd29yZFxuICAgICAgICB9O1xuICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJidXR0b25cIl1bbmFtZT1cImxvZ2luXCJdJykgfHxcbiAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXdpbmRvdy5DeXByZXNzKSB7XG4gICAgICAgICAgICBncmVjYXB0Y2hhLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgICAgICBncmVjYXB0Y2hhLmV4ZWN1dGUoc2l0ZWtleSwgeyBhY3Rpb246ICdBamF4TG9naW4nIH0pLnRoZW4oKHRva2VuKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGRhdGEucmVjYXB0Y2hhVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2J1dHRvblt0eXBlPVwiYnV0dG9uXCJdW25hbWU9XCJsb2dpblwiXScpIHx8IHVuZGVmaW5lZDtcbiAgICAgICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpLCB0aGlzLm9uRmFpbHVyZS5iaW5kKHRoaXMpLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5mb3JtKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXMsIGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIGlzIHdyb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiAnbG9naW4nLFxuICAgICAgICAgICAgbWV0aG9kOiAnQWpheExvZ2luJ1xuICAgICAgICB9O1xuICAgICAgICBEYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZm9ybS5kYXRhc2V0LnJlZGlyZWN0VXJsIHx8ICcvbXktYWNjb3VudC8nO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfVxuICAgIG9uRmFpbHVyZShyZXMpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSBKU09OLnBhcnNlKHJlcyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSByZXNwb25zZS5kYXRhIHx8XG4gICAgICAgICAgICAnVGhpcyBjb21iaW5hdGlvbiBvZiBlbWFpbCBhbmQgcGFzc3dvcmQgaXMgbm90IGtub3duIHRvIHVzLiBQbGVhc2UgdHJ5IGFnYWluIG9yIHJlcXVlc3QgYSBuZXcgcGFzc3dvcmQuJztcbiAgICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UobWVzc2FnZSwgdGhpcy5mb3JtKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGxvZ2luRm9ybXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJyNhamF4LWxvZ2luLWZvcm0nKSk7XG4gICAgICAgIGlmIChsb2dpbkZvcm1zLmxlbmd0aCA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGxvZ2luRm9ybXMuZm9yRWFjaCgoZm9ybSkgPT4ge1xuICAgICAgICAgICAgY29uc3QgYWpheExvZ2luID0gbmV3IEFqYXhMb2dpbihmb3JtKTtcbiAgICAgICAgICAgIGFqYXhMb2dpbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5pbXBvcnQgRGF0YUxheWVyIGZyb20gJy4uL2NvbW1vbi9EYXRhTGF5ZXInO1xuaW1wb3J0IHsgbG9hZFJlY2FwdGNoYSwgc2l0ZWtleSB9IGZyb20gJy4uL3V0aWwvbG9hZFJlY2FwdGNoYSc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCBDb25maXJtVmFsaWRhdGlvbiBmcm9tICcuL0NvbmZpcm1WYWxpZGF0aW9uJztcbmltcG9ydCBFbWFpbFZhbGlkYXRpb24gZnJvbSAnLi9FbWFpbFZhbGlkYXRpb24nO1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuL0ZpZWxkVmFsaWRhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4UmVnaXN0ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGZvcm0pIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICBjb25zdCBlbWFpbEZpZWxkID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJlbWFpbFwiXScpO1xuICAgICAgICBpZiAoZW1haWxGaWVsZCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgY29uc3QgZW1haWxWYWxpZGF0aW9uID0gbmV3IEVtYWlsVmFsaWRhdGlvbihlbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIGVtYWlsVmFsaWRhdGlvbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcGFzc3dvcmRGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCcjcmVnaXN0ZXItcGFzc3dvcmQnKTtcbiAgICAgICAgY29uc3QgY29uZmlybVBhc3N3b3JkRmllbGQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignI2NvbmZpcm0tcGFzc3dvcmQnKTtcbiAgICAgICAgaWYgKHBhc3N3b3JkRmllbGQgJiYgY29uZmlybVBhc3N3b3JkRmllbGQpIHtcbiAgICAgICAgICAgIGNvbnN0IGNvbmZpcm1WYWxpZGF0aW9uID0gbmV3IENvbmZpcm1WYWxpZGF0aW9uKHBhc3N3b3JkRmllbGQsIGNvbmZpcm1QYXNzd29yZEZpZWxkKTtcbiAgICAgICAgICAgIGNvbmZpcm1WYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCdpbnB1dCcpKTtcbiAgICAgICAgLy8gTG9hZCByZWNhcHRjaGFcbiAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICBpZiAoIXdpbmRvdy5DeXByZXNzKSB7XG4gICAgICAgICAgICBsb2FkUmVjYXB0Y2hhKGZpZWxkcyk7XG4gICAgICAgIH1cbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IGZpZWxkcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGZpZWxkID0gZmllbGRzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24oZmllbGQpO1xuICAgICAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm0uYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB2YXIgX2EsIF9iLCBfYywgX2Q7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgbGV0IHZhbGlkID0gdHJ1ZTtcbiAgICAgICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBmaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICAgICAgY29uc3QgZmllbGQgPSBmaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICAgICAgdmFsaWQgPSBmaWVsZC52YWxpZGl0eS52YWxpZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdmFsaWQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSAoKF9hID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBmaXJzdE5hbWUgPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdmaXJzdF9uYW1lJykpID09PSBudWxsIHx8IF9iID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYi50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IGxhc3ROYW1lID0gKChfYyA9IGZvcm1EYXRhLmdldCgnbGFzdF9uYW1lJykpID09PSBudWxsIHx8IF9jID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYy50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIGNvbnN0IHBhc3N3b3JkID0gKChfZCA9IGZvcm1EYXRhLmdldCgncGFzc3dvcmQnKSkgPT09IG51bGwgfHwgX2QgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9kLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgaWYgKCFlbWFpbCB8fCAhcGFzc3dvcmQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb25zdCB7IGdyZWNhcHRjaGEgfSA9IHdpbmRvdztcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheHJlZ2lzdGVyJyxcbiAgICAgICAgICAgICAgICByZWNhcHRjaGFUb2tlbjogJycsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGFzc3dvcmQsXG4gICAgICAgICAgICAgICAgZmlyc3RfbmFtZTogZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3RfbmFtZTogbGFzdE5hbWVcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignYnV0dG9uW3R5cGU9XCJzdWJtaXRcIl0nKSB8fFxuICAgICAgICAgICAgICAgIHVuZGVmaW5lZDtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGlmICghd2luZG93LkN5cHJlc3MpIHtcbiAgICAgICAgICAgICAgICBncmVjYXB0Y2hhLnJlYWR5KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgZ3JlY2FwdGNoYVxuICAgICAgICAgICAgICAgICAgICAgICAgLmV4ZWN1dGUoc2l0ZWtleSwgeyBhY3Rpb246ICdBamF4UmVnaXN0ZXInIH0pXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigodG9rZW4pID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRhdGEucmVjYXB0Y2hhVG9rZW4gPSB0b2tlbjtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdW5kZWZpbmVkLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHVuZGVmaW5lZCwgZXZlbnQsIHN1Ym1pdEJ1dHRvbik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzLCBldmVudCkge1xuICAgICAgICBjb25zdCByZXNwb25zZSA9IHJlcztcbiAgICAgICAgaWYgKHJlc3BvbnNlLnN1Y2Nlc3MgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ3NvbWV0aGluZyBpcyB3cm9uZycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ3NpZ24tdXAnLFxuICAgICAgICAgICAgbWV0aG9kOiAnQWpheFJlZ2lzdGVyJ1xuICAgICAgICB9O1xuICAgICAgICBEYXRhTGF5ZXIucHVzaChkYXRhKTtcbiAgICAgICAgY29uc3QgaHJlZiA9IHRoaXMuZm9ybS5kYXRhc2V0LnJlZGlyZWN0VXJsIHx8ICcvbXktYWNjb3VudC8nO1xuICAgICAgICB3aW5kb3cubG9jYXRpb24uaHJlZiA9IGhyZWY7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCByZWdpc3RlckZvcm0gPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKCcjYWpheC1yZWdpc3Rlci1mb3JtJyk7XG4gICAgICAgIGlmIChyZWdpc3RlckZvcm0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBhamF4UmVnaXN0ZXIgPSBuZXcgQWpheFJlZ2lzdGVyKHJlZ2lzdGVyRm9ybSk7XG4gICAgICAgIGFqYXhSZWdpc3Rlci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29uZmlybVZhbGlkYXRpb24ge1xuICAgIGNvbnN0cnVjdG9yKGZpZWxkLCBjb25maXJtRmllbGQpIHtcbiAgICAgICAgdGhpcy5maWVsZCA9IGZpZWxkO1xuICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZCA9IGNvbmZpcm1GaWVsZDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmZpZWxkIHx8ICF0aGlzLmNvbmZpcm1GaWVsZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNaXNzaW5nIGZpZWxkcycpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGV2ZW50cyA9IFsnY2hhbmdlJywgJ2lucHV0J107XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBldmVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBldmVudCA9IGV2ZW50c1tpbmRleF07XG4gICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5hZGRFdmVudExpc3RlbmVyKGV2ZW50LCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKHRoaXMuZmllbGQudmFsdWUgIT09IHRoaXMuY29uZmlybUZpZWxkLnZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IG1lc3NhZ2UgPSAnVmFsdWUgaXMgbm90IGVxdWFsJztcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5jb25maXJtRmllbGQuc2V0Q3VzdG9tVmFsaWRpdHkobWVzc2FnZSk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmNvbmZpcm1GaWVsZC5zZXRDdXN0b21WYWxpZGl0eSgnJyk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuY29uZmlybUZpZWxkLnJlcG9ydFZhbGlkaXR5KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0Nvb2tpZUJhcl9pbnN0YW5jZXMsIF9Db29raWVCYXJfZWxlbWVudCwgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIF9Db29raWVCYXJfYWNjZXB0QnV0dG9uLCBfQ29va2llQmFyX2dldEVsZW1lbnQsIF9Db29raWVCYXJfYWNjZXB0Q29va2llcztcbmltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2Nvb2tpZS1iYXIucGNzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgZ2V0Q29va2llVmFsdWUsIHNldENvb2tpZVZhbHVlIH0gZnJvbSAnLi4vdXRpbC9jb29raWVzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENvb2tpZUJhciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3Ioc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICBfQ29va2llQmFyX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9Db29raWVCYXJfZWxlbWVudC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfQ29va2llQmFyX2FjY2VwdEJ1dHRvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNjb29raWUtYmFyLXRlbXBsYXRlJyksIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgXCJmXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKGdldENvb2tpZVZhbHVlKENvb2tpZUJhci5jb29raWVOYW1lKSkge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCwgXCJmXCIpLnJlbW92ZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nvb2tpZUJhcl9lbGVtZW50LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfaW5zdGFuY2VzLCBcIm1cIiwgX0Nvb2tpZUJhcl9nZXRFbGVtZW50KS5jYWxsKHRoaXMpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nvb2tpZUJhcl9hY2NlcHRCdXR0b24sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl9lbGVtZW50LCBcImZcIikucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImNvb2tpZXMtYWNjZXB0XCJdJyksIFwiZlwiKTtcbiAgICAgICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29va2llQmFyX2FjY2VwdEJ1dHRvbiwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfaW5zdGFuY2VzLCBcIm1cIiwgX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzKS5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgc3RhdGljIHNldEFjY2VwdENvb2tpZSgpIHtcbiAgICAgICAgc2V0Q29va2llVmFsdWUoQ29va2llQmFyLmNvb2tpZU5hbWUsICd0cnVlJywge1xuICAgICAgICAgICAgJ21heC1hZ2UnOiAzMTUzNjAwMFxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGNvb2tpZUJhciA9IG5ldyBDb29raWVCYXIoc2VsZWN0b3IpO1xuICAgICAgICBjb29raWVCYXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbl9Db29raWVCYXJfZWxlbWVudCA9IG5ldyBXZWFrTWFwKCksIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50ID0gbmV3IFdlYWtNYXAoKSwgX0Nvb2tpZUJhcl9hY2NlcHRCdXR0b24gPSBuZXcgV2Vha01hcCgpLCBfQ29va2llQmFyX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9Db29raWVCYXJfZ2V0RWxlbWVudCA9IGZ1bmN0aW9uIF9Db29raWVCYXJfZ2V0RWxlbWVudCgpIHtcbiAgICBjb25zdCBjbG9uZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl90ZW1wbGF0ZUVsZW1lbnQsIFwiZlwiKS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgY29uc3QgeyBjb250ZW50IH0gPSBjbG9uZTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db29raWVCYXJfdGVtcGxhdGVFbGVtZW50LCBcImZcIikucGFyZW50RWxlbWVudC5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICByZXR1cm4gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcm9sZT1cImNvb2tpZS1iYXJcIl0nKTtcbn0sIF9Db29raWVCYXJfYWNjZXB0Q29va2llcyA9IGZ1bmN0aW9uIF9Db29raWVCYXJfYWNjZXB0Q29va2llcygpIHtcbiAgICB2YXIgX2E7XG4gICAgQ29va2llQmFyLnNldEFjY2VwdENvb2tpZSgpO1xuICAgIChfYSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nvb2tpZUJhcl9lbGVtZW50LCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbn07XG5Db29raWVCYXIuY29va2llTmFtZSA9ICdhcHByb3ZlZF9jb29raWVzJztcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQ29weUNvdXBvbl9idXR0b247XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ29weUNvdXBvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoYnV0dG9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9Db3B5Q291cG9uX2J1dHRvbi5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIGJ1dHRvbiwgXCJmXCIpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNsaWNrKGV2ZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgY29uc3QgY29kZSA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikuZGF0YXNldC5jb2RlO1xuICAgICAgICBjb25zdCB0ZXh0ID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5kYXRhc2V0LnRleHQ7XG4gICAgICAgIGNvbnN0IGNvcGllZFRleHQgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmRhdGFzZXQuY29waWVkVGV4dDtcbiAgICAgICAgY29uc29sZS5sb2codGV4dCwgY29waWVkVGV4dCk7XG4gICAgICAgIGlmICghY29kZSB8fCAhdGV4dCB8fCAhY29waWVkVGV4dCkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIG5hdmlnYXRvci5jbGlwYm9hcmQud3JpdGVUZXh0KGNvZGUpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9Db3B5Q291cG9uX2J1dHRvbiwgXCJmXCIpLmlubmVyVGV4dCA9IGNvcGllZFRleHQ7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ29weUNvdXBvbl9idXR0b24sIFwiZlwiKS5pbm5lclRleHQgPSB0ZXh0O1xuICAgICAgICB9LCAzMDAwKTtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIV9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0NvcHlDb3Vwb25fYnV0dG9uLCBcImZcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJywgcmVzcG9uc2UpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnZmFpbHVyZScsIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IGNvcHlCdXR0b25zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1yb2xlPVwiY29weS1jb3Vwb25cIl0nKSk7XG4gICAgICAgIGlmIChjb3B5QnV0dG9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb3B5QnV0dG9ucy5mb3JFYWNoKChidXR0b24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGNvcHlDb3Vwb24gPSBuZXcgQ29weUNvdXBvbihidXR0b24pO1xuICAgICAgICAgICAgY29weUNvdXBvbi5pbml0aWFsaXplKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbl9Db3B5Q291cG9uX2J1dHRvbiA9IG5ldyBXZWFrTWFwKCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfQ3VydGFpbl9pbnN0YW5jZXMsIF9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciwgX0N1cnRhaW5faGFuZGxlVHJhbnNpdGlvbjtcbmltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2N1cnRhaW4ucGNzcyc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ3VydGFpbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCwgZm9sZEJ1dHRvbiwgb25seU9uTW9iaWxlID0gZmFsc2UpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX0N1cnRhaW5faW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0N1cnRhaW5fdHJhbnNpdGlvbkxpc3RlbmVyLnNldCh0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluX2luc3RhbmNlcywgXCJtXCIsIF9DdXJ0YWluX2hhbmRsZVRyYW5zaXRpb24pLmNhbGwodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgICAgICB0aGlzLmZvbGRCdXR0b24gPSBmb2xkQnV0dG9uO1xuICAgICAgICB0aGlzLm9ubHlPbk1vYmlsZSA9IG9ubHlPbk1vYmlsZTtcbiAgICAgICAgdGhpcy5kZWZhdWx0SGVpZ2h0ID1cbiAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5tYXhIZWlnaHQgIT09IHVuZGVmaW5lZCAmJlxuICAgICAgICAgICAgICAgIGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KS5tYXhIZWlnaHQgIT09ICdub25lJ1xuICAgICAgICAgICAgICAgID8gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpLm1heEhlaWdodFxuICAgICAgICAgICAgICAgIDogJzBweCc7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmZvbGRCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMub25seU9uTW9iaWxlICYmIHdpbmRvdy5pbm5lcldpZHRoID49IDEwMjQpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlLnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZWxlbWVudC5jbGFzc0xpc3QuY29udGFpbnMoJ2FjdGl2ZScpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbiAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gdGhpcy5kZWZhdWx0SGVpZ2h0O1xuICAgICAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gYCR7dGhpcy5lbGVtZW50LnNjcm9sbEhlaWdodH1weGA7XG4gICAgICAgICAgICAgICAgfSwgMSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLmZvbGRCdXR0b24uY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIHRoaXMuZWxlbWVudC5zdHlsZS5tYXhIZWlnaHQgPSBgJHt0aGlzLmVsZW1lbnQuc2Nyb2xsSGVpZ2h0fXB4YDtcbiAgICAgICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50LnN0eWxlLm1heEhlaWdodCA9IHRoaXMuZGVmYXVsdEhlaWdodDtcbiAgICAgICAgICAgICAgICB9LCAxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghdGhpcy5mb2xkQnV0dG9uLmRhdGFzZXQucmVhZExlc3MgfHwgIXRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHRoaXMuZm9sZEJ1dHRvbi5pbm5lclRleHQgPT09IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRNb3JlKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5mb2xkQnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuZm9sZEJ1dHRvbi5kYXRhc2V0LnJlYWRMZXNzO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuZm9sZEJ1dHRvbi5pbm5lclRleHQgPSB0aGlzLmZvbGRCdXR0b24uZGF0YXNldC5yZWFkTW9yZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIsIFwiZlwiKSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0cmFuc2l0aW9uZW5kJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbl90cmFuc2l0aW9uTGlzdGVuZXIsIFwiZlwiKSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50IHx8ICF0aGlzLmZvbGRCdXR0b24pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHRvZ2dsZXMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWN1cnRhaW4tdG9nZ2xlXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRvZ2dsZXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0b2dnbGUgPSB0b2dnbGVzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGNvbnRlbnQgPSBzZWxlY3Rvci5xdWVyeVNlbGVjdG9yKGBbZGF0YS1jdXJ0YWluLWNvbnRlbnQ9XCIke3RvZ2dsZS5kYXRhc2V0LmN1cnRhaW5Ub2dnbGV9XCJdYCk7XG4gICAgICAgICAgICBpZiAoIWNvbnRlbnQpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IG9ubHlPbk1vYmlsZSA9ICEhKGNvbnRlbnQuZGF0YXNldC5vbmx5T25Nb2JpbGUgJiYgY29udGVudC5kYXRhc2V0Lm9ubHlPbk1vYmlsZSA9PT0gJ3RydWUnKTtcbiAgICAgICAgICAgIGNvbnN0IGN1cnRhaW4gPSBuZXcgQ3VydGFpbihjb250ZW50LCB0b2dnbGUsIG9ubHlPbk1vYmlsZSk7XG4gICAgICAgICAgICBjdXJ0YWluLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbl9DdXJ0YWluX3RyYW5zaXRpb25MaXN0ZW5lciA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9DdXJ0YWluX2hhbmRsZVRyYW5zaXRpb24gPSBmdW5jdGlvbiBfQ3VydGFpbl9oYW5kbGVUcmFuc2l0aW9uKCkge1xuICAgIGlmICh0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmNvbnRhaW5zKCdhY3RpdmUnKSkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuc3R5bGUubWF4SGVpZ2h0ID0gJ25vbmUnO1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuZWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnbWF4SGVpZ2h0Jyk7XG59O1xuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuaW1wb3J0IHsgcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXMsIHNldFZhbGlkYXRpb25NZXNzYWdlIH0gZnJvbSAnLi4vdXRpbC92YWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEVtYWlsVmFsaWRhdGlvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5lbWFpbElucHV0ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5mb3JtID0gdGhpcy5lbWFpbElucHV0LmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGxldCBibHVyVGltZW91dCA9IG51bGw7XG4gICAgICAgIHRoaXMuZW1haWxJbnB1dC5hZGRFdmVudExpc3RlbmVyKCdibHVyJywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKGJsdXJUaW1lb3V0KSB7XG4gICAgICAgICAgICAgICAgd2luZG93LmNsZWFyVGltZW91dChibHVyVGltZW91dCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBibHVyVGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmhhbmRsZUJsdXJFdmVudCgpO1xuICAgICAgICAgICAgfSwgNTAwKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGhhbmRsZUJsdXJFdmVudCgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzLmZvcm0pO1xuICAgICAgICBjb25zdCB7IHZhbHVlIH0gPSB0aGlzLmVtYWlsSW5wdXQ7XG4gICAgICAgIGNvbnN0IHNlY3VyaXR5ID0gKChfYSA9IGZvcm1EYXRhLmdldCgnd29vY29tbWVyY2UtZW1haWwtY2hlY2stbm9uY2UnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhlbWFpbGNoZWNrJyxcbiAgICAgICAgICAgIGVtYWlsOiB2YWx1ZSxcbiAgICAgICAgICAgIHNlY3VyaXR5XG4gICAgICAgIH07XG4gICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIG9uU3VjY2VzcygpIHtcbiAgICAgICAgcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXModGhpcy5lbWFpbElucHV0KTtcbiAgICB9XG4gICAgb25GYWlsdXJlKGVycm9yKSB7XG4gICAgICAgIHNldFZhbGlkYXRpb25NZXNzYWdlKGVycm9yLm1lc3NhZ2UsIHRoaXMuZW1haWxJbnB1dCk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbWFpbElucHV0IHx8ICF0aGlzLmZvcm0pIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZ2lzdGVyRW1haWxJbnB1dCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJyNyZWdfZW1haWwnKTtcbiAgICAgICAgaWYgKHJlZ2lzdGVyRW1haWxJbnB1dCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVtYWlsVmFsaWRhdGlvbiA9IG5ldyBFbWFpbFZhbGlkYXRpb24ocmVnaXN0ZXJFbWFpbElucHV0KTtcbiAgICAgICAgZW1haWxWYWxpZGF0aW9uLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5pbXBvcnQgeyBzZXRWYWxpZGF0aW9uTWVzc2FnZSB9IGZyb20gJy4uL3V0aWwvdmFsaWRhdGlvbic7XG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4vRmllbGRWYWxpZGF0aW9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEZvcmdvdFBhc3N3b3JkIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihhbmNob3IpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IgPSBhbmNob3I7XG4gICAgICAgIHRoaXMuZm9ybSA9IHRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IuY2xvc2VzdCgnZm9ybScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRFdmVudExpc3RlbmVycygpO1xuICAgIH1cbiAgICBzZXRFdmVudExpc3RlbmVycygpIHtcbiAgICAgICAgdGhpcy5wYXNzd29yZEZvcmdldEFuY2hvci5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKHRoaXMuZm9ybSk7XG4gICAgICAgICAgICBjb25zdCB1c2VybmFtZSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ3VzZXJuYW1lJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICAgICAgICAgIC8vIGNvbnN0IHNlY3VyaXR5OiBzdHJpbmcgPSBmb3JtRGF0YS5nZXQoJ2ZvcmdvdHNlY3VyaXR5Jyk/LnRvU3RyaW5nKCkgfHwgJyc7XG4gICAgICAgICAgICBjb25zdCBlbWFpbEZpZWxkID0gdGhpcy5mb3JtLnVzZXJuYW1lO1xuICAgICAgICAgICAgY29uc3QgZmllbGRWYWxpZGF0aW9uID0gbmV3IEZpZWxkVmFsaWRhdGlvbihlbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIGZpZWxkVmFsaWRhdGlvbi5pbml0aWFsaXplKCk7XG4gICAgICAgICAgICBlbWFpbEZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd2YWxpZGF0ZScpKTtcbiAgICAgICAgICAgIGlmICghdXNlcm5hbWUpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1VzZXJuYW1lIG5vdCBzZXQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgYWN0aW9uOiAnYWpheGZvcmdvdHBhc3N3b3JkJyxcbiAgICAgICAgICAgICAgICB1c2VyX2xvZ2luOiB1c2VybmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Y2Nlc3MocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gcmVzO1xuICAgICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLCB0aGlzLmZvcm0pO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICBzZXRWYWxpZGF0aW9uTWVzc2FnZShyZXNwb25zZS5kYXRhLCB0aGlzLmZvcm0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMucGFzc3dvcmRGb3JnZXRBbmNob3IgfHwgIXRoaXMuZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcGFzc3dvcmRGb3JnZXRMaW5rcyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtcm9sZT1cInBhc3N3b3JkLWZvcmdldFwiXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHBhc3N3b3JkRm9yZ2V0TGlua3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBsaW5rID0gcGFzc3dvcmRGb3JnZXRMaW5rc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBmb3Jnb3RQYXNzd29yZCA9IG5ldyBGb3Jnb3RQYXNzd29yZChsaW5rKTtcbiAgICAgICAgICAgIGZvcmdvdFBhc3N3b3JkLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBGb3Jnb3RQYXNzd29yZFRvZ2dsZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IodG9nZ2xlKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudG9nZ2xlID0gdG9nZ2xlO1xuICAgICAgICB0aGlzLnBhc3N3b3JkRm9yZ2V0V3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwYXNzd29yZC1mb3JnZXQtZm9ybScpO1xuICAgICAgICB0aGlzLmxvZ2luV3JhcHBlciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdsb2dpbi1yZWdpc3Rlci1mb3JtJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLnRvZ2dsZS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHRoaXMubG9naW5XcmFwcGVyLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJyk7XG4gICAgICAgICAgICB0aGlzLnBhc3N3b3JkRm9yZ2V0V3JhcHBlci50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLnBhc3N3b3JkRm9yZ2V0V3JhcHBlciB8fCAhdGhpcy5sb2dpbldyYXBwZXIpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHBhc3N3b3JkRm9yZ2V0TGlua3MgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJwYXNzd29yZC1mb3JnZXQtdG9nZ2xlXCJdJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgcGFzc3dvcmRGb3JnZXRMaW5rcy5sZW5ndGg7IGluZGV4KyspIHtcbiAgICAgICAgICAgIGNvbnN0IGxpbmsgPSBwYXNzd29yZEZvcmdldExpbmtzW2luZGV4XTtcbiAgICAgICAgICAgIGNvbnN0IGZvcmdvdFBhc3N3b3JkID0gbmV3IEZvcmdvdFBhc3N3b3JkVG9nZ2xlKGxpbmspO1xuICAgICAgICAgICAgZm9yZ290UGFzc3dvcmQuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEhlYWRlclNlYXJjaCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBkb2N1bWVudENsaWNrSGFuZGxlciA9IChldmVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgZXZlbnRUYXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgICAgICAgICBpZiAoZXZlbnRUYXJnZXQgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCB3aXRoaW5IZWFkZXIgPSBldmVudFRhcmdldC5jbG9zZXN0KCcuaGVhZGVyX19zZWFyY2gnKSAhPT0gbnVsbDtcbiAgICAgICAgICAgIGlmICh3aXRoaW5IZWFkZXIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZG9jdW1lbnRDbGlja0hhbmRsZXIpO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgY29uc3Qgc2VhcmNoSW5wdXRFbGVtZW50ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LXNlYXJjaC1maWVsZCcpO1xuICAgICAgICAgICAgaWYgKHNlYXJjaElucHV0RWxlbWVudCAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHNlYXJjaElucHV0RWxlbWVudC5mb2N1cygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZG9jdW1lbnQuYm9keS5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIGRvY3VtZW50Q2xpY2tIYW5kbGVyKTtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBkb2N1bWVudENsaWNrSGFuZGxlcik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyU2VhcmNoID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignLmhlYWRlcl9fc2VhcmNoJyk7XG4gICAgICAgIGlmIChoZWFkZXJTZWFyY2ggPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBIZWFkZXJTZWFyY2goaGVhZGVyU2VhcmNoKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX2luZm9Qb3B1cC5wY3NzJztcbmltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbmZvUG9wdXAgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQsIGV2ZW50ID0gJ21vdXNlb3ZlcicpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5ldmVudCA9IGV2ZW50O1xuICAgICAgICB0aGlzLmNvbnRlbnQgPSB0aGlzLmVsZW1lbnQuZGF0YXNldC5jb250ZW50IHx8ICcnO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAodGhpcy5pc1ZhbGlkKCkgPT09IGZhbHNlKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIodGhpcy5ldmVudCwgdGhpcy5zaG93VGlwcHkuYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIHNob3dUaXBweShlKSB7XG4gICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSB3aW5kb3cudGlwcHkodGhpcy5lbGVtZW50LCB7XG4gICAgICAgICAgICBjb250ZW50OiB0aGlzLmNvbnRlbnQsXG4gICAgICAgICAgICB0aGVtZTogJ2xpZ2h0JyxcbiAgICAgICAgICAgIGFsbG93SFRNTDogdHJ1ZSxcbiAgICAgICAgICAgIGhpZGVPbkNsaWNrOiB0cnVlLFxuICAgICAgICAgICAgc2hvd09uQ3JlYXRlOiB0cnVlLFxuICAgICAgICAgICAgaW50ZXJhY3RpdmU6IHRydWUsXG4gICAgICAgICAgICBvbkhpZGRlbjogKGkpID0+IHtcbiAgICAgICAgICAgICAgICBpLmRlc3Ryb3koKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICAgIGlmIChpbnN0YW5jZSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaW5zdGFuY2Uuc2hvdygpO1xuICAgICAgICBpbnN0YW5jZS5oaWRlV2l0aEludGVyYWN0aXZpdHkoZSk7XG4gICAgfVxuICAgIGlzVmFsaWQoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50IHx8ICF0aGlzLmNvbnRlbnQpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHRpcHB5RWxlbWVudHMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJ0aXBweVwiXScpKTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRpcHB5RWxlbWVudHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB0aXBweUVsZW1lbnQgPSB0aXBweUVsZW1lbnRzW2luZGV4XTtcbiAgICAgICAgICAgIGlmICghdGlwcHlFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBpbmZvUG9wdXAgPSBuZXcgSW5mb1BvcHVwKHRpcHB5RWxlbWVudCwgJ21vdXNlb3ZlcicpO1xuICAgICAgICAgICAgaW5mb1BvcHVwLmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBMYXp5TG9hZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50KSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGVsZW1lbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSB0aGlzLmdldEVsZW1lbnRzKCk7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50cy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmluaXRpYWxpemUoKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCdJbnRlcnNlY3Rpb25PYnNlcnZlcicgaW4gd2luZG93KSB7XG4gICAgICAgICAgICB0aGlzLm9uSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoSW50ZXJzZWN0aW9uT2JzZXJ2ZXIpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgdGhpcy5lbGVtZW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuZWxlbWVudHNbaV07XG4gICAgICAgICAgICB0aGlzLmxhenlsb2FkKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoT2JzZXJ2ZXJDbGFzcyA9IEludGVyc2VjdGlvbk9ic2VydmVyKSB7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogJzI1MHB4IDBweCcsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgY29uc3QgbGF6eUltYWdlT2JzZXJ2ZXIgPSBuZXcgT2JzZXJ2ZXJDbGFzcygoZW50cmllcywgbGF6eUltYWdlT2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChsYXp5KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXp5bG9hZChsYXp5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5sYXp5bG9hZChlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLnVub2JzZXJ2ZShlbnRyeS50YXJnZXQpO1xuICAgICAgICAgICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICBsYXp5SW1hZ2VPYnNlcnZlci5vYnNlcnZlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChsYXp5SW1hZ2UpID0+IHtcbiAgICAgICAgICAgIGxhenlJbWFnZU9ic2VydmVyLm9ic2VydmUobGF6eUltYWdlKTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGxhenlsb2FkKGVsKSB7XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSBlbDtcbiAgICAgICAgdGhpcy5tYW5hZ2VDc3NDbGFzc2VzKGVsKTtcbiAgICAgICAgaWYgKHdpbmRvdy5IVE1MUGljdHVyZUVsZW1lbnQgJiYgdGhpcy5lbGVtZW50IGluc3RhbmNlb2YgSFRNTFBpY3R1cmVFbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCBpbWFnZSA9IHRoaXMuZWxlbWVudC5xdWVyeVNlbGVjdG9yKCdpbWcnKTtcbiAgICAgICAgICAgIGlmIChpbWFnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMubWFuYWdlQ3NzQ2xhc3NlcyhpbWFnZSk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgbG9hZGluZ1NwaW5uZXIgPSB0aGlzLmVsZW1lbnQuY2xvc2VzdCgnLmxvYWRpbmctc3Bpbm5lcicpO1xuICAgICAgICBpZiAobG9hZGluZ1NwaW5uZXIpIHtcbiAgICAgICAgICAgIGxvYWRpbmdTcGlubmVyLmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmctc3Bpbm5lcicpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnNpemVzKSB7XG4gICAgICAgICAgICBlbGVtZW50LnNpemVzID0gZWxlbWVudC5kYXRhc2V0LnNpemVzO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc2l6ZXMnKTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoKGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MSW1hZ2VFbGVtZW50IHx8IGVsZW1lbnQgaW5zdGFuY2VvZiBIVE1MU291cmNlRWxlbWVudCkgJiZcbiAgICAgICAgICAgIGVsZW1lbnQuZGF0YXNldC5zcmNzZXQpIHtcbiAgICAgICAgICAgIGVsZW1lbnQuc3Jjc2V0ID0gZWxlbWVudC5kYXRhc2V0LnNyY3NldDtcbiAgICAgICAgICAgIGVsZW1lbnQucmVtb3ZlQXR0cmlidXRlKCdkYXRhLXNyY3NldCcpO1xuICAgICAgICB9XG4gICAgICAgIGlmICgoZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgfHwgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxTb3VyY2VFbGVtZW50KSAmJlxuICAgICAgICAgICAgZWxlbWVudC5kYXRhc2V0LnNyYykge1xuICAgICAgICAgICAgZWxlbWVudC5zcmMgPSBlbGVtZW50LmRhdGFzZXQuc3JjO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVBdHRyaWJ1dGUoJ2RhdGEtc3JjJyk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgZ2V0RWxlbWVudHMoKSB7XG4gICAgICAgIGlmICghdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICByZXR1cm4gW107XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxJbWFnZUVsZW1lbnQgJiZcbiAgICAgICAgICAgICh0aGlzLmVsZW1lbnQuZGF0YXNldC5zcmMgfHwgdGhpcy5lbGVtZW50LmRhdGFzZXQuc3Jjc2V0KSkge1xuICAgICAgICAgICAgcmV0dXJuIFt0aGlzLmVsZW1lbnRdO1xuICAgICAgICB9XG4gICAgICAgIGlmICh3aW5kb3cuSFRNTFBpY3R1cmVFbGVtZW50ICYmIHRoaXMuZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxQaWN0dXJlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLXNyY10sIHNvdXJjZVtkYXRhLXNyY3NldF0nKSk7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2ltZ1tkYXRhLXNyY10nKSk7XG4gICAgfVxuICAgIG1hbmFnZUNzc0NsYXNzZXMoZWxlbWVudCkge1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ2xvYWRlZCcpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2xvYWRpbmcnKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdCgpIHtcbiAgICAgICAgc3VwZXIub25Jbml0KCk7XG4gICAgICAgIGNvbnN0IGxhenlsb2FkRWxlbWVudHMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWxhenlsb2FkXScpKTtcbiAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBsYXp5bG9hZEVsZW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBjb25zdCBlbGVtZW50ID0gbGF6eWxvYWRFbGVtZW50c1tpXTtcbiAgICAgICAgICAgIC8vIGVzbGludC1kaXNhYmxlLW5leHQtbGluZSBuby1uZXdcbiAgICAgICAgICAgIG5ldyBMYXp5TG9hZGVyKGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmltcG9ydCBEYXRhTGF5ZXIgZnJvbSAnLi4vY29tbW9uL0RhdGFMYXllcic7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmltcG9ydCBGaWVsZFZhbGlkYXRpb24gZnJvbSAnLi9GaWVsZFZhbGlkYXRpb24nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTmV3c2xldHRlclN1YnNjcmliZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIgPSBEYXRhTGF5ZXI7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuZW1haWxGaWVsZCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cImVtYWlsXCJdJyk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGlmICghdGhpcy5pc1ZhbGlkKCkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTmV3c2xldHRlciBzdWJzY3JpYmUgY29tcG9uZW50IG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24odGhpcy5lbWFpbEZpZWxkKTtcbiAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5mb3JtLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcy5mb3JtKTtcbiAgICAgICAgICAgIGNvbnN0IGZpcnN0TmFtZSA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ2ZpcnN0LW5hbWUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgY29tcGFueU5hbWUgPSAoKF9iID0gZm9ybURhdGEuZ2V0KCdjb21wYW55LW5hbWUnKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRvU3RyaW5nKCkpIHx8ICcnO1xuICAgICAgICAgICAgY29uc3QgZW1haWwgPSAoKF9jID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpKSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgICAgICAgICBpZiAoIWVtYWlsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdtYWlsY2hpbXBzdWJzY3JpYmUnLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIGZpcnN0TmFtZSxcbiAgICAgICAgICAgICAgICBjb21wYW55TmFtZVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIEZpZWxkVmFsaWRhdGlvbi5yZW1vdmVFcnJvclRleHQodGhpcy5lbWFpbEZpZWxkKTtcbiAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMuZm9ybSB8fCAhdGhpcy5lbWFpbEZpZWxkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSwgZXZlbnQpIHtcbiAgICAgICAgRmllbGRWYWxpZGF0aW9uLmFwcGVuZFN1Y2Nlc3NUZXh0KHRoaXMuZW1haWxGaWVsZCwgcmVzcG9uc2UuZGF0YS50b1N0cmluZygpKTtcbiAgICAgICAgdGhpcy5lbWFpbEZpZWxkLnZhbHVlID0gJyc7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBldmVudDogJ0dBRXZlbnQnLFxuICAgICAgICAgICAgZXZlbnRDYXRlZ29yeTogJ25ld3NsZXR0ZXInLFxuICAgICAgICAgICAgZXZlbnRBY3Rpb246ICdzdWJzY3JpYmUnLFxuICAgICAgICAgICAgZXZlbnRMYWJlbDogdGhpcy5mb3JtLmlkIHx8ICdnZW5lcmljJ1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLmRhdGFMYXllci5wdXNoKGRhdGEpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUoZXJyb3IpIHtcbiAgICAgICAgRmllbGRWYWxpZGF0aW9uLmFwcGVuZEVycm9yVGV4dCh0aGlzLmVtYWlsRmllbGQsIGVycm9yLm1lc3NhZ2UpO1xuICAgICAgICB0aHJvdyBlcnJvcjtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIC8vICNUT0RPOiBTd2l0Y2ggdG8gY29tbW9uIHNlbGVjdG9yXG4gICAgICAgIGNvbnN0IGZvcm1zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcjZm9vdGVyLW5ld3NsZXR0ZXItZm9ybSwgI2hvbWVwYWdlLW5ld3NsZXR0ZXItZm9ybSwgI2FqYXgtbmV3c2xldHRlci1mb3JtJykpO1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgZm9ybXMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBmb3JtID0gZm9ybXNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgbmV3c2xldHRlclN1YnNjcmliZSA9IG5ldyBOZXdzbGV0dGVyU3Vic2NyaWJlKGZvcm0pO1xuICAgICAgICAgICAgbmV3c2xldHRlclN1YnNjcmliZS5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUGFzc3dvcmRSZXZlYWwgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICAgICAgdGhpcy5wYXNzd29yZElucHV0ID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W3R5cGU9XCJwYXNzd29yZFwiXScpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSB0aGlzLmNyZWF0ZVJldmVhbEJ1dHRvbigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmNsYXNzTGlzdC50b2dnbGUoJ29wZW5lZCcpO1xuICAgICAgICAgICAgaWYgKHRoaXMucGFzc3dvcmRJbnB1dC50eXBlID09PSAncGFzc3dvcmQnKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnR5cGUgPSAndGV4dCc7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy5wYXNzd29yZElucHV0LnR5cGUgPSAncGFzc3dvcmQnO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgY3JlYXRlUmV2ZWFsQnV0dG9uKCkge1xuICAgICAgICBjb25zdCBidXR0b24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdCVVRUT04nKTtcbiAgICAgICAgYnV0dG9uLnR5cGUgPSAnYnV0dG9uJztcbiAgICAgICAgYnV0dG9uLmNsYXNzTmFtZSA9ICdwYXNzd29yZC1yZXZlYWwtdG9nZ2xlJztcbiAgICAgICAgYnV0dG9uLnRhYkluZGV4ID0gLTE7XG4gICAgICAgIHJldHVybiBidXR0b247XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBwYXNzd29yZFJvd3MgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wYXNzd29yZC1yb3cnKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYXNzd29yZFJvd3MubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFJvdyA9IHBhc3N3b3JkUm93c1tpbmRleF07XG4gICAgICAgICAgICBpZiAocGFzc3dvcmRSb3cgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBwYXNzd29yZFJldmVhbCA9IG5ldyBQYXNzd29yZFJldmVhbChwYXNzd29yZFJvdyk7XG4gICAgICAgICAgICBwYXNzd29yZFJldmVhbC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b247XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuLi91dGlsL2VuZHBvaW50cyc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJlZGVlbVBvaW50c0ZvckNvdXBvbiBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoYnV0dG9uKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLCBidXR0b24sIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vblN1Ym1pdChldmVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvblN1Ym1pdChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBpZCA9IF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIFwiZlwiKS5kYXRhc2V0LmlkO1xuICAgICAgICBpZiAoIWlkKSB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhyZWRlZW1jb3Vwb24nLFxuICAgICAgICAgICAgaWQ6IGlkXG4gICAgICAgIH07XG4gICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludHMuYWpheCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSwgZXZlbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24sIFwiZlwiKSk7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uLCBcImZcIikpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlcywgZXZlbnQpIHtcbiAgICAgICAgY29uc3QgcmVzcG9uc2UgPSByZXM7XG4gICAgICAgIGNvbnNvbGUubG9nKCdzdWNjZXNzJywgcmVzcG9uc2UpO1xuICAgIH1cbiAgICBvbkZhaWx1cmUocmVzKSB7XG4gICAgICAgIGNvbnN0IHJlc3BvbnNlID0gSlNPTi5wYXJzZShyZXMpO1xuICAgICAgICBjb25zb2xlLmxvZygnZmFpbHVyZScsIHJlc3BvbnNlKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJlZGVlbUJ1dHRvbnMgPSBBcnJheS5mcm9tKHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLXJvbGU9XCJyZWRlZW0tY291cG9uXCJdJykpO1xuICAgICAgICBpZiAocmVkZWVtQnV0dG9ucy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICByZWRlZW1CdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgY29uc3QgcmVkZWVtUG9pbnRzRm9yQ291cG9uID0gbmV3IFJlZGVlbVBvaW50c0ZvckNvdXBvbihidXR0b24pO1xuICAgICAgICAgICAgcmVkZWVtUG9pbnRzRm9yQ291cG9uLmluaXRpYWxpemUoKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX1JlZGVlbVBvaW50c0ZvckNvdXBvbl9idXR0b24gPSBuZXcgV2Vha01hcCgpO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9TY3JvbGxUb0NvbnRlbnRfZWxlbWVudCwgX1Njcm9sbFRvQ29udGVudF90YXJnZXQ7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHNjcm9sbFRvVGFyZ2V0IGZyb20gJy4uL3V0aWwvc2Nyb2xsVG9UYXJnZXQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2Nyb2xsVG9Db250ZW50IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50LCB0YXJnZXQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfU2Nyb2xsVG9Db250ZW50X3RhcmdldC5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQsIGVsZW1lbnQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldCwgdGFyZ2V0LCBcImZcIik7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF9lbGVtZW50LCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBjb25zdCBoZWFkZXJPZmZzZXQgPSAhX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQsIFwiZlwiKS5kYXRhc2V0LmhlYWRlck9mZnNldDtcbiAgICAgICAgICAgIHNjcm9sbFRvVGFyZ2V0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Njcm9sbFRvQ29udGVudF90YXJnZXQsIFwiZlwiKSwgMCwgaGVhZGVyT2Zmc2V0KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtc2Nyb2xsLXRvXScpKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgdGFyZ2V0SWQgPSBlbGVtZW50LmRhdGFzZXQuc2Nyb2xsVG8gfHwgJyc7XG4gICAgICAgICAgICBjb25zdCB0YXJnZXQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCh0YXJnZXRJZCk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IFNjcm9sbFRvQ29udGVudChlbGVtZW50LCB0YXJnZXQpO1xuICAgICAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQgPSBuZXcgV2Vha01hcCgpLCBfU2Nyb2xsVG9Db250ZW50X3RhcmdldCA9IG5ldyBXZWFrTWFwKCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMsIF9WaWRlb01lZGlhUmVzb2x2ZXJfZWxlbWVudCwgX1ZpZGVvTWVkaWFSZXNvbHZlcl9zb3VyY2VzLCBfVmlkZW9NZWRpYVJlc29sdmVyX3RpbWVvdXQsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplLCBfVmlkZW9NZWRpYVJlc29sdmVyX3Nob3dTb3VyY2U7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIgfSBmcm9tICcuLi9wb2x5ZmlsbHMvbWF0Y2hNZWRpYSc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBWaWRlb01lZGlhUmVzb2x2ZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9WaWRlb01lZGlhUmVzb2x2ZXJfc291cmNlcy5zZXQodGhpcywgdm9pZCAwKTtcbiAgICAgICAgX1ZpZGVvTWVkaWFSZXNvbHZlcl90aW1lb3V0LnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQsIGVsZW1lbnQsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMsIEFycmF5LmZyb20oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQsIFwiZlwiKS5xdWVyeVNlbGVjdG9yQWxsKCdzb3VyY2UnKSksIFwiZlwiKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgXCJtXCIsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplKS5jYWxsKHRoaXMpO1xuICAgICAgICBjb25zdCBtcSA9IHdpbmRvdy5tYXRjaE1lZGlhKCcobWF4LXdpZHRoOiA3NjdweCknKTtcbiAgICAgICAgY29uc3QgbXEyID0gd2luZG93Lm1hdGNoTWVkaWEoJyhvcmllbnRhdGlvbjogcG9ydHJhaXQpJyk7XG4gICAgICAgIG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyKG1xLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMsIFwibVwiLCBfVmlkZW9NZWRpYVJlc29sdmVyX2hhbmRsZVJlc2l6ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgfSwgZmFsc2UpO1xuICAgICAgICBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihtcTIsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcywgXCJtXCIsIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplKS5jYWxsKHRoaXMpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50cyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgndmlkZW9bZGF0YS1yZXNvbHZlXScpKTtcbiAgICAgICAgZWxlbWVudHMuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgVmlkZW9NZWRpYVJlc29sdmVyKGVsZW1lbnQpO1xuICAgICAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG5fVmlkZW9NZWRpYVJlc29sdmVyX2VsZW1lbnQgPSBuZXcgV2Vha01hcCgpLCBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMgPSBuZXcgV2Vha01hcCgpLCBfVmlkZW9NZWRpYVJlc29sdmVyX3RpbWVvdXQgPSBuZXcgV2Vha01hcCgpLCBfVmlkZW9NZWRpYVJlc29sdmVyX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9WaWRlb01lZGlhUmVzb2x2ZXJfaGFuZGxlUmVzaXplID0gZnVuY3Rpb24gX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUoKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfVmlkZW9NZWRpYVJlc29sdmVyX3NvdXJjZXMsIFwiZlwiKS5mb3JFYWNoKChzb3VyY2UpID0+IHtcbiAgICAgICAgY29uc3Qgb3JpZW50YXRpb24gPSBzb3VyY2UuZGF0YXNldC5vcmllbnRhdGlvbiB8fCAnJztcbiAgICAgICAgY29uc3QgbWF4V2lkdGggPSBOdW1iZXIoc291cmNlLmRhdGFzZXQubWF4V2lkdGgpIHx8IDA7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRPcmllbnRhdGlvbiA9IHdpbmRvdy5tYXRjaE1lZGlhKCcob3JpZW50YXRpb246IHBvcnRyYWl0KScpLm1hdGNoZXNcbiAgICAgICAgICAgID8gJ3BvcnRyYWl0J1xuICAgICAgICAgICAgOiAnbGFuZHNjYXBlJztcbiAgICAgICAgY29uc3QgY3VycmVudFdpZHRoID0gd2luZG93LmlubmVyV2lkdGg7XG4gICAgICAgIGlmIChjdXJyZW50T3JpZW50YXRpb24gIT09IG9yaWVudGF0aW9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG1heFdpZHRoICYmIGN1cnJlbnRXaWR0aCA+PSBtYXhXaWR0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9pbnN0YW5jZXMsIFwibVwiLCBfVmlkZW9NZWRpYVJlc29sdmVyX3Nob3dTb3VyY2UpLmNhbGwodGhpcywgc291cmNlKTtcbiAgICB9KTtcbn0sIF9WaWRlb01lZGlhUmVzb2x2ZXJfc2hvd1NvdXJjZSA9IGZ1bmN0aW9uIF9WaWRlb01lZGlhUmVzb2x2ZXJfc2hvd1NvdXJjZShzb3VyY2UpIHtcbiAgICBjb25zdCBkYXRhU3JjID0gc291cmNlLmRhdGFzZXQuc3JjO1xuICAgIGlmICghZGF0YVNyYykge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1ZpZGVvTWVkaWFSZXNvbHZlcl9lbGVtZW50LCBcImZcIikuc3JjID0gZGF0YVNyYztcbn07XG4iLCJleHBvcnQgZnVuY3Rpb24gbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIobXEsIGNhbGxiYWNrLCBldmVudEJ1YmJsaW5nID0gZmFsc2UpIHtcbiAgICB0cnkge1xuICAgICAgICBtcS5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCBjYWxsYmFjaywgZXZlbnRCdWJibGluZyk7XG4gICAgfVxuICAgIGNhdGNoIChlKSB7XG4gICAgICAgIG1xLmFkZExpc3RlbmVyKCgpID0+IGNhbGxiYWNrKTtcbiAgICB9XG59XG5leHBvcnQgZnVuY3Rpb24gbWF0Y2hNZWRpYVJlbW92ZUV2ZW50TGlzdGVuZXIobXEsIGNhbGxiYWNrKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgbXEucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgY2FsbGJhY2spO1xuICAgIH1cbiAgICBjYXRjaCAoZSkge1xuICAgICAgICBtcS5yZW1vdmVMaXN0ZW5lcigoKSA9PiBjYWxsYmFjayk7XG4gICAgfVxufVxuIiwiaW1wb3J0IGRpYWxvZ1BvbHlmaWxsIGZyb20gJ2RpYWxvZy1wb2x5ZmlsbCc7XG5pbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuaW1wb3J0IHsgZGlzYWJsZUJvZHlTY3JvbGwsIGVuYWJsZUJvZHlTY3JvbGwgfSBmcm9tICcuLi91dGlsL2JvZHknO1xuaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tICcuLi91dGlsL3N0cmluZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG4gICAgc2V0IGlzT3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNhbWVsRGF0YUF0dHJpYnV0ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGFBdHRyaWJ1dGUucmVwbGFjZSgnZGF0YS0nLCAnJyk7XG4gICAgICAgIHJldHVybiB0b0NhbWVsQ2FzZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCB0cmFuc2l0aW9uVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zaXRpb25UaW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvblRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWUgPSB0aGlzLmdldFRyYW5zaXRpb25UaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uVGltZTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5wb2x5ZmlsbERpYWxvZygpO1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlXScpKTtcbiAgICAgICAgY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0c2lkZUNsaWNrKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZEluRGlhbG9nID0gcmVjdC50b3AgPD0gZXZlbnQuY2xpZW50WSAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgPD0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHJlY3QubGVmdCA8PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8PSByZWN0LmxlZnQgKyByZWN0LndpZHRoO1xuICAgICAgICAgICAgaWYgKCFjbGlja2VkSW5EaWFsb2cpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKCF0YXJnZXQuY2xvc2VzdChgWyR7dGhpcy5kYXRhQXR0cmlidXRlfT1cIiR7dGhpcy5lbGVtZW50LmRhdGFzZXRbYCR7dGhpcy5jYW1lbERhdGFBdHRyaWJ1dGV9YF19XCJdYCkpIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgfVxuICAgIH1cbiAgICB0b2dnbGUoKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMub3BlbigpO1xuICAgIH1cbiAgICBvcGVuKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBkaXNhYmxlQm9keVNjcm9sbCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuc2hvd01vZGFsKCk7XG4gICAgICAgIHRoaXMuaXNPcGVuID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgY2xvc2UoKSB7XG4gICAgICAgIGVuYWJsZUJvZHlTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLm9wZW4pO1xuICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5jbG9zZWQpO1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsb3NlKCk7XG4gICAgICAgICAgICB0aGlzLmlzT3BlbiA9IGZhbHNlO1xuICAgICAgICB9LCB0aGlzLnRyYW5zaXRpb25UaW1lKTtcbiAgICB9XG4gICAgZ2V0VHJhbnNpdGlvblRpbWUoKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgY29uc3Qgc3R5bGVzID0gZ2V0Q29tcHV0ZWRTdHlsZSh0aGlzLmVsZW1lbnQpO1xuICAgICAgICBjb25zdCB0cmFuc2l0aW9uRHVyYXRpb24gPSAoX2EgPSBzdHlsZXMudHJhbnNpdGlvbkR1cmF0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICAgICAgY29uc3QgZHVyYXRpb24gPSB0cmFuc2l0aW9uRHVyYXRpb24uaW5kZXhPZignbXMnKSA+IC0xXG4gICAgICAgICAgICA/IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKVxuICAgICAgICAgICAgOiBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKiAxMDAwO1xuICAgICAgICByZXR1cm4gZHVyYXRpb24gfHwgNDAwO1xuICAgIH1cbiAgICBwb2x5ZmlsbERpYWxvZygpIHtcbiAgICAgICAgZGlhbG9nUG9seWZpbGwgPT09IG51bGwgfHwgZGlhbG9nUG9seWZpbGwgPT09IHZvaWQgMCA/IHZvaWQgMCA6IGRpYWxvZ1BvbHlmaWxsLnJlZ2lzdGVyRGlhbG9nKHRoaXMuZWxlbWVudCk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fc2lkZVBhbmVsLnBjc3MnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmltcG9ydCBEaWFsb2cgZnJvbSAnLi9EaWFsb2cnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU2lkZVBhbmVsIGV4dGVuZHMgRGlhbG9nIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5kYXRhQXR0cmlidXRlID0gJ2RhdGEtcGFuZWwtbmFtZSc7XG4gICAgICAgIHRoaXMuY2xhc3NlcyA9IHtcbiAgICAgICAgICAgIG9wZW46ICdzaWRlLXBhbmVsLS1vcGVuZWQnLFxuICAgICAgICAgICAgY2xvc2VkOiAnc2lkZS1wYW5lbC0tY2xvc2VkJyxcbiAgICAgICAgICAgIGxlZnQ6ICdzaWRlLXBhbmVsLS1sZWZ0JyxcbiAgICAgICAgICAgIHJpZ2h0OiAnc2lkZS1wYW5lbC0tcmlnaHQnXG4gICAgICAgIH07XG4gICAgfVxuICAgIHN0YXRpYyBvcGVuU2lkZVBhbmVsKHBhbmVsSUQsIGVsZW1lbnQgPSBudWxsKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgbGV0IHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgaWYgKHBhbmVsID09PSBudWxsKSB7XG4gICAgICAgICAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLXBhbmVsLXRlbXBsYXRlPVwiJHtwYW5lbElEfVwiXWApO1xuICAgICAgICAgICAgaWYgKHRlbXBsYXRlID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgaWYgKGVsZW1lbnQgJiYgZWxlbWVudCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gZWxlbWVudC5ocmVmO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb25lID0gdGVtcGxhdGUuY2xvbmVOb2RlKHRydWUpO1xuICAgICAgICAgICAgY29uc3QgeyBjb250ZW50IH0gPSBjbG9uZTtcbiAgICAgICAgICAgIChfYSA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICAgIHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCBwYW5lbCk7XG4gICAgICAgICAgICBpZiAocGFuZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzaWRlUGFuZWxJbnN0YW5jZSA9IG5ldyBTaWRlUGFuZWwocGFuZWwpO1xuICAgICAgICAgICAgc2lkZVBhbmVsSW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvZ2dsZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKTtcbiAgICAgICAgcGFuZWwuZGlzcGF0Y2hFdmVudCh0b2dnbGVFdmVudCk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgICAgICBjb25zdCBwYW5lbExpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW5lbF0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYW5lbExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhbmVsTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlQ3JlYXRpb25FdmVudChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwYW5lbElEID0gdGhpcy5kYXRhc2V0LnBhbmVsIHx8ICcnO1xuICAgICAgICAvLyBJZiBhbHJlYWR5IGxvZ2dlZCBpbiBmb2xsb3cgbGlua1xuICAgICAgICBpZiAodGhpcyBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50ICYmXG4gICAgICAgICAgICBwYW5lbElEID09PSAnbXktYWNjb3VudC1wYW5lbCcgJiZcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkuY2xhc3NMaXN0LmNvbnRhaW5zKCdsb2dnZWQtaW4nKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwocGFuZWxJRCwgdGhpcyk7XG4gICAgfVxufVxuIiwiY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgc2Nyb2xsUG9zaXRpb24gPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVCb2R5U2Nyb2xsKCkge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnRvcCA9IGAtJHtzY3JvbGxQb3NpdGlvbn1weGA7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ2luaXRpYWwnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUJvZHlTY3JvbGwoKSB7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Bvc2l0aW9uJyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnc2Nyb2xsLWJlaGF2aW9yJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gZ2V0Q29va2llVmFsdWUobmFtZSkge1xuICAgIGNvbnN0IGNvb2tpZSA9IGRvY3VtZW50LmNvb2tpZVxuICAgICAgICAuc3BsaXQoJzsgJylcbiAgICAgICAgLmZpbmQoKHJvdykgPT4gcm93LnN0YXJ0c1dpdGgobmFtZSkpO1xuICAgIGlmIChjb29raWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm4gbnVsbDtcbiAgICB9XG4gICAgcmV0dXJuIGNvb2tpZS5zcGxpdCgnPScpWzFdO1xufVxuZXhwb3J0IGZ1bmN0aW9uIHNldENvb2tpZVZhbHVlKG5hbWUsIHZhbHVlLCBvcHRpb25zKSB7XG4gICAgY29uc3QgY29va2llT3B0aW9ucyA9IE9iamVjdC5hc3NpZ24oeyBwYXRoOiAnLycgfSwgb3B0aW9ucyk7XG4gICAgbGV0IHVwZGF0ZWRDb29raWUgPSBgJHtuYW1lfT0ke3ZhbHVlfWA7XG4gICAgLy8gZXNsaW50LWRpc2FibGUtbmV4dC1saW5lIGd1YXJkLWZvci1pblxuICAgIGZvciAoY29uc3Qgb3B0aW9uS2V5IGluIGNvb2tpZU9wdGlvbnMpIHtcbiAgICAgICAgdXBkYXRlZENvb2tpZSArPSBgOyAke29wdGlvbktleX1gO1xuICAgICAgICBjb25zdCBvcHRpb25WYWx1ZSA9IGNvb2tpZU9wdGlvbnNbb3B0aW9uS2V5XTtcbiAgICAgICAgaWYgKG9wdGlvblZhbHVlICE9PSB0cnVlKSB7XG4gICAgICAgICAgICB1cGRhdGVkQ29va2llICs9IGA9JHtvcHRpb25WYWx1ZX1gO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRvY3VtZW50LmNvb2tpZSA9IHVwZGF0ZWRDb29raWU7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gaXNEYXRlVmFsaWQoZGF0ZSkge1xuICAgIHJldHVybiAhTnVtYmVyLmlzTmFOKGRhdGUuZ2V0VGltZSgpKTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBmb3JtYXREYXRlKGRhdGUpIHtcbiAgICBjb25zdCBkYXkgPSBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8oZGF0ZS5nZXREYXRlKCkpO1xuICAgIGNvbnN0IG1vbnRoID0gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKGRhdGUuZ2V0TW9udGgoKSArIDEpO1xuICAgIHJldHVybiBgJHtkYXRlLmdldEZ1bGxZZWFyKCl9LSR7bW9udGh9LSR7ZGF5fWA7XG59XG5leHBvcnQgZnVuY3Rpb24gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKG51bWJlcikge1xuICAgIHJldHVybiBTdHJpbmcobnVtYmVyKS5wYWRTdGFydCgyLCAnMCcpO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGdldEZ1bGxNb250aE5hbWUobW9udGgsIGxvY2FsZSA9ICdkZWZhdWx0Jykge1xuICAgIHJldHVybiBtb250aC50b0xvY2FsZVN0cmluZyhsb2NhbGUsIHsgbW9udGg6ICdsb25nJyB9KTtcbn1cbiIsImV4cG9ydCBmdW5jdGlvbiBwYXJzZVN0cmluZ0FzSHRtbChjb250ZW50LCBzZWxlY3RvciA9ICd0ZW1wbGF0ZScpIHtcbiAgICBjb25zdCBkb21QYXJzZXIgPSBuZXcgRE9NUGFyc2VyKCk7XG4gICAgY29uc3QgcGFyc2VkID0gZG9tUGFyc2VyLnBhcnNlRnJvbVN0cmluZyhjb250ZW50LCAndGV4dC9odG1sJyk7XG4gICAgcmV0dXJuIHBhcnNlZC5xdWVyeVNlbGVjdG9yKHNlbGVjdG9yKSB8fCBwYXJzZWQuYm9keTtcbn1cbmV4cG9ydCBmdW5jdGlvbiBnZXRBYnNvbHV0ZUhlaWdodChlbCkge1xuICAgIGNvbnN0IHN0eWxlcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICBjb25zdCBtYXJnaW4gPSBwYXJzZUZsb2F0KHN0eWxlcy5tYXJnaW5Ub3ApICsgcGFyc2VGbG9hdChzdHlsZXMubWFyZ2luQm90dG9tKTtcbiAgICByZXR1cm4gTWF0aC5jZWlsKGVsLm9mZnNldEhlaWdodCArIG1hcmdpbik7XG59XG4iLCJjb25zdCBlbmRwb2ludHMgPSB7XG4gICAgYWpheDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgXG59O1xuZXhwb3J0IGRlZmF1bHQgZW5kcG9pbnRzO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldEN1cnJlbnRMaW5rQ2xhc3MoKSB7XG4gICAgY29uc3QgcGF0aE5hbWUgPSB3aW5kb3cubG9jYXRpb24ucGF0aG5hbWU7XG4gICAgY29uc3QgZm9ybWF0dGVkUGF0aE5hbWUgPSBzdHJpcFRyYWlsaW5nU2xhc2gocGF0aE5hbWUpO1xuICAgIGNvbnN0IGZ1bGxVcmwgPSB3aW5kb3cubG9jYXRpb24uaHJlZjtcbiAgICBjb25zdCBmb3JtYXR0ZWRVcmwgPSBzdHJpcFRyYWlsaW5nU2xhc2goZnVsbFVybCk7XG4gICAgY29uc3QgYW5jaG9ycyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbChgXG4gICAgICAgIG5hdiBhW2hyZWY9XCIke3BhdGhOYW1lfVwiXSxcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7Zm9ybWF0dGVkUGF0aE5hbWV9XCJdLFxuICAgICAgICBuYXYgYVtocmVmPVwiJHtmdWxsVXJsfVwiXSxcbiAgICAgICAgbmF2IGFbaHJlZj1cIiR7Zm9ybWF0dGVkVXJsfVwiXVxuICAgIGApKTtcbiAgICBhbmNob3JzLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICAgICAgICBhbmNob3IuY2xhc3NMaXN0LmFkZCgnY3VycmVudC1saW5rJyk7XG4gICAgfSk7XG59XG5leHBvcnQgZnVuY3Rpb24gc3RyaXBUcmFpbGluZ1NsYXNoKHN0cikge1xuICAgIHJldHVybiBzdHIuZW5kc1dpdGgoJy8nKSA/IHN0ci5zbGljZSgwLCAtMSkgOiBzdHI7XG59XG4iLCJsZXQgbG9hZGVkID0gZmFsc2U7XG5leHBvcnQgY29uc3Qgc2l0ZWtleSA9ICc2TGR2MlJrY0FBQUFBQkNDTDFKUjVEbG1FRVQ0TnlfMkNta1ZhOE52JztcbmV4cG9ydCBmdW5jdGlvbiBsb2FkUmVjYXB0Y2hhKGVsZW1lbnRzKSB7XG4gICAgbG9vcFRocm91Z2hFbGVtZW50cyhlbGVtZW50cywgdHJ1ZSwgKCkgPT4ge1xuICAgICAgICBpbnNlcnRSZWNhcHRjaGFTY3JpcHQoZWxlbWVudHMpO1xuICAgIH0pO1xufVxuZnVuY3Rpb24gaW5zZXJ0UmVjYXB0Y2hhU2NyaXB0KGVsZW1lbnRzKSB7XG4gICAgaWYgKCFsb2FkZWQpIHtcbiAgICAgICAgY29uc3QgaGVhZCA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKCdoZWFkJylbMF07XG4gICAgICAgIGNvbnN0IHNjcmlwdCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3NjcmlwdCcpO1xuICAgICAgICBzY3JpcHQudHlwZSA9ICd0ZXh0L2phdmFzY3JpcHQnO1xuICAgICAgICBzY3JpcHQuc3JjID0gYGh0dHBzOi8vd3d3Lmdvb2dsZS5jb20vcmVjYXB0Y2hhL2FwaS5qcz9yZW5kZXI9JHtzaXRla2V5fWA7XG4gICAgICAgIGhlYWQuYXBwZW5kQ2hpbGQoc2NyaXB0KTtcbiAgICAgICAgbG9hZGVkID0gdHJ1ZTtcbiAgICB9XG4gICAgbG9vcFRocm91Z2hFbGVtZW50cyhlbGVtZW50cywgZmFsc2UsICgpID0+IHtcbiAgICAgICAgaW5zZXJ0UmVjYXB0Y2hhU2NyaXB0KGVsZW1lbnRzKTtcbiAgICB9KTtcbn1cbmZ1bmN0aW9uIGxvb3BUaHJvdWdoRWxlbWVudHMoZWxlbWVudHMsIGFkZEV2ZW50LCBjYWxsYmFjaykge1xuICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZWxlbWVudHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgWydmb2N1cycsICdjbGljaycsICd0b3VjaGVuZCcsICdibHVyJywgJ2lucHV0JywgJ2NoYW5nZScsICdwcm9wZXJ0eWNoYW5nZSddLmZvckVhY2goKGV2dCkgPT4ge1xuICAgICAgICAgICAgaWYgKGFkZEV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZWxlbWVudHNbaV0uYWRkRXZlbnRMaXN0ZW5lcihldnQsIGNhbGxiYWNrKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGVsZW1lbnRzW2ldLnJlbW92ZUV2ZW50TGlzdGVuZXIoZXZ0LCBjYWxsYmFjayk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIHNjcm9sbFRvVGFyZ2V0KHRhcmdldCwgZGVmYXVsdE9mZnNldCA9IDAsIGhlYWRlck9mZnNldCA9IHRydWUpIHtcbiAgICBjb25zdCBib2R5VG9wUG9zaXRpb24gPSBkb2N1bWVudC5ib2R5LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLnRvcDtcbiAgICBjb25zdCBlbGVtZW50UG9zaXRpb24gPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkudG9wIC0gYm9keVRvcFBvc2l0aW9uO1xuICAgIGxldCBvZmZzZXQgPSBkZWZhdWx0T2Zmc2V0O1xuICAgIGlmIChoZWFkZXJPZmZzZXQpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2hlYWRlcicpO1xuICAgICAgICBpZiAoaGVhZGVyKSB7XG4gICAgICAgICAgICBvZmZzZXQgKz0gaGVhZGVyLmNsaWVudEhlaWdodDtcbiAgICAgICAgfVxuICAgIH1cbiAgICBjb25zdCBvZmZzZXRQb3NpdGlvbiA9IGVsZW1lbnRQb3NpdGlvbiAtIG9mZnNldCArIDE7XG4gICAgd2luZG93LnNjcm9sbFRvKHtcbiAgICAgICAgdG9wOiBvZmZzZXRQb3NpdGlvbixcbiAgICAgICAgYmVoYXZpb3I6ICdzbW9vdGgnXG4gICAgfSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIChtYXRjaCwgY2hyKSA9PiBjaHIudG9VcHBlckNhc2UoKSk7XG59XG5leHBvcnQgZnVuY3Rpb24gdG9UaXRsZUNhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXHdcXFMqL2csICh0eHQpID0+IHR4dC5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHR4dC5zdWJzdHIoMSkudG9Mb3dlckNhc2UoKSk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gc2V0VmFsaWRhdGlvbk1lc3NhZ2UobWVzc2FnZSwgZWxlbWVudCkge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBmb3JtUm93ID0gKF9hID0gZWxlbWVudC5jbG9zZXN0KCcuZm9ybS1yb3cnKSkgIT09IG51bGwgJiYgX2EgIT09IHZvaWQgMCA/IF9hIDogZWxlbWVudDtcbiAgICBjb25zdCBmb3JtUm93UGFyZW50ID0gZm9ybVJvdyA9PT0gbnVsbCB8fCBmb3JtUm93ID09PSB2b2lkIDAgPyB2b2lkIDAgOiBmb3JtUm93LnBhcmVudEVsZW1lbnQ7XG4gICAgaWYgKGZvcm1Sb3cgPT09IG51bGwgfHwgIWZvcm1Sb3dQYXJlbnQpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICByZW1vdmVFeGlzdGluZ1ZhbGlkYXRpb25NZXNzYWdlcyhlbGVtZW50LCBmb3JtUm93UGFyZW50KTtcbiAgICBjb25zdCB2YWxpZGF0aW9uRWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgIHZhbGlkYXRpb25FbGVtZW50LmNsYXNzTmFtZSA9ICdhbGVydCBhbGVydC0td2FybmluZyBpbmxpbmUtZm9ybS1lcnJvcic7XG4gICAgdmFsaWRhdGlvbkVsZW1lbnQudGV4dENvbnRlbnQgPSBtZXNzYWdlO1xuICAgIGZvcm1Sb3dQYXJlbnQuaW5zZXJ0QmVmb3JlKHZhbGlkYXRpb25FbGVtZW50LCBmb3JtUm93KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiByZW1vdmVFeGlzdGluZ1ZhbGlkYXRpb25NZXNzYWdlcyhlbGVtZW50LCBzZWxlY3Rvcikge1xuICAgIHZhciBfYTtcbiAgICBjb25zdCBncmFuZHBhcmVudCA9IHNlbGVjdG9yIHx8ICgoX2EgPSBlbGVtZW50LnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5wYXJlbnRFbGVtZW50KTtcbiAgICBpZiAoIWdyYW5kcGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZXhpc3RpbmdWYWxpZGF0aW9ucyA9IEFycmF5LmZyb20oZ3JhbmRwYXJlbnQucXVlcnlTZWxlY3RvckFsbCgnLmFsZXJ0LS13YXJuaW5nJykpO1xuICAgIGV4aXN0aW5nVmFsaWRhdGlvbnMuZm9yRWFjaCgodikgPT4ge1xuICAgICAgICB2LnJlbW92ZSgpO1xuICAgIH0pO1xufVxuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCwgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgX0N1cnRhaW5FbGVtZW50X2hhbmRsZUNsaWNrLCBfQ3VydGFpbkVsZW1lbnRfb3BlbiwgX0N1cnRhaW5FbGVtZW50X2V4cGFuZCwgX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoLCBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnM7XG5pbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19hY2NvcmRpb24ucGNzcyc7XG5pbXBvcnQgeyBnZXRBYnNvbHV0ZUhlaWdodCB9IGZyb20gJy4uL3V0aWwvZG9tJztcbmNsYXNzIEN1cnRhaW5FbGVtZW50IGV4dGVuZHMgSFRNTERldGFpbHNFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ3N1bW1hcnknKSk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9jb250ZW50LnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5jdXJ0YWluLWNvbnRlbnQnKSk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3Npbmcuc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljay5zZXQodGhpcywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBldmVudC5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICAgICAgICAgIGV2ZW50LnN0b3BJbW1lZGlhdGVQcm9wYWdhdGlvbigpO1xuICAgICAgICAgICAgaWYgKGV2ZW50LnRhcmdldCBpbnN0YW5jZW9mIEhUTUxBbmNob3JFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2xvc2UnKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgXCJmXCIpIHx8IHRoaXMub3BlbiA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ3VydGFpbkVsZW1lbnRfb3BlbikuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXQgb3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdvcGVuJyk7XG4gICAgfVxuICAgIHNldCBvcGVuKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKCdvcGVuJywgdmFsdWUpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgXCJmXCIpLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2ssIFwiZlwiKSwge1xuICAgICAgICAgICAgY2FwdHVyZTogdHJ1ZSxcbiAgICAgICAgICAgIHBhc3NpdmU6IGZhbHNlXG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSwgXCJmXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2ssIFwiZlwiKSk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIHRydWUsIFwiZlwiKTtcbiAgICAgICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdjbG9zaW5nJyk7XG4gICAgICAgIGNvbnN0IHN0YXJ0SGVpZ2h0ID0gYCR7dGhpcy5vZmZzZXRIZWlnaHR9cHhgO1xuICAgICAgICBjb25zdCBlbmRIZWlnaHQgPSBgJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBcImZcIikub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpKSB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIFwiZlwiKS5jYW5jZWwoKTtcbiAgICAgICAgfVxuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIHRoaXMuYW5pbWF0ZSh7XG4gICAgICAgICAgICBoZWlnaHQ6IFtzdGFydEhlaWdodCwgZW5kSGVpZ2h0XVxuICAgICAgICB9LCB7XG4gICAgICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICAgICAgZWFzaW5nOiAnZWFzZS1vdXQnXG4gICAgICAgIH0pLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLm9uZmluaXNoID0gKCkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoKS5jYWxsKHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfYW5pbWF0aW9uLCBcImZcIikub25jYW5jZWwgPSAoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9pc0Nsb3NpbmcsIGZhbHNlLCBcImZcIik7XG4gICAgICAgICAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NpbmcnKTtcbiAgICAgICAgfTtcbiAgICB9XG59XG5fQ3VydGFpbkVsZW1lbnRfc3VtbWFyeSA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9jb250ZW50ID0gbmV3IFdlYWtNYXAoKSwgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZyA9IG5ldyBXZWFrTWFwKCksIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24gPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfaGFuZGxlQ2xpY2sgPSBuZXcgV2Vha01hcCgpLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0N1cnRhaW5FbGVtZW50X29wZW4gPSBmdW5jdGlvbiBfQ3VydGFpbkVsZW1lbnRfb3BlbigpIHtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9IGAke3RoaXMub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICB0aGlzLm9wZW4gPSB0cnVlO1xuICAgIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X2V4cGFuZCkuY2FsbCh0aGlzKSk7XG59LCBfQ3VydGFpbkVsZW1lbnRfZXhwYW5kID0gZnVuY3Rpb24gX0N1cnRhaW5FbGVtZW50X2V4cGFuZCgpIHtcbiAgICBjb25zdCBzdGFydEhlaWdodCA9IGAke3RoaXMub2Zmc2V0SGVpZ2h0fXB4YDtcbiAgICBjb25zdCBlbmRIZWlnaHQgPSBgJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5LCBcImZcIikub2Zmc2V0SGVpZ2h0ICsgZ2V0QWJzb2x1dGVIZWlnaHQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfY29udGVudCwgXCJmXCIpKX1weGA7XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLmNhbmNlbCgpO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DdXJ0YWluRWxlbWVudF9hbmltYXRpb24sIHRoaXMuYW5pbWF0ZSh7XG4gICAgICAgIGhlaWdodDogW3N0YXJ0SGVpZ2h0LCBlbmRIZWlnaHRdXG4gICAgfSwge1xuICAgICAgICBkdXJhdGlvbjogNDAwLFxuICAgICAgICBlYXNpbmc6ICdlYXNlLW91dCdcbiAgICB9KSwgXCJmXCIpO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgXCJmXCIpLm9uZmluaXNoID0gKCkgPT4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ3VydGFpbkVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoKS5jYWxsKHRoaXMsIHRydWUpO1xufSwgX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoID0gZnVuY3Rpb24gX0N1cnRhaW5FbGVtZW50X29uQW5pbWF0aW9uRmluaXNoKG9wZW4pIHtcbiAgICB0aGlzLm9wZW4gPSBvcGVuO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiwgbnVsbCwgXCJmXCIpO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0N1cnRhaW5FbGVtZW50X2lzQ2xvc2luZywgZmFsc2UsIFwiZlwiKTtcbiAgICB0aGlzLmNsYXNzTGlzdC5yZW1vdmUoJ2Nsb3NpbmcnKTtcbiAgICB0aGlzLnN0eWxlLmhlaWdodCA9ICcnO1xuICAgIHRoaXMuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3RvZ2dsZScpKTtcbn07XG5jbGFzcyBBY2NvcmRpb25FbGVtZW50IGV4dGVuZHMgSFRNTEVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucy5zZXQodGhpcywgW10pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucywgQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RldGFpbHMnKSksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9jdXJ0YWlucywgXCJmXCIpLmZvckVhY2goKGN1cnRhaW4pID0+IHtcbiAgICAgICAgICAgIGN1cnRhaW4uYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmICghY3VydGFpbi5vcGVuKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMpLmNhbGwodGhpcywgY3VydGFpbik7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuX0FjY29yZGlvbkVsZW1lbnRfY3VydGFpbnMgPSBuZXcgV2Vha01hcCgpLCBfQWNjb3JkaW9uRWxlbWVudF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMgPSBmdW5jdGlvbiBfQWNjb3JkaW9uRWxlbWVudF9jbG9zZU90aGVyQ3VydGFpbnMoY3VydGFpbikge1xuICAgIGNvbnN0IG90aGVyQ3VydGFpbnMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zLCBcImZcIikuZmlsdGVyKChjKSA9PiBjdXJ0YWluICE9PSBjKTtcbiAgICBvdGhlckN1cnRhaW5zLmZvckVhY2goKG90aGVyQ3VydGFpbikgPT4ge1xuICAgICAgICBjb25zdCBjdXJ0YWluRWxlbWVudCA9IG90aGVyQ3VydGFpbjtcbiAgICAgICAgY3VydGFpbkVsZW1lbnQub3BlbiA9IGZhbHNlO1xuICAgIH0pO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYWNjb3JkaW9uLWVsZW1lbnQnLCBBY2NvcmRpb25FbGVtZW50KTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY3VydGFpbi1lbGVtZW50JywgQ3VydGFpbkVsZW1lbnQsIHsgZXh0ZW5kczogJ2RldGFpbHMnIH0pO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIF9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uLCBfQmlydGhkYXlGb3JtX2RheUZpZWxkLCBfQmlydGhkYXlGb3JtX21vbnRoRmllbGQsIF9CaXJ0aGRheUZvcm1fZ2V0RGF5VmFsdWVzLCBfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzLCBfQmlydGhkYXlGb3JtX29uU3VibWl0LCBfQmlydGhkYXlGb3JtX29uU3VjY2VzcywgX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmU7XG5pbXBvcnQgeyBmb3JtYXREYXRlLCBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8sIGdldEZ1bGxNb250aE5hbWUgfSBmcm9tICcuLi91dGlsL2RhdGVIZWxwZXInO1xuaW1wb3J0IGVuZHBvaW50cyBmcm9tICcuLi91dGlsL2VuZHBvaW50cyc7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tICcuLi91dGlsL3JlcXVlc3RzJztcbmNsYXNzIEJpcnRoZGF5Rm9ybSBleHRlbmRzIEhUTUxGb3JtRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24uc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcignW3R5cGU9XCJzdWJtaXRcIl0nKSk7XG4gICAgICAgIF9CaXJ0aGRheUZvcm1fZGF5RmllbGQuc2V0KHRoaXMsIHRoaXMucXVlcnlTZWxlY3RvcignI2JpcnRoZGF5LWRheScpKTtcbiAgICAgICAgX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkLnNldCh0aGlzLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJyNiaXJ0aGRheS1tb250aCcpKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuYWRkRXZlbnRMaXN0ZW5lcignc3VibWl0JywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQpLmJpbmQodGhpcykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uLCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCkuYmluZCh0aGlzKSk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fZGF5RmllbGQsIFwiZlwiKSA9PT0gbnVsbCB8fCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fbW9udGhGaWVsZCwgXCJmXCIpID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgd2luZG93LnNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2RheUZpZWxkLCBcImZcIikub3B0aW9uVmFsdWVzID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fZ2V0RGF5VmFsdWVzKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX21vbnRoRmllbGQsIFwiZlwiKS5vcHRpb25WYWx1ZXMgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9nZXRNb250aFZhbHVlcykuY2FsbCh0aGlzKTtcbiAgICAgICAgfSwgMSk7XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0JpcnRoZGF5Rm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfQmlydGhkYXlGb3JtX29uU3VibWl0KS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX3N1Ym1pdEJ1dHRvbiwgXCJmXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQpLmJpbmQodGhpcykpO1xuICAgIH1cbn1cbl9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uID0gbmV3IFdlYWtNYXAoKSwgX0JpcnRoZGF5Rm9ybV9kYXlGaWVsZCA9IG5ldyBXZWFrTWFwKCksIF9CaXJ0aGRheUZvcm1fbW9udGhGaWVsZCA9IG5ldyBXZWFrTWFwKCksIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX0JpcnRoZGF5Rm9ybV9nZXREYXlWYWx1ZXMgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX2dldERheVZhbHVlcygpIHtcbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDMxOyBpKyspIHtcbiAgICAgICAgY29uc3QgbnVtID0gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKGkpLnRvU3RyaW5nKCk7XG4gICAgICAgIHJldHVyblZhbHVlW2ldID0gbnVtO1xuICAgIH1cbiAgICByZXR1cm4gcmV0dXJuVmFsdWU7XG59LCBfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzID0gZnVuY3Rpb24gX0JpcnRoZGF5Rm9ybV9nZXRNb250aFZhbHVlcygpIHtcbiAgICBjb25zdCByZXR1cm5WYWx1ZSA9IHt9O1xuICAgIGZvciAobGV0IGkgPSAxOyBpIDw9IDEyOyBpKyspIHtcbiAgICAgICAgY29uc3QgbnVtID0gZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvKGkpLnRvU3RyaW5nKCk7XG4gICAgICAgIGNvbnN0IGRhdGUgPSBuZXcgRGF0ZShgMjAyMS0ke251bX0tMDJgKTtcbiAgICAgICAgY29uc3QgbW9udGhOYW1lID0gZ2V0RnVsbE1vbnRoTmFtZShkYXRlKTtcbiAgICAgICAgcmV0dXJuVmFsdWVbaV0gPSBtb250aE5hbWU7XG4gICAgfVxuICAgIHJldHVybiByZXR1cm5WYWx1ZTtcbn0sIF9CaXJ0aGRheUZvcm1fb25TdWJtaXQgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX29uU3VibWl0KGV2ZW50KSB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCBkYXkgPSBmb3JtRGF0YS5nZXQoJ2RheScpO1xuICAgIGNvbnN0IG1vbnRoID0gZm9ybURhdGEuZ2V0KCdtb250aCcpO1xuICAgIGNvbnN0IHllYXIgPSAnMTk3MCc7XG4gICAgaWYgKCFkYXkgfHwgIW1vbnRoKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgY29uc3QgZGF0ZSA9IG5ldyBEYXRlKGAke3llYXJ9LSR7bW9udGh9LSR7ZGF5fWApO1xuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGFjdGlvbjogJ2FqYXhkYXRlb2ZiaXJ0aCcsXG4gICAgICAgIGRhdGU6IGZvcm1hdERhdGUoZGF0ZSlcbiAgICB9O1xuICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludHMuYWpheCwgbnVsbCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQmlydGhkYXlGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9CaXJ0aGRheUZvcm1fb25TdWNjZXNzKS5iaW5kKHRoaXMpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmUpLmJpbmQodGhpcyksIGV2ZW50LCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9CaXJ0aGRheUZvcm1fc3VibWl0QnV0dG9uLCBcImZcIikpO1xuICAgIHJldHVybiBmYWxzZTtcbn0sIF9CaXJ0aGRheUZvcm1fb25TdWNjZXNzID0gZnVuY3Rpb24gX0JpcnRoZGF5Rm9ybV9vblN1Y2Nlc3MoKSB7XG4gICAgY29uc3QgYmxvY2sgPSB0aGlzLmNsb3Nlc3QoJ1tpcz1cInNpZ251cC1ibG9ja1wiXScpO1xuICAgIGlmICghYmxvY2spIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICBibG9jay5jb21wbGV0ZWQgPSB0cnVlO1xufSwgX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmUgPSBmdW5jdGlvbiBfQmlydGhkYXlGb3JtX29uRmFpbHVyZSgpIHtcbiAgICAvLyBzdHVmZlxufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnYmlydGhkYXktZm9ybScsIEJpcnRoZGF5Rm9ybSwgeyBleHRlbmRzOiAnZm9ybScgfSk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgX0Nhcm91c2VsRWxlbWVudF9wcmV2QnV0dG9uLCBfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24sIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCwgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLCBfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsLCBfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUsIF9DYXJvdXNlbEVsZW1lbnRfZ2V0VHJhbnNsYXRlWCwgX0Nhcm91c2VsRWxlbWVudF9nZXRJdGVtV2lkdGg7XG5pbXBvcnQgeyBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL3BvbHlmaWxscy9tYXRjaE1lZGlhJztcbmNsYXNzIENhcm91c2VsRWxlbWVudCBleHRlbmRzIEhUTUxFbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zLnNldCh0aGlzLCBbXSk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfbGlzdC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbi5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudC5zZXQodGhpcywgMCk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlci5zZXQodGhpcywgMyk7XG4gICAgICAgIF9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwuc2V0KHRoaXMsIDApO1xuICAgIH1cbiAgICBnZXQgYWN0aXZlKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ2FjdGl2ZScpO1xuICAgIH1cbiAgICBzZXQgYWN0aXZlKHZhbHVlKSB7XG4gICAgICAgIHRoaXMudG9nZ2xlQXR0cmlidXRlKCdhY3RpdmUnLCB2YWx1ZSk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIEFycmF5LmZyb20odGhpcy5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1pdGVtXScpKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgdGhpcy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1pdGVtc10nKSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbiwgdGhpcy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1wcmV2XScpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tkYXRhLW5leHRdJyksIFwiZlwiKTtcbiAgICAgICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgXCJmXCIpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X3ByZXZCdXR0b24sIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X25hdmlnYXRlKS5jYWxsKHRoaXMsIC0xKTtcbiAgICAgICAgfSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9uZXh0QnV0dG9uLCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSkuY2FsbCh0aGlzLCAxKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNvbXBvbmVudENoZWNrID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDEwMjNweCknKTtcbiAgICAgICAgY29uc3Qgc2V0dXAgPSAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoY29tcG9uZW50Q2hlY2subWF0Y2hlcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmRlaW5pdGlhbGl6ZSgpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9O1xuICAgICAgICBzZXR1cCgpO1xuICAgICAgICBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihjb21wb25lbnRDaGVjaywgc2V0dXAsIGZhbHNlKTtcbiAgICB9XG4gICAgZGVpbml0aWFsaXplKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIHRoaXMuYWN0aXZlID0gZmFsc2U7XG4gICAgICAgIHdpbmRvdy5jbGVhckludGVydmFsKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbCwgXCJmXCIpKTtcbiAgICAgICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2xpc3QsIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0cmFuc2Zvcm0nKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUpLmNhbGwodGhpcywgMCk7XG4gICAgICAgIGNvbnN0IG1xID0gd2luZG93Lm1hdGNoTWVkaWEoJyhtYXgtd2lkdGg6IDQ3OXB4KScpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50KS5jYWxsKHRoaXMsIG1xKTtcbiAgICAgICAgbWF0Y2hNZWRpYUFkZEV2ZW50TGlzdGVuZXIobXEsICgpID0+IHtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnN0YW5jZXMsIFwibVwiLCBfQ2Fyb3VzZWxFbGVtZW50X3NldEN1cnJlbnQpLmNhbGwodGhpcywgbXEpO1xuICAgICAgICB9LCBmYWxzZSk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9pbnRlcnZhbCwgd2luZG93LnNldEludGVydmFsKCgpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLm1hdGNoZXMoJzpob3ZlcicpIHx8IHRoaXMubWF0Y2hlcygnOmZvY3VzLXdpdGhpbicpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUpLmNhbGwodGhpcywgMSk7XG4gICAgICAgIH0sIDcwMDApLCBcImZcIik7XG4gICAgfVxufVxuX0Nhcm91c2VsRWxlbWVudF9pdGVtcyA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfcHJldkJ1dHRvbiA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfbmV4dEJ1dHRvbiA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfY3VycmVudCA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlciA9IG5ldyBXZWFrTWFwKCksIF9DYXJvdXNlbEVsZW1lbnRfaW50ZXJ2YWwgPSBuZXcgV2Vha01hcCgpLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudCA9IGZ1bmN0aW9uIF9DYXJvdXNlbEVsZW1lbnRfc2V0Q3VycmVudChtcSkge1xuICAgIGNvbnN0IGl0ZW1zU2hvd24gPSBtcS5tYXRjaGVzID8gMSA6IDI7XG4gICAgaWYgKGl0ZW1zU2hvd24gPCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIFwiZlwiKS5sZW5ndGgpIHtcbiAgICAgICAgdGhpcy5hY3RpdmUgPSB0cnVlO1xuICAgIH1cbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlciwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2l0ZW1zLCBcImZcIikubGVuZ3RoIC0gaXRlbXNTaG93biwgXCJmXCIpO1xufSwgX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSA9IGZ1bmN0aW9uIF9DYXJvdXNlbEVsZW1lbnRfbmF2aWdhdGUoaW5jcmVtZW50KSB7XG4gICAgaWYgKCFfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfbGlzdCwgXCJmXCIpKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBcImZcIikgKyBpbmNyZW1lbnQsIFwiZlwiKTtcbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIFwiZlwiKSA8IDApIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jb3VudGVyLCBcImZcIiksIFwiZlwiKTtcbiAgICB9XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBcImZcIikgPiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfY291bnRlciwgXCJmXCIpKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCAwLCBcImZcIik7XG4gICAgfVxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBcImZcIikuc3R5bGUudHJhbnNmb3JtID0gYHRyYW5zbGF0ZVgoJHtfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaW5zdGFuY2VzLCBcIm1cIiwgX0Nhcm91c2VsRWxlbWVudF9nZXRUcmFuc2xhdGVYKS5jYWxsKHRoaXMsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9jdXJyZW50LCBcImZcIikpfXB4KWA7XG59LCBfQ2Fyb3VzZWxFbGVtZW50X2dldFRyYW5zbGF0ZVggPSBmdW5jdGlvbiBfQ2Fyb3VzZWxFbGVtZW50X2dldFRyYW5zbGF0ZVgoY291bnQpIHtcbiAgICBjb25zdCBtb250aFdpZHRoID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcywgXCJtXCIsIF9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoKS5jYWxsKHRoaXMpO1xuICAgIHJldHVybiAtKG1vbnRoV2lkdGggKiBjb3VudCk7XG59LCBfQ2Fyb3VzZWxFbGVtZW50X2dldEl0ZW1XaWR0aCA9IGZ1bmN0aW9uIF9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoKCkge1xuICAgIGNvbnN0IGl0ZW0gPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9DYXJvdXNlbEVsZW1lbnRfaXRlbXMsIFwiZlwiKVswXTtcbiAgICBpZiAoIWl0ZW0pIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgfVxuICAgIGNvbnN0IGl0ZW1XaWR0aCA9IGl0ZW0uZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCkud2lkdGg7XG4gICAgY29uc3QgZ3JpZEdhcCA9IHBhcnNlSW50KHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0Nhcm91c2VsRWxlbWVudF9saXN0LCBcImZcIikpLmNvbHVtbkdhcCwgMTApO1xuICAgIHJldHVybiBpdGVtV2lkdGggKyBncmlkR2FwO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnY2Fyb3VzZWwtZWxlbWVudCcsIENhcm91c2VsRWxlbWVudCk7XG4iLCJ2YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcywgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUsIF9MYXZhbmRyZVNlbGVjdF9uYW1lLCBfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIsIF9MYXZhbmRyZVNlbGVjdF91cGRhdGUsIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RPcHRpb24sIF9MYXZhbmRyZVNlbGVjdF9maWx0ZXIsIF9MYXZhbmRyZVNlbGVjdF9zaG93RHJvcGRvd24sIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd247XG5pbXBvcnQgeyBmb3JtYXROdW1iZXJXaXRoTGVhZGluZ1plcm8gfSBmcm9tICcuLi91dGlsL2RhdGVIZWxwZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTGF2YW5kcmVTZWxlY3QgZXh0ZW5kcyBIVE1MRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQuc2V0KHRoaXMsIHZvaWQgMCk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLnNldCh0aGlzLCB2b2lkIDApO1xuICAgICAgICBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzLnNldCh0aGlzLCB7fSk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RlZFZhbHVlLnNldCh0aGlzLCAnJyk7XG4gICAgICAgIF9MYXZhbmRyZVNlbGVjdF9uYW1lLnNldCh0aGlzLCB0aGlzLmdldEF0dHJpYnV0ZSgnbmFtZScpIHx8ICcnKTtcbiAgICAgICAgX0xhdmFuZHJlU2VsZWN0X291dHNpZGVDbGlja0xpc3RlbmVyLnNldCh0aGlzLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGNvbnN0IGNsb3Nlc3QgPSB0YXJnZXQuY2xvc2VzdCgnbGF2YW5kcmUtc2VsZWN0Jyk7XG4gICAgICAgICAgICBpZiAoIXRhcmdldCB8fCBjbG9zZXN0ID09PSBudWxsIHx8IGNsb3Nlc3QgIT09IHRoaXMpIHtcbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duKS5jYWxsKHRoaXMpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0lOUFVUJyksIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5jbGFzc0xpc3QuYWRkKCdsYXZhbmRyZS1zZWxlY3RfX2lucHV0Jyk7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikubmFtZSA9IHRoaXMubmFtZTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5hdXRvY2FwaXRhbGl6ZSA9ICdvZmYnO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLmF1dG9jb21wbGV0ZSA9ICdvZmYnO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdVTCcpLCBcImZcIik7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKS5oaWRkZW4gPSB0cnVlO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikuY2xhc3NMaXN0LmFkZCgnbGF2YW5kcmUtc2VsZWN0X19kcm9wZG93bicpO1xuICAgICAgICB0aGlzLmFwcGVuZENoaWxkKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKSk7XG4gICAgfVxuICAgIGdldCBuYW1lKCkge1xuICAgICAgICByZXR1cm4gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfbmFtZSwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgbmFtZSh2YWx1ZSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9uYW1lLCB2YWx1ZSwgXCJmXCIpO1xuICAgIH1cbiAgICBnZXQgc2VsZWN0ZWRWYWx1ZSgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUsIFwiZlwiKTtcbiAgICB9XG4gICAgc2V0IHNlbGVjdGVkVmFsdWUodmFsdWUpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0ZWRWYWx1ZSwgdmFsdWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS52YWx1ZSA9IHZhbHVlLnJlcGxhY2UoL14wKy8sICcnKTtcbiAgICB9XG4gICAgZ2V0IG9wdGlvblZhbHVlcygpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcywgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgb3B0aW9uVmFsdWVzKHZhbHVlKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X29wdGlvblZhbHVlcywgdmFsdWUsIFwiZlwiKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X3VwZGF0ZSkuY2FsbCh0aGlzKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkLCBcImZcIikuYWRkRXZlbnRMaXN0ZW5lcignaW5wdXQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMsIFwibVwiLCBfTGF2YW5kcmVTZWxlY3RfZmlsdGVyKS5iaW5kKHRoaXMpKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5hZGRFdmVudExpc3RlbmVyKCdmb2N1cycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9zaG93RHJvcGRvd24pLmJpbmQodGhpcykpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS5yZW1vdmVFdmVudExpc3RlbmVyKCdpbnB1dCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9maWx0ZXIpLmJpbmQodGhpcykpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9zZWFyY2hGaWVsZCwgXCJmXCIpLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzLCBcIm1cIiwgX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93bikuYmluZCh0aGlzKSk7XG4gICAgfVxufVxuX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzID0gbmV3IFdlYWtNYXAoKSwgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUgPSBuZXcgV2Vha01hcCgpLCBfTGF2YW5kcmVTZWxlY3RfbmFtZSA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciA9IG5ldyBXZWFrTWFwKCksIF9MYXZhbmRyZVNlbGVjdF9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfTGF2YW5kcmVTZWxlY3RfdXBkYXRlID0gZnVuY3Rpb24gX0xhdmFuZHJlU2VsZWN0X3VwZGF0ZSgpIHtcbiAgICBPYmplY3Qua2V5cyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMsIFwiZlwiKSkuZm9yRWFjaCgoa2V5KSA9PiB7XG4gICAgICAgIGNvbnN0IG9wdGlvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2xpJyk7XG4gICAgICAgIG9wdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RPcHRpb24pLmJpbmQodGhpcykpO1xuICAgICAgICBvcHRpb24uY2xhc3NMaXN0LmFkZCgnbGF2YW5kcmUtc2VsZWN0X19kcm9wZG93bl9faXRlbScpO1xuICAgICAgICBjb25zdCB2YWx1ZSA9IGZvcm1hdE51bWJlcldpdGhMZWFkaW5nWmVybyhfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9vcHRpb25WYWx1ZXMsIFwiZlwiKVtrZXldKS50b1N0cmluZygpO1xuICAgICAgICBvcHRpb24uZGF0YXNldC52YWx1ZSA9IHZhbHVlO1xuICAgICAgICBvcHRpb24uaW5uZXJUZXh0ID0gdmFsdWUucmVwbGFjZSgvXjArLywgJycpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9MYXZhbmRyZVNlbGVjdF9kcm9wZG93bkZpZWxkLCBcImZcIikuYXBwZW5kQ2hpbGQob3B0aW9uKTtcbiAgICB9KTtcbiAgICBjb25zdCBmaXJzdE9wdGlvbiA9IHRoaXMucXVlcnlTZWxlY3RvcignLmxhdmFuZHJlLXNlbGVjdF9fZHJvcGRvd25fX2l0ZW0nKTtcbiAgICBpZiAoIWZpcnN0T3B0aW9uKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgZmlyc3RPcHRpb24uZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ2NsaWNrJykpO1xufSwgX0xhdmFuZHJlU2VsZWN0X3NlbGVjdE9wdGlvbiA9IGZ1bmN0aW9uIF9MYXZhbmRyZVNlbGVjdF9zZWxlY3RPcHRpb24oZXZlbnQpIHtcbiAgICBjb25zdCB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgY29uc3QgdmFsdWUgPSB0YXJnZXQuZGF0YXNldC52YWx1ZTtcbiAgICBpZiAodmFsdWUgPT09IHVuZGVmaW5lZCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHZhbHVlO1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2luc3RhbmNlcywgXCJtXCIsIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24pLmNhbGwodGhpcyk7XG59LCBfTGF2YW5kcmVTZWxlY3RfZmlsdGVyID0gZnVuY3Rpb24gX0xhdmFuZHJlU2VsZWN0X2ZpbHRlcigpIHtcbiAgICBjb25zdCBvcHRpb25zID0gQXJyYXkuZnJvbSh0aGlzLnF1ZXJ5U2VsZWN0b3JBbGwoJy5sYXZhbmRyZS1zZWxlY3RfX2Ryb3Bkb3duX19pdGVtJykpO1xuICAgIGNvbnN0IHZhbHVlID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfc2VhcmNoRmllbGQsIFwiZlwiKS52YWx1ZS50b0xvd2VyQ2FzZSgpO1xuICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgICAgIG9wdGlvbi5oaWRkZW4gPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgb3B0aW9ucy5mb3JFYWNoKChvcHRpb24pID0+IHtcbiAgICAgICAgY29uc3QgdGV4dCA9IG9wdGlvbi5pbm5lclRleHQudG9Mb3dlckNhc2UoKTtcbiAgICAgICAgaWYgKHRleHQuaW5kZXhPZih2YWx1ZSkgIT09IC0xKSB7XG4gICAgICAgICAgICBvcHRpb24uaGlkZGVuID0gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICBvcHRpb24uaGlkZGVuID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgIH0pO1xufSwgX0xhdmFuZHJlU2VsZWN0X3Nob3dEcm9wZG93biA9IGZ1bmN0aW9uIF9MYXZhbmRyZVNlbGVjdF9zaG93RHJvcGRvd24oKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3RfZHJvcGRvd25GaWVsZCwgXCJmXCIpLmhpZGRlbiA9IGZhbHNlO1xuICAgIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIsIFwiZlwiKSk7XG4gICAgdGhpcy5jbGFzc0xpc3QuYWRkKCdhY3RpdmUnKTtcbn0sIF9MYXZhbmRyZVNlbGVjdF9oaWRlRHJvcGRvd24gPSBmdW5jdGlvbiBfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duKCkge1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQsIFwiZlwiKS5oaWRkZW4gPSB0cnVlO1xuICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfTGF2YW5kcmVTZWxlY3Rfb3V0c2lkZUNsaWNrTGlzdGVuZXIsIFwiZlwiKSk7XG4gICAgdGhpcy5jbGFzc0xpc3QucmVtb3ZlKCdhY3RpdmUnKTtcbn07XG5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xhdmFuZHJlLXNlbGVjdCcsIExhdmFuZHJlU2VsZWN0KTtcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBfU2lnbnVwQmxvY2tfdGVtcGxhdGUsIF9TaWdudXBCbG9ja19vdmVybGF5LCBfU2lnbnVwQmxvY2tfaHJlZiwgX1NpZ251cEJsb2NrX3BvaW50cywgX1NpZ251cEJsb2NrX3R5cGUsIF9TaWdudXBCbG9ja19jb21wbGV0ZWQsIF9TaWdudXBCbG9ja19tZWRpYVF1ZXJ5LCBfU2lnbnVwQmxvY2tfbXEsIF9TaWdudXBCbG9ja19pc01vYmlsZSwgX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUsIF9TaWdudXBCbG9ja19zZXRUZW1wbGF0ZSwgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIsIF9TaWdudXBCbG9ja19jbGlja0hhbmRsZXIsIF9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMsIF9TaWdudXBCbG9ja19nZXRUZW1wbGF0ZTtcbmltcG9ydCB7IG1hdGNoTWVkaWFBZGRFdmVudExpc3RlbmVyLCBtYXRjaE1lZGlhUmVtb3ZlRXZlbnRMaXN0ZW5lciB9IGZyb20gJy4uL3BvbHlmaWxscy9tYXRjaE1lZGlhJztcbmltcG9ydCBlbmRwb2ludHMgZnJvbSAnLi4vdXRpbC9lbmRwb2ludHMnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWdudXBCbG9jayBleHRlbmRzIEhUTUxMSUVsZW1lbnQge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX3RlbXBsYXRlLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX292ZXJsYXkuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfaHJlZi5zZXQodGhpcywgdGhpcy5kYXRhc2V0LmhyZWYgfHwgbnVsbCk7XG4gICAgICAgIF9TaWdudXBCbG9ja19wb2ludHMuc2V0KHRoaXMsIE51bWJlcih0aGlzLmRhdGFzZXQucG9pbnRzKSB8fCAwKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX3R5cGUuc2V0KHRoaXMsIHRoaXMuZ2V0QXR0cmlidXRlKCd0eXBlJykgfHwgJycpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfY29tcGxldGVkLnNldCh0aGlzLCB0aGlzLmhhc0F0dHJpYnV0ZSgnY29tcGxldGVkJykgfHwgZmFsc2UpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeS5zZXQodGhpcywgZ2V0Q29tcHV0ZWRTdHlsZShkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpLmdldFByb3BlcnR5VmFsdWUoJy0tdGFibGV0LWxhbmRzY2FwZScpKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX21xLnNldCh0aGlzLCBtYXRjaE1lZGlhKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21lZGlhUXVlcnksIFwiZlwiKSkpO1xuICAgICAgICBfU2lnbnVwQmxvY2tfaXNNb2JpbGUuc2V0KHRoaXMsIGZhbHNlKTtcbiAgICAgICAgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLnNldCh0aGlzLCAoKSA9PiB7XG4gICAgICAgICAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgXCJmXCIpKSB7XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgXCJmXCIpLmhpZGRlbiA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19zZXRUZW1wbGF0ZSkuY2FsbCh0aGlzKTtcbiAgICAgICAgICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMpLmNhbGwodGhpcyk7XG4gICAgICAgIH0pO1xuICAgICAgICBfU2lnbnVwQmxvY2tfbW91c2VMZWF2ZUhhbmRsZXIuc2V0KHRoaXMsIChldmVudCkgPT4ge1xuICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgaWYgKGV2ZW50KSB7XG4gICAgICAgICAgICAgICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCBcImZcIikpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b2dnbGVBdHRyaWJ1dGUoJ2hpZGRlbicsIHRydWUpO1xuICAgICAgICB9KTtcbiAgICAgICAgX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlci5zZXQodGhpcywgKCkgPT4ge1xuICAgICAgICAgICAgaWYgKHRoaXMuY29tcGxldGVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgICAgICBhY3Rpb246ICdhamF4YWRkbG95YWx0eXBvaW50cycsXG4gICAgICAgICAgICAgICAgcG9pbnRzOiBTdHJpbmcoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfcG9pbnRzLCBcImZcIikpLFxuICAgICAgICAgICAgICAgIHBvb2w6ICdkZWZhdWx0JyxcbiAgICAgICAgICAgICAgICB0eXBlOiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja190eXBlLCBcImZcIilcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgZW5kcG9pbnRzLmFqYXgsIG51bGwsICgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLmNvbXBsZXRlZCA9IHRydWU7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIHdpbmRvdy5vcGVuKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2hyZWYsIFwiZlwiKSwgJ19ibGFuaycpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0IGNvbXBsZXRlZCgpIHtcbiAgICAgICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2NvbXBsZXRlZCwgXCJmXCIpO1xuICAgIH1cbiAgICBzZXQgY29tcGxldGVkKHZhbHVlKSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfU2lnbnVwQmxvY2tfY29tcGxldGVkLCB2YWx1ZSwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja190ZW1wbGF0ZSwgbnVsbCwgXCJmXCIpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCBudWxsLCBcImZcIik7XG4gICAgICAgIChfYSA9IHRoaXMucXVlcnlTZWxlY3RvcignLnBvaW50cy1ncmlkX19vdmVybGF5JykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5yZW1vdmUoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlKS5jYWxsKHRoaXMpO1xuICAgICAgICBjb25zdCB0aXRsZXMgPSBBcnJheS5mcm9tKHRoaXMucXVlcnlTZWxlY3RvckFsbCgnLnBvaW50cy1ncmlkX190aXRsZS1jb250ZW50JykpO1xuICAgICAgICB0aXRsZXMuZm9yRWFjaCgodGl0bGUpID0+IHtcbiAgICAgICAgICAgIHRpdGxlLnRvZ2dsZUF0dHJpYnV0ZSgnaGlkZGVuJywgIXRpdGxlLmhpZGRlbik7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX2NoZWNrSXNNb2JpbGUpLmNhbGwodGhpcyk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pc01vYmlsZSwgXCJmXCIpKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ21vdXNlZW50ZXInLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICB9XG4gICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlbGVhdmUnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZUxlYXZlSGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tb3VzZWVudGVySGFuZGxlciwgXCJmXCIpKTtcbiAgICAgICAgfVxuICAgICAgICBtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lcihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19tcSwgXCJmXCIpLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19pbnN0YW5jZXMsIFwibVwiLCBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSkpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdtb3VzZWVudGVyJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignbW91c2VsZWF2ZScsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLCBcImZcIikpO1xuICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbW91c2VlbnRlckhhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIG1hdGNoTWVkaWFSZW1vdmVFdmVudExpc3RlbmVyKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21xLCBcImZcIiksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2luc3RhbmNlcywgXCJtXCIsIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlKSk7XG4gICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19ocmVmLCBcImZcIikpIHtcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignY2xpY2snLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19jbGlja0hhbmRsZXIsIFwiZlwiKSk7XG4gICAgICAgIH1cbiAgICB9XG59XG5fU2lnbnVwQmxvY2tfdGVtcGxhdGUgPSBuZXcgV2Vha01hcCgpLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19ocmVmID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX3BvaW50cyA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja190eXBlID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX2NvbXBsZXRlZCA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19tZWRpYVF1ZXJ5ID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX21xID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX2lzTW9iaWxlID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyID0gbmV3IFdlYWtNYXAoKSwgX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciA9IG5ldyBXZWFrTWFwKCksIF9TaWdudXBCbG9ja19pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfU2lnbnVwQmxvY2tfY2hlY2tJc01vYmlsZSA9IGZ1bmN0aW9uIF9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlKCkge1xuICAgIF9fY2xhc3NQcml2YXRlRmllbGRTZXQodGhpcywgX1NpZ251cEJsb2NrX2lzTW9iaWxlLCAhX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfbXEsIFwiZlwiKS5tYXRjaGVzLCBcImZcIik7XG4gICAgcmV0dXJuIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX2lzTW9iaWxlLCBcImZcIik7XG59LCBfU2lnbnVwQmxvY2tfc2V0VGVtcGxhdGUgPSBmdW5jdGlvbiBfU2lnbnVwQmxvY2tfc2V0VGVtcGxhdGUoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmICghX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfdGVtcGxhdGUsIFwiZlwiKSkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja190ZW1wbGF0ZSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfaW5zdGFuY2VzLCBcIm1cIiwgX1NpZ251cEJsb2NrX2dldFRlbXBsYXRlKS5jYWxsKHRoaXMpLCBcImZcIik7XG4gICAgfVxuICAgIHRoaXMuYXBwZW5kQ2hpbGQoKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfdGVtcGxhdGUsIFwiZlwiKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmNvbnRlbnQuY2xvbmVOb2RlKHRydWUpKTtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9TaWdudXBCbG9ja19vdmVybGF5LCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJy5wb2ludHMtZ3JpZF9fb3ZlcmxheScpLCBcImZcIik7XG4gICAgY29uc3QgY2xvc2VPdmVybGF5QnV0dG9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbZGF0YS1jbG9zZV0nKTtcbiAgICBpZiAoIWNsb3NlT3ZlcmxheUJ1dHRvbikge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNsb3NlT3ZlcmxheUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyLCBcImZcIikuYmluZCh0aGlzKSwgZmFsc2UpO1xufSwgX1NpZ251cEJsb2NrX3NldE92ZXJsYXlFdmVudExpc3RlbmVycyA9IGZ1bmN0aW9uIF9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgdmFyIF9hO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9TaWdudXBCbG9ja19ocmVmLCBcImZcIikpIHtcbiAgICAgICAgY29uc3QgYnV0dG9uID0gKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfb3ZlcmxheSwgXCJmXCIpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucXVlcnlTZWxlY3RvcignYnV0dG9uW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdJyk7XG4gICAgICAgIGlmICghYnV0dG9uKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfY2xpY2tIYW5kbGVyLCBcImZcIikpO1xuICAgIH1cbn0sIF9TaWdudXBCbG9ja19nZXRUZW1wbGF0ZSA9IGZ1bmN0aW9uIF9TaWdudXBCbG9ja19nZXRUZW1wbGF0ZSgpIHtcbiAgICBjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdwb2ludHMtZ3JpZC1vdmVybGF5Jyk7XG4gICAgaWYgKCFkb2N1bWVudC5ib2R5LmNsYXNzTGlzdC5jb250YWlucygnbG9nZ2VkLWluJykpIHtcbiAgICAgICAgcmV0dXJuIHRlbXBsYXRlO1xuICAgIH1cbiAgICBpZiAoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfY29tcGxldGVkLCBcImZcIikpIHtcbiAgICAgICAgcmV0dXJuIChkb2N1bWVudC5nZXRFbGVtZW50QnlJZChgcG9pbnRzLWdyaWQtb3ZlcmxheS0tY29tcGxldGVkLS0ke19fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1NpZ251cEJsb2NrX3R5cGUsIFwiZlwiKX1gKSB8fFxuICAgICAgICAgICAgZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3BvaW50cy1ncmlkLW92ZXJsYXktLWNvbXBsZXRlZCcpKTtcbiAgICB9XG4gICAgY29uc3QgdHlwZVRlbXBsYXRlID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoYHBvaW50cy1ncmlkLW92ZXJsYXktLSR7X19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfU2lnbnVwQmxvY2tfdHlwZSwgXCJmXCIpfWApO1xuICAgIGlmICh0eXBlVGVtcGxhdGUpIHtcbiAgICAgICAgcmV0dXJuIHR5cGVUZW1wbGF0ZTtcbiAgICB9XG4gICAgcmV0dXJuIHRlbXBsYXRlO1xufTtcbmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnc2lnbnVwLWJsb2NrJywgU2lnbnVwQmxvY2ssIHsgZXh0ZW5kczogJ2xpJyB9KTtcbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImV2ZW50RW1pdHRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXplQ29tcG9uZW50cyIsIm9uIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJjb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsIm9uSW5pdCIsIkFqYXhMb2dpbiIsIkFqYXhSZWdpc3RlciIsIkNvb2tpZUJhciIsIkNvcHlDb3Vwb24iLCJDdXJ0YWluIiwiRW1haWxWYWxpZGF0aW9uIiwiRmllbGRWYWxpZGF0aW9uIiwiRm9yZ290UGFzc3dvcmQiLCJGb3Jnb3RQYXNzd29yZFRvZ2dsZSIsIkhlYWRlclNlYXJjaCIsIkluZm9Qb3B1cCIsIkxhenlMb2FkZXIiLCJOZXdzbGV0dGVyU3Vic2NyaWJlIiwiUGFzc3dvcmRSZXZlYWwiLCJSZWRlZW1Qb2ludHNGb3JDb3Vwb24iLCJTY3JvbGxUb0NvbnRlbnQiLCJWaWRlb01lZGlhUmVzb2x2ZXIiLCJTaWRlUGFuZWwiLCJzZXRDdXJyZW50TGlua0NsYXNzIiwiQXBwIiwiYXJndW1lbnRzIiwid3BGb3Jtc1N1Ym1pdEJ1dHRvbnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwicmVtb3ZlQXR0cmlidXRlIiwic2V0QXR0cmlidXRlIiwiYXBwSW5pdCIsImFwcCIsImxhenlCYWNrZ3JvdW5kcyIsImZvb3RlclVzcFNsaWRlciIsInNldFRpbWVvdXQiLCJsaXN0IiwicXVlcnlTZWxlY3RvciIsIml0ZW1zIiwidG90YWxXaWR0aCIsIml0ZW0iLCJjbGllbnRXaWR0aCIsInN0eWxlIiwid2lkdGgiLCJhZGRFdmVudExpc3RlbmVyIiwic2xpY2UiLCJjYWxsIiwid2luZG93IiwibGF6eUJhY2tncm91bmRPYnNlcnZlciIsIkludGVyc2VjdGlvbk9ic2VydmVyIiwiZW50cmllcyIsIm9ic2VydmVyIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsInRhcmdldCIsImNsYXNzTGlzdCIsImFkZCIsInVub2JzZXJ2ZSIsImxhenlCYWNrZ3JvdW5kIiwib2JzZXJ2ZSIsIkRhdGFMYXllciIsImRhdGFMYXllciIsInB1c2giLCJkYXRhIiwiZWNvbW1lcmNlIiwiQ29tcG9uZW50IiwibG9hZFJlY2FwdGNoYSIsInNpdGVrZXkiLCJzZW5kQWpheFJlcXVlc3QiLCJzZXRWYWxpZGF0aW9uTWVzc2FnZSIsImZvcm0iLCJhamF4RW5kcG9pbnQiLCJsb2NhdGlvbiIsIm9yaWdpbiIsImlzVmFsaWQiLCJzZXRFdmVudExpc3RlbmVycyIsImZpZWxkcyIsIkN5cHJlc3MiLCJpbmRleCIsImxlbmd0aCIsImZpZWxkIiwidmFsaWRhdG9yIiwibWF0Y2hlcyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInN1Ym1pdEJ1dHRvbiIsInR5cGUiLCJldmVudCIsIm9uU3VibWl0IiwiX2EiLCJfYiIsInByZXZlbnREZWZhdWx0IiwidmFsaWQiLCJ2YWxpZGl0eSIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJ1c2VybmFtZSIsImdldCIsInRvU3RyaW5nIiwicGFzc3dvcmQiLCJncmVjYXB0Y2hhIiwiYWN0aW9uIiwicmVjYXB0Y2hhVG9rZW4iLCJ1bmRlZmluZWQiLCJyZWFkeSIsImV4ZWN1dGUiLCJ0aGVuIiwidG9rZW4iLCJvblN1Y2Nlc3MiLCJiaW5kIiwib25GYWlsdXJlIiwicmVzIiwicmVzcG9uc2UiLCJzdWNjZXNzIiwiRXJyb3IiLCJtZXRob2QiLCJocmVmIiwiZGF0YXNldCIsInJlZGlyZWN0VXJsIiwiSlNPTiIsInBhcnNlIiwibWVzc2FnZSIsImxvZ2luRm9ybXMiLCJhamF4TG9naW4iLCJDb25maXJtVmFsaWRhdGlvbiIsImVtYWlsRmllbGQiLCJlbWFpbFZhbGlkYXRpb24iLCJwYXNzd29yZEZpZWxkIiwiY29uZmlybVBhc3N3b3JkRmllbGQiLCJjb25maXJtVmFsaWRhdGlvbiIsIl9jIiwiX2QiLCJlbWFpbCIsImZpcnN0TmFtZSIsImxhc3ROYW1lIiwiZmlyc3RfbmFtZSIsImxhc3RfbmFtZSIsInJlZ2lzdGVyRm9ybSIsImFqYXhSZWdpc3RlciIsImNvbmZpcm1GaWVsZCIsImV2ZW50cyIsInZhbHVlIiwic2V0Q3VzdG9tVmFsaWRpdHkiLCJyZXBvcnRWYWxpZGl0eSIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJyZWNlaXZlciIsInN0YXRlIiwia2luZCIsImYiLCJUeXBlRXJyb3IiLCJoYXMiLCJzZXQiLCJfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0IiwiX0Nvb2tpZUJhcl9pbnN0YW5jZXMiLCJfQ29va2llQmFyX2VsZW1lbnQiLCJfQ29va2llQmFyX3RlbXBsYXRlRWxlbWVudCIsIl9Db29raWVCYXJfYWNjZXB0QnV0dG9uIiwiX0Nvb2tpZUJhcl9nZXRFbGVtZW50IiwiX0Nvb2tpZUJhcl9hY2NlcHRDb29raWVzIiwiZ2V0Q29va2llVmFsdWUiLCJzZXRDb29raWVWYWx1ZSIsImNvb2tpZU5hbWUiLCJyZW1vdmUiLCJzZXRBY2NlcHRDb29raWUiLCJjb29raWVCYXIiLCJXZWFrTWFwIiwiV2Vha1NldCIsImNsb25lIiwiY2xvbmVOb2RlIiwiY29udGVudCIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsIl9Db3B5Q291cG9uX2J1dHRvbiIsIm9uQ2xpY2siLCJjb2RlIiwidGV4dCIsImNvcGllZFRleHQiLCJjb25zb2xlIiwibG9nIiwibmF2aWdhdG9yIiwiY2xpcGJvYXJkIiwid3JpdGVUZXh0IiwiaW5uZXJUZXh0IiwiY29weUJ1dHRvbnMiLCJjb3B5Q291cG9uIiwiX0N1cnRhaW5faW5zdGFuY2VzIiwiX0N1cnRhaW5fdHJhbnNpdGlvbkxpc3RlbmVyIiwiX0N1cnRhaW5faGFuZGxlVHJhbnNpdGlvbiIsImZvbGRCdXR0b24iLCJvbmx5T25Nb2JpbGUiLCJkZWZhdWx0SGVpZ2h0IiwiZ2V0Q29tcHV0ZWRTdHlsZSIsIm1heEhlaWdodCIsImUiLCJpbm5lcldpZHRoIiwiY29udGFpbnMiLCJzY3JvbGxIZWlnaHQiLCJyZWFkTGVzcyIsInJlYWRNb3JlIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsInRvZ2dsZXMiLCJ0b2dnbGUiLCJjdXJ0YWluVG9nZ2xlIiwiY3VydGFpbiIsInJlbW92ZVByb3BlcnR5IiwicmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXMiLCJlbWFpbElucHV0IiwiY2xvc2VzdCIsImJsdXJUaW1lb3V0IiwiY2xlYXJUaW1lb3V0IiwiaGFuZGxlQmx1ckV2ZW50Iiwic2VjdXJpdHkiLCJlcnJvciIsInJlZ2lzdGVyRW1haWxJbnB1dCIsImFuY2hvciIsInBhc3N3b3JkRm9yZ2V0QW5jaG9yIiwiZmllbGRWYWxpZGF0aW9uIiwidXNlcl9sb2dpbiIsInBhc3N3b3JkRm9yZ2V0TGlua3MiLCJsaW5rIiwiZm9yZ290UGFzc3dvcmQiLCJwYXNzd29yZEZvcmdldFdyYXBwZXIiLCJnZXRFbGVtZW50QnlJZCIsImxvZ2luV3JhcHBlciIsInRvZ2dsZUF0dHJpYnV0ZSIsImRvY3VtZW50Q2xpY2tIYW5kbGVyIiwiZXZlbnRUYXJnZXQiLCJ3aXRoaW5IZWFkZXIiLCJib2R5Iiwic3RvcEltbWVkaWF0ZVByb3BhZ2F0aW9uIiwic2VhcmNoSW5wdXRFbGVtZW50IiwiZm9jdXMiLCJoZWFkZXJTZWFyY2giLCJpbnN0YW5jZSIsInNob3dUaXBweSIsInRpcHB5IiwidGhlbWUiLCJhbGxvd0hUTUwiLCJoaWRlT25DbGljayIsInNob3dPbkNyZWF0ZSIsImludGVyYWN0aXZlIiwib25IaWRkZW4iLCJpIiwiZGVzdHJveSIsInNob3ciLCJoaWRlV2l0aEludGVyYWN0aXZpdHkiLCJ0aXBweUVsZW1lbnRzIiwidGlwcHlFbGVtZW50IiwiaW5mb1BvcHVwIiwiZWxlbWVudHMiLCJnZXRFbGVtZW50cyIsIm9uSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJsYXp5bG9hZCIsIk9ic2VydmVyQ2xhc3MiLCJvcHRpb25zIiwicm9vdCIsInJvb3RNYXJnaW4iLCJ0aHJlc2hvbGQiLCJsYXp5SW1hZ2VPYnNlcnZlciIsIkhUTUxQaWN0dXJlRWxlbWVudCIsImxhenkiLCJkaXNjb25uZWN0IiwibGF6eUltYWdlIiwiZWwiLCJtYW5hZ2VDc3NDbGFzc2VzIiwiaW1hZ2UiLCJsb2FkaW5nU3Bpbm5lciIsIkhUTUxJbWFnZUVsZW1lbnQiLCJIVE1MU291cmNlRWxlbWVudCIsInNpemVzIiwic3Jjc2V0Iiwic3JjIiwibGF6eWxvYWRFbGVtZW50cyIsImNvbXBhbnlOYW1lIiwicmVtb3ZlRXJyb3JUZXh0IiwiYXBwZW5kU3VjY2Vzc1RleHQiLCJldmVudENhdGVnb3J5IiwiZXZlbnRBY3Rpb24iLCJldmVudExhYmVsIiwiaWQiLCJhcHBlbmRFcnJvclRleHQiLCJmb3JtcyIsIm5ld3NsZXR0ZXJTdWJzY3JpYmUiLCJwYXNzd29yZElucHV0IiwiY3JlYXRlUmV2ZWFsQnV0dG9uIiwiY3JlYXRlRWxlbWVudCIsImNsYXNzTmFtZSIsInRhYkluZGV4IiwicGFzc3dvcmRSb3dzIiwicGFzc3dvcmRSb3ciLCJwYXNzd29yZFJldmVhbCIsIl9SZWRlZW1Qb2ludHNGb3JDb3Vwb25fYnV0dG9uIiwiZW5kcG9pbnRzIiwiYWpheCIsInJlZGVlbUJ1dHRvbnMiLCJyZWRlZW1Qb2ludHNGb3JDb3Vwb24iLCJfU2Nyb2xsVG9Db250ZW50X2VsZW1lbnQiLCJfU2Nyb2xsVG9Db250ZW50X3RhcmdldCIsInNjcm9sbFRvVGFyZ2V0IiwiaGVhZGVyT2Zmc2V0IiwidGFyZ2V0SWQiLCJzY3JvbGxUbyIsIl9WaWRlb01lZGlhUmVzb2x2ZXJfaW5zdGFuY2VzIiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl9lbGVtZW50IiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl9zb3VyY2VzIiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl90aW1lb3V0IiwiX1ZpZGVvTWVkaWFSZXNvbHZlcl9oYW5kbGVSZXNpemUiLCJfVmlkZW9NZWRpYVJlc29sdmVyX3Nob3dTb3VyY2UiLCJtYXRjaE1lZGlhQWRkRXZlbnRMaXN0ZW5lciIsIm1xIiwibWF0Y2hNZWRpYSIsIm1xMiIsInNvdXJjZSIsIm9yaWVudGF0aW9uIiwibWF4V2lkdGgiLCJOdW1iZXIiLCJjdXJyZW50T3JpZW50YXRpb24iLCJjdXJyZW50V2lkdGgiLCJkYXRhU3JjIiwiY2FsbGJhY2siLCJldmVudEJ1YmJsaW5nIiwiYWRkTGlzdGVuZXIiLCJtYXRjaE1lZGlhUmVtb3ZlRXZlbnRMaXN0ZW5lciIsInJlbW92ZUxpc3RlbmVyIiwiZGlhbG9nUG9seWZpbGwiLCJkaXNhYmxlQm9keVNjcm9sbCIsImVuYWJsZUJvZHlTY3JvbGwiLCJ0b0NhbWVsQ2FzZSIsIkRpYWxvZyIsIl9pc09wZW4iLCJfdHJhbnNpdGlvblRpbWUiLCJpc09wZW4iLCJjYW1lbERhdGFBdHRyaWJ1dGUiLCJkYXRhQXR0cmlidXRlIiwicmVwbGFjZSIsInRyYW5zaXRpb25UaW1lIiwiZ2V0VHJhbnNpdGlvblRpbWUiLCJwb2x5ZmlsbERpYWxvZyIsIm9wZW4iLCJjbG9zZUJ1dHRvbnMiLCJjbG9zZSIsIm91dHNpZGVDbGljayIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGlja2VkSW5EaWFsb2ciLCJ0b3AiLCJjbGllbnRZIiwiaGVpZ2h0IiwibGVmdCIsImNsaWVudFgiLCJzaG93TW9kYWwiLCJjbGFzc2VzIiwiY2xvc2VkIiwic3R5bGVzIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZHVyYXRpb24iLCJpbmRleE9mIiwicGFyc2VGbG9hdCIsInJlZ2lzdGVyRGlhbG9nIiwicmlnaHQiLCJvcGVuU2lkZVBhbmVsIiwicGFuZWxJRCIsInBhbmVsIiwidGVtcGxhdGUiLCJIVE1MQW5jaG9yRWxlbWVudCIsImVtaXQiLCJzaWRlUGFuZWxJbnN0YW5jZSIsInRvZ2dsZUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJwYW5lbExpbmtzIiwiaGFuZGxlQ3JlYXRpb25FdmVudCIsImJvZHlFbGVtZW50Iiwic2Nyb2xsUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsIm92ZXJmbG93IiwicG9zaXRpb24iLCJkb2N1bWVudEVsZW1lbnQiLCJzY3JvbGxCZWhhdmlvciIsIm5hbWUiLCJjb29raWUiLCJzcGxpdCIsImZpbmQiLCJyb3ciLCJzdGFydHNXaXRoIiwiY29va2llT3B0aW9ucyIsIk9iamVjdCIsImFzc2lnbiIsInBhdGgiLCJ1cGRhdGVkQ29va2llIiwib3B0aW9uS2V5Iiwib3B0aW9uVmFsdWUiLCJpc0RhdGVWYWxpZCIsImRhdGUiLCJpc05hTiIsImdldFRpbWUiLCJmb3JtYXREYXRlIiwiZGF5IiwiZm9ybWF0TnVtYmVyV2l0aExlYWRpbmdaZXJvIiwiZ2V0RGF0ZSIsIm1vbnRoIiwiZ2V0TW9udGgiLCJnZXRGdWxsWWVhciIsIm51bWJlciIsIlN0cmluZyIsInBhZFN0YXJ0IiwiZ2V0RnVsbE1vbnRoTmFtZSIsImxvY2FsZSIsInRvTG9jYWxlU3RyaW5nIiwicGFyc2VTdHJpbmdBc0h0bWwiLCJkb21QYXJzZXIiLCJET01QYXJzZXIiLCJwYXJzZWQiLCJwYXJzZUZyb21TdHJpbmciLCJnZXRBYnNvbHV0ZUhlaWdodCIsIm1hcmdpbiIsIm1hcmdpblRvcCIsIm1hcmdpbkJvdHRvbSIsIk1hdGgiLCJjZWlsIiwib2Zmc2V0SGVpZ2h0IiwicGF0aE5hbWUiLCJwYXRobmFtZSIsImZvcm1hdHRlZFBhdGhOYW1lIiwic3RyaXBUcmFpbGluZ1NsYXNoIiwiZnVsbFVybCIsImZvcm1hdHRlZFVybCIsImFuY2hvcnMiLCJzdHIiLCJlbmRzV2l0aCIsImxvYWRlZCIsImxvb3BUaHJvdWdoRWxlbWVudHMiLCJpbnNlcnRSZWNhcHRjaGFTY3JpcHQiLCJoZWFkIiwiZ2V0RWxlbWVudHNCeVRhZ05hbWUiLCJzY3JpcHQiLCJhZGRFdmVudCIsImV2dCIsImRlZmF1bHRPZmZzZXQiLCJib2R5VG9wUG9zaXRpb24iLCJlbGVtZW50UG9zaXRpb24iLCJvZmZzZXQiLCJoZWFkZXIiLCJjbGllbnRIZWlnaHQiLCJvZmZzZXRQb3NpdGlvbiIsImJlaGF2aW9yIiwibWF0Y2giLCJjaHIiLCJ0b1VwcGVyQ2FzZSIsInRvVGl0bGVDYXNlIiwidHh0IiwiY2hhckF0Iiwic3Vic3RyIiwidG9Mb3dlckNhc2UiLCJmb3JtUm93IiwiZm9ybVJvd1BhcmVudCIsInZhbGlkYXRpb25FbGVtZW50IiwidGV4dENvbnRlbnQiLCJpbnNlcnRCZWZvcmUiLCJncmFuZHBhcmVudCIsImV4aXN0aW5nVmFsaWRhdGlvbnMiLCJ2IiwiX0N1cnRhaW5FbGVtZW50X2luc3RhbmNlcyIsIl9DdXJ0YWluRWxlbWVudF9zdW1tYXJ5IiwiX0N1cnRhaW5FbGVtZW50X2NvbnRlbnQiLCJfQ3VydGFpbkVsZW1lbnRfaXNDbG9zaW5nIiwiX0N1cnRhaW5FbGVtZW50X2FuaW1hdGlvbiIsIl9DdXJ0YWluRWxlbWVudF9oYW5kbGVDbGljayIsIl9DdXJ0YWluRWxlbWVudF9vcGVuIiwiX0N1cnRhaW5FbGVtZW50X2V4cGFuZCIsIl9DdXJ0YWluRWxlbWVudF9vbkFuaW1hdGlvbkZpbmlzaCIsIl9BY2NvcmRpb25FbGVtZW50X2luc3RhbmNlcyIsIl9BY2NvcmRpb25FbGVtZW50X2N1cnRhaW5zIiwiX0FjY29yZGlvbkVsZW1lbnRfY2xvc2VPdGhlckN1cnRhaW5zIiwiQ3VydGFpbkVsZW1lbnQiLCJIVE1MRGV0YWlsc0VsZW1lbnQiLCJzdG9wUHJvcGFnYXRpb24iLCJoYXNBdHRyaWJ1dGUiLCJjb25uZWN0ZWRDYWxsYmFjayIsImNhcHR1cmUiLCJwYXNzaXZlIiwiZGlzY29ubmVjdGVkQ2FsbGJhY2siLCJzdGFydEhlaWdodCIsImVuZEhlaWdodCIsImNhbmNlbCIsImFuaW1hdGUiLCJlYXNpbmciLCJvbmZpbmlzaCIsIm9uY2FuY2VsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwiQWNjb3JkaW9uRWxlbWVudCIsIkhUTUxFbGVtZW50Iiwib3RoZXJDdXJ0YWlucyIsImZpbHRlciIsImMiLCJvdGhlckN1cnRhaW4iLCJjdXJ0YWluRWxlbWVudCIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiZXh0ZW5kcyIsIl9CaXJ0aGRheUZvcm1faW5zdGFuY2VzIiwiX0JpcnRoZGF5Rm9ybV9zdWJtaXRCdXR0b24iLCJfQmlydGhkYXlGb3JtX2RheUZpZWxkIiwiX0JpcnRoZGF5Rm9ybV9tb250aEZpZWxkIiwiX0JpcnRoZGF5Rm9ybV9nZXREYXlWYWx1ZXMiLCJfQmlydGhkYXlGb3JtX2dldE1vbnRoVmFsdWVzIiwiX0JpcnRoZGF5Rm9ybV9vblN1Ym1pdCIsIl9CaXJ0aGRheUZvcm1fb25TdWNjZXNzIiwiX0JpcnRoZGF5Rm9ybV9vbkZhaWx1cmUiLCJCaXJ0aGRheUZvcm0iLCJIVE1MRm9ybUVsZW1lbnQiLCJvcHRpb25WYWx1ZXMiLCJyZXR1cm5WYWx1ZSIsIm51bSIsIkRhdGUiLCJtb250aE5hbWUiLCJ5ZWFyIiwiYmxvY2siLCJjb21wbGV0ZWQiLCJfQ2Fyb3VzZWxFbGVtZW50X2luc3RhbmNlcyIsIl9DYXJvdXNlbEVsZW1lbnRfaXRlbXMiLCJfQ2Fyb3VzZWxFbGVtZW50X2xpc3QiLCJfQ2Fyb3VzZWxFbGVtZW50X3ByZXZCdXR0b24iLCJfQ2Fyb3VzZWxFbGVtZW50X25leHRCdXR0b24iLCJfQ2Fyb3VzZWxFbGVtZW50X2N1cnJlbnQiLCJfQ2Fyb3VzZWxFbGVtZW50X2NvdW50ZXIiLCJfQ2Fyb3VzZWxFbGVtZW50X2ludGVydmFsIiwiX0Nhcm91c2VsRWxlbWVudF9zZXRDdXJyZW50IiwiX0Nhcm91c2VsRWxlbWVudF9uYXZpZ2F0ZSIsIl9DYXJvdXNlbEVsZW1lbnRfZ2V0VHJhbnNsYXRlWCIsIl9DYXJvdXNlbEVsZW1lbnRfZ2V0SXRlbVdpZHRoIiwiQ2Fyb3VzZWxFbGVtZW50IiwiYWN0aXZlIiwiY29tcG9uZW50Q2hlY2siLCJzZXR1cCIsImRlaW5pdGlhbGl6ZSIsImNsZWFySW50ZXJ2YWwiLCJzZXRJbnRlcnZhbCIsIml0ZW1zU2hvd24iLCJpbmNyZW1lbnQiLCJ0cmFuc2Zvcm0iLCJjb3VudCIsIm1vbnRoV2lkdGgiLCJpdGVtV2lkdGgiLCJncmlkR2FwIiwicGFyc2VJbnQiLCJjb2x1bW5HYXAiLCJfTGF2YW5kcmVTZWxlY3RfaW5zdGFuY2VzIiwiX0xhdmFuZHJlU2VsZWN0X3NlYXJjaEZpZWxkIiwiX0xhdmFuZHJlU2VsZWN0X2Ryb3Bkb3duRmllbGQiLCJfTGF2YW5kcmVTZWxlY3Rfb3B0aW9uVmFsdWVzIiwiX0xhdmFuZHJlU2VsZWN0X3NlbGVjdGVkVmFsdWUiLCJfTGF2YW5kcmVTZWxlY3RfbmFtZSIsIl9MYXZhbmRyZVNlbGVjdF9vdXRzaWRlQ2xpY2tMaXN0ZW5lciIsIl9MYXZhbmRyZVNlbGVjdF91cGRhdGUiLCJfTGF2YW5kcmVTZWxlY3Rfc2VsZWN0T3B0aW9uIiwiX0xhdmFuZHJlU2VsZWN0X2ZpbHRlciIsIl9MYXZhbmRyZVNlbGVjdF9zaG93RHJvcGRvd24iLCJfTGF2YW5kcmVTZWxlY3RfaGlkZURyb3Bkb3duIiwiTGF2YW5kcmVTZWxlY3QiLCJnZXRBdHRyaWJ1dGUiLCJhdXRvY2FwaXRhbGl6ZSIsImF1dG9jb21wbGV0ZSIsImhpZGRlbiIsInNlbGVjdGVkVmFsdWUiLCJrZXlzIiwia2V5Iiwib3B0aW9uIiwiZmlyc3RPcHRpb24iLCJfU2lnbnVwQmxvY2tfaW5zdGFuY2VzIiwiX1NpZ251cEJsb2NrX3RlbXBsYXRlIiwiX1NpZ251cEJsb2NrX292ZXJsYXkiLCJfU2lnbnVwQmxvY2tfaHJlZiIsIl9TaWdudXBCbG9ja19wb2ludHMiLCJfU2lnbnVwQmxvY2tfdHlwZSIsIl9TaWdudXBCbG9ja19jb21wbGV0ZWQiLCJfU2lnbnVwQmxvY2tfbWVkaWFRdWVyeSIsIl9TaWdudXBCbG9ja19tcSIsIl9TaWdudXBCbG9ja19pc01vYmlsZSIsIl9TaWdudXBCbG9ja19jaGVja0lzTW9iaWxlIiwiX1NpZ251cEJsb2NrX3NldFRlbXBsYXRlIiwiX1NpZ251cEJsb2NrX21vdXNlZW50ZXJIYW5kbGVyIiwiX1NpZ251cEJsb2NrX21vdXNlTGVhdmVIYW5kbGVyIiwiX1NpZ251cEJsb2NrX2NsaWNrSGFuZGxlciIsIl9TaWdudXBCbG9ja19zZXRPdmVybGF5RXZlbnRMaXN0ZW5lcnMiLCJfU2lnbnVwQmxvY2tfZ2V0VGVtcGxhdGUiLCJTaWdudXBCbG9jayIsIkhUTUxMSUVsZW1lbnQiLCJwb2ludHMiLCJnZXRQcm9wZXJ0eVZhbHVlIiwicG9vbCIsInRpdGxlcyIsInRpdGxlIiwiY2xvc2VPdmVybGF5QnV0dG9uIiwidHlwZVRlbXBsYXRlIl0sInNvdXJjZVJvb3QiOiIifQ==