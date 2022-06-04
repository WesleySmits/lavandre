"use strict";
(self["webpackChunklavandre"] = self["webpackChunklavandre"] || []).push([["sustainability"],{

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

/***/ "./assets/js/Sustainability.ts":
/*!*************************************!*\
  !*** ./assets/js/Sustainability.ts ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ SustainabilityModule; }
/* harmony export */ });
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");
/* harmony import */ var _components_StickyHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/StickyHeader */ "./assets/js/components/StickyHeader.ts");


class SustainabilityModule extends _Module__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.components = [_components_StickyHeader__WEBPACK_IMPORTED_MODULE_1__["default"]];
  }

  initialize() {
    super.initialize();
  }

}

(function sustainabilityInit() {
  const sustainabilityModule = new SustainabilityModule();
  sustainabilityModule.initialize();
})();

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

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["assets_js_cart_ts-assets_js_components_AddCouponCode_ts"], function() { return __webpack_exec__("./assets/js/Sustainability.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEtBQUtwQixTQUFsQztBQUNIOztBQUNZLFNBQU5SLE1BQU0sR0FBRztBQUNaLFVBQU1PLE1BQU0sR0FBR1gsUUFBUSxDQUFDaUMsYUFBVCxDQUF1QixpQkFBdkIsQ0FBZjs7QUFDQSxRQUFJLENBQUN0QixNQUFMLEVBQWE7QUFDVDtBQUNIOztBQUNELFVBQU11QixZQUFZLEdBQUcsSUFBSTdCLFlBQUosQ0FBaUJNLE1BQWpCLENBQXJCO0FBQ0F1QixJQUFBQSxZQUFZLENBQUN2QyxVQUFiO0FBQ0g7O0FBL0MrQyIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9TdXN0YWluYWJpbGl0eS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0aWNreUhlYWRlci50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIvKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvbm8tdW5yZXNvbHZlZCAqL1xuLyogZXNsaW50LWRpc2FibGUgaW1wb3J0L2V4dGVuc2lvbnMgKi9cbmltcG9ydCAnLi9jYXJ0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSAnLi9jb21tb24vRXZlbnRFbWl0dGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb21wb25lbnRzKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29tcG9uZW50Lm9uSW5pdChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBNb2R1bGUgZnJvbSAnLi9Nb2R1bGUnO1xuaW1wb3J0IFN0aWNreUhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvU3RpY2t5SGVhZGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1c3RhaW5hYmlsaXR5TW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW1N0aWNreUhlYWRlcl07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4oZnVuY3Rpb24gc3VzdGFpbmFiaWxpdHlJbml0KCkge1xuICAgIGNvbnN0IHN1c3RhaW5hYmlsaXR5TW9kdWxlID0gbmV3IFN1c3RhaW5hYmlsaXR5TW9kdWxlKCk7XG4gICAgc3VzdGFpbmFiaWxpdHlNb2R1bGUuaW5pdGlhbGl6ZSgpO1xufSkoKTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSAnLi4vY29tbW9uL0NvbXBvbmVudCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBTdGlja3lIZWFkZXIgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGhlYWRlcikge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmNsYXNzTmFtZSA9ICd0cmFuc3BhcmVudCc7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBtYWluQmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tYmFubmVyJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogYC0ke3RoaXMuZ2V0SGVhZGVySGVpZ2h0KCl9cHhgLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmICghbWFpbkJhbm5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlbnRyaWVzLCBvYnNlcnZlcik7XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKG1haW5CYW5uZXIpO1xuICAgIH1cbiAgICBvbkNoYW5nZShlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRIZWFkZXJIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlci5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIGFkZENsYXNzKCkge1xuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWUpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcud3ctc2l0ZS1oZWFkZXInKTtcbiAgICAgICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGlja3lIZWFkZXIgPSBuZXcgU3RpY2t5SGVhZGVyKGhlYWRlcik7XG4gICAgICAgIHN0aWNreUhlYWRlci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIk1vZHVsZSIsImNvbnN0cnVjdG9yIiwiZXZlbnRFbWl0dGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDb21wb25lbnRzIiwib24iLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwiY29tcG9uZW50Iiwib25Jbml0IiwiU3RpY2t5SGVhZGVyIiwiU3VzdGFpbmFiaWxpdHlNb2R1bGUiLCJhcmd1bWVudHMiLCJzdXN0YWluYWJpbGl0eUluaXQiLCJzdXN0YWluYWJpbGl0eU1vZHVsZSIsIkNvbXBvbmVudCIsImhlYWRlciIsImNsYXNzTmFtZSIsIm1haW5CYW5uZXIiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsImdldEhlYWRlckhlaWdodCIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib25DaGFuZ2UiLCJvYnNlcnZlIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGllbnRIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5SGVhZGVyIl0sInNvdXJjZVJvb3QiOiIifQ==