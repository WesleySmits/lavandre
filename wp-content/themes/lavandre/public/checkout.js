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
        --font-family-accent: adobe-garamond-pro, serif;

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
        font-size: 1.5rem;
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
        font-family: var(--font-family-accent);
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

    [is="lavandre-button"] svg,
    [is="lavandre-button"] path {
        fill: var(--button-text-color);
        stroke: var(--button-text-color);
    }

    [is="lavandre-button"]:hover svg,
    [is="lavandre-button"]:hover path {
        fill: var(--button-text-hover-color);
        stroke: var(--button-text-hover-color);
    }

    [is="lavandre-button"] svg {
        margin-right: .5rem;
    }

    [is="lavandre-button"][loading] {
        color: transparent !important;
    }

    [is="lavandre-button"][loading] {
        color: transparent !important;
    }

    [is="lavandre-button"][loading]:after {
        content: "";
        position: absolute;
        inset: 0;
        margin: auto;

        width: .75em;
        height: .75em;
        border-color: transparent transparent var(--button-border-color) var(--button-border-color);
        border-style: solid;
        border-width: 3px;
        border-radius: 50%;
        transform: translateZ(0);
        animation: btnloading 1s linear infinite;
    }

    [is="lavandre-button"][loading][primary]:after {
        border-color: transparent transparent #FFFFFF #FFFFFF;
    }

    @keyframes btnloading {
        0% {
            transform: rotate(0deg)
        }

        to {
            transform: rotate(1turn)
        }
    }
  </style>
`;
class LavandreButton extends HTMLButtonElement {
    constructor() {
        super();
        this.clickHandler = (event) => {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3RvYXN0LnBjc3MiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY2hlY2tvdXQudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvVG9hc3QudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2VudW1zL1RvYXN0VHlwZS50cyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxhdmFuZHJlL2J1dHRvbi9kaXN0L3NyYy9MYXZhbmRyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxhdmFuZHJlL2J1dHRvbi9kaXN0L3NyYy9sYXZhbmRyZS1idXR0b24uanMiXSwibmFtZXMiOlsiTW9kdWxlIiwiY29uc3RydWN0b3IiLCJldmVudEVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJpbml0aWFsaXplIiwiaW5pdGlhbGl6ZUNvbXBvbmVudHMiLCJvbiIsImVsZW1lbnQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwiY29tcG9uZW50cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJvbkluaXQiLCJDaGVja291dE1vZHVsZSIsImFyZ3VtZW50cyIsImNoZWNrUGF5TkxTdGF0dXMiLCJ1cmwiLCJVUkwiLCJ3aW5kb3ciLCJsb2NhdGlvbiIsImhyZWYiLCJzZWFyY2hQYXJhbXMiLCJnZXQiLCJ0b2FzdCIsIlRvYXN0IiwiVG9hc3RUeXBlIiwid2FybmluZyIsInVuZGVmaW5lZCIsImNoZWNrb3V0SW5pdCIsImNoZWNrb3V0TW9kdWxlIiwibWVzc2FnZSIsInR5cGUiLCJjdGEiLCJ0aW1lb3V0IiwiY3RhQnV0dG9uIiwiaXNWYWxpZCIsImNyZWF0ZSIsImJvZHkiLCJhcHBlbmRDaGlsZCIsImNsYXNzTGlzdCIsImFkZCIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJhZGRFdmVudExpc3RlbmVyIiwicmVtb3ZlQ2hpbGQiLCJjcmVhdGVFbGVtZW50IiwiY29udGFpbmVyIiwiaWNvbiIsInNyYyIsImFsdCIsIndpZHRoIiwiaGVpZ2h0IiwicGFyYWdyYXBoIiwiaW5uZXJUZXh0IiwiY2xvc2VCdXR0b24iLCJidXR0b24iLCJMYXZhbmRyZUJ1dHRvbiIsInByaW1hcnkiLCJzaXplIiwidGV4dCJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQUEsdUM7Ozs7Ozs7Ozs7OztBQ0FBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNlLE1BQU1BLE1BQU4sQ0FBYTtBQUN4QkMsYUFBVyxHQUFHO0FBQ1YsU0FBS0MsWUFBTCxHQUFvQkMsNERBQXBCO0FBQ0g7O0FBQ0RDLFlBQVUsR0FBRztBQUNULFNBQUtDLG9CQUFMO0FBQ0EsU0FBS0gsWUFBTCxDQUFrQkksRUFBbEIsQ0FBcUIsdUJBQXJCLEVBQStDQyxPQUFELElBQWE7QUFDdkQsV0FBS0Ysb0JBQUwsQ0FBMEJFLE9BQTFCO0FBQ0gsS0FGRDtBQUdIOztBQUNERixzQkFBb0IsQ0FBQ0csUUFBUSxHQUFHQyxRQUFaLEVBQXNCO0FBQ3RDLFNBQUtDLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXlCQyxTQUFELElBQWU7QUFDbkM7QUFDQUEsZUFBUyxDQUFDQyxNQUFWLENBQWlCTCxRQUFqQjtBQUNILEtBSEQ7QUFJSDs7QUFmdUIsQzs7Ozs7Ozs7Ozs7O0FDRjVCO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsTUFBTU0sY0FBTixTQUE2QmQsK0NBQTdCLENBQW9DO0FBQy9DQyxhQUFXLEdBQUc7QUFDVixVQUFNLEdBQUdjLFNBQVQ7QUFDQSxTQUFLYixZQUFMLEdBQW9CQyw0REFBcEI7QUFDQSxTQUFLTyxVQUFMLEdBQWtCLEVBQWxCO0FBQ0g7O0FBQ0ROLFlBQVUsR0FBRztBQUNULFVBQU1BLFVBQU47QUFDQSxTQUFLWSxnQkFBTDtBQUNIOztBQUNEQSxrQkFBZ0IsR0FBRztBQUNmLFVBQU1DLEdBQUcs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QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDOzs7Ozs7Ozs7Ozs7QUN6TkE7QUFBQTtBQUFxRDtBQUNyRCxnREFBZ0QsaUVBQWMsR0FBRyxvQkFBb0I7QUFDckYsMkMiLCJmaWxlIjoiY2hlY2tvdXQuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvLyBleHRyYWN0ZWQgYnkgbWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vY2FydCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCIuL2NvbW1vbi9FdmVudEVtaXR0ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb21wb25lbnRzKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29tcG9uZW50Lm9uSW5pdChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCAnLi4vY3NzL3BhZ2VzL2NoZWNrb3V0LnBjc3MnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IFRvYXN0IGZyb20gJy4vY29tcG9uZW50cy9Ub2FzdCc7XG5pbXBvcnQgeyBUb2FzdFR5cGUgfSBmcm9tICcuL2VudW1zL1RvYXN0VHlwZSc7XG5pbXBvcnQgTW9kdWxlIGZyb20gJy4vTW9kdWxlJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoZWNrb3V0TW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgICAgIHRoaXMuY29tcG9uZW50cyA9IFtdO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBzdXBlci5pbml0aWFsaXplKCk7XG4gICAgICAgIHRoaXMuY2hlY2tQYXlOTFN0YXR1cygpO1xuICAgIH1cbiAgICBjaGVja1BheU5MU3RhdHVzKCkge1xuICAgICAgICBjb25zdCB1cmwgPSBuZXcgVVJMKHdpbmRvdy5sb2NhdGlvbi5ocmVmKTtcbiAgICAgICAgaWYgKHVybC5zZWFyY2hQYXJhbXMuZ2V0KCdwYXlubF9zdGF0dXMnKSAmJiB1cmwuc2VhcmNoUGFyYW1zLmdldCgncGF5bmxfc3RhdHVzJykgPT09ICdDQU5DRUxFRCcpIHtcbiAgICAgICAgICAgIGNvbnN0IHRvYXN0ID0gbmV3IFRvYXN0KCdQYXltZW50IGZhaWxlZCwgcGxlYXNlIHRyeSBhZ2Fpbi4nLCBUb2FzdFR5cGUud2FybmluZywgdW5kZWZpbmVkLCAyMDAwMCk7XG4gICAgICAgICAgICB0b2FzdC5pbml0aWFsaXplKCk7XG4gICAgICAgIH1cbiAgICB9XG59XG4oZnVuY3Rpb24gY2hlY2tvdXRJbml0KCkge1xuICAgIGNvbnN0IGNoZWNrb3V0TW9kdWxlID0gbmV3IENoZWNrb3V0TW9kdWxlKCk7XG4gICAgY2hlY2tvdXRNb2R1bGUuaW5pdGlhbGl6ZSgpO1xufSkoKTtcbiIsImltcG9ydCAnLi4vLi4vY3NzL2NvbXBvbmVudHMvX3RvYXN0LnBjc3MnO1xuaW1wb3J0ICdAbGF2YW5kcmUvYnV0dG9uL2Rpc3Qvc3JjL2xhdmFuZHJlLWJ1dHRvbic7XG5pbXBvcnQgeyBMYXZhbmRyZUJ1dHRvbiB9IGZyb20gJ0BsYXZhbmRyZS9idXR0b24vZGlzdC9zcmMvTGF2YW5kcmVCdXR0b24uanMnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgVG9hc3Qge1xuICAgIGNvbnN0cnVjdG9yKG1lc3NhZ2UsIHR5cGUsIGN0YSwgdGltZW91dCA9IDUwMDApIHtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5tZXNzYWdlID0gbWVzc2FnZTtcbiAgICAgICAgdGhpcy50eXBlID0gdHlwZTtcbiAgICAgICAgdGhpcy50aW1lb3V0ID0gdGltZW91dDtcbiAgICAgICAgaWYgKGN0YSkge1xuICAgICAgICAgICAgdGhpcy5jdGFCdXR0b24gPSBjdGE7XG4gICAgICAgIH1cbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgaWYgKCF0aGlzLmlzVmFsaWQoKSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGVsZW1lbnQgPSB0aGlzLmNyZWF0ZSgpO1xuICAgICAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKGVsZW1lbnQpO1xuICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvYXN0LS12aXNpYmxlJyk7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5yZW1vdmUoKTtcbiAgICAgICAgfSwgdGhpcy50aW1lb3V0KTtcbiAgICB9XG4gICAgcmVtb3ZlKCkge1xuICAgICAgICBpZiAodGhpcy5lbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RyYW5zaXRpb25lbmQnLCAoKSA9PiB7XG4gICAgICAgICAgICBkb2N1bWVudC5ib2R5LnJlbW92ZUNoaWxkKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgndG9hc3QtLXZpc2libGUnKTtcbiAgICB9XG4gICAgY3JlYXRlKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdESVYnKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQoJ3RvYXN0Jyk7XG4gICAgICAgIGNvbnN0IGNvbnRhaW5lciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0RJVicpO1xuICAgICAgICBjb250YWluZXIuY2xhc3NMaXN0LmFkZCgndG9hc3RfX2NvbnRhaW5lcicpO1xuICAgICAgICBjb25zdCBpY29uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnSU1HJyk7XG4gICAgICAgIGljb24uc3JjID0gYC93cC1jb250ZW50L3RoZW1lcy9sYXZhbmRyZS9wdWJsaWMvaW1hZ2VzL2ljb25zLyR7dGhpcy50eXBlfS5zdmdgO1xuICAgICAgICBpY29uLmFsdCA9IGAke3RoaXMudHlwZX0gaWNvbmA7XG4gICAgICAgIGljb24uY2xhc3NMaXN0LmFkZCgndG9hc3RfX2ljb24nKTtcbiAgICAgICAgaWNvbi53aWR0aCA9IDI0O1xuICAgICAgICBpY29uLmhlaWdodCA9IDI0O1xuICAgICAgICBjb25zdCBwYXJhZ3JhcGggPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdQJyk7XG4gICAgICAgIGNvbnN0IG1lc3NhZ2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdTVFJPTkcnKTtcbiAgICAgICAgbWVzc2FnZS5jbGFzc0xpc3QuYWRkKCd0b2FzdF9fbWVzc2FnZScpO1xuICAgICAgICBtZXNzYWdlLmlubmVyVGV4dCA9IHRoaXMubWVzc2FnZTtcbiAgICAgICAgcGFyYWdyYXBoLmFwcGVuZENoaWxkKG1lc3NhZ2UpO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbiA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ0JVVFRPTicpO1xuICAgICAgICBjbG9zZUJ1dHRvbi5jbGFzc0xpc3QuYWRkKCdlaWNvbi1jbG9zZScsICd0b2FzdF9fY2xvc2UnKTtcbiAgICAgICAgY2xvc2VCdXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7IHRoaXMucmVtb3ZlKCk7IH0pO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoaWNvbik7XG4gICAgICAgIGNvbnRhaW5lci5hcHBlbmRDaGlsZChwYXJhZ3JhcGgpO1xuICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoY2xvc2VCdXR0b24pO1xuICAgICAgICBpZiAodGhpcy5jdGFCdXR0b24pIHtcbiAgICAgICAgICAgIGNvbnN0IGJ1dHRvbiA9IG5ldyBMYXZhbmRyZUJ1dHRvbigpO1xuICAgICAgICAgICAgYnV0dG9uLmhyZWYgPSB0aGlzLmN0YUJ1dHRvbi5ocmVmO1xuICAgICAgICAgICAgYnV0dG9uLnByaW1hcnkgPSB0cnVlO1xuICAgICAgICAgICAgYnV0dG9uLnNpemUgPSAnbGFyZ2UnO1xuICAgICAgICAgICAgYnV0dG9uLmlubmVyVGV4dCA9IHRoaXMuY3RhQnV0dG9uLnRleHQ7XG4gICAgICAgICAgICBjb250YWluZXIuYXBwZW5kQ2hpbGQoYnV0dG9uKTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnQuYXBwZW5kQ2hpbGQoY29udGFpbmVyKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuZWxlbWVudDtcbiAgICB9XG4gICAgaXNWYWxpZCgpIHtcbiAgICAgICAgaWYgKCF0aGlzLm1lc3NhZ2VcbiAgICAgICAgICAgIHx8ICF0aGlzLnR5cGUpIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG59XG4iLCJleHBvcnQgdmFyIFRvYXN0VHlwZTtcbihmdW5jdGlvbiAoVG9hc3RUeXBlKSB7XG4gICAgVG9hc3RUeXBlW1wic3VjY2Vzc1wiXSA9IFwic3VjY2Vzc1wiO1xuICAgIFRvYXN0VHlwZVtcIndhcm5pbmdcIl0gPSBcIndhcm5pbmdcIjtcbiAgICBUb2FzdFR5cGVbXCJkYW5nZXJcIl0gPSBcImRhbmdlclwiO1xufSkoVG9hc3RUeXBlIHx8IChUb2FzdFR5cGUgPSB7fSkpO1xuIiwiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICA8c3R5bGU+XG4gICAgOnJvb3Qge1xuICAgICAgICAtLXdoaXRlOiAjRkZGRkZGO1xuICAgICAgICAtLWpldDogIzJCMkIyQjtcbiAgICAgICAgLS1vbGQtYnVyZ3VuZHk6ICMzRDJCMzA7XG4gICAgICAgIC0tc3ViZHVlZDogI2JhYmZjMztcbiAgICAgICAgLS1mb250LWZhbWlseS1hY2NlbnQ6IGFkb2JlLWdhcmFtb25kLXBybywgc2VyaWY7XG5cbiAgICAgICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQtaG92ZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG5cbiAgICAgICAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgICAgICAtLWJ1dHRvbi1ib3JkZXItaG92ZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG5cbiAgICAgICAgLS1idXR0b24tdGV4dC1jb2xvcjogdmFyKC0tb2xkLWJ1cmd1bmR5KTtcbiAgICAgICAgLS1idXR0b24tdGV4dC1ob3Zlci1jb2xvcjogdmFyKC0td2hpdGUpO1xuXG4gICAgICAgIC0tYnV0dG9uLWZvbnQtc2l6ZTogY2FsYygxM3JlbSAvIDE2KTtcbiAgICB9XG5cbiAgICBbaXM9XCJsYXZhbmRyZS1idXR0b25cIl1bcHJpbWFyeV0ge1xuICAgICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cbiAgICAgICAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgICAgICAtLWJ1dHRvbi1ib3JkZXItaG92ZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG5cbiAgICAgICAgLS1idXR0b24tdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAtLWJ1dHRvbi10ZXh0LWhvdmVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtvdXRsaW5lXSB7XG4gICAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtzaXplPVwic21hbGxcIl0ge1xuICAgICAgICBtaW4taGVpZ2h0OiAxLjc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAuM3JlbSAuNzVyZW07XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW3NpemU9XCJsYXJnZVwiXSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMuNzVyZW07XG4gICAgICAgIG1pbi13aWR0aDogMy43NXJlbTtcbiAgICAgICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW2Z1bGwtd2lkdGhdIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogMi4yNXJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAyLjI1cmVtO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xuXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWFjY2VudCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtaG92ZXItY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItaG92ZXItY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtaG92ZXItY29sb3IpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdIHN2ZyxcbiAgICBbaXM9XCJsYXZhbmRyZS1idXR0b25cIl0gcGF0aCB7XG4gICAgICAgIGZpbGw6IHZhcigtLWJ1dHRvbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1idXR0b24tdGV4dC1jb2xvcik7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdOmhvdmVyIHN2ZyxcbiAgICBbaXM9XCJsYXZhbmRyZS1idXR0b25cIl06aG92ZXIgcGF0aCB7XG4gICAgICAgIGZpbGw6IHZhcigtLWJ1dHRvbi10ZXh0LWhvdmVyLWNvbG9yKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1idXR0b24tdGV4dC1ob3Zlci1jb2xvcik7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW2xvYWRpbmddIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW2xvYWRpbmddIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW2xvYWRpbmddOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgIHdpZHRoOiAuNzVlbTtcbiAgICAgICAgaGVpZ2h0OiAuNzVlbTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKSB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICBhbmltYXRpb246IGJ0bmxvYWRpbmcgMXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtsb2FkaW5nXVtwcmltYXJ5XTphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI0ZGRkZGRiAjRkZGRkZGO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgYnRubG9hZGluZyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gICAgICAgIH1cblxuICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybilcbiAgICAgICAgfVxuICAgIH1cbiAgPC9zdHlsZT5cbmA7XG5leHBvcnQgY2xhc3MgTGF2YW5kcmVCdXR0b24gZXh0ZW5kcyBIVE1MQnV0dG9uRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5ocmVmID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaXMnLCAnbGF2YW5kcmUtYnV0dG9uJyk7XG4gICAgfVxuICAgIGdldCBocmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJztcbiAgICB9XG4gICAgc2V0IGhyZWYodXJsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc2l6ZScpIHx8ICcnO1xuICAgIH1cbiAgICBzZXQgc2l6ZSh1cmwpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCB1cmwpO1xuICAgIH1cbiAgICBnZXQgcHJpbWFyeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBwcmltYXJ5KGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ByaW1hcnknLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgb3V0bGluZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBvdXRsaW5lKGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ291dGxpbmUnLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgZnVsbFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgc2V0IGZ1bGxXaWR0aChib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmdWxsLXdpZHRoJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IGxvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgncHJpbWFyeScpO1xuICAgIH1cbiAgICBzZXQgbG9hZGluZyhib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGF2YW5kcmVCdXR0b24uanMubWFwIiwiaW1wb3J0IHsgTGF2YW5kcmVCdXR0b24gfSBmcm9tICcuL0xhdmFuZHJlQnV0dG9uLmpzJztcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xhdmFuZHJlLWJ1dHRvbicsIExhdmFuZHJlQnV0dG9uLCB7IGV4dGVuZHM6ICdidXR0b24nIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGF2YW5kcmUtYnV0dG9uLmpzLm1hcCJdLCJzb3VyY2VSb290IjoiIn0=