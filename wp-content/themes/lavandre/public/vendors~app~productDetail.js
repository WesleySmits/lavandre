(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["vendors~app~productDetail"],{

/***/ "./node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js":
/*!******************************************************************!*\
  !*** ./node_modules/dialog-polyfill/dist/dialog-polyfill.esm.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// nb. This is for IE10 and lower _only_.
var supportCustomEvent = window.CustomEvent;
if (!supportCustomEvent || typeof supportCustomEvent === 'object') {
  supportCustomEvent = function CustomEvent(event, x) {
    x = x || {};
    var ev = document.createEvent('CustomEvent');
    ev.initCustomEvent(event, !!x.bubbles, !!x.cancelable, x.detail || null);
    return ev;
  };
  supportCustomEvent.prototype = window.Event.prototype;
}

/**
 * Dispatches the passed event to both an "on<type>" handler as well as via the
 * normal dispatch operation. Does not bubble.
 *
 * @param {!EventTarget} target
 * @param {!Event} event
 * @return {boolean}
 */
function safeDispatchEvent(target, event) {
  var check = 'on' + event.type.toLowerCase();
  if (typeof target[check] === 'function') {
    target[check](event);
  }
  return target.dispatchEvent(event);
}

/**
 * @param {Element} el to check for stacking context
 * @return {boolean} whether this el or its parents creates a stacking context
 */
function createsStackingContext(el) {
  while (el && el !== document.body) {
    var s = window.getComputedStyle(el);
    var invalid = function(k, ok) {
      return !(s[k] === undefined || s[k] === ok);
    };

    if (s.opacity < 1 ||
        invalid('zIndex', 'auto') ||
        invalid('transform', 'none') ||
        invalid('mixBlendMode', 'normal') ||
        invalid('filter', 'none') ||
        invalid('perspective', 'none') ||
        s['isolation'] === 'isolate' ||
        s.position === 'fixed' ||
        s.webkitOverflowScrolling === 'touch') {
      return true;
    }
    el = el.parentElement;
  }
  return false;
}

/**
 * Finds the nearest <dialog> from the passed element.
 *
 * @param {Element} el to search from
 * @return {HTMLDialogElement} dialog found
 */
function findNearestDialog(el) {
  while (el) {
    if (el.localName === 'dialog') {
      return /** @type {HTMLDialogElement} */ (el);
    }
    if (el.parentElement) {
      el = el.parentElement;
    } else if (el.parentNode) {
      el = el.parentNode.host;
    } else {
      el = null;
    }
  }
  return null;
}

/**
 * Blur the specified element, as long as it's not the HTML body element.
 * This works around an IE9/10 bug - blurring the body causes Windows to
 * blur the whole application.
 *
 * @param {Element} el to blur
 */
function safeBlur(el) {
  // Find the actual focused element when the active element is inside a shadow root
  while (el && el.shadowRoot && el.shadowRoot.activeElement) {
    el = el.shadowRoot.activeElement;
  }

  if (el && el.blur && el !== document.body) {
    el.blur();
  }
}

/**
 * @param {!NodeList} nodeList to search
 * @param {Node} node to find
 * @return {boolean} whether node is inside nodeList
 */
function inNodeList(nodeList, node) {
  for (var i = 0; i < nodeList.length; ++i) {
    if (nodeList[i] === node) {
      return true;
    }
  }
  return false;
}

/**
 * @param {HTMLFormElement} el to check
 * @return {boolean} whether this form has method="dialog"
 */
function isFormMethodDialog(el) {
  if (!el || !el.hasAttribute('method')) {
    return false;
  }
  return el.getAttribute('method').toLowerCase() === 'dialog';
}

/**
 * @param {!DocumentFragment|!Element} hostElement
 * @return {?Element}
 */
function findFocusableElementWithin(hostElement) {
  // Note that this is 'any focusable area'. This list is probably not exhaustive, but the
  // alternative involves stepping through and trying to focus everything.
  var opts = ['button', 'input', 'keygen', 'select', 'textarea'];
  var query = opts.map(function(el) {
    return el + ':not([disabled])';
  });
  // TODO(samthor): tabindex values that are not numeric are not focusable.
  query.push('[tabindex]:not([disabled]):not([tabindex=""])');  // tabindex != "", not disabled
  var target = hostElement.querySelector(query.join(', '));

  if (!target && 'attachShadow' in Element.prototype) {
    // If we haven't found a focusable target, see if the host element contains an element
    // which has a shadowRoot.
    // Recursively search for the first focusable item in shadow roots.
    var elems = hostElement.querySelectorAll('*');
    for (var i = 0; i < elems.length; i++) {
      if (elems[i].tagName && elems[i].shadowRoot) {
        target = findFocusableElementWithin(elems[i].shadowRoot);
        if (target) {
          break;
        }
      }
    }
  }
  return target;
}

/**
 * Determines if an element is attached to the DOM.
 * @param {Element} element to check
 * @return {boolean} whether the element is in DOM
 */
function isConnected(element) {
  return element.isConnected || document.body.contains(element);
}

/**
 * @param {!Event} event
 * @return {?Element}
 */
function findFormSubmitter(event) {
  if (event.submitter) {
    return event.submitter;
  }

  var form = event.target;
  if (!(form instanceof HTMLFormElement)) {
    return null;
  }

  var submitter = dialogPolyfill.formSubmitter;
  if (!submitter) {
    var target = event.target;
    var root = ('getRootNode' in target && target.getRootNode() || document);
    submitter = root.activeElement;
  }

  if (!submitter || submitter.form !== form) {
    return null;
  }
  return submitter;
}

/**
 * @param {!Event} event
 */
function maybeHandleSubmit(event) {
  if (event.defaultPrevented) {
    return;
  }
  var form = /** @type {!HTMLFormElement} */ (event.target);

  // We'd have a value if we clicked on an imagemap.
  var value = dialogPolyfill.imagemapUseValue;
  var submitter = findFormSubmitter(event);
  if (value === null && submitter) {
    value = submitter.value;
  }

  // There should always be a dialog as this handler is added specifically on them, but check just
  // in case.
  var dialog = findNearestDialog(form);
  if (!dialog) {
    return;
  }

  // Prefer formmethod on the button.
  var formmethod = submitter && submitter.getAttribute('formmethod') || form.getAttribute('method');
  if (formmethod !== 'dialog') {
    return;
  }
  event.preventDefault();

  if (value != null) {
    // nb. we explicitly check against null/undefined
    dialog.close(value);
  } else {
    dialog.close();
  }
}

/**
 * @param {!HTMLDialogElement} dialog to upgrade
 * @constructor
 */
function dialogPolyfillInfo(dialog) {
  this.dialog_ = dialog;
  this.replacedStyleTop_ = false;
  this.openAsModal_ = false;

  // Set a11y role. Browsers that support dialog implicitly know this already.
  if (!dialog.hasAttribute('role')) {
    dialog.setAttribute('role', 'dialog');
  }

  dialog.show = this.show.bind(this);
  dialog.showModal = this.showModal.bind(this);
  dialog.close = this.close.bind(this);

  dialog.addEventListener('submit', maybeHandleSubmit, false);

  if (!('returnValue' in dialog)) {
    dialog.returnValue = '';
  }

  if ('MutationObserver' in window) {
    var mo = new MutationObserver(this.maybeHideModal.bind(this));
    mo.observe(dialog, {attributes: true, attributeFilter: ['open']});
  } else {
    // IE10 and below support. Note that DOMNodeRemoved etc fire _before_ removal. They also
    // seem to fire even if the element was removed as part of a parent removal. Use the removed
    // events to force downgrade (useful if removed/immediately added).
    var removed = false;
    var cb = function() {
      removed ? this.downgradeModal() : this.maybeHideModal();
      removed = false;
    }.bind(this);
    var timeout;
    var delayModel = function(ev) {
      if (ev.target !== dialog) { return; }  // not for a child element
      var cand = 'DOMNodeRemoved';
      removed |= (ev.type.substr(0, cand.length) === cand);
      window.clearTimeout(timeout);
      timeout = window.setTimeout(cb, 0);
    };
    ['DOMAttrModified', 'DOMNodeRemoved', 'DOMNodeRemovedFromDocument'].forEach(function(name) {
      dialog.addEventListener(name, delayModel);
    });
  }
  // Note that the DOM is observed inside DialogManager while any dialog
  // is being displayed as a modal, to catch modal removal from the DOM.

  Object.defineProperty(dialog, 'open', {
    set: this.setOpen.bind(this),
    get: dialog.hasAttribute.bind(dialog, 'open')
  });

  this.backdrop_ = document.createElement('div');
  this.backdrop_.className = 'backdrop';
  this.backdrop_.addEventListener('mouseup'  , this.backdropMouseEvent_.bind(this));
  this.backdrop_.addEventListener('mousedown', this.backdropMouseEvent_.bind(this));
  this.backdrop_.addEventListener('click'    , this.backdropMouseEvent_.bind(this));
}

dialogPolyfillInfo.prototype = /** @type {HTMLDialogElement.prototype} */ ({

  get dialog() {
    return this.dialog_;
  },

  /**
   * Maybe remove this dialog from the modal top layer. This is called when
   * a modal dialog may no longer be tenable, e.g., when the dialog is no
   * longer open or is no longer part of the DOM.
   */
  maybeHideModal: function() {
    if (this.dialog_.hasAttribute('open') && isConnected(this.dialog_)) { return; }
    this.downgradeModal();
  },

  /**
   * Remove this dialog from the modal top layer, leaving it as a non-modal.
   */
  downgradeModal: function() {
    if (!this.openAsModal_) { return; }
    this.openAsModal_ = false;
    this.dialog_.style.zIndex = '';

    // This won't match the native <dialog> exactly because if the user set top on a centered
    // polyfill dialog, that top gets thrown away when the dialog is closed. Not sure it's
    // possible to polyfill this perfectly.
    if (this.replacedStyleTop_) {
      this.dialog_.style.top = '';
      this.replacedStyleTop_ = false;
    }

    // Clear the backdrop and remove from the manager.
    this.backdrop_.parentNode && this.backdrop_.parentNode.removeChild(this.backdrop_);
    dialogPolyfill.dm.removeDialog(this);
  },

  /**
   * @param {boolean} value whether to open or close this dialog
   */
  setOpen: function(value) {
    if (value) {
      this.dialog_.hasAttribute('open') || this.dialog_.setAttribute('open', '');
    } else {
      this.dialog_.removeAttribute('open');
      this.maybeHideModal();  // nb. redundant with MutationObserver
    }
  },

  /**
   * Handles mouse events ('mouseup', 'mousedown', 'click') on the fake .backdrop element, redirecting them as if
   * they were on the dialog itself.
   *
   * @param {!Event} e to redirect
   */
  backdropMouseEvent_: function(e) {
    if (!this.dialog_.hasAttribute('tabindex')) {
      // Clicking on the backdrop should move the implicit cursor, even if dialog cannot be
      // focused. Create a fake thing to focus on. If the backdrop was _before_ the dialog, this
      // would not be needed - clicks would move the implicit cursor there.
      var fake = document.createElement('div');
      this.dialog_.insertBefore(fake, this.dialog_.firstChild);
      fake.tabIndex = -1;
      fake.focus();
      this.dialog_.removeChild(fake);
    } else {
      this.dialog_.focus();
    }

    var redirectedEvent = document.createEvent('MouseEvents');
    redirectedEvent.initMouseEvent(e.type, e.bubbles, e.cancelable, window,
        e.detail, e.screenX, e.screenY, e.clientX, e.clientY, e.ctrlKey,
        e.altKey, e.shiftKey, e.metaKey, e.button, e.relatedTarget);
    this.dialog_.dispatchEvent(redirectedEvent);
    e.stopPropagation();
  },

  /**
   * Focuses on the first focusable element within the dialog. This will always blur the current
   * focus, even if nothing within the dialog is found.
   */
  focus_: function() {
    // Find element with `autofocus` attribute, or fall back to the first form/tabindex control.
    var target = this.dialog_.querySelector('[autofocus]:not([disabled])');
    if (!target && this.dialog_.tabIndex >= 0) {
      target = this.dialog_;
    }
    if (!target) {
      target = findFocusableElementWithin(this.dialog_);
    }
    safeBlur(document.activeElement);
    target && target.focus();
  },

  /**
   * Sets the zIndex for the backdrop and dialog.
   *
   * @param {number} dialogZ
   * @param {number} backdropZ
   */
  updateZIndex: function(dialogZ, backdropZ) {
    if (dialogZ < backdropZ) {
      throw new Error('dialogZ should never be < backdropZ');
    }
    this.dialog_.style.zIndex = dialogZ;
    this.backdrop_.style.zIndex = backdropZ;
  },

  /**
   * Shows the dialog. If the dialog is already open, this does nothing.
   */
  show: function() {
    if (!this.dialog_.open) {
      this.setOpen(true);
      this.focus_();
    }
  },

  /**
   * Show this dialog modally.
   */
  showModal: function() {
    if (this.dialog_.hasAttribute('open')) {
      throw new Error('Failed to execute \'showModal\' on dialog: The element is already open, and therefore cannot be opened modally.');
    }
    if (!isConnected(this.dialog_)) {
      throw new Error('Failed to execute \'showModal\' on dialog: The element is not in a Document.');
    }
    if (!dialogPolyfill.dm.pushDialog(this)) {
      throw new Error('Failed to execute \'showModal\' on dialog: There are too many open modal dialogs.');
    }

    if (createsStackingContext(this.dialog_.parentElement)) {
      console.warn('A dialog is being shown inside a stacking context. ' +
          'This may cause it to be unusable. For more information, see this link: ' +
          'https://github.com/GoogleChrome/dialog-polyfill/#stacking-context');
    }

    this.setOpen(true);
    this.openAsModal_ = true;

    // Optionally center vertically, relative to the current viewport.
    if (dialogPolyfill.needsCentering(this.dialog_)) {
      dialogPolyfill.reposition(this.dialog_);
      this.replacedStyleTop_ = true;
    } else {
      this.replacedStyleTop_ = false;
    }

    // Insert backdrop.
    this.dialog_.parentNode.insertBefore(this.backdrop_, this.dialog_.nextSibling);

    // Focus on whatever inside the dialog.
    this.focus_();
  },

  /**
   * Closes this HTMLDialogElement. This is optional vs clearing the open
   * attribute, however this fires a 'close' event.
   *
   * @param {string=} opt_returnValue to use as the returnValue
   */
  close: function(opt_returnValue) {
    if (!this.dialog_.hasAttribute('open')) {
      throw new Error('Failed to execute \'close\' on dialog: The element does not have an \'open\' attribute, and therefore cannot be closed.');
    }
    this.setOpen(false);

    // Leave returnValue untouched in case it was set directly on the element
    if (opt_returnValue !== undefined) {
      this.dialog_.returnValue = opt_returnValue;
    }

    // Triggering "close" event for any attached listeners on the <dialog>.
    var closeEvent = new supportCustomEvent('close', {
      bubbles: false,
      cancelable: false
    });
    safeDispatchEvent(this.dialog_, closeEvent);
  }

});

var dialogPolyfill = {};

dialogPolyfill.reposition = function(element) {
  var scrollTop = document.body.scrollTop || document.documentElement.scrollTop;
  var topValue = scrollTop + (window.innerHeight - element.offsetHeight) / 2;
  element.style.top = Math.max(scrollTop, topValue) + 'px';
};

dialogPolyfill.isInlinePositionSetByStylesheet = function(element) {
  for (var i = 0; i < document.styleSheets.length; ++i) {
    var styleSheet = document.styleSheets[i];
    var cssRules = null;
    // Some browsers throw on cssRules.
    try {
      cssRules = styleSheet.cssRules;
    } catch (e) {}
    if (!cssRules) { continue; }
    for (var j = 0; j < cssRules.length; ++j) {
      var rule = cssRules[j];
      var selectedNodes = null;
      // Ignore errors on invalid selector texts.
      try {
        selectedNodes = document.querySelectorAll(rule.selectorText);
      } catch(e) {}
      if (!selectedNodes || !inNodeList(selectedNodes, element)) {
        continue;
      }
      var cssTop = rule.style.getPropertyValue('top');
      var cssBottom = rule.style.getPropertyValue('bottom');
      if ((cssTop && cssTop !== 'auto') || (cssBottom && cssBottom !== 'auto')) {
        return true;
      }
    }
  }
  return false;
};

dialogPolyfill.needsCentering = function(dialog) {
  var computedStyle = window.getComputedStyle(dialog);
  if (computedStyle.position !== 'absolute') {
    return false;
  }

  // We must determine whether the top/bottom specified value is non-auto.  In
  // WebKit/Blink, checking computedStyle.top == 'auto' is sufficient, but
  // Firefox returns the used value. So we do this crazy thing instead: check
  // the inline style and then go through CSS rules.
  if ((dialog.style.top !== 'auto' && dialog.style.top !== '') ||
      (dialog.style.bottom !== 'auto' && dialog.style.bottom !== '')) {
    return false;
  }
  return !dialogPolyfill.isInlinePositionSetByStylesheet(dialog);
};

/**
 * @param {!Element} element to force upgrade
 */
dialogPolyfill.forceRegisterDialog = function(element) {
  if (window.HTMLDialogElement || element.showModal) {
    console.warn('This browser already supports <dialog>, the polyfill ' +
        'may not work correctly', element);
  }
  if (element.localName !== 'dialog') {
    throw new Error('Failed to register dialog: The element is not a dialog.');
  }
  new dialogPolyfillInfo(/** @type {!HTMLDialogElement} */ (element));
};

/**
 * @param {!Element} element to upgrade, if necessary
 */
dialogPolyfill.registerDialog = function(element) {
  if (!element.showModal) {
    dialogPolyfill.forceRegisterDialog(element);
  }
};

/**
 * @constructor
 */
dialogPolyfill.DialogManager = function() {
  /** @type {!Array<!dialogPolyfillInfo>} */
  this.pendingDialogStack = [];

  var checkDOM = this.checkDOM_.bind(this);

  // The overlay is used to simulate how a modal dialog blocks the document.
  // The blocking dialog is positioned on top of the overlay, and the rest of
  // the dialogs on the pending dialog stack are positioned below it. In the
  // actual implementation, the modal dialog stacking is controlled by the
  // top layer, where z-index has no effect.
  this.overlay = document.createElement('div');
  this.overlay.className = '_dialog_overlay';
  this.overlay.addEventListener('click', function(e) {
    this.forwardTab_ = undefined;
    e.stopPropagation();
    checkDOM([]);  // sanity-check DOM
  }.bind(this));

  this.handleKey_ = this.handleKey_.bind(this);
  this.handleFocus_ = this.handleFocus_.bind(this);

  this.zIndexLow_ = 100000;
  this.zIndexHigh_ = 100000 + 150;

  this.forwardTab_ = undefined;

  if ('MutationObserver' in window) {
    this.mo_ = new MutationObserver(function(records) {
      var removed = [];
      records.forEach(function(rec) {
        for (var i = 0, c; c = rec.removedNodes[i]; ++i) {
          if (!(c instanceof Element)) {
            continue;
          } else if (c.localName === 'dialog') {
            removed.push(c);
          }
          removed = removed.concat(c.querySelectorAll('dialog'));
        }
      });
      removed.length && checkDOM(removed);
    });
  }
};

/**
 * Called on the first modal dialog being shown. Adds the overlay and related
 * handlers.
 */
dialogPolyfill.DialogManager.prototype.blockDocument = function() {
  document.documentElement.addEventListener('focus', this.handleFocus_, true);
  document.addEventListener('keydown', this.handleKey_);
  this.mo_ && this.mo_.observe(document, {childList: true, subtree: true});
};

/**
 * Called on the first modal dialog being removed, i.e., when no more modal
 * dialogs are visible.
 */
dialogPolyfill.DialogManager.prototype.unblockDocument = function() {
  document.documentElement.removeEventListener('focus', this.handleFocus_, true);
  document.removeEventListener('keydown', this.handleKey_);
  this.mo_ && this.mo_.disconnect();
};

/**
 * Updates the stacking of all known dialogs.
 */
dialogPolyfill.DialogManager.prototype.updateStacking = function() {
  var zIndex = this.zIndexHigh_;

  for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
    dpi.updateZIndex(--zIndex, --zIndex);
    if (i === 0) {
      this.overlay.style.zIndex = --zIndex;
    }
  }

  // Make the overlay a sibling of the dialog itself.
  var last = this.pendingDialogStack[0];
  if (last) {
    var p = last.dialog.parentNode || document.body;
    p.appendChild(this.overlay);
  } else if (this.overlay.parentNode) {
    this.overlay.parentNode.removeChild(this.overlay);
  }
};

/**
 * @param {Element} candidate to check if contained or is the top-most modal dialog
 * @return {boolean} whether candidate is contained in top dialog
 */
dialogPolyfill.DialogManager.prototype.containedByTopDialog_ = function(candidate) {
  while (candidate = findNearestDialog(candidate)) {
    for (var i = 0, dpi; dpi = this.pendingDialogStack[i]; ++i) {
      if (dpi.dialog === candidate) {
        return i === 0;  // only valid if top-most
      }
    }
    candidate = candidate.parentElement;
  }
  return false;
};

dialogPolyfill.DialogManager.prototype.handleFocus_ = function(event) {
  var target = event.composedPath ? event.composedPath()[0] : event.target;

  if (this.containedByTopDialog_(target)) { return; }

  if (document.activeElement === document.documentElement) { return; }

  event.preventDefault();
  event.stopPropagation();
  safeBlur(/** @type {Element} */ (target));

  if (this.forwardTab_ === undefined) { return; }  // move focus only from a tab key

  var dpi = this.pendingDialogStack[0];
  var dialog = dpi.dialog;
  var position = dialog.compareDocumentPosition(target);
  if (position & Node.DOCUMENT_POSITION_PRECEDING) {
    if (this.forwardTab_) {
      // forward
      dpi.focus_();
    } else if (target !== document.documentElement) {
      // backwards if we're not already focused on <html>
      document.documentElement.focus();
    }
  }

  return false;
};

dialogPolyfill.DialogManager.prototype.handleKey_ = function(event) {
  this.forwardTab_ = undefined;
  if (event.keyCode === 27) {
    event.preventDefault();
    event.stopPropagation();
    var cancelEvent = new supportCustomEvent('cancel', {
      bubbles: false,
      cancelable: true
    });
    var dpi = this.pendingDialogStack[0];
    if (dpi && safeDispatchEvent(dpi.dialog, cancelEvent)) {
      dpi.dialog.close();
    }
  } else if (event.keyCode === 9) {
    this.forwardTab_ = !event.shiftKey;
  }
};

/**
 * Finds and downgrades any known modal dialogs that are no longer displayed. Dialogs that are
 * removed and immediately readded don't stay modal, they become normal.
 *
 * @param {!Array<!HTMLDialogElement>} removed that have definitely been removed
 */
dialogPolyfill.DialogManager.prototype.checkDOM_ = function(removed) {
  // This operates on a clone because it may cause it to change. Each change also calls
  // updateStacking, which only actually needs to happen once. But who removes many modal dialogs
  // at a time?!
  var clone = this.pendingDialogStack.slice();
  clone.forEach(function(dpi) {
    if (removed.indexOf(dpi.dialog) !== -1) {
      dpi.downgradeModal();
    } else {
      dpi.maybeHideModal();
    }
  });
};

/**
 * @param {!dialogPolyfillInfo} dpi
 * @return {boolean} whether the dialog was allowed
 */
dialogPolyfill.DialogManager.prototype.pushDialog = function(dpi) {
  var allowed = (this.zIndexHigh_ - this.zIndexLow_) / 2 - 1;
  if (this.pendingDialogStack.length >= allowed) {
    return false;
  }
  if (this.pendingDialogStack.unshift(dpi) === 1) {
    this.blockDocument();
  }
  this.updateStacking();
  return true;
};

/**
 * @param {!dialogPolyfillInfo} dpi
 */
dialogPolyfill.DialogManager.prototype.removeDialog = function(dpi) {
  var index = this.pendingDialogStack.indexOf(dpi);
  if (index === -1) { return; }

  this.pendingDialogStack.splice(index, 1);
  if (this.pendingDialogStack.length === 0) {
    this.unblockDocument();
  }
  this.updateStacking();
};

dialogPolyfill.dm = new dialogPolyfill.DialogManager();
dialogPolyfill.formSubmitter = null;
dialogPolyfill.imagemapUseValue = null;

/**
 * Installs global handlers, such as click listers and native method overrides. These are needed
 * even if a no dialog is registered, as they deal with <form method="dialog">.
 */
if (window.HTMLDialogElement === undefined) {

  /**
   * If HTMLFormElement translates method="DIALOG" into 'get', then replace the descriptor with
   * one that returns the correct value.
   */
  var testForm = document.createElement('form');
  testForm.setAttribute('method', 'dialog');
  if (testForm.method !== 'dialog') {
    var methodDescriptor = Object.getOwnPropertyDescriptor(HTMLFormElement.prototype, 'method');
    if (methodDescriptor) {
      // nb. Some older iOS and older PhantomJS fail to return the descriptor. Don't do anything
      // and don't bother to update the element.
      var realGet = methodDescriptor.get;
      methodDescriptor.get = function() {
        if (isFormMethodDialog(this)) {
          return 'dialog';
        }
        return realGet.call(this);
      };
      var realSet = methodDescriptor.set;
      /** @this {HTMLElement} */
      methodDescriptor.set = function(v) {
        if (typeof v === 'string' && v.toLowerCase() === 'dialog') {
          return this.setAttribute('method', v);
        }
        return realSet.call(this, v);
      };
      Object.defineProperty(HTMLFormElement.prototype, 'method', methodDescriptor);
    }
  }

  /**
   * Global 'click' handler, to capture the <input type="submit"> or <button> element which has
   * submitted a <form method="dialog">. Needed as Safari and others don't report this inside
   * document.activeElement.
   */
  document.addEventListener('click', function(ev) {
    dialogPolyfill.formSubmitter = null;
    dialogPolyfill.imagemapUseValue = null;
    if (ev.defaultPrevented) { return; }  // e.g. a submit which prevents default submission

    var target = /** @type {Element} */ (ev.target);
    if ('composedPath' in ev) {
      var path = ev.composedPath();
      target = path.shift() || target;
    }
    if (!target || !isFormMethodDialog(target.form)) { return; }

    var valid = (target.type === 'submit' && ['button', 'input'].indexOf(target.localName) > -1);
    if (!valid) {
      if (!(target.localName === 'input' && target.type === 'image')) { return; }
      // this is a <input type="image">, which can submit forms
      dialogPolyfill.imagemapUseValue = ev.offsetX + ',' + ev.offsetY;
    }

    var dialog = findNearestDialog(target);
    if (!dialog) { return; }

    dialogPolyfill.formSubmitter = target;

  }, false);

  /**
   * Global 'submit' handler. This handles submits of `method="dialog"` which are invalid, i.e.,
   * outside a dialog. They get prevented.
   */
  document.addEventListener('submit', function(ev) {
    var form = ev.target;
    var dialog = findNearestDialog(form);
    if (dialog) {
      return;  // ignore, handle there
    }

    var submitter = findFormSubmitter(ev);
    var formmethod = submitter && submitter.getAttribute('formmethod') || form.getAttribute('method');
    if (formmethod === 'dialog') {
      ev.preventDefault();
    }
  });

  /**
   * Replace the native HTMLFormElement.submit() method, as it won't fire the
   * submit event and give us a chance to respond.
   */
  var nativeFormSubmit = HTMLFormElement.prototype.submit;
  var replacementFormSubmit = function () {
    if (!isFormMethodDialog(this)) {
      return nativeFormSubmit.call(this);
    }
    var dialog = findNearestDialog(this);
    dialog && dialog.close();
  };
  HTMLFormElement.prototype.submit = replacementFormSubmit;
}

/* harmony default export */ __webpack_exports__["default"] = (dialogPolyfill);


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9ub2RlX21vZHVsZXMvZGlhbG9nLXBvbHlmaWxsL2Rpc3QvZGlhbG9nLXBvbHlmaWxsLmVzbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQUE7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxhQUFhO0FBQ3hCLFdBQVcsT0FBTztBQUNsQixZQUFZO0FBQ1o7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQixZQUFZLGtCQUFrQjtBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVcsUUFBUTtBQUNuQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLFVBQVU7QUFDckIsV0FBVyxLQUFLO0FBQ2hCLFlBQVksUUFBUTtBQUNwQjtBQUNBO0FBQ0EsaUJBQWlCLHFCQUFxQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLGdCQUFnQjtBQUMzQixZQUFZLFFBQVE7QUFDcEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxXQUFXLDJCQUEy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O0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLFlBQVk7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSw4QkFBOEIsUUFBUSxFQUFFOztBQUV4Qyw0QkFBNEIsUUFBUTtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBLHNEQUFzRCxRQUFROztBQUU5RDtBQUNBO0FBQ0EsdUVBQXVFLFFBQVE7QUFDL0U7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLFFBQVE7O0FBRTFCOztBQUVBLEdBQUc7O0FBRUg7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRzs7QUFFSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVlLDZFQUFjLEVBQUMiLCJmaWxlIjoidmVuZG9yc35hcHB+cHJvZHVjdERldGFpbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vIG5iLiBUaGlzIGlzIGZvciBJRTEwIGFuZCBsb3dlciBfb25seV8uXG52YXIgc3VwcG9ydEN1c3RvbUV2ZW50ID0gd2luZG93LkN1c3RvbUV2ZW50O1xuaWYgKCFzdXBwb3J0Q3VzdG9tRXZlbnQgfHwgdHlwZW9mIHN1cHBvcnRDdXN0b21FdmVudCA9PT0gJ29iamVjdCcpIHtcbiAgc3VwcG9ydEN1c3RvbUV2ZW50ID0gZnVuY3Rpb24gQ3VzdG9tRXZlbnQoZXZlbnQsIHgpIHtcbiAgICB4ID0geCB8fCB7fTtcbiAgICB2YXIgZXYgPSBkb2N1bWVudC5jcmVhdGVFdmVudCgnQ3VzdG9tRXZlbnQnKTtcbiAgICBldi5pbml0Q3VzdG9tRXZlbnQoZXZlbnQsICEheC5idWJibGVzLCAhIXguY2FuY2VsYWJsZSwgeC5kZXRhaWwgfHwgbnVsbCk7XG4gICAgcmV0dXJuIGV2O1xuICB9O1xuICBzdXBwb3J0Q3VzdG9tRXZlbnQucHJvdG90eXBlID0gd2luZG93LkV2ZW50LnByb3RvdHlwZTtcbn1cblxuLyoqXG4gKiBEaXNwYXRjaGVzIHRoZSBwYXNzZWQgZXZlbnQgdG8gYm90aCBhbiBcIm9uPHR5cGU+XCIgaGFuZGxlciBhcyB3ZWxsIGFzIHZpYSB0aGVcbiAqIG5vcm1hbCBkaXNwYXRjaCBvcGVyYXRpb24uIERvZXMgbm90IGJ1YmJsZS5cbiAqXG4gKiBAcGFyYW0geyFFdmVudFRhcmdldH0gdGFyZ2V0XG4gKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAqIEByZXR1cm4ge2Jvb2xlYW59XG4gKi9cbmZ1bmN0aW9uIHNhZmVEaXNwYXRjaEV2ZW50KHRhcmdldCwgZXZlbnQpIHtcbiAgdmFyIGNoZWNrID0gJ29uJyArIGV2ZW50LnR5cGUudG9Mb3dlckNhc2UoKTtcbiAgaWYgKHR5cGVvZiB0YXJnZXRbY2hlY2tdID09PSAnZnVuY3Rpb24nKSB7XG4gICAgdGFyZ2V0W2NoZWNrXShldmVudCk7XG4gIH1cbiAgcmV0dXJuIHRhcmdldC5kaXNwYXRjaEV2ZW50KGV2ZW50KTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIHRvIGNoZWNrIGZvciBzdGFja2luZyBjb250ZXh0XG4gKiBAcmV0dXJuIHtib29sZWFufSB3aGV0aGVyIHRoaXMgZWwgb3IgaXRzIHBhcmVudHMgY3JlYXRlcyBhIHN0YWNraW5nIGNvbnRleHRcbiAqL1xuZnVuY3Rpb24gY3JlYXRlc1N0YWNraW5nQ29udGV4dChlbCkge1xuICB3aGlsZSAoZWwgJiYgZWwgIT09IGRvY3VtZW50LmJvZHkpIHtcbiAgICB2YXIgcyA9IHdpbmRvdy5nZXRDb21wdXRlZFN0eWxlKGVsKTtcbiAgICB2YXIgaW52YWxpZCA9IGZ1bmN0aW9uKGssIG9rKSB7XG4gICAgICByZXR1cm4gIShzW2tdID09PSB1bmRlZmluZWQgfHwgc1trXSA9PT0gb2spO1xuICAgIH07XG5cbiAgICBpZiAocy5vcGFjaXR5IDwgMSB8fFxuICAgICAgICBpbnZhbGlkKCd6SW5kZXgnLCAnYXV0bycpIHx8XG4gICAgICAgIGludmFsaWQoJ3RyYW5zZm9ybScsICdub25lJykgfHxcbiAgICAgICAgaW52YWxpZCgnbWl4QmxlbmRNb2RlJywgJ25vcm1hbCcpIHx8XG4gICAgICAgIGludmFsaWQoJ2ZpbHRlcicsICdub25lJykgfHxcbiAgICAgICAgaW52YWxpZCgncGVyc3BlY3RpdmUnLCAnbm9uZScpIHx8XG4gICAgICAgIHNbJ2lzb2xhdGlvbiddID09PSAnaXNvbGF0ZScgfHxcbiAgICAgICAgcy5wb3NpdGlvbiA9PT0gJ2ZpeGVkJyB8fFxuICAgICAgICBzLndlYmtpdE92ZXJmbG93U2Nyb2xsaW5nID09PSAndG91Y2gnKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgZWwgPSBlbC5wYXJlbnRFbGVtZW50O1xuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBGaW5kcyB0aGUgbmVhcmVzdCA8ZGlhbG9nPiBmcm9tIHRoZSBwYXNzZWQgZWxlbWVudC5cbiAqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGVsIHRvIHNlYXJjaCBmcm9tXG4gKiBAcmV0dXJuIHtIVE1MRGlhbG9nRWxlbWVudH0gZGlhbG9nIGZvdW5kXG4gKi9cbmZ1bmN0aW9uIGZpbmROZWFyZXN0RGlhbG9nKGVsKSB7XG4gIHdoaWxlIChlbCkge1xuICAgIGlmIChlbC5sb2NhbE5hbWUgPT09ICdkaWFsb2cnKSB7XG4gICAgICByZXR1cm4gLyoqIEB0eXBlIHtIVE1MRGlhbG9nRWxlbWVudH0gKi8gKGVsKTtcbiAgICB9XG4gICAgaWYgKGVsLnBhcmVudEVsZW1lbnQpIHtcbiAgICAgIGVsID0gZWwucGFyZW50RWxlbWVudDtcbiAgICB9IGVsc2UgaWYgKGVsLnBhcmVudE5vZGUpIHtcbiAgICAgIGVsID0gZWwucGFyZW50Tm9kZS5ob3N0O1xuICAgIH0gZWxzZSB7XG4gICAgICBlbCA9IG51bGw7XG4gICAgfVxuICB9XG4gIHJldHVybiBudWxsO1xufVxuXG4vKipcbiAqIEJsdXIgdGhlIHNwZWNpZmllZCBlbGVtZW50LCBhcyBsb25nIGFzIGl0J3Mgbm90IHRoZSBIVE1MIGJvZHkgZWxlbWVudC5cbiAqIFRoaXMgd29ya3MgYXJvdW5kIGFuIElFOS8xMCBidWcgLSBibHVycmluZyB0aGUgYm9keSBjYXVzZXMgV2luZG93cyB0b1xuICogYmx1ciB0aGUgd2hvbGUgYXBwbGljYXRpb24uXG4gKlxuICogQHBhcmFtIHtFbGVtZW50fSBlbCB0byBibHVyXG4gKi9cbmZ1bmN0aW9uIHNhZmVCbHVyKGVsKSB7XG4gIC8vIEZpbmQgdGhlIGFjdHVhbCBmb2N1c2VkIGVsZW1lbnQgd2hlbiB0aGUgYWN0aXZlIGVsZW1lbnQgaXMgaW5zaWRlIGEgc2hhZG93IHJvb3RcbiAgd2hpbGUgKGVsICYmIGVsLnNoYWRvd1Jvb3QgJiYgZWwuc2hhZG93Um9vdC5hY3RpdmVFbGVtZW50KSB7XG4gICAgZWwgPSBlbC5zaGFkb3dSb290LmFjdGl2ZUVsZW1lbnQ7XG4gIH1cblxuICBpZiAoZWwgJiYgZWwuYmx1ciAmJiBlbCAhPT0gZG9jdW1lbnQuYm9keSkge1xuICAgIGVsLmJsdXIoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7IU5vZGVMaXN0fSBub2RlTGlzdCB0byBzZWFyY2hcbiAqIEBwYXJhbSB7Tm9kZX0gbm9kZSB0byBmaW5kXG4gKiBAcmV0dXJuIHtib29sZWFufSB3aGV0aGVyIG5vZGUgaXMgaW5zaWRlIG5vZGVMaXN0XG4gKi9cbmZ1bmN0aW9uIGluTm9kZUxpc3Qobm9kZUxpc3QsIG5vZGUpIHtcbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBub2RlTGlzdC5sZW5ndGg7ICsraSkge1xuICAgIGlmIChub2RlTGlzdFtpXSA9PT0gbm9kZSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICB9XG4gIHJldHVybiBmYWxzZTtcbn1cblxuLyoqXG4gKiBAcGFyYW0ge0hUTUxGb3JtRWxlbWVudH0gZWwgdG8gY2hlY2tcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHdoZXRoZXIgdGhpcyBmb3JtIGhhcyBtZXRob2Q9XCJkaWFsb2dcIlxuICovXG5mdW5jdGlvbiBpc0Zvcm1NZXRob2REaWFsb2coZWwpIHtcbiAgaWYgKCFlbCB8fCAhZWwuaGFzQXR0cmlidXRlKCdtZXRob2QnKSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICByZXR1cm4gZWwuZ2V0QXR0cmlidXRlKCdtZXRob2QnKS50b0xvd2VyQ2FzZSgpID09PSAnZGlhbG9nJztcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFEb2N1bWVudEZyYWdtZW50fCFFbGVtZW50fSBob3N0RWxlbWVudFxuICogQHJldHVybiB7P0VsZW1lbnR9XG4gKi9cbmZ1bmN0aW9uIGZpbmRGb2N1c2FibGVFbGVtZW50V2l0aGluKGhvc3RFbGVtZW50KSB7XG4gIC8vIE5vdGUgdGhhdCB0aGlzIGlzICdhbnkgZm9jdXNhYmxlIGFyZWEnLiBUaGlzIGxpc3QgaXMgcHJvYmFibHkgbm90IGV4aGF1c3RpdmUsIGJ1dCB0aGVcbiAgLy8gYWx0ZXJuYXRpdmUgaW52b2x2ZXMgc3RlcHBpbmcgdGhyb3VnaCBhbmQgdHJ5aW5nIHRvIGZvY3VzIGV2ZXJ5dGhpbmcuXG4gIHZhciBvcHRzID0gWydidXR0b24nLCAnaW5wdXQnLCAna2V5Z2VuJywgJ3NlbGVjdCcsICd0ZXh0YXJlYSddO1xuICB2YXIgcXVlcnkgPSBvcHRzLm1hcChmdW5jdGlvbihlbCkge1xuICAgIHJldHVybiBlbCArICc6bm90KFtkaXNhYmxlZF0pJztcbiAgfSk7XG4gIC8vIFRPRE8oc2FtdGhvcik6IHRhYmluZGV4IHZhbHVlcyB0aGF0IGFyZSBub3QgbnVtZXJpYyBhcmUgbm90IGZvY3VzYWJsZS5cbiAgcXVlcnkucHVzaCgnW3RhYmluZGV4XTpub3QoW2Rpc2FibGVkXSk6bm90KFt0YWJpbmRleD1cIlwiXSknKTsgIC8vIHRhYmluZGV4ICE9IFwiXCIsIG5vdCBkaXNhYmxlZFxuICB2YXIgdGFyZ2V0ID0gaG9zdEVsZW1lbnQucXVlcnlTZWxlY3RvcihxdWVyeS5qb2luKCcsICcpKTtcblxuICBpZiAoIXRhcmdldCAmJiAnYXR0YWNoU2hhZG93JyBpbiBFbGVtZW50LnByb3RvdHlwZSkge1xuICAgIC8vIElmIHdlIGhhdmVuJ3QgZm91bmQgYSBmb2N1c2FibGUgdGFyZ2V0LCBzZWUgaWYgdGhlIGhvc3QgZWxlbWVudCBjb250YWlucyBhbiBlbGVtZW50XG4gICAgLy8gd2hpY2ggaGFzIGEgc2hhZG93Um9vdC5cbiAgICAvLyBSZWN1cnNpdmVseSBzZWFyY2ggZm9yIHRoZSBmaXJzdCBmb2N1c2FibGUgaXRlbSBpbiBzaGFkb3cgcm9vdHMuXG4gICAgdmFyIGVsZW1zID0gaG9zdEVsZW1lbnQucXVlcnlTZWxlY3RvckFsbCgnKicpO1xuICAgIGZvciAodmFyIGkgPSAwOyBpIDwgZWxlbXMubGVuZ3RoOyBpKyspIHtcbiAgICAgIGlmIChlbGVtc1tpXS50YWdOYW1lICYmIGVsZW1zW2ldLnNoYWRvd1Jvb3QpIHtcbiAgICAgICAgdGFyZ2V0ID0gZmluZEZvY3VzYWJsZUVsZW1lbnRXaXRoaW4oZWxlbXNbaV0uc2hhZG93Um9vdCk7XG4gICAgICAgIGlmICh0YXJnZXQpIHtcbiAgICAgICAgICBicmVhaztcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG4vKipcbiAqIERldGVybWluZXMgaWYgYW4gZWxlbWVudCBpcyBhdHRhY2hlZCB0byB0aGUgRE9NLlxuICogQHBhcmFtIHtFbGVtZW50fSBlbGVtZW50IHRvIGNoZWNrXG4gKiBAcmV0dXJuIHtib29sZWFufSB3aGV0aGVyIHRoZSBlbGVtZW50IGlzIGluIERPTVxuICovXG5mdW5jdGlvbiBpc0Nvbm5lY3RlZChlbGVtZW50KSB7XG4gIHJldHVybiBlbGVtZW50LmlzQ29ubmVjdGVkIHx8IGRvY3VtZW50LmJvZHkuY29udGFpbnMoZWxlbWVudCk7XG59XG5cbi8qKlxuICogQHBhcmFtIHshRXZlbnR9IGV2ZW50XG4gKiBAcmV0dXJuIHs/RWxlbWVudH1cbiAqL1xuZnVuY3Rpb24gZmluZEZvcm1TdWJtaXR0ZXIoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LnN1Ym1pdHRlcikge1xuICAgIHJldHVybiBldmVudC5zdWJtaXR0ZXI7XG4gIH1cblxuICB2YXIgZm9ybSA9IGV2ZW50LnRhcmdldDtcbiAgaWYgKCEoZm9ybSBpbnN0YW5jZW9mIEhUTUxGb3JtRWxlbWVudCkpIHtcbiAgICByZXR1cm4gbnVsbDtcbiAgfVxuXG4gIHZhciBzdWJtaXR0ZXIgPSBkaWFsb2dQb2x5ZmlsbC5mb3JtU3VibWl0dGVyO1xuICBpZiAoIXN1Ym1pdHRlcikge1xuICAgIHZhciB0YXJnZXQgPSBldmVudC50YXJnZXQ7XG4gICAgdmFyIHJvb3QgPSAoJ2dldFJvb3ROb2RlJyBpbiB0YXJnZXQgJiYgdGFyZ2V0LmdldFJvb3ROb2RlKCkgfHwgZG9jdW1lbnQpO1xuICAgIHN1Ym1pdHRlciA9IHJvb3QuYWN0aXZlRWxlbWVudDtcbiAgfVxuXG4gIGlmICghc3VibWl0dGVyIHx8IHN1Ym1pdHRlci5mb3JtICE9PSBmb3JtKSB7XG4gICAgcmV0dXJuIG51bGw7XG4gIH1cbiAgcmV0dXJuIHN1Ym1pdHRlcjtcbn1cblxuLyoqXG4gKiBAcGFyYW0geyFFdmVudH0gZXZlbnRcbiAqL1xuZnVuY3Rpb24gbWF5YmVIYW5kbGVTdWJtaXQoZXZlbnQpIHtcbiAgaWYgKGV2ZW50LmRlZmF1bHRQcmV2ZW50ZWQpIHtcbiAgICByZXR1cm47XG4gIH1cbiAgdmFyIGZvcm0gPSAvKiogQHR5cGUgeyFIVE1MRm9ybUVsZW1lbnR9ICovIChldmVudC50YXJnZXQpO1xuXG4gIC8vIFdlJ2QgaGF2ZSBhIHZhbHVlIGlmIHdlIGNsaWNrZWQgb24gYW4gaW1hZ2VtYXAuXG4gIHZhciB2YWx1ZSA9IGRpYWxvZ1BvbHlmaWxsLmltYWdlbWFwVXNlVmFsdWU7XG4gIHZhciBzdWJtaXR0ZXIgPSBmaW5kRm9ybVN1Ym1pdHRlcihldmVudCk7XG4gIGlmICh2YWx1ZSA9PT0gbnVsbCAmJiBzdWJtaXR0ZXIpIHtcbiAgICB2YWx1ZSA9IHN1Ym1pdHRlci52YWx1ZTtcbiAgfVxuXG4gIC8vIFRoZXJlIHNob3VsZCBhbHdheXMgYmUgYSBkaWFsb2cgYXMgdGhpcyBoYW5kbGVyIGlzIGFkZGVkIHNwZWNpZmljYWxseSBvbiB0aGVtLCBidXQgY2hlY2sganVzdFxuICAvLyBpbiBjYXNlLlxuICB2YXIgZGlhbG9nID0gZmluZE5lYXJlc3REaWFsb2coZm9ybSk7XG4gIGlmICghZGlhbG9nKSB7XG4gICAgcmV0dXJuO1xuICB9XG5cbiAgLy8gUHJlZmVyIGZvcm1tZXRob2Qgb24gdGhlIGJ1dHRvbi5cbiAgdmFyIGZvcm1tZXRob2QgPSBzdWJtaXR0ZXIgJiYgc3VibWl0dGVyLmdldEF0dHJpYnV0ZSgnZm9ybW1ldGhvZCcpIHx8IGZvcm0uZ2V0QXR0cmlidXRlKCdtZXRob2QnKTtcbiAgaWYgKGZvcm1tZXRob2QgIT09ICdkaWFsb2cnKSB7XG4gICAgcmV0dXJuO1xuICB9XG4gIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG5cbiAgaWYgKHZhbHVlICE9IG51bGwpIHtcbiAgICAvLyBuYi4gd2UgZXhwbGljaXRseSBjaGVjayBhZ2FpbnN0IG51bGwvdW5kZWZpbmVkXG4gICAgZGlhbG9nLmNsb3NlKHZhbHVlKTtcbiAgfSBlbHNlIHtcbiAgICBkaWFsb2cuY2xvc2UoKTtcbiAgfVxufVxuXG4vKipcbiAqIEBwYXJhbSB7IUhUTUxEaWFsb2dFbGVtZW50fSBkaWFsb2cgdG8gdXBncmFkZVxuICogQGNvbnN0cnVjdG9yXG4gKi9cbmZ1bmN0aW9uIGRpYWxvZ1BvbHlmaWxsSW5mbyhkaWFsb2cpIHtcbiAgdGhpcy5kaWFsb2dfID0gZGlhbG9nO1xuICB0aGlzLnJlcGxhY2VkU3R5bGVUb3BfID0gZmFsc2U7XG4gIHRoaXMub3BlbkFzTW9kYWxfID0gZmFsc2U7XG5cbiAgLy8gU2V0IGExMXkgcm9sZS4gQnJvd3NlcnMgdGhhdCBzdXBwb3J0IGRpYWxvZyBpbXBsaWNpdGx5IGtub3cgdGhpcyBhbHJlYWR5LlxuICBpZiAoIWRpYWxvZy5oYXNBdHRyaWJ1dGUoJ3JvbGUnKSkge1xuICAgIGRpYWxvZy5zZXRBdHRyaWJ1dGUoJ3JvbGUnLCAnZGlhbG9nJyk7XG4gIH1cblxuICBkaWFsb2cuc2hvdyA9IHRoaXMuc2hvdy5iaW5kKHRoaXMpO1xuICBkaWFsb2cuc2hvd01vZGFsID0gdGhpcy5zaG93TW9kYWwuYmluZCh0aGlzKTtcbiAgZGlhbG9nLmNsb3NlID0gdGhpcy5jbG9zZS5iaW5kKHRoaXMpO1xuXG4gIGRpYWxvZy5hZGRFdmVudExpc3RlbmVyKCdzdWJtaXQnLCBtYXliZUhhbmRsZVN1Ym1pdCwgZmFsc2UpO1xuXG4gIGlmICghKCdyZXR1cm5WYWx1ZScgaW4gZGlhbG9nKSkge1xuICAgIGRpYWxvZy5yZXR1cm5WYWx1ZSA9ICcnO1xuICB9XG5cbiAgaWYgKCdNdXRhdGlvbk9ic2VydmVyJyBpbiB3aW5kb3cpIHtcbiAgICB2YXIgbW8gPSBuZXcgTXV0YXRpb25PYnNlcnZlcih0aGlzLm1heWJlSGlkZU1vZGFsLmJpbmQodGhpcykpO1xuICAgIG1vLm9ic2VydmUoZGlhbG9nLCB7YXR0cmlidXRlczogdHJ1ZSwgYXR0cmlidXRlRmlsdGVyOiBbJ29wZW4nXX0pO1xuICB9IGVsc2Uge1xuICAgIC8vIElFMTAgYW5kIGJlbG93IHN1cHBvcnQuIE5vdGUgdGhhdCBET01Ob2RlUmVtb3ZlZCBldGMgZmlyZSBfYmVmb3JlXyByZW1vdmFsLiBUaGV5IGFsc29cbiAgICAvLyBzZWVtIHRvIGZpcmUgZXZlbiBpZiB0aGUgZWxlbWVudCB3YXMgcmVtb3ZlZCBhcyBwYXJ0IG9mIGEgcGFyZW50IHJlbW92YWwuIFVzZSB0aGUgcmVtb3ZlZFxuICAgIC8vIGV2ZW50cyB0byBmb3JjZSBkb3duZ3JhZGUgKHVzZWZ1bCBpZiByZW1vdmVkL2ltbWVkaWF0ZWx5IGFkZGVkKS5cbiAgICB2YXIgcmVtb3ZlZCA9IGZhbHNlO1xuICAgIHZhciBjYiA9IGZ1bmN0aW9uKCkge1xuICAgICAgcmVtb3ZlZCA/IHRoaXMuZG93bmdyYWRlTW9kYWwoKSA6IHRoaXMubWF5YmVIaWRlTW9kYWwoKTtcbiAgICAgIHJlbW92ZWQgPSBmYWxzZTtcbiAgICB9LmJpbmQodGhpcyk7XG4gICAgdmFyIHRpbWVvdXQ7XG4gICAgdmFyIGRlbGF5TW9kZWwgPSBmdW5jdGlvbihldikge1xuICAgICAgaWYgKGV2LnRhcmdldCAhPT0gZGlhbG9nKSB7IHJldHVybjsgfSAgLy8gbm90IGZvciBhIGNoaWxkIGVsZW1lbnRcbiAgICAgIHZhciBjYW5kID0gJ0RPTU5vZGVSZW1vdmVkJztcbiAgICAgIHJlbW92ZWQgfD0gKGV2LnR5cGUuc3Vic3RyKDAsIGNhbmQubGVuZ3RoKSA9PT0gY2FuZCk7XG4gICAgICB3aW5kb3cuY2xlYXJUaW1lb3V0KHRpbWVvdXQpO1xuICAgICAgdGltZW91dCA9IHdpbmRvdy5zZXRUaW1lb3V0KGNiLCAwKTtcbiAgICB9O1xuICAgIFsnRE9NQXR0ck1vZGlmaWVkJywgJ0RPTU5vZGVSZW1vdmVkJywgJ0RPTU5vZGVSZW1vdmVkRnJvbURvY3VtZW50J10uZm9yRWFjaChmdW5jdGlvbihuYW1lKSB7XG4gICAgICBkaWFsb2cuYWRkRXZlbnRMaXN0ZW5lcihuYW1lLCBkZWxheU1vZGVsKTtcbiAgICB9KTtcbiAgfVxuICAvLyBOb3RlIHRoYXQgdGhlIERPTSBpcyBvYnNlcnZlZCBpbnNpZGUgRGlhbG9nTWFuYWdlciB3aGlsZSBhbnkgZGlhbG9nXG4gIC8vIGlzIGJlaW5nIGRpc3BsYXllZCBhcyBhIG1vZGFsLCB0byBjYXRjaCBtb2RhbCByZW1vdmFsIGZyb20gdGhlIERPTS5cblxuICBPYmplY3QuZGVmaW5lUHJvcGVydHkoZGlhbG9nLCAnb3BlbicsIHtcbiAgICBzZXQ6IHRoaXMuc2V0T3Blbi5iaW5kKHRoaXMpLFxuICAgIGdldDogZGlhbG9nLmhhc0F0dHJpYnV0ZS5iaW5kKGRpYWxvZywgJ29wZW4nKVxuICB9KTtcblxuICB0aGlzLmJhY2tkcm9wXyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICB0aGlzLmJhY2tkcm9wXy5jbGFzc05hbWUgPSAnYmFja2Ryb3AnO1xuICB0aGlzLmJhY2tkcm9wXy5hZGRFdmVudExpc3RlbmVyKCdtb3VzZXVwJyAgLCB0aGlzLmJhY2tkcm9wTW91c2VFdmVudF8uYmluZCh0aGlzKSk7XG4gIHRoaXMuYmFja2Ryb3BfLmFkZEV2ZW50TGlzdGVuZXIoJ21vdXNlZG93bicsIHRoaXMuYmFja2Ryb3BNb3VzZUV2ZW50Xy5iaW5kKHRoaXMpKTtcbiAgdGhpcy5iYWNrZHJvcF8uYWRkRXZlbnRMaXN0ZW5lcignY2xpY2snICAgICwgdGhpcy5iYWNrZHJvcE1vdXNlRXZlbnRfLmJpbmQodGhpcykpO1xufVxuXG5kaWFsb2dQb2x5ZmlsbEluZm8ucHJvdG90eXBlID0gLyoqIEB0eXBlIHtIVE1MRGlhbG9nRWxlbWVudC5wcm90b3R5cGV9ICovICh7XG5cbiAgZ2V0IGRpYWxvZygpIHtcbiAgICByZXR1cm4gdGhpcy5kaWFsb2dfO1xuICB9LFxuXG4gIC8qKlxuICAgKiBNYXliZSByZW1vdmUgdGhpcyBkaWFsb2cgZnJvbSB0aGUgbW9kYWwgdG9wIGxheWVyLiBUaGlzIGlzIGNhbGxlZCB3aGVuXG4gICAqIGEgbW9kYWwgZGlhbG9nIG1heSBubyBsb25nZXIgYmUgdGVuYWJsZSwgZS5nLiwgd2hlbiB0aGUgZGlhbG9nIGlzIG5vXG4gICAqIGxvbmdlciBvcGVuIG9yIGlzIG5vIGxvbmdlciBwYXJ0IG9mIHRoZSBET00uXG4gICAqL1xuICBtYXliZUhpZGVNb2RhbDogZnVuY3Rpb24oKSB7XG4gICAgaWYgKHRoaXMuZGlhbG9nXy5oYXNBdHRyaWJ1dGUoJ29wZW4nKSAmJiBpc0Nvbm5lY3RlZCh0aGlzLmRpYWxvZ18pKSB7IHJldHVybjsgfVxuICAgIHRoaXMuZG93bmdyYWRlTW9kYWwoKTtcbiAgfSxcblxuICAvKipcbiAgICogUmVtb3ZlIHRoaXMgZGlhbG9nIGZyb20gdGhlIG1vZGFsIHRvcCBsYXllciwgbGVhdmluZyBpdCBhcyBhIG5vbi1tb2RhbC5cbiAgICovXG4gIGRvd25ncmFkZU1vZGFsOiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMub3BlbkFzTW9kYWxfKSB7IHJldHVybjsgfVxuICAgIHRoaXMub3BlbkFzTW9kYWxfID0gZmFsc2U7XG4gICAgdGhpcy5kaWFsb2dfLnN0eWxlLnpJbmRleCA9ICcnO1xuXG4gICAgLy8gVGhpcyB3b24ndCBtYXRjaCB0aGUgbmF0aXZlIDxkaWFsb2c+IGV4YWN0bHkgYmVjYXVzZSBpZiB0aGUgdXNlciBzZXQgdG9wIG9uIGEgY2VudGVyZWRcbiAgICAvLyBwb2x5ZmlsbCBkaWFsb2csIHRoYXQgdG9wIGdldHMgdGhyb3duIGF3YXkgd2hlbiB0aGUgZGlhbG9nIGlzIGNsb3NlZC4gTm90IHN1cmUgaXQnc1xuICAgIC8vIHBvc3NpYmxlIHRvIHBvbHlmaWxsIHRoaXMgcGVyZmVjdGx5LlxuICAgIGlmICh0aGlzLnJlcGxhY2VkU3R5bGVUb3BfKSB7XG4gICAgICB0aGlzLmRpYWxvZ18uc3R5bGUudG9wID0gJyc7XG4gICAgICB0aGlzLnJlcGxhY2VkU3R5bGVUb3BfID0gZmFsc2U7XG4gICAgfVxuXG4gICAgLy8gQ2xlYXIgdGhlIGJhY2tkcm9wIGFuZCByZW1vdmUgZnJvbSB0aGUgbWFuYWdlci5cbiAgICB0aGlzLmJhY2tkcm9wXy5wYXJlbnROb2RlICYmIHRoaXMuYmFja2Ryb3BfLnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5iYWNrZHJvcF8pO1xuICAgIGRpYWxvZ1BvbHlmaWxsLmRtLnJlbW92ZURpYWxvZyh0aGlzKTtcbiAgfSxcblxuICAvKipcbiAgICogQHBhcmFtIHtib29sZWFufSB2YWx1ZSB3aGV0aGVyIHRvIG9wZW4gb3IgY2xvc2UgdGhpcyBkaWFsb2dcbiAgICovXG4gIHNldE9wZW46IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgaWYgKHZhbHVlKSB7XG4gICAgICB0aGlzLmRpYWxvZ18uaGFzQXR0cmlidXRlKCdvcGVuJykgfHwgdGhpcy5kaWFsb2dfLnNldEF0dHJpYnV0ZSgnb3BlbicsICcnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdGhpcy5kaWFsb2dfLnJlbW92ZUF0dHJpYnV0ZSgnb3BlbicpO1xuICAgICAgdGhpcy5tYXliZUhpZGVNb2RhbCgpOyAgLy8gbmIuIHJlZHVuZGFudCB3aXRoIE11dGF0aW9uT2JzZXJ2ZXJcbiAgICB9XG4gIH0sXG5cbiAgLyoqXG4gICAqIEhhbmRsZXMgbW91c2UgZXZlbnRzICgnbW91c2V1cCcsICdtb3VzZWRvd24nLCAnY2xpY2snKSBvbiB0aGUgZmFrZSAuYmFja2Ryb3AgZWxlbWVudCwgcmVkaXJlY3RpbmcgdGhlbSBhcyBpZlxuICAgKiB0aGV5IHdlcmUgb24gdGhlIGRpYWxvZyBpdHNlbGYuXG4gICAqXG4gICAqIEBwYXJhbSB7IUV2ZW50fSBlIHRvIHJlZGlyZWN0XG4gICAqL1xuICBiYWNrZHJvcE1vdXNlRXZlbnRfOiBmdW5jdGlvbihlKSB7XG4gICAgaWYgKCF0aGlzLmRpYWxvZ18uaGFzQXR0cmlidXRlKCd0YWJpbmRleCcpKSB7XG4gICAgICAvLyBDbGlja2luZyBvbiB0aGUgYmFja2Ryb3Agc2hvdWxkIG1vdmUgdGhlIGltcGxpY2l0IGN1cnNvciwgZXZlbiBpZiBkaWFsb2cgY2Fubm90IGJlXG4gICAgICAvLyBmb2N1c2VkLiBDcmVhdGUgYSBmYWtlIHRoaW5nIHRvIGZvY3VzIG9uLiBJZiB0aGUgYmFja2Ryb3Agd2FzIF9iZWZvcmVfIHRoZSBkaWFsb2csIHRoaXNcbiAgICAgIC8vIHdvdWxkIG5vdCBiZSBuZWVkZWQgLSBjbGlja3Mgd291bGQgbW92ZSB0aGUgaW1wbGljaXQgY3Vyc29yIHRoZXJlLlxuICAgICAgdmFyIGZha2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgICAgIHRoaXMuZGlhbG9nXy5pbnNlcnRCZWZvcmUoZmFrZSwgdGhpcy5kaWFsb2dfLmZpcnN0Q2hpbGQpO1xuICAgICAgZmFrZS50YWJJbmRleCA9IC0xO1xuICAgICAgZmFrZS5mb2N1cygpO1xuICAgICAgdGhpcy5kaWFsb2dfLnJlbW92ZUNoaWxkKGZha2UpO1xuICAgIH0gZWxzZSB7XG4gICAgICB0aGlzLmRpYWxvZ18uZm9jdXMoKTtcbiAgICB9XG5cbiAgICB2YXIgcmVkaXJlY3RlZEV2ZW50ID0gZG9jdW1lbnQuY3JlYXRlRXZlbnQoJ01vdXNlRXZlbnRzJyk7XG4gICAgcmVkaXJlY3RlZEV2ZW50LmluaXRNb3VzZUV2ZW50KGUudHlwZSwgZS5idWJibGVzLCBlLmNhbmNlbGFibGUsIHdpbmRvdyxcbiAgICAgICAgZS5kZXRhaWwsIGUuc2NyZWVuWCwgZS5zY3JlZW5ZLCBlLmNsaWVudFgsIGUuY2xpZW50WSwgZS5jdHJsS2V5LFxuICAgICAgICBlLmFsdEtleSwgZS5zaGlmdEtleSwgZS5tZXRhS2V5LCBlLmJ1dHRvbiwgZS5yZWxhdGVkVGFyZ2V0KTtcbiAgICB0aGlzLmRpYWxvZ18uZGlzcGF0Y2hFdmVudChyZWRpcmVjdGVkRXZlbnQpO1xuICAgIGUuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIEZvY3VzZXMgb24gdGhlIGZpcnN0IGZvY3VzYWJsZSBlbGVtZW50IHdpdGhpbiB0aGUgZGlhbG9nLiBUaGlzIHdpbGwgYWx3YXlzIGJsdXIgdGhlIGN1cnJlbnRcbiAgICogZm9jdXMsIGV2ZW4gaWYgbm90aGluZyB3aXRoaW4gdGhlIGRpYWxvZyBpcyBmb3VuZC5cbiAgICovXG4gIGZvY3VzXzogZnVuY3Rpb24oKSB7XG4gICAgLy8gRmluZCBlbGVtZW50IHdpdGggYGF1dG9mb2N1c2AgYXR0cmlidXRlLCBvciBmYWxsIGJhY2sgdG8gdGhlIGZpcnN0IGZvcm0vdGFiaW5kZXggY29udHJvbC5cbiAgICB2YXIgdGFyZ2V0ID0gdGhpcy5kaWFsb2dfLnF1ZXJ5U2VsZWN0b3IoJ1thdXRvZm9jdXNdOm5vdChbZGlzYWJsZWRdKScpO1xuICAgIGlmICghdGFyZ2V0ICYmIHRoaXMuZGlhbG9nXy50YWJJbmRleCA+PSAwKSB7XG4gICAgICB0YXJnZXQgPSB0aGlzLmRpYWxvZ187XG4gICAgfVxuICAgIGlmICghdGFyZ2V0KSB7XG4gICAgICB0YXJnZXQgPSBmaW5kRm9jdXNhYmxlRWxlbWVudFdpdGhpbih0aGlzLmRpYWxvZ18pO1xuICAgIH1cbiAgICBzYWZlQmx1cihkb2N1bWVudC5hY3RpdmVFbGVtZW50KTtcbiAgICB0YXJnZXQgJiYgdGFyZ2V0LmZvY3VzKCk7XG4gIH0sXG5cbiAgLyoqXG4gICAqIFNldHMgdGhlIHpJbmRleCBmb3IgdGhlIGJhY2tkcm9wIGFuZCBkaWFsb2cuXG4gICAqXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBkaWFsb2daXG4gICAqIEBwYXJhbSB7bnVtYmVyfSBiYWNrZHJvcFpcbiAgICovXG4gIHVwZGF0ZVpJbmRleDogZnVuY3Rpb24oZGlhbG9nWiwgYmFja2Ryb3BaKSB7XG4gICAgaWYgKGRpYWxvZ1ogPCBiYWNrZHJvcFopIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignZGlhbG9nWiBzaG91bGQgbmV2ZXIgYmUgPCBiYWNrZHJvcFonKTtcbiAgICB9XG4gICAgdGhpcy5kaWFsb2dfLnN0eWxlLnpJbmRleCA9IGRpYWxvZ1o7XG4gICAgdGhpcy5iYWNrZHJvcF8uc3R5bGUuekluZGV4ID0gYmFja2Ryb3BaO1xuICB9LFxuXG4gIC8qKlxuICAgKiBTaG93cyB0aGUgZGlhbG9nLiBJZiB0aGUgZGlhbG9nIGlzIGFscmVhZHkgb3BlbiwgdGhpcyBkb2VzIG5vdGhpbmcuXG4gICAqL1xuICBzaG93OiBmdW5jdGlvbigpIHtcbiAgICBpZiAoIXRoaXMuZGlhbG9nXy5vcGVuKSB7XG4gICAgICB0aGlzLnNldE9wZW4odHJ1ZSk7XG4gICAgICB0aGlzLmZvY3VzXygpO1xuICAgIH1cbiAgfSxcblxuICAvKipcbiAgICogU2hvdyB0aGlzIGRpYWxvZyBtb2RhbGx5LlxuICAgKi9cbiAgc2hvd01vZGFsOiBmdW5jdGlvbigpIHtcbiAgICBpZiAodGhpcy5kaWFsb2dfLmhhc0F0dHJpYnV0ZSgnb3BlbicpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBleGVjdXRlIFxcJ3Nob3dNb2RhbFxcJyBvbiBkaWFsb2c6IFRoZSBlbGVtZW50IGlzIGFscmVhZHkgb3BlbiwgYW5kIHRoZXJlZm9yZSBjYW5ub3QgYmUgb3BlbmVkIG1vZGFsbHkuJyk7XG4gICAgfVxuICAgIGlmICghaXNDb25uZWN0ZWQodGhpcy5kaWFsb2dfKSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gZXhlY3V0ZSBcXCdzaG93TW9kYWxcXCcgb24gZGlhbG9nOiBUaGUgZWxlbWVudCBpcyBub3QgaW4gYSBEb2N1bWVudC4nKTtcbiAgICB9XG4gICAgaWYgKCFkaWFsb2dQb2x5ZmlsbC5kbS5wdXNoRGlhbG9nKHRoaXMpKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0ZhaWxlZCB0byBleGVjdXRlIFxcJ3Nob3dNb2RhbFxcJyBvbiBkaWFsb2c6IFRoZXJlIGFyZSB0b28gbWFueSBvcGVuIG1vZGFsIGRpYWxvZ3MuJyk7XG4gICAgfVxuXG4gICAgaWYgKGNyZWF0ZXNTdGFja2luZ0NvbnRleHQodGhpcy5kaWFsb2dfLnBhcmVudEVsZW1lbnQpKSB7XG4gICAgICBjb25zb2xlLndhcm4oJ0EgZGlhbG9nIGlzIGJlaW5nIHNob3duIGluc2lkZSBhIHN0YWNraW5nIGNvbnRleHQuICcgK1xuICAgICAgICAgICdUaGlzIG1heSBjYXVzZSBpdCB0byBiZSB1bnVzYWJsZS4gRm9yIG1vcmUgaW5mb3JtYXRpb24sIHNlZSB0aGlzIGxpbms6ICcgK1xuICAgICAgICAgICdodHRwczovL2dpdGh1Yi5jb20vR29vZ2xlQ2hyb21lL2RpYWxvZy1wb2x5ZmlsbC8jc3RhY2tpbmctY29udGV4dCcpO1xuICAgIH1cblxuICAgIHRoaXMuc2V0T3Blbih0cnVlKTtcbiAgICB0aGlzLm9wZW5Bc01vZGFsXyA9IHRydWU7XG5cbiAgICAvLyBPcHRpb25hbGx5IGNlbnRlciB2ZXJ0aWNhbGx5LCByZWxhdGl2ZSB0byB0aGUgY3VycmVudCB2aWV3cG9ydC5cbiAgICBpZiAoZGlhbG9nUG9seWZpbGwubmVlZHNDZW50ZXJpbmcodGhpcy5kaWFsb2dfKSkge1xuICAgICAgZGlhbG9nUG9seWZpbGwucmVwb3NpdGlvbih0aGlzLmRpYWxvZ18pO1xuICAgICAgdGhpcy5yZXBsYWNlZFN0eWxlVG9wXyA9IHRydWU7XG4gICAgfSBlbHNlIHtcbiAgICAgIHRoaXMucmVwbGFjZWRTdHlsZVRvcF8gPSBmYWxzZTtcbiAgICB9XG5cbiAgICAvLyBJbnNlcnQgYmFja2Ryb3AuXG4gICAgdGhpcy5kaWFsb2dfLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKHRoaXMuYmFja2Ryb3BfLCB0aGlzLmRpYWxvZ18ubmV4dFNpYmxpbmcpO1xuXG4gICAgLy8gRm9jdXMgb24gd2hhdGV2ZXIgaW5zaWRlIHRoZSBkaWFsb2cuXG4gICAgdGhpcy5mb2N1c18oKTtcbiAgfSxcblxuICAvKipcbiAgICogQ2xvc2VzIHRoaXMgSFRNTERpYWxvZ0VsZW1lbnQuIFRoaXMgaXMgb3B0aW9uYWwgdnMgY2xlYXJpbmcgdGhlIG9wZW5cbiAgICogYXR0cmlidXRlLCBob3dldmVyIHRoaXMgZmlyZXMgYSAnY2xvc2UnIGV2ZW50LlxuICAgKlxuICAgKiBAcGFyYW0ge3N0cmluZz19IG9wdF9yZXR1cm5WYWx1ZSB0byB1c2UgYXMgdGhlIHJldHVyblZhbHVlXG4gICAqL1xuICBjbG9zZTogZnVuY3Rpb24ob3B0X3JldHVyblZhbHVlKSB7XG4gICAgaWYgKCF0aGlzLmRpYWxvZ18uaGFzQXR0cmlidXRlKCdvcGVuJykpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRmFpbGVkIHRvIGV4ZWN1dGUgXFwnY2xvc2VcXCcgb24gZGlhbG9nOiBUaGUgZWxlbWVudCBkb2VzIG5vdCBoYXZlIGFuIFxcJ29wZW5cXCcgYXR0cmlidXRlLCBhbmQgdGhlcmVmb3JlIGNhbm5vdCBiZSBjbG9zZWQuJyk7XG4gICAgfVxuICAgIHRoaXMuc2V0T3BlbihmYWxzZSk7XG5cbiAgICAvLyBMZWF2ZSByZXR1cm5WYWx1ZSB1bnRvdWNoZWQgaW4gY2FzZSBpdCB3YXMgc2V0IGRpcmVjdGx5IG9uIHRoZSBlbGVtZW50XG4gICAgaWYgKG9wdF9yZXR1cm5WYWx1ZSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB0aGlzLmRpYWxvZ18ucmV0dXJuVmFsdWUgPSBvcHRfcmV0dXJuVmFsdWU7XG4gICAgfVxuXG4gICAgLy8gVHJpZ2dlcmluZyBcImNsb3NlXCIgZXZlbnQgZm9yIGFueSBhdHRhY2hlZCBsaXN0ZW5lcnMgb24gdGhlIDxkaWFsb2c+LlxuICAgIHZhciBjbG9zZUV2ZW50ID0gbmV3IHN1cHBvcnRDdXN0b21FdmVudCgnY2xvc2UnLCB7XG4gICAgICBidWJibGVzOiBmYWxzZSxcbiAgICAgIGNhbmNlbGFibGU6IGZhbHNlXG4gICAgfSk7XG4gICAgc2FmZURpc3BhdGNoRXZlbnQodGhpcy5kaWFsb2dfLCBjbG9zZUV2ZW50KTtcbiAgfVxuXG59KTtcblxudmFyIGRpYWxvZ1BvbHlmaWxsID0ge307XG5cbmRpYWxvZ1BvbHlmaWxsLnJlcG9zaXRpb24gPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIHZhciBzY3JvbGxUb3AgPSBkb2N1bWVudC5ib2R5LnNjcm9sbFRvcCB8fCBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQuc2Nyb2xsVG9wO1xuICB2YXIgdG9wVmFsdWUgPSBzY3JvbGxUb3AgKyAod2luZG93LmlubmVySGVpZ2h0IC0gZWxlbWVudC5vZmZzZXRIZWlnaHQpIC8gMjtcbiAgZWxlbWVudC5zdHlsZS50b3AgPSBNYXRoLm1heChzY3JvbGxUb3AsIHRvcFZhbHVlKSArICdweCc7XG59O1xuXG5kaWFsb2dQb2x5ZmlsbC5pc0lubGluZVBvc2l0aW9uU2V0QnlTdHlsZXNoZWV0ID0gZnVuY3Rpb24oZWxlbWVudCkge1xuICBmb3IgKHZhciBpID0gMDsgaSA8IGRvY3VtZW50LnN0eWxlU2hlZXRzLmxlbmd0aDsgKytpKSB7XG4gICAgdmFyIHN0eWxlU2hlZXQgPSBkb2N1bWVudC5zdHlsZVNoZWV0c1tpXTtcbiAgICB2YXIgY3NzUnVsZXMgPSBudWxsO1xuICAgIC8vIFNvbWUgYnJvd3NlcnMgdGhyb3cgb24gY3NzUnVsZXMuXG4gICAgdHJ5IHtcbiAgICAgIGNzc1J1bGVzID0gc3R5bGVTaGVldC5jc3NSdWxlcztcbiAgICB9IGNhdGNoIChlKSB7fVxuICAgIGlmICghY3NzUnVsZXMpIHsgY29udGludWU7IH1cbiAgICBmb3IgKHZhciBqID0gMDsgaiA8IGNzc1J1bGVzLmxlbmd0aDsgKytqKSB7XG4gICAgICB2YXIgcnVsZSA9IGNzc1J1bGVzW2pdO1xuICAgICAgdmFyIHNlbGVjdGVkTm9kZXMgPSBudWxsO1xuICAgICAgLy8gSWdub3JlIGVycm9ycyBvbiBpbnZhbGlkIHNlbGVjdG9yIHRleHRzLlxuICAgICAgdHJ5IHtcbiAgICAgICAgc2VsZWN0ZWROb2RlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwocnVsZS5zZWxlY3RvclRleHQpO1xuICAgICAgfSBjYXRjaChlKSB7fVxuICAgICAgaWYgKCFzZWxlY3RlZE5vZGVzIHx8ICFpbk5vZGVMaXN0KHNlbGVjdGVkTm9kZXMsIGVsZW1lbnQpKSB7XG4gICAgICAgIGNvbnRpbnVlO1xuICAgICAgfVxuICAgICAgdmFyIGNzc1RvcCA9IHJ1bGUuc3R5bGUuZ2V0UHJvcGVydHlWYWx1ZSgndG9wJyk7XG4gICAgICB2YXIgY3NzQm90dG9tID0gcnVsZS5zdHlsZS5nZXRQcm9wZXJ0eVZhbHVlKCdib3R0b20nKTtcbiAgICAgIGlmICgoY3NzVG9wICYmIGNzc1RvcCAhPT0gJ2F1dG8nKSB8fCAoY3NzQm90dG9tICYmIGNzc0JvdHRvbSAhPT0gJ2F1dG8nKSkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZGlhbG9nUG9seWZpbGwubmVlZHNDZW50ZXJpbmcgPSBmdW5jdGlvbihkaWFsb2cpIHtcbiAgdmFyIGNvbXB1dGVkU3R5bGUgPSB3aW5kb3cuZ2V0Q29tcHV0ZWRTdHlsZShkaWFsb2cpO1xuICBpZiAoY29tcHV0ZWRTdHlsZS5wb3NpdGlvbiAhPT0gJ2Fic29sdXRlJykge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuXG4gIC8vIFdlIG11c3QgZGV0ZXJtaW5lIHdoZXRoZXIgdGhlIHRvcC9ib3R0b20gc3BlY2lmaWVkIHZhbHVlIGlzIG5vbi1hdXRvLiAgSW5cbiAgLy8gV2ViS2l0L0JsaW5rLCBjaGVja2luZyBjb21wdXRlZFN0eWxlLnRvcCA9PSAnYXV0bycgaXMgc3VmZmljaWVudCwgYnV0XG4gIC8vIEZpcmVmb3ggcmV0dXJucyB0aGUgdXNlZCB2YWx1ZS4gU28gd2UgZG8gdGhpcyBjcmF6eSB0aGluZyBpbnN0ZWFkOiBjaGVja1xuICAvLyB0aGUgaW5saW5lIHN0eWxlIGFuZCB0aGVuIGdvIHRocm91Z2ggQ1NTIHJ1bGVzLlxuICBpZiAoKGRpYWxvZy5zdHlsZS50b3AgIT09ICdhdXRvJyAmJiBkaWFsb2cuc3R5bGUudG9wICE9PSAnJykgfHxcbiAgICAgIChkaWFsb2cuc3R5bGUuYm90dG9tICE9PSAnYXV0bycgJiYgZGlhbG9nLnN0eWxlLmJvdHRvbSAhPT0gJycpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHJldHVybiAhZGlhbG9nUG9seWZpbGwuaXNJbmxpbmVQb3NpdGlvblNldEJ5U3R5bGVzaGVldChkaWFsb2cpO1xufTtcblxuLyoqXG4gKiBAcGFyYW0geyFFbGVtZW50fSBlbGVtZW50IHRvIGZvcmNlIHVwZ3JhZGVcbiAqL1xuZGlhbG9nUG9seWZpbGwuZm9yY2VSZWdpc3RlckRpYWxvZyA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgaWYgKHdpbmRvdy5IVE1MRGlhbG9nRWxlbWVudCB8fCBlbGVtZW50LnNob3dNb2RhbCkge1xuICAgIGNvbnNvbGUud2FybignVGhpcyBicm93c2VyIGFscmVhZHkgc3VwcG9ydHMgPGRpYWxvZz4sIHRoZSBwb2x5ZmlsbCAnICtcbiAgICAgICAgJ21heSBub3Qgd29yayBjb3JyZWN0bHknLCBlbGVtZW50KTtcbiAgfVxuICBpZiAoZWxlbWVudC5sb2NhbE5hbWUgIT09ICdkaWFsb2cnKSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKCdGYWlsZWQgdG8gcmVnaXN0ZXIgZGlhbG9nOiBUaGUgZWxlbWVudCBpcyBub3QgYSBkaWFsb2cuJyk7XG4gIH1cbiAgbmV3IGRpYWxvZ1BvbHlmaWxsSW5mbygvKiogQHR5cGUgeyFIVE1MRGlhbG9nRWxlbWVudH0gKi8gKGVsZW1lbnQpKTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshRWxlbWVudH0gZWxlbWVudCB0byB1cGdyYWRlLCBpZiBuZWNlc3NhcnlcbiAqL1xuZGlhbG9nUG9seWZpbGwucmVnaXN0ZXJEaWFsb2cgPSBmdW5jdGlvbihlbGVtZW50KSB7XG4gIGlmICghZWxlbWVudC5zaG93TW9kYWwpIHtcbiAgICBkaWFsb2dQb2x5ZmlsbC5mb3JjZVJlZ2lzdGVyRGlhbG9nKGVsZW1lbnQpO1xuICB9XG59O1xuXG4vKipcbiAqIEBjb25zdHJ1Y3RvclxuICovXG5kaWFsb2dQb2x5ZmlsbC5EaWFsb2dNYW5hZ2VyID0gZnVuY3Rpb24oKSB7XG4gIC8qKiBAdHlwZSB7IUFycmF5PCFkaWFsb2dQb2x5ZmlsbEluZm8+fSAqL1xuICB0aGlzLnBlbmRpbmdEaWFsb2dTdGFjayA9IFtdO1xuXG4gIHZhciBjaGVja0RPTSA9IHRoaXMuY2hlY2tET01fLmJpbmQodGhpcyk7XG5cbiAgLy8gVGhlIG92ZXJsYXkgaXMgdXNlZCB0byBzaW11bGF0ZSBob3cgYSBtb2RhbCBkaWFsb2cgYmxvY2tzIHRoZSBkb2N1bWVudC5cbiAgLy8gVGhlIGJsb2NraW5nIGRpYWxvZyBpcyBwb3NpdGlvbmVkIG9uIHRvcCBvZiB0aGUgb3ZlcmxheSwgYW5kIHRoZSByZXN0IG9mXG4gIC8vIHRoZSBkaWFsb2dzIG9uIHRoZSBwZW5kaW5nIGRpYWxvZyBzdGFjayBhcmUgcG9zaXRpb25lZCBiZWxvdyBpdC4gSW4gdGhlXG4gIC8vIGFjdHVhbCBpbXBsZW1lbnRhdGlvbiwgdGhlIG1vZGFsIGRpYWxvZyBzdGFja2luZyBpcyBjb250cm9sbGVkIGJ5IHRoZVxuICAvLyB0b3AgbGF5ZXIsIHdoZXJlIHotaW5kZXggaGFzIG5vIGVmZmVjdC5cbiAgdGhpcy5vdmVybGF5ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIHRoaXMub3ZlcmxheS5jbGFzc05hbWUgPSAnX2RpYWxvZ19vdmVybGF5JztcbiAgdGhpcy5vdmVybGF5LmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgZnVuY3Rpb24oZSkge1xuICAgIHRoaXMuZm9yd2FyZFRhYl8gPSB1bmRlZmluZWQ7XG4gICAgZS5zdG9wUHJvcGFnYXRpb24oKTtcbiAgICBjaGVja0RPTShbXSk7ICAvLyBzYW5pdHktY2hlY2sgRE9NXG4gIH0uYmluZCh0aGlzKSk7XG5cbiAgdGhpcy5oYW5kbGVLZXlfID0gdGhpcy5oYW5kbGVLZXlfLmJpbmQodGhpcyk7XG4gIHRoaXMuaGFuZGxlRm9jdXNfID0gdGhpcy5oYW5kbGVGb2N1c18uYmluZCh0aGlzKTtcblxuICB0aGlzLnpJbmRleExvd18gPSAxMDAwMDA7XG4gIHRoaXMuekluZGV4SGlnaF8gPSAxMDAwMDAgKyAxNTA7XG5cbiAgdGhpcy5mb3J3YXJkVGFiXyA9IHVuZGVmaW5lZDtcblxuICBpZiAoJ011dGF0aW9uT2JzZXJ2ZXInIGluIHdpbmRvdykge1xuICAgIHRoaXMubW9fID0gbmV3IE11dGF0aW9uT2JzZXJ2ZXIoZnVuY3Rpb24ocmVjb3Jkcykge1xuICAgICAgdmFyIHJlbW92ZWQgPSBbXTtcbiAgICAgIHJlY29yZHMuZm9yRWFjaChmdW5jdGlvbihyZWMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIGM7IGMgPSByZWMucmVtb3ZlZE5vZGVzW2ldOyArK2kpIHtcbiAgICAgICAgICBpZiAoIShjIGluc3RhbmNlb2YgRWxlbWVudCkpIHtcbiAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgIH0gZWxzZSBpZiAoYy5sb2NhbE5hbWUgPT09ICdkaWFsb2cnKSB7XG4gICAgICAgICAgICByZW1vdmVkLnB1c2goYyk7XG4gICAgICAgICAgfVxuICAgICAgICAgIHJlbW92ZWQgPSByZW1vdmVkLmNvbmNhdChjLnF1ZXJ5U2VsZWN0b3JBbGwoJ2RpYWxvZycpKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gICAgICByZW1vdmVkLmxlbmd0aCAmJiBjaGVja0RPTShyZW1vdmVkKTtcbiAgICB9KTtcbiAgfVxufTtcblxuLyoqXG4gKiBDYWxsZWQgb24gdGhlIGZpcnN0IG1vZGFsIGRpYWxvZyBiZWluZyBzaG93bi4gQWRkcyB0aGUgb3ZlcmxheSBhbmQgcmVsYXRlZFxuICogaGFuZGxlcnMuXG4gKi9cbmRpYWxvZ1BvbHlmaWxsLkRpYWxvZ01hbmFnZXIucHJvdG90eXBlLmJsb2NrRG9jdW1lbnQgPSBmdW5jdGlvbigpIHtcbiAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2ZvY3VzJywgdGhpcy5oYW5kbGVGb2N1c18sIHRydWUpO1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdrZXlkb3duJywgdGhpcy5oYW5kbGVLZXlfKTtcbiAgdGhpcy5tb18gJiYgdGhpcy5tb18ub2JzZXJ2ZShkb2N1bWVudCwge2NoaWxkTGlzdDogdHJ1ZSwgc3VidHJlZTogdHJ1ZX0pO1xufTtcblxuLyoqXG4gKiBDYWxsZWQgb24gdGhlIGZpcnN0IG1vZGFsIGRpYWxvZyBiZWluZyByZW1vdmVkLCBpLmUuLCB3aGVuIG5vIG1vcmUgbW9kYWxcbiAqIGRpYWxvZ3MgYXJlIHZpc2libGUuXG4gKi9cbmRpYWxvZ1BvbHlmaWxsLkRpYWxvZ01hbmFnZXIucHJvdG90eXBlLnVuYmxvY2tEb2N1bWVudCA9IGZ1bmN0aW9uKCkge1xuICBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQucmVtb3ZlRXZlbnRMaXN0ZW5lcignZm9jdXMnLCB0aGlzLmhhbmRsZUZvY3VzXywgdHJ1ZSk7XG4gIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoJ2tleWRvd24nLCB0aGlzLmhhbmRsZUtleV8pO1xuICB0aGlzLm1vXyAmJiB0aGlzLm1vXy5kaXNjb25uZWN0KCk7XG59O1xuXG4vKipcbiAqIFVwZGF0ZXMgdGhlIHN0YWNraW5nIG9mIGFsbCBrbm93biBkaWFsb2dzLlxuICovXG5kaWFsb2dQb2x5ZmlsbC5EaWFsb2dNYW5hZ2VyLnByb3RvdHlwZS51cGRhdGVTdGFja2luZyA9IGZ1bmN0aW9uKCkge1xuICB2YXIgekluZGV4ID0gdGhpcy56SW5kZXhIaWdoXztcblxuICBmb3IgKHZhciBpID0gMCwgZHBpOyBkcGkgPSB0aGlzLnBlbmRpbmdEaWFsb2dTdGFja1tpXTsgKytpKSB7XG4gICAgZHBpLnVwZGF0ZVpJbmRleCgtLXpJbmRleCwgLS16SW5kZXgpO1xuICAgIGlmIChpID09PSAwKSB7XG4gICAgICB0aGlzLm92ZXJsYXkuc3R5bGUuekluZGV4ID0gLS16SW5kZXg7XG4gICAgfVxuICB9XG5cbiAgLy8gTWFrZSB0aGUgb3ZlcmxheSBhIHNpYmxpbmcgb2YgdGhlIGRpYWxvZyBpdHNlbGYuXG4gIHZhciBsYXN0ID0gdGhpcy5wZW5kaW5nRGlhbG9nU3RhY2tbMF07XG4gIGlmIChsYXN0KSB7XG4gICAgdmFyIHAgPSBsYXN0LmRpYWxvZy5wYXJlbnROb2RlIHx8IGRvY3VtZW50LmJvZHk7XG4gICAgcC5hcHBlbmRDaGlsZCh0aGlzLm92ZXJsYXkpO1xuICB9IGVsc2UgaWYgKHRoaXMub3ZlcmxheS5wYXJlbnROb2RlKSB7XG4gICAgdGhpcy5vdmVybGF5LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQodGhpcy5vdmVybGF5KTtcbiAgfVxufTtcblxuLyoqXG4gKiBAcGFyYW0ge0VsZW1lbnR9IGNhbmRpZGF0ZSB0byBjaGVjayBpZiBjb250YWluZWQgb3IgaXMgdGhlIHRvcC1tb3N0IG1vZGFsIGRpYWxvZ1xuICogQHJldHVybiB7Ym9vbGVhbn0gd2hldGhlciBjYW5kaWRhdGUgaXMgY29udGFpbmVkIGluIHRvcCBkaWFsb2dcbiAqL1xuZGlhbG9nUG9seWZpbGwuRGlhbG9nTWFuYWdlci5wcm90b3R5cGUuY29udGFpbmVkQnlUb3BEaWFsb2dfID0gZnVuY3Rpb24oY2FuZGlkYXRlKSB7XG4gIHdoaWxlIChjYW5kaWRhdGUgPSBmaW5kTmVhcmVzdERpYWxvZyhjYW5kaWRhdGUpKSB7XG4gICAgZm9yICh2YXIgaSA9IDAsIGRwaTsgZHBpID0gdGhpcy5wZW5kaW5nRGlhbG9nU3RhY2tbaV07ICsraSkge1xuICAgICAgaWYgKGRwaS5kaWFsb2cgPT09IGNhbmRpZGF0ZSkge1xuICAgICAgICByZXR1cm4gaSA9PT0gMDsgIC8vIG9ubHkgdmFsaWQgaWYgdG9wLW1vc3RcbiAgICAgIH1cbiAgICB9XG4gICAgY2FuZGlkYXRlID0gY2FuZGlkYXRlLnBhcmVudEVsZW1lbnQ7XG4gIH1cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZGlhbG9nUG9seWZpbGwuRGlhbG9nTWFuYWdlci5wcm90b3R5cGUuaGFuZGxlRm9jdXNfID0gZnVuY3Rpb24oZXZlbnQpIHtcbiAgdmFyIHRhcmdldCA9IGV2ZW50LmNvbXBvc2VkUGF0aCA/IGV2ZW50LmNvbXBvc2VkUGF0aCgpWzBdIDogZXZlbnQudGFyZ2V0O1xuXG4gIGlmICh0aGlzLmNvbnRhaW5lZEJ5VG9wRGlhbG9nXyh0YXJnZXQpKSB7IHJldHVybjsgfVxuXG4gIGlmIChkb2N1bWVudC5hY3RpdmVFbGVtZW50ID09PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHsgcmV0dXJuOyB9XG5cbiAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gIHNhZmVCbHVyKC8qKiBAdHlwZSB7RWxlbWVudH0gKi8gKHRhcmdldCkpO1xuXG4gIGlmICh0aGlzLmZvcndhcmRUYWJfID09PSB1bmRlZmluZWQpIHsgcmV0dXJuOyB9ICAvLyBtb3ZlIGZvY3VzIG9ubHkgZnJvbSBhIHRhYiBrZXlcblxuICB2YXIgZHBpID0gdGhpcy5wZW5kaW5nRGlhbG9nU3RhY2tbMF07XG4gIHZhciBkaWFsb2cgPSBkcGkuZGlhbG9nO1xuICB2YXIgcG9zaXRpb24gPSBkaWFsb2cuY29tcGFyZURvY3VtZW50UG9zaXRpb24odGFyZ2V0KTtcbiAgaWYgKHBvc2l0aW9uICYgTm9kZS5ET0NVTUVOVF9QT1NJVElPTl9QUkVDRURJTkcpIHtcbiAgICBpZiAodGhpcy5mb3J3YXJkVGFiXykge1xuICAgICAgLy8gZm9yd2FyZFxuICAgICAgZHBpLmZvY3VzXygpO1xuICAgIH0gZWxzZSBpZiAodGFyZ2V0ICE9PSBkb2N1bWVudC5kb2N1bWVudEVsZW1lbnQpIHtcbiAgICAgIC8vIGJhY2t3YXJkcyBpZiB3ZSdyZSBub3QgYWxyZWFkeSBmb2N1c2VkIG9uIDxodG1sPlxuICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LmZvY3VzKCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIGZhbHNlO1xufTtcblxuZGlhbG9nUG9seWZpbGwuRGlhbG9nTWFuYWdlci5wcm90b3R5cGUuaGFuZGxlS2V5XyA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gIHRoaXMuZm9yd2FyZFRhYl8gPSB1bmRlZmluZWQ7XG4gIGlmIChldmVudC5rZXlDb2RlID09PSAyNykge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgZXZlbnQuc3RvcFByb3BhZ2F0aW9uKCk7XG4gICAgdmFyIGNhbmNlbEV2ZW50ID0gbmV3IHN1cHBvcnRDdXN0b21FdmVudCgnY2FuY2VsJywge1xuICAgICAgYnViYmxlczogZmFsc2UsXG4gICAgICBjYW5jZWxhYmxlOiB0cnVlXG4gICAgfSk7XG4gICAgdmFyIGRwaSA9IHRoaXMucGVuZGluZ0RpYWxvZ1N0YWNrWzBdO1xuICAgIGlmIChkcGkgJiYgc2FmZURpc3BhdGNoRXZlbnQoZHBpLmRpYWxvZywgY2FuY2VsRXZlbnQpKSB7XG4gICAgICBkcGkuZGlhbG9nLmNsb3NlKCk7XG4gICAgfVxuICB9IGVsc2UgaWYgKGV2ZW50LmtleUNvZGUgPT09IDkpIHtcbiAgICB0aGlzLmZvcndhcmRUYWJfID0gIWV2ZW50LnNoaWZ0S2V5O1xuICB9XG59O1xuXG4vKipcbiAqIEZpbmRzIGFuZCBkb3duZ3JhZGVzIGFueSBrbm93biBtb2RhbCBkaWFsb2dzIHRoYXQgYXJlIG5vIGxvbmdlciBkaXNwbGF5ZWQuIERpYWxvZ3MgdGhhdCBhcmVcbiAqIHJlbW92ZWQgYW5kIGltbWVkaWF0ZWx5IHJlYWRkZWQgZG9uJ3Qgc3RheSBtb2RhbCwgdGhleSBiZWNvbWUgbm9ybWFsLlxuICpcbiAqIEBwYXJhbSB7IUFycmF5PCFIVE1MRGlhbG9nRWxlbWVudD59IHJlbW92ZWQgdGhhdCBoYXZlIGRlZmluaXRlbHkgYmVlbiByZW1vdmVkXG4gKi9cbmRpYWxvZ1BvbHlmaWxsLkRpYWxvZ01hbmFnZXIucHJvdG90eXBlLmNoZWNrRE9NXyA9IGZ1bmN0aW9uKHJlbW92ZWQpIHtcbiAgLy8gVGhpcyBvcGVyYXRlcyBvbiBhIGNsb25lIGJlY2F1c2UgaXQgbWF5IGNhdXNlIGl0IHRvIGNoYW5nZS4gRWFjaCBjaGFuZ2UgYWxzbyBjYWxsc1xuICAvLyB1cGRhdGVTdGFja2luZywgd2hpY2ggb25seSBhY3R1YWxseSBuZWVkcyB0byBoYXBwZW4gb25jZS4gQnV0IHdobyByZW1vdmVzIG1hbnkgbW9kYWwgZGlhbG9nc1xuICAvLyBhdCBhIHRpbWU/IVxuICB2YXIgY2xvbmUgPSB0aGlzLnBlbmRpbmdEaWFsb2dTdGFjay5zbGljZSgpO1xuICBjbG9uZS5mb3JFYWNoKGZ1bmN0aW9uKGRwaSkge1xuICAgIGlmIChyZW1vdmVkLmluZGV4T2YoZHBpLmRpYWxvZykgIT09IC0xKSB7XG4gICAgICBkcGkuZG93bmdyYWRlTW9kYWwoKTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHBpLm1heWJlSGlkZU1vZGFsKCk7XG4gICAgfVxuICB9KTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshZGlhbG9nUG9seWZpbGxJbmZvfSBkcGlcbiAqIEByZXR1cm4ge2Jvb2xlYW59IHdoZXRoZXIgdGhlIGRpYWxvZyB3YXMgYWxsb3dlZFxuICovXG5kaWFsb2dQb2x5ZmlsbC5EaWFsb2dNYW5hZ2VyLnByb3RvdHlwZS5wdXNoRGlhbG9nID0gZnVuY3Rpb24oZHBpKSB7XG4gIHZhciBhbGxvd2VkID0gKHRoaXMuekluZGV4SGlnaF8gLSB0aGlzLnpJbmRleExvd18pIC8gMiAtIDE7XG4gIGlmICh0aGlzLnBlbmRpbmdEaWFsb2dTdGFjay5sZW5ndGggPj0gYWxsb3dlZCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICBpZiAodGhpcy5wZW5kaW5nRGlhbG9nU3RhY2sudW5zaGlmdChkcGkpID09PSAxKSB7XG4gICAgdGhpcy5ibG9ja0RvY3VtZW50KCk7XG4gIH1cbiAgdGhpcy51cGRhdGVTdGFja2luZygpO1xuICByZXR1cm4gdHJ1ZTtcbn07XG5cbi8qKlxuICogQHBhcmFtIHshZGlhbG9nUG9seWZpbGxJbmZvfSBkcGlcbiAqL1xuZGlhbG9nUG9seWZpbGwuRGlhbG9nTWFuYWdlci5wcm90b3R5cGUucmVtb3ZlRGlhbG9nID0gZnVuY3Rpb24oZHBpKSB7XG4gIHZhciBpbmRleCA9IHRoaXMucGVuZGluZ0RpYWxvZ1N0YWNrLmluZGV4T2YoZHBpKTtcbiAgaWYgKGluZGV4ID09PSAtMSkgeyByZXR1cm47IH1cblxuICB0aGlzLnBlbmRpbmdEaWFsb2dTdGFjay5zcGxpY2UoaW5kZXgsIDEpO1xuICBpZiAodGhpcy5wZW5kaW5nRGlhbG9nU3RhY2subGVuZ3RoID09PSAwKSB7XG4gICAgdGhpcy51bmJsb2NrRG9jdW1lbnQoKTtcbiAgfVxuICB0aGlzLnVwZGF0ZVN0YWNraW5nKCk7XG59O1xuXG5kaWFsb2dQb2x5ZmlsbC5kbSA9IG5ldyBkaWFsb2dQb2x5ZmlsbC5EaWFsb2dNYW5hZ2VyKCk7XG5kaWFsb2dQb2x5ZmlsbC5mb3JtU3VibWl0dGVyID0gbnVsbDtcbmRpYWxvZ1BvbHlmaWxsLmltYWdlbWFwVXNlVmFsdWUgPSBudWxsO1xuXG4vKipcbiAqIEluc3RhbGxzIGdsb2JhbCBoYW5kbGVycywgc3VjaCBhcyBjbGljayBsaXN0ZXJzIGFuZCBuYXRpdmUgbWV0aG9kIG92ZXJyaWRlcy4gVGhlc2UgYXJlIG5lZWRlZFxuICogZXZlbiBpZiBhIG5vIGRpYWxvZyBpcyByZWdpc3RlcmVkLCBhcyB0aGV5IGRlYWwgd2l0aCA8Zm9ybSBtZXRob2Q9XCJkaWFsb2dcIj4uXG4gKi9cbmlmICh3aW5kb3cuSFRNTERpYWxvZ0VsZW1lbnQgPT09IHVuZGVmaW5lZCkge1xuXG4gIC8qKlxuICAgKiBJZiBIVE1MRm9ybUVsZW1lbnQgdHJhbnNsYXRlcyBtZXRob2Q9XCJESUFMT0dcIiBpbnRvICdnZXQnLCB0aGVuIHJlcGxhY2UgdGhlIGRlc2NyaXB0b3Igd2l0aFxuICAgKiBvbmUgdGhhdCByZXR1cm5zIHRoZSBjb3JyZWN0IHZhbHVlLlxuICAgKi9cbiAgdmFyIHRlc3RGb3JtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZm9ybScpO1xuICB0ZXN0Rm9ybS5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsICdkaWFsb2cnKTtcbiAgaWYgKHRlc3RGb3JtLm1ldGhvZCAhPT0gJ2RpYWxvZycpIHtcbiAgICB2YXIgbWV0aG9kRGVzY3JpcHRvciA9IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IoSFRNTEZvcm1FbGVtZW50LnByb3RvdHlwZSwgJ21ldGhvZCcpO1xuICAgIGlmIChtZXRob2REZXNjcmlwdG9yKSB7XG4gICAgICAvLyBuYi4gU29tZSBvbGRlciBpT1MgYW5kIG9sZGVyIFBoYW50b21KUyBmYWlsIHRvIHJldHVybiB0aGUgZGVzY3JpcHRvci4gRG9uJ3QgZG8gYW55dGhpbmdcbiAgICAgIC8vIGFuZCBkb24ndCBib3RoZXIgdG8gdXBkYXRlIHRoZSBlbGVtZW50LlxuICAgICAgdmFyIHJlYWxHZXQgPSBtZXRob2REZXNjcmlwdG9yLmdldDtcbiAgICAgIG1ldGhvZERlc2NyaXB0b3IuZ2V0ID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChpc0Zvcm1NZXRob2REaWFsb2codGhpcykpIHtcbiAgICAgICAgICByZXR1cm4gJ2RpYWxvZyc7XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIHJlYWxHZXQuY2FsbCh0aGlzKTtcbiAgICAgIH07XG4gICAgICB2YXIgcmVhbFNldCA9IG1ldGhvZERlc2NyaXB0b3Iuc2V0O1xuICAgICAgLyoqIEB0aGlzIHtIVE1MRWxlbWVudH0gKi9cbiAgICAgIG1ldGhvZERlc2NyaXB0b3Iuc2V0ID0gZnVuY3Rpb24odikge1xuICAgICAgICBpZiAodHlwZW9mIHYgPT09ICdzdHJpbmcnICYmIHYudG9Mb3dlckNhc2UoKSA9PT0gJ2RpYWxvZycpIHtcbiAgICAgICAgICByZXR1cm4gdGhpcy5zZXRBdHRyaWJ1dGUoJ21ldGhvZCcsIHYpO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiByZWFsU2V0LmNhbGwodGhpcywgdik7XG4gICAgICB9O1xuICAgICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUsICdtZXRob2QnLCBtZXRob2REZXNjcmlwdG9yKTtcbiAgICB9XG4gIH1cblxuICAvKipcbiAgICogR2xvYmFsICdjbGljaycgaGFuZGxlciwgdG8gY2FwdHVyZSB0aGUgPGlucHV0IHR5cGU9XCJzdWJtaXRcIj4gb3IgPGJ1dHRvbj4gZWxlbWVudCB3aGljaCBoYXNcbiAgICogc3VibWl0dGVkIGEgPGZvcm0gbWV0aG9kPVwiZGlhbG9nXCI+LiBOZWVkZWQgYXMgU2FmYXJpIGFuZCBvdGhlcnMgZG9uJ3QgcmVwb3J0IHRoaXMgaW5zaWRlXG4gICAqIGRvY3VtZW50LmFjdGl2ZUVsZW1lbnQuXG4gICAqL1xuICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKCdjbGljaycsIGZ1bmN0aW9uKGV2KSB7XG4gICAgZGlhbG9nUG9seWZpbGwuZm9ybVN1Ym1pdHRlciA9IG51bGw7XG4gICAgZGlhbG9nUG9seWZpbGwuaW1hZ2VtYXBVc2VWYWx1ZSA9IG51bGw7XG4gICAgaWYgKGV2LmRlZmF1bHRQcmV2ZW50ZWQpIHsgcmV0dXJuOyB9ICAvLyBlLmcuIGEgc3VibWl0IHdoaWNoIHByZXZlbnRzIGRlZmF1bHQgc3VibWlzc2lvblxuXG4gICAgdmFyIHRhcmdldCA9IC8qKiBAdHlwZSB7RWxlbWVudH0gKi8gKGV2LnRhcmdldCk7XG4gICAgaWYgKCdjb21wb3NlZFBhdGgnIGluIGV2KSB7XG4gICAgICB2YXIgcGF0aCA9IGV2LmNvbXBvc2VkUGF0aCgpO1xuICAgICAgdGFyZ2V0ID0gcGF0aC5zaGlmdCgpIHx8IHRhcmdldDtcbiAgICB9XG4gICAgaWYgKCF0YXJnZXQgfHwgIWlzRm9ybU1ldGhvZERpYWxvZyh0YXJnZXQuZm9ybSkpIHsgcmV0dXJuOyB9XG5cbiAgICB2YXIgdmFsaWQgPSAodGFyZ2V0LnR5cGUgPT09ICdzdWJtaXQnICYmIFsnYnV0dG9uJywgJ2lucHV0J10uaW5kZXhPZih0YXJnZXQubG9jYWxOYW1lKSA+IC0xKTtcbiAgICBpZiAoIXZhbGlkKSB7XG4gICAgICBpZiAoISh0YXJnZXQubG9jYWxOYW1lID09PSAnaW5wdXQnICYmIHRhcmdldC50eXBlID09PSAnaW1hZ2UnKSkgeyByZXR1cm47IH1cbiAgICAgIC8vIHRoaXMgaXMgYSA8aW5wdXQgdHlwZT1cImltYWdlXCI+LCB3aGljaCBjYW4gc3VibWl0IGZvcm1zXG4gICAgICBkaWFsb2dQb2x5ZmlsbC5pbWFnZW1hcFVzZVZhbHVlID0gZXYub2Zmc2V0WCArICcsJyArIGV2Lm9mZnNldFk7XG4gICAgfVxuXG4gICAgdmFyIGRpYWxvZyA9IGZpbmROZWFyZXN0RGlhbG9nKHRhcmdldCk7XG4gICAgaWYgKCFkaWFsb2cpIHsgcmV0dXJuOyB9XG5cbiAgICBkaWFsb2dQb2x5ZmlsbC5mb3JtU3VibWl0dGVyID0gdGFyZ2V0O1xuXG4gIH0sIGZhbHNlKTtcblxuICAvKipcbiAgICogR2xvYmFsICdzdWJtaXQnIGhhbmRsZXIuIFRoaXMgaGFuZGxlcyBzdWJtaXRzIG9mIGBtZXRob2Q9XCJkaWFsb2dcImAgd2hpY2ggYXJlIGludmFsaWQsIGkuZS4sXG4gICAqIG91dHNpZGUgYSBkaWFsb2cuIFRoZXkgZ2V0IHByZXZlbnRlZC5cbiAgICovXG4gIGRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ3N1Ym1pdCcsIGZ1bmN0aW9uKGV2KSB7XG4gICAgdmFyIGZvcm0gPSBldi50YXJnZXQ7XG4gICAgdmFyIGRpYWxvZyA9IGZpbmROZWFyZXN0RGlhbG9nKGZvcm0pO1xuICAgIGlmIChkaWFsb2cpIHtcbiAgICAgIHJldHVybjsgIC8vIGlnbm9yZSwgaGFuZGxlIHRoZXJlXG4gICAgfVxuXG4gICAgdmFyIHN1Ym1pdHRlciA9IGZpbmRGb3JtU3VibWl0dGVyKGV2KTtcbiAgICB2YXIgZm9ybW1ldGhvZCA9IHN1Ym1pdHRlciAmJiBzdWJtaXR0ZXIuZ2V0QXR0cmlidXRlKCdmb3JtbWV0aG9kJykgfHwgZm9ybS5nZXRBdHRyaWJ1dGUoJ21ldGhvZCcpO1xuICAgIGlmIChmb3JtbWV0aG9kID09PSAnZGlhbG9nJykge1xuICAgICAgZXYucHJldmVudERlZmF1bHQoKTtcbiAgICB9XG4gIH0pO1xuXG4gIC8qKlxuICAgKiBSZXBsYWNlIHRoZSBuYXRpdmUgSFRNTEZvcm1FbGVtZW50LnN1Ym1pdCgpIG1ldGhvZCwgYXMgaXQgd29uJ3QgZmlyZSB0aGVcbiAgICogc3VibWl0IGV2ZW50IGFuZCBnaXZlIHVzIGEgY2hhbmNlIHRvIHJlc3BvbmQuXG4gICAqL1xuICB2YXIgbmF0aXZlRm9ybVN1Ym1pdCA9IEhUTUxGb3JtRWxlbWVudC5wcm90b3R5cGUuc3VibWl0O1xuICB2YXIgcmVwbGFjZW1lbnRGb3JtU3VibWl0ID0gZnVuY3Rpb24gKCkge1xuICAgIGlmICghaXNGb3JtTWV0aG9kRGlhbG9nKHRoaXMpKSB7XG4gICAgICByZXR1cm4gbmF0aXZlRm9ybVN1Ym1pdC5jYWxsKHRoaXMpO1xuICAgIH1cbiAgICB2YXIgZGlhbG9nID0gZmluZE5lYXJlc3REaWFsb2codGhpcyk7XG4gICAgZGlhbG9nICYmIGRpYWxvZy5jbG9zZSgpO1xuICB9O1xuICBIVE1MRm9ybUVsZW1lbnQucHJvdG90eXBlLnN1Ym1pdCA9IHJlcGxhY2VtZW50Rm9ybVN1Ym1pdDtcbn1cblxuZXhwb3J0IGRlZmF1bHQgZGlhbG9nUG9seWZpbGw7XG4iXSwic291cmNlUm9vdCI6IiJ9