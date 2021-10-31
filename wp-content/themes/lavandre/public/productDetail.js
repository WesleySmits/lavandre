(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["productDetail"],{

/***/ "./assets/js/components/AjaxAddToCart.ts":
/*!***********************************************!*\
  !*** ./assets/js/components/AjaxAddToCart.ts ***!
  \***********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return AjaxAddToCart; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _ui_SidePanel__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../ui/SidePanel */ "./assets/js/ui/SidePanel.ts");
/* harmony import */ var _util_cart__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../util/cart */ "./assets/js/util/cart.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");
/* harmony import */ var _cart__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../cart */ "./assets/js/cart.ts");





class AjaxAddToCart extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(form) {
    super();
    this.variationData = [];
    this.ajaxEndpoint = `${window.location.origin}/wp-admin/admin-ajax.php`;
    this.form = form;
    this.button = this.form.querySelector(`button[name="add-to-cart"]`);
    this.variationFields = Array.from(this.form.querySelectorAll('.product-detail__variations input'));
    this.handleChangeVariationAttribute();
    const currentSizeName = 'attribute_pa_size';
    const currentSizeValue = this.form[currentSizeName].value;
    this.handleChangeVariationAttribute(currentSizeName, currentSizeValue);
  }

  initialize() {
    this.variationFields.forEach(variation => {
      variation.addEventListener('change', () => {
        this.handleChangeVariationAttribute(variation.name, variation.value);
      });
    });
    this.button.addEventListener('click', this.handleAddToCartClick.bind(this));
  }

  handleChangeVariationAttribute(name = '', value = '') {
    const currentOptions = {};

    for (let index = 0; index < this.variationFields.length; index++) {
      const variation = this.variationFields[index];
      const name = variation.name;

      if (!this.form[name].value) {
        return;
      }

      currentOptions[name] = this.form[name].value;
    }

    const variationID = this.findMatchingVariant(currentOptions);
    this.disableNonExistingVariants(name, value);

    if (!variationID) {
      this.setFormInvalid();
      return;
    }

    this.form['variation_id'].value = variationID;
  }

  setFormInvalid() {
    this.form['product_id'].value = '';
    this.form['variation_id'].value = '';
  }

  disableNonExistingVariants(name = '', value = '') {
    if (name === 'attribute_pa_amount') {
      return;
    }

    if (name && value) {
      this.variationFields.forEach(field => {
        if (field.name !== name) {
          field.disabled = true;
        }
      });
    }

    this.variationData.forEach(variation => {
      const attributes = variation.attributes;

      if (!attributes) {
        throw new Error('no attributes');
      }

      if (attributes[name] !== value) {
        return;
      }

      this.variationFields.forEach(field => {
        const match = attributes[field.name];

        if (match === field.value) {
          field.disabled = false;
        }
      });
    });
  }

  findMatchingVariant(currentOptions) {
    let variationID = null;

    if (!this.variationData.length) {
      const data = this.form.dataset.product_variations;

      if (!data) {
        return null;
      }

      this.variationData = JSON.parse(data);

      if (!this.variationData) {
        return null;
      }
    }

    this.variationData.forEach(variation => {
      const attributes = variation.attributes;

      if (!attributes) {
        throw new Error('no attributes');
      }

      for (const [key, value] of Object.entries(attributes)) {
        if (currentOptions[key] !== value) {
          return;
        }
      }

      variationID = variation['variation_id'];
    });
    return variationID;
  }

  handleAddToCartClick(event) {
    var _a;

    event.preventDefault();
    let variation_id = 0;
    const productIdElement = this.form.querySelector('[name="variation_id"]');
    const variationIdElement = this.form.querySelector('[name="variation_id"]');

    if (variationIdElement) {
      variation_id = Number(variationIdElement.value);
    }

    let formIsValid = true;
    const fields = Array.from(this.form.querySelectorAll('input'));
    fields.forEach(field => {
      field.dispatchEvent(new Event('validate'));

      if (!field.validity.valid) {
        formIsValid = false;
      }
    });

    if (!formIsValid) {
      throw new Error('Product add form is not valid');
    }

    const quantity = Number((_a = this.form.querySelector('input[name="quantity"]')) === null || _a === void 0 ? void 0 : _a.value) || 1;
    const data = {
      action: 'ajaxaddtocart',
      product_id: this.button.value,
      quantity: quantity.toString(),
      variation_id: variation_id.toString()
    };
    Object(_util_requests__WEBPACK_IMPORTED_MODULE_3__["sendAjaxRequest"])(data, this.ajaxEndpoint, null, this.onSuccess.bind(this), this.onFailure.bind(this), undefined, this.button);
    return false;
  }

  onSuccess(response) {
    if (response.success === false) {
      throw new Error('something is wrong');
    }

    _ui_SidePanel__WEBPACK_IMPORTED_MODULE_1__["default"].openSidePanel('cart-panel');
    _cart__WEBPACK_IMPORTED_MODULE_4__["default"].updateCart();

    if (response.data.cartAmount) {
      Object(_util_cart__WEBPACK_IMPORTED_MODULE_2__["addOrUpdateCartTotals"])(response.data.cartAmount);
    }
  }

  onFailure() {
    const form = this.button.closest('form');

    if (form === null) {
      return;
    }

    form.submit();
  }

  static onInit(selector = document) {
    const addToCartForm = selector.querySelector('form.cart');

    if (addToCartForm === null) {
      return;
    }

    const ajaxAddToCart = new AjaxAddToCart(addToCartForm);
    ajaxAddToCart.initialize();
  }

}

/***/ }),

/***/ "./assets/js/components/ChangeVariantColor.ts":
/*!****************************************************!*\
  !*** ./assets/js/components/ChangeVariantColor.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeVariantColor; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_string__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/string */ "./assets/js/util/string.ts");


class ChangeVariantColor extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elements) {
    super();
    this.elements = elements;
  }

  initialize() {
    const label = document.querySelector('.product-detail__variation__label--color');

    if (!this.elements.length || !label) {
      return;
    }

    const text = label.textContent;
    this.elements.forEach(radio => {
      radio.addEventListener('change', () => {
        const value = Object(_util_string__WEBPACK_IMPORTED_MODULE_1__["toTitleCase"])(radio.value);

        if (!value) {
          return;
        }

        label.innerText = `${text}: ${value}`;
      });

      if (radio.checked) {
        radio.dispatchEvent(new Event('change'));
      }
    });
  }

  static onInit(selector = document) {
    const radioButtons = Array.from(selector.querySelectorAll('[name="attribute_pa_color"]'));

    if (!radioButtons.length) {
      return;
    }

    const instance = new ChangeVariantColor(radioButtons);
    instance.initialize();
  }

}

/***/ }),

/***/ "./assets/js/components/ChangeVariantPrice.ts":
/*!****************************************************!*\
  !*** ./assets/js/components/ChangeVariantPrice.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ChangeVariantPrice; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");
/* harmony import */ var _util_requests__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../util/requests */ "./assets/js/util/requests.ts");


class ChangeVariantPrice extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(elements) {
    super();
    this.ajaxEndpoint = `${window.location.origin}/wp-admin/admin-ajax.php`;
    this.regularPriceElement = null;
    this.salePriceElement = null;
    this.elements = elements;
  }

  initialize() {
    this.regularPriceElement = document.querySelector('.product-detail__price ins [data-product-price]') || document.querySelector('.product-detail__price [data-product-price]');
    this.salePriceElement = document.querySelector('.product-detail__price del [data-product-price]');

    if (!this.salePriceElement && !this.regularPriceElement) {
      return;
    }

    const form = this.elements[0].closest('form');

    if (!form) {
      return;
    }

    const product_id = form.dataset.product_id;

    if (!product_id) {
      return;
    }

    this.elements.forEach(radio => {
      radio.addEventListener('change', () => {
        const variationIdElement = form.querySelector('[name="variation_id"]');
        const variation_id = variationIdElement === null || variationIdElement === void 0 ? void 0 : variationIdElement.value;

        if (!variation_id || !product_id) {
          return;
        }

        const data = {
          action: 'ajaxgetvariantprice',
          product_id: product_id,
          variation_id: variation_id
        };
        Object(_util_requests__WEBPACK_IMPORTED_MODULE_1__["sendAjaxRequest"])(data, this.ajaxEndpoint, null, this.onSuccess.bind(this));
      });
    });
  }

  onSuccess(response) {
    if (!response.data || !response.data.salePrice && !response.data.regularPrice) {
      throw new Error('No data');
    }

    const regularPrice = Number(response.data.regularPrice).toFixed(2);
    const salePrice = Number(response.data.salePrice).toFixed(2);

    if (this.regularPriceElement && regularPrice) {
      this.regularPriceElement.innerText = regularPrice;
    }

    if (this.salePriceElement && salePrice) {
      this.salePriceElement.innerText = salePrice;
    }
  }

  static onInit(selector = document) {
    const radioButtons = Array.from(selector.querySelectorAll('.product-detail__variations input[type="radio'));

    if (!radioButtons.length) {
      return;
    }

    const instance = new ChangeVariantPrice(radioButtons);
    instance.initialize();
  }

}

/***/ }),

/***/ "./assets/js/components/ImageGallery.ts":
/*!**********************************************!*\
  !*** ./assets/js/components/ImageGallery.ts ***!
  \**********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ImageGallery; });
/* harmony import */ var _common_Component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../common/Component */ "./assets/js/common/Component.ts");

class ImageGallery extends _common_Component__WEBPACK_IMPORTED_MODULE_0__["default"] {
  constructor(element) {
    super();
    this.element = element;
  }

  initialize() {
    const thumbnailAnchors = Array.from(this.element.querySelectorAll('.product-detail__gallery__thumbnails a'));
    thumbnailAnchors.forEach(anchor => {
      anchor.addEventListener('click', event => {
        event.preventDefault();
        const id = anchor.dataset.thumbnailId;
        const image = this.element.querySelector(`[data-image-id="${id}"]`);

        if (image === null) {
          return;
        }

        const imageParent = image.parentElement;
        Array.from(imageParent.querySelectorAll('li.active')).forEach(element => {
          element.classList.remove('active');
        });
        image.classList.add('active');
      });
    });
  }

  static onInit(selector = document) {
    const element = selector.querySelector('.product-detail__gallery');

    if (element === null) {
      return;
    }

    const instance = new ImageGallery(element);
    instance.initialize();
  }

}

/***/ }),

/***/ "./assets/js/productDetail.ts":
/*!************************************!*\
  !*** ./assets/js/productDetail.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ProductDetail; });
/* harmony import */ var _components_AjaxAddToCart__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./components/AjaxAddToCart */ "./assets/js/components/AjaxAddToCart.ts");
/* harmony import */ var _components_AmountSelector__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./components/AmountSelector */ "./assets/js/components/AmountSelector.ts");
/* harmony import */ var _components_ChangeVariantColor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./components/ChangeVariantColor */ "./assets/js/components/ChangeVariantColor.ts");
/* harmony import */ var _components_ChangeVariantPrice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/ChangeVariantPrice */ "./assets/js/components/ChangeVariantPrice.ts");
/* harmony import */ var _components_ImageGallery__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/ImageGallery */ "./assets/js/components/ImageGallery.ts");
/* harmony import */ var _Module__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./Module */ "./assets/js/Module.ts");






class ProductDetail extends _Module__WEBPACK_IMPORTED_MODULE_5__["default"] {
  constructor() {
    super(...arguments);
    this.components = [_components_AjaxAddToCart__WEBPACK_IMPORTED_MODULE_0__["default"], _components_AmountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], _components_ImageGallery__WEBPACK_IMPORTED_MODULE_4__["default"], _components_ChangeVariantPrice__WEBPACK_IMPORTED_MODULE_3__["default"], _components_ChangeVariantColor__WEBPACK_IMPORTED_MODULE_2__["default"]];
  }

}

(function productDetailInit() {
  const productDetail = new ProductDetail();
  productDetail.initialize();
})();

/***/ })

},[["./assets/js/productDetail.ts","runtime","vendors~app~productDetail","app~cart~checkout~home~productDetail","app~productDetail"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BamF4QWRkVG9DYXJ0LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9DaGFuZ2VWYXJpYW50UHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wcm9kdWN0RGV0YWlsLnRzIl0sIm5hbWVzIjpbIkFqYXhBZGRUb0NhcnQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImZvcm0iLCJ2YXJpYXRpb25EYXRhIiwiYWpheEVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yIiwidmFyaWF0aW9uRmllbGRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZSIsImN1cnJlbnRTaXplTmFtZSIsImN1cnJlbnRTaXplVmFsdWUiLCJ2YWx1ZSIsImluaXRpYWxpemUiLCJmb3JFYWNoIiwidmFyaWF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hbWUiLCJoYW5kbGVBZGRUb0NhcnRDbGljayIsImJpbmQiLCJjdXJyZW50T3B0aW9ucyIsImluZGV4IiwibGVuZ3RoIiwidmFyaWF0aW9uSUQiLCJmaW5kTWF0Y2hpbmdWYXJpYW50IiwiZGlzYWJsZU5vbkV4aXN0aW5nVmFyaWFudHMiLCJzZXRGb3JtSW52YWxpZCIsImZpZWxkIiwiZGlzYWJsZWQiLCJhdHRyaWJ1dGVzIiwiRXJyb3IiLCJtYXRjaCIsImRhdGEiLCJkYXRhc2V0IiwicHJvZHVjdF92YXJpYXRpb25zIiwiSlNPTiIsInBhcnNlIiwia2V5IiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50IiwiX2EiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhdGlvbl9pZCIsInByb2R1Y3RJZEVsZW1lbnQiLCJ2YXJpYXRpb25JZEVsZW1lbnQiLCJOdW1iZXIiLCJmb3JtSXNWYWxpZCIsImZpZWxkcyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJxdWFudGl0eSIsImFjdGlvbiIsInByb2R1Y3RfaWQiLCJ0b1N0cmluZyIsInNlbmRBamF4UmVxdWVzdCIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwic3VjY2VzcyIsIlNpZGVQYW5lbCIsIm9wZW5TaWRlUGFuZWwiLCJDYXJ0IiwidXBkYXRlQ2FydCIsImNhcnRBbW91bnQiLCJhZGRPclVwZGF0ZUNhcnRUb3RhbHMiLCJjbG9zZXN0Iiwic3VibWl0Iiwib25Jbml0Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImFkZFRvQ2FydEZvcm0iLCJhamF4QWRkVG9DYXJ0IiwiQ2hhbmdlVmFyaWFudENvbG9yIiwiZWxlbWVudHMiLCJsYWJlbCIsInRleHQiLCJ0ZXh0Q29udGVudCIsInJhZGlvIiwidG9UaXRsZUNhc2UiLCJpbm5lclRleHQiLCJjaGVja2VkIiwicmFkaW9CdXR0b25zIiwiaW5zdGFuY2UiLCJDaGFuZ2VWYXJpYW50UHJpY2UiLCJyZWd1bGFyUHJpY2VFbGVtZW50Iiwic2FsZVByaWNlRWxlbWVudCIsInNhbGVQcmljZSIsInJlZ3VsYXJQcmljZSIsInRvRml4ZWQiLCJJbWFnZUdhbGxlcnkiLCJlbGVtZW50IiwidGh1bWJuYWlsQW5jaG9ycyIsImFuY2hvciIsImlkIiwidGh1bWJuYWlsSWQiLCJpbWFnZSIsImltYWdlUGFyZW50IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIlByb2R1Y3REZXRhaWwiLCJNb2R1bGUiLCJhcmd1bWVudHMiLCJjb21wb25lbnRzIiwiQW1vdW50U2VsZWN0b3IiLCJwcm9kdWN0RGV0YWlsSW5pdCIsInByb2R1Y3REZXRhaWwiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxNQUFNQSxhQUFOLFNBQTRCQyx5REFBNUIsQ0FBc0M7QUFDakRDLGFBQVcsQ0FBQ0MsSUFBRCxFQUFPO0FBQ2Q7QUFDQSxTQUFLQyxhQUFMLEdBQXFCLEVBQXJCO0FBQ0EsU0FBS0MsWUFBTCxHQUFxQixHQUFFQyxNQUFNLENBQUNDLFFBQVAsQ0FBZ0JDLE1BQU8sMEJBQTlDO0FBQ0EsU0FBS0wsSUFBTCxHQUFZQSxJQUFaO0FBQ0EsU0FBS00sTUFBTCxHQUFjLEtBQUtOLElBQUwsQ0FBVU8sYUFBVixDQUF5Qiw0QkFBekIsQ0FBZDtBQUNBLFNBQUtDLGVBQUwsR0FBdUJDLEtBQUssQ0FBQ0MsSUFBTixDQUFXLEtBQUtWLElBQUwsQ0FBVVcsZ0JBQVYsQ0FBMkIsbUNBQTNCLENBQVgsQ0FBdkI7QUFDQSxTQUFLQyw4QkFBTDtBQUNBLFVBQU1DLGVBQWUsR0FBRyxtQkFBeEI7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBRyxLQUFLZCxJQUFMLENBQVVhLGVBQVYsRUFBMkJFLEtBQXBEO0FBQ0EsU0FBS0gsOEJBQUwsQ0FBb0NDLGVBQXBDLEVBQXFEQyxnQkFBckQ7QUFDSDs7QUFDREUsWUFBVSxHQUFHO0FBQ1QsU0FBS1IsZUFBTCxDQUFxQlMsT0FBckIsQ0FBOEJDLFNBQUQsSUFBZTtBQUN4Q0EsZUFBUyxDQUFDQyxnQkFBVixDQUEyQixRQUEzQixFQUFxQyxNQUFNO0FBQ3ZDLGFBQUtQLDhCQUFMLENBQW9DTSxTQUFTLENBQUNFLElBQTlDLEVBQW9ERixTQUFTLENBQUNILEtBQTlEO0FBQ0gsT0FGRDtBQUdILEtBSkQ7QUFLQSxTQUFLVCxNQUFMLENBQVlhLGdCQUFaLENBQTZCLE9BQTdCLEVBQXNDLEtBQUtFLG9CQUFMLENBQTBCQyxJQUExQixDQUErQixJQUEvQixDQUF0QztBQUNIOztBQUNEVixnQ0FBOEIsQ0FBQ1EsSUFBSSxHQUFHLEVBQVIsRUFBWUwsS0FBSyxHQUFHLEVBQXBCLEVBQXdCO0FBQ2xELFVBQU1RLGNBQWMsR0FBRyxFQUF2Qjs7QUFDQSxTQUFLLElBQUlDLEtBQUssR0FBRyxDQUFqQixFQUFvQkEsS0FBSyxHQUFHLEtBQUtoQixlQUFMLENBQXFCaUIsTUFBakQsRUFBeURELEtBQUssRUFBOUQsRUFBa0U7QUFDOUQsWUFBTU4sU0FBUyxHQUFHLEtBQUtWLGVBQUwsQ0FBcUJnQixLQUFyQixDQUFsQjtBQUNBLFlBQU1KLElBQUksR0FBR0YsU0FBUyxDQUFDRSxJQUF2Qjs7QUFDQSxVQUFJLENBQUMsS0FBS3BCLElBQUwsQ0FBVW9CLElBQVYsRUFBZ0JMLEtBQXJCLEVBQTRCO0FBQ3hCO0FBQ0g7O0FBQ0RRLG9CQUFjLENBQUNILElBQUQsQ0FBZCxHQUF1QixLQUFLcEIsSUFBTCxDQUFVb0IsSUFBVixFQUFnQkwsS0FBdkM7QUFDSDs7QUFDRCxVQUFNVyxXQUFXLEdBQUcsS0FBS0MsbUJBQUwsQ0FBeUJKLGNBQXpCLENBQXBCO0FBQ0EsU0FBS0ssMEJBQUwsQ0FBZ0NSLElBQWhDLEVBQXNDTCxLQUF0Qzs7QUFDQSxRQUFJLENBQUNXLFdBQUwsRUFBa0I7QUFDZCxXQUFLRyxjQUFMO0FBQ0E7QUFDSDs7QUFDRCxTQUFLN0IsSUFBTCxDQUFVLGNBQVYsRUFBMEJlLEtBQTFCLEdBQWtDVyxXQUFsQztBQUNIOztBQUNERyxnQkFBYyxHQUFHO0FBQ2IsU0FBSzdCLElBQUwsQ0FBVSxZQUFWLEVBQXdCZSxLQUF4QixHQUFnQyxFQUFoQztBQUNBLFNBQUtmLElBQUwsQ0FBVSxjQUFWLEVBQTBCZSxLQUExQixHQUFrQyxFQUFsQztBQUNIOztBQUNEYSw0QkFBMEIsQ0FBQ1IsSUFBSSxHQUFHLEVBQVIsRUFBWUwsS0FBSyxHQUFHLEVBQXBCLEVBQXdCO0FBQzlDLFFBQUlLLElBQUksS0FBSyxxQkFBYixFQUFvQztBQUNoQztBQUNIOztBQUNELFFBQUlBLElBQUksSUFBSUwsS0FBWixFQUFtQjtBQUNmLFdBQUtQLGVBQUwsQ0FBcUJTLE9BQXJCLENBQThCYSxLQUFELElBQVc7QUFDcEMsWUFBSUEsS0FBSyxDQUFDVixJQUFOLEtBQWVBLElBQW5CLEVBQXlCO0FBQ3JCVSxlQUFLLENBQUNDLFFBQU4sR0FBaUIsSUFBakI7QUFDSDtBQUNKLE9BSkQ7QUFLSDs7QUFDRCxTQUFLOUIsYUFBTCxDQUFtQmdCLE9BQW5CLENBQTRCQyxTQUFELElBQWU7QUFDdEMsWUFBTWMsVUFBVSxHQUFHZCxTQUFTLENBQUNjLFVBQTdCOztBQUNBLFVBQUksQ0FBQ0EsVUFBTCxFQUFpQjtBQUNiLGNBQU0sSUFBSUMsS0FBSixDQUFVLGVBQVYsQ0FBTjtBQUNIOztBQUNELFVBQUlELFVBQVUsQ0FBQ1osSUFBRCxDQUFWLEtBQXFCTCxLQUF6QixFQUFnQztBQUM1QjtBQUNIOztBQUNELFdBQUtQLGVBQUwsQ0FBcUJTLE9BQXJCLENBQThCYSxLQUFELElBQVc7QUFDcEMsY0FBTUksS0FBSyxHQUFHRixVQUFVLENBQUNGLEtBQUssQ0FBQ1YsSUFBUCxDQUF4Qjs7QUFDQSxZQUFJYyxLQUFLLEtBQUtKLEtBQUssQ0FBQ2YsS0FBcEIsRUFBMkI7QUFDdkJlLGVBQUssQ0FBQ0MsUUFBTixHQUFpQixLQUFqQjtBQUNIO0FBQ0osT0FMRDtBQU1ILEtBZEQ7QUFlSDs7QUFDREoscUJBQW1CLENBQUNKLGNBQUQsRUFBaUI7QUFDaEMsUUFBSUcsV0FBVyxHQUFHLElBQWxCOztBQUNBLFFBQUksQ0FBQyxLQUFLekIsYUFBTCxDQUFtQndCLE1BQXhCLEVBQWdDO0FBQzVCLFlBQU1VLElBQUksR0FBRyxLQUFLbkMsSUFBTCxDQUFVb0MsT0FBVixDQUFrQkMsa0JBQS9COztBQUNBLFVBQUksQ0FBQ0YsSUFBTCxFQUFXO0FBQ1AsZUFBTyxJQUFQO0FBQ0g7O0FBQ0QsV0FBS2xDLGFBQUwsR0FBcUJxQyxJQUFJLENBQUNDLEtBQUwsQ0FBV0osSUFBWCxDQUFyQjs7QUFDQSxVQUFJLENBQUMsS0FBS2xDLGFBQVYsRUFBeUI7QUFDckIsZUFBTyxJQUFQO0FBQ0g7QUFDSjs7QUFDRCxTQUFLQSxhQUFMLENBQW1CZ0IsT0FBbkIsQ0FBNEJDLFNBQUQsSUFBZTtBQUN0QyxZQUFNYyxVQUFVLEdBQUdkLFNBQVMsQ0FBQ2MsVUFBN0I7O0FBQ0EsVUFBSSxDQUFDQSxVQUFMLEVBQWlCO0FBQ2IsY0FBTSxJQUFJQyxLQUFKLENBQVUsZUFBVixDQUFOO0FBQ0g7O0FBQ0QsV0FBSyxNQUFNLENBQUNPLEdBQUQsRUFBTXpCLEtBQU4sQ0FBWCxJQUEyQjBCLE1BQU0sQ0FBQ0MsT0FBUCxDQUFlVixVQUFmLENBQTNCLEVBQXVEO0FBQ25ELFlBQUlULGNBQWMsQ0FBQ2lCLEdBQUQsQ0FBZCxLQUF3QnpCLEtBQTVCLEVBQW1DO0FBQy9CO0FBQ0g7QUFDSjs7QUFDRFcsaUJBQVcsR0FBR1IsU0FBUyxDQUFDLGNBQUQsQ0FBdkI7QUFDSCxLQVhEO0FBWUEsV0FBT1EsV0FBUDtBQUNIOztBQUNETCxzQkFBb0IsQ0FBQ3NCLEtBQUQsRUFBUTtBQUN4QixRQUFJQyxFQUFKOztBQUNBRCxTQUFLLENBQUNFLGNBQU47QUFDQSxRQUFJQyxZQUFZLEdBQUcsQ0FBbkI7QUFDQSxVQUFNQyxnQkFBZ0IsR0FBRyxLQUFLL0MsSUFBTCxDQUFVTyxhQUFWLENBQXdCLHVCQUF4QixDQUF6QjtBQUNBLFVBQU15QyxrQkFBa0IsR0FBRyxLQUFLaEQsSUFBTCxDQUFVTyxhQUFWLENBQXdCLHVCQUF4QixDQUEzQjs7QUFDQSxRQUFJeUMsa0JBQUosRUFBd0I7QUFDcEJGLGtCQUFZLEdBQUdHLE1BQU0sQ0FBQ0Qsa0JBQWtCLENBQUNqQyxLQUFwQixDQUFyQjtBQUNIOztBQUNELFFBQUltQyxXQUFXLEdBQUcsSUFBbEI7QUFDQSxVQUFNQyxNQUFNLEdBQUcxQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxLQUFLVixJQUFMLENBQVVXLGdCQUFWLENBQTJCLE9BQTNCLENBQVgsQ0FBZjtBQUNBd0MsVUFBTSxDQUFDbEMsT0FBUCxDQUFnQmEsS0FBRCxJQUFXO0FBQ3RCQSxXQUFLLENBQUNzQixhQUFOLENBQW9CLElBQUlDLEtBQUosQ0FBVSxVQUFWLENBQXBCOztBQUNBLFVBQUksQ0FBQ3ZCLEtBQUssQ0FBQ3dCLFFBQU4sQ0FBZUMsS0FBcEIsRUFBMkI7QUFDdkJMLG1CQUFXLEdBQUcsS0FBZDtBQUNIO0FBQ0osS0FMRDs7QUFNQSxRQUFJLENBQUNBLFdBQUwsRUFBa0I7QUFDZCxZQUFNLElBQUlqQixLQUFKLENBQVUsK0JBQVYsQ0FBTjtBQUNIOztBQUNELFVBQU11QixRQUFRLEdBQUdQLE1BQU0sQ0FBQyxDQUFDTCxFQUFFLEdBQUcsS0FBSzVDLElBQUwsQ0FBVU8sYUFBVixDQUF3Qix3QkFBeEIsQ0FBTixNQUE2RCxJQUE3RCxJQUFxRXFDLEVBQUUsS0FBSyxLQUFLLENBQWpGLEdBQXFGLEtBQUssQ0FBMUYsR0FBOEZBLEVBQUUsQ0FBQzdCLEtBQWxHLENBQU4sSUFBa0gsQ0FBbkk7QUFDQSxVQUFNb0IsSUFBSSxHQUFHO0FBQ1RzQixZQUFNLEVBQUUsZUFEQztBQUVUQyxnQkFBVSxFQUFFLEtBQUtwRCxNQUFMLENBQVlTLEtBRmY7QUFHVHlDLGNBQVEsRUFBRUEsUUFBUSxDQUFDRyxRQUFULEVBSEQ7QUFJVGIsa0JBQVksRUFBRUEsWUFBWSxDQUFDYSxRQUFiO0FBSkwsS0FBYjtBQU1BQywwRUFBZSxDQUFDekIsSUFBRCxFQUFPLEtBQUtqQyxZQUFaLEVBQTBCLElBQTFCLEVBQWdDLEtBQUsyRCxTQUFMLENBQWV2QyxJQUFmLENBQW9CLElBQXBCLENBQWhDLEVBQTJELEtBQUt3QyxTQUFMLENBQWV4QyxJQUFmLENBQW9CLElBQXBCLENBQTNELEVBQXNGeUMsU0FBdEYsRUFBaUcsS0FBS3pELE1BQXRHLENBQWY7QUFDQSxXQUFPLEtBQVA7QUFDSDs7QUFDRHVELFdBQVMsQ0FBQ0csUUFBRCxFQUFXO0FBQ2hCLFFBQUlBLFFBQVEsQ0FBQ0MsT0FBVCxLQUFxQixLQUF6QixFQUFnQztBQUM1QixZQUFNLElBQUloQyxLQUFKLENBQVUsb0JBQVYsQ0FBTjtBQUNIOztBQUNEaUMseURBQVMsQ0FBQ0MsYUFBVixDQUF3QixZQUF4QjtBQUNBQyxpREFBSSxDQUFDQyxVQUFMOztBQUNBLFFBQUlMLFFBQVEsQ0FBQzdCLElBQVQsQ0FBY21DLFVBQWxCLEVBQThCO0FBQzFCQyw4RUFBcUIsQ0FBQ1AsUUFBUSxDQUFDN0IsSUFBVCxDQUFjbUMsVUFBZixDQUFyQjtBQUNIO0FBQ0o7O0FBQ0RSLFdBQVMsR0FBRztBQUNSLFVBQU05RCxJQUFJLEdBQUcsS0FBS00sTUFBTCxDQUFZa0UsT0FBWixDQUFvQixNQUFwQixDQUFiOztBQUNBLFFBQUl4RSxJQUFJLEtBQUssSUFBYixFQUFtQjtBQUNmO0FBQ0g7O0FBQ0RBLFFBQUksQ0FBQ3lFLE1BQUw7QUFDSDs7QUFDRCxTQUFPQyxNQUFQLENBQWNDLFFBQVEsR0FBR0MsUUFBekIsRUFBbUM7QUFDL0IsVUFBTUMsYUFBYSxHQUFHRixRQUFRLENBQUNwRSxhQUFULENBQXVCLFdBQXZCLENBQXRCOztBQUNBLFFBQUlzRSxhQUFhLEtBQUssSUFBdEIsRUFBNEI7QUFDeEI7QUFDSDs7QUFDRCxVQUFNQyxhQUFhLEdBQUcsSUFBSWpGLGFBQUosQ0FBa0JnRixhQUFsQixDQUF0QjtBQUNBQyxpQkFBYSxDQUFDOUQsVUFBZDtBQUNIOztBQXRKZ0QsQzs7Ozs7Ozs7Ozs7O0FDTHJEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNlLE1BQU0rRCxrQkFBTixTQUFpQ2pGLHlEQUFqQyxDQUEyQztBQUN0REMsYUFBVyxDQUFDaUYsUUFBRCxFQUFXO0FBQ2xCO0FBQ0EsU0FBS0EsUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7QUFDRGhFLFlBQVUsR0FBRztBQUNULFVBQU1pRSxLQUFLLEdBQUdMLFFBQVEsQ0FBQ3JFLGFBQVQsQ0FBdUIsMENBQXZCLENBQWQ7O0FBQ0EsUUFBSSxDQUFDLEtBQUt5RSxRQUFMLENBQWN2RCxNQUFmLElBQXlCLENBQUN3RCxLQUE5QixFQUFxQztBQUNqQztBQUNIOztBQUNELFVBQU1DLElBQUksR0FBR0QsS0FBSyxDQUFDRSxXQUFuQjtBQUNBLFNBQUtILFFBQUwsQ0FBYy9ELE9BQWQsQ0FBdUJtRSxLQUFELElBQVc7QUFDN0JBLFdBQUssQ0FBQ2pFLGdCQUFOLENBQXVCLFFBQXZCLEVBQWlDLE1BQU07QUFDbkMsY0FBTUosS0FBSyxHQUFHc0UsZ0VBQVcsQ0FBQ0QsS0FBSyxDQUFDckUsS0FBUCxDQUF6Qjs7QUFDQSxZQUFJLENBQUNBLEtBQUwsRUFBWTtBQUNSO0FBQ0g7O0FBQ0RrRSxhQUFLLENBQUNLLFNBQU4sR0FBbUIsR0FBRUosSUFBSyxLQUFJbkUsS0FBTSxFQUFwQztBQUNILE9BTkQ7O0FBT0EsVUFBSXFFLEtBQUssQ0FBQ0csT0FBVixFQUFtQjtBQUNmSCxhQUFLLENBQUNoQyxhQUFOLENBQW9CLElBQUlDLEtBQUosQ0FBVSxRQUFWLENBQXBCO0FBQ0g7QUFDSixLQVhEO0FBWUg7O0FBQ0QsU0FBT3FCLE1BQVAsQ0FBY0MsUUFBUSxHQUFHQyxRQUF6QixFQUFtQztBQUMvQixVQUFNWSxZQUFZLEdBQUcvRSxLQUFLLENBQUNDLElBQU4sQ0FBV2lFLFFBQVEsQ0FBQ2hFLGdCQUFULENBQTBCLDZCQUExQixDQUFYLENBQXJCOztBQUNBLFFBQUksQ0FBQzZFLFlBQVksQ0FBQy9ELE1BQWxCLEVBQTBCO0FBQ3RCO0FBQ0g7O0FBQ0QsVUFBTWdFLFFBQVEsR0FBRyxJQUFJVixrQkFBSixDQUF1QlMsWUFBdkIsQ0FBakI7QUFDQUMsWUFBUSxDQUFDekUsVUFBVDtBQUNIOztBQS9CcUQsQzs7Ozs7Ozs7Ozs7O0FDRjFEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFDQTtBQUNlLE1BQU0wRSxrQkFBTixTQUFpQzVGLHlEQUFqQyxDQUEyQztBQUN0REMsYUFBVyxDQUFDaUYsUUFBRCxFQUFXO0FBQ2xCO0FBQ0EsU0FBSzlFLFlBQUwsR0FBcUIsR0FBRUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFPLDBCQUE5QztBQUNBLFNBQUtzRixtQkFBTCxHQUEyQixJQUEzQjtBQUNBLFNBQUtDLGdCQUFMLEdBQXdCLElBQXhCO0FBQ0EsU0FBS1osUUFBTCxHQUFnQkEsUUFBaEI7QUFDSDs7QUFDRGhFLFlBQVUsR0FBRztBQUNULFNBQUsyRSxtQkFBTCxHQUEyQmYsUUFBUSxDQUFDckUsYUFBVCxDQUF1QixpREFBdkIsS0FBNkVxRSxRQUFRLENBQUNyRSxhQUFULENBQXVCLDZDQUF2QixDQUF4RztBQUNBLFNBQUtxRixnQkFBTCxHQUF3QmhCLFFBQVEsQ0FBQ3JFLGFBQVQsQ0FBdUIsaURBQXZCLENBQXhCOztBQUNBLFFBQUksQ0FBQyxLQUFLcUYsZ0JBQU4sSUFBMEIsQ0FBQyxLQUFLRCxtQkFBcEMsRUFBeUQ7QUFDckQ7QUFDSDs7QUFDRCxVQUFNM0YsSUFBSSxHQUFHLEtBQUtnRixRQUFMLENBQWMsQ0FBZCxFQUFpQlIsT0FBakIsQ0FBeUIsTUFBekIsQ0FBYjs7QUFDQSxRQUFJLENBQUN4RSxJQUFMLEVBQVc7QUFDUDtBQUNIOztBQUNELFVBQU0wRCxVQUFVLEdBQUcxRCxJQUFJLENBQUNvQyxPQUFMLENBQWFzQixVQUFoQzs7QUFDQSxRQUFJLENBQUNBLFVBQUwsRUFBaUI7QUFDYjtBQUNIOztBQUNELFNBQUtzQixRQUFMLENBQWMvRCxPQUFkLENBQXVCbUUsS0FBRCxJQUFXO0FBQzdCQSxXQUFLLENBQUNqRSxnQkFBTixDQUF1QixRQUF2QixFQUFpQyxNQUFNO0FBQ25DLGNBQU02QixrQkFBa0IsR0FBR2hELElBQUksQ0FBQ08sYUFBTCxDQUFtQix1QkFBbkIsQ0FBM0I7QUFDQSxjQUFNdUMsWUFBWSxHQUFHRSxrQkFBa0IsS0FBSyxJQUF2QixJQUErQkEsa0JBQWtCLEtBQUssS0FBSyxDQUEzRCxHQUErRCxLQUFLLENBQXBFLEdBQXdFQSxrQkFBa0IsQ0FBQ2pDLEtBQWhIOztBQUNBLFlBQUksQ0FBQytCLFlBQUQsSUFBaUIsQ0FBQ1ksVUFBdEIsRUFBa0M7QUFDOUI7QUFDSDs7QUFDRCxjQUFNdkIsSUFBSSxHQUFHO0FBQ1RzQixnQkFBTSxFQUFFLHFCQURDO0FBRVRDLG9CQUFVLEVBQUVBLFVBRkg7QUFHVFosc0JBQVksRUFBRUE7QUFITCxTQUFiO0FBS0FjLDhFQUFlLENBQUN6QixJQUFELEVBQU8sS0FBS2pDLFlBQVosRUFBMEIsSUFBMUIsRUFBZ0MsS0FBSzJELFNBQUwsQ0FBZXZDLElBQWYsQ0FBb0IsSUFBcEIsQ0FBaEMsQ0FBZjtBQUNILE9BWkQ7QUFhSCxLQWREO0FBZUg7O0FBQ0R1QyxXQUFTLENBQUNHLFFBQUQsRUFBVztBQUNoQixRQUFJLENBQUNBLFFBQVEsQ0FBQzdCLElBQVYsSUFBbUIsQ0FBQzZCLFFBQVEsQ0FBQzdCLElBQVQsQ0FBYzBELFNBQWYsSUFBNEIsQ0FBQzdCLFFBQVEsQ0FBQzdCLElBQVQsQ0FBYzJELFlBQWxFLEVBQWlGO0FBQzdFLFlBQU0sSUFBSTdELEtBQUosQ0FBVSxTQUFWLENBQU47QUFDSDs7QUFDRCxVQUFNNkQsWUFBWSxHQUFHN0MsTUFBTSxDQUFDZSxRQUFRLENBQUM3QixJQUFULENBQWMyRCxZQUFmLENBQU4sQ0FBbUNDLE9BQW5DLENBQTJDLENBQTNDLENBQXJCO0FBQ0EsVUFBTUYsU0FBUyxHQUFHNUMsTUFBTSxDQUFDZSxRQUFRLENBQUM3QixJQUFULENBQWMwRCxTQUFmLENBQU4sQ0FBZ0NFLE9BQWhDLENBQXdDLENBQXhDLENBQWxCOztBQUNBLFFBQUksS0FBS0osbUJBQUwsSUFBNEJHLFlBQWhDLEVBQThDO0FBQzFDLFdBQUtILG1CQUFMLENBQXlCTCxTQUF6QixHQUFxQ1EsWUFBckM7QUFDSDs7QUFDRCxRQUFJLEtBQUtGLGdCQUFMLElBQXlCQyxTQUE3QixFQUF3QztBQUNwQyxXQUFLRCxnQkFBTCxDQUFzQk4sU0FBdEIsR0FBa0NPLFNBQWxDO0FBQ0g7QUFDSjs7QUFDRCxTQUFPbkIsTUFBUCxDQUFjQyxRQUFRLEdBQUdDLFFBQXpCLEVBQW1DO0FBQy9CLFVBQU1ZLFlBQVksR0FBRy9FLEtBQUssQ0FBQ0MsSUFBTixDQUFXaUUsUUFBUSxDQUFDaEUsZ0JBQVQsQ0FBMEIsK0NBQTFCLENBQVgsQ0FBckI7O0FBQ0EsUUFBSSxDQUFDNkUsWUFBWSxDQUFDL0QsTUFBbEIsRUFBMEI7QUFDdEI7QUFDSDs7QUFDRCxVQUFNZ0UsUUFBUSxHQUFHLElBQUlDLGtCQUFKLENBQXVCRixZQUF2QixDQUFqQjtBQUNBQyxZQUFRLENBQUN6RSxVQUFUO0FBQ0g7O0FBMURxRCxDOzs7Ozs7Ozs7Ozs7QUNGMUQ7QUFBQTtBQUFBO0FBQUE7QUFDZSxNQUFNZ0YsWUFBTixTQUEyQmxHLHlEQUEzQixDQUFxQztBQUNoREMsYUFBVyxDQUFDa0csT0FBRCxFQUFVO0FBQ2pCO0FBQ0EsU0FBS0EsT0FBTCxHQUFlQSxPQUFmO0FBQ0g7O0FBQ0RqRixZQUFVLEdBQUc7QUFDVCxVQUFNa0YsZ0JBQWdCLEdBQUd6RixLQUFLLENBQUNDLElBQU4sQ0FBVyxLQUFLdUYsT0FBTCxDQUFhdEYsZ0JBQWIsQ0FBOEIsd0NBQTlCLENBQVgsQ0FBekI7QUFDQXVGLG9CQUFnQixDQUFDakYsT0FBakIsQ0FBMEJrRixNQUFELElBQVk7QUFDakNBLFlBQU0sQ0FBQ2hGLGdCQUFQLENBQXdCLE9BQXhCLEVBQWtDd0IsS0FBRCxJQUFXO0FBQ3hDQSxhQUFLLENBQUNFLGNBQU47QUFDQSxjQUFNdUQsRUFBRSxHQUFHRCxNQUFNLENBQUMvRCxPQUFQLENBQWVpRSxXQUExQjtBQUNBLGNBQU1DLEtBQUssR0FBRyxLQUFLTCxPQUFMLENBQWExRixhQUFiLENBQTRCLG1CQUFrQjZGLEVBQUcsSUFBakQsQ0FBZDs7QUFDQSxZQUFJRSxLQUFLLEtBQUssSUFBZCxFQUFvQjtBQUNoQjtBQUNIOztBQUNELGNBQU1DLFdBQVcsR0FBR0QsS0FBSyxDQUFDRSxhQUExQjtBQUNBL0YsYUFBSyxDQUFDQyxJQUFOLENBQVc2RixXQUFXLENBQUM1RixnQkFBWixDQUE2QixXQUE3QixDQUFYLEVBQXNETSxPQUF0RCxDQUErRGdGLE9BQUQsSUFBYTtBQUN2RUEsaUJBQU8sQ0FBQ1EsU0FBUixDQUFrQkMsTUFBbEIsQ0FBeUIsUUFBekI7QUFDSCxTQUZEO0FBR0FKLGFBQUssQ0FBQ0csU0FBTixDQUFnQkUsR0FBaEIsQ0FBb0IsUUFBcEI7QUFDSCxPQVpEO0FBYUgsS0FkRDtBQWVIOztBQUNELFNBQU9qQyxNQUFQLENBQWNDLFFBQVEsR0FBR0MsUUFBekIsRUFBbUM7QUFDL0IsVUFBTXFCLE9BQU8sR0FBR3RCLFFBQVEsQ0FBQ3BFLGFBQVQsQ0FBdUIsMEJBQXZCLENBQWhCOztBQUNBLFFBQUkwRixPQUFPLEtBQUssSUFBaEIsRUFBc0I7QUFDbEI7QUFDSDs7QUFDRCxVQUFNUixRQUFRLEdBQUcsSUFBSU8sWUFBSixDQUFpQkMsT0FBakIsQ0FBakI7QUFDQVIsWUFBUSxDQUFDekUsVUFBVDtBQUNIOztBQTlCK0MsQzs7Ozs7Ozs7Ozs7O0FDRHBEO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDZSxNQUFNNEYsYUFBTixTQUE0QkMsK0NBQTVCLENBQW1DO0FBQzlDOUcsYUFBVyxHQUFHO0FBQ1YsVUFBTSxHQUFHK0csU0FBVDtBQUNBLFNBQUtDLFVBQUwsR0FBa0IsQ0FDZGxILGlFQURjLEVBRWRtSCxrRUFGYyxFQUdkaEIsZ0VBSGMsRUFJZE4sc0VBSmMsRUFLZFgsc0VBTGMsQ0FBbEI7QUFPSDs7QUFWNkM7O0FBWWxELENBQUMsU0FBU2tDLGlCQUFULEdBQTZCO0FBQzFCLFFBQU1DLGFBQWEsR0FBRyxJQUFJTixhQUFKLEVBQXRCO0FBQ0FNLGVBQWEsQ0FBQ2xHLFVBQWQ7QUFDSCxDQUhELEkiLCJmaWxlIjoicHJvZHVjdERldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbW1vbi9Db21wb25lbnRcIjtcbmltcG9ydCBTaWRlUGFuZWwgZnJvbSBcIi4uL3VpL1NpZGVQYW5lbFwiO1xuaW1wb3J0IHsgYWRkT3JVcGRhdGVDYXJ0VG90YWxzIH0gZnJvbSBcIi4uL3V0aWwvY2FydFwiO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWwvcmVxdWVzdHNcIjtcbmltcG9ydCBDYXJ0IGZyb20gJy4uL2NhcnQnO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQWpheEFkZFRvQ2FydCBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZm9ybSkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEgPSBbXTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMuZm9ybSA9IGZvcm07XG4gICAgICAgIHRoaXMuYnV0dG9uID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoYGJ1dHRvbltuYW1lPVwiYWRkLXRvLWNhcnRcIl1gKTtcbiAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMgPSBBcnJheS5mcm9tKHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX3ZhcmlhdGlvbnMgaW5wdXQnKSk7XG4gICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlKCk7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaXplTmFtZSA9ICdhdHRyaWJ1dGVfcGFfc2l6ZSc7XG4gICAgICAgIGNvbnN0IGN1cnJlbnRTaXplVmFsdWUgPSB0aGlzLmZvcm1bY3VycmVudFNpemVOYW1lXS52YWx1ZTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VWYXJpYXRpb25BdHRyaWJ1dGUoY3VycmVudFNpemVOYW1lLCBjdXJyZW50U2l6ZVZhbHVlKTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICB2YXJpYXRpb24uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIHRoaXMuaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlKHZhcmlhdGlvbi5uYW1lLCB2YXJpYXRpb24udmFsdWUpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgICAgICB0aGlzLmJ1dHRvbi5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIHRoaXMuaGFuZGxlQWRkVG9DYXJ0Q2xpY2suYmluZCh0aGlzKSk7XG4gICAgfVxuICAgIGhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZShuYW1lID0gJycsIHZhbHVlID0gJycpIHtcbiAgICAgICAgY29uc3QgY3VycmVudE9wdGlvbnMgPSB7fTtcbiAgICAgICAgZm9yIChsZXQgaW5kZXggPSAwOyBpbmRleCA8IHRoaXMudmFyaWF0aW9uRmllbGRzLmxlbmd0aDsgaW5kZXgrKykge1xuICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uID0gdGhpcy52YXJpYXRpb25GaWVsZHNbaW5kZXhdO1xuICAgICAgICAgICAgY29uc3QgbmFtZSA9IHZhcmlhdGlvbi5uYW1lO1xuICAgICAgICAgICAgaWYgKCF0aGlzLmZvcm1bbmFtZV0udmFsdWUpIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBjdXJyZW50T3B0aW9uc1tuYW1lXSA9IHRoaXMuZm9ybVtuYW1lXS52YWx1ZTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB2YXJpYXRpb25JRCA9IHRoaXMuZmluZE1hdGNoaW5nVmFyaWFudChjdXJyZW50T3B0aW9ucyk7XG4gICAgICAgIHRoaXMuZGlzYWJsZU5vbkV4aXN0aW5nVmFyaWFudHMobmFtZSwgdmFsdWUpO1xuICAgICAgICBpZiAoIXZhcmlhdGlvbklEKSB7XG4gICAgICAgICAgICB0aGlzLnNldEZvcm1JbnZhbGlkKCk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5mb3JtWyd2YXJpYXRpb25faWQnXS52YWx1ZSA9IHZhcmlhdGlvbklEO1xuICAgIH1cbiAgICBzZXRGb3JtSW52YWxpZCgpIHtcbiAgICAgICAgdGhpcy5mb3JtWydwcm9kdWN0X2lkJ10udmFsdWUgPSAnJztcbiAgICAgICAgdGhpcy5mb3JtWyd2YXJpYXRpb25faWQnXS52YWx1ZSA9ICcnO1xuICAgIH1cbiAgICBkaXNhYmxlTm9uRXhpc3RpbmdWYXJpYW50cyhuYW1lID0gJycsIHZhbHVlID0gJycpIHtcbiAgICAgICAgaWYgKG5hbWUgPT09ICdhdHRyaWJ1dGVfcGFfYW1vdW50Jykge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGlmIChuYW1lICYmIHZhbHVlKSB7XG4gICAgICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChmaWVsZC5uYW1lICE9PSBuYW1lKSB7XG4gICAgICAgICAgICAgICAgICAgIGZpZWxkLmRpc2FibGVkID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gdmFyaWF0aW9uLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChhdHRyaWJ1dGVzW25hbWVdICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgbWF0Y2ggPSBhdHRyaWJ1dGVzW2ZpZWxkLm5hbWVdO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCA9PT0gZmllbGQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlzYWJsZWQgPSBmYWxzZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIGZpbmRNYXRjaGluZ1ZhcmlhbnQoY3VycmVudE9wdGlvbnMpIHtcbiAgICAgICAgbGV0IHZhcmlhdGlvbklEID0gbnVsbDtcbiAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEubGVuZ3RoKSB7XG4gICAgICAgICAgICBjb25zdCBkYXRhID0gdGhpcy5mb3JtLmRhdGFzZXQucHJvZHVjdF92YXJpYXRpb25zO1xuICAgICAgICAgICAgaWYgKCFkYXRhKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEgPSBKU09OLnBhcnNlKGRhdGEpO1xuICAgICAgICAgICAgaWYgKCF0aGlzLnZhcmlhdGlvbkRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICB0aGlzLnZhcmlhdGlvbkRhdGEuZm9yRWFjaCgodmFyaWF0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCBhdHRyaWJ1dGVzID0gdmFyaWF0aW9uLmF0dHJpYnV0ZXM7XG4gICAgICAgICAgICBpZiAoIWF0dHJpYnV0ZXMpIHtcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ25vIGF0dHJpYnV0ZXMnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGZvciAoY29uc3QgW2tleSwgdmFsdWVdIG9mIE9iamVjdC5lbnRyaWVzKGF0dHJpYnV0ZXMpKSB7XG4gICAgICAgICAgICAgICAgaWYgKGN1cnJlbnRPcHRpb25zW2tleV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXJpYXRpb25JRCA9IHZhcmlhdGlvblsndmFyaWF0aW9uX2lkJ107XG4gICAgICAgIH0pO1xuICAgICAgICByZXR1cm4gdmFyaWF0aW9uSUQ7XG4gICAgfVxuICAgIGhhbmRsZUFkZFRvQ2FydENsaWNrKGV2ZW50KSB7XG4gICAgICAgIHZhciBfYTtcbiAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgbGV0IHZhcmlhdGlvbl9pZCA9IDA7XG4gICAgICAgIGNvbnN0IHByb2R1Y3RJZEVsZW1lbnQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9uSWRFbGVtZW50ID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ1tuYW1lPVwidmFyaWF0aW9uX2lkXCJdJyk7XG4gICAgICAgIGlmICh2YXJpYXRpb25JZEVsZW1lbnQpIHtcbiAgICAgICAgICAgIHZhcmlhdGlvbl9pZCA9IE51bWJlcih2YXJpYXRpb25JZEVsZW1lbnQudmFsdWUpO1xuICAgICAgICB9XG4gICAgICAgIGxldCBmb3JtSXNWYWxpZCA9IHRydWU7XG4gICAgICAgIGNvbnN0IGZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJ2lucHV0JykpO1xuICAgICAgICBmaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgIGZpZWxkLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCd2YWxpZGF0ZScpKTtcbiAgICAgICAgICAgIGlmICghZmllbGQudmFsaWRpdHkudmFsaWQpIHtcbiAgICAgICAgICAgICAgICBmb3JtSXNWYWxpZCA9IGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICAgICAgaWYgKCFmb3JtSXNWYWxpZCkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdQcm9kdWN0IGFkZCBmb3JtIGlzIG5vdCB2YWxpZCcpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHF1YW50aXR5ID0gTnVtYmVyKChfYSA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwicXVhbnRpdHlcIl0nKSkgPT09IG51bGwgfHwgX2EgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9hLnZhbHVlKSB8fCAxO1xuICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgYWN0aW9uOiAnYWpheGFkZHRvY2FydCcsXG4gICAgICAgICAgICBwcm9kdWN0X2lkOiB0aGlzLmJ1dHRvbi52YWx1ZSxcbiAgICAgICAgICAgIHF1YW50aXR5OiBxdWFudGl0eS50b1N0cmluZygpLFxuICAgICAgICAgICAgdmFyaWF0aW9uX2lkOiB2YXJpYXRpb25faWQudG9TdHJpbmcoKVxuICAgICAgICB9O1xuICAgICAgICBzZW5kQWpheFJlcXVlc3QoZGF0YSwgdGhpcy5hamF4RW5kcG9pbnQsIG51bGwsIHRoaXMub25TdWNjZXNzLmJpbmQodGhpcyksIHRoaXMub25GYWlsdXJlLmJpbmQodGhpcyksIHVuZGVmaW5lZCwgdGhpcy5idXR0b24pO1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBpZiAocmVzcG9uc2Uuc3VjY2VzcyA9PT0gZmFsc2UpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignc29tZXRoaW5nIGlzIHdyb25nJyk7XG4gICAgICAgIH1cbiAgICAgICAgU2lkZVBhbmVsLm9wZW5TaWRlUGFuZWwoJ2NhcnQtcGFuZWwnKTtcbiAgICAgICAgQ2FydC51cGRhdGVDYXJ0KCk7XG4gICAgICAgIGlmIChyZXNwb25zZS5kYXRhLmNhcnRBbW91bnQpIHtcbiAgICAgICAgICAgIGFkZE9yVXBkYXRlQ2FydFRvdGFscyhyZXNwb25zZS5kYXRhLmNhcnRBbW91bnQpO1xuICAgICAgICB9XG4gICAgfVxuICAgIG9uRmFpbHVyZSgpIHtcbiAgICAgICAgY29uc3QgZm9ybSA9IHRoaXMuYnV0dG9uLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgaWYgKGZvcm0gPT09IG51bGwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBmb3JtLnN1Ym1pdCgpO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgYWRkVG9DYXJ0Rm9ybSA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJ2Zvcm0uY2FydCcpO1xuICAgICAgICBpZiAoYWRkVG9DYXJ0Rm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGFqYXhBZGRUb0NhcnQgPSBuZXcgQWpheEFkZFRvQ2FydChhZGRUb0NhcnRGb3JtKTtcbiAgICAgICAgYWpheEFkZFRvQ2FydC5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgdG9UaXRsZUNhc2UgfSBmcm9tIFwiLi4vdXRpbC9zdHJpbmdcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZVZhcmlhbnRDb2xvciBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCBsYWJlbCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fdmFyaWF0aW9uX19sYWJlbC0tY29sb3InKTtcbiAgICAgICAgaWYgKCF0aGlzLmVsZW1lbnRzLmxlbmd0aCB8fCAhbGFiZWwpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCB0ZXh0ID0gbGFiZWwudGV4dENvbnRlbnQ7XG4gICAgICAgIHRoaXMuZWxlbWVudHMuZm9yRWFjaCgocmFkaW8pID0+IHtcbiAgICAgICAgICAgIHJhZGlvLmFkZEV2ZW50TGlzdGVuZXIoJ2NoYW5nZScsICgpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCB2YWx1ZSA9IHRvVGl0bGVDYXNlKHJhZGlvLnZhbHVlKTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgbGFiZWwuaW5uZXJUZXh0ID0gYCR7dGV4dH06ICR7dmFsdWV9YDtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgaWYgKHJhZGlvLmNoZWNrZWQpIHtcbiAgICAgICAgICAgICAgICByYWRpby5kaXNwYXRjaEV2ZW50KG5ldyBFdmVudCgnY2hhbmdlJykpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnW25hbWU9XCJhdHRyaWJ1dGVfcGFfY29sb3JcIl0nKSk7XG4gICAgICAgIGlmICghcmFkaW9CdXR0b25zLmxlbmd0aCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IENoYW5nZVZhcmlhbnRDb2xvcihyYWRpb0J1dHRvbnMpO1xuICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuaW1wb3J0IHsgc2VuZEFqYXhSZXF1ZXN0IH0gZnJvbSBcIi4uL3V0aWwvcmVxdWVzdHNcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIENoYW5nZVZhcmlhbnRQcmljZSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudHMpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5hamF4RW5kcG9pbnQgPSBgJHt3aW5kb3cubG9jYXRpb24ub3JpZ2lufS93cC1hZG1pbi9hZG1pbi1hamF4LnBocGA7XG4gICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudCA9IG51bGw7XG4gICAgICAgIHRoaXMuZWxlbWVudHMgPSBlbGVtZW50cztcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX19wcmljZSBpbnMgW2RhdGEtcHJvZHVjdC1wcmljZV0nKSB8fCBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kZXRhaWxfX3ByaWNlIFtkYXRhLXByb2R1Y3QtcHJpY2VdJyk7XG4gICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fcHJpY2UgZGVsIFtkYXRhLXByb2R1Y3QtcHJpY2VdJyk7XG4gICAgICAgIGlmICghdGhpcy5zYWxlUHJpY2VFbGVtZW50ICYmICF0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5lbGVtZW50c1swXS5jbG9zZXN0KCdmb3JtJyk7XG4gICAgICAgIGlmICghZm9ybSkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHByb2R1Y3RfaWQgPSBmb3JtLmRhdGFzZXQucHJvZHVjdF9pZDtcbiAgICAgICAgaWYgKCFwcm9kdWN0X2lkKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbklkRWxlbWVudCA9IGZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgICAgICAgICBjb25zdCB2YXJpYXRpb25faWQgPSB2YXJpYXRpb25JZEVsZW1lbnQgPT09IG51bGwgfHwgdmFyaWF0aW9uSWRFbGVtZW50ID09PSB2b2lkIDAgPyB2b2lkIDAgOiB2YXJpYXRpb25JZEVsZW1lbnQudmFsdWU7XG4gICAgICAgICAgICAgICAgaWYgKCF2YXJpYXRpb25faWQgfHwgIXByb2R1Y3RfaWQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBkYXRhID0ge1xuICAgICAgICAgICAgICAgICAgICBhY3Rpb246ICdhamF4Z2V0dmFyaWFudHByaWNlJyxcbiAgICAgICAgICAgICAgICAgICAgcHJvZHVjdF9pZDogcHJvZHVjdF9pZCxcbiAgICAgICAgICAgICAgICAgICAgdmFyaWF0aW9uX2lkOiB2YXJpYXRpb25faWRcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIG9uU3VjY2VzcyhyZXNwb25zZSkge1xuICAgICAgICBpZiAoIXJlc3BvbnNlLmRhdGEgfHwgKCFyZXNwb25zZS5kYXRhLnNhbGVQcmljZSAmJiAhcmVzcG9uc2UuZGF0YS5yZWd1bGFyUHJpY2UpKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ05vIGRhdGEnKTtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCByZWd1bGFyUHJpY2UgPSBOdW1iZXIocmVzcG9uc2UuZGF0YS5yZWd1bGFyUHJpY2UpLnRvRml4ZWQoMik7XG4gICAgICAgIGNvbnN0IHNhbGVQcmljZSA9IE51bWJlcihyZXNwb25zZS5kYXRhLnNhbGVQcmljZSkudG9GaXhlZCgyKTtcbiAgICAgICAgaWYgKHRoaXMucmVndWxhclByaWNlRWxlbWVudCAmJiByZWd1bGFyUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMucmVndWxhclByaWNlRWxlbWVudC5pbm5lclRleHQgPSByZWd1bGFyUHJpY2U7XG4gICAgICAgIH1cbiAgICAgICAgaWYgKHRoaXMuc2FsZVByaWNlRWxlbWVudCAmJiBzYWxlUHJpY2UpIHtcbiAgICAgICAgICAgIHRoaXMuc2FsZVByaWNlRWxlbWVudC5pbm5lclRleHQgPSBzYWxlUHJpY2U7XG4gICAgICAgIH1cbiAgICB9XG4gICAgc3RhdGljIG9uSW5pdChzZWxlY3RvciA9IGRvY3VtZW50KSB7XG4gICAgICAgIGNvbnN0IHJhZGlvQnV0dG9ucyA9IEFycmF5LmZyb20oc2VsZWN0b3IucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGV0YWlsX192YXJpYXRpb25zIGlucHV0W3R5cGU9XCJyYWRpbycpKTtcbiAgICAgICAgaWYgKCFyYWRpb0J1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2hhbmdlVmFyaWFudFByaWNlKHJhZGlvQnV0dG9ucyk7XG4gICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBJbWFnZUdhbGxlcnkgZXh0ZW5kcyBDb21wb25lbnQge1xuICAgIGNvbnN0cnVjdG9yKGVsZW1lbnQpIHtcbiAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgdGhpcy5lbGVtZW50ID0gZWxlbWVudDtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgY29uc3QgdGh1bWJuYWlsQW5jaG9ycyA9IEFycmF5LmZyb20odGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWRldGFpbF9fZ2FsbGVyeV9fdGh1bWJuYWlscyBhJykpO1xuICAgICAgICB0aHVtYm5haWxBbmNob3JzLmZvckVhY2goKGFuY2hvcikgPT4ge1xuICAgICAgICAgICAgYW5jaG9yLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgICAgICBjb25zdCBpZCA9IGFuY2hvci5kYXRhc2V0LnRodW1ibmFpbElkO1xuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlID0gdGhpcy5lbGVtZW50LnF1ZXJ5U2VsZWN0b3IoYFtkYXRhLWltYWdlLWlkPVwiJHtpZH1cIl1gKTtcbiAgICAgICAgICAgICAgICBpZiAoaW1hZ2UgPT09IG51bGwpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBjb25zdCBpbWFnZVBhcmVudCA9IGltYWdlLnBhcmVudEVsZW1lbnQ7XG4gICAgICAgICAgICAgICAgQXJyYXkuZnJvbShpbWFnZVBhcmVudC5xdWVyeVNlbGVjdG9yQWxsKCdsaS5hY3RpdmUnKSkuZm9yRWFjaCgoZWxlbWVudCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBlbGVtZW50LmNsYXNzTGlzdC5yZW1vdmUoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIGltYWdlLmNsYXNzTGlzdC5hZGQoJ2FjdGl2ZScpO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgZWxlbWVudCA9IHNlbGVjdG9yLnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fZ2FsbGVyeScpO1xuICAgICAgICBpZiAoZWxlbWVudCA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGluc3RhbmNlID0gbmV3IEltYWdlR2FsbGVyeShlbGVtZW50KTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBBamF4QWRkVG9DYXJ0IGZyb20gXCIuL2NvbXBvbmVudHMvQWpheEFkZFRvQ2FydFwiO1xuaW1wb3J0IEFtb3VudFNlbGVjdG9yIGZyb20gXCIuL2NvbXBvbmVudHMvQW1vdW50U2VsZWN0b3JcIjtcbmltcG9ydCBDaGFuZ2VWYXJpYW50Q29sb3IgZnJvbSBcIi4vY29tcG9uZW50cy9DaGFuZ2VWYXJpYW50Q29sb3JcIjtcbmltcG9ydCBDaGFuZ2VWYXJpYW50UHJpY2UgZnJvbSBcIi4vY29tcG9uZW50cy9DaGFuZ2VWYXJpYW50UHJpY2VcIjtcbmltcG9ydCBJbWFnZUdhbGxlcnkgZnJvbSBcIi4vY29tcG9uZW50cy9JbWFnZUdhbGxlcnlcIjtcbmltcG9ydCBNb2R1bGUgZnJvbSBcIi4vTW9kdWxlXCI7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBQcm9kdWN0RGV0YWlsIGV4dGVuZHMgTW9kdWxlIHtcbiAgICBjb25zdHJ1Y3RvcigpIHtcbiAgICAgICAgc3VwZXIoLi4uYXJndW1lbnRzKTtcbiAgICAgICAgdGhpcy5jb21wb25lbnRzID0gW1xuICAgICAgICAgICAgQWpheEFkZFRvQ2FydCxcbiAgICAgICAgICAgIEFtb3VudFNlbGVjdG9yLFxuICAgICAgICAgICAgSW1hZ2VHYWxsZXJ5LFxuICAgICAgICAgICAgQ2hhbmdlVmFyaWFudFByaWNlLFxuICAgICAgICAgICAgQ2hhbmdlVmFyaWFudENvbG9yXG4gICAgICAgIF07XG4gICAgfVxufVxuKGZ1bmN0aW9uIHByb2R1Y3REZXRhaWxJbml0KCkge1xuICAgIGNvbnN0IHByb2R1Y3REZXRhaWwgPSBuZXcgUHJvZHVjdERldGFpbCgpO1xuICAgIHByb2R1Y3REZXRhaWwuaW5pdGlhbGl6ZSgpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=