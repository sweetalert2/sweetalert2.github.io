true&&(function polyfill() {
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

var reactJsxRuntime_production_min = {};

var react = {exports: {}};

var react_production_min = {};

/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReact_production_min;

function requireReact_production_min () {
	if (hasRequiredReact_production_min) return react_production_min;
	hasRequiredReact_production_min = 1;
var l=Symbol.for("react.element"),n=Symbol.for("react.portal"),p=Symbol.for("react.fragment"),q=Symbol.for("react.strict_mode"),r=Symbol.for("react.profiler"),t=Symbol.for("react.provider"),u=Symbol.for("react.context"),v=Symbol.for("react.forward_ref"),w=Symbol.for("react.suspense"),x=Symbol.for("react.memo"),y=Symbol.for("react.lazy"),z=Symbol.iterator;function A(a){if(null===a||"object"!==typeof a)return null;a=z&&a[z]||a["@@iterator"];return "function"===typeof a?a:null}
	var B={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C=Object.assign,D={};function E(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}E.prototype.isReactComponent={};
	E.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F(){}F.prototype=E.prototype;function G(a,b,e){this.props=a;this.context=b;this.refs=D;this.updater=e||B;}var H=G.prototype=new F;
	H.constructor=G;C(H,E.prototype);H.isPureReactComponent=!0;var I=Array.isArray,J=Object.prototype.hasOwnProperty,K={current:null},L={key:!0,ref:!0,__self:!0,__source:!0};
	function M(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J.call(b,d)&&!L.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l,type:a,key:k,ref:h,props:c,_owner:K.current}}
	function N(a,b){return {$$typeof:l,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O(a){return "object"===typeof a&&null!==a&&a.$$typeof===l}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P=/\/+/g;function Q(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
	function R(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l:case n:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q(h,0):d,I(c)?(e="",null!=a&&(e=a.replace(P,"$&/")+"/"),R(c,b,e,"",function(a){return a})):null!=c&&(O(c)&&(c=N(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I(a))for(var g=0;g<a.length;g++){k=
	a[g];var f=d+Q(k,g);h+=R(k,b,e,f,c);}else if(f=A(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q(k,g++),h+=R(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
	function S(a,b,e){if(null==a)return a;var d=[],c=0;R(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
	var U={current:null},V={transition:null},W={ReactCurrentDispatcher:U,ReactCurrentBatchConfig:V,ReactCurrentOwner:K};function X(){throw Error("act(...) is not supported in production builds of React.");}
	react_production_min.Children={map:S,forEach:function(a,b,e){S(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S(a,function(){b++;});return b},toArray:function(a){return S(a,function(a){return a})||[]},only:function(a){if(!O(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E;react_production_min.Fragment=p;react_production_min.Profiler=r;react_production_min.PureComponent=G;react_production_min.StrictMode=q;react_production_min.Suspense=w;
	react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W;react_production_min.act=X;
	react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J.call(b,f)&&!L.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
	for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t,_context:a};return a.Consumer=a};react_production_min.createElement=M;react_production_min.createFactory=function(a){var b=M.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
	react_production_min.forwardRef=function(a){return {$$typeof:v,render:a}};react_production_min.isValidElement=O;react_production_min.lazy=function(a){return {$$typeof:y,_payload:{_status:-1,_result:a},_init:T}};react_production_min.memo=function(a,b){return {$$typeof:x,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V.transition;V.transition={};try{a();}finally{V.transition=b;}};react_production_min.unstable_act=X;react_production_min.useCallback=function(a,b){return U.current.useCallback(a,b)};react_production_min.useContext=function(a){return U.current.useContext(a)};
	react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U.current.useEffect(a,b)};react_production_min.useId=function(){return U.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U.current.useImperativeHandle(a,b,e)};react_production_min.useInsertionEffect=function(a,b){return U.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U.current.useLayoutEffect(a,b)};
	react_production_min.useMemo=function(a,b){return U.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U.current.useRef(a)};react_production_min.useState=function(a){return U.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U.current.useSyncExternalStore(a,b,e)};react_production_min.useTransition=function(){return U.current.useTransition()};react_production_min.version="18.3.1";
	return react_production_min;
}

var hasRequiredReact;

function requireReact () {
	if (hasRequiredReact) return react.exports;
	hasRequiredReact = 1;
	{
	  react.exports = requireReact_production_min();
	}
	return react.exports;
}

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactJsxRuntime_production_min;

function requireReactJsxRuntime_production_min () {
	if (hasRequiredReactJsxRuntime_production_min) return reactJsxRuntime_production_min;
	hasRequiredReactJsxRuntime_production_min = 1;
var f=requireReact(),k=Symbol.for("react.element"),l=Symbol.for("react.fragment"),m=Object.prototype.hasOwnProperty,n=f.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};
	function q(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m.call(a,b)&&!p.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k,type:c,key:e,ref:h,props:d,_owner:n.current}}reactJsxRuntime_production_min.Fragment=l;reactJsxRuntime_production_min.jsx=q;reactJsxRuntime_production_min.jsxs=q;
	return reactJsxRuntime_production_min;
}

var hasRequiredJsxRuntime;

function requireJsxRuntime () {
	if (hasRequiredJsxRuntime) return jsxRuntime.exports;
	hasRequiredJsxRuntime = 1;
	{
	  jsxRuntime.exports = requireReactJsxRuntime_production_min();
	}
	return jsxRuntime.exports;
}

var jsxRuntimeExports = requireJsxRuntime();

var client = {};

var reactDom = {exports: {}};

var reactDom_production_min = {};

var scheduler = {exports: {}};

var scheduler_production_min = {};

/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredScheduler_production_min;

function requireScheduler_production_min () {
	if (hasRequiredScheduler_production_min) return scheduler_production_min;
	hasRequiredScheduler_production_min = 1;
	(function (exports) {
function f(a,b){var c=a.length;a.push(b);a:for(;0<c;){var d=c-1>>>1,e=a[d];if(0<g(e,b))a[d]=b,a[c]=e,c=d;else break a}}function h(a){return 0===a.length?null:a[0]}function k(a){if(0===a.length)return null;var b=a[0],c=a.pop();if(c!==b){a[0]=c;a:for(var d=0,e=a.length,w=e>>>1;d<w;){var m=2*(d+1)-1,C=a[m],n=m+1,x=a[n];if(0>g(C,c))n<e&&0>g(x,C)?(a[d]=x,a[n]=c,d=n):(a[d]=C,a[m]=c,d=m);else if(n<e&&0>g(x,c))a[d]=x,a[n]=c,d=n;else break a}}return b}
		function g(a,b){var c=a.sortIndex-b.sortIndex;return 0!==c?c:a.id-b.id}if("object"===typeof performance&&"function"===typeof performance.now){var l=performance;exports.unstable_now=function(){return l.now()};}else {var p=Date,q=p.now();exports.unstable_now=function(){return p.now()-q};}var r=[],t=[],u=1,v=null,y=3,z=!1,A=!1,B=!1,D="function"===typeof setTimeout?setTimeout:null,E="function"===typeof clearTimeout?clearTimeout:null,F="undefined"!==typeof setImmediate?setImmediate:null;
		"undefined"!==typeof navigator&&void 0!==navigator.scheduling&&void 0!==navigator.scheduling.isInputPending&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function G(a){for(var b=h(t);null!==b;){if(null===b.callback)k(t);else if(b.startTime<=a)k(t),b.sortIndex=b.expirationTime,f(r,b);else break;b=h(t);}}function H(a){B=!1;G(a);if(!A)if(null!==h(r))A=!0,I(J);else {var b=h(t);null!==b&&K(H,b.startTime-a);}}
		function J(a,b){A=!1;B&&(B=!1,E(L),L=-1);z=!0;var c=y;try{G(b);for(v=h(r);null!==v&&(!(v.expirationTime>b)||a&&!M());){var d=v.callback;if("function"===typeof d){v.callback=null;y=v.priorityLevel;var e=d(v.expirationTime<=b);b=exports.unstable_now();"function"===typeof e?v.callback=e:v===h(r)&&k(r);G(b);}else k(r);v=h(r);}if(null!==v)var w=!0;else {var m=h(t);null!==m&&K(H,m.startTime-b);w=!1;}return w}finally{v=null,y=c,z=!1;}}var N=!1,O=null,L=-1,P=5,Q=-1;
		function M(){return exports.unstable_now()-Q<P?!1:!0}function R(){if(null!==O){var a=exports.unstable_now();Q=a;var b=!0;try{b=O(!0,a);}finally{b?S():(N=!1,O=null);}}else N=!1;}var S;if("function"===typeof F)S=function(){F(R);};else if("undefined"!==typeof MessageChannel){var T=new MessageChannel,U=T.port2;T.port1.onmessage=R;S=function(){U.postMessage(null);};}else S=function(){D(R,0);};function I(a){O=a;N||(N=!0,S());}function K(a,b){L=D(function(){a(exports.unstable_now());},b);}
		exports.unstable_IdlePriority=5;exports.unstable_ImmediatePriority=1;exports.unstable_LowPriority=4;exports.unstable_NormalPriority=3;exports.unstable_Profiling=null;exports.unstable_UserBlockingPriority=2;exports.unstable_cancelCallback=function(a){a.callback=null;};exports.unstable_continueExecution=function(){A||z||(A=!0,I(J));};
		exports.unstable_forceFrameRate=function(a){0>a||125<a?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):P=0<a?Math.floor(1E3/a):5;};exports.unstable_getCurrentPriorityLevel=function(){return y};exports.unstable_getFirstCallbackNode=function(){return h(r)};exports.unstable_next=function(a){switch(y){case 1:case 2:case 3:var b=3;break;default:b=y;}var c=y;y=b;try{return a()}finally{y=c;}};exports.unstable_pauseExecution=function(){};
		exports.unstable_requestPaint=function(){};exports.unstable_runWithPriority=function(a,b){switch(a){case 1:case 2:case 3:case 4:case 5:break;default:a=3;}var c=y;y=a;try{return b()}finally{y=c;}};
		exports.unstable_scheduleCallback=function(a,b,c){var d=exports.unstable_now();"object"===typeof c&&null!==c?(c=c.delay,c="number"===typeof c&&0<c?d+c:d):c=d;switch(a){case 1:var e=-1;break;case 2:e=250;break;case 5:e=1073741823;break;case 4:e=1E4;break;default:e=5E3;}e=c+e;a={id:u++,callback:b,priorityLevel:a,startTime:c,expirationTime:e,sortIndex:-1};c>d?(a.sortIndex=c,f(t,a),null===h(r)&&a===h(t)&&(B?(E(L),L=-1):B=!0,K(H,c-d))):(a.sortIndex=e,f(r,a),A||z||(A=!0,I(J)));return a};
		exports.unstable_shouldYield=M;exports.unstable_wrapCallback=function(a){var b=y;return function(){var c=y;y=b;try{return a.apply(this,arguments)}finally{y=c;}}}; 
	} (scheduler_production_min));
	return scheduler_production_min;
}

var hasRequiredScheduler;

function requireScheduler () {
	if (hasRequiredScheduler) return scheduler.exports;
	hasRequiredScheduler = 1;
	{
	  scheduler.exports = requireScheduler_production_min();
	}
	return scheduler.exports;
}

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

var hasRequiredReactDom_production_min;

function requireReactDom_production_min () {
	if (hasRequiredReactDom_production_min) return reactDom_production_min;
	hasRequiredReactDom_production_min = 1;
var aa=requireReact(),ca=requireScheduler();function p(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
	function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
	var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
	{},ma={};function oa(a){if(ja.call(ma,a))return !0;if(ja.call(la,a))return !1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return !1}function pa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
	function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z={};
	"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z[a]=new v(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z[b]=new v(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z[a]=new v(a,2,!1,a.toLowerCase(),null,!1,!1);});
	["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z[a]=new v(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z[a]=new v(a,3,!1,a.toLowerCase(),null,!1,!1);});
	["checked","multiple","muted","selected"].forEach(function(a){z[a]=new v(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z[a]=new v(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z[a]=new v(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z[a]=new v(a,5,!1,a.toLowerCase(),null,!1,!1);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
	"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
	sa);z[b]=new v(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z[b]=new v(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!1,!1);});
	z.xlinkHref=new v("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z[a]=new v(a,1,!1,a.toLowerCase(),null,!0,!0);});
	function ta(a,b,c,d){var e=z.hasOwnProperty(b)?z[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
	var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");	var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=!1;
	function Oa(a,b){if(!a||Na)return "";Na=!0;var c=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(b)if(b=function(){throw Error();},Object.defineProperty(b.prototype,"props",{set:function(){throw Error();}}),"object"===typeof Reflect&&Reflect.construct){try{Reflect.construct(b,[]);}catch(l){var d=l;}Reflect.construct(a,[],b);}else {try{b.call();}catch(l){d=l;}a.call(b.prototype);}else {try{throw Error();}catch(l){d=l;}a();}}catch(l){if(l&&d&&"string"===typeof l.stack){for(var e=l.stack.split("\n"),
	f=d.stack.split("\n"),g=e.length-1,h=f.length-1;1<=g&&0<=h&&e[g]!==f[h];)h--;for(;1<=g&&0<=h;g--,h--)if(e[g]!==f[h]){if(1!==g||1!==h){do if(g--,h--,0>h||e[g]!==f[h]){var k="\n"+e[g].replace(" at new "," at ");a.displayName&&k.includes("<anonymous>")&&(k=k.replace("<anonymous>",a.displayName));return k}while(1<=g&&0<=h)}break}}}finally{Na=!1,Error.prepareStackTrace=c;}return (a=a?a.displayName||a.name:"")?Ma(a):""}
	function Pa(a){switch(a.tag){case 5:return Ma(a.type);case 16:return Ma("Lazy");case 13:return Ma("Suspense");case 19:return Ma("SuspenseList");case 0:case 2:case 15:return a=Oa(a.type,!1),a;case 11:return a=Oa(a.type.render,!1),a;case 1:return a=Oa(a.type,!0),a;default:return ""}}
	function Qa(a){if(null==a)return null;if("function"===typeof a)return a.displayName||a.name||null;if("string"===typeof a)return a;switch(a){case ya:return "Fragment";case wa:return "Portal";case Aa:return "Profiler";case za:return "StrictMode";case Ea:return "Suspense";case Fa:return "SuspenseList"}if("object"===typeof a)switch(a.$$typeof){case Ca:return (a.displayName||"Context")+".Consumer";case Ba:return (a._context.displayName||"Context")+".Provider";case Da:var b=a.render;a=a.displayName;a||(a=b.displayName||
	b.name||"",a=""!==a?"ForwardRef("+a+")":"ForwardRef");return a;case Ga:return b=a.displayName||null,null!==b?b:Qa(a.type)||"Memo";case Ha:b=a._payload;a=a._init;try{return Qa(a(b))}catch(c){}}return null}
	function Ra(a){var b=a.type;switch(a.tag){case 24:return "Cache";case 9:return (b.displayName||"Context")+".Consumer";case 10:return (b._context.displayName||"Context")+".Provider";case 18:return "DehydratedFragment";case 11:return a=b.render,a=a.displayName||a.name||"",b.displayName||(""!==a?"ForwardRef("+a+")":"ForwardRef");case 7:return "Fragment";case 5:return b;case 4:return "Portal";case 3:return "Root";case 6:return "Text";case 16:return Qa(b);case 8:return b===za?"StrictMode":"Mode";case 22:return "Offscreen";
	case 12:return "Profiler";case 21:return "Scope";case 13:return "Suspense";case 19:return "SuspenseList";case 25:return "TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if("function"===typeof b)return b.displayName||b.name||null;if("string"===typeof b)return b}return null}function Sa(a){switch(typeof a){case "boolean":case "number":case "string":case "undefined":return a;case "object":return a;default:return ""}}
	function Ta(a){var b=a.type;return (a=a.nodeName)&&"input"===a.toLowerCase()&&("checkbox"===b||"radio"===b)}
	function Ua(a){var b=Ta(a)?"checked":"value",c=Object.getOwnPropertyDescriptor(a.constructor.prototype,b),d=""+a[b];if(!a.hasOwnProperty(b)&&"undefined"!==typeof c&&"function"===typeof c.get&&"function"===typeof c.set){var e=c.get,f=c.set;Object.defineProperty(a,b,{configurable:!0,get:function(){return e.call(this)},set:function(a){d=""+a;f.call(this,a);}});Object.defineProperty(a,b,{enumerable:c.enumerable});return {getValue:function(){return d},setValue:function(a){d=""+a;},stopTracking:function(){a._valueTracker=
	null;delete a[b];}}}}function Va(a){a._valueTracker||(a._valueTracker=Ua(a));}function Wa(a){if(!a)return !1;var b=a._valueTracker;if(!b)return !0;var c=b.getValue();var d="";a&&(d=Ta(a)?a.checked?"true":"false":a.value);a=d;return a!==c?(b.setValue(a),!0):!1}function Xa(a){a=a||("undefined"!==typeof document?document:void 0);if("undefined"===typeof a)return null;try{return a.activeElement||a.body}catch(b){return a.body}}
	function Ya(a,b){var c=b.checked;return A({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1);}
	function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
	function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
	function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
	function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
	function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p(91));return A({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p(92));if(eb(c)){if(1<c.length)throw Error(p(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
	function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
	function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
	var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
	function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
	var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
	zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
	function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
	function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p(62));}}
	function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
	function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb();}}
	function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
	typeof c)throw Error(p(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=!1;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments);}
	function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null;}else throw Error(p(198));Qb||(Qb=!0,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p(188));}
	function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
	c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p(189));}}if(c.alternate!==d)throw Error(p(190));}if(3!==c.tag)throw Error(p(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
	var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
	var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
	function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
	default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
	function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1}}
	function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
	function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
	function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
	function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
	function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
	function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return !1}
	function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
	function Xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift();}return !0}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
	function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
	function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=!0;
	function ed(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=1,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}function gd(a,b,c,d){var e=C,f=cd.transition;cd.transition=null;try{C=4,fd(a,b,c,d);}finally{C=e,cd.transition=f;}}
	function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
	function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
	function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
	case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
	function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
	function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
	(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
	var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
	a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
	Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
	119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
	var Qd=A({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
	a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
	deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae=ia&&"CompositionEvent"in window,be=null;ia&&"documentMode"in document&&(be=document.documentMode);var ce=ia&&"TextEvent"in window&&!be,de=ia&&(!ae||be&&8<be&&11>=be),ee=String.fromCharCode(32),fe=!1;
	function ge(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie=!1;function je(a,b){switch(a){case "compositionend":return he(b);case "keypress":if(32!==b.which)return null;fe=!0;return ee;case "textInput":return a=b.data,a===ee&&fe?null:a;default:return null}}
	function ke(a,b){if(ie)return "compositionend"===a||!ae&&ge(a,b)?(a=nd(),md=ld=kd=null,ie=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de&&"ko"!==b.locale?null:b.data;default:return null}}
	var le={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le[a.type]:"textarea"===b?!0:!1}function ne(a,b,c,d){Eb(d);b=oe(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe=null,qe=null;function re(a){se(a,0);}function te(a){var b=ue(a);if(Wa(b))return a}
	function ve(a,b){if("change"===a)return b}var we=!1;if(ia){var xe;if(ia){var ye="oninput"in document;if(!ye){var ze=document.createElement("div");ze.setAttribute("oninput","return;");ye="function"===typeof ze.oninput;}xe=ye;}else xe=!1;we=xe&&(!document.documentMode||9<document.documentMode);}function Ae(){pe&&(pe.detachEvent("onpropertychange",Be),qe=pe=null);}function Be(a){if("value"===a.propertyName&&te(qe)){var b=[];ne(b,qe,a,xb(a));Jb(re,b);}}
	function Ce(a,b,c){"focusin"===a?(Ae(),pe=b,qe=c,pe.attachEvent("onpropertychange",Be)):"focusout"===a&&Ae();}function De(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te(qe)}function Ee(a,b){if("click"===a)return te(b)}function Fe(a,b){if("input"===a||"change"===a)return te(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He="function"===typeof Object.is?Object.is:Ge;
	function Ie(a,b){if(He(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He(a[e],b[e]))return !1}return !0}function Je(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
	function Ke(a,b){var c=Je(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je(c);}}function Le(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
	function Me(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
	function Oe(a){var b=Me(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le(c.ownerDocument.documentElement,c)){if(null!==d&&Ne(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke(c,f);var g=Ke(c,
	d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
	var Pe=ia&&"documentMode"in document&&11>=document.documentMode,Qe=null,Re=null,Se=null,Te=!1;
	function Ue(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te||null==Qe||Qe!==Xa(d)||(d=Qe,"selectionStart"in d&&Ne(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se&&Ie(Se,d)||(Se=d,d=oe(Re,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe)));}
	function Ve(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We={animationend:Ve("Animation","AnimationEnd"),animationiteration:Ve("Animation","AnimationIteration"),animationstart:Ve("Animation","AnimationStart"),transitionend:Ve("Transition","TransitionEnd")},Xe={},Ye={};
	ia&&(Ye=document.createElement("div").style,"AnimationEvent"in window||(delete We.animationend.animation,delete We.animationiteration.animation,delete We.animationstart.animation),"TransitionEvent"in window||delete We.transitionend.transition);function Ze(a){if(Xe[a])return Xe[a];if(!We[a])return a;var b=We[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye)return Xe[a]=b[c];return a}var $e=Ze("animationend"),af=Ze("animationiteration"),bf=Ze("animationstart"),cf=Ze("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
	function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
	ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
	fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
	function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
	function se(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
	function D(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b));}}
	function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
	function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
	a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
	Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
	w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
	n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue(k);u=null==n?h:ue(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
	vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0);}}}a:{h=d?ue(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve;else if(me(h))if(we)na=Fe;else {na=De;var xa=Ce;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee);if(na&&(na=na(a,d))){ne(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
	xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue(d):window;switch(a){case "focusin":if(me(xa)||"true"===xa.contentEditable)Qe=xa,Re=d,Se=null;break;case "focusout":Se=Re=Qe=null;break;case "mousedown":Te=!0;break;case "contextmenu":case "mouseup":case "dragend":Te=!1;Ue(g,c,e);break;case "selectionchange":if(Pe)break;case "keydown":case "keyup":Ue(g,c,e);}var $a;if(ae)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
	break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie?ge(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de&&"ko"!==c.locale&&(ie||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie=!0)),xa=oe(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he(c),null!==$a&&(ba.data=$a))));if($a=ce?je(a,c):ke(a,c))d=oe(d,"onBeforeInput"),
	0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
	function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p(425));}function Bf(){}
	var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
	var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
	function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
	function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
	function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
	function E(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
	function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E(Wf);E(H);}function ag(a,b,c){if(H.current!==Vf)throw Error(p(168));G(H,b);G(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p(108,Ra(a)||"Unknown",e));return A({},c,d)}
	function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H.current;G(H,a);G(Wf,Wf.current);return !0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E(Wf),E(H),G(H,a)):E(Wf);G(Wf,c);}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=!0;hg(a);}
	function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C;try{var c=eg;for(C=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C=b,gg=!1;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
	function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I=!1,zg=null;
	function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
	function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
	null,!0):!1;default:return !1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I=!1,xg=a);}}else {if(Dg(a))throw Error(p(418));a.flags=a.flags&-4097|2;I=!1;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
	function Gg(a){if(a!==xg)return !1;if(!I)return Fg(a),I=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
	null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return !0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I=!1;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;
	function Lg(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p(309));var d=c.stateNode;}if(!d)throw Error(p(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p(284));if(!c._owner)throw Error(p(290,a));}return a}
	function Mg(a,b){a=Object.prototype.toString.call(b);throw Error(p(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function Ng(a){var b=a._init;return b(a._payload)}
	function Og(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=Pg(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
	null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=Qg(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&Ng(f)===b.type))return d=e(b,c.props),d.ref=Lg(a,b,c),d.return=a,d;d=Rg(c.type,c.key,c.props,null,a.mode,d);d.ref=Lg(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
	b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=Sg(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Tg(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=Qg(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=Rg(b.type,b.key,b.props,null,a.mode,c),
	c.ref=Lg(a,null,b),c.return=a,c;case wa:return b=Sg(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Tg(b,a.mode,c,null),b.return=a,b;Mg(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
	b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);Mg(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);Mg(b,d);}return null}
	function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
	x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p(150));h=l.call(h);if(null==h)throw Error(p(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
	m),I&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
	f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&Ng(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=Lg(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Tg(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=Rg(f.type,f.key,f.props,null,a.mode,h),h.ref=Lg(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
	d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=Sg(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);Mg(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
	(c(a,d),d=Qg(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Ug=Og(!0),Vg=Og(!1),Wg=Uf(null),Xg=null,Yg=null,Zg=null;function $g(){Zg=Yg=Xg=null;}function ah(a){var b=Wg.current;E(Wg);a._currentValue=b;}function bh(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}
	function ch(a,b){Xg=a;Zg=Yg=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(dh=!0),a.firstContext=null);}function eh(a){var b=a._currentValue;if(Zg!==a)if(a={context:a,memoizedValue:b,next:null},null===Yg){if(null===Xg)throw Error(p(308));Yg=a;Xg.dependencies={lanes:0,firstContext:a};}else Yg=Yg.next=a;return b}var fh=null;function gh(a){null===fh?fh=[a]:fh.push(a);}
	function hh(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,gh(b)):(c.next=e.next,e.next=c);b.interleaved=c;return ih(a,d)}function ih(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var jh=!1;function kh(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
	function lh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function mh(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
	function nh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return ih(a,c)}e=d.interleaved;null===e?(b.next=b,gh(d)):(b.next=e.next,e.next=b);d.interleaved=b;return ih(a,c)}function oh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
	function ph(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
	b;c.lastBaseUpdate=b;}
	function qh(a,b,c,d){var e=a.updateQueue;jh=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
	next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A({},q,r);break a;case 2:jh=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
	h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);rh|=g;a.lanes=g;a.memoizedState=q;}}
	function sh(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p(191,e));e.call(d);}}}var th={},uh=Uf(th),vh=Uf(th),wh=Uf(th);function xh(a){if(a===th)throw Error(p(174));return a}
	function yh(a,b){G(wh,b);G(vh,a);G(uh,th);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E(uh);G(uh,b);}function zh(){E(uh);E(vh);E(wh);}function Ah(a){xh(wh.current);var b=xh(uh.current);var c=lb(b,a.type);b!==c&&(G(vh,a),G(uh,c));}function Bh(a){vh.current===a&&(E(uh),E(vh));}var L=Uf(0);
	function Ch(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Dh=[];
	function Eh(){for(var a=0;a<Dh.length;a++)Dh[a]._workInProgressVersionPrimary=null;Dh.length=0;}var Fh=ua.ReactCurrentDispatcher,Gh=ua.ReactCurrentBatchConfig,Hh=0,M=null,N=null,O=null,Ih=!1,Jh=!1,Kh=0,Lh=0;function P(){throw Error(p(321));}function Mh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He(a[c],b[c]))return !1;return !0}
	function Nh(a,b,c,d,e,f){Hh=f;M=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Fh.current=null===a||null===a.memoizedState?Oh:Ph;a=c(d,e);if(Jh){f=0;do{Jh=!1;Kh=0;if(25<=f)throw Error(p(301));f+=1;O=N=null;b.updateQueue=null;Fh.current=Qh;a=c(d,e);}while(Jh)}Fh.current=Rh;b=null!==N&&null!==N.next;Hh=0;O=N=M=null;Ih=!1;if(b)throw Error(p(300));return a}function Sh(){var a=0!==Kh;Kh=0;return a}
	function Th(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===O?M.memoizedState=O=a:O=O.next=a;return O}function Uh(){if(null===N){var a=M.alternate;a=null!==a?a.memoizedState:null;}else a=N.next;var b=null===O?M.memoizedState:O.next;if(null!==b)O=b,N=a;else {if(null===a)throw Error(p(310));N=a;a={memoizedState:N.memoizedState,baseState:N.baseState,baseQueue:N.baseQueue,queue:N.queue,next:null};null===O?M.memoizedState=O=a:O=O.next=a;}return O}
	function Vh(a,b){return "function"===typeof b?b(a):b}
	function Wh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=N,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Hh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
	eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;M.lanes|=m;rh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He(d,b.memoizedState)||(dh=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,M.lanes|=f,rh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
	function Xh(a){var b=Uh(),c=b.queue;if(null===c)throw Error(p(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He(f,b.memoizedState)||(dh=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function Yh(){}
	function Zh(a,b){var c=M,d=Uh(),e=b(),f=!He(d.memoizedState,e);f&&(d.memoizedState=e,dh=!0);d=d.queue;$h(ai.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==O&&O.memoizedState.tag&1){c.flags|=2048;bi(9,ci.bind(null,c,d,e,b),void 0,null);if(null===Q)throw Error(p(349));0!==(Hh&30)||di(c,b,e);}return e}function di(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
	function ci(a,b,c,d){b.value=c;b.getSnapshot=d;ei(b)&&fi(a);}function ai(a,b,c){return c(function(){ei(b)&&fi(a);})}function ei(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He(a,c)}catch(d){return !0}}function fi(a){var b=ih(a,1);null!==b&&gi(b,a,1,-1);}
	function hi(a){var b=Th();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Vh,lastRenderedState:a};b.queue=a;a=a.dispatch=ii.bind(null,M,a);return [b.memoizedState,a]}
	function bi(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=M.updateQueue;null===b?(b={lastEffect:null,stores:null},M.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function ji(){return Uh().memoizedState}function ki(a,b,c,d){var e=Th();M.flags|=a;e.memoizedState=bi(1|b,c,void 0,void 0===d?null:d);}
	function li(a,b,c,d){var e=Uh();d=void 0===d?null:d;var f=void 0;if(null!==N){var g=N.memoizedState;f=g.destroy;if(null!==d&&Mh(d,g.deps)){e.memoizedState=bi(b,c,f,d);return}}M.flags|=a;e.memoizedState=bi(1|b,c,f,d);}function mi(a,b){return ki(8390656,8,a,b)}function $h(a,b){return li(2048,8,a,b)}function ni(a,b){return li(4,2,a,b)}function oi(a,b){return li(4,4,a,b)}
	function pi(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function qi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return li(4,4,pi.bind(null,b,a),c)}function ri(){}function si(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
	function ti(a,b){var c=Uh();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Mh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function ui(a,b,c){if(0===(Hh&21))return a.baseState&&(a.baseState=!1,dh=!0),a.memoizedState=c;He(c,b)||(c=yc(),M.lanes|=c,rh|=c,a.baseState=!0);return b}function vi(a,b){var c=C;C=0!==c&&4>c?c:4;a(!0);var d=Gh.transition;Gh.transition={};try{a(!1),b();}finally{C=c,Gh.transition=d;}}function wi(){return Uh().memoizedState}
	function xi(a,b,c){var d=yi(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,c);else if(c=hh(a,b,c,d),null!==c){var e=R();gi(c,a,d,e);Bi(c,b,d);}}
	function ii(a,b,c){var d=yi(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(zi(a))Ai(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He(h,g)){var k=b.interleaved;null===k?(e.next=e,gh(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=hh(a,b,e,d);null!==c&&(e=R(),gi(c,a,d,e),Bi(c,b,d));}}
	function zi(a){var b=a.alternate;return a===M||null!==b&&b===M}function Ai(a,b){Jh=Ih=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Bi(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
	var Rh={readContext:eh,useCallback:P,useContext:P,useEffect:P,useImperativeHandle:P,useInsertionEffect:P,useLayoutEffect:P,useMemo:P,useReducer:P,useRef:P,useState:P,useDebugValue:P,useDeferredValue:P,useTransition:P,useMutableSource:P,useSyncExternalStore:P,useId:P,unstable_isNewReconciler:!1},Oh={readContext:eh,useCallback:function(a,b){Th().memoizedState=[a,void 0===b?null:b];return a},useContext:eh,useEffect:mi,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ki(4194308,
	4,pi.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ki(4194308,4,a,b)},useInsertionEffect:function(a,b){return ki(4,2,a,b)},useMemo:function(a,b){var c=Th();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=Th();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=xi.bind(null,M,a);return [d.memoizedState,a]},useRef:function(a){var b=
	Th();a={current:a};return b.memoizedState=a},useState:hi,useDebugValue:ri,useDeferredValue:function(a){return Th().memoizedState=a},useTransition:function(){var a=hi(!1),b=a[0];a=vi.bind(null,a[1]);Th().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=M,e=Th();if(I){if(void 0===c)throw Error(p(407));c=c();}else {c=b();if(null===Q)throw Error(p(349));0!==(Hh&30)||di(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;mi(ai.bind(null,d,
	f,a),[a]);d.flags|=2048;bi(9,ci.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=Th(),b=Q.identifierPrefix;if(I){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Kh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Lh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Ph={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Wh,useRef:ji,useState:function(){return Wh(Vh)},
	useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return ui(b,N.memoizedState,a)},useTransition:function(){var a=Wh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1},Qh={readContext:eh,useCallback:si,useContext:eh,useEffect:$h,useImperativeHandle:qi,useInsertionEffect:ni,useLayoutEffect:oi,useMemo:ti,useReducer:Xh,useRef:ji,useState:function(){return Xh(Vh)},useDebugValue:ri,useDeferredValue:function(a){var b=Uh();return null===
	N?b.memoizedState=a:ui(b,N.memoizedState,a)},useTransition:function(){var a=Xh(Vh)[0],b=Uh().memoizedState;return [a,b]},useMutableSource:Yh,useSyncExternalStore:Zh,useId:wi,unstable_isNewReconciler:!1};function Ci(a,b){if(a&&a.defaultProps){b=A({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}function Di(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
	var Ei={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=R(),e=yi(a),f=mh(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=nh(a,f,e);null!==b&&(gi(b,a,e,d),oh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=R(),d=
	yi(a),e=mh(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=nh(a,e,d);null!==b&&(gi(b,a,d,c),oh(b,a,d));}};function Fi(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie(c,d)||!Ie(e,f):!0}
	function Gi(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=eh(f):(e=Zf(b)?Xf:H.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=Ei;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
	function Hi(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&Ei.enqueueReplaceState(b,b.state,null);}
	function Ii(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs={};kh(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=eh(f):(f=Zf(b)?Xf:H.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(Di(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
	"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&Ei.enqueueReplaceState(e,e.state,null),qh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}function Ji(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}
	function Ki(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}function Li(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Mi="function"===typeof WeakMap?WeakMap:Map;function Ni(a,b,c){c=mh(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Oi||(Oi=!0,Pi=d);Li(a,b);};return c}
	function Qi(a,b,c){c=mh(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Li(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Li(a,b);"function"!==typeof d&&(null===Ri?Ri=new Set([this]):Ri.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
	function Si(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Mi;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ti.bind(null,a,b,c),b.then(a,a));}function Ui(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null}
	function Vi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=mh(-1,1),b.tag=2,nh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Wi=ua.ReactCurrentOwner,dh=!1;function Xi(a,b,c,d){b.child=null===a?Vg(b,null,c,d):Ug(b,a.child,c,d);}
	function Yi(a,b,c,d,e){c=c.render;var f=b.ref;ch(b,e);d=Nh(a,b,c,d,f,e);c=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&c&&vg(b);b.flags|=1;Xi(a,b,d,e);return b.child}
	function $i(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!aj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,bj(a,b,f,d,e);a=Rg(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie;if(c(g,d)&&a.ref===b.ref)return Zi(a,b,e)}b.flags|=1;a=Pg(f,d);a.ref=b.ref;a.return=b;return b.child=a}
	function bj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie(f,d)&&a.ref===b.ref)if(dh=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(dh=!0);else return b.lanes=a.lanes,Zi(a,b,e)}return cj(a,b,c,d,e)}
	function dj(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G(ej,fj),fj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G(ej,fj),fj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G(ej,fj);fj|=d;}else null!==
	f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G(ej,fj),fj|=d;Xi(a,b,e,c);return b.child}function gj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function cj(a,b,c,d,e){var f=Zf(c)?Xf:H.current;f=Yf(b,f);ch(b,e);c=Nh(a,b,c,d,f,e);d=Sh();if(null!==a&&!dh)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,Zi(a,b,e);I&&d&&vg(b);b.flags|=1;Xi(a,b,c,e);return b.child}
	function hj(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b);}else f=!1;ch(b,e);if(null===b.stateNode)ij(a,b),Gi(b,c,d),Ii(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=eh(l):(l=Zf(c)?Xf:H.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
	(h!==d||k!==l)&&Hi(b,g,d,l);jh=!1;var r=b.memoizedState;g.state=r;qh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||jh?("function"===typeof m&&(Di(b,c,m,d),k=b.memoizedState),(h=jh||Fi(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
	("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;lh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Ci(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=eh(k):(k=Zf(c)?Xf:H.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
	"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&Hi(b,g,d,k);jh=!1;r=b.memoizedState;g.state=r;qh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||jh?("function"===typeof y&&(Di(b,c,y,d),n=b.memoizedState),(l=jh||Fi(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
	g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
	a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1);}return jj(a,b,c,d,f,e)}
	function jj(a,b,c,d,e,f){gj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),Zi(a,b,f);d=b.stateNode;Wi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Ug(b,a.child,null,f),b.child=Ug(b,null,h,f)):Xi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function kj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);yh(a,b.containerInfo);}
	function lj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Xi(a,b,c,d);return b.child}var mj={dehydrated:null,treeContext:null,retryLane:0};function nj(a){return {baseLanes:a,cachePool:null,transitions:null}}
	function oj(a,b,c){var d=b.pendingProps,e=L.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G(L,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
	g):f=pj(g,d,0,null),a=Tg(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=nj(c),b.memoizedState=mj,a):qj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return rj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=Pg(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=Pg(h,f):(f=Tg(f,g,c,null),f.flags|=2);f.return=
	b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?nj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=mj;return d}f=a.child;a=f.sibling;d=Pg(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
	function qj(a,b){b=pj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function sj(a,b,c,d){null!==d&&Jg(d);Ug(b,a.child,null,c);a=qj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
	function rj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Ki(Error(p(422))),sj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=pj({mode:"visible",children:d.children},e,0,null);f=Tg(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Ug(b,a.child,null,g);b.child.memoizedState=nj(g);b.memoizedState=mj;return f}if(0===(b.mode&1))return sj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
	if(d)var h=d.dgst;d=h;f=Error(p(419));d=Ki(f,d,void 0);return sj(a,b,g,d)}h=0!==(g&a.childLanes);if(dh||h){d=Q;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
	0!==e&&e!==f.retryLane&&(f.retryLane=e,ih(a,e),gi(d,a,e,-1));}tj();d=Ki(Error(p(421)));return sj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=uj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=qj(b,d.children);b.flags|=4096;return b}function vj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);bh(a.return,b,c);}
	function wj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
	function xj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Xi(a,b,d.children,c);d=L.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&vj(a,c,b);else if(19===a.tag)vj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G(L,d);if(0===(b.mode&1))b.memoizedState=
	null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Ch(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);wj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Ch(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}wj(b,!0,c,null,f);break;case "together":wj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
	function ij(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function Zi(a,b,c){null!==a&&(b.dependencies=a.dependencies);rh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p(153));if(null!==b.child){a=b.child;c=Pg(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=Pg(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
	function yj(a,b,c){switch(b.tag){case 3:kj(b);Ig();break;case 5:Ah(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:yh(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G(Wg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G(L,L.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return oj(a,b,c);G(L,L.current&1);a=Zi(a,b,c);return null!==a?a.sibling:null}G(L,L.current&1);break;case 19:d=0!==(c&
	b.childLanes);if(0!==(a.flags&128)){if(d)return xj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G(L,L.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,dj(a,b,c)}return Zi(a,b,c)}var zj,Aj,Bj,Cj;
	zj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Aj=function(){};
	Bj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;xh(uh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A({},e,{value:void 0});d=A({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
	(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
	c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Cj=function(a,b,c,d){c!==d&&(b.flags|=4);};
	function Dj(a,b){if(!I)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
	function S(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
	function Ej(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S(b),null;case 1:return Zf(b.type)&&$f(),S(b),null;case 3:d=b.stateNode;zh();E(Wf);E(H);Eh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Fj(zg),zg=null));Aj(a,b);S(b);return null;case 5:Bh(b);var e=xh(wh.current);
	c=b.type;if(null!==a&&null!=b.stateNode)Bj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p(166));S(b);return null}a=xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D("cancel",d);D("close",d);break;case "iframe":case "object":case "embed":D("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],d);break;case "source":D("error",d);break;case "img":case "image":case "link":D("error",
	d);D("load",d);break;case "details":D("toggle",d);break;case "input":Za(d,f);D("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D("invalid",d);break;case "textarea":hb(d,f),D("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
	h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D("scroll",d);}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
	"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;zj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D("cancel",a);D("close",a);e=d;break;case "iframe":case "object":case "embed":D("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D(lf[e],a);e=d;break;case "source":D("error",a);e=d;break;case "img":case "image":case "link":D("error",
	a);D("load",a);e=d;break;case "details":D("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A({},d,{value:void 0});D("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
	c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
	!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S(b);return null;case 6:if(a&&null!=b.stateNode)Cj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p(166));c=xh(wh.current);xh(uh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
	xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S(b);return null;case 13:E(L);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
	a){if(!f)throw Error(p(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S(b);f=!1;}else null!==zg&&(Fj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(L.current&1)?0===T&&(T=3):tj()));null!==b.updateQueue&&(b.flags|=4);S(b);return null;case 4:return zh(),
	Aj(a,b),null===a&&sf(b.stateNode.containerInfo),S(b),null;case 10:return ah(b.type._context),S(b),null;case 17:return Zf(b.type)&&$f(),S(b),null;case 19:E(L);f=b.memoizedState;if(null===f)return S(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Dj(f,!1);else {if(0!==T||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Ch(a);if(null!==g){b.flags|=128;Dj(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
	g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G(L,L.current&1|2);return b.child}a=
	a.sibling;}null!==f.tail&&B()>Gj&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);}else {if(!d)if(a=Ch(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Dj(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I)return S(b),null}else 2*B()-f.renderingStartTime>Gj&&1073741824!==c&&(b.flags|=128,d=!0,Dj(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
	b,f.tail=b.sibling,f.renderingStartTime=B(),b.sibling=null,c=L.current,G(L,d?c&1|2:c&1),b;S(b);return null;case 22:case 23:return Hj(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(fj&1073741824)&&(S(b),b.subtreeFlags&6&&(b.flags|=8192)):S(b),null;case 24:return null;case 25:return null}throw Error(p(156,b.tag));}
	function Ij(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return zh(),E(Wf),E(H),Eh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Bh(b),null;case 13:E(L);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E(L),null;case 4:return zh(),null;case 10:return ah(b.type._context),null;case 22:case 23:return Hj(),
	null;case 24:return null;default:return null}}var Jj=!1,U=!1,Kj="function"===typeof WeakSet?WeakSet:Set,V=null;function Lj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W(a,b,d);}else c.current=null;}function Mj(a,b,c){try{c();}catch(d){W(a,b,d);}}var Nj=!1;
	function Oj(a,b){Cf=dd;a=Me();if(Ne(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
	q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V=b;null!==V;)if(b=V,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V=a;else for(;null!==V;){b=V;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
	case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Ci(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p(163));}}catch(F){W(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V=a;break}V=b.return;}n=Nj;Nj=!1;return n}
	function Pj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Mj(b,c,f);}e=e.next;}while(e!==d)}}function Qj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Rj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
	function Sj(a){var b=a.alternate;null!==b&&(a.alternate=null,Sj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Tj(a){return 5===a.tag||3===a.tag||4===a.tag}
	function Uj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Tj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
	function Vj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Vj(a,b,c),a=a.sibling;null!==a;)Vj(a,b,c),a=a.sibling;}
	function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}var X=null,Xj=!1;function Yj(a,b,c){for(c=c.child;null!==c;)Zj(a,b,c),c=c.sibling;}
	function Zj(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U||Lj(c,b);case 6:var d=X,e=Xj;X=null;Yj(a,b,c);X=d;Xj=e;null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X.removeChild(c.stateNode));break;case 18:null!==X&&(Xj?(a=X,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X,c.stateNode));break;case 4:d=X;e=Xj;X=c.stateNode.containerInfo;Xj=!0;
	Yj(a,b,c);X=d;Xj=e;break;case 0:case 11:case 14:case 15:if(!U&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Mj(c,b,g):0!==(f&4)&&Mj(c,b,g));e=e.next;}while(e!==d)}Yj(a,b,c);break;case 1:if(!U&&(Lj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W(c,b,h);}Yj(a,b,c);break;case 21:Yj(a,b,c);break;case 22:c.mode&1?(U=(d=U)||null!==
	c.memoizedState,Yj(a,b,c),U=d):Yj(a,b,c);break;default:Yj(a,b,c);}}function ak(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Kj);b.forEach(function(b){var d=bk.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
	function ck(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X=h.stateNode;Xj=!1;break a;case 3:X=h.stateNode.containerInfo;Xj=!0;break a;case 4:X=h.stateNode.containerInfo;Xj=!0;break a}h=h.return;}if(null===X)throw Error(p(160));Zj(f,g,e);X=null;Xj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)dk(b,a),b=b.sibling;}
	function dk(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:ck(b,a);ek(a);if(d&4){try{Pj(3,a,a.return),Qj(3,a);}catch(t){W(a,a.return,t);}try{Pj(5,a,a.return);}catch(t){W(a,a.return,t);}}break;case 1:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);break;case 5:ck(b,a);ek(a);d&512&&null!==c&&Lj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
	a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
	f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W(a,a.return,t);}}break;case 6:ck(b,a);ek(a);if(d&4){if(null===a.stateNode)throw Error(p(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W(a,a.return,t);}}break;case 3:ck(b,a);ek(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W(a,a.return,t);}break;case 4:ck(b,a);ek(a);break;case 13:ck(b,a);ek(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
	null!==e.alternate&&null!==e.alternate.memoizedState||(fk=B()));d&4&&ak(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U=(l=U)||m,ck(b,a),U=l):ck(b,a);ek(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V=a,m=a.child;null!==m;){for(q=V=m;null!==V;){r=V;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Pj(4,r,r.return);break;case 1:Lj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
	b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W(d,c,t);}}break;case 5:Lj(r,r.return);break;case 22:if(null!==r.memoizedState){gk(q);continue}}null!==y?(y.return=r,V=y):gk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
	rb("display",g));}catch(t){W(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:ck(b,a);ek(a);d&4&&ak(a);break;case 21:break;default:ck(b,
	a),ek(a);}}function ek(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Tj(c)){var d=c;break a}c=c.return;}throw Error(p(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Uj(a);Wj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Uj(a);Vj(a,h,g);break;default:throw Error(p(161));}}catch(k){W(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function hk(a,b,c){V=a;ik(a);}
	function ik(a,b,c){for(var d=0!==(a.mode&1);null!==V;){var e=V,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Jj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U;h=Jj;var l=U;Jj=g;if((U=k)&&!l)for(V=e;null!==V;)g=V,k=g.child,22===g.tag&&null!==g.memoizedState?jk(e):null!==k?(k.return=g,V=k):jk(e);for(;null!==f;)V=f,ik(f),f=f.sibling;V=e;Jj=h;U=l;}kk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V=f):kk(a);}}
	function kk(a){for(;null!==V;){var b=V;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U||Qj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Ci(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&sh(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
	b.child.stateNode;break;case 1:c=b.child.stateNode;}sh(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
	default:throw Error(p(163));}U||b.flags&512&&Rj(b);}catch(r){W(b,b.return,r);}}if(b===a){V=null;break}c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}function gk(a){for(;null!==V;){var b=V;if(b===a){V=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V=c;break}V=b.return;}}
	function jk(a){for(;null!==V;){var b=V;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Qj(4,b);}catch(k){W(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W(b,e,k);}}var f=b.return;try{Rj(b);}catch(k){W(b,f,k);}break;case 5:var g=b.return;try{Rj(b);}catch(k){W(b,g,k);}}}catch(k){W(b,b.return,k);}if(b===a){V=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V=h;break}V=b.return;}}
	var lk=Math.ceil,mk=ua.ReactCurrentDispatcher,nk=ua.ReactCurrentOwner,ok=ua.ReactCurrentBatchConfig,K=0,Q=null,Y=null,Z=0,fj=0,ej=Uf(0),T=0,pk=null,rh=0,qk=0,rk=0,sk=null,tk=null,fk=0,Gj=Infinity,uk=null,Oi=!1,Pi=null,Ri=null,vk=!1,wk=null,xk=0,yk=0,zk=null,Ak=-1,Bk=0;function R(){return 0!==(K&6)?B():-1!==Ak?Ak:Ak=B()}
	function yi(a){if(0===(a.mode&1))return 1;if(0!==(K&2)&&0!==Z)return Z&-Z;if(null!==Kg.transition)return 0===Bk&&(Bk=yc()),Bk;a=C;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function gi(a,b,c,d){if(50<yk)throw yk=0,zk=null,Error(p(185));Ac(a,c,d);if(0===(K&2)||a!==Q)a===Q&&(0===(K&2)&&(qk|=c),4===T&&Ck(a,Z)),Dk(a,d),1===c&&0===K&&0===(b.mode&1)&&(Gj=B()+500,fg&&jg());}
	function Dk(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===Q?Z:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Ek.bind(null,a)):hg(Ek.bind(null,a)),Jf(function(){0===(K&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Fk(c,Gk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
	function Gk(a,b){Ak=-1;Bk=0;if(0!==(K&6))throw Error(p(327));var c=a.callbackNode;if(Hk()&&a.callbackNode!==c)return null;var d=uc(a,a===Q?Z:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Ik(a,d);else {b=d;var e=K;K|=2;var f=Jk();if(Q!==a||Z!==b)uk=null,Gj=B()+500,Kk(a,b);do try{Lk();break}catch(h){Mk(a,h);}while(1);$g();mk.current=f;K=e;null!==Y?b=0:(Q=null,Z=0,b=T);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Nk(a,e)));if(1===b)throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;if(6===b)Ck(a,d);
	else {e=a.current.alternate;if(0===(d&30)&&!Ok(e)&&(b=Ik(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Nk(a,f))),1===b))throw c=pk,Kk(a,0),Ck(a,d),Dk(a,B()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p(345));case 2:Pk(a,tk,uk);break;case 3:Ck(a,d);if((d&130023424)===d&&(b=fk+500-B(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){R();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),b);break}Pk(a,tk,uk);break;case 4:Ck(a,d);if((d&4194240)===
	d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*lk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Pk.bind(null,a,tk,uk),d);break}Pk(a,tk,uk);break;case 5:Pk(a,tk,uk);break;default:throw Error(p(329));}}}Dk(a,B());return a.callbackNode===c?Gk.bind(null,a):null}
	function Nk(a,b){var c=sk;a.current.memoizedState.isDehydrated&&(Kk(a,b).flags|=256);a=Ik(a,b);2!==a&&(b=tk,tk=c,null!==b&&Fj(b));return a}function Fj(a){null===tk?tk=a:tk.push.apply(tk,a);}
	function Ok(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He(f(),e))return !1}catch(g){return !1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0}
	function Ck(a,b){b&=~rk;b&=~qk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Ek(a){if(0!==(K&6))throw Error(p(327));Hk();var b=uc(a,0);if(0===(b&1))return Dk(a,B()),null;var c=Ik(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Nk(a,d));}if(1===c)throw c=pk,Kk(a,0),Ck(a,b),Dk(a,B()),c;if(6===c)throw Error(p(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Pk(a,tk,uk);Dk(a,B());return null}
	function Qk(a,b){var c=K;K|=1;try{return a(b)}finally{K=c,0===K&&(Gj=B()+500,fg&&jg());}}function Rk(a){null!==wk&&0===wk.tag&&0===(K&6)&&Hk();var b=K;K|=1;var c=ok.transition,d=C;try{if(ok.transition=null,C=1,a)return a()}finally{C=d,ok.transition=c,K=b,0===(K&6)&&jg();}}function Hj(){fj=ej.current;E(ej);}
	function Kk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y)for(c=Y.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:zh();E(Wf);E(H);Eh();break;case 5:Bh(d);break;case 4:zh();break;case 13:E(L);break;case 19:E(L);break;case 10:ah(d.type._context);break;case 22:case 23:Hj();}c=c.return;}Q=a;Y=a=Pg(a.current,null);Z=fj=b;T=0;pk=null;rk=qk=rh=0;tk=sk=null;if(null!==fh){for(b=
	0;b<fh.length;b++)if(c=fh[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}fh=null;}return a}
	function Mk(a,b){do{var c=Y;try{$g();Fh.current=Rh;if(Ih){for(var d=M.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Ih=!1;}Hh=0;O=N=M=null;Jh=!1;Kh=0;nk.current=null;if(null===c||null===c.return){T=1;pk=b;Y=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
	m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Ui(g);if(null!==y){y.flags&=-257;Vi(y,g,h,f,b);y.mode&1&&Si(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Si(f,l,b);tj();break a}k=Error(p(426));}}else if(I&&h.mode&1){var J=Ui(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Vi(J,g,h,f,b);Jg(Ji(k,h));break a}}f=k=Ji(k,h);4!==T&&(T=2);null===sk?sk=[f]:sk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
	b&=-b;f.lanes|=b;var x=Ni(f,k,b);ph(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Ri||!Ri.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Qi(f,h,b);ph(f,F);break a}}f=f.return;}while(null!==f)}Sk(c);}catch(na){b=na;Y===c&&null!==c&&(Y=c=c.return);continue}break}while(1)}function Jk(){var a=mk.current;mk.current=Rh;return null===a?Rh:a}
	function tj(){if(0===T||3===T||2===T)T=4;null===Q||0===(rh&268435455)&&0===(qk&268435455)||Ck(Q,Z);}function Ik(a,b){var c=K;K|=2;var d=Jk();if(Q!==a||Z!==b)uk=null,Kk(a,b);do try{Tk();break}catch(e){Mk(a,e);}while(1);$g();K=c;mk.current=d;if(null!==Y)throw Error(p(261));Q=null;Z=0;return T}function Tk(){for(;null!==Y;)Uk(Y);}function Lk(){for(;null!==Y&&!cc();)Uk(Y);}function Uk(a){var b=Vk(a.alternate,a,fj);a.memoizedProps=a.pendingProps;null===b?Sk(a):Y=b;nk.current=null;}
	function Sk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Ej(c,b,fj),null!==c){Y=c;return}}else {c=Ij(c,b);if(null!==c){c.flags&=32767;Y=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T=6;Y=null;return}}b=b.sibling;if(null!==b){Y=b;return}Y=b=a;}while(null!==b);0===T&&(T=5);}function Pk(a,b,c){var d=C,e=ok.transition;try{ok.transition=null,C=1,Wk(a,b,c,d);}finally{ok.transition=e,C=d;}return null}
	function Wk(a,b,c,d){do Hk();while(null!==wk);if(0!==(K&6))throw Error(p(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===Q&&(Y=Q=null,Z=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||vk||(vk=!0,Fk(hc,function(){Hk();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=ok.transition;ok.transition=null;
	var g=C;C=1;var h=K;K|=4;nk.current=null;Oj(a,c);dk(c,a);Oe(Df);dd=!!Cf;Df=Cf=null;a.current=c;hk(c);dc();K=h;C=g;ok.transition=f;}else a.current=c;vk&&(vk=!1,wk=a,xk=e);f=a.pendingLanes;0===f&&(Ri=null);mc(c.stateNode);Dk(a,B());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Oi)throw Oi=!1,a=Pi,Pi=null,a;0!==(xk&1)&&0!==a.tag&&Hk();f=a.pendingLanes;0!==(f&1)?a===zk?yk++:(yk=0,zk=a):yk=0;jg();return null}
	function Hk(){if(null!==wk){var a=Dc(xk),b=ok.transition,c=C;try{ok.transition=null;C=16>a?16:a;if(null===wk)var d=!1;else {a=wk;wk=null;xk=0;if(0!==(K&6))throw Error(p(331));var e=K;K|=4;for(V=a.current;null!==V;){var f=V,g=f.child;if(0!==(V.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V=l;null!==V;){var m=V;switch(m.tag){case 0:case 11:case 15:Pj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V=q;else for(;null!==V;){m=V;var r=m.sibling,y=m.return;Sj(m);if(m===
	l){V=null;break}if(null!==r){r.return=y;V=r;break}V=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V=g;else b:for(;null!==V;){f=V;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Pj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V=x;break b}V=f.return;}}var w=a.current;for(V=w;null!==V;){g=V;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
	u)u.return=g,V=u;else b:for(g=w;null!==V;){h=V;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Qj(9,h);}}catch(na){W(h,h.return,na);}if(h===g){V=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V=F;break b}V=h.return;}}K=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C=c,ok.transition=b;}}return !1}function Xk(a,b,c){b=Ji(c,b);b=Ni(a,b,1);a=nh(a,b,1);b=R();null!==a&&(Ac(a,1,b),Dk(a,b));}
	function W(a,b,c){if(3===a.tag)Xk(a,a,c);else for(;null!==b;){if(3===b.tag){Xk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Ri||!Ri.has(d))){a=Ji(c,a);a=Qi(b,a,1);b=nh(b,a,1);a=R();null!==b&&(Ac(b,1,a),Dk(b,a));break}}b=b.return;}}
	function Ti(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=R();a.pingedLanes|=a.suspendedLanes&c;Q===a&&(Z&c)===c&&(4===T||3===T&&(Z&130023424)===Z&&500>B()-fk?Kk(a,0):rk|=c);Dk(a,b);}function Yk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=R();a=ih(a,b);null!==a&&(Ac(a,b,c),Dk(a,c));}function uj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Yk(a,c);}
	function bk(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p(314));}null!==d&&d.delete(b);Yk(a,c);}var Vk;
	Vk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)dh=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return dh=!1,yj(a,b,c);dh=0!==(a.flags&131072)?!0:!1;}else dh=!1,I&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;ij(a,b);a=b.pendingProps;var e=Yf(b,H.current);ch(b,c);e=Nh(null,b,d,a,e,c);var f=Sh();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
	null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,kh(b),e.updater=Ei,b.stateNode=e,e._reactInternals=b,Ii(b,d,a,c),b=jj(null,b,d,!0,f,c)):(b.tag=0,I&&f&&vg(b),Xi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{ij(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=Zk(d);a=Ci(d,a);switch(e){case 0:b=cj(null,b,d,a,c);break a;case 1:b=hj(null,b,d,a,c);break a;case 11:b=Yi(null,b,d,a,c);break a;case 14:b=$i(null,b,d,Ci(d.type,a),c);break a}throw Error(p(306,
	d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),cj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),hj(a,b,d,e,c);case 3:a:{kj(b);if(null===a)throw Error(p(387));d=b.pendingProps;f=b.memoizedState;e=f.element;lh(a,b);qh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
	f,b.memoizedState=f,b.flags&256){e=Ji(Error(p(423)),b);b=lj(a,b,d,c,e);break a}else if(d!==e){e=Ji(Error(p(424)),b);b=lj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I=!0,zg=null,c=Vg(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=Zi(a,b,c);break a}Xi(a,b,d,c);}b=b.child;}return b;case 5:return Ah(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
	gj(a,b),Xi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return oj(a,b,c);case 4:return yh(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Ug(b,null,d,c):Xi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),Yi(a,b,d,e,c);case 7:return Xi(a,b,b.pendingProps,c),b.child;case 8:return Xi(a,b,b.pendingProps.children,c),b.child;case 12:return Xi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
	g=e.value;G(Wg,d._currentValue);d._currentValue=g;if(null!==f)if(He(f.value,g)){if(f.children===e.children&&!Wf.current){b=Zi(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=mh(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);bh(f.return,
	c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);bh(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Xi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,ch(b,c),e=eh(e),d=d(e),b.flags|=1,Xi(a,b,d,c),
	b.child;case 14:return d=b.type,e=Ci(d,b.pendingProps),e=Ci(d.type,e),$i(a,b,d,e,c);case 15:return bj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Ci(d,e),ij(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,ch(b,c),Gi(b,d,e),Ii(b,d,e,c),jj(null,b,d,!0,a,c);case 19:return xj(a,b,c);case 22:return dj(a,b,c)}throw Error(p(156,b.tag));};function Fk(a,b){return ac(a,b)}
	function $k(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new $k(a,b,c,d)}function aj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
	function Zk(a){if("function"===typeof a)return aj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
	function Pg(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
	c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
	function Rg(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)aj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Tg(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return pj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
	break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Tg(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function pj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function Qg(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
	function Sg(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
	function al(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
	null;}function bl(a,b,c,d,e,f,g,h,k){a=new al(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};kh(f);return a}function cl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
	function dl(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
	function el(a,b,c,d,e,f,g,h,k){a=bl(c,d,!0,a,e,f,g,h,k);a.context=dl(null);c=a.current;d=R();e=yi(c);f=mh(d,e);f.callback=void 0!==b&&null!==b?b:null;nh(c,f,e);a.current.lanes=e;Ac(a,e,d);Dk(a,d);return a}function fl(a,b,c,d){var e=b.current,f=R(),g=yi(e);c=dl(c);null===b.context?b.context=c:b.pendingContext=c;b=mh(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=nh(e,b,g);null!==a&&(gi(a,e,g,f),oh(a,e,g));return g}
	function gl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function hl(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function il(a,b){hl(a,b);(a=a.alternate)&&hl(a,b);}var kl="function"===typeof reportError?reportError:function(a){console.error(a);};function ll(a){this._internalRoot=a;}
	ml.prototype.render=ll.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p(409));fl(a,b,null,null);};ml.prototype.unmount=ll.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Rk(function(){fl(null,a,null,null);});b[uf]=null;}};function ml(a){this._internalRoot=a;}
	ml.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function nl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function pl(){}
	function ql(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=gl(g);f.call(a);};}var g=el(b,d,a,0,null,!1,!1,"",pl);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Rk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=gl(k);h.call(a);};}var k=bl(a,0,!1,null,null,!1,!1,"",pl);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Rk(function(){fl(b,k,c,d);});return k}
	function rl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=gl(g);h.call(a);};}fl(b,g,a,e);}else g=ql(c,b,a,e,d);return gl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Dk(b,B()),0===(K&6)&&(Gj=B()+500,jg()));}break;case 13:Rk(function(){var b=ih(a,1);if(null!==b){var c=R();gi(b,a,1,c);}}),il(a,1);}};
	Fc=function(a){if(13===a.tag){var b=ih(a,134217728);if(null!==b){var c=R();gi(b,a,134217728,c);}il(a,134217728);}};Gc=function(a){if(13===a.tag){var b=yi(a),c=ih(a,b);if(null!==c){var d=R();gi(c,a,b,d);}il(a,b);}};Hc=function(){return C};Ic=function(a,b){var c=C;try{return C=a,b()}finally{C=c;}};
	yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Qk;Hb=Rk;
	var sl={usingClientEntryPoint:!1,Events:[Cb,ue,Db,Eb,Fb,Qk]},tl={findFiberByHostInstance:Wc,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"};
	var ul={bundleType:tl.bundleType,version:tl.version,rendererPackageName:tl.rendererPackageName,rendererConfig:tl.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:tl.findFiberByHostInstance,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var vl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!vl.isDisabled&&vl.supportsFiber)try{kc=vl.inject(ul),lc=vl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=sl;
	reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!nl(b))throw Error(p(200));return cl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!nl(a))throw Error(p(299));var c=!1,d="",e=kl;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=bl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ll(b)};
	reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p(188));a=Object.keys(a).join(",");throw Error(p(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Rk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!0,c)};
	reactDom_production_min.hydrateRoot=function(a,b,c){if(!nl(a))throw Error(p(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=kl;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=el(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
	e);return new ml(b)};reactDom_production_min.render=function(a,b,c){if(!ol(b))throw Error(p(200));return rl(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!ol(a))throw Error(p(40));return a._reactRootContainer?(Rk(function(){rl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Qk;
	reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!ol(c))throw Error(p(200));if(null==a||void 0===a._reactInternals)throw Error(p(38));return rl(a,b,c,!1,d)};reactDom_production_min.version="18.3.1-next-f1338f8080-20240426";
	return reactDom_production_min;
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
	  reactDom.exports = requireReactDom_production_min();
	}
	return reactDom.exports;
}

var hasRequiredClient;

function requireClient () {
	if (hasRequiredClient) return client;
	hasRequiredClient = 1;
	var m = requireReactDom();
	{
	  client.createRoot = m.createRoot;
	  client.hydrateRoot = m.hydrateRoot;
	}
	return client;
}

var clientExports = requireClient();
const ReactDOM = /*@__PURE__*/getDefaultExportFromCjs(clientExports);

/*!
* sweetalert2 v11.15.6
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
const classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error', 'draggable', 'dragging'];
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
const warnAboutDeprecation = function (deprecatedParam) {
  let useInstead = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : null;
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
const show = function (elem) {
  let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
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
const showWhenInnerHtmlPresent = function (elem) {
  let display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
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
const toggle = function (elem, condition) {
  let display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
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
const animateTimerProgressBar = function (timer) {
  let reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
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
  const targetElement = getTarget(params.target);
  targetElement.appendChild(container);
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

  // Buttons background colors
  if (params.confirmButtonColor) {
    confirmButton.style.backgroundColor = params.confirmButtonColor;
    addClass(confirmButton, swalClasses['default-outline']);
  }
  if (params.denyButtonColor) {
    denyButton.style.backgroundColor = params.denyButtonColor;
    addClass(denyButton, swalClasses['default-outline']);
  }
  if (params.cancelButtonColor) {
    cancelButton.style.backgroundColor = params.cancelButtonColor;
    addClass(cancelButton, swalClasses['default-outline']);
  }
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
  if (!isScrollable(container) && target instanceof HTMLElement && target.tagName !== 'INPUT' &&
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
  scrollbarPadding: true
};
const updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'draggable', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];

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
  const popup = getPopup();
  const innerParams = privateProps.innerParams.get(this);
  if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
    warn(`You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.`);
    return;
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
function fire() {
  for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
    args[_key] = arguments[_key];
  }
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
function bindClickHandler() {
  let attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
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
    var _this = this;
    /**
     * @param {Array} args
     */
    const onceFn = function () {
      _this.removeListener(eventName, onceFn);
      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
        args[_key] = arguments[_key];
      }
      eventHandler.apply(_this, args);
    };
    this.on(eventName, onceFn);
  }

  /**
   * @param {string} eventName
   * @param {Array} args
   */
  emit(eventName) {
    for (var _len2 = arguments.length, args = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
      args[_key2 - 1] = arguments[_key2];
    }
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
  constructor() {
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
    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }
    const outerParams = Object.freeze(this.constructor.argsToParams(args));

    /** @type {Readonly<SweetAlertOptions>} */
    this.params = outerParams;

    /** @type {boolean} */
    this.isAwaitingPromise = false;
    _classPrivateFieldSet2(_promise, this, this._main(currentInstance.params));
  }
  _main(userParams) {
    let mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
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
  SweetAlert[key] = function () {
    if (currentInstance && currentInstance[key]) {
      return currentInstance[key](...arguments);
    }
    return null;
  };
});
SweetAlert.DismissReason = DismissReason;
SweetAlert.version = '11.15.6';

const Swal = SweetAlert;
// @ts-ignore
Swal.default = Swal;
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t;}catch(e){n.innerText=t;}}(document,"body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}@media print{body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop,.swal2-toast-shown) .swal2-container{position:static !important}}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:hsl(0,0%,33%);font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable{cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-draggable div:where(.swal2-icon){cursor:grab}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging{cursor:grabbing}div:where(.swal2-container) div:where(.swal2-popup).swal2-dragging div:where(.swal2-icon){cursor:grabbing}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word;cursor:initial}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm){border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-confirm):focus-visible{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny){border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-deny):focus-visible{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel){border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled):where(.swal2-cancel):focus-visible{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus-visible{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus-visible{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center;cursor:initial}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em;cursor:initial}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus-visible{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-html-container){z-index:1;justify-content:center;margin:0;padding:1em 1.6em .3em;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word;cursor:initial}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid hsl(0,0%,85%);border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:hsl(0,0%,94%);color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-toast){box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}div:where(.swal2-toast)>*{grid-column:2}div:where(.swal2-toast) h2:where(.swal2-title){margin:.5em 1em;padding:0;font-size:1em;text-align:initial}div:where(.swal2-toast) .swal2-loading{justify-content:center}div:where(.swal2-toast) input:where(.swal2-input){height:2em;margin:.5em;font-size:1em}div:where(.swal2-toast) .swal2-validation-message{font-size:1em}div:where(.swal2-toast) div:where(.swal2-footer){margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}div:where(.swal2-toast) button:where(.swal2-close){grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}div:where(.swal2-toast) div:where(.swal2-html-container){margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}div:where(.swal2-toast) div:where(.swal2-html-container):empty{padding:0}div:where(.swal2-toast) .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}div:where(.swal2-toast) .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}div:where(.swal2-toast) .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}div:where(.swal2-toast) .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}div:where(.swal2-toast) .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}div:where(.swal2-toast) .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}div:where(.swal2-toast) .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}div:where(.swal2-toast) div:where(.swal2-actions){justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}div:where(.swal2-toast) button:where(.swal2-styled){margin:.25em .5em;padding:.4em .6em;font-size:1em}div:where(.swal2-toast) .swal2-success{border-color:#a5dc86}div:where(.swal2-toast) .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}div:where(.swal2-toast) .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}div:where(.swal2-toast) .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}div:where(.swal2-toast) .swal2-success .swal2-success-ring{width:2em;height:2em}div:where(.swal2-toast) .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}div:where(.swal2-toast) .swal2-success [class^=swal2-success-line]{height:.3125em}div:where(.swal2-toast) .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}div:where(.swal2-toast) .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}div:where(.swal2-toast) .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}div:where(.swal2-toast) .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}div:where(.swal2-toast).swal2-show{animation:swal2-toast-show .5s}div:where(.swal2-toast).swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:rgb(249.95234375,205.965625,167.74765625);color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:rgb(156.7033492823,224.2822966507,246.2966507177);color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:rgb(200.8064516129,217.9677419355,225.1935483871);color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}");

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

/*! @docsearch/js 3.8.2 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
function e(){return e=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},e.apply(null,arguments)}function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}var n,r,o,i,a,c,u,l,s,f,p,m={},v=[],h=/acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i,d=Array.isArray;function y(e,t){for(var n in t)e[n]=t[n];return e}function _(e){e&&e.parentNode&&e.parentNode.removeChild(e);}function g(e,t,r){var o,i,a,c={};for(a in t)"key"==a?o=t[a]:"ref"==a?i=t[a]:c[a]=t[a];if(arguments.length>2&&(c.children=arguments.length>3?n.call(arguments,2):r),"function"==typeof e&&null!=e.defaultProps)for(a in e.defaultProps)void 0===c[a]&&(c[a]=e.defaultProps[a]);return b(e,c,o,i,null)}function b(e,t,n,i,a){var c={type:e,props:t,key:n,ref:i,__k:null,__:null,__b:0,__e:null,__d:void 0,__c:null,constructor:void 0,__v:null==a?++o:a,__i:-1,__u:0};return null==a&&null!=r.vnode&&r.vnode(c),c}function S(e){return e.children}function O(e,t){this.props=e,this.context=t;}function w(e,t){if(null==t)return e.__?w(e.__,e.__i+1):null;for(var n;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e)return n.__e;return "function"==typeof e.type?w(e):null}function E(e){var t,n;if(null!=(e=e.__)&&null!=e.__c){for(e.__e=e.__c.base=null,t=0;t<e.__k.length;t++)if(null!=(n=e.__k[t])&&null!=n.__e){e.__e=e.__c.base=n.__e;break}return E(e)}}function j(e){(!e.__d&&(e.__d=!0)&&i.push(e)&&!P.__r++||a!==r.debounceRendering)&&((a=r.debounceRendering)||c)(P);}function P(){var e,t,n,o,a,c,l,s;for(i.sort(u);e=i.shift();)e.__d&&(t=i.length,o=void 0,c=(a=(n=e).__v).__e,l=[],s=[],n.__P&&((o=y({},a)).__v=a.__v+1,r.vnode&&r.vnode(o),T(n.__P,o,a,n.__n,n.__P.namespaceURI,32&a.__u?[c]:null,l,null==c?w(a):c,!!(32&a.__u),s),o.__v=a.__v,o.__.__k[o.__i]=o,R(l,o,s),o.__e!=c&&E(o)),i.length>t&&i.sort(u));P.__r=0;}function I(e,t,n,r,o,i,a,c,u,l,s){var f,p,h,y,_,g=r&&r.__k||v,O=t.length;for(n.__d=u,function(e,t,n){var r,o,i,a,c,u=t.length,l=n.length,s=l,f=0;for(e.__k=[],r=0;r<u;r++)null!=(o=t[r])&&"boolean"!=typeof o&&"function"!=typeof o?(a=r+f,(o=e.__k[r]="string"==typeof o||"number"==typeof o||"bigint"==typeof o||o.constructor==String?b(null,o,null,null,null):d(o)?b(S,{children:o},null,null,null):void 0===o.constructor&&o.__b>0?b(o.type,o.props,o.key,o.ref?o.ref:null,o.__v):o).__=e,o.__b=e.__b+1,i=null,-1!==(c=o.__i=C(o,n,a,s))&&(s--,(i=n[c])&&(i.__u|=131072)),null==i||null===i.__v?(-1==c&&f--,"function"!=typeof o.type&&(o.__u|=65536)):c!==a&&(c==a-1?f--:c==a+1?f++:(c>a?f--:f++,o.__u|=65536))):o=e.__k[r]=null;if(s)for(r=0;r<l;r++)null!=(i=n[r])&&!(131072&i.__u)&&(i.__e==e.__d&&(e.__d=w(i)),M(i,i));}(n,t,g),u=n.__d,f=0;f<O;f++)null!=(h=n.__k[f])&&(p=-1===h.__i?m:g[h.__i]||m,h.__i=f,T(e,h,p,o,i,a,c,u,l,s),y=h.__e,h.ref&&p.ref!=h.ref&&(p.ref&&q(p.ref,null,h),s.push(h.ref,h.__c||y,h)),null==_&&null!=y&&(_=y),65536&h.__u||p.__k===h.__k?u=k(h,u,e):"function"==typeof h.type&&void 0!==h.__d?u=h.__d:y&&(u=y.nextSibling),h.__d=void 0,h.__u&=-196609);n.__d=u,n.__e=_;}function k(e,t,n){var r,o;if("function"==typeof e.type){for(r=e.__k,o=0;r&&o<r.length;o++)r[o]&&(r[o].__=e,t=k(r[o],t,n));return t}e.__e!=t&&(t&&e.type&&!n.contains(t)&&(t=w(e)),n.insertBefore(e.__e,t||null),t=e.__e);do{t=t&&t.nextSibling;}while(null!=t&&8===t.nodeType);return t}function D(e,t){return t=t||[],null==e||"boolean"==typeof e||(d(e)?e.some((function(e){D(e,t);})):t.push(e)),t}function C(e,t,n,r){var o=e.key,i=e.type,a=n-1,c=n+1,u=t[n];if(null===u||u&&o==u.key&&i===u.type&&!(131072&u.__u))return n;if(r>(null==u||131072&u.__u?0:1))for(;a>=0||c<t.length;){if(a>=0){if((u=t[a])&&!(131072&u.__u)&&o==u.key&&i===u.type)return a;a--;}if(c<t.length){if((u=t[c])&&!(131072&u.__u)&&o==u.key&&i===u.type)return c;c++;}}return -1}function x(e,t,n){"-"===t[0]?e.setProperty(t,null==n?"":n):e[t]=null==n?"":"number"!=typeof n||h.test(t)?n:n+"px";}function A(e,t,n,r,o){var i;e:if("style"===t)if("string"==typeof n)e.style.cssText=n;else {if("string"==typeof r&&(e.style.cssText=r=""),r)for(t in r)n&&t in n||x(e.style,t,"");if(n)for(t in n)r&&n[t]===r[t]||x(e.style,t,n[t]);}else if("o"===t[0]&&"n"===t[1])i=t!==(t=t.replace(/(PointerCapture)$|Capture$/i,"$1")),t=t.toLowerCase()in e||"onFocusOut"===t||"onFocusIn"===t?t.toLowerCase().slice(2):t.slice(2),e.l||(e.l={}),e.l[t+i]=n,n?r?n.u=r.u:(n.u=l,e.addEventListener(t,i?f:s,i)):e.removeEventListener(t,i?f:s,i);else {if("http://www.w3.org/2000/svg"==o)t=t.replace(/xlink(H|:h)/,"h").replace(/sName$/,"s");else if("width"!=t&&"height"!=t&&"href"!=t&&"list"!=t&&"form"!=t&&"tabIndex"!=t&&"download"!=t&&"rowSpan"!=t&&"colSpan"!=t&&"role"!=t&&"popover"!=t&&t in e)try{e[t]=null==n?"":n;break e}catch(e){}"function"==typeof n||(null==n||!1===n&&"-"!==t[4]?e.removeAttribute(t):e.setAttribute(t,"popover"==t&&1==n?"":n));}}function N(e){return function(t){if(this.l){var n=this.l[t.type+e];if(null==t.t)t.t=l++;else if(t.t<n.u)return;return n(r.event?r.event(t):t)}}}function T(e,t,n,o,i,a,c,u,l,s){var f,p,m,v,h,_,g,b,w,E,j,P,k,D,C,x,A=t.type;if(void 0!==t.constructor)return null;128&n.__u&&(l=!!(32&n.__u),a=[u=t.__e=n.__e]),(f=r.__b)&&f(t);e:if("function"==typeof A)try{if(b=t.props,w="prototype"in A&&A.prototype.render,E=(f=A.contextType)&&o[f.__c],j=f?E?E.props.value:f.__:o,n.__c?g=(p=t.__c=n.__c).__=p.__E:(w?t.__c=p=new A(b,j):(t.__c=p=new O(b,j),p.constructor=A,p.render=H),E&&E.sub(p),p.props=b,p.state||(p.state={}),p.context=j,p.__n=o,m=p.__d=!0,p.__h=[],p._sb=[]),w&&null==p.__s&&(p.__s=p.state),w&&null!=A.getDerivedStateFromProps&&(p.__s==p.state&&(p.__s=y({},p.__s)),y(p.__s,A.getDerivedStateFromProps(b,p.__s))),v=p.props,h=p.state,p.__v=t,m)w&&null==A.getDerivedStateFromProps&&null!=p.componentWillMount&&p.componentWillMount(),w&&null!=p.componentDidMount&&p.__h.push(p.componentDidMount);else {if(w&&null==A.getDerivedStateFromProps&&b!==v&&null!=p.componentWillReceiveProps&&p.componentWillReceiveProps(b,j),!p.__e&&(null!=p.shouldComponentUpdate&&!1===p.shouldComponentUpdate(b,p.__s,j)||t.__v===n.__v)){for(t.__v!==n.__v&&(p.props=b,p.state=p.__s,p.__d=!1),t.__e=n.__e,t.__k=n.__k,t.__k.some((function(e){e&&(e.__=t);})),P=0;P<p._sb.length;P++)p.__h.push(p._sb[P]);p._sb=[],p.__h.length&&c.push(p);break e}null!=p.componentWillUpdate&&p.componentWillUpdate(b,p.__s,j),w&&null!=p.componentDidUpdate&&p.__h.push((function(){p.componentDidUpdate(v,h,_);}));}if(p.context=j,p.props=b,p.__P=e,p.__e=!1,k=r.__r,D=0,w){for(p.state=p.__s,p.__d=!1,k&&k(t),f=p.render(p.props,p.state,p.context),C=0;C<p._sb.length;C++)p.__h.push(p._sb[C]);p._sb=[];}else do{p.__d=!1,k&&k(t),f=p.render(p.props,p.state,p.context),p.state=p.__s;}while(p.__d&&++D<25);p.state=p.__s,null!=p.getChildContext&&(o=y(y({},o),p.getChildContext())),w&&!m&&null!=p.getSnapshotBeforeUpdate&&(_=p.getSnapshotBeforeUpdate(v,h)),I(e,d(x=null!=f&&f.type===S&&null==f.key?f.props.children:f)?x:[x],t,n,o,i,a,c,u,l,s),p.base=t.__e,t.__u&=-161,p.__h.length&&c.push(p),g&&(p.__E=p.__=null);}catch(e){if(t.__v=null,l||null!=a){for(t.__u|=l?160:128;u&&8===u.nodeType&&u.nextSibling;)u=u.nextSibling;a[a.indexOf(u)]=null,t.__e=u;}else t.__e=n.__e,t.__k=n.__k;r.__e(e,t,n);}else null==a&&t.__v===n.__v?(t.__k=n.__k,t.__e=n.__e):t.__e=L(n.__e,t,n,o,i,a,c,l,s);(f=r.diffed)&&f(t);}function R(e,t,n){t.__d=void 0;for(var o=0;o<n.length;o++)q(n[o],n[++o],n[++o]);r.__c&&r.__c(t,e),e.some((function(t){try{e=t.__h,t.__h=[],e.some((function(e){e.call(t);}));}catch(e){r.__e(e,t.__v);}}));}function L(e,t,o,i,a,c,u,l,s){var f,p,v,h,y,g,b,S=o.props,O=t.props,E=t.type;if("svg"===E?a="http://www.w3.org/2000/svg":"math"===E?a="http://www.w3.org/1998/Math/MathML":a||(a="http://www.w3.org/1999/xhtml"),null!=c)for(f=0;f<c.length;f++)if((y=c[f])&&"setAttribute"in y==!!E&&(E?y.localName===E:3===y.nodeType)){e=y,c[f]=null;break}if(null==e){if(null===E)return document.createTextNode(O);e=document.createElementNS(a,E,O.is&&O),l&&(r.__m&&r.__m(t,c),l=!1),c=null;}if(null===E)S===O||l&&e.data===O||(e.data=O);else {if(c=c&&n.call(e.childNodes),S=o.props||m,!l&&null!=c)for(S={},f=0;f<e.attributes.length;f++)S[(y=e.attributes[f]).name]=y.value;for(f in S)if(y=S[f],"children"==f);else if("dangerouslySetInnerHTML"==f)v=y;else if(!(f in O)){if("value"==f&&"defaultValue"in O||"checked"==f&&"defaultChecked"in O)continue;A(e,f,null,y,a);}for(f in O)y=O[f],"children"==f?h=y:"dangerouslySetInnerHTML"==f?p=y:"value"==f?g=y:"checked"==f?b=y:l&&"function"!=typeof y||S[f]===y||A(e,f,y,S[f],a);if(p)l||v&&(p.__html===v.__html||p.__html===e.innerHTML)||(e.innerHTML=p.__html),t.__k=[];else if(v&&(e.innerHTML=""),I(e,d(h)?h:[h],t,o,i,"foreignObject"===E?"http://www.w3.org/1999/xhtml":a,c,u,c?c[0]:o.__k&&w(o,0),l,s),null!=c)for(f=c.length;f--;)_(c[f]);l||(f="value","progress"===E&&null==g?e.removeAttribute("value"):void 0!==g&&(g!==e[f]||"progress"===E&&!g||"option"===E&&g!==S[f])&&A(e,f,g,S[f],a),f="checked",void 0!==b&&b!==e[f]&&A(e,f,b,S[f],a));}return e}function q(e,t,n){try{if("function"==typeof e){var o="function"==typeof e.__u;o&&e.__u(),o&&null==t||(e.__u=e(t));}else e.current=t;}catch(e){r.__e(e,n);}}function M(e,t,n){var o,i;if(r.unmount&&r.unmount(e),(o=e.ref)&&(o.current&&o.current!==e.__e||q(o,null,t)),null!=(o=e.__c)){if(o.componentWillUnmount)try{o.componentWillUnmount();}catch(e){r.__e(e,t);}o.base=o.__P=null;}if(o=e.__k)for(i=0;i<o.length;i++)o[i]&&M(o[i],t,n||"function"!=typeof e.type);n||_(e.__e),e.__c=e.__=e.__e=e.__d=void 0;}function H(e,t,n){return this.constructor(e,n)}function U(e,t,o){var i,a,c,u;r.__&&r.__(e,t),a=(i="function"==typeof o)?null:o&&o.__k||t.__k,c=[],u=[],T(t,e=(!i&&o||t).__k=g(S,null,[e]),a||m,m,t.namespaceURI,!i&&o?[o]:a?null:t.firstChild?n.call(t.childNodes):null,c,!i&&o?o:a?a.__e:t.firstChild,i,u),R(c,e,u);}function F(e,t){U(e,t,F);}function B(e,t,r){var o,i,a,c,u=y({},e.props);for(a in e.type&&e.type.defaultProps&&(c=e.type.defaultProps),t)"key"==a?o=t[a]:"ref"==a?i=t[a]:u[a]=void 0===t[a]&&void 0!==c?c[a]:t[a];return arguments.length>2&&(u.children=arguments.length>3?n.call(arguments,2):r),b(e.type,u,o||e.key,i||e.ref,null)}n=v.slice,r={__e:function(e,t,n,r){for(var o,i,a;t=t.__;)if((o=t.__c)&&!o.__)try{if((i=o.constructor)&&null!=i.getDerivedStateFromError&&(o.setState(i.getDerivedStateFromError(e)),a=o.__d),null!=o.componentDidCatch&&(o.componentDidCatch(e,r||{}),a=o.__d),a)return o.__E=o}catch(t){e=t;}throw e}},o=0,O.prototype.setState=function(e,t){var n;n=null!=this.__s&&this.__s!==this.state?this.__s:this.__s=y({},this.state),"function"==typeof e&&(e=e(y({},n),this.props)),e&&y(n,e),null!=e&&this.__v&&(t&&this._sb.push(t),j(this));},O.prototype.forceUpdate=function(e){this.__v&&(this.__e=!0,e&&this.__h.push(e),j(this));},O.prototype.render=S,i=[],c="function"==typeof Promise?Promise.prototype.then.bind(Promise.resolve()):setTimeout,u=function(e,t){return e.__v.__b-t.__v.__b},P.__r=0,l=0,s=N(!1),f=N(!0),p=0;var V,K,W,z,J=0,Q=[],$=r,Z=$.__b,G=$.__r,Y=$.diffed,X=$.__c,ee=$.unmount,te=$.__;function ne(e,t){$.__h&&$.__h(K,e,J||t),J=0;var n=K.__H||(K.__H={__:[],__h:[]});return e>=n.__.length&&n.__.push({}),n.__[e]}function re(e){return J=1,oe(be,e)}function oe(e,t,n){var r=ne(V++,2);if(r.t=e,!r.__c&&(r.__=[n?n(t):be(void 0,t),function(e){var t=r.__N?r.__N[0]:r.__[0],n=r.t(t,e);t!==n&&(r.__N=[n,r.__[1]],r.__c.setState({}));}],r.__c=K,!K.u)){var o=function(e,t,n){if(!r.__c.__H)return !0;var o=r.__c.__H.__.filter((function(e){return !!e.__c}));if(o.every((function(e){return !e.__N})))return !i||i.call(this,e,t,n);var a=!1;return o.forEach((function(e){if(e.__N){var t=e.__[0];e.__=e.__N,e.__N=void 0,t!==e.__[0]&&(a=!0);}})),!(!a&&r.__c.props===e)&&(!i||i.call(this,e,t,n))};K.u=!0;var i=K.shouldComponentUpdate,a=K.componentWillUpdate;K.componentWillUpdate=function(e,t,n){if(this.__e){var r=i;i=void 0,o(e,t,n),i=r;}a&&a.call(this,e,t,n);},K.shouldComponentUpdate=o;}return r.__N||r.__}function ie(e,t){var n=ne(V++,3);!$.__s&&ge(n.__H,t)&&(n.__=e,n.i=t,K.__H.__h.push(n));}function ae(e,t){var n=ne(V++,4);!$.__s&&ge(n.__H,t)&&(n.__=e,n.i=t,K.__h.push(n));}function ce(e){return J=5,le((function(){return {current:e}}),[])}function ue(e,t,n){J=6,ae((function(){return "function"==typeof e?(e(t()),function(){return e(null)}):e?(e.current=t(),function(){return e.current=null}):void 0}),null==n?n:n.concat(e));}function le(e,t){var n=ne(V++,7);return ge(n.__H,t)&&(n.__=e(),n.__H=t,n.__h=e),n.__}function se(e,t){return J=8,le((function(){return e}),t)}function fe(e){var t=K.context[e.__c],n=ne(V++,9);return n.c=e,t?(null==n.__&&(n.__=!0,t.sub(K)),t.props.value):e.__}function pe(e,t){$.useDebugValue&&$.useDebugValue(t?t(e):e);}function me(){var e=ne(V++,11);if(!e.__){for(var t=K.__v;null!==t&&!t.__m&&null!==t.__;)t=t.__;var n=t.__m||(t.__m=[0,0]);e.__="P"+n[0]+"-"+n[1]++;}return e.__}function ve(){for(var e;e=Q.shift();)if(e.__P&&e.__H)try{e.__H.__h.forEach(ye),e.__H.__h.forEach(_e),e.__H.__h=[];}catch(t){e.__H.__h=[],$.__e(t,e.__v);}}$.__b=function(e){K=null,Z&&Z(e);},$.__=function(e,t){e&&t.__k&&t.__k.__m&&(e.__m=t.__k.__m),te&&te(e,t);},$.__r=function(e){G&&G(e),V=0;var t=(K=e.__c).__H;t&&(W===K?(t.__h=[],K.__h=[],t.__.forEach((function(e){e.__N&&(e.__=e.__N),e.i=e.__N=void 0;}))):(t.__h.forEach(ye),t.__h.forEach(_e),t.__h=[],V=0)),W=K;},$.diffed=function(e){Y&&Y(e);var t=e.__c;t&&t.__H&&(t.__H.__h.length&&(1!==Q.push(t)&&z===$.requestAnimationFrame||((z=$.requestAnimationFrame)||de)(ve)),t.__H.__.forEach((function(e){e.i&&(e.__H=e.i),e.i=void 0;}))),W=K=null;},$.__c=function(e,t){t.some((function(e){try{e.__h.forEach(ye),e.__h=e.__h.filter((function(e){return !e.__||_e(e)}));}catch(n){t.some((function(e){e.__h&&(e.__h=[]);})),t=[],$.__e(n,e.__v);}})),X&&X(e,t);},$.unmount=function(e){ee&&ee(e);var t,n=e.__c;n&&n.__H&&(n.__H.__.forEach((function(e){try{ye(e);}catch(e){t=e;}})),n.__H=void 0,t&&$.__e(t,n.__v));};var he="function"==typeof requestAnimationFrame;function de(e){var t,n=function(){clearTimeout(r),he&&cancelAnimationFrame(t),setTimeout(e);},r=setTimeout(n,100);he&&(t=requestAnimationFrame(n));}function ye(e){var t=K,n=e.__c;"function"==typeof n&&(e.__c=void 0,n()),K=t;}function _e(e){var t=K;e.__c=e.__(),K=t;}function ge(e,t){return !e||e.length!==t.length||t.some((function(t,n){return t!==e[n]}))}function be(e,t){return "function"==typeof t?t(e):t}function Se(e,t){for(var n in e)if("__source"!==n&&!(n in t))return !0;for(var r in t)if("__source"!==r&&e[r]!==t[r])return !0;return !1}function Oe(e,t){this.props=e,this.context=t;}(Oe.prototype=new O).isPureReactComponent=!0,Oe.prototype.shouldComponentUpdate=function(e,t){return Se(this.props,e)||Se(this.state,t)};var we=r.__b;r.__b=function(e){e.type&&e.type.__f&&e.ref&&(e.props.ref=e.ref,e.ref=null),we&&we(e);};var Ee="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.forward_ref")||3911,je=function(e,t){return null==e?null:D(D(e).map(t))},Pe={map:je,forEach:je,count:function(e){return e?D(e).length:0},only:function(e){var t=D(e);if(1!==t.length)throw "Children.only";return t[0]},toArray:D},Ie=r.__e;r.__e=function(e,t,n,r){if(e.then)for(var o,i=t;i=i.__;)if((o=i.__c)&&o.__c)return null==t.__e&&(t.__e=n.__e,t.__k=n.__k),o.__c(e,t);Ie(e,t,n,r);};var ke=r.unmount;function De(e,t,n){return e&&(e.__c&&e.__c.__H&&(e.__c.__H.__.forEach((function(e){"function"==typeof e.__c&&e.__c();})),e.__c.__H=null),null!=(e=function(e,t){for(var n in t)e[n]=t[n];return e}({},e)).__c&&(e.__c.__P===n&&(e.__c.__P=t),e.__c=null),e.__k=e.__k&&e.__k.map((function(e){return De(e,t,n)}))),e}function Ce(e,t,n){return e&&n&&(e.__v=null,e.__k=e.__k&&e.__k.map((function(e){return Ce(e,t,n)})),e.__c&&e.__c.__P===t&&(e.__e&&n.appendChild(e.__e),e.__c.__e=!0,e.__c.__P=n)),e}function xe(){this.__u=0,this.t=null,this.__b=null;}function Ae(e){var t=e.__.__c;return t&&t.__a&&t.__a(e)}function Ne(){this.u=null,this.o=null;}r.unmount=function(e){var t=e.__c;t&&t.__R&&t.__R(),t&&32&e.__u&&(e.type=null),ke&&ke(e);},(xe.prototype=new O).__c=function(e,t){var n=t.__c,r=this;null==r.t&&(r.t=[]),r.t.push(n);var o=Ae(r.__v),i=!1,a=function(){i||(i=!0,n.__R=null,o?o(c):c());};n.__R=a;var c=function(){if(! --r.__u){if(r.state.__a){var e=r.state.__a;r.__v.__k[0]=Ce(e,e.__c.__P,e.__c.__O);}var t;for(r.setState({__a:r.__b=null});t=r.t.pop();)t.forceUpdate();}};r.__u++||32&t.__u||r.setState({__a:r.__b=r.__v.__k[0]}),e.then(a,a);},xe.prototype.componentWillUnmount=function(){this.t=[];},xe.prototype.render=function(e,t){if(this.__b){if(this.__v.__k){var n=document.createElement("div"),r=this.__v.__k[0].__c;this.__v.__k[0]=De(this.__b,n,r.__O=r.__P);}this.__b=null;}var o=t.__a&&g(S,null,e.fallback);return o&&(o.__u&=-33),[g(S,null,t.__a?null:e.children),o]};var Te=function(e,t,n){if(++n[1]===n[0]&&e.o.delete(t),e.props.revealOrder&&("t"!==e.props.revealOrder[0]||!e.o.size))for(n=e.u;n;){for(;n.length>3;)n.pop()();if(n[1]<n[0])break;e.u=n=n[2];}};function Re(e){return this.getChildContext=function(){return e.context},e.children}function Le(e){var t=this,n=e.i;t.componentWillUnmount=function(){U(null,t.l),t.l=null,t.i=null;},t.i&&t.i!==n&&t.componentWillUnmount(),t.l||(t.i=n,t.l={nodeType:1,parentNode:n,childNodes:[],contains:function(){return !0},appendChild:function(e){this.childNodes.push(e),t.i.appendChild(e);},insertBefore:function(e,n){this.childNodes.push(e),t.i.appendChild(e);},removeChild:function(e){this.childNodes.splice(this.childNodes.indexOf(e)>>>1,1),t.i.removeChild(e);}}),U(g(Re,{context:t.context},e.__v),t.l);}function qe(e,t){var n=g(Le,{__v:e,i:t});return n.containerInfo=t,n}(Ne.prototype=new O).__a=function(e){var t=this,n=Ae(t.__v),r=t.o.get(e);return r[0]++,function(o){var i=function(){t.props.revealOrder?(r.push(o),Te(t,e,r)):o();};n?n(i):i();}},Ne.prototype.render=function(e){this.u=null,this.o=new Map;var t=D(e.children);e.revealOrder&&"b"===e.revealOrder[0]&&t.reverse();for(var n=t.length;n--;)this.o.set(t[n],this.u=[1,0,this.u]);return e.children},Ne.prototype.componentDidUpdate=Ne.prototype.componentDidMount=function(){var e=this;this.o.forEach((function(t,n){Te(e,n,t);}));};var Me="undefined"!=typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103,He=/^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|dominant|fill|flood|font|glyph(?!R)|horiz|image(!S)|letter|lighting|marker(?!H|W|U)|overline|paint|pointer|shape|stop|strikethrough|stroke|text(?!L)|transform|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/,Ue=/^on(Ani|Tra|Tou|BeforeInp|Compo)/,Fe=/[A-Z0-9]/g,Be="undefined"!=typeof document,Ve=function(e){return ("undefined"!=typeof Symbol&&"symbol"==t(Symbol())?/fil|che|rad/:/fil|che|ra/).test(e)};function Ke(e,t,n){return null==t.__k&&(t.textContent=""),U(e,t),"function"==typeof n&&n(),e?e.__c:null}O.prototype.isReactComponent={},["componentWillMount","componentWillReceiveProps","componentWillUpdate"].forEach((function(e){Object.defineProperty(O.prototype,e,{configurable:!0,get:function(){return this["UNSAFE_"+e]},set:function(t){Object.defineProperty(this,e,{configurable:!0,writable:!0,value:t});}});}));var We=r.event;function ze(){}function Je(){return this.cancelBubble}function Qe(){return this.defaultPrevented}r.event=function(e){return We&&(e=We(e)),e.persist=ze,e.isPropagationStopped=Je,e.isDefaultPrevented=Qe,e.nativeEvent=e};var $e,Ze={enumerable:!1,configurable:!0,get:function(){return this.class}},Ge=r.vnode;r.vnode=function(e){"string"==typeof e.type&&function(e){var t=e.props,n=e.type,r={},o=-1===n.indexOf("-");for(var i in t){var a=t[i];if(!("value"===i&&"defaultValue"in t&&null==a||Be&&"children"===i&&"noscript"===n||"class"===i||"className"===i)){var c=i.toLowerCase();"defaultValue"===i&&"value"in t&&null==t.value?i="value":"download"===i&&!0===a?a="":"translate"===c&&"no"===a?a=!1:"o"===c[0]&&"n"===c[1]?"ondoubleclick"===c?i="ondblclick":"onchange"!==c||"input"!==n&&"textarea"!==n||Ve(t.type)?"onfocus"===c?i="onfocusin":"onblur"===c?i="onfocusout":Ue.test(i)&&(i=c):c=i="oninput":o&&He.test(i)?i=i.replace(Fe,"-$&").toLowerCase():null===a&&(a=void 0),"oninput"===c&&r[i=c]&&(i="oninputCapture"),r[i]=a;}}"select"==n&&r.multiple&&Array.isArray(r.value)&&(r.value=D(t.children).forEach((function(e){e.props.selected=-1!=r.value.indexOf(e.props.value);}))),"select"==n&&null!=r.defaultValue&&(r.value=D(t.children).forEach((function(e){e.props.selected=r.multiple?-1!=r.defaultValue.indexOf(e.props.value):r.defaultValue==e.props.value;}))),t.class&&!t.className?(r.class=t.class,Object.defineProperty(r,"className",Ze)):(t.className&&!t.class||t.class&&t.className)&&(r.class=r.className=t.className),e.props=r;}(e),e.$$typeof=Me,Ge&&Ge(e);};var Ye=r.__r;r.__r=function(e){Ye&&Ye(e),$e=e.__c;};var Xe=r.diffed;r.diffed=function(e){Xe&&Xe(e);var t=e.props,n=e.__e;null!=n&&"textarea"===e.type&&"value"in t&&t.value!==n.value&&(n.value=null==t.value?"":t.value),$e=null;};var et={ReactCurrentDispatcher:{current:{readContext:function(e){return $e.__n[e.__c].props.value},useCallback:se,useContext:fe,useDebugValue:pe,useDeferredValue:rt,useEffect:ie,useId:me,useImperativeHandle:ue,useInsertionEffect:it,useLayoutEffect:ae,useMemo:le,useReducer:oe,useRef:ce,useState:re,useSyncExternalStore:at,useTransition:ot}}};function tt(e){return !!e&&e.$$typeof===Me}function nt(e){e();}function rt(e){return e}function ot(){return [!1,nt]}var it=ae;function at(e,t){var n=t(),r=re({h:{__:n,v:t}}),o=r[0].h,i=r[1];return ae((function(){o.__=n,o.v=t,ct(o)&&i({h:o});}),[e,n,t]),ie((function(){return ct(o)&&i({h:o}),e((function(){ct(o)&&i({h:o});}))}),[e]),n}function ct(e){var t,n,r=e.v,o=e.__;try{var i=r();return !((t=o)===(n=i)&&(0!==t||1/t==1/n)||t!=t&&n!=n)}catch(e){return !0}}var ut={useState:re,useId:me,useReducer:oe,useEffect:ie,useLayoutEffect:ae,useInsertionEffect:it,useTransition:ot,useDeferredValue:rt,useSyncExternalStore:at,startTransition:nt,useRef:ce,useImperativeHandle:ue,useMemo:le,useCallback:se,useContext:fe,useDebugValue:pe,version:"18.3.1",Children:Pe,render:Ke,hydrate:function(e,t,n){return F(e,t),"function"==typeof n&&n(),e?e.__c:null},unmountComponentAtNode:function(e){return !!e.__k&&(U(null,e),!0)},createPortal:qe,createElement:g,createContext:function(e,t){var n={__c:t="__cC"+p++,__:e,Consumer:function(e,t){return e.children(t)},Provider:function(e){var n,r;return this.getChildContext||(n=new Set,(r={})[t]=this,this.getChildContext=function(){return r},this.componentWillUnmount=function(){n=null;},this.shouldComponentUpdate=function(e){this.props.value!==e.value&&n.forEach((function(e){e.__e=!0,j(e);}));},this.sub=function(e){n.add(e);var t=e.componentWillUnmount;e.componentWillUnmount=function(){n&&n.delete(e),t&&t.call(e);};}),e.children}};return n.Provider.__=n.Consumer.contextType=n},createFactory:function(e){return g.bind(null,e)},cloneElement:function(e){return tt(e)?B.apply(null,arguments):e},createRef:function(){return {current:null}},Fragment:S,isValidElement:tt,isElement:tt,isFragment:function(e){return tt(e)&&e.type===S},isMemo:function(e){return !!e&&!!e.displayName&&("string"==typeof e.displayName||e.displayName instanceof String)&&e.displayName.startsWith("Memo(")},findDOMNode:function(e){return e&&(e.base||1===e.nodeType&&e)||null},Component:O,PureComponent:Oe,memo:function(e,t){function n(e){var n=this.props.ref,r=n==e.ref;return !r&&n&&(n.call?n(null):n.current=null),t?!t(this.props,e)||!r:Se(this.props,e)}function r(t){return this.shouldComponentUpdate=n,g(e,t)}return r.displayName="Memo("+(e.displayName||e.name)+")",r.prototype.isReactComponent=!0,r.__f=!0,r},forwardRef:function(e){function t(t){if(!("ref"in t))return e(t,null);var n=t.ref;delete t.ref;var r=e(t,n);return t.ref=n,r}return t.$$typeof=Ee,t.render=t,t.prototype.isReactComponent=t.__f=!0,t.displayName="ForwardRef("+(e.displayName||e.name)+")",t},flushSync:function(e,t){return e(t)},unstable_batchedUpdates:function(e,t){return e(t)},StrictMode:S,Suspense:xe,SuspenseList:Ne,lazy:function(e){var t,n,r;function o(o){if(t||(t=e()).then((function(e){n=e.default||e;}),(function(e){r=e;})),r)throw r;if(!n)throw t;return g(n,o)}return o.displayName="Lazy",o.__f=!0,o},__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:et};function lt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function st(e,t,n,r,o,i,a){try{var c=e[i](a),u=c.value;}catch(e){return void n(e)}c.done?t(u):Promise.resolve(u).then(r,o);}function ft(e){return function(){var t=this,n=arguments;return new Promise((function(r,o){var i=e.apply(t,n);function a(e){st(i,r,o,a,c,"next",e);}function c(e){st(i,r,o,a,c,"throw",e);}a(void 0);}))}}function pt(e,n,r){return n=yt(n),function(e,n){if(n&&("object"==t(n)||"function"==typeof n))return n;if(void 0!==n)throw new TypeError("Derived constructors may only return object or undefined");return function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e)}(e,gt()?Reflect.construct(n,r||[],yt(e).constructor):n.apply(e,r))}function mt(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function vt(e,t,n){return Object.defineProperty(e,"prototype",{writable:!1}),e}function ht(e,n,r){return (n=function(e){var n=function(e){if("object"!=t(e)||!e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var r=n.call(e,"string");if("object"!=t(r))return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"==t(n)?n:n+""}(n))in e?Object.defineProperty(e,n,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[n]=r,e}function dt(){return dt=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r]);}return e},dt.apply(null,arguments)}function yt(e){return yt=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)},yt(e)}function _t(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&Et(e,t);}function gt(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})));}catch(e){}return (gt=function(){return !!e})()}function bt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function St(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bt(Object(n),!0).forEach((function(t){ht(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Ot(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.includes(r))continue;n[r]=e[r];}return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.includes(n)||{}.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function wt(){wt=function(){return n};var e,n={},r=Object.prototype,o=r.hasOwnProperty,i=Object.defineProperty||function(e,t,n){e[t]=n.value;},a="function"==typeof Symbol?Symbol:{},c=a.iterator||"@@iterator",u=a.asyncIterator||"@@asyncIterator",l=a.toStringTag||"@@toStringTag";function s(e,t,n){return Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{s({},"");}catch(e){s=function(e,t,n){return e[t]=n};}function f(e,t,n,r){var o=t&&t.prototype instanceof _?t:_,a=Object.create(o.prototype),c=new x(r||[]);return i(a,"_invoke",{value:I(e,n,c)}),a}function p(e,t,n){try{return {type:"normal",arg:e.call(t,n)}}catch(e){return {type:"throw",arg:e}}}n.wrap=f;var m="suspendedStart",v="suspendedYield",h="executing",d="completed",y={};function _(){}function g(){}function b(){}var S={};s(S,c,(function(){return this}));var O=Object.getPrototypeOf,w=O&&O(O(A([])));w&&w!==r&&o.call(w,c)&&(S=w);var E=b.prototype=_.prototype=Object.create(S);function j(e){["next","throw","return"].forEach((function(t){s(e,t,(function(e){return this._invoke(t,e)}));}));}function P(e,n){function r(i,a,c,u){var l=p(e[i],e,a);if("throw"!==l.type){var s=l.arg,f=s.value;return f&&"object"==t(f)&&o.call(f,"__await")?n.resolve(f.__await).then((function(e){r("next",e,c,u);}),(function(e){r("throw",e,c,u);})):n.resolve(f).then((function(e){s.value=e,c(s);}),(function(e){return r("throw",e,c,u)}))}u(l.arg);}var a;i(this,"_invoke",{value:function(e,t){function o(){return new n((function(n,o){r(e,t,n,o);}))}return a=a?a.then(o,o):o()}});}function I(t,n,r){var o=m;return function(i,a){if(o===h)throw Error("Generator is already running");if(o===d){if("throw"===i)throw a;return {value:e,done:!0}}for(r.method=i,r.arg=a;;){var c=r.delegate;if(c){var u=k(c,r);if(u){if(u===y)continue;return u}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if(o===m)throw o=d,r.arg;r.dispatchException(r.arg);}else "return"===r.method&&r.abrupt("return",r.arg);o=h;var l=p(t,n,r);if("normal"===l.type){if(o=r.done?d:v,l.arg===y)continue;return {value:l.arg,done:r.done}}"throw"===l.type&&(o=d,r.method="throw",r.arg=l.arg);}}}function k(t,n){var r=n.method,o=t.iterator[r];if(o===e)return n.delegate=null,"throw"===r&&t.iterator.return&&(n.method="return",n.arg=e,k(t,n),"throw"===n.method)||"return"!==r&&(n.method="throw",n.arg=new TypeError("The iterator does not provide a '"+r+"' method")),y;var i=p(o,t.iterator,n.arg);if("throw"===i.type)return n.method="throw",n.arg=i.arg,n.delegate=null,y;var a=i.arg;return a?a.done?(n[t.resultName]=a.value,n.next=t.nextLoc,"return"!==n.method&&(n.method="next",n.arg=e),n.delegate=null,y):a:(n.method="throw",n.arg=new TypeError("iterator result is not an object"),n.delegate=null,y)}function D(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t);}function C(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t;}function x(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(D,this),this.reset(!0);}function A(n){if(n||""===n){var r=n[c];if(r)return r.call(n);if("function"==typeof n.next)return n;if(!isNaN(n.length)){var i=-1,a=function t(){for(;++i<n.length;)if(o.call(n,i))return t.value=n[i],t.done=!1,t;return t.value=e,t.done=!0,t};return a.next=a}}throw new TypeError(t(n)+" is not iterable")}return g.prototype=b,i(E,"constructor",{value:b,configurable:!0}),i(b,"constructor",{value:g,configurable:!0}),g.displayName=s(b,l,"GeneratorFunction"),n.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return !!t&&(t===g||"GeneratorFunction"===(t.displayName||t.name))},n.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,b):(e.__proto__=b,s(e,l,"GeneratorFunction")),e.prototype=Object.create(E),e},n.awrap=function(e){return {__await:e}},j(P.prototype),s(P.prototype,u,(function(){return this})),n.AsyncIterator=P,n.async=function(e,t,r,o,i){void 0===i&&(i=Promise);var a=new P(f(e,t,r,o),i);return n.isGeneratorFunction(t)?a:a.next().then((function(e){return e.done?e.value:a.next()}))},j(E),s(E,l,"Generator"),s(E,c,(function(){return this})),s(E,"toString",(function(){return "[object Generator]"})),n.keys=function(e){var t=Object(e),n=[];for(var r in t)n.push(r);return n.reverse(),function e(){for(;n.length;){var r=n.pop();if(r in t)return e.value=r,e.done=!1,e}return e.done=!0,e}},n.values=A,x.prototype={constructor:x,reset:function(t){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(C),!t)for(var n in this)"t"===n.charAt(0)&&o.call(this,n)&&!isNaN(+n.slice(1))&&(this[n]=e);},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(t){if(this.done)throw t;var n=this;function r(r,o){return c.type="throw",c.arg=t,n.next=r,o&&(n.method="next",n.arg=e),!!o}for(var i=this.tryEntries.length-1;i>=0;--i){var a=this.tryEntries[i],c=a.completion;if("root"===a.tryLoc)return r("end");if(a.tryLoc<=this.prev){var u=o.call(a,"catchLoc"),l=o.call(a,"finallyLoc");if(u&&l){if(this.prev<a.catchLoc)return r(a.catchLoc,!0);if(this.prev<a.finallyLoc)return r(a.finallyLoc)}else if(u){if(this.prev<a.catchLoc)return r(a.catchLoc,!0)}else {if(!l)throw Error("try statement without catch or finally");if(this.prev<a.finallyLoc)return r(a.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var r=this.tryEntries[n];if(r.tryLoc<=this.prev&&o.call(r,"finallyLoc")&&this.prev<r.finallyLoc){var i=r;break}}i&&("break"===e||"continue"===e)&&i.tryLoc<=t&&t<=i.finallyLoc&&(i=null);var a=i?i.completion:{};return a.type=e,a.arg=t,i?(this.method="next",this.next=i.finallyLoc,y):this.complete(a)},complete:function(e,t){if("throw"===e.type)throw e.arg;return "break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),y},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.finallyLoc===e)return this.complete(n.completion,n.afterLoc),C(n),y}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var n=this.tryEntries[t];if(n.tryLoc===e){var r=n.completion;if("throw"===r.type){var o=r.arg;C(n);}return o}}throw Error("illegal catch attempt")},delegateYield:function(t,n,r){return this.delegate={iterator:A(t),resultName:n,nextLoc:r},"next"===this.method&&(this.arg=e),y}},n}function Et(e,t){return Et=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(e,t){return e.__proto__=t,e},Et(e,t)}function jt(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var n=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=n){var r,o,i,a,c=[],u=!0,l=!1;try{if(i=(n=n.call(e)).next,0===t){if(Object(n)!==n)return;u=!1;}else for(;!(u=(r=i.call(n)).done)&&(c.push(r.value),c.length!==t);u=!0);}catch(e){l=!0,o=e;}finally{try{if(!u&&null!=n.return&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw o}}return c}}(e,t)||It(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Pt(e){return function(e){if(Array.isArray(e))return lt(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||It(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function It(e,t){if(e){if("string"==typeof e)return lt(e,t);var n={}.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?lt(e,t):void 0}}function kt(e){var t="function"==typeof Map?new Map:void 0;return kt=function(e){if(null===e||!function(e){try{return -1!==Function.toString.call(e).indexOf("[native code]")}catch(t){return "function"==typeof e}}(e))return e;if("function"!=typeof e)throw new TypeError("Super expression must either be null or a function");if(void 0!==t){if(t.has(e))return t.get(e);t.set(e,n);}function n(){return function(e,t,n){if(gt())return Reflect.construct.apply(null,arguments);var r=[null];r.push.apply(r,t);var o=new(e.bind.apply(e,r));return n&&Et(o,n.prototype),o}(e,arguments,yt(this).constructor)}return n.prototype=Object.create(e.prototype,{constructor:{value:n,enumerable:!1,writable:!0,configurable:!0}}),Et(n,e)},kt(e)}function Dt(){return ut.createElement("svg",{width:"15",height:"15",className:"DocSearch-Control-Key-Icon"},ut.createElement("path",{d:"M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953",strokeWidth:"1.2",stroke:"currentColor",fill:"none",strokeLinecap:"square"}))}function Ct(){return ut.createElement("svg",{width:"20",height:"20",className:"DocSearch-Search-Icon",viewBox:"0 0 20 20","aria-hidden":"true"},ut.createElement("path",{d:"M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}var xt=["translations"],At="Ctrl",Nt=ut.forwardRef((function(e,t){var n=e.translations,r=void 0===n?{}:n,o=Ot(e,xt),i=r.buttonText,a=void 0===i?"Search":i,c=r.buttonAriaLabel,u=void 0===c?"Search":c,l=jt(re(null),2),s=l[0],f=l[1];ie((function(){"undefined"!=typeof navigator&&(/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform)?f("⌘"):f(At));}),[]);var p=jt(s===At?[At,"Ctrl",ut.createElement(Dt,null)]:["Meta","Command",s],3),m=p[0],v=p[1],h=p[2];return ut.createElement("button",dt({type:"button",className:"DocSearch DocSearch-Button","aria-label":"".concat(u," (").concat(v,"+K)")},o,{ref:t}),ut.createElement("span",{className:"DocSearch-Button-Container"},ut.createElement(Ct,null),ut.createElement("span",{className:"DocSearch-Button-Placeholder"},a)),ut.createElement("span",{className:"DocSearch-Button-Keys"},null!==s&&ut.createElement(ut.Fragment,null,ut.createElement(Tt,{reactsToKey:m},h),ut.createElement(Tt,{reactsToKey:"k"},"K"))))}));function Tt(e){var t=e.reactsToKey,n=e.children,r=jt(re(!1),2),o=r[0],i=r[1];return ie((function(){if(t)return window.addEventListener("keydown",e),window.addEventListener("keyup",n),function(){window.removeEventListener("keydown",e),window.removeEventListener("keyup",n);};function e(e){e.key===t&&i(!0);}function n(e){e.key!==t&&"Meta"!==e.key||i(!1);}}),[t]),ut.createElement("kbd",{className:o?"DocSearch-Button-Key DocSearch-Button-Key--pressed":"DocSearch-Button-Key"},n)}function Rt(e,t){var n=void 0;return function(){for(var r=arguments.length,o=new Array(r),i=0;i<r;i++)o[i]=arguments[i];n&&clearTimeout(n),n=setTimeout((function(){return e.apply(void 0,o)}),t);}}function Lt(e){return e.reduce((function(e,t){return e.concat(t)}),[])}var qt=0;function Mt(e){return 0===e.collections.length?0:e.collections.reduce((function(e,t){return e+t.items.length}),0)}function Ht(e){return e!==Object(e)}function Ut(e,t){if(e===t)return !0;if(Ht(e)||Ht(t)||"function"==typeof e||"function"==typeof t)return e===t;if(Object.keys(e).length!==Object.keys(t).length)return !1;for(var n=0,r=Object.keys(e);n<r.length;n++){var o=r[n];if(!(o in t))return !1;if(!Ut(e[o],t[o]))return !1}return !0}var Ft=function(){},Bt=[{segment:"autocomplete-core",version:"1.17.7"}];function Vt(e){var t=e.item,n=e.items,r=void 0===n?[]:n;return {index:t.__autocomplete_indexName,items:[t],positions:[1+r.findIndex((function(e){return e.objectID===t.objectID}))],queryID:t.__autocomplete_queryID,algoliaSource:["autocomplete"]}}function Kt(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var Wt=["items"],zt=["items"];function Jt(e){return Jt="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Jt(e)}function Qt(e){return function(e){if(Array.isArray(e))return $t(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return $t(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$t(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zt(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function Gt(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Yt(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Gt(Object(n),!0).forEach((function(t){Xt(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Gt(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Xt(e,t,n){return (t=function(e){var t=function(e){if("object"!==Jt(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Jt(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Jt(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function en(e){return e.map((function(e){var t=e.items,n=Zt(e,Wt);return Yt(Yt({},n),{},{objectIDs:(null==t?void 0:t.map((function(e){return e.objectID})))||n.objectIDs})}))}function tn(e){var t=e.items.reduce((function(e,t){var n;return e[t.__autocomplete_indexName]=(null!==(n=e[t.__autocomplete_indexName])&&void 0!==n?n:[]).concat(t),e}),{});return Object.keys(t).map((function(e){return {index:e,items:t[e],algoliaSource:["autocomplete"]}}))}function nn(e){return e.objectID&&e.__autocomplete_indexName&&e.__autocomplete_queryID}function rn(e){return rn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},rn(e)}function on(e){return function(e){if(Array.isArray(e))return an(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return an(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?an(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function an(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function cn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function un(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?cn(Object(n),!0).forEach((function(t){ln(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):cn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function ln(e,t,n){return (t=function(e){var t=function(e){if("object"!==rn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==rn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===rn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var sn="2.15.0",fn="https://cdn.jsdelivr.net/npm/search-insights@".concat(sn,"/dist/search-insights.min.js"),pn=Rt((function(e){var t=e.onItemsChange,n=e.items,r=e.insights,o=e.state;t({insights:r,insightsEvents:tn({items:n}).map((function(e){return un({eventName:"Items Viewed"},e)})),state:o});}),400);function mn(e){var t=function(e){return un({onItemsChange:function(e){var t=e.insights,n=e.insightsEvents,r=e.state;t.viewedObjectIDs.apply(t,on(n.map((function(e){return un(un({},e),{},{algoliaSource:vn(e.algoliaSource,r.context)})}))));},onSelect:function(e){var t=e.insights,n=e.insightsEvents,r=e.state;t.clickedObjectIDsAfterSearch.apply(t,on(n.map((function(e){return un(un({},e),{},{algoliaSource:vn(e.algoliaSource,r.context)})}))));},onActive:Ft,__autocomplete_clickAnalytics:!0},e)}(e),n=t.insightsClient,r=t.insightsInitParams,o=t.onItemsChange,i=t.onSelect,a=t.onActive,c=t.__autocomplete_clickAnalytics,u=n;if(n||"undefined"!=typeof window&&function(){var e={window:window}.window,t=e.AlgoliaAnalyticsObject||"aa";"string"==typeof t&&(u=e[t]),u||(e.AlgoliaAnalyticsObject=t,e[t]||(e[t]=function(){e[t].queue||(e[t].queue=[]);for(var n=arguments.length,r=new Array(n),o=0;o<n;o++)r[o]=arguments[o];e[t].queue.push(r);}),e[t].version=sn,u=e[t],function(e){var t="[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";try{var n=e.document.createElement("script");n.async=!0,n.src=fn,n.onerror=function(){console.error(t);},document.body.appendChild(n);}catch(e){console.error(t);}}(e));}(),!u)return {};r&&u("init",un({partial:!0},r));var l=function(e){var t,n,r,o=(t=function(e){return function(e){if(Array.isArray(e))return e}(e)||function(e){var t=null==e?null:"undefined"!=typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(null!=t){var n,r,o,i,a=[],c=!0,u=!1;try{for(o=(t=t.call(e)).next;!(c=(n=o.call(t)).done)&&(a.push(n.value),2!==a.length);c=!0);}catch(e){u=!0,r=e;}finally{try{if(!c&&null!=t.return&&(i=t.return(),Object(i)!==i))return}finally{if(u)throw r}}return a}}(e)||function(e){if(e){if("string"==typeof e)return Kt(e,2);var t=Object.prototype.toString.call(e).slice(8,-1);return "Object"===t&&e.constructor&&(t=e.constructor.name),"Map"===t||"Set"===t?Array.from(e):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?Kt(e,2):void 0}}(e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}((e.version||"").split(".").map(Number)),n=t[0],r=t[1],n>=3||2===n&&r>=4||1===n&&r>=10);function i(t,n,r){if(o&&void 0!==r){var i=r[0].__autocomplete_algoliaCredentials,a={"X-Algolia-Application-Id":i.appId,"X-Algolia-API-Key":i.apiKey};e.apply(void 0,[t].concat(Qt(n),[{headers:a}]));}else e.apply(void 0,[t].concat(Qt(n)));}return {init:function(t,n){e("init",{appId:t,apiKey:n});},setAuthenticatedUserToken:function(t){e("setAuthenticatedUserToken",t);},setUserToken:function(t){e("setUserToken",t);},clickedObjectIDsAfterSearch:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length>0&&i("clickedObjectIDsAfterSearch",en(t),t[0].items);},clickedObjectIDs:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length>0&&i("clickedObjectIDs",en(t),t[0].items);},clickedFilters:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.length>0&&e.apply(void 0,["clickedFilters"].concat(n));},convertedObjectIDsAfterSearch:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length>0&&i("convertedObjectIDsAfterSearch",en(t),t[0].items);},convertedObjectIDs:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length>0&&i("convertedObjectIDs",en(t),t[0].items);},convertedFilters:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.length>0&&e.apply(void 0,["convertedFilters"].concat(n));},viewedObjectIDs:function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];t.length>0&&t.reduce((function(e,t){var n=t.items,r=Zt(t,zt);return [].concat(Qt(e),Qt(function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:20,n=[],r=0;r<e.objectIDs.length;r+=t)n.push(Yt(Yt({},e),{},{objectIDs:e.objectIDs.slice(r,r+t)}));return n}(Yt(Yt({},r),{},{objectIDs:(null==n?void 0:n.map((function(e){return e.objectID})))||r.objectIDs})).map((function(e){return {items:n,payload:e}}))))}),[]).forEach((function(e){var t=e.items;return i("viewedObjectIDs",[e.payload],t)}));},viewedFilters:function(){for(var t=arguments.length,n=new Array(t),r=0;r<t;r++)n[r]=arguments[r];n.length>0&&e.apply(void 0,["viewedFilters"].concat(n));}}}(u),s={current:[]},f=Rt((function(e){var t=e.state;if(t.isOpen){var n=t.collections.reduce((function(e,t){return [].concat(on(e),on(t.items))}),[]).filter(nn);Ut(s.current.map((function(e){return e.objectID})),n.map((function(e){return e.objectID})))||(s.current=n,n.length>0&&pn({onItemsChange:o,items:n,insights:l,state:t}));}}),0);return {name:"aa.algoliaInsightsPlugin",subscribe:function(e){var t=e.setContext,n=e.onSelect,r=e.onActive,o=!1;function s(e){t({algoliaInsightsPlugin:{__algoliaSearchParameters:un(un({},c?{clickAnalytics:!0}:{}),e?{userToken:hn(e)}:{}),insights:l}});}u("addAlgoliaAgent","insights-plugin"),s(),u("onUserTokenChange",(function(e){o||s(e);})),u("getUserToken",null,(function(e,t){o||s(t);})),u("onAuthenticatedUserTokenChange",(function(e){e?(o=!0,s(e)):(o=!1,u("getUserToken",null,(function(e,t){return s(t)})));})),u("getAuthenticatedUserToken",null,(function(e,t){t&&(o=!0,s(t));})),n((function(e){var t=e.item,n=e.state,r=e.event,o=e.source;nn(t)&&i({state:n,event:r,insights:l,item:t,insightsEvents:[un({eventName:"Item Selected"},Vt({item:t,items:o.getItems().filter(nn)}))]});})),r((function(e){var t=e.item,n=e.source,r=e.state,o=e.event;nn(t)&&a({state:r,event:o,insights:l,item:t,insightsEvents:[un({eventName:"Item Active"},Vt({item:t,items:n.getItems().filter(nn)}))]});}));},onStateChange:function(e){var t=e.state;f({state:t});},__autocomplete_pluginOptions:e}}function vn(){var e,t=arguments.length>1?arguments[1]:void 0;return [].concat(on(arguments.length>0&&void 0!==arguments[0]?arguments[0]:[]),["autocomplete-internal"],on(null!==(e=t.algoliaInsightsPlugin)&&void 0!==e&&e.__automaticInsights?["autocomplete-automatic"]:[]))}function hn(e){return "number"==typeof e?e.toString():e}function dn(e,t){var n=t;return {then:function(t,r){return dn(e.then(_n(t,n,e),_n(r,n,e)),n)},catch:function(t){return dn(e.catch(_n(t,n,e)),n)},finally:function(t){return t&&n.onCancelList.push(t),dn(e.finally(_n(t&&function(){return n.onCancelList=[],t()},n,e)),n)},cancel:function(){n.isCanceled=!0;var e=n.onCancelList;n.onCancelList=[],e.forEach((function(e){e();}));},isCanceled:function(){return !0===n.isCanceled}}}function yn(e){return dn(e,{isCanceled:!1,onCancelList:[]})}function _n(e,t,n){return e?function(n){return t.isCanceled?n:e(n)}:n}function gn(e,t,n,r){if(!n)return null;if(e<0&&(null===t||null!==r&&0===t))return n+e;var o=(null===t?-1:t)+e;return o<=-1||o>=n?null===r?null:0:o}function bn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Sn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?bn(Object(n),!0).forEach((function(t){On(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):bn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function On(e,t,n){return (t=function(e){var t=function(e){if("object"!==wn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==wn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===wn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function wn(e){return wn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},wn(e)}function En(e){var t=function(e){var t=e.collections.map((function(e){return e.items.length})).reduce((function(e,t,n){var r=(e[n-1]||0)+t;return e.push(r),e}),[]).reduce((function(t,n){return n<=e.activeItemId?t+1:t}),0);return e.collections[t]}(e);if(!t)return null;var n=t.items[function(e){for(var t=e.state,n=e.collection,r=!1,o=0,i=0;!1===r;){var a=t.collections[o];if(a===n){r=!0;break}i+=a.items.length,o++;}return t.activeItemId-i}({state:e,collection:t})],r=t.source;return {item:n,itemInputValue:r.getItemInputValue({item:n,state:e}),itemUrl:r.getItemUrl({item:n,state:e}),source:r}}function jn(e,t,n){return [e,null==n?void 0:n.sourceId,t].filter(Boolean).join("-").replace(/\s/g,"")}var Pn=/((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;function In(e){return e.nativeEvent||e}function kn(e){return kn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},kn(e)}function Dn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Cn(e,t,n){return (t=function(e){var t=function(e){if("object"!==kn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==kn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===kn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function xn(e){return xn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},xn(e)}function An(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Nn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?An(Object(n),!0).forEach((function(t){Tn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):An(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Tn(e,t,n){return (t=function(e){var t=function(e){if("object"!==xn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==xn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===xn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Rn(e){return Rn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Rn(e)}function Ln(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function qn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Mn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?qn(Object(n),!0).forEach((function(t){Hn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Hn(e,t,n){return (t=function(e){var t=function(e){if("object"!==Rn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Rn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Rn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Un(e){return Un="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Un(e)}function Fn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Bn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Fn(Object(n),!0).forEach((function(t){Vn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Fn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Vn(e,t,n){return (t=function(e){var t=function(e){if("object"!==Un(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Un(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Un(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Kn(e){return Kn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Kn(e)}function Wn(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function zn(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Wn(Object(n),!0).forEach((function(t){Jn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Wn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Jn(e,t,n){return (t=function(e){var t=function(e){if("object"!==Kn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Kn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Kn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Qn(e){return function(e){if(Array.isArray(e))return $n(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return $n(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?$n(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function $n(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function Zn(e){return Boolean(e.execute)}function Gn(e){var t=e.reduce((function(e,t){if(!Zn(t))return e.push(t),e;var n=t.searchClient,r=t.execute,o=t.requesterId,i=t.requests,a=e.find((function(e){return Zn(t)&&Zn(e)&&e.searchClient===n&&Boolean(o)&&e.requesterId===o}));if(a){var c;(c=a.items).push.apply(c,Qn(i));}else {var u={execute:r,requesterId:o,items:i,searchClient:n};e.push(u);}return e}),[]).map((function(e){if(!Zn(e))return Promise.resolve(e);var t=e,n=t.execute,r=t.items;return n({searchClient:t.searchClient,requests:r})}));return Promise.all(t).then((function(e){return Lt(e)}))}function Yn(e){return Yn="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Yn(e)}var Xn=["event","nextState","props","query","refresh","store"];function er(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function tr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?er(Object(n),!0).forEach((function(t){nr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):er(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function nr(e,t,n){return (t=function(e){var t=function(e){if("object"!==Yn(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Yn(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Yn(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var rr,or,ir,ar=null,cr=(rr=-1,or=-1,ir=void 0,function(e){var t=++rr;return Promise.resolve(e).then((function(e){return ir&&t<or?ir:(or=t,ir=e,e)}))});function ur(e){var t=e.event,n=e.nextState,r=void 0===n?{}:n,o=e.props,i=e.query,a=e.refresh,c=e.store,u=function(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}(e,Xn);ar&&o.environment.clearTimeout(ar);var l=u.setCollections,s=u.setIsOpen,f=u.setQuery,p=u.setActiveItemId,m=u.setStatus,v=u.setContext;if(f(i),p(o.defaultActiveItemId),!i&&!1===o.openOnFocus){var h,d=c.getState().collections.map((function(e){return tr(tr({},e),{},{items:[]})}));m("idle"),l(d),s(null!==(h=r.isOpen)&&void 0!==h?h:o.shouldPanelOpen({state:c.getState()}));var y=yn(cr(d).then((function(){return Promise.resolve()})));return c.pendingRequests.add(y)}m("loading"),ar=o.environment.setTimeout((function(){m("stalled");}),o.stallThreshold);var _=yn(cr(o.getSources(tr({query:i,refresh:a,state:c.getState()},u)).then((function(e){return Promise.all(e.map((function(e){return Promise.resolve(e.getItems(tr({query:i,refresh:a,state:c.getState()},u))).then((function(t){return function(e,t,n){if(o=e,Boolean(null==o?void 0:o.execute)){var r="algolia"===e.requesterId?Object.assign.apply(Object,[{}].concat(Qn(Object.keys(n.context).map((function(e){var t;return null===(t=n.context[e])||void 0===t?void 0:t.__algoliaSearchParameters}))))):{};return zn(zn({},e),{},{requests:e.queries.map((function(n){return {query:"algolia"===e.requesterId?zn(zn({},n),{},{params:zn(zn({},r),n.params)}):n,sourceId:t,transformResponse:e.transformResponse}}))})}var o;return {items:e,sourceId:t}}(t,e.sourceId,c.getState())}))}))).then(Gn).then((function(t){var n,r=t.some((function(e){return function(e){return !Array.isArray(e)&&Boolean(null==e?void 0:e._automaticInsights)}(e.items)}));return r&&v({algoliaInsightsPlugin:tr(tr({},(null===(n=c.getState().context)||void 0===n?void 0:n.algoliaInsightsPlugin)||{}),{},{__automaticInsights:r})}),function(e,t,n){return t.map((function(t){var r,o=e.filter((function(e){return e.sourceId===t.sourceId})),i=o.map((function(e){return e.items})),a=o[0].transformResponse,c=a?a({results:r=i,hits:r.map((function(e){return e.hits})).filter(Boolean),facetHits:r.map((function(e){var t;return null===(t=e.facetHits)||void 0===t?void 0:t.map((function(e){return {label:e.value,count:e.count,_highlightResult:{label:{value:e.highlighted}}}}))})).filter(Boolean)}):i;return t.onResolve({source:t,results:i,items:c,state:n.getState()}),c.every(Boolean),'The `getItems` function from source "'.concat(t.sourceId,'" must return an array of items but returned ').concat(JSON.stringify(void 0),".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems"),{source:t,items:c}}))}(t,e,c)})).then((function(e){return function(e){var t=e.props,n=e.state,r=e.collections.reduce((function(e,t){return Bn(Bn({},e),{},Vn({},t.source.sourceId,Bn(Bn({},t.source),{},{getItems:function(){return Lt(t.items)}})))}),{}),o=t.plugins.reduce((function(e,t){return t.reshape?t.reshape(e):e}),{sourcesBySourceId:r,state:n}).sourcesBySourceId;return Lt(t.reshape({sourcesBySourceId:o,sources:Object.values(o),state:n})).filter(Boolean).map((function(e){return {source:e,items:e.getItems()}}))}({collections:e,props:o,state:c.getState()})}))})))).then((function(e){var n;m("idle"),l(e);var f=o.shouldPanelOpen({state:c.getState()});s(null!==(n=r.isOpen)&&void 0!==n?n:o.openOnFocus&&!i&&f||f);var p=En(c.getState());if(null!==c.getState().activeItemId&&p){var v=p.item,h=p.itemInputValue,d=p.itemUrl,y=p.source;y.onActive(tr({event:t,item:v,itemInputValue:h,itemUrl:d,refresh:a,source:y,state:c.getState()},u));}})).finally((function(){m("idle"),ar&&o.environment.clearTimeout(ar);}));return c.pendingRequests.add(_)}function lr(e){return lr="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},lr(e)}var sr=["event","props","refresh","store"];function fr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function pr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?fr(Object(n),!0).forEach((function(t){mr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):fr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function mr(e,t,n){return (t=function(e){var t=function(e){if("object"!==lr(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==lr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===lr(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function vr(e){return vr="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},vr(e)}var hr=["props","refresh","store"],dr=["inputElement","formElement","panelElement"],yr=["inputElement"],_r=["inputElement","maxLength"],gr=["source"],br=["item","source"];function Sr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Or(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Sr(Object(n),!0).forEach((function(t){wr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Sr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function wr(e,t,n){return (t=function(e){var t=function(e){if("object"!==vr(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==vr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===vr(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Er(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}function jr(e){return jr="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},jr(e)}function Pr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Ir(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Pr(Object(n),!0).forEach((function(t){kr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Pr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function kr(e,t,n){return (t=function(e){var t=function(e){if("object"!==jr(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==jr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===jr(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Dr(e){var t,n,r,o,i=e.plugins,a=e.options,c=null===(t=((null===(n=a.__autocomplete_metadata)||void 0===n?void 0:n.userAgents)||[])[0])||void 0===t?void 0:t.segment,u=c?kr({},c,Object.keys((null===(r=a.__autocomplete_metadata)||void 0===r?void 0:r.options)||{})):{};return {plugins:i.map((function(e){return {name:e.name,options:Object.keys(e.__autocomplete_pluginOptions||[])}})),options:Ir({"autocomplete-core":Object.keys(a)},u),ua:Bt.concat((null===(o=a.__autocomplete_metadata)||void 0===o?void 0:o.userAgents)||[])}}function Cr(e){var t,n=e.state;return !1===n.isOpen||null===n.activeItemId?null:(null===(t=En(n))||void 0===t?void 0:t.itemInputValue)||null}function xr(e){return xr="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},xr(e)}function Ar(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Nr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Ar(Object(n),!0).forEach((function(t){Tr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Ar(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Tr(e,t,n){return (t=function(e){var t=function(e){if("object"!==xr(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==xr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===xr(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var Rr=function(e,t){switch(t.type){case"setActiveItemId":case"mousemove":return Nr(Nr({},e),{},{activeItemId:t.payload});case"setQuery":return Nr(Nr({},e),{},{query:t.payload,completion:null});case"setCollections":return Nr(Nr({},e),{},{collections:t.payload});case"setIsOpen":return Nr(Nr({},e),{},{isOpen:t.payload});case"setStatus":return Nr(Nr({},e),{},{status:t.payload});case"setContext":return Nr(Nr({},e),{},{context:Nr(Nr({},e.context),t.payload)});case"ArrowDown":var n=Nr(Nr({},e),{},{activeItemId:t.payload.hasOwnProperty("nextActiveItemId")?t.payload.nextActiveItemId:gn(1,e.activeItemId,Mt(e),t.props.defaultActiveItemId)});return Nr(Nr({},n),{},{completion:Cr({state:n})});case"ArrowUp":var r=Nr(Nr({},e),{},{activeItemId:gn(-1,e.activeItemId,Mt(e),t.props.defaultActiveItemId)});return Nr(Nr({},r),{},{completion:Cr({state:r})});case"Escape":return e.isOpen?Nr(Nr({},e),{},{activeItemId:null,isOpen:!1,completion:null}):Nr(Nr({},e),{},{activeItemId:null,query:"",status:"idle",collections:[]});case"submit":return Nr(Nr({},e),{},{activeItemId:null,isOpen:!1,status:"idle"});case"reset":return Nr(Nr({},e),{},{activeItemId:!0===t.props.openOnFocus?t.props.defaultActiveItemId:null,status:"idle",completion:null,query:""});case"focus":return Nr(Nr({},e),{},{activeItemId:t.props.defaultActiveItemId,isOpen:(t.props.openOnFocus||Boolean(e.query))&&t.props.shouldPanelOpen({state:e})});case"blur":return t.props.debug?e:Nr(Nr({},e),{},{isOpen:!1,activeItemId:null});case"mouseleave":return Nr(Nr({},e),{},{activeItemId:t.props.defaultActiveItemId});default:return "The reducer action ".concat(JSON.stringify(t.type)," is not supported."),e}};function Lr(e){return Lr="function"==typeof Symbol&&"symbol"==t(Symbol.iterator)?function(e){return t(e)}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":t(e)},Lr(e)}function qr(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r);}return n}function Mr(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?qr(Object(n),!0).forEach((function(t){Hr(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):qr(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}function Hr(e,t,n){return (t=function(e){var t=function(e){if("object"!==Lr(e)||null===e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var n=t.call(e,"string");if("object"!==Lr(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return "symbol"===Lr(t)?t:String(t)}(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Ur(e){var t=[],n=function(e,t){var n,r="undefined"!=typeof window?window:{},o=e.plugins||[];return Mn(Mn({debug:!1,openOnFocus:!1,enterKeyHint:void 0,ignoreCompositionEvents:!1,placeholder:"",autoFocus:!1,defaultActiveItemId:null,stallThreshold:300,insights:void 0,environment:r,shouldPanelOpen:function(e){return Mt(e.state)>0},reshape:function(e){return e.sources}},e),{},{id:null!==(n=e.id)&&void 0!==n?n:"autocomplete-".concat(qt++),plugins:o,initialState:Mn({activeItemId:null,query:"",completion:null,collections:[],isOpen:!1,status:"idle",context:{}},e.initialState),onStateChange:function(t){var n;null===(n=e.onStateChange)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onStateChange)||void 0===n?void 0:n.call(e,t)}));},onSubmit:function(t){var n;null===(n=e.onSubmit)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onSubmit)||void 0===n?void 0:n.call(e,t)}));},onReset:function(t){var n;null===(n=e.onReset)||void 0===n||n.call(e,t),o.forEach((function(e){var n;return null===(n=e.onReset)||void 0===n?void 0:n.call(e,t)}));},getSources:function(n){return Promise.all([].concat(function(e){return function(e){if(Array.isArray(e))return Ln(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(e){if("string"==typeof e)return Ln(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);return "Object"===n&&e.constructor&&(n=e.constructor.name),"Map"===n||"Set"===n?Array.from(e):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?Ln(e,t):void 0}}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}(o.map((function(e){return e.getSources}))),[e.getSources]).filter(Boolean).map((function(e){return function(e,t){var n=[];return Promise.resolve(e(t)).then((function(e){return Promise.all(e.filter((function(e){return Boolean(e)})).map((function(e){if(e.sourceId,n.includes(e.sourceId))throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e.sourceId)," is not unique."));n.push(e.sourceId);var t={getItemInputValue:function(e){return e.state.query},getItemUrl:function(){},onSelect:function(e){(0, e.setIsOpen)(!1);},onActive:Ft,onResolve:Ft};Object.keys(t).forEach((function(e){t[e].__default=!0;}));var r=Sn(Sn({},t),e);return Promise.resolve(r)})))}))}(e,n)}))).then((function(e){return Lt(e)})).then((function(e){return e.map((function(e){return Mn(Mn({},e),{},{onSelect:function(n){e.onSelect(n),t.forEach((function(e){var t;return null===(t=e.onSelect)||void 0===t?void 0:t.call(e,n)}));},onActive:function(n){e.onActive(n),t.forEach((function(e){var t;return null===(t=e.onActive)||void 0===t?void 0:t.call(e,n)}));},onResolve:function(n){e.onResolve(n),t.forEach((function(e){var t;return null===(t=e.onResolve)||void 0===t?void 0:t.call(e,n)}));}})}))}))},navigator:Mn({navigate:function(e){var t=e.itemUrl;r.location.assign(t);},navigateNewTab:function(e){var t=e.itemUrl,n=r.open(t,"_blank","noopener");null==n||n.focus();},navigateNewWindow:function(e){var t=e.itemUrl;r.open(t,"_blank","noopener");}},e.navigator)})}(e,t),r=function(e,t,n){var r,o=t.initialState;return {getState:function(){return o},dispatch:function(r,i){var a=function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?Dn(Object(n),!0).forEach((function(t){Cn(e,t,n[t]);})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Dn(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t));}));}return e}({},o);o=e(o,{type:r,props:t,payload:i}),n({state:o,prevState:a});},pendingRequests:(r=[],{add:function(e){return r.push(e),e.finally((function(){r=r.filter((function(t){return t!==e}));}))},cancelAll:function(){r.forEach((function(e){return e.cancel()}));},isEmpty:function(){return 0===r.length}})}}(Rr,n,(function(e){var t,r,i=e.prevState,l=e.state;if(n.onStateChange(Mr({prevState:i,state:l,refresh:a,navigator:n.navigator},o)),!u()&&null!==(t=l.context)&&void 0!==t&&null!==(r=t.algoliaInsightsPlugin)&&void 0!==r&&r.__automaticInsights&&!1!==n.insights){var s=mn({__autocomplete_clickAnalytics:!1});n.plugins.push(s),c([s]);}})),o=function(e){var t=e.store;return {setActiveItemId:function(e){t.dispatch("setActiveItemId",e);},setQuery:function(e){t.dispatch("setQuery",e);},setCollections:function(e){var n=0,r=e.map((function(e){return Nn(Nn({},e),{},{items:Lt(e.items).map((function(e){return Nn(Nn({},e),{},{__autocomplete_id:n++})}))})}));t.dispatch("setCollections",r);},setIsOpen:function(e){t.dispatch("setIsOpen",e);},setStatus:function(e){t.dispatch("setStatus",e);},setContext:function(e){t.dispatch("setContext",e);}}}({store:r}),i=function(e){var t=e.props,n=e.refresh,r=e.store,o=Er(e,hr);return {getEnvironmentProps:function(e){var n=e.inputElement,o=e.formElement,i=e.panelElement;function a(e){!r.getState().isOpen&&r.pendingRequests.isEmpty()||e.target===n||!1===[o,i].some((function(t){return (n=t)===(r=e.target)||n.contains(r);var n,r;}))&&(r.dispatch("blur",null),t.debug||r.pendingRequests.cancelAll());}return Or({onTouchStart:a,onMouseDown:a,onTouchMove:function(e){!1!==r.getState().isOpen&&n===t.environment.document.activeElement&&e.target!==n&&n.blur();}},Er(e,dr))},getRootProps:function(e){return Or({role:"combobox","aria-expanded":r.getState().isOpen,"aria-haspopup":"listbox","aria-controls":r.getState().isOpen?r.getState().collections.map((function(e){var n=e.source;return jn(t.id,"list",n)})).join(" "):void 0,"aria-labelledby":jn(t.id,"label")},e)},getFormProps:function(e){return e.inputElement,Or({action:"",noValidate:!0,role:"search",onSubmit:function(i){var a;i.preventDefault(),t.onSubmit(Or({event:i,refresh:n,state:r.getState()},o)),r.dispatch("submit",null),null===(a=e.inputElement)||void 0===a||a.blur();},onReset:function(i){var a;i.preventDefault(),t.onReset(Or({event:i,refresh:n,state:r.getState()},o)),r.dispatch("reset",null),null===(a=e.inputElement)||void 0===a||a.focus();}},Er(e,yr))},getLabelProps:function(e){return Or({htmlFor:jn(t.id,"input"),id:jn(t.id,"label")},e)},getInputProps:function(e){var i;function a(e){(t.openOnFocus||Boolean(r.getState().query))&&ur(Or({event:e,props:t,query:r.getState().completion||r.getState().query,refresh:n,store:r},o)),r.dispatch("focus",null);}var c=e||{};c.inputElement;var u=c.maxLength,l=void 0===u?512:u,s=Er(c,_r),f=En(r.getState()),p=function(e){return Boolean(e&&e.match(Pn))}((null===(i=t.environment.navigator)||void 0===i?void 0:i.userAgent)||""),m=t.enterKeyHint||(null!=f&&f.itemUrl&&!p?"go":"search");return Or({"aria-autocomplete":"both","aria-activedescendant":r.getState().isOpen&&null!==r.getState().activeItemId?jn(t.id,"item-".concat(r.getState().activeItemId),null==f?void 0:f.source):void 0,"aria-controls":r.getState().isOpen?r.getState().collections.map((function(e){var n=e.source;return jn(t.id,"list",n)})).join(" "):void 0,"aria-labelledby":jn(t.id,"label"),value:r.getState().completion||r.getState().query,id:jn(t.id,"input"),autoComplete:"off",autoCorrect:"off",autoCapitalize:"off",enterKeyHint:m,spellCheck:"false",autoFocus:t.autoFocus,placeholder:t.placeholder,maxLength:l,type:"search",onChange:function(e){var i=e.currentTarget.value;t.ignoreCompositionEvents&&In(e).isComposing?o.setQuery(i):ur(Or({event:e,props:t,query:i.slice(0,l),refresh:n,store:r},o));},onCompositionEnd:function(e){ur(Or({event:e,props:t,query:e.currentTarget.value.slice(0,l),refresh:n,store:r},o));},onKeyDown:function(e){In(e).isComposing||function(e){var t=e.event,n=e.props,r=e.refresh,o=e.store,i=function(e,t){if(null==e)return {};var n,r,o=function(e,t){if(null==e)return {};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n]);}return o}(e,sr);if("ArrowUp"===t.key||"ArrowDown"===t.key){var a=function(){var e=En(o.getState()),t=n.environment.document.getElementById(jn(n.id,"item-".concat(o.getState().activeItemId),null==e?void 0:e.source));t&&(t.scrollIntoViewIfNeeded?t.scrollIntoViewIfNeeded(!1):t.scrollIntoView(!1));},c=function(){var e=En(o.getState());if(null!==o.getState().activeItemId&&e){var n=e.item,a=e.itemInputValue,c=e.itemUrl,u=e.source;u.onActive(pr({event:t,item:n,itemInputValue:a,itemUrl:c,refresh:r,source:u,state:o.getState()},i));}};t.preventDefault(),!1===o.getState().isOpen&&(n.openOnFocus||Boolean(o.getState().query))?ur(pr({event:t,props:n,query:o.getState().query,refresh:r,store:o},i)).then((function(){o.dispatch(t.key,{nextActiveItemId:n.defaultActiveItemId}),c(),setTimeout(a,0);})):(o.dispatch(t.key,{}),c(),a());}else if("Escape"===t.key)t.preventDefault(),o.dispatch(t.key,null),o.pendingRequests.cancelAll();else if("Tab"===t.key)o.dispatch("blur",null),o.pendingRequests.cancelAll();else if("Enter"===t.key){if(null===o.getState().activeItemId||o.getState().collections.every((function(e){return 0===e.items.length})))return void(n.debug||o.pendingRequests.cancelAll());t.preventDefault();var u=En(o.getState()),l=u.item,s=u.itemInputValue,f=u.itemUrl,p=u.source;if(t.metaKey||t.ctrlKey)void 0!==f&&(p.onSelect(pr({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i)),n.navigator.navigateNewTab({itemUrl:f,item:l,state:o.getState()}));else if(t.shiftKey)void 0!==f&&(p.onSelect(pr({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i)),n.navigator.navigateNewWindow({itemUrl:f,item:l,state:o.getState()}));else if(t.altKey);else {if(void 0!==f)return p.onSelect(pr({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i)),void n.navigator.navigate({itemUrl:f,item:l,state:o.getState()});ur(pr({event:t,nextState:{isOpen:!1},props:n,query:s,refresh:r,store:o},i)).then((function(){p.onSelect(pr({event:t,item:l,itemInputValue:s,itemUrl:f,refresh:r,source:p,state:o.getState()},i));}));}}}(Or({event:e,props:t,refresh:n,store:r},o));},onFocus:a,onBlur:Ft,onClick:function(n){e.inputElement!==t.environment.document.activeElement||r.getState().isOpen||a(n);}},s)},getPanelProps:function(e){return Or({onMouseDown:function(e){e.preventDefault();},onMouseLeave:function(){r.dispatch("mouseleave",null);}},e)},getListProps:function(e){var n=e||{},r=n.source,o=Er(n,gr);return Or({role:"listbox","aria-labelledby":jn(t.id,"label"),id:jn(t.id,"list",r)},o)},getItemProps:function(e){var i=e.item,a=e.source,c=Er(e,br);return Or({id:jn(t.id,"item-".concat(i.__autocomplete_id),a),role:"option","aria-selected":r.getState().activeItemId===i.__autocomplete_id,onMouseMove:function(e){if(i.__autocomplete_id!==r.getState().activeItemId){r.dispatch("mousemove",i.__autocomplete_id);var t=En(r.getState());if(null!==r.getState().activeItemId&&t){var a=t.item,c=t.itemInputValue,u=t.itemUrl,l=t.source;l.onActive(Or({event:e,item:a,itemInputValue:c,itemUrl:u,refresh:n,source:l,state:r.getState()},o));}}},onMouseDown:function(e){e.preventDefault();},onClick:function(e){var c=a.getItemInputValue({item:i,state:r.getState()}),u=a.getItemUrl({item:i,state:r.getState()});(u?Promise.resolve():ur(Or({event:e,nextState:{isOpen:!1},props:t,query:c,refresh:n,store:r},o))).then((function(){a.onSelect(Or({event:e,item:i,itemInputValue:c,itemUrl:u,refresh:n,source:a,state:r.getState()},o));}));}},c)}}}(Mr({props:n,refresh:a,store:r,navigator:n.navigator},o));function a(){return ur(Mr({event:new Event("input"),nextState:{isOpen:r.getState().isOpen},props:n,navigator:n.navigator,query:r.getState().query,refresh:a,store:r},o))}function c(e){e.forEach((function(e){var r;return null===(r=e.subscribe)||void 0===r?void 0:r.call(e,Mr(Mr({},o),{},{navigator:n.navigator,refresh:a,onSelect:function(e){t.push({onSelect:e});},onActive:function(e){t.push({onActive:e});},onResolve:function(e){t.push({onResolve:e});}}))}));}function u(){return n.plugins.some((function(e){return "aa.algoliaInsightsPlugin"===e.name}))}if(n.insights&&!u()){var l="boolean"==typeof n.insights?{}:n.insights;n.plugins.push(mn(l));}return c(n.plugins),function(e){var t,n,r=e.metadata,o=e.environment;if(null===(t=o.navigator)||void 0===t||null===(n=t.userAgent)||void 0===n?void 0:n.includes("Algolia Crawler")){var i=o.document.createElement("meta"),a=o.document.querySelector("head");i.name="algolia:metadata",setTimeout((function(){i.content=JSON.stringify(r),a.appendChild(i);}),0);}}({metadata:Dr({plugins:n.plugins,options:e}),environment:n.environment}),Mr(Mr({refresh:a,navigator:n.navigator},i),o)}function Fr(e){var t=e.translations,n=(void 0===t?{}:t).searchByText,r=void 0===n?"Search by":n;return ut.createElement("a",{href:"https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname,"&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"),target:"_blank",rel:"noopener noreferrer"},ut.createElement("span",{className:"DocSearch-Label"},r),ut.createElement("svg",{width:"77",height:"19","aria-label":"Algolia",role:"img",id:"Layer_1",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 2196.2 500"},ut.createElement("defs",null,ut.createElement("style",null,".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")),ut.createElement("path",{className:"cls-2",d:"M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),ut.createElement("rect",{className:"cls-1",x:"1845.88",y:"104.73",width:"62.58",height:"277.9",rx:"5.9",ry:"5.9"}),ut.createElement("path",{className:"cls-2",d:"M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z"}),ut.createElement("path",{className:"cls-2",d:"M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z"}),ut.createElement("path",{className:"cls-2",d:"M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z"}),ut.createElement("path",{className:"cls-2",d:"M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),ut.createElement("path",{className:"cls-2",d:"M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z"}),ut.createElement("path",{className:"cls-2",d:"M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z"}),ut.createElement("path",{className:"cls-1",d:"M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z"})))}function Br(e){return ut.createElement("svg",{width:"15",height:"15","aria-label":e.ariaLabel,role:"img"},ut.createElement("g",{fill:"none",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round",strokeWidth:"1.2"},e.children))}function Vr(e){var t=e.translations,n=void 0===t?{}:t,r=n.selectText,o=void 0===r?"to select":r,i=n.selectKeyAriaLabel,a=void 0===i?"Enter key":i,c=n.navigateText,u=void 0===c?"to navigate":c,l=n.navigateUpKeyAriaLabel,s=void 0===l?"Arrow up":l,f=n.navigateDownKeyAriaLabel,p=void 0===f?"Arrow down":f,m=n.closeText,v=void 0===m?"to close":m,h=n.closeKeyAriaLabel,d=void 0===h?"Escape key":h,y=n.searchByText,_=void 0===y?"Search by":y;return ut.createElement(ut.Fragment,null,ut.createElement("div",{className:"DocSearch-Logo"},ut.createElement(Fr,{translations:{searchByText:_}})),ut.createElement("ul",{className:"DocSearch-Commands"},ut.createElement("li",null,ut.createElement("kbd",{className:"DocSearch-Commands-Key"},ut.createElement(Br,{ariaLabel:a},ut.createElement("path",{d:"M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3"}))),ut.createElement("span",{className:"DocSearch-Label"},o)),ut.createElement("li",null,ut.createElement("kbd",{className:"DocSearch-Commands-Key"},ut.createElement(Br,{ariaLabel:p},ut.createElement("path",{d:"M7.5 3.5v8M10.5 8.5l-3 3-3-3"}))),ut.createElement("kbd",{className:"DocSearch-Commands-Key"},ut.createElement(Br,{ariaLabel:s},ut.createElement("path",{d:"M7.5 11.5v-8M10.5 6.5l-3-3-3 3"}))),ut.createElement("span",{className:"DocSearch-Label"},u)),ut.createElement("li",null,ut.createElement("kbd",{className:"DocSearch-Commands-Key"},ut.createElement(Br,{ariaLabel:d},ut.createElement("path",{d:"M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956"}))),ut.createElement("span",{className:"DocSearch-Label"},v))))}function Kr(e){var t=e.hit,n=e.children;return ut.createElement("a",{href:t.url},n)}function Wr(){return ut.createElement("svg",{viewBox:"0 0 38 38",stroke:"currentColor",strokeOpacity:".5"},ut.createElement("g",{fill:"none",fillRule:"evenodd"},ut.createElement("g",{transform:"translate(1 1)",strokeWidth:"2"},ut.createElement("circle",{strokeOpacity:".3",cx:"18",cy:"18",r:"18"}),ut.createElement("path",{d:"M36 18c0-9.94-8.06-18-18-18"},ut.createElement("animateTransform",{attributeName:"transform",type:"rotate",from:"0 18 18",to:"360 18 18",dur:"1s",repeatCount:"indefinite"})))))}function zr(){return ut.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ut.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},ut.createElement("path",{d:"M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0"}),ut.createElement("path",{d:"M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13"})))}function Jr(){return ut.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ut.createElement("path",{d:"M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function Qr(){return ut.createElement("svg",{className:"DocSearch-Hit-Select-Icon",width:"20",height:"20",viewBox:"0 0 20 20"},ut.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},ut.createElement("path",{d:"M18 3v4c0 2-2 4-4 4H2"}),ut.createElement("path",{d:"M8 17l-6-6 6-6"})))}var $r=function(){return ut.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ut.createElement("path",{d:"M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))};function Zr(e){switch(e.type){case"lvl1":return ut.createElement($r,null);case"content":return ut.createElement(Yr,null);default:return ut.createElement(Gr,null)}}function Gr(){return ut.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ut.createElement("path",{d:"M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"}))}function Yr(){return ut.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ut.createElement("path",{d:"M17 5H3h14zm0 5H3h14zm0 5H3h14z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function Xr(){return ut.createElement("svg",{width:"20",height:"20",viewBox:"0 0 20 20"},ut.createElement("path",{d:"M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z",stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinejoin:"round"}))}function eo(){return ut.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},ut.createElement("path",{d:"M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0"}))}function to(){return ut.createElement("svg",{width:"40",height:"40",viewBox:"0 0 20 20",fill:"none",fillRule:"evenodd",stroke:"currentColor",strokeLinecap:"round",strokeLinejoin:"round"},ut.createElement("path",{d:"M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2"}))}function no(e){var t=e.translations,n=void 0===t?{}:t,r=n.titleText,o=void 0===r?"Unable to fetch results":r,i=n.helpText,a=void 0===i?"You might want to check your network connection.":i;return ut.createElement("div",{className:"DocSearch-ErrorScreen"},ut.createElement("div",{className:"DocSearch-Screen-Icon"},ut.createElement(eo,null)),ut.createElement("p",{className:"DocSearch-Title"},o),ut.createElement("p",{className:"DocSearch-Help"},a))}var ro=["translations"];function oo(e){var t=e.translations,n=void 0===t?{}:t,r=Ot(e,ro),o=n.noResultsText,i=void 0===o?"No results for":o,a=n.suggestedQueryText,c=void 0===a?"Try searching for":a,u=n.reportMissingResultsText,l=void 0===u?"Believe this query should return results?":u,s=n.reportMissingResultsLinkText,f=void 0===s?"Let us know.":s,p=r.state.context.searchSuggestions;return ut.createElement("div",{className:"DocSearch-NoResults"},ut.createElement("div",{className:"DocSearch-Screen-Icon"},ut.createElement(to,null)),ut.createElement("p",{className:"DocSearch-Title"},i,' "',ut.createElement("strong",null,r.state.query),'"'),p&&p.length>0&&ut.createElement("div",{className:"DocSearch-NoResults-Prefill-List"},ut.createElement("p",{className:"DocSearch-Help"},c,":"),ut.createElement("ul",null,p.slice(0,3).reduce((function(e,t){return [].concat(Pt(e),[ut.createElement("li",{key:t},ut.createElement("button",{className:"DocSearch-Prefill",key:t,type:"button",onClick:function(){r.setQuery(t.toLowerCase()+" "),r.refresh(),r.inputRef.current.focus();}},t))])}),[]))),r.getMissingResultsUrl&&ut.createElement("p",{className:"DocSearch-Help"},"".concat(l," "),ut.createElement("a",{href:r.getMissingResultsUrl({query:r.state.query}),target:"_blank",rel:"noopener noreferrer"},f)))}var io=["hit","attribute","tagName"];function ao(e,t){return t.split(".").reduce((function(e,t){return null!=e&&e[t]?e[t]:null}),e)}function co(e){var t=e.hit,n=e.attribute,r=e.tagName;return g(void 0===r?"span":r,St(St({},Ot(e,io)),{},{dangerouslySetInnerHTML:{__html:ao(t,"_snippetResult.".concat(n,".value"))||ao(t,n)}}))}function uo(e){return e.collection&&0!==e.collection.items.length?ut.createElement("section",{className:"DocSearch-Hits"},ut.createElement("div",{className:"DocSearch-Hit-source"},e.title),ut.createElement("ul",e.getListProps(),e.collection.items.map((function(t,n){return ut.createElement(lo,dt({key:[e.title,t.objectID].join(":"),item:t,index:n},e))})))):null}function lo(e){var t=e.item,n=e.index,r=e.renderIcon,o=e.renderAction,i=e.getItemProps,a=e.onItemClick,c=e.collection,u=e.hitComponent,l=jt(ut.useState(!1),2),s=l[0],f=l[1],p=jt(ut.useState(!1),2),m=p[0],v=p[1],h=ut.useRef(null),d=u;return ut.createElement("li",dt({className:["DocSearch-Hit",t.__docsearch_parent&&"DocSearch-Hit--Child",s&&"DocSearch-Hit--deleting",m&&"DocSearch-Hit--favoriting"].filter(Boolean).join(" "),onTransitionEnd:function(){h.current&&h.current();}},i({item:t,source:c.source,onClick:function(e){a(t,e);}})),ut.createElement(d,{hit:t},ut.createElement("div",{className:"DocSearch-Hit-Container"},r({item:t,index:n}),t.hierarchy[t.type]&&"lvl1"===t.type&&ut.createElement("div",{className:"DocSearch-Hit-content-wrapper"},ut.createElement(co,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.lvl1"}),t.content&&ut.createElement(co,{className:"DocSearch-Hit-path",hit:t,attribute:"content"})),t.hierarchy[t.type]&&("lvl2"===t.type||"lvl3"===t.type||"lvl4"===t.type||"lvl5"===t.type||"lvl6"===t.type)&&ut.createElement("div",{className:"DocSearch-Hit-content-wrapper"},ut.createElement(co,{className:"DocSearch-Hit-title",hit:t,attribute:"hierarchy.".concat(t.type)}),ut.createElement(co,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),"content"===t.type&&ut.createElement("div",{className:"DocSearch-Hit-content-wrapper"},ut.createElement(co,{className:"DocSearch-Hit-title",hit:t,attribute:"content"}),ut.createElement(co,{className:"DocSearch-Hit-path",hit:t,attribute:"hierarchy.lvl1"})),o({item:t,runDeleteTransition:function(e){f(!0),h.current=e;},runFavoriteTransition:function(e){v(!0),h.current=e;}}))))}function so(e,t,n){return e.reduce((function(e,r){var o=t(r);return e.hasOwnProperty(o)||(e[o]=[]),e[o].length<(n||5)&&e[o].push(r),e}),{})}function fo(e){return e}function po(e){return 1===e.button||e.altKey||e.ctrlKey||e.metaKey||e.shiftKey}function mo(){}var vo=/(<mark>|<\/mark>)/g,ho=RegExp(vo.source);function yo(e){var t,n,r=e;if(!r.__docsearch_parent&&!e._highlightResult)return e.hierarchy.lvl0;var o=r.__docsearch_parent?null===(t=r.__docsearch_parent)||void 0===t||null===(t=t._highlightResult)||void 0===t||null===(t=t.hierarchy)||void 0===t?void 0:t.lvl0:null===(n=e._highlightResult)||void 0===n||null===(n=n.hierarchy)||void 0===n?void 0:n.lvl0;return o?o.value&&ho.test(o.value)?o.value.replace(vo,""):o.value:e.hierarchy.lvl0}function _o(e){return ut.createElement("div",{className:"DocSearch-Dropdown-Container"},e.state.collections.map((function(t){if(0===t.items.length)return null;var n=yo(t.items[0]);return ut.createElement(uo,dt({},e,{key:t.source.sourceId,title:n,collection:t,renderIcon:function(e){var n,r=e.item,o=e.index;return ut.createElement(ut.Fragment,null,r.__docsearch_parent&&ut.createElement("svg",{className:"DocSearch-Hit-Tree",viewBox:"0 0 24 54"},ut.createElement("g",{stroke:"currentColor",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},r.__docsearch_parent!==(null===(n=t.items[o+1])||void 0===n?void 0:n.__docsearch_parent)?ut.createElement("path",{d:"M8 6v21M20 27H8.3"}):ut.createElement("path",{d:"M8 6v42M20 27H8.3"}))),ut.createElement("div",{className:"DocSearch-Hit-icon"},ut.createElement(Zr,{type:r.type})))},renderAction:function(){return ut.createElement("div",{className:"DocSearch-Hit-action"},ut.createElement(Qr,null))}}))})),e.resultsFooterComponent&&ut.createElement("section",{className:"DocSearch-HitsFooter"},ut.createElement(e.resultsFooterComponent,{state:e.state})))}var go=["translations"];function bo(e){var t=e.translations,n=void 0===t?{}:t,r=Ot(e,go),o=n.recentSearchesTitle,i=void 0===o?"Recent":o,a=n.noRecentSearchesText,c=void 0===a?"No recent searches":a,u=n.saveRecentSearchButtonTitle,l=void 0===u?"Save this search":u,s=n.removeRecentSearchButtonTitle,f=void 0===s?"Remove this search from history":s,p=n.favoriteSearchesTitle,m=void 0===p?"Favorite":p,v=n.removeFavoriteSearchButtonTitle,h=void 0===v?"Remove this search from favorites":v;return "idle"===r.state.status&&!1===r.hasCollections?r.disableUserPersonalization?null:ut.createElement("div",{className:"DocSearch-StartScreen"},ut.createElement("p",{className:"DocSearch-Help"},c)):!1===r.hasCollections?null:ut.createElement("div",{className:"DocSearch-Dropdown-Container"},ut.createElement(uo,dt({},r,{title:i,collection:r.state.collections[0],renderIcon:function(){return ut.createElement("div",{className:"DocSearch-Hit-icon"},ut.createElement(zr,null))},renderAction:function(e){var t=e.item,n=e.runFavoriteTransition,o=e.runDeleteTransition;return ut.createElement(ut.Fragment,null,ut.createElement("div",{className:"DocSearch-Hit-action"},ut.createElement("button",{className:"DocSearch-Hit-action-button",title:l,type:"submit",onClick:function(e){e.preventDefault(),e.stopPropagation(),n((function(){r.favoriteSearches.add(t),r.recentSearches.remove(t),r.refresh();}));}},ut.createElement(Xr,null))),ut.createElement("div",{className:"DocSearch-Hit-action"},ut.createElement("button",{className:"DocSearch-Hit-action-button",title:f,type:"submit",onClick:function(e){e.preventDefault(),e.stopPropagation(),o((function(){r.recentSearches.remove(t),r.refresh();}));}},ut.createElement(Jr,null))))}})),ut.createElement(uo,dt({},r,{title:m,collection:r.state.collections[1],renderIcon:function(){return ut.createElement("div",{className:"DocSearch-Hit-icon"},ut.createElement(Xr,null))},renderAction:function(e){var t=e.item,n=e.runDeleteTransition;return ut.createElement("div",{className:"DocSearch-Hit-action"},ut.createElement("button",{className:"DocSearch-Hit-action-button",title:h,type:"submit",onClick:function(e){e.preventDefault(),e.stopPropagation(),n((function(){r.favoriteSearches.remove(t),r.refresh();}));}},ut.createElement(Jr,null)))}})))}var So=["translations"],Oo=ut.memo((function(e){var t=e.translations,n=void 0===t?{}:t,r=Ot(e,So);if("error"===r.state.status)return ut.createElement(no,{translations:null==n?void 0:n.errorScreen});var o=r.state.collections.some((function(e){return e.items.length>0}));return r.state.query?!1===o?ut.createElement(oo,dt({},r,{translations:null==n?void 0:n.noResultsScreen})):ut.createElement(_o,r):ut.createElement(bo,dt({},r,{hasCollections:o,translations:null==n?void 0:n.startScreen}))}),(function(e,t){return "loading"===t.state.status||"stalled"===t.state.status})),wo=["translations"];function Eo(e){var t=e.translations,n=void 0===t?{}:t,r=Ot(e,wo),o=n.resetButtonTitle,i=void 0===o?"Clear the query":o,a=n.resetButtonAriaLabel,c=void 0===a?"Clear the query":a,u=n.cancelButtonText,l=void 0===u?"Cancel":u,s=n.cancelButtonAriaLabel,f=void 0===s?"Cancel":s,p=n.searchInputLabel,m=void 0===p?"Search":p,v=r.getFormProps({inputElement:r.inputRef.current}).onReset;return ut.useEffect((function(){r.autoFocus&&r.inputRef.current&&r.inputRef.current.focus();}),[r.autoFocus,r.inputRef]),ut.useEffect((function(){r.isFromSelection&&r.inputRef.current&&r.inputRef.current.select();}),[r.isFromSelection,r.inputRef]),ut.createElement(ut.Fragment,null,ut.createElement("form",{className:"DocSearch-Form",onSubmit:function(e){e.preventDefault();},onReset:v},ut.createElement("label",dt({className:"DocSearch-MagnifierLabel"},r.getLabelProps()),ut.createElement(Ct,null),ut.createElement("span",{className:"DocSearch-VisuallyHiddenForAccessibility"},m)),ut.createElement("div",{className:"DocSearch-LoadingIndicator"},ut.createElement(Wr,null)),ut.createElement("input",dt({className:"DocSearch-Input",ref:r.inputRef},r.getInputProps({inputElement:r.inputRef.current,autoFocus:r.autoFocus,maxLength:64}))),ut.createElement("button",{type:"reset",title:i,className:"DocSearch-Reset","aria-label":c,hidden:!r.state.query},ut.createElement(Jr,null))),ut.createElement("button",{className:"DocSearch-Cancel",type:"reset","aria-label":f,onClick:r.onClose},l))}var jo=["_highlightResult","_snippetResult"];function Po(e){var t=e.key,n=e.limit,r=void 0===n?5:n,o=function(e){return !1===function(){var e="__TEST_KEY__";try{return localStorage.setItem(e,""),localStorage.removeItem(e),!0}catch(e){return !1}}()?{setItem:function(){},getItem:function(){return []}}:{setItem:function(t){return window.localStorage.setItem(e,JSON.stringify(t))},getItem:function(){var t=window.localStorage.getItem(e);return t?JSON.parse(t):[]}}}(t),i=o.getItem().slice(0,r);return {add:function(e){var t=e;t._highlightResult,t._snippetResult;var n=Ot(t,jo),a=i.findIndex((function(e){return e.objectID===n.objectID}));a>-1&&i.splice(a,1),i.unshift(n),i=i.slice(0,r),o.setItem(i);},remove:function(e){i=i.filter((function(t){return t.objectID!==e.objectID})),o.setItem(i);},getAll:function(){return i}}}function Io(e){var t,n="algolia-client-js-".concat(e.key);function r(){return void 0===t&&(t=e.localStorage||window.localStorage),t}function o(){return JSON.parse(r().getItem(n)||"{}")}function i(e){r().setItem(n,JSON.stringify(e));}return {get:function(t,n){var r=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return Promise.resolve().then((function(){var n,r,a;return n=e.timeToLive?1e3*e.timeToLive:null,r=o(),i(a=Object.fromEntries(Object.entries(r).filter((function(e){return void 0!==jt(e,2)[1].timestamp})))),n&&i(Object.fromEntries(Object.entries(a).filter((function(e){var t=jt(e,2)[1],r=(new Date).getTime();return !(t.timestamp+n<r)})))),o()[JSON.stringify(t)]})).then((function(e){return Promise.all([e?e.value:n(),void 0!==e])})).then((function(e){var t=jt(e,2),n=t[0],o=t[1];return Promise.all([n,o||r.miss(n)])})).then((function(e){return jt(e,1)[0]}))},set:function(e,t){return Promise.resolve().then((function(){var i=o();return i[JSON.stringify(e)]={timestamp:(new Date).getTime(),value:t},r().setItem(n,JSON.stringify(i)),t}))},delete:function(e){return Promise.resolve().then((function(){var t=o();delete t[JSON.stringify(e)],r().setItem(n,JSON.stringify(t));}))},clear:function(){return Promise.resolve().then((function(){r().removeItem(n);}))}}}function ko(e){var t=Pt(e.caches),n=t.shift();return void 0===n?{get:function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return t().then((function(e){return Promise.all([e,n.miss(e)])})).then((function(e){return jt(e,1)[0]}))},set:function(e,t){return Promise.resolve(t)},delete:function(e){return Promise.resolve()},clear:function(){return Promise.resolve()}}:{get:function(e,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}};return n.get(e,r,o).catch((function(){return ko({caches:t}).get(e,r,o)}))},set:function(e,r){return n.set(e,r).catch((function(){return ko({caches:t}).set(e,r)}))},delete:function(e){return n.delete(e).catch((function(){return ko({caches:t}).delete(e)}))},clear:function(){return n.clear().catch((function(){return ko({caches:t}).clear()}))}}}function Do(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{serializable:!0},t={};return {get:function(n,r){var o=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{miss:function(){return Promise.resolve()}},i=JSON.stringify(n);if(i in t)return Promise.resolve(e.serializable?JSON.parse(t[i]):t[i]);var a=r();return a.then((function(e){return o.miss(e)})).then((function(){return a}))},set:function(n,r){return t[JSON.stringify(n)]=e.serializable?JSON.stringify(r):r,Promise.resolve(r)},delete:function(e){return delete t[JSON.stringify(e)],Promise.resolve()},clear:function(){return t={},Promise.resolve()}}}function Co(e){var t=e.algoliaAgents,n=e.client,r=e.version,o=function(e){var t={value:"Algolia for JavaScript (".concat(e,")"),add:function(e){var n="; ".concat(e.segment).concat(void 0!==e.version?" (".concat(e.version,")"):"");return -1===t.value.indexOf(n)&&(t.value="".concat(t.value).concat(n)),t}};return t}(r).add({segment:n,version:r});return t.forEach((function(e){return o.add(e)})),o}var xo=12e4;function Ao(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"up",n=Date.now();return St(St({},e),{},{status:t,lastUpdate:n,isUp:function(){return "up"===t||Date.now()-n>xo},isTimedOut:function(){return "timed out"===t&&Date.now()-n<=xo}})}var No=function(){function e(t,n){var r;return mt(this,e),ht(r=pt(this,e,[t]),"name","AlgoliaError"),n&&(r.name=n),r}return _t(e,kt(Error)),vt(e)}(),To=function(){function e(t,n,r){var o;return mt(this,e),ht(o=pt(this,e,[t,r]),"stackTrace",void 0),o.stackTrace=n,o}return _t(e,No),vt(e)}(),Ro=function(){function e(t){return mt(this,e),pt(this,e,["Unreachable hosts - your application id may be incorrect. If the error persists, please reach out to the Algolia Support team: https://alg.li/support.",t,"RetryError"])}return _t(e,To),vt(e)}(),Lo=function(){function e(t,n,r){var o,i=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"ApiError";return mt(this,e),ht(o=pt(this,e,[t,r,i]),"status",void 0),o.status=n,o}return _t(e,To),vt(e)}(),qo=function(){function e(t,n){var r;return mt(this,e),ht(r=pt(this,e,[t,"DeserializationError"]),"response",void 0),r.response=n,r}return _t(e,No),vt(e)}(),Mo=function(){function e(t,n,r,o){var i;return mt(this,e),ht(i=pt(this,e,[t,n,o,"DetailedApiError"]),"error",void 0),i.error=r,i}return _t(e,Lo),vt(e)}();function Ho(e,t,n){var r,o=(r=n,Object.keys(r).filter((function(e){return void 0!==r[e]})).sort().map((function(e){return "".concat(e,"=").concat(encodeURIComponent("[object Array]"===Object.prototype.toString.call(r[e])?r[e].join(","):r[e]).replace(/\+/g,"%20"))})).join("&")),i="".concat(e.protocol,"://").concat(e.url).concat(e.port?":".concat(e.port):"","/").concat("/"===t.charAt(0)?t.substring(1):t);return o.length&&(i+="?".concat(o)),i}function Uo(e,t){if("GET"!==e.method&&(void 0!==e.data||void 0!==t.data)){var n=Array.isArray(e.data)?e.data:St(St({},e.data),t.data);return JSON.stringify(n)}}function Fo(e,t,n){var r=St(St(St({Accept:"application/json"},e),t),n),o={};return Object.keys(r).forEach((function(e){var t=r[e];o[e.toLowerCase()]=t;})),o}function Bo(e){try{return JSON.parse(e.content)}catch(t){throw new qo(t.message,e)}}function Vo(e,t){var n=e.content,r=e.status;try{var o=JSON.parse(n);return "error"in o?new Mo(o.message,r,o.error,t):new Lo(o.message,r,t)}catch(e){}return new Lo(n,r,t)}function Ko(e){return e.map((function(e){return Wo(e)}))}function Wo(e){var t=e.request.headers["x-algolia-api-key"]?{"x-algolia-api-key":"*****"}:{};return St(St({},e),{},{request:St(St({},e.request),{},{headers:St(St({},e.request.headers),t)})})}var zo=["appId","apiKey","authMode","algoliaAgents"],Jo=["params"],Qo="5.14.2";function $o(e){return [{url:"".concat(e,"-dsn.algolia.net"),accept:"read",protocol:"https"},{url:"".concat(e,".algolia.net"),accept:"write",protocol:"https"}].concat(function(e){for(var t=e,n=e.length-1;n>0;n--){var r=Math.floor(Math.random()*(n+1)),o=e[n];t[n]=e[r],t[r]=o;}return t}([{url:"".concat(e,"-1.algolianet.com"),accept:"readWrite",protocol:"https"},{url:"".concat(e,"-2.algolianet.com"),accept:"readWrite",protocol:"https"},{url:"".concat(e,"-3.algolianet.com"),accept:"readWrite",protocol:"https"}]))}var Zo="3.8.2";var Go=["footer","searchBox"];function Yo(e){var t=e.appId,n=e.apiKey,r=e.indexName,o=e.placeholder,i=void 0===o?"Search docs":o,a=e.searchParameters,c=e.maxResultsPerGroup,u=e.onClose,l=void 0===u?mo:u,s=e.transformItems,f=void 0===s?fo:s,p=e.hitComponent,m=void 0===p?Kr:p,v=e.resultsFooterComponent,h=void 0===v?function(){return null}:v,d=e.navigator,y=e.initialScrollY,_=void 0===y?0:y,g=e.transformSearchClient,b=void 0===g?fo:g,S=e.disableUserPersonalization,O=void 0!==S&&S,w=e.initialQuery,E=void 0===w?"":w,j=e.translations,P=void 0===j?{}:j,I=e.getMissingResultsUrl,k=e.insights,D=void 0!==k&&k,C=P.footer,x=P.searchBox,A=Ot(P,Go),N=jt(ut.useState({query:"",collections:[],completion:null,context:{},isOpen:!1,activeItemId:null,status:"idle"}),2),T=N[0],R=N[1],L=ut.useRef(null),q=ut.useRef(null),M=ut.useRef(null),H=ut.useRef(null),U=ut.useRef(null),F=ut.useRef(10),B=ut.useRef("undefined"!=typeof window?window.getSelection().toString().slice(0,64):"").current,V=ut.useRef(E||B).current,K=function(e,t,n){return ut.useMemo((function(){var r=function(e,t){if(!e||"string"!=typeof e)throw new Error("`appId` is missing.");if(!t||"string"!=typeof t)throw new Error("`apiKey` is missing.");return function(e){var t=e.appId,n=e.apiKey,r=e.authMode,o=e.algoliaAgents,i=Ot(e,zo),a=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"WithinHeaders",r={"x-algolia-api-key":t,"x-algolia-application-id":e};return {headers:function(){return "WithinHeaders"===n?r:{}},queryParameters:function(){return "WithinQueryParameters"===n?r:{}}}}(t,n,r),c=function(e){var t=e.hosts,n=e.hostsCache,r=e.baseHeaders,o=e.logger,i=e.baseQueryParameters,a=e.algoliaAgent,c=e.timeouts,u=e.requester,l=e.requestsCache,s=e.responsesCache;function f(e){return p.apply(this,arguments)}function p(){return (p=ft(wt().mark((function e(t){var r,o,i,a,c;return wt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all(t.map((function(e){return n.get(e,(function(){return Promise.resolve(Ao(e))}))})));case 2:return r=e.sent,o=r.filter((function(e){return e.isUp()})),i=r.filter((function(e){return e.isTimedOut()})),a=[].concat(Pt(o),Pt(i)),c=a.length>0?a:t,e.abrupt("return",{hosts:c,getTimeout:function(e,t){return (0===i.length&&0===e?1:i.length+3+e)*t}});case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function m(e,t){return v.apply(this,arguments)}function v(){return v=ft(wt().mark((function e(l,s){var p,m,v,h,d,y,_,g,b,S,O,w,E,j=arguments;return wt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(p=!(j.length>2&&void 0!==j[2])||j[2],m=[],v=Uo(l,s),h=Fo(r,l.headers,s.headers),d="GET"===l.method?St(St({},l.data),s.data):{},y=St(St(St({},i),l.queryParameters),d),a.value&&(y["x-algolia-agent"]=a.value),s&&s.queryParameters)for(_=0,g=Object.keys(s.queryParameters);_<g.length;_++)b=g[_],s.queryParameters[b]&&"[object Object]"!==Object.prototype.toString.call(s.queryParameters[b])?y[b]=s.queryParameters[b].toString():y[b]=s.queryParameters[b];return S=0,O=function(){var e=ft(wt().mark((function e(t,r){var i,a,f,d,_,g;return wt().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(void 0!==(i=t.pop())){e.next=3;break}throw new Ro(Ko(m));case 3:return a=St(St({},c),s.timeouts),f={data:v,headers:h,method:l.method,url:Ho(i,l.path,y),connectTimeout:r(S,a.connect),responseTimeout:r(S,p?a.read:a.write)},d=function(e){var n={request:f,response:e,host:i,triesLeft:t.length};return m.push(n),n},e.next=8,u.send(f);case 8:if(w=(b=_=e.sent).isTimedOut,E=b.status,!(w||function(e){return !e.isTimedOut&&!~~e.status}({isTimedOut:w,status:E})||2!=~~(E/100)&&4!=~~(E/100))){e.next=16;break}return g=d(_),_.isTimedOut&&S++,o.info("Retryable failure",Wo(g)),e.next=15,n.set(i,Ao(i,_.isTimedOut?"timed out":"down"));case 15:return e.abrupt("return",O(t,r));case 16:if(2!=~~(_.status/100)){e.next=18;break}return e.abrupt("return",Bo(_));case 18:throw d(_),Vo(_,m);case 20:case"end":return e.stop()}var b,w,E;}),e)})));return function(t,n){return e.apply(this,arguments)}}(),w=t.filter((function(e){return "readWrite"===e.accept||(p?"read"===e.accept:"write"===e.accept)})),e.next=13,f(w);case 13:return E=e.sent,e.abrupt("return",O(Pt(E.hosts).reverse(),E.getTimeout));case 15:case"end":return e.stop()}}),e)}))),v.apply(this,arguments)}return {hostsCache:n,requester:u,timeouts:c,logger:o,algoliaAgent:a,baseHeaders:r,baseQueryParameters:i,hosts:t,request:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},n=e.useReadTransporter||"GET"===e.method;if(!n)return m(e,t,n);var o=function(){return m(e,t)};if(!0!==(t.cacheable||e.cacheable))return o();var a={request:e,requestOptions:t,transporter:{queryParameters:i,headers:r}};return s.get(a,(function(){return l.get(a,(function(){return l.set(a,o()).then((function(e){return Promise.all([l.delete(a),e])}),(function(e){return Promise.all([l.delete(a),Promise.reject(e)])})).then((function(e){var t=jt(e,2);return t[0],t[1]}))}))}),{miss:function(e){return s.set(a,e)}})},requestsCache:l,responsesCache:s}}(St(St({hosts:$o(t)},i),{},{algoliaAgent:Co({algoliaAgents:o,client:"Lite",version:Qo}),baseHeaders:St(St({"content-type":"text/plain"},a.headers()),i.baseHeaders),baseQueryParameters:St(St({},a.queryParameters()),i.baseQueryParameters)}));return {transporter:c,appId:t,clearCache:function(){return Promise.all([c.requestsCache.clear(),c.responsesCache.clear()]).then((function(){}))},get _ua(){return c.algoliaAgent.value},addAlgoliaAgent:function(e,t){c.algoliaAgent.add({segment:e,version:t});},setClientApiKey:function(e){var t=e.apiKey;r&&"WithinHeaders"!==r?c.baseQueryParameters["x-algolia-api-key"]=t:c.baseHeaders["x-algolia-api-key"]=t;},searchForHits:function(e,t){return this.search(e,t)},searchForFacets:function(e,t){return this.search(e,t)},customPost:function(e,t){var n=e.path,r=e.parameters,o=e.body;if(!n)throw new Error("Parameter `path` is required when calling `customPost`.");var i={method:"POST",path:"/{path}".replace("{path}",n),queryParameters:r||{},headers:{},data:o||{}};return c.request(i,t)},getRecommendations:function(e,t){if(e&&Array.isArray(e)&&(e={requests:e}),!e)throw new Error("Parameter `getRecommendationsParams` is required when calling `getRecommendations`.");if(!e.requests)throw new Error("Parameter `getRecommendationsParams.requests` is required when calling `getRecommendations`.");var n={method:"POST",path:"/1/indexes/*/recommendations",queryParameters:{},headers:{},data:e,useReadTransporter:!0,cacheable:!0};return c.request(n,t)},search:function(e,t){if(e&&Array.isArray(e)){var n={requests:e.map((function(e){var t=e.params,n=Ot(e,Jo);return "facet"===n.type?St(St(St({},n),t),{},{type:"facet"}):St(St(St({},n),t),{},{facet:void 0,maxFacetHits:void 0,facetQuery:void 0})}))};e=n;}if(!e)throw new Error("Parameter `searchMethodParams` is required when calling `search`.");if(!e.requests)throw new Error("Parameter `searchMethodParams.requests` is required when calling `search`.");var r={method:"POST",path:"/1/indexes/*/queries",queryParameters:{},headers:{},data:e,useReadTransporter:!0,cacheable:!0};return c.request(r,t)}}}(St({appId:e,apiKey:t,timeouts:{connect:1e3,read:2e3,write:3e4},logger:{debug:function(e,t){return Promise.resolve()},info:function(e,t){return Promise.resolve()},error:function(e,t){return Promise.resolve()}},requester:{send:function(e){return new Promise((function(t){var n=new XMLHttpRequest;n.open(e.method,e.url,!0),Object.keys(e.headers).forEach((function(t){return n.setRequestHeader(t,e.headers[t])}));var r,o=function(e,r){return setTimeout((function(){n.abort(),t({status:0,content:r,isTimedOut:!0});}),e)},i=o(e.connectTimeout,"Connection timeout");n.onreadystatechange=function(){n.readyState>n.OPENED&&void 0===r&&(clearTimeout(i),r=o(e.responseTimeout,"Socket timeout"));},n.onerror=function(){0===n.status&&(clearTimeout(i),clearTimeout(r),t({content:n.responseText||"Network request failed",status:n.status,isTimedOut:!1}));},n.onload=function(){clearTimeout(i),clearTimeout(r),t({content:n.responseText,status:n.status,isTimedOut:!1});},n.send(e.data);}))}},algoliaAgents:[{segment:"Browser"}],authMode:"WithinQueryParameters",responsesCache:Do(),requestsCache:Do({serializable:!1}),hostsCache:ko({caches:[Io({key:"".concat(Qo,"-").concat(e)}),Do()]})},void 0))}(e,t);return r.addAlgoliaAgent("docsearch",Zo),!1===/docsearch.js \(.*\)/.test(r.transporter.algoliaAgent.value)&&r.addAlgoliaAgent("docsearch-react",Zo),n(r)}),[e,t,n])}(t,n,b),W=ut.useRef(Po({key:"__DOCSEARCH_FAVORITE_SEARCHES__".concat(r),limit:10})).current,z=ut.useRef(Po({key:"__DOCSEARCH_RECENT_SEARCHES__".concat(r),limit:0===W.getAll().length?7:4})).current,J=ut.useCallback((function(e){if(!O){var t="content"===e.type?e.__docsearch_parent:e;t&&-1===W.getAll().findIndex((function(e){return e.objectID===t.objectID}))&&z.add(t);}}),[W,z,O]),Q=ut.useCallback((function(e){if(T.context.algoliaInsightsPlugin&&e.__autocomplete_id){var t=e,n={eventName:"Item Selected",index:t.__autocomplete_indexName,items:[t],positions:[e.__autocomplete_id],queryID:t.__autocomplete_queryID};T.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n);}}),[T.context.algoliaInsightsPlugin]),$=ut.useMemo((function(){return Ur({id:"docsearch",defaultActiveItemId:0,placeholder:i,openOnFocus:!0,initialState:{query:V,context:{searchSuggestions:[]}},insights:D,navigator:d,onStateChange:function(e){R(e.state);},getSources:function(e){var o=e.query,i=e.state,u=e.setContext,s=e.setStatus;if(!o)return O?[]:[{sourceId:"recentSearches",onSelect:function(e){var t=e.item,n=e.event;J(t),po(n)||l();},getItemUrl:function(e){return e.item.url},getItems:function(){return z.getAll()}},{sourceId:"favoriteSearches",onSelect:function(e){var t=e.item,n=e.event;J(t),po(n)||l();},getItemUrl:function(e){return e.item.url},getItems:function(){return W.getAll()}}];var p=Boolean(D);return K.search({requests:[St({query:o,indexName:r,attributesToRetrieve:["hierarchy.lvl0","hierarchy.lvl1","hierarchy.lvl2","hierarchy.lvl3","hierarchy.lvl4","hierarchy.lvl5","hierarchy.lvl6","content","type","url"],attributesToSnippet:["hierarchy.lvl1:".concat(F.current),"hierarchy.lvl2:".concat(F.current),"hierarchy.lvl3:".concat(F.current),"hierarchy.lvl4:".concat(F.current),"hierarchy.lvl5:".concat(F.current),"hierarchy.lvl6:".concat(F.current),"content:".concat(F.current)],snippetEllipsisText:"…",highlightPreTag:"<mark>",highlightPostTag:"</mark>",hitsPerPage:20,clickAnalytics:p},a)]}).catch((function(e){throw "RetryError"===e.name&&s("error"),e})).then((function(e){var o=e.results[0],a=o.hits,s=o.nbHits,m=so(a,(function(e){return yo(e)}),c);i.context.searchSuggestions.length<Object.keys(m).length&&u({searchSuggestions:Object.keys(m)}),u({nbHits:s});var v={};return p&&(v={__autocomplete_indexName:r,__autocomplete_queryID:o.queryID,__autocomplete_algoliaCredentials:{appId:t,apiKey:n}}),Object.values(m).map((function(e,t){return {sourceId:"hits".concat(t),onSelect:function(e){var t=e.item,n=e.event;J(t),po(n)||l();},getItemUrl:function(e){return e.item.url},getItems:function(){return Object.values(so(e,(function(e){return e.hierarchy.lvl1}),c)).map(f).map((function(e){return e.map((function(t){var n=null,r=e.find((function(e){return "lvl1"===e.type&&e.hierarchy.lvl1===t.hierarchy.lvl1}));return "lvl1"!==t.type&&r&&(n=r),St(St({},t),{},{__docsearch_parent:n},v)}))})).flat()}}}))}))}})}),[r,a,c,K,l,z,W,J,V,i,d,f,O,D,t,n]),Z=$.getEnvironmentProps,G=$.getRootProps,Y=$.refresh;return function(e){var t=e.getEnvironmentProps,n=e.panelElement,r=e.formElement,o=e.inputElement;ut.useEffect((function(){if(n&&r&&o){var e=t({panelElement:n,formElement:r,inputElement:o}),i=e.onTouchStart,a=e.onTouchMove;return window.addEventListener("touchstart",i),window.addEventListener("touchmove",a),function(){window.removeEventListener("touchstart",i),window.removeEventListener("touchmove",a);}}}),[t,n,r,o]);}({getEnvironmentProps:Z,panelElement:H.current,formElement:M.current,inputElement:U.current}),function(e){var t=e.container;ut.useEffect((function(){if(t){var e=t.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"),n=e[0],r=e[e.length-1];return t.addEventListener("keydown",o),function(){t.removeEventListener("keydown",o);}}function o(e){"Tab"===e.key&&(e.shiftKey?document.activeElement===n&&(e.preventDefault(),r.focus()):document.activeElement===r&&(e.preventDefault(),n.focus()));}}),[t]);}({container:L.current}),ut.useEffect((function(){return document.body.classList.add("DocSearch--active"),function(){var e,t;document.body.classList.remove("DocSearch--active"),null===(e=(t=window).scrollTo)||void 0===e||e.call(t,0,_);}}),[]),ut.useEffect((function(){window.matchMedia("(max-width: 768px)").matches&&(F.current=5);}),[]),ut.useEffect((function(){H.current&&(H.current.scrollTop=0);}),[T.query]),ut.useEffect((function(){V.length>0&&(Y(),U.current&&U.current.focus());}),[V,Y]),ut.useEffect((function(){function e(){if(q.current){var e=.01*window.innerHeight;q.current.style.setProperty("--docsearch-vh","".concat(e,"px"));}}return e(),window.addEventListener("resize",e),function(){window.removeEventListener("resize",e);}}),[]),ut.createElement("div",dt({ref:L},G({"aria-expanded":!0}),{className:["DocSearch","DocSearch-Container","stalled"===T.status&&"DocSearch-Container--Stalled","error"===T.status&&"DocSearch-Container--Errored"].filter(Boolean).join(" "),role:"button",tabIndex:0,onMouseDown:function(e){e.target===e.currentTarget&&l();}}),ut.createElement("div",{className:"DocSearch-Modal",ref:q},ut.createElement("header",{className:"DocSearch-SearchBar",ref:M},ut.createElement(Eo,dt({},$,{state:T,autoFocus:0===V.length,inputRef:U,isFromSelection:Boolean(V)&&V===B,translations:x,onClose:l}))),ut.createElement("div",{className:"DocSearch-Dropdown",ref:H},ut.createElement(Oo,dt({},$,{indexName:r,state:T,hitComponent:m,resultsFooterComponent:h,disableUserPersonalization:O,recentSearches:z,favoriteSearches:W,inputRef:U,translations:A,getMissingResultsUrl:I,onItemClick:function(e,t){Q(e),J(e),po(t)||l();}}))),ut.createElement("footer",{className:"DocSearch-Footer"},ut.createElement(Vr,{translations:C}))))}function Xo(e){var t,n,r=ut.useRef(null),o=jt(ut.useState(!1),2),i=o[0],a=o[1],c=jt(ut.useState((null==e?void 0:e.initialQuery)||void 0),2),u=c[0],l=c[1],s=ut.useCallback((function(){a(!0);}),[a]),f=ut.useCallback((function(){a(!1),l(null==e?void 0:e.initialQuery);}),[a,e.initialQuery]);return function(e){var t=e.isOpen,n=e.onOpen,r=e.onClose,o=e.onInput,i=e.searchButtonRef;ut.useEffect((function(){function e(e){var a;if("Escape"===e.code&&t||"k"===(null===(a=e.key)||void 0===a?void 0:a.toLowerCase())&&(e.metaKey||e.ctrlKey)||!function(e){var t=e.target,n=t.tagName;return t.isContentEditable||"INPUT"===n||"SELECT"===n||"TEXTAREA"===n}(e)&&"/"===e.key&&!t)return e.preventDefault(),void(t?r():document.body.classList.contains("DocSearch--active")||n());i&&i.current===document.activeElement&&o&&/[a-zA-Z0-9]/.test(String.fromCharCode(e.keyCode))&&o(e);}return window.addEventListener("keydown",e),function(){window.removeEventListener("keydown",e);}}),[t,n,r,o,i]);}({isOpen:i,onOpen:s,onClose:f,onInput:ut.useCallback((function(e){a(!0),l(e.key);}),[a,l]),searchButtonRef:r}),ut.createElement(ut.Fragment,null,ut.createElement(Nt,{ref:r,translations:null==e||null===(t=e.translations)||void 0===t?void 0:t.button,onClick:s}),i&&qe(ut.createElement(Yo,dt({},e,{initialScrollY:window.scrollY,initialQuery:u,translations:null==e||null===(n=e.translations)||void 0===n?void 0:n.modal,onClose:f})),document.body))}function ei(t){Ke(ut.createElement(Xo,e({},t,{transformSearchClient:function(e){return e.addAlgoliaAgent("docsearch.js",Zo),t.transformSearchClient?t.transformSearchClient(e):e}})),function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:window;return "string"==typeof e?t.document.querySelector(e):e}(t.container,t.environment));}

function DocSearch() {
  reactExports.useEffect(() => {
    ei({
      appId: "38BPOKYOZ2",
      apiKey: "aa152d345260f94e9c0b177ed5437c9e",
      indexName: "sweetalert2",
      container: "#docsearch"
    });
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "docsearch" });
}

const sidebarUrl = "https://github.com/sweetalert2/sweetalert2.github.io/blob/main/src/utils/sidebar.tsx";
function Nav({
  recipeGallery = false,
  showBackToRecipeGalleryLink = true
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sidebar, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-bars", id: "show-sidebar", onClick: () => showSidebar() }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("link", { rel: "stylesheet", id: "current-theme" }),
    recipeGallery ? /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "recipe-gallery-top-nav", children: [
      showBackToRecipeGalleryLink ? /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "/recipe-gallery/", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-arrow-left" }),
        " Back to Recipe Gallery"
      ] }) : null,
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocSearch, {})
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
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#themes", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Themes" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#sponsors", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Sponsors" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#nsfw-sponsors", onClick: () => Swal.close(), children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "NSFW Sponsors" }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ThemeSelector, {})
  ] });
}
function ThemeSelector() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "theme-selector", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("label", { children: [
    "Theme:",
    " ",
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "select",
      {
        autoComplete: "off",
        onChange: (event) => {
          const currentTheme = document.querySelector("#current-theme");
          currentTheme.href = event.target.value;
        },
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-default/default.css", children: "Default" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark/dark.css", children: "Dark" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-bootstrap-4/bootstrap-4.css", children: "Bootstrap 4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-bulma/bulma.css", children: "Bulma" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-minimal/minimal.css", children: "Minimal" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-borderless/borderless.css", children: "Borderless" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-material-ui/material-ui.css", children: "Material UI" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("option", { value: "https://cdn.jsdelivr.net/npm/@sweetalert2/theme-wordpress-admin/wordpress-admin.css", children: "WordPress Admin" })
        ]
      }
    )
  ] }) });
}

const functions = {
  // Top of page
  normalAlert() {
    alert("You clicked the button!");
  },
  sweetAlert() {
    Swal.fire({
      title: "Good job!",
      text: "You clicked the button!",
      icon: "success"
    });
  },
  // Examples section
  basicMessage() {
    Swal.fire("SweetAlert2 is working!");
  },
  titleText() {
    Swal.fire({
      title: "The Internet?",
      text: "That thing is still around?",
      icon: "question"
    });
  },
  errorType() {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
      footer: '<a href="#">Why do I have this issue?</a>'
    });
  },
  longText() {
    Swal.fire({
      imageUrl: "https://placeholder.pics/svg/300x1500",
      imageHeight: 1500,
      imageAlt: "A tall image"
    });
  },
  draggableModal() {
    Swal.fire({
      title: "Drag me!",
      icon: "success",
      draggable: true
    });
  },
  customHtml() {
    Swal.fire({
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
    Swal.fire({
      title: "Do you want to save the changes?",
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: "Save",
      denyButtonText: `Don't save`
    }).then((result) => {
      /*! Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire("Saved!", "", "success");
      } else if (result.isDenied) {
        Swal.fire("Changes are not saved", "", "info");
      }
    });
  },
  customPosition() {
    Swal.fire({
      position: "top-end",
      icon: "success",
      title: "Your work has been saved",
      showConfirmButton: false,
      timer: 1500
    });
  },
  customAnimation() {
    Swal.fire({
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
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success"
        });
      }
    });
  },
  handleDismiss() {
    const swalWithBootstrapButtons = Swal.mixin({
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
        result.dismiss === Swal.DismissReason.cancel
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
    Swal.fire({
      title: "Sweet!",
      text: "Modal with a custom image.",
      imageUrl: "https://unsplash.it/400/200",
      imageWidth: 400,
      imageHeight: 200,
      imageAlt: "Custom image"
    });
  },
  customWidth() {
    Swal.fire({
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
    Swal.fire({
      title: "Auto close alert!",
      html: "I will close in <b></b> milliseconds.",
      timer: 2e3,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading();
        const timer = Swal.getPopup().querySelector("b");
        timerInterval = setInterval(() => {
          timer.textContent = `${Swal.getTimerLeft()}`;
        }, 100);
      },
      willClose: () => {
        clearInterval(timerInterval);
      }
    }).then((result) => {
      /*! Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        console.log("I was closed by the timer");
      }
    });
  },
  rtl() {
    Swal.fire({
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
    Swal.fire({
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
            return Swal.showValidationMessage(`
              ${JSON.stringify(await response.json())}
            `);
          }
          return response.json();
        } catch (error) {
          Swal.showValidationMessage(`
            Request failed: ${error}
          `);
        }
      },
      allowOutsideClick: () => !Swal.isLoading()
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `${result.value.login}'s avatar`,
          imageUrl: result.value.avatar_url
        });
      }
    });
  },
  // Configuration section
  mixin() {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      timer: 3e3,
      timerProgressBar: true,
      didOpen: (toast) => {
        toast.onmouseenter = Swal.stopTimer;
        toast.onmouseleave = Swal.resumeTimer;
      }
    });
    Toast.fire({
      icon: "success",
      title: "Signed in successfully"
    });
  },
  // Declarative templates
  declarativeTemplate() {
    Swal.fire({
      template: "#my-template"
    });
  },
  // Declarative triggering
  declarativeTriggering() {
    Swal.bindClickHandler();
    /*! Bind a mixin to a click handler */
    Swal.mixin({
      toast: true
    }).bindClickHandler("data-swal-toast-template");
  },
  // Input Types section
  async textInput() {
    const ipAPI = "//api.ipify.org?format=json";
    const response = await fetch(ipAPI);
    const data = await response.json();
    const inputValue = data.ip;
    const { value: ipAddress } = await Swal.fire({
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
      Swal.fire(`Your IP address is ${ipAddress}`);
    }
  },
  async emailInput() {
    const { value: email } = await Swal.fire({
      title: "Input email address",
      input: "email",
      inputLabel: "Your email address",
      inputPlaceholder: "Enter your email address"
    });
    if (email) {
      Swal.fire(`Entered email: ${email}`);
    }
  },
  async urlInput() {
    const { value: url } = await Swal.fire({
      input: "url",
      inputLabel: "URL address",
      inputPlaceholder: "Enter the URL"
    });
    if (url) {
      Swal.fire(`Entered URL: ${url}`);
    }
  },
  async passwordInput() {
    const { value: password } = await Swal.fire({
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
      Swal.fire(`Entered password: ${password}`);
    }
  },
  async textareaInput() {
    const { value: text } = await Swal.fire({
      input: "textarea",
      inputLabel: "Message",
      inputPlaceholder: "Type your message here...",
      inputAttributes: {
        "aria-label": "Type your message here"
      },
      showCancelButton: true
    });
    if (text) {
      Swal.fire(text);
    }
  },
  async selectInput() {
    const { value: fruit } = await Swal.fire({
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
      Swal.fire(`You selected: ${fruit}`);
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
    const { value: color } = await Swal.fire({
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
      Swal.fire({ html: `You selected: ${color}` });
    }
  },
  async checkboxInput() {
    const { value: accept } = await Swal.fire({
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
      Swal.fire("You agreed with T&C :)");
    }
  },
  async dateInput() {
    const { value: date } = await Swal.fire({
      title: "select departure date",
      input: "date",
      didOpen: () => {
        const today = (/* @__PURE__ */ new Date()).toISOString();
        Swal.getInput().min = today.split("T")[0];
      }
    });
    if (date) {
      Swal.fire("Departure date", date);
    }
  },
  async fileInput() {
    const { value: file } = await Swal.fire({
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
        Swal.fire({
          title: "Your uploaded picture",
          imageUrl: e.target.result,
          imageAlt: "The uploaded picture"
        });
      };
      reader.readAsDataURL(file);
    }
  },
  rangeInput() {
    Swal.fire({
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
    const { value: formValues } = await Swal.fire({
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
      Swal.fire(JSON.stringify(formValues));
    }
  }
};

const functionStrings = {};
Object.entries(functions).forEach(([id, fn]) => {
  functionStrings[id] = String(fn).replace(/import_sweetalert\d+.default/g, "Swal").replace(/^.*\n/, "").replace(/}$/, "").replace(/(^|\n) {4}/g, "$1").replace(/.*rtl-container.*\n/, "").replace(/(\d)e3/g, "$1000").replace(/\/\*!/g, "/*").replace(/\/\* @__PURE__ \*\/ /g, "").replace(/\\u([\d\w]{4})/gi, function(_, grp) {
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

export { DocSearch as D, Nav as N, ReactDOM as R, Swal as S, React as a, examples as e, getDefaultExportFromCjs as g, jsxRuntimeExports as j, reactExports as r };
