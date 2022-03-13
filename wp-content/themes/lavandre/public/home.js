"use strict";
(self["webpackChunklavandre"] = self["webpackChunklavandre"] || []).push([["home"],{

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

/***/ "./assets/js/home.ts":
/*!***************************!*\
  !*** ./assets/js/home.ts ***!
  \***************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": function() { return /* binding */ HomeModule; }
/* harmony export */ });
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");
/* harmony import */ var _components_StickyHeader__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/StickyHeader */ "./assets/js/components/StickyHeader.ts");


class HomeModule extends _Module__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor() {
    super(...arguments);
    this.components = [_components_StickyHeader__WEBPACK_IMPORTED_MODULE_1__["default"]];
  }

  initialize() {
    super.initialize();
  }

}

(function homeInit() {
  const homeModule = new HomeModule();
  homeModule.initialize();
})();

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ var __webpack_exec__ = function(moduleId) { return __webpack_require__(__webpack_require__.s = moduleId); }
/******/ __webpack_require__.O(0, ["assets_js_cart_ts-assets_js_components_AddCouponCode_ts"], function() { return __webpack_exec__("./assets/js/home.ts"); });
/******/ var __webpack_exports__ = __webpack_require__.O();
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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LEdBQUd1QyxTQUFUO0FBQ0EsU0FBSy9CLFVBQUwsR0FBa0IsQ0FBQ0ssZ0VBQUQsQ0FBbEI7QUFDSDs7QUFDRFgsRUFBQUEsVUFBVSxHQUFHO0FBQ1QsVUFBTUEsVUFBTjtBQUNIOztBQVAwQzs7QUFTL0MsQ0FBQyxTQUFTc0MsUUFBVCxHQUFvQjtBQUNqQixRQUFNQyxVQUFVLEdBQUcsSUFBSUgsVUFBSixFQUFuQjtBQUNBRyxFQUFBQSxVQUFVLENBQUN2QyxVQUFYO0FBQ0gsQ0FIRCIsInNvdXJjZXMiOlsid2VicGFjazovL2xhdmFuZHJlLy4vYXNzZXRzL2pzL01vZHVsZS50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0aWNreUhlYWRlci50cyIsIndlYnBhY2s6Ly9sYXZhbmRyZS8uL2Fzc2V0cy9qcy9ob21lLnRzIl0sInNvdXJjZXNDb250ZW50IjpbIi8qIGVzbGludC1kaXNhYmxlIGltcG9ydC9uby11bnJlc29sdmVkICovXG4vKiBlc2xpbnQtZGlzYWJsZSBpbXBvcnQvZXh0ZW5zaW9ucyAqL1xuaW1wb3J0ICcuL2NhcnQnO1xuaW1wb3J0IEV2ZW50RW1pdHRlciBmcm9tICcuL2NvbW1vbi9FdmVudEVtaXR0ZXInO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIub24oJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudHMoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb21wb25lbnQub25Jbml0KHNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tICcuLi9jb21tb24vQ29tcG9uZW50JztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNreUhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoaGVhZGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gJ3RyYW5zcGFyZW50JztcbiAgICAgICAgdGhpcy5oZWFkZXIgPSBoZWFkZXI7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IG1haW5CYW5uZXIgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFpbi1iYW5uZXInKTtcbiAgICAgICAgY29uc3Qgb3B0aW9ucyA9IHtcbiAgICAgICAgICAgIHJvb3Q6IG51bGwsXG4gICAgICAgICAgICByb290TWFyZ2luOiBgLSR7dGhpcy5nZXRIZWFkZXJIZWlnaHQoKX1weGAsXG4gICAgICAgICAgICB0aHJlc2hvbGQ6IDBcbiAgICAgICAgfTtcbiAgICAgICAgaWYgKCFtYWluQmFubmVyKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMsIG9ic2VydmVyKSA9PiB7XG4gICAgICAgICAgICB0aGlzLm9uQ2hhbmdlKGVudHJpZXMsIG9ic2VydmVyKTtcbiAgICAgICAgfSwgb3B0aW9ucyk7XG4gICAgICAgIG9ic2VydmVyLm9ic2VydmUobWFpbkJhbm5lcik7XG4gICAgfVxuICAgIG9uQ2hhbmdlKGVudHJpZXMsIG9ic2VydmVyKSB7XG4gICAgICAgIGVudHJpZXMuZm9yRWFjaCgoZW50cnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlbnRyeS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgICAgICAgIHRoaXMuYWRkQ2xhc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlQ2xhc3MoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGdldEhlYWRlckhlaWdodCgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGVhZGVyLmNsaWVudEhlaWdodDtcbiAgICB9XG4gICAgYWRkQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5hZGQodGhpcy5jbGFzc05hbWUpO1xuICAgIH1cbiAgICByZW1vdmVDbGFzcygpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LnJlbW92ZSh0aGlzLmNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoKSB7XG4gICAgICAgIGNvbnN0IGhlYWRlciA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy53dy1zaXRlLWhlYWRlcicpO1xuICAgICAgICBpZiAoIWhlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0aWNreUhlYWRlciA9IG5ldyBTdGlja3lIZWFkZXIoaGVhZGVyKTtcbiAgICAgICAgc3RpY2t5SGVhZGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTW9kdWxlIGZyb20gJy4vTW9kdWxlJztcbmltcG9ydCBTdGlja3lIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL1N0aWNreUhlYWRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lTW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW1N0aWNreUhlYWRlcl07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4oZnVuY3Rpb24gaG9tZUluaXQoKSB7XG4gICAgY29uc3QgaG9tZU1vZHVsZSA9IG5ldyBIb21lTW9kdWxlKCk7XG4gICAgaG9tZU1vZHVsZS5pbml0aWFsaXplKCk7XG59KSgpO1xuIl0sIm5hbWVzIjpbIkV2ZW50RW1pdHRlciIsIk1vZHVsZSIsImNvbnN0cnVjdG9yIiwiZXZlbnRFbWl0dGVyIiwiaW5pdGlhbGl6ZSIsImluaXRpYWxpemVDb21wb25lbnRzIiwib24iLCJlbGVtZW50Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImNvbXBvbmVudHMiLCJmb3JFYWNoIiwiY29tcG9uZW50Iiwib25Jbml0IiwiQ29tcG9uZW50IiwiU3RpY2t5SGVhZGVyIiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibWFpbkJhbm5lciIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwiZ2V0SGVhZGVySGVpZ2h0IiwidGhyZXNob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvbkNoYW5nZSIsIm9ic2VydmUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNsaWVudEhlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdGlja3lIZWFkZXIiLCJIb21lTW9kdWxlIiwiYXJndW1lbnRzIiwiaG9tZUluaXQiLCJob21lTW9kdWxlIl0sInNvdXJjZVJvb3QiOiIifQ==