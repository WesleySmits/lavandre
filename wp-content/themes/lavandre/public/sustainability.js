(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["sustainability"],{

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

/***/ "./assets/js/Sustainability.ts":
/*!*************************************!*\
  !*** ./assets/js/Sustainability.ts ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return SustainabilityModule; });
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return StickyHeader; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");

class StickyHeader extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(header) {
    super();
    this.className = "transparent";
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
    const header = document.querySelector(".ww-site-header");

    if (!header) {
      return;
    }

    const stickyHeader = new StickyHeader(header);
    stickyHeader.initialize();
  }

}

/***/ })

},[["./assets/js/Sustainability.ts","runtime","app~cart~checkout~home~productDetail~sustainability"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTW9kdWxlLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9TdXN0YWluYWJpbGl0eS50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9TdGlja3lIZWFkZXIudHMiXSwibmFtZXMiOlsiTW9kdWxlIiwiY29uc3RydWN0b3IiLCJldmVudEVtaXR0ZXIiLCJFdmVudEVtaXR0ZXIiLCJpbml0aWFsaXplIiwiaW5pdGlhbGl6ZUNvbXBvbmVudHMiLCJvbiIsImVsZW1lbnQiLCJzZWxlY3RvciIsImRvY3VtZW50IiwiY29tcG9uZW50cyIsImZvckVhY2giLCJjb21wb25lbnQiLCJvbkluaXQiLCJTdXN0YWluYWJpbGl0eU1vZHVsZSIsImFyZ3VtZW50cyIsIlN0aWNreUhlYWRlciIsInN1c3RhaW5hYmlsaXR5SW5pdCIsInN1c3RhaW5hYmlsaXR5TW9kdWxlIiwiQ29tcG9uZW50IiwiaGVhZGVyIiwiY2xhc3NOYW1lIiwibWFpbkJhbm5lciIsImdldEVsZW1lbnRCeUlkIiwib3B0aW9ucyIsInJvb3QiLCJyb290TWFyZ2luIiwiZ2V0SGVhZGVySGVpZ2h0IiwidGhyZXNob2xkIiwib2JzZXJ2ZXIiLCJJbnRlcnNlY3Rpb25PYnNlcnZlciIsImVudHJpZXMiLCJvbkNoYW5nZSIsIm9ic2VydmUiLCJlbnRyeSIsImlzSW50ZXJzZWN0aW5nIiwiYWRkQ2xhc3MiLCJyZW1vdmVDbGFzcyIsImNsaWVudEhlaWdodCIsImNsYXNzTGlzdCIsImFkZCIsInJlbW92ZSIsInF1ZXJ5U2VsZWN0b3IiLCJzdGlja3lIZWFkZXIiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDZSxNQUFNQSxNQUFOLENBQWE7QUFDeEJDLGFBQVcsR0FBRztBQUNWLFNBQUtDLFlBQUwsR0FBb0JDLDREQUFwQjtBQUNIOztBQUNEQyxZQUFVLEdBQUc7QUFDVCxTQUFLQyxvQkFBTDtB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dGVudCI6WyJpbXBvcnQgJy4vY2FydCc7XG5pbXBvcnQgRXZlbnRFbWl0dGVyIGZyb20gXCIuL2NvbW1vbi9FdmVudEVtaXR0ZXJcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIE1vZHVsZSB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyID0gRXZlbnRFbWl0dGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKCk7XG4gICAgICAgIHRoaXMuZXZlbnRFbWl0dGVyLm9uKCd0ZW1wbGF0ZS1pbnN0YW50aWF0ZWQnLCAoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5pbml0aWFsaXplQ29tcG9uZW50cyhlbGVtZW50KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGluaXRpYWxpemVDb21wb25lbnRzKHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzLmZvckVhY2goKGNvbXBvbmVudCkgPT4ge1xuICAgICAgICAgICAgLy8gQHRzLWlnbm9yZVxuICAgICAgICAgICAgY29tcG9uZW50Lm9uSW5pdChzZWxlY3Rvcik7XG4gICAgICAgIH0pO1xuICAgIH1cbn1cbiIsImltcG9ydCBNb2R1bGUgZnJvbSAnLi9Nb2R1bGUnO1xuaW1wb3J0IFN0aWNreUhlYWRlciBmcm9tICcuL2NvbXBvbmVudHMvU3RpY2t5SGVhZGVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN1c3RhaW5hYmlsaXR5TW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW1xuICAgICAgICAgICAgU3RpY2t5SGVhZGVyXG4gICAgICAgIF07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4oZnVuY3Rpb24gc3VzdGFpbmFiaWxpdHlJbml0KCkge1xuICAgIGNvbnN0IHN1c3RhaW5hYmlsaXR5TW9kdWxlID0gbmV3IFN1c3RhaW5hYmlsaXR5TW9kdWxlKCk7XG4gICAgc3VzdGFpbmFiaWxpdHlNb2R1bGUuaW5pdGlhbGl6ZSgpO1xufSkoKTtcbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbW1vbi9Db21wb25lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFN0aWNreUhlYWRlciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoaGVhZGVyKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2xhc3NOYW1lID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICB0aGlzLmhlYWRlciA9IGhlYWRlcjtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgbWFpbkJhbm5lciA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYWluLWJhbm5lcicpO1xuICAgICAgICBjb25zdCBvcHRpb25zID0ge1xuICAgICAgICAgICAgcm9vdDogbnVsbCxcbiAgICAgICAgICAgIHJvb3RNYXJnaW46IGAtJHt0aGlzLmdldEhlYWRlckhlaWdodCgpfXB4YCxcbiAgICAgICAgICAgIHRocmVzaG9sZDogMFxuICAgICAgICB9O1xuICAgICAgICBpZiAoIW1haW5CYW5uZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcywgb2JzZXJ2ZXIpID0+IHtcbiAgICAgICAgICAgIHRoaXMub25DaGFuZ2UoZW50cmllcywgb2JzZXJ2ZXIpO1xuICAgICAgICB9LCBvcHRpb25zKTtcbiAgICAgICAgb2JzZXJ2ZXIub2JzZXJ2ZShtYWluQmFubmVyKTtcbiAgICB9XG4gICAgb25DaGFuZ2UoZW50cmllcywgb2JzZXJ2ZXIpIHtcbiAgICAgICAgZW50cmllcy5mb3JFYWNoKChlbnRyeSkgPT4ge1xuICAgICAgICAgICAgaWYgKGVudHJ5LmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgICAgICAgdGhpcy5hZGRDbGFzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSB7XG4gICAgICAgICAgICAgICAgdGhpcy5yZW1vdmVDbGFzcygpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgZ2V0SGVhZGVySGVpZ2h0KCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oZWFkZXIuY2xpZW50SGVpZ2h0O1xuICAgIH1cbiAgICBhZGRDbGFzcygpIHtcbiAgICAgICAgdGhpcy5oZWFkZXIuY2xhc3NMaXN0LmFkZCh0aGlzLmNsYXNzTmFtZSk7XG4gICAgfVxuICAgIHJlbW92ZUNsYXNzKCkge1xuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QucmVtb3ZlKHRoaXMuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdCgpIHtcbiAgICAgICAgY29uc3QgaGVhZGVyID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcihcIi53dy1zaXRlLWhlYWRlclwiKTtcbiAgICAgICAgaWYgKCFoZWFkZXIpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBzdGlja3lIZWFkZXIgPSBuZXcgU3RpY2t5SGVhZGVyKGhlYWRlcik7XG4gICAgICAgIHN0aWNreUhlYWRlci5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==