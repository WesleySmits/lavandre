(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["home"],{

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

/***/ }),

/***/ "./assets/js/home.ts":
/*!***************************!*\
  !*** ./assets/js/home.ts ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return HomeModule; });
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

},[["./assets/js/home.ts","runtime","app~cart~checkout~home~productDetail"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvTW9kdWxlLnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL1N0aWNreUhlYWRlci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvaG9tZS50cyJdLCJuYW1lcyI6WyJNb2R1bGUiLCJjb25zdHJ1Y3RvciIsImV2ZW50RW1pdHRlciIsIkV2ZW50RW1pdHRlciIsImluaXRpYWxpemUiLCJpbml0aWFsaXplQ29tcG9uZW50cyIsIm9uIiwiZWxlbWVudCIsInNlbGVjdG9yIiwiZG9jdW1lbnQiLCJjb21wb25lbnRzIiwiZm9yRWFjaCIsImNvbXBvbmVudCIsIm9uSW5pdCIsIlN0aWNreUhlYWRlciIsIkNvbXBvbmVudCIsImhlYWRlciIsImNsYXNzTmFtZSIsIm1haW5CYW5uZXIiLCJnZXRFbGVtZW50QnlJZCIsIm9wdGlvbnMiLCJyb290Iiwicm9vdE1hcmdpbiIsImdldEhlYWRlckhlaWdodCIsInRocmVzaG9sZCIsIm9ic2VydmVyIiwiSW50ZXJzZWN0aW9uT2JzZXJ2ZXIiLCJlbnRyaWVzIiwib25DaGFuZ2UiLCJvYnNlcnZlIiwiZW50cnkiLCJpc0ludGVyc2VjdGluZyIsImFkZENsYXNzIiwicmVtb3ZlQ2xhc3MiLCJjbGllbnRIZWlnaHQiLCJjbGFzc0xpc3QiLCJhZGQiLCJyZW1vdmUiLCJxdWVyeVNlbGVjdG9yIiwic3RpY2t5SGVhZGVyIiwiSG9tZU1vZHVsZSIsImFyZ3VtZW50cyIsImhvbWVJbml0IiwiaG9tZU1vZHVsZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNlLE1BQU1BLE1BQU4sQ0FBYTtBQUN4QkMsYUFBVyxHQUFHO0FBQ1YsU0FBS0MsWUFBTCxHQUFvQkMsNERBQXBCO0FBQ0g7O0FBQ0RDLFlBQVUsR0FBRztBQUNULFNBQUtDLG9CQUFMO0FBQ0EsU0FBS0gsWUFBTCxDQUFrQkksRUFBbEIsQ0FBcUIsdUJBQXJCLEVBQStDQyxPQUFELElBQWE7QUFDdkQsV0FBS0Ysb0JBQUwsQ0FBMEJFLE9BQTFCO0FBQ0gsS0FGRDtBQUdIOztBQUNERixzQkFBb0IsQ0FBQ0csUUFBUSxHQUFHQyxRQUFaLEVBQXNCO0FBQ3RDLFNBQUtDLFVBQUwsQ0FBZ0JDLE9BQWhCLENBQXlCQyxTQUFELElBQWU7QUFDbkM7QUFDQUEsZUFBUyxDQUFDQyxNQUFWLENBQWlCTCxRQUFqQjtBQUNILEtBSEQ7QUFJSDs7QUFmdUIsQzs7Ozs7Ozs7Ozs7O0FDRjVCO0FBQUE7QUFBQTtBQUFBO0FBQ2UsTUFBTU0sWUFBTixTQUEyQkMseURBQTNCLENBQXFDO0FBQ2hEZCxhQUFXLENBQUNlLE1BQUQsRUFBUztBQUNoQjtBQUNBLFNBQUtDLFNBQUwsR0FBaUIsYUFBakI7QUFDQSxTQUFLRCxNQUFMLEdBQWNBLE1BQWQ7QUFDSDs7QUFDRFosWUFBVSxHQUFHO0FBQ1QsVUFBTWMsVUFBVSxHQUFHVCxRQUFRLENBQUNVLGNBQVQsQ0FBd0IsYUFBeEIsQ0FBbkI7QUFDQSxVQUFNQyxPQUFPLEdBQUc7QUFDWkMsVUFBSSxFQUFFLElBRE07QUFFWkMsZ0JBQVUsRUFBRyxJQUFHLEtBQUtDLGVBQUwsRUFBdUIsSUFGM0I7QUFHWkMsZUFBUyxFQUFFO0FBSEMsS0FBaEI7O0FBS0EsUUFBSSxDQUFDTixVQUFMLEVBQWlCO0FBQ2I7QUFDSDs7QUFDRCxVQUFNTyxRQUFRLEdBQUcsSUFBSUMsb0JBQUosQ0FBeUIsQ0FBQ0MsT0FBRCxFQUFVRixRQUFWLEtBQXVCO0FBQzdELFdBQUtHLFFBQUwsQ0FBY0QsT0FBZCxFQUF1QkYsUUFBdkI7QUFDSCxLQUZnQixFQUVkTCxPQUZjLENBQWpCO0FBR0FLLFlBQVEsQ0FBQ0ksT0FBVCxDQUFpQlgsVUFBakI7QUFDSDs7QUFDRFUsVUFBUSxDQUFDRCxPQUFELEVBQVVGLFFBQVYsRUFBb0I7QUFDeEJFLFdBQU8sQ0FBQ2hCLE9BQVIsQ0FBaUJtQixLQUFELElBQVc7QUFDdkIsVUFBSUEsS0FBSyxDQUFDQyxjQUFWLEVBQTBCO0FBQ3RCLGFBQUtDLFFBQUw7QUFDSCxPQUZELE1BR0s7QUFDRCxhQUFLQyxXQUFMO0FBQ0g7QUFDSixLQVBEO0FBUUg7O0FBQ0RWLGlCQUFlLEdBQUc7QUFDZCxXQUFPLEtBQUtQLE1BQUwsQ0FBWWtCLFlBQW5CO0FBQ0g7O0FBQ0RGLFVBQVEsR0FBRztBQUNQLFNBQUtoQixNQUFMLENBQVltQixTQUFaLENBQXNCQyxHQUF0QixDQUEwQixLQUFLbkIsU0FBL0I7QUFDSDs7QUFDRGdCLGFBQVcsR0FBRztBQUNWLFNBQUtqQixNQUFMLENBQVltQixTQUFaLENBQXNCRSxNQUF0QixDQUE2QixLQUFLcEIsU0FBbEM7QUFDSDs7QUFDRCxTQUFPSixNQUFQLEdBQWdCO0FBQ1osVUFBTUcsTUFBTSxHQUFHUCxRQUFRLENBQUM2QixhQUFULENBQXVCLGlCQUF2QixDQUFmOztBQUNBLFFBQUksQ0FBQ3RCLE1BQUwsRUFBYTtBQUNUO0FBQ0g7O0FBQ0QsVUFBTXVCLFlBQVksR0FBRyxJQUFJekIsWUFBSixDQUFpQkUsTUFBakIsQ0FBckI7QUFDQXVCLGdCQUFZLENBQUNuQyxVQUFiO0FBQ0g7O0FBL0MrQyxDOzs7Ozs7Ozs7Ozs7QUNEcEQ7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ2UsTUFBTW9DLFVBQU4sU0FBeUJ4QywrQ0FBekIsQ0FBZ0M7QUFDM0NDLGFBQVcsR0FBRztBQUNWLFVBQU0sR0FBR3dDLFNBQVQ7QUFDQSxTQUFLL0IsVUFBTCxHQUFrQixDQUNkSSxnRUFEYyxDQUFsQjtBQUdIOztBQUNEVixZQUFVLEdBQUc7QUFDVCxVQUFNQSxVQUFOO0FBQ0g7O0FBVDBDOztBQVcvQyxDQUFDLFNBQVNzQyxRQUFULEdBQW9CO0FBQ2pCLFFBQU1DLFVBQVUsR0FBRyxJQUFJSCxVQUFKLEVBQW5CO0FBQ0FHLFlBQVUsQ0FBQ3ZDLFVBQVg7QUFDSCxDQUhELEkiLCJmaWxlIjoiaG9tZS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCAnLi9jYXJ0JztcbmltcG9ydCBFdmVudEVtaXR0ZXIgZnJvbSBcIi4vY29tbW9uL0V2ZW50RW1pdHRlclwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIgPSBFdmVudEVtaXR0ZXI7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHRoaXMuaW5pdGlhbGl6ZUNvbXBvbmVudHMoKTtcbiAgICAgICAgdGhpcy5ldmVudEVtaXR0ZXIub24oJ3RlbXBsYXRlLWluc3RhbnRpYXRlZCcsIChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmluaXRpYWxpemVDb21wb25lbnRzKGVsZW1lbnQpO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZUNvbXBvbmVudHMoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMuZm9yRWFjaCgoY29tcG9uZW50KSA9PiB7XG4gICAgICAgICAgICAvLyBAdHMtaWdub3JlXG4gICAgICAgICAgICBjb21wb25lbnQub25Jbml0KHNlbGVjdG9yKTtcbiAgICAgICAgfSk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgU3RpY2t5SGVhZGVyIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihoZWFkZXIpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5jbGFzc05hbWUgPSBcInRyYW5zcGFyZW50XCI7XG4gICAgICAgIHRoaXMuaGVhZGVyID0gaGVhZGVyO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBtYWluQmFubmVyID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ21haW4tYmFubmVyJyk7XG4gICAgICAgIGNvbnN0IG9wdGlvbnMgPSB7XG4gICAgICAgICAgICByb290OiBudWxsLFxuICAgICAgICAgICAgcm9vdE1hcmdpbjogYC0ke3RoaXMuZ2V0SGVhZGVySGVpZ2h0KCl9cHhgLFxuICAgICAgICAgICAgdGhyZXNob2xkOiAwXG4gICAgICAgIH07XG4gICAgICAgIGlmICghbWFpbkJhbm5lcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IG9ic2VydmVyID0gbmV3IEludGVyc2VjdGlvbk9ic2VydmVyKChlbnRyaWVzLCBvYnNlcnZlcikgPT4ge1xuICAgICAgICAgICAgdGhpcy5vbkNoYW5nZShlbnRyaWVzLCBvYnNlcnZlcik7XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgICAgICBvYnNlcnZlci5vYnNlcnZlKG1haW5CYW5uZXIpO1xuICAgIH1cbiAgICBvbkNoYW5nZShlbnRyaWVzLCBvYnNlcnZlcikge1xuICAgICAgICBlbnRyaWVzLmZvckVhY2goKGVudHJ5KSA9PiB7XG4gICAgICAgICAgICBpZiAoZW50cnkuaXNJbnRlcnNlY3RpbmcpIHtcbiAgICAgICAgICAgICAgICB0aGlzLmFkZENsYXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICB0aGlzLnJlbW92ZUNsYXNzKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBnZXRIZWFkZXJIZWlnaHQoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhlYWRlci5jbGllbnRIZWlnaHQ7XG4gICAgfVxuICAgIGFkZENsYXNzKCkge1xuICAgICAgICB0aGlzLmhlYWRlci5jbGFzc0xpc3QuYWRkKHRoaXMuY2xhc3NOYW1lKTtcbiAgICB9XG4gICAgcmVtb3ZlQ2xhc3MoKSB7XG4gICAgICAgIHRoaXMuaGVhZGVyLmNsYXNzTGlzdC5yZW1vdmUodGhpcy5jbGFzc05hbWUpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KCkge1xuICAgICAgICBjb25zdCBoZWFkZXIgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKFwiLnd3LXNpdGUtaGVhZGVyXCIpO1xuICAgICAgICBpZiAoIWhlYWRlcikge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHN0aWNreUhlYWRlciA9IG5ldyBTdGlja3lIZWFkZXIoaGVhZGVyKTtcbiAgICAgICAgc3RpY2t5SGVhZGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgTW9kdWxlIGZyb20gJy4vTW9kdWxlJztcbmltcG9ydCBTdGlja3lIZWFkZXIgZnJvbSAnLi9jb21wb25lbnRzL1N0aWNreUhlYWRlcic7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBIb21lTW9kdWxlIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW1xuICAgICAgICAgICAgU3RpY2t5SGVhZGVyXG4gICAgICAgIF07XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4oZnVuY3Rpb24gaG9tZUluaXQoKSB7XG4gICAgY29uc3QgaG9tZU1vZHVsZSA9IG5ldyBIb21lTW9kdWxlKCk7XG4gICAgaG9tZU1vZHVsZS5pbml0aWFsaXplKCk7XG59KSgpO1xuIl0sInNvdXJjZVJvb3QiOiIifQ==