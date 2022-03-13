"use strict";
(self["webpackChunklavandre"] = self["webpackChunklavandre"] || []).push([["rewards"],{

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

/***/ "./assets/js/components/StickyHeader.ts":
/*!**********************************************!*\
  !*** ./assets/js/components/StickyHeader.ts ***!
  \**********************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ StickyHeader; }
/* harmony export */ });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");

class StickyHeader extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(header) {
    super();
    this.className = 'transparent';
    this.header = header;
  }

  initialize() {
    const mainBanner = document.getElementById('main-banner');
    const options = {
      root: null,
      rootMargin: `-${this.getHeaderHeight()}px`,
      threshold: 0
    };

    if (!mainBanner) {
      return;
    }

    const observer = new IntersectionObserver((entries, observer) => {
      this.onChange(entries, observer);
    }, options);
    observer.observe(mainBanner);
  }

  onChange(entries, observer) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        this.addClass();
      } else {
        this.removeClass();
      }
    });
  }

  getHeaderHeight() {
    return this.header.clientHeight;
  }

  addClass() {
    this.header.classList.add(this.className);
  }

  removeClass() {
    this.header.classList.remove(this.className);
  }

  static onInit() {
    const header = document.querySelector('.ww-site-header');

    if (!header) {
      return;
    }

    const stickyHeader = new StickyHeader(header);
    stickyHeader.initialize();
  }

}

/***/ }),

/***/ "./assets/js/rewards.ts":
/*!******************************!*\
  !*** ./assets/js/rewards.ts ***!
  \******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ RewardsModule; }
/* harmony export */ });
/* harmony import */ var _components_StickyHeader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/StickyHeader */ "./assets/js/components/StickyHeader.ts");
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");
/* harmony import */ var _web_components_ReferAFriendForm__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./web-components/ReferAFriendForm */ "./assets/js/web-components/ReferAFriendForm.ts");
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

var _RewardsModule_instances, _RewardsModule_message, _RewardsModule_timeout, _RewardsModule_timeoutDuration, _RewardsModule_referAFriend, _RewardsModule_referAFriendCallback;




class RewardsModule extends _Module__WEBPACK_IMPORTED_MODULE_1__["default"] {
  constructor() {
    super(...arguments);

    _RewardsModule_instances.add(this);

    this.components = [_components_StickyHeader__WEBPACK_IMPORTED_MODULE_0__["default"]];

    _RewardsModule_message.set(this, null);

    _RewardsModule_timeout.set(this, null);

    _RewardsModule_timeoutDuration.set(this, 150);
  }

  initialize() {
    super.initialize();

    __classPrivateFieldGet(this, _RewardsModule_instances, "m", _RewardsModule_referAFriend).call(this);
  }

}
_RewardsModule_message = new WeakMap(), _RewardsModule_timeout = new WeakMap(), _RewardsModule_timeoutDuration = new WeakMap(), _RewardsModule_instances = new WeakSet(), _RewardsModule_referAFriend = function _RewardsModule_referAFriend() {
  __classPrivateFieldSet(this, _RewardsModule_message, document.querySelector('.lws_woorewards_sponsorship_feedback'), "f");

  if (__classPrivateFieldGet(this, _RewardsModule_message, "f") === null) {
    return;
  }

  const mutationObserver = new MutationObserver(__classPrivateFieldGet(this, _RewardsModule_instances, "m", _RewardsModule_referAFriendCallback).bind(this));
  mutationObserver.observe(__classPrivateFieldGet(this, _RewardsModule_message, "f"), {
    attributes: true
  });
}, _RewardsModule_referAFriendCallback = function _RewardsModule_referAFriendCallback(mutationsList) {
  mutationsList.forEach(mutation => {
    if (mutation.attributeName === 'class' && __classPrivateFieldGet(this, _RewardsModule_message, "f")) {
      if (__classPrivateFieldGet(this, _RewardsModule_message, "f").classList.contains('lws_woorewards_sponsorship_succeed')) {
        if (__classPrivateFieldGet(this, _RewardsModule_timeout, "f") !== null) {
          window.clearTimeout(__classPrivateFieldGet(this, _RewardsModule_timeout, "f"));
        }

        __classPrivateFieldSet(this, _RewardsModule_timeout, window.setTimeout(() => {
          var _a;

          (_a = __classPrivateFieldGet(this, _RewardsModule_message, "f").closest('lavandre-toggle')) === null || _a === void 0 ? void 0 : _a.dispatchEvent(new Event('toggle'));
        }, __classPrivateFieldGet(this, _RewardsModule_timeoutDuration, "f")), "f");
      }
    }
  });
};

(function rewardsInit() {
  const rewardsModule = new RewardsModule();
  rewardsModule.initialize();
})();

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

/***/ "./assets/js/web-components/ReferAFriendForm.ts":
/*!******************************************************!*\
  !*** ./assets/js/web-components/ReferAFriendForm.ts ***!
  \******************************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ ReferAFriendForm; }
/* harmony export */ });
/* harmony import */ var _components_FieldValidation__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../components/FieldValidation */ "./assets/js/components/FieldValidation.ts");
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

var _ReferAFriendForm_instances, _ReferAFriendForm_emailField, _ReferAFriendForm_submitHandler, _ReferAFriendForm_onSuccess, _ReferAFriendForm_onFailure;
/* eslint-disable no-console */





class ReferAFriendForm extends HTMLFormElement {
  constructor() {
    super(...arguments);

    _ReferAFriendForm_instances.add(this);

    _ReferAFriendForm_emailField.set(this, null);
  }

  connectedCallback() {
    __classPrivateFieldSet(this, _ReferAFriendForm_emailField, this.querySelector('[name="email"]'), "f");

    const validator = new _components_FieldValidation__WEBPACK_IMPORTED_MODULE_0__["default"](__classPrivateFieldGet(this, _ReferAFriendForm_emailField, "f"));
    validator.initialize();
    this.addEventListener('submit', __classPrivateFieldGet(this, _ReferAFriendForm_instances, "m", _ReferAFriendForm_submitHandler).bind(this), false);
  }

  disconnectedCallback() {
    this.removeEventListener('submit', __classPrivateFieldGet(this, _ReferAFriendForm_instances, "m", _ReferAFriendForm_submitHandler).bind(this), false);
  }

}
_ReferAFriendForm_emailField = new WeakMap(), _ReferAFriendForm_instances = new WeakSet(), _ReferAFriendForm_submitHandler = function _ReferAFriendForm_submitHandler(event) {
  var _a;

  event.preventDefault();
  const formData = new FormData(this);
  const email = ((_a = formData.get('email')) === null || _a === void 0 ? void 0 : _a.toString()) || '';

  if (!email) {
    return;
  }

  const data = {
    action: 'ajaxreferafriendemail',
    email: email
  };
  const submitButton = this.querySelector('[type="submit"]');
  _components_FieldValidation__WEBPACK_IMPORTED_MODULE_0__["default"].removeErrorText(__classPrivateFieldGet(this, _ReferAFriendForm_emailField, "f"));
  (0,_util_requests__WEBPACK_IMPORTED_MODULE_2__.sendAjaxRequest)(data, _util_endpoints__WEBPACK_IMPORTED_MODULE_1__["default"].ajax, null, __classPrivateFieldGet(this, _ReferAFriendForm_instances, "m", _ReferAFriendForm_onSuccess).bind(this), __classPrivateFieldGet(this, _ReferAFriendForm_instances, "m", _ReferAFriendForm_onFailure).bind(this), event, submitButton);
}, _ReferAFriendForm_onSuccess = function _ReferAFriendForm_onSuccess(response) {
  console.log('success', response); // const toggle = this.closest('lavandre-toggle') as LavandreToggle;
  // if (!toggle) {
  //     return;
  // }
  // // toggle.dispatchEvent(new CustomEvent('toggle'));
}, _ReferAFriendForm_onFailure = function _ReferAFriendForm_onFailure(error) {
  console.log(error);
  _components_FieldValidation__WEBPACK_IMPORTED_MODULE_0__["default"].appendErrorText(__classPrivateFieldGet(this, _ReferAFriendForm_emailField, "f"), error.message);
  throw error;
};
window.customElements.define('refer-a-friend-form', ReferAFriendForm, {
  extends: 'form'
});

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["assets_js_cart_ts-assets_js_components_AddCouponCode_ts"], function() { return __webpack_exec__("./assets/js/rewards.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF0QixDQUE0RnRCLElBQTVGLENBQWlHLElBQWpHLENBQTdCLEVBQXFJeEIsc0JBQXNCLENBQUMsSUFBRCxFQUFPMkMsMkJBQVAsRUFBb0MsR0FBcEMsRUFBeUNJLDJCQUF6QyxDQUF0QixDQUE0RnZCLElBQTVGLENBQWlHLElBQWpHLENBQXJJLEVBQTZPaUMsS0FBN08sRUFBb1BRLFlBQXBQLENBQWY7QUFDSCxDQWZELEVBZUduQiwyQkFBMkIsR0FBRyxTQUFTQSwyQkFBVCxDQUFxQ3FCLFFBQXJDLEVBQStDO0FBQzVFQyxFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWSxTQUFaLEVBQXVCRixRQUF2QixFQUQ0RSxDQUU1RTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0gsQ0F0QkQsRUFzQkdwQiwyQkFBMkIsR0FBRyxTQUFTQSwyQkFBVCxDQUFxQ3VCLEtBQXJDLEVBQTRDO0FBQ3pFRixFQUFBQSxPQUFPLENBQUNDLEdBQVIsQ0FBWUMsS0FBWjtBQUNBdEIsRUFBQUEsbUZBQUEsQ0FBZ0NoRCxzQkFBc0IsQ0FBQyxJQUFELEVBQU80Qyw0QkFBUCxFQUFxQyxHQUFyQyxDQUF0RCxFQUFpRzBCLEtBQUssQ0FBQ0UsT0FBdkc7QUFDQSxRQUFNRixLQUFOO0FBQ0gsQ0ExQkQ7QUEyQkF4QyxNQUFNLENBQUMyQyxjQUFQLENBQXNCQyxNQUF0QixDQUE2QixxQkFBN0IsRUFBb0R4QixnQkFBcEQsRUFBc0U7QUFBRXlCLEVBQUFBLE9BQU8sRUFBRTtBQUFYLENBQXRFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvTW9kdWxlLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvU3RpY2t5SGVhZGVyLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3Jld2FyZHMudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvdXRpbC9lbmRwb2ludHMudHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvanMvd2ViLWNvbXBvbmVudHMvUmVmZXJBRnJpZW5kRm9ybS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCAnLi9jYXJ0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb21wb25lbnRzKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29tcG9uZW50Lm9uSW5pdChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGlja3lIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGhlYWRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBtYWluQmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tYmFubmVyJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogYC0ke3RoaXMuZ2V0SGVhZGVySGVpZ2h0KCl9cHhgLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmICghbWFpbkJhbm5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlbnRyaWVzLCBvYnNlcnZlcik7XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKG1haW5CYW5uZXIpO1xuICAgIH1cbiAgICBvbkNoYW5nZShlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRIZWFkZXJIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlci5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIGFkZENsYXNzKCkge1xuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWUpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3ctc2l0ZS1oZWFkZXInKTtcbiAgICAgICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGlja3lIZWFkZXIgPSBuZXcgU3RpY2t5SGVhZGVyKGhlYWRlcik7XG4gICAgICAgIHN0aWNreUhlYWRlci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRHZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRHZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBnZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3QgcmVhZCBwcml2YXRlIG1lbWJlciBmcm9tIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZFNldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZFNldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwgdmFsdWUsIGtpbmQsIGYpIHtcbiAgICBpZiAoa2luZCA9PT0gXCJtXCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIG1ldGhvZCBpcyBub3Qgd3JpdGFibGVcIik7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHdyaXRlIHByaXZhdGUgbWVtYmVyIHRvIGFuIG9iamVjdCB3aG9zZSBjbGFzcyBkaWQgbm90IGRlY2xhcmUgaXRcIik7XG4gICAgcmV0dXJuIChraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlciwgdmFsdWUpIDogZiA/IGYudmFsdWUgPSB2YWx1ZSA6IHN0YXRlLnNldChyZWNlaXZlciwgdmFsdWUpKSwgdmFsdWU7XG59O1xudmFyIF9SZXdhcmRzTW9kdWxlX2luc3RhbmNlcywgX1Jld2FyZHNNb2R1bGVfbWVzc2FnZSwgX1Jld2FyZHNNb2R1bGVfdGltZW91dCwgX1Jld2FyZHNNb2R1bGVfdGltZW91dER1cmF0aW9uLCBfUmV3YXJkc01vZHVsZV9yZWZlckFGcmllbmQsIF9SZXdhcmRzTW9kdWxlX3JlZmVyQUZyaWVuZENhbGxiYWNrO1xuaW1wb3J0IFN0aWNreUhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvU3RpY2t5SGVhZGVyJztcbmltcG9ydCBNb2R1bGUgZnJvbSAnLi9Nb2R1bGUnO1xuaW1wb3J0ICcuL3dlYi1jb21wb25lbnRzL1JlZmVyQUZyaWVuZEZvcm0nO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmV3YXJkc01vZHVsZSBleHRlbmRzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9SZXdhcmRzTW9kdWxlX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtTdGlja3lIZWFkZXJdO1xuICAgICAgICBfUmV3YXJkc01vZHVsZV9tZXNzYWdlLnNldCh0aGlzLCBudWxsKTtcbiAgICAgICAgX1Jld2FyZHNNb2R1bGVfdGltZW91dC5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9SZXdhcmRzTW9kdWxlX3RpbWVvdXREdXJhdGlvbi5zZXQodGhpcywgMTUwKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZXdhcmRzTW9kdWxlX2luc3RhbmNlcywgXCJtXCIsIF9SZXdhcmRzTW9kdWxlX3JlZmVyQUZyaWVuZCkuY2FsbCh0aGlzKTtcbiAgICB9XG59XG5fUmV3YXJkc01vZHVsZV9tZXNzYWdlID0gbmV3IFdlYWtNYXAoKSwgX1Jld2FyZHNNb2R1bGVfdGltZW91dCA9IG5ldyBXZWFrTWFwKCksIF9SZXdhcmRzTW9kdWxlX3RpbWVvdXREdXJhdGlvbiA9IG5ldyBXZWFrTWFwKCksIF9SZXdhcmRzTW9kdWxlX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9SZXdhcmRzTW9kdWxlX3JlZmVyQUZyaWVuZCA9IGZ1bmN0aW9uIF9SZXdhcmRzTW9kdWxlX3JlZmVyQUZyaWVuZCgpIHtcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9SZXdhcmRzTW9kdWxlX21lc3NhZ2UsIGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5sd3Nfd29vcmV3YXJkc19zcG9uc29yc2hpcF9mZWVkYmFjaycpLCBcImZcIik7XG4gICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Jld2FyZHNNb2R1bGVfbWVzc2FnZSwgXCJmXCIpID09PSBudWxsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgbXV0YXRpb25PYnNlcnZlciA9IG5ldyBNdXRhdGlvbk9ic2VydmVyKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Jld2FyZHNNb2R1bGVfaW5zdGFuY2VzLCBcIm1cIiwgX1Jld2FyZHNNb2R1bGVfcmVmZXJBRnJpZW5kQ2FsbGJhY2spLmJpbmQodGhpcykpO1xuICAgIG11dGF0aW9uT2JzZXJ2ZXIub2JzZXJ2ZShfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZXdhcmRzTW9kdWxlX21lc3NhZ2UsIFwiZlwiKSwgeyBhdHRyaWJ1dGVzOiB0cnVlIH0pO1xufSwgX1Jld2FyZHNNb2R1bGVfcmVmZXJBRnJpZW5kQ2FsbGJhY2sgPSBmdW5jdGlvbiBfUmV3YXJkc01vZHVsZV9yZWZlckFGcmllbmRDYWxsYmFjayhtdXRhdGlvbnNMaXN0KSB7XG4gICAgbXV0YXRpb25zTGlzdC5mb3JFYWNoKChtdXRhdGlvbikgPT4ge1xuICAgICAgICBpZiAobXV0YXRpb24uYXR0cmlidXRlTmFtZSA9PT0gJ2NsYXNzJyAmJiBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZXdhcmRzTW9kdWxlX21lc3NhZ2UsIFwiZlwiKSkge1xuICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Jld2FyZHNNb2R1bGVfbWVzc2FnZSwgXCJmXCIpLmNsYXNzTGlzdC5jb250YWlucygnbHdzX3dvb3Jld2FyZHNfc3BvbnNvcnNoaXBfc3VjY2VlZCcpKSB7XG4gICAgICAgICAgICAgICAgaWYgKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Jld2FyZHNNb2R1bGVfdGltZW91dCwgXCJmXCIpICE9PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgICAgIHdpbmRvdy5jbGVhclRpbWVvdXQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmV3YXJkc01vZHVsZV90aW1lb3V0LCBcImZcIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9SZXdhcmRzTW9kdWxlX3RpbWVvdXQsIHdpbmRvdy5zZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIF9hO1xuICAgICAgICAgICAgICAgICAgICAoX2EgPSBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZXdhcmRzTW9kdWxlX21lc3NhZ2UsIFwiZlwiKS5jbG9zZXN0KCdsYXZhbmRyZS10b2dnbGUnKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd0b2dnbGUnKSk7XG4gICAgICAgICAgICAgICAgfSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmV3YXJkc01vZHVsZV90aW1lb3V0RHVyYXRpb24sIFwiZlwiKSksIFwiZlwiKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH0pO1xufTtcbihmdW5jdGlvbiByZXdhcmRzSW5pdCgpIHtcbiAgICBjb25zdCByZXdhcmRzTW9kdWxlID0gbmV3IFJld2FyZHNNb2R1bGUoKTtcbiAgICByZXdhcmRzTW9kdWxlLmluaXRpYWxpemUoKTtcbn0pKCk7XG4iLCJjb25zdCBlbmRwb2ludHMgPSB7XG4gICAgYWpheDogYCR7d2luZG93LmxvY2F0aW9uLm9yaWdpbn0vd3AtYWRtaW4vYWRtaW4tYWpheC5waHBgXG59O1xuZXhwb3J0IGRlZmF1bHQgZW5kcG9pbnRzO1xuIiwidmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9SZWZlckFGcmllbmRGb3JtX2luc3RhbmNlcywgX1JlZmVyQUZyaWVuZEZvcm1fZW1haWxGaWVsZCwgX1JlZmVyQUZyaWVuZEZvcm1fc3VibWl0SGFuZGxlciwgX1JlZmVyQUZyaWVuZEZvcm1fb25TdWNjZXNzLCBfUmVmZXJBRnJpZW5kRm9ybV9vbkZhaWx1cmU7XG4vKiBlc2xpbnQtZGlzYWJsZSBuby1jb25zb2xlICovXG5pbXBvcnQgRmllbGRWYWxpZGF0aW9uIGZyb20gJy4uL2NvbXBvbmVudHMvRmllbGRWYWxpZGF0aW9uJztcbmltcG9ydCBlbmRwb2ludHMgZnJvbSAnLi4vdXRpbC9lbmRwb2ludHMnO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSAnLi4vdXRpbC9yZXF1ZXN0cyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBSZWZlckFGcmllbmRGb3JtIGV4dGVuZHMgSFRNTEZvcm1FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgX1JlZmVyQUZyaWVuZEZvcm1faW5zdGFuY2VzLmFkZCh0aGlzKTtcbiAgICAgICAgX1JlZmVyQUZyaWVuZEZvcm1fZW1haWxGaWVsZC5zZXQodGhpcywgbnVsbCk7XG4gICAgfVxuICAgIGNvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KHRoaXMsIF9SZWZlckFGcmllbmRGb3JtX2VtYWlsRmllbGQsIHRoaXMucXVlcnlTZWxlY3RvcignW25hbWU9XCJlbWFpbFwiXScpLCBcImZcIik7XG4gICAgICAgIGNvbnN0IHZhbGlkYXRvciA9IG5ldyBGaWVsZFZhbGlkYXRpb24oX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVmZXJBRnJpZW5kRm9ybV9lbWFpbEZpZWxkLCBcImZcIikpO1xuICAgICAgICB2YWxpZGF0b3IuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZmVyQUZyaWVuZEZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX1JlZmVyQUZyaWVuZEZvcm1fc3VibWl0SGFuZGxlcikuYmluZCh0aGlzKSwgZmFsc2UpO1xuICAgIH1cbiAgICBkaXNjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgdGhpcy5yZW1vdmVFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWZlckFGcmllbmRGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9SZWZlckFGcmllbmRGb3JtX3N1Ym1pdEhhbmRsZXIpLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB9XG59XG5fUmVmZXJBRnJpZW5kRm9ybV9lbWFpbEZpZWxkID0gbmV3IFdlYWtNYXAoKSwgX1JlZmVyQUZyaWVuZEZvcm1faW5zdGFuY2VzID0gbmV3IFdlYWtTZXQoKSwgX1JlZmVyQUZyaWVuZEZvcm1fc3VibWl0SGFuZGxlciA9IGZ1bmN0aW9uIF9SZWZlckFGcmllbmRGb3JtX3N1Ym1pdEhhbmRsZXIoZXZlbnQpIHtcbiAgICB2YXIgX2E7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICBjb25zdCBmb3JtRGF0YSA9IG5ldyBGb3JtRGF0YSh0aGlzKTtcbiAgICBjb25zdCBlbWFpbCA9ICgoX2EgPSBmb3JtRGF0YS5nZXQoJ2VtYWlsJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS50b1N0cmluZygpKSB8fCAnJztcbiAgICBpZiAoIWVtYWlsKSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgYWN0aW9uOiAnYWpheHJlZmVyYWZyaWVuZGVtYWlsJyxcbiAgICAgICAgZW1haWw6IGVtYWlsXG4gICAgfTtcbiAgICBjb25zdCBzdWJtaXRCdXR0b24gPSB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1t0eXBlPVwic3VibWl0XCJdJyk7XG4gICAgRmllbGRWYWxpZGF0aW9uLnJlbW92ZUVycm9yVGV4dChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWZlckFGcmllbmRGb3JtX2VtYWlsRmllbGQsIFwiZlwiKSk7XG4gICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIGVuZHBvaW50cy5hamF4LCBudWxsLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWZlckFGcmllbmRGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9SZWZlckFGcmllbmRGb3JtX29uU3VjY2VzcykuYmluZCh0aGlzKSwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVmZXJBRnJpZW5kRm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfUmVmZXJBRnJpZW5kRm9ybV9vbkZhaWx1cmUpLmJpbmQodGhpcyksIGV2ZW50LCBzdWJtaXRCdXR0b24pO1xufSwgX1JlZmVyQUZyaWVuZEZvcm1fb25TdWNjZXNzID0gZnVuY3Rpb24gX1JlZmVyQUZyaWVuZEZvcm1fb25TdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgY29uc29sZS5sb2coJ3N1Y2Nlc3MnLCByZXNwb25zZSk7XG4gICAgLy8gY29uc3QgdG9nZ2xlID0gdGhpcy5jbG9zZXN0KCdsYXZhbmRyZS10b2dnbGUnKSBhcyBMYXZhbmRyZVRvZ2dsZTtcbiAgICAvLyBpZiAoIXRvZ2dsZSkge1xuICAgIC8vICAgICByZXR1cm47XG4gICAgLy8gfVxuICAgIC8vIC8vIHRvZ2dsZS5kaXNwYXRjaEV2ZW50KG5ldyBDdXN0b21FdmVudCgndG9nZ2xlJykpO1xufSwgX1JlZmVyQUZyaWVuZEZvcm1fb25GYWlsdXJlID0gZnVuY3Rpb24gX1JlZmVyQUZyaWVuZEZvcm1fb25GYWlsdXJlKGVycm9yKSB7XG4gICAgY29uc29sZS5sb2coZXJyb3IpO1xuICAgIEZpZWxkVmFsaWRhdGlvbi5hcHBlbmRFcnJvclRleHQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVmZXJBRnJpZW5kRm9ybV9lbWFpbEZpZWxkLCBcImZcIiksIGVycm9yLm1lc3NhZ2UpO1xuICAgIHRocm93IGVycm9yO1xufTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JlZmVyLWEtZnJpZW5kLWZvcm0nLCBSZWZlckFGcmllbmRGb3JtLCB7IGV4dGVuZHM6ICdmb3JtJyB9KTtcbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImV2ZW50RW1pdHRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXplQ29tcG9uZW50cyIsIm9uIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJjb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsIm9uSW5pdCIsIkNvbXBvbmVudCIsIlN0aWNreUhlYWRlciIsImhlYWRlciIsImNsYXNzTmFtZSIsIm1haW5CYW5uZXIiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsImdldEhlYWRlckhlaWdodCIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib25DaGFuZ2UiLCJvYnNlcnZlIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGllbnRIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5SGVhZGVyIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiZiIsIlR5cGVFcnJvciIsImhhcyIsImNhbGwiLCJ2YWx1ZSIsImdldCIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJzZXQiLCJfUmV3YXJkc01vZHVsZV9pbnN0YW5jZXMiLCJfUmV3YXJkc01vZHVsZV9tZXNzYWdlIiwiX1Jld2FyZHNNb2R1bGVfdGltZW91dCIsIl9SZXdhcmRzTW9kdWxlX3RpbWVvdXREdXJhdGlvbiIsIl9SZXdhcmRzTW9kdWxlX3JlZmVyQUZyaWVuZCIsIl9SZXdhcmRzTW9kdWxlX3JlZmVyQUZyaWVuZENhbGxiYWNrIiwiUmV3YXJkc01vZHVsZSIsImFyZ3VtZW50cyIsIldlYWtNYXAiLCJXZWFrU2V0IiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJiaW5kIiwiYXR0cmlidXRlcyIsIm11dGF0aW9uc0xpc3QiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJjb250YWlucyIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJfYSIsImNsb3Nlc3QiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJyZXdhcmRzSW5pdCIsInJld2FyZHNNb2R1bGUiLCJlbmRwb2ludHMiLCJhamF4IiwibG9jYXRpb24iLCJvcmlnaW4iLCJfUmVmZXJBRnJpZW5kRm9ybV9pbnN0YW5jZXMiLCJfUmVmZXJBRnJpZW5kRm9ybV9lbWFpbEZpZWxkIiwiX1JlZmVyQUZyaWVuZEZvcm1fc3VibWl0SGFuZGxlciIsIl9SZWZlckFGcmllbmRGb3JtX29uU3VjY2VzcyIsIl9SZWZlckFGcmllbmRGb3JtX29uRmFpbHVyZSIsIkZpZWxkVmFsaWRhdGlvbiIsInNlbmRBamF4UmVxdWVzdCIsIlJlZmVyQUZyaWVuZEZvcm0iLCJIVE1MRm9ybUVsZW1lbnQiLCJjb25uZWN0ZWRDYWxsYmFjayIsInZhbGlkYXRvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImVtYWlsIiwidG9TdHJpbmciLCJkYXRhIiwiYWN0aW9uIiwic3VibWl0QnV0dG9uIiwicmVtb3ZlRXJyb3JUZXh0IiwicmVzcG9uc2UiLCJjb25zb2xlIiwibG9nIiwiZXJyb3IiLCJhcHBlbmRFcnJvclRleHQiLCJtZXNzYWdlIiwiY3VzdG9tRWxlbWVudHMiLCJkZWZpbmUiLCJleHRlbmRzIl0sInNvdXJjZVJvb3QiOiIifQ==