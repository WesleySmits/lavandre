"use strict";
(self["webpackChunklavandre"] = self["webpackChunklavandre"] || []).push([["checkout"],{

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

/***/ "./assets/js/checkout.ts":
/*!*******************************!*\
  !*** ./assets/js/checkout.ts ***!
  \*******************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ CheckoutModule; }
/* harmony export */ });
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @ungap/custom-elements */ "./node_modules/@ungap/custom-elements/index.js");
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_ungap_custom_elements__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _css_pages_checkout_pcss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/pages/checkout.pcss */ "./assets/css/pages/checkout.pcss");
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./common/EventEmitter */ "./assets/js/common/EventEmitter.ts");
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");
/* harmony import */ var _util_validation__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./util/validation */ "./assets/js/util/validation.ts");





class CheckoutModule extends _Module__WEBPACK_IMPORTED_MODULE_3__["default"] {
  constructor() {
    super(...arguments);
    this.eventEmitter = _common_EventEmitter__WEBPACK_IMPORTED_MODULE_2__["default"];
    this.components = [];
  }

  initialize() {
    super.initialize();
    this.checkPayNLStatus();
  }

  checkPayNLStatus() {
    const url = new URL(window.location.href);

    if (url.searchParams.get('paynl_status') && url.searchParams.get('paynl_status') === 'CANCELED') {
      const paymentElement = document.getElementById('checkout-errors');

      if (!paymentElement) {
        return;
      }

      (0,_util_validation__WEBPACK_IMPORTED_MODULE_4__.setValidationMessage)('Payment failed, please try again.', paymentElement);
    }
  }

}

(function checkoutInit() {
  const checkoutModule = new CheckoutModule();
  checkoutModule.initialize();
})();

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

/***/ "./assets/css/pages/checkout.pcss":
/*!****************************************!*\
  !*** ./assets/css/pages/checkout.pcss ***!
  \****************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["vendors-node_modules_ungap_custom-elements_index_js","assets_js_cart_ts-assets_js_components_AddCouponCode_ts","assets_css_pages_checkout_pcss"], function() { return __webpack_exec__("./assets/js/checkout.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUFDQUksRUFBQUEsYUFBYSxDQUFDTyxZQUFkLENBQTJCSixpQkFBM0IsRUFBOENMLE9BQTlDO0FBQ0g7QUFDTSxTQUFTSSxnQ0FBVCxDQUEwQzVCLE9BQTFDLEVBQW1EQyxRQUFuRCxFQUE2RDtBQUNoRSxNQUFJc0IsRUFBSjs7QUFDQSxRQUFNVyxXQUFXLEdBQUdqQyxRQUFRLEtBQUssQ0FBQ3NCLEVBQUUsR0FBR3ZCLE9BQU8sQ0FBQzJCLGFBQWQsTUFBaUMsSUFBakMsSUFBeUNKLEVBQUUsS0FBSyxLQUFLLENBQXJELEdBQXlELEtBQUssQ0FBOUQsR0FBa0VBLEVBQUUsQ0FBQ0ksYUFBMUUsQ0FBNUI7O0FBQ0EsTUFBSSxDQUFDTyxXQUFMLEVBQWtCO0FBQ2Q7QUFDSDs7QUFDRCxRQUFNQyxtQkFBbUIsR0FBR0MsS0FBSyxDQUFDQyxJQUFOLENBQVdILFdBQVcsQ0FBQ0ksZ0JBQVosQ0FBNkIsaUJBQTdCLENBQVgsQ0FBNUI7QUFDQUgsRUFBQUEsbUJBQW1CLENBQUMvQixPQUFwQixDQUE2Qm1DLENBQUQsSUFBTztBQUMvQkEsSUFBQUEsQ0FBQyxDQUFDQyxNQUFGO0FBQ0gsR0FGRDtBQUdIOzs7Ozs7Ozs7OztBQ3ZCRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jaGVja291dC50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy91dGlsL3ZhbGlkYXRpb24udHMiLCJ3ZWJwYWNrOi8vbGF2YW5kcmUvLi9hc3NldHMvY3NzL3BhZ2VzL2NoZWNrb3V0LnBjc3M/YTAxOCJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCAnLi9jYXJ0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb21wb25lbnRzKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29tcG9uZW50Lm9uSW5pdChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnQHVuZ2FwL2N1c3RvbS1lbGVtZW50cyc7XG5pbXBvcnQgJy4uL2Nzcy9wYWdlcy9jaGVja291dC5wY3NzJztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmltcG9ydCBNb2R1bGUgZnJvbSAnLi9Nb2R1bGUnO1xuaW1wb3J0IHsgc2V0VmFsaWRhdGlvbk1lc3NhZ2UgfSBmcm9tICcuL3V0aWwvdmFsaWRhdGlvbic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBDaGVja291dE1vZHVsZSBleHRlbmRzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKC4uLmFyZ3VtZW50cyk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgc3VwZXIuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB0aGlzLmNoZWNrUGF5TkxTdGF0dXMoKTtcbiAgICB9XG4gICAgY2hlY2tQYXlOTFN0YXR1cygpIHtcbiAgICAgICAgY29uc3QgdXJsID0gbmV3IFVSTCh3aW5kb3cubG9jYXRpb24uaHJlZik7XG4gICAgICAgIGlmICh1cmwuc2VhcmNoUGFyYW1zLmdldCgncGF5bmxfc3RhdHVzJykgJiZcbiAgICAgICAgICAgIHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdwYXlubF9zdGF0dXMnKSA9PT0gJ0NBTkNFTEVEJykge1xuICAgICAgICAgICAgY29uc3QgcGF5bWVudEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnY2hlY2tvdXQtZXJyb3JzJyk7XG4gICAgICAgICAgICBpZiAoIXBheW1lbnRFbGVtZW50KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc2V0VmFsaWRhdGlvbk1lc3NhZ2UoJ1BheW1lbnQgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluLicsIHBheW1lbnRFbGVtZW50KTtcbiAgICAgICAgfVxuICAgIH1cbn1cbihmdW5jdGlvbiBjaGVja291dEluaXQoKSB7XG4gICAgY29uc3QgY2hlY2tvdXRNb2R1bGUgPSBuZXcgQ2hlY2tvdXRNb2R1bGUoKTtcbiAgICBjaGVja291dE1vZHVsZS5pbml0aWFsaXplKCk7XG59KSgpO1xuIiwiZXhwb3J0IGZ1bmN0aW9uIHNldFZhbGlkYXRpb25NZXNzYWdlKG1lc3NhZ2UsIGVsZW1lbnQpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZm9ybVJvdyA9IChfYSA9IGVsZW1lbnQuY2xvc2VzdCgnLmZvcm0tcm93JykpICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6IGVsZW1lbnQ7XG4gICAgY29uc3QgZm9ybVJvd1BhcmVudCA9IGZvcm1Sb3cgPT09IG51bGwgfHwgZm9ybVJvdyA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybVJvdy5wYXJlbnRFbGVtZW50O1xuICAgIGlmIChmb3JtUm93ID09PSBudWxsIHx8ICFmb3JtUm93UGFyZW50KSB7XG4gICAgICAgIHJldHVybjtcbiAgICB9XG4gICAgcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXMoZWxlbWVudCwgZm9ybVJvd1BhcmVudCk7XG4gICAgY29uc3QgdmFsaWRhdGlvbkVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICB2YWxpZGF0aW9uRWxlbWVudC5jbGFzc05hbWUgPSAnYWxlcnQgYWxlcnQtLXdhcm5pbmcgaW5saW5lLWZvcm0tZXJyb3InO1xuICAgIHZhbGlkYXRpb25FbGVtZW50LnRleHRDb250ZW50ID0gbWVzc2FnZTtcbiAgICBmb3JtUm93UGFyZW50Lmluc2VydEJlZm9yZSh2YWxpZGF0aW9uRWxlbWVudCwgZm9ybVJvdyk7XG59XG5leHBvcnQgZnVuY3Rpb24gcmVtb3ZlRXhpc3RpbmdWYWxpZGF0aW9uTWVzc2FnZXMoZWxlbWVudCwgc2VsZWN0b3IpIHtcbiAgICB2YXIgX2E7XG4gICAgY29uc3QgZ3JhbmRwYXJlbnQgPSBzZWxlY3RvciB8fCAoKF9hID0gZWxlbWVudC5wYXJlbnRFbGVtZW50KSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EucGFyZW50RWxlbWVudCk7XG4gICAgaWYgKCFncmFuZHBhcmVudCkge1xuICAgICAgICByZXR1cm47XG4gICAgfVxuICAgIGNvbnN0IGV4aXN0aW5nVmFsaWRhdGlvbnMgPSBBcnJheS5mcm9tKGdyYW5kcGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5hbGVydC0td2FybmluZycpKTtcbiAgICBleGlzdGluZ1ZhbGlkYXRpb25zLmZvckVhY2goKHYpID0+IHtcbiAgICAgICAgdi5yZW1vdmUoKTtcbiAgICB9KTtcbn1cbiIsIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpblxuZXhwb3J0IHt9OyJdLCJuYW1lcyI6WyJFdmVudEVtaXR0ZXIiLCJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImV2ZW50RW1pdHRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXplQ29tcG9uZW50cyIsIm9uIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJjb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsIm9uSW5pdCIsInNldFZhbGlkYXRpb25NZXNzYWdlIiwiQ2hlY2tvdXRNb2R1bGUiLCJhcmd1bWVudHMiLCJjaGVja1BheU5MU3RhdHVzIiwidXJsIiwiVVJMIiwid2luZG93IiwibG9jYXRpb24iLCJocmVmIiwic2VhcmNoUGFyYW1zIiwiZ2V0IiwicGF5bWVudEVsZW1lbnQiLCJnZXRFbGVtZW50QnlJZCIsImNoZWNrb3V0SW5pdCIsImNoZWNrb3V0TW9kdWxlIiwibWVzc2FnZSIsIl9hIiwiZm9ybVJvdyIsImNsb3Nlc3QiLCJmb3JtUm93UGFyZW50IiwicGFyZW50RWxlbWVudCIsInJlbW92ZUV4aXN0aW5nVmFsaWRhdGlvbk1lc3NhZ2VzIiwidmFsaWRhdGlvbkVsZW1lbnQiLCJjcmVhdGVFbGVtZW50IiwiY2xhc3NOYW1lIiwidGV4dENvbnRlbnQiLCJpbnNlcnRCZWZvcmUiLCJncmFuZHBhcmVudCIsImV4aXN0aW5nVmFsaWRhdGlvbnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwidiIsInJlbW92ZSJdLCJzb3VyY2VSb290IjoiIn0=