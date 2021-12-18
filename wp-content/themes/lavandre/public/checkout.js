(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["checkout"],{

/***/ "./assets/css/components/_toast.pcss":
/*!*******************************************!*\
  !*** ./assets/css/components/_toast.pcss ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),

/***/ "./assets/js/Module.ts":
/*!*****************************!*\
  !*** ./assets/js/Module.ts ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Module; });
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./cart */ "./assets/js/cart.ts");
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/EventEmitter */ "./assets/js/common/EventEmitter.ts");


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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return CheckoutModule; });
/* harmony import */ var _css_pages_checkout_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/pages/checkout.pcss */ "./assets/css/pages/checkout.pcss");
/* harmony import */ var _css_pages_checkout_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_pages_checkout_pcss__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./common/EventEmitter */ "./assets/js/common/EventEmitter.ts");
/* harmony import */ var _components_Toast__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/Toast */ "./assets/js/components/Toast.ts");
/* harmony import */ var _enums_ToastType__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./enums/ToastType */ "./assets/js/enums/ToastType.ts");
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @ungap/custom-elements */ "./node_modules/@ungap/custom-elements/index.js");
/* harmony import */ var _ungap_custom_elements__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_ungap_custom_elements__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _lavandre_button_dist_src_lavandre_button__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @lavandre/button/dist/src/lavandre-button */ "./node_modules/@lavandre/button/dist/src/lavandre-button.js");







class CheckoutModule extends _Module__WEBPACK_IMPORTED_MODULE_4__["default"] {
  constructor() {
    super(...arguments);
    this.eventEmitter = _common_EventEmitter__WEBPACK_IMPORTED_MODULE_1__["default"];
    this.components = [];
  }

  initialize() {
    super.initialize();
    this.checkPayNLStatus();
  }

  checkPayNLStatus() {
    const url = new URL(window.location.href);

    if (url.searchParams.get('paynl_status') && url.searchParams.get('paynl_status') === 'CANCELED') {
      const toast = new _components_Toast__WEBPACK_IMPORTED_MODULE_2__["default"]('Payment failed, please try again.', _enums_ToastType__WEBPACK_IMPORTED_MODULE_3__["ToastType"].warning, undefined, 20000);
      toast.initialize();
    }
  }

}

(function checkoutInit() {
  const checkoutModule = new CheckoutModule();
  checkoutModule.initialize();
})();

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

/***/ })

},[["./assets/js/checkout.ts","runtime","vendors~app~checkout","app~cart~checkout~home~productDetail~sustainability","checkout~checkout-styles"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3RvYXN0LnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hlY2tvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9hc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VudW1zL1RvYXN0VHlwZS50cyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImV2ZW50RW1pdHRlciIsIkV2ZW50RW1pdHRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXplQ29tcG9uZW50cyIsIm9uIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJjb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsIm9uSW5pdCIsIkNoZWNrb3V0TW9kdWxlIiwiYXJndW1lbnRzIiwiY2hlY2tQYXlOTFN0YXR1cyIsInVybCIsIlVSTCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsInNlYXJjaFBhcmFtcyIsImdldCIsInRvYXN0IiwiVG9hc3QiLCJUb2FzdFR5cGUiLCJ3YXJuaW5nIiwidW5kZWZpbmVkIiwiY2hlY2tvdXRJbml0IiwiY2hlY2tvdXRNb2R1bGUiLCJtZXNzYWdlIiwidHlwZSIsImN0YSIsInRpbWVvdXQiLCJjdGFCdXR0b24iLCJpc1ZhbGlkIiwiY3JlYXRlIiwiYm9keSIsImFwcGVuZENoaWxkIiwiY2xhc3NMaXN0IiwiYWRkIiwic2V0VGltZW91dCIsInJlbW92ZSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVDaGlsZCIsImNyZWF0ZUVsZW1lbnQiLCJjb250YWluZXIiLCJpY29uIiwic3JjIiwiYWx0Iiwid2lkdGgiLCJoZWlnaHQiLCJwYXJhZ3JhcGgiLCJpbm5lclRleHQiLCJjbG9zZUJ1dHRvbiIsImJ1dHRvbiIsIkxhdmFuZHJlQnV0dG9uIiwicHJpbWFyeSIs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SUFBSU4sU0FBSjs7QUFDUCxDQUFDLFVBQVVBLFNBQVYsRUFBcUI7QUFDbEJBLFdBQVMsQ0FBQyxTQUFELENBQVQsR0FBdUIsU0FBdkI7QUFDQUEsV0FBUyxDQUFDLFNBQUQsQ0FBVCxHQUF1QixTQUF2QjtBQUNBQSxXQUFTLENBQUMsUUFBRCxDQUFULEdBQXNCLFFBQXRCO0FBQ0gsQ0FKRCxFQUlHQSxTQUFTLEtBQUtBLFNBQVMsR0FBRyxFQUFqQixDQUpaLEUiLCJmaWxlIjoiY2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vY2FydCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCIuL2NvbW1vbi9FdmVudEVtaXR0ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb21wb25lbnRzKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29tcG9uZW50Lm9uSW5pdChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vY3NzL3BhZ2VzL2NoZWNrb3V0LnBjc3MnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vY29tcG9uZW50cy9Ub2FzdCc7XG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICcuL2VudW1zL1RvYXN0VHlwZSc7XG5pbXBvcnQgTW9kdWxlIGZyb20gJy4vTW9kdWxlJztcbmltcG9ydCAnQHVuZ2FwL2N1c3RvbS1lbGVtZW50cyc7XG5pbXBvcnQgJ0BsYXZhbmRyZS9idXR0b24vZGlzdC9zcmMvbGF2YW5kcmUtYnV0dG9uJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrb3V0TW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuY2hlY2tQYXlOTFN0YXR1cygpO1xuICAgIH1cbiAgICBjaGVja1BheU5MU3RhdHVzKCkge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdwYXlubF9zdGF0dXMnKSAmJiB1cmwuc2VhcmNoUGFyYW1zLmdldCgncGF5bmxfc3RhdHVzJykgPT09ICdDQU5DRUxFRCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0KCdQYXltZW50IGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2Fpbi4nLCBUb2FzdFR5cGUud2FybmluZywgdW5kZWZpbmVkLCAyMDAwMCk7XG4gICAgICAgICAgICB0b2FzdC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4oZnVuY3Rpb24gY2hlY2tvdXRJbml0KCkge1xuICAgIGNvbnN0IGNoZWNrb3V0TW9kdWxlID0gbmV3IENoZWNrb3V0TW9kdWxlKCk7XG4gICAgY2hlY2tvdXRNb2R1bGUuaW5pdGlhbGl6ZSgpO1xufSkoKTtcbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX3RvYXN0LnBjc3MnO1xuaW1wb3J0ICdAbGF2YW5kcmUvYnV0dG9uL2Rpc3Qvc3JjL2xhdmFuZHJlLWJ1dHRvbic7XG5pbXBvcnQgeyBMYXZhbmRyZUJ1dHRvbiB9IGZyb20gJ0BsYXZhbmRyZS9idXR0b24vZGlzdC9zcmMvTGF2YW5kcmVCdXR0b24uanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3Qge1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHR5cGUsIGN0YSwgdGltZW91dCA9IDUwMDApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgaWYgKGN0YSkge1xuICAgICAgICAgICAgdGhpcy5jdGFCdXR0b24gPSBjdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNyZWF0ZSgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvYXN0LS12aXNpYmxlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICB9XG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndG9hc3QtLXZpc2libGUnKTtcbiAgICB9XG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvYXN0Jyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9hc3RfX2NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XG4gICAgICAgIGljb24uc3JjID0gYC93cC1jb250ZW50L3RoZW1lcy9sYXZhbmRyZS9wdWJsaWMvaW1hZ2VzL2ljb25zLyR7dGhpcy50eXBlfS5zdmdgO1xuICAgICAgICBpY29uLmFsdCA9IGAke3RoaXMudHlwZX0gaWNvbmA7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgndG9hc3RfX2ljb24nKTtcbiAgICAgICAgaWNvbi53aWR0aCA9IDI0O1xuICAgICAgICBpY29uLmhlaWdodCA9IDI0O1xuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTVFJPTkcnKTtcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCd0b2FzdF9fbWVzc2FnZScpO1xuICAgICAgICBtZXNzYWdlLmlubmVyVGV4dCA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlaWNvbi1jbG9zZScsICd0b2FzdF9fY2xvc2UnKTtcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMucmVtb3ZlKCk7IH0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICBpZiAodGhpcy5jdGFCdXR0b24pIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBMYXZhbmRyZUJ1dHRvbigpO1xuICAgICAgICAgICAgYnV0dG9uLmhyZWYgPSB0aGlzLmN0YUJ1dHRvbi5ocmVmO1xuICAgICAgICAgICAgYnV0dG9uLnByaW1hcnkgPSB0cnVlO1xuICAgICAgICAgICAgYnV0dG9uLnNpemUgPSAnbGFyZ2UnO1xuICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuY3RhQnV0dG9uLnRleHQ7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VcbiAgICAgICAgICAgIHx8ICF0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIFRvYXN0VHlwZTtcbihmdW5jdGlvbiAoVG9hc3RUeXBlKSB7XG4gICAgVG9hc3RUeXBlW1wic3VjY2Vzc1wiXSA9IFwic3VjY2Vzc1wiO1xuICAgIFRvYXN0VHlwZVtcIndhcm5pbmdcIl0gPSBcIndhcm5pbmdcIjtcbiAgICBUb2FzdFR5cGVbXCJkYW5nZXJcIl0gPSBcImRhbmdlclwiO1xufSkoVG9hc3RUeXBlIHx8IChUb2FzdFR5cGUgPSB7fSkpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==