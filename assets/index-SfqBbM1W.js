true&&(function polyfill() {
    const relList = document.createElement('link').relList;
    if (relList && relList.supports && relList.supports('modulepreload')) {
        return;
    }
    for (const link of document.querySelectorAll('link[rel="modulepreload"]')) {
        processPreload(link);
    }
    new MutationObserver((mutations) => {
        for (const mutation of mutations) {
            if (mutation.type !== 'childList') {
                continue;
            }
            for (const node of mutation.addedNodes) {
                if (node.tagName === 'LINK' && node.rel === 'modulepreload')
                    processPreload(node);
            }
        }
    }).observe(document, { childList: true, subtree: true });
    function getFetchOpts(link) {
        const fetchOpts = {};
        if (link.integrity)
            fetchOpts.integrity = link.integrity;
        if (link.referrerPolicy)
            fetchOpts.referrerPolicy = link.referrerPolicy;
        if (link.crossOrigin === 'use-credentials')
            fetchOpts.credentials = 'include';
        else if (link.crossOrigin === 'anonymous')
            fetchOpts.credentials = 'omit';
        else
            fetchOpts.credentials = 'same-origin';
        return fetchOpts;
    }
    function processPreload(link) {
        if (link.ep)
            // ep marker = processed
            return;
        link.ep = true;
        // prepopulate the load record
        const fetchOpts = getFetchOpts(link);
        fetch(link.href, fetchOpts);
    }
}());

var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

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
var l$2=Symbol.for("react.element"),n$2=Symbol.for("react.portal"),p$3=Symbol.for("react.fragment"),q$2=Symbol.for("react.strict_mode"),r$1=Symbol.for("react.profiler"),t$1=Symbol.for("react.provider"),u$1=Symbol.for("react.context"),v$2=Symbol.for("react.forward_ref"),w$1=Symbol.for("react.suspense"),x$1=Symbol.for("react.memo"),y$1=Symbol.for("react.lazy"),z$2=Symbol.iterator;function A$2(a){if(null===a||"object"!==typeof a)return null;a=z$2&&a[z$2]||a["@@iterator"];return "function"===typeof a?a:null}
var B$2={isMounted:function(){return !1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},C$2=Object.assign,D$2={};function E$2(a,b,e){this.props=a;this.context=b;this.refs=D$2;this.updater=e||B$2;}E$2.prototype.isReactComponent={};
E$2.prototype.setState=function(a,b){if("object"!==typeof a&&"function"!==typeof a&&null!=a)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,a,b,"setState");};E$2.prototype.forceUpdate=function(a){this.updater.enqueueForceUpdate(this,a,"forceUpdate");};function F$1(){}F$1.prototype=E$2.prototype;function G$2(a,b,e){this.props=a;this.context=b;this.refs=D$2;this.updater=e||B$2;}var H$2=G$2.prototype=new F$1;
H$2.constructor=G$2;C$2(H$2,E$2.prototype);H$2.isPureReactComponent=!0;var I$2=Array.isArray,J$1=Object.prototype.hasOwnProperty,K$2={current:null},L$2={key:!0,ref:!0,__self:!0,__source:!0};
function M$2(a,b,e){var d,c={},k=null,h=null;if(null!=b)for(d in void 0!==b.ref&&(h=b.ref),void 0!==b.key&&(k=""+b.key),b)J$1.call(b,d)&&!L$2.hasOwnProperty(d)&&(c[d]=b[d]);var g=arguments.length-2;if(1===g)c.children=e;else if(1<g){for(var f=Array(g),m=0;m<g;m++)f[m]=arguments[m+2];c.children=f;}if(a&&a.defaultProps)for(d in g=a.defaultProps,g)void 0===c[d]&&(c[d]=g[d]);return {$$typeof:l$2,type:a,key:k,ref:h,props:c,_owner:K$2.current}}
function N$2(a,b){return {$$typeof:l$2,type:a.type,key:b,ref:a.ref,props:a.props,_owner:a._owner}}function O$2(a){return "object"===typeof a&&null!==a&&a.$$typeof===l$2}function escape(a){var b={"=":"=0",":":"=2"};return "$"+a.replace(/[=:]/g,function(a){return b[a]})}var P$2=/\/+/g;function Q$2(a,b){return "object"===typeof a&&null!==a&&null!=a.key?escape(""+a.key):b.toString(36)}
function R$2(a,b,e,d,c){var k=typeof a;if("undefined"===k||"boolean"===k)a=null;var h=!1;if(null===a)h=!0;else switch(k){case "string":case "number":h=!0;break;case "object":switch(a.$$typeof){case l$2:case n$2:h=!0;}}if(h)return h=a,c=c(h),a=""===d?"."+Q$2(h,0):d,I$2(c)?(e="",null!=a&&(e=a.replace(P$2,"$&/")+"/"),R$2(c,b,e,"",function(a){return a})):null!=c&&(O$2(c)&&(c=N$2(c,e+(!c.key||h&&h.key===c.key?"":(""+c.key).replace(P$2,"$&/")+"/")+a)),b.push(c)),1;h=0;d=""===d?".":d+":";if(I$2(a))for(var g=0;g<a.length;g++){k=
a[g];var f=d+Q$2(k,g);h+=R$2(k,b,e,f,c);}else if(f=A$2(a),"function"===typeof f)for(a=f.call(a),g=0;!(k=a.next()).done;)k=k.value,f=d+Q$2(k,g++),h+=R$2(k,b,e,f,c);else if("object"===k)throw b=String(a),Error("Objects are not valid as a React child (found: "+("[object Object]"===b?"object with keys {"+Object.keys(a).join(", ")+"}":b)+"). If you meant to render a collection of children, use an array instead.");return h}
function S$2(a,b,e){if(null==a)return a;var d=[],c=0;R$2(a,d,"","",function(a){return b.call(e,a,c++)});return d}function T$2(a){if(-1===a._status){var b=a._result;b=b();b.then(function(b){if(0===a._status||-1===a._status)a._status=1,a._result=b;},function(b){if(0===a._status||-1===a._status)a._status=2,a._result=b;});-1===a._status&&(a._status=0,a._result=b);}if(1===a._status)return a._result.default;throw a._result;}
var U$2={current:null},V$2={transition:null},W$2={ReactCurrentDispatcher:U$2,ReactCurrentBatchConfig:V$2,ReactCurrentOwner:K$2};react_production_min.Children={map:S$2,forEach:function(a,b,e){S$2(a,function(){b.apply(this,arguments);},e);},count:function(a){var b=0;S$2(a,function(){b++;});return b},toArray:function(a){return S$2(a,function(a){return a})||[]},only:function(a){if(!O$2(a))throw Error("React.Children.only expected to receive a single React element child.");return a}};react_production_min.Component=E$2;react_production_min.Fragment=p$3;
react_production_min.Profiler=r$1;react_production_min.PureComponent=G$2;react_production_min.StrictMode=q$2;react_production_min.Suspense=w$1;react_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=W$2;
react_production_min.cloneElement=function(a,b,e){if(null===a||void 0===a)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+a+".");var d=C$2({},a.props),c=a.key,k=a.ref,h=a._owner;if(null!=b){void 0!==b.ref&&(k=b.ref,h=K$2.current);void 0!==b.key&&(c=""+b.key);if(a.type&&a.type.defaultProps)var g=a.type.defaultProps;for(f in b)J$1.call(b,f)&&!L$2.hasOwnProperty(f)&&(d[f]=void 0===b[f]&&void 0!==g?g[f]:b[f]);}var f=arguments.length-2;if(1===f)d.children=e;else if(1<f){g=Array(f);
for(var m=0;m<f;m++)g[m]=arguments[m+2];d.children=g;}return {$$typeof:l$2,type:a.type,key:c,ref:k,props:d,_owner:h}};react_production_min.createContext=function(a){a={$$typeof:u$1,_currentValue:a,_currentValue2:a,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null};a.Provider={$$typeof:t$1,_context:a};return a.Consumer=a};react_production_min.createElement=M$2;react_production_min.createFactory=function(a){var b=M$2.bind(null,a);b.type=a;return b};react_production_min.createRef=function(){return {current:null}};
react_production_min.forwardRef=function(a){return {$$typeof:v$2,render:a}};react_production_min.isValidElement=O$2;react_production_min.lazy=function(a){return {$$typeof:y$1,_payload:{_status:-1,_result:a},_init:T$2}};react_production_min.memo=function(a,b){return {$$typeof:x$1,type:a,compare:void 0===b?null:b}};react_production_min.startTransition=function(a){var b=V$2.transition;V$2.transition={};try{a();}finally{V$2.transition=b;}};react_production_min.unstable_act=function(){throw Error("act(...) is not supported in production builds of React.");};
react_production_min.useCallback=function(a,b){return U$2.current.useCallback(a,b)};react_production_min.useContext=function(a){return U$2.current.useContext(a)};react_production_min.useDebugValue=function(){};react_production_min.useDeferredValue=function(a){return U$2.current.useDeferredValue(a)};react_production_min.useEffect=function(a,b){return U$2.current.useEffect(a,b)};react_production_min.useId=function(){return U$2.current.useId()};react_production_min.useImperativeHandle=function(a,b,e){return U$2.current.useImperativeHandle(a,b,e)};
react_production_min.useInsertionEffect=function(a,b){return U$2.current.useInsertionEffect(a,b)};react_production_min.useLayoutEffect=function(a,b){return U$2.current.useLayoutEffect(a,b)};react_production_min.useMemo=function(a,b){return U$2.current.useMemo(a,b)};react_production_min.useReducer=function(a,b,e){return U$2.current.useReducer(a,b,e)};react_production_min.useRef=function(a){return U$2.current.useRef(a)};react_production_min.useState=function(a){return U$2.current.useState(a)};react_production_min.useSyncExternalStore=function(a,b,e){return U$2.current.useSyncExternalStore(a,b,e)};
react_production_min.useTransition=function(){return U$2.current.useTransition()};react_production_min.version="18.2.0";

{
  react.exports = react_production_min;
}

var reactExports = react.exports;
const React = /*@__PURE__*/getDefaultExportFromCjs(reactExports);

/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var f$1=reactExports,k$1=Symbol.for("react.element"),l$1=Symbol.for("react.fragment"),m$2=Object.prototype.hasOwnProperty,n$1=f$1.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p$2={key:!0,ref:!0,__self:!0,__source:!0};
function q$1(c,a,g){var b,d={},e=null,h=null;void 0!==g&&(e=""+g);void 0!==a.key&&(e=""+a.key);void 0!==a.ref&&(h=a.ref);for(b in a)m$2.call(a,b)&&!p$2.hasOwnProperty(b)&&(d[b]=a[b]);if(c&&c.defaultProps)for(b in a=c.defaultProps,a)void 0===d[b]&&(d[b]=a[b]);return {$$typeof:k$1,type:c,key:e,ref:h,props:d,_owner:n$1.current}}reactJsxRuntime_production_min.Fragment=l$1;reactJsxRuntime_production_min.jsx=q$1;reactJsxRuntime_production_min.jsxs=q$1;

{
  jsxRuntime.exports = reactJsxRuntime_production_min;
}

var jsxRuntimeExports = jsxRuntime.exports;

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

{
  scheduler.exports = scheduler_production_min;
}

var schedulerExports = scheduler.exports;

/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
var aa=reactExports,ca=schedulerExports;function p$1(a){for(var b="https://reactjs.org/docs/error-decoder.html?invariant="+a,c=1;c<arguments.length;c++)b+="&args[]="+encodeURIComponent(arguments[c]);return "Minified React error #"+a+"; visit "+b+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var da=new Set,ea={};function fa(a,b){ha(a,b);ha(a+"Capture",b);}
function ha(a,b){ea[a]=b;for(a=0;a<b.length;a++)da.add(b[a]);}
var ia=!("undefined"===typeof window||"undefined"===typeof window.document||"undefined"===typeof window.document.createElement),ja=Object.prototype.hasOwnProperty,ka=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,la=
{},ma={};function oa(a){if(ja.call(ma,a))return !0;if(ja.call(la,a))return !1;if(ka.test(a))return ma[a]=!0;la[a]=!0;return !1}function pa(a,b,c,d){if(null!==c&&0===c.type)return !1;switch(typeof b){case "function":case "symbol":return !0;case "boolean":if(d)return !1;if(null!==c)return !c.acceptsBooleans;a=a.toLowerCase().slice(0,5);return "data-"!==a&&"aria-"!==a;default:return !1}}
function qa(a,b,c,d){if(null===b||"undefined"===typeof b||pa(a,b,c,d))return !0;if(d)return !1;if(null!==c)switch(c.type){case 3:return !b;case 4:return !1===b;case 5:return isNaN(b);case 6:return isNaN(b)||1>b}return !1}function v$1(a,b,c,d,e,f,g){this.acceptsBooleans=2===b||3===b||4===b;this.attributeName=d;this.attributeNamespace=e;this.mustUseProperty=c;this.propertyName=a;this.type=b;this.sanitizeURL=f;this.removeEmptyString=g;}var z$1={};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(a){z$1[a]=new v$1(a,0,!1,a,null,!1,!1);});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(a){var b=a[0];z$1[b]=new v$1(b,1,!1,a[1],null,!1,!1);});["contentEditable","draggable","spellCheck","value"].forEach(function(a){z$1[a]=new v$1(a,2,!1,a.toLowerCase(),null,!1,!1);});
["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(a){z$1[a]=new v$1(a,2,!1,a,null,!1,!1);});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(a){z$1[a]=new v$1(a,3,!1,a.toLowerCase(),null,!1,!1);});
["checked","multiple","muted","selected"].forEach(function(a){z$1[a]=new v$1(a,3,!0,a,null,!1,!1);});["capture","download"].forEach(function(a){z$1[a]=new v$1(a,4,!1,a,null,!1,!1);});["cols","rows","size","span"].forEach(function(a){z$1[a]=new v$1(a,6,!1,a,null,!1,!1);});["rowSpan","start"].forEach(function(a){z$1[a]=new v$1(a,5,!1,a.toLowerCase(),null,!1,!1);});var ra=/[\-:]([a-z])/g;function sa(a){return a[1].toUpperCase()}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(a){var b=a.replace(ra,
sa);z$1[b]=new v$1(b,1,!1,a,null,!1,!1);});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(a){var b=a.replace(ra,sa);z$1[b]=new v$1(b,1,!1,a,"http://www.w3.org/1999/xlink",!1,!1);});["xml:base","xml:lang","xml:space"].forEach(function(a){var b=a.replace(ra,sa);z$1[b]=new v$1(b,1,!1,a,"http://www.w3.org/XML/1998/namespace",!1,!1);});["tabIndex","crossOrigin"].forEach(function(a){z$1[a]=new v$1(a,1,!1,a.toLowerCase(),null,!1,!1);});
z$1.xlinkHref=new v$1("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(a){z$1[a]=new v$1(a,1,!1,a.toLowerCase(),null,!0,!0);});
function ta(a,b,c,d){var e=z$1.hasOwnProperty(b)?z$1[b]:null;if(null!==e?0!==e.type:d||!(2<b.length)||"o"!==b[0]&&"O"!==b[0]||"n"!==b[1]&&"N"!==b[1])qa(b,c,e,d)&&(c=null),d||null===e?oa(b)&&(null===c?a.removeAttribute(b):a.setAttribute(b,""+c)):e.mustUseProperty?a[e.propertyName]=null===c?3===e.type?!1:"":c:(b=e.attributeName,d=e.attributeNamespace,null===c?a.removeAttribute(b):(e=e.type,c=3===e||4===e&&!0===c?"":""+c,d?a.setAttributeNS(d,b,c):a.setAttribute(b,c)));}
var ua=aa.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,va=Symbol.for("react.element"),wa=Symbol.for("react.portal"),ya=Symbol.for("react.fragment"),za=Symbol.for("react.strict_mode"),Aa=Symbol.for("react.profiler"),Ba=Symbol.for("react.provider"),Ca=Symbol.for("react.context"),Da=Symbol.for("react.forward_ref"),Ea=Symbol.for("react.suspense"),Fa=Symbol.for("react.suspense_list"),Ga=Symbol.for("react.memo"),Ha=Symbol.for("react.lazy");var Ia=Symbol.for("react.offscreen");var Ja=Symbol.iterator;function Ka(a){if(null===a||"object"!==typeof a)return null;a=Ja&&a[Ja]||a["@@iterator"];return "function"===typeof a?a:null}var A$1=Object.assign,La;function Ma(a){if(void 0===La)try{throw Error();}catch(c){var b=c.stack.trim().match(/\n( *(at )?)/);La=b&&b[1]||"";}return "\n"+La+a}var Na=!1;
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
function Ya(a,b){var c=b.checked;return A$1({},b,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:null!=c?c:a._wrapperState.initialChecked})}function Za(a,b){var c=null==b.defaultValue?"":b.defaultValue,d=null!=b.checked?b.checked:b.defaultChecked;c=Sa(null!=b.value?b.value:c);a._wrapperState={initialChecked:d,initialValue:c,controlled:"checkbox"===b.type||"radio"===b.type?null!=b.checked:null!=b.value};}function ab(a,b){b=b.checked;null!=b&&ta(a,"checked",b,!1);}
function bb(a,b){ab(a,b);var c=Sa(b.value),d=b.type;if(null!=c)if("number"===d){if(0===c&&""===a.value||a.value!=c)a.value=""+c;}else a.value!==""+c&&(a.value=""+c);else if("submit"===d||"reset"===d){a.removeAttribute("value");return}b.hasOwnProperty("value")?cb(a,b.type,c):b.hasOwnProperty("defaultValue")&&cb(a,b.type,Sa(b.defaultValue));null==b.checked&&null!=b.defaultChecked&&(a.defaultChecked=!!b.defaultChecked);}
function db(a,b,c){if(b.hasOwnProperty("value")||b.hasOwnProperty("defaultValue")){var d=b.type;if(!("submit"!==d&&"reset"!==d||void 0!==b.value&&null!==b.value))return;b=""+a._wrapperState.initialValue;c||b===a.value||(a.value=b);a.defaultValue=b;}c=a.name;""!==c&&(a.name="");a.defaultChecked=!!a._wrapperState.initialChecked;""!==c&&(a.name=c);}
function cb(a,b,c){if("number"!==b||Xa(a.ownerDocument)!==a)null==c?a.defaultValue=""+a._wrapperState.initialValue:a.defaultValue!==""+c&&(a.defaultValue=""+c);}var eb=Array.isArray;
function fb(a,b,c,d){a=a.options;if(b){b={};for(var e=0;e<c.length;e++)b["$"+c[e]]=!0;for(c=0;c<a.length;c++)e=b.hasOwnProperty("$"+a[c].value),a[c].selected!==e&&(a[c].selected=e),e&&d&&(a[c].defaultSelected=!0);}else {c=""+Sa(c);b=null;for(e=0;e<a.length;e++){if(a[e].value===c){a[e].selected=!0;d&&(a[e].defaultSelected=!0);return}null!==b||a[e].disabled||(b=a[e]);}null!==b&&(b.selected=!0);}}
function gb(a,b){if(null!=b.dangerouslySetInnerHTML)throw Error(p$1(91));return A$1({},b,{value:void 0,defaultValue:void 0,children:""+a._wrapperState.initialValue})}function hb(a,b){var c=b.value;if(null==c){c=b.children;b=b.defaultValue;if(null!=c){if(null!=b)throw Error(p$1(92));if(eb(c)){if(1<c.length)throw Error(p$1(93));c=c[0];}b=c;}null==b&&(b="");c=b;}a._wrapperState={initialValue:Sa(c)};}
function ib(a,b){var c=Sa(b.value),d=Sa(b.defaultValue);null!=c&&(c=""+c,c!==a.value&&(a.value=c),null==b.defaultValue&&a.defaultValue!==c&&(a.defaultValue=c));null!=d&&(a.defaultValue=""+d);}function jb(a){var b=a.textContent;b===a._wrapperState.initialValue&&""!==b&&null!==b&&(a.value=b);}function kb(a){switch(a){case "svg":return "http://www.w3.org/2000/svg";case "math":return "http://www.w3.org/1998/Math/MathML";default:return "http://www.w3.org/1999/xhtml"}}
function lb(a,b){return null==a||"http://www.w3.org/1999/xhtml"===a?kb(b):"http://www.w3.org/2000/svg"===a&&"foreignObject"===b?"http://www.w3.org/1999/xhtml":a}
var mb,nb=function(a){return "undefined"!==typeof MSApp&&MSApp.execUnsafeLocalFunction?function(b,c,d,e){MSApp.execUnsafeLocalFunction(function(){return a(b,c,d,e)});}:a}(function(a,b){if("http://www.w3.org/2000/svg"!==a.namespaceURI||"innerHTML"in a)a.innerHTML=b;else {mb=mb||document.createElement("div");mb.innerHTML="<svg>"+b.valueOf().toString()+"</svg>";for(b=mb.firstChild;a.firstChild;)a.removeChild(a.firstChild);for(;b.firstChild;)a.appendChild(b.firstChild);}});
function ob(a,b){if(b){var c=a.firstChild;if(c&&c===a.lastChild&&3===c.nodeType){c.nodeValue=b;return}}a.textContent=b;}
var pb={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,
zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},qb=["Webkit","ms","Moz","O"];Object.keys(pb).forEach(function(a){qb.forEach(function(b){b=b+a.charAt(0).toUpperCase()+a.substring(1);pb[b]=pb[a];});});function rb(a,b,c){return null==b||"boolean"===typeof b||""===b?"":c||"number"!==typeof b||0===b||pb.hasOwnProperty(a)&&pb[a]?(""+b).trim():b+"px"}
function sb(a,b){a=a.style;for(var c in b)if(b.hasOwnProperty(c)){var d=0===c.indexOf("--"),e=rb(c,b[c],d);"float"===c&&(c="cssFloat");d?a.setProperty(c,e):a[c]=e;}}var tb=A$1({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});
function ub(a,b){if(b){if(tb[a]&&(null!=b.children||null!=b.dangerouslySetInnerHTML))throw Error(p$1(137,a));if(null!=b.dangerouslySetInnerHTML){if(null!=b.children)throw Error(p$1(60));if("object"!==typeof b.dangerouslySetInnerHTML||!("__html"in b.dangerouslySetInnerHTML))throw Error(p$1(61));}if(null!=b.style&&"object"!==typeof b.style)throw Error(p$1(62));}}
function vb(a,b){if(-1===a.indexOf("-"))return "string"===typeof b.is;switch(a){case "annotation-xml":case "color-profile":case "font-face":case "font-face-src":case "font-face-uri":case "font-face-format":case "font-face-name":case "missing-glyph":return !1;default:return !0}}var wb=null;function xb(a){a=a.target||a.srcElement||window;a.correspondingUseElement&&(a=a.correspondingUseElement);return 3===a.nodeType?a.parentNode:a}var yb=null,zb=null,Ab=null;
function Bb(a){if(a=Cb(a)){if("function"!==typeof yb)throw Error(p$1(280));var b=a.stateNode;b&&(b=Db(b),yb(a.stateNode,a.type,b));}}function Eb(a){zb?Ab?Ab.push(a):Ab=[a]:zb=a;}function Fb(){if(zb){var a=zb,b=Ab;Ab=zb=null;Bb(a);if(b)for(a=0;a<b.length;a++)Bb(b[a]);}}function Gb(a,b){return a(b)}function Hb(){}var Ib=!1;function Jb(a,b,c){if(Ib)return a(b,c);Ib=!0;try{return Gb(a,b,c)}finally{if(Ib=!1,null!==zb||null!==Ab)Hb(),Fb();}}
function Kb(a,b){var c=a.stateNode;if(null===c)return null;var d=Db(c);if(null===d)return null;c=d[b];a:switch(b){case "onClick":case "onClickCapture":case "onDoubleClick":case "onDoubleClickCapture":case "onMouseDown":case "onMouseDownCapture":case "onMouseMove":case "onMouseMoveCapture":case "onMouseUp":case "onMouseUpCapture":case "onMouseEnter":(d=!d.disabled)||(a=a.type,d=!("button"===a||"input"===a||"select"===a||"textarea"===a));a=!d;break a;default:a=!1;}if(a)return null;if(c&&"function"!==
typeof c)throw Error(p$1(231,b,typeof c));return c}var Lb=!1;if(ia)try{var Mb={};Object.defineProperty(Mb,"passive",{get:function(){Lb=!0;}});window.addEventListener("test",Mb,Mb);window.removeEventListener("test",Mb,Mb);}catch(a){Lb=!1;}function Nb(a,b,c,d,e,f,g,h,k){var l=Array.prototype.slice.call(arguments,3);try{b.apply(c,l);}catch(m){this.onError(m);}}var Ob=!1,Pb=null,Qb=!1,Rb=null,Sb={onError:function(a){Ob=!0;Pb=a;}};function Tb(a,b,c,d,e,f,g,h,k){Ob=!1;Pb=null;Nb.apply(Sb,arguments);}
function Ub(a,b,c,d,e,f,g,h,k){Tb.apply(this,arguments);if(Ob){if(Ob){var l=Pb;Ob=!1;Pb=null;}else throw Error(p$1(198));Qb||(Qb=!0,Rb=l);}}function Vb(a){var b=a,c=a;if(a.alternate)for(;b.return;)b=b.return;else {a=b;do b=a,0!==(b.flags&4098)&&(c=b.return),a=b.return;while(a)}return 3===b.tag?c:null}function Wb(a){if(13===a.tag){var b=a.memoizedState;null===b&&(a=a.alternate,null!==a&&(b=a.memoizedState));if(null!==b)return b.dehydrated}return null}function Xb(a){if(Vb(a)!==a)throw Error(p$1(188));}
function Yb(a){var b=a.alternate;if(!b){b=Vb(a);if(null===b)throw Error(p$1(188));return b!==a?null:a}for(var c=a,d=b;;){var e=c.return;if(null===e)break;var f=e.alternate;if(null===f){d=e.return;if(null!==d){c=d;continue}break}if(e.child===f.child){for(f=e.child;f;){if(f===c)return Xb(e),a;if(f===d)return Xb(e),b;f=f.sibling;}throw Error(p$1(188));}if(c.return!==d.return)c=e,d=f;else {for(var g=!1,h=e.child;h;){if(h===c){g=!0;c=e;d=f;break}if(h===d){g=!0;d=e;c=f;break}h=h.sibling;}if(!g){for(h=f.child;h;){if(h===
c){g=!0;c=f;d=e;break}if(h===d){g=!0;d=f;c=e;break}h=h.sibling;}if(!g)throw Error(p$1(189));}}if(c.alternate!==d)throw Error(p$1(190));}if(3!==c.tag)throw Error(p$1(188));return c.stateNode.current===c?a:b}function Zb(a){a=Yb(a);return null!==a?$b(a):null}function $b(a){if(5===a.tag||6===a.tag)return a;for(a=a.child;null!==a;){var b=$b(a);if(null!==b)return b;a=a.sibling;}return null}
var ac=ca.unstable_scheduleCallback,bc=ca.unstable_cancelCallback,cc=ca.unstable_shouldYield,dc=ca.unstable_requestPaint,B$1=ca.unstable_now,ec=ca.unstable_getCurrentPriorityLevel,fc=ca.unstable_ImmediatePriority,gc=ca.unstable_UserBlockingPriority,hc=ca.unstable_NormalPriority,ic=ca.unstable_LowPriority,jc=ca.unstable_IdlePriority,kc=null,lc=null;function mc(a){if(lc&&"function"===typeof lc.onCommitFiberRoot)try{lc.onCommitFiberRoot(kc,a,void 0,128===(a.current.flags&128));}catch(b){}}
var oc=Math.clz32?Math.clz32:nc,pc=Math.log,qc=Math.LN2;function nc(a){a>>>=0;return 0===a?32:31-(pc(a)/qc|0)|0}var rc=64,sc=4194304;
function tc(a){switch(a&-a){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return a&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return a&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;
default:return a}}function uc(a,b){var c=a.pendingLanes;if(0===c)return 0;var d=0,e=a.suspendedLanes,f=a.pingedLanes,g=c&268435455;if(0!==g){var h=g&~e;0!==h?d=tc(h):(f&=g,0!==f&&(d=tc(f)));}else g=c&~e,0!==g?d=tc(g):0!==f&&(d=tc(f));if(0===d)return 0;if(0!==b&&b!==d&&0===(b&e)&&(e=d&-d,f=b&-b,e>=f||16===e&&0!==(f&4194240)))return b;0!==(d&4)&&(d|=c&16);b=a.entangledLanes;if(0!==b)for(a=a.entanglements,b&=d;0<b;)c=31-oc(b),e=1<<c,d|=a[c],b&=~e;return d}
function vc(a,b){switch(a){case 1:case 2:case 4:return b+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return b+5E3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return -1;case 134217728:case 268435456:case 536870912:case 1073741824:return -1;default:return -1}}
function wc(a,b){for(var c=a.suspendedLanes,d=a.pingedLanes,e=a.expirationTimes,f=a.pendingLanes;0<f;){var g=31-oc(f),h=1<<g,k=e[g];if(-1===k){if(0===(h&c)||0!==(h&d))e[g]=vc(h,b);}else k<=b&&(a.expiredLanes|=h);f&=~h;}}function xc(a){a=a.pendingLanes&-1073741825;return 0!==a?a:a&1073741824?1073741824:0}function yc(){var a=rc;rc<<=1;0===(rc&4194240)&&(rc=64);return a}function zc(a){for(var b=[],c=0;31>c;c++)b.push(a);return b}
function Ac(a,b,c){a.pendingLanes|=b;536870912!==b&&(a.suspendedLanes=0,a.pingedLanes=0);a=a.eventTimes;b=31-oc(b);a[b]=c;}function Bc(a,b){var c=a.pendingLanes&~b;a.pendingLanes=b;a.suspendedLanes=0;a.pingedLanes=0;a.expiredLanes&=b;a.mutableReadLanes&=b;a.entangledLanes&=b;b=a.entanglements;var d=a.eventTimes;for(a=a.expirationTimes;0<c;){var e=31-oc(c),f=1<<e;b[e]=0;d[e]=-1;a[e]=-1;c&=~f;}}
function Cc(a,b){var c=a.entangledLanes|=b;for(a=a.entanglements;c;){var d=31-oc(c),e=1<<d;e&b|a[d]&b&&(a[d]|=b);c&=~e;}}var C$1=0;function Dc(a){a&=-a;return 1<a?4<a?0!==(a&268435455)?16:536870912:4:1}var Ec,Fc,Gc,Hc,Ic,Jc=!1,Kc=[],Lc=null,Mc=null,Nc=null,Oc=new Map,Pc=new Map,Qc=[],Rc="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");
function Sc(a,b){switch(a){case "focusin":case "focusout":Lc=null;break;case "dragenter":case "dragleave":Mc=null;break;case "mouseover":case "mouseout":Nc=null;break;case "pointerover":case "pointerout":Oc.delete(b.pointerId);break;case "gotpointercapture":case "lostpointercapture":Pc.delete(b.pointerId);}}
function Tc(a,b,c,d,e,f){if(null===a||a.nativeEvent!==f)return a={blockedOn:b,domEventName:c,eventSystemFlags:d,nativeEvent:f,targetContainers:[e]},null!==b&&(b=Cb(b),null!==b&&Fc(b)),a;a.eventSystemFlags|=d;b=a.targetContainers;null!==e&&-1===b.indexOf(e)&&b.push(e);return a}
function Uc(a,b,c,d,e){switch(b){case "focusin":return Lc=Tc(Lc,a,b,c,d,e),!0;case "dragenter":return Mc=Tc(Mc,a,b,c,d,e),!0;case "mouseover":return Nc=Tc(Nc,a,b,c,d,e),!0;case "pointerover":var f=e.pointerId;Oc.set(f,Tc(Oc.get(f)||null,a,b,c,d,e));return !0;case "gotpointercapture":return f=e.pointerId,Pc.set(f,Tc(Pc.get(f)||null,a,b,c,d,e)),!0}return !1}
function Vc(a){var b=Wc(a.target);if(null!==b){var c=Vb(b);if(null!==c)if(b=c.tag,13===b){if(b=Wb(c),null!==b){a.blockedOn=b;Ic(a.priority,function(){Gc(c);});return}}else if(3===b&&c.stateNode.current.memoizedState.isDehydrated){a.blockedOn=3===c.tag?c.stateNode.containerInfo:null;return}}a.blockedOn=null;}
function Xc(a){if(null!==a.blockedOn)return !1;for(var b=a.targetContainers;0<b.length;){var c=Yc(a.domEventName,a.eventSystemFlags,b[0],a.nativeEvent);if(null===c){c=a.nativeEvent;var d=new c.constructor(c.type,c);wb=d;c.target.dispatchEvent(d);wb=null;}else return b=Cb(c),null!==b&&Fc(b),a.blockedOn=c,!1;b.shift();}return !0}function Zc(a,b,c){Xc(a)&&c.delete(b);}function $c(){Jc=!1;null!==Lc&&Xc(Lc)&&(Lc=null);null!==Mc&&Xc(Mc)&&(Mc=null);null!==Nc&&Xc(Nc)&&(Nc=null);Oc.forEach(Zc);Pc.forEach(Zc);}
function ad(a,b){a.blockedOn===b&&(a.blockedOn=null,Jc||(Jc=!0,ca.unstable_scheduleCallback(ca.unstable_NormalPriority,$c)));}
function bd(a){function b(b){return ad(b,a)}if(0<Kc.length){ad(Kc[0],a);for(var c=1;c<Kc.length;c++){var d=Kc[c];d.blockedOn===a&&(d.blockedOn=null);}}null!==Lc&&ad(Lc,a);null!==Mc&&ad(Mc,a);null!==Nc&&ad(Nc,a);Oc.forEach(b);Pc.forEach(b);for(c=0;c<Qc.length;c++)d=Qc[c],d.blockedOn===a&&(d.blockedOn=null);for(;0<Qc.length&&(c=Qc[0],null===c.blockedOn);)Vc(c),null===c.blockedOn&&Qc.shift();}var cd=ua.ReactCurrentBatchConfig,dd=!0;
function ed(a,b,c,d){var e=C$1,f=cd.transition;cd.transition=null;try{C$1=1,fd(a,b,c,d);}finally{C$1=e,cd.transition=f;}}function gd(a,b,c,d){var e=C$1,f=cd.transition;cd.transition=null;try{C$1=4,fd(a,b,c,d);}finally{C$1=e,cd.transition=f;}}
function fd(a,b,c,d){if(dd){var e=Yc(a,b,c,d);if(null===e)hd(a,b,d,id,c),Sc(a,d);else if(Uc(e,a,b,c,d))d.stopPropagation();else if(Sc(a,d),b&4&&-1<Rc.indexOf(a)){for(;null!==e;){var f=Cb(e);null!==f&&Ec(f);f=Yc(a,b,c,d);null===f&&hd(a,b,d,id,c);if(f===e)break;e=f;}null!==e&&d.stopPropagation();}else hd(a,b,d,null,c);}}var id=null;
function Yc(a,b,c,d){id=null;a=xb(d);a=Wc(a);if(null!==a)if(b=Vb(a),null===b)a=null;else if(c=b.tag,13===c){a=Wb(b);if(null!==a)return a;a=null;}else if(3===c){if(b.stateNode.current.memoizedState.isDehydrated)return 3===b.tag?b.stateNode.containerInfo:null;a=null;}else b!==a&&(a=null);id=a;return null}
function jd(a){switch(a){case "cancel":case "click":case "close":case "contextmenu":case "copy":case "cut":case "auxclick":case "dblclick":case "dragend":case "dragstart":case "drop":case "focusin":case "focusout":case "input":case "invalid":case "keydown":case "keypress":case "keyup":case "mousedown":case "mouseup":case "paste":case "pause":case "play":case "pointercancel":case "pointerdown":case "pointerup":case "ratechange":case "reset":case "resize":case "seeked":case "submit":case "touchcancel":case "touchend":case "touchstart":case "volumechange":case "change":case "selectionchange":case "textInput":case "compositionstart":case "compositionend":case "compositionupdate":case "beforeblur":case "afterblur":case "beforeinput":case "blur":case "fullscreenchange":case "focus":case "hashchange":case "popstate":case "select":case "selectstart":return 1;case "drag":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "mousemove":case "mouseout":case "mouseover":case "pointermove":case "pointerout":case "pointerover":case "scroll":case "toggle":case "touchmove":case "wheel":case "mouseenter":case "mouseleave":case "pointerenter":case "pointerleave":return 4;
case "message":switch(ec()){case fc:return 1;case gc:return 4;case hc:case ic:return 16;case jc:return 536870912;default:return 16}default:return 16}}var kd=null,ld=null,md=null;function nd(){if(md)return md;var a,b=ld,c=b.length,d,e="value"in kd?kd.value:kd.textContent,f=e.length;for(a=0;a<c&&b[a]===e[a];a++);var g=c-a;for(d=1;d<=g&&b[c-d]===e[f-d];d++);return md=e.slice(a,1<d?1-d:void 0)}
function od(a){var b=a.keyCode;"charCode"in a?(a=a.charCode,0===a&&13===b&&(a=13)):a=b;10===a&&(a=13);return 32<=a||13===a?a:0}function pd(){return !0}function qd(){return !1}
function rd(a){function b(b,d,e,f,g){this._reactName=b;this._targetInst=e;this.type=d;this.nativeEvent=f;this.target=g;this.currentTarget=null;for(var c in a)a.hasOwnProperty(c)&&(b=a[c],this[c]=b?b(f):f[c]);this.isDefaultPrevented=(null!=f.defaultPrevented?f.defaultPrevented:!1===f.returnValue)?pd:qd;this.isPropagationStopped=qd;return this}A$1(b.prototype,{preventDefault:function(){this.defaultPrevented=!0;var a=this.nativeEvent;a&&(a.preventDefault?a.preventDefault():"unknown"!==typeof a.returnValue&&
(a.returnValue=!1),this.isDefaultPrevented=pd);},stopPropagation:function(){var a=this.nativeEvent;a&&(a.stopPropagation?a.stopPropagation():"unknown"!==typeof a.cancelBubble&&(a.cancelBubble=!0),this.isPropagationStopped=pd);},persist:function(){},isPersistent:pd});return b}
var sd={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(a){return a.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},td=rd(sd),ud=A$1({},sd,{view:0,detail:0}),vd=rd(ud),wd,xd,yd,Ad=A$1({},ud,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:zd,button:0,buttons:0,relatedTarget:function(a){return void 0===a.relatedTarget?a.fromElement===a.srcElement?a.toElement:a.fromElement:a.relatedTarget},movementX:function(a){if("movementX"in
a)return a.movementX;a!==yd&&(yd&&"mousemove"===a.type?(wd=a.screenX-yd.screenX,xd=a.screenY-yd.screenY):xd=wd=0,yd=a);return wd},movementY:function(a){return "movementY"in a?a.movementY:xd}}),Bd=rd(Ad),Cd=A$1({},Ad,{dataTransfer:0}),Dd=rd(Cd),Ed=A$1({},ud,{relatedTarget:0}),Fd=rd(Ed),Gd=A$1({},sd,{animationName:0,elapsedTime:0,pseudoElement:0}),Hd=rd(Gd),Id=A$1({},sd,{clipboardData:function(a){return "clipboardData"in a?a.clipboardData:window.clipboardData}}),Jd=rd(Id),Kd=A$1({},sd,{data:0}),Ld=rd(Kd),Md={Esc:"Escape",
Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Nd={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",
119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},Od={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function Pd(a){var b=this.nativeEvent;return b.getModifierState?b.getModifierState(a):(a=Od[a])?!!b[a]:!1}function zd(){return Pd}
var Qd=A$1({},ud,{key:function(a){if(a.key){var b=Md[a.key]||a.key;if("Unidentified"!==b)return b}return "keypress"===a.type?(a=od(a),13===a?"Enter":String.fromCharCode(a)):"keydown"===a.type||"keyup"===a.type?Nd[a.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:zd,charCode:function(a){return "keypress"===a.type?od(a):0},keyCode:function(a){return "keydown"===a.type||"keyup"===a.type?a.keyCode:0},which:function(a){return "keypress"===
a.type?od(a):"keydown"===a.type||"keyup"===a.type?a.keyCode:0}}),Rd=rd(Qd),Sd=A$1({},Ad,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),Td=rd(Sd),Ud=A$1({},ud,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:zd}),Vd=rd(Ud),Wd=A$1({},sd,{propertyName:0,elapsedTime:0,pseudoElement:0}),Xd=rd(Wd),Yd=A$1({},Ad,{deltaX:function(a){return "deltaX"in a?a.deltaX:"wheelDeltaX"in a?-a.wheelDeltaX:0},
deltaY:function(a){return "deltaY"in a?a.deltaY:"wheelDeltaY"in a?-a.wheelDeltaY:"wheelDelta"in a?-a.wheelDelta:0},deltaZ:0,deltaMode:0}),Zd=rd(Yd),$d=[9,13,27,32],ae$1=ia&&"CompositionEvent"in window,be$1=null;ia&&"documentMode"in document&&(be$1=document.documentMode);var ce$1=ia&&"TextEvent"in window&&!be$1,de$1=ia&&(!ae$1||be$1&&8<be$1&&11>=be$1),ee$1=String.fromCharCode(32),fe$1=!1;
function ge$1(a,b){switch(a){case "keyup":return -1!==$d.indexOf(b.keyCode);case "keydown":return 229!==b.keyCode;case "keypress":case "mousedown":case "focusout":return !0;default:return !1}}function he$1(a){a=a.detail;return "object"===typeof a&&"data"in a?a.data:null}var ie$1=!1;function je$1(a,b){switch(a){case "compositionend":return he$1(b);case "keypress":if(32!==b.which)return null;fe$1=!0;return ee$1;case "textInput":return a=b.data,a===ee$1&&fe$1?null:a;default:return null}}
function ke$1(a,b){if(ie$1)return "compositionend"===a||!ae$1&&ge$1(a,b)?(a=nd(),md=ld=kd=null,ie$1=!1,a):null;switch(a){case "paste":return null;case "keypress":if(!(b.ctrlKey||b.altKey||b.metaKey)||b.ctrlKey&&b.altKey){if(b.char&&1<b.char.length)return b.char;if(b.which)return String.fromCharCode(b.which)}return null;case "compositionend":return de$1&&"ko"!==b.locale?null:b.data;default:return null}}
var le$1={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function me$1(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return "input"===b?!!le$1[a.type]:"textarea"===b?!0:!1}function ne$1(a,b,c,d){Eb(d);b=oe$1(b,"onChange");0<b.length&&(c=new td("onChange","change",null,c,d),a.push({event:c,listeners:b}));}var pe$1=null,qe$1=null;function re$1(a){se$1(a,0);}function te$1(a){var b=ue$1(a);if(Wa(b))return a}
function ve$1(a,b){if("change"===a)return b}var we$1=!1;if(ia){var xe$1;if(ia){var ye$1="oninput"in document;if(!ye$1){var ze$1=document.createElement("div");ze$1.setAttribute("oninput","return;");ye$1="function"===typeof ze$1.oninput;}xe$1=ye$1;}else xe$1=!1;we$1=xe$1&&(!document.documentMode||9<document.documentMode);}function Ae$1(){pe$1&&(pe$1.detachEvent("onpropertychange",Be$1),qe$1=pe$1=null);}function Be$1(a){if("value"===a.propertyName&&te$1(qe$1)){var b=[];ne$1(b,qe$1,a,xb(a));Jb(re$1,b);}}
function Ce$1(a,b,c){"focusin"===a?(Ae$1(),pe$1=b,qe$1=c,pe$1.attachEvent("onpropertychange",Be$1)):"focusout"===a&&Ae$1();}function De$1(a){if("selectionchange"===a||"keyup"===a||"keydown"===a)return te$1(qe$1)}function Ee$1(a,b){if("click"===a)return te$1(b)}function Fe$1(a,b){if("input"===a||"change"===a)return te$1(b)}function Ge(a,b){return a===b&&(0!==a||1/a===1/b)||a!==a&&b!==b}var He$1="function"===typeof Object.is?Object.is:Ge;
function Ie$1(a,b){if(He$1(a,b))return !0;if("object"!==typeof a||null===a||"object"!==typeof b||null===b)return !1;var c=Object.keys(a),d=Object.keys(b);if(c.length!==d.length)return !1;for(d=0;d<c.length;d++){var e=c[d];if(!ja.call(b,e)||!He$1(a[e],b[e]))return !1}return !0}function Je$1(a){for(;a&&a.firstChild;)a=a.firstChild;return a}
function Ke$1(a,b){var c=Je$1(a);a=0;for(var d;c;){if(3===c.nodeType){d=a+c.textContent.length;if(a<=b&&d>=b)return {node:c,offset:b-a};a=d;}a:{for(;c;){if(c.nextSibling){c=c.nextSibling;break a}c=c.parentNode;}c=void 0;}c=Je$1(c);}}function Le$1(a,b){return a&&b?a===b?!0:a&&3===a.nodeType?!1:b&&3===b.nodeType?Le$1(a,b.parentNode):"contains"in a?a.contains(b):a.compareDocumentPosition?!!(a.compareDocumentPosition(b)&16):!1:!1}
function Me$1(){for(var a=window,b=Xa();b instanceof a.HTMLIFrameElement;){try{var c="string"===typeof b.contentWindow.location.href;}catch(d){c=!1;}if(c)a=b.contentWindow;else break;b=Xa(a.document);}return b}function Ne$1(a){var b=a&&a.nodeName&&a.nodeName.toLowerCase();return b&&("input"===b&&("text"===a.type||"search"===a.type||"tel"===a.type||"url"===a.type||"password"===a.type)||"textarea"===b||"true"===a.contentEditable)}
function Oe$1(a){var b=Me$1(),c=a.focusedElem,d=a.selectionRange;if(b!==c&&c&&c.ownerDocument&&Le$1(c.ownerDocument.documentElement,c)){if(null!==d&&Ne$1(c))if(b=d.start,a=d.end,void 0===a&&(a=b),"selectionStart"in c)c.selectionStart=b,c.selectionEnd=Math.min(a,c.value.length);else if(a=(b=c.ownerDocument||document)&&b.defaultView||window,a.getSelection){a=a.getSelection();var e=c.textContent.length,f=Math.min(d.start,e);d=void 0===d.end?f:Math.min(d.end,e);!a.extend&&f>d&&(e=d,d=f,f=e);e=Ke$1(c,f);var g=Ke$1(c,
d);e&&g&&(1!==a.rangeCount||a.anchorNode!==e.node||a.anchorOffset!==e.offset||a.focusNode!==g.node||a.focusOffset!==g.offset)&&(b=b.createRange(),b.setStart(e.node,e.offset),a.removeAllRanges(),f>d?(a.addRange(b),a.extend(g.node,g.offset)):(b.setEnd(g.node,g.offset),a.addRange(b)));}b=[];for(a=c;a=a.parentNode;)1===a.nodeType&&b.push({element:a,left:a.scrollLeft,top:a.scrollTop});"function"===typeof c.focus&&c.focus();for(c=0;c<b.length;c++)a=b[c],a.element.scrollLeft=a.left,a.element.scrollTop=a.top;}}
var Pe$1=ia&&"documentMode"in document&&11>=document.documentMode,Qe$1=null,Re$1=null,Se$1=null,Te$1=!1;
function Ue$1(a,b,c){var d=c.window===c?c.document:9===c.nodeType?c:c.ownerDocument;Te$1||null==Qe$1||Qe$1!==Xa(d)||(d=Qe$1,"selectionStart"in d&&Ne$1(d)?d={start:d.selectionStart,end:d.selectionEnd}:(d=(d.ownerDocument&&d.ownerDocument.defaultView||window).getSelection(),d={anchorNode:d.anchorNode,anchorOffset:d.anchorOffset,focusNode:d.focusNode,focusOffset:d.focusOffset}),Se$1&&Ie$1(Se$1,d)||(Se$1=d,d=oe$1(Re$1,"onSelect"),0<d.length&&(b=new td("onSelect","select",null,b,c),a.push({event:b,listeners:d}),b.target=Qe$1)));}
function Ve$1(a,b){var c={};c[a.toLowerCase()]=b.toLowerCase();c["Webkit"+a]="webkit"+b;c["Moz"+a]="moz"+b;return c}var We$1={animationend:Ve$1("Animation","AnimationEnd"),animationiteration:Ve$1("Animation","AnimationIteration"),animationstart:Ve$1("Animation","AnimationStart"),transitionend:Ve$1("Transition","TransitionEnd")},Xe={},Ye$1={};
ia&&(Ye$1=document.createElement("div").style,"AnimationEvent"in window||(delete We$1.animationend.animation,delete We$1.animationiteration.animation,delete We$1.animationstart.animation),"TransitionEvent"in window||delete We$1.transitionend.transition);function Ze$1(a){if(Xe[a])return Xe[a];if(!We$1[a])return a;var b=We$1[a],c;for(c in b)if(b.hasOwnProperty(c)&&c in Ye$1)return Xe[a]=b[c];return a}var $e$1=Ze$1("animationend"),af=Ze$1("animationiteration"),bf=Ze$1("animationstart"),cf=Ze$1("transitionend"),df=new Map,ef="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");
function ff(a,b){df.set(a,b);fa(b,[a]);}for(var gf=0;gf<ef.length;gf++){var hf=ef[gf],jf=hf.toLowerCase(),kf=hf[0].toUpperCase()+hf.slice(1);ff(jf,"on"+kf);}ff($e$1,"onAnimationEnd");ff(af,"onAnimationIteration");ff(bf,"onAnimationStart");ff("dblclick","onDoubleClick");ff("focusin","onFocus");ff("focusout","onBlur");ff(cf,"onTransitionEnd");ha("onMouseEnter",["mouseout","mouseover"]);ha("onMouseLeave",["mouseout","mouseover"]);ha("onPointerEnter",["pointerout","pointerover"]);
ha("onPointerLeave",["pointerout","pointerover"]);fa("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));fa("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));fa("onBeforeInput",["compositionend","keypress","textInput","paste"]);fa("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));fa("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));
fa("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var lf="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),mf=new Set("cancel close invalid load scroll toggle".split(" ").concat(lf));
function nf(a,b,c){var d=a.type||"unknown-event";a.currentTarget=c;Ub(d,b,void 0,a);a.currentTarget=null;}
function se$1(a,b){b=0!==(b&4);for(var c=0;c<a.length;c++){var d=a[c],e=d.event;d=d.listeners;a:{var f=void 0;if(b)for(var g=d.length-1;0<=g;g--){var h=d[g],k=h.instance,l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}else for(g=0;g<d.length;g++){h=d[g];k=h.instance;l=h.currentTarget;h=h.listener;if(k!==f&&e.isPropagationStopped())break a;nf(e,h,l);f=k;}}}if(Qb)throw a=Rb,Qb=!1,Rb=null,a;}
function D$1(a,b){var c=b[of];void 0===c&&(c=b[of]=new Set);var d=a+"__bubble";c.has(d)||(pf(b,a,2,!1),c.add(d));}function qf(a,b,c){var d=0;b&&(d|=4);pf(c,a,d,b);}var rf="_reactListening"+Math.random().toString(36).slice(2);function sf(a){if(!a[rf]){a[rf]=!0;da.forEach(function(b){"selectionchange"!==b&&(mf.has(b)||qf(b,!1,a),qf(b,!0,a));});var b=9===a.nodeType?a:a.ownerDocument;null===b||b[rf]||(b[rf]=!0,qf("selectionchange",!1,b));}}
function pf(a,b,c,d){switch(jd(b)){case 1:var e=ed;break;case 4:e=gd;break;default:e=fd;}c=e.bind(null,b,c,a);e=void 0;!Lb||"touchstart"!==b&&"touchmove"!==b&&"wheel"!==b||(e=!0);d?void 0!==e?a.addEventListener(b,c,{capture:!0,passive:e}):a.addEventListener(b,c,!0):void 0!==e?a.addEventListener(b,c,{passive:e}):a.addEventListener(b,c,!1);}
function hd(a,b,c,d,e){var f=d;if(0===(b&1)&&0===(b&2)&&null!==d)a:for(;;){if(null===d)return;var g=d.tag;if(3===g||4===g){var h=d.stateNode.containerInfo;if(h===e||8===h.nodeType&&h.parentNode===e)break;if(4===g)for(g=d.return;null!==g;){var k=g.tag;if(3===k||4===k)if(k=g.stateNode.containerInfo,k===e||8===k.nodeType&&k.parentNode===e)return;g=g.return;}for(;null!==h;){g=Wc(h);if(null===g)return;k=g.tag;if(5===k||6===k){d=f=g;continue a}h=h.parentNode;}}d=d.return;}Jb(function(){var d=f,e=xb(c),g=[];
a:{var h=df.get(a);if(void 0!==h){var k=td,n=a;switch(a){case "keypress":if(0===od(c))break a;case "keydown":case "keyup":k=Rd;break;case "focusin":n="focus";k=Fd;break;case "focusout":n="blur";k=Fd;break;case "beforeblur":case "afterblur":k=Fd;break;case "click":if(2===c.button)break a;case "auxclick":case "dblclick":case "mousedown":case "mousemove":case "mouseup":case "mouseout":case "mouseover":case "contextmenu":k=Bd;break;case "drag":case "dragend":case "dragenter":case "dragexit":case "dragleave":case "dragover":case "dragstart":case "drop":k=
Dd;break;case "touchcancel":case "touchend":case "touchmove":case "touchstart":k=Vd;break;case $e$1:case af:case bf:k=Hd;break;case cf:k=Xd;break;case "scroll":k=vd;break;case "wheel":k=Zd;break;case "copy":case "cut":case "paste":k=Jd;break;case "gotpointercapture":case "lostpointercapture":case "pointercancel":case "pointerdown":case "pointermove":case "pointerout":case "pointerover":case "pointerup":k=Td;}var t=0!==(b&4),J=!t&&"scroll"===a,x=t?null!==h?h+"Capture":null:h;t=[];for(var w=d,u;null!==
w;){u=w;var F=u.stateNode;5===u.tag&&null!==F&&(u=F,null!==x&&(F=Kb(w,x),null!=F&&t.push(tf(w,F,u))));if(J)break;w=w.return;}0<t.length&&(h=new k(h,n,null,c,e),g.push({event:h,listeners:t}));}}if(0===(b&7)){a:{h="mouseover"===a||"pointerover"===a;k="mouseout"===a||"pointerout"===a;if(h&&c!==wb&&(n=c.relatedTarget||c.fromElement)&&(Wc(n)||n[uf]))break a;if(k||h){h=e.window===e?e:(h=e.ownerDocument)?h.defaultView||h.parentWindow:window;if(k){if(n=c.relatedTarget||c.toElement,k=d,n=n?Wc(n):null,null!==
n&&(J=Vb(n),n!==J||5!==n.tag&&6!==n.tag))n=null;}else k=null,n=d;if(k!==n){t=Bd;F="onMouseLeave";x="onMouseEnter";w="mouse";if("pointerout"===a||"pointerover"===a)t=Td,F="onPointerLeave",x="onPointerEnter",w="pointer";J=null==k?h:ue$1(k);u=null==n?h:ue$1(n);h=new t(F,w+"leave",k,c,e);h.target=J;h.relatedTarget=u;F=null;Wc(e)===d&&(t=new t(x,w+"enter",n,c,e),t.target=u,t.relatedTarget=J,F=t);J=F;if(k&&n)b:{t=k;x=n;w=0;for(u=t;u;u=vf(u))w++;u=0;for(F=x;F;F=vf(F))u++;for(;0<w-u;)t=vf(t),w--;for(;0<u-w;)x=
vf(x),u--;for(;w--;){if(t===x||null!==x&&t===x.alternate)break b;t=vf(t);x=vf(x);}t=null;}else t=null;null!==k&&wf(g,h,k,t,!1);null!==n&&null!==J&&wf(g,J,n,t,!0);}}}a:{h=d?ue$1(d):window;k=h.nodeName&&h.nodeName.toLowerCase();if("select"===k||"input"===k&&"file"===h.type)var na=ve$1;else if(me$1(h))if(we$1)na=Fe$1;else {na=De$1;var xa=Ce$1;}else (k=h.nodeName)&&"input"===k.toLowerCase()&&("checkbox"===h.type||"radio"===h.type)&&(na=Ee$1);if(na&&(na=na(a,d))){ne$1(g,na,c,e);break a}xa&&xa(a,h,d);"focusout"===a&&(xa=h._wrapperState)&&
xa.controlled&&"number"===h.type&&cb(h,"number",h.value);}xa=d?ue$1(d):window;switch(a){case "focusin":if(me$1(xa)||"true"===xa.contentEditable)Qe$1=xa,Re$1=d,Se$1=null;break;case "focusout":Se$1=Re$1=Qe$1=null;break;case "mousedown":Te$1=!0;break;case "contextmenu":case "mouseup":case "dragend":Te$1=!1;Ue$1(g,c,e);break;case "selectionchange":if(Pe$1)break;case "keydown":case "keyup":Ue$1(g,c,e);}var $a;if(ae$1)b:{switch(a){case "compositionstart":var ba="onCompositionStart";break b;case "compositionend":ba="onCompositionEnd";
break b;case "compositionupdate":ba="onCompositionUpdate";break b}ba=void 0;}else ie$1?ge$1(a,c)&&(ba="onCompositionEnd"):"keydown"===a&&229===c.keyCode&&(ba="onCompositionStart");ba&&(de$1&&"ko"!==c.locale&&(ie$1||"onCompositionStart"!==ba?"onCompositionEnd"===ba&&ie$1&&($a=nd()):(kd=e,ld="value"in kd?kd.value:kd.textContent,ie$1=!0)),xa=oe$1(d,ba),0<xa.length&&(ba=new Ld(ba,a,null,c,e),g.push({event:ba,listeners:xa}),$a?ba.data=$a:($a=he$1(c),null!==$a&&(ba.data=$a))));if($a=ce$1?je$1(a,c):ke$1(a,c))d=oe$1(d,"onBeforeInput"),
0<d.length&&(e=new Ld("onBeforeInput","beforeinput",null,c,e),g.push({event:e,listeners:d}),e.data=$a);}se$1(g,b);});}function tf(a,b,c){return {instance:a,listener:b,currentTarget:c}}function oe$1(a,b){for(var c=b+"Capture",d=[];null!==a;){var e=a,f=e.stateNode;5===e.tag&&null!==f&&(e=f,f=Kb(a,c),null!=f&&d.unshift(tf(a,f,e)),f=Kb(a,b),null!=f&&d.push(tf(a,f,e)));a=a.return;}return d}function vf(a){if(null===a)return null;do a=a.return;while(a&&5!==a.tag);return a?a:null}
function wf(a,b,c,d,e){for(var f=b._reactName,g=[];null!==c&&c!==d;){var h=c,k=h.alternate,l=h.stateNode;if(null!==k&&k===d)break;5===h.tag&&null!==l&&(h=l,e?(k=Kb(c,f),null!=k&&g.unshift(tf(c,k,h))):e||(k=Kb(c,f),null!=k&&g.push(tf(c,k,h))));c=c.return;}0!==g.length&&a.push({event:b,listeners:g});}var xf=/\r\n?/g,yf=/\u0000|\uFFFD/g;function zf(a){return ("string"===typeof a?a:""+a).replace(xf,"\n").replace(yf,"")}function Af(a,b,c){b=zf(b);if(zf(a)!==b&&c)throw Error(p$1(425));}function Bf(){}
var Cf=null,Df=null;function Ef(a,b){return "textarea"===a||"noscript"===a||"string"===typeof b.children||"number"===typeof b.children||"object"===typeof b.dangerouslySetInnerHTML&&null!==b.dangerouslySetInnerHTML&&null!=b.dangerouslySetInnerHTML.__html}
var Ff="function"===typeof setTimeout?setTimeout:void 0,Gf="function"===typeof clearTimeout?clearTimeout:void 0,Hf="function"===typeof Promise?Promise:void 0,Jf="function"===typeof queueMicrotask?queueMicrotask:"undefined"!==typeof Hf?function(a){return Hf.resolve(null).then(a).catch(If)}:Ff;function If(a){setTimeout(function(){throw a;});}
function Kf(a,b){var c=b,d=0;do{var e=c.nextSibling;a.removeChild(c);if(e&&8===e.nodeType)if(c=e.data,"/$"===c){if(0===d){a.removeChild(e);bd(b);return}d--;}else "$"!==c&&"$?"!==c&&"$!"!==c||d++;c=e;}while(c);bd(b);}function Lf(a){for(;null!=a;a=a.nextSibling){var b=a.nodeType;if(1===b||3===b)break;if(8===b){b=a.data;if("$"===b||"$!"===b||"$?"===b)break;if("/$"===b)return null}}return a}
function Mf(a){a=a.previousSibling;for(var b=0;a;){if(8===a.nodeType){var c=a.data;if("$"===c||"$!"===c||"$?"===c){if(0===b)return a;b--;}else "/$"===c&&b++;}a=a.previousSibling;}return null}var Nf=Math.random().toString(36).slice(2),Of="__reactFiber$"+Nf,Pf="__reactProps$"+Nf,uf="__reactContainer$"+Nf,of="__reactEvents$"+Nf,Qf="__reactListeners$"+Nf,Rf="__reactHandles$"+Nf;
function Wc(a){var b=a[Of];if(b)return b;for(var c=a.parentNode;c;){if(b=c[uf]||c[Of]){c=b.alternate;if(null!==b.child||null!==c&&null!==c.child)for(a=Mf(a);null!==a;){if(c=a[Of])return c;a=Mf(a);}return b}a=c;c=a.parentNode;}return null}function Cb(a){a=a[Of]||a[uf];return !a||5!==a.tag&&6!==a.tag&&13!==a.tag&&3!==a.tag?null:a}function ue$1(a){if(5===a.tag||6===a.tag)return a.stateNode;throw Error(p$1(33));}function Db(a){return a[Pf]||null}var Sf=[],Tf=-1;function Uf(a){return {current:a}}
function E$1(a){0>Tf||(a.current=Sf[Tf],Sf[Tf]=null,Tf--);}function G$1(a,b){Tf++;Sf[Tf]=a.current;a.current=b;}var Vf={},H$1=Uf(Vf),Wf=Uf(!1),Xf=Vf;function Yf(a,b){var c=a.type.contextTypes;if(!c)return Vf;var d=a.stateNode;if(d&&d.__reactInternalMemoizedUnmaskedChildContext===b)return d.__reactInternalMemoizedMaskedChildContext;var e={},f;for(f in c)e[f]=b[f];d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=b,a.__reactInternalMemoizedMaskedChildContext=e);return e}
function Zf(a){a=a.childContextTypes;return null!==a&&void 0!==a}function $f(){E$1(Wf);E$1(H$1);}function ag(a,b,c){if(H$1.current!==Vf)throw Error(p$1(168));G$1(H$1,b);G$1(Wf,c);}function bg(a,b,c){var d=a.stateNode;b=b.childContextTypes;if("function"!==typeof d.getChildContext)return c;d=d.getChildContext();for(var e in d)if(!(e in b))throw Error(p$1(108,Ra(a)||"Unknown",e));return A$1({},c,d)}
function cg(a){a=(a=a.stateNode)&&a.__reactInternalMemoizedMergedChildContext||Vf;Xf=H$1.current;G$1(H$1,a);G$1(Wf,Wf.current);return !0}function dg(a,b,c){var d=a.stateNode;if(!d)throw Error(p$1(169));c?(a=bg(a,b,Xf),d.__reactInternalMemoizedMergedChildContext=a,E$1(Wf),E$1(H$1),G$1(H$1,a)):E$1(Wf);G$1(Wf,c);}var eg=null,fg=!1,gg=!1;function hg(a){null===eg?eg=[a]:eg.push(a);}function ig(a){fg=!0;hg(a);}
function jg(){if(!gg&&null!==eg){gg=!0;var a=0,b=C$1;try{var c=eg;for(C$1=1;a<c.length;a++){var d=c[a];do d=d(!0);while(null!==d)}eg=null;fg=!1;}catch(e){throw null!==eg&&(eg=eg.slice(a+1)),ac(fc,jg),e;}finally{C$1=b,gg=!1;}}return null}var kg=[],lg=0,mg=null,ng=0,og=[],pg=0,qg=null,rg=1,sg="";function tg(a,b){kg[lg++]=ng;kg[lg++]=mg;mg=a;ng=b;}
function ug(a,b,c){og[pg++]=rg;og[pg++]=sg;og[pg++]=qg;qg=a;var d=rg;a=sg;var e=32-oc(d)-1;d&=~(1<<e);c+=1;var f=32-oc(b)+e;if(30<f){var g=e-e%5;f=(d&(1<<g)-1).toString(32);d>>=g;e-=g;rg=1<<32-oc(b)+e|c<<e|d;sg=f+a;}else rg=1<<f|c<<e|d,sg=a;}function vg(a){null!==a.return&&(tg(a,1),ug(a,1,0));}function wg(a){for(;a===mg;)mg=kg[--lg],kg[lg]=null,ng=kg[--lg],kg[lg]=null;for(;a===qg;)qg=og[--pg],og[pg]=null,sg=og[--pg],og[pg]=null,rg=og[--pg],og[pg]=null;}var xg=null,yg=null,I$1=!1,zg=null;
function Ag(a,b){var c=Bg(5,null,null,0);c.elementType="DELETED";c.stateNode=b;c.return=a;b=a.deletions;null===b?(a.deletions=[c],a.flags|=16):b.push(c);}
function Cg(a,b){switch(a.tag){case 5:var c=a.type;b=1!==b.nodeType||c.toLowerCase()!==b.nodeName.toLowerCase()?null:b;return null!==b?(a.stateNode=b,xg=a,yg=Lf(b.firstChild),!0):!1;case 6:return b=""===a.pendingProps||3!==b.nodeType?null:b,null!==b?(a.stateNode=b,xg=a,yg=null,!0):!1;case 13:return b=8!==b.nodeType?null:b,null!==b?(c=null!==qg?{id:rg,overflow:sg}:null,a.memoizedState={dehydrated:b,treeContext:c,retryLane:1073741824},c=Bg(18,null,null,0),c.stateNode=b,c.return=a,a.child=c,xg=a,yg=
null,!0):!1;default:return !1}}function Dg(a){return 0!==(a.mode&1)&&0===(a.flags&128)}function Eg(a){if(I$1){var b=yg;if(b){var c=b;if(!Cg(a,b)){if(Dg(a))throw Error(p$1(418));b=Lf(c.nextSibling);var d=xg;b&&Cg(a,b)?Ag(d,c):(a.flags=a.flags&-4097|2,I$1=!1,xg=a);}}else {if(Dg(a))throw Error(p$1(418));a.flags=a.flags&-4097|2;I$1=!1;xg=a;}}}function Fg(a){for(a=a.return;null!==a&&5!==a.tag&&3!==a.tag&&13!==a.tag;)a=a.return;xg=a;}
function Gg(a){if(a!==xg)return !1;if(!I$1)return Fg(a),I$1=!0,!1;var b;(b=3!==a.tag)&&!(b=5!==a.tag)&&(b=a.type,b="head"!==b&&"body"!==b&&!Ef(a.type,a.memoizedProps));if(b&&(b=yg)){if(Dg(a))throw Hg(),Error(p$1(418));for(;b;)Ag(a,b),b=Lf(b.nextSibling);}Fg(a);if(13===a.tag){a=a.memoizedState;a=null!==a?a.dehydrated:null;if(!a)throw Error(p$1(317));a:{a=a.nextSibling;for(b=0;a;){if(8===a.nodeType){var c=a.data;if("/$"===c){if(0===b){yg=Lf(a.nextSibling);break a}b--;}else "$"!==c&&"$!"!==c&&"$?"!==c||b++;}a=a.nextSibling;}yg=
null;}}else yg=xg?Lf(a.stateNode.nextSibling):null;return !0}function Hg(){for(var a=yg;a;)a=Lf(a.nextSibling);}function Ig(){yg=xg=null;I$1=!1;}function Jg(a){null===zg?zg=[a]:zg.push(a);}var Kg=ua.ReactCurrentBatchConfig;function Lg(a,b){if(a&&a.defaultProps){b=A$1({},b);a=a.defaultProps;for(var c in a)void 0===b[c]&&(b[c]=a[c]);return b}return b}var Mg=Uf(null),Ng=null,Og=null,Pg=null;function Qg(){Pg=Og=Ng=null;}function Rg(a){var b=Mg.current;E$1(Mg);a._currentValue=b;}
function Sg(a,b,c){for(;null!==a;){var d=a.alternate;(a.childLanes&b)!==b?(a.childLanes|=b,null!==d&&(d.childLanes|=b)):null!==d&&(d.childLanes&b)!==b&&(d.childLanes|=b);if(a===c)break;a=a.return;}}function Tg(a,b){Ng=a;Pg=Og=null;a=a.dependencies;null!==a&&null!==a.firstContext&&(0!==(a.lanes&b)&&(Ug=!0),a.firstContext=null);}
function Vg(a){var b=a._currentValue;if(Pg!==a)if(a={context:a,memoizedValue:b,next:null},null===Og){if(null===Ng)throw Error(p$1(308));Og=a;Ng.dependencies={lanes:0,firstContext:a};}else Og=Og.next=a;return b}var Wg=null;function Xg(a){null===Wg?Wg=[a]:Wg.push(a);}function Yg(a,b,c,d){var e=b.interleaved;null===e?(c.next=c,Xg(b)):(c.next=e.next,e.next=c);b.interleaved=c;return Zg(a,d)}
function Zg(a,b){a.lanes|=b;var c=a.alternate;null!==c&&(c.lanes|=b);c=a;for(a=a.return;null!==a;)a.childLanes|=b,c=a.alternate,null!==c&&(c.childLanes|=b),c=a,a=a.return;return 3===c.tag?c.stateNode:null}var $g=!1;function ah(a){a.updateQueue={baseState:a.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null};}
function bh(a,b){a=a.updateQueue;b.updateQueue===a&&(b.updateQueue={baseState:a.baseState,firstBaseUpdate:a.firstBaseUpdate,lastBaseUpdate:a.lastBaseUpdate,shared:a.shared,effects:a.effects});}function ch(a,b){return {eventTime:a,lane:b,tag:0,payload:null,callback:null,next:null}}
function dh(a,b,c){var d=a.updateQueue;if(null===d)return null;d=d.shared;if(0!==(K$1&2)){var e=d.pending;null===e?b.next=b:(b.next=e.next,e.next=b);d.pending=b;return Zg(a,c)}e=d.interleaved;null===e?(b.next=b,Xg(d)):(b.next=e.next,e.next=b);d.interleaved=b;return Zg(a,c)}function eh(a,b,c){b=b.updateQueue;if(null!==b&&(b=b.shared,0!==(c&4194240))){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
function fh(a,b){var c=a.updateQueue,d=a.alternate;if(null!==d&&(d=d.updateQueue,c===d)){var e=null,f=null;c=c.firstBaseUpdate;if(null!==c){do{var g={eventTime:c.eventTime,lane:c.lane,tag:c.tag,payload:c.payload,callback:c.callback,next:null};null===f?e=f=g:f=f.next=g;c=c.next;}while(null!==c);null===f?e=f=b:f=f.next=b;}else e=f=b;c={baseState:d.baseState,firstBaseUpdate:e,lastBaseUpdate:f,shared:d.shared,effects:d.effects};a.updateQueue=c;return}a=c.lastBaseUpdate;null===a?c.firstBaseUpdate=b:a.next=
b;c.lastBaseUpdate=b;}
function gh(a,b,c,d){var e=a.updateQueue;$g=!1;var f=e.firstBaseUpdate,g=e.lastBaseUpdate,h=e.shared.pending;if(null!==h){e.shared.pending=null;var k=h,l=k.next;k.next=null;null===g?f=l:g.next=l;g=k;var m=a.alternate;null!==m&&(m=m.updateQueue,h=m.lastBaseUpdate,h!==g&&(null===h?m.firstBaseUpdate=l:h.next=l,m.lastBaseUpdate=k));}if(null!==f){var q=e.baseState;g=0;m=l=k=null;h=f;do{var r=h.lane,y=h.eventTime;if((d&r)===r){null!==m&&(m=m.next={eventTime:y,lane:0,tag:h.tag,payload:h.payload,callback:h.callback,
next:null});a:{var n=a,t=h;r=b;y=c;switch(t.tag){case 1:n=t.payload;if("function"===typeof n){q=n.call(y,q,r);break a}q=n;break a;case 3:n.flags=n.flags&-65537|128;case 0:n=t.payload;r="function"===typeof n?n.call(y,q,r):n;if(null===r||void 0===r)break a;q=A$1({},q,r);break a;case 2:$g=!0;}}null!==h.callback&&0!==h.lane&&(a.flags|=64,r=e.effects,null===r?e.effects=[h]:r.push(h));}else y={eventTime:y,lane:r,tag:h.tag,payload:h.payload,callback:h.callback,next:null},null===m?(l=m=y,k=q):m=m.next=y,g|=r;
h=h.next;if(null===h)if(h=e.shared.pending,null===h)break;else r=h,h=r.next,r.next=null,e.lastBaseUpdate=r,e.shared.pending=null;}while(1);null===m&&(k=q);e.baseState=k;e.firstBaseUpdate=l;e.lastBaseUpdate=m;b=e.shared.interleaved;if(null!==b){e=b;do g|=e.lane,e=e.next;while(e!==b)}else null===f&&(e.shared.lanes=0);hh|=g;a.lanes=g;a.memoizedState=q;}}
function ih(a,b,c){a=b.effects;b.effects=null;if(null!==a)for(b=0;b<a.length;b++){var d=a[b],e=d.callback;if(null!==e){d.callback=null;d=c;if("function"!==typeof e)throw Error(p$1(191,e));e.call(d);}}}var jh=(new aa.Component).refs;function kh(a,b,c,d){b=a.memoizedState;c=c(d,b);c=null===c||void 0===c?b:A$1({},b,c);a.memoizedState=c;0===a.lanes&&(a.updateQueue.baseState=c);}
var nh={isMounted:function(a){return (a=a._reactInternals)?Vb(a)===a:!1},enqueueSetState:function(a,b,c){a=a._reactInternals;var d=L$1(),e=lh(a),f=ch(d,e);f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e));},enqueueReplaceState:function(a,b,c){a=a._reactInternals;var d=L$1(),e=lh(a),f=ch(d,e);f.tag=1;f.payload=b;void 0!==c&&null!==c&&(f.callback=c);b=dh(a,f,e);null!==b&&(mh(b,a,e,d),eh(b,a,e));},enqueueForceUpdate:function(a,b){a=a._reactInternals;var c=L$1(),d=
lh(a),e=ch(c,d);e.tag=2;void 0!==b&&null!==b&&(e.callback=b);b=dh(a,e,d);null!==b&&(mh(b,a,d,c),eh(b,a,d));}};function oh(a,b,c,d,e,f,g){a=a.stateNode;return "function"===typeof a.shouldComponentUpdate?a.shouldComponentUpdate(d,f,g):b.prototype&&b.prototype.isPureReactComponent?!Ie$1(c,d)||!Ie$1(e,f):!0}
function ph(a,b,c){var d=!1,e=Vf;var f=b.contextType;"object"===typeof f&&null!==f?f=Vg(f):(e=Zf(b)?Xf:H$1.current,d=b.contextTypes,f=(d=null!==d&&void 0!==d)?Yf(a,e):Vf);b=new b(c,f);a.memoizedState=null!==b.state&&void 0!==b.state?b.state:null;b.updater=nh;a.stateNode=b;b._reactInternals=a;d&&(a=a.stateNode,a.__reactInternalMemoizedUnmaskedChildContext=e,a.__reactInternalMemoizedMaskedChildContext=f);return b}
function qh(a,b,c,d){a=b.state;"function"===typeof b.componentWillReceiveProps&&b.componentWillReceiveProps(c,d);"function"===typeof b.UNSAFE_componentWillReceiveProps&&b.UNSAFE_componentWillReceiveProps(c,d);b.state!==a&&nh.enqueueReplaceState(b,b.state,null);}
function rh(a,b,c,d){var e=a.stateNode;e.props=c;e.state=a.memoizedState;e.refs=jh;ah(a);var f=b.contextType;"object"===typeof f&&null!==f?e.context=Vg(f):(f=Zf(b)?Xf:H$1.current,e.context=Yf(a,f));e.state=a.memoizedState;f=b.getDerivedStateFromProps;"function"===typeof f&&(kh(a,b,f,c),e.state=a.memoizedState);"function"===typeof b.getDerivedStateFromProps||"function"===typeof e.getSnapshotBeforeUpdate||"function"!==typeof e.UNSAFE_componentWillMount&&"function"!==typeof e.componentWillMount||(b=e.state,
"function"===typeof e.componentWillMount&&e.componentWillMount(),"function"===typeof e.UNSAFE_componentWillMount&&e.UNSAFE_componentWillMount(),b!==e.state&&nh.enqueueReplaceState(e,e.state,null),gh(a,c,e,d),e.state=a.memoizedState);"function"===typeof e.componentDidMount&&(a.flags|=4194308);}
function sh(a,b,c){a=c.ref;if(null!==a&&"function"!==typeof a&&"object"!==typeof a){if(c._owner){c=c._owner;if(c){if(1!==c.tag)throw Error(p$1(309));var d=c.stateNode;}if(!d)throw Error(p$1(147,a));var e=d,f=""+a;if(null!==b&&null!==b.ref&&"function"===typeof b.ref&&b.ref._stringRef===f)return b.ref;b=function(a){var b=e.refs;b===jh&&(b=e.refs={});null===a?delete b[f]:b[f]=a;};b._stringRef=f;return b}if("string"!==typeof a)throw Error(p$1(284));if(!c._owner)throw Error(p$1(290,a));}return a}
function th(a,b){a=Object.prototype.toString.call(b);throw Error(p$1(31,"[object Object]"===a?"object with keys {"+Object.keys(b).join(", ")+"}":a));}function uh(a){var b=a._init;return b(a._payload)}
function vh(a){function b(b,c){if(a){var d=b.deletions;null===d?(b.deletions=[c],b.flags|=16):d.push(c);}}function c(c,d){if(!a)return null;for(;null!==d;)b(c,d),d=d.sibling;return null}function d(a,b){for(a=new Map;null!==b;)null!==b.key?a.set(b.key,b):a.set(b.index,b),b=b.sibling;return a}function e(a,b){a=wh(a,b);a.index=0;a.sibling=null;return a}function f(b,c,d){b.index=d;if(!a)return b.flags|=1048576,c;d=b.alternate;if(null!==d)return d=d.index,d<c?(b.flags|=2,c):d;b.flags|=2;return c}function g(b){a&&
null===b.alternate&&(b.flags|=2);return b}function h(a,b,c,d){if(null===b||6!==b.tag)return b=xh(c,a.mode,d),b.return=a,b;b=e(b,c);b.return=a;return b}function k(a,b,c,d){var f=c.type;if(f===ya)return m(a,b,c.props.children,d,c.key);if(null!==b&&(b.elementType===f||"object"===typeof f&&null!==f&&f.$$typeof===Ha&&uh(f)===b.type))return d=e(b,c.props),d.ref=sh(a,b,c),d.return=a,d;d=yh(c.type,c.key,c.props,null,a.mode,d);d.ref=sh(a,b,c);d.return=a;return d}function l(a,b,c,d){if(null===b||4!==b.tag||
b.stateNode.containerInfo!==c.containerInfo||b.stateNode.implementation!==c.implementation)return b=zh(c,a.mode,d),b.return=a,b;b=e(b,c.children||[]);b.return=a;return b}function m(a,b,c,d,f){if(null===b||7!==b.tag)return b=Ah(c,a.mode,d,f),b.return=a,b;b=e(b,c);b.return=a;return b}function q(a,b,c){if("string"===typeof b&&""!==b||"number"===typeof b)return b=xh(""+b,a.mode,c),b.return=a,b;if("object"===typeof b&&null!==b){switch(b.$$typeof){case va:return c=yh(b.type,b.key,b.props,null,a.mode,c),
c.ref=sh(a,null,b),c.return=a,c;case wa:return b=zh(b,a.mode,c),b.return=a,b;case Ha:var d=b._init;return q(a,d(b._payload),c)}if(eb(b)||Ka(b))return b=Ah(b,a.mode,c,null),b.return=a,b;th(a,b);}return null}function r(a,b,c,d){var e=null!==b?b.key:null;if("string"===typeof c&&""!==c||"number"===typeof c)return null!==e?null:h(a,b,""+c,d);if("object"===typeof c&&null!==c){switch(c.$$typeof){case va:return c.key===e?k(a,b,c,d):null;case wa:return c.key===e?l(a,b,c,d):null;case Ha:return e=c._init,r(a,
b,e(c._payload),d)}if(eb(c)||Ka(c))return null!==e?null:m(a,b,c,d,null);th(a,c);}return null}function y(a,b,c,d,e){if("string"===typeof d&&""!==d||"number"===typeof d)return a=a.get(c)||null,h(b,a,""+d,e);if("object"===typeof d&&null!==d){switch(d.$$typeof){case va:return a=a.get(null===d.key?c:d.key)||null,k(b,a,d,e);case wa:return a=a.get(null===d.key?c:d.key)||null,l(b,a,d,e);case Ha:var f=d._init;return y(a,b,c,f(d._payload),e)}if(eb(d)||Ka(d))return a=a.get(c)||null,m(b,a,d,e,null);th(b,d);}return null}
function n(e,g,h,k){for(var l=null,m=null,u=g,w=g=0,x=null;null!==u&&w<h.length;w++){u.index>w?(x=u,u=null):x=u.sibling;var n=r(e,u,h[w],k);if(null===n){null===u&&(u=x);break}a&&u&&null===n.alternate&&b(e,u);g=f(n,g,w);null===m?l=n:m.sibling=n;m=n;u=x;}if(w===h.length)return c(e,u),I$1&&tg(e,w),l;if(null===u){for(;w<h.length;w++)u=q(e,h[w],k),null!==u&&(g=f(u,g,w),null===m?l=u:m.sibling=u,m=u);I$1&&tg(e,w);return l}for(u=d(e,u);w<h.length;w++)x=y(u,e,w,h[w],k),null!==x&&(a&&null!==x.alternate&&u.delete(null===
x.key?w:x.key),g=f(x,g,w),null===m?l=x:m.sibling=x,m=x);a&&u.forEach(function(a){return b(e,a)});I$1&&tg(e,w);return l}function t(e,g,h,k){var l=Ka(h);if("function"!==typeof l)throw Error(p$1(150));h=l.call(h);if(null==h)throw Error(p$1(151));for(var u=l=null,m=g,w=g=0,x=null,n=h.next();null!==m&&!n.done;w++,n=h.next()){m.index>w?(x=m,m=null):x=m.sibling;var t=r(e,m,n.value,k);if(null===t){null===m&&(m=x);break}a&&m&&null===t.alternate&&b(e,m);g=f(t,g,w);null===u?l=t:u.sibling=t;u=t;m=x;}if(n.done)return c(e,
m),I$1&&tg(e,w),l;if(null===m){for(;!n.done;w++,n=h.next())n=q(e,n.value,k),null!==n&&(g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);I$1&&tg(e,w);return l}for(m=d(e,m);!n.done;w++,n=h.next())n=y(m,e,w,n.value,k),null!==n&&(a&&null!==n.alternate&&m.delete(null===n.key?w:n.key),g=f(n,g,w),null===u?l=n:u.sibling=n,u=n);a&&m.forEach(function(a){return b(e,a)});I$1&&tg(e,w);return l}function J(a,d,f,h){"object"===typeof f&&null!==f&&f.type===ya&&null===f.key&&(f=f.props.children);if("object"===typeof f&&null!==f){switch(f.$$typeof){case va:a:{for(var k=
f.key,l=d;null!==l;){if(l.key===k){k=f.type;if(k===ya){if(7===l.tag){c(a,l.sibling);d=e(l,f.props.children);d.return=a;a=d;break a}}else if(l.elementType===k||"object"===typeof k&&null!==k&&k.$$typeof===Ha&&uh(k)===l.type){c(a,l.sibling);d=e(l,f.props);d.ref=sh(a,l,f);d.return=a;a=d;break a}c(a,l);break}else b(a,l);l=l.sibling;}f.type===ya?(d=Ah(f.props.children,a.mode,h,f.key),d.return=a,a=d):(h=yh(f.type,f.key,f.props,null,a.mode,h),h.ref=sh(a,d,f),h.return=a,a=h);}return g(a);case wa:a:{for(l=f.key;null!==
d;){if(d.key===l)if(4===d.tag&&d.stateNode.containerInfo===f.containerInfo&&d.stateNode.implementation===f.implementation){c(a,d.sibling);d=e(d,f.children||[]);d.return=a;a=d;break a}else {c(a,d);break}else b(a,d);d=d.sibling;}d=zh(f,a.mode,h);d.return=a;a=d;}return g(a);case Ha:return l=f._init,J(a,d,l(f._payload),h)}if(eb(f))return n(a,d,f,h);if(Ka(f))return t(a,d,f,h);th(a,f);}return "string"===typeof f&&""!==f||"number"===typeof f?(f=""+f,null!==d&&6===d.tag?(c(a,d.sibling),d=e(d,f),d.return=a,a=d):
(c(a,d),d=xh(f,a.mode,h),d.return=a,a=d),g(a)):c(a,d)}return J}var Bh=vh(!0),Ch=vh(!1),Dh={},Eh=Uf(Dh),Fh=Uf(Dh),Gh=Uf(Dh);function Hh(a){if(a===Dh)throw Error(p$1(174));return a}function Ih(a,b){G$1(Gh,b);G$1(Fh,a);G$1(Eh,Dh);a=b.nodeType;switch(a){case 9:case 11:b=(b=b.documentElement)?b.namespaceURI:lb(null,"");break;default:a=8===a?b.parentNode:b,b=a.namespaceURI||null,a=a.tagName,b=lb(b,a);}E$1(Eh);G$1(Eh,b);}function Jh(){E$1(Eh);E$1(Fh);E$1(Gh);}
function Kh(a){Hh(Gh.current);var b=Hh(Eh.current);var c=lb(b,a.type);b!==c&&(G$1(Fh,a),G$1(Eh,c));}function Lh(a){Fh.current===a&&(E$1(Eh),E$1(Fh));}var M$1=Uf(0);
function Mh(a){for(var b=a;null!==b;){if(13===b.tag){var c=b.memoizedState;if(null!==c&&(c=c.dehydrated,null===c||"$?"===c.data||"$!"===c.data))return b}else if(19===b.tag&&void 0!==b.memoizedProps.revealOrder){if(0!==(b.flags&128))return b}else if(null!==b.child){b.child.return=b;b=b.child;continue}if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return null;b=b.return;}b.sibling.return=b.return;b=b.sibling;}return null}var Nh=[];
function Oh(){for(var a=0;a<Nh.length;a++)Nh[a]._workInProgressVersionPrimary=null;Nh.length=0;}var Ph=ua.ReactCurrentDispatcher,Qh=ua.ReactCurrentBatchConfig,Rh=0,N$1=null,O$1=null,P$1=null,Sh=!1,Th=!1,Uh=0,Vh=0;function Q$1(){throw Error(p$1(321));}function Wh(a,b){if(null===b)return !1;for(var c=0;c<b.length&&c<a.length;c++)if(!He$1(a[c],b[c]))return !1;return !0}
function Xh(a,b,c,d,e,f){Rh=f;N$1=b;b.memoizedState=null;b.updateQueue=null;b.lanes=0;Ph.current=null===a||null===a.memoizedState?Yh:Zh;a=c(d,e);if(Th){f=0;do{Th=!1;Uh=0;if(25<=f)throw Error(p$1(301));f+=1;P$1=O$1=null;b.updateQueue=null;Ph.current=$h;a=c(d,e);}while(Th)}Ph.current=ai$1;b=null!==O$1&&null!==O$1.next;Rh=0;P$1=O$1=N$1=null;Sh=!1;if(b)throw Error(p$1(300));return a}function bi(){var a=0!==Uh;Uh=0;return a}
function ci$1(){var a={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};null===P$1?N$1.memoizedState=P$1=a:P$1=P$1.next=a;return P$1}function di$1(){if(null===O$1){var a=N$1.alternate;a=null!==a?a.memoizedState:null;}else a=O$1.next;var b=null===P$1?N$1.memoizedState:P$1.next;if(null!==b)P$1=b,O$1=a;else {if(null===a)throw Error(p$1(310));O$1=a;a={memoizedState:O$1.memoizedState,baseState:O$1.baseState,baseQueue:O$1.baseQueue,queue:O$1.queue,next:null};null===P$1?N$1.memoizedState=P$1=a:P$1=P$1.next=a;}return P$1}
function ei$1(a,b){return "function"===typeof b?b(a):b}
function fi$1(a){var b=di$1(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=O$1,e=d.baseQueue,f=c.pending;if(null!==f){if(null!==e){var g=e.next;e.next=f.next;f.next=g;}d.baseQueue=e=f;c.pending=null;}if(null!==e){f=e.next;d=d.baseState;var h=g=null,k=null,l=f;do{var m=l.lane;if((Rh&m)===m)null!==k&&(k=k.next={lane:0,action:l.action,hasEagerState:l.hasEagerState,eagerState:l.eagerState,next:null}),d=l.hasEagerState?l.eagerState:a(d,l.action);else {var q={lane:m,action:l.action,hasEagerState:l.hasEagerState,
eagerState:l.eagerState,next:null};null===k?(h=k=q,g=d):k=k.next=q;N$1.lanes|=m;hh|=m;}l=l.next;}while(null!==l&&l!==f);null===k?g=d:k.next=h;He$1(d,b.memoizedState)||(Ug=!0);b.memoizedState=d;b.baseState=g;b.baseQueue=k;c.lastRenderedState=d;}a=c.interleaved;if(null!==a){e=a;do f=e.lane,N$1.lanes|=f,hh|=f,e=e.next;while(e!==a)}else null===e&&(c.lanes=0);return [b.memoizedState,c.dispatch]}
function gi(a){var b=di$1(),c=b.queue;if(null===c)throw Error(p$1(311));c.lastRenderedReducer=a;var d=c.dispatch,e=c.pending,f=b.memoizedState;if(null!==e){c.pending=null;var g=e=e.next;do f=a(f,g.action),g=g.next;while(g!==e);He$1(f,b.memoizedState)||(Ug=!0);b.memoizedState=f;null===b.baseQueue&&(b.baseState=f);c.lastRenderedState=f;}return [f,d]}function hi$1(){}
function ii$1(a,b){var c=N$1,d=di$1(),e=b(),f=!He$1(d.memoizedState,e);f&&(d.memoizedState=e,Ug=!0);d=d.queue;ji(ki.bind(null,c,d,a),[a]);if(d.getSnapshot!==b||f||null!==P$1&&P$1.memoizedState.tag&1){c.flags|=2048;li$1(9,mi$1.bind(null,c,d,e,b),void 0,null);if(null===R$1)throw Error(p$1(349));0!==(Rh&30)||ni$1(c,b,e);}return e}function ni$1(a,b,c){a.flags|=16384;a={getSnapshot:b,value:c};b=N$1.updateQueue;null===b?(b={lastEffect:null,stores:null},N$1.updateQueue=b,b.stores=[a]):(c=b.stores,null===c?b.stores=[a]:c.push(a));}
function mi$1(a,b,c,d){b.value=c;b.getSnapshot=d;oi$1(b)&&pi$1(a);}function ki(a,b,c){return c(function(){oi$1(b)&&pi$1(a);})}function oi$1(a){var b=a.getSnapshot;a=a.value;try{var c=b();return !He$1(a,c)}catch(d){return !0}}function pi$1(a){var b=Zg(a,1);null!==b&&mh(b,a,1,-1);}
function qi(a){var b=ci$1();"function"===typeof a&&(a=a());b.memoizedState=b.baseState=a;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:ei$1,lastRenderedState:a};b.queue=a;a=a.dispatch=ri$1.bind(null,N$1,a);return [b.memoizedState,a]}
function li$1(a,b,c,d){a={tag:a,create:b,destroy:c,deps:d,next:null};b=N$1.updateQueue;null===b?(b={lastEffect:null,stores:null},N$1.updateQueue=b,b.lastEffect=a.next=a):(c=b.lastEffect,null===c?b.lastEffect=a.next=a:(d=c.next,c.next=a,a.next=d,b.lastEffect=a));return a}function si$1(){return di$1().memoizedState}function ti$1(a,b,c,d){var e=ci$1();N$1.flags|=a;e.memoizedState=li$1(1|b,c,void 0,void 0===d?null:d);}
function ui$1(a,b,c,d){var e=di$1();d=void 0===d?null:d;var f=void 0;if(null!==O$1){var g=O$1.memoizedState;f=g.destroy;if(null!==d&&Wh(d,g.deps)){e.memoizedState=li$1(b,c,f,d);return}}N$1.flags|=a;e.memoizedState=li$1(1|b,c,f,d);}function vi$1(a,b){return ti$1(8390656,8,a,b)}function ji(a,b){return ui$1(2048,8,a,b)}function wi(a,b){return ui$1(4,2,a,b)}function xi(a,b){return ui$1(4,4,a,b)}
function yi$1(a,b){if("function"===typeof b)return a=a(),b(a),function(){b(null);};if(null!==b&&void 0!==b)return a=a(),b.current=a,function(){b.current=null;}}function zi(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ui$1(4,4,yi$1.bind(null,b,a),c)}function Ai(){}function Bi(a,b){var c=di$1();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];c.memoizedState=[a,b];return a}
function Ci(a,b){var c=di$1();b=void 0===b?null:b;var d=c.memoizedState;if(null!==d&&null!==b&&Wh(b,d[1]))return d[0];a=a();c.memoizedState=[a,b];return a}function Di(a,b,c){if(0===(Rh&21))return a.baseState&&(a.baseState=!1,Ug=!0),a.memoizedState=c;He$1(c,b)||(c=yc(),N$1.lanes|=c,hh|=c,a.baseState=!0);return b}function Ei(a,b){var c=C$1;C$1=0!==c&&4>c?c:4;a(!0);var d=Qh.transition;Qh.transition={};try{a(!1),b();}finally{C$1=c,Qh.transition=d;}}function Fi(){return di$1().memoizedState}
function Gi(a,b,c){var d=lh(a);c={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,c);else if(c=Yg(a,b,c,d),null!==c){var e=L$1();mh(c,a,d,e);Ji(c,b,d);}}
function ri$1(a,b,c){var d=lh(a),e={lane:d,action:c,hasEagerState:!1,eagerState:null,next:null};if(Hi(a))Ii(b,e);else {var f=a.alternate;if(0===a.lanes&&(null===f||0===f.lanes)&&(f=b.lastRenderedReducer,null!==f))try{var g=b.lastRenderedState,h=f(g,c);e.hasEagerState=!0;e.eagerState=h;if(He$1(h,g)){var k=b.interleaved;null===k?(e.next=e,Xg(b)):(e.next=k.next,k.next=e);b.interleaved=e;return}}catch(l){}finally{}c=Yg(a,b,e,d);null!==c&&(e=L$1(),mh(c,a,d,e),Ji(c,b,d));}}
function Hi(a){var b=a.alternate;return a===N$1||null!==b&&b===N$1}function Ii(a,b){Th=Sh=!0;var c=a.pending;null===c?b.next=b:(b.next=c.next,c.next=b);a.pending=b;}function Ji(a,b,c){if(0!==(c&4194240)){var d=b.lanes;d&=a.pendingLanes;c|=d;b.lanes=c;Cc(a,c);}}
var ai$1={readContext:Vg,useCallback:Q$1,useContext:Q$1,useEffect:Q$1,useImperativeHandle:Q$1,useInsertionEffect:Q$1,useLayoutEffect:Q$1,useMemo:Q$1,useReducer:Q$1,useRef:Q$1,useState:Q$1,useDebugValue:Q$1,useDeferredValue:Q$1,useTransition:Q$1,useMutableSource:Q$1,useSyncExternalStore:Q$1,useId:Q$1,unstable_isNewReconciler:!1},Yh={readContext:Vg,useCallback:function(a,b){ci$1().memoizedState=[a,void 0===b?null:b];return a},useContext:Vg,useEffect:vi$1,useImperativeHandle:function(a,b,c){c=null!==c&&void 0!==c?c.concat([a]):null;return ti$1(4194308,
4,yi$1.bind(null,b,a),c)},useLayoutEffect:function(a,b){return ti$1(4194308,4,a,b)},useInsertionEffect:function(a,b){return ti$1(4,2,a,b)},useMemo:function(a,b){var c=ci$1();b=void 0===b?null:b;a=a();c.memoizedState=[a,b];return a},useReducer:function(a,b,c){var d=ci$1();b=void 0!==c?c(b):b;d.memoizedState=d.baseState=b;a={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:a,lastRenderedState:b};d.queue=a;a=a.dispatch=Gi.bind(null,N$1,a);return [d.memoizedState,a]},useRef:function(a){var b=
ci$1();a={current:a};return b.memoizedState=a},useState:qi,useDebugValue:Ai,useDeferredValue:function(a){return ci$1().memoizedState=a},useTransition:function(){var a=qi(!1),b=a[0];a=Ei.bind(null,a[1]);ci$1().memoizedState=a;return [b,a]},useMutableSource:function(){},useSyncExternalStore:function(a,b,c){var d=N$1,e=ci$1();if(I$1){if(void 0===c)throw Error(p$1(407));c=c();}else {c=b();if(null===R$1)throw Error(p$1(349));0!==(Rh&30)||ni$1(d,b,c);}e.memoizedState=c;var f={value:c,getSnapshot:b};e.queue=f;vi$1(ki.bind(null,d,
f,a),[a]);d.flags|=2048;li$1(9,mi$1.bind(null,d,f,c,b),void 0,null);return c},useId:function(){var a=ci$1(),b=R$1.identifierPrefix;if(I$1){var c=sg;var d=rg;c=(d&~(1<<32-oc(d)-1)).toString(32)+c;b=":"+b+"R"+c;c=Uh++;0<c&&(b+="H"+c.toString(32));b+=":";}else c=Vh++,b=":"+b+"r"+c.toString(32)+":";return a.memoizedState=b},unstable_isNewReconciler:!1},Zh={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:fi$1,useRef:si$1,useState:function(){return fi$1(ei$1)},
useDebugValue:Ai,useDeferredValue:function(a){var b=di$1();return Di(b,O$1.memoizedState,a)},useTransition:function(){var a=fi$1(ei$1)[0],b=di$1().memoizedState;return [a,b]},useMutableSource:hi$1,useSyncExternalStore:ii$1,useId:Fi,unstable_isNewReconciler:!1},$h={readContext:Vg,useCallback:Bi,useContext:Vg,useEffect:ji,useImperativeHandle:zi,useInsertionEffect:wi,useLayoutEffect:xi,useMemo:Ci,useReducer:gi,useRef:si$1,useState:function(){return gi(ei$1)},useDebugValue:Ai,useDeferredValue:function(a){var b=di$1();return null===
O$1?b.memoizedState=a:Di(b,O$1.memoizedState,a)},useTransition:function(){var a=gi(ei$1)[0],b=di$1().memoizedState;return [a,b]},useMutableSource:hi$1,useSyncExternalStore:ii$1,useId:Fi,unstable_isNewReconciler:!1};function Ki(a,b){try{var c="",d=b;do c+=Pa(d),d=d.return;while(d);var e=c;}catch(f){e="\nError generating stack: "+f.message+"\n"+f.stack;}return {value:a,source:b,stack:e,digest:null}}function Li(a,b,c){return {value:a,source:null,stack:null!=c?c:null,digest:null!=b?b:null}}
function Mi(a,b){try{console.error(b.value);}catch(c){setTimeout(function(){throw c;});}}var Ni="function"===typeof WeakMap?WeakMap:Map;function Oi(a,b,c){c=ch(-1,c);c.tag=3;c.payload={element:null};var d=b.value;c.callback=function(){Pi||(Pi=!0,Qi=d);Mi(a,b);};return c}
function Ri(a,b,c){c=ch(-1,c);c.tag=3;var d=a.type.getDerivedStateFromError;if("function"===typeof d){var e=b.value;c.payload=function(){return d(e)};c.callback=function(){Mi(a,b);};}var f=a.stateNode;null!==f&&"function"===typeof f.componentDidCatch&&(c.callback=function(){Mi(a,b);"function"!==typeof d&&(null===Si?Si=new Set([this]):Si.add(this));var c=b.stack;this.componentDidCatch(b.value,{componentStack:null!==c?c:""});});return c}
function Ti(a,b,c){var d=a.pingCache;if(null===d){d=a.pingCache=new Ni;var e=new Set;d.set(b,e);}else e=d.get(b),void 0===e&&(e=new Set,d.set(b,e));e.has(c)||(e.add(c),a=Ui.bind(null,a,b,c),b.then(a,a));}function Vi(a){do{var b;if(b=13===a.tag)b=a.memoizedState,b=null!==b?null!==b.dehydrated?!0:!1:!0;if(b)return a;a=a.return;}while(null!==a);return null}
function Wi(a,b,c,d,e){if(0===(a.mode&1))return a===b?a.flags|=65536:(a.flags|=128,c.flags|=131072,c.flags&=-52805,1===c.tag&&(null===c.alternate?c.tag=17:(b=ch(-1,1),b.tag=2,dh(c,b,1))),c.lanes|=1),a;a.flags|=65536;a.lanes=e;return a}var Xi=ua.ReactCurrentOwner,Ug=!1;function Yi(a,b,c,d){b.child=null===a?Ch(b,null,c,d):Bh(b,a.child,c,d);}
function Zi(a,b,c,d,e){c=c.render;var f=b.ref;Tg(b,e);d=Xh(a,b,c,d,f,e);c=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I$1&&c&&vg(b);b.flags|=1;Yi(a,b,d,e);return b.child}
function aj(a,b,c,d,e){if(null===a){var f=c.type;if("function"===typeof f&&!bj(f)&&void 0===f.defaultProps&&null===c.compare&&void 0===c.defaultProps)return b.tag=15,b.type=f,cj(a,b,f,d,e);a=yh(c.type,null,d,b,b.mode,e);a.ref=b.ref;a.return=b;return b.child=a}f=a.child;if(0===(a.lanes&e)){var g=f.memoizedProps;c=c.compare;c=null!==c?c:Ie$1;if(c(g,d)&&a.ref===b.ref)return $i(a,b,e)}b.flags|=1;a=wh(f,d);a.ref=b.ref;a.return=b;return b.child=a}
function cj(a,b,c,d,e){if(null!==a){var f=a.memoizedProps;if(Ie$1(f,d)&&a.ref===b.ref)if(Ug=!1,b.pendingProps=d=f,0!==(a.lanes&e))0!==(a.flags&131072)&&(Ug=!0);else return b.lanes=a.lanes,$i(a,b,e)}return dj(a,b,c,d,e)}
function ej(a,b,c){var d=b.pendingProps,e=d.children,f=null!==a?a.memoizedState:null;if("hidden"===d.mode)if(0===(b.mode&1))b.memoizedState={baseLanes:0,cachePool:null,transitions:null},G$1(fj,gj),gj|=c;else {if(0===(c&1073741824))return a=null!==f?f.baseLanes|c:c,b.lanes=b.childLanes=1073741824,b.memoizedState={baseLanes:a,cachePool:null,transitions:null},b.updateQueue=null,G$1(fj,gj),gj|=a,null;b.memoizedState={baseLanes:0,cachePool:null,transitions:null};d=null!==f?f.baseLanes:c;G$1(fj,gj);gj|=d;}else null!==
f?(d=f.baseLanes|c,b.memoizedState=null):d=c,G$1(fj,gj),gj|=d;Yi(a,b,e,c);return b.child}function hj(a,b){var c=b.ref;if(null===a&&null!==c||null!==a&&a.ref!==c)b.flags|=512,b.flags|=2097152;}function dj(a,b,c,d,e){var f=Zf(c)?Xf:H$1.current;f=Yf(b,f);Tg(b,e);c=Xh(a,b,c,d,f,e);d=bi();if(null!==a&&!Ug)return b.updateQueue=a.updateQueue,b.flags&=-2053,a.lanes&=~e,$i(a,b,e);I$1&&d&&vg(b);b.flags|=1;Yi(a,b,c,e);return b.child}
function ij(a,b,c,d,e){if(Zf(c)){var f=!0;cg(b);}else f=!1;Tg(b,e);if(null===b.stateNode)jj(a,b),ph(b,c,d),rh(b,c,d,e),d=!0;else if(null===a){var g=b.stateNode,h=b.memoizedProps;g.props=h;var k=g.context,l=c.contextType;"object"===typeof l&&null!==l?l=Vg(l):(l=Zf(c)?Xf:H$1.current,l=Yf(b,l));var m=c.getDerivedStateFromProps,q="function"===typeof m||"function"===typeof g.getSnapshotBeforeUpdate;q||"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||
(h!==d||k!==l)&&qh(b,g,d,l);$g=!1;var r=b.memoizedState;g.state=r;gh(b,d,g,e);k=b.memoizedState;h!==d||r!==k||Wf.current||$g?("function"===typeof m&&(kh(b,c,m,d),k=b.memoizedState),(h=$g||oh(b,c,h,d,r,k,l))?(q||"function"!==typeof g.UNSAFE_componentWillMount&&"function"!==typeof g.componentWillMount||("function"===typeof g.componentWillMount&&g.componentWillMount(),"function"===typeof g.UNSAFE_componentWillMount&&g.UNSAFE_componentWillMount()),"function"===typeof g.componentDidMount&&(b.flags|=4194308)):
("function"===typeof g.componentDidMount&&(b.flags|=4194308),b.memoizedProps=d,b.memoizedState=k),g.props=d,g.state=k,g.context=l,d=h):("function"===typeof g.componentDidMount&&(b.flags|=4194308),d=!1);}else {g=b.stateNode;bh(a,b);h=b.memoizedProps;l=b.type===b.elementType?h:Lg(b.type,h);g.props=l;q=b.pendingProps;r=g.context;k=c.contextType;"object"===typeof k&&null!==k?k=Vg(k):(k=Zf(c)?Xf:H$1.current,k=Yf(b,k));var y=c.getDerivedStateFromProps;(m="function"===typeof y||"function"===typeof g.getSnapshotBeforeUpdate)||
"function"!==typeof g.UNSAFE_componentWillReceiveProps&&"function"!==typeof g.componentWillReceiveProps||(h!==q||r!==k)&&qh(b,g,d,k);$g=!1;r=b.memoizedState;g.state=r;gh(b,d,g,e);var n=b.memoizedState;h!==q||r!==n||Wf.current||$g?("function"===typeof y&&(kh(b,c,y,d),n=b.memoizedState),(l=$g||oh(b,c,l,d,r,n,k)||!1)?(m||"function"!==typeof g.UNSAFE_componentWillUpdate&&"function"!==typeof g.componentWillUpdate||("function"===typeof g.componentWillUpdate&&g.componentWillUpdate(d,n,k),"function"===typeof g.UNSAFE_componentWillUpdate&&
g.UNSAFE_componentWillUpdate(d,n,k)),"function"===typeof g.componentDidUpdate&&(b.flags|=4),"function"===typeof g.getSnapshotBeforeUpdate&&(b.flags|=1024)):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),b.memoizedProps=d,b.memoizedState=n),g.props=d,g.state=n,g.context=k,d=l):("function"!==typeof g.componentDidUpdate||h===a.memoizedProps&&r===
a.memoizedState||(b.flags|=4),"function"!==typeof g.getSnapshotBeforeUpdate||h===a.memoizedProps&&r===a.memoizedState||(b.flags|=1024),d=!1);}return kj(a,b,c,d,f,e)}
function kj(a,b,c,d,e,f){hj(a,b);var g=0!==(b.flags&128);if(!d&&!g)return e&&dg(b,c,!1),$i(a,b,f);d=b.stateNode;Xi.current=b;var h=g&&"function"!==typeof c.getDerivedStateFromError?null:d.render();b.flags|=1;null!==a&&g?(b.child=Bh(b,a.child,null,f),b.child=Bh(b,null,h,f)):Yi(a,b,h,f);b.memoizedState=d.state;e&&dg(b,c,!0);return b.child}function lj(a){var b=a.stateNode;b.pendingContext?ag(a,b.pendingContext,b.pendingContext!==b.context):b.context&&ag(a,b.context,!1);Ih(a,b.containerInfo);}
function mj(a,b,c,d,e){Ig();Jg(e);b.flags|=256;Yi(a,b,c,d);return b.child}var nj={dehydrated:null,treeContext:null,retryLane:0};function oj(a){return {baseLanes:a,cachePool:null,transitions:null}}
function pj(a,b,c){var d=b.pendingProps,e=M$1.current,f=!1,g=0!==(b.flags&128),h;(h=g)||(h=null!==a&&null===a.memoizedState?!1:0!==(e&2));if(h)f=!0,b.flags&=-129;else if(null===a||null!==a.memoizedState)e|=1;G$1(M$1,e&1);if(null===a){Eg(b);a=b.memoizedState;if(null!==a&&(a=a.dehydrated,null!==a))return 0===(b.mode&1)?b.lanes=1:"$!"===a.data?b.lanes=8:b.lanes=1073741824,null;g=d.children;a=d.fallback;return f?(d=b.mode,f=b.child,g={mode:"hidden",children:g},0===(d&1)&&null!==f?(f.childLanes=0,f.pendingProps=
g):f=qj(g,d,0,null),a=Ah(a,d,c,null),f.return=b,a.return=b,f.sibling=a,b.child=f,b.child.memoizedState=oj(c),b.memoizedState=nj,a):rj(b,g)}e=a.memoizedState;if(null!==e&&(h=e.dehydrated,null!==h))return sj(a,b,g,d,h,e,c);if(f){f=d.fallback;g=b.mode;e=a.child;h=e.sibling;var k={mode:"hidden",children:d.children};0===(g&1)&&b.child!==e?(d=b.child,d.childLanes=0,d.pendingProps=k,b.deletions=null):(d=wh(e,k),d.subtreeFlags=e.subtreeFlags&14680064);null!==h?f=wh(h,f):(f=Ah(f,g,c,null),f.flags|=2);f.return=
b;d.return=b;d.sibling=f;b.child=d;d=f;f=b.child;g=a.child.memoizedState;g=null===g?oj(c):{baseLanes:g.baseLanes|c,cachePool:null,transitions:g.transitions};f.memoizedState=g;f.childLanes=a.childLanes&~c;b.memoizedState=nj;return d}f=a.child;a=f.sibling;d=wh(f,{mode:"visible",children:d.children});0===(b.mode&1)&&(d.lanes=c);d.return=b;d.sibling=null;null!==a&&(c=b.deletions,null===c?(b.deletions=[a],b.flags|=16):c.push(a));b.child=d;b.memoizedState=null;return d}
function rj(a,b){b=qj({mode:"visible",children:b},a.mode,0,null);b.return=a;return a.child=b}function tj(a,b,c,d){null!==d&&Jg(d);Bh(b,a.child,null,c);a=rj(b,b.pendingProps.children);a.flags|=2;b.memoizedState=null;return a}
function sj(a,b,c,d,e,f,g){if(c){if(b.flags&256)return b.flags&=-257,d=Li(Error(p$1(422))),tj(a,b,g,d);if(null!==b.memoizedState)return b.child=a.child,b.flags|=128,null;f=d.fallback;e=b.mode;d=qj({mode:"visible",children:d.children},e,0,null);f=Ah(f,e,g,null);f.flags|=2;d.return=b;f.return=b;d.sibling=f;b.child=d;0!==(b.mode&1)&&Bh(b,a.child,null,g);b.child.memoizedState=oj(g);b.memoizedState=nj;return f}if(0===(b.mode&1))return tj(a,b,g,null);if("$!"===e.data){d=e.nextSibling&&e.nextSibling.dataset;
if(d)var h=d.dgst;d=h;f=Error(p$1(419));d=Li(f,d,void 0);return tj(a,b,g,d)}h=0!==(g&a.childLanes);if(Ug||h){d=R$1;if(null!==d){switch(g&-g){case 4:e=2;break;case 16:e=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:e=32;break;case 536870912:e=268435456;break;default:e=0;}e=0!==(e&(d.suspendedLanes|g))?0:e;
0!==e&&e!==f.retryLane&&(f.retryLane=e,Zg(a,e),mh(d,a,e,-1));}uj();d=Li(Error(p$1(421)));return tj(a,b,g,d)}if("$?"===e.data)return b.flags|=128,b.child=a.child,b=vj.bind(null,a),e._reactRetry=b,null;a=f.treeContext;yg=Lf(e.nextSibling);xg=b;I$1=!0;zg=null;null!==a&&(og[pg++]=rg,og[pg++]=sg,og[pg++]=qg,rg=a.id,sg=a.overflow,qg=b);b=rj(b,d.children);b.flags|=4096;return b}function wj(a,b,c){a.lanes|=b;var d=a.alternate;null!==d&&(d.lanes|=b);Sg(a.return,b,c);}
function xj(a,b,c,d,e){var f=a.memoizedState;null===f?a.memoizedState={isBackwards:b,rendering:null,renderingStartTime:0,last:d,tail:c,tailMode:e}:(f.isBackwards=b,f.rendering=null,f.renderingStartTime=0,f.last=d,f.tail=c,f.tailMode=e);}
function yj(a,b,c){var d=b.pendingProps,e=d.revealOrder,f=d.tail;Yi(a,b,d.children,c);d=M$1.current;if(0!==(d&2))d=d&1|2,b.flags|=128;else {if(null!==a&&0!==(a.flags&128))a:for(a=b.child;null!==a;){if(13===a.tag)null!==a.memoizedState&&wj(a,c,b);else if(19===a.tag)wj(a,c,b);else if(null!==a.child){a.child.return=a;a=a.child;continue}if(a===b)break a;for(;null===a.sibling;){if(null===a.return||a.return===b)break a;a=a.return;}a.sibling.return=a.return;a=a.sibling;}d&=1;}G$1(M$1,d);if(0===(b.mode&1))b.memoizedState=
null;else switch(e){case "forwards":c=b.child;for(e=null;null!==c;)a=c.alternate,null!==a&&null===Mh(a)&&(e=c),c=c.sibling;c=e;null===c?(e=b.child,b.child=null):(e=c.sibling,c.sibling=null);xj(b,!1,e,c,f);break;case "backwards":c=null;e=b.child;for(b.child=null;null!==e;){a=e.alternate;if(null!==a&&null===Mh(a)){b.child=e;break}a=e.sibling;e.sibling=c;c=e;e=a;}xj(b,!0,c,null,f);break;case "together":xj(b,!1,null,null,void 0);break;default:b.memoizedState=null;}return b.child}
function jj(a,b){0===(b.mode&1)&&null!==a&&(a.alternate=null,b.alternate=null,b.flags|=2);}function $i(a,b,c){null!==a&&(b.dependencies=a.dependencies);hh|=b.lanes;if(0===(c&b.childLanes))return null;if(null!==a&&b.child!==a.child)throw Error(p$1(153));if(null!==b.child){a=b.child;c=wh(a,a.pendingProps);b.child=c;for(c.return=b;null!==a.sibling;)a=a.sibling,c=c.sibling=wh(a,a.pendingProps),c.return=b;c.sibling=null;}return b.child}
function zj(a,b,c){switch(b.tag){case 3:lj(b);Ig();break;case 5:Kh(b);break;case 1:Zf(b.type)&&cg(b);break;case 4:Ih(b,b.stateNode.containerInfo);break;case 10:var d=b.type._context,e=b.memoizedProps.value;G$1(Mg,d._currentValue);d._currentValue=e;break;case 13:d=b.memoizedState;if(null!==d){if(null!==d.dehydrated)return G$1(M$1,M$1.current&1),b.flags|=128,null;if(0!==(c&b.child.childLanes))return pj(a,b,c);G$1(M$1,M$1.current&1);a=$i(a,b,c);return null!==a?a.sibling:null}G$1(M$1,M$1.current&1);break;case 19:d=0!==(c&
b.childLanes);if(0!==(a.flags&128)){if(d)return yj(a,b,c);b.flags|=128;}e=b.memoizedState;null!==e&&(e.rendering=null,e.tail=null,e.lastEffect=null);G$1(M$1,M$1.current);if(d)break;else return null;case 22:case 23:return b.lanes=0,ej(a,b,c)}return $i(a,b,c)}var Aj,Bj,Cj,Dj;
Aj=function(a,b){for(var c=b.child;null!==c;){if(5===c.tag||6===c.tag)a.appendChild(c.stateNode);else if(4!==c.tag&&null!==c.child){c.child.return=c;c=c.child;continue}if(c===b)break;for(;null===c.sibling;){if(null===c.return||c.return===b)return;c=c.return;}c.sibling.return=c.return;c=c.sibling;}};Bj=function(){};
Cj=function(a,b,c,d){var e=a.memoizedProps;if(e!==d){a=b.stateNode;Hh(Eh.current);var f=null;switch(c){case "input":e=Ya(a,e);d=Ya(a,d);f=[];break;case "select":e=A$1({},e,{value:void 0});d=A$1({},d,{value:void 0});f=[];break;case "textarea":e=gb(a,e);d=gb(a,d);f=[];break;default:"function"!==typeof e.onClick&&"function"===typeof d.onClick&&(a.onclick=Bf);}ub(c,d);var g;c=null;for(l in e)if(!d.hasOwnProperty(l)&&e.hasOwnProperty(l)&&null!=e[l])if("style"===l){var h=e[l];for(g in h)h.hasOwnProperty(g)&&
(c||(c={}),c[g]="");}else "dangerouslySetInnerHTML"!==l&&"children"!==l&&"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&"autoFocus"!==l&&(ea.hasOwnProperty(l)?f||(f=[]):(f=f||[]).push(l,null));for(l in d){var k=d[l];h=null!=e?e[l]:void 0;if(d.hasOwnProperty(l)&&k!==h&&(null!=k||null!=h))if("style"===l)if(h){for(g in h)!h.hasOwnProperty(g)||k&&k.hasOwnProperty(g)||(c||(c={}),c[g]="");for(g in k)k.hasOwnProperty(g)&&h[g]!==k[g]&&(c||(c={}),c[g]=k[g]);}else c||(f||(f=[]),f.push(l,
c)),c=k;else "dangerouslySetInnerHTML"===l?(k=k?k.__html:void 0,h=h?h.__html:void 0,null!=k&&h!==k&&(f=f||[]).push(l,k)):"children"===l?"string"!==typeof k&&"number"!==typeof k||(f=f||[]).push(l,""+k):"suppressContentEditableWarning"!==l&&"suppressHydrationWarning"!==l&&(ea.hasOwnProperty(l)?(null!=k&&"onScroll"===l&&D$1("scroll",a),f||h===k||(f=[])):(f=f||[]).push(l,k));}c&&(f=f||[]).push("style",c);var l=f;if(b.updateQueue=l)b.flags|=4;}};Dj=function(a,b,c,d){c!==d&&(b.flags|=4);};
function Ej(a,b){if(!I$1)switch(a.tailMode){case "hidden":b=a.tail;for(var c=null;null!==b;)null!==b.alternate&&(c=b),b=b.sibling;null===c?a.tail=null:c.sibling=null;break;case "collapsed":c=a.tail;for(var d=null;null!==c;)null!==c.alternate&&(d=c),c=c.sibling;null===d?b||null===a.tail?a.tail=null:a.tail.sibling=null:d.sibling=null;}}
function S$1(a){var b=null!==a.alternate&&a.alternate.child===a.child,c=0,d=0;if(b)for(var e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags&14680064,d|=e.flags&14680064,e.return=a,e=e.sibling;else for(e=a.child;null!==e;)c|=e.lanes|e.childLanes,d|=e.subtreeFlags,d|=e.flags,e.return=a,e=e.sibling;a.subtreeFlags|=d;a.childLanes=c;return b}
function Fj(a,b,c){var d=b.pendingProps;wg(b);switch(b.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return S$1(b),null;case 1:return Zf(b.type)&&$f(),S$1(b),null;case 3:d=b.stateNode;Jh();E$1(Wf);E$1(H$1);Oh();d.pendingContext&&(d.context=d.pendingContext,d.pendingContext=null);if(null===a||null===a.child)Gg(b)?b.flags|=4:null===a||a.memoizedState.isDehydrated&&0===(b.flags&256)||(b.flags|=1024,null!==zg&&(Gj(zg),zg=null));Bj(a,b);S$1(b);return null;case 5:Lh(b);var e=Hh(Gh.current);
c=b.type;if(null!==a&&null!=b.stateNode)Cj(a,b,c,d,e),a.ref!==b.ref&&(b.flags|=512,b.flags|=2097152);else {if(!d){if(null===b.stateNode)throw Error(p$1(166));S$1(b);return null}a=Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.type;var f=b.memoizedProps;d[Of]=b;d[Pf]=f;a=0!==(b.mode&1);switch(c){case "dialog":D$1("cancel",d);D$1("close",d);break;case "iframe":case "object":case "embed":D$1("load",d);break;case "video":case "audio":for(e=0;e<lf.length;e++)D$1(lf[e],d);break;case "source":D$1("error",d);break;case "img":case "image":case "link":D$1("error",
d);D$1("load",d);break;case "details":D$1("toggle",d);break;case "input":Za(d,f);D$1("invalid",d);break;case "select":d._wrapperState={wasMultiple:!!f.multiple};D$1("invalid",d);break;case "textarea":hb(d,f),D$1("invalid",d);}ub(c,f);e=null;for(var g in f)if(f.hasOwnProperty(g)){var h=f[g];"children"===g?"string"===typeof h?d.textContent!==h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,h,a),e=["children",h]):"number"===typeof h&&d.textContent!==""+h&&(!0!==f.suppressHydrationWarning&&Af(d.textContent,
h,a),e=["children",""+h]):ea.hasOwnProperty(g)&&null!=h&&"onScroll"===g&&D$1("scroll",d);}switch(c){case "input":Va(d);db(d,f,!0);break;case "textarea":Va(d);jb(d);break;case "select":case "option":break;default:"function"===typeof f.onClick&&(d.onclick=Bf);}d=e;b.updateQueue=d;null!==d&&(b.flags|=4);}else {g=9===e.nodeType?e:e.ownerDocument;"http://www.w3.org/1999/xhtml"===a&&(a=kb(c));"http://www.w3.org/1999/xhtml"===a?"script"===c?(a=g.createElement("div"),a.innerHTML="<script>\x3c/script>",a=a.removeChild(a.firstChild)):
"string"===typeof d.is?a=g.createElement(c,{is:d.is}):(a=g.createElement(c),"select"===c&&(g=a,d.multiple?g.multiple=!0:d.size&&(g.size=d.size))):a=g.createElementNS(a,c);a[Of]=b;a[Pf]=d;Aj(a,b,!1,!1);b.stateNode=a;a:{g=vb(c,d);switch(c){case "dialog":D$1("cancel",a);D$1("close",a);e=d;break;case "iframe":case "object":case "embed":D$1("load",a);e=d;break;case "video":case "audio":for(e=0;e<lf.length;e++)D$1(lf[e],a);e=d;break;case "source":D$1("error",a);e=d;break;case "img":case "image":case "link":D$1("error",
a);D$1("load",a);e=d;break;case "details":D$1("toggle",a);e=d;break;case "input":Za(a,d);e=Ya(a,d);D$1("invalid",a);break;case "option":e=d;break;case "select":a._wrapperState={wasMultiple:!!d.multiple};e=A$1({},d,{value:void 0});D$1("invalid",a);break;case "textarea":hb(a,d);e=gb(a,d);D$1("invalid",a);break;default:e=d;}ub(c,e);h=e;for(f in h)if(h.hasOwnProperty(f)){var k=h[f];"style"===f?sb(a,k):"dangerouslySetInnerHTML"===f?(k=k?k.__html:void 0,null!=k&&nb(a,k)):"children"===f?"string"===typeof k?("textarea"!==
c||""!==k)&&ob(a,k):"number"===typeof k&&ob(a,""+k):"suppressContentEditableWarning"!==f&&"suppressHydrationWarning"!==f&&"autoFocus"!==f&&(ea.hasOwnProperty(f)?null!=k&&"onScroll"===f&&D$1("scroll",a):null!=k&&ta(a,f,k,g));}switch(c){case "input":Va(a);db(a,d,!1);break;case "textarea":Va(a);jb(a);break;case "option":null!=d.value&&a.setAttribute("value",""+Sa(d.value));break;case "select":a.multiple=!!d.multiple;f=d.value;null!=f?fb(a,!!d.multiple,f,!1):null!=d.defaultValue&&fb(a,!!d.multiple,d.defaultValue,
!0);break;default:"function"===typeof e.onClick&&(a.onclick=Bf);}switch(c){case "button":case "input":case "select":case "textarea":d=!!d.autoFocus;break a;case "img":d=!0;break a;default:d=!1;}}d&&(b.flags|=4);}null!==b.ref&&(b.flags|=512,b.flags|=2097152);}S$1(b);return null;case 6:if(a&&null!=b.stateNode)Dj(a,b,a.memoizedProps,d);else {if("string"!==typeof d&&null===b.stateNode)throw Error(p$1(166));c=Hh(Gh.current);Hh(Eh.current);if(Gg(b)){d=b.stateNode;c=b.memoizedProps;d[Of]=b;if(f=d.nodeValue!==c)if(a=
xg,null!==a)switch(a.tag){case 3:Af(d.nodeValue,c,0!==(a.mode&1));break;case 5:!0!==a.memoizedProps.suppressHydrationWarning&&Af(d.nodeValue,c,0!==(a.mode&1));}f&&(b.flags|=4);}else d=(9===c.nodeType?c:c.ownerDocument).createTextNode(d),d[Of]=b,b.stateNode=d;}S$1(b);return null;case 13:E$1(M$1);d=b.memoizedState;if(null===a||null!==a.memoizedState&&null!==a.memoizedState.dehydrated){if(I$1&&null!==yg&&0!==(b.mode&1)&&0===(b.flags&128))Hg(),Ig(),b.flags|=98560,f=!1;else if(f=Gg(b),null!==d&&null!==d.dehydrated){if(null===
a){if(!f)throw Error(p$1(318));f=b.memoizedState;f=null!==f?f.dehydrated:null;if(!f)throw Error(p$1(317));f[Of]=b;}else Ig(),0===(b.flags&128)&&(b.memoizedState=null),b.flags|=4;S$1(b);f=!1;}else null!==zg&&(Gj(zg),zg=null),f=!0;if(!f)return b.flags&65536?b:null}if(0!==(b.flags&128))return b.lanes=c,b;d=null!==d;d!==(null!==a&&null!==a.memoizedState)&&d&&(b.child.flags|=8192,0!==(b.mode&1)&&(null===a||0!==(M$1.current&1)?0===T$1&&(T$1=3):uj()));null!==b.updateQueue&&(b.flags|=4);S$1(b);return null;case 4:return Jh(),
Bj(a,b),null===a&&sf(b.stateNode.containerInfo),S$1(b),null;case 10:return Rg(b.type._context),S$1(b),null;case 17:return Zf(b.type)&&$f(),S$1(b),null;case 19:E$1(M$1);f=b.memoizedState;if(null===f)return S$1(b),null;d=0!==(b.flags&128);g=f.rendering;if(null===g)if(d)Ej(f,!1);else {if(0!==T$1||null!==a&&0!==(a.flags&128))for(a=b.child;null!==a;){g=Mh(a);if(null!==g){b.flags|=128;Ej(f,!1);d=g.updateQueue;null!==d&&(b.updateQueue=d,b.flags|=4);b.subtreeFlags=0;d=c;for(c=b.child;null!==c;)f=c,a=d,f.flags&=14680066,
g=f.alternate,null===g?(f.childLanes=0,f.lanes=a,f.child=null,f.subtreeFlags=0,f.memoizedProps=null,f.memoizedState=null,f.updateQueue=null,f.dependencies=null,f.stateNode=null):(f.childLanes=g.childLanes,f.lanes=g.lanes,f.child=g.child,f.subtreeFlags=0,f.deletions=null,f.memoizedProps=g.memoizedProps,f.memoizedState=g.memoizedState,f.updateQueue=g.updateQueue,f.type=g.type,a=g.dependencies,f.dependencies=null===a?null:{lanes:a.lanes,firstContext:a.firstContext}),c=c.sibling;G$1(M$1,M$1.current&1|2);return b.child}a=
a.sibling;}null!==f.tail&&B$1()>Hj&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);}else {if(!d)if(a=Mh(g),null!==a){if(b.flags|=128,d=!0,c=a.updateQueue,null!==c&&(b.updateQueue=c,b.flags|=4),Ej(f,!0),null===f.tail&&"hidden"===f.tailMode&&!g.alternate&&!I$1)return S$1(b),null}else 2*B$1()-f.renderingStartTime>Hj&&1073741824!==c&&(b.flags|=128,d=!0,Ej(f,!1),b.lanes=4194304);f.isBackwards?(g.sibling=b.child,b.child=g):(c=f.last,null!==c?c.sibling=g:b.child=g,f.last=g);}if(null!==f.tail)return b=f.tail,f.rendering=
b,f.tail=b.sibling,f.renderingStartTime=B$1(),b.sibling=null,c=M$1.current,G$1(M$1,d?c&1|2:c&1),b;S$1(b);return null;case 22:case 23:return Ij(),d=null!==b.memoizedState,null!==a&&null!==a.memoizedState!==d&&(b.flags|=8192),d&&0!==(b.mode&1)?0!==(gj&1073741824)&&(S$1(b),b.subtreeFlags&6&&(b.flags|=8192)):S$1(b),null;case 24:return null;case 25:return null}throw Error(p$1(156,b.tag));}
function Jj(a,b){wg(b);switch(b.tag){case 1:return Zf(b.type)&&$f(),a=b.flags,a&65536?(b.flags=a&-65537|128,b):null;case 3:return Jh(),E$1(Wf),E$1(H$1),Oh(),a=b.flags,0!==(a&65536)&&0===(a&128)?(b.flags=a&-65537|128,b):null;case 5:return Lh(b),null;case 13:E$1(M$1);a=b.memoizedState;if(null!==a&&null!==a.dehydrated){if(null===b.alternate)throw Error(p$1(340));Ig();}a=b.flags;return a&65536?(b.flags=a&-65537|128,b):null;case 19:return E$1(M$1),null;case 4:return Jh(),null;case 10:return Rg(b.type._context),null;case 22:case 23:return Ij(),
null;case 24:return null;default:return null}}var Kj=!1,U$1=!1,Lj="function"===typeof WeakSet?WeakSet:Set,V$1=null;function Mj(a,b){var c=a.ref;if(null!==c)if("function"===typeof c)try{c(null);}catch(d){W$1(a,b,d);}else c.current=null;}function Nj(a,b,c){try{c();}catch(d){W$1(a,b,d);}}var Oj=!1;
function Pj(a,b){Cf=dd;a=Me$1();if(Ne$1(a)){if("selectionStart"in a)var c={start:a.selectionStart,end:a.selectionEnd};else a:{c=(c=a.ownerDocument)&&c.defaultView||window;var d=c.getSelection&&c.getSelection();if(d&&0!==d.rangeCount){c=d.anchorNode;var e=d.anchorOffset,f=d.focusNode;d=d.focusOffset;try{c.nodeType,f.nodeType;}catch(F){c=null;break a}var g=0,h=-1,k=-1,l=0,m=0,q=a,r=null;b:for(;;){for(var y;;){q!==c||0!==e&&3!==q.nodeType||(h=g+e);q!==f||0!==d&&3!==q.nodeType||(k=g+d);3===q.nodeType&&(g+=
q.nodeValue.length);if(null===(y=q.firstChild))break;r=q;q=y;}for(;;){if(q===a)break b;r===c&&++l===e&&(h=g);r===f&&++m===d&&(k=g);if(null!==(y=q.nextSibling))break;q=r;r=q.parentNode;}q=y;}c=-1===h||-1===k?null:{start:h,end:k};}else c=null;}c=c||{start:0,end:0};}else c=null;Df={focusedElem:a,selectionRange:c};dd=!1;for(V$1=b;null!==V$1;)if(b=V$1,a=b.child,0!==(b.subtreeFlags&1028)&&null!==a)a.return=b,V$1=a;else for(;null!==V$1;){b=V$1;try{var n=b.alternate;if(0!==(b.flags&1024))switch(b.tag){case 0:case 11:case 15:break;
case 1:if(null!==n){var t=n.memoizedProps,J=n.memoizedState,x=b.stateNode,w=x.getSnapshotBeforeUpdate(b.elementType===b.type?t:Lg(b.type,t),J);x.__reactInternalSnapshotBeforeUpdate=w;}break;case 3:var u=b.stateNode.containerInfo;1===u.nodeType?u.textContent="":9===u.nodeType&&u.documentElement&&u.removeChild(u.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(p$1(163));}}catch(F){W$1(b,b.return,F);}a=b.sibling;if(null!==a){a.return=b.return;V$1=a;break}V$1=b.return;}n=Oj;Oj=!1;return n}
function Qj(a,b,c){var d=b.updateQueue;d=null!==d?d.lastEffect:null;if(null!==d){var e=d=d.next;do{if((e.tag&a)===a){var f=e.destroy;e.destroy=void 0;void 0!==f&&Nj(b,c,f);}e=e.next;}while(e!==d)}}function Rj(a,b){b=b.updateQueue;b=null!==b?b.lastEffect:null;if(null!==b){var c=b=b.next;do{if((c.tag&a)===a){var d=c.create;c.destroy=d();}c=c.next;}while(c!==b)}}function Sj(a){var b=a.ref;if(null!==b){var c=a.stateNode;switch(a.tag){case 5:a=c;break;default:a=c;}"function"===typeof b?b(a):b.current=a;}}
function Tj(a){var b=a.alternate;null!==b&&(a.alternate=null,Tj(b));a.child=null;a.deletions=null;a.sibling=null;5===a.tag&&(b=a.stateNode,null!==b&&(delete b[Of],delete b[Pf],delete b[of],delete b[Qf],delete b[Rf]));a.stateNode=null;a.return=null;a.dependencies=null;a.memoizedProps=null;a.memoizedState=null;a.pendingProps=null;a.stateNode=null;a.updateQueue=null;}function Uj(a){return 5===a.tag||3===a.tag||4===a.tag}
function Vj(a){a:for(;;){for(;null===a.sibling;){if(null===a.return||Uj(a.return))return null;a=a.return;}a.sibling.return=a.return;for(a=a.sibling;5!==a.tag&&6!==a.tag&&18!==a.tag;){if(a.flags&2)continue a;if(null===a.child||4===a.tag)continue a;else a.child.return=a,a=a.child;}if(!(a.flags&2))return a.stateNode}}
function Wj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?8===c.nodeType?c.parentNode.insertBefore(a,b):c.insertBefore(a,b):(8===c.nodeType?(b=c.parentNode,b.insertBefore(a,c)):(b=c,b.appendChild(a)),c=c._reactRootContainer,null!==c&&void 0!==c||null!==b.onclick||(b.onclick=Bf));else if(4!==d&&(a=a.child,null!==a))for(Wj(a,b,c),a=a.sibling;null!==a;)Wj(a,b,c),a=a.sibling;}
function Xj(a,b,c){var d=a.tag;if(5===d||6===d)a=a.stateNode,b?c.insertBefore(a,b):c.appendChild(a);else if(4!==d&&(a=a.child,null!==a))for(Xj(a,b,c),a=a.sibling;null!==a;)Xj(a,b,c),a=a.sibling;}var X$1=null,Yj=!1;function Zj(a,b,c){for(c=c.child;null!==c;)ak(a,b,c),c=c.sibling;}
function ak(a,b,c){if(lc&&"function"===typeof lc.onCommitFiberUnmount)try{lc.onCommitFiberUnmount(kc,c);}catch(h){}switch(c.tag){case 5:U$1||Mj(c,b);case 6:var d=X$1,e=Yj;X$1=null;Zj(a,b,c);X$1=d;Yj=e;null!==X$1&&(Yj?(a=X$1,c=c.stateNode,8===a.nodeType?a.parentNode.removeChild(c):a.removeChild(c)):X$1.removeChild(c.stateNode));break;case 18:null!==X$1&&(Yj?(a=X$1,c=c.stateNode,8===a.nodeType?Kf(a.parentNode,c):1===a.nodeType&&Kf(a,c),bd(a)):Kf(X$1,c.stateNode));break;case 4:d=X$1;e=Yj;X$1=c.stateNode.containerInfo;Yj=!0;
Zj(a,b,c);X$1=d;Yj=e;break;case 0:case 11:case 14:case 15:if(!U$1&&(d=c.updateQueue,null!==d&&(d=d.lastEffect,null!==d))){e=d=d.next;do{var f=e,g=f.destroy;f=f.tag;void 0!==g&&(0!==(f&2)?Nj(c,b,g):0!==(f&4)&&Nj(c,b,g));e=e.next;}while(e!==d)}Zj(a,b,c);break;case 1:if(!U$1&&(Mj(c,b),d=c.stateNode,"function"===typeof d.componentWillUnmount))try{d.props=c.memoizedProps,d.state=c.memoizedState,d.componentWillUnmount();}catch(h){W$1(c,b,h);}Zj(a,b,c);break;case 21:Zj(a,b,c);break;case 22:c.mode&1?(U$1=(d=U$1)||null!==
c.memoizedState,Zj(a,b,c),U$1=d):Zj(a,b,c);break;default:Zj(a,b,c);}}function bk(a){var b=a.updateQueue;if(null!==b){a.updateQueue=null;var c=a.stateNode;null===c&&(c=a.stateNode=new Lj);b.forEach(function(b){var d=ck.bind(null,a,b);c.has(b)||(c.add(b),b.then(d,d));});}}
function dk(a,b){var c=b.deletions;if(null!==c)for(var d=0;d<c.length;d++){var e=c[d];try{var f=a,g=b,h=g;a:for(;null!==h;){switch(h.tag){case 5:X$1=h.stateNode;Yj=!1;break a;case 3:X$1=h.stateNode.containerInfo;Yj=!0;break a;case 4:X$1=h.stateNode.containerInfo;Yj=!0;break a}h=h.return;}if(null===X$1)throw Error(p$1(160));ak(f,g,e);X$1=null;Yj=!1;var k=e.alternate;null!==k&&(k.return=null);e.return=null;}catch(l){W$1(e,b,l);}}if(b.subtreeFlags&12854)for(b=b.child;null!==b;)ek(b,a),b=b.sibling;}
function ek(a,b){var c=a.alternate,d=a.flags;switch(a.tag){case 0:case 11:case 14:case 15:dk(b,a);fk(a);if(d&4){try{Qj(3,a,a.return),Rj(3,a);}catch(t){W$1(a,a.return,t);}try{Qj(5,a,a.return);}catch(t){W$1(a,a.return,t);}}break;case 1:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);break;case 5:dk(b,a);fk(a);d&512&&null!==c&&Mj(c,c.return);if(a.flags&32){var e=a.stateNode;try{ob(e,"");}catch(t){W$1(a,a.return,t);}}if(d&4&&(e=a.stateNode,null!=e)){var f=a.memoizedProps,g=null!==c?c.memoizedProps:f,h=a.type,k=a.updateQueue;
a.updateQueue=null;if(null!==k)try{"input"===h&&"radio"===f.type&&null!=f.name&&ab(e,f);vb(h,g);var l=vb(h,f);for(g=0;g<k.length;g+=2){var m=k[g],q=k[g+1];"style"===m?sb(e,q):"dangerouslySetInnerHTML"===m?nb(e,q):"children"===m?ob(e,q):ta(e,m,q,l);}switch(h){case "input":bb(e,f);break;case "textarea":ib(e,f);break;case "select":var r=e._wrapperState.wasMultiple;e._wrapperState.wasMultiple=!!f.multiple;var y=f.value;null!=y?fb(e,!!f.multiple,y,!1):r!==!!f.multiple&&(null!=f.defaultValue?fb(e,!!f.multiple,
f.defaultValue,!0):fb(e,!!f.multiple,f.multiple?[]:"",!1));}e[Pf]=f;}catch(t){W$1(a,a.return,t);}}break;case 6:dk(b,a);fk(a);if(d&4){if(null===a.stateNode)throw Error(p$1(162));e=a.stateNode;f=a.memoizedProps;try{e.nodeValue=f;}catch(t){W$1(a,a.return,t);}}break;case 3:dk(b,a);fk(a);if(d&4&&null!==c&&c.memoizedState.isDehydrated)try{bd(b.containerInfo);}catch(t){W$1(a,a.return,t);}break;case 4:dk(b,a);fk(a);break;case 13:dk(b,a);fk(a);e=a.child;e.flags&8192&&(f=null!==e.memoizedState,e.stateNode.isHidden=f,!f||
null!==e.alternate&&null!==e.alternate.memoizedState||(gk=B$1()));d&4&&bk(a);break;case 22:m=null!==c&&null!==c.memoizedState;a.mode&1?(U$1=(l=U$1)||m,dk(b,a),U$1=l):dk(b,a);fk(a);if(d&8192){l=null!==a.memoizedState;if((a.stateNode.isHidden=l)&&!m&&0!==(a.mode&1))for(V$1=a,m=a.child;null!==m;){for(q=V$1=m;null!==V$1;){r=V$1;y=r.child;switch(r.tag){case 0:case 11:case 14:case 15:Qj(4,r,r.return);break;case 1:Mj(r,r.return);var n=r.stateNode;if("function"===typeof n.componentWillUnmount){d=r;c=r.return;try{b=d,n.props=
b.memoizedProps,n.state=b.memoizedState,n.componentWillUnmount();}catch(t){W$1(d,c,t);}}break;case 5:Mj(r,r.return);break;case 22:if(null!==r.memoizedState){hk(q);continue}}null!==y?(y.return=r,V$1=y):hk(q);}m=m.sibling;}a:for(m=null,q=a;;){if(5===q.tag){if(null===m){m=q;try{e=q.stateNode,l?(f=e.style,"function"===typeof f.setProperty?f.setProperty("display","none","important"):f.display="none"):(h=q.stateNode,k=q.memoizedProps.style,g=void 0!==k&&null!==k&&k.hasOwnProperty("display")?k.display:null,h.style.display=
rb("display",g));}catch(t){W$1(a,a.return,t);}}}else if(6===q.tag){if(null===m)try{q.stateNode.nodeValue=l?"":q.memoizedProps;}catch(t){W$1(a,a.return,t);}}else if((22!==q.tag&&23!==q.tag||null===q.memoizedState||q===a)&&null!==q.child){q.child.return=q;q=q.child;continue}if(q===a)break a;for(;null===q.sibling;){if(null===q.return||q.return===a)break a;m===q&&(m=null);q=q.return;}m===q&&(m=null);q.sibling.return=q.return;q=q.sibling;}}break;case 19:dk(b,a);fk(a);d&4&&bk(a);break;case 21:break;default:dk(b,
a),fk(a);}}function fk(a){var b=a.flags;if(b&2){try{a:{for(var c=a.return;null!==c;){if(Uj(c)){var d=c;break a}c=c.return;}throw Error(p$1(160));}switch(d.tag){case 5:var e=d.stateNode;d.flags&32&&(ob(e,""),d.flags&=-33);var f=Vj(a);Xj(a,f,e);break;case 3:case 4:var g=d.stateNode.containerInfo,h=Vj(a);Wj(a,h,g);break;default:throw Error(p$1(161));}}catch(k){W$1(a,a.return,k);}a.flags&=-3;}b&4096&&(a.flags&=-4097);}function ik(a,b,c){V$1=a;jk(a);}
function jk(a,b,c){for(var d=0!==(a.mode&1);null!==V$1;){var e=V$1,f=e.child;if(22===e.tag&&d){var g=null!==e.memoizedState||Kj;if(!g){var h=e.alternate,k=null!==h&&null!==h.memoizedState||U$1;h=Kj;var l=U$1;Kj=g;if((U$1=k)&&!l)for(V$1=e;null!==V$1;)g=V$1,k=g.child,22===g.tag&&null!==g.memoizedState?kk(e):null!==k?(k.return=g,V$1=k):kk(e);for(;null!==f;)V$1=f,jk(f),f=f.sibling;V$1=e;Kj=h;U$1=l;}lk(a);}else 0!==(e.subtreeFlags&8772)&&null!==f?(f.return=e,V$1=f):lk(a);}}
function lk(a){for(;null!==V$1;){var b=V$1;if(0!==(b.flags&8772)){var c=b.alternate;try{if(0!==(b.flags&8772))switch(b.tag){case 0:case 11:case 15:U$1||Rj(5,b);break;case 1:var d=b.stateNode;if(b.flags&4&&!U$1)if(null===c)d.componentDidMount();else {var e=b.elementType===b.type?c.memoizedProps:Lg(b.type,c.memoizedProps);d.componentDidUpdate(e,c.memoizedState,d.__reactInternalSnapshotBeforeUpdate);}var f=b.updateQueue;null!==f&&ih(b,f,d);break;case 3:var g=b.updateQueue;if(null!==g){c=null;if(null!==b.child)switch(b.child.tag){case 5:c=
b.child.stateNode;break;case 1:c=b.child.stateNode;}ih(b,g,c);}break;case 5:var h=b.stateNode;if(null===c&&b.flags&4){c=h;var k=b.memoizedProps;switch(b.type){case "button":case "input":case "select":case "textarea":k.autoFocus&&c.focus();break;case "img":k.src&&(c.src=k.src);}}break;case 6:break;case 4:break;case 12:break;case 13:if(null===b.memoizedState){var l=b.alternate;if(null!==l){var m=l.memoizedState;if(null!==m){var q=m.dehydrated;null!==q&&bd(q);}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;
default:throw Error(p$1(163));}U$1||b.flags&512&&Sj(b);}catch(r){W$1(b,b.return,r);}}if(b===a){V$1=null;break}c=b.sibling;if(null!==c){c.return=b.return;V$1=c;break}V$1=b.return;}}function hk(a){for(;null!==V$1;){var b=V$1;if(b===a){V$1=null;break}var c=b.sibling;if(null!==c){c.return=b.return;V$1=c;break}V$1=b.return;}}
function kk(a){for(;null!==V$1;){var b=V$1;try{switch(b.tag){case 0:case 11:case 15:var c=b.return;try{Rj(4,b);}catch(k){W$1(b,c,k);}break;case 1:var d=b.stateNode;if("function"===typeof d.componentDidMount){var e=b.return;try{d.componentDidMount();}catch(k){W$1(b,e,k);}}var f=b.return;try{Sj(b);}catch(k){W$1(b,f,k);}break;case 5:var g=b.return;try{Sj(b);}catch(k){W$1(b,g,k);}}}catch(k){W$1(b,b.return,k);}if(b===a){V$1=null;break}var h=b.sibling;if(null!==h){h.return=b.return;V$1=h;break}V$1=b.return;}}
var mk=Math.ceil,nk=ua.ReactCurrentDispatcher,ok=ua.ReactCurrentOwner,pk=ua.ReactCurrentBatchConfig,K$1=0,R$1=null,Y$1=null,Z$1=0,gj=0,fj=Uf(0),T$1=0,qk=null,hh=0,rk=0,sk=0,tk=null,uk=null,gk=0,Hj=Infinity,vk=null,Pi=!1,Qi=null,Si=null,wk=!1,xk=null,yk=0,zk=0,Ak=null,Bk=-1,Ck=0;function L$1(){return 0!==(K$1&6)?B$1():-1!==Bk?Bk:Bk=B$1()}
function lh(a){if(0===(a.mode&1))return 1;if(0!==(K$1&2)&&0!==Z$1)return Z$1&-Z$1;if(null!==Kg.transition)return 0===Ck&&(Ck=yc()),Ck;a=C$1;if(0!==a)return a;a=window.event;a=void 0===a?16:jd(a.type);return a}function mh(a,b,c,d){if(50<zk)throw zk=0,Ak=null,Error(p$1(185));Ac(a,c,d);if(0===(K$1&2)||a!==R$1)a===R$1&&(0===(K$1&2)&&(rk|=c),4===T$1&&Dk(a,Z$1)),Ek(a,d),1===c&&0===K$1&&0===(b.mode&1)&&(Hj=B$1()+500,fg&&jg());}
function Ek(a,b){var c=a.callbackNode;wc(a,b);var d=uc(a,a===R$1?Z$1:0);if(0===d)null!==c&&bc(c),a.callbackNode=null,a.callbackPriority=0;else if(b=d&-d,a.callbackPriority!==b){null!=c&&bc(c);if(1===b)0===a.tag?ig(Fk.bind(null,a)):hg(Fk.bind(null,a)),Jf(function(){0===(K$1&6)&&jg();}),c=null;else {switch(Dc(d)){case 1:c=fc;break;case 4:c=gc;break;case 16:c=hc;break;case 536870912:c=jc;break;default:c=hc;}c=Gk(c,Hk.bind(null,a));}a.callbackPriority=b;a.callbackNode=c;}}
function Hk(a,b){Bk=-1;Ck=0;if(0!==(K$1&6))throw Error(p$1(327));var c=a.callbackNode;if(Ik()&&a.callbackNode!==c)return null;var d=uc(a,a===R$1?Z$1:0);if(0===d)return null;if(0!==(d&30)||0!==(d&a.expiredLanes)||b)b=Jk(a,d);else {b=d;var e=K$1;K$1|=2;var f=Kk();if(R$1!==a||Z$1!==b)vk=null,Hj=B$1()+500,Lk(a,b);do try{Mk();break}catch(h){Nk(a,h);}while(1);Qg();nk.current=f;K$1=e;null!==Y$1?b=0:(R$1=null,Z$1=0,b=T$1);}if(0!==b){2===b&&(e=xc(a),0!==e&&(d=e,b=Ok(a,e)));if(1===b)throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B$1()),c;if(6===b)Dk(a,d);
else {e=a.current.alternate;if(0===(d&30)&&!Pk(e)&&(b=Jk(a,d),2===b&&(f=xc(a),0!==f&&(d=f,b=Ok(a,f))),1===b))throw c=qk,Lk(a,0),Dk(a,d),Ek(a,B$1()),c;a.finishedWork=e;a.finishedLanes=d;switch(b){case 0:case 1:throw Error(p$1(345));case 2:Qk(a,uk,vk);break;case 3:Dk(a,d);if((d&130023424)===d&&(b=gk+500-B$1(),10<b)){if(0!==uc(a,0))break;e=a.suspendedLanes;if((e&d)!==d){L$1();a.pingedLanes|=a.suspendedLanes&e;break}a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),b);break}Qk(a,uk,vk);break;case 4:Dk(a,d);if((d&4194240)===
d)break;b=a.eventTimes;for(e=-1;0<d;){var g=31-oc(d);f=1<<g;g=b[g];g>e&&(e=g);d&=~f;}d=e;d=B$1()-d;d=(120>d?120:480>d?480:1080>d?1080:1920>d?1920:3E3>d?3E3:4320>d?4320:1960*mk(d/1960))-d;if(10<d){a.timeoutHandle=Ff(Qk.bind(null,a,uk,vk),d);break}Qk(a,uk,vk);break;case 5:Qk(a,uk,vk);break;default:throw Error(p$1(329));}}}Ek(a,B$1());return a.callbackNode===c?Hk.bind(null,a):null}
function Ok(a,b){var c=tk;a.current.memoizedState.isDehydrated&&(Lk(a,b).flags|=256);a=Jk(a,b);2!==a&&(b=uk,uk=c,null!==b&&Gj(b));return a}function Gj(a){null===uk?uk=a:uk.push.apply(uk,a);}
function Pk(a){for(var b=a;;){if(b.flags&16384){var c=b.updateQueue;if(null!==c&&(c=c.stores,null!==c))for(var d=0;d<c.length;d++){var e=c[d],f=e.getSnapshot;e=e.value;try{if(!He$1(f(),e))return !1}catch(g){return !1}}}c=b.child;if(b.subtreeFlags&16384&&null!==c)c.return=b,b=c;else {if(b===a)break;for(;null===b.sibling;){if(null===b.return||b.return===a)return !0;b=b.return;}b.sibling.return=b.return;b=b.sibling;}}return !0}
function Dk(a,b){b&=~sk;b&=~rk;a.suspendedLanes|=b;a.pingedLanes&=~b;for(a=a.expirationTimes;0<b;){var c=31-oc(b),d=1<<c;a[c]=-1;b&=~d;}}function Fk(a){if(0!==(K$1&6))throw Error(p$1(327));Ik();var b=uc(a,0);if(0===(b&1))return Ek(a,B$1()),null;var c=Jk(a,b);if(0!==a.tag&&2===c){var d=xc(a);0!==d&&(b=d,c=Ok(a,d));}if(1===c)throw c=qk,Lk(a,0),Dk(a,b),Ek(a,B$1()),c;if(6===c)throw Error(p$1(345));a.finishedWork=a.current.alternate;a.finishedLanes=b;Qk(a,uk,vk);Ek(a,B$1());return null}
function Rk(a,b){var c=K$1;K$1|=1;try{return a(b)}finally{K$1=c,0===K$1&&(Hj=B$1()+500,fg&&jg());}}function Sk(a){null!==xk&&0===xk.tag&&0===(K$1&6)&&Ik();var b=K$1;K$1|=1;var c=pk.transition,d=C$1;try{if(pk.transition=null,C$1=1,a)return a()}finally{C$1=d,pk.transition=c,K$1=b,0===(K$1&6)&&jg();}}function Ij(){gj=fj.current;E$1(fj);}
function Lk(a,b){a.finishedWork=null;a.finishedLanes=0;var c=a.timeoutHandle;-1!==c&&(a.timeoutHandle=-1,Gf(c));if(null!==Y$1)for(c=Y$1.return;null!==c;){var d=c;wg(d);switch(d.tag){case 1:d=d.type.childContextTypes;null!==d&&void 0!==d&&$f();break;case 3:Jh();E$1(Wf);E$1(H$1);Oh();break;case 5:Lh(d);break;case 4:Jh();break;case 13:E$1(M$1);break;case 19:E$1(M$1);break;case 10:Rg(d.type._context);break;case 22:case 23:Ij();}c=c.return;}R$1=a;Y$1=a=wh(a.current,null);Z$1=gj=b;T$1=0;qk=null;sk=rk=hh=0;uk=tk=null;if(null!==Wg){for(b=
0;b<Wg.length;b++)if(c=Wg[b],d=c.interleaved,null!==d){c.interleaved=null;var e=d.next,f=c.pending;if(null!==f){var g=f.next;f.next=e;d.next=g;}c.pending=d;}Wg=null;}return a}
function Nk(a,b){do{var c=Y$1;try{Qg();Ph.current=ai$1;if(Sh){for(var d=N$1.memoizedState;null!==d;){var e=d.queue;null!==e&&(e.pending=null);d=d.next;}Sh=!1;}Rh=0;P$1=O$1=N$1=null;Th=!1;Uh=0;ok.current=null;if(null===c||null===c.return){T$1=1;qk=b;Y$1=null;break}a:{var f=a,g=c.return,h=c,k=b;b=Z$1;h.flags|=32768;if(null!==k&&"object"===typeof k&&"function"===typeof k.then){var l=k,m=h,q=m.tag;if(0===(m.mode&1)&&(0===q||11===q||15===q)){var r=m.alternate;r?(m.updateQueue=r.updateQueue,m.memoizedState=r.memoizedState,
m.lanes=r.lanes):(m.updateQueue=null,m.memoizedState=null);}var y=Vi(g);if(null!==y){y.flags&=-257;Wi(y,g,h,f,b);y.mode&1&&Ti(f,l,b);b=y;k=l;var n=b.updateQueue;if(null===n){var t=new Set;t.add(k);b.updateQueue=t;}else n.add(k);break a}else {if(0===(b&1)){Ti(f,l,b);uj();break a}k=Error(p$1(426));}}else if(I$1&&h.mode&1){var J=Vi(g);if(null!==J){0===(J.flags&65536)&&(J.flags|=256);Wi(J,g,h,f,b);Jg(Ki(k,h));break a}}f=k=Ki(k,h);4!==T$1&&(T$1=2);null===tk?tk=[f]:tk.push(f);f=g;do{switch(f.tag){case 3:f.flags|=65536;
b&=-b;f.lanes|=b;var x=Oi(f,k,b);fh(f,x);break a;case 1:h=k;var w=f.type,u=f.stateNode;if(0===(f.flags&128)&&("function"===typeof w.getDerivedStateFromError||null!==u&&"function"===typeof u.componentDidCatch&&(null===Si||!Si.has(u)))){f.flags|=65536;b&=-b;f.lanes|=b;var F=Ri(f,h,b);fh(f,F);break a}}f=f.return;}while(null!==f)}Tk(c);}catch(na){b=na;Y$1===c&&null!==c&&(Y$1=c=c.return);continue}break}while(1)}function Kk(){var a=nk.current;nk.current=ai$1;return null===a?ai$1:a}
function uj(){if(0===T$1||3===T$1||2===T$1)T$1=4;null===R$1||0===(hh&268435455)&&0===(rk&268435455)||Dk(R$1,Z$1);}function Jk(a,b){var c=K$1;K$1|=2;var d=Kk();if(R$1!==a||Z$1!==b)vk=null,Lk(a,b);do try{Uk();break}catch(e){Nk(a,e);}while(1);Qg();K$1=c;nk.current=d;if(null!==Y$1)throw Error(p$1(261));R$1=null;Z$1=0;return T$1}function Uk(){for(;null!==Y$1;)Vk(Y$1);}function Mk(){for(;null!==Y$1&&!cc();)Vk(Y$1);}function Vk(a){var b=Wk(a.alternate,a,gj);a.memoizedProps=a.pendingProps;null===b?Tk(a):Y$1=b;ok.current=null;}
function Tk(a){var b=a;do{var c=b.alternate;a=b.return;if(0===(b.flags&32768)){if(c=Fj(c,b,gj),null!==c){Y$1=c;return}}else {c=Jj(c,b);if(null!==c){c.flags&=32767;Y$1=c;return}if(null!==a)a.flags|=32768,a.subtreeFlags=0,a.deletions=null;else {T$1=6;Y$1=null;return}}b=b.sibling;if(null!==b){Y$1=b;return}Y$1=b=a;}while(null!==b);0===T$1&&(T$1=5);}function Qk(a,b,c){var d=C$1,e=pk.transition;try{pk.transition=null,C$1=1,Xk(a,b,c,d);}finally{pk.transition=e,C$1=d;}return null}
function Xk(a,b,c,d){do Ik();while(null!==xk);if(0!==(K$1&6))throw Error(p$1(327));c=a.finishedWork;var e=a.finishedLanes;if(null===c)return null;a.finishedWork=null;a.finishedLanes=0;if(c===a.current)throw Error(p$1(177));a.callbackNode=null;a.callbackPriority=0;var f=c.lanes|c.childLanes;Bc(a,f);a===R$1&&(Y$1=R$1=null,Z$1=0);0===(c.subtreeFlags&2064)&&0===(c.flags&2064)||wk||(wk=!0,Gk(hc,function(){Ik();return null}));f=0!==(c.flags&15990);if(0!==(c.subtreeFlags&15990)||f){f=pk.transition;pk.transition=null;
var g=C$1;C$1=1;var h=K$1;K$1|=4;ok.current=null;Pj(a,c);ek(c,a);Oe$1(Df);dd=!!Cf;Df=Cf=null;a.current=c;ik(c);dc();K$1=h;C$1=g;pk.transition=f;}else a.current=c;wk&&(wk=!1,xk=a,yk=e);f=a.pendingLanes;0===f&&(Si=null);mc(c.stateNode);Ek(a,B$1());if(null!==b)for(d=a.onRecoverableError,c=0;c<b.length;c++)e=b[c],d(e.value,{componentStack:e.stack,digest:e.digest});if(Pi)throw Pi=!1,a=Qi,Qi=null,a;0!==(yk&1)&&0!==a.tag&&Ik();f=a.pendingLanes;0!==(f&1)?a===Ak?zk++:(zk=0,Ak=a):zk=0;jg();return null}
function Ik(){if(null!==xk){var a=Dc(yk),b=pk.transition,c=C$1;try{pk.transition=null;C$1=16>a?16:a;if(null===xk)var d=!1;else {a=xk;xk=null;yk=0;if(0!==(K$1&6))throw Error(p$1(331));var e=K$1;K$1|=4;for(V$1=a.current;null!==V$1;){var f=V$1,g=f.child;if(0!==(V$1.flags&16)){var h=f.deletions;if(null!==h){for(var k=0;k<h.length;k++){var l=h[k];for(V$1=l;null!==V$1;){var m=V$1;switch(m.tag){case 0:case 11:case 15:Qj(8,m,f);}var q=m.child;if(null!==q)q.return=m,V$1=q;else for(;null!==V$1;){m=V$1;var r=m.sibling,y=m.return;Tj(m);if(m===
l){V$1=null;break}if(null!==r){r.return=y;V$1=r;break}V$1=y;}}}var n=f.alternate;if(null!==n){var t=n.child;if(null!==t){n.child=null;do{var J=t.sibling;t.sibling=null;t=J;}while(null!==t)}}V$1=f;}}if(0!==(f.subtreeFlags&2064)&&null!==g)g.return=f,V$1=g;else b:for(;null!==V$1;){f=V$1;if(0!==(f.flags&2048))switch(f.tag){case 0:case 11:case 15:Qj(9,f,f.return);}var x=f.sibling;if(null!==x){x.return=f.return;V$1=x;break b}V$1=f.return;}}var w=a.current;for(V$1=w;null!==V$1;){g=V$1;var u=g.child;if(0!==(g.subtreeFlags&2064)&&null!==
u)u.return=g,V$1=u;else b:for(g=w;null!==V$1;){h=V$1;if(0!==(h.flags&2048))try{switch(h.tag){case 0:case 11:case 15:Rj(9,h);}}catch(na){W$1(h,h.return,na);}if(h===g){V$1=null;break b}var F=h.sibling;if(null!==F){F.return=h.return;V$1=F;break b}V$1=h.return;}}K$1=e;jg();if(lc&&"function"===typeof lc.onPostCommitFiberRoot)try{lc.onPostCommitFiberRoot(kc,a);}catch(na){}d=!0;}return d}finally{C$1=c,pk.transition=b;}}return !1}function Yk(a,b,c){b=Ki(c,b);b=Oi(a,b,1);a=dh(a,b,1);b=L$1();null!==a&&(Ac(a,1,b),Ek(a,b));}
function W$1(a,b,c){if(3===a.tag)Yk(a,a,c);else for(;null!==b;){if(3===b.tag){Yk(b,a,c);break}else if(1===b.tag){var d=b.stateNode;if("function"===typeof b.type.getDerivedStateFromError||"function"===typeof d.componentDidCatch&&(null===Si||!Si.has(d))){a=Ki(c,a);a=Ri(b,a,1);b=dh(b,a,1);a=L$1();null!==b&&(Ac(b,1,a),Ek(b,a));break}}b=b.return;}}
function Ui(a,b,c){var d=a.pingCache;null!==d&&d.delete(b);b=L$1();a.pingedLanes|=a.suspendedLanes&c;R$1===a&&(Z$1&c)===c&&(4===T$1||3===T$1&&(Z$1&130023424)===Z$1&&500>B$1()-gk?Lk(a,0):sk|=c);Ek(a,b);}function Zk(a,b){0===b&&(0===(a.mode&1)?b=1:(b=sc,sc<<=1,0===(sc&130023424)&&(sc=4194304)));var c=L$1();a=Zg(a,b);null!==a&&(Ac(a,b,c),Ek(a,c));}function vj(a){var b=a.memoizedState,c=0;null!==b&&(c=b.retryLane);Zk(a,c);}
function ck(a,b){var c=0;switch(a.tag){case 13:var d=a.stateNode;var e=a.memoizedState;null!==e&&(c=e.retryLane);break;case 19:d=a.stateNode;break;default:throw Error(p$1(314));}null!==d&&d.delete(b);Zk(a,c);}var Wk;
Wk=function(a,b,c){if(null!==a)if(a.memoizedProps!==b.pendingProps||Wf.current)Ug=!0;else {if(0===(a.lanes&c)&&0===(b.flags&128))return Ug=!1,zj(a,b,c);Ug=0!==(a.flags&131072)?!0:!1;}else Ug=!1,I$1&&0!==(b.flags&1048576)&&ug(b,ng,b.index);b.lanes=0;switch(b.tag){case 2:var d=b.type;jj(a,b);a=b.pendingProps;var e=Yf(b,H$1.current);Tg(b,c);e=Xh(null,b,d,a,e,c);var f=bi();b.flags|=1;"object"===typeof e&&null!==e&&"function"===typeof e.render&&void 0===e.$$typeof?(b.tag=1,b.memoizedState=null,b.updateQueue=
null,Zf(d)?(f=!0,cg(b)):f=!1,b.memoizedState=null!==e.state&&void 0!==e.state?e.state:null,ah(b),e.updater=nh,b.stateNode=e,e._reactInternals=b,rh(b,d,a,c),b=kj(null,b,d,!0,f,c)):(b.tag=0,I$1&&f&&vg(b),Yi(null,b,e,c),b=b.child);return b;case 16:d=b.elementType;a:{jj(a,b);a=b.pendingProps;e=d._init;d=e(d._payload);b.type=d;e=b.tag=$k(d);a=Lg(d,a);switch(e){case 0:b=dj(null,b,d,a,c);break a;case 1:b=ij(null,b,d,a,c);break a;case 11:b=Zi(null,b,d,a,c);break a;case 14:b=aj(null,b,d,Lg(d.type,a),c);break a}throw Error(p$1(306,
d,""));}return b;case 0:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),dj(a,b,d,e,c);case 1:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),ij(a,b,d,e,c);case 3:a:{lj(b);if(null===a)throw Error(p$1(387));d=b.pendingProps;f=b.memoizedState;e=f.element;bh(a,b);gh(b,d,null,c);var g=b.memoizedState;d=g.element;if(f.isDehydrated)if(f={element:d,isDehydrated:!1,cache:g.cache,pendingSuspenseBoundaries:g.pendingSuspenseBoundaries,transitions:g.transitions},b.updateQueue.baseState=
f,b.memoizedState=f,b.flags&256){e=Ki(Error(p$1(423)),b);b=mj(a,b,d,c,e);break a}else if(d!==e){e=Ki(Error(p$1(424)),b);b=mj(a,b,d,c,e);break a}else for(yg=Lf(b.stateNode.containerInfo.firstChild),xg=b,I$1=!0,zg=null,c=Ch(b,null,d,c),b.child=c;c;)c.flags=c.flags&-3|4096,c=c.sibling;else {Ig();if(d===e){b=$i(a,b,c);break a}Yi(a,b,d,c);}b=b.child;}return b;case 5:return Kh(b),null===a&&Eg(b),d=b.type,e=b.pendingProps,f=null!==a?a.memoizedProps:null,g=e.children,Ef(d,e)?g=null:null!==f&&Ef(d,f)&&(b.flags|=32),
hj(a,b),Yi(a,b,g,c),b.child;case 6:return null===a&&Eg(b),null;case 13:return pj(a,b,c);case 4:return Ih(b,b.stateNode.containerInfo),d=b.pendingProps,null===a?b.child=Bh(b,null,d,c):Yi(a,b,d,c),b.child;case 11:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),Zi(a,b,d,e,c);case 7:return Yi(a,b,b.pendingProps,c),b.child;case 8:return Yi(a,b,b.pendingProps.children,c),b.child;case 12:return Yi(a,b,b.pendingProps.children,c),b.child;case 10:a:{d=b.type._context;e=b.pendingProps;f=b.memoizedProps;
g=e.value;G$1(Mg,d._currentValue);d._currentValue=g;if(null!==f)if(He$1(f.value,g)){if(f.children===e.children&&!Wf.current){b=$i(a,b,c);break a}}else for(f=b.child,null!==f&&(f.return=b);null!==f;){var h=f.dependencies;if(null!==h){g=f.child;for(var k=h.firstContext;null!==k;){if(k.context===d){if(1===f.tag){k=ch(-1,c&-c);k.tag=2;var l=f.updateQueue;if(null!==l){l=l.shared;var m=l.pending;null===m?k.next=k:(k.next=m.next,m.next=k);l.pending=k;}}f.lanes|=c;k=f.alternate;null!==k&&(k.lanes|=c);Sg(f.return,
c,b);h.lanes|=c;break}k=k.next;}}else if(10===f.tag)g=f.type===b.type?null:f.child;else if(18===f.tag){g=f.return;if(null===g)throw Error(p$1(341));g.lanes|=c;h=g.alternate;null!==h&&(h.lanes|=c);Sg(g,c,b);g=f.sibling;}else g=f.child;if(null!==g)g.return=f;else for(g=f;null!==g;){if(g===b){g=null;break}f=g.sibling;if(null!==f){f.return=g.return;g=f;break}g=g.return;}f=g;}Yi(a,b,e.children,c);b=b.child;}return b;case 9:return e=b.type,d=b.pendingProps.children,Tg(b,c),e=Vg(e),d=d(e),b.flags|=1,Yi(a,b,d,c),
b.child;case 14:return d=b.type,e=Lg(d,b.pendingProps),e=Lg(d.type,e),aj(a,b,d,e,c);case 15:return cj(a,b,b.type,b.pendingProps,c);case 17:return d=b.type,e=b.pendingProps,e=b.elementType===d?e:Lg(d,e),jj(a,b),b.tag=1,Zf(d)?(a=!0,cg(b)):a=!1,Tg(b,c),ph(b,d,e),rh(b,d,e,c),kj(null,b,d,!0,a,c);case 19:return yj(a,b,c);case 22:return ej(a,b,c)}throw Error(p$1(156,b.tag));};function Gk(a,b){return ac(a,b)}
function al(a,b,c,d){this.tag=a;this.key=c;this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null;this.index=0;this.ref=null;this.pendingProps=b;this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null;this.mode=d;this.subtreeFlags=this.flags=0;this.deletions=null;this.childLanes=this.lanes=0;this.alternate=null;}function Bg(a,b,c,d){return new al(a,b,c,d)}function bj(a){a=a.prototype;return !(!a||!a.isReactComponent)}
function $k(a){if("function"===typeof a)return bj(a)?1:0;if(void 0!==a&&null!==a){a=a.$$typeof;if(a===Da)return 11;if(a===Ga)return 14}return 2}
function wh(a,b){var c=a.alternate;null===c?(c=Bg(a.tag,b,a.key,a.mode),c.elementType=a.elementType,c.type=a.type,c.stateNode=a.stateNode,c.alternate=a,a.alternate=c):(c.pendingProps=b,c.type=a.type,c.flags=0,c.subtreeFlags=0,c.deletions=null);c.flags=a.flags&14680064;c.childLanes=a.childLanes;c.lanes=a.lanes;c.child=a.child;c.memoizedProps=a.memoizedProps;c.memoizedState=a.memoizedState;c.updateQueue=a.updateQueue;b=a.dependencies;c.dependencies=null===b?null:{lanes:b.lanes,firstContext:b.firstContext};
c.sibling=a.sibling;c.index=a.index;c.ref=a.ref;return c}
function yh(a,b,c,d,e,f){var g=2;d=a;if("function"===typeof a)bj(a)&&(g=1);else if("string"===typeof a)g=5;else a:switch(a){case ya:return Ah(c.children,e,f,b);case za:g=8;e|=8;break;case Aa:return a=Bg(12,c,b,e|2),a.elementType=Aa,a.lanes=f,a;case Ea:return a=Bg(13,c,b,e),a.elementType=Ea,a.lanes=f,a;case Fa:return a=Bg(19,c,b,e),a.elementType=Fa,a.lanes=f,a;case Ia:return qj(c,e,f,b);default:if("object"===typeof a&&null!==a)switch(a.$$typeof){case Ba:g=10;break a;case Ca:g=9;break a;case Da:g=11;
break a;case Ga:g=14;break a;case Ha:g=16;d=null;break a}throw Error(p$1(130,null==a?a:typeof a,""));}b=Bg(g,c,b,e);b.elementType=a;b.type=d;b.lanes=f;return b}function Ah(a,b,c,d){a=Bg(7,a,d,b);a.lanes=c;return a}function qj(a,b,c,d){a=Bg(22,a,d,b);a.elementType=Ia;a.lanes=c;a.stateNode={isHidden:!1};return a}function xh(a,b,c){a=Bg(6,a,null,b);a.lanes=c;return a}
function zh(a,b,c){b=Bg(4,null!==a.children?a.children:[],a.key,b);b.lanes=c;b.stateNode={containerInfo:a.containerInfo,pendingChildren:null,implementation:a.implementation};return b}
function bl(a,b,c,d,e){this.tag=b;this.containerInfo=a;this.finishedWork=this.pingCache=this.current=this.pendingChildren=null;this.timeoutHandle=-1;this.callbackNode=this.pendingContext=this.context=null;this.callbackPriority=0;this.eventTimes=zc(0);this.expirationTimes=zc(-1);this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0;this.entanglements=zc(0);this.identifierPrefix=d;this.onRecoverableError=e;this.mutableSourceEagerHydrationData=
null;}function cl(a,b,c,d,e,f,g,h,k){a=new bl(a,b,c,h,k);1===b?(b=1,!0===f&&(b|=8)):b=0;f=Bg(3,null,null,b);a.current=f;f.stateNode=a;f.memoizedState={element:d,isDehydrated:c,cache:null,transitions:null,pendingSuspenseBoundaries:null};ah(f);return a}function dl(a,b,c){var d=3<arguments.length&&void 0!==arguments[3]?arguments[3]:null;return {$$typeof:wa,key:null==d?null:""+d,children:a,containerInfo:b,implementation:c}}
function el(a){if(!a)return Vf;a=a._reactInternals;a:{if(Vb(a)!==a||1!==a.tag)throw Error(p$1(170));var b=a;do{switch(b.tag){case 3:b=b.stateNode.context;break a;case 1:if(Zf(b.type)){b=b.stateNode.__reactInternalMemoizedMergedChildContext;break a}}b=b.return;}while(null!==b);throw Error(p$1(171));}if(1===a.tag){var c=a.type;if(Zf(c))return bg(a,c,b)}return b}
function fl(a,b,c,d,e,f,g,h,k){a=cl(c,d,!0,a,e,f,g,h,k);a.context=el(null);c=a.current;d=L$1();e=lh(c);f=ch(d,e);f.callback=void 0!==b&&null!==b?b:null;dh(c,f,e);a.current.lanes=e;Ac(a,e,d);Ek(a,d);return a}function gl(a,b,c,d){var e=b.current,f=L$1(),g=lh(e);c=el(c);null===b.context?b.context=c:b.pendingContext=c;b=ch(f,g);b.payload={element:a};d=void 0===d?null:d;null!==d&&(b.callback=d);a=dh(e,b,g);null!==a&&(mh(a,e,g,f),eh(a,e,g));return g}
function hl(a){a=a.current;if(!a.child)return null;switch(a.child.tag){case 5:return a.child.stateNode;default:return a.child.stateNode}}function il(a,b){a=a.memoizedState;if(null!==a&&null!==a.dehydrated){var c=a.retryLane;a.retryLane=0!==c&&c<b?c:b;}}function jl(a,b){il(a,b);(a=a.alternate)&&il(a,b);}function kl(){return null}var ll="function"===typeof reportError?reportError:function(a){console.error(a);};function ml(a){this._internalRoot=a;}
nl.prototype.render=ml.prototype.render=function(a){var b=this._internalRoot;if(null===b)throw Error(p$1(409));gl(a,b,null,null);};nl.prototype.unmount=ml.prototype.unmount=function(){var a=this._internalRoot;if(null!==a){this._internalRoot=null;var b=a.containerInfo;Sk(function(){gl(null,a,null,null);});b[uf]=null;}};function nl(a){this._internalRoot=a;}
nl.prototype.unstable_scheduleHydration=function(a){if(a){var b=Hc();a={blockedOn:null,target:a,priority:b};for(var c=0;c<Qc.length&&0!==b&&b<Qc[c].priority;c++);Qc.splice(c,0,a);0===c&&Vc(a);}};function ol(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType)}function pl(a){return !(!a||1!==a.nodeType&&9!==a.nodeType&&11!==a.nodeType&&(8!==a.nodeType||" react-mount-point-unstable "!==a.nodeValue))}function ql(){}
function rl(a,b,c,d,e){if(e){if("function"===typeof d){var f=d;d=function(){var a=hl(g);f.call(a);};}var g=fl(b,d,a,0,null,!1,!1,"",ql);a._reactRootContainer=g;a[uf]=g.current;sf(8===a.nodeType?a.parentNode:a);Sk();return g}for(;e=a.lastChild;)a.removeChild(e);if("function"===typeof d){var h=d;d=function(){var a=hl(k);h.call(a);};}var k=cl(a,0,!1,null,null,!1,!1,"",ql);a._reactRootContainer=k;a[uf]=k.current;sf(8===a.nodeType?a.parentNode:a);Sk(function(){gl(b,k,c,d);});return k}
function sl(a,b,c,d,e){var f=c._reactRootContainer;if(f){var g=f;if("function"===typeof e){var h=e;e=function(){var a=hl(g);h.call(a);};}gl(b,g,a,e);}else g=rl(c,b,a,e,d);return hl(g)}Ec=function(a){switch(a.tag){case 3:var b=a.stateNode;if(b.current.memoizedState.isDehydrated){var c=tc(b.pendingLanes);0!==c&&(Cc(b,c|1),Ek(b,B$1()),0===(K$1&6)&&(Hj=B$1()+500,jg()));}break;case 13:Sk(function(){var b=Zg(a,1);if(null!==b){var c=L$1();mh(b,a,1,c);}}),jl(a,1);}};
Fc=function(a){if(13===a.tag){var b=Zg(a,134217728);if(null!==b){var c=L$1();mh(b,a,134217728,c);}jl(a,134217728);}};Gc=function(a){if(13===a.tag){var b=lh(a),c=Zg(a,b);if(null!==c){var d=L$1();mh(c,a,b,d);}jl(a,b);}};Hc=function(){return C$1};Ic=function(a,b){var c=C$1;try{return C$1=a,b()}finally{C$1=c;}};
yb=function(a,b,c){switch(b){case "input":bb(a,c);b=c.name;if("radio"===c.type&&null!=b){for(c=a;c.parentNode;)c=c.parentNode;c=c.querySelectorAll("input[name="+JSON.stringify(""+b)+'][type="radio"]');for(b=0;b<c.length;b++){var d=c[b];if(d!==a&&d.form===a.form){var e=Db(d);if(!e)throw Error(p$1(90));Wa(d);bb(d,e);}}}break;case "textarea":ib(a,c);break;case "select":b=c.value,null!=b&&fb(a,!!c.multiple,b,!1);}};Gb=Rk;Hb=Sk;
var tl={usingClientEntryPoint:!1,Events:[Cb,ue$1,Db,Eb,Fb,Rk]},ul={findFiberByHostInstance:Wc,bundleType:0,version:"18.2.0",rendererPackageName:"react-dom"};
var vl={bundleType:ul.bundleType,version:ul.version,rendererPackageName:ul.rendererPackageName,rendererConfig:ul.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:ua.ReactCurrentDispatcher,findHostInstanceByFiber:function(a){a=Zb(a);return null===a?null:a.stateNode},findFiberByHostInstance:ul.findFiberByHostInstance||
kl,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.2.0-next-9e3b772b8-20220608"};if("undefined"!==typeof __REACT_DEVTOOLS_GLOBAL_HOOK__){var wl=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!wl.isDisabled&&wl.supportsFiber)try{kc=wl.inject(vl),lc=wl;}catch(a){}}reactDom_production_min.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=tl;
reactDom_production_min.createPortal=function(a,b){var c=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;if(!ol(b))throw Error(p$1(200));return dl(a,b,null,c)};reactDom_production_min.createRoot=function(a,b){if(!ol(a))throw Error(p$1(299));var c=!1,d="",e=ll;null!==b&&void 0!==b&&(!0===b.unstable_strictMode&&(c=!0),void 0!==b.identifierPrefix&&(d=b.identifierPrefix),void 0!==b.onRecoverableError&&(e=b.onRecoverableError));b=cl(a,1,!1,null,null,c,!1,d,e);a[uf]=b.current;sf(8===a.nodeType?a.parentNode:a);return new ml(b)};
reactDom_production_min.findDOMNode=function(a){if(null==a)return null;if(1===a.nodeType)return a;var b=a._reactInternals;if(void 0===b){if("function"===typeof a.render)throw Error(p$1(188));a=Object.keys(a).join(",");throw Error(p$1(268,a));}a=Zb(b);a=null===a?null:a.stateNode;return a};reactDom_production_min.flushSync=function(a){return Sk(a)};reactDom_production_min.hydrate=function(a,b,c){if(!pl(b))throw Error(p$1(200));return sl(null,a,b,!0,c)};
reactDom_production_min.hydrateRoot=function(a,b,c){if(!ol(a))throw Error(p$1(405));var d=null!=c&&c.hydratedSources||null,e=!1,f="",g=ll;null!==c&&void 0!==c&&(!0===c.unstable_strictMode&&(e=!0),void 0!==c.identifierPrefix&&(f=c.identifierPrefix),void 0!==c.onRecoverableError&&(g=c.onRecoverableError));b=fl(b,null,a,1,null!=c?c:null,e,!1,f,g);a[uf]=b.current;sf(a);if(d)for(a=0;a<d.length;a++)c=d[a],e=c._getVersion,e=e(c._source),null==b.mutableSourceEagerHydrationData?b.mutableSourceEagerHydrationData=[c,e]:b.mutableSourceEagerHydrationData.push(c,
e);return new nl(b)};reactDom_production_min.render=function(a,b,c){if(!pl(b))throw Error(p$1(200));return sl(null,a,b,!1,c)};reactDom_production_min.unmountComponentAtNode=function(a){if(!pl(a))throw Error(p$1(40));return a._reactRootContainer?(Sk(function(){sl(null,null,a,!1,function(){a._reactRootContainer=null;a[uf]=null;});}),!0):!1};reactDom_production_min.unstable_batchedUpdates=Rk;
reactDom_production_min.unstable_renderSubtreeIntoContainer=function(a,b,c,d){if(!pl(c))throw Error(p$1(200));if(null==a||void 0===a._reactInternals)throw Error(p$1(38));return sl(a,b,c,!1,d)};reactDom_production_min.version="18.2.0-next-9e3b772b8-20220608";

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
  reactDom.exports = reactDom_production_min;
}

var reactDomExports = reactDom.exports;

var createRoot;
var m$1 = reactDomExports;
{
  createRoot = client.createRoot = m$1.createRoot;
  client.hydrateRoot = m$1.hydrateRoot;
}

var sweetalert2_all = {exports: {}};

/*!
* sweetalert2 v11.10.5
* Released under the MIT License.
*/

(function (module, exports) {
	(function (global, factory) {
	  module.exports = factory() ;
	})(commonjsGlobal, (function () {
	  function _callSuper(t, o, e) {
	    return o = _getPrototypeOf(o), _possibleConstructorReturn(t, _isNativeReflectConstruct() ? Reflect.construct(o, e || [], _getPrototypeOf(t).constructor) : o.apply(t, e));
	  }
	  function _construct(t, e, r) {
	    if (_isNativeReflectConstruct()) return Reflect.construct.apply(null, arguments);
	    var o = [null];
	    o.push.apply(o, e);
	    var p = new (t.bind.apply(t, o))();
	    return r && _setPrototypeOf(p, r.prototype), p;
	  }
	  function _isNativeReflectConstruct() {
	    try {
	      var t = !Boolean.prototype.valueOf.call(Reflect.construct(Boolean, [], function () {}));
	    } catch (t) {}
	    return (_isNativeReflectConstruct = function () {
	      return !!t;
	    })();
	  }
	  function _iterableToArrayLimit(r, l) {
	    var t = null == r ? null : "undefined" != typeof Symbol && r[Symbol.iterator] || r["@@iterator"];
	    if (null != t) {
	      var e,
	        n,
	        i,
	        u,
	        a = [],
	        f = !0,
	        o = !1;
	      try {
	        if (i = (t = t.call(r)).next, 0 === l) {
	          if (Object(t) !== t) return;
	          f = !1;
	        } else for (; !(f = (e = i.call(t)).done) && (a.push(e.value), a.length !== l); f = !0);
	      } catch (r) {
	        o = !0, n = r;
	      } finally {
	        try {
	          if (!f && null != t.return && (u = t.return(), Object(u) !== u)) return;
	        } finally {
	          if (o) throw n;
	        }
	      }
	      return a;
	    }
	  }
	  function _toPrimitive(t, r) {
	    if ("object" != typeof t || !t) return t;
	    var e = t[Symbol.toPrimitive];
	    if (void 0 !== e) {
	      var i = e.call(t, r || "default");
	      if ("object" != typeof i) return i;
	      throw new TypeError("@@toPrimitive must return a primitive value.");
	    }
	    return ("string" === r ? String : Number)(t);
	  }
	  function _toPropertyKey(t) {
	    var i = _toPrimitive(t, "string");
	    return "symbol" == typeof i ? i : String(i);
	  }
	  function _typeof(o) {
	    "@babel/helpers - typeof";

	    return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
	      return typeof o;
	    } : function (o) {
	      return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
	    }, _typeof(o);
	  }
	  function _classCallCheck(instance, Constructor) {
	    if (!(instance instanceof Constructor)) {
	      throw new TypeError("Cannot call a class as a function");
	    }
	  }
	  function _defineProperties(target, props) {
	    for (var i = 0; i < props.length; i++) {
	      var descriptor = props[i];
	      descriptor.enumerable = descriptor.enumerable || false;
	      descriptor.configurable = true;
	      if ("value" in descriptor) descriptor.writable = true;
	      Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor);
	    }
	  }
	  function _createClass(Constructor, protoProps, staticProps) {
	    if (protoProps) _defineProperties(Constructor.prototype, protoProps);
	    if (staticProps) _defineProperties(Constructor, staticProps);
	    Object.defineProperty(Constructor, "prototype", {
	      writable: false
	    });
	    return Constructor;
	  }
	  function _inherits(subClass, superClass) {
	    if (typeof superClass !== "function" && superClass !== null) {
	      throw new TypeError("Super expression must either be null or a function");
	    }
	    subClass.prototype = Object.create(superClass && superClass.prototype, {
	      constructor: {
	        value: subClass,
	        writable: true,
	        configurable: true
	      }
	    });
	    Object.defineProperty(subClass, "prototype", {
	      writable: false
	    });
	    if (superClass) _setPrototypeOf(subClass, superClass);
	  }
	  function _getPrototypeOf(o) {
	    _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function _getPrototypeOf(o) {
	      return o.__proto__ || Object.getPrototypeOf(o);
	    };
	    return _getPrototypeOf(o);
	  }
	  function _setPrototypeOf(o, p) {
	    _setPrototypeOf = Object.setPrototypeOf ? Object.setPrototypeOf.bind() : function _setPrototypeOf(o, p) {
	      o.__proto__ = p;
	      return o;
	    };
	    return _setPrototypeOf(o, p);
	  }
	  function _assertThisInitialized(self) {
	    if (self === void 0) {
	      throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
	    }
	    return self;
	  }
	  function _possibleConstructorReturn(self, call) {
	    if (call && (typeof call === "object" || typeof call === "function")) {
	      return call;
	    } else if (call !== void 0) {
	      throw new TypeError("Derived constructors may only return object or undefined");
	    }
	    return _assertThisInitialized(self);
	  }
	  function _superPropBase(object, property) {
	    while (!Object.prototype.hasOwnProperty.call(object, property)) {
	      object = _getPrototypeOf(object);
	      if (object === null) break;
	    }
	    return object;
	  }
	  function _get() {
	    if (typeof Reflect !== "undefined" && Reflect.get) {
	      _get = Reflect.get.bind();
	    } else {
	      _get = function _get(target, property, receiver) {
	        var base = _superPropBase(target, property);
	        if (!base) return;
	        var desc = Object.getOwnPropertyDescriptor(base, property);
	        if (desc.get) {
	          return desc.get.call(arguments.length < 3 ? target : receiver);
	        }
	        return desc.value;
	      };
	    }
	    return _get.apply(this, arguments);
	  }
	  function _slicedToArray(arr, i) {
	    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();
	  }
	  function _toConsumableArray(arr) {
	    return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread();
	  }
	  function _arrayWithoutHoles(arr) {
	    if (Array.isArray(arr)) return _arrayLikeToArray(arr);
	  }
	  function _arrayWithHoles(arr) {
	    if (Array.isArray(arr)) return arr;
	  }
	  function _iterableToArray(iter) {
	    if (typeof Symbol !== "undefined" && iter[Symbol.iterator] != null || iter["@@iterator"] != null) return Array.from(iter);
	  }
	  function _unsupportedIterableToArray(o, minLen) {
	    if (!o) return;
	    if (typeof o === "string") return _arrayLikeToArray(o, minLen);
	    var n = Object.prototype.toString.call(o).slice(8, -1);
	    if (n === "Object" && o.constructor) n = o.constructor.name;
	    if (n === "Map" || n === "Set") return Array.from(o);
	    if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);
	  }
	  function _arrayLikeToArray(arr, len) {
	    if (len == null || len > arr.length) len = arr.length;
	    for (var i = 0, arr2 = new Array(len); i < len; i++) arr2[i] = arr[i];
	    return arr2;
	  }
	  function _nonIterableSpread() {
	    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  function _nonIterableRest() {
	    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
	  }
	  function _classPrivateFieldGet(receiver, privateMap) {
	    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "get");
	    return _classApplyDescriptorGet(receiver, descriptor);
	  }
	  function _classPrivateFieldSet(receiver, privateMap, value) {
	    var descriptor = _classExtractFieldDescriptor(receiver, privateMap, "set");
	    _classApplyDescriptorSet(receiver, descriptor, value);
	    return value;
	  }
	  function _classExtractFieldDescriptor(receiver, privateMap, action) {
	    if (!privateMap.has(receiver)) {
	      throw new TypeError("attempted to " + action + " private field on non-instance");
	    }
	    return privateMap.get(receiver);
	  }
	  function _classApplyDescriptorGet(receiver, descriptor) {
	    if (descriptor.get) {
	      return descriptor.get.call(receiver);
	    }
	    return descriptor.value;
	  }
	  function _classApplyDescriptorSet(receiver, descriptor, value) {
	    if (descriptor.set) {
	      descriptor.set.call(receiver, value);
	    } else {
	      if (!descriptor.writable) {
	        throw new TypeError("attempted to set read only private field");
	      }
	      descriptor.value = value;
	    }
	  }
	  function _checkPrivateRedeclaration(obj, privateCollection) {
	    if (privateCollection.has(obj)) {
	      throw new TypeError("Cannot initialize the same private elements twice on an object");
	    }
	  }
	  function _classPrivateFieldInitSpec(obj, privateMap, value) {
	    _checkPrivateRedeclaration(obj, privateMap);
	    privateMap.set(obj, value);
	  }

	  var RESTORE_FOCUS_TIMEOUT = 100;

	  /** @type {GlobalState} */
	  var globalState = {};
	  var focusPreviousActiveElement = function focusPreviousActiveElement() {
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
	  var restoreActiveElement = function restoreActiveElement(returnFocus) {
	    return new Promise(function (resolve) {
	      if (!returnFocus) {
	        return resolve();
	      }
	      var x = window.scrollX;
	      var y = window.scrollY;
	      globalState.restoreFocusTimeout = setTimeout(function () {
	        focusPreviousActiveElement();
	        resolve();
	      }, RESTORE_FOCUS_TIMEOUT); // issues/900

	      window.scrollTo(x, y);
	    });
	  };

	  var swalPrefix = 'swal2-';

	  /**
	   * @typedef
	   * { | 'container'
	   *   | 'shown'
	   *   | 'height-auto'
	   *   | 'iosfix'
	   *   | 'popup'
	   *   | 'modal'
	   *   | 'no-backdrop'
	   *   | 'no-transition'
	   *   | 'toast'
	   *   | 'toast-shown'
	   *   | 'show'
	   *   | 'hide'
	   *   | 'close'
	   *   | 'title'
	   *   | 'html-container'
	   *   | 'actions'
	   *   | 'confirm'
	   *   | 'deny'
	   *   | 'cancel'
	   *   | 'default-outline'
	   *   | 'footer'
	   *   | 'icon'
	   *   | 'icon-content'
	   *   | 'image'
	   *   | 'input'
	   *   | 'file'
	   *   | 'range'
	   *   | 'select'
	   *   | 'radio'
	   *   | 'checkbox'
	   *   | 'label'
	   *   | 'textarea'
	   *   | 'inputerror'
	   *   | 'input-label'
	   *   | 'validation-message'
	   *   | 'progress-steps'
	   *   | 'active-progress-step'
	   *   | 'progress-step'
	   *   | 'progress-step-line'
	   *   | 'loader'
	   *   | 'loading'
	   *   | 'styled'
	   *   | 'top'
	   *   | 'top-start'
	   *   | 'top-end'
	   *   | 'top-left'
	   *   | 'top-right'
	   *   | 'center'
	   *   | 'center-start'
	   *   | 'center-end'
	   *   | 'center-left'
	   *   | 'center-right'
	   *   | 'bottom'
	   *   | 'bottom-start'
	   *   | 'bottom-end'
	   *   | 'bottom-left'
	   *   | 'bottom-right'
	   *   | 'grow-row'
	   *   | 'grow-column'
	   *   | 'grow-fullscreen'
	   *   | 'rtl'
	   *   | 'timer-progress-bar'
	   *   | 'timer-progress-bar-container'
	   *   | 'scrollbar-measure'
	   *   | 'icon-success'
	   *   | 'icon-warning'
	   *   | 'icon-info'
	   *   | 'icon-question'
	   *   | 'icon-error'
	   * } SwalClass
	   * @typedef {Record<SwalClass, string>} SwalClasses
	   */

	  /**
	   * @typedef {'success' | 'warning' | 'info' | 'question' | 'error'} SwalIcon
	   * @typedef {Record<SwalIcon, string>} SwalIcons
	   */

	  /** @type {SwalClass[]} */
	  var classNames = ['container', 'shown', 'height-auto', 'iosfix', 'popup', 'modal', 'no-backdrop', 'no-transition', 'toast', 'toast-shown', 'show', 'hide', 'close', 'title', 'html-container', 'actions', 'confirm', 'deny', 'cancel', 'default-outline', 'footer', 'icon', 'icon-content', 'image', 'input', 'file', 'range', 'select', 'radio', 'checkbox', 'label', 'textarea', 'inputerror', 'input-label', 'validation-message', 'progress-steps', 'active-progress-step', 'progress-step', 'progress-step-line', 'loader', 'loading', 'styled', 'top', 'top-start', 'top-end', 'top-left', 'top-right', 'center', 'center-start', 'center-end', 'center-left', 'center-right', 'bottom', 'bottom-start', 'bottom-end', 'bottom-left', 'bottom-right', 'grow-row', 'grow-column', 'grow-fullscreen', 'rtl', 'timer-progress-bar', 'timer-progress-bar-container', 'scrollbar-measure', 'icon-success', 'icon-warning', 'icon-info', 'icon-question', 'icon-error'];
	  var swalClasses = classNames.reduce(function (acc, className) {
	    acc[className] = swalPrefix + className;
	    return acc;
	  }, /** @type {SwalClasses} */{});

	  /** @type {SwalIcon[]} */
	  var icons = ['success', 'warning', 'info', 'question', 'error'];
	  var iconTypes = icons.reduce(function (acc, icon) {
	    acc[icon] = swalPrefix + icon;
	    return acc;
	  }, /** @type {SwalIcons} */{});

	  var consolePrefix = 'SweetAlert2:';

	  /**
	   * Capitalize the first letter of a string
	   *
	   * @param {string} str
	   * @returns {string}
	   */
	  var capitalizeFirstLetter = function capitalizeFirstLetter(str) {
	    return str.charAt(0).toUpperCase() + str.slice(1);
	  };

	  /**
	   * Standardize console warnings
	   *
	   * @param {string | string[]} message
	   */
	  var warn = function warn(message) {
	    console.warn("".concat(consolePrefix, " ").concat(_typeof(message) === 'object' ? message.join(' ') : message));
	  };

	  /**
	   * Standardize console errors
	   *
	   * @param {string} message
	   */
	  var error = function error(message) {
	    console.error("".concat(consolePrefix, " ").concat(message));
	  };

	  /**
	   * Private global state for `warnOnce`
	   *
	   * @type {string[]}
	   * @private
	   */
	  var previousWarnOnceMessages = [];

	  /**
	   * Show a console warning, but only if it hasn't already been shown
	   *
	   * @param {string} message
	   */
	  var warnOnce = function warnOnce(message) {
	    if (!previousWarnOnceMessages.includes(message)) {
	      previousWarnOnceMessages.push(message);
	      warn(message);
	    }
	  };

	  /**
	   * Show a one-time console warning about deprecated params/methods
	   *
	   * @param {string} deprecatedParam
	   * @param {string} useInstead
	   */
	  var warnAboutDeprecation = function warnAboutDeprecation(deprecatedParam, useInstead) {
	    warnOnce("\"".concat(deprecatedParam, "\" is deprecated and will be removed in the next major release. Please use \"").concat(useInstead, "\" instead."));
	  };

	  /**
	   * If `arg` is a function, call it (with no arguments or context) and return the result.
	   * Otherwise, just pass the value through
	   *
	   * @param {Function | any} arg
	   * @returns {any}
	   */
	  var callIfFunction = function callIfFunction(arg) {
	    return typeof arg === 'function' ? arg() : arg;
	  };

	  /**
	   * @param {any} arg
	   * @returns {boolean}
	   */
	  var hasToPromiseFn = function hasToPromiseFn(arg) {
	    return arg && typeof arg.toPromise === 'function';
	  };

	  /**
	   * @param {any} arg
	   * @returns {Promise<any>}
	   */
	  var asPromise = function asPromise(arg) {
	    return hasToPromiseFn(arg) ? arg.toPromise() : Promise.resolve(arg);
	  };

	  /**
	   * @param {any} arg
	   * @returns {boolean}
	   */
	  var isPromise = function isPromise(arg) {
	    return arg && Promise.resolve(arg) === arg;
	  };

	  /**
	   * Gets the popup container which contains the backdrop and the popup itself.
	   *
	   * @returns {HTMLElement | null}
	   */
	  var getContainer = function getContainer() {
	    return document.body.querySelector(".".concat(swalClasses.container));
	  };

	  /**
	   * @param {string} selectorString
	   * @returns {HTMLElement | null}
	   */
	  var elementBySelector = function elementBySelector(selectorString) {
	    var container = getContainer();
	    return container ? container.querySelector(selectorString) : null;
	  };

	  /**
	   * @param {string} className
	   * @returns {HTMLElement | null}
	   */
	  var elementByClass = function elementByClass(className) {
	    return elementBySelector(".".concat(className));
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getPopup = function getPopup() {
	    return elementByClass(swalClasses.popup);
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getIcon = function getIcon() {
	    return elementByClass(swalClasses.icon);
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getIconContent = function getIconContent() {
	    return elementByClass(swalClasses['icon-content']);
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getTitle = function getTitle() {
	    return elementByClass(swalClasses.title);
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getHtmlContainer = function getHtmlContainer() {
	    return elementByClass(swalClasses['html-container']);
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getImage = function getImage() {
	    return elementByClass(swalClasses.image);
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getProgressSteps = function getProgressSteps() {
	    return elementByClass(swalClasses['progress-steps']);
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getValidationMessage = function getValidationMessage() {
	    return elementByClass(swalClasses['validation-message']);
	  };

	  /**
	   * @returns {HTMLButtonElement | null}
	   */
	  var getConfirmButton = function getConfirmButton() {
	    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.confirm));
	  };

	  /**
	   * @returns {HTMLButtonElement | null}
	   */
	  var getCancelButton = function getCancelButton() {
	    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.cancel));
	  };

	  /**
	   * @returns {HTMLButtonElement | null}
	   */
	  var getDenyButton = function getDenyButton() {
	    return /** @type {HTMLButtonElement} */elementBySelector(".".concat(swalClasses.actions, " .").concat(swalClasses.deny));
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getInputLabel = function getInputLabel() {
	    return elementByClass(swalClasses['input-label']);
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getLoader = function getLoader() {
	    return elementBySelector(".".concat(swalClasses.loader));
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getActions = function getActions() {
	    return elementByClass(swalClasses.actions);
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getFooter = function getFooter() {
	    return elementByClass(swalClasses.footer);
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getTimerProgressBar = function getTimerProgressBar() {
	    return elementByClass(swalClasses['timer-progress-bar']);
	  };

	  /**
	   * @returns {HTMLElement | null}
	   */
	  var getCloseButton = function getCloseButton() {
	    return elementByClass(swalClasses.close);
	  };

	  // https://github.com/jkup/focusable/blob/master/index.js
	  var focusable = "\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex=\"0\"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n";
	  /**
	   * @returns {HTMLElement[]}
	   */
	  var getFocusableElements = function getFocusableElements() {
	    var popup = getPopup();
	    if (!popup) {
	      return [];
	    }
	    /** @type {NodeListOf<HTMLElement>} */
	    var focusableElementsWithTabindex = popup.querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])');
	    var focusableElementsWithTabindexSorted = Array.from(focusableElementsWithTabindex)
	    // sort according to tabindex
	    .sort(function (a, b) {
	      var tabindexA = parseInt(a.getAttribute('tabindex') || '0');
	      var tabindexB = parseInt(b.getAttribute('tabindex') || '0');
	      if (tabindexA > tabindexB) {
	        return 1;
	      } else if (tabindexA < tabindexB) {
	        return -1;
	      }
	      return 0;
	    });

	    /** @type {NodeListOf<HTMLElement>} */
	    var otherFocusableElements = popup.querySelectorAll(focusable);
	    var otherFocusableElementsFiltered = Array.from(otherFocusableElements).filter(function (el) {
	      return el.getAttribute('tabindex') !== '-1';
	    });
	    return _toConsumableArray(new Set(focusableElementsWithTabindexSorted.concat(otherFocusableElementsFiltered))).filter(function (el) {
	      return isVisible$1(el);
	    });
	  };

	  /**
	   * @returns {boolean}
	   */
	  var isModal = function isModal() {
	    return hasClass(document.body, swalClasses.shown) && !hasClass(document.body, swalClasses['toast-shown']) && !hasClass(document.body, swalClasses['no-backdrop']);
	  };

	  /**
	   * @returns {boolean}
	   */
	  var isToast = function isToast() {
	    var popup = getPopup();
	    if (!popup) {
	      return false;
	    }
	    return hasClass(popup, swalClasses.toast);
	  };

	  /**
	   * @returns {boolean}
	   */
	  var isLoading = function isLoading() {
	    var popup = getPopup();
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
	  var setInnerHtml = function setInnerHtml(elem, html) {
	    elem.textContent = '';
	    if (html) {
	      var parser = new DOMParser();
	      var parsed = parser.parseFromString(html, "text/html");
	      var head = parsed.querySelector('head');
	      head && Array.from(head.childNodes).forEach(function (child) {
	        elem.appendChild(child);
	      });
	      var body = parsed.querySelector('body');
	      body && Array.from(body.childNodes).forEach(function (child) {
	        if (child instanceof HTMLVideoElement || child instanceof HTMLAudioElement) {
	          elem.appendChild(child.cloneNode(true)); // https://github.com/sweetalert2/sweetalert2/issues/2507
	        } else {
	          elem.appendChild(child);
	        }
	      });
	    }
	  };

	  /**
	   * @param {HTMLElement} elem
	   * @param {string} className
	   * @returns {boolean}
	   */
	  var hasClass = function hasClass(elem, className) {
	    if (!className) {
	      return false;
	    }
	    var classList = className.split(/\s+/);
	    for (var i = 0; i < classList.length; i++) {
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
	  var removeCustomClasses = function removeCustomClasses(elem, params) {
	    Array.from(elem.classList).forEach(function (className) {
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
	  var applyCustomClass = function applyCustomClass(elem, params, className) {
	    removeCustomClasses(elem, params);
	    if (params.customClass && params.customClass[className]) {
	      if (typeof params.customClass[className] !== 'string' && !params.customClass[className].forEach) {
	        warn("Invalid type of customClass.".concat(className, "! Expected string or iterable object, got \"").concat(_typeof(params.customClass[className]), "\""));
	        return;
	      }
	      addClass(elem, params.customClass[className]);
	    }
	  };

	  /**
	   * @param {HTMLElement} popup
	   * @param {import('./renderers/renderInput').InputClass | SweetAlertInput} inputClass
	   * @returns {HTMLInputElement | null}
	   */
	  var getInput$1 = function getInput(popup, inputClass) {
	    if (!inputClass) {
	      return null;
	    }
	    switch (inputClass) {
	      case 'select':
	      case 'textarea':
	      case 'file':
	        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses[inputClass]));
	      case 'checkbox':
	        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.checkbox, " input"));
	      case 'radio':
	        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:checked")) || popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.radio, " input:first-child"));
	      case 'range':
	        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.range, " input"));
	      default:
	        return popup.querySelector(".".concat(swalClasses.popup, " > .").concat(swalClasses.input));
	    }
	  };

	  /**
	   * @param {HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement} input
	   */
	  var focusInput = function focusInput(input) {
	    input.focus();

	    // place cursor at end of text in text input
	    if (input.type !== 'file') {
	      // http://stackoverflow.com/a/2345915
	      var val = input.value;
	      input.value = '';
	      input.value = val;
	    }
	  };

	  /**
	   * @param {HTMLElement | HTMLElement[] | null} target
	   * @param {string | string[] | readonly string[] | undefined} classList
	   * @param {boolean} condition
	   */
	  var toggleClass = function toggleClass(target, classList, condition) {
	    if (!target || !classList) {
	      return;
	    }
	    if (typeof classList === 'string') {
	      classList = classList.split(/\s+/).filter(Boolean);
	    }
	    classList.forEach(function (className) {
	      if (Array.isArray(target)) {
	        target.forEach(function (elem) {
	          condition ? elem.classList.add(className) : elem.classList.remove(className);
	        });
	      } else {
	        condition ? target.classList.add(className) : target.classList.remove(className);
	      }
	    });
	  };

	  /**
	   * @param {HTMLElement | HTMLElement[] | null} target
	   * @param {string | string[] | readonly string[] | undefined} classList
	   */
	  var addClass = function addClass(target, classList) {
	    toggleClass(target, classList, true);
	  };

	  /**
	   * @param {HTMLElement | HTMLElement[] | null} target
	   * @param {string | string[] | readonly string[] | undefined} classList
	   */
	  var removeClass = function removeClass(target, classList) {
	    toggleClass(target, classList, false);
	  };

	  /**
	   * Get direct child of an element by class name
	   *
	   * @param {HTMLElement} elem
	   * @param {string} className
	   * @returns {HTMLElement | undefined}
	   */
	  var getDirectChildByClass = function getDirectChildByClass(elem, className) {
	    var children = Array.from(elem.children);
	    for (var i = 0; i < children.length; i++) {
	      var child = children[i];
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
	  var applyNumericalStyle = function applyNumericalStyle(elem, property, value) {
	    if (value === "".concat(parseInt(value))) {
	      value = parseInt(value);
	    }
	    if (value || parseInt(value) === 0) {
	      elem.style.setProperty(property, typeof value === 'number' ? "".concat(value, "px") : value);
	    } else {
	      elem.style.removeProperty(property);
	    }
	  };

	  /**
	   * @param {HTMLElement | null} elem
	   * @param {string} display
	   */
	  var show = function show(elem) {
	    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'flex';
	    elem && (elem.style.display = display);
	  };

	  /**
	   * @param {HTMLElement | null} elem
	   */
	  var hide = function hide(elem) {
	    elem && (elem.style.display = 'none');
	  };

	  /**
	   * @param {HTMLElement | null} elem
	   * @param {string} display
	   */
	  var showWhenInnerHtmlPresent = function showWhenInnerHtmlPresent(elem) {
	    var display = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 'block';
	    if (!elem) {
	      return;
	    }
	    new MutationObserver(function () {
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
	  var setStyle = function setStyle(parent, selector, property, value) {
	    /** @type {HTMLElement | null} */
	    var el = parent.querySelector(selector);
	    if (el) {
	      el.style.setProperty(property, value);
	    }
	  };

	  /**
	   * @param {HTMLElement} elem
	   * @param {any} condition
	   * @param {string} display
	   */
	  var toggle = function toggle(elem, condition) {
	    var display = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'flex';
	    condition ? show(elem, display) : hide(elem);
	  };

	  /**
	   * borrowed from jquery $(elem).is(':visible') implementation
	   *
	   * @param {HTMLElement | null} elem
	   * @returns {boolean}
	   */
	  var isVisible$1 = function isVisible(elem) {
	    return !!(elem && (elem.offsetWidth || elem.offsetHeight || elem.getClientRects().length));
	  };

	  /**
	   * @returns {boolean}
	   */
	  var allButtonsAreHidden = function allButtonsAreHidden() {
	    return !isVisible$1(getConfirmButton()) && !isVisible$1(getDenyButton()) && !isVisible$1(getCancelButton());
	  };

	  /**
	   * @param {HTMLElement} elem
	   * @returns {boolean}
	   */
	  var isScrollable = function isScrollable(elem) {
	    return !!(elem.scrollHeight > elem.clientHeight);
	  };

	  /**
	   * borrowed from https://stackoverflow.com/a/46352119
	   *
	   * @param {HTMLElement} elem
	   * @returns {boolean}
	   */
	  var hasCssAnimation = function hasCssAnimation(elem) {
	    var style = window.getComputedStyle(elem);
	    var animDuration = parseFloat(style.getPropertyValue('animation-duration') || '0');
	    var transDuration = parseFloat(style.getPropertyValue('transition-duration') || '0');
	    return animDuration > 0 || transDuration > 0;
	  };

	  /**
	   * @param {number} timer
	   * @param {boolean} reset
	   */
	  var animateTimerProgressBar = function animateTimerProgressBar(timer) {
	    var reset = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
	    var timerProgressBar = getTimerProgressBar();
	    if (!timerProgressBar) {
	      return;
	    }
	    if (isVisible$1(timerProgressBar)) {
	      if (reset) {
	        timerProgressBar.style.transition = 'none';
	        timerProgressBar.style.width = '100%';
	      }
	      setTimeout(function () {
	        timerProgressBar.style.transition = "width ".concat(timer / 1000, "s linear");
	        timerProgressBar.style.width = '0%';
	      }, 10);
	    }
	  };
	  var stopTimerProgressBar = function stopTimerProgressBar() {
	    var timerProgressBar = getTimerProgressBar();
	    if (!timerProgressBar) {
	      return;
	    }
	    var timerProgressBarWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
	    timerProgressBar.style.removeProperty('transition');
	    timerProgressBar.style.width = '100%';
	    var timerProgressBarFullWidth = parseInt(window.getComputedStyle(timerProgressBar).width);
	    var timerProgressBarPercent = timerProgressBarWidth / timerProgressBarFullWidth * 100;
	    timerProgressBar.style.width = "".concat(timerProgressBarPercent, "%");
	  };

	  /**
	   * Detect Node env
	   *
	   * @returns {boolean}
	   */
	  var isNodeEnv = function isNodeEnv() {
	    return typeof window === 'undefined' || typeof document === 'undefined';
	  };

	  var sweetHTML = "\n <div aria-labelledby=\"".concat(swalClasses.title, "\" aria-describedby=\"").concat(swalClasses['html-container'], "\" class=\"").concat(swalClasses.popup, "\" tabindex=\"-1\">\n   <button type=\"button\" class=\"").concat(swalClasses.close, "\"></button>\n   <ul class=\"").concat(swalClasses['progress-steps'], "\"></ul>\n   <div class=\"").concat(swalClasses.icon, "\"></div>\n   <img class=\"").concat(swalClasses.image, "\" />\n   <h2 class=\"").concat(swalClasses.title, "\" id=\"").concat(swalClasses.title, "\"></h2>\n   <div class=\"").concat(swalClasses['html-container'], "\" id=\"").concat(swalClasses['html-container'], "\"></div>\n   <input class=\"").concat(swalClasses.input, "\" id=\"").concat(swalClasses.input, "\" />\n   <input type=\"file\" class=\"").concat(swalClasses.file, "\" />\n   <div class=\"").concat(swalClasses.range, "\">\n     <input type=\"range\" />\n     <output></output>\n   </div>\n   <select class=\"").concat(swalClasses.select, "\" id=\"").concat(swalClasses.select, "\"></select>\n   <div class=\"").concat(swalClasses.radio, "\"></div>\n   <label class=\"").concat(swalClasses.checkbox, "\">\n     <input type=\"checkbox\" id=\"").concat(swalClasses.checkbox, "\" />\n     <span class=\"").concat(swalClasses.label, "\"></span>\n   </label>\n   <textarea class=\"").concat(swalClasses.textarea, "\" id=\"").concat(swalClasses.textarea, "\"></textarea>\n   <div class=\"").concat(swalClasses['validation-message'], "\" id=\"").concat(swalClasses['validation-message'], "\"></div>\n   <div class=\"").concat(swalClasses.actions, "\">\n     <div class=\"").concat(swalClasses.loader, "\"></div>\n     <button type=\"button\" class=\"").concat(swalClasses.confirm, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.deny, "\"></button>\n     <button type=\"button\" class=\"").concat(swalClasses.cancel, "\"></button>\n   </div>\n   <div class=\"").concat(swalClasses.footer, "\"></div>\n   <div class=\"").concat(swalClasses['timer-progress-bar-container'], "\">\n     <div class=\"").concat(swalClasses['timer-progress-bar'], "\"></div>\n   </div>\n </div>\n").replace(/(^|\n)\s*/g, '');

	  /**
	   * @returns {boolean}
	   */
	  var resetOldContainer = function resetOldContainer() {
	    var oldContainer = getContainer();
	    if (!oldContainer) {
	      return false;
	    }
	    oldContainer.remove();
	    removeClass([document.documentElement, document.body], [swalClasses['no-backdrop'], swalClasses['toast-shown'], swalClasses['has-column']]);
	    return true;
	  };
	  var resetValidationMessage$1 = function resetValidationMessage() {
	    globalState.currentInstance.resetValidationMessage();
	  };
	  var addInputChangeListeners = function addInputChangeListeners() {
	    var popup = getPopup();
	    var input = getDirectChildByClass(popup, swalClasses.input);
	    var file = getDirectChildByClass(popup, swalClasses.file);
	    /** @type {HTMLInputElement} */
	    var range = popup.querySelector(".".concat(swalClasses.range, " input"));
	    /** @type {HTMLOutputElement} */
	    var rangeOutput = popup.querySelector(".".concat(swalClasses.range, " output"));
	    var select = getDirectChildByClass(popup, swalClasses.select);
	    /** @type {HTMLInputElement} */
	    var checkbox = popup.querySelector(".".concat(swalClasses.checkbox, " input"));
	    var textarea = getDirectChildByClass(popup, swalClasses.textarea);
	    input.oninput = resetValidationMessage$1;
	    file.onchange = resetValidationMessage$1;
	    select.onchange = resetValidationMessage$1;
	    checkbox.onchange = resetValidationMessage$1;
	    textarea.oninput = resetValidationMessage$1;
	    range.oninput = function () {
	      resetValidationMessage$1();
	      rangeOutput.value = range.value;
	    };
	    range.onchange = function () {
	      resetValidationMessage$1();
	      rangeOutput.value = range.value;
	    };
	  };

	  /**
	   * @param {string | HTMLElement} target
	   * @returns {HTMLElement}
	   */
	  var getTarget = function getTarget(target) {
	    return typeof target === 'string' ? document.querySelector(target) : target;
	  };

	  /**
	   * @param {SweetAlertOptions} params
	   */
	  var setupAccessibility = function setupAccessibility(params) {
	    var popup = getPopup();
	    popup.setAttribute('role', params.toast ? 'alert' : 'dialog');
	    popup.setAttribute('aria-live', params.toast ? 'polite' : 'assertive');
	    if (!params.toast) {
	      popup.setAttribute('aria-modal', 'true');
	    }
	  };

	  /**
	   * @param {HTMLElement} targetElement
	   */
	  var setupRTL = function setupRTL(targetElement) {
	    if (window.getComputedStyle(targetElement).direction === 'rtl') {
	      addClass(getContainer(), swalClasses.rtl);
	    }
	  };

	  /**
	   * Add modal + backdrop + no-war message for Russians to DOM
	   *
	   * @param {SweetAlertOptions} params
	   */
	  var init = function init(params) {
	    // Clean up the old popup container if it exists
	    var oldContainerExisted = resetOldContainer();
	    if (isNodeEnv()) {
	      error('SweetAlert2 requires document to initialize');
	      return;
	    }
	    var container = document.createElement('div');
	    container.className = swalClasses.container;
	    if (oldContainerExisted) {
	      addClass(container, swalClasses['no-transition']);
	    }
	    setInnerHtml(container, sweetHTML);
	    var targetElement = getTarget(params.target);
	    targetElement.appendChild(container);
	    setupAccessibility(params);
	    setupRTL(targetElement);
	    addInputChangeListeners();
	  };

	  /**
	   * @param {HTMLElement | object | string} param
	   * @param {HTMLElement} target
	   */
	  var parseHtmlToContainer = function parseHtmlToContainer(param, target) {
	    // DOM element
	    if (param instanceof HTMLElement) {
	      target.appendChild(param);
	    }

	    // Object
	    else if (_typeof(param) === 'object') {
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
	  var handleObject = function handleObject(param, target) {
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
	  var handleJqueryElem = function handleJqueryElem(target, elem) {
	    target.textContent = '';
	    if (0 in elem) {
	      for (var i = 0; (i in elem); i++) {
	        target.appendChild(elem[i].cloneNode(true));
	      }
	    } else {
	      target.appendChild(elem.cloneNode(true));
	    }
	  };

	  /**
	   * @returns {'webkitAnimationEnd' | 'animationend' | false}
	   */
	  var animationEndEvent = function () {
	    // Prevent run in Node env
	    if (isNodeEnv()) {
	      return false;
	    }
	    var testEl = document.createElement('div');

	    // Chrome, Safari and Opera
	    if (typeof testEl.style.webkitAnimation !== 'undefined') {
	      return 'webkitAnimationEnd';
	    }

	    // Standard syntax
	    if (typeof testEl.style.animation !== 'undefined') {
	      return 'animationend';
	    }
	    return false;
	  }();

	  /**
	   * @param {SweetAlert} instance
	   * @param {SweetAlertOptions} params
	   */
	  var renderActions = function renderActions(instance, params) {
	    var actions = getActions();
	    var loader = getLoader();
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
	    var confirmButton = getConfirmButton();
	    var denyButton = getDenyButton();
	    var cancelButton = getCancelButton();
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
	    var buttonName = /** @type {'Confirm' | 'Deny' | 'Cancel'} */capitalizeFirstLetter(buttonType);
	    toggle(button, params["show".concat(buttonName, "Button")], 'inline-block');
	    setInnerHtml(button, params["".concat(buttonType, "ButtonText")] || ''); // Set caption text
	    button.setAttribute('aria-label', params["".concat(buttonType, "ButtonAriaLabel")] || ''); // ARIA label

	    // Add buttons custom classes
	    button.className = swalClasses[buttonType];
	    applyCustomClass(button, params, "".concat(buttonType, "Button"));
	  }

	  /**
	   * @param {SweetAlert} instance
	   * @param {SweetAlertOptions} params
	   */
	  var renderCloseButton = function renderCloseButton(instance, params) {
	    var closeButton = getCloseButton();
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
	  var renderContainer = function renderContainer(instance, params) {
	    var container = getContainer();
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
	    addClass(container, swalClasses["grow-".concat(grow)]);
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

	  /** @type {InputClass[]} */
	  var inputClasses = ['input', 'file', 'range', 'select', 'radio', 'checkbox', 'textarea'];

	  /**
	   * @param {SweetAlert} instance
	   * @param {SweetAlertOptions} params
	   */
	  var renderInput = function renderInput(instance, params) {
	    var popup = getPopup();
	    if (!popup) {
	      return;
	    }
	    var innerParams = privateProps.innerParams.get(instance);
	    var rerender = !innerParams || params.input !== innerParams.input;
	    inputClasses.forEach(function (inputClass) {
	      var inputContainer = getDirectChildByClass(popup, swalClasses[inputClass]);
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
	  var showInput = function showInput(params) {
	    if (!params.input) {
	      return;
	    }
	    if (!renderInputType[params.input]) {
	      error("Unexpected type of input! Expected ".concat(Object.keys(renderInputType).join(' | '), ", got \"").concat(params.input, "\""));
	      return;
	    }
	    var inputContainer = getInputContainer(params.input);
	    var input = renderInputType[params.input](inputContainer, params);
	    show(inputContainer);

	    // input autofocus
	    if (params.inputAutoFocus) {
	      setTimeout(function () {
	        focusInput(input);
	      });
	    }
	  };

	  /**
	   * @param {HTMLInputElement} input
	   */
	  var removeAttributes = function removeAttributes(input) {
	    for (var i = 0; i < input.attributes.length; i++) {
	      var attrName = input.attributes[i].name;
	      if (!['id', 'type', 'value', 'style'].includes(attrName)) {
	        input.removeAttribute(attrName);
	      }
	    }
	  };

	  /**
	   * @param {InputClass} inputClass
	   * @param {SweetAlertOptions['inputAttributes']} inputAttributes
	   */
	  var setAttributes = function setAttributes(inputClass, inputAttributes) {
	    var input = getInput$1(getPopup(), inputClass);
	    if (!input) {
	      return;
	    }
	    removeAttributes(input);
	    for (var attr in inputAttributes) {
	      input.setAttribute(attr, inputAttributes[attr]);
	    }
	  };

	  /**
	   * @param {SweetAlertOptions} params
	   */
	  var setCustomClass = function setCustomClass(params) {
	    var inputContainer = getInputContainer(params.input);
	    if (_typeof(params.customClass) === 'object') {
	      addClass(inputContainer, params.customClass.input);
	    }
	  };

	  /**
	   * @param {HTMLInputElement | HTMLTextAreaElement} input
	   * @param {SweetAlertOptions} params
	   */
	  var setInputPlaceholder = function setInputPlaceholder(input, params) {
	    if (!input.placeholder || params.inputPlaceholder) {
	      input.placeholder = params.inputPlaceholder;
	    }
	  };

	  /**
	   * @param {Input} input
	   * @param {Input} prependTo
	   * @param {SweetAlertOptions} params
	   */
	  var setInputLabel = function setInputLabel(input, prependTo, params) {
	    if (params.inputLabel) {
	      var label = document.createElement('label');
	      var labelClass = swalClasses['input-label'];
	      label.setAttribute('for', input.id);
	      label.className = labelClass;
	      if (_typeof(params.customClass) === 'object') {
	        addClass(label, params.customClass.inputLabel);
	      }
	      label.innerText = params.inputLabel;
	      prependTo.insertAdjacentElement('beforebegin', label);
	    }
	  };

	  /**
	   * @param {SweetAlertOptions['input']} inputType
	   * @returns {HTMLElement}
	   */
	  var getInputContainer = function getInputContainer(inputType) {
	    return getDirectChildByClass(getPopup(), swalClasses[inputType] || swalClasses.input);
	  };

	  /**
	   * @param {HTMLInputElement | HTMLOutputElement | HTMLTextAreaElement} input
	   * @param {SweetAlertOptions['inputValue']} inputValue
	   */
	  var checkAndSetInputValue = function checkAndSetInputValue(input, inputValue) {
	    if (['string', 'number'].includes(_typeof(inputValue))) {
	      input.value = "".concat(inputValue);
	    } else if (!isPromise(inputValue)) {
	      warn("Unexpected type of inputValue! Expected \"string\", \"number\" or \"Promise\", got \"".concat(_typeof(inputValue), "\""));
	    }
	  };

	  /** @type {Record<SweetAlertInput, (input: Input | HTMLElement, params: SweetAlertOptions) => Input>} */
	  var renderInputType = {};

	  /**
	   * @param {HTMLInputElement} input
	   * @param {SweetAlertOptions} params
	   * @returns {HTMLInputElement}
	   */
	  renderInputType.text = renderInputType.email = renderInputType.password = renderInputType.number = renderInputType.tel = renderInputType.url = renderInputType.search = renderInputType.date = renderInputType['datetime-local'] = renderInputType.time = renderInputType.week = renderInputType.month = function (input, params) {
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
	  renderInputType.file = function (input, params) {
	    setInputLabel(input, input, params);
	    setInputPlaceholder(input, params);
	    return input;
	  };

	  /**
	   * @param {HTMLInputElement} range
	   * @param {SweetAlertOptions} params
	   * @returns {HTMLInputElement}
	   */
	  renderInputType.range = function (range, params) {
	    var rangeInput = range.querySelector('input');
	    var rangeOutput = range.querySelector('output');
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
	  renderInputType.select = function (select, params) {
	    select.textContent = '';
	    if (params.inputPlaceholder) {
	      var placeholder = document.createElement('option');
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
	  renderInputType.radio = function (radio) {
	    radio.textContent = '';
	    return radio;
	  };

	  /**
	   * @param {HTMLLabelElement} checkboxContainer
	   * @param {SweetAlertOptions} params
	   * @returns {HTMLInputElement}
	   */
	  renderInputType.checkbox = function (checkboxContainer, params) {
	    var checkbox = getInput$1(getPopup(), 'checkbox');
	    checkbox.value = '1';
	    checkbox.checked = Boolean(params.inputValue);
	    var label = checkboxContainer.querySelector('span');
	    setInnerHtml(label, params.inputPlaceholder);
	    return checkbox;
	  };

	  /**
	   * @param {HTMLTextAreaElement} textarea
	   * @param {SweetAlertOptions} params
	   * @returns {HTMLTextAreaElement}
	   */
	  renderInputType.textarea = function (textarea, params) {
	    checkAndSetInputValue(textarea, params.inputValue);
	    setInputPlaceholder(textarea, params);
	    setInputLabel(textarea, textarea, params);

	    /**
	     * @param {HTMLElement} el
	     * @returns {number}
	     */
	    var getMargin = function getMargin(el) {
	      return parseInt(window.getComputedStyle(el).marginLeft) + parseInt(window.getComputedStyle(el).marginRight);
	    };

	    // https://github.com/sweetalert2/sweetalert2/issues/2291
	    setTimeout(function () {
	      // https://github.com/sweetalert2/sweetalert2/issues/1699
	      if ('MutationObserver' in window) {
	        var initialPopupWidth = parseInt(window.getComputedStyle(getPopup()).width);
	        var textareaResizeHandler = function textareaResizeHandler() {
	          // check if texarea is still in document (i.e. popup wasn't closed in the meantime)
	          if (!document.body.contains(textarea)) {
	            return;
	          }
	          var textareaWidth = textarea.offsetWidth + getMargin(textarea);
	          if (textareaWidth > initialPopupWidth) {
	            getPopup().style.width = "".concat(textareaWidth, "px");
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
	  var renderContent = function renderContent(instance, params) {
	    var htmlContainer = getHtmlContainer();
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
	  var renderFooter = function renderFooter(instance, params) {
	    var footer = getFooter();
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
	  var renderIcon = function renderIcon(instance, params) {
	    var innerParams = privateProps.innerParams.get(instance);
	    var icon = getIcon();
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
	      error("Unknown icon! Expected \"success\", \"error\", \"warning\", \"info\" or \"question\", got \"".concat(params.icon, "\""));
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
	  var applyStyles = function applyStyles(icon, params) {
	    for (var _i = 0, _Object$entries = Object.entries(iconTypes); _i < _Object$entries.length; _i++) {
	      var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
	        iconType = _Object$entries$_i[0],
	        iconClassName = _Object$entries$_i[1];
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
	  var adjustSuccessIconBackgroundColor = function adjustSuccessIconBackgroundColor() {
	    var popup = getPopup();
	    if (!popup) {
	      return;
	    }
	    var popupBackgroundColor = window.getComputedStyle(popup).getPropertyValue('background-color');
	    /** @type {NodeListOf<HTMLElement>} */
	    var successIconParts = popup.querySelectorAll('[class^=swal2-success-circular-line], .swal2-success-fix');
	    for (var i = 0; i < successIconParts.length; i++) {
	      successIconParts[i].style.backgroundColor = popupBackgroundColor;
	    }
	  };
	  var successIconHtml = "\n  <div class=\"swal2-success-circular-line-left\"></div>\n  <span class=\"swal2-success-line-tip\"></span> <span class=\"swal2-success-line-long\"></span>\n  <div class=\"swal2-success-ring\"></div> <div class=\"swal2-success-fix\"></div>\n  <div class=\"swal2-success-circular-line-right\"></div>\n";
	  var errorIconHtml = "\n  <span class=\"swal2-x-mark\">\n    <span class=\"swal2-x-mark-line-left\"></span>\n    <span class=\"swal2-x-mark-line-right\"></span>\n  </span>\n";

	  /**
	   * @param {HTMLElement} icon
	   * @param {SweetAlertOptions} params
	   */
	  var setContent = function setContent(icon, params) {
	    if (!params.icon && !params.iconHtml) {
	      return;
	    }
	    var oldContent = icon.innerHTML;
	    var newContent = '';
	    if (params.iconHtml) {
	      newContent = iconContent(params.iconHtml);
	    } else if (params.icon === 'success') {
	      newContent = successIconHtml;
	      oldContent = oldContent.replace(/ style=".*?"/g, ''); // undo adjustSuccessIconBackgroundColor()
	    } else if (params.icon === 'error') {
	      newContent = errorIconHtml;
	    } else if (params.icon) {
	      var defaultIconHtml = {
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
	  var setColor = function setColor(icon, params) {
	    if (!params.iconColor) {
	      return;
	    }
	    icon.style.color = params.iconColor;
	    icon.style.borderColor = params.iconColor;
	    for (var _i2 = 0, _arr = ['.swal2-success-line-tip', '.swal2-success-line-long', '.swal2-x-mark-line-left', '.swal2-x-mark-line-right']; _i2 < _arr.length; _i2++) {
	      var sel = _arr[_i2];
	      setStyle(icon, sel, 'background-color', params.iconColor);
	    }
	    setStyle(icon, '.swal2-success-ring', 'border-color', params.iconColor);
	  };

	  /**
	   * @param {string} content
	   * @returns {string}
	   */
	  var iconContent = function iconContent(content) {
	    return "<div class=\"".concat(swalClasses['icon-content'], "\">").concat(content, "</div>");
	  };

	  /**
	   * @param {SweetAlert} instance
	   * @param {SweetAlertOptions} params
	   */
	  var renderImage = function renderImage(instance, params) {
	    var image = getImage();
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

	  /**
	   * @param {SweetAlert} instance
	   * @param {SweetAlertOptions} params
	   */
	  var renderPopup = function renderPopup(instance, params) {
	    var container = getContainer();
	    var popup = getPopup();
	    if (!container || !popup) {
	      return;
	    }

	    // Width
	    // https://github.com/sweetalert2/sweetalert2/issues/2170
	    if (params.toast) {
	      applyNumericalStyle(container, 'width', params.width);
	      popup.style.width = '100%';
	      var loader = getLoader();
	      loader && popup.insertBefore(loader, getIcon());
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
	  };

	  /**
	   * @param {HTMLElement} popup
	   * @param {SweetAlertOptions} params
	   */
	  var addClasses$1 = function addClasses(popup, params) {
	    var showClass = params.showClass || {};
	    // Default Class + showClass when updating Swal.update({})
	    popup.className = "".concat(swalClasses.popup, " ").concat(isVisible$1(popup) ? showClass.popup : '');
	    if (params.toast) {
	      addClass([document.documentElement, document.body], swalClasses['toast-shown']);
	      addClass(popup, swalClasses.toast);
	    } else {
	      addClass(popup, swalClasses.modal);
	    }

	    // Custom class
	    applyCustomClass(popup, params, 'popup');
	    if (typeof params.customClass === 'string') {
	      addClass(popup, params.customClass);
	    }

	    // Icon class (#1842)
	    if (params.icon) {
	      addClass(popup, swalClasses["icon-".concat(params.icon)]);
	    }
	  };

	  /**
	   * @param {SweetAlert} instance
	   * @param {SweetAlertOptions} params
	   */
	  var renderProgressSteps = function renderProgressSteps(instance, params) {
	    var progressStepsContainer = getProgressSteps();
	    if (!progressStepsContainer) {
	      return;
	    }
	    var progressSteps = params.progressSteps,
	      currentProgressStep = params.currentProgressStep;
	    if (!progressSteps || progressSteps.length === 0 || currentProgressStep === undefined) {
	      hide(progressStepsContainer);
	      return;
	    }
	    show(progressStepsContainer);
	    progressStepsContainer.textContent = '';
	    if (currentProgressStep >= progressSteps.length) {
	      warn('Invalid currentProgressStep parameter, it should be less than progressSteps.length ' + '(currentProgressStep like JS arrays starts from 0)');
	    }
	    progressSteps.forEach(function (step, index) {
	      var stepEl = createStepElement(step);
	      progressStepsContainer.appendChild(stepEl);
	      if (index === currentProgressStep) {
	        addClass(stepEl, swalClasses['active-progress-step']);
	      }
	      if (index !== progressSteps.length - 1) {
	        var lineEl = createLineElement(params);
	        progressStepsContainer.appendChild(lineEl);
	      }
	    });
	  };

	  /**
	   * @param {string} step
	   * @returns {HTMLLIElement}
	   */
	  var createStepElement = function createStepElement(step) {
	    var stepEl = document.createElement('li');
	    addClass(stepEl, swalClasses['progress-step']);
	    setInnerHtml(stepEl, step);
	    return stepEl;
	  };

	  /**
	   * @param {SweetAlertOptions} params
	   * @returns {HTMLLIElement}
	   */
	  var createLineElement = function createLineElement(params) {
	    var lineEl = document.createElement('li');
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
	  var renderTitle = function renderTitle(instance, params) {
	    var title = getTitle();
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
	  var render = function render(instance, params) {
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
	    var popup = getPopup();
	    if (typeof params.didRender === 'function' && popup) {
	      params.didRender(popup);
	    }
	  };

	  /*
	   * Global function to determine if SweetAlert2 popup is shown
	   */
	  var isVisible = function isVisible() {
	    return isVisible$1(getPopup());
	  };

	  /*
	   * Global function to click 'Confirm' button
	   */
	  var clickConfirm = function clickConfirm() {
	    var _dom$getConfirmButton;
	    return (_dom$getConfirmButton = getConfirmButton()) === null || _dom$getConfirmButton === void 0 ? void 0 : _dom$getConfirmButton.click();
	  };

	  /*
	   * Global function to click 'Deny' button
	   */
	  var clickDeny = function clickDeny() {
	    var _dom$getDenyButton;
	    return (_dom$getDenyButton = getDenyButton()) === null || _dom$getDenyButton === void 0 ? void 0 : _dom$getDenyButton.click();
	  };

	  /*
	   * Global function to click 'Cancel' button
	   */
	  var clickCancel = function clickCancel() {
	    var _dom$getCancelButton;
	    return (_dom$getCancelButton = getCancelButton()) === null || _dom$getCancelButton === void 0 ? void 0 : _dom$getCancelButton.click();
	  };

	  /** @typedef {'cancel' | 'backdrop' | 'close' | 'esc' | 'timer'} DismissReason */

	  /** @type {Record<DismissReason, DismissReason>} */
	  var DismissReason = Object.freeze({
	    cancel: 'cancel',
	    backdrop: 'backdrop',
	    close: 'close',
	    esc: 'esc',
	    timer: 'timer'
	  });

	  /**
	   * @param {GlobalState} globalState
	   */
	  var removeKeydownHandler = function removeKeydownHandler(globalState) {
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
	  var addKeydownHandler = function addKeydownHandler(globalState, innerParams, dismissWith) {
	    removeKeydownHandler(globalState);
	    if (!innerParams.toast) {
	      globalState.keydownHandler = function (e) {
	        return keydownHandler(innerParams, e, dismissWith);
	      };
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
	  var setFocus = function setFocus(index, increment) {
	    var _dom$getPopup;
	    var focusableElements = getFocusableElements();
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
	  var arrowKeysNextButton = ['ArrowRight', 'ArrowDown'];
	  var arrowKeysPreviousButton = ['ArrowLeft', 'ArrowUp'];

	  /**
	   * @param {SweetAlertOptions} innerParams
	   * @param {KeyboardEvent} event
	   * @param {Function} dismissWith
	   */
	  var keydownHandler = function keydownHandler(innerParams, event, dismissWith) {
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
	    else if ([].concat(arrowKeysNextButton, arrowKeysPreviousButton).includes(event.key)) {
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
	  var handleEnter = function handleEnter(event, innerParams) {
	    // https://github.com/sweetalert2/sweetalert2/issues/2386
	    if (!callIfFunction(innerParams.allowEnterKey)) {
	      return;
	    }
	    var input = getInput$1(getPopup(), innerParams.input);
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
	  var handleTab = function handleTab(event) {
	    var targetElement = event.target;
	    var focusableElements = getFocusableElements();
	    var btnIndex = -1;
	    for (var i = 0; i < focusableElements.length; i++) {
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
	  var handleArrows = function handleArrows(key) {
	    var actions = getActions();
	    var confirmButton = getConfirmButton();
	    var denyButton = getDenyButton();
	    var cancelButton = getCancelButton();
	    if (!actions || !confirmButton || !denyButton || !cancelButton) {
	      return;
	    }
	    /** @type HTMLElement[] */
	    var buttons = [confirmButton, denyButton, cancelButton];
	    if (document.activeElement instanceof HTMLElement && !buttons.includes(document.activeElement)) {
	      return;
	    }
	    var sibling = arrowKeysNextButton.includes(key) ? 'nextElementSibling' : 'previousElementSibling';
	    var buttonToFocus = document.activeElement;
	    if (!buttonToFocus) {
	      return;
	    }
	    for (var i = 0; i < actions.children.length; i++) {
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
	  var handleEsc = function handleEsc(event, innerParams, dismissWith) {
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

	  var setAriaHidden = function setAriaHidden() {
	    var bodyChildren = Array.from(document.body.children);
	    bodyChildren.forEach(function (el) {
	      if (el === getContainer() || el.contains(getContainer())) {
	        return;
	      }
	      if (el.hasAttribute('aria-hidden')) {
	        el.setAttribute('data-previous-aria-hidden', el.getAttribute('aria-hidden') || '');
	      }
	      el.setAttribute('aria-hidden', 'true');
	    });
	  };
	  var unsetAriaHidden = function unsetAriaHidden() {
	    var bodyChildren = Array.from(document.body.children);
	    bodyChildren.forEach(function (el) {
	      if (el.hasAttribute('data-previous-aria-hidden')) {
	        el.setAttribute('aria-hidden', el.getAttribute('data-previous-aria-hidden') || '');
	        el.removeAttribute('data-previous-aria-hidden');
	      } else {
	        el.removeAttribute('aria-hidden');
	      }
	    });
	  };

	  // @ts-ignore
	  var isSafariOrIOS = typeof window !== 'undefined' && !!window.GestureEvent; // true for Safari desktop + all iOS browsers https://stackoverflow.com/a/70585394

	  /**
	   * Fix iOS scrolling
	   * http://stackoverflow.com/q/39626302
	   */
	  var iOSfix = function iOSfix() {
	    if (isSafariOrIOS && !hasClass(document.body, swalClasses.iosfix)) {
	      var offset = document.body.scrollTop;
	      document.body.style.top = "".concat(offset * -1, "px");
	      addClass(document.body, swalClasses.iosfix);
	      lockBodyScroll();
	    }
	  };

	  /**
	   * https://github.com/sweetalert2/sweetalert2/issues/1246
	   */
	  var lockBodyScroll = function lockBodyScroll() {
	    var container = getContainer();
	    if (!container) {
	      return;
	    }
	    /** @type {boolean} */
	    var preventTouchMove;
	    /**
	     * @param {TouchEvent} event
	     */
	    container.ontouchstart = function (event) {
	      preventTouchMove = shouldPreventTouchMove(event);
	    };
	    /**
	     * @param {TouchEvent} event
	     */
	    container.ontouchmove = function (event) {
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
	  var shouldPreventTouchMove = function shouldPreventTouchMove(event) {
	    var target = event.target;
	    var container = getContainer();
	    var htmlContainer = getHtmlContainer();
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
	  var isStylus = function isStylus(event) {
	    return event.touches && event.touches.length && event.touches[0].touchType === 'stylus';
	  };

	  /**
	   * https://github.com/sweetalert2/sweetalert2/issues/1891
	   *
	   * @param {TouchEvent} event
	   * @returns {boolean}
	   */
	  var isZoom = function isZoom(event) {
	    return event.touches && event.touches.length > 1;
	  };
	  var undoIOSfix = function undoIOSfix() {
	    if (hasClass(document.body, swalClasses.iosfix)) {
	      var offset = parseInt(document.body.style.top, 10);
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
	  var measureScrollbar = function measureScrollbar() {
	    var scrollDiv = document.createElement('div');
	    scrollDiv.className = swalClasses['scrollbar-measure'];
	    document.body.appendChild(scrollDiv);
	    var scrollbarWidth = scrollDiv.getBoundingClientRect().width - scrollDiv.clientWidth;
	    document.body.removeChild(scrollDiv);
	    return scrollbarWidth;
	  };

	  /**
	   * Remember state in cases where opening and handling a modal will fiddle with it.
	   * @type {number | null}
	   */
	  var previousBodyPadding = null;

	  /**
	   * @param {string} initialBodyOverflow
	   */
	  var replaceScrollbarWithPadding = function replaceScrollbarWithPadding(initialBodyOverflow) {
	    // for queues, do not do this more than once
	    if (previousBodyPadding !== null) {
	      return;
	    }
	    // if the body has overflow
	    if (document.body.scrollHeight > window.innerHeight || initialBodyOverflow === 'scroll' // https://github.com/sweetalert2/sweetalert2/issues/2663
	    ) {
	      // add padding so the content doesn't shift after removal of scrollbar
	      previousBodyPadding = parseInt(window.getComputedStyle(document.body).getPropertyValue('padding-right'));
	      document.body.style.paddingRight = "".concat(previousBodyPadding + measureScrollbar(), "px");
	    }
	  };
	  var undoReplaceScrollbarWithPadding = function undoReplaceScrollbarWithPadding() {
	    if (previousBodyPadding !== null) {
	      document.body.style.paddingRight = "".concat(previousBodyPadding, "px");
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
	      restoreActiveElement(returnFocus).then(function () {
	        return triggerDidCloseAndDispose(instance, didClose);
	      });
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
	    var swalPromiseResolve = privateMethods.swalPromiseResolve.get(this);
	    var didClose = triggerClosePopup(this);
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
	  var triggerClosePopup = function triggerClosePopup(instance) {
	    var popup = getPopup();
	    if (!popup) {
	      return false;
	    }
	    var innerParams = privateProps.innerParams.get(instance);
	    if (!innerParams || hasClass(popup, innerParams.hideClass.popup)) {
	      return false;
	    }
	    removeClass(popup, innerParams.showClass.popup);
	    addClass(popup, innerParams.hideClass.popup);
	    var backdrop = getContainer();
	    removeClass(backdrop, innerParams.showClass.backdrop);
	    addClass(backdrop, innerParams.hideClass.backdrop);
	    handlePopupAnimation(instance, popup, innerParams);
	    return true;
	  };

	  /**
	   * @param {any} error
	   */
	  function rejectPromise(error) {
	    var rejectPromise = privateMethods.swalPromiseReject.get(this);
	    handleAwaitingPromise(this);
	    if (rejectPromise) {
	      // Reject Swal promise
	      rejectPromise(error);
	    }
	  }

	  /**
	   * @param {SweetAlert} instance
	   */
	  var handleAwaitingPromise = function handleAwaitingPromise(instance) {
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
	  var prepareResolveValue = function prepareResolveValue(resolveValue) {
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
	  var handlePopupAnimation = function handlePopupAnimation(instance, popup, innerParams) {
	    var container = getContainer();
	    // If animation is supported, animate
	    var animationIsSupported = animationEndEvent && hasCssAnimation(popup);
	    if (typeof innerParams.willClose === 'function') {
	      innerParams.willClose(popup);
	    }
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
	  var animatePopup = function animatePopup(instance, popup, container, returnFocus, didClose) {
	    if (!animationEndEvent) {
	      return;
	    }
	    globalState.swalCloseEventFinishedCallback = removePopupAndResetState.bind(null, instance, container, returnFocus, didClose);
	    popup.addEventListener(animationEndEvent, function (e) {
	      if (e.target === popup) {
	        globalState.swalCloseEventFinishedCallback();
	        delete globalState.swalCloseEventFinishedCallback;
	      }
	    });
	  };

	  /**
	   * @param {SweetAlert} instance
	   * @param {Function} didClose
	   */
	  var triggerDidCloseAndDispose = function triggerDidCloseAndDispose(instance, didClose) {
	    setTimeout(function () {
	      if (typeof didClose === 'function') {
	        didClose.bind(instance.params)();
	      }
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
	  var showLoading = function showLoading(buttonToReplace) {
	    var popup = getPopup();
	    if (!popup) {
	      new Swal(); // eslint-disable-line no-new
	    }
	    popup = getPopup();
	    if (!popup) {
	      return;
	    }
	    var loader = getLoader();
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
	  var replaceButton = function replaceButton(popup, buttonToReplace) {
	    var actions = getActions();
	    var loader = getLoader();
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
	  var handleInputOptionsAndValue = function handleInputOptionsAndValue(instance, params) {
	    if (params.input === 'select' || params.input === 'radio') {
	      handleInputOptions(instance, params);
	    } else if (['text', 'email', 'number', 'tel', 'textarea'].some(function (i) {
	      return i === params.input;
	    }) && (hasToPromiseFn(params.inputValue) || isPromise(params.inputValue))) {
	      showLoading(getConfirmButton());
	      handleInputValue(instance, params);
	    }
	  };

	  /**
	   * @param {SweetAlert} instance
	   * @param {SweetAlertOptions} innerParams
	   * @returns {SweetAlertInputValue}
	   */
	  var getInputValue = function getInputValue(instance, innerParams) {
	    var input = instance.getInput();
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
	  var getCheckboxValue = function getCheckboxValue(input) {
	    return input.checked ? 1 : 0;
	  };

	  /**
	   * @param {HTMLInputElement} input
	   * @returns {string | null}
	   */
	  var getRadioValue = function getRadioValue(input) {
	    return input.checked ? input.value : null;
	  };

	  /**
	   * @param {HTMLInputElement} input
	   * @returns {FileList | File | null}
	   */
	  var getFileValue = function getFileValue(input) {
	    return input.files && input.files.length ? input.getAttribute('multiple') !== null ? input.files : input.files[0] : null;
	  };

	  /**
	   * @param {SweetAlert} instance
	   * @param {SweetAlertOptions} params
	   */
	  var handleInputOptions = function handleInputOptions(instance, params) {
	    var popup = getPopup();
	    if (!popup) {
	      return;
	    }
	    /**
	     * @param {Record<string, any>} inputOptions
	     */
	    var processInputOptions = function processInputOptions(inputOptions) {
	      if (params.input === 'select') {
	        populateSelectOptions(popup, formatInputOptions(inputOptions), params);
	      } else if (params.input === 'radio') {
	        populateRadioOptions(popup, formatInputOptions(inputOptions), params);
	      }
	    };
	    if (hasToPromiseFn(params.inputOptions) || isPromise(params.inputOptions)) {
	      showLoading(getConfirmButton());
	      asPromise(params.inputOptions).then(function (inputOptions) {
	        instance.hideLoading();
	        processInputOptions(inputOptions);
	      });
	    } else if (_typeof(params.inputOptions) === 'object') {
	      processInputOptions(params.inputOptions);
	    } else {
	      error("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(_typeof(params.inputOptions)));
	    }
	  };

	  /**
	   * @param {SweetAlert} instance
	   * @param {SweetAlertOptions} params
	   */
	  var handleInputValue = function handleInputValue(instance, params) {
	    var input = instance.getInput();
	    if (!input) {
	      return;
	    }
	    hide(input);
	    asPromise(params.inputValue).then(function (inputValue) {
	      input.value = params.input === 'number' ? "".concat(parseFloat(inputValue) || 0) : "".concat(inputValue);
	      show(input);
	      input.focus();
	      instance.hideLoading();
	    })["catch"](function (err) {
	      error("Error in inputValue promise: ".concat(err));
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
	    var select = getDirectChildByClass(popup, swalClasses.select);
	    if (!select) {
	      return;
	    }
	    /**
	     * @param {HTMLElement} parent
	     * @param {string} optionLabel
	     * @param {string} optionValue
	     */
	    var renderOption = function renderOption(parent, optionLabel, optionValue) {
	      var option = document.createElement('option');
	      option.value = optionValue;
	      setInnerHtml(option, optionLabel);
	      option.selected = isSelected(optionValue, params.inputValue);
	      parent.appendChild(option);
	    };
	    inputOptions.forEach(function (inputOption) {
	      var optionValue = inputOption[0];
	      var optionLabel = inputOption[1];
	      // <optgroup> spec:
	      // https://www.w3.org/TR/html401/interact/forms.html#h-17.6
	      // "...all OPTGROUP elements must be specified directly within a SELECT element (i.e., groups may not be nested)..."
	      // check whether this is a <optgroup>
	      if (Array.isArray(optionLabel)) {
	        // if it is an array, then it is an <optgroup>
	        var optgroup = document.createElement('optgroup');
	        optgroup.label = optionValue;
	        optgroup.disabled = false; // not configurable for now
	        select.appendChild(optgroup);
	        optionLabel.forEach(function (o) {
	          return renderOption(optgroup, o[1], o[0]);
	        });
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
	    var radio = getDirectChildByClass(popup, swalClasses.radio);
	    if (!radio) {
	      return;
	    }
	    inputOptions.forEach(function (inputOption) {
	      var radioValue = inputOption[0];
	      var radioLabel = inputOption[1];
	      var radioInput = document.createElement('input');
	      var radioLabelElement = document.createElement('label');
	      radioInput.type = 'radio';
	      radioInput.name = swalClasses.radio;
	      radioInput.value = radioValue;
	      if (isSelected(radioValue, params.inputValue)) {
	        radioInput.checked = true;
	      }
	      var label = document.createElement('span');
	      setInnerHtml(label, radioLabel);
	      label.className = swalClasses.label;
	      radioLabelElement.appendChild(radioInput);
	      radioLabelElement.appendChild(label);
	      radio.appendChild(radioLabelElement);
	    });
	    var radios = radio.querySelectorAll('input');
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
	  var formatInputOptions = function formatInputOptions(inputOptions) {
	    /** @type {InputOptionFlattened[]} */
	    var result = [];
	    if (inputOptions instanceof Map) {
	      inputOptions.forEach(function (value, key) {
	        var valueFormatted = value;
	        if (_typeof(valueFormatted) === 'object') {
	          // case of <optgroup>
	          valueFormatted = formatInputOptions(valueFormatted);
	        }
	        result.push([key, valueFormatted]);
	      });
	    } else {
	      Object.keys(inputOptions).forEach(function (key) {
	        var valueFormatted = inputOptions[key];
	        if (_typeof(valueFormatted) === 'object') {
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
	  var isSelected = function isSelected(optionValue, inputValue) {
	    return !!inputValue && inputValue.toString() === optionValue.toString();
	  };

	  var _this = undefined;

	  /**
	   * @param {SweetAlert} instance
	   */
	  var handleConfirmButtonClick = function handleConfirmButtonClick(instance) {
	    var innerParams = privateProps.innerParams.get(instance);
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
	  var handleDenyButtonClick = function handleDenyButtonClick(instance) {
	    var innerParams = privateProps.innerParams.get(instance);
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
	  var handleCancelButtonClick = function handleCancelButtonClick(instance, dismissWith) {
	    instance.disableButtons();
	    dismissWith(DismissReason.cancel);
	  };

	  /**
	   * @param {SweetAlert} instance
	   * @param {'confirm' | 'deny'} type
	   */
	  var handleConfirmOrDenyWithInput = function handleConfirmOrDenyWithInput(instance, type) {
	    var innerParams = privateProps.innerParams.get(instance);
	    if (!innerParams.input) {
	      error("The \"input\" parameter is needed to be set when using returnInputValueOn".concat(capitalizeFirstLetter(type)));
	      return;
	    }
	    var input = instance.getInput();
	    var inputValue = getInputValue(instance, innerParams);
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
	  var handleInputValidator = function handleInputValidator(instance, inputValue, type) {
	    var innerParams = privateProps.innerParams.get(instance);
	    instance.disableInput();
	    var validationPromise = Promise.resolve().then(function () {
	      return asPromise(innerParams.inputValidator(inputValue, innerParams.validationMessage));
	    });
	    validationPromise.then(function (validationMessage) {
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
	  var deny = function deny(instance, value) {
	    var innerParams = privateProps.innerParams.get(instance || _this);
	    if (innerParams.showLoaderOnDeny) {
	      showLoading(getDenyButton());
	    }
	    if (innerParams.preDeny) {
	      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preDeny's promise is received
	      var preDenyPromise = Promise.resolve().then(function () {
	        return asPromise(innerParams.preDeny(value, innerParams.validationMessage));
	      });
	      preDenyPromise.then(function (preDenyValue) {
	        if (preDenyValue === false) {
	          instance.hideLoading();
	          handleAwaitingPromise(instance);
	        } else {
	          instance.close({
	            isDenied: true,
	            value: typeof preDenyValue === 'undefined' ? value : preDenyValue
	          });
	        }
	      })["catch"](function (error) {
	        return rejectWith(instance || _this, error);
	      });
	    } else {
	      instance.close({
	        isDenied: true,
	        value: value
	      });
	    }
	  };

	  /**
	   * @param {SweetAlert} instance
	   * @param {any} value
	   */
	  var succeedWith = function succeedWith(instance, value) {
	    instance.close({
	      isConfirmed: true,
	      value: value
	    });
	  };

	  /**
	   *
	   * @param {SweetAlert} instance
	   * @param {string} error
	   */
	  var rejectWith = function rejectWith(instance, error) {
	    instance.rejectPromise(error);
	  };

	  /**
	   *
	   * @param {SweetAlert} instance
	   * @param {any} value
	   */
	  var confirm = function confirm(instance, value) {
	    var innerParams = privateProps.innerParams.get(instance || _this);
	    if (innerParams.showLoaderOnConfirm) {
	      showLoading();
	    }
	    if (innerParams.preConfirm) {
	      instance.resetValidationMessage();
	      instance.isAwaitingPromise = true; // Flagging the instance as awaiting a promise so it's own promise's reject/resolve methods doesn't get destroyed until the result from this preConfirm's promise is received
	      var preConfirmPromise = Promise.resolve().then(function () {
	        return asPromise(innerParams.preConfirm(value, innerParams.validationMessage));
	      });
	      preConfirmPromise.then(function (preConfirmValue) {
	        if (isVisible$1(getValidationMessage()) || preConfirmValue === false) {
	          instance.hideLoading();
	          handleAwaitingPromise(instance);
	        } else {
	          succeedWith(instance, typeof preConfirmValue === 'undefined' ? value : preConfirmValue);
	        }
	      })["catch"](function (error) {
	        return rejectWith(instance || _this, error);
	      });
	    } else {
	      succeedWith(instance, value);
	    }
	  };

	  /**
	   * Hides loader and shows back the button which was hidden by .showLoading()
	   */
	  function hideLoading() {
	    // do nothing if popup is closed
	    var innerParams = privateProps.innerParams.get(this);
	    if (!innerParams) {
	      return;
	    }
	    var domCache = privateProps.domCache.get(this);
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
	  var showRelatedButton = function showRelatedButton(domCache) {
	    var buttonToReplace = domCache.popup.getElementsByClassName(domCache.loader.getAttribute('data-button-to-replace'));
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
	    var innerParams = privateProps.innerParams.get(this);
	    var domCache = privateProps.domCache.get(this);
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
	    var domCache = privateProps.domCache.get(instance);
	    buttons.forEach(function (button) {
	      domCache[button].disabled = disabled;
	    });
	  }

	  /**
	   * @param {HTMLInputElement | null} input
	   * @param {boolean} disabled
	   */
	  function setInputDisabled(input, disabled) {
	    var popup = getPopup();
	    if (!popup || !input) {
	      return;
	    }
	    if (input.type === 'radio') {
	      /** @type {NodeListOf<HTMLInputElement>} */
	      var radios = popup.querySelectorAll("[name=\"".concat(swalClasses.radio, "\"]"));
	      for (var i = 0; i < radios.length; i++) {
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
	    var domCache = privateProps.domCache.get(this);
	    var params = privateProps.innerParams.get(this);
	    setInnerHtml(domCache.validationMessage, error);
	    domCache.validationMessage.className = swalClasses['validation-message'];
	    if (params.customClass && params.customClass.validationMessage) {
	      addClass(domCache.validationMessage, params.customClass.validationMessage);
	    }
	    show(domCache.validationMessage);
	    var input = this.getInput();
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
	    var domCache = privateProps.domCache.get(this);
	    if (domCache.validationMessage) {
	      hide(domCache.validationMessage);
	    }
	    var input = this.getInput();
	    if (input) {
	      input.removeAttribute('aria-invalid');
	      input.removeAttribute('aria-describedby');
	      removeClass(input, swalClasses.inputerror);
	    }
	  }

	  var defaultParams = {
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
	  var updatableParams = ['allowEscapeKey', 'allowOutsideClick', 'background', 'buttonsStyling', 'cancelButtonAriaLabel', 'cancelButtonColor', 'cancelButtonText', 'closeButtonAriaLabel', 'closeButtonHtml', 'color', 'confirmButtonAriaLabel', 'confirmButtonColor', 'confirmButtonText', 'currentProgressStep', 'customClass', 'denyButtonAriaLabel', 'denyButtonColor', 'denyButtonText', 'didClose', 'didDestroy', 'footer', 'hideClass', 'html', 'icon', 'iconColor', 'iconHtml', 'imageAlt', 'imageHeight', 'imageUrl', 'imageWidth', 'preConfirm', 'preDeny', 'progressSteps', 'returnFocus', 'reverseButtons', 'showCancelButton', 'showCloseButton', 'showConfirmButton', 'showDenyButton', 'text', 'title', 'titleText', 'willClose'];

	  /** @type {Record<string, string>} */
	  var deprecatedParams = {};
	  var toastIncompatibleParams = ['allowOutsideClick', 'allowEnterKey', 'backdrop', 'focusConfirm', 'focusDeny', 'focusCancel', 'returnFocus', 'heightAuto', 'keydownListenerCapture'];

	  /**
	   * Is valid parameter
	   *
	   * @param {string} paramName
	   * @returns {boolean}
	   */
	  var isValidParameter = function isValidParameter(paramName) {
	    return Object.prototype.hasOwnProperty.call(defaultParams, paramName);
	  };

	  /**
	   * Is valid parameter for Swal.update() method
	   *
	   * @param {string} paramName
	   * @returns {boolean}
	   */
	  var isUpdatableParameter = function isUpdatableParameter(paramName) {
	    return updatableParams.indexOf(paramName) !== -1;
	  };

	  /**
	   * Is deprecated parameter
	   *
	   * @param {string} paramName
	   * @returns {string | undefined}
	   */
	  var isDeprecatedParameter = function isDeprecatedParameter(paramName) {
	    return deprecatedParams[paramName];
	  };

	  /**
	   * @param {string} param
	   */
	  var checkIfParamIsValid = function checkIfParamIsValid(param) {
	    if (!isValidParameter(param)) {
	      warn("Unknown parameter \"".concat(param, "\""));
	    }
	  };

	  /**
	   * @param {string} param
	   */
	  var checkIfToastParamIsValid = function checkIfToastParamIsValid(param) {
	    if (toastIncompatibleParams.includes(param)) {
	      warn("The parameter \"".concat(param, "\" is incompatible with toasts"));
	    }
	  };

	  /**
	   * @param {string} param
	   */
	  var checkIfParamIsDeprecated = function checkIfParamIsDeprecated(param) {
	    var isDeprecated = isDeprecatedParameter(param);
	    if (isDeprecated) {
	      warnAboutDeprecation(param, isDeprecated);
	    }
	  };

	  /**
	   * Show relevant warnings for given params
	   *
	   * @param {SweetAlertOptions} params
	   */
	  var showWarningsForParams = function showWarningsForParams(params) {
	    if (params.backdrop === false && params.allowOutsideClick) {
	      warn('"allowOutsideClick" parameter requires `backdrop` parameter to be set to `true`');
	    }
	    for (var param in params) {
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
	    var popup = getPopup();
	    var innerParams = privateProps.innerParams.get(this);
	    if (!popup || hasClass(popup, innerParams.hideClass.popup)) {
	      warn("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");
	      return;
	    }
	    var validUpdatableParams = filterValidParams(params);
	    var updatedParams = Object.assign({}, innerParams, validUpdatableParams);
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
	  var filterValidParams = function filterValidParams(params) {
	    var validUpdatableParams = {};
	    Object.keys(params).forEach(function (param) {
	      if (isUpdatableParameter(param)) {
	        validUpdatableParams[param] = params[param];
	      } else {
	        warn("Invalid parameter to update: ".concat(param));
	      }
	    });
	    return validUpdatableParams;
	  };

	  /**
	   * Dispose the current SweetAlert2 instance
	   */
	  function _destroy() {
	    var domCache = privateProps.domCache.get(this);
	    var innerParams = privateProps.innerParams.get(this);
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
	    disposeSwal(this);
	  }

	  /**
	   * @param {SweetAlert} instance
	   */
	  var disposeSwal = function disposeSwal(instance) {
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
	  var disposeWeakMaps = function disposeWeakMaps(instance) {
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
	  var unsetWeakMaps = function unsetWeakMaps(obj, instance) {
	    for (var i in obj) {
	      obj[i]["delete"](instance);
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
	  var handlePopupClick = function handlePopupClick(innerParams, domCache, dismissWith) {
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
	  var handleToastClick = function handleToastClick(innerParams, domCache, dismissWith) {
	    // Closing toast by internal click
	    domCache.popup.onclick = function () {
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
	  var isAnyButtonShown = function isAnyButtonShown(innerParams) {
	    return !!(innerParams.showConfirmButton || innerParams.showDenyButton || innerParams.showCancelButton || innerParams.showCloseButton);
	  };
	  var ignoreOutsideClick = false;

	  /**
	   * @param {DomCache} domCache
	   */
	  var handleModalMousedown = function handleModalMousedown(domCache) {
	    domCache.popup.onmousedown = function () {
	      domCache.container.onmouseup = function (e) {
	        domCache.container.onmouseup = function () {};
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
	  var handleContainerMousedown = function handleContainerMousedown(domCache) {
	    domCache.container.onmousedown = function () {
	      domCache.popup.onmouseup = function (e) {
	        domCache.popup.onmouseup = function () {};
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
	  var handleModalClick = function handleModalClick(innerParams, domCache, dismissWith) {
	    domCache.container.onclick = function (e) {
	      if (ignoreOutsideClick) {
	        ignoreOutsideClick = false;
	        return;
	      }
	      if (e.target === domCache.container && callIfFunction(innerParams.allowOutsideClick)) {
	        dismissWith(DismissReason.backdrop);
	      }
	    };
	  };

	  var isJqueryElement = function isJqueryElement(elem) {
	    return _typeof(elem) === 'object' && elem.jquery;
	  };
	  var isElement = function isElement(elem) {
	    return elem instanceof Element || isJqueryElement(elem);
	  };
	  var argsToParams = function argsToParams(args) {
	    var params = {};
	    if (_typeof(args[0]) === 'object' && !isElement(args[0])) {
	      Object.assign(params, args[0]);
	    } else {
	      ['title', 'html', 'icon'].forEach(function (name, index) {
	        var arg = args[index];
	        if (typeof arg === 'string' || isElement(arg)) {
	          params[name] = arg;
	        } else if (arg !== undefined) {
	          error("Unexpected type of ".concat(name, "! Expected \"string\" or \"Element\", got ").concat(_typeof(arg)));
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
	    var Swal = this; // eslint-disable-line @typescript-eslint/no-this-alias
	    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	      args[_key] = arguments[_key];
	    }
	    return _construct(Swal, args);
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
	    var MixinSwal = /*#__PURE__*/function (_this) {
	      _inherits(MixinSwal, _this);
	      function MixinSwal() {
	        _classCallCheck(this, MixinSwal);
	        return _callSuper(this, MixinSwal, arguments);
	      }
	      _createClass(MixinSwal, [{
	        key: "_main",
	        value: function _main(params, priorityMixinParams) {
	          return _get(_getPrototypeOf(MixinSwal.prototype), "_main", this).call(this, params, Object.assign({}, mixinParams, priorityMixinParams));
	        }
	      }]);
	      return MixinSwal;
	    }(this); // @ts-ignore
	    return MixinSwal;
	  }

	  /**
	   * If `timer` parameter is set, returns number of milliseconds of timer remained.
	   * Otherwise, returns undefined.
	   *
	   * @returns {number | undefined}
	   */
	  var getTimerLeft = function getTimerLeft() {
	    return globalState.timeout && globalState.timeout.getTimerLeft();
	  };

	  /**
	   * Stop timer. Returns number of milliseconds of timer remained.
	   * If `timer` parameter isn't set, returns undefined.
	   *
	   * @returns {number | undefined}
	   */
	  var stopTimer = function stopTimer() {
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
	  var resumeTimer = function resumeTimer() {
	    if (globalState.timeout) {
	      var remaining = globalState.timeout.start();
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
	  var toggleTimer = function toggleTimer() {
	    var timer = globalState.timeout;
	    return timer && (timer.running ? stopTimer() : resumeTimer());
	  };

	  /**
	   * Increase timer. Returns number of milliseconds of an updated timer.
	   * If `timer` parameter isn't set, returns undefined.
	   *
	   * @param {number} ms
	   * @returns {number | undefined}
	   */
	  var increaseTimer = function increaseTimer(ms) {
	    if (globalState.timeout) {
	      var remaining = globalState.timeout.increase(ms);
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
	  var isTimerRunning = function isTimerRunning() {
	    return !!(globalState.timeout && globalState.timeout.isRunning());
	  };

	  var bodyClickListenerAdded = false;
	  var clickHandlers = {};

	  /**
	   * @param {string} attr
	   */
	  function bindClickHandler() {
	    var attr = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 'data-swal-template';
	    clickHandlers[attr] = this;
	    if (!bodyClickListenerAdded) {
	      document.body.addEventListener('click', bodyClickListener);
	      bodyClickListenerAdded = true;
	    }
	  }
	  var bodyClickListener = function bodyClickListener(event) {
	    for (var el = event.target; el && el !== document; el = el.parentNode) {
	      for (var attr in clickHandlers) {
	        var template = el.getAttribute(attr);
	        if (template) {
	          clickHandlers[attr].fire({
	            template: template
	          });
	          return;
	        }
	      }
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
	    resumeTimer: resumeTimer,
	    showLoading: showLoading,
	    stopTimer: stopTimer,
	    toggleTimer: toggleTimer
	  });

	  var Timer = /*#__PURE__*/function () {
	    /**
	     * @param {Function} callback
	     * @param {number} delay
	     */
	    function Timer(callback, delay) {
	      _classCallCheck(this, Timer);
	      this.callback = callback;
	      this.remaining = delay;
	      this.running = false;
	      this.start();
	    }

	    /**
	     * @returns {number}
	     */
	    _createClass(Timer, [{
	      key: "start",
	      value: function start() {
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
	    }, {
	      key: "stop",
	      value: function stop() {
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
	    }, {
	      key: "increase",
	      value: function increase(n) {
	        var running = this.running;
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
	    }, {
	      key: "getTimerLeft",
	      value: function getTimerLeft() {
	        if (this.running) {
	          this.stop();
	          this.start();
	        }
	        return this.remaining;
	      }

	      /**
	       * @returns {boolean}
	       */
	    }, {
	      key: "isRunning",
	      value: function isRunning() {
	        return this.running;
	      }
	    }]);
	    return Timer;
	  }();

	  var swalStringParams = ['swal-title', 'swal-html', 'swal-footer'];

	  /**
	   * @param {SweetAlertOptions} params
	   * @returns {SweetAlertOptions}
	   */
	  var getTemplateParams = function getTemplateParams(params) {
	    /** @type {HTMLTemplateElement} */
	    var template = typeof params.template === 'string' ? document.querySelector(params.template) : params.template;
	    if (!template) {
	      return {};
	    }
	    /** @type {DocumentFragment} */
	    var templateContent = template.content;
	    showWarningsForElements(templateContent);
	    var result = Object.assign(getSwalParams(templateContent), getSwalFunctionParams(templateContent), getSwalButtons(templateContent), getSwalImage(templateContent), getSwalIcon(templateContent), getSwalInput(templateContent), getSwalStringParams(templateContent, swalStringParams));
	    return result;
	  };

	  /**
	   * @param {DocumentFragment} templateContent
	   * @returns {SweetAlertOptions}
	   */
	  var getSwalParams = function getSwalParams(templateContent) {
	    var result = {};
	    /** @type {HTMLElement[]} */
	    var swalParams = Array.from(templateContent.querySelectorAll('swal-param'));
	    swalParams.forEach(function (param) {
	      showWarningsForAttributes(param, ['name', 'value']);
	      var paramName = param.getAttribute('name');
	      var value = param.getAttribute('value');
	      if (typeof defaultParams[paramName] === 'boolean') {
	        result[paramName] = value !== 'false';
	      } else if (_typeof(defaultParams[paramName]) === 'object') {
	        result[paramName] = JSON.parse(value);
	      } else {
	        result[paramName] = value;
	      }
	    });
	    return result;
	  };

	  /**
	   * @param {DocumentFragment} templateContent
	   * @returns {SweetAlertOptions}
	   */
	  var getSwalFunctionParams = function getSwalFunctionParams(templateContent) {
	    var result = {};
	    /** @type {HTMLElement[]} */
	    var swalFunctions = Array.from(templateContent.querySelectorAll('swal-function-param'));
	    swalFunctions.forEach(function (param) {
	      var paramName = param.getAttribute('name');
	      var value = param.getAttribute('value');
	      result[paramName] = new Function("return ".concat(value))();
	    });
	    return result;
	  };

	  /**
	   * @param {DocumentFragment} templateContent
	   * @returns {SweetAlertOptions}
	   */
	  var getSwalButtons = function getSwalButtons(templateContent) {
	    var result = {};
	    /** @type {HTMLElement[]} */
	    var swalButtons = Array.from(templateContent.querySelectorAll('swal-button'));
	    swalButtons.forEach(function (button) {
	      showWarningsForAttributes(button, ['type', 'color', 'aria-label']);
	      var type = button.getAttribute('type');
	      result["".concat(type, "ButtonText")] = button.innerHTML;
	      result["show".concat(capitalizeFirstLetter(type), "Button")] = true;
	      if (button.hasAttribute('color')) {
	        result["".concat(type, "ButtonColor")] = button.getAttribute('color');
	      }
	      if (button.hasAttribute('aria-label')) {
	        result["".concat(type, "ButtonAriaLabel")] = button.getAttribute('aria-label');
	      }
	    });
	    return result;
	  };

	  /**
	   * @param {DocumentFragment} templateContent
	   * @returns {SweetAlertOptions}
	   */
	  var getSwalImage = function getSwalImage(templateContent) {
	    var result = {};
	    /** @type {HTMLElement} */
	    var image = templateContent.querySelector('swal-image');
	    if (image) {
	      showWarningsForAttributes(image, ['src', 'width', 'height', 'alt']);
	      if (image.hasAttribute('src')) {
	        result.imageUrl = image.getAttribute('src');
	      }
	      if (image.hasAttribute('width')) {
	        result.imageWidth = image.getAttribute('width');
	      }
	      if (image.hasAttribute('height')) {
	        result.imageHeight = image.getAttribute('height');
	      }
	      if (image.hasAttribute('alt')) {
	        result.imageAlt = image.getAttribute('alt');
	      }
	    }
	    return result;
	  };

	  /**
	   * @param {DocumentFragment} templateContent
	   * @returns {SweetAlertOptions}
	   */
	  var getSwalIcon = function getSwalIcon(templateContent) {
	    var result = {};
	    /** @type {HTMLElement} */
	    var icon = templateContent.querySelector('swal-icon');
	    if (icon) {
	      showWarningsForAttributes(icon, ['type', 'color']);
	      if (icon.hasAttribute('type')) {
	        /** @type {SweetAlertIcon} */
	        // @ts-ignore
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
	   * @returns {SweetAlertOptions}
	   */
	  var getSwalInput = function getSwalInput(templateContent) {
	    var result = {};
	    /** @type {HTMLElement} */
	    var input = templateContent.querySelector('swal-input');
	    if (input) {
	      showWarningsForAttributes(input, ['type', 'label', 'placeholder', 'value']);
	      /** @type {SweetAlertInput} */
	      // @ts-ignore
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
	    var inputOptions = Array.from(templateContent.querySelectorAll('swal-input-option'));
	    if (inputOptions.length) {
	      result.inputOptions = {};
	      inputOptions.forEach(function (option) {
	        showWarningsForAttributes(option, ['value']);
	        var optionValue = option.getAttribute('value');
	        var optionName = option.innerHTML;
	        result.inputOptions[optionValue] = optionName;
	      });
	    }
	    return result;
	  };

	  /**
	   * @param {DocumentFragment} templateContent
	   * @param {string[]} paramNames
	   * @returns {SweetAlertOptions}
	   */
	  var getSwalStringParams = function getSwalStringParams(templateContent, paramNames) {
	    var result = {};
	    for (var i in paramNames) {
	      var paramName = paramNames[i];
	      /** @type {HTMLElement} */
	      var tag = templateContent.querySelector(paramName);
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
	  var showWarningsForElements = function showWarningsForElements(templateContent) {
	    var allowedElements = swalStringParams.concat(['swal-param', 'swal-function-param', 'swal-button', 'swal-image', 'swal-icon', 'swal-input', 'swal-input-option']);
	    Array.from(templateContent.children).forEach(function (el) {
	      var tagName = el.tagName.toLowerCase();
	      if (!allowedElements.includes(tagName)) {
	        warn("Unrecognized element <".concat(tagName, ">"));
	      }
	    });
	  };

	  /**
	   * @param {HTMLElement} el
	   * @param {string[]} allowedAttributes
	   */
	  var showWarningsForAttributes = function showWarningsForAttributes(el, allowedAttributes) {
	    Array.from(el.attributes).forEach(function (attribute) {
	      if (allowedAttributes.indexOf(attribute.name) === -1) {
	        warn(["Unrecognized attribute \"".concat(attribute.name, "\" on <").concat(el.tagName.toLowerCase(), ">."), "".concat(allowedAttributes.length ? "Allowed attributes are: ".concat(allowedAttributes.join(', ')) : 'To set the value, use HTML within the element.')]);
	      }
	    });
	  };

	  var SHOW_CLASS_TIMEOUT = 10;

	  /**
	   * Open popup, add necessary classes and styles, fix scrollbar
	   *
	   * @param {SweetAlertOptions} params
	   */
	  var openPopup = function openPopup(params) {
	    var container = getContainer();
	    var popup = getPopup();
	    if (typeof params.willOpen === 'function') {
	      params.willOpen(popup);
	    }
	    var bodyStyles = window.getComputedStyle(document.body);
	    var initialBodyOverflow = bodyStyles.overflowY;
	    addClasses(container, popup, params);

	    // scrolling is 'hidden' until animation is done, after that 'auto'
	    setTimeout(function () {
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
	      setTimeout(function () {
	        return params.didOpen(popup);
	      });
	    }
	    removeClass(container, swalClasses['no-transition']);
	  };

	  /**
	   * @param {AnimationEvent} event
	   */
	  var swalOpenAnimationFinished = function swalOpenAnimationFinished(event) {
	    var popup = getPopup();
	    if (event.target !== popup || !animationEndEvent) {
	      return;
	    }
	    var container = getContainer();
	    popup.removeEventListener(animationEndEvent, swalOpenAnimationFinished);
	    container.style.overflowY = 'auto';
	  };

	  /**
	   * @param {HTMLElement} container
	   * @param {HTMLElement} popup
	   */
	  var setScrollingVisibility = function setScrollingVisibility(container, popup) {
	    if (animationEndEvent && hasCssAnimation(popup)) {
	      container.style.overflowY = 'hidden';
	      popup.addEventListener(animationEndEvent, swalOpenAnimationFinished);
	    } else {
	      container.style.overflowY = 'auto';
	    }
	  };

	  /**
	   * @param {HTMLElement} container
	   * @param {boolean} scrollbarPadding
	   * @param {string} initialBodyOverflow
	   */
	  var fixScrollContainer = function fixScrollContainer(container, scrollbarPadding, initialBodyOverflow) {
	    iOSfix();
	    if (scrollbarPadding && initialBodyOverflow !== 'hidden') {
	      replaceScrollbarWithPadding(initialBodyOverflow);
	    }

	    // sweetalert2/issues/1247
	    setTimeout(function () {
	      container.scrollTop = 0;
	    });
	  };

	  /**
	   * @param {HTMLElement} container
	   * @param {HTMLElement} popup
	   * @param {SweetAlertOptions} params
	   */
	  var addClasses = function addClasses(container, popup, params) {
	    addClass(container, params.showClass.backdrop);
	    if (params.animation) {
	      // this workaround with opacity is needed for https://github.com/sweetalert2/sweetalert2/issues/2059
	      popup.style.setProperty('opacity', '0', 'important');
	      show(popup, 'grid');
	      setTimeout(function () {
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
	    email: function email(string, validationMessage) {
	      return /^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}$/.test(string) ? Promise.resolve() : Promise.resolve(validationMessage || 'Invalid email address');
	    },
	    /**
	     * @param {string} string
	     * @param {string} [validationMessage]
	     * @returns {Promise<string | void>}
	     */
	    url: function url(string, validationMessage) {
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
	  var currentInstance;
	  var _promise = /*#__PURE__*/new WeakMap();
	  var SweetAlert = /*#__PURE__*/function () {
	    /**
	     * @param {...any} args
	     * @this {SweetAlert}
	     */
	    function SweetAlert() {
	      _classCallCheck(this, SweetAlert);
	      /**
	       * @type {Promise<SweetAlertResult>}
	       */
	      _classPrivateFieldInitSpec(this, _promise, {
	        writable: true,
	        value: void 0
	      });
	      // Prevent run in Node env
	      if (typeof window === 'undefined') {
	        return;
	      }
	      currentInstance = this;

	      // @ts-ignore
	      for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
	        args[_key] = arguments[_key];
	      }
	      var outerParams = Object.freeze(this.constructor.argsToParams(args));

	      /** @type {Readonly<SweetAlertOptions>} */
	      this.params = outerParams;

	      /** @type {boolean} */
	      this.isAwaitingPromise = false;
	      _classPrivateFieldSet(this, _promise, this._main(currentInstance.params));
	    }
	    _createClass(SweetAlert, [{
	      key: "_main",
	      value: function _main(userParams) {
	        var mixinParams = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
	        showWarningsForParams(Object.assign({}, mixinParams, userParams));
	        if (globalState.currentInstance) {
	          var swalPromiseResolve = privateMethods.swalPromiseResolve.get(globalState.currentInstance);
	          var isAwaitingPromise = globalState.currentInstance.isAwaitingPromise;
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
	        var innerParams = prepareParams(userParams, mixinParams);
	        setParameters(innerParams);
	        Object.freeze(innerParams);

	        // clear the previous timer
	        if (globalState.timeout) {
	          globalState.timeout.stop();
	          delete globalState.timeout;
	        }

	        // clear the restore focus timeout
	        clearTimeout(globalState.restoreFocusTimeout);
	        var domCache = populateDomCache(currentInstance);
	        render(currentInstance, innerParams);
	        privateProps.innerParams.set(currentInstance, innerParams);
	        return swalPromise(currentInstance, domCache, innerParams);
	      }

	      // `catch` cannot be the name of a module export, so we define our thenable methods here instead
	    }, {
	      key: "then",
	      value: function then(onFulfilled) {
	        return _classPrivateFieldGet(this, _promise).then(onFulfilled);
	      }
	    }, {
	      key: "finally",
	      value: function _finally(onFinally) {
	        return _classPrivateFieldGet(this, _promise)["finally"](onFinally);
	      }
	    }]);
	    return SweetAlert;
	  }();

	  /**
	   * @param {SweetAlert} instance
	   * @param {DomCache} domCache
	   * @param {SweetAlertOptions} innerParams
	   * @returns {Promise}
	   */
	  var swalPromise = function swalPromise(instance, domCache, innerParams) {
	    return new Promise(function (resolve, reject) {
	      // functions to handle all closings/dismissals
	      /**
	       * @param {DismissReason} dismiss
	       */
	      var dismissWith = function dismissWith(dismiss) {
	        instance.close({
	          isDismissed: true,
	          dismiss: dismiss
	        });
	      };
	      privateMethods.swalPromiseResolve.set(instance, resolve);
	      privateMethods.swalPromiseReject.set(instance, reject);
	      domCache.confirmButton.onclick = function () {
	        handleConfirmButtonClick(instance);
	      };
	      domCache.denyButton.onclick = function () {
	        handleDenyButtonClick(instance);
	      };
	      domCache.cancelButton.onclick = function () {
	        handleCancelButtonClick(instance, dismissWith);
	      };
	      domCache.closeButton.onclick = function () {
	        dismissWith(DismissReason.close);
	      };
	      handlePopupClick(innerParams, domCache, dismissWith);
	      addKeydownHandler(globalState, innerParams, dismissWith);
	      handleInputOptionsAndValue(instance, innerParams);
	      openPopup(innerParams);
	      setupTimer(globalState, innerParams, dismissWith);
	      initFocus(domCache, innerParams);

	      // Scroll container to top on open (#1247, #1946)
	      setTimeout(function () {
	        domCache.container.scrollTop = 0;
	      });
	    });
	  };

	  /**
	   * @param {SweetAlertOptions} userParams
	   * @param {SweetAlertOptions} mixinParams
	   * @returns {SweetAlertOptions}
	   */
	  var prepareParams = function prepareParams(userParams, mixinParams) {
	    var templateParams = getTemplateParams(userParams);
	    var params = Object.assign({}, defaultParams, mixinParams, templateParams, userParams); // precedence is described in #2131
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
	  var populateDomCache = function populateDomCache(instance) {
	    var domCache = {
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
	  var setupTimer = function setupTimer(globalState, innerParams, dismissWith) {
	    var timerProgressBar = getTimerProgressBar();
	    hide(timerProgressBar);
	    if (innerParams.timer) {
	      globalState.timeout = new Timer(function () {
	        dismissWith('timer');
	        delete globalState.timeout;
	      }, innerParams.timer);
	      if (innerParams.timerProgressBar) {
	        show(timerProgressBar);
	        applyCustomClass(timerProgressBar, innerParams, 'timerProgressBar');
	        setTimeout(function () {
	          if (globalState.timeout && globalState.timeout.running) {
	            // timer can be already stopped or unset at this point
	            animateTimerProgressBar(innerParams.timer);
	          }
	        });
	      }
	    }
	  };

	  /**
	   * @param {DomCache} domCache
	   * @param {SweetAlertOptions} innerParams
	   */
	  var initFocus = function initFocus(domCache, innerParams) {
	    if (innerParams.toast) {
	      return;
	    }
	    if (!callIfFunction(innerParams.allowEnterKey)) {
	      blurActiveElement();
	      return;
	    }
	    if (!focusButton(domCache, innerParams)) {
	      setFocus(-1, 1);
	    }
	  };

	  /**
	   * @param {DomCache} domCache
	   * @param {SweetAlertOptions} innerParams
	   * @returns {boolean}
	   */
	  var focusButton = function focusButton(domCache, innerParams) {
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
	  var blurActiveElement = function blurActiveElement() {
	    if (document.activeElement instanceof HTMLElement && typeof document.activeElement.blur === 'function') {
	      document.activeElement.blur();
	    }
	  };

	  // Dear russian users visiting russian sites. Let's have fun.
	  if (typeof window !== 'undefined' && /^ru\b/.test(navigator.language) && location.host.match(/\.(ru|su|by|xn--p1ai)$/)) {
	    var now = new Date();
	    var initiationDate = localStorage.getItem('swal-initiation');
	    if (!initiationDate) {
	      localStorage.setItem('swal-initiation', "".concat(now));
	    } else if ((now.getTime() - Date.parse(initiationDate)) / (1000 * 60 * 60 * 24) > 3) {
	      setTimeout(function () {
	        document.body.style.pointerEvents = 'none';
	        var ukrainianAnthem = document.createElement('audio');
	        ukrainianAnthem.src = 'https://flag-gimn.ru/wp-content/uploads/2021/09/Ukraina.mp3';
	        ukrainianAnthem.loop = true;
	        document.body.appendChild(ukrainianAnthem);
	        setTimeout(function () {
	          ukrainianAnthem.play()["catch"](function () {
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
	  Object.keys(instanceMethods).forEach(function (key) {
	    /**
	     * @param {...any} args
	     * @returns {any | undefined}
	     */
	    SweetAlert[key] = function () {
	      if (currentInstance && currentInstance[key]) {
	        var _currentInstance;
	        return (_currentInstance = currentInstance)[key].apply(_currentInstance, arguments);
	      }
	      return null;
	    };
	  });
	  SweetAlert.DismissReason = DismissReason;
	  SweetAlert.version = '11.10.5';

	  var Swal = SweetAlert;
	  // @ts-ignore
	  Swal["default"] = Swal;

	  return Swal;

	}));
	if (typeof commonjsGlobal !== 'undefined' && commonjsGlobal.Sweetalert2){commonjsGlobal.swal = commonjsGlobal.sweetAlert = commonjsGlobal.Swal = commonjsGlobal.SweetAlert = commonjsGlobal.Sweetalert2;}
	"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t;}catch(e){n.innerText=t;}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4 !important;grid-row:1/4 !important;grid-template-columns:min-content auto min-content;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;overflow:initial;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:bold}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.8em;left:-0.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{animation:swal2-toast-hide .1s forwards}div:where(.swal2-container){display:grid;position:fixed;z-index:1060;inset:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(min-content, auto) minmax(min-content, auto) minmax(min-content, auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}div:where(.swal2-container).swal2-backdrop-show,div:where(.swal2-container).swal2-noanimation{background:rgba(0,0,0,.4)}div:where(.swal2-container).swal2-backdrop-hide{background:rgba(0,0,0,0) !important}div:where(.swal2-container).swal2-top-start,div:where(.swal2-container).swal2-center-start,div:where(.swal2-container).swal2-bottom-start{grid-template-columns:minmax(0, 1fr) auto auto}div:where(.swal2-container).swal2-top,div:where(.swal2-container).swal2-center,div:where(.swal2-container).swal2-bottom{grid-template-columns:auto minmax(0, 1fr) auto}div:where(.swal2-container).swal2-top-end,div:where(.swal2-container).swal2-center-end,div:where(.swal2-container).swal2-bottom-end{grid-template-columns:auto auto minmax(0, 1fr)}div:where(.swal2-container).swal2-top-start>.swal2-popup{align-self:start}div:where(.swal2-container).swal2-top>.swal2-popup{grid-column:2;place-self:start center}div:where(.swal2-container).swal2-top-end>.swal2-popup,div:where(.swal2-container).swal2-top-right>.swal2-popup{grid-column:3;place-self:start end}div:where(.swal2-container).swal2-center-start>.swal2-popup,div:where(.swal2-container).swal2-center-left>.swal2-popup{grid-row:2;align-self:center}div:where(.swal2-container).swal2-center>.swal2-popup{grid-column:2;grid-row:2;place-self:center center}div:where(.swal2-container).swal2-center-end>.swal2-popup,div:where(.swal2-container).swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;place-self:center end}div:where(.swal2-container).swal2-bottom-start>.swal2-popup,div:where(.swal2-container).swal2-bottom-left>.swal2-popup{grid-column:1;grid-row:3;align-self:end}div:where(.swal2-container).swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;place-self:end center}div:where(.swal2-container).swal2-bottom-end>.swal2-popup,div:where(.swal2-container).swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;place-self:end end}div:where(.swal2-container).swal2-grow-row>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-column:1/4;width:100%}div:where(.swal2-container).swal2-grow-column>.swal2-popup,div:where(.swal2-container).swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}div:where(.swal2-container).swal2-no-transition{transition:none !important}div:where(.swal2-container) div:where(.swal2-popup){display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0, 100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}div:where(.swal2-container) div:where(.swal2-popup):focus{outline:none}div:where(.swal2-container) div:where(.swal2-popup).swal2-loading{overflow-y:hidden}div:where(.swal2-container) h2:where(.swal2-title){position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:inherit;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}div:where(.swal2-container) div:where(.swal2-actions){display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.1))}div:where(.swal2-container) div:where(.swal2-actions):not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2))}div:where(.swal2-container) div:where(.swal2-loader){display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 rgba(0,0,0,0) #2778c4 rgba(0,0,0,0)}div:where(.swal2-container) button:where(.swal2-styled){margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px rgba(0,0,0,0);font-weight:500}div:where(.swal2-container) button:where(.swal2-styled):not([disabled]){cursor:pointer}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7066e0;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-confirm:focus{box-shadow:0 0 0 3px rgba(112,102,224,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#dc3741;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-deny:focus{box-shadow:0 0 0 3px rgba(220,55,65,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7881;color:#fff;font-size:1em}div:where(.swal2-container) button:where(.swal2-styled).swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,120,129,.5)}div:where(.swal2-container) button:where(.swal2-styled).swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-styled):focus{outline:none}div:where(.swal2-container) button:where(.swal2-styled)::-moz-focus-inner{border:0}div:where(.swal2-container) div:where(.swal2-footer){margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:inherit;font-size:1em;text-align:center}div:where(.swal2-container) .swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto !important;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}div:where(.swal2-container) div:where(.swal2-timer-progress-bar){width:100%;height:.25em;background:rgba(0,0,0,.2)}div:where(.swal2-container) img:where(.swal2-image){max-width:100%;margin:2em auto 1em}div:where(.swal2-container) button:where(.swal2-close){z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:rgba(0,0,0,0);color:#ccc;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}div:where(.swal2-container) button:where(.swal2-close):hover{transform:none;background:rgba(0,0,0,0);color:#f27474}div:where(.swal2-container) button:where(.swal2-close):focus{outline:none;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) button:where(.swal2-close)::-moz-focus-inner{border:0}div:where(.swal2-container) .swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:inherit;font-size:1.125em;font-weight:normal;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea),div:where(.swal2-container) select:where(.swal2-select),div:where(.swal2-container) div:where(.swal2-radio),div:where(.swal2-container) label:where(.swal2-checkbox){margin:1em 2em 3px}div:where(.swal2-container) input:where(.swal2-input),div:where(.swal2-container) input:where(.swal2-file),div:where(.swal2-container) textarea:where(.swal2-textarea){box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:rgba(0,0,0,0);box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) input:where(.swal2-input).swal2-inputerror,div:where(.swal2-container) input:where(.swal2-file).swal2-inputerror,div:where(.swal2-container) textarea:where(.swal2-textarea).swal2-inputerror{border-color:#f27474 !important;box-shadow:0 0 2px #f27474 !important}div:where(.swal2-container) input:where(.swal2-input):focus,div:where(.swal2-container) input:where(.swal2-file):focus,div:where(.swal2-container) textarea:where(.swal2-textarea):focus{border:1px solid #b4dbed;outline:none;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}div:where(.swal2-container) input:where(.swal2-input)::placeholder,div:where(.swal2-container) input:where(.swal2-file)::placeholder,div:where(.swal2-container) textarea:where(.swal2-textarea)::placeholder{color:#ccc}div:where(.swal2-container) .swal2-range{margin:1em 2em 3px;background:#fff}div:where(.swal2-container) .swal2-range input{width:80%}div:where(.swal2-container) .swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}div:where(.swal2-container) .swal2-range input,div:where(.swal2-container) .swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}div:where(.swal2-container) .swal2-input{height:2.625em;padding:0 .75em}div:where(.swal2-container) .swal2-file{width:75%;margin-right:auto;margin-left:auto;background:rgba(0,0,0,0);font-size:1.125em}div:where(.swal2-container) .swal2-textarea{height:6.75em;padding:.75em}div:where(.swal2-container) .swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:rgba(0,0,0,0);color:inherit;font-size:1.125em}div:where(.swal2-container) .swal2-radio,div:where(.swal2-container) .swal2-checkbox{align-items:center;justify-content:center;background:#fff;color:inherit}div:where(.swal2-container) .swal2-radio label,div:where(.swal2-container) .swal2-checkbox label{margin:0 .6em;font-size:1.125em}div:where(.swal2-container) .swal2-radio input,div:where(.swal2-container) .swal2-checkbox input{flex-shrink:0;margin:0 .4em}div:where(.swal2-container) label:where(.swal2-input-label){display:flex;justify-content:center;margin:1em auto 0}div:where(.swal2-container) div:where(.swal2-validation-message){align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}div:where(.swal2-container) div:where(.swal2-validation-message)::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}div:where(.swal2-container) .swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:rgba(0,0,0,0);font-weight:600}div:where(.swal2-container) .swal2-progress-steps li{display:inline-block;position:relative}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}div:where(.swal2-container) .swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}div:where(.swal2-icon){position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:0.25em solid rgba(0,0,0,0);border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;user-select:none}div:where(.swal2-icon) .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}div:where(.swal2-icon).swal2-error{border-color:#f27474;color:#f27474}div:where(.swal2-icon).swal2-error .swal2-x-mark{position:relative;flex-grow:1}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=left]{left:1.0625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-error [class^=swal2-x-mark-line][class$=right]{right:1em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-error.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-error.swal2-icon-show .swal2-x-mark{animation:swal2-animate-error-x-mark .5s}div:where(.swal2-icon).swal2-warning{border-color:#facea8;color:#f8bb86}div:where(.swal2-icon).swal2-warning.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-warning.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .5s}div:where(.swal2-icon).swal2-info{border-color:#9de0f6;color:#3fc3ee}div:where(.swal2-icon).swal2-info.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-info.swal2-icon-show .swal2-icon-content{animation:swal2-animate-i-mark .8s}div:where(.swal2-icon).swal2-question{border-color:#c9dae1;color:#87adbd}div:where(.swal2-icon).swal2-question.swal2-icon-show{animation:swal2-animate-error-icon .5s}div:where(.swal2-icon).swal2-question.swal2-icon-show .swal2-icon-content{animation:swal2-animate-question-mark .8s}div:where(.swal2-icon).swal2-success{border-color:#a5dc86;color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;border-radius:50%}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=left]{top:-0.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}div:where(.swal2-icon).swal2-success [class^=swal2-success-circular-line][class$=right]{top:-0.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}div:where(.swal2-icon).swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-0.25em;left:-0.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}div:where(.swal2-icon).swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}div:where(.swal2-icon).swal2-success [class^=swal2-success-line][class$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-tip{animation:swal2-animate-success-line-tip .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-line-long{animation:swal2-animate-success-line-long .75s}div:where(.swal2-icon).swal2-success.swal2-icon-show .swal2-success-circular-line-right{animation:swal2-rotate-success-circular-line 4.25s ease-in}[class^=swal2]{-webkit-tap-highlight-color:rgba(0,0,0,0)}.swal2-show{animation:swal2-show .3s}.swal2-hide{animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@keyframes swal2-toast-show{0%{transform:translateY(-0.625em) rotateZ(2deg)}33%{transform:translateY(0) rotateZ(-2deg)}66%{transform:translateY(0.3125em) rotateZ(2deg)}100%{transform:translateY(0) rotateZ(0deg)}}@keyframes swal2-toast-hide{100%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-animate-success-line-tip{0%{top:.5625em;left:.0625em;width:0}54%{top:.125em;left:.125em;width:0}70%{top:.625em;left:-0.25em;width:1.625em}84%{top:1.0625em;left:.75em;width:.5em}100%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-long{0%{top:1.625em;right:1.375em;width:0}65%{top:1.25em;right:.9375em;width:0}84%{top:.9375em;right:0;width:1.125em}100%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-show{0%{transform:scale(0.7)}45%{transform:scale(1.05)}80%{transform:scale(0.95)}100%{transform:scale(1)}}@keyframes swal2-hide{0%{transform:scale(1);opacity:1}100%{transform:scale(0.5);opacity:0}}@keyframes swal2-animate-success-line-tip{0%{top:1.1875em;left:.0625em;width:0}54%{top:1.0625em;left:.125em;width:0}70%{top:2.1875em;left:-0.375em;width:3.125em}84%{top:3em;left:1.3125em;width:1.0625em}100%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-long{0%{top:3.375em;right:2.875em;width:0}65%{top:3.375em;right:2.875em;width:0}84%{top:2.1875em;right:0;width:3.4375em}100%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-rotate-success-circular-line{0%{transform:rotate(-45deg)}5%{transform:rotate(-45deg)}12%{transform:rotate(-405deg)}100%{transform:rotate(-405deg)}}@keyframes swal2-animate-error-x-mark{0%{margin-top:1.625em;transform:scale(0.4);opacity:0}50%{margin-top:1.625em;transform:scale(0.4);opacity:0}80%{margin-top:-0.375em;transform:scale(1.15)}100%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-icon{0%{transform:rotateX(100deg);opacity:0}100%{transform:rotateX(0deg);opacity:1}}@keyframes swal2-rotate-loading{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@keyframes swal2-animate-question-mark{0%{transform:rotateY(-360deg)}100%{transform:rotateY(0)}}@keyframes swal2-animate-i-mark{0%{transform:rotateZ(45deg);opacity:0}25%{transform:rotateZ(-25deg);opacity:.4}50%{transform:rotateZ(15deg);opacity:.8}75%{transform:rotateZ(-5deg);opacity:1}100%{transform:rotateX(0);opacity:1}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto !important}body.swal2-no-backdrop .swal2-container{background-color:rgba(0,0,0,0) !important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll !important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static !important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:rgba(0,0,0,0);pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{inset:0 auto auto 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{inset:0 0 auto auto}body.swal2-toast-shown .swal2-container.swal2-top-start,body.swal2-toast-shown .swal2-container.swal2-top-left{inset:0 auto auto 0}body.swal2-toast-shown .swal2-container.swal2-center-start,body.swal2-toast-shown .swal2-container.swal2-center-left{inset:50% auto auto 0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{inset:50% auto auto 50%;transform:translate(-50%, -50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{inset:50% 0 auto auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-start,body.swal2-toast-shown .swal2-container.swal2-bottom-left{inset:auto auto 0 0}body.swal2-toast-shown .swal2-container.swal2-bottom{inset:auto auto 0 50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{inset:auto 0 0 auto}"); 
} (sweetalert2_all));

var sweetalert2_allExports = sweetalert2_all.exports;
const Swal = /*@__PURE__*/getDefaultExportFromCjs(sweetalert2_allExports);

// sweetalert2-react-content v5.0.7


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

const noop = () => {}; // eslint-disable-line @typescript-eslint/no-empty-function

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
      const root = createRoot(domElement);
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
      if ( /*#__PURE__*/React.isValidElement(args[0]) || /*#__PURE__*/React.isValidElement(args[1])) {
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

/*! @docsearch/js 3.5.2 | MIT License | © Algolia, Inc. and contributors | https://docsearch.algolia.com */
function e(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function t(t2) {
  for (var n2 = 1; n2 < arguments.length; n2++) {
    var o2 = null != arguments[n2] ? arguments[n2] : {};
    n2 % 2 ? e(Object(o2), true).forEach(function(e2) {
      r(t2, e2, o2[e2]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t2, Object.getOwnPropertyDescriptors(o2)) : e(Object(o2)).forEach(function(e2) {
      Object.defineProperty(t2, e2, Object.getOwnPropertyDescriptor(o2, e2));
    });
  }
  return t2;
}
function n(e2) {
  return n = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, n(e2);
}
function r(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function o() {
  return o = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, o.apply(this, arguments);
}
function i(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function c(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null == n2)
      return;
    var r2, o2, i2 = [], c2 = true, a2 = false;
    try {
      for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        c2 || null == n2.return || n2.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return i2;
  }(e2, t2) || u(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function a(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return l(e3);
  }(e2) || function(e3) {
    if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
      return Array.from(e3);
  }(e2) || u(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function u(e2, t2) {
  if (e2) {
    if ("string" == typeof e2)
      return l(e2, t2);
    var n2 = Object.prototype.toString.call(e2).slice(8, -1);
    return "Object" === n2 && e2.constructor && (n2 = e2.constructor.name), "Map" === n2 || "Set" === n2 ? Array.from(e2) : "Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2) ? l(e2, t2) : void 0;
  }
}
function l(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
var s, f, p, m, v, d = {}, h = [], y = /acit|ex(?:s|g|n|p|$)|rph|grid|ows|mnc|ntw|ine[ch]|zoo|^ord|itera/i;
function b(e2, t2) {
  for (var n2 in t2)
    e2[n2] = t2[n2];
  return e2;
}
function g(e2) {
  var t2 = e2.parentNode;
  t2 && t2.removeChild(e2);
}
function _(e2, t2, n2) {
  var r2, o2, i2, c2 = arguments, a2 = {};
  for (i2 in t2)
    "key" == i2 ? r2 = t2[i2] : "ref" == i2 ? o2 = t2[i2] : a2[i2] = t2[i2];
  if (arguments.length > 3)
    for (n2 = [n2], i2 = 3; i2 < arguments.length; i2++)
      n2.push(c2[i2]);
  if (null != n2 && (a2.children = n2), "function" == typeof e2 && null != e2.defaultProps)
    for (i2 in e2.defaultProps)
      void 0 === a2[i2] && (a2[i2] = e2.defaultProps[i2]);
  return O(e2, a2, r2, o2, null);
}
function O(e2, t2, n2, r2, o2) {
  var i2 = { type: e2, props: t2, key: n2, ref: r2, __k: null, __: null, __b: 0, __e: null, __d: void 0, __c: null, __h: null, constructor: void 0, __v: null == o2 ? ++s.__v : o2 };
  return null != s.vnode && s.vnode(i2), i2;
}
function S(e2) {
  return e2.children;
}
function w(e2, t2) {
  this.props = e2, this.context = t2;
}
function j(e2, t2) {
  if (null == t2)
    return e2.__ ? j(e2.__, e2.__.__k.indexOf(e2) + 1) : null;
  for (var n2; t2 < e2.__k.length; t2++)
    if (null != (n2 = e2.__k[t2]) && null != n2.__e)
      return n2.__e;
  return "function" == typeof e2.type ? j(e2) : null;
}
function E(e2) {
  var t2, n2;
  if (null != (e2 = e2.__) && null != e2.__c) {
    for (e2.__e = e2.__c.base = null, t2 = 0; t2 < e2.__k.length; t2++)
      if (null != (n2 = e2.__k[t2]) && null != n2.__e) {
        e2.__e = e2.__c.base = n2.__e;
        break;
      }
    return E(e2);
  }
}
function P(e2) {
  (!e2.__d && (e2.__d = true) && f.push(e2) && !I.__r++ || m !== s.debounceRendering) && ((m = s.debounceRendering) || p)(I);
}
function I() {
  for (var e2; I.__r = f.length; )
    e2 = f.sort(function(e3, t2) {
      return e3.__v.__b - t2.__v.__b;
    }), f = [], e2.some(function(e3) {
      var t2, n2, r2, o2, i2, c2;
      e3.__d && (i2 = (o2 = (t2 = e3).__v).__e, (c2 = t2.__P) && (n2 = [], (r2 = b({}, o2)).__v = o2.__v + 1, q(c2, o2, r2, t2.__n, void 0 !== c2.ownerSVGElement, null != o2.__h ? [i2] : null, n2, null == i2 ? j(o2) : i2, o2.__h), L(n2, o2), o2.__e != i2 && E(o2)));
    });
}
function D(e2, t2, n2, r2, o2, i2, c2, a2, u2, l2) {
  var s2, f2, p2, m2, v2, y2, b2, g2 = r2 && r2.__k || h, _2 = g2.length;
  for (n2.__k = [], s2 = 0; s2 < t2.length; s2++)
    if (null != (m2 = n2.__k[s2] = null == (m2 = t2[s2]) || "boolean" == typeof m2 ? null : "string" == typeof m2 || "number" == typeof m2 ? O(null, m2, null, null, m2) : Array.isArray(m2) ? O(S, { children: m2 }, null, null, null) : m2.__b > 0 ? O(m2.type, m2.props, m2.key, null, m2.__v) : m2)) {
      if (m2.__ = n2, m2.__b = n2.__b + 1, null === (p2 = g2[s2]) || p2 && m2.key == p2.key && m2.type === p2.type)
        g2[s2] = void 0;
      else
        for (f2 = 0; f2 < _2; f2++) {
          if ((p2 = g2[f2]) && m2.key == p2.key && m2.type === p2.type) {
            g2[f2] = void 0;
            break;
          }
          p2 = null;
        }
      q(e2, m2, p2 = p2 || d, o2, i2, c2, a2, u2, l2), v2 = m2.__e, (f2 = m2.ref) && p2.ref != f2 && (b2 || (b2 = []), p2.ref && b2.push(p2.ref, null, m2), b2.push(f2, m2.__c || v2, m2)), null != v2 ? (null == y2 && (y2 = v2), "function" == typeof m2.type && null != m2.__k && m2.__k === p2.__k ? m2.__d = u2 = k(m2, u2, e2) : u2 = C(e2, m2, p2, g2, v2, u2), l2 || "option" !== n2.type ? "function" == typeof n2.type && (n2.__d = u2) : e2.value = "") : u2 && p2.__e == u2 && u2.parentNode != e2 && (u2 = j(p2));
    }
  for (n2.__e = y2, s2 = _2; s2--; )
    null != g2[s2] && ("function" == typeof n2.type && null != g2[s2].__e && g2[s2].__e == n2.__d && (n2.__d = j(r2, s2 + 1)), U(g2[s2], g2[s2]));
  if (b2)
    for (s2 = 0; s2 < b2.length; s2++)
      H(b2[s2], b2[++s2], b2[++s2]);
}
function k(e2, t2, n2) {
  var r2, o2;
  for (r2 = 0; r2 < e2.__k.length; r2++)
    (o2 = e2.__k[r2]) && (o2.__ = e2, t2 = "function" == typeof o2.type ? k(o2, t2, n2) : C(n2, o2, o2, e2.__k, o2.__e, t2));
  return t2;
}
function A(e2, t2) {
  return t2 = t2 || [], null == e2 || "boolean" == typeof e2 || (Array.isArray(e2) ? e2.some(function(e3) {
    A(e3, t2);
  }) : t2.push(e2)), t2;
}
function C(e2, t2, n2, r2, o2, i2) {
  var c2, a2, u2;
  if (void 0 !== t2.__d)
    c2 = t2.__d, t2.__d = void 0;
  else if (null == n2 || o2 != i2 || null == o2.parentNode)
    e:
      if (null == i2 || i2.parentNode !== e2)
        e2.appendChild(o2), c2 = null;
      else {
        for (a2 = i2, u2 = 0; (a2 = a2.nextSibling) && u2 < r2.length; u2 += 2)
          if (a2 == o2)
            break e;
        e2.insertBefore(o2, i2), c2 = i2;
      }
  return void 0 !== c2 ? c2 : o2.nextSibling;
}
function N(e2, t2, n2) {
  "-" === t2[0] ? e2.setProperty(t2, n2) : e2[t2] = null == n2 ? "" : "number" != typeof n2 || y.test(t2) ? n2 : n2 + "px";
}
function x(e2, t2, n2, r2, o2) {
  var i2;
  e:
    if ("style" === t2)
      if ("string" == typeof n2)
        e2.style.cssText = n2;
      else {
        if ("string" == typeof r2 && (e2.style.cssText = r2 = ""), r2)
          for (t2 in r2)
            n2 && t2 in n2 || N(e2.style, t2, "");
        if (n2)
          for (t2 in n2)
            r2 && n2[t2] === r2[t2] || N(e2.style, t2, n2[t2]);
      }
    else if ("o" === t2[0] && "n" === t2[1])
      i2 = t2 !== (t2 = t2.replace(/Capture$/, "")), t2 = t2.toLowerCase() in e2 ? t2.toLowerCase().slice(2) : t2.slice(2), e2.l || (e2.l = {}), e2.l[t2 + i2] = n2, n2 ? r2 || e2.addEventListener(t2, i2 ? R : T, i2) : e2.removeEventListener(t2, i2 ? R : T, i2);
    else if ("dangerouslySetInnerHTML" !== t2) {
      if (o2)
        t2 = t2.replace(/xlink[H:h]/, "h").replace(/sName$/, "s");
      else if ("href" !== t2 && "list" !== t2 && "form" !== t2 && "download" !== t2 && t2 in e2)
        try {
          e2[t2] = null == n2 ? "" : n2;
          break e;
        } catch (e3) {
        }
      "function" == typeof n2 || (null != n2 && (false !== n2 || "a" === t2[0] && "r" === t2[1]) ? e2.setAttribute(t2, n2) : e2.removeAttribute(t2));
    }
}
function T(e2) {
  this.l[e2.type + false](s.event ? s.event(e2) : e2);
}
function R(e2) {
  this.l[e2.type + true](s.event ? s.event(e2) : e2);
}
function q(e2, t2, n2, r2, o2, i2, c2, a2, u2) {
  var l2, f2, p2, m2, v2, d2, h2, y2, g2, _2, O2, j2 = t2.type;
  if (void 0 !== t2.constructor)
    return null;
  null != n2.__h && (u2 = n2.__h, a2 = t2.__e = n2.__e, t2.__h = null, i2 = [a2]), (l2 = s.__b) && l2(t2);
  try {
    e:
      if ("function" == typeof j2) {
        if (y2 = t2.props, g2 = (l2 = j2.contextType) && r2[l2.__c], _2 = l2 ? g2 ? g2.props.value : l2.__ : r2, n2.__c ? h2 = (f2 = t2.__c = n2.__c).__ = f2.__E : ("prototype" in j2 && j2.prototype.render ? t2.__c = f2 = new j2(y2, _2) : (t2.__c = f2 = new w(y2, _2), f2.constructor = j2, f2.render = F), g2 && g2.sub(f2), f2.props = y2, f2.state || (f2.state = {}), f2.context = _2, f2.__n = r2, p2 = f2.__d = true, f2.__h = []), null == f2.__s && (f2.__s = f2.state), null != j2.getDerivedStateFromProps && (f2.__s == f2.state && (f2.__s = b({}, f2.__s)), b(f2.__s, j2.getDerivedStateFromProps(y2, f2.__s))), m2 = f2.props, v2 = f2.state, p2)
          null == j2.getDerivedStateFromProps && null != f2.componentWillMount && f2.componentWillMount(), null != f2.componentDidMount && f2.__h.push(f2.componentDidMount);
        else {
          if (null == j2.getDerivedStateFromProps && y2 !== m2 && null != f2.componentWillReceiveProps && f2.componentWillReceiveProps(y2, _2), !f2.__e && null != f2.shouldComponentUpdate && false === f2.shouldComponentUpdate(y2, f2.__s, _2) || t2.__v === n2.__v) {
            f2.props = y2, f2.state = f2.__s, t2.__v !== n2.__v && (f2.__d = false), f2.__v = t2, t2.__e = n2.__e, t2.__k = n2.__k, f2.__h.length && c2.push(f2);
            break e;
          }
          null != f2.componentWillUpdate && f2.componentWillUpdate(y2, f2.__s, _2), null != f2.componentDidUpdate && f2.__h.push(function() {
            f2.componentDidUpdate(m2, v2, d2);
          });
        }
        f2.context = _2, f2.props = y2, f2.state = f2.__s, (l2 = s.__r) && l2(t2), f2.__d = false, f2.__v = t2, f2.__P = e2, l2 = f2.render(f2.props, f2.state, f2.context), f2.state = f2.__s, null != f2.getChildContext && (r2 = b(b({}, r2), f2.getChildContext())), p2 || null == f2.getSnapshotBeforeUpdate || (d2 = f2.getSnapshotBeforeUpdate(m2, v2)), O2 = null != l2 && l2.type === S && null == l2.key ? l2.props.children : l2, D(e2, Array.isArray(O2) ? O2 : [O2], t2, n2, r2, o2, i2, c2, a2, u2), f2.base = t2.__e, t2.__h = null, f2.__h.length && c2.push(f2), h2 && (f2.__E = f2.__ = null), f2.__e = false;
      } else
        null == i2 && t2.__v === n2.__v ? (t2.__k = n2.__k, t2.__e = n2.__e) : t2.__e = M(n2.__e, t2, n2, r2, o2, i2, c2, u2);
    (l2 = s.diffed) && l2(t2);
  } catch (e3) {
    t2.__v = null, (u2 || null != i2) && (t2.__e = a2, t2.__h = !!u2, i2[i2.indexOf(a2)] = null), s.__e(e3, t2, n2);
  }
}
function L(e2, t2) {
  s.__c && s.__c(t2, e2), e2.some(function(t3) {
    try {
      e2 = t3.__h, t3.__h = [], e2.some(function(e3) {
        e3.call(t3);
      });
    } catch (e3) {
      s.__e(e3, t3.__v);
    }
  });
}
function M(e2, t2, n2, r2, o2, i2, c2, a2) {
  var u2, l2, s2, f2, p2 = n2.props, m2 = t2.props, v2 = t2.type, y2 = 0;
  if ("svg" === v2 && (o2 = true), null != i2) {
    for (; y2 < i2.length; y2++)
      if ((u2 = i2[y2]) && (u2 === e2 || (v2 ? u2.localName == v2 : 3 == u2.nodeType))) {
        e2 = u2, i2[y2] = null;
        break;
      }
  }
  if (null == e2) {
    if (null === v2)
      return document.createTextNode(m2);
    e2 = o2 ? document.createElementNS("http://www.w3.org/2000/svg", v2) : document.createElement(v2, m2.is && m2), i2 = null, a2 = false;
  }
  if (null === v2)
    p2 === m2 || a2 && e2.data === m2 || (e2.data = m2);
  else {
    if (i2 = i2 && h.slice.call(e2.childNodes), l2 = (p2 = n2.props || d).dangerouslySetInnerHTML, s2 = m2.dangerouslySetInnerHTML, !a2) {
      if (null != i2)
        for (p2 = {}, f2 = 0; f2 < e2.attributes.length; f2++)
          p2[e2.attributes[f2].name] = e2.attributes[f2].value;
      (s2 || l2) && (s2 && (l2 && s2.__html == l2.__html || s2.__html === e2.innerHTML) || (e2.innerHTML = s2 && s2.__html || ""));
    }
    if (function(e3, t3, n3, r3, o3) {
      var i3;
      for (i3 in n3)
        "children" === i3 || "key" === i3 || i3 in t3 || x(e3, i3, null, n3[i3], r3);
      for (i3 in t3)
        o3 && "function" != typeof t3[i3] || "children" === i3 || "key" === i3 || "value" === i3 || "checked" === i3 || n3[i3] === t3[i3] || x(e3, i3, t3[i3], n3[i3], r3);
    }(e2, m2, p2, o2, a2), s2)
      t2.__k = [];
    else if (y2 = t2.props.children, D(e2, Array.isArray(y2) ? y2 : [y2], t2, n2, r2, o2 && "foreignObject" !== v2, i2, c2, e2.firstChild, a2), null != i2)
      for (y2 = i2.length; y2--; )
        null != i2[y2] && g(i2[y2]);
    a2 || ("value" in m2 && void 0 !== (y2 = m2.value) && (y2 !== e2.value || "progress" === v2 && !y2) && x(e2, "value", y2, p2.value, false), "checked" in m2 && void 0 !== (y2 = m2.checked) && y2 !== e2.checked && x(e2, "checked", y2, p2.checked, false));
  }
  return e2;
}
function H(e2, t2, n2) {
  try {
    "function" == typeof e2 ? e2(t2) : e2.current = t2;
  } catch (e3) {
    s.__e(e3, n2);
  }
}
function U(e2, t2, n2) {
  var r2, o2, i2;
  if (s.unmount && s.unmount(e2), (r2 = e2.ref) && (r2.current && r2.current !== e2.__e || H(r2, null, t2)), n2 || "function" == typeof e2.type || (n2 = null != (o2 = e2.__e)), e2.__e = e2.__d = void 0, null != (r2 = e2.__c)) {
    if (r2.componentWillUnmount)
      try {
        r2.componentWillUnmount();
      } catch (e3) {
        s.__e(e3, t2);
      }
    r2.base = r2.__P = null;
  }
  if (r2 = e2.__k)
    for (i2 = 0; i2 < r2.length; i2++)
      r2[i2] && U(r2[i2], t2, n2);
  null != o2 && g(o2);
}
function F(e2, t2, n2) {
  return this.constructor(e2, n2);
}
function B(e2, t2, n2) {
  var r2, o2, i2;
  s.__ && s.__(e2, t2), o2 = (r2 = "function" == typeof n2) ? null : n2 && n2.__k || t2.__k, i2 = [], q(t2, e2 = (!r2 && n2 || t2).__k = _(S, null, [e2]), o2 || d, d, void 0 !== t2.ownerSVGElement, !r2 && n2 ? [n2] : o2 ? null : t2.firstChild ? h.slice.call(t2.childNodes) : null, i2, !r2 && n2 ? n2 : o2 ? o2.__e : t2.firstChild, r2), L(i2, e2);
}
function V(e2, t2) {
  B(e2, t2, V);
}
function W(e2, t2, n2) {
  var r2, o2, i2, c2 = arguments, a2 = b({}, e2.props);
  for (i2 in t2)
    "key" == i2 ? r2 = t2[i2] : "ref" == i2 ? o2 = t2[i2] : a2[i2] = t2[i2];
  if (arguments.length > 3)
    for (n2 = [n2], i2 = 3; i2 < arguments.length; i2++)
      n2.push(c2[i2]);
  return null != n2 && (a2.children = n2), O(e2.type, a2, r2 || e2.key, o2 || e2.ref, null);
}
s = { __e: function(e2, t2) {
  for (var n2, r2, o2; t2 = t2.__; )
    if ((n2 = t2.__c) && !n2.__)
      try {
        if ((r2 = n2.constructor) && null != r2.getDerivedStateFromError && (n2.setState(r2.getDerivedStateFromError(e2)), o2 = n2.__d), null != n2.componentDidCatch && (n2.componentDidCatch(e2), o2 = n2.__d), o2)
          return n2.__E = n2;
      } catch (t3) {
        e2 = t3;
      }
  throw e2;
}, __v: 0 }, w.prototype.setState = function(e2, t2) {
  var n2;
  n2 = null != this.__s && this.__s !== this.state ? this.__s : this.__s = b({}, this.state), "function" == typeof e2 && (e2 = e2(b({}, n2), this.props)), e2 && b(n2, e2), null != e2 && this.__v && (t2 && this.__h.push(t2), P(this));
}, w.prototype.forceUpdate = function(e2) {
  this.__v && (this.__e = true, e2 && this.__h.push(e2), P(this));
}, w.prototype.render = S, f = [], p = "function" == typeof Promise ? Promise.prototype.then.bind(Promise.resolve()) : setTimeout, I.__r = 0, v = 0;
var K, z, J, $ = 0, Q = [], Z = s.__b, Y = s.__r, G = s.diffed, X = s.__c, ee = s.unmount;
function te(e2, t2) {
  s.__h && s.__h(z, e2, $ || t2), $ = 0;
  var n2 = z.__H || (z.__H = { __: [], __h: [] });
  return e2 >= n2.__.length && n2.__.push({}), n2.__[e2];
}
function ne(e2) {
  return $ = 1, re(pe, e2);
}
function re(e2, t2, n2) {
  var r2 = te(K++, 2);
  return r2.t = e2, r2.__c || (r2.__ = [n2 ? n2(t2) : pe(void 0, t2), function(e3) {
    var t3 = r2.t(r2.__[0], e3);
    r2.__[0] !== t3 && (r2.__ = [t3, r2.__[1]], r2.__c.setState({}));
  }], r2.__c = z), r2.__;
}
function oe(e2, t2) {
  var n2 = te(K++, 3);
  !s.__s && fe(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, z.__H.__h.push(n2));
}
function ie(e2, t2) {
  var n2 = te(K++, 4);
  !s.__s && fe(n2.__H, t2) && (n2.__ = e2, n2.__H = t2, z.__h.push(n2));
}
function ce(e2, t2) {
  var n2 = te(K++, 7);
  return fe(n2.__H, t2) && (n2.__ = e2(), n2.__H = t2, n2.__h = e2), n2.__;
}
function ae() {
  Q.forEach(function(e2) {
    if (e2.__P)
      try {
        e2.__H.__h.forEach(le), e2.__H.__h.forEach(se), e2.__H.__h = [];
      } catch (t2) {
        e2.__H.__h = [], s.__e(t2, e2.__v);
      }
  }), Q = [];
}
s.__b = function(e2) {
  z = null, Z && Z(e2);
}, s.__r = function(e2) {
  Y && Y(e2), K = 0;
  var t2 = (z = e2.__c).__H;
  t2 && (t2.__h.forEach(le), t2.__h.forEach(se), t2.__h = []);
}, s.diffed = function(e2) {
  G && G(e2);
  var t2 = e2.__c;
  t2 && t2.__H && t2.__H.__h.length && (1 !== Q.push(t2) && J === s.requestAnimationFrame || ((J = s.requestAnimationFrame) || function(e3) {
    var t3, n2 = function() {
      clearTimeout(r2), ue && cancelAnimationFrame(t3), setTimeout(e3);
    }, r2 = setTimeout(n2, 100);
    ue && (t3 = requestAnimationFrame(n2));
  })(ae)), z = void 0;
}, s.__c = function(e2, t2) {
  t2.some(function(e3) {
    try {
      e3.__h.forEach(le), e3.__h = e3.__h.filter(function(e4) {
        return !e4.__ || se(e4);
      });
    } catch (n2) {
      t2.some(function(e4) {
        e4.__h && (e4.__h = []);
      }), t2 = [], s.__e(n2, e3.__v);
    }
  }), X && X(e2, t2);
}, s.unmount = function(e2) {
  ee && ee(e2);
  var t2 = e2.__c;
  if (t2 && t2.__H)
    try {
      t2.__H.__.forEach(le);
    } catch (e3) {
      s.__e(e3, t2.__v);
    }
};
var ue = "function" == typeof requestAnimationFrame;
function le(e2) {
  var t2 = z;
  "function" == typeof e2.__c && e2.__c(), z = t2;
}
function se(e2) {
  var t2 = z;
  e2.__c = e2.__(), z = t2;
}
function fe(e2, t2) {
  return !e2 || e2.length !== t2.length || t2.some(function(t3, n2) {
    return t3 !== e2[n2];
  });
}
function pe(e2, t2) {
  return "function" == typeof t2 ? t2(e2) : t2;
}
function me(e2, t2) {
  for (var n2 in t2)
    e2[n2] = t2[n2];
  return e2;
}
function ve(e2, t2) {
  for (var n2 in e2)
    if ("__source" !== n2 && !(n2 in t2))
      return true;
  for (var r2 in t2)
    if ("__source" !== r2 && e2[r2] !== t2[r2])
      return true;
  return false;
}
function de(e2) {
  this.props = e2;
}
(de.prototype = new w()).isPureReactComponent = true, de.prototype.shouldComponentUpdate = function(e2, t2) {
  return ve(this.props, e2) || ve(this.state, t2);
};
var he = s.__b;
s.__b = function(e2) {
  e2.type && e2.type.__f && e2.ref && (e2.props.ref = e2.ref, e2.ref = null), he && he(e2);
};
var ye = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.forward_ref") || 3911;
var be = function(e2, t2) {
  return null == e2 ? null : A(A(e2).map(t2));
}, ge = { map: be, forEach: be, count: function(e2) {
  return e2 ? A(e2).length : 0;
}, only: function(e2) {
  var t2 = A(e2);
  if (1 !== t2.length)
    throw "Children.only";
  return t2[0];
}, toArray: A }, _e = s.__e;
function Oe() {
  this.__u = 0, this.t = null, this.__b = null;
}
function Se(e2) {
  var t2 = e2.__.__c;
  return t2 && t2.__e && t2.__e(e2);
}
function we() {
  this.u = null, this.o = null;
}
s.__e = function(e2, t2, n2) {
  if (e2.then) {
    for (var r2, o2 = t2; o2 = o2.__; )
      if ((r2 = o2.__c) && r2.__c)
        return null == t2.__e && (t2.__e = n2.__e, t2.__k = n2.__k), r2.__c(e2, t2);
  }
  _e(e2, t2, n2);
}, (Oe.prototype = new w()).__c = function(e2, t2) {
  var n2 = t2.__c, r2 = this;
  null == r2.t && (r2.t = []), r2.t.push(n2);
  var o2 = Se(r2.__v), i2 = false, c2 = function() {
    i2 || (i2 = true, n2.componentWillUnmount = n2.__c, o2 ? o2(a2) : a2());
  };
  n2.__c = n2.componentWillUnmount, n2.componentWillUnmount = function() {
    c2(), n2.__c && n2.__c();
  };
  var a2 = function() {
    if (!--r2.__u) {
      if (r2.state.__e) {
        var e3 = r2.state.__e;
        r2.__v.__k[0] = function e4(t4, n3, r3) {
          return t4 && (t4.__v = null, t4.__k = t4.__k && t4.__k.map(function(t5) {
            return e4(t5, n3, r3);
          }), t4.__c && t4.__c.__P === n3 && (t4.__e && r3.insertBefore(t4.__e, t4.__d), t4.__c.__e = true, t4.__c.__P = r3)), t4;
        }(e3, e3.__c.__P, e3.__c.__O);
      }
      var t3;
      for (r2.setState({ __e: r2.__b = null }); t3 = r2.t.pop(); )
        t3.forceUpdate();
    }
  }, u2 = true === t2.__h;
  r2.__u++ || u2 || r2.setState({ __e: r2.__b = r2.__v.__k[0] }), e2.then(c2, c2);
}, Oe.prototype.componentWillUnmount = function() {
  this.t = [];
}, Oe.prototype.render = function(e2, t2) {
  if (this.__b) {
    if (this.__v.__k) {
      var n2 = document.createElement("div"), r2 = this.__v.__k[0].__c;
      this.__v.__k[0] = function e3(t3, n3, r3) {
        return t3 && (t3.__c && t3.__c.__H && (t3.__c.__H.__.forEach(function(e4) {
          "function" == typeof e4.__c && e4.__c();
        }), t3.__c.__H = null), null != (t3 = me({}, t3)).__c && (t3.__c.__P === r3 && (t3.__c.__P = n3), t3.__c = null), t3.__k = t3.__k && t3.__k.map(function(t4) {
          return e3(t4, n3, r3);
        })), t3;
      }(this.__b, n2, r2.__O = r2.__P);
    }
    this.__b = null;
  }
  var o2 = t2.__e && _(S, null, e2.fallback);
  return o2 && (o2.__h = null), [_(S, null, t2.__e ? null : e2.children), o2];
};
var je = function(e2, t2, n2) {
  if (++n2[1] === n2[0] && e2.o.delete(t2), e2.props.revealOrder && ("t" !== e2.props.revealOrder[0] || !e2.o.size))
    for (n2 = e2.u; n2; ) {
      for (; n2.length > 3; )
        n2.pop()();
      if (n2[1] < n2[0])
        break;
      e2.u = n2 = n2[2];
    }
};
function Ee(e2) {
  return this.getChildContext = function() {
    return e2.context;
  }, e2.children;
}
function Pe(e2) {
  var t2 = this, n2 = e2.i;
  t2.componentWillUnmount = function() {
    B(null, t2.l), t2.l = null, t2.i = null;
  }, t2.i && t2.i !== n2 && t2.componentWillUnmount(), e2.__v ? (t2.l || (t2.i = n2, t2.l = { nodeType: 1, parentNode: n2, childNodes: [], appendChild: function(e3) {
    this.childNodes.push(e3), t2.i.appendChild(e3);
  }, insertBefore: function(e3, n3) {
    this.childNodes.push(e3), t2.i.appendChild(e3);
  }, removeChild: function(e3) {
    this.childNodes.splice(this.childNodes.indexOf(e3) >>> 1, 1), t2.i.removeChild(e3);
  } }), B(_(Ee, { context: t2.context }, e2.__v), t2.l)) : t2.l && t2.componentWillUnmount();
}
function Ie(e2, t2) {
  return _(Pe, { __v: e2, i: t2 });
}
(we.prototype = new w()).__e = function(e2) {
  var t2 = this, n2 = Se(t2.__v), r2 = t2.o.get(e2);
  return r2[0]++, function(o2) {
    var i2 = function() {
      t2.props.revealOrder ? (r2.push(o2), je(t2, e2, r2)) : o2();
    };
    n2 ? n2(i2) : i2();
  };
}, we.prototype.render = function(e2) {
  this.u = null, this.o = /* @__PURE__ */ new Map();
  var t2 = A(e2.children);
  e2.revealOrder && "b" === e2.revealOrder[0] && t2.reverse();
  for (var n2 = t2.length; n2--; )
    this.o.set(t2[n2], this.u = [1, 0, this.u]);
  return e2.children;
}, we.prototype.componentDidUpdate = we.prototype.componentDidMount = function() {
  var e2 = this;
  this.o.forEach(function(t2, n2) {
    je(e2, n2, t2);
  });
};
var De = "undefined" != typeof Symbol && Symbol.for && Symbol.for("react.element") || 60103, ke = /^(?:accent|alignment|arabic|baseline|cap|clip(?!PathU)|color|fill|flood|font|glyph(?!R)|horiz|marker(?!H|W|U)|overline|paint|stop|strikethrough|stroke|text(?!L)|underline|unicode|units|v|vector|vert|word|writing|x(?!C))[A-Z]/, Ae = function(e2) {
  return ("undefined" != typeof Symbol && "symbol" == n(Symbol()) ? /fil|che|rad/i : /fil|che|ra/i).test(e2);
};
function Ce(e2, t2, n2) {
  return null == t2.__k && (t2.textContent = ""), B(e2, t2), "function" == typeof n2 && n2(), e2 ? e2.__c : null;
}
w.prototype.isReactComponent = {}, ["componentWillMount", "componentWillReceiveProps", "componentWillUpdate"].forEach(function(e2) {
  Object.defineProperty(w.prototype, e2, { configurable: true, get: function() {
    return this["UNSAFE_" + e2];
  }, set: function(t2) {
    Object.defineProperty(this, e2, { configurable: true, writable: true, value: t2 });
  } });
});
var Ne = s.event;
function xe() {
}
function Te() {
  return this.cancelBubble;
}
function Re() {
  return this.defaultPrevented;
}
s.event = function(e2) {
  return Ne && (e2 = Ne(e2)), e2.persist = xe, e2.isPropagationStopped = Te, e2.isDefaultPrevented = Re, e2.nativeEvent = e2;
};
var qe, Le = { configurable: true, get: function() {
  return this.class;
} }, Me = s.vnode;
s.vnode = function(e2) {
  var t2 = e2.type, n2 = e2.props, r2 = n2;
  if ("string" == typeof t2) {
    for (var o2 in r2 = {}, n2) {
      var i2 = n2[o2];
      "value" === o2 && "defaultValue" in n2 && null == i2 || ("defaultValue" === o2 && "value" in n2 && null == n2.value ? o2 = "value" : "download" === o2 && true === i2 ? i2 = "" : /ondoubleclick/i.test(o2) ? o2 = "ondblclick" : /^onchange(textarea|input)/i.test(o2 + t2) && !Ae(n2.type) ? o2 = "oninput" : /^on(Ani|Tra|Tou|BeforeInp)/.test(o2) ? o2 = o2.toLowerCase() : ke.test(o2) ? o2 = o2.replace(/[A-Z0-9]/, "-$&").toLowerCase() : null === i2 && (i2 = void 0), r2[o2] = i2);
    }
    "select" == t2 && r2.multiple && Array.isArray(r2.value) && (r2.value = A(n2.children).forEach(function(e3) {
      e3.props.selected = -1 != r2.value.indexOf(e3.props.value);
    })), "select" == t2 && null != r2.defaultValue && (r2.value = A(n2.children).forEach(function(e3) {
      e3.props.selected = r2.multiple ? -1 != r2.defaultValue.indexOf(e3.props.value) : r2.defaultValue == e3.props.value;
    })), e2.props = r2;
  }
  t2 && n2.class != n2.className && (Le.enumerable = "className" in n2, null != n2.className && (r2.class = n2.className), Object.defineProperty(r2, "className", Le)), e2.$$typeof = De, Me && Me(e2);
};
var He = s.__r;
s.__r = function(e2) {
  He && He(e2), qe = e2.__c;
};
var Ue = { ReactCurrentDispatcher: { current: { readContext: function(e2) {
  return qe.__n[e2.__c].props.value;
} } } };
"object" == ("undefined" == typeof performance ? "undefined" : n(performance)) && "function" == typeof performance.now && performance.now.bind(performance);
function Fe(e2) {
  return !!e2 && e2.$$typeof === De;
}
var Be = { useState: ne, useReducer: re, useEffect: oe, useLayoutEffect: ie, useRef: function(e2) {
  return $ = 5, ce(function() {
    return { current: e2 };
  }, []);
}, useImperativeHandle: function(e2, t2, n2) {
  $ = 6, ie(function() {
    "function" == typeof e2 ? e2(t2()) : e2 && (e2.current = t2());
  }, null == n2 ? n2 : n2.concat(e2));
}, useMemo: ce, useCallback: function(e2, t2) {
  return $ = 8, ce(function() {
    return e2;
  }, t2);
}, useContext: function(e2) {
  var t2 = z.context[e2.__c], n2 = te(K++, 9);
  return n2.__c = e2, t2 ? (null == n2.__ && (n2.__ = true, t2.sub(z)), t2.props.value) : e2.__;
}, useDebugValue: function(e2, t2) {
  s.useDebugValue && s.useDebugValue(t2 ? t2(e2) : e2);
}, version: "16.8.0", Children: ge, render: Ce, hydrate: function(e2, t2, n2) {
  return V(e2, t2), "function" == typeof n2 && n2(), e2 ? e2.__c : null;
}, unmountComponentAtNode: function(e2) {
  return !!e2.__k && (B(null, e2), true);
}, createPortal: Ie, createElement: _, createContext: function(e2, t2) {
  var n2 = { __c: t2 = "__cC" + v++, __: e2, Consumer: function(e3, t3) {
    return e3.children(t3);
  }, Provider: function(e3) {
    var n3, r2;
    return this.getChildContext || (n3 = [], (r2 = {})[t2] = this, this.getChildContext = function() {
      return r2;
    }, this.shouldComponentUpdate = function(e4) {
      this.props.value !== e4.value && n3.some(P);
    }, this.sub = function(e4) {
      n3.push(e4);
      var t3 = e4.componentWillUnmount;
      e4.componentWillUnmount = function() {
        n3.splice(n3.indexOf(e4), 1), t3 && t3.call(e4);
      };
    }), e3.children;
  } };
  return n2.Provider.__ = n2.Consumer.contextType = n2;
}, createFactory: function(e2) {
  return _.bind(null, e2);
}, cloneElement: function(e2) {
  return Fe(e2) ? W.apply(null, arguments) : e2;
}, createRef: function() {
  return { current: null };
}, Fragment: S, isValidElement: Fe, findDOMNode: function(e2) {
  return e2 && (e2.base || 1 === e2.nodeType && e2) || null;
}, Component: w, PureComponent: de, memo: function(e2, t2) {
  function n2(e3) {
    var n3 = this.props.ref, r3 = n3 == e3.ref;
    return !r3 && n3 && (n3.call ? n3(null) : n3.current = null), t2 ? !t2(this.props, e3) || !r3 : ve(this.props, e3);
  }
  function r2(t3) {
    return this.shouldComponentUpdate = n2, _(e2, t3);
  }
  return r2.displayName = "Memo(" + (e2.displayName || e2.name) + ")", r2.prototype.isReactComponent = true, r2.__f = true, r2;
}, forwardRef: function(e2) {
  function t2(t3, r2) {
    var o2 = me({}, t3);
    return delete o2.ref, e2(o2, (r2 = t3.ref || r2) && ("object" != n(r2) || "current" in r2) ? r2 : null);
  }
  return t2.$$typeof = ye, t2.render = t2, t2.prototype.isReactComponent = t2.__f = true, t2.displayName = "ForwardRef(" + (e2.displayName || e2.name) + ")", t2;
}, unstable_batchedUpdates: function(e2, t2) {
  return e2(t2);
}, StrictMode: S, Suspense: Oe, SuspenseList: we, lazy: function(e2) {
  var t2, n2, r2;
  function o2(o3) {
    if (t2 || (t2 = e2()).then(function(e3) {
      n2 = e3.default || e3;
    }, function(e3) {
      r2 = e3;
    }), r2)
      throw r2;
    if (!n2)
      throw t2;
    return _(n2, o3);
  }
  return o2.displayName = "Lazy", o2.__f = true, o2;
}, __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED: Ue };
function Ve() {
  return Be.createElement("svg", { width: "15", height: "15", className: "DocSearch-Control-Key-Icon" }, Be.createElement("path", { d: "M4.505 4.496h2M5.505 5.496v5M8.216 4.496l.055 5.993M10 7.5c.333.333.5.667.5 1v2M12.326 4.5v5.996M8.384 4.496c1.674 0 2.116 0 2.116 1.5s-.442 1.5-2.116 1.5M3.205 9.303c-.09.448-.277 1.21-1.241 1.203C1 10.5.5 9.513.5 8V7c0-1.57.5-2.5 1.464-2.494.964.006 1.134.598 1.24 1.342M12.553 10.5h1.953", strokeWidth: "1.2", stroke: "currentColor", fill: "none", strokeLinecap: "square" }));
}
function We() {
  return Be.createElement("svg", { width: "20", height: "20", className: "DocSearch-Search-Icon", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
var Ke = ["translations"];
function ze() {
  return ze = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, ze.apply(this, arguments);
}
function Je(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null == n2)
      return;
    var r2, o2, i2 = [], c2 = true, a2 = false;
    try {
      for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        c2 || null == n2.return || n2.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return i2;
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return $e(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
    if ("Map" === n2 || "Set" === n2)
      return Array.from(e3);
    if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return $e(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function $e(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function Qe(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
var Ze = Be.forwardRef(function(e2, t2) {
  var n2 = e2.translations, r2 = void 0 === n2 ? {} : n2, o2 = Qe(e2, Ke), i2 = r2.buttonText, c2 = void 0 === i2 ? "Search" : i2, a2 = r2.buttonAriaLabel, u2 = void 0 === a2 ? "Search" : a2, l2 = Je(ne(null), 2), s2 = l2[0], f2 = l2[1];
  return oe(function() {
    "undefined" != typeof navigator && (/(Mac|iPhone|iPod|iPad)/i.test(navigator.platform) ? f2("⌘") : f2("Ctrl"));
  }, []), Be.createElement("button", ze({ type: "button", className: "DocSearch DocSearch-Button", "aria-label": u2 }, o2, { ref: t2 }), Be.createElement("span", { className: "DocSearch-Button-Container" }, Be.createElement(We, null), Be.createElement("span", { className: "DocSearch-Button-Placeholder" }, c2)), Be.createElement("span", { className: "DocSearch-Button-Keys" }, null !== s2 && Be.createElement(Be.Fragment, null, Be.createElement("kbd", { className: "DocSearch-Button-Key" }, "Ctrl" === s2 ? Be.createElement(Ve, null) : s2), Be.createElement("kbd", { className: "DocSearch-Button-Key" }, "K"))));
});
function Ye(e2, t2) {
  var n2 = void 0;
  return function() {
    for (var r2 = arguments.length, o2 = new Array(r2), i2 = 0; i2 < r2; i2++)
      o2[i2] = arguments[i2];
    n2 && clearTimeout(n2), n2 = setTimeout(function() {
      return e2.apply(void 0, o2);
    }, t2);
  };
}
function nt(e2) {
  return e2.reduce(function(e3, t2) {
    return e3.concat(t2);
  }, []);
}
var rt = 0;
function ot(e2) {
  return 0 === e2.collections.length ? 0 : e2.collections.reduce(function(e3, t2) {
    return e3 + t2.items.length;
  }, 0);
}
function it(e2, t2) {
}
function ct(e2) {
  return e2 !== Object(e2);
}
function at(e2, t2) {
  if (e2 === t2)
    return true;
  if (ct(e2) || ct(t2) || "function" == typeof e2 || "function" == typeof t2)
    return e2 === t2;
  if (Object.keys(e2).length !== Object.keys(t2).length)
    return false;
  for (var n2 = 0, r2 = Object.keys(e2); n2 < r2.length; n2++) {
    var o2 = r2[n2];
    if (!(o2 in t2))
      return false;
    if (!at(e2[o2], t2[o2]))
      return false;
  }
  return true;
}
var ut = function() {
};
var lt = [{ segment: "autocomplete-core", version: "1.9.3" }];
function ft(e2) {
  var t2 = e2.item, n2 = e2.items;
  return { index: t2.__autocomplete_indexName, items: [t2], positions: [1 + n2.findIndex(function(e3) {
    return e3.objectID === t2.objectID;
  })], queryID: t2.__autocomplete_queryID, algoliaSource: ["autocomplete"] };
}
function pt(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null != n2) {
      var r2, o2, i2, c2, a2 = [], u2 = true, l2 = false;
      try {
        if (i2 = (n2 = n2.call(e3)).next, 0 === t3) {
          if (Object(n2) !== n2)
            return;
          u2 = false;
        } else
          for (; !(u2 = (r2 = i2.call(n2)).done) && (a2.push(r2.value), a2.length !== t3); u2 = true)
            ;
      } catch (e4) {
        l2 = true, o2 = e4;
      } finally {
        try {
          if (!u2 && null != n2.return && (c2 = n2.return(), Object(c2) !== c2))
            return;
        } finally {
          if (l2)
            throw o2;
        }
      }
      return a2;
    }
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return mt(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
    if ("Map" === n2 || "Set" === n2)
      return Array.from(e3);
    if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return mt(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function mt(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
var vt = ["items"], dt = ["items"];
function ht(e2) {
  return ht = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, ht(e2);
}
function yt(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return bt(e3);
  }(e2) || function(e3) {
    if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return bt(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
    if ("Map" === n2 || "Set" === n2)
      return Array.from(e3);
    if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return bt(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function bt(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function gt(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function _t(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Ot(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? _t(Object(n2), true).forEach(function(t3) {
      St(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : _t(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function St(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== ht(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== ht(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === ht(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function wt(e2) {
  for (var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : 20, n2 = [], r2 = 0; r2 < e2.objectIDs.length; r2 += t2)
    n2.push(Ot(Ot({}, e2), {}, { objectIDs: e2.objectIDs.slice(r2, r2 + t2) }));
  return n2;
}
function jt(e2) {
  return e2.map(function(e3) {
    var t2 = e3.items, n2 = gt(e3, vt);
    return Ot(Ot({}, n2), {}, { objectIDs: (null == t2 ? void 0 : t2.map(function(e4) {
      return e4.objectID;
    })) || n2.objectIDs });
  });
}
function Et(e2) {
  var t2, n2, r2, o2 = (t2 = pt((e2.version || "").split(".").map(Number), 2), n2 = t2[0], r2 = t2[1], n2 >= 3 || 2 === n2 && r2 >= 4 || 1 === n2 && r2 >= 10);
  function i2(t3, n3, r3) {
    if (o2 && void 0 !== r3) {
      var i3 = r3[0].__autocomplete_algoliaCredentials, c2 = { "X-Algolia-Application-Id": i3.appId, "X-Algolia-API-Key": i3.apiKey };
      e2.apply(void 0, [t3].concat(yt(n3), [{ headers: c2 }]));
    } else
      e2.apply(void 0, [t3].concat(yt(n3)));
  }
  return { init: function(t3, n3) {
    e2("init", { appId: t3, apiKey: n3 });
  }, setUserToken: function(t3) {
    e2("setUserToken", t3);
  }, clickedObjectIDsAfterSearch: function() {
    for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
      t3[n3] = arguments[n3];
    t3.length > 0 && i2("clickedObjectIDsAfterSearch", jt(t3), t3[0].items);
  }, clickedObjectIDs: function() {
    for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
      t3[n3] = arguments[n3];
    t3.length > 0 && i2("clickedObjectIDs", jt(t3), t3[0].items);
  }, clickedFilters: function() {
    for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++)
      n3[r3] = arguments[r3];
    n3.length > 0 && e2.apply(void 0, ["clickedFilters"].concat(n3));
  }, convertedObjectIDsAfterSearch: function() {
    for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
      t3[n3] = arguments[n3];
    t3.length > 0 && i2("convertedObjectIDsAfterSearch", jt(t3), t3[0].items);
  }, convertedObjectIDs: function() {
    for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
      t3[n3] = arguments[n3];
    t3.length > 0 && i2("convertedObjectIDs", jt(t3), t3[0].items);
  }, convertedFilters: function() {
    for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++)
      n3[r3] = arguments[r3];
    n3.length > 0 && e2.apply(void 0, ["convertedFilters"].concat(n3));
  }, viewedObjectIDs: function() {
    for (var e3 = arguments.length, t3 = new Array(e3), n3 = 0; n3 < e3; n3++)
      t3[n3] = arguments[n3];
    t3.length > 0 && t3.reduce(function(e4, t4) {
      var n4 = t4.items, r3 = gt(t4, dt);
      return [].concat(yt(e4), yt(wt(Ot(Ot({}, r3), {}, { objectIDs: (null == n4 ? void 0 : n4.map(function(e5) {
        return e5.objectID;
      })) || r3.objectIDs })).map(function(e5) {
        return { items: n4, payload: e5 };
      })));
    }, []).forEach(function(e4) {
      var t4 = e4.items;
      return i2("viewedObjectIDs", [e4.payload], t4);
    });
  }, viewedFilters: function() {
    for (var t3 = arguments.length, n3 = new Array(t3), r3 = 0; r3 < t3; r3++)
      n3[r3] = arguments[r3];
    n3.length > 0 && e2.apply(void 0, ["viewedFilters"].concat(n3));
  } };
}
function Pt(e2) {
  var t2 = e2.items.reduce(function(e3, t3) {
    var n2;
    return e3[t3.__autocomplete_indexName] = (null !== (n2 = e3[t3.__autocomplete_indexName]) && void 0 !== n2 ? n2 : []).concat(t3), e3;
  }, {});
  return Object.keys(t2).map(function(e3) {
    return { index: e3, items: t2[e3], algoliaSource: ["autocomplete"] };
  });
}
function It(e2) {
  return e2.objectID && e2.__autocomplete_indexName && e2.__autocomplete_queryID;
}
function Dt(e2) {
  return Dt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, Dt(e2);
}
function kt(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return At(e3);
  }(e2) || function(e3) {
    if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return At(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
    if ("Map" === n2 || "Set" === n2)
      return Array.from(e3);
    if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return At(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function At(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function Ct(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Nt(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Ct(Object(n2), true).forEach(function(t3) {
      xt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Ct(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function xt(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== Dt(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== Dt(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === Dt(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
var Tt = "https://cdn.jsdelivr.net/npm/search-insights@".concat("2.6.0", "/dist/search-insights.min.js"), Rt = Ye(function(e2) {
  var t2 = e2.onItemsChange, n2 = e2.items, r2 = e2.insights, o2 = e2.state;
  t2({ insights: r2, insightsEvents: Pt({ items: n2 }).map(function(e3) {
    return Nt({ eventName: "Items Viewed" }, e3);
  }), state: o2 });
}, 400);
function qt(e2) {
  var t2 = function(e3) {
    return Nt({ onItemsChange: function(e4) {
      var t3 = e4.insights, n3 = e4.insightsEvents;
      t3.viewedObjectIDs.apply(t3, kt(n3.map(function(e5) {
        return Nt(Nt({}, e5), {}, { algoliaSource: [].concat(kt(e5.algoliaSource || []), ["autocomplete-internal"]) });
      })));
    }, onSelect: function(e4) {
      var t3 = e4.insights, n3 = e4.insightsEvents;
      t3.clickedObjectIDsAfterSearch.apply(t3, kt(n3.map(function(e5) {
        return Nt(Nt({}, e5), {}, { algoliaSource: [].concat(kt(e5.algoliaSource || []), ["autocomplete-internal"]) });
      })));
    }, onActive: ut }, e3);
  }(e2), n2 = t2.insightsClient, r2 = t2.onItemsChange, o2 = t2.onSelect, i2 = t2.onActive, c2 = n2;
  n2 || function(e3) {
    if ("undefined" != typeof window)
      e3({ window });
  }(function(e3) {
    var t3 = e3.window, n3 = t3.AlgoliaAnalyticsObject || "aa";
    "string" == typeof n3 && (c2 = t3[n3]), c2 || (t3.AlgoliaAnalyticsObject = n3, t3[n3] || (t3[n3] = function() {
      t3[n3].queue || (t3[n3].queue = []);
      for (var e4 = arguments.length, r3 = new Array(e4), o3 = 0; o3 < e4; o3++)
        r3[o3] = arguments[o3];
      t3[n3].queue.push(r3);
    }), t3[n3].version = "2.6.0", c2 = t3[n3], function(e4) {
      var t4 = "[Autocomplete]: Could not load search-insights.js. Please load it manually following https://alg.li/insights-autocomplete";
      try {
        var n4 = e4.document.createElement("script");
        n4.async = true, n4.src = Tt, n4.onerror = function() {
          console.error(t4);
        }, document.body.appendChild(n4);
      } catch (e5) {
        console.error(t4);
      }
    }(t3));
  });
  var a2 = Et(c2), u2 = { current: [] }, l2 = Ye(function(e3) {
    var t3 = e3.state;
    if (t3.isOpen) {
      var n3 = t3.collections.reduce(function(e4, t4) {
        return [].concat(kt(e4), kt(t4.items));
      }, []).filter(It);
      at(u2.current.map(function(e4) {
        return e4.objectID;
      }), n3.map(function(e4) {
        return e4.objectID;
      })) || (u2.current = n3, n3.length > 0 && Rt({ onItemsChange: r2, items: n3, insights: a2, state: t3 }));
    }
  }, 0);
  return { name: "aa.algoliaInsightsPlugin", subscribe: function(e3) {
    var t3 = e3.setContext, n3 = e3.onSelect, r3 = e3.onActive;
    c2("addAlgoliaAgent", "insights-plugin"), t3({ algoliaInsightsPlugin: { __algoliaSearchParameters: { clickAnalytics: true }, insights: a2 } }), n3(function(e4) {
      var t4 = e4.item, n4 = e4.state, r4 = e4.event;
      It(t4) && o2({ state: n4, event: r4, insights: a2, item: t4, insightsEvents: [Nt({ eventName: "Item Selected" }, ft({ item: t4, items: u2.current }))] });
    }), r3(function(e4) {
      var t4 = e4.item, n4 = e4.state, r4 = e4.event;
      It(t4) && i2({ state: n4, event: r4, insights: a2, item: t4, insightsEvents: [Nt({ eventName: "Item Active" }, ft({ item: t4, items: u2.current }))] });
    });
  }, onStateChange: function(e3) {
    var t3 = e3.state;
    l2({ state: t3 });
  }, __autocomplete_pluginOptions: e2 };
}
function Mt(e2, t2) {
  var n2 = t2;
  return { then: function(t3, r2) {
    return Mt(e2.then(Ut(t3, n2, e2), Ut(r2, n2, e2)), n2);
  }, catch: function(t3) {
    return Mt(e2.catch(Ut(t3, n2, e2)), n2);
  }, finally: function(t3) {
    return t3 && n2.onCancelList.push(t3), Mt(e2.finally(Ut(t3 && function() {
      return n2.onCancelList = [], t3();
    }, n2, e2)), n2);
  }, cancel: function() {
    n2.isCanceled = true;
    var e3 = n2.onCancelList;
    n2.onCancelList = [], e3.forEach(function(e4) {
      e4();
    });
  }, isCanceled: function() {
    return true === n2.isCanceled;
  } };
}
function Ht(e2) {
  return Mt(e2, { isCanceled: false, onCancelList: [] });
}
function Ut(e2, t2, n2) {
  return e2 ? function(n3) {
    return t2.isCanceled ? n3 : e2(n3);
  } : n2;
}
function Ft(e2, t2, n2, r2) {
  if (!n2)
    return null;
  if (e2 < 0 && (null === t2 || null !== r2 && 0 === t2))
    return n2 + e2;
  var o2 = (null === t2 ? -1 : t2) + e2;
  return o2 <= -1 || o2 >= n2 ? null === r2 ? null : 0 : o2;
}
function Bt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Vt(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Bt(Object(n2), true).forEach(function(t3) {
      Wt(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Bt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Wt(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== Kt(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== Kt(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === Kt(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Kt(e2) {
  return Kt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, Kt(e2);
}
function zt(e2) {
  var t2 = function(e3) {
    var t3 = e3.collections.map(function(e4) {
      return e4.items.length;
    }).reduce(function(e4, t4, n3) {
      var r3 = (e4[n3 - 1] || 0) + t4;
      return e4.push(r3), e4;
    }, []).reduce(function(t4, n3) {
      return n3 <= e3.activeItemId ? t4 + 1 : t4;
    }, 0);
    return e3.collections[t3];
  }(e2);
  if (!t2)
    return null;
  var n2 = t2.items[function(e3) {
    for (var t3 = e3.state, n3 = e3.collection, r3 = false, o2 = 0, i2 = 0; false === r3; ) {
      var c2 = t3.collections[o2];
      if (c2 === n3) {
        r3 = true;
        break;
      }
      i2 += c2.items.length, o2++;
    }
    return t3.activeItemId - i2;
  }({ state: e2, collection: t2 })], r2 = t2.source;
  return { item: n2, itemInputValue: r2.getItemInputValue({ item: n2, state: e2 }), itemUrl: r2.getItemUrl({ item: n2, state: e2 }), source: r2 };
}
var Jt = /((gt|sm)-|galaxy nexus)|samsung[- ]|samsungbrowser/i;
function $t(e2) {
  return $t = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, $t(e2);
}
function Qt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Zt(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== $t(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== $t(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === $t(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Yt(e2, t2, n2) {
  var r2, o2 = t2.initialState;
  return { getState: function() {
    return o2;
  }, dispatch: function(r3, i2) {
    var c2 = function(e3) {
      for (var t3 = 1; t3 < arguments.length; t3++) {
        var n3 = null != arguments[t3] ? arguments[t3] : {};
        t3 % 2 ? Qt(Object(n3), true).forEach(function(t4) {
          Zt(e3, t4, n3[t4]);
        }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e3, Object.getOwnPropertyDescriptors(n3)) : Qt(Object(n3)).forEach(function(t4) {
          Object.defineProperty(e3, t4, Object.getOwnPropertyDescriptor(n3, t4));
        });
      }
      return e3;
    }({}, o2);
    o2 = e2(o2, { type: r3, props: t2, payload: i2 }), n2({ state: o2, prevState: c2 });
  }, pendingRequests: (r2 = [], { add: function(e3) {
    return r2.push(e3), e3.finally(function() {
      r2 = r2.filter(function(t3) {
        return t3 !== e3;
      });
    });
  }, cancelAll: function() {
    r2.forEach(function(e3) {
      return e3.cancel();
    });
  }, isEmpty: function() {
    return 0 === r2.length;
  } }) };
}
function Gt(e2) {
  return Gt = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, Gt(e2);
}
function Xt(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function en(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Xt(Object(n2), true).forEach(function(t3) {
      tn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Xt(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function tn(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== Gt(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== Gt(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === Gt(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function nn(e2) {
  return nn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, nn(e2);
}
function rn(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return on(e3);
  }(e2) || function(e3) {
    if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return on(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
    if ("Map" === n2 || "Set" === n2)
      return Array.from(e3);
    if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return on(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function on(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function cn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function an(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? cn(Object(n2), true).forEach(function(t3) {
      un(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : cn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function un(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== nn(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== nn(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === nn(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function ln(e2, t2) {
  var n2, r2 = "undefined" != typeof window ? window : {}, o2 = e2.plugins || [];
  return an(an({ debug: false, openOnFocus: false, placeholder: "", autoFocus: false, defaultActiveItemId: null, stallThreshold: 300, insights: false, environment: r2, shouldPanelOpen: function(e3) {
    return ot(e3.state) > 0;
  }, reshape: function(e3) {
    return e3.sources;
  } }, e2), {}, { id: null !== (n2 = e2.id) && void 0 !== n2 ? n2 : "autocomplete-".concat(rt++), plugins: o2, initialState: an({ activeItemId: null, query: "", completion: null, collections: [], isOpen: false, status: "idle", context: {} }, e2.initialState), onStateChange: function(t3) {
    var n3;
    null === (n3 = e2.onStateChange) || void 0 === n3 || n3.call(e2, t3), o2.forEach(function(e3) {
      var n4;
      return null === (n4 = e3.onStateChange) || void 0 === n4 ? void 0 : n4.call(e3, t3);
    });
  }, onSubmit: function(t3) {
    var n3;
    null === (n3 = e2.onSubmit) || void 0 === n3 || n3.call(e2, t3), o2.forEach(function(e3) {
      var n4;
      return null === (n4 = e3.onSubmit) || void 0 === n4 ? void 0 : n4.call(e3, t3);
    });
  }, onReset: function(t3) {
    var n3;
    null === (n3 = e2.onReset) || void 0 === n3 || n3.call(e2, t3), o2.forEach(function(e3) {
      var n4;
      return null === (n4 = e3.onReset) || void 0 === n4 ? void 0 : n4.call(e3, t3);
    });
  }, getSources: function(n3) {
    return Promise.all([].concat(rn(o2.map(function(e3) {
      return e3.getSources;
    })), [e2.getSources]).filter(Boolean).map(function(e3) {
      return function(e4, t3) {
        var n4 = [];
        return Promise.resolve(e4(t3)).then(function(e5) {
          return Promise.all(e5.filter(function(e6) {
            return Boolean(e6);
          }).map(function(e6) {
            if (it("string" == typeof e6.sourceId), n4.includes(e6.sourceId))
              throw new Error("[Autocomplete] The `sourceId` ".concat(JSON.stringify(e6.sourceId), " is not unique."));
            n4.push(e6.sourceId);
            var t4 = { getItemInputValue: function(e7) {
              return e7.state.query;
            }, getItemUrl: function() {
            }, onSelect: function(e7) {
              (0, e7.setIsOpen)(false);
            }, onActive: ut, onResolve: ut };
            Object.keys(t4).forEach(function(e7) {
              t4[e7].__default = true;
            });
            var r3 = Vt(Vt({}, t4), e6);
            return Promise.resolve(r3);
          }));
        });
      }(e3, n3);
    })).then(function(e3) {
      return nt(e3);
    }).then(function(e3) {
      return e3.map(function(e4) {
        return an(an({}, e4), {}, { onSelect: function(n4) {
          e4.onSelect(n4), t2.forEach(function(e5) {
            var t3;
            return null === (t3 = e5.onSelect) || void 0 === t3 ? void 0 : t3.call(e5, n4);
          });
        }, onActive: function(n4) {
          e4.onActive(n4), t2.forEach(function(e5) {
            var t3;
            return null === (t3 = e5.onActive) || void 0 === t3 ? void 0 : t3.call(e5, n4);
          });
        }, onResolve: function(n4) {
          e4.onResolve(n4), t2.forEach(function(e5) {
            var t3;
            return null === (t3 = e5.onResolve) || void 0 === t3 ? void 0 : t3.call(e5, n4);
          });
        } });
      });
    });
  }, navigator: an({ navigate: function(e3) {
    var t3 = e3.itemUrl;
    r2.location.assign(t3);
  }, navigateNewTab: function(e3) {
    var t3 = e3.itemUrl, n3 = r2.open(t3, "_blank", "noopener");
    null == n3 || n3.focus();
  }, navigateNewWindow: function(e3) {
    var t3 = e3.itemUrl;
    r2.open(t3, "_blank", "noopener");
  } }, e2.navigator) });
}
function sn(e2) {
  return sn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, sn(e2);
}
function fn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function pn(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? fn(Object(n2), true).forEach(function(t3) {
      mn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : fn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function mn(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== sn(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== sn(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === sn(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function vn(e2) {
  return vn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, vn(e2);
}
function dn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function hn(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? dn(Object(n2), true).forEach(function(t3) {
      yn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : dn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function yn(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== vn(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== vn(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === vn(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function bn(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return gn(e3);
  }(e2) || function(e3) {
    if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return gn(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
    if ("Map" === n2 || "Set" === n2)
      return Array.from(e3);
    if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return gn(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function gn(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function _n(e2) {
  return Boolean(e2.execute);
}
function On(e2, t2, n2) {
  if (o2 = e2, Boolean(null == o2 ? void 0 : o2.execute)) {
    var r2 = "algolia" === e2.requesterId ? Object.assign.apply(Object, [{}].concat(bn(Object.keys(n2.context).map(function(e3) {
      var t3;
      return null === (t3 = n2.context[e3]) || void 0 === t3 ? void 0 : t3.__algoliaSearchParameters;
    })))) : {};
    return hn(hn({}, e2), {}, { requests: e2.queries.map(function(n3) {
      return { query: "algolia" === e2.requesterId ? hn(hn({}, n3), {}, { params: hn(hn({}, r2), n3.params) }) : n3, sourceId: t2, transformResponse: e2.transformResponse };
    }) });
  }
  var o2;
  return { items: e2, sourceId: t2 };
}
function Sn(e2) {
  var t2 = e2.reduce(function(e3, t3) {
    if (!_n(t3))
      return e3.push(t3), e3;
    var n2 = t3.searchClient, r2 = t3.execute, o2 = t3.requesterId, i2 = t3.requests, c2 = e3.find(function(e4) {
      return _n(t3) && _n(e4) && e4.searchClient === n2 && Boolean(o2) && e4.requesterId === o2;
    });
    if (c2) {
      var a2;
      (a2 = c2.items).push.apply(a2, bn(i2));
    } else {
      var u2 = { execute: r2, requesterId: o2, items: i2, searchClient: n2 };
      e3.push(u2);
    }
    return e3;
  }, []).map(function(e3) {
    if (!_n(e3))
      return Promise.resolve(e3);
    var t3 = e3, n2 = t3.execute, r2 = t3.items;
    return n2({ searchClient: t3.searchClient, requests: r2 });
  });
  return Promise.all(t2).then(function(e3) {
    return nt(e3);
  });
}
function wn(e2, t2, n2) {
  return t2.map(function(t3) {
    var r2, o2 = e2.filter(function(e3) {
      return e3.sourceId === t3.sourceId;
    }), i2 = o2.map(function(e3) {
      return e3.items;
    }), c2 = o2[0].transformResponse, a2 = c2 ? c2({ results: r2 = i2, hits: r2.map(function(e3) {
      return e3.hits;
    }).filter(Boolean), facetHits: r2.map(function(e3) {
      var t4;
      return null === (t4 = e3.facetHits) || void 0 === t4 ? void 0 : t4.map(function(e4) {
        return { label: e4.value, count: e4.count, _highlightResult: { label: { value: e4.highlighted } } };
      });
    }).filter(Boolean) }) : i2;
    return t3.onResolve({ source: t3, results: i2, items: a2, state: n2.getState() }), it(a2.every(Boolean), 'The `getItems` function from source "'.concat(t3.sourceId, '" must return an array of items but returned ').concat(JSON.stringify(void 0), ".\n\nDid you forget to return items?\n\nSee: https://www.algolia.com/doc/ui-libraries/autocomplete/core-concepts/sources/#param-getitems")), { source: t3, items: a2 };
  });
}
function jn(e2) {
  return jn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, jn(e2);
}
var En = ["event", "nextState", "props", "query", "refresh", "store"];
function Pn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function In(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Pn(Object(n2), true).forEach(function(t3) {
      Dn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Pn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Dn(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== jn(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== jn(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === jn(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function kn(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
var An, Cn, Nn, xn = null, Tn = (An = -1, Cn = -1, Nn = void 0, function(e2) {
  var t2 = ++An;
  return Promise.resolve(e2).then(function(e3) {
    return Nn && t2 < Cn ? Nn : (Cn = t2, Nn = e3, e3);
  });
});
function Rn(e2) {
  var t2 = e2.event, n2 = e2.nextState, r2 = void 0 === n2 ? {} : n2, o2 = e2.props, i2 = e2.query, c2 = e2.refresh, a2 = e2.store, u2 = kn(e2, En);
  xn && o2.environment.clearTimeout(xn);
  var l2 = u2.setCollections, s2 = u2.setIsOpen, f2 = u2.setQuery, p2 = u2.setActiveItemId, m2 = u2.setStatus;
  if (f2(i2), p2(o2.defaultActiveItemId), !i2 && false === o2.openOnFocus) {
    var v2, d2 = a2.getState().collections.map(function(e3) {
      return In(In({}, e3), {}, { items: [] });
    });
    m2("idle"), l2(d2), s2(null !== (v2 = r2.isOpen) && void 0 !== v2 ? v2 : o2.shouldPanelOpen({ state: a2.getState() }));
    var h2 = Ht(Tn(d2).then(function() {
      return Promise.resolve();
    }));
    return a2.pendingRequests.add(h2);
  }
  m2("loading"), xn = o2.environment.setTimeout(function() {
    m2("stalled");
  }, o2.stallThreshold);
  var y2 = Ht(Tn(o2.getSources(In({ query: i2, refresh: c2, state: a2.getState() }, u2)).then(function(e3) {
    return Promise.all(e3.map(function(e4) {
      return Promise.resolve(e4.getItems(In({ query: i2, refresh: c2, state: a2.getState() }, u2))).then(function(t3) {
        return On(t3, e4.sourceId, a2.getState());
      });
    })).then(Sn).then(function(t3) {
      return wn(t3, e3, a2);
    }).then(function(e4) {
      return function(e5) {
        var t3 = e5.collections, n3 = e5.props, r3 = e5.state, o3 = t3.reduce(function(e6, t4) {
          return pn(pn({}, e6), {}, mn({}, t4.source.sourceId, pn(pn({}, t4.source), {}, { getItems: function() {
            return nt(t4.items);
          } })));
        }, {}), i3 = n3.plugins.reduce(function(e6, t4) {
          return t4.reshape ? t4.reshape(e6) : e6;
        }, { sourcesBySourceId: o3, state: r3 }).sourcesBySourceId;
        return nt(n3.reshape({ sourcesBySourceId: i3, sources: Object.values(i3), state: r3 })).filter(Boolean).map(function(e6) {
          return { source: e6, items: e6.getItems() };
        });
      }({ collections: e4, props: o2, state: a2.getState() });
    });
  }))).then(function(e3) {
    var n3;
    m2("idle"), l2(e3);
    var f3 = o2.shouldPanelOpen({ state: a2.getState() });
    s2(null !== (n3 = r2.isOpen) && void 0 !== n3 ? n3 : o2.openOnFocus && !i2 && f3 || f3);
    var p3 = zt(a2.getState());
    if (null !== a2.getState().activeItemId && p3) {
      var v3 = p3.item, d3 = p3.itemInputValue, h3 = p3.itemUrl, y3 = p3.source;
      y3.onActive(In({ event: t2, item: v3, itemInputValue: d3, itemUrl: h3, refresh: c2, source: y3, state: a2.getState() }, u2));
    }
  }).finally(function() {
    m2("idle"), xn && o2.environment.clearTimeout(xn);
  });
  return a2.pendingRequests.add(y2);
}
function qn(e2) {
  return qn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, qn(e2);
}
var Ln = ["event", "props", "refresh", "store"];
function Mn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Hn(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Mn(Object(n2), true).forEach(function(t3) {
      Un(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Mn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Un(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== qn(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== qn(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === qn(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Fn(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function Bn(e2) {
  return Bn = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, Bn(e2);
}
var Vn = ["props", "refresh", "store"], Wn = ["inputElement", "formElement", "panelElement"], Kn = ["inputElement"], zn = ["inputElement", "maxLength"], Jn = ["sourceIndex"], $n = ["sourceIndex"], Qn = ["item", "source", "sourceIndex"];
function Zn(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Yn(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Zn(Object(n2), true).forEach(function(t3) {
      Gn(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Zn(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Gn(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== Bn(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== Bn(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === Bn(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Xn(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function er(e2) {
  var t2 = e2.props, n2 = e2.refresh, r2 = e2.store, o2 = Xn(e2, Vn), i2 = function(e3, t3) {
    return void 0 !== t3 ? "".concat(e3, "-").concat(t3) : e3;
  };
  return { getEnvironmentProps: function(e3) {
    var n3 = e3.inputElement, o3 = e3.formElement, i3 = e3.panelElement;
    function c2(e4) {
      !r2.getState().isOpen && r2.pendingRequests.isEmpty() || e4.target === n3 || false === [o3, i3].some(function(t3) {
        return n4 = t3, r3 = e4.target, n4 === r3 || n4.contains(r3);
        var n4, r3;
      }) && (r2.dispatch("blur", null), t2.debug || r2.pendingRequests.cancelAll());
    }
    return Yn({ onTouchStart: c2, onMouseDown: c2, onTouchMove: function(e4) {
      false !== r2.getState().isOpen && n3 === t2.environment.document.activeElement && e4.target !== n3 && n3.blur();
    } }, Xn(e3, Wn));
  }, getRootProps: function(e3) {
    return Yn({ role: "combobox", "aria-expanded": r2.getState().isOpen, "aria-haspopup": "listbox", "aria-owns": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label") }, e3);
  }, getFormProps: function(e3) {
    e3.inputElement;
    return Yn({ action: "", noValidate: true, role: "search", onSubmit: function(i3) {
      var c2;
      i3.preventDefault(), t2.onSubmit(Yn({ event: i3, refresh: n2, state: r2.getState() }, o2)), r2.dispatch("submit", null), null === (c2 = e3.inputElement) || void 0 === c2 || c2.blur();
    }, onReset: function(i3) {
      var c2;
      i3.preventDefault(), t2.onReset(Yn({ event: i3, refresh: n2, state: r2.getState() }, o2)), r2.dispatch("reset", null), null === (c2 = e3.inputElement) || void 0 === c2 || c2.focus();
    } }, Xn(e3, Kn));
  }, getLabelProps: function(e3) {
    var n3 = e3 || {}, r3 = n3.sourceIndex, o3 = Xn(n3, Jn);
    return Yn({ htmlFor: "".concat(i2(t2.id, r3), "-input"), id: "".concat(i2(t2.id, r3), "-label") }, o3);
  }, getInputProps: function(e3) {
    var i3;
    function c2(e4) {
      (t2.openOnFocus || Boolean(r2.getState().query)) && Rn(Yn({ event: e4, props: t2, query: r2.getState().completion || r2.getState().query, refresh: n2, store: r2 }, o2)), r2.dispatch("focus", null);
    }
    var a2 = e3 || {}, u2 = (a2.inputElement, a2.maxLength), l2 = void 0 === u2 ? 512 : u2, s2 = Xn(a2, zn), f2 = zt(r2.getState()), p2 = function(e4) {
      return Boolean(e4 && e4.match(Jt));
    }((null === (i3 = t2.environment.navigator) || void 0 === i3 ? void 0 : i3.userAgent) || ""), m2 = null != f2 && f2.itemUrl && !p2 ? "go" : "search";
    return Yn({ "aria-autocomplete": "both", "aria-activedescendant": r2.getState().isOpen && null !== r2.getState().activeItemId ? "".concat(t2.id, "-item-").concat(r2.getState().activeItemId) : void 0, "aria-controls": r2.getState().isOpen ? "".concat(t2.id, "-list") : void 0, "aria-labelledby": "".concat(t2.id, "-label"), value: r2.getState().completion || r2.getState().query, id: "".concat(t2.id, "-input"), autoComplete: "off", autoCorrect: "off", autoCapitalize: "off", enterKeyHint: m2, spellCheck: "false", autoFocus: t2.autoFocus, placeholder: t2.placeholder, maxLength: l2, type: "search", onChange: function(e4) {
      Rn(Yn({ event: e4, props: t2, query: e4.currentTarget.value.slice(0, l2), refresh: n2, store: r2 }, o2));
    }, onKeyDown: function(e4) {
      !function(e5) {
        var t3 = e5.event, n3 = e5.props, r3 = e5.refresh, o3 = e5.store, i4 = Fn(e5, Ln);
        if ("ArrowUp" === t3.key || "ArrowDown" === t3.key) {
          var c3 = function() {
            var e6 = n3.environment.document.getElementById("".concat(n3.id, "-item-").concat(o3.getState().activeItemId));
            e6 && (e6.scrollIntoViewIfNeeded ? e6.scrollIntoViewIfNeeded(false) : e6.scrollIntoView(false));
          }, a3 = function() {
            var e6 = zt(o3.getState());
            if (null !== o3.getState().activeItemId && e6) {
              var n4 = e6.item, c4 = e6.itemInputValue, a4 = e6.itemUrl, u4 = e6.source;
              u4.onActive(Hn({ event: t3, item: n4, itemInputValue: c4, itemUrl: a4, refresh: r3, source: u4, state: o3.getState() }, i4));
            }
          };
          t3.preventDefault(), false === o3.getState().isOpen && (n3.openOnFocus || Boolean(o3.getState().query)) ? Rn(Hn({ event: t3, props: n3, query: o3.getState().query, refresh: r3, store: o3 }, i4)).then(function() {
            o3.dispatch(t3.key, { nextActiveItemId: n3.defaultActiveItemId }), a3(), setTimeout(c3, 0);
          }) : (o3.dispatch(t3.key, {}), a3(), c3());
        } else if ("Escape" === t3.key)
          t3.preventDefault(), o3.dispatch(t3.key, null), o3.pendingRequests.cancelAll();
        else if ("Tab" === t3.key)
          o3.dispatch("blur", null), o3.pendingRequests.cancelAll();
        else if ("Enter" === t3.key) {
          if (null === o3.getState().activeItemId || o3.getState().collections.every(function(e6) {
            return 0 === e6.items.length;
          }))
            return void (n3.debug || o3.pendingRequests.cancelAll());
          t3.preventDefault();
          var u3 = zt(o3.getState()), l3 = u3.item, s3 = u3.itemInputValue, f3 = u3.itemUrl, p3 = u3.source;
          if (t3.metaKey || t3.ctrlKey)
            void 0 !== f3 && (p3.onSelect(Hn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4)), n3.navigator.navigateNewTab({ itemUrl: f3, item: l3, state: o3.getState() }));
          else if (t3.shiftKey)
            void 0 !== f3 && (p3.onSelect(Hn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4)), n3.navigator.navigateNewWindow({ itemUrl: f3, item: l3, state: o3.getState() }));
          else if (t3.altKey)
            ;
          else {
            if (void 0 !== f3)
              return p3.onSelect(Hn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4)), void n3.navigator.navigate({ itemUrl: f3, item: l3, state: o3.getState() });
            Rn(Hn({ event: t3, nextState: { isOpen: false }, props: n3, query: s3, refresh: r3, store: o3 }, i4)).then(function() {
              p3.onSelect(Hn({ event: t3, item: l3, itemInputValue: s3, itemUrl: f3, refresh: r3, source: p3, state: o3.getState() }, i4));
            });
          }
        }
      }(Yn({ event: e4, props: t2, refresh: n2, store: r2 }, o2));
    }, onFocus: c2, onBlur: ut, onClick: function(n3) {
      e3.inputElement !== t2.environment.document.activeElement || r2.getState().isOpen || c2(n3);
    } }, s2);
  }, getPanelProps: function(e3) {
    return Yn({ onMouseDown: function(e4) {
      e4.preventDefault();
    }, onMouseLeave: function() {
      r2.dispatch("mouseleave", null);
    } }, e3);
  }, getListProps: function(e3) {
    var n3 = e3 || {}, r3 = n3.sourceIndex, o3 = Xn(n3, $n);
    return Yn({ role: "listbox", "aria-labelledby": "".concat(i2(t2.id, r3), "-label"), id: "".concat(i2(t2.id, r3), "-list") }, o3);
  }, getItemProps: function(e3) {
    var c2 = e3.item, a2 = e3.source, u2 = e3.sourceIndex, l2 = Xn(e3, Qn);
    return Yn({ id: "".concat(i2(t2.id, u2), "-item-").concat(c2.__autocomplete_id), role: "option", "aria-selected": r2.getState().activeItemId === c2.__autocomplete_id, onMouseMove: function(e4) {
      if (c2.__autocomplete_id !== r2.getState().activeItemId) {
        r2.dispatch("mousemove", c2.__autocomplete_id);
        var t3 = zt(r2.getState());
        if (null !== r2.getState().activeItemId && t3) {
          var i3 = t3.item, a3 = t3.itemInputValue, u3 = t3.itemUrl, l3 = t3.source;
          l3.onActive(Yn({ event: e4, item: i3, itemInputValue: a3, itemUrl: u3, refresh: n2, source: l3, state: r2.getState() }, o2));
        }
      }
    }, onMouseDown: function(e4) {
      e4.preventDefault();
    }, onClick: function(e4) {
      var i3 = a2.getItemInputValue({ item: c2, state: r2.getState() }), u3 = a2.getItemUrl({ item: c2, state: r2.getState() });
      (u3 ? Promise.resolve() : Rn(Yn({ event: e4, nextState: { isOpen: false }, props: t2, query: i3, refresh: n2, store: r2 }, o2))).then(function() {
        a2.onSelect(Yn({ event: e4, item: c2, itemInputValue: i3, itemUrl: u3, refresh: n2, source: a2, state: r2.getState() }, o2));
      });
    } }, l2);
  } };
}
function tr(e2) {
  return tr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, tr(e2);
}
function nr(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function rr(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? nr(Object(n2), true).forEach(function(t3) {
      or(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : nr(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function or(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== tr(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== tr(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === tr(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function ir(e2) {
  var t2, n2, r2, o2, i2 = e2.plugins, c2 = e2.options, a2 = null === (t2 = ((null === (n2 = c2.__autocomplete_metadata) || void 0 === n2 ? void 0 : n2.userAgents) || [])[0]) || void 0 === t2 ? void 0 : t2.segment, u2 = a2 ? or({}, a2, Object.keys((null === (r2 = c2.__autocomplete_metadata) || void 0 === r2 ? void 0 : r2.options) || {})) : {};
  return { plugins: i2.map(function(e3) {
    return { name: e3.name, options: Object.keys(e3.__autocomplete_pluginOptions || []) };
  }), options: rr({ "autocomplete-core": Object.keys(c2) }, u2), ua: lt.concat((null === (o2 = c2.__autocomplete_metadata) || void 0 === o2 ? void 0 : o2.userAgents) || []) };
}
function cr(e2) {
  var t2, n2 = e2.state;
  return false === n2.isOpen || null === n2.activeItemId ? null : (null === (t2 = zt(n2)) || void 0 === t2 ? void 0 : t2.itemInputValue) || null;
}
function ar(e2) {
  return ar = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, ar(e2);
}
function ur(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function lr(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? ur(Object(n2), true).forEach(function(t3) {
      sr(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : ur(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function sr(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== ar(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== ar(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === ar(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
var fr = function(e2, t2) {
  switch (t2.type) {
    case "setActiveItemId":
    case "mousemove":
      return lr(lr({}, e2), {}, { activeItemId: t2.payload });
    case "setQuery":
      return lr(lr({}, e2), {}, { query: t2.payload, completion: null });
    case "setCollections":
      return lr(lr({}, e2), {}, { collections: t2.payload });
    case "setIsOpen":
      return lr(lr({}, e2), {}, { isOpen: t2.payload });
    case "setStatus":
      return lr(lr({}, e2), {}, { status: t2.payload });
    case "setContext":
      return lr(lr({}, e2), {}, { context: lr(lr({}, e2.context), t2.payload) });
    case "ArrowDown":
      var n2 = lr(lr({}, e2), {}, { activeItemId: t2.payload.hasOwnProperty("nextActiveItemId") ? t2.payload.nextActiveItemId : Ft(1, e2.activeItemId, ot(e2), t2.props.defaultActiveItemId) });
      return lr(lr({}, n2), {}, { completion: cr({ state: n2 }) });
    case "ArrowUp":
      var r2 = lr(lr({}, e2), {}, { activeItemId: Ft(-1, e2.activeItemId, ot(e2), t2.props.defaultActiveItemId) });
      return lr(lr({}, r2), {}, { completion: cr({ state: r2 }) });
    case "Escape":
      return e2.isOpen ? lr(lr({}, e2), {}, { activeItemId: null, isOpen: false, completion: null }) : lr(lr({}, e2), {}, { activeItemId: null, query: "", status: "idle", collections: [] });
    case "submit":
      return lr(lr({}, e2), {}, { activeItemId: null, isOpen: false, status: "idle" });
    case "reset":
      return lr(lr({}, e2), {}, { activeItemId: true === t2.props.openOnFocus ? t2.props.defaultActiveItemId : null, status: "idle", query: "" });
    case "focus":
      return lr(lr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId, isOpen: (t2.props.openOnFocus || Boolean(e2.query)) && t2.props.shouldPanelOpen({ state: e2 }) });
    case "blur":
      return t2.props.debug ? e2 : lr(lr({}, e2), {}, { isOpen: false, activeItemId: null });
    case "mouseleave":
      return lr(lr({}, e2), {}, { activeItemId: t2.props.defaultActiveItemId });
    default:
      return it(false, "The reducer action ".concat(JSON.stringify(t2.type), " is not supported.")), e2;
  }
};
function pr(e2) {
  return pr = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function(e3) {
    return typeof e3;
  } : function(e3) {
    return e3 && "function" == typeof Symbol && e3.constructor === Symbol && e3 !== Symbol.prototype ? "symbol" : typeof e3;
  }, pr(e2);
}
function mr(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function vr(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? mr(Object(n2), true).forEach(function(t3) {
      dr(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : mr(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function dr(e2, t2, n2) {
  return (t2 = function(e3) {
    var t3 = function(e4, t4) {
      if ("object" !== pr(e4) || null === e4)
        return e4;
      var n3 = e4[Symbol.toPrimitive];
      if (void 0 !== n3) {
        var r2 = n3.call(e4, t4 || "default");
        if ("object" !== pr(r2))
          return r2;
        throw new TypeError("@@toPrimitive must return a primitive value.");
      }
      return ("string" === t4 ? String : Number)(e4);
    }(e3, "string");
    return "symbol" === pr(t3) ? t3 : String(t3);
  }(t2)) in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function hr(e2) {
  var t2 = [], n2 = ln(e2, t2), r2 = Yt(fr, n2, function(e3) {
    var t3 = e3.prevState, r3 = e3.state;
    n2.onStateChange(vr({ prevState: t3, state: r3, refresh: c2, navigator: n2.navigator }, o2));
  }), o2 = function(e3) {
    var t3 = e3.store;
    return { setActiveItemId: function(e4) {
      t3.dispatch("setActiveItemId", e4);
    }, setQuery: function(e4) {
      t3.dispatch("setQuery", e4);
    }, setCollections: function(e4) {
      var n3 = 0, r3 = e4.map(function(e5) {
        return en(en({}, e5), {}, { items: nt(e5.items).map(function(e6) {
          return en(en({}, e6), {}, { __autocomplete_id: n3++ });
        }) });
      });
      t3.dispatch("setCollections", r3);
    }, setIsOpen: function(e4) {
      t3.dispatch("setIsOpen", e4);
    }, setStatus: function(e4) {
      t3.dispatch("setStatus", e4);
    }, setContext: function(e4) {
      t3.dispatch("setContext", e4);
    } };
  }({ store: r2 }), i2 = er(vr({ props: n2, refresh: c2, store: r2, navigator: n2.navigator }, o2));
  function c2() {
    return Rn(vr({ event: new Event("input"), nextState: { isOpen: r2.getState().isOpen }, props: n2, navigator: n2.navigator, query: r2.getState().query, refresh: c2, store: r2 }, o2));
  }
  if (e2.insights && !n2.plugins.some(function(e3) {
    return "aa.algoliaInsightsPlugin" === e3.name;
  })) {
    var a2 = "boolean" == typeof e2.insights ? {} : e2.insights;
    n2.plugins.push(qt(a2));
  }
  return n2.plugins.forEach(function(e3) {
    var r3;
    return null === (r3 = e3.subscribe) || void 0 === r3 ? void 0 : r3.call(e3, vr(vr({}, o2), {}, { navigator: n2.navigator, refresh: c2, onSelect: function(e4) {
      t2.push({ onSelect: e4 });
    }, onActive: function(e4) {
      t2.push({ onActive: e4 });
    }, onResolve: function(e4) {
      t2.push({ onResolve: e4 });
    } }));
  }), function(e3) {
    var t3, n3, r3 = e3.metadata, o3 = e3.environment;
    if (null === (t3 = o3.navigator) || void 0 === t3 || null === (n3 = t3.userAgent) || void 0 === n3 ? void 0 : n3.includes("Algolia Crawler")) {
      var i3 = o3.document.createElement("meta"), c3 = o3.document.querySelector("head");
      i3.name = "algolia:metadata", setTimeout(function() {
        i3.content = JSON.stringify(r3), c3.appendChild(i3);
      }, 0);
    }
  }({ metadata: ir({ plugins: n2.plugins, options: e2 }), environment: n2.environment }), vr(vr({ refresh: c2, navigator: n2.navigator }, i2), o2);
}
function yr(e2) {
  var t2 = e2.translations, n2 = (void 0 === t2 ? {} : t2).searchByText, r2 = void 0 === n2 ? "Search by" : n2;
  return Be.createElement("a", { href: "https://www.algolia.com/ref/docsearch/?utm_source=".concat(window.location.hostname, "&utm_medium=referral&utm_content=powered_by&utm_campaign=docsearch"), target: "_blank", rel: "noopener noreferrer" }, Be.createElement("span", { className: "DocSearch-Label" }, r2), Be.createElement("svg", { width: "77", height: "19", "aria-label": "Algolia", role: "img", id: "Layer_1", xmlns: "http://www.w3.org/2000/svg", viewBox: "0 0 2196.2 500" }, Be.createElement("defs", null, Be.createElement("style", null, ".cls-1,.cls-2{fill:#003dff;}.cls-2{fill-rule:evenodd;}")), Be.createElement("path", { className: "cls-2", d: "M1070.38,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Be.createElement("rect", { className: "cls-1", x: "1845.88", y: "104.73", width: "62.58", height: "277.9", rx: "5.9", ry: "5.9" }), Be.createElement("path", { className: "cls-2", d: "M1851.78,71.38h50.77c3.26,0,5.9-2.64,5.9-5.9V5.9c0-3.62-3.24-6.39-6.82-5.83l-50.77,7.95c-2.87,.45-4.99,2.92-4.99,5.83v51.62c0,3.26,2.64,5.9,5.9,5.9Z" }), Be.createElement("path", { className: "cls-2", d: "M1764.03,275.3V5.91c0-3.63-3.24-6.39-6.82-5.83l-50.46,7.94c-2.87,.45-4.99,2.93-4.99,5.84l.17,273.22c0,12.92,0,92.7,95.97,95.49,3.33,.1,6.09-2.58,6.09-5.91v-40.78c0-2.96-2.19-5.51-5.12-5.84-34.85-4.01-34.85-47.57-34.85-54.72Z" }), Be.createElement("path", { className: "cls-2", d: "M1631.95,142.72c-11.14-12.25-24.83-21.65-40.78-28.31-15.92-6.53-33.26-9.85-52.07-9.85-18.78,0-36.15,3.17-51.92,9.85-15.59,6.66-29.29,16.05-40.76,28.31-11.47,12.23-20.38,26.87-26.76,44.03-6.38,17.17-9.24,37.37-9.24,58.36,0,20.99,3.19,36.87,9.55,54.21,6.38,17.32,15.14,32.11,26.45,44.36,11.29,12.23,24.83,21.62,40.6,28.46,15.77,6.83,40.12,10.33,52.4,10.48,12.25,0,36.78-3.82,52.7-10.48,15.92-6.68,29.46-16.23,40.78-28.46,11.29-12.25,20.05-27.04,26.25-44.36,6.22-17.34,9.24-33.22,9.24-54.21,0-20.99-3.34-41.19-10.03-58.36-6.38-17.17-15.14-31.8-26.43-44.03Zm-44.43,163.75c-11.47,15.75-27.56,23.7-48.09,23.7-20.55,0-36.63-7.8-48.1-23.7-11.47-15.75-17.21-34.01-17.21-61.2,0-26.89,5.59-49.14,17.06-64.87,11.45-15.75,27.54-23.52,48.07-23.52,20.55,0,36.63,7.78,48.09,23.52,11.47,15.57,17.36,37.98,17.36,64.87,0,27.19-5.72,45.3-17.19,61.2Z" }), Be.createElement("path", { className: "cls-2", d: "M894.42,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Be.createElement("path", { className: "cls-2", d: "M2133.97,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-14.52,22.58-22.99,49.63-22.99,78.73,0,44.89,20.13,84.92,51.59,111.1,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47,1.23,0,2.46-.03,3.68-.09,.36-.02,.71-.05,1.07-.07,.87-.05,1.75-.11,2.62-.2,.34-.03,.68-.08,1.02-.12,.91-.1,1.82-.21,2.73-.34,.21-.03,.42-.07,.63-.1,32.89-5.07,61.56-30.82,70.9-62.81v57.83c0,3.26,2.64,5.9,5.9,5.9h50.42c3.26,0,5.9-2.64,5.9-5.9V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,206.92c-12.2,10.16-27.97,13.98-44.84,15.12-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-42.24,0-77.12-35.89-77.12-79.37,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33v142.83Z" }), Be.createElement("path", { className: "cls-2", d: "M1314.05,104.73h-49.33c-48.36,0-90.91,25.48-115.75,64.1-11.79,18.34-19.6,39.64-22.11,62.59-.58,5.3-.88,10.68-.88,16.14s.31,11.15,.93,16.59c4.28,38.09,23.14,71.61,50.66,94.52,2.93,2.6,6.05,4.98,9.31,7.14,12.86,8.49,28.11,13.47,44.52,13.47h0c17.99,0,34.61-5.93,48.16-15.97,16.29-11.58,28.88-28.54,34.48-47.75v50.26h-.11v11.08c0,21.84-5.71,38.27-17.34,49.36-11.61,11.08-31.04,16.63-58.25,16.63-11.12,0-28.79-.59-46.6-2.41-2.83-.29-5.46,1.5-6.27,4.22l-12.78,43.11c-1.02,3.46,1.27,7.02,4.83,7.53,21.52,3.08,42.52,4.68,54.65,4.68,48.91,0,85.16-10.75,108.89-32.21,21.48-19.41,33.15-48.89,35.2-88.52V110.63c0-3.26-2.64-5.9-5.9-5.9h-56.32Zm0,64.1s.65,139.13,0,143.36c-12.08,9.77-27.11,13.59-43.49,14.7-.16,.01-.33,.03-.49,.04-1.12,.07-2.24,.1-3.36,.1-1.32,0-2.63-.03-3.94-.1-40.41-2.11-74.52-37.26-74.52-79.38,0-10.25,1.96-20.01,5.42-28.98,11.22-29.12,38.77-49.74,71.06-49.74h49.33Z" }), Be.createElement("path", { className: "cls-1", d: "M249.83,0C113.3,0,2,110.09,.03,246.16c-2,138.19,110.12,252.7,248.33,253.5,42.68,.25,83.79-10.19,120.3-30.03,3.56-1.93,4.11-6.83,1.08-9.51l-23.38-20.72c-4.75-4.21-11.51-5.4-17.36-2.92-25.48,10.84-53.17,16.38-81.71,16.03-111.68-1.37-201.91-94.29-200.13-205.96,1.76-110.26,92-199.41,202.67-199.41h202.69V407.41l-115-102.18c-3.72-3.31-9.42-2.66-12.42,1.31-18.46,24.44-48.53,39.64-81.93,37.34-46.33-3.2-83.87-40.5-87.34-86.81-4.15-55.24,39.63-101.52,94-101.52,49.18,0,89.68,37.85,93.91,85.95,.38,4.28,2.31,8.27,5.52,11.12l29.95,26.55c3.4,3.01,8.79,1.17,9.63-3.3,2.16-11.55,2.92-23.58,2.07-35.92-4.82-70.34-61.8-126.93-132.17-131.26-80.68-4.97-148.13,58.14-150.27,137.25-2.09,77.1,61.08,143.56,138.19,145.26,32.19,.71,62.03-9.41,86.14-26.95l150.26,133.2c6.44,5.71,16.61,1.14,16.61-7.47V9.48C499.66,4.25,495.42,0,490.18,0H249.83Z" })));
}
function br(e2) {
  return Be.createElement("svg", { width: "15", height: "15", "aria-label": e2.ariaLabel, role: "img" }, Be.createElement("g", { fill: "none", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: "1.2" }, e2.children));
}
function gr(e2) {
  var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.selectText, o2 = void 0 === r2 ? "to select" : r2, i2 = n2.selectKeyAriaLabel, c2 = void 0 === i2 ? "Enter key" : i2, a2 = n2.navigateText, u2 = void 0 === a2 ? "to navigate" : a2, l2 = n2.navigateUpKeyAriaLabel, s2 = void 0 === l2 ? "Arrow up" : l2, f2 = n2.navigateDownKeyAriaLabel, p2 = void 0 === f2 ? "Arrow down" : f2, m2 = n2.closeText, v2 = void 0 === m2 ? "to close" : m2, d2 = n2.closeKeyAriaLabel, h2 = void 0 === d2 ? "Escape key" : d2, y2 = n2.searchByText, b2 = void 0 === y2 ? "Search by" : y2;
  return Be.createElement(Be.Fragment, null, Be.createElement("div", { className: "DocSearch-Logo" }, Be.createElement(yr, { translations: { searchByText: b2 } })), Be.createElement("ul", { className: "DocSearch-Commands" }, Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(br, { ariaLabel: c2 }, Be.createElement("path", { d: "M12 3.53088v3c0 1-1 2-2 2H4M7 11.53088l-3-3 3-3" }))), Be.createElement("span", { className: "DocSearch-Label" }, o2)), Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(br, { ariaLabel: p2 }, Be.createElement("path", { d: "M7.5 3.5v8M10.5 8.5l-3 3-3-3" }))), Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(br, { ariaLabel: s2 }, Be.createElement("path", { d: "M7.5 11.5v-8M10.5 6.5l-3-3-3 3" }))), Be.createElement("span", { className: "DocSearch-Label" }, u2)), Be.createElement("li", null, Be.createElement("kbd", { className: "DocSearch-Commands-Key" }, Be.createElement(br, { ariaLabel: h2 }, Be.createElement("path", { d: "M13.6167 8.936c-.1065.3583-.6883.962-1.4875.962-.7993 0-1.653-.9165-1.653-2.1258v-.5678c0-1.2548.7896-2.1016 1.653-2.1016.8634 0 1.3601.4778 1.4875 1.0724M9 6c-.1352-.4735-.7506-.9219-1.46-.8972-.7092.0246-1.344.57-1.344 1.2166s.4198.8812 1.3445.9805C8.465 7.3992 8.968 7.9337 9 8.5c.032.5663-.454 1.398-1.4595 1.398C6.6593 9.898 6 9 5.963 8.4851m-1.4748.5368c-.2635.5941-.8099.876-1.5443.876s-1.7073-.6248-1.7073-2.204v-.4603c0-1.0416.721-2.131 1.7073-2.131.9864 0 1.6425 1.031 1.5443 2.2492h-2.956" }))), Be.createElement("span", { className: "DocSearch-Label" }, v2))));
}
function _r(e2) {
  var t2 = e2.hit, n2 = e2.children;
  return Be.createElement("a", { href: t2.url }, n2);
}
function Or() {
  return Be.createElement("svg", { viewBox: "0 0 38 38", stroke: "currentColor", strokeOpacity: ".5" }, Be.createElement("g", { fill: "none", fillRule: "evenodd" }, Be.createElement("g", { transform: "translate(1 1)", strokeWidth: "2" }, Be.createElement("circle", { strokeOpacity: ".3", cx: "18", cy: "18", r: "18" }), Be.createElement("path", { d: "M36 18c0-9.94-8.06-18-18-18" }, Be.createElement("animateTransform", { attributeName: "transform", type: "rotate", from: "0 18 18", to: "360 18 18", dur: "1s", repeatCount: "indefinite" })))));
}
function Sr() {
  return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M3.18 6.6a8.23 8.23 0 1112.93 9.94h0a8.23 8.23 0 01-11.63 0" }), Be.createElement("path", { d: "M6.44 7.25H2.55V3.36M10.45 6v5.6M10.45 11.6L13 13" })));
}
function wr() {
  return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M10 10l5.09-5.09L10 10l5.09 5.09L10 10zm0 0L4.91 4.91 10 10l-5.09 5.09L10 10z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function jr() {
  return Be.createElement("svg", { className: "DocSearch-Hit-Select-Icon", width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M18 3v4c0 2-2 4-4 4H2" }), Be.createElement("path", { d: "M8 17l-6-6 6-6" })));
}
var Er = function() {
  return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M17 6v12c0 .52-.2 1-1 1H4c-.7 0-1-.33-1-1V2c0-.55.42-1 1-1h8l5 5zM14 8h-3.13c-.51 0-.87-.34-.87-.87V4", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
};
function Pr(e2) {
  switch (e2.type) {
    case "lvl1":
      return Be.createElement(Er, null);
    case "content":
      return Be.createElement(Dr, null);
    default:
      return Be.createElement(Ir, null);
  }
}
function Ir() {
  return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M13 13h4-4V8H7v5h6v4-4H7V8H3h4V3v5h6V3v5h4-4v5zm-6 0v4-4H3h4z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }));
}
function Dr() {
  return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M17 5H3h14zm0 5H3h14zm0 5H3h14z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function kr() {
  return Be.createElement("svg", { width: "20", height: "20", viewBox: "0 0 20 20" }, Be.createElement("path", { d: "M10 14.2L5 17l1-5.6-4-4 5.5-.7 2.5-5 2.5 5 5.6.8-4 4 .9 5.5z", stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinejoin: "round" }));
}
function Ar() {
  return Be.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M19 4.8a16 16 0 00-2-1.2m-3.3-1.2A16 16 0 001.1 4.7M16.7 8a12 12 0 00-2.8-1.4M10 6a12 12 0 00-6.7 2M12.3 14.7a4 4 0 00-4.5 0M14.5 11.4A8 8 0 0010 10M3 16L18 2M10 18h0" }));
}
function Cr() {
  return Be.createElement("svg", { width: "40", height: "40", viewBox: "0 0 20 20", fill: "none", fillRule: "evenodd", stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round" }, Be.createElement("path", { d: "M15.5 4.8c2 3 1.7 7-1 9.7h0l4.3 4.3-4.3-4.3a7.8 7.8 0 01-9.8 1m-2.2-2.2A7.8 7.8 0 0113.2 2.4M2 18L18 2" }));
}
function Nr(e2) {
  var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = n2.titleText, o2 = void 0 === r2 ? "Unable to fetch results" : r2, i2 = n2.helpText, c2 = void 0 === i2 ? "You might want to check your network connection." : i2;
  return Be.createElement("div", { className: "DocSearch-ErrorScreen" }, Be.createElement("div", { className: "DocSearch-Screen-Icon" }, Be.createElement(Ar, null)), Be.createElement("p", { className: "DocSearch-Title" }, o2), Be.createElement("p", { className: "DocSearch-Help" }, c2));
}
var xr = ["translations"];
function Tr(e2) {
  return function(e3) {
    if (Array.isArray(e3))
      return Rr(e3);
  }(e2) || function(e3) {
    if ("undefined" != typeof Symbol && null != e3[Symbol.iterator] || null != e3["@@iterator"])
      return Array.from(e3);
  }(e2) || function(e3, t2) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return Rr(e3, t2);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
    if ("Map" === n2 || "Set" === n2)
      return Array.from(e3);
    if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return Rr(e3, t2);
  }(e2) || function() {
    throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function Rr(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function qr(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function Lr(e2) {
  var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = qr(e2, xr), o2 = n2.noResultsText, i2 = void 0 === o2 ? "No results for" : o2, c2 = n2.suggestedQueryText, a2 = void 0 === c2 ? "Try searching for" : c2, u2 = n2.reportMissingResultsText, l2 = void 0 === u2 ? "Believe this query should return results?" : u2, s2 = n2.reportMissingResultsLinkText, f2 = void 0 === s2 ? "Let us know." : s2, p2 = r2.state.context.searchSuggestions;
  return Be.createElement("div", { className: "DocSearch-NoResults" }, Be.createElement("div", { className: "DocSearch-Screen-Icon" }, Be.createElement(Cr, null)), Be.createElement("p", { className: "DocSearch-Title" }, i2, ' "', Be.createElement("strong", null, r2.state.query), '"'), p2 && p2.length > 0 && Be.createElement("div", { className: "DocSearch-NoResults-Prefill-List" }, Be.createElement("p", { className: "DocSearch-Help" }, a2, ":"), Be.createElement("ul", null, p2.slice(0, 3).reduce(function(e3, t3) {
    return [].concat(Tr(e3), [Be.createElement("li", { key: t3 }, Be.createElement("button", { className: "DocSearch-Prefill", key: t3, type: "button", onClick: function() {
      r2.setQuery(t3.toLowerCase() + " "), r2.refresh(), r2.inputRef.current.focus();
    } }, t3))]);
  }, []))), r2.getMissingResultsUrl && Be.createElement("p", { className: "DocSearch-Help" }, "".concat(l2, " "), Be.createElement("a", { href: r2.getMissingResultsUrl({ query: r2.state.query }), target: "_blank", rel: "noopener noreferrer" }, f2)));
}
var Mr = ["hit", "attribute", "tagName"];
function Hr(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function Ur(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? Hr(Object(n2), true).forEach(function(t3) {
      Fr(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : Hr(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function Fr(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function Br(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function Vr(e2, t2) {
  return t2.split(".").reduce(function(e3, t3) {
    return null != e3 && e3[t3] ? e3[t3] : null;
  }, e2);
}
function Wr(e2) {
  var t2 = e2.hit, n2 = e2.attribute, r2 = e2.tagName;
  return _(void 0 === r2 ? "span" : r2, Ur(Ur({}, Br(e2, Mr)), {}, { dangerouslySetInnerHTML: { __html: Vr(t2, "_snippetResult.".concat(n2, ".value")) || Vr(t2, n2) } }));
}
function Kr(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null == n2)
      return;
    var r2, o2, i2 = [], c2 = true, a2 = false;
    try {
      for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        c2 || null == n2.return || n2.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return i2;
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return zr(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
    if ("Map" === n2 || "Set" === n2)
      return Array.from(e3);
    if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return zr(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function zr(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function Jr() {
  return Jr = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, Jr.apply(this, arguments);
}
function $r(e2) {
  return e2.collection && 0 !== e2.collection.items.length ? Be.createElement("section", { className: "DocSearch-Hits" }, Be.createElement("div", { className: "DocSearch-Hit-source" }, e2.title), Be.createElement("ul", e2.getListProps(), e2.collection.items.map(function(t2, n2) {
    return Be.createElement(Qr, Jr({ key: [e2.title, t2.objectID].join(":"), item: t2, index: n2 }, e2));
  }))) : null;
}
function Qr(e2) {
  var t2 = e2.item, n2 = e2.index, r2 = e2.renderIcon, o2 = e2.renderAction, i2 = e2.getItemProps, c2 = e2.onItemClick, a2 = e2.collection, u2 = e2.hitComponent, l2 = Kr(Be.useState(false), 2), s2 = l2[0], f2 = l2[1], p2 = Kr(Be.useState(false), 2), m2 = p2[0], v2 = p2[1], d2 = Be.useRef(null), h2 = u2;
  return Be.createElement("li", Jr({ className: ["DocSearch-Hit", t2.__docsearch_parent && "DocSearch-Hit--Child", s2 && "DocSearch-Hit--deleting", m2 && "DocSearch-Hit--favoriting"].filter(Boolean).join(" "), onTransitionEnd: function() {
    d2.current && d2.current();
  } }, i2({ item: t2, source: a2.source, onClick: function(e3) {
    c2(t2, e3);
  } })), Be.createElement(h2, { hit: t2 }, Be.createElement("div", { className: "DocSearch-Hit-Container" }, r2({ item: t2, index: n2 }), t2.hierarchy[t2.type] && "lvl1" === t2.type && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(Wr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.lvl1" }), t2.content && Be.createElement(Wr, { className: "DocSearch-Hit-path", hit: t2, attribute: "content" })), t2.hierarchy[t2.type] && ("lvl2" === t2.type || "lvl3" === t2.type || "lvl4" === t2.type || "lvl5" === t2.type || "lvl6" === t2.type) && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(Wr, { className: "DocSearch-Hit-title", hit: t2, attribute: "hierarchy.".concat(t2.type) }), Be.createElement(Wr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), "content" === t2.type && Be.createElement("div", { className: "DocSearch-Hit-content-wrapper" }, Be.createElement(Wr, { className: "DocSearch-Hit-title", hit: t2, attribute: "content" }), Be.createElement(Wr, { className: "DocSearch-Hit-path", hit: t2, attribute: "hierarchy.lvl1" })), o2({ item: t2, runDeleteTransition: function(e3) {
    f2(true), d2.current = e3;
  }, runFavoriteTransition: function(e3) {
    v2(true), d2.current = e3;
  } }))));
}
function Zr(e2, t2, n2) {
  return e2.reduce(function(e3, r2) {
    var o2 = t2(r2);
    return e3.hasOwnProperty(o2) || (e3[o2] = []), e3[o2].length < (n2 || 5) && e3[o2].push(r2), e3;
  }, {});
}
function Yr(e2) {
  return e2;
}
function Gr(e2) {
  return 1 === e2.button || e2.altKey || e2.ctrlKey || e2.metaKey || e2.shiftKey;
}
function Xr() {
}
var eo = /(<mark>|<\/mark>)/g, to = RegExp(eo.source);
function no(e2) {
  var t2, n2, r2 = e2;
  if (!r2.__docsearch_parent && !e2._highlightResult)
    return e2.hierarchy.lvl0;
  var o2 = ((r2.__docsearch_parent ? null === (t2 = r2.__docsearch_parent) || void 0 === t2 || null === (t2 = t2._highlightResult) || void 0 === t2 || null === (t2 = t2.hierarchy) || void 0 === t2 ? void 0 : t2.lvl0 : null === (n2 = e2._highlightResult) || void 0 === n2 || null === (n2 = n2.hierarchy) || void 0 === n2 ? void 0 : n2.lvl0) || {}).value;
  return o2 && to.test(o2) ? o2.replace(eo, "") : o2;
}
function ro() {
  return ro = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, ro.apply(this, arguments);
}
function oo(e2) {
  return Be.createElement("div", { className: "DocSearch-Dropdown-Container" }, e2.state.collections.map(function(t2) {
    if (0 === t2.items.length)
      return null;
    var n2 = no(t2.items[0]);
    return Be.createElement($r, ro({}, e2, { key: t2.source.sourceId, title: n2, collection: t2, renderIcon: function(e3) {
      var n3, r2 = e3.item, o2 = e3.index;
      return Be.createElement(Be.Fragment, null, r2.__docsearch_parent && Be.createElement("svg", { className: "DocSearch-Hit-Tree", viewBox: "0 0 24 54" }, Be.createElement("g", { stroke: "currentColor", fill: "none", fillRule: "evenodd", strokeLinecap: "round", strokeLinejoin: "round" }, r2.__docsearch_parent !== (null === (n3 = t2.items[o2 + 1]) || void 0 === n3 ? void 0 : n3.__docsearch_parent) ? Be.createElement("path", { d: "M8 6v21M20 27H8.3" }) : Be.createElement("path", { d: "M8 6v42M20 27H8.3" }))), Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(Pr, { type: r2.type })));
    }, renderAction: function() {
      return Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement(jr, null));
    } }));
  }), e2.resultsFooterComponent && Be.createElement("section", { className: "DocSearch-HitsFooter" }, Be.createElement(e2.resultsFooterComponent, { state: e2.state })));
}
var io = ["translations"];
function co() {
  return co = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, co.apply(this, arguments);
}
function ao(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function uo(e2) {
  var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = ao(e2, io), o2 = n2.recentSearchesTitle, i2 = void 0 === o2 ? "Recent" : o2, c2 = n2.noRecentSearchesText, a2 = void 0 === c2 ? "No recent searches" : c2, u2 = n2.saveRecentSearchButtonTitle, l2 = void 0 === u2 ? "Save this search" : u2, s2 = n2.removeRecentSearchButtonTitle, f2 = void 0 === s2 ? "Remove this search from history" : s2, p2 = n2.favoriteSearchesTitle, m2 = void 0 === p2 ? "Favorite" : p2, v2 = n2.removeFavoriteSearchButtonTitle, d2 = void 0 === v2 ? "Remove this search from favorites" : v2;
  return "idle" === r2.state.status && false === r2.hasCollections ? r2.disableUserPersonalization ? null : Be.createElement("div", { className: "DocSearch-StartScreen" }, Be.createElement("p", { className: "DocSearch-Help" }, a2)) : false === r2.hasCollections ? null : Be.createElement("div", { className: "DocSearch-Dropdown-Container" }, Be.createElement($r, co({}, r2, { title: i2, collection: r2.state.collections[0], renderIcon: function() {
    return Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(Sr, null));
  }, renderAction: function(e3) {
    var t3 = e3.item, n3 = e3.runFavoriteTransition, o3 = e3.runDeleteTransition;
    return Be.createElement(Be.Fragment, null, Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: l2, type: "submit", onClick: function(e4) {
      e4.preventDefault(), e4.stopPropagation(), n3(function() {
        r2.favoriteSearches.add(t3), r2.recentSearches.remove(t3), r2.refresh();
      });
    } }, Be.createElement(kr, null))), Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: f2, type: "submit", onClick: function(e4) {
      e4.preventDefault(), e4.stopPropagation(), o3(function() {
        r2.recentSearches.remove(t3), r2.refresh();
      });
    } }, Be.createElement(wr, null))));
  } })), Be.createElement($r, co({}, r2, { title: m2, collection: r2.state.collections[1], renderIcon: function() {
    return Be.createElement("div", { className: "DocSearch-Hit-icon" }, Be.createElement(kr, null));
  }, renderAction: function(e3) {
    var t3 = e3.item, n3 = e3.runDeleteTransition;
    return Be.createElement("div", { className: "DocSearch-Hit-action" }, Be.createElement("button", { className: "DocSearch-Hit-action-button", title: d2, type: "submit", onClick: function(e4) {
      e4.preventDefault(), e4.stopPropagation(), n3(function() {
        r2.favoriteSearches.remove(t3), r2.refresh();
      });
    } }, Be.createElement(wr, null)));
  } })));
}
var lo = ["translations"];
function so() {
  return so = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, so.apply(this, arguments);
}
function fo(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
var po = Be.memo(function(e2) {
  var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = fo(e2, lo);
  if ("error" === r2.state.status)
    return Be.createElement(Nr, { translations: null == n2 ? void 0 : n2.errorScreen });
  var o2 = r2.state.collections.some(function(e3) {
    return e3.items.length > 0;
  });
  return r2.state.query ? false === o2 ? Be.createElement(Lr, so({}, r2, { translations: null == n2 ? void 0 : n2.noResultsScreen })) : Be.createElement(oo, r2) : Be.createElement(uo, so({}, r2, { hasCollections: o2, translations: null == n2 ? void 0 : n2.startScreen }));
}, function(e2, t2) {
  return "loading" === t2.state.status || "stalled" === t2.state.status;
}), mo = ["translations"];
function vo() {
  return vo = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, vo.apply(this, arguments);
}
function ho(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function yo(e2) {
  var t2 = e2.translations, n2 = void 0 === t2 ? {} : t2, r2 = ho(e2, mo), o2 = n2.resetButtonTitle, i2 = void 0 === o2 ? "Clear the query" : o2, c2 = n2.resetButtonAriaLabel, a2 = void 0 === c2 ? "Clear the query" : c2, u2 = n2.cancelButtonText, l2 = void 0 === u2 ? "Cancel" : u2, s2 = n2.cancelButtonAriaLabel, f2 = void 0 === s2 ? "Cancel" : s2, p2 = r2.getFormProps({ inputElement: r2.inputRef.current }).onReset;
  return Be.useEffect(function() {
    r2.autoFocus && r2.inputRef.current && r2.inputRef.current.focus();
  }, [r2.autoFocus, r2.inputRef]), Be.useEffect(function() {
    r2.isFromSelection && r2.inputRef.current && r2.inputRef.current.select();
  }, [r2.isFromSelection, r2.inputRef]), Be.createElement(Be.Fragment, null, Be.createElement("form", { className: "DocSearch-Form", onSubmit: function(e3) {
    e3.preventDefault();
  }, onReset: p2 }, Be.createElement("label", vo({ className: "DocSearch-MagnifierLabel" }, r2.getLabelProps()), Be.createElement(We, null)), Be.createElement("div", { className: "DocSearch-LoadingIndicator" }, Be.createElement(Or, null)), Be.createElement("input", vo({ className: "DocSearch-Input", ref: r2.inputRef }, r2.getInputProps({ inputElement: r2.inputRef.current, autoFocus: r2.autoFocus, maxLength: 64 }))), Be.createElement("button", { type: "reset", title: i2, className: "DocSearch-Reset", "aria-label": a2, hidden: !r2.state.query }, Be.createElement(wr, null))), Be.createElement("button", { className: "DocSearch-Cancel", type: "reset", "aria-label": f2, onClick: r2.onClose }, l2));
}
var bo = ["_highlightResult", "_snippetResult"];
function go(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function _o(e2) {
  return false === function() {
    var e3 = "__TEST_KEY__";
    try {
      return localStorage.setItem(e3, ""), localStorage.removeItem(e3), true;
    } catch (e4) {
      return false;
    }
  }() ? { setItem: function() {
  }, getItem: function() {
    return [];
  } } : { setItem: function(t2) {
    return window.localStorage.setItem(e2, JSON.stringify(t2));
  }, getItem: function() {
    var t2 = window.localStorage.getItem(e2);
    return t2 ? JSON.parse(t2) : [];
  } };
}
function Oo(e2) {
  var t2 = e2.key, n2 = e2.limit, r2 = void 0 === n2 ? 5 : n2, o2 = _o(t2), i2 = o2.getItem().slice(0, r2);
  return { add: function(e3) {
    var t3 = e3, n3 = (t3._highlightResult, t3._snippetResult, go(t3, bo)), c2 = i2.findIndex(function(e4) {
      return e4.objectID === n3.objectID;
    });
    c2 > -1 && i2.splice(c2, 1), i2.unshift(n3), i2 = i2.slice(0, r2), o2.setItem(i2);
  }, remove: function(e3) {
    i2 = i2.filter(function(t3) {
      return t3.objectID !== e3.objectID;
    }), o2.setItem(i2);
  }, getAll: function() {
    return i2;
  } };
}
var So = ["facetName", "facetQuery"];
function wo(e2) {
  var t2, n2 = "algoliasearch-client-js-".concat(e2.key), r2 = function() {
    return void 0 === t2 && (t2 = e2.localStorage || window.localStorage), t2;
  }, o2 = function() {
    return JSON.parse(r2().getItem(n2) || "{}");
  }, i2 = function(e3) {
    r2().setItem(n2, JSON.stringify(e3));
  }, a2 = function() {
    var t3 = e2.timeToLive ? 1e3 * e2.timeToLive : null, n3 = o2(), r3 = Object.fromEntries(Object.entries(n3).filter(function(e3) {
      return void 0 !== c(e3, 2)[1].timestamp;
    }));
    if (i2(r3), t3) {
      var a3 = Object.fromEntries(Object.entries(r3).filter(function(e3) {
        var n4 = c(e3, 2)[1], r4 = (/* @__PURE__ */ new Date()).getTime();
        return !(n4.timestamp + t3 < r4);
      }));
      i2(a3);
    }
  };
  return { get: function(e3, t3) {
    var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return Promise.resolve().then(function() {
      a2();
      var t4 = JSON.stringify(e3);
      return o2()[t4];
    }).then(function(e4) {
      return Promise.all([e4 ? e4.value : t3(), void 0 !== e4]);
    }).then(function(e4) {
      var t4 = c(e4, 2), r3 = t4[0], o3 = t4[1];
      return Promise.all([r3, o3 || n3.miss(r3)]);
    }).then(function(e4) {
      return c(e4, 1)[0];
    });
  }, set: function(e3, t3) {
    return Promise.resolve().then(function() {
      var i3 = o2();
      return i3[JSON.stringify(e3)] = { timestamp: (/* @__PURE__ */ new Date()).getTime(), value: t3 }, r2().setItem(n2, JSON.stringify(i3)), t3;
    });
  }, delete: function(e3) {
    return Promise.resolve().then(function() {
      var t3 = o2();
      delete t3[JSON.stringify(e3)], r2().setItem(n2, JSON.stringify(t3));
    });
  }, clear: function() {
    return Promise.resolve().then(function() {
      r2().removeItem(n2);
    });
  } };
}
function jo(e2) {
  var t2 = a(e2.caches), n2 = t2.shift();
  return void 0 === n2 ? { get: function(e3, t3) {
    var n3 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return t3().then(function(e4) {
      return Promise.all([e4, n3.miss(e4)]);
    }).then(function(e4) {
      return c(e4, 1)[0];
    });
  }, set: function(e3, t3) {
    return Promise.resolve(t3);
  }, delete: function(e3) {
    return Promise.resolve();
  }, clear: function() {
    return Promise.resolve();
  } } : { get: function(e3, r2) {
    var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } };
    return n2.get(e3, r2, o2).catch(function() {
      return jo({ caches: t2 }).get(e3, r2, o2);
    });
  }, set: function(e3, r2) {
    return n2.set(e3, r2).catch(function() {
      return jo({ caches: t2 }).set(e3, r2);
    });
  }, delete: function(e3) {
    return n2.delete(e3).catch(function() {
      return jo({ caches: t2 }).delete(e3);
    });
  }, clear: function() {
    return n2.clear().catch(function() {
      return jo({ caches: t2 }).clear();
    });
  } };
}
function Eo() {
  var e2 = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : { serializable: true }, t2 = {};
  return { get: function(n2, r2) {
    var o2 = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : { miss: function() {
      return Promise.resolve();
    } }, i2 = JSON.stringify(n2);
    if (i2 in t2)
      return Promise.resolve(e2.serializable ? JSON.parse(t2[i2]) : t2[i2]);
    var c2 = r2(), a2 = o2 && o2.miss || function() {
      return Promise.resolve();
    };
    return c2.then(function(e3) {
      return a2(e3);
    }).then(function() {
      return c2;
    });
  }, set: function(n2, r2) {
    return t2[JSON.stringify(n2)] = e2.serializable ? JSON.stringify(r2) : r2, Promise.resolve(r2);
  }, delete: function(e3) {
    return delete t2[JSON.stringify(e3)], Promise.resolve();
  }, clear: function() {
    return t2 = {}, Promise.resolve();
  } };
}
function Po(e2) {
  for (var t2 = e2.length - 1; t2 > 0; t2--) {
    var n2 = Math.floor(Math.random() * (t2 + 1)), r2 = e2[t2];
    e2[t2] = e2[n2], e2[n2] = r2;
  }
  return e2;
}
function Io(e2, t2) {
  return t2 ? (Object.keys(t2).forEach(function(n2) {
    e2[n2] = t2[n2](e2);
  }), e2) : e2;
}
function Do(e2) {
  for (var t2 = arguments.length, n2 = new Array(t2 > 1 ? t2 - 1 : 0), r2 = 1; r2 < t2; r2++)
    n2[r2 - 1] = arguments[r2];
  var o2 = 0;
  return e2.replace(/%s/g, function() {
    return encodeURIComponent(n2[o2++]);
  });
}
var ko = { WithinQueryParameters: 0, WithinHeaders: 1 };
function Ao(e2, t2) {
  var n2 = e2 || {}, r2 = n2.data || {};
  return Object.keys(n2).forEach(function(e3) {
    -1 === ["timeout", "headers", "queryParameters", "data", "cacheable"].indexOf(e3) && (r2[e3] = n2[e3]);
  }), { data: Object.entries(r2).length > 0 ? r2 : void 0, timeout: n2.timeout || t2, headers: n2.headers || {}, queryParameters: n2.queryParameters || {}, cacheable: n2.cacheable };
}
var Co = { Read: 1, Write: 2, Any: 3 }, No = 1, xo = 2, To = 3;
function Ro(e2) {
  var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : No;
  return t(t({}, e2), {}, { status: n2, lastUpdate: Date.now() });
}
function qo(e2) {
  return "string" == typeof e2 ? { protocol: "https", url: e2, accept: Co.Any } : { protocol: e2.protocol || "https", url: e2.url, accept: e2.accept || Co.Any };
}
var Lo = "GET", Mo = "POST";
function Ho(e2, t2) {
  return Promise.all(t2.map(function(t3) {
    return e2.get(t3, function() {
      return Promise.resolve(Ro(t3));
    });
  })).then(function(e3) {
    var n2 = e3.filter(function(e4) {
      return function(e5) {
        return e5.status === No || Date.now() - e5.lastUpdate > 12e4;
      }(e4);
    }), r2 = e3.filter(function(e4) {
      return function(e5) {
        return e5.status === To && Date.now() - e5.lastUpdate <= 12e4;
      }(e4);
    }), o2 = [].concat(a(n2), a(r2));
    return { getTimeout: function(e4, t3) {
      return (0 === r2.length && 0 === e4 ? 1 : r2.length + 3 + e4) * t3;
    }, statelessHosts: o2.length > 0 ? o2.map(function(e4) {
      return qo(e4);
    }) : t2 };
  });
}
function Uo(e2, n2, r2, o2) {
  var i2 = [], c2 = function(e3, n3) {
    if (e3.method === Lo || void 0 === e3.data && void 0 === n3.data)
      return;
    var r3 = Array.isArray(e3.data) ? e3.data : t(t({}, e3.data), n3.data);
    return JSON.stringify(r3);
  }(r2, o2), u2 = function(e3, n3) {
    var r3 = t(t({}, e3.headers), n3.headers), o3 = {};
    return Object.keys(r3).forEach(function(e4) {
      var t2 = r3[e4];
      o3[e4.toLowerCase()] = t2;
    }), o3;
  }(e2, o2), l2 = r2.method, s2 = r2.method !== Lo ? {} : t(t({}, r2.data), o2.data), f2 = t(t(t({ "x-algolia-agent": e2.userAgent.value }, e2.queryParameters), s2), o2.queryParameters), p2 = 0, m2 = function t2(n3, a2) {
    var s3 = n3.pop();
    if (void 0 === s3)
      throw { name: "RetryError", message: "Unreachable hosts - your application id may be incorrect. If the error persists, contact support@algolia.com.", transporterStackTrace: Wo(i2) };
    var m3 = { data: c2, headers: u2, method: l2, url: Bo(s3, r2.path, f2), connectTimeout: a2(p2, e2.timeouts.connect), responseTimeout: a2(p2, o2.timeout) }, v2 = function(e3) {
      var t3 = { request: m3, response: e3, host: s3, triesLeft: n3.length };
      return i2.push(t3), t3;
    }, d2 = { onSuccess: function(e3) {
      return function(e4) {
        try {
          return JSON.parse(e4.content);
        } catch (t3) {
          throw /* @__PURE__ */ function(e5, t4) {
            return { name: "DeserializationError", message: e5, response: t4 };
          }(t3.message, e4);
        }
      }(e3);
    }, onRetry: function(r3) {
      var o3 = v2(r3);
      return r3.isTimedOut && p2++, Promise.all([e2.logger.info("Retryable failure", Ko(o3)), e2.hostsCache.set(s3, Ro(s3, r3.isTimedOut ? To : xo))]).then(function() {
        return t2(n3, a2);
      });
    }, onFail: function(e3) {
      throw v2(e3), function(e4, t3) {
        var n4 = e4.content, r3 = e4.status, o3 = n4;
        try {
          o3 = JSON.parse(n4).message;
        } catch (e5) {
        }
        return /* @__PURE__ */ function(e5, t4, n5) {
          return { name: "ApiError", message: e5, status: t4, transporterStackTrace: n5 };
        }(o3, r3, t3);
      }(e3, Wo(i2));
    } };
    return e2.requester.send(m3).then(function(e3) {
      return function(e4, t3) {
        return function(e5) {
          var t4 = e5.status;
          return e5.isTimedOut || function(e6) {
            var t5 = e6.isTimedOut, n4 = e6.status;
            return !t5 && 0 == ~~n4;
          }(e5) || 2 != ~~(t4 / 100) && 4 != ~~(t4 / 100);
        }(e4) ? t3.onRetry(e4) : 2 == ~~(e4.status / 100) ? t3.onSuccess(e4) : t3.onFail(e4);
      }(e3, d2);
    });
  };
  return Ho(e2.hostsCache, n2).then(function(e3) {
    return m2(a(e3.statelessHosts).reverse(), e3.getTimeout);
  });
}
function Fo(e2) {
  var t2 = { value: "Algolia for JavaScript (".concat(e2, ")"), add: function(e3) {
    var n2 = "; ".concat(e3.segment).concat(void 0 !== e3.version ? " (".concat(e3.version, ")") : "");
    return -1 === t2.value.indexOf(n2) && (t2.value = "".concat(t2.value).concat(n2)), t2;
  } };
  return t2;
}
function Bo(e2, t2, n2) {
  var r2 = Vo(n2), o2 = "".concat(e2.protocol, "://").concat(e2.url, "/").concat("/" === t2.charAt(0) ? t2.substr(1) : t2);
  return r2.length && (o2 += "?".concat(r2)), o2;
}
function Vo(e2) {
  return Object.keys(e2).map(function(t2) {
    return Do("%s=%s", t2, (n2 = e2[t2], "[object Object]" === Object.prototype.toString.call(n2) || "[object Array]" === Object.prototype.toString.call(n2) ? JSON.stringify(e2[t2]) : e2[t2]));
    var n2;
  }).join("&");
}
function Wo(e2) {
  return e2.map(function(e3) {
    return Ko(e3);
  });
}
function Ko(e2) {
  var n2 = e2.request.headers["x-algolia-api-key"] ? { "x-algolia-api-key": "*****" } : {};
  return t(t({}, e2), {}, { request: t(t({}, e2.request), {}, { headers: t(t({}, e2.request.headers), n2) }) });
}
var zo = function(e2) {
  var n2 = e2.appId, r2 = /* @__PURE__ */ function(e3, t2, n3) {
    var r3 = { "x-algolia-api-key": n3, "x-algolia-application-id": t2 };
    return { headers: function() {
      return e3 === ko.WithinHeaders ? r3 : {};
    }, queryParameters: function() {
      return e3 === ko.WithinQueryParameters ? r3 : {};
    } };
  }(void 0 !== e2.authMode ? e2.authMode : ko.WithinHeaders, n2, e2.apiKey), o2 = function(e3) {
    var t2 = e3.hostsCache, n3 = e3.logger, r3 = e3.requester, o3 = e3.requestsCache, i3 = e3.responsesCache, a2 = e3.timeouts, u2 = e3.userAgent, l2 = e3.hosts, s2 = e3.queryParameters, f2 = { hostsCache: t2, logger: n3, requester: r3, requestsCache: o3, responsesCache: i3, timeouts: a2, userAgent: u2, headers: e3.headers, queryParameters: s2, hosts: l2.map(function(e4) {
      return qo(e4);
    }), read: function(e4, t3) {
      var n4 = Ao(t3, f2.timeouts.read), r4 = function() {
        return Uo(f2, f2.hosts.filter(function(e5) {
          return 0 != (e5.accept & Co.Read);
        }), e4, n4);
      };
      if (true !== (void 0 !== n4.cacheable ? n4.cacheable : e4.cacheable))
        return r4();
      var o4 = { request: e4, mappedRequestOptions: n4, transporter: { queryParameters: f2.queryParameters, headers: f2.headers } };
      return f2.responsesCache.get(o4, function() {
        return f2.requestsCache.get(o4, function() {
          return f2.requestsCache.set(o4, r4()).then(function(e5) {
            return Promise.all([f2.requestsCache.delete(o4), e5]);
          }, function(e5) {
            return Promise.all([f2.requestsCache.delete(o4), Promise.reject(e5)]);
          }).then(function(e5) {
            var t4 = c(e5, 2);
            return t4[0], t4[1];
          });
        });
      }, { miss: function(e5) {
        return f2.responsesCache.set(o4, e5);
      } });
    }, write: function(e4, t3) {
      return Uo(f2, f2.hosts.filter(function(e5) {
        return 0 != (e5.accept & Co.Write);
      }), e4, Ao(t3, f2.timeouts.write));
    } };
    return f2;
  }(t(t({ hosts: [{ url: "".concat(n2, "-dsn.algolia.net"), accept: Co.Read }, { url: "".concat(n2, ".algolia.net"), accept: Co.Write }].concat(Po([{ url: "".concat(n2, "-1.algolianet.com") }, { url: "".concat(n2, "-2.algolianet.com") }, { url: "".concat(n2, "-3.algolianet.com") }])) }, e2), {}, { headers: t(t(t({}, r2.headers()), { "content-type": "application/x-www-form-urlencoded" }), e2.headers), queryParameters: t(t({}, r2.queryParameters()), e2.queryParameters) })), i2 = { transporter: o2, appId: n2, addAlgoliaAgent: function(e3, t2) {
    o2.userAgent.add({ segment: e3, version: t2 });
  }, clearCache: function() {
    return Promise.all([o2.requestsCache.clear(), o2.responsesCache.clear()]).then(function() {
    });
  } };
  return Io(i2, e2.methods);
}, Jo = function(e2) {
  return function(t2, n2) {
    return t2.method === Lo ? e2.transporter.read(t2, n2) : e2.transporter.write(t2, n2);
  };
}, $o = function(e2) {
  return function(t2) {
    var n2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {}, r2 = { transporter: e2.transporter, appId: e2.appId, indexName: t2 };
    return Io(r2, n2.methods);
  };
}, Qo = function(e2) {
  return function(n2, r2) {
    var o2 = n2.map(function(e3) {
      return t(t({}, e3), {}, { params: Vo(e3.params || {}) });
    });
    return e2.transporter.read({ method: Mo, path: "1/indexes/*/queries", data: { requests: o2 }, cacheable: true }, r2);
  };
}, Zo = function(e2) {
  return function(n2, r2) {
    return Promise.all(n2.map(function(n3) {
      var o2 = n3.params, c2 = o2.facetName, a2 = o2.facetQuery, u2 = i(o2, So);
      return $o(e2)(n3.indexName, { methods: { searchForFacetValues: Xo } }).searchForFacetValues(c2, a2, t(t({}, r2), u2));
    }));
  };
}, Yo = function(e2) {
  return function(t2, n2, r2) {
    return e2.transporter.read({ method: Mo, path: Do("1/answers/%s/prediction", e2.indexName), data: { query: t2, queryLanguages: n2 }, cacheable: true }, r2);
  };
}, Go = function(e2) {
  return function(t2, n2) {
    return e2.transporter.read({ method: Mo, path: Do("1/indexes/%s/query", e2.indexName), data: { query: t2 }, cacheable: true }, n2);
  };
}, Xo = function(e2) {
  return function(t2, n2, r2) {
    return e2.transporter.read({ method: Mo, path: Do("1/indexes/%s/facets/%s/query", e2.indexName, t2), data: { facetQuery: n2 }, cacheable: true }, r2);
  };
}, ei = 1, ti = 2, ni = 3;
function ri(e2, n2, r2) {
  var o2, i2 = { appId: e2, apiKey: n2, timeouts: { connect: 1, read: 2, write: 30 }, requester: { send: function(e3) {
    return new Promise(function(t2) {
      var n3 = new XMLHttpRequest();
      n3.open(e3.method, e3.url, true), Object.keys(e3.headers).forEach(function(t3) {
        return n3.setRequestHeader(t3, e3.headers[t3]);
      });
      var r3, o3 = function(e4, r4) {
        return setTimeout(function() {
          n3.abort(), t2({ status: 0, content: r4, isTimedOut: true });
        }, 1e3 * e4);
      }, i3 = o3(e3.connectTimeout, "Connection timeout");
      n3.onreadystatechange = function() {
        n3.readyState > n3.OPENED && void 0 === r3 && (clearTimeout(i3), r3 = o3(e3.responseTimeout, "Socket timeout"));
      }, n3.onerror = function() {
        0 === n3.status && (clearTimeout(i3), clearTimeout(r3), t2({ content: n3.responseText || "Network request failed", status: n3.status, isTimedOut: false }));
      }, n3.onload = function() {
        clearTimeout(i3), clearTimeout(r3), t2({ content: n3.responseText, status: n3.status, isTimedOut: false });
      }, n3.send(e3.data);
    });
  } }, logger: (o2 = ni, { debug: function(e3, t2) {
    return ei >= o2 && console.debug(e3, t2), Promise.resolve();
  }, info: function(e3, t2) {
    return ti >= o2 && console.info(e3, t2), Promise.resolve();
  }, error: function(e3, t2) {
    return console.error(e3, t2), Promise.resolve();
  } }), responsesCache: Eo(), requestsCache: Eo({ serializable: false }), hostsCache: jo({ caches: [wo({ key: "".concat("4.19.1", "-").concat(e2) }), Eo()] }), userAgent: Fo("4.19.1").add({ segment: "Browser", version: "lite" }), authMode: ko.WithinQueryParameters };
  return zo(t(t(t({}, i2), r2), {}, { methods: { search: Qo, searchForFacetValues: Zo, multipleQueries: Qo, multipleSearchForFacetValues: Zo, customRequest: Jo, initIndex: function(e3) {
    return function(t2) {
      return $o(e3)(t2, { methods: { search: Go, searchForFacetValues: Xo, findAnswers: Yo } });
    };
  } } }));
}
ri.version = "4.19.1";
var oi = ["footer", "searchBox"];
function ii() {
  return ii = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, ii.apply(this, arguments);
}
function ci(e2, t2) {
  var n2 = Object.keys(e2);
  if (Object.getOwnPropertySymbols) {
    var r2 = Object.getOwnPropertySymbols(e2);
    t2 && (r2 = r2.filter(function(t3) {
      return Object.getOwnPropertyDescriptor(e2, t3).enumerable;
    })), n2.push.apply(n2, r2);
  }
  return n2;
}
function ai(e2) {
  for (var t2 = 1; t2 < arguments.length; t2++) {
    var n2 = null != arguments[t2] ? arguments[t2] : {};
    t2 % 2 ? ci(Object(n2), true).forEach(function(t3) {
      ui(e2, t3, n2[t3]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(e2, Object.getOwnPropertyDescriptors(n2)) : ci(Object(n2)).forEach(function(t3) {
      Object.defineProperty(e2, t3, Object.getOwnPropertyDescriptor(n2, t3));
    });
  }
  return e2;
}
function ui(e2, t2, n2) {
  return t2 in e2 ? Object.defineProperty(e2, t2, { value: n2, enumerable: true, configurable: true, writable: true }) : e2[t2] = n2, e2;
}
function li(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null == n2)
      return;
    var r2, o2, i2 = [], c2 = true, a2 = false;
    try {
      for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        c2 || null == n2.return || n2.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return i2;
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return si(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
    if ("Map" === n2 || "Set" === n2)
      return Array.from(e3);
    if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return si(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function si(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function fi(e2, t2) {
  if (null == e2)
    return {};
  var n2, r2, o2 = function(e3, t3) {
    if (null == e3)
      return {};
    var n3, r3, o3 = {}, i3 = Object.keys(e3);
    for (r3 = 0; r3 < i3.length; r3++)
      n3 = i3[r3], t3.indexOf(n3) >= 0 || (o3[n3] = e3[n3]);
    return o3;
  }(e2, t2);
  if (Object.getOwnPropertySymbols) {
    var i2 = Object.getOwnPropertySymbols(e2);
    for (r2 = 0; r2 < i2.length; r2++)
      n2 = i2[r2], t2.indexOf(n2) >= 0 || Object.prototype.propertyIsEnumerable.call(e2, n2) && (o2[n2] = e2[n2]);
  }
  return o2;
}
function pi(e2) {
  var t2 = e2.appId, n2 = e2.apiKey, r2 = e2.indexName, o2 = e2.placeholder, i2 = void 0 === o2 ? "Search docs" : o2, c2 = e2.searchParameters, a2 = e2.maxResultsPerGroup, u2 = e2.onClose, l2 = void 0 === u2 ? Xr : u2, s2 = e2.transformItems, f2 = void 0 === s2 ? Yr : s2, p2 = e2.hitComponent, m2 = void 0 === p2 ? _r : p2, v2 = e2.resultsFooterComponent, d2 = void 0 === v2 ? function() {
    return null;
  } : v2, h2 = e2.navigator, y2 = e2.initialScrollY, b2 = void 0 === y2 ? 0 : y2, g2 = e2.transformSearchClient, _2 = void 0 === g2 ? Yr : g2, O2 = e2.disableUserPersonalization, S2 = void 0 !== O2 && O2, w2 = e2.initialQuery, j2 = void 0 === w2 ? "" : w2, E2 = e2.translations, P2 = void 0 === E2 ? {} : E2, I2 = e2.getMissingResultsUrl, D2 = e2.insights, k2 = void 0 !== D2 && D2, A2 = P2.footer, C2 = P2.searchBox, N2 = fi(P2, oi), x2 = li(Be.useState({ query: "", collections: [], completion: null, context: {}, isOpen: false, activeItemId: null, status: "idle" }), 2), T2 = x2[0], R2 = x2[1], q2 = Be.useRef(null), L2 = Be.useRef(null), M2 = Be.useRef(null), H2 = Be.useRef(null), U2 = Be.useRef(null), F2 = Be.useRef(10), B2 = Be.useRef("undefined" != typeof window ? window.getSelection().toString().slice(0, 64) : "").current, V2 = Be.useRef(j2 || B2).current, W2 = function(e3, t3, n3) {
    return Be.useMemo(function() {
      var r3 = ri(e3, t3);
      return r3.addAlgoliaAgent("docsearch", "3.5.2"), false === /docsearch.js \(.*\)/.test(r3.transporter.userAgent.value) && r3.addAlgoliaAgent("docsearch-react", "3.5.2"), n3(r3);
    }, [e3, t3, n3]);
  }(t2, n2, _2), K2 = Be.useRef(Oo({ key: "__DOCSEARCH_FAVORITE_SEARCHES__".concat(r2), limit: 10 })).current, z2 = Be.useRef(Oo({ key: "__DOCSEARCH_RECENT_SEARCHES__".concat(r2), limit: 0 === K2.getAll().length ? 7 : 4 })).current, J2 = Be.useCallback(function(e3) {
    if (!S2) {
      var t3 = "content" === e3.type ? e3.__docsearch_parent : e3;
      t3 && -1 === K2.getAll().findIndex(function(e4) {
        return e4.objectID === t3.objectID;
      }) && z2.add(t3);
    }
  }, [K2, z2, S2]), $2 = Be.useCallback(function(e3) {
    if (T2.context.algoliaInsightsPlugin && e3.__autocomplete_id) {
      var t3 = e3, n3 = { eventName: "Item Selected", index: t3.__autocomplete_indexName, items: [t3], positions: [e3.__autocomplete_id], queryID: t3.__autocomplete_queryID };
      T2.context.algoliaInsightsPlugin.insights.clickedObjectIDsAfterSearch(n3);
    }
  }, [T2.context.algoliaInsightsPlugin]), Q2 = Be.useMemo(function() {
    return hr({ id: "docsearch", defaultActiveItemId: 0, placeholder: i2, openOnFocus: true, initialState: { query: V2, context: { searchSuggestions: [] } }, insights: k2, navigator: h2, onStateChange: function(e3) {
      R2(e3.state);
    }, getSources: function(e3) {
      var o3 = e3.query, i3 = e3.state, u3 = e3.setContext, s3 = e3.setStatus;
      if (!o3)
        return S2 ? [] : [{ sourceId: "recentSearches", onSelect: function(e4) {
          var t3 = e4.item, n3 = e4.event;
          J2(t3), Gr(n3) || l2();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return z2.getAll();
        } }, { sourceId: "favoriteSearches", onSelect: function(e4) {
          var t3 = e4.item, n3 = e4.event;
          J2(t3), Gr(n3) || l2();
        }, getItemUrl: function(e4) {
          return e4.item.url;
        }, getItems: function() {
          return K2.getAll();
        } }];
      var p3 = Boolean(k2);
      return W2.search([{ query: o3, indexName: r2, params: ai({ attributesToRetrieve: ["hierarchy.lvl0", "hierarchy.lvl1", "hierarchy.lvl2", "hierarchy.lvl3", "hierarchy.lvl4", "hierarchy.lvl5", "hierarchy.lvl6", "content", "type", "url"], attributesToSnippet: ["hierarchy.lvl1:".concat(F2.current), "hierarchy.lvl2:".concat(F2.current), "hierarchy.lvl3:".concat(F2.current), "hierarchy.lvl4:".concat(F2.current), "hierarchy.lvl5:".concat(F2.current), "hierarchy.lvl6:".concat(F2.current), "content:".concat(F2.current)], snippetEllipsisText: "…", highlightPreTag: "<mark>", highlightPostTag: "</mark>", hitsPerPage: 20, clickAnalytics: p3 }, c2) }]).catch(function(e4) {
        throw "RetryError" === e4.name && s3("error"), e4;
      }).then(function(e4) {
        var o4 = e4.results[0], c3 = o4.hits, s4 = o4.nbHits, m3 = Zr(c3, function(e5) {
          return no(e5);
        }, a2);
        i3.context.searchSuggestions.length < Object.keys(m3).length && u3({ searchSuggestions: Object.keys(m3) }), u3({ nbHits: s4 });
        var v3 = {};
        return p3 && (v3 = { __autocomplete_indexName: r2, __autocomplete_queryID: o4.queryID, __autocomplete_algoliaCredentials: { appId: t2, apiKey: n2 } }), Object.values(m3).map(function(e5, t3) {
          return { sourceId: "hits".concat(t3), onSelect: function(e6) {
            var t4 = e6.item, n3 = e6.event;
            J2(t4), Gr(n3) || l2();
          }, getItemUrl: function(e6) {
            return e6.item.url;
          }, getItems: function() {
            return Object.values(Zr(e5, function(e6) {
              return e6.hierarchy.lvl1;
            }, a2)).map(f2).map(function(e6) {
              return e6.map(function(t4) {
                var n3 = null, r3 = e6.find(function(e7) {
                  return "lvl1" === e7.type && e7.hierarchy.lvl1 === t4.hierarchy.lvl1;
                });
                return "lvl1" !== t4.type && r3 && (n3 = r3), ai(ai({}, t4), {}, { __docsearch_parent: n3 }, v3);
              });
            }).flat();
          } };
        });
      });
    } });
  }, [r2, c2, a2, W2, l2, z2, K2, J2, V2, i2, h2, f2, S2, k2, t2, n2]), Z2 = Q2.getEnvironmentProps, Y2 = Q2.getRootProps, G2 = Q2.refresh;
  return function(e3) {
    var t3 = e3.getEnvironmentProps, n3 = e3.panelElement, r3 = e3.formElement, o3 = e3.inputElement;
    Be.useEffect(function() {
      if (n3 && r3 && o3) {
        var e4 = t3({ panelElement: n3, formElement: r3, inputElement: o3 }), i3 = e4.onTouchStart, c3 = e4.onTouchMove;
        return window.addEventListener("touchstart", i3), window.addEventListener("touchmove", c3), function() {
          window.removeEventListener("touchstart", i3), window.removeEventListener("touchmove", c3);
        };
      }
    }, [t3, n3, r3, o3]);
  }({ getEnvironmentProps: Z2, panelElement: H2.current, formElement: M2.current, inputElement: U2.current }), function(e3) {
    var t3 = e3.container;
    Be.useEffect(function() {
      if (t3) {
        var e4 = t3.querySelectorAll("a[href]:not([disabled]), button:not([disabled]), input:not([disabled])"), n3 = e4[0], r3 = e4[e4.length - 1];
        return t3.addEventListener("keydown", o3), function() {
          t3.removeEventListener("keydown", o3);
        };
      }
      function o3(e5) {
        "Tab" === e5.key && (e5.shiftKey ? document.activeElement === n3 && (e5.preventDefault(), r3.focus()) : document.activeElement === r3 && (e5.preventDefault(), n3.focus()));
      }
    }, [t3]);
  }({ container: q2.current }), Be.useEffect(function() {
    return document.body.classList.add("DocSearch--active"), function() {
      var e3, t3;
      document.body.classList.remove("DocSearch--active"), null === (e3 = (t3 = window).scrollTo) || void 0 === e3 || e3.call(t3, 0, b2);
    };
  }, []), Be.useEffect(function() {
    window.matchMedia("(max-width: 768px)").matches && (F2.current = 5);
  }, []), Be.useEffect(function() {
    H2.current && (H2.current.scrollTop = 0);
  }, [T2.query]), Be.useEffect(function() {
    V2.length > 0 && (G2(), U2.current && U2.current.focus());
  }, [V2, G2]), Be.useEffect(function() {
    function e3() {
      if (L2.current) {
        var e4 = 0.01 * window.innerHeight;
        L2.current.style.setProperty("--docsearch-vh", "".concat(e4, "px"));
      }
    }
    return e3(), window.addEventListener("resize", e3), function() {
      window.removeEventListener("resize", e3);
    };
  }, []), Be.createElement("div", ii({ ref: q2 }, Y2({ "aria-expanded": true }), { className: ["DocSearch", "DocSearch-Container", "stalled" === T2.status && "DocSearch-Container--Stalled", "error" === T2.status && "DocSearch-Container--Errored"].filter(Boolean).join(" "), role: "button", tabIndex: 0, onMouseDown: function(e3) {
    e3.target === e3.currentTarget && l2();
  } }), Be.createElement("div", { className: "DocSearch-Modal", ref: L2 }, Be.createElement("header", { className: "DocSearch-SearchBar", ref: M2 }, Be.createElement(yo, ii({}, Q2, { state: T2, autoFocus: 0 === V2.length, inputRef: U2, isFromSelection: Boolean(V2) && V2 === B2, translations: C2, onClose: l2 }))), Be.createElement("div", { className: "DocSearch-Dropdown", ref: H2 }, Be.createElement(po, ii({}, Q2, { indexName: r2, state: T2, hitComponent: m2, resultsFooterComponent: d2, disableUserPersonalization: S2, recentSearches: z2, favoriteSearches: K2, inputRef: U2, translations: N2, getMissingResultsUrl: I2, onItemClick: function(e3, t3) {
    $2(e3), J2(e3), Gr(t3) || l2();
  } }))), Be.createElement("footer", { className: "DocSearch-Footer" }, Be.createElement(gr, { translations: A2 }))));
}
function mi() {
  return mi = Object.assign || function(e2) {
    for (var t2 = 1; t2 < arguments.length; t2++) {
      var n2 = arguments[t2];
      for (var r2 in n2)
        Object.prototype.hasOwnProperty.call(n2, r2) && (e2[r2] = n2[r2]);
    }
    return e2;
  }, mi.apply(this, arguments);
}
function vi(e2, t2) {
  return function(e3) {
    if (Array.isArray(e3))
      return e3;
  }(e2) || function(e3, t3) {
    var n2 = null == e3 ? null : "undefined" != typeof Symbol && e3[Symbol.iterator] || e3["@@iterator"];
    if (null == n2)
      return;
    var r2, o2, i2 = [], c2 = true, a2 = false;
    try {
      for (n2 = n2.call(e3); !(c2 = (r2 = n2.next()).done) && (i2.push(r2.value), !t3 || i2.length !== t3); c2 = true)
        ;
    } catch (e4) {
      a2 = true, o2 = e4;
    } finally {
      try {
        c2 || null == n2.return || n2.return();
      } finally {
        if (a2)
          throw o2;
      }
    }
    return i2;
  }(e2, t2) || function(e3, t3) {
    if (!e3)
      return;
    if ("string" == typeof e3)
      return di(e3, t3);
    var n2 = Object.prototype.toString.call(e3).slice(8, -1);
    "Object" === n2 && e3.constructor && (n2 = e3.constructor.name);
    if ("Map" === n2 || "Set" === n2)
      return Array.from(e3);
    if ("Arguments" === n2 || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n2))
      return di(e3, t3);
  }(e2, t2) || function() {
    throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
  }();
}
function di(e2, t2) {
  (null == t2 || t2 > e2.length) && (t2 = e2.length);
  for (var n2 = 0, r2 = new Array(t2); n2 < t2; n2++)
    r2[n2] = e2[n2];
  return r2;
}
function hi(e2) {
  var t2, n2, r2 = Be.useRef(null), o2 = vi(Be.useState(false), 2), i2 = o2[0], c2 = o2[1], a2 = vi(Be.useState((null == e2 ? void 0 : e2.initialQuery) || void 0), 2), u2 = a2[0], l2 = a2[1], s2 = Be.useCallback(function() {
    c2(true);
  }, [c2]), f2 = Be.useCallback(function() {
    c2(false);
  }, [c2]);
  return function(e3) {
    var t3 = e3.isOpen, n3 = e3.onOpen, r3 = e3.onClose, o3 = e3.onInput, i3 = e3.searchButtonRef;
    Be.useEffect(function() {
      function e4(e5) {
        var c3;
        (27 === e5.keyCode && t3 || "k" === (null === (c3 = e5.key) || void 0 === c3 ? void 0 : c3.toLowerCase()) && (e5.metaKey || e5.ctrlKey) || !function(e6) {
          var t4 = e6.target, n4 = t4.tagName;
          return t4.isContentEditable || "INPUT" === n4 || "SELECT" === n4 || "TEXTAREA" === n4;
        }(e5) && "/" === e5.key && !t3) && (e5.preventDefault(), t3 ? r3() : document.body.classList.contains("DocSearch--active") || document.body.classList.contains("DocSearch--active") || n3()), i3 && i3.current === document.activeElement && o3 && /[a-zA-Z0-9]/.test(String.fromCharCode(e5.keyCode)) && o3(e5);
      }
      return window.addEventListener("keydown", e4), function() {
        window.removeEventListener("keydown", e4);
      };
    }, [t3, n3, r3, o3, i3]);
  }({ isOpen: i2, onOpen: s2, onClose: f2, onInput: Be.useCallback(function(e3) {
    c2(true), l2(e3.key);
  }, [c2, l2]), searchButtonRef: r2 }), Be.createElement(Be.Fragment, null, Be.createElement(Ze, { ref: r2, translations: null == e2 || null === (t2 = e2.translations) || void 0 === t2 ? void 0 : t2.button, onClick: s2 }), i2 && Ie(Be.createElement(pi, mi({}, e2, { initialScrollY: window.scrollY, initialQuery: u2, translations: null == e2 || null === (n2 = e2.translations) || void 0 === n2 ? void 0 : n2.modal, onClose: f2 })), document.body));
}
function yi(e2) {
  Ce(Be.createElement(hi, o({}, e2, { transformSearchClient: function(t2) {
    return t2.addAlgoliaAgent("docsearch.js", "3.5.2"), e2.transformSearchClient ? e2.transformSearchClient(t2) : t2;
  } })), function(e3) {
    var t2 = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : window;
    return "string" == typeof e3 ? t2.document.querySelector(e3) : e3;
  }(e2.container, e2.environment));
}

function DocSearch() {
  reactExports.useEffect(() => {
    yi({
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
  customHtml() {
    Swal.fire({
      title: "<strong>HTML <u>example</u></strong>",
      icon: "info",
      html: `
        You can use <b>bold text</b>,
        <a href="#">links</a>,
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

export { DocSearch as D, Nav as N, React as R, Swal as S, client as c, examples as e, getDefaultExportFromCjs as g, jsxRuntimeExports as j, reactExports as r };
