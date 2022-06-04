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
  const toggle = this.closest('lavandre-toggle');

  if (!toggle) {
    return;
  }

  toggle.dispatchEvent(new CustomEvent('toggle'));
}, _ReferAFriendForm_onFailure = function _ReferAFriendForm_onFailure(error) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUF0QixDQUE0RnRCLElBQTVGLENBQWlHLElBQWpHLENBQTdCLEVBQXFJeEIsc0JBQXNCLENBQUMsSUFBRCxFQUFPMkMsMkJBQVAsRUFBb0MsR0FBcEMsRUFBeUNJLDJCQUF6QyxDQUF0QixDQUE0RnZCLElBQTVGLENBQWlHLElBQWpHLENBQXJJLEVBQTZPaUMsS0FBN08sRUFBb1BRLFlBQXBQLENBQWY7QUFDSCxDQWZELEVBZUduQiwyQkFBMkIsR0FBRyxTQUFTQSwyQkFBVCxDQUFxQ3FCLFFBQXJDLEVBQStDO0FBQzVFLFFBQU1DLE1BQU0sR0FBRyxLQUFLbEMsT0FBTCxDQUFhLGlCQUFiLENBQWY7O0FBQ0EsTUFBSSxDQUFDa0MsTUFBTCxFQUFhO0FBQ1Q7QUFDSDs7QUFDREEsRUFBQUEsTUFBTSxDQUFDakMsYUFBUCxDQUFxQixJQUFJa0MsV0FBSixDQUFnQixRQUFoQixDQUFyQjtBQUNILENBckJELEVBcUJHdEIsMkJBQTJCLEdBQUcsU0FBU0EsMkJBQVQsQ0FBcUN1QixLQUFyQyxFQUE0QztBQUN6RXRCLEVBQUFBLG1GQUFBLENBQWdDaEQsc0JBQXNCLENBQUMsSUFBRCxFQUFPNEMsNEJBQVAsRUFBcUMsR0FBckMsQ0FBdEQsRUFBaUcwQixLQUFLLENBQUNFLE9BQXZHO0FBQ0EsUUFBTUYsS0FBTjtBQUNILENBeEJEO0FBeUJBeEMsTUFBTSxDQUFDMkMsY0FBUCxDQUFzQkMsTUFBdEIsQ0FBNkIscUJBQTdCLEVBQW9EeEIsZ0JBQXBELEVBQXNFO0FBQUV5QixFQUFBQSxPQUFPLEVBQUU7QUFBWCxDQUF0RSIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0aWNreUhlYWRlci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9yZXdhcmRzLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3V0aWwvZW5kcG9pbnRzLnRzIiwid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL3dlYi1jb21wb25lbnRzL1JlZmVyQUZyaWVuZEZvcm0udHMiXSwic291cmNlc0NvbnRlbnQiOlsiLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L25vLXVucmVzb2x2ZWQgKi9cbi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9leHRlbnNpb25zICovXG5pbXBvcnQgJy4vY2FydCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cygpO1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlci5vbigndGVtcGxhdGUtaW5zdGFudGlhdGVkJywgKGVsZW1lbnQpID0+IHtcbiAgICAgICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBpbml0aWFsaXplQ29tcG9uZW50cyhzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cy5mb3JFYWNoKChjb21wb25lbnQpID0+IHtcbiAgICAgICAgICAgIC8vIEB0cy1pZ25vcmVcbiAgICAgICAgICAgIGNvbXBvbmVudC5vbkluaXQoc2VsZWN0b3IpO1xuICAgICAgICB9KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gJy4uL2NvbW1vbi9Db21wb25lbnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RpY2t5SGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihoZWFkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSAndHJhbnNwYXJlbnQnO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgbWFpbkJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWJhbm5lcicpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46IGAtJHt0aGlzLmdldEhlYWRlckhlaWdodCgpfXB4YCxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIW1haW5CYW5uZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZW50cmllcywgb2JzZXJ2ZXIpO1xuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShtYWluQmFubmVyKTtcbiAgICB9XG4gICAgb25DaGFuZ2UoZW50cmllcywgb2JzZXJ2ZXIpIHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SGVhZGVySGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXIuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgICBhZGRDbGFzcygpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKCkge1xuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdCgpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnd3LXNpdGUtaGVhZGVyJyk7XG4gICAgICAgIGlmICghaGVhZGVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgc3RpY2t5SGVhZGVyID0gbmV3IFN0aWNreUhlYWRlcihoZWFkZXIpO1xuICAgICAgICBzdGlja3lIZWFkZXIuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgZ2V0dGVyXCIpO1xuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiBraW5kID09PSBcIm1cIiA/IGYgOiBraW5kID09PSBcImFcIiA/IGYuY2FsbChyZWNlaXZlcikgOiBmID8gZi52YWx1ZSA6IHN0YXRlLmdldChyZWNlaXZlcik7XG59O1xudmFyIF9fY2xhc3NQcml2YXRlRmllbGRTZXQgPSAodGhpcyAmJiB0aGlzLl9fY2xhc3NQcml2YXRlRmllbGRTZXQpIHx8IGZ1bmN0aW9uIChyZWNlaXZlciwgc3RhdGUsIHZhbHVlLCBraW5kLCBmKSB7XG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIHNldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCB3cml0ZSBwcml2YXRlIG1lbWJlciB0byBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xufTtcbnZhciBfUmV3YXJkc01vZHVsZV9pbnN0YW5jZXMsIF9SZXdhcmRzTW9kdWxlX21lc3NhZ2UsIF9SZXdhcmRzTW9kdWxlX3RpbWVvdXQsIF9SZXdhcmRzTW9kdWxlX3RpbWVvdXREdXJhdGlvbiwgX1Jld2FyZHNNb2R1bGVfcmVmZXJBRnJpZW5kLCBfUmV3YXJkc01vZHVsZV9yZWZlckFGcmllbmRDYWxsYmFjaztcbmltcG9ydCBTdGlja3lIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL1N0aWNreUhlYWRlcic7XG5pbXBvcnQgTW9kdWxlIGZyb20gJy4vTW9kdWxlJztcbmltcG9ydCAnLi93ZWItY29tcG9uZW50cy9SZWZlckFGcmllbmRGb3JtJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFJld2FyZHNNb2R1bGUgZXh0ZW5kcyBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICBfUmV3YXJkc01vZHVsZV9pbnN0YW5jZXMuYWRkKHRoaXMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbU3RpY2t5SGVhZGVyXTtcbiAgICAgICAgX1Jld2FyZHNNb2R1bGVfbWVzc2FnZS5zZXQodGhpcywgbnVsbCk7XG4gICAgICAgIF9SZXdhcmRzTW9kdWxlX3RpbWVvdXQuc2V0KHRoaXMsIG51bGwpO1xuICAgICAgICBfUmV3YXJkc01vZHVsZV90aW1lb3V0RHVyYXRpb24uc2V0KHRoaXMsIDE1MCk7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmV3YXJkc01vZHVsZV9pbnN0YW5jZXMsIFwibVwiLCBfUmV3YXJkc01vZHVsZV9yZWZlckFGcmllbmQpLmNhbGwodGhpcyk7XG4gICAgfVxufVxuX1Jld2FyZHNNb2R1bGVfbWVzc2FnZSA9IG5ldyBXZWFrTWFwKCksIF9SZXdhcmRzTW9kdWxlX3RpbWVvdXQgPSBuZXcgV2Vha01hcCgpLCBfUmV3YXJkc01vZHVsZV90aW1lb3V0RHVyYXRpb24gPSBuZXcgV2Vha01hcCgpLCBfUmV3YXJkc01vZHVsZV9pbnN0YW5jZXMgPSBuZXcgV2Vha1NldCgpLCBfUmV3YXJkc01vZHVsZV9yZWZlckFGcmllbmQgPSBmdW5jdGlvbiBfUmV3YXJkc01vZHVsZV9yZWZlckFGcmllbmQoKSB7XG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUmV3YXJkc01vZHVsZV9tZXNzYWdlLCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubHdzX3dvb3Jld2FyZHNfc3BvbnNvcnNoaXBfZmVlZGJhY2snKSwgXCJmXCIpO1xuICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZXdhcmRzTW9kdWxlX21lc3NhZ2UsIFwiZlwiKSA9PT0gbnVsbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IG11dGF0aW9uT2JzZXJ2ZXIgPSBuZXcgTXV0YXRpb25PYnNlcnZlcihfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZXdhcmRzTW9kdWxlX2luc3RhbmNlcywgXCJtXCIsIF9SZXdhcmRzTW9kdWxlX3JlZmVyQUZyaWVuZENhbGxiYWNrKS5iaW5kKHRoaXMpKTtcbiAgICBtdXRhdGlvbk9ic2VydmVyLm9ic2VydmUoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmV3YXJkc01vZHVsZV9tZXNzYWdlLCBcImZcIiksIHsgYXR0cmlidXRlczogdHJ1ZSB9KTtcbn0sIF9SZXdhcmRzTW9kdWxlX3JlZmVyQUZyaWVuZENhbGxiYWNrID0gZnVuY3Rpb24gX1Jld2FyZHNNb2R1bGVfcmVmZXJBRnJpZW5kQ2FsbGJhY2sobXV0YXRpb25zTGlzdCkge1xuICAgIG11dGF0aW9uc0xpc3QuZm9yRWFjaCgobXV0YXRpb24pID0+IHtcbiAgICAgICAgaWYgKG11dGF0aW9uLmF0dHJpYnV0ZU5hbWUgPT09ICdjbGFzcycgJiYgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmV3YXJkc01vZHVsZV9tZXNzYWdlLCBcImZcIikpIHtcbiAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZXdhcmRzTW9kdWxlX21lc3NhZ2UsIFwiZlwiKS5jbGFzc0xpc3QuY29udGFpbnMoJ2x3c193b29yZXdhcmRzX3Nwb25zb3JzaGlwX3N1Y2NlZWQnKSkge1xuICAgICAgICAgICAgICAgIGlmIChfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZXdhcmRzTW9kdWxlX3RpbWVvdXQsIFwiZlwiKSAhPT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Jld2FyZHNNb2R1bGVfdGltZW91dCwgXCJmXCIpKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUmV3YXJkc01vZHVsZV90aW1lb3V0LCB3aW5kb3cuc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBfYTtcbiAgICAgICAgICAgICAgICAgICAgKF9hID0gX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmV3YXJkc01vZHVsZV9tZXNzYWdlLCBcImZcIikuY2xvc2VzdCgnbGF2YW5kcmUtdG9nZ2xlJykpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgndG9nZ2xlJykpO1xuICAgICAgICAgICAgICAgIH0sIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1Jld2FyZHNNb2R1bGVfdGltZW91dER1cmF0aW9uLCBcImZcIikpLCBcImZcIik7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9KTtcbn07XG4oZnVuY3Rpb24gcmV3YXJkc0luaXQoKSB7XG4gICAgY29uc3QgcmV3YXJkc01vZHVsZSA9IG5ldyBSZXdhcmRzTW9kdWxlKCk7XG4gICAgcmV3YXJkc01vZHVsZS5pbml0aWFsaXplKCk7XG59KSgpO1xuIiwiY29uc3QgZW5kcG9pbnRzID0ge1xuICAgIGFqYXg6IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYFxufTtcbmV4cG9ydCBkZWZhdWx0IGVuZHBvaW50cztcbiIsInZhciBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0ID0gKHRoaXMgJiYgdGhpcy5fX2NsYXNzUHJpdmF0ZUZpZWxkU2V0KSB8fCBmdW5jdGlvbiAocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcIm1cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgbWV0aG9kIGlzIG5vdCB3cml0YWJsZVwiKTtcbiAgICBpZiAoa2luZCA9PT0gXCJhXCIgJiYgIWYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJQcml2YXRlIGFjY2Vzc29yIHdhcyBkZWZpbmVkIHdpdGhvdXQgYSBzZXR0ZXJcIik7XG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4gKGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyLCB2YWx1ZSkgOiBmID8gZi52YWx1ZSA9IHZhbHVlIDogc3RhdGUuc2V0KHJlY2VpdmVyLCB2YWx1ZSkpLCB2YWx1ZTtcbn07XG52YXIgX19jbGFzc1ByaXZhdGVGaWVsZEdldCA9ICh0aGlzICYmIHRoaXMuX19jbGFzc1ByaXZhdGVGaWVsZEdldCkgfHwgZnVuY3Rpb24gKHJlY2VpdmVyLCBzdGF0ZSwga2luZCwgZikge1xuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcbiAgICBpZiAodHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciAhPT0gc3RhdGUgfHwgIWYgOiAhc3RhdGUuaGFzKHJlY2VpdmVyKSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCByZWFkIHByaXZhdGUgbWVtYmVyIGZyb20gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcbiAgICByZXR1cm4ga2luZCA9PT0gXCJtXCIgPyBmIDoga2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIpIDogZiA/IGYudmFsdWUgOiBzdGF0ZS5nZXQocmVjZWl2ZXIpO1xufTtcbnZhciBfUmVmZXJBRnJpZW5kRm9ybV9pbnN0YW5jZXMsIF9SZWZlckFGcmllbmRGb3JtX2VtYWlsRmllbGQsIF9SZWZlckFGcmllbmRGb3JtX3N1Ym1pdEhhbmRsZXIsIF9SZWZlckFGcmllbmRGb3JtX29uU3VjY2VzcywgX1JlZmVyQUZyaWVuZEZvcm1fb25GYWlsdXJlO1xuLyogZXNsaW50LWRpc2FibGUgbm8tY29uc29sZSAqL1xuaW1wb3J0IEZpZWxkVmFsaWRhdGlvbiBmcm9tICcuLi9jb21wb25lbnRzL0ZpZWxkVmFsaWRhdGlvbic7XG5pbXBvcnQgZW5kcG9pbnRzIGZyb20gJy4uL3V0aWwvZW5kcG9pbnRzJztcbmltcG9ydCB7IHNlbmRBamF4UmVxdWVzdCB9IGZyb20gJy4uL3V0aWwvcmVxdWVzdHMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgUmVmZXJBRnJpZW5kRm9ybSBleHRlbmRzIEhUTUxGb3JtRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIF9SZWZlckFGcmllbmRGb3JtX2luc3RhbmNlcy5hZGQodGhpcyk7XG4gICAgICAgIF9SZWZlckFGcmllbmRGb3JtX2VtYWlsRmllbGQuc2V0KHRoaXMsIG51bGwpO1xuICAgIH1cbiAgICBjb25uZWN0ZWRDYWxsYmFjaygpIHtcbiAgICAgICAgX19jbGFzc1ByaXZhdGVGaWVsZFNldCh0aGlzLCBfUmVmZXJBRnJpZW5kRm9ybV9lbWFpbEZpZWxkLCB0aGlzLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwiZW1haWxcIl0nKSwgXCJmXCIpO1xuICAgICAgICBjb25zdCB2YWxpZGF0b3IgPSBuZXcgRmllbGRWYWxpZGF0aW9uKF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZmVyQUZyaWVuZEZvcm1fZW1haWxGaWVsZCwgXCJmXCIpKTtcbiAgICAgICAgdmFsaWRhdG9yLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBfX2NsYXNzUHJpdmF0ZUZpZWxkR2V0KHRoaXMsIF9SZWZlckFGcmllbmRGb3JtX2luc3RhbmNlcywgXCJtXCIsIF9SZWZlckFGcmllbmRGb3JtX3N1Ym1pdEhhbmRsZXIpLmJpbmQodGhpcyksIGZhbHNlKTtcbiAgICB9XG4gICAgZGlzY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMucmVtb3ZlRXZlbnRMaXN0ZW5lcignc3VibWl0JywgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVmZXJBRnJpZW5kRm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfUmVmZXJBRnJpZW5kRm9ybV9zdWJtaXRIYW5kbGVyKS5iaW5kKHRoaXMpLCBmYWxzZSk7XG4gICAgfVxufVxuX1JlZmVyQUZyaWVuZEZvcm1fZW1haWxGaWVsZCA9IG5ldyBXZWFrTWFwKCksIF9SZWZlckFGcmllbmRGb3JtX2luc3RhbmNlcyA9IG5ldyBXZWFrU2V0KCksIF9SZWZlckFGcmllbmRGb3JtX3N1Ym1pdEhhbmRsZXIgPSBmdW5jdGlvbiBfUmVmZXJBRnJpZW5kRm9ybV9zdWJtaXRIYW5kbGVyKGV2ZW50KSB7XG4gICAgdmFyIF9hO1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEodGhpcyk7XG4gICAgY29uc3QgZW1haWwgPSAoKF9hID0gZm9ybURhdGEuZ2V0KCdlbWFpbCcpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudG9TdHJpbmcoKSkgfHwgJyc7XG4gICAgaWYgKCFlbWFpbCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgIGFjdGlvbjogJ2FqYXhyZWZlcmFmcmllbmRlbWFpbCcsXG4gICAgICAgIGVtYWlsOiBlbWFpbFxuICAgIH07XG4gICAgY29uc3Qgc3VibWl0QnV0dG9uID0gdGhpcy5xdWVyeVNlbGVjdG9yKCdbdHlwZT1cInN1Ym1pdFwiXScpO1xuICAgIEZpZWxkVmFsaWRhdGlvbi5yZW1vdmVFcnJvclRleHQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVmZXJBRnJpZW5kRm9ybV9lbWFpbEZpZWxkLCBcImZcIikpO1xuICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCBlbmRwb2ludHMuYWpheCwgbnVsbCwgX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVmZXJBRnJpZW5kRm9ybV9pbnN0YW5jZXMsIFwibVwiLCBfUmVmZXJBRnJpZW5kRm9ybV9vblN1Y2Nlc3MpLmJpbmQodGhpcyksIF9fY2xhc3NQcml2YXRlRmllbGRHZXQodGhpcywgX1JlZmVyQUZyaWVuZEZvcm1faW5zdGFuY2VzLCBcIm1cIiwgX1JlZmVyQUZyaWVuZEZvcm1fb25GYWlsdXJlKS5iaW5kKHRoaXMpLCBldmVudCwgc3VibWl0QnV0dG9uKTtcbn0sIF9SZWZlckFGcmllbmRGb3JtX29uU3VjY2VzcyA9IGZ1bmN0aW9uIF9SZWZlckFGcmllbmRGb3JtX29uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgIGNvbnN0IHRvZ2dsZSA9IHRoaXMuY2xvc2VzdCgnbGF2YW5kcmUtdG9nZ2xlJyk7XG4gICAgaWYgKCF0b2dnbGUpIHtcbiAgICAgICAgcmV0dXJuO1xuICAgIH1cbiAgICB0b2dnbGUuZGlzcGF0Y2hFdmVudChuZXcgQ3VzdG9tRXZlbnQoJ3RvZ2dsZScpKTtcbn0sIF9SZWZlckFGcmllbmRGb3JtX29uRmFpbHVyZSA9IGZ1bmN0aW9uIF9SZWZlckFGcmllbmRGb3JtX29uRmFpbHVyZShlcnJvcikge1xuICAgIEZpZWxkVmFsaWRhdGlvbi5hcHBlbmRFcnJvclRleHQoX19jbGFzc1ByaXZhdGVGaWVsZEdldCh0aGlzLCBfUmVmZXJBRnJpZW5kRm9ybV9lbWFpbEZpZWxkLCBcImZcIiksIGVycm9yLm1lc3NhZ2UpO1xuICAgIHRocm93IGVycm9yO1xufTtcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ3JlZmVyLWEtZnJpZW5kLWZvcm0nLCBSZWZlckFGcmllbmRGb3JtLCB7IGV4dGVuZHM6ICdmb3JtJyB9KTtcbiJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImV2ZW50RW1pdHRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXplQ29tcG9uZW50cyIsIm9uIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJjb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsIm9uSW5pdCIsIkNvbXBvbmVudCIsIlN0aWNreUhlYWRlciIsImhlYWRlciIsImNsYXNzTmFtZSIsIm1haW5CYW5uZXIiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsImdldEhlYWRlckhlaWdodCIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib25DaGFuZ2UiLCJvYnNlcnZlIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGllbnRIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5SGVhZGVyIiwiX19jbGFzc1ByaXZhdGVGaWVsZEdldCIsInJlY2VpdmVyIiwic3RhdGUiLCJraW5kIiwiZiIsIlR5cGVFcnJvciIsImhhcyIsImNhbGwiLCJ2YWx1ZSIsImdldCIsIl9fY2xhc3NQcml2YXRlRmllbGRTZXQiLCJzZXQiLCJfUmV3YXJkc01vZHVsZV9pbnN0YW5jZXMiLCJfUmV3YXJkc01vZHVsZV9tZXNzYWdlIiwiX1Jld2FyZHNNb2R1bGVfdGltZW91dCIsIl9SZXdhcmRzTW9kdWxlX3RpbWVvdXREdXJhdGlvbiIsIl9SZXdhcmRzTW9kdWxlX3JlZmVyQUZyaWVuZCIsIl9SZXdhcmRzTW9kdWxlX3JlZmVyQUZyaWVuZENhbGxiYWNrIiwiUmV3YXJkc01vZHVsZSIsImFyZ3VtZW50cyIsIldlYWtNYXAiLCJXZWFrU2V0IiwibXV0YXRpb25PYnNlcnZlciIsIk11dGF0aW9uT2JzZXJ2ZXIiLCJiaW5kIiwiYXR0cmlidXRlcyIsIm11dGF0aW9uc0xpc3QiLCJtdXRhdGlvbiIsImF0dHJpYnV0ZU5hbWUiLCJjb250YWlucyIsIndpbmRvdyIsImNsZWFyVGltZW91dCIsInNldFRpbWVvdXQiLCJfYSIsImNsb3Nlc3QiLCJkaXNwYXRjaEV2ZW50IiwiRXZlbnQiLCJyZXdhcmRzSW5pdCIsInJld2FyZHNNb2R1bGUiLCJlbmRwb2ludHMiLCJhamF4IiwibG9jYXRpb24iLCJvcmlnaW4iLCJfUmVmZXJBRnJpZW5kRm9ybV9pbnN0YW5jZXMiLCJfUmVmZXJBRnJpZW5kRm9ybV9lbWFpbEZpZWxkIiwiX1JlZmVyQUZyaWVuZEZvcm1fc3VibWl0SGFuZGxlciIsIl9SZWZlckFGcmllbmRGb3JtX29uU3VjY2VzcyIsIl9SZWZlckFGcmllbmRGb3JtX29uRmFpbHVyZSIsIkZpZWxkVmFsaWRhdGlvbiIsInNlbmRBamF4UmVxdWVzdCIsIlJlZmVyQUZyaWVuZEZvcm0iLCJIVE1MRm9ybUVsZW1lbnQiLCJjb25uZWN0ZWRDYWxsYmFjayIsInZhbGlkYXRvciIsImFkZEV2ZW50TGlzdGVuZXIiLCJkaXNjb25uZWN0ZWRDYWxsYmFjayIsInJlbW92ZUV2ZW50TGlzdGVuZXIiLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImVtYWlsIiwidG9TdHJpbmciLCJkYXRhIiwiYWN0aW9uIiwic3VibWl0QnV0dG9uIiwicmVtb3ZlRXJyb3JUZXh0IiwicmVzcG9uc2UiLCJ0b2dnbGUiLCJDdXN0b21FdmVudCIsImVycm9yIiwiYXBwZW5kRXJyb3JUZXh0IiwibWVzc2FnZSIsImN1c3RvbUVsZW1lbnRzIiwiZGVmaW5lIiwiZXh0ZW5kcyJdLCJzb3VyY2VSb290IjoiIn0=