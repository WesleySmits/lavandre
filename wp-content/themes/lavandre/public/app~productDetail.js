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
    dialog_polyfill__WEBPACK_IMPORTED_MODULE_2__["default"].registerDialog(this.element);
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
  document.documentElement.style.removeProperty('scroll-behavior');
  window.scrollTo(0, scrollPosition);
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvY3NzL2NvbXBvbmVudHMvX3NpZGVQYW5lbC5wY3NzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9Nb2R1bGUudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3VpL0RpYWxvZy50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvdWkvU2lkZVBhbmVsLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy91dGlsL2JvZHkudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL3V0aWwvc3RyaW5nLnRzIl0sIm5hbWVzIjpbIk1vZHVsZSIsImNvbnN0cnVjdG9yIiwiZXZlbnRFbWl0dGVyIiwiRXZlbnRFbWl0dGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDb21wb25lbnRzIiwib24iLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwiY29tcG9uZW50Iiwib25Jbml0IiwiRGlhbG9nIiwiQ29tcG9uZW50IiwiX2lzT3BlbiIsIl90cmFuc2l0aW9uVGltZSIsImlzT3BlbiIsInZhbHVlIiwiY2FtZWxEYXRhQXR0cmlidXRlIiwiZGF0YUF0dHJpYnV0ZSIsInJlcGxhY2UiLCJ0b0NhbWVsQ2FzZSIsInRyYW5zaXRpb25UaW1lIiwiZ2V0VHJhbnNpdGlvblRpbWUiLCJwb2x5ZmlsbERpYWxvZyIsInNldEV2ZW50TGlzdGVuZXJzIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm9wZW4iLCJ0b2dnbGUiLCJjbG9zZUJ1dHRvbnMiLCJBcnJheSIsImZyb20iLCJxdWVyeVNlbGVjdG9yQWxsIiwiYnV0dG9uIiwiY2xvc2UiLCJlIiwib3V0c2lkZUNsaWNrIiwiZXZlbnQiLCJ0YXJnZXQiLCJyZWN0IiwiZ2V0Qm91bmRpbmdDbGllbnRSZWN0IiwiY2xpY2tlZEluRGlhbG9nIiwidG9wIiwiY2xpZW50WSIsImhlaWdodCIsImxlZnQiLCJjbGllbnRYIiwid2lkdGgiLCJjbG9zZXN0IiwiZGF0YXNldCIsImRpc2FibGVCb2R5U2Nyb2xsIiwic2hvd01vZGFsIiwiY2xhc3NMaXN0IiwiYWRkIiwiY2xhc3NlcyIsInNldFRpbWVvdXQiLCJyZW1vdmUiLCJjbG9zZWQiLCJlbmFibGVCb2R5U2Nyb2xsIiwiX2EiLCJzdHlsZXMiLCJnZXRDb21wdXRlZFN0eWxlIiwidHJhbnNpdGlvbkR1cmF0aW9uIiwiZHVyYXRpb24iLCJpbmRleE9mIiwicGFyc2VGbG9hdCIsImRpYWxvZ1BvbHlmaWxsIiwicmVnaXN0ZXJEaWFsb2ciLCJTaWRlUGFuZWwiLCJhcmd1bWVudHMiLCJyaWdodCIsIm9wZW5TaWRlUGFuZWwiLCJwYW5lbElEIiwicGFuZWwiLCJxdWVyeVNlbGVjdG9yIiwidGVtcGxhdGUiLCJIVE1MQW5jaG9yRWxlbWVudCIsIndpbmRvdyIsImxvY2F0aW9uIiwiaHJlZiIsImNsb25lIiwiY2xvbmVOb2RlIiwiY29udGVudCIsInBhcmVudEVsZW1lbnQiLCJhcHBlbmRDaGlsZCIsImVtaXQiLCJzaWRlUGFuZWxJbnN0YW5jZSIsInRvZ2dsZUV2ZW50IiwiQ3VzdG9tRXZlbnQiLCJkaXNwYXRjaEV2ZW50IiwicGFuZWxMaW5rcyIsImluZGV4IiwibGVuZ3RoIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImhhbmRsZUNyZWF0aW9uRXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImJvZHkiLCJjb250YWlucyIsImJvZHlFbGVtZW50Iiwic2Nyb2xsUG9zaXRpb24iLCJwYWdlWU9mZnNldCIsInN0eWxlIiwib3ZlcmZsb3ciLCJwb3NpdGlvbiIsImRvY3VtZW50RWxlbWVudCIsInNjcm9sbEJlaGF2aW9yIiwicmVtb3ZlUHJvcGVydHkiLCJzY3JvbGxUbyIsInN0ciIsIm1hdGNoIiwiY2hyIiwidG9VcHBlckNhc2UiLCJ0b1RpdGxlQ2FzZSIsInR4dCIsImNoYXJBdCIsInN1YnN0ciIsInRvTG93ZXJDYXNlIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFBQSx1Qzs7Ozs7Ozs7Ozs7O0FDQUE7QUFBQTtBQUFBO0FB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RyxDQUFDeEYsT0FBSixDQUFZLFNBQVosRUFBdUIsVUFBVXlGLEtBQVYsRUFBaUJDLEdBQWpCLEVBQXNCO0FBQ2hELFdBQU9BLEdBQUcsQ0FBQ0MsV0FBSixFQUFQO0FBQ0gsR0FGTSxDQUFQO0FBR0g7QUFDTSxTQUFTQyxXQUFULENBQXFCSixHQUFyQixFQUEwQjtBQUM3QixTQUFPQSxHQUFHLENBQUN4RixPQUFKLENBQVksUUFBWixFQUFzQixVQUFVNkYsR0FBVixFQUFlO0FBQ3hDLFdBQU9BLEdBQUcsQ0FBQ0MsTUFBSixDQUFXLENBQVgsRUFBY0gsV0FBZCxLQUE4QkUsR0FBRyxDQUFDRSxNQUFKLENBQVcsQ0FBWCxFQUFjQyxXQUFkLEVBQXJDO0FBQ0gsR0FGTSxDQUFQO0FBR0gsQyIsImZpbGUiOiJhcHB+cHJvZHVjdERldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIGV4dHJhY3RlZCBieSBtaW5pLWNzcy1leHRyYWN0LXBsdWdpbiIsImltcG9ydCAnLi9jYXJ0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcIi4vY29tbW9uL0V2ZW50RW1pdHRlclwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIub24oJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudHMoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb21wb25lbnQub25Jbml0KHNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgZGlzYWJsZUJvZHlTY3JvbGwsIGVuYWJsZUJvZHlTY3JvbGwgfSBmcm9tIFwiLi4vdXRpbC9ib2R5XCI7XG5pbXBvcnQgZGlhbG9nUG9seWZpbGwgZnJvbSAnZGlhbG9nLXBvbHlmaWxsJztcbmltcG9ydCB7IHRvQ2FtZWxDYXNlIH0gZnJvbSBcIi4uL3V0aWwvc3RyaW5nXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBEaWFsb2cgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5faXNPcGVuID0gZmFsc2U7XG4gICAgICAgIHRoaXMuX3RyYW5zaXRpb25UaW1lID0gMDtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgZ2V0IGlzT3BlbigpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzT3BlbjtcbiAgICB9XG4gICAgc2V0IGlzT3Blbih2YWx1ZSkge1xuICAgICAgICB0aGlzLl9pc09wZW4gPSB2YWx1ZTtcbiAgICB9XG4gICAgZ2V0IGNhbWVsRGF0YUF0dHJpYnV0ZSgpIHtcbiAgICAgICAgY29uc3QgdmFsdWUgPSB0aGlzLmRhdGFBdHRyaWJ1dGUucmVwbGFjZSgnZGF0YS0nLCAnJyk7XG4gICAgICAgIHJldHVybiB0b0NhbWVsQ2FzZSh2YWx1ZSk7XG4gICAgfVxuICAgIGdldCB0cmFuc2l0aW9uVGltZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuX3RyYW5zaXRpb25UaW1lKSB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJhbnNpdGlvblRpbWU7XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5fdHJhbnNpdGlvblRpbWUgPSB0aGlzLmdldFRyYW5zaXRpb25UaW1lKCk7XG4gICAgICAgIHJldHVybiB0aGlzLl90cmFuc2l0aW9uVGltZTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5wb2x5ZmlsbERpYWxvZygpO1xuICAgICAgICB0aGlzLnNldEV2ZW50TGlzdGVuZXJzKCk7XG4gICAgfVxuICAgIHNldEV2ZW50TGlzdGVuZXJzKCkge1xuICAgICAgICB0aGlzLmVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignb3BlbicsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3BlbigpO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3RvZ2dsZScsICgpID0+IHtcbiAgICAgICAgICAgIHRoaXMudG9nZ2xlKCk7XG4gICAgICAgIH0pO1xuICAgICAgICBjb25zdCBjbG9zZUJ1dHRvbnMgPSBBcnJheS5mcm9tKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ1tkYXRhLWNsb3NlXScpKTtcbiAgICAgICAgY2xvc2VCdXR0b25zLmZvckVhY2goKGJ1dHRvbikgPT4ge1xuICAgICAgICAgICAgYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICAgICAgdGhpcy5lbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGUpID0+IHtcbiAgICAgICAgICAgIHRoaXMub3V0c2lkZUNsaWNrKGUpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb3V0c2lkZUNsaWNrKGV2ZW50KSB7XG4gICAgICAgIGNvbnN0IHRhcmdldCA9IGV2ZW50LnRhcmdldDtcbiAgICAgICAgaWYgKHRhcmdldCA9PT0gdGhpcy5lbGVtZW50KSB7XG4gICAgICAgICAgICBjb25zdCByZWN0ID0gdGFyZ2V0LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpO1xuICAgICAgICAgICAgY29uc3QgY2xpY2tlZEluRGlhbG9nID0gKHJlY3QudG9wIDw9IGV2ZW50LmNsaWVudFkgJiZcbiAgICAgICAgICAgICAgICBldmVudC5jbGllbnRZIDw9IHJlY3QudG9wICsgcmVjdC5oZWlnaHQgJiZcbiAgICAgICAgICAgICAgICByZWN0LmxlZnQgPD0gZXZlbnQuY2xpZW50WCAmJlxuICAgICAgICAgICAgICAgIGV2ZW50LmNsaWVudFggPD0gcmVjdC5sZWZ0ICsgcmVjdC53aWR0aCk7XG4gICAgICAgICAgICBpZiAoIWNsaWNrZWRJbkRpYWxvZykge1xuICAgICAgICAgICAgICAgIHRoaXMuY2xvc2UoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIXRhcmdldC5jbG9zZXN0KGBbJHt0aGlzLmRhdGFBdHRyaWJ1dGV9PVwiJHt0aGlzLmVsZW1lbnQuZGF0YXNldFtgJHt0aGlzLmNhbWVsRGF0YUF0dHJpYnV0ZX1gXX1cIl1gKSkge1xuICAgICAgICAgICAgdGhpcy5jbG9zZSgpO1xuICAgICAgICB9XG4gICAgfVxuICAgIHRvZ2dsZSgpIHtcbiAgICAgICAgaWYgKHRoaXMuaXNPcGVuKSB7XG4gICAgICAgICAgICB0aGlzLmNsb3NlKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5vcGVuKCk7XG4gICAgfVxuICAgIG9wZW4oKSB7XG4gICAgICAgIGlmICh0aGlzLmlzT3Blbikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGRpc2FibGVCb2R5U2Nyb2xsKCk7XG4gICAgICAgIHRoaXMuZWxlbWVudC5zaG93TW9kYWwoKTtcbiAgICAgICAgdGhpcy5pc09wZW4gPSB0cnVlO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzZXMub3Blbik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc2VzLmNsb3NlZCk7XG4gICAgICAgIH0sIHRoaXMudHJhbnNpdGlvblRpbWUpO1xuICAgIH1cbiAgICBjbG9zZSgpIHtcbiAgICAgICAgZW5hYmxlQm9keVNjcm9sbCgpO1xuICAgICAgICB0aGlzLmVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzZXMub3Blbik7XG4gICAgICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5lbGVtZW50LmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc2VzLmNsb3NlZCk7XG4gICAgICAgICAgICB0aGlzLmVsZW1lbnQuY2xvc2UoKTtcbiAgICAgICAgICAgIHRoaXMuaXNPcGVuID0gZmFsc2U7XG4gICAgICAgIH0sIHRoaXMudHJhbnNpdGlvblRpbWUpO1xuICAgIH1cbiAgICBnZXRUcmFuc2l0aW9uVGltZSgpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBjb25zdCBzdHlsZXMgPSBnZXRDb21wdXRlZFN0eWxlKHRoaXMuZWxlbWVudCk7XG4gICAgICAgIGxldCB0cmFuc2l0aW9uRHVyYXRpb24gPSAoX2EgPSBzdHlsZXMudHJhbnNpdGlvbkR1cmF0aW9uKSAhPT0gbnVsbCAmJiBfYSAhPT0gdm9pZCAwID8gX2EgOiAnJztcbiAgICAgICAgbGV0IGR1cmF0aW9uID0gKHRyYW5zaXRpb25EdXJhdGlvbi5pbmRleE9mKFwibXNcIikgPiAtMSkgPyBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgOiBwYXJzZUZsb2F0KHRyYW5zaXRpb25EdXJhdGlvbikgKiAxMDAwO1xuICAgICAgICByZXR1cm4gZHVyYXRpb24gfHwgNDAwO1xuICAgIH1cbiAgICBwb2x5ZmlsbERpYWxvZygpIHtcbiAgICAgICAgZGlhbG9nUG9seWZpbGwucmVnaXN0ZXJEaWFsb2codGhpcy5lbGVtZW50KTtcbiAgICB9XG59XG4iLCJpbXBvcnQgJy4uLy4uL2Nzcy9jb21wb25lbnRzL19zaWRlUGFuZWwucGNzcyc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gJy4uL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuaW1wb3J0IERpYWxvZyBmcm9tICcuL0RpYWxvZyc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTaWRlUGFuZWwgZXh0ZW5kcyBEaWFsb2cge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmRhdGFBdHRyaWJ1dGUgPSAnZGF0YS1wYW5lbC1uYW1lJztcbiAgICAgICAgdGhpcy5jbGFzc2VzID0ge1xuICAgICAgICAgICAgb3BlbjogJ3NpZGUtcGFuZWwtLW9wZW5lZCcsXG4gICAgICAgICAgICBjbG9zZWQ6ICdzaWRlLXBhbmVsLS1jbG9zZWQnLFxuICAgICAgICAgICAgbGVmdDogJ3NpZGUtcGFuZWwtLWxlZnQnLFxuICAgICAgICAgICAgcmlnaHQ6ICdzaWRlLXBhbmVsLS1yaWdodCdcbiAgICAgICAgfTtcbiAgICB9XG4gICAgc3RhdGljIG9wZW5TaWRlUGFuZWwocGFuZWxJRCwgZWxlbWVudCA9IG51bGwpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBsZXQgcGFuZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKGBbZGF0YS1wYW5lbC1uYW1lPVwiJHtwYW5lbElEfVwiXWApO1xuICAgICAgICBpZiAocGFuZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgIGNvbnN0IHRlbXBsYXRlID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtdGVtcGxhdGU9XCIke3BhbmVsSUR9XCJdYCk7XG4gICAgICAgICAgICBpZiAodGVtcGxhdGUgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICBpZiAoZWxlbWVudCAmJiBlbGVtZW50IGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSBlbGVtZW50LmhyZWY7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgY29uc3QgY2xvbmUgPSB0ZW1wbGF0ZS5jbG9uZU5vZGUodHJ1ZSk7XG4gICAgICAgICAgICBjb25zdCBjb250ZW50ID0gY2xvbmUuY29udGVudDtcbiAgICAgICAgICAgIChfYSA9IHRlbXBsYXRlLnBhcmVudEVsZW1lbnQpID09PSBudWxsIHx8IF9hID09PSB2b2lkIDAgPyB2b2lkIDAgOiBfYS5hcHBlbmRDaGlsZChjb250ZW50KTtcbiAgICAgICAgICAgIHBhbmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtcGFuZWwtbmFtZT1cIiR7cGFuZWxJRH1cIl1gKTtcbiAgICAgICAgICAgIEV2ZW50RW1pdHRlci5lbWl0KCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCBwYW5lbCk7XG4gICAgICAgICAgICBpZiAocGFuZWwgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjb25zdCBzaWRlUGFuZWxJbnN0YW5jZSA9IG5ldyBTaWRlUGFuZWwocGFuZWwpO1xuICAgICAgICAgICAgc2lkZVBhbmVsSW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRvZ2dsZUV2ZW50ID0gbmV3IEN1c3RvbUV2ZW50KCd0b2dnbGUnKTtcbiAgICAgICAgcGFuZWwuZGlzcGF0Y2hFdmVudCh0b2dnbGVFdmVudCk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIHN1cGVyLm9uSW5pdCgpO1xuICAgICAgICBjb25zdCBwYW5lbExpbmtzID0gQXJyYXkuZnJvbShkb2N1bWVudC5xdWVyeVNlbGVjdG9yQWxsKCdbZGF0YS1wYW5lbF0nKSk7XG4gICAgICAgIGZvciAobGV0IGluZGV4ID0gMDsgaW5kZXggPCBwYW5lbExpbmtzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgZWxlbWVudCA9IHBhbmVsTGlua3NbaW5kZXhdO1xuICAgICAgICAgICAgZWxlbWVudC5yZW1vdmVFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQ3JlYXRpb25FdmVudCk7XG4gICAgICAgICAgICBlbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVDcmVhdGlvbkV2ZW50KTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgaGFuZGxlQ3JlYXRpb25FdmVudChldmVudCkge1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBjb25zdCBwYW5lbElEID0gdGhpcy5kYXRhc2V0LnBhbmVsIHx8IFwiXCI7XG4gICAgICAgIC8vIElmIGFscmVhZHkgbG9nZ2VkIGluIGZvbGxvdyBsaW5rXG4gICAgICAgIGlmICh0aGlzIGluc3RhbmNlb2YgSFRNTEFuY2hvckVsZW1lbnRcbiAgICAgICAgICAgICYmIChwYW5lbElEID09PSAnbXktYWNjb3VudC1wYW5lbCcgJiYgZG9jdW1lbnQuYm9keS5jbGFzc0xpc3QuY29udGFpbnMoJ2xvZ2dlZC1pbicpKSkge1xuICAgICAgICAgICAgd2luZG93LmxvY2F0aW9uLmhyZWYgPSB0aGlzLmhyZWY7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwocGFuZWxJRCwgdGhpcyk7XG4gICAgfVxufVxuIiwiY29uc3QgYm9keUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdib2R5Jyk7XG5sZXQgc2Nyb2xsUG9zaXRpb24gPSAwO1xuZXhwb3J0IGZ1bmN0aW9uIGRpc2FibGVCb2R5U2Nyb2xsKCkge1xuICAgIHNjcm9sbFBvc2l0aW9uID0gd2luZG93LnBhZ2VZT2Zmc2V0O1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLm92ZXJmbG93ID0gJ2hpZGRlbic7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucG9zaXRpb24gPSAnZml4ZWQnO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnRvcCA9IGAtJHtzY3JvbGxQb3NpdGlvbn1weGA7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUud2lkdGggPSAnMTAwJSc7XG4gICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNjcm9sbEJlaGF2aW9yID0gJ2luaXRpYWwnO1xufVxuZXhwb3J0IGZ1bmN0aW9uIGVuYWJsZUJvZHlTY3JvbGwoKSB7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ292ZXJmbG93Jyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Bvc2l0aW9uJyk7XG4gICAgYm9keUVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3RvcCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd3aWR0aCcpO1xuICAgIGJvZHlFbGVtZW50LnN0eWxlLnJlbW92ZVByb3BlcnR5KCd0b3AnKTtcbiAgICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc3R5bGUucmVtb3ZlUHJvcGVydHkoJ3Njcm9sbC1iZWhhdmlvcicpO1xuICAgIHdpbmRvdy5zY3JvbGxUbygwLCBzY3JvbGxQb3NpdGlvbik7XG59XG4iLCJleHBvcnQgZnVuY3Rpb24gdG9DYW1lbENhc2Uoc3RyKSB7XG4gICAgcmV0dXJuIHN0ci5yZXBsYWNlKC9cXFcrKC4pL2csIGZ1bmN0aW9uIChtYXRjaCwgY2hyKSB7XG4gICAgICAgIHJldHVybiBjaHIudG9VcHBlckNhc2UoKTtcbiAgICB9KTtcbn1cbmV4cG9ydCBmdW5jdGlvbiB0b1RpdGxlQ2FzZShzdHIpIHtcbiAgICByZXR1cm4gc3RyLnJlcGxhY2UoL1xcd1xcUyovZywgZnVuY3Rpb24gKHR4dCkge1xuICAgICAgICByZXR1cm4gdHh0LmNoYXJBdCgwKS50b1VwcGVyQ2FzZSgpICsgdHh0LnN1YnN0cigxKS50b0xvd2VyQ2FzZSgpO1xuICAgIH0pO1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==