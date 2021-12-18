(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app~checkout"],{

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

/***/ }),

/***/ "./node_modules/@ungap/custom-elements/index.js":
/*!******************************************************!*\
  !*** ./node_modules/@ungap/custom-elements/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

/*! (c) Andrea Giammarchi @webreflection ISC */
(function () {
  'use strict';

  var Lie = typeof Promise === 'function' ? Promise : function (fn) {
    var queue = [],
        resolved = 0,
        value;
    fn(function ($) {
      value = $;
      resolved = 1;
      queue.splice(0).forEach(then);
    });
    return {
      then: then
    };

    function then(fn) {
      return resolved ? setTimeout(fn, 0, value) : queue.push(fn), this;
    }
  };

  var attributesObserver = (function (whenDefined, MutationObserver) {
    var attributeChanged = function attributeChanged(records) {
      for (var i = 0, length = records.length; i < length; i++) {
        dispatch(records[i]);
      }
    };

    var dispatch = function dispatch(_ref) {
      var target = _ref.target,
          attributeName = _ref.attributeName,
          oldValue = _ref.oldValue;
      target.attributeChangedCallback(attributeName, oldValue, target.getAttribute(attributeName));
    };

    return function (target, is) {
      var attributeFilter = target.constructor.observedAttributes;

      if (attributeFilter) {
        whenDefined(is).then(function () {
          new MutationObserver(attributeChanged).observe(target, {
            attributes: true,
            attributeOldValue: true,
            attributeFilter: attributeFilter
          });

          for (var i = 0, length = attributeFilter.length; i < length; i++) {
            if (target.hasAttribute(attributeFilter[i])) dispatch({
              target: target,
              attributeName: attributeFilter[i],
              oldValue: null
            });
          }
        });
      }

      return target;
    };
  });

  var TRUE = true,
      FALSE = false;
  var QSA$1 = 'querySelectorAll';

  function add(node) {
    this.observe(node, {
      subtree: TRUE,
      childList: TRUE
    });
  }
  /**
   * Start observing a generic document or root element.
   * @param {Function} callback triggered per each dis/connected node
   * @param {Element?} root by default, the global document to observe
   * @param {Function?} MO by default, the global MutationObserver
   * @returns {MutationObserver}
   */


  var notify = function notify(callback, root, MO) {
    var loop = function loop(nodes, added, removed, connected, pass) {
      for (var i = 0, length = nodes.length; i < length; i++) {
        var node = nodes[i];

        if (pass || QSA$1 in node) {
          if (connected) {
            if (!added.has(node)) {
              added.add(node);
              removed["delete"](node);
              callback(node, connected);
            }
          } else if (!removed.has(node)) {
            removed.add(node);
            added["delete"](node);
            callback(node, connected);
          }

          if (!pass) loop(node[QSA$1]('*'), added, removed, connected, TRUE);
        }
      }
    };

    var observer = new (MO || MutationObserver)(function (records) {
      for (var added = new Set(), removed = new Set(), i = 0, length = records.length; i < length; i++) {
        var _records$i = records[i],
            addedNodes = _records$i.addedNodes,
            removedNodes = _records$i.removedNodes;
        loop(removedNodes, added, removed, FALSE, FALSE);
        loop(addedNodes, added, removed, TRUE, FALSE);
      }
    });
    observer.add = add;
    observer.add(root || document);
    return observer;
  };

  var QSA = 'querySelectorAll';
  var _self$1 = self,
      document$2 = _self$1.document,
      Element$1 = _self$1.Element,
      MutationObserver$2 = _self$1.MutationObserver,
      Set$2 = _self$1.Set,
      WeakMap$1 = _self$1.WeakMap;

  var elements = function elements(element) {
    return QSA in element;
  };

  var filter = [].filter;
  var qsaObserver = (function (options) {
    var live = new WeakMap$1();

    var drop = function drop(elements) {
      for (var i = 0, length = elements.length; i < length; i++) {
        live["delete"](elements[i]);
      }
    };

    var flush = function flush() {
      var records = observer.takeRecords();

      for (var i = 0, length = records.length; i < length; i++) {
        parse(filter.call(records[i].removedNodes, elements), false);
        parse(filter.call(records[i].addedNodes, elements), true);
      }
    };

    var matches = function matches(element) {
      return element.matches || element.webkitMatchesSelector || element.msMatchesSelector;
    };

    var notifier = function notifier(element, connected) {
      var selectors;

      if (connected) {
        for (var q, m = matches(element), i = 0, length = query.length; i < length; i++) {
          if (m.call(element, q = query[i])) {
            if (!live.has(element)) live.set(element, new Set$2());
            selectors = live.get(element);

            if (!selectors.has(q)) {
              selectors.add(q);
              options.handle(element, connected, q);
            }
          }
        }
      } else if (live.has(element)) {
        selectors = live.get(element);
        live["delete"](element);
        selectors.forEach(function (q) {
          options.handle(element, connected, q);
        });
      }
    };

    var parse = function parse(elements) {
      var connected = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      for (var i = 0, length = elements.length; i < length; i++) {
        notifier(elements[i], connected);
      }
    };

    var query = options.query;
    var root = options.root || document$2;
    var observer = notify(notifier, root, MutationObserver$2);
    var attachShadow = Element$1.prototype.attachShadow;
    if (attachShadow) Element$1.prototype.attachShadow = function (init) {
      var shadowRoot = attachShadow.call(this, init);
      observer.add(shadowRoot);
      return shadowRoot;
    };
    if (query.length) parse(root[QSA](query));
    return {
      drop: drop,
      flush: flush,
      observer: observer,
      parse: parse
    };
  });

  var _self = self,
      document$1 = _self.document,
      Map = _self.Map,
      MutationObserver$1 = _self.MutationObserver,
      Object$1 = _self.Object,
      Set$1 = _self.Set,
      WeakMap = _self.WeakMap,
      Element = _self.Element,
      HTMLElement = _self.HTMLElement,
      Node = _self.Node,
      Error = _self.Error,
      TypeError = _self.TypeError,
      Reflect = _self.Reflect;
  var Promise$1 = self.Promise || Lie;
  var defineProperty = Object$1.defineProperty,
      keys = Object$1.keys,
      getOwnPropertyNames = Object$1.getOwnPropertyNames,
      setPrototypeOf = Object$1.setPrototypeOf;
  var legacy = !self.customElements;

  var expando = function expando(element) {
    var key = keys(element);
    var value = [];
    var length = key.length;

    for (var i = 0; i < length; i++) {
      value[i] = element[key[i]];
      delete element[key[i]];
    }

    return function () {
      for (var _i = 0; _i < length; _i++) {
        element[key[_i]] = value[_i];
      }
    };
  };

  if (legacy) {
    var HTMLBuiltIn = function HTMLBuiltIn() {
      var constructor = this.constructor;
      if (!classes.has(constructor)) throw new TypeError('Illegal constructor');
      var is = classes.get(constructor);
      if (override) return augment(override, is);
      var element = createElement.call(document$1, is);
      return augment(setPrototypeOf(element, constructor.prototype), is);
    };

    var createElement = document$1.createElement;
    var classes = new Map();
    var defined = new Map();
    var prototypes = new Map();
    var registry = new Map();
    var query = [];

    var handle = function handle(element, connected, selector) {
      var proto = prototypes.get(selector);

      if (connected && !proto.isPrototypeOf(element)) {
        var redefine = expando(element);
        override = setPrototypeOf(element, proto);

        try {
          new proto.constructor();
        } finally {
          override = null;
          redefine();
        }
      }

      var method = "".concat(connected ? '' : 'dis', "connectedCallback");
      if (method in proto) element[method]();
    };

    var _qsaObserver = qsaObserver({
      query: query,
      handle: handle
    }),
        parse = _qsaObserver.parse;

    var override = null;

    var whenDefined = function whenDefined(name) {
      if (!defined.has(name)) {
        var _,
            $ = new Lie(function ($) {
          _ = $;
        });

        defined.set(name, {
          $: $,
          _: _
        });
      }

      return defined.get(name).$;
    };

    var augment = attributesObserver(whenDefined, MutationObserver$1);
    defineProperty(self, 'customElements', {
      configurable: true,
      value: {
        define: function define(is, Class) {
          if (registry.has(is)) throw new Error("the name \"".concat(is, "\" has already been used with this registry"));
          classes.set(Class, is);
          prototypes.set(is, Class.prototype);
          registry.set(is, Class);
          query.push(is);
          whenDefined(is).then(function () {
            parse(document$1.querySelectorAll(is));
          });

          defined.get(is)._(Class);
        },
        get: function get(is) {
          return registry.get(is);
        },
        whenDefined: whenDefined
      }
    });
    defineProperty(HTMLBuiltIn.prototype = HTMLElement.prototype, 'constructor', {
      value: HTMLBuiltIn
    });
    defineProperty(self, 'HTMLElement', {
      configurable: true,
      value: HTMLBuiltIn
    });
    defineProperty(document$1, 'createElement', {
      configurable: true,
      value: function value(name, options) {
        var is = options && options.is;
        var Class = is ? registry.get(is) : registry.get(name);
        return Class ? new Class() : createElement.call(document$1, name);
      }
    }); // in case ShadowDOM is used through a polyfill, to avoid issues
    // with builtin extends within shadow roots

    if (!('isConnected' in Node.prototype)) defineProperty(Node.prototype, 'isConnected', {
      configurable: true,
      get: function get() {
        return !(this.ownerDocument.compareDocumentPosition(this) & this.DOCUMENT_POSITION_DISCONNECTED);
      }
    });
  } else {
    try {
      var LI = function LI() {
        return self.Reflect.construct(HTMLLIElement, [], LI);
      };

      LI.prototype = HTMLLIElement.prototype;
      var is = 'extends-li';
      self.customElements.define('extends-li', LI, {
        'extends': 'li'
      });
      legacy = document$1.createElement('li', {
        is: is
      }).outerHTML.indexOf(is) < 0;
      var _self$customElements = self.customElements,
          get = _self$customElements.get,
          _whenDefined = _self$customElements.whenDefined;
      defineProperty(self.customElements, 'whenDefined', {
        configurable: true,
        value: function value(is) {
          var _this = this;

          return _whenDefined.call(this, is).then(function (Class) {
            return Class || get.call(_this, is);
          });
        }
      });
    } catch (o_O) {
      legacy = !legacy;
    }
  }

  if (legacy) {
    var parseShadow = function parseShadow(element) {
      var root = shadowRoots.get(element);

      _parse(root.querySelectorAll(this), element.isConnected);
    };

    var customElements = self.customElements;
    var attachShadow = Element.prototype.attachShadow;
    var _createElement = document$1.createElement;
    var define = customElements.define,
        _get = customElements.get;

    var _ref = Reflect || {
      construct: function construct(HTMLElement) {
        return HTMLElement.call(this);
      }
    },
        construct = _ref.construct;

    var shadowRoots = new WeakMap();
    var shadows = new Set$1();

    var _classes = new Map();

    var _defined = new Map();

    var _prototypes = new Map();

    var _registry = new Map();

    var shadowed = [];
    var _query = [];

    var getCE = function getCE(is) {
      return _registry.get(is) || _get.call(customElements, is);
    };

    var _handle = function _handle(element, connected, selector) {
      var proto = _prototypes.get(selector);

      if (connected && !proto.isPrototypeOf(element)) {
        var redefine = expando(element);
        _override = setPrototypeOf(element, proto);

        try {
          new proto.constructor();
        } finally {
          _override = null;
          redefine();
        }
      }

      var method = "".concat(connected ? '' : 'dis', "connectedCallback");
      if (method in proto) element[method]();
    };

    var _qsaObserver2 = qsaObserver({
      query: _query,
      handle: _handle
    }),
        _parse = _qsaObserver2.parse;

    var _qsaObserver3 = qsaObserver({
      query: shadowed,
      handle: function handle(element, connected) {
        if (shadowRoots.has(element)) {
          if (connected) shadows.add(element);else shadows["delete"](element);
          if (_query.length) parseShadow.call(_query, element);
        }
      }
    }),
        parseShadowed = _qsaObserver3.parse;

    var _whenDefined2 = function _whenDefined2(name) {
      if (!_defined.has(name)) {
        var _,
            $ = new Promise$1(function ($) {
          _ = $;
        });

        _defined.set(name, {
          $: $,
          _: _
        });
      }

      return _defined.get(name).$;
    };

    var _augment = attributesObserver(_whenDefined2, MutationObserver$1);

    var _override = null;
    getOwnPropertyNames(self).filter(function (k) {
      return /^HTML/.test(k);
    }).forEach(function (k) {
      var HTMLElement = self[k];

      function HTMLBuiltIn() {
        var constructor = this.constructor;
        if (!_classes.has(constructor)) throw new TypeError('Illegal constructor');

        var _classes$get = _classes.get(constructor),
            is = _classes$get.is,
            tag = _classes$get.tag;

        if (is) {
          if (_override) return _augment(_override, is);

          var element = _createElement.call(document$1, tag);

          element.setAttribute('is', is);
          return _augment(setPrototypeOf(element, constructor.prototype), is);
        } else return construct.call(this, HTMLElement, [], constructor);
      }


      defineProperty(HTMLBuiltIn.prototype = HTMLElement.prototype, 'constructor', {
        value: HTMLBuiltIn
      });
      defineProperty(self, k, {
        value: HTMLBuiltIn
      });
    });
    defineProperty(document$1, 'createElement', {
      configurable: true,
      value: function value(name, options) {
        var is = options && options.is;

        if (is) {
          var Class = _registry.get(is);

          if (Class && _classes.get(Class).tag === name) return new Class();
        }

        var element = _createElement.call(document$1, name);

        if (is) element.setAttribute('is', is);
        return element;
      }
    });
    if (attachShadow) Element.prototype.attachShadow = function (init) {
      var root = attachShadow.call(this, init);
      shadowRoots.set(this, root);
      return root;
    };
    defineProperty(customElements, 'get', {
      configurable: true,
      value: getCE
    });
    defineProperty(customElements, 'whenDefined', {
      configurable: true,
      value: _whenDefined2
    });
    defineProperty(customElements, 'define', {
      configurable: true,
      value: function value(is, Class, options) {
        if (getCE(is)) throw new Error("'".concat(is, "' has already been defined as a custom element"));
        var selector;
        var tag = options && options["extends"];

        _classes.set(Class, tag ? {
          is: is,
          tag: tag
        } : {
          is: '',
          tag: is
        });

        if (tag) {
          selector = "".concat(tag, "[is=\"").concat(is, "\"]");

          _prototypes.set(selector, Class.prototype);

          _registry.set(is, Class);

          _query.push(selector);
        } else {
          define.apply(customElements, arguments);
          shadowed.push(selector = is);
        }

        _whenDefined2(is).then(function () {
          if (tag) {
            _parse(document$1.querySelectorAll(selector));

            shadows.forEach(parseShadow, [selector]);
          } else parseShadowed(document$1.querySelectorAll(selector));
        });

        _defined.get(is)._(Class);
      }
    });
  }

}());


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxhdmFuZHJlL2J1dHRvbi9kaXN0L3NyYy9MYXZhbmRyZUJ1dHRvbi5qcyIsIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvQGxhdmFuZHJlL2J1dHRvbi9kaXN0L3NyYy9sYXZhbmRyZS1idXR0b24uanMiLCJ3ZWJwYWNrOi8vLy4vbm9kZV9tb2R1bGVzL0B1bmdhcC9jdXN0b20tZWxlbWVudHMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7OztBQUFBO0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBDOzs7Ozs7Ozs7Ozs7QUN6TkE7QUFBQTtBQUFxRDtBQUNyRCxnREFBZ0QsaUVBQWMsR0FBRyxvQkFBb0I7QUFDckYsMkM7Ozs7Ozs7Ozs7O0FDRkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSw4Q0FBOEMsWUFBWTtBQUMxRDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVzs7QUFFWCwwREFBMEQsWUFBWTtBQUN0RTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsYUFBYSxTQUFTO0FBQ3RCLGFBQWEsU0FBUztBQUN0QixhQUFhLFVBQVU7QUFDdkIsZUFBZTtBQUNmOzs7QUFHQTtBQUNBO0FBQ0EsNENBQTRDLFlBQVk7QUFDeEQ7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzRkFBc0YsWUFBWTtBQUNsRztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtDQUErQyxZQUFZO0FBQzNEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLDhDQUE4QyxZQUFZO0FBQzFEO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0EsdUVBQXVFLFlBQVk7QUFDbkY7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBOztBQUVBO0FBQ0E7O0FBRUEsK0NBQStDLFlBQVk7QUFDM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxtQkFBbUIsWUFBWTtBQUMvQjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsYUFBYTtBQUNuQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUzs7QUFFVDtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXOztBQUVYO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUssRUFBRTtBQUNQOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0wsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBLE9BQU87QUFDUCxLQUFLO0FBQ0w7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4Q0FBOEM7QUFDOUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBLFNBQVM7QUFDVDs7O0FBR0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsV0FBVztBQUNYLFNBQVM7O0FBRVQ7QUFDQTtBQUNBLEtBQUs7QUFDTDs7QUFFQSxDQUFDIiwiZmlsZSI6InZlbmRvcnN+YXBwfmNoZWNrb3V0LmpzIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgdGVtcGxhdGUgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCd0ZW1wbGF0ZScpO1xudGVtcGxhdGUuaW5uZXJIVE1MID0gYFxuICA8c3R5bGU+XG4gICAgOnJvb3Qge1xuICAgICAgICAtLXdoaXRlOiAjRkZGRkZGO1xuICAgICAgICAtLWpldDogIzJCMkIyQjtcbiAgICAgICAgLS1vbGQtYnVyZ3VuZHk6ICMzRDJCMzA7XG4gICAgICAgIC0tc3ViZHVlZDogI2JhYmZjMztcbiAgICAgICAgLS1mb250LWZhbWlseS1hY2NlbnQ6IGFkb2JlLWdhcmFtb25kLXBybywgc2VyaWY7XG5cbiAgICAgICAgLS1idXR0b24tYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XG4gICAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQtaG92ZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG5cbiAgICAgICAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgICAgICAtLWJ1dHRvbi1ib3JkZXItaG92ZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG5cbiAgICAgICAgLS1idXR0b24tdGV4dC1jb2xvcjogdmFyKC0tb2xkLWJ1cmd1bmR5KTtcbiAgICAgICAgLS1idXR0b24tdGV4dC1ob3Zlci1jb2xvcjogdmFyKC0td2hpdGUpO1xuXG4gICAgICAgIC0tYnV0dG9uLWZvbnQtc2l6ZTogY2FsYygxM3JlbSAvIDE2KTtcbiAgICB9XG5cbiAgICBbaXM9XCJsYXZhbmRyZS1idXR0b25cIl1bcHJpbWFyeV0ge1xuICAgICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgICAgICAtLWJ1dHRvbi1iYWNrZ3JvdW5kLWhvdmVyLWNvbG9yOiB2YXIoLS10cmFuc3BhcmVudCk7XG5cbiAgICAgICAgLS1idXR0b24tYm9yZGVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgICAgICAtLWJ1dHRvbi1ib3JkZXItaG92ZXItY29sb3I6IHZhcigtLW9sZC1idXJndW5keSk7XG5cbiAgICAgICAgLS1idXR0b24tdGV4dC1jb2xvcjogdmFyKC0td2hpdGUpO1xuICAgICAgICAtLWJ1dHRvbi10ZXh0LWhvdmVyLWNvbG9yOiB2YXIoLS1vbGQtYnVyZ3VuZHkpO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtvdXRsaW5lXSB7XG4gICAgICAgIC0tYnV0dG9uLWJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtzaXplPVwic21hbGxcIl0ge1xuICAgICAgICBtaW4taGVpZ2h0OiAxLjc1cmVtO1xuICAgICAgICBwYWRkaW5nOiAuM3JlbSAuNzVyZW07XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW3NpemU9XCJsYXJnZVwiXSB7XG4gICAgICAgIG1pbi1oZWlnaHQ6IDMuNzVyZW07XG4gICAgICAgIG1pbi13aWR0aDogMy43NXJlbTtcbiAgICAgICAgcGFkZGluZzogLjc1cmVtIDEuNXJlbTtcbiAgICAgICAgZm9udC1zaXplOiAxLjVyZW07XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW2Z1bGwtd2lkdGhdIHtcbiAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdIHtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB6LWluZGV4OiAwO1xuXG4gICAgICAgIGRpc3BsYXk6IGlubGluZS1mbGV4O1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgbWluLWhlaWdodDogMi4yNXJlbTtcbiAgICAgICAgbWluLXdpZHRoOiAyLjI1cmVtO1xuICAgICAgICBtYXJnaW46IDAgYXV0bztcbiAgICAgICAgcGFkZGluZzogLjVyZW0gMS41cmVtO1xuXG4gICAgICAgIGJhY2tncm91bmQ6IHZhcigtLWJ1dHRvbi1iYWNrZ3JvdW5kLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyOiAxcHggc29saWQgdmFyKC0tYnV0dG9uLWJvcmRlci1jb2xvcik7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDA7XG4gICAgICAgIG91dGxpbmU6IDA7XG5cbiAgICAgICAgY29sb3I6IHZhcigtLWJ1dHRvbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgZm9udC1mYW1pbHk6IHZhcigtLWZvbnQtZmFtaWx5LWFjY2VudCk7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiAxMDA7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgZm9udC1zaXplOiB2YXIoLS1idXR0b24tZm9udC1zaXplKTtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDE7XG4gICAgICAgIHRleHQtdHJhbnNmb3JtOiBpbml0aWFsO1xuICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG5cbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB0cmFuc2l0aW9uOiBhbGwgLjRzIGVhc2U7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZC1jb2xvcjogdmFyKC0tYnV0dG9uLWJhY2tncm91bmQtaG92ZXItY29sb3IpO1xuICAgICAgICBib3JkZXItY29sb3I6IHZhcigtLWJ1dHRvbi1ib3JkZXItaG92ZXItY29sb3IpO1xuICAgICAgICBjb2xvcjogdmFyKC0tYnV0dG9uLXRleHQtaG92ZXItY29sb3IpO1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdIHN2ZyxcbiAgICBbaXM9XCJsYXZhbmRyZS1idXR0b25cIl0gcGF0aCB7XG4gICAgICAgIGZpbGw6IHZhcigtLWJ1dHRvbi10ZXh0LWNvbG9yKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1idXR0b24tdGV4dC1jb2xvcik7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdOmhvdmVyIHN2ZyxcbiAgICBbaXM9XCJsYXZhbmRyZS1idXR0b25cIl06aG92ZXIgcGF0aCB7XG4gICAgICAgIGZpbGw6IHZhcigtLWJ1dHRvbi10ZXh0LWhvdmVyLWNvbG9yKTtcbiAgICAgICAgc3Ryb2tlOiB2YXIoLS1idXR0b24tdGV4dC1ob3Zlci1jb2xvcik7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdIHN2ZyB7XG4gICAgICAgIG1hcmdpbi1yaWdodDogLjVyZW07XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW2xvYWRpbmddIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW2xvYWRpbmddIHtcbiAgICAgICAgY29sb3I6IHRyYW5zcGFyZW50ICFpbXBvcnRhbnQ7XG4gICAgfVxuXG4gICAgW2lzPVwibGF2YW5kcmUtYnV0dG9uXCJdW2xvYWRpbmddOmFmdGVyIHtcbiAgICAgICAgY29udGVudDogXCJcIjtcbiAgICAgICAgcG9zaXRpb246IGFic29sdXRlO1xuICAgICAgICBpbnNldDogMDtcbiAgICAgICAgbWFyZ2luOiBhdXRvO1xuXG4gICAgICAgIHdpZHRoOiAuNzVlbTtcbiAgICAgICAgaGVpZ2h0OiAuNzVlbTtcbiAgICAgICAgYm9yZGVyLWNvbG9yOiB0cmFuc3BhcmVudCB0cmFuc3BhcmVudCB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKSB2YXIoLS1idXR0b24tYm9yZGVyLWNvbG9yKTtcbiAgICAgICAgYm9yZGVyLXN0eWxlOiBzb2xpZDtcbiAgICAgICAgYm9yZGVyLXdpZHRoOiAzcHg7XG4gICAgICAgIGJvcmRlci1yYWRpdXM6IDUwJTtcbiAgICAgICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVaKDApO1xuICAgICAgICBhbmltYXRpb246IGJ0bmxvYWRpbmcgMXMgbGluZWFyIGluZmluaXRlO1xuICAgIH1cblxuICAgIFtpcz1cImxhdmFuZHJlLWJ1dHRvblwiXVtsb2FkaW5nXVtwcmltYXJ5XTphZnRlciB7XG4gICAgICAgIGJvcmRlci1jb2xvcjogdHJhbnNwYXJlbnQgdHJhbnNwYXJlbnQgI0ZGRkZGRiAjRkZGRkZGO1xuICAgIH1cblxuICAgIEBrZXlmcmFtZXMgYnRubG9hZGluZyB7XG4gICAgICAgIDAlIHtcbiAgICAgICAgICAgIHRyYW5zZm9ybTogcm90YXRlKDBkZWcpXG4gICAgICAgIH1cblxuICAgICAgICB0byB7XG4gICAgICAgICAgICB0cmFuc2Zvcm06IHJvdGF0ZSgxdHVybilcbiAgICAgICAgfVxuICAgIH1cbiAgPC9zdHlsZT5cbmA7XG5leHBvcnQgY2xhc3MgTGF2YW5kcmVCdXR0b24gZXh0ZW5kcyBIVE1MQnV0dG9uRWxlbWVudCB7XG4gICAgY29uc3RydWN0b3IoKSB7XG4gICAgICAgIHN1cGVyKCk7XG4gICAgICAgIHRoaXMuY2xpY2tIYW5kbGVyID0gKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICBpZiAodGhpcy5ocmVmID09PSBudWxsKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICAgICAgICAgIHdpbmRvdy5sb2NhdGlvbi5ocmVmID0gdGhpcy5ocmVmO1xuICAgICAgICB9O1xuICAgICAgICB0aGlzLnNldEF0dHJpYnV0ZSgnaXMnLCAnbGF2YW5kcmUtYnV0dG9uJyk7XG4gICAgfVxuICAgIGdldCBocmVmKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5nZXRBdHRyaWJ1dGUoJ2hyZWYnKSB8fCAnJztcbiAgICB9XG4gICAgc2V0IGhyZWYodXJsKSB7XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdocmVmJywgdXJsKTtcbiAgICB9XG4gICAgZ2V0IHNpemUoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmdldEF0dHJpYnV0ZSgnc2l6ZScpIHx8ICcnO1xuICAgIH1cbiAgICBzZXQgc2l6ZSh1cmwpIHtcbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3NpemUnLCB1cmwpO1xuICAgIH1cbiAgICBnZXQgcHJpbWFyeSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBwcmltYXJ5KGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ3ByaW1hcnknLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgb3V0bGluZSgpIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaGFzQXR0cmlidXRlKCdwcmltYXJ5Jyk7XG4gICAgfVxuICAgIHNldCBvdXRsaW5lKGJvb2wpIHtcbiAgICAgICAgaWYgKCFib29sKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgdGhpcy5zZXRBdHRyaWJ1dGUoJ291dGxpbmUnLCBib29sLnRvU3RyaW5nKCkpO1xuICAgIH1cbiAgICBnZXQgZnVsbFdpZHRoKCkge1xuICAgICAgICByZXR1cm4gdGhpcy5oYXNBdHRyaWJ1dGUoJ3ByaW1hcnknKTtcbiAgICB9XG4gICAgc2V0IGZ1bGxXaWR0aChib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdmdWxsLXdpZHRoJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgZ2V0IGxvYWRpbmcoKSB7XG4gICAgICAgIHJldHVybiB0aGlzLmhhc0F0dHJpYnV0ZSgncHJpbWFyeScpO1xuICAgIH1cbiAgICBzZXQgbG9hZGluZyhib29sKSB7XG4gICAgICAgIGlmICghYm9vbCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICAgIHRoaXMuc2V0QXR0cmlidXRlKCdsb2FkaW5nJywgYm9vbC50b1N0cmluZygpKTtcbiAgICB9XG4gICAgY29ubmVjdGVkQ2FsbGJhY2soKSB7XG4gICAgICAgIHRoaXMuYXBwZW5kQ2hpbGQodGVtcGxhdGUuY29udGVudC5jbG9uZU5vZGUodHJ1ZSkpO1xuICAgICAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICAgICAgICB0aGlzLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxuICAgIGRpc2Nvbm5lY3RlZENhbGxiYWNrKCkge1xuICAgICAgICBpZiAodGhpcy5ocmVmKSB7XG4gICAgICAgICAgICB0aGlzLnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgdGhpcy5jbGlja0hhbmRsZXIpO1xuICAgICAgICB9XG4gICAgfVxufVxuLy8jIHNvdXJjZU1hcHBpbmdVUkw9TGF2YW5kcmVCdXR0b24uanMubWFwIiwiaW1wb3J0IHsgTGF2YW5kcmVCdXR0b24gfSBmcm9tICcuL0xhdmFuZHJlQnV0dG9uLmpzJztcbndpbmRvdy5jdXN0b21FbGVtZW50cy5kZWZpbmUoJ2xhdmFuZHJlLWJ1dHRvbicsIExhdmFuZHJlQnV0dG9uLCB7IGV4dGVuZHM6ICdidXR0b24nIH0pO1xuLy8jIHNvdXJjZU1hcHBpbmdVUkw9bGF2YW5kcmUtYnV0dG9uLmpzLm1hcCIsIi8qISAoYykgQW5kcmVhIEdpYW1tYXJjaGkgQHdlYnJlZmxlY3Rpb24gSVNDICovXG4oZnVuY3Rpb24gKCkge1xuICAndXNlIHN0cmljdCc7XG5cbiAgdmFyIExpZSA9IHR5cGVvZiBQcm9taXNlID09PSAnZnVuY3Rpb24nID8gUHJvbWlzZSA6IGZ1bmN0aW9uIChmbikge1xuICAgIHZhciBxdWV1ZSA9IFtdLFxuICAgICAgICByZXNvbHZlZCA9IDAsXG4gICAgICAgIHZhbHVlO1xuICAgIGZuKGZ1bmN0aW9uICgkKSB7XG4gICAgICB2YWx1ZSA9ICQ7XG4gICAgICByZXNvbHZlZCA9IDE7XG4gICAgICBxdWV1ZS5zcGxpY2UoMCkuZm9yRWFjaCh0aGVuKTtcbiAgICB9KTtcbiAgICByZXR1cm4ge1xuICAgICAgdGhlbjogdGhlblxuICAgIH07XG5cbiAgICBmdW5jdGlvbiB0aGVuKGZuKSB7XG4gICAgICByZXR1cm4gcmVzb2x2ZWQgPyBzZXRUaW1lb3V0KGZuLCAwLCB2YWx1ZSkgOiBxdWV1ZS5wdXNoKGZuKSwgdGhpcztcbiAgICB9XG4gIH07XG5cbiAgdmFyIGF0dHJpYnV0ZXNPYnNlcnZlciA9IChmdW5jdGlvbiAod2hlbkRlZmluZWQsIE11dGF0aW9uT2JzZXJ2ZXIpIHtcbiAgICB2YXIgYXR0cmlidXRlQ2hhbmdlZCA9IGZ1bmN0aW9uIGF0dHJpYnV0ZUNoYW5nZWQocmVjb3Jkcykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IHJlY29yZHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgZGlzcGF0Y2gocmVjb3Jkc1tpXSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBkaXNwYXRjaCA9IGZ1bmN0aW9uIGRpc3BhdGNoKF9yZWYpIHtcbiAgICAgIHZhciB0YXJnZXQgPSBfcmVmLnRhcmdldCxcbiAgICAgICAgICBhdHRyaWJ1dGVOYW1lID0gX3JlZi5hdHRyaWJ1dGVOYW1lLFxuICAgICAgICAgIG9sZFZhbHVlID0gX3JlZi5vbGRWYWx1ZTtcbiAgICAgIHRhcmdldC5hdHRyaWJ1dGVDaGFuZ2VkQ2FsbGJhY2soYXR0cmlidXRlTmFtZSwgb2xkVmFsdWUsIHRhcmdldC5nZXRBdHRyaWJ1dGUoYXR0cmlidXRlTmFtZSkpO1xuICAgIH07XG5cbiAgICByZXR1cm4gZnVuY3Rpb24gKHRhcmdldCwgaXMpIHtcbiAgICAgIHZhciBhdHRyaWJ1dGVGaWx0ZXIgPSB0YXJnZXQuY29uc3RydWN0b3Iub2JzZXJ2ZWRBdHRyaWJ1dGVzO1xuXG4gICAgICBpZiAoYXR0cmlidXRlRmlsdGVyKSB7XG4gICAgICAgIHdoZW5EZWZpbmVkKGlzKS50aGVuKGZ1bmN0aW9uICgpIHtcbiAgICAgICAgICBuZXcgTXV0YXRpb25PYnNlcnZlcihhdHRyaWJ1dGVDaGFuZ2VkKS5vYnNlcnZlKHRhcmdldCwge1xuICAgICAgICAgICAgYXR0cmlidXRlczogdHJ1ZSxcbiAgICAgICAgICAgIGF0dHJpYnV0ZU9sZFZhbHVlOiB0cnVlLFxuICAgICAgICAgICAgYXR0cmlidXRlRmlsdGVyOiBhdHRyaWJ1dGVGaWx0ZXJcbiAgICAgICAgICB9KTtcblxuICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsZW5ndGggPSBhdHRyaWJ1dGVGaWx0ZXIubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGlmICh0YXJnZXQuaGFzQXR0cmlidXRlKGF0dHJpYnV0ZUZpbHRlcltpXSkpIGRpc3BhdGNoKHtcbiAgICAgICAgICAgICAgdGFyZ2V0OiB0YXJnZXQsXG4gICAgICAgICAgICAgIGF0dHJpYnV0ZU5hbWU6IGF0dHJpYnV0ZUZpbHRlcltpXSxcbiAgICAgICAgICAgICAgb2xkVmFsdWU6IG51bGxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiB0YXJnZXQ7XG4gICAgfTtcbiAgfSk7XG5cbiAgdmFyIFRSVUUgPSB0cnVlLFxuICAgICAgRkFMU0UgPSBmYWxzZTtcbiAgdmFyIFFTQSQxID0gJ3F1ZXJ5U2VsZWN0b3JBbGwnO1xuXG4gIGZ1bmN0aW9uIGFkZChub2RlKSB7XG4gICAgdGhpcy5vYnNlcnZlKG5vZGUsIHtcbiAgICAgIHN1YnRyZWU6IFRSVUUsXG4gICAgICBjaGlsZExpc3Q6IFRSVUVcbiAgICB9KTtcbiAgfVxuICAvKipcbiAgICogU3RhcnQgb2JzZXJ2aW5nIGEgZ2VuZXJpYyBkb2N1bWVudCBvciByb290IGVsZW1lbnQuXG4gICAqIEBwYXJhbSB7RnVuY3Rpb259IGNhbGxiYWNrIHRyaWdnZXJlZCBwZXIgZWFjaCBkaXMvY29ubmVjdGVkIG5vZGVcbiAgICogQHBhcmFtIHtFbGVtZW50P30gcm9vdCBieSBkZWZhdWx0LCB0aGUgZ2xvYmFsIGRvY3VtZW50IHRvIG9ic2VydmVcbiAgICogQHBhcmFtIHtGdW5jdGlvbj99IE1PIGJ5IGRlZmF1bHQsIHRoZSBnbG9iYWwgTXV0YXRpb25PYnNlcnZlclxuICAgKiBAcmV0dXJucyB7TXV0YXRpb25PYnNlcnZlcn1cbiAgICovXG5cblxuICB2YXIgbm90aWZ5ID0gZnVuY3Rpb24gbm90aWZ5KGNhbGxiYWNrLCByb290LCBNTykge1xuICAgIHZhciBsb29wID0gZnVuY3Rpb24gbG9vcChub2RlcywgYWRkZWQsIHJlbW92ZWQsIGNvbm5lY3RlZCwgcGFzcykge1xuICAgICAgZm9yICh2YXIgaSA9IDAsIGxlbmd0aCA9IG5vZGVzLmxlbmd0aDsgaSA8IGxlbmd0aDsgaSsrKSB7XG4gICAgICAgIHZhciBub2RlID0gbm9kZXNbaV07XG5cbiAgICAgICAgaWYgKHBhc3MgfHwgUVNBJDEgaW4gbm9kZSkge1xuICAgICAgICAgIGlmIChjb25uZWN0ZWQpIHtcbiAgICAgICAgICAgIGlmICghYWRkZWQuaGFzKG5vZGUpKSB7XG4gICAgICAgICAgICAgIGFkZGVkLmFkZChub2RlKTtcbiAgICAgICAgICAgICAgcmVtb3ZlZFtcImRlbGV0ZVwiXShub2RlKTtcbiAgICAgICAgICAgICAgY2FsbGJhY2sobm9kZSwgY29ubmVjdGVkKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9IGVsc2UgaWYgKCFyZW1vdmVkLmhhcyhub2RlKSkge1xuICAgICAgICAgICAgcmVtb3ZlZC5hZGQobm9kZSk7XG4gICAgICAgICAgICBhZGRlZFtcImRlbGV0ZVwiXShub2RlKTtcbiAgICAgICAgICAgIGNhbGxiYWNrKG5vZGUsIGNvbm5lY3RlZCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgaWYgKCFwYXNzKSBsb29wKG5vZGVbUVNBJDFdKCcqJyksIGFkZGVkLCByZW1vdmVkLCBjb25uZWN0ZWQsIFRSVUUpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBvYnNlcnZlciA9IG5ldyAoTU8gfHwgTXV0YXRpb25PYnNlcnZlcikoZnVuY3Rpb24gKHJlY29yZHMpIHtcbiAgICAgIGZvciAodmFyIGFkZGVkID0gbmV3IFNldCgpLCByZW1vdmVkID0gbmV3IFNldCgpLCBpID0gMCwgbGVuZ3RoID0gcmVjb3Jkcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICB2YXIgX3JlY29yZHMkaSA9IHJlY29yZHNbaV0sXG4gICAgICAgICAgICBhZGRlZE5vZGVzID0gX3JlY29yZHMkaS5hZGRlZE5vZGVzLFxuICAgICAgICAgICAgcmVtb3ZlZE5vZGVzID0gX3JlY29yZHMkaS5yZW1vdmVkTm9kZXM7XG4gICAgICAgIGxvb3AocmVtb3ZlZE5vZGVzLCBhZGRlZCwgcmVtb3ZlZCwgRkFMU0UsIEZBTFNFKTtcbiAgICAgICAgbG9vcChhZGRlZE5vZGVzLCBhZGRlZCwgcmVtb3ZlZCwgVFJVRSwgRkFMU0UpO1xuICAgICAgfVxuICAgIH0pO1xuICAgIG9ic2VydmVyLmFkZCA9IGFkZDtcbiAgICBvYnNlcnZlci5hZGQocm9vdCB8fCBkb2N1bWVudCk7XG4gICAgcmV0dXJuIG9ic2VydmVyO1xuICB9O1xuXG4gIHZhciBRU0EgPSAncXVlcnlTZWxlY3RvckFsbCc7XG4gIHZhciBfc2VsZiQxID0gc2VsZixcbiAgICAgIGRvY3VtZW50JDIgPSBfc2VsZiQxLmRvY3VtZW50LFxuICAgICAgRWxlbWVudCQxID0gX3NlbGYkMS5FbGVtZW50LFxuICAgICAgTXV0YXRpb25PYnNlcnZlciQyID0gX3NlbGYkMS5NdXRhdGlvbk9ic2VydmVyLFxuICAgICAgU2V0JDIgPSBfc2VsZiQxLlNldCxcbiAgICAgIFdlYWtNYXAkMSA9IF9zZWxmJDEuV2Vha01hcDtcblxuICB2YXIgZWxlbWVudHMgPSBmdW5jdGlvbiBlbGVtZW50cyhlbGVtZW50KSB7XG4gICAgcmV0dXJuIFFTQSBpbiBlbGVtZW50O1xuICB9O1xuXG4gIHZhciBmaWx0ZXIgPSBbXS5maWx0ZXI7XG4gIHZhciBxc2FPYnNlcnZlciA9IChmdW5jdGlvbiAob3B0aW9ucykge1xuICAgIHZhciBsaXZlID0gbmV3IFdlYWtNYXAkMSgpO1xuXG4gICAgdmFyIGRyb3AgPSBmdW5jdGlvbiBkcm9wKGVsZW1lbnRzKSB7XG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbGl2ZVtcImRlbGV0ZVwiXShlbGVtZW50c1tpXSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBmbHVzaCA9IGZ1bmN0aW9uIGZsdXNoKCkge1xuICAgICAgdmFyIHJlY29yZHMgPSBvYnNlcnZlci50YWtlUmVjb3JkcygpO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gcmVjb3Jkcy5sZW5ndGg7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgICBwYXJzZShmaWx0ZXIuY2FsbChyZWNvcmRzW2ldLnJlbW92ZWROb2RlcywgZWxlbWVudHMpLCBmYWxzZSk7XG4gICAgICAgIHBhcnNlKGZpbHRlci5jYWxsKHJlY29yZHNbaV0uYWRkZWROb2RlcywgZWxlbWVudHMpLCB0cnVlKTtcbiAgICAgIH1cbiAgICB9O1xuXG4gICAgdmFyIG1hdGNoZXMgPSBmdW5jdGlvbiBtYXRjaGVzKGVsZW1lbnQpIHtcbiAgICAgIHJldHVybiBlbGVtZW50Lm1hdGNoZXMgfHwgZWxlbWVudC53ZWJraXRNYXRjaGVzU2VsZWN0b3IgfHwgZWxlbWVudC5tc01hdGNoZXNTZWxlY3RvcjtcbiAgICB9O1xuXG4gICAgdmFyIG5vdGlmaWVyID0gZnVuY3Rpb24gbm90aWZpZXIoZWxlbWVudCwgY29ubmVjdGVkKSB7XG4gICAgICB2YXIgc2VsZWN0b3JzO1xuXG4gICAgICBpZiAoY29ubmVjdGVkKSB7XG4gICAgICAgIGZvciAodmFyIHEsIG0gPSBtYXRjaGVzKGVsZW1lbnQpLCBpID0gMCwgbGVuZ3RoID0gcXVlcnkubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICBpZiAobS5jYWxsKGVsZW1lbnQsIHEgPSBxdWVyeVtpXSkpIHtcbiAgICAgICAgICAgIGlmICghbGl2ZS5oYXMoZWxlbWVudCkpIGxpdmUuc2V0KGVsZW1lbnQsIG5ldyBTZXQkMigpKTtcbiAgICAgICAgICAgIHNlbGVjdG9ycyA9IGxpdmUuZ2V0KGVsZW1lbnQpO1xuXG4gICAgICAgICAgICBpZiAoIXNlbGVjdG9ycy5oYXMocSkpIHtcbiAgICAgICAgICAgICAgc2VsZWN0b3JzLmFkZChxKTtcbiAgICAgICAgICAgICAgb3B0aW9ucy5oYW5kbGUoZWxlbWVudCwgY29ubmVjdGVkLCBxKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSBpZiAobGl2ZS5oYXMoZWxlbWVudCkpIHtcbiAgICAgICAgc2VsZWN0b3JzID0gbGl2ZS5nZXQoZWxlbWVudCk7XG4gICAgICAgIGxpdmVbXCJkZWxldGVcIl0oZWxlbWVudCk7XG4gICAgICAgIHNlbGVjdG9ycy5mb3JFYWNoKGZ1bmN0aW9uIChxKSB7XG4gICAgICAgICAgb3B0aW9ucy5oYW5kbGUoZWxlbWVudCwgY29ubmVjdGVkLCBxKTtcbiAgICAgICAgfSk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBwYXJzZSA9IGZ1bmN0aW9uIHBhcnNlKGVsZW1lbnRzKSB7XG4gICAgICB2YXIgY29ubmVjdGVkID0gYXJndW1lbnRzLmxlbmd0aCA+IDEgJiYgYXJndW1lbnRzWzFdICE9PSB1bmRlZmluZWQgPyBhcmd1bWVudHNbMV0gOiB0cnVlO1xuXG4gICAgICBmb3IgKHZhciBpID0gMCwgbGVuZ3RoID0gZWxlbWVudHMubGVuZ3RoOyBpIDwgbGVuZ3RoOyBpKyspIHtcbiAgICAgICAgbm90aWZpZXIoZWxlbWVudHNbaV0sIGNvbm5lY3RlZCk7XG4gICAgICB9XG4gICAgfTtcblxuICAgIHZhciBxdWVyeSA9IG9wdGlvbnMucXVlcnk7XG4gICAgdmFyIHJvb3QgPSBvcHRpb25zLnJvb3QgfHwgZG9jdW1lbnQkMjtcbiAgICB2YXIgb2JzZXJ2ZXIgPSBub3RpZnkobm90aWZpZXIsIHJvb3QsIE11dGF0aW9uT2JzZXJ2ZXIkMik7XG4gICAgdmFyIGF0dGFjaFNoYWRvdyA9IEVsZW1lbnQkMS5wcm90b3R5cGUuYXR0YWNoU2hhZG93O1xuICAgIGlmIChhdHRhY2hTaGFkb3cpIEVsZW1lbnQkMS5wcm90b3R5cGUuYXR0YWNoU2hhZG93ID0gZnVuY3Rpb24gKGluaXQpIHtcbiAgICAgIHZhciBzaGFkb3dSb290ID0gYXR0YWNoU2hhZG93LmNhbGwodGhpcywgaW5pdCk7XG4gICAgICBvYnNlcnZlci5hZGQoc2hhZG93Um9vdCk7XG4gICAgICByZXR1cm4gc2hhZG93Um9vdDtcbiAgICB9O1xuICAgIGlmIChxdWVyeS5sZW5ndGgpIHBhcnNlKHJvb3RbUVNBXShxdWVyeSkpO1xuICAgIHJldHVybiB7XG4gICAgICBkcm9wOiBkcm9wLFxuICAgICAgZmx1c2g6IGZsdXNoLFxuICAgICAgb2JzZXJ2ZXI6IG9ic2VydmVyLFxuICAgICAgcGFyc2U6IHBhcnNlXG4gICAgfTtcbiAgfSk7XG5cbiAgdmFyIF9zZWxmID0gc2VsZixcbiAgICAgIGRvY3VtZW50JDEgPSBfc2VsZi5kb2N1bWVudCxcbiAgICAgIE1hcCA9IF9zZWxmLk1hcCxcbiAgICAgIE11dGF0aW9uT2JzZXJ2ZXIkMSA9IF9zZWxmLk11dGF0aW9uT2JzZXJ2ZXIsXG4gICAgICBPYmplY3QkMSA9IF9zZWxmLk9iamVjdCxcbiAgICAgIFNldCQxID0gX3NlbGYuU2V0LFxuICAgICAgV2Vha01hcCA9IF9zZWxmLldlYWtNYXAsXG4gICAgICBFbGVtZW50ID0gX3NlbGYuRWxlbWVudCxcbiAgICAgIEhUTUxFbGVtZW50ID0gX3NlbGYuSFRNTEVsZW1lbnQsXG4gICAgICBOb2RlID0gX3NlbGYuTm9kZSxcbiAgICAgIEVycm9yID0gX3NlbGYuRXJyb3IsXG4gICAgICBUeXBlRXJyb3IgPSBfc2VsZi5UeXBlRXJyb3IsXG4gICAgICBSZWZsZWN0ID0gX3NlbGYuUmVmbGVjdDtcbiAgdmFyIFByb21pc2UkMSA9IHNlbGYuUHJvbWlzZSB8fCBMaWU7XG4gIHZhciBkZWZpbmVQcm9wZXJ0eSA9IE9iamVjdCQxLmRlZmluZVByb3BlcnR5LFxuICAgICAga2V5cyA9IE9iamVjdCQxLmtleXMsXG4gICAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzID0gT2JqZWN0JDEuZ2V0T3duUHJvcGVydHlOYW1lcyxcbiAgICAgIHNldFByb3RvdHlwZU9mID0gT2JqZWN0JDEuc2V0UHJvdG90eXBlT2Y7XG4gIHZhciBsZWdhY3kgPSAhc2VsZi5jdXN0b21FbGVtZW50cztcblxuICB2YXIgZXhwYW5kbyA9IGZ1bmN0aW9uIGV4cGFuZG8oZWxlbWVudCkge1xuICAgIHZhciBrZXkgPSBrZXlzKGVsZW1lbnQpO1xuICAgIHZhciB2YWx1ZSA9IFtdO1xuICAgIHZhciBsZW5ndGggPSBrZXkubGVuZ3RoO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKykge1xuICAgICAgdmFsdWVbaV0gPSBlbGVtZW50W2tleVtpXV07XG4gICAgICBkZWxldGUgZWxlbWVudFtrZXlbaV1dO1xuICAgIH1cblxuICAgIHJldHVybiBmdW5jdGlvbiAoKSB7XG4gICAgICBmb3IgKHZhciBfaSA9IDA7IF9pIDwgbGVuZ3RoOyBfaSsrKSB7XG4gICAgICAgIGVsZW1lbnRba2V5W19pXV0gPSB2YWx1ZVtfaV07XG4gICAgICB9XG4gICAgfTtcbiAgfTtcblxuICBpZiAobGVnYWN5KSB7XG4gICAgdmFyIEhUTUxCdWlsdEluID0gZnVuY3Rpb24gSFRNTEJ1aWx0SW4oKSB7XG4gICAgICB2YXIgY29uc3RydWN0b3IgPSB0aGlzLmNvbnN0cnVjdG9yO1xuICAgICAgaWYgKCFjbGFzc2VzLmhhcyhjb25zdHJ1Y3RvcikpIHRocm93IG5ldyBUeXBlRXJyb3IoJ0lsbGVnYWwgY29uc3RydWN0b3InKTtcbiAgICAgIHZhciBpcyA9IGNsYXNzZXMuZ2V0KGNvbnN0cnVjdG9yKTtcbiAgICAgIGlmIChvdmVycmlkZSkgcmV0dXJuIGF1Z21lbnQob3ZlcnJpZGUsIGlzKTtcbiAgICAgIHZhciBlbGVtZW50ID0gY3JlYXRlRWxlbWVudC5jYWxsKGRvY3VtZW50JDEsIGlzKTtcbiAgICAgIHJldHVybiBhdWdtZW50KHNldFByb3RvdHlwZU9mKGVsZW1lbnQsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSksIGlzKTtcbiAgICB9O1xuXG4gICAgdmFyIGNyZWF0ZUVsZW1lbnQgPSBkb2N1bWVudCQxLmNyZWF0ZUVsZW1lbnQ7XG4gICAgdmFyIGNsYXNzZXMgPSBuZXcgTWFwKCk7XG4gICAgdmFyIGRlZmluZWQgPSBuZXcgTWFwKCk7XG4gICAgdmFyIHByb3RvdHlwZXMgPSBuZXcgTWFwKCk7XG4gICAgdmFyIHJlZ2lzdHJ5ID0gbmV3IE1hcCgpO1xuICAgIHZhciBxdWVyeSA9IFtdO1xuXG4gICAgdmFyIGhhbmRsZSA9IGZ1bmN0aW9uIGhhbmRsZShlbGVtZW50LCBjb25uZWN0ZWQsIHNlbGVjdG9yKSB7XG4gICAgICB2YXIgcHJvdG8gPSBwcm90b3R5cGVzLmdldChzZWxlY3Rvcik7XG5cbiAgICAgIGlmIChjb25uZWN0ZWQgJiYgIXByb3RvLmlzUHJvdG90eXBlT2YoZWxlbWVudCkpIHtcbiAgICAgICAgdmFyIHJlZGVmaW5lID0gZXhwYW5kbyhlbGVtZW50KTtcbiAgICAgICAgb3ZlcnJpZGUgPSBzZXRQcm90b3R5cGVPZihlbGVtZW50LCBwcm90byk7XG5cbiAgICAgICAgdHJ5IHtcbiAgICAgICAgICBuZXcgcHJvdG8uY29uc3RydWN0b3IoKTtcbiAgICAgICAgfSBmaW5hbGx5IHtcbiAgICAgICAgICBvdmVycmlkZSA9IG51bGw7XG4gICAgICAgICAgcmVkZWZpbmUoKTtcbiAgICAgICAgfVxuICAgICAgfVxuXG4gICAgICB2YXIgbWV0aG9kID0gXCJcIi5jb25jYXQoY29ubmVjdGVkID8gJycgOiAnZGlzJywgXCJjb25uZWN0ZWRDYWxsYmFja1wiKTtcbiAgICAgIGlmIChtZXRob2QgaW4gcHJvdG8pIGVsZW1lbnRbbWV0aG9kXSgpO1xuICAgIH07XG5cbiAgICB2YXIgX3FzYU9ic2VydmVyID0gcXNhT2JzZXJ2ZXIoe1xuICAgICAgcXVlcnk6IHF1ZXJ5LFxuICAgICAgaGFuZGxlOiBoYW5kbGVcbiAgICB9KSxcbiAgICAgICAgcGFyc2UgPSBfcXNhT2JzZXJ2ZXIucGFyc2U7XG5cbiAgICB2YXIgb3ZlcnJpZGUgPSBudWxsO1xuXG4gICAgdmFyIHdoZW5EZWZpbmVkID0gZnVuY3Rpb24gd2hlbkRlZmluZWQobmFtZSkge1xuICAgICAgaWYgKCFkZWZpbmVkLmhhcyhuYW1lKSkge1xuICAgICAgICB2YXIgXyxcbiAgICAgICAgICAgICQgPSBuZXcgTGllKGZ1bmN0aW9uICgkKSB7XG4gICAgICAgICAgXyA9ICQ7XG4gICAgICAgIH0pO1xuXG4gICAgICAgIGRlZmluZWQuc2V0KG5hbWUsIHtcbiAgICAgICAgICAkOiAkLFxuICAgICAgICAgIF86IF9cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBkZWZpbmVkLmdldChuYW1lKS4kO1xuICAgIH07XG5cbiAgICB2YXIgYXVnbWVudCA9IGF0dHJpYnV0ZXNPYnNlcnZlcih3aGVuRGVmaW5lZCwgTXV0YXRpb25PYnNlcnZlciQxKTtcbiAgICBkZWZpbmVQcm9wZXJ0eShzZWxmLCAnY3VzdG9tRWxlbWVudHMnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZToge1xuICAgICAgICBkZWZpbmU6IGZ1bmN0aW9uIGRlZmluZShpcywgQ2xhc3MpIHtcbiAgICAgICAgICBpZiAocmVnaXN0cnkuaGFzKGlzKSkgdGhyb3cgbmV3IEVycm9yKFwidGhlIG5hbWUgXFxcIlwiLmNvbmNhdChpcywgXCJcXFwiIGhhcyBhbHJlYWR5IGJlZW4gdXNlZCB3aXRoIHRoaXMgcmVnaXN0cnlcIikpO1xuICAgICAgICAgIGNsYXNzZXMuc2V0KENsYXNzLCBpcyk7XG4gICAgICAgICAgcHJvdG90eXBlcy5zZXQoaXMsIENsYXNzLnByb3RvdHlwZSk7XG4gICAgICAgICAgcmVnaXN0cnkuc2V0KGlzLCBDbGFzcyk7XG4gICAgICAgICAgcXVlcnkucHVzaChpcyk7XG4gICAgICAgICAgd2hlbkRlZmluZWQoaXMpLnRoZW4oZnVuY3Rpb24gKCkge1xuICAgICAgICAgICAgcGFyc2UoZG9jdW1lbnQkMS5xdWVyeVNlbGVjdG9yQWxsKGlzKSk7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBkZWZpbmVkLmdldChpcykuXyhDbGFzcyk7XG4gICAgICAgIH0sXG4gICAgICAgIGdldDogZnVuY3Rpb24gZ2V0KGlzKSB7XG4gICAgICAgICAgcmV0dXJuIHJlZ2lzdHJ5LmdldChpcyk7XG4gICAgICAgIH0sXG4gICAgICAgIHdoZW5EZWZpbmVkOiB3aGVuRGVmaW5lZFxuICAgICAgfVxuICAgIH0pO1xuICAgIGRlZmluZVByb3BlcnR5KEhUTUxCdWlsdEluLnByb3RvdHlwZSA9IEhUTUxFbGVtZW50LnByb3RvdHlwZSwgJ2NvbnN0cnVjdG9yJywge1xuICAgICAgdmFsdWU6IEhUTUxCdWlsdEluXG4gICAgfSk7XG4gICAgZGVmaW5lUHJvcGVydHkoc2VsZiwgJ0hUTUxFbGVtZW50Jywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IEhUTUxCdWlsdEluXG4gICAgfSk7XG4gICAgZGVmaW5lUHJvcGVydHkoZG9jdW1lbnQkMSwgJ2NyZWF0ZUVsZW1lbnQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUobmFtZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgaXMgPSBvcHRpb25zICYmIG9wdGlvbnMuaXM7XG4gICAgICAgIHZhciBDbGFzcyA9IGlzID8gcmVnaXN0cnkuZ2V0KGlzKSA6IHJlZ2lzdHJ5LmdldChuYW1lKTtcbiAgICAgICAgcmV0dXJuIENsYXNzID8gbmV3IENsYXNzKCkgOiBjcmVhdGVFbGVtZW50LmNhbGwoZG9jdW1lbnQkMSwgbmFtZSk7XG4gICAgICB9XG4gICAgfSk7IC8vIGluIGNhc2UgU2hhZG93RE9NIGlzIHVzZWQgdGhyb3VnaCBhIHBvbHlmaWxsLCB0byBhdm9pZCBpc3N1ZXNcbiAgICAvLyB3aXRoIGJ1aWx0aW4gZXh0ZW5kcyB3aXRoaW4gc2hhZG93IHJvb3RzXG5cbiAgICBpZiAoISgnaXNDb25uZWN0ZWQnIGluIE5vZGUucHJvdG90eXBlKSkgZGVmaW5lUHJvcGVydHkoTm9kZS5wcm90b3R5cGUsICdpc0Nvbm5lY3RlZCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIGdldDogZnVuY3Rpb24gZ2V0KCkge1xuICAgICAgICByZXR1cm4gISh0aGlzLm93bmVyRG9jdW1lbnQuY29tcGFyZURvY3VtZW50UG9zaXRpb24odGhpcykgJiB0aGlzLkRPQ1VNRU5UX1BPU0lUSU9OX0RJU0NPTk5FQ1RFRCk7XG4gICAgICB9XG4gICAgfSk7XG4gIH0gZWxzZSB7XG4gICAgdHJ5IHtcbiAgICAgIHZhciBMSSA9IGZ1bmN0aW9uIExJKCkge1xuICAgICAgICByZXR1cm4gc2VsZi5SZWZsZWN0LmNvbnN0cnVjdChIVE1MTElFbGVtZW50LCBbXSwgTEkpO1xuICAgICAgfTtcblxuICAgICAgTEkucHJvdG90eXBlID0gSFRNTExJRWxlbWVudC5wcm90b3R5cGU7XG4gICAgICB2YXIgaXMgPSAnZXh0ZW5kcy1saSc7XG4gICAgICBzZWxmLmN1c3RvbUVsZW1lbnRzLmRlZmluZSgnZXh0ZW5kcy1saScsIExJLCB7XG4gICAgICAgICdleHRlbmRzJzogJ2xpJ1xuICAgICAgfSk7XG4gICAgICBsZWdhY3kgPSBkb2N1bWVudCQxLmNyZWF0ZUVsZW1lbnQoJ2xpJywge1xuICAgICAgICBpczogaXNcbiAgICAgIH0pLm91dGVySFRNTC5pbmRleE9mKGlzKSA8IDA7XG4gICAgICB2YXIgX3NlbGYkY3VzdG9tRWxlbWVudHMgPSBzZWxmLmN1c3RvbUVsZW1lbnRzLFxuICAgICAgICAgIGdldCA9IF9zZWxmJGN1c3RvbUVsZW1lbnRzLmdldCxcbiAgICAgICAgICBfd2hlbkRlZmluZWQgPSBfc2VsZiRjdXN0b21FbGVtZW50cy53aGVuRGVmaW5lZDtcbiAgICAgIGRlZmluZVByb3BlcnR5KHNlbGYuY3VzdG9tRWxlbWVudHMsICd3aGVuRGVmaW5lZCcsIHtcbiAgICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgICB2YWx1ZTogZnVuY3Rpb24gdmFsdWUoaXMpIHtcbiAgICAgICAgICB2YXIgX3RoaXMgPSB0aGlzO1xuXG4gICAgICAgICAgcmV0dXJuIF93aGVuRGVmaW5lZC5jYWxsKHRoaXMsIGlzKS50aGVuKGZ1bmN0aW9uIChDbGFzcykge1xuICAgICAgICAgICAgcmV0dXJuIENsYXNzIHx8IGdldC5jYWxsKF90aGlzLCBpcyk7XG4gICAgICAgICAgfSk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKG9fTykge1xuICAgICAgbGVnYWN5ID0gIWxlZ2FjeTtcbiAgICB9XG4gIH1cblxuICBpZiAobGVnYWN5KSB7XG4gICAgdmFyIHBhcnNlU2hhZG93ID0gZnVuY3Rpb24gcGFyc2VTaGFkb3coZWxlbWVudCkge1xuICAgICAgdmFyIHJvb3QgPSBzaGFkb3dSb290cy5nZXQoZWxlbWVudCk7XG5cbiAgICAgIF9wYXJzZShyb290LnF1ZXJ5U2VsZWN0b3JBbGwodGhpcyksIGVsZW1lbnQuaXNDb25uZWN0ZWQpO1xuICAgIH07XG5cbiAgICB2YXIgY3VzdG9tRWxlbWVudHMgPSBzZWxmLmN1c3RvbUVsZW1lbnRzO1xuICAgIHZhciBhdHRhY2hTaGFkb3cgPSBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3c7XG4gICAgdmFyIF9jcmVhdGVFbGVtZW50ID0gZG9jdW1lbnQkMS5jcmVhdGVFbGVtZW50O1xuICAgIHZhciBkZWZpbmUgPSBjdXN0b21FbGVtZW50cy5kZWZpbmUsXG4gICAgICAgIF9nZXQgPSBjdXN0b21FbGVtZW50cy5nZXQ7XG5cbiAgICB2YXIgX3JlZiA9IFJlZmxlY3QgfHwge1xuICAgICAgY29uc3RydWN0OiBmdW5jdGlvbiBjb25zdHJ1Y3QoSFRNTEVsZW1lbnQpIHtcbiAgICAgICAgcmV0dXJuIEhUTUxFbGVtZW50LmNhbGwodGhpcyk7XG4gICAgICB9XG4gICAgfSxcbiAgICAgICAgY29uc3RydWN0ID0gX3JlZi5jb25zdHJ1Y3Q7XG5cbiAgICB2YXIgc2hhZG93Um9vdHMgPSBuZXcgV2Vha01hcCgpO1xuICAgIHZhciBzaGFkb3dzID0gbmV3IFNldCQxKCk7XG5cbiAgICB2YXIgX2NsYXNzZXMgPSBuZXcgTWFwKCk7XG5cbiAgICB2YXIgX2RlZmluZWQgPSBuZXcgTWFwKCk7XG5cbiAgICB2YXIgX3Byb3RvdHlwZXMgPSBuZXcgTWFwKCk7XG5cbiAgICB2YXIgX3JlZ2lzdHJ5ID0gbmV3IE1hcCgpO1xuXG4gICAgdmFyIHNoYWRvd2VkID0gW107XG4gICAgdmFyIF9xdWVyeSA9IFtdO1xuXG4gICAgdmFyIGdldENFID0gZnVuY3Rpb24gZ2V0Q0UoaXMpIHtcbiAgICAgIHJldHVybiBfcmVnaXN0cnkuZ2V0KGlzKSB8fCBfZ2V0LmNhbGwoY3VzdG9tRWxlbWVudHMsIGlzKTtcbiAgICB9O1xuXG4gICAgdmFyIF9oYW5kbGUgPSBmdW5jdGlvbiBfaGFuZGxlKGVsZW1lbnQsIGNvbm5lY3RlZCwgc2VsZWN0b3IpIHtcbiAgICAgIHZhciBwcm90byA9IF9wcm90b3R5cGVzLmdldChzZWxlY3Rvcik7XG5cbiAgICAgIGlmIChjb25uZWN0ZWQgJiYgIXByb3RvLmlzUHJvdG90eXBlT2YoZWxlbWVudCkpIHtcbiAgICAgICAgdmFyIHJlZGVmaW5lID0gZXhwYW5kbyhlbGVtZW50KTtcbiAgICAgICAgX292ZXJyaWRlID0gc2V0UHJvdG90eXBlT2YoZWxlbWVudCwgcHJvdG8pO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgbmV3IHByb3RvLmNvbnN0cnVjdG9yKCk7XG4gICAgICAgIH0gZmluYWxseSB7XG4gICAgICAgICAgX292ZXJyaWRlID0gbnVsbDtcbiAgICAgICAgICByZWRlZmluZSgpO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIHZhciBtZXRob2QgPSBcIlwiLmNvbmNhdChjb25uZWN0ZWQgPyAnJyA6ICdkaXMnLCBcImNvbm5lY3RlZENhbGxiYWNrXCIpO1xuICAgICAgaWYgKG1ldGhvZCBpbiBwcm90bykgZWxlbWVudFttZXRob2RdKCk7XG4gICAgfTtcblxuICAgIHZhciBfcXNhT2JzZXJ2ZXIyID0gcXNhT2JzZXJ2ZXIoe1xuICAgICAgcXVlcnk6IF9xdWVyeSxcbiAgICAgIGhhbmRsZTogX2hhbmRsZVxuICAgIH0pLFxuICAgICAgICBfcGFyc2UgPSBfcXNhT2JzZXJ2ZXIyLnBhcnNlO1xuXG4gICAgdmFyIF9xc2FPYnNlcnZlcjMgPSBxc2FPYnNlcnZlcih7XG4gICAgICBxdWVyeTogc2hhZG93ZWQsXG4gICAgICBoYW5kbGU6IGZ1bmN0aW9uIGhhbmRsZShlbGVtZW50LCBjb25uZWN0ZWQpIHtcbiAgICAgICAgaWYgKHNoYWRvd1Jvb3RzLmhhcyhlbGVtZW50KSkge1xuICAgICAgICAgIGlmIChjb25uZWN0ZWQpIHNoYWRvd3MuYWRkKGVsZW1lbnQpO2Vsc2Ugc2hhZG93c1tcImRlbGV0ZVwiXShlbGVtZW50KTtcbiAgICAgICAgICBpZiAoX3F1ZXJ5Lmxlbmd0aCkgcGFyc2VTaGFkb3cuY2FsbChfcXVlcnksIGVsZW1lbnQpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgfSksXG4gICAgICAgIHBhcnNlU2hhZG93ZWQgPSBfcXNhT2JzZXJ2ZXIzLnBhcnNlO1xuXG4gICAgdmFyIF93aGVuRGVmaW5lZDIgPSBmdW5jdGlvbiBfd2hlbkRlZmluZWQyKG5hbWUpIHtcbiAgICAgIGlmICghX2RlZmluZWQuaGFzKG5hbWUpKSB7XG4gICAgICAgIHZhciBfLFxuICAgICAgICAgICAgJCA9IG5ldyBQcm9taXNlJDEoZnVuY3Rpb24gKCQpIHtcbiAgICAgICAgICBfID0gJDtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgX2RlZmluZWQuc2V0KG5hbWUsIHtcbiAgICAgICAgICAkOiAkLFxuICAgICAgICAgIF86IF9cbiAgICAgICAgfSk7XG4gICAgICB9XG5cbiAgICAgIHJldHVybiBfZGVmaW5lZC5nZXQobmFtZSkuJDtcbiAgICB9O1xuXG4gICAgdmFyIF9hdWdtZW50ID0gYXR0cmlidXRlc09ic2VydmVyKF93aGVuRGVmaW5lZDIsIE11dGF0aW9uT2JzZXJ2ZXIkMSk7XG5cbiAgICB2YXIgX292ZXJyaWRlID0gbnVsbDtcbiAgICBnZXRPd25Qcm9wZXJ0eU5hbWVzKHNlbGYpLmZpbHRlcihmdW5jdGlvbiAoaykge1xuICAgICAgcmV0dXJuIC9eSFRNTC8udGVzdChrKTtcbiAgICB9KS5mb3JFYWNoKGZ1bmN0aW9uIChrKSB7XG4gICAgICB2YXIgSFRNTEVsZW1lbnQgPSBzZWxmW2tdO1xuXG4gICAgICBmdW5jdGlvbiBIVE1MQnVpbHRJbigpIHtcbiAgICAgICAgdmFyIGNvbnN0cnVjdG9yID0gdGhpcy5jb25zdHJ1Y3RvcjtcbiAgICAgICAgaWYgKCFfY2xhc3Nlcy5oYXMoY29uc3RydWN0b3IpKSB0aHJvdyBuZXcgVHlwZUVycm9yKCdJbGxlZ2FsIGNvbnN0cnVjdG9yJyk7XG5cbiAgICAgICAgdmFyIF9jbGFzc2VzJGdldCA9IF9jbGFzc2VzLmdldChjb25zdHJ1Y3RvciksXG4gICAgICAgICAgICBpcyA9IF9jbGFzc2VzJGdldC5pcyxcbiAgICAgICAgICAgIHRhZyA9IF9jbGFzc2VzJGdldC50YWc7XG5cbiAgICAgICAgaWYgKGlzKSB7XG4gICAgICAgICAgaWYgKF9vdmVycmlkZSkgcmV0dXJuIF9hdWdtZW50KF9vdmVycmlkZSwgaXMpO1xuXG4gICAgICAgICAgdmFyIGVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudC5jYWxsKGRvY3VtZW50JDEsIHRhZyk7XG5cbiAgICAgICAgICBlbGVtZW50LnNldEF0dHJpYnV0ZSgnaXMnLCBpcyk7XG4gICAgICAgICAgcmV0dXJuIF9hdWdtZW50KHNldFByb3RvdHlwZU9mKGVsZW1lbnQsIGNvbnN0cnVjdG9yLnByb3RvdHlwZSksIGlzKTtcbiAgICAgICAgfSBlbHNlIHJldHVybiBjb25zdHJ1Y3QuY2FsbCh0aGlzLCBIVE1MRWxlbWVudCwgW10sIGNvbnN0cnVjdG9yKTtcbiAgICAgIH1cblxuXG4gICAgICBkZWZpbmVQcm9wZXJ0eShIVE1MQnVpbHRJbi5wcm90b3R5cGUgPSBIVE1MRWxlbWVudC5wcm90b3R5cGUsICdjb25zdHJ1Y3RvcicsIHtcbiAgICAgICAgdmFsdWU6IEhUTUxCdWlsdEluXG4gICAgICB9KTtcbiAgICAgIGRlZmluZVByb3BlcnR5KHNlbGYsIGssIHtcbiAgICAgICAgdmFsdWU6IEhUTUxCdWlsdEluXG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBkZWZpbmVQcm9wZXJ0eShkb2N1bWVudCQxLCAnY3JlYXRlRWxlbWVudCcsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShuYW1lLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBpcyA9IG9wdGlvbnMgJiYgb3B0aW9ucy5pcztcblxuICAgICAgICBpZiAoaXMpIHtcbiAgICAgICAgICB2YXIgQ2xhc3MgPSBfcmVnaXN0cnkuZ2V0KGlzKTtcblxuICAgICAgICAgIGlmIChDbGFzcyAmJiBfY2xhc3Nlcy5nZXQoQ2xhc3MpLnRhZyA9PT0gbmFtZSkgcmV0dXJuIG5ldyBDbGFzcygpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGVsZW1lbnQgPSBfY3JlYXRlRWxlbWVudC5jYWxsKGRvY3VtZW50JDEsIG5hbWUpO1xuXG4gICAgICAgIGlmIChpcykgZWxlbWVudC5zZXRBdHRyaWJ1dGUoJ2lzJywgaXMpO1xuICAgICAgICByZXR1cm4gZWxlbWVudDtcbiAgICAgIH1cbiAgICB9KTtcbiAgICBpZiAoYXR0YWNoU2hhZG93KSBFbGVtZW50LnByb3RvdHlwZS5hdHRhY2hTaGFkb3cgPSBmdW5jdGlvbiAoaW5pdCkge1xuICAgICAgdmFyIHJvb3QgPSBhdHRhY2hTaGFkb3cuY2FsbCh0aGlzLCBpbml0KTtcbiAgICAgIHNoYWRvd1Jvb3RzLnNldCh0aGlzLCByb290KTtcbiAgICAgIHJldHVybiByb290O1xuICAgIH07XG4gICAgZGVmaW5lUHJvcGVydHkoY3VzdG9tRWxlbWVudHMsICdnZXQnLCB7XG4gICAgICBjb25maWd1cmFibGU6IHRydWUsXG4gICAgICB2YWx1ZTogZ2V0Q0VcbiAgICB9KTtcbiAgICBkZWZpbmVQcm9wZXJ0eShjdXN0b21FbGVtZW50cywgJ3doZW5EZWZpbmVkJywge1xuICAgICAgY29uZmlndXJhYmxlOiB0cnVlLFxuICAgICAgdmFsdWU6IF93aGVuRGVmaW5lZDJcbiAgICB9KTtcbiAgICBkZWZpbmVQcm9wZXJ0eShjdXN0b21FbGVtZW50cywgJ2RlZmluZScsIHtcbiAgICAgIGNvbmZpZ3VyYWJsZTogdHJ1ZSxcbiAgICAgIHZhbHVlOiBmdW5jdGlvbiB2YWx1ZShpcywgQ2xhc3MsIG9wdGlvbnMpIHtcbiAgICAgICAgaWYgKGdldENFKGlzKSkgdGhyb3cgbmV3IEVycm9yKFwiJ1wiLmNvbmNhdChpcywgXCInIGhhcyBhbHJlYWR5IGJlZW4gZGVmaW5lZCBhcyBhIGN1c3RvbSBlbGVtZW50XCIpKTtcbiAgICAgICAgdmFyIHNlbGVjdG9yO1xuICAgICAgICB2YXIgdGFnID0gb3B0aW9ucyAmJiBvcHRpb25zW1wiZXh0ZW5kc1wiXTtcblxuICAgICAgICBfY2xhc3Nlcy5zZXQoQ2xhc3MsIHRhZyA/IHtcbiAgICAgICAgICBpczogaXMsXG4gICAgICAgICAgdGFnOiB0YWdcbiAgICAgICAgfSA6IHtcbiAgICAgICAgICBpczogJycsXG4gICAgICAgICAgdGFnOiBpc1xuICAgICAgICB9KTtcblxuICAgICAgICBpZiAodGFnKSB7XG4gICAgICAgICAgc2VsZWN0b3IgPSBcIlwiLmNvbmNhdCh0YWcsIFwiW2lzPVxcXCJcIikuY29uY2F0KGlzLCBcIlxcXCJdXCIpO1xuXG4gICAgICAgICAgX3Byb3RvdHlwZXMuc2V0KHNlbGVjdG9yLCBDbGFzcy5wcm90b3R5cGUpO1xuXG4gICAgICAgICAgX3JlZ2lzdHJ5LnNldChpcywgQ2xhc3MpO1xuXG4gICAgICAgICAgX3F1ZXJ5LnB1c2goc2VsZWN0b3IpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGRlZmluZS5hcHBseShjdXN0b21FbGVtZW50cywgYXJndW1lbnRzKTtcbiAgICAgICAgICBzaGFkb3dlZC5wdXNoKHNlbGVjdG9yID0gaXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgX3doZW5EZWZpbmVkMihpcykudGhlbihmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgaWYgKHRhZykge1xuICAgICAgICAgICAgX3BhcnNlKGRvY3VtZW50JDEucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuXG4gICAgICAgICAgICBzaGFkb3dzLmZvckVhY2gocGFyc2VTaGFkb3csIFtzZWxlY3Rvcl0pO1xuICAgICAgICAgIH0gZWxzZSBwYXJzZVNoYWRvd2VkKGRvY3VtZW50JDEucXVlcnlTZWxlY3RvckFsbChzZWxlY3RvcikpO1xuICAgICAgICB9KTtcblxuICAgICAgICBfZGVmaW5lZC5nZXQoaXMpLl8oQ2xhc3MpO1xuICAgICAgfVxuICAgIH0pO1xuICB9XG5cbn0oKSk7XG4iXSwic291cmNlUm9vdCI6IiJ9