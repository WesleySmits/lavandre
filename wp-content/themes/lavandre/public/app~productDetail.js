(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["app~productDetail"],{

/***/ "./assets/css/components/_sidePanel.pcss":
/*!***********************************************!*\
  !*** ./assets/css/components/_sidePanel.pcss ***!
  \***********************************************/
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

/***/ "./assets/js/common/DataLayer.ts":
/*!***************************************!*\
  !*** ./assets/js/common/DataLayer.ts ***!
  \***************************************/
/*! exports provided: DataLayer, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DataLayer", function() { return DataLayer; });
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

/***/ "./assets/js/ui/Dialog.ts":
/*!********************************!*\
  !*** ./assets/js/ui/Dialog.ts ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Dialog; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_body__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/body */ "./assets/js/util/body.ts");
/* harmony import */ var dialog_polyfill__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! dialog-polyfill */ "./node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js");
/* harmony import */ var _util_string__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/string */ "./assets/js/util/string.ts");




class Dialog extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
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
    return Object(_util_string__WEBPACK_IMPORTED_MODULE_3__["toCamelCase"])(value);
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

    Object(_util_body__WEBPACK_IMPORTED_MODULE_1__["disableBodyScroll"])();
    this.element.showModal();
    this.isOpen = true;
    this.element.classList.add(this.classes.open);
    setTimeout(() => {
      this.element.classList.remove(this.classes.closed);
    }, this.transitionTime);
  }

  close() {
    Object(_util_body__WEBPACK_IMPORTED_MODULE_1__["enableBodyScroll"])();
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
    let transitionDuration = (_a = styles.transitionDuration) !== null && _a !== void 0 ? _a : '';
    let duration = transitionDuration.indexOf("ms") > -1 ? parseFloat(transitionDuration) : parseFloat(transitionDuration) * 1000;
    return duration || 400;
  }

  polyfillDialog() {
    dialog_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"] === null || dialog_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"] === void 0 ? void 0 : dialog_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"].registerDialog(this.element);
  }

}

/***/ }),

/***/ "./assets/js/ui/SidePanel.ts":
/*!***********************************!*\
  !*** ./assets/js/ui/SidePanel.ts ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SidePanel; });
/* harmony import */ var _css_components_sidePanel_pcss__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../css/components/_sidePanel.pcss */ "./assets/css/components/_sidePanel.pcss");
/* harmony import */ var _css_components_sidePanel_pcss__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_css_components_sidePanel_pcss__WEBPACK_IMPORTED_MODULE_0__);
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
      const content = clone.content;
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
    const panelID = this.dataset.panel || ""; // If already logged in follow link

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
/*! exports provided: disableBodyScroll, enableBodyScroll */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "disableBodyScroll", function() { return disableBodyScroll; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "enableBodyScroll", function() { return enableBodyScroll; });
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

/***/ "./assets/js/util/string.ts":
/*!**********************************!*\
  !*** ./assets/js/util/string.ts ***!
  \**********************************/
/*! exports provided: toCamelCase, toTitleCase */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toCamelCase", function() { return toCamelCase; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "toTitleCase", function() { return toTitleCase; });
function toCamelCase(str) {
  return str.replace(/\W+(.)/g, function (match, chr) {
    return chr.toUpperCase();
  });
}
function toTitleCase(str) {
  return str.replace(/\w\S*/g, function (txt) {
    return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
  });
}

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3NpZGVQYW5lbC5wY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Nb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbW1vbi9EYXRhTGF5ZXIudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdWkvU2lkZVBhbmVsLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsL2JvZHkudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwvc3RyaW5nLnRzIl0sIm5hbWVzIjpbIk1vZHVsZSIsImNvbnN0cnVjdG9yIiwiZXZlbnRFbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDb21wb25lbnRzIiwib24iLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwiY29tcG9uZW50Iiwib25Jbml0IiwiRGF0YUxheWVyIiwiZGF0YUxheWVyIiwid2luZG93IiwicHVzaCIsImRhdGEiLCJlY29tbWVyY2UiLCJEaWFsb2ciLCJDb21wb25lbnQiLCJfaXNPcGVuIiwiX3RyYW5zaXRpb25UaW1lIiwiaXNPcGVuIiwidmFsdWUiLCJjYW1lbERhdGFBdHRyaWJ1dGUiLCJkYXRhQXR0cmlidXRlIiwicmVwbGFjZSIsInRvQ2FtZWxDYXNlIiwidHJhbnNpdGlvblRpbWUiLCJnZXRUcmFuc2l0aW9uVGltZSIsInBvbHlmaWxsRGlhbG9nIiwic2V0RXZlbnRMaXN0ZW5lcnMiLCJhZGRFdmVudExpc3RlbmVyIiwib3BlbiIsInRvZ2dsZSIsImNsb3NlQnV0dG9ucyIsIkFycmF5IiwiZnJvbSIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJidXR0b24iLCJjbG9zZSIsImUiLCJvdXRzaWRlQ2xpY2siLCJldmVudCIsInRhcmdldCIsInJlY3QiLCJnZXRCb3VuZGluZ0NsaWVudFJlY3QiLCJjbGlja2VkSW5EaWFsb2ciLCJ0b3AiLCJjbGllbnRZIiwiaGVpZ2h0IiwibGVmdCIsImNsaWVudFgiLCJ3aWR0aCIsImNsb3Nlc3QiLCJkYXRhc2V0IiwiZGlzYWJsZUJvZHlTY3JvbGwiLCJzaG93TW9kYWwiLCJjbGFzc0xpc3QiLCJhZGQiLCJjbGFzc2VzIiwic2V0VGltZW91dCIsInJlbW92ZSIsImNsb3NlZCIsImVuYWJsZUJvZHlTY3JvbGwiLCJfYSIsInN0eWxlcyIsImdldENvbXB1dGVkU3R5bGUiLCJ0cmFuc2l0aW9uRHVyYXRpb24iLCJkdXJhdGlvbiIsImluZGV4T2YiLCJwYXJzZUZsb2F0IiwiZGlhbG9nUG9seWZpbGwiLCJyZWdpc3RlckRpYWxvZyIsIlNpZGVQYW5lbCIsImFyZ3VtZW50cyIsInJpZ2h0Iiwib3BlblNpZGVQYW5lbCIsInBhbmVsSUQiLCJwYW5lbCIsInF1ZXJ5U2VsZWN0b3IiLCJ0ZW1wbGF0ZSIsIkhUTUxBbmNob3JFbGVtZW50IiwibG9jYXRpb24iLCJocmVmIiwiY2xvbmUiLCJjbG9uZU5vZGUiLCJjb250ZW50IiwicGFyZW50RWxlbWVudCIsImFwcGVuZENoaWxkIiwiZW1pdCIsInNpZGVQYW5lbEluc3RhbmNlIiwidG9nZ2xlRXZlbnQiLCJDdXN0b21FdmVudCIsImRpc3BhdGNoRXZlbnQiLCJwYW5lbExpbmtzIiwiaW5kZXgiLCJsZW5ndGgiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiaGFuZGxlQ3JlYXRpb25FdmVudCIsInByZXZlbnREZWZhdWx0IiwiYm9keSIsImNvbnRhaW5zIiwiYm9keUVsZW1lbnQiLCJzY3JvbGxQb3NpdGlvbiIsInBhZ2VZT2Zmc2V0Iiwic3R5bGUiLCJvdmVyZmxvdyIsInBvc2l0aW9uIiwiZG9jdW1lbnRFbGVtZW50Iiwic2Nyb2xsQmVoYXZpb3IiLCJyZW1vdmVQcm9wZXJ0eSIsInNjcm9sbFRvIiwic3RyIiwibWF0Y2giLCJjaHIiLCJ0b1VwcGVyQ2FzZSIsInRvVGl0bGVDYXNlIiwi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bWluaS1jc3MtZXh0cmFjdC1wbHVnaW4iLCJpbXBvcnQgJy4vY2FydCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCIuL2NvbW1vbi9FdmVudEVtaXR0ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb21wb25lbnRzKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29tcG9uZW50Lm9uSW5pdChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImNsYXNzIERhdGFMYXllciB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZGF0YUxheWVyID0gKHdpbmRvdy5kYXRhTGF5ZXIpID8gd2luZG93LmRhdGFMYXllciA6IFtdO1xuICAgIH1cbiAgICBwdXNoKGRhdGEpIHtcbiAgICAgICAgdGhpcy5kYXRhTGF5ZXIucHVzaCh7IGVjb21tZXJjZTogbnVsbCB9KTsgLy8gQ2xlYXIgdGhlIHByZXZpb3VzIGVjb21tZXJjZSBvYmplY3QuXG4gICAgICAgIHRoaXMuZGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxufVxuZXhwb3J0IHsgRGF0YUxheWVyIH07XG5leHBvcnQgZGVmYXVsdCBuZXcgRGF0YUxheWVyKCk7XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBkaXNhYmxlQm9keVNjcm9sbCwgZW5hYmxlQm9keVNjcm9sbCB9IGZyb20gXCIuLi91dGlsL2JvZHlcIjtcbmltcG9ydCBkaWFsb2dQb2x5ZmlsbCBmcm9tICdkaWFsb2ctcG9seWZpbGwnO1xuaW1wb3J0IHsgdG9DYW1lbENhc2UgfSBmcm9tIFwiLi4vdXRpbC9zdHJpbmdcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIERpYWxvZyBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLl9pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWUgPSAwO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBnZXQgaXNPcGVuKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNPcGVuO1xuICAgIH1cbiAgICBzZXQgaXNPcGVuKHZhbHVlKSB7XG4gICAgICAgIHRoaXMuX2lzT3BlbiA9IHZhbHVlO1xuICAgIH1cbiAgICBnZXQgY2FtZWxEYXRhQXR0cmlidXRlKCkge1xuICAgICAgICBjb25zdCB2YWx1ZSA9IHRoaXMuZGF0YUF0dHJpYnV0ZS5yZXBsYWNlKCdkYXRhLScsICcnKTtcbiAgICAgICAgcmV0dXJuIHRvQ2FtZWxDYXNlKHZhbHVlKTtcbiAgICB9XG4gICAgZ2V0IHRyYW5zaXRpb25UaW1lKCkge1xuICAgICAgICBpZiAodGhpcy5fdHJhbnNpdGlvblRpbWUpIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uVGltZTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLl90cmFuc2l0aW9uVGltZSA9IHRoaXMuZ2V0VHJhbnNpdGlvblRpbWUoKTtcbiAgICAgICAgcmV0dXJuIHRoaXMuX3RyYW5zaXRpb25UaW1lO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLnBvbHlmaWxsRGlhbG9nKCk7XG4gICAgICAgIHRoaXMuc2V0RXZlbnRMaXN0ZW5lcnMoKTtcbiAgICB9XG4gICAgc2V0RXZlbnRMaXN0ZW5lcnMoKSB7XG4gICAgICAgIHRoaXMuZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCdvcGVuJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG9nZ2xlJywgKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy50b2dnbGUoKTtcbiAgICAgICAgfSk7XG4gICAgICAgIGNvbnN0IGNsb3NlQnV0dG9ucyA9IEFycmF5LmZyb20oZG9jdW1lbnQucXVlcnlTZWxlY3RvckFsbCgnW2RhdGEtY2xvc2VdJykpO1xuICAgICAgICBjbG9zZUJ1dHRvbnMuZm9yRWFjaCgoYnV0dG9uKSA9PiB7XG4gICAgICAgICAgICBidXR0b24uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZSkgPT4ge1xuICAgICAgICAgICAgdGhpcy5vdXRzaWRlQ2xpY2soZSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBvdXRzaWRlQ2xpY2soZXZlbnQpIHtcbiAgICAgICAgY29uc3QgdGFyZ2V0ID0gZXZlbnQudGFyZ2V0O1xuICAgICAgICBpZiAodGFyZ2V0ID09PSB0aGlzLmVsZW1lbnQpIHtcbiAgICAgICAgICAgIGNvbnN0IHJlY3QgPSB0YXJnZXQuZ2V0Qm91bmRpbmdDbGllbnRSZWN0KCk7XG4gICAgICAgICAgICBjb25zdCBjbGlja2VkSW5EaWFsb2cgPSAocmVjdC50b3AgPD0gZXZlbnQuY2xpZW50WSAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFkgPD0gcmVjdC50b3AgKyByZWN0LmhlaWdodCAmJlxuICAgICAgICAgICAgICAgIHJlY3QubGVmdCA8PSBldmVudC5jbGllbnRYICYmXG4gICAgICAgICAgICAgICAgZXZlbnQuY2xpZW50WCA8PSByZWN0LmxlZnQgKyByZWN0LndpZHRoKTtcbiAgICAgICAgICAgIGlmICghY2xpY2tlZEluRGlhbG9nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmICghdGFyZ2V0LmNsb3Nlc3QoYFske3RoaXMuZGF0YUF0dHJpYnV0ZX09XCIke3RoaXMuZWxlbWVudC5kYXRhc2V0W2Ake3RoaXMuY2FtZWxEYXRhQXR0cmlidXRlfWBdfVwiXWApKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgdG9nZ2xlKCkge1xuICAgICAgICBpZiAodGhpcy5pc09wZW4pIHtcbiAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLm9wZW4oKTtcbiAgICB9XG4gICAgb3BlbigpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgZGlzYWJsZUJvZHlTY3JvbGwoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50LnNob3dNb2RhbCgpO1xuICAgICAgICB0aGlzLmlzT3BlbiA9IHRydWU7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3Nlcy5vcGVuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMuY2xvc2VkKTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuICAgIGNsb3NlKCkge1xuICAgICAgICBlbmFibGVCb2R5U2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3Nlcy5vcGVuKTtcbiAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMuY2xvc2VkKTtcbiAgICAgICAgICAgIHRoaXMuZWxlbWVudC5jbG9zZSgpO1xuICAgICAgICAgICAgdGhpcy5pc09wZW4gPSBmYWxzZTtcbiAgICAgICAgfSwgdGhpcy50cmFuc2l0aW9uVGltZSk7XG4gICAgfVxuICAgIGdldFRyYW5zaXRpb25UaW1lKCkge1xuICAgICAgICB2YXIgX2E7XG4gICAgICAgIGNvbnN0IHN0eWxlcyA9IGdldENvbXB1dGVkU3R5bGUodGhpcy5lbGVtZW50KTtcbiAgICAgICAgbGV0IHRyYW5zaXRpb25EdXJhdGlvbiA9IChfYSA9IHN0eWxlcy50cmFuc2l0aW9uRHVyYXRpb24pICE9PSBudWxsICYmIF9hICE9PSB2b2lkIDAgPyBfYSA6ICcnO1xuICAgICAgICBsZXQgZHVyYXRpb24gPSAodHJhbnNpdGlvbkR1cmF0aW9uLmluZGV4T2YoXCJtc1wiKSA+IC0xKSA/IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSA6IHBhcnNlRmxvYXQodHJhbnNpdGlvbkR1cmF0aW9uKSAqIDEwMDA7XG4gICAgICAgIHJldHVybiBkdXJhdGlvbiB8fCA0MDA7XG4gICAgfVxuICAgIHBvbHlmaWxsRGlhbG9nKCkge1xuICAgICAgICBkaWFsb2dQb2x5ZmlsbCA9PT0gbnVsbCB8fCBkaWFsb2dQb2x5ZmlsbCA9PT0gdm9pZCAwID8gdm9pZCAwIDogZGlhbG9nUG9seWZpbGwucmVnaXN0ZXJEaWFsb2codGhpcy5lbGVtZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19zaWRlUGFuZWwucGNzcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlUGFuZWwgZXh0ZW5kcyBEaWFsb2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRhdGFBdHRyaWJ1dGUgPSAnZGF0YS1wYW5lbC1uYW1lJztcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgICAgICAgb3BlbjogJ3NpZGUtcGFuZWwtLW9wZW5lZCcsXG4gICAgICAgICAgICBjbG9zZWQ6ICdzaWRlLXBhbmVsLS1jbG9zZWQnLFxuICAgICAgICAgICAgbGVmdDogJ3NpZGUtcGFuZWwtLWxlZnQnLFxuICAgICAgICAgICAgcmlnaHQ6ICdzaWRlLXBhbmVsLS1yaWdodCdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIG9wZW5TaWRlUGFuZWwocGFuZWxJRCwgZWxlbWVudCA9IG51bGwpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYW5lbC1uYW1lPVwiJHtwYW5lbElEfVwiXWApO1xuICAgICAgICBpZiAocGFuZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtdGVtcGxhdGU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgICAgICBpZiAodGVtcGxhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBlbGVtZW50LmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY2xvbmUuY29udGVudDtcbiAgICAgICAgICAgIChfYSA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICAgIHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCBwYW5lbCk7XG4gICAgICAgICAgICBpZiAocGFuZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzaWRlUGFuZWxJbnN0YW5jZSA9IG5ldyBTaWRlUGFuZWwocGFuZWwpO1xuICAgICAgICAgICAgc2lkZVBhbmVsSW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvZ2dsZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKTtcbiAgICAgICAgcGFuZWwuZGlzcGF0Y2hFdmVudCh0b2dnbGVFdmVudCk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgICAgICBjb25zdCBwYW5lbExpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW5lbF0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYW5lbExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhbmVsTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlQ3JlYXRpb25FdmVudChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwYW5lbElEID0gdGhpcy5kYXRhc2V0LnBhbmVsIHx8IFwiXCI7XG4gICAgICAgIC8vIElmIGFscmVhZHkgbG9nZ2VkIGluIGZvbGxvdyBsaW5rXG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnRcbiAgICAgICAgICAgICYmIChwYW5lbElEID09PSAnbXktYWNjb3VudC1wYW5lbCcgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvZ2dlZC1pbicpKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwocGFuZWxJRCwgdGhpcyk7XG4gICAgfVxufVxuIiwiY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgc2Nyb2xsUG9zaXRpb24gPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVCb2R5U2Nyb2xsKCkge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnRvcCA9IGAtJHtzY3JvbGxQb3NpdGlvbn1weGA7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ2luaXRpYWwnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUJvZHlTY3JvbGwoKSB7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Bvc2l0aW9uJyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICB3aW5kb3cuc2Nyb2xsVG8oMCwgc2Nyb2xsUG9zaXRpb24pO1xuICAgIGRvY3VtZW50LmRvY3VtZW50RWxlbWVudC5zdHlsZS5yZW1vdmVQcm9wZXJ0eSgnc2Nyb2xsLWJlaGF2aW9yJyk7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIGZ1bmN0aW9uIChtYXRjaCwgY2hyKSB7XG4gICAgICAgIHJldHVybiBjaHIudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKHR4dCkge1xuICAgICAgICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==