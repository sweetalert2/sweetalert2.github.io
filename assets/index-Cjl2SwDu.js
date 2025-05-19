true              &&(function polyfill() {
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
  function getFetchOpts(link) {
    const fetchOpts = {};
    if (link.integrity) fetchOpts.integrity = link.integrity;
    if (link.referrerPolicy) fetchOpts.referrerPolicy = link.referrerPolicy;
    if (link.crossOrigin === "use-credentials")
      fetchOpts.credentials = "include";
    else if (link.crossOrigin === "anonymous") fetchOpts.credentials = "omit";
    else fetchOpts.credentials = "same-origin";
    return fetchOpts;
  }
  function processPreload(link) {
    if (link.ep)
      return;
    link.ep = true;
    const fetchOpts = getFetchOpts(link);
    fetch(link.href, fetchOpts);
  }
}());

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var jsxRuntime = {exports: {}};

var reactJsxRuntime_production = {};

/**
 * @license React
 * react-jsx-runtime.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production;

function requireReactJsxRuntime_production () {
	if (hasRequiredReactJsxRuntime_production) return reactJsxRuntime_production;
	hasRequiredReactJsxRuntime_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment");
	function jsxProd(type, config, maybeKey) {
	  var key = null;
	  void 0 !== maybeKey && (key = "" + maybeKey);
	  void 0 !== config.key && (key = "" + config.key);
	  if ("key" in config) {
	    maybeKey = {};
	    for (var propName in config)
	      "key" !== propName && (maybeKey[propName] = config[propName]);
	  } else maybeKey = config;
	  config = maybeKey.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== config ? config : null,
	    props: maybeKey
	  };
	}
	reactJsxRuntime_production.Fragment = REACT_FRAGMENT_TYPE;
	reactJsxRuntime_production.jsx = jsxProd;
	reactJsxRuntime_production.jsxs = jsxProd;
	return reactJsxRuntime_production;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var client = {exports: {}};

var reactDomClient_production = {};

var scheduler = {exports: {}};

var scheduler_production = {};

/**
 * @license React
 * scheduler.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredScheduler_production;

function requireScheduler_production () {
	if (hasRequiredScheduler_production) return scheduler_production;
	hasRequiredScheduler_production = 1;
	(function (exports) {
		function push(heap, node) {
		  var index = heap.length;
		  heap.push(node);
		  a: for (; 0 < index; ) {
		    var parentIndex = (index - 1) >>> 1,
		      parent = heap[parentIndex];
		    if (0 < compare(parent, node))
		      (heap[parentIndex] = node), (heap[index] = parent), (index = parentIndex);
		    else break a;
		  }
		}
		function peek(heap) {
		  return 0 === heap.length ? null : heap[0];
		}
		function pop(heap) {
		  if (0 === heap.length) return null;
		  var first = heap[0],
		    last = heap.pop();
		  if (last !== first) {
		    heap[0] = last;
		    a: for (
		      var index = 0, length = heap.length, halfLength = length >>> 1;
		      index < halfLength;

		    ) {
		      var leftIndex = 2 * (index + 1) - 1,
		        left = heap[leftIndex],
		        rightIndex = leftIndex + 1,
		        right = heap[rightIndex];
		      if (0 > compare(left, last))
		        rightIndex < length && 0 > compare(right, left)
		          ? ((heap[index] = right),
		            (heap[rightIndex] = last),
		            (index = rightIndex))
		          : ((heap[index] = left),
		            (heap[leftIndex] = last),
		            (index = leftIndex));
		      else if (rightIndex < length && 0 > compare(right, last))
		        (heap[index] = right), (heap[rightIndex] = last), (index = rightIndex);
		      else break a;
		    }
		  }
		  return first;
		}
		function compare(a, b) {
		  var diff = a.sortIndex - b.sortIndex;
		  return 0 !== diff ? diff : a.id - b.id;
		}
		exports.unstable_now = void 0;
		if ("object" === typeof performance && "function" === typeof performance.now) {
		  var localPerformance = performance;
		  exports.unstable_now = function () {
		    return localPerformance.now();
		  };
		} else {
		  var localDate = Date,
		    initialTime = localDate.now();
		  exports.unstable_now = function () {
		    return localDate.now() - initialTime;
		  };
		}
		var taskQueue = [],
		  timerQueue = [],
		  taskIdCounter = 1,
		  currentTask = null,
		  currentPriorityLevel = 3,
		  isPerformingWork = false,
		  isHostCallbackScheduled = false,
		  isHostTimeoutScheduled = false,
		  needsPaint = false,
		  localSetTimeout = "function" === typeof setTimeout ? setTimeout : null,
		  localClearTimeout = "function" === typeof clearTimeout ? clearTimeout : null,
		  localSetImmediate = "undefined" !== typeof setImmediate ? setImmediate : null;
		function advanceTimers(currentTime) {
		  for (var timer = peek(timerQueue); null !== timer; ) {
		    if (null === timer.callback) pop(timerQueue);
		    else if (timer.startTime <= currentTime)
		      pop(timerQueue),
		        (timer.sortIndex = timer.expirationTime),
		        push(taskQueue, timer);
		    else break;
		    timer = peek(timerQueue);
		  }
		}
		function handleTimeout(currentTime) {
		  isHostTimeoutScheduled = false;
		  advanceTimers(currentTime);
		  if (!isHostCallbackScheduled)
		    if (null !== peek(taskQueue))
		      (isHostCallbackScheduled = true),
		        isMessageLoopRunning ||
		          ((isMessageLoopRunning = true), schedulePerformWorkUntilDeadline());
		    else {
		      var firstTimer = peek(timerQueue);
		      null !== firstTimer &&
		        requestHostTimeout(handleTimeout, firstTimer.startTime - currentTime);
		    }
		}
		var isMessageLoopRunning = false,
		  taskTimeoutID = -1,
		  frameInterval = 5,
		  startTime = -1;
		function shouldYieldToHost() {
		  return needsPaint
		    ? true
		    : exports.unstable_now() - startTime < frameInterval
		      ? false
		      : true;
		}
		function performWorkUntilDeadline() {
		  needsPaint = false;
		  if (isMessageLoopRunning) {
		    var currentTime = exports.unstable_now();
		    startTime = currentTime;
		    var hasMoreWork = true;
		    try {
		      a: {
		        isHostCallbackScheduled = !1;
		        isHostTimeoutScheduled &&
		          ((isHostTimeoutScheduled = !1),
		          localClearTimeout(taskTimeoutID),
		          (taskTimeoutID = -1));
		        isPerformingWork = !0;
		        var previousPriorityLevel = currentPriorityLevel;
		        try {
		          b: {
		            advanceTimers(currentTime);
		            for (
		              currentTask = peek(taskQueue);
		              null !== currentTask &&
		              !(
		                currentTask.expirationTime > currentTime && shouldYieldToHost()
		              );

		            ) {
		              var callback = currentTask.callback;
		              if ("function" === typeof callback) {
		                currentTask.callback = null;
		                currentPriorityLevel = currentTask.priorityLevel;
		                var continuationCallback = callback(
		                  currentTask.expirationTime <= currentTime
		                );
		                currentTime = exports.unstable_now();
		                if ("function" === typeof continuationCallback) {
		                  currentTask.callback = continuationCallback;
		                  advanceTimers(currentTime);
		                  hasMoreWork = !0;
		                  break b;
		                }
		                currentTask === peek(taskQueue) && pop(taskQueue);
		                advanceTimers(currentTime);
		              } else pop(taskQueue);
		              currentTask = peek(taskQueue);
		            }
		            if (null !== currentTask) hasMoreWork = !0;
		            else {
		              var firstTimer = peek(timerQueue);
		              null !== firstTimer &&
		                requestHostTimeout(
		                  handleTimeout,
		                  firstTimer.startTime - currentTime
		                );
		              hasMoreWork = !1;
		            }
		          }
		          break a;
		        } finally {
		          (currentTask = null),
		            (currentPriorityLevel = previousPriorityLevel),
		            (isPerformingWork = !1);
		        }
		        hasMoreWork = void 0;
		      }
		    } finally {
		      hasMoreWork
		        ? schedulePerformWorkUntilDeadline()
		        : (isMessageLoopRunning = false);
		    }
		  }
		}
		var schedulePerformWorkUntilDeadline;
		if ("function" === typeof localSetImmediate)
		  schedulePerformWorkUntilDeadline = function () {
		    localSetImmediate(performWorkUntilDeadline);
		  };
		else if ("undefined" !== typeof MessageChannel) {
		  var channel = new MessageChannel(),
		    port = channel.port2;
		  channel.port1.onmessage = performWorkUntilDeadline;
		  schedulePerformWorkUntilDeadline = function () {
		    port.postMessage(null);
		  };
		} else
		  schedulePerformWorkUntilDeadline = function () {
		    localSetTimeout(performWorkUntilDeadline, 0);
		  };
		function requestHostTimeout(callback, ms) {
		  taskTimeoutID = localSetTimeout(function () {
		    callback(exports.unstable_now());
		  }, ms);
		}
		exports.unstable_IdlePriority = 5;
		exports.unstable_ImmediatePriority = 1;
		exports.unstable_LowPriority = 4;
		exports.unstable_NormalPriority = 3;
		exports.unstable_Profiling = null;
		exports.unstable_UserBlockingPriority = 2;
		exports.unstable_cancelCallback = function (task) {
		  task.callback = null;
		};
		exports.unstable_forceFrameRate = function (fps) {
		  0 > fps || 125 < fps
		    ? console.error(
		        "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
		      )
		    : (frameInterval = 0 < fps ? Math.floor(1e3 / fps) : 5);
		};
		exports.unstable_getCurrentPriorityLevel = function () {
		  return currentPriorityLevel;
		};
		exports.unstable_next = function (eventHandler) {
		  switch (currentPriorityLevel) {
		    case 1:
		    case 2:
		    case 3:
		      var priorityLevel = 3;
		      break;
		    default:
		      priorityLevel = currentPriorityLevel;
		  }
		  var previousPriorityLevel = currentPriorityLevel;
		  currentPriorityLevel = priorityLevel;
		  try {
		    return eventHandler();
		  } finally {
		    currentPriorityLevel = previousPriorityLevel;
		  }
		};
		exports.unstable_requestPaint = function () {
		  needsPaint = true;
		};
		exports.unstable_runWithPriority = function (priorityLevel, eventHandler) {
		  switch (priorityLevel) {
		    case 1:
		    case 2:
		    case 3:
		    case 4:
		    case 5:
		      break;
		    default:
		      priorityLevel = 3;
		  }
		  var previousPriorityLevel = currentPriorityLevel;
		  currentPriorityLevel = priorityLevel;
		  try {
		    return eventHandler();
		  } finally {
		    currentPriorityLevel = previousPriorityLevel;
		  }
		};
		exports.unstable_scheduleCallback = function (
		  priorityLevel,
		  callback,
		  options
		) {
		  var currentTime = exports.unstable_now();
		  "object" === typeof options && null !== options
		    ? ((options = options.delay),
		      (options =
		        "number" === typeof options && 0 < options
		          ? currentTime + options
		          : currentTime))
		    : (options = currentTime);
		  switch (priorityLevel) {
		    case 1:
		      var timeout = -1;
		      break;
		    case 2:
		      timeout = 250;
		      break;
		    case 5:
		      timeout = 1073741823;
		      break;
		    case 4:
		      timeout = 1e4;
		      break;
		    default:
		      timeout = 5e3;
		  }
		  timeout = options + timeout;
		  priorityLevel = {
		    id: taskIdCounter++,
		    callback: callback,
		    priorityLevel: priorityLevel,
		    startTime: options,
		    expirationTime: timeout,
		    sortIndex: -1
		  };
		  options > currentTime
		    ? ((priorityLevel.sortIndex = options),
		      push(timerQueue, priorityLevel),
		      null === peek(taskQueue) &&
		        priorityLevel === peek(timerQueue) &&
		        (isHostTimeoutScheduled
		          ? (localClearTimeout(taskTimeoutID), (taskTimeoutID = -1))
		          : (isHostTimeoutScheduled = true),
		        requestHostTimeout(handleTimeout, options - currentTime)))
		    : ((priorityLevel.sortIndex = timeout),
		      push(taskQueue, priorityLevel),
		      isHostCallbackScheduled ||
		        isPerformingWork ||
		        ((isHostCallbackScheduled = true),
		        isMessageLoopRunning ||
		          ((isMessageLoopRunning = true), schedulePerformWorkUntilDeadline())));
		  return priorityLevel;
		};
		exports.unstable_shouldYield = shouldYieldToHost;
		exports.unstable_wrapCallback = function (callback) {
		  var parentPriorityLevel = currentPriorityLevel;
		  return function () {
		    var previousPriorityLevel = currentPriorityLevel;
		    currentPriorityLevel = parentPriorityLevel;
		    try {
		      return callback.apply(this, arguments);
		    } finally {
		      currentPriorityLevel = previousPriorityLevel;
		    }
		  };
		}; 
	} (scheduler_production));
	return scheduler_production;
}

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler.exports;
	hasRequiredScheduler = 1;
	{
	  scheduler.exports = requireScheduler_production();
	}
	return scheduler.exports;
}

var react = {exports: {}};

var react_production = {};

/**
 * @license React
 * react.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production;

function requireReact_production () {
	if (hasRequiredReact_production) return react_production;
	hasRequiredReact_production = 1;
	var REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy"),
	  MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var ReactNoopUpdateQueue = {
	    isMounted: function () {
	      return false;
	    },
	    enqueueForceUpdate: function () {},
	    enqueueReplaceState: function () {},
	    enqueueSetState: function () {}
	  },
	  assign = Object.assign,
	  emptyObject = {};
	function Component(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	Component.prototype.isReactComponent = {};
	Component.prototype.setState = function (partialState, callback) {
	  if (
	    "object" !== typeof partialState &&
	    "function" !== typeof partialState &&
	    null != partialState
	  )
	    throw Error(
	      "takes an object of state variables to update or a function which returns an object of state variables."
	    );
	  this.updater.enqueueSetState(this, partialState, callback, "setState");
	};
	Component.prototype.forceUpdate = function (callback) {
	  this.updater.enqueueForceUpdate(this, callback, "forceUpdate");
	};
	function ComponentDummy() {}
	ComponentDummy.prototype = Component.prototype;
	function PureComponent(props, context, updater) {
	  this.props = props;
	  this.context = context;
	  this.refs = emptyObject;
	  this.updater = updater || ReactNoopUpdateQueue;
	}
	var pureComponentPrototype = (PureComponent.prototype = new ComponentDummy());
	pureComponentPrototype.constructor = PureComponent;
	assign(pureComponentPrototype, Component.prototype);
	pureComponentPrototype.isPureReactComponent = true;
	var isArrayImpl = Array.isArray,
	  ReactSharedInternals = { H: null, A: null, T: null, S: null, V: null },
	  hasOwnProperty = Object.prototype.hasOwnProperty;
	function ReactElement(type, key, self, source, owner, props) {
	  self = props.ref;
	  return {
	    $$typeof: REACT_ELEMENT_TYPE,
	    type: type,
	    key: key,
	    ref: void 0 !== self ? self : null,
	    props: props
	  };
	}
	function cloneAndReplaceKey(oldElement, newKey) {
	  return ReactElement(
	    oldElement.type,
	    newKey,
	    void 0,
	    void 0,
	    void 0,
	    oldElement.props
	  );
	}
	function isValidElement(object) {
	  return (
	    "object" === typeof object &&
	    null !== object &&
	    object.$$typeof === REACT_ELEMENT_TYPE
	  );
	}
	function escape(key) {
	  var escaperLookup = { "=": "=0", ":": "=2" };
	  return (
	    "$" +
	    key.replace(/[=:]/g, function (match) {
	      return escaperLookup[match];
	    })
	  );
	}
	var userProvidedKeyEscapeRegex = /\/+/g;
	function getElementKey(element, index) {
	  return "object" === typeof element && null !== element && null != element.key
	    ? escape("" + element.key)
	    : index.toString(36);
	}
	function noop$1() {}
	function resolveThenable(thenable) {
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw thenable.reason;
	    default:
	      switch (
	        ("string" === typeof thenable.status
	          ? thenable.then(noop$1, noop$1)
	          : ((thenable.status = "pending"),
	            thenable.then(
	              function (fulfilledValue) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "fulfilled"),
	                  (thenable.value = fulfilledValue));
	              },
	              function (error) {
	                "pending" === thenable.status &&
	                  ((thenable.status = "rejected"), (thenable.reason = error));
	              }
	            )),
	        thenable.status)
	      ) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw thenable.reason;
	      }
	  }
	  throw thenable;
	}
	function mapIntoArray(children, array, escapedPrefix, nameSoFar, callback) {
	  var type = typeof children;
	  if ("undefined" === type || "boolean" === type) children = null;
	  var invokeCallback = false;
	  if (null === children) invokeCallback = true;
	  else
	    switch (type) {
	      case "bigint":
	      case "string":
	      case "number":
	        invokeCallback = true;
	        break;
	      case "object":
	        switch (children.$$typeof) {
	          case REACT_ELEMENT_TYPE:
	          case REACT_PORTAL_TYPE:
	            invokeCallback = true;
	            break;
	          case REACT_LAZY_TYPE:
	            return (
	              (invokeCallback = children._init),
	              mapIntoArray(
	                invokeCallback(children._payload),
	                array,
	                escapedPrefix,
	                nameSoFar,
	                callback
	              )
	            );
	        }
	    }
	  if (invokeCallback)
	    return (
	      (callback = callback(children)),
	      (invokeCallback =
	        "" === nameSoFar ? "." + getElementKey(children, 0) : nameSoFar),
	      isArrayImpl(callback)
	        ? ((escapedPrefix = ""),
	          null != invokeCallback &&
	            (escapedPrefix =
	              invokeCallback.replace(userProvidedKeyEscapeRegex, "$&/") + "/"),
	          mapIntoArray(callback, array, escapedPrefix, "", function (c) {
	            return c;
	          }))
	        : null != callback &&
	          (isValidElement(callback) &&
	            (callback = cloneAndReplaceKey(
	              callback,
	              escapedPrefix +
	                (null == callback.key ||
	                (children && children.key === callback.key)
	                  ? ""
	                  : ("" + callback.key).replace(
	                      userProvidedKeyEscapeRegex,
	                      "$&/"
	                    ) + "/") +
	                invokeCallback
	            )),
	          array.push(callback)),
	      1
	    );
	  invokeCallback = 0;
	  var nextNamePrefix = "" === nameSoFar ? "." : nameSoFar + ":";
	  if (isArrayImpl(children))
	    for (var i = 0; i < children.length; i++)
	      (nameSoFar = children[i]),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if (((i = getIteratorFn(children)), "function" === typeof i))
	    for (
	      children = i.call(children), i = 0;
	      !(nameSoFar = children.next()).done;

	    )
	      (nameSoFar = nameSoFar.value),
	        (type = nextNamePrefix + getElementKey(nameSoFar, i++)),
	        (invokeCallback += mapIntoArray(
	          nameSoFar,
	          array,
	          escapedPrefix,
	          type,
	          callback
	        ));
	  else if ("object" === type) {
	    if ("function" === typeof children.then)
	      return mapIntoArray(
	        resolveThenable(children),
	        array,
	        escapedPrefix,
	        nameSoFar,
	        callback
	      );
	    array = String(children);
	    throw Error(
	      "Objects are not valid as a React child (found: " +
	        ("[object Object]" === array
	          ? "object with keys {" + Object.keys(children).join(", ") + "}"
	          : array) +
	        "). If you meant to render a collection of children, use an array instead."
	    );
	  }
	  return invokeCallback;
	}
	function mapChildren(children, func, context) {
	  if (null == children) return children;
	  var result = [],
	    count = 0;
	  mapIntoArray(children, result, "", "", function (child) {
	    return func.call(context, child, count++);
	  });
	  return result;
	}
	function lazyInitializer(payload) {
	  if (-1 === payload._status) {
	    var ctor = payload._result;
	    ctor = ctor();
	    ctor.then(
	      function (moduleObject) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 1), (payload._result = moduleObject);
	      },
	      function (error) {
	        if (0 === payload._status || -1 === payload._status)
	          (payload._status = 2), (payload._result = error);
	      }
	    );
	    -1 === payload._status && ((payload._status = 0), (payload._result = ctor));
	  }
	  if (1 === payload._status) return payload._result.default;
	  throw payload._result;
	}
	var reportGlobalError =
	  "function" === typeof reportError
	    ? reportError
	    : function (error) {
	        if (
	          "object" === typeof window &&
	          "function" === typeof window.ErrorEvent
	        ) {
	          var event = new window.ErrorEvent("error", {
	            bubbles: true,
	            cancelable: true,
	            message:
	              "object" === typeof error &&
	              null !== error &&
	              "string" === typeof error.message
	                ? String(error.message)
	                : String(error),
	            error: error
	          });
	          if (!window.dispatchEvent(event)) return;
	        } else if (
	          "object" === typeof process &&
	          "function" === typeof process.emit
	        ) {
	          process.emit("uncaughtException", error);
	          return;
	        }
	        console.error(error);
	      };
	function noop() {}
	react_production.Children = {
	  map: mapChildren,
	  forEach: function (children, forEachFunc, forEachContext) {
	    mapChildren(
	      children,
	      function () {
	        forEachFunc.apply(this, arguments);
	      },
	      forEachContext
	    );
	  },
	  count: function (children) {
	    var n = 0;
	    mapChildren(children, function () {
	      n++;
	    });
	    return n;
	  },
	  toArray: function (children) {
	    return (
	      mapChildren(children, function (child) {
	        return child;
	      }) || []
	    );
	  },
	  only: function (children) {
	    if (!isValidElement(children))
	      throw Error(
	        "React.Children.only expected to receive a single React element child."
	      );
	    return children;
	  }
	};
	react_production.Component = Component;
	react_production.Fragment = REACT_FRAGMENT_TYPE;
	react_production.Profiler = REACT_PROFILER_TYPE;
	react_production.PureComponent = PureComponent;
	react_production.StrictMode = REACT_STRICT_MODE_TYPE;
	react_production.Suspense = REACT_SUSPENSE_TYPE;
	react_production.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  ReactSharedInternals;
	react_production.__COMPILER_RUNTIME = {
	  __proto__: null,
	  c: function (size) {
	    return ReactSharedInternals.H.useMemoCache(size);
	  }
	};
	react_production.cache = function (fn) {
	  return function () {
	    return fn.apply(null, arguments);
	  };
	};
	react_production.cloneElement = function (element, config, children) {
	  if (null === element || void 0 === element)
	    throw Error(
	      "The argument must be a React element, but you passed " + element + "."
	    );
	  var props = assign({}, element.props),
	    key = element.key,
	    owner = void 0;
	  if (null != config)
	    for (propName in (void 0 !== config.ref && (owner = void 0),
	    void 0 !== config.key && (key = "" + config.key),
	    config))
	      !hasOwnProperty.call(config, propName) ||
	        "key" === propName ||
	        "__self" === propName ||
	        "__source" === propName ||
	        ("ref" === propName && void 0 === config.ref) ||
	        (props[propName] = config[propName]);
	  var propName = arguments.length - 2;
	  if (1 === propName) props.children = children;
	  else if (1 < propName) {
	    for (var childArray = Array(propName), i = 0; i < propName; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  return ReactElement(element.type, key, void 0, void 0, owner, props);
	};
	react_production.createContext = function (defaultValue) {
	  defaultValue = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    _currentValue: defaultValue,
	    _currentValue2: defaultValue,
	    _threadCount: 0,
	    Provider: null,
	    Consumer: null
	  };
	  defaultValue.Provider = defaultValue;
	  defaultValue.Consumer = {
	    $$typeof: REACT_CONSUMER_TYPE,
	    _context: defaultValue
	  };
	  return defaultValue;
	};
	react_production.createElement = function (type, config, children) {
	  var propName,
	    props = {},
	    key = null;
	  if (null != config)
	    for (propName in (void 0 !== config.key && (key = "" + config.key), config))
	      hasOwnProperty.call(config, propName) &&
	        "key" !== propName &&
	        "__self" !== propName &&
	        "__source" !== propName &&
	        (props[propName] = config[propName]);
	  var childrenLength = arguments.length - 2;
	  if (1 === childrenLength) props.children = children;
	  else if (1 < childrenLength) {
	    for (var childArray = Array(childrenLength), i = 0; i < childrenLength; i++)
	      childArray[i] = arguments[i + 2];
	    props.children = childArray;
	  }
	  if (type && type.defaultProps)
	    for (propName in ((childrenLength = type.defaultProps), childrenLength))
	      void 0 === props[propName] &&
	        (props[propName] = childrenLength[propName]);
	  return ReactElement(type, key, void 0, void 0, null, props);
	};
	react_production.createRef = function () {
	  return { current: null };
	};
	react_production.forwardRef = function (render) {
	  return { $$typeof: REACT_FORWARD_REF_TYPE, render: render };
	};
	react_production.isValidElement = isValidElement;
	react_production.lazy = function (ctor) {
	  return {
	    $$typeof: REACT_LAZY_TYPE,
	    _payload: { _status: -1, _result: ctor },
	    _init: lazyInitializer
	  };
	};
	react_production.memo = function (type, compare) {
	  return {
	    $$typeof: REACT_MEMO_TYPE,
	    type: type,
	    compare: void 0 === compare ? null : compare
	  };
	};
	react_production.startTransition = function (scope) {
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  try {
	    var returnValue = scope(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    "object" === typeof returnValue &&
	      null !== returnValue &&
	      "function" === typeof returnValue.then &&
	      returnValue.then(noop, reportGlobalError);
	  } catch (error) {
	    reportGlobalError(error);
	  } finally {
	    ReactSharedInternals.T = prevTransition;
	  }
	};
	react_production.unstable_useCacheRefresh = function () {
	  return ReactSharedInternals.H.useCacheRefresh();
	};
	react_production.use = function (usable) {
	  return ReactSharedInternals.H.use(usable);
	};
	react_production.useActionState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useActionState(action, initialState, permalink);
	};
	react_production.useCallback = function (callback, deps) {
	  return ReactSharedInternals.H.useCallback(callback, deps);
	};
	react_production.useContext = function (Context) {
	  return ReactSharedInternals.H.useContext(Context);
	};
	react_production.useDebugValue = function () {};
	react_production.useDeferredValue = function (value, initialValue) {
	  return ReactSharedInternals.H.useDeferredValue(value, initialValue);
	};
	react_production.useEffect = function (create, createDeps, update) {
	  var dispatcher = ReactSharedInternals.H;
	  if ("function" === typeof update)
	    throw Error(
	      "useEffect CRUD overload is not enabled in this build of React."
	    );
	  return dispatcher.useEffect(create, createDeps);
	};
	react_production.useId = function () {
	  return ReactSharedInternals.H.useId();
	};
	react_production.useImperativeHandle = function (ref, create, deps) {
	  return ReactSharedInternals.H.useImperativeHandle(ref, create, deps);
	};
	react_production.useInsertionEffect = function (create, deps) {
	  return ReactSharedInternals.H.useInsertionEffect(create, deps);
	};
	react_production.useLayoutEffect = function (create, deps) {
	  return ReactSharedInternals.H.useLayoutEffect(create, deps);
	};
	react_production.useMemo = function (create, deps) {
	  return ReactSharedInternals.H.useMemo(create, deps);
	};
	react_production.useOptimistic = function (passthrough, reducer) {
	  return ReactSharedInternals.H.useOptimistic(passthrough, reducer);
	};
	react_production.useReducer = function (reducer, initialArg, init) {
	  return ReactSharedInternals.H.useReducer(reducer, initialArg, init);
	};
	react_production.useRef = function (initialValue) {
	  return ReactSharedInternals.H.useRef(initialValue);
	};
	react_production.useState = function (initialState) {
	  return ReactSharedInternals.H.useState(initialState);
	};
	react_production.useSyncExternalStore = function (
	  subscribe,
	  getSnapshot,
	  getServerSnapshot
	) {
	  return ReactSharedInternals.H.useSyncExternalStore(
	    subscribe,
	    getSnapshot,
	    getServerSnapshot
	  );
	};
	react_production.useTransition = function () {
	  return ReactSharedInternals.H.useTransition();
	};
	react_production.version = "19.1.0";
	return react_production;
}

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react.exports;
	hasRequiredReact = 1;
	{
	  react.exports = requireReact_production();
	}
	return react.exports;
}

var reactDom = {exports: {}};

var reactDom_production = {};

/**
 * @license React
 * react-dom.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDom_production;

function requireReactDom_production () {
	if (hasRequiredReactDom_production) return reactDom_production;
	hasRequiredReactDom_production = 1;
	var React = requireReact();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	function noop() {}
	var Internals = {
	    d: {
	      f: noop,
	      r: function () {
	        throw Error(formatProdErrorMessage(522));
	      },
	      D: noop,
	      C: noop,
	      L: noop,
	      m: noop,
	      X: noop,
	      S: noop,
	      M: noop
	    },
	    p: 0,
	    findDOMNode: null
	  },
	  REACT_PORTAL_TYPE = Symbol.for("react.portal");
	function createPortal$1(children, containerInfo, implementation) {
	  var key =
	    3 < arguments.length && void 0 !== arguments[3] ? arguments[3] : null;
	  return {
	    $$typeof: REACT_PORTAL_TYPE,
	    key: null == key ? null : "" + key,
	    children: children,
	    containerInfo: containerInfo,
	    implementation: implementation
	  };
	}
	var ReactSharedInternals =
	  React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE;
	function getCrossOriginStringAs(as, input) {
	  if ("font" === as) return "";
	  if ("string" === typeof input)
	    return "use-credentials" === input ? input : "";
	}
	reactDom_production.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE =
	  Internals;
	reactDom_production.createPortal = function (children, container) {
	  var key =
	    2 < arguments.length && void 0 !== arguments[2] ? arguments[2] : null;
	  if (
	    !container ||
	    (1 !== container.nodeType &&
	      9 !== container.nodeType &&
	      11 !== container.nodeType)
	  )
	    throw Error(formatProdErrorMessage(299));
	  return createPortal$1(children, container, null, key);
	};
	reactDom_production.flushSync = function (fn) {
	  var previousTransition = ReactSharedInternals.T,
	    previousUpdatePriority = Internals.p;
	  try {
	    if (((ReactSharedInternals.T = null), (Internals.p = 2), fn)) return fn();
	  } finally {
	    (ReactSharedInternals.T = previousTransition),
	      (Internals.p = previousUpdatePriority),
	      Internals.d.f();
	  }
	};
	reactDom_production.preconnect = function (href, options) {
	  "string" === typeof href &&
	    (options
	      ? ((options = options.crossOrigin),
	        (options =
	          "string" === typeof options
	            ? "use-credentials" === options
	              ? options
	              : ""
	            : void 0))
	      : (options = null),
	    Internals.d.C(href, options));
	};
	reactDom_production.prefetchDNS = function (href) {
	  "string" === typeof href && Internals.d.D(href);
	};
	reactDom_production.preinit = function (href, options) {
	  if ("string" === typeof href && options && "string" === typeof options.as) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin),
	      integrity =
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      fetchPriority =
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0;
	    "style" === as
	      ? Internals.d.S(
	          href,
	          "string" === typeof options.precedence ? options.precedence : void 0,
	          {
	            crossOrigin: crossOrigin,
	            integrity: integrity,
	            fetchPriority: fetchPriority
	          }
	        )
	      : "script" === as &&
	        Internals.d.X(href, {
	          crossOrigin: crossOrigin,
	          integrity: integrity,
	          fetchPriority: fetchPriority,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	  }
	};
	reactDom_production.preinitModule = function (href, options) {
	  if ("string" === typeof href)
	    if ("object" === typeof options && null !== options) {
	      if (null == options.as || "script" === options.as) {
	        var crossOrigin = getCrossOriginStringAs(
	          options.as,
	          options.crossOrigin
	        );
	        Internals.d.M(href, {
	          crossOrigin: crossOrigin,
	          integrity:
	            "string" === typeof options.integrity ? options.integrity : void 0,
	          nonce: "string" === typeof options.nonce ? options.nonce : void 0
	        });
	      }
	    } else null == options && Internals.d.M(href);
	};
	reactDom_production.preload = function (href, options) {
	  if (
	    "string" === typeof href &&
	    "object" === typeof options &&
	    null !== options &&
	    "string" === typeof options.as
	  ) {
	    var as = options.as,
	      crossOrigin = getCrossOriginStringAs(as, options.crossOrigin);
	    Internals.d.L(href, as, {
	      crossOrigin: crossOrigin,
	      integrity:
	        "string" === typeof options.integrity ? options.integrity : void 0,
	      nonce: "string" === typeof options.nonce ? options.nonce : void 0,
	      type: "string" === typeof options.type ? options.type : void 0,
	      fetchPriority:
	        "string" === typeof options.fetchPriority
	          ? options.fetchPriority
	          : void 0,
	      referrerPolicy:
	        "string" === typeof options.referrerPolicy
	          ? options.referrerPolicy
	          : void 0,
	      imageSrcSet:
	        "string" === typeof options.imageSrcSet ? options.imageSrcSet : void 0,
	      imageSizes:
	        "string" === typeof options.imageSizes ? options.imageSizes : void 0,
	      media: "string" === typeof options.media ? options.media : void 0
	    });
	  }
	};
	reactDom_production.preloadModule = function (href, options) {
	  if ("string" === typeof href)
	    if (options) {
	      var crossOrigin = getCrossOriginStringAs(options.as, options.crossOrigin);
	      Internals.d.m(href, {
	        as:
	          "string" === typeof options.as && "script" !== options.as
	            ? options.as
	            : void 0,
	        crossOrigin: crossOrigin,
	        integrity:
	          "string" === typeof options.integrity ? options.integrity : void 0
	      });
	    } else Internals.d.m(href);
	};
	reactDom_production.requestFormReset = function (form) {
	  Internals.d.r(form);
	};
	reactDom_production.unstable_batchedUpdates = function (fn, a) {
	  return fn(a);
	};
	reactDom_production.useFormState = function (action, initialState, permalink) {
	  return ReactSharedInternals.H.useFormState(action, initialState, permalink);
	};
	reactDom_production.useFormStatus = function () {
	  return ReactSharedInternals.H.useHostTransitionStatus();
	};
	reactDom_production.version = "19.1.0";
	return reactDom_production;
}

var hasRequiredReactDom;

function requireReactDom () {
	if (hasRequiredReactDom) return reactDom.exports;
	hasRequiredReactDom = 1;
	function checkDCE() {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
	    return;
	  }
	  try {
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    console.error(err);
	  }
	}
	{
	  checkDCE();
	  reactDom.exports = requireReactDom_production();
	}
	return reactDom.exports;
}

/**
 * @license React
 * react-dom-client.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDomClient_production;

function requireReactDomClient_production () {
	if (hasRequiredReactDomClient_production) return reactDomClient_production;
	hasRequiredReactDomClient_production = 1;
	var Scheduler = requireScheduler(),
	  React = requireReact(),
	  ReactDOM = requireReactDom();
	function formatProdErrorMessage(code) {
	  var url = "https://react.dev/errors/" + code;
	  if (1 < arguments.length) {
	    url += "?args[]=" + encodeURIComponent(arguments[1]);
	    for (var i = 2; i < arguments.length; i++)
	      url += "&args[]=" + encodeURIComponent(arguments[i]);
	  }
	  return (
	    "Minified React error #" +
	    code +
	    "; visit " +
	    url +
	    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
	  );
	}
	function isValidContainer(node) {
	  return !(
	    !node ||
	    (1 !== node.nodeType && 9 !== node.nodeType && 11 !== node.nodeType)
	  );
	}
	function getNearestMountedFiber(fiber) {
	  var node = fiber,
	    nearestMounted = fiber;
	  if (fiber.alternate) for (; node.return; ) node = node.return;
	  else {
	    fiber = node;
	    do
	      (node = fiber),
	        0 !== (node.flags & 4098) && (nearestMounted = node.return),
	        (fiber = node.return);
	    while (fiber);
	  }
	  return 3 === node.tag ? nearestMounted : null;
	}
	function getSuspenseInstanceFromFiber(fiber) {
	  if (13 === fiber.tag) {
	    var suspenseState = fiber.memoizedState;
	    null === suspenseState &&
	      ((fiber = fiber.alternate),
	      null !== fiber && (suspenseState = fiber.memoizedState));
	    if (null !== suspenseState) return suspenseState.dehydrated;
	  }
	  return null;
	}
	function assertIsMounted(fiber) {
	  if (getNearestMountedFiber(fiber) !== fiber)
	    throw Error(formatProdErrorMessage(188));
	}
	function findCurrentFiberUsingSlowPath(fiber) {
	  var alternate = fiber.alternate;
	  if (!alternate) {
	    alternate = getNearestMountedFiber(fiber);
	    if (null === alternate) throw Error(formatProdErrorMessage(188));
	    return alternate !== fiber ? null : fiber;
	  }
	  for (var a = fiber, b = alternate; ; ) {
	    var parentA = a.return;
	    if (null === parentA) break;
	    var parentB = parentA.alternate;
	    if (null === parentB) {
	      b = parentA.return;
	      if (null !== b) {
	        a = b;
	        continue;
	      }
	      break;
	    }
	    if (parentA.child === parentB.child) {
	      for (parentB = parentA.child; parentB; ) {
	        if (parentB === a) return assertIsMounted(parentA), fiber;
	        if (parentB === b) return assertIsMounted(parentA), alternate;
	        parentB = parentB.sibling;
	      }
	      throw Error(formatProdErrorMessage(188));
	    }
	    if (a.return !== b.return) (a = parentA), (b = parentB);
	    else {
	      for (var didFindChild = false, child$0 = parentA.child; child$0; ) {
	        if (child$0 === a) {
	          didFindChild = true;
	          a = parentA;
	          b = parentB;
	          break;
	        }
	        if (child$0 === b) {
	          didFindChild = true;
	          b = parentA;
	          a = parentB;
	          break;
	        }
	        child$0 = child$0.sibling;
	      }
	      if (!didFindChild) {
	        for (child$0 = parentB.child; child$0; ) {
	          if (child$0 === a) {
	            didFindChild = true;
	            a = parentB;
	            b = parentA;
	            break;
	          }
	          if (child$0 === b) {
	            didFindChild = true;
	            b = parentB;
	            a = parentA;
	            break;
	          }
	          child$0 = child$0.sibling;
	        }
	        if (!didFindChild) throw Error(formatProdErrorMessage(189));
	      }
	    }
	    if (a.alternate !== b) throw Error(formatProdErrorMessage(190));
	  }
	  if (3 !== a.tag) throw Error(formatProdErrorMessage(188));
	  return a.stateNode.current === a ? fiber : alternate;
	}
	function findCurrentHostFiberImpl(node) {
	  var tag = node.tag;
	  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return node;
	  for (node = node.child; null !== node; ) {
	    tag = findCurrentHostFiberImpl(node);
	    if (null !== tag) return tag;
	    node = node.sibling;
	  }
	  return null;
	}
	var assign = Object.assign,
	  REACT_LEGACY_ELEMENT_TYPE = Symbol.for("react.element"),
	  REACT_ELEMENT_TYPE = Symbol.for("react.transitional.element"),
	  REACT_PORTAL_TYPE = Symbol.for("react.portal"),
	  REACT_FRAGMENT_TYPE = Symbol.for("react.fragment"),
	  REACT_STRICT_MODE_TYPE = Symbol.for("react.strict_mode"),
	  REACT_PROFILER_TYPE = Symbol.for("react.profiler"),
	  REACT_PROVIDER_TYPE = Symbol.for("react.provider"),
	  REACT_CONSUMER_TYPE = Symbol.for("react.consumer"),
	  REACT_CONTEXT_TYPE = Symbol.for("react.context"),
	  REACT_FORWARD_REF_TYPE = Symbol.for("react.forward_ref"),
	  REACT_SUSPENSE_TYPE = Symbol.for("react.suspense"),
	  REACT_SUSPENSE_LIST_TYPE = Symbol.for("react.suspense_list"),
	  REACT_MEMO_TYPE = Symbol.for("react.memo"),
	  REACT_LAZY_TYPE = Symbol.for("react.lazy");
	var REACT_ACTIVITY_TYPE = Symbol.for("react.activity");
	var REACT_MEMO_CACHE_SENTINEL = Symbol.for("react.memo_cache_sentinel");
	var MAYBE_ITERATOR_SYMBOL = Symbol.iterator;
	function getIteratorFn(maybeIterable) {
	  if (null === maybeIterable || "object" !== typeof maybeIterable) return null;
	  maybeIterable =
	    (MAYBE_ITERATOR_SYMBOL && maybeIterable[MAYBE_ITERATOR_SYMBOL]) ||
	    maybeIterable["@@iterator"];
	  return "function" === typeof maybeIterable ? maybeIterable : null;
	}
	var REACT_CLIENT_REFERENCE = Symbol.for("react.client.reference");
	function getComponentNameFromType(type) {
	  if (null == type) return null;
	  if ("function" === typeof type)
	    return type.$$typeof === REACT_CLIENT_REFERENCE
	      ? null
	      : type.displayName || type.name || null;
	  if ("string" === typeof type) return type;
	  switch (type) {
	    case REACT_FRAGMENT_TYPE:
	      return "Fragment";
	    case REACT_PROFILER_TYPE:
	      return "Profiler";
	    case REACT_STRICT_MODE_TYPE:
	      return "StrictMode";
	    case REACT_SUSPENSE_TYPE:
	      return "Suspense";
	    case REACT_SUSPENSE_LIST_TYPE:
	      return "SuspenseList";
	    case REACT_ACTIVITY_TYPE:
	      return "Activity";
	  }
	  if ("object" === typeof type)
	    switch (type.$$typeof) {
	      case REACT_PORTAL_TYPE:
	        return "Portal";
	      case REACT_CONTEXT_TYPE:
	        return (type.displayName || "Context") + ".Provider";
	      case REACT_CONSUMER_TYPE:
	        return (type._context.displayName || "Context") + ".Consumer";
	      case REACT_FORWARD_REF_TYPE:
	        var innerType = type.render;
	        type = type.displayName;
	        type ||
	          ((type = innerType.displayName || innerType.name || ""),
	          (type = "" !== type ? "ForwardRef(" + type + ")" : "ForwardRef"));
	        return type;
	      case REACT_MEMO_TYPE:
	        return (
	          (innerType = type.displayName || null),
	          null !== innerType
	            ? innerType
	            : getComponentNameFromType(type.type) || "Memo"
	        );
	      case REACT_LAZY_TYPE:
	        innerType = type._payload;
	        type = type._init;
	        try {
	          return getComponentNameFromType(type(innerType));
	        } catch (x) {}
	    }
	  return null;
	}
	var isArrayImpl = Array.isArray,
	  ReactSharedInternals =
	    React.__CLIENT_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  ReactDOMSharedInternals =
	    ReactDOM.__DOM_INTERNALS_DO_NOT_USE_OR_WARN_USERS_THEY_CANNOT_UPGRADE,
	  sharedNotPendingObject = {
	    pending: false,
	    data: null,
	    method: null,
	    action: null
	  },
	  valueStack = [],
	  index = -1;
	function createCursor(defaultValue) {
	  return { current: defaultValue };
	}
	function pop(cursor) {
	  0 > index ||
	    ((cursor.current = valueStack[index]), (valueStack[index] = null), index--);
	}
	function push(cursor, value) {
	  index++;
	  valueStack[index] = cursor.current;
	  cursor.current = value;
	}
	var contextStackCursor = createCursor(null),
	  contextFiberStackCursor = createCursor(null),
	  rootInstanceStackCursor = createCursor(null),
	  hostTransitionProviderCursor = createCursor(null);
	function pushHostContainer(fiber, nextRootInstance) {
	  push(rootInstanceStackCursor, nextRootInstance);
	  push(contextFiberStackCursor, fiber);
	  push(contextStackCursor, null);
	  switch (nextRootInstance.nodeType) {
	    case 9:
	    case 11:
	      fiber = (fiber = nextRootInstance.documentElement)
	        ? (fiber = fiber.namespaceURI)
	          ? getOwnHostContext(fiber)
	          : 0
	        : 0;
	      break;
	    default:
	      if (
	        ((fiber = nextRootInstance.tagName),
	        (nextRootInstance = nextRootInstance.namespaceURI))
	      )
	        (nextRootInstance = getOwnHostContext(nextRootInstance)),
	          (fiber = getChildHostContextProd(nextRootInstance, fiber));
	      else
	        switch (fiber) {
	          case "svg":
	            fiber = 1;
	            break;
	          case "math":
	            fiber = 2;
	            break;
	          default:
	            fiber = 0;
	        }
	  }
	  pop(contextStackCursor);
	  push(contextStackCursor, fiber);
	}
	function popHostContainer() {
	  pop(contextStackCursor);
	  pop(contextFiberStackCursor);
	  pop(rootInstanceStackCursor);
	}
	function pushHostContext(fiber) {
	  null !== fiber.memoizedState && push(hostTransitionProviderCursor, fiber);
	  var context = contextStackCursor.current;
	  var JSCompiler_inline_result = getChildHostContextProd(context, fiber.type);
	  context !== JSCompiler_inline_result &&
	    (push(contextFiberStackCursor, fiber),
	    push(contextStackCursor, JSCompiler_inline_result));
	}
	function popHostContext(fiber) {
	  contextFiberStackCursor.current === fiber &&
	    (pop(contextStackCursor), pop(contextFiberStackCursor));
	  hostTransitionProviderCursor.current === fiber &&
	    (pop(hostTransitionProviderCursor),
	    (HostTransitionContext._currentValue = sharedNotPendingObject));
	}
	var hasOwnProperty = Object.prototype.hasOwnProperty,
	  scheduleCallback$3 = Scheduler.unstable_scheduleCallback,
	  cancelCallback$1 = Scheduler.unstable_cancelCallback,
	  shouldYield = Scheduler.unstable_shouldYield,
	  requestPaint = Scheduler.unstable_requestPaint,
	  now = Scheduler.unstable_now,
	  getCurrentPriorityLevel = Scheduler.unstable_getCurrentPriorityLevel,
	  ImmediatePriority = Scheduler.unstable_ImmediatePriority,
	  UserBlockingPriority = Scheduler.unstable_UserBlockingPriority,
	  NormalPriority$1 = Scheduler.unstable_NormalPriority,
	  LowPriority = Scheduler.unstable_LowPriority,
	  IdlePriority = Scheduler.unstable_IdlePriority,
	  log$1 = Scheduler.log,
	  unstable_setDisableYieldValue = Scheduler.unstable_setDisableYieldValue,
	  rendererID = null,
	  injectedHook = null;
	function setIsStrictModeForDevtools(newIsStrictMode) {
	  "function" === typeof log$1 && unstable_setDisableYieldValue(newIsStrictMode);
	  if (injectedHook && "function" === typeof injectedHook.setStrictMode)
	    try {
	      injectedHook.setStrictMode(rendererID, newIsStrictMode);
	    } catch (err) {}
	}
	var clz32 = Math.clz32 ? Math.clz32 : clz32Fallback,
	  log = Math.log,
	  LN2 = Math.LN2;
	function clz32Fallback(x) {
	  x >>>= 0;
	  return 0 === x ? 32 : (31 - ((log(x) / LN2) | 0)) | 0;
	}
	var nextTransitionLane = 256,
	  nextRetryLane = 4194304;
	function getHighestPriorityLanes(lanes) {
	  var pendingSyncLanes = lanes & 42;
	  if (0 !== pendingSyncLanes) return pendingSyncLanes;
	  switch (lanes & -lanes) {
	    case 1:
	      return 1;
	    case 2:
	      return 2;
	    case 4:
	      return 4;
	    case 8:
	      return 8;
	    case 16:
	      return 16;
	    case 32:
	      return 32;
	    case 64:
	      return 64;
	    case 128:
	      return 128;
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return lanes & 4194048;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      return lanes & 62914560;
	    case 67108864:
	      return 67108864;
	    case 134217728:
	      return 134217728;
	    case 268435456:
	      return 268435456;
	    case 536870912:
	      return 536870912;
	    case 1073741824:
	      return 0;
	    default:
	      return lanes;
	  }
	}
	function getNextLanes(root, wipLanes, rootHasPendingCommit) {
	  var pendingLanes = root.pendingLanes;
	  if (0 === pendingLanes) return 0;
	  var nextLanes = 0,
	    suspendedLanes = root.suspendedLanes,
	    pingedLanes = root.pingedLanes;
	  root = root.warmLanes;
	  var nonIdlePendingLanes = pendingLanes & 134217727;
	  0 !== nonIdlePendingLanes
	    ? ((pendingLanes = nonIdlePendingLanes & ~suspendedLanes),
	      0 !== pendingLanes
	        ? (nextLanes = getHighestPriorityLanes(pendingLanes))
	        : ((pingedLanes &= nonIdlePendingLanes),
	          0 !== pingedLanes
	            ? (nextLanes = getHighestPriorityLanes(pingedLanes))
	            : rootHasPendingCommit ||
	              ((rootHasPendingCommit = nonIdlePendingLanes & ~root),
	              0 !== rootHasPendingCommit &&
	                (nextLanes = getHighestPriorityLanes(rootHasPendingCommit)))))
	    : ((nonIdlePendingLanes = pendingLanes & ~suspendedLanes),
	      0 !== nonIdlePendingLanes
	        ? (nextLanes = getHighestPriorityLanes(nonIdlePendingLanes))
	        : 0 !== pingedLanes
	          ? (nextLanes = getHighestPriorityLanes(pingedLanes))
	          : rootHasPendingCommit ||
	            ((rootHasPendingCommit = pendingLanes & ~root),
	            0 !== rootHasPendingCommit &&
	              (nextLanes = getHighestPriorityLanes(rootHasPendingCommit))));
	  return 0 === nextLanes
	    ? 0
	    : 0 !== wipLanes &&
	        wipLanes !== nextLanes &&
	        0 === (wipLanes & suspendedLanes) &&
	        ((suspendedLanes = nextLanes & -nextLanes),
	        (rootHasPendingCommit = wipLanes & -wipLanes),
	        suspendedLanes >= rootHasPendingCommit ||
	          (32 === suspendedLanes && 0 !== (rootHasPendingCommit & 4194048)))
	      ? wipLanes
	      : nextLanes;
	}
	function checkIfRootIsPrerendering(root, renderLanes) {
	  return (
	    0 ===
	    (root.pendingLanes &
	      ~(root.suspendedLanes & ~root.pingedLanes) &
	      renderLanes)
	  );
	}
	function computeExpirationTime(lane, currentTime) {
	  switch (lane) {
	    case 1:
	    case 2:
	    case 4:
	    case 8:
	    case 64:
	      return currentTime + 250;
	    case 16:
	    case 32:
	    case 128:
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	      return currentTime + 5e3;
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      return -1;
	    case 67108864:
	    case 134217728:
	    case 268435456:
	    case 536870912:
	    case 1073741824:
	      return -1;
	    default:
	      return -1;
	  }
	}
	function claimNextTransitionLane() {
	  var lane = nextTransitionLane;
	  nextTransitionLane <<= 1;
	  0 === (nextTransitionLane & 4194048) && (nextTransitionLane = 256);
	  return lane;
	}
	function claimNextRetryLane() {
	  var lane = nextRetryLane;
	  nextRetryLane <<= 1;
	  0 === (nextRetryLane & 62914560) && (nextRetryLane = 4194304);
	  return lane;
	}
	function createLaneMap(initial) {
	  for (var laneMap = [], i = 0; 31 > i; i++) laneMap.push(initial);
	  return laneMap;
	}
	function markRootUpdated$1(root, updateLane) {
	  root.pendingLanes |= updateLane;
	  268435456 !== updateLane &&
	    ((root.suspendedLanes = 0), (root.pingedLanes = 0), (root.warmLanes = 0));
	}
	function markRootFinished(
	  root,
	  finishedLanes,
	  remainingLanes,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes
	) {
	  var previouslyPendingLanes = root.pendingLanes;
	  root.pendingLanes = remainingLanes;
	  root.suspendedLanes = 0;
	  root.pingedLanes = 0;
	  root.warmLanes = 0;
	  root.expiredLanes &= remainingLanes;
	  root.entangledLanes &= remainingLanes;
	  root.errorRecoveryDisabledLanes &= remainingLanes;
	  root.shellSuspendCounter = 0;
	  var entanglements = root.entanglements,
	    expirationTimes = root.expirationTimes,
	    hiddenUpdates = root.hiddenUpdates;
	  for (
	    remainingLanes = previouslyPendingLanes & ~remainingLanes;
	    0 < remainingLanes;

	  ) {
	    var index$5 = 31 - clz32(remainingLanes),
	      lane = 1 << index$5;
	    entanglements[index$5] = 0;
	    expirationTimes[index$5] = -1;
	    var hiddenUpdatesForLane = hiddenUpdates[index$5];
	    if (null !== hiddenUpdatesForLane)
	      for (
	        hiddenUpdates[index$5] = null, index$5 = 0;
	        index$5 < hiddenUpdatesForLane.length;
	        index$5++
	      ) {
	        var update = hiddenUpdatesForLane[index$5];
	        null !== update && (update.lane &= -536870913);
	      }
	    remainingLanes &= ~lane;
	  }
	  0 !== spawnedLane && markSpawnedDeferredLane(root, spawnedLane, 0);
	  0 !== suspendedRetryLanes &&
	    0 === updatedLanes &&
	    0 !== root.tag &&
	    (root.suspendedLanes |=
	      suspendedRetryLanes & ~(previouslyPendingLanes & ~finishedLanes));
	}
	function markSpawnedDeferredLane(root, spawnedLane, entangledLanes) {
	  root.pendingLanes |= spawnedLane;
	  root.suspendedLanes &= ~spawnedLane;
	  var spawnedLaneIndex = 31 - clz32(spawnedLane);
	  root.entangledLanes |= spawnedLane;
	  root.entanglements[spawnedLaneIndex] =
	    root.entanglements[spawnedLaneIndex] |
	    1073741824 |
	    (entangledLanes & 4194090);
	}
	function markRootEntangled(root, entangledLanes) {
	  var rootEntangledLanes = (root.entangledLanes |= entangledLanes);
	  for (root = root.entanglements; rootEntangledLanes; ) {
	    var index$6 = 31 - clz32(rootEntangledLanes),
	      lane = 1 << index$6;
	    (lane & entangledLanes) | (root[index$6] & entangledLanes) &&
	      (root[index$6] |= entangledLanes);
	    rootEntangledLanes &= ~lane;
	  }
	}
	function getBumpedLaneForHydrationByLane(lane) {
	  switch (lane) {
	    case 2:
	      lane = 1;
	      break;
	    case 8:
	      lane = 4;
	      break;
	    case 32:
	      lane = 16;
	      break;
	    case 256:
	    case 512:
	    case 1024:
	    case 2048:
	    case 4096:
	    case 8192:
	    case 16384:
	    case 32768:
	    case 65536:
	    case 131072:
	    case 262144:
	    case 524288:
	    case 1048576:
	    case 2097152:
	    case 4194304:
	    case 8388608:
	    case 16777216:
	    case 33554432:
	      lane = 128;
	      break;
	    case 268435456:
	      lane = 134217728;
	      break;
	    default:
	      lane = 0;
	  }
	  return lane;
	}
	function lanesToEventPriority(lanes) {
	  lanes &= -lanes;
	  return 2 < lanes
	    ? 8 < lanes
	      ? 0 !== (lanes & 134217727)
	        ? 32
	        : 268435456
	      : 8
	    : 2;
	}
	function resolveUpdatePriority() {
	  var updatePriority = ReactDOMSharedInternals.p;
	  if (0 !== updatePriority) return updatePriority;
	  updatePriority = window.event;
	  return void 0 === updatePriority ? 32 : getEventPriority(updatePriority.type);
	}
	function runWithPriority(priority, fn) {
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    return (ReactDOMSharedInternals.p = priority), fn();
	  } finally {
	    ReactDOMSharedInternals.p = previousPriority;
	  }
	}
	var randomKey = Math.random().toString(36).slice(2),
	  internalInstanceKey = "__reactFiber$" + randomKey,
	  internalPropsKey = "__reactProps$" + randomKey,
	  internalContainerInstanceKey = "__reactContainer$" + randomKey,
	  internalEventHandlersKey = "__reactEvents$" + randomKey,
	  internalEventHandlerListenersKey = "__reactListeners$" + randomKey,
	  internalEventHandlesSetKey = "__reactHandles$" + randomKey,
	  internalRootNodeResourcesKey = "__reactResources$" + randomKey,
	  internalHoistableMarker = "__reactMarker$" + randomKey;
	function detachDeletedInstance(node) {
	  delete node[internalInstanceKey];
	  delete node[internalPropsKey];
	  delete node[internalEventHandlersKey];
	  delete node[internalEventHandlerListenersKey];
	  delete node[internalEventHandlesSetKey];
	}
	function getClosestInstanceFromNode(targetNode) {
	  var targetInst = targetNode[internalInstanceKey];
	  if (targetInst) return targetInst;
	  for (var parentNode = targetNode.parentNode; parentNode; ) {
	    if (
	      (targetInst =
	        parentNode[internalContainerInstanceKey] ||
	        parentNode[internalInstanceKey])
	    ) {
	      parentNode = targetInst.alternate;
	      if (
	        null !== targetInst.child ||
	        (null !== parentNode && null !== parentNode.child)
	      )
	        for (
	          targetNode = getParentSuspenseInstance(targetNode);
	          null !== targetNode;

	        ) {
	          if ((parentNode = targetNode[internalInstanceKey])) return parentNode;
	          targetNode = getParentSuspenseInstance(targetNode);
	        }
	      return targetInst;
	    }
	    targetNode = parentNode;
	    parentNode = targetNode.parentNode;
	  }
	  return null;
	}
	function getInstanceFromNode(node) {
	  if (
	    (node = node[internalInstanceKey] || node[internalContainerInstanceKey])
	  ) {
	    var tag = node.tag;
	    if (
	      5 === tag ||
	      6 === tag ||
	      13 === tag ||
	      26 === tag ||
	      27 === tag ||
	      3 === tag
	    )
	      return node;
	  }
	  return null;
	}
	function getNodeFromInstance(inst) {
	  var tag = inst.tag;
	  if (5 === tag || 26 === tag || 27 === tag || 6 === tag) return inst.stateNode;
	  throw Error(formatProdErrorMessage(33));
	}
	function getResourcesFromRoot(root) {
	  var resources = root[internalRootNodeResourcesKey];
	  resources ||
	    (resources = root[internalRootNodeResourcesKey] =
	      { hoistableStyles: new Map(), hoistableScripts: new Map() });
	  return resources;
	}
	function markNodeAsHoistable(node) {
	  node[internalHoistableMarker] = true;
	}
	var allNativeEvents = new Set(),
	  registrationNameDependencies = {};
	function registerTwoPhaseEvent(registrationName, dependencies) {
	  registerDirectEvent(registrationName, dependencies);
	  registerDirectEvent(registrationName + "Capture", dependencies);
	}
	function registerDirectEvent(registrationName, dependencies) {
	  registrationNameDependencies[registrationName] = dependencies;
	  for (
	    registrationName = 0;
	    registrationName < dependencies.length;
	    registrationName++
	  )
	    allNativeEvents.add(dependencies[registrationName]);
	}
	var VALID_ATTRIBUTE_NAME_REGEX = RegExp(
	    "^[:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD][:A-Z_a-z\\u00C0-\\u00D6\\u00D8-\\u00F6\\u00F8-\\u02FF\\u0370-\\u037D\\u037F-\\u1FFF\\u200C-\\u200D\\u2070-\\u218F\\u2C00-\\u2FEF\\u3001-\\uD7FF\\uF900-\\uFDCF\\uFDF0-\\uFFFD\\-.0-9\\u00B7\\u0300-\\u036F\\u203F-\\u2040]*$"
	  ),
	  illegalAttributeNameCache = {},
	  validatedAttributeNameCache = {};
	function isAttributeNameSafe(attributeName) {
	  if (hasOwnProperty.call(validatedAttributeNameCache, attributeName))
	    return true;
	  if (hasOwnProperty.call(illegalAttributeNameCache, attributeName)) return false;
	  if (VALID_ATTRIBUTE_NAME_REGEX.test(attributeName))
	    return (validatedAttributeNameCache[attributeName] = true);
	  illegalAttributeNameCache[attributeName] = true;
	  return false;
	}
	function setValueForAttribute(node, name, value) {
	  if (isAttributeNameSafe(name))
	    if (null === value) node.removeAttribute(name);
	    else {
	      switch (typeof value) {
	        case "undefined":
	        case "function":
	        case "symbol":
	          node.removeAttribute(name);
	          return;
	        case "boolean":
	          var prefix$8 = name.toLowerCase().slice(0, 5);
	          if ("data-" !== prefix$8 && "aria-" !== prefix$8) {
	            node.removeAttribute(name);
	            return;
	          }
	      }
	      node.setAttribute(name, "" + value);
	    }
	}
	function setValueForKnownAttribute(node, name, value) {
	  if (null === value) node.removeAttribute(name);
	  else {
	    switch (typeof value) {
	      case "undefined":
	      case "function":
	      case "symbol":
	      case "boolean":
	        node.removeAttribute(name);
	        return;
	    }
	    node.setAttribute(name, "" + value);
	  }
	}
	function setValueForNamespacedAttribute(node, namespace, name, value) {
	  if (null === value) node.removeAttribute(name);
	  else {
	    switch (typeof value) {
	      case "undefined":
	      case "function":
	      case "symbol":
	      case "boolean":
	        node.removeAttribute(name);
	        return;
	    }
	    node.setAttributeNS(namespace, name, "" + value);
	  }
	}
	var prefix, suffix;
	function describeBuiltInComponentFrame(name) {
	  if (void 0 === prefix)
	    try {
	      throw Error();
	    } catch (x) {
	      var match = x.stack.trim().match(/\n( *(at )?)/);
	      prefix = (match && match[1]) || "";
	      suffix =
	        -1 < x.stack.indexOf("\n    at")
	          ? " (<anonymous>)"
	          : -1 < x.stack.indexOf("@")
	            ? "@unknown:0:0"
	            : "";
	    }
	  return "\n" + prefix + name + suffix;
	}
	var reentry = false;
	function describeNativeComponentFrame(fn, construct) {
	  if (!fn || reentry) return "";
	  reentry = true;
	  var previousPrepareStackTrace = Error.prepareStackTrace;
	  Error.prepareStackTrace = void 0;
	  try {
	    var RunInRootFrame = {
	      DetermineComponentFrameRoot: function () {
	        try {
	          if (construct) {
	            var Fake = function () {
	              throw Error();
	            };
	            Object.defineProperty(Fake.prototype, "props", {
	              set: function () {
	                throw Error();
	              }
	            });
	            if ("object" === typeof Reflect && Reflect.construct) {
	              try {
	                Reflect.construct(Fake, []);
	              } catch (x) {
	                var control = x;
	              }
	              Reflect.construct(fn, [], Fake);
	            } else {
	              try {
	                Fake.call();
	              } catch (x$9) {
	                control = x$9;
	              }
	              fn.call(Fake.prototype);
	            }
	          } else {
	            try {
	              throw Error();
	            } catch (x$10) {
	              control = x$10;
	            }
	            (Fake = fn()) &&
	              "function" === typeof Fake.catch &&
	              Fake.catch(function () {});
	          }
	        } catch (sample) {
	          if (sample && control && "string" === typeof sample.stack)
	            return [sample.stack, control.stack];
	        }
	        return [null, null];
	      }
	    };
	    RunInRootFrame.DetermineComponentFrameRoot.displayName =
	      "DetermineComponentFrameRoot";
	    var namePropDescriptor = Object.getOwnPropertyDescriptor(
	      RunInRootFrame.DetermineComponentFrameRoot,
	      "name"
	    );
	    namePropDescriptor &&
	      namePropDescriptor.configurable &&
	      Object.defineProperty(
	        RunInRootFrame.DetermineComponentFrameRoot,
	        "name",
	        { value: "DetermineComponentFrameRoot" }
	      );
	    var _RunInRootFrame$Deter = RunInRootFrame.DetermineComponentFrameRoot(),
	      sampleStack = _RunInRootFrame$Deter[0],
	      controlStack = _RunInRootFrame$Deter[1];
	    if (sampleStack && controlStack) {
	      var sampleLines = sampleStack.split("\n"),
	        controlLines = controlStack.split("\n");
	      for (
	        namePropDescriptor = RunInRootFrame = 0;
	        RunInRootFrame < sampleLines.length &&
	        !sampleLines[RunInRootFrame].includes("DetermineComponentFrameRoot");

	      )
	        RunInRootFrame++;
	      for (
	        ;
	        namePropDescriptor < controlLines.length &&
	        !controlLines[namePropDescriptor].includes(
	          "DetermineComponentFrameRoot"
	        );

	      )
	        namePropDescriptor++;
	      if (
	        RunInRootFrame === sampleLines.length ||
	        namePropDescriptor === controlLines.length
	      )
	        for (
	          RunInRootFrame = sampleLines.length - 1,
	            namePropDescriptor = controlLines.length - 1;
	          1 <= RunInRootFrame &&
	          0 <= namePropDescriptor &&
	          sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor];

	        )
	          namePropDescriptor--;
	      for (
	        ;
	        1 <= RunInRootFrame && 0 <= namePropDescriptor;
	        RunInRootFrame--, namePropDescriptor--
	      )
	        if (sampleLines[RunInRootFrame] !== controlLines[namePropDescriptor]) {
	          if (1 !== RunInRootFrame || 1 !== namePropDescriptor) {
	            do
	              if (
	                (RunInRootFrame--,
	                namePropDescriptor--,
	                0 > namePropDescriptor ||
	                  sampleLines[RunInRootFrame] !==
	                    controlLines[namePropDescriptor])
	              ) {
	                var frame =
	                  "\n" +
	                  sampleLines[RunInRootFrame].replace(" at new ", " at ");
	                fn.displayName &&
	                  frame.includes("<anonymous>") &&
	                  (frame = frame.replace("<anonymous>", fn.displayName));
	                return frame;
	              }
	            while (1 <= RunInRootFrame && 0 <= namePropDescriptor);
	          }
	          break;
	        }
	    }
	  } finally {
	    (reentry = false), (Error.prepareStackTrace = previousPrepareStackTrace);
	  }
	  return (previousPrepareStackTrace = fn ? fn.displayName || fn.name : "")
	    ? describeBuiltInComponentFrame(previousPrepareStackTrace)
	    : "";
	}
	function describeFiber(fiber) {
	  switch (fiber.tag) {
	    case 26:
	    case 27:
	    case 5:
	      return describeBuiltInComponentFrame(fiber.type);
	    case 16:
	      return describeBuiltInComponentFrame("Lazy");
	    case 13:
	      return describeBuiltInComponentFrame("Suspense");
	    case 19:
	      return describeBuiltInComponentFrame("SuspenseList");
	    case 0:
	    case 15:
	      return describeNativeComponentFrame(fiber.type, false);
	    case 11:
	      return describeNativeComponentFrame(fiber.type.render, false);
	    case 1:
	      return describeNativeComponentFrame(fiber.type, true);
	    case 31:
	      return describeBuiltInComponentFrame("Activity");
	    default:
	      return "";
	  }
	}
	function getStackByFiberInDevAndProd(workInProgress) {
	  try {
	    var info = "";
	    do
	      (info += describeFiber(workInProgress)),
	        (workInProgress = workInProgress.return);
	    while (workInProgress);
	    return info;
	  } catch (x) {
	    return "\nError generating stack: " + x.message + "\n" + x.stack;
	  }
	}
	function getToStringValue(value) {
	  switch (typeof value) {
	    case "bigint":
	    case "boolean":
	    case "number":
	    case "string":
	    case "undefined":
	      return value;
	    case "object":
	      return value;
	    default:
	      return "";
	  }
	}
	function isCheckable(elem) {
	  var type = elem.type;
	  return (
	    (elem = elem.nodeName) &&
	    "input" === elem.toLowerCase() &&
	    ("checkbox" === type || "radio" === type)
	  );
	}
	function trackValueOnNode(node) {
	  var valueField = isCheckable(node) ? "checked" : "value",
	    descriptor = Object.getOwnPropertyDescriptor(
	      node.constructor.prototype,
	      valueField
	    ),
	    currentValue = "" + node[valueField];
	  if (
	    !node.hasOwnProperty(valueField) &&
	    "undefined" !== typeof descriptor &&
	    "function" === typeof descriptor.get &&
	    "function" === typeof descriptor.set
	  ) {
	    var get = descriptor.get,
	      set = descriptor.set;
	    Object.defineProperty(node, valueField, {
	      configurable: true,
	      get: function () {
	        return get.call(this);
	      },
	      set: function (value) {
	        currentValue = "" + value;
	        set.call(this, value);
	      }
	    });
	    Object.defineProperty(node, valueField, {
	      enumerable: descriptor.enumerable
	    });
	    return {
	      getValue: function () {
	        return currentValue;
	      },
	      setValue: function (value) {
	        currentValue = "" + value;
	      },
	      stopTracking: function () {
	        node._valueTracker = null;
	        delete node[valueField];
	      }
	    };
	  }
	}
	function track(node) {
	  node._valueTracker || (node._valueTracker = trackValueOnNode(node));
	}
	function updateValueIfChanged(node) {
	  if (!node) return false;
	  var tracker = node._valueTracker;
	  if (!tracker) return true;
	  var lastValue = tracker.getValue();
	  var value = "";
	  node &&
	    (value = isCheckable(node)
	      ? node.checked
	        ? "true"
	        : "false"
	      : node.value);
	  node = value;
	  return node !== lastValue ? (tracker.setValue(node), true) : false;
	}
	function getActiveElement(doc) {
	  doc = doc || ("undefined" !== typeof document ? document : void 0);
	  if ("undefined" === typeof doc) return null;
	  try {
	    return doc.activeElement || doc.body;
	  } catch (e) {
	    return doc.body;
	  }
	}
	var escapeSelectorAttributeValueInsideDoubleQuotesRegex = /[\n"\\]/g;
	function escapeSelectorAttributeValueInsideDoubleQuotes(value) {
	  return value.replace(
	    escapeSelectorAttributeValueInsideDoubleQuotesRegex,
	    function (ch) {
	      return "\\" + ch.charCodeAt(0).toString(16) + " ";
	    }
	  );
	}
	function updateInput(
	  element,
	  value,
	  defaultValue,
	  lastDefaultValue,
	  checked,
	  defaultChecked,
	  type,
	  name
	) {
	  element.name = "";
	  null != type &&
	  "function" !== typeof type &&
	  "symbol" !== typeof type &&
	  "boolean" !== typeof type
	    ? (element.type = type)
	    : element.removeAttribute("type");
	  if (null != value)
	    if ("number" === type) {
	      if ((0 === value && "" === element.value) || element.value != value)
	        element.value = "" + getToStringValue(value);
	    } else
	      element.value !== "" + getToStringValue(value) &&
	        (element.value = "" + getToStringValue(value));
	  else
	    ("submit" !== type && "reset" !== type) || element.removeAttribute("value");
	  null != value
	    ? setDefaultValue(element, type, getToStringValue(value))
	    : null != defaultValue
	      ? setDefaultValue(element, type, getToStringValue(defaultValue))
	      : null != lastDefaultValue && element.removeAttribute("value");
	  null == checked &&
	    null != defaultChecked &&
	    (element.defaultChecked = !!defaultChecked);
	  null != checked &&
	    (element.checked =
	      checked && "function" !== typeof checked && "symbol" !== typeof checked);
	  null != name &&
	  "function" !== typeof name &&
	  "symbol" !== typeof name &&
	  "boolean" !== typeof name
	    ? (element.name = "" + getToStringValue(name))
	    : element.removeAttribute("name");
	}
	function initInput(
	  element,
	  value,
	  defaultValue,
	  checked,
	  defaultChecked,
	  type,
	  name,
	  isHydrating
	) {
	  null != type &&
	    "function" !== typeof type &&
	    "symbol" !== typeof type &&
	    "boolean" !== typeof type &&
	    (element.type = type);
	  if (null != value || null != defaultValue) {
	    if (
	      !(
	        ("submit" !== type && "reset" !== type) ||
	        (void 0 !== value && null !== value)
	      )
	    )
	      return;
	    defaultValue =
	      null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	    value = null != value ? "" + getToStringValue(value) : defaultValue;
	    isHydrating || value === element.value || (element.value = value);
	    element.defaultValue = value;
	  }
	  checked = null != checked ? checked : defaultChecked;
	  checked =
	    "function" !== typeof checked && "symbol" !== typeof checked && !!checked;
	  element.checked = isHydrating ? element.checked : !!checked;
	  element.defaultChecked = !!checked;
	  null != name &&
	    "function" !== typeof name &&
	    "symbol" !== typeof name &&
	    "boolean" !== typeof name &&
	    (element.name = name);
	}
	function setDefaultValue(node, type, value) {
	  ("number" === type && getActiveElement(node.ownerDocument) === node) ||
	    node.defaultValue === "" + value ||
	    (node.defaultValue = "" + value);
	}
	function updateOptions(node, multiple, propValue, setDefaultSelected) {
	  node = node.options;
	  if (multiple) {
	    multiple = {};
	    for (var i = 0; i < propValue.length; i++)
	      multiple["$" + propValue[i]] = true;
	    for (propValue = 0; propValue < node.length; propValue++)
	      (i = multiple.hasOwnProperty("$" + node[propValue].value)),
	        node[propValue].selected !== i && (node[propValue].selected = i),
	        i && setDefaultSelected && (node[propValue].defaultSelected = true);
	  } else {
	    propValue = "" + getToStringValue(propValue);
	    multiple = null;
	    for (i = 0; i < node.length; i++) {
	      if (node[i].value === propValue) {
	        node[i].selected = true;
	        setDefaultSelected && (node[i].defaultSelected = true);
	        return;
	      }
	      null !== multiple || node[i].disabled || (multiple = node[i]);
	    }
	    null !== multiple && (multiple.selected = true);
	  }
	}
	function updateTextarea(element, value, defaultValue) {
	  if (
	    null != value &&
	    ((value = "" + getToStringValue(value)),
	    value !== element.value && (element.value = value),
	    null == defaultValue)
	  ) {
	    element.defaultValue !== value && (element.defaultValue = value);
	    return;
	  }
	  element.defaultValue =
	    null != defaultValue ? "" + getToStringValue(defaultValue) : "";
	}
	function initTextarea(element, value, defaultValue, children) {
	  if (null == value) {
	    if (null != children) {
	      if (null != defaultValue) throw Error(formatProdErrorMessage(92));
	      if (isArrayImpl(children)) {
	        if (1 < children.length) throw Error(formatProdErrorMessage(93));
	        children = children[0];
	      }
	      defaultValue = children;
	    }
	    null == defaultValue && (defaultValue = "");
	    value = defaultValue;
	  }
	  defaultValue = getToStringValue(value);
	  element.defaultValue = defaultValue;
	  children = element.textContent;
	  children === defaultValue &&
	    "" !== children &&
	    null !== children &&
	    (element.value = children);
	}
	function setTextContent(node, text) {
	  if (text) {
	    var firstChild = node.firstChild;
	    if (
	      firstChild &&
	      firstChild === node.lastChild &&
	      3 === firstChild.nodeType
	    ) {
	      firstChild.nodeValue = text;
	      return;
	    }
	  }
	  node.textContent = text;
	}
	var unitlessNumbers = new Set(
	  "animationIterationCount aspectRatio borderImageOutset borderImageSlice borderImageWidth boxFlex boxFlexGroup boxOrdinalGroup columnCount columns flex flexGrow flexPositive flexShrink flexNegative flexOrder gridArea gridRow gridRowEnd gridRowSpan gridRowStart gridColumn gridColumnEnd gridColumnSpan gridColumnStart fontWeight lineClamp lineHeight opacity order orphans scale tabSize widows zIndex zoom fillOpacity floodOpacity stopOpacity strokeDasharray strokeDashoffset strokeMiterlimit strokeOpacity strokeWidth MozAnimationIterationCount MozBoxFlex MozBoxFlexGroup MozLineClamp msAnimationIterationCount msFlex msZoom msFlexGrow msFlexNegative msFlexOrder msFlexPositive msFlexShrink msGridColumn msGridColumnSpan msGridRow msGridRowSpan WebkitAnimationIterationCount WebkitBoxFlex WebKitBoxFlexGroup WebkitBoxOrdinalGroup WebkitColumnCount WebkitColumns WebkitFlex WebkitFlexGrow WebkitFlexPositive WebkitFlexShrink WebkitLineClamp".split(
	    " "
	  )
	);
	function setValueForStyle(style, styleName, value) {
	  var isCustomProperty = 0 === styleName.indexOf("--");
	  null == value || "boolean" === typeof value || "" === value
	    ? isCustomProperty
	      ? style.setProperty(styleName, "")
	      : "float" === styleName
	        ? (style.cssFloat = "")
	        : (style[styleName] = "")
	    : isCustomProperty
	      ? style.setProperty(styleName, value)
	      : "number" !== typeof value ||
	          0 === value ||
	          unitlessNumbers.has(styleName)
	        ? "float" === styleName
	          ? (style.cssFloat = value)
	          : (style[styleName] = ("" + value).trim())
	        : (style[styleName] = value + "px");
	}
	function setValueForStyles(node, styles, prevStyles) {
	  if (null != styles && "object" !== typeof styles)
	    throw Error(formatProdErrorMessage(62));
	  node = node.style;
	  if (null != prevStyles) {
	    for (var styleName in prevStyles)
	      !prevStyles.hasOwnProperty(styleName) ||
	        (null != styles && styles.hasOwnProperty(styleName)) ||
	        (0 === styleName.indexOf("--")
	          ? node.setProperty(styleName, "")
	          : "float" === styleName
	            ? (node.cssFloat = "")
	            : (node[styleName] = ""));
	    for (var styleName$16 in styles)
	      (styleName = styles[styleName$16]),
	        styles.hasOwnProperty(styleName$16) &&
	          prevStyles[styleName$16] !== styleName &&
	          setValueForStyle(node, styleName$16, styleName);
	  } else
	    for (var styleName$17 in styles)
	      styles.hasOwnProperty(styleName$17) &&
	        setValueForStyle(node, styleName$17, styles[styleName$17]);
	}
	function isCustomElement(tagName) {
	  if (-1 === tagName.indexOf("-")) return false;
	  switch (tagName) {
	    case "annotation-xml":
	    case "color-profile":
	    case "font-face":
	    case "font-face-src":
	    case "font-face-uri":
	    case "font-face-format":
	    case "font-face-name":
	    case "missing-glyph":
	      return false;
	    default:
	      return true;
	  }
	}
	var aliases = new Map([
	    ["acceptCharset", "accept-charset"],
	    ["htmlFor", "for"],
	    ["httpEquiv", "http-equiv"],
	    ["crossOrigin", "crossorigin"],
	    ["accentHeight", "accent-height"],
	    ["alignmentBaseline", "alignment-baseline"],
	    ["arabicForm", "arabic-form"],
	    ["baselineShift", "baseline-shift"],
	    ["capHeight", "cap-height"],
	    ["clipPath", "clip-path"],
	    ["clipRule", "clip-rule"],
	    ["colorInterpolation", "color-interpolation"],
	    ["colorInterpolationFilters", "color-interpolation-filters"],
	    ["colorProfile", "color-profile"],
	    ["colorRendering", "color-rendering"],
	    ["dominantBaseline", "dominant-baseline"],
	    ["enableBackground", "enable-background"],
	    ["fillOpacity", "fill-opacity"],
	    ["fillRule", "fill-rule"],
	    ["floodColor", "flood-color"],
	    ["floodOpacity", "flood-opacity"],
	    ["fontFamily", "font-family"],
	    ["fontSize", "font-size"],
	    ["fontSizeAdjust", "font-size-adjust"],
	    ["fontStretch", "font-stretch"],
	    ["fontStyle", "font-style"],
	    ["fontVariant", "font-variant"],
	    ["fontWeight", "font-weight"],
	    ["glyphName", "glyph-name"],
	    ["glyphOrientationHorizontal", "glyph-orientation-horizontal"],
	    ["glyphOrientationVertical", "glyph-orientation-vertical"],
	    ["horizAdvX", "horiz-adv-x"],
	    ["horizOriginX", "horiz-origin-x"],
	    ["imageRendering", "image-rendering"],
	    ["letterSpacing", "letter-spacing"],
	    ["lightingColor", "lighting-color"],
	    ["markerEnd", "marker-end"],
	    ["markerMid", "marker-mid"],
	    ["markerStart", "marker-start"],
	    ["overlinePosition", "overline-position"],
	    ["overlineThickness", "overline-thickness"],
	    ["paintOrder", "paint-order"],
	    ["panose-1", "panose-1"],
	    ["pointerEvents", "pointer-events"],
	    ["renderingIntent", "rendering-intent"],
	    ["shapeRendering", "shape-rendering"],
	    ["stopColor", "stop-color"],
	    ["stopOpacity", "stop-opacity"],
	    ["strikethroughPosition", "strikethrough-position"],
	    ["strikethroughThickness", "strikethrough-thickness"],
	    ["strokeDasharray", "stroke-dasharray"],
	    ["strokeDashoffset", "stroke-dashoffset"],
	    ["strokeLinecap", "stroke-linecap"],
	    ["strokeLinejoin", "stroke-linejoin"],
	    ["strokeMiterlimit", "stroke-miterlimit"],
	    ["strokeOpacity", "stroke-opacity"],
	    ["strokeWidth", "stroke-width"],
	    ["textAnchor", "text-anchor"],
	    ["textDecoration", "text-decoration"],
	    ["textRendering", "text-rendering"],
	    ["transformOrigin", "transform-origin"],
	    ["underlinePosition", "underline-position"],
	    ["underlineThickness", "underline-thickness"],
	    ["unicodeBidi", "unicode-bidi"],
	    ["unicodeRange", "unicode-range"],
	    ["unitsPerEm", "units-per-em"],
	    ["vAlphabetic", "v-alphabetic"],
	    ["vHanging", "v-hanging"],
	    ["vIdeographic", "v-ideographic"],
	    ["vMathematical", "v-mathematical"],
	    ["vectorEffect", "vector-effect"],
	    ["vertAdvY", "vert-adv-y"],
	    ["vertOriginX", "vert-origin-x"],
	    ["vertOriginY", "vert-origin-y"],
	    ["wordSpacing", "word-spacing"],
	    ["writingMode", "writing-mode"],
	    ["xmlnsXlink", "xmlns:xlink"],
	    ["xHeight", "x-height"]
	  ]),
	  isJavaScriptProtocol =
	    /^[\u0000-\u001F ]*j[\r\n\t]*a[\r\n\t]*v[\r\n\t]*a[\r\n\t]*s[\r\n\t]*c[\r\n\t]*r[\r\n\t]*i[\r\n\t]*p[\r\n\t]*t[\r\n\t]*:/i;
	function sanitizeURL(url) {
	  return isJavaScriptProtocol.test("" + url)
	    ? "javascript:throw new Error('React has blocked a javascript: URL as a security precaution.')"
	    : url;
	}
	var currentReplayingEvent = null;
	function getEventTarget(nativeEvent) {
	  nativeEvent = nativeEvent.target || nativeEvent.srcElement || window;
	  nativeEvent.correspondingUseElement &&
	    (nativeEvent = nativeEvent.correspondingUseElement);
	  return 3 === nativeEvent.nodeType ? nativeEvent.parentNode : nativeEvent;
	}
	var restoreTarget = null,
	  restoreQueue = null;
	function restoreStateOfTarget(target) {
	  var internalInstance = getInstanceFromNode(target);
	  if (internalInstance && (target = internalInstance.stateNode)) {
	    var props = target[internalPropsKey] || null;
	    a: switch (((target = internalInstance.stateNode), internalInstance.type)) {
	      case "input":
	        updateInput(
	          target,
	          props.value,
	          props.defaultValue,
	          props.defaultValue,
	          props.checked,
	          props.defaultChecked,
	          props.type,
	          props.name
	        );
	        internalInstance = props.name;
	        if ("radio" === props.type && null != internalInstance) {
	          for (props = target; props.parentNode; ) props = props.parentNode;
	          props = props.querySelectorAll(
	            'input[name="' +
	              escapeSelectorAttributeValueInsideDoubleQuotes(
	                "" + internalInstance
	              ) +
	              '"][type="radio"]'
	          );
	          for (
	            internalInstance = 0;
	            internalInstance < props.length;
	            internalInstance++
	          ) {
	            var otherNode = props[internalInstance];
	            if (otherNode !== target && otherNode.form === target.form) {
	              var otherProps = otherNode[internalPropsKey] || null;
	              if (!otherProps) throw Error(formatProdErrorMessage(90));
	              updateInput(
	                otherNode,
	                otherProps.value,
	                otherProps.defaultValue,
	                otherProps.defaultValue,
	                otherProps.checked,
	                otherProps.defaultChecked,
	                otherProps.type,
	                otherProps.name
	              );
	            }
	          }
	          for (
	            internalInstance = 0;
	            internalInstance < props.length;
	            internalInstance++
	          )
	            (otherNode = props[internalInstance]),
	              otherNode.form === target.form && updateValueIfChanged(otherNode);
	        }
	        break a;
	      case "textarea":
	        updateTextarea(target, props.value, props.defaultValue);
	        break a;
	      case "select":
	        (internalInstance = props.value),
	          null != internalInstance &&
	            updateOptions(target, !!props.multiple, internalInstance, false);
	    }
	  }
	}
	var isInsideEventHandler = false;
	function batchedUpdates$1(fn, a, b) {
	  if (isInsideEventHandler) return fn(a, b);
	  isInsideEventHandler = true;
	  try {
	    var JSCompiler_inline_result = fn(a);
	    return JSCompiler_inline_result;
	  } finally {
	    if (
	      ((isInsideEventHandler = false),
	      null !== restoreTarget || null !== restoreQueue)
	    )
	      if (
	        (flushSyncWork$1(),
	        restoreTarget &&
	          ((a = restoreTarget),
	          (fn = restoreQueue),
	          (restoreQueue = restoreTarget = null),
	          restoreStateOfTarget(a),
	          fn))
	      )
	        for (a = 0; a < fn.length; a++) restoreStateOfTarget(fn[a]);
	  }
	}
	function getListener(inst, registrationName) {
	  var stateNode = inst.stateNode;
	  if (null === stateNode) return null;
	  var props = stateNode[internalPropsKey] || null;
	  if (null === props) return null;
	  stateNode = props[registrationName];
	  a: switch (registrationName) {
	    case "onClick":
	    case "onClickCapture":
	    case "onDoubleClick":
	    case "onDoubleClickCapture":
	    case "onMouseDown":
	    case "onMouseDownCapture":
	    case "onMouseMove":
	    case "onMouseMoveCapture":
	    case "onMouseUp":
	    case "onMouseUpCapture":
	    case "onMouseEnter":
	      (props = !props.disabled) ||
	        ((inst = inst.type),
	        (props = !(
	          "button" === inst ||
	          "input" === inst ||
	          "select" === inst ||
	          "textarea" === inst
	        )));
	      inst = !props;
	      break a;
	    default:
	      inst = false;
	  }
	  if (inst) return null;
	  if (stateNode && "function" !== typeof stateNode)
	    throw Error(
	      formatProdErrorMessage(231, registrationName, typeof stateNode)
	    );
	  return stateNode;
	}
	var canUseDOM = !(
	    "undefined" === typeof window ||
	    "undefined" === typeof window.document ||
	    "undefined" === typeof window.document.createElement
	  ),
	  passiveBrowserEventsSupported = false;
	if (canUseDOM)
	  try {
	    var options = {};
	    Object.defineProperty(options, "passive", {
	      get: function () {
	        passiveBrowserEventsSupported = !0;
	      }
	    });
	    window.addEventListener("test", options, options);
	    window.removeEventListener("test", options, options);
	  } catch (e) {
	    passiveBrowserEventsSupported = false;
	  }
	var root = null,
	  startText = null,
	  fallbackText = null;
	function getData() {
	  if (fallbackText) return fallbackText;
	  var start,
	    startValue = startText,
	    startLength = startValue.length,
	    end,
	    endValue = "value" in root ? root.value : root.textContent,
	    endLength = endValue.length;
	  for (
	    start = 0;
	    start < startLength && startValue[start] === endValue[start];
	    start++
	  );
	  var minEnd = startLength - start;
	  for (
	    end = 1;
	    end <= minEnd &&
	    startValue[startLength - end] === endValue[endLength - end];
	    end++
	  );
	  return (fallbackText = endValue.slice(start, 1 < end ? 1 - end : void 0));
	}
	function getEventCharCode(nativeEvent) {
	  var keyCode = nativeEvent.keyCode;
	  "charCode" in nativeEvent
	    ? ((nativeEvent = nativeEvent.charCode),
	      0 === nativeEvent && 13 === keyCode && (nativeEvent = 13))
	    : (nativeEvent = keyCode);
	  10 === nativeEvent && (nativeEvent = 13);
	  return 32 <= nativeEvent || 13 === nativeEvent ? nativeEvent : 0;
	}
	function functionThatReturnsTrue() {
	  return true;
	}
	function functionThatReturnsFalse() {
	  return false;
	}
	function createSyntheticEvent(Interface) {
	  function SyntheticBaseEvent(
	    reactName,
	    reactEventType,
	    targetInst,
	    nativeEvent,
	    nativeEventTarget
	  ) {
	    this._reactName = reactName;
	    this._targetInst = targetInst;
	    this.type = reactEventType;
	    this.nativeEvent = nativeEvent;
	    this.target = nativeEventTarget;
	    this.currentTarget = null;
	    for (var propName in Interface)
	      Interface.hasOwnProperty(propName) &&
	        ((reactName = Interface[propName]),
	        (this[propName] = reactName
	          ? reactName(nativeEvent)
	          : nativeEvent[propName]));
	    this.isDefaultPrevented = (
	      null != nativeEvent.defaultPrevented
	        ? nativeEvent.defaultPrevented
	        : false === nativeEvent.returnValue
	    )
	      ? functionThatReturnsTrue
	      : functionThatReturnsFalse;
	    this.isPropagationStopped = functionThatReturnsFalse;
	    return this;
	  }
	  assign(SyntheticBaseEvent.prototype, {
	    preventDefault: function () {
	      this.defaultPrevented = true;
	      var event = this.nativeEvent;
	      event &&
	        (event.preventDefault
	          ? event.preventDefault()
	          : "unknown" !== typeof event.returnValue && (event.returnValue = false),
	        (this.isDefaultPrevented = functionThatReturnsTrue));
	    },
	    stopPropagation: function () {
	      var event = this.nativeEvent;
	      event &&
	        (event.stopPropagation
	          ? event.stopPropagation()
	          : "unknown" !== typeof event.cancelBubble &&
	            (event.cancelBubble = true),
	        (this.isPropagationStopped = functionThatReturnsTrue));
	    },
	    persist: function () {},
	    isPersistent: functionThatReturnsTrue
	  });
	  return SyntheticBaseEvent;
	}
	var EventInterface = {
	    eventPhase: 0,
	    bubbles: 0,
	    cancelable: 0,
	    timeStamp: function (event) {
	      return event.timeStamp || Date.now();
	    },
	    defaultPrevented: 0,
	    isTrusted: 0
	  },
	  SyntheticEvent = createSyntheticEvent(EventInterface),
	  UIEventInterface = assign({}, EventInterface, { view: 0, detail: 0 }),
	  SyntheticUIEvent = createSyntheticEvent(UIEventInterface),
	  lastMovementX,
	  lastMovementY,
	  lastMouseEvent,
	  MouseEventInterface = assign({}, UIEventInterface, {
	    screenX: 0,
	    screenY: 0,
	    clientX: 0,
	    clientY: 0,
	    pageX: 0,
	    pageY: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    getModifierState: getEventModifierState,
	    button: 0,
	    buttons: 0,
	    relatedTarget: function (event) {
	      return void 0 === event.relatedTarget
	        ? event.fromElement === event.srcElement
	          ? event.toElement
	          : event.fromElement
	        : event.relatedTarget;
	    },
	    movementX: function (event) {
	      if ("movementX" in event) return event.movementX;
	      event !== lastMouseEvent &&
	        (lastMouseEvent && "mousemove" === event.type
	          ? ((lastMovementX = event.screenX - lastMouseEvent.screenX),
	            (lastMovementY = event.screenY - lastMouseEvent.screenY))
	          : (lastMovementY = lastMovementX = 0),
	        (lastMouseEvent = event));
	      return lastMovementX;
	    },
	    movementY: function (event) {
	      return "movementY" in event ? event.movementY : lastMovementY;
	    }
	  }),
	  SyntheticMouseEvent = createSyntheticEvent(MouseEventInterface),
	  DragEventInterface = assign({}, MouseEventInterface, { dataTransfer: 0 }),
	  SyntheticDragEvent = createSyntheticEvent(DragEventInterface),
	  FocusEventInterface = assign({}, UIEventInterface, { relatedTarget: 0 }),
	  SyntheticFocusEvent = createSyntheticEvent(FocusEventInterface),
	  AnimationEventInterface = assign({}, EventInterface, {
	    animationName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  SyntheticAnimationEvent = createSyntheticEvent(AnimationEventInterface),
	  ClipboardEventInterface = assign({}, EventInterface, {
	    clipboardData: function (event) {
	      return "clipboardData" in event
	        ? event.clipboardData
	        : window.clipboardData;
	    }
	  }),
	  SyntheticClipboardEvent = createSyntheticEvent(ClipboardEventInterface),
	  CompositionEventInterface = assign({}, EventInterface, { data: 0 }),
	  SyntheticCompositionEvent = createSyntheticEvent(CompositionEventInterface),
	  normalizeKey = {
	    Esc: "Escape",
	    Spacebar: " ",
	    Left: "ArrowLeft",
	    Up: "ArrowUp",
	    Right: "ArrowRight",
	    Down: "ArrowDown",
	    Del: "Delete",
	    Win: "OS",
	    Menu: "ContextMenu",
	    Apps: "ContextMenu",
	    Scroll: "ScrollLock",
	    MozPrintableKey: "Unidentified"
	  },
	  translateToKey = {
	    8: "Backspace",
	    9: "Tab",
	    12: "Clear",
	    13: "Enter",
	    16: "Shift",
	    17: "Control",
	    18: "Alt",
	    19: "Pause",
	    20: "CapsLock",
	    27: "Escape",
	    32: " ",
	    33: "PageUp",
	    34: "PageDown",
	    35: "End",
	    36: "Home",
	    37: "ArrowLeft",
	    38: "ArrowUp",
	    39: "ArrowRight",
	    40: "ArrowDown",
	    45: "Insert",
	    46: "Delete",
	    112: "F1",
	    113: "F2",
	    114: "F3",
	    115: "F4",
	    116: "F5",
	    117: "F6",
	    118: "F7",
	    119: "F8",
	    120: "F9",
	    121: "F10",
	    122: "F11",
	    123: "F12",
	    144: "NumLock",
	    145: "ScrollLock",
	    224: "Meta"
	  },
	  modifierKeyToProp = {
	    Alt: "altKey",
	    Control: "ctrlKey",
	    Meta: "metaKey",
	    Shift: "shiftKey"
	  };
	function modifierStateGetter(keyArg) {
	  var nativeEvent = this.nativeEvent;
	  return nativeEvent.getModifierState
	    ? nativeEvent.getModifierState(keyArg)
	    : (keyArg = modifierKeyToProp[keyArg])
	      ? !!nativeEvent[keyArg]
	      : false;
	}
	function getEventModifierState() {
	  return modifierStateGetter;
	}
	var KeyboardEventInterface = assign({}, UIEventInterface, {
	    key: function (nativeEvent) {
	      if (nativeEvent.key) {
	        var key = normalizeKey[nativeEvent.key] || nativeEvent.key;
	        if ("Unidentified" !== key) return key;
	      }
	      return "keypress" === nativeEvent.type
	        ? ((nativeEvent = getEventCharCode(nativeEvent)),
	          13 === nativeEvent ? "Enter" : String.fromCharCode(nativeEvent))
	        : "keydown" === nativeEvent.type || "keyup" === nativeEvent.type
	          ? translateToKey[nativeEvent.keyCode] || "Unidentified"
	          : "";
	    },
	    code: 0,
	    location: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    altKey: 0,
	    metaKey: 0,
	    repeat: 0,
	    locale: 0,
	    getModifierState: getEventModifierState,
	    charCode: function (event) {
	      return "keypress" === event.type ? getEventCharCode(event) : 0;
	    },
	    keyCode: function (event) {
	      return "keydown" === event.type || "keyup" === event.type
	        ? event.keyCode
	        : 0;
	    },
	    which: function (event) {
	      return "keypress" === event.type
	        ? getEventCharCode(event)
	        : "keydown" === event.type || "keyup" === event.type
	          ? event.keyCode
	          : 0;
	    }
	  }),
	  SyntheticKeyboardEvent = createSyntheticEvent(KeyboardEventInterface),
	  PointerEventInterface = assign({}, MouseEventInterface, {
	    pointerId: 0,
	    width: 0,
	    height: 0,
	    pressure: 0,
	    tangentialPressure: 0,
	    tiltX: 0,
	    tiltY: 0,
	    twist: 0,
	    pointerType: 0,
	    isPrimary: 0
	  }),
	  SyntheticPointerEvent = createSyntheticEvent(PointerEventInterface),
	  TouchEventInterface = assign({}, UIEventInterface, {
	    touches: 0,
	    targetTouches: 0,
	    changedTouches: 0,
	    altKey: 0,
	    metaKey: 0,
	    ctrlKey: 0,
	    shiftKey: 0,
	    getModifierState: getEventModifierState
	  }),
	  SyntheticTouchEvent = createSyntheticEvent(TouchEventInterface),
	  TransitionEventInterface = assign({}, EventInterface, {
	    propertyName: 0,
	    elapsedTime: 0,
	    pseudoElement: 0
	  }),
	  SyntheticTransitionEvent = createSyntheticEvent(TransitionEventInterface),
	  WheelEventInterface = assign({}, MouseEventInterface, {
	    deltaX: function (event) {
	      return "deltaX" in event
	        ? event.deltaX
	        : "wheelDeltaX" in event
	          ? -event.wheelDeltaX
	          : 0;
	    },
	    deltaY: function (event) {
	      return "deltaY" in event
	        ? event.deltaY
	        : "wheelDeltaY" in event
	          ? -event.wheelDeltaY
	          : "wheelDelta" in event
	            ? -event.wheelDelta
	            : 0;
	    },
	    deltaZ: 0,
	    deltaMode: 0
	  }),
	  SyntheticWheelEvent = createSyntheticEvent(WheelEventInterface),
	  ToggleEventInterface = assign({}, EventInterface, {
	    newState: 0,
	    oldState: 0
	  }),
	  SyntheticToggleEvent = createSyntheticEvent(ToggleEventInterface),
	  END_KEYCODES = [9, 13, 27, 32],
	  canUseCompositionEvent = canUseDOM && "CompositionEvent" in window,
	  documentMode = null;
	canUseDOM &&
	  "documentMode" in document &&
	  (documentMode = document.documentMode);
	var canUseTextInputEvent = canUseDOM && "TextEvent" in window && !documentMode,
	  useFallbackCompositionData =
	    canUseDOM &&
	    (!canUseCompositionEvent ||
	      (documentMode && 8 < documentMode && 11 >= documentMode)),
	  SPACEBAR_CHAR = String.fromCharCode(32),
	  hasSpaceKeypress = false;
	function isFallbackCompositionEnd(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "keyup":
	      return -1 !== END_KEYCODES.indexOf(nativeEvent.keyCode);
	    case "keydown":
	      return 229 !== nativeEvent.keyCode;
	    case "keypress":
	    case "mousedown":
	    case "focusout":
	      return true;
	    default:
	      return false;
	  }
	}
	function getDataFromCustomEvent(nativeEvent) {
	  nativeEvent = nativeEvent.detail;
	  return "object" === typeof nativeEvent && "data" in nativeEvent
	    ? nativeEvent.data
	    : null;
	}
	var isComposing = false;
	function getNativeBeforeInputChars(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "compositionend":
	      return getDataFromCustomEvent(nativeEvent);
	    case "keypress":
	      if (32 !== nativeEvent.which) return null;
	      hasSpaceKeypress = true;
	      return SPACEBAR_CHAR;
	    case "textInput":
	      return (
	        (domEventName = nativeEvent.data),
	        domEventName === SPACEBAR_CHAR && hasSpaceKeypress ? null : domEventName
	      );
	    default:
	      return null;
	  }
	}
	function getFallbackBeforeInputChars(domEventName, nativeEvent) {
	  if (isComposing)
	    return "compositionend" === domEventName ||
	      (!canUseCompositionEvent &&
	        isFallbackCompositionEnd(domEventName, nativeEvent))
	      ? ((domEventName = getData()),
	        (fallbackText = startText = root = null),
	        (isComposing = false),
	        domEventName)
	      : null;
	  switch (domEventName) {
	    case "paste":
	      return null;
	    case "keypress":
	      if (
	        !(nativeEvent.ctrlKey || nativeEvent.altKey || nativeEvent.metaKey) ||
	        (nativeEvent.ctrlKey && nativeEvent.altKey)
	      ) {
	        if (nativeEvent.char && 1 < nativeEvent.char.length)
	          return nativeEvent.char;
	        if (nativeEvent.which) return String.fromCharCode(nativeEvent.which);
	      }
	      return null;
	    case "compositionend":
	      return useFallbackCompositionData && "ko" !== nativeEvent.locale
	        ? null
	        : nativeEvent.data;
	    default:
	      return null;
	  }
	}
	var supportedInputTypes = {
	  color: true,
	  date: true,
	  datetime: true,
	  "datetime-local": true,
	  email: true,
	  month: true,
	  number: true,
	  password: true,
	  range: true,
	  search: true,
	  tel: true,
	  text: true,
	  time: true,
	  url: true,
	  week: true
	};
	function isTextInputElement(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return "input" === nodeName
	    ? !!supportedInputTypes[elem.type]
	    : "textarea" === nodeName
	      ? true
	      : false;
	}
	function createAndAccumulateChangeEvent(
	  dispatchQueue,
	  inst,
	  nativeEvent,
	  target
	) {
	  restoreTarget
	    ? restoreQueue
	      ? restoreQueue.push(target)
	      : (restoreQueue = [target])
	    : (restoreTarget = target);
	  inst = accumulateTwoPhaseListeners(inst, "onChange");
	  0 < inst.length &&
	    ((nativeEvent = new SyntheticEvent(
	      "onChange",
	      "change",
	      null,
	      nativeEvent,
	      target
	    )),
	    dispatchQueue.push({ event: nativeEvent, listeners: inst }));
	}
	var activeElement$1 = null,
	  activeElementInst$1 = null;
	function runEventInBatch(dispatchQueue) {
	  processDispatchQueue(dispatchQueue, 0);
	}
	function getInstIfValueChanged(targetInst) {
	  var targetNode = getNodeFromInstance(targetInst);
	  if (updateValueIfChanged(targetNode)) return targetInst;
	}
	function getTargetInstForChangeEvent(domEventName, targetInst) {
	  if ("change" === domEventName) return targetInst;
	}
	var isInputEventSupported = false;
	if (canUseDOM) {
	  var JSCompiler_inline_result$jscomp$282;
	  if (canUseDOM) {
	    var isSupported$jscomp$inline_417 = "oninput" in document;
	    if (!isSupported$jscomp$inline_417) {
	      var element$jscomp$inline_418 = document.createElement("div");
	      element$jscomp$inline_418.setAttribute("oninput", "return;");
	      isSupported$jscomp$inline_417 =
	        "function" === typeof element$jscomp$inline_418.oninput;
	    }
	    JSCompiler_inline_result$jscomp$282 = isSupported$jscomp$inline_417;
	  } else JSCompiler_inline_result$jscomp$282 = false;
	  isInputEventSupported =
	    JSCompiler_inline_result$jscomp$282 &&
	    (!document.documentMode || 9 < document.documentMode);
	}
	function stopWatchingForValueChange() {
	  activeElement$1 &&
	    (activeElement$1.detachEvent("onpropertychange", handlePropertyChange),
	    (activeElementInst$1 = activeElement$1 = null));
	}
	function handlePropertyChange(nativeEvent) {
	  if (
	    "value" === nativeEvent.propertyName &&
	    getInstIfValueChanged(activeElementInst$1)
	  ) {
	    var dispatchQueue = [];
	    createAndAccumulateChangeEvent(
	      dispatchQueue,
	      activeElementInst$1,
	      nativeEvent,
	      getEventTarget(nativeEvent)
	    );
	    batchedUpdates$1(runEventInBatch, dispatchQueue);
	  }
	}
	function handleEventsForInputEventPolyfill(domEventName, target, targetInst) {
	  "focusin" === domEventName
	    ? (stopWatchingForValueChange(),
	      (activeElement$1 = target),
	      (activeElementInst$1 = targetInst),
	      activeElement$1.attachEvent("onpropertychange", handlePropertyChange))
	    : "focusout" === domEventName && stopWatchingForValueChange();
	}
	function getTargetInstForInputEventPolyfill(domEventName) {
	  if (
	    "selectionchange" === domEventName ||
	    "keyup" === domEventName ||
	    "keydown" === domEventName
	  )
	    return getInstIfValueChanged(activeElementInst$1);
	}
	function getTargetInstForClickEvent(domEventName, targetInst) {
	  if ("click" === domEventName) return getInstIfValueChanged(targetInst);
	}
	function getTargetInstForInputOrChangeEvent(domEventName, targetInst) {
	  if ("input" === domEventName || "change" === domEventName)
	    return getInstIfValueChanged(targetInst);
	}
	function is(x, y) {
	  return (x === y && (0 !== x || 1 / x === 1 / y)) || (x !== x && y !== y);
	}
	var objectIs = "function" === typeof Object.is ? Object.is : is;
	function shallowEqual(objA, objB) {
	  if (objectIs(objA, objB)) return true;
	  if (
	    "object" !== typeof objA ||
	    null === objA ||
	    "object" !== typeof objB ||
	    null === objB
	  )
	    return false;
	  var keysA = Object.keys(objA),
	    keysB = Object.keys(objB);
	  if (keysA.length !== keysB.length) return false;
	  for (keysB = 0; keysB < keysA.length; keysB++) {
	    var currentKey = keysA[keysB];
	    if (
	      !hasOwnProperty.call(objB, currentKey) ||
	      !objectIs(objA[currentKey], objB[currentKey])
	    )
	      return false;
	  }
	  return true;
	}
	function getLeafNode(node) {
	  for (; node && node.firstChild; ) node = node.firstChild;
	  return node;
	}
	function getNodeForCharacterOffset(root, offset) {
	  var node = getLeafNode(root);
	  root = 0;
	  for (var nodeEnd; node; ) {
	    if (3 === node.nodeType) {
	      nodeEnd = root + node.textContent.length;
	      if (root <= offset && nodeEnd >= offset)
	        return { node: node, offset: offset - root };
	      root = nodeEnd;
	    }
	    a: {
	      for (; node; ) {
	        if (node.nextSibling) {
	          node = node.nextSibling;
	          break a;
	        }
	        node = node.parentNode;
	      }
	      node = void 0;
	    }
	    node = getLeafNode(node);
	  }
	}
	function containsNode(outerNode, innerNode) {
	  return outerNode && innerNode
	    ? outerNode === innerNode
	      ? true
	      : outerNode && 3 === outerNode.nodeType
	        ? false
	        : innerNode && 3 === innerNode.nodeType
	          ? containsNode(outerNode, innerNode.parentNode)
	          : "contains" in outerNode
	            ? outerNode.contains(innerNode)
	            : outerNode.compareDocumentPosition
	              ? !!(outerNode.compareDocumentPosition(innerNode) & 16)
	              : false
	    : false;
	}
	function getActiveElementDeep(containerInfo) {
	  containerInfo =
	    null != containerInfo &&
	    null != containerInfo.ownerDocument &&
	    null != containerInfo.ownerDocument.defaultView
	      ? containerInfo.ownerDocument.defaultView
	      : window;
	  for (
	    var element = getActiveElement(containerInfo.document);
	    element instanceof containerInfo.HTMLIFrameElement;

	  ) {
	    try {
	      var JSCompiler_inline_result =
	        "string" === typeof element.contentWindow.location.href;
	    } catch (err) {
	      JSCompiler_inline_result = false;
	    }
	    if (JSCompiler_inline_result) containerInfo = element.contentWindow;
	    else break;
	    element = getActiveElement(containerInfo.document);
	  }
	  return element;
	}
	function hasSelectionCapabilities(elem) {
	  var nodeName = elem && elem.nodeName && elem.nodeName.toLowerCase();
	  return (
	    nodeName &&
	    (("input" === nodeName &&
	      ("text" === elem.type ||
	        "search" === elem.type ||
	        "tel" === elem.type ||
	        "url" === elem.type ||
	        "password" === elem.type)) ||
	      "textarea" === nodeName ||
	      "true" === elem.contentEditable)
	  );
	}
	var skipSelectionChangeEvent =
	    canUseDOM && "documentMode" in document && 11 >= document.documentMode,
	  activeElement = null,
	  activeElementInst = null,
	  lastSelection = null,
	  mouseDown = false;
	function constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget) {
	  var doc =
	    nativeEventTarget.window === nativeEventTarget
	      ? nativeEventTarget.document
	      : 9 === nativeEventTarget.nodeType
	        ? nativeEventTarget
	        : nativeEventTarget.ownerDocument;
	  mouseDown ||
	    null == activeElement ||
	    activeElement !== getActiveElement(doc) ||
	    ((doc = activeElement),
	    "selectionStart" in doc && hasSelectionCapabilities(doc)
	      ? (doc = { start: doc.selectionStart, end: doc.selectionEnd })
	      : ((doc = (
	          (doc.ownerDocument && doc.ownerDocument.defaultView) ||
	          window
	        ).getSelection()),
	        (doc = {
	          anchorNode: doc.anchorNode,
	          anchorOffset: doc.anchorOffset,
	          focusNode: doc.focusNode,
	          focusOffset: doc.focusOffset
	        })),
	    (lastSelection && shallowEqual(lastSelection, doc)) ||
	      ((lastSelection = doc),
	      (doc = accumulateTwoPhaseListeners(activeElementInst, "onSelect")),
	      0 < doc.length &&
	        ((nativeEvent = new SyntheticEvent(
	          "onSelect",
	          "select",
	          null,
	          nativeEvent,
	          nativeEventTarget
	        )),
	        dispatchQueue.push({ event: nativeEvent, listeners: doc }),
	        (nativeEvent.target = activeElement))));
	}
	function makePrefixMap(styleProp, eventName) {
	  var prefixes = {};
	  prefixes[styleProp.toLowerCase()] = eventName.toLowerCase();
	  prefixes["Webkit" + styleProp] = "webkit" + eventName;
	  prefixes["Moz" + styleProp] = "moz" + eventName;
	  return prefixes;
	}
	var vendorPrefixes = {
	    animationend: makePrefixMap("Animation", "AnimationEnd"),
	    animationiteration: makePrefixMap("Animation", "AnimationIteration"),
	    animationstart: makePrefixMap("Animation", "AnimationStart"),
	    transitionrun: makePrefixMap("Transition", "TransitionRun"),
	    transitionstart: makePrefixMap("Transition", "TransitionStart"),
	    transitioncancel: makePrefixMap("Transition", "TransitionCancel"),
	    transitionend: makePrefixMap("Transition", "TransitionEnd")
	  },
	  prefixedEventNames = {},
	  style = {};
	canUseDOM &&
	  ((style = document.createElement("div").style),
	  "AnimationEvent" in window ||
	    (delete vendorPrefixes.animationend.animation,
	    delete vendorPrefixes.animationiteration.animation,
	    delete vendorPrefixes.animationstart.animation),
	  "TransitionEvent" in window ||
	    delete vendorPrefixes.transitionend.transition);
	function getVendorPrefixedEventName(eventName) {
	  if (prefixedEventNames[eventName]) return prefixedEventNames[eventName];
	  if (!vendorPrefixes[eventName]) return eventName;
	  var prefixMap = vendorPrefixes[eventName],
	    styleProp;
	  for (styleProp in prefixMap)
	    if (prefixMap.hasOwnProperty(styleProp) && styleProp in style)
	      return (prefixedEventNames[eventName] = prefixMap[styleProp]);
	  return eventName;
	}
	var ANIMATION_END = getVendorPrefixedEventName("animationend"),
	  ANIMATION_ITERATION = getVendorPrefixedEventName("animationiteration"),
	  ANIMATION_START = getVendorPrefixedEventName("animationstart"),
	  TRANSITION_RUN = getVendorPrefixedEventName("transitionrun"),
	  TRANSITION_START = getVendorPrefixedEventName("transitionstart"),
	  TRANSITION_CANCEL = getVendorPrefixedEventName("transitioncancel"),
	  TRANSITION_END = getVendorPrefixedEventName("transitionend"),
	  topLevelEventsToReactNames = new Map(),
	  simpleEventPluginEvents =
	    "abort auxClick beforeToggle cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
	      " "
	    );
	simpleEventPluginEvents.push("scrollEnd");
	function registerSimpleEvent(domEventName, reactName) {
	  topLevelEventsToReactNames.set(domEventName, reactName);
	  registerTwoPhaseEvent(reactName, [domEventName]);
	}
	var CapturedStacks = new WeakMap();
	function createCapturedValueAtFiber(value, source) {
	  if ("object" === typeof value && null !== value) {
	    var existing = CapturedStacks.get(value);
	    if (void 0 !== existing) return existing;
	    source = {
	      value: value,
	      source: source,
	      stack: getStackByFiberInDevAndProd(source)
	    };
	    CapturedStacks.set(value, source);
	    return source;
	  }
	  return {
	    value: value,
	    source: source,
	    stack: getStackByFiberInDevAndProd(source)
	  };
	}
	var concurrentQueues = [],
	  concurrentQueuesIndex = 0,
	  concurrentlyUpdatedLanes = 0;
	function finishQueueingConcurrentUpdates() {
	  for (
	    var endIndex = concurrentQueuesIndex,
	      i = (concurrentlyUpdatedLanes = concurrentQueuesIndex = 0);
	    i < endIndex;

	  ) {
	    var fiber = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var queue = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var update = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    var lane = concurrentQueues[i];
	    concurrentQueues[i++] = null;
	    if (null !== queue && null !== update) {
	      var pending = queue.pending;
	      null === pending
	        ? (update.next = update)
	        : ((update.next = pending.next), (pending.next = update));
	      queue.pending = update;
	    }
	    0 !== lane && markUpdateLaneFromFiberToRoot(fiber, update, lane);
	  }
	}
	function enqueueUpdate$1(fiber, queue, update, lane) {
	  concurrentQueues[concurrentQueuesIndex++] = fiber;
	  concurrentQueues[concurrentQueuesIndex++] = queue;
	  concurrentQueues[concurrentQueuesIndex++] = update;
	  concurrentQueues[concurrentQueuesIndex++] = lane;
	  concurrentlyUpdatedLanes |= lane;
	  fiber.lanes |= lane;
	  fiber = fiber.alternate;
	  null !== fiber && (fiber.lanes |= lane);
	}
	function enqueueConcurrentHookUpdate(fiber, queue, update, lane) {
	  enqueueUpdate$1(fiber, queue, update, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function enqueueConcurrentRenderForLane(fiber, lane) {
	  enqueueUpdate$1(fiber, null, null, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function markUpdateLaneFromFiberToRoot(sourceFiber, update, lane) {
	  sourceFiber.lanes |= lane;
	  var alternate = sourceFiber.alternate;
	  null !== alternate && (alternate.lanes |= lane);
	  for (var isHidden = false, parent = sourceFiber.return; null !== parent; )
	    (parent.childLanes |= lane),
	      (alternate = parent.alternate),
	      null !== alternate && (alternate.childLanes |= lane),
	      22 === parent.tag &&
	        ((sourceFiber = parent.stateNode),
	        null === sourceFiber || sourceFiber._visibility & 1 || (isHidden = true)),
	      (sourceFiber = parent),
	      (parent = parent.return);
	  return 3 === sourceFiber.tag
	    ? ((parent = sourceFiber.stateNode),
	      isHidden &&
	        null !== update &&
	        ((isHidden = 31 - clz32(lane)),
	        (sourceFiber = parent.hiddenUpdates),
	        (alternate = sourceFiber[isHidden]),
	        null === alternate
	          ? (sourceFiber[isHidden] = [update])
	          : alternate.push(update),
	        (update.lane = lane | 536870912)),
	      parent)
	    : null;
	}
	function getRootForUpdatedFiber(sourceFiber) {
	  if (50 < nestedUpdateCount)
	    throw (
	      ((nestedUpdateCount = 0),
	      (rootWithNestedUpdates = null),
	      Error(formatProdErrorMessage(185)))
	    );
	  for (var parent = sourceFiber.return; null !== parent; )
	    (sourceFiber = parent), (parent = sourceFiber.return);
	  return 3 === sourceFiber.tag ? sourceFiber.stateNode : null;
	}
	var emptyContextObject = {};
	function FiberNode(tag, pendingProps, key, mode) {
	  this.tag = tag;
	  this.key = key;
	  this.sibling =
	    this.child =
	    this.return =
	    this.stateNode =
	    this.type =
	    this.elementType =
	      null;
	  this.index = 0;
	  this.refCleanup = this.ref = null;
	  this.pendingProps = pendingProps;
	  this.dependencies =
	    this.memoizedState =
	    this.updateQueue =
	    this.memoizedProps =
	      null;
	  this.mode = mode;
	  this.subtreeFlags = this.flags = 0;
	  this.deletions = null;
	  this.childLanes = this.lanes = 0;
	  this.alternate = null;
	}
	function createFiberImplClass(tag, pendingProps, key, mode) {
	  return new FiberNode(tag, pendingProps, key, mode);
	}
	function shouldConstruct(Component) {
	  Component = Component.prototype;
	  return !(!Component || !Component.isReactComponent);
	}
	function createWorkInProgress(current, pendingProps) {
	  var workInProgress = current.alternate;
	  null === workInProgress
	    ? ((workInProgress = createFiberImplClass(
	        current.tag,
	        pendingProps,
	        current.key,
	        current.mode
	      )),
	      (workInProgress.elementType = current.elementType),
	      (workInProgress.type = current.type),
	      (workInProgress.stateNode = current.stateNode),
	      (workInProgress.alternate = current),
	      (current.alternate = workInProgress))
	    : ((workInProgress.pendingProps = pendingProps),
	      (workInProgress.type = current.type),
	      (workInProgress.flags = 0),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.deletions = null));
	  workInProgress.flags = current.flags & 65011712;
	  workInProgress.childLanes = current.childLanes;
	  workInProgress.lanes = current.lanes;
	  workInProgress.child = current.child;
	  workInProgress.memoizedProps = current.memoizedProps;
	  workInProgress.memoizedState = current.memoizedState;
	  workInProgress.updateQueue = current.updateQueue;
	  pendingProps = current.dependencies;
	  workInProgress.dependencies =
	    null === pendingProps
	      ? null
	      : { lanes: pendingProps.lanes, firstContext: pendingProps.firstContext };
	  workInProgress.sibling = current.sibling;
	  workInProgress.index = current.index;
	  workInProgress.ref = current.ref;
	  workInProgress.refCleanup = current.refCleanup;
	  return workInProgress;
	}
	function resetWorkInProgress(workInProgress, renderLanes) {
	  workInProgress.flags &= 65011714;
	  var current = workInProgress.alternate;
	  null === current
	    ? ((workInProgress.childLanes = 0),
	      (workInProgress.lanes = renderLanes),
	      (workInProgress.child = null),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.memoizedProps = null),
	      (workInProgress.memoizedState = null),
	      (workInProgress.updateQueue = null),
	      (workInProgress.dependencies = null),
	      (workInProgress.stateNode = null))
	    : ((workInProgress.childLanes = current.childLanes),
	      (workInProgress.lanes = current.lanes),
	      (workInProgress.child = current.child),
	      (workInProgress.subtreeFlags = 0),
	      (workInProgress.deletions = null),
	      (workInProgress.memoizedProps = current.memoizedProps),
	      (workInProgress.memoizedState = current.memoizedState),
	      (workInProgress.updateQueue = current.updateQueue),
	      (workInProgress.type = current.type),
	      (renderLanes = current.dependencies),
	      (workInProgress.dependencies =
	        null === renderLanes
	          ? null
	          : {
	              lanes: renderLanes.lanes,
	              firstContext: renderLanes.firstContext
	            }));
	  return workInProgress;
	}
	function createFiberFromTypeAndProps(
	  type,
	  key,
	  pendingProps,
	  owner,
	  mode,
	  lanes
	) {
	  var fiberTag = 0;
	  owner = type;
	  if ("function" === typeof type) shouldConstruct(type) && (fiberTag = 1);
	  else if ("string" === typeof type)
	    fiberTag = isHostHoistableType(
	      type,
	      pendingProps,
	      contextStackCursor.current
	    )
	      ? 26
	      : "html" === type || "head" === type || "body" === type
	        ? 27
	        : 5;
	  else
	    a: switch (type) {
	      case REACT_ACTIVITY_TYPE:
	        return (
	          (type = createFiberImplClass(31, pendingProps, key, mode)),
	          (type.elementType = REACT_ACTIVITY_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_FRAGMENT_TYPE:
	        return createFiberFromFragment(pendingProps.children, mode, lanes, key);
	      case REACT_STRICT_MODE_TYPE:
	        fiberTag = 8;
	        mode |= 24;
	        break;
	      case REACT_PROFILER_TYPE:
	        return (
	          (type = createFiberImplClass(12, pendingProps, key, mode | 2)),
	          (type.elementType = REACT_PROFILER_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_SUSPENSE_TYPE:
	        return (
	          (type = createFiberImplClass(13, pendingProps, key, mode)),
	          (type.elementType = REACT_SUSPENSE_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      case REACT_SUSPENSE_LIST_TYPE:
	        return (
	          (type = createFiberImplClass(19, pendingProps, key, mode)),
	          (type.elementType = REACT_SUSPENSE_LIST_TYPE),
	          (type.lanes = lanes),
	          type
	        );
	      default:
	        if ("object" === typeof type && null !== type)
	          switch (type.$$typeof) {
	            case REACT_PROVIDER_TYPE:
	            case REACT_CONTEXT_TYPE:
	              fiberTag = 10;
	              break a;
	            case REACT_CONSUMER_TYPE:
	              fiberTag = 9;
	              break a;
	            case REACT_FORWARD_REF_TYPE:
	              fiberTag = 11;
	              break a;
	            case REACT_MEMO_TYPE:
	              fiberTag = 14;
	              break a;
	            case REACT_LAZY_TYPE:
	              fiberTag = 16;
	              owner = null;
	              break a;
	          }
	        fiberTag = 29;
	        pendingProps = Error(
	          formatProdErrorMessage(130, null === type ? "null" : typeof type, "")
	        );
	        owner = null;
	    }
	  key = createFiberImplClass(fiberTag, pendingProps, key, mode);
	  key.elementType = type;
	  key.type = owner;
	  key.lanes = lanes;
	  return key;
	}
	function createFiberFromFragment(elements, mode, lanes, key) {
	  elements = createFiberImplClass(7, elements, key, mode);
	  elements.lanes = lanes;
	  return elements;
	}
	function createFiberFromText(content, mode, lanes) {
	  content = createFiberImplClass(6, content, null, mode);
	  content.lanes = lanes;
	  return content;
	}
	function createFiberFromPortal(portal, mode, lanes) {
	  mode = createFiberImplClass(
	    4,
	    null !== portal.children ? portal.children : [],
	    portal.key,
	    mode
	  );
	  mode.lanes = lanes;
	  mode.stateNode = {
	    containerInfo: portal.containerInfo,
	    pendingChildren: null,
	    implementation: portal.implementation
	  };
	  return mode;
	}
	var forkStack = [],
	  forkStackIndex = 0,
	  treeForkProvider = null,
	  treeForkCount = 0,
	  idStack = [],
	  idStackIndex = 0,
	  treeContextProvider = null,
	  treeContextId = 1,
	  treeContextOverflow = "";
	function pushTreeFork(workInProgress, totalChildren) {
	  forkStack[forkStackIndex++] = treeForkCount;
	  forkStack[forkStackIndex++] = treeForkProvider;
	  treeForkProvider = workInProgress;
	  treeForkCount = totalChildren;
	}
	function pushTreeId(workInProgress, totalChildren, index) {
	  idStack[idStackIndex++] = treeContextId;
	  idStack[idStackIndex++] = treeContextOverflow;
	  idStack[idStackIndex++] = treeContextProvider;
	  treeContextProvider = workInProgress;
	  var baseIdWithLeadingBit = treeContextId;
	  workInProgress = treeContextOverflow;
	  var baseLength = 32 - clz32(baseIdWithLeadingBit) - 1;
	  baseIdWithLeadingBit &= ~(1 << baseLength);
	  index += 1;
	  var length = 32 - clz32(totalChildren) + baseLength;
	  if (30 < length) {
	    var numberOfOverflowBits = baseLength - (baseLength % 5);
	    length = (
	      baseIdWithLeadingBit &
	      ((1 << numberOfOverflowBits) - 1)
	    ).toString(32);
	    baseIdWithLeadingBit >>= numberOfOverflowBits;
	    baseLength -= numberOfOverflowBits;
	    treeContextId =
	      (1 << (32 - clz32(totalChildren) + baseLength)) |
	      (index << baseLength) |
	      baseIdWithLeadingBit;
	    treeContextOverflow = length + workInProgress;
	  } else
	    (treeContextId =
	      (1 << length) | (index << baseLength) | baseIdWithLeadingBit),
	      (treeContextOverflow = workInProgress);
	}
	function pushMaterializedTreeId(workInProgress) {
	  null !== workInProgress.return &&
	    (pushTreeFork(workInProgress, 1), pushTreeId(workInProgress, 1, 0));
	}
	function popTreeContext(workInProgress) {
	  for (; workInProgress === treeForkProvider; )
	    (treeForkProvider = forkStack[--forkStackIndex]),
	      (forkStack[forkStackIndex] = null),
	      (treeForkCount = forkStack[--forkStackIndex]),
	      (forkStack[forkStackIndex] = null);
	  for (; workInProgress === treeContextProvider; )
	    (treeContextProvider = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null),
	      (treeContextOverflow = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null),
	      (treeContextId = idStack[--idStackIndex]),
	      (idStack[idStackIndex] = null);
	}
	var hydrationParentFiber = null,
	  nextHydratableInstance = null,
	  isHydrating = false,
	  hydrationErrors = null,
	  rootOrSingletonContext = false,
	  HydrationMismatchException = Error(formatProdErrorMessage(519));
	function throwOnHydrationMismatch(fiber) {
	  var error = Error(formatProdErrorMessage(418, ""));
	  queueHydrationError(createCapturedValueAtFiber(error, fiber));
	  throw HydrationMismatchException;
	}
	function prepareToHydrateHostInstance(fiber) {
	  var instance = fiber.stateNode,
	    type = fiber.type,
	    props = fiber.memoizedProps;
	  instance[internalInstanceKey] = fiber;
	  instance[internalPropsKey] = props;
	  switch (type) {
	    case "dialog":
	      listenToNonDelegatedEvent("cancel", instance);
	      listenToNonDelegatedEvent("close", instance);
	      break;
	    case "iframe":
	    case "object":
	    case "embed":
	      listenToNonDelegatedEvent("load", instance);
	      break;
	    case "video":
	    case "audio":
	      for (type = 0; type < mediaEventTypes.length; type++)
	        listenToNonDelegatedEvent(mediaEventTypes[type], instance);
	      break;
	    case "source":
	      listenToNonDelegatedEvent("error", instance);
	      break;
	    case "img":
	    case "image":
	    case "link":
	      listenToNonDelegatedEvent("error", instance);
	      listenToNonDelegatedEvent("load", instance);
	      break;
	    case "details":
	      listenToNonDelegatedEvent("toggle", instance);
	      break;
	    case "input":
	      listenToNonDelegatedEvent("invalid", instance);
	      initInput(
	        instance,
	        props.value,
	        props.defaultValue,
	        props.checked,
	        props.defaultChecked,
	        props.type,
	        props.name,
	        true
	      );
	      track(instance);
	      break;
	    case "select":
	      listenToNonDelegatedEvent("invalid", instance);
	      break;
	    case "textarea":
	      listenToNonDelegatedEvent("invalid", instance),
	        initTextarea(instance, props.value, props.defaultValue, props.children),
	        track(instance);
	  }
	  type = props.children;
	  ("string" !== typeof type &&
	    "number" !== typeof type &&
	    "bigint" !== typeof type) ||
	  instance.textContent === "" + type ||
	  true === props.suppressHydrationWarning ||
	  checkForUnmatchedText(instance.textContent, type)
	    ? (null != props.popover &&
	        (listenToNonDelegatedEvent("beforetoggle", instance),
	        listenToNonDelegatedEvent("toggle", instance)),
	      null != props.onScroll && listenToNonDelegatedEvent("scroll", instance),
	      null != props.onScrollEnd &&
	        listenToNonDelegatedEvent("scrollend", instance),
	      null != props.onClick && (instance.onclick = noop$1),
	      (instance = true))
	    : (instance = false);
	  instance || throwOnHydrationMismatch(fiber);
	}
	function popToNextHostParent(fiber) {
	  for (hydrationParentFiber = fiber.return; hydrationParentFiber; )
	    switch (hydrationParentFiber.tag) {
	      case 5:
	      case 13:
	        rootOrSingletonContext = false;
	        return;
	      case 27:
	      case 3:
	        rootOrSingletonContext = true;
	        return;
	      default:
	        hydrationParentFiber = hydrationParentFiber.return;
	    }
	}
	function popHydrationState(fiber) {
	  if (fiber !== hydrationParentFiber) return false;
	  if (!isHydrating) return popToNextHostParent(fiber), (isHydrating = true), false;
	  var tag = fiber.tag,
	    JSCompiler_temp;
	  if ((JSCompiler_temp = 3 !== tag && 27 !== tag)) {
	    if ((JSCompiler_temp = 5 === tag))
	      (JSCompiler_temp = fiber.type),
	        (JSCompiler_temp =
	          !("form" !== JSCompiler_temp && "button" !== JSCompiler_temp) ||
	          shouldSetTextContent(fiber.type, fiber.memoizedProps));
	    JSCompiler_temp = !JSCompiler_temp;
	  }
	  JSCompiler_temp && nextHydratableInstance && throwOnHydrationMismatch(fiber);
	  popToNextHostParent(fiber);
	  if (13 === tag) {
	    fiber = fiber.memoizedState;
	    fiber = null !== fiber ? fiber.dehydrated : null;
	    if (!fiber) throw Error(formatProdErrorMessage(317));
	    a: {
	      fiber = fiber.nextSibling;
	      for (tag = 0; fiber; ) {
	        if (8 === fiber.nodeType)
	          if (((JSCompiler_temp = fiber.data), "/$" === JSCompiler_temp)) {
	            if (0 === tag) {
	              nextHydratableInstance = getNextHydratable(fiber.nextSibling);
	              break a;
	            }
	            tag--;
	          } else
	            ("$" !== JSCompiler_temp &&
	              "$!" !== JSCompiler_temp &&
	              "$?" !== JSCompiler_temp) ||
	              tag++;
	        fiber = fiber.nextSibling;
	      }
	      nextHydratableInstance = null;
	    }
	  } else
	    27 === tag
	      ? ((tag = nextHydratableInstance),
	        isSingletonScope(fiber.type)
	          ? ((fiber = previousHydratableOnEnteringScopedSingleton),
	            (previousHydratableOnEnteringScopedSingleton = null),
	            (nextHydratableInstance = fiber))
	          : (nextHydratableInstance = tag))
	      : (nextHydratableInstance = hydrationParentFiber
	          ? getNextHydratable(fiber.stateNode.nextSibling)
	          : null);
	  return true;
	}
	function resetHydrationState() {
	  nextHydratableInstance = hydrationParentFiber = null;
	  isHydrating = false;
	}
	function upgradeHydrationErrorsToRecoverable() {
	  var queuedErrors = hydrationErrors;
	  null !== queuedErrors &&
	    (null === workInProgressRootRecoverableErrors
	      ? (workInProgressRootRecoverableErrors = queuedErrors)
	      : workInProgressRootRecoverableErrors.push.apply(
	          workInProgressRootRecoverableErrors,
	          queuedErrors
	        ),
	    (hydrationErrors = null));
	  return queuedErrors;
	}
	function queueHydrationError(error) {
	  null === hydrationErrors
	    ? (hydrationErrors = [error])
	    : hydrationErrors.push(error);
	}
	var valueCursor = createCursor(null),
	  currentlyRenderingFiber$1 = null,
	  lastContextDependency = null;
	function pushProvider(providerFiber, context, nextValue) {
	  push(valueCursor, context._currentValue);
	  context._currentValue = nextValue;
	}
	function popProvider(context) {
	  context._currentValue = valueCursor.current;
	  pop(valueCursor);
	}
	function scheduleContextWorkOnParentPath(parent, renderLanes, propagationRoot) {
	  for (; null !== parent; ) {
	    var alternate = parent.alternate;
	    (parent.childLanes & renderLanes) !== renderLanes
	      ? ((parent.childLanes |= renderLanes),
	        null !== alternate && (alternate.childLanes |= renderLanes))
	      : null !== alternate &&
	        (alternate.childLanes & renderLanes) !== renderLanes &&
	        (alternate.childLanes |= renderLanes);
	    if (parent === propagationRoot) break;
	    parent = parent.return;
	  }
	}
	function propagateContextChanges(
	  workInProgress,
	  contexts,
	  renderLanes,
	  forcePropagateEntireTree
	) {
	  var fiber = workInProgress.child;
	  null !== fiber && (fiber.return = workInProgress);
	  for (; null !== fiber; ) {
	    var list = fiber.dependencies;
	    if (null !== list) {
	      var nextFiber = fiber.child;
	      list = list.firstContext;
	      a: for (; null !== list; ) {
	        var dependency = list;
	        list = fiber;
	        for (var i = 0; i < contexts.length; i++)
	          if (dependency.context === contexts[i]) {
	            list.lanes |= renderLanes;
	            dependency = list.alternate;
	            null !== dependency && (dependency.lanes |= renderLanes);
	            scheduleContextWorkOnParentPath(
	              list.return,
	              renderLanes,
	              workInProgress
	            );
	            forcePropagateEntireTree || (nextFiber = null);
	            break a;
	          }
	        list = dependency.next;
	      }
	    } else if (18 === fiber.tag) {
	      nextFiber = fiber.return;
	      if (null === nextFiber) throw Error(formatProdErrorMessage(341));
	      nextFiber.lanes |= renderLanes;
	      list = nextFiber.alternate;
	      null !== list && (list.lanes |= renderLanes);
	      scheduleContextWorkOnParentPath(nextFiber, renderLanes, workInProgress);
	      nextFiber = null;
	    } else nextFiber = fiber.child;
	    if (null !== nextFiber) nextFiber.return = fiber;
	    else
	      for (nextFiber = fiber; null !== nextFiber; ) {
	        if (nextFiber === workInProgress) {
	          nextFiber = null;
	          break;
	        }
	        fiber = nextFiber.sibling;
	        if (null !== fiber) {
	          fiber.return = nextFiber.return;
	          nextFiber = fiber;
	          break;
	        }
	        nextFiber = nextFiber.return;
	      }
	    fiber = nextFiber;
	  }
	}
	function propagateParentContextChanges(
	  current,
	  workInProgress,
	  renderLanes,
	  forcePropagateEntireTree
	) {
	  current = null;
	  for (
	    var parent = workInProgress, isInsidePropagationBailout = false;
	    null !== parent;

	  ) {
	    if (!isInsidePropagationBailout)
	      if (0 !== (parent.flags & 524288)) isInsidePropagationBailout = true;
	      else if (0 !== (parent.flags & 262144)) break;
	    if (10 === parent.tag) {
	      var currentParent = parent.alternate;
	      if (null === currentParent) throw Error(formatProdErrorMessage(387));
	      currentParent = currentParent.memoizedProps;
	      if (null !== currentParent) {
	        var context = parent.type;
	        objectIs(parent.pendingProps.value, currentParent.value) ||
	          (null !== current ? current.push(context) : (current = [context]));
	      }
	    } else if (parent === hostTransitionProviderCursor.current) {
	      currentParent = parent.alternate;
	      if (null === currentParent) throw Error(formatProdErrorMessage(387));
	      currentParent.memoizedState.memoizedState !==
	        parent.memoizedState.memoizedState &&
	        (null !== current
	          ? current.push(HostTransitionContext)
	          : (current = [HostTransitionContext]));
	    }
	    parent = parent.return;
	  }
	  null !== current &&
	    propagateContextChanges(
	      workInProgress,
	      current,
	      renderLanes,
	      forcePropagateEntireTree
	    );
	  workInProgress.flags |= 262144;
	}
	function checkIfContextChanged(currentDependencies) {
	  for (
	    currentDependencies = currentDependencies.firstContext;
	    null !== currentDependencies;

	  ) {
	    if (
	      !objectIs(
	        currentDependencies.context._currentValue,
	        currentDependencies.memoizedValue
	      )
	    )
	      return true;
	    currentDependencies = currentDependencies.next;
	  }
	  return false;
	}
	function prepareToReadContext(workInProgress) {
	  currentlyRenderingFiber$1 = workInProgress;
	  lastContextDependency = null;
	  workInProgress = workInProgress.dependencies;
	  null !== workInProgress && (workInProgress.firstContext = null);
	}
	function readContext(context) {
	  return readContextForConsumer(currentlyRenderingFiber$1, context);
	}
	function readContextDuringReconciliation(consumer, context) {
	  null === currentlyRenderingFiber$1 && prepareToReadContext(consumer);
	  return readContextForConsumer(consumer, context);
	}
	function readContextForConsumer(consumer, context) {
	  var value = context._currentValue;
	  context = { context: context, memoizedValue: value, next: null };
	  if (null === lastContextDependency) {
	    if (null === consumer) throw Error(formatProdErrorMessage(308));
	    lastContextDependency = context;
	    consumer.dependencies = { lanes: 0, firstContext: context };
	    consumer.flags |= 524288;
	  } else lastContextDependency = lastContextDependency.next = context;
	  return value;
	}
	var AbortControllerLocal =
	    "undefined" !== typeof AbortController
	      ? AbortController
	      : function () {
	          var listeners = [],
	            signal = (this.signal = {
	              aborted: false,
	              addEventListener: function (type, listener) {
	                listeners.push(listener);
	              }
	            });
	          this.abort = function () {
	            signal.aborted = true;
	            listeners.forEach(function (listener) {
	              return listener();
	            });
	          };
	        },
	  scheduleCallback$2 = Scheduler.unstable_scheduleCallback,
	  NormalPriority = Scheduler.unstable_NormalPriority,
	  CacheContext = {
	    $$typeof: REACT_CONTEXT_TYPE,
	    Consumer: null,
	    Provider: null,
	    _currentValue: null,
	    _currentValue2: null,
	    _threadCount: 0
	  };
	function createCache() {
	  return {
	    controller: new AbortControllerLocal(),
	    data: new Map(),
	    refCount: 0
	  };
	}
	function releaseCache(cache) {
	  cache.refCount--;
	  0 === cache.refCount &&
	    scheduleCallback$2(NormalPriority, function () {
	      cache.controller.abort();
	    });
	}
	var currentEntangledListeners = null,
	  currentEntangledPendingCount = 0,
	  currentEntangledLane = 0,
	  currentEntangledActionThenable = null;
	function entangleAsyncAction(transition, thenable) {
	  if (null === currentEntangledListeners) {
	    var entangledListeners = (currentEntangledListeners = []);
	    currentEntangledPendingCount = 0;
	    currentEntangledLane = requestTransitionLane();
	    currentEntangledActionThenable = {
	      status: "pending",
	      value: void 0,
	      then: function (resolve) {
	        entangledListeners.push(resolve);
	      }
	    };
	  }
	  currentEntangledPendingCount++;
	  thenable.then(pingEngtangledActionScope, pingEngtangledActionScope);
	  return thenable;
	}
	function pingEngtangledActionScope() {
	  if (
	    0 === --currentEntangledPendingCount &&
	    null !== currentEntangledListeners
	  ) {
	    null !== currentEntangledActionThenable &&
	      (currentEntangledActionThenable.status = "fulfilled");
	    var listeners = currentEntangledListeners;
	    currentEntangledListeners = null;
	    currentEntangledLane = 0;
	    currentEntangledActionThenable = null;
	    for (var i = 0; i < listeners.length; i++) (0, listeners[i])();
	  }
	}
	function chainThenableValue(thenable, result) {
	  var listeners = [],
	    thenableWithOverride = {
	      status: "pending",
	      value: null,
	      reason: null,
	      then: function (resolve) {
	        listeners.push(resolve);
	      }
	    };
	  thenable.then(
	    function () {
	      thenableWithOverride.status = "fulfilled";
	      thenableWithOverride.value = result;
	      for (var i = 0; i < listeners.length; i++) (0, listeners[i])(result);
	    },
	    function (error) {
	      thenableWithOverride.status = "rejected";
	      thenableWithOverride.reason = error;
	      for (error = 0; error < listeners.length; error++)
	        (0, listeners[error])(void 0);
	    }
	  );
	  return thenableWithOverride;
	}
	var prevOnStartTransitionFinish = ReactSharedInternals.S;
	ReactSharedInternals.S = function (transition, returnValue) {
	  "object" === typeof returnValue &&
	    null !== returnValue &&
	    "function" === typeof returnValue.then &&
	    entangleAsyncAction(transition, returnValue);
	  null !== prevOnStartTransitionFinish &&
	    prevOnStartTransitionFinish(transition, returnValue);
	};
	var resumedCache = createCursor(null);
	function peekCacheFromPool() {
	  var cacheResumedFromPreviousRender = resumedCache.current;
	  return null !== cacheResumedFromPreviousRender
	    ? cacheResumedFromPreviousRender
	    : workInProgressRoot.pooledCache;
	}
	function pushTransition(offscreenWorkInProgress, prevCachePool) {
	  null === prevCachePool
	    ? push(resumedCache, resumedCache.current)
	    : push(resumedCache, prevCachePool.pool);
	}
	function getSuspendedCache() {
	  var cacheFromPool = peekCacheFromPool();
	  return null === cacheFromPool
	    ? null
	    : { parent: CacheContext._currentValue, pool: cacheFromPool };
	}
	var SuspenseException = Error(formatProdErrorMessage(460)),
	  SuspenseyCommitException = Error(formatProdErrorMessage(474)),
	  SuspenseActionException = Error(formatProdErrorMessage(542)),
	  noopSuspenseyCommitThenable = { then: function () {} };
	function isThenableResolved(thenable) {
	  thenable = thenable.status;
	  return "fulfilled" === thenable || "rejected" === thenable;
	}
	function noop$3() {}
	function trackUsedThenable(thenableState, thenable, index) {
	  index = thenableState[index];
	  void 0 === index
	    ? thenableState.push(thenable)
	    : index !== thenable && (thenable.then(noop$3, noop$3), (thenable = index));
	  switch (thenable.status) {
	    case "fulfilled":
	      return thenable.value;
	    case "rejected":
	      throw (
	        ((thenableState = thenable.reason),
	        checkIfUseWrappedInAsyncCatch(thenableState),
	        thenableState)
	      );
	    default:
	      if ("string" === typeof thenable.status) thenable.then(noop$3, noop$3);
	      else {
	        thenableState = workInProgressRoot;
	        if (null !== thenableState && 100 < thenableState.shellSuspendCounter)
	          throw Error(formatProdErrorMessage(482));
	        thenableState = thenable;
	        thenableState.status = "pending";
	        thenableState.then(
	          function (fulfilledValue) {
	            if ("pending" === thenable.status) {
	              var fulfilledThenable = thenable;
	              fulfilledThenable.status = "fulfilled";
	              fulfilledThenable.value = fulfilledValue;
	            }
	          },
	          function (error) {
	            if ("pending" === thenable.status) {
	              var rejectedThenable = thenable;
	              rejectedThenable.status = "rejected";
	              rejectedThenable.reason = error;
	            }
	          }
	        );
	      }
	      switch (thenable.status) {
	        case "fulfilled":
	          return thenable.value;
	        case "rejected":
	          throw (
	            ((thenableState = thenable.reason),
	            checkIfUseWrappedInAsyncCatch(thenableState),
	            thenableState)
	          );
	      }
	      suspendedThenable = thenable;
	      throw SuspenseException;
	  }
	}
	var suspendedThenable = null;
	function getSuspendedThenable() {
	  if (null === suspendedThenable) throw Error(formatProdErrorMessage(459));
	  var thenable = suspendedThenable;
	  suspendedThenable = null;
	  return thenable;
	}
	function checkIfUseWrappedInAsyncCatch(rejectedReason) {
	  if (
	    rejectedReason === SuspenseException ||
	    rejectedReason === SuspenseActionException
	  )
	    throw Error(formatProdErrorMessage(483));
	}
	var hasForceUpdate = false;
	function initializeUpdateQueue(fiber) {
	  fiber.updateQueue = {
	    baseState: fiber.memoizedState,
	    firstBaseUpdate: null,
	    lastBaseUpdate: null,
	    shared: { pending: null, lanes: 0, hiddenCallbacks: null },
	    callbacks: null
	  };
	}
	function cloneUpdateQueue(current, workInProgress) {
	  current = current.updateQueue;
	  workInProgress.updateQueue === current &&
	    (workInProgress.updateQueue = {
	      baseState: current.baseState,
	      firstBaseUpdate: current.firstBaseUpdate,
	      lastBaseUpdate: current.lastBaseUpdate,
	      shared: current.shared,
	      callbacks: null
	    });
	}
	function createUpdate(lane) {
	  return { lane: lane, tag: 0, payload: null, callback: null, next: null };
	}
	function enqueueUpdate(fiber, update, lane) {
	  var updateQueue = fiber.updateQueue;
	  if (null === updateQueue) return null;
	  updateQueue = updateQueue.shared;
	  if (0 !== (executionContext & 2)) {
	    var pending = updateQueue.pending;
	    null === pending
	      ? (update.next = update)
	      : ((update.next = pending.next), (pending.next = update));
	    updateQueue.pending = update;
	    update = getRootForUpdatedFiber(fiber);
	    markUpdateLaneFromFiberToRoot(fiber, null, lane);
	    return update;
	  }
	  enqueueUpdate$1(fiber, updateQueue, update, lane);
	  return getRootForUpdatedFiber(fiber);
	}
	function entangleTransitions(root, fiber, lane) {
	  fiber = fiber.updateQueue;
	  if (null !== fiber && ((fiber = fiber.shared), 0 !== (lane & 4194048))) {
	    var queueLanes = fiber.lanes;
	    queueLanes &= root.pendingLanes;
	    lane |= queueLanes;
	    fiber.lanes = lane;
	    markRootEntangled(root, lane);
	  }
	}
	function enqueueCapturedUpdate(workInProgress, capturedUpdate) {
	  var queue = workInProgress.updateQueue,
	    current = workInProgress.alternate;
	  if (
	    null !== current &&
	    ((current = current.updateQueue), queue === current)
	  ) {
	    var newFirst = null,
	      newLast = null;
	    queue = queue.firstBaseUpdate;
	    if (null !== queue) {
	      do {
	        var clone = {
	          lane: queue.lane,
	          tag: queue.tag,
	          payload: queue.payload,
	          callback: null,
	          next: null
	        };
	        null === newLast
	          ? (newFirst = newLast = clone)
	          : (newLast = newLast.next = clone);
	        queue = queue.next;
	      } while (null !== queue);
	      null === newLast
	        ? (newFirst = newLast = capturedUpdate)
	        : (newLast = newLast.next = capturedUpdate);
	    } else newFirst = newLast = capturedUpdate;
	    queue = {
	      baseState: current.baseState,
	      firstBaseUpdate: newFirst,
	      lastBaseUpdate: newLast,
	      shared: current.shared,
	      callbacks: current.callbacks
	    };
	    workInProgress.updateQueue = queue;
	    return;
	  }
	  workInProgress = queue.lastBaseUpdate;
	  null === workInProgress
	    ? (queue.firstBaseUpdate = capturedUpdate)
	    : (workInProgress.next = capturedUpdate);
	  queue.lastBaseUpdate = capturedUpdate;
	}
	var didReadFromEntangledAsyncAction = false;
	function suspendIfUpdateReadFromEntangledAsyncAction() {
	  if (didReadFromEntangledAsyncAction) {
	    var entangledActionThenable = currentEntangledActionThenable;
	    if (null !== entangledActionThenable) throw entangledActionThenable;
	  }
	}
	function processUpdateQueue(
	  workInProgress$jscomp$0,
	  props,
	  instance$jscomp$0,
	  renderLanes
	) {
	  didReadFromEntangledAsyncAction = false;
	  var queue = workInProgress$jscomp$0.updateQueue;
	  hasForceUpdate = false;
	  var firstBaseUpdate = queue.firstBaseUpdate,
	    lastBaseUpdate = queue.lastBaseUpdate,
	    pendingQueue = queue.shared.pending;
	  if (null !== pendingQueue) {
	    queue.shared.pending = null;
	    var lastPendingUpdate = pendingQueue,
	      firstPendingUpdate = lastPendingUpdate.next;
	    lastPendingUpdate.next = null;
	    null === lastBaseUpdate
	      ? (firstBaseUpdate = firstPendingUpdate)
	      : (lastBaseUpdate.next = firstPendingUpdate);
	    lastBaseUpdate = lastPendingUpdate;
	    var current = workInProgress$jscomp$0.alternate;
	    null !== current &&
	      ((current = current.updateQueue),
	      (pendingQueue = current.lastBaseUpdate),
	      pendingQueue !== lastBaseUpdate &&
	        (null === pendingQueue
	          ? (current.firstBaseUpdate = firstPendingUpdate)
	          : (pendingQueue.next = firstPendingUpdate),
	        (current.lastBaseUpdate = lastPendingUpdate)));
	  }
	  if (null !== firstBaseUpdate) {
	    var newState = queue.baseState;
	    lastBaseUpdate = 0;
	    current = firstPendingUpdate = lastPendingUpdate = null;
	    pendingQueue = firstBaseUpdate;
	    do {
	      var updateLane = pendingQueue.lane & -536870913,
	        isHiddenUpdate = updateLane !== pendingQueue.lane;
	      if (
	        isHiddenUpdate
	          ? (workInProgressRootRenderLanes & updateLane) === updateLane
	          : (renderLanes & updateLane) === updateLane
	      ) {
	        0 !== updateLane &&
	          updateLane === currentEntangledLane &&
	          (didReadFromEntangledAsyncAction = true);
	        null !== current &&
	          (current = current.next =
	            {
	              lane: 0,
	              tag: pendingQueue.tag,
	              payload: pendingQueue.payload,
	              callback: null,
	              next: null
	            });
	        a: {
	          var workInProgress = workInProgress$jscomp$0,
	            update = pendingQueue;
	          updateLane = props;
	          var instance = instance$jscomp$0;
	          switch (update.tag) {
	            case 1:
	              workInProgress = update.payload;
	              if ("function" === typeof workInProgress) {
	                newState = workInProgress.call(instance, newState, updateLane);
	                break a;
	              }
	              newState = workInProgress;
	              break a;
	            case 3:
	              workInProgress.flags = (workInProgress.flags & -65537) | 128;
	            case 0:
	              workInProgress = update.payload;
	              updateLane =
	                "function" === typeof workInProgress
	                  ? workInProgress.call(instance, newState, updateLane)
	                  : workInProgress;
	              if (null === updateLane || void 0 === updateLane) break a;
	              newState = assign({}, newState, updateLane);
	              break a;
	            case 2:
	              hasForceUpdate = true;
	          }
	        }
	        updateLane = pendingQueue.callback;
	        null !== updateLane &&
	          ((workInProgress$jscomp$0.flags |= 64),
	          isHiddenUpdate && (workInProgress$jscomp$0.flags |= 8192),
	          (isHiddenUpdate = queue.callbacks),
	          null === isHiddenUpdate
	            ? (queue.callbacks = [updateLane])
	            : isHiddenUpdate.push(updateLane));
	      } else
	        (isHiddenUpdate = {
	          lane: updateLane,
	          tag: pendingQueue.tag,
	          payload: pendingQueue.payload,
	          callback: pendingQueue.callback,
	          next: null
	        }),
	          null === current
	            ? ((firstPendingUpdate = current = isHiddenUpdate),
	              (lastPendingUpdate = newState))
	            : (current = current.next = isHiddenUpdate),
	          (lastBaseUpdate |= updateLane);
	      pendingQueue = pendingQueue.next;
	      if (null === pendingQueue)
	        if (((pendingQueue = queue.shared.pending), null === pendingQueue))
	          break;
	        else
	          (isHiddenUpdate = pendingQueue),
	            (pendingQueue = isHiddenUpdate.next),
	            (isHiddenUpdate.next = null),
	            (queue.lastBaseUpdate = isHiddenUpdate),
	            (queue.shared.pending = null);
	    } while (1);
	    null === current && (lastPendingUpdate = newState);
	    queue.baseState = lastPendingUpdate;
	    queue.firstBaseUpdate = firstPendingUpdate;
	    queue.lastBaseUpdate = current;
	    null === firstBaseUpdate && (queue.shared.lanes = 0);
	    workInProgressRootSkippedLanes |= lastBaseUpdate;
	    workInProgress$jscomp$0.lanes = lastBaseUpdate;
	    workInProgress$jscomp$0.memoizedState = newState;
	  }
	}
	function callCallback(callback, context) {
	  if ("function" !== typeof callback)
	    throw Error(formatProdErrorMessage(191, callback));
	  callback.call(context);
	}
	function commitCallbacks(updateQueue, context) {
	  var callbacks = updateQueue.callbacks;
	  if (null !== callbacks)
	    for (
	      updateQueue.callbacks = null, updateQueue = 0;
	      updateQueue < callbacks.length;
	      updateQueue++
	    )
	      callCallback(callbacks[updateQueue], context);
	}
	var currentTreeHiddenStackCursor = createCursor(null),
	  prevEntangledRenderLanesCursor = createCursor(0);
	function pushHiddenContext(fiber, context) {
	  fiber = entangledRenderLanes;
	  push(prevEntangledRenderLanesCursor, fiber);
	  push(currentTreeHiddenStackCursor, context);
	  entangledRenderLanes = fiber | context.baseLanes;
	}
	function reuseHiddenContextOnStack() {
	  push(prevEntangledRenderLanesCursor, entangledRenderLanes);
	  push(currentTreeHiddenStackCursor, currentTreeHiddenStackCursor.current);
	}
	function popHiddenContext() {
	  entangledRenderLanes = prevEntangledRenderLanesCursor.current;
	  pop(currentTreeHiddenStackCursor);
	  pop(prevEntangledRenderLanesCursor);
	}
	var renderLanes = 0,
	  currentlyRenderingFiber = null,
	  currentHook = null,
	  workInProgressHook = null,
	  didScheduleRenderPhaseUpdate = false,
	  didScheduleRenderPhaseUpdateDuringThisPass = false,
	  shouldDoubleInvokeUserFnsInHooksDEV = false,
	  localIdCounter = 0,
	  thenableIndexCounter$1 = 0,
	  thenableState$1 = null,
	  globalClientIdCounter = 0;
	function throwInvalidHookError() {
	  throw Error(formatProdErrorMessage(321));
	}
	function areHookInputsEqual(nextDeps, prevDeps) {
	  if (null === prevDeps) return false;
	  for (var i = 0; i < prevDeps.length && i < nextDeps.length; i++)
	    if (!objectIs(nextDeps[i], prevDeps[i])) return false;
	  return true;
	}
	function renderWithHooks(
	  current,
	  workInProgress,
	  Component,
	  props,
	  secondArg,
	  nextRenderLanes
	) {
	  renderLanes = nextRenderLanes;
	  currentlyRenderingFiber = workInProgress;
	  workInProgress.memoizedState = null;
	  workInProgress.updateQueue = null;
	  workInProgress.lanes = 0;
	  ReactSharedInternals.H =
	    null === current || null === current.memoizedState
	      ? HooksDispatcherOnMount
	      : HooksDispatcherOnUpdate;
	  shouldDoubleInvokeUserFnsInHooksDEV = false;
	  nextRenderLanes = Component(props, secondArg);
	  shouldDoubleInvokeUserFnsInHooksDEV = false;
	  didScheduleRenderPhaseUpdateDuringThisPass &&
	    (nextRenderLanes = renderWithHooksAgain(
	      workInProgress,
	      Component,
	      props,
	      secondArg
	    ));
	  finishRenderingHooks(current);
	  return nextRenderLanes;
	}
	function finishRenderingHooks(current) {
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  var didRenderTooFewHooks = null !== currentHook && null !== currentHook.next;
	  renderLanes = 0;
	  workInProgressHook = currentHook = currentlyRenderingFiber = null;
	  didScheduleRenderPhaseUpdate = false;
	  thenableIndexCounter$1 = 0;
	  thenableState$1 = null;
	  if (didRenderTooFewHooks) throw Error(formatProdErrorMessage(300));
	  null === current ||
	    didReceiveUpdate ||
	    ((current = current.dependencies),
	    null !== current &&
	      checkIfContextChanged(current) &&
	      (didReceiveUpdate = true));
	}
	function renderWithHooksAgain(workInProgress, Component, props, secondArg) {
	  currentlyRenderingFiber = workInProgress;
	  var numberOfReRenders = 0;
	  do {
	    didScheduleRenderPhaseUpdateDuringThisPass && (thenableState$1 = null);
	    thenableIndexCounter$1 = 0;
	    didScheduleRenderPhaseUpdateDuringThisPass = false;
	    if (25 <= numberOfReRenders) throw Error(formatProdErrorMessage(301));
	    numberOfReRenders += 1;
	    workInProgressHook = currentHook = null;
	    if (null != workInProgress.updateQueue) {
	      var children = workInProgress.updateQueue;
	      children.lastEffect = null;
	      children.events = null;
	      children.stores = null;
	      null != children.memoCache && (children.memoCache.index = 0);
	    }
	    ReactSharedInternals.H = HooksDispatcherOnRerender;
	    children = Component(props, secondArg);
	  } while (didScheduleRenderPhaseUpdateDuringThisPass);
	  return children;
	}
	function TransitionAwareHostComponent() {
	  var dispatcher = ReactSharedInternals.H,
	    maybeThenable = dispatcher.useState()[0];
	  maybeThenable =
	    "function" === typeof maybeThenable.then
	      ? useThenable(maybeThenable)
	      : maybeThenable;
	  dispatcher = dispatcher.useState()[0];
	  (null !== currentHook ? currentHook.memoizedState : null) !== dispatcher &&
	    (currentlyRenderingFiber.flags |= 1024);
	  return maybeThenable;
	}
	function checkDidRenderIdHook() {
	  var didRenderIdHook = 0 !== localIdCounter;
	  localIdCounter = 0;
	  return didRenderIdHook;
	}
	function bailoutHooks(current, workInProgress, lanes) {
	  workInProgress.updateQueue = current.updateQueue;
	  workInProgress.flags &= -2053;
	  current.lanes &= ~lanes;
	}
	function resetHooksOnUnwind(workInProgress) {
	  if (didScheduleRenderPhaseUpdate) {
	    for (
	      workInProgress = workInProgress.memoizedState;
	      null !== workInProgress;

	    ) {
	      var queue = workInProgress.queue;
	      null !== queue && (queue.pending = null);
	      workInProgress = workInProgress.next;
	    }
	    didScheduleRenderPhaseUpdate = false;
	  }
	  renderLanes = 0;
	  workInProgressHook = currentHook = currentlyRenderingFiber = null;
	  didScheduleRenderPhaseUpdateDuringThisPass = false;
	  thenableIndexCounter$1 = localIdCounter = 0;
	  thenableState$1 = null;
	}
	function mountWorkInProgressHook() {
	  var hook = {
	    memoizedState: null,
	    baseState: null,
	    baseQueue: null,
	    queue: null,
	    next: null
	  };
	  null === workInProgressHook
	    ? (currentlyRenderingFiber.memoizedState = workInProgressHook = hook)
	    : (workInProgressHook = workInProgressHook.next = hook);
	  return workInProgressHook;
	}
	function updateWorkInProgressHook() {
	  if (null === currentHook) {
	    var nextCurrentHook = currentlyRenderingFiber.alternate;
	    nextCurrentHook =
	      null !== nextCurrentHook ? nextCurrentHook.memoizedState : null;
	  } else nextCurrentHook = currentHook.next;
	  var nextWorkInProgressHook =
	    null === workInProgressHook
	      ? currentlyRenderingFiber.memoizedState
	      : workInProgressHook.next;
	  if (null !== nextWorkInProgressHook)
	    (workInProgressHook = nextWorkInProgressHook),
	      (currentHook = nextCurrentHook);
	  else {
	    if (null === nextCurrentHook) {
	      if (null === currentlyRenderingFiber.alternate)
	        throw Error(formatProdErrorMessage(467));
	      throw Error(formatProdErrorMessage(310));
	    }
	    currentHook = nextCurrentHook;
	    nextCurrentHook = {
	      memoizedState: currentHook.memoizedState,
	      baseState: currentHook.baseState,
	      baseQueue: currentHook.baseQueue,
	      queue: currentHook.queue,
	      next: null
	    };
	    null === workInProgressHook
	      ? (currentlyRenderingFiber.memoizedState = workInProgressHook =
	          nextCurrentHook)
	      : (workInProgressHook = workInProgressHook.next = nextCurrentHook);
	  }
	  return workInProgressHook;
	}
	function createFunctionComponentUpdateQueue() {
	  return { lastEffect: null, events: null, stores: null, memoCache: null };
	}
	function useThenable(thenable) {
	  var index = thenableIndexCounter$1;
	  thenableIndexCounter$1 += 1;
	  null === thenableState$1 && (thenableState$1 = []);
	  thenable = trackUsedThenable(thenableState$1, thenable, index);
	  index = currentlyRenderingFiber;
	  null ===
	    (null === workInProgressHook
	      ? index.memoizedState
	      : workInProgressHook.next) &&
	    ((index = index.alternate),
	    (ReactSharedInternals.H =
	      null === index || null === index.memoizedState
	        ? HooksDispatcherOnMount
	        : HooksDispatcherOnUpdate));
	  return thenable;
	}
	function use(usable) {
	  if (null !== usable && "object" === typeof usable) {
	    if ("function" === typeof usable.then) return useThenable(usable);
	    if (usable.$$typeof === REACT_CONTEXT_TYPE) return readContext(usable);
	  }
	  throw Error(formatProdErrorMessage(438, String(usable)));
	}
	function useMemoCache(size) {
	  var memoCache = null,
	    updateQueue = currentlyRenderingFiber.updateQueue;
	  null !== updateQueue && (memoCache = updateQueue.memoCache);
	  if (null == memoCache) {
	    var current = currentlyRenderingFiber.alternate;
	    null !== current &&
	      ((current = current.updateQueue),
	      null !== current &&
	        ((current = current.memoCache),
	        null != current &&
	          (memoCache = {
	            data: current.data.map(function (array) {
	              return array.slice();
	            }),
	            index: 0
	          })));
	  }
	  null == memoCache && (memoCache = { data: [], index: 0 });
	  null === updateQueue &&
	    ((updateQueue = createFunctionComponentUpdateQueue()),
	    (currentlyRenderingFiber.updateQueue = updateQueue));
	  updateQueue.memoCache = memoCache;
	  updateQueue = memoCache.data[memoCache.index];
	  if (void 0 === updateQueue)
	    for (
	      updateQueue = memoCache.data[memoCache.index] = Array(size), current = 0;
	      current < size;
	      current++
	    )
	      updateQueue[current] = REACT_MEMO_CACHE_SENTINEL;
	  memoCache.index++;
	  return updateQueue;
	}
	function basicStateReducer(state, action) {
	  return "function" === typeof action ? action(state) : action;
	}
	function updateReducer(reducer) {
	  var hook = updateWorkInProgressHook();
	  return updateReducerImpl(hook, currentHook, reducer);
	}
	function updateReducerImpl(hook, current, reducer) {
	  var queue = hook.queue;
	  if (null === queue) throw Error(formatProdErrorMessage(311));
	  queue.lastRenderedReducer = reducer;
	  var baseQueue = hook.baseQueue,
	    pendingQueue = queue.pending;
	  if (null !== pendingQueue) {
	    if (null !== baseQueue) {
	      var baseFirst = baseQueue.next;
	      baseQueue.next = pendingQueue.next;
	      pendingQueue.next = baseFirst;
	    }
	    current.baseQueue = baseQueue = pendingQueue;
	    queue.pending = null;
	  }
	  pendingQueue = hook.baseState;
	  if (null === baseQueue) hook.memoizedState = pendingQueue;
	  else {
	    current = baseQueue.next;
	    var newBaseQueueFirst = (baseFirst = null),
	      newBaseQueueLast = null,
	      update = current,
	      didReadFromEntangledAsyncAction$32 = false;
	    do {
	      var updateLane = update.lane & -536870913;
	      if (
	        updateLane !== update.lane
	          ? (workInProgressRootRenderLanes & updateLane) === updateLane
	          : (renderLanes & updateLane) === updateLane
	      ) {
	        var revertLane = update.revertLane;
	        if (0 === revertLane)
	          null !== newBaseQueueLast &&
	            (newBaseQueueLast = newBaseQueueLast.next =
	              {
	                lane: 0,
	                revertLane: 0,
	                action: update.action,
	                hasEagerState: update.hasEagerState,
	                eagerState: update.eagerState,
	                next: null
	              }),
	            updateLane === currentEntangledLane &&
	              (didReadFromEntangledAsyncAction$32 = true);
	        else if ((renderLanes & revertLane) === revertLane) {
	          update = update.next;
	          revertLane === currentEntangledLane &&
	            (didReadFromEntangledAsyncAction$32 = true);
	          continue;
	        } else
	          (updateLane = {
	            lane: 0,
	            revertLane: update.revertLane,
	            action: update.action,
	            hasEagerState: update.hasEagerState,
	            eagerState: update.eagerState,
	            next: null
	          }),
	            null === newBaseQueueLast
	              ? ((newBaseQueueFirst = newBaseQueueLast = updateLane),
	                (baseFirst = pendingQueue))
	              : (newBaseQueueLast = newBaseQueueLast.next = updateLane),
	            (currentlyRenderingFiber.lanes |= revertLane),
	            (workInProgressRootSkippedLanes |= revertLane);
	        updateLane = update.action;
	        shouldDoubleInvokeUserFnsInHooksDEV &&
	          reducer(pendingQueue, updateLane);
	        pendingQueue = update.hasEagerState
	          ? update.eagerState
	          : reducer(pendingQueue, updateLane);
	      } else
	        (revertLane = {
	          lane: updateLane,
	          revertLane: update.revertLane,
	          action: update.action,
	          hasEagerState: update.hasEagerState,
	          eagerState: update.eagerState,
	          next: null
	        }),
	          null === newBaseQueueLast
	            ? ((newBaseQueueFirst = newBaseQueueLast = revertLane),
	              (baseFirst = pendingQueue))
	            : (newBaseQueueLast = newBaseQueueLast.next = revertLane),
	          (currentlyRenderingFiber.lanes |= updateLane),
	          (workInProgressRootSkippedLanes |= updateLane);
	      update = update.next;
	    } while (null !== update && update !== current);
	    null === newBaseQueueLast
	      ? (baseFirst = pendingQueue)
	      : (newBaseQueueLast.next = newBaseQueueFirst);
	    if (
	      !objectIs(pendingQueue, hook.memoizedState) &&
	      ((didReceiveUpdate = true),
	      didReadFromEntangledAsyncAction$32 &&
	        ((reducer = currentEntangledActionThenable), null !== reducer))
	    )
	      throw reducer;
	    hook.memoizedState = pendingQueue;
	    hook.baseState = baseFirst;
	    hook.baseQueue = newBaseQueueLast;
	    queue.lastRenderedState = pendingQueue;
	  }
	  null === baseQueue && (queue.lanes = 0);
	  return [hook.memoizedState, queue.dispatch];
	}
	function rerenderReducer(reducer) {
	  var hook = updateWorkInProgressHook(),
	    queue = hook.queue;
	  if (null === queue) throw Error(formatProdErrorMessage(311));
	  queue.lastRenderedReducer = reducer;
	  var dispatch = queue.dispatch,
	    lastRenderPhaseUpdate = queue.pending,
	    newState = hook.memoizedState;
	  if (null !== lastRenderPhaseUpdate) {
	    queue.pending = null;
	    var update = (lastRenderPhaseUpdate = lastRenderPhaseUpdate.next);
	    do (newState = reducer(newState, update.action)), (update = update.next);
	    while (update !== lastRenderPhaseUpdate);
	    objectIs(newState, hook.memoizedState) || (didReceiveUpdate = true);
	    hook.memoizedState = newState;
	    null === hook.baseQueue && (hook.baseState = newState);
	    queue.lastRenderedState = newState;
	  }
	  return [newState, dispatch];
	}
	function updateSyncExternalStore(subscribe, getSnapshot, getServerSnapshot) {
	  var fiber = currentlyRenderingFiber,
	    hook = updateWorkInProgressHook(),
	    isHydrating$jscomp$0 = isHydrating;
	  if (isHydrating$jscomp$0) {
	    if (void 0 === getServerSnapshot) throw Error(formatProdErrorMessage(407));
	    getServerSnapshot = getServerSnapshot();
	  } else getServerSnapshot = getSnapshot();
	  var snapshotChanged = !objectIs(
	    (currentHook || hook).memoizedState,
	    getServerSnapshot
	  );
	  snapshotChanged &&
	    ((hook.memoizedState = getServerSnapshot), (didReceiveUpdate = true));
	  hook = hook.queue;
	  var create = subscribeToStore.bind(null, fiber, hook, subscribe);
	  updateEffectImpl(2048, 8, create, [subscribe]);
	  if (
	    hook.getSnapshot !== getSnapshot ||
	    snapshotChanged ||
	    (null !== workInProgressHook && workInProgressHook.memoizedState.tag & 1)
	  ) {
	    fiber.flags |= 2048;
	    pushSimpleEffect(
	      9,
	      createEffectInstance(),
	      updateStoreInstance.bind(
	        null,
	        fiber,
	        hook,
	        getServerSnapshot,
	        getSnapshot
	      ),
	      null
	    );
	    if (null === workInProgressRoot) throw Error(formatProdErrorMessage(349));
	    isHydrating$jscomp$0 ||
	      0 !== (renderLanes & 124) ||
	      pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
	  }
	  return getServerSnapshot;
	}
	function pushStoreConsistencyCheck(fiber, getSnapshot, renderedSnapshot) {
	  fiber.flags |= 16384;
	  fiber = { getSnapshot: getSnapshot, value: renderedSnapshot };
	  getSnapshot = currentlyRenderingFiber.updateQueue;
	  null === getSnapshot
	    ? ((getSnapshot = createFunctionComponentUpdateQueue()),
	      (currentlyRenderingFiber.updateQueue = getSnapshot),
	      (getSnapshot.stores = [fiber]))
	    : ((renderedSnapshot = getSnapshot.stores),
	      null === renderedSnapshot
	        ? (getSnapshot.stores = [fiber])
	        : renderedSnapshot.push(fiber));
	}
	function updateStoreInstance(fiber, inst, nextSnapshot, getSnapshot) {
	  inst.value = nextSnapshot;
	  inst.getSnapshot = getSnapshot;
	  checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	}
	function subscribeToStore(fiber, inst, subscribe) {
	  return subscribe(function () {
	    checkIfSnapshotChanged(inst) && forceStoreRerender(fiber);
	  });
	}
	function checkIfSnapshotChanged(inst) {
	  var latestGetSnapshot = inst.getSnapshot;
	  inst = inst.value;
	  try {
	    var nextValue = latestGetSnapshot();
	    return !objectIs(inst, nextValue);
	  } catch (error) {
	    return true;
	  }
	}
	function forceStoreRerender(fiber) {
	  var root = enqueueConcurrentRenderForLane(fiber, 2);
	  null !== root && scheduleUpdateOnFiber(root, fiber, 2);
	}
	function mountStateImpl(initialState) {
	  var hook = mountWorkInProgressHook();
	  if ("function" === typeof initialState) {
	    var initialStateInitializer = initialState;
	    initialState = initialStateInitializer();
	    if (shouldDoubleInvokeUserFnsInHooksDEV) {
	      setIsStrictModeForDevtools(true);
	      try {
	        initialStateInitializer();
	      } finally {
	        setIsStrictModeForDevtools(false);
	      }
	    }
	  }
	  hook.memoizedState = hook.baseState = initialState;
	  hook.queue = {
	    pending: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: basicStateReducer,
	    lastRenderedState: initialState
	  };
	  return hook;
	}
	function updateOptimisticImpl(hook, current, passthrough, reducer) {
	  hook.baseState = passthrough;
	  return updateReducerImpl(
	    hook,
	    currentHook,
	    "function" === typeof reducer ? reducer : basicStateReducer
	  );
	}
	function dispatchActionState(
	  fiber,
	  actionQueue,
	  setPendingState,
	  setState,
	  payload
	) {
	  if (isRenderPhaseUpdate(fiber)) throw Error(formatProdErrorMessage(485));
	  fiber = actionQueue.action;
	  if (null !== fiber) {
	    var actionNode = {
	      payload: payload,
	      action: fiber,
	      next: null,
	      isTransition: true,
	      status: "pending",
	      value: null,
	      reason: null,
	      listeners: [],
	      then: function (listener) {
	        actionNode.listeners.push(listener);
	      }
	    };
	    null !== ReactSharedInternals.T
	      ? setPendingState(true)
	      : (actionNode.isTransition = false);
	    setState(actionNode);
	    setPendingState = actionQueue.pending;
	    null === setPendingState
	      ? ((actionNode.next = actionQueue.pending = actionNode),
	        runActionStateAction(actionQueue, actionNode))
	      : ((actionNode.next = setPendingState.next),
	        (actionQueue.pending = setPendingState.next = actionNode));
	  }
	}
	function runActionStateAction(actionQueue, node) {
	  var action = node.action,
	    payload = node.payload,
	    prevState = actionQueue.state;
	  if (node.isTransition) {
	    var prevTransition = ReactSharedInternals.T,
	      currentTransition = {};
	    ReactSharedInternals.T = currentTransition;
	    try {
	      var returnValue = action(prevState, payload),
	        onStartTransitionFinish = ReactSharedInternals.S;
	      null !== onStartTransitionFinish &&
	        onStartTransitionFinish(currentTransition, returnValue);
	      handleActionReturnValue(actionQueue, node, returnValue);
	    } catch (error) {
	      onActionError(actionQueue, node, error);
	    } finally {
	      ReactSharedInternals.T = prevTransition;
	    }
	  } else
	    try {
	      (prevTransition = action(prevState, payload)),
	        handleActionReturnValue(actionQueue, node, prevTransition);
	    } catch (error$38) {
	      onActionError(actionQueue, node, error$38);
	    }
	}
	function handleActionReturnValue(actionQueue, node, returnValue) {
	  null !== returnValue &&
	  "object" === typeof returnValue &&
	  "function" === typeof returnValue.then
	    ? returnValue.then(
	        function (nextState) {
	          onActionSuccess(actionQueue, node, nextState);
	        },
	        function (error) {
	          return onActionError(actionQueue, node, error);
	        }
	      )
	    : onActionSuccess(actionQueue, node, returnValue);
	}
	function onActionSuccess(actionQueue, actionNode, nextState) {
	  actionNode.status = "fulfilled";
	  actionNode.value = nextState;
	  notifyActionListeners(actionNode);
	  actionQueue.state = nextState;
	  actionNode = actionQueue.pending;
	  null !== actionNode &&
	    ((nextState = actionNode.next),
	    nextState === actionNode
	      ? (actionQueue.pending = null)
	      : ((nextState = nextState.next),
	        (actionNode.next = nextState),
	        runActionStateAction(actionQueue, nextState)));
	}
	function onActionError(actionQueue, actionNode, error) {
	  var last = actionQueue.pending;
	  actionQueue.pending = null;
	  if (null !== last) {
	    last = last.next;
	    do
	      (actionNode.status = "rejected"),
	        (actionNode.reason = error),
	        notifyActionListeners(actionNode),
	        (actionNode = actionNode.next);
	    while (actionNode !== last);
	  }
	  actionQueue.action = null;
	}
	function notifyActionListeners(actionNode) {
	  actionNode = actionNode.listeners;
	  for (var i = 0; i < actionNode.length; i++) (0, actionNode[i])();
	}
	function actionStateReducer(oldState, newState) {
	  return newState;
	}
	function mountActionState(action, initialStateProp) {
	  if (isHydrating) {
	    var ssrFormState = workInProgressRoot.formState;
	    if (null !== ssrFormState) {
	      a: {
	        var JSCompiler_inline_result = currentlyRenderingFiber;
	        if (isHydrating) {
	          if (nextHydratableInstance) {
	            b: {
	              var JSCompiler_inline_result$jscomp$0 = nextHydratableInstance;
	              for (
	                var inRootOrSingleton = rootOrSingletonContext;
	                8 !== JSCompiler_inline_result$jscomp$0.nodeType;

	              ) {
	                if (!inRootOrSingleton) {
	                  JSCompiler_inline_result$jscomp$0 = null;
	                  break b;
	                }
	                JSCompiler_inline_result$jscomp$0 = getNextHydratable(
	                  JSCompiler_inline_result$jscomp$0.nextSibling
	                );
	                if (null === JSCompiler_inline_result$jscomp$0) {
	                  JSCompiler_inline_result$jscomp$0 = null;
	                  break b;
	                }
	              }
	              inRootOrSingleton = JSCompiler_inline_result$jscomp$0.data;
	              JSCompiler_inline_result$jscomp$0 =
	                "F!" === inRootOrSingleton || "F" === inRootOrSingleton
	                  ? JSCompiler_inline_result$jscomp$0
	                  : null;
	            }
	            if (JSCompiler_inline_result$jscomp$0) {
	              nextHydratableInstance = getNextHydratable(
	                JSCompiler_inline_result$jscomp$0.nextSibling
	              );
	              JSCompiler_inline_result =
	                "F!" === JSCompiler_inline_result$jscomp$0.data;
	              break a;
	            }
	          }
	          throwOnHydrationMismatch(JSCompiler_inline_result);
	        }
	        JSCompiler_inline_result = false;
	      }
	      JSCompiler_inline_result && (initialStateProp = ssrFormState[0]);
	    }
	  }
	  ssrFormState = mountWorkInProgressHook();
	  ssrFormState.memoizedState = ssrFormState.baseState = initialStateProp;
	  JSCompiler_inline_result = {
	    pending: null,
	    lanes: 0,
	    dispatch: null,
	    lastRenderedReducer: actionStateReducer,
	    lastRenderedState: initialStateProp
	  };
	  ssrFormState.queue = JSCompiler_inline_result;
	  ssrFormState = dispatchSetState.bind(
	    null,
	    currentlyRenderingFiber,
	    JSCompiler_inline_result
	  );
	  JSCompiler_inline_result.dispatch = ssrFormState;
	  JSCompiler_inline_result = mountStateImpl(false);
	  inRootOrSingleton = dispatchOptimisticSetState.bind(
	    null,
	    currentlyRenderingFiber,
	    false,
	    JSCompiler_inline_result.queue
	  );
	  JSCompiler_inline_result = mountWorkInProgressHook();
	  JSCompiler_inline_result$jscomp$0 = {
	    state: initialStateProp,
	    dispatch: null,
	    action: action,
	    pending: null
	  };
	  JSCompiler_inline_result.queue = JSCompiler_inline_result$jscomp$0;
	  ssrFormState = dispatchActionState.bind(
	    null,
	    currentlyRenderingFiber,
	    JSCompiler_inline_result$jscomp$0,
	    inRootOrSingleton,
	    ssrFormState
	  );
	  JSCompiler_inline_result$jscomp$0.dispatch = ssrFormState;
	  JSCompiler_inline_result.memoizedState = action;
	  return [initialStateProp, ssrFormState, false];
	}
	function updateActionState(action) {
	  var stateHook = updateWorkInProgressHook();
	  return updateActionStateImpl(stateHook, currentHook, action);
	}
	function updateActionStateImpl(stateHook, currentStateHook, action) {
	  currentStateHook = updateReducerImpl(
	    stateHook,
	    currentStateHook,
	    actionStateReducer
	  )[0];
	  stateHook = updateReducer(basicStateReducer)[0];
	  if (
	    "object" === typeof currentStateHook &&
	    null !== currentStateHook &&
	    "function" === typeof currentStateHook.then
	  )
	    try {
	      var state = useThenable(currentStateHook);
	    } catch (x) {
	      if (x === SuspenseException) throw SuspenseActionException;
	      throw x;
	    }
	  else state = currentStateHook;
	  currentStateHook = updateWorkInProgressHook();
	  var actionQueue = currentStateHook.queue,
	    dispatch = actionQueue.dispatch;
	  action !== currentStateHook.memoizedState &&
	    ((currentlyRenderingFiber.flags |= 2048),
	    pushSimpleEffect(
	      9,
	      createEffectInstance(),
	      actionStateActionEffect.bind(null, actionQueue, action),
	      null
	    ));
	  return [state, dispatch, stateHook];
	}
	function actionStateActionEffect(actionQueue, action) {
	  actionQueue.action = action;
	}
	function rerenderActionState(action) {
	  var stateHook = updateWorkInProgressHook(),
	    currentStateHook = currentHook;
	  if (null !== currentStateHook)
	    return updateActionStateImpl(stateHook, currentStateHook, action);
	  updateWorkInProgressHook();
	  stateHook = stateHook.memoizedState;
	  currentStateHook = updateWorkInProgressHook();
	  var dispatch = currentStateHook.queue.dispatch;
	  currentStateHook.memoizedState = action;
	  return [stateHook, dispatch, false];
	}
	function pushSimpleEffect(tag, inst, create, createDeps) {
	  tag = { tag: tag, create: create, deps: createDeps, inst: inst, next: null };
	  inst = currentlyRenderingFiber.updateQueue;
	  null === inst &&
	    ((inst = createFunctionComponentUpdateQueue()),
	    (currentlyRenderingFiber.updateQueue = inst));
	  create = inst.lastEffect;
	  null === create
	    ? (inst.lastEffect = tag.next = tag)
	    : ((createDeps = create.next),
	      (create.next = tag),
	      (tag.next = createDeps),
	      (inst.lastEffect = tag));
	  return tag;
	}
	function createEffectInstance() {
	  return { destroy: void 0, resource: void 0 };
	}
	function updateRef() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function mountEffectImpl(fiberFlags, hookFlags, create, createDeps) {
	  var hook = mountWorkInProgressHook();
	  createDeps = void 0 === createDeps ? null : createDeps;
	  currentlyRenderingFiber.flags |= fiberFlags;
	  hook.memoizedState = pushSimpleEffect(
	    1 | hookFlags,
	    createEffectInstance(),
	    create,
	    createDeps
	  );
	}
	function updateEffectImpl(fiberFlags, hookFlags, create, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var inst = hook.memoizedState.inst;
	  null !== currentHook &&
	  null !== deps &&
	  areHookInputsEqual(deps, currentHook.memoizedState.deps)
	    ? (hook.memoizedState = pushSimpleEffect(hookFlags, inst, create, deps))
	    : ((currentlyRenderingFiber.flags |= fiberFlags),
	      (hook.memoizedState = pushSimpleEffect(
	        1 | hookFlags,
	        inst,
	        create,
	        deps
	      )));
	}
	function mountEffect(create, createDeps) {
	  mountEffectImpl(8390656, 8, create, createDeps);
	}
	function updateEffect(create, createDeps) {
	  updateEffectImpl(2048, 8, create, createDeps);
	}
	function updateInsertionEffect(create, deps) {
	  return updateEffectImpl(4, 2, create, deps);
	}
	function updateLayoutEffect(create, deps) {
	  return updateEffectImpl(4, 4, create, deps);
	}
	function imperativeHandleEffect(create, ref) {
	  if ("function" === typeof ref) {
	    create = create();
	    var refCleanup = ref(create);
	    return function () {
	      "function" === typeof refCleanup ? refCleanup() : ref(null);
	    };
	  }
	  if (null !== ref && void 0 !== ref)
	    return (
	      (create = create()),
	      (ref.current = create),
	      function () {
	        ref.current = null;
	      }
	    );
	}
	function updateImperativeHandle(ref, create, deps) {
	  deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
	  updateEffectImpl(4, 4, imperativeHandleEffect.bind(null, create, ref), deps);
	}
	function mountDebugValue() {}
	function updateCallback(callback, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var prevState = hook.memoizedState;
	  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
	    return prevState[0];
	  hook.memoizedState = [callback, deps];
	  return callback;
	}
	function updateMemo(nextCreate, deps) {
	  var hook = updateWorkInProgressHook();
	  deps = void 0 === deps ? null : deps;
	  var prevState = hook.memoizedState;
	  if (null !== deps && areHookInputsEqual(deps, prevState[1]))
	    return prevState[0];
	  prevState = nextCreate();
	  if (shouldDoubleInvokeUserFnsInHooksDEV) {
	    setIsStrictModeForDevtools(true);
	    try {
	      nextCreate();
	    } finally {
	      setIsStrictModeForDevtools(false);
	    }
	  }
	  hook.memoizedState = [prevState, deps];
	  return prevState;
	}
	function mountDeferredValueImpl(hook, value, initialValue) {
	  if (void 0 === initialValue || 0 !== (renderLanes & 1073741824))
	    return (hook.memoizedState = value);
	  hook.memoizedState = initialValue;
	  hook = requestDeferredLane();
	  currentlyRenderingFiber.lanes |= hook;
	  workInProgressRootSkippedLanes |= hook;
	  return initialValue;
	}
	function updateDeferredValueImpl(hook, prevValue, value, initialValue) {
	  if (objectIs(value, prevValue)) return value;
	  if (null !== currentTreeHiddenStackCursor.current)
	    return (
	      (hook = mountDeferredValueImpl(hook, value, initialValue)),
	      objectIs(hook, prevValue) || (didReceiveUpdate = true),
	      hook
	    );
	  if (0 === (renderLanes & 42))
	    return (didReceiveUpdate = true), (hook.memoizedState = value);
	  hook = requestDeferredLane();
	  currentlyRenderingFiber.lanes |= hook;
	  workInProgressRootSkippedLanes |= hook;
	  return prevValue;
	}
	function startTransition(fiber, queue, pendingState, finishedState, callback) {
	  var previousPriority = ReactDOMSharedInternals.p;
	  ReactDOMSharedInternals.p =
	    0 !== previousPriority && 8 > previousPriority ? previousPriority : 8;
	  var prevTransition = ReactSharedInternals.T,
	    currentTransition = {};
	  ReactSharedInternals.T = currentTransition;
	  dispatchOptimisticSetState(fiber, false, queue, pendingState);
	  try {
	    var returnValue = callback(),
	      onStartTransitionFinish = ReactSharedInternals.S;
	    null !== onStartTransitionFinish &&
	      onStartTransitionFinish(currentTransition, returnValue);
	    if (
	      null !== returnValue &&
	      "object" === typeof returnValue &&
	      "function" === typeof returnValue.then
	    ) {
	      var thenableForFinishedState = chainThenableValue(
	        returnValue,
	        finishedState
	      );
	      dispatchSetStateInternal(
	        fiber,
	        queue,
	        thenableForFinishedState,
	        requestUpdateLane(fiber)
	      );
	    } else
	      dispatchSetStateInternal(
	        fiber,
	        queue,
	        finishedState,
	        requestUpdateLane(fiber)
	      );
	  } catch (error) {
	    dispatchSetStateInternal(
	      fiber,
	      queue,
	      { then: function () {}, status: "rejected", reason: error },
	      requestUpdateLane()
	    );
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function noop$2() {}
	function startHostTransition(formFiber, pendingState, action, formData) {
	  if (5 !== formFiber.tag) throw Error(formatProdErrorMessage(476));
	  var queue = ensureFormComponentIsStateful(formFiber).queue;
	  startTransition(
	    formFiber,
	    queue,
	    pendingState,
	    sharedNotPendingObject,
	    null === action
	      ? noop$2
	      : function () {
	          requestFormReset$1(formFiber);
	          return action(formData);
	        }
	  );
	}
	function ensureFormComponentIsStateful(formFiber) {
	  var existingStateHook = formFiber.memoizedState;
	  if (null !== existingStateHook) return existingStateHook;
	  existingStateHook = {
	    memoizedState: sharedNotPendingObject,
	    baseState: sharedNotPendingObject,
	    baseQueue: null,
	    queue: {
	      pending: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: basicStateReducer,
	      lastRenderedState: sharedNotPendingObject
	    },
	    next: null
	  };
	  var initialResetState = {};
	  existingStateHook.next = {
	    memoizedState: initialResetState,
	    baseState: initialResetState,
	    baseQueue: null,
	    queue: {
	      pending: null,
	      lanes: 0,
	      dispatch: null,
	      lastRenderedReducer: basicStateReducer,
	      lastRenderedState: initialResetState
	    },
	    next: null
	  };
	  formFiber.memoizedState = existingStateHook;
	  formFiber = formFiber.alternate;
	  null !== formFiber && (formFiber.memoizedState = existingStateHook);
	  return existingStateHook;
	}
	function requestFormReset$1(formFiber) {
	  var resetStateQueue = ensureFormComponentIsStateful(formFiber).next.queue;
	  dispatchSetStateInternal(formFiber, resetStateQueue, {}, requestUpdateLane());
	}
	function useHostTransitionStatus() {
	  return readContext(HostTransitionContext);
	}
	function updateId() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function updateRefresh() {
	  return updateWorkInProgressHook().memoizedState;
	}
	function refreshCache(fiber) {
	  for (var provider = fiber.return; null !== provider; ) {
	    switch (provider.tag) {
	      case 24:
	      case 3:
	        var lane = requestUpdateLane();
	        fiber = createUpdate(lane);
	        var root$41 = enqueueUpdate(provider, fiber, lane);
	        null !== root$41 &&
	          (scheduleUpdateOnFiber(root$41, provider, lane),
	          entangleTransitions(root$41, provider, lane));
	        provider = { cache: createCache() };
	        fiber.payload = provider;
	        return;
	    }
	    provider = provider.return;
	  }
	}
	function dispatchReducerAction(fiber, queue, action) {
	  var lane = requestUpdateLane();
	  action = {
	    lane: lane,
	    revertLane: 0,
	    action: action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  isRenderPhaseUpdate(fiber)
	    ? enqueueRenderPhaseUpdate(queue, action)
	    : ((action = enqueueConcurrentHookUpdate(fiber, queue, action, lane)),
	      null !== action &&
	        (scheduleUpdateOnFiber(action, fiber, lane),
	        entangleTransitionUpdate(action, queue, lane)));
	}
	function dispatchSetState(fiber, queue, action) {
	  var lane = requestUpdateLane();
	  dispatchSetStateInternal(fiber, queue, action, lane);
	}
	function dispatchSetStateInternal(fiber, queue, action, lane) {
	  var update = {
	    lane: lane,
	    revertLane: 0,
	    action: action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  if (isRenderPhaseUpdate(fiber)) enqueueRenderPhaseUpdate(queue, update);
	  else {
	    var alternate = fiber.alternate;
	    if (
	      0 === fiber.lanes &&
	      (null === alternate || 0 === alternate.lanes) &&
	      ((alternate = queue.lastRenderedReducer), null !== alternate)
	    )
	      try {
	        var currentState = queue.lastRenderedState,
	          eagerState = alternate(currentState, action);
	        update.hasEagerState = !0;
	        update.eagerState = eagerState;
	        if (objectIs(eagerState, currentState))
	          return (
	            enqueueUpdate$1(fiber, queue, update, 0),
	            null === workInProgressRoot && finishQueueingConcurrentUpdates(),
	            !1
	          );
	      } catch (error) {
	      } finally {
	      }
	    action = enqueueConcurrentHookUpdate(fiber, queue, update, lane);
	    if (null !== action)
	      return (
	        scheduleUpdateOnFiber(action, fiber, lane),
	        entangleTransitionUpdate(action, queue, lane),
	        true
	      );
	  }
	  return false;
	}
	function dispatchOptimisticSetState(fiber, throwIfDuringRender, queue, action) {
	  action = {
	    lane: 2,
	    revertLane: requestTransitionLane(),
	    action: action,
	    hasEagerState: false,
	    eagerState: null,
	    next: null
	  };
	  if (isRenderPhaseUpdate(fiber)) {
	    if (throwIfDuringRender) throw Error(formatProdErrorMessage(479));
	  } else
	    (throwIfDuringRender = enqueueConcurrentHookUpdate(
	      fiber,
	      queue,
	      action,
	      2
	    )),
	      null !== throwIfDuringRender &&
	        scheduleUpdateOnFiber(throwIfDuringRender, fiber, 2);
	}
	function isRenderPhaseUpdate(fiber) {
	  var alternate = fiber.alternate;
	  return (
	    fiber === currentlyRenderingFiber ||
	    (null !== alternate && alternate === currentlyRenderingFiber)
	  );
	}
	function enqueueRenderPhaseUpdate(queue, update) {
	  didScheduleRenderPhaseUpdateDuringThisPass = didScheduleRenderPhaseUpdate =
	    true;
	  var pending = queue.pending;
	  null === pending
	    ? (update.next = update)
	    : ((update.next = pending.next), (pending.next = update));
	  queue.pending = update;
	}
	function entangleTransitionUpdate(root, queue, lane) {
	  if (0 !== (lane & 4194048)) {
	    var queueLanes = queue.lanes;
	    queueLanes &= root.pendingLanes;
	    lane |= queueLanes;
	    queue.lanes = lane;
	    markRootEntangled(root, lane);
	  }
	}
	var ContextOnlyDispatcher = {
	    readContext: readContext,
	    use: use,
	    useCallback: throwInvalidHookError,
	    useContext: throwInvalidHookError,
	    useEffect: throwInvalidHookError,
	    useImperativeHandle: throwInvalidHookError,
	    useLayoutEffect: throwInvalidHookError,
	    useInsertionEffect: throwInvalidHookError,
	    useMemo: throwInvalidHookError,
	    useReducer: throwInvalidHookError,
	    useRef: throwInvalidHookError,
	    useState: throwInvalidHookError,
	    useDebugValue: throwInvalidHookError,
	    useDeferredValue: throwInvalidHookError,
	    useTransition: throwInvalidHookError,
	    useSyncExternalStore: throwInvalidHookError,
	    useId: throwInvalidHookError,
	    useHostTransitionStatus: throwInvalidHookError,
	    useFormState: throwInvalidHookError,
	    useActionState: throwInvalidHookError,
	    useOptimistic: throwInvalidHookError,
	    useMemoCache: throwInvalidHookError,
	    useCacheRefresh: throwInvalidHookError
	  },
	  HooksDispatcherOnMount = {
	    readContext: readContext,
	    use: use,
	    useCallback: function (callback, deps) {
	      mountWorkInProgressHook().memoizedState = [
	        callback,
	        void 0 === deps ? null : deps
	      ];
	      return callback;
	    },
	    useContext: readContext,
	    useEffect: mountEffect,
	    useImperativeHandle: function (ref, create, deps) {
	      deps = null !== deps && void 0 !== deps ? deps.concat([ref]) : null;
	      mountEffectImpl(
	        4194308,
	        4,
	        imperativeHandleEffect.bind(null, create, ref),
	        deps
	      );
	    },
	    useLayoutEffect: function (create, deps) {
	      return mountEffectImpl(4194308, 4, create, deps);
	    },
	    useInsertionEffect: function (create, deps) {
	      mountEffectImpl(4, 2, create, deps);
	    },
	    useMemo: function (nextCreate, deps) {
	      var hook = mountWorkInProgressHook();
	      deps = void 0 === deps ? null : deps;
	      var nextValue = nextCreate();
	      if (shouldDoubleInvokeUserFnsInHooksDEV) {
	        setIsStrictModeForDevtools(true);
	        try {
	          nextCreate();
	        } finally {
	          setIsStrictModeForDevtools(false);
	        }
	      }
	      hook.memoizedState = [nextValue, deps];
	      return nextValue;
	    },
	    useReducer: function (reducer, initialArg, init) {
	      var hook = mountWorkInProgressHook();
	      if (void 0 !== init) {
	        var initialState = init(initialArg);
	        if (shouldDoubleInvokeUserFnsInHooksDEV) {
	          setIsStrictModeForDevtools(true);
	          try {
	            init(initialArg);
	          } finally {
	            setIsStrictModeForDevtools(false);
	          }
	        }
	      } else initialState = initialArg;
	      hook.memoizedState = hook.baseState = initialState;
	      reducer = {
	        pending: null,
	        lanes: 0,
	        dispatch: null,
	        lastRenderedReducer: reducer,
	        lastRenderedState: initialState
	      };
	      hook.queue = reducer;
	      reducer = reducer.dispatch = dispatchReducerAction.bind(
	        null,
	        currentlyRenderingFiber,
	        reducer
	      );
	      return [hook.memoizedState, reducer];
	    },
	    useRef: function (initialValue) {
	      var hook = mountWorkInProgressHook();
	      initialValue = { current: initialValue };
	      return (hook.memoizedState = initialValue);
	    },
	    useState: function (initialState) {
	      initialState = mountStateImpl(initialState);
	      var queue = initialState.queue,
	        dispatch = dispatchSetState.bind(null, currentlyRenderingFiber, queue);
	      queue.dispatch = dispatch;
	      return [initialState.memoizedState, dispatch];
	    },
	    useDebugValue: mountDebugValue,
	    useDeferredValue: function (value, initialValue) {
	      var hook = mountWorkInProgressHook();
	      return mountDeferredValueImpl(hook, value, initialValue);
	    },
	    useTransition: function () {
	      var stateHook = mountStateImpl(false);
	      stateHook = startTransition.bind(
	        null,
	        currentlyRenderingFiber,
	        stateHook.queue,
	        true,
	        false
	      );
	      mountWorkInProgressHook().memoizedState = stateHook;
	      return [false, stateHook];
	    },
	    useSyncExternalStore: function (subscribe, getSnapshot, getServerSnapshot) {
	      var fiber = currentlyRenderingFiber,
	        hook = mountWorkInProgressHook();
	      if (isHydrating) {
	        if (void 0 === getServerSnapshot)
	          throw Error(formatProdErrorMessage(407));
	        getServerSnapshot = getServerSnapshot();
	      } else {
	        getServerSnapshot = getSnapshot();
	        if (null === workInProgressRoot)
	          throw Error(formatProdErrorMessage(349));
	        0 !== (workInProgressRootRenderLanes & 124) ||
	          pushStoreConsistencyCheck(fiber, getSnapshot, getServerSnapshot);
	      }
	      hook.memoizedState = getServerSnapshot;
	      var inst = { value: getServerSnapshot, getSnapshot: getSnapshot };
	      hook.queue = inst;
	      mountEffect(subscribeToStore.bind(null, fiber, inst, subscribe), [
	        subscribe
	      ]);
	      fiber.flags |= 2048;
	      pushSimpleEffect(
	        9,
	        createEffectInstance(),
	        updateStoreInstance.bind(
	          null,
	          fiber,
	          inst,
	          getServerSnapshot,
	          getSnapshot
	        ),
	        null
	      );
	      return getServerSnapshot;
	    },
	    useId: function () {
	      var hook = mountWorkInProgressHook(),
	        identifierPrefix = workInProgressRoot.identifierPrefix;
	      if (isHydrating) {
	        var JSCompiler_inline_result = treeContextOverflow;
	        var idWithLeadingBit = treeContextId;
	        JSCompiler_inline_result =
	          (
	            idWithLeadingBit & ~(1 << (32 - clz32(idWithLeadingBit) - 1))
	          ).toString(32) + JSCompiler_inline_result;
	        identifierPrefix =
	          "\u00ab" + identifierPrefix + "R" + JSCompiler_inline_result;
	        JSCompiler_inline_result = localIdCounter++;
	        0 < JSCompiler_inline_result &&
	          (identifierPrefix += "H" + JSCompiler_inline_result.toString(32));
	        identifierPrefix += "\u00bb";
	      } else
	        (JSCompiler_inline_result = globalClientIdCounter++),
	          (identifierPrefix =
	            "\u00ab" +
	            identifierPrefix +
	            "r" +
	            JSCompiler_inline_result.toString(32) +
	            "\u00bb");
	      return (hook.memoizedState = identifierPrefix);
	    },
	    useHostTransitionStatus: useHostTransitionStatus,
	    useFormState: mountActionState,
	    useActionState: mountActionState,
	    useOptimistic: function (passthrough) {
	      var hook = mountWorkInProgressHook();
	      hook.memoizedState = hook.baseState = passthrough;
	      var queue = {
	        pending: null,
	        lanes: 0,
	        dispatch: null,
	        lastRenderedReducer: null,
	        lastRenderedState: null
	      };
	      hook.queue = queue;
	      hook = dispatchOptimisticSetState.bind(
	        null,
	        currentlyRenderingFiber,
	        true,
	        queue
	      );
	      queue.dispatch = hook;
	      return [passthrough, hook];
	    },
	    useMemoCache: useMemoCache,
	    useCacheRefresh: function () {
	      return (mountWorkInProgressHook().memoizedState = refreshCache.bind(
	        null,
	        currentlyRenderingFiber
	      ));
	    }
	  },
	  HooksDispatcherOnUpdate = {
	    readContext: readContext,
	    use: use,
	    useCallback: updateCallback,
	    useContext: readContext,
	    useEffect: updateEffect,
	    useImperativeHandle: updateImperativeHandle,
	    useInsertionEffect: updateInsertionEffect,
	    useLayoutEffect: updateLayoutEffect,
	    useMemo: updateMemo,
	    useReducer: updateReducer,
	    useRef: updateRef,
	    useState: function () {
	      return updateReducer(basicStateReducer);
	    },
	    useDebugValue: mountDebugValue,
	    useDeferredValue: function (value, initialValue) {
	      var hook = updateWorkInProgressHook();
	      return updateDeferredValueImpl(
	        hook,
	        currentHook.memoizedState,
	        value,
	        initialValue
	      );
	    },
	    useTransition: function () {
	      var booleanOrThenable = updateReducer(basicStateReducer)[0],
	        start = updateWorkInProgressHook().memoizedState;
	      return [
	        "boolean" === typeof booleanOrThenable
	          ? booleanOrThenable
	          : useThenable(booleanOrThenable),
	        start
	      ];
	    },
	    useSyncExternalStore: updateSyncExternalStore,
	    useId: updateId,
	    useHostTransitionStatus: useHostTransitionStatus,
	    useFormState: updateActionState,
	    useActionState: updateActionState,
	    useOptimistic: function (passthrough, reducer) {
	      var hook = updateWorkInProgressHook();
	      return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
	    },
	    useMemoCache: useMemoCache,
	    useCacheRefresh: updateRefresh
	  },
	  HooksDispatcherOnRerender = {
	    readContext: readContext,
	    use: use,
	    useCallback: updateCallback,
	    useContext: readContext,
	    useEffect: updateEffect,
	    useImperativeHandle: updateImperativeHandle,
	    useInsertionEffect: updateInsertionEffect,
	    useLayoutEffect: updateLayoutEffect,
	    useMemo: updateMemo,
	    useReducer: rerenderReducer,
	    useRef: updateRef,
	    useState: function () {
	      return rerenderReducer(basicStateReducer);
	    },
	    useDebugValue: mountDebugValue,
	    useDeferredValue: function (value, initialValue) {
	      var hook = updateWorkInProgressHook();
	      return null === currentHook
	        ? mountDeferredValueImpl(hook, value, initialValue)
	        : updateDeferredValueImpl(
	            hook,
	            currentHook.memoizedState,
	            value,
	            initialValue
	          );
	    },
	    useTransition: function () {
	      var booleanOrThenable = rerenderReducer(basicStateReducer)[0],
	        start = updateWorkInProgressHook().memoizedState;
	      return [
	        "boolean" === typeof booleanOrThenable
	          ? booleanOrThenable
	          : useThenable(booleanOrThenable),
	        start
	      ];
	    },
	    useSyncExternalStore: updateSyncExternalStore,
	    useId: updateId,
	    useHostTransitionStatus: useHostTransitionStatus,
	    useFormState: rerenderActionState,
	    useActionState: rerenderActionState,
	    useOptimistic: function (passthrough, reducer) {
	      var hook = updateWorkInProgressHook();
	      if (null !== currentHook)
	        return updateOptimisticImpl(hook, currentHook, passthrough, reducer);
	      hook.baseState = passthrough;
	      return [passthrough, hook.queue.dispatch];
	    },
	    useMemoCache: useMemoCache,
	    useCacheRefresh: updateRefresh
	  },
	  thenableState = null,
	  thenableIndexCounter = 0;
	function unwrapThenable(thenable) {
	  var index = thenableIndexCounter;
	  thenableIndexCounter += 1;
	  null === thenableState && (thenableState = []);
	  return trackUsedThenable(thenableState, thenable, index);
	}
	function coerceRef(workInProgress, element) {
	  element = element.props.ref;
	  workInProgress.ref = void 0 !== element ? element : null;
	}
	function throwOnInvalidObjectType(returnFiber, newChild) {
	  if (newChild.$$typeof === REACT_LEGACY_ELEMENT_TYPE)
	    throw Error(formatProdErrorMessage(525));
	  returnFiber = Object.prototype.toString.call(newChild);
	  throw Error(
	    formatProdErrorMessage(
	      31,
	      "[object Object]" === returnFiber
	        ? "object with keys {" + Object.keys(newChild).join(", ") + "}"
	        : returnFiber
	    )
	  );
	}
	function resolveLazy(lazyType) {
	  var init = lazyType._init;
	  return init(lazyType._payload);
	}
	function createChildReconciler(shouldTrackSideEffects) {
	  function deleteChild(returnFiber, childToDelete) {
	    if (shouldTrackSideEffects) {
	      var deletions = returnFiber.deletions;
	      null === deletions
	        ? ((returnFiber.deletions = [childToDelete]), (returnFiber.flags |= 16))
	        : deletions.push(childToDelete);
	    }
	  }
	  function deleteRemainingChildren(returnFiber, currentFirstChild) {
	    if (!shouldTrackSideEffects) return null;
	    for (; null !== currentFirstChild; )
	      deleteChild(returnFiber, currentFirstChild),
	        (currentFirstChild = currentFirstChild.sibling);
	    return null;
	  }
	  function mapRemainingChildren(currentFirstChild) {
	    for (var existingChildren = new Map(); null !== currentFirstChild; )
	      null !== currentFirstChild.key
	        ? existingChildren.set(currentFirstChild.key, currentFirstChild)
	        : existingChildren.set(currentFirstChild.index, currentFirstChild),
	        (currentFirstChild = currentFirstChild.sibling);
	    return existingChildren;
	  }
	  function useFiber(fiber, pendingProps) {
	    fiber = createWorkInProgress(fiber, pendingProps);
	    fiber.index = 0;
	    fiber.sibling = null;
	    return fiber;
	  }
	  function placeChild(newFiber, lastPlacedIndex, newIndex) {
	    newFiber.index = newIndex;
	    if (!shouldTrackSideEffects)
	      return (newFiber.flags |= 1048576), lastPlacedIndex;
	    newIndex = newFiber.alternate;
	    if (null !== newIndex)
	      return (
	        (newIndex = newIndex.index),
	        newIndex < lastPlacedIndex
	          ? ((newFiber.flags |= 67108866), lastPlacedIndex)
	          : newIndex
	      );
	    newFiber.flags |= 67108866;
	    return lastPlacedIndex;
	  }
	  function placeSingleChild(newFiber) {
	    shouldTrackSideEffects &&
	      null === newFiber.alternate &&
	      (newFiber.flags |= 67108866);
	    return newFiber;
	  }
	  function updateTextNode(returnFiber, current, textContent, lanes) {
	    if (null === current || 6 !== current.tag)
	      return (
	        (current = createFiberFromText(textContent, returnFiber.mode, lanes)),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, textContent);
	    current.return = returnFiber;
	    return current;
	  }
	  function updateElement(returnFiber, current, element, lanes) {
	    var elementType = element.type;
	    if (elementType === REACT_FRAGMENT_TYPE)
	      return updateFragment(
	        returnFiber,
	        current,
	        element.props.children,
	        lanes,
	        element.key
	      );
	    if (
	      null !== current &&
	      (current.elementType === elementType ||
	        ("object" === typeof elementType &&
	          null !== elementType &&
	          elementType.$$typeof === REACT_LAZY_TYPE &&
	          resolveLazy(elementType) === current.type))
	    )
	      return (
	        (current = useFiber(current, element.props)),
	        coerceRef(current, element),
	        (current.return = returnFiber),
	        current
	      );
	    current = createFiberFromTypeAndProps(
	      element.type,
	      element.key,
	      element.props,
	      null,
	      returnFiber.mode,
	      lanes
	    );
	    coerceRef(current, element);
	    current.return = returnFiber;
	    return current;
	  }
	  function updatePortal(returnFiber, current, portal, lanes) {
	    if (
	      null === current ||
	      4 !== current.tag ||
	      current.stateNode.containerInfo !== portal.containerInfo ||
	      current.stateNode.implementation !== portal.implementation
	    )
	      return (
	        (current = createFiberFromPortal(portal, returnFiber.mode, lanes)),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, portal.children || []);
	    current.return = returnFiber;
	    return current;
	  }
	  function updateFragment(returnFiber, current, fragment, lanes, key) {
	    if (null === current || 7 !== current.tag)
	      return (
	        (current = createFiberFromFragment(
	          fragment,
	          returnFiber.mode,
	          lanes,
	          key
	        )),
	        (current.return = returnFiber),
	        current
	      );
	    current = useFiber(current, fragment);
	    current.return = returnFiber;
	    return current;
	  }
	  function createChild(returnFiber, newChild, lanes) {
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return (
	        (newChild = createFiberFromText(
	          "" + newChild,
	          returnFiber.mode,
	          lanes
	        )),
	        (newChild.return = returnFiber),
	        newChild
	      );
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return (
	            (lanes = createFiberFromTypeAndProps(
	              newChild.type,
	              newChild.key,
	              newChild.props,
	              null,
	              returnFiber.mode,
	              lanes
	            )),
	            coerceRef(lanes, newChild),
	            (lanes.return = returnFiber),
	            lanes
	          );
	        case REACT_PORTAL_TYPE:
	          return (
	            (newChild = createFiberFromPortal(
	              newChild,
	              returnFiber.mode,
	              lanes
	            )),
	            (newChild.return = returnFiber),
	            newChild
	          );
	        case REACT_LAZY_TYPE:
	          var init = newChild._init;
	          newChild = init(newChild._payload);
	          return createChild(returnFiber, newChild, lanes);
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return (
	          (newChild = createFiberFromFragment(
	            newChild,
	            returnFiber.mode,
	            lanes,
	            null
	          )),
	          (newChild.return = returnFiber),
	          newChild
	        );
	      if ("function" === typeof newChild.then)
	        return createChild(returnFiber, unwrapThenable(newChild), lanes);
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return createChild(
	          returnFiber,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return null;
	  }
	  function updateSlot(returnFiber, oldFiber, newChild, lanes) {
	    var key = null !== oldFiber ? oldFiber.key : null;
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return null !== key
	        ? null
	        : updateTextNode(returnFiber, oldFiber, "" + newChild, lanes);
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return newChild.key === key
	            ? updateElement(returnFiber, oldFiber, newChild, lanes)
	            : null;
	        case REACT_PORTAL_TYPE:
	          return newChild.key === key
	            ? updatePortal(returnFiber, oldFiber, newChild, lanes)
	            : null;
	        case REACT_LAZY_TYPE:
	          return (
	            (key = newChild._init),
	            (newChild = key(newChild._payload)),
	            updateSlot(returnFiber, oldFiber, newChild, lanes)
	          );
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return null !== key
	          ? null
	          : updateFragment(returnFiber, oldFiber, newChild, lanes, null);
	      if ("function" === typeof newChild.then)
	        return updateSlot(
	          returnFiber,
	          oldFiber,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return updateSlot(
	          returnFiber,
	          oldFiber,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return null;
	  }
	  function updateFromMap(
	    existingChildren,
	    returnFiber,
	    newIdx,
	    newChild,
	    lanes
	  ) {
	    if (
	      ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	    )
	      return (
	        (existingChildren = existingChildren.get(newIdx) || null),
	        updateTextNode(returnFiber, existingChildren, "" + newChild, lanes)
	      );
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          return (
	            (existingChildren =
	              existingChildren.get(
	                null === newChild.key ? newIdx : newChild.key
	              ) || null),
	            updateElement(returnFiber, existingChildren, newChild, lanes)
	          );
	        case REACT_PORTAL_TYPE:
	          return (
	            (existingChildren =
	              existingChildren.get(
	                null === newChild.key ? newIdx : newChild.key
	              ) || null),
	            updatePortal(returnFiber, existingChildren, newChild, lanes)
	          );
	        case REACT_LAZY_TYPE:
	          var init = newChild._init;
	          newChild = init(newChild._payload);
	          return updateFromMap(
	            existingChildren,
	            returnFiber,
	            newIdx,
	            newChild,
	            lanes
	          );
	      }
	      if (isArrayImpl(newChild) || getIteratorFn(newChild))
	        return (
	          (existingChildren = existingChildren.get(newIdx) || null),
	          updateFragment(returnFiber, existingChildren, newChild, lanes, null)
	        );
	      if ("function" === typeof newChild.then)
	        return updateFromMap(
	          existingChildren,
	          returnFiber,
	          newIdx,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return updateFromMap(
	          existingChildren,
	          returnFiber,
	          newIdx,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return null;
	  }
	  function reconcileChildrenArray(
	    returnFiber,
	    currentFirstChild,
	    newChildren,
	    lanes
	  ) {
	    for (
	      var resultingFirstChild = null,
	        previousNewFiber = null,
	        oldFiber = currentFirstChild,
	        newIdx = (currentFirstChild = 0),
	        nextOldFiber = null;
	      null !== oldFiber && newIdx < newChildren.length;
	      newIdx++
	    ) {
	      oldFiber.index > newIdx
	        ? ((nextOldFiber = oldFiber), (oldFiber = null))
	        : (nextOldFiber = oldFiber.sibling);
	      var newFiber = updateSlot(
	        returnFiber,
	        oldFiber,
	        newChildren[newIdx],
	        lanes
	      );
	      if (null === newFiber) {
	        null === oldFiber && (oldFiber = nextOldFiber);
	        break;
	      }
	      shouldTrackSideEffects &&
	        oldFiber &&
	        null === newFiber.alternate &&
	        deleteChild(returnFiber, oldFiber);
	      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
	      null === previousNewFiber
	        ? (resultingFirstChild = newFiber)
	        : (previousNewFiber.sibling = newFiber);
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }
	    if (newIdx === newChildren.length)
	      return (
	        deleteRemainingChildren(returnFiber, oldFiber),
	        isHydrating && pushTreeFork(returnFiber, newIdx),
	        resultingFirstChild
	      );
	    if (null === oldFiber) {
	      for (; newIdx < newChildren.length; newIdx++)
	        (oldFiber = createChild(returnFiber, newChildren[newIdx], lanes)),
	          null !== oldFiber &&
	            ((currentFirstChild = placeChild(
	              oldFiber,
	              currentFirstChild,
	              newIdx
	            )),
	            null === previousNewFiber
	              ? (resultingFirstChild = oldFiber)
	              : (previousNewFiber.sibling = oldFiber),
	            (previousNewFiber = oldFiber));
	      isHydrating && pushTreeFork(returnFiber, newIdx);
	      return resultingFirstChild;
	    }
	    for (
	      oldFiber = mapRemainingChildren(oldFiber);
	      newIdx < newChildren.length;
	      newIdx++
	    )
	      (nextOldFiber = updateFromMap(
	        oldFiber,
	        returnFiber,
	        newIdx,
	        newChildren[newIdx],
	        lanes
	      )),
	        null !== nextOldFiber &&
	          (shouldTrackSideEffects &&
	            null !== nextOldFiber.alternate &&
	            oldFiber.delete(
	              null === nextOldFiber.key ? newIdx : nextOldFiber.key
	            ),
	          (currentFirstChild = placeChild(
	            nextOldFiber,
	            currentFirstChild,
	            newIdx
	          )),
	          null === previousNewFiber
	            ? (resultingFirstChild = nextOldFiber)
	            : (previousNewFiber.sibling = nextOldFiber),
	          (previousNewFiber = nextOldFiber));
	    shouldTrackSideEffects &&
	      oldFiber.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    isHydrating && pushTreeFork(returnFiber, newIdx);
	    return resultingFirstChild;
	  }
	  function reconcileChildrenIterator(
	    returnFiber,
	    currentFirstChild,
	    newChildren,
	    lanes
	  ) {
	    if (null == newChildren) throw Error(formatProdErrorMessage(151));
	    for (
	      var resultingFirstChild = null,
	        previousNewFiber = null,
	        oldFiber = currentFirstChild,
	        newIdx = (currentFirstChild = 0),
	        nextOldFiber = null,
	        step = newChildren.next();
	      null !== oldFiber && !step.done;
	      newIdx++, step = newChildren.next()
	    ) {
	      oldFiber.index > newIdx
	        ? ((nextOldFiber = oldFiber), (oldFiber = null))
	        : (nextOldFiber = oldFiber.sibling);
	      var newFiber = updateSlot(returnFiber, oldFiber, step.value, lanes);
	      if (null === newFiber) {
	        null === oldFiber && (oldFiber = nextOldFiber);
	        break;
	      }
	      shouldTrackSideEffects &&
	        oldFiber &&
	        null === newFiber.alternate &&
	        deleteChild(returnFiber, oldFiber);
	      currentFirstChild = placeChild(newFiber, currentFirstChild, newIdx);
	      null === previousNewFiber
	        ? (resultingFirstChild = newFiber)
	        : (previousNewFiber.sibling = newFiber);
	      previousNewFiber = newFiber;
	      oldFiber = nextOldFiber;
	    }
	    if (step.done)
	      return (
	        deleteRemainingChildren(returnFiber, oldFiber),
	        isHydrating && pushTreeFork(returnFiber, newIdx),
	        resultingFirstChild
	      );
	    if (null === oldFiber) {
	      for (; !step.done; newIdx++, step = newChildren.next())
	        (step = createChild(returnFiber, step.value, lanes)),
	          null !== step &&
	            ((currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
	            null === previousNewFiber
	              ? (resultingFirstChild = step)
	              : (previousNewFiber.sibling = step),
	            (previousNewFiber = step));
	      isHydrating && pushTreeFork(returnFiber, newIdx);
	      return resultingFirstChild;
	    }
	    for (
	      oldFiber = mapRemainingChildren(oldFiber);
	      !step.done;
	      newIdx++, step = newChildren.next()
	    )
	      (step = updateFromMap(oldFiber, returnFiber, newIdx, step.value, lanes)),
	        null !== step &&
	          (shouldTrackSideEffects &&
	            null !== step.alternate &&
	            oldFiber.delete(null === step.key ? newIdx : step.key),
	          (currentFirstChild = placeChild(step, currentFirstChild, newIdx)),
	          null === previousNewFiber
	            ? (resultingFirstChild = step)
	            : (previousNewFiber.sibling = step),
	          (previousNewFiber = step));
	    shouldTrackSideEffects &&
	      oldFiber.forEach(function (child) {
	        return deleteChild(returnFiber, child);
	      });
	    isHydrating && pushTreeFork(returnFiber, newIdx);
	    return resultingFirstChild;
	  }
	  function reconcileChildFibersImpl(
	    returnFiber,
	    currentFirstChild,
	    newChild,
	    lanes
	  ) {
	    "object" === typeof newChild &&
	      null !== newChild &&
	      newChild.type === REACT_FRAGMENT_TYPE &&
	      null === newChild.key &&
	      (newChild = newChild.props.children);
	    if ("object" === typeof newChild && null !== newChild) {
	      switch (newChild.$$typeof) {
	        case REACT_ELEMENT_TYPE:
	          a: {
	            for (var key = newChild.key; null !== currentFirstChild; ) {
	              if (currentFirstChild.key === key) {
	                key = newChild.type;
	                if (key === REACT_FRAGMENT_TYPE) {
	                  if (7 === currentFirstChild.tag) {
	                    deleteRemainingChildren(
	                      returnFiber,
	                      currentFirstChild.sibling
	                    );
	                    lanes = useFiber(
	                      currentFirstChild,
	                      newChild.props.children
	                    );
	                    lanes.return = returnFiber;
	                    returnFiber = lanes;
	                    break a;
	                  }
	                } else if (
	                  currentFirstChild.elementType === key ||
	                  ("object" === typeof key &&
	                    null !== key &&
	                    key.$$typeof === REACT_LAZY_TYPE &&
	                    resolveLazy(key) === currentFirstChild.type)
	                ) {
	                  deleteRemainingChildren(
	                    returnFiber,
	                    currentFirstChild.sibling
	                  );
	                  lanes = useFiber(currentFirstChild, newChild.props);
	                  coerceRef(lanes, newChild);
	                  lanes.return = returnFiber;
	                  returnFiber = lanes;
	                  break a;
	                }
	                deleteRemainingChildren(returnFiber, currentFirstChild);
	                break;
	              } else deleteChild(returnFiber, currentFirstChild);
	              currentFirstChild = currentFirstChild.sibling;
	            }
	            newChild.type === REACT_FRAGMENT_TYPE
	              ? ((lanes = createFiberFromFragment(
	                  newChild.props.children,
	                  returnFiber.mode,
	                  lanes,
	                  newChild.key
	                )),
	                (lanes.return = returnFiber),
	                (returnFiber = lanes))
	              : ((lanes = createFiberFromTypeAndProps(
	                  newChild.type,
	                  newChild.key,
	                  newChild.props,
	                  null,
	                  returnFiber.mode,
	                  lanes
	                )),
	                coerceRef(lanes, newChild),
	                (lanes.return = returnFiber),
	                (returnFiber = lanes));
	          }
	          return placeSingleChild(returnFiber);
	        case REACT_PORTAL_TYPE:
	          a: {
	            for (key = newChild.key; null !== currentFirstChild; ) {
	              if (currentFirstChild.key === key)
	                if (
	                  4 === currentFirstChild.tag &&
	                  currentFirstChild.stateNode.containerInfo ===
	                    newChild.containerInfo &&
	                  currentFirstChild.stateNode.implementation ===
	                    newChild.implementation
	                ) {
	                  deleteRemainingChildren(
	                    returnFiber,
	                    currentFirstChild.sibling
	                  );
	                  lanes = useFiber(currentFirstChild, newChild.children || []);
	                  lanes.return = returnFiber;
	                  returnFiber = lanes;
	                  break a;
	                } else {
	                  deleteRemainingChildren(returnFiber, currentFirstChild);
	                  break;
	                }
	              else deleteChild(returnFiber, currentFirstChild);
	              currentFirstChild = currentFirstChild.sibling;
	            }
	            lanes = createFiberFromPortal(newChild, returnFiber.mode, lanes);
	            lanes.return = returnFiber;
	            returnFiber = lanes;
	          }
	          return placeSingleChild(returnFiber);
	        case REACT_LAZY_TYPE:
	          return (
	            (key = newChild._init),
	            (newChild = key(newChild._payload)),
	            reconcileChildFibersImpl(
	              returnFiber,
	              currentFirstChild,
	              newChild,
	              lanes
	            )
	          );
	      }
	      if (isArrayImpl(newChild))
	        return reconcileChildrenArray(
	          returnFiber,
	          currentFirstChild,
	          newChild,
	          lanes
	        );
	      if (getIteratorFn(newChild)) {
	        key = getIteratorFn(newChild);
	        if ("function" !== typeof key) throw Error(formatProdErrorMessage(150));
	        newChild = key.call(newChild);
	        return reconcileChildrenIterator(
	          returnFiber,
	          currentFirstChild,
	          newChild,
	          lanes
	        );
	      }
	      if ("function" === typeof newChild.then)
	        return reconcileChildFibersImpl(
	          returnFiber,
	          currentFirstChild,
	          unwrapThenable(newChild),
	          lanes
	        );
	      if (newChild.$$typeof === REACT_CONTEXT_TYPE)
	        return reconcileChildFibersImpl(
	          returnFiber,
	          currentFirstChild,
	          readContextDuringReconciliation(returnFiber, newChild),
	          lanes
	        );
	      throwOnInvalidObjectType(returnFiber, newChild);
	    }
	    return ("string" === typeof newChild && "" !== newChild) ||
	      "number" === typeof newChild ||
	      "bigint" === typeof newChild
	      ? ((newChild = "" + newChild),
	        null !== currentFirstChild && 6 === currentFirstChild.tag
	          ? (deleteRemainingChildren(returnFiber, currentFirstChild.sibling),
	            (lanes = useFiber(currentFirstChild, newChild)),
	            (lanes.return = returnFiber),
	            (returnFiber = lanes))
	          : (deleteRemainingChildren(returnFiber, currentFirstChild),
	            (lanes = createFiberFromText(newChild, returnFiber.mode, lanes)),
	            (lanes.return = returnFiber),
	            (returnFiber = lanes)),
	        placeSingleChild(returnFiber))
	      : deleteRemainingChildren(returnFiber, currentFirstChild);
	  }
	  return function (returnFiber, currentFirstChild, newChild, lanes) {
	    try {
	      thenableIndexCounter = 0;
	      var firstChildFiber = reconcileChildFibersImpl(
	        returnFiber,
	        currentFirstChild,
	        newChild,
	        lanes
	      );
	      thenableState = null;
	      return firstChildFiber;
	    } catch (x) {
	      if (x === SuspenseException || x === SuspenseActionException) throw x;
	      var fiber = createFiberImplClass(29, x, null, returnFiber.mode);
	      fiber.lanes = lanes;
	      fiber.return = returnFiber;
	      return fiber;
	    } finally {
	    }
	  };
	}
	var reconcileChildFibers = createChildReconciler(true),
	  mountChildFibers = createChildReconciler(false),
	  suspenseHandlerStackCursor = createCursor(null),
	  shellBoundary = null;
	function pushPrimaryTreeSuspenseHandler(handler) {
	  var current = handler.alternate;
	  push(suspenseStackCursor, suspenseStackCursor.current & 1);
	  push(suspenseHandlerStackCursor, handler);
	  null === shellBoundary &&
	    (null === current || null !== currentTreeHiddenStackCursor.current
	      ? (shellBoundary = handler)
	      : null !== current.memoizedState && (shellBoundary = handler));
	}
	function pushOffscreenSuspenseHandler(fiber) {
	  if (22 === fiber.tag) {
	    if (
	      (push(suspenseStackCursor, suspenseStackCursor.current),
	      push(suspenseHandlerStackCursor, fiber),
	      null === shellBoundary)
	    ) {
	      var current = fiber.alternate;
	      null !== current &&
	        null !== current.memoizedState &&
	        (shellBoundary = fiber);
	    }
	  } else reuseSuspenseHandlerOnStack();
	}
	function reuseSuspenseHandlerOnStack() {
	  push(suspenseStackCursor, suspenseStackCursor.current);
	  push(suspenseHandlerStackCursor, suspenseHandlerStackCursor.current);
	}
	function popSuspenseHandler(fiber) {
	  pop(suspenseHandlerStackCursor);
	  shellBoundary === fiber && (shellBoundary = null);
	  pop(suspenseStackCursor);
	}
	var suspenseStackCursor = createCursor(0);
	function findFirstSuspended(row) {
	  for (var node = row; null !== node; ) {
	    if (13 === node.tag) {
	      var state = node.memoizedState;
	      if (
	        null !== state &&
	        ((state = state.dehydrated),
	        null === state ||
	          "$?" === state.data ||
	          isSuspenseInstanceFallback(state))
	      )
	        return node;
	    } else if (19 === node.tag && void 0 !== node.memoizedProps.revealOrder) {
	      if (0 !== (node.flags & 128)) return node;
	    } else if (null !== node.child) {
	      node.child.return = node;
	      node = node.child;
	      continue;
	    }
	    if (node === row) break;
	    for (; null === node.sibling; ) {
	      if (null === node.return || node.return === row) return null;
	      node = node.return;
	    }
	    node.sibling.return = node.return;
	    node = node.sibling;
	  }
	  return null;
	}
	function applyDerivedStateFromProps(
	  workInProgress,
	  ctor,
	  getDerivedStateFromProps,
	  nextProps
	) {
	  ctor = workInProgress.memoizedState;
	  getDerivedStateFromProps = getDerivedStateFromProps(nextProps, ctor);
	  getDerivedStateFromProps =
	    null === getDerivedStateFromProps || void 0 === getDerivedStateFromProps
	      ? ctor
	      : assign({}, ctor, getDerivedStateFromProps);
	  workInProgress.memoizedState = getDerivedStateFromProps;
	  0 === workInProgress.lanes &&
	    (workInProgress.updateQueue.baseState = getDerivedStateFromProps);
	}
	var classComponentUpdater = {
	  enqueueSetState: function (inst, payload, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.payload = payload;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    payload = enqueueUpdate(inst, update, lane);
	    null !== payload &&
	      (scheduleUpdateOnFiber(payload, inst, lane),
	      entangleTransitions(payload, inst, lane));
	  },
	  enqueueReplaceState: function (inst, payload, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.tag = 1;
	    update.payload = payload;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    payload = enqueueUpdate(inst, update, lane);
	    null !== payload &&
	      (scheduleUpdateOnFiber(payload, inst, lane),
	      entangleTransitions(payload, inst, lane));
	  },
	  enqueueForceUpdate: function (inst, callback) {
	    inst = inst._reactInternals;
	    var lane = requestUpdateLane(),
	      update = createUpdate(lane);
	    update.tag = 2;
	    void 0 !== callback && null !== callback && (update.callback = callback);
	    callback = enqueueUpdate(inst, update, lane);
	    null !== callback &&
	      (scheduleUpdateOnFiber(callback, inst, lane),
	      entangleTransitions(callback, inst, lane));
	  }
	};
	function checkShouldComponentUpdate(
	  workInProgress,
	  ctor,
	  oldProps,
	  newProps,
	  oldState,
	  newState,
	  nextContext
	) {
	  workInProgress = workInProgress.stateNode;
	  return "function" === typeof workInProgress.shouldComponentUpdate
	    ? workInProgress.shouldComponentUpdate(newProps, newState, nextContext)
	    : ctor.prototype && ctor.prototype.isPureReactComponent
	      ? !shallowEqual(oldProps, newProps) || !shallowEqual(oldState, newState)
	      : true;
	}
	function callComponentWillReceiveProps(
	  workInProgress,
	  instance,
	  newProps,
	  nextContext
	) {
	  workInProgress = instance.state;
	  "function" === typeof instance.componentWillReceiveProps &&
	    instance.componentWillReceiveProps(newProps, nextContext);
	  "function" === typeof instance.UNSAFE_componentWillReceiveProps &&
	    instance.UNSAFE_componentWillReceiveProps(newProps, nextContext);
	  instance.state !== workInProgress &&
	    classComponentUpdater.enqueueReplaceState(instance, instance.state, null);
	}
	function resolveClassComponentProps(Component, baseProps) {
	  var newProps = baseProps;
	  if ("ref" in baseProps) {
	    newProps = {};
	    for (var propName in baseProps)
	      "ref" !== propName && (newProps[propName] = baseProps[propName]);
	  }
	  if ((Component = Component.defaultProps)) {
	    newProps === baseProps && (newProps = assign({}, newProps));
	    for (var propName$73 in Component)
	      void 0 === newProps[propName$73] &&
	        (newProps[propName$73] = Component[propName$73]);
	  }
	  return newProps;
	}
	var reportGlobalError =
	  "function" === typeof reportError
	    ? reportError
	    : function (error) {
	        if (
	          "object" === typeof window &&
	          "function" === typeof window.ErrorEvent
	        ) {
	          var event = new window.ErrorEvent("error", {
	            bubbles: true,
	            cancelable: true,
	            message:
	              "object" === typeof error &&
	              null !== error &&
	              "string" === typeof error.message
	                ? String(error.message)
	                : String(error),
	            error: error
	          });
	          if (!window.dispatchEvent(event)) return;
	        } else if (
	          "object" === typeof process &&
	          "function" === typeof process.emit
	        ) {
	          process.emit("uncaughtException", error);
	          return;
	        }
	        console.error(error);
	      };
	function defaultOnUncaughtError(error) {
	  reportGlobalError(error);
	}
	function defaultOnCaughtError(error) {
	  console.error(error);
	}
	function defaultOnRecoverableError(error) {
	  reportGlobalError(error);
	}
	function logUncaughtError(root, errorInfo) {
	  try {
	    var onUncaughtError = root.onUncaughtError;
	    onUncaughtError(errorInfo.value, { componentStack: errorInfo.stack });
	  } catch (e$74) {
	    setTimeout(function () {
	      throw e$74;
	    });
	  }
	}
	function logCaughtError(root, boundary, errorInfo) {
	  try {
	    var onCaughtError = root.onCaughtError;
	    onCaughtError(errorInfo.value, {
	      componentStack: errorInfo.stack,
	      errorBoundary: 1 === boundary.tag ? boundary.stateNode : null
	    });
	  } catch (e$75) {
	    setTimeout(function () {
	      throw e$75;
	    });
	  }
	}
	function createRootErrorUpdate(root, errorInfo, lane) {
	  lane = createUpdate(lane);
	  lane.tag = 3;
	  lane.payload = { element: null };
	  lane.callback = function () {
	    logUncaughtError(root, errorInfo);
	  };
	  return lane;
	}
	function createClassErrorUpdate(lane) {
	  lane = createUpdate(lane);
	  lane.tag = 3;
	  return lane;
	}
	function initializeClassErrorUpdate(update, root, fiber, errorInfo) {
	  var getDerivedStateFromError = fiber.type.getDerivedStateFromError;
	  if ("function" === typeof getDerivedStateFromError) {
	    var error = errorInfo.value;
	    update.payload = function () {
	      return getDerivedStateFromError(error);
	    };
	    update.callback = function () {
	      logCaughtError(root, fiber, errorInfo);
	    };
	  }
	  var inst = fiber.stateNode;
	  null !== inst &&
	    "function" === typeof inst.componentDidCatch &&
	    (update.callback = function () {
	      logCaughtError(root, fiber, errorInfo);
	      "function" !== typeof getDerivedStateFromError &&
	        (null === legacyErrorBoundariesThatAlreadyFailed
	          ? (legacyErrorBoundariesThatAlreadyFailed = new Set([this]))
	          : legacyErrorBoundariesThatAlreadyFailed.add(this));
	      var stack = errorInfo.stack;
	      this.componentDidCatch(errorInfo.value, {
	        componentStack: null !== stack ? stack : ""
	      });
	    });
	}
	function throwException(
	  root,
	  returnFiber,
	  sourceFiber,
	  value,
	  rootRenderLanes
	) {
	  sourceFiber.flags |= 32768;
	  if (
	    null !== value &&
	    "object" === typeof value &&
	    "function" === typeof value.then
	  ) {
	    returnFiber = sourceFiber.alternate;
	    null !== returnFiber &&
	      propagateParentContextChanges(
	        returnFiber,
	        sourceFiber,
	        rootRenderLanes,
	        true
	      );
	    sourceFiber = suspenseHandlerStackCursor.current;
	    if (null !== sourceFiber) {
	      switch (sourceFiber.tag) {
	        case 13:
	          return (
	            null === shellBoundary
	              ? renderDidSuspendDelayIfPossible()
	              : null === sourceFiber.alternate &&
	                0 === workInProgressRootExitStatus &&
	                (workInProgressRootExitStatus = 3),
	            (sourceFiber.flags &= -257),
	            (sourceFiber.flags |= 65536),
	            (sourceFiber.lanes = rootRenderLanes),
	            value === noopSuspenseyCommitThenable
	              ? (sourceFiber.flags |= 16384)
	              : ((returnFiber = sourceFiber.updateQueue),
	                null === returnFiber
	                  ? (sourceFiber.updateQueue = new Set([value]))
	                  : returnFiber.add(value),
	                attachPingListener(root, value, rootRenderLanes)),
	            false
	          );
	        case 22:
	          return (
	            (sourceFiber.flags |= 65536),
	            value === noopSuspenseyCommitThenable
	              ? (sourceFiber.flags |= 16384)
	              : ((returnFiber = sourceFiber.updateQueue),
	                null === returnFiber
	                  ? ((returnFiber = {
	                      transitions: null,
	                      markerInstances: null,
	                      retryQueue: new Set([value])
	                    }),
	                    (sourceFiber.updateQueue = returnFiber))
	                  : ((sourceFiber = returnFiber.retryQueue),
	                    null === sourceFiber
	                      ? (returnFiber.retryQueue = new Set([value]))
	                      : sourceFiber.add(value)),
	                attachPingListener(root, value, rootRenderLanes)),
	            false
	          );
	      }
	      throw Error(formatProdErrorMessage(435, sourceFiber.tag));
	    }
	    attachPingListener(root, value, rootRenderLanes);
	    renderDidSuspendDelayIfPossible();
	    return false;
	  }
	  if (isHydrating)
	    return (
	      (returnFiber = suspenseHandlerStackCursor.current),
	      null !== returnFiber
	        ? (0 === (returnFiber.flags & 65536) && (returnFiber.flags |= 256),
	          (returnFiber.flags |= 65536),
	          (returnFiber.lanes = rootRenderLanes),
	          value !== HydrationMismatchException &&
	            ((root = Error(formatProdErrorMessage(422), { cause: value })),
	            queueHydrationError(createCapturedValueAtFiber(root, sourceFiber))))
	        : (value !== HydrationMismatchException &&
	            ((returnFiber = Error(formatProdErrorMessage(423), {
	              cause: value
	            })),
	            queueHydrationError(
	              createCapturedValueAtFiber(returnFiber, sourceFiber)
	            )),
	          (root = root.current.alternate),
	          (root.flags |= 65536),
	          (rootRenderLanes &= -rootRenderLanes),
	          (root.lanes |= rootRenderLanes),
	          (value = createCapturedValueAtFiber(value, sourceFiber)),
	          (rootRenderLanes = createRootErrorUpdate(
	            root.stateNode,
	            value,
	            rootRenderLanes
	          )),
	          enqueueCapturedUpdate(root, rootRenderLanes),
	          4 !== workInProgressRootExitStatus &&
	            (workInProgressRootExitStatus = 2)),
	      false
	    );
	  var wrapperError = Error(formatProdErrorMessage(520), { cause: value });
	  wrapperError = createCapturedValueAtFiber(wrapperError, sourceFiber);
	  null === workInProgressRootConcurrentErrors
	    ? (workInProgressRootConcurrentErrors = [wrapperError])
	    : workInProgressRootConcurrentErrors.push(wrapperError);
	  4 !== workInProgressRootExitStatus && (workInProgressRootExitStatus = 2);
	  if (null === returnFiber) return true;
	  value = createCapturedValueAtFiber(value, sourceFiber);
	  sourceFiber = returnFiber;
	  do {
	    switch (sourceFiber.tag) {
	      case 3:
	        return (
	          (sourceFiber.flags |= 65536),
	          (root = rootRenderLanes & -rootRenderLanes),
	          (sourceFiber.lanes |= root),
	          (root = createRootErrorUpdate(sourceFiber.stateNode, value, root)),
	          enqueueCapturedUpdate(sourceFiber, root),
	          false
	        );
	      case 1:
	        if (
	          ((returnFiber = sourceFiber.type),
	          (wrapperError = sourceFiber.stateNode),
	          0 === (sourceFiber.flags & 128) &&
	            ("function" === typeof returnFiber.getDerivedStateFromError ||
	              (null !== wrapperError &&
	                "function" === typeof wrapperError.componentDidCatch &&
	                (null === legacyErrorBoundariesThatAlreadyFailed ||
	                  !legacyErrorBoundariesThatAlreadyFailed.has(wrapperError)))))
	        )
	          return (
	            (sourceFiber.flags |= 65536),
	            (rootRenderLanes &= -rootRenderLanes),
	            (sourceFiber.lanes |= rootRenderLanes),
	            (rootRenderLanes = createClassErrorUpdate(rootRenderLanes)),
	            initializeClassErrorUpdate(
	              rootRenderLanes,
	              root,
	              sourceFiber,
	              value
	            ),
	            enqueueCapturedUpdate(sourceFiber, rootRenderLanes),
	            false
	          );
	    }
	    sourceFiber = sourceFiber.return;
	  } while (null !== sourceFiber);
	  return false;
	}
	var SelectiveHydrationException = Error(formatProdErrorMessage(461)),
	  didReceiveUpdate = false;
	function reconcileChildren(current, workInProgress, nextChildren, renderLanes) {
	  workInProgress.child =
	    null === current
	      ? mountChildFibers(workInProgress, null, nextChildren, renderLanes)
	      : reconcileChildFibers(
	          workInProgress,
	          current.child,
	          nextChildren,
	          renderLanes
	        );
	}
	function updateForwardRef(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  Component = Component.render;
	  var ref = workInProgress.ref;
	  if ("ref" in nextProps) {
	    var propsWithoutRef = {};
	    for (var key in nextProps)
	      "ref" !== key && (propsWithoutRef[key] = nextProps[key]);
	  } else propsWithoutRef = nextProps;
	  prepareToReadContext(workInProgress);
	  nextProps = renderWithHooks(
	    current,
	    workInProgress,
	    Component,
	    propsWithoutRef,
	    ref,
	    renderLanes
	  );
	  key = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && key && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, nextProps, renderLanes);
	  return workInProgress.child;
	}
	function updateMemoComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  if (null === current) {
	    var type = Component.type;
	    if (
	      "function" === typeof type &&
	      !shouldConstruct(type) &&
	      void 0 === type.defaultProps &&
	      null === Component.compare
	    )
	      return (
	        (workInProgress.tag = 15),
	        (workInProgress.type = type),
	        updateSimpleMemoComponent(
	          current,
	          workInProgress,
	          type,
	          nextProps,
	          renderLanes
	        )
	      );
	    current = createFiberFromTypeAndProps(
	      Component.type,
	      null,
	      nextProps,
	      workInProgress,
	      workInProgress.mode,
	      renderLanes
	    );
	    current.ref = workInProgress.ref;
	    current.return = workInProgress;
	    return (workInProgress.child = current);
	  }
	  type = current.child;
	  if (!checkScheduledUpdateOrContext(current, renderLanes)) {
	    var prevProps = type.memoizedProps;
	    Component = Component.compare;
	    Component = null !== Component ? Component : shallowEqual;
	    if (Component(prevProps, nextProps) && current.ref === workInProgress.ref)
	      return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
	  }
	  workInProgress.flags |= 1;
	  current = createWorkInProgress(type, nextProps);
	  current.ref = workInProgress.ref;
	  current.return = workInProgress;
	  return (workInProgress.child = current);
	}
	function updateSimpleMemoComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  if (null !== current) {
	    var prevProps = current.memoizedProps;
	    if (
	      shallowEqual(prevProps, nextProps) &&
	      current.ref === workInProgress.ref
	    )
	      if (
	        ((didReceiveUpdate = false),
	        (workInProgress.pendingProps = nextProps = prevProps),
	        checkScheduledUpdateOrContext(current, renderLanes))
	      )
	        0 !== (current.flags & 131072) && (didReceiveUpdate = true);
	      else
	        return (
	          (workInProgress.lanes = current.lanes),
	          bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	        );
	  }
	  return updateFunctionComponent(
	    current,
	    workInProgress,
	    Component,
	    nextProps,
	    renderLanes
	  );
	}
	function updateOffscreenComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    nextChildren = nextProps.children,
	    prevState = null !== current ? current.memoizedState : null;
	  if ("hidden" === nextProps.mode) {
	    if (0 !== (workInProgress.flags & 128)) {
	      nextProps =
	        null !== prevState ? prevState.baseLanes | renderLanes : renderLanes;
	      if (null !== current) {
	        nextChildren = workInProgress.child = current.child;
	        for (prevState = 0; null !== nextChildren; )
	          (prevState =
	            prevState | nextChildren.lanes | nextChildren.childLanes),
	            (nextChildren = nextChildren.sibling);
	        workInProgress.childLanes = prevState & ~nextProps;
	      } else (workInProgress.childLanes = 0), (workInProgress.child = null);
	      return deferHiddenOffscreenComponent(
	        current,
	        workInProgress,
	        nextProps,
	        renderLanes
	      );
	    }
	    if (0 !== (renderLanes & 536870912))
	      (workInProgress.memoizedState = { baseLanes: 0, cachePool: null }),
	        null !== current &&
	          pushTransition(
	            workInProgress,
	            null !== prevState ? prevState.cachePool : null
	          ),
	        null !== prevState
	          ? pushHiddenContext(workInProgress, prevState)
	          : reuseHiddenContextOnStack(),
	        pushOffscreenSuspenseHandler(workInProgress);
	    else
	      return (
	        (workInProgress.lanes = workInProgress.childLanes = 536870912),
	        deferHiddenOffscreenComponent(
	          current,
	          workInProgress,
	          null !== prevState ? prevState.baseLanes | renderLanes : renderLanes,
	          renderLanes
	        )
	      );
	  } else
	    null !== prevState
	      ? (pushTransition(workInProgress, prevState.cachePool),
	        pushHiddenContext(workInProgress, prevState),
	        reuseSuspenseHandlerOnStack(),
	        (workInProgress.memoizedState = null))
	      : (null !== current && pushTransition(workInProgress, null),
	        reuseHiddenContextOnStack(),
	        reuseSuspenseHandlerOnStack());
	  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
	  return workInProgress.child;
	}
	function deferHiddenOffscreenComponent(
	  current,
	  workInProgress,
	  nextBaseLanes,
	  renderLanes
	) {
	  var JSCompiler_inline_result = peekCacheFromPool();
	  JSCompiler_inline_result =
	    null === JSCompiler_inline_result
	      ? null
	      : { parent: CacheContext._currentValue, pool: JSCompiler_inline_result };
	  workInProgress.memoizedState = {
	    baseLanes: nextBaseLanes,
	    cachePool: JSCompiler_inline_result
	  };
	  null !== current && pushTransition(workInProgress, null);
	  reuseHiddenContextOnStack();
	  pushOffscreenSuspenseHandler(workInProgress);
	  null !== current &&
	    propagateParentContextChanges(current, workInProgress, renderLanes, true);
	  return null;
	}
	function markRef(current, workInProgress) {
	  var ref = workInProgress.ref;
	  if (null === ref)
	    null !== current &&
	      null !== current.ref &&
	      (workInProgress.flags |= 4194816);
	  else {
	    if ("function" !== typeof ref && "object" !== typeof ref)
	      throw Error(formatProdErrorMessage(284));
	    if (null === current || current.ref !== ref)
	      workInProgress.flags |= 4194816;
	  }
	}
	function updateFunctionComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  Component = renderWithHooks(
	    current,
	    workInProgress,
	    Component,
	    nextProps,
	    void 0,
	    renderLanes
	  );
	  nextProps = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && nextProps && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, Component, renderLanes);
	  return workInProgress.child;
	}
	function replayFunctionComponent(
	  current,
	  workInProgress,
	  nextProps,
	  Component,
	  secondArg,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  workInProgress.updateQueue = null;
	  nextProps = renderWithHooksAgain(
	    workInProgress,
	    Component,
	    nextProps,
	    secondArg
	  );
	  finishRenderingHooks(current);
	  Component = checkDidRenderIdHook();
	  if (null !== current && !didReceiveUpdate)
	    return (
	      bailoutHooks(current, workInProgress, renderLanes),
	      bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes)
	    );
	  isHydrating && Component && pushMaterializedTreeId(workInProgress);
	  workInProgress.flags |= 1;
	  reconcileChildren(current, workInProgress, nextProps, renderLanes);
	  return workInProgress.child;
	}
	function updateClassComponent(
	  current,
	  workInProgress,
	  Component,
	  nextProps,
	  renderLanes
	) {
	  prepareToReadContext(workInProgress);
	  if (null === workInProgress.stateNode) {
	    var context = emptyContextObject,
	      contextType = Component.contextType;
	    "object" === typeof contextType &&
	      null !== contextType &&
	      (context = readContext(contextType));
	    context = new Component(nextProps, context);
	    workInProgress.memoizedState =
	      null !== context.state && void 0 !== context.state ? context.state : null;
	    context.updater = classComponentUpdater;
	    workInProgress.stateNode = context;
	    context._reactInternals = workInProgress;
	    context = workInProgress.stateNode;
	    context.props = nextProps;
	    context.state = workInProgress.memoizedState;
	    context.refs = {};
	    initializeUpdateQueue(workInProgress);
	    contextType = Component.contextType;
	    context.context =
	      "object" === typeof contextType && null !== contextType
	        ? readContext(contextType)
	        : emptyContextObject;
	    context.state = workInProgress.memoizedState;
	    contextType = Component.getDerivedStateFromProps;
	    "function" === typeof contextType &&
	      (applyDerivedStateFromProps(
	        workInProgress,
	        Component,
	        contextType,
	        nextProps
	      ),
	      (context.state = workInProgress.memoizedState));
	    "function" === typeof Component.getDerivedStateFromProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate ||
	      ("function" !== typeof context.UNSAFE_componentWillMount &&
	        "function" !== typeof context.componentWillMount) ||
	      ((contextType = context.state),
	      "function" === typeof context.componentWillMount &&
	        context.componentWillMount(),
	      "function" === typeof context.UNSAFE_componentWillMount &&
	        context.UNSAFE_componentWillMount(),
	      contextType !== context.state &&
	        classComponentUpdater.enqueueReplaceState(context, context.state, null),
	      processUpdateQueue(workInProgress, nextProps, context, renderLanes),
	      suspendIfUpdateReadFromEntangledAsyncAction(),
	      (context.state = workInProgress.memoizedState));
	    "function" === typeof context.componentDidMount &&
	      (workInProgress.flags |= 4194308);
	    nextProps = true;
	  } else if (null === current) {
	    context = workInProgress.stateNode;
	    var unresolvedOldProps = workInProgress.memoizedProps,
	      oldProps = resolveClassComponentProps(Component, unresolvedOldProps);
	    context.props = oldProps;
	    var oldContext = context.context,
	      contextType$jscomp$0 = Component.contextType;
	    contextType = emptyContextObject;
	    "object" === typeof contextType$jscomp$0 &&
	      null !== contextType$jscomp$0 &&
	      (contextType = readContext(contextType$jscomp$0));
	    var getDerivedStateFromProps = Component.getDerivedStateFromProps;
	    contextType$jscomp$0 =
	      "function" === typeof getDerivedStateFromProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate;
	    unresolvedOldProps = workInProgress.pendingProps !== unresolvedOldProps;
	    contextType$jscomp$0 ||
	      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
	        "function" !== typeof context.componentWillReceiveProps) ||
	      ((unresolvedOldProps || oldContext !== contextType) &&
	        callComponentWillReceiveProps(
	          workInProgress,
	          context,
	          nextProps,
	          contextType
	        ));
	    hasForceUpdate = false;
	    var oldState = workInProgress.memoizedState;
	    context.state = oldState;
	    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
	    suspendIfUpdateReadFromEntangledAsyncAction();
	    oldContext = workInProgress.memoizedState;
	    unresolvedOldProps || oldState !== oldContext || hasForceUpdate
	      ? ("function" === typeof getDerivedStateFromProps &&
	          (applyDerivedStateFromProps(
	            workInProgress,
	            Component,
	            getDerivedStateFromProps,
	            nextProps
	          ),
	          (oldContext = workInProgress.memoizedState)),
	        (oldProps =
	          hasForceUpdate ||
	          checkShouldComponentUpdate(
	            workInProgress,
	            Component,
	            oldProps,
	            nextProps,
	            oldState,
	            oldContext,
	            contextType
	          ))
	          ? (contextType$jscomp$0 ||
	              ("function" !== typeof context.UNSAFE_componentWillMount &&
	                "function" !== typeof context.componentWillMount) ||
	              ("function" === typeof context.componentWillMount &&
	                context.componentWillMount(),
	              "function" === typeof context.UNSAFE_componentWillMount &&
	                context.UNSAFE_componentWillMount()),
	            "function" === typeof context.componentDidMount &&
	              (workInProgress.flags |= 4194308))
	          : ("function" === typeof context.componentDidMount &&
	              (workInProgress.flags |= 4194308),
	            (workInProgress.memoizedProps = nextProps),
	            (workInProgress.memoizedState = oldContext)),
	        (context.props = nextProps),
	        (context.state = oldContext),
	        (context.context = contextType),
	        (nextProps = oldProps))
	      : ("function" === typeof context.componentDidMount &&
	          (workInProgress.flags |= 4194308),
	        (nextProps = false));
	  } else {
	    context = workInProgress.stateNode;
	    cloneUpdateQueue(current, workInProgress);
	    contextType = workInProgress.memoizedProps;
	    contextType$jscomp$0 = resolveClassComponentProps(Component, contextType);
	    context.props = contextType$jscomp$0;
	    getDerivedStateFromProps = workInProgress.pendingProps;
	    oldState = context.context;
	    oldContext = Component.contextType;
	    oldProps = emptyContextObject;
	    "object" === typeof oldContext &&
	      null !== oldContext &&
	      (oldProps = readContext(oldContext));
	    unresolvedOldProps = Component.getDerivedStateFromProps;
	    (oldContext =
	      "function" === typeof unresolvedOldProps ||
	      "function" === typeof context.getSnapshotBeforeUpdate) ||
	      ("function" !== typeof context.UNSAFE_componentWillReceiveProps &&
	        "function" !== typeof context.componentWillReceiveProps) ||
	      ((contextType !== getDerivedStateFromProps || oldState !== oldProps) &&
	        callComponentWillReceiveProps(
	          workInProgress,
	          context,
	          nextProps,
	          oldProps
	        ));
	    hasForceUpdate = false;
	    oldState = workInProgress.memoizedState;
	    context.state = oldState;
	    processUpdateQueue(workInProgress, nextProps, context, renderLanes);
	    suspendIfUpdateReadFromEntangledAsyncAction();
	    var newState = workInProgress.memoizedState;
	    contextType !== getDerivedStateFromProps ||
	    oldState !== newState ||
	    hasForceUpdate ||
	    (null !== current &&
	      null !== current.dependencies &&
	      checkIfContextChanged(current.dependencies))
	      ? ("function" === typeof unresolvedOldProps &&
	          (applyDerivedStateFromProps(
	            workInProgress,
	            Component,
	            unresolvedOldProps,
	            nextProps
	          ),
	          (newState = workInProgress.memoizedState)),
	        (contextType$jscomp$0 =
	          hasForceUpdate ||
	          checkShouldComponentUpdate(
	            workInProgress,
	            Component,
	            contextType$jscomp$0,
	            nextProps,
	            oldState,
	            newState,
	            oldProps
	          ) ||
	          (null !== current &&
	            null !== current.dependencies &&
	            checkIfContextChanged(current.dependencies)))
	          ? (oldContext ||
	              ("function" !== typeof context.UNSAFE_componentWillUpdate &&
	                "function" !== typeof context.componentWillUpdate) ||
	              ("function" === typeof context.componentWillUpdate &&
	                context.componentWillUpdate(nextProps, newState, oldProps),
	              "function" === typeof context.UNSAFE_componentWillUpdate &&
	                context.UNSAFE_componentWillUpdate(
	                  nextProps,
	                  newState,
	                  oldProps
	                )),
	            "function" === typeof context.componentDidUpdate &&
	              (workInProgress.flags |= 4),
	            "function" === typeof context.getSnapshotBeforeUpdate &&
	              (workInProgress.flags |= 1024))
	          : ("function" !== typeof context.componentDidUpdate ||
	              (contextType === current.memoizedProps &&
	                oldState === current.memoizedState) ||
	              (workInProgress.flags |= 4),
	            "function" !== typeof context.getSnapshotBeforeUpdate ||
	              (contextType === current.memoizedProps &&
	                oldState === current.memoizedState) ||
	              (workInProgress.flags |= 1024),
	            (workInProgress.memoizedProps = nextProps),
	            (workInProgress.memoizedState = newState)),
	        (context.props = nextProps),
	        (context.state = newState),
	        (context.context = oldProps),
	        (nextProps = contextType$jscomp$0))
	      : ("function" !== typeof context.componentDidUpdate ||
	          (contextType === current.memoizedProps &&
	            oldState === current.memoizedState) ||
	          (workInProgress.flags |= 4),
	        "function" !== typeof context.getSnapshotBeforeUpdate ||
	          (contextType === current.memoizedProps &&
	            oldState === current.memoizedState) ||
	          (workInProgress.flags |= 1024),
	        (nextProps = false));
	  }
	  context = nextProps;
	  markRef(current, workInProgress);
	  nextProps = 0 !== (workInProgress.flags & 128);
	  context || nextProps
	    ? ((context = workInProgress.stateNode),
	      (Component =
	        nextProps && "function" !== typeof Component.getDerivedStateFromError
	          ? null
	          : context.render()),
	      (workInProgress.flags |= 1),
	      null !== current && nextProps
	        ? ((workInProgress.child = reconcileChildFibers(
	            workInProgress,
	            current.child,
	            null,
	            renderLanes
	          )),
	          (workInProgress.child = reconcileChildFibers(
	            workInProgress,
	            null,
	            Component,
	            renderLanes
	          )))
	        : reconcileChildren(current, workInProgress, Component, renderLanes),
	      (workInProgress.memoizedState = context.state),
	      (current = workInProgress.child))
	    : (current = bailoutOnAlreadyFinishedWork(
	        current,
	        workInProgress,
	        renderLanes
	      ));
	  return current;
	}
	function mountHostRootWithoutHydrating(
	  current,
	  workInProgress,
	  nextChildren,
	  renderLanes
	) {
	  resetHydrationState();
	  workInProgress.flags |= 256;
	  reconcileChildren(current, workInProgress, nextChildren, renderLanes);
	  return workInProgress.child;
	}
	var SUSPENDED_MARKER = {
	  dehydrated: null,
	  treeContext: null,
	  retryLane: 0,
	  hydrationErrors: null
	};
	function mountSuspenseOffscreenState(renderLanes) {
	  return { baseLanes: renderLanes, cachePool: getSuspendedCache() };
	}
	function getRemainingWorkInPrimaryTree(
	  current,
	  primaryTreeDidDefer,
	  renderLanes
	) {
	  current = null !== current ? current.childLanes & ~renderLanes : 0;
	  primaryTreeDidDefer && (current |= workInProgressDeferredLane);
	  return current;
	}
	function updateSuspenseComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    showFallback = false,
	    didSuspend = 0 !== (workInProgress.flags & 128),
	    JSCompiler_temp;
	  (JSCompiler_temp = didSuspend) ||
	    (JSCompiler_temp =
	      null !== current && null === current.memoizedState
	        ? false
	        : 0 !== (suspenseStackCursor.current & 2));
	  JSCompiler_temp && ((showFallback = true), (workInProgress.flags &= -129));
	  JSCompiler_temp = 0 !== (workInProgress.flags & 32);
	  workInProgress.flags &= -33;
	  if (null === current) {
	    if (isHydrating) {
	      showFallback
	        ? pushPrimaryTreeSuspenseHandler(workInProgress)
	        : reuseSuspenseHandlerOnStack();
	      if (isHydrating) {
	        var nextInstance = nextHydratableInstance,
	          JSCompiler_temp$jscomp$0;
	        if ((JSCompiler_temp$jscomp$0 = nextInstance)) {
	          c: {
	            JSCompiler_temp$jscomp$0 = nextInstance;
	            for (
	              nextInstance = rootOrSingletonContext;
	              8 !== JSCompiler_temp$jscomp$0.nodeType;

	            ) {
	              if (!nextInstance) {
	                nextInstance = null;
	                break c;
	              }
	              JSCompiler_temp$jscomp$0 = getNextHydratable(
	                JSCompiler_temp$jscomp$0.nextSibling
	              );
	              if (null === JSCompiler_temp$jscomp$0) {
	                nextInstance = null;
	                break c;
	              }
	            }
	            nextInstance = JSCompiler_temp$jscomp$0;
	          }
	          null !== nextInstance
	            ? ((workInProgress.memoizedState = {
	                dehydrated: nextInstance,
	                treeContext:
	                  null !== treeContextProvider
	                    ? { id: treeContextId, overflow: treeContextOverflow }
	                    : null,
	                retryLane: 536870912,
	                hydrationErrors: null
	              }),
	              (JSCompiler_temp$jscomp$0 = createFiberImplClass(
	                18,
	                null,
	                null,
	                0
	              )),
	              (JSCompiler_temp$jscomp$0.stateNode = nextInstance),
	              (JSCompiler_temp$jscomp$0.return = workInProgress),
	              (workInProgress.child = JSCompiler_temp$jscomp$0),
	              (hydrationParentFiber = workInProgress),
	              (nextHydratableInstance = null),
	              (JSCompiler_temp$jscomp$0 = true))
	            : (JSCompiler_temp$jscomp$0 = false);
	        }
	        JSCompiler_temp$jscomp$0 || throwOnHydrationMismatch(workInProgress);
	      }
	      nextInstance = workInProgress.memoizedState;
	      if (
	        null !== nextInstance &&
	        ((nextInstance = nextInstance.dehydrated), null !== nextInstance)
	      )
	        return (
	          isSuspenseInstanceFallback(nextInstance)
	            ? (workInProgress.lanes = 32)
	            : (workInProgress.lanes = 536870912),
	          null
	        );
	      popSuspenseHandler(workInProgress);
	    }
	    nextInstance = nextProps.children;
	    nextProps = nextProps.fallback;
	    if (showFallback)
	      return (
	        reuseSuspenseHandlerOnStack(),
	        (showFallback = workInProgress.mode),
	        (nextInstance = mountWorkInProgressOffscreenFiber(
	          { mode: "hidden", children: nextInstance },
	          showFallback
	        )),
	        (nextProps = createFiberFromFragment(
	          nextProps,
	          showFallback,
	          renderLanes,
	          null
	        )),
	        (nextInstance.return = workInProgress),
	        (nextProps.return = workInProgress),
	        (nextInstance.sibling = nextProps),
	        (workInProgress.child = nextInstance),
	        (showFallback = workInProgress.child),
	        (showFallback.memoizedState = mountSuspenseOffscreenState(renderLanes)),
	        (showFallback.childLanes = getRemainingWorkInPrimaryTree(
	          current,
	          JSCompiler_temp,
	          renderLanes
	        )),
	        (workInProgress.memoizedState = SUSPENDED_MARKER),
	        nextProps
	      );
	    pushPrimaryTreeSuspenseHandler(workInProgress);
	    return mountSuspensePrimaryChildren(workInProgress, nextInstance);
	  }
	  JSCompiler_temp$jscomp$0 = current.memoizedState;
	  if (
	    null !== JSCompiler_temp$jscomp$0 &&
	    ((nextInstance = JSCompiler_temp$jscomp$0.dehydrated),
	    null !== nextInstance)
	  ) {
	    if (didSuspend)
	      workInProgress.flags & 256
	        ? (pushPrimaryTreeSuspenseHandler(workInProgress),
	          (workInProgress.flags &= -257),
	          (workInProgress = retrySuspenseComponentWithoutHydrating(
	            current,
	            workInProgress,
	            renderLanes
	          )))
	        : null !== workInProgress.memoizedState
	          ? (reuseSuspenseHandlerOnStack(),
	            (workInProgress.child = current.child),
	            (workInProgress.flags |= 128),
	            (workInProgress = null))
	          : (reuseSuspenseHandlerOnStack(),
	            (showFallback = nextProps.fallback),
	            (nextInstance = workInProgress.mode),
	            (nextProps = mountWorkInProgressOffscreenFiber(
	              { mode: "visible", children: nextProps.children },
	              nextInstance
	            )),
	            (showFallback = createFiberFromFragment(
	              showFallback,
	              nextInstance,
	              renderLanes,
	              null
	            )),
	            (showFallback.flags |= 2),
	            (nextProps.return = workInProgress),
	            (showFallback.return = workInProgress),
	            (nextProps.sibling = showFallback),
	            (workInProgress.child = nextProps),
	            reconcileChildFibers(
	              workInProgress,
	              current.child,
	              null,
	              renderLanes
	            ),
	            (nextProps = workInProgress.child),
	            (nextProps.memoizedState =
	              mountSuspenseOffscreenState(renderLanes)),
	            (nextProps.childLanes = getRemainingWorkInPrimaryTree(
	              current,
	              JSCompiler_temp,
	              renderLanes
	            )),
	            (workInProgress.memoizedState = SUSPENDED_MARKER),
	            (workInProgress = showFallback));
	    else if (
	      (pushPrimaryTreeSuspenseHandler(workInProgress),
	      isSuspenseInstanceFallback(nextInstance))
	    ) {
	      JSCompiler_temp =
	        nextInstance.nextSibling && nextInstance.nextSibling.dataset;
	      if (JSCompiler_temp) var digest = JSCompiler_temp.dgst;
	      JSCompiler_temp = digest;
	      nextProps = Error(formatProdErrorMessage(419));
	      nextProps.stack = "";
	      nextProps.digest = JSCompiler_temp;
	      queueHydrationError({ value: nextProps, source: null, stack: null });
	      workInProgress = retrySuspenseComponentWithoutHydrating(
	        current,
	        workInProgress,
	        renderLanes
	      );
	    } else if (
	      (didReceiveUpdate ||
	        propagateParentContextChanges(current, workInProgress, renderLanes, false),
	      (JSCompiler_temp = 0 !== (renderLanes & current.childLanes)),
	      didReceiveUpdate || JSCompiler_temp)
	    ) {
	      JSCompiler_temp = workInProgressRoot;
	      if (
	        null !== JSCompiler_temp &&
	        ((nextProps = renderLanes & -renderLanes),
	        (nextProps =
	          0 !== (nextProps & 42)
	            ? 1
	            : getBumpedLaneForHydrationByLane(nextProps)),
	        (nextProps =
	          0 !== (nextProps & (JSCompiler_temp.suspendedLanes | renderLanes))
	            ? 0
	            : nextProps),
	        0 !== nextProps && nextProps !== JSCompiler_temp$jscomp$0.retryLane)
	      )
	        throw (
	          ((JSCompiler_temp$jscomp$0.retryLane = nextProps),
	          enqueueConcurrentRenderForLane(current, nextProps),
	          scheduleUpdateOnFiber(JSCompiler_temp, current, nextProps),
	          SelectiveHydrationException)
	        );
	      "$?" === nextInstance.data || renderDidSuspendDelayIfPossible();
	      workInProgress = retrySuspenseComponentWithoutHydrating(
	        current,
	        workInProgress,
	        renderLanes
	      );
	    } else
	      "$?" === nextInstance.data
	        ? ((workInProgress.flags |= 192),
	          (workInProgress.child = current.child),
	          (workInProgress = null))
	        : ((current = JSCompiler_temp$jscomp$0.treeContext),
	          (nextHydratableInstance = getNextHydratable(
	            nextInstance.nextSibling
	          )),
	          (hydrationParentFiber = workInProgress),
	          (isHydrating = true),
	          (hydrationErrors = null),
	          (rootOrSingletonContext = false),
	          null !== current &&
	            ((idStack[idStackIndex++] = treeContextId),
	            (idStack[idStackIndex++] = treeContextOverflow),
	            (idStack[idStackIndex++] = treeContextProvider),
	            (treeContextId = current.id),
	            (treeContextOverflow = current.overflow),
	            (treeContextProvider = workInProgress)),
	          (workInProgress = mountSuspensePrimaryChildren(
	            workInProgress,
	            nextProps.children
	          )),
	          (workInProgress.flags |= 4096));
	    return workInProgress;
	  }
	  if (showFallback)
	    return (
	      reuseSuspenseHandlerOnStack(),
	      (showFallback = nextProps.fallback),
	      (nextInstance = workInProgress.mode),
	      (JSCompiler_temp$jscomp$0 = current.child),
	      (digest = JSCompiler_temp$jscomp$0.sibling),
	      (nextProps = createWorkInProgress(JSCompiler_temp$jscomp$0, {
	        mode: "hidden",
	        children: nextProps.children
	      })),
	      (nextProps.subtreeFlags =
	        JSCompiler_temp$jscomp$0.subtreeFlags & 65011712),
	      null !== digest
	        ? (showFallback = createWorkInProgress(digest, showFallback))
	        : ((showFallback = createFiberFromFragment(
	            showFallback,
	            nextInstance,
	            renderLanes,
	            null
	          )),
	          (showFallback.flags |= 2)),
	      (showFallback.return = workInProgress),
	      (nextProps.return = workInProgress),
	      (nextProps.sibling = showFallback),
	      (workInProgress.child = nextProps),
	      (nextProps = showFallback),
	      (showFallback = workInProgress.child),
	      (nextInstance = current.child.memoizedState),
	      null === nextInstance
	        ? (nextInstance = mountSuspenseOffscreenState(renderLanes))
	        : ((JSCompiler_temp$jscomp$0 = nextInstance.cachePool),
	          null !== JSCompiler_temp$jscomp$0
	            ? ((digest = CacheContext._currentValue),
	              (JSCompiler_temp$jscomp$0 =
	                JSCompiler_temp$jscomp$0.parent !== digest
	                  ? { parent: digest, pool: digest }
	                  : JSCompiler_temp$jscomp$0))
	            : (JSCompiler_temp$jscomp$0 = getSuspendedCache()),
	          (nextInstance = {
	            baseLanes: nextInstance.baseLanes | renderLanes,
	            cachePool: JSCompiler_temp$jscomp$0
	          })),
	      (showFallback.memoizedState = nextInstance),
	      (showFallback.childLanes = getRemainingWorkInPrimaryTree(
	        current,
	        JSCompiler_temp,
	        renderLanes
	      )),
	      (workInProgress.memoizedState = SUSPENDED_MARKER),
	      nextProps
	    );
	  pushPrimaryTreeSuspenseHandler(workInProgress);
	  renderLanes = current.child;
	  current = renderLanes.sibling;
	  renderLanes = createWorkInProgress(renderLanes, {
	    mode: "visible",
	    children: nextProps.children
	  });
	  renderLanes.return = workInProgress;
	  renderLanes.sibling = null;
	  null !== current &&
	    ((JSCompiler_temp = workInProgress.deletions),
	    null === JSCompiler_temp
	      ? ((workInProgress.deletions = [current]), (workInProgress.flags |= 16))
	      : JSCompiler_temp.push(current));
	  workInProgress.child = renderLanes;
	  workInProgress.memoizedState = null;
	  return renderLanes;
	}
	function mountSuspensePrimaryChildren(workInProgress, primaryChildren) {
	  primaryChildren = mountWorkInProgressOffscreenFiber(
	    { mode: "visible", children: primaryChildren },
	    workInProgress.mode
	  );
	  primaryChildren.return = workInProgress;
	  return (workInProgress.child = primaryChildren);
	}
	function mountWorkInProgressOffscreenFiber(offscreenProps, mode) {
	  offscreenProps = createFiberImplClass(22, offscreenProps, null, mode);
	  offscreenProps.lanes = 0;
	  offscreenProps.stateNode = {
	    _visibility: 1,
	    _pendingMarkers: null,
	    _retryCache: null,
	    _transitions: null
	  };
	  return offscreenProps;
	}
	function retrySuspenseComponentWithoutHydrating(
	  current,
	  workInProgress,
	  renderLanes
	) {
	  reconcileChildFibers(workInProgress, current.child, null, renderLanes);
	  current = mountSuspensePrimaryChildren(
	    workInProgress,
	    workInProgress.pendingProps.children
	  );
	  current.flags |= 2;
	  workInProgress.memoizedState = null;
	  return current;
	}
	function scheduleSuspenseWorkOnFiber(fiber, renderLanes, propagationRoot) {
	  fiber.lanes |= renderLanes;
	  var alternate = fiber.alternate;
	  null !== alternate && (alternate.lanes |= renderLanes);
	  scheduleContextWorkOnParentPath(fiber.return, renderLanes, propagationRoot);
	}
	function initSuspenseListRenderState(
	  workInProgress,
	  isBackwards,
	  tail,
	  lastContentRow,
	  tailMode
	) {
	  var renderState = workInProgress.memoizedState;
	  null === renderState
	    ? (workInProgress.memoizedState = {
	        isBackwards: isBackwards,
	        rendering: null,
	        renderingStartTime: 0,
	        last: lastContentRow,
	        tail: tail,
	        tailMode: tailMode
	      })
	    : ((renderState.isBackwards = isBackwards),
	      (renderState.rendering = null),
	      (renderState.renderingStartTime = 0),
	      (renderState.last = lastContentRow),
	      (renderState.tail = tail),
	      (renderState.tailMode = tailMode));
	}
	function updateSuspenseListComponent(current, workInProgress, renderLanes) {
	  var nextProps = workInProgress.pendingProps,
	    revealOrder = nextProps.revealOrder,
	    tailMode = nextProps.tail;
	  reconcileChildren(current, workInProgress, nextProps.children, renderLanes);
	  nextProps = suspenseStackCursor.current;
	  if (0 !== (nextProps & 2))
	    (nextProps = (nextProps & 1) | 2), (workInProgress.flags |= 128);
	  else {
	    if (null !== current && 0 !== (current.flags & 128))
	      a: for (current = workInProgress.child; null !== current; ) {
	        if (13 === current.tag)
	          null !== current.memoizedState &&
	            scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
	        else if (19 === current.tag)
	          scheduleSuspenseWorkOnFiber(current, renderLanes, workInProgress);
	        else if (null !== current.child) {
	          current.child.return = current;
	          current = current.child;
	          continue;
	        }
	        if (current === workInProgress) break a;
	        for (; null === current.sibling; ) {
	          if (null === current.return || current.return === workInProgress)
	            break a;
	          current = current.return;
	        }
	        current.sibling.return = current.return;
	        current = current.sibling;
	      }
	    nextProps &= 1;
	  }
	  push(suspenseStackCursor, nextProps);
	  switch (revealOrder) {
	    case "forwards":
	      renderLanes = workInProgress.child;
	      for (revealOrder = null; null !== renderLanes; )
	        (current = renderLanes.alternate),
	          null !== current &&
	            null === findFirstSuspended(current) &&
	            (revealOrder = renderLanes),
	          (renderLanes = renderLanes.sibling);
	      renderLanes = revealOrder;
	      null === renderLanes
	        ? ((revealOrder = workInProgress.child), (workInProgress.child = null))
	        : ((revealOrder = renderLanes.sibling), (renderLanes.sibling = null));
	      initSuspenseListRenderState(
	        workInProgress,
	        false,
	        revealOrder,
	        renderLanes,
	        tailMode
	      );
	      break;
	    case "backwards":
	      renderLanes = null;
	      revealOrder = workInProgress.child;
	      for (workInProgress.child = null; null !== revealOrder; ) {
	        current = revealOrder.alternate;
	        if (null !== current && null === findFirstSuspended(current)) {
	          workInProgress.child = revealOrder;
	          break;
	        }
	        current = revealOrder.sibling;
	        revealOrder.sibling = renderLanes;
	        renderLanes = revealOrder;
	        revealOrder = current;
	      }
	      initSuspenseListRenderState(
	        workInProgress,
	        true,
	        renderLanes,
	        null,
	        tailMode
	      );
	      break;
	    case "together":
	      initSuspenseListRenderState(workInProgress, false, null, null, void 0);
	      break;
	    default:
	      workInProgress.memoizedState = null;
	  }
	  return workInProgress.child;
	}
	function bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes) {
	  null !== current && (workInProgress.dependencies = current.dependencies);
	  workInProgressRootSkippedLanes |= workInProgress.lanes;
	  if (0 === (renderLanes & workInProgress.childLanes))
	    if (null !== current) {
	      if (
	        (propagateParentContextChanges(
	          current,
	          workInProgress,
	          renderLanes,
	          false
	        ),
	        0 === (renderLanes & workInProgress.childLanes))
	      )
	        return null;
	    } else return null;
	  if (null !== current && workInProgress.child !== current.child)
	    throw Error(formatProdErrorMessage(153));
	  if (null !== workInProgress.child) {
	    current = workInProgress.child;
	    renderLanes = createWorkInProgress(current, current.pendingProps);
	    workInProgress.child = renderLanes;
	    for (renderLanes.return = workInProgress; null !== current.sibling; )
	      (current = current.sibling),
	        (renderLanes = renderLanes.sibling =
	          createWorkInProgress(current, current.pendingProps)),
	        (renderLanes.return = workInProgress);
	    renderLanes.sibling = null;
	  }
	  return workInProgress.child;
	}
	function checkScheduledUpdateOrContext(current, renderLanes) {
	  if (0 !== (current.lanes & renderLanes)) return true;
	  current = current.dependencies;
	  return null !== current && checkIfContextChanged(current) ? true : false;
	}
	function attemptEarlyBailoutIfNoScheduledUpdate(
	  current,
	  workInProgress,
	  renderLanes
	) {
	  switch (workInProgress.tag) {
	    case 3:
	      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
	      resetHydrationState();
	      break;
	    case 27:
	    case 5:
	      pushHostContext(workInProgress);
	      break;
	    case 4:
	      pushHostContainer(workInProgress, workInProgress.stateNode.containerInfo);
	      break;
	    case 10:
	      pushProvider(
	        workInProgress,
	        workInProgress.type,
	        workInProgress.memoizedProps.value
	      );
	      break;
	    case 13:
	      var state = workInProgress.memoizedState;
	      if (null !== state) {
	        if (null !== state.dehydrated)
	          return (
	            pushPrimaryTreeSuspenseHandler(workInProgress),
	            (workInProgress.flags |= 128),
	            null
	          );
	        if (0 !== (renderLanes & workInProgress.child.childLanes))
	          return updateSuspenseComponent(current, workInProgress, renderLanes);
	        pushPrimaryTreeSuspenseHandler(workInProgress);
	        current = bailoutOnAlreadyFinishedWork(
	          current,
	          workInProgress,
	          renderLanes
	        );
	        return null !== current ? current.sibling : null;
	      }
	      pushPrimaryTreeSuspenseHandler(workInProgress);
	      break;
	    case 19:
	      var didSuspendBefore = 0 !== (current.flags & 128);
	      state = 0 !== (renderLanes & workInProgress.childLanes);
	      state ||
	        (propagateParentContextChanges(
	          current,
	          workInProgress,
	          renderLanes,
	          false
	        ),
	        (state = 0 !== (renderLanes & workInProgress.childLanes)));
	      if (didSuspendBefore) {
	        if (state)
	          return updateSuspenseListComponent(
	            current,
	            workInProgress,
	            renderLanes
	          );
	        workInProgress.flags |= 128;
	      }
	      didSuspendBefore = workInProgress.memoizedState;
	      null !== didSuspendBefore &&
	        ((didSuspendBefore.rendering = null),
	        (didSuspendBefore.tail = null),
	        (didSuspendBefore.lastEffect = null));
	      push(suspenseStackCursor, suspenseStackCursor.current);
	      if (state) break;
	      else return null;
	    case 22:
	    case 23:
	      return (
	        (workInProgress.lanes = 0),
	        updateOffscreenComponent(current, workInProgress, renderLanes)
	      );
	    case 24:
	      pushProvider(workInProgress, CacheContext, current.memoizedState.cache);
	  }
	  return bailoutOnAlreadyFinishedWork(current, workInProgress, renderLanes);
	}
	function beginWork(current, workInProgress, renderLanes) {
	  if (null !== current)
	    if (current.memoizedProps !== workInProgress.pendingProps)
	      didReceiveUpdate = true;
	    else {
	      if (
	        !checkScheduledUpdateOrContext(current, renderLanes) &&
	        0 === (workInProgress.flags & 128)
	      )
	        return (
	          (didReceiveUpdate = false),
	          attemptEarlyBailoutIfNoScheduledUpdate(
	            current,
	            workInProgress,
	            renderLanes
	          )
	        );
	      didReceiveUpdate = 0 !== (current.flags & 131072) ? true : false;
	    }
	  else
	    (didReceiveUpdate = false),
	      isHydrating &&
	        0 !== (workInProgress.flags & 1048576) &&
	        pushTreeId(workInProgress, treeForkCount, workInProgress.index);
	  workInProgress.lanes = 0;
	  switch (workInProgress.tag) {
	    case 16:
	      a: {
	        current = workInProgress.pendingProps;
	        var lazyComponent = workInProgress.elementType,
	          init = lazyComponent._init;
	        lazyComponent = init(lazyComponent._payload);
	        workInProgress.type = lazyComponent;
	        if ("function" === typeof lazyComponent)
	          shouldConstruct(lazyComponent)
	            ? ((current = resolveClassComponentProps(lazyComponent, current)),
	              (workInProgress.tag = 1),
	              (workInProgress = updateClassComponent(
	                null,
	                workInProgress,
	                lazyComponent,
	                current,
	                renderLanes
	              )))
	            : ((workInProgress.tag = 0),
	              (workInProgress = updateFunctionComponent(
	                null,
	                workInProgress,
	                lazyComponent,
	                current,
	                renderLanes
	              )));
	        else {
	          if (void 0 !== lazyComponent && null !== lazyComponent)
	            if (
	              ((init = lazyComponent.$$typeof), init === REACT_FORWARD_REF_TYPE)
	            ) {
	              workInProgress.tag = 11;
	              workInProgress = updateForwardRef(
	                null,
	                workInProgress,
	                lazyComponent,
	                current,
	                renderLanes
	              );
	              break a;
	            } else if (init === REACT_MEMO_TYPE) {
	              workInProgress.tag = 14;
	              workInProgress = updateMemoComponent(
	                null,
	                workInProgress,
	                lazyComponent,
	                current,
	                renderLanes
	              );
	              break a;
	            }
	          workInProgress =
	            getComponentNameFromType(lazyComponent) || lazyComponent;
	          throw Error(formatProdErrorMessage(306, workInProgress, ""));
	        }
	      }
	      return workInProgress;
	    case 0:
	      return updateFunctionComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 1:
	      return (
	        (lazyComponent = workInProgress.type),
	        (init = resolveClassComponentProps(
	          lazyComponent,
	          workInProgress.pendingProps
	        )),
	        updateClassComponent(
	          current,
	          workInProgress,
	          lazyComponent,
	          init,
	          renderLanes
	        )
	      );
	    case 3:
	      a: {
	        pushHostContainer(
	          workInProgress,
	          workInProgress.stateNode.containerInfo
	        );
	        if (null === current) throw Error(formatProdErrorMessage(387));
	        lazyComponent = workInProgress.pendingProps;
	        var prevState = workInProgress.memoizedState;
	        init = prevState.element;
	        cloneUpdateQueue(current, workInProgress);
	        processUpdateQueue(workInProgress, lazyComponent, null, renderLanes);
	        var nextState = workInProgress.memoizedState;
	        lazyComponent = nextState.cache;
	        pushProvider(workInProgress, CacheContext, lazyComponent);
	        lazyComponent !== prevState.cache &&
	          propagateContextChanges(
	            workInProgress,
	            [CacheContext],
	            renderLanes,
	            true
	          );
	        suspendIfUpdateReadFromEntangledAsyncAction();
	        lazyComponent = nextState.element;
	        if (prevState.isDehydrated)
	          if (
	            ((prevState = {
	              element: lazyComponent,
	              isDehydrated: false,
	              cache: nextState.cache
	            }),
	            (workInProgress.updateQueue.baseState = prevState),
	            (workInProgress.memoizedState = prevState),
	            workInProgress.flags & 256)
	          ) {
	            workInProgress = mountHostRootWithoutHydrating(
	              current,
	              workInProgress,
	              lazyComponent,
	              renderLanes
	            );
	            break a;
	          } else if (lazyComponent !== init) {
	            init = createCapturedValueAtFiber(
	              Error(formatProdErrorMessage(424)),
	              workInProgress
	            );
	            queueHydrationError(init);
	            workInProgress = mountHostRootWithoutHydrating(
	              current,
	              workInProgress,
	              lazyComponent,
	              renderLanes
	            );
	            break a;
	          } else {
	            current = workInProgress.stateNode.containerInfo;
	            switch (current.nodeType) {
	              case 9:
	                current = current.body;
	                break;
	              default:
	                current =
	                  "HTML" === current.nodeName
	                    ? current.ownerDocument.body
	                    : current;
	            }
	            nextHydratableInstance = getNextHydratable(current.firstChild);
	            hydrationParentFiber = workInProgress;
	            isHydrating = true;
	            hydrationErrors = null;
	            rootOrSingletonContext = true;
	            renderLanes = mountChildFibers(
	              workInProgress,
	              null,
	              lazyComponent,
	              renderLanes
	            );
	            for (workInProgress.child = renderLanes; renderLanes; )
	              (renderLanes.flags = (renderLanes.flags & -3) | 4096),
	                (renderLanes = renderLanes.sibling);
	          }
	        else {
	          resetHydrationState();
	          if (lazyComponent === init) {
	            workInProgress = bailoutOnAlreadyFinishedWork(
	              current,
	              workInProgress,
	              renderLanes
	            );
	            break a;
	          }
	          reconcileChildren(
	            current,
	            workInProgress,
	            lazyComponent,
	            renderLanes
	          );
	        }
	        workInProgress = workInProgress.child;
	      }
	      return workInProgress;
	    case 26:
	      return (
	        markRef(current, workInProgress),
	        null === current
	          ? (renderLanes = getResource(
	              workInProgress.type,
	              null,
	              workInProgress.pendingProps,
	              null
	            ))
	            ? (workInProgress.memoizedState = renderLanes)
	            : isHydrating ||
	              ((renderLanes = workInProgress.type),
	              (current = workInProgress.pendingProps),
	              (lazyComponent = getOwnerDocumentFromRootContainer(
	                rootInstanceStackCursor.current
	              ).createElement(renderLanes)),
	              (lazyComponent[internalInstanceKey] = workInProgress),
	              (lazyComponent[internalPropsKey] = current),
	              setInitialProperties(lazyComponent, renderLanes, current),
	              markNodeAsHoistable(lazyComponent),
	              (workInProgress.stateNode = lazyComponent))
	          : (workInProgress.memoizedState = getResource(
	              workInProgress.type,
	              current.memoizedProps,
	              workInProgress.pendingProps,
	              current.memoizedState
	            )),
	        null
	      );
	    case 27:
	      return (
	        pushHostContext(workInProgress),
	        null === current &&
	          isHydrating &&
	          ((lazyComponent = workInProgress.stateNode =
	            resolveSingletonInstance(
	              workInProgress.type,
	              workInProgress.pendingProps,
	              rootInstanceStackCursor.current
	            )),
	          (hydrationParentFiber = workInProgress),
	          (rootOrSingletonContext = true),
	          (init = nextHydratableInstance),
	          isSingletonScope(workInProgress.type)
	            ? ((previousHydratableOnEnteringScopedSingleton = init),
	              (nextHydratableInstance = getNextHydratable(
	                lazyComponent.firstChild
	              )))
	            : (nextHydratableInstance = init)),
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        markRef(current, workInProgress),
	        null === current && (workInProgress.flags |= 4194304),
	        workInProgress.child
	      );
	    case 5:
	      if (null === current && isHydrating) {
	        if ((init = lazyComponent = nextHydratableInstance))
	          (lazyComponent = canHydrateInstance(
	            lazyComponent,
	            workInProgress.type,
	            workInProgress.pendingProps,
	            rootOrSingletonContext
	          )),
	            null !== lazyComponent
	              ? ((workInProgress.stateNode = lazyComponent),
	                (hydrationParentFiber = workInProgress),
	                (nextHydratableInstance = getNextHydratable(
	                  lazyComponent.firstChild
	                )),
	                (rootOrSingletonContext = false),
	                (init = true))
	              : (init = false);
	        init || throwOnHydrationMismatch(workInProgress);
	      }
	      pushHostContext(workInProgress);
	      init = workInProgress.type;
	      prevState = workInProgress.pendingProps;
	      nextState = null !== current ? current.memoizedProps : null;
	      lazyComponent = prevState.children;
	      shouldSetTextContent(init, prevState)
	        ? (lazyComponent = null)
	        : null !== nextState &&
	          shouldSetTextContent(init, nextState) &&
	          (workInProgress.flags |= 32);
	      null !== workInProgress.memoizedState &&
	        ((init = renderWithHooks(
	          current,
	          workInProgress,
	          TransitionAwareHostComponent,
	          null,
	          null,
	          renderLanes
	        )),
	        (HostTransitionContext._currentValue = init));
	      markRef(current, workInProgress);
	      reconcileChildren(current, workInProgress, lazyComponent, renderLanes);
	      return workInProgress.child;
	    case 6:
	      if (null === current && isHydrating) {
	        if ((current = renderLanes = nextHydratableInstance))
	          (renderLanes = canHydrateTextInstance(
	            renderLanes,
	            workInProgress.pendingProps,
	            rootOrSingletonContext
	          )),
	            null !== renderLanes
	              ? ((workInProgress.stateNode = renderLanes),
	                (hydrationParentFiber = workInProgress),
	                (nextHydratableInstance = null),
	                (current = true))
	              : (current = false);
	        current || throwOnHydrationMismatch(workInProgress);
	      }
	      return null;
	    case 13:
	      return updateSuspenseComponent(current, workInProgress, renderLanes);
	    case 4:
	      return (
	        pushHostContainer(
	          workInProgress,
	          workInProgress.stateNode.containerInfo
	        ),
	        (lazyComponent = workInProgress.pendingProps),
	        null === current
	          ? (workInProgress.child = reconcileChildFibers(
	              workInProgress,
	              null,
	              lazyComponent,
	              renderLanes
	            ))
	          : reconcileChildren(
	              current,
	              workInProgress,
	              lazyComponent,
	              renderLanes
	            ),
	        workInProgress.child
	      );
	    case 11:
	      return updateForwardRef(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 7:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 8:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 12:
	      return (
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 10:
	      return (
	        (lazyComponent = workInProgress.pendingProps),
	        pushProvider(workInProgress, workInProgress.type, lazyComponent.value),
	        reconcileChildren(
	          current,
	          workInProgress,
	          lazyComponent.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 9:
	      return (
	        (init = workInProgress.type._context),
	        (lazyComponent = workInProgress.pendingProps.children),
	        prepareToReadContext(workInProgress),
	        (init = readContext(init)),
	        (lazyComponent = lazyComponent(init)),
	        (workInProgress.flags |= 1),
	        reconcileChildren(current, workInProgress, lazyComponent, renderLanes),
	        workInProgress.child
	      );
	    case 14:
	      return updateMemoComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 15:
	      return updateSimpleMemoComponent(
	        current,
	        workInProgress,
	        workInProgress.type,
	        workInProgress.pendingProps,
	        renderLanes
	      );
	    case 19:
	      return updateSuspenseListComponent(current, workInProgress, renderLanes);
	    case 31:
	      return (
	        (lazyComponent = workInProgress.pendingProps),
	        (renderLanes = workInProgress.mode),
	        (lazyComponent = {
	          mode: lazyComponent.mode,
	          children: lazyComponent.children
	        }),
	        null === current
	          ? ((renderLanes = mountWorkInProgressOffscreenFiber(
	              lazyComponent,
	              renderLanes
	            )),
	            (renderLanes.ref = workInProgress.ref),
	            (workInProgress.child = renderLanes),
	            (renderLanes.return = workInProgress),
	            (workInProgress = renderLanes))
	          : ((renderLanes = createWorkInProgress(current.child, lazyComponent)),
	            (renderLanes.ref = workInProgress.ref),
	            (workInProgress.child = renderLanes),
	            (renderLanes.return = workInProgress),
	            (workInProgress = renderLanes)),
	        workInProgress
	      );
	    case 22:
	      return updateOffscreenComponent(current, workInProgress, renderLanes);
	    case 24:
	      return (
	        prepareToReadContext(workInProgress),
	        (lazyComponent = readContext(CacheContext)),
	        null === current
	          ? ((init = peekCacheFromPool()),
	            null === init &&
	              ((init = workInProgressRoot),
	              (prevState = createCache()),
	              (init.pooledCache = prevState),
	              prevState.refCount++,
	              null !== prevState && (init.pooledCacheLanes |= renderLanes),
	              (init = prevState)),
	            (workInProgress.memoizedState = {
	              parent: lazyComponent,
	              cache: init
	            }),
	            initializeUpdateQueue(workInProgress),
	            pushProvider(workInProgress, CacheContext, init))
	          : (0 !== (current.lanes & renderLanes) &&
	              (cloneUpdateQueue(current, workInProgress),
	              processUpdateQueue(workInProgress, null, null, renderLanes),
	              suspendIfUpdateReadFromEntangledAsyncAction()),
	            (init = current.memoizedState),
	            (prevState = workInProgress.memoizedState),
	            init.parent !== lazyComponent
	              ? ((init = { parent: lazyComponent, cache: lazyComponent }),
	                (workInProgress.memoizedState = init),
	                0 === workInProgress.lanes &&
	                  (workInProgress.memoizedState =
	                    workInProgress.updateQueue.baseState =
	                      init),
	                pushProvider(workInProgress, CacheContext, lazyComponent))
	              : ((lazyComponent = prevState.cache),
	                pushProvider(workInProgress, CacheContext, lazyComponent),
	                lazyComponent !== init.cache &&
	                  propagateContextChanges(
	                    workInProgress,
	                    [CacheContext],
	                    renderLanes,
	                    true
	                  ))),
	        reconcileChildren(
	          current,
	          workInProgress,
	          workInProgress.pendingProps.children,
	          renderLanes
	        ),
	        workInProgress.child
	      );
	    case 29:
	      throw workInProgress.pendingProps;
	  }
	  throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function markUpdate(workInProgress) {
	  workInProgress.flags |= 4;
	}
	function preloadResourceAndSuspendIfNeeded(workInProgress, resource) {
	  if ("stylesheet" !== resource.type || 0 !== (resource.state.loading & 4))
	    workInProgress.flags &= -16777217;
	  else if (((workInProgress.flags |= 16777216), !preloadResource(resource))) {
	    resource = suspenseHandlerStackCursor.current;
	    if (
	      null !== resource &&
	      ((workInProgressRootRenderLanes & 4194048) ===
	      workInProgressRootRenderLanes
	        ? null !== shellBoundary
	        : ((workInProgressRootRenderLanes & 62914560) !==
	            workInProgressRootRenderLanes &&
	            0 === (workInProgressRootRenderLanes & 536870912)) ||
	          resource !== shellBoundary)
	    )
	      throw (
	        ((suspendedThenable = noopSuspenseyCommitThenable),
	        SuspenseyCommitException)
	      );
	    workInProgress.flags |= 8192;
	  }
	}
	function scheduleRetryEffect(workInProgress, retryQueue) {
	  null !== retryQueue && (workInProgress.flags |= 4);
	  workInProgress.flags & 16384 &&
	    ((retryQueue =
	      22 !== workInProgress.tag ? claimNextRetryLane() : 536870912),
	    (workInProgress.lanes |= retryQueue),
	    (workInProgressSuspendedRetryLanes |= retryQueue));
	}
	function cutOffTailIfNeeded(renderState, hasRenderedATailFallback) {
	  if (!isHydrating)
	    switch (renderState.tailMode) {
	      case "hidden":
	        hasRenderedATailFallback = renderState.tail;
	        for (var lastTailNode = null; null !== hasRenderedATailFallback; )
	          null !== hasRenderedATailFallback.alternate &&
	            (lastTailNode = hasRenderedATailFallback),
	            (hasRenderedATailFallback = hasRenderedATailFallback.sibling);
	        null === lastTailNode
	          ? (renderState.tail = null)
	          : (lastTailNode.sibling = null);
	        break;
	      case "collapsed":
	        lastTailNode = renderState.tail;
	        for (var lastTailNode$113 = null; null !== lastTailNode; )
	          null !== lastTailNode.alternate && (lastTailNode$113 = lastTailNode),
	            (lastTailNode = lastTailNode.sibling);
	        null === lastTailNode$113
	          ? hasRenderedATailFallback || null === renderState.tail
	            ? (renderState.tail = null)
	            : (renderState.tail.sibling = null)
	          : (lastTailNode$113.sibling = null);
	    }
	}
	function bubbleProperties(completedWork) {
	  var didBailout =
	      null !== completedWork.alternate &&
	      completedWork.alternate.child === completedWork.child,
	    newChildLanes = 0,
	    subtreeFlags = 0;
	  if (didBailout)
	    for (var child$114 = completedWork.child; null !== child$114; )
	      (newChildLanes |= child$114.lanes | child$114.childLanes),
	        (subtreeFlags |= child$114.subtreeFlags & 65011712),
	        (subtreeFlags |= child$114.flags & 65011712),
	        (child$114.return = completedWork),
	        (child$114 = child$114.sibling);
	  else
	    for (child$114 = completedWork.child; null !== child$114; )
	      (newChildLanes |= child$114.lanes | child$114.childLanes),
	        (subtreeFlags |= child$114.subtreeFlags),
	        (subtreeFlags |= child$114.flags),
	        (child$114.return = completedWork),
	        (child$114 = child$114.sibling);
	  completedWork.subtreeFlags |= subtreeFlags;
	  completedWork.childLanes = newChildLanes;
	  return didBailout;
	}
	function completeWork(current, workInProgress, renderLanes) {
	  var newProps = workInProgress.pendingProps;
	  popTreeContext(workInProgress);
	  switch (workInProgress.tag) {
	    case 31:
	    case 16:
	    case 15:
	    case 0:
	    case 11:
	    case 7:
	    case 8:
	    case 12:
	    case 9:
	    case 14:
	      return bubbleProperties(workInProgress), null;
	    case 1:
	      return bubbleProperties(workInProgress), null;
	    case 3:
	      renderLanes = workInProgress.stateNode;
	      newProps = null;
	      null !== current && (newProps = current.memoizedState.cache);
	      workInProgress.memoizedState.cache !== newProps &&
	        (workInProgress.flags |= 2048);
	      popProvider(CacheContext);
	      popHostContainer();
	      renderLanes.pendingContext &&
	        ((renderLanes.context = renderLanes.pendingContext),
	        (renderLanes.pendingContext = null));
	      if (null === current || null === current.child)
	        popHydrationState(workInProgress)
	          ? markUpdate(workInProgress)
	          : null === current ||
	            (current.memoizedState.isDehydrated &&
	              0 === (workInProgress.flags & 256)) ||
	            ((workInProgress.flags |= 1024),
	            upgradeHydrationErrorsToRecoverable());
	      bubbleProperties(workInProgress);
	      return null;
	    case 26:
	      return (
	        (renderLanes = workInProgress.memoizedState),
	        null === current
	          ? (markUpdate(workInProgress),
	            null !== renderLanes
	              ? (bubbleProperties(workInProgress),
	                preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes))
	              : (bubbleProperties(workInProgress),
	                (workInProgress.flags &= -16777217)))
	          : renderLanes
	            ? renderLanes !== current.memoizedState
	              ? (markUpdate(workInProgress),
	                bubbleProperties(workInProgress),
	                preloadResourceAndSuspendIfNeeded(workInProgress, renderLanes))
	              : (bubbleProperties(workInProgress),
	                (workInProgress.flags &= -16777217))
	            : (current.memoizedProps !== newProps && markUpdate(workInProgress),
	              bubbleProperties(workInProgress),
	              (workInProgress.flags &= -16777217)),
	        null
	      );
	    case 27:
	      popHostContext(workInProgress);
	      renderLanes = rootInstanceStackCursor.current;
	      var type = workInProgress.type;
	      if (null !== current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if (!newProps) {
	          if (null === workInProgress.stateNode)
	            throw Error(formatProdErrorMessage(166));
	          bubbleProperties(workInProgress);
	          return null;
	        }
	        current = contextStackCursor.current;
	        popHydrationState(workInProgress)
	          ? prepareToHydrateHostInstance(workInProgress)
	          : ((current = resolveSingletonInstance(type, newProps, renderLanes)),
	            (workInProgress.stateNode = current),
	            markUpdate(workInProgress));
	      }
	      bubbleProperties(workInProgress);
	      return null;
	    case 5:
	      popHostContext(workInProgress);
	      renderLanes = workInProgress.type;
	      if (null !== current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if (!newProps) {
	          if (null === workInProgress.stateNode)
	            throw Error(formatProdErrorMessage(166));
	          bubbleProperties(workInProgress);
	          return null;
	        }
	        current = contextStackCursor.current;
	        if (popHydrationState(workInProgress))
	          prepareToHydrateHostInstance(workInProgress);
	        else {
	          type = getOwnerDocumentFromRootContainer(
	            rootInstanceStackCursor.current
	          );
	          switch (current) {
	            case 1:
	              current = type.createElementNS(
	                "http://www.w3.org/2000/svg",
	                renderLanes
	              );
	              break;
	            case 2:
	              current = type.createElementNS(
	                "http://www.w3.org/1998/Math/MathML",
	                renderLanes
	              );
	              break;
	            default:
	              switch (renderLanes) {
	                case "svg":
	                  current = type.createElementNS(
	                    "http://www.w3.org/2000/svg",
	                    renderLanes
	                  );
	                  break;
	                case "math":
	                  current = type.createElementNS(
	                    "http://www.w3.org/1998/Math/MathML",
	                    renderLanes
	                  );
	                  break;
	                case "script":
	                  current = type.createElement("div");
	                  current.innerHTML = "<script>\x3c/script>";
	                  current = current.removeChild(current.firstChild);
	                  break;
	                case "select":
	                  current =
	                    "string" === typeof newProps.is
	                      ? type.createElement("select", { is: newProps.is })
	                      : type.createElement("select");
	                  newProps.multiple
	                    ? (current.multiple = true)
	                    : newProps.size && (current.size = newProps.size);
	                  break;
	                default:
	                  current =
	                    "string" === typeof newProps.is
	                      ? type.createElement(renderLanes, { is: newProps.is })
	                      : type.createElement(renderLanes);
	              }
	          }
	          current[internalInstanceKey] = workInProgress;
	          current[internalPropsKey] = newProps;
	          a: for (type = workInProgress.child; null !== type; ) {
	            if (5 === type.tag || 6 === type.tag)
	              current.appendChild(type.stateNode);
	            else if (4 !== type.tag && 27 !== type.tag && null !== type.child) {
	              type.child.return = type;
	              type = type.child;
	              continue;
	            }
	            if (type === workInProgress) break a;
	            for (; null === type.sibling; ) {
	              if (null === type.return || type.return === workInProgress)
	                break a;
	              type = type.return;
	            }
	            type.sibling.return = type.return;
	            type = type.sibling;
	          }
	          workInProgress.stateNode = current;
	          a: switch (
	            (setInitialProperties(current, renderLanes, newProps), renderLanes)
	          ) {
	            case "button":
	            case "input":
	            case "select":
	            case "textarea":
	              current = !!newProps.autoFocus;
	              break a;
	            case "img":
	              current = true;
	              break a;
	            default:
	              current = false;
	          }
	          current && markUpdate(workInProgress);
	        }
	      }
	      bubbleProperties(workInProgress);
	      workInProgress.flags &= -16777217;
	      return null;
	    case 6:
	      if (current && null != workInProgress.stateNode)
	        current.memoizedProps !== newProps && markUpdate(workInProgress);
	      else {
	        if ("string" !== typeof newProps && null === workInProgress.stateNode)
	          throw Error(formatProdErrorMessage(166));
	        current = rootInstanceStackCursor.current;
	        if (popHydrationState(workInProgress)) {
	          current = workInProgress.stateNode;
	          renderLanes = workInProgress.memoizedProps;
	          newProps = null;
	          type = hydrationParentFiber;
	          if (null !== type)
	            switch (type.tag) {
	              case 27:
	              case 5:
	                newProps = type.memoizedProps;
	            }
	          current[internalInstanceKey] = workInProgress;
	          current =
	            current.nodeValue === renderLanes ||
	            (null !== newProps && true === newProps.suppressHydrationWarning) ||
	            checkForUnmatchedText(current.nodeValue, renderLanes)
	              ? true
	              : false;
	          current || throwOnHydrationMismatch(workInProgress);
	        } else
	          (current =
	            getOwnerDocumentFromRootContainer(current).createTextNode(
	              newProps
	            )),
	            (current[internalInstanceKey] = workInProgress),
	            (workInProgress.stateNode = current);
	      }
	      bubbleProperties(workInProgress);
	      return null;
	    case 13:
	      newProps = workInProgress.memoizedState;
	      if (
	        null === current ||
	        (null !== current.memoizedState &&
	          null !== current.memoizedState.dehydrated)
	      ) {
	        type = popHydrationState(workInProgress);
	        if (null !== newProps && null !== newProps.dehydrated) {
	          if (null === current) {
	            if (!type) throw Error(formatProdErrorMessage(318));
	            type = workInProgress.memoizedState;
	            type = null !== type ? type.dehydrated : null;
	            if (!type) throw Error(formatProdErrorMessage(317));
	            type[internalInstanceKey] = workInProgress;
	          } else
	            resetHydrationState(),
	              0 === (workInProgress.flags & 128) &&
	                (workInProgress.memoizedState = null),
	              (workInProgress.flags |= 4);
	          bubbleProperties(workInProgress);
	          type = false;
	        } else
	          (type = upgradeHydrationErrorsToRecoverable()),
	            null !== current &&
	              null !== current.memoizedState &&
	              (current.memoizedState.hydrationErrors = type),
	            (type = true);
	        if (!type) {
	          if (workInProgress.flags & 256)
	            return popSuspenseHandler(workInProgress), workInProgress;
	          popSuspenseHandler(workInProgress);
	          return null;
	        }
	      }
	      popSuspenseHandler(workInProgress);
	      if (0 !== (workInProgress.flags & 128))
	        return (workInProgress.lanes = renderLanes), workInProgress;
	      renderLanes = null !== newProps;
	      current = null !== current && null !== current.memoizedState;
	      if (renderLanes) {
	        newProps = workInProgress.child;
	        type = null;
	        null !== newProps.alternate &&
	          null !== newProps.alternate.memoizedState &&
	          null !== newProps.alternate.memoizedState.cachePool &&
	          (type = newProps.alternate.memoizedState.cachePool.pool);
	        var cache$127 = null;
	        null !== newProps.memoizedState &&
	          null !== newProps.memoizedState.cachePool &&
	          (cache$127 = newProps.memoizedState.cachePool.pool);
	        cache$127 !== type && (newProps.flags |= 2048);
	      }
	      renderLanes !== current &&
	        renderLanes &&
	        (workInProgress.child.flags |= 8192);
	      scheduleRetryEffect(workInProgress, workInProgress.updateQueue);
	      bubbleProperties(workInProgress);
	      return null;
	    case 4:
	      return (
	        popHostContainer(),
	        null === current &&
	          listenToAllSupportedEvents(workInProgress.stateNode.containerInfo),
	        bubbleProperties(workInProgress),
	        null
	      );
	    case 10:
	      return (
	        popProvider(workInProgress.type), bubbleProperties(workInProgress), null
	      );
	    case 19:
	      pop(suspenseStackCursor);
	      type = workInProgress.memoizedState;
	      if (null === type) return bubbleProperties(workInProgress), null;
	      newProps = 0 !== (workInProgress.flags & 128);
	      cache$127 = type.rendering;
	      if (null === cache$127)
	        if (newProps) cutOffTailIfNeeded(type, false);
	        else {
	          if (
	            0 !== workInProgressRootExitStatus ||
	            (null !== current && 0 !== (current.flags & 128))
	          )
	            for (current = workInProgress.child; null !== current; ) {
	              cache$127 = findFirstSuspended(current);
	              if (null !== cache$127) {
	                workInProgress.flags |= 128;
	                cutOffTailIfNeeded(type, false);
	                current = cache$127.updateQueue;
	                workInProgress.updateQueue = current;
	                scheduleRetryEffect(workInProgress, current);
	                workInProgress.subtreeFlags = 0;
	                current = renderLanes;
	                for (renderLanes = workInProgress.child; null !== renderLanes; )
	                  resetWorkInProgress(renderLanes, current),
	                    (renderLanes = renderLanes.sibling);
	                push(
	                  suspenseStackCursor,
	                  (suspenseStackCursor.current & 1) | 2
	                );
	                return workInProgress.child;
	              }
	              current = current.sibling;
	            }
	          null !== type.tail &&
	            now() > workInProgressRootRenderTargetTime &&
	            ((workInProgress.flags |= 128),
	            (newProps = true),
	            cutOffTailIfNeeded(type, false),
	            (workInProgress.lanes = 4194304));
	        }
	      else {
	        if (!newProps)
	          if (((current = findFirstSuspended(cache$127)), null !== current)) {
	            if (
	              ((workInProgress.flags |= 128),
	              (newProps = true),
	              (current = current.updateQueue),
	              (workInProgress.updateQueue = current),
	              scheduleRetryEffect(workInProgress, current),
	              cutOffTailIfNeeded(type, true),
	              null === type.tail &&
	                "hidden" === type.tailMode &&
	                !cache$127.alternate &&
	                !isHydrating)
	            )
	              return bubbleProperties(workInProgress), null;
	          } else
	            2 * now() - type.renderingStartTime >
	              workInProgressRootRenderTargetTime &&
	              536870912 !== renderLanes &&
	              ((workInProgress.flags |= 128),
	              (newProps = true),
	              cutOffTailIfNeeded(type, false),
	              (workInProgress.lanes = 4194304));
	        type.isBackwards
	          ? ((cache$127.sibling = workInProgress.child),
	            (workInProgress.child = cache$127))
	          : ((current = type.last),
	            null !== current
	              ? (current.sibling = cache$127)
	              : (workInProgress.child = cache$127),
	            (type.last = cache$127));
	      }
	      if (null !== type.tail)
	        return (
	          (workInProgress = type.tail),
	          (type.rendering = workInProgress),
	          (type.tail = workInProgress.sibling),
	          (type.renderingStartTime = now()),
	          (workInProgress.sibling = null),
	          (current = suspenseStackCursor.current),
	          push(suspenseStackCursor, newProps ? (current & 1) | 2 : current & 1),
	          workInProgress
	        );
	      bubbleProperties(workInProgress);
	      return null;
	    case 22:
	    case 23:
	      return (
	        popSuspenseHandler(workInProgress),
	        popHiddenContext(),
	        (newProps = null !== workInProgress.memoizedState),
	        null !== current
	          ? (null !== current.memoizedState) !== newProps &&
	            (workInProgress.flags |= 8192)
	          : newProps && (workInProgress.flags |= 8192),
	        newProps
	          ? 0 !== (renderLanes & 536870912) &&
	            0 === (workInProgress.flags & 128) &&
	            (bubbleProperties(workInProgress),
	            workInProgress.subtreeFlags & 6 && (workInProgress.flags |= 8192))
	          : bubbleProperties(workInProgress),
	        (renderLanes = workInProgress.updateQueue),
	        null !== renderLanes &&
	          scheduleRetryEffect(workInProgress, renderLanes.retryQueue),
	        (renderLanes = null),
	        null !== current &&
	          null !== current.memoizedState &&
	          null !== current.memoizedState.cachePool &&
	          (renderLanes = current.memoizedState.cachePool.pool),
	        (newProps = null),
	        null !== workInProgress.memoizedState &&
	          null !== workInProgress.memoizedState.cachePool &&
	          (newProps = workInProgress.memoizedState.cachePool.pool),
	        newProps !== renderLanes && (workInProgress.flags |= 2048),
	        null !== current && pop(resumedCache),
	        null
	      );
	    case 24:
	      return (
	        (renderLanes = null),
	        null !== current && (renderLanes = current.memoizedState.cache),
	        workInProgress.memoizedState.cache !== renderLanes &&
	          (workInProgress.flags |= 2048),
	        popProvider(CacheContext),
	        bubbleProperties(workInProgress),
	        null
	      );
	    case 25:
	      return null;
	    case 30:
	      return null;
	  }
	  throw Error(formatProdErrorMessage(156, workInProgress.tag));
	}
	function unwindWork(current, workInProgress) {
	  popTreeContext(workInProgress);
	  switch (workInProgress.tag) {
	    case 1:
	      return (
	        (current = workInProgress.flags),
	        current & 65536
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 3:
	      return (
	        popProvider(CacheContext),
	        popHostContainer(),
	        (current = workInProgress.flags),
	        0 !== (current & 65536) && 0 === (current & 128)
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 26:
	    case 27:
	    case 5:
	      return popHostContext(workInProgress), null;
	    case 13:
	      popSuspenseHandler(workInProgress);
	      current = workInProgress.memoizedState;
	      if (null !== current && null !== current.dehydrated) {
	        if (null === workInProgress.alternate)
	          throw Error(formatProdErrorMessage(340));
	        resetHydrationState();
	      }
	      current = workInProgress.flags;
	      return current & 65536
	        ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	        : null;
	    case 19:
	      return pop(suspenseStackCursor), null;
	    case 4:
	      return popHostContainer(), null;
	    case 10:
	      return popProvider(workInProgress.type), null;
	    case 22:
	    case 23:
	      return (
	        popSuspenseHandler(workInProgress),
	        popHiddenContext(),
	        null !== current && pop(resumedCache),
	        (current = workInProgress.flags),
	        current & 65536
	          ? ((workInProgress.flags = (current & -65537) | 128), workInProgress)
	          : null
	      );
	    case 24:
	      return popProvider(CacheContext), null;
	    case 25:
	      return null;
	    default:
	      return null;
	  }
	}
	function unwindInterruptedWork(current, interruptedWork) {
	  popTreeContext(interruptedWork);
	  switch (interruptedWork.tag) {
	    case 3:
	      popProvider(CacheContext);
	      popHostContainer();
	      break;
	    case 26:
	    case 27:
	    case 5:
	      popHostContext(interruptedWork);
	      break;
	    case 4:
	      popHostContainer();
	      break;
	    case 13:
	      popSuspenseHandler(interruptedWork);
	      break;
	    case 19:
	      pop(suspenseStackCursor);
	      break;
	    case 10:
	      popProvider(interruptedWork.type);
	      break;
	    case 22:
	    case 23:
	      popSuspenseHandler(interruptedWork);
	      popHiddenContext();
	      null !== current && pop(resumedCache);
	      break;
	    case 24:
	      popProvider(CacheContext);
	  }
	}
	function commitHookEffectListMount(flags, finishedWork) {
	  try {
	    var updateQueue = finishedWork.updateQueue,
	      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
	    if (null !== lastEffect) {
	      var firstEffect = lastEffect.next;
	      updateQueue = firstEffect;
	      do {
	        if ((updateQueue.tag & flags) === flags) {
	          lastEffect = void 0;
	          var create = updateQueue.create,
	            inst = updateQueue.inst;
	          lastEffect = create();
	          inst.destroy = lastEffect;
	        }
	        updateQueue = updateQueue.next;
	      } while (updateQueue !== firstEffect);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitHookEffectListUnmount(
	  flags,
	  finishedWork,
	  nearestMountedAncestor$jscomp$0
	) {
	  try {
	    var updateQueue = finishedWork.updateQueue,
	      lastEffect = null !== updateQueue ? updateQueue.lastEffect : null;
	    if (null !== lastEffect) {
	      var firstEffect = lastEffect.next;
	      updateQueue = firstEffect;
	      do {
	        if ((updateQueue.tag & flags) === flags) {
	          var inst = updateQueue.inst,
	            destroy = inst.destroy;
	          if (void 0 !== destroy) {
	            inst.destroy = void 0;
	            lastEffect = finishedWork;
	            var nearestMountedAncestor = nearestMountedAncestor$jscomp$0,
	              destroy_ = destroy;
	            try {
	              destroy_();
	            } catch (error) {
	              captureCommitPhaseError(
	                lastEffect,
	                nearestMountedAncestor,
	                error
	              );
	            }
	          }
	        }
	        updateQueue = updateQueue.next;
	      } while (updateQueue !== firstEffect);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitClassCallbacks(finishedWork) {
	  var updateQueue = finishedWork.updateQueue;
	  if (null !== updateQueue) {
	    var instance = finishedWork.stateNode;
	    try {
	      commitCallbacks(updateQueue, instance);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	  }
	}
	function safelyCallComponentWillUnmount(
	  current,
	  nearestMountedAncestor,
	  instance
	) {
	  instance.props = resolveClassComponentProps(
	    current.type,
	    current.memoizedProps
	  );
	  instance.state = current.memoizedState;
	  try {
	    instance.componentWillUnmount();
	  } catch (error) {
	    captureCommitPhaseError(current, nearestMountedAncestor, error);
	  }
	}
	function safelyAttachRef(current, nearestMountedAncestor) {
	  try {
	    var ref = current.ref;
	    if (null !== ref) {
	      switch (current.tag) {
	        case 26:
	        case 27:
	        case 5:
	          var instanceToUse = current.stateNode;
	          break;
	        case 30:
	          instanceToUse = current.stateNode;
	          break;
	        default:
	          instanceToUse = current.stateNode;
	      }
	      "function" === typeof ref
	        ? (current.refCleanup = ref(instanceToUse))
	        : (ref.current = instanceToUse);
	    }
	  } catch (error) {
	    captureCommitPhaseError(current, nearestMountedAncestor, error);
	  }
	}
	function safelyDetachRef(current, nearestMountedAncestor) {
	  var ref = current.ref,
	    refCleanup = current.refCleanup;
	  if (null !== ref)
	    if ("function" === typeof refCleanup)
	      try {
	        refCleanup();
	      } catch (error) {
	        captureCommitPhaseError(current, nearestMountedAncestor, error);
	      } finally {
	        (current.refCleanup = null),
	          (current = current.alternate),
	          null != current && (current.refCleanup = null);
	      }
	    else if ("function" === typeof ref)
	      try {
	        ref(null);
	      } catch (error$143) {
	        captureCommitPhaseError(current, nearestMountedAncestor, error$143);
	      }
	    else ref.current = null;
	}
	function commitHostMount(finishedWork) {
	  var type = finishedWork.type,
	    props = finishedWork.memoizedProps,
	    instance = finishedWork.stateNode;
	  try {
	    a: switch (type) {
	      case "button":
	      case "input":
	      case "select":
	      case "textarea":
	        props.autoFocus && instance.focus();
	        break a;
	      case "img":
	        props.src
	          ? (instance.src = props.src)
	          : props.srcSet && (instance.srcset = props.srcSet);
	    }
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function commitHostUpdate(finishedWork, newProps, oldProps) {
	  try {
	    var domElement = finishedWork.stateNode;
	    updateProperties(domElement, finishedWork.type, oldProps, newProps);
	    domElement[internalPropsKey] = newProps;
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	function isHostParent(fiber) {
	  return (
	    5 === fiber.tag ||
	    3 === fiber.tag ||
	    26 === fiber.tag ||
	    (27 === fiber.tag && isSingletonScope(fiber.type)) ||
	    4 === fiber.tag
	  );
	}
	function getHostSibling(fiber) {
	  a: for (;;) {
	    for (; null === fiber.sibling; ) {
	      if (null === fiber.return || isHostParent(fiber.return)) return null;
	      fiber = fiber.return;
	    }
	    fiber.sibling.return = fiber.return;
	    for (
	      fiber = fiber.sibling;
	      5 !== fiber.tag && 6 !== fiber.tag && 18 !== fiber.tag;

	    ) {
	      if (27 === fiber.tag && isSingletonScope(fiber.type)) continue a;
	      if (fiber.flags & 2) continue a;
	      if (null === fiber.child || 4 === fiber.tag) continue a;
	      else (fiber.child.return = fiber), (fiber = fiber.child);
	    }
	    if (!(fiber.flags & 2)) return fiber.stateNode;
	  }
	}
	function insertOrAppendPlacementNodeIntoContainer(node, before, parent) {
	  var tag = node.tag;
	  if (5 === tag || 6 === tag)
	    (node = node.stateNode),
	      before
	        ? (9 === parent.nodeType
	            ? parent.body
	            : "HTML" === parent.nodeName
	              ? parent.ownerDocument.body
	              : parent
	          ).insertBefore(node, before)
	        : ((before =
	            9 === parent.nodeType
	              ? parent.body
	              : "HTML" === parent.nodeName
	                ? parent.ownerDocument.body
	                : parent),
	          before.appendChild(node),
	          (parent = parent._reactRootContainer),
	          (null !== parent && void 0 !== parent) ||
	            null !== before.onclick ||
	            (before.onclick = noop$1));
	  else if (
	    4 !== tag &&
	    (27 === tag &&
	      isSingletonScope(node.type) &&
	      ((parent = node.stateNode), (before = null)),
	    (node = node.child),
	    null !== node)
	  )
	    for (
	      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
	        node = node.sibling;
	      null !== node;

	    )
	      insertOrAppendPlacementNodeIntoContainer(node, before, parent),
	        (node = node.sibling);
	}
	function insertOrAppendPlacementNode(node, before, parent) {
	  var tag = node.tag;
	  if (5 === tag || 6 === tag)
	    (node = node.stateNode),
	      before ? parent.insertBefore(node, before) : parent.appendChild(node);
	  else if (
	    4 !== tag &&
	    (27 === tag && isSingletonScope(node.type) && (parent = node.stateNode),
	    (node = node.child),
	    null !== node)
	  )
	    for (
	      insertOrAppendPlacementNode(node, before, parent), node = node.sibling;
	      null !== node;

	    )
	      insertOrAppendPlacementNode(node, before, parent), (node = node.sibling);
	}
	function commitHostSingletonAcquisition(finishedWork) {
	  var singleton = finishedWork.stateNode,
	    props = finishedWork.memoizedProps;
	  try {
	    for (
	      var type = finishedWork.type, attributes = singleton.attributes;
	      attributes.length;

	    )
	      singleton.removeAttributeNode(attributes[0]);
	    setInitialProperties(singleton, type, props);
	    singleton[internalInstanceKey] = finishedWork;
	    singleton[internalPropsKey] = props;
	  } catch (error) {
	    captureCommitPhaseError(finishedWork, finishedWork.return, error);
	  }
	}
	var offscreenSubtreeIsHidden = false,
	  offscreenSubtreeWasHidden = false,
	  needsFormReset = false,
	  PossiblyWeakSet = "function" === typeof WeakSet ? WeakSet : Set,
	  nextEffect = null;
	function commitBeforeMutationEffects(root, firstChild) {
	  root = root.containerInfo;
	  eventsEnabled = _enabled;
	  root = getActiveElementDeep(root);
	  if (hasSelectionCapabilities(root)) {
	    if ("selectionStart" in root)
	      var JSCompiler_temp = {
	        start: root.selectionStart,
	        end: root.selectionEnd
	      };
	    else
	      a: {
	        JSCompiler_temp =
	          ((JSCompiler_temp = root.ownerDocument) &&
	            JSCompiler_temp.defaultView) ||
	          window;
	        var selection =
	          JSCompiler_temp.getSelection && JSCompiler_temp.getSelection();
	        if (selection && 0 !== selection.rangeCount) {
	          JSCompiler_temp = selection.anchorNode;
	          var anchorOffset = selection.anchorOffset,
	            focusNode = selection.focusNode;
	          selection = selection.focusOffset;
	          try {
	            JSCompiler_temp.nodeType, focusNode.nodeType;
	          } catch (e$20) {
	            JSCompiler_temp = null;
	            break a;
	          }
	          var length = 0,
	            start = -1,
	            end = -1,
	            indexWithinAnchor = 0,
	            indexWithinFocus = 0,
	            node = root,
	            parentNode = null;
	          b: for (;;) {
	            for (var next; ; ) {
	              node !== JSCompiler_temp ||
	                (0 !== anchorOffset && 3 !== node.nodeType) ||
	                (start = length + anchorOffset);
	              node !== focusNode ||
	                (0 !== selection && 3 !== node.nodeType) ||
	                (end = length + selection);
	              3 === node.nodeType && (length += node.nodeValue.length);
	              if (null === (next = node.firstChild)) break;
	              parentNode = node;
	              node = next;
	            }
	            for (;;) {
	              if (node === root) break b;
	              parentNode === JSCompiler_temp &&
	                ++indexWithinAnchor === anchorOffset &&
	                (start = length);
	              parentNode === focusNode &&
	                ++indexWithinFocus === selection &&
	                (end = length);
	              if (null !== (next = node.nextSibling)) break;
	              node = parentNode;
	              parentNode = node.parentNode;
	            }
	            node = next;
	          }
	          JSCompiler_temp =
	            -1 === start || -1 === end ? null : { start: start, end: end };
	        } else JSCompiler_temp = null;
	      }
	    JSCompiler_temp = JSCompiler_temp || { start: 0, end: 0 };
	  } else JSCompiler_temp = null;
	  selectionInformation = { focusedElem: root, selectionRange: JSCompiler_temp };
	  _enabled = false;
	  for (nextEffect = firstChild; null !== nextEffect; )
	    if (
	      ((firstChild = nextEffect),
	      (root = firstChild.child),
	      0 !== (firstChild.subtreeFlags & 1024) && null !== root)
	    )
	      (root.return = firstChild), (nextEffect = root);
	    else
	      for (; null !== nextEffect; ) {
	        firstChild = nextEffect;
	        focusNode = firstChild.alternate;
	        root = firstChild.flags;
	        switch (firstChild.tag) {
	          case 0:
	            break;
	          case 11:
	          case 15:
	            break;
	          case 1:
	            if (0 !== (root & 1024) && null !== focusNode) {
	              root = void 0;
	              JSCompiler_temp = firstChild;
	              anchorOffset = focusNode.memoizedProps;
	              focusNode = focusNode.memoizedState;
	              selection = JSCompiler_temp.stateNode;
	              try {
	                var resolvedPrevProps = resolveClassComponentProps(
	                  JSCompiler_temp.type,
	                  anchorOffset,
	                  JSCompiler_temp.elementType === JSCompiler_temp.type
	                );
	                root = selection.getSnapshotBeforeUpdate(
	                  resolvedPrevProps,
	                  focusNode
	                );
	                selection.__reactInternalSnapshotBeforeUpdate = root;
	              } catch (error) {
	                captureCommitPhaseError(
	                  JSCompiler_temp,
	                  JSCompiler_temp.return,
	                  error
	                );
	              }
	            }
	            break;
	          case 3:
	            if (0 !== (root & 1024))
	              if (
	                ((root = firstChild.stateNode.containerInfo),
	                (JSCompiler_temp = root.nodeType),
	                9 === JSCompiler_temp)
	              )
	                clearContainerSparingly(root);
	              else if (1 === JSCompiler_temp)
	                switch (root.nodeName) {
	                  case "HEAD":
	                  case "HTML":
	                  case "BODY":
	                    clearContainerSparingly(root);
	                    break;
	                  default:
	                    root.textContent = "";
	                }
	            break;
	          case 5:
	          case 26:
	          case 27:
	          case 6:
	          case 4:
	          case 17:
	            break;
	          default:
	            if (0 !== (root & 1024)) throw Error(formatProdErrorMessage(163));
	        }
	        root = firstChild.sibling;
	        if (null !== root) {
	          root.return = firstChild.return;
	          nextEffect = root;
	          break;
	        }
	        nextEffect = firstChild.return;
	      }
	}
	function commitLayoutEffectOnFiber(finishedRoot, current, finishedWork) {
	  var flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitHookEffectListMount(5, finishedWork);
	      break;
	    case 1:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      if (flags & 4)
	        if (((finishedRoot = finishedWork.stateNode), null === current))
	          try {
	            finishedRoot.componentDidMount();
	          } catch (error) {
	            captureCommitPhaseError(finishedWork, finishedWork.return, error);
	          }
	        else {
	          var prevProps = resolveClassComponentProps(
	            finishedWork.type,
	            current.memoizedProps
	          );
	          current = current.memoizedState;
	          try {
	            finishedRoot.componentDidUpdate(
	              prevProps,
	              current,
	              finishedRoot.__reactInternalSnapshotBeforeUpdate
	            );
	          } catch (error$142) {
	            captureCommitPhaseError(
	              finishedWork,
	              finishedWork.return,
	              error$142
	            );
	          }
	        }
	      flags & 64 && commitClassCallbacks(finishedWork);
	      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
	      break;
	    case 3:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      if (
	        flags & 64 &&
	        ((finishedRoot = finishedWork.updateQueue), null !== finishedRoot)
	      ) {
	        current = null;
	        if (null !== finishedWork.child)
	          switch (finishedWork.child.tag) {
	            case 27:
	            case 5:
	              current = finishedWork.child.stateNode;
	              break;
	            case 1:
	              current = finishedWork.child.stateNode;
	          }
	        try {
	          commitCallbacks(finishedRoot, current);
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      break;
	    case 27:
	      null === current &&
	        flags & 4 &&
	        commitHostSingletonAcquisition(finishedWork);
	    case 26:
	    case 5:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      null === current && flags & 4 && commitHostMount(finishedWork);
	      flags & 512 && safelyAttachRef(finishedWork, finishedWork.return);
	      break;
	    case 12:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      break;
	    case 13:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	      flags & 4 && commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
	      flags & 64 &&
	        ((finishedRoot = finishedWork.memoizedState),
	        null !== finishedRoot &&
	          ((finishedRoot = finishedRoot.dehydrated),
	          null !== finishedRoot &&
	            ((finishedWork = retryDehydratedSuspenseBoundary.bind(
	              null,
	              finishedWork
	            )),
	            registerSuspenseInstanceRetry(finishedRoot, finishedWork))));
	      break;
	    case 22:
	      flags = null !== finishedWork.memoizedState || offscreenSubtreeIsHidden;
	      if (!flags) {
	        current =
	          (null !== current && null !== current.memoizedState) ||
	          offscreenSubtreeWasHidden;
	        prevProps = offscreenSubtreeIsHidden;
	        var prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
	        offscreenSubtreeIsHidden = flags;
	        (offscreenSubtreeWasHidden = current) && !prevOffscreenSubtreeWasHidden
	          ? recursivelyTraverseReappearLayoutEffects(
	              finishedRoot,
	              finishedWork,
	              0 !== (finishedWork.subtreeFlags & 8772)
	            )
	          : recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	        offscreenSubtreeIsHidden = prevProps;
	        offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
	      }
	      break;
	    case 30:
	      break;
	    default:
	      recursivelyTraverseLayoutEffects(finishedRoot, finishedWork);
	  }
	}
	function detachFiberAfterEffects(fiber) {
	  var alternate = fiber.alternate;
	  null !== alternate &&
	    ((fiber.alternate = null), detachFiberAfterEffects(alternate));
	  fiber.child = null;
	  fiber.deletions = null;
	  fiber.sibling = null;
	  5 === fiber.tag &&
	    ((alternate = fiber.stateNode),
	    null !== alternate && detachDeletedInstance(alternate));
	  fiber.stateNode = null;
	  fiber.return = null;
	  fiber.dependencies = null;
	  fiber.memoizedProps = null;
	  fiber.memoizedState = null;
	  fiber.pendingProps = null;
	  fiber.stateNode = null;
	  fiber.updateQueue = null;
	}
	var hostParent = null,
	  hostParentIsContainer = false;
	function recursivelyTraverseDeletionEffects(
	  finishedRoot,
	  nearestMountedAncestor,
	  parent
	) {
	  for (parent = parent.child; null !== parent; )
	    commitDeletionEffectsOnFiber(finishedRoot, nearestMountedAncestor, parent),
	      (parent = parent.sibling);
	}
	function commitDeletionEffectsOnFiber(
	  finishedRoot,
	  nearestMountedAncestor,
	  deletedFiber
	) {
	  if (injectedHook && "function" === typeof injectedHook.onCommitFiberUnmount)
	    try {
	      injectedHook.onCommitFiberUnmount(rendererID, deletedFiber);
	    } catch (err) {}
	  switch (deletedFiber.tag) {
	    case 26:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      deletedFiber.memoizedState
	        ? deletedFiber.memoizedState.count--
	        : deletedFiber.stateNode &&
	          ((deletedFiber = deletedFiber.stateNode),
	          deletedFiber.parentNode.removeChild(deletedFiber));
	      break;
	    case 27:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	      var prevHostParent = hostParent,
	        prevHostParentIsContainer = hostParentIsContainer;
	      isSingletonScope(deletedFiber.type) &&
	        ((hostParent = deletedFiber.stateNode), (hostParentIsContainer = false));
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      releaseSingletonInstance(deletedFiber.stateNode);
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      break;
	    case 5:
	      offscreenSubtreeWasHidden ||
	        safelyDetachRef(deletedFiber, nearestMountedAncestor);
	    case 6:
	      prevHostParent = hostParent;
	      prevHostParentIsContainer = hostParentIsContainer;
	      hostParent = null;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      if (null !== hostParent)
	        if (hostParentIsContainer)
	          try {
	            (9 === hostParent.nodeType
	              ? hostParent.body
	              : "HTML" === hostParent.nodeName
	                ? hostParent.ownerDocument.body
	                : hostParent
	            ).removeChild(deletedFiber.stateNode);
	          } catch (error) {
	            captureCommitPhaseError(
	              deletedFiber,
	              nearestMountedAncestor,
	              error
	            );
	          }
	        else
	          try {
	            hostParent.removeChild(deletedFiber.stateNode);
	          } catch (error) {
	            captureCommitPhaseError(
	              deletedFiber,
	              nearestMountedAncestor,
	              error
	            );
	          }
	      break;
	    case 18:
	      null !== hostParent &&
	        (hostParentIsContainer
	          ? ((finishedRoot = hostParent),
	            clearSuspenseBoundary(
	              9 === finishedRoot.nodeType
	                ? finishedRoot.body
	                : "HTML" === finishedRoot.nodeName
	                  ? finishedRoot.ownerDocument.body
	                  : finishedRoot,
	              deletedFiber.stateNode
	            ),
	            retryIfBlockedOn(finishedRoot))
	          : clearSuspenseBoundary(hostParent, deletedFiber.stateNode));
	      break;
	    case 4:
	      prevHostParent = hostParent;
	      prevHostParentIsContainer = hostParentIsContainer;
	      hostParent = deletedFiber.stateNode.containerInfo;
	      hostParentIsContainer = true;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      hostParent = prevHostParent;
	      hostParentIsContainer = prevHostParentIsContainer;
	      break;
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      offscreenSubtreeWasHidden ||
	        commitHookEffectListUnmount(2, deletedFiber, nearestMountedAncestor);
	      offscreenSubtreeWasHidden ||
	        commitHookEffectListUnmount(4, deletedFiber, nearestMountedAncestor);
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 1:
	      offscreenSubtreeWasHidden ||
	        (safelyDetachRef(deletedFiber, nearestMountedAncestor),
	        (prevHostParent = deletedFiber.stateNode),
	        "function" === typeof prevHostParent.componentWillUnmount &&
	          safelyCallComponentWillUnmount(
	            deletedFiber,
	            nearestMountedAncestor,
	            prevHostParent
	          ));
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 21:
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      break;
	    case 22:
	      offscreenSubtreeWasHidden =
	        (prevHostParent = offscreenSubtreeWasHidden) ||
	        null !== deletedFiber.memoizedState;
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	      offscreenSubtreeWasHidden = prevHostParent;
	      break;
	    default:
	      recursivelyTraverseDeletionEffects(
	        finishedRoot,
	        nearestMountedAncestor,
	        deletedFiber
	      );
	  }
	}
	function commitSuspenseHydrationCallbacks(finishedRoot, finishedWork) {
	  if (
	    null === finishedWork.memoizedState &&
	    ((finishedRoot = finishedWork.alternate),
	    null !== finishedRoot &&
	      ((finishedRoot = finishedRoot.memoizedState),
	      null !== finishedRoot &&
	        ((finishedRoot = finishedRoot.dehydrated), null !== finishedRoot)))
	  )
	    try {
	      retryIfBlockedOn(finishedRoot);
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	}
	function getRetryCache(finishedWork) {
	  switch (finishedWork.tag) {
	    case 13:
	    case 19:
	      var retryCache = finishedWork.stateNode;
	      null === retryCache &&
	        (retryCache = finishedWork.stateNode = new PossiblyWeakSet());
	      return retryCache;
	    case 22:
	      return (
	        (finishedWork = finishedWork.stateNode),
	        (retryCache = finishedWork._retryCache),
	        null === retryCache &&
	          (retryCache = finishedWork._retryCache = new PossiblyWeakSet()),
	        retryCache
	      );
	    default:
	      throw Error(formatProdErrorMessage(435, finishedWork.tag));
	  }
	}
	function attachSuspenseRetryListeners(finishedWork, wakeables) {
	  var retryCache = getRetryCache(finishedWork);
	  wakeables.forEach(function (wakeable) {
	    var retry = resolveRetryWakeable.bind(null, finishedWork, wakeable);
	    retryCache.has(wakeable) ||
	      (retryCache.add(wakeable), wakeable.then(retry, retry));
	  });
	}
	function recursivelyTraverseMutationEffects(root$jscomp$0, parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (null !== deletions)
	    for (var i = 0; i < deletions.length; i++) {
	      var childToDelete = deletions[i],
	        root = root$jscomp$0,
	        returnFiber = parentFiber,
	        parent = returnFiber;
	      a: for (; null !== parent; ) {
	        switch (parent.tag) {
	          case 27:
	            if (isSingletonScope(parent.type)) {
	              hostParent = parent.stateNode;
	              hostParentIsContainer = false;
	              break a;
	            }
	            break;
	          case 5:
	            hostParent = parent.stateNode;
	            hostParentIsContainer = false;
	            break a;
	          case 3:
	          case 4:
	            hostParent = parent.stateNode.containerInfo;
	            hostParentIsContainer = true;
	            break a;
	        }
	        parent = parent.return;
	      }
	      if (null === hostParent) throw Error(formatProdErrorMessage(160));
	      commitDeletionEffectsOnFiber(root, returnFiber, childToDelete);
	      hostParent = null;
	      hostParentIsContainer = false;
	      root = childToDelete.alternate;
	      null !== root && (root.return = null);
	      childToDelete.return = null;
	    }
	  if (parentFiber.subtreeFlags & 13878)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitMutationEffectsOnFiber(parentFiber, root$jscomp$0),
	        (parentFiber = parentFiber.sibling);
	}
	var currentHoistableRoot = null;
	function commitMutationEffectsOnFiber(finishedWork, root) {
	  var current = finishedWork.alternate,
	    flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 14:
	    case 15:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 &&
	        (commitHookEffectListUnmount(3, finishedWork, finishedWork.return),
	        commitHookEffectListMount(3, finishedWork),
	        commitHookEffectListUnmount(5, finishedWork, finishedWork.return));
	      break;
	    case 1:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      flags & 64 &&
	        offscreenSubtreeIsHidden &&
	        ((finishedWork = finishedWork.updateQueue),
	        null !== finishedWork &&
	          ((flags = finishedWork.callbacks),
	          null !== flags &&
	            ((current = finishedWork.shared.hiddenCallbacks),
	            (finishedWork.shared.hiddenCallbacks =
	              null === current ? flags : current.concat(flags)))));
	      break;
	    case 26:
	      var hoistableRoot = currentHoistableRoot;
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      if (flags & 4) {
	        var currentResource = null !== current ? current.memoizedState : null;
	        flags = finishedWork.memoizedState;
	        if (null === current)
	          if (null === flags)
	            if (null === finishedWork.stateNode) {
	              a: {
	                flags = finishedWork.type;
	                current = finishedWork.memoizedProps;
	                hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	                b: switch (flags) {
	                  case "title":
	                    currentResource =
	                      hoistableRoot.getElementsByTagName("title")[0];
	                    if (
	                      !currentResource ||
	                      currentResource[internalHoistableMarker] ||
	                      currentResource[internalInstanceKey] ||
	                      "http://www.w3.org/2000/svg" ===
	                        currentResource.namespaceURI ||
	                      currentResource.hasAttribute("itemprop")
	                    )
	                      (currentResource = hoistableRoot.createElement(flags)),
	                        hoistableRoot.head.insertBefore(
	                          currentResource,
	                          hoistableRoot.querySelector("head > title")
	                        );
	                    setInitialProperties(currentResource, flags, current);
	                    currentResource[internalInstanceKey] = finishedWork;
	                    markNodeAsHoistable(currentResource);
	                    flags = currentResource;
	                    break a;
	                  case "link":
	                    var maybeNodes = getHydratableHoistableCache(
	                      "link",
	                      "href",
	                      hoistableRoot
	                    ).get(flags + (current.href || ""));
	                    if (maybeNodes)
	                      for (var i = 0; i < maybeNodes.length; i++)
	                        if (
	                          ((currentResource = maybeNodes[i]),
	                          currentResource.getAttribute("href") ===
	                            (null == current.href || "" === current.href
	                              ? null
	                              : current.href) &&
	                            currentResource.getAttribute("rel") ===
	                              (null == current.rel ? null : current.rel) &&
	                            currentResource.getAttribute("title") ===
	                              (null == current.title ? null : current.title) &&
	                            currentResource.getAttribute("crossorigin") ===
	                              (null == current.crossOrigin
	                                ? null
	                                : current.crossOrigin))
	                        ) {
	                          maybeNodes.splice(i, 1);
	                          break b;
	                        }
	                    currentResource = hoistableRoot.createElement(flags);
	                    setInitialProperties(currentResource, flags, current);
	                    hoistableRoot.head.appendChild(currentResource);
	                    break;
	                  case "meta":
	                    if (
	                      (maybeNodes = getHydratableHoistableCache(
	                        "meta",
	                        "content",
	                        hoistableRoot
	                      ).get(flags + (current.content || "")))
	                    )
	                      for (i = 0; i < maybeNodes.length; i++)
	                        if (
	                          ((currentResource = maybeNodes[i]),
	                          currentResource.getAttribute("content") ===
	                            (null == current.content
	                              ? null
	                              : "" + current.content) &&
	                            currentResource.getAttribute("name") ===
	                              (null == current.name ? null : current.name) &&
	                            currentResource.getAttribute("property") ===
	                              (null == current.property
	                                ? null
	                                : current.property) &&
	                            currentResource.getAttribute("http-equiv") ===
	                              (null == current.httpEquiv
	                                ? null
	                                : current.httpEquiv) &&
	                            currentResource.getAttribute("charset") ===
	                              (null == current.charSet
	                                ? null
	                                : current.charSet))
	                        ) {
	                          maybeNodes.splice(i, 1);
	                          break b;
	                        }
	                    currentResource = hoistableRoot.createElement(flags);
	                    setInitialProperties(currentResource, flags, current);
	                    hoistableRoot.head.appendChild(currentResource);
	                    break;
	                  default:
	                    throw Error(formatProdErrorMessage(468, flags));
	                }
	                currentResource[internalInstanceKey] = finishedWork;
	                markNodeAsHoistable(currentResource);
	                flags = currentResource;
	              }
	              finishedWork.stateNode = flags;
	            } else
	              mountHoistable(
	                hoistableRoot,
	                finishedWork.type,
	                finishedWork.stateNode
	              );
	          else
	            finishedWork.stateNode = acquireResource(
	              hoistableRoot,
	              flags,
	              finishedWork.memoizedProps
	            );
	        else
	          currentResource !== flags
	            ? (null === currentResource
	                ? null !== current.stateNode &&
	                  ((current = current.stateNode),
	                  current.parentNode.removeChild(current))
	                : currentResource.count--,
	              null === flags
	                ? mountHoistable(
	                    hoistableRoot,
	                    finishedWork.type,
	                    finishedWork.stateNode
	                  )
	                : acquireResource(
	                    hoistableRoot,
	                    flags,
	                    finishedWork.memoizedProps
	                  ))
	            : null === flags &&
	              null !== finishedWork.stateNode &&
	              commitHostUpdate(
	                finishedWork,
	                finishedWork.memoizedProps,
	                current.memoizedProps
	              );
	      }
	      break;
	    case 27:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      null !== current &&
	        flags & 4 &&
	        commitHostUpdate(
	          finishedWork,
	          finishedWork.memoizedProps,
	          current.memoizedProps
	        );
	      break;
	    case 5:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 512 &&
	        (offscreenSubtreeWasHidden ||
	          null === current ||
	          safelyDetachRef(current, current.return));
	      if (finishedWork.flags & 32) {
	        hoistableRoot = finishedWork.stateNode;
	        try {
	          setTextContent(hoistableRoot, "");
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      flags & 4 &&
	        null != finishedWork.stateNode &&
	        ((hoistableRoot = finishedWork.memoizedProps),
	        commitHostUpdate(
	          finishedWork,
	          hoistableRoot,
	          null !== current ? current.memoizedProps : hoistableRoot
	        ));
	      flags & 1024 && (needsFormReset = true);
	      break;
	    case 6:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      if (flags & 4) {
	        if (null === finishedWork.stateNode)
	          throw Error(formatProdErrorMessage(162));
	        flags = finishedWork.memoizedProps;
	        current = finishedWork.stateNode;
	        try {
	          current.nodeValue = flags;
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      }
	      break;
	    case 3:
	      tagCaches = null;
	      hoistableRoot = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(root.containerInfo);
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      currentHoistableRoot = hoistableRoot;
	      commitReconciliationEffects(finishedWork);
	      if (flags & 4 && null !== current && current.memoizedState.isDehydrated)
	        try {
	          retryIfBlockedOn(root.containerInfo);
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      needsFormReset &&
	        ((needsFormReset = false), recursivelyResetForms(finishedWork));
	      break;
	    case 4:
	      flags = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(
	        finishedWork.stateNode.containerInfo
	      );
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      currentHoistableRoot = flags;
	      break;
	    case 12:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      break;
	    case 13:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      finishedWork.child.flags & 8192 &&
	        (null !== finishedWork.memoizedState) !==
	          (null !== current && null !== current.memoizedState) &&
	        (globalMostRecentFallbackTime = now());
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((finishedWork.updateQueue = null),
	          attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 22:
	      hoistableRoot = null !== finishedWork.memoizedState;
	      var wasHidden = null !== current && null !== current.memoizedState,
	        prevOffscreenSubtreeIsHidden = offscreenSubtreeIsHidden,
	        prevOffscreenSubtreeWasHidden = offscreenSubtreeWasHidden;
	      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden || hoistableRoot;
	      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden || wasHidden;
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      offscreenSubtreeWasHidden = prevOffscreenSubtreeWasHidden;
	      offscreenSubtreeIsHidden = prevOffscreenSubtreeIsHidden;
	      commitReconciliationEffects(finishedWork);
	      if (flags & 8192)
	        a: for (
	          root = finishedWork.stateNode,
	            root._visibility = hoistableRoot
	              ? root._visibility & -2
	              : root._visibility | 1,
	            hoistableRoot &&
	              (null === current ||
	                wasHidden ||
	                offscreenSubtreeIsHidden ||
	                offscreenSubtreeWasHidden ||
	                recursivelyTraverseDisappearLayoutEffects(finishedWork)),
	            current = null,
	            root = finishedWork;
	          ;

	        ) {
	          if (5 === root.tag || 26 === root.tag) {
	            if (null === current) {
	              wasHidden = current = root;
	              try {
	                if (((currentResource = wasHidden.stateNode), hoistableRoot))
	                  (maybeNodes = currentResource.style),
	                    "function" === typeof maybeNodes.setProperty
	                      ? maybeNodes.setProperty("display", "none", "important")
	                      : (maybeNodes.display = "none");
	                else {
	                  i = wasHidden.stateNode;
	                  var styleProp = wasHidden.memoizedProps.style,
	                    display =
	                      void 0 !== styleProp &&
	                      null !== styleProp &&
	                      styleProp.hasOwnProperty("display")
	                        ? styleProp.display
	                        : null;
	                  i.style.display =
	                    null == display || "boolean" === typeof display
	                      ? ""
	                      : ("" + display).trim();
	                }
	              } catch (error) {
	                captureCommitPhaseError(wasHidden, wasHidden.return, error);
	              }
	            }
	          } else if (6 === root.tag) {
	            if (null === current) {
	              wasHidden = root;
	              try {
	                wasHidden.stateNode.nodeValue = hoistableRoot
	                  ? ""
	                  : wasHidden.memoizedProps;
	              } catch (error) {
	                captureCommitPhaseError(wasHidden, wasHidden.return, error);
	              }
	            }
	          } else if (
	            ((22 !== root.tag && 23 !== root.tag) ||
	              null === root.memoizedState ||
	              root === finishedWork) &&
	            null !== root.child
	          ) {
	            root.child.return = root;
	            root = root.child;
	            continue;
	          }
	          if (root === finishedWork) break a;
	          for (; null === root.sibling; ) {
	            if (null === root.return || root.return === finishedWork) break a;
	            current === root && (current = null);
	            root = root.return;
	          }
	          current === root && (current = null);
	          root.sibling.return = root.return;
	          root = root.sibling;
	        }
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((current = flags.retryQueue),
	          null !== current &&
	            ((flags.retryQueue = null),
	            attachSuspenseRetryListeners(finishedWork, current))));
	      break;
	    case 19:
	      recursivelyTraverseMutationEffects(root, finishedWork);
	      commitReconciliationEffects(finishedWork);
	      flags & 4 &&
	        ((flags = finishedWork.updateQueue),
	        null !== flags &&
	          ((finishedWork.updateQueue = null),
	          attachSuspenseRetryListeners(finishedWork, flags)));
	      break;
	    case 30:
	      break;
	    case 21:
	      break;
	    default:
	      recursivelyTraverseMutationEffects(root, finishedWork),
	        commitReconciliationEffects(finishedWork);
	  }
	}
	function commitReconciliationEffects(finishedWork) {
	  var flags = finishedWork.flags;
	  if (flags & 2) {
	    try {
	      for (
	        var hostParentFiber, parentFiber = finishedWork.return;
	        null !== parentFiber;

	      ) {
	        if (isHostParent(parentFiber)) {
	          hostParentFiber = parentFiber;
	          break;
	        }
	        parentFiber = parentFiber.return;
	      }
	      if (null == hostParentFiber) throw Error(formatProdErrorMessage(160));
	      switch (hostParentFiber.tag) {
	        case 27:
	          var parent = hostParentFiber.stateNode,
	            before = getHostSibling(finishedWork);
	          insertOrAppendPlacementNode(finishedWork, before, parent);
	          break;
	        case 5:
	          var parent$144 = hostParentFiber.stateNode;
	          hostParentFiber.flags & 32 &&
	            (setTextContent(parent$144, ""), (hostParentFiber.flags &= -33));
	          var before$145 = getHostSibling(finishedWork);
	          insertOrAppendPlacementNode(finishedWork, before$145, parent$144);
	          break;
	        case 3:
	        case 4:
	          var parent$146 = hostParentFiber.stateNode.containerInfo,
	            before$147 = getHostSibling(finishedWork);
	          insertOrAppendPlacementNodeIntoContainer(
	            finishedWork,
	            before$147,
	            parent$146
	          );
	          break;
	        default:
	          throw Error(formatProdErrorMessage(161));
	      }
	    } catch (error) {
	      captureCommitPhaseError(finishedWork, finishedWork.return, error);
	    }
	    finishedWork.flags &= -3;
	  }
	  flags & 4096 && (finishedWork.flags &= -4097);
	}
	function recursivelyResetForms(parentFiber) {
	  if (parentFiber.subtreeFlags & 1024)
	    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	      var fiber = parentFiber;
	      recursivelyResetForms(fiber);
	      5 === fiber.tag && fiber.flags & 1024 && fiber.stateNode.reset();
	      parentFiber = parentFiber.sibling;
	    }
	}
	function recursivelyTraverseLayoutEffects(root, parentFiber) {
	  if (parentFiber.subtreeFlags & 8772)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitLayoutEffectOnFiber(root, parentFiber.alternate, parentFiber),
	        (parentFiber = parentFiber.sibling);
	}
	function recursivelyTraverseDisappearLayoutEffects(parentFiber) {
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var finishedWork = parentFiber;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 14:
	      case 15:
	        commitHookEffectListUnmount(4, finishedWork, finishedWork.return);
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 1:
	        safelyDetachRef(finishedWork, finishedWork.return);
	        var instance = finishedWork.stateNode;
	        "function" === typeof instance.componentWillUnmount &&
	          safelyCallComponentWillUnmount(
	            finishedWork,
	            finishedWork.return,
	            instance
	          );
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 27:
	        releaseSingletonInstance(finishedWork.stateNode);
	      case 26:
	      case 5:
	        safelyDetachRef(finishedWork, finishedWork.return);
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 22:
	        null === finishedWork.memoizedState &&
	          recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      case 30:
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	        break;
	      default:
	        recursivelyTraverseDisappearLayoutEffects(finishedWork);
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function recursivelyTraverseReappearLayoutEffects(
	  finishedRoot$jscomp$0,
	  parentFiber,
	  includeWorkInProgressEffects
	) {
	  includeWorkInProgressEffects =
	    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 8772);
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var current = parentFiber.alternate,
	      finishedRoot = finishedRoot$jscomp$0,
	      finishedWork = parentFiber,
	      flags = finishedWork.flags;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 15:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        commitHookEffectListMount(4, finishedWork);
	        break;
	      case 1:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        current = finishedWork;
	        finishedRoot = current.stateNode;
	        if ("function" === typeof finishedRoot.componentDidMount)
	          try {
	            finishedRoot.componentDidMount();
	          } catch (error) {
	            captureCommitPhaseError(current, current.return, error);
	          }
	        current = finishedWork;
	        finishedRoot = current.updateQueue;
	        if (null !== finishedRoot) {
	          var instance = current.stateNode;
	          try {
	            var hiddenCallbacks = finishedRoot.shared.hiddenCallbacks;
	            if (null !== hiddenCallbacks)
	              for (
	                finishedRoot.shared.hiddenCallbacks = null, finishedRoot = 0;
	                finishedRoot < hiddenCallbacks.length;
	                finishedRoot++
	              )
	                callCallback(hiddenCallbacks[finishedRoot], instance);
	          } catch (error) {
	            captureCommitPhaseError(current, current.return, error);
	          }
	        }
	        includeWorkInProgressEffects &&
	          flags & 64 &&
	          commitClassCallbacks(finishedWork);
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 27:
	        commitHostSingletonAcquisition(finishedWork);
	      case 26:
	      case 5:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          null === current &&
	          flags & 4 &&
	          commitHostMount(finishedWork);
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 12:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        break;
	      case 13:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          flags & 4 &&
	          commitSuspenseHydrationCallbacks(finishedRoot, finishedWork);
	        break;
	      case 22:
	        null === finishedWork.memoizedState &&
	          recursivelyTraverseReappearLayoutEffects(
	            finishedRoot,
	            finishedWork,
	            includeWorkInProgressEffects
	          );
	        safelyAttachRef(finishedWork, finishedWork.return);
	        break;
	      case 30:
	        break;
	      default:
	        recursivelyTraverseReappearLayoutEffects(
	          finishedRoot,
	          finishedWork,
	          includeWorkInProgressEffects
	        );
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function commitOffscreenPassiveMountEffects(current, finishedWork) {
	  var previousCache = null;
	  null !== current &&
	    null !== current.memoizedState &&
	    null !== current.memoizedState.cachePool &&
	    (previousCache = current.memoizedState.cachePool.pool);
	  current = null;
	  null !== finishedWork.memoizedState &&
	    null !== finishedWork.memoizedState.cachePool &&
	    (current = finishedWork.memoizedState.cachePool.pool);
	  current !== previousCache &&
	    (null != current && current.refCount++,
	    null != previousCache && releaseCache(previousCache));
	}
	function commitCachePassiveMountEffect(current, finishedWork) {
	  current = null;
	  null !== finishedWork.alternate &&
	    (current = finishedWork.alternate.memoizedState.cache);
	  finishedWork = finishedWork.memoizedState.cache;
	  finishedWork !== current &&
	    (finishedWork.refCount++, null != current && releaseCache(current));
	}
	function recursivelyTraversePassiveMountEffects(
	  root,
	  parentFiber,
	  committedLanes,
	  committedTransitions
	) {
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitPassiveMountOnFiber(
	        root,
	        parentFiber,
	        committedLanes,
	        committedTransitions
	      ),
	        (parentFiber = parentFiber.sibling);
	}
	function commitPassiveMountOnFiber(
	  finishedRoot,
	  finishedWork,
	  committedLanes,
	  committedTransitions
	) {
	  var flags = finishedWork.flags;
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 && commitHookEffectListMount(9, finishedWork);
	      break;
	    case 1:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      break;
	    case 3:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 &&
	        ((finishedRoot = null),
	        null !== finishedWork.alternate &&
	          (finishedRoot = finishedWork.alternate.memoizedState.cache),
	        (finishedWork = finishedWork.memoizedState.cache),
	        finishedWork !== finishedRoot &&
	          (finishedWork.refCount++,
	          null != finishedRoot && releaseCache(finishedRoot)));
	      break;
	    case 12:
	      if (flags & 2048) {
	        recursivelyTraversePassiveMountEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions
	        );
	        finishedRoot = finishedWork.stateNode;
	        try {
	          var _finishedWork$memoize2 = finishedWork.memoizedProps,
	            id = _finishedWork$memoize2.id,
	            onPostCommit = _finishedWork$memoize2.onPostCommit;
	          "function" === typeof onPostCommit &&
	            onPostCommit(
	              id,
	              null === finishedWork.alternate ? "mount" : "update",
	              finishedRoot.passiveEffectDuration,
	              -0
	            );
	        } catch (error) {
	          captureCommitPhaseError(finishedWork, finishedWork.return, error);
	        }
	      } else
	        recursivelyTraversePassiveMountEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions
	        );
	      break;
	    case 13:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      break;
	    case 23:
	      break;
	    case 22:
	      _finishedWork$memoize2 = finishedWork.stateNode;
	      id = finishedWork.alternate;
	      null !== finishedWork.memoizedState
	        ? _finishedWork$memoize2._visibility & 2
	          ? recursivelyTraversePassiveMountEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions
	            )
	          : recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork)
	        : _finishedWork$memoize2._visibility & 2
	          ? recursivelyTraversePassiveMountEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions
	            )
	          : ((_finishedWork$memoize2._visibility |= 2),
	            recursivelyTraverseReconnectPassiveEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions,
	              0 !== (finishedWork.subtreeFlags & 10256)
	            ));
	      flags & 2048 && commitOffscreenPassiveMountEffects(id, finishedWork);
	      break;
	    case 24:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	      flags & 2048 &&
	        commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	      break;
	    default:
	      recursivelyTraversePassiveMountEffects(
	        finishedRoot,
	        finishedWork,
	        committedLanes,
	        committedTransitions
	      );
	  }
	}
	function recursivelyTraverseReconnectPassiveEffects(
	  finishedRoot$jscomp$0,
	  parentFiber,
	  committedLanes$jscomp$0,
	  committedTransitions$jscomp$0,
	  includeWorkInProgressEffects
	) {
	  includeWorkInProgressEffects =
	    includeWorkInProgressEffects && 0 !== (parentFiber.subtreeFlags & 10256);
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    var finishedRoot = finishedRoot$jscomp$0,
	      finishedWork = parentFiber,
	      committedLanes = committedLanes$jscomp$0,
	      committedTransitions = committedTransitions$jscomp$0,
	      flags = finishedWork.flags;
	    switch (finishedWork.tag) {
	      case 0:
	      case 11:
	      case 15:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	        commitHookEffectListMount(8, finishedWork);
	        break;
	      case 23:
	        break;
	      case 22:
	        var instance = finishedWork.stateNode;
	        null !== finishedWork.memoizedState
	          ? instance._visibility & 2
	            ? recursivelyTraverseReconnectPassiveEffects(
	                finishedRoot,
	                finishedWork,
	                committedLanes,
	                committedTransitions,
	                includeWorkInProgressEffects
	              )
	            : recursivelyTraverseAtomicPassiveEffects(
	                finishedRoot,
	                finishedWork
	              )
	          : ((instance._visibility |= 2),
	            recursivelyTraverseReconnectPassiveEffects(
	              finishedRoot,
	              finishedWork,
	              committedLanes,
	              committedTransitions,
	              includeWorkInProgressEffects
	            ));
	        includeWorkInProgressEffects &&
	          flags & 2048 &&
	          commitOffscreenPassiveMountEffects(
	            finishedWork.alternate,
	            finishedWork
	          );
	        break;
	      case 24:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	        includeWorkInProgressEffects &&
	          flags & 2048 &&
	          commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	        break;
	      default:
	        recursivelyTraverseReconnectPassiveEffects(
	          finishedRoot,
	          finishedWork,
	          committedLanes,
	          committedTransitions,
	          includeWorkInProgressEffects
	        );
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function recursivelyTraverseAtomicPassiveEffects(
	  finishedRoot$jscomp$0,
	  parentFiber
	) {
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	      var finishedRoot = finishedRoot$jscomp$0,
	        finishedWork = parentFiber,
	        flags = finishedWork.flags;
	      switch (finishedWork.tag) {
	        case 22:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	          flags & 2048 &&
	            commitOffscreenPassiveMountEffects(
	              finishedWork.alternate,
	              finishedWork
	            );
	          break;
	        case 24:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	          flags & 2048 &&
	            commitCachePassiveMountEffect(finishedWork.alternate, finishedWork);
	          break;
	        default:
	          recursivelyTraverseAtomicPassiveEffects(finishedRoot, finishedWork);
	      }
	      parentFiber = parentFiber.sibling;
	    }
	}
	var suspenseyCommitFlag = 8192;
	function recursivelyAccumulateSuspenseyCommit(parentFiber) {
	  if (parentFiber.subtreeFlags & suspenseyCommitFlag)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      accumulateSuspenseyCommitOnFiber(parentFiber),
	        (parentFiber = parentFiber.sibling);
	}
	function accumulateSuspenseyCommitOnFiber(fiber) {
	  switch (fiber.tag) {
	    case 26:
	      recursivelyAccumulateSuspenseyCommit(fiber);
	      fiber.flags & suspenseyCommitFlag &&
	        null !== fiber.memoizedState &&
	        suspendResource(
	          currentHoistableRoot,
	          fiber.memoizedState,
	          fiber.memoizedProps
	        );
	      break;
	    case 5:
	      recursivelyAccumulateSuspenseyCommit(fiber);
	      break;
	    case 3:
	    case 4:
	      var previousHoistableRoot = currentHoistableRoot;
	      currentHoistableRoot = getHoistableRoot(fiber.stateNode.containerInfo);
	      recursivelyAccumulateSuspenseyCommit(fiber);
	      currentHoistableRoot = previousHoistableRoot;
	      break;
	    case 22:
	      null === fiber.memoizedState &&
	        ((previousHoistableRoot = fiber.alternate),
	        null !== previousHoistableRoot &&
	        null !== previousHoistableRoot.memoizedState
	          ? ((previousHoistableRoot = suspenseyCommitFlag),
	            (suspenseyCommitFlag = 16777216),
	            recursivelyAccumulateSuspenseyCommit(fiber),
	            (suspenseyCommitFlag = previousHoistableRoot))
	          : recursivelyAccumulateSuspenseyCommit(fiber));
	      break;
	    default:
	      recursivelyAccumulateSuspenseyCommit(fiber);
	  }
	}
	function detachAlternateSiblings(parentFiber) {
	  var previousFiber = parentFiber.alternate;
	  if (
	    null !== previousFiber &&
	    ((parentFiber = previousFiber.child), null !== parentFiber)
	  ) {
	    previousFiber.child = null;
	    do
	      (previousFiber = parentFiber.sibling),
	        (parentFiber.sibling = null),
	        (parentFiber = previousFiber);
	    while (null !== parentFiber);
	  }
	}
	function recursivelyTraversePassiveUnmountEffects(parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (0 !== (parentFiber.flags & 16)) {
	    if (null !== deletions)
	      for (var i = 0; i < deletions.length; i++) {
	        var childToDelete = deletions[i];
	        nextEffect = childToDelete;
	        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	          childToDelete,
	          parentFiber
	        );
	      }
	    detachAlternateSiblings(parentFiber);
	  }
	  if (parentFiber.subtreeFlags & 10256)
	    for (parentFiber = parentFiber.child; null !== parentFiber; )
	      commitPassiveUnmountOnFiber(parentFiber),
	        (parentFiber = parentFiber.sibling);
	}
	function commitPassiveUnmountOnFiber(finishedWork) {
	  switch (finishedWork.tag) {
	    case 0:
	    case 11:
	    case 15:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      finishedWork.flags & 2048 &&
	        commitHookEffectListUnmount(9, finishedWork, finishedWork.return);
	      break;
	    case 3:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    case 12:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    case 22:
	      var instance = finishedWork.stateNode;
	      null !== finishedWork.memoizedState &&
	      instance._visibility & 2 &&
	      (null === finishedWork.return || 13 !== finishedWork.return.tag)
	        ? ((instance._visibility &= -3),
	          recursivelyTraverseDisconnectPassiveEffects(finishedWork))
	        : recursivelyTraversePassiveUnmountEffects(finishedWork);
	      break;
	    default:
	      recursivelyTraversePassiveUnmountEffects(finishedWork);
	  }
	}
	function recursivelyTraverseDisconnectPassiveEffects(parentFiber) {
	  var deletions = parentFiber.deletions;
	  if (0 !== (parentFiber.flags & 16)) {
	    if (null !== deletions)
	      for (var i = 0; i < deletions.length; i++) {
	        var childToDelete = deletions[i];
	        nextEffect = childToDelete;
	        commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	          childToDelete,
	          parentFiber
	        );
	      }
	    detachAlternateSiblings(parentFiber);
	  }
	  for (parentFiber = parentFiber.child; null !== parentFiber; ) {
	    deletions = parentFiber;
	    switch (deletions.tag) {
	      case 0:
	      case 11:
	      case 15:
	        commitHookEffectListUnmount(8, deletions, deletions.return);
	        recursivelyTraverseDisconnectPassiveEffects(deletions);
	        break;
	      case 22:
	        i = deletions.stateNode;
	        i._visibility & 2 &&
	          ((i._visibility &= -3),
	          recursivelyTraverseDisconnectPassiveEffects(deletions));
	        break;
	      default:
	        recursivelyTraverseDisconnectPassiveEffects(deletions);
	    }
	    parentFiber = parentFiber.sibling;
	  }
	}
	function commitPassiveUnmountEffectsInsideOfDeletedTree_begin(
	  deletedSubtreeRoot,
	  nearestMountedAncestor
	) {
	  for (; null !== nextEffect; ) {
	    var fiber = nextEffect;
	    switch (fiber.tag) {
	      case 0:
	      case 11:
	      case 15:
	        commitHookEffectListUnmount(8, fiber, nearestMountedAncestor);
	        break;
	      case 23:
	      case 22:
	        if (
	          null !== fiber.memoizedState &&
	          null !== fiber.memoizedState.cachePool
	        ) {
	          var cache = fiber.memoizedState.cachePool.pool;
	          null != cache && cache.refCount++;
	        }
	        break;
	      case 24:
	        releaseCache(fiber.memoizedState.cache);
	    }
	    cache = fiber.child;
	    if (null !== cache) (cache.return = fiber), (nextEffect = cache);
	    else
	      a: for (fiber = deletedSubtreeRoot; null !== nextEffect; ) {
	        cache = nextEffect;
	        var sibling = cache.sibling,
	          returnFiber = cache.return;
	        detachFiberAfterEffects(cache);
	        if (cache === fiber) {
	          nextEffect = null;
	          break a;
	        }
	        if (null !== sibling) {
	          sibling.return = returnFiber;
	          nextEffect = sibling;
	          break a;
	        }
	        nextEffect = returnFiber;
	      }
	  }
	}
	var DefaultAsyncDispatcher = {
	    getCacheForType: function (resourceType) {
	      var cache = readContext(CacheContext),
	        cacheForType = cache.data.get(resourceType);
	      void 0 === cacheForType &&
	        ((cacheForType = resourceType()),
	        cache.data.set(resourceType, cacheForType));
	      return cacheForType;
	    }
	  },
	  PossiblyWeakMap = "function" === typeof WeakMap ? WeakMap : Map,
	  executionContext = 0,
	  workInProgressRoot = null,
	  workInProgress = null,
	  workInProgressRootRenderLanes = 0,
	  workInProgressSuspendedReason = 0,
	  workInProgressThrownValue = null,
	  workInProgressRootDidSkipSuspendedSiblings = false,
	  workInProgressRootIsPrerendering = false,
	  workInProgressRootDidAttachPingListener = false,
	  entangledRenderLanes = 0,
	  workInProgressRootExitStatus = 0,
	  workInProgressRootSkippedLanes = 0,
	  workInProgressRootInterleavedUpdatedLanes = 0,
	  workInProgressRootPingedLanes = 0,
	  workInProgressDeferredLane = 0,
	  workInProgressSuspendedRetryLanes = 0,
	  workInProgressRootConcurrentErrors = null,
	  workInProgressRootRecoverableErrors = null,
	  workInProgressRootDidIncludeRecursiveRenderUpdate = false,
	  globalMostRecentFallbackTime = 0,
	  workInProgressRootRenderTargetTime = Infinity,
	  workInProgressTransitions = null,
	  legacyErrorBoundariesThatAlreadyFailed = null,
	  pendingEffectsStatus = 0,
	  pendingEffectsRoot = null,
	  pendingFinishedWork = null,
	  pendingEffectsLanes = 0,
	  pendingEffectsRemainingLanes = 0,
	  pendingPassiveTransitions = null,
	  pendingRecoverableErrors = null,
	  nestedUpdateCount = 0,
	  rootWithNestedUpdates = null;
	function requestUpdateLane() {
	  if (0 !== (executionContext & 2) && 0 !== workInProgressRootRenderLanes)
	    return workInProgressRootRenderLanes & -workInProgressRootRenderLanes;
	  if (null !== ReactSharedInternals.T) {
	    var actionScopeLane = currentEntangledLane;
	    return 0 !== actionScopeLane ? actionScopeLane : requestTransitionLane();
	  }
	  return resolveUpdatePriority();
	}
	function requestDeferredLane() {
	  0 === workInProgressDeferredLane &&
	    (workInProgressDeferredLane =
	      0 === (workInProgressRootRenderLanes & 536870912) || isHydrating
	        ? claimNextTransitionLane()
	        : 536870912);
	  var suspenseHandler = suspenseHandlerStackCursor.current;
	  null !== suspenseHandler && (suspenseHandler.flags |= 32);
	  return workInProgressDeferredLane;
	}
	function scheduleUpdateOnFiber(root, fiber, lane) {
	  if (
	    (root === workInProgressRoot &&
	      (2 === workInProgressSuspendedReason ||
	        9 === workInProgressSuspendedReason)) ||
	    null !== root.cancelPendingCommit
	  )
	    prepareFreshStack(root, 0),
	      markRootSuspended(
	        root,
	        workInProgressRootRenderLanes,
	        workInProgressDeferredLane,
	        false
	      );
	  markRootUpdated$1(root, lane);
	  if (0 === (executionContext & 2) || root !== workInProgressRoot)
	    root === workInProgressRoot &&
	      (0 === (executionContext & 2) &&
	        (workInProgressRootInterleavedUpdatedLanes |= lane),
	      4 === workInProgressRootExitStatus &&
	        markRootSuspended(
	          root,
	          workInProgressRootRenderLanes,
	          workInProgressDeferredLane,
	          false
	        )),
	      ensureRootIsScheduled(root);
	}
	function performWorkOnRoot(root$jscomp$0, lanes, forceSync) {
	  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
	  var shouldTimeSlice =
	      (!forceSync &&
	        0 === (lanes & 124) &&
	        0 === (lanes & root$jscomp$0.expiredLanes)) ||
	      checkIfRootIsPrerendering(root$jscomp$0, lanes),
	    exitStatus = shouldTimeSlice
	      ? renderRootConcurrent(root$jscomp$0, lanes)
	      : renderRootSync(root$jscomp$0, lanes, true),
	    renderWasConcurrent = shouldTimeSlice;
	  do {
	    if (0 === exitStatus) {
	      workInProgressRootIsPrerendering &&
	        !shouldTimeSlice &&
	        markRootSuspended(root$jscomp$0, lanes, 0, false);
	      break;
	    } else {
	      forceSync = root$jscomp$0.current.alternate;
	      if (
	        renderWasConcurrent &&
	        !isRenderConsistentWithExternalStores(forceSync)
	      ) {
	        exitStatus = renderRootSync(root$jscomp$0, lanes, false);
	        renderWasConcurrent = false;
	        continue;
	      }
	      if (2 === exitStatus) {
	        renderWasConcurrent = lanes;
	        if (root$jscomp$0.errorRecoveryDisabledLanes & renderWasConcurrent)
	          var JSCompiler_inline_result = 0;
	        else
	          (JSCompiler_inline_result = root$jscomp$0.pendingLanes & -536870913),
	            (JSCompiler_inline_result =
	              0 !== JSCompiler_inline_result
	                ? JSCompiler_inline_result
	                : JSCompiler_inline_result & 536870912
	                  ? 536870912
	                  : 0);
	        if (0 !== JSCompiler_inline_result) {
	          lanes = JSCompiler_inline_result;
	          a: {
	            var root = root$jscomp$0;
	            exitStatus = workInProgressRootConcurrentErrors;
	            var wasRootDehydrated = root.current.memoizedState.isDehydrated;
	            wasRootDehydrated &&
	              (prepareFreshStack(root, JSCompiler_inline_result).flags |= 256);
	            JSCompiler_inline_result = renderRootSync(
	              root,
	              JSCompiler_inline_result,
	              false
	            );
	            if (2 !== JSCompiler_inline_result) {
	              if (
	                workInProgressRootDidAttachPingListener &&
	                !wasRootDehydrated
	              ) {
	                root.errorRecoveryDisabledLanes |= renderWasConcurrent;
	                workInProgressRootInterleavedUpdatedLanes |=
	                  renderWasConcurrent;
	                exitStatus = 4;
	                break a;
	              }
	              renderWasConcurrent = workInProgressRootRecoverableErrors;
	              workInProgressRootRecoverableErrors = exitStatus;
	              null !== renderWasConcurrent &&
	                (null === workInProgressRootRecoverableErrors
	                  ? (workInProgressRootRecoverableErrors = renderWasConcurrent)
	                  : workInProgressRootRecoverableErrors.push.apply(
	                      workInProgressRootRecoverableErrors,
	                      renderWasConcurrent
	                    ));
	            }
	            exitStatus = JSCompiler_inline_result;
	          }
	          renderWasConcurrent = false;
	          if (2 !== exitStatus) continue;
	        }
	      }
	      if (1 === exitStatus) {
	        prepareFreshStack(root$jscomp$0, 0);
	        markRootSuspended(root$jscomp$0, lanes, 0, true);
	        break;
	      }
	      a: {
	        shouldTimeSlice = root$jscomp$0;
	        renderWasConcurrent = exitStatus;
	        switch (renderWasConcurrent) {
	          case 0:
	          case 1:
	            throw Error(formatProdErrorMessage(345));
	          case 4:
	            if ((lanes & 4194048) !== lanes) break;
	          case 6:
	            markRootSuspended(
	              shouldTimeSlice,
	              lanes,
	              workInProgressDeferredLane,
	              !workInProgressRootDidSkipSuspendedSiblings
	            );
	            break a;
	          case 2:
	            workInProgressRootRecoverableErrors = null;
	            break;
	          case 3:
	          case 5:
	            break;
	          default:
	            throw Error(formatProdErrorMessage(329));
	        }
	        if (
	          (lanes & 62914560) === lanes &&
	          ((exitStatus = globalMostRecentFallbackTime + 300 - now()),
	          10 < exitStatus)
	        ) {
	          markRootSuspended(
	            shouldTimeSlice,
	            lanes,
	            workInProgressDeferredLane,
	            !workInProgressRootDidSkipSuspendedSiblings
	          );
	          if (0 !== getNextLanes(shouldTimeSlice, 0, true)) break a;
	          shouldTimeSlice.timeoutHandle = scheduleTimeout(
	            commitRootWhenReady.bind(
	              null,
	              shouldTimeSlice,
	              forceSync,
	              workInProgressRootRecoverableErrors,
	              workInProgressTransitions,
	              workInProgressRootDidIncludeRecursiveRenderUpdate,
	              lanes,
	              workInProgressDeferredLane,
	              workInProgressRootInterleavedUpdatedLanes,
	              workInProgressSuspendedRetryLanes,
	              workInProgressRootDidSkipSuspendedSiblings,
	              renderWasConcurrent,
	              2,
	              -0,
	              0
	            ),
	            exitStatus
	          );
	          break a;
	        }
	        commitRootWhenReady(
	          shouldTimeSlice,
	          forceSync,
	          workInProgressRootRecoverableErrors,
	          workInProgressTransitions,
	          workInProgressRootDidIncludeRecursiveRenderUpdate,
	          lanes,
	          workInProgressDeferredLane,
	          workInProgressRootInterleavedUpdatedLanes,
	          workInProgressSuspendedRetryLanes,
	          workInProgressRootDidSkipSuspendedSiblings,
	          renderWasConcurrent,
	          0,
	          -0,
	          0
	        );
	      }
	    }
	    break;
	  } while (1);
	  ensureRootIsScheduled(root$jscomp$0);
	}
	function commitRootWhenReady(
	  root,
	  finishedWork,
	  recoverableErrors,
	  transitions,
	  didIncludeRenderPhaseUpdate,
	  lanes,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes,
	  didSkipSuspendedSiblings,
	  exitStatus,
	  suspendedCommitReason,
	  completedRenderStartTime,
	  completedRenderEndTime
	) {
	  root.timeoutHandle = -1;
	  suspendedCommitReason = finishedWork.subtreeFlags;
	  if (
	    suspendedCommitReason & 8192 ||
	    16785408 === (suspendedCommitReason & 16785408)
	  )
	    if (
	      ((suspendedState = { stylesheets: null, count: 0, unsuspend: noop }),
	      accumulateSuspenseyCommitOnFiber(finishedWork),
	      (suspendedCommitReason = waitForCommitToBeReady()),
	      null !== suspendedCommitReason)
	    ) {
	      root.cancelPendingCommit = suspendedCommitReason(
	        commitRoot.bind(
	          null,
	          root,
	          finishedWork,
	          lanes,
	          recoverableErrors,
	          transitions,
	          didIncludeRenderPhaseUpdate,
	          spawnedLane,
	          updatedLanes,
	          suspendedRetryLanes,
	          exitStatus,
	          1,
	          completedRenderStartTime,
	          completedRenderEndTime
	        )
	      );
	      markRootSuspended(root, lanes, spawnedLane, !didSkipSuspendedSiblings);
	      return;
	    }
	  commitRoot(
	    root,
	    finishedWork,
	    lanes,
	    recoverableErrors,
	    transitions,
	    didIncludeRenderPhaseUpdate,
	    spawnedLane,
	    updatedLanes,
	    suspendedRetryLanes
	  );
	}
	function isRenderConsistentWithExternalStores(finishedWork) {
	  for (var node = finishedWork; ; ) {
	    var tag = node.tag;
	    if (
	      (0 === tag || 11 === tag || 15 === tag) &&
	      node.flags & 16384 &&
	      ((tag = node.updateQueue),
	      null !== tag && ((tag = tag.stores), null !== tag))
	    )
	      for (var i = 0; i < tag.length; i++) {
	        var check = tag[i],
	          getSnapshot = check.getSnapshot;
	        check = check.value;
	        try {
	          if (!objectIs(getSnapshot(), check)) return !1;
	        } catch (error) {
	          return false;
	        }
	      }
	    tag = node.child;
	    if (node.subtreeFlags & 16384 && null !== tag)
	      (tag.return = node), (node = tag);
	    else {
	      if (node === finishedWork) break;
	      for (; null === node.sibling; ) {
	        if (null === node.return || node.return === finishedWork) return true;
	        node = node.return;
	      }
	      node.sibling.return = node.return;
	      node = node.sibling;
	    }
	  }
	  return true;
	}
	function markRootSuspended(
	  root,
	  suspendedLanes,
	  spawnedLane,
	  didAttemptEntireTree
	) {
	  suspendedLanes &= ~workInProgressRootPingedLanes;
	  suspendedLanes &= ~workInProgressRootInterleavedUpdatedLanes;
	  root.suspendedLanes |= suspendedLanes;
	  root.pingedLanes &= ~suspendedLanes;
	  didAttemptEntireTree && (root.warmLanes |= suspendedLanes);
	  didAttemptEntireTree = root.expirationTimes;
	  for (var lanes = suspendedLanes; 0 < lanes; ) {
	    var index$4 = 31 - clz32(lanes),
	      lane = 1 << index$4;
	    didAttemptEntireTree[index$4] = -1;
	    lanes &= ~lane;
	  }
	  0 !== spawnedLane &&
	    markSpawnedDeferredLane(root, spawnedLane, suspendedLanes);
	}
	function flushSyncWork$1() {
	  return 0 === (executionContext & 6)
	    ? (flushSyncWorkAcrossRoots_impl(0), false)
	    : true;
	}
	function resetWorkInProgressStack() {
	  if (null !== workInProgress) {
	    if (0 === workInProgressSuspendedReason)
	      var interruptedWork = workInProgress.return;
	    else
	      (interruptedWork = workInProgress),
	        (lastContextDependency = currentlyRenderingFiber$1 = null),
	        resetHooksOnUnwind(interruptedWork),
	        (thenableState = null),
	        (thenableIndexCounter = 0),
	        (interruptedWork = workInProgress);
	    for (; null !== interruptedWork; )
	      unwindInterruptedWork(interruptedWork.alternate, interruptedWork),
	        (interruptedWork = interruptedWork.return);
	    workInProgress = null;
	  }
	}
	function prepareFreshStack(root, lanes) {
	  var timeoutHandle = root.timeoutHandle;
	  -1 !== timeoutHandle &&
	    ((root.timeoutHandle = -1), cancelTimeout(timeoutHandle));
	  timeoutHandle = root.cancelPendingCommit;
	  null !== timeoutHandle &&
	    ((root.cancelPendingCommit = null), timeoutHandle());
	  resetWorkInProgressStack();
	  workInProgressRoot = root;
	  workInProgress = timeoutHandle = createWorkInProgress(root.current, null);
	  workInProgressRootRenderLanes = lanes;
	  workInProgressSuspendedReason = 0;
	  workInProgressThrownValue = null;
	  workInProgressRootDidSkipSuspendedSiblings = false;
	  workInProgressRootIsPrerendering = checkIfRootIsPrerendering(root, lanes);
	  workInProgressRootDidAttachPingListener = false;
	  workInProgressSuspendedRetryLanes =
	    workInProgressDeferredLane =
	    workInProgressRootPingedLanes =
	    workInProgressRootInterleavedUpdatedLanes =
	    workInProgressRootSkippedLanes =
	    workInProgressRootExitStatus =
	      0;
	  workInProgressRootRecoverableErrors = workInProgressRootConcurrentErrors =
	    null;
	  workInProgressRootDidIncludeRecursiveRenderUpdate = false;
	  0 !== (lanes & 8) && (lanes |= lanes & 32);
	  var allEntangledLanes = root.entangledLanes;
	  if (0 !== allEntangledLanes)
	    for (
	      root = root.entanglements, allEntangledLanes &= lanes;
	      0 < allEntangledLanes;

	    ) {
	      var index$2 = 31 - clz32(allEntangledLanes),
	        lane = 1 << index$2;
	      lanes |= root[index$2];
	      allEntangledLanes &= ~lane;
	    }
	  entangledRenderLanes = lanes;
	  finishQueueingConcurrentUpdates();
	  return timeoutHandle;
	}
	function handleThrow(root, thrownValue) {
	  currentlyRenderingFiber = null;
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  thrownValue === SuspenseException || thrownValue === SuspenseActionException
	    ? ((thrownValue = getSuspendedThenable()),
	      (workInProgressSuspendedReason = 3))
	    : thrownValue === SuspenseyCommitException
	      ? ((thrownValue = getSuspendedThenable()),
	        (workInProgressSuspendedReason = 4))
	      : (workInProgressSuspendedReason =
	          thrownValue === SelectiveHydrationException
	            ? 8
	            : null !== thrownValue &&
	                "object" === typeof thrownValue &&
	                "function" === typeof thrownValue.then
	              ? 6
	              : 1);
	  workInProgressThrownValue = thrownValue;
	  null === workInProgress &&
	    ((workInProgressRootExitStatus = 1),
	    logUncaughtError(
	      root,
	      createCapturedValueAtFiber(thrownValue, root.current)
	    ));
	}
	function pushDispatcher() {
	  var prevDispatcher = ReactSharedInternals.H;
	  ReactSharedInternals.H = ContextOnlyDispatcher;
	  return null === prevDispatcher ? ContextOnlyDispatcher : prevDispatcher;
	}
	function pushAsyncDispatcher() {
	  var prevAsyncDispatcher = ReactSharedInternals.A;
	  ReactSharedInternals.A = DefaultAsyncDispatcher;
	  return prevAsyncDispatcher;
	}
	function renderDidSuspendDelayIfPossible() {
	  workInProgressRootExitStatus = 4;
	  workInProgressRootDidSkipSuspendedSiblings ||
	    ((workInProgressRootRenderLanes & 4194048) !==
	      workInProgressRootRenderLanes &&
	      null !== suspenseHandlerStackCursor.current) ||
	    (workInProgressRootIsPrerendering = true);
	  (0 === (workInProgressRootSkippedLanes & 134217727) &&
	    0 === (workInProgressRootInterleavedUpdatedLanes & 134217727)) ||
	    null === workInProgressRoot ||
	    markRootSuspended(
	      workInProgressRoot,
	      workInProgressRootRenderLanes,
	      workInProgressDeferredLane,
	      false
	    );
	}
	function renderRootSync(root, lanes, shouldYieldForPrerendering) {
	  var prevExecutionContext = executionContext;
	  executionContext |= 2;
	  var prevDispatcher = pushDispatcher(),
	    prevAsyncDispatcher = pushAsyncDispatcher();
	  if (workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes)
	    (workInProgressTransitions = null), prepareFreshStack(root, lanes);
	  lanes = false;
	  var exitStatus = workInProgressRootExitStatus;
	  a: do
	    try {
	      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
	        var unitOfWork = workInProgress,
	          thrownValue = workInProgressThrownValue;
	        switch (workInProgressSuspendedReason) {
	          case 8:
	            resetWorkInProgressStack();
	            exitStatus = 6;
	            break a;
	          case 3:
	          case 2:
	          case 9:
	          case 6:
	            null === suspenseHandlerStackCursor.current && (lanes = !0);
	            var reason = workInProgressSuspendedReason;
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
	            if (
	              shouldYieldForPrerendering &&
	              workInProgressRootIsPrerendering
	            ) {
	              exitStatus = 0;
	              break a;
	            }
	            break;
	          default:
	            (reason = workInProgressSuspendedReason),
	              (workInProgressSuspendedReason = 0),
	              (workInProgressThrownValue = null),
	              throwAndUnwindWorkLoop(root, unitOfWork, thrownValue, reason);
	        }
	      }
	      workLoopSync();
	      exitStatus = workInProgressRootExitStatus;
	      break;
	    } catch (thrownValue$167) {
	      handleThrow(root, thrownValue$167);
	    }
	  while (1);
	  lanes && root.shellSuspendCounter++;
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  executionContext = prevExecutionContext;
	  ReactSharedInternals.H = prevDispatcher;
	  ReactSharedInternals.A = prevAsyncDispatcher;
	  null === workInProgress &&
	    ((workInProgressRoot = null),
	    (workInProgressRootRenderLanes = 0),
	    finishQueueingConcurrentUpdates());
	  return exitStatus;
	}
	function workLoopSync() {
	  for (; null !== workInProgress; ) performUnitOfWork(workInProgress);
	}
	function renderRootConcurrent(root, lanes) {
	  var prevExecutionContext = executionContext;
	  executionContext |= 2;
	  var prevDispatcher = pushDispatcher(),
	    prevAsyncDispatcher = pushAsyncDispatcher();
	  workInProgressRoot !== root || workInProgressRootRenderLanes !== lanes
	    ? ((workInProgressTransitions = null),
	      (workInProgressRootRenderTargetTime = now() + 500),
	      prepareFreshStack(root, lanes))
	    : (workInProgressRootIsPrerendering = checkIfRootIsPrerendering(
	        root,
	        lanes
	      ));
	  a: do
	    try {
	      if (0 !== workInProgressSuspendedReason && null !== workInProgress) {
	        lanes = workInProgress;
	        var thrownValue = workInProgressThrownValue;
	        b: switch (workInProgressSuspendedReason) {
	          case 1:
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 1);
	            break;
	          case 2:
	          case 9:
	            if (isThenableResolved(thrownValue)) {
	              workInProgressSuspendedReason = 0;
	              workInProgressThrownValue = null;
	              replaySuspendedUnitOfWork(lanes);
	              break;
	            }
	            lanes = function () {
	              (2 !== workInProgressSuspendedReason &&
	                9 !== workInProgressSuspendedReason) ||
	                workInProgressRoot !== root ||
	                (workInProgressSuspendedReason = 7);
	              ensureRootIsScheduled(root);
	            };
	            thrownValue.then(lanes, lanes);
	            break a;
	          case 3:
	            workInProgressSuspendedReason = 7;
	            break a;
	          case 4:
	            workInProgressSuspendedReason = 5;
	            break a;
	          case 7:
	            isThenableResolved(thrownValue)
	              ? ((workInProgressSuspendedReason = 0),
	                (workInProgressThrownValue = null),
	                replaySuspendedUnitOfWork(lanes))
	              : ((workInProgressSuspendedReason = 0),
	                (workInProgressThrownValue = null),
	                throwAndUnwindWorkLoop(root, lanes, thrownValue, 7));
	            break;
	          case 5:
	            var resource = null;
	            switch (workInProgress.tag) {
	              case 26:
	                resource = workInProgress.memoizedState;
	              case 5:
	              case 27:
	                var hostFiber = workInProgress;
	                if (resource ? preloadResource(resource) : 1) {
	                  workInProgressSuspendedReason = 0;
	                  workInProgressThrownValue = null;
	                  var sibling = hostFiber.sibling;
	                  if (null !== sibling) workInProgress = sibling;
	                  else {
	                    var returnFiber = hostFiber.return;
	                    null !== returnFiber
	                      ? ((workInProgress = returnFiber),
	                        completeUnitOfWork(returnFiber))
	                      : (workInProgress = null);
	                  }
	                  break b;
	                }
	            }
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 5);
	            break;
	          case 6:
	            workInProgressSuspendedReason = 0;
	            workInProgressThrownValue = null;
	            throwAndUnwindWorkLoop(root, lanes, thrownValue, 6);
	            break;
	          case 8:
	            resetWorkInProgressStack();
	            workInProgressRootExitStatus = 6;
	            break a;
	          default:
	            throw Error(formatProdErrorMessage(462));
	        }
	      }
	      workLoopConcurrentByScheduler();
	      break;
	    } catch (thrownValue$169) {
	      handleThrow(root, thrownValue$169);
	    }
	  while (1);
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  ReactSharedInternals.H = prevDispatcher;
	  ReactSharedInternals.A = prevAsyncDispatcher;
	  executionContext = prevExecutionContext;
	  if (null !== workInProgress) return 0;
	  workInProgressRoot = null;
	  workInProgressRootRenderLanes = 0;
	  finishQueueingConcurrentUpdates();
	  return workInProgressRootExitStatus;
	}
	function workLoopConcurrentByScheduler() {
	  for (; null !== workInProgress && !shouldYield(); )
	    performUnitOfWork(workInProgress);
	}
	function performUnitOfWork(unitOfWork) {
	  var next = beginWork(unitOfWork.alternate, unitOfWork, entangledRenderLanes);
	  unitOfWork.memoizedProps = unitOfWork.pendingProps;
	  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
	}
	function replaySuspendedUnitOfWork(unitOfWork) {
	  var next = unitOfWork;
	  var current = next.alternate;
	  switch (next.tag) {
	    case 15:
	    case 0:
	      next = replayFunctionComponent(
	        current,
	        next,
	        next.pendingProps,
	        next.type,
	        void 0,
	        workInProgressRootRenderLanes
	      );
	      break;
	    case 11:
	      next = replayFunctionComponent(
	        current,
	        next,
	        next.pendingProps,
	        next.type.render,
	        next.ref,
	        workInProgressRootRenderLanes
	      );
	      break;
	    case 5:
	      resetHooksOnUnwind(next);
	    default:
	      unwindInterruptedWork(current, next),
	        (next = workInProgress =
	          resetWorkInProgress(next, entangledRenderLanes)),
	        (next = beginWork(current, next, entangledRenderLanes));
	  }
	  unitOfWork.memoizedProps = unitOfWork.pendingProps;
	  null === next ? completeUnitOfWork(unitOfWork) : (workInProgress = next);
	}
	function throwAndUnwindWorkLoop(
	  root,
	  unitOfWork,
	  thrownValue,
	  suspendedReason
	) {
	  lastContextDependency = currentlyRenderingFiber$1 = null;
	  resetHooksOnUnwind(unitOfWork);
	  thenableState = null;
	  thenableIndexCounter = 0;
	  var returnFiber = unitOfWork.return;
	  try {
	    if (
	      throwException(
	        root,
	        returnFiber,
	        unitOfWork,
	        thrownValue,
	        workInProgressRootRenderLanes
	      )
	    ) {
	      workInProgressRootExitStatus = 1;
	      logUncaughtError(
	        root,
	        createCapturedValueAtFiber(thrownValue, root.current)
	      );
	      workInProgress = null;
	      return;
	    }
	  } catch (error) {
	    if (null !== returnFiber) throw ((workInProgress = returnFiber), error);
	    workInProgressRootExitStatus = 1;
	    logUncaughtError(
	      root,
	      createCapturedValueAtFiber(thrownValue, root.current)
	    );
	    workInProgress = null;
	    return;
	  }
	  if (unitOfWork.flags & 32768) {
	    if (isHydrating || 1 === suspendedReason) root = true;
	    else if (
	      workInProgressRootIsPrerendering ||
	      0 !== (workInProgressRootRenderLanes & 536870912)
	    )
	      root = false;
	    else if (
	      ((workInProgressRootDidSkipSuspendedSiblings = root = true),
	      2 === suspendedReason ||
	        9 === suspendedReason ||
	        3 === suspendedReason ||
	        6 === suspendedReason)
	    )
	      (suspendedReason = suspenseHandlerStackCursor.current),
	        null !== suspendedReason &&
	          13 === suspendedReason.tag &&
	          (suspendedReason.flags |= 16384);
	    unwindUnitOfWork(unitOfWork, root);
	  } else completeUnitOfWork(unitOfWork);
	}
	function completeUnitOfWork(unitOfWork) {
	  var completedWork = unitOfWork;
	  do {
	    if (0 !== (completedWork.flags & 32768)) {
	      unwindUnitOfWork(
	        completedWork,
	        workInProgressRootDidSkipSuspendedSiblings
	      );
	      return;
	    }
	    unitOfWork = completedWork.return;
	    var next = completeWork(
	      completedWork.alternate,
	      completedWork,
	      entangledRenderLanes
	    );
	    if (null !== next) {
	      workInProgress = next;
	      return;
	    }
	    completedWork = completedWork.sibling;
	    if (null !== completedWork) {
	      workInProgress = completedWork;
	      return;
	    }
	    workInProgress = completedWork = unitOfWork;
	  } while (null !== completedWork);
	  0 === workInProgressRootExitStatus && (workInProgressRootExitStatus = 5);
	}
	function unwindUnitOfWork(unitOfWork, skipSiblings) {
	  do {
	    var next = unwindWork(unitOfWork.alternate, unitOfWork);
	    if (null !== next) {
	      next.flags &= 32767;
	      workInProgress = next;
	      return;
	    }
	    next = unitOfWork.return;
	    null !== next &&
	      ((next.flags |= 32768), (next.subtreeFlags = 0), (next.deletions = null));
	    if (
	      !skipSiblings &&
	      ((unitOfWork = unitOfWork.sibling), null !== unitOfWork)
	    ) {
	      workInProgress = unitOfWork;
	      return;
	    }
	    workInProgress = unitOfWork = next;
	  } while (null !== unitOfWork);
	  workInProgressRootExitStatus = 6;
	  workInProgress = null;
	}
	function commitRoot(
	  root,
	  finishedWork,
	  lanes,
	  recoverableErrors,
	  transitions,
	  didIncludeRenderPhaseUpdate,
	  spawnedLane,
	  updatedLanes,
	  suspendedRetryLanes
	) {
	  root.cancelPendingCommit = null;
	  do flushPendingEffects();
	  while (0 !== pendingEffectsStatus);
	  if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(327));
	  if (null !== finishedWork) {
	    if (finishedWork === root.current) throw Error(formatProdErrorMessage(177));
	    didIncludeRenderPhaseUpdate = finishedWork.lanes | finishedWork.childLanes;
	    didIncludeRenderPhaseUpdate |= concurrentlyUpdatedLanes;
	    markRootFinished(
	      root,
	      lanes,
	      didIncludeRenderPhaseUpdate,
	      spawnedLane,
	      updatedLanes,
	      suspendedRetryLanes
	    );
	    root === workInProgressRoot &&
	      ((workInProgress = workInProgressRoot = null),
	      (workInProgressRootRenderLanes = 0));
	    pendingFinishedWork = finishedWork;
	    pendingEffectsRoot = root;
	    pendingEffectsLanes = lanes;
	    pendingEffectsRemainingLanes = didIncludeRenderPhaseUpdate;
	    pendingPassiveTransitions = transitions;
	    pendingRecoverableErrors = recoverableErrors;
	    0 !== (finishedWork.subtreeFlags & 10256) ||
	    0 !== (finishedWork.flags & 10256)
	      ? ((root.callbackNode = null),
	        (root.callbackPriority = 0),
	        scheduleCallback$1(NormalPriority$1, function () {
	          flushPassiveEffects();
	          return null;
	        }))
	      : ((root.callbackNode = null), (root.callbackPriority = 0));
	    recoverableErrors = 0 !== (finishedWork.flags & 13878);
	    if (0 !== (finishedWork.subtreeFlags & 13878) || recoverableErrors) {
	      recoverableErrors = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      transitions = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      spawnedLane = executionContext;
	      executionContext |= 4;
	      try {
	        commitBeforeMutationEffects(root, finishedWork, lanes);
	      } finally {
	        (executionContext = spawnedLane),
	          (ReactDOMSharedInternals.p = transitions),
	          (ReactSharedInternals.T = recoverableErrors);
	      }
	    }
	    pendingEffectsStatus = 1;
	    flushMutationEffects();
	    flushLayoutEffects();
	    flushSpawnedWork();
	  }
	}
	function flushMutationEffects() {
	  if (1 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      rootMutationHasEffect = 0 !== (finishedWork.flags & 13878);
	    if (0 !== (finishedWork.subtreeFlags & 13878) || rootMutationHasEffect) {
	      rootMutationHasEffect = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      var previousPriority = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      var prevExecutionContext = executionContext;
	      executionContext |= 4;
	      try {
	        commitMutationEffectsOnFiber(finishedWork, root);
	        var priorSelectionInformation = selectionInformation,
	          curFocusedElem = getActiveElementDeep(root.containerInfo),
	          priorFocusedElem = priorSelectionInformation.focusedElem,
	          priorSelectionRange = priorSelectionInformation.selectionRange;
	        if (
	          curFocusedElem !== priorFocusedElem &&
	          priorFocusedElem &&
	          priorFocusedElem.ownerDocument &&
	          containsNode(
	            priorFocusedElem.ownerDocument.documentElement,
	            priorFocusedElem
	          )
	        ) {
	          if (
	            null !== priorSelectionRange &&
	            hasSelectionCapabilities(priorFocusedElem)
	          ) {
	            var start = priorSelectionRange.start,
	              end = priorSelectionRange.end;
	            void 0 === end && (end = start);
	            if ("selectionStart" in priorFocusedElem)
	              (priorFocusedElem.selectionStart = start),
	                (priorFocusedElem.selectionEnd = Math.min(
	                  end,
	                  priorFocusedElem.value.length
	                ));
	            else {
	              var doc = priorFocusedElem.ownerDocument || document,
	                win = (doc && doc.defaultView) || window;
	              if (win.getSelection) {
	                var selection = win.getSelection(),
	                  length = priorFocusedElem.textContent.length,
	                  start$jscomp$0 = Math.min(priorSelectionRange.start, length),
	                  end$jscomp$0 =
	                    void 0 === priorSelectionRange.end
	                      ? start$jscomp$0
	                      : Math.min(priorSelectionRange.end, length);
	                !selection.extend &&
	                  start$jscomp$0 > end$jscomp$0 &&
	                  ((curFocusedElem = end$jscomp$0),
	                  (end$jscomp$0 = start$jscomp$0),
	                  (start$jscomp$0 = curFocusedElem));
	                var startMarker = getNodeForCharacterOffset(
	                    priorFocusedElem,
	                    start$jscomp$0
	                  ),
	                  endMarker = getNodeForCharacterOffset(
	                    priorFocusedElem,
	                    end$jscomp$0
	                  );
	                if (
	                  startMarker &&
	                  endMarker &&
	                  (1 !== selection.rangeCount ||
	                    selection.anchorNode !== startMarker.node ||
	                    selection.anchorOffset !== startMarker.offset ||
	                    selection.focusNode !== endMarker.node ||
	                    selection.focusOffset !== endMarker.offset)
	                ) {
	                  var range = doc.createRange();
	                  range.setStart(startMarker.node, startMarker.offset);
	                  selection.removeAllRanges();
	                  start$jscomp$0 > end$jscomp$0
	                    ? (selection.addRange(range),
	                      selection.extend(endMarker.node, endMarker.offset))
	                    : (range.setEnd(endMarker.node, endMarker.offset),
	                      selection.addRange(range));
	                }
	              }
	            }
	          }
	          doc = [];
	          for (
	            selection = priorFocusedElem;
	            (selection = selection.parentNode);

	          )
	            1 === selection.nodeType &&
	              doc.push({
	                element: selection,
	                left: selection.scrollLeft,
	                top: selection.scrollTop
	              });
	          "function" === typeof priorFocusedElem.focus &&
	            priorFocusedElem.focus();
	          for (
	            priorFocusedElem = 0;
	            priorFocusedElem < doc.length;
	            priorFocusedElem++
	          ) {
	            var info = doc[priorFocusedElem];
	            info.element.scrollLeft = info.left;
	            info.element.scrollTop = info.top;
	          }
	        }
	        _enabled = !!eventsEnabled;
	        selectionInformation = eventsEnabled = null;
	      } finally {
	        (executionContext = prevExecutionContext),
	          (ReactDOMSharedInternals.p = previousPriority),
	          (ReactSharedInternals.T = rootMutationHasEffect);
	      }
	    }
	    root.current = finishedWork;
	    pendingEffectsStatus = 2;
	  }
	}
	function flushLayoutEffects() {
	  if (2 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      rootHasLayoutEffect = 0 !== (finishedWork.flags & 8772);
	    if (0 !== (finishedWork.subtreeFlags & 8772) || rootHasLayoutEffect) {
	      rootHasLayoutEffect = ReactSharedInternals.T;
	      ReactSharedInternals.T = null;
	      var previousPriority = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      var prevExecutionContext = executionContext;
	      executionContext |= 4;
	      try {
	        commitLayoutEffectOnFiber(root, finishedWork.alternate, finishedWork);
	      } finally {
	        (executionContext = prevExecutionContext),
	          (ReactDOMSharedInternals.p = previousPriority),
	          (ReactSharedInternals.T = rootHasLayoutEffect);
	      }
	    }
	    pendingEffectsStatus = 3;
	  }
	}
	function flushSpawnedWork() {
	  if (4 === pendingEffectsStatus || 3 === pendingEffectsStatus) {
	    pendingEffectsStatus = 0;
	    requestPaint();
	    var root = pendingEffectsRoot,
	      finishedWork = pendingFinishedWork,
	      lanes = pendingEffectsLanes,
	      recoverableErrors = pendingRecoverableErrors;
	    0 !== (finishedWork.subtreeFlags & 10256) ||
	    0 !== (finishedWork.flags & 10256)
	      ? (pendingEffectsStatus = 5)
	      : ((pendingEffectsStatus = 0),
	        (pendingFinishedWork = pendingEffectsRoot = null),
	        releaseRootPooledCache(root, root.pendingLanes));
	    var remainingLanes = root.pendingLanes;
	    0 === remainingLanes && (legacyErrorBoundariesThatAlreadyFailed = null);
	    lanesToEventPriority(lanes);
	    finishedWork = finishedWork.stateNode;
	    if (injectedHook && "function" === typeof injectedHook.onCommitFiberRoot)
	      try {
	        injectedHook.onCommitFiberRoot(
	          rendererID,
	          finishedWork,
	          void 0,
	          128 === (finishedWork.current.flags & 128)
	        );
	      } catch (err) {}
	    if (null !== recoverableErrors) {
	      finishedWork = ReactSharedInternals.T;
	      remainingLanes = ReactDOMSharedInternals.p;
	      ReactDOMSharedInternals.p = 2;
	      ReactSharedInternals.T = null;
	      try {
	        for (
	          var onRecoverableError = root.onRecoverableError, i = 0;
	          i < recoverableErrors.length;
	          i++
	        ) {
	          var recoverableError = recoverableErrors[i];
	          onRecoverableError(recoverableError.value, {
	            componentStack: recoverableError.stack
	          });
	        }
	      } finally {
	        (ReactSharedInternals.T = finishedWork),
	          (ReactDOMSharedInternals.p = remainingLanes);
	      }
	    }
	    0 !== (pendingEffectsLanes & 3) && flushPendingEffects();
	    ensureRootIsScheduled(root);
	    remainingLanes = root.pendingLanes;
	    0 !== (lanes & 4194090) && 0 !== (remainingLanes & 42)
	      ? root === rootWithNestedUpdates
	        ? nestedUpdateCount++
	        : ((nestedUpdateCount = 0), (rootWithNestedUpdates = root))
	      : (nestedUpdateCount = 0);
	    flushSyncWorkAcrossRoots_impl(0);
	  }
	}
	function releaseRootPooledCache(root, remainingLanes) {
	  0 === (root.pooledCacheLanes &= remainingLanes) &&
	    ((remainingLanes = root.pooledCache),
	    null != remainingLanes &&
	      ((root.pooledCache = null), releaseCache(remainingLanes)));
	}
	function flushPendingEffects(wasDelayedCommit) {
	  flushMutationEffects();
	  flushLayoutEffects();
	  flushSpawnedWork();
	  return flushPassiveEffects();
	}
	function flushPassiveEffects() {
	  if (5 !== pendingEffectsStatus) return false;
	  var root = pendingEffectsRoot,
	    remainingLanes = pendingEffectsRemainingLanes;
	  pendingEffectsRemainingLanes = 0;
	  var renderPriority = lanesToEventPriority(pendingEffectsLanes),
	    prevTransition = ReactSharedInternals.T,
	    previousPriority = ReactDOMSharedInternals.p;
	  try {
	    ReactDOMSharedInternals.p = 32 > renderPriority ? 32 : renderPriority;
	    ReactSharedInternals.T = null;
	    renderPriority = pendingPassiveTransitions;
	    pendingPassiveTransitions = null;
	    var root$jscomp$0 = pendingEffectsRoot,
	      lanes = pendingEffectsLanes;
	    pendingEffectsStatus = 0;
	    pendingFinishedWork = pendingEffectsRoot = null;
	    pendingEffectsLanes = 0;
	    if (0 !== (executionContext & 6)) throw Error(formatProdErrorMessage(331));
	    var prevExecutionContext = executionContext;
	    executionContext |= 4;
	    commitPassiveUnmountOnFiber(root$jscomp$0.current);
	    commitPassiveMountOnFiber(
	      root$jscomp$0,
	      root$jscomp$0.current,
	      lanes,
	      renderPriority
	    );
	    executionContext = prevExecutionContext;
	    flushSyncWorkAcrossRoots_impl(0, !1);
	    if (
	      injectedHook &&
	      "function" === typeof injectedHook.onPostCommitFiberRoot
	    )
	      try {
	        injectedHook.onPostCommitFiberRoot(rendererID, root$jscomp$0);
	      } catch (err) {}
	    return !0;
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition),
	      releaseRootPooledCache(root, remainingLanes);
	  }
	}
	function captureCommitPhaseErrorOnRoot(rootFiber, sourceFiber, error) {
	  sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
	  sourceFiber = createRootErrorUpdate(rootFiber.stateNode, sourceFiber, 2);
	  rootFiber = enqueueUpdate(rootFiber, sourceFiber, 2);
	  null !== rootFiber &&
	    (markRootUpdated$1(rootFiber, 2), ensureRootIsScheduled(rootFiber));
	}
	function captureCommitPhaseError(sourceFiber, nearestMountedAncestor, error) {
	  if (3 === sourceFiber.tag)
	    captureCommitPhaseErrorOnRoot(sourceFiber, sourceFiber, error);
	  else
	    for (; null !== nearestMountedAncestor; ) {
	      if (3 === nearestMountedAncestor.tag) {
	        captureCommitPhaseErrorOnRoot(
	          nearestMountedAncestor,
	          sourceFiber,
	          error
	        );
	        break;
	      } else if (1 === nearestMountedAncestor.tag) {
	        var instance = nearestMountedAncestor.stateNode;
	        if (
	          "function" ===
	            typeof nearestMountedAncestor.type.getDerivedStateFromError ||
	          ("function" === typeof instance.componentDidCatch &&
	            (null === legacyErrorBoundariesThatAlreadyFailed ||
	              !legacyErrorBoundariesThatAlreadyFailed.has(instance)))
	        ) {
	          sourceFiber = createCapturedValueAtFiber(error, sourceFiber);
	          error = createClassErrorUpdate(2);
	          instance = enqueueUpdate(nearestMountedAncestor, error, 2);
	          null !== instance &&
	            (initializeClassErrorUpdate(
	              error,
	              instance,
	              nearestMountedAncestor,
	              sourceFiber
	            ),
	            markRootUpdated$1(instance, 2),
	            ensureRootIsScheduled(instance));
	          break;
	        }
	      }
	      nearestMountedAncestor = nearestMountedAncestor.return;
	    }
	}
	function attachPingListener(root, wakeable, lanes) {
	  var pingCache = root.pingCache;
	  if (null === pingCache) {
	    pingCache = root.pingCache = new PossiblyWeakMap();
	    var threadIDs = new Set();
	    pingCache.set(wakeable, threadIDs);
	  } else
	    (threadIDs = pingCache.get(wakeable)),
	      void 0 === threadIDs &&
	        ((threadIDs = new Set()), pingCache.set(wakeable, threadIDs));
	  threadIDs.has(lanes) ||
	    ((workInProgressRootDidAttachPingListener = true),
	    threadIDs.add(lanes),
	    (root = pingSuspendedRoot.bind(null, root, wakeable, lanes)),
	    wakeable.then(root, root));
	}
	function pingSuspendedRoot(root, wakeable, pingedLanes) {
	  var pingCache = root.pingCache;
	  null !== pingCache && pingCache.delete(wakeable);
	  root.pingedLanes |= root.suspendedLanes & pingedLanes;
	  root.warmLanes &= ~pingedLanes;
	  workInProgressRoot === root &&
	    (workInProgressRootRenderLanes & pingedLanes) === pingedLanes &&
	    (4 === workInProgressRootExitStatus ||
	    (3 === workInProgressRootExitStatus &&
	      (workInProgressRootRenderLanes & 62914560) ===
	        workInProgressRootRenderLanes &&
	      300 > now() - globalMostRecentFallbackTime)
	      ? 0 === (executionContext & 2) && prepareFreshStack(root, 0)
	      : (workInProgressRootPingedLanes |= pingedLanes),
	    workInProgressSuspendedRetryLanes === workInProgressRootRenderLanes &&
	      (workInProgressSuspendedRetryLanes = 0));
	  ensureRootIsScheduled(root);
	}
	function retryTimedOutBoundary(boundaryFiber, retryLane) {
	  0 === retryLane && (retryLane = claimNextRetryLane());
	  boundaryFiber = enqueueConcurrentRenderForLane(boundaryFiber, retryLane);
	  null !== boundaryFiber &&
	    (markRootUpdated$1(boundaryFiber, retryLane),
	    ensureRootIsScheduled(boundaryFiber));
	}
	function retryDehydratedSuspenseBoundary(boundaryFiber) {
	  var suspenseState = boundaryFiber.memoizedState,
	    retryLane = 0;
	  null !== suspenseState && (retryLane = suspenseState.retryLane);
	  retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function resolveRetryWakeable(boundaryFiber, wakeable) {
	  var retryLane = 0;
	  switch (boundaryFiber.tag) {
	    case 13:
	      var retryCache = boundaryFiber.stateNode;
	      var suspenseState = boundaryFiber.memoizedState;
	      null !== suspenseState && (retryLane = suspenseState.retryLane);
	      break;
	    case 19:
	      retryCache = boundaryFiber.stateNode;
	      break;
	    case 22:
	      retryCache = boundaryFiber.stateNode._retryCache;
	      break;
	    default:
	      throw Error(formatProdErrorMessage(314));
	  }
	  null !== retryCache && retryCache.delete(wakeable);
	  retryTimedOutBoundary(boundaryFiber, retryLane);
	}
	function scheduleCallback$1(priorityLevel, callback) {
	  return scheduleCallback$3(priorityLevel, callback);
	}
	var firstScheduledRoot = null,
	  lastScheduledRoot = null,
	  didScheduleMicrotask = false,
	  mightHavePendingSyncWork = false,
	  isFlushingWork = false,
	  currentEventTransitionLane = 0;
	function ensureRootIsScheduled(root) {
	  root !== lastScheduledRoot &&
	    null === root.next &&
	    (null === lastScheduledRoot
	      ? (firstScheduledRoot = lastScheduledRoot = root)
	      : (lastScheduledRoot = lastScheduledRoot.next = root));
	  mightHavePendingSyncWork = true;
	  didScheduleMicrotask ||
	    ((didScheduleMicrotask = true), scheduleImmediateRootScheduleTask());
	}
	function flushSyncWorkAcrossRoots_impl(syncTransitionLanes, onlyLegacy) {
	  if (!isFlushingWork && mightHavePendingSyncWork) {
	    isFlushingWork = true;
	    do {
	      var didPerformSomeWork = false;
	      for (var root$174 = firstScheduledRoot; null !== root$174; ) {
	        if (0 !== syncTransitionLanes) {
	            var pendingLanes = root$174.pendingLanes;
	            if (0 === pendingLanes) var JSCompiler_inline_result = 0;
	            else {
	              var suspendedLanes = root$174.suspendedLanes,
	                pingedLanes = root$174.pingedLanes;
	              JSCompiler_inline_result =
	                (1 << (31 - clz32(42 | syncTransitionLanes) + 1)) - 1;
	              JSCompiler_inline_result &=
	                pendingLanes & ~(suspendedLanes & ~pingedLanes);
	              JSCompiler_inline_result =
	                JSCompiler_inline_result & 201326741
	                  ? (JSCompiler_inline_result & 201326741) | 1
	                  : JSCompiler_inline_result
	                    ? JSCompiler_inline_result | 2
	                    : 0;
	            }
	            0 !== JSCompiler_inline_result &&
	              ((didPerformSomeWork = true),
	              performSyncWorkOnRoot(root$174, JSCompiler_inline_result));
	          } else
	            (JSCompiler_inline_result = workInProgressRootRenderLanes),
	              (JSCompiler_inline_result = getNextLanes(
	                root$174,
	                root$174 === workInProgressRoot ? JSCompiler_inline_result : 0,
	                null !== root$174.cancelPendingCommit ||
	                  -1 !== root$174.timeoutHandle
	              )),
	              0 === (JSCompiler_inline_result & 3) ||
	                checkIfRootIsPrerendering(root$174, JSCompiler_inline_result) ||
	                ((didPerformSomeWork = true),
	                performSyncWorkOnRoot(root$174, JSCompiler_inline_result));
	        root$174 = root$174.next;
	      }
	    } while (didPerformSomeWork);
	    isFlushingWork = false;
	  }
	}
	function processRootScheduleInImmediateTask() {
	  processRootScheduleInMicrotask();
	}
	function processRootScheduleInMicrotask() {
	  mightHavePendingSyncWork = didScheduleMicrotask = false;
	  var syncTransitionLanes = 0;
	  0 !== currentEventTransitionLane &&
	    (shouldAttemptEagerTransition() &&
	      (syncTransitionLanes = currentEventTransitionLane),
	    (currentEventTransitionLane = 0));
	  for (
	    var currentTime = now(), prev = null, root = firstScheduledRoot;
	    null !== root;

	  ) {
	    var next = root.next,
	      nextLanes = scheduleTaskForRootDuringMicrotask(root, currentTime);
	    if (0 === nextLanes)
	      (root.next = null),
	        null === prev ? (firstScheduledRoot = next) : (prev.next = next),
	        null === next && (lastScheduledRoot = prev);
	    else if (
	      ((prev = root), 0 !== syncTransitionLanes || 0 !== (nextLanes & 3))
	    )
	      mightHavePendingSyncWork = true;
	    root = next;
	  }
	  flushSyncWorkAcrossRoots_impl(syncTransitionLanes);
	}
	function scheduleTaskForRootDuringMicrotask(root, currentTime) {
	  for (
	    var suspendedLanes = root.suspendedLanes,
	      pingedLanes = root.pingedLanes,
	      expirationTimes = root.expirationTimes,
	      lanes = root.pendingLanes & -62914561;
	    0 < lanes;

	  ) {
	    var index$3 = 31 - clz32(lanes),
	      lane = 1 << index$3,
	      expirationTime = expirationTimes[index$3];
	    if (-1 === expirationTime) {
	      if (0 === (lane & suspendedLanes) || 0 !== (lane & pingedLanes))
	        expirationTimes[index$3] = computeExpirationTime(lane, currentTime);
	    } else expirationTime <= currentTime && (root.expiredLanes |= lane);
	    lanes &= ~lane;
	  }
	  currentTime = workInProgressRoot;
	  suspendedLanes = workInProgressRootRenderLanes;
	  suspendedLanes = getNextLanes(
	    root,
	    root === currentTime ? suspendedLanes : 0,
	    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
	  );
	  pingedLanes = root.callbackNode;
	  if (
	    0 === suspendedLanes ||
	    (root === currentTime &&
	      (2 === workInProgressSuspendedReason ||
	        9 === workInProgressSuspendedReason)) ||
	    null !== root.cancelPendingCommit
	  )
	    return (
	      null !== pingedLanes &&
	        null !== pingedLanes &&
	        cancelCallback$1(pingedLanes),
	      (root.callbackNode = null),
	      (root.callbackPriority = 0)
	    );
	  if (
	    0 === (suspendedLanes & 3) ||
	    checkIfRootIsPrerendering(root, suspendedLanes)
	  ) {
	    currentTime = suspendedLanes & -suspendedLanes;
	    if (currentTime === root.callbackPriority) return currentTime;
	    null !== pingedLanes && cancelCallback$1(pingedLanes);
	    switch (lanesToEventPriority(suspendedLanes)) {
	      case 2:
	      case 8:
	        suspendedLanes = UserBlockingPriority;
	        break;
	      case 32:
	        suspendedLanes = NormalPriority$1;
	        break;
	      case 268435456:
	        suspendedLanes = IdlePriority;
	        break;
	      default:
	        suspendedLanes = NormalPriority$1;
	    }
	    pingedLanes = performWorkOnRootViaSchedulerTask.bind(null, root);
	    suspendedLanes = scheduleCallback$3(suspendedLanes, pingedLanes);
	    root.callbackPriority = currentTime;
	    root.callbackNode = suspendedLanes;
	    return currentTime;
	  }
	  null !== pingedLanes && null !== pingedLanes && cancelCallback$1(pingedLanes);
	  root.callbackPriority = 2;
	  root.callbackNode = null;
	  return 2;
	}
	function performWorkOnRootViaSchedulerTask(root, didTimeout) {
	  if (0 !== pendingEffectsStatus && 5 !== pendingEffectsStatus)
	    return (root.callbackNode = null), (root.callbackPriority = 0), null;
	  var originalCallbackNode = root.callbackNode;
	  if (flushPendingEffects() && root.callbackNode !== originalCallbackNode)
	    return null;
	  var workInProgressRootRenderLanes$jscomp$0 = workInProgressRootRenderLanes;
	  workInProgressRootRenderLanes$jscomp$0 = getNextLanes(
	    root,
	    root === workInProgressRoot ? workInProgressRootRenderLanes$jscomp$0 : 0,
	    null !== root.cancelPendingCommit || -1 !== root.timeoutHandle
	  );
	  if (0 === workInProgressRootRenderLanes$jscomp$0) return null;
	  performWorkOnRoot(root, workInProgressRootRenderLanes$jscomp$0, didTimeout);
	  scheduleTaskForRootDuringMicrotask(root, now());
	  return null != root.callbackNode && root.callbackNode === originalCallbackNode
	    ? performWorkOnRootViaSchedulerTask.bind(null, root)
	    : null;
	}
	function performSyncWorkOnRoot(root, lanes) {
	  if (flushPendingEffects()) return null;
	  performWorkOnRoot(root, lanes, true);
	}
	function scheduleImmediateRootScheduleTask() {
	  scheduleMicrotask(function () {
	    0 !== (executionContext & 6)
	      ? scheduleCallback$3(
	          ImmediatePriority,
	          processRootScheduleInImmediateTask
	        )
	      : processRootScheduleInMicrotask();
	  });
	}
	function requestTransitionLane() {
	  0 === currentEventTransitionLane &&
	    (currentEventTransitionLane = claimNextTransitionLane());
	  return currentEventTransitionLane;
	}
	function coerceFormActionProp(actionProp) {
	  return null == actionProp ||
	    "symbol" === typeof actionProp ||
	    "boolean" === typeof actionProp
	    ? null
	    : "function" === typeof actionProp
	      ? actionProp
	      : sanitizeURL("" + actionProp);
	}
	function createFormDataWithSubmitter(form, submitter) {
	  var temp = submitter.ownerDocument.createElement("input");
	  temp.name = submitter.name;
	  temp.value = submitter.value;
	  form.id && temp.setAttribute("form", form.id);
	  submitter.parentNode.insertBefore(temp, submitter);
	  form = new FormData(form);
	  temp.parentNode.removeChild(temp);
	  return form;
	}
	function extractEvents$1(
	  dispatchQueue,
	  domEventName,
	  maybeTargetInst,
	  nativeEvent,
	  nativeEventTarget
	) {
	  if (
	    "submit" === domEventName &&
	    maybeTargetInst &&
	    maybeTargetInst.stateNode === nativeEventTarget
	  ) {
	    var action = coerceFormActionProp(
	        (nativeEventTarget[internalPropsKey] || null).action
	      ),
	      submitter = nativeEvent.submitter;
	    submitter &&
	      ((domEventName = (domEventName = submitter[internalPropsKey] || null)
	        ? coerceFormActionProp(domEventName.formAction)
	        : submitter.getAttribute("formAction")),
	      null !== domEventName && ((action = domEventName), (submitter = null)));
	    var event = new SyntheticEvent(
	      "action",
	      "action",
	      null,
	      nativeEvent,
	      nativeEventTarget
	    );
	    dispatchQueue.push({
	      event: event,
	      listeners: [
	        {
	          instance: null,
	          listener: function () {
	            if (nativeEvent.defaultPrevented) {
	              if (0 !== currentEventTransitionLane) {
	                var formData = submitter
	                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
	                  : new FormData(nativeEventTarget);
	                startHostTransition(
	                  maybeTargetInst,
	                  {
	                    pending: true,
	                    data: formData,
	                    method: nativeEventTarget.method,
	                    action: action
	                  },
	                  null,
	                  formData
	                );
	              }
	            } else
	              "function" === typeof action &&
	                (event.preventDefault(),
	                (formData = submitter
	                  ? createFormDataWithSubmitter(nativeEventTarget, submitter)
	                  : new FormData(nativeEventTarget)),
	                startHostTransition(
	                  maybeTargetInst,
	                  {
	                    pending: true,
	                    data: formData,
	                    method: nativeEventTarget.method,
	                    action: action
	                  },
	                  action,
	                  formData
	                ));
	          },
	          currentTarget: nativeEventTarget
	        }
	      ]
	    });
	  }
	}
	for (
	  var i$jscomp$inline_1528 = 0;
	  i$jscomp$inline_1528 < simpleEventPluginEvents.length;
	  i$jscomp$inline_1528++
	) {
	  var eventName$jscomp$inline_1529 =
	      simpleEventPluginEvents[i$jscomp$inline_1528],
	    domEventName$jscomp$inline_1530 =
	      eventName$jscomp$inline_1529.toLowerCase(),
	    capitalizedEvent$jscomp$inline_1531 =
	      eventName$jscomp$inline_1529[0].toUpperCase() +
	      eventName$jscomp$inline_1529.slice(1);
	  registerSimpleEvent(
	    domEventName$jscomp$inline_1530,
	    "on" + capitalizedEvent$jscomp$inline_1531
	  );
	}
	registerSimpleEvent(ANIMATION_END, "onAnimationEnd");
	registerSimpleEvent(ANIMATION_ITERATION, "onAnimationIteration");
	registerSimpleEvent(ANIMATION_START, "onAnimationStart");
	registerSimpleEvent("dblclick", "onDoubleClick");
	registerSimpleEvent("focusin", "onFocus");
	registerSimpleEvent("focusout", "onBlur");
	registerSimpleEvent(TRANSITION_RUN, "onTransitionRun");
	registerSimpleEvent(TRANSITION_START, "onTransitionStart");
	registerSimpleEvent(TRANSITION_CANCEL, "onTransitionCancel");
	registerSimpleEvent(TRANSITION_END, "onTransitionEnd");
	registerDirectEvent("onMouseEnter", ["mouseout", "mouseover"]);
	registerDirectEvent("onMouseLeave", ["mouseout", "mouseover"]);
	registerDirectEvent("onPointerEnter", ["pointerout", "pointerover"]);
	registerDirectEvent("onPointerLeave", ["pointerout", "pointerover"]);
	registerTwoPhaseEvent(
	  "onChange",
	  "change click focusin focusout input keydown keyup selectionchange".split(" ")
	);
	registerTwoPhaseEvent(
	  "onSelect",
	  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
	    " "
	  )
	);
	registerTwoPhaseEvent("onBeforeInput", [
	  "compositionend",
	  "keypress",
	  "textInput",
	  "paste"
	]);
	registerTwoPhaseEvent(
	  "onCompositionEnd",
	  "compositionend focusout keydown keypress keyup mousedown".split(" ")
	);
	registerTwoPhaseEvent(
	  "onCompositionStart",
	  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
	);
	registerTwoPhaseEvent(
	  "onCompositionUpdate",
	  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
	);
	var mediaEventTypes =
	    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
	      " "
	    ),
	  nonDelegatedEvents = new Set(
	    "beforetoggle cancel close invalid load scroll scrollend toggle"
	      .split(" ")
	      .concat(mediaEventTypes)
	  );
	function processDispatchQueue(dispatchQueue, eventSystemFlags) {
	  eventSystemFlags = 0 !== (eventSystemFlags & 4);
	  for (var i = 0; i < dispatchQueue.length; i++) {
	    var _dispatchQueue$i = dispatchQueue[i],
	      event = _dispatchQueue$i.event;
	    _dispatchQueue$i = _dispatchQueue$i.listeners;
	    a: {
	      var previousInstance = void 0;
	      if (eventSystemFlags)
	        for (
	          var i$jscomp$0 = _dispatchQueue$i.length - 1;
	          0 <= i$jscomp$0;
	          i$jscomp$0--
	        ) {
	          var _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0],
	            instance = _dispatchListeners$i.instance,
	            currentTarget = _dispatchListeners$i.currentTarget;
	          _dispatchListeners$i = _dispatchListeners$i.listener;
	          if (instance !== previousInstance && event.isPropagationStopped())
	            break a;
	          previousInstance = _dispatchListeners$i;
	          event.currentTarget = currentTarget;
	          try {
	            previousInstance(event);
	          } catch (error) {
	            reportGlobalError(error);
	          }
	          event.currentTarget = null;
	          previousInstance = instance;
	        }
	      else
	        for (
	          i$jscomp$0 = 0;
	          i$jscomp$0 < _dispatchQueue$i.length;
	          i$jscomp$0++
	        ) {
	          _dispatchListeners$i = _dispatchQueue$i[i$jscomp$0];
	          instance = _dispatchListeners$i.instance;
	          currentTarget = _dispatchListeners$i.currentTarget;
	          _dispatchListeners$i = _dispatchListeners$i.listener;
	          if (instance !== previousInstance && event.isPropagationStopped())
	            break a;
	          previousInstance = _dispatchListeners$i;
	          event.currentTarget = currentTarget;
	          try {
	            previousInstance(event);
	          } catch (error) {
	            reportGlobalError(error);
	          }
	          event.currentTarget = null;
	          previousInstance = instance;
	        }
	    }
	  }
	}
	function listenToNonDelegatedEvent(domEventName, targetElement) {
	  var JSCompiler_inline_result = targetElement[internalEventHandlersKey];
	  void 0 === JSCompiler_inline_result &&
	    (JSCompiler_inline_result = targetElement[internalEventHandlersKey] =
	      new Set());
	  var listenerSetKey = domEventName + "__bubble";
	  JSCompiler_inline_result.has(listenerSetKey) ||
	    (addTrappedEventListener(targetElement, domEventName, 2, false),
	    JSCompiler_inline_result.add(listenerSetKey));
	}
	function listenToNativeEvent(domEventName, isCapturePhaseListener, target) {
	  var eventSystemFlags = 0;
	  isCapturePhaseListener && (eventSystemFlags |= 4);
	  addTrappedEventListener(
	    target,
	    domEventName,
	    eventSystemFlags,
	    isCapturePhaseListener
	  );
	}
	var listeningMarker = "_reactListening" + Math.random().toString(36).slice(2);
	function listenToAllSupportedEvents(rootContainerElement) {
	  if (!rootContainerElement[listeningMarker]) {
	    rootContainerElement[listeningMarker] = true;
	    allNativeEvents.forEach(function (domEventName) {
	      "selectionchange" !== domEventName &&
	        (nonDelegatedEvents.has(domEventName) ||
	          listenToNativeEvent(domEventName, false, rootContainerElement),
	        listenToNativeEvent(domEventName, true, rootContainerElement));
	    });
	    var ownerDocument =
	      9 === rootContainerElement.nodeType
	        ? rootContainerElement
	        : rootContainerElement.ownerDocument;
	    null === ownerDocument ||
	      ownerDocument[listeningMarker] ||
	      ((ownerDocument[listeningMarker] = true),
	      listenToNativeEvent("selectionchange", false, ownerDocument));
	  }
	}
	function addTrappedEventListener(
	  targetContainer,
	  domEventName,
	  eventSystemFlags,
	  isCapturePhaseListener
	) {
	  switch (getEventPriority(domEventName)) {
	    case 2:
	      var listenerWrapper = dispatchDiscreteEvent;
	      break;
	    case 8:
	      listenerWrapper = dispatchContinuousEvent;
	      break;
	    default:
	      listenerWrapper = dispatchEvent;
	  }
	  eventSystemFlags = listenerWrapper.bind(
	    null,
	    domEventName,
	    eventSystemFlags,
	    targetContainer
	  );
	  listenerWrapper = void 0;
	  !passiveBrowserEventsSupported ||
	    ("touchstart" !== domEventName &&
	      "touchmove" !== domEventName &&
	      "wheel" !== domEventName) ||
	    (listenerWrapper = true);
	  isCapturePhaseListener
	    ? void 0 !== listenerWrapper
	      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
	          capture: true,
	          passive: listenerWrapper
	        })
	      : targetContainer.addEventListener(domEventName, eventSystemFlags, true)
	    : void 0 !== listenerWrapper
	      ? targetContainer.addEventListener(domEventName, eventSystemFlags, {
	          passive: listenerWrapper
	        })
	      : targetContainer.addEventListener(domEventName, eventSystemFlags, false);
	}
	function dispatchEventForPluginEventSystem(
	  domEventName,
	  eventSystemFlags,
	  nativeEvent,
	  targetInst$jscomp$0,
	  targetContainer
	) {
	  var ancestorInst = targetInst$jscomp$0;
	  if (
	    0 === (eventSystemFlags & 1) &&
	    0 === (eventSystemFlags & 2) &&
	    null !== targetInst$jscomp$0
	  )
	    a: for (;;) {
	      if (null === targetInst$jscomp$0) return;
	      var nodeTag = targetInst$jscomp$0.tag;
	      if (3 === nodeTag || 4 === nodeTag) {
	        var container = targetInst$jscomp$0.stateNode.containerInfo;
	        if (container === targetContainer) break;
	        if (4 === nodeTag)
	          for (nodeTag = targetInst$jscomp$0.return; null !== nodeTag; ) {
	            var grandTag = nodeTag.tag;
	            if (
	              (3 === grandTag || 4 === grandTag) &&
	              nodeTag.stateNode.containerInfo === targetContainer
	            )
	              return;
	            nodeTag = nodeTag.return;
	          }
	        for (; null !== container; ) {
	          nodeTag = getClosestInstanceFromNode(container);
	          if (null === nodeTag) return;
	          grandTag = nodeTag.tag;
	          if (
	            5 === grandTag ||
	            6 === grandTag ||
	            26 === grandTag ||
	            27 === grandTag
	          ) {
	            targetInst$jscomp$0 = ancestorInst = nodeTag;
	            continue a;
	          }
	          container = container.parentNode;
	        }
	      }
	      targetInst$jscomp$0 = targetInst$jscomp$0.return;
	    }
	  batchedUpdates$1(function () {
	    var targetInst = ancestorInst,
	      nativeEventTarget = getEventTarget(nativeEvent),
	      dispatchQueue = [];
	    a: {
	      var reactName = topLevelEventsToReactNames.get(domEventName);
	      if (void 0 !== reactName) {
	        var SyntheticEventCtor = SyntheticEvent,
	          reactEventType = domEventName;
	        switch (domEventName) {
	          case "keypress":
	            if (0 === getEventCharCode(nativeEvent)) break a;
	          case "keydown":
	          case "keyup":
	            SyntheticEventCtor = SyntheticKeyboardEvent;
	            break;
	          case "focusin":
	            reactEventType = "focus";
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "focusout":
	            reactEventType = "blur";
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "beforeblur":
	          case "afterblur":
	            SyntheticEventCtor = SyntheticFocusEvent;
	            break;
	          case "click":
	            if (2 === nativeEvent.button) break a;
	          case "auxclick":
	          case "dblclick":
	          case "mousedown":
	          case "mousemove":
	          case "mouseup":
	          case "mouseout":
	          case "mouseover":
	          case "contextmenu":
	            SyntheticEventCtor = SyntheticMouseEvent;
	            break;
	          case "drag":
	          case "dragend":
	          case "dragenter":
	          case "dragexit":
	          case "dragleave":
	          case "dragover":
	          case "dragstart":
	          case "drop":
	            SyntheticEventCtor = SyntheticDragEvent;
	            break;
	          case "touchcancel":
	          case "touchend":
	          case "touchmove":
	          case "touchstart":
	            SyntheticEventCtor = SyntheticTouchEvent;
	            break;
	          case ANIMATION_END:
	          case ANIMATION_ITERATION:
	          case ANIMATION_START:
	            SyntheticEventCtor = SyntheticAnimationEvent;
	            break;
	          case TRANSITION_END:
	            SyntheticEventCtor = SyntheticTransitionEvent;
	            break;
	          case "scroll":
	          case "scrollend":
	            SyntheticEventCtor = SyntheticUIEvent;
	            break;
	          case "wheel":
	            SyntheticEventCtor = SyntheticWheelEvent;
	            break;
	          case "copy":
	          case "cut":
	          case "paste":
	            SyntheticEventCtor = SyntheticClipboardEvent;
	            break;
	          case "gotpointercapture":
	          case "lostpointercapture":
	          case "pointercancel":
	          case "pointerdown":
	          case "pointermove":
	          case "pointerout":
	          case "pointerover":
	          case "pointerup":
	            SyntheticEventCtor = SyntheticPointerEvent;
	            break;
	          case "toggle":
	          case "beforetoggle":
	            SyntheticEventCtor = SyntheticToggleEvent;
	        }
	        var inCapturePhase = 0 !== (eventSystemFlags & 4),
	          accumulateTargetOnly =
	            !inCapturePhase &&
	            ("scroll" === domEventName || "scrollend" === domEventName),
	          reactEventName = inCapturePhase
	            ? null !== reactName
	              ? reactName + "Capture"
	              : null
	            : reactName;
	        inCapturePhase = [];
	        for (
	          var instance = targetInst, lastHostComponent;
	          null !== instance;

	        ) {
	          var _instance = instance;
	          lastHostComponent = _instance.stateNode;
	          _instance = _instance.tag;
	          (5 !== _instance && 26 !== _instance && 27 !== _instance) ||
	            null === lastHostComponent ||
	            null === reactEventName ||
	            ((_instance = getListener(instance, reactEventName)),
	            null != _instance &&
	              inCapturePhase.push(
	                createDispatchListener(instance, _instance, lastHostComponent)
	              ));
	          if (accumulateTargetOnly) break;
	          instance = instance.return;
	        }
	        0 < inCapturePhase.length &&
	          ((reactName = new SyntheticEventCtor(
	            reactName,
	            reactEventType,
	            null,
	            nativeEvent,
	            nativeEventTarget
	          )),
	          dispatchQueue.push({ event: reactName, listeners: inCapturePhase }));
	      }
	    }
	    if (0 === (eventSystemFlags & 7)) {
	      a: {
	        reactName =
	          "mouseover" === domEventName || "pointerover" === domEventName;
	        SyntheticEventCtor =
	          "mouseout" === domEventName || "pointerout" === domEventName;
	        if (
	          reactName &&
	          nativeEvent !== currentReplayingEvent &&
	          (reactEventType =
	            nativeEvent.relatedTarget || nativeEvent.fromElement) &&
	          (getClosestInstanceFromNode(reactEventType) ||
	            reactEventType[internalContainerInstanceKey])
	        )
	          break a;
	        if (SyntheticEventCtor || reactName) {
	          reactName =
	            nativeEventTarget.window === nativeEventTarget
	              ? nativeEventTarget
	              : (reactName = nativeEventTarget.ownerDocument)
	                ? reactName.defaultView || reactName.parentWindow
	                : window;
	          if (SyntheticEventCtor) {
	            if (
	              ((reactEventType =
	                nativeEvent.relatedTarget || nativeEvent.toElement),
	              (SyntheticEventCtor = targetInst),
	              (reactEventType = reactEventType
	                ? getClosestInstanceFromNode(reactEventType)
	                : null),
	              null !== reactEventType &&
	                ((accumulateTargetOnly =
	                  getNearestMountedFiber(reactEventType)),
	                (inCapturePhase = reactEventType.tag),
	                reactEventType !== accumulateTargetOnly ||
	                  (5 !== inCapturePhase &&
	                    27 !== inCapturePhase &&
	                    6 !== inCapturePhase)))
	            )
	              reactEventType = null;
	          } else (SyntheticEventCtor = null), (reactEventType = targetInst);
	          if (SyntheticEventCtor !== reactEventType) {
	            inCapturePhase = SyntheticMouseEvent;
	            _instance = "onMouseLeave";
	            reactEventName = "onMouseEnter";
	            instance = "mouse";
	            if ("pointerout" === domEventName || "pointerover" === domEventName)
	              (inCapturePhase = SyntheticPointerEvent),
	                (_instance = "onPointerLeave"),
	                (reactEventName = "onPointerEnter"),
	                (instance = "pointer");
	            accumulateTargetOnly =
	              null == SyntheticEventCtor
	                ? reactName
	                : getNodeFromInstance(SyntheticEventCtor);
	            lastHostComponent =
	              null == reactEventType
	                ? reactName
	                : getNodeFromInstance(reactEventType);
	            reactName = new inCapturePhase(
	              _instance,
	              instance + "leave",
	              SyntheticEventCtor,
	              nativeEvent,
	              nativeEventTarget
	            );
	            reactName.target = accumulateTargetOnly;
	            reactName.relatedTarget = lastHostComponent;
	            _instance = null;
	            getClosestInstanceFromNode(nativeEventTarget) === targetInst &&
	              ((inCapturePhase = new inCapturePhase(
	                reactEventName,
	                instance + "enter",
	                reactEventType,
	                nativeEvent,
	                nativeEventTarget
	              )),
	              (inCapturePhase.target = lastHostComponent),
	              (inCapturePhase.relatedTarget = accumulateTargetOnly),
	              (_instance = inCapturePhase));
	            accumulateTargetOnly = _instance;
	            if (SyntheticEventCtor && reactEventType)
	              b: {
	                inCapturePhase = SyntheticEventCtor;
	                reactEventName = reactEventType;
	                instance = 0;
	                for (
	                  lastHostComponent = inCapturePhase;
	                  lastHostComponent;
	                  lastHostComponent = getParent(lastHostComponent)
	                )
	                  instance++;
	                lastHostComponent = 0;
	                for (
	                  _instance = reactEventName;
	                  _instance;
	                  _instance = getParent(_instance)
	                )
	                  lastHostComponent++;
	                for (; 0 < instance - lastHostComponent; )
	                  (inCapturePhase = getParent(inCapturePhase)), instance--;
	                for (; 0 < lastHostComponent - instance; )
	                  (reactEventName = getParent(reactEventName)),
	                    lastHostComponent--;
	                for (; instance--; ) {
	                  if (
	                    inCapturePhase === reactEventName ||
	                    (null !== reactEventName &&
	                      inCapturePhase === reactEventName.alternate)
	                  )
	                    break b;
	                  inCapturePhase = getParent(inCapturePhase);
	                  reactEventName = getParent(reactEventName);
	                }
	                inCapturePhase = null;
	              }
	            else inCapturePhase = null;
	            null !== SyntheticEventCtor &&
	              accumulateEnterLeaveListenersForEvent(
	                dispatchQueue,
	                reactName,
	                SyntheticEventCtor,
	                inCapturePhase,
	                !1
	              );
	            null !== reactEventType &&
	              null !== accumulateTargetOnly &&
	              accumulateEnterLeaveListenersForEvent(
	                dispatchQueue,
	                accumulateTargetOnly,
	                reactEventType,
	                inCapturePhase,
	                !0
	              );
	          }
	        }
	      }
	      a: {
	        reactName = targetInst ? getNodeFromInstance(targetInst) : window;
	        SyntheticEventCtor =
	          reactName.nodeName && reactName.nodeName.toLowerCase();
	        if (
	          "select" === SyntheticEventCtor ||
	          ("input" === SyntheticEventCtor && "file" === reactName.type)
	        )
	          var getTargetInstFunc = getTargetInstForChangeEvent;
	        else if (isTextInputElement(reactName))
	          if (isInputEventSupported)
	            getTargetInstFunc = getTargetInstForInputOrChangeEvent;
	          else {
	            getTargetInstFunc = getTargetInstForInputEventPolyfill;
	            var handleEventFunc = handleEventsForInputEventPolyfill;
	          }
	        else
	          (SyntheticEventCtor = reactName.nodeName),
	            !SyntheticEventCtor ||
	            "input" !== SyntheticEventCtor.toLowerCase() ||
	            ("checkbox" !== reactName.type && "radio" !== reactName.type)
	              ? targetInst &&
	                isCustomElement(targetInst.elementType) &&
	                (getTargetInstFunc = getTargetInstForChangeEvent)
	              : (getTargetInstFunc = getTargetInstForClickEvent);
	        if (
	          getTargetInstFunc &&
	          (getTargetInstFunc = getTargetInstFunc(domEventName, targetInst))
	        ) {
	          createAndAccumulateChangeEvent(
	            dispatchQueue,
	            getTargetInstFunc,
	            nativeEvent,
	            nativeEventTarget
	          );
	          break a;
	        }
	        handleEventFunc && handleEventFunc(domEventName, reactName, targetInst);
	        "focusout" === domEventName &&
	          targetInst &&
	          "number" === reactName.type &&
	          null != targetInst.memoizedProps.value &&
	          setDefaultValue(reactName, "number", reactName.value);
	      }
	      handleEventFunc = targetInst ? getNodeFromInstance(targetInst) : window;
	      switch (domEventName) {
	        case "focusin":
	          if (
	            isTextInputElement(handleEventFunc) ||
	            "true" === handleEventFunc.contentEditable
	          )
	            (activeElement = handleEventFunc),
	              (activeElementInst = targetInst),
	              (lastSelection = null);
	          break;
	        case "focusout":
	          lastSelection = activeElementInst = activeElement = null;
	          break;
	        case "mousedown":
	          mouseDown = !0;
	          break;
	        case "contextmenu":
	        case "mouseup":
	        case "dragend":
	          mouseDown = !1;
	          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
	          break;
	        case "selectionchange":
	          if (skipSelectionChangeEvent) break;
	        case "keydown":
	        case "keyup":
	          constructSelectEvent(dispatchQueue, nativeEvent, nativeEventTarget);
	      }
	      var fallbackData;
	      if (canUseCompositionEvent)
	        b: {
	          switch (domEventName) {
	            case "compositionstart":
	              var eventType = "onCompositionStart";
	              break b;
	            case "compositionend":
	              eventType = "onCompositionEnd";
	              break b;
	            case "compositionupdate":
	              eventType = "onCompositionUpdate";
	              break b;
	          }
	          eventType = void 0;
	        }
	      else
	        isComposing
	          ? isFallbackCompositionEnd(domEventName, nativeEvent) &&
	            (eventType = "onCompositionEnd")
	          : "keydown" === domEventName &&
	            229 === nativeEvent.keyCode &&
	            (eventType = "onCompositionStart");
	      eventType &&
	        (useFallbackCompositionData &&
	          "ko" !== nativeEvent.locale &&
	          (isComposing || "onCompositionStart" !== eventType
	            ? "onCompositionEnd" === eventType &&
	              isComposing &&
	              (fallbackData = getData())
	            : ((root = nativeEventTarget),
	              (startText = "value" in root ? root.value : root.textContent),
	              (isComposing = !0))),
	        (handleEventFunc = accumulateTwoPhaseListeners(targetInst, eventType)),
	        0 < handleEventFunc.length &&
	          ((eventType = new SyntheticCompositionEvent(
	            eventType,
	            domEventName,
	            null,
	            nativeEvent,
	            nativeEventTarget
	          )),
	          dispatchQueue.push({ event: eventType, listeners: handleEventFunc }),
	          fallbackData
	            ? (eventType.data = fallbackData)
	            : ((fallbackData = getDataFromCustomEvent(nativeEvent)),
	              null !== fallbackData && (eventType.data = fallbackData))));
	      if (
	        (fallbackData = canUseTextInputEvent
	          ? getNativeBeforeInputChars(domEventName, nativeEvent)
	          : getFallbackBeforeInputChars(domEventName, nativeEvent))
	      )
	        (eventType = accumulateTwoPhaseListeners(targetInst, "onBeforeInput")),
	          0 < eventType.length &&
	            ((handleEventFunc = new SyntheticCompositionEvent(
	              "onBeforeInput",
	              "beforeinput",
	              null,
	              nativeEvent,
	              nativeEventTarget
	            )),
	            dispatchQueue.push({
	              event: handleEventFunc,
	              listeners: eventType
	            }),
	            (handleEventFunc.data = fallbackData));
	      extractEvents$1(
	        dispatchQueue,
	        domEventName,
	        targetInst,
	        nativeEvent,
	        nativeEventTarget
	      );
	    }
	    processDispatchQueue(dispatchQueue, eventSystemFlags);
	  });
	}
	function createDispatchListener(instance, listener, currentTarget) {
	  return {
	    instance: instance,
	    listener: listener,
	    currentTarget: currentTarget
	  };
	}
	function accumulateTwoPhaseListeners(targetFiber, reactName) {
	  for (
	    var captureName = reactName + "Capture", listeners = [];
	    null !== targetFiber;

	  ) {
	    var _instance2 = targetFiber,
	      stateNode = _instance2.stateNode;
	    _instance2 = _instance2.tag;
	    (5 !== _instance2 && 26 !== _instance2 && 27 !== _instance2) ||
	      null === stateNode ||
	      ((_instance2 = getListener(targetFiber, captureName)),
	      null != _instance2 &&
	        listeners.unshift(
	          createDispatchListener(targetFiber, _instance2, stateNode)
	        ),
	      (_instance2 = getListener(targetFiber, reactName)),
	      null != _instance2 &&
	        listeners.push(
	          createDispatchListener(targetFiber, _instance2, stateNode)
	        ));
	    if (3 === targetFiber.tag) return listeners;
	    targetFiber = targetFiber.return;
	  }
	  return [];
	}
	function getParent(inst) {
	  if (null === inst) return null;
	  do inst = inst.return;
	  while (inst && 5 !== inst.tag && 27 !== inst.tag);
	  return inst ? inst : null;
	}
	function accumulateEnterLeaveListenersForEvent(
	  dispatchQueue,
	  event,
	  target,
	  common,
	  inCapturePhase
	) {
	  for (
	    var registrationName = event._reactName, listeners = [];
	    null !== target && target !== common;

	  ) {
	    var _instance3 = target,
	      alternate = _instance3.alternate,
	      stateNode = _instance3.stateNode;
	    _instance3 = _instance3.tag;
	    if (null !== alternate && alternate === common) break;
	    (5 !== _instance3 && 26 !== _instance3 && 27 !== _instance3) ||
	      null === stateNode ||
	      ((alternate = stateNode),
	      inCapturePhase
	        ? ((stateNode = getListener(target, registrationName)),
	          null != stateNode &&
	            listeners.unshift(
	              createDispatchListener(target, stateNode, alternate)
	            ))
	        : inCapturePhase ||
	          ((stateNode = getListener(target, registrationName)),
	          null != stateNode &&
	            listeners.push(
	              createDispatchListener(target, stateNode, alternate)
	            )));
	    target = target.return;
	  }
	  0 !== listeners.length &&
	    dispatchQueue.push({ event: event, listeners: listeners });
	}
	var NORMALIZE_NEWLINES_REGEX = /\r\n?/g,
	  NORMALIZE_NULL_AND_REPLACEMENT_REGEX = /\u0000|\uFFFD/g;
	function normalizeMarkupForTextOrAttribute(markup) {
	  return ("string" === typeof markup ? markup : "" + markup)
	    .replace(NORMALIZE_NEWLINES_REGEX, "\n")
	    .replace(NORMALIZE_NULL_AND_REPLACEMENT_REGEX, "");
	}
	function checkForUnmatchedText(serverText, clientText) {
	  clientText = normalizeMarkupForTextOrAttribute(clientText);
	  return normalizeMarkupForTextOrAttribute(serverText) === clientText ? true : false;
	}
	function noop$1() {}
	function setProp(domElement, tag, key, value, props, prevValue) {
	  switch (key) {
	    case "children":
	      "string" === typeof value
	        ? "body" === tag ||
	          ("textarea" === tag && "" === value) ||
	          setTextContent(domElement, value)
	        : ("number" === typeof value || "bigint" === typeof value) &&
	          "body" !== tag &&
	          setTextContent(domElement, "" + value);
	      break;
	    case "className":
	      setValueForKnownAttribute(domElement, "class", value);
	      break;
	    case "tabIndex":
	      setValueForKnownAttribute(domElement, "tabindex", value);
	      break;
	    case "dir":
	    case "role":
	    case "viewBox":
	    case "width":
	    case "height":
	      setValueForKnownAttribute(domElement, key, value);
	      break;
	    case "style":
	      setValueForStyles(domElement, value, prevValue);
	      break;
	    case "data":
	      if ("object" !== tag) {
	        setValueForKnownAttribute(domElement, "data", value);
	        break;
	      }
	    case "src":
	    case "href":
	      if ("" === value && ("a" !== tag || "href" !== key)) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      if (
	        null == value ||
	        "function" === typeof value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      ) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      value = sanitizeURL("" + value);
	      domElement.setAttribute(key, value);
	      break;
	    case "action":
	    case "formAction":
	      if ("function" === typeof value) {
	        domElement.setAttribute(
	          key,
	          "javascript:throw new Error('A React form was unexpectedly submitted. If you called form.submit() manually, consider using form.requestSubmit() instead. If you\\'re trying to use event.stopPropagation() in a submit event handler, consider also calling event.preventDefault().')"
	        );
	        break;
	      } else
	        "function" === typeof prevValue &&
	          ("formAction" === key
	            ? ("input" !== tag &&
	                setProp(domElement, tag, "name", props.name, props, null),
	              setProp(
	                domElement,
	                tag,
	                "formEncType",
	                props.formEncType,
	                props,
	                null
	              ),
	              setProp(
	                domElement,
	                tag,
	                "formMethod",
	                props.formMethod,
	                props,
	                null
	              ),
	              setProp(
	                domElement,
	                tag,
	                "formTarget",
	                props.formTarget,
	                props,
	                null
	              ))
	            : (setProp(domElement, tag, "encType", props.encType, props, null),
	              setProp(domElement, tag, "method", props.method, props, null),
	              setProp(domElement, tag, "target", props.target, props, null)));
	      if (
	        null == value ||
	        "symbol" === typeof value ||
	        "boolean" === typeof value
	      ) {
	        domElement.removeAttribute(key);
	        break;
	      }
	      value = sanitizeURL("" + value);
	      domElement.setAttribute(key, value);
	      break;
	    case "onClick":
	      null != value && (domElement.onclick = noop$1);
	      break;
	    case "onScroll":
	      null != value && listenToNonDelegatedEvent("scroll", domElement);
	      break;
	    case "onScrollEnd":
	      null != value && listenToNonDelegatedEvent("scrollend", domElement);
	      break;
	    case "dangerouslySetInnerHTML":
	      if (null != value) {
	        if ("object" !== typeof value || !("__html" in value))
	          throw Error(formatProdErrorMessage(61));
	        key = value.__html;
	        if (null != key) {
	          if (null != props.children) throw Error(formatProdErrorMessage(60));
	          domElement.innerHTML = key;
	        }
	      }
	      break;
	    case "multiple":
	      domElement.multiple =
	        value && "function" !== typeof value && "symbol" !== typeof value;
	      break;
	    case "muted":
	      domElement.muted =
	        value && "function" !== typeof value && "symbol" !== typeof value;
	      break;
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "defaultValue":
	    case "defaultChecked":
	    case "innerHTML":
	    case "ref":
	      break;
	    case "autoFocus":
	      break;
	    case "xlinkHref":
	      if (
	        null == value ||
	        "function" === typeof value ||
	        "boolean" === typeof value ||
	        "symbol" === typeof value
	      ) {
	        domElement.removeAttribute("xlink:href");
	        break;
	      }
	      key = sanitizeURL("" + value);
	      domElement.setAttributeNS(
	        "http://www.w3.org/1999/xlink",
	        "xlink:href",
	        key
	      );
	      break;
	    case "contentEditable":
	    case "spellCheck":
	    case "draggable":
	    case "value":
	    case "autoReverse":
	    case "externalResourcesRequired":
	    case "focusable":
	    case "preserveAlpha":
	      null != value && "function" !== typeof value && "symbol" !== typeof value
	        ? domElement.setAttribute(key, "" + value)
	        : domElement.removeAttribute(key);
	      break;
	    case "inert":
	    case "allowFullScreen":
	    case "async":
	    case "autoPlay":
	    case "controls":
	    case "default":
	    case "defer":
	    case "disabled":
	    case "disablePictureInPicture":
	    case "disableRemotePlayback":
	    case "formNoValidate":
	    case "hidden":
	    case "loop":
	    case "noModule":
	    case "noValidate":
	    case "open":
	    case "playsInline":
	    case "readOnly":
	    case "required":
	    case "reversed":
	    case "scoped":
	    case "seamless":
	    case "itemScope":
	      value && "function" !== typeof value && "symbol" !== typeof value
	        ? domElement.setAttribute(key, "")
	        : domElement.removeAttribute(key);
	      break;
	    case "capture":
	    case "download":
	      true === value
	        ? domElement.setAttribute(key, "")
	        : false !== value &&
	            null != value &&
	            "function" !== typeof value &&
	            "symbol" !== typeof value
	          ? domElement.setAttribute(key, value)
	          : domElement.removeAttribute(key);
	      break;
	    case "cols":
	    case "rows":
	    case "size":
	    case "span":
	      null != value &&
	      "function" !== typeof value &&
	      "symbol" !== typeof value &&
	      !isNaN(value) &&
	      1 <= value
	        ? domElement.setAttribute(key, value)
	        : domElement.removeAttribute(key);
	      break;
	    case "rowSpan":
	    case "start":
	      null == value ||
	      "function" === typeof value ||
	      "symbol" === typeof value ||
	      isNaN(value)
	        ? domElement.removeAttribute(key)
	        : domElement.setAttribute(key, value);
	      break;
	    case "popover":
	      listenToNonDelegatedEvent("beforetoggle", domElement);
	      listenToNonDelegatedEvent("toggle", domElement);
	      setValueForAttribute(domElement, "popover", value);
	      break;
	    case "xlinkActuate":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:actuate",
	        value
	      );
	      break;
	    case "xlinkArcrole":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:arcrole",
	        value
	      );
	      break;
	    case "xlinkRole":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:role",
	        value
	      );
	      break;
	    case "xlinkShow":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:show",
	        value
	      );
	      break;
	    case "xlinkTitle":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:title",
	        value
	      );
	      break;
	    case "xlinkType":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/1999/xlink",
	        "xlink:type",
	        value
	      );
	      break;
	    case "xmlBase":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:base",
	        value
	      );
	      break;
	    case "xmlLang":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:lang",
	        value
	      );
	      break;
	    case "xmlSpace":
	      setValueForNamespacedAttribute(
	        domElement,
	        "http://www.w3.org/XML/1998/namespace",
	        "xml:space",
	        value
	      );
	      break;
	    case "is":
	      setValueForAttribute(domElement, "is", value);
	      break;
	    case "innerText":
	    case "textContent":
	      break;
	    default:
	      if (
	        !(2 < key.length) ||
	        ("o" !== key[0] && "O" !== key[0]) ||
	        ("n" !== key[1] && "N" !== key[1])
	      )
	        (key = aliases.get(key) || key),
	          setValueForAttribute(domElement, key, value);
	  }
	}
	function setPropOnCustomElement(domElement, tag, key, value, props, prevValue) {
	  switch (key) {
	    case "style":
	      setValueForStyles(domElement, value, prevValue);
	      break;
	    case "dangerouslySetInnerHTML":
	      if (null != value) {
	        if ("object" !== typeof value || !("__html" in value))
	          throw Error(formatProdErrorMessage(61));
	        key = value.__html;
	        if (null != key) {
	          if (null != props.children) throw Error(formatProdErrorMessage(60));
	          domElement.innerHTML = key;
	        }
	      }
	      break;
	    case "children":
	      "string" === typeof value
	        ? setTextContent(domElement, value)
	        : ("number" === typeof value || "bigint" === typeof value) &&
	          setTextContent(domElement, "" + value);
	      break;
	    case "onScroll":
	      null != value && listenToNonDelegatedEvent("scroll", domElement);
	      break;
	    case "onScrollEnd":
	      null != value && listenToNonDelegatedEvent("scrollend", domElement);
	      break;
	    case "onClick":
	      null != value && (domElement.onclick = noop$1);
	      break;
	    case "suppressContentEditableWarning":
	    case "suppressHydrationWarning":
	    case "innerHTML":
	    case "ref":
	      break;
	    case "innerText":
	    case "textContent":
	      break;
	    default:
	      if (!registrationNameDependencies.hasOwnProperty(key))
	        a: {
	          if (
	            "o" === key[0] &&
	            "n" === key[1] &&
	            ((props = key.endsWith("Capture")),
	            (tag = key.slice(2, props ? key.length - 7 : void 0)),
	            (prevValue = domElement[internalPropsKey] || null),
	            (prevValue = null != prevValue ? prevValue[key] : null),
	            "function" === typeof prevValue &&
	              domElement.removeEventListener(tag, prevValue, props),
	            "function" === typeof value)
	          ) {
	            "function" !== typeof prevValue &&
	              null !== prevValue &&
	              (key in domElement
	                ? (domElement[key] = null)
	                : domElement.hasAttribute(key) &&
	                  domElement.removeAttribute(key));
	            domElement.addEventListener(tag, value, props);
	            break a;
	          }
	          key in domElement
	            ? (domElement[key] = value)
	            : true === value
	              ? domElement.setAttribute(key, "")
	              : setValueForAttribute(domElement, key, value);
	        }
	  }
	}
	function setInitialProperties(domElement, tag, props) {
	  switch (tag) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	    case "a":
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "img":
	      listenToNonDelegatedEvent("error", domElement);
	      listenToNonDelegatedEvent("load", domElement);
	      var hasSrc = false,
	        hasSrcSet = false,
	        propKey;
	      for (propKey in props)
	        if (props.hasOwnProperty(propKey)) {
	          var propValue = props[propKey];
	          if (null != propValue)
	            switch (propKey) {
	              case "src":
	                hasSrc = true;
	                break;
	              case "srcSet":
	                hasSrcSet = true;
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                throw Error(formatProdErrorMessage(137, tag));
	              default:
	                setProp(domElement, tag, propKey, propValue, props, null);
	            }
	        }
	      hasSrcSet &&
	        setProp(domElement, tag, "srcSet", props.srcSet, props, null);
	      hasSrc && setProp(domElement, tag, "src", props.src, props, null);
	      return;
	    case "input":
	      listenToNonDelegatedEvent("invalid", domElement);
	      var defaultValue = (propKey = propValue = hasSrcSet = null),
	        checked = null,
	        defaultChecked = null;
	      for (hasSrc in props)
	        if (props.hasOwnProperty(hasSrc)) {
	          var propValue$188 = props[hasSrc];
	          if (null != propValue$188)
	            switch (hasSrc) {
	              case "name":
	                hasSrcSet = propValue$188;
	                break;
	              case "type":
	                propValue = propValue$188;
	                break;
	              case "checked":
	                checked = propValue$188;
	                break;
	              case "defaultChecked":
	                defaultChecked = propValue$188;
	                break;
	              case "value":
	                propKey = propValue$188;
	                break;
	              case "defaultValue":
	                defaultValue = propValue$188;
	                break;
	              case "children":
	              case "dangerouslySetInnerHTML":
	                if (null != propValue$188)
	                  throw Error(formatProdErrorMessage(137, tag));
	                break;
	              default:
	                setProp(domElement, tag, hasSrc, propValue$188, props, null);
	            }
	        }
	      initInput(
	        domElement,
	        propKey,
	        defaultValue,
	        checked,
	        defaultChecked,
	        propValue,
	        hasSrcSet,
	        false
	      );
	      track(domElement);
	      return;
	    case "select":
	      listenToNonDelegatedEvent("invalid", domElement);
	      hasSrc = propValue = propKey = null;
	      for (hasSrcSet in props)
	        if (
	          props.hasOwnProperty(hasSrcSet) &&
	          ((defaultValue = props[hasSrcSet]), null != defaultValue)
	        )
	          switch (hasSrcSet) {
	            case "value":
	              propKey = defaultValue;
	              break;
	            case "defaultValue":
	              propValue = defaultValue;
	              break;
	            case "multiple":
	              hasSrc = defaultValue;
	            default:
	              setProp(domElement, tag, hasSrcSet, defaultValue, props, null);
	          }
	      tag = propKey;
	      props = propValue;
	      domElement.multiple = !!hasSrc;
	      null != tag
	        ? updateOptions(domElement, !!hasSrc, tag, false)
	        : null != props && updateOptions(domElement, !!hasSrc, props, true);
	      return;
	    case "textarea":
	      listenToNonDelegatedEvent("invalid", domElement);
	      propKey = hasSrcSet = hasSrc = null;
	      for (propValue in props)
	        if (
	          props.hasOwnProperty(propValue) &&
	          ((defaultValue = props[propValue]), null != defaultValue)
	        )
	          switch (propValue) {
	            case "value":
	              hasSrc = defaultValue;
	              break;
	            case "defaultValue":
	              hasSrcSet = defaultValue;
	              break;
	            case "children":
	              propKey = defaultValue;
	              break;
	            case "dangerouslySetInnerHTML":
	              if (null != defaultValue) throw Error(formatProdErrorMessage(91));
	              break;
	            default:
	              setProp(domElement, tag, propValue, defaultValue, props, null);
	          }
	      initTextarea(domElement, hasSrc, hasSrcSet, propKey);
	      track(domElement);
	      return;
	    case "option":
	      for (checked in props)
	        if (
	          props.hasOwnProperty(checked) &&
	          ((hasSrc = props[checked]), null != hasSrc)
	        )
	          switch (checked) {
	            case "selected":
	              domElement.selected =
	                hasSrc &&
	                "function" !== typeof hasSrc &&
	                "symbol" !== typeof hasSrc;
	              break;
	            default:
	              setProp(domElement, tag, checked, hasSrc, props, null);
	          }
	      return;
	    case "dialog":
	      listenToNonDelegatedEvent("beforetoggle", domElement);
	      listenToNonDelegatedEvent("toggle", domElement);
	      listenToNonDelegatedEvent("cancel", domElement);
	      listenToNonDelegatedEvent("close", domElement);
	      break;
	    case "iframe":
	    case "object":
	      listenToNonDelegatedEvent("load", domElement);
	      break;
	    case "video":
	    case "audio":
	      for (hasSrc = 0; hasSrc < mediaEventTypes.length; hasSrc++)
	        listenToNonDelegatedEvent(mediaEventTypes[hasSrc], domElement);
	      break;
	    case "image":
	      listenToNonDelegatedEvent("error", domElement);
	      listenToNonDelegatedEvent("load", domElement);
	      break;
	    case "details":
	      listenToNonDelegatedEvent("toggle", domElement);
	      break;
	    case "embed":
	    case "source":
	    case "link":
	      listenToNonDelegatedEvent("error", domElement),
	        listenToNonDelegatedEvent("load", domElement);
	    case "area":
	    case "base":
	    case "br":
	    case "col":
	    case "hr":
	    case "keygen":
	    case "meta":
	    case "param":
	    case "track":
	    case "wbr":
	    case "menuitem":
	      for (defaultChecked in props)
	        if (
	          props.hasOwnProperty(defaultChecked) &&
	          ((hasSrc = props[defaultChecked]), null != hasSrc)
	        )
	          switch (defaultChecked) {
	            case "children":
	            case "dangerouslySetInnerHTML":
	              throw Error(formatProdErrorMessage(137, tag));
	            default:
	              setProp(domElement, tag, defaultChecked, hasSrc, props, null);
	          }
	      return;
	    default:
	      if (isCustomElement(tag)) {
	        for (propValue$188 in props)
	          props.hasOwnProperty(propValue$188) &&
	            ((hasSrc = props[propValue$188]),
	            void 0 !== hasSrc &&
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                propValue$188,
	                hasSrc,
	                props,
	                void 0
	              ));
	        return;
	      }
	  }
	  for (defaultValue in props)
	    props.hasOwnProperty(defaultValue) &&
	      ((hasSrc = props[defaultValue]),
	      null != hasSrc &&
	        setProp(domElement, tag, defaultValue, hasSrc, props, null));
	}
	function updateProperties(domElement, tag, lastProps, nextProps) {
	  switch (tag) {
	    case "div":
	    case "span":
	    case "svg":
	    case "path":
	    case "a":
	    case "g":
	    case "p":
	    case "li":
	      break;
	    case "input":
	      var name = null,
	        type = null,
	        value = null,
	        defaultValue = null,
	        lastDefaultValue = null,
	        checked = null,
	        defaultChecked = null;
	      for (propKey in lastProps) {
	        var lastProp = lastProps[propKey];
	        if (lastProps.hasOwnProperty(propKey) && null != lastProp)
	          switch (propKey) {
	            case "checked":
	              break;
	            case "value":
	              break;
	            case "defaultValue":
	              lastDefaultValue = lastProp;
	            default:
	              nextProps.hasOwnProperty(propKey) ||
	                setProp(domElement, tag, propKey, null, nextProps, lastProp);
	          }
	      }
	      for (var propKey$205 in nextProps) {
	        var propKey = nextProps[propKey$205];
	        lastProp = lastProps[propKey$205];
	        if (
	          nextProps.hasOwnProperty(propKey$205) &&
	          (null != propKey || null != lastProp)
	        )
	          switch (propKey$205) {
	            case "type":
	              type = propKey;
	              break;
	            case "name":
	              name = propKey;
	              break;
	            case "checked":
	              checked = propKey;
	              break;
	            case "defaultChecked":
	              defaultChecked = propKey;
	              break;
	            case "value":
	              value = propKey;
	              break;
	            case "defaultValue":
	              defaultValue = propKey;
	              break;
	            case "children":
	            case "dangerouslySetInnerHTML":
	              if (null != propKey)
	                throw Error(formatProdErrorMessage(137, tag));
	              break;
	            default:
	              propKey !== lastProp &&
	                setProp(
	                  domElement,
	                  tag,
	                  propKey$205,
	                  propKey,
	                  nextProps,
	                  lastProp
	                );
	          }
	      }
	      updateInput(
	        domElement,
	        value,
	        defaultValue,
	        lastDefaultValue,
	        checked,
	        defaultChecked,
	        type,
	        name
	      );
	      return;
	    case "select":
	      propKey = value = defaultValue = propKey$205 = null;
	      for (type in lastProps)
	        if (
	          ((lastDefaultValue = lastProps[type]),
	          lastProps.hasOwnProperty(type) && null != lastDefaultValue)
	        )
	          switch (type) {
	            case "value":
	              break;
	            case "multiple":
	              propKey = lastDefaultValue;
	            default:
	              nextProps.hasOwnProperty(type) ||
	                setProp(
	                  domElement,
	                  tag,
	                  type,
	                  null,
	                  nextProps,
	                  lastDefaultValue
	                );
	          }
	      for (name in nextProps)
	        if (
	          ((type = nextProps[name]),
	          (lastDefaultValue = lastProps[name]),
	          nextProps.hasOwnProperty(name) &&
	            (null != type || null != lastDefaultValue))
	        )
	          switch (name) {
	            case "value":
	              propKey$205 = type;
	              break;
	            case "defaultValue":
	              defaultValue = type;
	              break;
	            case "multiple":
	              value = type;
	            default:
	              type !== lastDefaultValue &&
	                setProp(
	                  domElement,
	                  tag,
	                  name,
	                  type,
	                  nextProps,
	                  lastDefaultValue
	                );
	          }
	      tag = defaultValue;
	      lastProps = value;
	      nextProps = propKey;
	      null != propKey$205
	        ? updateOptions(domElement, !!lastProps, propKey$205, false)
	        : !!nextProps !== !!lastProps &&
	          (null != tag
	            ? updateOptions(domElement, !!lastProps, tag, true)
	            : updateOptions(domElement, !!lastProps, lastProps ? [] : "", false));
	      return;
	    case "textarea":
	      propKey = propKey$205 = null;
	      for (defaultValue in lastProps)
	        if (
	          ((name = lastProps[defaultValue]),
	          lastProps.hasOwnProperty(defaultValue) &&
	            null != name &&
	            !nextProps.hasOwnProperty(defaultValue))
	        )
	          switch (defaultValue) {
	            case "value":
	              break;
	            case "children":
	              break;
	            default:
	              setProp(domElement, tag, defaultValue, null, nextProps, name);
	          }
	      for (value in nextProps)
	        if (
	          ((name = nextProps[value]),
	          (type = lastProps[value]),
	          nextProps.hasOwnProperty(value) && (null != name || null != type))
	        )
	          switch (value) {
	            case "value":
	              propKey$205 = name;
	              break;
	            case "defaultValue":
	              propKey = name;
	              break;
	            case "children":
	              break;
	            case "dangerouslySetInnerHTML":
	              if (null != name) throw Error(formatProdErrorMessage(91));
	              break;
	            default:
	              name !== type &&
	                setProp(domElement, tag, value, name, nextProps, type);
	          }
	      updateTextarea(domElement, propKey$205, propKey);
	      return;
	    case "option":
	      for (var propKey$221 in lastProps)
	        if (
	          ((propKey$205 = lastProps[propKey$221]),
	          lastProps.hasOwnProperty(propKey$221) &&
	            null != propKey$205 &&
	            !nextProps.hasOwnProperty(propKey$221))
	        )
	          switch (propKey$221) {
	            case "selected":
	              domElement.selected = false;
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                propKey$221,
	                null,
	                nextProps,
	                propKey$205
	              );
	          }
	      for (lastDefaultValue in nextProps)
	        if (
	          ((propKey$205 = nextProps[lastDefaultValue]),
	          (propKey = lastProps[lastDefaultValue]),
	          nextProps.hasOwnProperty(lastDefaultValue) &&
	            propKey$205 !== propKey &&
	            (null != propKey$205 || null != propKey))
	        )
	          switch (lastDefaultValue) {
	            case "selected":
	              domElement.selected =
	                propKey$205 &&
	                "function" !== typeof propKey$205 &&
	                "symbol" !== typeof propKey$205;
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                lastDefaultValue,
	                propKey$205,
	                nextProps,
	                propKey
	              );
	          }
	      return;
	    case "img":
	    case "link":
	    case "area":
	    case "base":
	    case "br":
	    case "col":
	    case "embed":
	    case "hr":
	    case "keygen":
	    case "meta":
	    case "param":
	    case "source":
	    case "track":
	    case "wbr":
	    case "menuitem":
	      for (var propKey$226 in lastProps)
	        (propKey$205 = lastProps[propKey$226]),
	          lastProps.hasOwnProperty(propKey$226) &&
	            null != propKey$205 &&
	            !nextProps.hasOwnProperty(propKey$226) &&
	            setProp(domElement, tag, propKey$226, null, nextProps, propKey$205);
	      for (checked in nextProps)
	        if (
	          ((propKey$205 = nextProps[checked]),
	          (propKey = lastProps[checked]),
	          nextProps.hasOwnProperty(checked) &&
	            propKey$205 !== propKey &&
	            (null != propKey$205 || null != propKey))
	        )
	          switch (checked) {
	            case "children":
	            case "dangerouslySetInnerHTML":
	              if (null != propKey$205)
	                throw Error(formatProdErrorMessage(137, tag));
	              break;
	            default:
	              setProp(
	                domElement,
	                tag,
	                checked,
	                propKey$205,
	                nextProps,
	                propKey
	              );
	          }
	      return;
	    default:
	      if (isCustomElement(tag)) {
	        for (var propKey$231 in lastProps)
	          (propKey$205 = lastProps[propKey$231]),
	            lastProps.hasOwnProperty(propKey$231) &&
	              void 0 !== propKey$205 &&
	              !nextProps.hasOwnProperty(propKey$231) &&
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                propKey$231,
	                void 0,
	                nextProps,
	                propKey$205
	              );
	        for (defaultChecked in nextProps)
	          (propKey$205 = nextProps[defaultChecked]),
	            (propKey = lastProps[defaultChecked]),
	            !nextProps.hasOwnProperty(defaultChecked) ||
	              propKey$205 === propKey ||
	              (void 0 === propKey$205 && void 0 === propKey) ||
	              setPropOnCustomElement(
	                domElement,
	                tag,
	                defaultChecked,
	                propKey$205,
	                nextProps,
	                propKey
	              );
	        return;
	      }
	  }
	  for (var propKey$236 in lastProps)
	    (propKey$205 = lastProps[propKey$236]),
	      lastProps.hasOwnProperty(propKey$236) &&
	        null != propKey$205 &&
	        !nextProps.hasOwnProperty(propKey$236) &&
	        setProp(domElement, tag, propKey$236, null, nextProps, propKey$205);
	  for (lastProp in nextProps)
	    (propKey$205 = nextProps[lastProp]),
	      (propKey = lastProps[lastProp]),
	      !nextProps.hasOwnProperty(lastProp) ||
	        propKey$205 === propKey ||
	        (null == propKey$205 && null == propKey) ||
	        setProp(domElement, tag, lastProp, propKey$205, nextProps, propKey);
	}
	var eventsEnabled = null,
	  selectionInformation = null;
	function getOwnerDocumentFromRootContainer(rootContainerElement) {
	  return 9 === rootContainerElement.nodeType
	    ? rootContainerElement
	    : rootContainerElement.ownerDocument;
	}
	function getOwnHostContext(namespaceURI) {
	  switch (namespaceURI) {
	    case "http://www.w3.org/2000/svg":
	      return 1;
	    case "http://www.w3.org/1998/Math/MathML":
	      return 2;
	    default:
	      return 0;
	  }
	}
	function getChildHostContextProd(parentNamespace, type) {
	  if (0 === parentNamespace)
	    switch (type) {
	      case "svg":
	        return 1;
	      case "math":
	        return 2;
	      default:
	        return 0;
	    }
	  return 1 === parentNamespace && "foreignObject" === type
	    ? 0
	    : parentNamespace;
	}
	function shouldSetTextContent(type, props) {
	  return (
	    "textarea" === type ||
	    "noscript" === type ||
	    "string" === typeof props.children ||
	    "number" === typeof props.children ||
	    "bigint" === typeof props.children ||
	    ("object" === typeof props.dangerouslySetInnerHTML &&
	      null !== props.dangerouslySetInnerHTML &&
	      null != props.dangerouslySetInnerHTML.__html)
	  );
	}
	var currentPopstateTransitionEvent = null;
	function shouldAttemptEagerTransition() {
	  var event = window.event;
	  if (event && "popstate" === event.type) {
	    if (event === currentPopstateTransitionEvent) return false;
	    currentPopstateTransitionEvent = event;
	    return true;
	  }
	  currentPopstateTransitionEvent = null;
	  return false;
	}
	var scheduleTimeout = "function" === typeof setTimeout ? setTimeout : void 0,
	  cancelTimeout = "function" === typeof clearTimeout ? clearTimeout : void 0,
	  localPromise = "function" === typeof Promise ? Promise : void 0,
	  scheduleMicrotask =
	    "function" === typeof queueMicrotask
	      ? queueMicrotask
	      : "undefined" !== typeof localPromise
	        ? function (callback) {
	            return localPromise
	              .resolve(null)
	              .then(callback)
	              .catch(handleErrorInNextTick);
	          }
	        : scheduleTimeout;
	function handleErrorInNextTick(error) {
	  setTimeout(function () {
	    throw error;
	  });
	}
	function isSingletonScope(type) {
	  return "head" === type;
	}
	function clearSuspenseBoundary(parentInstance, suspenseInstance) {
	  var node = suspenseInstance,
	    possiblePreambleContribution = 0,
	    depth = 0;
	  do {
	    var nextNode = node.nextSibling;
	    parentInstance.removeChild(node);
	    if (nextNode && 8 === nextNode.nodeType)
	      if (((node = nextNode.data), "/$" === node)) {
	        if (
	          0 < possiblePreambleContribution &&
	          8 > possiblePreambleContribution
	        ) {
	          node = possiblePreambleContribution;
	          var ownerDocument = parentInstance.ownerDocument;
	          node & 1 && releaseSingletonInstance(ownerDocument.documentElement);
	          node & 2 && releaseSingletonInstance(ownerDocument.body);
	          if (node & 4)
	            for (
	              node = ownerDocument.head,
	                releaseSingletonInstance(node),
	                ownerDocument = node.firstChild;
	              ownerDocument;

	            ) {
	              var nextNode$jscomp$0 = ownerDocument.nextSibling,
	                nodeName = ownerDocument.nodeName;
	              ownerDocument[internalHoistableMarker] ||
	                "SCRIPT" === nodeName ||
	                "STYLE" === nodeName ||
	                ("LINK" === nodeName &&
	                  "stylesheet" === ownerDocument.rel.toLowerCase()) ||
	                node.removeChild(ownerDocument);
	              ownerDocument = nextNode$jscomp$0;
	            }
	        }
	        if (0 === depth) {
	          parentInstance.removeChild(nextNode);
	          retryIfBlockedOn(suspenseInstance);
	          return;
	        }
	        depth--;
	      } else
	        "$" === node || "$?" === node || "$!" === node
	          ? depth++
	          : (possiblePreambleContribution = node.charCodeAt(0) - 48);
	    else possiblePreambleContribution = 0;
	    node = nextNode;
	  } while (node);
	  retryIfBlockedOn(suspenseInstance);
	}
	function clearContainerSparingly(container) {
	  var nextNode = container.firstChild;
	  nextNode && 10 === nextNode.nodeType && (nextNode = nextNode.nextSibling);
	  for (; nextNode; ) {
	    var node = nextNode;
	    nextNode = nextNode.nextSibling;
	    switch (node.nodeName) {
	      case "HTML":
	      case "HEAD":
	      case "BODY":
	        clearContainerSparingly(node);
	        detachDeletedInstance(node);
	        continue;
	      case "SCRIPT":
	      case "STYLE":
	        continue;
	      case "LINK":
	        if ("stylesheet" === node.rel.toLowerCase()) continue;
	    }
	    container.removeChild(node);
	  }
	}
	function canHydrateInstance(instance, type, props, inRootOrSingleton) {
	  for (; 1 === instance.nodeType; ) {
	    var anyProps = props;
	    if (instance.nodeName.toLowerCase() !== type.toLowerCase()) {
	      if (
	        !inRootOrSingleton &&
	        ("INPUT" !== instance.nodeName || "hidden" !== instance.type)
	      )
	        break;
	    } else if (!inRootOrSingleton)
	      if ("input" === type && "hidden" === instance.type) {
	        var name = null == anyProps.name ? null : "" + anyProps.name;
	        if (
	          "hidden" === anyProps.type &&
	          instance.getAttribute("name") === name
	        )
	          return instance;
	      } else return instance;
	    else if (!instance[internalHoistableMarker])
	      switch (type) {
	        case "meta":
	          if (!instance.hasAttribute("itemprop")) break;
	          return instance;
	        case "link":
	          name = instance.getAttribute("rel");
	          if ("stylesheet" === name && instance.hasAttribute("data-precedence"))
	            break;
	          else if (
	            name !== anyProps.rel ||
	            instance.getAttribute("href") !==
	              (null == anyProps.href || "" === anyProps.href
	                ? null
	                : anyProps.href) ||
	            instance.getAttribute("crossorigin") !==
	              (null == anyProps.crossOrigin ? null : anyProps.crossOrigin) ||
	            instance.getAttribute("title") !==
	              (null == anyProps.title ? null : anyProps.title)
	          )
	            break;
	          return instance;
	        case "style":
	          if (instance.hasAttribute("data-precedence")) break;
	          return instance;
	        case "script":
	          name = instance.getAttribute("src");
	          if (
	            (name !== (null == anyProps.src ? null : anyProps.src) ||
	              instance.getAttribute("type") !==
	                (null == anyProps.type ? null : anyProps.type) ||
	              instance.getAttribute("crossorigin") !==
	                (null == anyProps.crossOrigin ? null : anyProps.crossOrigin)) &&
	            name &&
	            instance.hasAttribute("async") &&
	            !instance.hasAttribute("itemprop")
	          )
	            break;
	          return instance;
	        default:
	          return instance;
	      }
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) break;
	  }
	  return null;
	}
	function canHydrateTextInstance(instance, text, inRootOrSingleton) {
	  if ("" === text) return null;
	  for (; 3 !== instance.nodeType; ) {
	    if (
	      (1 !== instance.nodeType ||
	        "INPUT" !== instance.nodeName ||
	        "hidden" !== instance.type) &&
	      !inRootOrSingleton
	    )
	      return null;
	    instance = getNextHydratable(instance.nextSibling);
	    if (null === instance) return null;
	  }
	  return instance;
	}
	function isSuspenseInstanceFallback(instance) {
	  return (
	    "$!" === instance.data ||
	    ("$?" === instance.data && "complete" === instance.ownerDocument.readyState)
	  );
	}
	function registerSuspenseInstanceRetry(instance, callback) {
	  var ownerDocument = instance.ownerDocument;
	  if ("$?" !== instance.data || "complete" === ownerDocument.readyState)
	    callback();
	  else {
	    var listener = function () {
	      callback();
	      ownerDocument.removeEventListener("DOMContentLoaded", listener);
	    };
	    ownerDocument.addEventListener("DOMContentLoaded", listener);
	    instance._reactRetry = listener;
	  }
	}
	function getNextHydratable(node) {
	  for (; null != node; node = node.nextSibling) {
	    var nodeType = node.nodeType;
	    if (1 === nodeType || 3 === nodeType) break;
	    if (8 === nodeType) {
	      nodeType = node.data;
	      if (
	        "$" === nodeType ||
	        "$!" === nodeType ||
	        "$?" === nodeType ||
	        "F!" === nodeType ||
	        "F" === nodeType
	      )
	        break;
	      if ("/$" === nodeType) return null;
	    }
	  }
	  return node;
	}
	var previousHydratableOnEnteringScopedSingleton = null;
	function getParentSuspenseInstance(targetInstance) {
	  targetInstance = targetInstance.previousSibling;
	  for (var depth = 0; targetInstance; ) {
	    if (8 === targetInstance.nodeType) {
	      var data = targetInstance.data;
	      if ("$" === data || "$!" === data || "$?" === data) {
	        if (0 === depth) return targetInstance;
	        depth--;
	      } else "/$" === data && depth++;
	    }
	    targetInstance = targetInstance.previousSibling;
	  }
	  return null;
	}
	function resolveSingletonInstance(type, props, rootContainerInstance) {
	  props = getOwnerDocumentFromRootContainer(rootContainerInstance);
	  switch (type) {
	    case "html":
	      type = props.documentElement;
	      if (!type) throw Error(formatProdErrorMessage(452));
	      return type;
	    case "head":
	      type = props.head;
	      if (!type) throw Error(formatProdErrorMessage(453));
	      return type;
	    case "body":
	      type = props.body;
	      if (!type) throw Error(formatProdErrorMessage(454));
	      return type;
	    default:
	      throw Error(formatProdErrorMessage(451));
	  }
	}
	function releaseSingletonInstance(instance) {
	  for (var attributes = instance.attributes; attributes.length; )
	    instance.removeAttributeNode(attributes[0]);
	  detachDeletedInstance(instance);
	}
	var preloadPropsMap = new Map(),
	  preconnectsSet = new Set();
	function getHoistableRoot(container) {
	  return "function" === typeof container.getRootNode
	    ? container.getRootNode()
	    : 9 === container.nodeType
	      ? container
	      : container.ownerDocument;
	}
	var previousDispatcher = ReactDOMSharedInternals.d;
	ReactDOMSharedInternals.d = {
	  f: flushSyncWork,
	  r: requestFormReset,
	  D: prefetchDNS,
	  C: preconnect,
	  L: preload,
	  m: preloadModule,
	  X: preinitScript,
	  S: preinitStyle,
	  M: preinitModuleScript
	};
	function flushSyncWork() {
	  var previousWasRendering = previousDispatcher.f(),
	    wasRendering = flushSyncWork$1();
	  return previousWasRendering || wasRendering;
	}
	function requestFormReset(form) {
	  var formInst = getInstanceFromNode(form);
	  null !== formInst && 5 === formInst.tag && "form" === formInst.type
	    ? requestFormReset$1(formInst)
	    : previousDispatcher.r(form);
	}
	var globalDocument = "undefined" === typeof document ? null : document;
	function preconnectAs(rel, href, crossOrigin) {
	  var ownerDocument = globalDocument;
	  if (ownerDocument && "string" === typeof href && href) {
	    var limitedEscapedHref =
	      escapeSelectorAttributeValueInsideDoubleQuotes(href);
	    limitedEscapedHref =
	      'link[rel="' + rel + '"][href="' + limitedEscapedHref + '"]';
	    "string" === typeof crossOrigin &&
	      (limitedEscapedHref += '[crossorigin="' + crossOrigin + '"]');
	    preconnectsSet.has(limitedEscapedHref) ||
	      (preconnectsSet.add(limitedEscapedHref),
	      (rel = { rel: rel, crossOrigin: crossOrigin, href: href }),
	      null === ownerDocument.querySelector(limitedEscapedHref) &&
	        ((href = ownerDocument.createElement("link")),
	        setInitialProperties(href, "link", rel),
	        markNodeAsHoistable(href),
	        ownerDocument.head.appendChild(href)));
	  }
	}
	function prefetchDNS(href) {
	  previousDispatcher.D(href);
	  preconnectAs("dns-prefetch", href, null);
	}
	function preconnect(href, crossOrigin) {
	  previousDispatcher.C(href, crossOrigin);
	  preconnectAs("preconnect", href, crossOrigin);
	}
	function preload(href, as, options) {
	  previousDispatcher.L(href, as, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href && as) {
	    var preloadSelector =
	      'link[rel="preload"][as="' +
	      escapeSelectorAttributeValueInsideDoubleQuotes(as) +
	      '"]';
	    "image" === as
	      ? options && options.imageSrcSet
	        ? ((preloadSelector +=
	            '[imagesrcset="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(
	              options.imageSrcSet
	            ) +
	            '"]'),
	          "string" === typeof options.imageSizes &&
	            (preloadSelector +=
	              '[imagesizes="' +
	              escapeSelectorAttributeValueInsideDoubleQuotes(
	                options.imageSizes
	              ) +
	              '"]'))
	        : (preloadSelector +=
	            '[href="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	            '"]')
	      : (preloadSelector +=
	          '[href="' +
	          escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	          '"]');
	    var key = preloadSelector;
	    switch (as) {
	      case "style":
	        key = getStyleKey(href);
	        break;
	      case "script":
	        key = getScriptKey(href);
	    }
	    preloadPropsMap.has(key) ||
	      ((href = assign(
	        {
	          rel: "preload",
	          href:
	            "image" === as && options && options.imageSrcSet ? void 0 : href,
	          as: as
	        },
	        options
	      )),
	      preloadPropsMap.set(key, href),
	      null !== ownerDocument.querySelector(preloadSelector) ||
	        ("style" === as &&
	          ownerDocument.querySelector(getStylesheetSelectorFromKey(key))) ||
	        ("script" === as &&
	          ownerDocument.querySelector(getScriptSelectorFromKey(key))) ||
	        ((as = ownerDocument.createElement("link")),
	        setInitialProperties(as, "link", href),
	        markNodeAsHoistable(as),
	        ownerDocument.head.appendChild(as)));
	  }
	}
	function preloadModule(href, options) {
	  previousDispatcher.m(href, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href) {
	    var as = options && "string" === typeof options.as ? options.as : "script",
	      preloadSelector =
	        'link[rel="modulepreload"][as="' +
	        escapeSelectorAttributeValueInsideDoubleQuotes(as) +
	        '"][href="' +
	        escapeSelectorAttributeValueInsideDoubleQuotes(href) +
	        '"]',
	      key = preloadSelector;
	    switch (as) {
	      case "audioworklet":
	      case "paintworklet":
	      case "serviceworker":
	      case "sharedworker":
	      case "worker":
	      case "script":
	        key = getScriptKey(href);
	    }
	    if (
	      !preloadPropsMap.has(key) &&
	      ((href = assign({ rel: "modulepreload", href: href }, options)),
	      preloadPropsMap.set(key, href),
	      null === ownerDocument.querySelector(preloadSelector))
	    ) {
	      switch (as) {
	        case "audioworklet":
	        case "paintworklet":
	        case "serviceworker":
	        case "sharedworker":
	        case "worker":
	        case "script":
	          if (ownerDocument.querySelector(getScriptSelectorFromKey(key)))
	            return;
	      }
	      as = ownerDocument.createElement("link");
	      setInitialProperties(as, "link", href);
	      markNodeAsHoistable(as);
	      ownerDocument.head.appendChild(as);
	    }
	  }
	}
	function preinitStyle(href, precedence, options) {
	  previousDispatcher.S(href, precedence, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && href) {
	    var styles = getResourcesFromRoot(ownerDocument).hoistableStyles,
	      key = getStyleKey(href);
	    precedence = precedence || "default";
	    var resource = styles.get(key);
	    if (!resource) {
	      var state = { loading: 0, preload: null };
	      if (
	        (resource = ownerDocument.querySelector(
	          getStylesheetSelectorFromKey(key)
	        ))
	      )
	        state.loading = 5;
	      else {
	        href = assign(
	          { rel: "stylesheet", href: href, "data-precedence": precedence },
	          options
	        );
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForStylesheet(href, options);
	        var link = (resource = ownerDocument.createElement("link"));
	        markNodeAsHoistable(link);
	        setInitialProperties(link, "link", href);
	        link._p = new Promise(function (resolve, reject) {
	          link.onload = resolve;
	          link.onerror = reject;
	        });
	        link.addEventListener("load", function () {
	          state.loading |= 1;
	        });
	        link.addEventListener("error", function () {
	          state.loading |= 2;
	        });
	        state.loading |= 4;
	        insertStylesheet(resource, precedence, ownerDocument);
	      }
	      resource = {
	        type: "stylesheet",
	        instance: resource,
	        count: 1,
	        state: state
	      };
	      styles.set(key, resource);
	    }
	  }
	}
	function preinitScript(src, options) {
	  previousDispatcher.X(src, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && src) {
	    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
	      key = getScriptKey(src),
	      resource = scripts.get(key);
	    resource ||
	      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
	      resource ||
	        ((src = assign({ src: src, async: true }, options)),
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForScript(src, options),
	        (resource = ownerDocument.createElement("script")),
	        markNodeAsHoistable(resource),
	        setInitialProperties(resource, "link", src),
	        ownerDocument.head.appendChild(resource)),
	      (resource = {
	        type: "script",
	        instance: resource,
	        count: 1,
	        state: null
	      }),
	      scripts.set(key, resource));
	  }
	}
	function preinitModuleScript(src, options) {
	  previousDispatcher.M(src, options);
	  var ownerDocument = globalDocument;
	  if (ownerDocument && src) {
	    var scripts = getResourcesFromRoot(ownerDocument).hoistableScripts,
	      key = getScriptKey(src),
	      resource = scripts.get(key);
	    resource ||
	      ((resource = ownerDocument.querySelector(getScriptSelectorFromKey(key))),
	      resource ||
	        ((src = assign({ src: src, async: true, type: "module" }, options)),
	        (options = preloadPropsMap.get(key)) &&
	          adoptPreloadPropsForScript(src, options),
	        (resource = ownerDocument.createElement("script")),
	        markNodeAsHoistable(resource),
	        setInitialProperties(resource, "link", src),
	        ownerDocument.head.appendChild(resource)),
	      (resource = {
	        type: "script",
	        instance: resource,
	        count: 1,
	        state: null
	      }),
	      scripts.set(key, resource));
	  }
	}
	function getResource(type, currentProps, pendingProps, currentResource) {
	  var JSCompiler_inline_result = (JSCompiler_inline_result =
	    rootInstanceStackCursor.current)
	    ? getHoistableRoot(JSCompiler_inline_result)
	    : null;
	  if (!JSCompiler_inline_result) throw Error(formatProdErrorMessage(446));
	  switch (type) {
	    case "meta":
	    case "title":
	      return null;
	    case "style":
	      return "string" === typeof pendingProps.precedence &&
	        "string" === typeof pendingProps.href
	        ? ((currentProps = getStyleKey(pendingProps.href)),
	          (pendingProps = getResourcesFromRoot(
	            JSCompiler_inline_result
	          ).hoistableStyles),
	          (currentResource = pendingProps.get(currentProps)),
	          currentResource ||
	            ((currentResource = {
	              type: "style",
	              instance: null,
	              count: 0,
	              state: null
	            }),
	            pendingProps.set(currentProps, currentResource)),
	          currentResource)
	        : { type: "void", instance: null, count: 0, state: null };
	    case "link":
	      if (
	        "stylesheet" === pendingProps.rel &&
	        "string" === typeof pendingProps.href &&
	        "string" === typeof pendingProps.precedence
	      ) {
	        type = getStyleKey(pendingProps.href);
	        var styles$244 = getResourcesFromRoot(
	            JSCompiler_inline_result
	          ).hoistableStyles,
	          resource$245 = styles$244.get(type);
	        resource$245 ||
	          ((JSCompiler_inline_result =
	            JSCompiler_inline_result.ownerDocument || JSCompiler_inline_result),
	          (resource$245 = {
	            type: "stylesheet",
	            instance: null,
	            count: 0,
	            state: { loading: 0, preload: null }
	          }),
	          styles$244.set(type, resource$245),
	          (styles$244 = JSCompiler_inline_result.querySelector(
	            getStylesheetSelectorFromKey(type)
	          )) &&
	            !styles$244._p &&
	            ((resource$245.instance = styles$244),
	            (resource$245.state.loading = 5)),
	          preloadPropsMap.has(type) ||
	            ((pendingProps = {
	              rel: "preload",
	              as: "style",
	              href: pendingProps.href,
	              crossOrigin: pendingProps.crossOrigin,
	              integrity: pendingProps.integrity,
	              media: pendingProps.media,
	              hrefLang: pendingProps.hrefLang,
	              referrerPolicy: pendingProps.referrerPolicy
	            }),
	            preloadPropsMap.set(type, pendingProps),
	            styles$244 ||
	              preloadStylesheet(
	                JSCompiler_inline_result,
	                type,
	                pendingProps,
	                resource$245.state
	              )));
	        if (currentProps && null === currentResource)
	          throw Error(formatProdErrorMessage(528, ""));
	        return resource$245;
	      }
	      if (currentProps && null !== currentResource)
	        throw Error(formatProdErrorMessage(529, ""));
	      return null;
	    case "script":
	      return (
	        (currentProps = pendingProps.async),
	        (pendingProps = pendingProps.src),
	        "string" === typeof pendingProps &&
	        currentProps &&
	        "function" !== typeof currentProps &&
	        "symbol" !== typeof currentProps
	          ? ((currentProps = getScriptKey(pendingProps)),
	            (pendingProps = getResourcesFromRoot(
	              JSCompiler_inline_result
	            ).hoistableScripts),
	            (currentResource = pendingProps.get(currentProps)),
	            currentResource ||
	              ((currentResource = {
	                type: "script",
	                instance: null,
	                count: 0,
	                state: null
	              }),
	              pendingProps.set(currentProps, currentResource)),
	            currentResource)
	          : { type: "void", instance: null, count: 0, state: null }
	      );
	    default:
	      throw Error(formatProdErrorMessage(444, type));
	  }
	}
	function getStyleKey(href) {
	  return 'href="' + escapeSelectorAttributeValueInsideDoubleQuotes(href) + '"';
	}
	function getStylesheetSelectorFromKey(key) {
	  return 'link[rel="stylesheet"][' + key + "]";
	}
	function stylesheetPropsFromRawProps(rawProps) {
	  return assign({}, rawProps, {
	    "data-precedence": rawProps.precedence,
	    precedence: null
	  });
	}
	function preloadStylesheet(ownerDocument, key, preloadProps, state) {
	  ownerDocument.querySelector('link[rel="preload"][as="style"][' + key + "]")
	    ? (state.loading = 1)
	    : ((key = ownerDocument.createElement("link")),
	      (state.preload = key),
	      key.addEventListener("load", function () {
	        return (state.loading |= 1);
	      }),
	      key.addEventListener("error", function () {
	        return (state.loading |= 2);
	      }),
	      setInitialProperties(key, "link", preloadProps),
	      markNodeAsHoistable(key),
	      ownerDocument.head.appendChild(key));
	}
	function getScriptKey(src) {
	  return '[src="' + escapeSelectorAttributeValueInsideDoubleQuotes(src) + '"]';
	}
	function getScriptSelectorFromKey(key) {
	  return "script[async]" + key;
	}
	function acquireResource(hoistableRoot, resource, props) {
	  resource.count++;
	  if (null === resource.instance)
	    switch (resource.type) {
	      case "style":
	        var instance = hoistableRoot.querySelector(
	          'style[data-href~="' +
	            escapeSelectorAttributeValueInsideDoubleQuotes(props.href) +
	            '"]'
	        );
	        if (instance)
	          return (
	            (resource.instance = instance),
	            markNodeAsHoistable(instance),
	            instance
	          );
	        var styleProps = assign({}, props, {
	          "data-href": props.href,
	          "data-precedence": props.precedence,
	          href: null,
	          precedence: null
	        });
	        instance = (hoistableRoot.ownerDocument || hoistableRoot).createElement(
	          "style"
	        );
	        markNodeAsHoistable(instance);
	        setInitialProperties(instance, "style", styleProps);
	        insertStylesheet(instance, props.precedence, hoistableRoot);
	        return (resource.instance = instance);
	      case "stylesheet":
	        styleProps = getStyleKey(props.href);
	        var instance$250 = hoistableRoot.querySelector(
	          getStylesheetSelectorFromKey(styleProps)
	        );
	        if (instance$250)
	          return (
	            (resource.state.loading |= 4),
	            (resource.instance = instance$250),
	            markNodeAsHoistable(instance$250),
	            instance$250
	          );
	        instance = stylesheetPropsFromRawProps(props);
	        (styleProps = preloadPropsMap.get(styleProps)) &&
	          adoptPreloadPropsForStylesheet(instance, styleProps);
	        instance$250 = (
	          hoistableRoot.ownerDocument || hoistableRoot
	        ).createElement("link");
	        markNodeAsHoistable(instance$250);
	        var linkInstance = instance$250;
	        linkInstance._p = new Promise(function (resolve, reject) {
	          linkInstance.onload = resolve;
	          linkInstance.onerror = reject;
	        });
	        setInitialProperties(instance$250, "link", instance);
	        resource.state.loading |= 4;
	        insertStylesheet(instance$250, props.precedence, hoistableRoot);
	        return (resource.instance = instance$250);
	      case "script":
	        instance$250 = getScriptKey(props.src);
	        if (
	          (styleProps = hoistableRoot.querySelector(
	            getScriptSelectorFromKey(instance$250)
	          ))
	        )
	          return (
	            (resource.instance = styleProps),
	            markNodeAsHoistable(styleProps),
	            styleProps
	          );
	        instance = props;
	        if ((styleProps = preloadPropsMap.get(instance$250)))
	          (instance = assign({}, props)),
	            adoptPreloadPropsForScript(instance, styleProps);
	        hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	        styleProps = hoistableRoot.createElement("script");
	        markNodeAsHoistable(styleProps);
	        setInitialProperties(styleProps, "link", instance);
	        hoistableRoot.head.appendChild(styleProps);
	        return (resource.instance = styleProps);
	      case "void":
	        return null;
	      default:
	        throw Error(formatProdErrorMessage(443, resource.type));
	    }
	  else
	    "stylesheet" === resource.type &&
	      0 === (resource.state.loading & 4) &&
	      ((instance = resource.instance),
	      (resource.state.loading |= 4),
	      insertStylesheet(instance, props.precedence, hoistableRoot));
	  return resource.instance;
	}
	function insertStylesheet(instance, precedence, root) {
	  for (
	    var nodes = root.querySelectorAll(
	        'link[rel="stylesheet"][data-precedence],style[data-precedence]'
	      ),
	      last = nodes.length ? nodes[nodes.length - 1] : null,
	      prior = last,
	      i = 0;
	    i < nodes.length;
	    i++
	  ) {
	    var node = nodes[i];
	    if (node.dataset.precedence === precedence) prior = node;
	    else if (prior !== last) break;
	  }
	  prior
	    ? prior.parentNode.insertBefore(instance, prior.nextSibling)
	    : ((precedence = 9 === root.nodeType ? root.head : root),
	      precedence.insertBefore(instance, precedence.firstChild));
	}
	function adoptPreloadPropsForStylesheet(stylesheetProps, preloadProps) {
	  null == stylesheetProps.crossOrigin &&
	    (stylesheetProps.crossOrigin = preloadProps.crossOrigin);
	  null == stylesheetProps.referrerPolicy &&
	    (stylesheetProps.referrerPolicy = preloadProps.referrerPolicy);
	  null == stylesheetProps.title && (stylesheetProps.title = preloadProps.title);
	}
	function adoptPreloadPropsForScript(scriptProps, preloadProps) {
	  null == scriptProps.crossOrigin &&
	    (scriptProps.crossOrigin = preloadProps.crossOrigin);
	  null == scriptProps.referrerPolicy &&
	    (scriptProps.referrerPolicy = preloadProps.referrerPolicy);
	  null == scriptProps.integrity &&
	    (scriptProps.integrity = preloadProps.integrity);
	}
	var tagCaches = null;
	function getHydratableHoistableCache(type, keyAttribute, ownerDocument) {
	  if (null === tagCaches) {
	    var cache = new Map();
	    var caches = (tagCaches = new Map());
	    caches.set(ownerDocument, cache);
	  } else
	    (caches = tagCaches),
	      (cache = caches.get(ownerDocument)),
	      cache || ((cache = new Map()), caches.set(ownerDocument, cache));
	  if (cache.has(type)) return cache;
	  cache.set(type, null);
	  ownerDocument = ownerDocument.getElementsByTagName(type);
	  for (caches = 0; caches < ownerDocument.length; caches++) {
	    var node = ownerDocument[caches];
	    if (
	      !(
	        node[internalHoistableMarker] ||
	        node[internalInstanceKey] ||
	        ("link" === type && "stylesheet" === node.getAttribute("rel"))
	      ) &&
	      "http://www.w3.org/2000/svg" !== node.namespaceURI
	    ) {
	      var nodeKey = node.getAttribute(keyAttribute) || "";
	      nodeKey = type + nodeKey;
	      var existing = cache.get(nodeKey);
	      existing ? existing.push(node) : cache.set(nodeKey, [node]);
	    }
	  }
	  return cache;
	}
	function mountHoistable(hoistableRoot, type, instance) {
	  hoistableRoot = hoistableRoot.ownerDocument || hoistableRoot;
	  hoistableRoot.head.insertBefore(
	    instance,
	    "title" === type ? hoistableRoot.querySelector("head > title") : null
	  );
	}
	function isHostHoistableType(type, props, hostContext) {
	  if (1 === hostContext || null != props.itemProp) return false;
	  switch (type) {
	    case "meta":
	    case "title":
	      return true;
	    case "style":
	      if (
	        "string" !== typeof props.precedence ||
	        "string" !== typeof props.href ||
	        "" === props.href
	      )
	        break;
	      return true;
	    case "link":
	      if (
	        "string" !== typeof props.rel ||
	        "string" !== typeof props.href ||
	        "" === props.href ||
	        props.onLoad ||
	        props.onError
	      )
	        break;
	      switch (props.rel) {
	        case "stylesheet":
	          return (
	            (type = props.disabled),
	            "string" === typeof props.precedence && null == type
	          );
	        default:
	          return true;
	      }
	    case "script":
	      if (
	        props.async &&
	        "function" !== typeof props.async &&
	        "symbol" !== typeof props.async &&
	        !props.onLoad &&
	        !props.onError &&
	        props.src &&
	        "string" === typeof props.src
	      )
	        return true;
	  }
	  return false;
	}
	function preloadResource(resource) {
	  return "stylesheet" === resource.type && 0 === (resource.state.loading & 3)
	    ? false
	    : true;
	}
	var suspendedState = null;
	function noop() {}
	function suspendResource(hoistableRoot, resource, props) {
	  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
	  var state = suspendedState;
	  if (
	    "stylesheet" === resource.type &&
	    ("string" !== typeof props.media ||
	      false !== matchMedia(props.media).matches) &&
	    0 === (resource.state.loading & 4)
	  ) {
	    if (null === resource.instance) {
	      var key = getStyleKey(props.href),
	        instance = hoistableRoot.querySelector(
	          getStylesheetSelectorFromKey(key)
	        );
	      if (instance) {
	        hoistableRoot = instance._p;
	        null !== hoistableRoot &&
	          "object" === typeof hoistableRoot &&
	          "function" === typeof hoistableRoot.then &&
	          (state.count++,
	          (state = onUnsuspend.bind(state)),
	          hoistableRoot.then(state, state));
	        resource.state.loading |= 4;
	        resource.instance = instance;
	        markNodeAsHoistable(instance);
	        return;
	      }
	      instance = hoistableRoot.ownerDocument || hoistableRoot;
	      props = stylesheetPropsFromRawProps(props);
	      (key = preloadPropsMap.get(key)) &&
	        adoptPreloadPropsForStylesheet(props, key);
	      instance = instance.createElement("link");
	      markNodeAsHoistable(instance);
	      var linkInstance = instance;
	      linkInstance._p = new Promise(function (resolve, reject) {
	        linkInstance.onload = resolve;
	        linkInstance.onerror = reject;
	      });
	      setInitialProperties(instance, "link", props);
	      resource.instance = instance;
	    }
	    null === state.stylesheets && (state.stylesheets = new Map());
	    state.stylesheets.set(resource, hoistableRoot);
	    (hoistableRoot = resource.state.preload) &&
	      0 === (resource.state.loading & 3) &&
	      (state.count++,
	      (resource = onUnsuspend.bind(state)),
	      hoistableRoot.addEventListener("load", resource),
	      hoistableRoot.addEventListener("error", resource));
	  }
	}
	function waitForCommitToBeReady() {
	  if (null === suspendedState) throw Error(formatProdErrorMessage(475));
	  var state = suspendedState;
	  state.stylesheets &&
	    0 === state.count &&
	    insertSuspendedStylesheets(state, state.stylesheets);
	  return 0 < state.count
	    ? function (commit) {
	        var stylesheetTimer = setTimeout(function () {
	          state.stylesheets &&
	            insertSuspendedStylesheets(state, state.stylesheets);
	          if (state.unsuspend) {
	            var unsuspend = state.unsuspend;
	            state.unsuspend = null;
	            unsuspend();
	          }
	        }, 6e4);
	        state.unsuspend = commit;
	        return function () {
	          state.unsuspend = null;
	          clearTimeout(stylesheetTimer);
	        };
	      }
	    : null;
	}
	function onUnsuspend() {
	  this.count--;
	  if (0 === this.count)
	    if (this.stylesheets) insertSuspendedStylesheets(this, this.stylesheets);
	    else if (this.unsuspend) {
	      var unsuspend = this.unsuspend;
	      this.unsuspend = null;
	      unsuspend();
	    }
	}
	var precedencesByRoot = null;
	function insertSuspendedStylesheets(state, resources) {
	  state.stylesheets = null;
	  null !== state.unsuspend &&
	    (state.count++,
	    (precedencesByRoot = new Map()),
	    resources.forEach(insertStylesheetIntoRoot, state),
	    (precedencesByRoot = null),
	    onUnsuspend.call(state));
	}
	function insertStylesheetIntoRoot(root, resource) {
	  if (!(resource.state.loading & 4)) {
	    var precedences = precedencesByRoot.get(root);
	    if (precedences) var last = precedences.get(null);
	    else {
	      precedences = new Map();
	      precedencesByRoot.set(root, precedences);
	      for (
	        var nodes = root.querySelectorAll(
	            "link[data-precedence],style[data-precedence]"
	          ),
	          i = 0;
	        i < nodes.length;
	        i++
	      ) {
	        var node = nodes[i];
	        if (
	          "LINK" === node.nodeName ||
	          "not all" !== node.getAttribute("media")
	        )
	          precedences.set(node.dataset.precedence, node), (last = node);
	      }
	      last && precedences.set(null, last);
	    }
	    nodes = resource.instance;
	    node = nodes.getAttribute("data-precedence");
	    i = precedences.get(node) || last;
	    i === last && precedences.set(null, nodes);
	    precedences.set(node, nodes);
	    this.count++;
	    last = onUnsuspend.bind(this);
	    nodes.addEventListener("load", last);
	    nodes.addEventListener("error", last);
	    i
	      ? i.parentNode.insertBefore(nodes, i.nextSibling)
	      : ((root = 9 === root.nodeType ? root.head : root),
	        root.insertBefore(nodes, root.firstChild));
	    resource.state.loading |= 4;
	  }
	}
	var HostTransitionContext = {
	  $$typeof: REACT_CONTEXT_TYPE,
	  Provider: null,
	  Consumer: null,
	  _currentValue: sharedNotPendingObject,
	  _currentValue2: sharedNotPendingObject,
	  _threadCount: 0
	};
	function FiberRootNode(
	  containerInfo,
	  tag,
	  hydrate,
	  identifierPrefix,
	  onUncaughtError,
	  onCaughtError,
	  onRecoverableError,
	  formState
	) {
	  this.tag = 1;
	  this.containerInfo = containerInfo;
	  this.pingCache = this.current = this.pendingChildren = null;
	  this.timeoutHandle = -1;
	  this.callbackNode =
	    this.next =
	    this.pendingContext =
	    this.context =
	    this.cancelPendingCommit =
	      null;
	  this.callbackPriority = 0;
	  this.expirationTimes = createLaneMap(-1);
	  this.entangledLanes =
	    this.shellSuspendCounter =
	    this.errorRecoveryDisabledLanes =
	    this.expiredLanes =
	    this.warmLanes =
	    this.pingedLanes =
	    this.suspendedLanes =
	    this.pendingLanes =
	      0;
	  this.entanglements = createLaneMap(0);
	  this.hiddenUpdates = createLaneMap(null);
	  this.identifierPrefix = identifierPrefix;
	  this.onUncaughtError = onUncaughtError;
	  this.onCaughtError = onCaughtError;
	  this.onRecoverableError = onRecoverableError;
	  this.pooledCache = null;
	  this.pooledCacheLanes = 0;
	  this.formState = formState;
	  this.incompleteTransitions = new Map();
	}
	function createFiberRoot(
	  containerInfo,
	  tag,
	  hydrate,
	  initialChildren,
	  hydrationCallbacks,
	  isStrictMode,
	  identifierPrefix,
	  onUncaughtError,
	  onCaughtError,
	  onRecoverableError,
	  transitionCallbacks,
	  formState
	) {
	  containerInfo = new FiberRootNode(
	    containerInfo,
	    tag,
	    hydrate,
	    identifierPrefix,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    formState
	  );
	  tag = 1;
	  true === isStrictMode && (tag |= 24);
	  isStrictMode = createFiberImplClass(3, null, null, tag);
	  containerInfo.current = isStrictMode;
	  isStrictMode.stateNode = containerInfo;
	  tag = createCache();
	  tag.refCount++;
	  containerInfo.pooledCache = tag;
	  tag.refCount++;
	  isStrictMode.memoizedState = {
	    element: initialChildren,
	    isDehydrated: hydrate,
	    cache: tag
	  };
	  initializeUpdateQueue(isStrictMode);
	  return containerInfo;
	}
	function getContextForSubtree(parentComponent) {
	  if (!parentComponent) return emptyContextObject;
	  parentComponent = emptyContextObject;
	  return parentComponent;
	}
	function updateContainerImpl(
	  rootFiber,
	  lane,
	  element,
	  container,
	  parentComponent,
	  callback
	) {
	  parentComponent = getContextForSubtree(parentComponent);
	  null === container.context
	    ? (container.context = parentComponent)
	    : (container.pendingContext = parentComponent);
	  container = createUpdate(lane);
	  container.payload = { element: element };
	  callback = void 0 === callback ? null : callback;
	  null !== callback && (container.callback = callback);
	  element = enqueueUpdate(rootFiber, container, lane);
	  null !== element &&
	    (scheduleUpdateOnFiber(element, rootFiber, lane),
	    entangleTransitions(element, rootFiber, lane));
	}
	function markRetryLaneImpl(fiber, retryLane) {
	  fiber = fiber.memoizedState;
	  if (null !== fiber && null !== fiber.dehydrated) {
	    var a = fiber.retryLane;
	    fiber.retryLane = 0 !== a && a < retryLane ? a : retryLane;
	  }
	}
	function markRetryLaneIfNotHydrated(fiber, retryLane) {
	  markRetryLaneImpl(fiber, retryLane);
	  (fiber = fiber.alternate) && markRetryLaneImpl(fiber, retryLane);
	}
	function attemptContinuousHydration(fiber) {
	  if (13 === fiber.tag) {
	    var root = enqueueConcurrentRenderForLane(fiber, 67108864);
	    null !== root && scheduleUpdateOnFiber(root, fiber, 67108864);
	    markRetryLaneIfNotHydrated(fiber, 67108864);
	  }
	}
	var _enabled = true;
	function dispatchDiscreteEvent(
	  domEventName,
	  eventSystemFlags,
	  container,
	  nativeEvent
	) {
	  var prevTransition = ReactSharedInternals.T;
	  ReactSharedInternals.T = null;
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    (ReactDOMSharedInternals.p = 2),
	      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function dispatchContinuousEvent(
	  domEventName,
	  eventSystemFlags,
	  container,
	  nativeEvent
	) {
	  var prevTransition = ReactSharedInternals.T;
	  ReactSharedInternals.T = null;
	  var previousPriority = ReactDOMSharedInternals.p;
	  try {
	    (ReactDOMSharedInternals.p = 8),
	      dispatchEvent(domEventName, eventSystemFlags, container, nativeEvent);
	  } finally {
	    (ReactDOMSharedInternals.p = previousPriority),
	      (ReactSharedInternals.T = prevTransition);
	  }
	}
	function dispatchEvent(
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  if (_enabled) {
	    var blockedOn = findInstanceBlockingEvent(nativeEvent);
	    if (null === blockedOn)
	      dispatchEventForPluginEventSystem(
	        domEventName,
	        eventSystemFlags,
	        nativeEvent,
	        return_targetInst,
	        targetContainer
	      ),
	        clearIfContinuousEvent(domEventName, nativeEvent);
	    else if (
	      queueIfContinuousEvent(
	        blockedOn,
	        domEventName,
	        eventSystemFlags,
	        targetContainer,
	        nativeEvent
	      )
	    )
	      nativeEvent.stopPropagation();
	    else if (
	      (clearIfContinuousEvent(domEventName, nativeEvent),
	      eventSystemFlags & 4 &&
	        -1 < discreteReplayableEvents.indexOf(domEventName))
	    ) {
	      for (; null !== blockedOn; ) {
	        var fiber = getInstanceFromNode(blockedOn);
	        if (null !== fiber)
	          switch (fiber.tag) {
	            case 3:
	              fiber = fiber.stateNode;
	              if (fiber.current.memoizedState.isDehydrated) {
	                var lanes = getHighestPriorityLanes(fiber.pendingLanes);
	                if (0 !== lanes) {
	                  var root = fiber;
	                  root.pendingLanes |= 2;
	                  for (root.entangledLanes |= 2; lanes; ) {
	                    var lane = 1 << (31 - clz32(lanes));
	                    root.entanglements[1] |= lane;
	                    lanes &= ~lane;
	                  }
	                  ensureRootIsScheduled(fiber);
	                  0 === (executionContext & 6) &&
	                    ((workInProgressRootRenderTargetTime = now() + 500),
	                    flushSyncWorkAcrossRoots_impl(0));
	                }
	              }
	              break;
	            case 13:
	              (root = enqueueConcurrentRenderForLane(fiber, 2)),
	                null !== root && scheduleUpdateOnFiber(root, fiber, 2),
	                flushSyncWork$1(),
	                markRetryLaneIfNotHydrated(fiber, 2);
	          }
	        fiber = findInstanceBlockingEvent(nativeEvent);
	        null === fiber &&
	          dispatchEventForPluginEventSystem(
	            domEventName,
	            eventSystemFlags,
	            nativeEvent,
	            return_targetInst,
	            targetContainer
	          );
	        if (fiber === blockedOn) break;
	        blockedOn = fiber;
	      }
	      null !== blockedOn && nativeEvent.stopPropagation();
	    } else
	      dispatchEventForPluginEventSystem(
	        domEventName,
	        eventSystemFlags,
	        nativeEvent,
	        null,
	        targetContainer
	      );
	  }
	}
	function findInstanceBlockingEvent(nativeEvent) {
	  nativeEvent = getEventTarget(nativeEvent);
	  return findInstanceBlockingTarget(nativeEvent);
	}
	var return_targetInst = null;
	function findInstanceBlockingTarget(targetNode) {
	  return_targetInst = null;
	  targetNode = getClosestInstanceFromNode(targetNode);
	  if (null !== targetNode) {
	    var nearestMounted = getNearestMountedFiber(targetNode);
	    if (null === nearestMounted) targetNode = null;
	    else {
	      var tag = nearestMounted.tag;
	      if (13 === tag) {
	        targetNode = getSuspenseInstanceFromFiber(nearestMounted);
	        if (null !== targetNode) return targetNode;
	        targetNode = null;
	      } else if (3 === tag) {
	        if (nearestMounted.stateNode.current.memoizedState.isDehydrated)
	          return 3 === nearestMounted.tag
	            ? nearestMounted.stateNode.containerInfo
	            : null;
	        targetNode = null;
	      } else nearestMounted !== targetNode && (targetNode = null);
	    }
	  }
	  return_targetInst = targetNode;
	  return null;
	}
	function getEventPriority(domEventName) {
	  switch (domEventName) {
	    case "beforetoggle":
	    case "cancel":
	    case "click":
	    case "close":
	    case "contextmenu":
	    case "copy":
	    case "cut":
	    case "auxclick":
	    case "dblclick":
	    case "dragend":
	    case "dragstart":
	    case "drop":
	    case "focusin":
	    case "focusout":
	    case "input":
	    case "invalid":
	    case "keydown":
	    case "keypress":
	    case "keyup":
	    case "mousedown":
	    case "mouseup":
	    case "paste":
	    case "pause":
	    case "play":
	    case "pointercancel":
	    case "pointerdown":
	    case "pointerup":
	    case "ratechange":
	    case "reset":
	    case "resize":
	    case "seeked":
	    case "submit":
	    case "toggle":
	    case "touchcancel":
	    case "touchend":
	    case "touchstart":
	    case "volumechange":
	    case "change":
	    case "selectionchange":
	    case "textInput":
	    case "compositionstart":
	    case "compositionend":
	    case "compositionupdate":
	    case "beforeblur":
	    case "afterblur":
	    case "beforeinput":
	    case "blur":
	    case "fullscreenchange":
	    case "focus":
	    case "hashchange":
	    case "popstate":
	    case "select":
	    case "selectstart":
	      return 2;
	    case "drag":
	    case "dragenter":
	    case "dragexit":
	    case "dragleave":
	    case "dragover":
	    case "mousemove":
	    case "mouseout":
	    case "mouseover":
	    case "pointermove":
	    case "pointerout":
	    case "pointerover":
	    case "scroll":
	    case "touchmove":
	    case "wheel":
	    case "mouseenter":
	    case "mouseleave":
	    case "pointerenter":
	    case "pointerleave":
	      return 8;
	    case "message":
	      switch (getCurrentPriorityLevel()) {
	        case ImmediatePriority:
	          return 2;
	        case UserBlockingPriority:
	          return 8;
	        case NormalPriority$1:
	        case LowPriority:
	          return 32;
	        case IdlePriority:
	          return 268435456;
	        default:
	          return 32;
	      }
	    default:
	      return 32;
	  }
	}
	var hasScheduledReplayAttempt = false,
	  queuedFocus = null,
	  queuedDrag = null,
	  queuedMouse = null,
	  queuedPointers = new Map(),
	  queuedPointerCaptures = new Map(),
	  queuedExplicitHydrationTargets = [],
	  discreteReplayableEvents =
	    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset".split(
	      " "
	    );
	function clearIfContinuousEvent(domEventName, nativeEvent) {
	  switch (domEventName) {
	    case "focusin":
	    case "focusout":
	      queuedFocus = null;
	      break;
	    case "dragenter":
	    case "dragleave":
	      queuedDrag = null;
	      break;
	    case "mouseover":
	    case "mouseout":
	      queuedMouse = null;
	      break;
	    case "pointerover":
	    case "pointerout":
	      queuedPointers.delete(nativeEvent.pointerId);
	      break;
	    case "gotpointercapture":
	    case "lostpointercapture":
	      queuedPointerCaptures.delete(nativeEvent.pointerId);
	  }
	}
	function accumulateOrCreateContinuousQueuedReplayableEvent(
	  existingQueuedEvent,
	  blockedOn,
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  if (
	    null === existingQueuedEvent ||
	    existingQueuedEvent.nativeEvent !== nativeEvent
	  )
	    return (
	      (existingQueuedEvent = {
	        blockedOn: blockedOn,
	        domEventName: domEventName,
	        eventSystemFlags: eventSystemFlags,
	        nativeEvent: nativeEvent,
	        targetContainers: [targetContainer]
	      }),
	      null !== blockedOn &&
	        ((blockedOn = getInstanceFromNode(blockedOn)),
	        null !== blockedOn && attemptContinuousHydration(blockedOn)),
	      existingQueuedEvent
	    );
	  existingQueuedEvent.eventSystemFlags |= eventSystemFlags;
	  blockedOn = existingQueuedEvent.targetContainers;
	  null !== targetContainer &&
	    -1 === blockedOn.indexOf(targetContainer) &&
	    blockedOn.push(targetContainer);
	  return existingQueuedEvent;
	}
	function queueIfContinuousEvent(
	  blockedOn,
	  domEventName,
	  eventSystemFlags,
	  targetContainer,
	  nativeEvent
	) {
	  switch (domEventName) {
	    case "focusin":
	      return (
	        (queuedFocus = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedFocus,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        true
	      );
	    case "dragenter":
	      return (
	        (queuedDrag = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedDrag,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        true
	      );
	    case "mouseover":
	      return (
	        (queuedMouse = accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedMouse,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )),
	        true
	      );
	    case "pointerover":
	      var pointerId = nativeEvent.pointerId;
	      queuedPointers.set(
	        pointerId,
	        accumulateOrCreateContinuousQueuedReplayableEvent(
	          queuedPointers.get(pointerId) || null,
	          blockedOn,
	          domEventName,
	          eventSystemFlags,
	          targetContainer,
	          nativeEvent
	        )
	      );
	      return true;
	    case "gotpointercapture":
	      return (
	        (pointerId = nativeEvent.pointerId),
	        queuedPointerCaptures.set(
	          pointerId,
	          accumulateOrCreateContinuousQueuedReplayableEvent(
	            queuedPointerCaptures.get(pointerId) || null,
	            blockedOn,
	            domEventName,
	            eventSystemFlags,
	            targetContainer,
	            nativeEvent
	          )
	        ),
	        true
	      );
	  }
	  return false;
	}
	function attemptExplicitHydrationTarget(queuedTarget) {
	  var targetInst = getClosestInstanceFromNode(queuedTarget.target);
	  if (null !== targetInst) {
	    var nearestMounted = getNearestMountedFiber(targetInst);
	    if (null !== nearestMounted)
	      if (((targetInst = nearestMounted.tag), 13 === targetInst)) {
	        if (
	          ((targetInst = getSuspenseInstanceFromFiber(nearestMounted)),
	          null !== targetInst)
	        ) {
	          queuedTarget.blockedOn = targetInst;
	          runWithPriority(queuedTarget.priority, function () {
	            if (13 === nearestMounted.tag) {
	              var lane = requestUpdateLane();
	              lane = getBumpedLaneForHydrationByLane(lane);
	              var root = enqueueConcurrentRenderForLane(nearestMounted, lane);
	              null !== root &&
	                scheduleUpdateOnFiber(root, nearestMounted, lane);
	              markRetryLaneIfNotHydrated(nearestMounted, lane);
	            }
	          });
	          return;
	        }
	      } else if (
	        3 === targetInst &&
	        nearestMounted.stateNode.current.memoizedState.isDehydrated
	      ) {
	        queuedTarget.blockedOn =
	          3 === nearestMounted.tag
	            ? nearestMounted.stateNode.containerInfo
	            : null;
	        return;
	      }
	  }
	  queuedTarget.blockedOn = null;
	}
	function attemptReplayContinuousQueuedEvent(queuedEvent) {
	  if (null !== queuedEvent.blockedOn) return false;
	  for (
	    var targetContainers = queuedEvent.targetContainers;
	    0 < targetContainers.length;

	  ) {
	    var nextBlockedOn = findInstanceBlockingEvent(queuedEvent.nativeEvent);
	    if (null === nextBlockedOn) {
	      nextBlockedOn = queuedEvent.nativeEvent;
	      var nativeEventClone = new nextBlockedOn.constructor(
	        nextBlockedOn.type,
	        nextBlockedOn
	      );
	      currentReplayingEvent = nativeEventClone;
	      nextBlockedOn.target.dispatchEvent(nativeEventClone);
	      currentReplayingEvent = null;
	    } else
	      return (
	        (targetContainers = getInstanceFromNode(nextBlockedOn)),
	        null !== targetContainers &&
	          attemptContinuousHydration(targetContainers),
	        (queuedEvent.blockedOn = nextBlockedOn),
	        false
	      );
	    targetContainers.shift();
	  }
	  return true;
	}
	function attemptReplayContinuousQueuedEventInMap(queuedEvent, key, map) {
	  attemptReplayContinuousQueuedEvent(queuedEvent) && map.delete(key);
	}
	function replayUnblockedEvents() {
	  hasScheduledReplayAttempt = false;
	  null !== queuedFocus &&
	    attemptReplayContinuousQueuedEvent(queuedFocus) &&
	    (queuedFocus = null);
	  null !== queuedDrag &&
	    attemptReplayContinuousQueuedEvent(queuedDrag) &&
	    (queuedDrag = null);
	  null !== queuedMouse &&
	    attemptReplayContinuousQueuedEvent(queuedMouse) &&
	    (queuedMouse = null);
	  queuedPointers.forEach(attemptReplayContinuousQueuedEventInMap);
	  queuedPointerCaptures.forEach(attemptReplayContinuousQueuedEventInMap);
	}
	function scheduleCallbackIfUnblocked(queuedEvent, unblocked) {
	  queuedEvent.blockedOn === unblocked &&
	    ((queuedEvent.blockedOn = null),
	    hasScheduledReplayAttempt ||
	      ((hasScheduledReplayAttempt = true),
	      Scheduler.unstable_scheduleCallback(
	        Scheduler.unstable_NormalPriority,
	        replayUnblockedEvents
	      )));
	}
	var lastScheduledReplayQueue = null;
	function scheduleReplayQueueIfNeeded(formReplayingQueue) {
	  lastScheduledReplayQueue !== formReplayingQueue &&
	    ((lastScheduledReplayQueue = formReplayingQueue),
	    Scheduler.unstable_scheduleCallback(
	      Scheduler.unstable_NormalPriority,
	      function () {
	        lastScheduledReplayQueue === formReplayingQueue &&
	          (lastScheduledReplayQueue = null);
	        for (var i = 0; i < formReplayingQueue.length; i += 3) {
	          var form = formReplayingQueue[i],
	            submitterOrAction = formReplayingQueue[i + 1],
	            formData = formReplayingQueue[i + 2];
	          if ("function" !== typeof submitterOrAction)
	            if (null === findInstanceBlockingTarget(submitterOrAction || form))
	              continue;
	            else break;
	          var formInst = getInstanceFromNode(form);
	          null !== formInst &&
	            (formReplayingQueue.splice(i, 3),
	            (i -= 3),
	            startHostTransition(
	              formInst,
	              {
	                pending: true,
	                data: formData,
	                method: form.method,
	                action: submitterOrAction
	              },
	              submitterOrAction,
	              formData
	            ));
	        }
	      }
	    ));
	}
	function retryIfBlockedOn(unblocked) {
	  function unblock(queuedEvent) {
	    return scheduleCallbackIfUnblocked(queuedEvent, unblocked);
	  }
	  null !== queuedFocus && scheduleCallbackIfUnblocked(queuedFocus, unblocked);
	  null !== queuedDrag && scheduleCallbackIfUnblocked(queuedDrag, unblocked);
	  null !== queuedMouse && scheduleCallbackIfUnblocked(queuedMouse, unblocked);
	  queuedPointers.forEach(unblock);
	  queuedPointerCaptures.forEach(unblock);
	  for (var i = 0; i < queuedExplicitHydrationTargets.length; i++) {
	    var queuedTarget = queuedExplicitHydrationTargets[i];
	    queuedTarget.blockedOn === unblocked && (queuedTarget.blockedOn = null);
	  }
	  for (
	    ;
	    0 < queuedExplicitHydrationTargets.length &&
	    ((i = queuedExplicitHydrationTargets[0]), null === i.blockedOn);

	  )
	    attemptExplicitHydrationTarget(i),
	      null === i.blockedOn && queuedExplicitHydrationTargets.shift();
	  i = (unblocked.ownerDocument || unblocked).$$reactFormReplay;
	  if (null != i)
	    for (queuedTarget = 0; queuedTarget < i.length; queuedTarget += 3) {
	      var form = i[queuedTarget],
	        submitterOrAction = i[queuedTarget + 1],
	        formProps = form[internalPropsKey] || null;
	      if ("function" === typeof submitterOrAction)
	        formProps || scheduleReplayQueueIfNeeded(i);
	      else if (formProps) {
	        var action = null;
	        if (submitterOrAction && submitterOrAction.hasAttribute("formAction"))
	          if (
	            ((form = submitterOrAction),
	            (formProps = submitterOrAction[internalPropsKey] || null))
	          )
	            action = formProps.formAction;
	          else {
	            if (null !== findInstanceBlockingTarget(form)) continue;
	          }
	        else action = formProps.action;
	        "function" === typeof action
	          ? (i[queuedTarget + 1] = action)
	          : (i.splice(queuedTarget, 3), (queuedTarget -= 3));
	        scheduleReplayQueueIfNeeded(i);
	      }
	    }
	}
	function ReactDOMRoot(internalRoot) {
	  this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.render = ReactDOMRoot.prototype.render =
	  function (children) {
	    var root = this._internalRoot;
	    if (null === root) throw Error(formatProdErrorMessage(409));
	    var current = root.current,
	      lane = requestUpdateLane();
	    updateContainerImpl(current, lane, children, root, null, null);
	  };
	ReactDOMHydrationRoot.prototype.unmount = ReactDOMRoot.prototype.unmount =
	  function () {
	    var root = this._internalRoot;
	    if (null !== root) {
	      this._internalRoot = null;
	      var container = root.containerInfo;
	      updateContainerImpl(root.current, 2, null, root, null, null);
	      flushSyncWork$1();
	      container[internalContainerInstanceKey] = null;
	    }
	  };
	function ReactDOMHydrationRoot(internalRoot) {
	  this._internalRoot = internalRoot;
	}
	ReactDOMHydrationRoot.prototype.unstable_scheduleHydration = function (target) {
	  if (target) {
	    var updatePriority = resolveUpdatePriority();
	    target = { blockedOn: null, target: target, priority: updatePriority };
	    for (
	      var i = 0;
	      i < queuedExplicitHydrationTargets.length &&
	      0 !== updatePriority &&
	      updatePriority < queuedExplicitHydrationTargets[i].priority;
	      i++
	    );
	    queuedExplicitHydrationTargets.splice(i, 0, target);
	    0 === i && attemptExplicitHydrationTarget(target);
	  }
	};
	var isomorphicReactPackageVersion$jscomp$inline_1785 = React.version;
	if (
	  "19.1.0" !==
	  isomorphicReactPackageVersion$jscomp$inline_1785
	)
	  throw Error(
	    formatProdErrorMessage(
	      527,
	      isomorphicReactPackageVersion$jscomp$inline_1785,
	      "19.1.0"
	    )
	  );
	ReactDOMSharedInternals.findDOMNode = function (componentOrElement) {
	  var fiber = componentOrElement._reactInternals;
	  if (void 0 === fiber) {
	    if ("function" === typeof componentOrElement.render)
	      throw Error(formatProdErrorMessage(188));
	    componentOrElement = Object.keys(componentOrElement).join(",");
	    throw Error(formatProdErrorMessage(268, componentOrElement));
	  }
	  componentOrElement = findCurrentFiberUsingSlowPath(fiber);
	  componentOrElement =
	    null !== componentOrElement
	      ? findCurrentHostFiberImpl(componentOrElement)
	      : null;
	  componentOrElement =
	    null === componentOrElement ? null : componentOrElement.stateNode;
	  return componentOrElement;
	};
	var internals$jscomp$inline_2256 = {
	  bundleType: 0,
	  version: "19.1.0",
	  rendererPackageName: "react-dom",
	  currentDispatcherRef: ReactSharedInternals,
	  reconcilerVersion: "19.1.0"
	};
	if ("undefined" !== typeof __REACT_DEVTOOLS_GLOBAL_HOOK__) {
	  var hook$jscomp$inline_2257 = __REACT_DEVTOOLS_GLOBAL_HOOK__;
	  if (
	    !hook$jscomp$inline_2257.isDisabled &&
	    hook$jscomp$inline_2257.supportsFiber
	  )
	    try {
	      (rendererID = hook$jscomp$inline_2257.inject(
	        internals$jscomp$inline_2256
	      )),
	        (injectedHook = hook$jscomp$inline_2257);
	    } catch (err) {}
	}
	reactDomClient_production.createRoot = function (container, options) {
	  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
	  var isStrictMode = false,
	    identifierPrefix = "",
	    onUncaughtError = defaultOnUncaughtError,
	    onCaughtError = defaultOnCaughtError,
	    onRecoverableError = defaultOnRecoverableError,
	    transitionCallbacks = null;
	  null !== options &&
	    void 0 !== options &&
	    (true === options.unstable_strictMode && (isStrictMode = true),
	    void 0 !== options.identifierPrefix &&
	      (identifierPrefix = options.identifierPrefix),
	    void 0 !== options.onUncaughtError &&
	      (onUncaughtError = options.onUncaughtError),
	    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
	    void 0 !== options.onRecoverableError &&
	      (onRecoverableError = options.onRecoverableError),
	    void 0 !== options.unstable_transitionCallbacks &&
	      (transitionCallbacks = options.unstable_transitionCallbacks));
	  options = createFiberRoot(
	    container,
	    1,
	    false,
	    null,
	    null,
	    isStrictMode,
	    identifierPrefix,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    transitionCallbacks,
	    null
	  );
	  container[internalContainerInstanceKey] = options.current;
	  listenToAllSupportedEvents(container);
	  return new ReactDOMRoot(options);
	};
	reactDomClient_production.hydrateRoot = function (container, initialChildren, options) {
	  if (!isValidContainer(container)) throw Error(formatProdErrorMessage(299));
	  var isStrictMode = false,
	    identifierPrefix = "",
	    onUncaughtError = defaultOnUncaughtError,
	    onCaughtError = defaultOnCaughtError,
	    onRecoverableError = defaultOnRecoverableError,
	    transitionCallbacks = null,
	    formState = null;
	  null !== options &&
	    void 0 !== options &&
	    (true === options.unstable_strictMode && (isStrictMode = true),
	    void 0 !== options.identifierPrefix &&
	      (identifierPrefix = options.identifierPrefix),
	    void 0 !== options.onUncaughtError &&
	      (onUncaughtError = options.onUncaughtError),
	    void 0 !== options.onCaughtError && (onCaughtError = options.onCaughtError),
	    void 0 !== options.onRecoverableError &&
	      (onRecoverableError = options.onRecoverableError),
	    void 0 !== options.unstable_transitionCallbacks &&
	      (transitionCallbacks = options.unstable_transitionCallbacks),
	    void 0 !== options.formState && (formState = options.formState));
	  initialChildren = createFiberRoot(
	    container,
	    1,
	    true,
	    initialChildren,
	    null != options ? options : null,
	    isStrictMode,
	    identifierPrefix,
	    onUncaughtError,
	    onCaughtError,
	    onRecoverableError,
	    transitionCallbacks,
	    formState
	  );
	  initialChildren.context = getContextForSubtree(null);
	  options = initialChildren.current;
	  isStrictMode = requestUpdateLane();
	  isStrictMode = getBumpedLaneForHydrationByLane(isStrictMode);
	  identifierPrefix = createUpdate(isStrictMode);
	  identifierPrefix.callback = null;
	  enqueueUpdate(options, identifierPrefix, isStrictMode);
	  options = isStrictMode;
	  initialChildren.current.lanes = options;
	  markRootUpdated$1(initialChildren, options);
	  ensureRootIsScheduled(initialChildren);
	  container[internalContainerInstanceKey] = initialChildren.current;
	  listenToAllSupportedEvents(container);
	  return new ReactDOMHydrationRoot(initialChildren);
	};
	reactDomClient_production.version = "19.1.0";
	return reactDomClient_production;
}

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client.exports;
	hasRequiredClient = 1;
	function checkDCE() {
	  if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ === "undefined" || typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE !== "function") {
	    return;
	  }
	  try {
	    __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(checkDCE);
	  } catch (err) {
	    console.error(err);
	  }
	}
	{
	  checkDCE();
	  client.exports = requireReactDomClient_production();
	}
	return client.exports;
}

var clientExports = requireClient();
const ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(clientExports);

/*!
* sweetalert2 v11.21.2
* Released under the MIT License.
*/
function _assertClassBrand(e, t, n) {
  if ("function" == typeof e ? e === t : e.has(t)) return arguments.length < 3 ? t : n;
  throw new TypeError("Private element is not present on this object");
}
function _checkPrivateRedeclaration(e, t) {
  if (t.has(e)) throw new TypeError("Cannot initialize the same private elements twice on an object");
}
function _classPrivateFieldGet2(s, a) {
  return s.get(_assertClassBrand(s, a));
}
function _classPrivateFieldInitSpec(e, t, a) {
  _checkPrivateRedeclaration(e, t), t.set(e, a);
}
function _classPrivateFieldSet2(s, a, r) {
  return s.set(_assertClassBrand(s, a), r), r;
}

const RESTORE_FOCUS_TIMEOUT = 100;

/** @type {GlobalState} */
const globalState = {};
const focusPreviousActiveElement = () => {
  if (globalState.previousActiveElement instanceof HTMLElement) {
    globalState.previousActiveElement.focus();
    globalState.previousActiveElement = null;
  } else if (document.body) {
    document.body.focus();
  }
};

/**
 * Restore previous active (focused) element
 *
 * @param {boolean} returnFocus
 * @returns {Promise<void>}
 */
const restoreActiveElement = returnFocus => {
  return new Promise(resolve => {
    if (!returnFocus) {
      return resolve();
    }
    const x = window.scrollX;
    const y = window.scrollY;
    globalState.restoreFocusTimeout = setTimeout(() => {
      focusPreviousActiveElement();
      resolve();
    }, RESTORE_FOCUS_TIMEOUT); // issues/900

    window.scrollTo(x, y);
  });
};

const swalPrefix = 'swal2-';

/**
 * @typedef {Record<SwalClass, string>} SwalClasses
 */

/**
 * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
 * @typedef {Record<SwalIcon, string>} SwalIcons
 */

/** @type {SwalClass[]} */
const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'draggable', 'dragging'];
const swalClasses = classNames.reduce((acc, className) => {
  acc[className] = swalPrefix + className;
  return acc;
}, /** @type {SwalClasses} */{});

/** @type {SwalIcon[]} */
const icons = ['success', 'warning', 'info', 'question', 'error'];
const iconTypes = icons.reduce((acc, icon) => {
  acc[icon] = swalPrefix + icon;
  return acc;
}, /** @type {SwalIcons} */{});

const consolePrefix = 'SweetAlert2:';

/**
 * Capitalize the first letter of a string
 *
 * @param {string} str
 * @returns {string}
 */
const capitalizeFirstLetter = str => str.charAt(0).toUpperCase() + str.slice(1);

/**
 * Standardize console warnings
 *
 * @param {string | string[]} message
 */
const warn = message => {
  console.warn(`${consolePrefix} ${typeof message === 'object' ? message.join(' ') : message}`);
};

/**
 * Standardize console errors
 *
 * @param {string} message
 */
const error = message => {
  console.error(`${consolePrefix} ${message}`);
};

/**
 * Private global state for `warnOnce`
 *
 * @type {string[]}
 * @private
 */
const previousWarnOnceMessages = [];

/**
 * Show a console warning, but only if it hasn't already been shown
 *
 * @param {string} message
 */
const warnOnce = message => {
  if (!previousWarnOnceMessages.includes(message)) {
    previousWarnOnceMessages.push(message);
    warn(message);
  }
};

/**
 * Show a one-time console warning about deprecated params/methods
 *
 * @param {string} deprecatedParam
 * @param {string?} useInstead
 */
const warnAboutDeprecation = (deprecatedParam, useInstead = null) => {
  warnOnce(`"${deprecatedParam}" is deprecated and will be removed in the next major release.${useInstead ? ` Use "${useInstead}" instead.` : ''}`);
};

/**
 * If `arg` is a function, call it (with no arguments or context) and return the result.
 * Otherwise, just pass the value through
 *
 * @param {Function | any} arg
 * @returns {any}
 */
const callIfFunction = arg => typeof arg === 'function' ? arg() : arg;

/**
 * @param {any} arg
 * @returns {boolean}
 */
const hasToPromiseFn = arg => arg && typeof arg.toPromise === 'function';

/**
 * @param {any} arg
 * @returns {Promise<any>}
 */
const asPromise = arg => hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);

/**
 * @param {any} arg
 * @returns {boolean}
 */
const isPromise = arg => arg && Promise.resolve(arg) === arg;

/**
 * Gets the popup container which contains the backdrop and the popup itself.
 *
 * @returns {HTMLElement | null}
 */
const getContainer = () => document.body.querySelector(`.${swalClasses.container}`);

/**
 * @param {string} selectorString
 * @returns {HTMLElement | null}
 */
const elementBySelector = selectorString => {
  const container = getContainer();
  return container ? container.querySelector(selectorString) : null;
};

/**
 * @param {string} className
 * @returns {HTMLElement | null}
 */
const elementByClass = className => {
  return elementBySelector(`.${className}`);
};

/**
 * @returns {HTMLElement | null}
 */
const getPopup = () => elementByClass(swalClasses.popup);

/**
 * @returns {HTMLElement | null}
 */
const getIcon = () => elementByClass(swalClasses.icon);

/**
 * @returns {HTMLElement | null}
 */
const getIconContent = () => elementByClass(swalClasses['icon-content']);

/**
 * @returns {HTMLElement | null}
 */
const getTitle = () => elementByClass(swalClasses.title);

/**
 * @returns {HTMLElement | null}
 */
const getHtmlContainer = () => elementByClass(swalClasses['html-container']);

/**
 * @returns {HTMLElement | null}
 */
const getImage = () => elementByClass(swalClasses.image);

/**
 * @returns {HTMLElement | null}
 */
const getProgressSteps = () => elementByClass(swalClasses['progress-steps']);

/**
 * @returns {HTMLElement | null}
 */
const getValidationMessage = () => elementByClass(swalClasses['validation-message']);

/**
 * @returns {HTMLButtonElement | null}
 */
const getConfirmButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.confirm}`));

/**
 * @returns {HTMLButtonElement | null}
 */
const getCancelButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.cancel}`));

/**
 * @returns {HTMLButtonElement | null}
 */
const getDenyButton = () => (/** @type {HTMLButtonElement} */elementBySelector(`.${swalClasses.actions} .${swalClasses.deny}`));

/**
 * @returns {HTMLElement | null}
 */
const getInputLabel = () => elementByClass(swalClasses['input-label']);

/**
 * @returns {HTMLElement | null}
 */
const getLoader = () => elementBySelector(`.${swalClasses.loader}`);

/**
 * @returns {HTMLElement | null}
 */
const getActions = () => elementByClass(swalClasses.actions);

/**
 * @returns {HTMLElement | null}
 */
const getFooter = () => elementByClass(swalClasses.footer);

/**
 * @returns {HTMLElement | null}
 */
const getTimerProgressBar = () => elementByClass(swalClasses['timer-progress-bar']);

/**
 * @returns {HTMLElement | null}
 */
const getCloseButton = () => elementByClass(swalClasses.close);

// https://github.com/jkup/focusable/blob/master/index.js
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
/**
 * @returns {HTMLElement[]}
 */
const getFocusableElements = () => {
  const popup = getPopup();
  if (!popup) {
    return [];
  }
  /** @type {NodeListOf<HTMLElement>} */
  const focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
  const focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
  // sort according to tabindex
  .sort((a, b) => {
    const tabindexA = parseInt(a.getAttribute('tabindex') || '0');
    const tabindexB = parseInt(b.getAttribute('tabindex') || '0');
    if (tabindexA > tabindexB) {
      return 1;
    } else if (tabindexA < tabindexB) {
      return -1;
    }
    return 0;
  });

  /** @type {NodeListOf<HTMLElement>} */
  const otherFocusableElements = popup.querySelectorAll(focusable);
  const otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(el => el.getAttribute('tabindex') !== '-1');
  return [...new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))].filter(el => isVisible$1(el));
};

/**
 * @returns {boolean}
 */
const isModal = () => {
  return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
};

/**
 * @returns {boolean}
 */
const isToast = () => {
  const popup = getPopup();
  if (!popup) {
    return false;
  }
  return hasClass(popup, swalClasses.toast);
};

/**
 * @returns {boolean}
 */
const isLoading = () => {
  const popup = getPopup();
  if (!popup) {
    return false;
  }
  return popup.hasAttribute('data-loading');
};

/**
 * Securely set innerHTML of an element
 * https://github.com/sweetalert2/sweetalert2/issues/1926
 *
 * @param {HTMLElement} elem
 * @param {string} html
 */
const setInnerHtml = (elem, html) => {
  elem.textContent = '';
  if (html) {
    const parser = new DOMParser();
    const parsed = parser.parseFromString(html, `text/html`);
    const head = parsed.querySelector('head');
    if (head) {
      Array.from(head.childNodes).forEach(child => {
        elem.appendChild(child);
      });
    }
    const body = parsed.querySelector('body');
    if (body) {
      Array.from(body.childNodes).forEach(child => {
        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
        } else {
          elem.appendChild(child);
        }
      });
    }
  }
};

/**
 * @param {HTMLElement} elem
 * @param {string} className
 * @returns {boolean}
 */
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

/**
 * @param {HTMLElement} elem
 * @param {SweetAlertOptions} params
 */
const removeCustomClasses = (elem, params) => {
  Array.from(elem.classList).forEach(className => {
    if (!Object.values(swalClasses).includes(className) && !Object.values(iconTypes).includes(className) && !Object.values(params.showClass || {}).includes(className)) {
      elem.classList.remove(className);
    }
  });
};

/**
 * @param {HTMLElement} elem
 * @param {SweetAlertOptions} params
 * @param {string} className
 */
const applyCustomClass = (elem, params, className) => {
  removeCustomClasses(elem, params);
  if (!params.customClass) {
    return;
  }
  const customClass = params.customClass[(/** @type {keyof SweetAlertCustomClass} */className)];
  if (!customClass) {
    return;
  }
  if (typeof customClass !== 'string' && !customClass.forEach) {
    warn(`Invalid type of customClass.${className}! Expected string or iterable object, got "${typeof customClass}"`);
    return;
  }
  addClass(elem, customClass);
};

/**
 * @param {HTMLElement} popup
 * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
 * @returns {HTMLInputElement | null}
 */
const getInput$1 = (popup, inputClass) => {
  if (!inputClass) {
    return null;
  }
  switch (inputClass) {
    case 'select':
    case 'textarea':
    case 'file':
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses[inputClass]}`);
    case 'checkbox':
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.checkbox} input`);
    case 'radio':
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:checked`) || popup.querySelector(`.${swalClasses.popup} > .${swalClasses.radio} input:first-child`);
    case 'range':
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.range} input`);
    default:
      return popup.querySelector(`.${swalClasses.popup} > .${swalClasses.input}`);
  }
};

/**
 * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
 */
const focusInput = input => {
  input.focus();

  // place cursor at end of text in text input
  if (input.type !== 'file') {
    // http://stackoverflow.com/a/2345915
    const val = input.value;
    input.value = '';
    input.value = val;
  }
};

/**
 * @param {HTMLElement | HTMLElement[] | null} target
 * @param {string | string[] | readonly string[] | undefined} classList
 * @param {boolean} condition
 */
const toggleClass = (target, classList, condition) => {
  if (!target || !classList) {
    return;
  }
  if (typeof classList === 'string') {
    classList = classList.split(/\s+/).filter(Boolean);
  }
  classList.forEach(className => {
    if (Array.isArray(target)) {
      target.forEach(elem => {
        if (condition) {
          elem.classList.add(className);
        } else {
          elem.classList.remove(className);
        }
      });
    } else {
      if (condition) {
        target.classList.add(className);
      } else {
        target.classList.remove(className);
      }
    }
  });
};

/**
 * @param {HTMLElement | HTMLElement[] | null} target
 * @param {string | string[] | readonly string[] | undefined} classList
 */
const addClass = (target, classList) => {
  toggleClass(target, classList, true);
};

/**
 * @param {HTMLElement | HTMLElement[] | null} target
 * @param {string | string[] | readonly string[] | undefined} classList
 */
const removeClass = (target, classList) => {
  toggleClass(target, classList, false);
};

/**
 * Get direct child of an element by class name
 *
 * @param {HTMLElement} elem
 * @param {string} className
 * @returns {HTMLElement | undefined}
 */
const getDirectChildByClass = (elem, className) => {
  const children = Array.from(elem.children);
  for (let i = 0; i < children.length; i++) {
    const child = children[i];
    if (child instanceof HTMLElement && hasClass(child, className)) {
      return child;
    }
  }
};

/**
 * @param {HTMLElement} elem
 * @param {string} property
 * @param {*} value
 */
const applyNumericalStyle = (elem, property, value) => {
  if (value === `${parseInt(value)}`) {
    value = parseInt(value);
  }
  if (value || parseInt(value) === 0) {
    elem.style.setProperty(property, typeof value === 'number' ? `${value}px` : value);
  } else {
    elem.style.removeProperty(property);
  }
};

/**
 * @param {HTMLElement | null} elem
 * @param {string} display
 */
const show = (elem, display = 'flex') => {
  if (!elem) {
    return;
  }
  elem.style.display = display;
};

/**
 * @param {HTMLElement | null} elem
 */
const hide = elem => {
  if (!elem) {
    return;
  }
  elem.style.display = 'none';
};

/**
 * @param {HTMLElement | null} elem
 * @param {string} display
 */
const showWhenInnerHtmlPresent = (elem, display = 'block') => {
  if (!elem) {
    return;
  }
  new MutationObserver(() => {
    toggle(elem, elem.innerHTML, display);
  }).observe(elem, {
    childList: true,
    subtree: true
  });
};

/**
 * @param {HTMLElement} parent
 * @param {string} selector
 * @param {string} property
 * @param {string} value
 */
const setStyle = (parent, selector, property, value) => {
  /** @type {HTMLElement | null} */
  const el = parent.querySelector(selector);
  if (el) {
    el.style.setProperty(property, value);
  }
};

/**
 * @param {HTMLElement} elem
 * @param {any} condition
 * @param {string} display
 */
const toggle = (elem, condition, display = 'flex') => {
  if (condition) {
    show(elem, display);
  } else {
    hide(elem);
  }
};

/**
 * borrowed from jquery $(elem).is(':visible') implementation
 *
 * @param {HTMLElement | null} elem
 * @returns {boolean}
 */
const isVisible$1 = elem => !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));

/**
 * @returns {boolean}
 */
const allButtonsAreHidden = () => !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());

/**
 * @param {HTMLElement} elem
 * @returns {boolean}
 */
const isScrollable = elem => !!(elem.scrollHeight > elem.clientHeight);

/**
 * @param {HTMLElement} element
 * @param {HTMLElement} stopElement
 * @returns {boolean}
 */
const selfOrParentIsScrollable = (element, stopElement) => {
  let parent = element;
  while (parent && parent !== stopElement) {
    if (isScrollable(parent)) {
      return true;
    }
    parent = parent.parentElement;
  }
  return false;
};

/**
 * borrowed from https://stackoverflow.com/a/46352119
 *
 * @param {HTMLElement} elem
 * @returns {boolean}
 */
const hasCssAnimation = elem => {
  const style = window.getComputedStyle(elem);
  const animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
  const transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
  return animDuration > 0 || transDuration > 0;
};

/**
 * @param {number} timer
 * @param {boolean} reset
 */
const animateTimerProgressBar = (timer, reset = false) => {
  const timerProgressBar = getTimerProgressBar();
  if (!timerProgressBar) {
    return;
  }
  if (isVisible$1(timerProgressBar)) {
    if (reset) {
      timerProgressBar.style.transition = 'none';
      timerProgressBar.style.width = '100%';
    }
    setTimeout(() => {
      timerProgressBar.style.transition = `width ${timer / 1000}s linear`;
      timerProgressBar.style.width = '0%';
    }, 10);
  }
};
const stopTimerProgressBar = () => {
  const timerProgressBar = getTimerProgressBar();
  if (!timerProgressBar) {
    return;
  }
  const timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  timerProgressBar.style.removeProperty('transition');
  timerProgressBar.style.width = '100%';
  const timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
  const timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
  timerProgressBar.style.width = `${timerProgressBarPercent}%`;
};

/**
 * Detect Node env
 *
 * @returns {boolean}
 */
const isNodeEnv = () => typeof window === 'undefined' || typeof document === 'undefined';

const sweetHTML = `
 <div aria-labelledby="${swalClasses.title}" aria-describedby="${swalClasses['html-container']}" class="${swalClasses.popup}" tabindex="-1">
   <button type="button" class="${swalClasses.close}"></button>
   <ul class="${swalClasses['progress-steps']}"></ul>
   <div class="${swalClasses.icon}"></div>
   <img class="${swalClasses.image}" />
   <h2 class="${swalClasses.title}" id="${swalClasses.title}"></h2>
   <div class="${swalClasses['html-container']}" id="${swalClasses['html-container']}"></div>
   <input class="${swalClasses.input}" id="${swalClasses.input}" />
   <input type="file" class="${swalClasses.file}" />
   <div class="${swalClasses.range}">
     <input type="range" />
     <output></output>
   </div>
   <select class="${swalClasses.select}" id="${swalClasses.select}"></select>
   <div class="${swalClasses.radio}"></div>
   <label class="${swalClasses.checkbox}">
     <input type="checkbox" id="${swalClasses.checkbox}" />
     <span class="${swalClasses.label}"></span>
   </label>
   <textarea class="${swalClasses.textarea}" id="${swalClasses.textarea}"></textarea>
   <div class="${swalClasses['validation-message']}" id="${swalClasses['validation-message']}"></div>
   <div class="${swalClasses.actions}">
     <div class="${swalClasses.loader}"></div>
     <button type="button" class="${swalClasses.confirm}"></button>
     <button type="button" class="${swalClasses.deny}"></button>
     <button type="button" class="${swalClasses.cancel}"></button>
   </div>
   <div class="${swalClasses.footer}"></div>
   <div class="${swalClasses['timer-progress-bar-container']}">
     <div class="${swalClasses['timer-progress-bar']}"></div>
   </div>
 </div>
`.replace(/(^|\n)\s*/g, '');

/**
 * @returns {boolean}
 */
const resetOldContainer = () => {
  const oldContainer = getContainer();
  if (!oldContainer) {
    return false;
  }
  oldContainer.remove();
  removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
  return true;
};
const resetValidationMessage$1 = () => {
  globalState.currentInstance.resetValidationMessage();
};
const addInputChangeListeners = () => {
  const popup = getPopup();
  const input = getDirectChildByClass(popup, swalClasses.input);
  const file = getDirectChildByClass(popup, swalClasses.file);
  /** @type {HTMLInputElement} */
  const range = popup.querySelector(`.${swalClasses.range} input`);
  /** @type {HTMLOutputElement} */
  const rangeOutput = popup.querySelector(`.${swalClasses.range} output`);
  const select = getDirectChildByClass(popup, swalClasses.select);
  /** @type {HTMLInputElement} */
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

/**
 * @param {string | HTMLElement} target
 * @returns {HTMLElement}
 */
const getTarget = target => typeof target === 'string' ? document.querySelector(target) : target;

/**
 * @param {SweetAlertOptions} params
 */
const setupAccessibility = params => {
  const popup = getPopup();
  popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
  popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
  if (!params.toast) {
    popup.setAttribute('aria-modal', 'true');
  }
};

/**
 * @param {HTMLElement} targetElement
 */
const setupRTL = targetElement => {
  if (window.getComputedStyle(targetElement).direction === 'rtl') {
    addClass(getContainer(), swalClasses.rtl);
  }
};

/**
 * Add modal + backdrop + no-war message for Russians to DOM
 *
 * @param {SweetAlertOptions} params
 */
const init = params => {
  // Clean up the old popup container if it exists
  const oldContainerExisted = resetOldContainer();
  if (isNodeEnv()) {
    error('SweetAlert2 requires document to initialize');
    return;
  }
  const container = document.createElement('div');
  container.className = swalClasses.container;
  if (oldContainerExisted) {
    addClass(container, swalClasses['no-transition']);
  }
  setInnerHtml(container, sweetHTML);
  container.dataset['swal2Theme'] = params.theme;
  const targetElement = getTarget(params.target);
  targetElement.appendChild(container);
  if (params.topLayer) {
    container.setAttribute('popover', '');
    container.showPopover();
  }
  setupAccessibility(params);
  setupRTL(targetElement);
  addInputChangeListeners();
};

/**
 * @param {HTMLElement | object | string} param
 * @param {HTMLElement} target
 */
const parseHtmlToContainer = (param, target) => {
  // DOM element
  if (param instanceof HTMLElement) {
    target.appendChild(param);
  }

  // Object
  else if (typeof param === 'object') {
    handleObject(param, target);
  }

  // Plain string
  else if (param) {
    setInnerHtml(target, param);
  }
};

/**
 * @param {any} param
 * @param {HTMLElement} target
 */
const handleObject = (param, target) => {
  // JQuery element(s)
  if (param.jquery) {
    handleJqueryElem(target, param);
  }

  // For other objects use their string representation
  else {
    setInnerHtml(target, param.toString());
  }
};

/**
 * @param {HTMLElement} target
 * @param {any} elem
 */
const handleJqueryElem = (target, elem) => {
  target.textContent = '';
  if (0 in elem) {
    for (let i = 0; i in elem; i++) {
      target.appendChild(elem[i].cloneNode(true));
    }
  } else {
    target.appendChild(elem.cloneNode(true));
  }
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderActions = (instance, params) => {
  const actions = getActions();
  const loader = getLoader();
  if (!actions || !loader) {
    return;
  }

  // Actions (buttons) wrapper
  if (!params.showConfirmButton && !params.showDenyButton && !params.showCancelButton) {
    hide(actions);
  } else {
    show(actions);
  }

  // Custom class
  applyCustomClass(actions, params, 'actions');

  // Render all the buttons
  renderButtons(actions, loader, params);

  // Loader
  setInnerHtml(loader, params.loaderHtml || '');
  applyCustomClass(loader, params, 'loader');
};

/**
 * @param {HTMLElement} actions
 * @param {HTMLElement} loader
 * @param {SweetAlertOptions} params
 */
function renderButtons(actions, loader, params) {
  const confirmButton = getConfirmButton();
  const denyButton = getDenyButton();
  const cancelButton = getCancelButton();
  if (!confirmButton || !denyButton || !cancelButton) {
    return;
  }

  // Render buttons
  renderButton(confirmButton, 'confirm', params);
  renderButton(denyButton, 'deny', params);
  renderButton(cancelButton, 'cancel', params);
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

/**
 * @param {HTMLElement} confirmButton
 * @param {HTMLElement} denyButton
 * @param {HTMLElement} cancelButton
 * @param {SweetAlertOptions} params
 */
function handleButtonsStyling(confirmButton, denyButton, cancelButton, params) {
  if (!params.buttonsStyling) {
    removeClass([confirmButton, denyButton, cancelButton], swalClasses.styled);
    return;
  }
  addClass([confirmButton, denyButton, cancelButton], swalClasses.styled);

  // Apply custom background colors to action buttons
  if (params.confirmButtonColor) {
    confirmButton.style.setProperty('--swal2-confirm-button-background-color', params.confirmButtonColor);
  }
  if (params.denyButtonColor) {
    denyButton.style.setProperty('--swal2-deny-button-background-color', params.denyButtonColor);
  }
  if (params.cancelButtonColor) {
    cancelButton.style.setProperty('--swal2-cancel-button-background-color', params.cancelButtonColor);
  }

  // Apply the outline color to action buttons
  applyOutlineColor(confirmButton);
  applyOutlineColor(denyButton);
  applyOutlineColor(cancelButton);
}

/**
 * @param {HTMLElement} button
 */
function applyOutlineColor(button) {
  const buttonStyle = window.getComputedStyle(button);
  const outlineColor = buttonStyle.backgroundColor.replace(/rgba?\((\d+), (\d+), (\d+).*/, 'rgba($1, $2, $3, 0.5)');
  button.style.setProperty('--swal2-action-button-outline', buttonStyle.getPropertyValue('--swal2-outline').replace(/ rgba\(.*/, ` ${outlineColor}`));
}

/**
 * @param {HTMLElement} button
 * @param {'confirm' | 'deny' | 'cancel'} buttonType
 * @param {SweetAlertOptions} params
 */
function renderButton(button, buttonType, params) {
  const buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
  toggle(button, params[`show${buttonName}Button`], 'inline-block');
  setInnerHtml(button, params[`${buttonType}ButtonText`] || ''); // Set caption text
  button.setAttribute('aria-label', params[`${buttonType}ButtonAriaLabel`] || ''); // ARIA label

  // Add buttons custom classes
  button.className = swalClasses[buttonType];
  applyCustomClass(button, params, `${buttonType}Button`);
}

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderCloseButton = (instance, params) => {
  const closeButton = getCloseButton();
  if (!closeButton) {
    return;
  }
  setInnerHtml(closeButton, params.closeButtonHtml || '');

  // Custom class
  applyCustomClass(closeButton, params, 'closeButton');
  toggle(closeButton, params.showCloseButton);
  closeButton.setAttribute('aria-label', params.closeButtonAriaLabel || '');
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderContainer = (instance, params) => {
  const container = getContainer();
  if (!container) {
    return;
  }
  handleBackdropParam(container, params.backdrop);
  handlePositionParam(container, params.position);
  handleGrowParam(container, params.grow);

  // Custom class
  applyCustomClass(container, params, 'container');
};

/**
 * @param {HTMLElement} container
 * @param {SweetAlertOptions['backdrop']} backdrop
 */
function handleBackdropParam(container, backdrop) {
  if (typeof backdrop === 'string') {
    container.style.background = backdrop;
  } else if (!backdrop) {
    addClass([document.documentElement, document.body], swalClasses['no-backdrop']);
  }
}

/**
 * @param {HTMLElement} container
 * @param {SweetAlertOptions['position']} position
 */
function handlePositionParam(container, position) {
  if (!position) {
    return;
  }
  if (position in swalClasses) {
    addClass(container, swalClasses[position]);
  } else {
    warn('The "position" parameter is not valid, defaulting to "center"');
    addClass(container, swalClasses.center);
  }
}

/**
 * @param {HTMLElement} container
 * @param {SweetAlertOptions['grow']} grow
 */
function handleGrowParam(container, grow) {
  if (!grow) {
    return;
  }
  addClass(container, swalClasses[`grow-${grow}`]);
}

/**
 * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

var privateProps = {
  innerParams: new WeakMap(),
  domCache: new WeakMap()
};

/// <reference path="../../../../sweetalert2.d.ts"/>


/** @type {InputClass[]} */
const inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderInput = (instance, params) => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  const innerParams = privateProps.innerParams.get(instance);
  const rerender = !innerParams || params.input !== innerParams.input;
  inputClasses.forEach(inputClass => {
    const inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
    if (!inputContainer) {
      return;
    }

    // set attributes
    setAttributes(inputClass, params.inputAttributes);

    // set class
    inputContainer.className = swalClasses[inputClass];
    if (rerender) {
      hide(inputContainer);
    }
  });
  if (params.input) {
    if (rerender) {
      showInput(params);
    }
    // set custom class
    setCustomClass(params);
  }
};

/**
 * @param {SweetAlertOptions} params
 */
const showInput = params => {
  if (!params.input) {
    return;
  }
  if (!renderInputType[params.input]) {
    error(`Unexpected type of input! Expected ${Object.keys(renderInputType).join(' | ')}, got "${params.input}"`);
    return;
  }
  const inputContainer = getInputContainer(params.input);
  if (!inputContainer) {
    return;
  }
  const input = renderInputType[params.input](inputContainer, params);
  show(inputContainer);

  // input autofocus
  if (params.inputAutoFocus) {
    setTimeout(() => {
      focusInput(input);
    });
  }
};

/**
 * @param {HTMLInputElement} input
 */
const removeAttributes = input => {
  for (let i = 0; i < input.attributes.length; i++) {
    const attrName = input.attributes[i].name;
    if (!['id', 'type', 'value', 'style'].includes(attrName)) {
      input.removeAttribute(attrName);
    }
  }
};

/**
 * @param {InputClass} inputClass
 * @param {SweetAlertOptions['inputAttributes']} inputAttributes
 */
const setAttributes = (inputClass, inputAttributes) => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  const input = getInput$1(popup, inputClass);
  if (!input) {
    return;
  }
  removeAttributes(input);
  for (const attr in inputAttributes) {
    input.setAttribute(attr, inputAttributes[attr]);
  }
};

/**
 * @param {SweetAlertOptions} params
 */
const setCustomClass = params => {
  if (!params.input) {
    return;
  }
  const inputContainer = getInputContainer(params.input);
  if (inputContainer) {
    applyCustomClass(inputContainer, params, 'input');
  }
};

/**
 * @param {HTMLInputElement | HTMLTextAreaElement} input
 * @param {SweetAlertOptions} params
 */
const setInputPlaceholder = (input, params) => {
  if (!input.placeholder && params.inputPlaceholder) {
    input.placeholder = params.inputPlaceholder;
  }
};

/**
 * @param {Input} input
 * @param {Input} prependTo
 * @param {SweetAlertOptions} params
 */
const setInputLabel = (input, prependTo, params) => {
  if (params.inputLabel) {
    const label = document.createElement('label');
    const labelClass = swalClasses['input-label'];
    label.setAttribute('for', input.id);
    label.className = labelClass;
    if (typeof params.customClass === 'object') {
      addClass(label, params.customClass.inputLabel);
    }
    label.innerText = params.inputLabel;
    prependTo.insertAdjacentElement('beforebegin', label);
  }
};

/**
 * @param {SweetAlertInput} inputType
 * @returns {HTMLElement | undefined}
 */
const getInputContainer = inputType => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  return getDirectChildByClass(popup, swalClasses[(/** @type {SwalClass} */inputType)] || swalClasses.input);
};

/**
 * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
 * @param {SweetAlertOptions['inputValue']} inputValue
 */
const checkAndSetInputValue = (input, inputValue) => {
  if (['string', 'number'].includes(typeof inputValue)) {
    input.value = `${inputValue}`;
  } else if (!isPromise(inputValue)) {
    warn(`Unexpected type of inputValue! Expected "string", "number" or "Promise", got "${typeof inputValue}"`);
  }
};

/** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
const renderInputType = {};

/**
 * @param {HTMLInputElement} input
 * @param {SweetAlertOptions} params
 * @returns {HTMLInputElement}
 */
renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = /** @type {(input: Input | HTMLElement, params: SweetAlertOptions) => Input} */
(input, params) => {
  checkAndSetInputValue(input, params.inputValue);
  setInputLabel(input, input, params);
  setInputPlaceholder(input, params);
  input.type = params.input;
  return input;
};

/**
 * @param {HTMLInputElement} input
 * @param {SweetAlertOptions} params
 * @returns {HTMLInputElement}
 */
renderInputType.file = (input, params) => {
  setInputLabel(input, input, params);
  setInputPlaceholder(input, params);
  return input;
};

/**
 * @param {HTMLInputElement} range
 * @param {SweetAlertOptions} params
 * @returns {HTMLInputElement}
 */
renderInputType.range = (range, params) => {
  const rangeInput = range.querySelector('input');
  const rangeOutput = range.querySelector('output');
  checkAndSetInputValue(rangeInput, params.inputValue);
  rangeInput.type = params.input;
  checkAndSetInputValue(rangeOutput, params.inputValue);
  setInputLabel(rangeInput, range, params);
  return range;
};

/**
 * @param {HTMLSelectElement} select
 * @param {SweetAlertOptions} params
 * @returns {HTMLSelectElement}
 */
renderInputType.select = (select, params) => {
  select.textContent = '';
  if (params.inputPlaceholder) {
    const placeholder = document.createElement('option');
    setInnerHtml(placeholder, params.inputPlaceholder);
    placeholder.value = '';
    placeholder.disabled = true;
    placeholder.selected = true;
    select.appendChild(placeholder);
  }
  setInputLabel(select, select, params);
  return select;
};

/**
 * @param {HTMLInputElement} radio
 * @returns {HTMLInputElement}
 */
renderInputType.radio = radio => {
  radio.textContent = '';
  return radio;
};

/**
 * @param {HTMLLabelElement} checkboxContainer
 * @param {SweetAlertOptions} params
 * @returns {HTMLInputElement}
 */
renderInputType.checkbox = (checkboxContainer, params) => {
  const checkbox = getInput$1(getPopup(), 'checkbox');
  checkbox.value = '1';
  checkbox.checked = Boolean(params.inputValue);
  const label = checkboxContainer.querySelector('span');
  setInnerHtml(label, params.inputPlaceholder || params.inputLabel);
  return checkbox;
};

/**
 * @param {HTMLTextAreaElement} textarea
 * @param {SweetAlertOptions} params
 * @returns {HTMLTextAreaElement}
 */
renderInputType.textarea = (textarea, params) => {
  checkAndSetInputValue(textarea, params.inputValue);
  setInputPlaceholder(textarea, params);
  setInputLabel(textarea, textarea, params);

  /**
   * @param {HTMLElement} el
   * @returns {number}
   */
  const getMargin = el => parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);

  // https://github.com/sweetalert2/sweetalert2/issues/2291
  setTimeout(() => {
    // https://github.com/sweetalert2/sweetalert2/issues/1699
    if ('MutationObserver' in window) {
      const initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
      const textareaResizeHandler = () => {
        // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
        if (!document.body.contains(textarea)) {
          return;
        }
        const textareaWidth = textarea.offsetWidth + getMargin(textarea);
        if (textareaWidth > initialPopupWidth) {
          getPopup().style.width = `${textareaWidth}px`;
        } else {
          applyNumericalStyle(getPopup(), 'width', params.width);
        }
      };
      new MutationObserver(textareaResizeHandler).observe(textarea, {
        attributes: true,
        attributeFilter: ['style']
      });
    }
  });
  return textarea;
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderContent = (instance, params) => {
  const htmlContainer = getHtmlContainer();
  if (!htmlContainer) {
    return;
  }
  showWhenInnerHtmlPresent(htmlContainer);
  applyCustomClass(htmlContainer, params, 'htmlContainer');

  // Content as HTML
  if (params.html) {
    parseHtmlToContainer(params.html, htmlContainer);
    show(htmlContainer, 'block');
  }

  // Content as plain text
  else if (params.text) {
    htmlContainer.textContent = params.text;
    show(htmlContainer, 'block');
  }

  // No content
  else {
    hide(htmlContainer);
  }
  renderInput(instance, params);
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderFooter = (instance, params) => {
  const footer = getFooter();
  if (!footer) {
    return;
  }
  showWhenInnerHtmlPresent(footer);
  toggle(footer, params.footer, 'block');
  if (params.footer) {
    parseHtmlToContainer(params.footer, footer);
  }

  // Custom class
  applyCustomClass(footer, params, 'footer');
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderIcon = (instance, params) => {
  const innerParams = privateProps.innerParams.get(instance);
  const icon = getIcon();
  if (!icon) {
    return;
  }

  // if the given icon already rendered, apply the styling without re-rendering the icon
  if (innerParams && params.icon === innerParams.icon) {
    // Custom or default content
    setContent(icon, params);
    applyStyles(icon, params);
    return;
  }
  if (!params.icon && !params.iconHtml) {
    hide(icon);
    return;
  }
  if (params.icon && Object.keys(iconTypes).indexOf(params.icon) === -1) {
    error(`Unknown icon! Expected "success", "error", "warning", "info" or "question", got "${params.icon}"`);
    hide(icon);
    return;
  }
  show(icon);

  // Custom or default content
  setContent(icon, params);
  applyStyles(icon, params);

  // Animate icon
  addClass(icon, params.showClass && params.showClass.icon);

  // Re-adjust the success icon on system theme change
  const colorSchemeQueryList = window.matchMedia('(prefers-color-scheme: dark)');
  colorSchemeQueryList.addEventListener('change', adjustSuccessIconBackgroundColor);
};

/**
 * @param {HTMLElement} icon
 * @param {SweetAlertOptions} params
 */
const applyStyles = (icon, params) => {
  for (const [iconType, iconClassName] of Object.entries(iconTypes)) {
    if (params.icon !== iconType) {
      removeClass(icon, iconClassName);
    }
  }
  addClass(icon, params.icon && iconTypes[params.icon]);

  // Icon color
  setColor(icon, params);

  // Success icon background color
  adjustSuccessIconBackgroundColor();

  // Custom class
  applyCustomClass(icon, params, 'icon');
};

// Adjust success icon background color to match the popup background color
const adjustSuccessIconBackgroundColor = () => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  const popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
  /** @type {NodeListOf<HTMLElement>} */
  const successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
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

/**
 * @param {HTMLElement} icon
 * @param {SweetAlertOptions} params
 */
const setContent = (icon, params) => {
  if (!params.icon && !params.iconHtml) {
    return;
  }
  let oldContent = icon.innerHTML;
  let newContent = '';
  if (params.iconHtml) {
    newContent = iconContent(params.iconHtml);
  } else if (params.icon === 'success') {
    newContent = successIconHtml;
    oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
  } else if (params.icon === 'error') {
    newContent = errorIconHtml;
  } else if (params.icon) {
    const defaultIconHtml = {
      question: '?',
      warning: '!',
      info: 'i'
    };
    newContent = iconContent(defaultIconHtml[params.icon]);
  }
  if (oldContent.trim() !== newContent.trim()) {
    setInnerHtml(icon, newContent);
  }
};

/**
 * @param {HTMLElement} icon
 * @param {SweetAlertOptions} params
 */
const setColor = (icon, params) => {
  if (!params.iconColor) {
    return;
  }
  icon.style.color = params.iconColor;
  icon.style.borderColor = params.iconColor;
  for (const sel of ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']) {
    setStyle(icon, sel, 'background-color', params.iconColor);
  }
  setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
};

/**
 * @param {string} content
 * @returns {string}
 */
const iconContent = content => `<div class="${swalClasses['icon-content']}">${content}</div>`;

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderImage = (instance, params) => {
  const image = getImage();
  if (!image) {
    return;
  }
  if (!params.imageUrl) {
    hide(image);
    return;
  }
  show(image, '');

  // Src, alt
  image.setAttribute('src', params.imageUrl);
  image.setAttribute('alt', params.imageAlt || '');

  // Width, height
  applyNumericalStyle(image, 'width', params.imageWidth);
  applyNumericalStyle(image, 'height', params.imageHeight);

  // Class
  image.className = swalClasses.image;
  applyCustomClass(image, params, 'image');
};

let dragging = false;
let mousedownX = 0;
let mousedownY = 0;
let initialX = 0;
let initialY = 0;

/**
 * @param {HTMLElement} popup
 */
const addDraggableListeners = popup => {
  popup.addEventListener('mousedown', down);
  document.body.addEventListener('mousemove', move);
  popup.addEventListener('mouseup', up);
  popup.addEventListener('touchstart', down);
  document.body.addEventListener('touchmove', move);
  popup.addEventListener('touchend', up);
};

/**
 * @param {HTMLElement} popup
 */
const removeDraggableListeners = popup => {
  popup.removeEventListener('mousedown', down);
  document.body.removeEventListener('mousemove', move);
  popup.removeEventListener('mouseup', up);
  popup.removeEventListener('touchstart', down);
  document.body.removeEventListener('touchmove', move);
  popup.removeEventListener('touchend', up);
};

/**
 * @param {MouseEvent | TouchEvent} event
 */
const down = event => {
  const popup = getPopup();
  if (event.target === popup || getIcon().contains(/** @type {HTMLElement} */event.target)) {
    dragging = true;
    const clientXY = getClientXY(event);
    mousedownX = clientXY.clientX;
    mousedownY = clientXY.clientY;
    initialX = parseInt(popup.style.insetInlineStart) || 0;
    initialY = parseInt(popup.style.insetBlockStart) || 0;
    addClass(popup, 'swal2-dragging');
  }
};

/**
 * @param {MouseEvent | TouchEvent} event
 */
const move = event => {
  const popup = getPopup();
  if (dragging) {
    let {
      clientX,
      clientY
    } = getClientXY(event);
    popup.style.insetInlineStart = `${initialX + (clientX - mousedownX)}px`;
    popup.style.insetBlockStart = `${initialY + (clientY - mousedownY)}px`;
  }
};
const up = () => {
  const popup = getPopup();
  dragging = false;
  removeClass(popup, 'swal2-dragging');
};

/**
 * @param {MouseEvent | TouchEvent} event
 * @returns {{ clientX: number, clientY: number }}
 */
const getClientXY = event => {
  let clientX = 0,
    clientY = 0;
  if (event.type.startsWith('mouse')) {
    clientX = /** @type {MouseEvent} */event.clientX;
    clientY = /** @type {MouseEvent} */event.clientY;
  } else if (event.type.startsWith('touch')) {
    clientX = /** @type {TouchEvent} */event.touches[0].clientX;
    clientY = /** @type {TouchEvent} */event.touches[0].clientY;
  }
  return {
    clientX,
    clientY
  };
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderPopup = (instance, params) => {
  const container = getContainer();
  const popup = getPopup();
  if (!container || !popup) {
    return;
  }

  // Width
  // https://github.com/sweetalert2/sweetalert2/issues/2170
  if (params.toast) {
    applyNumericalStyle(container, 'width', params.width);
    popup.style.width = '100%';
    const loader = getLoader();
    if (loader) {
      popup.insertBefore(loader, getIcon());
    }
  } else {
    applyNumericalStyle(popup, 'width', params.width);
  }

  // Padding
  applyNumericalStyle(popup, 'padding', params.padding);

  // Color
  if (params.color) {
    popup.style.color = params.color;
  }

  // Background
  if (params.background) {
    popup.style.background = params.background;
  }
  hide(getValidationMessage());

  // Classes
  addClasses$1(popup, params);
  if (params.draggable && !params.toast) {
    addClass(popup, swalClasses.draggable);
    addDraggableListeners(popup);
  } else {
    removeClass(popup, swalClasses.draggable);
    removeDraggableListeners(popup);
  }
};

/**
 * @param {HTMLElement} popup
 * @param {SweetAlertOptions} params
 */
const addClasses$1 = (popup, params) => {
  const showClass = params.showClass || {};
  // Default Class + showClass when updating Swal.update({})
  popup.className = `${swalClasses.popup} ${isVisible$1(popup) ? showClass.popup : ''}`;
  if (params.toast) {
    addClass([document.documentElement, document.body], swalClasses['toast-shown']);
    addClass(popup, swalClasses.toast);
  } else {
    addClass(popup, swalClasses.modal);
  }

  // Custom class
  applyCustomClass(popup, params, 'popup');
  // TODO: remove in the next major
  if (typeof params.customClass === 'string') {
    addClass(popup, params.customClass);
  }

  // Icon class (#1842)
  if (params.icon) {
    addClass(popup, swalClasses[`icon-${params.icon}`]);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderProgressSteps = (instance, params) => {
  const progressStepsContainer = getProgressSteps();
  if (!progressStepsContainer) {
    return;
  }
  const {
    progressSteps,
    currentProgressStep
  } = params;
  if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
    hide(progressStepsContainer);
    return;
  }
  show(progressStepsContainer);
  progressStepsContainer.textContent = '';
  if (currentProgressStep >= progressSteps.length) {
    warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
  }
  progressSteps.forEach((step, index) => {
    const stepEl = createStepElement(step);
    progressStepsContainer.appendChild(stepEl);
    if (index === currentProgressStep) {
      addClass(stepEl, swalClasses['active-progress-step']);
    }
    if (index !== progressSteps.length - 1) {
      const lineEl = createLineElement(params);
      progressStepsContainer.appendChild(lineEl);
    }
  });
};

/**
 * @param {string} step
 * @returns {HTMLLIElement}
 */
const createStepElement = step => {
  const stepEl = document.createElement('li');
  addClass(stepEl, swalClasses['progress-step']);
  setInnerHtml(stepEl, step);
  return stepEl;
};

/**
 * @param {SweetAlertOptions} params
 * @returns {HTMLLIElement}
 */
const createLineElement = params => {
  const lineEl = document.createElement('li');
  addClass(lineEl, swalClasses['progress-step-line']);
  if (params.progressStepsDistance) {
    applyNumericalStyle(lineEl, 'width', params.progressStepsDistance);
  }
  return lineEl;
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const renderTitle = (instance, params) => {
  const title = getTitle();
  if (!title) {
    return;
  }
  showWhenInnerHtmlPresent(title);
  toggle(title, params.title || params.titleText, 'block');
  if (params.title) {
    parseHtmlToContainer(params.title, title);
  }
  if (params.titleText) {
    title.innerText = params.titleText;
  }

  // Custom class
  applyCustomClass(title, params, 'title');
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
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
  const popup = getPopup();
  if (typeof params.didRender === 'function' && popup) {
    params.didRender(popup);
  }
  globalState.eventEmitter.emit('didRender', popup);
};

/*
 * Global function to determine if SweetAlert2 popup is shown
 */
const isVisible = () => {
  return isVisible$1(getPopup());
};

/*
 * Global function to click 'Confirm' button
 */
const clickConfirm = () => {
  var _dom$getConfirmButton;
  return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
};

/*
 * Global function to click 'Deny' button
 */
const clickDeny = () => {
  var _dom$getDenyButton;
  return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
};

/*
 * Global function to click 'Cancel' button
 */
const clickCancel = () => {
  var _dom$getCancelButton;
  return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
};

/** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

/** @type {Record<DismissReason, DismissReason>} */
const DismissReason = Object.freeze({
  cancel: 'cancel',
  backdrop: 'backdrop',
  close: 'close',
  esc: 'esc',
  timer: 'timer'
});

/**
 * @param {GlobalState} globalState
 */
const removeKeydownHandler = globalState => {
  if (globalState.keydownTarget && globalState.keydownHandlerAdded) {
    globalState.keydownTarget.removeEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = false;
  }
};

/**
 * @param {GlobalState} globalState
 * @param {SweetAlertOptions} innerParams
 * @param {*} dismissWith
 */
const addKeydownHandler = (globalState, innerParams, dismissWith) => {
  removeKeydownHandler(globalState);
  if (!innerParams.toast) {
    globalState.keydownHandler = e => keydownHandler(innerParams, e, dismissWith);
    globalState.keydownTarget = innerParams.keydownListenerCapture ? window : getPopup();
    globalState.keydownListenerCapture = innerParams.keydownListenerCapture;
    globalState.keydownTarget.addEventListener('keydown', globalState.keydownHandler, {
      capture: globalState.keydownListenerCapture
    });
    globalState.keydownHandlerAdded = true;
  }
};

/**
 * @param {number} index
 * @param {number} increment
 */
const setFocus = (index, increment) => {
  var _dom$getPopup;
  const focusableElements = getFocusableElements();
  // search for visible elements and select the next possible match
  if (focusableElements.length) {
    index = index + increment;

    // shift + tab when .swal2-popup is focused
    if (index === -2) {
      index = focusableElements.length - 1;
    }

    // rollover to first item
    if (index === focusableElements.length) {
      index = 0;

      // go to last item
    } else if (index === -1) {
      index = focusableElements.length - 1;
    }
    focusableElements[index].focus();
    return;
  }
  // no visible focusable elements, focus the popup
  (_dom$getPopup = getPopup()) === null || _dom$getPopup === void 0 || _dom$getPopup.focus();
};
const arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
const arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

/**
 * @param {SweetAlertOptions} innerParams
 * @param {KeyboardEvent} event
 * @param {Function} dismissWith
 */
const keydownHandler = (innerParams, event, dismissWith) => {
  if (!innerParams) {
    return; // This instance has already been destroyed
  }

  // Ignore keydown during IME composition
  // https://developer.mozilla.org/en-US/docs/Web/API/Document/keydown_event#ignoring_keydown_during_ime_composition
  // https://github.com/sweetalert2/sweetalert2/issues/720
  // https://github.com/sweetalert2/sweetalert2/issues/2406
  if (event.isComposing || event.keyCode === 229) {
    return;
  }
  if (innerParams.stopKeydownPropagation) {
    event.stopPropagation();
  }

  // ENTER
  if (event.key === 'Enter') {
    handleEnter(event, innerParams);
  }

  // TAB
  else if (event.key === 'Tab') {
    handleTab(event);
  }

  // ARROWS - switch focus between buttons
  else if ([...arrowKeysNextButton, ...arrowKeysPreviousButton].includes(event.key)) {
    handleArrows(event.key);
  }

  // ESC
  else if (event.key === 'Escape') {
    handleEsc(event, innerParams, dismissWith);
  }
};

/**
 * @param {KeyboardEvent} event
 * @param {SweetAlertOptions} innerParams
 */
const handleEnter = (event, innerParams) => {
  // https://github.com/sweetalert2/sweetalert2/issues/2386
  if (!callIfFunction(innerParams.allowEnterKey)) {
    return;
  }
  const input = getInput$1(getPopup(), innerParams.input);
  if (event.target && input && event.target instanceof HTMLElement && event.target.outerHTML === input.outerHTML) {
    if (['textarea', 'file'].includes(innerParams.input)) {
      return; // do not submit
    }
    clickConfirm();
    event.preventDefault();
  }
};

/**
 * @param {KeyboardEvent} event
 */
const handleTab = event => {
  const targetElement = event.target;
  const focusableElements = getFocusableElements();
  let btnIndex = -1;
  for (let i = 0; i < focusableElements.length; i++) {
    if (targetElement === focusableElements[i]) {
      btnIndex = i;
      break;
    }
  }

  // Cycle to the next button
  if (!event.shiftKey) {
    setFocus(btnIndex, 1);
  }

  // Cycle to the prev button
  else {
    setFocus(btnIndex, -1);
  }
  event.stopPropagation();
  event.preventDefault();
};

/**
 * @param {string} key
 */
const handleArrows = key => {
  const actions = getActions();
  const confirmButton = getConfirmButton();
  const denyButton = getDenyButton();
  const cancelButton = getCancelButton();
  if (!actions || !confirmButton || !denyButton || !cancelButton) {
    return;
  }
  /** @type HTMLElement[] */
  const buttons = [confirmButton, denyButton, cancelButton];
  if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
    return;
  }
  const sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
  let buttonToFocus = document.activeElement;
  if (!buttonToFocus) {
    return;
  }
  for (let i = 0; i < actions.children.length; i++) {
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

/**
 * @param {KeyboardEvent} event
 * @param {SweetAlertOptions} innerParams
 * @param {Function} dismissWith
 */
const handleEsc = (event, innerParams, dismissWith) => {
  if (callIfFunction(innerParams.allowEscapeKey)) {
    event.preventDefault();
    dismissWith(DismissReason.esc);
  }
};

/**
 * This module contains `WeakMap`s for each effectively-"private  property" that a `Swal` has.
 * For example, to set the private property "foo" of `this` to "bar", you can `privateProps.foo.set(this, 'bar')`
 * This is the approach that Babel will probably take to implement private methods/fields
 *   https://github.com/tc39/proposal-private-methods
 *   https://github.com/babel/babel/pull/7555
 * Once we have the changes from that PR in Babel, and our core class fits reasonable in *one module*
 *   then we can use that language feature.
 */

var privateMethods = {
  swalPromiseResolve: new WeakMap(),
  swalPromiseReject: new WeakMap()
};

// From https://developer.paciellogroup.com/blog/2018/06/the-current-state-of-modal-dialog-accessibility/
// Adding aria-hidden="true" to elements outside of the active modal dialog ensures that
// elements not within the active modal dialog will not be surfaced if a user opens a screen
// reader’s list of elements (headings, form controls, landmarks, etc.) in the document.

const setAriaHidden = () => {
  const container = getContainer();
  const bodyChildren = Array.from(document.body.children);
  bodyChildren.forEach(el => {
    if (el.contains(container)) {
      return;
    }
    if (el.hasAttribute('aria-hidden')) {
      el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
    }
    el.setAttribute('aria-hidden', 'true');
  });
};
const unsetAriaHidden = () => {
  const bodyChildren = Array.from(document.body.children);
  bodyChildren.forEach(el => {
    if (el.hasAttribute('data-previous-aria-hidden')) {
      el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
      el.removeAttribute('data-previous-aria-hidden');
    } else {
      el.removeAttribute('aria-hidden');
    }
  });
};

// @ts-ignore
const isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

/**
 * Fix iOS scrolling
 * http://stackoverflow.com/q/39626302
 */
const iOSfix = () => {
  if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
    const offset = document.body.scrollTop;
    document.body.style.top = `${offset * -1}px`;
    addClass(document.body, swalClasses.iosfix);
    lockBodyScroll();
  }
};

/**
 * https://github.com/sweetalert2/sweetalert2/issues/1246
 */
const lockBodyScroll = () => {
  const container = getContainer();
  if (!container) {
    return;
  }
  /** @type {boolean} */
  let preventTouchMove;
  /**
   * @param {TouchEvent} event
   */
  container.ontouchstart = event => {
    preventTouchMove = shouldPreventTouchMove(event);
  };
  /**
   * @param {TouchEvent} event
   */
  container.ontouchmove = event => {
    if (preventTouchMove) {
      event.preventDefault();
      event.stopPropagation();
    }
  };
};

/**
 * @param {TouchEvent} event
 * @returns {boolean}
 */
const shouldPreventTouchMove = event => {
  const target = event.target;
  const container = getContainer();
  const htmlContainer = getHtmlContainer();
  if (!container || !htmlContainer) {
    return false;
  }
  if (isStylus(event) || isZoom(event)) {
    return false;
  }
  if (target === container) {
    return true;
  }
  if (!isScrollable(container) && target instanceof HTMLElement && !selfOrParentIsScrollable(target, htmlContainer) &&
  // #2823
  target.tagName !== 'INPUT' &&
  // #1603
  target.tagName !== 'TEXTAREA' &&
  // #2266
  !(isScrollable(htmlContainer) &&
  // #1944
  htmlContainer.contains(target))) {
    return true;
  }
  return false;
};

/**
 * https://github.com/sweetalert2/sweetalert2/issues/1786
 *
 * @param {*} event
 * @returns {boolean}
 */
const isStylus = event => {
  return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
};

/**
 * https://github.com/sweetalert2/sweetalert2/issues/1891
 *
 * @param {TouchEvent} event
 * @returns {boolean}
 */
const isZoom = event => {
  return event.touches && event.touches.length > 1;
};
const undoIOSfix = () => {
  if (hasClass(document.body, swalClasses.iosfix)) {
    const offset = parseInt(document.body.style.top, 10);
    removeClass(document.body, swalClasses.iosfix);
    document.body.style.top = '';
    document.body.scrollTop = offset * -1;
  }
};

/**
 * Measure scrollbar width for padding body during modal show/hide
 * https://github.com/twbs/bootstrap/blob/master/js/src/modal.js
 *
 * @returns {number}
 */
const measureScrollbar = () => {
  const scrollDiv = document.createElement('div');
  scrollDiv.className = swalClasses['scrollbar-measure'];
  document.body.appendChild(scrollDiv);
  const scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
  document.body.removeChild(scrollDiv);
  return scrollbarWidth;
};

/**
 * Remember state in cases where opening and handling a modal will fiddle with it.
 * @type {number | null}
 */
let previousBodyPadding = null;

/**
 * @param {string} initialBodyOverflow
 */
const replaceScrollbarWithPadding = initialBodyOverflow => {
  // for queues, do not do this more than once
  if (previousBodyPadding !== null) {
    return;
  }
  // if the body has overflow
  if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
  ) {
    // add padding so the content doesn't shift after removal of scrollbar
    previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
    document.body.style.paddingRight = `${previousBodyPadding + measureScrollbar()}px`;
  }
};
const undoReplaceScrollbarWithPadding = () => {
  if (previousBodyPadding !== null) {
    document.body.style.paddingRight = `${previousBodyPadding}px`;
    previousBodyPadding = null;
  }
};

/**
 * @param {SweetAlert} instance
 * @param {HTMLElement} container
 * @param {boolean} returnFocus
 * @param {Function} didClose
 */
function removePopupAndResetState(instance, container, returnFocus, didClose) {
  if (isToast()) {
    triggerDidCloseAndDispose(instance, didClose);
  } else {
    restoreActiveElement(returnFocus).then(() => triggerDidCloseAndDispose(instance, didClose));
    removeKeydownHandler(globalState);
  }

  // workaround for https://github.com/sweetalert2/sweetalert2/issues/2088
  // for some reason removing the container in Safari will scroll the document to bottom
  if (isSafariOrIOS) {
    container.setAttribute('style', 'display:none !important');
    container.removeAttribute('class');
    container.innerHTML = '';
  } else {
    container.remove();
  }
  if (isModal()) {
    undoReplaceScrollbarWithPadding();
    undoIOSfix();
    unsetAriaHidden();
  }
  removeBodyClasses();
}

/**
 * Remove SweetAlert2 classes from body
 */
function removeBodyClasses() {
  removeClass([document.documentElement, document.body], [swalClasses.shown, swalClasses['height-auto'], swalClasses['no-backdrop'], swalClasses['toast-shown']]);
}

/**
 * Instance method to close sweetAlert
 *
 * @param {any} resolveValue
 */
function close(resolveValue) {
  resolveValue = prepareResolveValue(resolveValue);
  const swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
  const didClose = triggerClosePopup(this);
  if (this.isAwaitingPromise) {
    // A swal awaiting for a promise (after a click on Confirm or Deny) cannot be dismissed anymore #2335
    if (!resolveValue.isDismissed) {
      handleAwaitingPromise(this);
      swalPromiseResolve(resolveValue);
    }
  } else if (didClose) {
    // Resolve Swal promise
    swalPromiseResolve(resolveValue);
  }
}
const triggerClosePopup = instance => {
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

/**
 * @param {any} error
 */
function rejectPromise(error) {
  const rejectPromise = privateMethods.swalPromiseReject.get(this);
  handleAwaitingPromise(this);
  if (rejectPromise) {
    // Reject Swal promise
    rejectPromise(error);
  }
}

/**
 * @param {SweetAlert} instance
 */
const handleAwaitingPromise = instance => {
  if (instance.isAwaitingPromise) {
    delete instance.isAwaitingPromise;
    // The instance might have been previously partly destroyed, we must resume the destroy process in this case #2335
    if (!privateProps.innerParams.get(instance)) {
      instance._destroy();
    }
  }
};

/**
 * @param {any} resolveValue
 * @returns {SweetAlertResult}
 */
const prepareResolveValue = resolveValue => {
  // When user calls Swal.close()
  if (typeof resolveValue === 'undefined') {
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

/**
 * @param {SweetAlert} instance
 * @param {HTMLElement} popup
 * @param {SweetAlertOptions} innerParams
 */
const handlePopupAnimation = (instance, popup, innerParams) => {
  var _globalState$eventEmi;
  const container = getContainer();
  // If animation is supported, animate
  const animationIsSupported = hasCssAnimation(popup);
  if (typeof innerParams.willClose === 'function') {
    innerParams.willClose(popup);
  }
  (_globalState$eventEmi = globalState.eventEmitter) === null || _globalState$eventEmi === void 0 || _globalState$eventEmi.emit('willClose', popup);
  if (animationIsSupported) {
    animatePopup(instance, popup, container, innerParams.returnFocus, innerParams.didClose);
  } else {
    // Otherwise, remove immediately
    removePopupAndResetState(instance, container, innerParams.returnFocus, innerParams.didClose);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {HTMLElement} popup
 * @param {HTMLElement} container
 * @param {boolean} returnFocus
 * @param {Function} didClose
 */
const animatePopup = (instance, popup, container, returnFocus, didClose) => {
  globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
  /**
   * @param {AnimationEvent | TransitionEvent} e
   */
  const swalCloseAnimationFinished = function (e) {
    if (e.target === popup) {
      var _globalState$swalClos;
      (_globalState$swalClos = globalState.swalCloseEventFinishedCallback) === null || _globalState$swalClos === void 0 || _globalState$swalClos.call(globalState);
      delete globalState.swalCloseEventFinishedCallback;
      popup.removeEventListener('animationend', swalCloseAnimationFinished);
      popup.removeEventListener('transitionend', swalCloseAnimationFinished);
    }
  };
  popup.addEventListener('animationend', swalCloseAnimationFinished);
  popup.addEventListener('transitionend', swalCloseAnimationFinished);
};

/**
 * @param {SweetAlert} instance
 * @param {Function} didClose
 */
const triggerDidCloseAndDispose = (instance, didClose) => {
  setTimeout(() => {
    var _globalState$eventEmi2;
    if (typeof didClose === 'function') {
      didClose.bind(instance.params)();
    }
    (_globalState$eventEmi2 = globalState.eventEmitter) === null || _globalState$eventEmi2 === void 0 || _globalState$eventEmi2.emit('didClose');
    // instance might have been destroyed already
    if (instance._destroy) {
      instance._destroy();
    }
  });
};

/**
 * Shows loader (spinner), this is useful with AJAX requests.
 * By default the loader be shown instead of the "Confirm" button.
 *
 * @param {HTMLButtonElement | null} [buttonToReplace]
 */
const showLoading = buttonToReplace => {
  let popup = getPopup();
  if (!popup) {
    new Swal();
  }
  popup = getPopup();
  if (!popup) {
    return;
  }
  const loader = getLoader();
  if (isToast()) {
    hide(getIcon());
  } else {
    replaceButton(popup, buttonToReplace);
  }
  show(loader);
  popup.setAttribute('data-loading', 'true');
  popup.setAttribute('aria-busy', 'true');
  popup.focus();
};

/**
 * @param {HTMLElement} popup
 * @param {HTMLButtonElement | null} [buttonToReplace]
 */
const replaceButton = (popup, buttonToReplace) => {
  const actions = getActions();
  const loader = getLoader();
  if (!actions || !loader) {
    return;
  }
  if (!buttonToReplace && isVisible$1(getConfirmButton())) {
    buttonToReplace = getConfirmButton();
  }
  show(actions);
  if (buttonToReplace) {
    hide(buttonToReplace);
    loader.setAttribute('data-button-to-replace', buttonToReplace.className);
    actions.insertBefore(loader, buttonToReplace);
  }
  addClass([popup, actions], swalClasses.loading);
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const handleInputOptionsAndValue = (instance, params) => {
  if (params.input === 'select' || params.input === 'radio') {
    handleInputOptions(instance, params);
  } else if (['text', 'email', 'number', 'tel', 'textarea'].some(i => i === params.input) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
    showLoading(getConfirmButton());
    handleInputValue(instance, params);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} innerParams
 * @returns {SweetAlertInputValue}
 */
const getInputValue = (instance, innerParams) => {
  const input = instance.getInput();
  if (!input) {
    return null;
  }
  switch (innerParams.input) {
    case 'checkbox':
      return getCheckboxValue(input);
    case 'radio':
      return getRadioValue(input);
    case 'file':
      return getFileValue(input);
    default:
      return innerParams.inputAutoTrim ? input.value.trim() : input.value;
  }
};

/**
 * @param {HTMLInputElement} input
 * @returns {number}
 */
const getCheckboxValue = input => input.checked ? 1 : 0;

/**
 * @param {HTMLInputElement} input
 * @returns {string | null}
 */
const getRadioValue = input => input.checked ? input.value : null;

/**
 * @param {HTMLInputElement} input
 * @returns {FileList | File | null}
 */
const getFileValue = input => input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const handleInputOptions = (instance, params) => {
  const popup = getPopup();
  if (!popup) {
    return;
  }
  /**
   * @param {Record<string, any>} inputOptions
   */
  const processInputOptions = inputOptions => {
    if (params.input === 'select') {
      populateSelectOptions(popup, formatInputOptions(inputOptions), params);
    } else if (params.input === 'radio') {
      populateRadioOptions(popup, formatInputOptions(inputOptions), params);
    }
  };
  if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
    showLoading(getConfirmButton());
    asPromise(params.inputOptions).then(inputOptions => {
      instance.hideLoading();
      processInputOptions(inputOptions);
    });
  } else if (typeof params.inputOptions === 'object') {
    processInputOptions(params.inputOptions);
  } else {
    error(`Unexpected type of inputOptions! Expected object, Map or Promise, got ${typeof params.inputOptions}`);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertOptions} params
 */
const handleInputValue = (instance, params) => {
  const input = instance.getInput();
  if (!input) {
    return;
  }
  hide(input);
  asPromise(params.inputValue).then(inputValue => {
    input.value = params.input === 'number' ? `${parseFloat(inputValue) || 0}` : `${inputValue}`;
    show(input);
    input.focus();
    instance.hideLoading();
  }).catch(err => {
    error(`Error in inputValue promise: ${err}`);
    input.value = '';
    show(input);
    input.focus();
    instance.hideLoading();
  });
};

/**
 * @param {HTMLElement} popup
 * @param {InputOptionFlattened[]} inputOptions
 * @param {SweetAlertOptions} params
 */
function populateSelectOptions(popup, inputOptions, params) {
  const select = getDirectChildByClass(popup, swalClasses.select);
  if (!select) {
    return;
  }
  /**
   * @param {HTMLElement} parent
   * @param {string} optionLabel
   * @param {string} optionValue
   */
  const renderOption = (parent, optionLabel, optionValue) => {
    const option = document.createElement('option');
    option.value = optionValue;
    setInnerHtml(option, optionLabel);
    option.selected = isSelected(optionValue, params.inputValue);
    parent.appendChild(option);
  };
  inputOptions.forEach(inputOption => {
    const optionValue = inputOption[0];
    const optionLabel = inputOption[1];
    // <optgroup> spec:
    // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
    // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
    // check whether this is a <optgroup>
    if (Array.isArray(optionLabel)) {
      // if it is an array, then it is an <optgroup>
      const optgroup = document.createElement('optgroup');
      optgroup.label = optionValue;
      optgroup.disabled = false; // not configurable for now
      select.appendChild(optgroup);
      optionLabel.forEach(o => renderOption(optgroup, o[1], o[0]));
    } else {
      // case of <option>
      renderOption(select, optionLabel, optionValue);
    }
  });
  select.focus();
}

/**
 * @param {HTMLElement} popup
 * @param {InputOptionFlattened[]} inputOptions
 * @param {SweetAlertOptions} params
 */
function populateRadioOptions(popup, inputOptions, params) {
  const radio = getDirectChildByClass(popup, swalClasses.radio);
  if (!radio) {
    return;
  }
  inputOptions.forEach(inputOption => {
    const radioValue = inputOption[0];
    const radioLabel = inputOption[1];
    const radioInput = document.createElement('input');
    const radioLabelElement = document.createElement('label');
    radioInput.type = 'radio';
    radioInput.name = swalClasses.radio;
    radioInput.value = radioValue;
    if (isSelected(radioValue, params.inputValue)) {
      radioInput.checked = true;
    }
    const label = document.createElement('span');
    setInnerHtml(label, radioLabel);
    label.className = swalClasses.label;
    radioLabelElement.appendChild(radioInput);
    radioLabelElement.appendChild(label);
    radio.appendChild(radioLabelElement);
  });
  const radios = radio.querySelectorAll('input');
  if (radios.length) {
    radios[0].focus();
  }
}

/**
 * Converts `inputOptions` into an array of `[value, label]`s
 *
 * @param {Record<string, any>} inputOptions
 * @typedef {string[]} InputOptionFlattened
 * @returns {InputOptionFlattened[]}
 */
const formatInputOptions = inputOptions => {
  /** @type {InputOptionFlattened[]} */
  const result = [];
  if (inputOptions instanceof Map) {
    inputOptions.forEach((value, key) => {
      let valueFormatted = value;
      if (typeof valueFormatted === 'object') {
        // case of <optgroup>
        valueFormatted = formatInputOptions(valueFormatted);
      }
      result.push([key, valueFormatted]);
    });
  } else {
    Object.keys(inputOptions).forEach(key => {
      let valueFormatted = inputOptions[key];
      if (typeof valueFormatted === 'object') {
        // case of <optgroup>
        valueFormatted = formatInputOptions(valueFormatted);
      }
      result.push([key, valueFormatted]);
    });
  }
  return result;
};

/**
 * @param {string} optionValue
 * @param {SweetAlertInputValue} inputValue
 * @returns {boolean}
 */
const isSelected = (optionValue, inputValue) => {
  return !!inputValue && inputValue.toString() === optionValue.toString();
};

/**
 * @param {SweetAlert} instance
 */
const handleConfirmButtonClick = instance => {
  const innerParams = privateProps.innerParams.get(instance);
  instance.disableButtons();
  if (innerParams.input) {
    handleConfirmOrDenyWithInput(instance, 'confirm');
  } else {
    confirm(instance, true);
  }
};

/**
 * @param {SweetAlert} instance
 */
const handleDenyButtonClick = instance => {
  const innerParams = privateProps.innerParams.get(instance);
  instance.disableButtons();
  if (innerParams.returnInputValueOnDeny) {
    handleConfirmOrDenyWithInput(instance, 'deny');
  } else {
    deny(instance, false);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {Function} dismissWith
 */
const handleCancelButtonClick = (instance, dismissWith) => {
  instance.disableButtons();
  dismissWith(DismissReason.cancel);
};

/**
 * @param {SweetAlert} instance
 * @param {'confirm' | 'deny'} type
 */
const handleConfirmOrDenyWithInput = (instance, type) => {
  const innerParams = privateProps.innerParams.get(instance);
  if (!innerParams.input) {
    error(`The "input" parameter is needed to be set when using returnInputValueOn${capitalizeFirstLetter(type)}`);
    return;
  }
  const input = instance.getInput();
  const inputValue = getInputValue(instance, innerParams);
  if (innerParams.inputValidator) {
    handleInputValidator(instance, inputValue, type);
  } else if (input && !input.checkValidity()) {
    instance.enableButtons();
    instance.showValidationMessage(innerParams.validationMessage || input.validationMessage);
  } else if (type === 'deny') {
    deny(instance, inputValue);
  } else {
    confirm(instance, inputValue);
  }
};

/**
 * @param {SweetAlert} instance
 * @param {SweetAlertInputValue} inputValue
 * @param {'confirm' | 'deny'} type
 */
const handleInputValidator = (instance, inputValue, type) => {
  const innerParams = privateProps.innerParams.get(instance);
  instance.disableInput();
  const validationPromise = Promise.resolve().then(() => asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage)));
  validationPromise.then(validationMessage => {
    instance.enableButtons();
    instance.enableInput();
    if (validationMessage) {
      instance.showValidationMessage(validationMessage);
    } else if (type === 'deny') {
      deny(instance, inputValue);
    } else {
      confirm(instance, inputValue);
    }
  });
};

/**
 * @param {SweetAlert} instance
 * @param {any} value
 */
const deny = (instance, value) => {
  const innerParams = privateProps.innerParams.get(instance || undefined);
  if (innerParams.showLoaderOnDeny) {
    showLoading(getDenyButton());
  }
  if (innerParams.preDeny) {
    instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
    const preDenyPromise = Promise.resolve().then(() => asPromise(innerParams.preDeny(value, innerParams.validationMessage)));
    preDenyPromise.then(preDenyValue => {
      if (preDenyValue === false) {
        instance.hideLoading();
        handleAwaitingPromise(instance);
      } else {
        instance.close({
          isDenied: true,
          value: typeof preDenyValue === 'undefined' ? value : preDenyValue
        });
      }
    }).catch(error => rejectWith(instance || undefined, error));
  } else {
    instance.close({
      isDenied: true,
      value
    });
  }
};

/**
 * @param {SweetAlert} instance
 * @param {any} value
 */
const succeedWith = (instance, value) => {
  instance.close({
    isConfirmed: true,
    value
  });
};

/**
 *
 * @param {SweetAlert} instance
 * @param {string} error
 */
const rejectWith = (instance, error) => {
  instance.rejectPromise(error);
};

/**
 *
 * @param {SweetAlert} instance
 * @param {any} value
 */
const confirm = (instance, value) => {
  const innerParams = privateProps.innerParams.get(instance || undefined);
  if (innerParams.showLoaderOnConfirm) {
    showLoading();
  }
  if (innerParams.preConfirm) {
    instance.resetValidationMessage();
    instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
    const preConfirmPromise = Promise.resolve().then(() => asPromise(innerParams.preConfirm(value, innerParams.validationMessage)));
    preConfirmPromise.then(preConfirmValue => {
      if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
        instance.hideLoading();
        handleAwaitingPromise(instance);
      } else {
        succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
      }
    }).catch(error => rejectWith(instance || undefined, error));
  } else {
    succeedWith(instance, value);
  }
};

/**
 * Hides loader and shows back the button which was hidden by .showLoading()
 */
function hideLoading() {
  // do nothing if popup is closed
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
  domCache.popup.removeAttribute('aria-busy');
  domCache.popup.removeAttribute('data-loading');
  domCache.confirmButton.disabled = false;
  domCache.denyButton.disabled = false;
  domCache.cancelButton.disabled = false;
}
const showRelatedButton = domCache => {
  const buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
  if (buttonToReplace.length) {
    show(buttonToReplace[0], 'inline-block');
  } else if (allButtonsAreHidden()) {
    hide(domCache.actions);
  }
};

/**
 * Gets the input DOM node, this method works with input parameter.
 *
 * @returns {HTMLInputElement | null}
 */
function getInput() {
  const innerParams = privateProps.innerParams.get(this);
  const domCache = privateProps.domCache.get(this);
  if (!domCache) {
    return null;
  }
  return getInput$1(domCache.popup, innerParams.input);
}

/**
 * @param {SweetAlert} instance
 * @param {string[]} buttons
 * @param {boolean} disabled
 */
function setButtonsDisabled(instance, buttons, disabled) {
  const domCache = privateProps.domCache.get(instance);
  buttons.forEach(button => {
    domCache[button].disabled = disabled;
  });
}

/**
 * @param {HTMLInputElement | null} input
 * @param {boolean} disabled
 */
function setInputDisabled(input, disabled) {
  const popup = getPopup();
  if (!popup || !input) {
    return;
  }
  if (input.type === 'radio') {
    /** @type {NodeListOf<HTMLInputElement>} */
    const radios = popup.querySelectorAll(`[name="${swalClasses.radio}"]`);
    for (let i = 0; i < radios.length; i++) {
      radios[i].disabled = disabled;
    }
  } else {
    input.disabled = disabled;
  }
}

/**
 * Enable all the buttons
 * @this {SweetAlert}
 */
function enableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], false);
}

/**
 * Disable all the buttons
 * @this {SweetAlert}
 */
function disableButtons() {
  setButtonsDisabled(this, ['confirmButton', 'denyButton', 'cancelButton'], true);
}

/**
 * Enable the input field
 * @this {SweetAlert}
 */
function enableInput() {
  setInputDisabled(this.getInput(), false);
}

/**
 * Disable the input field
 * @this {SweetAlert}
 */
function disableInput() {
  setInputDisabled(this.getInput(), true);
}

/**
 * Show block with validation message
 *
 * @param {string} error
 * @this {SweetAlert}
 */
function showValidationMessage(error) {
  const domCache = privateProps.domCache.get(this);
  const params = privateProps.innerParams.get(this);
  setInnerHtml(domCache.validationMessage, error);
  domCache.validationMessage.className = swalClasses['validation-message'];
  if (params.customClass && params.customClass.validationMessage) {
    addClass(domCache.validationMessage, params.customClass.validationMessage);
  }
  show(domCache.validationMessage);
  const input = this.getInput();
  if (input) {
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', swalClasses['validation-message']);
    focusInput(input);
    addClass(input, swalClasses.inputerror);
  }
}

/**
 * Hide block with validation message
 *
 * @this {SweetAlert}
 */
function resetValidationMessage() {
  const domCache = privateProps.domCache.get(this);
  if (domCache.validationMessage) {
    hide(domCache.validationMessage);
  }
  const input = this.getInput();
  if (input) {
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
    removeClass(input, swalClasses.inputerror);
  }
}

const defaultParams = {
  title: '',
  titleText: '',
  text: '',
  html: '',
  footer: '',
  icon: undefined,
  iconColor: undefined,
  iconHtml: undefined,
  template: undefined,
  toast: false,
  draggable: false,
  animation: true,
  theme: 'light',
  showClass: {
    popup: 'swal2-show',
    backdrop: 'swal2-backdrop-show',
    icon: 'swal2-icon-show'
  },
  hideClass: {
    popup: 'swal2-hide',
    backdrop: 'swal2-backdrop-hide',
    icon: 'swal2-icon-hide'
  },
  customClass: {},
  target: 'body',
  color: undefined,
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
  preConfirm: undefined,
  preDeny: undefined,
  confirmButtonText: 'OK',
  confirmButtonAriaLabel: '',
  confirmButtonColor: undefined,
  denyButtonText: 'No',
  denyButtonAriaLabel: '',
  denyButtonColor: undefined,
  cancelButtonText: 'Cancel',
  cancelButtonAriaLabel: '',
  cancelButtonColor: undefined,
  buttonsStyling: true,
  reverseButtons: false,
  focusConfirm: true,
  focusDeny: false,
  focusCancel: false,
  returnFocus: true,
  showCloseButton: false,
  closeButtonHtml: '&times;',
  closeButtonAriaLabel: 'Close this dialog',
  loaderHtml: '',
  showLoaderOnConfirm: false,
  showLoaderOnDeny: false,
  imageUrl: undefined,
  imageWidth: undefined,
  imageHeight: undefined,
  imageAlt: '',
  timer: undefined,
  timerProgressBar: false,
  width: undefined,
  padding: undefined,
  background: undefined,
  input: undefined,
  inputPlaceholder: '',
  inputLabel: '',
  inputValue: '',
  inputOptions: {},
  inputAutoFocus: true,
  inputAutoTrim: true,
  inputAttributes: {},
  inputValidator: undefined,
  returnInputValueOnDeny: false,
  validationMessage: undefined,
  grow: false,
  position: 'center',
  progressSteps: [],
  currentProgressStep: undefined,
  progressStepsDistance: undefined,
  willOpen: undefined,
  didOpen: undefined,
  didRender: undefined,
  willClose: undefined,
  didClose: undefined,
  didDestroy: undefined,
  scrollbarPadding: true,
  topLayer: false
};
const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'draggable', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'theme', 'willClose'];

/** @type {Record<string, string | undefined>} */
const deprecatedParams = {
  allowEnterKey: undefined
};
const toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'draggable', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

/**
 * Is valid parameter
 *
 * @param {string} paramName
 * @returns {boolean}
 */
const isValidParameter = paramName => {
  return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
};

/**
 * Is valid parameter for Swal.update() method
 *
 * @param {string} paramName
 * @returns {boolean}
 */
const isUpdatableParameter = paramName => {
  return updatableParams.indexOf(paramName) !== -1;
};

/**
 * Is deprecated parameter
 *
 * @param {string} paramName
 * @returns {string | undefined}
 */
const isDeprecatedParameter = paramName => {
  return deprecatedParams[paramName];
};

/**
 * @param {string} param
 */
const checkIfParamIsValid = param => {
  if (!isValidParameter(param)) {
    warn(`Unknown parameter "${param}"`);
  }
};

/**
 * @param {string} param
 */
const checkIfToastParamIsValid = param => {
  if (toastIncompatibleParams.includes(param)) {
    warn(`The parameter "${param}" is incompatible with toasts`);
  }
};

/**
 * @param {string} param
 */
const checkIfParamIsDeprecated = param => {
  const isDeprecated = isDeprecatedParameter(param);
  if (isDeprecated) {
    warnAboutDeprecation(param, isDeprecated);
  }
};

/**
 * Show relevant warnings for given params
 *
 * @param {SweetAlertOptions} params
 */
const showWarningsForParams = params => {
  if (params.backdrop === false && params.allowOutsideClick) {
    warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
  }
  if (params.theme && !['light', 'dark', 'auto', 'minimal', 'borderless', 'embed-iframe'].includes(params.theme)) {
    warn(`Invalid theme "${params.theme}". Expected "light", "dark", "auto", "minimal", "borderless", or "embed-iframe"`);
  }
  for (const param in params) {
    checkIfParamIsValid(param);
    if (params.toast) {
      checkIfToastParamIsValid(param);
    }
    checkIfParamIsDeprecated(param);
  }
};

/**
 * Updates popup parameters.
 *
 * @param {SweetAlertOptions} params
 */
function update(params) {
  const container = getContainer();
  const popup = getPopup();
  const innerParams = privateProps.innerParams.get(this);
  if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
    warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
    return;
  }
  const validUpdatableParams = filterValidParams(params);
  const updatedParams = Object.assign({}, innerParams, validUpdatableParams);
  showWarningsForParams(updatedParams);
  container.dataset['swal2Theme'] = updatedParams.theme;
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

/**
 * @param {SweetAlertOptions} params
 * @returns {SweetAlertOptions}
 */
const filterValidParams = params => {
  const validUpdatableParams = {};
  Object.keys(params).forEach(param => {
    if (isUpdatableParameter(param)) {
      validUpdatableParams[param] = params[param];
    } else {
      warn(`Invalid parameter to update: ${param}`);
    }
  });
  return validUpdatableParams;
};

/**
 * Dispose the current SweetAlert2 instance
 */
function _destroy() {
  const domCache = privateProps.domCache.get(this);
  const innerParams = privateProps.innerParams.get(this);
  if (!innerParams) {
    disposeWeakMaps(this); // The WeakMaps might have been partly destroyed, we must recall it to dispose any remaining WeakMaps #2335
    return; // This instance has already been destroyed
  }

  // Check if there is another Swal closing
  if (domCache.popup && globalState.swalCloseEventFinishedCallback) {
    globalState.swalCloseEventFinishedCallback();
    delete globalState.swalCloseEventFinishedCallback;
  }
  if (typeof innerParams.didDestroy === 'function') {
    innerParams.didDestroy();
  }
  globalState.eventEmitter.emit('didDestroy');
  disposeSwal(this);
}

/**
 * @param {SweetAlert} instance
 */
const disposeSwal = instance => {
  disposeWeakMaps(instance);
  // Unset this.params so GC will dispose it (#1569)
  delete instance.params;
  // Unset globalState props so GC will dispose globalState (#1569)
  delete globalState.keydownHandler;
  delete globalState.keydownTarget;
  // Unset currentInstance
  delete globalState.currentInstance;
};

/**
 * @param {SweetAlert} instance
 */
const disposeWeakMaps = instance => {
  // If the current instance is awaiting a promise result, we keep the privateMethods to call them once the promise result is retrieved #2335
  if (instance.isAwaitingPromise) {
    unsetWeakMaps(privateProps, instance);
    instance.isAwaitingPromise = true;
  } else {
    unsetWeakMaps(privateMethods, instance);
    unsetWeakMaps(privateProps, instance);
    delete instance.isAwaitingPromise;
    // Unset instance methods
    delete instance.disableButtons;
    delete instance.enableButtons;
    delete instance.getInput;
    delete instance.disableInput;
    delete instance.enableInput;
    delete instance.hideLoading;
    delete instance.disableLoading;
    delete instance.showValidationMessage;
    delete instance.resetValidationMessage;
    delete instance.close;
    delete instance.closePopup;
    delete instance.closeModal;
    delete instance.closeToast;
    delete instance.rejectPromise;
    delete instance.update;
    delete instance._destroy;
  }
};

/**
 * @param {object} obj
 * @param {SweetAlert} instance
 */
const unsetWeakMaps = (obj, instance) => {
  for (const i in obj) {
    obj[i].delete(instance);
  }
};

var instanceMethods = /*#__PURE__*/Object.freeze({
  __proto__: null,
  _destroy: _destroy,
  close: close,
  closeModal: close,
  closePopup: close,
  closeToast: close,
  disableButtons: disableButtons,
  disableInput: disableInput,
  disableLoading: hideLoading,
  enableButtons: enableButtons,
  enableInput: enableInput,
  getInput: getInput,
  handleAwaitingPromise: handleAwaitingPromise,
  hideLoading: hideLoading,
  rejectPromise: rejectPromise,
  resetValidationMessage: resetValidationMessage,
  showValidationMessage: showValidationMessage,
  update: update
});

/**
 * @param {SweetAlertOptions} innerParams
 * @param {DomCache} domCache
 * @param {Function} dismissWith
 */
const handlePopupClick = (innerParams, domCache, dismissWith) => {
  if (innerParams.toast) {
    handleToastClick(innerParams, domCache, dismissWith);
  } else {
    // Ignore click events that had mousedown on the popup but mouseup on the container
    // This can happen when the user drags a slider
    handleModalMousedown(domCache);

    // Ignore click events that had mousedown on the container but mouseup on the popup
    handleContainerMousedown(domCache);
    handleModalClick(innerParams, domCache, dismissWith);
  }
};

/**
 * @param {SweetAlertOptions} innerParams
 * @param {DomCache} domCache
 * @param {Function} dismissWith
 */
const handleToastClick = (innerParams, domCache, dismissWith) => {
  // Closing toast by internal click
  domCache.popup.onclick = () => {
    if (innerParams && (isAnyButtonShown(innerParams) || innerParams.timer || innerParams.input)) {
      return;
    }
    dismissWith(DismissReason.close);
  };
};

/**
 * @param {SweetAlertOptions} innerParams
 * @returns {boolean}
 */
const isAnyButtonShown = innerParams => {
  return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
};
let ignoreOutsideClick = false;

/**
 * @param {DomCache} domCache
 */
const handleModalMousedown = domCache => {
  domCache.popup.onmousedown = () => {
    domCache.container.onmouseup = function (e) {
      domCache.container.onmouseup = () => {};
      // We only check if the mouseup target is the container because usually it doesn't
      // have any other direct children aside of the popup
      if (e.target === domCache.container) {
        ignoreOutsideClick = true;
      }
    };
  };
};

/**
 * @param {DomCache} domCache
 */
const handleContainerMousedown = domCache => {
  domCache.container.onmousedown = e => {
    // prevent the modal text from being selected on double click on the container (allowOutsideClick: false)
    if (e.target === domCache.container) {
      e.preventDefault();
    }
    domCache.popup.onmouseup = function (e) {
      domCache.popup.onmouseup = () => {};
      // We also need to check if the mouseup target is a child of the popup
      if (e.target === domCache.popup || e.target instanceof HTMLElement && domCache.popup.contains(e.target)) {
        ignoreOutsideClick = true;
      }
    };
  };
};

/**
 * @param {SweetAlertOptions} innerParams
 * @param {DomCache} domCache
 * @param {Function} dismissWith
 */
const handleModalClick = (innerParams, domCache, dismissWith) => {
  domCache.container.onclick = e => {
    if (ignoreOutsideClick) {
      ignoreOutsideClick = false;
      return;
    }
    if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
      dismissWith(DismissReason.backdrop);
    }
  };
};

const isJqueryElement = elem => typeof elem === 'object' && elem.jquery;
const isElement = elem => elem instanceof Element || isJqueryElement(elem);
const argsToParams = args => {
  const params = {};
  if (typeof args[0] === 'object' && !isElement(args[0])) {
    Object.assign(params, args[0]);
  } else {
    ['title', 'html', 'icon'].forEach((name, index) => {
      const arg = args[index];
      if (typeof arg === 'string' || isElement(arg)) {
        params[name] = arg;
      } else if (arg !== undefined) {
        error(`Unexpected type of ${name}! Expected "string" or "Element", got ${typeof arg}`);
      }
    });
  }
  return params;
};

/**
 * Main method to create a new SweetAlert2 popup
 *
 * @param  {...SweetAlertOptions} args
 * @returns {Promise<SweetAlertResult>}
 */
function fire(...args) {
  return new this(...args);
}

/**
 * Returns an extended version of `Swal` containing `params` as defaults.
 * Useful for reusing Swal configuration.
 *
 * For example:
 *
 * Before:
 * const textPromptOptions = { input: 'text', showCancelButton: true }
 * const {value: firstName} = await Swal.fire({ ...textPromptOptions, title: 'What is your first name?' })
 * const {value: lastName} = await Swal.fire({ ...textPromptOptions, title: 'What is your last name?' })
 *
 * After:
 * const TextPrompt = Swal.mixin({ input: 'text', showCancelButton: true })
 * const {value: firstName} = await TextPrompt('What is your first name?')
 * const {value: lastName} = await TextPrompt('What is your last name?')
 *
 * @param {SweetAlertOptions} mixinParams
 * @returns {SweetAlert}
 */
function mixin(mixinParams) {
  class MixinSwal extends this {
    _main(params, priorityMixinParams) {
      return super._main(params, Object.assign({}, mixinParams, priorityMixinParams));
    }
  }
  // @ts-ignore
  return MixinSwal;
}

/**
 * If `timer` parameter is set, returns number of milliseconds of timer remained.
 * Otherwise, returns undefined.
 *
 * @returns {number | undefined}
 */
const getTimerLeft = () => {
  return globalState.timeout && globalState.timeout.getTimerLeft();
};

/**
 * Stop timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 *
 * @returns {number | undefined}
 */
const stopTimer = () => {
  if (globalState.timeout) {
    stopTimerProgressBar();
    return globalState.timeout.stop();
  }
};

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 *
 * @returns {number | undefined}
 */
const resumeTimer = () => {
  if (globalState.timeout) {
    const remaining = globalState.timeout.start();
    animateTimerProgressBar(remaining);
    return remaining;
  }
};

/**
 * Resume timer. Returns number of milliseconds of timer remained.
 * If `timer` parameter isn't set, returns undefined.
 *
 * @returns {number | undefined}
 */
const toggleTimer = () => {
  const timer = globalState.timeout;
  return timer && (timer.running ? stopTimer() : resumeTimer());
};

/**
 * Increase timer. Returns number of milliseconds of an updated timer.
 * If `timer` parameter isn't set, returns undefined.
 *
 * @param {number} ms
 * @returns {number | undefined}
 */
const increaseTimer = ms => {
  if (globalState.timeout) {
    const remaining = globalState.timeout.increase(ms);
    animateTimerProgressBar(remaining, true);
    return remaining;
  }
};

/**
 * Check if timer is running. Returns true if timer is running
 * or false if timer is paused or stopped.
 * If `timer` parameter isn't set, returns undefined
 *
 * @returns {boolean}
 */
const isTimerRunning = () => {
  return !!(globalState.timeout && globalState.timeout.isRunning());
};

let bodyClickListenerAdded = false;
const clickHandlers = {};

/**
 * @param {string} attr
 */
function bindClickHandler(attr = 'data-swal-template') {
  clickHandlers[attr] = this;
  if (!bodyClickListenerAdded) {
    document.body.addEventListener('click', bodyClickListener);
    bodyClickListenerAdded = true;
  }
}
const bodyClickListener = event => {
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

// Source: https://gist.github.com/mudge/5830382?permalink_comment_id=2691957#gistcomment-2691957

class EventEmitter {
  constructor() {
    /** @type {Events} */
    this.events = {};
  }

  /**
   * @param {string} eventName
   * @returns {EventHandlers}
   */
  _getHandlersByEventName(eventName) {
    if (typeof this.events[eventName] === 'undefined') {
      // not Set because we need to keep the FIFO order
      // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1748990334
      this.events[eventName] = [];
    }
    return this.events[eventName];
  }

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  on(eventName, eventHandler) {
    const currentHandlers = this._getHandlersByEventName(eventName);
    if (!currentHandlers.includes(eventHandler)) {
      currentHandlers.push(eventHandler);
    }
  }

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  once(eventName, eventHandler) {
    /**
     * @param {Array} args
     */
    const onceFn = (...args) => {
      this.removeListener(eventName, onceFn);
      eventHandler.apply(this, args);
    };
    this.on(eventName, onceFn);
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   */
  emit(eventName, ...args) {
    this._getHandlersByEventName(eventName).forEach(
    /**
     * @param {EventHandler} eventHandler
     */
    eventHandler => {
      try {
        eventHandler.apply(this, args);
      } catch (error) {
        console.error(error);
      }
    });
  }

  /**
   * @param {string} eventName
   * @param {EventHandler} eventHandler
   */
  removeListener(eventName, eventHandler) {
    const currentHandlers = this._getHandlersByEventName(eventName);
    const index = currentHandlers.indexOf(eventHandler);
    if (index > -1) {
      currentHandlers.splice(index, 1);
    }
  }

  /**
   * @param {string} eventName
   */
  removeAllListeners(eventName) {
    if (this.events[eventName] !== undefined) {
      // https://github.com/sweetalert2/sweetalert2/pull/2763#discussion_r1749239222
      this.events[eventName].length = 0;
    }
  }
  reset() {
    this.events = {};
  }
}

globalState.eventEmitter = new EventEmitter();

/**
 * @param {string} eventName
 * @param {EventHandler} eventHandler
 */
const on$1 = (eventName, eventHandler) => {
  globalState.eventEmitter.on(eventName, eventHandler);
};

/**
 * @param {string} eventName
 * @param {EventHandler} eventHandler
 */
const once = (eventName, eventHandler) => {
  globalState.eventEmitter.once(eventName, eventHandler);
};

/**
 * @param {string} [eventName]
 * @param {EventHandler} [eventHandler]
 */
const off = (eventName, eventHandler) => {
  // Remove all handlers for all events
  if (!eventName) {
    globalState.eventEmitter.reset();
    return;
  }
  if (eventHandler) {
    // Remove a specific handler
    globalState.eventEmitter.removeListener(eventName, eventHandler);
  } else {
    // Remove all handlers for a specific event
    globalState.eventEmitter.removeAllListeners(eventName);
  }
};

var staticMethods = /*#__PURE__*/Object.freeze({
  __proto__: null,
  argsToParams: argsToParams,
  bindClickHandler: bindClickHandler,
  clickCancel: clickCancel,
  clickConfirm: clickConfirm,
  clickDeny: clickDeny,
  enableLoading: showLoading,
  fire: fire,
  getActions: getActions,
  getCancelButton: getCancelButton,
  getCloseButton: getCloseButton,
  getConfirmButton: getConfirmButton,
  getContainer: getContainer,
  getDenyButton: getDenyButton,
  getFocusableElements: getFocusableElements,
  getFooter: getFooter,
  getHtmlContainer: getHtmlContainer,
  getIcon: getIcon,
  getIconContent: getIconContent,
  getImage: getImage,
  getInputLabel: getInputLabel,
  getLoader: getLoader,
  getPopup: getPopup,
  getProgressSteps: getProgressSteps,
  getTimerLeft: getTimerLeft,
  getTimerProgressBar: getTimerProgressBar,
  getTitle: getTitle,
  getValidationMessage: getValidationMessage,
  increaseTimer: increaseTimer,
  isDeprecatedParameter: isDeprecatedParameter,
  isLoading: isLoading,
  isTimerRunning: isTimerRunning,
  isUpdatableParameter: isUpdatableParameter,
  isValidParameter: isValidParameter,
  isVisible: isVisible,
  mixin: mixin,
  off: off,
  on: on$1,
  once: once,
  resumeTimer: resumeTimer,
  showLoading: showLoading,
  stopTimer: stopTimer,
  toggleTimer: toggleTimer
});

class Timer {
  /**
   * @param {Function} callback
   * @param {number} delay
   */
  constructor(callback, delay) {
    this.callback = callback;
    this.remaining = delay;
    this.running = false;
    this.start();
  }

  /**
   * @returns {number}
   */
  start() {
    if (!this.running) {
      this.running = true;
      this.started = new Date();
      this.id = setTimeout(this.callback, this.remaining);
    }
    return this.remaining;
  }

  /**
   * @returns {number}
   */
  stop() {
    if (this.started && this.running) {
      this.running = false;
      clearTimeout(this.id);
      this.remaining -= new Date().getTime() - this.started.getTime();
    }
    return this.remaining;
  }

  /**
   * @param {number} n
   * @returns {number}
   */
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

  /**
   * @returns {number}
   */
  getTimerLeft() {
    if (this.running) {
      this.stop();
      this.start();
    }
    return this.remaining;
  }

  /**
   * @returns {boolean}
   */
  isRunning() {
    return this.running;
  }
}

const swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

/**
 * @param {SweetAlertOptions} params
 * @returns {SweetAlertOptions}
 */
const getTemplateParams = params => {
  const template = typeof params.template === 'string' ? (/** @type {HTMLTemplateElement} */document.querySelector(params.template)) : params.template;
  if (!template) {
    return {};
  }
  /** @type {DocumentFragment} */
  const templateContent = template.content;
  showWarningsForElements(templateContent);
  const result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {Record<string, any>}
 */
const getSwalParams = templateContent => {
  /** @type {Record<string, any>} */
  const result = {};
  /** @type {HTMLElement[]} */
  const swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
  swalParams.forEach(param => {
    showWarningsForAttributes(param, ['name', 'value']);
    const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
    const value = param.getAttribute('value');
    if (!paramName || !value) {
      return;
    }
    if (typeof defaultParams[paramName] === 'boolean') {
      result[paramName] = value !== 'false';
    } else if (typeof defaultParams[paramName] === 'object') {
      result[paramName] = JSON.parse(value);
    } else {
      result[paramName] = value;
    }
  });
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {Record<string, any>}
 */
const getSwalFunctionParams = templateContent => {
  /** @type {Record<string, any>} */
  const result = {};
  /** @type {HTMLElement[]} */
  const swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
  swalFunctions.forEach(param => {
    const paramName = /** @type {keyof SweetAlertOptions} */param.getAttribute('name');
    const value = param.getAttribute('value');
    if (!paramName || !value) {
      return;
    }
    result[paramName] = new Function(`return ${value}`)();
  });
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {Record<string, any>}
 */
const getSwalButtons = templateContent => {
  /** @type {Record<string, any>} */
  const result = {};
  /** @type {HTMLElement[]} */
  const swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
  swalButtons.forEach(button => {
    showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
    const type = button.getAttribute('type');
    if (!type || !['confirm', 'cancel', 'deny'].includes(type)) {
      return;
    }
    result[`${type}ButtonText`] = button.innerHTML;
    result[`show${capitalizeFirstLetter(type)}Button`] = true;
    if (button.hasAttribute('color')) {
      result[`${type}ButtonColor`] = button.getAttribute('color');
    }
    if (button.hasAttribute('aria-label')) {
      result[`${type}ButtonAriaLabel`] = button.getAttribute('aria-label');
    }
  });
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {Pick<SweetAlertOptions, 'imageUrl' | 'imageWidth' | 'imageHeight' | 'imageAlt'>}
 */
const getSwalImage = templateContent => {
  const result = {};
  /** @type {HTMLElement | null} */
  const image = templateContent.querySelector('swal-image');
  if (image) {
    showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
    if (image.hasAttribute('src')) {
      result.imageUrl = image.getAttribute('src') || undefined;
    }
    if (image.hasAttribute('width')) {
      result.imageWidth = image.getAttribute('width') || undefined;
    }
    if (image.hasAttribute('height')) {
      result.imageHeight = image.getAttribute('height') || undefined;
    }
    if (image.hasAttribute('alt')) {
      result.imageAlt = image.getAttribute('alt') || undefined;
    }
  }
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {Record<string, any>}
 */
const getSwalIcon = templateContent => {
  const result = {};
  /** @type {HTMLElement | null} */
  const icon = templateContent.querySelector('swal-icon');
  if (icon) {
    showWarningsForAttributes(icon, ['type', 'color']);
    if (icon.hasAttribute('type')) {
      result.icon = icon.getAttribute('type');
    }
    if (icon.hasAttribute('color')) {
      result.iconColor = icon.getAttribute('color');
    }
    result.iconHtml = icon.innerHTML;
  }
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @returns {Record<string, any>}
 */
const getSwalInput = templateContent => {
  /** @type {Record<string, any>} */
  const result = {};
  /** @type {HTMLElement | null} */
  const input = templateContent.querySelector('swal-input');
  if (input) {
    showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
    result.input = input.getAttribute('type') || 'text';
    if (input.hasAttribute('label')) {
      result.inputLabel = input.getAttribute('label');
    }
    if (input.hasAttribute('placeholder')) {
      result.inputPlaceholder = input.getAttribute('placeholder');
    }
    if (input.hasAttribute('value')) {
      result.inputValue = input.getAttribute('value');
    }
  }
  /** @type {HTMLElement[]} */
  const inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
  if (inputOptions.length) {
    result.inputOptions = {};
    inputOptions.forEach(option => {
      showWarningsForAttributes(option, ['value']);
      const optionValue = option.getAttribute('value');
      if (!optionValue) {
        return;
      }
      const optionName = option.innerHTML;
      result.inputOptions[optionValue] = optionName;
    });
  }
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 * @param {string[]} paramNames
 * @returns {Record<string, any>}
 */
const getSwalStringParams = (templateContent, paramNames) => {
  /** @type {Record<string, any>} */
  const result = {};
  for (const i in paramNames) {
    const paramName = paramNames[i];
    /** @type {HTMLElement | null} */
    const tag = templateContent.querySelector(paramName);
    if (tag) {
      showWarningsForAttributes(tag, []);
      result[paramName.replace(/^swal-/, '')] = tag.innerHTML.trim();
    }
  }
  return result;
};

/**
 * @param {DocumentFragment} templateContent
 */
const showWarningsForElements = templateContent => {
  const allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
  Array.from(templateContent.children).forEach(el => {
    const tagName = el.tagName.toLowerCase();
    if (!allowedElements.includes(tagName)) {
      warn(`Unrecognized element <${tagName}>`);
    }
  });
};

/**
 * @param {HTMLElement} el
 * @param {string[]} allowedAttributes
 */
const showWarningsForAttributes = (el, allowedAttributes) => {
  Array.from(el.attributes).forEach(attribute => {
    if (allowedAttributes.indexOf(attribute.name) === -1) {
      warn([`Unrecognized attribute "${attribute.name}" on <${el.tagName.toLowerCase()}>.`, `${allowedAttributes.length ? `Allowed attributes are: ${allowedAttributes.join(', ')}` : 'To set the value, use HTML within the element.'}`]);
    }
  });
};

const SHOW_CLASS_TIMEOUT = 10;

/**
 * Open popup, add necessary classes and styles, fix scrollbar
 *
 * @param {SweetAlertOptions} params
 */
const openPopup = params => {
  const container = getContainer();
  const popup = getPopup();
  if (typeof params.willOpen === 'function') {
    params.willOpen(popup);
  }
  globalState.eventEmitter.emit('willOpen', popup);
  const bodyStyles = window.getComputedStyle(document.body);
  const initialBodyOverflow = bodyStyles.overflowY;
  addClasses(container, popup, params);

  // scrolling is 'hidden' until animation is done, after that 'auto'
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
  if (typeof params.didOpen === 'function') {
    setTimeout(() => params.didOpen(popup));
  }
  globalState.eventEmitter.emit('didOpen', popup);
  removeClass(container, swalClasses['no-transition']);
};

/**
 * @param {AnimationEvent} event
 */
const swalOpenAnimationFinished = event => {
  const popup = getPopup();
  if (event.target !== popup) {
    return;
  }
  const container = getContainer();
  popup.removeEventListener('animationend', swalOpenAnimationFinished);
  popup.removeEventListener('transitionend', swalOpenAnimationFinished);
  container.style.overflowY = 'auto';
};

/**
 * @param {HTMLElement} container
 * @param {HTMLElement} popup
 */
const setScrollingVisibility = (container, popup) => {
  if (hasCssAnimation(popup)) {
    container.style.overflowY = 'hidden';
    popup.addEventListener('animationend', swalOpenAnimationFinished);
    popup.addEventListener('transitionend', swalOpenAnimationFinished);
  } else {
    container.style.overflowY = 'auto';
  }
};

/**
 * @param {HTMLElement} container
 * @param {boolean} scrollbarPadding
 * @param {string} initialBodyOverflow
 */
const fixScrollContainer = (container, scrollbarPadding, initialBodyOverflow) => {
  iOSfix();
  if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
    replaceScrollbarWithPadding(initialBodyOverflow);
  }

  // sweetalert2/issues/1247
  setTimeout(() => {
    container.scrollTop = 0;
  });
};

/**
 * @param {HTMLElement} container
 * @param {HTMLElement} popup
 * @param {SweetAlertOptions} params
 */
const addClasses = (container, popup, params) => {
  addClass(container, params.showClass.backdrop);
  if (params.animation) {
    // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
    popup.style.setProperty('opacity', '0', 'important');
    show(popup, 'grid');
    setTimeout(() => {
      // Animate popup right after showing it
      addClass(popup, params.showClass.popup);
      // and remove the opacity workaround
      popup.style.removeProperty('opacity');
    }, SHOW_CLASS_TIMEOUT); // 10ms in order to fix #2062
  } else {
    show(popup, 'grid');
  }
  addClass([document.documentElement, document.body], swalClasses.shown);
  if (params.heightAuto && params.backdrop && !params.toast) {
    addClass([document.documentElement, document.body], swalClasses['height-auto']);
  }
};

var defaultInputValidators = {
  /**
   * @param {string} string
   * @param {string} [validationMessage]
   * @returns {Promise<string | void>}
   */
  email: (string, validationMessage) => {
    return /^[a-zA-Z0-9.+_'-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]+$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
  },
  /**
   * @param {string} string
   * @param {string} [validationMessage]
   * @returns {Promise<string | void>}
   */
  url: (string, validationMessage) => {
    // taken from https://stackoverflow.com/a/3809435 with a small change from #1306 and #2013
    return /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid URL');
  }
};

/**
 * @param {SweetAlertOptions} params
 */
function setDefaultInputValidators(params) {
  // Use default `inputValidator` for supported input types if not provided
  if (params.inputValidator) {
    return;
  }
  if (params.input === 'email') {
    params.inputValidator = defaultInputValidators['email'];
  }
  if (params.input === 'url') {
    params.inputValidator = defaultInputValidators['url'];
  }
}

/**
 * @param {SweetAlertOptions} params
 */
function validateCustomTargetElement(params) {
  // Determine if the custom target element is valid
  if (!params.target || typeof params.target === 'string' && !document.querySelector(params.target) || typeof params.target !== 'string' && !params.target.appendChild) {
    warn('Target parameter is not valid, defaulting to "body"');
    params.target = 'body';
  }
}

/**
 * Set type, text and actions on popup
 *
 * @param {SweetAlertOptions} params
 */
function setParameters(params) {
  setDefaultInputValidators(params);

  // showLoaderOnConfirm && preConfirm
  if (params.showLoaderOnConfirm && !params.preConfirm) {
    warn('showLoaderOnConfirm is set to true, but preConfirm is not defined.\n' + 'showLoaderOnConfirm should be used together with preConfirm, see usage example:\n' + 'https://sweetalert2.github.io/#ajax-request');
  }
  validateCustomTargetElement(params);

  // Replace newlines with <br> in title
  if (typeof params.title === 'string') {
    params.title = params.title.split('\n').join('<br />');
  }
  init(params);
}

/** @type {SweetAlert} */
let currentInstance;
var _promise = /*#__PURE__*/new WeakMap();
class SweetAlert {
  /**
   * @param {...any} args
   * @this {SweetAlert}
   */
  constructor(...args) {
    /**
     * @type {Promise<SweetAlertResult>}
     */
    _classPrivateFieldInitSpec(this, _promise, void 0);
    // Prevent run in Node env
    if (typeof window === 'undefined') {
      return;
    }
    currentInstance = this;

    // @ts-ignore
    const outerParams = Object.freeze(this.constructor.argsToParams(args));

    /** @type {Readonly<SweetAlertOptions>} */
    this.params = outerParams;

    /** @type {boolean} */
    this.isAwaitingPromise = false;
    _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
  }
  _main(userParams, mixinParams = {}) {
    showWarningsForParams(Object.assign({}, mixinParams, userParams));
    if (globalState.currentInstance) {
      const swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
      const {
        isAwaitingPromise
      } = globalState.currentInstance;
      globalState.currentInstance._destroy();
      if (!isAwaitingPromise) {
        swalPromiseResolve({
          isDismissed: true
        });
      }
      if (isModal()) {
        unsetAriaHidden();
      }
    }
    globalState.currentInstance = currentInstance;
    const innerParams = prepareParams(userParams, mixinParams);
    setParameters(innerParams);
    Object.freeze(innerParams);

    // clear the previous timer
    if (globalState.timeout) {
      globalState.timeout.stop();
      delete globalState.timeout;
    }

    // clear the restore focus timeout
    clearTimeout(globalState.restoreFocusTimeout);
    const domCache = populateDomCache(currentInstance);
    render(currentInstance, innerParams);
    privateProps.innerParams.set(currentInstance, innerParams);
    return swalPromise(currentInstance, domCache, innerParams);
  }

  // `catch` cannot be the name of a module export, so we define our thenable methods here instead
  then(onFulfilled) {
    return _classPrivateFieldGet2(_promise, this).then(onFulfilled);
  }
  finally(onFinally) {
    return _classPrivateFieldGet2(_promise, this).finally(onFinally);
  }
}

/**
 * @param {SweetAlert} instance
 * @param {DomCache} domCache
 * @param {SweetAlertOptions} innerParams
 * @returns {Promise}
 */
const swalPromise = (instance, domCache, innerParams) => {
  return new Promise((resolve, reject) => {
    // functions to handle all closings/dismissals
    /**
     * @param {DismissReason} dismiss
     */
    const dismissWith = dismiss => {
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
    handlePopupClick(innerParams, domCache, dismissWith);
    addKeydownHandler(globalState, innerParams, dismissWith);
    handleInputOptionsAndValue(instance, innerParams);
    openPopup(innerParams);
    setupTimer(globalState, innerParams, dismissWith);
    initFocus(domCache, innerParams);

    // Scroll container to top on open (#1247, #1946)
    setTimeout(() => {
      domCache.container.scrollTop = 0;
    });
  });
};

/**
 * @param {SweetAlertOptions} userParams
 * @param {SweetAlertOptions} mixinParams
 * @returns {SweetAlertOptions}
 */
const prepareParams = (userParams, mixinParams) => {
  const templateParams = getTemplateParams(userParams);
  const params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
  params.showClass = Object.assign({}, defaultParams.showClass, params.showClass);
  params.hideClass = Object.assign({}, defaultParams.hideClass, params.hideClass);
  if (params.animation === false) {
    params.showClass = {
      backdrop: 'swal2-noanimation'
    };
    params.hideClass = {};
  }
  return params;
};

/**
 * @param {SweetAlert} instance
 * @returns {DomCache}
 */
const populateDomCache = instance => {
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
    progressSteps: getProgressSteps()
  };
  privateProps.domCache.set(instance, domCache);
  return domCache;
};

/**
 * @param {GlobalState} globalState
 * @param {SweetAlertOptions} innerParams
 * @param {Function} dismissWith
 */
const setupTimer = (globalState, innerParams, dismissWith) => {
  const timerProgressBar = getTimerProgressBar();
  hide(timerProgressBar);
  if (innerParams.timer) {
    globalState.timeout = new Timer(() => {
      dismissWith('timer');
      delete globalState.timeout;
    }, innerParams.timer);
    if (innerParams.timerProgressBar) {
      show(timerProgressBar);
      applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
      setTimeout(() => {
        if (globalState.timeout && globalState.timeout.running) {
          // timer can be already stopped or unset at this point
          animateTimerProgressBar(innerParams.timer);
        }
      });
    }
  }
};

/**
 * Initialize focus in the popup:
 *
 * 1. If `toast` is `true`, don't steal focus from the document.
 * 2. Else if there is an [autofocus] element, focus it.
 * 3. Else if `focusConfirm` is `true` and confirm button is visible, focus it.
 * 4. Else if `focusDeny` is `true` and deny button is visible, focus it.
 * 5. Else if `focusCancel` is `true` and cancel button is visible, focus it.
 * 6. Else focus the first focusable element in a popup (if any).
 *
 * @param {DomCache} domCache
 * @param {SweetAlertOptions} innerParams
 */
const initFocus = (domCache, innerParams) => {
  if (innerParams.toast) {
    return;
  }
  // TODO: this is dumb, remove `allowEnterKey` param in the next major version
  if (!callIfFunction(innerParams.allowEnterKey)) {
    warnAboutDeprecation('allowEnterKey');
    blurActiveElement();
    return;
  }
  if (focusAutofocus(domCache)) {
    return;
  }
  if (focusButton(domCache, innerParams)) {
    return;
  }
  setFocus(-1, 1);
};

/**
 * @param {DomCache} domCache
 * @returns {boolean}
 */
const focusAutofocus = domCache => {
  const autofocusElements = Array.from(domCache.popup.querySelectorAll('[autofocus]'));
  for (const autofocusElement of autofocusElements) {
    if (autofocusElement instanceof HTMLElement && isVisible$1(autofocusElement)) {
      autofocusElement.focus();
      return true;
    }
  }
  return false;
};

/**
 * @param {DomCache} domCache
 * @param {SweetAlertOptions} innerParams
 * @returns {boolean}
 */
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
  if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
    document.activeElement.blur();
  }
};

// Dear russian users visiting russian sites. Let's have fun.
if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
  const now = new Date();
  const initiationDate = localStorage.getItem('swal-initiation');
  if (!initiationDate) {
    localStorage.setItem('swal-initiation', `${now}`);
  } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
    setTimeout(() => {
      document.body.style.pointerEvents = 'none';
      const ukrainianAnthem = document.createElement('audio');
      ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
      ukrainianAnthem.loop = true;
      document.body.appendChild(ukrainianAnthem);
      setTimeout(() => {
        ukrainianAnthem.play().catch(() => {
          // ignore
        });
      }, 2500);
    }, 500);
  }
}

// Assign instance methods from src/instanceMethods/*.js to prototype
SweetAlert.prototype.disableButtons = disableButtons;
SweetAlert.prototype.enableButtons = enableButtons;
SweetAlert.prototype.getInput = getInput;
SweetAlert.prototype.disableInput = disableInput;
SweetAlert.prototype.enableInput = enableInput;
SweetAlert.prototype.hideLoading = hideLoading;
SweetAlert.prototype.disableLoading = hideLoading;
SweetAlert.prototype.showValidationMessage = showValidationMessage;
SweetAlert.prototype.resetValidationMessage = resetValidationMessage;
SweetAlert.prototype.close = close;
SweetAlert.prototype.closePopup = close;
SweetAlert.prototype.closeModal = close;
SweetAlert.prototype.closeToast = close;
SweetAlert.prototype.rejectPromise = rejectPromise;
SweetAlert.prototype.update = update;
SweetAlert.prototype._destroy = _destroy;

// Assign static methods from src/staticMethods/*.js to constructor
Object.assign(SweetAlert, staticMethods);

// Proxy to instance methods to constructor, for now, for backwards compatibility
Object.keys(instanceMethods).forEach(key => {
  /**
   * @param {...any} args
   * @returns {any | undefined}
   */
  SweetAlert[key] = function (...args) {
    if (currentInstance && currentInstance[key]) {
      return currentInstance[key](...args);
    }
    return null;
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '11.21.2';

const Swal = SweetAlert;
// @ts-ignore
Swal.default = Swal;
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t;}catch(e){n.innerText=t;}}(document,":root{--swal2-outline: 0 0 0 3px rgba(100, 150, 200, 0.5);--swal2-container-padding: 0.625em;--swal2-backdrop: rgba(0, 0, 0, 0.4);--swal2-backdrop-transition: background-color 0.1s;--swal2-width: 32em;--swal2-padding: 0 0 1.25em;--swal2-border: none;--swal2-border-radius: 0.3125rem;--swal2-background: white;--swal2-color: #545454;--swal2-footer-border-color: #eee;--swal2-show-animation: swal2-show 0.3s;--swal2-hide-animation: swal2-hide 0.15s forwards;--swal2-icon-zoom: 1;--swal2-icon-animations: true;--swal2-title-padding: 0.8em 1em 0;--swal2-html-container-padding: 1em 1.6em 0.3em;--swal2-input-border-radius: 0.1875em;--swal2-input-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.06), 0 0 0 3px transparent;--swal2-input-background: transparent;--swal2-input-transition: border-color 0.2s, box-shadow 0.2s;--swal2-progress-step-background: #add8e6;--swal2-validation-message-background: #f0f0f0;--swal2-validation-message-color: #666;--swal2-close-button-position: initial;--swal2-close-button-inset: auto;--swal2-close-button-font-size: 2.5em;--swal2-close-button-color: #ccc;--swal2-close-button-transition: color 0.2s, box-shadow 0.2s;--swal2-close-button-outline: initial;--swal2-close-button-box-shadow: inset 0 0 0 3px transparent;--swal2-close-button-focus-box-shadow: inset var(--swal2-outline);--swal2-close-button-hover-transform: none;--swal2-button-transition: background-color 0.2s, box-shadow 0.2s;--swal2-confirm-button-border: 0;--swal2-confirm-button-border-radius: 0.25em;--swal2-confirm-button-background-color: #7066e0;--swal2-confirm-button-color: #fff;--swal2-deny-button-border: 0;--swal2-deny-button-border-radius: 0.25em;--swal2-deny-button-background-color: #dc3741;--swal2-deny-button-color: #fff;--swal2-cancel-button-border: 0;--swal2-cancel-button-border-radius: 0.25em;--swal2-cancel-button-background-color: #6e7881;--swal2-cancel-button-color: #fff;--swal2-toast-show-animation: swal2-toast-show 0.5s;--swal2-toast-hide-animation: swal2-toast-hide 0.1s forwards;--swal2-toast-border: none;--swal2-toast-box-shadow: 0 0 1px hsl(0deg 0% 0% / 0.075), 0 1px 2px hsl(0deg 0% 0% / 0.075), 1px 2px 4px hsl(0deg 0% 0% / 0.075), 1px 3px 8px hsl(0deg 0% 0% / 0.075), 2px 4px 16px hsl(0deg 0% 0% / 0.075)}[data-swal2-theme=dark]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}@media(prefers-color-scheme: dark){[data-swal2-theme=auto]{--swal2-dark-theme-black: #19191a;--swal2-dark-theme-white: #e1e1e1;--swal2-background: var(--swal2-dark-theme-black);--swal2-color: var(--swal2-dark-theme-white);--swal2-footer-border-color: #555;--swal2-input-background: color-mix(in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10%);--swal2-validation-message-background: color-mix( in srgb, var(--swal2-dark-theme-black), var(--swal2-dark-theme-white) 10% );--swal2-validation-message-color: var(--swal2-dark-theme-white)}}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px var(--swal2-backdrop)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:var(--swal2-container-padding);overflow-x:hidden;transition:var(--swal2-backdrop-transition);-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:var(--swal2-backdrop)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container)[popover]{width:auto;border:0}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:var(--swal2-width);max-width:100%;padding:var(--swal2-padding);border:var(--swal2-border);border-radius:var(--swal2-border-radius);background:var(--swal2-background);color:var(--swal2-color);font-family:inherit;font-size:1rem;container-name:swal2-popup}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:var(--swal2-title-padding);color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:var(--swal2-button-transition);box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:var(--swal2-confirm-button-border);border-radius:var(--swal2-confirm-button-border-radius);background:initial;background-color:var(--swal2-confirm-button-background-color);color:var(--swal2-confirm-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):hover{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):active{background-color:color-mix(in srgb, var(--swal2-confirm-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:var(--swal2-deny-button-border);border-radius:var(--swal2-deny-button-border-radius);background:initial;background-color:var(--swal2-deny-button-background-color);color:var(--swal2-deny-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):hover{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):active{background-color:color-mix(in srgb, var(--swal2-deny-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:var(--swal2-cancel-button-border);border-radius:var(--swal2-cancel-button-border-radius);background:initial;background-color:var(--swal2-cancel-button-background-color);color:var(--swal2-cancel-button-color);font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):hover{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), black 10%)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):active{background-color:color-mix(in srgb, var(--swal2-cancel-button-background-color), black 20%)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none;box-shadow:var(--swal2-action-button-outline)}div:where(.swal2-container) button:where(.swal2-styled)[disabled]:not(.swal2-loading){opacity:.4}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid var(--swal2-footer-border-color);color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:var(--swal2-border-radius);border-bottom-left-radius:var(--swal2-border-radius)}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){position:var(--swal2-close-button-position);inset:var(--swal2-close-button-inset);z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:var(--swal2-close-button-transition);border:none;border-radius:var(--swal2-border-radius);outline:var(--swal2-close-button-outline);background:rgba(0,0,0,0);color:var(--swal2-close-button-color);font-family:monospace;font-size:var(--swal2-close-button-font-size);cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:var(--swal2-close-button-hover-transform);background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:var(--swal2-close-button-focus-box-shadow)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:var(--swal2-html-container-padding);overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:var(--swal2-input-transition);border:1px solid #d9d9d9;border-radius:var(--swal2-input-border-radius);background:var(--swal2-input-background);box-shadow:var(--swal2-input-box-shadow);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:var(--swal2-background)}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:var(--swal2-input-background);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:var(--swal2-input-background);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:var(--swal2-background);color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:var(--swal2-validation-message-background);color:var(--swal2-validation-message-color);font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:var(--swal2-progress-step-background);color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:var(--swal2-progress-step-background)}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;zoom:var(--swal2-icon-zoom);border:.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}}div:where(.swal2-icon).swal2-warning{border-color:#f8bb86;color:#f8bb86}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}}div:where(.swal2-icon).swal2-info{border-color:#3fc3ee;color:#3fc3ee}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}}div:where(.swal2-icon).swal2-question{border-color:#87adbd;color:#87adbd}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}@container swal2-popup style(--swal2-icon-animations:true){div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:var(--swal2-show-animation)}.swal2-hide{animation:var(--swal2-hide-animation)}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;border:var(--swal2-toast-border);background:var(--swal2-background);box-shadow:var(--swal2-toast-box-shadow);pointer-events:all}.swal2-toast>*{grid-column:2}.swal2-toast h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-toast .swal2-loading{justify-content:center}.swal2-toast input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}.swal2-toast .swal2-validation-message{font-size:1em}.swal2-toast div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-toast button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-toast div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-toast div:where(.swal2-html-container):empty{padding:0}.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-toast div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-toast button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}@container swal2-popup style(--swal2-icon-animations:true){.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}}.swal2-toast.swal2-show{animation:var(--swal2-toast-show-animation)}.swal2-toast.swal2-hide{animation:var(--swal2-toast-hide-animation)}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}");

var reactExports = requireReact();
const React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

// sweetalert2-react-content v5.1.0


const mounts = [{
  key: 'title',
  getter: swal => swal.getTitle()
}, {
  key: 'html',
  getter: swal => swal.getHtmlContainer()
}, {
  key: 'confirmButtonText',
  getter: swal => swal.getConfirmButton()
}, {
  key: 'denyButtonText',
  getter: swal => swal.getDenyButton()
}, {
  key: 'cancelButtonText',
  getter: swal => swal.getCancelButton()
}, {
  key: 'footer',
  getter: swal => swal.getFooter()
}, {
  key: 'closeButtonHtml',
  getter: swal => swal.getCloseButton()
}, {
  key: 'iconHtml',
  getter: swal => swal.getIconContent()
}, {
  key: 'loaderHtml',
  getter: swal => swal.getLoader()
}];

const noop = () => {};
function withReactContent(ParentSwal) {
  /* Returns `params` separated into a tuple of `reactParams` (the React params that need to be rendered)
  and`otherParams` (all the other parameters, with any React params replaced with a space ' ') */
  function extractReactParams(params) {
    const reactParams = {};
    const otherParams = {};
    const mountKeys = mounts.map(mount => mount.key);
    Object.entries(params).forEach(_ref => {
      let [key, value] = _ref;
      if (mountKeys.includes(key) && /*#__PURE__*/React.isValidElement(value)) {
        reactParams[key] = value;
        otherParams[key] = ' ';
      } else {
        otherParams[key] = value;
      }
    });
    return [reactParams, otherParams];
  }
  function render(swal, reactParams) {
    Object.entries(reactParams).forEach(_ref2 => {
      let [key, value] = _ref2;
      const mount = mounts.find(mount => mount.key === key);
      const domElement = mount.getter(ParentSwal);
      const root = clientExports.createRoot(domElement);
      root.render(value);
      swal.__roots.push(root);
    });
  }
  function unrender(swal) {
    swal.__roots.forEach(root => {
      root.unmount();
    });
    swal.__roots = [];
  }
  return class extends ParentSwal {
    static argsToParams(args) {
      if (/*#__PURE__*/React.isValidElement(args[0]) || /*#__PURE__*/React.isValidElement(args[1])) {
        const params = {};
        ['title', 'html', 'icon'].forEach((name, index) => {
          if (args[index] !== undefined) {
            params[name] = args[index];
          }
        });
        return params;
      } else {
        return ParentSwal.argsToParams(args);
      }
    }
    _main(params, mixinParams) {
      this.__roots = [];
      this.__params = Object.assign({}, mixinParams, params);
      const [reactParams, otherParams] = extractReactParams(this.__params);
      const superWillOpen = otherParams.willOpen || noop;
      const superDidOpen = otherParams.didOpen || noop;
      const superDidDestroy = otherParams.didDestroy || noop;
      return super._main(Object.assign({}, otherParams, {
        willOpen: popup => {
          render(this, reactParams);
          superWillOpen(popup);
        },
        didOpen: popup => {
          // read more about why this setTimeout is needed here:
          // https://github.com/reactwg/react-18/discussions/5 (What about the render callback?)
          setTimeout(() => {
            superDidOpen(popup);
          });
        },
        didDestroy: popup => {
          superDidDestroy(popup);
          unrender(this);
        }
      }));
    }
    update(params) {
      Object.assign(this.__params, params);
      unrender(this);
      const [reactParams, otherParams] = extractReactParams(this.__params);
      super.update(otherParams);
      render(this, reactParams);
    }
  };
}

const showSidebar = () => {
  withReactContent(Swal).fire({
    html: /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, {}),
    showConfirmButton: false,
    showCloseButton: true,
    position: "top-left",
    customClass: {
      container: "sidebar"
    },
    showClass: {
      popup: "animate__animated animate__fadeInLeft animate__faster"
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutLeft animate__faster"
    },
    footer: `This sidebar is powered by SweetAlert2,
      <a href="${sidebarUrl}" class="nowrap" target="_blank">source code ↗</a>`
  });
};

/*! @docsearch/js 3.9.0 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},e.apply(null,arguments)}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}var n,r,o,i,a,c,u,l,s,f,p,m,v={},h=[],d=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,y=Array.isArray;function _(e,t){for(var n in t)e[n]=t[n];return e}function g(e){e&&e.parentNode&&e.parentNode.removeChild(e);}function b(e,t,r){var o,i,a,c={};for(a in t)"key"==a?o=t[a]:"ref"==a?i=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?n.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps) void 0===c[a]&&(c[a]=e.defaultProps[a]);return S(e,c,o,i,null)}function S(e,t,n,i,a){var c={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__c:null,constructor:void 0,__v:null==a?++o:a,__i:-1,__u:0};return null==a&&null!=r.vnode&&r.vnode(c),c}function O(e){return e.children}function w(e,t){this.props=e,this.context=t;}function E(e,t){if(null==t)return e.__?E(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return "function"==typeof e.type?E(e):null}function j(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return j(e)}}function P(e){(!e.__d&&(e.__d=true)&&i.push(e)&&!I.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||c)(I);}function I(){var e,t,n,o,a,c,l,s;for(i.sort(u);e=i.shift();)e.__d&&(t=i.length,o=void 0,c=(a=(n=e).__v).__e,l=[],s=[],n.__P&&((o=_({},a)).__v=a.__v+1,r.vnode&&r.vnode(o),R(n.__P,o,a,n.__n,n.__P.namespaceURI,32&a.__u?[c]:null,l,null==c?E(a):c,!!(32&a.__u),s),o.__v=a.__v,o.__.__k[o.__i]=o,L(l,o,s),o.__e!=c&&j(o)),i.length>t&&i.sort(u));I.__r=0;}function k(e,t,n,r,o,i,a,c,u,l,s){var f,p,m,d,_,g,b=r&&r.__k||h,w=t.length;for(u=function(e,t,n,r,o){var i,a,c,u,l,s=n.length,f=s,p=0;for(e.__k=new Array(o),i=0;i<o;i++)null!=(a=t[i])&&"boolean"!=typeof a&&"function"!=typeof a?(u=i+p,(a=e.__k[i]="string"==typeof a||"number"==typeof a||"bigint"==typeof a||a.constructor==String?S(null,a,null,null,null):y(a)?S(O,{children:a},null,null,null):void 0===a.constructor&&a.__b>0?S(a.type,a.props,a.key,a.ref?a.ref:null,a.__v):a).__=e,a.__b=e.__b+1,c=null,-1!==(l=a.__i=x(a,n,u,f))&&(f--,(c=n[l])&&(c.__u|=2)),null==c||null===c.__v?(-1==l&&p--,"function"!=typeof a.type&&(a.__u|=4)):l!=u&&(l==u-1?p--:l==u+1?p++:(l>u?p--:p++,a.__u|=4))):e.__k[i]=null;if(f)for(i=0;i<s;i++)null!=(c=n[i])&&!(2&c.__u)&&(c.__e==r&&(r=E(c)),H(c,c));return r}(n,t,b,u,w),f=0;f<w;f++)null!=(m=n.__k[f])&&(p=-1===m.__i?v:b[m.__i]||v,m.__i=f,g=R(e,m,p,o,i,a,c,u,l,s),d=m.__e,m.ref&&p.ref!=m.ref&&(p.ref&&M(p.ref,null,m),s.push(m.ref,m.__c||d,m)),null==_&&null!=d&&(_=d),4&m.__u||p.__k===m.__k?u=D(m,u,e):"function"==typeof m.type&&void 0!==g?u=g:d&&(u=d.nextSibling),m.__u&=-7);return n.__e=_,u}function D(e,t,n){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=D(r[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=E(e)),n.insertBefore(e.__e,t||null),t=e.__e);do{t=t&&t.nextSibling;}while(null!=t&&8==t.nodeType);return t}function C(e,t){return t=t||[],null==e||"boolean"==typeof e||(y(e)?e.some((function(e){C(e,t);})):t.push(e)),t}function x(e,t,n,r){var o,i,a=e.key,c=e.type,u=t[n];if(null===u||u&&a==u.key&&c===u.type&&!(2&u.__u))return n;if(r>(null==u||2&u.__u?0:1))for(o=n-1,i=n+1;o>=0||i<t.length;){if(o>=0){if((u=t[o])&&!(2&u.__u)&&a==u.key&&c===u.type)return o;o--;}if(i<t.length){if((u=t[i])&&!(2&u.__u)&&a==u.key&&c===u.type)return i;i++;}}return  -1}function A(e,t,n){"-"==t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||d.test(t)?n:n+"px";}function N(e,t,n,r,o){var i;e:if("style"==t)if("string"==typeof n)e.style.cssText=n;else {if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||A(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||A(e.style,t,n[t]);}else if("o"==t[0]&&"n"==t[1])i=t!=(t=t.replace(l,"$1")),t=t.toLowerCase()in e||"onFocusOut"==t||"onFocusIn"==t?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=s,e.addEventListener(t,i?p:f,i)):e.removeEventListener(t,i?p:f,i);else {if("http://www.w3.org/2000/svg"==o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||false===n&&"-"!=t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==n?"":n));}}function T(e){return function(t){if(this.l){var n=this.l[t.type+e];if(null==t.t)t.t=s++;else if(t.t<n.u)return;return n(r.event?r.event(t):t)}}}function R(e,t,n,o,i,a,c,u,l,s){var f,p,m,v,h,d,b,S,E,j,P,I,D,C,x,A,N,T=t.type;if(void 0!==t.constructor)return null;128&n.__u&&(l=!!(32&n.__u),a=[u=t.__e=n.__e]),(f=r.__b)&&f(t);e:if("function"==typeof T)try{if(S=t.props,E="prototype"in T&&T.prototype.render,j=(f=T.contextType)&&o[f.__c],P=f?j?j.props.value:f.__:o,n.__c?b=(p=t.__c=n.__c).__=p.__E:(E?t.__c=p=new T(S,P):(t.__c=p=new w(S,P),p.constructor=T,p.render=U),j&&j.sub(p),p.props=S,p.state||(p.state={}),p.context=P,p.__n=o,m=p.__d=!0,p.__h=[],p._sb=[]),E&&null==p.__s&&(p.__s=p.state),E&&null!=T.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=_({},p.__s)),_(p.__s,T.getDerivedStateFromProps(S,p.__s))),v=p.props,h=p.state,p.__v=t,m)E&&null==T.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),E&&null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(E&&null==T.getDerivedStateFromProps&&S!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(S,P),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(S,p.__s,P)||t.__v==n.__v)){for(t.__v!=n.__v&&(p.props=S,p.state=p.__s,p.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some((function(e){e&&(e.__=t);})),I=0;I<p._sb.length;I++)p.__h.push(p._sb[I]);p._sb=[],p.__h.length&&c.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(S,p.__s,P),E&&null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,h,d);}));}if(p.context=P,p.props=S,p.__P=e,p.__e=!1,D=r.__r,C=0,E){for(p.state=p.__s,p.__d=!1,D&&D(t),f=p.render(p.props,p.state,p.context),x=0;x<p._sb.length;x++)p.__h.push(p._sb[x]);p._sb=[];}else do{p.__d=!1,D&&D(t),f=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++C<25);p.state=p.__s,null!=p.getChildContext&&(o=_(_({},o),p.getChildContext())),E&&!m&&null!=p.getSnapshotBeforeUpdate&&(d=p.getSnapshotBeforeUpdate(v,h)),u=k(e,y(A=null!=f&&f.type===O&&null==f.key?f.props.children:f)?A:[A],t,n,o,i,a,c,u,l,s),p.base=t.__e,t.__u&=-161,p.__h.length&&c.push(p),b&&(p.__E=p.__=null);}catch(e){if(t.__v=null,l||null!=a)if(e.then){for(t.__u|=l?160:128;u&&8==u.nodeType&&u.nextSibling;)u=u.nextSibling;a[a.indexOf(u)]=null,t.__e=u;}else for(N=a.length;N--;)g(a[N]);else t.__e=n.__e,t.__k=n.__k;r.__e(e,t,n);}else null==a&&t.__v==n.__v?(t.__k=n.__k,t.__e=n.__e):u=t.__e=q(n.__e,t,n,o,i,a,c,l,s);return (f=r.diffed)&&f(t),128&t.__u?void 0:u}function L(e,t,n){for(var o=0;o<n.length;o++)M(n[o],n[++o],n[++o]);r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t);}));}catch(e){r.__e(e,t.__v);}}));}function q(e,t,o,i,a,c,u,l,s){var f,p,m,h,d,_,b,S=o.props,O=t.props,w=t.type;if("svg"==w?a="http://www.w3.org/2000/svg":"math"==w?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),null!=c)for(f=0;f<c.length;f++)if((d=c[f])&&"setAttribute"in d==!!w&&(w?d.localName==w:3==d.nodeType)){e=d,c[f]=null;break}if(null==e){if(null==w)return document.createTextNode(O);e=document.createElementNS(a,w,O.is&&O),l&&(r.__m&&r.__m(t,c),l=false),c=null;}if(null===w)S===O||l&&e.data===O||(e.data=O);else {if(c=c&&n.call(e.childNodes),S=o.props||v,!l&&null!=c)for(S={},f=0;f<e.attributes.length;f++)S[(d=e.attributes[f]).name]=d.value;for(f in S)if(d=S[f],"children"==f);else if("dangerouslySetInnerHTML"==f)m=d;else if(!(f in O)){if("value"==f&&"defaultValue"in O||"checked"==f&&"defaultChecked"in O)continue;N(e,f,null,d,a);}for(f in O)d=O[f],"children"==f?h=d:"dangerouslySetInnerHTML"==f?p=d:"value"==f?_=d:"checked"==f?b=d:l&&"function"!=typeof d||S[f]===d||N(e,f,d,S[f],a);if(p)l||m&&(p.__html===m.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(m&&(e.innerHTML=""),k(e,y(h)?h:[h],t,o,i,"foreignObject"==w?"http://www.w3.org/1999/xhtml":a,c,u,c?c[0]:o.__k&&E(o,0),l,s),null!=c)for(f=c.length;f--;)g(c[f]);l||(f="value","progress"==w&&null==_?e.removeAttribute("value"):void 0!==_&&(_!==e[f]||"progress"==w&&!_||"option"==w&&_!==S[f])&&N(e,f,_,S[f],a),f="checked",void 0!==b&&b!==e[f]&&N(e,f,b,S[f],a));}return e}function M(e,t,n){try{if("function"==typeof e){var o="function"==typeof e.__u;o&&e.__u(),o&&null==t||(e.__u=e(t));}else e.current=t;}catch(e){r.__e(e,n);}}function H(e,t,n){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||M(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount();}catch(e){r.__e(e,t);}o.base=o.__P=null;}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&H(o[i],t,n||"function"!=typeof e.type);n||g(e.__e),e.__c=e.__=e.__e=void 0;}function U(e,t,n){return this.constructor(e,n)}function F(e,t,o){var i,a,c,u;t==document&&(t=document.documentElement),r.__&&r.__(e,t),a=(i="function"==typeof o)?null:o&&o.__k||t.__k,c=[],u=[],R(t,e=(!i&&o||t).__k=b(O,null,[e]),a||v,v,t.namespaceURI,!i&&o?[o]:a?null:t.firstChild?n.call(t.childNodes):null,c,!i&&o?o:a?a.__e:t.firstChild,i,u),L(c,e,u);}function B(e,t){F(e,t,B);}function V(e,t,r){var o,i,a,c,u=_({},e.props);for(a in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)"key"==a?o=t[a]:"ref"==a?i=t[a]:u[a]=void 0===t[a]&&void 0!==c?c[a]:t[a];return arguments.length>2&&(u.children=arguments.length>3?n.call(arguments,2):r),S(e.type,u,o||e.key,i||e.ref,null)}n=h.slice,r={__e:function(e,t,n,r){for(var o,i,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(t){e=t;}throw e}},o=0,w.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=_({},this.state),"function"==typeof e&&(e=e(_({},n),this.props)),e&&_(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),P(this));},w.prototype.forceUpdate=function(e){this.__v&&(this.__e=true,e&&this.__h.push(e),P(this));},w.prototype.render=O,i=[],c="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(e,t){return e.__v.__b-t.__v.__b},I.__r=0,l=/(PointerCapture)$|Capture$/i,s=0,f=T(false),p=T(true),m=0;var K,W,z,J,Q=0,$=[],Z=r,G=Z.__b,Y=Z.__r,X=Z.diffed,ee=Z.__c,te=Z.unmount,ne=Z.__;function re(e,t){Z.__h&&Z.__h(W,e,Q||t),Q=0;var n=W.__H||(W.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function oe(e){return Q=1,ie(Se,e)}function ie(e,t,n){var r=re(K++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):Se(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}));}],r.__c=W,!W.u)){var o=function(e,t,n){if(!r.__c.__H)return  true;var o=r.__c.__H.__.filter((function(e){return !!e.__c}));if(o.every((function(e){return !e.__N})))return !i||i.call(this,e,t,n);var a=r.__c.props!==e;return o.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(a=true);}})),i&&i.call(this,e,t,n)||a};W.u=true;var i=W.shouldComponentUpdate,a=W.componentWillUpdate;W.componentWillUpdate=function(e,t,n){if(this.__e){var r=i;i=void 0,o(e,t,n),i=r;}a&&a.call(this,e,t,n);},W.shouldComponentUpdate=o;}return r.__N||r.__}function ae(e,t){var n=re(K++,3);!Z.__s&&be(n.__H,t)&&(n.__=e,n.i=t,W.__H.__h.push(n));}function ce(e,t){var n=re(K++,4);!Z.__s&&be(n.__H,t)&&(n.__=e,n.i=t,W.__h.push(n));}function ue(e){return Q=5,se((function(){return {current:e}}),[])}function le(e,t,n){Q=6,ce((function(){return "function"==typeof e?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0}),null==n?n:n.concat(e));}function se(e,t){var n=re(K++,7);return be(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function fe(e,t){return Q=8,se((function(){return e}),t)}function pe(e){var t=W.context[e.__c],n=re(K++,9);return n.c=e,t?(null==n.__&&(n.__=true,t.sub(W)),t.props.value):e.__}function me(e,t){Z.useDebugValue&&Z.useDebugValue(t?t(e):e);}function ve(){var e=re(K++,11);if(!e.__){for(var t=W.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++;}return e.__}function he(){for(var e;e=$.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(_e),e.__H.__h.forEach(ge),e.__H.__h=[];}catch(t){e.__H.__h=[],Z.__e(t,e.__v);}}Z.__b=function(e){W=null,G&&G(e);},Z.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),ne&&ne(e,t);},Z.__r=function(e){Y&&Y(e),K=0;var t=(W=e.__c).__H;t&&(z===W?(t.__h=[],W.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0;}))):(t.__h.forEach(_e),t.__h.forEach(ge),t.__h=[],K=0)),z=W;},Z.diffed=function(e){X&&X(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==$.push(t)&&J===Z.requestAnimationFrame||((J=Z.requestAnimationFrame)||ye)(he)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0;}))),z=W=null;},Z.__c=function(e,t){t.some((function(e){try{e.__h.forEach(_e),e.__h=e.__h.filter((function(e){return !e.__||ge(e)}));}catch(n){t.some((function(e){e.__h&&(e.__h=[]);})),t=[],Z.__e(n,e.__v);}})),ee&&ee(e,t);},Z.unmount=function(e){te&&te(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{_e(e);}catch(e){t=e;}})),n.__H=void 0,t&&Z.__e(t,n.__v));};var de="function"==typeof requestAnimationFrame;function ye(e){var t,n=function(){clearTimeout(r),de&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,100);de&&(t=requestAnimationFrame(n));}function _e(e){var t=W,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),W=t;}function ge(e){var t=W;e.__c=e.__(),W=t;}function be(e,t){return !e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function Se(e,t){return "function"==typeof t?t(e):t}function Oe(e,t){for(var n in t)e[n]=t[n];return e}function we(e,t){for(var n in e)if("__source"!==n&&!(n in t))return  true;for(var r in t)if("__source"!==r&&e[r]!==t[r])return  true;return  false}function Ee(e,t){var n=t(),r=oe({t:{__:n,u:t}}),o=r[0].t,i=r[1];return ce((function(){o.__=n,o.u=t,je(o)&&i({t:o});}),[e,n,t]),ae((function(){return je(o)&&i({t:o}),e((function(){je(o)&&i({t:o});}))}),[e]),n}function je(e){var t,n,r=e.u,o=e.__;try{var i=r();return !((t=o)===(n=i)&&(0!==t||1/t==1/n)||t!=t&&n!=n)}catch(e){return  true}}function Pe(e){e();}function Ie(e){return e}function ke(){return [false,Pe]}var De=ce;function Ce(e,t){this.props=e,this.context=t;}(Ce.prototype=new w).isPureReactComponent=true,Ce.prototype.shouldComponentUpdate=function(e,t){return we(this.props,e)||we(this.state,t)};var xe=r.__b;r.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),xe&&xe(e);};var Ae="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,Ne=function(e,t){return null==e?null:C(C(e).map(t))},Te={map:Ne,forEach:Ne,count:function(e){return e?C(e).length:0},only:function(e){var t=C(e);if(1!==t.length)throw "Children.only";return t[0]},toArray:C},Re=r.__e;r.__e=function(e,t,n,r){if(e.then)for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t);Re(e,t,n,r);};var Le=r.unmount;function qe(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c();})),e.__c.__H=null),null!=(e=Oe({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return qe(e,t,n)}))),e}function Me(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return Me(e,t,n)})),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=true,e.__c.__P=n)),e}function He(){this.__u=0,this.o=null,this.__b=null;}function Ue(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Fe(){this.i=null,this.l=null;}r.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),Le&&Le(e);},(He.prototype=new w).__c=function(e,t){var n=t.__c,r=this;null==r.o&&(r.o=[]),r.o.push(n);var o=Ue(r.__v),i=false,a=function(){i||(i=true,n.__R=null,o?o(c):c());};n.__R=a;var c=function(){if(! --r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=Me(e,e.__c.__P,e.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.o.pop();)t.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a);},He.prototype.componentWillUnmount=function(){this.o=[];},He.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=qe(this.__b,n,r.__O=r.__P);}this.__b=null;}var o=t.__a&&b(O,null,e.fallback);return o&&(o.__u&=-33),[b(O,null,t.__a?null:e.children),o]};var Be=function(e,t,n){if(++n[1]===n[0]&&e.l.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.l.size))for(n=e.i;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.i=n=n[2];}};function Ve(e){return this.getChildContext=function(){return e.context},e.children}function Ke(e){var t=this,n=e.h;t.componentWillUnmount=function(){F(null,t.v),t.v=null,t.h=null;},t.h&&t.h!==n&&t.componentWillUnmount(),t.v||(t.h=n,t.v={nodeType:1,parentNode:n,childNodes:[],contains:function(){return  true},appendChild:function(e){this.childNodes.push(e),t.h.appendChild(e);},insertBefore:function(e,n){this.childNodes.push(e),t.h.insertBefore(e,n);},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.h.removeChild(e);}}),F(b(Ve,{context:t.context},e.__v),t.v);}function We(e,t){var n=b(Ke,{__v:e,h:t});return n.containerInfo=t,n}(Fe.prototype=new w).__a=function(e){var t=this,n=Ue(t.__v),r=t.l.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),Be(t,e,r)):o();};n?n(i):i();}},Fe.prototype.render=function(e){this.i=null,this.l=new Map;var t=C(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.l.set(t[n],this.i=[1,0,this.i]);return e.children},Fe.prototype.componentDidUpdate=Fe.prototype.componentDidMount=function(){var e=this;this.l.forEach((function(t,n){Be(e,n,t);}));};var ze="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,Je=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Qe=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,$e=/[A-Z0-9]/g,Ze="undefined"!=typeof document,Ge=function(e){return ("undefined"!=typeof Symbol&&"symbol"==t(Symbol())?/fil|che|rad/:/fil|che|ra/).test(e)};function Ye(e,t,n){return null==t.__k&&(t.textContent=""),F(e,t),"function"==typeof n&&n(),e?e.__c:null}w.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(w.prototype,e,{configurable:true,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:true,writable:true,value:t});}});}));var Xe=r.event;function et(){}function tt(){return this.cancelBubble}function nt(){return this.defaultPrevented}r.event=function(e){return Xe&&(e=Xe(e)),e.persist=et,e.isPropagationStopped=tt,e.isDefaultPrevented=nt,e.nativeEvent=e};var rt,ot={enumerable:false,configurable:true,get:function(){return this.class}},it=r.vnode;r.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,n=e.type,r={},o=-1===n.indexOf("-");for(var i in t){var a=t[i];if(!("value"===i&&"defaultValue"in t&&null==a||Ze&&"children"===i&&"noscript"===n||"class"===i||"className"===i)){var c=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&true===a?a="":"translate"===c&&"no"===a?a=false:"o"===c[0]&&"n"===c[1]?"ondoubleclick"===c?i="ondblclick":"onchange"!==c||"input"!==n&&"textarea"!==n||Ge(t.type)?"onfocus"===c?i="onfocusin":"onblur"===c?i="onfocusout":Qe.test(i)&&(i=c):c=i="oninput":o&&Je.test(i)?i=i.replace($e,"-$&").toLowerCase():null===a&&(a=void 0),"oninput"===c&&r[i=c]&&(i="oninputCapture"),r[i]=a;}}"select"==n&&r.multiple&&Array.isArray(r.value)&&(r.value=C(t.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value);}))),"select"==n&&null!=r.defaultValue&&(r.value=C(t.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value;}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",ot)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r;}(e),e.$$typeof=ze,it&&it(e);};var at=r.__r;r.__r=function(e){at&&at(e),rt=e.__c;};var ct=r.diffed;r.diffed=function(e){ct&&ct(e);var t=e.props,n=e.__e;null!=n&&"textarea"===e.type&&"value"in t&&t.value!==n.value&&(n.value=null==t.value?"":t.value),rt=null;};var ut={ReactCurrentDispatcher:{current:{readContext:function(e){return rt.__n[e.__c].props.value},useCallback:fe,useContext:pe,useDebugValue:me,useDeferredValue:Ie,useEffect:ae,useId:ve,useImperativeHandle:le,useInsertionEffect:De,useLayoutEffect:ce,useMemo:se,useReducer:ie,useRef:ue,useState:oe,useSyncExternalStore:Ee,useTransition:ke}}};function lt(e){return !!e&&e.$$typeof===ze}var st={useState:oe,useId:ve,useReducer:ie,useEffect:ae,useLayoutEffect:ce,useInsertionEffect:De,useTransition:ke,useDeferredValue:Ie,useSyncExternalStore:Ee,startTransition:Pe,useRef:ue,useImperativeHandle:le,useMemo:se,useCallback:fe,useContext:pe,useDebugValue:me,version:"18.3.1",Children:Te,render:Ye,hydrate:function(e,t,n){return B(e,t),"function"==typeof n&&n(),e?e.__c:null},unmountComponentAtNode:function(e){return !!e.__k&&(F(null,e),true)},createPortal:We,createElement:b,createContext:function(e,t){var n={__c:t="__cC"+m++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null;},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.forEach((function(e){e.__e=true,P(e);}));},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e);};}),e.children}};return n.Provider.__=n.Consumer.contextType=n},createFactory:function(e){return b.bind(null,e)},cloneElement:function(e){return lt(e)?V.apply(null,arguments):e},createRef:function(){return {current:null}},Fragment:O,isValidElement:lt,isElement:lt,isFragment:function(e){return lt(e)&&e.type===O},isMemo:function(e){return !!e&&!!e.displayName&&("string"==typeof e.displayName||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")},findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:w,PureComponent:Ce,memo:function(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return !r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:we(this.props,e)}function r(t){return this.shouldComponentUpdate=n,b(e,t)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=true,r.__f=true,r},forwardRef:function(e){function t(t){var n=Oe({},t);return delete n.ref,e(n,t.ref||null)}return t.$$typeof=Ae,t.render=t,t.prototype.isReactComponent=t.__f=true,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t},flushSync:function(e,t){return e(t)},unstable_batchedUpdates:function(e,t){return e(t)},StrictMode:O,Suspense:He,SuspenseList:Fe,lazy:function(e){var t,n,r;function o(o){if(t||(t=e()).then((function(e){n=e.default||e;}),(function(e){r=e;})),r)throw r;if(!n)throw t;return b(n,o)}return o.displayName="Lazy",o.__f=true,o},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:ut};function ft(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function pt(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value;}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o);}function mt(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){pt(i,r,o,a,c,"next",e);}function c(e){pt(i,r,o,a,c,"throw",e);}a(void 0);}))}}function vt(e,n,r){return n=gt(n),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,St()?Reflect.construct(n,r||[],gt(e).constructor):n.apply(e,r))}function ht(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function dt(e,t,n){return Object.defineProperty(e,"prototype",{writable:false}),e}function yt(e,n,r){return (n=function(e){var n=function(e){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==t(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:true,configurable:true,writable:true}):e[n]=r,e}function _t(){return _t=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},_t.apply(null,arguments)}function gt(e){return gt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},gt(e)}function bt(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:true,configurable:true}}),Object.defineProperty(e,"prototype",{writable:false}),t&&Pt(e,t);}function St(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));}catch(e){}return (St=function(){return !!e})()}function Ot(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function wt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ot(Object(n),true).forEach((function(t){yt(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ot(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Et(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r];}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function jt(){jt=function(){return n};var e,n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value;},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}),e[t]}try{s({},"");}catch(e){s=function(e,t,n){return e[t]=n};}function f(e,t,n,r){var o=t&&t.prototype instanceof _?t:_,a=Object.create(o.prototype),c=new x(r||[]);return i(a,"_invoke",{value:I(e,n,c)}),a}function p(e,t,n){try{return {type:"normal",arg:e.call(t,n)}}catch(e){return {type:"throw",arg:e}}}n.wrap=f;var m="suspendedStart",v="suspendedYield",h="executing",d="completed",y={};function _(){}function g(){}function b(){}var S={};s(S,c,(function(){return this}));var O=Object.getPrototypeOf,w=O&&O(O(A([])));w&&w!==r&&o.call(w,c)&&(S=w);var E=b.prototype=_.prototype=Object.create(S);function j(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}));}));}function P(e,n){function r(i,a,c,u){var l=p(e[i],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,c,u);}),(function(e){r("throw",e,c,u);})):n.resolve(f).then((function(e){s.value=e,c(s);}),(function(e){return r("throw",e,c,u)}))}u(l.arg);}var a;i(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,o){r(e,t,n,o);}))}return a=a?a.then(o,o):o()}});}function I(t,n,r){var o=m;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return {value:e,done:true}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=k(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===m)throw o=d,r.arg;r.dispatchException(r.arg);}else "return"===r.method&&r.abrupt("return",r.arg);o=h;var l=p(t,n,r);if("normal"===l.type){if(o=r.done?d:v,l.arg===y)continue;return {value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg);}}}function k(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=p(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t);}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t;}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(true);}function A(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,a=function t(){for(;++i<n.length;)if(o.call(n,i))return t.value=n[i],t.done=false,t;return t.value=e,t.done=true,t};return a.next=a}}throw new TypeError(t(n)+" is not iterable")}return g.prototype=b,i(E,"constructor",{value:b,configurable:true}),i(b,"constructor",{value:g,configurable:true}),g.displayName=s(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return !!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return {__await:e}},j(P.prototype),s(P.prototype,u,(function(){return this})),n.AsyncIterator=P,n.async=function(e,t,r,o,i){ void 0===i&&(i=Promise);var a=new P(f(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},j(E),s(E,l,"Generator"),s(E,c,(function(){return this})),s(E,"toString",(function(){return "[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=false,e}return e.done=true,e}},n.values=A,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=false,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e);},stop:function(){this.done=true;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,true);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,true)}else {if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return "break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n);}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},n}function Pt(e,t){return Pt=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Pt(e,t)}function It(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=true,l=false;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1;}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=true,o=e;}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||Dt(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function kt(e){return function(e){if(Array.isArray(e))return ft(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||Dt(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Dt(e,t){if(e){if("string"==typeof e)return ft(e,t);var n={}.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?ft(e,t):void 0}}function Ct(e){var t="function"==typeof Map?new Map:void 0;return Ct=function(e){if(null===e||!function(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return "function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n);}function n(){return function(e,t,n){if(St())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var o=new(e.bind.apply(e,r));return n&&Pt(o,n.prototype),o}(e,arguments,gt(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:false,writable:true,configurable:true}}),Pt(n,e)},Ct(e)}function xt(){return st.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},st.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}function At(){return st.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20","aria-hidden":"true"},st.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}var Nt=["translations"],Tt="Ctrl",Rt=st.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,o=Et(e,Nt),i=r.buttonText,a=void 0===i?"Search":i,c=r.buttonAriaLabel,u=void 0===c?"Search":c,l=It(oe(null),2),s=l[0],f=l[1];ae((function(){"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?f("⌘"):f(Tt));}),[]);var p=It(s===Tt?[Tt,"Ctrl",st.createElement(xt,null)]:["Meta","Command",s],3),m=p[0],v=p[1],h=p[2];return st.createElement("button",_t({type:"button",className:"DocSearch DocSearch-Button","aria-label":"".concat(u," (").concat(v,"+K)")},o,{ref:t}),st.createElement("span",{className:"DocSearch-Button-Container"},st.createElement(At,null),st.createElement("span",{className:"DocSearch-Button-Placeholder"},a)),st.createElement("span",{className:"DocSearch-Button-Keys"},null!==s&&st.createElement(st.Fragment,null,st.createElement(Lt,{reactsToKey:m},h),st.createElement(Lt,{reactsToKey:"k"},"K"))))}));function Lt(e){var t=e.reactsToKey,n=e.children,r=It(oe(false),2),o=r[0],i=r[1];return ae((function(){if(t)return window.addEventListener("keydown",e),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",n);};function e(e){e.key===t&&i(true);}function n(e){e.key!==t&&"Meta"!==e.key||i(false);}}),[t]),st.createElement("kbd",{className:o?"DocSearch-Button-Key DocSearch-Button-Key--pressed":"DocSearch-Button-Key"},n)}function qt(e,t){var n=void 0;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){return e.apply(void 0,o)}),t);}}function Mt(e){return e.reduce((function(e,t){return e.concat(t)}),[])}var Ht=0;function Ut(e){return 0===e.collections.length?0:e.collections.reduce((function(e,t){return e+t.items.length}),0)}function Ft(e){return e!==Object(e)}function Bt(e,t){if(e===t)return  true;if(Ft(e)||Ft(t)||"function"==typeof e||"function"==typeof t)return e===t;if(Object.keys(e).length!==Object.keys(t).length)return  false;for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];if(!(o in t))return  false;if(!Bt(e[o],t[o]))return  false}return  true}var Vt=function(){},Kt=[{segment:"autocomplete-core",version:"1.17.9"}];function Wt(e){var t=e.item,n=e.items,r=void 0===n?[]:n;return {index:t.__autocomplete_indexName,items:[t],positions:[1+r.findIndex((function(e){return e.objectID===t.objectID}))],queryID:t.__autocomplete_queryID,algoliaSource:["autocomplete"]}}function zt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Jt=["items"],Qt=["items"];function $t(e){return $t="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},$t(e)}function Zt(e){return function(e){if(Array.isArray(e))return Gt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Gt(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gt(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Gt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yt(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function Xt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function en(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Xt(Object(n),true).forEach((function(t){tn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Xt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function tn(e,t,n){return (t=function(e){var t=function(e){if("object"!==$t(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==$t(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===$t(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function nn(e){return e.map((function(e){var t=e.items,n=Yt(e,Jt);return en(en({},n),{},{objectIDs:(null==t?void 0:t.map((function(e){return e.objectID})))||n.objectIDs})}))}function rn(e){var t=e.items.reduce((function(e,t){var n;return e[t.__autocomplete_indexName]=(null!==(n=e[t.__autocomplete_indexName])&&void 0!==n?n:[]).concat(t),e}),{});return Object.keys(t).map((function(e){return {index:e,items:t[e],algoliaSource:["autocomplete"]}}))}function on(e){return e.objectID&&e.__autocomplete_indexName&&e.__autocomplete_queryID}function an(e){return an="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},an(e)}function cn(e){return function(e){if(Array.isArray(e))return un(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return un(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?un(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function un(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function ln(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function sn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ln(Object(n),true).forEach((function(t){fn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ln(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function fn(e,t,n){return (t=function(e){var t=function(e){if("object"!==an(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==an(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===an(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}var pn="2.15.0",mn="https://cdn.jsdelivr.net/npm/search-insights@".concat(pn,"/dist/search-insights.min.js"),vn=qt((function(e){var t=e.onItemsChange,n=e.items,r=e.insights,o=e.state;t({insights:r,insightsEvents:rn({items:n}).map((function(e){return sn({eventName:"Items Viewed"},e)})),state:o});}),400);function hn(e){var t=function(e){return sn({onItemsChange:function(e){var t=e.insights,n=e.insightsEvents,r=e.state;t.viewedObjectIDs.apply(t,cn(n.map((function(e){return sn(sn({},e),{},{algoliaSource:dn(e.algoliaSource,r.context)})}))));},onSelect:function(e){var t=e.insights,n=e.insightsEvents,r=e.state;t.clickedObjectIDsAfterSearch.apply(t,cn(n.map((function(e){return sn(sn({},e),{},{algoliaSource:dn(e.algoliaSource,r.context)})}))));},onActive:Vt,__autocomplete_clickAnalytics:true},e)}(e),n=t.insightsClient,r=t.insightsInitParams,o=t.onItemsChange,i=t.onSelect,a=t.onActive,c=t.__autocomplete_clickAnalytics,u=n;if(n||"undefined"!=typeof window&&function(){var e={window:window}.window,t=e.AlgoliaAnalyticsObject||"aa";"string"==typeof t&&(u=e[t]),u||(e.AlgoliaAnalyticsObject=t,e[t]||(e[t]=function(){e[t].queue||(e[t].queue=[]);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e[t].queue.push(r);}),e[t].version=pn,u=e[t],function(e){var t="[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";try{var n=e.document.createElement("script");n.async=!0,n.src=mn,n.onerror=function(){console.error(t);},document.body.appendChild(n);}catch(e){console.error(t);}}(e));}(),!u)return {};r&&u("init",sn({partial:true},r));var l=function(e){var t,n,r,o=(t=function(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,r,o,i,a=[],c=true,u=false;try{for(o=(t=t.call(e)).next;!(c=(n=o.call(t)).done)&&(a.push(n.value),2!==a.length);c=!0);}catch(e){u=true,r=e;}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw r}}return a}}(e)||function(e){if(e){if("string"==typeof e)return zt(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return "Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?zt(e,2):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((e.version||"").split(".").map(Number)),n=t[0],r=t[1],n>=3||2===n&&r>=4||1===n&&r>=10);function i(t,n,r){if(o&&void 0!==r){var i=r[0].__autocomplete_algoliaCredentials,a={"X-Algolia-Application-Id":i.appId,"X-Algolia-API-Key":i.apiKey};e.apply(void 0,[t].concat(Zt(n),[{headers:a}]));}else e.apply(void 0,[t].concat(Zt(n)));}return {init:function(t,n){e("init",{appId:t,apiKey:n});},setAuthenticatedUserToken:function(t){e("setAuthenticatedUserToken",t);},setUserToken:function(t){e("setUserToken",t);},clickedObjectIDsAfterSearch:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length>0&&i("clickedObjectIDsAfterSearch",nn(t),t[0].items);},clickedObjectIDs:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length>0&&i("clickedObjectIDs",nn(t),t[0].items);},clickedFilters:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.length>0&&e.apply(void 0,["clickedFilters"].concat(n));},convertedObjectIDsAfterSearch:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length>0&&i("convertedObjectIDsAfterSearch",nn(t),t[0].items);},convertedObjectIDs:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length>0&&i("convertedObjectIDs",nn(t),t[0].items);},convertedFilters:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.length>0&&e.apply(void 0,["convertedFilters"].concat(n));},viewedObjectIDs:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length>0&&t.reduce((function(e,t){var n=t.items,r=Yt(t,Qt);return [].concat(Zt(e),Zt(function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=[],r=0;r<e.objectIDs.length;r+=t)n.push(en(en({},e),{},{objectIDs:e.objectIDs.slice(r,r+t)}));return n}(en(en({},r),{},{objectIDs:(null==n?void 0:n.map((function(e){return e.objectID})))||r.objectIDs})).map((function(e){return {items:n,payload:e}}))))}),[]).forEach((function(e){var t=e.items;return i("viewedObjectIDs",[e.payload],t)}));},viewedFilters:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.length>0&&e.apply(void 0,["viewedFilters"].concat(n));}}}(u),s={current:[]},f=qt((function(e){var t=e.state;if(t.isOpen){var n=t.collections.reduce((function(e,t){return [].concat(cn(e),cn(t.items))}),[]).filter(on);Bt(s.current.map((function(e){return e.objectID})),n.map((function(e){return e.objectID})))||(s.current=n,n.length>0&&vn({onItemsChange:o,items:n,insights:l,state:t}));}}),0);return {name:"aa.algoliaInsightsPlugin",subscribe:function(e){var t=e.setContext,n=e.onSelect,r=e.onActive;function o(e){t({algoliaInsightsPlugin:{__algoliaSearchParameters:sn(sn({},c?{clickAnalytics:true}:{}),e?{userToken:yn(e)}:{}),insights:l}});}u("addAlgoliaAgent","insights-plugin"),o(),u("onUserTokenChange",(function(e){o(e);})),u("getUserToken",null,(function(e,t){o(t);})),n((function(e){var t=e.item,n=e.state,r=e.event,o=e.source;on(t)&&i({state:n,event:r,insights:l,item:t,insightsEvents:[sn({eventName:"Item Selected"},Wt({item:t,items:o.getItems().filter(on)}))]});})),r((function(e){var t=e.item,n=e.source,r=e.state,o=e.event;on(t)&&a({state:r,event:o,insights:l,item:t,insightsEvents:[sn({eventName:"Item Active"},Wt({item:t,items:n.getItems().filter(on)}))]});}));},onStateChange:function(e){var t=e.state;f({state:t});},__autocomplete_pluginOptions:e}}function dn(){var e,t=arguments.length>1?arguments[1]:void 0;return [].concat(cn(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]),["autocomplete-internal"],cn(null!==(e=t.algoliaInsightsPlugin)&&void 0!==e&&e.__automaticInsights?["autocomplete-automatic"]:[]))}function yn(e){return "number"==typeof e?e.toString():e}function _n(e,t){var n=t;return {then:function(t,r){return _n(e.then(bn(t,n,e),bn(r,n,e)),n)},catch:function(t){return _n(e.catch(bn(t,n,e)),n)},finally:function(t){return t&&n.onCancelList.push(t),_n(e.finally(bn(t&&function(){return n.onCancelList=[],t()},n,e)),n)},cancel:function(){n.isCanceled=true;var e=n.onCancelList;n.onCancelList=[],e.forEach((function(e){e();}));},isCanceled:function(){return  true===n.isCanceled}}}function gn(e){return _n(e,{isCanceled:false,onCancelList:[]})}function bn(e,t,n){return e?function(n){return t.isCanceled?n:e(n)}:n}function Sn(e,t,n,r){if(!n)return null;if(e<0&&(null===t||null!==r&&0===t))return n+e;var o=(null===t?-1:t)+e;return o<=-1||o>=n?null===r?null:0:o}function On(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function wn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?On(Object(n),true).forEach((function(t){En(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):On(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function En(e,t,n){return (t=function(e){var t=function(e){if("object"!==jn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==jn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===jn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function jn(e){return jn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},jn(e)}function Pn(e){var t=function(e){var t=e.collections.map((function(e){return e.items.length})).reduce((function(e,t,n){var r=(e[n-1]||0)+t;return e.push(r),e}),[]).reduce((function(t,n){return n<=e.activeItemId?t+1:t}),0);return e.collections[t]}(e);if(!t)return null;var n=t.items[function(e){for(var t=e.state,n=e.collection,r=false,o=0,i=0;false===r;){var a=t.collections[o];if(a===n){r=true;break}i+=a.items.length,o++;}return t.activeItemId-i}({state:e,collection:t})],r=t.source;return {item:n,itemInputValue:r.getItemInputValue({item:n,state:e}),itemUrl:r.getItemUrl({item:n,state:e}),source:r}}function In(e,t,n){return [e,null==n?void 0:n.sourceId,t].filter(Boolean).join("-").replace(/\s/g,"")}var kn=/((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;function Dn(e){return e.nativeEvent||e}function Cn(e){return Cn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Cn(e)}function xn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function An(e,t,n){return (t=function(e){var t=function(e){if("object"!==Cn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Cn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Cn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function Nn(e){return Nn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Nn(e)}function Tn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Rn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Tn(Object(n),true).forEach((function(t){Ln(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Ln(e,t,n){return (t=function(e){var t=function(e){if("object"!==Nn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Nn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Nn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function qn(e){return qn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},qn(e)}function Mn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Hn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Un(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Hn(Object(n),true).forEach((function(t){Fn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Fn(e,t,n){return (t=function(e){var t=function(e){if("object"!==qn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==qn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===qn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function Bn(e){return Bn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Bn(e)}function Vn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Kn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Vn(Object(n),true).forEach((function(t){Wn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Vn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Wn(e,t,n){return (t=function(e){var t=function(e){if("object"!==Bn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Bn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Bn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function zn(e){return zn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},zn(e)}function Jn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Qn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Jn(Object(n),true).forEach((function(t){$n(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Jn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function $n(e,t,n){return (t=function(e){var t=function(e){if("object"!==zn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==zn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===zn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function Zn(e){return function(e){if(Array.isArray(e))return Gn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Gn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Gn(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Gn(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Yn(e){return Boolean(e.execute)}function Xn(e){var t=e.reduce((function(e,t){if(!Yn(t))return e.push(t),e;var n=t.searchClient,r=t.execute,o=t.requesterId,i=t.requests,a=e.find((function(e){return Yn(t)&&Yn(e)&&e.searchClient===n&&Boolean(o)&&e.requesterId===o}));if(a){var c;(c=a.items).push.apply(c,Zn(i));}else {var u={execute:r,requesterId:o,items:i,searchClient:n};e.push(u);}return e}),[]).map((function(e){if(!Yn(e))return Promise.resolve(e);var t=e,n=t.execute,r=t.items;return n({searchClient:t.searchClient,requests:r})}));return Promise.all(t).then((function(e){return Mt(e)}))}function er(e){return er="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},er(e)}var tr=["event","nextState","props","query","refresh","store"];function nr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function rr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?nr(Object(n),true).forEach((function(t){or(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):nr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function or(e,t,n){return (t=function(e){var t=function(e){if("object"!==er(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==er(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===er(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}var ir,ar,cr,ur=null,lr=(ir=-1,ar=-1,cr=void 0,function(e){var t=++ir;return Promise.resolve(e).then((function(e){return cr&&t<ar?cr:(ar=t,cr=e,e)}))});function sr(e){var t=e.event,n=e.nextState,r=void 0===n?{}:n,o=e.props,i=e.query,a=e.refresh,c=e.store,u=function(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}(e,tr);ur&&o.environment.clearTimeout(ur);var l=u.setCollections,s=u.setIsOpen,f=u.setQuery,p=u.setActiveItemId,m=u.setStatus,v=u.setContext;if(f(i),p(o.defaultActiveItemId),!i&&false===o.openOnFocus){var h,d=c.getState().collections.map((function(e){return rr(rr({},e),{},{items:[]})}));m("idle"),l(d),s(null!==(h=r.isOpen)&&void 0!==h?h:o.shouldPanelOpen({state:c.getState()}));var y=gn(lr(d).then((function(){return Promise.resolve()})));return c.pendingRequests.add(y)}m("loading"),ur=o.environment.setTimeout((function(){m("stalled");}),o.stallThreshold);var _=gn(lr(o.getSources(rr({query:i,refresh:a,state:c.getState()},u)).then((function(e){return Promise.all(e.map((function(e){return Promise.resolve(e.getItems(rr({query:i,refresh:a,state:c.getState()},u))).then((function(t){return function(e,t,n){if(o=e,Boolean(null==o?void 0:o.execute)){var r="algolia"===e.requesterId?Object.assign.apply(Object,[{}].concat(Zn(Object.keys(n.context).map((function(e){var t;return null===(t=n.context[e])||void 0===t?void 0:t.__algoliaSearchParameters}))))):{};return Qn(Qn({},e),{},{requests:e.queries.map((function(n){return {query:"algolia"===e.requesterId?Qn(Qn({},n),{},{params:Qn(Qn({},r),n.params)}):n,sourceId:t,transformResponse:e.transformResponse}}))})}var o;return {items:e,sourceId:t}}(t,e.sourceId,c.getState())}))}))).then(Xn).then((function(t){var n,r=t.some((function(e){return function(e){return !Array.isArray(e)&&Boolean(null==e?void 0:e._automaticInsights)}(e.items)}));return r&&v({algoliaInsightsPlugin:rr(rr({},(null===(n=c.getState().context)||void 0===n?void 0:n.algoliaInsightsPlugin)||{}),{},{__automaticInsights:r})}),function(e,t,n){return t.map((function(t){var r,o=e.filter((function(e){return e.sourceId===t.sourceId})),i=o.map((function(e){return e.items})),a=o[0].transformResponse,c=a?a({results:r=i,hits:r.map((function(e){return e.hits})).filter(Boolean),facetHits:r.map((function(e){var t;return null===(t=e.facetHits)||void 0===t?void 0:t.map((function(e){return {label:e.value,count:e.count,_highlightResult:{label:{value:e.highlighted}}}}))})).filter(Boolean)}):i;return t.onResolve({source:t,results:i,items:c,state:n.getState()}),c.every(Boolean),'The `getItems` function from source "'.concat(t.sourceId,'" must return an array of items but returned ').concat(JSON.stringify(void 0),".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"),{source:t,items:c}}))}(t,e,c)})).then((function(e){return function(e){var t=e.props,n=e.state,r=e.collections.reduce((function(e,t){return Kn(Kn({},e),{},Wn({},t.source.sourceId,Kn(Kn({},t.source),{},{getItems:function(){return Mt(t.items)}})))}),{}),o=t.plugins.reduce((function(e,t){return t.reshape?t.reshape(e):e}),{sourcesBySourceId:r,state:n}).sourcesBySourceId;return Mt(t.reshape({sourcesBySourceId:o,sources:Object.values(o),state:n})).filter(Boolean).map((function(e){return {source:e,items:e.getItems()}}))}({collections:e,props:o,state:c.getState()})}))})))).then((function(e){var n;m("idle"),l(e);var f=o.shouldPanelOpen({state:c.getState()});s(null!==(n=r.isOpen)&&void 0!==n?n:o.openOnFocus&&!i&&f||f);var p=Pn(c.getState());if(null!==c.getState().activeItemId&&p){var v=p.item,h=p.itemInputValue,d=p.itemUrl,y=p.source;y.onActive(rr({event:t,item:v,itemInputValue:h,itemUrl:d,refresh:a,source:y,state:c.getState()},u));}})).finally((function(){m("idle"),ur&&o.environment.clearTimeout(ur);}));return c.pendingRequests.add(_)}function fr(e){return fr="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},fr(e)}var pr=["event","props","refresh","store"];function mr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function vr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?mr(Object(n),true).forEach((function(t){hr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):mr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function hr(e,t,n){return (t=function(e){var t=function(e){if("object"!==fr(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==fr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===fr(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function dr(e){return dr="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},dr(e)}var yr=["props","refresh","store"],_r=["inputElement","formElement","panelElement"],gr=["inputElement"],br=["inputElement","maxLength"],Sr=["source"],Or=["item","source"];function wr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Er(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?wr(Object(n),true).forEach((function(t){jr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):wr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function jr(e,t,n){return (t=function(e){var t=function(e){if("object"!==dr(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==dr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===dr(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function Pr(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function Ir(e){return Ir="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Ir(e)}function kr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Dr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?kr(Object(n),true).forEach((function(t){Cr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):kr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Cr(e,t,n){return (t=function(e){var t=function(e){if("object"!==Ir(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Ir(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Ir(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function xr(e){var t,n,r,o,i=e.plugins,a=e.options,c=null===(t=((null===(n=a.__autocomplete_metadata)||void 0===n?void 0:n.userAgents)||[])[0])||void 0===t?void 0:t.segment,u=c?Cr({},c,Object.keys((null===(r=a.__autocomplete_metadata)||void 0===r?void 0:r.options)||{})):{};return {plugins:i.map((function(e){return {name:e.name,options:Object.keys(e.__autocomplete_pluginOptions||[])}})),options:Dr({"autocomplete-core":Object.keys(a)},u),ua:Kt.concat((null===(o=a.__autocomplete_metadata)||void 0===o?void 0:o.userAgents)||[])}}function Ar(e){var t,n=e.state;return  false===n.isOpen||null===n.activeItemId?null:(null===(t=Pn(n))||void 0===t?void 0:t.itemInputValue)||null}function Nr(e){return Nr="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Nr(e)}function Tr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Rr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Tr(Object(n),true).forEach((function(t){Lr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Tr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Lr(e,t,n){return (t=function(e){var t=function(e){if("object"!==Nr(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Nr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Nr(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}var qr=function(e,t){switch(t.type){case "setActiveItemId":case "mousemove":return Rr(Rr({},e),{},{activeItemId:t.payload});case "setQuery":return Rr(Rr({},e),{},{query:t.payload,completion:null});case "setCollections":return Rr(Rr({},e),{},{collections:t.payload});case "setIsOpen":return Rr(Rr({},e),{},{isOpen:t.payload});case "setStatus":return Rr(Rr({},e),{},{status:t.payload});case "setContext":return Rr(Rr({},e),{},{context:Rr(Rr({},e.context),t.payload)});case "ArrowDown":var n=Rr(Rr({},e),{},{activeItemId:t.payload.hasOwnProperty("nextActiveItemId")?t.payload.nextActiveItemId:Sn(1,e.activeItemId,Ut(e),t.props.defaultActiveItemId)});return Rr(Rr({},n),{},{completion:Ar({state:n})});case "ArrowUp":var r=Rr(Rr({},e),{},{activeItemId:Sn(-1,e.activeItemId,Ut(e),t.props.defaultActiveItemId)});return Rr(Rr({},r),{},{completion:Ar({state:r})});case "Escape":return e.isOpen?Rr(Rr({},e),{},{activeItemId:null,isOpen:false,completion:null}):Rr(Rr({},e),{},{activeItemId:null,query:"",status:"idle",collections:[]});case "submit":return Rr(Rr({},e),{},{activeItemId:null,isOpen:false,status:"idle"});case "reset":return Rr(Rr({},e),{},{activeItemId:true===t.props.openOnFocus?t.props.defaultActiveItemId:null,status:"idle",completion:null,query:""});case "focus":return Rr(Rr({},e),{},{activeItemId:t.props.defaultActiveItemId,isOpen:(t.props.openOnFocus||Boolean(e.query))&&t.props.shouldPanelOpen({state:e})});case "blur":return t.props.debug?e:Rr(Rr({},e),{},{isOpen:false,activeItemId:null});case "mouseleave":return Rr(Rr({},e),{},{activeItemId:t.props.defaultActiveItemId});default:return "The reducer action ".concat(JSON.stringify(t.type)," is not supported."),e}};function Mr(e){return Mr="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Mr(e)}function Hr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Ur(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Hr(Object(n),true).forEach((function(t){Fr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Fr(e,t,n){return (t=function(e){var t=function(e){if("object"!==Mr(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Mr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Mr(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:true,configurable:true,writable:true}):e[t]=n,e}function Br(e){var t=[],n=function(e,t){var n,r="undefined"!=typeof window?window:{},o=e.plugins||[];return Un(Un({debug:false,openOnFocus:false,enterKeyHint:void 0,ignoreCompositionEvents:false,placeholder:"",autoFocus:false,defaultActiveItemId:null,stallThreshold:300,insights:void 0,environment:r,shouldPanelOpen:function(e){return Ut(e.state)>0},reshape:function(e){return e.sources}},e),{},{id:null!==(n=e.id)&&void 0!==n?n:"autocomplete-".concat(Ht++),plugins:o,initialState:Un({activeItemId:null,query:"",completion:null,collections:[],isOpen:false,status:"idle",context:{}},e.initialState),onStateChange:function(t){var n;null===(n=e.onStateChange)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onStateChange)||void 0===n?void 0:n.call(e,t)}));},onSubmit:function(t){var n;null===(n=e.onSubmit)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onSubmit)||void 0===n?void 0:n.call(e,t)}));},onReset:function(t){var n;null===(n=e.onReset)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onReset)||void 0===n?void 0:n.call(e,t)}));},getSources:function(n){return Promise.all([].concat(function(e){return function(e){if(Array.isArray(e))return Mn(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Mn(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Mn(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(o.map((function(e){return e.getSources}))),[e.getSources]).filter(Boolean).map((function(e){return function(e,t){var n=[];return Promise.resolve(e(t)).then((function(e){return Promise.all(e.filter((function(e){return Boolean(e)})).map((function(e){if(e.sourceId,n.includes(e.sourceId))throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId)," is not unique."));n.push(e.sourceId);var t={getItemInputValue:function(e){return e.state.query},getItemUrl:function(){},onSelect:function(e){(0, e.setIsOpen)(false);},onActive:Vt,onResolve:Vt};Object.keys(t).forEach((function(e){t[e].__default=true;}));var r=wn(wn({},t),e);return Promise.resolve(r)})))}))}(e,n)}))).then((function(e){return Mt(e)})).then((function(e){return e.map((function(e){return Un(Un({},e),{},{onSelect:function(n){e.onSelect(n),t.forEach((function(e){var t;return null===(t=e.onSelect)||void 0===t?void 0:t.call(e,n)}));},onActive:function(n){e.onActive(n),t.forEach((function(e){var t;return null===(t=e.onActive)||void 0===t?void 0:t.call(e,n)}));},onResolve:function(n){e.onResolve(n),t.forEach((function(e){var t;return null===(t=e.onResolve)||void 0===t?void 0:t.call(e,n)}));}})}))}))},navigator:Un({navigate:function(e){var t=e.itemUrl;r.location.assign(t);},navigateNewTab:function(e){var t=e.itemUrl,n=r.open(t,"_blank","noopener");null==n||n.focus();},navigateNewWindow:function(e){var t=e.itemUrl;r.open(t,"_blank","noopener");}},e.navigator)})}(e,t),r=function(e,t,n){var r,o=t.initialState;return {getState:function(){return o},dispatch:function(r,i){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?xn(Object(n),true).forEach((function(t){An(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):xn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}({},o);o=e(o,{type:r,props:t,payload:i}),n({state:o,prevState:a});},pendingRequests:(r=[],{add:function(e){return r.push(e),e.finally((function(){r=r.filter((function(t){return t!==e}));}))},cancelAll:function(){r.forEach((function(e){return e.cancel()}));},isEmpty:function(){return 0===r.length}})}}(qr,n,(function(e){var t,r,i=e.prevState,l=e.state;if(n.onStateChange(Ur({prevState:i,state:l,refresh:a,navigator:n.navigator},o)),!u()&&null!==(t=l.context)&&void 0!==t&&null!==(r=t.algoliaInsightsPlugin)&&void 0!==r&&r.__automaticInsights&&false!==n.insights){var s=hn({__autocomplete_clickAnalytics:false});n.plugins.push(s),c([s]);}})),o=function(e){var t=e.store;return {setActiveItemId:function(e){t.dispatch("setActiveItemId",e);},setQuery:function(e){t.dispatch("setQuery",e);},setCollections:function(e){var n=0,r=e.map((function(e){return Rn(Rn({},e),{},{items:Mt(e.items).map((function(e){return Rn(Rn({},e),{},{__autocomplete_id:n++})}))})}));t.dispatch("setCollections",r);},setIsOpen:function(e){t.dispatch("setIsOpen",e);},setStatus:function(e){t.dispatch("setStatus",e);},setContext:function(e){t.dispatch("setContext",e);}}}({store:r}),i=function(e){var t=e.props,n=e.refresh,r=e.store,o=Pr(e,yr);return {getEnvironmentProps:function(e){var n=e.inputElement,o=e.formElement,i=e.panelElement;function a(e){!r.getState().isOpen&&r.pendingRequests.isEmpty()||e.target===n||false===[o,i].some((function(t){return (n=t)===(r=e.target)||n.contains(r);var n,r;}))&&(r.dispatch("blur",null),t.debug||r.pendingRequests.cancelAll());}return Er({onTouchStart:a,onMouseDown:a,onTouchMove:function(e){ false!==r.getState().isOpen&&n===t.environment.document.activeElement&&e.target!==n&&n.blur();}},Pr(e,_r))},getRootProps:function(e){return Er({role:"combobox","aria-expanded":r.getState().isOpen,"aria-haspopup":"listbox","aria-controls":r.getState().isOpen?r.getState().collections.map((function(e){var n=e.source;return In(t.id,"list",n)})).join(" "):void 0,"aria-labelledby":In(t.id,"label")},e)},getFormProps:function(e){return e.inputElement,Er({action:"",noValidate:true,role:"search",onSubmit:function(i){var a;i.preventDefault(),t.onSubmit(Er({event:i,refresh:n,state:r.getState()},o)),r.dispatch("submit",null),null===(a=e.inputElement)||void 0===a||a.blur();},onReset:function(i){var a;i.preventDefault(),t.onReset(Er({event:i,refresh:n,state:r.getState()},o)),r.dispatch("reset",null),null===(a=e.inputElement)||void 0===a||a.focus();}},Pr(e,gr))},getLabelProps:function(e){return Er({htmlFor:In(t.id,"input"),id:In(t.id,"label")},e)},getInputProps:function(e){var i;function a(e){(t.openOnFocus||Boolean(r.getState().query))&&sr(Er({event:e,props:t,query:r.getState().completion||r.getState().query,refresh:n,store:r},o)),r.dispatch("focus",null);}var c=e||{};c.inputElement;var u=c.maxLength,l=void 0===u?512:u,s=Pr(c,br),f=Pn(r.getState()),p=function(e){return Boolean(e&&e.match(kn))}((null===(i=t.environment.navigator)||void 0===i?void 0:i.userAgent)||""),m=t.enterKeyHint||(null!=f&&f.itemUrl&&!p?"go":"search");return Er({"aria-autocomplete":"both","aria-activedescendant":r.getState().isOpen&&null!==r.getState().activeItemId?In(t.id,"item-".concat(r.getState().activeItemId),null==f?void 0:f.source):void 0,"aria-controls":r.getState().isOpen?r.getState().collections.map((function(e){var n=e.source;return In(t.id,"list",n)})).join(" "):void 0,"aria-labelledby":In(t.id,"label"),value:r.getState().completion||r.getState().query,id:In(t.id,"input"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",enterKeyHint:m,spellCheck:"false",autoFocus:t.autoFocus,placeholder:t.placeholder,maxLength:l,type:"search",onChange:function(e){var i=e.currentTarget.value;t.ignoreCompositionEvents&&Dn(e).isComposing?o.setQuery(i):sr(Er({event:e,props:t,query:i.slice(0,l),refresh:n,store:r},o));},onCompositionEnd:function(e){sr(Er({event:e,props:t,query:e.currentTarget.value.slice(0,l),refresh:n,store:r},o));},onKeyDown:function(e){Dn(e).isComposing||function(e){var t=e.event,n=e.props,r=e.refresh,o=e.store,i=function(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}(e,pr);if("ArrowUp"===t.key||"ArrowDown"===t.key){var a=function(){var e=Pn(o.getState()),t=n.environment.document.getElementById(In(n.id,"item-".concat(o.getState().activeItemId),null==e?void 0:e.source));t&&(t.scrollIntoViewIfNeeded?t.scrollIntoViewIfNeeded(false):t.scrollIntoView(false));},c=function(){var e=Pn(o.getState());if(null!==o.getState().activeItemId&&e){var n=e.item,a=e.itemInputValue,c=e.itemUrl,u=e.source;u.onActive(vr({event:t,item:n,itemInputValue:a,itemUrl:c,refresh:r,source:u,state:o.getState()},i));}};t.preventDefault(),false===o.getState().isOpen&&(n.openOnFocus||Boolean(o.getState().query))?sr(vr({event:t,props:n,query:o.getState().query,refresh:r,store:o},i)).then((function(){o.dispatch(t.key,{nextActiveItemId:n.defaultActiveItemId}),c(),setTimeout(a,0);})):(o.dispatch(t.key,{}),c(),a());}else if("Escape"===t.key)t.preventDefault(),o.dispatch(t.key,null),o.pendingRequests.cancelAll();else if("Tab"===t.key)o.dispatch("blur",null),o.pendingRequests.cancelAll();else if("Enter"===t.key){if(null===o.getState().activeItemId||o.getState().collections.every((function(e){return 0===e.items.length})))return void(n.debug||o.pendingRequests.cancelAll());t.preventDefault();var u=Pn(o.getState()),l=u.item,s=u.itemInputValue,f=u.itemUrl,p=u.source;if(t.metaKey||t.ctrlKey) void 0!==f&&(p.onSelect(vr({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i)),n.navigator.navigateNewTab({itemUrl:f,item:l,state:o.getState()}));else if(t.shiftKey) void 0!==f&&(p.onSelect(vr({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i)),n.navigator.navigateNewWindow({itemUrl:f,item:l,state:o.getState()}));else if(t.altKey);else {if(void 0!==f)return p.onSelect(vr({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i)),void n.navigator.navigate({itemUrl:f,item:l,state:o.getState()});sr(vr({event:t,nextState:{isOpen:false},props:n,query:s,refresh:r,store:o},i)).then((function(){p.onSelect(vr({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i));}));}}}(Er({event:e,props:t,refresh:n,store:r},o));},onFocus:a,onBlur:Vt,onClick:function(n){e.inputElement!==t.environment.document.activeElement||r.getState().isOpen||a(n);}},s)},getPanelProps:function(e){return Er({onMouseDown:function(e){e.preventDefault();},onMouseLeave:function(){r.dispatch("mouseleave",null);}},e)},getListProps:function(e){var n=e||{},r=n.source,o=Pr(n,Sr);return Er({role:"listbox","aria-labelledby":In(t.id,"label"),id:In(t.id,"list",r)},o)},getItemProps:function(e){var i=e.item,a=e.source,c=Pr(e,Or);return Er({id:In(t.id,"item-".concat(i.__autocomplete_id),a),role:"option","aria-selected":r.getState().activeItemId===i.__autocomplete_id,onMouseMove:function(e){if(i.__autocomplete_id!==r.getState().activeItemId){r.dispatch("mousemove",i.__autocomplete_id);var t=Pn(r.getState());if(null!==r.getState().activeItemId&&t){var a=t.item,c=t.itemInputValue,u=t.itemUrl,l=t.source;l.onActive(Er({event:e,item:a,itemInputValue:c,itemUrl:u,refresh:n,source:l,state:r.getState()},o));}}},onMouseDown:function(e){e.preventDefault();},onClick:function(e){var c=a.getItemInputValue({item:i,state:r.getState()}),u=a.getItemUrl({item:i,state:r.getState()});(u?Promise.resolve():sr(Er({event:e,nextState:{isOpen:false},props:t,query:c,refresh:n,store:r},o))).then((function(){a.onSelect(Er({event:e,item:i,itemInputValue:c,itemUrl:u,refresh:n,source:a,state:r.getState()},o));}));}},c)}}}(Ur({props:n,refresh:a,store:r,navigator:n.navigator},o));function a(){return sr(Ur({event:new Event("input"),nextState:{isOpen:r.getState().isOpen},props:n,navigator:n.navigator,query:r.getState().query,refresh:a,store:r},o))}function c(e){e.forEach((function(e){var r;return null===(r=e.subscribe)||void 0===r?void 0:r.call(e,Ur(Ur({},o),{},{navigator:n.navigator,refresh:a,onSelect:function(e){t.push({onSelect:e});},onActive:function(e){t.push({onActive:e});},onResolve:function(e){t.push({onResolve:e});}}))}));}function u(){return n.plugins.some((function(e){return "aa.algoliaInsightsPlugin"===e.name}))}if(n.insights&&!u()){var l="boolean"==typeof n.insights?{}:n.insights;n.plugins.push(hn(l));}return c(n.plugins),function(e){var t,n,r=e.metadata,o=e.environment;if(null===(t=o.navigator)||void 0===t||null===(n=t.userAgent)||void 0===n?void 0:n.includes("Algolia Crawler")){var i=o.document.createElement("meta"),a=o.document.querySelector("head");i.name="algolia:metadata",setTimeout((function(){i.content=JSON.stringify(r),a.appendChild(i);}),0);}}({metadata:xr({plugins:n.plugins,options:e}),environment:n.environment}),Ur(Ur({refresh:a,navigator:n.navigator},i),o)}function Vr(e){var t=e.translations,n=(void 0===t?{}:t).searchByText,r=void 0===n?"Search by":n;return st.createElement("a",{href:"https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname,"&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),target:"_blank",rel:"noopener noreferrer"},st.createElement("span",{className:"DocSearch-Label"},r),st.createElement("svg",{width:"77",height:"19","aria-label":"Algolia",role:"img",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2196.2 500"},st.createElement("defs",null,st.createElement("style",null,".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")),st.createElement("path",{className:"cls-2",d:"M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),st.createElement("rect",{className:"cls-1",x:"1845.88",y:"104.73",width:"62.58",height:"277.9",rx:"5.9",ry:"5.9"}),st.createElement("path",{className:"cls-2",d:"M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z"}),st.createElement("path",{className:"cls-2",d:"M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),st.createElement("path",{className:"cls-2",d:"M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z"}),st.createElement("path",{className:"cls-2",d:"M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),st.createElement("path",{className:"cls-2",d:"M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),st.createElement("path",{className:"cls-2",d:"M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z"}),st.createElement("path",{className:"cls-1",d:"M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z"})))}function Kr(e){return st.createElement("svg",{width:"15",height:"15","aria-label":e.ariaLabel,role:"img"},st.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2"},e.children))}function Wr(e){var t=e.translations,n=void 0===t?{}:t,r=n.selectText,o=void 0===r?"to select":r,i=n.selectKeyAriaLabel,a=void 0===i?"Enter key":i,c=n.navigateText,u=void 0===c?"to navigate":c,l=n.navigateUpKeyAriaLabel,s=void 0===l?"Arrow up":l,f=n.navigateDownKeyAriaLabel,p=void 0===f?"Arrow down":f,m=n.closeText,v=void 0===m?"to close":m,h=n.closeKeyAriaLabel,d=void 0===h?"Escape key":h,y=n.searchByText,_=void 0===y?"Search by":y;return st.createElement(st.Fragment,null,st.createElement("div",{className:"DocSearch-Logo"},st.createElement(Vr,{translations:{searchByText:_}})),st.createElement("ul",{className:"DocSearch-Commands"},st.createElement("li",null,st.createElement("kbd",{className:"DocSearch-Commands-Key"},st.createElement(Kr,{ariaLabel:a},st.createElement("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"}))),st.createElement("span",{className:"DocSearch-Label"},o)),st.createElement("li",null,st.createElement("kbd",{className:"DocSearch-Commands-Key"},st.createElement(Kr,{ariaLabel:p},st.createElement("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"}))),st.createElement("kbd",{className:"DocSearch-Commands-Key"},st.createElement(Kr,{ariaLabel:s},st.createElement("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"}))),st.createElement("span",{className:"DocSearch-Label"},u)),st.createElement("li",null,st.createElement("kbd",{className:"DocSearch-Commands-Key"},st.createElement(Kr,{ariaLabel:d},st.createElement("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"}))),st.createElement("span",{className:"DocSearch-Label"},v))))}function zr(e){var t=e.hit,n=e.children;return st.createElement("a",{href:t.url},n)}function Jr(){return st.createElement("svg",{viewBox:"0 0 38 38",stroke:"currentColor",strokeOpacity:".5"},st.createElement("g",{fill:"none",fillRule:"evenodd"},st.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},st.createElement("circle",{strokeOpacity:".3",cx:"18",cy:"18",r:"18"}),st.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},st.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}function Qr(){return st.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},st.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},st.createElement("path",{d:"M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"}),st.createElement("path",{d:"M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"})))}function $r(){return st.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},st.createElement("path",{d:"M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function Zr(){return st.createElement("svg",{className:"DocSearch-Hit-Select-Icon",width:"20",height:"20",viewBox:"0 0 20 20"},st.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},st.createElement("path",{d:"M18 3v4c0 2-2 4-4 4H2"}),st.createElement("path",{d:"M8 17l-6-6 6-6"})))}var Gr=function(){return st.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},st.createElement("path",{d:"M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))};function Yr(e){switch(e.type){case "lvl1":return st.createElement(Gr,null);case "content":return st.createElement(eo,null);default:return st.createElement(Xr,null)}}function Xr(){return st.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},st.createElement("path",{d:"M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function eo(){return st.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},st.createElement("path",{d:"M17 5H3h14zm0 5H3h14zm0 5H3h14z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function to(){return st.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},st.createElement("path",{d:"M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function no(){return st.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},st.createElement("path",{d:"M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"}))}function ro(){return st.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},st.createElement("path",{d:"M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"}))}function oo(e){var t=e.translations,n=void 0===t?{}:t,r=n.titleText,o=void 0===r?"Unable to fetch results":r,i=n.helpText,a=void 0===i?"You might want to check your network connection.":i;return st.createElement("div",{className:"DocSearch-ErrorScreen"},st.createElement("div",{className:"DocSearch-Screen-Icon"},st.createElement(no,null)),st.createElement("p",{className:"DocSearch-Title"},o),st.createElement("p",{className:"DocSearch-Help"},a))}var io=["translations"];function ao(e){var t=e.translations,n=void 0===t?{}:t,r=Et(e,io),o=n.noResultsText,i=void 0===o?"No results for":o,a=n.suggestedQueryText,c=void 0===a?"Try searching for":a,u=n.reportMissingResultsText,l=void 0===u?"Believe this query should return results?":u,s=n.reportMissingResultsLinkText,f=void 0===s?"Let us know.":s,p=r.state.context.searchSuggestions;return st.createElement("div",{className:"DocSearch-NoResults"},st.createElement("div",{className:"DocSearch-Screen-Icon"},st.createElement(ro,null)),st.createElement("p",{className:"DocSearch-Title"},i,' "',st.createElement("strong",null,r.state.query),'"'),p&&p.length>0&&st.createElement("div",{className:"DocSearch-NoResults-Prefill-List"},st.createElement("p",{className:"DocSearch-Help"},c,":"),st.createElement("ul",null,p.slice(0,3).reduce((function(e,t){return [].concat(kt(e),[st.createElement("li",{key:t},st.createElement("button",{className:"DocSearch-Prefill",key:t,type:"button",onClick:function(){r.setQuery(t.toLowerCase()+" "),r.refresh(),r.inputRef.current.focus();}},t))])}),[]))),r.getMissingResultsUrl&&st.createElement("p",{className:"DocSearch-Help"},"".concat(l," "),st.createElement("a",{href:r.getMissingResultsUrl({query:r.state.query}),target:"_blank",rel:"noopener noreferrer"},f)))}var co=["hit","attribute","tagName"];function uo(e,t){return t.split(".").reduce((function(e,t){return null!=e&&e[t]?e[t]:null}),e)}function lo(e){var t=e.hit,n=e.attribute,r=e.tagName;return b(void 0===r?"span":r,wt(wt({},Et(e,co)),{},{dangerouslySetInnerHTML:{__html:uo(t,"_snippetResult.".concat(n,".value"))||uo(t,n)}}))}function so(e){return e.collection&&0!==e.collection.items.length?st.createElement("section",{className:"DocSearch-Hits"},st.createElement("div",{className:"DocSearch-Hit-source"},e.title),st.createElement("ul",e.getListProps(),e.collection.items.map((function(t,n){return st.createElement(fo,_t({key:[e.title,t.objectID].join(":"),item:t,index:n},e))})))):null}function fo(e){var t=e.item,n=e.index,r=e.renderIcon,o=e.renderAction,i=e.getItemProps,a=e.onItemClick,c=e.collection,u=e.hitComponent,l=It(st.useState(false),2),s=l[0],f=l[1],p=It(st.useState(false),2),m=p[0],v=p[1],h=st.useRef(null),d=u;return st.createElement("li",_t({className:["DocSearch-Hit",t.__docsearch_parent&&"DocSearch-Hit--Child",s&&"DocSearch-Hit--deleting",m&&"DocSearch-Hit--favoriting"].filter(Boolean).join(" "),onTransitionEnd:function(){h.current&&h.current();}},i({item:t,source:c.source,onClick:function(e){a(t,e);}})),st.createElement(d,{hit:t},st.createElement("div",{className:"DocSearch-Hit-Container"},r({item:t,index:n}),t.hierarchy[t.type]&&"lvl1"===t.type&&st.createElement("div",{className:"DocSearch-Hit-content-wrapper"},st.createElement(lo,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.lvl1"}),t.content&&st.createElement(lo,{className:"DocSearch-Hit-path",hit:t,attribute:"content"})),t.hierarchy[t.type]&&("lvl2"===t.type||"lvl3"===t.type||"lvl4"===t.type||"lvl5"===t.type||"lvl6"===t.type)&&st.createElement("div",{className:"DocSearch-Hit-content-wrapper"},st.createElement(lo,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.".concat(t.type)}),st.createElement(lo,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),"content"===t.type&&st.createElement("div",{className:"DocSearch-Hit-content-wrapper"},st.createElement(lo,{className:"DocSearch-Hit-title",hit:t,attribute:"content"}),st.createElement(lo,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),o({item:t,runDeleteTransition:function(e){f(true),h.current=e;},runFavoriteTransition:function(e){v(true),h.current=e;}}))))}function po(e,t,n){return e.reduce((function(e,r){var o=t(r);return e.hasOwnProperty(o)||(e[o]=[]),e[o].length<(n||5)&&e[o].push(r),e}),{})}function mo(e){return e}function vo(e){return 1===e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}function ho(){}var yo=/(<mark>|<\/mark>)/g,_o=RegExp(yo.source);function go(e){var t,n,r=e;if(!r.__docsearch_parent&&!e._highlightResult)return e.hierarchy.lvl0;var o=r.__docsearch_parent?null===(t=r.__docsearch_parent)||void 0===t||null===(t=t._highlightResult)||void 0===t||null===(t=t.hierarchy)||void 0===t?void 0:t.lvl0:null===(n=e._highlightResult)||void 0===n||null===(n=n.hierarchy)||void 0===n?void 0:n.lvl0;return o?o.value&&_o.test(o.value)?o.value.replace(yo,""):o.value:e.hierarchy.lvl0}function bo(e){return st.createElement("div",{className:"DocSearch-Dropdown-Container"},e.state.collections.map((function(t){if(0===t.items.length)return null;var n=go(t.items[0]);return st.createElement(so,_t({},e,{key:t.source.sourceId,title:n,collection:t,renderIcon:function(e){var n,r=e.item,o=e.index;return st.createElement(st.Fragment,null,r.__docsearch_parent&&st.createElement("svg",{className:"DocSearch-Hit-Tree",viewBox:"0 0 24 54"},st.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},r.__docsearch_parent!==(null===(n=t.items[o+1])||void 0===n?void 0:n.__docsearch_parent)?st.createElement("path",{d:"M8 6v21M20 27H8.3"}):st.createElement("path",{d:"M8 6v42M20 27H8.3"}))),st.createElement("div",{className:"DocSearch-Hit-icon"},st.createElement(Yr,{type:r.type})))},renderAction:function(){return st.createElement("div",{className:"DocSearch-Hit-action"},st.createElement(Zr,null))}}))})),e.resultsFooterComponent&&st.createElement("section",{className:"DocSearch-HitsFooter"},st.createElement(e.resultsFooterComponent,{state:e.state})))}var So=["translations"];function Oo(e){var t=e.translations,n=void 0===t?{}:t,r=Et(e,So),o=n.recentSearchesTitle,i=void 0===o?"Recent":o,a=n.noRecentSearchesText,c=void 0===a?"No recent searches":a,u=n.saveRecentSearchButtonTitle,l=void 0===u?"Save this search":u,s=n.removeRecentSearchButtonTitle,f=void 0===s?"Remove this search from history":s,p=n.favoriteSearchesTitle,m=void 0===p?"Favorite":p,v=n.removeFavoriteSearchButtonTitle,h=void 0===v?"Remove this search from favorites":v;return "idle"===r.state.status&&false===r.hasCollections?r.disableUserPersonalization?null:st.createElement("div",{className:"DocSearch-StartScreen"},st.createElement("p",{className:"DocSearch-Help"},c)):false===r.hasCollections?null:st.createElement("div",{className:"DocSearch-Dropdown-Container"},st.createElement(so,_t({},r,{title:i,collection:r.state.collections[0],renderIcon:function(){return st.createElement("div",{className:"DocSearch-Hit-icon"},st.createElement(Qr,null))},renderAction:function(e){var t=e.item,n=e.runFavoriteTransition,o=e.runDeleteTransition;return st.createElement(st.Fragment,null,st.createElement("div",{className:"DocSearch-Hit-action"},st.createElement("button",{className:"DocSearch-Hit-action-button",title:l,type:"submit",onClick:function(e){e.preventDefault(),e.stopPropagation(),n((function(){r.favoriteSearches.add(t),r.recentSearches.remove(t),r.refresh();}));}},st.createElement(to,null))),st.createElement("div",{className:"DocSearch-Hit-action"},st.createElement("button",{className:"DocSearch-Hit-action-button",title:f,type:"submit",onClick:function(e){e.preventDefault(),e.stopPropagation(),o((function(){r.recentSearches.remove(t),r.refresh();}));}},st.createElement($r,null))))}})),st.createElement(so,_t({},r,{title:m,collection:r.state.collections[1],renderIcon:function(){return st.createElement("div",{className:"DocSearch-Hit-icon"},st.createElement(to,null))},renderAction:function(e){var t=e.item,n=e.runDeleteTransition;return st.createElement("div",{className:"DocSearch-Hit-action"},st.createElement("button",{className:"DocSearch-Hit-action-button",title:h,type:"submit",onClick:function(e){e.preventDefault(),e.stopPropagation(),n((function(){r.favoriteSearches.remove(t),r.refresh();}));}},st.createElement($r,null)))}})))}var wo=["translations"],Eo=st.memo((function(e){var t=e.translations,n=void 0===t?{}:t,r=Et(e,wo);if("error"===r.state.status)return st.createElement(oo,{translations:null==n?void 0:n.errorScreen});var o=r.state.collections.some((function(e){return e.items.length>0}));return r.state.query?false===o?st.createElement(ao,_t({},r,{translations:null==n?void 0:n.noResultsScreen})):st.createElement(bo,r):st.createElement(Oo,_t({},r,{hasCollections:o,translations:null==n?void 0:n.startScreen}))}),(function(e,t){return "loading"===t.state.status||"stalled"===t.state.status})),jo=["translations"];function Po(e){var t=e.translations,n=void 0===t?{}:t,r=Et(e,jo),o=n.resetButtonTitle,i=void 0===o?"Clear the query":o,a=n.resetButtonAriaLabel,c=void 0===a?"Clear the query":a,u=n.cancelButtonText,l=void 0===u?"Cancel":u,s=n.cancelButtonAriaLabel,f=void 0===s?"Cancel":s,p=n.searchInputLabel,m=void 0===p?"Search":p,v=r.getFormProps({inputElement:r.inputRef.current}).onReset;return st.useEffect((function(){r.autoFocus&&r.inputRef.current&&r.inputRef.current.focus();}),[r.autoFocus,r.inputRef]),st.useEffect((function(){r.isFromSelection&&r.inputRef.current&&r.inputRef.current.select();}),[r.isFromSelection,r.inputRef]),st.createElement(st.Fragment,null,st.createElement("form",{className:"DocSearch-Form",onSubmit:function(e){e.preventDefault();},onReset:v},st.createElement("label",_t({className:"DocSearch-MagnifierLabel"},r.getLabelProps()),st.createElement(At,null),st.createElement("span",{className:"DocSearch-VisuallyHiddenForAccessibility"},m)),st.createElement("div",{className:"DocSearch-LoadingIndicator"},st.createElement(Jr,null)),st.createElement("input",_t({className:"DocSearch-Input",ref:r.inputRef},r.getInputProps({inputElement:r.inputRef.current,autoFocus:r.autoFocus,maxLength:64}))),st.createElement("button",{type:"reset",title:i,className:"DocSearch-Reset","aria-label":c,hidden:!r.state.query},st.createElement($r,null))),st.createElement("button",{className:"DocSearch-Cancel",type:"reset","aria-label":f,onClick:r.onClose},l))}var Io=["_highlightResult","_snippetResult"];function ko(e){var t=e.key,n=e.limit,r=void 0===n?5:n,o=function(e){return  false===function(){var e="__TEST_KEY__";try{return localStorage.setItem(e,""),localStorage.removeItem(e),!0}catch(e){return  false}}()?{setItem:function(){},getItem:function(){return []}}:{setItem:function(t){return window.localStorage.setItem(e,JSON.stringify(t))},getItem:function(){var t=window.localStorage.getItem(e);return t?JSON.parse(t):[]}}}(t),i=o.getItem().slice(0,r);return {add:function(e){var t=e;t._highlightResult,t._snippetResult;var n=Et(t,Io),a=i.findIndex((function(e){return e.objectID===n.objectID}));a>-1&&i.splice(a,1),i.unshift(n),i=i.slice(0,r),o.setItem(i);},remove:function(e){i=i.filter((function(t){return t.objectID!==e.objectID})),o.setItem(i);},getAll:function(){return i}}}function Do(e){var t,n="algolia-client-js-".concat(e.key);function r(){return void 0===t&&(t=e.localStorage||window.localStorage),t}function o(){return JSON.parse(r().getItem(n)||"{}")}function i(e){r().setItem(n,JSON.stringify(e));}return {get:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var n,r,a;return n=e.timeToLive?1e3*e.timeToLive:null,r=o(),i(a=Object.fromEntries(Object.entries(r).filter((function(e){return void 0!==It(e,2)[1].timestamp})))),n&&i(Object.fromEntries(Object.entries(a).filter((function(e){var t=It(e,2)[1],r=(new Date).getTime();return !(t.timestamp+n<r)})))),o()[JSON.stringify(t)]})).then((function(e){return Promise.all([e?e.value:n(),void 0!==e])})).then((function(e){var t=It(e,2),n=t[0],o=t[1];return Promise.all([n,o||r.miss(n)])})).then((function(e){return It(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var i=o();return i[JSON.stringify(e)]={timestamp:(new Date).getTime(),value:t},r().setItem(n,JSON.stringify(i)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=o();delete t[JSON.stringify(e)],r().setItem(n,JSON.stringify(t));}))},clear:function(){return Promise.resolve().then((function(){r().removeItem(n);}))}}}function Co(e){var t=kt(e.caches),n=t.shift();return void 0===n?{get:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return t().then((function(e){return Promise.all([e,n.miss(e)])})).then((function(e){return It(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return n.get(e,r,o).catch((function(){return Co({caches:t}).get(e,r,o)}))},set:function(e,r){return n.set(e,r).catch((function(){return Co({caches:t}).set(e,r)}))},delete:function(e){return n.delete(e).catch((function(){return Co({caches:t}).delete(e)}))},clear:function(){return n.clear().catch((function(){return Co({caches:t}).clear()}))}}}function xo(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:true},t={};return {get:function(n,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},i=JSON.stringify(n);if(i in t)return Promise.resolve(e.serializable?JSON.parse(t[i]):t[i]);var a=r();return a.then((function(e){return o.miss(e)})).then((function(){return a}))},set:function(n,r){return t[JSON.stringify(n)]=e.serializable?JSON.stringify(r):r,Promise.resolve(r)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function Ao(e){var t=e.algoliaAgents,n=e.client,r=e.version,o=function(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var n="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return  -1===t.value.indexOf(n)&&(t.value="".concat(t.value).concat(n)),t}};return t}(r).add({segment:n,version:r});return t.forEach((function(e){return o.add(e)})),o}var No=12e4;function To(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"up",n=Date.now();return wt(wt({},e),{},{status:t,lastUpdate:n,isUp:function(){return "up"===t||Date.now()-n>No},isTimedOut:function(){return "timed out"===t&&Date.now()-n<=No}})}var Ro=function(){function e(t,n){var r;return ht(this,e),yt(r=vt(this,e,[t]),"name","AlgoliaError"),n&&(r.name=n),r}return bt(e,Ct(Error)),dt(e)}(),Lo=function(){function e(t,n,r){var o;return ht(this,e),yt(o=vt(this,e,[t,r]),"stackTrace",void 0),o.stackTrace=n,o}return bt(e,Ro),dt(e)}(),qo=function(){function e(t){return ht(this,e),vt(this,e,["Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.",t,"RetryError"])}return bt(e,Lo),dt(e)}(),Mo=function(){function e(t,n,r){var o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ApiError";return ht(this,e),yt(o=vt(this,e,[t,r,i]),"status",void 0),o.status=n,o}return bt(e,Lo),dt(e)}(),Ho=function(){function e(t,n){var r;return ht(this,e),yt(r=vt(this,e,[t,"DeserializationError"]),"response",void 0),r.response=n,r}return bt(e,Ro),dt(e)}(),Uo=function(){function e(t,n,r,o){var i;return ht(this,e),yt(i=vt(this,e,[t,n,o,"DetailedApiError"]),"error",void 0),i.error=r,i}return bt(e,Mo),dt(e)}();function Fo(e,t,n){var r,o=(r=n,Object.keys(r).filter((function(e){return void 0!==r[e]})).sort().map((function(e){return "".concat(e,"=").concat(encodeURIComponent("[object Array]"===Object.prototype.toString.call(r[e])?r[e].join(","):r[e]).replace(/\+/g,"%20"))})).join("&")),i="".concat(e.protocol,"://").concat(e.url).concat(e.port?":".concat(e.port):"","/").concat("/"===t.charAt(0)?t.substring(1):t);return o.length&&(i+="?".concat(o)),i}function Bo(e,t){if("GET"!==e.method&&(void 0!==e.data||void 0!==t.data)){var n=Array.isArray(e.data)?e.data:wt(wt({},e.data),t.data);return JSON.stringify(n)}}function Vo(e,t,n){var r=wt(wt(wt({Accept:"application/json"},e),t),n),o={};return Object.keys(r).forEach((function(e){var t=r[e];o[e.toLowerCase()]=t;})),o}function Ko(e){try{return JSON.parse(e.content)}catch(t){throw new Ho(t.message,e)}}function Wo(e,t){var n=e.content,r=e.status;try{var o=JSON.parse(n);return "error"in o?new Uo(o.message,r,o.error,t):new Mo(o.message,r,t)}catch(e){}return new Mo(n,r,t)}function zo(e){return e.map((function(e){return Jo(e)}))}function Jo(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return wt(wt({},e),{},{request:wt(wt({},e.request),{},{headers:wt(wt({},e.request.headers),t)})})}var Qo=["appId","apiKey","authMode","algoliaAgents"],$o=["params"],Zo="5.19.0";function Go(e){return [{url:"".concat(e,"-dsn.algolia.net"),accept:"read",protocol:"https"},{url:"".concat(e,".algolia.net"),accept:"write",protocol:"https"}].concat(function(e){for(var t=e,n=e.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),o=e[n];t[n]=e[r],t[r]=o;}return t}([{url:"".concat(e,"-1.algolianet.com"),accept:"readWrite",protocol:"https"},{url:"".concat(e,"-2.algolianet.com"),accept:"readWrite",protocol:"https"},{url:"".concat(e,"-3.algolianet.com"),accept:"readWrite",protocol:"https"}]))}var Yo="3.9.0";var Xo=["footer","searchBox"];function ei(e){var t=e.appId,n=e.apiKey,r=e.indexName,o=e.placeholder,i=void 0===o?"Search docs":o,a=e.searchParameters,c=e.maxResultsPerGroup,u=e.onClose,l=void 0===u?ho:u,s=e.transformItems,f=void 0===s?mo:s,p=e.hitComponent,m=void 0===p?zr:p,v=e.resultsFooterComponent,h=void 0===v?function(){return null}:v,d=e.navigator,y=e.initialScrollY,_=void 0===y?0:y,g=e.transformSearchClient,b=void 0===g?mo:g,S=e.disableUserPersonalization,O=void 0!==S&&S,w=e.initialQuery,E=void 0===w?"":w,j=e.translations,P=void 0===j?{}:j,I=e.getMissingResultsUrl,k=e.insights,D=void 0!==k&&k,C=P.footer,x=P.searchBox,A=Et(P,Xo),N=It(st.useState({query:"",collections:[],completion:null,context:{},isOpen:false,activeItemId:null,status:"idle"}),2),T=N[0],R=N[1],L=st.useRef(null),q=st.useRef(null),M=st.useRef(null),H=st.useRef(null),U=st.useRef(null),F=st.useRef(10),B=st.useRef("undefined"!=typeof window?window.getSelection().toString().slice(0,64):"").current,V=st.useRef(E||B).current,K=function(e,t,n){return st.useMemo((function(){var r=function(e,t){if(!e||"string"!=typeof e)throw new Error("`appId` is missing.");if(!t||"string"!=typeof t)throw new Error("`apiKey` is missing.");return function(e){var t=e.appId,n=e.apiKey,r=e.authMode,o=e.algoliaAgents,i=Et(e,Qo),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"WithinHeaders",r={"x-algolia-api-key":t,"x-algolia-application-id":e};return {headers:function(){return "WithinHeaders"===n?r:{}},queryParameters:function(){return "WithinQueryParameters"===n?r:{}}}}(t,n,r),c=function(e){var t=e.hosts,n=e.hostsCache,r=e.baseHeaders,o=e.logger,i=e.baseQueryParameters,a=e.algoliaAgent,c=e.timeouts,u=e.requester,l=e.requestsCache,s=e.responsesCache;function f(e){return p.apply(this,arguments)}function p(){return (p=mt(jt().mark((function e(t){var r,o,i,a,c;return jt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return n.get(e,(function(){return Promise.resolve(To(e))}))})));case 2:return r=e.sent,o=r.filter((function(e){return e.isUp()})),i=r.filter((function(e){return e.isTimedOut()})),a=[].concat(kt(o),kt(i)),c=a.length>0?a:t,e.abrupt("return",{hosts:c,getTimeout:function(e,t){return (0===i.length&&0===e?1:i.length+3+e)*t}});case 8:case "end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return v.apply(this,arguments)}function v(){return v=mt(jt().mark((function e(l,s){var p,m,v,h,d,y,_,g,b,S,O,w,E,j=arguments;return jt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=!(j.length>2&&void 0!==j[2])||j[2],m=[],v=Bo(l,s),h=Vo(r,l.headers,s.headers),d="GET"===l.method?wt(wt({},l.data),s.data):{},y=wt(wt(wt({},i),l.queryParameters),d),a.value&&(y["x-algolia-agent"]=a.value),s&&s.queryParameters)for(_=0,g=Object.keys(s.queryParameters);_<g.length;_++)b=g[_],s.queryParameters[b]&&"[object Object]"!==Object.prototype.toString.call(s.queryParameters[b])?y[b]=s.queryParameters[b].toString():y[b]=s.queryParameters[b];return S=0,O=function(){var e=mt(jt().mark((function e(t,r){var i,a,f,d,_,g;return jt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(i=t.pop())){e.next=3;break}throw new qo(zo(m));case 3:return a=wt(wt({},c),s.timeouts),f={data:v,headers:h,method:l.method,url:Fo(i,l.path,y),connectTimeout:r(S,a.connect),responseTimeout:r(S,p?a.read:a.write)},d=function(e){var n={request:f,response:e,host:i,triesLeft:t.length};return m.push(n),n},e.next=8,u.send(f);case 8:if(w=(b=_=e.sent).isTimedOut,E=b.status,!(w||function(e){return !e.isTimedOut&&!~~e.status}({isTimedOut:w,status:E})||2!=~~(E/100)&&4!=~~(E/100))){e.next=16;break}return g=d(_),_.isTimedOut&&S++,o.info("Retryable failure",Jo(g)),e.next=15,n.set(i,To(i,_.isTimedOut?"timed out":"down"));case 15:return e.abrupt("return",O(t,r));case 16:if(2!=~~(_.status/100)){e.next=18;break}return e.abrupt("return",Ko(_));case 18:throw d(_),Wo(_,m);case 20:case "end":return e.stop()}var b,w,E;}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=t.filter((function(e){return "readWrite"===e.accept||(p?"read"===e.accept:"write"===e.accept)})),e.next=13,f(w);case 13:return E=e.sent,e.abrupt("return",O(kt(E.hosts).reverse(),E.getTimeout));case 15:case "end":return e.stop()}}),e)}))),v.apply(this,arguments)}return {hostsCache:n,requester:u,timeouts:c,logger:o,algoliaAgent:a,baseHeaders:r,baseQueryParameters:i,hosts:t,request:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.useReadTransporter||"GET"===e.method;if(!n)return m(e,t,n);var o=function(){return m(e,t)};if(true!==(t.cacheable||e.cacheable))return o();var a={request:e,requestOptions:t,transporter:{queryParameters:i,headers:r}};return s.get(a,(function(){return l.get(a,(function(){return l.set(a,o()).then((function(e){return Promise.all([l.delete(a),e])}),(function(e){return Promise.all([l.delete(a),Promise.reject(e)])})).then((function(e){var t=It(e,2);return t[0],t[1]}))}))}),{miss:function(e){return s.set(a,e)}})},requestsCache:l,responsesCache:s}}(wt(wt({hosts:Go(t)},i),{},{algoliaAgent:Ao({algoliaAgents:o,client:"Lite",version:Zo}),baseHeaders:wt(wt({"content-type":"text/plain"},a.headers()),i.baseHeaders),baseQueryParameters:wt(wt({},a.queryParameters()),i.baseQueryParameters)}));return {transporter:c,appId:t,apiKey:n,clearCache:function(){return Promise.all([c.requestsCache.clear(),c.responsesCache.clear()]).then((function(){}))},get _ua(){return c.algoliaAgent.value},addAlgoliaAgent:function(e,t){c.algoliaAgent.add({segment:e,version:t});},setClientApiKey:function(e){var t=e.apiKey;r&&"WithinHeaders"!==r?c.baseQueryParameters["x-algolia-api-key"]=t:c.baseHeaders["x-algolia-api-key"]=t;},searchForHits:function(e,t){return this.search(e,t)},searchForFacets:function(e,t){return this.search(e,t)},customPost:function(e,t){var n=e.path,r=e.parameters,o=e.body;if(!n)throw new Error("Parameter `path` is required when calling `customPost`.");var i={method:"POST",path:"/{path}".replace("{path}",n),queryParameters:r||{},headers:{},data:o||{}};return c.request(i,t)},getRecommendations:function(e,t){if(e&&Array.isArray(e)&&(e={requests:e}),!e)throw new Error("Parameter `getRecommendationsParams` is required when calling `getRecommendations`.");if(!e.requests)throw new Error("Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.");var n={method:"POST",path:"/1/indexes/*/recommendations",queryParameters:{},headers:{},data:e,useReadTransporter:true,cacheable:true};return c.request(n,t)},search:function(e,t){if(e&&Array.isArray(e)){var n={requests:e.map((function(e){var t=e.params,n=Et(e,$o);return "facet"===n.type?wt(wt(wt({},n),t),{},{type:"facet"}):wt(wt(wt({},n),t),{},{facet:void 0,maxFacetHits:void 0,facetQuery:void 0})}))};e=n;}if(!e)throw new Error("Parameter `searchMethodParams` is required when calling `search`.");if(!e.requests)throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");var r={method:"POST",path:"/1/indexes/*/queries",queryParameters:{},headers:{},data:e,useReadTransporter:true,cacheable:true};return c.request(r,t)}}}(wt({appId:e,apiKey:t,timeouts:{connect:1e3,read:2e3,write:3e4},logger:{debug:function(e,t){return Promise.resolve()},info:function(e,t){return Promise.resolve()},error:function(e,t){return Promise.resolve()}},requester:{send:function(e){return new Promise((function(t){var n=new XMLHttpRequest;n.open(e.method,e.url,true),Object.keys(e.headers).forEach((function(t){return n.setRequestHeader(t,e.headers[t])}));var r,o=function(e,r){return setTimeout((function(){n.abort(),t({status:0,content:r,isTimedOut:true});}),e)},i=o(e.connectTimeout,"Connection timeout");n.onreadystatechange=function(){n.readyState>n.OPENED&&void 0===r&&(clearTimeout(i),r=o(e.responseTimeout,"Socket timeout"));},n.onerror=function(){0===n.status&&(clearTimeout(i),clearTimeout(r),t({content:n.responseText||"Network request failed",status:n.status,isTimedOut:false}));},n.onload=function(){clearTimeout(i),clearTimeout(r),t({content:n.responseText,status:n.status,isTimedOut:false});},n.send(e.data);}))}},algoliaAgents:[{segment:"Browser"}],authMode:"WithinQueryParameters",responsesCache:xo(),requestsCache:xo({serializable:false}),hostsCache:Co({caches:[Do({key:"".concat(Zo,"-").concat(e)}),xo()]})},void 0))}(e,t);return r.addAlgoliaAgent("docsearch",Yo),false===/docsearch.js \(.*\)/.test(r.transporter.algoliaAgent.value)&&r.addAlgoliaAgent("docsearch-react",Yo),n(r)}),[e,t,n])}(t,n,b),W=st.useRef(ko({key:"__DOCSEARCH_FAVORITE_SEARCHES__".concat(r),limit:10})).current,z=st.useRef(ko({key:"__DOCSEARCH_RECENT_SEARCHES__".concat(r),limit:0===W.getAll().length?7:4})).current,J=st.useCallback((function(e){if(!O){var t="content"===e.type?e.__docsearch_parent:e;t&&-1===W.getAll().findIndex((function(e){return e.objectID===t.objectID}))&&z.add(t);}}),[W,z,O]),Q=st.useCallback((function(e){if(T.context.algoliaInsightsPlugin&&e.__autocomplete_id){var t=e,n={eventName:"Item Selected",index:t.__autocomplete_indexName,items:[t],positions:[e.__autocomplete_id],queryID:t.__autocomplete_queryID};T.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n);}}),[T.context.algoliaInsightsPlugin]),$=st.useMemo((function(){return Br({id:"docsearch",defaultActiveItemId:0,placeholder:i,openOnFocus:true,initialState:{query:V,context:{searchSuggestions:[]}},insights:D,navigator:d,onStateChange:function(e){R(e.state);},getSources:function(e){var o=e.query,i=e.state,u=e.setContext,s=e.setStatus;if(!o)return O?[]:[{sourceId:"recentSearches",onSelect:function(e){var t=e.item,n=e.event;J(t),vo(n)||l();},getItemUrl:function(e){return e.item.url},getItems:function(){return z.getAll()}},{sourceId:"favoriteSearches",onSelect:function(e){var t=e.item,n=e.event;J(t),vo(n)||l();},getItemUrl:function(e){return e.item.url},getItems:function(){return W.getAll()}}];var p=Boolean(D);return K.search({requests:[wt({query:o,indexName:r,attributesToRetrieve:["hierarchy.lvl0","hierarchy.lvl1","hierarchy.lvl2","hierarchy.lvl3","hierarchy.lvl4","hierarchy.lvl5","hierarchy.lvl6","content","type","url"],attributesToSnippet:["hierarchy.lvl1:".concat(F.current),"hierarchy.lvl2:".concat(F.current),"hierarchy.lvl3:".concat(F.current),"hierarchy.lvl4:".concat(F.current),"hierarchy.lvl5:".concat(F.current),"hierarchy.lvl6:".concat(F.current),"content:".concat(F.current)],snippetEllipsisText:"…",highlightPreTag:"<mark>",highlightPostTag:"</mark>",hitsPerPage:20,clickAnalytics:p},a)]}).catch((function(e){throw "RetryError"===e.name&&s("error"),e})).then((function(e){var o=e.results[0],a=o.hits,s=o.nbHits,m=po(a,(function(e){return go(e)}),c);i.context.searchSuggestions.length<Object.keys(m).length&&u({searchSuggestions:Object.keys(m)}),u({nbHits:s});var v={};return p&&(v={__autocomplete_indexName:r,__autocomplete_queryID:o.queryID,__autocomplete_algoliaCredentials:{appId:t,apiKey:n}}),Object.values(m).map((function(e,t){return {sourceId:"hits".concat(t),onSelect:function(e){var t=e.item,n=e.event;J(t),vo(n)||l();},getItemUrl:function(e){return e.item.url},getItems:function(){return Object.values(po(e,(function(e){return e.hierarchy.lvl1}),c)).map(f).map((function(e){return e.map((function(t){var n=null,r=e.find((function(e){return "lvl1"===e.type&&e.hierarchy.lvl1===t.hierarchy.lvl1}));return "lvl1"!==t.type&&r&&(n=r),wt(wt({},t),{},{__docsearch_parent:n},v)}))})).flat()}}}))}))}})}),[r,a,c,K,l,z,W,J,V,i,d,f,O,D,t,n]),Z=$.getEnvironmentProps,G=$.getRootProps,Y=$.refresh;return function(e){var t=e.getEnvironmentProps,n=e.panelElement,r=e.formElement,o=e.inputElement;st.useEffect((function(){if(n&&r&&o){var e=t({panelElement:n,formElement:r,inputElement:o}),i=e.onTouchStart,a=e.onTouchMove;return window.addEventListener("touchstart",i),window.addEventListener("touchmove",a),function(){window.removeEventListener("touchstart",i),window.removeEventListener("touchmove",a);}}}),[t,n,r,o]);}({getEnvironmentProps:Z,panelElement:H.current,formElement:M.current,inputElement:U.current}),function(e){var t=e.container;st.useEffect((function(){if(t){var e=t.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),n=e[0],r=e[e.length-1];return t.addEventListener("keydown",o),function(){t.removeEventListener("keydown",o);}}function o(e){"Tab"===e.key&&(e.shiftKey?document.activeElement===n&&(e.preventDefault(),r.focus()):document.activeElement===r&&(e.preventDefault(),n.focus()));}}),[t]);}({container:L.current}),st.useEffect((function(){return document.body.classList.add("DocSearch--active"),function(){var e,t;document.body.classList.remove("DocSearch--active"),null===(e=(t=window).scrollTo)||void 0===e||e.call(t,0,_);}}),[]),st.useLayoutEffect((function(){var e=window.innerWidth-document.body.clientWidth;return document.body.style.marginRight="".concat(e,"px"),function(){document.body.style.marginRight="0px";}}),[]),st.useEffect((function(){window.matchMedia("(max-width: 768px)").matches&&(F.current=5);}),[]),st.useEffect((function(){H.current&&(H.current.scrollTop=0);}),[T.query]),st.useEffect((function(){V.length>0&&(Y(),U.current&&U.current.focus());}),[V,Y]),st.useEffect((function(){function e(){if(q.current){var e=.01*window.innerHeight;q.current.style.setProperty("--docsearch-vh","".concat(e,"px"));}}return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e);}}),[]),st.createElement("div",_t({ref:L},G({"aria-expanded":true}),{className:["DocSearch","DocSearch-Container","stalled"===T.status&&"DocSearch-Container--Stalled","error"===T.status&&"DocSearch-Container--Errored"].filter(Boolean).join(" "),role:"button",tabIndex:0,onMouseDown:function(e){e.target===e.currentTarget&&l();}}),st.createElement("div",{className:"DocSearch-Modal",ref:q},st.createElement("header",{className:"DocSearch-SearchBar",ref:M},st.createElement(Po,_t({},$,{state:T,autoFocus:0===V.length,inputRef:U,isFromSelection:Boolean(V)&&V===B,translations:x,onClose:l}))),st.createElement("div",{className:"DocSearch-Dropdown",ref:H},st.createElement(Eo,_t({},$,{indexName:r,state:T,hitComponent:m,resultsFooterComponent:h,disableUserPersonalization:O,recentSearches:z,favoriteSearches:W,inputRef:U,translations:A,getMissingResultsUrl:I,onItemClick:function(e,t){Q(e),J(e),vo(t)||l();}}))),st.createElement("footer",{className:"DocSearch-Footer"},st.createElement(Wr,{translations:C}))))}function ti(e){var t,n,r=st.useRef(null),o=It(st.useState(false),2),i=o[0],a=o[1],c=It(st.useState((null==e?void 0:e.initialQuery)||void 0),2),u=c[0],l=c[1],s=st.useCallback((function(){a(true);}),[a]),f=st.useCallback((function(){a(false),l(null==e?void 0:e.initialQuery);}),[a,e.initialQuery]);return function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,o=e.onInput,i=e.searchButtonRef;st.useEffect((function(){function e(e){var a;if("Escape"===e.code&&t||"k"===(null===(a=e.key)||void 0===a?void 0:a.toLowerCase())&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)return e.preventDefault(),void(t?r():document.body.classList.contains("DocSearch--active")||n());i&&i.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e);}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e);}}),[t,n,r,o,i]);}({isOpen:i,onOpen:s,onClose:f,onInput:st.useCallback((function(e){a(true),l(e.key);}),[a,l]),searchButtonRef:r}),st.createElement(st.Fragment,null,st.createElement(Rt,{ref:r,translations:null==e||null===(t=e.translations)||void 0===t?void 0:t.button,onClick:s}),i&&We(st.createElement(ei,_t({},e,{initialScrollY:window.scrollY,initialQuery:u,translations:null==e||null===(n=e.translations)||void 0===n?void 0:n.modal,onClose:f})),document.body))}function ni(t){Ye(st.createElement(ti,e({},t,{transformSearchClient:function(e){return e.addAlgoliaAgent("docsearch.js",Yo),t.transformSearchClient?t.transformSearchClient(e):e}})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return "string"==typeof e?t.document.querySelector(e):e}(t.container,t.environment));}

function DocSearch() {
  reactExports.useEffect(() => {
    ni({
      appId: "38BPOKYOZ2",
      apiKey: "aa152d345260f94e9c0b177ed5437c9e",
      indexName: "sweetalert2",
      container: "#docsearch"
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "docsearch" });
}

window.Swal = Swal;
const ThemeSelector = () => {
  const [currentTheme, setCurrentTheme] = reactExports.useState("light");
  reactExports.useEffect(() => {
    window.Swal = window.Swal.mixin({ theme: currentTheme });
  }, [currentTheme]);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "theme-selector", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
    "Theme:",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        autoComplete: "off",
        value: currentTheme,
        onChange: (event) => {
          setCurrentTheme(event.target.value);
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "light", children: "Default (light)" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "dark", children: "Dark" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "auto", children: "Auto" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "minimal", children: "Minimal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "borderless", children: "Borderless" })
        ]
      }
    )
  ] }) });
};

function Partners() {
  const partners = [
    // Hostinger
    {
      link: "https://hostinger.com?REFERRALCODE=BKZHOSTINDAB",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
        "Get 20% discount ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nowrap", children: " on Hostiger Web Hosting!" })
      ] }),
      description: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Everything you need to create a website. ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Free domain. Free website migration. Free SSL."
      ] }),
      imageUrl: "/images/hostinger.png"
    },
    // NordVPN
    {
      link: "https://go.nordvpn.net/aff_c?offer_id=15&aff_id=122472&url_id=902",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
        "Get 75% discount ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nowrap", children: " on NordVPN's 2-year plan!" })
      ] }),
      description: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "A truly global VPN server network.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Cybersecurity kit built for every day."
      ] }),
      imageUrl: "/images/nordvpn.png"
    },
    // NordPass
    {
      link: "https://go.nordpass.io/aff_c?offer_id=488&aff_id=122472&url_id=9356",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
        "Get 50% discount ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nowrap", children: " on NordPass Premium!" })
      ] }),
      description: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "NordPass is a leading password manager.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Trusted by millions."
      ] }),
      imageUrl: "/images/nordpass.png"
    },
    // CareerFoundry
    {
      link: "https://careerfoundry.com/en/referral_registrations/new?referral=4rARax01",
      title: /* @__PURE__ */ jsxRuntimeExports.jsxs("b", { children: [
        "Get 10% discount ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "nowrap", children: " on CareerFoundry courses!" })
      ] }),
      description: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Career-change programs with a job guarantee.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Launch a career in tech that lasts 🚀"
      ] }),
      imageUrl: "/images/careerfoundry.png"
    },
    // Coursera (via Impact)
    {
      link: "https://imp.i384100.net/kOJnXz",
      title: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Learn web development on Coursera!" }),
      description: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Flexible learning paths for your goals.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Unlock your potential now! 🚀"
      ] }),
      imageUrl: "/images/coursera.png"
    },
    // SentryPC (via Impact)
    {
      link: "https://sentrypc.7eer.net/e1ajMj",
      title: /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: "Monitor. Filter. Control." }),
      description: /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
        "Know everything your users do on their PC",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "and mobile devices on the Internet."
      ] }),
      imageUrl: "/images/sentrypc.png"
    }
  ];
  const partner = partners[Math.floor(Math.random() * partners.length)];
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "partner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: partner.link, target: "_blank", rel: "noreferrer noopener", tabIndex: -1, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: partner.imageUrl, alt: "" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("b", { children: partner.title }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "description", children: partner.description })
  ] }) });
}

const sidebarUrl = "https://github.com/sweetalert2/sweetalert2.github.io/blob/main/src/utils/sidebar.tsx";
function Nav({
  recipeGallery = false,
  showBackToRecipeGalleryLink = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bars", id: "show-sidebar", onClick: () => showSidebar() }),
    recipeGallery ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "recipe-gallery-top-nav", children: [
        showBackToRecipeGalleryLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/recipe-gallery/", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-arrow-left" }),
          " Back to Recipe Gallery"
        ] }) : null,
        /* @__PURE__ */ jsxRuntimeExports.jsx(DocSearch, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Partners, {})
    ] }) : null
  ] });
}
function Sidebar() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "mobile-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#examples", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Examples" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/recipe-gallery/", className: "recipe-gallery", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Recipe Gallery" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#download", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Installation" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#usage", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Usage" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#frameworks-integrations", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Integrations" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#configuration", className: "mobile-hidden", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Configuration Params" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#declarative-templates", className: "mobile-hidden", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Declarative Templates" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#handling-buttons", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Handling Buttons" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#handling-dismissals", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Handling Dismissals" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#icons", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Icons" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#input-types", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Input Types" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#methods", className: "mobile-hidden", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Methods" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#sponsors", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sponsors" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#nsfw-sponsors", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "NSFW Sponsors" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeSelector, {})
  ] });
}

const functions = {
  // Top of page
  normalAlert() {
    alert("You clicked the button!");
  },
  sweetAlert() {
    window.Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  },
  // Examples section
  basicMessage() {
    window.Swal.fire("SweetAlert2 is working!");
  },
  titleText() {
    window.Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
  },
  errorType() {
    window.Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  },
  longText() {
    window.Swal.fire({
      imageUrl: "https://placeholder.pics/svg/300x1500",
      imageHeight: 1500,
      imageAlt: "A tall image"
    });
  },
  draggableModal() {
    window.Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true
    });
  },
  customHtml() {
    window.Swal.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html: `
        You can use <b>bold text</b>,
        <a href="#" autofocus>links</a>,
        and other HTML tags
      `,
      showCloseButton: true,
      showCancelButton: true,
      focusConfirm: false,
      confirmButtonText: `
        <i class="fa fa-thumbs-up"></i> Great!
      `,
      confirmButtonAriaLabel: "Thumbs up, great!",
      cancelButtonText: `
        <i class="fa fa-thumbs-down"></i>
      `,
      cancelButtonAriaLabel: "Thumbs down"
    });
  },
  threeButtons() {
    window.Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /*! Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        window.Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        window.Swal.fire("Changes are not saved", "", "info");
      }
    });
  },
  customPosition() {
    window.Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  },
  customAnimation() {
    window.Swal.fire({
      title: "Custom animation with Animate.css",
      showClass: {
        popup: `
          animate__animated
          animate__fadeInUp
          animate__faster
        `
      },
      hideClass: {
        popup: `
          animate__animated
          animate__fadeOutDown
          animate__faster
        `
      }
    });
  },
  warningConfirm() {
    window.Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        window.Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  },
  handleDismiss() {
    const swalWithBootstrapButtons = window.Swal.mixin({
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
        swalWithBootstrapButtons.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      } else if (
        /*! Read more about handling dismissals below */
        result.dismiss === window.Swal.DismissReason.cancel
      ) {
        swalWithBootstrapButtons.fire({
          title: "Cancelled",
          text: "Your imaginary file is safe :)",
          icon: "error"
        });
      }
    });
  },
  customImage() {
    window.Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  },
  customWidth() {
    window.Swal.fire({
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
    window.Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2e3,
      timerProgressBar: true,
      didOpen: () => {
        window.Swal.showLoading();
        const timer = window.Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${window.Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /*! Read more about handling dismissals below */
      if (result.dismiss === window.Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  },
  rtl() {
    window.Swal.fire({
      title: "هل تريد الاستمرار؟",
      icon: "question",
      iconHtml: "؟",
      target: document.getElementById("rtl-container"),
      confirmButtonText: "نعم",
      cancelButtonText: "لا",
      showCancelButton: true,
      showCloseButton: true
    });
  },
  ajaxRequest() {
    window.Swal.fire({
      title: "Submit your Github username",
      input: "text",
      inputAttributes: {
        autocapitalize: "off"
      },
      showCancelButton: true,
      confirmButtonText: "Look up",
      showLoaderOnConfirm: true,
      preConfirm: async (login) => {
        try {
          const githubUrl = `
            https://api.github.com/users/${login}
          `;
          const response = await fetch(githubUrl);
          if (!response.ok) {
            return window.Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `);
          }
          return response.json();
        } catch (error) {
          window.Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !window.Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        window.Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  },
  // Configuration section
  mixin() {
    const Toast = window.Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3e3,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = window.Swal.stopTimer;
        toast.onmouseleave = window.Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully"
    });
  },
  // Declarative templates
  declarativeTemplate() {
    window.Swal.fire({
      template: "#my-template"
    });
  },
  // Declarative triggering
  declarativeTriggering() {
    window.Swal.bindClickHandler();
    /*! Bind a mixin to a click handler */
    window.Swal.mixin({
      toast: true
    }).bindClickHandler("data-swal-toast-template");
  },
  // Input Types section
  async textInput() {
    const ipAPI = "//api.ipify.org?format=json";
    const response = await fetch(ipAPI);
    const data = await response.json();
    const inputValue = data.ip;
    const { value: ipAddress } = await window.Swal.fire({
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
      window.Swal.fire(`Your IP address is ${ipAddress}`);
    }
  },
  async emailInput() {
    const { value: email } = await window.Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address"
    });
    if (email) {
      window.Swal.fire(`Entered email: ${email}`);
    }
  },
  async urlInput() {
    const { value: url } = await window.Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL"
    });
    if (url) {
      window.Swal.fire(`Entered URL: ${url}`);
    }
  },
  async passwordInput() {
    const { value: password } = await window.Swal.fire({
      title: "Enter your password",
      input: "password",
      inputLabel: "Password",
      inputPlaceholder: "Enter your password",
      inputAttributes: {
        maxlength: "10",
        autocapitalize: "off",
        autocorrect: "off"
      }
    });
    if (password) {
      window.Swal.fire(`Entered password: ${password}`);
    }
  },
  async textareaInput() {
    const { value: text } = await window.Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    });
    if (text) {
      window.Swal.fire(text);
    }
  },
  async selectInput() {
    const { value: fruit } = await window.Swal.fire({
      title: "Select field validation",
      input: "select",
      inputOptions: {
        Fruits: {
          apples: "Apples",
          bananas: "Bananas",
          grapes: "Grapes",
          oranges: "Oranges"
        },
        Vegetables: {
          potato: "Potato",
          broccoli: "Broccoli",
          carrot: "Carrot"
        },
        icecream: "Ice cream"
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
      window.Swal.fire(`You selected: ${fruit}`);
    }
  },
  async radioInput() {
    /*! inputOptions can be an object or Promise */
    const inputOptions = new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          "#ff0000": "Red",
          "#00ff00": "Green",
          "#0000ff": "Blue"
        });
      }, 1e3);
    });
    const { value: color } = await window.Swal.fire({
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
      window.Swal.fire({ html: `You selected: ${color}` });
    }
  },
  async checkboxInput() {
    const { value: accept } = await window.Swal.fire({
      title: "Terms and conditions",
      input: "checkbox",
      inputValue: 1,
      inputPlaceholder: `
        I agree with the terms and conditions
      `,
      confirmButtonText: `
        Continue&nbsp;<i class="fa fa-arrow-right"></i>
      `,
      inputValidator: (result) => {
        return !result && "You need to agree with T&C";
      }
    });
    if (accept) {
      window.Swal.fire("You agreed with T&C :)");
    }
  },
  async dateInput() {
    const { value: date } = await window.Swal.fire({
      title: "select departure date",
      input: "date",
      didOpen: () => {
        const today = (/* @__PURE__ */ new Date()).toISOString();
        window.Swal.getInput().min = today.split("T")[0];
      }
    });
    if (date) {
      window.Swal.fire("Departure date", date);
    }
  },
  async fileInput() {
    const { value: file } = await window.Swal.fire({
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
        window.Swal.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture"
        });
      };
      reader.readAsDataURL(file);
    }
  },
  rangeInput() {
    window.Swal.fire({
      title: "How old are you?",
      icon: "question",
      input: "range",
      inputLabel: "Your age",
      inputAttributes: {
        min: "8",
        max: "120",
        step: "1"
      },
      inputValue: 25
    });
  },
  async multipleInputs() {
    const { value: formValues } = await window.Swal.fire({
      title: "Multiple inputs",
      html: `
        <input id="swal-input1" class="swal2-input">
        <input id="swal-input2" class="swal2-input">
      `,
      focusConfirm: false,
      preConfirm: () => {
        return [
          document.getElementById("swal-input1").value,
          document.getElementById("swal-input2").value
        ];
      }
    });
    if (formValues) {
      window.Swal.fire(JSON.stringify(formValues));
    }
  }
};

const functionStrings = {};
Object.entries(functions).forEach(([id, fn]) => {
  functionStrings[id] = String(fn).replace(/window\.Swal/g, "Swal").replace(/^.*\n/, "").replace(/}$/, "").replace(/(^|\n) {4}/g, "$1").replace(/.*rtl-container.*\n/, "").replace(/(\d)e3/g, "$1000").replace(/\/\*!/g, "/*").replace(/\/\* @__PURE__ \*\/ /g, "").replace(/\\u([\d\w]{4})/gi, function(_, grp) {
    return String.fromCharCode(parseInt(grp, 16));
  }).trim();
});

const examples = Object.keys(functions).reduce((acc, id) => {
  acc[id] = {
    id,
    fn: functions[id],
    fnString: functionStrings[id]
  };
  return acc;
}, {});

export { DocSearch as D, Nav as N, Partners as P, ReactDOM as R, Swal as S, React as a, examples as e, getDefaultExportFromCjs as g, jsxRuntimeExports as j, reactExports as r };
