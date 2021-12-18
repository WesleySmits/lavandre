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
/* harmony import */ var _common_DataLayer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./common/DataLayer */ "./assets/js/common/DataLayer.ts");







class ProductDetail extends _Module__WEBPACK_IMPORTED_MODULE_5__["default"] {
  constructor() {
    super(...arguments);
    this.components = [_components_AjaxAddToCart__WEBPACK_IMPORTED_MODULE_0__["default"], _components_AmountSelector__WEBPACK_IMPORTED_MODULE_1__["default"], _components_ImageGallery__WEBPACK_IMPORTED_MODULE_4__["default"], _components_ChangeVariantPrice__WEBPACK_IMPORTED_MODULE_3__["default"], _components_ChangeVariantColor__WEBPACK_IMPORTED_MODULE_2__["default"]];
  }

  initialize() {
    var _a, _b, _c;

    super.initialize();
    const data = {
      event: "view_item",
      ecommerce: {
        items: []
      }
    };
    const form = document.querySelector('form[data-product_id]');
    const variationField = document.querySelector('input[name="variation_id"]');
    const productData = {
      item_id: (form === null || form === void 0 ? void 0 : form.dataset.product_id) || '',
      item_name: ((_a = document.querySelector('.product-detail__title')) === null || _a === void 0 ? void 0 : _a.textContent) || '',
      item_variant: (variationField === null || variationField === void 0 ? void 0 : variationField.value) || '',
      price: Number((_c = (_b = document.querySelector('[data-product-price]')) === null || _b === void 0 ? void 0 : _b.textContent) === null || _c === void 0 ? void 0 : _c.replace(',', '.')) || 0,
      item_brand: "Lavandré"
    };
    data.ecommerce.items.push(productData);
    _common_DataLayer__WEBPACK_IMPORTED_MODULE_6__["default"].push(data);
  }

}

(function productDetailInit() {
  const productDetail = new ProductDetail();
  productDetail.initialize();
})();

/***/ })

},[["./assets/js/productDetail.ts","runtime","vendors~app~productDetail","app~cart~checkout~home~productDetail~sustainability","app~productDetail"]]]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9BamF4QWRkVG9DYXJ0LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRDb2xvci50cyIsIndlYnBhY2s6Ly8vLi9hc3NldHMvanMvY29tcG9uZW50cy9DaGFuZ2VWYXJpYW50UHJpY2UudHMiLCJ3ZWJwYWNrOi8vLy4vYXNzZXRzL2pzL2NvbXBvbmVudHMvSW1hZ2VHYWxsZXJ5LnRzIiwid2VicGFjazovLy8uL2Fzc2V0cy9qcy9wcm9kdWN0RGV0YWlsLnRzIl0sIm5hbWVzIjpbIkFqYXhBZGRUb0NhcnQiLCJDb21wb25lbnQiLCJjb25zdHJ1Y3RvciIsImZvcm0iLCJ2YXJpYXRpb25EYXRhIiwiYWpheEVuZHBvaW50Iiwid2luZG93IiwibG9jYXRpb24iLCJvcmlnaW4iLCJidXR0b24iLCJxdWVyeVNlbGVjdG9yIiwidmFyaWF0aW9uRmllbGRzIiwiQXJyYXkiLCJmcm9tIiwicXVlcnlTZWxlY3RvckFsbCIsImhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZSIsImN1cnJlbnRTaXplTmFtZSIsImN1cnJlbnRTaXplVmFsdWUiLCJ2YWx1ZSIsImluaXRpYWxpemUiLCJmb3JFYWNoIiwidmFyaWF0aW9uIiwiYWRkRXZlbnRMaXN0ZW5lciIsIm5hbWUiLCJoYW5kbGVBZGRUb0NhcnRDbGljayIsImJpbmQiLCJjdXJyZW50T3B0aW9ucyIsImluZGV4IiwibGVuZ3RoIiwidmFyaWF0aW9uSUQiLCJmaW5kTWF0Y2hpbmdWYXJpYW50IiwiZGlzYWJsZU5vbkV4aXN0aW5nVmFyaWFudHMiLCJzZXRGb3JtSW52YWxpZCIsImZpZWxkIiwiZGlzYWJsZWQiLCJhdHRyaWJ1dGVzIiwiRXJyb3IiLCJtYXRjaCIsImRhdGEiLCJkYXRhc2V0IiwicHJvZHVjdF92YXJpYXRpb25zIiwiSlNPTiIsInBhcnNlIiwia2V5IiwiT2JqZWN0IiwiZW50cmllcyIsImV2ZW50IiwiX2EiLCJwcmV2ZW50RGVmYXVsdCIsInZhcmlhdGlvbl9pZCIsInByb2R1Y3RJZEVsZW1lbnQiLCJ2YXJpYXRpb25JZEVsZW1lbnQiLCJOdW1iZXIiLCJmb3JtSXNWYWxpZCIsImZpZWxkcyIsImRpc3BhdGNoRXZlbnQiLCJFdmVudCIsInZhbGlkaXR5IiwidmFsaWQiLCJxdWFudGl0eSIsImFjdGlvbiIsInByb2R1Y3RfaWQiLCJ0b1N0cmluZyIsInNlbmRBamF4UmVxdWVzdCIsIm9uU3VjY2VzcyIsIm9uRmFpbHVyZSIsInVuZGVmaW5lZCIsInJlc3BvbnNlIiwic3VjY2VzcyIsIlNpZGVQYW5lbCIsIm9wZW5TaWRlUGFuZWwiLCJDYXJ0IiwidXBkYXRlQ2FydCIsImNhcnRBbW91bnQiLCJhZGRPclVwZGF0ZUNhcnRUb3RhbHMiLCJjbG9zZXN0Iiwic3VibWl0Iiwib25Jbml0Iiwic2VsZWN0b3IiLCJkb2N1bWVudCIsImFkZFRvQ2FydEZvcm0iLCJhamF4QWRkVG9DYXJ0IiwiQ2hhbmdlVmFyaWFudENvbG9yIiwiZWxlbWVudHMiLCJsYWJlbCIsInRleHQiLCJ0ZXh0Q29udGVudCIsInJhZGlvIiwidG9UaXRsZUNhc2UiLCJpbm5lclRleHQiLCJjaGVja2VkIiwicmFkaW9CdXR0b25zIiwiaW5zdGFuY2UiLCJDaGFuZ2VWYXJpYW50UHJpY2UiLCJyZWd1bGFyUHJpY2VFbGVtZW50Iiwic2FsZVByaWNlRWxlbWVudCIsInNhbGVQcmljZSIsInJlZ3VsYXJQcmljZSIsInRvRml4ZWQiLCJJbWFnZUdhbGxlcnkiLCJlbGVtZW50IiwidGh1bWJuYWlsQW5jaG9ycyIsImFuY2hvciIsImlkIiwidGh1bWJuYWlsSWQiLCJpbWFnZSIsImltYWdlUGFyZW50IiwicGFyZW50RWxlbWVudCIsImNsYXNzTGlzdCIsInJlbW92ZSIsImFkZCIsIlByb2R1Y3REZXRhaWwiLCJNb2R1bGUiLCJhcmd1bWVudHMiLCJjb21wb25lbnRzIiwiQW1vdW50U2VsZWN0b3IiLCJfYiIsIl9jIiwiZWNvbW1lcmNlIiwiaXRlbXMiLCJ2YXJpYXRpb25GaWVsZCIsInByb2R1Y3REYXRhIiwiaXRlbV9pZCIsIml0ZW1fbmFtZSIsIml0ZW1fdmFyaWFudCIsInByaWNlIiwicmVwbGFjZSIsIml0ZW1fYnJhbmQiLCJwdXNoIiwiRGF0YUxheWVyIiwicHJvZHVjdERldGFpbEluaXQiLCJwcm9kdWN0RGV0YWlsIl0sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ2UsTUFBTUEsYUFBTixTQUE0QkMseURBQTVCLENBQXNDO0FBQ2pEQyxhQUFXLENBQUNDLElBQUQsRUFBTztBQUNkO0FBQ0EsU0FBS0MsYUFBTCxHQUFxQixFQUFyQjtBQUNBLFNBQUtDLFlBQUwsR0FBcUIsR0FBRUMsTUFBTSxDQUFDQyxRQUFQLENBQWdCQyxNQUFPLDBCQUE5QztBQUNBLFNBQUtMLElBQUwsR0FBWUEsSUFBWjtBQUNBLFNBQUtNLE1BQUwsR0FBYyxLQUFLTixJQUFMLENBQVVPLGFBQVYsQ0FBeUIsNEJBQXpCLENBQWQ7QUFDQSxTQUFLQyxlQUFMLEdBQXVCQyxLQUFLLENBQUNDLElBQU4sQ0FBVyxLQUFLVixJQUFMLENBQVVXLGdCQUFWLENBQTJCLG1DQUEzQixDQUFYLENBQXZCO0FBQ0EsU0FBS0MsOEJBQUw7QUFDQSxVQUFNQyxlQUFlLEdBQUcsbUJBQXhCO0FBQ0EsVUFBTUMsZ0JBQWdCLEdBQUcsS0FBS2QsSUFBTCxDQUFVYSxlQUFWLEVBQTJCRSxLQUFwRDtBQUNBLFNBQUtILDhCQUFMLENBQW9DQyxlQUFwQyxFQUFxREMsZ0JBQXJEO0FBQ0g7O0FBQ0RFLFlBQVUsR0FBRztBQUNULFNBQUtSLGVBQUwsQ0FBcUJTLE9BQXJCLENBQThCQyxTQUFELElBQWU7QUFDeENBLGVBQVMsQ0FBQ0MsZ0JBQVYsQ0FBMkIsUUFBM0IsRUFBcUMsTUFBTTtBQUN2QyxhQUFLUCw4QkFBTCxDQUFvQ00sU0FBUyxDQUFDRSxJQUE5QyxFQUFvREYsU0FBUyxDQUFD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QUFWLENBQWUxRixJQUFmO0FBQ0g7O0FBL0I2Qzs7QUFpQ2xELENBQUMsU0FBUzRGLGlCQUFULEdBQTZCO0FBQzFCLFFBQU1DLGFBQWEsR0FBRyxJQUFJcEIsYUFBSixFQUF0QjtBQUNBb0IsZUFBYSxDQUFDaEgsVUFBZDtBQUNILENBSEQsSSIsImZpbGUiOiJwcm9kdWN0RGV0YWlsLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IENvbXBvbmVudCBmcm9tIFwiLi4vY29tbW9uL0NvbXBvbmVudFwiO1xuaW1wb3J0IFNpZGVQYW5lbCBmcm9tIFwiLi4vdWkvU2lkZVBhbmVsXCI7XG5pbXBvcnQgeyBhZGRPclVwZGF0ZUNhcnRUb3RhbHMgfSBmcm9tIFwiLi4vdXRpbC9jYXJ0XCI7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbC9yZXF1ZXN0c1wiO1xuaW1wb3J0IENhcnQgZnJvbSAnLi4vY2FydCc7XG5leHBvcnQgZGVmYXVsdCBjbGFzcyBBamF4QWRkVG9DYXJ0IGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3Rvcihmb3JtKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YSA9IFtdO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5mb3JtID0gZm9ybTtcbiAgICAgICAgdGhpcy5idXR0b24gPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcihgYnV0dG9uW25hbWU9XCJhZGQtdG8tY2FydFwiXWApO1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcyA9IEFycmF5LmZyb20odGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3JBbGwoJy5wcm9kdWN0LWRldGFpbF9fdmFyaWF0aW9ucyBpbnB1dCcpKTtcbiAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VWYXJpYXRpb25BdHRyaWJ1dGUoKTtcbiAgICAgICAgY29uc3QgY3VycmVudFNpemVOYW1lID0gJ2F0dHJpYnV0ZV9wYV9zaXplJztcbiAgICAgICAgY29uc3QgY3VycmVudFNpemVWYWx1ZSA9IHRoaXMuZm9ybVtjdXJyZW50U2l6ZU5hbWVdLnZhbHVlO1xuICAgICAgICB0aGlzLmhhbmRsZUNoYW5nZVZhcmlhdGlvbkF0dHJpYnV0ZShjdXJyZW50U2l6ZU5hbWUsIGN1cnJlbnRTaXplVmFsdWUpO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLnZhcmlhdGlvbkZpZWxkcy5mb3JFYWNoKCh2YXJpYXRpb24pID0+IHtcbiAgICAgICAgICAgIHZhcmlhdGlvbi5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5oYW5kbGVDaGFuZ2VWYXJpYXRpb25BdHRyaWJ1dGUodmFyaWF0aW9uLm5hbWUsIHZhcmlhdGlvbi52YWx1ZSk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRoaXMuYnV0dG9uLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5oYW5kbGVBZGRUb0NhcnRDbGljay5iaW5kKHRoaXMpKTtcbiAgICB9XG4gICAgaGFuZGxlQ2hhbmdlVmFyaWF0aW9uQXR0cmlidXRlKG5hbWUgPSAnJywgdmFsdWUgPSAnJykge1xuICAgICAgICBjb25zdCBjdXJyZW50T3B0aW9ucyA9IHt9O1xuICAgICAgICBmb3IgKGxldCBpbmRleCA9IDA7IGluZGV4IDwgdGhpcy52YXJpYXRpb25GaWVsZHMubGVuZ3RoOyBpbmRleCsrKSB7XG4gICAgICAgICAgICBjb25zdCB2YXJpYXRpb24gPSB0aGlzLnZhcmlhdGlvbkZpZWxkc1tpbmRleF07XG4gICAgICAgICAgICBjb25zdCBuYW1lID0gdmFyaWF0aW9uLm5hbWU7XG4gICAgICAgICAgICBpZiAoIXRoaXMuZm9ybVtuYW1lXS52YWx1ZSkge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGN1cnJlbnRPcHRpb25zW25hbWVdID0gdGhpcy5mb3JtW25hbWVdLnZhbHVlO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHZhcmlhdGlvbklEID0gdGhpcy5maW5kTWF0Y2hpbmdWYXJpYW50KGN1cnJlbnRPcHRpb25zKTtcbiAgICAgICAgdGhpcy5kaXNhYmxlTm9uRXhpc3RpbmdWYXJpYW50cyhuYW1lLCB2YWx1ZSk7XG4gICAgICAgIGlmICghdmFyaWF0aW9uSUQpIHtcbiAgICAgICAgICAgIHRoaXMuc2V0Rm9ybUludmFsaWQoKTtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmZvcm1bJ3ZhcmlhdGlvbl9pZCddLnZhbHVlID0gdmFyaWF0aW9uSUQ7XG4gICAgfVxuICAgIHNldEZvcm1JbnZhbGlkKCkge1xuICAgICAgICB0aGlzLmZvcm1bJ3Byb2R1Y3RfaWQnXS52YWx1ZSA9ICcnO1xuICAgICAgICB0aGlzLmZvcm1bJ3ZhcmlhdGlvbl9pZCddLnZhbHVlID0gJyc7XG4gICAgfVxuICAgIGRpc2FibGVOb25FeGlzdGluZ1ZhcmlhbnRzKG5hbWUgPSAnJywgdmFsdWUgPSAnJykge1xuICAgICAgICBpZiAobmFtZSA9PT0gJ2F0dHJpYnV0ZV9wYV9hbW91bnQnKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgaWYgKG5hbWUgJiYgdmFsdWUpIHtcbiAgICAgICAgICAgIHRoaXMudmFyaWF0aW9uRmllbGRzLmZvckVhY2goKGZpZWxkKSA9PiB7XG4gICAgICAgICAgICAgICAgaWYgKGZpZWxkLm5hbWUgIT09IG5hbWUpIHtcbiAgICAgICAgICAgICAgICAgICAgZmllbGQuZGlzYWJsZWQgPSB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YS5mb3JFYWNoKCh2YXJpYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB2YXJpYXRpb24uYXR0cmlidXRlcztcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKGF0dHJpYnV0ZXNbbmFtZV0gIT09IHZhbHVlKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhpcy52YXJpYXRpb25GaWVsZHMuZm9yRWFjaCgoZmllbGQpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBtYXRjaCA9IGF0dHJpYnV0ZXNbZmllbGQubmFtZV07XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoID09PSBmaWVsZC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICBmaWVsZC5kaXNhYmxlZCA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgZmluZE1hdGNoaW5nVmFyaWFudChjdXJyZW50T3B0aW9ucykge1xuICAgICAgICBsZXQgdmFyaWF0aW9uSUQgPSBudWxsO1xuICAgICAgICBpZiAoIXRoaXMudmFyaWF0aW9uRGF0YS5sZW5ndGgpIHtcbiAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB0aGlzLmZvcm0uZGF0YXNldC5wcm9kdWN0X3ZhcmlhdGlvbnM7XG4gICAgICAgICAgICBpZiAoIWRhdGEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YSA9IEpTT04ucGFyc2UoZGF0YSk7XG4gICAgICAgICAgICBpZiAoIXRoaXMudmFyaWF0aW9uRGF0YSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRoaXMudmFyaWF0aW9uRGF0YS5mb3JFYWNoKCh2YXJpYXRpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IGF0dHJpYnV0ZXMgPSB2YXJpYXRpb24uYXR0cmlidXRlcztcbiAgICAgICAgICAgIGlmICghYXR0cmlidXRlcykge1xuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignbm8gYXR0cmlidXRlcycpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZm9yIChjb25zdCBba2V5LCB2YWx1ZV0gb2YgT2JqZWN0LmVudHJpZXMoYXR0cmlidXRlcykpIHtcbiAgICAgICAgICAgICAgICBpZiAoY3VycmVudE9wdGlvbnNba2V5XSAhPT0gdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhcmlhdGlvbklEID0gdmFyaWF0aW9uWyd2YXJpYXRpb25faWQnXTtcbiAgICAgICAgfSk7XG4gICAgICAgIHJldHVybiB2YXJpYXRpb25JRDtcbiAgICB9XG4gICAgaGFuZGxlQWRkVG9DYXJ0Q2xpY2soZXZlbnQpIHtcbiAgICAgICAgdmFyIF9hO1xuICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICBsZXQgdmFyaWF0aW9uX2lkID0gMDtcbiAgICAgICAgY29uc3QgcHJvZHVjdElkRWxlbWVudCA9IHRoaXMuZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScpO1xuICAgICAgICBjb25zdCB2YXJpYXRpb25JZEVsZW1lbnQgPSB0aGlzLmZvcm0ucXVlcnlTZWxlY3RvcignW25hbWU9XCJ2YXJpYXRpb25faWRcIl0nKTtcbiAgICAgICAgaWYgKHZhcmlhdGlvbklkRWxlbWVudCkge1xuICAgICAgICAgICAgdmFyaWF0aW9uX2lkID0gTnVtYmVyKHZhcmlhdGlvbklkRWxlbWVudC52YWx1ZSk7XG4gICAgICAgIH1cbiAgICAgICAgbGV0IGZvcm1Jc1ZhbGlkID0gdHJ1ZTtcbiAgICAgICAgY29uc3QgZmllbGRzID0gQXJyYXkuZnJvbSh0aGlzLmZvcm0ucXVlcnlTZWxlY3RvckFsbCgnaW5wdXQnKSk7XG4gICAgICAgIGZpZWxkcy5mb3JFYWNoKChmaWVsZCkgPT4ge1xuICAgICAgICAgICAgZmllbGQuZGlzcGF0Y2hFdmVudChuZXcgRXZlbnQoJ3ZhbGlkYXRlJykpO1xuICAgICAgICAgICAgaWYgKCFmaWVsZC52YWxpZGl0eS52YWxpZCkge1xuICAgICAgICAgICAgICAgIGZvcm1Jc1ZhbGlkID0gZmFsc2U7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgICAgICBpZiAoIWZvcm1Jc1ZhbGlkKSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ1Byb2R1Y3QgYWRkIGZvcm0gaXMgbm90IHZhbGlkJyk7XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcXVhbnRpdHkgPSBOdW1iZXIoKF9hID0gdGhpcy5mb3JtLnF1ZXJ5U2VsZWN0b3IoJ2lucHV0W25hbWU9XCJxdWFudGl0eVwiXScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudmFsdWUpIHx8IDE7XG4gICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICBhY3Rpb246ICdhamF4YWRkdG9jYXJ0JyxcbiAgICAgICAgICAgIHByb2R1Y3RfaWQ6IHRoaXMuYnV0dG9uLnZhbHVlLFxuICAgICAgICAgICAgcXVhbnRpdHk6IHF1YW50aXR5LnRvU3RyaW5nKCksXG4gICAgICAgICAgICB2YXJpYXRpb25faWQ6IHZhcmlhdGlvbl9pZC50b1N0cmluZygpXG4gICAgICAgIH07XG4gICAgICAgIHNlbmRBamF4UmVxdWVzdChkYXRhLCB0aGlzLmFqYXhFbmRwb2ludCwgbnVsbCwgdGhpcy5vblN1Y2Nlc3MuYmluZCh0aGlzKSwgdGhpcy5vbkZhaWx1cmUuYmluZCh0aGlzKSwgdW5kZWZpbmVkLCB0aGlzLmJ1dHRvbik7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmIChyZXNwb25zZS5zdWNjZXNzID09PSBmYWxzZSkge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdzb21ldGhpbmcgaXMgd3JvbmcnKTtcbiAgICAgICAgfVxuICAgICAgICBTaWRlUGFuZWwub3BlblNpZGVQYW5lbCgnY2FydC1wYW5lbCcpO1xuICAgICAgICBDYXJ0LnVwZGF0ZUNhcnQoKTtcbiAgICAgICAgaWYgKHJlc3BvbnNlLmRhdGEuY2FydEFtb3VudCkge1xuICAgICAgICAgICAgYWRkT3JVcGRhdGVDYXJ0VG90YWxzKHJlc3BvbnNlLmRhdGEuY2FydEFtb3VudCk7XG4gICAgICAgIH1cbiAgICB9XG4gICAgb25GYWlsdXJlKCkge1xuICAgICAgICBjb25zdCBmb3JtID0gdGhpcy5idXR0b24uY2xvc2VzdCgnZm9ybScpO1xuICAgICAgICBpZiAoZm9ybSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGZvcm0uc3VibWl0KCk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBhZGRUb0NhcnRGb3JtID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignZm9ybS5jYXJ0Jyk7XG4gICAgICAgIGlmIChhZGRUb0NhcnRGb3JtID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgYWpheEFkZFRvQ2FydCA9IG5ldyBBamF4QWRkVG9DYXJ0KGFkZFRvQ2FydEZvcm0pO1xuICAgICAgICBhamF4QWRkVG9DYXJ0LmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5pbXBvcnQgeyB0b1RpdGxlQ2FzZSB9IGZyb20gXCIuLi91dGlsL3N0cmluZ1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlVmFyaWFudENvbG9yIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnRzID0gZWxlbWVudHM7XG4gICAgfVxuICAgIGluaXRpYWxpemUoKSB7XG4gICAgICAgIGNvbnN0IGxhYmVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX192YXJpYXRpb25fX2xhYmVsLS1jb2xvcicpO1xuICAgICAgICBpZiAoIXRoaXMuZWxlbWVudHMubGVuZ3RoIHx8ICFsYWJlbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHRleHQgPSBsYWJlbC50ZXh0Q29udGVudDtcbiAgICAgICAgdGhpcy5lbGVtZW50cy5mb3JFYWNoKChyYWRpbykgPT4ge1xuICAgICAgICAgICAgcmFkaW8uYWRkRXZlbnRMaXN0ZW5lcignY2hhbmdlJywgKCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhbHVlID0gdG9UaXRsZUNhc2UocmFkaW8udmFsdWUpO1xuICAgICAgICAgICAgICAgIGlmICghdmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBsYWJlbC5pbm5lclRleHQgPSBgJHt0ZXh0fTogJHt2YWx1ZX1gO1xuICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICBpZiAocmFkaW8uY2hlY2tlZCkge1xuICAgICAgICAgICAgICAgIHJhZGlvLmRpc3BhdGNoRXZlbnQobmV3IEV2ZW50KCdjaGFuZ2UnKSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0pO1xuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCdbbmFtZT1cImF0dHJpYnV0ZV9wYV9jb2xvclwiXScpKTtcbiAgICAgICAgaWYgKCFyYWRpb0J1dHRvbnMubGVuZ3RoKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgQ2hhbmdlVmFyaWFudENvbG9yKHJhZGlvQnV0dG9ucyk7XG4gICAgICAgIGluc3RhbmNlLmluaXRpYWxpemUoKTtcbiAgICB9XG59XG4iLCJpbXBvcnQgQ29tcG9uZW50IGZyb20gXCIuLi9jb21tb24vQ29tcG9uZW50XCI7XG5pbXBvcnQgeyBzZW5kQWpheFJlcXVlc3QgfSBmcm9tIFwiLi4vdXRpbC9yZXF1ZXN0c1wiO1xuZXhwb3J0IGRlZmF1bHQgY2xhc3MgQ2hhbmdlVmFyaWFudFByaWNlIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgICBjb25zdHJ1Y3RvcihlbGVtZW50cykge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmFqYXhFbmRwb2ludCA9IGAke3dpbmRvdy5sb2NhdGlvbi5vcmlnaW59L3dwLWFkbWluL2FkbWluLWFqYXgucGhwYDtcbiAgICAgICAgdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5zYWxlUHJpY2VFbGVtZW50ID0gbnVsbDtcbiAgICAgICAgdGhpcy5lbGVtZW50cyA9IGVsZW1lbnRzO1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICB0aGlzLnJlZ3VsYXJQcmljZUVsZW1lbnQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcucHJvZHVjdC1kZXRhaWxfX3ByaWNlIGlucyBbZGF0YS1wcm9kdWN0LXByaWNlXScpIHx8IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5wcm9kdWN0LWRldGFpbF9fcHJpY2UgW2RhdGEtcHJvZHVjdC1wcmljZV0nKTtcbiAgICAgICAgdGhpcy5zYWxlUHJpY2VFbGVtZW50ID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX19wcmljZSBkZWwgW2RhdGEtcHJvZHVjdC1wcmljZV0nKTtcbiAgICAgICAgaWYgKCF0aGlzLnNhbGVQcmljZUVsZW1lbnQgJiYgIXRoaXMucmVndWxhclByaWNlRWxlbWVudCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IGZvcm0gPSB0aGlzLmVsZW1lbnRzWzBdLmNsb3Nlc3QoJ2Zvcm0nKTtcbiAgICAgICAgaWYgKCFmb3JtKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgcHJvZHVjdF9pZCA9IGZvcm0uZGF0YXNldC5wcm9kdWN0X2lkO1xuICAgICAgICBpZiAoIXByb2R1Y3RfaWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICB0aGlzLmVsZW1lbnRzLmZvckVhY2goKHJhZGlvKSA9PiB7XG4gICAgICAgICAgICByYWRpby5hZGRFdmVudExpc3RlbmVyKCdjaGFuZ2UnLCAoKSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgdmFyaWF0aW9uSWRFbGVtZW50ID0gZm9ybS5xdWVyeVNlbGVjdG9yKCdbbmFtZT1cInZhcmlhdGlvbl9pZFwiXScpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZhcmlhdGlvbl9pZCA9IHZhcmlhdGlvbklkRWxlbWVudCA9PT0gbnVsbCB8fCB2YXJpYXRpb25JZEVsZW1lbnQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhdGlvbklkRWxlbWVudC52YWx1ZTtcbiAgICAgICAgICAgICAgICBpZiAoIXZhcmlhdGlvbl9pZCB8fCAhcHJvZHVjdF9pZCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGRhdGEgPSB7XG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbjogJ2FqYXhnZXR2YXJpYW50cHJpY2UnLFxuICAgICAgICAgICAgICAgICAgICBwcm9kdWN0X2lkOiBwcm9kdWN0X2lkLFxuICAgICAgICAgICAgICAgICAgICB2YXJpYXRpb25faWQ6IHZhcmlhdGlvbl9pZFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgc2VuZEFqYXhSZXF1ZXN0KGRhdGEsIHRoaXMuYWpheEVuZHBvaW50LCBudWxsLCB0aGlzLm9uU3VjY2Vzcy5iaW5kKHRoaXMpKTtcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcbiAgICB9XG4gICAgb25TdWNjZXNzKHJlc3BvbnNlKSB7XG4gICAgICAgIGlmICghcmVzcG9uc2UuZGF0YSB8fCAoIXJlc3BvbnNlLmRhdGEuc2FsZVByaWNlICYmICFyZXNwb25zZS5kYXRhLnJlZ3VsYXJQcmljZSkpIHtcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcignTm8gZGF0YScpO1xuICAgICAgICB9XG4gICAgICAgIGNvbnN0IHJlZ3VsYXJQcmljZSA9IE51bWJlcihyZXNwb25zZS5kYXRhLnJlZ3VsYXJQcmljZSkudG9GaXhlZCgyKTtcbiAgICAgICAgY29uc3Qgc2FsZVByaWNlID0gTnVtYmVyKHJlc3BvbnNlLmRhdGEuc2FsZVByaWNlKS50b0ZpeGVkKDIpO1xuICAgICAgICBpZiAodGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50ICYmIHJlZ3VsYXJQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5yZWd1bGFyUHJpY2VFbGVtZW50LmlubmVyVGV4dCA9IHJlZ3VsYXJQcmljZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAodGhpcy5zYWxlUHJpY2VFbGVtZW50ICYmIHNhbGVQcmljZSkge1xuICAgICAgICAgICAgdGhpcy5zYWxlUHJpY2VFbGVtZW50LmlubmVyVGV4dCA9IHNhbGVQcmljZTtcbiAgICAgICAgfVxuICAgIH1cbiAgICBzdGF0aWMgb25Jbml0KHNlbGVjdG9yID0gZG9jdW1lbnQpIHtcbiAgICAgICAgY29uc3QgcmFkaW9CdXR0b25zID0gQXJyYXkuZnJvbShzZWxlY3Rvci5xdWVyeVNlbGVjdG9yQWxsKCcucHJvZHVjdC1kZXRhaWxfX3ZhcmlhdGlvbnMgaW5wdXRbdHlwZT1cInJhZGlvJykpO1xuICAgICAgICBpZiAoIXJhZGlvQnV0dG9ucy5sZW5ndGgpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgICBjb25zdCBpbnN0YW5jZSA9IG5ldyBDaGFuZ2VWYXJpYW50UHJpY2UocmFkaW9CdXR0b25zKTtcbiAgICAgICAgaW5zdGFuY2UuaW5pdGlhbGl6ZSgpO1xuICAgIH1cbn1cbiIsImltcG9ydCBDb21wb25lbnQgZnJvbSBcIi4uL2NvbW1vbi9Db21wb25lbnRcIjtcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIEltYWdlR2FsbGVyeSBleHRlbmRzIENvbXBvbmVudCB7XG4gICAgY29uc3RydWN0b3IoZWxlbWVudCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLmVsZW1lbnQgPSBlbGVtZW50O1xuICAgIH1cbiAgICBpbml0aWFsaXplKCkge1xuICAgICAgICBjb25zdCB0aHVtYm5haWxBbmNob3JzID0gQXJyYXkuZnJvbSh0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnLnByb2R1Y3QtZGV0YWlsX19nYWxsZXJ5X190aHVtYm5haWxzIGEnKSk7XG4gICAgICAgIHRodW1ibmFpbEFuY2hvcnMuZm9yRWFjaCgoYW5jaG9yKSA9PiB7XG4gICAgICAgICAgICBhbmNob3IuYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snLCAoZXZlbnQpID0+IHtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgICAgIGNvbnN0IGlkID0gYW5jaG9yLmRhdGFzZXQudGh1bWJuYWlsSWQ7XG4gICAgICAgICAgICAgICAgY29uc3QgaW1hZ2UgPSB0aGlzLmVsZW1lbnQucXVlcnlTZWxlY3RvcihgW2RhdGEtaW1hZ2UtaWQ9XCIke2lkfVwiXWApO1xuICAgICAgICAgICAgICAgIGlmIChpbWFnZSA9PT0gbnVsbCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGNvbnN0IGltYWdlUGFyZW50ID0gaW1hZ2UucGFyZW50RWxlbWVudDtcbiAgICAgICAgICAgICAgICBBcnJheS5mcm9tKGltYWdlUGFyZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJ2xpLmFjdGl2ZScpKS5mb3JFYWNoKChlbGVtZW50KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGVsZW1lbnQuY2xhc3NMaXN0LnJlbW92ZSgnYWN0aXZlJyk7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgaW1hZ2UuY2xhc3NMaXN0LmFkZCgnYWN0aXZlJyk7XG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfSk7XG4gICAgfVxuICAgIHN0YXRpYyBvbkluaXQoc2VsZWN0b3IgPSBkb2N1bWVudCkge1xuICAgICAgICBjb25zdCBlbGVtZW50ID0gc2VsZWN0b3IucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX19nYWxsZXJ5Jyk7XG4gICAgICAgIGlmIChlbGVtZW50ID09PSBudWxsKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgY29uc3QgaW5zdGFuY2UgPSBuZXcgSW1hZ2VHYWxsZXJ5KGVsZW1lbnQpO1xuICAgICAgICBpbnN0YW5jZS5pbml0aWFsaXplKCk7XG4gICAgfVxufVxuIiwiaW1wb3J0IEFqYXhBZGRUb0NhcnQgZnJvbSBcIi4vY29tcG9uZW50cy9BamF4QWRkVG9DYXJ0XCI7XG5pbXBvcnQgQW1vdW50U2VsZWN0b3IgZnJvbSBcIi4vY29tcG9uZW50cy9BbW91bnRTZWxlY3RvclwiO1xuaW1wb3J0IENoYW5nZVZhcmlhbnRDb2xvciBmcm9tIFwiLi9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRDb2xvclwiO1xuaW1wb3J0IENoYW5nZVZhcmlhbnRQcmljZSBmcm9tIFwiLi9jb21wb25lbnRzL0NoYW5nZVZhcmlhbnRQcmljZVwiO1xuaW1wb3J0IEltYWdlR2FsbGVyeSBmcm9tIFwiLi9jb21wb25lbnRzL0ltYWdlR2FsbGVyeVwiO1xuaW1wb3J0IE1vZHVsZSBmcm9tIFwiLi9Nb2R1bGVcIjtcbmltcG9ydCBEYXRhTGF5ZXIgZnJvbSAnLi9jb21tb24vRGF0YUxheWVyJztcbmV4cG9ydCBkZWZhdWx0IGNsYXNzIFByb2R1Y3REZXRhaWwgZXh0ZW5kcyBNb2R1bGUge1xuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlciguLi5hcmd1bWVudHMpO1xuICAgICAgICB0aGlzLmNvbXBvbmVudHMgPSBbXG4gICAgICAgICAgICBBamF4QWRkVG9DYXJ0LFxuICAgICAgICAgICAgQW1vdW50U2VsZWN0b3IsXG4gICAgICAgICAgICBJbWFnZUdhbGxlcnksXG4gICAgICAgICAgICBDaGFuZ2VWYXJpYW50UHJpY2UsXG4gICAgICAgICAgICBDaGFuZ2VWYXJpYW50Q29sb3JcbiAgICAgICAgXTtcbiAgICB9XG4gICAgaW5pdGlhbGl6ZSgpIHtcbiAgICAgICAgdmFyIF9hLCBfYiwgX2M7XG4gICAgICAgIHN1cGVyLmluaXRpYWxpemUoKTtcbiAgICAgICAgY29uc3QgZGF0YSA9IHtcbiAgICAgICAgICAgIGV2ZW50OiBcInZpZXdfaXRlbVwiLFxuICAgICAgICAgICAgZWNvbW1lcmNlOiB7XG4gICAgICAgICAgICAgICAgaXRlbXM6IFtdXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG4gICAgICAgIGNvbnN0IGZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdmb3JtW2RhdGEtcHJvZHVjdF9pZF0nKTtcbiAgICAgICAgY29uc3QgdmFyaWF0aW9uRmllbGQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCdpbnB1dFtuYW1lPVwidmFyaWF0aW9uX2lkXCJdJyk7XG4gICAgICAgIGNvbnN0IHByb2R1Y3REYXRhID0ge1xuICAgICAgICAgICAgaXRlbV9pZDogKGZvcm0gPT09IG51bGwgfHwgZm9ybSA9PT0gdm9pZCAwID8gdm9pZCAwIDogZm9ybS5kYXRhc2V0LnByb2R1Y3RfaWQpIHx8ICcnLFxuICAgICAgICAgICAgaXRlbV9uYW1lOiAoKF9hID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnByb2R1Y3QtZGV0YWlsX190aXRsZScpKSA9PT0gbnVsbCB8fCBfYSA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2EudGV4dENvbnRlbnQpIHx8ICcnLFxuICAgICAgICAgICAgaXRlbV92YXJpYW50OiAodmFyaWF0aW9uRmllbGQgPT09IG51bGwgfHwgdmFyaWF0aW9uRmllbGQgPT09IHZvaWQgMCA/IHZvaWQgMCA6IHZhcmlhdGlvbkZpZWxkLnZhbHVlKSB8fCAnJyxcbiAgICAgICAgICAgIHByaWNlOiBOdW1iZXIoKF9jID0gKF9iID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignW2RhdGEtcHJvZHVjdC1wcmljZV0nKSkgPT09IG51bGwgfHwgX2IgPT09IHZvaWQgMCA/IHZvaWQgMCA6IF9iLnRleHRDb250ZW50KSA9PT0gbnVsbCB8fCBfYyA9PT0gdm9pZCAwID8gdm9pZCAwIDogX2MucmVwbGFjZSgnLCcsICcuJykpIHx8IDAsXG4gICAgICAgICAgICBpdGVtX2JyYW5kOiBcIkxhdmFuZHLDqVwiLFxuICAgICAgICB9O1xuICAgICAgICBkYXRhLmVjb21tZXJjZS5pdGVtcy5wdXNoKHByb2R1Y3REYXRhKTtcbiAgICAgICAgRGF0YUxheWVyLnB1c2goZGF0YSk7XG4gICAgfVxufVxuKGZ1bmN0aW9uIHByb2R1Y3REZXRhaWxJbml0KCkge1xuICAgIGNvbnN0IHByb2R1Y3REZXRhaWwgPSBuZXcgUHJvZHVjdERldGFpbCgpO1xuICAgIHByb2R1Y3REZXRhaWwuaW5pdGlhbGl6ZSgpO1xufSkoKTtcbiJdLCJzb3VyY2VSb290IjoiIn0=