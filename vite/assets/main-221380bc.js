import { j as jsxRuntimeExports, r as reactExports, g as getDefaultExportFromCjs, c as client } from "./client-6b11ec84.js";
import { e as examples, S as Swal, N as Nav } from "./index-d0a55090.js";
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
          throw function(e5, t4) {
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
        return function(e5, t4, n5) {
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
  var n2 = e2.appId, r2 = function(e3, t2, n3) {
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
function Header() {
  const st4 = {
    fill: "#fa7471"
  };
  const st5 = {
    fill: "#a575b7"
  };
  const st6 = {
    strokeWidth: 8.2,
    stroke: "#8a3d9b",
    fill: "none",
    strokeMiterlimit: 10
  };
  const st7 = {
    fill: "#8a3d9b"
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "iframe",
      {
        src: "https://ghbtns.com/github-btn.html?user=sweetalert2&repo=sweetalert2&type=star&count=true&size=large",
        frameBorder: "0",
        scrolling: "0",
        width: "170",
        height: "30",
        title: "GitHub stars",
        className: "mobile-hidden"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("header", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "slava-ukraini", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://war.ukraine.ua/support-ukraine/", children: "SAVE LIVES, SUPPORT UKRAINE" }),
        " 🇺🇦"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { id: "logo-slider", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "logo-track", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/logo-donut-track.svg" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "logo-bouncer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { id: "logo-spinner", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", viewBox: "15.4 -120.3 269.3 269.3", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { id: "lower_circle", cx: "161.8", cy: "27", r: "100.2", fill: "#fdcc80" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { id: "inner_circle", cx: "149.4", cy: "14.2", r: "36.8", fill: "#fff" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "path",
            {
              id: "upper_frosting",
              d: "M108.7 105.5c-6.6.3-31.9-13.4-42.4-49.5-1.9-6.6-4.5-16.8-4.5-29.6 0-55 44.6-99.6 99.6-99.6 13.1 0 23.5 2.7 29.6 4.5 34.4 10.4 48 34.1 44.9 40.5s-10.6-3.4-22.9-2.5c-1.4.1-4.2 4-4.2 6.2 0 7.2 13.5 12.7 14.6 15.9 1.7 5 3.4 6.2 2.3 9.5-1.5 4.8-2.9 3.6-5.2 5.9-.9.9-5.6.7-16.6-1.7-5.9-1.3-18-11.2-18-11.4 0-.4-16.2-13.3-30.2-14.8-6.6-.7-28.1-2.8-39.2 19.2-.5 1.1-4.4 20-4.2 22.5.9 11.9 7 24.7 12.1 27.5 11.7 6.4 12.9 14.7 12.8 14.4-.1-.4 7.8 14.7 8.2 17.3.3 2.1-.8 7.4-3.7 8.7-3.5 1.5-7.7-1.7-8.4-2.1-.8-.5-10.7-16.3-19.5-13.1-.8.3-6 3.7-7.6 5-.3.2 4.8 15.4 5.6 18.5.5 1.8-2.3 8.7-3.1 8.7z",
              opacity: ".5",
              fill: "#fa7471"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { id: "sprinkles", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M135.1-69.3h-.2c-2.3.4-3.8 2.6-3.4 4.9.4 2.3 2.6 3.8 4.9 3.4.8-.1 1.5-.5 2.1-1 1-.9 1.6-2.3 1.4-3.7-.3-2.3-2.5-3.9-4.8-3.6z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M181.7-65c-2.3-.1-4.3 1.7-4.5 4l-.5 8.4c-.1 2.3 1.7 4.3 4 4.5 1.2.1 2.2-.3 3.1-1.1.8-.7 1.3-1.7 1.4-2.9l.5-8.4c.1-2.4-1.7-4.4-4-4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M94.4 47.1c-2.3-.1-4.3 1.7-4.5 4l-.5 8.4c-.1 2.3 1.7 4.3 4 4.5 1.2.1 2.2-.3 3.1-1.1.8-.7 1.3-1.7 1.4-2.9l.5-8.4c.1-2.4-1.7-4.4-4-4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M65.4 1.7c-2.3-.1-4.3 1.7-4.5 4l-.5 8.4c-.1 2.3 1.7 4.3 4 4.5 1.2.1 2.2-.3 3.1-1.1s1.3-1.7 1.4-2.9l.5-8.4c.1-2.3-1.7-4.3-4-4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M157.2-61.8l-6.2 5.6c-1.7 1.6-1.9 4.2-.3 6 1.6 1.7 4.2 1.9 6 .3l6.2-5.6c1.7-1.6 1.9-4.2.3-6s-4.3-1.9-6-.3z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M93.8-23.3l-8.3-.5c-2.3-.1-4.3 1.7-4.5 4s1.7 4.3 4 4.5l8.3.5c1.2.1 2.2-.3 3.1-1.1.8-.7 1.3-1.7 1.4-2.9.1-2.4-1.7-4.4-4-4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M189.1-35.1l-8.3-.5c-2.3-.1-4.3 1.7-4.5 4s1.7 4.3 4 4.5l8.3.5c1.2.1 2.2-.3 3.1-1.1s1.3-1.7 1.4-2.9c.1-2.4-1.6-4.4-4-4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M132.4-42.3l-7.1-4.4c-2-1.2-4.6-.6-5.8 1.4-1.2 2-.6 4.6 1.4 5.8l7.1 4.4c1 .6 2.1.8 3.2.5 1.1-.2 2-.9 2.6-1.9 1.1-2 .5-4.6-1.4-5.8z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M88.2 5.7c-2.1 1.1-2.8 3.7-1.7 5.7l4 7.4c1.1 2.1 3.7 2.8 5.7 1.7 1.1-.6 1.8-1.6 2.1-2.7.3-1 .1-2.1-.4-3l-4-7.4c-1.1-2-3.7-2.8-5.7-1.7z"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { className: "hair", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M232.5-83.3c-2.2 3.1-4.6 6-7.2 8.7-1.8 1.9-1.7 4.9.1 6.7 1.9 1.8 4.9 1.7 6.7-.1 2.9-3 5.6-6.3 8-9.7 1.5-2.1 1-5.1-1.1-6.6s-5-1.1-6.5 1z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M144.7-113.4c.2 3.7.2 7.5-.2 11.2-.2 2.6 1.7 4.9 4.3 5.1 2.6.2 4.9-1.7 5.1-4.3.4-4.2.4-8.4.2-12.6-.2-2.6-2.4-4.6-5-4.4-2.5.1-4.5 2.4-4.4 5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M59.3-75.7c3.1 2.2 6 4.5 8.7 7.1 1.9 1.8 4.9 1.7 6.7-.2s1.7-4.9-.2-6.7c-3-2.9-6.3-5.5-9.8-8-2.1-1.5-5.1-1-6.6 1.1s-1 5.2 1.2 6.7z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M22.6 11.6c3.7-.2 7.5-.1 11.2.3 2.6.3 4.9-1.6 5.2-4.2s-1.6-4.9-4.2-5.2c-4.2-.4-8.4-.5-12.6-.3-2.6.1-4.6 2.3-4.5 4.9.1 2.7 2.3 4.7 4.9 4.5z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M60.2 102.2c2.2-3 4.6-5.9 7.2-8.6 1.8-1.9 1.8-4.9-.1-6.7-1.9-1.8-4.9-1.8-6.7.1-2.9 3-5.6 6.3-8.1 9.7-1.5 2.1-1 5.1 1.1 6.6 2.1 1.4 5 1 6.6-1.1z"
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { style: st6, cx: "149.1", cy: "15", r: "99.4" }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("g", { id: "side_swirl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st7,
                d: "M192.5 5.6c4.2-4.4 9.6.5 13.6 2.9 4 2.3 7.9 3.4 12.4 2.3 8.7-1.9 13.9-9.9 10.2-18.5-1.9-4.4-5.5-7.4-9.5-9.8-2.3-1.4-5.5-2.5-7-4.9-2.6-4.1 2.6-5.6 5.7-4.4 4.6 1.7 8.3 3.1 13.2 1.4 3.5-1.2 7.6-1.6 8.2-6.1.7-5.3-7.4-7.6-8.1-2.2-.1.2-.1.5-.2.7.8-.6 1.7-1.3 2.5-1.9-1.6.6-3.3 1-4.9 1.5-3.2 1-5.2-.1-8-1.3-4.2-1.6-8.7-1.6-12.6.9-8.9 5.9-4.6 16.6 2.8 21.3 3.9 2.5 10.3 4.7 10.5 10.2.2 6.1-7.6 5.7-11.2 3.6-7.7-4.5-16.2-9.3-23.7-1.6-3.6 3.9 2.3 9.8 6.1 5.9z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st7,
                d: "M132.5 56.1c-.9 3.8-.5 7.5 1.3 11 1.8 3.6 7.8 8 7.6 12.1-.1 3.1-2.8 4.1-5.5 3.5s-4.2-2.3-5.7-4.5c-2.3-3.3-4.5-6.6-8.2-8.5-6.7-3.5-15.8-3-19.4 4.4-1.8 3.7-2.1 8.1-.9 12.1.7 2.3 2 4.3 3.3 6.3.7 1.2 1.6 2.2 1.3 3.7-.4 1.7-1.3 1.6-3.1 1.8-5.3.6-5.4 9 0 8.4 4-.5 8.2-1.3 10.5-4.9 2.3-3.7 1.4-8.1-.6-11.7-1.4-2.6-3.5-4.9-3.7-7.9-.3-4.2 2.2-6.4 6.2-5.5 5.8 1.3 7.2 7.2 11.1 11 5.7 5.5 17.4 5.9 21.4-1.7 2.1-3.9 2.2-8.7.1-12.6-2.5-4.6-9-8.8-7.6-14.6 1.2-5.4-6.9-7.7-8.1-2.4z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st7,
                d: "M138.2-20c13.4-2.9 27.6-.7 37.5 9.4 7.8 8 11.8 19.6 10.2 30.7-3.9 27.4-37.5 39.4-58.4 22-12.2-10.2-14.2-25.9-10.4-40.6 1.4-5.6-7.2-8-8.7-2.4-4.2 16.3-2.4 33.7 9.6 46.4 9.3 9.9 23.6 15.2 37.1 13.8 17.5-1.8 32.6-13.9 38.1-30.7 4.6-13.9 1.4-29.7-7.4-41.3-11.9-15.7-31.3-20-49.9-16-5.7 1.2-3.3 9.9 2.3 8.7z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st5,
                d: "M99.3-54.8l-8 2.4c-2.2.7-3.5 3-2.9 5.2.7 2.2 3 3.5 5.2 2.9l8-2.4c1.1-.3 2-1.1 2.5-2s.7-2.1.3-3.2c-.5-2.2-2.9-3.5-5.1-2.9z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st4,
                d: "M81.8 30.7h-.2c-3.2.6-4.9 4.7-1.8 7.7 2.1 1.2 4.1.8 5.4-.4 1-.9 1.6-2.3 1.4-3.7-.4-2.3-2.5-3.9-4.8-3.6z"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "path",
              {
                style: st7,
                d: "M124.3-21.7c-3.2 1.7-6.1 4.3-8.3 7.1-1.4 1.8-1.1 4.9.8 6.3 2 1.5 4.7 1.1 6.3-.8.4-.5.8-.9 1.2-1.4l.1-.1c.2-.3.6-.5.8-.8.6-.4 1-.9 1.6-1.3.3-.3.6-.4.9-.6.8-.5-.6.3.1-.1 2-1.1 3.5-3.6 2.3-6-.9-2-3.5-3.5-5.8-2.3z"
              }
            )
          ] })
        ] }) }) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { id: "logo-text", src: "./images/SweetAlert2.png", alt: "SweetAlert2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "stats mobile-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(CurrentVersion, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(LatestUpdate, {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx(DownloadsLastMonth, {})
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DocSearch, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { children: "A beautiful, responsive, customizable, accessible (WAI-ARIA) replacement for JavaScript's popup boxes" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { children: "Zero dependencies" })
    ] })
  ] });
}
function CurrentVersion() {
  const [currentVersion, setCurrentVersion] = reactExports.useState("");
  reactExports.useEffect(() => {
    fetch("https://api.github.com/repos/sweetalert2/sweetalert2/tags").then((response) => response.json()).then((response) => {
      if (!response[0] || !response[0].name) {
        return;
      }
      setCurrentVersion(response[0].name);
    }).catch(() => {
    });
  }, []);
  if (currentVersion) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "Current version:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2/releases", "aria-label": `Current version ${currentVersion}`, children: currentVersion })
    ] });
  }
}
function LatestUpdate() {
  const [latestUpdate, setLatestUpdate] = reactExports.useState("");
  reactExports.useEffect(() => {
    fetch("https://api.github.com/repos/sweetalert2/sweetalert2/commits").then((response) => response.json()).then((response) => {
      if (!response[0] || !response[0].commit) {
        return;
      }
      let recentActivity = response[0].commit.author.date;
      const recentActivityDate = new Date(recentActivity);
      const diffDays = Math.floor((Date.now() - recentActivityDate.getTime()) / (1e3 * 60 * 60 * 24));
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
      setLatestUpdate(recentActivity);
    }).catch(() => {
    });
  }, []);
  if (latestUpdate) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "Latest update:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2/commits/main", "aria-label": `Latest update ${latestUpdate}`, children: latestUpdate })
    ] });
  }
}
function DownloadsLastMonth() {
  const [downloadsLastMonth, setDownloadsLastMonth] = reactExports.useState("");
  reactExports.useEffect(() => {
    fetch("https://api.npmjs.org/downloads/point/last-month/sweetalert2").then((response) => response.json()).then((response) => {
      setDownloadsLastMonth(response.downloads.toLocaleString());
    }).catch(() => {
    });
  }, []);
  if (downloadsLastMonth) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
      "Downloads last month:",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "https://npm-stat.com/charts.html?package=sweetalert2",
          "aria-label": `Downloads last month ${downloadsLastMonth}`,
          children: downloadsLastMonth
        }
      )
    ] });
  }
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
  Object.getOwnPropertyNames(obj).forEach((name) => {
    const prop = obj[name];
    const type = typeof prop;
    if ((type === "object" || type === "function") && !Object.isFrozen(prop)) {
      deepFreeze(prop);
    }
  });
  return obj;
}
class Response {
  /**
   * @param {CompiledMode} mode
   */
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
  return (
    /** @type {T} */
    result
  );
}
const SPAN_CLOSE = "</span>";
const emitsWrappingTags = (node) => {
  return !!node.scope;
};
const scopeToCSSClass = (name, { prefix }) => {
  if (name.startsWith("language:")) {
    return name.replace("language:", "language-");
  }
  if (name.includes(".")) {
    const pieces = name.split(".");
    return [
      `${prefix}${pieces.shift()}`,
      ...pieces.map((x2, i2) => `${x2}${"_".repeat(i2 + 1)}`)
    ].join(" ");
  }
  return `${prefix}${name}`;
};
class HTMLRenderer {
  /**
   * Creates a new HTMLRenderer
   *
   * @param {Tree} parseTree - the parse tree (must support `walk` API)
   * @param {{classPrefix: string}} options
   */
  constructor(parseTree, options) {
    this.buffer = "";
    this.classPrefix = options.classPrefix;
    parseTree.walk(this);
  }
  /**
   * Adds texts to the output stream
   *
   * @param {string} text */
  addText(text) {
    this.buffer += escapeHTML(text);
  }
  /**
   * Adds a node open to the output stream (if needed)
   *
   * @param {Node} node */
  openNode(node) {
    if (!emitsWrappingTags(node))
      return;
    const className = scopeToCSSClass(
      node.scope,
      { prefix: this.classPrefix }
    );
    this.span(className);
  }
  /**
   * Adds a node close to the output stream (if needed)
   *
   * @param {Node} node */
  closeNode(node) {
    if (!emitsWrappingTags(node))
      return;
    this.buffer += SPAN_CLOSE;
  }
  /**
   * returns the accumulated buffer
  */
  value() {
    return this.buffer;
  }
  // helpers
  /**
   * Builds a span element
   *
   * @param {string} className */
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
  /** @param {Node} node */
  add(node) {
    this.top.children.push(node);
  }
  /** @param {string} scope */
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
  /**
   * @typedef { import("./html_renderer").Renderer } Renderer
   * @param {Renderer} builder
   */
  walk(builder) {
    return this.constructor._walk(builder, this.rootNode);
  }
  /**
   * @param {Renderer} builder
   * @param {Node} node
   */
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
  /**
   * @param {Node} node
   */
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
  /**
   * @param {*} options
   */
  constructor(options) {
    super();
    this.options = options;
  }
  /**
   * @param {string} text
   */
  addText(text) {
    if (text === "") {
      return;
    }
    this.add(text);
  }
  /** @param {string} scope */
  startScope(scope) {
    this.openNode(scope);
  }
  endScope() {
    this.closeNode();
  }
  /**
   * @param {Emitter & {root: DataNode}} emitter
   * @param {string} name
   */
  __addSublanguage(emitter, name) {
    const node = emitter.root;
    if (name)
      node.scope = `language:${name}`;
    this.add(node);
  }
  toHTML() {
    const renderer = new HTMLRenderer(this, this.options);
    return renderer.value();
  }
  finalize() {
    this.closeAllNodes();
    return true;
  }
}
function source(re2) {
  if (!re2)
    return null;
  if (typeof re2 === "string")
    return re2;
  return re2.source;
}
function lookahead(re2) {
  return concat("(?=", re2, ")");
}
function anyNumberOfTimes(re2) {
  return concat("(?:", re2, ")*");
}
function optional(re2) {
  return concat("(?:", re2, ")?");
}
function concat(...args) {
  const joined = args.map((x2) => source(x2)).join("");
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
  const joined = "(" + (opts.capture ? "" : "?:") + args.map((x2) => source(x2)).join("|") + ")";
  return joined;
}
function countMatchGroups(re2) {
  return new RegExp(re2.toString() + "|").exec("").length - 1;
}
function startsWith(re2, lexeme) {
  const match = re2 && re2.exec(lexeme);
  return match && match.index === 0;
}
const BACKREF_RE = /\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;
function _rewriteBackreferences(regexps, { joinWith }) {
  let numCaptures = 0;
  return regexps.map((regex) => {
    numCaptures += 1;
    const offset = numCaptures;
    let re2 = source(regex);
    let out = "";
    while (re2.length > 0) {
      const match = BACKREF_RE.exec(re2);
      if (!match) {
        out += re2;
        break;
      }
      out += re2.substring(0, match.index);
      re2 = re2.substring(match.index + match[0].length);
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
  }).map((re2) => `(${re2})`).join(joinWith);
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
    /** @type {ModeCallback} */
    "on:begin": (m2, resp) => {
      if (m2.index !== 0)
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
    // hack to avoid the space from being included. the space is necessary to
    // match here to prevent the plain text rule below from gobbling up doctags
    begin: "[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",
    end: /(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,
    excludeBegin: true,
    relevance: 0
  });
  const ENGLISH_WORD = either(
    // list of common 1 and 2 letter words in English
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
    // note: this is not an exhaustive list of contractions, just popular ones
    /[A-Za-z]+['](d|ve|re|ll|t|s|n)/,
    // contractions - can't we'd they're let's, etc
    /[A-Za-z]+[-][a-z]+/,
    // `no-way`, etc.
    /[A-Za-z][a-z]{2,}/
    // allow capitalized words at beginning of sentences
  );
  mode.contains.push(
    {
      // TODO: how to include ", (, ) without breaking grammars that use these for
      // comment delimiters?
      // begin: /[ ]+([()"]?([A-Za-z'-]{3,}|is|a|I|so|us|[tT][oO]|at|if|in|it|on)[.]?[()":]?([.][ ]|[ ]|\))){3}/
      // ---
      // this tries to find sequences of 3 english words in a row (without any
      // "programming" type syntax) this gives us a strong signal that we've
      // TRULY found a comment - vs perhaps scanning with the wrong language.
      // It's possible to find something that LOOKS like the start of the
      // comment - but then if there is no readable text - good chance it is a
      // false match and not a comment.
      //
      // for a visual example please see:
      // https://github.com/highlightjs/highlight.js/issues/2827
      begin: concat(
        /[ ]+/,
        // necessary to prevent us gobbling up doctags like /* @author Bob Mcgill */
        "(",
        ENGLISH_WORD,
        /[.]?[:]?([.][ ]|[ ])/,
        "){3}"
      )
      // look for 3 words in a row
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
  scope: "regexp",
  begin: /\/(?=[^/\n]*\/)/,
  end: /\/[gimuy]*/,
  contains: [
    BACKSLASH_ESCAPE,
    {
      begin: /\[/,
      end: /\]/,
      relevance: 0,
      contains: [BACKSLASH_ESCAPE]
    }
  ]
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
  // excludes method names from keyword processing
  begin: "\\.\\s*" + UNDERSCORE_IDENT_RE,
  relevance: 0
};
const END_SAME_AS_BEGIN = function(mode) {
  return Object.assign(
    mode,
    {
      /** @type {ModeCallback} */
      "on:begin": (m2, resp) => {
        resp.data._beginMatch = m2[1];
      },
      /** @type {ModeCallback} */
      "on:end": (m2, resp) => {
        if (resp.data._beginMatch !== m2[1])
          resp.ignoreMatch();
      }
    }
  );
};
var MODES = /* @__PURE__ */ Object.freeze({
  __proto__: null,
  APOS_STRING_MODE,
  BACKSLASH_ESCAPE,
  BINARY_NUMBER_MODE,
  BINARY_NUMBER_RE,
  COMMENT,
  C_BLOCK_COMMENT_MODE,
  C_LINE_COMMENT_MODE,
  C_NUMBER_MODE,
  C_NUMBER_RE,
  END_SAME_AS_BEGIN,
  HASH_COMMENT_MODE,
  IDENT_RE: IDENT_RE$1,
  MATCH_NOTHING_RE,
  METHOD_GUARD,
  NUMBER_MODE,
  NUMBER_RE,
  PHRASAL_WORDS_MODE,
  QUOTE_STRING_MODE,
  REGEXP_MODE,
  RE_STARTERS_RE,
  SHEBANG,
  TITLE_MODE,
  UNDERSCORE_IDENT_RE,
  UNDERSCORE_TITLE_MODE
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
  // common variable name
  "list",
  // common variable name
  "value"
  // common variable name
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
      keywordList = keywordList.map((x2) => x2.toLowerCase());
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
  for (let i2 = 1; i2 <= regexes.length; i2++) {
    positions[i2 + offset] = scopeNames[i2];
    emit[i2 + offset] = true;
    offset += countMatchGroups(regexes[i2 - 1]);
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
  function langRe(value, global) {
    return new RegExp(
      source(value),
      "m" + (language.case_insensitive ? "i" : "") + (language.unicodeRegex ? "u" : "") + (global ? "g" : "")
    );
  }
  class MultiRegex {
    constructor() {
      this.matchIndexes = {};
      this.regexes = [];
      this.matchAt = 1;
      this.position = 0;
    }
    // @ts-ignore
    addRule(re2, opts) {
      opts.position = this.position++;
      this.matchIndexes[this.matchAt] = opts;
      this.regexes.push([opts, re2]);
      this.matchAt += countMatchGroups(re2) + 1;
    }
    compile() {
      if (this.regexes.length === 0) {
        this.exec = () => null;
      }
      const terminators = this.regexes.map((el) => el[1]);
      this.matcherRe = langRe(_rewriteBackreferences(terminators, { joinWith: "|" }), true);
      this.lastIndex = 0;
    }
    /** @param {string} s */
    exec(s2) {
      this.matcherRe.lastIndex = this.lastIndex;
      const match = this.matcherRe.exec(s2);
      if (!match) {
        return null;
      }
      const i2 = match.findIndex((el, i3) => i3 > 0 && el !== void 0);
      const matchData = this.matchIndexes[i2];
      match.splice(0, i2);
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
    // @ts-ignore
    getMatcher(index) {
      if (this.multiRegexes[index])
        return this.multiRegexes[index];
      const matcher = new MultiRegex();
      this.rules.slice(index).forEach(([re2, opts]) => matcher.addRule(re2, opts));
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
    // @ts-ignore
    addRule(re2, opts) {
      this.rules.push([re2, opts]);
      if (opts.type === "begin")
        this.count++;
    }
    /** @param {string} s */
    exec(s2) {
      const m2 = this.getMatcher(this.regexIndex);
      m2.lastIndex = this.lastIndex;
      let result = m2.exec(s2);
      if (this.resumingScanAtSamePosition()) {
        if (result && result.index === this.lastIndex)
          ;
        else {
          const m22 = this.getMatcher(0);
          m22.lastIndex = this.lastIndex + 1;
          result = m22.exec(s2);
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
    const cmode = (
      /** @type CompiledMode */
      mode
    );
    if (mode.isCompiled)
      return cmode;
    [
      scopeClassName,
      // do this early so compiler extensions generally don't have to worry about
      // the distinction between match/begin
      compileMatch,
      MultiClass,
      beforeMatchExt
    ].forEach((ext) => ext(mode, parent));
    language.compilerExtensions.forEach((ext) => ext(mode, parent));
    mode.__beforeBegin = null;
    [
      beginKeywords,
      // do this later so compiler extensions that come earlier have access to the
      // raw array if they wanted to perhaps manipulate it, etc.
      compileIllegal,
      // default to 1 relevance if not specified
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
      cmode.illegalRe = langRe(
        /** @type {RegExp | string} */
        mode.illegal
      );
    if (!mode.contains)
      mode.contains = [];
    mode.contains = [].concat(...mode.contains.map(function(c2) {
      return expandOrCloneMode(c2 === "self" ? mode : c2);
    }));
    mode.contains.forEach(function(c2) {
      compileMode(
        /** @type Mode */
        c2,
        cmode
      );
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
  return compileMode(
    /** @type Mode */
    language
  );
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
var version = "11.9.0";
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
    // beta configuration options, subject to change, welcome to discuss
    // https://github.com/highlightjs/highlight.js/issues/1086
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
            emitKeyword(match[0], cssClass);
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
        continuations[top.subLanguage] = /** @type {CompiledMode} */
        result2._top;
      } else {
        result2 = highlightAuto(modeBuffer, top.subLanguage.length ? top.subLanguage : null);
      }
      if (top.relevance > 0) {
        relevance += result2.relevance;
      }
      emitter.__addSublanguage(result2._emitter, result2.language);
    }
    function processBuffer() {
      if (top.subLanguage != null) {
        processSubLanguage();
      } else {
        processKeywords();
      }
      modeBuffer = "";
    }
    function emitKeyword(keyword, scope) {
      if (keyword === "")
        return;
      emitter.startScope(scope);
      emitter.addText(keyword);
      emitter.endScope();
    }
    function emitMultiClass(scope, match) {
      let i2 = 1;
      const max = match.length - 1;
      while (i2 <= max) {
        if (!scope._emit[i2]) {
          i2++;
          continue;
        }
        const klass = language.classNameAliases[scope[i2]] || scope[i2];
        const text = match[i2];
        if (klass) {
          emitKeyword(text, klass);
        } else {
          modeBuffer = text;
          processKeywords();
          modeBuffer = "";
        }
        i2++;
      }
    }
    function startNewMode(mode, match) {
      if (mode.scope && typeof mode.scope === "string") {
        emitter.openNode(language.classNameAliases[mode.scope] || mode.scope);
      }
      if (mode.beginScope) {
        if (mode.beginScope._wrap) {
          emitKeyword(modeBuffer, language.classNameAliases[mode.beginScope._wrap] || mode.beginScope._wrap);
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
        emitKeyword(lexeme, top.endScope._wrap);
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
      if (!language.__emitTokens) {
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
      } else {
        language.__emitTokens(codeToHighlight, emitter);
      }
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
    const sorted = results.sort((a2, b2) => {
      if (a2.relevance !== b2.relevance)
        return b2.relevance - a2.relevance;
      if (a2.language && b2.language) {
        if (getLanguage(a2.language).supersetOf === b2.language) {
          return 1;
        } else if (getLanguage(b2.language).supersetOf === a2.language) {
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
    if (element.dataset.highlighted) {
      console.log("Element previously highlighted. To highlight again, first unset `dataset.highlighted`.", element);
      return;
    }
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
    element.dataset.highlighted = "yes";
    updateClassName(element, language, result.language);
    element.result = {
      language: result.language,
      // TODO: remove with version 11.0
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
  function removePlugin(plugin) {
    const index = plugins.indexOf(plugin);
    if (index !== -1) {
      plugins.splice(index, 1);
    }
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
    // TODO: Remove with v12 API
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
    addPlugin,
    removePlugin
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
      deepFreeze(MODES[key]);
    }
  }
  Object.assign(hljs, MODES);
  return hljs;
};
const highlight = HLJS({});
highlight.newInstance = () => HLJS({});
var core = highlight;
highlight.HighlightJS = highlight;
highlight.default = highlight;
const HighlightJS = /* @__PURE__ */ getDefaultExportFromCjs(core);
const IDENT_RE = "[A-Za-z$_][0-9A-Za-z$_]*";
const KEYWORDS = [
  "as",
  // for exports
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
  // JS handles these with a special rule
  // "get",
  // "set",
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
  // Fundamental objects
  "Object",
  "Function",
  "Boolean",
  "Symbol",
  // numbers and dates
  "Math",
  "Date",
  "Number",
  "BigInt",
  // text
  "String",
  "RegExp",
  // Indexed collections
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
  // Keyed collections
  "Set",
  "Map",
  "WeakSet",
  "WeakMap",
  // Structured data
  "ArrayBuffer",
  "SharedArrayBuffer",
  "Atomics",
  "DataView",
  "JSON",
  // Control abstraction objects
  "Promise",
  "Generator",
  "GeneratorFunction",
  "AsyncFunction",
  // Reflection
  "Reflect",
  "Proxy",
  // Internationalization
  "Intl",
  // WebAssembly
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
  "sessionStorage",
  "module",
  "global"
  // Node.js
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
    /**
     * @param {RegExpMatchArray} match
     * @param {CallbackResponse} response
     */
    isTrulyOpeningTag: (match, response) => {
      const afterMatchIndex = match[0].length + match.index;
      const nextChar = match.input[afterMatchIndex];
      if (
        // HTML should not include another raw `<` inside a tag
        // nested type?
        // `<Array<Array<number>>`, etc.
        nextChar === "<" || // the , gives away that this is not HTML
        // `<T, A extends keyof T, V>`
        nextChar === ","
      ) {
        response.ignoreMatch();
        return;
      }
      if (nextChar === ">") {
        if (!hasClosingTag(match, { after: afterMatchIndex })) {
          response.ignoreMatch();
        }
      }
      let m2;
      const afterMatch = match.input.substring(afterMatchIndex);
      if (m2 = afterMatch.match(/^\s*=/)) {
        response.ignoreMatch();
        return;
      }
      if (m2 = afterMatch.match(/^\s+extends\s+/)) {
        if (m2.index === 0) {
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
      // DecimalLiteral
      { begin: `(\\b(${decimalInteger})((${frac})|\\.)?|(${frac}))[eE][+-]?(${decimalDigits})\\b` },
      { begin: `\\b(${decimalInteger})\\b((${frac})\\b|\\.)?|(${frac})\\b` },
      // DecimalBigIntegerLiteral
      { begin: `\\b(0|[1-9](_?[0-9])*)n\\b` },
      // NonDecimalIntegerLiteral
      { begin: "\\b0[xX][0-9a-fA-F](_?[0-9a-fA-F])*n?\\b" },
      { begin: "\\b0[bB][0-1](_?[0-1])*n?\\b" },
      { begin: "\\b0[oO][0-7](_?[0-7])*n?\\b" },
      // LegacyOctalIntegerLiteral (does not include underscore separators)
      // https://tc39.es/ecma262/#sec-additional-syntax-numeric-literals
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
    // defined later
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
  const GRAPHQL_TEMPLATE = {
    begin: "gql`",
    end: "",
    starts: {
      end: "`",
      returnEnd: false,
      contains: [
        hljs.BACKSLASH_ESCAPE,
        SUBST
      ],
      subLanguage: "graphql"
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
            // eat spaces (not newlines) so we can find
            // types or variables
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
    GRAPHQL_TEMPLATE,
    TEMPLATE_STRING,
    // Skip numbers when they are part of a variable name
    { match: /\$\d+/ },
    NUMBER
    // This is intentional:
    // See https://github.com/highlightjs/highlight.js/issues/3288
    // hljs.REGEXP_MODE
  ];
  SUBST.contains = SUBST_INTERNALS.concat({
    // we need to pair up {} inside our subst to prevent
    // it from ending too early by matching another }
    begin: /\{/,
    end: /\}/,
    keywords: KEYWORDS$1,
    contains: [
      "self"
    ].concat(SUBST_INTERNALS)
  });
  const SUBST_AND_COMMENTS = [].concat(COMMENT2, SUBST.contains);
  const PARAMS_CONTAINS = SUBST_AND_COMMENTS.concat([
    // eat recursive parens in sub expressions
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
      // class Car extends vehicle
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
      // class Car
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
      // Hard coded exceptions
      /\bJSON/,
      // Float32Array, OutT
      /\b[A-Z][a-z]+([A-Z][a-z]*|\d)*/,
      // CSSFactory, CSSFactoryT
      /\b[A-Z]{2,}([A-Z][a-z]+|\d)+([A-Z][a-z]*)*/,
      // FPs, FPsT
      /\b[A-Z]{2,}[a-z]+([A-Z][a-z]+|\d)*([A-Z][a-z]*)*/
      // P
      // single letters are not highlighted
      // BLAH
      // this will be flagged as a UPPER_CASE_CONSTANT instead
    ),
    className: "title.class",
    keywords: {
      _: [
        // se we still get relevance credit for JS library classes
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
      // anonymous function
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
        "super",
        "import"
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
        // eat to avoid empty params
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
      // async is optional
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
    name: "JavaScript",
    aliases: ["js", "jsx", "mjs", "cjs"],
    keywords: KEYWORDS$1,
    // this will be extended by TypeScript
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
      GRAPHQL_TEMPLATE,
      TEMPLATE_STRING,
      COMMENT2,
      // Skip numbers when they are part of a variable name
      { match: /\$\d+/ },
      NUMBER,
      CLASS_REFERENCE,
      {
        className: "attr",
        begin: IDENT_RE$12 + regex.lookahead(":"),
        relevance: 0
      },
      FUNCTION_VARIABLE,
      {
        // "value" container
        begin: "(" + hljs.RE_STARTERS_RE + "|\\b(case|return|throw)\\b)\\s*",
        keywords: "return throw case",
        relevance: 0,
        contains: [
          COMMENT2,
          hljs.REGEXP_MODE,
          {
            className: "function",
            // we have to count the parens to make sure we actually have the
            // correct bounding ( ) before the =>.  There could be any number of
            // sub-expressions inside also surrounded by parens.
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
            // could be a comma delimited list of params to a function call
            begin: /,/,
            relevance: 0
          },
          {
            match: /\s+/,
            relevance: 0
          },
          {
            // JSX
            variants: [
              { begin: FRAGMENT.begin, end: FRAGMENT.end },
              { match: XML_SELF_CLOSING },
              {
                begin: XML_TAG.begin,
                // we carefully check the opening tag to see if it truly
                // is a tag and not a false positive
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
        // prevent this from getting swallowed up by function
        // since they appear "function like"
        beginKeywords: "while if switch catch for"
      },
      {
        // we have to count the parens to make sure we actually have the correct
        // bounding ( ).  There could be any number of sub-expressions inside
        // also surrounded by parens.
        begin: "\\b(?!function)" + hljs.UNDERSCORE_IDENT_RE + "\\([^()]*(\\([^()]*(\\([^()]*\\)[^()]*)*\\)[^()]*)*\\)\\s*\\{",
        // end parens
        returnBegin: true,
        label: "func.def",
        contains: [
          PARAMS,
          hljs.inherit(hljs.TITLE_MODE, { begin: IDENT_RE$12, className: "title.function" })
        ]
      },
      // catch ... so it won't trigger the property rule below
      {
        match: /\.\.\./,
        relevance: 0
      },
      PROPERTY_ACCESS,
      // hack: prevents detection of keywords in some circumstances
      // .keyword()
      // $keyword = x
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
        // relevance booster for a pattern common to JS libs: `$(something)` and `$.something`
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
      // xml processing instructions
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
        /*
        The lookahead pattern (?=...) ensures that 'begin' only matches
        '<style' as a single word, followed by a whitespace or an
        ending bracket.
        */
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
        // See the comment in the <style tag about the lookahead pattern
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
      // we need this for now for jSX
      {
        className: "tag",
        begin: /<>|<\/>/
      },
      // open tag
      {
        className: "tag",
        begin: regex.concat(
          /</,
          regex.lookahead(regex.concat(
            TAG_NAME_RE,
            // <tag/>
            // <tag>
            // <tag ...
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
      // close tag
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
function CodeExample({
  code,
  language = "javascript",
  codepenHtml,
  codepenCssExternal,
  withoutCodepen,
  ...props
}) {
  const codeRef = reactExports.useRef();
  const codepenForm = reactExports.useRef();
  const codepenFormData = reactExports.useRef();
  const isAsync = !!code.match(/(^|\n)\w.*await/);
  reactExports.useEffect(() => {
    if (!codeRef.current || codeRef.current.classList.contains("hljs")) {
      return;
    }
    if (language === "javascript") {
      HighlightJS.registerLanguage("javascript", javascript);
    } else if (language === "xml") {
      HighlightJS.registerLanguage("xml", xml);
    }
    HighlightJS.highlightElement(codeRef.current);
  }, [codeRef, language]);
  const openInCodepen = (event) => {
    if (event.nativeEvent.offsetY < 0) {
      const codepenValue = {
        js_external: "https://cdn.jsdelivr.net/npm/sweetalert2@11",
        // eslint-disable-line
        css: 'body {\n  font-family: "Open Sans", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans, Ubuntu, Cantarell, "Helvetica Neue", Helvetica, Arial, sans-serif; \n}'
      };
      codepenValue.html = codepenHtml;
      codepenValue.css_external = codepenCssExternal;
      codepenValue.js = "";
      if (isAsync) {
        codepenValue.js += `(async () => {
`;
        code = code.replace(/(^|\n)/g, "$1  ");
      }
      codepenValue.js += code.replace(/\/images/g, `${window.location.href}images`);
      if (isAsync) {
        codepenValue.js += `
})()`;
      }
      codepenFormData.current.value = JSON.stringify(codepenValue);
      codepenForm.current.submit();
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { className: withoutCodepen ? "" : "code-sample", onClick: openInCodepen, ...props, children: /* @__PURE__ */ jsxRuntimeExports.jsx("code", { ref: codeRef, children: code }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("form", { action: "https://codepen.io/pen/define", method: "POST", target: "_blank", ref: codepenForm, children: /* @__PURE__ */ jsxRuntimeExports.jsx("input", { type: "hidden", name: "data", ref: codepenFormData }) })
  ] });
}
function Showcase() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "showcase normal", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "normal-alert", children: "Normal alert" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("button", { onClick: examples.normalAlert.fn, children: "Show normal alert" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.normalAlert.fnString }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "vs-icon" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "showcase sweet", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/SweetAlert2.png", height: "30", alt: "SweetAlert2" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          className: "show-example-btn",
          "aria-label": "Show SweetAlert2 success message",
          onClick: examples.sweetAlert.fn,
          children: "Show success message"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.sweetAlert.fnString })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "center-container", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "center", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://m.do.co/c/12907f2ba0bf", target: "_blank", rel: "noreferrer noopener", tabIndex: -1, children: "Get $100 in free credits with DigitalOcean!" }) }) })
  ] });
}
function Examples() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "examples", children: "Examples" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "examples", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "message-example", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A basic message" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A basic message",
              onClick: examples.basicMessage.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.basicMessage.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "title-text-example", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A title with a text under" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A title with a text under",
              onClick: examples.titleText.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.titleText.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "serror-example", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A modal with a title, an error icon, a text, and a footer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A modal with a title, an error icon, a text, and a footer",
              onClick: examples.errorType.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.errorType.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "long-text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A modal window with a long content inside:" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A modal window with a long content inside",
              onClick: examples.longText.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.longText.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "custom-html", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Custom HTML description and buttons with ARIA labels" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: Custom HTML description and buttons",
              onClick: examples.customHtml.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: examples.customHtml.fnString,
            codepenCssExternal: "https://cdn.jsdelivr.net/npm/font-awesome@4.7.0/css/font-awesome.min.css"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "three-buttons", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A dialog with three buttons" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A dialog with three buttons",
              onClick: examples.threeButtons.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.threeButtons.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "custom-position", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A custom positioned dialog" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A custom positioned dialog",
              onClick: examples.customPosition.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.customPosition.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "custom-animation", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
            "Custom animation with",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: "https://animate.style/",
                target: "_blank",
                rel: "noreferrer noopener",
                tabIndex: -1,
                className: "nowrap",
                children: [
                  "Animate.css ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-external-link" })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: jQuery HTML with custom animation",
              onClick: examples.customAnimation.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: examples.customAnimation.fnString,
            codepenCssExternal: "https://cdn.jsdelivr.net/npm/animate.css@4/animate.min.css"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "confirm-dialog", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: 'A confirm dialog, with a function attached to the "Confirm"-button' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A confirm dialog, with a function attached to the 'Confirm'-button",
              onClick: examples.warningConfirm.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.warningConfirm.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "dismiss-handle", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: '... and by passing a parameter, you can execute something else for "Cancel"' }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: passing a parameter, you can execute something else for 'Cancel'",
              onClick: examples.handleDismiss.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: examples.handleDismiss.fnString,
            codepenCssExternal: "https://sweetalert2.github.io/dist/bootstrap4-buttons.css"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "custom-image-example", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A message with a custom image" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A message with a custom image",
              onClick: examples.customImage.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.customImage.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "custom-width-padding-background", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A message with custom width, padding, background and animated Nyan Cat" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A message with custom width, padding and background",
              onClick: examples.customWidth.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.customWidth.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "timer-example", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "A message with auto close timer" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A message with auto close timer",
              onClick: examples.timer.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.timer.fnString })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "rtl", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Right-to-left support for Arabic, Persian, Hebrew, and other RTL languages" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: A message in Arabic",
              onClick: examples.rtl.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.rtl.fnString, codepenHtml: `<body dir="rtl"></body>` })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "ajax-request", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "AJAX request example" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "button",
            {
              className: "show-example-btn",
              "aria-label": "Try me! Example: AJAX request",
              onClick: examples.ajaxRequest.fn,
              children: "Try me!"
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.ajaxRequest.fnString })
      ] })
    ] })
  ] });
}
function Installation() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container download-section", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "download", children: "Download & install" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "unselectable", children: "$ " }),
        "npm install sweetalert2"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Or grab from",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.jsdelivr.com/package/npm/sweetalert2", target: "_blank", rel: "noopener", className: "nowrap", children: [
          "jsDelivr CDN ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-external-link" })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"><\/script>`,
          language: "xml",
          withoutCodepen: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(JsdelivrInfo, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "usage", children: "Usage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "1. Initialize the plugin by referencing the necessary files:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: `<script src="sweetalert2.all.min.js"><\/script>`, withoutCodepen: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mobile-hidden", children: "You can also include the stylesheet separately if desired:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: `<script src="sweetalert2.min.js"><\/script>
<link rel="stylesheet" href="sweetalert2.min.css">`,
            language: "xml",
            withoutCodepen: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Or" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

// CommonJS
const Swal = require('sweetalert2')`,
          withoutCodepen: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "It's possible to import JS and CSS separately, e.g. if you need to customize styles:" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: `import Swal from 'sweetalert2/dist/sweetalert2.js'
import 'sweetalert2/src/sweetalert2.scss'`,
            withoutCodepen: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "2. Call the sweetAlert2-function after the page has loaded" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `Swal.fire({
  title: 'Error!',
  text: 'Do you want to continue',
  icon: 'error',
  confirmButtonText: 'Cool'
})`,
          withoutCodepen: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "frameworks-integrations", children: "Integrations with major JS frameworks" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "frameworks-integrations", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/sweetalert2/sweetalert2-react-content",
            target: "_blank",
            rel: "noopener",
            "aria-label": "React integration",
            children: [
              "React",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/react.svg", width: "125", alt: "" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/avil13/vue-sweetalert2",
            target: "_blank",
            rel: "noopener",
            "aria-label": "Vue integration",
            children: [
              "Vue",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/vue.png", width: "125", alt: "" })
            ]
          }
        ) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
          "a",
          {
            href: "https://github.com/sweetalert2/ngx-sweetalert2",
            target: "_blank",
            rel: "noopener",
            "aria-label": "Angular integration",
            children: [
              "Angular",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/angular.svg", width: "125", alt: "" })
            ]
          }
        ) })
      ] })
    ] })
  ] });
}
function JsdelivrInfo() {
  const [jsdelivrRank, setJsdelivrRank] = reactExports.useState("");
  const [jsdelivrTotal, setJsdelivrTotal] = reactExports.useState("");
  function ordinalSuffix(i2) {
    const n2 = parseInt(i2);
    const j2 = n2 % 10;
    const k2 = n2 % 100;
    if (j2 === 1 && k2 !== 11) {
      return `${i2}st`;
    }
    if (j2 === 2 && k2 !== 12) {
      return `${i2}nd`;
    }
    if (j2 === 3 && k2 !== 13) {
      return `${i2}rd`;
    }
    return `${i2}th`;
  }
  reactExports.useEffect(() => {
    fetch("https://data.jsdelivr.com/v1/package/npm/sweetalert2/stats/month").then((response) => response.json()).then((response) => {
      if (response.rank && response.total) {
        setJsdelivrRank(response.rank);
        setJsdelivrTotal(response.total);
      }
    }).catch(() => {
    });
  }, []);
  if (jsdelivrRank && jsdelivrTotal) {
    return /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "jsdelivr-info mobile-hidden", children: [
      "sweetalert2 is the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: ordinalSuffix(jsdelivrRank) }),
      "most popular package on jsDelivr, with",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: parseInt(jsdelivrTotal).toLocaleString() }),
      " CDN hits in the last month"
    ] });
  }
}
function ConfigurationParams() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "configuration", children: "Configuration Params" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "center", children: "Here are the keys that you can use if you pass an object into sweetAlert2:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { id: "api", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "titles", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("th", { children: [
            "Argument",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "(",
            /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "Default value" }),
            ")"
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Description" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "title", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#title", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "title" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The title of the popup, as HTML." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "titleText", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#titleText", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "titleText" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The title of the popup, as text. Useful to avoid HTML injection." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "html", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#html", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "html" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "A HTML description for the popup.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "text" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
              " parameters are provided in the same time,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
              " will be used.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "[Security] SweetAlert2 does NOT sanitize this parameter. It is the developer's responsibility to escape any user input when using the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
              " option, so XSS attacks would be prevented."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "text", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#text", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "text" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "A description for the popup.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "text" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
              " parameters are provided in the same time,",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
              " will be used."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "icon", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#icon", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "icon" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "The icon of the popup. SweetAlert2 comes with 5 built-in icon which will show a corresponding icon animation: ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "warning" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "error" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "success" }),
              ",",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "info" }),
              ", and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "question" }),
              '. It can either be put in the array under the key "icon" or passed as the third parameter of the function.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "iconColor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#iconColor", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "iconColor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Use this to change the color of the icon." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "iconHtml", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#iconHtml", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "iconHtml" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The custom HTML content for an icon." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showClass", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showClass", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showClass" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CodeExample,
                {
                  code: `{
  popup: 'swal2-show',
  backdrop: 'swal2-backdrop-show',
  icon: 'swal2-icon-show'
}`,
                  withoutCodepen: true
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "CSS classes for animations when showing a popup (fade in)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "hideClass", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#hideClass", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "hideClass" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                CodeExample,
                {
                  code: `{
  popup: 'swal2-hide',
  backdrop: 'swal2-backdrop-hide',
  icon: 'swal2-icon-hide'
}`,
                  withoutCodepen: true
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "CSS classes for animations when hiding a popup (fade out)" })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "footer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#footer", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "footer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The footer of the popup. Can be either plain text or HTML." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "backdrop", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#backdrop", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "backdrop" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Whether or not SweetAlert2 should show a full screen click-to-dismiss backdrop. Can be either a",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "boolean" }),
              " or a ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "string" }),
              " which will be assigned to the CSS",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "background" }),
              " property."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "toast", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#toast", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "toast" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Whether or not an alert should be treated as a toast notification. This option is normally coupled with the",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "position" }),
              " parameter and a timer. Toasts are NEVER autofocused."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "target", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#target", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "target" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'body'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The container element for adding popup into." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#input", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "input" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Input field type, can be",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "text" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "email" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "password" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "number" }),
              ",",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "tel" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "range" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "textarea" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "select" }),
              ",",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "radio" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "checkbox" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "file" }),
              " and ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "url" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "width", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#width", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "width" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'32em'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup window width, including paddings (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "box-sizing: border-box" }),
              "). Can be in any CSS unit (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "px" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "em/rem" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "%" }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "padding", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#padding", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "padding" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'0 0 1.25em'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup window padding. Can be in any CSS unit (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "px" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "em/rem" }),
              ",",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "%" }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "color", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#color", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "color" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Color for title, content and footer (CSS ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "color" }),
              " property). The default color is",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'#545454'" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "background", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#background", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "background" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup window background (CSS background property). The default background is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'#fff'" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "position", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#position", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "position" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'center'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup window position, can be ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'top'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'top-start'" }),
              ",",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'top-end'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'center'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'center-start'" }),
              ",",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'center-end'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'bottom'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'bottom-start'" }),
              ", or",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'bottom-end'" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "grow", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#grow", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "grow" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Paired with window position, sets the direction the popup should grow in, can be set to",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'row'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'column'" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "'fullscreen'" }),
              ", or",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "customClass", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#customClass", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "customClass" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "A custom CSS class for the popup:",
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                CodeExample,
                {
                  code: `customClass: {
  container: '...',
  popup: '...',
  header: '...',
  title: '...',
  closeButton: '...',
  icon: '...',
  image: '...',
  htmlContainer: '...',
  input: '...',
  inputLabel: '...',
  validationMessage: '...',
  actions: '...',
  confirmButton: '...',
  denyButton: '...',
  cancelButton: '...',
  loader: '...',
  footer: '....',
  timerProgressBar: '....',
}`,
                  withoutCodepen: true
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "timer", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#timer", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "timer" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Auto close timer of the popup. Set in ms (milliseconds). See also",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#getTimerLeft", children: "Swal.getTimerLeft()" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#stopTimer", children: "Swal.stopTimer()" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#resumeTimer", children: "Swal.resumeTimer()" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#toggleTimer", children: "Swal.toggleTimer()" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#isTimerRunning", children: "Swal.isTimerRunning()" }),
              " and",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#increaseTimer", children: "Swal.increaseTimer()" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "timerProgressBar", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#timerProgressBar", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "timerProgressBar" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "If set to true, the timer will have a progress bar at the bottom of a popup. Mostly, this feature is useful with toasts." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "heightAuto", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#heightAuto", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "heightAuto" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "By default, SweetAlert2 sets html's and body's CSS ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "height" }),
              " to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "auto !important" }),
              ". If this behavior isn't compatible with your project's layout, set",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "heightAuto" }),
              " to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "allowOutsideClick", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#allowOutsideClick", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "allowOutsideClick" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ", the user can't dismiss the popup by clicking outside it.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "You can also pass a custom function returning a boolean value, e.g. if you want to disable outside clicks for the loading state of a popup."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "allowEscapeKey", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#allowEscapeKey", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "allowEscapeKey" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ", the user can't dismiss the popup by pressing the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Esc" }),
              " key. You can also pass a custom function returning a boolean value, e.g. if you want to disable the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Esc" }),
              " key for the loading state of a popup."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "allowEnterKey", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#allowEnterKey", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "allowEnterKey" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ", the user can't confirm the popup by pressing the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Enter" }),
              " or",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Space" }),
              " keys, unless they manually focus the confirm button. You can also pass a custom function returning a boolean value."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "stopKeydownPropagation", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#stopKeydownPropagation", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "stopKeydownPropagation" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ", SweetAlert2 will allow ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "keydown" }),
              " events propagation to the document."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "keydownListenerCapture", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#keydownListenerCapture", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "keydownListenerCapture" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Useful for those who are using SweetAlert2 along with Bootstrap modals. By default",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "keydownListenerCapture" }),
              " is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              " which means when a user hits",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Esc" }),
              ", both SweetAlert2 and Bootstrap modals will be closed. Set",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "keydownListenerCapture" }),
              " to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              " to fix that behavior."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showConfirmButton", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showConfirmButton", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showConfirmButton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ', a "Confirm"-button will not be shown.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showDenyButton", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showDenyButton", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showDenyButton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ', a "Deny"-button will be shown. It can be useful when you want a popup with 3 buttons.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showCancelButton", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showCancelButton", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showCancelButton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ', a "Cancel"-button will be shown, which the user can click on to dismiss the modal.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "confirmButtonText", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#confirmButtonText", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "confirmButtonText" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'OK'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Use this to change the text on the "Confirm"-button.' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "denyButtonText", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#denyButtonText", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "denyButtonText" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'No'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Use this to change the text on the "Deny"-button.' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "cancelButtonText", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#cancelButtonText", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "cancelButtonText" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'Cancel'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Use this to change the text on the "Cancel"-button.' })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "confirmButtonColor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#confirmButtonColor", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "confirmButtonColor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              'Use this to change the background color of the "Confirm"-button. The default color is',
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "#3085d6" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "denyButtonColor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#denyButtonColor", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "denyButtonColor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              'Use this to change the background color of the "Deny"-button. The default color is',
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "#dd6b55" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "cancelButtonColor", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#cancelButtonColor", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "cancelButtonColor" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              'Use this to change the background color of the "Cancel"-button. The default color is',
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "#aaa" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "confirmButtonAriaLabel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#confirmButtonAriaLabel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "confirmButtonAriaLabel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Use this to change the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "aria-label" }),
              ' for the "Confirm"-button.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "denyButtonAriaLabel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#denyButtonAriaLabel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "denyButtonAriaLabel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Use this to change the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "aria-label" }),
              ' for the "Deny"-button.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "cancelButtonAriaLabel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#cancelButtonAriaLabel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "cancelButtonAriaLabel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Use this to change the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "aria-label" }),
              ' for the "Cancel"-button.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "buttonsStyling", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#buttonsStyling", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "buttonsStyling" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Apply default styling to buttons. If you want to use your own classes (e.g. Bootstrap classes) set this parameter to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "reverseButtons", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#reverseButtons", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "reverseButtons" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ' if you want to invert default buttons positions ("Confirm"-button on the right side).'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "focusConfirm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#focusConfirm", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "focusConfirm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              ' if you want to focus the first element in tab order instead of "Confirm"-button by default.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "returnFocus", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#returnFocus", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "returnFocus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              " if you don't want to return the focus to the element that invoked the modal after the modal is closed."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "focusDeny", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#focusDeny", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "focusDeny" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ' if you want to focus the "Deny"-button by default.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "focusCancel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#focusCancel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "focusCancel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ' if you want to focus the "Cancel"-button by default.'
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showCloseButton", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showCloseButton", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showCloseButton" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              " to show close button in top right corner of the popup."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "closeButtonHtml", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#closeButtonHtml", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "closeButtonHtml" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'&times;'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Use this to change the content of the close button." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "closeButtonAriaLabel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#closeButtonAriaLabel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "closeButtonAriaLabel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "'Close this dialog'" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Use this to change the ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "aria-label" }),
              " for the close button."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "loaderHtml", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#loaderHtml", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "loaderHtml" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Use this to change the HTML content of the loader." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showLoaderOnConfirm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showLoaderOnConfirm", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showLoaderOnConfirm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              " to disable buttons and show the loader instead of the Confirm button. Use it in combination with the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#preConfirm", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "preConfirm" }) }),
              " ",
              "parameter."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showLoaderOnDeny", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#showLoaderOnDeny", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "showLoaderOnDeny" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              " to disable buttons and show the loader instead of the Deny button. Use it in combination with the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#preDeny", children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "preDeny" }) }),
              " ",
              "parameter."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "scrollbarPadding", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#scrollbarPadding", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "scrollbarPadding" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              " to disable body padding adjustment when the page scrollbar gets hidden while the popup is shown"
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "preConfirm", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#preConfirm", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "preConfirm" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Function to execute before confirming, may be async (Promise-returning) or sync. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Returned (or resolved) value can be:",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
                  " to prevent a popup from closing"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "anything else to pass that value as the ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" }),
                  " of",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "undefined" }),
                  " to keep the default ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" })
                ] })
              ] }),
              "See ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#ajax-request", children: "usage example" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "preDeny", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#preDeny", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "preDeny" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Function to execute before denying, may be async (Promise-returning) or sync. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Returned (or resolved) value can be:",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
                  " to prevent a popup from closing"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "anything else to pass that value as the ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" }),
                  " of",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "undefined" }),
                  " to keep the default ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" })
                ] })
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "returnInputValueOnDeny", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#returnInputValueOnDeny", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "returnInputValueOnDeny" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "false" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If you want to return the input value as ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" }),
              " when denying the popup, set to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
              ". Otherwise, the denying will set ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "result.value" }),
              " to",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "imageUrl", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#imageUrl", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "imageUrl" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Add a customized icon for the popup. Should contain a string with the path or URL to the image." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "imageWidth", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#imageWidth", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "imageWidth" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If imageUrl is set, you can specify imageWidth to describes image width. Can be in any CSS unit (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "px" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "em/rem" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "%" }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "imageHeight", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#imageHeight", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "imageHeight" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Custom image height. Can be in any CSS unit (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "px" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "em/rem" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "%" }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "imageAlt", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#imageAlt", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "imageAlt" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "An alternative text for the custom image icon." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputLabel", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputLabel", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputLabel" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Input field label." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputPlaceholder", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputPlaceholder", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputPlaceholder" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Input field placeholder." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputValue", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputValue", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputValue" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "''" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Input field initial value. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If the input type is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "select" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "inputValue" }),
              " will represent the selected",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "<option>" }),
              " tag. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If the input type is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "checkbox" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "inputValue" }),
              " will represent the",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "checked" }),
              " state. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If the input type is ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "email" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "number" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "tel" }),
              ",",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "text" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "email" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "number" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "tel" }),
              "or ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "textarea" }),
              ", a Promise can be accepted as ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "inputValue" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputOptions", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputOptions", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputOptions" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "If ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "input" }),
              " parameter is set to ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"select"' }),
              " or ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: '"radio"' }),
              ", you can provide options. Can be a Map or a plain object, with keys that represent option values and values that represent option text. You can also provide plain object or Map as values that will represented a group of options, being the label of this ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "<optgroup>" }),
              " the key. Finally, you can also provide a Promise that resolves with one of those types."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputAutoFocus", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputAutoFocus", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputAutoFocus" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Automatically focus the input when popup is shown. Set this parameter to",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              " to disable auto-focusing."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputAutoTrim", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputAutoTrim", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputAutoTrim" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "true" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Automatically remove whitespaces from both ends of a result string. Set this parameter to",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
              " to disable auto-trimming."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputAttributes", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputAttributes", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputAttributes" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", {})
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "HTML input attributes (e.g. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "min" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "max" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "autocomplete" }),
              ",",
              " ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "accept" }),
              "), that are added to the input field. Object keys will represent attributes names, object values will represent attributes values."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "inputValidator", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#inputValidator", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "inputValidator" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Validator for input field, may be async (Promise-returning) or sync. ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Returned (or resolved) value can be:",
              /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "a ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "falsy" }),
                  " value (",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "undefined" }),
                  ", ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "null" }),
                  ",",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
                  ") for indicating ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "success" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                  "a string value (error message) for indicating ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "failure" })
                ] })
              ] }),
              "See ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#input-select", children: "usage example" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "validationMessage", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#validationMessage", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "validationMessage" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "A custom validation message for default validators (email, url)." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "progressSteps", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#progressSteps", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "progressSteps" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "[]" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Progress steps, useful for queues." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "currentProgressStep", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#currentProgressStep", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "currentProgressStep" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Current active progress step." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "progressStepsDistance", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#progressStepsDistance", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "progressStepsDistance" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Distance between progress steps. Can be in any CSS unit (",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "px" }),
              ", ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "em/rem" }),
              ",",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "%" }),
              ")."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "willOpen", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#willOpen", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "willOpen" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Popup lifecycle hook. Synchronously runs before the popup is shown on screen. Provides popup DOM element as the argument." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "didOpen", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#didOpen", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "didOpen" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Popup lifecycle hook. Asynchronously runs after the popup has been shown on screen. Provides popup DOM element as the argument." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "didRender", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#didRender", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "didRender" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup lifecycle hook. Synchronously runs after the popup DOM has been updated (ie. just before the popup is repainted on the screen).",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Provides popup DOM element as the argument.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "Typically, this will happen after ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" }),
              " or ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.update()" }),
              ".",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If you want to perform changes in the popup's DOM, that survive ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.update()" }),
              ", prefer",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "didRender" }),
              " over ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "willOpen" }),
              "."
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "willClose", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#willClose", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "willClose" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Popup lifecycle hook. Synchronously runs when the popup closes by user interaction (and not due to another popup being fired). Provides popup DOM element as the argument." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "didClose", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#didClose", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "didClose" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Popup lifecycle hook. Asynchronously runs after the popup has been disposed by user interaction (and not due to another popup being fired)." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "didDestroy", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("a", { className: "hover-anchor", href: "#didDestroy", children: "#" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "didDestroy" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              /* @__PURE__ */ jsxRuntimeExports.jsx("i", { children: "undefined" })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
              "Popup lifecycle hook. Synchronously runs after popup has been destroyed either by user interaction or by another popup.",
              /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
              "If you have cleanup operations that you need to reliably execute each time a popup is closed, prefer",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "didDestroy" }),
              " over ",
              /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "didClose" }),
              "."
            ] })
          ] })
        ] })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", id: "mixin", children: [
        "You can easily reuse configuration by creating your own ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal" }),
        " with",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { children: [
          "Swal.mixin(",
          "{",
          "...options",
          "}",
          ")"
        ] }),
        ":"
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "examples", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Mixin example" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "show-example-btn", "aria-label": "Try me! Example: Mixin", onClick: examples.mixin.fn, children: "Try me!" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.mixin.fnString })
    ] }) })
  ] });
}
function DeclarativeTemplates() {
  const template = `
<template id="my-template">
  <swal-title>
    Save changes to "Untitled 1" before closing?
  </swal-title>
  <swal-icon type="warning" color="red"></swal-icon>
  <swal-button type="confirm">
    Save As
  </swal-button>
  <swal-button type="cancel">
    Cancel
  </swal-button>
  <swal-button type="deny">
    Close without Saving
  </swal-button>
  <swal-param name="allowEscapeKey" value="false" />
  <swal-param
    name="customClass"
    value='{ "popup": "my-popup" }' />
  <swal-function-param
    name="didOpen"
    value="popup => console.log(popup)" />
</template>`.trim();
  const declarativeTriggeringTemplate = `
<template id="my-template">
  <swal-title>Hey!</swal-title>
</template>

<button data-swal-template="#my-template">
  Trigger modal
</button>

<button data-swal-toast-template="#my-template">
  Trigger toast
</button>`.trim();
  reactExports.useEffect(() => {
    Swal.bindClickHandler();
    Swal.mixin({
      toast: true
    }).bindClickHandler("data-swal-toast-template");
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container mobile-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "declarative-templates", children: "Declarative templates and declarative triggering" }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
        "There's also the declarative way to define a popup, via the",
        " ",
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href: "https://developer.mozilla.org/en-US/docs/Web/HTML/Element/template",
            target: "_blank",
            rel: "noreferrer noopener",
            tabIndex: -1,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "<template>" })
          }
        ),
        " ",
        "tag. This is handy when you want to define popup on server side (SSR)."
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "examples mobile-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { id: "declarative-template", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { children: "Declarative template example" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: Declarative template",
            onClick: examples.declarativeTemplate.fn,
            children: "Try me!"
          }
        )
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            dangerouslySetInnerHTML: {
              __html: template
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: template, language: "xml", withoutCodepen: true }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.declarativeTemplate.fnString, codepenHtml: template })
      ] })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container mobile-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "center", children: "Supported template elements:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `
<swal-title>…</swal-title>
<swal-html>…</swal-html>
<swal-footer>…</swal-footer>
<swal-param name="…" value="…" />
<swal-function-param name="…" value="…" />
<swal-button type="…" color="…" aria-label="…">…</swal-button>
<swal-image src="…" width="…" height="…" alt="…" />
<swal-icon type="…" color="…">…</swal-icon>
<swal-input type="…" label="…" placeholder="…" value="…" />
<swal-input-option value="…">…</swal-input-option>
`.trim(),
          language: "xml",
          withoutCodepen: true
        }
      )
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "center-container mobile-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { id: "declarative-triggering", className: "center", children: [
      "And you can even trigger SweetAlert2 popups declaratively! Use the ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "bindClickHandler()" }),
      " method for that:"
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "examples mobile-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "ui", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "show-example-btn", "data-swal-template": "#my-template", style: { margin: "1em 0" }, children: "Trigger modal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("button", { className: "show-example-btn", "data-swal-toast-template": "#my-template", children: "Trigger toast" })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { style: { display: "inline-flex", flexDirection: "column" }, children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: `
<button data-swal-template="#my-template">
  Trigger modal
</button>

<button data-swal-toast-template="#my-template">
  Trigger toast
</button>
              `.trim(),
            language: "xml",
            withoutCodepen: true
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          CodeExample,
          {
            code: examples.declarativeTriggering.fnString,
            codepenHtml: declarativeTriggeringTemplate,
            style: { marginTop: "10px" }
          }
        )
      ] })
    ] }) })
  ] });
}
function HandlingButtons() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "handling-buttons", children: "Handling Buttons (Confirm, Deny, Cancel)" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "When the user clicks a button, the Promise returned by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" }),
      " will be resolved with the",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "SweetAlertResult" }),
      " object:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "dismiss-reasons", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "titles", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Key" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Description" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "isConfirmed" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            'The "Confirm" button was clicked, the ',
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "value" }),
            " will contain the result"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "isDenied" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            'The "Deny" button was clicked, the ',
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "value" }),
            " will be ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
            ".",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Alternatively, if there's an input in a popup, you can use ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "returnInputValueOnDeny: true" }),
            " ",
            "to return the input's value."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "isDismissed" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            'The "Cancel" button was clicked, the ',
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "dismiss" }),
            " will be",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "nowrap", children: "Swal.DismissReason.cancel" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "value" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "The value from the popup, possible values:",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
                " for simple confirmed dialogs"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
                " for denied popups"
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "any value for popups with inputs" })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "dismiss" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "The dismissal reason, see the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#handling-dismissals", children: "Handling Dismissals" }),
            " section for details"
          ] })
        ] })
      ] })
    ] })
  ] });
}
function HandlingDismissals() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "center-container", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "handling-dismissals", children: "Handling Dismissals" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "When an alert is dismissed by the user, the Promise returned by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" }),
      " will be resolved with an object",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "nowrap", children: [
        "{",
        " isDismissed: true, dismiss: reason ",
        "}"
      ] }),
      " ",
      "documenting the reason it was dismissed:"
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { className: "dismiss-reasons", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "titles", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Reason" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Description" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Related configuration" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "nowrap", children: "Swal.DismissReason.backdrop" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The user clicked the backdrop." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#allowOutsideClick", children: "allowOutsideClick" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "nowrap", children: "Swal.DismissReason.cancel" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The user clicked the cancel button." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#showCancelButton", children: "showCancelButton" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "nowrap", children: "Swal.DismissReason.close" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The user clicked the close button." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#showCloseButton", children: "showCloseButton" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "nowrap", children: "Swal.DismissReason.esc" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "The user clicked the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("kbd", { children: "Esc" }),
            " key."
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#allowEscapeKey", children: "allowEscapeKey" }) })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "nowrap", children: "Swal.DismissReason.timer" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "The timer ran out, and the alert closed automatically." }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "If a popup is dismissed by ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "nowrap", children: "Swal.close()" }),
      ", the Promise will be resolved with an object",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsxs("strong", { className: "nowrap", children: [
        "{",
        " isDismissed: true ",
        "}"
      ] }),
      " ",
      "(",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "dismiss" }),
      " will be",
      /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "undefined" }),
      ")."
    ] })
  ] });
}
function Icons() {
  const showExample = (icon) => {
    Swal.fire({
      icon,
      title: `Icon ${icon}`
    });
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "icons", children: "Icons" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "popup-icons", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "success" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "swal2-icon swal2-success", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-success-circular-line-left" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "swal2-success-line-tip" }),
          " ",
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "swal2-success-line-long" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-success-ring" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-success-fix" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-success-circular-line-right" })
        ] }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            onClick: () => showExample("success"),
            "aria-label": "Try me! Example: success modal",
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "error" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon swal2-error", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "swal2-x-mark", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "swal2-x-mark-line-left" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "swal2-x-mark-line-right" })
        ] }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            onClick: () => showExample("error"),
            "aria-label": "Try me! Example: error modal",
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "warning" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon swal2-warning", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon-content", children: "!" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            onClick: () => showExample("warning"),
            "aria-label": "Try me! Example: warning modal",
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "info" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon swal2-info", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon-content", children: "i" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            onClick: () => showExample("info"),
            "aria-label": "Try me! Example: info modal",
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "question" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon swal2-question", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "swal2-icon-content", children: "?" }) }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            onClick: () => showExample("question"),
            "aria-label": "Try me! Example: question modal",
            children: "Try me!"
          }
        ) })
      ] })
    ] }) })
  ] });
}
function InputTypes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "input-types", children: "Input Types" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("table", { className: "input-types", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-text", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "text" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.textInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type text",
            onClick: examples.textInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-email", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "email" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.emailInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type email",
            onClick: examples.emailInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-url", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "url" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.urlInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type url",
            onClick: examples.urlInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-password", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "password" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.passwordInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type password",
            onClick: examples.passwordInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-textarea", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "textarea" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.textareaInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type textarea",
            onClick: examples.textareaInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-select", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "select" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.selectInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type select",
            onClick: examples.selectInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-radio", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "radio" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.radioInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type radio",
            onClick: examples.radioInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-checkbox", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "checkbox" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.checkboxInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type checkbox",
            onClick: examples.checkboxInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-file", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "file" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.fileInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type file",
            onClick: examples.fileInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "input-range", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "range" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.rangeInput.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: input type range",
            onClick: examples.rangeInput.fn,
            children: "Try me!"
          }
        ) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("tr", { id: "multiple-inputs", className: "mobile-hidden", children: /* @__PURE__ */ jsxRuntimeExports.jsx("td", { colSpan: 3, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { children: [
        "Multiple inputs aren't supported, you can achieve them by using ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
        " and",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "preConfirm" }),
        " parameters.",
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Inside the ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "preConfirm()" }),
        " function you can return (or, if async, resolve with) the custom result:"
      ] }) }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "multiple-inputs-example", className: "mobile-hidden", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", {}),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(CodeExample, { code: examples.multipleInputs.fnString }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "button",
          {
            className: "show-example-btn",
            "aria-label": "Try me! Example: multiple inputs",
            onClick: examples.multipleInputs.fn,
            children: "Try me!"
          }
        ) })
      ] })
    ] }) })
  ] });
}
function Methods() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(jsxRuntimeExports.Fragment, { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mobile-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "methods", children: "Methods" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("table", { children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("thead", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { className: "titles", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Method" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("th", { children: "Description" })
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("tbody", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.isVisible()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Determine if popup is shown." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
            "Swal.mixin(",
            `{`,
            " ...options ",
            `}`,
            ")"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Returns an extended version of ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal" }),
            " containing ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "params" }),
            " as defaults. Useful for reusing Swal configuration."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "update", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("h4", { children: [
            "Swal.update(",
            `{`,
            "...options",
            `}`,
            ")"
          ] }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Updates popup options." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.close()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Close the currently open SweetAlert2 popup programmatically, the Promise returned by",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "Swal.fire()" }),
            " will be resolved with an empty object",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "nowrap", children: `{}` })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getContainer()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the popup container which contains the backdrop and the popup itself." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getPopup()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the popup." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getTitle()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the popup title." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getProgressSteps()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the progress steps." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getCloseButton()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the close button." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getIcon()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Get the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#icons", children: "icon" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getIconContent()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Get the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#icons", children: "icon" }),
            " content (without border)."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getHtmlContainer()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Gets the DOM element where the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "html" }),
            "/",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "text" }),
            " parameter is rendered to."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getImage()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Get the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#image", children: "image" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getActions()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the actions block (buttons container)." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getFooter()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the popup footer." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getFocusableElements()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get all focusable elements in the popup." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "getConfirmButton", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getConfirmButton()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Get the "Confirm" button.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getDenyButton()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Get the "Deny" button.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getCancelButton()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Get the "Cancel" button.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.enableButtons()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Enable "Confirm" and "Cancel" buttons.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.disableButtons()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Disable "Confirm" and "Cancel" buttons.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showLoading", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.showLoading()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Shows loader (spinner), this is useful with AJAX requests.",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            'By default the loader be shown instead of the "Confirm" button, but if you want another button to be replaced with a loader, just pass it like this:',
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { className: "nowrap", children: "Swal.showLoading(Swal.getDenyButton())" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "hideLoading", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.hideLoading()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Hides loader and shows back the button which was hidden by .showLoading()" })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.isLoading()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Determine if popup is in the loading state. Related methods:",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#showLoading", className: "nowrap", children: "Swal.showLoading()" }),
            " ",
            "and",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#hideLoading", className: "nowrap", children: "Swal.hideLoading()" })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "getTimerLeft", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getTimerLeft()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Returns the time left in case when ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            " parameter is set."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "stopTimer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.stopTimer()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Stops the timer in case when ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            " parameter is set. Returns the time left"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "resumeTimer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.resumeTimer()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Resume the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            " previously stopped. Returns the time left"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "toggleTimer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.toggleTimer()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Toggle state of the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            " between stopped and running. Returns the time left"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "isTimerRunning", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.isTimerRunning()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Returns the status of a ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            ": ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "true" }),
            " if is running,",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "false" }),
            " if it's paused"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "increaseTimer", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.increaseTimer(ms)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Increase the ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#timer", children: "timer" }),
            " by ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "ms" }),
            " milliseconds. Returns the time left"
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.clickConfirm()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Click the "Confirm"-button programmatically.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.clickDeny()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Click the "Deny"-button programmatically.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.clickCancel()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: 'Click the "Cancel"-button programmatically.' })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getInput()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Get the input DOM node, this method works with ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#input", children: "input parameter" }),
            "."
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.disableInput()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Disable input. A disabled input element is unusable and un-clickable." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.enableInput()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Enable input." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { id: "showValidationMessage", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.showValidationMessage(message)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Show the validation message DOM node." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.resetValidationMessage()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Hide the validation message DOM node." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.getValidationMessage()" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Get the validation message DOM node." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.isValidParameter(param)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: "Determine if parameter name is valid." })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("tr", { children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("td", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Swal.isUpdatableParameter(param)" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("td", { children: [
            "Determine if parameter name is valid for ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#update", children: "Swal.update()" }),
            " method."
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
function Themes() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "themes", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/sweetalert2/sweetalert2-themes", target: "_blank", children: [
      "Themes ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("i", { className: "fa fa-external-link" })
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "themes center-container", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Dark" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/dark", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-dark.png", alt: "theme dark" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Minimal" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/minimal", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-minimal.png", alt: "theme minimal" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Borderless" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/borderless", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-borderless.png", alt: "theme borderless" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Bootstrap 4" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/bootstrap-4", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-bootstrap-4.png", alt: "theme bootstrap 4" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Bulma" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/bulma", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-bulma.png", alt: "theme bulma" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "Material UI" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/material-ui", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-material-ui.png", alt: "theme material ui" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { children: "WordPress Admin" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "https://github.com/sweetalert2/sweetalert2-themes/tree/main/wordpress-admin", target: "_blank", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "images/themes-wordpress-admin.png", alt: "theme material ui" }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Themes Installation" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "code-label", children: "You can install all themes at once:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "unselectable", children: "$ " }),
        "npm install @sweetalert2/themes"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "code-label", children: [
        "Or just a single theme ",
        /* @__PURE__ */ jsxRuntimeExports.jsx("strong", { children: "@sweetalert2/theme-<theme_name>" }),
        ", e.g.:"
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("pre", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("code", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "unselectable", children: "$ " }),
        "npm install @sweetalert2/theme-dark"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "code-label", children: "Or from jsdelivr CDN, e.g.:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `
<link href="https://cdn.jsdelivr.net/npm/@sweetalert2/theme-dark@4/dark.css" rel="stylesheet">
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11/dist/sweetalert2.min.js"><\/script>
          `.trim(),
          language: "xml",
          withoutCodepen: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { children: "Themes Usage" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "code-label", children: "With CSS:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `
<!-- Include a required theme -->
<link rel="stylesheet" href="@sweetalert2/themes/dark/dark.css">
<script src="sweetalert2/dist/sweetalert2.min.js"><\/script>
          `.trim(),
          language: "xml",
          withoutCodepen: true
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "code-label", children: "With SASS:" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        CodeExample,
        {
          code: `
// your-app.js
import Swal from 'sweetalert2/src/sweetalert2.js'

// your-app.scss
@import '@sweetalert2/themes/dark/dark.scss';
          `.trim(),
          withoutCodepen: true
        }
      )
    ] })
  ] });
}
function Sponsors() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "sponsors", children: "Sponsors" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "For all questions related to sponsorship please contact me via email",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sweetalert2@gmail.com", children: "sweetalert2@gmail.com" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sponsors", style: { marginTop: "-1.8em" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "https://github.com/sweetalert2/sweetalert2/blob/main/SPONSORS.md#sponsors",
        target: "_blank",
        rel: "noopener",
        "aria-label": "Become a sponsor",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/plus.png", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Become a sponsor"
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sponsors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://dlxplugins.com/", target: "_blank", rel: "noopener", "aria-label": "DLX Plugins", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://avatars.githubusercontent.com/u/106675919?s=200&v=4", alt: "DLX Plugins" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "DLX Plugins"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://github.com/tiagostutz", target: "_blank", rel: "noopener", "aria-label": "Tiago de Oliveira Stutz", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "https://avatars0.githubusercontent.com/u/3986989?s=200&v=4", alt: "Tiago de Oliveira Stutz" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Tiago de Oliveira Stutz"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://istar.tips/", target: "_blank", rel: "noopener", "aria-label": "iStarTips", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/istartips.png", alt: "iStarTips" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "iStarTips"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://refermate.com/", target: "_blank", rel: "noopener", "aria-label": "Refermate", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/refermate.png", alt: "Refermate" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Refermate"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://roboflow.com/", target: "_blank", rel: "noopener", "aria-label": "Roboflow", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/roboflow.png", alt: "Roboflow" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Roboflow"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.zezelife.com/", target: "_blank", rel: "noopener", "aria-label": "ZezeLife", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/zezelife.png", alt: "ZezeLife" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "ZezeLife"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.serpempire.com/", target: "_blank", rel: "noopener", "aria-label": "SERP Empire", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/serpempire.png", alt: "SERP Empire" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "SERP Empire"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://realspyapps.com/", target: "_blank", rel: "noopener", "aria-label": "Real Spy Apps", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/realspyapps.jpeg", alt: "Real Spy Apps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Real Spy Apps"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.vegega.com/", target: "_blank", rel: "noopener", "aria-label": "Metal Raised Garden Bed", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/vegega.jpeg", alt: "Metal Raised Garden Bed" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Metal Raised Garden Bed"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://celltrackingapps.com/", target: "_blank", rel: "noopener", "aria-label": "Phone Tracking Apps", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/celltrackingapps.png", alt: "Phone Tracking Apps" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Phone Tracking Apps"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.mybitcoinslots.com/", target: "_blank", rel: "noopener", "aria-label": "My Bitcoin slots", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/mybitcoinslots.png", alt: "My Bitcoin slots" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "My Bitcoin slots"
      ] }) })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { id: "nsfw-sponsors", children: "NSFW Sponsors" }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "center", children: [
      "For all questions related to sponsorship please contact me via email",
      " ",
      /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:sweetalert2@gmail.com", children: "sweetalert2@gmail.com" })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "sponsors", style: { marginTop: "-1.8em" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "a",
      {
        href: "https://github.com/sweetalert2/sweetalert2/blob/main/SPONSORS.md#sponsors",
        target: "_blank",
        rel: "noopener",
        "aria-label": "Become a sponsor",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/plus.png", alt: "" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
          "Become a sponsor"
        ]
      }
    ) }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sponsors", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://pinktoys.co.uk/pocket-pussy/", target: "_blank", rel: "noopener", "aria-label": "Pocket pussy", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/pinktoys.png", alt: "Pocket pussy" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Pocket pussy"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.xspacecup.com/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "XspaceCup - Top Male Masturbator Brand",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/xspacecup.png", alt: "XspaceCup - Top Male Masturbator Brand" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "XspaceCup - Top Male Masturbator Brand"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://vlixa.com/", target: "_blank", rel: "noopener", "aria-label": "Vlixa", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/vlixa.png", alt: "Vlixa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Vlixa"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://taboodude.com/", target: "_blank", rel: "noopener", "aria-label": "TabooDude", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/taboodude.png", alt: "TabooDude" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "TabooDude"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://sexsitoys.com/lovense-games/", target: "_blank", rel: "noopener", "aria-label": "Sexsi Toys", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sexsitoys.jpg", alt: "Sexsi Toys" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Sexsi Toys"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.cheapestsexdolls.com", target: "_blank", rel: "noopener", "aria-label": "CheapestSexDolls", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/cheapestsexdolls.png", alt: "CheapestSexDolls" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "CheapestSexDolls"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.bestblowjobmachines.com/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "Best Blowjob Machines",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/best-blowjob-machines.jpg", alt: "Best Blowjob Machines" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Best Blowjob ",
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Machines"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://escortsear.ch/", target: "_blank", rel: "noopener", "aria-label": "EscortSearch", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/escortsearch.jpg", alt: "EscortSearch" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "EscortSearch"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.nakedoll.com/", target: "_blank", rel: "noopener", "aria-label": "NakeDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/nakedoll.png", alt: "NakeDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "NakeDoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://readysetcam.com/", target: "_blank", rel: "noopener", "aria-label": "Ready Set Cam", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/readysetcam.png", alt: "Ready Set Cam" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Ready Set Cam"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.onahole.com/", target: "_blank", rel: "noopener", "aria-label": "hentai sex toys", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/onahole.png", alt: "hentai sex toys" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "hentai sex toys"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://blowupdollshop.com/inflatable-sex-doll/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "Inflatable sex doll",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/blowupdollshop.png", alt: "Inflatable sex doll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "Inflatable sex doll"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://sextoystop.com/", target: "_blank", rel: "noopener", "aria-label": "Sex Doll Torso", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sextoystop.png", alt: "Sex Doll Torso" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Sex Doll Torso"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://sexydollies.com/", target: "_blank", rel: "noopener", "aria-label": "porn sexdoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sexydollies.png", alt: "porn sexdoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "porn sexdoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://bululusexdoll.com/", target: "_blank", rel: "noopener", "aria-label": "cheap sex doll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/bululusexdoll.png", alt: "cheap sex doll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "cheap sex doll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://bululu.shop/", target: "_blank", rel: "noopener", "aria-label": "BULULU", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/bululu.png", alt: "BULULU" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "BULULU"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://vsdoll.net/", target: "_blank", rel: "noopener", "aria-label": "VSDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/vsdoll.png", alt: "VSDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "VSDoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.xndoll.com/", target: "_blank", rel: "noopener", "aria-label": "XNDOLL", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/xndoll.jpeg", alt: "XNDOLL" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "XNDOLL"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.sextorso.com/", target: "_blank", rel: "noopener", "aria-label": "sexdoll torso", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sextorso.png", alt: "sexdoll torso" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "sexdoll torso"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.minisexdoll.com/anime-sexdoll/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "anime sexdoll",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/minisexdoll.png", alt: "anime sexdoll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "anime sexdoll"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.myminisexdoll.com/cheap-sex-dolls/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "cheap sexdoll",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/myminisexdoll.png", alt: "cheap sexdoll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "cheap sexdoll"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.hugedildo.com/", target: "_blank", rel: "noopener", "aria-label": "huge dildo", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/hugedildo.png", alt: "huge dildo" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "huge dildo"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.uusexdoll.com/", target: "_blank", rel: "noopener", "aria-label": "sexdoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/uusexdoll.png", alt: "sexdoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "sexdoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://cutesexdoll.com/", target: "_blank", rel: "noopener", "aria-label": "Cute Sex Doll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/cutesexdoll.jpg", alt: "Cute Sex Doll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Cute Sex Doll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.uusextoy.com/best-pocket-pussy/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "best pocket pussy",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/uusextoy.png", alt: "best pocket pussy" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "best pocket pussy"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.lovedolltorso.com/female-torso-sex-doll/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "female torso sex doll",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/lovedolltorso.png", alt: "female torso sex doll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "female torso sex doll"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.mymasturbators.com/", target: "_blank", rel: "noopener", "aria-label": "male masturbator", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/mymasturbators.png", alt: "male masturbator" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "male masturbator"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.buypenispump.com/", target: "_blank", rel: "noopener", "aria-label": "penis pump", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/buypenispump.png", alt: "penis pump" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "penis pump"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.sexvibrators.in/", target: "_blank", rel: "noopener", "aria-label": "Sex Vibrators", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sexvibrator.png", alt: "Sex Vibrators" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Sex Vibrators"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.viva-awa.com/", target: "_blank", rel: "noopener", "aria-label": "Viva Awa", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/viva-awa.png", alt: "Viva Awa" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Viva Awa"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.sensualdolls.com", target: "_blank", rel: "noopener", "aria-label": "Sensual Dolls", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sensualdolls.png", alt: "Sensual Dolls" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Sensual Dolls"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.bestrealdoll.com/collections/us-warehouse",
          target: "_blank",
          rel: "noopener",
          "aria-label": "BestRealDoll",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/bestrealdoll.jpeg", alt: "BestRealDoll" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "BestRealDoll"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://www.sexdolltech.com/product-category/us-warehouse/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "SexDollTech",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sexdolltech.jpeg", alt: "SexDollTech" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "SexDollTech"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.sexdollsoff.com/", target: "_blank", rel: "noopener", "aria-label": "SexDollsOff", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sexdollsoff.png", alt: "YourDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "SexDollsOff"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://realsexdoll.com/", target: "_blank", rel: "noopener", "aria-label": "RealSexDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/realsexdoll.png", alt: "YourDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "RealSexDoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.yourdoll.com/", target: "_blank", rel: "noopener", "aria-label": "YourDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/yourdoll.jpg", alt: "YourDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "YourDoll"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://anniesdollhouse.com/", target: "_blank", rel: "noopener", "aria-label": "Annie's Dollhouse", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/annies-dollhouse.png", alt: "Annie's Dollhouse" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "Annie's Dollhouse"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.mysextoyguide.com/", target: "_blank", rel: "noopener", "aria-label": "My Sex Toy Guide", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/my-sex-toy-guide.jpg", alt: "My Sex Toy Guide" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "My Sex Toy Guide"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://sextoycollective.com/", target: "_blank", rel: "noopener", "aria-label": "STC", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/sextoycollective.jpg", alt: "STC" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "STC"
      ] }) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "a",
        {
          href: "https://doctorclimax.com/",
          target: "_blank",
          rel: "noopener",
          "aria-label": "DoctorClimax",
          title: "DoctorClimax",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/doctorclimax.png", alt: "DoctorClimax" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
            "DoctorClimax"
          ]
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "https://www.bsdoll.com/", target: "_blank", rel: "noopener", "aria-label": "BSDoll", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: "/images/sponsors/bsdoll.jpg", alt: "BSDoll" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
        "BSDoll"
      ] }) })
    ] })
  ] });
}
client.createRoot(document.getElementById("root")).render(
  /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Nav, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Showcase, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Examples, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Installation, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(ConfigurationParams, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DeclarativeTemplates, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlingButtons, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(HandlingDismissals, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Icons, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(InputTypes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Methods, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Themes, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Sponsors, {})
  ] })
);
