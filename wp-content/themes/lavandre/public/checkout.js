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

/***/ }),

/***/ "./node_modules/@lavandre/button/dist/src/LavandreButton.js":
/*!******************************************************************!*\
  !*** ./node_modules/@lavandre/button/dist/src/LavandreButton.js ***!
  \******************************************************************/
/*! exports provided: LavandreButton */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LavandreButton", function() { return LavandreButton; });
const template = document.createElement('template');
template.innerHTML = `
  <style>
    :root {
        --white: #FFFFFF;
        --jet: #2B2B2B;
        --old-burgundy: #3D2B30;
        --subdued: #babfc3;
        --font-family: 'Nunito', sans-serif;

        --button-background-color: transparent;
        --button-background-hover-color: var(--old-burgundy);

        --button-border-color: var(--old-burgundy);
        --button-border-hover-color: var(--old-burgundy);

        --button-text-color: var(--old-burgundy);
        --button-text-hover-color: var(--white);

        --button-font-size: calc(13rem / 16);
    }

    [is="lavandre-button"][primary] {
        --button-background-color: var(--old-burgundy);
        --button-background-hover-color: var(--transparent);

        --button-border-color: var(--old-burgundy);
        --button-border-hover-color: var(--old-burgundy);

        --button-text-color: var(--white);
        --button-text-hover-color: var(--old-burgundy);
    }

    [is="lavandre-button"][outline] {
        --button-background-color: transparent;
    }

    [is="lavandre-button"][size="small"] {
        min-height: 1.75rem;
        padding: .3rem .75rem;
    }

    [is="lavandre-button"][size="large"] {
        min-height: 3.75rem;
        min-width: 3.75rem;
        padding: .75rem 1.5rem;
        font-size: 1.25rem;
    }

    [is="lavandre-button"][full-width] {
        width: 100%;
    }

    [is="lavandre-button"] {
        position: relative;
        z-index: 0;

        display: inline-flex;
        align-items: center;
        justify-content: center;
        min-height: 2.25rem;
        min-width: 2.25rem;
        margin: 0 auto;
        padding: .5rem 1.5rem;

        background: var(--button-background-color);
        border: 1px solid var(--button-border-color);
        border-radius: 0;
        outline: 0;

        color: var(--button-text-color);
        font-family: --font-family;
        font-weight: 100;
        font-style: italic;
        font-size: var(--button-font-size);
        line-height: 1;
        text-transform: initial;
        text-align: center;

        cursor: pointer;
        transition: all .4s ease;
    }

    [is="lavandre-button"]:hover {
        background-color: var(--button-background-hover-color);
        border-color: var(--button-border-hover-color);
        color: var(--button-text-hover-color);
        text-decoration: none;
    }
  </style>
`;
class LavandreButton extends HTMLButtonElement {
    constructor() {
        super(...arguments);
        this.clickHandler = (event) => {
            if (this.href === null) {
                return;
            }
            event.preventDefault();
            window.location.href = this.href;
        };
    }
    get href() {
        return this.getAttribute('href');
    }
    connectedCallback() {
        this.appendChild(template.content.cloneNode(true));
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
//# sourceMappingURL=LavandreButton.js.map

/***/ }),

/***/ "./node_modules/@lavandre/button/dist/src/lavandre-button.js":
/*!*******************************************************************!*\
  !*** ./node_modules/@lavandre/button/dist/src/lavandre-button.js ***!
  \*******************************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _LavandreButton_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./LavandreButton.js */ "./node_modules/@lavandre/button/dist/src/LavandreButton.js");

window.customElements.define('lavandre-button', _LavandreButton_js__WEBPACK_IMPORTED_MODULE_0__["LavandreButton"], { extends: 'button' });
//# sourceMappingURL=lavandre-button.js.map

/***/ })

},[["./assets/js/checkout.ts","runtime","app~cart~checkout~home~productDetail","checkout~checkout-styles"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3RvYXN0LnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hlY2tvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9hc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VudW1zL1RvYXN0VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxhdmFuZHJlL2J1dHRvbi9kaXN0L3NyYy9MYXZhbmRyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxhdmFuZHJlL2J1dHRvbi9kaXN0L3NyYy9sYXZhbmRyZS1idXR0b24uanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiY29uc3RydWN0b3IiLCJldmVudEVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJpbml0aWFsaXplIiwiaW5pdGlhbGl6ZUNvbXBvbmVudHMiLCJvbiIsImVsZW1lbnQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwiY29tcG9uZW50cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJvbkluaXQiLCJDaGVja291dE1vZHVsZSIsImFyZ3VtZW50cyIsImNoZWNrUGF5TkxTdGF0dXMiLCJ1cmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJ0b2FzdCIsIlRvYXN0IiwiVG9hc3RUeXBlIiwid2FybmluZyIsInVuZGVmaW5lZCIsImNoZWNrb3V0SW5pdCIsImNoZWNrb3V0TW9kdWxlIiwibWVzc2FnZSIsInR5cGUiLCJjdGEiLCJ0aW1lb3V0IiwiY3RhQnV0dG9uIiwiaXNWYWxpZCIsImNyZWF0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiaWNvbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicGFyYWdyYXBoIiwiaW5uZXJUZXh0IiwiY2xvc2VCdXR0b24iLCJidXR0b24iLCJMYXZhbmRyZUJ1dHRvbiIsInByaW1hcnkiLCJzaXplIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNlLE1BQU1BLE1BQU4sQ0FBYTtBQUN4QkMsYUFBVyxHQUFHO0FBQ1YsU0FBS0MsWUFBTCxHQUFvQkMsNERBQXBCO0FBQ0g7O0FBQ0RDLFlBQVUsR0FBRztBQUNULFNBQUtDLG9CQUFMO0FBQ0EsU0FBS0gsWUFBTCxDQUFrQkksRUFBbEIsQ0FBcUIsdUJBQXJCLEVBQStDQyxPQUFELElBQWE7QUFDdkQsV0FBS0Ysb0JBQUwsQ0FBMEJFLE9BQTFCO0FBQ0gsS0FGRDtBQUdIOztBQUNERixzQkFBb0IsQ0FBQ0csUUFBUSxHQUFHQyxRQUFaLEVBQXNCO0FBQ3RDLFNBQUtDLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXlCQyxTQUFELElBQWU7QUFDbkM7QUFDQUEsZUFBUyxDQUFDQyxNQUFWLENBQWlCTCxRQUFqQjtBQUNILEtBSEQ7QUFJSDs7QUFmdUIsQzs7Ozs7Ozs7Ozs7O0FDRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsTUFBTU0sY0FBTixTQUE2QmQsK0NBQTdCLENBQW9DO0FBQy9DQyxhQUFXLEdBQUc7QUFDVixVQUFNLEdBQUdjLFNBQVQ7QUFDQSxTQUFLYixZQUFMLEdBQW9CQyw0REFBcEI7QUFDQSxTQUFLTyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7O0FBQ0ROLFlBQVUsR0FBRztBQUNULFVBQU1BLFVBQU47QUFDQSxTQUFLWSxnQkFBTDtBQUNIOztBQUNEQSxrQkFBZ0IsR0FBRztBQUNmLFVBQU1DLEdBQUcs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Q3JELGdEQUFnRCxpRUFBYyxHQUFHLG9CQUFvQjtBQUNyRiwyQyIsImZpbGUiOiJjaGVja291dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9jYXJ0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcIi4vY29tbW9uL0V2ZW50RW1pdHRlclwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIub24oJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudHMoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb21wb25lbnQub25Jbml0KHNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0ICcuLi9jc3MvcGFnZXMvY2hlY2tvdXQucGNzcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4vY29tbW9uL0V2ZW50RW1pdHRlcic7XG5pbXBvcnQgVG9hc3QgZnJvbSAnLi9jb21wb25lbnRzL1RvYXN0JztcbmltcG9ydCB7IFRvYXN0VHlwZSB9IGZyb20gJy4vZW51bXMvVG9hc3RUeXBlJztcbmltcG9ydCBNb2R1bGUgZnJvbSAnLi9Nb2R1bGUnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hlY2tvdXRNb2R1bGUgZXh0ZW5kcyBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmV2ZW50RW1pdHRlciA9IEV2ZW50RW1pdHRlcjtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW107XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgdGhpcy5jaGVja1BheU5MU3RhdHVzKCk7XG4gICAgfVxuICAgIGNoZWNrUGF5TkxTdGF0dXMoKSB7XG4gICAgICAgIGNvbnN0IHVybCA9IG5ldyBVUkwod2luZG93LmxvY2F0aW9uLmhyZWYpO1xuICAgICAgICBpZiAodXJsLnNlYXJjaFBhcmFtcy5nZXQoJ3BheW5sX3N0YXR1cycpICYmIHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdwYXlubF9zdGF0dXMnKSA9PT0gJ0NBTkNFTEVEJykge1xuICAgICAgICAgICAgY29uc3QgdG9hc3QgPSBuZXcgVG9hc3QoJ1BheW1lbnQgZmFpbGVkLCBwbGVhc2UgdHJ5IGFnYWluLicsIFRvYXN0VHlwZS53YXJuaW5nLCB1bmRlZmluZWQsIDIwMDAwKTtcbiAgICAgICAgICAgIHRvYXN0LmluaXRpYWxpemUoKTtcbiAgICAgICAgfVxuICAgIH1cbn1cbihmdW5jdGlvbiBjaGVja291dEluaXQoKSB7XG4gICAgY29uc3QgY2hlY2tvdXRNb2R1bGUgPSBuZXcgQ2hlY2tvdXRNb2R1bGUoKTtcbiAgICBjaGVja291dE1vZHVsZS5pbml0aWFsaXplKCk7XG59KSgpO1xuIiwiaW1wb3J0ICcuLi8uLi9jc3MvY29tcG9uZW50cy9fdG9hc3QucGNzcyc7XG5pbXBvcnQgJ0BsYXZhbmRyZS9idXR0b24vZGlzdC9zcmMvbGF2YW5kcmUtYnV0dG9uJztcbmltcG9ydCB7IExhdmFuZHJlQnV0dG9uIH0gZnJvbSAnQGxhdmFuZHJlL2J1dHRvbi9kaXN0L3NyYy9MYXZhbmRyZUJ1dHRvbi5qcyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBUb2FzdCB7XG4gICAgY29uc3RydWN0b3IobWVzc2FnZSwgdHlwZSwgY3RhLCB0aW1lb3V0ID0gNTAwMCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBudWxsO1xuICAgICAgICB0aGlzLm1lc3NhZ2UgPSBtZXNzYWdlO1xuICAgICAgICB0aGlzLnR5cGUgPSB0eXBlO1xuICAgICAgICB0aGlzLnRpbWVvdXQgPSB0aW1lb3V0O1xuICAgICAgICBpZiAoY3RhKSB7XG4gICAgICAgICAgICB0aGlzLmN0YUJ1dHRvbiA9IGN0YTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBpZiAoIXRoaXMuaXNWYWxpZCgpKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHRoaXMuY3JlYXRlKCk7XG4gICAgICAgIGRvY3VtZW50LmJvZHkuYXBwZW5kQ2hpbGQoZWxlbWVudCk7XG4gICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QtLXZpc2libGUnKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZSgpO1xuICAgICAgICB9LCB0aGlzLnRpbWVvdXQpO1xuICAgIH1cbiAgICByZW1vdmUoKSB7XG4gICAgICAgIGlmICh0aGlzLmVsZW1lbnQgPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndHJhbnNpdGlvbmVuZCcsICgpID0+IHtcbiAgICAgICAgICAgIGRvY3VtZW50LmJvZHkucmVtb3ZlQ2hpbGQodGhpcy5lbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKCd0b2FzdC0tdmlzaWJsZScpO1xuICAgIH1cbiAgICBjcmVhdGUoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCgndG9hc3QnKTtcbiAgICAgICAgY29uc3QgY29udGFpbmVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnRElWJyk7XG4gICAgICAgIGNvbnRhaW5lci5jbGFzc0xpc3QuYWRkKCd0b2FzdF9fY29udGFpbmVyJyk7XG4gICAgICAgIGNvbnN0IGljb24gPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdJTUcnKTtcbiAgICAgICAgaWNvbi5zcmMgPSBgL3dwLWNvbnRlbnQvdGhlbWVzL2xhdmFuZHJlL3B1YmxpYy9pbWFnZXMvaWNvbnMvJHt0aGlzLnR5cGV9LnN2Z2A7XG4gICAgICAgIGljb24uYWx0ID0gYCR7dGhpcy50eXBlfSBpY29uYDtcbiAgICAgICAgaWNvbi5jbGFzc0xpc3QuYWRkKCd0b2FzdF9faWNvbicpO1xuICAgICAgICBpY29uLndpZHRoID0gMjQ7XG4gICAgICAgIGljb24uaGVpZ2h0ID0gMjQ7XG4gICAgICAgIGNvbnN0IHBhcmFncmFwaCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1AnKTtcbiAgICAgICAgY29uc3QgbWVzc2FnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ1NUUk9ORycpO1xuICAgICAgICBtZXNzYWdlLmNsYXNzTGlzdC5hZGQoJ3RvYXN0X19tZXNzYWdlJyk7XG4gICAgICAgIG1lc3NhZ2UuaW5uZXJUZXh0ID0gdGhpcy5tZXNzYWdlO1xuICAgICAgICBwYXJhZ3JhcGguYXBwZW5kQ2hpbGQobWVzc2FnZSk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnQlVUVE9OJyk7XG4gICAgICAgIGNsb3NlQnV0dG9uLmNsYXNzTGlzdC5hZGQoJ2VpY29uLWNsb3NlJywgJ3RvYXN0X19jbG9zZScpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsICgpID0+IHsgdGhpcy5yZW1vdmUoKTsgfSk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChpY29uKTtcbiAgICAgICAgY29udGFpbmVyLmFwcGVuZENoaWxkKHBhcmFncmFwaCk7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChjbG9zZUJ1dHRvbik7XG4gICAgICAgIGlmICh0aGlzLmN0YUJ1dHRvbikge1xuICAgICAgICAgICAgY29uc3QgYnV0dG9uID0gbmV3IExhdmFuZHJlQnV0dG9uKCk7XG4gICAgICAgICAgICBidXR0b24uaHJlZiA9IHRoaXMuY3RhQnV0dG9uLmhyZWY7XG4gICAgICAgICAgICBidXR0b24ucHJpbWFyeSA9IHRydWU7XG4gICAgICAgICAgICBidXR0b24uc2l6ZSA9ICdsYXJnZSc7XG4gICAgICAgICAgICBidXR0b24uaW5uZXJUZXh0ID0gdGhpcy5jdGFCdXR0b24udGV4dDtcbiAgICAgICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChidXR0b24pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuZWxlbWVudC5hcHBlbmRDaGlsZChjb250YWluZXIpO1xuICAgICAgICByZXR1cm4gdGhpcy5lbGVtZW50O1xuICAgIH1cbiAgICBpc1ZhbGlkKCkge1xuICAgICAgICBpZiAoIXRoaXMubWVzc2FnZVxuICAgICAgICAgICAgfHwgIXRoaXMudHlwZSkge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbn1cbiIsImV4cG9ydCB2YXIgVG9hc3RUeXBlO1xuKGZ1bmN0aW9uIChUb2FzdFR5cGUpIHtcbiAgICBUb2FzdFR5cGVbXCJzdWNjZXNzXCJdID0gXCJzdWNjZXNzXCI7XG4gICAgVG9hc3RUeXBlW1wid2FybmluZ1wiXSA9IFwid2FybmluZ1wiO1xuICAgIFRvYXN0VHlwZVtcImRhbmdlclwiXSA9IFwiZGFuZ2VyXCI7XG59KShUb2FzdFR5cGUgfHwgKFRvYXN0VHlwZSA9IHt9KSk7XG4iLCJjb25zdCB0ZW1wbGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ3RlbXBsYXRlJyk7XG50ZW1wbGF0ZS5pbm5lckhUTUwgPSBgXG4gIDxzdHlsZT5cbiAgICA6cm9vdCB7XG4gICAgICAgIC0td2hpdGU6ICNGRkZGRkY7XG4gICAgICAgIC0tamV0OiAjMkIyQjJCO1xuICAgICAgICAtLW9sZC1idXJndW5keTogIzNEMkIzMDtcbiAgICAgICAgLS1zdWJkdWVkOiAjYmFiZmMzO1xuICAgICAgICAtLWZvbnQtZmFtaWx5OiAnTnVuaXRvJywgc2Fucy1zZXJpZjtcblxuICAgICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcbiAgICAgICAgLS1idXR0b24tYmFja2dyb3VuZC1ob3Zlci1jb2xvcjogdmFyKC0tb2xkLWJ1cmd1bmR5KTtcblxuICAgICAgICAtLWJ1dHRvbi1ib3JkZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG4gICAgICAgIC0tYnV0dG9uLWJvcmRlci1ob3Zlci1jb2xvcjogdmFyKC0tb2xkLWJ1cmd1bmR5KTtcblxuICAgICAgICAtLWJ1dHRvbi10ZXh0LWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgICAgICAtLWJ1dHRvbi10ZXh0LWhvdmVyLWNvbG9yOiB2YXIoLS13aGl0ZSk7XG5cbiAgICAgICAgLS1idXR0b24tZm9udC1zaXplOiBjYWxjKDEzcmVtIC8gMTYpO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtwcmltYXJ5XSB7XG4gICAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG4gICAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQtaG92ZXItY29sb3I6IHZhcigtLXRyYW5zcGFyZW50KTtcblxuICAgICAgICAtLWJ1dHRvbi1ib3JkZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG4gICAgICAgIC0tYnV0dG9uLWJvcmRlci1ob3Zlci1jb2xvcjogdmFyKC0tb2xkLWJ1cmd1bmR5KTtcblxuICAgICAgICAtLWJ1dHRvbi10ZXh0LWNvbG9yOiB2YXIoLS13aGl0ZSk7XG4gICAgICAgIC0tYnV0dG9uLXRleHQtaG92ZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW291dGxpbmVdIHtcbiAgICAgICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW3NpemU9XCJzbWFsbFwiXSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDEuNzVyZW07XG4gICAgICAgIHBhZGRpbmc6IC4zcmVtIC43NXJlbTtcbiAgICB9XG5cbiAgICBbaXM9XCJsYXZhbmRyZS1idXR0b25cIl1bc2l6ZT1cImxhcmdlXCJdIHtcbiAgICAgICAgbWluLWhlaWdodDogMy43NXJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAzLjc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAuNzVyZW0gMS41cmVtO1xuICAgICAgICBmb250LXNpemU6IDEuMjVyZW07XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW2Z1bGwtd2lkdGhdIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogMi4yNXJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAyLjI1cmVtO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xuXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IC0tZm9udC1mYW1pbHk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtaG92ZXItY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItaG92ZXItY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtaG92ZXItY29sb3IpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuICA8L3N0eWxlPlxuYDtcbmV4cG9ydCBjbGFzcyBMYXZhbmRyZUJ1dHRvbiBleHRlbmRzIEhUTUxCdXR0b25FbGVtZW50IHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jbGlja0hhbmRsZXIgPSAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgIGlmICh0aGlzLmhyZWYgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICAgIH07XG4gICAgfVxuICAgIGdldCBocmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGF2YW5kcmVCdXR0b24uanMubWFwIiwiaW1wb3J0IHsgTGF2YW5kcmVCdXR0b24gfSBmcm9tICcuL0xhdmFuZHJlQnV0dG9uLmpzJztcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xhdmFuZHJlLWJ1dHRvbicsIExhdmFuZHJlQnV0dG9uLCB7IGV4dGVuZHM6ICdidXR0b24nIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGF2YW5kcmUtYnV0dG9uLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=