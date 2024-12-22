function jv(t, e) {
  for (var r = 0; r < e.length; r++) {
    const n = e[r];
    if (typeof n != "string" && !Array.isArray(n)) {
      for (const i in n)
        if (i !== "default" && !(i in t)) {
          const o = Object.getOwnPropertyDescriptor(n, i);
          o &&
            Object.defineProperty(
              t,
              i,
              o.get ? o : { enumerable: !0, get: () => n[i] }
            );
        }
    }
  }
  return Object.freeze(
    Object.defineProperty(t, Symbol.toStringTag, { value: "Module" })
  );
}
(function () {
  const e = document.createElement("link").relList;
  if (e && e.supports && e.supports("modulepreload")) return;
  for (const i of document.querySelectorAll('link[rel="modulepreload"]')) n(i);
  new MutationObserver((i) => {
    for (const o of i)
      if (o.type === "childList")
        for (const s of o.addedNodes)
          s.tagName === "LINK" && s.rel === "modulepreload" && n(s);
  }).observe(document, { childList: !0, subtree: !0 });
  function r(i) {
    const o = {};
    return (
      i.integrity && (o.integrity = i.integrity),
      i.referrerPolicy && (o.referrerPolicy = i.referrerPolicy),
      i.crossOrigin === "use-credentials"
        ? (o.credentials = "include")
        : i.crossOrigin === "anonymous"
        ? (o.credentials = "omit")
        : (o.credentials = "same-origin"),
      o
    );
  }
  function n(i) {
    if (i.ep) return;
    i.ep = !0;
    const o = r(i);
    fetch(i.href, o);
  }
})();
var n0 =
  typeof globalThis < "u"
    ? globalThis
    : typeof window < "u"
    ? window
    : typeof global < "u"
    ? global
    : typeof self < "u"
    ? self
    : {};
function cs(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default")
    ? t.default
    : t;
}
function Uv(t) {
  if (t.__esModule) return t;
  var e = t.default;
  if (typeof e == "function") {
    var r = function n() {
      return this instanceof n
        ? Reflect.construct(e, arguments, this.constructor)
        : e.apply(this, arguments);
    };
    r.prototype = e.prototype;
  } else r = {};
  return (
    Object.defineProperty(r, "__esModule", { value: !0 }),
    Object.keys(t).forEach(function (n) {
      var i = Object.getOwnPropertyDescriptor(t, n);
      Object.defineProperty(
        r,
        n,
        i.get
          ? i
          : {
              enumerable: !0,
              get: function () {
                return t[n];
              },
            }
      );
    }),
    r
  );
}
var i0 = { exports: {} },
  Ql = {},
  o0 = { exports: {} },
  ue = {};
/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var hs = Symbol.for("react.element"),
  zv = Symbol.for("react.portal"),
  Hv = Symbol.for("react.fragment"),
  Gv = Symbol.for("react.strict_mode"),
  qv = Symbol.for("react.profiler"),
  Wv = Symbol.for("react.provider"),
  Qv = Symbol.for("react.context"),
  Kv = Symbol.for("react.forward_ref"),
  Vv = Symbol.for("react.suspense"),
  Jv = Symbol.for("react.memo"),
  $v = Symbol.for("react.lazy"),
  Qc = Symbol.iterator;
function Yv(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Qc && t[Qc]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var s0 = {
    isMounted: function () {
      return !1;
    },
    enqueueForceUpdate: function () {},
    enqueueReplaceState: function () {},
    enqueueSetState: function () {},
  },
  l0 = Object.assign,
  a0 = {};
function no(t, e, r) {
  (this.props = t),
    (this.context = e),
    (this.refs = a0),
    (this.updater = r || s0);
}
no.prototype.isReactComponent = {};
no.prototype.setState = function (t, e) {
  if (typeof t != "object" && typeof t != "function" && t != null)
    throw Error(
      "setState(...): takes an object of state variables to update or a function which returns an object of state variables."
    );
  this.updater.enqueueSetState(this, t, e, "setState");
};
no.prototype.forceUpdate = function (t) {
  this.updater.enqueueForceUpdate(this, t, "forceUpdate");
};
function u0() {}
u0.prototype = no.prototype;
function Of(t, e, r) {
  (this.props = t),
    (this.context = e),
    (this.refs = a0),
    (this.updater = r || s0);
}
var Lf = (Of.prototype = new u0());
Lf.constructor = Of;
l0(Lf, no.prototype);
Lf.isPureReactComponent = !0;
var Kc = Array.isArray,
  f0 = Object.prototype.hasOwnProperty,
  Bf = { current: null },
  c0 = { key: !0, ref: !0, __self: !0, __source: !0 };
function h0(t, e, r) {
  var n,
    i = {},
    o = null,
    s = null;
  if (e != null)
    for (n in (e.ref !== void 0 && (s = e.ref),
    e.key !== void 0 && (o = "" + e.key),
    e))
      f0.call(e, n) && !c0.hasOwnProperty(n) && (i[n] = e[n]);
  var l = arguments.length - 2;
  if (l === 1) i.children = r;
  else if (1 < l) {
    for (var a = Array(l), f = 0; f < l; f++) a[f] = arguments[f + 2];
    i.children = a;
  }
  if (t && t.defaultProps)
    for (n in ((l = t.defaultProps), l)) i[n] === void 0 && (i[n] = l[n]);
  return {
    $$typeof: hs,
    type: t,
    key: o,
    ref: s,
    props: i,
    _owner: Bf.current,
  };
}
function Xv(t, e) {
  return {
    $$typeof: hs,
    type: t.type,
    key: e,
    ref: t.ref,
    props: t.props,
    _owner: t._owner,
  };
}
function Df(t) {
  return typeof t == "object" && t !== null && t.$$typeof === hs;
}
function Zv(t) {
  var e = { "=": "=0", ":": "=2" };
  return (
    "$" +
    t.replace(/[=:]/g, function (r) {
      return e[r];
    })
  );
}
var Vc = /\/+/g;
function Oa(t, e) {
  return typeof t == "object" && t !== null && t.key != null
    ? Zv("" + t.key)
    : e.toString(36);
}
function qs(t, e, r, n, i) {
  var o = typeof t;
  (o === "undefined" || o === "boolean") && (t = null);
  var s = !1;
  if (t === null) s = !0;
  else
    switch (o) {
      case "string":
      case "number":
        s = !0;
        break;
      case "object":
        switch (t.$$typeof) {
          case hs:
          case zv:
            s = !0;
        }
    }
  if (s)
    return (
      (s = t),
      (i = i(s)),
      (t = n === "" ? "." + Oa(s, 0) : n),
      Kc(i)
        ? ((r = ""),
          t != null && (r = t.replace(Vc, "$&/") + "/"),
          qs(i, e, r, "", function (f) {
            return f;
          }))
        : i != null &&
          (Df(i) &&
            (i = Xv(
              i,
              r +
                (!i.key || (s && s.key === i.key)
                  ? ""
                  : ("" + i.key).replace(Vc, "$&/") + "/") +
                t
            )),
          e.push(i)),
      1
    );
  if (((s = 0), (n = n === "" ? "." : n + ":"), Kc(t)))
    for (var l = 0; l < t.length; l++) {
      o = t[l];
      var a = n + Oa(o, l);
      s += qs(o, e, r, a, i);
    }
  else if (((a = Yv(t)), typeof a == "function"))
    for (t = a.call(t), l = 0; !(o = t.next()).done; )
      (o = o.value), (a = n + Oa(o, l++)), (s += qs(o, e, r, a, i));
  else if (o === "object")
    throw (
      ((e = String(t)),
      Error(
        "Objects are not valid as a React child (found: " +
          (e === "[object Object]"
            ? "object with keys {" + Object.keys(t).join(", ") + "}"
            : e) +
          "). If you meant to render a collection of children, use an array instead."
      ))
    );
  return s;
}
function As(t, e, r) {
  if (t == null) return t;
  var n = [],
    i = 0;
  return (
    qs(t, n, "", "", function (o) {
      return e.call(r, o, i++);
    }),
    n
  );
}
function eg(t) {
  if (t._status === -1) {
    var e = t._result;
    (e = e()),
      e.then(
        function (r) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 1), (t._result = r));
        },
        function (r) {
          (t._status === 0 || t._status === -1) &&
            ((t._status = 2), (t._result = r));
        }
      ),
      t._status === -1 && ((t._status = 0), (t._result = e));
  }
  if (t._status === 1) return t._result.default;
  throw t._result;
}
var It = { current: null },
  Ws = { transition: null },
  tg = {
    ReactCurrentDispatcher: It,
    ReactCurrentBatchConfig: Ws,
    ReactCurrentOwner: Bf,
  };
ue.Children = {
  map: As,
  forEach: function (t, e, r) {
    As(
      t,
      function () {
        e.apply(this, arguments);
      },
      r
    );
  },
  count: function (t) {
    var e = 0;
    return (
      As(t, function () {
        e++;
      }),
      e
    );
  },
  toArray: function (t) {
    return (
      As(t, function (e) {
        return e;
      }) || []
    );
  },
  only: function (t) {
    if (!Df(t))
      throw Error(
        "React.Children.only expected to receive a single React element child."
      );
    return t;
  },
};
ue.Component = no;
ue.Fragment = Hv;
ue.Profiler = qv;
ue.PureComponent = Of;
ue.StrictMode = Gv;
ue.Suspense = Vv;
ue.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = tg;
ue.cloneElement = function (t, e, r) {
  if (t == null)
    throw Error(
      "React.cloneElement(...): The argument must be a React element, but you passed " +
        t +
        "."
    );
  var n = l0({}, t.props),
    i = t.key,
    o = t.ref,
    s = t._owner;
  if (e != null) {
    if (
      (e.ref !== void 0 && ((o = e.ref), (s = Bf.current)),
      e.key !== void 0 && (i = "" + e.key),
      t.type && t.type.defaultProps)
    )
      var l = t.type.defaultProps;
    for (a in e)
      f0.call(e, a) &&
        !c0.hasOwnProperty(a) &&
        (n[a] = e[a] === void 0 && l !== void 0 ? l[a] : e[a]);
  }
  var a = arguments.length - 2;
  if (a === 1) n.children = r;
  else if (1 < a) {
    l = Array(a);
    for (var f = 0; f < a; f++) l[f] = arguments[f + 2];
    n.children = l;
  }
  return { $$typeof: hs, type: t.type, key: i, ref: o, props: n, _owner: s };
};
ue.createContext = function (t) {
  return (
    (t = {
      $$typeof: Qv,
      _currentValue: t,
      _currentValue2: t,
      _threadCount: 0,
      Provider: null,
      Consumer: null,
      _defaultValue: null,
      _globalName: null,
    }),
    (t.Provider = { $$typeof: Wv, _context: t }),
    (t.Consumer = t)
  );
};
ue.createElement = h0;
ue.createFactory = function (t) {
  var e = h0.bind(null, t);
  return (e.type = t), e;
};
ue.createRef = function () {
  return { current: null };
};
ue.forwardRef = function (t) {
  return { $$typeof: Kv, render: t };
};
ue.isValidElement = Df;
ue.lazy = function (t) {
  return { $$typeof: $v, _payload: { _status: -1, _result: t }, _init: eg };
};
ue.memo = function (t, e) {
  return { $$typeof: Jv, type: t, compare: e === void 0 ? null : e };
};
ue.startTransition = function (t) {
  var e = Ws.transition;
  Ws.transition = {};
  try {
    t();
  } finally {
    Ws.transition = e;
  }
};
ue.unstable_act = function () {
  throw Error("act(...) is not supported in production builds of React.");
};
ue.useCallback = function (t, e) {
  return It.current.useCallback(t, e);
};
ue.useContext = function (t) {
  return It.current.useContext(t);
};
ue.useDebugValue = function () {};
ue.useDeferredValue = function (t) {
  return It.current.useDeferredValue(t);
};
ue.useEffect = function (t, e) {
  return It.current.useEffect(t, e);
};
ue.useId = function () {
  return It.current.useId();
};
ue.useImperativeHandle = function (t, e, r) {
  return It.current.useImperativeHandle(t, e, r);
};
ue.useInsertionEffect = function (t, e) {
  return It.current.useInsertionEffect(t, e);
};
ue.useLayoutEffect = function (t, e) {
  return It.current.useLayoutEffect(t, e);
};
ue.useMemo = function (t, e) {
  return It.current.useMemo(t, e);
};
ue.useReducer = function (t, e, r) {
  return It.current.useReducer(t, e, r);
};
ue.useRef = function (t) {
  return It.current.useRef(t);
};
ue.useState = function (t) {
  return It.current.useState(t);
};
ue.useSyncExternalStore = function (t, e, r) {
  return It.current.useSyncExternalStore(t, e, r);
};
ue.useTransition = function () {
  return It.current.useTransition();
};
ue.version = "18.2.0";
o0.exports = ue;
var q = o0.exports;
const Ff = cs(q),
  rg = jv({ __proto__: null, default: Ff }, [q]);
/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var ng = q,
  ig = Symbol.for("react.element"),
  og = Symbol.for("react.fragment"),
  sg = Object.prototype.hasOwnProperty,
  lg = ng.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,
  ag = { key: !0, ref: !0, __self: !0, __source: !0 };
function d0(t, e, r) {
  var n,
    i = {},
    o = null,
    s = null;
  r !== void 0 && (o = "" + r),
    e.key !== void 0 && (o = "" + e.key),
    e.ref !== void 0 && (s = e.ref);
  for (n in e) sg.call(e, n) && !ag.hasOwnProperty(n) && (i[n] = e[n]);
  if (t && t.defaultProps)
    for (n in ((e = t.defaultProps), e)) i[n] === void 0 && (i[n] = e[n]);
  return {
    $$typeof: ig,
    type: t,
    key: o,
    ref: s,
    props: i,
    _owner: lg.current,
  };
}
Ql.Fragment = og;
Ql.jsx = d0;
Ql.jsxs = d0;
i0.exports = Ql;
var _ = i0.exports,
  ku = {},
  p0 = { exports: {} },
  $t = {},
  m0 = { exports: {} },
  v0 = {};
/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ (function (t) {
  function e(g, k) {
    var R = g.length;
    g.push(k);
    e: for (; 0 < R; ) {
      var A = (R - 1) >>> 1,
        c = g[A];
      if (0 < i(c, k)) (g[A] = k), (g[R] = c), (R = A);
      else break e;
    }
  }
  function r(g) {
    return g.length === 0 ? null : g[0];
  }
  function n(g) {
    if (g.length === 0) return null;
    var k = g[0],
      R = g.pop();
    if (R !== k) {
      g[0] = R;
      e: for (var A = 0, c = g.length, b = c >>> 1; A < b; ) {
        var $ = 2 * (A + 1) - 1,
          m = g[$],
          O = $ + 1,
          D = g[O];
        if (0 > i(m, R))
          O < c && 0 > i(D, m)
            ? ((g[A] = D), (g[O] = R), (A = O))
            : ((g[A] = m), (g[$] = R), (A = $));
        else if (O < c && 0 > i(D, R)) (g[A] = D), (g[O] = R), (A = O);
        else break e;
      }
    }
    return k;
  }
  function i(g, k) {
    var R = g.sortIndex - k.sortIndex;
    return R !== 0 ? R : g.id - k.id;
  }
  if (typeof performance == "object" && typeof performance.now == "function") {
    var o = performance;
    t.unstable_now = function () {
      return o.now();
    };
  } else {
    var s = Date,
      l = s.now();
    t.unstable_now = function () {
      return s.now() - l;
    };
  }
  var a = [],
    f = [],
    h = 1,
    p = null,
    y = 3,
    S = !1,
    P = !1,
    M = !1,
    I = typeof setTimeout == "function" ? setTimeout : null,
    w = typeof clearTimeout == "function" ? clearTimeout : null,
    x = typeof setImmediate < "u" ? setImmediate : null;
  typeof navigator < "u" &&
    navigator.scheduling !== void 0 &&
    navigator.scheduling.isInputPending !== void 0 &&
    navigator.scheduling.isInputPending.bind(navigator.scheduling);
  function N(g) {
    for (var k = r(f); k !== null; ) {
      if (k.callback === null) n(f);
      else if (k.startTime <= g)
        n(f), (k.sortIndex = k.expirationTime), e(a, k);
      else break;
      k = r(f);
    }
  }
  function T(g) {
    if (((M = !1), N(g), !P))
      if (r(a) !== null) (P = !0), v(L);
      else {
        var k = r(f);
        k !== null && E(T, k.startTime - g);
      }
  }
  function L(g, k) {
    (P = !1), M && ((M = !1), w(G), (G = -1)), (S = !0);
    var R = y;
    try {
      for (
        N(k), p = r(a);
        p !== null && (!(p.expirationTime > k) || (g && !se()));

      ) {
        var A = p.callback;
        if (typeof A == "function") {
          (p.callback = null), (y = p.priorityLevel);
          var c = A(p.expirationTime <= k);
          (k = t.unstable_now()),
            typeof c == "function" ? (p.callback = c) : p === r(a) && n(a),
            N(k);
        } else n(a);
        p = r(a);
      }
      if (p !== null) var b = !0;
      else {
        var $ = r(f);
        $ !== null && E(T, $.startTime - k), (b = !1);
      }
      return b;
    } finally {
      (p = null), (y = R), (S = !1);
    }
  }
  var j = !1,
    H = null,
    G = -1,
    ee = 5,
    Z = -1;
  function se() {
    return !(t.unstable_now() - Z < ee);
  }
  function ht() {
    if (H !== null) {
      var g = t.unstable_now();
      Z = g;
      var k = !0;
      try {
        k = H(!0, g);
      } finally {
        k ? C() : ((j = !1), (H = null));
      }
    } else j = !1;
  }
  var C;
  if (typeof x == "function")
    C = function () {
      x(ht);
    };
  else if (typeof MessageChannel < "u") {
    var u = new MessageChannel(),
      d = u.port2;
    (u.port1.onmessage = ht),
      (C = function () {
        d.postMessage(null);
      });
  } else
    C = function () {
      I(ht, 0);
    };
  function v(g) {
    (H = g), j || ((j = !0), C());
  }
  function E(g, k) {
    G = I(function () {
      g(t.unstable_now());
    }, k);
  }
  (t.unstable_IdlePriority = 5),
    (t.unstable_ImmediatePriority = 1),
    (t.unstable_LowPriority = 4),
    (t.unstable_NormalPriority = 3),
    (t.unstable_Profiling = null),
    (t.unstable_UserBlockingPriority = 2),
    (t.unstable_cancelCallback = function (g) {
      g.callback = null;
    }),
    (t.unstable_continueExecution = function () {
      P || S || ((P = !0), v(L));
    }),
    (t.unstable_forceFrameRate = function (g) {
      0 > g || 125 < g
        ? console.error(
            "forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"
          )
        : (ee = 0 < g ? Math.floor(1e3 / g) : 5);
    }),
    (t.unstable_getCurrentPriorityLevel = function () {
      return y;
    }),
    (t.unstable_getFirstCallbackNode = function () {
      return r(a);
    }),
    (t.unstable_next = function (g) {
      switch (y) {
        case 1:
        case 2:
        case 3:
          var k = 3;
          break;
        default:
          k = y;
      }
      var R = y;
      y = k;
      try {
        return g();
      } finally {
        y = R;
      }
    }),
    (t.unstable_pauseExecution = function () {}),
    (t.unstable_requestPaint = function () {}),
    (t.unstable_runWithPriority = function (g, k) {
      switch (g) {
        case 1:
        case 2:
        case 3:
        case 4:
        case 5:
          break;
        default:
          g = 3;
      }
      var R = y;
      y = g;
      try {
        return k();
      } finally {
        y = R;
      }
    }),
    (t.unstable_scheduleCallback = function (g, k, R) {
      var A = t.unstable_now();
      switch (
        (typeof R == "object" && R !== null
          ? ((R = R.delay), (R = typeof R == "number" && 0 < R ? A + R : A))
          : (R = A),
        g)
      ) {
        case 1:
          var c = -1;
          break;
        case 2:
          c = 250;
          break;
        case 5:
          c = 1073741823;
          break;
        case 4:
          c = 1e4;
          break;
        default:
          c = 5e3;
      }
      return (
        (c = R + c),
        (g = {
          id: h++,
          callback: k,
          priorityLevel: g,
          startTime: R,
          expirationTime: c,
          sortIndex: -1,
        }),
        R > A
          ? ((g.sortIndex = R),
            e(f, g),
            r(a) === null &&
              g === r(f) &&
              (M ? (w(G), (G = -1)) : (M = !0), E(T, R - A)))
          : ((g.sortIndex = c), e(a, g), P || S || ((P = !0), v(L))),
        g
      );
    }),
    (t.unstable_shouldYield = se),
    (t.unstable_wrapCallback = function (g) {
      var k = y;
      return function () {
        var R = y;
        y = k;
        try {
          return g.apply(this, arguments);
        } finally {
          y = R;
        }
      };
    });
})(v0);
m0.exports = v0;
var ug = m0.exports;
/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */ var g0 = q,
  Jt = ug;
function U(t) {
  for (
    var e = "https://reactjs.org/docs/error-decoder.html?invariant=" + t, r = 1;
    r < arguments.length;
    r++
  )
    e += "&args[]=" + encodeURIComponent(arguments[r]);
  return (
    "Minified React error #" +
    t +
    "; visit " +
    e +
    " for the full message or use the non-minified dev environment for full errors and additional helpful warnings."
  );
}
var y0 = new Set(),
  zo = {};
function mi(t, e) {
  Qi(t, e), Qi(t + "Capture", e);
}
function Qi(t, e) {
  for (zo[t] = e, t = 0; t < e.length; t++) y0.add(e[t]);
}
var Jr = !(
    typeof window > "u" ||
    typeof window.document > "u" ||
    typeof window.document.createElement > "u"
  ),
  Su = Object.prototype.hasOwnProperty,
  fg =
    /^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,
  Jc = {},
  $c = {};
function cg(t) {
  return Su.call($c, t)
    ? !0
    : Su.call(Jc, t)
    ? !1
    : fg.test(t)
    ? ($c[t] = !0)
    : ((Jc[t] = !0), !1);
}
function hg(t, e, r, n) {
  if (r !== null && r.type === 0) return !1;
  switch (typeof e) {
    case "function":
    case "symbol":
      return !0;
    case "boolean":
      return n
        ? !1
        : r !== null
        ? !r.acceptsBooleans
        : ((t = t.toLowerCase().slice(0, 5)), t !== "data-" && t !== "aria-");
    default:
      return !1;
  }
}
function dg(t, e, r, n) {
  if (e === null || typeof e > "u" || hg(t, e, r, n)) return !0;
  if (n) return !1;
  if (r !== null)
    switch (r.type) {
      case 3:
        return !e;
      case 4:
        return e === !1;
      case 5:
        return isNaN(e);
      case 6:
        return isNaN(e) || 1 > e;
    }
  return !1;
}
function Tt(t, e, r, n, i, o, s) {
  (this.acceptsBooleans = e === 2 || e === 3 || e === 4),
    (this.attributeName = n),
    (this.attributeNamespace = i),
    (this.mustUseProperty = r),
    (this.propertyName = t),
    (this.type = e),
    (this.sanitizeURL = o),
    (this.removeEmptyString = s);
}
var At = {};
"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style"
  .split(" ")
  .forEach(function (t) {
    At[t] = new Tt(t, 0, !1, t, null, !1, !1);
  });
[
  ["acceptCharset", "accept-charset"],
  ["className", "class"],
  ["htmlFor", "for"],
  ["httpEquiv", "http-equiv"],
].forEach(function (t) {
  var e = t[0];
  At[e] = new Tt(e, 1, !1, t[1], null, !1, !1);
});
["contentEditable", "draggable", "spellCheck", "value"].forEach(function (t) {
  At[t] = new Tt(t, 2, !1, t.toLowerCase(), null, !1, !1);
});
[
  "autoReverse",
  "externalResourcesRequired",
  "focusable",
  "preserveAlpha",
].forEach(function (t) {
  At[t] = new Tt(t, 2, !1, t, null, !1, !1);
});
"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope"
  .split(" ")
  .forEach(function (t) {
    At[t] = new Tt(t, 3, !1, t.toLowerCase(), null, !1, !1);
  });
["checked", "multiple", "muted", "selected"].forEach(function (t) {
  At[t] = new Tt(t, 3, !0, t, null, !1, !1);
});
["capture", "download"].forEach(function (t) {
  At[t] = new Tt(t, 4, !1, t, null, !1, !1);
});
["cols", "rows", "size", "span"].forEach(function (t) {
  At[t] = new Tt(t, 6, !1, t, null, !1, !1);
});
["rowSpan", "start"].forEach(function (t) {
  At[t] = new Tt(t, 5, !1, t.toLowerCase(), null, !1, !1);
});
var jf = /[\-:]([a-z])/g;
function Uf(t) {
  return t[1].toUpperCase();
}
"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(jf, Uf);
    At[e] = new Tt(e, 1, !1, t, null, !1, !1);
  });
"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type"
  .split(" ")
  .forEach(function (t) {
    var e = t.replace(jf, Uf);
    At[e] = new Tt(e, 1, !1, t, "http://www.w3.org/1999/xlink", !1, !1);
  });
["xml:base", "xml:lang", "xml:space"].forEach(function (t) {
  var e = t.replace(jf, Uf);
  At[e] = new Tt(e, 1, !1, t, "http://www.w3.org/XML/1998/namespace", !1, !1);
});
["tabIndex", "crossOrigin"].forEach(function (t) {
  At[t] = new Tt(t, 1, !1, t.toLowerCase(), null, !1, !1);
});
At.xlinkHref = new Tt(
  "xlinkHref",
  1,
  !1,
  "xlink:href",
  "http://www.w3.org/1999/xlink",
  !0,
  !1
);
["src", "href", "action", "formAction"].forEach(function (t) {
  At[t] = new Tt(t, 1, !1, t.toLowerCase(), null, !0, !0);
});
function zf(t, e, r, n) {
  var i = At.hasOwnProperty(e) ? At[e] : null;
  (i !== null
    ? i.type !== 0
    : n ||
      !(2 < e.length) ||
      (e[0] !== "o" && e[0] !== "O") ||
      (e[1] !== "n" && e[1] !== "N")) &&
    (dg(e, r, i, n) && (r = null),
    n || i === null
      ? cg(e) && (r === null ? t.removeAttribute(e) : t.setAttribute(e, "" + r))
      : i.mustUseProperty
      ? (t[i.propertyName] = r === null ? (i.type === 3 ? !1 : "") : r)
      : ((e = i.attributeName),
        (n = i.attributeNamespace),
        r === null
          ? t.removeAttribute(e)
          : ((i = i.type),
            (r = i === 3 || (i === 4 && r === !0) ? "" : "" + r),
            n ? t.setAttributeNS(n, e, r) : t.setAttribute(e, r))));
}
var rn = g0.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,
  Es = Symbol.for("react.element"),
  _i = Symbol.for("react.portal"),
  ki = Symbol.for("react.fragment"),
  Hf = Symbol.for("react.strict_mode"),
  Nu = Symbol.for("react.profiler"),
  x0 = Symbol.for("react.provider"),
  w0 = Symbol.for("react.context"),
  Gf = Symbol.for("react.forward_ref"),
  Cu = Symbol.for("react.suspense"),
  Pu = Symbol.for("react.suspense_list"),
  qf = Symbol.for("react.memo"),
  dn = Symbol.for("react.lazy"),
  A0 = Symbol.for("react.offscreen"),
  Yc = Symbol.iterator;
function co(t) {
  return t === null || typeof t != "object"
    ? null
    : ((t = (Yc && t[Yc]) || t["@@iterator"]),
      typeof t == "function" ? t : null);
}
var rt = Object.assign,
  La;
function ko(t) {
  if (La === void 0)
    try {
      throw Error();
    } catch (r) {
      var e = r.stack.trim().match(/\n( *(at )?)/);
      La = (e && e[1]) || "";
    }
  return (
    `
` +
    La +
    t
  );
}
var Ba = !1;
function Da(t, e) {
  if (!t || Ba) return "";
  Ba = !0;
  var r = Error.prepareStackTrace;
  Error.prepareStackTrace = void 0;
  try {
    if (e)
      if (
        ((e = function () {
          throw Error();
        }),
        Object.defineProperty(e.prototype, "props", {
          set: function () {
            throw Error();
          },
        }),
        typeof Reflect == "object" && Reflect.construct)
      ) {
        try {
          Reflect.construct(e, []);
        } catch (f) {
          var n = f;
        }
        Reflect.construct(t, [], e);
      } else {
        try {
          e.call();
        } catch (f) {
          n = f;
        }
        t.call(e.prototype);
      }
    else {
      try {
        throw Error();
      } catch (f) {
        n = f;
      }
      t();
    }
  } catch (f) {
    if (f && n && typeof f.stack == "string") {
      for (
        var i = f.stack.split(`
`),
          o = n.stack.split(`
`),
          s = i.length - 1,
          l = o.length - 1;
        1 <= s && 0 <= l && i[s] !== o[l];

      )
        l--;
      for (; 1 <= s && 0 <= l; s--, l--)
        if (i[s] !== o[l]) {
          if (s !== 1 || l !== 1)
            do
              if ((s--, l--, 0 > l || i[s] !== o[l])) {
                var a =
                  `
` + i[s].replace(" at new ", " at ");
                return (
                  t.displayName &&
                    a.includes("<anonymous>") &&
                    (a = a.replace("<anonymous>", t.displayName)),
                  a
                );
              }
            while (1 <= s && 0 <= l);
          break;
        }
    }
  } finally {
    (Ba = !1), (Error.prepareStackTrace = r);
  }
  return (t = t ? t.displayName || t.name : "") ? ko(t) : "";
}
function pg(t) {
  switch (t.tag) {
    case 5:
      return ko(t.type);
    case 16:
      return ko("Lazy");
    case 13:
      return ko("Suspense");
    case 19:
      return ko("SuspenseList");
    case 0:
    case 2:
    case 15:
      return (t = Da(t.type, !1)), t;
    case 11:
      return (t = Da(t.type.render, !1)), t;
    case 1:
      return (t = Da(t.type, !0)), t;
    default:
      return "";
  }
}
function Mu(t) {
  if (t == null) return null;
  if (typeof t == "function") return t.displayName || t.name || null;
  if (typeof t == "string") return t;
  switch (t) {
    case ki:
      return "Fragment";
    case _i:
      return "Portal";
    case Nu:
      return "Profiler";
    case Hf:
      return "StrictMode";
    case Cu:
      return "Suspense";
    case Pu:
      return "SuspenseList";
  }
  if (typeof t == "object")
    switch (t.$$typeof) {
      case w0:
        return (t.displayName || "Context") + ".Consumer";
      case x0:
        return (t._context.displayName || "Context") + ".Provider";
      case Gf:
        var e = t.render;
        return (
          (t = t.displayName),
          t ||
            ((t = e.displayName || e.name || ""),
            (t = t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")),
          t
        );
      case qf:
        return (
          (e = t.displayName || null), e !== null ? e : Mu(t.type) || "Memo"
        );
      case dn:
        (e = t._payload), (t = t._init);
        try {
          return Mu(t(e));
        } catch {}
    }
  return null;
}
function mg(t) {
  var e = t.type;
  switch (t.tag) {
    case 24:
      return "Cache";
    case 9:
      return (e.displayName || "Context") + ".Consumer";
    case 10:
      return (e._context.displayName || "Context") + ".Provider";
    case 18:
      return "DehydratedFragment";
    case 11:
      return (
        (t = e.render),
        (t = t.displayName || t.name || ""),
        e.displayName || (t !== "" ? "ForwardRef(" + t + ")" : "ForwardRef")
      );
    case 7:
      return "Fragment";
    case 5:
      return e;
    case 4:
      return "Portal";
    case 3:
      return "Root";
    case 6:
      return "Text";
    case 16:
      return Mu(e);
    case 8:
      return e === Hf ? "StrictMode" : "Mode";
    case 22:
      return "Offscreen";
    case 12:
      return "Profiler";
    case 21:
      return "Scope";
    case 13:
      return "Suspense";
    case 19:
      return "SuspenseList";
    case 25:
      return "TracingMarker";
    case 1:
    case 0:
    case 17:
    case 2:
    case 14:
    case 15:
      if (typeof e == "function") return e.displayName || e.name || null;
      if (typeof e == "string") return e;
  }
  return null;
}
function Mn(t) {
  switch (typeof t) {
    case "boolean":
    case "number":
    case "string":
    case "undefined":
      return t;
    case "object":
      return t;
    default:
      return "";
  }
}
function E0(t) {
  var e = t.type;
  return (
    (t = t.nodeName) &&
    t.toLowerCase() === "input" &&
    (e === "checkbox" || e === "radio")
  );
}
function vg(t) {
  var e = E0(t) ? "checked" : "value",
    r = Object.getOwnPropertyDescriptor(t.constructor.prototype, e),
    n = "" + t[e];
  if (
    !t.hasOwnProperty(e) &&
    typeof r < "u" &&
    typeof r.get == "function" &&
    typeof r.set == "function"
  ) {
    var i = r.get,
      o = r.set;
    return (
      Object.defineProperty(t, e, {
        configurable: !0,
        get: function () {
          return i.call(this);
        },
        set: function (s) {
          (n = "" + s), o.call(this, s);
        },
      }),
      Object.defineProperty(t, e, { enumerable: r.enumerable }),
      {
        getValue: function () {
          return n;
        },
        setValue: function (s) {
          n = "" + s;
        },
        stopTracking: function () {
          (t._valueTracker = null), delete t[e];
        },
      }
    );
  }
}
function bs(t) {
  t._valueTracker || (t._valueTracker = vg(t));
}
function b0(t) {
  if (!t) return !1;
  var e = t._valueTracker;
  if (!e) return !0;
  var r = e.getValue(),
    n = "";
  return (
    t && (n = E0(t) ? (t.checked ? "true" : "false") : t.value),
    (t = n),
    t !== r ? (e.setValue(t), !0) : !1
  );
}
function fl(t) {
  if (((t = t || (typeof document < "u" ? document : void 0)), typeof t > "u"))
    return null;
  try {
    return t.activeElement || t.body;
  } catch {
    return t.body;
  }
}
function Ru(t, e) {
  var r = e.checked;
  return rt({}, e, {
    defaultChecked: void 0,
    defaultValue: void 0,
    value: void 0,
    checked: r ?? t._wrapperState.initialChecked,
  });
}
function Xc(t, e) {
  var r = e.defaultValue == null ? "" : e.defaultValue,
    n = e.checked != null ? e.checked : e.defaultChecked;
  (r = Mn(e.value != null ? e.value : r)),
    (t._wrapperState = {
      initialChecked: n,
      initialValue: r,
      controlled:
        e.type === "checkbox" || e.type === "radio"
          ? e.checked != null
          : e.value != null,
    });
}
function _0(t, e) {
  (e = e.checked), e != null && zf(t, "checked", e, !1);
}
function Iu(t, e) {
  _0(t, e);
  var r = Mn(e.value),
    n = e.type;
  if (r != null)
    n === "number"
      ? ((r === 0 && t.value === "") || t.value != r) && (t.value = "" + r)
      : t.value !== "" + r && (t.value = "" + r);
  else if (n === "submit" || n === "reset") {
    t.removeAttribute("value");
    return;
  }
  e.hasOwnProperty("value")
    ? Tu(t, e.type, r)
    : e.hasOwnProperty("defaultValue") && Tu(t, e.type, Mn(e.defaultValue)),
    e.checked == null &&
      e.defaultChecked != null &&
      (t.defaultChecked = !!e.defaultChecked);
}
function Zc(t, e, r) {
  if (e.hasOwnProperty("value") || e.hasOwnProperty("defaultValue")) {
    var n = e.type;
    if (
      !(
        (n !== "submit" && n !== "reset") ||
        (e.value !== void 0 && e.value !== null)
      )
    )
      return;
    (e = "" + t._wrapperState.initialValue),
      r || e === t.value || (t.value = e),
      (t.defaultValue = e);
  }
  (r = t.name),
    r !== "" && (t.name = ""),
    (t.defaultChecked = !!t._wrapperState.initialChecked),
    r !== "" && (t.name = r);
}
function Tu(t, e, r) {
  (e !== "number" || fl(t.ownerDocument) !== t) &&
    (r == null
      ? (t.defaultValue = "" + t._wrapperState.initialValue)
      : t.defaultValue !== "" + r && (t.defaultValue = "" + r));
}
var So = Array.isArray;
function Di(t, e, r, n) {
  if (((t = t.options), e)) {
    e = {};
    for (var i = 0; i < r.length; i++) e["$" + r[i]] = !0;
    for (r = 0; r < t.length; r++)
      (i = e.hasOwnProperty("$" + t[r].value)),
        t[r].selected !== i && (t[r].selected = i),
        i && n && (t[r].defaultSelected = !0);
  } else {
    for (r = "" + Mn(r), e = null, i = 0; i < t.length; i++) {
      if (t[i].value === r) {
        (t[i].selected = !0), n && (t[i].defaultSelected = !0);
        return;
      }
      e !== null || t[i].disabled || (e = t[i]);
    }
    e !== null && (e.selected = !0);
  }
}
function Ou(t, e) {
  if (e.dangerouslySetInnerHTML != null) throw Error(U(91));
  return rt({}, e, {
    value: void 0,
    defaultValue: void 0,
    children: "" + t._wrapperState.initialValue,
  });
}
function eh(t, e) {
  var r = e.value;
  if (r == null) {
    if (((r = e.children), (e = e.defaultValue), r != null)) {
      if (e != null) throw Error(U(92));
      if (So(r)) {
        if (1 < r.length) throw Error(U(93));
        r = r[0];
      }
      e = r;
    }
    e == null && (e = ""), (r = e);
  }
  t._wrapperState = { initialValue: Mn(r) };
}
function k0(t, e) {
  var r = Mn(e.value),
    n = Mn(e.defaultValue);
  r != null &&
    ((r = "" + r),
    r !== t.value && (t.value = r),
    e.defaultValue == null && t.defaultValue !== r && (t.defaultValue = r)),
    n != null && (t.defaultValue = "" + n);
}
function th(t) {
  var e = t.textContent;
  e === t._wrapperState.initialValue && e !== "" && e !== null && (t.value = e);
}
function S0(t) {
  switch (t) {
    case "svg":
      return "http://www.w3.org/2000/svg";
    case "math":
      return "http://www.w3.org/1998/Math/MathML";
    default:
      return "http://www.w3.org/1999/xhtml";
  }
}
function Lu(t, e) {
  return t == null || t === "http://www.w3.org/1999/xhtml"
    ? S0(e)
    : t === "http://www.w3.org/2000/svg" && e === "foreignObject"
    ? "http://www.w3.org/1999/xhtml"
    : t;
}
var _s,
  N0 = (function (t) {
    return typeof MSApp < "u" && MSApp.execUnsafeLocalFunction
      ? function (e, r, n, i) {
          MSApp.execUnsafeLocalFunction(function () {
            return t(e, r, n, i);
          });
        }
      : t;
  })(function (t, e) {
    if (t.namespaceURI !== "http://www.w3.org/2000/svg" || "innerHTML" in t)
      t.innerHTML = e;
    else {
      for (
        _s = _s || document.createElement("div"),
          _s.innerHTML = "<svg>" + e.valueOf().toString() + "</svg>",
          e = _s.firstChild;
        t.firstChild;

      )
        t.removeChild(t.firstChild);
      for (; e.firstChild; ) t.appendChild(e.firstChild);
    }
  });
function Ho(t, e) {
  if (e) {
    var r = t.firstChild;
    if (r && r === t.lastChild && r.nodeType === 3) {
      r.nodeValue = e;
      return;
    }
  }
  t.textContent = e;
}
var Ro = {
    animationIterationCount: !0,
    aspectRatio: !0,
    borderImageOutset: !0,
    borderImageSlice: !0,
    borderImageWidth: !0,
    boxFlex: !0,
    boxFlexGroup: !0,
    boxOrdinalGroup: !0,
    columnCount: !0,
    columns: !0,
    flex: !0,
    flexGrow: !0,
    flexPositive: !0,
    flexShrink: !0,
    flexNegative: !0,
    flexOrder: !0,
    gridArea: !0,
    gridRow: !0,
    gridRowEnd: !0,
    gridRowSpan: !0,
    gridRowStart: !0,
    gridColumn: !0,
    gridColumnEnd: !0,
    gridColumnSpan: !0,
    gridColumnStart: !0,
    fontWeight: !0,
    lineClamp: !0,
    lineHeight: !0,
    opacity: !0,
    order: !0,
    orphans: !0,
    tabSize: !0,
    widows: !0,
    zIndex: !0,
    zoom: !0,
    fillOpacity: !0,
    floodOpacity: !0,
    stopOpacity: !0,
    strokeDasharray: !0,
    strokeDashoffset: !0,
    strokeMiterlimit: !0,
    strokeOpacity: !0,
    strokeWidth: !0,
  },
  gg = ["Webkit", "ms", "Moz", "O"];
Object.keys(Ro).forEach(function (t) {
  gg.forEach(function (e) {
    (e = e + t.charAt(0).toUpperCase() + t.substring(1)), (Ro[e] = Ro[t]);
  });
});
function C0(t, e, r) {
  return e == null || typeof e == "boolean" || e === ""
    ? ""
    : r || typeof e != "number" || e === 0 || (Ro.hasOwnProperty(t) && Ro[t])
    ? ("" + e).trim()
    : e + "px";
}
function P0(t, e) {
  t = t.style;
  for (var r in e)
    if (e.hasOwnProperty(r)) {
      var n = r.indexOf("--") === 0,
        i = C0(r, e[r], n);
      r === "float" && (r = "cssFloat"), n ? t.setProperty(r, i) : (t[r] = i);
    }
}
var yg = rt(
  { menuitem: !0 },
  {
    area: !0,
    base: !0,
    br: !0,
    col: !0,
    embed: !0,
    hr: !0,
    img: !0,
    input: !0,
    keygen: !0,
    link: !0,
    meta: !0,
    param: !0,
    source: !0,
    track: !0,
    wbr: !0,
  }
);
function Bu(t, e) {
  if (e) {
    if (yg[t] && (e.children != null || e.dangerouslySetInnerHTML != null))
      throw Error(U(137, t));
    if (e.dangerouslySetInnerHTML != null) {
      if (e.children != null) throw Error(U(60));
      if (
        typeof e.dangerouslySetInnerHTML != "object" ||
        !("__html" in e.dangerouslySetInnerHTML)
      )
        throw Error(U(61));
    }
    if (e.style != null && typeof e.style != "object") throw Error(U(62));
  }
}
function Du(t, e) {
  if (t.indexOf("-") === -1) return typeof e.is == "string";
  switch (t) {
    case "annotation-xml":
    case "color-profile":
    case "font-face":
    case "font-face-src":
    case "font-face-uri":
    case "font-face-format":
    case "font-face-name":
    case "missing-glyph":
      return !1;
    default:
      return !0;
  }
}
var Fu = null;
function Wf(t) {
  return (
    (t = t.target || t.srcElement || window),
    t.correspondingUseElement && (t = t.correspondingUseElement),
    t.nodeType === 3 ? t.parentNode : t
  );
}
var ju = null,
  Fi = null,
  ji = null;
function rh(t) {
  if ((t = ms(t))) {
    if (typeof ju != "function") throw Error(U(280));
    var e = t.stateNode;
    e && ((e = Yl(e)), ju(t.stateNode, t.type, e));
  }
}
function M0(t) {
  Fi ? (ji ? ji.push(t) : (ji = [t])) : (Fi = t);
}
function R0() {
  if (Fi) {
    var t = Fi,
      e = ji;
    if (((ji = Fi = null), rh(t), e)) for (t = 0; t < e.length; t++) rh(e[t]);
  }
}
function I0(t, e) {
  return t(e);
}
function T0() {}
var Fa = !1;
function O0(t, e, r) {
  if (Fa) return t(e, r);
  Fa = !0;
  try {
    return I0(t, e, r);
  } finally {
    (Fa = !1), (Fi !== null || ji !== null) && (T0(), R0());
  }
}
function Go(t, e) {
  var r = t.stateNode;
  if (r === null) return null;
  var n = Yl(r);
  if (n === null) return null;
  r = n[e];
  e: switch (e) {
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
      (n = !n.disabled) ||
        ((t = t.type),
        (n = !(
          t === "button" ||
          t === "input" ||
          t === "select" ||
          t === "textarea"
        ))),
        (t = !n);
      break e;
    default:
      t = !1;
  }
  if (t) return null;
  if (r && typeof r != "function") throw Error(U(231, e, typeof r));
  return r;
}
var Uu = !1;
if (Jr)
  try {
    var ho = {};
    Object.defineProperty(ho, "passive", {
      get: function () {
        Uu = !0;
      },
    }),
      window.addEventListener("test", ho, ho),
      window.removeEventListener("test", ho, ho);
  } catch {
    Uu = !1;
  }
function xg(t, e, r, n, i, o, s, l, a) {
  var f = Array.prototype.slice.call(arguments, 3);
  try {
    e.apply(r, f);
  } catch (h) {
    this.onError(h);
  }
}
var Io = !1,
  cl = null,
  hl = !1,
  zu = null,
  wg = {
    onError: function (t) {
      (Io = !0), (cl = t);
    },
  };
function Ag(t, e, r, n, i, o, s, l, a) {
  (Io = !1), (cl = null), xg.apply(wg, arguments);
}
function Eg(t, e, r, n, i, o, s, l, a) {
  if ((Ag.apply(this, arguments), Io)) {
    if (Io) {
      var f = cl;
      (Io = !1), (cl = null);
    } else throw Error(U(198));
    hl || ((hl = !0), (zu = f));
  }
}
function vi(t) {
  var e = t,
    r = t;
  if (t.alternate) for (; e.return; ) e = e.return;
  else {
    t = e;
    do (e = t), e.flags & 4098 && (r = e.return), (t = e.return);
    while (t);
  }
  return e.tag === 3 ? r : null;
}
function L0(t) {
  if (t.tag === 13) {
    var e = t.memoizedState;
    if (
      (e === null && ((t = t.alternate), t !== null && (e = t.memoizedState)),
      e !== null)
    )
      return e.dehydrated;
  }
  return null;
}
function nh(t) {
  if (vi(t) !== t) throw Error(U(188));
}
function bg(t) {
  var e = t.alternate;
  if (!e) {
    if (((e = vi(t)), e === null)) throw Error(U(188));
    return e !== t ? null : t;
  }
  for (var r = t, n = e; ; ) {
    var i = r.return;
    if (i === null) break;
    var o = i.alternate;
    if (o === null) {
      if (((n = i.return), n !== null)) {
        r = n;
        continue;
      }
      break;
    }
    if (i.child === o.child) {
      for (o = i.child; o; ) {
        if (o === r) return nh(i), t;
        if (o === n) return nh(i), e;
        o = o.sibling;
      }
      throw Error(U(188));
    }
    if (r.return !== n.return) (r = i), (n = o);
    else {
      for (var s = !1, l = i.child; l; ) {
        if (l === r) {
          (s = !0), (r = i), (n = o);
          break;
        }
        if (l === n) {
          (s = !0), (n = i), (r = o);
          break;
        }
        l = l.sibling;
      }
      if (!s) {
        for (l = o.child; l; ) {
          if (l === r) {
            (s = !0), (r = o), (n = i);
            break;
          }
          if (l === n) {
            (s = !0), (n = o), (r = i);
            break;
          }
          l = l.sibling;
        }
        if (!s) throw Error(U(189));
      }
    }
    if (r.alternate !== n) throw Error(U(190));
  }
  if (r.tag !== 3) throw Error(U(188));
  return r.stateNode.current === r ? t : e;
}
function B0(t) {
  return (t = bg(t)), t !== null ? D0(t) : null;
}
function D0(t) {
  if (t.tag === 5 || t.tag === 6) return t;
  for (t = t.child; t !== null; ) {
    var e = D0(t);
    if (e !== null) return e;
    t = t.sibling;
  }
  return null;
}
var F0 = Jt.unstable_scheduleCallback,
  ih = Jt.unstable_cancelCallback,
  _g = Jt.unstable_shouldYield,
  kg = Jt.unstable_requestPaint,
  ot = Jt.unstable_now,
  Sg = Jt.unstable_getCurrentPriorityLevel,
  Qf = Jt.unstable_ImmediatePriority,
  j0 = Jt.unstable_UserBlockingPriority,
  dl = Jt.unstable_NormalPriority,
  Ng = Jt.unstable_LowPriority,
  U0 = Jt.unstable_IdlePriority,
  Kl = null,
  Ir = null;
function Cg(t) {
  if (Ir && typeof Ir.onCommitFiberRoot == "function")
    try {
      Ir.onCommitFiberRoot(Kl, t, void 0, (t.current.flags & 128) === 128);
    } catch {}
}
var wr = Math.clz32 ? Math.clz32 : Rg,
  Pg = Math.log,
  Mg = Math.LN2;
function Rg(t) {
  return (t >>>= 0), t === 0 ? 32 : (31 - ((Pg(t) / Mg) | 0)) | 0;
}
var ks = 64,
  Ss = 4194304;
function No(t) {
  switch (t & -t) {
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
      return t & 4194240;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return t & 130023424;
    case 134217728:
      return 134217728;
    case 268435456:
      return 268435456;
    case 536870912:
      return 536870912;
    case 1073741824:
      return 1073741824;
    default:
      return t;
  }
}
function pl(t, e) {
  var r = t.pendingLanes;
  if (r === 0) return 0;
  var n = 0,
    i = t.suspendedLanes,
    o = t.pingedLanes,
    s = r & 268435455;
  if (s !== 0) {
    var l = s & ~i;
    l !== 0 ? (n = No(l)) : ((o &= s), o !== 0 && (n = No(o)));
  } else (s = r & ~i), s !== 0 ? (n = No(s)) : o !== 0 && (n = No(o));
  if (n === 0) return 0;
  if (
    e !== 0 &&
    e !== n &&
    !(e & i) &&
    ((i = n & -n), (o = e & -e), i >= o || (i === 16 && (o & 4194240) !== 0))
  )
    return e;
  if ((n & 4 && (n |= r & 16), (e = t.entangledLanes), e !== 0))
    for (t = t.entanglements, e &= n; 0 < e; )
      (r = 31 - wr(e)), (i = 1 << r), (n |= t[r]), (e &= ~i);
  return n;
}
function Ig(t, e) {
  switch (t) {
    case 1:
    case 2:
    case 4:
      return e + 250;
    case 8:
    case 16:
    case 32:
    case 64:
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
      return e + 5e3;
    case 4194304:
    case 8388608:
    case 16777216:
    case 33554432:
    case 67108864:
      return -1;
    case 134217728:
    case 268435456:
    case 536870912:
    case 1073741824:
      return -1;
    default:
      return -1;
  }
}
function Tg(t, e) {
  for (
    var r = t.suspendedLanes,
      n = t.pingedLanes,
      i = t.expirationTimes,
      o = t.pendingLanes;
    0 < o;

  ) {
    var s = 31 - wr(o),
      l = 1 << s,
      a = i[s];
    a === -1
      ? (!(l & r) || l & n) && (i[s] = Ig(l, e))
      : a <= e && (t.expiredLanes |= l),
      (o &= ~l);
  }
}
function Hu(t) {
  return (
    (t = t.pendingLanes & -1073741825),
    t !== 0 ? t : t & 1073741824 ? 1073741824 : 0
  );
}
function z0() {
  var t = ks;
  return (ks <<= 1), !(ks & 4194240) && (ks = 64), t;
}
function ja(t) {
  for (var e = [], r = 0; 31 > r; r++) e.push(t);
  return e;
}
function ds(t, e, r) {
  (t.pendingLanes |= e),
    e !== 536870912 && ((t.suspendedLanes = 0), (t.pingedLanes = 0)),
    (t = t.eventTimes),
    (e = 31 - wr(e)),
    (t[e] = r);
}
function Og(t, e) {
  var r = t.pendingLanes & ~e;
  (t.pendingLanes = e),
    (t.suspendedLanes = 0),
    (t.pingedLanes = 0),
    (t.expiredLanes &= e),
    (t.mutableReadLanes &= e),
    (t.entangledLanes &= e),
    (e = t.entanglements);
  var n = t.eventTimes;
  for (t = t.expirationTimes; 0 < r; ) {
    var i = 31 - wr(r),
      o = 1 << i;
    (e[i] = 0), (n[i] = -1), (t[i] = -1), (r &= ~o);
  }
}
function Kf(t, e) {
  var r = (t.entangledLanes |= e);
  for (t = t.entanglements; r; ) {
    var n = 31 - wr(r),
      i = 1 << n;
    (i & e) | (t[n] & e) && (t[n] |= e), (r &= ~i);
  }
}
var de = 0;
function H0(t) {
  return (t &= -t), 1 < t ? (4 < t ? (t & 268435455 ? 16 : 536870912) : 4) : 1;
}
var G0,
  Vf,
  q0,
  W0,
  Q0,
  Gu = !1,
  Ns = [],
  An = null,
  En = null,
  bn = null,
  qo = new Map(),
  Wo = new Map(),
  mn = [],
  Lg =
    "mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(
      " "
    );
function oh(t, e) {
  switch (t) {
    case "focusin":
    case "focusout":
      An = null;
      break;
    case "dragenter":
    case "dragleave":
      En = null;
      break;
    case "mouseover":
    case "mouseout":
      bn = null;
      break;
    case "pointerover":
    case "pointerout":
      qo.delete(e.pointerId);
      break;
    case "gotpointercapture":
    case "lostpointercapture":
      Wo.delete(e.pointerId);
  }
}
function po(t, e, r, n, i, o) {
  return t === null || t.nativeEvent !== o
    ? ((t = {
        blockedOn: e,
        domEventName: r,
        eventSystemFlags: n,
        nativeEvent: o,
        targetContainers: [i],
      }),
      e !== null && ((e = ms(e)), e !== null && Vf(e)),
      t)
    : ((t.eventSystemFlags |= n),
      (e = t.targetContainers),
      i !== null && e.indexOf(i) === -1 && e.push(i),
      t);
}
function Bg(t, e, r, n, i) {
  switch (e) {
    case "focusin":
      return (An = po(An, t, e, r, n, i)), !0;
    case "dragenter":
      return (En = po(En, t, e, r, n, i)), !0;
    case "mouseover":
      return (bn = po(bn, t, e, r, n, i)), !0;
    case "pointerover":
      var o = i.pointerId;
      return qo.set(o, po(qo.get(o) || null, t, e, r, n, i)), !0;
    case "gotpointercapture":
      return (
        (o = i.pointerId), Wo.set(o, po(Wo.get(o) || null, t, e, r, n, i)), !0
      );
  }
  return !1;
}
function K0(t) {
  var e = ti(t.target);
  if (e !== null) {
    var r = vi(e);
    if (r !== null) {
      if (((e = r.tag), e === 13)) {
        if (((e = L0(r)), e !== null)) {
          (t.blockedOn = e),
            Q0(t.priority, function () {
              q0(r);
            });
          return;
        }
      } else if (e === 3 && r.stateNode.current.memoizedState.isDehydrated) {
        t.blockedOn = r.tag === 3 ? r.stateNode.containerInfo : null;
        return;
      }
    }
  }
  t.blockedOn = null;
}
function Qs(t) {
  if (t.blockedOn !== null) return !1;
  for (var e = t.targetContainers; 0 < e.length; ) {
    var r = qu(t.domEventName, t.eventSystemFlags, e[0], t.nativeEvent);
    if (r === null) {
      r = t.nativeEvent;
      var n = new r.constructor(r.type, r);
      (Fu = n), r.target.dispatchEvent(n), (Fu = null);
    } else return (e = ms(r)), e !== null && Vf(e), (t.blockedOn = r), !1;
    e.shift();
  }
  return !0;
}
function sh(t, e, r) {
  Qs(t) && r.delete(e);
}
function Dg() {
  (Gu = !1),
    An !== null && Qs(An) && (An = null),
    En !== null && Qs(En) && (En = null),
    bn !== null && Qs(bn) && (bn = null),
    qo.forEach(sh),
    Wo.forEach(sh);
}
function mo(t, e) {
  t.blockedOn === e &&
    ((t.blockedOn = null),
    Gu ||
      ((Gu = !0),
      Jt.unstable_scheduleCallback(Jt.unstable_NormalPriority, Dg)));
}
function Qo(t) {
  function e(i) {
    return mo(i, t);
  }
  if (0 < Ns.length) {
    mo(Ns[0], t);
    for (var r = 1; r < Ns.length; r++) {
      var n = Ns[r];
      n.blockedOn === t && (n.blockedOn = null);
    }
  }
  for (
    An !== null && mo(An, t),
      En !== null && mo(En, t),
      bn !== null && mo(bn, t),
      qo.forEach(e),
      Wo.forEach(e),
      r = 0;
    r < mn.length;
    r++
  )
    (n = mn[r]), n.blockedOn === t && (n.blockedOn = null);
  for (; 0 < mn.length && ((r = mn[0]), r.blockedOn === null); )
    K0(r), r.blockedOn === null && mn.shift();
}
var Ui = rn.ReactCurrentBatchConfig,
  ml = !0;
function Fg(t, e, r, n) {
  var i = de,
    o = Ui.transition;
  Ui.transition = null;
  try {
    (de = 1), Jf(t, e, r, n);
  } finally {
    (de = i), (Ui.transition = o);
  }
}
function jg(t, e, r, n) {
  var i = de,
    o = Ui.transition;
  Ui.transition = null;
  try {
    (de = 4), Jf(t, e, r, n);
  } finally {
    (de = i), (Ui.transition = o);
  }
}
function Jf(t, e, r, n) {
  if (ml) {
    var i = qu(t, e, r, n);
    if (i === null) Ja(t, e, n, vl, r), oh(t, n);
    else if (Bg(i, t, e, r, n)) n.stopPropagation();
    else if ((oh(t, n), e & 4 && -1 < Lg.indexOf(t))) {
      for (; i !== null; ) {
        var o = ms(i);
        if (
          (o !== null && G0(o),
          (o = qu(t, e, r, n)),
          o === null && Ja(t, e, n, vl, r),
          o === i)
        )
          break;
        i = o;
      }
      i !== null && n.stopPropagation();
    } else Ja(t, e, n, null, r);
  }
}
var vl = null;
function qu(t, e, r, n) {
  if (((vl = null), (t = Wf(n)), (t = ti(t)), t !== null))
    if (((e = vi(t)), e === null)) t = null;
    else if (((r = e.tag), r === 13)) {
      if (((t = L0(e)), t !== null)) return t;
      t = null;
    } else if (r === 3) {
      if (e.stateNode.current.memoizedState.isDehydrated)
        return e.tag === 3 ? e.stateNode.containerInfo : null;
      t = null;
    } else e !== t && (t = null);
  return (vl = t), null;
}
function V0(t) {
  switch (t) {
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
      return 1;
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
    case "toggle":
    case "touchmove":
    case "wheel":
    case "mouseenter":
    case "mouseleave":
    case "pointerenter":
    case "pointerleave":
      return 4;
    case "message":
      switch (Sg()) {
        case Qf:
          return 1;
        case j0:
          return 4;
        case dl:
        case Ng:
          return 16;
        case U0:
          return 536870912;
        default:
          return 16;
      }
    default:
      return 16;
  }
}
var gn = null,
  $f = null,
  Ks = null;
function J0() {
  if (Ks) return Ks;
  var t,
    e = $f,
    r = e.length,
    n,
    i = "value" in gn ? gn.value : gn.textContent,
    o = i.length;
  for (t = 0; t < r && e[t] === i[t]; t++);
  var s = r - t;
  for (n = 1; n <= s && e[r - n] === i[o - n]; n++);
  return (Ks = i.slice(t, 1 < n ? 1 - n : void 0));
}
function Vs(t) {
  var e = t.keyCode;
  return (
    "charCode" in t
      ? ((t = t.charCode), t === 0 && e === 13 && (t = 13))
      : (t = e),
    t === 10 && (t = 13),
    32 <= t || t === 13 ? t : 0
  );
}
function Cs() {
  return !0;
}
function lh() {
  return !1;
}
function Yt(t) {
  function e(r, n, i, o, s) {
    (this._reactName = r),
      (this._targetInst = i),
      (this.type = n),
      (this.nativeEvent = o),
      (this.target = s),
      (this.currentTarget = null);
    for (var l in t)
      t.hasOwnProperty(l) && ((r = t[l]), (this[l] = r ? r(o) : o[l]));
    return (
      (this.isDefaultPrevented = (
        o.defaultPrevented != null ? o.defaultPrevented : o.returnValue === !1
      )
        ? Cs
        : lh),
      (this.isPropagationStopped = lh),
      this
    );
  }
  return (
    rt(e.prototype, {
      preventDefault: function () {
        this.defaultPrevented = !0;
        var r = this.nativeEvent;
        r &&
          (r.preventDefault
            ? r.preventDefault()
            : typeof r.returnValue != "unknown" && (r.returnValue = !1),
          (this.isDefaultPrevented = Cs));
      },
      stopPropagation: function () {
        var r = this.nativeEvent;
        r &&
          (r.stopPropagation
            ? r.stopPropagation()
            : typeof r.cancelBubble != "unknown" && (r.cancelBubble = !0),
          (this.isPropagationStopped = Cs));
      },
      persist: function () {},
      isPersistent: Cs,
    }),
    e
  );
}
var io = {
    eventPhase: 0,
    bubbles: 0,
    cancelable: 0,
    timeStamp: function (t) {
      return t.timeStamp || Date.now();
    },
    defaultPrevented: 0,
    isTrusted: 0,
  },
  Yf = Yt(io),
  ps = rt({}, io, { view: 0, detail: 0 }),
  Ug = Yt(ps),
  Ua,
  za,
  vo,
  Vl = rt({}, ps, {
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
    getModifierState: Xf,
    button: 0,
    buttons: 0,
    relatedTarget: function (t) {
      return t.relatedTarget === void 0
        ? t.fromElement === t.srcElement
          ? t.toElement
          : t.fromElement
        : t.relatedTarget;
    },
    movementX: function (t) {
      return "movementX" in t
        ? t.movementX
        : (t !== vo &&
            (vo && t.type === "mousemove"
              ? ((Ua = t.screenX - vo.screenX), (za = t.screenY - vo.screenY))
              : (za = Ua = 0),
            (vo = t)),
          Ua);
    },
    movementY: function (t) {
      return "movementY" in t ? t.movementY : za;
    },
  }),
  ah = Yt(Vl),
  zg = rt({}, Vl, { dataTransfer: 0 }),
  Hg = Yt(zg),
  Gg = rt({}, ps, { relatedTarget: 0 }),
  Ha = Yt(Gg),
  qg = rt({}, io, { animationName: 0, elapsedTime: 0, pseudoElement: 0 }),
  Wg = Yt(qg),
  Qg = rt({}, io, {
    clipboardData: function (t) {
      return "clipboardData" in t ? t.clipboardData : window.clipboardData;
    },
  }),
  Kg = Yt(Qg),
  Vg = rt({}, io, { data: 0 }),
  uh = Yt(Vg),
  Jg = {
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
    MozPrintableKey: "Unidentified",
  },
  $g = {
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
    224: "Meta",
  },
  Yg = {
    Alt: "altKey",
    Control: "ctrlKey",
    Meta: "metaKey",
    Shift: "shiftKey",
  };
function Xg(t) {
  var e = this.nativeEvent;
  return e.getModifierState ? e.getModifierState(t) : (t = Yg[t]) ? !!e[t] : !1;
}
function Xf() {
  return Xg;
}
var Zg = rt({}, ps, {
    key: function (t) {
      if (t.key) {
        var e = Jg[t.key] || t.key;
        if (e !== "Unidentified") return e;
      }
      return t.type === "keypress"
        ? ((t = Vs(t)), t === 13 ? "Enter" : String.fromCharCode(t))
        : t.type === "keydown" || t.type === "keyup"
        ? $g[t.keyCode] || "Unidentified"
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
    getModifierState: Xf,
    charCode: function (t) {
      return t.type === "keypress" ? Vs(t) : 0;
    },
    keyCode: function (t) {
      return t.type === "keydown" || t.type === "keyup" ? t.keyCode : 0;
    },
    which: function (t) {
      return t.type === "keypress"
        ? Vs(t)
        : t.type === "keydown" || t.type === "keyup"
        ? t.keyCode
        : 0;
    },
  }),
  e1 = Yt(Zg),
  t1 = rt({}, Vl, {
    pointerId: 0,
    width: 0,
    height: 0,
    pressure: 0,
    tangentialPressure: 0,
    tiltX: 0,
    tiltY: 0,
    twist: 0,
    pointerType: 0,
    isPrimary: 0,
  }),
  fh = Yt(t1),
  r1 = rt({}, ps, {
    touches: 0,
    targetTouches: 0,
    changedTouches: 0,
    altKey: 0,
    metaKey: 0,
    ctrlKey: 0,
    shiftKey: 0,
    getModifierState: Xf,
  }),
  n1 = Yt(r1),
  i1 = rt({}, io, { propertyName: 0, elapsedTime: 0, pseudoElement: 0 }),
  o1 = Yt(i1),
  s1 = rt({}, Vl, {
    deltaX: function (t) {
      return "deltaX" in t ? t.deltaX : "wheelDeltaX" in t ? -t.wheelDeltaX : 0;
    },
    deltaY: function (t) {
      return "deltaY" in t
        ? t.deltaY
        : "wheelDeltaY" in t
        ? -t.wheelDeltaY
        : "wheelDelta" in t
        ? -t.wheelDelta
        : 0;
    },
    deltaZ: 0,
    deltaMode: 0,
  }),
  l1 = Yt(s1),
  a1 = [9, 13, 27, 32],
  Zf = Jr && "CompositionEvent" in window,
  To = null;
Jr && "documentMode" in document && (To = document.documentMode);
var u1 = Jr && "TextEvent" in window && !To,
  $0 = Jr && (!Zf || (To && 8 < To && 11 >= To)),
  ch = String.fromCharCode(32),
  hh = !1;
function Y0(t, e) {
  switch (t) {
    case "keyup":
      return a1.indexOf(e.keyCode) !== -1;
    case "keydown":
      return e.keyCode !== 229;
    case "keypress":
    case "mousedown":
    case "focusout":
      return !0;
    default:
      return !1;
  }
}
function X0(t) {
  return (t = t.detail), typeof t == "object" && "data" in t ? t.data : null;
}
var Si = !1;
function f1(t, e) {
  switch (t) {
    case "compositionend":
      return X0(e);
    case "keypress":
      return e.which !== 32 ? null : ((hh = !0), ch);
    case "textInput":
      return (t = e.data), t === ch && hh ? null : t;
    default:
      return null;
  }
}
function c1(t, e) {
  if (Si)
    return t === "compositionend" || (!Zf && Y0(t, e))
      ? ((t = J0()), (Ks = $f = gn = null), (Si = !1), t)
      : null;
  switch (t) {
    case "paste":
      return null;
    case "keypress":
      if (!(e.ctrlKey || e.altKey || e.metaKey) || (e.ctrlKey && e.altKey)) {
        if (e.char && 1 < e.char.length) return e.char;
        if (e.which) return String.fromCharCode(e.which);
      }
      return null;
    case "compositionend":
      return $0 && e.locale !== "ko" ? null : e.data;
    default:
      return null;
  }
}
var h1 = {
  color: !0,
  date: !0,
  datetime: !0,
  "datetime-local": !0,
  email: !0,
  month: !0,
  number: !0,
  password: !0,
  range: !0,
  search: !0,
  tel: !0,
  text: !0,
  time: !0,
  url: !0,
  week: !0,
};
function dh(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return e === "input" ? !!h1[t.type] : e === "textarea";
}
function Z0(t, e, r, n) {
  M0(n),
    (e = gl(e, "onChange")),
    0 < e.length &&
      ((r = new Yf("onChange", "change", null, r, n)),
      t.push({ event: r, listeners: e }));
}
var Oo = null,
  Ko = null;
function d1(t) {
  fp(t, 0);
}
function Jl(t) {
  var e = Pi(t);
  if (b0(e)) return t;
}
function p1(t, e) {
  if (t === "change") return e;
}
var ep = !1;
if (Jr) {
  var Ga;
  if (Jr) {
    var qa = "oninput" in document;
    if (!qa) {
      var ph = document.createElement("div");
      ph.setAttribute("oninput", "return;"),
        (qa = typeof ph.oninput == "function");
    }
    Ga = qa;
  } else Ga = !1;
  ep = Ga && (!document.documentMode || 9 < document.documentMode);
}
function mh() {
  Oo && (Oo.detachEvent("onpropertychange", tp), (Ko = Oo = null));
}
function tp(t) {
  if (t.propertyName === "value" && Jl(Ko)) {
    var e = [];
    Z0(e, Ko, t, Wf(t)), O0(d1, e);
  }
}
function m1(t, e, r) {
  t === "focusin"
    ? (mh(), (Oo = e), (Ko = r), Oo.attachEvent("onpropertychange", tp))
    : t === "focusout" && mh();
}
function v1(t) {
  if (t === "selectionchange" || t === "keyup" || t === "keydown")
    return Jl(Ko);
}
function g1(t, e) {
  if (t === "click") return Jl(e);
}
function y1(t, e) {
  if (t === "input" || t === "change") return Jl(e);
}
function x1(t, e) {
  return (t === e && (t !== 0 || 1 / t === 1 / e)) || (t !== t && e !== e);
}
var Er = typeof Object.is == "function" ? Object.is : x1;
function Vo(t, e) {
  if (Er(t, e)) return !0;
  if (typeof t != "object" || t === null || typeof e != "object" || e === null)
    return !1;
  var r = Object.keys(t),
    n = Object.keys(e);
  if (r.length !== n.length) return !1;
  for (n = 0; n < r.length; n++) {
    var i = r[n];
    if (!Su.call(e, i) || !Er(t[i], e[i])) return !1;
  }
  return !0;
}
function vh(t) {
  for (; t && t.firstChild; ) t = t.firstChild;
  return t;
}
function gh(t, e) {
  var r = vh(t);
  t = 0;
  for (var n; r; ) {
    if (r.nodeType === 3) {
      if (((n = t + r.textContent.length), t <= e && n >= e))
        return { node: r, offset: e - t };
      t = n;
    }
    e: {
      for (; r; ) {
        if (r.nextSibling) {
          r = r.nextSibling;
          break e;
        }
        r = r.parentNode;
      }
      r = void 0;
    }
    r = vh(r);
  }
}
function rp(t, e) {
  return t && e
    ? t === e
      ? !0
      : t && t.nodeType === 3
      ? !1
      : e && e.nodeType === 3
      ? rp(t, e.parentNode)
      : "contains" in t
      ? t.contains(e)
      : t.compareDocumentPosition
      ? !!(t.compareDocumentPosition(e) & 16)
      : !1
    : !1;
}
function np() {
  for (var t = window, e = fl(); e instanceof t.HTMLIFrameElement; ) {
    try {
      var r = typeof e.contentWindow.location.href == "string";
    } catch {
      r = !1;
    }
    if (r) t = e.contentWindow;
    else break;
    e = fl(t.document);
  }
  return e;
}
function ec(t) {
  var e = t && t.nodeName && t.nodeName.toLowerCase();
  return (
    e &&
    ((e === "input" &&
      (t.type === "text" ||
        t.type === "search" ||
        t.type === "tel" ||
        t.type === "url" ||
        t.type === "password")) ||
      e === "textarea" ||
      t.contentEditable === "true")
  );
}
function w1(t) {
  var e = np(),
    r = t.focusedElem,
    n = t.selectionRange;
  if (
    e !== r &&
    r &&
    r.ownerDocument &&
    rp(r.ownerDocument.documentElement, r)
  ) {
    if (n !== null && ec(r)) {
      if (
        ((e = n.start),
        (t = n.end),
        t === void 0 && (t = e),
        "selectionStart" in r)
      )
        (r.selectionStart = e), (r.selectionEnd = Math.min(t, r.value.length));
      else if (
        ((t = ((e = r.ownerDocument || document) && e.defaultView) || window),
        t.getSelection)
      ) {
        t = t.getSelection();
        var i = r.textContent.length,
          o = Math.min(n.start, i);
        (n = n.end === void 0 ? o : Math.min(n.end, i)),
          !t.extend && o > n && ((i = n), (n = o), (o = i)),
          (i = gh(r, o));
        var s = gh(r, n);
        i &&
          s &&
          (t.rangeCount !== 1 ||
            t.anchorNode !== i.node ||
            t.anchorOffset !== i.offset ||
            t.focusNode !== s.node ||
            t.focusOffset !== s.offset) &&
          ((e = e.createRange()),
          e.setStart(i.node, i.offset),
          t.removeAllRanges(),
          o > n
            ? (t.addRange(e), t.extend(s.node, s.offset))
            : (e.setEnd(s.node, s.offset), t.addRange(e)));
      }
    }
    for (e = [], t = r; (t = t.parentNode); )
      t.nodeType === 1 &&
        e.push({ element: t, left: t.scrollLeft, top: t.scrollTop });
    for (typeof r.focus == "function" && r.focus(), r = 0; r < e.length; r++)
      (t = e[r]),
        (t.element.scrollLeft = t.left),
        (t.element.scrollTop = t.top);
  }
}
var A1 = Jr && "documentMode" in document && 11 >= document.documentMode,
  Ni = null,
  Wu = null,
  Lo = null,
  Qu = !1;
function yh(t, e, r) {
  var n = r.window === r ? r.document : r.nodeType === 9 ? r : r.ownerDocument;
  Qu ||
    Ni == null ||
    Ni !== fl(n) ||
    ((n = Ni),
    "selectionStart" in n && ec(n)
      ? (n = { start: n.selectionStart, end: n.selectionEnd })
      : ((n = (
          (n.ownerDocument && n.ownerDocument.defaultView) ||
          window
        ).getSelection()),
        (n = {
          anchorNode: n.anchorNode,
          anchorOffset: n.anchorOffset,
          focusNode: n.focusNode,
          focusOffset: n.focusOffset,
        })),
    (Lo && Vo(Lo, n)) ||
      ((Lo = n),
      (n = gl(Wu, "onSelect")),
      0 < n.length &&
        ((e = new Yf("onSelect", "select", null, e, r)),
        t.push({ event: e, listeners: n }),
        (e.target = Ni))));
}
function Ps(t, e) {
  var r = {};
  return (
    (r[t.toLowerCase()] = e.toLowerCase()),
    (r["Webkit" + t] = "webkit" + e),
    (r["Moz" + t] = "moz" + e),
    r
  );
}
var Ci = {
    animationend: Ps("Animation", "AnimationEnd"),
    animationiteration: Ps("Animation", "AnimationIteration"),
    animationstart: Ps("Animation", "AnimationStart"),
    transitionend: Ps("Transition", "TransitionEnd"),
  },
  Wa = {},
  ip = {};
Jr &&
  ((ip = document.createElement("div").style),
  "AnimationEvent" in window ||
    (delete Ci.animationend.animation,
    delete Ci.animationiteration.animation,
    delete Ci.animationstart.animation),
  "TransitionEvent" in window || delete Ci.transitionend.transition);
function $l(t) {
  if (Wa[t]) return Wa[t];
  if (!Ci[t]) return t;
  var e = Ci[t],
    r;
  for (r in e) if (e.hasOwnProperty(r) && r in ip) return (Wa[t] = e[r]);
  return t;
}
var op = $l("animationend"),
  sp = $l("animationiteration"),
  lp = $l("animationstart"),
  ap = $l("transitionend"),
  up = new Map(),
  xh =
    "abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(
      " "
    );
function Tn(t, e) {
  up.set(t, e), mi(e, [t]);
}
for (var Qa = 0; Qa < xh.length; Qa++) {
  var Ka = xh[Qa],
    E1 = Ka.toLowerCase(),
    b1 = Ka[0].toUpperCase() + Ka.slice(1);
  Tn(E1, "on" + b1);
}
Tn(op, "onAnimationEnd");
Tn(sp, "onAnimationIteration");
Tn(lp, "onAnimationStart");
Tn("dblclick", "onDoubleClick");
Tn("focusin", "onFocus");
Tn("focusout", "onBlur");
Tn(ap, "onTransitionEnd");
Qi("onMouseEnter", ["mouseout", "mouseover"]);
Qi("onMouseLeave", ["mouseout", "mouseover"]);
Qi("onPointerEnter", ["pointerout", "pointerover"]);
Qi("onPointerLeave", ["pointerout", "pointerover"]);
mi(
  "onChange",
  "change click focusin focusout input keydown keyup selectionchange".split(" ")
);
mi(
  "onSelect",
  "focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(
    " "
  )
);
mi("onBeforeInput", ["compositionend", "keypress", "textInput", "paste"]);
mi(
  "onCompositionEnd",
  "compositionend focusout keydown keypress keyup mousedown".split(" ")
);
mi(
  "onCompositionStart",
  "compositionstart focusout keydown keypress keyup mousedown".split(" ")
);
mi(
  "onCompositionUpdate",
  "compositionupdate focusout keydown keypress keyup mousedown".split(" ")
);
var Co =
    "abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(
      " "
    ),
  _1 = new Set("cancel close invalid load scroll toggle".split(" ").concat(Co));
function wh(t, e, r) {
  var n = t.type || "unknown-event";
  (t.currentTarget = r), Eg(n, e, void 0, t), (t.currentTarget = null);
}
function fp(t, e) {
  e = (e & 4) !== 0;
  for (var r = 0; r < t.length; r++) {
    var n = t[r],
      i = n.event;
    n = n.listeners;
    e: {
      var o = void 0;
      if (e)
        for (var s = n.length - 1; 0 <= s; s--) {
          var l = n[s],
            a = l.instance,
            f = l.currentTarget;
          if (((l = l.listener), a !== o && i.isPropagationStopped())) break e;
          wh(i, l, f), (o = a);
        }
      else
        for (s = 0; s < n.length; s++) {
          if (
            ((l = n[s]),
            (a = l.instance),
            (f = l.currentTarget),
            (l = l.listener),
            a !== o && i.isPropagationStopped())
          )
            break e;
          wh(i, l, f), (o = a);
        }
    }
  }
  if (hl) throw ((t = zu), (hl = !1), (zu = null), t);
}
function Je(t, e) {
  var r = e[Yu];
  r === void 0 && (r = e[Yu] = new Set());
  var n = t + "__bubble";
  r.has(n) || (cp(e, t, 2, !1), r.add(n));
}
function Va(t, e, r) {
  var n = 0;
  e && (n |= 4), cp(r, t, n, e);
}
var Ms = "_reactListening" + Math.random().toString(36).slice(2);
function Jo(t) {
  if (!t[Ms]) {
    (t[Ms] = !0),
      y0.forEach(function (r) {
        r !== "selectionchange" && (_1.has(r) || Va(r, !1, t), Va(r, !0, t));
      });
    var e = t.nodeType === 9 ? t : t.ownerDocument;
    e === null || e[Ms] || ((e[Ms] = !0), Va("selectionchange", !1, e));
  }
}
function cp(t, e, r, n) {
  switch (V0(e)) {
    case 1:
      var i = Fg;
      break;
    case 4:
      i = jg;
      break;
    default:
      i = Jf;
  }
  (r = i.bind(null, e, r, t)),
    (i = void 0),
    !Uu ||
      (e !== "touchstart" && e !== "touchmove" && e !== "wheel") ||
      (i = !0),
    n
      ? i !== void 0
        ? t.addEventListener(e, r, { capture: !0, passive: i })
        : t.addEventListener(e, r, !0)
      : i !== void 0
      ? t.addEventListener(e, r, { passive: i })
      : t.addEventListener(e, r, !1);
}
function Ja(t, e, r, n, i) {
  var o = n;
  if (!(e & 1) && !(e & 2) && n !== null)
    e: for (;;) {
      if (n === null) return;
      var s = n.tag;
      if (s === 3 || s === 4) {
        var l = n.stateNode.containerInfo;
        if (l === i || (l.nodeType === 8 && l.parentNode === i)) break;
        if (s === 4)
          for (s = n.return; s !== null; ) {
            var a = s.tag;
            if (
              (a === 3 || a === 4) &&
              ((a = s.stateNode.containerInfo),
              a === i || (a.nodeType === 8 && a.parentNode === i))
            )
              return;
            s = s.return;
          }
        for (; l !== null; ) {
          if (((s = ti(l)), s === null)) return;
          if (((a = s.tag), a === 5 || a === 6)) {
            n = o = s;
            continue e;
          }
          l = l.parentNode;
        }
      }
      n = n.return;
    }
  O0(function () {
    var f = o,
      h = Wf(r),
      p = [];
    e: {
      var y = up.get(t);
      if (y !== void 0) {
        var S = Yf,
          P = t;
        switch (t) {
          case "keypress":
            if (Vs(r) === 0) break e;
          case "keydown":
          case "keyup":
            S = e1;
            break;
          case "focusin":
            (P = "focus"), (S = Ha);
            break;
          case "focusout":
            (P = "blur"), (S = Ha);
            break;
          case "beforeblur":
          case "afterblur":
            S = Ha;
            break;
          case "click":
            if (r.button === 2) break e;
          case "auxclick":
          case "dblclick":
          case "mousedown":
          case "mousemove":
          case "mouseup":
          case "mouseout":
          case "mouseover":
          case "contextmenu":
            S = ah;
            break;
          case "drag":
          case "dragend":
          case "dragenter":
          case "dragexit":
          case "dragleave":
          case "dragover":
          case "dragstart":
          case "drop":
            S = Hg;
            break;
          case "touchcancel":
          case "touchend":
          case "touchmove":
          case "touchstart":
            S = n1;
            break;
          case op:
          case sp:
          case lp:
            S = Wg;
            break;
          case ap:
            S = o1;
            break;
          case "scroll":
            S = Ug;
            break;
          case "wheel":
            S = l1;
            break;
          case "copy":
          case "cut":
          case "paste":
            S = Kg;
            break;
          case "gotpointercapture":
          case "lostpointercapture":
          case "pointercancel":
          case "pointerdown":
          case "pointermove":
          case "pointerout":
          case "pointerover":
          case "pointerup":
            S = fh;
        }
        var M = (e & 4) !== 0,
          I = !M && t === "scroll",
          w = M ? (y !== null ? y + "Capture" : null) : y;
        M = [];
        for (var x = f, N; x !== null; ) {
          N = x;
          var T = N.stateNode;
          if (
            (N.tag === 5 &&
              T !== null &&
              ((N = T),
              w !== null && ((T = Go(x, w)), T != null && M.push($o(x, T, N)))),
            I)
          )
            break;
          x = x.return;
        }
        0 < M.length &&
          ((y = new S(y, P, null, r, h)), p.push({ event: y, listeners: M }));
      }
    }
    if (!(e & 7)) {
      e: {
        if (
          ((y = t === "mouseover" || t === "pointerover"),
          (S = t === "mouseout" || t === "pointerout"),
          y &&
            r !== Fu &&
            (P = r.relatedTarget || r.fromElement) &&
            (ti(P) || P[$r]))
        )
          break e;
        if (
          (S || y) &&
          ((y =
            h.window === h
              ? h
              : (y = h.ownerDocument)
              ? y.defaultView || y.parentWindow
              : window),
          S
            ? ((P = r.relatedTarget || r.toElement),
              (S = f),
              (P = P ? ti(P) : null),
              P !== null &&
                ((I = vi(P)), P !== I || (P.tag !== 5 && P.tag !== 6)) &&
                (P = null))
            : ((S = null), (P = f)),
          S !== P)
        ) {
          if (
            ((M = ah),
            (T = "onMouseLeave"),
            (w = "onMouseEnter"),
            (x = "mouse"),
            (t === "pointerout" || t === "pointerover") &&
              ((M = fh),
              (T = "onPointerLeave"),
              (w = "onPointerEnter"),
              (x = "pointer")),
            (I = S == null ? y : Pi(S)),
            (N = P == null ? y : Pi(P)),
            (y = new M(T, x + "leave", S, r, h)),
            (y.target = I),
            (y.relatedTarget = N),
            (T = null),
            ti(h) === f &&
              ((M = new M(w, x + "enter", P, r, h)),
              (M.target = N),
              (M.relatedTarget = I),
              (T = M)),
            (I = T),
            S && P)
          )
            t: {
              for (M = S, w = P, x = 0, N = M; N; N = wi(N)) x++;
              for (N = 0, T = w; T; T = wi(T)) N++;
              for (; 0 < x - N; ) (M = wi(M)), x--;
              for (; 0 < N - x; ) (w = wi(w)), N--;
              for (; x--; ) {
                if (M === w || (w !== null && M === w.alternate)) break t;
                (M = wi(M)), (w = wi(w));
              }
              M = null;
            }
          else M = null;
          S !== null && Ah(p, y, S, M, !1),
            P !== null && I !== null && Ah(p, I, P, M, !0);
        }
      }
      e: {
        if (
          ((y = f ? Pi(f) : window),
          (S = y.nodeName && y.nodeName.toLowerCase()),
          S === "select" || (S === "input" && y.type === "file"))
        )
          var L = p1;
        else if (dh(y))
          if (ep) L = y1;
          else {
            L = v1;
            var j = m1;
          }
        else
          (S = y.nodeName) &&
            S.toLowerCase() === "input" &&
            (y.type === "checkbox" || y.type === "radio") &&
            (L = g1);
        if (L && (L = L(t, f))) {
          Z0(p, L, r, h);
          break e;
        }
        j && j(t, y, f),
          t === "focusout" &&
            (j = y._wrapperState) &&
            j.controlled &&
            y.type === "number" &&
            Tu(y, "number", y.value);
      }
      switch (((j = f ? Pi(f) : window), t)) {
        case "focusin":
          (dh(j) || j.contentEditable === "true") &&
            ((Ni = j), (Wu = f), (Lo = null));
          break;
        case "focusout":
          Lo = Wu = Ni = null;
          break;
        case "mousedown":
          Qu = !0;
          break;
        case "contextmenu":
        case "mouseup":
        case "dragend":
          (Qu = !1), yh(p, r, h);
          break;
        case "selectionchange":
          if (A1) break;
        case "keydown":
        case "keyup":
          yh(p, r, h);
      }
      var H;
      if (Zf)
        e: {
          switch (t) {
            case "compositionstart":
              var G = "onCompositionStart";
              break e;
            case "compositionend":
              G = "onCompositionEnd";
              break e;
            case "compositionupdate":
              G = "onCompositionUpdate";
              break e;
          }
          G = void 0;
        }
      else
        Si
          ? Y0(t, r) && (G = "onCompositionEnd")
          : t === "keydown" && r.keyCode === 229 && (G = "onCompositionStart");
      G &&
        ($0 &&
          r.locale !== "ko" &&
          (Si || G !== "onCompositionStart"
            ? G === "onCompositionEnd" && Si && (H = J0())
            : ((gn = h),
              ($f = "value" in gn ? gn.value : gn.textContent),
              (Si = !0))),
        (j = gl(f, G)),
        0 < j.length &&
          ((G = new uh(G, t, null, r, h)),
          p.push({ event: G, listeners: j }),
          H ? (G.data = H) : ((H = X0(r)), H !== null && (G.data = H)))),
        (H = u1 ? f1(t, r) : c1(t, r)) &&
          ((f = gl(f, "onBeforeInput")),
          0 < f.length &&
            ((h = new uh("onBeforeInput", "beforeinput", null, r, h)),
            p.push({ event: h, listeners: f }),
            (h.data = H)));
    }
    fp(p, e);
  });
}
function $o(t, e, r) {
  return { instance: t, listener: e, currentTarget: r };
}
function gl(t, e) {
  for (var r = e + "Capture", n = []; t !== null; ) {
    var i = t,
      o = i.stateNode;
    i.tag === 5 &&
      o !== null &&
      ((i = o),
      (o = Go(t, r)),
      o != null && n.unshift($o(t, o, i)),
      (o = Go(t, e)),
      o != null && n.push($o(t, o, i))),
      (t = t.return);
  }
  return n;
}
function wi(t) {
  if (t === null) return null;
  do t = t.return;
  while (t && t.tag !== 5);
  return t || null;
}
function Ah(t, e, r, n, i) {
  for (var o = e._reactName, s = []; r !== null && r !== n; ) {
    var l = r,
      a = l.alternate,
      f = l.stateNode;
    if (a !== null && a === n) break;
    l.tag === 5 &&
      f !== null &&
      ((l = f),
      i
        ? ((a = Go(r, o)), a != null && s.unshift($o(r, a, l)))
        : i || ((a = Go(r, o)), a != null && s.push($o(r, a, l)))),
      (r = r.return);
  }
  s.length !== 0 && t.push({ event: e, listeners: s });
}
var k1 = /\r\n?/g,
  S1 = /\u0000|\uFFFD/g;
function Eh(t) {
  return (typeof t == "string" ? t : "" + t)
    .replace(
      k1,
      `
`
    )
    .replace(S1, "");
}
function Rs(t, e, r) {
  if (((e = Eh(e)), Eh(t) !== e && r)) throw Error(U(425));
}
function yl() {}
var Ku = null,
  Vu = null;
function Ju(t, e) {
  return (
    t === "textarea" ||
    t === "noscript" ||
    typeof e.children == "string" ||
    typeof e.children == "number" ||
    (typeof e.dangerouslySetInnerHTML == "object" &&
      e.dangerouslySetInnerHTML !== null &&
      e.dangerouslySetInnerHTML.__html != null)
  );
}
var $u = typeof setTimeout == "function" ? setTimeout : void 0,
  N1 = typeof clearTimeout == "function" ? clearTimeout : void 0,
  bh = typeof Promise == "function" ? Promise : void 0,
  C1 =
    typeof queueMicrotask == "function"
      ? queueMicrotask
      : typeof bh < "u"
      ? function (t) {
          return bh.resolve(null).then(t).catch(P1);
        }
      : $u;
function P1(t) {
  setTimeout(function () {
    throw t;
  });
}
function $a(t, e) {
  var r = e,
    n = 0;
  do {
    var i = r.nextSibling;
    if ((t.removeChild(r), i && i.nodeType === 8))
      if (((r = i.data), r === "/$")) {
        if (n === 0) {
          t.removeChild(i), Qo(e);
          return;
        }
        n--;
      } else (r !== "$" && r !== "$?" && r !== "$!") || n++;
    r = i;
  } while (r);
  Qo(e);
}
function _n(t) {
  for (; t != null; t = t.nextSibling) {
    var e = t.nodeType;
    if (e === 1 || e === 3) break;
    if (e === 8) {
      if (((e = t.data), e === "$" || e === "$!" || e === "$?")) break;
      if (e === "/$") return null;
    }
  }
  return t;
}
function _h(t) {
  t = t.previousSibling;
  for (var e = 0; t; ) {
    if (t.nodeType === 8) {
      var r = t.data;
      if (r === "$" || r === "$!" || r === "$?") {
        if (e === 0) return t;
        e--;
      } else r === "/$" && e++;
    }
    t = t.previousSibling;
  }
  return null;
}
var oo = Math.random().toString(36).slice(2),
  Rr = "__reactFiber$" + oo,
  Yo = "__reactProps$" + oo,
  $r = "__reactContainer$" + oo,
  Yu = "__reactEvents$" + oo,
  M1 = "__reactListeners$" + oo,
  R1 = "__reactHandles$" + oo;
function ti(t) {
  var e = t[Rr];
  if (e) return e;
  for (var r = t.parentNode; r; ) {
    if ((e = r[$r] || r[Rr])) {
      if (
        ((r = e.alternate),
        e.child !== null || (r !== null && r.child !== null))
      )
        for (t = _h(t); t !== null; ) {
          if ((r = t[Rr])) return r;
          t = _h(t);
        }
      return e;
    }
    (t = r), (r = t.parentNode);
  }
  return null;
}
function ms(t) {
  return (
    (t = t[Rr] || t[$r]),
    !t || (t.tag !== 5 && t.tag !== 6 && t.tag !== 13 && t.tag !== 3) ? null : t
  );
}
function Pi(t) {
  if (t.tag === 5 || t.tag === 6) return t.stateNode;
  throw Error(U(33));
}
function Yl(t) {
  return t[Yo] || null;
}
var Xu = [],
  Mi = -1;
function On(t) {
  return { current: t };
}
function $e(t) {
  0 > Mi || ((t.current = Xu[Mi]), (Xu[Mi] = null), Mi--);
}
function ve(t, e) {
  Mi++, (Xu[Mi] = t.current), (t.current = e);
}
var Rn = {},
  Ct = On(Rn),
  Ft = On(!1),
  li = Rn;
function Ki(t, e) {
  var r = t.type.contextTypes;
  if (!r) return Rn;
  var n = t.stateNode;
  if (n && n.__reactInternalMemoizedUnmaskedChildContext === e)
    return n.__reactInternalMemoizedMaskedChildContext;
  var i = {},
    o;
  for (o in r) i[o] = e[o];
  return (
    n &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = e),
      (t.__reactInternalMemoizedMaskedChildContext = i)),
    i
  );
}
function jt(t) {
  return (t = t.childContextTypes), t != null;
}
function xl() {
  $e(Ft), $e(Ct);
}
function kh(t, e, r) {
  if (Ct.current !== Rn) throw Error(U(168));
  ve(Ct, e), ve(Ft, r);
}
function hp(t, e, r) {
  var n = t.stateNode;
  if (((e = e.childContextTypes), typeof n.getChildContext != "function"))
    return r;
  n = n.getChildContext();
  for (var i in n) if (!(i in e)) throw Error(U(108, mg(t) || "Unknown", i));
  return rt({}, r, n);
}
function wl(t) {
  return (
    (t =
      ((t = t.stateNode) && t.__reactInternalMemoizedMergedChildContext) || Rn),
    (li = Ct.current),
    ve(Ct, t),
    ve(Ft, Ft.current),
    !0
  );
}
function Sh(t, e, r) {
  var n = t.stateNode;
  if (!n) throw Error(U(169));
  r
    ? ((t = hp(t, e, li)),
      (n.__reactInternalMemoizedMergedChildContext = t),
      $e(Ft),
      $e(Ct),
      ve(Ct, t))
    : $e(Ft),
    ve(Ft, r);
}
var qr = null,
  Xl = !1,
  Ya = !1;
function dp(t) {
  qr === null ? (qr = [t]) : qr.push(t);
}
function I1(t) {
  (Xl = !0), dp(t);
}
function Ln() {
  if (!Ya && qr !== null) {
    Ya = !0;
    var t = 0,
      e = de;
    try {
      var r = qr;
      for (de = 1; t < r.length; t++) {
        var n = r[t];
        do n = n(!0);
        while (n !== null);
      }
      (qr = null), (Xl = !1);
    } catch (i) {
      throw (qr !== null && (qr = qr.slice(t + 1)), F0(Qf, Ln), i);
    } finally {
      (de = e), (Ya = !1);
    }
  }
  return null;
}
var Ri = [],
  Ii = 0,
  Al = null,
  El = 0,
  er = [],
  tr = 0,
  ai = null,
  Qr = 1,
  Kr = "";
function Zn(t, e) {
  (Ri[Ii++] = El), (Ri[Ii++] = Al), (Al = t), (El = e);
}
function pp(t, e, r) {
  (er[tr++] = Qr), (er[tr++] = Kr), (er[tr++] = ai), (ai = t);
  var n = Qr;
  t = Kr;
  var i = 32 - wr(n) - 1;
  (n &= ~(1 << i)), (r += 1);
  var o = 32 - wr(e) + i;
  if (30 < o) {
    var s = i - (i % 5);
    (o = (n & ((1 << s) - 1)).toString(32)),
      (n >>= s),
      (i -= s),
      (Qr = (1 << (32 - wr(e) + i)) | (r << i) | n),
      (Kr = o + t);
  } else (Qr = (1 << o) | (r << i) | n), (Kr = t);
}
function tc(t) {
  t.return !== null && (Zn(t, 1), pp(t, 1, 0));
}
function rc(t) {
  for (; t === Al; )
    (Al = Ri[--Ii]), (Ri[Ii] = null), (El = Ri[--Ii]), (Ri[Ii] = null);
  for (; t === ai; )
    (ai = er[--tr]),
      (er[tr] = null),
      (Kr = er[--tr]),
      (er[tr] = null),
      (Qr = er[--tr]),
      (er[tr] = null);
}
var Vt = null,
  Kt = null,
  Ye = !1,
  gr = null;
function mp(t, e) {
  var r = rr(5, null, null, 0);
  (r.elementType = "DELETED"),
    (r.stateNode = e),
    (r.return = t),
    (e = t.deletions),
    e === null ? ((t.deletions = [r]), (t.flags |= 16)) : e.push(r);
}
function Nh(t, e) {
  switch (t.tag) {
    case 5:
      var r = t.type;
      return (
        (e =
          e.nodeType !== 1 || r.toLowerCase() !== e.nodeName.toLowerCase()
            ? null
            : e),
        e !== null
          ? ((t.stateNode = e), (Vt = t), (Kt = _n(e.firstChild)), !0)
          : !1
      );
    case 6:
      return (
        (e = t.pendingProps === "" || e.nodeType !== 3 ? null : e),
        e !== null ? ((t.stateNode = e), (Vt = t), (Kt = null), !0) : !1
      );
    case 13:
      return (
        (e = e.nodeType !== 8 ? null : e),
        e !== null
          ? ((r = ai !== null ? { id: Qr, overflow: Kr } : null),
            (t.memoizedState = {
              dehydrated: e,
              treeContext: r,
              retryLane: 1073741824,
            }),
            (r = rr(18, null, null, 0)),
            (r.stateNode = e),
            (r.return = t),
            (t.child = r),
            (Vt = t),
            (Kt = null),
            !0)
          : !1
      );
    default:
      return !1;
  }
}
function Zu(t) {
  return (t.mode & 1) !== 0 && (t.flags & 128) === 0;
}
function ef(t) {
  if (Ye) {
    var e = Kt;
    if (e) {
      var r = e;
      if (!Nh(t, e)) {
        if (Zu(t)) throw Error(U(418));
        e = _n(r.nextSibling);
        var n = Vt;
        e && Nh(t, e)
          ? mp(n, r)
          : ((t.flags = (t.flags & -4097) | 2), (Ye = !1), (Vt = t));
      }
    } else {
      if (Zu(t)) throw Error(U(418));
      (t.flags = (t.flags & -4097) | 2), (Ye = !1), (Vt = t);
    }
  }
}
function Ch(t) {
  for (t = t.return; t !== null && t.tag !== 5 && t.tag !== 3 && t.tag !== 13; )
    t = t.return;
  Vt = t;
}
function Is(t) {
  if (t !== Vt) return !1;
  if (!Ye) return Ch(t), (Ye = !0), !1;
  var e;
  if (
    ((e = t.tag !== 3) &&
      !(e = t.tag !== 5) &&
      ((e = t.type),
      (e = e !== "head" && e !== "body" && !Ju(t.type, t.memoizedProps))),
    e && (e = Kt))
  ) {
    if (Zu(t)) throw (vp(), Error(U(418)));
    for (; e; ) mp(t, e), (e = _n(e.nextSibling));
  }
  if ((Ch(t), t.tag === 13)) {
    if (((t = t.memoizedState), (t = t !== null ? t.dehydrated : null), !t))
      throw Error(U(317));
    e: {
      for (t = t.nextSibling, e = 0; t; ) {
        if (t.nodeType === 8) {
          var r = t.data;
          if (r === "/$") {
            if (e === 0) {
              Kt = _n(t.nextSibling);
              break e;
            }
            e--;
          } else (r !== "$" && r !== "$!" && r !== "$?") || e++;
        }
        t = t.nextSibling;
      }
      Kt = null;
    }
  } else Kt = Vt ? _n(t.stateNode.nextSibling) : null;
  return !0;
}
function vp() {
  for (var t = Kt; t; ) t = _n(t.nextSibling);
}
function Vi() {
  (Kt = Vt = null), (Ye = !1);
}
function nc(t) {
  gr === null ? (gr = [t]) : gr.push(t);
}
var T1 = rn.ReactCurrentBatchConfig;
function pr(t, e) {
  if (t && t.defaultProps) {
    (e = rt({}, e)), (t = t.defaultProps);
    for (var r in t) e[r] === void 0 && (e[r] = t[r]);
    return e;
  }
  return e;
}
var bl = On(null),
  _l = null,
  Ti = null,
  ic = null;
function oc() {
  ic = Ti = _l = null;
}
function sc(t) {
  var e = bl.current;
  $e(bl), (t._currentValue = e);
}
function tf(t, e, r) {
  for (; t !== null; ) {
    var n = t.alternate;
    if (
      ((t.childLanes & e) !== e
        ? ((t.childLanes |= e), n !== null && (n.childLanes |= e))
        : n !== null && (n.childLanes & e) !== e && (n.childLanes |= e),
      t === r)
    )
      break;
    t = t.return;
  }
}
function zi(t, e) {
  (_l = t),
    (ic = Ti = null),
    (t = t.dependencies),
    t !== null &&
      t.firstContext !== null &&
      (t.lanes & e && (Bt = !0), (t.firstContext = null));
}
function ir(t) {
  var e = t._currentValue;
  if (ic !== t)
    if (((t = { context: t, memoizedValue: e, next: null }), Ti === null)) {
      if (_l === null) throw Error(U(308));
      (Ti = t), (_l.dependencies = { lanes: 0, firstContext: t });
    } else Ti = Ti.next = t;
  return e;
}
var ri = null;
function lc(t) {
  ri === null ? (ri = [t]) : ri.push(t);
}
function gp(t, e, r, n) {
  var i = e.interleaved;
  return (
    i === null ? ((r.next = r), lc(e)) : ((r.next = i.next), (i.next = r)),
    (e.interleaved = r),
    Yr(t, n)
  );
}
function Yr(t, e) {
  t.lanes |= e;
  var r = t.alternate;
  for (r !== null && (r.lanes |= e), r = t, t = t.return; t !== null; )
    (t.childLanes |= e),
      (r = t.alternate),
      r !== null && (r.childLanes |= e),
      (r = t),
      (t = t.return);
  return r.tag === 3 ? r.stateNode : null;
}
var pn = !1;
function ac(t) {
  t.updateQueue = {
    baseState: t.memoizedState,
    firstBaseUpdate: null,
    lastBaseUpdate: null,
    shared: { pending: null, interleaved: null, lanes: 0 },
    effects: null,
  };
}
function yp(t, e) {
  (t = t.updateQueue),
    e.updateQueue === t &&
      (e.updateQueue = {
        baseState: t.baseState,
        firstBaseUpdate: t.firstBaseUpdate,
        lastBaseUpdate: t.lastBaseUpdate,
        shared: t.shared,
        effects: t.effects,
      });
}
function Vr(t, e) {
  return {
    eventTime: t,
    lane: e,
    tag: 0,
    payload: null,
    callback: null,
    next: null,
  };
}
function kn(t, e, r) {
  var n = t.updateQueue;
  if (n === null) return null;
  if (((n = n.shared), he & 2)) {
    var i = n.pending;
    return (
      i === null ? (e.next = e) : ((e.next = i.next), (i.next = e)),
      (n.pending = e),
      Yr(t, r)
    );
  }
  return (
    (i = n.interleaved),
    i === null ? ((e.next = e), lc(n)) : ((e.next = i.next), (i.next = e)),
    (n.interleaved = e),
    Yr(t, r)
  );
}
function Js(t, e, r) {
  if (
    ((e = e.updateQueue), e !== null && ((e = e.shared), (r & 4194240) !== 0))
  ) {
    var n = e.lanes;
    (n &= t.pendingLanes), (r |= n), (e.lanes = r), Kf(t, r);
  }
}
function Ph(t, e) {
  var r = t.updateQueue,
    n = t.alternate;
  if (n !== null && ((n = n.updateQueue), r === n)) {
    var i = null,
      o = null;
    if (((r = r.firstBaseUpdate), r !== null)) {
      do {
        var s = {
          eventTime: r.eventTime,
          lane: r.lane,
          tag: r.tag,
          payload: r.payload,
          callback: r.callback,
          next: null,
        };
        o === null ? (i = o = s) : (o = o.next = s), (r = r.next);
      } while (r !== null);
      o === null ? (i = o = e) : (o = o.next = e);
    } else i = o = e;
    (r = {
      baseState: n.baseState,
      firstBaseUpdate: i,
      lastBaseUpdate: o,
      shared: n.shared,
      effects: n.effects,
    }),
      (t.updateQueue = r);
    return;
  }
  (t = r.lastBaseUpdate),
    t === null ? (r.firstBaseUpdate = e) : (t.next = e),
    (r.lastBaseUpdate = e);
}
function kl(t, e, r, n) {
  var i = t.updateQueue;
  pn = !1;
  var o = i.firstBaseUpdate,
    s = i.lastBaseUpdate,
    l = i.shared.pending;
  if (l !== null) {
    i.shared.pending = null;
    var a = l,
      f = a.next;
    (a.next = null), s === null ? (o = f) : (s.next = f), (s = a);
    var h = t.alternate;
    h !== null &&
      ((h = h.updateQueue),
      (l = h.lastBaseUpdate),
      l !== s &&
        (l === null ? (h.firstBaseUpdate = f) : (l.next = f),
        (h.lastBaseUpdate = a)));
  }
  if (o !== null) {
    var p = i.baseState;
    (s = 0), (h = f = a = null), (l = o);
    do {
      var y = l.lane,
        S = l.eventTime;
      if ((n & y) === y) {
        h !== null &&
          (h = h.next =
            {
              eventTime: S,
              lane: 0,
              tag: l.tag,
              payload: l.payload,
              callback: l.callback,
              next: null,
            });
        e: {
          var P = t,
            M = l;
          switch (((y = e), (S = r), M.tag)) {
            case 1:
              if (((P = M.payload), typeof P == "function")) {
                p = P.call(S, p, y);
                break e;
              }
              p = P;
              break e;
            case 3:
              P.flags = (P.flags & -65537) | 128;
            case 0:
              if (
                ((P = M.payload),
                (y = typeof P == "function" ? P.call(S, p, y) : P),
                y == null)
              )
                break e;
              p = rt({}, p, y);
              break e;
            case 2:
              pn = !0;
          }
        }
        l.callback !== null &&
          l.lane !== 0 &&
          ((t.flags |= 64),
          (y = i.effects),
          y === null ? (i.effects = [l]) : y.push(l));
      } else
        (S = {
          eventTime: S,
          lane: y,
          tag: l.tag,
          payload: l.payload,
          callback: l.callback,
          next: null,
        }),
          h === null ? ((f = h = S), (a = p)) : (h = h.next = S),
          (s |= y);
      if (((l = l.next), l === null)) {
        if (((l = i.shared.pending), l === null)) break;
        (y = l),
          (l = y.next),
          (y.next = null),
          (i.lastBaseUpdate = y),
          (i.shared.pending = null);
      }
    } while (1);
    if (
      (h === null && (a = p),
      (i.baseState = a),
      (i.firstBaseUpdate = f),
      (i.lastBaseUpdate = h),
      (e = i.shared.interleaved),
      e !== null)
    ) {
      i = e;
      do (s |= i.lane), (i = i.next);
      while (i !== e);
    } else o === null && (i.shared.lanes = 0);
    (fi |= s), (t.lanes = s), (t.memoizedState = p);
  }
}
function Mh(t, e, r) {
  if (((t = e.effects), (e.effects = null), t !== null))
    for (e = 0; e < t.length; e++) {
      var n = t[e],
        i = n.callback;
      if (i !== null) {
        if (((n.callback = null), (n = r), typeof i != "function"))
          throw Error(U(191, i));
        i.call(n);
      }
    }
}
var xp = new g0.Component().refs;
function rf(t, e, r, n) {
  (e = t.memoizedState),
    (r = r(n, e)),
    (r = r == null ? e : rt({}, e, r)),
    (t.memoizedState = r),
    t.lanes === 0 && (t.updateQueue.baseState = r);
}
var Zl = {
  isMounted: function (t) {
    return (t = t._reactInternals) ? vi(t) === t : !1;
  },
  enqueueSetState: function (t, e, r) {
    t = t._reactInternals;
    var n = Rt(),
      i = Nn(t),
      o = Vr(n, i);
    (o.payload = e),
      r != null && (o.callback = r),
      (e = kn(t, o, i)),
      e !== null && (Ar(e, t, i, n), Js(e, t, i));
  },
  enqueueReplaceState: function (t, e, r) {
    t = t._reactInternals;
    var n = Rt(),
      i = Nn(t),
      o = Vr(n, i);
    (o.tag = 1),
      (o.payload = e),
      r != null && (o.callback = r),
      (e = kn(t, o, i)),
      e !== null && (Ar(e, t, i, n), Js(e, t, i));
  },
  enqueueForceUpdate: function (t, e) {
    t = t._reactInternals;
    var r = Rt(),
      n = Nn(t),
      i = Vr(r, n);
    (i.tag = 2),
      e != null && (i.callback = e),
      (e = kn(t, i, n)),
      e !== null && (Ar(e, t, n, r), Js(e, t, n));
  },
};
function Rh(t, e, r, n, i, o, s) {
  return (
    (t = t.stateNode),
    typeof t.shouldComponentUpdate == "function"
      ? t.shouldComponentUpdate(n, o, s)
      : e.prototype && e.prototype.isPureReactComponent
      ? !Vo(r, n) || !Vo(i, o)
      : !0
  );
}
function wp(t, e, r) {
  var n = !1,
    i = Rn,
    o = e.contextType;
  return (
    typeof o == "object" && o !== null
      ? (o = ir(o))
      : ((i = jt(e) ? li : Ct.current),
        (n = e.contextTypes),
        (o = (n = n != null) ? Ki(t, i) : Rn)),
    (e = new e(r, o)),
    (t.memoizedState = e.state !== null && e.state !== void 0 ? e.state : null),
    (e.updater = Zl),
    (t.stateNode = e),
    (e._reactInternals = t),
    n &&
      ((t = t.stateNode),
      (t.__reactInternalMemoizedUnmaskedChildContext = i),
      (t.__reactInternalMemoizedMaskedChildContext = o)),
    e
  );
}
function Ih(t, e, r, n) {
  (t = e.state),
    typeof e.componentWillReceiveProps == "function" &&
      e.componentWillReceiveProps(r, n),
    typeof e.UNSAFE_componentWillReceiveProps == "function" &&
      e.UNSAFE_componentWillReceiveProps(r, n),
    e.state !== t && Zl.enqueueReplaceState(e, e.state, null);
}
function nf(t, e, r, n) {
  var i = t.stateNode;
  (i.props = r), (i.state = t.memoizedState), (i.refs = xp), ac(t);
  var o = e.contextType;
  typeof o == "object" && o !== null
    ? (i.context = ir(o))
    : ((o = jt(e) ? li : Ct.current), (i.context = Ki(t, o))),
    (i.state = t.memoizedState),
    (o = e.getDerivedStateFromProps),
    typeof o == "function" && (rf(t, e, o, r), (i.state = t.memoizedState)),
    typeof e.getDerivedStateFromProps == "function" ||
      typeof i.getSnapshotBeforeUpdate == "function" ||
      (typeof i.UNSAFE_componentWillMount != "function" &&
        typeof i.componentWillMount != "function") ||
      ((e = i.state),
      typeof i.componentWillMount == "function" && i.componentWillMount(),
      typeof i.UNSAFE_componentWillMount == "function" &&
        i.UNSAFE_componentWillMount(),
      e !== i.state && Zl.enqueueReplaceState(i, i.state, null),
      kl(t, r, i, n),
      (i.state = t.memoizedState)),
    typeof i.componentDidMount == "function" && (t.flags |= 4194308);
}
function go(t, e, r) {
  if (
    ((t = r.ref), t !== null && typeof t != "function" && typeof t != "object")
  ) {
    if (r._owner) {
      if (((r = r._owner), r)) {
        if (r.tag !== 1) throw Error(U(309));
        var n = r.stateNode;
      }
      if (!n) throw Error(U(147, t));
      var i = n,
        o = "" + t;
      return e !== null &&
        e.ref !== null &&
        typeof e.ref == "function" &&
        e.ref._stringRef === o
        ? e.ref
        : ((e = function (s) {
            var l = i.refs;
            l === xp && (l = i.refs = {}),
              s === null ? delete l[o] : (l[o] = s);
          }),
          (e._stringRef = o),
          e);
    }
    if (typeof t != "string") throw Error(U(284));
    if (!r._owner) throw Error(U(290, t));
  }
  return t;
}
function Ts(t, e) {
  throw (
    ((t = Object.prototype.toString.call(e)),
    Error(
      U(
        31,
        t === "[object Object]"
          ? "object with keys {" + Object.keys(e).join(", ") + "}"
          : t
      )
    ))
  );
}
function Th(t) {
  var e = t._init;
  return e(t._payload);
}
function Ap(t) {
  function e(w, x) {
    if (t) {
      var N = w.deletions;
      N === null ? ((w.deletions = [x]), (w.flags |= 16)) : N.push(x);
    }
  }
  function r(w, x) {
    if (!t) return null;
    for (; x !== null; ) e(w, x), (x = x.sibling);
    return null;
  }
  function n(w, x) {
    for (w = new Map(); x !== null; )
      x.key !== null ? w.set(x.key, x) : w.set(x.index, x), (x = x.sibling);
    return w;
  }
  function i(w, x) {
    return (w = Cn(w, x)), (w.index = 0), (w.sibling = null), w;
  }
  function o(w, x, N) {
    return (
      (w.index = N),
      t
        ? ((N = w.alternate),
          N !== null
            ? ((N = N.index), N < x ? ((w.flags |= 2), x) : N)
            : ((w.flags |= 2), x))
        : ((w.flags |= 1048576), x)
    );
  }
  function s(w) {
    return t && w.alternate === null && (w.flags |= 2), w;
  }
  function l(w, x, N, T) {
    return x === null || x.tag !== 6
      ? ((x = iu(N, w.mode, T)), (x.return = w), x)
      : ((x = i(x, N)), (x.return = w), x);
  }
  function a(w, x, N, T) {
    var L = N.type;
    return L === ki
      ? h(w, x, N.props.children, T, N.key)
      : x !== null &&
        (x.elementType === L ||
          (typeof L == "object" &&
            L !== null &&
            L.$$typeof === dn &&
            Th(L) === x.type))
      ? ((T = i(x, N.props)), (T.ref = go(w, x, N)), (T.return = w), T)
      : ((T = tl(N.type, N.key, N.props, null, w.mode, T)),
        (T.ref = go(w, x, N)),
        (T.return = w),
        T);
  }
  function f(w, x, N, T) {
    return x === null ||
      x.tag !== 4 ||
      x.stateNode.containerInfo !== N.containerInfo ||
      x.stateNode.implementation !== N.implementation
      ? ((x = ou(N, w.mode, T)), (x.return = w), x)
      : ((x = i(x, N.children || [])), (x.return = w), x);
  }
  function h(w, x, N, T, L) {
    return x === null || x.tag !== 7
      ? ((x = si(N, w.mode, T, L)), (x.return = w), x)
      : ((x = i(x, N)), (x.return = w), x);
  }
  function p(w, x, N) {
    if ((typeof x == "string" && x !== "") || typeof x == "number")
      return (x = iu("" + x, w.mode, N)), (x.return = w), x;
    if (typeof x == "object" && x !== null) {
      switch (x.$$typeof) {
        case Es:
          return (
            (N = tl(x.type, x.key, x.props, null, w.mode, N)),
            (N.ref = go(w, null, x)),
            (N.return = w),
            N
          );
        case _i:
          return (x = ou(x, w.mode, N)), (x.return = w), x;
        case dn:
          var T = x._init;
          return p(w, T(x._payload), N);
      }
      if (So(x) || co(x))
        return (x = si(x, w.mode, N, null)), (x.return = w), x;
      Ts(w, x);
    }
    return null;
  }
  function y(w, x, N, T) {
    var L = x !== null ? x.key : null;
    if ((typeof N == "string" && N !== "") || typeof N == "number")
      return L !== null ? null : l(w, x, "" + N, T);
    if (typeof N == "object" && N !== null) {
      switch (N.$$typeof) {
        case Es:
          return N.key === L ? a(w, x, N, T) : null;
        case _i:
          return N.key === L ? f(w, x, N, T) : null;
        case dn:
          return (L = N._init), y(w, x, L(N._payload), T);
      }
      if (So(N) || co(N)) return L !== null ? null : h(w, x, N, T, null);
      Ts(w, N);
    }
    return null;
  }
  function S(w, x, N, T, L) {
    if ((typeof T == "string" && T !== "") || typeof T == "number")
      return (w = w.get(N) || null), l(x, w, "" + T, L);
    if (typeof T == "object" && T !== null) {
      switch (T.$$typeof) {
        case Es:
          return (w = w.get(T.key === null ? N : T.key) || null), a(x, w, T, L);
        case _i:
          return (w = w.get(T.key === null ? N : T.key) || null), f(x, w, T, L);
        case dn:
          var j = T._init;
          return S(w, x, N, j(T._payload), L);
      }
      if (So(T) || co(T)) return (w = w.get(N) || null), h(x, w, T, L, null);
      Ts(x, T);
    }
    return null;
  }
  function P(w, x, N, T) {
    for (
      var L = null, j = null, H = x, G = (x = 0), ee = null;
      H !== null && G < N.length;
      G++
    ) {
      H.index > G ? ((ee = H), (H = null)) : (ee = H.sibling);
      var Z = y(w, H, N[G], T);
      if (Z === null) {
        H === null && (H = ee);
        break;
      }
      t && H && Z.alternate === null && e(w, H),
        (x = o(Z, x, G)),
        j === null ? (L = Z) : (j.sibling = Z),
        (j = Z),
        (H = ee);
    }
    if (G === N.length) return r(w, H), Ye && Zn(w, G), L;
    if (H === null) {
      for (; G < N.length; G++)
        (H = p(w, N[G], T)),
          H !== null &&
            ((x = o(H, x, G)), j === null ? (L = H) : (j.sibling = H), (j = H));
      return Ye && Zn(w, G), L;
    }
    for (H = n(w, H); G < N.length; G++)
      (ee = S(H, w, G, N[G], T)),
        ee !== null &&
          (t && ee.alternate !== null && H.delete(ee.key === null ? G : ee.key),
          (x = o(ee, x, G)),
          j === null ? (L = ee) : (j.sibling = ee),
          (j = ee));
    return (
      t &&
        H.forEach(function (se) {
          return e(w, se);
        }),
      Ye && Zn(w, G),
      L
    );
  }
  function M(w, x, N, T) {
    var L = co(N);
    if (typeof L != "function") throw Error(U(150));
    if (((N = L.call(N)), N == null)) throw Error(U(151));
    for (
      var j = (L = null), H = x, G = (x = 0), ee = null, Z = N.next();
      H !== null && !Z.done;
      G++, Z = N.next()
    ) {
      H.index > G ? ((ee = H), (H = null)) : (ee = H.sibling);
      var se = y(w, H, Z.value, T);
      if (se === null) {
        H === null && (H = ee);
        break;
      }
      t && H && se.alternate === null && e(w, H),
        (x = o(se, x, G)),
        j === null ? (L = se) : (j.sibling = se),
        (j = se),
        (H = ee);
    }
    if (Z.done) return r(w, H), Ye && Zn(w, G), L;
    if (H === null) {
      for (; !Z.done; G++, Z = N.next())
        (Z = p(w, Z.value, T)),
          Z !== null &&
            ((x = o(Z, x, G)), j === null ? (L = Z) : (j.sibling = Z), (j = Z));
      return Ye && Zn(w, G), L;
    }
    for (H = n(w, H); !Z.done; G++, Z = N.next())
      (Z = S(H, w, G, Z.value, T)),
        Z !== null &&
          (t && Z.alternate !== null && H.delete(Z.key === null ? G : Z.key),
          (x = o(Z, x, G)),
          j === null ? (L = Z) : (j.sibling = Z),
          (j = Z));
    return (
      t &&
        H.forEach(function (ht) {
          return e(w, ht);
        }),
      Ye && Zn(w, G),
      L
    );
  }
  function I(w, x, N, T) {
    if (
      (typeof N == "object" &&
        N !== null &&
        N.type === ki &&
        N.key === null &&
        (N = N.props.children),
      typeof N == "object" && N !== null)
    ) {
      switch (N.$$typeof) {
        case Es:
          e: {
            for (var L = N.key, j = x; j !== null; ) {
              if (j.key === L) {
                if (((L = N.type), L === ki)) {
                  if (j.tag === 7) {
                    r(w, j.sibling),
                      (x = i(j, N.props.children)),
                      (x.return = w),
                      (w = x);
                    break e;
                  }
                } else if (
                  j.elementType === L ||
                  (typeof L == "object" &&
                    L !== null &&
                    L.$$typeof === dn &&
                    Th(L) === j.type)
                ) {
                  r(w, j.sibling),
                    (x = i(j, N.props)),
                    (x.ref = go(w, j, N)),
                    (x.return = w),
                    (w = x);
                  break e;
                }
                r(w, j);
                break;
              } else e(w, j);
              j = j.sibling;
            }
            N.type === ki
              ? ((x = si(N.props.children, w.mode, T, N.key)),
                (x.return = w),
                (w = x))
              : ((T = tl(N.type, N.key, N.props, null, w.mode, T)),
                (T.ref = go(w, x, N)),
                (T.return = w),
                (w = T));
          }
          return s(w);
        case _i:
          e: {
            for (j = N.key; x !== null; ) {
              if (x.key === j)
                if (
                  x.tag === 4 &&
                  x.stateNode.containerInfo === N.containerInfo &&
                  x.stateNode.implementation === N.implementation
                ) {
                  r(w, x.sibling),
                    (x = i(x, N.children || [])),
                    (x.return = w),
                    (w = x);
                  break e;
                } else {
                  r(w, x);
                  break;
                }
              else e(w, x);
              x = x.sibling;
            }
            (x = ou(N, w.mode, T)), (x.return = w), (w = x);
          }
          return s(w);
        case dn:
          return (j = N._init), I(w, x, j(N._payload), T);
      }
      if (So(N)) return P(w, x, N, T);
      if (co(N)) return M(w, x, N, T);
      Ts(w, N);
    }
    return (typeof N == "string" && N !== "") || typeof N == "number"
      ? ((N = "" + N),
        x !== null && x.tag === 6
          ? (r(w, x.sibling), (x = i(x, N)), (x.return = w), (w = x))
          : (r(w, x), (x = iu(N, w.mode, T)), (x.return = w), (w = x)),
        s(w))
      : r(w, x);
  }
  return I;
}
var Ji = Ap(!0),
  Ep = Ap(!1),
  vs = {},
  Tr = On(vs),
  Xo = On(vs),
  Zo = On(vs);
function ni(t) {
  if (t === vs) throw Error(U(174));
  return t;
}
function uc(t, e) {
  switch ((ve(Zo, e), ve(Xo, t), ve(Tr, vs), (t = e.nodeType), t)) {
    case 9:
    case 11:
      e = (e = e.documentElement) ? e.namespaceURI : Lu(null, "");
      break;
    default:
      (t = t === 8 ? e.parentNode : e),
        (e = t.namespaceURI || null),
        (t = t.tagName),
        (e = Lu(e, t));
  }
  $e(Tr), ve(Tr, e);
}
function $i() {
  $e(Tr), $e(Xo), $e(Zo);
}
function bp(t) {
  ni(Zo.current);
  var e = ni(Tr.current),
    r = Lu(e, t.type);
  e !== r && (ve(Xo, t), ve(Tr, r));
}
function fc(t) {
  Xo.current === t && ($e(Tr), $e(Xo));
}
var et = On(0);
function Sl(t) {
  for (var e = t; e !== null; ) {
    if (e.tag === 13) {
      var r = e.memoizedState;
      if (
        r !== null &&
        ((r = r.dehydrated), r === null || r.data === "$?" || r.data === "$!")
      )
        return e;
    } else if (e.tag === 19 && e.memoizedProps.revealOrder !== void 0) {
      if (e.flags & 128) return e;
    } else if (e.child !== null) {
      (e.child.return = e), (e = e.child);
      continue;
    }
    if (e === t) break;
    for (; e.sibling === null; ) {
      if (e.return === null || e.return === t) return null;
      e = e.return;
    }
    (e.sibling.return = e.return), (e = e.sibling);
  }
  return null;
}
var Xa = [];
function cc() {
  for (var t = 0; t < Xa.length; t++)
    Xa[t]._workInProgressVersionPrimary = null;
  Xa.length = 0;
}
var $s = rn.ReactCurrentDispatcher,
  Za = rn.ReactCurrentBatchConfig,
  ui = 0,
  tt = null,
  ft = null,
  pt = null,
  Nl = !1,
  Bo = !1,
  es = 0,
  O1 = 0;
function bt() {
  throw Error(U(321));
}
function hc(t, e) {
  if (e === null) return !1;
  for (var r = 0; r < e.length && r < t.length; r++)
    if (!Er(t[r], e[r])) return !1;
  return !0;
}
function dc(t, e, r, n, i, o) {
  if (
    ((ui = o),
    (tt = e),
    (e.memoizedState = null),
    (e.updateQueue = null),
    (e.lanes = 0),
    ($s.current = t === null || t.memoizedState === null ? F1 : j1),
    (t = r(n, i)),
    Bo)
  ) {
    o = 0;
    do {
      if (((Bo = !1), (es = 0), 25 <= o)) throw Error(U(301));
      (o += 1),
        (pt = ft = null),
        (e.updateQueue = null),
        ($s.current = U1),
        (t = r(n, i));
    } while (Bo);
  }
  if (
    (($s.current = Cl),
    (e = ft !== null && ft.next !== null),
    (ui = 0),
    (pt = ft = tt = null),
    (Nl = !1),
    e)
  )
    throw Error(U(300));
  return t;
}
function pc() {
  var t = es !== 0;
  return (es = 0), t;
}
function Nr() {
  var t = {
    memoizedState: null,
    baseState: null,
    baseQueue: null,
    queue: null,
    next: null,
  };
  return pt === null ? (tt.memoizedState = pt = t) : (pt = pt.next = t), pt;
}
function or() {
  if (ft === null) {
    var t = tt.alternate;
    t = t !== null ? t.memoizedState : null;
  } else t = ft.next;
  var e = pt === null ? tt.memoizedState : pt.next;
  if (e !== null) (pt = e), (ft = t);
  else {
    if (t === null) throw Error(U(310));
    (ft = t),
      (t = {
        memoizedState: ft.memoizedState,
        baseState: ft.baseState,
        baseQueue: ft.baseQueue,
        queue: ft.queue,
        next: null,
      }),
      pt === null ? (tt.memoizedState = pt = t) : (pt = pt.next = t);
  }
  return pt;
}
function ts(t, e) {
  return typeof e == "function" ? e(t) : e;
}
function eu(t) {
  var e = or(),
    r = e.queue;
  if (r === null) throw Error(U(311));
  r.lastRenderedReducer = t;
  var n = ft,
    i = n.baseQueue,
    o = r.pending;
  if (o !== null) {
    if (i !== null) {
      var s = i.next;
      (i.next = o.next), (o.next = s);
    }
    (n.baseQueue = i = o), (r.pending = null);
  }
  if (i !== null) {
    (o = i.next), (n = n.baseState);
    var l = (s = null),
      a = null,
      f = o;
    do {
      var h = f.lane;
      if ((ui & h) === h)
        a !== null &&
          (a = a.next =
            {
              lane: 0,
              action: f.action,
              hasEagerState: f.hasEagerState,
              eagerState: f.eagerState,
              next: null,
            }),
          (n = f.hasEagerState ? f.eagerState : t(n, f.action));
      else {
        var p = {
          lane: h,
          action: f.action,
          hasEagerState: f.hasEagerState,
          eagerState: f.eagerState,
          next: null,
        };
        a === null ? ((l = a = p), (s = n)) : (a = a.next = p),
          (tt.lanes |= h),
          (fi |= h);
      }
      f = f.next;
    } while (f !== null && f !== o);
    a === null ? (s = n) : (a.next = l),
      Er(n, e.memoizedState) || (Bt = !0),
      (e.memoizedState = n),
      (e.baseState = s),
      (e.baseQueue = a),
      (r.lastRenderedState = n);
  }
  if (((t = r.interleaved), t !== null)) {
    i = t;
    do (o = i.lane), (tt.lanes |= o), (fi |= o), (i = i.next);
    while (i !== t);
  } else i === null && (r.lanes = 0);
  return [e.memoizedState, r.dispatch];
}
function tu(t) {
  var e = or(),
    r = e.queue;
  if (r === null) throw Error(U(311));
  r.lastRenderedReducer = t;
  var n = r.dispatch,
    i = r.pending,
    o = e.memoizedState;
  if (i !== null) {
    r.pending = null;
    var s = (i = i.next);
    do (o = t(o, s.action)), (s = s.next);
    while (s !== i);
    Er(o, e.memoizedState) || (Bt = !0),
      (e.memoizedState = o),
      e.baseQueue === null && (e.baseState = o),
      (r.lastRenderedState = o);
  }
  return [o, n];
}
function _p() {}
function kp(t, e) {
  var r = tt,
    n = or(),
    i = e(),
    o = !Er(n.memoizedState, i);
  if (
    (o && ((n.memoizedState = i), (Bt = !0)),
    (n = n.queue),
    mc(Cp.bind(null, r, n, t), [t]),
    n.getSnapshot !== e || o || (pt !== null && pt.memoizedState.tag & 1))
  ) {
    if (
      ((r.flags |= 2048),
      rs(9, Np.bind(null, r, n, i, e), void 0, null),
      vt === null)
    )
      throw Error(U(349));
    ui & 30 || Sp(r, e, i);
  }
  return i;
}
function Sp(t, e, r) {
  (t.flags |= 16384),
    (t = { getSnapshot: e, value: r }),
    (e = tt.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (tt.updateQueue = e),
        (e.stores = [t]))
      : ((r = e.stores), r === null ? (e.stores = [t]) : r.push(t));
}
function Np(t, e, r, n) {
  (e.value = r), (e.getSnapshot = n), Pp(e) && Mp(t);
}
function Cp(t, e, r) {
  return r(function () {
    Pp(e) && Mp(t);
  });
}
function Pp(t) {
  var e = t.getSnapshot;
  t = t.value;
  try {
    var r = e();
    return !Er(t, r);
  } catch {
    return !0;
  }
}
function Mp(t) {
  var e = Yr(t, 1);
  e !== null && Ar(e, t, 1, -1);
}
function Oh(t) {
  var e = Nr();
  return (
    typeof t == "function" && (t = t()),
    (e.memoizedState = e.baseState = t),
    (t = {
      pending: null,
      interleaved: null,
      lanes: 0,
      dispatch: null,
      lastRenderedReducer: ts,
      lastRenderedState: t,
    }),
    (e.queue = t),
    (t = t.dispatch = D1.bind(null, tt, t)),
    [e.memoizedState, t]
  );
}
function rs(t, e, r, n) {
  return (
    (t = { tag: t, create: e, destroy: r, deps: n, next: null }),
    (e = tt.updateQueue),
    e === null
      ? ((e = { lastEffect: null, stores: null }),
        (tt.updateQueue = e),
        (e.lastEffect = t.next = t))
      : ((r = e.lastEffect),
        r === null
          ? (e.lastEffect = t.next = t)
          : ((n = r.next), (r.next = t), (t.next = n), (e.lastEffect = t))),
    t
  );
}
function Rp() {
  return or().memoizedState;
}
function Ys(t, e, r, n) {
  var i = Nr();
  (tt.flags |= t),
    (i.memoizedState = rs(1 | e, r, void 0, n === void 0 ? null : n));
}
function ea(t, e, r, n) {
  var i = or();
  n = n === void 0 ? null : n;
  var o = void 0;
  if (ft !== null) {
    var s = ft.memoizedState;
    if (((o = s.destroy), n !== null && hc(n, s.deps))) {
      i.memoizedState = rs(e, r, o, n);
      return;
    }
  }
  (tt.flags |= t), (i.memoizedState = rs(1 | e, r, o, n));
}
function Lh(t, e) {
  return Ys(8390656, 8, t, e);
}
function mc(t, e) {
  return ea(2048, 8, t, e);
}
function Ip(t, e) {
  return ea(4, 2, t, e);
}
function Tp(t, e) {
  return ea(4, 4, t, e);
}
function Op(t, e) {
  if (typeof e == "function")
    return (
      (t = t()),
      e(t),
      function () {
        e(null);
      }
    );
  if (e != null)
    return (
      (t = t()),
      (e.current = t),
      function () {
        e.current = null;
      }
    );
}
function Lp(t, e, r) {
  return (
    (r = r != null ? r.concat([t]) : null), ea(4, 4, Op.bind(null, e, t), r)
  );
}
function vc() {}
function Bp(t, e) {
  var r = or();
  e = e === void 0 ? null : e;
  var n = r.memoizedState;
  return n !== null && e !== null && hc(e, n[1])
    ? n[0]
    : ((r.memoizedState = [t, e]), t);
}
function Dp(t, e) {
  var r = or();
  e = e === void 0 ? null : e;
  var n = r.memoizedState;
  return n !== null && e !== null && hc(e, n[1])
    ? n[0]
    : ((t = t()), (r.memoizedState = [t, e]), t);
}
function Fp(t, e, r) {
  return ui & 21
    ? (Er(r, e) || ((r = z0()), (tt.lanes |= r), (fi |= r), (t.baseState = !0)),
      e)
    : (t.baseState && ((t.baseState = !1), (Bt = !0)), (t.memoizedState = r));
}
function L1(t, e) {
  var r = de;
  (de = r !== 0 && 4 > r ? r : 4), t(!0);
  var n = Za.transition;
  Za.transition = {};
  try {
    t(!1), e();
  } finally {
    (de = r), (Za.transition = n);
  }
}
function jp() {
  return or().memoizedState;
}
function B1(t, e, r) {
  var n = Nn(t);
  if (
    ((r = {
      lane: n,
      action: r,
      hasEagerState: !1,
      eagerState: null,
      next: null,
    }),
    Up(t))
  )
    zp(e, r);
  else if (((r = gp(t, e, r, n)), r !== null)) {
    var i = Rt();
    Ar(r, t, n, i), Hp(r, e, n);
  }
}
function D1(t, e, r) {
  var n = Nn(t),
    i = { lane: n, action: r, hasEagerState: !1, eagerState: null, next: null };
  if (Up(t)) zp(e, i);
  else {
    var o = t.alternate;
    if (
      t.lanes === 0 &&
      (o === null || o.lanes === 0) &&
      ((o = e.lastRenderedReducer), o !== null)
    )
      try {
        var s = e.lastRenderedState,
          l = o(s, r);
        if (((i.hasEagerState = !0), (i.eagerState = l), Er(l, s))) {
          var a = e.interleaved;
          a === null
            ? ((i.next = i), lc(e))
            : ((i.next = a.next), (a.next = i)),
            (e.interleaved = i);
          return;
        }
      } catch {
      } finally {
      }
    (r = gp(t, e, i, n)),
      r !== null && ((i = Rt()), Ar(r, t, n, i), Hp(r, e, n));
  }
}
function Up(t) {
  var e = t.alternate;
  return t === tt || (e !== null && e === tt);
}
function zp(t, e) {
  Bo = Nl = !0;
  var r = t.pending;
  r === null ? (e.next = e) : ((e.next = r.next), (r.next = e)),
    (t.pending = e);
}
function Hp(t, e, r) {
  if (r & 4194240) {
    var n = e.lanes;
    (n &= t.pendingLanes), (r |= n), (e.lanes = r), Kf(t, r);
  }
}
var Cl = {
    readContext: ir,
    useCallback: bt,
    useContext: bt,
    useEffect: bt,
    useImperativeHandle: bt,
    useInsertionEffect: bt,
    useLayoutEffect: bt,
    useMemo: bt,
    useReducer: bt,
    useRef: bt,
    useState: bt,
    useDebugValue: bt,
    useDeferredValue: bt,
    useTransition: bt,
    useMutableSource: bt,
    useSyncExternalStore: bt,
    useId: bt,
    unstable_isNewReconciler: !1,
  },
  F1 = {
    readContext: ir,
    useCallback: function (t, e) {
      return (Nr().memoizedState = [t, e === void 0 ? null : e]), t;
    },
    useContext: ir,
    useEffect: Lh,
    useImperativeHandle: function (t, e, r) {
      return (
        (r = r != null ? r.concat([t]) : null),
        Ys(4194308, 4, Op.bind(null, e, t), r)
      );
    },
    useLayoutEffect: function (t, e) {
      return Ys(4194308, 4, t, e);
    },
    useInsertionEffect: function (t, e) {
      return Ys(4, 2, t, e);
    },
    useMemo: function (t, e) {
      var r = Nr();
      return (
        (e = e === void 0 ? null : e), (t = t()), (r.memoizedState = [t, e]), t
      );
    },
    useReducer: function (t, e, r) {
      var n = Nr();
      return (
        (e = r !== void 0 ? r(e) : e),
        (n.memoizedState = n.baseState = e),
        (t = {
          pending: null,
          interleaved: null,
          lanes: 0,
          dispatch: null,
          lastRenderedReducer: t,
          lastRenderedState: e,
        }),
        (n.queue = t),
        (t = t.dispatch = B1.bind(null, tt, t)),
        [n.memoizedState, t]
      );
    },
    useRef: function (t) {
      var e = Nr();
      return (t = { current: t }), (e.memoizedState = t);
    },
    useState: Oh,
    useDebugValue: vc,
    useDeferredValue: function (t) {
      return (Nr().memoizedState = t);
    },
    useTransition: function () {
      var t = Oh(!1),
        e = t[0];
      return (t = L1.bind(null, t[1])), (Nr().memoizedState = t), [e, t];
    },
    useMutableSource: function () {},
    useSyncExternalStore: function (t, e, r) {
      var n = tt,
        i = Nr();
      if (Ye) {
        if (r === void 0) throw Error(U(407));
        r = r();
      } else {
        if (((r = e()), vt === null)) throw Error(U(349));
        ui & 30 || Sp(n, e, r);
      }
      i.memoizedState = r;
      var o = { value: r, getSnapshot: e };
      return (
        (i.queue = o),
        Lh(Cp.bind(null, n, o, t), [t]),
        (n.flags |= 2048),
        rs(9, Np.bind(null, n, o, r, e), void 0, null),
        r
      );
    },
    useId: function () {
      var t = Nr(),
        e = vt.identifierPrefix;
      if (Ye) {
        var r = Kr,
          n = Qr;
        (r = (n & ~(1 << (32 - wr(n) - 1))).toString(32) + r),
          (e = ":" + e + "R" + r),
          (r = es++),
          0 < r && (e += "H" + r.toString(32)),
          (e += ":");
      } else (r = O1++), (e = ":" + e + "r" + r.toString(32) + ":");
      return (t.memoizedState = e);
    },
    unstable_isNewReconciler: !1,
  },
  j1 = {
    readContext: ir,
    useCallback: Bp,
    useContext: ir,
    useEffect: mc,
    useImperativeHandle: Lp,
    useInsertionEffect: Ip,
    useLayoutEffect: Tp,
    useMemo: Dp,
    useReducer: eu,
    useRef: Rp,
    useState: function () {
      return eu(ts);
    },
    useDebugValue: vc,
    useDeferredValue: function (t) {
      var e = or();
      return Fp(e, ft.memoizedState, t);
    },
    useTransition: function () {
      var t = eu(ts)[0],
        e = or().memoizedState;
      return [t, e];
    },
    useMutableSource: _p,
    useSyncExternalStore: kp,
    useId: jp,
    unstable_isNewReconciler: !1,
  },
  U1 = {
    readContext: ir,
    useCallback: Bp,
    useContext: ir,
    useEffect: mc,
    useImperativeHandle: Lp,
    useInsertionEffect: Ip,
    useLayoutEffect: Tp,
    useMemo: Dp,
    useReducer: tu,
    useRef: Rp,
    useState: function () {
      return tu(ts);
    },
    useDebugValue: vc,
    useDeferredValue: function (t) {
      var e = or();
      return ft === null ? (e.memoizedState = t) : Fp(e, ft.memoizedState, t);
    },
    useTransition: function () {
      var t = tu(ts)[0],
        e = or().memoizedState;
      return [t, e];
    },
    useMutableSource: _p,
    useSyncExternalStore: kp,
    useId: jp,
    unstable_isNewReconciler: !1,
  };
function Yi(t, e) {
  try {
    var r = "",
      n = e;
    do (r += pg(n)), (n = n.return);
    while (n);
    var i = r;
  } catch (o) {
    i =
      `
Error generating stack: ` +
      o.message +
      `
` +
      o.stack;
  }
  return { value: t, source: e, stack: i, digest: null };
}
function ru(t, e, r) {
  return { value: t, source: null, stack: r ?? null, digest: e ?? null };
}
function of(t, e) {
  try {
    console.error(e.value);
  } catch (r) {
    setTimeout(function () {
      throw r;
    });
  }
}
var z1 = typeof WeakMap == "function" ? WeakMap : Map;
function Gp(t, e, r) {
  (r = Vr(-1, r)), (r.tag = 3), (r.payload = { element: null });
  var n = e.value;
  return (
    (r.callback = function () {
      Ml || ((Ml = !0), (mf = n)), of(t, e);
    }),
    r
  );
}
function qp(t, e, r) {
  (r = Vr(-1, r)), (r.tag = 3);
  var n = t.type.getDerivedStateFromError;
  if (typeof n == "function") {
    var i = e.value;
    (r.payload = function () {
      return n(i);
    }),
      (r.callback = function () {
        of(t, e);
      });
  }
  var o = t.stateNode;
  return (
    o !== null &&
      typeof o.componentDidCatch == "function" &&
      (r.callback = function () {
        of(t, e),
          typeof n != "function" &&
            (Sn === null ? (Sn = new Set([this])) : Sn.add(this));
        var s = e.stack;
        this.componentDidCatch(e.value, {
          componentStack: s !== null ? s : "",
        });
      }),
    r
  );
}
function Bh(t, e, r) {
  var n = t.pingCache;
  if (n === null) {
    n = t.pingCache = new z1();
    var i = new Set();
    n.set(e, i);
  } else (i = n.get(e)), i === void 0 && ((i = new Set()), n.set(e, i));
  i.has(r) || (i.add(r), (t = ty.bind(null, t, e, r)), e.then(t, t));
}
function Dh(t) {
  do {
    var e;
    if (
      ((e = t.tag === 13) &&
        ((e = t.memoizedState), (e = e !== null ? e.dehydrated !== null : !0)),
      e)
    )
      return t;
    t = t.return;
  } while (t !== null);
  return null;
}
function Fh(t, e, r, n, i) {
  return t.mode & 1
    ? ((t.flags |= 65536), (t.lanes = i), t)
    : (t === e
        ? (t.flags |= 65536)
        : ((t.flags |= 128),
          (r.flags |= 131072),
          (r.flags &= -52805),
          r.tag === 1 &&
            (r.alternate === null
              ? (r.tag = 17)
              : ((e = Vr(-1, 1)), (e.tag = 2), kn(r, e, 1))),
          (r.lanes |= 1)),
      t);
}
var H1 = rn.ReactCurrentOwner,
  Bt = !1;
function Pt(t, e, r, n) {
  e.child = t === null ? Ep(e, null, r, n) : Ji(e, t.child, r, n);
}
function jh(t, e, r, n, i) {
  r = r.render;
  var o = e.ref;
  return (
    zi(e, i),
    (n = dc(t, e, r, n, o, i)),
    (r = pc()),
    t !== null && !Bt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Xr(t, e, i))
      : (Ye && r && tc(e), (e.flags |= 1), Pt(t, e, n, i), e.child)
  );
}
function Uh(t, e, r, n, i) {
  if (t === null) {
    var o = r.type;
    return typeof o == "function" &&
      !_c(o) &&
      o.defaultProps === void 0 &&
      r.compare === null &&
      r.defaultProps === void 0
      ? ((e.tag = 15), (e.type = o), Wp(t, e, o, n, i))
      : ((t = tl(r.type, null, n, e, e.mode, i)),
        (t.ref = e.ref),
        (t.return = e),
        (e.child = t));
  }
  if (((o = t.child), !(t.lanes & i))) {
    var s = o.memoizedProps;
    if (
      ((r = r.compare), (r = r !== null ? r : Vo), r(s, n) && t.ref === e.ref)
    )
      return Xr(t, e, i);
  }
  return (
    (e.flags |= 1),
    (t = Cn(o, n)),
    (t.ref = e.ref),
    (t.return = e),
    (e.child = t)
  );
}
function Wp(t, e, r, n, i) {
  if (t !== null) {
    var o = t.memoizedProps;
    if (Vo(o, n) && t.ref === e.ref)
      if (((Bt = !1), (e.pendingProps = n = o), (t.lanes & i) !== 0))
        t.flags & 131072 && (Bt = !0);
      else return (e.lanes = t.lanes), Xr(t, e, i);
  }
  return sf(t, e, r, n, i);
}
function Qp(t, e, r) {
  var n = e.pendingProps,
    i = n.children,
    o = t !== null ? t.memoizedState : null;
  if (n.mode === "hidden")
    if (!(e.mode & 1))
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        ve(Li, Gt),
        (Gt |= r);
    else {
      if (!(r & 1073741824))
        return (
          (t = o !== null ? o.baseLanes | r : r),
          (e.lanes = e.childLanes = 1073741824),
          (e.memoizedState = {
            baseLanes: t,
            cachePool: null,
            transitions: null,
          }),
          (e.updateQueue = null),
          ve(Li, Gt),
          (Gt |= t),
          null
        );
      (e.memoizedState = { baseLanes: 0, cachePool: null, transitions: null }),
        (n = o !== null ? o.baseLanes : r),
        ve(Li, Gt),
        (Gt |= n);
    }
  else
    o !== null ? ((n = o.baseLanes | r), (e.memoizedState = null)) : (n = r),
      ve(Li, Gt),
      (Gt |= n);
  return Pt(t, e, i, r), e.child;
}
function Kp(t, e) {
  var r = e.ref;
  ((t === null && r !== null) || (t !== null && t.ref !== r)) &&
    ((e.flags |= 512), (e.flags |= 2097152));
}
function sf(t, e, r, n, i) {
  var o = jt(r) ? li : Ct.current;
  return (
    (o = Ki(e, o)),
    zi(e, i),
    (r = dc(t, e, r, n, o, i)),
    (n = pc()),
    t !== null && !Bt
      ? ((e.updateQueue = t.updateQueue),
        (e.flags &= -2053),
        (t.lanes &= ~i),
        Xr(t, e, i))
      : (Ye && n && tc(e), (e.flags |= 1), Pt(t, e, r, i), e.child)
  );
}
function zh(t, e, r, n, i) {
  if (jt(r)) {
    var o = !0;
    wl(e);
  } else o = !1;
  if ((zi(e, i), e.stateNode === null))
    Xs(t, e), wp(e, r, n), nf(e, r, n, i), (n = !0);
  else if (t === null) {
    var s = e.stateNode,
      l = e.memoizedProps;
    s.props = l;
    var a = s.context,
      f = r.contextType;
    typeof f == "object" && f !== null
      ? (f = ir(f))
      : ((f = jt(r) ? li : Ct.current), (f = Ki(e, f)));
    var h = r.getDerivedStateFromProps,
      p =
        typeof h == "function" ||
        typeof s.getSnapshotBeforeUpdate == "function";
    p ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== n || a !== f) && Ih(e, s, n, f)),
      (pn = !1);
    var y = e.memoizedState;
    (s.state = y),
      kl(e, n, s, i),
      (a = e.memoizedState),
      l !== n || y !== a || Ft.current || pn
        ? (typeof h == "function" && (rf(e, r, h, n), (a = e.memoizedState)),
          (l = pn || Rh(e, r, l, n, y, a, f))
            ? (p ||
                (typeof s.UNSAFE_componentWillMount != "function" &&
                  typeof s.componentWillMount != "function") ||
                (typeof s.componentWillMount == "function" &&
                  s.componentWillMount(),
                typeof s.UNSAFE_componentWillMount == "function" &&
                  s.UNSAFE_componentWillMount()),
              typeof s.componentDidMount == "function" && (e.flags |= 4194308))
            : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
              (e.memoizedProps = n),
              (e.memoizedState = a)),
          (s.props = n),
          (s.state = a),
          (s.context = f),
          (n = l))
        : (typeof s.componentDidMount == "function" && (e.flags |= 4194308),
          (n = !1));
  } else {
    (s = e.stateNode),
      yp(t, e),
      (l = e.memoizedProps),
      (f = e.type === e.elementType ? l : pr(e.type, l)),
      (s.props = f),
      (p = e.pendingProps),
      (y = s.context),
      (a = r.contextType),
      typeof a == "object" && a !== null
        ? (a = ir(a))
        : ((a = jt(r) ? li : Ct.current), (a = Ki(e, a)));
    var S = r.getDerivedStateFromProps;
    (h =
      typeof S == "function" ||
      typeof s.getSnapshotBeforeUpdate == "function") ||
      (typeof s.UNSAFE_componentWillReceiveProps != "function" &&
        typeof s.componentWillReceiveProps != "function") ||
      ((l !== p || y !== a) && Ih(e, s, n, a)),
      (pn = !1),
      (y = e.memoizedState),
      (s.state = y),
      kl(e, n, s, i);
    var P = e.memoizedState;
    l !== p || y !== P || Ft.current || pn
      ? (typeof S == "function" && (rf(e, r, S, n), (P = e.memoizedState)),
        (f = pn || Rh(e, r, f, n, y, P, a) || !1)
          ? (h ||
              (typeof s.UNSAFE_componentWillUpdate != "function" &&
                typeof s.componentWillUpdate != "function") ||
              (typeof s.componentWillUpdate == "function" &&
                s.componentWillUpdate(n, P, a),
              typeof s.UNSAFE_componentWillUpdate == "function" &&
                s.UNSAFE_componentWillUpdate(n, P, a)),
            typeof s.componentDidUpdate == "function" && (e.flags |= 4),
            typeof s.getSnapshotBeforeUpdate == "function" && (e.flags |= 1024))
          : (typeof s.componentDidUpdate != "function" ||
              (l === t.memoizedProps && y === t.memoizedState) ||
              (e.flags |= 4),
            typeof s.getSnapshotBeforeUpdate != "function" ||
              (l === t.memoizedProps && y === t.memoizedState) ||
              (e.flags |= 1024),
            (e.memoizedProps = n),
            (e.memoizedState = P)),
        (s.props = n),
        (s.state = P),
        (s.context = a),
        (n = f))
      : (typeof s.componentDidUpdate != "function" ||
          (l === t.memoizedProps && y === t.memoizedState) ||
          (e.flags |= 4),
        typeof s.getSnapshotBeforeUpdate != "function" ||
          (l === t.memoizedProps && y === t.memoizedState) ||
          (e.flags |= 1024),
        (n = !1));
  }
  return lf(t, e, r, n, o, i);
}
function lf(t, e, r, n, i, o) {
  Kp(t, e);
  var s = (e.flags & 128) !== 0;
  if (!n && !s) return i && Sh(e, r, !1), Xr(t, e, o);
  (n = e.stateNode), (H1.current = e);
  var l =
    s && typeof r.getDerivedStateFromError != "function" ? null : n.render();
  return (
    (e.flags |= 1),
    t !== null && s
      ? ((e.child = Ji(e, t.child, null, o)), (e.child = Ji(e, null, l, o)))
      : Pt(t, e, l, o),
    (e.memoizedState = n.state),
    i && Sh(e, r, !0),
    e.child
  );
}
function Vp(t) {
  var e = t.stateNode;
  e.pendingContext
    ? kh(t, e.pendingContext, e.pendingContext !== e.context)
    : e.context && kh(t, e.context, !1),
    uc(t, e.containerInfo);
}
function Hh(t, e, r, n, i) {
  return Vi(), nc(i), (e.flags |= 256), Pt(t, e, r, n), e.child;
}
var af = { dehydrated: null, treeContext: null, retryLane: 0 };
function uf(t) {
  return { baseLanes: t, cachePool: null, transitions: null };
}
function Jp(t, e, r) {
  var n = e.pendingProps,
    i = et.current,
    o = !1,
    s = (e.flags & 128) !== 0,
    l;
  if (
    ((l = s) ||
      (l = t !== null && t.memoizedState === null ? !1 : (i & 2) !== 0),
    l
      ? ((o = !0), (e.flags &= -129))
      : (t === null || t.memoizedState !== null) && (i |= 1),
    ve(et, i & 1),
    t === null)
  )
    return (
      ef(e),
      (t = e.memoizedState),
      t !== null && ((t = t.dehydrated), t !== null)
        ? (e.mode & 1
            ? t.data === "$!"
              ? (e.lanes = 8)
              : (e.lanes = 1073741824)
            : (e.lanes = 1),
          null)
        : ((s = n.children),
          (t = n.fallback),
          o
            ? ((n = e.mode),
              (o = e.child),
              (s = { mode: "hidden", children: s }),
              !(n & 1) && o !== null
                ? ((o.childLanes = 0), (o.pendingProps = s))
                : (o = na(s, n, 0, null)),
              (t = si(t, n, r, null)),
              (o.return = e),
              (t.return = e),
              (o.sibling = t),
              (e.child = o),
              (e.child.memoizedState = uf(r)),
              (e.memoizedState = af),
              t)
            : gc(e, s))
    );
  if (((i = t.memoizedState), i !== null && ((l = i.dehydrated), l !== null)))
    return G1(t, e, s, n, l, i, r);
  if (o) {
    (o = n.fallback), (s = e.mode), (i = t.child), (l = i.sibling);
    var a = { mode: "hidden", children: n.children };
    return (
      !(s & 1) && e.child !== i
        ? ((n = e.child),
          (n.childLanes = 0),
          (n.pendingProps = a),
          (e.deletions = null))
        : ((n = Cn(i, a)), (n.subtreeFlags = i.subtreeFlags & 14680064)),
      l !== null ? (o = Cn(l, o)) : ((o = si(o, s, r, null)), (o.flags |= 2)),
      (o.return = e),
      (n.return = e),
      (n.sibling = o),
      (e.child = n),
      (n = o),
      (o = e.child),
      (s = t.child.memoizedState),
      (s =
        s === null
          ? uf(r)
          : {
              baseLanes: s.baseLanes | r,
              cachePool: null,
              transitions: s.transitions,
            }),
      (o.memoizedState = s),
      (o.childLanes = t.childLanes & ~r),
      (e.memoizedState = af),
      n
    );
  }
  return (
    (o = t.child),
    (t = o.sibling),
    (n = Cn(o, { mode: "visible", children: n.children })),
    !(e.mode & 1) && (n.lanes = r),
    (n.return = e),
    (n.sibling = null),
    t !== null &&
      ((r = e.deletions),
      r === null ? ((e.deletions = [t]), (e.flags |= 16)) : r.push(t)),
    (e.child = n),
    (e.memoizedState = null),
    n
  );
}
function gc(t, e) {
  return (
    (e = na({ mode: "visible", children: e }, t.mode, 0, null)),
    (e.return = t),
    (t.child = e)
  );
}
function Os(t, e, r, n) {
  return (
    n !== null && nc(n),
    Ji(e, t.child, null, r),
    (t = gc(e, e.pendingProps.children)),
    (t.flags |= 2),
    (e.memoizedState = null),
    t
  );
}
function G1(t, e, r, n, i, o, s) {
  if (r)
    return e.flags & 256
      ? ((e.flags &= -257), (n = ru(Error(U(422)))), Os(t, e, s, n))
      : e.memoizedState !== null
      ? ((e.child = t.child), (e.flags |= 128), null)
      : ((o = n.fallback),
        (i = e.mode),
        (n = na({ mode: "visible", children: n.children }, i, 0, null)),
        (o = si(o, i, s, null)),
        (o.flags |= 2),
        (n.return = e),
        (o.return = e),
        (n.sibling = o),
        (e.child = n),
        e.mode & 1 && Ji(e, t.child, null, s),
        (e.child.memoizedState = uf(s)),
        (e.memoizedState = af),
        o);
  if (!(e.mode & 1)) return Os(t, e, s, null);
  if (i.data === "$!") {
    if (((n = i.nextSibling && i.nextSibling.dataset), n)) var l = n.dgst;
    return (n = l), (o = Error(U(419))), (n = ru(o, n, void 0)), Os(t, e, s, n);
  }
  if (((l = (s & t.childLanes) !== 0), Bt || l)) {
    if (((n = vt), n !== null)) {
      switch (s & -s) {
        case 4:
          i = 2;
          break;
        case 16:
          i = 8;
          break;
        case 64:
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
        case 4194304:
        case 8388608:
        case 16777216:
        case 33554432:
        case 67108864:
          i = 32;
          break;
        case 536870912:
          i = 268435456;
          break;
        default:
          i = 0;
      }
      (i = i & (n.suspendedLanes | s) ? 0 : i),
        i !== 0 &&
          i !== o.retryLane &&
          ((o.retryLane = i), Yr(t, i), Ar(n, t, i, -1));
    }
    return bc(), (n = ru(Error(U(421)))), Os(t, e, s, n);
  }
  return i.data === "$?"
    ? ((e.flags |= 128),
      (e.child = t.child),
      (e = ry.bind(null, t)),
      (i._reactRetry = e),
      null)
    : ((t = o.treeContext),
      (Kt = _n(i.nextSibling)),
      (Vt = e),
      (Ye = !0),
      (gr = null),
      t !== null &&
        ((er[tr++] = Qr),
        (er[tr++] = Kr),
        (er[tr++] = ai),
        (Qr = t.id),
        (Kr = t.overflow),
        (ai = e)),
      (e = gc(e, n.children)),
      (e.flags |= 4096),
      e);
}
function Gh(t, e, r) {
  t.lanes |= e;
  var n = t.alternate;
  n !== null && (n.lanes |= e), tf(t.return, e, r);
}
function nu(t, e, r, n, i) {
  var o = t.memoizedState;
  o === null
    ? (t.memoizedState = {
        isBackwards: e,
        rendering: null,
        renderingStartTime: 0,
        last: n,
        tail: r,
        tailMode: i,
      })
    : ((o.isBackwards = e),
      (o.rendering = null),
      (o.renderingStartTime = 0),
      (o.last = n),
      (o.tail = r),
      (o.tailMode = i));
}
function $p(t, e, r) {
  var n = e.pendingProps,
    i = n.revealOrder,
    o = n.tail;
  if ((Pt(t, e, n.children, r), (n = et.current), n & 2))
    (n = (n & 1) | 2), (e.flags |= 128);
  else {
    if (t !== null && t.flags & 128)
      e: for (t = e.child; t !== null; ) {
        if (t.tag === 13) t.memoizedState !== null && Gh(t, r, e);
        else if (t.tag === 19) Gh(t, r, e);
        else if (t.child !== null) {
          (t.child.return = t), (t = t.child);
          continue;
        }
        if (t === e) break e;
        for (; t.sibling === null; ) {
          if (t.return === null || t.return === e) break e;
          t = t.return;
        }
        (t.sibling.return = t.return), (t = t.sibling);
      }
    n &= 1;
  }
  if ((ve(et, n), !(e.mode & 1))) e.memoizedState = null;
  else
    switch (i) {
      case "forwards":
        for (r = e.child, i = null; r !== null; )
          (t = r.alternate),
            t !== null && Sl(t) === null && (i = r),
            (r = r.sibling);
        (r = i),
          r === null
            ? ((i = e.child), (e.child = null))
            : ((i = r.sibling), (r.sibling = null)),
          nu(e, !1, i, r, o);
        break;
      case "backwards":
        for (r = null, i = e.child, e.child = null; i !== null; ) {
          if (((t = i.alternate), t !== null && Sl(t) === null)) {
            e.child = i;
            break;
          }
          (t = i.sibling), (i.sibling = r), (r = i), (i = t);
        }
        nu(e, !0, r, null, o);
        break;
      case "together":
        nu(e, !1, null, null, void 0);
        break;
      default:
        e.memoizedState = null;
    }
  return e.child;
}
function Xs(t, e) {
  !(e.mode & 1) &&
    t !== null &&
    ((t.alternate = null), (e.alternate = null), (e.flags |= 2));
}
function Xr(t, e, r) {
  if (
    (t !== null && (e.dependencies = t.dependencies),
    (fi |= e.lanes),
    !(r & e.childLanes))
  )
    return null;
  if (t !== null && e.child !== t.child) throw Error(U(153));
  if (e.child !== null) {
    for (
      t = e.child, r = Cn(t, t.pendingProps), e.child = r, r.return = e;
      t.sibling !== null;

    )
      (t = t.sibling), (r = r.sibling = Cn(t, t.pendingProps)), (r.return = e);
    r.sibling = null;
  }
  return e.child;
}
function q1(t, e, r) {
  switch (e.tag) {
    case 3:
      Vp(e), Vi();
      break;
    case 5:
      bp(e);
      break;
    case 1:
      jt(e.type) && wl(e);
      break;
    case 4:
      uc(e, e.stateNode.containerInfo);
      break;
    case 10:
      var n = e.type._context,
        i = e.memoizedProps.value;
      ve(bl, n._currentValue), (n._currentValue = i);
      break;
    case 13:
      if (((n = e.memoizedState), n !== null))
        return n.dehydrated !== null
          ? (ve(et, et.current & 1), (e.flags |= 128), null)
          : r & e.child.childLanes
          ? Jp(t, e, r)
          : (ve(et, et.current & 1),
            (t = Xr(t, e, r)),
            t !== null ? t.sibling : null);
      ve(et, et.current & 1);
      break;
    case 19:
      if (((n = (r & e.childLanes) !== 0), t.flags & 128)) {
        if (n) return $p(t, e, r);
        e.flags |= 128;
      }
      if (
        ((i = e.memoizedState),
        i !== null &&
          ((i.rendering = null), (i.tail = null), (i.lastEffect = null)),
        ve(et, et.current),
        n)
      )
        break;
      return null;
    case 22:
    case 23:
      return (e.lanes = 0), Qp(t, e, r);
  }
  return Xr(t, e, r);
}
var Yp, ff, Xp, Zp;
Yp = function (t, e) {
  for (var r = e.child; r !== null; ) {
    if (r.tag === 5 || r.tag === 6) t.appendChild(r.stateNode);
    else if (r.tag !== 4 && r.child !== null) {
      (r.child.return = r), (r = r.child);
      continue;
    }
    if (r === e) break;
    for (; r.sibling === null; ) {
      if (r.return === null || r.return === e) return;
      r = r.return;
    }
    (r.sibling.return = r.return), (r = r.sibling);
  }
};
ff = function () {};
Xp = function (t, e, r, n) {
  var i = t.memoizedProps;
  if (i !== n) {
    (t = e.stateNode), ni(Tr.current);
    var o = null;
    switch (r) {
      case "input":
        (i = Ru(t, i)), (n = Ru(t, n)), (o = []);
        break;
      case "select":
        (i = rt({}, i, { value: void 0 })),
          (n = rt({}, n, { value: void 0 })),
          (o = []);
        break;
      case "textarea":
        (i = Ou(t, i)), (n = Ou(t, n)), (o = []);
        break;
      default:
        typeof i.onClick != "function" &&
          typeof n.onClick == "function" &&
          (t.onclick = yl);
    }
    Bu(r, n);
    var s;
    r = null;
    for (f in i)
      if (!n.hasOwnProperty(f) && i.hasOwnProperty(f) && i[f] != null)
        if (f === "style") {
          var l = i[f];
          for (s in l) l.hasOwnProperty(s) && (r || (r = {}), (r[s] = ""));
        } else
          f !== "dangerouslySetInnerHTML" &&
            f !== "children" &&
            f !== "suppressContentEditableWarning" &&
            f !== "suppressHydrationWarning" &&
            f !== "autoFocus" &&
            (zo.hasOwnProperty(f)
              ? o || (o = [])
              : (o = o || []).push(f, null));
    for (f in n) {
      var a = n[f];
      if (
        ((l = i != null ? i[f] : void 0),
        n.hasOwnProperty(f) && a !== l && (a != null || l != null))
      )
        if (f === "style")
          if (l) {
            for (s in l)
              !l.hasOwnProperty(s) ||
                (a && a.hasOwnProperty(s)) ||
                (r || (r = {}), (r[s] = ""));
            for (s in a)
              a.hasOwnProperty(s) &&
                l[s] !== a[s] &&
                (r || (r = {}), (r[s] = a[s]));
          } else r || (o || (o = []), o.push(f, r)), (r = a);
        else
          f === "dangerouslySetInnerHTML"
            ? ((a = a ? a.__html : void 0),
              (l = l ? l.__html : void 0),
              a != null && l !== a && (o = o || []).push(f, a))
            : f === "children"
            ? (typeof a != "string" && typeof a != "number") ||
              (o = o || []).push(f, "" + a)
            : f !== "suppressContentEditableWarning" &&
              f !== "suppressHydrationWarning" &&
              (zo.hasOwnProperty(f)
                ? (a != null && f === "onScroll" && Je("scroll", t),
                  o || l === a || (o = []))
                : (o = o || []).push(f, a));
    }
    r && (o = o || []).push("style", r);
    var f = o;
    (e.updateQueue = f) && (e.flags |= 4);
  }
};
Zp = function (t, e, r, n) {
  r !== n && (e.flags |= 4);
};
function yo(t, e) {
  if (!Ye)
    switch (t.tailMode) {
      case "hidden":
        e = t.tail;
        for (var r = null; e !== null; )
          e.alternate !== null && (r = e), (e = e.sibling);
        r === null ? (t.tail = null) : (r.sibling = null);
        break;
      case "collapsed":
        r = t.tail;
        for (var n = null; r !== null; )
          r.alternate !== null && (n = r), (r = r.sibling);
        n === null
          ? e || t.tail === null
            ? (t.tail = null)
            : (t.tail.sibling = null)
          : (n.sibling = null);
    }
}
function _t(t) {
  var e = t.alternate !== null && t.alternate.child === t.child,
    r = 0,
    n = 0;
  if (e)
    for (var i = t.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags & 14680064),
        (n |= i.flags & 14680064),
        (i.return = t),
        (i = i.sibling);
  else
    for (i = t.child; i !== null; )
      (r |= i.lanes | i.childLanes),
        (n |= i.subtreeFlags),
        (n |= i.flags),
        (i.return = t),
        (i = i.sibling);
  return (t.subtreeFlags |= n), (t.childLanes = r), e;
}
function W1(t, e, r) {
  var n = e.pendingProps;
  switch ((rc(e), e.tag)) {
    case 2:
    case 16:
    case 15:
    case 0:
    case 11:
    case 7:
    case 8:
    case 12:
    case 9:
    case 14:
      return _t(e), null;
    case 1:
      return jt(e.type) && xl(), _t(e), null;
    case 3:
      return (
        (n = e.stateNode),
        $i(),
        $e(Ft),
        $e(Ct),
        cc(),
        n.pendingContext &&
          ((n.context = n.pendingContext), (n.pendingContext = null)),
        (t === null || t.child === null) &&
          (Is(e)
            ? (e.flags |= 4)
            : t === null ||
              (t.memoizedState.isDehydrated && !(e.flags & 256)) ||
              ((e.flags |= 1024), gr !== null && (yf(gr), (gr = null)))),
        ff(t, e),
        _t(e),
        null
      );
    case 5:
      fc(e);
      var i = ni(Zo.current);
      if (((r = e.type), t !== null && e.stateNode != null))
        Xp(t, e, r, n, i),
          t.ref !== e.ref && ((e.flags |= 512), (e.flags |= 2097152));
      else {
        if (!n) {
          if (e.stateNode === null) throw Error(U(166));
          return _t(e), null;
        }
        if (((t = ni(Tr.current)), Is(e))) {
          (n = e.stateNode), (r = e.type);
          var o = e.memoizedProps;
          switch (((n[Rr] = e), (n[Yo] = o), (t = (e.mode & 1) !== 0), r)) {
            case "dialog":
              Je("cancel", n), Je("close", n);
              break;
            case "iframe":
            case "object":
            case "embed":
              Je("load", n);
              break;
            case "video":
            case "audio":
              for (i = 0; i < Co.length; i++) Je(Co[i], n);
              break;
            case "source":
              Je("error", n);
              break;
            case "img":
            case "image":
            case "link":
              Je("error", n), Je("load", n);
              break;
            case "details":
              Je("toggle", n);
              break;
            case "input":
              Xc(n, o), Je("invalid", n);
              break;
            case "select":
              (n._wrapperState = { wasMultiple: !!o.multiple }),
                Je("invalid", n);
              break;
            case "textarea":
              eh(n, o), Je("invalid", n);
          }
          Bu(r, o), (i = null);
          for (var s in o)
            if (o.hasOwnProperty(s)) {
              var l = o[s];
              s === "children"
                ? typeof l == "string"
                  ? n.textContent !== l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rs(n.textContent, l, t),
                    (i = ["children", l]))
                  : typeof l == "number" &&
                    n.textContent !== "" + l &&
                    (o.suppressHydrationWarning !== !0 &&
                      Rs(n.textContent, l, t),
                    (i = ["children", "" + l]))
                : zo.hasOwnProperty(s) &&
                  l != null &&
                  s === "onScroll" &&
                  Je("scroll", n);
            }
          switch (r) {
            case "input":
              bs(n), Zc(n, o, !0);
              break;
            case "textarea":
              bs(n), th(n);
              break;
            case "select":
            case "option":
              break;
            default:
              typeof o.onClick == "function" && (n.onclick = yl);
          }
          (n = i), (e.updateQueue = n), n !== null && (e.flags |= 4);
        } else {
          (s = i.nodeType === 9 ? i : i.ownerDocument),
            t === "http://www.w3.org/1999/xhtml" && (t = S0(r)),
            t === "http://www.w3.org/1999/xhtml"
              ? r === "script"
                ? ((t = s.createElement("div")),
                  (t.innerHTML = "<script></script>"),
                  (t = t.removeChild(t.firstChild)))
                : typeof n.is == "string"
                ? (t = s.createElement(r, { is: n.is }))
                : ((t = s.createElement(r)),
                  r === "select" &&
                    ((s = t),
                    n.multiple
                      ? (s.multiple = !0)
                      : n.size && (s.size = n.size)))
              : (t = s.createElementNS(t, r)),
            (t[Rr] = e),
            (t[Yo] = n),
            Yp(t, e, !1, !1),
            (e.stateNode = t);
          e: {
            switch (((s = Du(r, n)), r)) {
              case "dialog":
                Je("cancel", t), Je("close", t), (i = n);
                break;
              case "iframe":
              case "object":
              case "embed":
                Je("load", t), (i = n);
                break;
              case "video":
              case "audio":
                for (i = 0; i < Co.length; i++) Je(Co[i], t);
                i = n;
                break;
              case "source":
                Je("error", t), (i = n);
                break;
              case "img":
              case "image":
              case "link":
                Je("error", t), Je("load", t), (i = n);
                break;
              case "details":
                Je("toggle", t), (i = n);
                break;
              case "input":
                Xc(t, n), (i = Ru(t, n)), Je("invalid", t);
                break;
              case "option":
                i = n;
                break;
              case "select":
                (t._wrapperState = { wasMultiple: !!n.multiple }),
                  (i = rt({}, n, { value: void 0 })),
                  Je("invalid", t);
                break;
              case "textarea":
                eh(t, n), (i = Ou(t, n)), Je("invalid", t);
                break;
              default:
                i = n;
            }
            Bu(r, i), (l = i);
            for (o in l)
              if (l.hasOwnProperty(o)) {
                var a = l[o];
                o === "style"
                  ? P0(t, a)
                  : o === "dangerouslySetInnerHTML"
                  ? ((a = a ? a.__html : void 0), a != null && N0(t, a))
                  : o === "children"
                  ? typeof a == "string"
                    ? (r !== "textarea" || a !== "") && Ho(t, a)
                    : typeof a == "number" && Ho(t, "" + a)
                  : o !== "suppressContentEditableWarning" &&
                    o !== "suppressHydrationWarning" &&
                    o !== "autoFocus" &&
                    (zo.hasOwnProperty(o)
                      ? a != null && o === "onScroll" && Je("scroll", t)
                      : a != null && zf(t, o, a, s));
              }
            switch (r) {
              case "input":
                bs(t), Zc(t, n, !1);
                break;
              case "textarea":
                bs(t), th(t);
                break;
              case "option":
                n.value != null && t.setAttribute("value", "" + Mn(n.value));
                break;
              case "select":
                (t.multiple = !!n.multiple),
                  (o = n.value),
                  o != null
                    ? Di(t, !!n.multiple, o, !1)
                    : n.defaultValue != null &&
                      Di(t, !!n.multiple, n.defaultValue, !0);
                break;
              default:
                typeof i.onClick == "function" && (t.onclick = yl);
            }
            switch (r) {
              case "button":
              case "input":
              case "select":
              case "textarea":
                n = !!n.autoFocus;
                break e;
              case "img":
                n = !0;
                break e;
              default:
                n = !1;
            }
          }
          n && (e.flags |= 4);
        }
        e.ref !== null && ((e.flags |= 512), (e.flags |= 2097152));
      }
      return _t(e), null;
    case 6:
      if (t && e.stateNode != null) Zp(t, e, t.memoizedProps, n);
      else {
        if (typeof n != "string" && e.stateNode === null) throw Error(U(166));
        if (((r = ni(Zo.current)), ni(Tr.current), Is(e))) {
          if (
            ((n = e.stateNode),
            (r = e.memoizedProps),
            (n[Rr] = e),
            (o = n.nodeValue !== r) && ((t = Vt), t !== null))
          )
            switch (t.tag) {
              case 3:
                Rs(n.nodeValue, r, (t.mode & 1) !== 0);
                break;
              case 5:
                t.memoizedProps.suppressHydrationWarning !== !0 &&
                  Rs(n.nodeValue, r, (t.mode & 1) !== 0);
            }
          o && (e.flags |= 4);
        } else
          (n = (r.nodeType === 9 ? r : r.ownerDocument).createTextNode(n)),
            (n[Rr] = e),
            (e.stateNode = n);
      }
      return _t(e), null;
    case 13:
      if (
        ($e(et),
        (n = e.memoizedState),
        t === null ||
          (t.memoizedState !== null && t.memoizedState.dehydrated !== null))
      ) {
        if (Ye && Kt !== null && e.mode & 1 && !(e.flags & 128))
          vp(), Vi(), (e.flags |= 98560), (o = !1);
        else if (((o = Is(e)), n !== null && n.dehydrated !== null)) {
          if (t === null) {
            if (!o) throw Error(U(318));
            if (
              ((o = e.memoizedState),
              (o = o !== null ? o.dehydrated : null),
              !o)
            )
              throw Error(U(317));
            o[Rr] = e;
          } else
            Vi(), !(e.flags & 128) && (e.memoizedState = null), (e.flags |= 4);
          _t(e), (o = !1);
        } else gr !== null && (yf(gr), (gr = null)), (o = !0);
        if (!o) return e.flags & 65536 ? e : null;
      }
      return e.flags & 128
        ? ((e.lanes = r), e)
        : ((n = n !== null),
          n !== (t !== null && t.memoizedState !== null) &&
            n &&
            ((e.child.flags |= 8192),
            e.mode & 1 &&
              (t === null || et.current & 1 ? ct === 0 && (ct = 3) : bc())),
          e.updateQueue !== null && (e.flags |= 4),
          _t(e),
          null);
    case 4:
      return (
        $i(), ff(t, e), t === null && Jo(e.stateNode.containerInfo), _t(e), null
      );
    case 10:
      return sc(e.type._context), _t(e), null;
    case 17:
      return jt(e.type) && xl(), _t(e), null;
    case 19:
      if (($e(et), (o = e.memoizedState), o === null)) return _t(e), null;
      if (((n = (e.flags & 128) !== 0), (s = o.rendering), s === null))
        if (n) yo(o, !1);
        else {
          if (ct !== 0 || (t !== null && t.flags & 128))
            for (t = e.child; t !== null; ) {
              if (((s = Sl(t)), s !== null)) {
                for (
                  e.flags |= 128,
                    yo(o, !1),
                    n = s.updateQueue,
                    n !== null && ((e.updateQueue = n), (e.flags |= 4)),
                    e.subtreeFlags = 0,
                    n = r,
                    r = e.child;
                  r !== null;

                )
                  (o = r),
                    (t = n),
                    (o.flags &= 14680066),
                    (s = o.alternate),
                    s === null
                      ? ((o.childLanes = 0),
                        (o.lanes = t),
                        (o.child = null),
                        (o.subtreeFlags = 0),
                        (o.memoizedProps = null),
                        (o.memoizedState = null),
                        (o.updateQueue = null),
                        (o.dependencies = null),
                        (o.stateNode = null))
                      : ((o.childLanes = s.childLanes),
                        (o.lanes = s.lanes),
                        (o.child = s.child),
                        (o.subtreeFlags = 0),
                        (o.deletions = null),
                        (o.memoizedProps = s.memoizedProps),
                        (o.memoizedState = s.memoizedState),
                        (o.updateQueue = s.updateQueue),
                        (o.type = s.type),
                        (t = s.dependencies),
                        (o.dependencies =
                          t === null
                            ? null
                            : {
                                lanes: t.lanes,
                                firstContext: t.firstContext,
                              })),
                    (r = r.sibling);
                return ve(et, (et.current & 1) | 2), e.child;
              }
              t = t.sibling;
            }
          o.tail !== null &&
            ot() > Xi &&
            ((e.flags |= 128), (n = !0), yo(o, !1), (e.lanes = 4194304));
        }
      else {
        if (!n)
          if (((t = Sl(s)), t !== null)) {
            if (
              ((e.flags |= 128),
              (n = !0),
              (r = t.updateQueue),
              r !== null && ((e.updateQueue = r), (e.flags |= 4)),
              yo(o, !0),
              o.tail === null && o.tailMode === "hidden" && !s.alternate && !Ye)
            )
              return _t(e), null;
          } else
            2 * ot() - o.renderingStartTime > Xi &&
              r !== 1073741824 &&
              ((e.flags |= 128), (n = !0), yo(o, !1), (e.lanes = 4194304));
        o.isBackwards
          ? ((s.sibling = e.child), (e.child = s))
          : ((r = o.last),
            r !== null ? (r.sibling = s) : (e.child = s),
            (o.last = s));
      }
      return o.tail !== null
        ? ((e = o.tail),
          (o.rendering = e),
          (o.tail = e.sibling),
          (o.renderingStartTime = ot()),
          (e.sibling = null),
          (r = et.current),
          ve(et, n ? (r & 1) | 2 : r & 1),
          e)
        : (_t(e), null);
    case 22:
    case 23:
      return (
        Ec(),
        (n = e.memoizedState !== null),
        t !== null && (t.memoizedState !== null) !== n && (e.flags |= 8192),
        n && e.mode & 1
          ? Gt & 1073741824 && (_t(e), e.subtreeFlags & 6 && (e.flags |= 8192))
          : _t(e),
        null
      );
    case 24:
      return null;
    case 25:
      return null;
  }
  throw Error(U(156, e.tag));
}
function Q1(t, e) {
  switch ((rc(e), e.tag)) {
    case 1:
      return (
        jt(e.type) && xl(),
        (t = e.flags),
        t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 3:
      return (
        $i(),
        $e(Ft),
        $e(Ct),
        cc(),
        (t = e.flags),
        t & 65536 && !(t & 128) ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 5:
      return fc(e), null;
    case 13:
      if (
        ($e(et), (t = e.memoizedState), t !== null && t.dehydrated !== null)
      ) {
        if (e.alternate === null) throw Error(U(340));
        Vi();
      }
      return (
        (t = e.flags), t & 65536 ? ((e.flags = (t & -65537) | 128), e) : null
      );
    case 19:
      return $e(et), null;
    case 4:
      return $i(), null;
    case 10:
      return sc(e.type._context), null;
    case 22:
    case 23:
      return Ec(), null;
    case 24:
      return null;
    default:
      return null;
  }
}
var Ls = !1,
  kt = !1,
  K1 = typeof WeakSet == "function" ? WeakSet : Set,
  K = null;
function Oi(t, e) {
  var r = t.ref;
  if (r !== null)
    if (typeof r == "function")
      try {
        r(null);
      } catch (n) {
        it(t, e, n);
      }
    else r.current = null;
}
function cf(t, e, r) {
  try {
    r();
  } catch (n) {
    it(t, e, n);
  }
}
var qh = !1;
function V1(t, e) {
  if (((Ku = ml), (t = np()), ec(t))) {
    if ("selectionStart" in t)
      var r = { start: t.selectionStart, end: t.selectionEnd };
    else
      e: {
        r = ((r = t.ownerDocument) && r.defaultView) || window;
        var n = r.getSelection && r.getSelection();
        if (n && n.rangeCount !== 0) {
          r = n.anchorNode;
          var i = n.anchorOffset,
            o = n.focusNode;
          n = n.focusOffset;
          try {
            r.nodeType, o.nodeType;
          } catch {
            r = null;
            break e;
          }
          var s = 0,
            l = -1,
            a = -1,
            f = 0,
            h = 0,
            p = t,
            y = null;
          t: for (;;) {
            for (
              var S;
              p !== r || (i !== 0 && p.nodeType !== 3) || (l = s + i),
                p !== o || (n !== 0 && p.nodeType !== 3) || (a = s + n),
                p.nodeType === 3 && (s += p.nodeValue.length),
                (S = p.firstChild) !== null;

            )
              (y = p), (p = S);
            for (;;) {
              if (p === t) break t;
              if (
                (y === r && ++f === i && (l = s),
                y === o && ++h === n && (a = s),
                (S = p.nextSibling) !== null)
              )
                break;
              (p = y), (y = p.parentNode);
            }
            p = S;
          }
          r = l === -1 || a === -1 ? null : { start: l, end: a };
        } else r = null;
      }
    r = r || { start: 0, end: 0 };
  } else r = null;
  for (Vu = { focusedElem: t, selectionRange: r }, ml = !1, K = e; K !== null; )
    if (((e = K), (t = e.child), (e.subtreeFlags & 1028) !== 0 && t !== null))
      (t.return = e), (K = t);
    else
      for (; K !== null; ) {
        e = K;
        try {
          var P = e.alternate;
          if (e.flags & 1024)
            switch (e.tag) {
              case 0:
              case 11:
              case 15:
                break;
              case 1:
                if (P !== null) {
                  var M = P.memoizedProps,
                    I = P.memoizedState,
                    w = e.stateNode,
                    x = w.getSnapshotBeforeUpdate(
                      e.elementType === e.type ? M : pr(e.type, M),
                      I
                    );
                  w.__reactInternalSnapshotBeforeUpdate = x;
                }
                break;
              case 3:
                var N = e.stateNode.containerInfo;
                N.nodeType === 1
                  ? (N.textContent = "")
                  : N.nodeType === 9 &&
                    N.documentElement &&
                    N.removeChild(N.documentElement);
                break;
              case 5:
              case 6:
              case 4:
              case 17:
                break;
              default:
                throw Error(U(163));
            }
        } catch (T) {
          it(e, e.return, T);
        }
        if (((t = e.sibling), t !== null)) {
          (t.return = e.return), (K = t);
          break;
        }
        K = e.return;
      }
  return (P = qh), (qh = !1), P;
}
function Do(t, e, r) {
  var n = e.updateQueue;
  if (((n = n !== null ? n.lastEffect : null), n !== null)) {
    var i = (n = n.next);
    do {
      if ((i.tag & t) === t) {
        var o = i.destroy;
        (i.destroy = void 0), o !== void 0 && cf(e, r, o);
      }
      i = i.next;
    } while (i !== n);
  }
}
function ta(t, e) {
  if (
    ((e = e.updateQueue), (e = e !== null ? e.lastEffect : null), e !== null)
  ) {
    var r = (e = e.next);
    do {
      if ((r.tag & t) === t) {
        var n = r.create;
        r.destroy = n();
      }
      r = r.next;
    } while (r !== e);
  }
}
function hf(t) {
  var e = t.ref;
  if (e !== null) {
    var r = t.stateNode;
    switch (t.tag) {
      case 5:
        t = r;
        break;
      default:
        t = r;
    }
    typeof e == "function" ? e(t) : (e.current = t);
  }
}
function em(t) {
  var e = t.alternate;
  e !== null && ((t.alternate = null), em(e)),
    (t.child = null),
    (t.deletions = null),
    (t.sibling = null),
    t.tag === 5 &&
      ((e = t.stateNode),
      e !== null &&
        (delete e[Rr], delete e[Yo], delete e[Yu], delete e[M1], delete e[R1])),
    (t.stateNode = null),
    (t.return = null),
    (t.dependencies = null),
    (t.memoizedProps = null),
    (t.memoizedState = null),
    (t.pendingProps = null),
    (t.stateNode = null),
    (t.updateQueue = null);
}
function tm(t) {
  return t.tag === 5 || t.tag === 3 || t.tag === 4;
}
function Wh(t) {
  e: for (;;) {
    for (; t.sibling === null; ) {
      if (t.return === null || tm(t.return)) return null;
      t = t.return;
    }
    for (
      t.sibling.return = t.return, t = t.sibling;
      t.tag !== 5 && t.tag !== 6 && t.tag !== 18;

    ) {
      if (t.flags & 2 || t.child === null || t.tag === 4) continue e;
      (t.child.return = t), (t = t.child);
    }
    if (!(t.flags & 2)) return t.stateNode;
  }
}
function df(t, e, r) {
  var n = t.tag;
  if (n === 5 || n === 6)
    (t = t.stateNode),
      e
        ? r.nodeType === 8
          ? r.parentNode.insertBefore(t, e)
          : r.insertBefore(t, e)
        : (r.nodeType === 8
            ? ((e = r.parentNode), e.insertBefore(t, r))
            : ((e = r), e.appendChild(t)),
          (r = r._reactRootContainer),
          r != null || e.onclick !== null || (e.onclick = yl));
  else if (n !== 4 && ((t = t.child), t !== null))
    for (df(t, e, r), t = t.sibling; t !== null; ) df(t, e, r), (t = t.sibling);
}
function pf(t, e, r) {
  var n = t.tag;
  if (n === 5 || n === 6)
    (t = t.stateNode), e ? r.insertBefore(t, e) : r.appendChild(t);
  else if (n !== 4 && ((t = t.child), t !== null))
    for (pf(t, e, r), t = t.sibling; t !== null; ) pf(t, e, r), (t = t.sibling);
}
var yt = null,
  vr = !1;
function fn(t, e, r) {
  for (r = r.child; r !== null; ) rm(t, e, r), (r = r.sibling);
}
function rm(t, e, r) {
  if (Ir && typeof Ir.onCommitFiberUnmount == "function")
    try {
      Ir.onCommitFiberUnmount(Kl, r);
    } catch {}
  switch (r.tag) {
    case 5:
      kt || Oi(r, e);
    case 6:
      var n = yt,
        i = vr;
      (yt = null),
        fn(t, e, r),
        (yt = n),
        (vr = i),
        yt !== null &&
          (vr
            ? ((t = yt),
              (r = r.stateNode),
              t.nodeType === 8 ? t.parentNode.removeChild(r) : t.removeChild(r))
            : yt.removeChild(r.stateNode));
      break;
    case 18:
      yt !== null &&
        (vr
          ? ((t = yt),
            (r = r.stateNode),
            t.nodeType === 8
              ? $a(t.parentNode, r)
              : t.nodeType === 1 && $a(t, r),
            Qo(t))
          : $a(yt, r.stateNode));
      break;
    case 4:
      (n = yt),
        (i = vr),
        (yt = r.stateNode.containerInfo),
        (vr = !0),
        fn(t, e, r),
        (yt = n),
        (vr = i);
      break;
    case 0:
    case 11:
    case 14:
    case 15:
      if (
        !kt &&
        ((n = r.updateQueue), n !== null && ((n = n.lastEffect), n !== null))
      ) {
        i = n = n.next;
        do {
          var o = i,
            s = o.destroy;
          (o = o.tag),
            s !== void 0 && (o & 2 || o & 4) && cf(r, e, s),
            (i = i.next);
        } while (i !== n);
      }
      fn(t, e, r);
      break;
    case 1:
      if (
        !kt &&
        (Oi(r, e),
        (n = r.stateNode),
        typeof n.componentWillUnmount == "function")
      )
        try {
          (n.props = r.memoizedProps),
            (n.state = r.memoizedState),
            n.componentWillUnmount();
        } catch (l) {
          it(r, e, l);
        }
      fn(t, e, r);
      break;
    case 21:
      fn(t, e, r);
      break;
    case 22:
      r.mode & 1
        ? ((kt = (n = kt) || r.memoizedState !== null), fn(t, e, r), (kt = n))
        : fn(t, e, r);
      break;
    default:
      fn(t, e, r);
  }
}
function Qh(t) {
  var e = t.updateQueue;
  if (e !== null) {
    t.updateQueue = null;
    var r = t.stateNode;
    r === null && (r = t.stateNode = new K1()),
      e.forEach(function (n) {
        var i = ny.bind(null, t, n);
        r.has(n) || (r.add(n), n.then(i, i));
      });
  }
}
function ur(t, e) {
  var r = e.deletions;
  if (r !== null)
    for (var n = 0; n < r.length; n++) {
      var i = r[n];
      try {
        var o = t,
          s = e,
          l = s;
        e: for (; l !== null; ) {
          switch (l.tag) {
            case 5:
              (yt = l.stateNode), (vr = !1);
              break e;
            case 3:
              (yt = l.stateNode.containerInfo), (vr = !0);
              break e;
            case 4:
              (yt = l.stateNode.containerInfo), (vr = !0);
              break e;
          }
          l = l.return;
        }
        if (yt === null) throw Error(U(160));
        rm(o, s, i), (yt = null), (vr = !1);
        var a = i.alternate;
        a !== null && (a.return = null), (i.return = null);
      } catch (f) {
        it(i, e, f);
      }
    }
  if (e.subtreeFlags & 12854)
    for (e = e.child; e !== null; ) nm(e, t), (e = e.sibling);
}
function nm(t, e) {
  var r = t.alternate,
    n = t.flags;
  switch (t.tag) {
    case 0:
    case 11:
    case 14:
    case 15:
      if ((ur(e, t), kr(t), n & 4)) {
        try {
          Do(3, t, t.return), ta(3, t);
        } catch (M) {
          it(t, t.return, M);
        }
        try {
          Do(5, t, t.return);
        } catch (M) {
          it(t, t.return, M);
        }
      }
      break;
    case 1:
      ur(e, t), kr(t), n & 512 && r !== null && Oi(r, r.return);
      break;
    case 5:
      if (
        (ur(e, t),
        kr(t),
        n & 512 && r !== null && Oi(r, r.return),
        t.flags & 32)
      ) {
        var i = t.stateNode;
        try {
          Ho(i, "");
        } catch (M) {
          it(t, t.return, M);
        }
      }
      if (n & 4 && ((i = t.stateNode), i != null)) {
        var o = t.memoizedProps,
          s = r !== null ? r.memoizedProps : o,
          l = t.type,
          a = t.updateQueue;
        if (((t.updateQueue = null), a !== null))
          try {
            l === "input" && o.type === "radio" && o.name != null && _0(i, o),
              Du(l, s);
            var f = Du(l, o);
            for (s = 0; s < a.length; s += 2) {
              var h = a[s],
                p = a[s + 1];
              h === "style"
                ? P0(i, p)
                : h === "dangerouslySetInnerHTML"
                ? N0(i, p)
                : h === "children"
                ? Ho(i, p)
                : zf(i, h, p, f);
            }
            switch (l) {
              case "input":
                Iu(i, o);
                break;
              case "textarea":
                k0(i, o);
                break;
              case "select":
                var y = i._wrapperState.wasMultiple;
                i._wrapperState.wasMultiple = !!o.multiple;
                var S = o.value;
                S != null
                  ? Di(i, !!o.multiple, S, !1)
                  : y !== !!o.multiple &&
                    (o.defaultValue != null
                      ? Di(i, !!o.multiple, o.defaultValue, !0)
                      : Di(i, !!o.multiple, o.multiple ? [] : "", !1));
            }
            i[Yo] = o;
          } catch (M) {
            it(t, t.return, M);
          }
      }
      break;
    case 6:
      if ((ur(e, t), kr(t), n & 4)) {
        if (t.stateNode === null) throw Error(U(162));
        (i = t.stateNode), (o = t.memoizedProps);
        try {
          i.nodeValue = o;
        } catch (M) {
          it(t, t.return, M);
        }
      }
      break;
    case 3:
      if (
        (ur(e, t), kr(t), n & 4 && r !== null && r.memoizedState.isDehydrated)
      )
        try {
          Qo(e.containerInfo);
        } catch (M) {
          it(t, t.return, M);
        }
      break;
    case 4:
      ur(e, t), kr(t);
      break;
    case 13:
      ur(e, t),
        kr(t),
        (i = t.child),
        i.flags & 8192 &&
          ((o = i.memoizedState !== null),
          (i.stateNode.isHidden = o),
          !o ||
            (i.alternate !== null && i.alternate.memoizedState !== null) ||
            (wc = ot())),
        n & 4 && Qh(t);
      break;
    case 22:
      if (
        ((h = r !== null && r.memoizedState !== null),
        t.mode & 1 ? ((kt = (f = kt) || h), ur(e, t), (kt = f)) : ur(e, t),
        kr(t),
        n & 8192)
      ) {
        if (
          ((f = t.memoizedState !== null),
          (t.stateNode.isHidden = f) && !h && t.mode & 1)
        )
          for (K = t, h = t.child; h !== null; ) {
            for (p = K = h; K !== null; ) {
              switch (((y = K), (S = y.child), y.tag)) {
                case 0:
                case 11:
                case 14:
                case 15:
                  Do(4, y, y.return);
                  break;
                case 1:
                  Oi(y, y.return);
                  var P = y.stateNode;
                  if (typeof P.componentWillUnmount == "function") {
                    (n = y), (r = y.return);
                    try {
                      (e = n),
                        (P.props = e.memoizedProps),
                        (P.state = e.memoizedState),
                        P.componentWillUnmount();
                    } catch (M) {
                      it(n, r, M);
                    }
                  }
                  break;
                case 5:
                  Oi(y, y.return);
                  break;
                case 22:
                  if (y.memoizedState !== null) {
                    Vh(p);
                    continue;
                  }
              }
              S !== null ? ((S.return = y), (K = S)) : Vh(p);
            }
            h = h.sibling;
          }
        e: for (h = null, p = t; ; ) {
          if (p.tag === 5) {
            if (h === null) {
              h = p;
              try {
                (i = p.stateNode),
                  f
                    ? ((o = i.style),
                      typeof o.setProperty == "function"
                        ? o.setProperty("display", "none", "important")
                        : (o.display = "none"))
                    : ((l = p.stateNode),
                      (a = p.memoizedProps.style),
                      (s =
                        a != null && a.hasOwnProperty("display")
                          ? a.display
                          : null),
                      (l.style.display = C0("display", s)));
              } catch (M) {
                it(t, t.return, M);
              }
            }
          } else if (p.tag === 6) {
            if (h === null)
              try {
                p.stateNode.nodeValue = f ? "" : p.memoizedProps;
              } catch (M) {
                it(t, t.return, M);
              }
          } else if (
            ((p.tag !== 22 && p.tag !== 23) ||
              p.memoizedState === null ||
              p === t) &&
            p.child !== null
          ) {
            (p.child.return = p), (p = p.child);
            continue;
          }
          if (p === t) break e;
          for (; p.sibling === null; ) {
            if (p.return === null || p.return === t) break e;
            h === p && (h = null), (p = p.return);
          }
          h === p && (h = null), (p.sibling.return = p.return), (p = p.sibling);
        }
      }
      break;
    case 19:
      ur(e, t), kr(t), n & 4 && Qh(t);
      break;
    case 21:
      break;
    default:
      ur(e, t), kr(t);
  }
}
function kr(t) {
  var e = t.flags;
  if (e & 2) {
    try {
      e: {
        for (var r = t.return; r !== null; ) {
          if (tm(r)) {
            var n = r;
            break e;
          }
          r = r.return;
        }
        throw Error(U(160));
      }
      switch (n.tag) {
        case 5:
          var i = n.stateNode;
          n.flags & 32 && (Ho(i, ""), (n.flags &= -33));
          var o = Wh(t);
          pf(t, o, i);
          break;
        case 3:
        case 4:
          var s = n.stateNode.containerInfo,
            l = Wh(t);
          df(t, l, s);
          break;
        default:
          throw Error(U(161));
      }
    } catch (a) {
      it(t, t.return, a);
    }
    t.flags &= -3;
  }
  e & 4096 && (t.flags &= -4097);
}
function J1(t, e, r) {
  (K = t), im(t);
}
function im(t, e, r) {
  for (var n = (t.mode & 1) !== 0; K !== null; ) {
    var i = K,
      o = i.child;
    if (i.tag === 22 && n) {
      var s = i.memoizedState !== null || Ls;
      if (!s) {
        var l = i.alternate,
          a = (l !== null && l.memoizedState !== null) || kt;
        l = Ls;
        var f = kt;
        if (((Ls = s), (kt = a) && !f))
          for (K = i; K !== null; )
            (s = K),
              (a = s.child),
              s.tag === 22 && s.memoizedState !== null
                ? Jh(i)
                : a !== null
                ? ((a.return = s), (K = a))
                : Jh(i);
        for (; o !== null; ) (K = o), im(o), (o = o.sibling);
        (K = i), (Ls = l), (kt = f);
      }
      Kh(t);
    } else
      i.subtreeFlags & 8772 && o !== null ? ((o.return = i), (K = o)) : Kh(t);
  }
}
function Kh(t) {
  for (; K !== null; ) {
    var e = K;
    if (e.flags & 8772) {
      var r = e.alternate;
      try {
        if (e.flags & 8772)
          switch (e.tag) {
            case 0:
            case 11:
            case 15:
              kt || ta(5, e);
              break;
            case 1:
              var n = e.stateNode;
              if (e.flags & 4 && !kt)
                if (r === null) n.componentDidMount();
                else {
                  var i =
                    e.elementType === e.type
                      ? r.memoizedProps
                      : pr(e.type, r.memoizedProps);
                  n.componentDidUpdate(
                    i,
                    r.memoizedState,
                    n.__reactInternalSnapshotBeforeUpdate
                  );
                }
              var o = e.updateQueue;
              o !== null && Mh(e, o, n);
              break;
            case 3:
              var s = e.updateQueue;
              if (s !== null) {
                if (((r = null), e.child !== null))
                  switch (e.child.tag) {
                    case 5:
                      r = e.child.stateNode;
                      break;
                    case 1:
                      r = e.child.stateNode;
                  }
                Mh(e, s, r);
              }
              break;
            case 5:
              var l = e.stateNode;
              if (r === null && e.flags & 4) {
                r = l;
                var a = e.memoizedProps;
                switch (e.type) {
                  case "button":
                  case "input":
                  case "select":
                  case "textarea":
                    a.autoFocus && r.focus();
                    break;
                  case "img":
                    a.src && (r.src = a.src);
                }
              }
              break;
            case 6:
              break;
            case 4:
              break;
            case 12:
              break;
            case 13:
              if (e.memoizedState === null) {
                var f = e.alternate;
                if (f !== null) {
                  var h = f.memoizedState;
                  if (h !== null) {
                    var p = h.dehydrated;
                    p !== null && Qo(p);
                  }
                }
              }
              break;
            case 19:
            case 17:
            case 21:
            case 22:
            case 23:
            case 25:
              break;
            default:
              throw Error(U(163));
          }
        kt || (e.flags & 512 && hf(e));
      } catch (y) {
        it(e, e.return, y);
      }
    }
    if (e === t) {
      K = null;
      break;
    }
    if (((r = e.sibling), r !== null)) {
      (r.return = e.return), (K = r);
      break;
    }
    K = e.return;
  }
}
function Vh(t) {
  for (; K !== null; ) {
    var e = K;
    if (e === t) {
      K = null;
      break;
    }
    var r = e.sibling;
    if (r !== null) {
      (r.return = e.return), (K = r);
      break;
    }
    K = e.return;
  }
}
function Jh(t) {
  for (; K !== null; ) {
    var e = K;
    try {
      switch (e.tag) {
        case 0:
        case 11:
        case 15:
          var r = e.return;
          try {
            ta(4, e);
          } catch (a) {
            it(e, r, a);
          }
          break;
        case 1:
          var n = e.stateNode;
          if (typeof n.componentDidMount == "function") {
            var i = e.return;
            try {
              n.componentDidMount();
            } catch (a) {
              it(e, i, a);
            }
          }
          var o = e.return;
          try {
            hf(e);
          } catch (a) {
            it(e, o, a);
          }
          break;
        case 5:
          var s = e.return;
          try {
            hf(e);
          } catch (a) {
            it(e, s, a);
          }
      }
    } catch (a) {
      it(e, e.return, a);
    }
    if (e === t) {
      K = null;
      break;
    }
    var l = e.sibling;
    if (l !== null) {
      (l.return = e.return), (K = l);
      break;
    }
    K = e.return;
  }
}
var $1 = Math.ceil,
  Pl = rn.ReactCurrentDispatcher,
  yc = rn.ReactCurrentOwner,
  nr = rn.ReactCurrentBatchConfig,
  he = 0,
  vt = null,
  lt = null,
  wt = 0,
  Gt = 0,
  Li = On(0),
  ct = 0,
  ns = null,
  fi = 0,
  ra = 0,
  xc = 0,
  Fo = null,
  Lt = null,
  wc = 0,
  Xi = 1 / 0,
  zr = null,
  Ml = !1,
  mf = null,
  Sn = null,
  Bs = !1,
  yn = null,
  Rl = 0,
  jo = 0,
  vf = null,
  Zs = -1,
  el = 0;
function Rt() {
  return he & 6 ? ot() : Zs !== -1 ? Zs : (Zs = ot());
}
function Nn(t) {
  return t.mode & 1
    ? he & 2 && wt !== 0
      ? wt & -wt
      : T1.transition !== null
      ? (el === 0 && (el = z0()), el)
      : ((t = de),
        t !== 0 || ((t = window.event), (t = t === void 0 ? 16 : V0(t.type))),
        t)
    : 1;
}
function Ar(t, e, r, n) {
  if (50 < jo) throw ((jo = 0), (vf = null), Error(U(185)));
  ds(t, r, n),
    (!(he & 2) || t !== vt) &&
      (t === vt && (!(he & 2) && (ra |= r), ct === 4 && vn(t, wt)),
      Ut(t, n),
      r === 1 && he === 0 && !(e.mode & 1) && ((Xi = ot() + 500), Xl && Ln()));
}
function Ut(t, e) {
  var r = t.callbackNode;
  Tg(t, e);
  var n = pl(t, t === vt ? wt : 0);
  if (n === 0)
    r !== null && ih(r), (t.callbackNode = null), (t.callbackPriority = 0);
  else if (((e = n & -n), t.callbackPriority !== e)) {
    if ((r != null && ih(r), e === 1))
      t.tag === 0 ? I1($h.bind(null, t)) : dp($h.bind(null, t)),
        C1(function () {
          !(he & 6) && Ln();
        }),
        (r = null);
    else {
      switch (H0(n)) {
        case 1:
          r = Qf;
          break;
        case 4:
          r = j0;
          break;
        case 16:
          r = dl;
          break;
        case 536870912:
          r = U0;
          break;
        default:
          r = dl;
      }
      r = hm(r, om.bind(null, t));
    }
    (t.callbackPriority = e), (t.callbackNode = r);
  }
}
function om(t, e) {
  if (((Zs = -1), (el = 0), he & 6)) throw Error(U(327));
  var r = t.callbackNode;
  if (Hi() && t.callbackNode !== r) return null;
  var n = pl(t, t === vt ? wt : 0);
  if (n === 0) return null;
  if (n & 30 || n & t.expiredLanes || e) e = Il(t, n);
  else {
    e = n;
    var i = he;
    he |= 2;
    var o = lm();
    (vt !== t || wt !== e) && ((zr = null), (Xi = ot() + 500), oi(t, e));
    do
      try {
        Z1();
        break;
      } catch (l) {
        sm(t, l);
      }
    while (1);
    oc(),
      (Pl.current = o),
      (he = i),
      lt !== null ? (e = 0) : ((vt = null), (wt = 0), (e = ct));
  }
  if (e !== 0) {
    if (
      (e === 2 && ((i = Hu(t)), i !== 0 && ((n = i), (e = gf(t, i)))), e === 1)
    )
      throw ((r = ns), oi(t, 0), vn(t, n), Ut(t, ot()), r);
    if (e === 6) vn(t, n);
    else {
      if (
        ((i = t.current.alternate),
        !(n & 30) &&
          !Y1(i) &&
          ((e = Il(t, n)),
          e === 2 && ((o = Hu(t)), o !== 0 && ((n = o), (e = gf(t, o)))),
          e === 1))
      )
        throw ((r = ns), oi(t, 0), vn(t, n), Ut(t, ot()), r);
      switch (((t.finishedWork = i), (t.finishedLanes = n), e)) {
        case 0:
        case 1:
          throw Error(U(345));
        case 2:
          ei(t, Lt, zr);
          break;
        case 3:
          if (
            (vn(t, n), (n & 130023424) === n && ((e = wc + 500 - ot()), 10 < e))
          ) {
            if (pl(t, 0) !== 0) break;
            if (((i = t.suspendedLanes), (i & n) !== n)) {
              Rt(), (t.pingedLanes |= t.suspendedLanes & i);
              break;
            }
            t.timeoutHandle = $u(ei.bind(null, t, Lt, zr), e);
            break;
          }
          ei(t, Lt, zr);
          break;
        case 4:
          if ((vn(t, n), (n & 4194240) === n)) break;
          for (e = t.eventTimes, i = -1; 0 < n; ) {
            var s = 31 - wr(n);
            (o = 1 << s), (s = e[s]), s > i && (i = s), (n &= ~o);
          }
          if (
            ((n = i),
            (n = ot() - n),
            (n =
              (120 > n
                ? 120
                : 480 > n
                ? 480
                : 1080 > n
                ? 1080
                : 1920 > n
                ? 1920
                : 3e3 > n
                ? 3e3
                : 4320 > n
                ? 4320
                : 1960 * $1(n / 1960)) - n),
            10 < n)
          ) {
            t.timeoutHandle = $u(ei.bind(null, t, Lt, zr), n);
            break;
          }
          ei(t, Lt, zr);
          break;
        case 5:
          ei(t, Lt, zr);
          break;
        default:
          throw Error(U(329));
      }
    }
  }
  return Ut(t, ot()), t.callbackNode === r ? om.bind(null, t) : null;
}
function gf(t, e) {
  var r = Fo;
  return (
    t.current.memoizedState.isDehydrated && (oi(t, e).flags |= 256),
    (t = Il(t, e)),
    t !== 2 && ((e = Lt), (Lt = r), e !== null && yf(e)),
    t
  );
}
function yf(t) {
  Lt === null ? (Lt = t) : Lt.push.apply(Lt, t);
}
function Y1(t) {
  for (var e = t; ; ) {
    if (e.flags & 16384) {
      var r = e.updateQueue;
      if (r !== null && ((r = r.stores), r !== null))
        for (var n = 0; n < r.length; n++) {
          var i = r[n],
            o = i.getSnapshot;
          i = i.value;
          try {
            if (!Er(o(), i)) return !1;
          } catch {
            return !1;
          }
        }
    }
    if (((r = e.child), e.subtreeFlags & 16384 && r !== null))
      (r.return = e), (e = r);
    else {
      if (e === t) break;
      for (; e.sibling === null; ) {
        if (e.return === null || e.return === t) return !0;
        e = e.return;
      }
      (e.sibling.return = e.return), (e = e.sibling);
    }
  }
  return !0;
}
function vn(t, e) {
  for (
    e &= ~xc,
      e &= ~ra,
      t.suspendedLanes |= e,
      t.pingedLanes &= ~e,
      t = t.expirationTimes;
    0 < e;

  ) {
    var r = 31 - wr(e),
      n = 1 << r;
    (t[r] = -1), (e &= ~n);
  }
}
function $h(t) {
  if (he & 6) throw Error(U(327));
  Hi();
  var e = pl(t, 0);
  if (!(e & 1)) return Ut(t, ot()), null;
  var r = Il(t, e);
  if (t.tag !== 0 && r === 2) {
    var n = Hu(t);
    n !== 0 && ((e = n), (r = gf(t, n)));
  }
  if (r === 1) throw ((r = ns), oi(t, 0), vn(t, e), Ut(t, ot()), r);
  if (r === 6) throw Error(U(345));
  return (
    (t.finishedWork = t.current.alternate),
    (t.finishedLanes = e),
    ei(t, Lt, zr),
    Ut(t, ot()),
    null
  );
}
function Ac(t, e) {
  var r = he;
  he |= 1;
  try {
    return t(e);
  } finally {
    (he = r), he === 0 && ((Xi = ot() + 500), Xl && Ln());
  }
}
function ci(t) {
  yn !== null && yn.tag === 0 && !(he & 6) && Hi();
  var e = he;
  he |= 1;
  var r = nr.transition,
    n = de;
  try {
    if (((nr.transition = null), (de = 1), t)) return t();
  } finally {
    (de = n), (nr.transition = r), (he = e), !(he & 6) && Ln();
  }
}
function Ec() {
  (Gt = Li.current), $e(Li);
}
function oi(t, e) {
  (t.finishedWork = null), (t.finishedLanes = 0);
  var r = t.timeoutHandle;
  if ((r !== -1 && ((t.timeoutHandle = -1), N1(r)), lt !== null))
    for (r = lt.return; r !== null; ) {
      var n = r;
      switch ((rc(n), n.tag)) {
        case 1:
          (n = n.type.childContextTypes), n != null && xl();
          break;
        case 3:
          $i(), $e(Ft), $e(Ct), cc();
          break;
        case 5:
          fc(n);
          break;
        case 4:
          $i();
          break;
        case 13:
          $e(et);
          break;
        case 19:
          $e(et);
          break;
        case 10:
          sc(n.type._context);
          break;
        case 22:
        case 23:
          Ec();
      }
      r = r.return;
    }
  if (
    ((vt = t),
    (lt = t = Cn(t.current, null)),
    (wt = Gt = e),
    (ct = 0),
    (ns = null),
    (xc = ra = fi = 0),
    (Lt = Fo = null),
    ri !== null)
  ) {
    for (e = 0; e < ri.length; e++)
      if (((r = ri[e]), (n = r.interleaved), n !== null)) {
        r.interleaved = null;
        var i = n.next,
          o = r.pending;
        if (o !== null) {
          var s = o.next;
          (o.next = i), (n.next = s);
        }
        r.pending = n;
      }
    ri = null;
  }
  return t;
}
function sm(t, e) {
  do {
    var r = lt;
    try {
      if ((oc(), ($s.current = Cl), Nl)) {
        for (var n = tt.memoizedState; n !== null; ) {
          var i = n.queue;
          i !== null && (i.pending = null), (n = n.next);
        }
        Nl = !1;
      }
      if (
        ((ui = 0),
        (pt = ft = tt = null),
        (Bo = !1),
        (es = 0),
        (yc.current = null),
        r === null || r.return === null)
      ) {
        (ct = 1), (ns = e), (lt = null);
        break;
      }
      e: {
        var o = t,
          s = r.return,
          l = r,
          a = e;
        if (
          ((e = wt),
          (l.flags |= 32768),
          a !== null && typeof a == "object" && typeof a.then == "function")
        ) {
          var f = a,
            h = l,
            p = h.tag;
          if (!(h.mode & 1) && (p === 0 || p === 11 || p === 15)) {
            var y = h.alternate;
            y
              ? ((h.updateQueue = y.updateQueue),
                (h.memoizedState = y.memoizedState),
                (h.lanes = y.lanes))
              : ((h.updateQueue = null), (h.memoizedState = null));
          }
          var S = Dh(s);
          if (S !== null) {
            (S.flags &= -257),
              Fh(S, s, l, o, e),
              S.mode & 1 && Bh(o, f, e),
              (e = S),
              (a = f);
            var P = e.updateQueue;
            if (P === null) {
              var M = new Set();
              M.add(a), (e.updateQueue = M);
            } else P.add(a);
            break e;
          } else {
            if (!(e & 1)) {
              Bh(o, f, e), bc();
              break e;
            }
            a = Error(U(426));
          }
        } else if (Ye && l.mode & 1) {
          var I = Dh(s);
          if (I !== null) {
            !(I.flags & 65536) && (I.flags |= 256),
              Fh(I, s, l, o, e),
              nc(Yi(a, l));
            break e;
          }
        }
        (o = a = Yi(a, l)),
          ct !== 4 && (ct = 2),
          Fo === null ? (Fo = [o]) : Fo.push(o),
          (o = s);
        do {
          switch (o.tag) {
            case 3:
              (o.flags |= 65536), (e &= -e), (o.lanes |= e);
              var w = Gp(o, a, e);
              Ph(o, w);
              break e;
            case 1:
              l = a;
              var x = o.type,
                N = o.stateNode;
              if (
                !(o.flags & 128) &&
                (typeof x.getDerivedStateFromError == "function" ||
                  (N !== null &&
                    typeof N.componentDidCatch == "function" &&
                    (Sn === null || !Sn.has(N))))
              ) {
                (o.flags |= 65536), (e &= -e), (o.lanes |= e);
                var T = qp(o, l, e);
                Ph(o, T);
                break e;
              }
          }
          o = o.return;
        } while (o !== null);
      }
      um(r);
    } catch (L) {
      (e = L), lt === r && r !== null && (lt = r = r.return);
      continue;
    }
    break;
  } while (1);
}
function lm() {
  var t = Pl.current;
  return (Pl.current = Cl), t === null ? Cl : t;
}
function bc() {
  (ct === 0 || ct === 3 || ct === 2) && (ct = 4),
    vt === null || (!(fi & 268435455) && !(ra & 268435455)) || vn(vt, wt);
}
function Il(t, e) {
  var r = he;
  he |= 2;
  var n = lm();
  (vt !== t || wt !== e) && ((zr = null), oi(t, e));
  do
    try {
      X1();
      break;
    } catch (i) {
      sm(t, i);
    }
  while (1);
  if ((oc(), (he = r), (Pl.current = n), lt !== null)) throw Error(U(261));
  return (vt = null), (wt = 0), ct;
}
function X1() {
  for (; lt !== null; ) am(lt);
}
function Z1() {
  for (; lt !== null && !_g(); ) am(lt);
}
function am(t) {
  var e = cm(t.alternate, t, Gt);
  (t.memoizedProps = t.pendingProps),
    e === null ? um(t) : (lt = e),
    (yc.current = null);
}
function um(t) {
  var e = t;
  do {
    var r = e.alternate;
    if (((t = e.return), e.flags & 32768)) {
      if (((r = Q1(r, e)), r !== null)) {
        (r.flags &= 32767), (lt = r);
        return;
      }
      if (t !== null)
        (t.flags |= 32768), (t.subtreeFlags = 0), (t.deletions = null);
      else {
        (ct = 6), (lt = null);
        return;
      }
    } else if (((r = W1(r, e, Gt)), r !== null)) {
      lt = r;
      return;
    }
    if (((e = e.sibling), e !== null)) {
      lt = e;
      return;
    }
    lt = e = t;
  } while (e !== null);
  ct === 0 && (ct = 5);
}
function ei(t, e, r) {
  var n = de,
    i = nr.transition;
  try {
    (nr.transition = null), (de = 1), ey(t, e, r, n);
  } finally {
    (nr.transition = i), (de = n);
  }
  return null;
}
function ey(t, e, r, n) {
  do Hi();
  while (yn !== null);
  if (he & 6) throw Error(U(327));
  r = t.finishedWork;
  var i = t.finishedLanes;
  if (r === null) return null;
  if (((t.finishedWork = null), (t.finishedLanes = 0), r === t.current))
    throw Error(U(177));
  (t.callbackNode = null), (t.callbackPriority = 0);
  var o = r.lanes | r.childLanes;
  if (
    (Og(t, o),
    t === vt && ((lt = vt = null), (wt = 0)),
    (!(r.subtreeFlags & 2064) && !(r.flags & 2064)) ||
      Bs ||
      ((Bs = !0),
      hm(dl, function () {
        return Hi(), null;
      })),
    (o = (r.flags & 15990) !== 0),
    r.subtreeFlags & 15990 || o)
  ) {
    (o = nr.transition), (nr.transition = null);
    var s = de;
    de = 1;
    var l = he;
    (he |= 4),
      (yc.current = null),
      V1(t, r),
      nm(r, t),
      w1(Vu),
      (ml = !!Ku),
      (Vu = Ku = null),
      (t.current = r),
      J1(r),
      kg(),
      (he = l),
      (de = s),
      (nr.transition = o);
  } else t.current = r;
  if (
    (Bs && ((Bs = !1), (yn = t), (Rl = i)),
    (o = t.pendingLanes),
    o === 0 && (Sn = null),
    Cg(r.stateNode),
    Ut(t, ot()),
    e !== null)
  )
    for (n = t.onRecoverableError, r = 0; r < e.length; r++)
      (i = e[r]), n(i.value, { componentStack: i.stack, digest: i.digest });
  if (Ml) throw ((Ml = !1), (t = mf), (mf = null), t);
  return (
    Rl & 1 && t.tag !== 0 && Hi(),
    (o = t.pendingLanes),
    o & 1 ? (t === vf ? jo++ : ((jo = 0), (vf = t))) : (jo = 0),
    Ln(),
    null
  );
}
function Hi() {
  if (yn !== null) {
    var t = H0(Rl),
      e = nr.transition,
      r = de;
    try {
      if (((nr.transition = null), (de = 16 > t ? 16 : t), yn === null))
        var n = !1;
      else {
        if (((t = yn), (yn = null), (Rl = 0), he & 6)) throw Error(U(331));
        var i = he;
        for (he |= 4, K = t.current; K !== null; ) {
          var o = K,
            s = o.child;
          if (K.flags & 16) {
            var l = o.deletions;
            if (l !== null) {
              for (var a = 0; a < l.length; a++) {
                var f = l[a];
                for (K = f; K !== null; ) {
                  var h = K;
                  switch (h.tag) {
                    case 0:
                    case 11:
                    case 15:
                      Do(8, h, o);
                  }
                  var p = h.child;
                  if (p !== null) (p.return = h), (K = p);
                  else
                    for (; K !== null; ) {
                      h = K;
                      var y = h.sibling,
                        S = h.return;
                      if ((em(h), h === f)) {
                        K = null;
                        break;
                      }
                      if (y !== null) {
                        (y.return = S), (K = y);
                        break;
                      }
                      K = S;
                    }
                }
              }
              var P = o.alternate;
              if (P !== null) {
                var M = P.child;
                if (M !== null) {
                  P.child = null;
                  do {
                    var I = M.sibling;
                    (M.sibling = null), (M = I);
                  } while (M !== null);
                }
              }
              K = o;
            }
          }
          if (o.subtreeFlags & 2064 && s !== null) (s.return = o), (K = s);
          else
            e: for (; K !== null; ) {
              if (((o = K), o.flags & 2048))
                switch (o.tag) {
                  case 0:
                  case 11:
                  case 15:
                    Do(9, o, o.return);
                }
              var w = o.sibling;
              if (w !== null) {
                (w.return = o.return), (K = w);
                break e;
              }
              K = o.return;
            }
        }
        var x = t.current;
        for (K = x; K !== null; ) {
          s = K;
          var N = s.child;
          if (s.subtreeFlags & 2064 && N !== null) (N.return = s), (K = N);
          else
            e: for (s = x; K !== null; ) {
              if (((l = K), l.flags & 2048))
                try {
                  switch (l.tag) {
                    case 0:
                    case 11:
                    case 15:
                      ta(9, l);
                  }
                } catch (L) {
                  it(l, l.return, L);
                }
              if (l === s) {
                K = null;
                break e;
              }
              var T = l.sibling;
              if (T !== null) {
                (T.return = l.return), (K = T);
                break e;
              }
              K = l.return;
            }
        }
        if (
          ((he = i), Ln(), Ir && typeof Ir.onPostCommitFiberRoot == "function")
        )
          try {
            Ir.onPostCommitFiberRoot(Kl, t);
          } catch {}
        n = !0;
      }
      return n;
    } finally {
      (de = r), (nr.transition = e);
    }
  }
  return !1;
}
function Yh(t, e, r) {
  (e = Yi(r, e)),
    (e = Gp(t, e, 1)),
    (t = kn(t, e, 1)),
    (e = Rt()),
    t !== null && (ds(t, 1, e), Ut(t, e));
}
function it(t, e, r) {
  if (t.tag === 3) Yh(t, t, r);
  else
    for (; e !== null; ) {
      if (e.tag === 3) {
        Yh(e, t, r);
        break;
      } else if (e.tag === 1) {
        var n = e.stateNode;
        if (
          typeof e.type.getDerivedStateFromError == "function" ||
          (typeof n.componentDidCatch == "function" &&
            (Sn === null || !Sn.has(n)))
        ) {
          (t = Yi(r, t)),
            (t = qp(e, t, 1)),
            (e = kn(e, t, 1)),
            (t = Rt()),
            e !== null && (ds(e, 1, t), Ut(e, t));
          break;
        }
      }
      e = e.return;
    }
}
function ty(t, e, r) {
  var n = t.pingCache;
  n !== null && n.delete(e),
    (e = Rt()),
    (t.pingedLanes |= t.suspendedLanes & r),
    vt === t &&
      (wt & r) === r &&
      (ct === 4 || (ct === 3 && (wt & 130023424) === wt && 500 > ot() - wc)
        ? oi(t, 0)
        : (xc |= r)),
    Ut(t, e);
}
function fm(t, e) {
  e === 0 &&
    (t.mode & 1
      ? ((e = Ss), (Ss <<= 1), !(Ss & 130023424) && (Ss = 4194304))
      : (e = 1));
  var r = Rt();
  (t = Yr(t, e)), t !== null && (ds(t, e, r), Ut(t, r));
}
function ry(t) {
  var e = t.memoizedState,
    r = 0;
  e !== null && (r = e.retryLane), fm(t, r);
}
function ny(t, e) {
  var r = 0;
  switch (t.tag) {
    case 13:
      var n = t.stateNode,
        i = t.memoizedState;
      i !== null && (r = i.retryLane);
      break;
    case 19:
      n = t.stateNode;
      break;
    default:
      throw Error(U(314));
  }
  n !== null && n.delete(e), fm(t, r);
}
var cm;
cm = function (t, e, r) {
  if (t !== null)
    if (t.memoizedProps !== e.pendingProps || Ft.current) Bt = !0;
    else {
      if (!(t.lanes & r) && !(e.flags & 128)) return (Bt = !1), q1(t, e, r);
      Bt = !!(t.flags & 131072);
    }
  else (Bt = !1), Ye && e.flags & 1048576 && pp(e, El, e.index);
  switch (((e.lanes = 0), e.tag)) {
    case 2:
      var n = e.type;
      Xs(t, e), (t = e.pendingProps);
      var i = Ki(e, Ct.current);
      zi(e, r), (i = dc(null, e, n, t, i, r));
      var o = pc();
      return (
        (e.flags |= 1),
        typeof i == "object" &&
        i !== null &&
        typeof i.render == "function" &&
        i.$$typeof === void 0
          ? ((e.tag = 1),
            (e.memoizedState = null),
            (e.updateQueue = null),
            jt(n) ? ((o = !0), wl(e)) : (o = !1),
            (e.memoizedState =
              i.state !== null && i.state !== void 0 ? i.state : null),
            ac(e),
            (i.updater = Zl),
            (e.stateNode = i),
            (i._reactInternals = e),
            nf(e, n, t, r),
            (e = lf(null, e, n, !0, o, r)))
          : ((e.tag = 0), Ye && o && tc(e), Pt(null, e, i, r), (e = e.child)),
        e
      );
    case 16:
      n = e.elementType;
      e: {
        switch (
          (Xs(t, e),
          (t = e.pendingProps),
          (i = n._init),
          (n = i(n._payload)),
          (e.type = n),
          (i = e.tag = oy(n)),
          (t = pr(n, t)),
          i)
        ) {
          case 0:
            e = sf(null, e, n, t, r);
            break e;
          case 1:
            e = zh(null, e, n, t, r);
            break e;
          case 11:
            e = jh(null, e, n, t, r);
            break e;
          case 14:
            e = Uh(null, e, n, pr(n.type, t), r);
            break e;
        }
        throw Error(U(306, n, ""));
      }
      return e;
    case 0:
      return (
        (n = e.type),
        (i = e.pendingProps),
        (i = e.elementType === n ? i : pr(n, i)),
        sf(t, e, n, i, r)
      );
    case 1:
      return (
        (n = e.type),
        (i = e.pendingProps),
        (i = e.elementType === n ? i : pr(n, i)),
        zh(t, e, n, i, r)
      );
    case 3:
      e: {
        if ((Vp(e), t === null)) throw Error(U(387));
        (n = e.pendingProps),
          (o = e.memoizedState),
          (i = o.element),
          yp(t, e),
          kl(e, n, null, r);
        var s = e.memoizedState;
        if (((n = s.element), o.isDehydrated))
          if (
            ((o = {
              element: n,
              isDehydrated: !1,
              cache: s.cache,
              pendingSuspenseBoundaries: s.pendingSuspenseBoundaries,
              transitions: s.transitions,
            }),
            (e.updateQueue.baseState = o),
            (e.memoizedState = o),
            e.flags & 256)
          ) {
            (i = Yi(Error(U(423)), e)), (e = Hh(t, e, n, r, i));
            break e;
          } else if (n !== i) {
            (i = Yi(Error(U(424)), e)), (e = Hh(t, e, n, r, i));
            break e;
          } else
            for (
              Kt = _n(e.stateNode.containerInfo.firstChild),
                Vt = e,
                Ye = !0,
                gr = null,
                r = Ep(e, null, n, r),
                e.child = r;
              r;

            )
              (r.flags = (r.flags & -3) | 4096), (r = r.sibling);
        else {
          if ((Vi(), n === i)) {
            e = Xr(t, e, r);
            break e;
          }
          Pt(t, e, n, r);
        }
        e = e.child;
      }
      return e;
    case 5:
      return (
        bp(e),
        t === null && ef(e),
        (n = e.type),
        (i = e.pendingProps),
        (o = t !== null ? t.memoizedProps : null),
        (s = i.children),
        Ju(n, i) ? (s = null) : o !== null && Ju(n, o) && (e.flags |= 32),
        Kp(t, e),
        Pt(t, e, s, r),
        e.child
      );
    case 6:
      return t === null && ef(e), null;
    case 13:
      return Jp(t, e, r);
    case 4:
      return (
        uc(e, e.stateNode.containerInfo),
        (n = e.pendingProps),
        t === null ? (e.child = Ji(e, null, n, r)) : Pt(t, e, n, r),
        e.child
      );
    case 11:
      return (
        (n = e.type),
        (i = e.pendingProps),
        (i = e.elementType === n ? i : pr(n, i)),
        jh(t, e, n, i, r)
      );
    case 7:
      return Pt(t, e, e.pendingProps, r), e.child;
    case 8:
      return Pt(t, e, e.pendingProps.children, r), e.child;
    case 12:
      return Pt(t, e, e.pendingProps.children, r), e.child;
    case 10:
      e: {
        if (
          ((n = e.type._context),
          (i = e.pendingProps),
          (o = e.memoizedProps),
          (s = i.value),
          ve(bl, n._currentValue),
          (n._currentValue = s),
          o !== null)
        )
          if (Er(o.value, s)) {
            if (o.children === i.children && !Ft.current) {
              e = Xr(t, e, r);
              break e;
            }
          } else
            for (o = e.child, o !== null && (o.return = e); o !== null; ) {
              var l = o.dependencies;
              if (l !== null) {
                s = o.child;
                for (var a = l.firstContext; a !== null; ) {
                  if (a.context === n) {
                    if (o.tag === 1) {
                      (a = Vr(-1, r & -r)), (a.tag = 2);
                      var f = o.updateQueue;
                      if (f !== null) {
                        f = f.shared;
                        var h = f.pending;
                        h === null
                          ? (a.next = a)
                          : ((a.next = h.next), (h.next = a)),
                          (f.pending = a);
                      }
                    }
                    (o.lanes |= r),
                      (a = o.alternate),
                      a !== null && (a.lanes |= r),
                      tf(o.return, r, e),
                      (l.lanes |= r);
                    break;
                  }
                  a = a.next;
                }
              } else if (o.tag === 10) s = o.type === e.type ? null : o.child;
              else if (o.tag === 18) {
                if (((s = o.return), s === null)) throw Error(U(341));
                (s.lanes |= r),
                  (l = s.alternate),
                  l !== null && (l.lanes |= r),
                  tf(s, r, e),
                  (s = o.sibling);
              } else s = o.child;
              if (s !== null) s.return = o;
              else
                for (s = o; s !== null; ) {
                  if (s === e) {
                    s = null;
                    break;
                  }
                  if (((o = s.sibling), o !== null)) {
                    (o.return = s.return), (s = o);
                    break;
                  }
                  s = s.return;
                }
              o = s;
            }
        Pt(t, e, i.children, r), (e = e.child);
      }
      return e;
    case 9:
      return (
        (i = e.type),
        (n = e.pendingProps.children),
        zi(e, r),
        (i = ir(i)),
        (n = n(i)),
        (e.flags |= 1),
        Pt(t, e, n, r),
        e.child
      );
    case 14:
      return (
        (n = e.type),
        (i = pr(n, e.pendingProps)),
        (i = pr(n.type, i)),
        Uh(t, e, n, i, r)
      );
    case 15:
      return Wp(t, e, e.type, e.pendingProps, r);
    case 17:
      return (
        (n = e.type),
        (i = e.pendingProps),
        (i = e.elementType === n ? i : pr(n, i)),
        Xs(t, e),
        (e.tag = 1),
        jt(n) ? ((t = !0), wl(e)) : (t = !1),
        zi(e, r),
        wp(e, n, i),
        nf(e, n, i, r),
        lf(null, e, n, !0, t, r)
      );
    case 19:
      return $p(t, e, r);
    case 22:
      return Qp(t, e, r);
  }
  throw Error(U(156, e.tag));
};
function hm(t, e) {
  return F0(t, e);
}
function iy(t, e, r, n) {
  (this.tag = t),
    (this.key = r),
    (this.sibling =
      this.child =
      this.return =
      this.stateNode =
      this.type =
      this.elementType =
        null),
    (this.index = 0),
    (this.ref = null),
    (this.pendingProps = e),
    (this.dependencies =
      this.memoizedState =
      this.updateQueue =
      this.memoizedProps =
        null),
    (this.mode = n),
    (this.subtreeFlags = this.flags = 0),
    (this.deletions = null),
    (this.childLanes = this.lanes = 0),
    (this.alternate = null);
}
function rr(t, e, r, n) {
  return new iy(t, e, r, n);
}
function _c(t) {
  return (t = t.prototype), !(!t || !t.isReactComponent);
}
function oy(t) {
  if (typeof t == "function") return _c(t) ? 1 : 0;
  if (t != null) {
    if (((t = t.$$typeof), t === Gf)) return 11;
    if (t === qf) return 14;
  }
  return 2;
}
function Cn(t, e) {
  var r = t.alternate;
  return (
    r === null
      ? ((r = rr(t.tag, e, t.key, t.mode)),
        (r.elementType = t.elementType),
        (r.type = t.type),
        (r.stateNode = t.stateNode),
        (r.alternate = t),
        (t.alternate = r))
      : ((r.pendingProps = e),
        (r.type = t.type),
        (r.flags = 0),
        (r.subtreeFlags = 0),
        (r.deletions = null)),
    (r.flags = t.flags & 14680064),
    (r.childLanes = t.childLanes),
    (r.lanes = t.lanes),
    (r.child = t.child),
    (r.memoizedProps = t.memoizedProps),
    (r.memoizedState = t.memoizedState),
    (r.updateQueue = t.updateQueue),
    (e = t.dependencies),
    (r.dependencies =
      e === null ? null : { lanes: e.lanes, firstContext: e.firstContext }),
    (r.sibling = t.sibling),
    (r.index = t.index),
    (r.ref = t.ref),
    r
  );
}
function tl(t, e, r, n, i, o) {
  var s = 2;
  if (((n = t), typeof t == "function")) _c(t) && (s = 1);
  else if (typeof t == "string") s = 5;
  else
    e: switch (t) {
      case ki:
        return si(r.children, i, o, e);
      case Hf:
        (s = 8), (i |= 8);
        break;
      case Nu:
        return (
          (t = rr(12, r, e, i | 2)), (t.elementType = Nu), (t.lanes = o), t
        );
      case Cu:
        return (t = rr(13, r, e, i)), (t.elementType = Cu), (t.lanes = o), t;
      case Pu:
        return (t = rr(19, r, e, i)), (t.elementType = Pu), (t.lanes = o), t;
      case A0:
        return na(r, i, o, e);
      default:
        if (typeof t == "object" && t !== null)
          switch (t.$$typeof) {
            case x0:
              s = 10;
              break e;
            case w0:
              s = 9;
              break e;
            case Gf:
              s = 11;
              break e;
            case qf:
              s = 14;
              break e;
            case dn:
              (s = 16), (n = null);
              break e;
          }
        throw Error(U(130, t == null ? t : typeof t, ""));
    }
  return (
    (e = rr(s, r, e, i)), (e.elementType = t), (e.type = n), (e.lanes = o), e
  );
}
function si(t, e, r, n) {
  return (t = rr(7, t, n, e)), (t.lanes = r), t;
}
function na(t, e, r, n) {
  return (
    (t = rr(22, t, n, e)),
    (t.elementType = A0),
    (t.lanes = r),
    (t.stateNode = { isHidden: !1 }),
    t
  );
}
function iu(t, e, r) {
  return (t = rr(6, t, null, e)), (t.lanes = r), t;
}
function ou(t, e, r) {
  return (
    (e = rr(4, t.children !== null ? t.children : [], t.key, e)),
    (e.lanes = r),
    (e.stateNode = {
      containerInfo: t.containerInfo,
      pendingChildren: null,
      implementation: t.implementation,
    }),
    e
  );
}
function sy(t, e, r, n, i) {
  (this.tag = e),
    (this.containerInfo = t),
    (this.finishedWork =
      this.pingCache =
      this.current =
      this.pendingChildren =
        null),
    (this.timeoutHandle = -1),
    (this.callbackNode = this.pendingContext = this.context = null),
    (this.callbackPriority = 0),
    (this.eventTimes = ja(0)),
    (this.expirationTimes = ja(-1)),
    (this.entangledLanes =
      this.finishedLanes =
      this.mutableReadLanes =
      this.expiredLanes =
      this.pingedLanes =
      this.suspendedLanes =
      this.pendingLanes =
        0),
    (this.entanglements = ja(0)),
    (this.identifierPrefix = n),
    (this.onRecoverableError = i),
    (this.mutableSourceEagerHydrationData = null);
}
function kc(t, e, r, n, i, o, s, l, a) {
  return (
    (t = new sy(t, e, r, l, a)),
    e === 1 ? ((e = 1), o === !0 && (e |= 8)) : (e = 0),
    (o = rr(3, null, null, e)),
    (t.current = o),
    (o.stateNode = t),
    (o.memoizedState = {
      element: n,
      isDehydrated: r,
      cache: null,
      transitions: null,
      pendingSuspenseBoundaries: null,
    }),
    ac(o),
    t
  );
}
function ly(t, e, r) {
  var n = 3 < arguments.length && arguments[3] !== void 0 ? arguments[3] : null;
  return {
    $$typeof: _i,
    key: n == null ? null : "" + n,
    children: t,
    containerInfo: e,
    implementation: r,
  };
}
function dm(t) {
  if (!t) return Rn;
  t = t._reactInternals;
  e: {
    if (vi(t) !== t || t.tag !== 1) throw Error(U(170));
    var e = t;
    do {
      switch (e.tag) {
        case 3:
          e = e.stateNode.context;
          break e;
        case 1:
          if (jt(e.type)) {
            e = e.stateNode.__reactInternalMemoizedMergedChildContext;
            break e;
          }
      }
      e = e.return;
    } while (e !== null);
    throw Error(U(171));
  }
  if (t.tag === 1) {
    var r = t.type;
    if (jt(r)) return hp(t, r, e);
  }
  return e;
}
function pm(t, e, r, n, i, o, s, l, a) {
  return (
    (t = kc(r, n, !0, t, i, o, s, l, a)),
    (t.context = dm(null)),
    (r = t.current),
    (n = Rt()),
    (i = Nn(r)),
    (o = Vr(n, i)),
    (o.callback = e ?? null),
    kn(r, o, i),
    (t.current.lanes = i),
    ds(t, i, n),
    Ut(t, n),
    t
  );
}
function ia(t, e, r, n) {
  var i = e.current,
    o = Rt(),
    s = Nn(i);
  return (
    (r = dm(r)),
    e.context === null ? (e.context = r) : (e.pendingContext = r),
    (e = Vr(o, s)),
    (e.payload = { element: t }),
    (n = n === void 0 ? null : n),
    n !== null && (e.callback = n),
    (t = kn(i, e, s)),
    t !== null && (Ar(t, i, s, o), Js(t, i, s)),
    s
  );
}
function Tl(t) {
  if (((t = t.current), !t.child)) return null;
  switch (t.child.tag) {
    case 5:
      return t.child.stateNode;
    default:
      return t.child.stateNode;
  }
}
function Xh(t, e) {
  if (((t = t.memoizedState), t !== null && t.dehydrated !== null)) {
    var r = t.retryLane;
    t.retryLane = r !== 0 && r < e ? r : e;
  }
}
function Sc(t, e) {
  Xh(t, e), (t = t.alternate) && Xh(t, e);
}
function ay() {
  return null;
}
var mm =
  typeof reportError == "function"
    ? reportError
    : function (t) {
        console.error(t);
      };
function Nc(t) {
  this._internalRoot = t;
}
oa.prototype.render = Nc.prototype.render = function (t) {
  var e = this._internalRoot;
  if (e === null) throw Error(U(409));
  ia(t, e, null, null);
};
oa.prototype.unmount = Nc.prototype.unmount = function () {
  var t = this._internalRoot;
  if (t !== null) {
    this._internalRoot = null;
    var e = t.containerInfo;
    ci(function () {
      ia(null, t, null, null);
    }),
      (e[$r] = null);
  }
};
function oa(t) {
  this._internalRoot = t;
}
oa.prototype.unstable_scheduleHydration = function (t) {
  if (t) {
    var e = W0();
    t = { blockedOn: null, target: t, priority: e };
    for (var r = 0; r < mn.length && e !== 0 && e < mn[r].priority; r++);
    mn.splice(r, 0, t), r === 0 && K0(t);
  }
};
function Cc(t) {
  return !(!t || (t.nodeType !== 1 && t.nodeType !== 9 && t.nodeType !== 11));
}
function sa(t) {
  return !(
    !t ||
    (t.nodeType !== 1 &&
      t.nodeType !== 9 &&
      t.nodeType !== 11 &&
      (t.nodeType !== 8 || t.nodeValue !== " react-mount-point-unstable "))
  );
}
function Zh() {}
function uy(t, e, r, n, i) {
  if (i) {
    if (typeof n == "function") {
      var o = n;
      n = function () {
        var f = Tl(s);
        o.call(f);
      };
    }
    var s = pm(e, n, t, 0, null, !1, !1, "", Zh);
    return (
      (t._reactRootContainer = s),
      (t[$r] = s.current),
      Jo(t.nodeType === 8 ? t.parentNode : t),
      ci(),
      s
    );
  }
  for (; (i = t.lastChild); ) t.removeChild(i);
  if (typeof n == "function") {
    var l = n;
    n = function () {
      var f = Tl(a);
      l.call(f);
    };
  }
  var a = kc(t, 0, !1, null, null, !1, !1, "", Zh);
  return (
    (t._reactRootContainer = a),
    (t[$r] = a.current),
    Jo(t.nodeType === 8 ? t.parentNode : t),
    ci(function () {
      ia(e, a, r, n);
    }),
    a
  );
}
function la(t, e, r, n, i) {
  var o = r._reactRootContainer;
  if (o) {
    var s = o;
    if (typeof i == "function") {
      var l = i;
      i = function () {
        var a = Tl(s);
        l.call(a);
      };
    }
    ia(e, s, t, i);
  } else s = uy(r, e, t, i, n);
  return Tl(s);
}
G0 = function (t) {
  switch (t.tag) {
    case 3:
      var e = t.stateNode;
      if (e.current.memoizedState.isDehydrated) {
        var r = No(e.pendingLanes);
        r !== 0 &&
          (Kf(e, r | 1), Ut(e, ot()), !(he & 6) && ((Xi = ot() + 500), Ln()));
      }
      break;
    case 13:
      ci(function () {
        var n = Yr(t, 1);
        if (n !== null) {
          var i = Rt();
          Ar(n, t, 1, i);
        }
      }),
        Sc(t, 1);
  }
};
Vf = function (t) {
  if (t.tag === 13) {
    var e = Yr(t, 134217728);
    if (e !== null) {
      var r = Rt();
      Ar(e, t, 134217728, r);
    }
    Sc(t, 134217728);
  }
};
q0 = function (t) {
  if (t.tag === 13) {
    var e = Nn(t),
      r = Yr(t, e);
    if (r !== null) {
      var n = Rt();
      Ar(r, t, e, n);
    }
    Sc(t, e);
  }
};
W0 = function () {
  return de;
};
Q0 = function (t, e) {
  var r = de;
  try {
    return (de = t), e();
  } finally {
    de = r;
  }
};
ju = function (t, e, r) {
  switch (e) {
    case "input":
      if ((Iu(t, r), (e = r.name), r.type === "radio" && e != null)) {
        for (r = t; r.parentNode; ) r = r.parentNode;
        for (
          r = r.querySelectorAll(
            "input[name=" + JSON.stringify("" + e) + '][type="radio"]'
          ),
            e = 0;
          e < r.length;
          e++
        ) {
          var n = r[e];
          if (n !== t && n.form === t.form) {
            var i = Yl(n);
            if (!i) throw Error(U(90));
            b0(n), Iu(n, i);
          }
        }
      }
      break;
    case "textarea":
      k0(t, r);
      break;
    case "select":
      (e = r.value), e != null && Di(t, !!r.multiple, e, !1);
  }
};
I0 = Ac;
T0 = ci;
var fy = { usingClientEntryPoint: !1, Events: [ms, Pi, Yl, M0, R0, Ac] },
  xo = {
    findFiberByHostInstance: ti,
    bundleType: 0,
    version: "18.2.0",
    rendererPackageName: "react-dom",
  },
  cy = {
    bundleType: xo.bundleType,
    version: xo.version,
    rendererPackageName: xo.rendererPackageName,
    rendererConfig: xo.rendererConfig,
    overrideHookState: null,
    overrideHookStateDeletePath: null,
    overrideHookStateRenamePath: null,
    overrideProps: null,
    overridePropsDeletePath: null,
    overridePropsRenamePath: null,
    setErrorHandler: null,
    setSuspenseHandler: null,
    scheduleUpdate: null,
    currentDispatcherRef: rn.ReactCurrentDispatcher,
    findHostInstanceByFiber: function (t) {
      return (t = B0(t)), t === null ? null : t.stateNode;
    },
    findFiberByHostInstance: xo.findFiberByHostInstance || ay,
    findHostInstancesForRefresh: null,
    scheduleRefresh: null,
    scheduleRoot: null,
    setRefreshHandler: null,
    getCurrentFiber: null,
    reconcilerVersion: "18.2.0-next-9e3b772b8-20220608",
  };
if (typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ < "u") {
  var Ds = __REACT_DEVTOOLS_GLOBAL_HOOK__;
  if (!Ds.isDisabled && Ds.supportsFiber)
    try {
      (Kl = Ds.inject(cy)), (Ir = Ds);
    } catch {}
}
$t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED = fy;
$t.createPortal = function (t, e) {
  var r = 2 < arguments.length && arguments[2] !== void 0 ? arguments[2] : null;
  if (!Cc(e)) throw Error(U(200));
  return ly(t, e, null, r);
};
$t.createRoot = function (t, e) {
  if (!Cc(t)) throw Error(U(299));
  var r = !1,
    n = "",
    i = mm;
  return (
    e != null &&
      (e.unstable_strictMode === !0 && (r = !0),
      e.identifierPrefix !== void 0 && (n = e.identifierPrefix),
      e.onRecoverableError !== void 0 && (i = e.onRecoverableError)),
    (e = kc(t, 1, !1, null, null, r, !1, n, i)),
    (t[$r] = e.current),
    Jo(t.nodeType === 8 ? t.parentNode : t),
    new Nc(e)
  );
};
$t.findDOMNode = function (t) {
  if (t == null) return null;
  if (t.nodeType === 1) return t;
  var e = t._reactInternals;
  if (e === void 0)
    throw typeof t.render == "function"
      ? Error(U(188))
      : ((t = Object.keys(t).join(",")), Error(U(268, t)));
  return (t = B0(e)), (t = t === null ? null : t.stateNode), t;
};
$t.flushSync = function (t) {
  return ci(t);
};
$t.hydrate = function (t, e, r) {
  if (!sa(e)) throw Error(U(200));
  return la(null, t, e, !0, r);
};
$t.hydrateRoot = function (t, e, r) {
  if (!Cc(t)) throw Error(U(405));
  var n = (r != null && r.hydratedSources) || null,
    i = !1,
    o = "",
    s = mm;
  if (
    (r != null &&
      (r.unstable_strictMode === !0 && (i = !0),
      r.identifierPrefix !== void 0 && (o = r.identifierPrefix),
      r.onRecoverableError !== void 0 && (s = r.onRecoverableError)),
    (e = pm(e, null, t, 1, r ?? null, i, !1, o, s)),
    (t[$r] = e.current),
    Jo(t),
    n)
  )
    for (t = 0; t < n.length; t++)
      (r = n[t]),
        (i = r._getVersion),
        (i = i(r._source)),
        e.mutableSourceEagerHydrationData == null
          ? (e.mutableSourceEagerHydrationData = [r, i])
          : e.mutableSourceEagerHydrationData.push(r, i);
  return new oa(e);
};
$t.render = function (t, e, r) {
  if (!sa(e)) throw Error(U(200));
  return la(null, t, e, !1, r);
};
$t.unmountComponentAtNode = function (t) {
  if (!sa(t)) throw Error(U(40));
  return t._reactRootContainer
    ? (ci(function () {
        la(null, null, t, !1, function () {
          (t._reactRootContainer = null), (t[$r] = null);
        });
      }),
      !0)
    : !1;
};
$t.unstable_batchedUpdates = Ac;
$t.unstable_renderSubtreeIntoContainer = function (t, e, r, n) {
  if (!sa(r)) throw Error(U(200));
  if (t == null || t._reactInternals === void 0) throw Error(U(38));
  return la(t, e, r, !1, n);
};
$t.version = "18.2.0-next-9e3b772b8-20220608";
function vm() {
  if (
    !(
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__ > "u" ||
      typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE != "function"
    )
  )
    try {
      __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(vm);
    } catch (t) {
      console.error(t);
    }
}
vm(), (p0.exports = $t);
var hy = p0.exports,
  ed = hy;
(ku.createRoot = ed.createRoot), (ku.hydrateRoot = ed.hydrateRoot);
/**
 * @remix-run/router v1.14.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function is() {
  return (
    (is = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    is.apply(this, arguments)
  );
}
var xn;
(function (t) {
  (t.Pop = "POP"), (t.Push = "PUSH"), (t.Replace = "REPLACE");
})(xn || (xn = {}));
const td = "popstate";
function dy(t) {
  t === void 0 && (t = {});
  function e(n, i) {
    let { pathname: o, search: s, hash: l } = n.location;
    return xf(
      "",
      { pathname: o, search: s, hash: l },
      (i.state && i.state.usr) || null,
      (i.state && i.state.key) || "default"
    );
  }
  function r(n, i) {
    return typeof i == "string" ? i : Ol(i);
  }
  return my(e, r, null, t);
}
function at(t, e) {
  if (t === !1 || t === null || typeof t > "u") throw new Error(e);
}
function Pc(t, e) {
  if (!t) {
    typeof console < "u" && console.warn(e);
    try {
      throw new Error(e);
    } catch {}
  }
}
function py() {
  return Math.random().toString(36).substr(2, 8);
}
function rd(t, e) {
  return { usr: t.state, key: t.key, idx: e };
}
function xf(t, e, r, n) {
  return (
    r === void 0 && (r = null),
    is(
      { pathname: typeof t == "string" ? t : t.pathname, search: "", hash: "" },
      typeof e == "string" ? so(e) : e,
      { state: r, key: (e && e.key) || n || py() }
    )
  );
}
function Ol(t) {
  let { pathname: e = "/", search: r = "", hash: n = "" } = t;
  return (
    r && r !== "?" && (e += r.charAt(0) === "?" ? r : "?" + r),
    n && n !== "#" && (e += n.charAt(0) === "#" ? n : "#" + n),
    e
  );
}
function so(t) {
  let e = {};
  if (t) {
    let r = t.indexOf("#");
    r >= 0 && ((e.hash = t.substr(r)), (t = t.substr(0, r)));
    let n = t.indexOf("?");
    n >= 0 && ((e.search = t.substr(n)), (t = t.substr(0, n))),
      t && (e.pathname = t);
  }
  return e;
}
function my(t, e, r, n) {
  n === void 0 && (n = {});
  let { window: i = document.defaultView, v5Compat: o = !1 } = n,
    s = i.history,
    l = xn.Pop,
    a = null,
    f = h();
  f == null && ((f = 0), s.replaceState(is({}, s.state, { idx: f }), ""));
  function h() {
    return (s.state || { idx: null }).idx;
  }
  function p() {
    l = xn.Pop;
    let I = h(),
      w = I == null ? null : I - f;
    (f = I), a && a({ action: l, location: M.location, delta: w });
  }
  function y(I, w) {
    l = xn.Push;
    let x = xf(M.location, I, w);
    r && r(x, I), (f = h() + 1);
    let N = rd(x, f),
      T = M.createHref(x);
    try {
      s.pushState(N, "", T);
    } catch (L) {
      if (L instanceof DOMException && L.name === "DataCloneError") throw L;
      i.location.assign(T);
    }
    o && a && a({ action: l, location: M.location, delta: 1 });
  }
  function S(I, w) {
    l = xn.Replace;
    let x = xf(M.location, I, w);
    r && r(x, I), (f = h());
    let N = rd(x, f),
      T = M.createHref(x);
    s.replaceState(N, "", T),
      o && a && a({ action: l, location: M.location, delta: 0 });
  }
  function P(I) {
    let w = i.location.origin !== "null" ? i.location.origin : i.location.href,
      x = typeof I == "string" ? I : Ol(I);
    return (
      at(
        w,
        "No window.location.(origin|href) available to create URL for href: " +
          x
      ),
      new URL(x, w)
    );
  }
  let M = {
    get action() {
      return l;
    },
    get location() {
      return t(i, s);
    },
    listen(I) {
      if (a) throw new Error("A history only accepts one active listener");
      return (
        i.addEventListener(td, p),
        (a = I),
        () => {
          i.removeEventListener(td, p), (a = null);
        }
      );
    },
    createHref(I) {
      return e(i, I);
    },
    createURL: P,
    encodeLocation(I) {
      let w = P(I);
      return { pathname: w.pathname, search: w.search, hash: w.hash };
    },
    push: y,
    replace: S,
    go(I) {
      return s.go(I);
    },
  };
  return M;
}
var nd;
(function (t) {
  (t.data = "data"),
    (t.deferred = "deferred"),
    (t.redirect = "redirect"),
    (t.error = "error");
})(nd || (nd = {}));
function vy(t, e, r) {
  r === void 0 && (r = "/");
  let n = typeof e == "string" ? so(e) : e,
    i = Mc(n.pathname || "/", r);
  if (i == null) return null;
  let o = gm(t);
  gy(o);
  let s = null;
  for (let l = 0; s == null && l < o.length; ++l) s = Sy(o[l], Py(i));
  return s;
}
function gm(t, e, r, n) {
  e === void 0 && (e = []), r === void 0 && (r = []), n === void 0 && (n = "");
  let i = (o, s, l) => {
    let a = {
      relativePath: l === void 0 ? o.path || "" : l,
      caseSensitive: o.caseSensitive === !0,
      childrenIndex: s,
      route: o,
    };
    a.relativePath.startsWith("/") &&
      (at(
        a.relativePath.startsWith(n),
        'Absolute route path "' +
          a.relativePath +
          '" nested under path ' +
          ('"' + n + '" is not valid. An absolute child route path ') +
          "must start with the combined path of all its parent routes."
      ),
      (a.relativePath = a.relativePath.slice(n.length)));
    let f = Pn([n, a.relativePath]),
      h = r.concat(a);
    o.children &&
      o.children.length > 0 &&
      (at(
        o.index !== !0,
        "Index routes must not have child routes. Please remove " +
          ('all child routes from route path "' + f + '".')
      ),
      gm(o.children, e, h, f)),
      !(o.path == null && !o.index) &&
        e.push({ path: f, score: _y(f, o.index), routesMeta: h });
  };
  return (
    t.forEach((o, s) => {
      var l;
      if (o.path === "" || !((l = o.path) != null && l.includes("?"))) i(o, s);
      else for (let a of ym(o.path)) i(o, s, a);
    }),
    e
  );
}
function ym(t) {
  let e = t.split("/");
  if (e.length === 0) return [];
  let [r, ...n] = e,
    i = r.endsWith("?"),
    o = r.replace(/\?$/, "");
  if (n.length === 0) return i ? [o, ""] : [o];
  let s = ym(n.join("/")),
    l = [];
  return (
    l.push(...s.map((a) => (a === "" ? o : [o, a].join("/")))),
    i && l.push(...s),
    l.map((a) => (t.startsWith("/") && a === "" ? "/" : a))
  );
}
function gy(t) {
  t.sort((e, r) =>
    e.score !== r.score
      ? r.score - e.score
      : ky(
          e.routesMeta.map((n) => n.childrenIndex),
          r.routesMeta.map((n) => n.childrenIndex)
        )
  );
}
const yy = /^:[\w-]+$/,
  xy = 3,
  wy = 2,
  Ay = 1,
  Ey = 10,
  by = -2,
  id = (t) => t === "*";
function _y(t, e) {
  let r = t.split("/"),
    n = r.length;
  return (
    r.some(id) && (n += by),
    e && (n += wy),
    r
      .filter((i) => !id(i))
      .reduce((i, o) => i + (yy.test(o) ? xy : o === "" ? Ay : Ey), n)
  );
}
function ky(t, e) {
  return t.length === e.length && t.slice(0, -1).every((n, i) => n === e[i])
    ? t[t.length - 1] - e[e.length - 1]
    : 0;
}
function Sy(t, e) {
  let { routesMeta: r } = t,
    n = {},
    i = "/",
    o = [];
  for (let s = 0; s < r.length; ++s) {
    let l = r[s],
      a = s === r.length - 1,
      f = i === "/" ? e : e.slice(i.length) || "/",
      h = Ny(
        { path: l.relativePath, caseSensitive: l.caseSensitive, end: a },
        f
      );
    if (!h) return null;
    Object.assign(n, h.params);
    let p = l.route;
    o.push({
      params: n,
      pathname: Pn([i, h.pathname]),
      pathnameBase: Oy(Pn([i, h.pathnameBase])),
      route: p,
    }),
      h.pathnameBase !== "/" && (i = Pn([i, h.pathnameBase]));
  }
  return o;
}
function Ny(t, e) {
  typeof t == "string" && (t = { path: t, caseSensitive: !1, end: !0 });
  let [r, n] = Cy(t.path, t.caseSensitive, t.end),
    i = e.match(r);
  if (!i) return null;
  let o = i[0],
    s = o.replace(/(.)\/+$/, "$1"),
    l = i.slice(1);
  return {
    params: n.reduce((f, h, p) => {
      let { paramName: y, isOptional: S } = h;
      if (y === "*") {
        let M = l[p] || "";
        s = o.slice(0, o.length - M.length).replace(/(.)\/+$/, "$1");
      }
      const P = l[p];
      return S && !P ? (f[y] = void 0) : (f[y] = My(P || "", y)), f;
    }, {}),
    pathname: o,
    pathnameBase: s,
    pattern: t,
  };
}
function Cy(t, e, r) {
  e === void 0 && (e = !1),
    r === void 0 && (r = !0),
    Pc(
      t === "*" || !t.endsWith("*") || t.endsWith("/*"),
      'Route path "' +
        t +
        '" will be treated as if it were ' +
        ('"' + t.replace(/\*$/, "/*") + '" because the `*` character must ') +
        "always follow a `/` in the pattern. To get rid of this warning, " +
        ('please change the route path to "' + t.replace(/\*$/, "/*") + '".')
    );
  let n = [],
    i =
      "^" +
      t
        .replace(/\/*\*?$/, "")
        .replace(/^\/*/, "/")
        .replace(/[\\.*+^${}|()[\]]/g, "\\$&")
        .replace(
          /\/:([\w-]+)(\?)?/g,
          (s, l, a) => (
            n.push({ paramName: l, isOptional: a != null }),
            a ? "/?([^\\/]+)?" : "/([^\\/]+)"
          )
        );
  return (
    t.endsWith("*")
      ? (n.push({ paramName: "*" }),
        (i += t === "*" || t === "/*" ? "(.*)$" : "(?:\\/(.+)|\\/*)$"))
      : r
      ? (i += "\\/*$")
      : t !== "" && t !== "/" && (i += "(?:(?=\\/|$))"),
    [new RegExp(i, e ? void 0 : "i"), n]
  );
}
function Py(t) {
  try {
    return decodeURI(t);
  } catch (e) {
    return (
      Pc(
        !1,
        'The URL path "' +
          t +
          '" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent ' +
          ("encoding (" + e + ").")
      ),
      t
    );
  }
}
function My(t, e) {
  try {
    return decodeURIComponent(t);
  } catch (r) {
    return (
      Pc(
        !1,
        'The value for the URL param "' +
          e +
          '" will not be decoded because' +
          (' the string "' +
            t +
            '" is a malformed URL segment. This is probably') +
          (" due to a bad percent encoding (" + r + ").")
      ),
      t
    );
  }
}
function Mc(t, e) {
  if (e === "/") return t;
  if (!t.toLowerCase().startsWith(e.toLowerCase())) return null;
  let r = e.endsWith("/") ? e.length - 1 : e.length,
    n = t.charAt(r);
  return n && n !== "/" ? null : t.slice(r) || "/";
}
function Ry(t, e) {
  e === void 0 && (e = "/");
  let {
    pathname: r,
    search: n = "",
    hash: i = "",
  } = typeof t == "string" ? so(t) : t;
  return {
    pathname: r ? (r.startsWith("/") ? r : Iy(r, e)) : e,
    search: Ly(n),
    hash: By(i),
  };
}
function Iy(t, e) {
  let r = e.replace(/\/+$/, "").split("/");
  return (
    t.split("/").forEach((i) => {
      i === ".." ? r.length > 1 && r.pop() : i !== "." && r.push(i);
    }),
    r.length > 1 ? r.join("/") : "/"
  );
}
function su(t, e, r, n) {
  return (
    "Cannot include a '" +
    t +
    "' character in a manually specified " +
    ("`to." +
      e +
      "` field [" +
      JSON.stringify(n) +
      "].  Please separate it out to the ") +
    ("`to." + r + "` field. Alternatively you may provide the full path as ") +
    'a string in <Link to="..."> and the router will parse it for you.'
  );
}
function Ty(t) {
  return t.filter(
    (e, r) => r === 0 || (e.route.path && e.route.path.length > 0)
  );
}
function xm(t, e) {
  let r = Ty(t);
  return e
    ? r.map((n, i) => (i === t.length - 1 ? n.pathname : n.pathnameBase))
    : r.map((n) => n.pathnameBase);
}
function wm(t, e, r, n) {
  n === void 0 && (n = !1);
  let i;
  typeof t == "string"
    ? (i = so(t))
    : ((i = is({}, t)),
      at(
        !i.pathname || !i.pathname.includes("?"),
        su("?", "pathname", "search", i)
      ),
      at(
        !i.pathname || !i.pathname.includes("#"),
        su("#", "pathname", "hash", i)
      ),
      at(!i.search || !i.search.includes("#"), su("#", "search", "hash", i)));
  let o = t === "" || i.pathname === "",
    s = o ? "/" : i.pathname,
    l;
  if (s == null) l = r;
  else {
    let p = e.length - 1;
    if (!n && s.startsWith("..")) {
      let y = s.split("/");
      for (; y[0] === ".."; ) y.shift(), (p -= 1);
      i.pathname = y.join("/");
    }
    l = p >= 0 ? e[p] : "/";
  }
  let a = Ry(i, l),
    f = s && s !== "/" && s.endsWith("/"),
    h = (o || s === ".") && r.endsWith("/");
  return !a.pathname.endsWith("/") && (f || h) && (a.pathname += "/"), a;
}
const Pn = (t) => t.join("/").replace(/\/\/+/g, "/"),
  Oy = (t) => t.replace(/\/+$/, "").replace(/^\/*/, "/"),
  Ly = (t) => (!t || t === "?" ? "" : t.startsWith("?") ? t : "?" + t),
  By = (t) => (!t || t === "#" ? "" : t.startsWith("#") ? t : "#" + t);
function Dy(t) {
  return (
    t != null &&
    typeof t.status == "number" &&
    typeof t.statusText == "string" &&
    typeof t.internal == "boolean" &&
    "data" in t
  );
}
const Am = ["post", "put", "patch", "delete"];
new Set(Am);
const Fy = ["get", ...Am];
new Set(Fy);
/**
 * React Router v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function os() {
  return (
    (os = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    os.apply(this, arguments)
  );
}
const Rc = q.createContext(null),
  jy = q.createContext(null),
  gi = q.createContext(null),
  aa = q.createContext(null),
  yi = q.createContext({ outlet: null, matches: [], isDataRoute: !1 }),
  Em = q.createContext(null);
function Uy(t, e) {
  let { relative: r } = e === void 0 ? {} : e;
  gs() || at(!1);
  let { basename: n, navigator: i } = q.useContext(gi),
    { hash: o, pathname: s, search: l } = _m(t, { relative: r }),
    a = s;
  return (
    n !== "/" && (a = s === "/" ? n : Pn([n, s])),
    i.createHref({ pathname: a, search: l, hash: o })
  );
}
function gs() {
  return q.useContext(aa) != null;
}
function ys() {
  return gs() || at(!1), q.useContext(aa).location;
}
function bm(t) {
  q.useContext(gi).static || q.useLayoutEffect(t);
}
function zy() {
  let { isDataRoute: t } = q.useContext(yi);
  return t ? ex() : Hy();
}
function Hy() {
  gs() || at(!1);
  let t = q.useContext(Rc),
    { basename: e, future: r, navigator: n } = q.useContext(gi),
    { matches: i } = q.useContext(yi),
    { pathname: o } = ys(),
    s = JSON.stringify(xm(i, r.v7_relativeSplatPath)),
    l = q.useRef(!1);
  return (
    bm(() => {
      l.current = !0;
    }),
    q.useCallback(
      function (f, h) {
        if ((h === void 0 && (h = {}), !l.current)) return;
        if (typeof f == "number") {
          n.go(f);
          return;
        }
        let p = wm(f, JSON.parse(s), o, h.relative === "path");
        t == null &&
          e !== "/" &&
          (p.pathname = p.pathname === "/" ? e : Pn([e, p.pathname])),
          (h.replace ? n.replace : n.push)(p, h.state, h);
      },
      [e, n, s, o, t]
    )
  );
}
function _m(t, e) {
  let { relative: r } = e === void 0 ? {} : e,
    { future: n } = q.useContext(gi),
    { matches: i } = q.useContext(yi),
    { pathname: o } = ys(),
    s = JSON.stringify(xm(i, n.v7_relativeSplatPath));
  return q.useMemo(() => wm(t, JSON.parse(s), o, r === "path"), [t, s, o, r]);
}
function Gy(t, e) {
  return qy(t, e);
}
function qy(t, e, r, n) {
  gs() || at(!1);
  let { navigator: i } = q.useContext(gi),
    { matches: o } = q.useContext(yi),
    s = o[o.length - 1],
    l = s ? s.params : {};
  s && s.pathname;
  let a = s ? s.pathnameBase : "/";
  s && s.route;
  let f = ys(),
    h;
  if (e) {
    var p;
    let I = typeof e == "string" ? so(e) : e;
    a === "/" || ((p = I.pathname) != null && p.startsWith(a)) || at(!1),
      (h = I);
  } else h = f;
  let y = h.pathname || "/",
    S = a === "/" ? y : y.slice(a.length) || "/",
    P = vy(t, { pathname: S }),
    M = Jy(
      P &&
        P.map((I) =>
          Object.assign({}, I, {
            params: Object.assign({}, l, I.params),
            pathname: Pn([
              a,
              i.encodeLocation
                ? i.encodeLocation(I.pathname).pathname
                : I.pathname,
            ]),
            pathnameBase:
              I.pathnameBase === "/"
                ? a
                : Pn([
                    a,
                    i.encodeLocation
                      ? i.encodeLocation(I.pathnameBase).pathname
                      : I.pathnameBase,
                  ]),
          })
        ),
      o,
      r,
      n
    );
  return e && M
    ? q.createElement(
        aa.Provider,
        {
          value: {
            location: os(
              {
                pathname: "/",
                search: "",
                hash: "",
                state: null,
                key: "default",
              },
              h
            ),
            navigationType: xn.Pop,
          },
        },
        M
      )
    : M;
}
function Wy() {
  let t = Zy(),
    e = Dy(t)
      ? t.status + " " + t.statusText
      : t instanceof Error
      ? t.message
      : JSON.stringify(t),
    r = t instanceof Error ? t.stack : null,
    i = { padding: "0.5rem", backgroundColor: "rgba(200,200,200, 0.5)" },
    o = null;
  return q.createElement(
    q.Fragment,
    null,
    q.createElement("h2", null, "Unexpected Application Error!"),
    q.createElement("h3", { style: { fontStyle: "italic" } }, e),
    r ? q.createElement("pre", { style: i }, r) : null,
    o
  );
}
const Qy = q.createElement(Wy, null);
class Ky extends q.Component {
  constructor(e) {
    super(e),
      (this.state = {
        location: e.location,
        revalidation: e.revalidation,
        error: e.error,
      });
  }
  static getDerivedStateFromError(e) {
    return { error: e };
  }
  static getDerivedStateFromProps(e, r) {
    return r.location !== e.location ||
      (r.revalidation !== "idle" && e.revalidation === "idle")
      ? { error: e.error, location: e.location, revalidation: e.revalidation }
      : {
          error: e.error !== void 0 ? e.error : r.error,
          location: r.location,
          revalidation: e.revalidation || r.revalidation,
        };
  }
  componentDidCatch(e, r) {
    console.error(
      "React Router caught the following error during render",
      e,
      r
    );
  }
  render() {
    return this.state.error !== void 0
      ? q.createElement(
          yi.Provider,
          { value: this.props.routeContext },
          q.createElement(Em.Provider, {
            value: this.state.error,
            children: this.props.component,
          })
        )
      : this.props.children;
  }
}
function Vy(t) {
  let { routeContext: e, match: r, children: n } = t,
    i = q.useContext(Rc);
  return (
    i &&
      i.static &&
      i.staticContext &&
      (r.route.errorElement || r.route.ErrorBoundary) &&
      (i.staticContext._deepestRenderedBoundaryId = r.route.id),
    q.createElement(yi.Provider, { value: e }, n)
  );
}
function Jy(t, e, r, n) {
  var i;
  if (
    (e === void 0 && (e = []),
    r === void 0 && (r = null),
    n === void 0 && (n = null),
    t == null)
  ) {
    var o;
    if ((o = r) != null && o.errors) t = r.matches;
    else return null;
  }
  let s = t,
    l = (i = r) == null ? void 0 : i.errors;
  if (l != null) {
    let h = s.findIndex(
      (p) => p.route.id && (l == null ? void 0 : l[p.route.id])
    );
    h >= 0 || at(!1), (s = s.slice(0, Math.min(s.length, h + 1)));
  }
  let a = !1,
    f = -1;
  if (r && n && n.v7_partialHydration)
    for (let h = 0; h < s.length; h++) {
      let p = s[h];
      if (
        ((p.route.HydrateFallback || p.route.hydrateFallbackElement) && (f = h),
        p.route.id)
      ) {
        let { loaderData: y, errors: S } = r,
          P =
            p.route.loader &&
            y[p.route.id] === void 0 &&
            (!S || S[p.route.id] === void 0);
        if (p.route.lazy || P) {
          (a = !0), f >= 0 ? (s = s.slice(0, f + 1)) : (s = [s[0]]);
          break;
        }
      }
    }
  return s.reduceRight((h, p, y) => {
    let S,
      P = !1,
      M = null,
      I = null;
    r &&
      ((S = l && p.route.id ? l[p.route.id] : void 0),
      (M = p.route.errorElement || Qy),
      a &&
        (f < 0 && y === 0
          ? (tx("route-fallback", !1), (P = !0), (I = null))
          : f === y &&
            ((P = !0), (I = p.route.hydrateFallbackElement || null))));
    let w = e.concat(s.slice(0, y + 1)),
      x = () => {
        let N;
        return (
          S
            ? (N = M)
            : P
            ? (N = I)
            : p.route.Component
            ? (N = q.createElement(p.route.Component, null))
            : p.route.element
            ? (N = p.route.element)
            : (N = h),
          q.createElement(Vy, {
            match: p,
            routeContext: { outlet: h, matches: w, isDataRoute: r != null },
            children: N,
          })
        );
      };
    return r && (p.route.ErrorBoundary || p.route.errorElement || y === 0)
      ? q.createElement(Ky, {
          location: r.location,
          revalidation: r.revalidation,
          component: M,
          error: S,
          children: x(),
          routeContext: { outlet: null, matches: w, isDataRoute: !0 },
        })
      : x();
  }, null);
}
var km = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      t
    );
  })(km || {}),
  Ll = (function (t) {
    return (
      (t.UseBlocker = "useBlocker"),
      (t.UseLoaderData = "useLoaderData"),
      (t.UseActionData = "useActionData"),
      (t.UseRouteError = "useRouteError"),
      (t.UseNavigation = "useNavigation"),
      (t.UseRouteLoaderData = "useRouteLoaderData"),
      (t.UseMatches = "useMatches"),
      (t.UseRevalidator = "useRevalidator"),
      (t.UseNavigateStable = "useNavigate"),
      (t.UseRouteId = "useRouteId"),
      t
    );
  })(Ll || {});
function $y(t) {
  let e = q.useContext(Rc);
  return e || at(!1), e;
}
function Yy(t) {
  let e = q.useContext(jy);
  return e || at(!1), e;
}
function Xy(t) {
  let e = q.useContext(yi);
  return e || at(!1), e;
}
function Sm(t) {
  let e = Xy(),
    r = e.matches[e.matches.length - 1];
  return r.route.id || at(!1), r.route.id;
}
function Zy() {
  var t;
  let e = q.useContext(Em),
    r = Yy(Ll.UseRouteError),
    n = Sm(Ll.UseRouteError);
  return e !== void 0 ? e : (t = r.errors) == null ? void 0 : t[n];
}
function ex() {
  let { router: t } = $y(km.UseNavigateStable),
    e = Sm(Ll.UseNavigateStable),
    r = q.useRef(!1);
  return (
    bm(() => {
      r.current = !0;
    }),
    q.useCallback(
      function (i, o) {
        o === void 0 && (o = {}),
          r.current &&
            (typeof i == "number"
              ? t.navigate(i)
              : t.navigate(i, os({ fromRouteId: e }, o)));
      },
      [t, e]
    )
  );
}
const od = {};
function tx(t, e, r) {
  !e && !od[t] && (od[t] = !0);
}
function bi(t) {
  at(!1);
}
function rx(t) {
  let {
    basename: e = "/",
    children: r = null,
    location: n,
    navigationType: i = xn.Pop,
    navigator: o,
    static: s = !1,
    future: l,
  } = t;
  gs() && at(!1);
  let a = e.replace(/^\/*/, "/"),
    f = q.useMemo(
      () => ({
        basename: a,
        navigator: o,
        static: s,
        future: os({ v7_relativeSplatPath: !1 }, l),
      }),
      [a, l, o, s]
    );
  typeof n == "string" && (n = so(n));
  let {
      pathname: h = "/",
      search: p = "",
      hash: y = "",
      state: S = null,
      key: P = "default",
    } = n,
    M = q.useMemo(() => {
      let I = Mc(h, a);
      return I == null
        ? null
        : {
            location: { pathname: I, search: p, hash: y, state: S, key: P },
            navigationType: i,
          };
    }, [a, h, p, y, S, P, i]);
  return M == null
    ? null
    : q.createElement(
        gi.Provider,
        { value: f },
        q.createElement(aa.Provider, { children: r, value: M })
      );
}
function nx(t) {
  let { children: e, location: r } = t;
  return Gy(wf(e), r);
}
new Promise(() => {});
function wf(t, e) {
  e === void 0 && (e = []);
  let r = [];
  return (
    q.Children.forEach(t, (n, i) => {
      if (!q.isValidElement(n)) return;
      let o = [...e, i];
      if (n.type === q.Fragment) {
        r.push.apply(r, wf(n.props.children, o));
        return;
      }
      n.type !== bi && at(!1), !n.props.index || !n.props.children || at(!1);
      let s = {
        id: n.props.id || o.join("-"),
        caseSensitive: n.props.caseSensitive,
        element: n.props.element,
        Component: n.props.Component,
        index: n.props.index,
        path: n.props.path,
        loader: n.props.loader,
        action: n.props.action,
        errorElement: n.props.errorElement,
        ErrorBoundary: n.props.ErrorBoundary,
        hasErrorBoundary:
          n.props.ErrorBoundary != null || n.props.errorElement != null,
        shouldRevalidate: n.props.shouldRevalidate,
        handle: n.props.handle,
        lazy: n.props.lazy,
      };
      n.props.children && (s.children = wf(n.props.children, o)), r.push(s);
    }),
    r
  );
}
/**
 * React Router DOM v6.21.2
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */ function Af() {
  return (
    (Af = Object.assign
      ? Object.assign.bind()
      : function (t) {
          for (var e = 1; e < arguments.length; e++) {
            var r = arguments[e];
            for (var n in r)
              Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
          }
          return t;
        }),
    Af.apply(this, arguments)
  );
}
function ix(t, e) {
  if (t == null) return {};
  var r = {},
    n = Object.keys(t),
    i,
    o;
  for (o = 0; o < n.length; o++)
    (i = n[o]), !(e.indexOf(i) >= 0) && (r[i] = t[i]);
  return r;
}
function ox(t) {
  return !!(t.metaKey || t.altKey || t.ctrlKey || t.shiftKey);
}
function sx(t, e) {
  return t.button === 0 && (!e || e === "_self") && !ox(t);
}
const lx = [
    "onClick",
    "relative",
    "reloadDocument",
    "replace",
    "state",
    "target",
    "to",
    "preventScrollReset",
    "unstable_viewTransition",
  ],
  ax = "startTransition",
  sd = rg[ax];
function ux(t) {
  let { basename: e, children: r, future: n, window: i } = t,
    o = q.useRef();
  o.current == null && (o.current = dy({ window: i, v5Compat: !0 }));
  let s = o.current,
    [l, a] = q.useState({ action: s.action, location: s.location }),
    { v7_startTransition: f } = n || {},
    h = q.useCallback(
      (p) => {
        f && sd ? sd(() => a(p)) : a(p);
      },
      [a, f]
    );
  return (
    q.useLayoutEffect(() => s.listen(h), [s, h]),
    q.createElement(rx, {
      basename: e,
      children: r,
      location: l.location,
      navigationType: l.action,
      navigator: s,
      future: n,
    })
  );
}
const fx =
    typeof window < "u" &&
    typeof window.document < "u" &&
    typeof window.document.createElement < "u",
  cx = /^(?:[a-z][a-z0-9+.-]*:|\/\/)/i,
  ld = q.forwardRef(function (e, r) {
    let {
        onClick: n,
        relative: i,
        reloadDocument: o,
        replace: s,
        state: l,
        target: a,
        to: f,
        preventScrollReset: h,
        unstable_viewTransition: p,
      } = e,
      y = ix(e, lx),
      { basename: S } = q.useContext(gi),
      P,
      M = !1;
    if (typeof f == "string" && cx.test(f) && ((P = f), fx))
      try {
        let N = new URL(window.location.href),
          T = f.startsWith("//") ? new URL(N.protocol + f) : new URL(f),
          L = Mc(T.pathname, S);
        T.origin === N.origin && L != null
          ? (f = L + T.search + T.hash)
          : (M = !0);
      } catch {}
    let I = Uy(f, { relative: i }),
      w = hx(f, {
        replace: s,
        state: l,
        target: a,
        preventScrollReset: h,
        relative: i,
        unstable_viewTransition: p,
      });
    function x(N) {
      n && n(N), N.defaultPrevented || w(N);
    }
    return q.createElement(
      "a",
      Af({}, y, { href: P || I, onClick: M || o ? n : x, ref: r, target: a })
    );
  });
var ad;
(function (t) {
  (t.UseScrollRestoration = "useScrollRestoration"),
    (t.UseSubmit = "useSubmit"),
    (t.UseSubmitFetcher = "useSubmitFetcher"),
    (t.UseFetcher = "useFetcher"),
    (t.useViewTransitionState = "useViewTransitionState");
})(ad || (ad = {}));
var ud;
(function (t) {
  (t.UseFetcher = "useFetcher"),
    (t.UseFetchers = "useFetchers"),
    (t.UseScrollRestoration = "useScrollRestoration");
})(ud || (ud = {}));
function hx(t, e) {
  let {
      target: r,
      replace: n,
      state: i,
      preventScrollReset: o,
      relative: s,
      unstable_viewTransition: l,
    } = e === void 0 ? {} : e,
    a = zy(),
    f = ys(),
    h = _m(t, { relative: s });
  return q.useCallback(
    (p) => {
      if (sx(p, r)) {
        p.preventDefault();
        let y = n !== void 0 ? n : Ol(f) === Ol(h);
        a(t, {
          replace: y,
          state: i,
          preventScrollReset: o,
          relative: s,
          unstable_viewTransition: l,
        });
      }
    },
    [f, a, h, n, i, r, t, o, s, l]
  );
}
var dx = !0,
  lu = "Invariant failed";
function wn(t, e) {
  if (!t) {
    if (dx) throw new Error(lu);
    var r = typeof e == "function" ? e() : e,
      n = r ? "".concat(lu, ": ").concat(r) : lu;
    throw new Error(n);
  }
}
var yr;
(function (t) {
  (t.Update = "Web3ReactUpdate"),
    (t.Error = "Web3ReactError"),
    (t.Deactivate = "Web3ReactDeactivate");
})(yr || (yr = {}));
const px = "logger/5.7.0";
let fd = !1,
  cd = !1;
const rl = { debug: 1, default: 2, info: 2, warning: 3, error: 4, off: 5 };
let hd = rl.default,
  au = null;
function mx() {
  try {
    const t = [];
    if (
      (["NFD", "NFC", "NFKD", "NFKC"].forEach((e) => {
        try {
          if ("test".normalize(e) !== "test") throw new Error("bad normalize");
        } catch {
          t.push(e);
        }
      }),
      t.length)
    )
      throw new Error("missing " + t.join(", "));
    if (
      String.fromCharCode(233).normalize("NFD") !==
      String.fromCharCode(101, 769)
    )
      throw new Error("broken implementation");
  } catch (t) {
    return t.message;
  }
  return null;
}
const dd = mx();
var Ef;
(function (t) {
  (t.DEBUG = "DEBUG"),
    (t.INFO = "INFO"),
    (t.WARNING = "WARNING"),
    (t.ERROR = "ERROR"),
    (t.OFF = "OFF");
})(Ef || (Ef = {}));
var mr;
(function (t) {
  (t.UNKNOWN_ERROR = "UNKNOWN_ERROR"),
    (t.NOT_IMPLEMENTED = "NOT_IMPLEMENTED"),
    (t.UNSUPPORTED_OPERATION = "UNSUPPORTED_OPERATION"),
    (t.NETWORK_ERROR = "NETWORK_ERROR"),
    (t.SERVER_ERROR = "SERVER_ERROR"),
    (t.TIMEOUT = "TIMEOUT"),
    (t.BUFFER_OVERRUN = "BUFFER_OVERRUN"),
    (t.NUMERIC_FAULT = "NUMERIC_FAULT"),
    (t.MISSING_NEW = "MISSING_NEW"),
    (t.INVALID_ARGUMENT = "INVALID_ARGUMENT"),
    (t.MISSING_ARGUMENT = "MISSING_ARGUMENT"),
    (t.UNEXPECTED_ARGUMENT = "UNEXPECTED_ARGUMENT"),
    (t.CALL_EXCEPTION = "CALL_EXCEPTION"),
    (t.INSUFFICIENT_FUNDS = "INSUFFICIENT_FUNDS"),
    (t.NONCE_EXPIRED = "NONCE_EXPIRED"),
    (t.REPLACEMENT_UNDERPRICED = "REPLACEMENT_UNDERPRICED"),
    (t.UNPREDICTABLE_GAS_LIMIT = "UNPREDICTABLE_GAS_LIMIT"),
    (t.TRANSACTION_REPLACED = "TRANSACTION_REPLACED"),
    (t.ACTION_REJECTED = "ACTION_REJECTED");
})(mr || (mr = {}));
const pd = "0123456789abcdef";
class B {
  constructor(e) {
    Object.defineProperty(this, "version", {
      enumerable: !0,
      value: e,
      writable: !1,
    });
  }
  _log(e, r) {
    const n = e.toLowerCase();
    rl[n] == null &&
      this.throwArgumentError("invalid log level name", "logLevel", e),
      !(hd > rl[n]) && console.log.apply(console, r);
  }
  debug(...e) {
    this._log(B.levels.DEBUG, e);
  }
  info(...e) {
    this._log(B.levels.INFO, e);
  }
  warn(...e) {
    this._log(B.levels.WARNING, e);
  }
  makeError(e, r, n) {
    if (cd) return this.makeError("censored error", r, {});
    r || (r = B.errors.UNKNOWN_ERROR), n || (n = {});
    const i = [];
    Object.keys(n).forEach((a) => {
      const f = n[a];
      try {
        if (f instanceof Uint8Array) {
          let h = "";
          for (let p = 0; p < f.length; p++)
            (h += pd[f[p] >> 4]), (h += pd[f[p] & 15]);
          i.push(a + "=Uint8Array(0x" + h + ")");
        } else i.push(a + "=" + JSON.stringify(f));
      } catch {
        i.push(a + "=" + JSON.stringify(n[a].toString()));
      }
    }),
      i.push(`code=${r}`),
      i.push(`version=${this.version}`);
    const o = e;
    let s = "";
    switch (r) {
      case mr.NUMERIC_FAULT: {
        s = "NUMERIC_FAULT";
        const a = e;
        switch (a) {
          case "overflow":
          case "underflow":
          case "division-by-zero":
            s += "-" + a;
            break;
          case "negative-power":
          case "negative-width":
            s += "-unsupported";
            break;
          case "unbound-bitwise-result":
            s += "-unbound-result";
            break;
        }
        break;
      }
      case mr.CALL_EXCEPTION:
      case mr.INSUFFICIENT_FUNDS:
      case mr.MISSING_NEW:
      case mr.NONCE_EXPIRED:
      case mr.REPLACEMENT_UNDERPRICED:
      case mr.TRANSACTION_REPLACED:
      case mr.UNPREDICTABLE_GAS_LIMIT:
        s = r;
        break;
    }
    s && (e += " [ See: https://links.ethers.org/v5-errors-" + s + " ]"),
      i.length && (e += " (" + i.join(", ") + ")");
    const l = new Error(e);
    return (
      (l.reason = o),
      (l.code = r),
      Object.keys(n).forEach(function (a) {
        l[a] = n[a];
      }),
      l
    );
  }
  throwError(e, r, n) {
    throw this.makeError(e, r, n);
  }
  throwArgumentError(e, r, n) {
    return this.throwError(e, B.errors.INVALID_ARGUMENT, {
      argument: r,
      value: n,
    });
  }
  assert(e, r, n, i) {
    e || this.throwError(r, n, i);
  }
  assertArgument(e, r, n, i) {
    e || this.throwArgumentError(r, n, i);
  }
  checkNormalize(e) {
    dd &&
      this.throwError(
        "platform missing String.prototype.normalize",
        B.errors.UNSUPPORTED_OPERATION,
        { operation: "String.prototype.normalize", form: dd }
      );
  }
  checkSafeUint53(e, r) {
    typeof e == "number" &&
      (r == null && (r = "value not safe"),
      (e < 0 || e >= 9007199254740991) &&
        this.throwError(r, B.errors.NUMERIC_FAULT, {
          operation: "checkSafeInteger",
          fault: "out-of-safe-range",
          value: e,
        }),
      e % 1 &&
        this.throwError(r, B.errors.NUMERIC_FAULT, {
          operation: "checkSafeInteger",
          fault: "non-integer",
          value: e,
        }));
  }
  checkArgumentCount(e, r, n) {
    n ? (n = ": " + n) : (n = ""),
      e < r &&
        this.throwError("missing argument" + n, B.errors.MISSING_ARGUMENT, {
          count: e,
          expectedCount: r,
        }),
      e > r &&
        this.throwError(
          "too many arguments" + n,
          B.errors.UNEXPECTED_ARGUMENT,
          { count: e, expectedCount: r }
        );
  }
  checkNew(e, r) {
    (e === Object || e == null) &&
      this.throwError("missing new", B.errors.MISSING_NEW, { name: r.name });
  }
  checkAbstract(e, r) {
    e === r
      ? this.throwError(
          "cannot instantiate abstract class " +
            JSON.stringify(r.name) +
            " directly; use a sub-class",
          B.errors.UNSUPPORTED_OPERATION,
          { name: e.name, operation: "new" }
        )
      : (e === Object || e == null) &&
        this.throwError("missing new", B.errors.MISSING_NEW, { name: r.name });
  }
  static globalLogger() {
    return au || (au = new B(px)), au;
  }
  static setCensorship(e, r) {
    if (
      (!e &&
        r &&
        this.globalLogger().throwError(
          "cannot permanently disable censorship",
          B.errors.UNSUPPORTED_OPERATION,
          { operation: "setCensorship" }
        ),
      fd)
    ) {
      if (!e) return;
      this.globalLogger().throwError(
        "error censorship permanent",
        B.errors.UNSUPPORTED_OPERATION,
        { operation: "setCensorship" }
      );
    }
    (cd = !!e), (fd = !!r);
  }
  static setLogLevel(e) {
    const r = rl[e.toLowerCase()];
    if (r == null) {
      B.globalLogger().warn("invalid log level - " + e);
      return;
    }
    hd = r;
  }
  static from(e) {
    return new B(e);
  }
}
B.errors = mr;
B.levels = Ef;
const vx = "bytes/5.7.0",
  nt = new B(vx);
function Nm(t) {
  return !!t.toHexString;
}
function Gi(t) {
  return (
    t.slice ||
      (t.slice = function () {
        const e = Array.prototype.slice.call(arguments);
        return Gi(new Uint8Array(Array.prototype.slice.apply(t, e)));
      }),
    t
  );
}
function Ic(t) {
  return (me(t) && !(t.length % 2)) || ua(t);
}
function md(t) {
  return typeof t == "number" && t == t && t % 1 === 0;
}
function ua(t) {
  if (t == null) return !1;
  if (t.constructor === Uint8Array) return !0;
  if (typeof t == "string" || !md(t.length) || t.length < 0) return !1;
  for (let e = 0; e < t.length; e++) {
    const r = t[e];
    if (!md(r) || r < 0 || r >= 256) return !1;
  }
  return !0;
}
function oe(t, e) {
  if ((e || (e = {}), typeof t == "number")) {
    nt.checkSafeUint53(t, "invalid arrayify value");
    const r = [];
    for (; t; ) r.unshift(t & 255), (t = parseInt(String(t / 256)));
    return r.length === 0 && r.push(0), Gi(new Uint8Array(r));
  }
  if (
    (e.allowMissingPrefix &&
      typeof t == "string" &&
      t.substring(0, 2) !== "0x" &&
      (t = "0x" + t),
    Nm(t) && (t = t.toHexString()),
    me(t))
  ) {
    let r = t.substring(2);
    r.length % 2 &&
      (e.hexPad === "left"
        ? (r = "0" + r)
        : e.hexPad === "right"
        ? (r += "0")
        : nt.throwArgumentError("hex data is odd-length", "value", t));
    const n = [];
    for (let i = 0; i < r.length; i += 2)
      n.push(parseInt(r.substring(i, i + 2), 16));
    return Gi(new Uint8Array(n));
  }
  return ua(t)
    ? Gi(new Uint8Array(t))
    : nt.throwArgumentError("invalid arrayify value", "value", t);
}
function ii(t) {
  const e = t.map((i) => oe(i)),
    r = e.reduce((i, o) => i + o.length, 0),
    n = new Uint8Array(r);
  return e.reduce((i, o) => (n.set(o, i), i + o.length), 0), Gi(n);
}
function Zi(t) {
  let e = oe(t);
  if (e.length === 0) return e;
  let r = 0;
  for (; r < e.length && e[r] === 0; ) r++;
  return r && (e = e.slice(r)), e;
}
function gx(t, e) {
  (t = oe(t)),
    t.length > e &&
      nt.throwArgumentError("value out of range", "value", arguments[0]);
  const r = new Uint8Array(e);
  return r.set(t, e - t.length), Gi(r);
}
function me(t, e) {
  return !(
    typeof t != "string" ||
    !t.match(/^0x[0-9A-Fa-f]*$/) ||
    (e && t.length !== 2 + 2 * e)
  );
}
const uu = "0123456789abcdef";
function ie(t, e) {
  if ((e || (e = {}), typeof t == "number")) {
    nt.checkSafeUint53(t, "invalid hexlify value");
    let r = "";
    for (; t; ) (r = uu[t & 15] + r), (t = Math.floor(t / 16));
    return r.length ? (r.length % 2 && (r = "0" + r), "0x" + r) : "0x00";
  }
  if (typeof t == "bigint")
    return (t = t.toString(16)), t.length % 2 ? "0x0" + t : "0x" + t;
  if (
    (e.allowMissingPrefix &&
      typeof t == "string" &&
      t.substring(0, 2) !== "0x" &&
      (t = "0x" + t),
    Nm(t))
  )
    return t.toHexString();
  if (me(t))
    return (
      t.length % 2 &&
        (e.hexPad === "left"
          ? (t = "0x0" + t.substring(2))
          : e.hexPad === "right"
          ? (t += "0")
          : nt.throwArgumentError("hex data is odd-length", "value", t)),
      t.toLowerCase()
    );
  if (ua(t)) {
    let r = "0x";
    for (let n = 0; n < t.length; n++) {
      let i = t[n];
      r += uu[(i & 240) >> 4] + uu[i & 15];
    }
    return r;
  }
  return nt.throwArgumentError("invalid hexlify value", "value", t);
}
function hi(t) {
  if (typeof t != "string") t = ie(t);
  else if (!me(t) || t.length % 2) return null;
  return (t.length - 2) / 2;
}
function Mt(t, e, r) {
  return (
    typeof t != "string"
      ? (t = ie(t))
      : (!me(t) || t.length % 2) &&
        nt.throwArgumentError("invalid hexData", "value", t),
    (e = 2 + 2 * e),
    r != null ? "0x" + t.substring(e, 2 + 2 * r) : "0x" + t.substring(e)
  );
}
function Qt(t) {
  let e = "0x";
  return (
    t.forEach((r) => {
      e += ie(r).substring(2);
    }),
    e
  );
}
function Tc(t) {
  const e = yx(ie(t, { hexPad: "left" }));
  return e === "0x" ? "0x0" : e;
}
function yx(t) {
  typeof t != "string" && (t = ie(t)),
    me(t) || nt.throwArgumentError("invalid hex string", "value", t),
    (t = t.substring(2));
  let e = 0;
  for (; e < t.length && t[e] === "0"; ) e++;
  return "0x" + t.substring(e);
}
function ut(t, e) {
  for (
    typeof t != "string"
      ? (t = ie(t))
      : me(t) || nt.throwArgumentError("invalid hex string", "value", t),
      t.length > 2 * e + 2 &&
        nt.throwArgumentError("value out of range", "value", arguments[1]);
    t.length < 2 * e + 2;

  )
    t = "0x0" + t.substring(2);
  return t;
}
function fa(t) {
  const e = {
    r: "0x",
    s: "0x",
    _vs: "0x",
    recoveryParam: 0,
    v: 0,
    yParityAndS: "0x",
    compact: "0x",
  };
  if (Ic(t)) {
    let r = oe(t);
    r.length === 64
      ? ((e.v = 27 + (r[32] >> 7)),
        (r[32] &= 127),
        (e.r = ie(r.slice(0, 32))),
        (e.s = ie(r.slice(32, 64))))
      : r.length === 65
      ? ((e.r = ie(r.slice(0, 32))), (e.s = ie(r.slice(32, 64))), (e.v = r[64]))
      : nt.throwArgumentError("invalid signature string", "signature", t),
      e.v < 27 &&
        (e.v === 0 || e.v === 1
          ? (e.v += 27)
          : nt.throwArgumentError("signature invalid v byte", "signature", t)),
      (e.recoveryParam = 1 - (e.v % 2)),
      e.recoveryParam && (r[32] |= 128),
      (e._vs = ie(r.slice(32, 64)));
  } else {
    if (
      ((e.r = t.r),
      (e.s = t.s),
      (e.v = t.v),
      (e.recoveryParam = t.recoveryParam),
      (e._vs = t._vs),
      e._vs != null)
    ) {
      const i = gx(oe(e._vs), 32);
      e._vs = ie(i);
      const o = i[0] >= 128 ? 1 : 0;
      e.recoveryParam == null
        ? (e.recoveryParam = o)
        : e.recoveryParam !== o &&
          nt.throwArgumentError(
            "signature recoveryParam mismatch _vs",
            "signature",
            t
          ),
        (i[0] &= 127);
      const s = ie(i);
      e.s == null
        ? (e.s = s)
        : e.s !== s &&
          nt.throwArgumentError("signature v mismatch _vs", "signature", t);
    }
    if (e.recoveryParam == null)
      e.v == null
        ? nt.throwArgumentError(
            "signature missing v and recoveryParam",
            "signature",
            t
          )
        : e.v === 0 || e.v === 1
        ? (e.recoveryParam = e.v)
        : (e.recoveryParam = 1 - (e.v % 2));
    else if (e.v == null) e.v = 27 + e.recoveryParam;
    else {
      const i = e.v === 0 || e.v === 1 ? e.v : 1 - (e.v % 2);
      e.recoveryParam !== i &&
        nt.throwArgumentError(
          "signature recoveryParam mismatch v",
          "signature",
          t
        );
    }
    e.r == null || !me(e.r)
      ? nt.throwArgumentError("signature missing or invalid r", "signature", t)
      : (e.r = ut(e.r, 32)),
      e.s == null || !me(e.s)
        ? nt.throwArgumentError(
            "signature missing or invalid s",
            "signature",
            t
          )
        : (e.s = ut(e.s, 32));
    const r = oe(e.s);
    r[0] >= 128 &&
      nt.throwArgumentError("signature s out of range", "signature", t),
      e.recoveryParam && (r[0] |= 128);
    const n = ie(r);
    e._vs &&
      (me(e._vs) ||
        nt.throwArgumentError("signature invalid _vs", "signature", t),
      (e._vs = ut(e._vs, 32))),
      e._vs == null
        ? (e._vs = n)
        : e._vs !== n &&
          nt.throwArgumentError(
            "signature _vs mismatch v and s",
            "signature",
            t
          );
  }
  return (
    (e.yParityAndS = e._vs), (e.compact = e.r + e.yParityAndS.substring(2)), e
  );
}
var Cm = { exports: {} };
/**
 * [js-sha3]{@link https://github.com/emn178/js-sha3}
 *
 * @version 0.8.0
 * @author Chen, Yi-Cyuan [emn178@gmail.com]
 * @copyright Chen, Yi-Cyuan 2015-2018
 * @license MIT
 */ (function (t) {
  (function () {
    var e = "input is invalid type",
      r = "finalize already called",
      n = typeof window == "object",
      i = n ? window : {};
    i.JS_SHA3_NO_WINDOW && (n = !1);
    var o = !n && typeof self == "object",
      s =
        !i.JS_SHA3_NO_NODE_JS &&
        typeof process == "object" &&
        process.versions &&
        process.versions.node;
    s ? (i = n0) : o && (i = self);
    var l = !i.JS_SHA3_NO_COMMON_JS && !0 && t.exports,
      a = !i.JS_SHA3_NO_ARRAY_BUFFER && typeof ArrayBuffer < "u",
      f = "0123456789abcdef".split(""),
      h = [31, 7936, 2031616, 520093696],
      p = [4, 1024, 262144, 67108864],
      y = [1, 256, 65536, 16777216],
      S = [6, 1536, 393216, 100663296],
      P = [0, 8, 16, 24],
      M = [
        1, 0, 32898, 0, 32906, 2147483648, 2147516416, 2147483648, 32907, 0,
        2147483649, 0, 2147516545, 2147483648, 32777, 2147483648, 138, 0, 136,
        0, 2147516425, 0, 2147483658, 0, 2147516555, 0, 139, 2147483648, 32905,
        2147483648, 32771, 2147483648, 32770, 2147483648, 128, 2147483648,
        32778, 0, 2147483658, 2147483648, 2147516545, 2147483648, 32896,
        2147483648, 2147483649, 0, 2147516424, 2147483648,
      ],
      I = [224, 256, 384, 512],
      w = [128, 256],
      x = ["hex", "buffer", "arrayBuffer", "array", "digest"],
      N = { 128: 168, 256: 136 };
    (i.JS_SHA3_NO_NODE_JS || !Array.isArray) &&
      (Array.isArray = function (m) {
        return Object.prototype.toString.call(m) === "[object Array]";
      }),
      a &&
        (i.JS_SHA3_NO_ARRAY_BUFFER_IS_VIEW || !ArrayBuffer.isView) &&
        (ArrayBuffer.isView = function (m) {
          return (
            typeof m == "object" &&
            m.buffer &&
            m.buffer.constructor === ArrayBuffer
          );
        });
    for (
      var T = function (m, O, D) {
          return function (F) {
            return new c(m, O, m).update(F)[D]();
          };
        },
        L = function (m, O, D) {
          return function (F, z) {
            return new c(m, O, z).update(F)[D]();
          };
        },
        j = function (m, O, D) {
          return function (F, z, X, Q) {
            return u["cshake" + m].update(F, z, X, Q)[D]();
          };
        },
        H = function (m, O, D) {
          return function (F, z, X, Q) {
            return u["kmac" + m].update(F, z, X, Q)[D]();
          };
        },
        G = function (m, O, D, F) {
          for (var z = 0; z < x.length; ++z) {
            var X = x[z];
            m[X] = O(D, F, X);
          }
          return m;
        },
        ee = function (m, O) {
          var D = T(m, O, "hex");
          return (
            (D.create = function () {
              return new c(m, O, m);
            }),
            (D.update = function (F) {
              return D.create().update(F);
            }),
            G(D, T, m, O)
          );
        },
        Z = function (m, O) {
          var D = L(m, O, "hex");
          return (
            (D.create = function (F) {
              return new c(m, O, F);
            }),
            (D.update = function (F, z) {
              return D.create(z).update(F);
            }),
            G(D, L, m, O)
          );
        },
        se = function (m, O) {
          var D = N[m],
            F = j(m, O, "hex");
          return (
            (F.create = function (z, X, Q) {
              return !X && !Q
                ? u["shake" + m].create(z)
                : new c(m, O, z).bytepad([X, Q], D);
            }),
            (F.update = function (z, X, Q, W) {
              return F.create(X, Q, W).update(z);
            }),
            G(F, j, m, O)
          );
        },
        ht = function (m, O) {
          var D = N[m],
            F = H(m, O, "hex");
          return (
            (F.create = function (z, X, Q) {
              return new b(m, O, X).bytepad(["KMAC", Q], D).bytepad([z], D);
            }),
            (F.update = function (z, X, Q, W) {
              return F.create(z, Q, W).update(X);
            }),
            G(F, H, m, O)
          );
        },
        C = [
          { name: "keccak", padding: y, bits: I, createMethod: ee },
          { name: "sha3", padding: S, bits: I, createMethod: ee },
          { name: "shake", padding: h, bits: w, createMethod: Z },
          { name: "cshake", padding: p, bits: w, createMethod: se },
          { name: "kmac", padding: p, bits: w, createMethod: ht },
        ],
        u = {},
        d = [],
        v = 0;
      v < C.length;
      ++v
    )
      for (var E = C[v], g = E.bits, k = 0; k < g.length; ++k) {
        var R = E.name + "_" + g[k];
        if (
          (d.push(R),
          (u[R] = E.createMethod(g[k], E.padding)),
          E.name !== "sha3")
        ) {
          var A = E.name + g[k];
          d.push(A), (u[A] = u[R]);
        }
      }
    function c(m, O, D) {
      (this.blocks = []),
        (this.s = []),
        (this.padding = O),
        (this.outputBits = D),
        (this.reset = !0),
        (this.finalized = !1),
        (this.block = 0),
        (this.start = 0),
        (this.blockCount = (1600 - (m << 1)) >> 5),
        (this.byteCount = this.blockCount << 2),
        (this.outputBlocks = D >> 5),
        (this.extraBytes = (D & 31) >> 3);
      for (var F = 0; F < 50; ++F) this.s[F] = 0;
    }
    (c.prototype.update = function (m) {
      if (this.finalized) throw new Error(r);
      var O,
        D = typeof m;
      if (D !== "string") {
        if (D === "object") {
          if (m === null) throw new Error(e);
          if (a && m.constructor === ArrayBuffer) m = new Uint8Array(m);
          else if (!Array.isArray(m) && (!a || !ArrayBuffer.isView(m)))
            throw new Error(e);
        } else throw new Error(e);
        O = !0;
      }
      for (
        var F = this.blocks,
          z = this.byteCount,
          X = m.length,
          Q = this.blockCount,
          W = 0,
          Xe = this.s,
          V,
          re;
        W < X;

      ) {
        if (this.reset)
          for (this.reset = !1, F[0] = this.block, V = 1; V < Q + 1; ++V)
            F[V] = 0;
        if (O)
          for (V = this.start; W < X && V < z; ++W)
            F[V >> 2] |= m[W] << P[V++ & 3];
        else
          for (V = this.start; W < X && V < z; ++W)
            (re = m.charCodeAt(W)),
              re < 128
                ? (F[V >> 2] |= re << P[V++ & 3])
                : re < 2048
                ? ((F[V >> 2] |= (192 | (re >> 6)) << P[V++ & 3]),
                  (F[V >> 2] |= (128 | (re & 63)) << P[V++ & 3]))
                : re < 55296 || re >= 57344
                ? ((F[V >> 2] |= (224 | (re >> 12)) << P[V++ & 3]),
                  (F[V >> 2] |= (128 | ((re >> 6) & 63)) << P[V++ & 3]),
                  (F[V >> 2] |= (128 | (re & 63)) << P[V++ & 3]))
                : ((re =
                    65536 + (((re & 1023) << 10) | (m.charCodeAt(++W) & 1023))),
                  (F[V >> 2] |= (240 | (re >> 18)) << P[V++ & 3]),
                  (F[V >> 2] |= (128 | ((re >> 12) & 63)) << P[V++ & 3]),
                  (F[V >> 2] |= (128 | ((re >> 6) & 63)) << P[V++ & 3]),
                  (F[V >> 2] |= (128 | (re & 63)) << P[V++ & 3]));
        if (((this.lastByteIndex = V), V >= z)) {
          for (this.start = V - z, this.block = F[Q], V = 0; V < Q; ++V)
            Xe[V] ^= F[V];
          $(Xe), (this.reset = !0);
        } else this.start = V;
      }
      return this;
    }),
      (c.prototype.encode = function (m, O) {
        var D = m & 255,
          F = 1,
          z = [D];
        for (m = m >> 8, D = m & 255; D > 0; )
          z.unshift(D), (m = m >> 8), (D = m & 255), ++F;
        return O ? z.push(F) : z.unshift(F), this.update(z), z.length;
      }),
      (c.prototype.encodeString = function (m) {
        var O,
          D = typeof m;
        if (D !== "string") {
          if (D === "object") {
            if (m === null) throw new Error(e);
            if (a && m.constructor === ArrayBuffer) m = new Uint8Array(m);
            else if (!Array.isArray(m) && (!a || !ArrayBuffer.isView(m)))
              throw new Error(e);
          } else throw new Error(e);
          O = !0;
        }
        var F = 0,
          z = m.length;
        if (O) F = z;
        else
          for (var X = 0; X < m.length; ++X) {
            var Q = m.charCodeAt(X);
            Q < 128
              ? (F += 1)
              : Q < 2048
              ? (F += 2)
              : Q < 55296 || Q >= 57344
              ? (F += 3)
              : ((Q =
                  65536 + (((Q & 1023) << 10) | (m.charCodeAt(++X) & 1023))),
                (F += 4));
          }
        return (F += this.encode(F * 8)), this.update(m), F;
      }),
      (c.prototype.bytepad = function (m, O) {
        for (var D = this.encode(O), F = 0; F < m.length; ++F)
          D += this.encodeString(m[F]);
        var z = O - (D % O),
          X = [];
        return (X.length = z), this.update(X), this;
      }),
      (c.prototype.finalize = function () {
        if (!this.finalized) {
          this.finalized = !0;
          var m = this.blocks,
            O = this.lastByteIndex,
            D = this.blockCount,
            F = this.s;
          if (
            ((m[O >> 2] |= this.padding[O & 3]),
            this.lastByteIndex === this.byteCount)
          )
            for (m[0] = m[D], O = 1; O < D + 1; ++O) m[O] = 0;
          for (m[D - 1] |= 2147483648, O = 0; O < D; ++O) F[O] ^= m[O];
          $(F);
        }
      }),
      (c.prototype.toString = c.prototype.hex =
        function () {
          this.finalize();
          for (
            var m = this.blockCount,
              O = this.s,
              D = this.outputBlocks,
              F = this.extraBytes,
              z = 0,
              X = 0,
              Q = "",
              W;
            X < D;

          ) {
            for (z = 0; z < m && X < D; ++z, ++X)
              (W = O[z]),
                (Q +=
                  f[(W >> 4) & 15] +
                  f[W & 15] +
                  f[(W >> 12) & 15] +
                  f[(W >> 8) & 15] +
                  f[(W >> 20) & 15] +
                  f[(W >> 16) & 15] +
                  f[(W >> 28) & 15] +
                  f[(W >> 24) & 15]);
            X % m === 0 && ($(O), (z = 0));
          }
          return (
            F &&
              ((W = O[z]),
              (Q += f[(W >> 4) & 15] + f[W & 15]),
              F > 1 && (Q += f[(W >> 12) & 15] + f[(W >> 8) & 15]),
              F > 2 && (Q += f[(W >> 20) & 15] + f[(W >> 16) & 15])),
            Q
          );
        }),
      (c.prototype.arrayBuffer = function () {
        this.finalize();
        var m = this.blockCount,
          O = this.s,
          D = this.outputBlocks,
          F = this.extraBytes,
          z = 0,
          X = 0,
          Q = this.outputBits >> 3,
          W;
        F ? (W = new ArrayBuffer((D + 1) << 2)) : (W = new ArrayBuffer(Q));
        for (var Xe = new Uint32Array(W); X < D; ) {
          for (z = 0; z < m && X < D; ++z, ++X) Xe[X] = O[z];
          X % m === 0 && $(O);
        }
        return F && ((Xe[z] = O[z]), (W = W.slice(0, Q))), W;
      }),
      (c.prototype.buffer = c.prototype.arrayBuffer),
      (c.prototype.digest = c.prototype.array =
        function () {
          this.finalize();
          for (
            var m = this.blockCount,
              O = this.s,
              D = this.outputBlocks,
              F = this.extraBytes,
              z = 0,
              X = 0,
              Q = [],
              W,
              Xe;
            X < D;

          ) {
            for (z = 0; z < m && X < D; ++z, ++X)
              (W = X << 2),
                (Xe = O[z]),
                (Q[W] = Xe & 255),
                (Q[W + 1] = (Xe >> 8) & 255),
                (Q[W + 2] = (Xe >> 16) & 255),
                (Q[W + 3] = (Xe >> 24) & 255);
            X % m === 0 && $(O);
          }
          return (
            F &&
              ((W = X << 2),
              (Xe = O[z]),
              (Q[W] = Xe & 255),
              F > 1 && (Q[W + 1] = (Xe >> 8) & 255),
              F > 2 && (Q[W + 2] = (Xe >> 16) & 255)),
            Q
          );
        });
    function b(m, O, D) {
      c.call(this, m, O, D);
    }
    (b.prototype = new c()),
      (b.prototype.finalize = function () {
        return (
          this.encode(this.outputBits, !0), c.prototype.finalize.call(this)
        );
      });
    var $ = function (m) {
      var O,
        D,
        F,
        z,
        X,
        Q,
        W,
        Xe,
        V,
        re,
        Dn,
        ge,
        ye,
        Fn,
        xe,
        we,
        jn,
        Ae,
        Ee,
        Un,
        be,
        _e,
        zn,
        ke,
        Se,
        Hn,
        Ne,
        Ce,
        Gn,
        Pe,
        Me,
        qn,
        Re,
        Ie,
        Wn,
        Te,
        Oe,
        Qn,
        Le,
        Be,
        Kn,
        De,
        Fe,
        Vn,
        je,
        Ue,
        Jn,
        ze,
        He,
        $n,
        Ge,
        qe,
        Yn,
        We,
        Qe,
        Xn,
        Ke,
        Ve,
        on,
        sn,
        ln,
        an,
        un;
      for (F = 0; F < 48; F += 2)
        (z = m[0] ^ m[10] ^ m[20] ^ m[30] ^ m[40]),
          (X = m[1] ^ m[11] ^ m[21] ^ m[31] ^ m[41]),
          (Q = m[2] ^ m[12] ^ m[22] ^ m[32] ^ m[42]),
          (W = m[3] ^ m[13] ^ m[23] ^ m[33] ^ m[43]),
          (Xe = m[4] ^ m[14] ^ m[24] ^ m[34] ^ m[44]),
          (V = m[5] ^ m[15] ^ m[25] ^ m[35] ^ m[45]),
          (re = m[6] ^ m[16] ^ m[26] ^ m[36] ^ m[46]),
          (Dn = m[7] ^ m[17] ^ m[27] ^ m[37] ^ m[47]),
          (ge = m[8] ^ m[18] ^ m[28] ^ m[38] ^ m[48]),
          (ye = m[9] ^ m[19] ^ m[29] ^ m[39] ^ m[49]),
          (O = ge ^ ((Q << 1) | (W >>> 31))),
          (D = ye ^ ((W << 1) | (Q >>> 31))),
          (m[0] ^= O),
          (m[1] ^= D),
          (m[10] ^= O),
          (m[11] ^= D),
          (m[20] ^= O),
          (m[21] ^= D),
          (m[30] ^= O),
          (m[31] ^= D),
          (m[40] ^= O),
          (m[41] ^= D),
          (O = z ^ ((Xe << 1) | (V >>> 31))),
          (D = X ^ ((V << 1) | (Xe >>> 31))),
          (m[2] ^= O),
          (m[3] ^= D),
          (m[12] ^= O),
          (m[13] ^= D),
          (m[22] ^= O),
          (m[23] ^= D),
          (m[32] ^= O),
          (m[33] ^= D),
          (m[42] ^= O),
          (m[43] ^= D),
          (O = Q ^ ((re << 1) | (Dn >>> 31))),
          (D = W ^ ((Dn << 1) | (re >>> 31))),
          (m[4] ^= O),
          (m[5] ^= D),
          (m[14] ^= O),
          (m[15] ^= D),
          (m[24] ^= O),
          (m[25] ^= D),
          (m[34] ^= O),
          (m[35] ^= D),
          (m[44] ^= O),
          (m[45] ^= D),
          (O = Xe ^ ((ge << 1) | (ye >>> 31))),
          (D = V ^ ((ye << 1) | (ge >>> 31))),
          (m[6] ^= O),
          (m[7] ^= D),
          (m[16] ^= O),
          (m[17] ^= D),
          (m[26] ^= O),
          (m[27] ^= D),
          (m[36] ^= O),
          (m[37] ^= D),
          (m[46] ^= O),
          (m[47] ^= D),
          (O = re ^ ((z << 1) | (X >>> 31))),
          (D = Dn ^ ((X << 1) | (z >>> 31))),
          (m[8] ^= O),
          (m[9] ^= D),
          (m[18] ^= O),
          (m[19] ^= D),
          (m[28] ^= O),
          (m[29] ^= D),
          (m[38] ^= O),
          (m[39] ^= D),
          (m[48] ^= O),
          (m[49] ^= D),
          (Fn = m[0]),
          (xe = m[1]),
          (Ue = (m[11] << 4) | (m[10] >>> 28)),
          (Jn = (m[10] << 4) | (m[11] >>> 28)),
          (Ce = (m[20] << 3) | (m[21] >>> 29)),
          (Gn = (m[21] << 3) | (m[20] >>> 29)),
          (sn = (m[31] << 9) | (m[30] >>> 23)),
          (ln = (m[30] << 9) | (m[31] >>> 23)),
          (De = (m[40] << 18) | (m[41] >>> 14)),
          (Fe = (m[41] << 18) | (m[40] >>> 14)),
          (Ie = (m[2] << 1) | (m[3] >>> 31)),
          (Wn = (m[3] << 1) | (m[2] >>> 31)),
          (we = (m[13] << 12) | (m[12] >>> 20)),
          (jn = (m[12] << 12) | (m[13] >>> 20)),
          (ze = (m[22] << 10) | (m[23] >>> 22)),
          (He = (m[23] << 10) | (m[22] >>> 22)),
          (Pe = (m[33] << 13) | (m[32] >>> 19)),
          (Me = (m[32] << 13) | (m[33] >>> 19)),
          (an = (m[42] << 2) | (m[43] >>> 30)),
          (un = (m[43] << 2) | (m[42] >>> 30)),
          (We = (m[5] << 30) | (m[4] >>> 2)),
          (Qe = (m[4] << 30) | (m[5] >>> 2)),
          (Te = (m[14] << 6) | (m[15] >>> 26)),
          (Oe = (m[15] << 6) | (m[14] >>> 26)),
          (Ae = (m[25] << 11) | (m[24] >>> 21)),
          (Ee = (m[24] << 11) | (m[25] >>> 21)),
          ($n = (m[34] << 15) | (m[35] >>> 17)),
          (Ge = (m[35] << 15) | (m[34] >>> 17)),
          (qn = (m[45] << 29) | (m[44] >>> 3)),
          (Re = (m[44] << 29) | (m[45] >>> 3)),
          (ke = (m[6] << 28) | (m[7] >>> 4)),
          (Se = (m[7] << 28) | (m[6] >>> 4)),
          (Xn = (m[17] << 23) | (m[16] >>> 9)),
          (Ke = (m[16] << 23) | (m[17] >>> 9)),
          (Qn = (m[26] << 25) | (m[27] >>> 7)),
          (Le = (m[27] << 25) | (m[26] >>> 7)),
          (Un = (m[36] << 21) | (m[37] >>> 11)),
          (be = (m[37] << 21) | (m[36] >>> 11)),
          (qe = (m[47] << 24) | (m[46] >>> 8)),
          (Yn = (m[46] << 24) | (m[47] >>> 8)),
          (Vn = (m[8] << 27) | (m[9] >>> 5)),
          (je = (m[9] << 27) | (m[8] >>> 5)),
          (Hn = (m[18] << 20) | (m[19] >>> 12)),
          (Ne = (m[19] << 20) | (m[18] >>> 12)),
          (Ve = (m[29] << 7) | (m[28] >>> 25)),
          (on = (m[28] << 7) | (m[29] >>> 25)),
          (Be = (m[38] << 8) | (m[39] >>> 24)),
          (Kn = (m[39] << 8) | (m[38] >>> 24)),
          (_e = (m[48] << 14) | (m[49] >>> 18)),
          (zn = (m[49] << 14) | (m[48] >>> 18)),
          (m[0] = Fn ^ (~we & Ae)),
          (m[1] = xe ^ (~jn & Ee)),
          (m[10] = ke ^ (~Hn & Ce)),
          (m[11] = Se ^ (~Ne & Gn)),
          (m[20] = Ie ^ (~Te & Qn)),
          (m[21] = Wn ^ (~Oe & Le)),
          (m[30] = Vn ^ (~Ue & ze)),
          (m[31] = je ^ (~Jn & He)),
          (m[40] = We ^ (~Xn & Ve)),
          (m[41] = Qe ^ (~Ke & on)),
          (m[2] = we ^ (~Ae & Un)),
          (m[3] = jn ^ (~Ee & be)),
          (m[12] = Hn ^ (~Ce & Pe)),
          (m[13] = Ne ^ (~Gn & Me)),
          (m[22] = Te ^ (~Qn & Be)),
          (m[23] = Oe ^ (~Le & Kn)),
          (m[32] = Ue ^ (~ze & $n)),
          (m[33] = Jn ^ (~He & Ge)),
          (m[42] = Xn ^ (~Ve & sn)),
          (m[43] = Ke ^ (~on & ln)),
          (m[4] = Ae ^ (~Un & _e)),
          (m[5] = Ee ^ (~be & zn)),
          (m[14] = Ce ^ (~Pe & qn)),
          (m[15] = Gn ^ (~Me & Re)),
          (m[24] = Qn ^ (~Be & De)),
          (m[25] = Le ^ (~Kn & Fe)),
          (m[34] = ze ^ (~$n & qe)),
          (m[35] = He ^ (~Ge & Yn)),
          (m[44] = Ve ^ (~sn & an)),
          (m[45] = on ^ (~ln & un)),
          (m[6] = Un ^ (~_e & Fn)),
          (m[7] = be ^ (~zn & xe)),
          (m[16] = Pe ^ (~qn & ke)),
          (m[17] = Me ^ (~Re & Se)),
          (m[26] = Be ^ (~De & Ie)),
          (m[27] = Kn ^ (~Fe & Wn)),
          (m[36] = $n ^ (~qe & Vn)),
          (m[37] = Ge ^ (~Yn & je)),
          (m[46] = sn ^ (~an & We)),
          (m[47] = ln ^ (~un & Qe)),
          (m[8] = _e ^ (~Fn & we)),
          (m[9] = zn ^ (~xe & jn)),
          (m[18] = qn ^ (~ke & Hn)),
          (m[19] = Re ^ (~Se & Ne)),
          (m[28] = De ^ (~Ie & Te)),
          (m[29] = Fe ^ (~Wn & Oe)),
          (m[38] = qe ^ (~Vn & Ue)),
          (m[39] = Yn ^ (~je & Jn)),
          (m[48] = an ^ (~We & Xn)),
          (m[49] = un ^ (~Qe & Ke)),
          (m[0] ^= M[F]),
          (m[1] ^= M[F + 1]);
    };
    if (l) t.exports = u;
    else for (v = 0; v < d.length; ++v) i[d[v]] = u[d[v]];
  })();
})(Cm);
var xx = Cm.exports;
const wx = cs(xx);
function mt(t) {
  return "0x" + wx.keccak_256(oe(t));
}
function ss() {
  return (
    (ss =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }),
    ss.apply(this, arguments)
  );
}
function Pm(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    ls(t, e);
}
function bf(t) {
  return (
    (bf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    bf(t)
  );
}
function ls(t, e) {
  return (
    (ls =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    ls(t, e)
  );
}
function Ax() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch {
    return !1;
  }
}
function nl(t, e, r) {
  return (
    Ax()
      ? (nl = Reflect.construct)
      : (nl = function (i, o, s) {
          var l = [null];
          l.push.apply(l, o);
          var a = Function.bind.apply(i, l),
            f = new a();
          return s && ls(f, s.prototype), f;
        }),
    nl.apply(null, arguments)
  );
}
function Ex(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Bl(t) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (Bl = function (n) {
      if (n === null || !Ex(n)) return n;
      if (typeof n != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof e < "u") {
        if (e.has(n)) return e.get(n);
        e.set(n, i);
      }
      function i() {
        return nl(n, arguments, bf(this).constructor);
      }
      return (
        (i.prototype = Object.create(n.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        ls(i, n)
      );
    }),
    Bl(t)
  );
}
typeof Symbol < "u" &&
  (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol < "u" &&
  (Symbol.asyncIterator ||
    (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
function vd(t, e) {
  try {
    var r = t();
  } catch (n) {
    return e(n);
  }
  return r && r.then ? r.then(void 0, e) : r;
}
function Mm(t) {
  if (typeof t == "string") {
    t = t.replace(/^Ox/, "0x");
    var e = Number.parseInt(t, t.trim().substring(0, 2) === "0x" ? 16 : 10);
    return Number.isNaN(e) && wn(!1), e;
  } else return Number.isInteger(t) || wn(!1), t;
}
function Rm(t) {
  (typeof t == "string" && t.match(/^(0x)?[0-9a-fA-F]{40}$/)) || wn(!1);
  for (
    var e = t.substring(0, 2) === "0x" ? t : "0x" + t,
      r = e.toLowerCase().substring(2).split(""),
      n = new Uint8Array(40),
      i = 0;
    i < 40;
    i++
  )
    n[i] = r[i].charCodeAt(0);
  for (var o = oe(mt(n)), s = 0; s < 40; s += 2)
    o[s >> 1] >> 4 >= 8 && (r[s] = r[s].toUpperCase()),
      (o[s >> 1] & 15) >= 8 && (r[s + 1] = r[s + 1].toUpperCase());
  var l = "0x" + r.join("");
  return e.match(/([A-F].*[a-f])|([a-f].*[A-F])/) && e !== l && wn(!1), l;
}
var gd = function (e, r) {
    try {
      var n = function (s) {
          return Promise.resolve(
            Promise.all([
              r.chainId === void 0 ? e.getChainId() : r.chainId,
              r.account === void 0 ? e.getAccount() : r.account,
            ])
          ).then(function (l) {
            var a = l[0],
              f = l[1],
              h = Mm(a);
            if (e.supportedChainIds && !e.supportedChainIds.includes(h))
              throw new Im(h, e.supportedChainIds);
            var p = f === null ? f : Rm(f);
            return { provider: s, chainId: h, account: p };
          });
        },
        i = r.provider === void 0;
      return Promise.resolve(
        i ? Promise.resolve(e.getProvider()).then(n) : n(r.provider)
      );
    } catch (o) {
      return Promise.reject(o);
    }
  },
  Fs = (function (t) {
    Pm(e, t);
    function e() {
      var r;
      return (r = t.call(this) || this), (r.name = r.constructor.name), r;
    }
    return e;
  })(Bl(Error)),
  Im = (function (t) {
    Pm(e, t);
    function e(r, n) {
      var i;
      return (
        (i = t.call(this) || this),
        (i.name = i.constructor.name),
        (i.message =
          "Unsupported chain id: " +
          r +
          ". Supported chain ids are: " +
          n +
          "."),
        i
      );
    }
    return e;
  })(Bl(Error)),
  dt;
(function (t) {
  (t[(t.ACTIVATE_CONNECTOR = 0)] = "ACTIVATE_CONNECTOR"),
    (t[(t.UPDATE = 1)] = "UPDATE"),
    (t[(t.UPDATE_FROM_ERROR = 2)] = "UPDATE_FROM_ERROR"),
    (t[(t.ERROR = 3)] = "ERROR"),
    (t[(t.ERROR_FROM_ACTIVATION = 4)] = "ERROR_FROM_ACTIVATION"),
    (t[(t.DEACTIVATE_CONNECTOR = 5)] = "DEACTIVATE_CONNECTOR");
})(dt || (dt = {}));
function bx(t, e) {
  var r = e.type,
    n = e.payload;
  switch (r) {
    case dt.ACTIVATE_CONNECTOR: {
      var i = n.connector,
        o = n.provider,
        s = n.chainId,
        l = n.account,
        a = n.onError;
      return { connector: i, provider: o, chainId: s, account: l, onError: a };
    }
    case dt.UPDATE: {
      var f = n.provider,
        h = n.chainId,
        p = n.account;
      return ss(
        {},
        t,
        f === void 0 ? {} : { provider: f },
        h === void 0 ? {} : { chainId: h },
        p === void 0 ? {} : { account: p }
      );
    }
    case dt.UPDATE_FROM_ERROR: {
      var y = n.provider,
        S = n.chainId,
        P = n.account;
      return ss(
        {},
        t,
        y === void 0 ? {} : { provider: y },
        S === void 0 ? {} : { chainId: S },
        P === void 0 ? {} : { account: P },
        { error: void 0 }
      );
    }
    case dt.ERROR: {
      var M = n.error,
        I = t.connector,
        w = t.onError;
      return { connector: I, error: M, onError: w };
    }
    case dt.ERROR_FROM_ACTIVATION: {
      var x = n.connector,
        N = n.error;
      return { connector: x, error: N };
    }
    case dt.DEACTIVATE_CONNECTOR:
      return {};
  }
}
function _x() {
  var t = q.useReducer(bx, {}),
    e = t[0],
    r = t[1],
    n = e.connector,
    i = e.provider,
    o = e.chainId,
    s = e.account,
    l = e.onError,
    a = e.error,
    f = q.useRef(-1);
  f.current += 1;
  var h = q.useCallback(function (I, w, x) {
      x === void 0 && (x = !1);
      try {
        var N = f.current,
          T = !1;
        return Promise.resolve(
          vd(
            function () {
              return Promise.resolve(
                I.activate().then(function (L) {
                  return (T = !0), L;
                })
              ).then(function (L) {
                return Promise.resolve(gd(I, L)).then(function (j) {
                  if (f.current > N) throw new Fs();
                  r({
                    type: dt.ACTIVATE_CONNECTOR,
                    payload: ss({ connector: I }, j, { onError: w }),
                  });
                });
              });
            },
            function (L) {
              if (L instanceof Fs) T && I.deactivate();
              else {
                if (x) throw (T && I.deactivate(), L);
                w
                  ? (T && I.deactivate(), w(L))
                  : r({
                      type: dt.ERROR_FROM_ACTIVATION,
                      payload: { connector: I, error: L },
                    });
              }
            }
          )
        );
      } catch (L) {
        return Promise.reject(L);
      }
    }, []),
    p = q.useCallback(function (I) {
      r({ type: dt.ERROR, payload: { error: I } });
    }, []),
    y = q.useCallback(function () {
      r({ type: dt.DEACTIVATE_CONNECTOR });
    }, []),
    S = q.useCallback(
      function (I) {
        try {
          if (!n)
            throw Error(
              "This should never happen, it's just so Typescript stops complaining"
            );
          var w = f.current;
          return Promise.resolve(
            (function () {
              if (a)
                return vd(
                  function () {
                    return Promise.resolve(gd(n, I)).then(function (L) {
                      if (f.current > w) throw new Fs();
                      r({ type: dt.UPDATE_FROM_ERROR, payload: L });
                    });
                  },
                  function (L) {
                    L instanceof Fs ||
                      (l ? l(L) : r({ type: dt.ERROR, payload: { error: L } }));
                  }
                );
              var x = I.chainId === void 0 ? void 0 : Mm(I.chainId);
              if (
                x !== void 0 &&
                n.supportedChainIds &&
                !n.supportedChainIds.includes(x)
              ) {
                var N = new Im(x, n.supportedChainIds);
                l ? l(N) : r({ type: dt.ERROR, payload: { error: N } });
              } else {
                var T =
                  typeof I.account == "string" ? Rm(I.account) : I.account;
                r({
                  type: dt.UPDATE,
                  payload: { provider: I.provider, chainId: x, account: T },
                });
              }
            })()
          );
        } catch (x) {
          return Promise.reject(x);
        }
      },
      [n, a, l]
    ),
    P = q.useCallback(
      function (I) {
        l ? l(I) : r({ type: dt.ERROR, payload: { error: I } });
      },
      [l]
    ),
    M = q.useCallback(function () {
      r({ type: dt.DEACTIVATE_CONNECTOR });
    }, []);
  return (
    q.useEffect(
      function () {
        return function () {
          n && n.deactivate();
        };
      },
      [n]
    ),
    q.useEffect(
      function () {
        return (
          n && n.on(yr.Update, S).on(yr.Error, P).on(yr.Deactivate, M),
          function () {
            n && n.off(yr.Update, S).off(yr.Error, P).off(yr.Deactivate, M);
          }
        );
      },
      [n, S, P, M]
    ),
    {
      connector: n,
      provider: i,
      chainId: o,
      account: s,
      activate: h,
      setError: p,
      deactivate: y,
      error: a,
    }
  );
}
var kx = "primary",
  js = {};
function Sx(t) {
  js[t] && wn(!1),
    (js[t] = q.createContext({
      activate: function () {
        try {
          return wn(!1), Promise.resolve();
        } catch (r) {
          return Promise.reject(r);
        }
      },
      setError: function () {
        wn(!1);
      },
      deactivate: function () {
        wn(!1);
      },
      active: !1,
    })),
    (js[t].displayName = "Web3ReactContext - " + t);
  var e = js[t].Provider;
  return function (n) {
    var i = n.getLibrary,
      o = n.children,
      s = _x(),
      l = s.connector,
      a = s.provider,
      f = s.chainId,
      h = s.account,
      p = s.activate,
      y = s.setError,
      S = s.deactivate,
      P = s.error,
      M = l !== void 0 && f !== void 0 && h !== void 0 && !P,
      I = q.useMemo(
        function () {
          return M && f !== void 0 && Number.isInteger(f) && l
            ? i(a, l)
            : void 0;
        },
        [M, i, a, l, f]
      ),
      w = {
        connector: l,
        library: I,
        chainId: f,
        account: h,
        activate: p,
        setError: y,
        deactivate: S,
        active: M,
        error: P,
      };
    return Ff.createElement(e, { value: w }, o);
  };
}
var Nx = Sx(kx),
  Oc = { exports: {} },
  qi = typeof Reflect == "object" ? Reflect : null,
  yd =
    qi && typeof qi.apply == "function"
      ? qi.apply
      : function (e, r, n) {
          return Function.prototype.apply.call(e, r, n);
        },
  il;
qi && typeof qi.ownKeys == "function"
  ? (il = qi.ownKeys)
  : Object.getOwnPropertySymbols
  ? (il = function (e) {
      return Object.getOwnPropertyNames(e).concat(
        Object.getOwnPropertySymbols(e)
      );
    })
  : (il = function (e) {
      return Object.getOwnPropertyNames(e);
    });
function Cx(t) {
  console && console.warn && console.warn(t);
}
var Tm =
  Number.isNaN ||
  function (e) {
    return e !== e;
  };
function pe() {
  pe.init.call(this);
}
Oc.exports = pe;
Oc.exports.once = Ix;
pe.EventEmitter = pe;
pe.prototype._events = void 0;
pe.prototype._eventsCount = 0;
pe.prototype._maxListeners = void 0;
var xd = 10;
function ca(t) {
  if (typeof t != "function")
    throw new TypeError(
      'The "listener" argument must be of type Function. Received type ' +
        typeof t
    );
}
Object.defineProperty(pe, "defaultMaxListeners", {
  enumerable: !0,
  get: function () {
    return xd;
  },
  set: function (t) {
    if (typeof t != "number" || t < 0 || Tm(t))
      throw new RangeError(
        'The value of "defaultMaxListeners" is out of range. It must be a non-negative number. Received ' +
          t +
          "."
      );
    xd = t;
  },
});
pe.init = function () {
  (this._events === void 0 ||
    this._events === Object.getPrototypeOf(this)._events) &&
    ((this._events = Object.create(null)), (this._eventsCount = 0)),
    (this._maxListeners = this._maxListeners || void 0);
};
pe.prototype.setMaxListeners = function (e) {
  if (typeof e != "number" || e < 0 || Tm(e))
    throw new RangeError(
      'The value of "n" is out of range. It must be a non-negative number. Received ' +
        e +
        "."
    );
  return (this._maxListeners = e), this;
};
function Om(t) {
  return t._maxListeners === void 0 ? pe.defaultMaxListeners : t._maxListeners;
}
pe.prototype.getMaxListeners = function () {
  return Om(this);
};
pe.prototype.emit = function (e) {
  for (var r = [], n = 1; n < arguments.length; n++) r.push(arguments[n]);
  var i = e === "error",
    o = this._events;
  if (o !== void 0) i = i && o.error === void 0;
  else if (!i) return !1;
  if (i) {
    var s;
    if ((r.length > 0 && (s = r[0]), s instanceof Error)) throw s;
    var l = new Error("Unhandled error." + (s ? " (" + s.message + ")" : ""));
    throw ((l.context = s), l);
  }
  var a = o[e];
  if (a === void 0) return !1;
  if (typeof a == "function") yd(a, this, r);
  else
    for (var f = a.length, h = jm(a, f), n = 0; n < f; ++n) yd(h[n], this, r);
  return !0;
};
function Lm(t, e, r, n) {
  var i, o, s;
  if (
    (ca(r),
    (o = t._events),
    o === void 0
      ? ((o = t._events = Object.create(null)), (t._eventsCount = 0))
      : (o.newListener !== void 0 &&
          (t.emit("newListener", e, r.listener ? r.listener : r),
          (o = t._events)),
        (s = o[e])),
    s === void 0)
  )
    (s = o[e] = r), ++t._eventsCount;
  else if (
    (typeof s == "function"
      ? (s = o[e] = n ? [r, s] : [s, r])
      : n
      ? s.unshift(r)
      : s.push(r),
    (i = Om(t)),
    i > 0 && s.length > i && !s.warned)
  ) {
    s.warned = !0;
    var l = new Error(
      "Possible EventEmitter memory leak detected. " +
        s.length +
        " " +
        String(e) +
        " listeners added. Use emitter.setMaxListeners() to increase limit"
    );
    (l.name = "MaxListenersExceededWarning"),
      (l.emitter = t),
      (l.type = e),
      (l.count = s.length),
      Cx(l);
  }
  return t;
}
pe.prototype.addListener = function (e, r) {
  return Lm(this, e, r, !1);
};
pe.prototype.on = pe.prototype.addListener;
pe.prototype.prependListener = function (e, r) {
  return Lm(this, e, r, !0);
};
function Px() {
  if (!this.fired)
    return (
      this.target.removeListener(this.type, this.wrapFn),
      (this.fired = !0),
      arguments.length === 0
        ? this.listener.call(this.target)
        : this.listener.apply(this.target, arguments)
    );
}
function Bm(t, e, r) {
  var n = { fired: !1, wrapFn: void 0, target: t, type: e, listener: r },
    i = Px.bind(n);
  return (i.listener = r), (n.wrapFn = i), i;
}
pe.prototype.once = function (e, r) {
  return ca(r), this.on(e, Bm(this, e, r)), this;
};
pe.prototype.prependOnceListener = function (e, r) {
  return ca(r), this.prependListener(e, Bm(this, e, r)), this;
};
pe.prototype.removeListener = function (e, r) {
  var n, i, o, s, l;
  if ((ca(r), (i = this._events), i === void 0)) return this;
  if (((n = i[e]), n === void 0)) return this;
  if (n === r || n.listener === r)
    --this._eventsCount === 0
      ? (this._events = Object.create(null))
      : (delete i[e],
        i.removeListener && this.emit("removeListener", e, n.listener || r));
  else if (typeof n != "function") {
    for (o = -1, s = n.length - 1; s >= 0; s--)
      if (n[s] === r || n[s].listener === r) {
        (l = n[s].listener), (o = s);
        break;
      }
    if (o < 0) return this;
    o === 0 ? n.shift() : Mx(n, o),
      n.length === 1 && (i[e] = n[0]),
      i.removeListener !== void 0 && this.emit("removeListener", e, l || r);
  }
  return this;
};
pe.prototype.off = pe.prototype.removeListener;
pe.prototype.removeAllListeners = function (e) {
  var r, n, i;
  if (((n = this._events), n === void 0)) return this;
  if (n.removeListener === void 0)
    return (
      arguments.length === 0
        ? ((this._events = Object.create(null)), (this._eventsCount = 0))
        : n[e] !== void 0 &&
          (--this._eventsCount === 0
            ? (this._events = Object.create(null))
            : delete n[e]),
      this
    );
  if (arguments.length === 0) {
    var o = Object.keys(n),
      s;
    for (i = 0; i < o.length; ++i)
      (s = o[i]), s !== "removeListener" && this.removeAllListeners(s);
    return (
      this.removeAllListeners("removeListener"),
      (this._events = Object.create(null)),
      (this._eventsCount = 0),
      this
    );
  }
  if (((r = n[e]), typeof r == "function")) this.removeListener(e, r);
  else if (r !== void 0)
    for (i = r.length - 1; i >= 0; i--) this.removeListener(e, r[i]);
  return this;
};
function Dm(t, e, r) {
  var n = t._events;
  if (n === void 0) return [];
  var i = n[e];
  return i === void 0
    ? []
    : typeof i == "function"
    ? r
      ? [i.listener || i]
      : [i]
    : r
    ? Rx(i)
    : jm(i, i.length);
}
pe.prototype.listeners = function (e) {
  return Dm(this, e, !0);
};
pe.prototype.rawListeners = function (e) {
  return Dm(this, e, !1);
};
pe.listenerCount = function (t, e) {
  return typeof t.listenerCount == "function"
    ? t.listenerCount(e)
    : Fm.call(t, e);
};
pe.prototype.listenerCount = Fm;
function Fm(t) {
  var e = this._events;
  if (e !== void 0) {
    var r = e[t];
    if (typeof r == "function") return 1;
    if (r !== void 0) return r.length;
  }
  return 0;
}
pe.prototype.eventNames = function () {
  return this._eventsCount > 0 ? il(this._events) : [];
};
function jm(t, e) {
  for (var r = new Array(e), n = 0; n < e; ++n) r[n] = t[n];
  return r;
}
function Mx(t, e) {
  for (; e + 1 < t.length; e++) t[e] = t[e + 1];
  t.pop();
}
function Rx(t) {
  for (var e = new Array(t.length), r = 0; r < e.length; ++r)
    e[r] = t[r].listener || t[r];
  return e;
}
function Ix(t, e) {
  return new Promise(function (r, n) {
    function i(s) {
      t.removeListener(e, o), n(s);
    }
    function o() {
      typeof t.removeListener == "function" && t.removeListener("error", i),
        r([].slice.call(arguments));
    }
    Um(t, e, o, { once: !0 }), e !== "error" && Tx(t, i, { once: !0 });
  });
}
function Tx(t, e, r) {
  typeof t.on == "function" && Um(t, "error", e, r);
}
function Um(t, e, r, n) {
  if (typeof t.on == "function") n.once ? t.once(e, r) : t.on(e, r);
  else if (typeof t.addEventListener == "function")
    t.addEventListener(e, function i(o) {
      n.once && t.removeEventListener(e, i), r(o);
    });
  else
    throw new TypeError(
      'The "emitter" argument must be of type EventEmitter. Received type ' +
        typeof t
    );
}
var Ox = Oc.exports;
function Lx(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
var Bx = (function (t) {
  Lx(e, t);
  function e(n) {
    var i,
      o = n === void 0 ? {} : n,
      s = o.supportedChainIds;
    return (i = t.call(this) || this), (i.supportedChainIds = s), i;
  }
  var r = e.prototype;
  return (
    (r.emitUpdate = function (i) {
      this.emit(yr.Update, i);
    }),
    (r.emitError = function (i) {
      this.emit(yr.Error, i);
    }),
    (r.emitDeactivate = function () {
      this.emit(yr.Deactivate);
    }),
    e
  );
})(Ox.EventEmitter);
function _f() {
  return (
    (_f =
      Object.assign ||
      function (t) {
        for (var e = 1; e < arguments.length; e++) {
          var r = arguments[e];
          for (var n in r)
            Object.prototype.hasOwnProperty.call(r, n) && (t[n] = r[n]);
        }
        return t;
      }),
    _f.apply(this, arguments)
  );
}
function Lc(t, e) {
  (t.prototype = Object.create(e.prototype)),
    (t.prototype.constructor = t),
    (t.__proto__ = e);
}
function kf(t) {
  return (
    (kf = Object.setPrototypeOf
      ? Object.getPrototypeOf
      : function (r) {
          return r.__proto__ || Object.getPrototypeOf(r);
        }),
    kf(t)
  );
}
function Dl(t, e) {
  return (
    (Dl =
      Object.setPrototypeOf ||
      function (n, i) {
        return (n.__proto__ = i), n;
      }),
    Dl(t, e)
  );
}
function Dx() {
  if (typeof Reflect > "u" || !Reflect.construct || Reflect.construct.sham)
    return !1;
  if (typeof Proxy == "function") return !0;
  try {
    return (
      Date.prototype.toString.call(Reflect.construct(Date, [], function () {})),
      !0
    );
  } catch {
    return !1;
  }
}
function ol(t, e, r) {
  return (
    Dx()
      ? (ol = Reflect.construct)
      : (ol = function (i, o, s) {
          var l = [null];
          l.push.apply(l, o);
          var a = Function.bind.apply(i, l),
            f = new a();
          return s && Dl(f, s.prototype), f;
        }),
    ol.apply(null, arguments)
  );
}
function Fx(t) {
  return Function.toString.call(t).indexOf("[native code]") !== -1;
}
function Fl(t) {
  var e = typeof Map == "function" ? new Map() : void 0;
  return (
    (Fl = function (n) {
      if (n === null || !Fx(n)) return n;
      if (typeof n != "function")
        throw new TypeError(
          "Super expression must either be null or a function"
        );
      if (typeof e < "u") {
        if (e.has(n)) return e.get(n);
        e.set(n, i);
      }
      function i() {
        return ol(n, arguments, kf(this).constructor);
      }
      return (
        (i.prototype = Object.create(n.prototype, {
          constructor: {
            value: i,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })),
        Dl(i, n)
      );
    }),
    Fl(t)
  );
}
function Us(t) {
  if (t === void 0)
    throw new ReferenceError(
      "this hasn't been initialised - super() hasn't been called"
    );
  return t;
}
typeof Symbol < "u" &&
  (Symbol.iterator || (Symbol.iterator = Symbol("Symbol.iterator")));
typeof Symbol < "u" &&
  (Symbol.asyncIterator ||
    (Symbol.asyncIterator = Symbol("Symbol.asyncIterator")));
function Ai(t, e) {
  try {
    var r = t();
  } catch (n) {
    return e(n);
  }
  return r && r.then ? r.then(void 0, e) : r;
}
function Sr(t) {
  return t.hasOwnProperty("result") ? t.result : t;
}
var fu = (function (t) {
    Lc(e, t);
    function e() {
      var r;
      return (
        (r = t.call(this) || this),
        (r.name = r.constructor.name),
        (r.message = "No Ethereum provider was found on window.ethereum."),
        r
      );
    }
    return e;
  })(Fl(Error)),
  jx = (function (t) {
    Lc(e, t);
    function e() {
      var r;
      return (
        (r = t.call(this) || this),
        (r.name = r.constructor.name),
        (r.message = "The user rejected the request."),
        r
      );
    }
    return e;
  })(Fl(Error)),
  Ux = (function (t) {
    Lc(e, t);
    function e(n) {
      var i;
      return (
        (i = t.call(this, n) || this),
        (i.handleNetworkChanged = i.handleNetworkChanged.bind(Us(i))),
        (i.handleChainChanged = i.handleChainChanged.bind(Us(i))),
        (i.handleAccountsChanged = i.handleAccountsChanged.bind(Us(i))),
        (i.handleClose = i.handleClose.bind(Us(i))),
        i
      );
    }
    var r = e.prototype;
    return (
      (r.handleChainChanged = function (i) {
        this.emitUpdate({ chainId: i, provider: window.ethereum });
      }),
      (r.handleAccountsChanged = function (i) {
        i.length === 0
          ? this.emitDeactivate()
          : this.emitUpdate({ account: i[0] });
      }),
      (r.handleClose = function (i, o) {
        this.emitDeactivate();
      }),
      (r.handleNetworkChanged = function (i) {
        this.emitUpdate({ chainId: i, provider: window.ethereum });
      }),
      (r.activate = function () {
        try {
          var i = function (h) {
              if (o) return h;
              function p() {
                return _f(
                  { provider: window.ethereum },
                  l ? { account: l } : {}
                );
              }
              var y = (function () {
                if (!l)
                  return Promise.resolve(
                    window.ethereum.enable().then(function (S) {
                      return S && Sr(S)[0];
                    })
                  ).then(function (S) {
                    l = S;
                  });
              })();
              return y && y.then ? y.then(p) : p(y);
            },
            o = !1,
            s = this;
          if (!window.ethereum) throw new fu();
          window.ethereum.on &&
            (window.ethereum.on("chainChanged", s.handleChainChanged),
            window.ethereum.on("accountsChanged", s.handleAccountsChanged),
            window.ethereum.on("close", s.handleClose),
            window.ethereum.on("networkChanged", s.handleNetworkChanged)),
            window.ethereum.isMetaMask &&
              (window.ethereum.autoRefreshOnNetworkChange = !1);
          var l,
            a = Ai(
              function () {
                return Promise.resolve(
                  window.ethereum
                    .send("eth_requestAccounts")
                    .then(function (f) {
                      return Sr(f)[0];
                    })
                ).then(function (f) {
                  l = f;
                });
              },
              function (f) {
                if (f.code === 4001) throw new jx();
              }
            );
          return Promise.resolve(a && a.then ? a.then(i) : i(a));
        } catch (f) {
          return Promise.reject(f);
        }
      }),
      (r.getProvider = function () {
        try {
          return Promise.resolve(window.ethereum);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      (r.getChainId = function () {
        try {
          var i = function () {
            function a() {
              if (!o)
                try {
                  o = Sr(window.ethereum.send({ method: "net_version" }));
                } catch {}
              return (
                o ||
                  (window.ethereum.isDapper
                    ? (o = Sr(window.ethereum.cachedResults.net_version))
                    : (o =
                        window.ethereum.chainId ||
                        window.ethereum.netVersion ||
                        window.ethereum.networkVersion ||
                        window.ethereum._chainId)),
                o
              );
            }
            var f = (function () {
              if (!o) {
                var h = Ai(
                  function () {
                    return Promise.resolve(
                      window.ethereum.send("net_version").then(Sr)
                    ).then(function (p) {
                      o = p;
                    });
                  },
                  function () {}
                );
                if (h && h.then) return h.then(function () {});
              }
            })();
            return f && f.then ? f.then(a) : a(f);
          };
          if (!window.ethereum) throw new fu();
          var o,
            s = Ai(
              function () {
                return Promise.resolve(
                  window.ethereum.send("eth_chainId").then(Sr)
                ).then(function (l) {
                  o = l;
                });
              },
              function () {}
            );
          return Promise.resolve(s && s.then ? s.then(i) : i(s));
        } catch (l) {
          return Promise.reject(l);
        }
      }),
      (r.getAccount = function () {
        try {
          var i = function () {
            function a() {
              return (
                o ||
                  (o = Sr(window.ethereum.send({ method: "eth_accounts" }))[0]),
                o
              );
            }
            var f = (function () {
              if (!o) {
                var h = Ai(
                  function () {
                    return Promise.resolve(
                      window.ethereum.enable().then(function (p) {
                        return Sr(p)[0];
                      })
                    ).then(function (p) {
                      o = p;
                    });
                  },
                  function () {}
                );
                if (h && h.then) return h.then(function () {});
              }
            })();
            return f && f.then ? f.then(a) : a(f);
          };
          if (!window.ethereum) throw new fu();
          var o,
            s = Ai(
              function () {
                return Promise.resolve(
                  window.ethereum.send("eth_accounts").then(function (l) {
                    return Sr(l)[0];
                  })
                ).then(function (l) {
                  o = l;
                });
              },
              function () {}
            );
          return Promise.resolve(s && s.then ? s.then(i) : i(s));
        } catch (l) {
          return Promise.reject(l);
        }
      }),
      (r.deactivate = function () {
        window.ethereum &&
          window.ethereum.removeListener &&
          (window.ethereum.removeListener(
            "chainChanged",
            this.handleChainChanged
          ),
          window.ethereum.removeListener(
            "accountsChanged",
            this.handleAccountsChanged
          ),
          window.ethereum.removeListener("close", this.handleClose),
          window.ethereum.removeListener(
            "networkChanged",
            this.handleNetworkChanged
          ));
      }),
      (r.isAuthorized = function () {
        try {
          return window.ethereum
            ? Promise.resolve(
                Ai(
                  function () {
                    return Promise.resolve(
                      window.ethereum.send("eth_accounts").then(function (i) {
                        return Sr(i).length > 0;
                      })
                    );
                  },
                  function () {
                    return !1;
                  }
                )
              )
            : Promise.resolve(!1);
        } catch (i) {
          return Promise.reject(i);
        }
      }),
      e
    );
  })(Bx);
new Ux({ supportedChainIds: [1, 3, 4, 5, 42] });
const zx = [
    { name: "Homepage", to: "/" },
    { name: "How to Buy", to: "/how-to-buy" },
    { name: "Roadmap", to: "/roadmap" },
    { name: "Mining", to: "/mining" },
    { name: "Socials", to: "/socials" },
  ],
  Hx = () => {
    const [t, e] = q.useState(!1),
      r = ys();
    return _.jsx("div", {
      className:
        "fixed top-0 w-full z-10 h-[76px] flex bg-black isolate border-b border-[#26242C] justify-center",
      children: _.jsxs("div", {
        className:
          "max-w-[2000px] w-full flex justify-between xl:justify-start px-6 sm:px-10 xl:px-0",
        children: [
          _.jsx("div", {
            className: "grid place-items-center xl:flex-1 max-w-[280px]",
            children: _.jsx(ld, {
              to: "/",
              children: _.jsx("img", {
                src: "/mineai.png",
                alt: "logo",
                className: "max-w-[55px]",
              }),
            }),
          }),
          _.jsx("div", {
            className: "xl:hidden flex items-center justify-end",
            children: _.jsx("button", {
              onClick: () => e((n) => !n),
              children: _.jsx("img", {
                src: t ? "/x-mark.svg" : "/bars.svg",
                alt: "toggle header",
                className: "w-10 z-10 relative",
              }),
            }),
          }),
          _.jsxs("div", {
            className: `border-x border-[#26242C] xl:max-w-[1240px] w-full xl:w-[55%] flex-1 flex flex-col xl:flex-row fixed xl:static right-0 bottom-0 top-0 bg-[#333] max-w-[350px] xl:bg-transparent gap-1 xl:gap-0 px-8 pt-12 xl:p-0 transition-transform duration-500 ${
              t ? "translate-x-0" : "translate-x-full xl:translate-x-0"
            }`,
            children: [
              _.jsx("nav", {
                className:
                  "text-[#999] font-code font-semibold leading-[200%] flex flex-col xl:flex-row gap-2 xl:gap-0 w-full",
                children: zx.map((n, i) =>
                  _.jsx(
                    ld,
                    {
                      to: n.to,
                      onClick: () => e(!1),
                      className: `xl:flex-1 xl:flex items-center justify-center relative ${
                        r.pathname === n.to &&
                        "before:absolute before:h-0.5 before:w-full before:bg-rgbLinear before:top-0 before:xl:block before:hidden text-white xl:border-x first:border-l-0 last:border-r-0 xl:border-[#26242C]"
                      }`,
                      children: _.jsx("span", { children: n.name }),
                    },
                    i
                  )
                ),
              }),
              _.jsx("div", {
                className:
                  "flex xl:hidden justify-center py-4 gap-4 flex-col items-start",
                children: _.jsx("a", {
                  href: "https://mystic-ai-app.vercel.app/",
                  target: "_blank",
                  children: _.jsxs("button", {
                    className:
                      "font-code text-xs font-bold leading-[166%] tracking-[0.42px] uppercase flex h-[43px]",
                    children: [
                      _.jsx("img", {
                        src: "/gradient-button-left-border.svg",
                        alt: "border",
                        className: "h-full",
                      }),
                      _.jsx("span", {
                        className:
                          "flex items-center w-[100px] justify-center relative before:absolute before:inset-0 py-0.5 before:bg-rgbConic before:-z-10 bg-[#333] bg-clip-content h-full",
                        children: "Staking Dapp",
                      }),
                      _.jsx("img", {
                        src: "/gradient-button-right-border.svg",
                        alt: "border",
                        className: "h-full",
                      }),
                    ],
                  }),
                }),
              }),
            ],
          }),
          _.jsx("div", {
            className:
              "hidden xl:flex justify-center py-4 gap-6 flex-1 max-w-[400px]",
            children: _.jsx("a", {
              href: "https://mystic-ai-app.vercel.app/",
              target: "_blank",
              children: _.jsxs("button", {
                className:
                  "font-code text-xs font-bold leading-[166%] tracking-[0.42px] uppercase flex h-[43px]",
                children: [
                  _.jsx("img", {
                    src: "/gradient-button-left-border.svg",
                    alt: "border",
                    className: "h-full",
                  }),
                  _.jsx("span", {
                    className:
                      "flex items-center w-[100px] justify-center relative before:absolute before:inset-0 py-0.5 before:bg-rgbConic before:-z-10 bg-black bg-clip-content h-full",
                    children: "Staking Dapp",
                  }),
                  _.jsx("img", {
                    src: "/gradient-button-right-border.svg",
                    alt: "border",
                    className: "h-full",
                  }),
                ],
              }),
            }),
          }),
        ],
      }),
    });
  },
  Gx = () =>
    _.jsx("div", {
      className:
        "max-w-[1920px] w-[90%] sm:w-full sm:px-[30px] lg:px-[60px] mb-8 mx-auto flex flex-col",
      children: _.jsx("div", {
        className: "bg-black border border-[#26242C] px-12 py-8 self-center",
        children: _.jsx("img", {
          className: "max-w-[200px] object-contain",
          src: "/mineai.png",
          alt: "MysticAI",
        }),
      }),
    }),
  qx = [
    {
      image: "/hero-card-1.png",
      title: "Earn MAI Coins with your PC, GPU & CPU",
      desc: "Leverage the power of your graphics card (GPU) and processor (CPU) to participate in the mining process, contributing to the decentralized network and earning rewards in return.",
      tagLine: "No fuss, no hassle – just MAI coins made easy.",
      button: { text: "Start Mining", url: "#" },
    },
    {
      image: "/hero-card-2.png",
      title: "ASIC Mining",
      desc: `
    An ASIC miner is a specialized device designed specifically for mining they are built with a sole focus on efficiently performing calculations required for mining and they are
highly efficient and much more powerful for their mining task.
    `,
      tagLine: "No contracts. No limits.",
      button: { text: "Learn more", url: "#" },
    },
    {
      image: "/hero-card-3.png",
      title: "EasyMining",
      desc: "No hardware required. We supply the hashpower, and our platform handles the mining. Just purchase a package, relax, and anticipate the block reward!",
      tagLine: "Try mining a block yourself!",
      button: { text: "Start Mining", url: "#" },
    },
    {
      image: "/hero-card-4.png",
      title: "Buy Hashpower",
      desc: "Unlock the potential for significant earnings by acquiring hashpower! When you buy hashpower, you're not just getting computational strength you actively contribute to the mining community and in return you stand to gain a share of the valuable rewards.",
      tagLine: "No contracts. No limits.",
      button: { text: "Start buying", url: "#" },
    },
  ],
  Wx = () =>
    _.jsxs("div", {
      className: "mt-[76px] flex flex-col items-center py-[70px] sm:py-[100px]",
      children: [
        _.jsx("div", {
          className:
            "relative lg:min-h-[175px] flex flex-col lg:flex-row gap-6 sm:gap-10 items-center lg:items-end",
          children: _.jsxs("h1", {
            className:
              "text-[min(32px,6.2vw)] sm:text-[40px] md:text-[48px] lg:text-[64px] xl:text-[72px] 2xl:text-[100px] leading-[120%] font-code font-medium",
            children: [
              _.jsxs("span", {
                className: "relative pl-[1em]",
                children: [
                  _.jsx("img", {
                    src: "/snowflake-icon.svg",
                    alt: "snowflake",
                    className:
                      "absolute top-1/2 -translate-y-1/2 left-0 w-[0.67em]",
                  }),
                  "World’s leading",
                ],
              }),
              _.jsx("br", {}),
              " ",
              _.jsx("span", {
                className: "ml-[1.8em] sm:ml-[2.44em]",
                children: "Hashpower marketplace",
              }),
            ],
          }),
        }),
        _.jsx("span", {
          className:
            "mt-6 sm:mt-7 lg:mt-[px] text-base sm:text-xl lg:text-2xl text-gray-400 px-2",
          children: "Connect your miners and earn MAI Coins for everyshare!",
        }),
        _.jsxs("span", {
          className:
            "mt-6 sm:mt-7 lg:mt-[30px] text-sm sm:text-xl lg:text-2xl text-gray-400 px-2 overflow-hidden max-w-full whitespace-nowrap text-ellipsis",
          children: [
            _.jsx("img", {
              src: "/copy.svg",
              alt: "copy",
              className:
                "w-5 sm:w-6 mr-1 sm:mr-2 -translate-y-0.5 cursor-pointer inline-block",
              onClick: () =>
                navigator.clipboard.writeText(
                  "0x0000000000000000000000000000000000000000"
                ),
            }),
            "CA: 0x0000000000000000000000000000000000000000",
          ],
        }),
        _.jsx("div", {
          className:
            "grid 2xl:grid-cols-2 gap-y-14 lg:gap-y-10 2xl:gap-y-5 gap-x-[80px] w-[90%] sm:w-auto mt-12 lg:mt-16",
          children: qx.map((t, e) =>
            _.jsxs(
              "div",
              {
                className:
                  "relative lg:[&:nth-child(2n-1)]:-translate-x-24 lg:[&:nth-child(2n)]:translate-x-24 2xl:[&:nth-child(2n-1)]:translate-x-0 2xl:[&:nth-child(2n)]:translate-x-0 isolate [&:nth-child(2n)]:2xl:translate-y-[130px] text-[150px] sm:text-[200px] 2xl:text-[260px] lg:pl-[0.35em] pt-[0.75em]",
                children: [
                  _.jsx("div", {
                    className:
                      "text-[1em] font-sora font-thin text-transparent bg-rgbLinear bg-clip-text w-max absolute -top-4 lg:top-0 left-1/2 lg:left-0 -translate-x-1/2 lg:translate-x-0 -z-10",
                    children: (e + 1).toString().padStart(2, "0"),
                  }),
                  _.jsxs(
                    "div",
                    {
                      className:
                        "p-6 pt-0 sm:pt-8 sm:p-8 grid gap-6 sm:gap-8 bg-black border border-[#26242C]",
                      children: [
                        _.jsxs("div", {
                          className:
                            "flex flex-col-reverse sm:flex-row items-center sm:items-start gap-8",
                          children: [
                            _.jsxs("div", {
                              className:
                                "flex flex-col items-center sm:items-start gap-4 sm:gap-6 self-stretch text-center sm:text-start",
                              children: [
                                _.jsx("h2", {
                                  className:
                                    "text-[22px] sm:text-[26px] lg:text-[32px] font-sora sm:max-w-[325px] leading-[150%]",
                                  children: t.title,
                                }),
                                _.jsx("div", {
                                  className: "w-20 h-0.5 bg-white",
                                }),
                                _.jsx("p", {
                                  className:
                                    "text-base sm:text-lg font-code leading-[150%] max-w-[400px] text-[#999]",
                                  children: t.desc,
                                }),
                                _.jsx("span", {
                                  className:
                                    "font-sora text-sm bg-rgbLinear text-transparent bg-clip-text font-light leading-[170%] mt-auto",
                                  children: t.tagLine,
                                }),
                              ],
                            }),
                            _.jsx("img", { src: t.image, alt: "..." }),
                          ],
                        }),
                        _.jsxs("a", {
                          href: t.button.url,
                          className:
                            "flex items-center justify-between py-4 px-8 border border-white",
                          children: [
                            _.jsx("span", {
                              className:
                                "text-xs uppercase font-code font-bold tracking-[0.42px] leading-[166%]",
                              children: t.button.text,
                            }),
                            _.jsx("img", {
                              src: "/rainbowArrow.svg",
                              alt: "arrow",
                            }),
                          ],
                        }),
                      ],
                    },
                    e
                  ),
                ],
              },
              e
            )
          ),
        }),
      ],
    }),
  Qx = () => (
    q.useEffect(() => {
      const t = document.querySelector("#atom > *"),
        e = setInterval(() => {
          t.shadowRoot.querySelector("#spline").style.width &&
            ((t.shadowRoot.querySelector("#spline").style.width = "100%"),
            (t.shadowRoot.querySelector("#spline").style.height = "auto"),
            (t.shadowRoot.querySelector("#logo").style.display = "none"),
            clearInterval(e));
        }, 1);
    }, []),
    _.jsx("div", {
      className:
        "max-w-[1920px] mx-auto flex justify-center mb-72 sm:mb-96 mt-28 sm:mt-32 xl:mt-24",
      children: _.jsxs("div", {
        className:
          "flex flex-col-reverse xl:flex-row justify-between items-center xl:items-end gap-8 xl:gap-16 w-[90%] max-w-[1470px]",
        children: [
          _.jsxs("div", {
            className:
              "relative xl:min-w-[620px] max-w-[min(90vw,600px)] xl:max-w-none xl:w-auto",
            children: [
              _.jsx("div", {
                id: "atom",
                className:
                  "xl:min-w-[620px] max-w-[min(90vw,600px)] xl:max-w-none xl:w-auto aspect-square overflow-hidden",
                children: _.jsx("spline-viewer", {
                  url: "https://prod.spline.design/Ahrg6ai4WjSM3Nmx/scene.splinecode",
                }),
              }),
              _.jsx("img", {
                src: "/robot-hand.png",
                alt: "hand",
                className:
                  "absolute right-0 top-[85%] min-w-[152%] xl:min-w-[916px]",
              }),
            ],
          }),
          _.jsxs("div", {
            className: "grid gap-8 max-w-[652px]",
            children: [
              _.jsxs("div", {
                className: "grid gap-3 sm:gap-4",
                children: [
                  _.jsx("h2", {
                    className: "heading-1 text-center xl:text-start",
                    children: "MysticAI Private Endpoint",
                  }),
                  _.jsx("span", {
                    className:
                      "bg-clip-text text-transparent bg-rgbLinear font-sora text-sm sm:text-base lg:text-lg font-semibold leading-[177%] text-center xl:text-start",
                    children: "Max Performance Max Earnings",
                  }),
                  _.jsx("div", {
                    className: "flex gap-3 border-l-4 border-white pl-3",
                    children: _.jsx("div", {
                      className:
                        "px-4 sm:px-6 py-3 sm:py-4 border border-[#26242C]",
                      children: _.jsx("p", {
                        className:
                          "font-code text-sm sm:text-base lg:text-lg leading-[150%]",
                        children:
                          "The MysticAI Private Endpoint solution is designed for medium-sized and large mining farms that want to optimize their connection to MysticAI and secure maximum performance and earnings.",
                      }),
                    }),
                  }),
                ],
              }),
              _.jsxs("a", {
                href: "#",
                className:
                  "flex items-center justify-between py-4 px-8 border border-white",
                children: [
                  _.jsx("span", {
                    className:
                      "text-xs uppercase font-code font-bold tracking-[0.42px] leading-[166%]",
                    children: "Learn More",
                  }),
                  _.jsx("img", { src: "/rainbowArrow.svg", alt: "arrow" }),
                ],
              }),
            ],
          }),
        ],
      }),
    })
  ),
  Kx = ({ title: t, tags: e }) => {
    const [r, n] = q.useState(!1);
    return _.jsxs("div", {
      className: "pt-8 border-b border-black-700",
      children: [
        _.jsxs("div", {
          className: "flex justify-between items-center gap-5",
          children: [
            _.jsx("div", {
              className: "flex items-center gap-5 sm:gap-8",
              children: _.jsx("h6", {
                className:
                  "text-white font-android text-[clamp(20px,5vw,24px)] sm:text-[28px] leading-[125%] min-w-[145px]",
                children: t,
              }),
            }),
            _.jsx("button", {
              onClick: () => n((i) => !i),
              className: "hover:text-white transition-colors text-[#9D9FA2]",
              children: _.jsx(Vx, {}),
            }),
          ],
        }),
        _.jsx("div", {
          className: `grid transition-all duration-200 pt-8 ${
            r ? "grid-rows-[1fr] pb-8" : "grid-rows-[0fr]"
          }`,
          children: _.jsx("div", {
            className: "flex gap-2 flex-wrap overflow-hidden",
            children: e.map((i, o) =>
              _.jsx(
                "div",
                {
                  className:
                    "text-xs sm:text-base grid place-items-center text-main-4 py-[7px] px-2",
                  children: i,
                },
                o
              )
            ),
          }),
        }),
      ],
    });
  },
  Vx = () =>
    _.jsx("svg", {
      width: "40",
      height: "40",
      viewBox: "0 0 40 40",
      fill: "none",
      xmlns: "http://www.w3.org/2000/svg",
      children: _.jsx("path", {
        "fill-rule": "evenodd",
        "clip-rule": "evenodd",
        d: "M20.7143 8.3333C20.7143 7.93882 20.3945 7.61902 20 7.61902C19.6055 7.61902 19.2857 7.93882 19.2857 8.3333V19.2857H8.3333C7.93882 19.2857 7.61902 19.6055 7.61902 20C7.61902 20.3945 7.93882 20.7143 8.3333 20.7143H19.2857V31.6666C19.2857 32.0611 19.6055 32.3809 20 32.3809C20.3945 32.3809 20.7143 32.0611 20.7143 31.6666V20.7143H31.6666C32.0611 20.7143 32.3809 20.3945 32.3809 20C32.3809 19.6055 32.0611 19.2857 31.6666 19.2857H20.7143V8.3333Z",
        fill: "currentColor",
      }),
    }),
  Jx = [
    {
      title:
        "Where can I find informations about the Token supply, Tax , CA and Lp lock?",
      tags: [
        "Total Supply is 100Million $MAI , Tax is 5/5, Liquidity is locked for 365 days and with a renounced CA.    ",
      ],
    },
    {
      title: `I have technical problems where can I contact customer support?
    `,
      tags: [
        `Join our Telegram group, then expand the channel information. Click on the link labeled "Support," and it will redirect you to a new channel where our team will assist you further.
    `,
      ],
    },
    {
      title: `Why can't I buy on Uniswap transaction won't go through?
    `,
      tags: [
        `If you encounter difficulties swapping on Uniswap for $MAI, consider increasing your slippage to 5-10%. Alternatively, you can use a different swap platform, such as Kibaswap.
    `,
      ],
    },
    {
      title: `Is my hardware supported?
    `,
      tags: [
        `MAI Miner supports and run on all modern graphic cards that uses NVIDEA or AMD chips and also on a variety of INTEL and AMD proccessors. 
    `,
      ],
    },
    {
      title: `How to check which graphics card (GPU) do I have? 
    `,
      tags: [
        `Click " Start " and type in " Device Manager " Once you have your Device Manager opened, navigate to " Display Adapters " and there you will find your GPU type.
    `,
      ],
    },
    {
      title: `Is there any Tutorials or guides for people that are new to this?
    `,
      tags: [
        `If you're looking for tutorials and guides, visit the Telegram channel, go to the chat, and type "/tutorial" or "/guide" to receive the necessary information.
    `,
      ],
    },
  ],
  $x = () =>
    _.jsxs("div", {
      id: "faq",
      className:
        "my-5 lg:my-28 flex max-w-[700px] mx-auto w-[92%] items-center gap-2 sm:gap-5 xl:gap-10 flex-col",
      children: [
        _.jsx("h2", {
          className:
            "text-center uppercase text-white text-[42px] leading-[125%]",
          children: "FAQ",
        }),
        _.jsx("div", {
          className: "flex-1",
          children: Jx.map((t, e) => _.jsx(Kx, { ...t }, e)),
        }),
      ],
    }),
  Yx = () =>
    _.jsxs(_.Fragment, {
      children: [_.jsx(Wx, {}), _.jsx($x, {}), _.jsx(Qx, {})],
    }),
  Xx = () => (
    q.useEffect(() => {
      const t = document.querySelector("#diamond > *"),
        e = setInterval(() => {
          t.shadowRoot.querySelector("#spline").style.width &&
            ((t.shadowRoot.querySelector("#spline").style.width = "100%"),
            (t.shadowRoot.querySelector("#spline").style.height = "auto"),
            (t.shadowRoot.querySelector("#logo").style.display = "none"),
            clearInterval(e));
        }, 1);
    }, []),
    _.jsxs("div", {
      className:
        "isolate mt-[220px] sm:mt-[240px] lg:mt-[270px] mb-[100px] sm:mb-[150px] lg:mb-[200px] grid lg:grid-cols-2 max-w-[1240px] w-[90%] sm:w-[75%] lg:w-[75%] xl:w-[64%] mx-auto relative",
      children: [
        _.jsx("div", {
          className:
            "heading-1 px-10 lg:px-[60px] py-6 lg:py-8 bg-black border border-[#26242C] w-max absolute top-0 left-1/2 xl:left-0 -translate-x-1/2 -translate-y-1/2",
          children: _.jsx("h2", { children: "Contact Us" }),
        }),
        _.jsx("div", {
          id: "diamond",
          className:
            "absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 min-w-[300px] w-3/4 max-w-[450px] lg:max-w-[500px] 2xl:max-w-[600px] aspect-square overflow-hidden [&_*]:w-full",
          children: _.jsx("spline-viewer", {
            url: "https://prod.spline.design/WPVPx5ZvV1V1sLGm/scene.splinecode",
          }),
        }),
        _.jsxs("div", {
          className:
            "p-8 border border-[#26242C] flex flex-col justify-center font-sora gap-2 md:gap-3 h-[300px] sm:h-[360px] bg-black",
          children: [
            _.jsx("span", {
              className: "text-[#999] leading-[150%]",
              children: "Join our",
            }),
            _.jsxs("a", {
              href: "https://t.me/",
              target: "_blank",
              className:
                "flex items-center text-[28px] md:text-[32px] lg:text-[40px] leading-[150%] gap-2.5 z-10 w-max",
              children: [
                "Telegram ",
                _.jsx("img", {
                  src: "/rainbowArrow.svg",
                  alt: "arrow",
                  className: "w-9",
                }),
              ],
            }),
          ],
        }),
        
        _.jsxs("div", {
          className:
            "p-8 border border-[#26242C] flex flex-col justify-center font-sora gap-2 md:gap-3 h-[360px] bg-black",
          children: [
            _.jsx("span", {
              className: "text-[#999] leading-[150%]",
              children: "Follow Our",
            }),
            _.jsxs("a", {
              href: "https://twitter.com/",
              target: "_blank",
              className:
                "flex items-center text-[28px] md:text-[32px] lg:text-[40px] leading-[150%] gap-2.5 z-10 w-max",
              children: [
                "Twitter ",
                _.jsx("img", {
                  src: "/rainbowArrow.svg",
                  alt: "arrow",
                  className: "w-9",
                }),
              ],
            }),
          ],
        }),
        
      ],
    })
  ),
  Zx = [
    {
      title: "Prototype & AI Integrations",
      para: [
        "- Develop a prototype of the mining-as-a-service platform to test the basic functionalities.",
        "- Begin integrating AI algorithms and models into the mining process to optimize resource allocation and efficiency.",
      ],
    },
    {
      title: "Launch Beta & Security Audits",
      para: [
        "- Launch a beta version for testing by a select group of users and gather feedback and make necessary improvements based on user experiences.",
        "- Conduct thorough security audits of the platform to identify and address vulnerabilities.",
      ],
    },
    {
      title: "Updates & Partnerships",
      para: [
        "- Regularly update and improve the platform based on user feedback and emerging technologies.",
        "- Seek partnerships with relevant industry players and mining pools.",
      ],
    },
    {
      title: "Expansion & Fully functional mining platform",
      para: [
        "- Launch the fully functional decentralized AI-powered mining-as-a-service platform.",
        "- Continue building and expanding the community through marketing efforts and engagement initiatives.",
      ],
    },
  ],
  ew = () =>
    _.jsxs("div", {
      className:
        "mt-[100px] mb-[100px] sm:mb-[150px] lg:mb-[170px] max-w-[1240px] w-[90%] sm:w-[75%] lg:w-[75%] xl:w-[64%] mx-auto",
      children: [
        _.jsxs("div", {
          className:
            "flex items-center justify-between w-full flex-col-reverse 2xl:flex-row gap-y-10 lg:gap-y-14",
          children: [
            _.jsxs("h1", {
              className:
                "heading-1 max-w-[420px] !leading-[1.75] 2xl:-translate-x-32 text-center 2xl:text-start",
              children: [
                "The ",
                _.jsx("span", {
                  className: "gradient-border-cut",
                  children: "Future",
                }),
                " Developments of MysticAI",
              ],
            }),
            _.jsx("img", {
              src: "/metal-heart-hands.png",
              alt: "metal heart",
              className: "2xl:mr-14 w-[90%] 2xl:w-auto max-w-[490px]",
            }),
          ],
        }),
        _.jsx("div", {
          className: "flex flex-col mt-9",
          children: Zx.map((t, e) =>
            _.jsxs(
              "div",
              {
                className:
                  "flex flex-col md:flex-row border-t border-[#26242C] last:border-b relative",
                children: [
                  _.jsx("div", {
                    className:
                      "md:absolute right-full px-6 pt-5 md:p-0 w-max md:w-[60px] md:h-[60px] grid place-items-center md:border border-r-0 border-[#26242C] font-code text-lg text-[#999] top-0 md:-top-[1px]",
                    children: (e + 1).toString().padStart(2, "0"),
                  }),
                  _.jsx("div", {
                    className:
                      "w-full px-6 py-4 pb-0 md:pb-10 font-sora text-2xl leading-[150%] flex flex-col gap-4 lg:gap-[60px]",
                    children: _.jsx("h2", { children: t.title }),
                  }),
                  _.jsx("ul", {
                    className:
                      "w-full p-6 pt-4 md:pt-[auto] pb-6 md:pb-10 font-code sm:text-lg text-[#999] leading-[150%] flex flex-col gap-6",
                    children: t.para.map((r, n) =>
                      _.jsx("li", { children: r }, n)
                    ),
                  }),
                ],
              },
              e
            )
          ),
        }),
      ],
    }),
  tw = () =>
    _.jsxs("div", {
      className:
        "mt-[150px] mb-[100px] sm:mb-[150px] lg:mb-[170px] max-w-[1240px] w-[90%] sm:w-[75%] lg:w-[75%] xl:w-[64%] mx-auto",
      children: [
        _.jsxs("div", {
          className:
            "px-4 xl:px-0 flex items-center justify-between w-full flex-col xl:flex-row gap-y-10 text-center xl:text-start",
          children: [
            _.jsxs("h1", {
              className:
                "heading-1 xl:min-w-[380px] max-w-[380px] !leading-[1.75] xl:-translate-x-24 2xl:-translate-x-32",
              children: [
                "Interested in our ",
                _.jsx("span", {
                  className: "gradient-border-cut",
                  children: "Mining?",
                }),
              ],
            }),
            _.jsx("p", {
              className:
                "font-sora text-[#999] leading-[150%] max-w-[508px] mr-6",
              children:
                "If you encounter any technical issues, follow the instructions below. For further assistance, reach out to our support team available on Telegram",
            }),
          ],
        }),
        _.jsxs("div", {
          className: "flex mt-16 sm:mt-24 xl:mt-32 flex-col lg:flex-row",
          children: [
            _.jsxs("div", {
              className: "w-full flex flex-col",
              children: [
                _.jsxs("div", {
                  className:
                    "flex flex-col items-center gap-5 py-6 border-b border-[#26242C]",
                  children: [
                    _.jsxs("div", {
                      className: "relative w-full flex justify-center z-0",
                      children: [
                        _.jsx("div", {
                          className:
                            "absolute left-0 right-0 h-[1px] bg-[#26242C] top-1/2 -translate-y-1/2 -z-10",
                        }),
                        _.jsx("img", { src: "/cpu.png", alt: "cpu" }),
                      ],
                    }),
                    _.jsx("h6", {
                      className:
                        "font-sora sm:text-lg font-semibold leading-[177%]",
                      children: "GPU / CPU",
                    }),
                  ],
                }),
                _.jsx("div", {
                  className: "py-6 self-center bg-black",
                  children: _.jsx("img", {
                    src: "/arrow-down-long.svg",
                    alt: "arrow",
                  }),
                }),
                _.jsxs("div", {
                  className: "flex flex-col gap-10 pl-5 sm:pl-10",
                  children: [
                    _.jsxs("div", {
                      className:
                        "border border-[#26242C] border-r-0 bg-black pr-[1px] bg-clip-content",
                      children: [
                        _.jsx("div", {
                          className:
                            "border-r border-b border-[#26242C] font-sora text-sm font-light leading-[170%] py-3 px-9 w-max min-w-[117px] text-center",
                          children: "STEP 1",
                        }),
                        _.jsx("div", {
                          className: "p-6 text-center",
                          children: _.jsx("span", {
                            className: "font-code sm:text-lg leading-[150%]",
                            children: "Download MAI Miner software",
                          }),
                        }),
                      ],
                    }),
                    _.jsxs("div", {
                      className:
                        "border border-[#26242C] border-r-0 min-w-[117px] text-center bg-black pr-[1px] bg-clip-content",
                      children: [
                        _.jsx("div", {
                          className:
                            "border-r border-b border-[#26242C] font-sora text-sm font-light leading-[170%] py-3 px-9 w-max",
                          children: "STEP 2",
                        }),
                        _.jsxs("div", {
                          className:
                            "p-6 flex flex-col items-center gap-6 sm:gap-10",
                          children: [
                            _.jsx("span", {
                              className:
                                "font-code sm:text-lg leading-[150%] text-center",
                              children:
                                'Once the installation is complete, head over to the "RIG MANAGER." Locate your mining wallet address, and simply copy and paste the address into the open UI.',
                            }),
                            _.jsxs("div", {
                              className:
                                "grid grid-cols-2 gap-x-8 sm:gap-x-12 gap-y-7 sm:gap-y-10 relative",
                              children: [
                                _.jsx("div", {
                                  className:
                                    "absolute left-1/2 -translate-x-1/2 w-[1px] bg-[#26242C] h-full hidden sm:block",
                                }),
                                _.jsxs("div", {
                                  className:
                                    "flex flex-col items-center text-center font-sora",
                                  children: [
                                    _.jsx("span", {
                                      className:
                                        "sm:text-lg font-semibold leading-[177%]",
                                      children: "FREE PLAN",
                                    }),
                                    _.jsx("span", {
                                      className:
                                        "leading-[150%] text-[#999] text-sm sm:text-base",
                                      children: "Limited Access",
                                    }),
                                  ],
                                }),
                                _.jsxs("div", {
                                  className:
                                    "flex flex-col items-center text-center font-sora",
                                  children: [
                                    _.jsx("span", {
                                      className:
                                        "sm:text-lg font-semibold leading-[177%]",
                                      children: "PPP Plan",
                                    }),
                                    _.jsx("span", {
                                      className:
                                        "leading-[150%] text-[#999] text-sm sm:text-base",
                                      children: "Unlimited Access",
                                    }),
                                  ],
                                }),
                                _.jsxs("div", {
                                  className:
                                    "flex flex-col items-center text-center font-sora",
                                  children: [
                                    _.jsx("span", {
                                      className:
                                        "sm:text-lg font-semibold leading-[177%]",
                                      children: "Minting",
                                    }),
                                    _.jsx("span", {
                                      className:
                                        "leading-[150%] text-[#999] text-sm sm:text-base",
                                      children: "Payouts as low as 0.001 BTC",
                                    }),
                                  ],
                                }),
                                _.jsxs("div", {
                                  className:
                                    "flex flex-col items-center text-center font-sora",
                                  children: [
                                    _.jsx("span", {
                                      className:
                                        "sm:text-lg font-semibold leading-[177%]",
                                      children: "PPP Plan",
                                    }),
                                    _.jsx("span", {
                                      className:
                                        "leading-[150%] text-[#999] text-sm sm:text-base",
                                      children:
                                        "Total control of your mining operation",
                                    }),
                                  ],
                                }),
                              ],
                            }),
                          ],
                        }),
                      ],
                    }),
                    _.jsxs("div", {
                      className:
                        "border border-[#26242C] border-r-0 bg-black pr-[1px] bg-clip-content",
                      children: [
                        _.jsx("div", {
                          className:
                            "border-r border-b border-[#26242C] font-sora text-sm font-light leading-[170%] py-3 px-9 w-max min-w-[117px] text-center",
                          children: "STEP 3",
                        }),
                        _.jsx("div", {
                          className: "p-6 text-center",
                          children: _.jsx("span", {
                            className: "font-code sm:text-lg leading-[150%]",
                            children:
                              'Verify the address carefully, then click "Start mining." This action will direct you to the mining page, where you can monitor crucial information like mining status, speed, power, and temperature.',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
            _.jsxs("div", {
              className: "w-full flex flex-col mt-16 lg:mt-0",
              children: [
                _.jsxs("div", {
                  className:
                    "flex flex-col items-center gap-5 py-6 border-b border-[#26242C]",
                  children: [
                    _.jsxs("div", {
                      className: "relative w-full flex justify-center z-0",
                      children: [
                        _.jsx("div", {
                          className:
                            "absolute left-0 right-0 h-[1px] bg-[#26242C] top-1/2 -translate-y-1/2 -z-10",
                        }),
                        _.jsx("img", {
                          src: "/asic-machine.png",
                          alt: "asic machine",
                        }),
                      ],
                    }),
                    _.jsx("h6", {
                      className:
                        "font-sora sm:text-lg font-semibold leading-[177%]",
                      children: "ASIC MACHINE",
                    }),
                  ],
                }),
                _.jsx("div", {
                  className: "py-6 self-center bg-black",
                  children: _.jsx("img", {
                    src: "/arrow-down-long.svg",
                    alt: "arrow",
                  }),
                }),
                _.jsxs("div", {
                  className: "flex flex-col gap-10 pl-5 sm:pl-10",
                  children: [
                    _.jsxs("div", {
                      className:
                        "border border-[#26242C] border-r-0 bg-black pr-[1px] bg-clip-content",
                      children: [
                        _.jsx("div", {
                          className:
                            "border-r border-b border-[#26242C] font-sora text-sm font-light leading-[170%] py-3 px-9 w-max min-w-[117px] text-center",
                          children: "STEP 1",
                        }),
                        _.jsx("div", {
                          className: "p-6 text-center",
                          children: _.jsx("span", {
                            className: "font-code sm:text-lg leading-[150%]",
                            children: "Download MAI Asic software",
                          }),
                        }),
                      ],
                    }),
                    _.jsxs("div", {
                      className:
                        "border border-[#26242C] border-r-0 bg-black pr-[1px] bg-clip-content",
                      children: [
                        _.jsx("div", {
                          className:
                            "border-r border-b border-[#26242C] font-sora text-sm font-light leading-[170%] py-3 px-9 w-max min-w-[117px] text-center",
                          children: "STEP 2",
                        }),
                        _.jsx("div", {
                          className: "p-6 text-center",
                          children: _.jsx("span", {
                            className: "font-code sm:text-lg leading-[150%]",
                            children:
                              'Once the installation is complete, head over to the " Select the desired algorithm."',
                          }),
                        }),
                      ],
                    }),
                    _.jsxs("div", {
                      className:
                        "border border-[#26242C] border-r-0 bg-black pr-[1px] bg-clip-content",
                      children: [
                        _.jsx("div", {
                          className:
                            "border-r border-b border-[#26242C] font-sora text-sm font-light leading-[170%] py-3 px-9 w-max min-w-[117px] text-center",
                          children: "STEP 3",
                        }),
                        _.jsx("div", {
                          className: "p-6 text-center",
                          children: _.jsx("span", {
                            className: "font-code sm:text-lg leading-[150%]",
                            children:
                              'After " Select the desired algorithm " proceed to copy the generated SSL and TCP URL located below.',
                          }),
                        }),
                      ],
                    }),
                    _.jsxs("div", {
                      className:
                        "border border-[#26242C] border-r-0 bg-black pr-[1px] bg-clip-content",
                      children: [
                        _.jsx("div", {
                          className:
                            "border-r border-b border-[#26242C] font-sora text-sm font-light leading-[170%] py-3 px-9 w-max min-w-[117px] text-center",
                          children: "Step 4",
                        }),
                        _.jsx("div", {
                          className: "p-6 text-center",
                          children: _.jsx("span", {
                            className: "font-code sm:text-lg leading-[150%]",
                            children:
                              'Find "Miner Configuration," paste the URL into the designated field, review the information carefully, and then click "Apply.',
                          }),
                        }),
                      ],
                    }),
                  ],
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  rw = () =>
    _.jsxs(_.Fragment, {
      children: [
        _.jsx("br", {}),
        _.jsx("br", {}),
        _.jsx("br", {}),
        _.jsxs("div", {
          className:
            "mt-[100px] mb-[100px] sm:mb-[150px] lg:mb-[170px] max-w-[1240px] w-[90%] sm:w-[75%] lg:w-[75%] xl:w-[64%] mx-auto",
          children: [
            _.jsxs("div", {
              className: "flex flex-col",
              children: [
                _.jsxs("div", {
                  className: "flex gap-x-2 items-center",
                  children: [
                    _.jsx("span", {
                      className: "font-bold text-3xl",
                      children: "1-",
                    }),
                    _.jsx("h1", {
                      className: "font-bold text-3xl",
                      children: "Create a Wallet",
                    }),
                  ],
                }),
                _.jsx("p", {
                  className: "ml-3 mt-4 text-base sm:text-xl text-gray-400",
                  children: "Download metamask and install at your browser.",
                }),
              ],
            }),
            _.jsx("br", {}),
            _.jsx("br", {}),
            _.jsx("br", {}),
            _.jsxs("div", {
              className: "flex flex-col",
              children: [
                _.jsxs("div", {
                  className: "flex gap-x-2 items-center",
                  children: [
                    _.jsx("span", {
                      className: "font-bold text-3xl",
                      children: "2-",
                    }),
                    _.jsx("h1", {
                      className: "font-bold text-3xl",
                      children: "Get ETH",
                    }),
                  ],
                }),
                _.jsx("p", {
                  className: "ml-3 mt-4 text-base sm:text-xl text-gray-400",
                  children:
                    "Have ETH in your wallet to swap for $MAI make sure you have enough for the gas fees.",
                }),
              ],
            }),
            _.jsx("br", {}),
            _.jsx("br", {}),
            _.jsx("br", {}),
            _.jsxs("div", {
              className: "flex flex-col",
              children: [
                _.jsxs("div", {
                  className: "flex gap-x-2 items-center",
                  children: [
                    _.jsx("span", {
                      className: "font-bold text-3xl",
                      children: "3-",
                    }),
                    _.jsx("h1", {
                      className: "font-bold text-3xl",
                      children: "Buy $MAI at uniswap",
                    }),
                  ],
                }),
                _.jsxs("span", {
                  className:
                    "mt-6 sm:mt-7 lg:mt-[30px] text-sm sm:text-lg lg:text-xl text-gray-400 px-2 overflow-hidden max-w-full whitespace-nowrap text-ellipsis",
                  children: [
                    _.jsx("img", {
                      src: "/copy.svg",
                      alt: "copy",
                      className:
                        "w-5 sm:w-6 mr-1 sm:mr-2 -translate-y-0.5 cursor-pointer inline-block",
                      onClick: () =>
                        navigator.clipboard.writeText(
                          "0xF4AaA9428A881a5c054D0ED041F5749a336C9Ab5"
                        ),
                    }),
                    "CA: 0xF4AaA9428A881a5c054D0ED041F5749a336C9Ab5",
                  ],
                }),
                _.jsx("p", {
                  className: "ml-3 mt-4 text-base sm:text-xl text-gray-400",
                  children: `Go to Uniswap and swap your ETH for $MAI tokens for that insert our token contract ( XXXXXXXXXXXXXX ) <- REMEMBER TO ADD UR CA WHEN LAUNCH
                Swap the amount you want and if you have problem swapping , make sure to set a higher slippage 5-10%.`,
                }),
              ],
            }),
          ],
        }),
      ],
    }),
  nw = () =>
    _.jsxs(_.Fragment, {
      children: [
        _.jsx("div", {
          className:
            "fixed top-0 h-full max-w-[1240px] w-[90%] sm:w-[75%] xl:w-[64%] left-1/2 -translate-x-1/2 border-x border-[#26242C] -z-10",
          children: _.jsx("div", {
            className:
              "absolute top-0 bottom-0 w-[1px] bg-[#26242C] left-1/2 -translate-x-1/2",
          }),
        }),
        _.jsx(Hx, {}),
        _.jsxs(nx, {
          children: [
            _.jsx(bi, { path: "/", element: _.jsx(Yx, {}) }),
            _.jsx(bi, { path: "/how-to-buy", element: _.jsx(rw, {}) }),
            _.jsx(bi, { path: "/socials", element: _.jsx(Xx, {}) }),
            _.jsx(bi, { path: "/roadmap", element: _.jsx(ew, {}) }),
            _.jsx(bi, { path: "/mining", element: _.jsx(tw, {}) }),
          ],
        }),
        _.jsx(Gx, {}),
      ],
    });
var Bc = { exports: {} };
const iw = {},
  ow = Object.freeze(
    Object.defineProperty(
      { __proto__: null, default: iw },
      Symbol.toStringTag,
      { value: "Module" }
    )
  ),
  sw = Uv(ow);
Bc.exports;
(function (t) {
  (function (e, r) {
    function n(C, u) {
      if (!C) throw new Error(u || "Assertion failed");
    }
    function i(C, u) {
      C.super_ = u;
      var d = function () {};
      (d.prototype = u.prototype),
        (C.prototype = new d()),
        (C.prototype.constructor = C);
    }
    function o(C, u, d) {
      if (o.isBN(C)) return C;
      (this.negative = 0),
        (this.words = null),
        (this.length = 0),
        (this.red = null),
        C !== null &&
          ((u === "le" || u === "be") && ((d = u), (u = 10)),
          this._init(C || 0, u || 10, d || "be"));
    }
    typeof e == "object" ? (e.exports = o) : (r.BN = o),
      (o.BN = o),
      (o.wordSize = 26);
    var s;
    try {
      typeof window < "u" && typeof window.Buffer < "u"
        ? (s = window.Buffer)
        : (s = sw.Buffer);
    } catch {}
    (o.isBN = function (u) {
      return u instanceof o
        ? !0
        : u !== null &&
            typeof u == "object" &&
            u.constructor.wordSize === o.wordSize &&
            Array.isArray(u.words);
    }),
      (o.max = function (u, d) {
        return u.cmp(d) > 0 ? u : d;
      }),
      (o.min = function (u, d) {
        return u.cmp(d) < 0 ? u : d;
      }),
      (o.prototype._init = function (u, d, v) {
        if (typeof u == "number") return this._initNumber(u, d, v);
        if (typeof u == "object") return this._initArray(u, d, v);
        d === "hex" && (d = 16),
          n(d === (d | 0) && d >= 2 && d <= 36),
          (u = u.toString().replace(/\s+/g, ""));
        var E = 0;
        u[0] === "-" && (E++, (this.negative = 1)),
          E < u.length &&
            (d === 16
              ? this._parseHex(u, E, v)
              : (this._parseBase(u, d, E),
                v === "le" && this._initArray(this.toArray(), d, v)));
      }),
      (o.prototype._initNumber = function (u, d, v) {
        u < 0 && ((this.negative = 1), (u = -u)),
          u < 67108864
            ? ((this.words = [u & 67108863]), (this.length = 1))
            : u < 4503599627370496
            ? ((this.words = [u & 67108863, (u / 67108864) & 67108863]),
              (this.length = 2))
            : (n(u < 9007199254740992),
              (this.words = [u & 67108863, (u / 67108864) & 67108863, 1]),
              (this.length = 3)),
          v === "le" && this._initArray(this.toArray(), d, v);
      }),
      (o.prototype._initArray = function (u, d, v) {
        if ((n(typeof u.length == "number"), u.length <= 0))
          return (this.words = [0]), (this.length = 1), this;
        (this.length = Math.ceil(u.length / 3)),
          (this.words = new Array(this.length));
        for (var E = 0; E < this.length; E++) this.words[E] = 0;
        var g,
          k,
          R = 0;
        if (v === "be")
          for (E = u.length - 1, g = 0; E >= 0; E -= 3)
            (k = u[E] | (u[E - 1] << 8) | (u[E - 2] << 16)),
              (this.words[g] |= (k << R) & 67108863),
              (this.words[g + 1] = (k >>> (26 - R)) & 67108863),
              (R += 24),
              R >= 26 && ((R -= 26), g++);
        else if (v === "le")
          for (E = 0, g = 0; E < u.length; E += 3)
            (k = u[E] | (u[E + 1] << 8) | (u[E + 2] << 16)),
              (this.words[g] |= (k << R) & 67108863),
              (this.words[g + 1] = (k >>> (26 - R)) & 67108863),
              (R += 24),
              R >= 26 && ((R -= 26), g++);
        return this._strip();
      });
    function l(C, u) {
      var d = C.charCodeAt(u);
      if (d >= 48 && d <= 57) return d - 48;
      if (d >= 65 && d <= 70) return d - 55;
      if (d >= 97 && d <= 102) return d - 87;
      n(!1, "Invalid character in " + C);
    }
    function a(C, u, d) {
      var v = l(C, d);
      return d - 1 >= u && (v |= l(C, d - 1) << 4), v;
    }
    o.prototype._parseHex = function (u, d, v) {
      (this.length = Math.ceil((u.length - d) / 6)),
        (this.words = new Array(this.length));
      for (var E = 0; E < this.length; E++) this.words[E] = 0;
      var g = 0,
        k = 0,
        R;
      if (v === "be")
        for (E = u.length - 1; E >= d; E -= 2)
          (R = a(u, d, E) << g),
            (this.words[k] |= R & 67108863),
            g >= 18
              ? ((g -= 18), (k += 1), (this.words[k] |= R >>> 26))
              : (g += 8);
      else {
        var A = u.length - d;
        for (E = A % 2 === 0 ? d + 1 : d; E < u.length; E += 2)
          (R = a(u, d, E) << g),
            (this.words[k] |= R & 67108863),
            g >= 18
              ? ((g -= 18), (k += 1), (this.words[k] |= R >>> 26))
              : (g += 8);
      }
      this._strip();
    };
    function f(C, u, d, v) {
      for (var E = 0, g = 0, k = Math.min(C.length, d), R = u; R < k; R++) {
        var A = C.charCodeAt(R) - 48;
        (E *= v),
          A >= 49 ? (g = A - 49 + 10) : A >= 17 ? (g = A - 17 + 10) : (g = A),
          n(A >= 0 && g < v, "Invalid character"),
          (E += g);
      }
      return E;
    }
    (o.prototype._parseBase = function (u, d, v) {
      (this.words = [0]), (this.length = 1);
      for (var E = 0, g = 1; g <= 67108863; g *= d) E++;
      E--, (g = (g / d) | 0);
      for (
        var k = u.length - v,
          R = k % E,
          A = Math.min(k, k - R) + v,
          c = 0,
          b = v;
        b < A;
        b += E
      )
        (c = f(u, b, b + E, d)),
          this.imuln(g),
          this.words[0] + c < 67108864 ? (this.words[0] += c) : this._iaddn(c);
      if (R !== 0) {
        var $ = 1;
        for (c = f(u, b, u.length, d), b = 0; b < R; b++) $ *= d;
        this.imuln($),
          this.words[0] + c < 67108864 ? (this.words[0] += c) : this._iaddn(c);
      }
      this._strip();
    }),
      (o.prototype.copy = function (u) {
        u.words = new Array(this.length);
        for (var d = 0; d < this.length; d++) u.words[d] = this.words[d];
        (u.length = this.length),
          (u.negative = this.negative),
          (u.red = this.red);
      });
    function h(C, u) {
      (C.words = u.words),
        (C.length = u.length),
        (C.negative = u.negative),
        (C.red = u.red);
    }
    if (
      ((o.prototype._move = function (u) {
        h(u, this);
      }),
      (o.prototype.clone = function () {
        var u = new o(null);
        return this.copy(u), u;
      }),
      (o.prototype._expand = function (u) {
        for (; this.length < u; ) this.words[this.length++] = 0;
        return this;
      }),
      (o.prototype._strip = function () {
        for (; this.length > 1 && this.words[this.length - 1] === 0; )
          this.length--;
        return this._normSign();
      }),
      (o.prototype._normSign = function () {
        return (
          this.length === 1 && this.words[0] === 0 && (this.negative = 0), this
        );
      }),
      typeof Symbol < "u" && typeof Symbol.for == "function")
    )
      try {
        o.prototype[Symbol.for("nodejs.util.inspect.custom")] = p;
      } catch {
        o.prototype.inspect = p;
      }
    else o.prototype.inspect = p;
    function p() {
      return (this.red ? "<BN-R: " : "<BN: ") + this.toString(16) + ">";
    }
    var y = [
        "",
        "0",
        "00",
        "000",
        "0000",
        "00000",
        "000000",
        "0000000",
        "00000000",
        "000000000",
        "0000000000",
        "00000000000",
        "000000000000",
        "0000000000000",
        "00000000000000",
        "000000000000000",
        "0000000000000000",
        "00000000000000000",
        "000000000000000000",
        "0000000000000000000",
        "00000000000000000000",
        "000000000000000000000",
        "0000000000000000000000",
        "00000000000000000000000",
        "000000000000000000000000",
        "0000000000000000000000000",
      ],
      S = [
        0, 0, 25, 16, 12, 11, 10, 9, 8, 8, 7, 7, 7, 7, 6, 6, 6, 6, 6, 6, 6, 5,
        5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5,
      ],
      P = [
        0, 0, 33554432, 43046721, 16777216, 48828125, 60466176, 40353607,
        16777216, 43046721, 1e7, 19487171, 35831808, 62748517, 7529536,
        11390625, 16777216, 24137569, 34012224, 47045881, 64e6, 4084101,
        5153632, 6436343, 7962624, 9765625, 11881376, 14348907, 17210368,
        20511149, 243e5, 28629151, 33554432, 39135393, 45435424, 52521875,
        60466176,
      ];
    (o.prototype.toString = function (u, d) {
      (u = u || 10), (d = d | 0 || 1);
      var v;
      if (u === 16 || u === "hex") {
        v = "";
        for (var E = 0, g = 0, k = 0; k < this.length; k++) {
          var R = this.words[k],
            A = (((R << E) | g) & 16777215).toString(16);
          (g = (R >>> (24 - E)) & 16777215),
            (E += 2),
            E >= 26 && ((E -= 26), k--),
            g !== 0 || k !== this.length - 1
              ? (v = y[6 - A.length] + A + v)
              : (v = A + v);
        }
        for (g !== 0 && (v = g.toString(16) + v); v.length % d !== 0; )
          v = "0" + v;
        return this.negative !== 0 && (v = "-" + v), v;
      }
      if (u === (u | 0) && u >= 2 && u <= 36) {
        var c = S[u],
          b = P[u];
        v = "";
        var $ = this.clone();
        for ($.negative = 0; !$.isZero(); ) {
          var m = $.modrn(b).toString(u);
          ($ = $.idivn(b)),
            $.isZero() ? (v = m + v) : (v = y[c - m.length] + m + v);
        }
        for (this.isZero() && (v = "0" + v); v.length % d !== 0; ) v = "0" + v;
        return this.negative !== 0 && (v = "-" + v), v;
      }
      n(!1, "Base should be between 2 and 36");
    }),
      (o.prototype.toNumber = function () {
        var u = this.words[0];
        return (
          this.length === 2
            ? (u += this.words[1] * 67108864)
            : this.length === 3 && this.words[2] === 1
            ? (u += 4503599627370496 + this.words[1] * 67108864)
            : this.length > 2 &&
              n(!1, "Number can only safely store up to 53 bits"),
          this.negative !== 0 ? -u : u
        );
      }),
      (o.prototype.toJSON = function () {
        return this.toString(16, 2);
      }),
      s &&
        (o.prototype.toBuffer = function (u, d) {
          return this.toArrayLike(s, u, d);
        }),
      (o.prototype.toArray = function (u, d) {
        return this.toArrayLike(Array, u, d);
      });
    var M = function (u, d) {
      return u.allocUnsafe ? u.allocUnsafe(d) : new u(d);
    };
    (o.prototype.toArrayLike = function (u, d, v) {
      this._strip();
      var E = this.byteLength(),
        g = v || Math.max(1, E);
      n(E <= g, "byte array longer than desired length"),
        n(g > 0, "Requested array length <= 0");
      var k = M(u, g),
        R = d === "le" ? "LE" : "BE";
      return this["_toArrayLike" + R](k, E), k;
    }),
      (o.prototype._toArrayLikeLE = function (u, d) {
        for (var v = 0, E = 0, g = 0, k = 0; g < this.length; g++) {
          var R = (this.words[g] << k) | E;
          (u[v++] = R & 255),
            v < u.length && (u[v++] = (R >> 8) & 255),
            v < u.length && (u[v++] = (R >> 16) & 255),
            k === 6
              ? (v < u.length && (u[v++] = (R >> 24) & 255), (E = 0), (k = 0))
              : ((E = R >>> 24), (k += 2));
        }
        if (v < u.length) for (u[v++] = E; v < u.length; ) u[v++] = 0;
      }),
      (o.prototype._toArrayLikeBE = function (u, d) {
        for (var v = u.length - 1, E = 0, g = 0, k = 0; g < this.length; g++) {
          var R = (this.words[g] << k) | E;
          (u[v--] = R & 255),
            v >= 0 && (u[v--] = (R >> 8) & 255),
            v >= 0 && (u[v--] = (R >> 16) & 255),
            k === 6
              ? (v >= 0 && (u[v--] = (R >> 24) & 255), (E = 0), (k = 0))
              : ((E = R >>> 24), (k += 2));
        }
        if (v >= 0) for (u[v--] = E; v >= 0; ) u[v--] = 0;
      }),
      Math.clz32
        ? (o.prototype._countBits = function (u) {
            return 32 - Math.clz32(u);
          })
        : (o.prototype._countBits = function (u) {
            var d = u,
              v = 0;
            return (
              d >= 4096 && ((v += 13), (d >>>= 13)),
              d >= 64 && ((v += 7), (d >>>= 7)),
              d >= 8 && ((v += 4), (d >>>= 4)),
              d >= 2 && ((v += 2), (d >>>= 2)),
              v + d
            );
          }),
      (o.prototype._zeroBits = function (u) {
        if (u === 0) return 26;
        var d = u,
          v = 0;
        return (
          d & 8191 || ((v += 13), (d >>>= 13)),
          d & 127 || ((v += 7), (d >>>= 7)),
          d & 15 || ((v += 4), (d >>>= 4)),
          d & 3 || ((v += 2), (d >>>= 2)),
          d & 1 || v++,
          v
        );
      }),
      (o.prototype.bitLength = function () {
        var u = this.words[this.length - 1],
          d = this._countBits(u);
        return (this.length - 1) * 26 + d;
      });
    function I(C) {
      for (var u = new Array(C.bitLength()), d = 0; d < u.length; d++) {
        var v = (d / 26) | 0,
          E = d % 26;
        u[d] = (C.words[v] >>> E) & 1;
      }
      return u;
    }
    (o.prototype.zeroBits = function () {
      if (this.isZero()) return 0;
      for (var u = 0, d = 0; d < this.length; d++) {
        var v = this._zeroBits(this.words[d]);
        if (((u += v), v !== 26)) break;
      }
      return u;
    }),
      (o.prototype.byteLength = function () {
        return Math.ceil(this.bitLength() / 8);
      }),
      (o.prototype.toTwos = function (u) {
        return this.negative !== 0
          ? this.abs().inotn(u).iaddn(1)
          : this.clone();
      }),
      (o.prototype.fromTwos = function (u) {
        return this.testn(u - 1) ? this.notn(u).iaddn(1).ineg() : this.clone();
      }),
      (o.prototype.isNeg = function () {
        return this.negative !== 0;
      }),
      (o.prototype.neg = function () {
        return this.clone().ineg();
      }),
      (o.prototype.ineg = function () {
        return this.isZero() || (this.negative ^= 1), this;
      }),
      (o.prototype.iuor = function (u) {
        for (; this.length < u.length; ) this.words[this.length++] = 0;
        for (var d = 0; d < u.length; d++)
          this.words[d] = this.words[d] | u.words[d];
        return this._strip();
      }),
      (o.prototype.ior = function (u) {
        return n((this.negative | u.negative) === 0), this.iuor(u);
      }),
      (o.prototype.or = function (u) {
        return this.length > u.length
          ? this.clone().ior(u)
          : u.clone().ior(this);
      }),
      (o.prototype.uor = function (u) {
        return this.length > u.length
          ? this.clone().iuor(u)
          : u.clone().iuor(this);
      }),
      (o.prototype.iuand = function (u) {
        var d;
        this.length > u.length ? (d = u) : (d = this);
        for (var v = 0; v < d.length; v++)
          this.words[v] = this.words[v] & u.words[v];
        return (this.length = d.length), this._strip();
      }),
      (o.prototype.iand = function (u) {
        return n((this.negative | u.negative) === 0), this.iuand(u);
      }),
      (o.prototype.and = function (u) {
        return this.length > u.length
          ? this.clone().iand(u)
          : u.clone().iand(this);
      }),
      (o.prototype.uand = function (u) {
        return this.length > u.length
          ? this.clone().iuand(u)
          : u.clone().iuand(this);
      }),
      (o.prototype.iuxor = function (u) {
        var d, v;
        this.length > u.length ? ((d = this), (v = u)) : ((d = u), (v = this));
        for (var E = 0; E < v.length; E++)
          this.words[E] = d.words[E] ^ v.words[E];
        if (this !== d) for (; E < d.length; E++) this.words[E] = d.words[E];
        return (this.length = d.length), this._strip();
      }),
      (o.prototype.ixor = function (u) {
        return n((this.negative | u.negative) === 0), this.iuxor(u);
      }),
      (o.prototype.xor = function (u) {
        return this.length > u.length
          ? this.clone().ixor(u)
          : u.clone().ixor(this);
      }),
      (o.prototype.uxor = function (u) {
        return this.length > u.length
          ? this.clone().iuxor(u)
          : u.clone().iuxor(this);
      }),
      (o.prototype.inotn = function (u) {
        n(typeof u == "number" && u >= 0);
        var d = Math.ceil(u / 26) | 0,
          v = u % 26;
        this._expand(d), v > 0 && d--;
        for (var E = 0; E < d; E++) this.words[E] = ~this.words[E] & 67108863;
        return (
          v > 0 && (this.words[E] = ~this.words[E] & (67108863 >> (26 - v))),
          this._strip()
        );
      }),
      (o.prototype.notn = function (u) {
        return this.clone().inotn(u);
      }),
      (o.prototype.setn = function (u, d) {
        n(typeof u == "number" && u >= 0);
        var v = (u / 26) | 0,
          E = u % 26;
        return (
          this._expand(v + 1),
          d
            ? (this.words[v] = this.words[v] | (1 << E))
            : (this.words[v] = this.words[v] & ~(1 << E)),
          this._strip()
        );
      }),
      (o.prototype.iadd = function (u) {
        var d;
        if (this.negative !== 0 && u.negative === 0)
          return (
            (this.negative = 0),
            (d = this.isub(u)),
            (this.negative ^= 1),
            this._normSign()
          );
        if (this.negative === 0 && u.negative !== 0)
          return (
            (u.negative = 0),
            (d = this.isub(u)),
            (u.negative = 1),
            d._normSign()
          );
        var v, E;
        this.length > u.length ? ((v = this), (E = u)) : ((v = u), (E = this));
        for (var g = 0, k = 0; k < E.length; k++)
          (d = (v.words[k] | 0) + (E.words[k] | 0) + g),
            (this.words[k] = d & 67108863),
            (g = d >>> 26);
        for (; g !== 0 && k < v.length; k++)
          (d = (v.words[k] | 0) + g),
            (this.words[k] = d & 67108863),
            (g = d >>> 26);
        if (((this.length = v.length), g !== 0))
          (this.words[this.length] = g), this.length++;
        else if (v !== this)
          for (; k < v.length; k++) this.words[k] = v.words[k];
        return this;
      }),
      (o.prototype.add = function (u) {
        var d;
        return u.negative !== 0 && this.negative === 0
          ? ((u.negative = 0), (d = this.sub(u)), (u.negative ^= 1), d)
          : u.negative === 0 && this.negative !== 0
          ? ((this.negative = 0), (d = u.sub(this)), (this.negative = 1), d)
          : this.length > u.length
          ? this.clone().iadd(u)
          : u.clone().iadd(this);
      }),
      (o.prototype.isub = function (u) {
        if (u.negative !== 0) {
          u.negative = 0;
          var d = this.iadd(u);
          return (u.negative = 1), d._normSign();
        } else if (this.negative !== 0)
          return (
            (this.negative = 0),
            this.iadd(u),
            (this.negative = 1),
            this._normSign()
          );
        var v = this.cmp(u);
        if (v === 0)
          return (
            (this.negative = 0), (this.length = 1), (this.words[0] = 0), this
          );
        var E, g;
        v > 0 ? ((E = this), (g = u)) : ((E = u), (g = this));
        for (var k = 0, R = 0; R < g.length; R++)
          (d = (E.words[R] | 0) - (g.words[R] | 0) + k),
            (k = d >> 26),
            (this.words[R] = d & 67108863);
        for (; k !== 0 && R < E.length; R++)
          (d = (E.words[R] | 0) + k),
            (k = d >> 26),
            (this.words[R] = d & 67108863);
        if (k === 0 && R < E.length && E !== this)
          for (; R < E.length; R++) this.words[R] = E.words[R];
        return (
          (this.length = Math.max(this.length, R)),
          E !== this && (this.negative = 1),
          this._strip()
        );
      }),
      (o.prototype.sub = function (u) {
        return this.clone().isub(u);
      });
    function w(C, u, d) {
      d.negative = u.negative ^ C.negative;
      var v = (C.length + u.length) | 0;
      (d.length = v), (v = (v - 1) | 0);
      var E = C.words[0] | 0,
        g = u.words[0] | 0,
        k = E * g,
        R = k & 67108863,
        A = (k / 67108864) | 0;
      d.words[0] = R;
      for (var c = 1; c < v; c++) {
        for (
          var b = A >>> 26,
            $ = A & 67108863,
            m = Math.min(c, u.length - 1),
            O = Math.max(0, c - C.length + 1);
          O <= m;
          O++
        ) {
          var D = (c - O) | 0;
          (E = C.words[D] | 0),
            (g = u.words[O] | 0),
            (k = E * g + $),
            (b += (k / 67108864) | 0),
            ($ = k & 67108863);
        }
        (d.words[c] = $ | 0), (A = b | 0);
      }
      return A !== 0 ? (d.words[c] = A | 0) : d.length--, d._strip();
    }
    var x = function (u, d, v) {
      var E = u.words,
        g = d.words,
        k = v.words,
        R = 0,
        A,
        c,
        b,
        $ = E[0] | 0,
        m = $ & 8191,
        O = $ >>> 13,
        D = E[1] | 0,
        F = D & 8191,
        z = D >>> 13,
        X = E[2] | 0,
        Q = X & 8191,
        W = X >>> 13,
        Xe = E[3] | 0,
        V = Xe & 8191,
        re = Xe >>> 13,
        Dn = E[4] | 0,
        ge = Dn & 8191,
        ye = Dn >>> 13,
        Fn = E[5] | 0,
        xe = Fn & 8191,
        we = Fn >>> 13,
        jn = E[6] | 0,
        Ae = jn & 8191,
        Ee = jn >>> 13,
        Un = E[7] | 0,
        be = Un & 8191,
        _e = Un >>> 13,
        zn = E[8] | 0,
        ke = zn & 8191,
        Se = zn >>> 13,
        Hn = E[9] | 0,
        Ne = Hn & 8191,
        Ce = Hn >>> 13,
        Gn = g[0] | 0,
        Pe = Gn & 8191,
        Me = Gn >>> 13,
        qn = g[1] | 0,
        Re = qn & 8191,
        Ie = qn >>> 13,
        Wn = g[2] | 0,
        Te = Wn & 8191,
        Oe = Wn >>> 13,
        Qn = g[3] | 0,
        Le = Qn & 8191,
        Be = Qn >>> 13,
        Kn = g[4] | 0,
        De = Kn & 8191,
        Fe = Kn >>> 13,
        Vn = g[5] | 0,
        je = Vn & 8191,
        Ue = Vn >>> 13,
        Jn = g[6] | 0,
        ze = Jn & 8191,
        He = Jn >>> 13,
        $n = g[7] | 0,
        Ge = $n & 8191,
        qe = $n >>> 13,
        Yn = g[8] | 0,
        We = Yn & 8191,
        Qe = Yn >>> 13,
        Xn = g[9] | 0,
        Ke = Xn & 8191,
        Ve = Xn >>> 13;
      (v.negative = u.negative ^ d.negative),
        (v.length = 19),
        (A = Math.imul(m, Pe)),
        (c = Math.imul(m, Me)),
        (c = (c + Math.imul(O, Pe)) | 0),
        (b = Math.imul(O, Me));
      var on = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (on >>> 26)) | 0),
        (on &= 67108863),
        (A = Math.imul(F, Pe)),
        (c = Math.imul(F, Me)),
        (c = (c + Math.imul(z, Pe)) | 0),
        (b = Math.imul(z, Me)),
        (A = (A + Math.imul(m, Re)) | 0),
        (c = (c + Math.imul(m, Ie)) | 0),
        (c = (c + Math.imul(O, Re)) | 0),
        (b = (b + Math.imul(O, Ie)) | 0);
      var sn = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (sn >>> 26)) | 0),
        (sn &= 67108863),
        (A = Math.imul(Q, Pe)),
        (c = Math.imul(Q, Me)),
        (c = (c + Math.imul(W, Pe)) | 0),
        (b = Math.imul(W, Me)),
        (A = (A + Math.imul(F, Re)) | 0),
        (c = (c + Math.imul(F, Ie)) | 0),
        (c = (c + Math.imul(z, Re)) | 0),
        (b = (b + Math.imul(z, Ie)) | 0),
        (A = (A + Math.imul(m, Te)) | 0),
        (c = (c + Math.imul(m, Oe)) | 0),
        (c = (c + Math.imul(O, Te)) | 0),
        (b = (b + Math.imul(O, Oe)) | 0);
      var ln = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (ln >>> 26)) | 0),
        (ln &= 67108863),
        (A = Math.imul(V, Pe)),
        (c = Math.imul(V, Me)),
        (c = (c + Math.imul(re, Pe)) | 0),
        (b = Math.imul(re, Me)),
        (A = (A + Math.imul(Q, Re)) | 0),
        (c = (c + Math.imul(Q, Ie)) | 0),
        (c = (c + Math.imul(W, Re)) | 0),
        (b = (b + Math.imul(W, Ie)) | 0),
        (A = (A + Math.imul(F, Te)) | 0),
        (c = (c + Math.imul(F, Oe)) | 0),
        (c = (c + Math.imul(z, Te)) | 0),
        (b = (b + Math.imul(z, Oe)) | 0),
        (A = (A + Math.imul(m, Le)) | 0),
        (c = (c + Math.imul(m, Be)) | 0),
        (c = (c + Math.imul(O, Le)) | 0),
        (b = (b + Math.imul(O, Be)) | 0);
      var an = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (an >>> 26)) | 0),
        (an &= 67108863),
        (A = Math.imul(ge, Pe)),
        (c = Math.imul(ge, Me)),
        (c = (c + Math.imul(ye, Pe)) | 0),
        (b = Math.imul(ye, Me)),
        (A = (A + Math.imul(V, Re)) | 0),
        (c = (c + Math.imul(V, Ie)) | 0),
        (c = (c + Math.imul(re, Re)) | 0),
        (b = (b + Math.imul(re, Ie)) | 0),
        (A = (A + Math.imul(Q, Te)) | 0),
        (c = (c + Math.imul(Q, Oe)) | 0),
        (c = (c + Math.imul(W, Te)) | 0),
        (b = (b + Math.imul(W, Oe)) | 0),
        (A = (A + Math.imul(F, Le)) | 0),
        (c = (c + Math.imul(F, Be)) | 0),
        (c = (c + Math.imul(z, Le)) | 0),
        (b = (b + Math.imul(z, Be)) | 0),
        (A = (A + Math.imul(m, De)) | 0),
        (c = (c + Math.imul(m, Fe)) | 0),
        (c = (c + Math.imul(O, De)) | 0),
        (b = (b + Math.imul(O, Fe)) | 0);
      var un = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (un >>> 26)) | 0),
        (un &= 67108863),
        (A = Math.imul(xe, Pe)),
        (c = Math.imul(xe, Me)),
        (c = (c + Math.imul(we, Pe)) | 0),
        (b = Math.imul(we, Me)),
        (A = (A + Math.imul(ge, Re)) | 0),
        (c = (c + Math.imul(ge, Ie)) | 0),
        (c = (c + Math.imul(ye, Re)) | 0),
        (b = (b + Math.imul(ye, Ie)) | 0),
        (A = (A + Math.imul(V, Te)) | 0),
        (c = (c + Math.imul(V, Oe)) | 0),
        (c = (c + Math.imul(re, Te)) | 0),
        (b = (b + Math.imul(re, Oe)) | 0),
        (A = (A + Math.imul(Q, Le)) | 0),
        (c = (c + Math.imul(Q, Be)) | 0),
        (c = (c + Math.imul(W, Le)) | 0),
        (b = (b + Math.imul(W, Be)) | 0),
        (A = (A + Math.imul(F, De)) | 0),
        (c = (c + Math.imul(F, Fe)) | 0),
        (c = (c + Math.imul(z, De)) | 0),
        (b = (b + Math.imul(z, Fe)) | 0),
        (A = (A + Math.imul(m, je)) | 0),
        (c = (c + Math.imul(m, Ue)) | 0),
        (c = (c + Math.imul(O, je)) | 0),
        (b = (b + Math.imul(O, Ue)) | 0);
      var wa = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (wa >>> 26)) | 0),
        (wa &= 67108863),
        (A = Math.imul(Ae, Pe)),
        (c = Math.imul(Ae, Me)),
        (c = (c + Math.imul(Ee, Pe)) | 0),
        (b = Math.imul(Ee, Me)),
        (A = (A + Math.imul(xe, Re)) | 0),
        (c = (c + Math.imul(xe, Ie)) | 0),
        (c = (c + Math.imul(we, Re)) | 0),
        (b = (b + Math.imul(we, Ie)) | 0),
        (A = (A + Math.imul(ge, Te)) | 0),
        (c = (c + Math.imul(ge, Oe)) | 0),
        (c = (c + Math.imul(ye, Te)) | 0),
        (b = (b + Math.imul(ye, Oe)) | 0),
        (A = (A + Math.imul(V, Le)) | 0),
        (c = (c + Math.imul(V, Be)) | 0),
        (c = (c + Math.imul(re, Le)) | 0),
        (b = (b + Math.imul(re, Be)) | 0),
        (A = (A + Math.imul(Q, De)) | 0),
        (c = (c + Math.imul(Q, Fe)) | 0),
        (c = (c + Math.imul(W, De)) | 0),
        (b = (b + Math.imul(W, Fe)) | 0),
        (A = (A + Math.imul(F, je)) | 0),
        (c = (c + Math.imul(F, Ue)) | 0),
        (c = (c + Math.imul(z, je)) | 0),
        (b = (b + Math.imul(z, Ue)) | 0),
        (A = (A + Math.imul(m, ze)) | 0),
        (c = (c + Math.imul(m, He)) | 0),
        (c = (c + Math.imul(O, ze)) | 0),
        (b = (b + Math.imul(O, He)) | 0);
      var Aa = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (Aa >>> 26)) | 0),
        (Aa &= 67108863),
        (A = Math.imul(be, Pe)),
        (c = Math.imul(be, Me)),
        (c = (c + Math.imul(_e, Pe)) | 0),
        (b = Math.imul(_e, Me)),
        (A = (A + Math.imul(Ae, Re)) | 0),
        (c = (c + Math.imul(Ae, Ie)) | 0),
        (c = (c + Math.imul(Ee, Re)) | 0),
        (b = (b + Math.imul(Ee, Ie)) | 0),
        (A = (A + Math.imul(xe, Te)) | 0),
        (c = (c + Math.imul(xe, Oe)) | 0),
        (c = (c + Math.imul(we, Te)) | 0),
        (b = (b + Math.imul(we, Oe)) | 0),
        (A = (A + Math.imul(ge, Le)) | 0),
        (c = (c + Math.imul(ge, Be)) | 0),
        (c = (c + Math.imul(ye, Le)) | 0),
        (b = (b + Math.imul(ye, Be)) | 0),
        (A = (A + Math.imul(V, De)) | 0),
        (c = (c + Math.imul(V, Fe)) | 0),
        (c = (c + Math.imul(re, De)) | 0),
        (b = (b + Math.imul(re, Fe)) | 0),
        (A = (A + Math.imul(Q, je)) | 0),
        (c = (c + Math.imul(Q, Ue)) | 0),
        (c = (c + Math.imul(W, je)) | 0),
        (b = (b + Math.imul(W, Ue)) | 0),
        (A = (A + Math.imul(F, ze)) | 0),
        (c = (c + Math.imul(F, He)) | 0),
        (c = (c + Math.imul(z, ze)) | 0),
        (b = (b + Math.imul(z, He)) | 0),
        (A = (A + Math.imul(m, Ge)) | 0),
        (c = (c + Math.imul(m, qe)) | 0),
        (c = (c + Math.imul(O, Ge)) | 0),
        (b = (b + Math.imul(O, qe)) | 0);
      var Ea = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (Ea >>> 26)) | 0),
        (Ea &= 67108863),
        (A = Math.imul(ke, Pe)),
        (c = Math.imul(ke, Me)),
        (c = (c + Math.imul(Se, Pe)) | 0),
        (b = Math.imul(Se, Me)),
        (A = (A + Math.imul(be, Re)) | 0),
        (c = (c + Math.imul(be, Ie)) | 0),
        (c = (c + Math.imul(_e, Re)) | 0),
        (b = (b + Math.imul(_e, Ie)) | 0),
        (A = (A + Math.imul(Ae, Te)) | 0),
        (c = (c + Math.imul(Ae, Oe)) | 0),
        (c = (c + Math.imul(Ee, Te)) | 0),
        (b = (b + Math.imul(Ee, Oe)) | 0),
        (A = (A + Math.imul(xe, Le)) | 0),
        (c = (c + Math.imul(xe, Be)) | 0),
        (c = (c + Math.imul(we, Le)) | 0),
        (b = (b + Math.imul(we, Be)) | 0),
        (A = (A + Math.imul(ge, De)) | 0),
        (c = (c + Math.imul(ge, Fe)) | 0),
        (c = (c + Math.imul(ye, De)) | 0),
        (b = (b + Math.imul(ye, Fe)) | 0),
        (A = (A + Math.imul(V, je)) | 0),
        (c = (c + Math.imul(V, Ue)) | 0),
        (c = (c + Math.imul(re, je)) | 0),
        (b = (b + Math.imul(re, Ue)) | 0),
        (A = (A + Math.imul(Q, ze)) | 0),
        (c = (c + Math.imul(Q, He)) | 0),
        (c = (c + Math.imul(W, ze)) | 0),
        (b = (b + Math.imul(W, He)) | 0),
        (A = (A + Math.imul(F, Ge)) | 0),
        (c = (c + Math.imul(F, qe)) | 0),
        (c = (c + Math.imul(z, Ge)) | 0),
        (b = (b + Math.imul(z, qe)) | 0),
        (A = (A + Math.imul(m, We)) | 0),
        (c = (c + Math.imul(m, Qe)) | 0),
        (c = (c + Math.imul(O, We)) | 0),
        (b = (b + Math.imul(O, Qe)) | 0);
      var ba = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (ba >>> 26)) | 0),
        (ba &= 67108863),
        (A = Math.imul(Ne, Pe)),
        (c = Math.imul(Ne, Me)),
        (c = (c + Math.imul(Ce, Pe)) | 0),
        (b = Math.imul(Ce, Me)),
        (A = (A + Math.imul(ke, Re)) | 0),
        (c = (c + Math.imul(ke, Ie)) | 0),
        (c = (c + Math.imul(Se, Re)) | 0),
        (b = (b + Math.imul(Se, Ie)) | 0),
        (A = (A + Math.imul(be, Te)) | 0),
        (c = (c + Math.imul(be, Oe)) | 0),
        (c = (c + Math.imul(_e, Te)) | 0),
        (b = (b + Math.imul(_e, Oe)) | 0),
        (A = (A + Math.imul(Ae, Le)) | 0),
        (c = (c + Math.imul(Ae, Be)) | 0),
        (c = (c + Math.imul(Ee, Le)) | 0),
        (b = (b + Math.imul(Ee, Be)) | 0),
        (A = (A + Math.imul(xe, De)) | 0),
        (c = (c + Math.imul(xe, Fe)) | 0),
        (c = (c + Math.imul(we, De)) | 0),
        (b = (b + Math.imul(we, Fe)) | 0),
        (A = (A + Math.imul(ge, je)) | 0),
        (c = (c + Math.imul(ge, Ue)) | 0),
        (c = (c + Math.imul(ye, je)) | 0),
        (b = (b + Math.imul(ye, Ue)) | 0),
        (A = (A + Math.imul(V, ze)) | 0),
        (c = (c + Math.imul(V, He)) | 0),
        (c = (c + Math.imul(re, ze)) | 0),
        (b = (b + Math.imul(re, He)) | 0),
        (A = (A + Math.imul(Q, Ge)) | 0),
        (c = (c + Math.imul(Q, qe)) | 0),
        (c = (c + Math.imul(W, Ge)) | 0),
        (b = (b + Math.imul(W, qe)) | 0),
        (A = (A + Math.imul(F, We)) | 0),
        (c = (c + Math.imul(F, Qe)) | 0),
        (c = (c + Math.imul(z, We)) | 0),
        (b = (b + Math.imul(z, Qe)) | 0),
        (A = (A + Math.imul(m, Ke)) | 0),
        (c = (c + Math.imul(m, Ve)) | 0),
        (c = (c + Math.imul(O, Ke)) | 0),
        (b = (b + Math.imul(O, Ve)) | 0);
      var _a = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (_a >>> 26)) | 0),
        (_a &= 67108863),
        (A = Math.imul(Ne, Re)),
        (c = Math.imul(Ne, Ie)),
        (c = (c + Math.imul(Ce, Re)) | 0),
        (b = Math.imul(Ce, Ie)),
        (A = (A + Math.imul(ke, Te)) | 0),
        (c = (c + Math.imul(ke, Oe)) | 0),
        (c = (c + Math.imul(Se, Te)) | 0),
        (b = (b + Math.imul(Se, Oe)) | 0),
        (A = (A + Math.imul(be, Le)) | 0),
        (c = (c + Math.imul(be, Be)) | 0),
        (c = (c + Math.imul(_e, Le)) | 0),
        (b = (b + Math.imul(_e, Be)) | 0),
        (A = (A + Math.imul(Ae, De)) | 0),
        (c = (c + Math.imul(Ae, Fe)) | 0),
        (c = (c + Math.imul(Ee, De)) | 0),
        (b = (b + Math.imul(Ee, Fe)) | 0),
        (A = (A + Math.imul(xe, je)) | 0),
        (c = (c + Math.imul(xe, Ue)) | 0),
        (c = (c + Math.imul(we, je)) | 0),
        (b = (b + Math.imul(we, Ue)) | 0),
        (A = (A + Math.imul(ge, ze)) | 0),
        (c = (c + Math.imul(ge, He)) | 0),
        (c = (c + Math.imul(ye, ze)) | 0),
        (b = (b + Math.imul(ye, He)) | 0),
        (A = (A + Math.imul(V, Ge)) | 0),
        (c = (c + Math.imul(V, qe)) | 0),
        (c = (c + Math.imul(re, Ge)) | 0),
        (b = (b + Math.imul(re, qe)) | 0),
        (A = (A + Math.imul(Q, We)) | 0),
        (c = (c + Math.imul(Q, Qe)) | 0),
        (c = (c + Math.imul(W, We)) | 0),
        (b = (b + Math.imul(W, Qe)) | 0),
        (A = (A + Math.imul(F, Ke)) | 0),
        (c = (c + Math.imul(F, Ve)) | 0),
        (c = (c + Math.imul(z, Ke)) | 0),
        (b = (b + Math.imul(z, Ve)) | 0);
      var ka = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (ka >>> 26)) | 0),
        (ka &= 67108863),
        (A = Math.imul(Ne, Te)),
        (c = Math.imul(Ne, Oe)),
        (c = (c + Math.imul(Ce, Te)) | 0),
        (b = Math.imul(Ce, Oe)),
        (A = (A + Math.imul(ke, Le)) | 0),
        (c = (c + Math.imul(ke, Be)) | 0),
        (c = (c + Math.imul(Se, Le)) | 0),
        (b = (b + Math.imul(Se, Be)) | 0),
        (A = (A + Math.imul(be, De)) | 0),
        (c = (c + Math.imul(be, Fe)) | 0),
        (c = (c + Math.imul(_e, De)) | 0),
        (b = (b + Math.imul(_e, Fe)) | 0),
        (A = (A + Math.imul(Ae, je)) | 0),
        (c = (c + Math.imul(Ae, Ue)) | 0),
        (c = (c + Math.imul(Ee, je)) | 0),
        (b = (b + Math.imul(Ee, Ue)) | 0),
        (A = (A + Math.imul(xe, ze)) | 0),
        (c = (c + Math.imul(xe, He)) | 0),
        (c = (c + Math.imul(we, ze)) | 0),
        (b = (b + Math.imul(we, He)) | 0),
        (A = (A + Math.imul(ge, Ge)) | 0),
        (c = (c + Math.imul(ge, qe)) | 0),
        (c = (c + Math.imul(ye, Ge)) | 0),
        (b = (b + Math.imul(ye, qe)) | 0),
        (A = (A + Math.imul(V, We)) | 0),
        (c = (c + Math.imul(V, Qe)) | 0),
        (c = (c + Math.imul(re, We)) | 0),
        (b = (b + Math.imul(re, Qe)) | 0),
        (A = (A + Math.imul(Q, Ke)) | 0),
        (c = (c + Math.imul(Q, Ve)) | 0),
        (c = (c + Math.imul(W, Ke)) | 0),
        (b = (b + Math.imul(W, Ve)) | 0);
      var Sa = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (Sa >>> 26)) | 0),
        (Sa &= 67108863),
        (A = Math.imul(Ne, Le)),
        (c = Math.imul(Ne, Be)),
        (c = (c + Math.imul(Ce, Le)) | 0),
        (b = Math.imul(Ce, Be)),
        (A = (A + Math.imul(ke, De)) | 0),
        (c = (c + Math.imul(ke, Fe)) | 0),
        (c = (c + Math.imul(Se, De)) | 0),
        (b = (b + Math.imul(Se, Fe)) | 0),
        (A = (A + Math.imul(be, je)) | 0),
        (c = (c + Math.imul(be, Ue)) | 0),
        (c = (c + Math.imul(_e, je)) | 0),
        (b = (b + Math.imul(_e, Ue)) | 0),
        (A = (A + Math.imul(Ae, ze)) | 0),
        (c = (c + Math.imul(Ae, He)) | 0),
        (c = (c + Math.imul(Ee, ze)) | 0),
        (b = (b + Math.imul(Ee, He)) | 0),
        (A = (A + Math.imul(xe, Ge)) | 0),
        (c = (c + Math.imul(xe, qe)) | 0),
        (c = (c + Math.imul(we, Ge)) | 0),
        (b = (b + Math.imul(we, qe)) | 0),
        (A = (A + Math.imul(ge, We)) | 0),
        (c = (c + Math.imul(ge, Qe)) | 0),
        (c = (c + Math.imul(ye, We)) | 0),
        (b = (b + Math.imul(ye, Qe)) | 0),
        (A = (A + Math.imul(V, Ke)) | 0),
        (c = (c + Math.imul(V, Ve)) | 0),
        (c = (c + Math.imul(re, Ke)) | 0),
        (b = (b + Math.imul(re, Ve)) | 0);
      var Na = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (Na >>> 26)) | 0),
        (Na &= 67108863),
        (A = Math.imul(Ne, De)),
        (c = Math.imul(Ne, Fe)),
        (c = (c + Math.imul(Ce, De)) | 0),
        (b = Math.imul(Ce, Fe)),
        (A = (A + Math.imul(ke, je)) | 0),
        (c = (c + Math.imul(ke, Ue)) | 0),
        (c = (c + Math.imul(Se, je)) | 0),
        (b = (b + Math.imul(Se, Ue)) | 0),
        (A = (A + Math.imul(be, ze)) | 0),
        (c = (c + Math.imul(be, He)) | 0),
        (c = (c + Math.imul(_e, ze)) | 0),
        (b = (b + Math.imul(_e, He)) | 0),
        (A = (A + Math.imul(Ae, Ge)) | 0),
        (c = (c + Math.imul(Ae, qe)) | 0),
        (c = (c + Math.imul(Ee, Ge)) | 0),
        (b = (b + Math.imul(Ee, qe)) | 0),
        (A = (A + Math.imul(xe, We)) | 0),
        (c = (c + Math.imul(xe, Qe)) | 0),
        (c = (c + Math.imul(we, We)) | 0),
        (b = (b + Math.imul(we, Qe)) | 0),
        (A = (A + Math.imul(ge, Ke)) | 0),
        (c = (c + Math.imul(ge, Ve)) | 0),
        (c = (c + Math.imul(ye, Ke)) | 0),
        (b = (b + Math.imul(ye, Ve)) | 0);
      var Ca = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (Ca >>> 26)) | 0),
        (Ca &= 67108863),
        (A = Math.imul(Ne, je)),
        (c = Math.imul(Ne, Ue)),
        (c = (c + Math.imul(Ce, je)) | 0),
        (b = Math.imul(Ce, Ue)),
        (A = (A + Math.imul(ke, ze)) | 0),
        (c = (c + Math.imul(ke, He)) | 0),
        (c = (c + Math.imul(Se, ze)) | 0),
        (b = (b + Math.imul(Se, He)) | 0),
        (A = (A + Math.imul(be, Ge)) | 0),
        (c = (c + Math.imul(be, qe)) | 0),
        (c = (c + Math.imul(_e, Ge)) | 0),
        (b = (b + Math.imul(_e, qe)) | 0),
        (A = (A + Math.imul(Ae, We)) | 0),
        (c = (c + Math.imul(Ae, Qe)) | 0),
        (c = (c + Math.imul(Ee, We)) | 0),
        (b = (b + Math.imul(Ee, Qe)) | 0),
        (A = (A + Math.imul(xe, Ke)) | 0),
        (c = (c + Math.imul(xe, Ve)) | 0),
        (c = (c + Math.imul(we, Ke)) | 0),
        (b = (b + Math.imul(we, Ve)) | 0);
      var Pa = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (Pa >>> 26)) | 0),
        (Pa &= 67108863),
        (A = Math.imul(Ne, ze)),
        (c = Math.imul(Ne, He)),
        (c = (c + Math.imul(Ce, ze)) | 0),
        (b = Math.imul(Ce, He)),
        (A = (A + Math.imul(ke, Ge)) | 0),
        (c = (c + Math.imul(ke, qe)) | 0),
        (c = (c + Math.imul(Se, Ge)) | 0),
        (b = (b + Math.imul(Se, qe)) | 0),
        (A = (A + Math.imul(be, We)) | 0),
        (c = (c + Math.imul(be, Qe)) | 0),
        (c = (c + Math.imul(_e, We)) | 0),
        (b = (b + Math.imul(_e, Qe)) | 0),
        (A = (A + Math.imul(Ae, Ke)) | 0),
        (c = (c + Math.imul(Ae, Ve)) | 0),
        (c = (c + Math.imul(Ee, Ke)) | 0),
        (b = (b + Math.imul(Ee, Ve)) | 0);
      var Ma = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (Ma >>> 26)) | 0),
        (Ma &= 67108863),
        (A = Math.imul(Ne, Ge)),
        (c = Math.imul(Ne, qe)),
        (c = (c + Math.imul(Ce, Ge)) | 0),
        (b = Math.imul(Ce, qe)),
        (A = (A + Math.imul(ke, We)) | 0),
        (c = (c + Math.imul(ke, Qe)) | 0),
        (c = (c + Math.imul(Se, We)) | 0),
        (b = (b + Math.imul(Se, Qe)) | 0),
        (A = (A + Math.imul(be, Ke)) | 0),
        (c = (c + Math.imul(be, Ve)) | 0),
        (c = (c + Math.imul(_e, Ke)) | 0),
        (b = (b + Math.imul(_e, Ve)) | 0);
      var Ra = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (Ra >>> 26)) | 0),
        (Ra &= 67108863),
        (A = Math.imul(Ne, We)),
        (c = Math.imul(Ne, Qe)),
        (c = (c + Math.imul(Ce, We)) | 0),
        (b = Math.imul(Ce, Qe)),
        (A = (A + Math.imul(ke, Ke)) | 0),
        (c = (c + Math.imul(ke, Ve)) | 0),
        (c = (c + Math.imul(Se, Ke)) | 0),
        (b = (b + Math.imul(Se, Ve)) | 0);
      var Ia = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      (R = (((b + (c >>> 13)) | 0) + (Ia >>> 26)) | 0),
        (Ia &= 67108863),
        (A = Math.imul(Ne, Ke)),
        (c = Math.imul(Ne, Ve)),
        (c = (c + Math.imul(Ce, Ke)) | 0),
        (b = Math.imul(Ce, Ve));
      var Ta = (((R + A) | 0) + ((c & 8191) << 13)) | 0;
      return (
        (R = (((b + (c >>> 13)) | 0) + (Ta >>> 26)) | 0),
        (Ta &= 67108863),
        (k[0] = on),
        (k[1] = sn),
        (k[2] = ln),
        (k[3] = an),
        (k[4] = un),
        (k[5] = wa),
        (k[6] = Aa),
        (k[7] = Ea),
        (k[8] = ba),
        (k[9] = _a),
        (k[10] = ka),
        (k[11] = Sa),
        (k[12] = Na),
        (k[13] = Ca),
        (k[14] = Pa),
        (k[15] = Ma),
        (k[16] = Ra),
        (k[17] = Ia),
        (k[18] = Ta),
        R !== 0 && ((k[19] = R), v.length++),
        v
      );
    };
    Math.imul || (x = w);
    function N(C, u, d) {
      (d.negative = u.negative ^ C.negative), (d.length = C.length + u.length);
      for (var v = 0, E = 0, g = 0; g < d.length - 1; g++) {
        var k = E;
        E = 0;
        for (
          var R = v & 67108863,
            A = Math.min(g, u.length - 1),
            c = Math.max(0, g - C.length + 1);
          c <= A;
          c++
        ) {
          var b = g - c,
            $ = C.words[b] | 0,
            m = u.words[c] | 0,
            O = $ * m,
            D = O & 67108863;
          (k = (k + ((O / 67108864) | 0)) | 0),
            (D = (D + R) | 0),
            (R = D & 67108863),
            (k = (k + (D >>> 26)) | 0),
            (E += k >>> 26),
            (k &= 67108863);
        }
        (d.words[g] = R), (v = k), (k = E);
      }
      return v !== 0 ? (d.words[g] = v) : d.length--, d._strip();
    }
    function T(C, u, d) {
      return N(C, u, d);
    }
    (o.prototype.mulTo = function (u, d) {
      var v,
        E = this.length + u.length;
      return (
        this.length === 10 && u.length === 10
          ? (v = x(this, u, d))
          : E < 63
          ? (v = w(this, u, d))
          : E < 1024
          ? (v = N(this, u, d))
          : (v = T(this, u, d)),
        v
      );
    }),
      (o.prototype.mul = function (u) {
        var d = new o(null);
        return (d.words = new Array(this.length + u.length)), this.mulTo(u, d);
      }),
      (o.prototype.mulf = function (u) {
        var d = new o(null);
        return (d.words = new Array(this.length + u.length)), T(this, u, d);
      }),
      (o.prototype.imul = function (u) {
        return this.clone().mulTo(u, this);
      }),
      (o.prototype.imuln = function (u) {
        var d = u < 0;
        d && (u = -u), n(typeof u == "number"), n(u < 67108864);
        for (var v = 0, E = 0; E < this.length; E++) {
          var g = (this.words[E] | 0) * u,
            k = (g & 67108863) + (v & 67108863);
          (v >>= 26),
            (v += (g / 67108864) | 0),
            (v += k >>> 26),
            (this.words[E] = k & 67108863);
        }
        return (
          v !== 0 && ((this.words[E] = v), this.length++),
          d ? this.ineg() : this
        );
      }),
      (o.prototype.muln = function (u) {
        return this.clone().imuln(u);
      }),
      (o.prototype.sqr = function () {
        return this.mul(this);
      }),
      (o.prototype.isqr = function () {
        return this.imul(this.clone());
      }),
      (o.prototype.pow = function (u) {
        var d = I(u);
        if (d.length === 0) return new o(1);
        for (var v = this, E = 0; E < d.length && d[E] === 0; E++, v = v.sqr());
        if (++E < d.length)
          for (var g = v.sqr(); E < d.length; E++, g = g.sqr())
            d[E] !== 0 && (v = v.mul(g));
        return v;
      }),
      (o.prototype.iushln = function (u) {
        n(typeof u == "number" && u >= 0);
        var d = u % 26,
          v = (u - d) / 26,
          E = (67108863 >>> (26 - d)) << (26 - d),
          g;
        if (d !== 0) {
          var k = 0;
          for (g = 0; g < this.length; g++) {
            var R = this.words[g] & E,
              A = ((this.words[g] | 0) - R) << d;
            (this.words[g] = A | k), (k = R >>> (26 - d));
          }
          k && ((this.words[g] = k), this.length++);
        }
        if (v !== 0) {
          for (g = this.length - 1; g >= 0; g--)
            this.words[g + v] = this.words[g];
          for (g = 0; g < v; g++) this.words[g] = 0;
          this.length += v;
        }
        return this._strip();
      }),
      (o.prototype.ishln = function (u) {
        return n(this.negative === 0), this.iushln(u);
      }),
      (o.prototype.iushrn = function (u, d, v) {
        n(typeof u == "number" && u >= 0);
        var E;
        d ? (E = (d - (d % 26)) / 26) : (E = 0);
        var g = u % 26,
          k = Math.min((u - g) / 26, this.length),
          R = 67108863 ^ ((67108863 >>> g) << g),
          A = v;
        if (((E -= k), (E = Math.max(0, E)), A)) {
          for (var c = 0; c < k; c++) A.words[c] = this.words[c];
          A.length = k;
        }
        if (k !== 0)
          if (this.length > k)
            for (this.length -= k, c = 0; c < this.length; c++)
              this.words[c] = this.words[c + k];
          else (this.words[0] = 0), (this.length = 1);
        var b = 0;
        for (c = this.length - 1; c >= 0 && (b !== 0 || c >= E); c--) {
          var $ = this.words[c] | 0;
          (this.words[c] = (b << (26 - g)) | ($ >>> g)), (b = $ & R);
        }
        return (
          A && b !== 0 && (A.words[A.length++] = b),
          this.length === 0 && ((this.words[0] = 0), (this.length = 1)),
          this._strip()
        );
      }),
      (o.prototype.ishrn = function (u, d, v) {
        return n(this.negative === 0), this.iushrn(u, d, v);
      }),
      (o.prototype.shln = function (u) {
        return this.clone().ishln(u);
      }),
      (o.prototype.ushln = function (u) {
        return this.clone().iushln(u);
      }),
      (o.prototype.shrn = function (u) {
        return this.clone().ishrn(u);
      }),
      (o.prototype.ushrn = function (u) {
        return this.clone().iushrn(u);
      }),
      (o.prototype.testn = function (u) {
        n(typeof u == "number" && u >= 0);
        var d = u % 26,
          v = (u - d) / 26,
          E = 1 << d;
        if (this.length <= v) return !1;
        var g = this.words[v];
        return !!(g & E);
      }),
      (o.prototype.imaskn = function (u) {
        n(typeof u == "number" && u >= 0);
        var d = u % 26,
          v = (u - d) / 26;
        if (
          (n(this.negative === 0, "imaskn works only with positive numbers"),
          this.length <= v)
        )
          return this;
        if (
          (d !== 0 && v++, (this.length = Math.min(v, this.length)), d !== 0)
        ) {
          var E = 67108863 ^ ((67108863 >>> d) << d);
          this.words[this.length - 1] &= E;
        }
        return this._strip();
      }),
      (o.prototype.maskn = function (u) {
        return this.clone().imaskn(u);
      }),
      (o.prototype.iaddn = function (u) {
        return (
          n(typeof u == "number"),
          n(u < 67108864),
          u < 0
            ? this.isubn(-u)
            : this.negative !== 0
            ? this.length === 1 && (this.words[0] | 0) <= u
              ? ((this.words[0] = u - (this.words[0] | 0)),
                (this.negative = 0),
                this)
              : ((this.negative = 0), this.isubn(u), (this.negative = 1), this)
            : this._iaddn(u)
        );
      }),
      (o.prototype._iaddn = function (u) {
        this.words[0] += u;
        for (var d = 0; d < this.length && this.words[d] >= 67108864; d++)
          (this.words[d] -= 67108864),
            d === this.length - 1
              ? (this.words[d + 1] = 1)
              : this.words[d + 1]++;
        return (this.length = Math.max(this.length, d + 1)), this;
      }),
      (o.prototype.isubn = function (u) {
        if ((n(typeof u == "number"), n(u < 67108864), u < 0))
          return this.iaddn(-u);
        if (this.negative !== 0)
          return (this.negative = 0), this.iaddn(u), (this.negative = 1), this;
        if (((this.words[0] -= u), this.length === 1 && this.words[0] < 0))
          (this.words[0] = -this.words[0]), (this.negative = 1);
        else
          for (var d = 0; d < this.length && this.words[d] < 0; d++)
            (this.words[d] += 67108864), (this.words[d + 1] -= 1);
        return this._strip();
      }),
      (o.prototype.addn = function (u) {
        return this.clone().iaddn(u);
      }),
      (o.prototype.subn = function (u) {
        return this.clone().isubn(u);
      }),
      (o.prototype.iabs = function () {
        return (this.negative = 0), this;
      }),
      (o.prototype.abs = function () {
        return this.clone().iabs();
      }),
      (o.prototype._ishlnsubmul = function (u, d, v) {
        var E = u.length + v,
          g;
        this._expand(E);
        var k,
          R = 0;
        for (g = 0; g < u.length; g++) {
          k = (this.words[g + v] | 0) + R;
          var A = (u.words[g] | 0) * d;
          (k -= A & 67108863),
            (R = (k >> 26) - ((A / 67108864) | 0)),
            (this.words[g + v] = k & 67108863);
        }
        for (; g < this.length - v; g++)
          (k = (this.words[g + v] | 0) + R),
            (R = k >> 26),
            (this.words[g + v] = k & 67108863);
        if (R === 0) return this._strip();
        for (n(R === -1), R = 0, g = 0; g < this.length; g++)
          (k = -(this.words[g] | 0) + R),
            (R = k >> 26),
            (this.words[g] = k & 67108863);
        return (this.negative = 1), this._strip();
      }),
      (o.prototype._wordDiv = function (u, d) {
        var v = this.length - u.length,
          E = this.clone(),
          g = u,
          k = g.words[g.length - 1] | 0,
          R = this._countBits(k);
        (v = 26 - R),
          v !== 0 &&
            ((g = g.ushln(v)), E.iushln(v), (k = g.words[g.length - 1] | 0));
        var A = E.length - g.length,
          c;
        if (d !== "mod") {
          (c = new o(null)),
            (c.length = A + 1),
            (c.words = new Array(c.length));
          for (var b = 0; b < c.length; b++) c.words[b] = 0;
        }
        var $ = E.clone()._ishlnsubmul(g, 1, A);
        $.negative === 0 && ((E = $), c && (c.words[A] = 1));
        for (var m = A - 1; m >= 0; m--) {
          var O =
            (E.words[g.length + m] | 0) * 67108864 +
            (E.words[g.length + m - 1] | 0);
          for (
            O = Math.min((O / k) | 0, 67108863), E._ishlnsubmul(g, O, m);
            E.negative !== 0;

          )
            O--,
              (E.negative = 0),
              E._ishlnsubmul(g, 1, m),
              E.isZero() || (E.negative ^= 1);
          c && (c.words[m] = O);
        }
        return (
          c && c._strip(),
          E._strip(),
          d !== "div" && v !== 0 && E.iushrn(v),
          { div: c || null, mod: E }
        );
      }),
      (o.prototype.divmod = function (u, d, v) {
        if ((n(!u.isZero()), this.isZero()))
          return { div: new o(0), mod: new o(0) };
        var E, g, k;
        return this.negative !== 0 && u.negative === 0
          ? ((k = this.neg().divmod(u, d)),
            d !== "mod" && (E = k.div.neg()),
            d !== "div" &&
              ((g = k.mod.neg()), v && g.negative !== 0 && g.iadd(u)),
            { div: E, mod: g })
          : this.negative === 0 && u.negative !== 0
          ? ((k = this.divmod(u.neg(), d)),
            d !== "mod" && (E = k.div.neg()),
            { div: E, mod: k.mod })
          : this.negative & u.negative
          ? ((k = this.neg().divmod(u.neg(), d)),
            d !== "div" &&
              ((g = k.mod.neg()), v && g.negative !== 0 && g.isub(u)),
            { div: k.div, mod: g })
          : u.length > this.length || this.cmp(u) < 0
          ? { div: new o(0), mod: this }
          : u.length === 1
          ? d === "div"
            ? { div: this.divn(u.words[0]), mod: null }
            : d === "mod"
            ? { div: null, mod: new o(this.modrn(u.words[0])) }
            : { div: this.divn(u.words[0]), mod: new o(this.modrn(u.words[0])) }
          : this._wordDiv(u, d);
      }),
      (o.prototype.div = function (u) {
        return this.divmod(u, "div", !1).div;
      }),
      (o.prototype.mod = function (u) {
        return this.divmod(u, "mod", !1).mod;
      }),
      (o.prototype.umod = function (u) {
        return this.divmod(u, "mod", !0).mod;
      }),
      (o.prototype.divRound = function (u) {
        var d = this.divmod(u);
        if (d.mod.isZero()) return d.div;
        var v = d.div.negative !== 0 ? d.mod.isub(u) : d.mod,
          E = u.ushrn(1),
          g = u.andln(1),
          k = v.cmp(E);
        return k < 0 || (g === 1 && k === 0)
          ? d.div
          : d.div.negative !== 0
          ? d.div.isubn(1)
          : d.div.iaddn(1);
      }),
      (o.prototype.modrn = function (u) {
        var d = u < 0;
        d && (u = -u), n(u <= 67108863);
        for (var v = (1 << 26) % u, E = 0, g = this.length - 1; g >= 0; g--)
          E = (v * E + (this.words[g] | 0)) % u;
        return d ? -E : E;
      }),
      (o.prototype.modn = function (u) {
        return this.modrn(u);
      }),
      (o.prototype.idivn = function (u) {
        var d = u < 0;
        d && (u = -u), n(u <= 67108863);
        for (var v = 0, E = this.length - 1; E >= 0; E--) {
          var g = (this.words[E] | 0) + v * 67108864;
          (this.words[E] = (g / u) | 0), (v = g % u);
        }
        return this._strip(), d ? this.ineg() : this;
      }),
      (o.prototype.divn = function (u) {
        return this.clone().idivn(u);
      }),
      (o.prototype.egcd = function (u) {
        n(u.negative === 0), n(!u.isZero());
        var d = this,
          v = u.clone();
        d.negative !== 0 ? (d = d.umod(u)) : (d = d.clone());
        for (
          var E = new o(1), g = new o(0), k = new o(0), R = new o(1), A = 0;
          d.isEven() && v.isEven();

        )
          d.iushrn(1), v.iushrn(1), ++A;
        for (var c = v.clone(), b = d.clone(); !d.isZero(); ) {
          for (var $ = 0, m = 1; !(d.words[0] & m) && $ < 26; ++$, m <<= 1);
          if ($ > 0)
            for (d.iushrn($); $-- > 0; )
              (E.isOdd() || g.isOdd()) && (E.iadd(c), g.isub(b)),
                E.iushrn(1),
                g.iushrn(1);
          for (var O = 0, D = 1; !(v.words[0] & D) && O < 26; ++O, D <<= 1);
          if (O > 0)
            for (v.iushrn(O); O-- > 0; )
              (k.isOdd() || R.isOdd()) && (k.iadd(c), R.isub(b)),
                k.iushrn(1),
                R.iushrn(1);
          d.cmp(v) >= 0
            ? (d.isub(v), E.isub(k), g.isub(R))
            : (v.isub(d), k.isub(E), R.isub(g));
        }
        return { a: k, b: R, gcd: v.iushln(A) };
      }),
      (o.prototype._invmp = function (u) {
        n(u.negative === 0), n(!u.isZero());
        var d = this,
          v = u.clone();
        d.negative !== 0 ? (d = d.umod(u)) : (d = d.clone());
        for (
          var E = new o(1), g = new o(0), k = v.clone();
          d.cmpn(1) > 0 && v.cmpn(1) > 0;

        ) {
          for (var R = 0, A = 1; !(d.words[0] & A) && R < 26; ++R, A <<= 1);
          if (R > 0)
            for (d.iushrn(R); R-- > 0; ) E.isOdd() && E.iadd(k), E.iushrn(1);
          for (var c = 0, b = 1; !(v.words[0] & b) && c < 26; ++c, b <<= 1);
          if (c > 0)
            for (v.iushrn(c); c-- > 0; ) g.isOdd() && g.iadd(k), g.iushrn(1);
          d.cmp(v) >= 0 ? (d.isub(v), E.isub(g)) : (v.isub(d), g.isub(E));
        }
        var $;
        return (
          d.cmpn(1) === 0 ? ($ = E) : ($ = g), $.cmpn(0) < 0 && $.iadd(u), $
        );
      }),
      (o.prototype.gcd = function (u) {
        if (this.isZero()) return u.abs();
        if (u.isZero()) return this.abs();
        var d = this.clone(),
          v = u.clone();
        (d.negative = 0), (v.negative = 0);
        for (var E = 0; d.isEven() && v.isEven(); E++) d.iushrn(1), v.iushrn(1);
        do {
          for (; d.isEven(); ) d.iushrn(1);
          for (; v.isEven(); ) v.iushrn(1);
          var g = d.cmp(v);
          if (g < 0) {
            var k = d;
            (d = v), (v = k);
          } else if (g === 0 || v.cmpn(1) === 0) break;
          d.isub(v);
        } while (!0);
        return v.iushln(E);
      }),
      (o.prototype.invm = function (u) {
        return this.egcd(u).a.umod(u);
      }),
      (o.prototype.isEven = function () {
        return (this.words[0] & 1) === 0;
      }),
      (o.prototype.isOdd = function () {
        return (this.words[0] & 1) === 1;
      }),
      (o.prototype.andln = function (u) {
        return this.words[0] & u;
      }),
      (o.prototype.bincn = function (u) {
        n(typeof u == "number");
        var d = u % 26,
          v = (u - d) / 26,
          E = 1 << d;
        if (this.length <= v)
          return this._expand(v + 1), (this.words[v] |= E), this;
        for (var g = E, k = v; g !== 0 && k < this.length; k++) {
          var R = this.words[k] | 0;
          (R += g), (g = R >>> 26), (R &= 67108863), (this.words[k] = R);
        }
        return g !== 0 && ((this.words[k] = g), this.length++), this;
      }),
      (o.prototype.isZero = function () {
        return this.length === 1 && this.words[0] === 0;
      }),
      (o.prototype.cmpn = function (u) {
        var d = u < 0;
        if (this.negative !== 0 && !d) return -1;
        if (this.negative === 0 && d) return 1;
        this._strip();
        var v;
        if (this.length > 1) v = 1;
        else {
          d && (u = -u), n(u <= 67108863, "Number is too big");
          var E = this.words[0] | 0;
          v = E === u ? 0 : E < u ? -1 : 1;
        }
        return this.negative !== 0 ? -v | 0 : v;
      }),
      (o.prototype.cmp = function (u) {
        if (this.negative !== 0 && u.negative === 0) return -1;
        if (this.negative === 0 && u.negative !== 0) return 1;
        var d = this.ucmp(u);
        return this.negative !== 0 ? -d | 0 : d;
      }),
      (o.prototype.ucmp = function (u) {
        if (this.length > u.length) return 1;
        if (this.length < u.length) return -1;
        for (var d = 0, v = this.length - 1; v >= 0; v--) {
          var E = this.words[v] | 0,
            g = u.words[v] | 0;
          if (E !== g) {
            E < g ? (d = -1) : E > g && (d = 1);
            break;
          }
        }
        return d;
      }),
      (o.prototype.gtn = function (u) {
        return this.cmpn(u) === 1;
      }),
      (o.prototype.gt = function (u) {
        return this.cmp(u) === 1;
      }),
      (o.prototype.gten = function (u) {
        return this.cmpn(u) >= 0;
      }),
      (o.prototype.gte = function (u) {
        return this.cmp(u) >= 0;
      }),
      (o.prototype.ltn = function (u) {
        return this.cmpn(u) === -1;
      }),
      (o.prototype.lt = function (u) {
        return this.cmp(u) === -1;
      }),
      (o.prototype.lten = function (u) {
        return this.cmpn(u) <= 0;
      }),
      (o.prototype.lte = function (u) {
        return this.cmp(u) <= 0;
      }),
      (o.prototype.eqn = function (u) {
        return this.cmpn(u) === 0;
      }),
      (o.prototype.eq = function (u) {
        return this.cmp(u) === 0;
      }),
      (o.red = function (u) {
        return new se(u);
      }),
      (o.prototype.toRed = function (u) {
        return (
          n(!this.red, "Already a number in reduction context"),
          n(this.negative === 0, "red works only with positives"),
          u.convertTo(this)._forceRed(u)
        );
      }),
      (o.prototype.fromRed = function () {
        return (
          n(this.red, "fromRed works only with numbers in reduction context"),
          this.red.convertFrom(this)
        );
      }),
      (o.prototype._forceRed = function (u) {
        return (this.red = u), this;
      }),
      (o.prototype.forceRed = function (u) {
        return (
          n(!this.red, "Already a number in reduction context"),
          this._forceRed(u)
        );
      }),
      (o.prototype.redAdd = function (u) {
        return (
          n(this.red, "redAdd works only with red numbers"),
          this.red.add(this, u)
        );
      }),
      (o.prototype.redIAdd = function (u) {
        return (
          n(this.red, "redIAdd works only with red numbers"),
          this.red.iadd(this, u)
        );
      }),
      (o.prototype.redSub = function (u) {
        return (
          n(this.red, "redSub works only with red numbers"),
          this.red.sub(this, u)
        );
      }),
      (o.prototype.redISub = function (u) {
        return (
          n(this.red, "redISub works only with red numbers"),
          this.red.isub(this, u)
        );
      }),
      (o.prototype.redShl = function (u) {
        return (
          n(this.red, "redShl works only with red numbers"),
          this.red.shl(this, u)
        );
      }),
      (o.prototype.redMul = function (u) {
        return (
          n(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, u),
          this.red.mul(this, u)
        );
      }),
      (o.prototype.redIMul = function (u) {
        return (
          n(this.red, "redMul works only with red numbers"),
          this.red._verify2(this, u),
          this.red.imul(this, u)
        );
      }),
      (o.prototype.redSqr = function () {
        return (
          n(this.red, "redSqr works only with red numbers"),
          this.red._verify1(this),
          this.red.sqr(this)
        );
      }),
      (o.prototype.redISqr = function () {
        return (
          n(this.red, "redISqr works only with red numbers"),
          this.red._verify1(this),
          this.red.isqr(this)
        );
      }),
      (o.prototype.redSqrt = function () {
        return (
          n(this.red, "redSqrt works only with red numbers"),
          this.red._verify1(this),
          this.red.sqrt(this)
        );
      }),
      (o.prototype.redInvm = function () {
        return (
          n(this.red, "redInvm works only with red numbers"),
          this.red._verify1(this),
          this.red.invm(this)
        );
      }),
      (o.prototype.redNeg = function () {
        return (
          n(this.red, "redNeg works only with red numbers"),
          this.red._verify1(this),
          this.red.neg(this)
        );
      }),
      (o.prototype.redPow = function (u) {
        return (
          n(this.red && !u.red, "redPow(normalNum)"),
          this.red._verify1(this),
          this.red.pow(this, u)
        );
      });
    var L = { k256: null, p224: null, p192: null, p25519: null };
    function j(C, u) {
      (this.name = C),
        (this.p = new o(u, 16)),
        (this.n = this.p.bitLength()),
        (this.k = new o(1).iushln(this.n).isub(this.p)),
        (this.tmp = this._tmp());
    }
    (j.prototype._tmp = function () {
      var u = new o(null);
      return (u.words = new Array(Math.ceil(this.n / 13))), u;
    }),
      (j.prototype.ireduce = function (u) {
        var d = u,
          v;
        do
          this.split(d, this.tmp),
            (d = this.imulK(d)),
            (d = d.iadd(this.tmp)),
            (v = d.bitLength());
        while (v > this.n);
        var E = v < this.n ? -1 : d.ucmp(this.p);
        return (
          E === 0
            ? ((d.words[0] = 0), (d.length = 1))
            : E > 0
            ? d.isub(this.p)
            : d.strip !== void 0
            ? d.strip()
            : d._strip(),
          d
        );
      }),
      (j.prototype.split = function (u, d) {
        u.iushrn(this.n, 0, d);
      }),
      (j.prototype.imulK = function (u) {
        return u.imul(this.k);
      });
    function H() {
      j.call(
        this,
        "k256",
        "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f"
      );
    }
    i(H, j),
      (H.prototype.split = function (u, d) {
        for (var v = 4194303, E = Math.min(u.length, 9), g = 0; g < E; g++)
          d.words[g] = u.words[g];
        if (((d.length = E), u.length <= 9)) {
          (u.words[0] = 0), (u.length = 1);
          return;
        }
        var k = u.words[9];
        for (d.words[d.length++] = k & v, g = 10; g < u.length; g++) {
          var R = u.words[g] | 0;
          (u.words[g - 10] = ((R & v) << 4) | (k >>> 22)), (k = R);
        }
        (k >>>= 22),
          (u.words[g - 10] = k),
          k === 0 && u.length > 10 ? (u.length -= 10) : (u.length -= 9);
      }),
      (H.prototype.imulK = function (u) {
        (u.words[u.length] = 0), (u.words[u.length + 1] = 0), (u.length += 2);
        for (var d = 0, v = 0; v < u.length; v++) {
          var E = u.words[v] | 0;
          (d += E * 977),
            (u.words[v] = d & 67108863),
            (d = E * 64 + ((d / 67108864) | 0));
        }
        return (
          u.words[u.length - 1] === 0 &&
            (u.length--, u.words[u.length - 1] === 0 && u.length--),
          u
        );
      });
    function G() {
      j.call(
        this,
        "p224",
        "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001"
      );
    }
    i(G, j);
    function ee() {
      j.call(
        this,
        "p192",
        "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff"
      );
    }
    i(ee, j);
    function Z() {
      j.call(
        this,
        "25519",
        "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed"
      );
    }
    i(Z, j),
      (Z.prototype.imulK = function (u) {
        for (var d = 0, v = 0; v < u.length; v++) {
          var E = (u.words[v] | 0) * 19 + d,
            g = E & 67108863;
          (E >>>= 26), (u.words[v] = g), (d = E);
        }
        return d !== 0 && (u.words[u.length++] = d), u;
      }),
      (o._prime = function (u) {
        if (L[u]) return L[u];
        var d;
        if (u === "k256") d = new H();
        else if (u === "p224") d = new G();
        else if (u === "p192") d = new ee();
        else if (u === "p25519") d = new Z();
        else throw new Error("Unknown prime " + u);
        return (L[u] = d), d;
      });
    function se(C) {
      if (typeof C == "string") {
        var u = o._prime(C);
        (this.m = u.p), (this.prime = u);
      } else
        n(C.gtn(1), "modulus must be greater than 1"),
          (this.m = C),
          (this.prime = null);
    }
    (se.prototype._verify1 = function (u) {
      n(u.negative === 0, "red works only with positives"),
        n(u.red, "red works only with red numbers");
    }),
      (se.prototype._verify2 = function (u, d) {
        n((u.negative | d.negative) === 0, "red works only with positives"),
          n(u.red && u.red === d.red, "red works only with red numbers");
      }),
      (se.prototype.imod = function (u) {
        return this.prime
          ? this.prime.ireduce(u)._forceRed(this)
          : (h(u, u.umod(this.m)._forceRed(this)), u);
      }),
      (se.prototype.neg = function (u) {
        return u.isZero() ? u.clone() : this.m.sub(u)._forceRed(this);
      }),
      (se.prototype.add = function (u, d) {
        this._verify2(u, d);
        var v = u.add(d);
        return v.cmp(this.m) >= 0 && v.isub(this.m), v._forceRed(this);
      }),
      (se.prototype.iadd = function (u, d) {
        this._verify2(u, d);
        var v = u.iadd(d);
        return v.cmp(this.m) >= 0 && v.isub(this.m), v;
      }),
      (se.prototype.sub = function (u, d) {
        this._verify2(u, d);
        var v = u.sub(d);
        return v.cmpn(0) < 0 && v.iadd(this.m), v._forceRed(this);
      }),
      (se.prototype.isub = function (u, d) {
        this._verify2(u, d);
        var v = u.isub(d);
        return v.cmpn(0) < 0 && v.iadd(this.m), v;
      }),
      (se.prototype.shl = function (u, d) {
        return this._verify1(u), this.imod(u.ushln(d));
      }),
      (se.prototype.imul = function (u, d) {
        return this._verify2(u, d), this.imod(u.imul(d));
      }),
      (se.prototype.mul = function (u, d) {
        return this._verify2(u, d), this.imod(u.mul(d));
      }),
      (se.prototype.isqr = function (u) {
        return this.imul(u, u.clone());
      }),
      (se.prototype.sqr = function (u) {
        return this.mul(u, u);
      }),
      (se.prototype.sqrt = function (u) {
        if (u.isZero()) return u.clone();
        var d = this.m.andln(3);
        if ((n(d % 2 === 1), d === 3)) {
          var v = this.m.add(new o(1)).iushrn(2);
          return this.pow(u, v);
        }
        for (var E = this.m.subn(1), g = 0; !E.isZero() && E.andln(1) === 0; )
          g++, E.iushrn(1);
        n(!E.isZero());
        var k = new o(1).toRed(this),
          R = k.redNeg(),
          A = this.m.subn(1).iushrn(1),
          c = this.m.bitLength();
        for (c = new o(2 * c * c).toRed(this); this.pow(c, A).cmp(R) !== 0; )
          c.redIAdd(R);
        for (
          var b = this.pow(c, E),
            $ = this.pow(u, E.addn(1).iushrn(1)),
            m = this.pow(u, E),
            O = g;
          m.cmp(k) !== 0;

        ) {
          for (var D = m, F = 0; D.cmp(k) !== 0; F++) D = D.redSqr();
          n(F < O);
          var z = this.pow(b, new o(1).iushln(O - F - 1));
          ($ = $.redMul(z)), (b = z.redSqr()), (m = m.redMul(b)), (O = F);
        }
        return $;
      }),
      (se.prototype.invm = function (u) {
        var d = u._invmp(this.m);
        return d.negative !== 0
          ? ((d.negative = 0), this.imod(d).redNeg())
          : this.imod(d);
      }),
      (se.prototype.pow = function (u, d) {
        if (d.isZero()) return new o(1).toRed(this);
        if (d.cmpn(1) === 0) return u.clone();
        var v = 4,
          E = new Array(1 << v);
        (E[0] = new o(1).toRed(this)), (E[1] = u);
        for (var g = 2; g < E.length; g++) E[g] = this.mul(E[g - 1], u);
        var k = E[0],
          R = 0,
          A = 0,
          c = d.bitLength() % 26;
        for (c === 0 && (c = 26), g = d.length - 1; g >= 0; g--) {
          for (var b = d.words[g], $ = c - 1; $ >= 0; $--) {
            var m = (b >> $) & 1;
            if ((k !== E[0] && (k = this.sqr(k)), m === 0 && R === 0)) {
              A = 0;
              continue;
            }
            (R <<= 1),
              (R |= m),
              A++,
              !(A !== v && (g !== 0 || $ !== 0)) &&
                ((k = this.mul(k, E[R])), (A = 0), (R = 0));
          }
          c = 26;
        }
        return k;
      }),
      (se.prototype.convertTo = function (u) {
        var d = u.umod(this.m);
        return d === u ? d.clone() : d;
      }),
      (se.prototype.convertFrom = function (u) {
        var d = u.clone();
        return (d.red = null), d;
      }),
      (o.mont = function (u) {
        return new ht(u);
      });
    function ht(C) {
      se.call(this, C),
        (this.shift = this.m.bitLength()),
        this.shift % 26 !== 0 && (this.shift += 26 - (this.shift % 26)),
        (this.r = new o(1).iushln(this.shift)),
        (this.r2 = this.imod(this.r.sqr())),
        (this.rinv = this.r._invmp(this.m)),
        (this.minv = this.rinv.mul(this.r).isubn(1).div(this.m)),
        (this.minv = this.minv.umod(this.r)),
        (this.minv = this.r.sub(this.minv));
    }
    i(ht, se),
      (ht.prototype.convertTo = function (u) {
        return this.imod(u.ushln(this.shift));
      }),
      (ht.prototype.convertFrom = function (u) {
        var d = this.imod(u.mul(this.rinv));
        return (d.red = null), d;
      }),
      (ht.prototype.imul = function (u, d) {
        if (u.isZero() || d.isZero())
          return (u.words[0] = 0), (u.length = 1), u;
        var v = u.imul(d),
          E = v.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          g = v.isub(E).iushrn(this.shift),
          k = g;
        return (
          g.cmp(this.m) >= 0
            ? (k = g.isub(this.m))
            : g.cmpn(0) < 0 && (k = g.iadd(this.m)),
          k._forceRed(this)
        );
      }),
      (ht.prototype.mul = function (u, d) {
        if (u.isZero() || d.isZero()) return new o(0)._forceRed(this);
        var v = u.mul(d),
          E = v.maskn(this.shift).mul(this.minv).imaskn(this.shift).mul(this.m),
          g = v.isub(E).iushrn(this.shift),
          k = g;
        return (
          g.cmp(this.m) >= 0
            ? (k = g.isub(this.m))
            : g.cmpn(0) < 0 && (k = g.iadd(this.m)),
          k._forceRed(this)
        );
      }),
      (ht.prototype.invm = function (u) {
        var d = this.imod(u._invmp(this.m).mul(this.r2));
        return d._forceRed(this);
      });
  })(t, n0);
})(Bc);
var lw = Bc.exports;
const ne = cs(lw),
  aw = "bignumber/5.7.0";
var jl = ne.BN;
const Hr = new B(aw),
  cu = {},
  wd = 9007199254740991;
let Ad = !1;
class Y {
  constructor(e, r) {
    e !== cu &&
      Hr.throwError(
        "cannot call constructor directly; use BigNumber.from",
        B.errors.UNSUPPORTED_OPERATION,
        { operation: "new (BigNumber)" }
      ),
      (this._hex = r),
      (this._isBigNumber = !0),
      Object.freeze(this);
  }
  fromTwos(e) {
    return Ot(ae(this).fromTwos(e));
  }
  toTwos(e) {
    return Ot(ae(this).toTwos(e));
  }
  abs() {
    return this._hex[0] === "-" ? Y.from(this._hex.substring(1)) : this;
  }
  add(e) {
    return Ot(ae(this).add(ae(e)));
  }
  sub(e) {
    return Ot(ae(this).sub(ae(e)));
  }
  div(e) {
    return (
      Y.from(e).isZero() && Zt("division-by-zero", "div"),
      Ot(ae(this).div(ae(e)))
    );
  }
  mul(e) {
    return Ot(ae(this).mul(ae(e)));
  }
  mod(e) {
    const r = ae(e);
    return r.isNeg() && Zt("division-by-zero", "mod"), Ot(ae(this).umod(r));
  }
  pow(e) {
    const r = ae(e);
    return r.isNeg() && Zt("negative-power", "pow"), Ot(ae(this).pow(r));
  }
  and(e) {
    const r = ae(e);
    return (
      (this.isNegative() || r.isNeg()) && Zt("unbound-bitwise-result", "and"),
      Ot(ae(this).and(r))
    );
  }
  or(e) {
    const r = ae(e);
    return (
      (this.isNegative() || r.isNeg()) && Zt("unbound-bitwise-result", "or"),
      Ot(ae(this).or(r))
    );
  }
  xor(e) {
    const r = ae(e);
    return (
      (this.isNegative() || r.isNeg()) && Zt("unbound-bitwise-result", "xor"),
      Ot(ae(this).xor(r))
    );
  }
  mask(e) {
    return (
      (this.isNegative() || e < 0) && Zt("negative-width", "mask"),
      Ot(ae(this).maskn(e))
    );
  }
  shl(e) {
    return (
      (this.isNegative() || e < 0) && Zt("negative-width", "shl"),
      Ot(ae(this).shln(e))
    );
  }
  shr(e) {
    return (
      (this.isNegative() || e < 0) && Zt("negative-width", "shr"),
      Ot(ae(this).shrn(e))
    );
  }
  eq(e) {
    return ae(this).eq(ae(e));
  }
  lt(e) {
    return ae(this).lt(ae(e));
  }
  lte(e) {
    return ae(this).lte(ae(e));
  }
  gt(e) {
    return ae(this).gt(ae(e));
  }
  gte(e) {
    return ae(this).gte(ae(e));
  }
  isNegative() {
    return this._hex[0] === "-";
  }
  isZero() {
    return ae(this).isZero();
  }
  toNumber() {
    try {
      return ae(this).toNumber();
    } catch {
      Zt("overflow", "toNumber", this.toString());
    }
    return null;
  }
  toBigInt() {
    try {
      return BigInt(this.toString());
    } catch {}
    return Hr.throwError(
      "this platform does not support BigInt",
      B.errors.UNSUPPORTED_OPERATION,
      { value: this.toString() }
    );
  }
  toString() {
    return (
      arguments.length > 0 &&
        (arguments[0] === 10
          ? Ad ||
            ((Ad = !0),
            Hr.warn(
              "BigNumber.toString does not accept any parameters; base-10 is assumed"
            ))
          : arguments[0] === 16
          ? Hr.throwError(
              "BigNumber.toString does not accept any parameters; use bigNumber.toHexString()",
              B.errors.UNEXPECTED_ARGUMENT,
              {}
            )
          : Hr.throwError(
              "BigNumber.toString does not accept parameters",
              B.errors.UNEXPECTED_ARGUMENT,
              {}
            )),
      ae(this).toString(10)
    );
  }
  toHexString() {
    return this._hex;
  }
  toJSON(e) {
    return { type: "BigNumber", hex: this.toHexString() };
  }
  static from(e) {
    if (e instanceof Y) return e;
    if (typeof e == "string")
      return e.match(/^-?0x[0-9a-f]+$/i)
        ? new Y(cu, as(e))
        : e.match(/^-?[0-9]+$/)
        ? new Y(cu, as(new jl(e)))
        : Hr.throwArgumentError("invalid BigNumber string", "value", e);
    if (typeof e == "number")
      return (
        e % 1 && Zt("underflow", "BigNumber.from", e),
        (e >= wd || e <= -wd) && Zt("overflow", "BigNumber.from", e),
        Y.from(String(e))
      );
    const r = e;
    if (typeof r == "bigint") return Y.from(r.toString());
    if (ua(r)) return Y.from(ie(r));
    if (r)
      if (r.toHexString) {
        const n = r.toHexString();
        if (typeof n == "string") return Y.from(n);
      } else {
        let n = r._hex;
        if (
          (n == null && r.type === "BigNumber" && (n = r.hex),
          typeof n == "string" &&
            (me(n) || (n[0] === "-" && me(n.substring(1)))))
        )
          return Y.from(n);
      }
    return Hr.throwArgumentError("invalid BigNumber value", "value", e);
  }
  static isBigNumber(e) {
    return !!(e && e._isBigNumber);
  }
}
function as(t) {
  if (typeof t != "string") return as(t.toString(16));
  if (t[0] === "-")
    return (
      (t = t.substring(1)),
      t[0] === "-" && Hr.throwArgumentError("invalid hex", "value", t),
      (t = as(t)),
      t === "0x00" ? t : "-" + t
    );
  if ((t.substring(0, 2) !== "0x" && (t = "0x" + t), t === "0x")) return "0x00";
  for (
    t.length % 2 && (t = "0x0" + t.substring(2));
    t.length > 4 && t.substring(0, 4) === "0x00";

  )
    t = "0x" + t.substring(4);
  return t;
}
function Ot(t) {
  return Y.from(as(t));
}
function ae(t) {
  const e = Y.from(t).toHexString();
  return e[0] === "-"
    ? new jl("-" + e.substring(3), 16)
    : new jl(e.substring(2), 16);
}
function Zt(t, e, r) {
  const n = { fault: t, operation: e };
  return (
    r != null && (n.value = r), Hr.throwError(t, B.errors.NUMERIC_FAULT, n)
  );
}
function uw(t) {
  return new jl(t, 36).toString(16);
}
const fw = "properties/5.7.0";
var cw =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, r, n) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (s) {
            s(o);
          });
    }
    return new (r || (r = Promise))(function (o, s) {
      function l(h) {
        try {
          f(n.next(h));
        } catch (p) {
          s(p);
        }
      }
      function a(h) {
        try {
          f(n.throw(h));
        } catch (p) {
          s(p);
        }
      }
      function f(h) {
        h.done ? o(h.value) : i(h.value).then(l, a);
      }
      f((n = n.apply(t, e || [])).next());
    });
  };
const Ul = new B(fw);
function ce(t, e, r) {
  Object.defineProperty(t, e, { enumerable: !0, value: r, writable: !1 });
}
function Po(t, e) {
  for (let r = 0; r < 32; r++) {
    if (t[e]) return t[e];
    if (!t.prototype || typeof t.prototype != "object") break;
    t = Object.getPrototypeOf(t.prototype).constructor;
  }
  return null;
}
function xt(t) {
  return cw(this, void 0, void 0, function* () {
    const e = Object.keys(t).map((n) => {
      const i = t[n];
      return Promise.resolve(i).then((o) => ({ key: n, value: o }));
    });
    return (yield Promise.all(e)).reduce(
      (n, i) => ((n[i.key] = i.value), n),
      {}
    );
  });
}
function hw(t, e) {
  (!t || typeof t != "object") &&
    Ul.throwArgumentError("invalid object", "object", t),
    Object.keys(t).forEach((r) => {
      e[r] ||
        Ul.throwArgumentError(
          "invalid object key - " + r,
          "transaction:" + r,
          t
        );
    });
}
function Dt(t) {
  const e = {};
  for (const r in t) e[r] = t[r];
  return e;
}
const dw = { bigint: !0, boolean: !0, function: !0, number: !0, string: !0 };
function zm(t) {
  if (t == null || dw[typeof t]) return !0;
  if (Array.isArray(t) || typeof t == "object") {
    if (!Object.isFrozen(t)) return !1;
    const e = Object.keys(t);
    for (let r = 0; r < e.length; r++) {
      let n = null;
      try {
        n = t[e[r]];
      } catch {
        continue;
      }
      if (!zm(n)) return !1;
    }
    return !0;
  }
  return Ul.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t);
}
function pw(t) {
  if (zm(t)) return t;
  if (Array.isArray(t)) return Object.freeze(t.map((e) => di(e)));
  if (typeof t == "object") {
    const e = {};
    for (const r in t) {
      const n = t[r];
      n !== void 0 && ce(e, r, di(n));
    }
    return e;
  }
  return Ul.throwArgumentError(`Cannot deepCopy ${typeof t}`, "object", t);
}
function di(t) {
  return pw(t);
}
class mw {
  constructor(e) {
    for (const r in e) this[r] = di(e[r]);
  }
}
const vw = "abstract-provider/5.7.0";
var gw =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, r, n) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (s) {
            s(o);
          });
    }
    return new (r || (r = Promise))(function (o, s) {
      function l(h) {
        try {
          f(n.next(h));
        } catch (p) {
          s(p);
        }
      }
      function a(h) {
        try {
          f(n.throw(h));
        } catch (p) {
          s(p);
        }
      }
      function f(h) {
        h.done ? o(h.value) : i(h.value).then(l, a);
      }
      f((n = n.apply(t, e || [])).next());
    });
  };
const yw = new B(vw);
class xw extends mw {
  static isForkEvent(e) {
    return !!(e && e._isForkEvent);
  }
}
class Dc {
  constructor() {
    yw.checkAbstract(new.target, Dc), ce(this, "_isProvider", !0);
  }
  getFeeData() {
    return gw(this, void 0, void 0, function* () {
      const { block: e, gasPrice: r } = yield xt({
        block: this.getBlock("latest"),
        gasPrice: this.getGasPrice().catch((s) => null),
      });
      let n = null,
        i = null,
        o = null;
      return (
        e &&
          e.baseFeePerGas &&
          ((n = e.baseFeePerGas),
          (o = Y.from("1500000000")),
          (i = e.baseFeePerGas.mul(2).add(o))),
        {
          lastBaseFeePerGas: n,
          maxFeePerGas: i,
          maxPriorityFeePerGas: o,
          gasPrice: r,
        }
      );
    });
  }
  addListener(e, r) {
    return this.on(e, r);
  }
  removeListener(e, r) {
    return this.off(e, r);
  }
  static isProvider(e) {
    return !!(e && e._isProvider);
  }
}
const ww = "networks/5.7.1",
  Ed = new B(ww);
function Aw(t) {
  return t && typeof t.renetwork == "function";
}
function Wr(t) {
  const e = function (r, n) {
    n == null && (n = {});
    const i = [];
    if (r.InfuraProvider && n.infura !== "-")
      try {
        i.push(new r.InfuraProvider(t, n.infura));
      } catch {}
    if (r.EtherscanProvider && n.etherscan !== "-")
      try {
        i.push(new r.EtherscanProvider(t, n.etherscan));
      } catch {}
    if (r.AlchemyProvider && n.alchemy !== "-")
      try {
        i.push(new r.AlchemyProvider(t, n.alchemy));
      } catch {}
    if (r.PocketProvider && n.pocket !== "-") {
      const o = ["goerli", "ropsten", "rinkeby", "sepolia"];
      try {
        const s = new r.PocketProvider(t, n.pocket);
        s.network && o.indexOf(s.network.name) === -1 && i.push(s);
      } catch {}
    }
    if (r.CloudflareProvider && n.cloudflare !== "-")
      try {
        i.push(new r.CloudflareProvider(t));
      } catch {}
    if (r.AnkrProvider && n.ankr !== "-")
      try {
        const o = ["ropsten"],
          s = new r.AnkrProvider(t, n.ankr);
        s.network && o.indexOf(s.network.name) === -1 && i.push(s);
      } catch {}
    if (i.length === 0) return null;
    if (r.FallbackProvider) {
      let o = 1;
      return (
        n.quorum != null ? (o = n.quorum) : t === "homestead" && (o = 2),
        new r.FallbackProvider(i, o)
      );
    }
    return i[0];
  };
  return (
    (e.renetwork = function (r) {
      return Wr(r);
    }),
    e
  );
}
function zl(t, e) {
  const r = function (n, i) {
    return n.JsonRpcProvider ? new n.JsonRpcProvider(t, e) : null;
  };
  return (
    (r.renetwork = function (n) {
      return zl(t, n);
    }),
    r
  );
}
const bd = {
    chainId: 1,
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    name: "homestead",
    _defaultProvider: Wr("homestead"),
  },
  _d = {
    chainId: 3,
    ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
    name: "ropsten",
    _defaultProvider: Wr("ropsten"),
  },
  kd = {
    chainId: 63,
    name: "classicMordor",
    _defaultProvider: zl(
      "https://www.ethercluster.com/mordor",
      "classicMordor"
    ),
  },
  zs = {
    unspecified: { chainId: 0, name: "unspecified" },
    homestead: bd,
    mainnet: bd,
    morden: { chainId: 2, name: "morden" },
    ropsten: _d,
    testnet: _d,
    rinkeby: {
      chainId: 4,
      ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
      name: "rinkeby",
      _defaultProvider: Wr("rinkeby"),
    },
    kovan: { chainId: 42, name: "kovan", _defaultProvider: Wr("kovan") },
    goerli: {
      chainId: 5,
      ensAddress: "0x00000000000C2E074eC69A0dFb2997BA6C7d2e1e",
      name: "goerli",
      _defaultProvider: Wr("goerli"),
    },
    kintsugi: { chainId: 1337702, name: "kintsugi" },
    sepolia: {
      chainId: 11155111,
      name: "sepolia",
      _defaultProvider: Wr("sepolia"),
    },
    classic: {
      chainId: 61,
      name: "classic",
      _defaultProvider: zl("https://www.ethercluster.com/etc", "classic"),
    },
    classicMorden: { chainId: 62, name: "classicMorden" },
    classicMordor: kd,
    classicTestnet: kd,
    classicKotti: {
      chainId: 6,
      name: "classicKotti",
      _defaultProvider: zl(
        "https://www.ethercluster.com/kotti",
        "classicKotti"
      ),
    },
    xdai: { chainId: 100, name: "xdai" },
    matic: { chainId: 137, name: "matic", _defaultProvider: Wr("matic") },
    maticmum: { chainId: 80001, name: "maticmum" },
    optimism: {
      chainId: 10,
      name: "optimism",
      _defaultProvider: Wr("optimism"),
    },
    "optimism-kovan": { chainId: 69, name: "optimism-kovan" },
    "optimism-goerli": { chainId: 420, name: "optimism-goerli" },
    arbitrum: { chainId: 42161, name: "arbitrum" },
    "arbitrum-rinkeby": { chainId: 421611, name: "arbitrum-rinkeby" },
    "arbitrum-goerli": { chainId: 421613, name: "arbitrum-goerli" },
    bnb: { chainId: 56, name: "bnb" },
    bnbt: { chainId: 97, name: "bnbt" },
  };
function Ew(t) {
  if (t == null) return null;
  if (typeof t == "number") {
    for (const n in zs) {
      const i = zs[n];
      if (i.chainId === t)
        return {
          name: i.name,
          chainId: i.chainId,
          ensAddress: i.ensAddress || null,
          _defaultProvider: i._defaultProvider || null,
        };
    }
    return { chainId: t, name: "unknown" };
  }
  if (typeof t == "string") {
    const n = zs[t];
    return n == null
      ? null
      : {
          name: n.name,
          chainId: n.chainId,
          ensAddress: n.ensAddress,
          _defaultProvider: n._defaultProvider || null,
        };
  }
  const e = zs[t.name];
  if (!e)
    return (
      typeof t.chainId != "number" &&
        Ed.throwArgumentError("invalid network chainId", "network", t),
      t
    );
  t.chainId !== 0 &&
    t.chainId !== e.chainId &&
    Ed.throwArgumentError("network chainId mismatch", "network", t);
  let r = t._defaultProvider || null;
  return (
    r == null &&
      e._defaultProvider &&
      (Aw(e._defaultProvider)
        ? (r = e._defaultProvider.renetwork(t))
        : (r = e._defaultProvider)),
    {
      name: t.name,
      chainId: e.chainId,
      ensAddress: t.ensAddress || e.ensAddress || null,
      _defaultProvider: r,
    }
  );
}
function Hm(t) {
  t = atob(t);
  const e = [];
  for (let r = 0; r < t.length; r++) e.push(t.charCodeAt(r));
  return oe(e);
}
function Gm(t) {
  t = oe(t);
  let e = "";
  for (let r = 0; r < t.length; r++) e += String.fromCharCode(t[r]);
  return btoa(e);
}
class qm {
  constructor(e) {
    ce(this, "alphabet", e),
      ce(this, "base", e.length),
      ce(this, "_alphabetMap", {}),
      ce(this, "_leader", e.charAt(0));
    for (let r = 0; r < e.length; r++) this._alphabetMap[e.charAt(r)] = r;
  }
  encode(e) {
    let r = oe(e);
    if (r.length === 0) return "";
    let n = [0];
    for (let o = 0; o < r.length; ++o) {
      let s = r[o];
      for (let l = 0; l < n.length; ++l)
        (s += n[l] << 8), (n[l] = s % this.base), (s = (s / this.base) | 0);
      for (; s > 0; ) n.push(s % this.base), (s = (s / this.base) | 0);
    }
    let i = "";
    for (let o = 0; r[o] === 0 && o < r.length - 1; ++o) i += this._leader;
    for (let o = n.length - 1; o >= 0; --o) i += this.alphabet[n[o]];
    return i;
  }
  decode(e) {
    if (typeof e != "string") throw new TypeError("Expected String");
    let r = [];
    if (e.length === 0) return new Uint8Array(r);
    r.push(0);
    for (let n = 0; n < e.length; n++) {
      let i = this._alphabetMap[e[n]];
      if (i === void 0) throw new Error("Non-base" + this.base + " character");
      let o = i;
      for (let s = 0; s < r.length; ++s)
        (o += r[s] * this.base), (r[s] = o & 255), (o >>= 8);
      for (; o > 0; ) r.push(o & 255), (o >>= 8);
    }
    for (let n = 0; e[n] === this._leader && n < e.length - 1; ++n) r.push(0);
    return oe(new Uint8Array(r.reverse()));
  }
}
new qm("abcdefghijklmnopqrstuvwxyz234567");
const Sf = new qm("123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz"),
  bw = "0x0000000000000000000000000000000000000000",
  _w = Y.from(0),
  kw = "0x0000000000000000000000000000000000000000000000000000000000000000",
  Sw = "strings/5.7.0",
  Wm = new B(Sw);
var us;
(function (t) {
  (t.current = ""),
    (t.NFC = "NFC"),
    (t.NFD = "NFD"),
    (t.NFKC = "NFKC"),
    (t.NFKD = "NFKD");
})(us || (us = {}));
var qt;
(function (t) {
  (t.UNEXPECTED_CONTINUE = "unexpected continuation byte"),
    (t.BAD_PREFIX = "bad codepoint prefix"),
    (t.OVERRUN = "string overrun"),
    (t.MISSING_CONTINUE = "missing continuation byte"),
    (t.OUT_OF_RANGE = "out of UTF-8 range"),
    (t.UTF16_SURROGATE = "UTF-16 surrogate"),
    (t.OVERLONG = "overlong representation");
})(qt || (qt = {}));
function Nw(t, e, r, n, i) {
  return Wm.throwArgumentError(
    `invalid codepoint at offset ${e}; ${t}`,
    "bytes",
    r
  );
}
function Qm(t, e, r, n, i) {
  if (t === qt.BAD_PREFIX || t === qt.UNEXPECTED_CONTINUE) {
    let o = 0;
    for (let s = e + 1; s < r.length && r[s] >> 6 === 2; s++) o++;
    return o;
  }
  return t === qt.OVERRUN ? r.length - e - 1 : 0;
}
function Cw(t, e, r, n, i) {
  return t === qt.OVERLONG ? (n.push(i), 0) : (n.push(65533), Qm(t, e, r));
}
const Pw = Object.freeze({ error: Nw, ignore: Qm, replace: Cw });
function Km(t, e) {
  e == null && (e = Pw.error), (t = oe(t));
  const r = [];
  let n = 0;
  for (; n < t.length; ) {
    const i = t[n++];
    if (!(i >> 7)) {
      r.push(i);
      continue;
    }
    let o = null,
      s = null;
    if ((i & 224) === 192) (o = 1), (s = 127);
    else if ((i & 240) === 224) (o = 2), (s = 2047);
    else if ((i & 248) === 240) (o = 3), (s = 65535);
    else {
      (i & 192) === 128
        ? (n += e(qt.UNEXPECTED_CONTINUE, n - 1, t, r))
        : (n += e(qt.BAD_PREFIX, n - 1, t, r));
      continue;
    }
    if (n - 1 + o >= t.length) {
      n += e(qt.OVERRUN, n - 1, t, r);
      continue;
    }
    let l = i & ((1 << (8 - o - 1)) - 1);
    for (let a = 0; a < o; a++) {
      let f = t[n];
      if ((f & 192) != 128) {
        (n += e(qt.MISSING_CONTINUE, n, t, r)), (l = null);
        break;
      }
      (l = (l << 6) | (f & 63)), n++;
    }
    if (l !== null) {
      if (l > 1114111) {
        n += e(qt.OUT_OF_RANGE, n - 1 - o, t, r, l);
        continue;
      }
      if (l >= 55296 && l <= 57343) {
        n += e(qt.UTF16_SURROGATE, n - 1 - o, t, r, l);
        continue;
      }
      if (l <= s) {
        n += e(qt.OVERLONG, n - 1 - o, t, r, l);
        continue;
      }
      r.push(l);
    }
  }
  return r;
}
function Zr(t, e = us.current) {
  e != us.current && (Wm.checkNormalize(), (t = t.normalize(e)));
  let r = [];
  for (let n = 0; n < t.length; n++) {
    const i = t.charCodeAt(n);
    if (i < 128) r.push(i);
    else if (i < 2048) r.push((i >> 6) | 192), r.push((i & 63) | 128);
    else if ((i & 64512) == 55296) {
      n++;
      const o = t.charCodeAt(n);
      if (n >= t.length || (o & 64512) !== 56320)
        throw new Error("invalid utf-8 string");
      const s = 65536 + ((i & 1023) << 10) + (o & 1023);
      r.push((s >> 18) | 240),
        r.push(((s >> 12) & 63) | 128),
        r.push(((s >> 6) & 63) | 128),
        r.push((s & 63) | 128);
    } else
      r.push((i >> 12) | 224),
        r.push(((i >> 6) & 63) | 128),
        r.push((i & 63) | 128);
  }
  return oe(r);
}
function Mw(t) {
  return t
    .map((e) =>
      e <= 65535
        ? String.fromCharCode(e)
        : ((e -= 65536),
          String.fromCharCode(((e >> 10) & 1023) + 55296, (e & 1023) + 56320))
    )
    .join("");
}
function ha(t, e) {
  return Mw(Km(t, e));
}
function Rw(t, e = us.current) {
  return Km(Zr(t, e));
}
function Vm(t) {
  return mt(Zr(t));
}
const Jm = "hash/5.7.0";
function $m(t, e) {
  e == null && (e = 1);
  const r = [],
    n = r.forEach,
    i = function (o, s) {
      n.call(o, function (l) {
        s > 0 && Array.isArray(l) ? i(l, s - 1) : r.push(l);
      });
    };
  return i(t, e), r;
}
function Iw(t) {
  const e = {};
  for (let r = 0; r < t.length; r++) {
    const n = t[r];
    e[n[0]] = n[1];
  }
  return e;
}
function Tw(t) {
  let e = 0;
  function r() {
    return (t[e++] << 8) | t[e++];
  }
  let n = r(),
    i = 1,
    o = [0, 1];
  for (let L = 1; L < n; L++) o.push((i += r()));
  let s = r(),
    l = e;
  e += s;
  let a = 0,
    f = 0;
  function h() {
    return a == 0 && ((f = (f << 8) | t[e++]), (a = 8)), (f >> --a) & 1;
  }
  const p = 31,
    y = Math.pow(2, p),
    S = y >>> 1,
    P = S >> 1,
    M = y - 1;
  let I = 0;
  for (let L = 0; L < p; L++) I = (I << 1) | h();
  let w = [],
    x = 0,
    N = y;
  for (;;) {
    let L = Math.floor(((I - x + 1) * i - 1) / N),
      j = 0,
      H = n;
    for (; H - j > 1; ) {
      let Z = (j + H) >>> 1;
      L < o[Z] ? (H = Z) : (j = Z);
    }
    if (j == 0) break;
    w.push(j);
    let G = x + Math.floor((N * o[j]) / i),
      ee = x + Math.floor((N * o[j + 1]) / i) - 1;
    for (; !((G ^ ee) & S); )
      (I = ((I << 1) & M) | h()),
        (G = (G << 1) & M),
        (ee = ((ee << 1) & M) | 1);
    for (; G & ~ee & P; )
      (I = (I & S) | ((I << 1) & (M >>> 1)) | h()),
        (G = (G << 1) ^ S),
        (ee = ((ee ^ S) << 1) | S | 1);
    (x = G), (N = 1 + ee - G);
  }
  let T = n - 4;
  return w.map((L) => {
    switch (L - T) {
      case 3:
        return T + 65792 + ((t[l++] << 16) | (t[l++] << 8) | t[l++]);
      case 2:
        return T + 256 + ((t[l++] << 8) | t[l++]);
      case 1:
        return T + t[l++];
      default:
        return L - 1;
    }
  });
}
function Ow(t) {
  let e = 0;
  return () => t[e++];
}
function Lw(t) {
  return Ow(Tw(t));
}
function Bw(t) {
  return t & 1 ? ~t >> 1 : t >> 1;
}
function Dw(t, e) {
  let r = Array(t);
  for (let n = 0; n < t; n++) r[n] = 1 + e();
  return r;
}
function Sd(t, e) {
  let r = Array(t);
  for (let n = 0, i = -1; n < t; n++) r[n] = i += 1 + e();
  return r;
}
function Fw(t, e) {
  let r = Array(t);
  for (let n = 0, i = 0; n < t; n++) r[n] = i += Bw(e());
  return r;
}
function Hl(t, e) {
  let r = Sd(t(), t),
    n = t(),
    i = Sd(n, t),
    o = Dw(n, t);
  for (let s = 0; s < n; s++) for (let l = 0; l < o[s]; l++) r.push(i[s] + l);
  return e ? r.map((s) => e[s]) : r;
}
function jw(t) {
  let e = [];
  for (;;) {
    let r = t();
    if (r == 0) break;
    e.push(zw(r, t));
  }
  for (;;) {
    let r = t() - 1;
    if (r < 0) break;
    e.push(Hw(r, t));
  }
  return Iw($m(e));
}
function Uw(t) {
  let e = [];
  for (;;) {
    let r = t();
    if (r == 0) break;
    e.push(r);
  }
  return e;
}
function Ym(t, e, r) {
  let n = Array(t)
    .fill(void 0)
    .map(() => []);
  for (let i = 0; i < e; i++) Fw(t, r).forEach((o, s) => n[s].push(o));
  return n;
}
function zw(t, e) {
  let r = 1 + e(),
    n = e(),
    i = Uw(e),
    o = Ym(i.length, 1 + t, e);
  return $m(
    o.map((s, l) => {
      const a = s[0],
        f = s.slice(1);
      return Array(i[l])
        .fill(void 0)
        .map((h, p) => {
          let y = p * n;
          return [a + p * r, f.map((S) => S + y)];
        });
    })
  );
}
function Hw(t, e) {
  let r = 1 + e();
  return Ym(r, 1 + t, e).map((i) => [i[0], i.slice(1)]);
}
function Gw(t) {
  let e = Hl(t).sort((n, i) => n - i);
  return r();
  function r() {
    let n = [];
    for (;;) {
      let f = Hl(t, e);
      if (f.length == 0) break;
      n.push({ set: new Set(f), node: r() });
    }
    n.sort((f, h) => h.set.size - f.set.size);
    let i = t(),
      o = i % 3;
    i = (i / 3) | 0;
    let s = !!(i & 1);
    i >>= 1;
    let l = i == 1,
      a = i == 2;
    return { branches: n, valid: o, fe0f: s, save: l, check: a };
  }
}
function qw() {
  return Lw(
    Hm(
      "AEQF2AO2DEsA2wIrAGsBRABxAN8AZwCcAEwAqgA0AGwAUgByADcATAAVAFYAIQAyACEAKAAYAFgAGwAjABQAMAAmADIAFAAfABQAKwATACoADgAbAA8AHQAYABoAGQAxADgALAAoADwAEwA9ABMAGgARAA4ADwAWABMAFgAIAA8AHgQXBYMA5BHJAS8JtAYoAe4AExozi0UAH21tAaMnBT8CrnIyhrMDhRgDygIBUAEHcoFHUPe8AXBjAewCjgDQR8IICIcEcQLwATXCDgzvHwBmBoHNAqsBdBcUAykgDhAMShskMgo8AY8jqAQfAUAfHw8BDw87MioGlCIPBwZCa4ELatMAAMspJVgsDl8AIhckSg8XAHdvTwBcIQEiDT4OPhUqbyECAEoAS34Aej8Ybx83JgT/Xw8gHxZ/7w8RICxPHA9vBw+Pfw8PHwAPFv+fAsAvCc8vEr8ivwD/EQ8Bol8OEBa/A78hrwAPCU8vESNvvwWfHwNfAVoDHr+ZAAED34YaAdJPAK7PLwSEgDLHAGo1Pz8Pvx9fUwMrpb8O/58VTzAPIBoXIyQJNF8hpwIVAT8YGAUADDNBaX3RAMomJCg9EhUeA29MABsZBTMNJipjOhc19gcIDR8bBwQHEggCWi6DIgLuAQYA+BAFCha3A5XiAEsqM7UFFgFLhAMjFTMYE1Klnw74nRVBG/ASCm0BYRN/BrsU3VoWy+S0vV8LQx+vN8gF2AC2AK5EAWwApgYDKmAAroQ0NDQ0AT+OCg7wAAIHRAbpNgVcBV0APTA5BfbPFgMLzcYL/QqqA82eBALKCjQCjqYCht0/k2+OAsXQAoP3ASTKDgDw6ACKAUYCMpIKJpRaAE4A5womABzZvs0REEKiACIQAd5QdAECAj4Ywg/wGqY2AVgAYADYvAoCGAEubA0gvAY2ALAAbpbvqpyEAGAEpgQAJgAG7gAgAEACmghUFwCqAMpAINQIwC4DthRAAPcycKgApoIdABwBfCisABoATwBqASIAvhnSBP8aH/ECeAKXAq40NjgDBTwFYQU6AXs3oABgAD4XNgmcCY1eCl5tIFZeUqGgyoNHABgAEQAaABNwWQAmABMATPMa3T34ADldyprmM1M2XociUQgLzvwAXT3xABgAEQAaABNwIGFAnADD8AAgAD4BBJWzaCcIAIEBFMAWwKoAAdq9BWAF5wLQpALEtQAKUSGkahR4GnJM+gsAwCgeFAiUAECQ0BQuL8AAIAAAADKeIheclvFqQAAETr4iAMxIARMgAMIoHhQIAn0E0pDQFC4HhznoAAAAIAI2C0/4lvFqQAAETgBJJwYCAy4ABgYAFAA8MBKYEH4eRhTkAjYeFcgACAYAeABsOqyQ5gRwDayqugEgaIIAtgoACgDmEABmBAWGme5OBJJA2m4cDeoAmITWAXwrMgOgAGwBCh6CBXYF1Tzg1wKAAFdiuABRAFwAXQBsAG8AdgBrAHYAbwCEAHEwfxQBVE5TEQADVFhTBwBDANILAqcCzgLTApQCrQL6vAAMAL8APLhNBKkE6glGKTAU4Dr4N2EYEwBCkABKk8rHAbYBmwIoAiU4Ajf/Aq4CowCAANIChzgaNBsCsTgeODcFXrgClQKdAqQBiQGYAqsCsjTsNHsfNPA0ixsAWTWiOAMFPDQSNCk2BDZHNow2TTZUNhk28Jk9VzI3QkEoAoICoQKwAqcAQAAxBV4FXbS9BW47YkIXP1ciUqs05DS/FwABUwJW11e6nHuYZmSh/RAYA8oMKvZ8KASoUAJYWAJ6ILAsAZSoqjpgA0ocBIhmDgDWAAawRDQoAAcuAj5iAHABZiR2AIgiHgCaAU68ACxuHAG0ygM8MiZIAlgBdF4GagJqAPZOHAMuBgoATkYAsABiAHgAMLoGDPj0HpKEBAAOJgAuALggTAHWAeAMEDbd20Uege0ADwAWADkAQgA9OHd+2MUQZBBhBgNNDkxxPxUQArEPqwvqERoM1irQ090ANK4H8ANYB/ADWANYB/AH8ANYB/ADWANYA1gDWBwP8B/YxRBkD00EcgWTBZAE2wiIJk4RhgctCNdUEnQjHEwDSgEBIypJITuYMxAlR0wRTQgIATZHbKx9PQNMMbBU+pCnA9AyVDlxBgMedhKlAC8PeCE1uk6DekxxpQpQT7NX9wBFBgASqwAS5gBJDSgAUCwGPQBI4zTYABNGAE2bAE3KAExdGABKaAbgAFBXAFCOAFBJABI2SWdObALDOq0//QomCZhvwHdTBkIQHCemEPgMNAG2ATwN7kvZBPIGPATKH34ZGg/OlZ0Ipi3eDO4m5C6igFsj9iqEBe5L9TzeC05RaQ9aC2YJ5DpkgU8DIgEOIowK3g06CG4Q9ArKbA3mEUYHOgPWSZsApgcCCxIdNhW2JhFirQsKOXgG/Br3C5AmsBMqev0F1BoiBk4BKhsAANAu6IWxWjJcHU9gBgQLJiPIFKlQIQ0mQLh4SRocBxYlqgKSQ3FKiFE3HpQh9zw+DWcuFFF9B/Y8BhlQC4I8n0asRQ8R0z6OPUkiSkwtBDaALDAnjAnQD4YMunxzAVoJIgmyDHITMhEYN8YIOgcaLpclJxYIIkaWYJsE+KAD9BPSAwwFQAlCBxQDthwuEy8VKgUOgSXYAvQ21i60ApBWgQEYBcwPJh/gEFFH4Q7qCJwCZgOEJewALhUiABginAhEZABgj9lTBi7MCMhqbSN1A2gU6GIRdAeSDlgHqBw0FcAc4nDJXgyGCSiksAlcAXYJmgFgBOQICjVcjKEgQmdUi1kYnCBiQUBd/QIyDGYVoES+h3kCjA9sEhwBNgF0BzoNAgJ4Ee4RbBCWCOyGBTW2M/k6JgRQIYQgEgooA1BszwsoJvoM+WoBpBJjAw00PnfvZ6xgtyUX/gcaMsZBYSHyC5NPzgydGsIYQ1QvGeUHwAP0GvQn60FYBgADpAQUOk4z7wS+C2oIjAlAAEoOpBgH2BhrCnKM0QEyjAG4mgNYkoQCcJAGOAcMAGgMiAV65gAeAqgIpAAGANADWAA6Aq4HngAaAIZCAT4DKDABIuYCkAOUCDLMAZYwAfQqBBzEDBYA+DhuSwLDsgKAa2ajBd5ZAo8CSjYBTiYEBk9IUgOwcuIA3ABMBhTgSAEWrEvMG+REAeBwLADIAPwABjYHBkIBzgH0bgC4AWALMgmjtLYBTuoqAIQAFmwB2AKKAN4ANgCA8gFUAE4FWvoF1AJQSgESMhksWGIBvAMgATQBDgB6BsyOpsoIIARuB9QCEBwV4gLvLwe2AgMi4BPOQsYCvd9WADIXUu5eZwqoCqdeaAC0YTQHMnM9UQAPH6k+yAdy/BZIiQImSwBQ5gBQQzSaNTFWSTYBpwGqKQK38AFtqwBI/wK37gK3rQK3sAK6280C0gK33AK3zxAAUEIAUD9SklKDArekArw5AEQAzAHCO147WTteO1k7XjtZO147WTteO1kDmChYI03AVU0oJqkKbV9GYewMpw3VRMk6ShPcYFJgMxPJLbgUwhXPJVcZPhq9JwYl5VUKDwUt1GYxCC00dhe9AEApaYNCY4ceMQpMHOhTklT5LRwAskujM7ANrRsWREEFSHXuYisWDwojAmSCAmJDXE6wXDchAqH4AmiZAmYKAp+FOBwMAmY8AmYnBG8EgAN/FAN+kzkHOXgYOYM6JCQCbB4CMjc4CwJtyAJtr/CLADRoRiwBaADfAOIASwYHmQyOAP8MwwAOtgJ3MAJ2o0ACeUxEAni7Hl3cRa9G9AJ8QAJ6yQJ9CgJ88UgBSH5kJQAsFklZSlwWGErNAtECAtDNSygDiFADh+dExpEzAvKiXQQDA69Lz0wuJgTQTU1NsAKLQAKK2cIcCB5EaAa4Ao44Ao5dQZiCAo7aAo5deVG1UzYLUtVUhgKT/AKTDQDqAB1VH1WwVdEHLBwplocy4nhnRTw6ApegAu+zWCKpAFomApaQApZ9nQCqWa1aCoJOADwClrYClk9cRVzSApnMApllXMtdCBoCnJw5wzqeApwXAp+cAp65iwAeEDIrEAKd8gKekwC2PmE1YfACntQCoG8BqgKeoCACnk+mY8lkKCYsAiewAiZ/AqD8AqBN2AKmMAKlzwKoAAB+AqfzaH1osgAESmodatICrOQCrK8CrWgCrQMCVx4CVd0CseLYAx9PbJgCsr4OArLpGGzhbWRtSWADJc4Ctl08QG6RAylGArhfArlIFgK5K3hwN3DiAr0aAy2zAzISAr6JcgMDM3ICvhtzI3NQAsPMAsMFc4N0TDZGdOEDPKgDPJsDPcACxX0CxkgCxhGKAshqUgLIRQLJUALJLwJkngLd03h6YniveSZL0QMYpGcDAmH1GfSVJXsMXpNevBICz2wCz20wTFTT9BSgAMeuAs90ASrrA04TfkwGAtwoAtuLAtJQA1JdA1NgAQIDVY2AikABzBfuYUZ2AILPg44C2sgC2d+EEYRKpz0DhqYAMANkD4ZyWvoAVgLfZgLeuXR4AuIw7RUB8zEoAfScAfLTiALr9ALpcXoAAur6AurlAPpIAboC7ooC652Wq5cEAu5AA4XhmHpw4XGiAvMEAGoDjheZlAL3FAORbwOSiAL3mQL52gL4Z5odmqy8OJsfA52EAv77ARwAOp8dn7QDBY4DpmsDptoA0sYDBmuhiaIGCgMMSgFgASACtgNGAJwEgLpoBgC8BGzAEowcggCEDC6kdjoAJAM0C5IKRoABZCgiAIzw3AYBLACkfng9ogigkgNmWAN6AEQCvrkEVqTGAwCsBRbAA+4iQkMCHR072jI2PTbUNsk2RjY5NvA23TZKNiU3EDcZN5I+RTxDRTBCJkK5VBYKFhZfwQCWygU3AJBRHpu+OytgNxa61A40GMsYjsn7BVwFXQVcBV0FaAVdBVwFXQVcBV0FXAVdBVwFXUsaCNyKAK4AAQUHBwKU7oICoW1e7jAEzgPxA+YDwgCkBFDAwADABKzAAOxFLhitA1UFTDeyPkM+bj51QkRCuwTQWWQ8X+0AWBYzsACNA8xwzAGm7EZ/QisoCTAbLDs6fnLfb8H2GccsbgFw13M1HAVkBW/Jxsm9CNRO8E8FDD0FBQw9FkcClOYCoMFegpDfADgcMiA2AJQACB8AsigKAIzIEAJKeBIApY5yPZQIAKQiHb4fvj5BKSRPQrZCOz0oXyxgOywfKAnGbgMClQaCAkILXgdeCD9IIGUgQj5fPoY+dT52Ao5CM0dAX9BTVG9SDzFwWTQAbxBzJF/lOEIQQglCCkKJIAls5AcClQICoKPMODEFxhi6KSAbiyfIRrMjtCgdWCAkPlFBIitCsEJRzAbMAV/OEyQzDg0OAQQEJ36i328/Mk9AybDJsQlq3tDRApUKAkFzXf1d/j9uALYP6hCoFgCTGD8kPsFKQiobrm0+zj0KSD8kPnVCRBwMDyJRTHFgMTJa5rwXQiQ2YfI/JD7BMEJEHGINTw4TOFlIRzwJO0icMQpyPyQ+wzJCRBv6DVgnKB01NgUKj2bwYzMqCoBkznBgEF+zYDIocwRIX+NgHj4HICNfh2C4CwdwFWpTG/lgUhYGAwRfv2Ts8mAaXzVgml/XYIJfuWC4HI1gUF9pYJZgMR6ilQHMAOwLAlDRefC0in4AXAEJA6PjCwc0IamOANMMCAECRQDFNRTZBgd+CwQlRA+r6+gLBDEFBnwUBXgKATIArwAGRAAHA3cDdAN2A3kDdwN9A3oDdQN7A30DfAN4A3oDfQAYEAAlAtYASwMAUAFsAHcKAHcAmgB3AHUAdQB2AHVu8UgAygDAAHcAdQB1AHYAdQALCgB3AAsAmgB3AAsCOwB3AAtu8UgAygDAAHgKAJoAdwB3AHUAdQB2AHUAeAB1AHUAdgB1bvFIAMoAwAALCgCaAHcACwB3AAsCOwB3AAtu8UgAygDAAH4ACwGgALcBpwC6AahdAu0COwLtbvFIAMoAwAALCgCaAu0ACwLtAAsCOwLtAAtu8UgAygDAA24ACwNvAAu0VsQAAzsAABCkjUIpAAsAUIusOggWcgMeBxVsGwL67U/2HlzmWOEeOgALASvuAAseAfpKUpnpGgYJDCIZM6YyARUE9ThqAD5iXQgnAJYJPnOzw0ZAEZxEKsIAkA4DhAHnTAIDxxUDK0lxCQlPYgIvIQVYJQBVqE1GakUAKGYiDToSBA1EtAYAXQJYAIF8GgMHRyAAIAjOe9YncekRAA0KACUrjwE7Ayc6AAYWAqaiKG4McEcqANoN3+Mg9TwCBhIkuCny+JwUQ29L008JluRxu3K+oAdqiHOqFH0AG5SUIfUJ5SxCGfxdipRzqTmT4V5Zb+r1Uo4Vm+NqSSEl2mNvR2JhIa8SpYO6ntdwFXHCWTCK8f2+Hxo7uiG3drDycAuKIMP5bhi06ACnqArH1rz4Rqg//lm6SgJGEVbF9xJHISaR6HxqxSnkw6shDnelHKNEfGUXSJRJ1GcsmtJw25xrZMDK9gXSm1/YMkdX4/6NKYOdtk/NQ3/NnDASjTc3fPjIjW/5sVfVObX2oTDWkr1dF9f3kxBsD3/3aQO8hPfRz+e0uEiJqt1161griu7gz8hDDwtpy+F+BWtefnKHZPAxcZoWbnznhJpy0e842j36bcNzGnIEusgGX0a8ZxsnjcSsPDZ09yZ36fCQbriHeQ72JRMILNl6ePPf2HWoVwgWAm1fb3V2sAY0+B6rAXqSwPBgseVmoqsBTSrm91+XasMYYySI8eeRxH3ZvHkMz3BQ5aJ3iUVbYPNM3/7emRtjlsMgv/9VyTsyt/mK+8fgWeT6SoFaclXqn42dAIsvAarF5vNNWHzKSkKQ/8Hfk5ZWK7r9yliOsooyBjRhfkHP4Q2DkWXQi6FG/9r/IwbmkV5T7JSopHKn1pJwm9tb5Ot0oyN1Z2mPpKXHTxx2nlK08fKk1hEYA8WgVVWL5lgx0iTv+KdojJeU23ZDjmiubXOxVXJKKi2Wjuh2HLZOFLiSC7Tls5SMh4f+Pj6xUSrNjFqLGehRNB8lC0QSLNmkJJx/wSG3MnjE9T1CkPwJI0wH2lfzwETIiVqUxg0dfu5q39Gt+hwdcxkhhNvQ4TyrBceof3Mhs/IxFci1HmHr4FMZgXEEczPiGCx0HRwzAqDq2j9AVm1kwN0mRVLWLylgtoPNapF5cY4Y1wJh/e0BBwZj44YgZrDNqvD/9Hv7GFYdUQeDJuQ3EWI4HaKqavU1XjC/n41kT4L79kqGq0kLhdTZvgP3TA3fS0ozVz+5piZsoOtIvBUFoMKbNcmBL6YxxaUAusHB38XrS8dQMnQwJfUUkpRoGr5AUeWicvBTzyK9g77+yCkf5PAysL7r/JjcZgrbvRpMW9iyaxZvKO6ceZN2EwIxKwVFPuvFuiEPGCoagbMo+SpydLrXqBzNCDGFCrO/rkcwa2xhokQZ5CdZ0AsU3JfSqJ6n5I14YA+P/uAgfhPU84Tlw7cEFfp7AEE8ey4sP12PTt4Cods1GRgDOB5xvyiR5m+Bx8O5nBCNctU8BevfV5A08x6RHd5jcwPTMDSZJOedIZ1cGQ704lxbAzqZOP05ZxaOghzSdvFBHYqomATARyAADK4elP8Ly3IrUZKfWh23Xy20uBUmLS4Pfagu9+oyVa2iPgqRP3F2CTUsvJ7+RYnN8fFZbU/HVvxvcFFDKkiTqV5UBZ3Gz54JAKByi9hkKMZJvuGgcSYXFmw08UyoQyVdfTD1/dMkCHXcTGAKeROgArsvmRrQTLUOXioOHGK2QkjHuoYFgXciZoTJd6Fs5q1QX1G+p/e26hYsEf7QZD1nnIyl/SFkNtYYmmBhpBrxl9WbY0YpHWRuw2Ll/tj9mD8P4snVzJl4F9J+1arVeTb9E5r2ILH04qStjxQNwn3m4YNqxmaNbLAqW2TN6LidwuJRqS+NXbtqxoeDXpxeGWmxzSkWxjkyCkX4NQRme6q5SAcC+M7+9ETfA/EwrzQajKakCwYyeunP6ZFlxU2oMEn1Pz31zeStW74G406ZJFCl1wAXIoUKkWotYEpOuXB1uVNxJ63dpJEqfxBeptwIHNrPz8BllZoIcBoXwgfJ+8VAUnVPvRvexnw0Ma/WiGYuJO5y8QTvEYBigFmhUxY5RqzE8OcywN/8m4UYrlaniJO75XQ6KSo9+tWHlu+hMi0UVdiKQp7NelnoZUzNaIyBPVeOwK6GNp+FfHuPOoyhaWuNvTYFkvxscMQWDh+zeFCFkgwbXftiV23ywJ4+uwRqmg9k3KzwIQpzppt8DBBOMbrqwQM5Gb05sEwdKzMiAqOloaA/lr0KA+1pr0/+HiWoiIjHA/wir2nIuS3PeU/ji3O6ZwoxcR1SZ9FhtLC5S0FIzFhbBWcGVP/KpxOPSiUoAdWUpqKH++6Scz507iCcxYI6rdMBICPJZea7OcmeFw5mObJSiqpjg2UoWNIs+cFhyDSt6geV5qgi3FunmwwDoGSMgerFOZGX1m0dMCYo5XOruxO063dwENK9DbnVM9wYFREzh4vyU1WYYJ/LRRp6oxgjqP/X5a8/4Af6p6NWkQferzBmXme0zY/4nwMJm/wd1tIqSwGz+E3xPEAOoZlJit3XddD7/BT1pllzOx+8bmQtANQ/S6fZexc6qi3W+Q2xcmXTUhuS5mpHQRvcxZUN0S5+PL9lXWUAaRZhEH8hTdAcuNMMCuVNKTEGtSUKNi3O6KhSaTzck8csZ2vWRZ+d7mW8c4IKwXIYd25S/zIftPkwPzufjEvOHWVD1m+FjpDVUTV0DGDuHj6QnaEwLu/dEgdLQOg9E1Sro9XHJ8ykLAwtPu+pxqKDuFexqON1sKQm7rwbE1E68UCfA/erovrTCG+DBSNg0l4goDQvZN6uNlbyLpcZAwj2UclycvLpIZMgv4yRlpb3YuMftozorbcGVHt/VeDV3+Fdf1TP0iuaCsPi2G4XeGhsyF1ubVDxkoJhmniQ0/jSg/eYML9KLfnCFgISWkp91eauR3IQvED0nAPXK+6hPCYs+n3+hCZbiskmVMG2da+0EsZPonUeIY8EbfusQXjsK/eFDaosbPjEfQS0RKG7yj5GG69M7MeO1HmiUYocgygJHL6M1qzUDDwUSmr99V7Sdr2F3JjQAJY+F0yH33Iv3+C9M38eML7gTgmNu/r2bUMiPvpYbZ6v1/IaESirBHNa7mPKn4dEmYg7v/+HQgPN1G79jBQ1+soydfDC2r+h2Bl/KIc5KjMK7OH6nb1jLsNf0EHVe2KBiE51ox636uyG6Lho0t3J34L5QY/ilE3mikaF4HKXG1mG1rCevT1Vv6GavltxoQe/bMrpZvRggnBxSEPEeEzkEdOxTnPXHVjUYdw8JYvjB/o7Eegc3Ma+NUxLLnsK0kJlinPmUHzHGtrk5+CAbVzFOBqpyy3QVUnzTDfC/0XD94/okH+OB+i7g9lolhWIjSnfIb+Eq43ZXOWmwvjyV/qqD+t0e+7mTEM74qP/Ozt8nmC7mRpyu63OB4KnUzFc074SqoyPUAgM+/TJGFo6T44EHnQU4X4z6qannVqgw/U7zCpwcmXV1AubIrvOmkKHazJAR55ePjp5tLBsN8vAqs3NAHdcEHOR2xQ0lsNAFzSUuxFQCFYvXLZJdOj9p4fNq6p0HBGUik2YzaI4xySy91KzhQ0+q1hjxvImRwPRf76tChlRkhRCi74NXZ9qUNeIwP+s5p+3m5nwPdNOHgSLD79n7O9m1n1uDHiMntq4nkYwV5OZ1ENbXxFd4PgrlvavZsyUO4MqYlqqn1O8W/I1dEZq5dXhrbETLaZIbC2Kj/Aa/QM+fqUOHdf0tXAQ1huZ3cmWECWSXy/43j35+Mvq9xws7JKseriZ1pEWKc8qlzNrGPUGcVgOa9cPJYIJsGnJTAUsEcDOEVULO5x0rXBijc1lgXEzQQKhROf8zIV82w8eswc78YX11KYLWQRcgHNJElBxfXr72lS2RBSl07qTKorO2uUDZr3sFhYsvnhLZn0A94KRzJ/7DEGIAhW5ZWFpL8gEwu1aLA9MuWZzNwl8Oze9Y+bX+v9gywRVnoB5I/8kXTXU3141yRLYrIOOz6SOnyHNy4SieqzkBXharjfjqq1q6tklaEbA8Qfm2DaIPs7OTq/nvJBjKfO2H9bH2cCMh1+5gspfycu8f/cuuRmtDjyqZ7uCIMyjdV3a+p3fqmXsRx4C8lujezIFHnQiVTXLXuI1XrwN3+siYYj2HHTvESUx8DlOTXpak9qFRK+L3mgJ1WsD7F4cu1aJoFoYQnu+wGDMOjJM3kiBQWHCcvhJ/HRdxodOQp45YZaOTA22Nb4XKCVxqkbwMYFhzYQYIAnCW8FW14uf98jhUG2zrKhQQ0q0CEq0t5nXyvUyvR8DvD69LU+g3i+HFWQMQ8PqZuHD+sNKAV0+M6EJC0szq7rEr7B5bQ8BcNHzvDMc9eqB5ZCQdTf80Obn4uzjwpYU7SISdtV0QGa9D3Wrh2BDQtpBKxaNFV+/Cy2P/Sv+8s7Ud0Fd74X4+o/TNztWgETUapy+majNQ68Lq3ee0ZO48VEbTZYiH1Co4OlfWef82RWeyUXo7woM03PyapGfikTnQinoNq5z5veLpeMV3HCAMTaZmA1oGLAn7XS3XYsz+XK7VMQsc4XKrmDXOLU/pSXVNUq8dIqTba///3x6LiLS6xs1xuCAYSfcQ3+rQgmu7uvf3THKt5Ooo97TqcbRqxx7EASizaQCBQllG/rYxVapMLgtLbZS64w1MDBMXX+PQpBKNwqUKOf2DDRDUXQf9EhOS0Qj4nTmlA8dzSLz/G1d+Ud8MTy/6ghhdiLpeerGY/UlDOfiuqFsMUU5/UYlP+BAmgRLuNpvrUaLlVkrqDievNVEAwF+4CoM1MZTmjxjJMsKJq+u8Zd7tNCUFy6LiyYXRJQ4VyvEQFFaCGKsxIwQkk7EzZ6LTJq2hUuPhvAW+gQnSG6J+MszC+7QCRHcnqDdyNRJ6T9xyS87A6MDutbzKGvGktpbXqtzWtXb9HsfK2cBMomjN9a4y+TaJLnXxAeX/HWzmf4cR4vALt/P4w4qgKY04ml4ZdLOinFYS6cup3G/1ie4+t1eOnpBNlqGqs75ilzkT4+DsZQxNvaSKJ//6zIbbk/M7LOhFmRc/1R+kBtz7JFGdZm/COotIdvQoXpTqP/1uqEUmCb/QWoGLMwO5ANcHzxdY48IGP5+J+zKOTBFZ4Pid+GTM+Wq12MV/H86xEJptBa6T+p3kgpwLedManBHC2GgNrFpoN2xnrMz9WFWX/8/ygSBkavq2Uv7FdCsLEYLu9LLIvAU0bNRDtzYl+/vXmjpIvuJFYjmI0im6QEYqnIeMsNjXG4vIutIGHijeAG/9EDBozKV5cldkHbLxHh25vT+ZEzbhXlqvpzKJwcEgfNwLAKFeo0/pvEE10XDB+EXRTXtSzJozQKFFAJhMxYkVaCW+E9AL7tMeU8acxidHqzb6lX4691UsDpy/LLRmT+epgW56+5Cw8tB4kMUv6s9lh3eRKbyGs+H/4mQMaYzPTf2OOdokEn+zzgvoD3FqNKk8QqGAXVsqcGdXrT62fSPkR2vROFi68A6se86UxRUk4cajfPyCC4G5wDhD+zNq4jodQ4u4n/m37Lr36n4LIAAsVr02dFi9AiwA81MYs2rm4eDlDNmdMRvEKRHfBwW5DdMNp0jPFZMeARqF/wL4XBfd+EMLBfMzpH5GH6NaW+1vrvMdg+VxDzatk3MXgO3ro3P/DpcC6+Mo4MySJhKJhSR01SGGGp5hPWmrrUgrv3lDnP+HhcI3nt3YqBoVAVTBAQT5iuhTg8nvPtd8ZeYj6w1x6RqGUBrSku7+N1+BaasZvjTk64RoIDlL8brpEcJx3OmY7jLoZsswdtmhfC/G21llXhITOwmvRDDeTTPbyASOa16cF5/A1fZAidJpqju3wYAy9avPR1ya6eNp9K8XYrrtuxlqi+bDKwlfrYdR0RRiKRVTLOH85+ZY7XSmzRpfZBJjaTa81VDcJHpZnZnSQLASGYW9l51ZV/h7eVzTi3Hv6hUsgc/51AqJRTkpbFVLXXszoBL8nBX0u/0jBLT8nH+fJePbrwURT58OY+UieRjd1vs04w0VG5VN2U6MoGZkQzKN/ptz0Q366dxoTGmj7i1NQGHi9GgnquXFYdrCfZBmeb7s0T6yrdlZH5cZuwHFyIJ/kAtGsTg0xH5taAAq44BAk1CPk9KVVbqQzrCUiFdF/6gtlPQ8bHHc1G1W92MXGZ5HEHftyLYs8mbD/9xYRUWkHmlM0zC2ilJlnNgV4bfALpQghxOUoZL7VTqtCHIaQSXm+YUMnpkXybnV+A6xlm2CVy8fn0Xlm2XRa0+zzOa21JWWmixfiPMSCZ7qA4rS93VN3pkpF1s5TonQjisHf7iU9ZGvUPOAKZcR1pbeVf/Ul7OhepGCaId9wOtqo7pJ7yLcBZ0pFkOF28y4zEI/kcUNmutBHaQpBdNM8vjCS6HZRokkeo88TBAjGyG7SR+6vUgTcyK9Imalj0kuxz0wmK+byQU11AiJFk/ya5dNduRClcnU64yGu/ieWSeOos1t3ep+RPIWQ2pyTYVbZltTbsb7NiwSi3AV+8KLWk7LxCnfZUetEM8ThnsSoGH38/nyAwFguJp8FjvlHtcWZuU4hPva0rHfr0UhOOJ/F6vS62FW7KzkmRll2HEc7oUq4fyi5T70Vl7YVIfsPHUCdHesf9Lk7WNVWO75JDkYbMI8TOW8JKVtLY9d6UJRITO8oKo0xS+o99Yy04iniGHAaGj88kEWgwv0OrHdY/nr76DOGNS59hXCGXzTKUvDl9iKpLSWYN1lxIeyywdNpTkhay74w2jFT6NS8qkjo5CxA1yfSYwp6AJIZNKIeEK5PJAW7ORgWgwp0VgzYpqovMrWxbu+DGZ6Lhie1RAqpzm8VUzKJOH3mCzWuTOLsN3VT/dv2eeYe9UjbR8YTBsLz7q60VN1sU51k+um1f8JxD5pPhbhSC8rRaB454tmh6YUWrJI3+GWY0qeWioj/tbkYITOkJaeuGt4JrJvHA+l0Gu7kY7XOaa05alMnRWVCXqFgLIwSY4uF59Ue5SU4QKuc/HamDxbr0x6csCetXGoP7Qn1Bk/J9DsynO/UD6iZ1Hyrz+jit0hDCwi/E9OjgKTbB3ZQKQ/0ZOvevfNHG0NK4Aj3Cp7NpRk07RT1i/S0EL93Ag8GRgKI9CfpajKyK6+Jj/PI1KO5/85VAwz2AwzP8FTBb075IxCXv6T9RVvWT2tUaqxDS92zrGUbWzUYk9mSs82pECH+fkqsDt93VW++4YsR/dHCYcQSYTO/KaBMDj9LSD/J/+z20Kq8XvZUAIHtm9hRPP3ItbuAu2Hm5lkPs92pd7kCxgRs0xOVBnZ13ccdA0aunrwv9SdqElJRC3g+oCu+nXyCgmXUs9yMjTMAIHfxZV+aPKcZeUBWt057Xo85Ks1Ir5gzEHCWqZEhrLZMuF11ziGtFQUds/EESajhagzcKsxamcSZxGth4UII+adPhQkUnx2WyN+4YWR+r3f8MnkyGFuR4zjzxJS8WsQYR5PTyRaD9ixa6Mh741nBHbzfjXHskGDq179xaRNrCIB1z1xRfWfjqw2pHc1zk9xlPpL8sQWAIuETZZhbnmL54rceXVNRvUiKrrqIkeogsl0XXb17ylNb0f4GA9Wd44vffEG8FSZGHEL2fbaTGRcSiCeA8PmA/f6Hz8HCS76fXUHwgwkzSwlI71ekZ7Fapmlk/KC+Hs8hUcw3N2LN5LhkVYyizYFl/uPeVP5lsoJHhhfWvvSWruCUW1ZcJOeuTbrDgywJ/qG07gZJplnTvLcYdNaH0KMYOYMGX+rB4NGPFmQsNaIwlWrfCezxre8zXBrsMT+edVLbLqN1BqB76JH4BvZTqUIMfGwPGEn+EnmTV86fPBaYbFL3DFEhjB45CewkXEAtJxk4/Ms2pPXnaRqdky0HOYdcUcE2zcXq4vaIvW2/v0nHFJH2XXe22ueDmq/18XGtELSq85j9X8q0tcNSSKJIX8FTuJF/Pf8j5PhqG2u+osvsLxYrvvfeVJL+4tkcXcr9JV7v0ERmj/X6fM3NC4j6dS1+9Umr2oPavqiAydTZPLMNRGY23LO9zAVDly7jD+70G5TPPLdhRIl4WxcYjLnM+SNcJ26FOrkrISUtPObIz5Zb3AG612krnpy15RMW+1cQjlnWFI6538qky9axd2oJmHIHP08KyP0ubGO+TQNOYuv2uh17yCIvR8VcStw7o1g0NM60sk+8Tq7YfIBJrtp53GkvzXH7OA0p8/n/u1satf/VJhtR1l8Wa6Gmaug7haSpaCaYQax6ta0mkutlb+eAOSG1aobM81D9A4iS1RRlzBBoVX6tU1S6WE2N9ORY6DfeLRC4l9Rvr5h95XDWB2mR1d4WFudpsgVYwiTwT31ljskD8ZyDOlm5DkGh9N/UB/0AI5Xvb8ZBmai2hQ4BWMqFwYnzxwB26YHSOv9WgY3JXnvoN+2R4rqGVh/LLDMtpFP+SpMGJNWvbIl5SOodbCczW2RKleksPoUeGEzrjtKHVdtZA+kfqO+rVx/iclCqwoopepvJpSTDjT+b9GWylGRF8EDbGlw6eUzmJM95Ovoz+kwLX3c2fTjFeYEsE7vUZm3mqdGJuKh2w9/QGSaqRHs99aScGOdDqkFcACoqdbBoQqqjamhH6Q9ng39JCg3lrGJwd50Qk9ovnqBTr8MME7Ps2wiVfygUmPoUBJJfJWX5Nda0nuncbFkA=="
    )
  );
}
const da = qw(),
  Ww = new Set(Hl(da)),
  Qw = new Set(Hl(da)),
  Kw = jw(da),
  Vw = Gw(da),
  Nd = 45,
  Cd = 95;
function Xm(t) {
  return Rw(t);
}
function Jw(t) {
  return t.filter((e) => e != 65039);
}
function Zm(t) {
  for (let e of t.split(".")) {
    let r = Xm(e);
    try {
      for (let n = r.lastIndexOf(Cd) - 1; n >= 0; n--)
        if (r[n] !== Cd) throw new Error("underscore only allowed at start");
      if (
        r.length >= 4 &&
        r.every((n) => n < 128) &&
        r[2] === Nd &&
        r[3] === Nd
      )
        throw new Error("invalid label extension");
    } catch (n) {
      throw new Error(`Invalid label "${e}": ${n.message}`);
    }
  }
  return t;
}
function $w(t) {
  return Zm(Yw(t, Jw));
}
function Yw(t, e) {
  let r = Xm(t).reverse(),
    n = [];
  for (; r.length; ) {
    let i = Zw(r);
    if (i) {
      n.push(...e(i));
      continue;
    }
    let o = r.pop();
    if (Ww.has(o)) {
      n.push(o);
      continue;
    }
    if (Qw.has(o)) continue;
    let s = Kw[o];
    if (s) {
      n.push(...s);
      continue;
    }
    throw new Error(`Disallowed codepoint: 0x${o.toString(16).toUpperCase()}`);
  }
  return Zm(Xw(String.fromCodePoint(...n)));
}
function Xw(t) {
  return t.normalize("NFC");
}
function Zw(t, e) {
  var r;
  let n = Vw,
    i,
    o,
    s = [],
    l = t.length;
  for (e && (e.length = 0); l; ) {
    let a = t[--l];
    if (
      ((n =
        (r = n.branches.find((f) => f.set.has(a))) === null || r === void 0
          ? void 0
          : r.node),
      !n)
    )
      break;
    if (n.save) o = a;
    else if (n.check && a === o) break;
    s.push(a),
      n.fe0f && (s.push(65039), l > 0 && t[l - 1] == 65039 && l--),
      n.valid &&
        ((i = s.slice()),
        n.valid == 2 && i.splice(1, 1),
        e && e.push(...t.slice(l).reverse()),
        (t.length = l));
  }
  return i;
}
const e2 = new B(Jm),
  ev = new Uint8Array(32);
ev.fill(0);
function Pd(t) {
  if (t.length === 0) throw new Error("invalid ENS name; empty component");
  return t;
}
function tv(t) {
  const e = Zr($w(t)),
    r = [];
  if (t.length === 0) return r;
  let n = 0;
  for (let i = 0; i < e.length; i++)
    e[i] === 46 && (r.push(Pd(e.slice(n, i))), (n = i + 1));
  if (n >= e.length) throw new Error("invalid ENS name; empty component");
  return r.push(Pd(e.slice(n))), r;
}
function sl(t) {
  typeof t != "string" &&
    e2.throwArgumentError("invalid ENS name; not a string", "name", t);
  let e = ev;
  const r = tv(t);
  for (; r.length; ) e = mt(ii([e, mt(r.pop())]));
  return ie(e);
}
function t2(t) {
  return (
    ie(
      ii(
        tv(t).map((e) => {
          if (e.length > 63)
            throw new Error(
              "invalid DNS encoded entry; length exceeds 63 bytes"
            );
          const r = new Uint8Array(e.length + 1);
          return r.set(e, 1), (r[0] = r.length - 1), r;
        })
      )
    ) + "00"
  );
}
const r2 = "rlp/5.7.0",
  Pr = new B(r2);
function Md(t) {
  const e = [];
  for (; t; ) e.unshift(t & 255), (t >>= 8);
  return e;
}
function Rd(t, e, r) {
  let n = 0;
  for (let i = 0; i < r; i++) n = n * 256 + t[e + i];
  return n;
}
function rv(t) {
  if (Array.isArray(t)) {
    let n = [];
    if (
      (t.forEach(function (o) {
        n = n.concat(rv(o));
      }),
      n.length <= 55)
    )
      return n.unshift(192 + n.length), n;
    const i = Md(n.length);
    return i.unshift(247 + i.length), i.concat(n);
  }
  Ic(t) || Pr.throwArgumentError("RLP object must be BytesLike", "object", t);
  const e = Array.prototype.slice.call(oe(t));
  if (e.length === 1 && e[0] <= 127) return e;
  if (e.length <= 55) return e.unshift(128 + e.length), e;
  const r = Md(e.length);
  return r.unshift(183 + r.length), r.concat(e);
}
function pa(t) {
  return ie(rv(t));
}
function Id(t, e, r, n) {
  const i = [];
  for (; r < e + 1 + n; ) {
    const o = nv(t, r);
    i.push(o.result),
      (r += o.consumed),
      r > e + 1 + n &&
        Pr.throwError("child data too short", B.errors.BUFFER_OVERRUN, {});
  }
  return { consumed: 1 + n, result: i };
}
function nv(t, e) {
  if (
    (t.length === 0 &&
      Pr.throwError("data too short", B.errors.BUFFER_OVERRUN, {}),
    t[e] >= 248)
  ) {
    const r = t[e] - 247;
    e + 1 + r > t.length &&
      Pr.throwError(
        "data short segment too short",
        B.errors.BUFFER_OVERRUN,
        {}
      );
    const n = Rd(t, e + 1, r);
    return (
      e + 1 + r + n > t.length &&
        Pr.throwError(
          "data long segment too short",
          B.errors.BUFFER_OVERRUN,
          {}
        ),
      Id(t, e, e + 1 + r, r + n)
    );
  } else if (t[e] >= 192) {
    const r = t[e] - 192;
    return (
      e + 1 + r > t.length &&
        Pr.throwError("data array too short", B.errors.BUFFER_OVERRUN, {}),
      Id(t, e, e + 1, r)
    );
  } else if (t[e] >= 184) {
    const r = t[e] - 183;
    e + 1 + r > t.length &&
      Pr.throwError("data array too short", B.errors.BUFFER_OVERRUN, {});
    const n = Rd(t, e + 1, r);
    e + 1 + r + n > t.length &&
      Pr.throwError("data array too short", B.errors.BUFFER_OVERRUN, {});
    const i = ie(t.slice(e + 1 + r, e + 1 + r + n));
    return { consumed: 1 + r + n, result: i };
  } else if (t[e] >= 128) {
    const r = t[e] - 128;
    e + 1 + r > t.length &&
      Pr.throwError("data too short", B.errors.BUFFER_OVERRUN, {});
    const n = ie(t.slice(e + 1, e + 1 + r));
    return { consumed: 1 + r, result: n };
  }
  return { consumed: 1, result: ie(t[e]) };
}
function Fc(t) {
  const e = oe(t),
    r = nv(e, 0);
  return (
    r.consumed !== e.length &&
      Pr.throwArgumentError("invalid rlp data", "data", t),
    r.result
  );
}
const n2 = "address/5.7.0",
  Bi = new B(n2);
function Td(t) {
  me(t, 20) || Bi.throwArgumentError("invalid address", "address", t),
    (t = t.toLowerCase());
  const e = t.substring(2).split(""),
    r = new Uint8Array(40);
  for (let i = 0; i < 40; i++) r[i] = e[i].charCodeAt(0);
  const n = oe(mt(r));
  for (let i = 0; i < 40; i += 2)
    n[i >> 1] >> 4 >= 8 && (e[i] = e[i].toUpperCase()),
      (n[i >> 1] & 15) >= 8 && (e[i + 1] = e[i + 1].toUpperCase());
  return "0x" + e.join("");
}
const i2 = 9007199254740991;
function o2(t) {
  return Math.log10 ? Math.log10(t) : Math.log(t) / Math.LN10;
}
const jc = {};
for (let t = 0; t < 10; t++) jc[String(t)] = String(t);
for (let t = 0; t < 26; t++) jc[String.fromCharCode(65 + t)] = String(10 + t);
const Od = Math.floor(o2(i2));
function s2(t) {
  (t = t.toUpperCase()), (t = t.substring(4) + t.substring(0, 2) + "00");
  let e = t
    .split("")
    .map((n) => jc[n])
    .join("");
  for (; e.length >= Od; ) {
    let n = e.substring(0, Od);
    e = (parseInt(n, 10) % 97) + e.substring(n.length);
  }
  let r = String(98 - (parseInt(e, 10) % 97));
  for (; r.length < 2; ) r = "0" + r;
  return r;
}
function br(t) {
  let e = null;
  if (
    (typeof t != "string" &&
      Bi.throwArgumentError("invalid address", "address", t),
    t.match(/^(0x)?[0-9a-fA-F]{40}$/))
  )
    t.substring(0, 2) !== "0x" && (t = "0x" + t),
      (e = Td(t)),
      t.match(/([A-F].*[a-f])|([a-f].*[A-F])/) &&
        e !== t &&
        Bi.throwArgumentError("bad address checksum", "address", t);
  else if (t.match(/^XE[0-9]{2}[0-9A-Za-z]{30,31}$/)) {
    for (
      t.substring(2, 4) !== s2(t) &&
        Bi.throwArgumentError("bad icap checksum", "address", t),
        e = uw(t.substring(4));
      e.length < 40;

    )
      e = "0" + e;
    e = Td("0x" + e);
  } else Bi.throwArgumentError("invalid address", "address", t);
  return e;
}
function l2(t) {
  let e = null;
  try {
    e = br(t.from);
  } catch {
    Bi.throwArgumentError("missing from address", "transaction", t);
  }
  const r = Zi(oe(Y.from(t.nonce).toHexString()));
  return br(Mt(mt(pa([e, r])), 12));
}
var a2 =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, r, n) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (s) {
            s(o);
          });
    }
    return new (r || (r = Promise))(function (o, s) {
      function l(h) {
        try {
          f(n.next(h));
        } catch (p) {
          s(p);
        }
      }
      function a(h) {
        try {
          f(n.throw(h));
        } catch (p) {
          s(p);
        }
      }
      function f(h) {
        h.done ? o(h.value) : i(h.value).then(l, a);
      }
      f((n = n.apply(t, e || [])).next());
    });
  };
const Ze = new B(Jm),
  iv = new Uint8Array(32);
iv.fill(0);
const u2 = Y.from(-1),
  ov = Y.from(0),
  sv = Y.from(1),
  f2 = Y.from(
    "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff"
  );
function c2(t) {
  const e = oe(t),
    r = e.length % 32;
  return r ? Qt([e, iv.slice(r)]) : ie(e);
}
const h2 = ut(sv.toHexString(), 32),
  d2 = ut(ov.toHexString(), 32),
  Ld = {
    name: "string",
    version: "string",
    chainId: "uint256",
    verifyingContract: "address",
    salt: "bytes32",
  },
  hu = ["name", "version", "chainId", "verifyingContract", "salt"];
function Bd(t) {
  return function (e) {
    return (
      typeof e != "string" &&
        Ze.throwArgumentError(
          `invalid domain value for ${JSON.stringify(t)}`,
          `domain.${t}`,
          e
        ),
      e
    );
  };
}
const p2 = {
  name: Bd("name"),
  version: Bd("version"),
  chainId: function (t) {
    try {
      return Y.from(t).toString();
    } catch {}
    return Ze.throwArgumentError(
      'invalid domain value for "chainId"',
      "domain.chainId",
      t
    );
  },
  verifyingContract: function (t) {
    try {
      return br(t).toLowerCase();
    } catch {}
    return Ze.throwArgumentError(
      'invalid domain value "verifyingContract"',
      "domain.verifyingContract",
      t
    );
  },
  salt: function (t) {
    try {
      const e = oe(t);
      if (e.length !== 32) throw new Error("bad length");
      return ie(e);
    } catch {}
    return Ze.throwArgumentError(
      'invalid domain value "salt"',
      "domain.salt",
      t
    );
  },
};
function du(t) {
  {
    const e = t.match(/^(u?)int(\d*)$/);
    if (e) {
      const r = e[1] === "",
        n = parseInt(e[2] || "256");
      (n % 8 !== 0 || n > 256 || (e[2] && e[2] !== String(n))) &&
        Ze.throwArgumentError("invalid numeric width", "type", t);
      const i = f2.mask(r ? n - 1 : n),
        o = r ? i.add(sv).mul(u2) : ov;
      return function (s) {
        const l = Y.from(s);
        return (
          (l.lt(o) || l.gt(i)) &&
            Ze.throwArgumentError(`value out-of-bounds for ${t}`, "value", s),
          ut(l.toTwos(256).toHexString(), 32)
        );
      };
    }
  }
  {
    const e = t.match(/^bytes(\d+)$/);
    if (e) {
      const r = parseInt(e[1]);
      return (
        (r === 0 || r > 32 || e[1] !== String(r)) &&
          Ze.throwArgumentError("invalid bytes width", "type", t),
        function (n) {
          return (
            oe(n).length !== r &&
              Ze.throwArgumentError(`invalid length for ${t}`, "value", n),
            c2(n)
          );
        }
      );
    }
  }
  switch (t) {
    case "address":
      return function (e) {
        return ut(br(e), 32);
      };
    case "bool":
      return function (e) {
        return e ? h2 : d2;
      };
    case "bytes":
      return function (e) {
        return mt(e);
      };
    case "string":
      return function (e) {
        return Vm(e);
      };
  }
  return null;
}
function Dd(t, e) {
  return `${t}(${e.map(({ name: r, type: n }) => n + " " + r).join(",")})`;
}
class Ht {
  constructor(e) {
    ce(this, "types", Object.freeze(di(e))),
      ce(this, "_encoderCache", {}),
      ce(this, "_types", {});
    const r = {},
      n = {},
      i = {};
    Object.keys(e).forEach((l) => {
      (r[l] = {}), (n[l] = []), (i[l] = {});
    });
    for (const l in e) {
      const a = {};
      e[l].forEach((f) => {
        a[f.name] &&
          Ze.throwArgumentError(
            `duplicate variable name ${JSON.stringify(
              f.name
            )} in ${JSON.stringify(l)}`,
            "types",
            e
          ),
          (a[f.name] = !0);
        const h = f.type.match(/^([^\x5b]*)(\x5b|$)/)[1];
        h === l &&
          Ze.throwArgumentError(
            `circular type reference to ${JSON.stringify(h)}`,
            "types",
            e
          ),
          !du(h) &&
            (n[h] ||
              Ze.throwArgumentError(
                `unknown type ${JSON.stringify(h)}`,
                "types",
                e
              ),
            n[h].push(l),
            (r[l][h] = !0));
      });
    }
    const o = Object.keys(n).filter((l) => n[l].length === 0);
    o.length === 0
      ? Ze.throwArgumentError("missing primary type", "types", e)
      : o.length > 1 &&
        Ze.throwArgumentError(
          `ambiguous primary types or unused types: ${o
            .map((l) => JSON.stringify(l))
            .join(", ")}`,
          "types",
          e
        ),
      ce(this, "primaryType", o[0]);
    function s(l, a) {
      a[l] &&
        Ze.throwArgumentError(
          `circular type reference to ${JSON.stringify(l)}`,
          "types",
          e
        ),
        (a[l] = !0),
        Object.keys(r[l]).forEach((f) => {
          n[f] &&
            (s(f, a),
            Object.keys(a).forEach((h) => {
              i[h][f] = !0;
            }));
        }),
        delete a[l];
    }
    s(this.primaryType, {});
    for (const l in i) {
      const a = Object.keys(i[l]);
      a.sort(),
        (this._types[l] = Dd(l, e[l]) + a.map((f) => Dd(f, e[f])).join(""));
    }
  }
  getEncoder(e) {
    let r = this._encoderCache[e];
    return r || (r = this._encoderCache[e] = this._getEncoder(e)), r;
  }
  _getEncoder(e) {
    {
      const i = du(e);
      if (i) return i;
    }
    const r = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (r) {
      const i = r[1],
        o = this.getEncoder(i),
        s = parseInt(r[3]);
      return (l) => {
        s >= 0 &&
          l.length !== s &&
          Ze.throwArgumentError(
            "array length mismatch; expected length ${ arrayLength }",
            "value",
            l
          );
        let a = l.map(o);
        return this._types[i] && (a = a.map(mt)), mt(Qt(a));
      };
    }
    const n = this.types[e];
    if (n) {
      const i = Vm(this._types[e]);
      return (o) => {
        const s = n.map(({ name: l, type: a }) => {
          const f = this.getEncoder(a)(o[l]);
          return this._types[a] ? mt(f) : f;
        });
        return s.unshift(i), Qt(s);
      };
    }
    return Ze.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  encodeType(e) {
    const r = this._types[e];
    return (
      r ||
        Ze.throwArgumentError(`unknown type: ${JSON.stringify(e)}`, "name", e),
      r
    );
  }
  encodeData(e, r) {
    return this.getEncoder(e)(r);
  }
  hashStruct(e, r) {
    return mt(this.encodeData(e, r));
  }
  encode(e) {
    return this.encodeData(this.primaryType, e);
  }
  hash(e) {
    return this.hashStruct(this.primaryType, e);
  }
  _visit(e, r, n) {
    if (du(e)) return n(e, r);
    const i = e.match(/^(.*)(\x5b(\d*)\x5d)$/);
    if (i) {
      const s = i[1],
        l = parseInt(i[3]);
      return (
        l >= 0 &&
          r.length !== l &&
          Ze.throwArgumentError(
            "array length mismatch; expected length ${ arrayLength }",
            "value",
            r
          ),
        r.map((a) => this._visit(s, a, n))
      );
    }
    const o = this.types[e];
    return o
      ? o.reduce(
          (s, { name: l, type: a }) => ((s[l] = this._visit(a, r[l], n)), s),
          {}
        )
      : Ze.throwArgumentError(`unknown type: ${e}`, "type", e);
  }
  visit(e, r) {
    return this._visit(this.primaryType, e, r);
  }
  static from(e) {
    return new Ht(e);
  }
  static getPrimaryType(e) {
    return Ht.from(e).primaryType;
  }
  static hashStruct(e, r, n) {
    return Ht.from(r).hashStruct(e, n);
  }
  static hashDomain(e) {
    const r = [];
    for (const n in e) {
      const i = Ld[n];
      i ||
        Ze.throwArgumentError(
          `invalid typed-data domain key: ${JSON.stringify(n)}`,
          "domain",
          e
        ),
        r.push({ name: n, type: i });
    }
    return (
      r.sort((n, i) => hu.indexOf(n.name) - hu.indexOf(i.name)),
      Ht.hashStruct("EIP712Domain", { EIP712Domain: r }, e)
    );
  }
  static encode(e, r, n) {
    return Qt(["0x1901", Ht.hashDomain(e), Ht.from(r).hash(n)]);
  }
  static hash(e, r, n) {
    return mt(Ht.encode(e, r, n));
  }
  static resolveNames(e, r, n, i) {
    return a2(this, void 0, void 0, function* () {
      e = Dt(e);
      const o = {};
      e.verifyingContract &&
        !me(e.verifyingContract, 20) &&
        (o[e.verifyingContract] = "0x");
      const s = Ht.from(r);
      s.visit(n, (l, a) => (l === "address" && !me(a, 20) && (o[a] = "0x"), a));
      for (const l in o) o[l] = yield i(l);
      return (
        e.verifyingContract &&
          o[e.verifyingContract] &&
          (e.verifyingContract = o[e.verifyingContract]),
        (n = s.visit(n, (l, a) => (l === "address" && o[a] ? o[a] : a))),
        { domain: e, value: n }
      );
    });
  }
  static getPayload(e, r, n) {
    Ht.hashDomain(e);
    const i = {},
      o = [];
    hu.forEach((a) => {
      const f = e[a];
      f != null && ((i[a] = p2[a](f)), o.push({ name: a, type: Ld[a] }));
    });
    const s = Ht.from(r),
      l = Dt(r);
    return (
      l.EIP712Domain
        ? Ze.throwArgumentError(
            "types must not contain EIP712Domain type",
            "types.EIP712Domain",
            r
          )
        : (l.EIP712Domain = o),
      s.encode(n),
      {
        types: l,
        domain: i,
        primaryType: s.primaryType,
        message: s.visit(n, (a, f) => {
          if (a.match(/^bytes(\d*)/)) return ie(oe(f));
          if (a.match(/^u?int/)) return Y.from(f).toString();
          switch (a) {
            case "address":
              return f.toLowerCase();
            case "bool":
              return !!f;
            case "string":
              return (
                typeof f != "string" &&
                  Ze.throwArgumentError("invalid string", "value", f),
                f
              );
          }
          return Ze.throwArgumentError("unsupported type", "type", a);
        }),
      }
    );
  }
}
var lv = {},
  fe = {},
  xs = av;
function av(t, e) {
  if (!t) throw new Error(e || "Assertion failed");
}
av.equal = function (e, r, n) {
  if (e != r) throw new Error(n || "Assertion failed: " + e + " != " + r);
};
var Nf = { exports: {} };
typeof Object.create == "function"
  ? (Nf.exports = function (e, r) {
      r &&
        ((e.super_ = r),
        (e.prototype = Object.create(r.prototype, {
          constructor: {
            value: e,
            enumerable: !1,
            writable: !0,
            configurable: !0,
          },
        })));
    })
  : (Nf.exports = function (e, r) {
      if (r) {
        e.super_ = r;
        var n = function () {};
        (n.prototype = r.prototype),
          (e.prototype = new n()),
          (e.prototype.constructor = e);
      }
    });
var m2 = Nf.exports,
  v2 = xs,
  g2 = m2;
fe.inherits = g2;
function y2(t, e) {
  return (t.charCodeAt(e) & 64512) !== 55296 || e < 0 || e + 1 >= t.length
    ? !1
    : (t.charCodeAt(e + 1) & 64512) === 56320;
}
function x2(t, e) {
  if (Array.isArray(t)) return t.slice();
  if (!t) return [];
  var r = [];
  if (typeof t == "string")
    if (e) {
      if (e === "hex")
        for (
          t = t.replace(/[^a-z0-9]+/gi, ""),
            t.length % 2 !== 0 && (t = "0" + t),
            i = 0;
          i < t.length;
          i += 2
        )
          r.push(parseInt(t[i] + t[i + 1], 16));
    } else
      for (var n = 0, i = 0; i < t.length; i++) {
        var o = t.charCodeAt(i);
        o < 128
          ? (r[n++] = o)
          : o < 2048
          ? ((r[n++] = (o >> 6) | 192), (r[n++] = (o & 63) | 128))
          : y2(t, i)
          ? ((o = 65536 + ((o & 1023) << 10) + (t.charCodeAt(++i) & 1023)),
            (r[n++] = (o >> 18) | 240),
            (r[n++] = ((o >> 12) & 63) | 128),
            (r[n++] = ((o >> 6) & 63) | 128),
            (r[n++] = (o & 63) | 128))
          : ((r[n++] = (o >> 12) | 224),
            (r[n++] = ((o >> 6) & 63) | 128),
            (r[n++] = (o & 63) | 128));
      }
  else for (i = 0; i < t.length; i++) r[i] = t[i] | 0;
  return r;
}
fe.toArray = x2;
function w2(t) {
  for (var e = "", r = 0; r < t.length; r++) e += fv(t[r].toString(16));
  return e;
}
fe.toHex = w2;
function uv(t) {
  var e =
    (t >>> 24) |
    ((t >>> 8) & 65280) |
    ((t << 8) & 16711680) |
    ((t & 255) << 24);
  return e >>> 0;
}
fe.htonl = uv;
function A2(t, e) {
  for (var r = "", n = 0; n < t.length; n++) {
    var i = t[n];
    e === "little" && (i = uv(i)), (r += cv(i.toString(16)));
  }
  return r;
}
fe.toHex32 = A2;
function fv(t) {
  return t.length === 1 ? "0" + t : t;
}
fe.zero2 = fv;
function cv(t) {
  return t.length === 7
    ? "0" + t
    : t.length === 6
    ? "00" + t
    : t.length === 5
    ? "000" + t
    : t.length === 4
    ? "0000" + t
    : t.length === 3
    ? "00000" + t
    : t.length === 2
    ? "000000" + t
    : t.length === 1
    ? "0000000" + t
    : t;
}
fe.zero8 = cv;
function E2(t, e, r, n) {
  var i = r - e;
  v2(i % 4 === 0);
  for (var o = new Array(i / 4), s = 0, l = e; s < o.length; s++, l += 4) {
    var a;
    n === "big"
      ? (a = (t[l] << 24) | (t[l + 1] << 16) | (t[l + 2] << 8) | t[l + 3])
      : (a = (t[l + 3] << 24) | (t[l + 2] << 16) | (t[l + 1] << 8) | t[l]),
      (o[s] = a >>> 0);
  }
  return o;
}
fe.join32 = E2;
function b2(t, e) {
  for (
    var r = new Array(t.length * 4), n = 0, i = 0;
    n < t.length;
    n++, i += 4
  ) {
    var o = t[n];
    e === "big"
      ? ((r[i] = o >>> 24),
        (r[i + 1] = (o >>> 16) & 255),
        (r[i + 2] = (o >>> 8) & 255),
        (r[i + 3] = o & 255))
      : ((r[i + 3] = o >>> 24),
        (r[i + 2] = (o >>> 16) & 255),
        (r[i + 1] = (o >>> 8) & 255),
        (r[i] = o & 255));
  }
  return r;
}
fe.split32 = b2;
function _2(t, e) {
  return (t >>> e) | (t << (32 - e));
}
fe.rotr32 = _2;
function k2(t, e) {
  return (t << e) | (t >>> (32 - e));
}
fe.rotl32 = k2;
function S2(t, e) {
  return (t + e) >>> 0;
}
fe.sum32 = S2;
function N2(t, e, r) {
  return (t + e + r) >>> 0;
}
fe.sum32_3 = N2;
function C2(t, e, r, n) {
  return (t + e + r + n) >>> 0;
}
fe.sum32_4 = C2;
function P2(t, e, r, n, i) {
  return (t + e + r + n + i) >>> 0;
}
fe.sum32_5 = P2;
function M2(t, e, r, n) {
  var i = t[e],
    o = t[e + 1],
    s = (n + o) >>> 0,
    l = (s < n ? 1 : 0) + r + i;
  (t[e] = l >>> 0), (t[e + 1] = s);
}
fe.sum64 = M2;
function R2(t, e, r, n) {
  var i = (e + n) >>> 0,
    o = (i < e ? 1 : 0) + t + r;
  return o >>> 0;
}
fe.sum64_hi = R2;
function I2(t, e, r, n) {
  var i = e + n;
  return i >>> 0;
}
fe.sum64_lo = I2;
function T2(t, e, r, n, i, o, s, l) {
  var a = 0,
    f = e;
  (f = (f + n) >>> 0),
    (a += f < e ? 1 : 0),
    (f = (f + o) >>> 0),
    (a += f < o ? 1 : 0),
    (f = (f + l) >>> 0),
    (a += f < l ? 1 : 0);
  var h = t + r + i + s + a;
  return h >>> 0;
}
fe.sum64_4_hi = T2;
function O2(t, e, r, n, i, o, s, l) {
  var a = e + n + o + l;
  return a >>> 0;
}
fe.sum64_4_lo = O2;
function L2(t, e, r, n, i, o, s, l, a, f) {
  var h = 0,
    p = e;
  (p = (p + n) >>> 0),
    (h += p < e ? 1 : 0),
    (p = (p + o) >>> 0),
    (h += p < o ? 1 : 0),
    (p = (p + l) >>> 0),
    (h += p < l ? 1 : 0),
    (p = (p + f) >>> 0),
    (h += p < f ? 1 : 0);
  var y = t + r + i + s + a + h;
  return y >>> 0;
}
fe.sum64_5_hi = L2;
function B2(t, e, r, n, i, o, s, l, a, f) {
  var h = e + n + o + l + f;
  return h >>> 0;
}
fe.sum64_5_lo = B2;
function D2(t, e, r) {
  var n = (e << (32 - r)) | (t >>> r);
  return n >>> 0;
}
fe.rotr64_hi = D2;
function F2(t, e, r) {
  var n = (t << (32 - r)) | (e >>> r);
  return n >>> 0;
}
fe.rotr64_lo = F2;
function j2(t, e, r) {
  return t >>> r;
}
fe.shr64_hi = j2;
function U2(t, e, r) {
  var n = (t << (32 - r)) | (e >>> r);
  return n >>> 0;
}
fe.shr64_lo = U2;
var lo = {},
  Fd = fe,
  z2 = xs;
function ma() {
  (this.pending = null),
    (this.pendingTotal = 0),
    (this.blockSize = this.constructor.blockSize),
    (this.outSize = this.constructor.outSize),
    (this.hmacStrength = this.constructor.hmacStrength),
    (this.padLength = this.constructor.padLength / 8),
    (this.endian = "big"),
    (this._delta8 = this.blockSize / 8),
    (this._delta32 = this.blockSize / 32);
}
lo.BlockHash = ma;
ma.prototype.update = function (e, r) {
  if (
    ((e = Fd.toArray(e, r)),
    this.pending ? (this.pending = this.pending.concat(e)) : (this.pending = e),
    (this.pendingTotal += e.length),
    this.pending.length >= this._delta8)
  ) {
    e = this.pending;
    var n = e.length % this._delta8;
    (this.pending = e.slice(e.length - n, e.length)),
      this.pending.length === 0 && (this.pending = null),
      (e = Fd.join32(e, 0, e.length - n, this.endian));
    for (var i = 0; i < e.length; i += this._delta32)
      this._update(e, i, i + this._delta32);
  }
  return this;
};
ma.prototype.digest = function (e) {
  return this.update(this._pad()), z2(this.pending === null), this._digest(e);
};
ma.prototype._pad = function () {
  var e = this.pendingTotal,
    r = this._delta8,
    n = r - ((e + this.padLength) % r),
    i = new Array(n + this.padLength);
  i[0] = 128;
  for (var o = 1; o < n; o++) i[o] = 0;
  if (((e <<= 3), this.endian === "big")) {
    for (var s = 8; s < this.padLength; s++) i[o++] = 0;
    (i[o++] = 0),
      (i[o++] = 0),
      (i[o++] = 0),
      (i[o++] = 0),
      (i[o++] = (e >>> 24) & 255),
      (i[o++] = (e >>> 16) & 255),
      (i[o++] = (e >>> 8) & 255),
      (i[o++] = e & 255);
  } else
    for (
      i[o++] = e & 255,
        i[o++] = (e >>> 8) & 255,
        i[o++] = (e >>> 16) & 255,
        i[o++] = (e >>> 24) & 255,
        i[o++] = 0,
        i[o++] = 0,
        i[o++] = 0,
        i[o++] = 0,
        s = 8;
      s < this.padLength;
      s++
    )
      i[o++] = 0;
  return i;
};
var ao = {},
  Ur = {},
  H2 = fe,
  Or = H2.rotr32;
function G2(t, e, r, n) {
  if (t === 0) return hv(e, r, n);
  if (t === 1 || t === 3) return pv(e, r, n);
  if (t === 2) return dv(e, r, n);
}
Ur.ft_1 = G2;
function hv(t, e, r) {
  return (t & e) ^ (~t & r);
}
Ur.ch32 = hv;
function dv(t, e, r) {
  return (t & e) ^ (t & r) ^ (e & r);
}
Ur.maj32 = dv;
function pv(t, e, r) {
  return t ^ e ^ r;
}
Ur.p32 = pv;
function q2(t) {
  return Or(t, 2) ^ Or(t, 13) ^ Or(t, 22);
}
Ur.s0_256 = q2;
function W2(t) {
  return Or(t, 6) ^ Or(t, 11) ^ Or(t, 25);
}
Ur.s1_256 = W2;
function Q2(t) {
  return Or(t, 7) ^ Or(t, 18) ^ (t >>> 3);
}
Ur.g0_256 = Q2;
function K2(t) {
  return Or(t, 17) ^ Or(t, 19) ^ (t >>> 10);
}
Ur.g1_256 = K2;
var eo = fe,
  V2 = lo,
  J2 = Ur,
  pu = eo.rotl32,
  wo = eo.sum32,
  $2 = eo.sum32_5,
  Y2 = J2.ft_1,
  mv = V2.BlockHash,
  X2 = [1518500249, 1859775393, 2400959708, 3395469782];
function Dr() {
  if (!(this instanceof Dr)) return new Dr();
  mv.call(this),
    (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
    (this.W = new Array(80));
}
eo.inherits(Dr, mv);
var Z2 = Dr;
Dr.blockSize = 512;
Dr.outSize = 160;
Dr.hmacStrength = 80;
Dr.padLength = 64;
Dr.prototype._update = function (e, r) {
  for (var n = this.W, i = 0; i < 16; i++) n[i] = e[r + i];
  for (; i < n.length; i++)
    n[i] = pu(n[i - 3] ^ n[i - 8] ^ n[i - 14] ^ n[i - 16], 1);
  var o = this.h[0],
    s = this.h[1],
    l = this.h[2],
    a = this.h[3],
    f = this.h[4];
  for (i = 0; i < n.length; i++) {
    var h = ~~(i / 20),
      p = $2(pu(o, 5), Y2(h, s, l, a), f, n[i], X2[h]);
    (f = a), (a = l), (l = pu(s, 30)), (s = o), (o = p);
  }
  (this.h[0] = wo(this.h[0], o)),
    (this.h[1] = wo(this.h[1], s)),
    (this.h[2] = wo(this.h[2], l)),
    (this.h[3] = wo(this.h[3], a)),
    (this.h[4] = wo(this.h[4], f));
};
Dr.prototype._digest = function (e) {
  return e === "hex" ? eo.toHex32(this.h, "big") : eo.split32(this.h, "big");
};
var to = fe,
  eA = lo,
  uo = Ur,
  tA = xs,
  fr = to.sum32,
  rA = to.sum32_4,
  nA = to.sum32_5,
  iA = uo.ch32,
  oA = uo.maj32,
  sA = uo.s0_256,
  lA = uo.s1_256,
  aA = uo.g0_256,
  uA = uo.g1_256,
  vv = eA.BlockHash,
  fA = [
    1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993,
    2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987,
    1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774,
    264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986,
    2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711,
    113926993, 338241895, 666307205, 773529912, 1294757372, 1396182291,
    1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411,
    3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344,
    430227734, 506948616, 659060556, 883997877, 958139571, 1322822218,
    1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424,
    2428436474, 2756734187, 3204031479, 3329325298,
  ];
function Fr() {
  if (!(this instanceof Fr)) return new Fr();
  vv.call(this),
    (this.h = [
      1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924,
      528734635, 1541459225,
    ]),
    (this.k = fA),
    (this.W = new Array(64));
}
to.inherits(Fr, vv);
var gv = Fr;
Fr.blockSize = 512;
Fr.outSize = 256;
Fr.hmacStrength = 192;
Fr.padLength = 64;
Fr.prototype._update = function (e, r) {
  for (var n = this.W, i = 0; i < 16; i++) n[i] = e[r + i];
  for (; i < n.length; i++)
    n[i] = rA(uA(n[i - 2]), n[i - 7], aA(n[i - 15]), n[i - 16]);
  var o = this.h[0],
    s = this.h[1],
    l = this.h[2],
    a = this.h[3],
    f = this.h[4],
    h = this.h[5],
    p = this.h[6],
    y = this.h[7];
  for (tA(this.k.length === n.length), i = 0; i < n.length; i++) {
    var S = nA(y, lA(f), iA(f, h, p), this.k[i], n[i]),
      P = fr(sA(o), oA(o, s, l));
    (y = p),
      (p = h),
      (h = f),
      (f = fr(a, S)),
      (a = l),
      (l = s),
      (s = o),
      (o = fr(S, P));
  }
  (this.h[0] = fr(this.h[0], o)),
    (this.h[1] = fr(this.h[1], s)),
    (this.h[2] = fr(this.h[2], l)),
    (this.h[3] = fr(this.h[3], a)),
    (this.h[4] = fr(this.h[4], f)),
    (this.h[5] = fr(this.h[5], h)),
    (this.h[6] = fr(this.h[6], p)),
    (this.h[7] = fr(this.h[7], y));
};
Fr.prototype._digest = function (e) {
  return e === "hex" ? to.toHex32(this.h, "big") : to.split32(this.h, "big");
};
var Cf = fe,
  yv = gv;
function en() {
  if (!(this instanceof en)) return new en();
  yv.call(this),
    (this.h = [
      3238371032, 914150663, 812702999, 4144912697, 4290775857, 1750603025,
      1694076839, 3204075428,
    ]);
}
Cf.inherits(en, yv);
var cA = en;
en.blockSize = 512;
en.outSize = 224;
en.hmacStrength = 192;
en.padLength = 64;
en.prototype._digest = function (e) {
  return e === "hex"
    ? Cf.toHex32(this.h.slice(0, 7), "big")
    : Cf.split32(this.h.slice(0, 7), "big");
};
var zt = fe,
  hA = lo,
  dA = xs,
  Lr = zt.rotr64_hi,
  Br = zt.rotr64_lo,
  xv = zt.shr64_hi,
  wv = zt.shr64_lo,
  cn = zt.sum64,
  mu = zt.sum64_hi,
  vu = zt.sum64_lo,
  pA = zt.sum64_4_hi,
  mA = zt.sum64_4_lo,
  vA = zt.sum64_5_hi,
  gA = zt.sum64_5_lo,
  Av = hA.BlockHash,
  yA = [
    1116352408, 3609767458, 1899447441, 602891725, 3049323471, 3964484399,
    3921009573, 2173295548, 961987163, 4081628472, 1508970993, 3053834265,
    2453635748, 2937671579, 2870763221, 3664609560, 3624381080, 2734883394,
    310598401, 1164996542, 607225278, 1323610764, 1426881987, 3590304994,
    1925078388, 4068182383, 2162078206, 991336113, 2614888103, 633803317,
    3248222580, 3479774868, 3835390401, 2666613458, 4022224774, 944711139,
    264347078, 2341262773, 604807628, 2007800933, 770255983, 1495990901,
    1249150122, 1856431235, 1555081692, 3175218132, 1996064986, 2198950837,
    2554220882, 3999719339, 2821834349, 766784016, 2952996808, 2566594879,
    3210313671, 3203337956, 3336571891, 1034457026, 3584528711, 2466948901,
    113926993, 3758326383, 338241895, 168717936, 666307205, 1188179964,
    773529912, 1546045734, 1294757372, 1522805485, 1396182291, 2643833823,
    1695183700, 2343527390, 1986661051, 1014477480, 2177026350, 1206759142,
    2456956037, 344077627, 2730485921, 1290863460, 2820302411, 3158454273,
    3259730800, 3505952657, 3345764771, 106217008, 3516065817, 3606008344,
    3600352804, 1432725776, 4094571909, 1467031594, 275423344, 851169720,
    430227734, 3100823752, 506948616, 1363258195, 659060556, 3750685593,
    883997877, 3785050280, 958139571, 3318307427, 1322822218, 3812723403,
    1537002063, 2003034995, 1747873779, 3602036899, 1955562222, 1575990012,
    2024104815, 1125592928, 2227730452, 2716904306, 2361852424, 442776044,
    2428436474, 593698344, 2756734187, 3733110249, 3204031479, 2999351573,
    3329325298, 3815920427, 3391569614, 3928383900, 3515267271, 566280711,
    3940187606, 3454069534, 4118630271, 4000239992, 116418474, 1914138554,
    174292421, 2731055270, 289380356, 3203993006, 460393269, 320620315,
    685471733, 587496836, 852142971, 1086792851, 1017036298, 365543100,
    1126000580, 2618297676, 1288033470, 3409855158, 1501505948, 4234509866,
    1607167915, 987167468, 1816402316, 1246189591,
  ];
function _r() {
  if (!(this instanceof _r)) return new _r();
  Av.call(this),
    (this.h = [
      1779033703, 4089235720, 3144134277, 2227873595, 1013904242, 4271175723,
      2773480762, 1595750129, 1359893119, 2917565137, 2600822924, 725511199,
      528734635, 4215389547, 1541459225, 327033209,
    ]),
    (this.k = yA),
    (this.W = new Array(160));
}
zt.inherits(_r, Av);
var Ev = _r;
_r.blockSize = 1024;
_r.outSize = 512;
_r.hmacStrength = 192;
_r.padLength = 128;
_r.prototype._prepareBlock = function (e, r) {
  for (var n = this.W, i = 0; i < 32; i++) n[i] = e[r + i];
  for (; i < n.length; i += 2) {
    var o = PA(n[i - 4], n[i - 3]),
      s = MA(n[i - 4], n[i - 3]),
      l = n[i - 14],
      a = n[i - 13],
      f = NA(n[i - 30], n[i - 29]),
      h = CA(n[i - 30], n[i - 29]),
      p = n[i - 32],
      y = n[i - 31];
    (n[i] = pA(o, s, l, a, f, h, p, y)),
      (n[i + 1] = mA(o, s, l, a, f, h, p, y));
  }
};
_r.prototype._update = function (e, r) {
  this._prepareBlock(e, r);
  var n = this.W,
    i = this.h[0],
    o = this.h[1],
    s = this.h[2],
    l = this.h[3],
    a = this.h[4],
    f = this.h[5],
    h = this.h[6],
    p = this.h[7],
    y = this.h[8],
    S = this.h[9],
    P = this.h[10],
    M = this.h[11],
    I = this.h[12],
    w = this.h[13],
    x = this.h[14],
    N = this.h[15];
  dA(this.k.length === n.length);
  for (var T = 0; T < n.length; T += 2) {
    var L = x,
      j = N,
      H = kA(y, S),
      G = SA(y, S),
      ee = xA(y, S, P, M, I),
      Z = wA(y, S, P, M, I, w),
      se = this.k[T],
      ht = this.k[T + 1],
      C = n[T],
      u = n[T + 1],
      d = vA(L, j, H, G, ee, Z, se, ht, C, u),
      v = gA(L, j, H, G, ee, Z, se, ht, C, u);
    (L = bA(i, o)),
      (j = _A(i, o)),
      (H = AA(i, o, s, l, a)),
      (G = EA(i, o, s, l, a, f));
    var E = mu(L, j, H, G),
      g = vu(L, j, H, G);
    (x = I),
      (N = w),
      (I = P),
      (w = M),
      (P = y),
      (M = S),
      (y = mu(h, p, d, v)),
      (S = vu(p, p, d, v)),
      (h = a),
      (p = f),
      (a = s),
      (f = l),
      (s = i),
      (l = o),
      (i = mu(d, v, E, g)),
      (o = vu(d, v, E, g));
  }
  cn(this.h, 0, i, o),
    cn(this.h, 2, s, l),
    cn(this.h, 4, a, f),
    cn(this.h, 6, h, p),
    cn(this.h, 8, y, S),
    cn(this.h, 10, P, M),
    cn(this.h, 12, I, w),
    cn(this.h, 14, x, N);
};
_r.prototype._digest = function (e) {
  return e === "hex" ? zt.toHex32(this.h, "big") : zt.split32(this.h, "big");
};
function xA(t, e, r, n, i) {
  var o = (t & r) ^ (~t & i);
  return o < 0 && (o += 4294967296), o;
}
function wA(t, e, r, n, i, o) {
  var s = (e & n) ^ (~e & o);
  return s < 0 && (s += 4294967296), s;
}
function AA(t, e, r, n, i) {
  var o = (t & r) ^ (t & i) ^ (r & i);
  return o < 0 && (o += 4294967296), o;
}
function EA(t, e, r, n, i, o) {
  var s = (e & n) ^ (e & o) ^ (n & o);
  return s < 0 && (s += 4294967296), s;
}
function bA(t, e) {
  var r = Lr(t, e, 28),
    n = Lr(e, t, 2),
    i = Lr(e, t, 7),
    o = r ^ n ^ i;
  return o < 0 && (o += 4294967296), o;
}
function _A(t, e) {
  var r = Br(t, e, 28),
    n = Br(e, t, 2),
    i = Br(e, t, 7),
    o = r ^ n ^ i;
  return o < 0 && (o += 4294967296), o;
}
function kA(t, e) {
  var r = Lr(t, e, 14),
    n = Lr(t, e, 18),
    i = Lr(e, t, 9),
    o = r ^ n ^ i;
  return o < 0 && (o += 4294967296), o;
}
function SA(t, e) {
  var r = Br(t, e, 14),
    n = Br(t, e, 18),
    i = Br(e, t, 9),
    o = r ^ n ^ i;
  return o < 0 && (o += 4294967296), o;
}
function NA(t, e) {
  var r = Lr(t, e, 1),
    n = Lr(t, e, 8),
    i = xv(t, e, 7),
    o = r ^ n ^ i;
  return o < 0 && (o += 4294967296), o;
}
function CA(t, e) {
  var r = Br(t, e, 1),
    n = Br(t, e, 8),
    i = wv(t, e, 7),
    o = r ^ n ^ i;
  return o < 0 && (o += 4294967296), o;
}
function PA(t, e) {
  var r = Lr(t, e, 19),
    n = Lr(e, t, 29),
    i = xv(t, e, 6),
    o = r ^ n ^ i;
  return o < 0 && (o += 4294967296), o;
}
function MA(t, e) {
  var r = Br(t, e, 19),
    n = Br(e, t, 29),
    i = wv(t, e, 6),
    o = r ^ n ^ i;
  return o < 0 && (o += 4294967296), o;
}
var Pf = fe,
  bv = Ev;
function tn() {
  if (!(this instanceof tn)) return new tn();
  bv.call(this),
    (this.h = [
      3418070365, 3238371032, 1654270250, 914150663, 2438529370, 812702999,
      355462360, 4144912697, 1731405415, 4290775857, 2394180231, 1750603025,
      3675008525, 1694076839, 1203062813, 3204075428,
    ]);
}
Pf.inherits(tn, bv);
var RA = tn;
tn.blockSize = 1024;
tn.outSize = 384;
tn.hmacStrength = 192;
tn.padLength = 128;
tn.prototype._digest = function (e) {
  return e === "hex"
    ? Pf.toHex32(this.h.slice(0, 12), "big")
    : Pf.split32(this.h.slice(0, 12), "big");
};
ao.sha1 = Z2;
ao.sha224 = cA;
ao.sha256 = gv;
ao.sha384 = RA;
ao.sha512 = Ev;
var _v = {},
  pi = fe,
  IA = lo,
  Hs = pi.rotl32,
  jd = pi.sum32,
  Ao = pi.sum32_3,
  Ud = pi.sum32_4,
  kv = IA.BlockHash;
function jr() {
  if (!(this instanceof jr)) return new jr();
  kv.call(this),
    (this.h = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]),
    (this.endian = "little");
}
pi.inherits(jr, kv);
_v.ripemd160 = jr;
jr.blockSize = 512;
jr.outSize = 160;
jr.hmacStrength = 192;
jr.padLength = 64;
jr.prototype._update = function (e, r) {
  for (
    var n = this.h[0],
      i = this.h[1],
      o = this.h[2],
      s = this.h[3],
      l = this.h[4],
      a = n,
      f = i,
      h = o,
      p = s,
      y = l,
      S = 0;
    S < 80;
    S++
  ) {
    var P = jd(Hs(Ud(n, zd(S, i, o, s), e[LA[S] + r], TA(S)), DA[S]), l);
    (n = l),
      (l = s),
      (s = Hs(o, 10)),
      (o = i),
      (i = P),
      (P = jd(Hs(Ud(a, zd(79 - S, f, h, p), e[BA[S] + r], OA(S)), FA[S]), y)),
      (a = y),
      (y = p),
      (p = Hs(h, 10)),
      (h = f),
      (f = P);
  }
  (P = Ao(this.h[1], o, p)),
    (this.h[1] = Ao(this.h[2], s, y)),
    (this.h[2] = Ao(this.h[3], l, a)),
    (this.h[3] = Ao(this.h[4], n, f)),
    (this.h[4] = Ao(this.h[0], i, h)),
    (this.h[0] = P);
};
jr.prototype._digest = function (e) {
  return e === "hex"
    ? pi.toHex32(this.h, "little")
    : pi.split32(this.h, "little");
};
function zd(t, e, r, n) {
  return t <= 15
    ? e ^ r ^ n
    : t <= 31
    ? (e & r) | (~e & n)
    : t <= 47
    ? (e | ~r) ^ n
    : t <= 63
    ? (e & n) | (r & ~n)
    : e ^ (r | ~n);
}
function TA(t) {
  return t <= 15
    ? 0
    : t <= 31
    ? 1518500249
    : t <= 47
    ? 1859775393
    : t <= 63
    ? 2400959708
    : 2840853838;
}
function OA(t) {
  return t <= 15
    ? 1352829926
    : t <= 31
    ? 1548603684
    : t <= 47
    ? 1836072691
    : t <= 63
    ? 2053994217
    : 0;
}
var LA = [
    0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 7, 4, 13, 1, 10, 6,
    15, 3, 12, 0, 9, 5, 2, 14, 11, 8, 3, 10, 14, 4, 9, 15, 8, 1, 2, 7, 0, 6, 13,
    11, 5, 12, 1, 9, 11, 10, 0, 8, 12, 4, 13, 3, 7, 15, 14, 5, 6, 2, 4, 0, 5, 9,
    7, 12, 2, 10, 14, 1, 3, 8, 11, 6, 15, 13,
  ],
  BA = [
    5, 14, 7, 0, 9, 2, 11, 4, 13, 6, 15, 8, 1, 10, 3, 12, 6, 11, 3, 7, 0, 13, 5,
    10, 14, 15, 8, 12, 4, 9, 1, 2, 15, 5, 1, 3, 7, 14, 6, 9, 11, 8, 12, 2, 10,
    0, 4, 13, 8, 6, 4, 1, 3, 11, 15, 0, 5, 12, 2, 13, 9, 7, 10, 14, 12, 15, 10,
    4, 1, 5, 8, 7, 6, 2, 13, 14, 0, 3, 9, 11,
  ],
  DA = [
    11, 14, 15, 12, 5, 8, 7, 9, 11, 13, 14, 15, 6, 7, 9, 8, 7, 6, 8, 13, 11, 9,
    7, 15, 7, 12, 15, 9, 11, 7, 13, 12, 11, 13, 6, 7, 14, 9, 13, 15, 14, 8, 13,
    6, 5, 12, 7, 5, 11, 12, 14, 15, 14, 15, 9, 8, 9, 14, 5, 6, 8, 6, 5, 12, 9,
    15, 5, 11, 6, 8, 13, 12, 5, 12, 13, 14, 11, 8, 5, 6,
  ],
  FA = [
    8, 9, 9, 11, 13, 15, 15, 5, 7, 7, 8, 11, 14, 14, 12, 6, 9, 13, 15, 7, 12, 8,
    9, 11, 7, 7, 12, 7, 6, 15, 13, 11, 9, 7, 15, 11, 8, 6, 6, 14, 12, 13, 5, 14,
    13, 13, 7, 5, 15, 5, 8, 11, 14, 14, 6, 14, 6, 9, 12, 9, 12, 5, 15, 8, 8, 5,
    12, 9, 12, 5, 14, 6, 8, 13, 6, 5, 15, 13, 11, 11,
  ],
  jA = fe,
  UA = xs;
function ro(t, e, r) {
  if (!(this instanceof ro)) return new ro(t, e, r);
  (this.Hash = t),
    (this.blockSize = t.blockSize / 8),
    (this.outSize = t.outSize / 8),
    (this.inner = null),
    (this.outer = null),
    this._init(jA.toArray(e, r));
}
var zA = ro;
ro.prototype._init = function (e) {
  e.length > this.blockSize && (e = new this.Hash().update(e).digest()),
    UA(e.length <= this.blockSize);
  for (var r = e.length; r < this.blockSize; r++) e.push(0);
  for (r = 0; r < e.length; r++) e[r] ^= 54;
  for (this.inner = new this.Hash().update(e), r = 0; r < e.length; r++)
    e[r] ^= 106;
  this.outer = new this.Hash().update(e);
};
ro.prototype.update = function (e, r) {
  return this.inner.update(e, r), this;
};
ro.prototype.digest = function (e) {
  return this.outer.update(this.inner.digest()), this.outer.digest(e);
};
(function (t) {
  var e = t;
  (e.utils = fe),
    (e.common = lo),
    (e.sha = ao),
    (e.ripemd = _v),
    (e.hmac = zA),
    (e.sha1 = e.sha.sha1),
    (e.sha256 = e.sha.sha256),
    (e.sha224 = e.sha.sha224),
    (e.sha384 = e.sha.sha384),
    (e.sha512 = e.sha.sha512),
    (e.ripemd160 = e.ripemd.ripemd160);
})(lv);
const Cr = cs(lv);
function Hd(t) {
  return "0x" + Cr.sha256().update(oe(t)).digest("hex");
}
const HA = "web/5.7.1";
var GA =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, r, n) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (s) {
            s(o);
          });
    }
    return new (r || (r = Promise))(function (o, s) {
      function l(h) {
        try {
          f(n.next(h));
        } catch (p) {
          s(p);
        }
      }
      function a(h) {
        try {
          f(n.throw(h));
        } catch (p) {
          s(p);
        }
      }
      function f(h) {
        h.done ? o(h.value) : i(h.value).then(l, a);
      }
      f((n = n.apply(t, e || [])).next());
    });
  };
function qA(t, e) {
  return GA(this, void 0, void 0, function* () {
    e == null && (e = {});
    const r = {
      method: e.method || "GET",
      headers: e.headers || {},
      body: e.body || void 0,
    };
    if (
      (e.skipFetchSetup !== !0 &&
        ((r.mode = "cors"),
        (r.cache = "no-cache"),
        (r.credentials = "same-origin"),
        (r.redirect = "follow"),
        (r.referrer = "client")),
      e.fetchOptions != null)
    ) {
      const s = e.fetchOptions;
      s.mode && (r.mode = s.mode),
        s.cache && (r.cache = s.cache),
        s.credentials && (r.credentials = s.credentials),
        s.redirect && (r.redirect = s.redirect),
        s.referrer && (r.referrer = s.referrer);
    }
    const n = yield fetch(t, r),
      i = yield n.arrayBuffer(),
      o = {};
    return (
      n.headers.forEach
        ? n.headers.forEach((s, l) => {
            o[l.toLowerCase()] = s;
          })
        : n.headers.keys().forEach((s) => {
            o[s.toLowerCase()] = n.headers.get(s);
          }),
      {
        headers: o,
        statusCode: n.status,
        statusMessage: n.statusText,
        body: oe(new Uint8Array(i)),
      }
    );
  });
}
var WA =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, r, n) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (s) {
            s(o);
          });
    }
    return new (r || (r = Promise))(function (o, s) {
      function l(h) {
        try {
          f(n.next(h));
        } catch (p) {
          s(p);
        }
      }
      function a(h) {
        try {
          f(n.throw(h));
        } catch (p) {
          s(p);
        }
      }
      function f(h) {
        h.done ? o(h.value) : i(h.value).then(l, a);
      }
      f((n = n.apply(t, e || [])).next());
    });
  };
const dr = new B(HA);
function Gd(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
function hn(t, e) {
  if (t == null) return null;
  if (typeof t == "string") return t;
  if (Ic(t)) {
    if (
      e &&
      (e.split("/")[0] === "text" ||
        e.split(";")[0].trim() === "application/json")
    )
      try {
        return ha(t);
      } catch {}
    return ie(t);
  }
  return t;
}
function QA(t) {
  return Zr(
    t.replace(/%([0-9a-f][0-9a-f])/gi, (e, r) =>
      String.fromCharCode(parseInt(r, 16))
    )
  );
}
function KA(t, e, r) {
  const n =
    typeof t == "object" && t.throttleLimit != null ? t.throttleLimit : 12;
  dr.assertArgument(
    n > 0 && n % 1 === 0,
    "invalid connection throttle limit",
    "connection.throttleLimit",
    n
  );
  const i = typeof t == "object" ? t.throttleCallback : null,
    o =
      typeof t == "object" && typeof t.throttleSlotInterval == "number"
        ? t.throttleSlotInterval
        : 100;
  dr.assertArgument(
    o > 0 && o % 1 === 0,
    "invalid connection throttle slot interval",
    "connection.throttleSlotInterval",
    o
  );
  const s = typeof t == "object" ? !!t.errorPassThrough : !1,
    l = {};
  let a = null;
  const f = { method: "GET" };
  let h = !1,
    p = 2 * 60 * 1e3;
  if (typeof t == "string") a = t;
  else if (typeof t == "object") {
    if (
      ((t == null || t.url == null) &&
        dr.throwArgumentError("missing URL", "connection.url", t),
      (a = t.url),
      typeof t.timeout == "number" && t.timeout > 0 && (p = t.timeout),
      t.headers)
    )
      for (const w in t.headers)
        (l[w.toLowerCase()] = { key: w, value: String(t.headers[w]) }),
          ["if-none-match", "if-modified-since"].indexOf(w.toLowerCase()) >=
            0 && (h = !0);
    if (((f.allowGzip = !!t.allowGzip), t.user != null && t.password != null)) {
      a.substring(0, 6) !== "https:" &&
        t.allowInsecureAuthentication !== !0 &&
        dr.throwError(
          "basic authentication requires a secure https url",
          B.errors.INVALID_ARGUMENT,
          { argument: "url", url: a, user: t.user, password: "[REDACTED]" }
        );
      const w = t.user + ":" + t.password;
      l.authorization = { key: "Authorization", value: "Basic " + Gm(Zr(w)) };
    }
    t.skipFetchSetup != null && (f.skipFetchSetup = !!t.skipFetchSetup),
      t.fetchOptions != null && (f.fetchOptions = Dt(t.fetchOptions));
  }
  const y = new RegExp("^data:([^;:]*)?(;base64)?,(.*)$", "i"),
    S = a ? a.match(y) : null;
  if (S)
    try {
      const w = {
        statusCode: 200,
        statusMessage: "OK",
        headers: { "content-type": S[1] || "text/plain" },
        body: S[2] ? Hm(S[3]) : QA(S[3]),
      };
      let x = w.body;
      return r && (x = r(w.body, w)), Promise.resolve(x);
    } catch (w) {
      dr.throwError("processing response error", B.errors.SERVER_ERROR, {
        body: hn(S[1], S[2]),
        error: w,
        requestBody: null,
        requestMethod: "GET",
        url: a,
      });
    }
  e &&
    ((f.method = "POST"),
    (f.body = e),
    l["content-type"] == null &&
      (l["content-type"] = {
        key: "Content-Type",
        value: "application/octet-stream",
      }),
    l["content-length"] == null &&
      (l["content-length"] = {
        key: "Content-Length",
        value: String(e.length),
      }));
  const P = {};
  Object.keys(l).forEach((w) => {
    const x = l[w];
    P[x.key] = x.value;
  }),
    (f.headers = P);
  const M = (function () {
      let w = null;
      return {
        promise: new Promise(function (T, L) {
          p &&
            (w = setTimeout(() => {
              w != null &&
                ((w = null),
                L(
                  dr.makeError("timeout", B.errors.TIMEOUT, {
                    requestBody: hn(f.body, P["content-type"]),
                    requestMethod: f.method,
                    timeout: p,
                    url: a,
                  })
                ));
            }, p));
        }),
        cancel: function () {
          w != null && (clearTimeout(w), (w = null));
        },
      };
    })(),
    I = (function () {
      return WA(this, void 0, void 0, function* () {
        for (let w = 0; w < n; w++) {
          let x = null;
          try {
            if (((x = yield qA(a, f)), w < n)) {
              if (x.statusCode === 301 || x.statusCode === 302) {
                const T = x.headers.location || "";
                if (f.method === "GET" && T.match(/^https:/)) {
                  a = x.headers.location;
                  continue;
                }
              } else if (x.statusCode === 429) {
                let T = !0;
                if ((i && (T = yield i(w, a)), T)) {
                  let L = 0;
                  const j = x.headers["retry-after"];
                  typeof j == "string" && j.match(/^[1-9][0-9]*$/)
                    ? (L = parseInt(j) * 1e3)
                    : (L =
                        o * parseInt(String(Math.random() * Math.pow(2, w)))),
                    yield Gd(L);
                  continue;
                }
              }
            }
          } catch (T) {
            (x = T.response),
              x == null &&
                (M.cancel(),
                dr.throwError("missing response", B.errors.SERVER_ERROR, {
                  requestBody: hn(f.body, P["content-type"]),
                  requestMethod: f.method,
                  serverError: T,
                  url: a,
                }));
          }
          let N = x.body;
          if (
            (h && x.statusCode === 304
              ? (N = null)
              : !s &&
                (x.statusCode < 200 || x.statusCode >= 300) &&
                (M.cancel(),
                dr.throwError("bad response", B.errors.SERVER_ERROR, {
                  status: x.statusCode,
                  headers: x.headers,
                  body: hn(N, x.headers ? x.headers["content-type"] : null),
                  requestBody: hn(f.body, P["content-type"]),
                  requestMethod: f.method,
                  url: a,
                })),
            r)
          )
            try {
              const T = yield r(N, x);
              return M.cancel(), T;
            } catch (T) {
              if (T.throttleRetry && w < n) {
                let L = !0;
                if ((i && (L = yield i(w, a)), L)) {
                  const j =
                    o * parseInt(String(Math.random() * Math.pow(2, w)));
                  yield Gd(j);
                  continue;
                }
              }
              M.cancel(),
                dr.throwError(
                  "processing response error",
                  B.errors.SERVER_ERROR,
                  {
                    body: hn(N, x.headers ? x.headers["content-type"] : null),
                    error: T,
                    requestBody: hn(f.body, P["content-type"]),
                    requestMethod: f.method,
                    url: a,
                  }
                );
            }
          return M.cancel(), N;
        }
        return dr.throwError("failed response", B.errors.SERVER_ERROR, {
          requestBody: hn(f.body, P["content-type"]),
          requestMethod: f.method,
          url: a,
        });
      });
    })();
  return Promise.race([M.promise, I]);
}
function Uc(t, e, r) {
  let n = (o, s) => {
      let l = null;
      if (o != null)
        try {
          l = JSON.parse(ha(o));
        } catch (a) {
          dr.throwError("invalid JSON", B.errors.SERVER_ERROR, {
            body: o,
            error: a,
          });
        }
      return r && (l = r(l, s)), l;
    },
    i = null;
  if (e != null) {
    i = Zr(e);
    const o = typeof t == "string" ? { url: t } : Dt(t);
    o.headers
      ? Object.keys(o.headers).filter((l) => l.toLowerCase() === "content-type")
          .length !== 0 ||
        ((o.headers = Dt(o.headers)),
        (o.headers["content-type"] = "application/json"))
      : (o.headers = { "content-type": "application/json" }),
      (t = o);
  }
  return KA(t, i, n);
}
function Mo(t, e) {
  return (
    e || (e = {}),
    (e = Dt(e)),
    e.floor == null && (e.floor = 0),
    e.ceiling == null && (e.ceiling = 1e4),
    e.interval == null && (e.interval = 250),
    new Promise(function (r, n) {
      let i = null,
        o = !1;
      const s = () => (o ? !1 : ((o = !0), i && clearTimeout(i), !0));
      e.timeout &&
        (i = setTimeout(() => {
          s() && n(new Error("timeout"));
        }, e.timeout));
      const l = e.retryLimit;
      let a = 0;
      function f() {
        return t().then(
          function (h) {
            if (h !== void 0) s() && r(h);
            else if (e.oncePoll) e.oncePoll.once("poll", f);
            else if (e.onceBlock) e.onceBlock.once("block", f);
            else if (!o) {
              if ((a++, a > l)) {
                s() && n(new Error("retry limit reached"));
                return;
              }
              let p =
                e.interval * parseInt(String(Math.random() * Math.pow(2, a)));
              p < e.floor && (p = e.floor),
                p > e.ceiling && (p = e.ceiling),
                setTimeout(f, p);
            }
            return null;
          },
          function (h) {
            s() && n(h);
          }
        );
      }
      f();
    })
  );
}
var Gl = "qpzry9x8gf2tvdw0s3jn54khce6mua7l",
  Mf = {};
for (var Gs = 0; Gs < Gl.length; Gs++) {
  var gu = Gl.charAt(Gs);
  if (Mf[gu] !== void 0) throw new TypeError(gu + " is ambiguous");
  Mf[gu] = Gs;
}
function Wi(t) {
  var e = t >> 25;
  return (
    ((t & 33554431) << 5) ^
    (-((e >> 0) & 1) & 996825010) ^
    (-((e >> 1) & 1) & 642813549) ^
    (-((e >> 2) & 1) & 513874426) ^
    (-((e >> 3) & 1) & 1027748829) ^
    (-((e >> 4) & 1) & 705979059)
  );
}
function Sv(t) {
  for (var e = 1, r = 0; r < t.length; ++r) {
    var n = t.charCodeAt(r);
    if (n < 33 || n > 126) return "Invalid prefix (" + t + ")";
    e = Wi(e) ^ (n >> 5);
  }
  for (e = Wi(e), r = 0; r < t.length; ++r) {
    var i = t.charCodeAt(r);
    e = Wi(e) ^ (i & 31);
  }
  return e;
}
function VA(t, e, r) {
  if (((r = r || 90), t.length + 7 + e.length > r))
    throw new TypeError("Exceeds length limit");
  t = t.toLowerCase();
  var n = Sv(t);
  if (typeof n == "string") throw new Error(n);
  for (var i = t + "1", o = 0; o < e.length; ++o) {
    var s = e[o];
    if (s >> 5) throw new Error("Non 5-bit word");
    (n = Wi(n) ^ s), (i += Gl.charAt(s));
  }
  for (o = 0; o < 6; ++o) n = Wi(n);
  for (n ^= 1, o = 0; o < 6; ++o) {
    var l = (n >> ((5 - o) * 5)) & 31;
    i += Gl.charAt(l);
  }
  return i;
}
function Nv(t, e) {
  if (((e = e || 90), t.length < 8)) return t + " too short";
  if (t.length > e) return "Exceeds length limit";
  var r = t.toLowerCase(),
    n = t.toUpperCase();
  if (t !== r && t !== n) return "Mixed-case string " + t;
  t = r;
  var i = t.lastIndexOf("1");
  if (i === -1) return "No separator character for " + t;
  if (i === 0) return "Missing prefix for " + t;
  var o = t.slice(0, i),
    s = t.slice(i + 1);
  if (s.length < 6) return "Data too short";
  var l = Sv(o);
  if (typeof l == "string") return l;
  for (var a = [], f = 0; f < s.length; ++f) {
    var h = s.charAt(f),
      p = Mf[h];
    if (p === void 0) return "Unknown character " + h;
    (l = Wi(l) ^ p), !(f + 6 >= s.length) && a.push(p);
  }
  return l !== 1 ? "Invalid checksum for " + t : { prefix: o, words: a };
}
function JA() {
  var t = Nv.apply(null, arguments);
  if (typeof t == "object") return t;
}
function $A(t) {
  var e = Nv.apply(null, arguments);
  if (typeof e == "object") return e;
  throw new Error(e);
}
function va(t, e, r, n) {
  for (var i = 0, o = 0, s = (1 << r) - 1, l = [], a = 0; a < t.length; ++a)
    for (i = (i << e) | t[a], o += e; o >= r; ) (o -= r), l.push((i >> o) & s);
  if (n) o > 0 && l.push((i << (r - o)) & s);
  else {
    if (o >= e) return "Excess padding";
    if ((i << (r - o)) & s) return "Non-zero padding";
  }
  return l;
}
function YA(t) {
  var e = va(t, 8, 5, !0);
  if (Array.isArray(e)) return e;
}
function XA(t) {
  var e = va(t, 8, 5, !0);
  if (Array.isArray(e)) return e;
  throw new Error(e);
}
function ZA(t) {
  var e = va(t, 5, 8, !1);
  if (Array.isArray(e)) return e;
}
function e3(t) {
  var e = va(t, 5, 8, !1);
  if (Array.isArray(e)) return e;
  throw new Error(e);
}
var t3 = {
  decodeUnsafe: JA,
  decode: $A,
  encode: VA,
  toWordsUnsafe: YA,
  toWords: XA,
  fromWordsUnsafe: ZA,
  fromWords: e3,
};
const qd = cs(t3),
  ga = "providers/5.7.2";
function fo(t, e, r) {
  return (
    (r = {
      path: e,
      exports: {},
      require: function (n, i) {
        return r3(n, i ?? r.path);
      },
    }),
    t(r, r.exports),
    r.exports
  );
}
function r3() {
  throw new Error(
    "Dynamic requires are not currently supported by @rollup/plugin-commonjs"
  );
}
var zc = Cv;
function Cv(t, e) {
  if (!t) throw new Error(e || "Assertion failed");
}
Cv.equal = function (e, r, n) {
  if (e != r) throw new Error(n || "Assertion failed: " + e + " != " + r);
};
var xr = fo(function (t, e) {
    var r = e;
    function n(s, l) {
      if (Array.isArray(s)) return s.slice();
      if (!s) return [];
      var a = [];
      if (typeof s != "string") {
        for (var f = 0; f < s.length; f++) a[f] = s[f] | 0;
        return a;
      }
      if (l === "hex") {
        (s = s.replace(/[^a-z0-9]+/gi, "")),
          s.length % 2 !== 0 && (s = "0" + s);
        for (var f = 0; f < s.length; f += 2)
          a.push(parseInt(s[f] + s[f + 1], 16));
      } else
        for (var f = 0; f < s.length; f++) {
          var h = s.charCodeAt(f),
            p = h >> 8,
            y = h & 255;
          p ? a.push(p, y) : a.push(y);
        }
      return a;
    }
    r.toArray = n;
    function i(s) {
      return s.length === 1 ? "0" + s : s;
    }
    r.zero2 = i;
    function o(s) {
      for (var l = "", a = 0; a < s.length; a++) l += i(s[a].toString(16));
      return l;
    }
    (r.toHex = o),
      (r.encode = function (l, a) {
        return a === "hex" ? o(l) : l;
      });
  }),
  Xt = fo(function (t, e) {
    var r = e;
    (r.assert = zc),
      (r.toArray = xr.toArray),
      (r.zero2 = xr.zero2),
      (r.toHex = xr.toHex),
      (r.encode = xr.encode);
    function n(a, f, h) {
      var p = new Array(Math.max(a.bitLength(), h) + 1);
      p.fill(0);
      for (var y = 1 << (f + 1), S = a.clone(), P = 0; P < p.length; P++) {
        var M,
          I = S.andln(y - 1);
        S.isOdd()
          ? (I > (y >> 1) - 1 ? (M = (y >> 1) - I) : (M = I), S.isubn(M))
          : (M = 0),
          (p[P] = M),
          S.iushrn(1);
      }
      return p;
    }
    r.getNAF = n;
    function i(a, f) {
      var h = [[], []];
      (a = a.clone()), (f = f.clone());
      for (var p = 0, y = 0, S; a.cmpn(-p) > 0 || f.cmpn(-y) > 0; ) {
        var P = (a.andln(3) + p) & 3,
          M = (f.andln(3) + y) & 3;
        P === 3 && (P = -1), M === 3 && (M = -1);
        var I;
        P & 1
          ? ((S = (a.andln(7) + p) & 7),
            (S === 3 || S === 5) && M === 2 ? (I = -P) : (I = P))
          : (I = 0),
          h[0].push(I);
        var w;
        M & 1
          ? ((S = (f.andln(7) + y) & 7),
            (S === 3 || S === 5) && P === 2 ? (w = -M) : (w = M))
          : (w = 0),
          h[1].push(w),
          2 * p === I + 1 && (p = 1 - p),
          2 * y === w + 1 && (y = 1 - y),
          a.iushrn(1),
          f.iushrn(1);
      }
      return h;
    }
    r.getJSF = i;
    function o(a, f, h) {
      var p = "_" + f;
      a.prototype[f] = function () {
        return this[p] !== void 0 ? this[p] : (this[p] = h.call(this));
      };
    }
    r.cachedProperty = o;
    function s(a) {
      return typeof a == "string" ? r.toArray(a, "hex") : a;
    }
    r.parseBytes = s;
    function l(a) {
      return new ne(a, "hex", "le");
    }
    r.intFromLE = l;
  }),
  ql = Xt.getNAF,
  n3 = Xt.getJSF,
  Wl = Xt.assert;
function Bn(t, e) {
  (this.type = t),
    (this.p = new ne(e.p, 16)),
    (this.red = e.prime ? ne.red(e.prime) : ne.mont(this.p)),
    (this.zero = new ne(0).toRed(this.red)),
    (this.one = new ne(1).toRed(this.red)),
    (this.two = new ne(2).toRed(this.red)),
    (this.n = e.n && new ne(e.n, 16)),
    (this.g = e.g && this.pointFromJSON(e.g, e.gRed)),
    (this._wnafT1 = new Array(4)),
    (this._wnafT2 = new Array(4)),
    (this._wnafT3 = new Array(4)),
    (this._wnafT4 = new Array(4)),
    (this._bitLength = this.n ? this.n.bitLength() : 0);
  var r = this.n && this.p.div(this.n);
  !r || r.cmpn(100) > 0
    ? (this.redN = null)
    : ((this._maxwellTrick = !0), (this.redN = this.n.toRed(this.red)));
}
var xi = Bn;
Bn.prototype.point = function () {
  throw new Error("Not implemented");
};
Bn.prototype.validate = function () {
  throw new Error("Not implemented");
};
Bn.prototype._fixedNafMul = function (e, r) {
  Wl(e.precomputed);
  var n = e._getDoubles(),
    i = ql(r, 1, this._bitLength),
    o = (1 << (n.step + 1)) - (n.step % 2 === 0 ? 2 : 1);
  o /= 3;
  var s = [],
    l,
    a;
  for (l = 0; l < i.length; l += n.step) {
    a = 0;
    for (var f = l + n.step - 1; f >= l; f--) a = (a << 1) + i[f];
    s.push(a);
  }
  for (
    var h = this.jpoint(null, null, null),
      p = this.jpoint(null, null, null),
      y = o;
    y > 0;
    y--
  ) {
    for (l = 0; l < s.length; l++)
      (a = s[l]),
        a === y
          ? (p = p.mixedAdd(n.points[l]))
          : a === -y && (p = p.mixedAdd(n.points[l].neg()));
    h = h.add(p);
  }
  return h.toP();
};
Bn.prototype._wnafMul = function (e, r) {
  var n = 4,
    i = e._getNAFPoints(n);
  n = i.wnd;
  for (
    var o = i.points,
      s = ql(r, n, this._bitLength),
      l = this.jpoint(null, null, null),
      a = s.length - 1;
    a >= 0;
    a--
  ) {
    for (var f = 0; a >= 0 && s[a] === 0; a--) f++;
    if ((a >= 0 && f++, (l = l.dblp(f)), a < 0)) break;
    var h = s[a];
    Wl(h !== 0),
      e.type === "affine"
        ? h > 0
          ? (l = l.mixedAdd(o[(h - 1) >> 1]))
          : (l = l.mixedAdd(o[(-h - 1) >> 1].neg()))
        : h > 0
        ? (l = l.add(o[(h - 1) >> 1]))
        : (l = l.add(o[(-h - 1) >> 1].neg()));
  }
  return e.type === "affine" ? l.toP() : l;
};
Bn.prototype._wnafMulAdd = function (e, r, n, i, o) {
  var s = this._wnafT1,
    l = this._wnafT2,
    a = this._wnafT3,
    f = 0,
    h,
    p,
    y;
  for (h = 0; h < i; h++) {
    y = r[h];
    var S = y._getNAFPoints(e);
    (s[h] = S.wnd), (l[h] = S.points);
  }
  for (h = i - 1; h >= 1; h -= 2) {
    var P = h - 1,
      M = h;
    if (s[P] !== 1 || s[M] !== 1) {
      (a[P] = ql(n[P], s[P], this._bitLength)),
        (a[M] = ql(n[M], s[M], this._bitLength)),
        (f = Math.max(a[P].length, f)),
        (f = Math.max(a[M].length, f));
      continue;
    }
    var I = [r[P], null, null, r[M]];
    r[P].y.cmp(r[M].y) === 0
      ? ((I[1] = r[P].add(r[M])), (I[2] = r[P].toJ().mixedAdd(r[M].neg())))
      : r[P].y.cmp(r[M].y.redNeg()) === 0
      ? ((I[1] = r[P].toJ().mixedAdd(r[M])), (I[2] = r[P].add(r[M].neg())))
      : ((I[1] = r[P].toJ().mixedAdd(r[M])),
        (I[2] = r[P].toJ().mixedAdd(r[M].neg())));
    var w = [-3, -1, -5, -7, 0, 7, 5, 1, 3],
      x = n3(n[P], n[M]);
    for (
      f = Math.max(x[0].length, f),
        a[P] = new Array(f),
        a[M] = new Array(f),
        p = 0;
      p < f;
      p++
    ) {
      var N = x[0][p] | 0,
        T = x[1][p] | 0;
      (a[P][p] = w[(N + 1) * 3 + (T + 1)]), (a[M][p] = 0), (l[P] = I);
    }
  }
  var L = this.jpoint(null, null, null),
    j = this._wnafT4;
  for (h = f; h >= 0; h--) {
    for (var H = 0; h >= 0; ) {
      var G = !0;
      for (p = 0; p < i; p++) (j[p] = a[p][h] | 0), j[p] !== 0 && (G = !1);
      if (!G) break;
      H++, h--;
    }
    if ((h >= 0 && H++, (L = L.dblp(H)), h < 0)) break;
    for (p = 0; p < i; p++) {
      var ee = j[p];
      ee !== 0 &&
        (ee > 0
          ? (y = l[p][(ee - 1) >> 1])
          : ee < 0 && (y = l[p][(-ee - 1) >> 1].neg()),
        y.type === "affine" ? (L = L.mixedAdd(y)) : (L = L.add(y)));
    }
  }
  for (h = 0; h < i; h++) l[h] = null;
  return o ? L : L.toP();
};
function lr(t, e) {
  (this.curve = t), (this.type = e), (this.precomputed = null);
}
Bn.BasePoint = lr;
lr.prototype.eq = function () {
  throw new Error("Not implemented");
};
lr.prototype.validate = function () {
  return this.curve.validate(this);
};
Bn.prototype.decodePoint = function (e, r) {
  e = Xt.toArray(e, r);
  var n = this.p.byteLength();
  if ((e[0] === 4 || e[0] === 6 || e[0] === 7) && e.length - 1 === 2 * n) {
    e[0] === 6
      ? Wl(e[e.length - 1] % 2 === 0)
      : e[0] === 7 && Wl(e[e.length - 1] % 2 === 1);
    var i = this.point(e.slice(1, 1 + n), e.slice(1 + n, 1 + 2 * n));
    return i;
  } else if ((e[0] === 2 || e[0] === 3) && e.length - 1 === n)
    return this.pointFromX(e.slice(1, 1 + n), e[0] === 3);
  throw new Error("Unknown point format");
};
lr.prototype.encodeCompressed = function (e) {
  return this.encode(e, !0);
};
lr.prototype._encode = function (e) {
  var r = this.curve.p.byteLength(),
    n = this.getX().toArray("be", r);
  return e
    ? [this.getY().isEven() ? 2 : 3].concat(n)
    : [4].concat(n, this.getY().toArray("be", r));
};
lr.prototype.encode = function (e, r) {
  return Xt.encode(this._encode(r), e);
};
lr.prototype.precompute = function (e) {
  if (this.precomputed) return this;
  var r = { doubles: null, naf: null, beta: null };
  return (
    (r.naf = this._getNAFPoints(8)),
    (r.doubles = this._getDoubles(4, e)),
    (r.beta = this._getBeta()),
    (this.precomputed = r),
    this
  );
};
lr.prototype._hasDoubles = function (e) {
  if (!this.precomputed) return !1;
  var r = this.precomputed.doubles;
  return r ? r.points.length >= Math.ceil((e.bitLength() + 1) / r.step) : !1;
};
lr.prototype._getDoubles = function (e, r) {
  if (this.precomputed && this.precomputed.doubles)
    return this.precomputed.doubles;
  for (var n = [this], i = this, o = 0; o < r; o += e) {
    for (var s = 0; s < e; s++) i = i.dbl();
    n.push(i);
  }
  return { step: e, points: n };
};
lr.prototype._getNAFPoints = function (e) {
  if (this.precomputed && this.precomputed.naf) return this.precomputed.naf;
  for (
    var r = [this], n = (1 << e) - 1, i = n === 1 ? null : this.dbl(), o = 1;
    o < n;
    o++
  )
    r[o] = r[o - 1].add(i);
  return { wnd: e, points: r };
};
lr.prototype._getBeta = function () {
  return null;
};
lr.prototype.dblp = function (e) {
  for (var r = this, n = 0; n < e; n++) r = r.dbl();
  return r;
};
var Hc = fo(function (t) {
    typeof Object.create == "function"
      ? (t.exports = function (r, n) {
          n &&
            ((r.super_ = n),
            (r.prototype = Object.create(n.prototype, {
              constructor: {
                value: r,
                enumerable: !1,
                writable: !0,
                configurable: !0,
              },
            })));
        })
      : (t.exports = function (r, n) {
          if (n) {
            r.super_ = n;
            var i = function () {};
            (i.prototype = n.prototype),
              (r.prototype = new i()),
              (r.prototype.constructor = r);
          }
        });
  }),
  i3 = Xt.assert;
function ar(t) {
  xi.call(this, "short", t),
    (this.a = new ne(t.a, 16).toRed(this.red)),
    (this.b = new ne(t.b, 16).toRed(this.red)),
    (this.tinv = this.two.redInvm()),
    (this.zeroA = this.a.fromRed().cmpn(0) === 0),
    (this.threeA = this.a.fromRed().sub(this.p).cmpn(-3) === 0),
    (this.endo = this._getEndomorphism(t)),
    (this._endoWnafT1 = new Array(4)),
    (this._endoWnafT2 = new Array(4));
}
Hc(ar, xi);
var o3 = ar;
ar.prototype._getEndomorphism = function (e) {
  if (!(!this.zeroA || !this.g || !this.n || this.p.modn(3) !== 1)) {
    var r, n;
    if (e.beta) r = new ne(e.beta, 16).toRed(this.red);
    else {
      var i = this._getEndoRoots(this.p);
      (r = i[0].cmp(i[1]) < 0 ? i[0] : i[1]), (r = r.toRed(this.red));
    }
    if (e.lambda) n = new ne(e.lambda, 16);
    else {
      var o = this._getEndoRoots(this.n);
      this.g.mul(o[0]).x.cmp(this.g.x.redMul(r)) === 0
        ? (n = o[0])
        : ((n = o[1]), i3(this.g.mul(n).x.cmp(this.g.x.redMul(r)) === 0));
    }
    var s;
    return (
      e.basis
        ? (s = e.basis.map(function (l) {
            return { a: new ne(l.a, 16), b: new ne(l.b, 16) };
          }))
        : (s = this._getEndoBasis(n)),
      { beta: r, lambda: n, basis: s }
    );
  }
};
ar.prototype._getEndoRoots = function (e) {
  var r = e === this.p ? this.red : ne.mont(e),
    n = new ne(2).toRed(r).redInvm(),
    i = n.redNeg(),
    o = new ne(3).toRed(r).redNeg().redSqrt().redMul(n),
    s = i.redAdd(o).fromRed(),
    l = i.redSub(o).fromRed();
  return [s, l];
};
ar.prototype._getEndoBasis = function (e) {
  for (
    var r = this.n.ushrn(Math.floor(this.n.bitLength() / 2)),
      n = e,
      i = this.n.clone(),
      o = new ne(1),
      s = new ne(0),
      l = new ne(0),
      a = new ne(1),
      f,
      h,
      p,
      y,
      S,
      P,
      M,
      I = 0,
      w,
      x;
    n.cmpn(0) !== 0;

  ) {
    var N = i.div(n);
    (w = i.sub(N.mul(n))), (x = l.sub(N.mul(o)));
    var T = a.sub(N.mul(s));
    if (!p && w.cmp(r) < 0) (f = M.neg()), (h = o), (p = w.neg()), (y = x);
    else if (p && ++I === 2) break;
    (M = w), (i = n), (n = w), (l = o), (o = x), (a = s), (s = T);
  }
  (S = w.neg()), (P = x);
  var L = p.sqr().add(y.sqr()),
    j = S.sqr().add(P.sqr());
  return (
    j.cmp(L) >= 0 && ((S = f), (P = h)),
    p.negative && ((p = p.neg()), (y = y.neg())),
    S.negative && ((S = S.neg()), (P = P.neg())),
    [
      { a: p, b: y },
      { a: S, b: P },
    ]
  );
};
ar.prototype._endoSplit = function (e) {
  var r = this.endo.basis,
    n = r[0],
    i = r[1],
    o = i.b.mul(e).divRound(this.n),
    s = n.b.neg().mul(e).divRound(this.n),
    l = o.mul(n.a),
    a = s.mul(i.a),
    f = o.mul(n.b),
    h = s.mul(i.b),
    p = e.sub(l).sub(a),
    y = f.add(h).neg();
  return { k1: p, k2: y };
};
ar.prototype.pointFromX = function (e, r) {
  (e = new ne(e, 16)), e.red || (e = e.toRed(this.red));
  var n = e.redSqr().redMul(e).redIAdd(e.redMul(this.a)).redIAdd(this.b),
    i = n.redSqrt();
  if (i.redSqr().redSub(n).cmp(this.zero) !== 0)
    throw new Error("invalid point");
  var o = i.fromRed().isOdd();
  return ((r && !o) || (!r && o)) && (i = i.redNeg()), this.point(e, i);
};
ar.prototype.validate = function (e) {
  if (e.inf) return !0;
  var r = e.x,
    n = e.y,
    i = this.a.redMul(r),
    o = r.redSqr().redMul(r).redIAdd(i).redIAdd(this.b);
  return n.redSqr().redISub(o).cmpn(0) === 0;
};
ar.prototype._endoWnafMulAdd = function (e, r, n) {
  for (
    var i = this._endoWnafT1, o = this._endoWnafT2, s = 0;
    s < e.length;
    s++
  ) {
    var l = this._endoSplit(r[s]),
      a = e[s],
      f = a._getBeta();
    l.k1.negative && (l.k1.ineg(), (a = a.neg(!0))),
      l.k2.negative && (l.k2.ineg(), (f = f.neg(!0))),
      (i[s * 2] = a),
      (i[s * 2 + 1] = f),
      (o[s * 2] = l.k1),
      (o[s * 2 + 1] = l.k2);
  }
  for (var h = this._wnafMulAdd(1, i, o, s * 2, n), p = 0; p < s * 2; p++)
    (i[p] = null), (o[p] = null);
  return h;
};
function gt(t, e, r, n) {
  xi.BasePoint.call(this, t, "affine"),
    e === null && r === null
      ? ((this.x = null), (this.y = null), (this.inf = !0))
      : ((this.x = new ne(e, 16)),
        (this.y = new ne(r, 16)),
        n && (this.x.forceRed(this.curve.red), this.y.forceRed(this.curve.red)),
        this.x.red || (this.x = this.x.toRed(this.curve.red)),
        this.y.red || (this.y = this.y.toRed(this.curve.red)),
        (this.inf = !1));
}
Hc(gt, xi.BasePoint);
ar.prototype.point = function (e, r, n) {
  return new gt(this, e, r, n);
};
ar.prototype.pointFromJSON = function (e, r) {
  return gt.fromJSON(this, e, r);
};
gt.prototype._getBeta = function () {
  if (this.curve.endo) {
    var e = this.precomputed;
    if (e && e.beta) return e.beta;
    var r = this.curve.point(this.x.redMul(this.curve.endo.beta), this.y);
    if (e) {
      var n = this.curve,
        i = function (o) {
          return n.point(o.x.redMul(n.endo.beta), o.y);
        };
      (e.beta = r),
        (r.precomputed = {
          beta: null,
          naf: e.naf && { wnd: e.naf.wnd, points: e.naf.points.map(i) },
          doubles: e.doubles && {
            step: e.doubles.step,
            points: e.doubles.points.map(i),
          },
        });
    }
    return r;
  }
};
gt.prototype.toJSON = function () {
  return this.precomputed
    ? [
        this.x,
        this.y,
        this.precomputed && {
          doubles: this.precomputed.doubles && {
            step: this.precomputed.doubles.step,
            points: this.precomputed.doubles.points.slice(1),
          },
          naf: this.precomputed.naf && {
            wnd: this.precomputed.naf.wnd,
            points: this.precomputed.naf.points.slice(1),
          },
        },
      ]
    : [this.x, this.y];
};
gt.fromJSON = function (e, r, n) {
  typeof r == "string" && (r = JSON.parse(r));
  var i = e.point(r[0], r[1], n);
  if (!r[2]) return i;
  function o(l) {
    return e.point(l[0], l[1], n);
  }
  var s = r[2];
  return (
    (i.precomputed = {
      beta: null,
      doubles: s.doubles && {
        step: s.doubles.step,
        points: [i].concat(s.doubles.points.map(o)),
      },
      naf: s.naf && { wnd: s.naf.wnd, points: [i].concat(s.naf.points.map(o)) },
    }),
    i
  );
};
gt.prototype.inspect = function () {
  return this.isInfinity()
    ? "<EC Point Infinity>"
    : "<EC Point x: " +
        this.x.fromRed().toString(16, 2) +
        " y: " +
        this.y.fromRed().toString(16, 2) +
        ">";
};
gt.prototype.isInfinity = function () {
  return this.inf;
};
gt.prototype.add = function (e) {
  if (this.inf) return e;
  if (e.inf) return this;
  if (this.eq(e)) return this.dbl();
  if (this.neg().eq(e)) return this.curve.point(null, null);
  if (this.x.cmp(e.x) === 0) return this.curve.point(null, null);
  var r = this.y.redSub(e.y);
  r.cmpn(0) !== 0 && (r = r.redMul(this.x.redSub(e.x).redInvm()));
  var n = r.redSqr().redISub(this.x).redISub(e.x),
    i = r.redMul(this.x.redSub(n)).redISub(this.y);
  return this.curve.point(n, i);
};
gt.prototype.dbl = function () {
  if (this.inf) return this;
  var e = this.y.redAdd(this.y);
  if (e.cmpn(0) === 0) return this.curve.point(null, null);
  var r = this.curve.a,
    n = this.x.redSqr(),
    i = e.redInvm(),
    o = n.redAdd(n).redIAdd(n).redIAdd(r).redMul(i),
    s = o.redSqr().redISub(this.x.redAdd(this.x)),
    l = o.redMul(this.x.redSub(s)).redISub(this.y);
  return this.curve.point(s, l);
};
gt.prototype.getX = function () {
  return this.x.fromRed();
};
gt.prototype.getY = function () {
  return this.y.fromRed();
};
gt.prototype.mul = function (e) {
  return (
    (e = new ne(e, 16)),
    this.isInfinity()
      ? this
      : this._hasDoubles(e)
      ? this.curve._fixedNafMul(this, e)
      : this.curve.endo
      ? this.curve._endoWnafMulAdd([this], [e])
      : this.curve._wnafMul(this, e)
  );
};
gt.prototype.mulAdd = function (e, r, n) {
  var i = [this, r],
    o = [e, n];
  return this.curve.endo
    ? this.curve._endoWnafMulAdd(i, o)
    : this.curve._wnafMulAdd(1, i, o, 2);
};
gt.prototype.jmulAdd = function (e, r, n) {
  var i = [this, r],
    o = [e, n];
  return this.curve.endo
    ? this.curve._endoWnafMulAdd(i, o, !0)
    : this.curve._wnafMulAdd(1, i, o, 2, !0);
};
gt.prototype.eq = function (e) {
  return (
    this === e ||
    (this.inf === e.inf &&
      (this.inf || (this.x.cmp(e.x) === 0 && this.y.cmp(e.y) === 0)))
  );
};
gt.prototype.neg = function (e) {
  if (this.inf) return this;
  var r = this.curve.point(this.x, this.y.redNeg());
  if (e && this.precomputed) {
    var n = this.precomputed,
      i = function (o) {
        return o.neg();
      };
    r.precomputed = {
      naf: n.naf && { wnd: n.naf.wnd, points: n.naf.points.map(i) },
      doubles: n.doubles && {
        step: n.doubles.step,
        points: n.doubles.points.map(i),
      },
    };
  }
  return r;
};
gt.prototype.toJ = function () {
  if (this.inf) return this.curve.jpoint(null, null, null);
  var e = this.curve.jpoint(this.x, this.y, this.curve.one);
  return e;
};
function Et(t, e, r, n) {
  xi.BasePoint.call(this, t, "jacobian"),
    e === null && r === null && n === null
      ? ((this.x = this.curve.one),
        (this.y = this.curve.one),
        (this.z = new ne(0)))
      : ((this.x = new ne(e, 16)),
        (this.y = new ne(r, 16)),
        (this.z = new ne(n, 16))),
    this.x.red || (this.x = this.x.toRed(this.curve.red)),
    this.y.red || (this.y = this.y.toRed(this.curve.red)),
    this.z.red || (this.z = this.z.toRed(this.curve.red)),
    (this.zOne = this.z === this.curve.one);
}
Hc(Et, xi.BasePoint);
ar.prototype.jpoint = function (e, r, n) {
  return new Et(this, e, r, n);
};
Et.prototype.toP = function () {
  if (this.isInfinity()) return this.curve.point(null, null);
  var e = this.z.redInvm(),
    r = e.redSqr(),
    n = this.x.redMul(r),
    i = this.y.redMul(r).redMul(e);
  return this.curve.point(n, i);
};
Et.prototype.neg = function () {
  return this.curve.jpoint(this.x, this.y.redNeg(), this.z);
};
Et.prototype.add = function (e) {
  if (this.isInfinity()) return e;
  if (e.isInfinity()) return this;
  var r = e.z.redSqr(),
    n = this.z.redSqr(),
    i = this.x.redMul(r),
    o = e.x.redMul(n),
    s = this.y.redMul(r.redMul(e.z)),
    l = e.y.redMul(n.redMul(this.z)),
    a = i.redSub(o),
    f = s.redSub(l);
  if (a.cmpn(0) === 0)
    return f.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var h = a.redSqr(),
    p = h.redMul(a),
    y = i.redMul(h),
    S = f.redSqr().redIAdd(p).redISub(y).redISub(y),
    P = f.redMul(y.redISub(S)).redISub(s.redMul(p)),
    M = this.z.redMul(e.z).redMul(a);
  return this.curve.jpoint(S, P, M);
};
Et.prototype.mixedAdd = function (e) {
  if (this.isInfinity()) return e.toJ();
  if (e.isInfinity()) return this;
  var r = this.z.redSqr(),
    n = this.x,
    i = e.x.redMul(r),
    o = this.y,
    s = e.y.redMul(r).redMul(this.z),
    l = n.redSub(i),
    a = o.redSub(s);
  if (l.cmpn(0) === 0)
    return a.cmpn(0) !== 0 ? this.curve.jpoint(null, null, null) : this.dbl();
  var f = l.redSqr(),
    h = f.redMul(l),
    p = n.redMul(f),
    y = a.redSqr().redIAdd(h).redISub(p).redISub(p),
    S = a.redMul(p.redISub(y)).redISub(o.redMul(h)),
    P = this.z.redMul(l);
  return this.curve.jpoint(y, S, P);
};
Et.prototype.dblp = function (e) {
  if (e === 0) return this;
  if (this.isInfinity()) return this;
  if (!e) return this.dbl();
  var r;
  if (this.curve.zeroA || this.curve.threeA) {
    var n = this;
    for (r = 0; r < e; r++) n = n.dbl();
    return n;
  }
  var i = this.curve.a,
    o = this.curve.tinv,
    s = this.x,
    l = this.y,
    a = this.z,
    f = a.redSqr().redSqr(),
    h = l.redAdd(l);
  for (r = 0; r < e; r++) {
    var p = s.redSqr(),
      y = h.redSqr(),
      S = y.redSqr(),
      P = p.redAdd(p).redIAdd(p).redIAdd(i.redMul(f)),
      M = s.redMul(y),
      I = P.redSqr().redISub(M.redAdd(M)),
      w = M.redISub(I),
      x = P.redMul(w);
    x = x.redIAdd(x).redISub(S);
    var N = h.redMul(a);
    r + 1 < e && (f = f.redMul(S)), (s = I), (a = N), (h = x);
  }
  return this.curve.jpoint(s, h.redMul(o), a);
};
Et.prototype.dbl = function () {
  return this.isInfinity()
    ? this
    : this.curve.zeroA
    ? this._zeroDbl()
    : this.curve.threeA
    ? this._threeDbl()
    : this._dbl();
};
Et.prototype._zeroDbl = function () {
  var e, r, n;
  if (this.zOne) {
    var i = this.x.redSqr(),
      o = this.y.redSqr(),
      s = o.redSqr(),
      l = this.x.redAdd(o).redSqr().redISub(i).redISub(s);
    l = l.redIAdd(l);
    var a = i.redAdd(i).redIAdd(i),
      f = a.redSqr().redISub(l).redISub(l),
      h = s.redIAdd(s);
    (h = h.redIAdd(h)),
      (h = h.redIAdd(h)),
      (e = f),
      (r = a.redMul(l.redISub(f)).redISub(h)),
      (n = this.y.redAdd(this.y));
  } else {
    var p = this.x.redSqr(),
      y = this.y.redSqr(),
      S = y.redSqr(),
      P = this.x.redAdd(y).redSqr().redISub(p).redISub(S);
    P = P.redIAdd(P);
    var M = p.redAdd(p).redIAdd(p),
      I = M.redSqr(),
      w = S.redIAdd(S);
    (w = w.redIAdd(w)),
      (w = w.redIAdd(w)),
      (e = I.redISub(P).redISub(P)),
      (r = M.redMul(P.redISub(e)).redISub(w)),
      (n = this.y.redMul(this.z)),
      (n = n.redIAdd(n));
  }
  return this.curve.jpoint(e, r, n);
};
Et.prototype._threeDbl = function () {
  var e, r, n;
  if (this.zOne) {
    var i = this.x.redSqr(),
      o = this.y.redSqr(),
      s = o.redSqr(),
      l = this.x.redAdd(o).redSqr().redISub(i).redISub(s);
    l = l.redIAdd(l);
    var a = i.redAdd(i).redIAdd(i).redIAdd(this.curve.a),
      f = a.redSqr().redISub(l).redISub(l);
    e = f;
    var h = s.redIAdd(s);
    (h = h.redIAdd(h)),
      (h = h.redIAdd(h)),
      (r = a.redMul(l.redISub(f)).redISub(h)),
      (n = this.y.redAdd(this.y));
  } else {
    var p = this.z.redSqr(),
      y = this.y.redSqr(),
      S = this.x.redMul(y),
      P = this.x.redSub(p).redMul(this.x.redAdd(p));
    P = P.redAdd(P).redIAdd(P);
    var M = S.redIAdd(S);
    M = M.redIAdd(M);
    var I = M.redAdd(M);
    (e = P.redSqr().redISub(I)),
      (n = this.y.redAdd(this.z).redSqr().redISub(y).redISub(p));
    var w = y.redSqr();
    (w = w.redIAdd(w)),
      (w = w.redIAdd(w)),
      (w = w.redIAdd(w)),
      (r = P.redMul(M.redISub(e)).redISub(w));
  }
  return this.curve.jpoint(e, r, n);
};
Et.prototype._dbl = function () {
  var e = this.curve.a,
    r = this.x,
    n = this.y,
    i = this.z,
    o = i.redSqr().redSqr(),
    s = r.redSqr(),
    l = n.redSqr(),
    a = s.redAdd(s).redIAdd(s).redIAdd(e.redMul(o)),
    f = r.redAdd(r);
  f = f.redIAdd(f);
  var h = f.redMul(l),
    p = a.redSqr().redISub(h.redAdd(h)),
    y = h.redISub(p),
    S = l.redSqr();
  (S = S.redIAdd(S)), (S = S.redIAdd(S)), (S = S.redIAdd(S));
  var P = a.redMul(y).redISub(S),
    M = n.redAdd(n).redMul(i);
  return this.curve.jpoint(p, P, M);
};
Et.prototype.trpl = function () {
  if (!this.curve.zeroA) return this.dbl().add(this);
  var e = this.x.redSqr(),
    r = this.y.redSqr(),
    n = this.z.redSqr(),
    i = r.redSqr(),
    o = e.redAdd(e).redIAdd(e),
    s = o.redSqr(),
    l = this.x.redAdd(r).redSqr().redISub(e).redISub(i);
  (l = l.redIAdd(l)), (l = l.redAdd(l).redIAdd(l)), (l = l.redISub(s));
  var a = l.redSqr(),
    f = i.redIAdd(i);
  (f = f.redIAdd(f)), (f = f.redIAdd(f)), (f = f.redIAdd(f));
  var h = o.redIAdd(l).redSqr().redISub(s).redISub(a).redISub(f),
    p = r.redMul(h);
  (p = p.redIAdd(p)), (p = p.redIAdd(p));
  var y = this.x.redMul(a).redISub(p);
  (y = y.redIAdd(y)), (y = y.redIAdd(y));
  var S = this.y.redMul(h.redMul(f.redISub(h)).redISub(l.redMul(a)));
  (S = S.redIAdd(S)), (S = S.redIAdd(S)), (S = S.redIAdd(S));
  var P = this.z.redAdd(l).redSqr().redISub(n).redISub(a);
  return this.curve.jpoint(y, S, P);
};
Et.prototype.mul = function (e, r) {
  return (e = new ne(e, r)), this.curve._wnafMul(this, e);
};
Et.prototype.eq = function (e) {
  if (e.type === "affine") return this.eq(e.toJ());
  if (this === e) return !0;
  var r = this.z.redSqr(),
    n = e.z.redSqr();
  if (this.x.redMul(n).redISub(e.x.redMul(r)).cmpn(0) !== 0) return !1;
  var i = r.redMul(this.z),
    o = n.redMul(e.z);
  return this.y.redMul(o).redISub(e.y.redMul(i)).cmpn(0) === 0;
};
Et.prototype.eqXToP = function (e) {
  var r = this.z.redSqr(),
    n = e.toRed(this.curve.red).redMul(r);
  if (this.x.cmp(n) === 0) return !0;
  for (var i = e.clone(), o = this.curve.redN.redMul(r); ; ) {
    if ((i.iadd(this.curve.n), i.cmp(this.curve.p) >= 0)) return !1;
    if ((n.redIAdd(o), this.x.cmp(n) === 0)) return !0;
  }
};
Et.prototype.inspect = function () {
  return this.isInfinity()
    ? "<EC JPoint Infinity>"
    : "<EC JPoint x: " +
        this.x.toString(16, 2) +
        " y: " +
        this.y.toString(16, 2) +
        " z: " +
        this.z.toString(16, 2) +
        ">";
};
Et.prototype.isInfinity = function () {
  return this.z.cmpn(0) === 0;
};
var ll = fo(function (t, e) {
    var r = e;
    (r.base = xi), (r.short = o3), (r.mont = null), (r.edwards = null);
  }),
  al = fo(function (t, e) {
    var r = e,
      n = Xt.assert;
    function i(l) {
      l.type === "short"
        ? (this.curve = new ll.short(l))
        : l.type === "edwards"
        ? (this.curve = new ll.edwards(l))
        : (this.curve = new ll.mont(l)),
        (this.g = this.curve.g),
        (this.n = this.curve.n),
        (this.hash = l.hash),
        n(this.g.validate(), "Invalid curve"),
        n(this.g.mul(this.n).isInfinity(), "Invalid curve, G*N != O");
    }
    r.PresetCurve = i;
    function o(l, a) {
      Object.defineProperty(r, l, {
        configurable: !0,
        enumerable: !0,
        get: function () {
          var f = new i(a);
          return (
            Object.defineProperty(r, l, {
              configurable: !0,
              enumerable: !0,
              value: f,
            }),
            f
          );
        },
      });
    }
    o("p192", {
      type: "short",
      prime: "p192",
      p: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff",
      a: "ffffffff ffffffff ffffffff fffffffe ffffffff fffffffc",
      b: "64210519 e59c80e7 0fa7e9ab 72243049 feb8deec c146b9b1",
      n: "ffffffff ffffffff ffffffff 99def836 146bc9b1 b4d22831",
      hash: Cr.sha256,
      gRed: !1,
      g: [
        "188da80e b03090f6 7cbf20eb 43a18800 f4ff0afd 82ff1012",
        "07192b95 ffc8da78 631011ed 6b24cdd5 73f977a1 1e794811",
      ],
    }),
      o("p224", {
        type: "short",
        prime: "p224",
        p: "ffffffff ffffffff ffffffff ffffffff 00000000 00000000 00000001",
        a: "ffffffff ffffffff ffffffff fffffffe ffffffff ffffffff fffffffe",
        b: "b4050a85 0c04b3ab f5413256 5044b0b7 d7bfd8ba 270b3943 2355ffb4",
        n: "ffffffff ffffffff ffffffff ffff16a2 e0b8f03e 13dd2945 5c5c2a3d",
        hash: Cr.sha256,
        gRed: !1,
        g: [
          "b70e0cbd 6bb4bf7f 321390b9 4a03c1d3 56c21122 343280d6 115c1d21",
          "bd376388 b5f723fb 4c22dfe6 cd4375a0 5a074764 44d58199 85007e34",
        ],
      }),
      o("p256", {
        type: "short",
        prime: null,
        p: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff ffffffff",
        a: "ffffffff 00000001 00000000 00000000 00000000 ffffffff ffffffff fffffffc",
        b: "5ac635d8 aa3a93e7 b3ebbd55 769886bc 651d06b0 cc53b0f6 3bce3c3e 27d2604b",
        n: "ffffffff 00000000 ffffffff ffffffff bce6faad a7179e84 f3b9cac2 fc632551",
        hash: Cr.sha256,
        gRed: !1,
        g: [
          "6b17d1f2 e12c4247 f8bce6e5 63a440f2 77037d81 2deb33a0 f4a13945 d898c296",
          "4fe342e2 fe1a7f9b 8ee7eb4a 7c0f9e16 2bce3357 6b315ece cbb64068 37bf51f5",
        ],
      }),
      o("p384", {
        type: "short",
        prime: null,
        p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 ffffffff",
        a: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe ffffffff 00000000 00000000 fffffffc",
        b: "b3312fa7 e23ee7e4 988e056b e3f82d19 181d9c6e fe814112 0314088f 5013875a c656398d 8a2ed19d 2a85c8ed d3ec2aef",
        n: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff c7634d81 f4372ddf 581a0db2 48b0a77a ecec196a ccc52973",
        hash: Cr.sha384,
        gRed: !1,
        g: [
          "aa87ca22 be8b0537 8eb1c71e f320ad74 6e1d3b62 8ba79b98 59f741e0 82542a38 5502f25d bf55296c 3a545e38 72760ab7",
          "3617de4a 96262c6f 5d9e98bf 9292dc29 f8f41dbd 289a147c e9da3113 b5f0b8c0 0a60b1ce 1d7e819d 7a431d7c 90ea0e5f",
        ],
      }),
      o("p521", {
        type: "short",
        prime: null,
        p: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff",
        a: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffc",
        b: "00000051 953eb961 8e1c9a1f 929a21a0 b68540ee a2da725b 99b315f3 b8b48991 8ef109e1 56193951 ec7e937b 1652c0bd 3bb1bf07 3573df88 3d2c34f1 ef451fd4 6b503f00",
        n: "000001ff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffa 51868783 bf2f966b 7fcc0148 f709a5d0 3bb5c9b8 899c47ae bb6fb71e 91386409",
        hash: Cr.sha512,
        gRed: !1,
        g: [
          "000000c6 858e06b7 0404e9cd 9e3ecb66 2395b442 9c648139 053fb521 f828af60 6b4d3dba a14b5e77 efe75928 fe1dc127 a2ffa8de 3348b3c1 856a429b f97e7e31 c2e5bd66",
          "00000118 39296a78 9a3bc004 5c8a5fb4 2c7d1bd9 98f54449 579b4468 17afbd17 273e662c 97ee7299 5ef42640 c550b901 3fad0761 353c7086 a272c240 88be9476 9fd16650",
        ],
      }),
      o("curve25519", {
        type: "mont",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "76d06",
        b: "1",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: Cr.sha256,
        gRed: !1,
        g: ["9"],
      }),
      o("ed25519", {
        type: "edwards",
        prime: "p25519",
        p: "7fffffffffffffff ffffffffffffffff ffffffffffffffff ffffffffffffffed",
        a: "-1",
        c: "1",
        d: "52036cee2b6ffe73 8cc740797779e898 00700a4d4141d8ab 75eb4dca135978a3",
        n: "1000000000000000 0000000000000000 14def9dea2f79cd6 5812631a5cf5d3ed",
        hash: Cr.sha256,
        gRed: !1,
        g: [
          "216936d3cd6e53fec0a4e231fdd6dc5c692cc7609525a7b2c9562d608f25d51a",
          "6666666666666666666666666666666666666666666666666666666666666658",
        ],
      });
    var s;
    try {
      s = null.crash();
    } catch {
      s = void 0;
    }
    o("secp256k1", {
      type: "short",
      prime: "k256",
      p: "ffffffff ffffffff ffffffff ffffffff ffffffff ffffffff fffffffe fffffc2f",
      a: "0",
      b: "7",
      n: "ffffffff ffffffff ffffffff fffffffe baaedce6 af48a03b bfd25e8c d0364141",
      h: "1",
      hash: Cr.sha256,
      beta: "7ae96a2b657c07106e64479eac3434e99cf0497512f58995c1396c28719501ee",
      lambda:
        "5363ad4cc05c30e0a5261c028812645a122e22ea20816678df02967c1b23bd72",
      basis: [
        {
          a: "3086d221a7d46bcde86c90e49284eb15",
          b: "-e4437ed6010e88286f547fa90abfe4c3",
        },
        {
          a: "114ca50f7a8e2f3f657c1108d9d44cfd8",
          b: "3086d221a7d46bcde86c90e49284eb15",
        },
      ],
      gRed: !1,
      g: [
        "79be667ef9dcbbac55a06295ce870b07029bfcdb2dce28d959f2815b16f81798",
        "483ada7726a3c4655da4fbfc0e1108a8fd17b448a68554199c47d08ffb10d4b8",
        s,
      ],
    });
  });
function In(t) {
  if (!(this instanceof In)) return new In(t);
  (this.hash = t.hash),
    (this.predResist = !!t.predResist),
    (this.outLen = this.hash.outSize),
    (this.minEntropy = t.minEntropy || this.hash.hmacStrength),
    (this._reseed = null),
    (this.reseedInterval = null),
    (this.K = null),
    (this.V = null);
  var e = xr.toArray(t.entropy, t.entropyEnc || "hex"),
    r = xr.toArray(t.nonce, t.nonceEnc || "hex"),
    n = xr.toArray(t.pers, t.persEnc || "hex");
  zc(
    e.length >= this.minEntropy / 8,
    "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
  ),
    this._init(e, r, n);
}
var Pv = In;
In.prototype._init = function (e, r, n) {
  var i = e.concat(r).concat(n);
  (this.K = new Array(this.outLen / 8)), (this.V = new Array(this.outLen / 8));
  for (var o = 0; o < this.V.length; o++) (this.K[o] = 0), (this.V[o] = 1);
  this._update(i), (this._reseed = 1), (this.reseedInterval = 281474976710656);
};
In.prototype._hmac = function () {
  return new Cr.hmac(this.hash, this.K);
};
In.prototype._update = function (e) {
  var r = this._hmac().update(this.V).update([0]);
  e && (r = r.update(e)),
    (this.K = r.digest()),
    (this.V = this._hmac().update(this.V).digest()),
    e &&
      ((this.K = this._hmac().update(this.V).update([1]).update(e).digest()),
      (this.V = this._hmac().update(this.V).digest()));
};
In.prototype.reseed = function (e, r, n, i) {
  typeof r != "string" && ((i = n), (n = r), (r = null)),
    (e = xr.toArray(e, r)),
    (n = xr.toArray(n, i)),
    zc(
      e.length >= this.minEntropy / 8,
      "Not enough entropy. Minimum is: " + this.minEntropy + " bits"
    ),
    this._update(e.concat(n || [])),
    (this._reseed = 1);
};
In.prototype.generate = function (e, r, n, i) {
  if (this._reseed > this.reseedInterval) throw new Error("Reseed is required");
  typeof r != "string" && ((i = n), (n = r), (r = null)),
    n && ((n = xr.toArray(n, i || "hex")), this._update(n));
  for (var o = []; o.length < e; )
    (this.V = this._hmac().update(this.V).digest()), (o = o.concat(this.V));
  var s = o.slice(0, e);
  return this._update(n), this._reseed++, xr.encode(s, r);
};
var Rf = Xt.assert;
function Nt(t, e) {
  (this.ec = t),
    (this.priv = null),
    (this.pub = null),
    e.priv && this._importPrivate(e.priv, e.privEnc),
    e.pub && this._importPublic(e.pub, e.pubEnc);
}
var Gc = Nt;
Nt.fromPublic = function (e, r, n) {
  return r instanceof Nt ? r : new Nt(e, { pub: r, pubEnc: n });
};
Nt.fromPrivate = function (e, r, n) {
  return r instanceof Nt ? r : new Nt(e, { priv: r, privEnc: n });
};
Nt.prototype.validate = function () {
  var e = this.getPublic();
  return e.isInfinity()
    ? { result: !1, reason: "Invalid public key" }
    : e.validate()
    ? e.mul(this.ec.curve.n).isInfinity()
      ? { result: !0, reason: null }
      : { result: !1, reason: "Public key * N != O" }
    : { result: !1, reason: "Public key is not a point" };
};
Nt.prototype.getPublic = function (e, r) {
  return (
    typeof e == "string" && ((r = e), (e = null)),
    this.pub || (this.pub = this.ec.g.mul(this.priv)),
    r ? this.pub.encode(r, e) : this.pub
  );
};
Nt.prototype.getPrivate = function (e) {
  return e === "hex" ? this.priv.toString(16, 2) : this.priv;
};
Nt.prototype._importPrivate = function (e, r) {
  (this.priv = new ne(e, r || 16)),
    (this.priv = this.priv.umod(this.ec.curve.n));
};
Nt.prototype._importPublic = function (e, r) {
  if (e.x || e.y) {
    this.ec.curve.type === "mont"
      ? Rf(e.x, "Need x coordinate")
      : (this.ec.curve.type === "short" || this.ec.curve.type === "edwards") &&
        Rf(e.x && e.y, "Need both x and y coordinate"),
      (this.pub = this.ec.curve.point(e.x, e.y));
    return;
  }
  this.pub = this.ec.curve.decodePoint(e, r);
};
Nt.prototype.derive = function (e) {
  return (
    e.validate() || Rf(e.validate(), "public point not validated"),
    e.mul(this.priv).getX()
  );
};
Nt.prototype.sign = function (e, r, n) {
  return this.ec.sign(e, this, r, n);
};
Nt.prototype.verify = function (e, r) {
  return this.ec.verify(e, r, this);
};
Nt.prototype.inspect = function () {
  return (
    "<Key priv: " +
    (this.priv && this.priv.toString(16, 2)) +
    " pub: " +
    (this.pub && this.pub.inspect()) +
    " >"
  );
};
var s3 = Xt.assert;
function ya(t, e) {
  if (t instanceof ya) return t;
  this._importDER(t, e) ||
    (s3(t.r && t.s, "Signature without r or s"),
    (this.r = new ne(t.r, 16)),
    (this.s = new ne(t.s, 16)),
    t.recoveryParam === void 0
      ? (this.recoveryParam = null)
      : (this.recoveryParam = t.recoveryParam));
}
var xa = ya;
function l3() {
  this.place = 0;
}
function yu(t, e) {
  var r = t[e.place++];
  if (!(r & 128)) return r;
  var n = r & 15;
  if (n === 0 || n > 4) return !1;
  for (var i = 0, o = 0, s = e.place; o < n; o++, s++)
    (i <<= 8), (i |= t[s]), (i >>>= 0);
  return i <= 127 ? !1 : ((e.place = s), i);
}
function Wd(t) {
  for (var e = 0, r = t.length - 1; !t[e] && !(t[e + 1] & 128) && e < r; ) e++;
  return e === 0 ? t : t.slice(e);
}
ya.prototype._importDER = function (e, r) {
  e = Xt.toArray(e, r);
  var n = new l3();
  if (e[n.place++] !== 48) return !1;
  var i = yu(e, n);
  if (i === !1 || i + n.place !== e.length || e[n.place++] !== 2) return !1;
  var o = yu(e, n);
  if (o === !1) return !1;
  var s = e.slice(n.place, o + n.place);
  if (((n.place += o), e[n.place++] !== 2)) return !1;
  var l = yu(e, n);
  if (l === !1 || e.length !== l + n.place) return !1;
  var a = e.slice(n.place, l + n.place);
  if (s[0] === 0)
    if (s[1] & 128) s = s.slice(1);
    else return !1;
  if (a[0] === 0)
    if (a[1] & 128) a = a.slice(1);
    else return !1;
  return (
    (this.r = new ne(s)), (this.s = new ne(a)), (this.recoveryParam = null), !0
  );
};
function xu(t, e) {
  if (e < 128) {
    t.push(e);
    return;
  }
  var r = 1 + ((Math.log(e) / Math.LN2) >>> 3);
  for (t.push(r | 128); --r; ) t.push((e >>> (r << 3)) & 255);
  t.push(e);
}
ya.prototype.toDER = function (e) {
  var r = this.r.toArray(),
    n = this.s.toArray();
  for (
    r[0] & 128 && (r = [0].concat(r)),
      n[0] & 128 && (n = [0].concat(n)),
      r = Wd(r),
      n = Wd(n);
    !n[0] && !(n[1] & 128);

  )
    n = n.slice(1);
  var i = [2];
  xu(i, r.length), (i = i.concat(r)), i.push(2), xu(i, n.length);
  var o = i.concat(n),
    s = [48];
  return xu(s, o.length), (s = s.concat(o)), Xt.encode(s, e);
};
var a3 = function () {
    throw new Error("unsupported");
  },
  Mv = Xt.assert;
function sr(t) {
  if (!(this instanceof sr)) return new sr(t);
  typeof t == "string" &&
    (Mv(Object.prototype.hasOwnProperty.call(al, t), "Unknown curve " + t),
    (t = al[t])),
    t instanceof al.PresetCurve && (t = { curve: t }),
    (this.curve = t.curve.curve),
    (this.n = this.curve.n),
    (this.nh = this.n.ushrn(1)),
    (this.g = this.curve.g),
    (this.g = t.curve.g),
    this.g.precompute(t.curve.n.bitLength() + 1),
    (this.hash = t.hash || t.curve.hash);
}
var u3 = sr;
sr.prototype.keyPair = function (e) {
  return new Gc(this, e);
};
sr.prototype.keyFromPrivate = function (e, r) {
  return Gc.fromPrivate(this, e, r);
};
sr.prototype.keyFromPublic = function (e, r) {
  return Gc.fromPublic(this, e, r);
};
sr.prototype.genKeyPair = function (e) {
  e || (e = {});
  for (
    var r = new Pv({
        hash: this.hash,
        pers: e.pers,
        persEnc: e.persEnc || "utf8",
        entropy: e.entropy || a3(this.hash.hmacStrength),
        entropyEnc: (e.entropy && e.entropyEnc) || "utf8",
        nonce: this.n.toArray(),
      }),
      n = this.n.byteLength(),
      i = this.n.sub(new ne(2));
    ;

  ) {
    var o = new ne(r.generate(n));
    if (!(o.cmp(i) > 0)) return o.iaddn(1), this.keyFromPrivate(o);
  }
};
sr.prototype._truncateToN = function (e, r) {
  var n = e.byteLength() * 8 - this.n.bitLength();
  return (
    n > 0 && (e = e.ushrn(n)), !r && e.cmp(this.n) >= 0 ? e.sub(this.n) : e
  );
};
sr.prototype.sign = function (e, r, n, i) {
  typeof n == "object" && ((i = n), (n = null)),
    i || (i = {}),
    (r = this.keyFromPrivate(r, n)),
    (e = this._truncateToN(new ne(e, 16)));
  for (
    var o = this.n.byteLength(),
      s = r.getPrivate().toArray("be", o),
      l = e.toArray("be", o),
      a = new Pv({
        hash: this.hash,
        entropy: s,
        nonce: l,
        pers: i.pers,
        persEnc: i.persEnc || "utf8",
      }),
      f = this.n.sub(new ne(1)),
      h = 0;
    ;
    h++
  ) {
    var p = i.k ? i.k(h) : new ne(a.generate(this.n.byteLength()));
    if (((p = this._truncateToN(p, !0)), !(p.cmpn(1) <= 0 || p.cmp(f) >= 0))) {
      var y = this.g.mul(p);
      if (!y.isInfinity()) {
        var S = y.getX(),
          P = S.umod(this.n);
        if (P.cmpn(0) !== 0) {
          var M = p.invm(this.n).mul(P.mul(r.getPrivate()).iadd(e));
          if (((M = M.umod(this.n)), M.cmpn(0) !== 0)) {
            var I = (y.getY().isOdd() ? 1 : 0) | (S.cmp(P) !== 0 ? 2 : 0);
            return (
              i.canonical &&
                M.cmp(this.nh) > 0 &&
                ((M = this.n.sub(M)), (I ^= 1)),
              new xa({ r: P, s: M, recoveryParam: I })
            );
          }
        }
      }
    }
  }
};
sr.prototype.verify = function (e, r, n, i) {
  (e = this._truncateToN(new ne(e, 16))),
    (n = this.keyFromPublic(n, i)),
    (r = new xa(r, "hex"));
  var o = r.r,
    s = r.s;
  if (
    o.cmpn(1) < 0 ||
    o.cmp(this.n) >= 0 ||
    s.cmpn(1) < 0 ||
    s.cmp(this.n) >= 0
  )
    return !1;
  var l = s.invm(this.n),
    a = l.mul(e).umod(this.n),
    f = l.mul(o).umod(this.n),
    h;
  return this.curve._maxwellTrick
    ? ((h = this.g.jmulAdd(a, n.getPublic(), f)),
      h.isInfinity() ? !1 : h.eqXToP(o))
    : ((h = this.g.mulAdd(a, n.getPublic(), f)),
      h.isInfinity() ? !1 : h.getX().umod(this.n).cmp(o) === 0);
};
sr.prototype.recoverPubKey = function (t, e, r, n) {
  Mv((3 & r) === r, "The recovery param is more than two bits"),
    (e = new xa(e, n));
  var i = this.n,
    o = new ne(t),
    s = e.r,
    l = e.s,
    a = r & 1,
    f = r >> 1;
  if (s.cmp(this.curve.p.umod(this.curve.n)) >= 0 && f)
    throw new Error("Unable to find sencond key candinate");
  f
    ? (s = this.curve.pointFromX(s.add(this.curve.n), a))
    : (s = this.curve.pointFromX(s, a));
  var h = e.r.invm(i),
    p = i.sub(o).mul(h).umod(i),
    y = l.mul(h).umod(i);
  return this.g.mulAdd(p, s, y);
};
sr.prototype.getKeyRecoveryParam = function (t, e, r, n) {
  if (((e = new xa(e, n)), e.recoveryParam !== null)) return e.recoveryParam;
  for (var i = 0; i < 4; i++) {
    var o;
    try {
      o = this.recoverPubKey(t, e, i);
    } catch {
      continue;
    }
    if (o.eq(r)) return i;
  }
  throw new Error("Unable to find valid recovery factor");
};
var f3 = fo(function (t, e) {
    var r = e;
    (r.version = "6.5.4"),
      (r.utils = Xt),
      (r.rand = function () {
        throw new Error("unsupported");
      }),
      (r.curve = ll),
      (r.curves = al),
      (r.ec = u3),
      (r.eddsa = null);
  }),
  c3 = f3.ec;
const h3 = "signing-key/5.7.0",
  If = new B(h3);
let wu = null;
function Mr() {
  return wu || (wu = new c3("secp256k1")), wu;
}
class d3 {
  constructor(e) {
    ce(this, "curve", "secp256k1"),
      ce(this, "privateKey", ie(e)),
      hi(this.privateKey) !== 32 &&
        If.throwArgumentError(
          "invalid private key",
          "privateKey",
          "[[ REDACTED ]]"
        );
    const r = Mr().keyFromPrivate(oe(this.privateKey));
    ce(this, "publicKey", "0x" + r.getPublic(!1, "hex")),
      ce(this, "compressedPublicKey", "0x" + r.getPublic(!0, "hex")),
      ce(this, "_isSigningKey", !0);
  }
  _addPoint(e) {
    const r = Mr().keyFromPublic(oe(this.publicKey)),
      n = Mr().keyFromPublic(oe(e));
    return "0x" + r.pub.add(n.pub).encodeCompressed("hex");
  }
  signDigest(e) {
    const r = Mr().keyFromPrivate(oe(this.privateKey)),
      n = oe(e);
    n.length !== 32 && If.throwArgumentError("bad digest length", "digest", e);
    const i = r.sign(n, { canonical: !0 });
    return fa({
      recoveryParam: i.recoveryParam,
      r: ut("0x" + i.r.toString(16), 32),
      s: ut("0x" + i.s.toString(16), 32),
    });
  }
  computeSharedSecret(e) {
    const r = Mr().keyFromPrivate(oe(this.privateKey)),
      n = Mr().keyFromPublic(oe(Rv(e)));
    return ut("0x" + r.derive(n.getPublic()).toString(16), 32);
  }
  static isSigningKey(e) {
    return !!(e && e._isSigningKey);
  }
}
function p3(t, e) {
  const r = fa(e),
    n = { r: oe(r.r), s: oe(r.s) };
  return "0x" + Mr().recoverPubKey(oe(t), n, r.recoveryParam).encode("hex", !1);
}
function Rv(t, e) {
  const r = oe(t);
  if (r.length === 32) {
    const n = new d3(r);
    return e ? "0x" + Mr().keyFromPrivate(r).getPublic(!0, "hex") : n.publicKey;
  } else {
    if (r.length === 33)
      return e ? ie(r) : "0x" + Mr().keyFromPublic(r).getPublic(!1, "hex");
    if (r.length === 65)
      return e ? "0x" + Mr().keyFromPublic(r).getPublic(!0, "hex") : ie(r);
  }
  return If.throwArgumentError(
    "invalid public or private key",
    "key",
    "[REDACTED]"
  );
}
const m3 = "transactions/5.7.0",
  nn = new B(m3);
var Qd;
(function (t) {
  (t[(t.legacy = 0)] = "legacy"),
    (t[(t.eip2930 = 1)] = "eip2930"),
    (t[(t.eip1559 = 2)] = "eip1559");
})(Qd || (Qd = {}));
function qc(t) {
  return t === "0x" ? null : br(t);
}
function St(t) {
  return t === "0x" ? _w : Y.from(t);
}
function v3(t) {
  const e = Rv(t);
  return br(Mt(mt(Mt(e, 1)), 12));
}
function Iv(t, e) {
  return v3(p3(oe(t), e));
}
function Wt(t, e) {
  const r = Zi(Y.from(t).toHexString());
  return (
    r.length > 32 &&
      nn.throwArgumentError("invalid length for " + e, "transaction:" + e, t),
    r
  );
}
function Au(t, e) {
  return {
    address: br(t),
    storageKeys: (e || []).map(
      (r, n) => (
        hi(r) !== 32 &&
          nn.throwArgumentError(
            "invalid access list storageKey",
            `accessList[${t}:${n}]`,
            r
          ),
        r.toLowerCase()
      )
    ),
  };
}
function ws(t) {
  if (Array.isArray(t))
    return t.map((r, n) =>
      Array.isArray(r)
        ? (r.length > 2 &&
            nn.throwArgumentError(
              "access list expected to be [ address, storageKeys[] ]",
              `value[${n}]`,
              r
            ),
          Au(r[0], r[1]))
        : Au(r.address, r.storageKeys)
    );
  const e = Object.keys(t).map((r) => {
    const n = t[r].reduce((i, o) => ((i[o] = !0), i), {});
    return Au(r, Object.keys(n).sort());
  });
  return e.sort((r, n) => r.address.localeCompare(n.address)), e;
}
function Tv(t) {
  return ws(t).map((e) => [e.address, e.storageKeys]);
}
function g3(t, e) {
  if (t.gasPrice != null) {
    const n = Y.from(t.gasPrice),
      i = Y.from(t.maxFeePerGas || 0);
    n.eq(i) ||
      nn.throwArgumentError(
        "mismatch EIP-1559 gasPrice != maxFeePerGas",
        "tx",
        { gasPrice: n, maxFeePerGas: i }
      );
  }
  const r = [
    Wt(t.chainId || 0, "chainId"),
    Wt(t.nonce || 0, "nonce"),
    Wt(t.maxPriorityFeePerGas || 0, "maxPriorityFeePerGas"),
    Wt(t.maxFeePerGas || 0, "maxFeePerGas"),
    Wt(t.gasLimit || 0, "gasLimit"),
    t.to != null ? br(t.to) : "0x",
    Wt(t.value || 0, "value"),
    t.data || "0x",
    Tv(t.accessList || []),
  ];
  if (e) {
    const n = fa(e);
    r.push(Wt(n.recoveryParam, "recoveryParam")),
      r.push(Zi(n.r)),
      r.push(Zi(n.s));
  }
  return Qt(["0x02", pa(r)]);
}
function y3(t, e) {
  const r = [
    Wt(t.chainId || 0, "chainId"),
    Wt(t.nonce || 0, "nonce"),
    Wt(t.gasPrice || 0, "gasPrice"),
    Wt(t.gasLimit || 0, "gasLimit"),
    t.to != null ? br(t.to) : "0x",
    Wt(t.value || 0, "value"),
    t.data || "0x",
    Tv(t.accessList || []),
  ];
  if (e) {
    const n = fa(e);
    r.push(Wt(n.recoveryParam, "recoveryParam")),
      r.push(Zi(n.r)),
      r.push(Zi(n.s));
  }
  return Qt(["0x01", pa(r)]);
}
function Ov(t, e, r) {
  try {
    const n = St(e[0]).toNumber();
    if (n !== 0 && n !== 1) throw new Error("bad recid");
    t.v = n;
  } catch {
    nn.throwArgumentError("invalid v for transaction type: 1", "v", e[0]);
  }
  (t.r = ut(e[1], 32)), (t.s = ut(e[2], 32));
  try {
    const n = mt(r(t));
    t.from = Iv(n, { r: t.r, s: t.s, recoveryParam: t.v });
  } catch {}
}
function x3(t) {
  const e = Fc(t.slice(1));
  e.length !== 9 &&
    e.length !== 12 &&
    nn.throwArgumentError(
      "invalid component count for transaction type: 2",
      "payload",
      ie(t)
    );
  const r = St(e[2]),
    n = St(e[3]),
    i = {
      type: 2,
      chainId: St(e[0]).toNumber(),
      nonce: St(e[1]).toNumber(),
      maxPriorityFeePerGas: r,
      maxFeePerGas: n,
      gasPrice: null,
      gasLimit: St(e[4]),
      to: qc(e[5]),
      value: St(e[6]),
      data: e[7],
      accessList: ws(e[8]),
    };
  return e.length === 9 || ((i.hash = mt(t)), Ov(i, e.slice(9), g3)), i;
}
function w3(t) {
  const e = Fc(t.slice(1));
  e.length !== 8 &&
    e.length !== 11 &&
    nn.throwArgumentError(
      "invalid component count for transaction type: 1",
      "payload",
      ie(t)
    );
  const r = {
    type: 1,
    chainId: St(e[0]).toNumber(),
    nonce: St(e[1]).toNumber(),
    gasPrice: St(e[2]),
    gasLimit: St(e[3]),
    to: qc(e[4]),
    value: St(e[5]),
    data: e[6],
    accessList: ws(e[7]),
  };
  return e.length === 8 || ((r.hash = mt(t)), Ov(r, e.slice(8), y3)), r;
}
function A3(t) {
  const e = Fc(t);
  e.length !== 9 &&
    e.length !== 6 &&
    nn.throwArgumentError("invalid raw transaction", "rawTransaction", t);
  const r = {
    nonce: St(e[0]).toNumber(),
    gasPrice: St(e[1]),
    gasLimit: St(e[2]),
    to: qc(e[3]),
    value: St(e[4]),
    data: e[5],
    chainId: 0,
  };
  if (e.length === 6) return r;
  try {
    r.v = Y.from(e[6]).toNumber();
  } catch {
    return r;
  }
  if (
    ((r.r = ut(e[7], 32)),
    (r.s = ut(e[8], 32)),
    Y.from(r.r).isZero() && Y.from(r.s).isZero())
  )
    (r.chainId = r.v), (r.v = 0);
  else {
    (r.chainId = Math.floor((r.v - 35) / 2)), r.chainId < 0 && (r.chainId = 0);
    let n = r.v - 27;
    const i = e.slice(0, 6);
    r.chainId !== 0 &&
      (i.push(ie(r.chainId)),
      i.push("0x"),
      i.push("0x"),
      (n -= r.chainId * 2 + 8));
    const o = mt(pa(i));
    try {
      r.from = Iv(o, { r: ie(r.r), s: ie(r.s), recoveryParam: n });
    } catch {}
    r.hash = mt(t);
  }
  return (r.type = null), r;
}
function E3(t) {
  const e = oe(t);
  if (e[0] > 127) return A3(e);
  switch (e[0]) {
    case 1:
      return w3(e);
    case 2:
      return x3(e);
  }
  return nn.throwError(
    `unsupported transaction type: ${e[0]}`,
    B.errors.UNSUPPORTED_OPERATION,
    { operation: "parseTransaction", transactionType: e[0] }
  );
}
const Eo = new B(ga);
class J {
  constructor() {
    this.formats = this.getDefaultFormats();
  }
  getDefaultFormats() {
    const e = {},
      r = this.address.bind(this),
      n = this.bigNumber.bind(this),
      i = this.blockTag.bind(this),
      o = this.data.bind(this),
      s = this.hash.bind(this),
      l = this.hex.bind(this),
      a = this.number.bind(this),
      f = this.type.bind(this),
      h = (p) => this.data(p, !0);
    return (
      (e.transaction = {
        hash: s,
        type: f,
        accessList: J.allowNull(this.accessList.bind(this), null),
        blockHash: J.allowNull(s, null),
        blockNumber: J.allowNull(a, null),
        transactionIndex: J.allowNull(a, null),
        confirmations: J.allowNull(a, null),
        from: r,
        gasPrice: J.allowNull(n),
        maxPriorityFeePerGas: J.allowNull(n),
        maxFeePerGas: J.allowNull(n),
        gasLimit: n,
        to: J.allowNull(r, null),
        value: n,
        nonce: a,
        data: o,
        r: J.allowNull(this.uint256),
        s: J.allowNull(this.uint256),
        v: J.allowNull(a),
        creates: J.allowNull(r, null),
        raw: J.allowNull(o),
      }),
      (e.transactionRequest = {
        from: J.allowNull(r),
        nonce: J.allowNull(a),
        gasLimit: J.allowNull(n),
        gasPrice: J.allowNull(n),
        maxPriorityFeePerGas: J.allowNull(n),
        maxFeePerGas: J.allowNull(n),
        to: J.allowNull(r),
        value: J.allowNull(n),
        data: J.allowNull(h),
        type: J.allowNull(a),
        accessList: J.allowNull(this.accessList.bind(this), null),
      }),
      (e.receiptLog = {
        transactionIndex: a,
        blockNumber: a,
        transactionHash: s,
        address: r,
        topics: J.arrayOf(s),
        data: o,
        logIndex: a,
        blockHash: s,
      }),
      (e.receipt = {
        to: J.allowNull(this.address, null),
        from: J.allowNull(this.address, null),
        contractAddress: J.allowNull(r, null),
        transactionIndex: a,
        root: J.allowNull(l),
        gasUsed: n,
        logsBloom: J.allowNull(o),
        blockHash: s,
        transactionHash: s,
        logs: J.arrayOf(this.receiptLog.bind(this)),
        blockNumber: a,
        confirmations: J.allowNull(a, null),
        cumulativeGasUsed: n,
        effectiveGasPrice: J.allowNull(n),
        status: J.allowNull(a),
        type: f,
      }),
      (e.block = {
        hash: J.allowNull(s),
        parentHash: s,
        number: a,
        timestamp: a,
        nonce: J.allowNull(l),
        difficulty: this.difficulty.bind(this),
        gasLimit: n,
        gasUsed: n,
        miner: J.allowNull(r),
        extraData: o,
        transactions: J.allowNull(J.arrayOf(s)),
        baseFeePerGas: J.allowNull(n),
      }),
      (e.blockWithTransactions = Dt(e.block)),
      (e.blockWithTransactions.transactions = J.allowNull(
        J.arrayOf(this.transactionResponse.bind(this))
      )),
      (e.filter = {
        fromBlock: J.allowNull(i, void 0),
        toBlock: J.allowNull(i, void 0),
        blockHash: J.allowNull(s, void 0),
        address: J.allowNull(r, void 0),
        topics: J.allowNull(this.topics.bind(this), void 0),
      }),
      (e.filterLog = {
        blockNumber: J.allowNull(a),
        blockHash: J.allowNull(s),
        transactionIndex: a,
        removed: J.allowNull(this.boolean.bind(this)),
        address: r,
        data: J.allowFalsish(o, "0x"),
        topics: J.arrayOf(s),
        transactionHash: s,
        logIndex: a,
      }),
      e
    );
  }
  accessList(e) {
    return ws(e || []);
  }
  number(e) {
    return e === "0x" ? 0 : Y.from(e).toNumber();
  }
  type(e) {
    return e === "0x" || e == null ? 0 : Y.from(e).toNumber();
  }
  bigNumber(e) {
    return Y.from(e);
  }
  boolean(e) {
    if (typeof e == "boolean") return e;
    if (typeof e == "string") {
      if (((e = e.toLowerCase()), e === "true")) return !0;
      if (e === "false") return !1;
    }
    throw new Error("invalid boolean - " + e);
  }
  hex(e, r) {
    return typeof e == "string" &&
      (!r && e.substring(0, 2) !== "0x" && (e = "0x" + e), me(e))
      ? e.toLowerCase()
      : Eo.throwArgumentError("invalid hash", "value", e);
  }
  data(e, r) {
    const n = this.hex(e, r);
    if (n.length % 2 !== 0) throw new Error("invalid data; odd-length - " + e);
    return n;
  }
  address(e) {
    return br(e);
  }
  callAddress(e) {
    if (!me(e, 32)) return null;
    const r = br(Mt(e, 12));
    return r === bw ? null : r;
  }
  contractAddress(e) {
    return l2(e);
  }
  blockTag(e) {
    if (e == null) return "latest";
    if (e === "earliest") return "0x0";
    switch (e) {
      case "earliest":
        return "0x0";
      case "latest":
      case "pending":
      case "safe":
      case "finalized":
        return e;
    }
    if (typeof e == "number" || me(e)) return Tc(e);
    throw new Error("invalid blockTag");
  }
  hash(e, r) {
    const n = this.hex(e, r);
    return hi(n) !== 32 ? Eo.throwArgumentError("invalid hash", "value", e) : n;
  }
  difficulty(e) {
    if (e == null) return null;
    const r = Y.from(e);
    try {
      return r.toNumber();
    } catch {}
    return null;
  }
  uint256(e) {
    if (!me(e)) throw new Error("invalid uint256");
    return ut(e, 32);
  }
  _block(e, r) {
    e.author != null && e.miner == null && (e.miner = e.author);
    const n = e._difficulty != null ? e._difficulty : e.difficulty,
      i = J.check(r, e);
    return (i._difficulty = n == null ? null : Y.from(n)), i;
  }
  block(e) {
    return this._block(e, this.formats.block);
  }
  blockWithTransactions(e) {
    return this._block(e, this.formats.blockWithTransactions);
  }
  transactionRequest(e) {
    return J.check(this.formats.transactionRequest, e);
  }
  transactionResponse(e) {
    e.gas != null && e.gasLimit == null && (e.gasLimit = e.gas),
      e.to &&
        Y.from(e.to).isZero() &&
        (e.to = "0x0000000000000000000000000000000000000000"),
      e.input != null && e.data == null && (e.data = e.input),
      e.to == null &&
        e.creates == null &&
        (e.creates = this.contractAddress(e)),
      (e.type === 1 || e.type === 2) &&
        e.accessList == null &&
        (e.accessList = []);
    const r = J.check(this.formats.transaction, e);
    if (e.chainId != null) {
      let n = e.chainId;
      me(n) && (n = Y.from(n).toNumber()), (r.chainId = n);
    } else {
      let n = e.networkId;
      n == null && r.v == null && (n = e.chainId),
        me(n) && (n = Y.from(n).toNumber()),
        typeof n != "number" &&
          r.v != null &&
          ((n = (r.v - 35) / 2), n < 0 && (n = 0), (n = parseInt(n))),
        typeof n != "number" && (n = 0),
        (r.chainId = n);
    }
    return (
      r.blockHash &&
        r.blockHash.replace(/0/g, "") === "x" &&
        (r.blockHash = null),
      r
    );
  }
  transaction(e) {
    return E3(e);
  }
  receiptLog(e) {
    return J.check(this.formats.receiptLog, e);
  }
  receipt(e) {
    const r = J.check(this.formats.receipt, e);
    if (r.root != null)
      if (r.root.length <= 4) {
        const n = Y.from(r.root).toNumber();
        n === 0 || n === 1
          ? (r.status != null &&
              r.status !== n &&
              Eo.throwArgumentError(
                "alt-root-status/status mismatch",
                "value",
                { root: r.root, status: r.status }
              ),
            (r.status = n),
            delete r.root)
          : Eo.throwArgumentError(
              "invalid alt-root-status",
              "value.root",
              r.root
            );
      } else
        r.root.length !== 66 &&
          Eo.throwArgumentError("invalid root hash", "value.root", r.root);
    return r.status != null && (r.byzantium = !0), r;
  }
  topics(e) {
    return Array.isArray(e)
      ? e.map((r) => this.topics(r))
      : e != null
      ? this.hash(e, !0)
      : null;
  }
  filter(e) {
    return J.check(this.formats.filter, e);
  }
  filterLog(e) {
    return J.check(this.formats.filterLog, e);
  }
  static check(e, r) {
    const n = {};
    for (const i in e)
      try {
        const o = e[i](r[i]);
        o !== void 0 && (n[i] = o);
      } catch (o) {
        throw ((o.checkKey = i), (o.checkValue = r[i]), o);
      }
    return n;
  }
  static allowNull(e, r) {
    return function (n) {
      return n == null ? r : e(n);
    };
  }
  static allowFalsish(e, r) {
    return function (n) {
      return n ? e(n) : r;
    };
  }
  static arrayOf(e) {
    return function (r) {
      if (!Array.isArray(r)) throw new Error("not an array");
      const n = [];
      return (
        r.forEach(function (i) {
          n.push(e(i));
        }),
        n
      );
    };
  }
}
var te =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, r, n) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (s) {
            s(o);
          });
    }
    return new (r || (r = Promise))(function (o, s) {
      function l(h) {
        try {
          f(n.next(h));
        } catch (p) {
          s(p);
        }
      }
      function a(h) {
        try {
          f(n.throw(h));
        } catch (p) {
          s(p);
        }
      }
      function f(h) {
        h.done ? o(h.value) : i(h.value).then(l, a);
      }
      f((n = n.apply(t, e || [])).next());
    });
  };
const le = new B(ga),
  b3 = 10;
function Kd(t) {
  return t == null
    ? "null"
    : (hi(t) !== 32 && le.throwArgumentError("invalid topic", "topic", t),
      t.toLowerCase());
}
function Vd(t) {
  for (t = t.slice(); t.length > 0 && t[t.length - 1] == null; ) t.pop();
  return t
    .map((e) => {
      if (Array.isArray(e)) {
        const r = {};
        e.forEach((i) => {
          r[Kd(i)] = !0;
        });
        const n = Object.keys(r);
        return n.sort(), n.join("|");
      } else return Kd(e);
    })
    .join("&");
}
function _3(t) {
  return t === ""
    ? []
    : t.split(/&/g).map((e) => {
        if (e === "") return [];
        const r = e.split("|").map((n) => (n === "null" ? null : n));
        return r.length === 1 ? r[0] : r;
      });
}
function Ei(t) {
  if (typeof t == "string") {
    if (((t = t.toLowerCase()), hi(t) === 32)) return "tx:" + t;
    if (t.indexOf(":") === -1) return t;
  } else {
    if (Array.isArray(t)) return "filter:*:" + Vd(t);
    if (xw.isForkEvent(t))
      throw (le.warn("not implemented"), new Error("not implemented"));
    if (t && typeof t == "object")
      return "filter:" + (t.address || "*") + ":" + Vd(t.topics || []);
  }
  throw new Error("invalid event - " + t);
}
function bo() {
  return new Date().getTime();
}
function Jd(t) {
  return new Promise((e) => {
    setTimeout(e, t);
  });
}
const k3 = ["block", "network", "pending", "poll"];
class S3 {
  constructor(e, r, n) {
    ce(this, "tag", e),
      ce(this, "listener", r),
      ce(this, "once", n),
      (this._lastBlockNumber = -2),
      (this._inflight = !1);
  }
  get event() {
    switch (this.type) {
      case "tx":
        return this.hash;
      case "filter":
        return this.filter;
    }
    return this.tag;
  }
  get type() {
    return this.tag.split(":")[0];
  }
  get hash() {
    const e = this.tag.split(":");
    return e[0] !== "tx" ? null : e[1];
  }
  get filter() {
    const e = this.tag.split(":");
    if (e[0] !== "filter") return null;
    const r = e[1],
      n = _3(e[2]),
      i = {};
    return n.length > 0 && (i.topics = n), r && r !== "*" && (i.address = r), i;
  }
  pollable() {
    return this.tag.indexOf(":") >= 0 || k3.indexOf(this.tag) >= 0;
  }
}
const N3 = {
  0: { symbol: "btc", p2pkh: 0, p2sh: 5, prefix: "bc" },
  2: { symbol: "ltc", p2pkh: 48, p2sh: 50, prefix: "ltc" },
  3: { symbol: "doge", p2pkh: 30, p2sh: 22 },
  60: { symbol: "eth", ilk: "eth" },
  61: { symbol: "etc", ilk: "eth" },
  700: { symbol: "xdai", ilk: "eth" },
};
function Eu(t) {
  return ut(Y.from(t).toHexString(), 32);
}
function $d(t) {
  return Sf.encode(ii([t, Mt(Hd(Hd(t)), 0, 4)]));
}
const Lv = new RegExp("^(ipfs)://(.*)$", "i"),
  Yd = [
    new RegExp("^(https)://(.*)$", "i"),
    new RegExp("^(data):(.*)$", "i"),
    Lv,
    new RegExp("^eip155:[0-9]+/(erc[0-9]+):(.*)$", "i"),
  ];
function ul(t, e) {
  try {
    return ha(fs(t, e));
  } catch {}
  return null;
}
function fs(t, e) {
  if (t === "0x") return null;
  const r = Y.from(Mt(t, e, e + 32)).toNumber(),
    n = Y.from(Mt(t, r, r + 32)).toNumber();
  return Mt(t, r + 32, r + 32 + n);
}
function bu(t) {
  return (
    t.match(/^ipfs:\/\/ipfs\//i)
      ? (t = t.substring(12))
      : t.match(/^ipfs:\/\//i)
      ? (t = t.substring(7))
      : le.throwArgumentError("unsupported IPFS format", "link", t),
    `https://gateway.ipfs.io/ipfs/${t}`
  );
}
function Xd(t) {
  const e = oe(t);
  if (e.length > 32) throw new Error("internal; should not happen");
  const r = new Uint8Array(32);
  return r.set(e, 32 - e.length), r;
}
function C3(t) {
  if (t.length % 32 === 0) return t;
  const e = new Uint8Array(Math.ceil(t.length / 32) * 32);
  return e.set(t), e;
}
function Bv(t) {
  const e = [];
  let r = 0;
  for (let n = 0; n < t.length; n++) e.push(null), (r += 32);
  for (let n = 0; n < t.length; n++) {
    const i = oe(t[n]);
    (e[n] = Xd(r)),
      e.push(Xd(i.length)),
      e.push(C3(i)),
      (r += 32 + Math.ceil(i.length / 32) * 32);
  }
  return Qt(e);
}
class Zd {
  constructor(e, r, n, i) {
    ce(this, "provider", e),
      ce(this, "name", n),
      ce(this, "address", e.formatter.address(r)),
      ce(this, "_resolvedAddress", i);
  }
  supportsWildcard() {
    return (
      this._supportsEip2544 ||
        (this._supportsEip2544 = this.provider
          .call({
            to: this.address,
            data: "0x01ffc9a79061b92300000000000000000000000000000000000000000000000000000000",
          })
          .then((e) => Y.from(e).eq(1))
          .catch((e) => {
            if (e.code === B.errors.CALL_EXCEPTION) return !1;
            throw ((this._supportsEip2544 = null), e);
          })),
      this._supportsEip2544
    );
  }
  _fetch(e, r) {
    return te(this, void 0, void 0, function* () {
      const n = {
        to: this.address,
        ccipReadEnabled: !0,
        data: Qt([e, sl(this.name), r || "0x"]),
      };
      let i = !1;
      (yield this.supportsWildcard()) &&
        ((i = !0), (n.data = Qt(["0x9061b923", Bv([t2(this.name), n.data])])));
      try {
        let o = yield this.provider.call(n);
        return (
          oe(o).length % 32 === 4 &&
            le.throwError("resolver threw error", B.errors.CALL_EXCEPTION, {
              transaction: n,
              data: o,
            }),
          i && (o = fs(o, 0)),
          o
        );
      } catch (o) {
        if (o.code === B.errors.CALL_EXCEPTION) return null;
        throw o;
      }
    });
  }
  _fetchBytes(e, r) {
    return te(this, void 0, void 0, function* () {
      const n = yield this._fetch(e, r);
      return n != null ? fs(n, 0) : null;
    });
  }
  _getAddress(e, r) {
    const n = N3[String(e)];
    if (
      (n == null &&
        le.throwError(
          `unsupported coin type: ${e}`,
          B.errors.UNSUPPORTED_OPERATION,
          { operation: `getAddress(${e})` }
        ),
      n.ilk === "eth")
    )
      return this.provider.formatter.address(r);
    const i = oe(r);
    if (n.p2pkh != null) {
      const o = r.match(/^0x76a9([0-9a-f][0-9a-f])([0-9a-f]*)88ac$/);
      if (o) {
        const s = parseInt(o[1], 16);
        if (o[2].length === s * 2 && s >= 1 && s <= 75)
          return $d(ii([[n.p2pkh], "0x" + o[2]]));
      }
    }
    if (n.p2sh != null) {
      const o = r.match(/^0xa9([0-9a-f][0-9a-f])([0-9a-f]*)87$/);
      if (o) {
        const s = parseInt(o[1], 16);
        if (o[2].length === s * 2 && s >= 1 && s <= 75)
          return $d(ii([[n.p2sh], "0x" + o[2]]));
      }
    }
    if (n.prefix != null) {
      const o = i[1];
      let s = i[0];
      if (
        (s === 0 ? o !== 20 && o !== 32 && (s = -1) : (s = -1),
        s >= 0 && i.length === 2 + o && o >= 1 && o <= 75)
      ) {
        const l = qd.toWords(i.slice(2));
        return l.unshift(s), qd.encode(n.prefix, l);
      }
    }
    return null;
  }
  getAddress(e) {
    return te(this, void 0, void 0, function* () {
      if ((e == null && (e = 60), e === 60))
        try {
          const i = yield this._fetch("0x3b3b57de");
          return i === "0x" || i === kw
            ? null
            : this.provider.formatter.callAddress(i);
        } catch (i) {
          if (i.code === B.errors.CALL_EXCEPTION) return null;
          throw i;
        }
      const r = yield this._fetchBytes("0xf1cb7e06", Eu(e));
      if (r == null || r === "0x") return null;
      const n = this._getAddress(e, r);
      return (
        n == null &&
          le.throwError(
            "invalid or unsupported coin data",
            B.errors.UNSUPPORTED_OPERATION,
            { operation: `getAddress(${e})`, coinType: e, data: r }
          ),
        n
      );
    });
  }
  getAvatar() {
    return te(this, void 0, void 0, function* () {
      const e = [{ type: "name", content: this.name }];
      try {
        const r = yield this.getText("avatar");
        if (r == null) return null;
        for (let n = 0; n < Yd.length; n++) {
          const i = r.match(Yd[n]);
          if (i == null) continue;
          const o = i[1].toLowerCase();
          switch (o) {
            case "https":
              return (
                e.push({ type: "url", content: r }), { linkage: e, url: r }
              );
            case "data":
              return (
                e.push({ type: "data", content: r }), { linkage: e, url: r }
              );
            case "ipfs":
              return (
                e.push({ type: "ipfs", content: r }), { linkage: e, url: bu(r) }
              );
            case "erc721":
            case "erc1155": {
              const s = o === "erc721" ? "0xc87b56dd" : "0x0e89341c";
              e.push({ type: o, content: r });
              const l = this._resolvedAddress || (yield this.getAddress()),
                a = (i[2] || "").split("/");
              if (a.length !== 2) return null;
              const f = yield this.provider.formatter.address(a[0]),
                h = ut(Y.from(a[1]).toHexString(), 32);
              if (o === "erc721") {
                const M = this.provider.formatter.callAddress(
                  yield this.provider.call({
                    to: f,
                    data: Qt(["0x6352211e", h]),
                  })
                );
                if (l !== M) return null;
                e.push({ type: "owner", content: M });
              } else if (o === "erc1155") {
                const M = Y.from(
                  yield this.provider.call({
                    to: f,
                    data: Qt(["0x00fdd58e", ut(l, 32), h]),
                  })
                );
                if (M.isZero()) return null;
                e.push({ type: "balance", content: M.toString() });
              }
              const p = {
                to: this.provider.formatter.address(a[0]),
                data: Qt([s, h]),
              };
              let y = ul(yield this.provider.call(p), 0);
              if (y == null) return null;
              e.push({ type: "metadata-url-base", content: y }),
                o === "erc1155" &&
                  ((y = y.replace("{id}", h.substring(2))),
                  e.push({ type: "metadata-url-expanded", content: y })),
                y.match(/^ipfs:/i) && (y = bu(y)),
                e.push({ type: "metadata-url", content: y });
              const S = yield Uc(y);
              if (!S) return null;
              e.push({ type: "metadata", content: JSON.stringify(S) });
              let P = S.image;
              if (typeof P != "string") return null;
              if (!P.match(/^(https:\/\/|data:)/i)) {
                if (P.match(Lv) == null) return null;
                e.push({ type: "url-ipfs", content: P }), (P = bu(P));
              }
              return (
                e.push({ type: "url", content: P }), { linkage: e, url: P }
              );
            }
          }
        }
      } catch {}
      return null;
    });
  }
  getContentHash() {
    return te(this, void 0, void 0, function* () {
      const e = yield this._fetchBytes("0xbc1c58d1");
      if (e == null || e === "0x") return null;
      const r = e.match(
        /^0xe3010170(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
      );
      if (r) {
        const s = parseInt(r[3], 16);
        if (r[4].length === s * 2) return "ipfs://" + Sf.encode("0x" + r[1]);
      }
      const n = e.match(
        /^0xe5010172(([0-9a-f][0-9a-f])([0-9a-f][0-9a-f])([0-9a-f]*))$/
      );
      if (n) {
        const s = parseInt(n[3], 16);
        if (n[4].length === s * 2) return "ipns://" + Sf.encode("0x" + n[1]);
      }
      const i = e.match(/^0xe40101fa011b20([0-9a-f]*)$/);
      if (i && i[1].length === 32 * 2) return "bzz://" + i[1];
      const o = e.match(/^0x90b2c605([0-9a-f]*)$/);
      if (o && o[1].length === 34 * 2) {
        const s = { "=": "", "+": "-", "/": "_" };
        return "sia://" + Gm("0x" + o[1]).replace(/[=+\/]/g, (a) => s[a]);
      }
      return le.throwError(
        "invalid or unsupported content hash data",
        B.errors.UNSUPPORTED_OPERATION,
        { operation: "getContentHash()", data: e }
      );
    });
  }
  getText(e) {
    return te(this, void 0, void 0, function* () {
      let r = Zr(e);
      (r = ii([Eu(64), Eu(r.length), r])),
        r.length % 32 !== 0 && (r = ii([r, ut("0x", 32 - (e.length % 32))]));
      const n = yield this._fetchBytes("0x59d1d43c", ie(r));
      return n == null || n === "0x" ? null : ha(n);
    });
  }
}
let _u = null,
  P3 = 1;
class M3 extends Dc {
  constructor(e) {
    if (
      (super(),
      (this._events = []),
      (this._emitted = { block: -2 }),
      (this.disableCcipRead = !1),
      (this.formatter = new.target.getFormatter()),
      ce(this, "anyNetwork", e === "any"),
      this.anyNetwork && (e = this.detectNetwork()),
      e instanceof Promise)
    )
      (this._networkPromise = e),
        e.catch((r) => {}),
        this._ready().catch((r) => {});
    else {
      const r = Po(new.target, "getNetwork")(e);
      r
        ? (ce(this, "_network", r), this.emit("network", r, null))
        : le.throwArgumentError("invalid network", "network", e);
    }
    (this._maxInternalBlockNumber = -1024),
      (this._lastBlockNumber = -2),
      (this._maxFilterBlockRange = 10),
      (this._pollingInterval = 4e3),
      (this._fastQueryDate = 0);
  }
  _ready() {
    return te(this, void 0, void 0, function* () {
      if (this._network == null) {
        let e = null;
        if (this._networkPromise)
          try {
            e = yield this._networkPromise;
          } catch {}
        e == null && (e = yield this.detectNetwork()),
          e || le.throwError("no network detected", B.errors.UNKNOWN_ERROR, {}),
          this._network == null &&
            (this.anyNetwork ? (this._network = e) : ce(this, "_network", e),
            this.emit("network", e, null));
      }
      return this._network;
    });
  }
  get ready() {
    return Mo(() =>
      this._ready().then(
        (e) => e,
        (e) => {
          if (!(e.code === B.errors.NETWORK_ERROR && e.event === "noNetwork"))
            throw e;
        }
      )
    );
  }
  static getFormatter() {
    return _u == null && (_u = new J()), _u;
  }
  static getNetwork(e) {
    return Ew(e ?? "homestead");
  }
  ccipReadFetch(e, r, n) {
    return te(this, void 0, void 0, function* () {
      if (this.disableCcipRead || n.length === 0) return null;
      const i = e.to.toLowerCase(),
        o = r.toLowerCase(),
        s = [];
      for (let l = 0; l < n.length; l++) {
        const a = n[l],
          f = a.replace("{sender}", i).replace("{data}", o),
          h =
            a.indexOf("{data}") >= 0
              ? null
              : JSON.stringify({ data: o, sender: i }),
          p = yield Uc(
            { url: f, errorPassThrough: !0 },
            h,
            (S, P) => ((S.status = P.statusCode), S)
          );
        if (p.data) return p.data;
        const y = p.message || "unknown error";
        if (p.status >= 400 && p.status < 500)
          return le.throwError(
            `response not found during CCIP fetch: ${y}`,
            B.errors.SERVER_ERROR,
            { url: a, errorMessage: y }
          );
        s.push(y);
      }
      return le.throwError(
        `error encountered during CCIP fetch: ${s
          .map((l) => JSON.stringify(l))
          .join(", ")}`,
        B.errors.SERVER_ERROR,
        { urls: n, errorMessages: s }
      );
    });
  }
  _getInternalBlockNumber(e) {
    return te(this, void 0, void 0, function* () {
      if ((yield this._ready(), e > 0))
        for (; this._internalBlockNumber; ) {
          const i = this._internalBlockNumber;
          try {
            const o = yield i;
            if (bo() - o.respTime <= e) return o.blockNumber;
            break;
          } catch {
            if (this._internalBlockNumber === i) break;
          }
        }
      const r = bo(),
        n = xt({
          blockNumber: this.perform("getBlockNumber", {}),
          networkError: this.getNetwork().then(
            (i) => null,
            (i) => i
          ),
        }).then(({ blockNumber: i, networkError: o }) => {
          if (o)
            throw (
              (this._internalBlockNumber === n &&
                (this._internalBlockNumber = null),
              o)
            );
          const s = bo();
          return (
            (i = Y.from(i).toNumber()),
            i < this._maxInternalBlockNumber &&
              (i = this._maxInternalBlockNumber),
            (this._maxInternalBlockNumber = i),
            this._setFastBlockNumber(i),
            { blockNumber: i, reqTime: r, respTime: s }
          );
        });
      return (
        (this._internalBlockNumber = n),
        n.catch((i) => {
          this._internalBlockNumber === n && (this._internalBlockNumber = null);
        }),
        (yield n).blockNumber
      );
    });
  }
  poll() {
    return te(this, void 0, void 0, function* () {
      const e = P3++,
        r = [];
      let n = null;
      try {
        n = yield this._getInternalBlockNumber(100 + this.pollingInterval / 2);
      } catch (i) {
        this.emit("error", i);
        return;
      }
      if (
        (this._setFastBlockNumber(n),
        this.emit("poll", e, n),
        n === this._lastBlockNumber)
      ) {
        this.emit("didPoll", e);
        return;
      }
      if (
        (this._emitted.block === -2 && (this._emitted.block = n - 1),
        Math.abs(this._emitted.block - n) > 1e3)
      )
        le.warn(
          `network block skew detected; skipping block events (emitted=${this._emitted.block} blockNumber${n})`
        ),
          this.emit(
            "error",
            le.makeError(
              "network block skew detected",
              B.errors.NETWORK_ERROR,
              {
                blockNumber: n,
                event: "blockSkew",
                previousBlockNumber: this._emitted.block,
              }
            )
          ),
          this.emit("block", n);
      else
        for (let i = this._emitted.block + 1; i <= n; i++)
          this.emit("block", i);
      this._emitted.block !== n &&
        ((this._emitted.block = n),
        Object.keys(this._emitted).forEach((i) => {
          if (i === "block") return;
          const o = this._emitted[i];
          o !== "pending" && n - o > 12 && delete this._emitted[i];
        })),
        this._lastBlockNumber === -2 && (this._lastBlockNumber = n - 1),
        this._events.forEach((i) => {
          switch (i.type) {
            case "tx": {
              const o = i.hash;
              let s = this.getTransactionReceipt(o)
                .then(
                  (l) => (
                    !l ||
                      l.blockNumber == null ||
                      ((this._emitted["t:" + o] = l.blockNumber),
                      this.emit(o, l)),
                    null
                  )
                )
                .catch((l) => {
                  this.emit("error", l);
                });
              r.push(s);
              break;
            }
            case "filter": {
              if (!i._inflight) {
                (i._inflight = !0),
                  i._lastBlockNumber === -2 && (i._lastBlockNumber = n - 1);
                const o = i.filter;
                (o.fromBlock = i._lastBlockNumber + 1), (o.toBlock = n);
                const s = o.toBlock - this._maxFilterBlockRange;
                s > o.fromBlock && (o.fromBlock = s),
                  o.fromBlock < 0 && (o.fromBlock = 0);
                const l = this.getLogs(o)
                  .then((a) => {
                    (i._inflight = !1),
                      a.length !== 0 &&
                        a.forEach((f) => {
                          f.blockNumber > i._lastBlockNumber &&
                            (i._lastBlockNumber = f.blockNumber),
                            (this._emitted["b:" + f.blockHash] = f.blockNumber),
                            (this._emitted["t:" + f.transactionHash] =
                              f.blockNumber),
                            this.emit(o, f);
                        });
                  })
                  .catch((a) => {
                    this.emit("error", a), (i._inflight = !1);
                  });
                r.push(l);
              }
              break;
            }
          }
        }),
        (this._lastBlockNumber = n),
        Promise.all(r)
          .then(() => {
            this.emit("didPoll", e);
          })
          .catch((i) => {
            this.emit("error", i);
          });
    });
  }
  resetEventsBlock(e) {
    (this._lastBlockNumber = e - 1), this.polling && this.poll();
  }
  get network() {
    return this._network;
  }
  detectNetwork() {
    return te(this, void 0, void 0, function* () {
      return le.throwError(
        "provider does not support network detection",
        B.errors.UNSUPPORTED_OPERATION,
        { operation: "provider.detectNetwork" }
      );
    });
  }
  getNetwork() {
    return te(this, void 0, void 0, function* () {
      const e = yield this._ready(),
        r = yield this.detectNetwork();
      if (e.chainId !== r.chainId) {
        if (this.anyNetwork)
          return (
            (this._network = r),
            (this._lastBlockNumber = -2),
            (this._fastBlockNumber = null),
            (this._fastBlockNumberPromise = null),
            (this._fastQueryDate = 0),
            (this._emitted.block = -2),
            (this._maxInternalBlockNumber = -1024),
            (this._internalBlockNumber = null),
            this.emit("network", r, e),
            yield Jd(0),
            this._network
          );
        const n = le.makeError(
          "underlying network changed",
          B.errors.NETWORK_ERROR,
          { event: "changed", network: e, detectedNetwork: r }
        );
        throw (this.emit("error", n), n);
      }
      return e;
    });
  }
  get blockNumber() {
    return (
      this._getInternalBlockNumber(100 + this.pollingInterval / 2).then(
        (e) => {
          this._setFastBlockNumber(e);
        },
        (e) => {}
      ),
      this._fastBlockNumber != null ? this._fastBlockNumber : -1
    );
  }
  get polling() {
    return this._poller != null;
  }
  set polling(e) {
    e && !this._poller
      ? ((this._poller = setInterval(() => {
          this.poll();
        }, this.pollingInterval)),
        this._bootstrapPoll ||
          (this._bootstrapPoll = setTimeout(() => {
            this.poll(),
              (this._bootstrapPoll = setTimeout(() => {
                this._poller || this.poll(), (this._bootstrapPoll = null);
              }, this.pollingInterval));
          }, 0)))
      : !e &&
        this._poller &&
        (clearInterval(this._poller), (this._poller = null));
  }
  get pollingInterval() {
    return this._pollingInterval;
  }
  set pollingInterval(e) {
    if (typeof e != "number" || e <= 0 || parseInt(String(e)) != e)
      throw new Error("invalid polling interval");
    (this._pollingInterval = e),
      this._poller &&
        (clearInterval(this._poller),
        (this._poller = setInterval(() => {
          this.poll();
        }, this._pollingInterval)));
  }
  _getFastBlockNumber() {
    const e = bo();
    return (
      e - this._fastQueryDate > 2 * this._pollingInterval &&
        ((this._fastQueryDate = e),
        (this._fastBlockNumberPromise = this.getBlockNumber().then(
          (r) => (
            (this._fastBlockNumber == null || r > this._fastBlockNumber) &&
              (this._fastBlockNumber = r),
            this._fastBlockNumber
          )
        ))),
      this._fastBlockNumberPromise
    );
  }
  _setFastBlockNumber(e) {
    (this._fastBlockNumber != null && e < this._fastBlockNumber) ||
      ((this._fastQueryDate = bo()),
      (this._fastBlockNumber == null || e > this._fastBlockNumber) &&
        ((this._fastBlockNumber = e),
        (this._fastBlockNumberPromise = Promise.resolve(e))));
  }
  waitForTransaction(e, r, n) {
    return te(this, void 0, void 0, function* () {
      return this._waitForTransaction(e, r ?? 1, n || 0, null);
    });
  }
  _waitForTransaction(e, r, n, i) {
    return te(this, void 0, void 0, function* () {
      const o = yield this.getTransactionReceipt(e);
      return (o ? o.confirmations : 0) >= r
        ? o
        : new Promise((s, l) => {
            const a = [];
            let f = !1;
            const h = function () {
                return f
                  ? !0
                  : ((f = !0),
                    a.forEach((y) => {
                      y();
                    }),
                    !1);
              },
              p = (y) => {
                y.confirmations < r || h() || s(y);
              };
            if (
              (this.on(e, p),
              a.push(() => {
                this.removeListener(e, p);
              }),
              i)
            ) {
              let y = i.startBlock,
                S = null;
              const P = (M) =>
                te(this, void 0, void 0, function* () {
                  f ||
                    (yield Jd(1e3),
                    this.getTransactionCount(i.from).then(
                      (I) =>
                        te(this, void 0, void 0, function* () {
                          if (!f) {
                            if (I <= i.nonce) y = M;
                            else {
                              {
                                const w = yield this.getTransaction(e);
                                if (w && w.blockNumber != null) return;
                              }
                              for (
                                S == null &&
                                ((S = y - 3),
                                S < i.startBlock && (S = i.startBlock));
                                S <= M;

                              ) {
                                if (f) return;
                                const w = yield this.getBlockWithTransactions(
                                  S
                                );
                                for (
                                  let x = 0;
                                  x < w.transactions.length;
                                  x++
                                ) {
                                  const N = w.transactions[x];
                                  if (N.hash === e) return;
                                  if (
                                    N.from === i.from &&
                                    N.nonce === i.nonce
                                  ) {
                                    if (f) return;
                                    const T = yield this.waitForTransaction(
                                      N.hash,
                                      r
                                    );
                                    if (h()) return;
                                    let L = "replaced";
                                    N.data === i.data &&
                                    N.to === i.to &&
                                    N.value.eq(i.value)
                                      ? (L = "repriced")
                                      : N.data === "0x" &&
                                        N.from === N.to &&
                                        N.value.isZero() &&
                                        (L = "cancelled"),
                                      l(
                                        le.makeError(
                                          "transaction was replaced",
                                          B.errors.TRANSACTION_REPLACED,
                                          {
                                            cancelled:
                                              L === "replaced" ||
                                              L === "cancelled",
                                            reason: L,
                                            replacement:
                                              this._wrapTransaction(N),
                                            hash: e,
                                            receipt: T,
                                          }
                                        )
                                      );
                                    return;
                                  }
                                }
                                S++;
                              }
                            }
                            f || this.once("block", P);
                          }
                        }),
                      (I) => {
                        f || this.once("block", P);
                      }
                    ));
                });
              if (f) return;
              this.once("block", P),
                a.push(() => {
                  this.removeListener("block", P);
                });
            }
            if (typeof n == "number" && n > 0) {
              const y = setTimeout(() => {
                h() ||
                  l(
                    le.makeError("timeout exceeded", B.errors.TIMEOUT, {
                      timeout: n,
                    })
                  );
              }, n);
              y.unref && y.unref(),
                a.push(() => {
                  clearTimeout(y);
                });
            }
          });
    });
  }
  getBlockNumber() {
    return te(this, void 0, void 0, function* () {
      return this._getInternalBlockNumber(0);
    });
  }
  getGasPrice() {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const e = yield this.perform("getGasPrice", {});
      try {
        return Y.from(e);
      } catch (r) {
        return le.throwError("bad result from backend", B.errors.SERVER_ERROR, {
          method: "getGasPrice",
          result: e,
          error: r,
        });
      }
    });
  }
  getBalance(e, r) {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const n = yield xt({
          address: this._getAddress(e),
          blockTag: this._getBlockTag(r),
        }),
        i = yield this.perform("getBalance", n);
      try {
        return Y.from(i);
      } catch (o) {
        return le.throwError("bad result from backend", B.errors.SERVER_ERROR, {
          method: "getBalance",
          params: n,
          result: i,
          error: o,
        });
      }
    });
  }
  getTransactionCount(e, r) {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const n = yield xt({
          address: this._getAddress(e),
          blockTag: this._getBlockTag(r),
        }),
        i = yield this.perform("getTransactionCount", n);
      try {
        return Y.from(i).toNumber();
      } catch (o) {
        return le.throwError("bad result from backend", B.errors.SERVER_ERROR, {
          method: "getTransactionCount",
          params: n,
          result: i,
          error: o,
        });
      }
    });
  }
  getCode(e, r) {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const n = yield xt({
          address: this._getAddress(e),
          blockTag: this._getBlockTag(r),
        }),
        i = yield this.perform("getCode", n);
      try {
        return ie(i);
      } catch (o) {
        return le.throwError("bad result from backend", B.errors.SERVER_ERROR, {
          method: "getCode",
          params: n,
          result: i,
          error: o,
        });
      }
    });
  }
  getStorageAt(e, r, n) {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const i = yield xt({
          address: this._getAddress(e),
          blockTag: this._getBlockTag(n),
          position: Promise.resolve(r).then((s) => Tc(s)),
        }),
        o = yield this.perform("getStorageAt", i);
      try {
        return ie(o);
      } catch (s) {
        return le.throwError("bad result from backend", B.errors.SERVER_ERROR, {
          method: "getStorageAt",
          params: i,
          result: o,
          error: s,
        });
      }
    });
  }
  _wrapTransaction(e, r, n) {
    if (r != null && hi(r) !== 32)
      throw new Error("invalid response - sendTransaction");
    const i = e;
    return (
      r != null &&
        e.hash !== r &&
        le.throwError(
          "Transaction hash mismatch from Provider.sendTransaction.",
          B.errors.UNKNOWN_ERROR,
          { expectedHash: e.hash, returnedHash: r }
        ),
      (i.wait = (o, s) =>
        te(this, void 0, void 0, function* () {
          o == null && (o = 1), s == null && (s = 0);
          let l;
          o !== 0 &&
            n != null &&
            (l = {
              data: e.data,
              from: e.from,
              nonce: e.nonce,
              to: e.to,
              value: e.value,
              startBlock: n,
            });
          const a = yield this._waitForTransaction(e.hash, o, s, l);
          return a == null && o === 0
            ? null
            : ((this._emitted["t:" + e.hash] = a.blockNumber),
              a.status === 0 &&
                le.throwError("transaction failed", B.errors.CALL_EXCEPTION, {
                  transactionHash: e.hash,
                  transaction: e,
                  receipt: a,
                }),
              a);
        })),
      i
    );
  }
  sendTransaction(e) {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const r = yield Promise.resolve(e).then((o) => ie(o)),
        n = this.formatter.transaction(e);
      n.confirmations == null && (n.confirmations = 0);
      const i = yield this._getInternalBlockNumber(
        100 + 2 * this.pollingInterval
      );
      try {
        const o = yield this.perform("sendTransaction", {
          signedTransaction: r,
        });
        return this._wrapTransaction(n, o, i);
      } catch (o) {
        throw ((o.transaction = n), (o.transactionHash = n.hash), o);
      }
    });
  }
  _getTransactionRequest(e) {
    return te(this, void 0, void 0, function* () {
      const r = yield e,
        n = {};
      return (
        ["from", "to"].forEach((i) => {
          r[i] != null &&
            (n[i] = Promise.resolve(r[i]).then((o) =>
              o ? this._getAddress(o) : null
            ));
        }),
        [
          "gasLimit",
          "gasPrice",
          "maxFeePerGas",
          "maxPriorityFeePerGas",
          "value",
        ].forEach((i) => {
          r[i] != null &&
            (n[i] = Promise.resolve(r[i]).then((o) => (o ? Y.from(o) : null)));
        }),
        ["type"].forEach((i) => {
          r[i] != null && (n[i] = Promise.resolve(r[i]).then((o) => o ?? null));
        }),
        r.accessList &&
          (n.accessList = this.formatter.accessList(r.accessList)),
        ["data"].forEach((i) => {
          r[i] != null &&
            (n[i] = Promise.resolve(r[i]).then((o) => (o ? ie(o) : null)));
        }),
        this.formatter.transactionRequest(yield xt(n))
      );
    });
  }
  _getFilter(e) {
    return te(this, void 0, void 0, function* () {
      e = yield e;
      const r = {};
      return (
        e.address != null && (r.address = this._getAddress(e.address)),
        ["blockHash", "topics"].forEach((n) => {
          e[n] != null && (r[n] = e[n]);
        }),
        ["fromBlock", "toBlock"].forEach((n) => {
          e[n] != null && (r[n] = this._getBlockTag(e[n]));
        }),
        this.formatter.filter(yield xt(r))
      );
    });
  }
  _call(e, r, n) {
    return te(this, void 0, void 0, function* () {
      n >= b3 &&
        le.throwError(
          "CCIP read exceeded maximum redirections",
          B.errors.SERVER_ERROR,
          { redirects: n, transaction: e }
        );
      const i = e.to,
        o = yield this.perform("call", { transaction: e, blockTag: r });
      if (
        n >= 0 &&
        r === "latest" &&
        i != null &&
        o.substring(0, 10) === "0x556f1830" &&
        hi(o) % 32 === 4
      )
        try {
          const s = Mt(o, 4),
            l = Mt(s, 0, 32);
          Y.from(l).eq(i) ||
            le.throwError(
              "CCIP Read sender did not match",
              B.errors.CALL_EXCEPTION,
              {
                name: "OffchainLookup",
                signature:
                  "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                transaction: e,
                data: o,
              }
            );
          const a = [],
            f = Y.from(Mt(s, 32, 64)).toNumber(),
            h = Y.from(Mt(s, f, f + 32)).toNumber(),
            p = Mt(s, f + 32);
          for (let w = 0; w < h; w++) {
            const x = ul(p, w * 32);
            x == null &&
              le.throwError(
                "CCIP Read contained corrupt URL string",
                B.errors.CALL_EXCEPTION,
                {
                  name: "OffchainLookup",
                  signature:
                    "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                  transaction: e,
                  data: o,
                }
              ),
              a.push(x);
          }
          const y = fs(s, 64);
          Y.from(Mt(s, 100, 128)).isZero() ||
            le.throwError(
              "CCIP Read callback selector included junk",
              B.errors.CALL_EXCEPTION,
              {
                name: "OffchainLookup",
                signature:
                  "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                transaction: e,
                data: o,
              }
            );
          const S = Mt(s, 96, 100),
            P = fs(s, 128),
            M = yield this.ccipReadFetch(e, y, a);
          M == null &&
            le.throwError(
              "CCIP Read disabled or provided no URLs",
              B.errors.CALL_EXCEPTION,
              {
                name: "OffchainLookup",
                signature:
                  "OffchainLookup(address,string[],bytes,bytes4,bytes)",
                transaction: e,
                data: o,
              }
            );
          const I = { to: i, data: Qt([S, Bv([M, P])]) };
          return this._call(I, r, n + 1);
        } catch (s) {
          if (s.code === B.errors.SERVER_ERROR) throw s;
        }
      try {
        return ie(o);
      } catch (s) {
        return le.throwError("bad result from backend", B.errors.SERVER_ERROR, {
          method: "call",
          params: { transaction: e, blockTag: r },
          result: o,
          error: s,
        });
      }
    });
  }
  call(e, r) {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const n = yield xt({
        transaction: this._getTransactionRequest(e),
        blockTag: this._getBlockTag(r),
        ccipReadEnabled: Promise.resolve(e.ccipReadEnabled),
      });
      return this._call(n.transaction, n.blockTag, n.ccipReadEnabled ? 0 : -1);
    });
  }
  estimateGas(e) {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const r = yield xt({ transaction: this._getTransactionRequest(e) }),
        n = yield this.perform("estimateGas", r);
      try {
        return Y.from(n);
      } catch (i) {
        return le.throwError("bad result from backend", B.errors.SERVER_ERROR, {
          method: "estimateGas",
          params: r,
          result: n,
          error: i,
        });
      }
    });
  }
  _getAddress(e) {
    return te(this, void 0, void 0, function* () {
      (e = yield e),
        typeof e != "string" &&
          le.throwArgumentError("invalid address or ENS name", "name", e);
      const r = yield this.resolveName(e);
      return (
        r == null &&
          le.throwError(
            "ENS name not configured",
            B.errors.UNSUPPORTED_OPERATION,
            { operation: `resolveName(${JSON.stringify(e)})` }
          ),
        r
      );
    });
  }
  _getBlock(e, r) {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork(), (e = yield e);
      let n = -128;
      const i = { includeTransactions: !!r };
      if (me(e, 32)) i.blockHash = e;
      else
        try {
          (i.blockTag = yield this._getBlockTag(e)),
            me(i.blockTag) && (n = parseInt(i.blockTag.substring(2), 16));
        } catch {
          le.throwArgumentError(
            "invalid block hash or block tag",
            "blockHashOrBlockTag",
            e
          );
        }
      return Mo(
        () =>
          te(this, void 0, void 0, function* () {
            const o = yield this.perform("getBlock", i);
            if (o == null)
              return (i.blockHash != null &&
                this._emitted["b:" + i.blockHash] == null) ||
                (i.blockTag != null && n > this._emitted.block)
                ? null
                : void 0;
            if (r) {
              let s = null;
              for (let a = 0; a < o.transactions.length; a++) {
                const f = o.transactions[a];
                if (f.blockNumber == null) f.confirmations = 0;
                else if (f.confirmations == null) {
                  s == null &&
                    (s = yield this._getInternalBlockNumber(
                      100 + 2 * this.pollingInterval
                    ));
                  let h = s - f.blockNumber + 1;
                  h <= 0 && (h = 1), (f.confirmations = h);
                }
              }
              const l = this.formatter.blockWithTransactions(o);
              return (
                (l.transactions = l.transactions.map((a) =>
                  this._wrapTransaction(a)
                )),
                l
              );
            }
            return this.formatter.block(o);
          }),
        { oncePoll: this }
      );
    });
  }
  getBlock(e) {
    return this._getBlock(e, !1);
  }
  getBlockWithTransactions(e) {
    return this._getBlock(e, !0);
  }
  getTransaction(e) {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork(), (e = yield e);
      const r = { transactionHash: this.formatter.hash(e, !0) };
      return Mo(
        () =>
          te(this, void 0, void 0, function* () {
            const n = yield this.perform("getTransaction", r);
            if (n == null)
              return this._emitted["t:" + e] == null ? null : void 0;
            const i = this.formatter.transactionResponse(n);
            if (i.blockNumber == null) i.confirmations = 0;
            else if (i.confirmations == null) {
              let s =
                (yield this._getInternalBlockNumber(
                  100 + 2 * this.pollingInterval
                )) -
                i.blockNumber +
                1;
              s <= 0 && (s = 1), (i.confirmations = s);
            }
            return this._wrapTransaction(i);
          }),
        { oncePoll: this }
      );
    });
  }
  getTransactionReceipt(e) {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork(), (e = yield e);
      const r = { transactionHash: this.formatter.hash(e, !0) };
      return Mo(
        () =>
          te(this, void 0, void 0, function* () {
            const n = yield this.perform("getTransactionReceipt", r);
            if (n == null)
              return this._emitted["t:" + e] == null ? null : void 0;
            if (n.blockHash == null) return;
            const i = this.formatter.receipt(n);
            if (i.blockNumber == null) i.confirmations = 0;
            else if (i.confirmations == null) {
              let s =
                (yield this._getInternalBlockNumber(
                  100 + 2 * this.pollingInterval
                )) -
                i.blockNumber +
                1;
              s <= 0 && (s = 1), (i.confirmations = s);
            }
            return i;
          }),
        { oncePoll: this }
      );
    });
  }
  getLogs(e) {
    return te(this, void 0, void 0, function* () {
      yield this.getNetwork();
      const r = yield xt({ filter: this._getFilter(e) }),
        n = yield this.perform("getLogs", r);
      return (
        n.forEach((i) => {
          i.removed == null && (i.removed = !1);
        }),
        J.arrayOf(this.formatter.filterLog.bind(this.formatter))(n)
      );
    });
  }
  getEtherPrice() {
    return te(this, void 0, void 0, function* () {
      return yield this.getNetwork(), this.perform("getEtherPrice", {});
    });
  }
  _getBlockTag(e) {
    return te(this, void 0, void 0, function* () {
      if (((e = yield e), typeof e == "number" && e < 0)) {
        e % 1 && le.throwArgumentError("invalid BlockTag", "blockTag", e);
        let r = yield this._getInternalBlockNumber(
          100 + 2 * this.pollingInterval
        );
        return (r += e), r < 0 && (r = 0), this.formatter.blockTag(r);
      }
      return this.formatter.blockTag(e);
    });
  }
  getResolver(e) {
    return te(this, void 0, void 0, function* () {
      let r = e;
      for (;;) {
        if (r === "" || r === "." || (e !== "eth" && r === "eth")) return null;
        const n = yield this._getResolver(r, "getResolver");
        if (n != null) {
          const i = new Zd(this, n, e);
          return r !== e && !(yield i.supportsWildcard()) ? null : i;
        }
        r = r.split(".").slice(1).join(".");
      }
    });
  }
  _getResolver(e, r) {
    return te(this, void 0, void 0, function* () {
      r == null && (r = "ENS");
      const n = yield this.getNetwork();
      n.ensAddress ||
        le.throwError(
          "network does not support ENS",
          B.errors.UNSUPPORTED_OPERATION,
          { operation: r, network: n.name }
        );
      try {
        const i = yield this.call({
          to: n.ensAddress,
          data: "0x0178b8bf" + sl(e).substring(2),
        });
        return this.formatter.callAddress(i);
      } catch {}
      return null;
    });
  }
  resolveName(e) {
    return te(this, void 0, void 0, function* () {
      e = yield e;
      try {
        return Promise.resolve(this.formatter.address(e));
      } catch (n) {
        if (me(e)) throw n;
      }
      typeof e != "string" &&
        le.throwArgumentError("invalid ENS name", "name", e);
      const r = yield this.getResolver(e);
      return r ? yield r.getAddress() : null;
    });
  }
  lookupAddress(e) {
    return te(this, void 0, void 0, function* () {
      (e = yield e), (e = this.formatter.address(e));
      const r = e.substring(2).toLowerCase() + ".addr.reverse",
        n = yield this._getResolver(r, "lookupAddress");
      if (n == null) return null;
      const i = ul(
        yield this.call({ to: n, data: "0x691f3431" + sl(r).substring(2) }),
        0
      );
      return (yield this.resolveName(i)) != e ? null : i;
    });
  }
  getAvatar(e) {
    return te(this, void 0, void 0, function* () {
      let r = null;
      if (me(e)) {
        const o =
            this.formatter.address(e).substring(2).toLowerCase() +
            ".addr.reverse",
          s = yield this._getResolver(o, "getAvatar");
        if (!s) return null;
        r = new Zd(this, s, o);
        try {
          const l = yield r.getAvatar();
          if (l) return l.url;
        } catch (l) {
          if (l.code !== B.errors.CALL_EXCEPTION) throw l;
        }
        try {
          const l = ul(
            yield this.call({ to: s, data: "0x691f3431" + sl(o).substring(2) }),
            0
          );
          r = yield this.getResolver(l);
        } catch (l) {
          if (l.code !== B.errors.CALL_EXCEPTION) throw l;
          return null;
        }
      } else if (((r = yield this.getResolver(e)), !r)) return null;
      const n = yield r.getAvatar();
      return n == null ? null : n.url;
    });
  }
  perform(e, r) {
    return le.throwError(e + " not implemented", B.errors.NOT_IMPLEMENTED, {
      operation: e,
    });
  }
  _startEvent(e) {
    this.polling = this._events.filter((r) => r.pollable()).length > 0;
  }
  _stopEvent(e) {
    this.polling = this._events.filter((r) => r.pollable()).length > 0;
  }
  _addEventListener(e, r, n) {
    const i = new S3(Ei(e), r, n);
    return this._events.push(i), this._startEvent(i), this;
  }
  on(e, r) {
    return this._addEventListener(e, r, !1);
  }
  once(e, r) {
    return this._addEventListener(e, r, !0);
  }
  emit(e, ...r) {
    let n = !1,
      i = [],
      o = Ei(e);
    return (
      (this._events = this._events.filter((s) =>
        s.tag !== o
          ? !0
          : (setTimeout(() => {
              s.listener.apply(this, r);
            }, 0),
            (n = !0),
            s.once ? (i.push(s), !1) : !0)
      )),
      i.forEach((s) => {
        this._stopEvent(s);
      }),
      n
    );
  }
  listenerCount(e) {
    if (!e) return this._events.length;
    let r = Ei(e);
    return this._events.filter((n) => n.tag === r).length;
  }
  listeners(e) {
    if (e == null) return this._events.map((n) => n.listener);
    let r = Ei(e);
    return this._events.filter((n) => n.tag === r).map((n) => n.listener);
  }
  off(e, r) {
    if (r == null) return this.removeAllListeners(e);
    const n = [];
    let i = !1,
      o = Ei(e);
    return (
      (this._events = this._events.filter((s) =>
        s.tag !== o || s.listener != r || i ? !0 : ((i = !0), n.push(s), !1)
      )),
      n.forEach((s) => {
        this._stopEvent(s);
      }),
      this
    );
  }
  removeAllListeners(e) {
    let r = [];
    if (e == null) (r = this._events), (this._events = []);
    else {
      const n = Ei(e);
      this._events = this._events.filter((i) =>
        i.tag !== n ? !0 : (r.push(i), !1)
      );
    }
    return (
      r.forEach((n) => {
        this._stopEvent(n);
      }),
      this
    );
  }
}
const R3 = "abstract-signer/5.7.0";
var cr =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, r, n) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (s) {
            s(o);
          });
    }
    return new (r || (r = Promise))(function (o, s) {
      function l(h) {
        try {
          f(n.next(h));
        } catch (p) {
          s(p);
        }
      }
      function a(h) {
        try {
          f(n.throw(h));
        } catch (p) {
          s(p);
        }
      }
      function f(h) {
        h.done ? o(h.value) : i(h.value).then(l, a);
      }
      f((n = n.apply(t, e || [])).next());
    });
  };
const hr = new B(R3),
  I3 = [
    "accessList",
    "ccipReadEnabled",
    "chainId",
    "customData",
    "data",
    "from",
    "gasLimit",
    "gasPrice",
    "maxFeePerGas",
    "maxPriorityFeePerGas",
    "nonce",
    "to",
    "type",
    "value",
  ],
  T3 = [
    B.errors.INSUFFICIENT_FUNDS,
    B.errors.NONCE_EXPIRED,
    B.errors.REPLACEMENT_UNDERPRICED,
  ];
class Wc {
  constructor() {
    hr.checkAbstract(new.target, Wc), ce(this, "_isSigner", !0);
  }
  getBalance(e) {
    return cr(this, void 0, void 0, function* () {
      return (
        this._checkProvider("getBalance"),
        yield this.provider.getBalance(this.getAddress(), e)
      );
    });
  }
  getTransactionCount(e) {
    return cr(this, void 0, void 0, function* () {
      return (
        this._checkProvider("getTransactionCount"),
        yield this.provider.getTransactionCount(this.getAddress(), e)
      );
    });
  }
  estimateGas(e) {
    return cr(this, void 0, void 0, function* () {
      this._checkProvider("estimateGas");
      const r = yield xt(this.checkTransaction(e));
      return yield this.provider.estimateGas(r);
    });
  }
  call(e, r) {
    return cr(this, void 0, void 0, function* () {
      this._checkProvider("call");
      const n = yield xt(this.checkTransaction(e));
      return yield this.provider.call(n, r);
    });
  }
  sendTransaction(e) {
    return cr(this, void 0, void 0, function* () {
      this._checkProvider("sendTransaction");
      const r = yield this.populateTransaction(e),
        n = yield this.signTransaction(r);
      return yield this.provider.sendTransaction(n);
    });
  }
  getChainId() {
    return cr(this, void 0, void 0, function* () {
      return (
        this._checkProvider("getChainId"),
        (yield this.provider.getNetwork()).chainId
      );
    });
  }
  getGasPrice() {
    return cr(this, void 0, void 0, function* () {
      return (
        this._checkProvider("getGasPrice"), yield this.provider.getGasPrice()
      );
    });
  }
  getFeeData() {
    return cr(this, void 0, void 0, function* () {
      return (
        this._checkProvider("getFeeData"), yield this.provider.getFeeData()
      );
    });
  }
  resolveName(e) {
    return cr(this, void 0, void 0, function* () {
      return (
        this._checkProvider("resolveName"), yield this.provider.resolveName(e)
      );
    });
  }
  checkTransaction(e) {
    for (const n in e)
      I3.indexOf(n) === -1 &&
        hr.throwArgumentError(
          "invalid transaction key: " + n,
          "transaction",
          e
        );
    const r = Dt(e);
    return (
      r.from == null
        ? (r.from = this.getAddress())
        : (r.from = Promise.all([
            Promise.resolve(r.from),
            this.getAddress(),
          ]).then(
            (n) => (
              n[0].toLowerCase() !== n[1].toLowerCase() &&
                hr.throwArgumentError(
                  "from address mismatch",
                  "transaction",
                  e
                ),
              n[0]
            )
          )),
      r
    );
  }
  populateTransaction(e) {
    return cr(this, void 0, void 0, function* () {
      const r = yield xt(this.checkTransaction(e));
      r.to != null &&
        ((r.to = Promise.resolve(r.to).then((i) =>
          cr(this, void 0, void 0, function* () {
            if (i == null) return null;
            const o = yield this.resolveName(i);
            return (
              o == null &&
                hr.throwArgumentError(
                  "provided ENS name resolves to null",
                  "tx.to",
                  i
                ),
              o
            );
          })
        )),
        r.to.catch((i) => {}));
      const n = r.maxFeePerGas != null || r.maxPriorityFeePerGas != null;
      if (
        (r.gasPrice != null && (r.type === 2 || n)
          ? hr.throwArgumentError(
              "eip-1559 transaction do not support gasPrice",
              "transaction",
              e
            )
          : (r.type === 0 || r.type === 1) &&
            n &&
            hr.throwArgumentError(
              "pre-eip-1559 transaction do not support maxFeePerGas/maxPriorityFeePerGas",
              "transaction",
              e
            ),
        (r.type === 2 || r.type == null) &&
          r.maxFeePerGas != null &&
          r.maxPriorityFeePerGas != null)
      )
        r.type = 2;
      else if (r.type === 0 || r.type === 1)
        r.gasPrice == null && (r.gasPrice = this.getGasPrice());
      else {
        const i = yield this.getFeeData();
        if (r.type == null)
          if (i.maxFeePerGas != null && i.maxPriorityFeePerGas != null)
            if (((r.type = 2), r.gasPrice != null)) {
              const o = r.gasPrice;
              delete r.gasPrice,
                (r.maxFeePerGas = o),
                (r.maxPriorityFeePerGas = o);
            } else
              r.maxFeePerGas == null && (r.maxFeePerGas = i.maxFeePerGas),
                r.maxPriorityFeePerGas == null &&
                  (r.maxPriorityFeePerGas = i.maxPriorityFeePerGas);
          else
            i.gasPrice != null
              ? (n &&
                  hr.throwError(
                    "network does not support EIP-1559",
                    B.errors.UNSUPPORTED_OPERATION,
                    { operation: "populateTransaction" }
                  ),
                r.gasPrice == null && (r.gasPrice = i.gasPrice),
                (r.type = 0))
              : hr.throwError(
                  "failed to get consistent fee data",
                  B.errors.UNSUPPORTED_OPERATION,
                  { operation: "signer.getFeeData" }
                );
        else
          r.type === 2 &&
            (r.maxFeePerGas == null && (r.maxFeePerGas = i.maxFeePerGas),
            r.maxPriorityFeePerGas == null &&
              (r.maxPriorityFeePerGas = i.maxPriorityFeePerGas));
      }
      return (
        r.nonce == null && (r.nonce = this.getTransactionCount("pending")),
        r.gasLimit == null &&
          (r.gasLimit = this.estimateGas(r).catch((i) => {
            if (T3.indexOf(i.code) >= 0) throw i;
            return hr.throwError(
              "cannot estimate gas; transaction may fail or may require manual gas limit",
              B.errors.UNPREDICTABLE_GAS_LIMIT,
              { error: i, tx: r }
            );
          })),
        r.chainId == null
          ? (r.chainId = this.getChainId())
          : (r.chainId = Promise.all([
              Promise.resolve(r.chainId),
              this.getChainId(),
            ]).then(
              (i) => (
                i[1] !== 0 &&
                  i[0] !== i[1] &&
                  hr.throwArgumentError(
                    "chainId address mismatch",
                    "transaction",
                    e
                  ),
                i[0]
              )
            )),
        yield xt(r)
      );
    });
  }
  _checkProvider(e) {
    this.provider ||
      hr.throwError("missing provider", B.errors.UNSUPPORTED_OPERATION, {
        operation: e || "_checkProvider",
      });
  }
  static isSigner(e) {
    return !!(e && e._isSigner);
  }
}
var Gr =
  (globalThis && globalThis.__awaiter) ||
  function (t, e, r, n) {
    function i(o) {
      return o instanceof r
        ? o
        : new r(function (s) {
            s(o);
          });
    }
    return new (r || (r = Promise))(function (o, s) {
      function l(h) {
        try {
          f(n.next(h));
        } catch (p) {
          s(p);
        }
      }
      function a(h) {
        try {
          f(n.throw(h));
        } catch (p) {
          s(p);
        }
      }
      function f(h) {
        h.done ? o(h.value) : i(h.value).then(l, a);
      }
      f((n = n.apply(t, e || [])).next());
    });
  };
const st = new B(ga),
  O3 = ["call", "estimateGas"];
function Uo(t, e) {
  if (t == null) return null;
  if (typeof t.message == "string" && t.message.match("reverted")) {
    const r = me(t.data) ? t.data : null;
    if (!e || r) return { message: t.message, data: r };
  }
  if (typeof t == "object") {
    for (const r in t) {
      const n = Uo(t[r], e);
      if (n) return n;
    }
    return null;
  }
  if (typeof t == "string")
    try {
      return Uo(JSON.parse(t), e);
    } catch {}
  return null;
}
function Dv(t, e, r) {
  const n = r.transaction || r.signedTransaction;
  if (t === "call") {
    const o = Uo(e, !0);
    if (o) return o.data;
    st.throwError(
      "missing revert data in call exception; Transaction reverted without a reason string",
      B.errors.CALL_EXCEPTION,
      { data: "0x", transaction: n, error: e }
    );
  }
  if (t === "estimateGas") {
    let o = Uo(e.body, !1);
    o == null && (o = Uo(e, !1)),
      o &&
        st.throwError(
          "cannot estimate gas; transaction may fail or may require manual gas limit",
          B.errors.UNPREDICTABLE_GAS_LIMIT,
          { reason: o.message, method: t, transaction: n, error: e }
        );
  }
  let i = e.message;
  throw (
    (e.code === B.errors.SERVER_ERROR &&
    e.error &&
    typeof e.error.message == "string"
      ? (i = e.error.message)
      : typeof e.body == "string"
      ? (i = e.body)
      : typeof e.responseText == "string" && (i = e.responseText),
    (i = (i || "").toLowerCase()),
    i.match(
      /insufficient funds|base fee exceeds gas limit|InsufficientFunds/i
    ) &&
      st.throwError(
        "insufficient funds for intrinsic transaction cost",
        B.errors.INSUFFICIENT_FUNDS,
        { error: e, method: t, transaction: n }
      ),
    i.match(/nonce (is )?too low/i) &&
      st.throwError("nonce has already been used", B.errors.NONCE_EXPIRED, {
        error: e,
        method: t,
        transaction: n,
      }),
    i.match(
      /replacement transaction underpriced|transaction gas price.*too low/i
    ) &&
      st.throwError(
        "replacement fee too low",
        B.errors.REPLACEMENT_UNDERPRICED,
        { error: e, method: t, transaction: n }
      ),
    i.match(/only replay-protected/i) &&
      st.throwError(
        "legacy pre-eip-155 transactions not supported",
        B.errors.UNSUPPORTED_OPERATION,
        { error: e, method: t, transaction: n }
      ),
    O3.indexOf(t) >= 0 &&
      i.match(
        /gas required exceeds allowance|always failing transaction|execution reverted|revert/
      ) &&
      st.throwError(
        "cannot estimate gas; transaction may fail or may require manual gas limit",
        B.errors.UNPREDICTABLE_GAS_LIMIT,
        { error: e, method: t, transaction: n }
      ),
    e)
  );
}
function e0(t) {
  return new Promise(function (e) {
    setTimeout(e, t);
  });
}
function L3(t) {
  if (t.error) {
    const e = new Error(t.error.message);
    throw ((e.code = t.error.code), (e.data = t.error.data), e);
  }
  return t.result;
}
function _o(t) {
  return t && t.toLowerCase();
}
const Tf = {};
class Fv extends Wc {
  constructor(e, r, n) {
    if ((super(), e !== Tf))
      throw new Error(
        "do not call the JsonRpcSigner constructor directly; use provider.getSigner"
      );
    ce(this, "provider", r),
      n == null && (n = 0),
      typeof n == "string"
        ? (ce(this, "_address", this.provider.formatter.address(n)),
          ce(this, "_index", null))
        : typeof n == "number"
        ? (ce(this, "_index", n), ce(this, "_address", null))
        : st.throwArgumentError(
            "invalid address or index",
            "addressOrIndex",
            n
          );
  }
  connect(e) {
    return st.throwError(
      "cannot alter JSON-RPC Signer connection",
      B.errors.UNSUPPORTED_OPERATION,
      { operation: "connect" }
    );
  }
  connectUnchecked() {
    return new B3(Tf, this.provider, this._address || this._index);
  }
  getAddress() {
    return this._address
      ? Promise.resolve(this._address)
      : this.provider
          .send("eth_accounts", [])
          .then(
            (e) => (
              e.length <= this._index &&
                st.throwError(
                  "unknown account #" + this._index,
                  B.errors.UNSUPPORTED_OPERATION,
                  { operation: "getAddress" }
                ),
              this.provider.formatter.address(e[this._index])
            )
          );
  }
  sendUncheckedTransaction(e) {
    e = Dt(e);
    const r = this.getAddress().then((n) => (n && (n = n.toLowerCase()), n));
    if (e.gasLimit == null) {
      const n = Dt(e);
      (n.from = r), (e.gasLimit = this.provider.estimateGas(n));
    }
    return (
      e.to != null &&
        (e.to = Promise.resolve(e.to).then((n) =>
          Gr(this, void 0, void 0, function* () {
            if (n == null) return null;
            const i = yield this.provider.resolveName(n);
            return (
              i == null &&
                st.throwArgumentError(
                  "provided ENS name resolves to null",
                  "tx.to",
                  n
                ),
              i
            );
          })
        )),
      xt({ tx: xt(e), sender: r }).then(({ tx: n, sender: i }) => {
        n.from != null
          ? n.from.toLowerCase() !== i &&
            st.throwArgumentError("from address mismatch", "transaction", e)
          : (n.from = i);
        const o = this.provider.constructor.hexlifyTransaction(n, { from: !0 });
        return this.provider.send("eth_sendTransaction", [o]).then(
          (s) => s,
          (s) => (
            typeof s.message == "string" &&
              s.message.match(/user denied/i) &&
              st.throwError(
                "user rejected transaction",
                B.errors.ACTION_REJECTED,
                { action: "sendTransaction", transaction: n }
              ),
            Dv("sendTransaction", s, o)
          )
        );
      })
    );
  }
  signTransaction(e) {
    return st.throwError(
      "signing transactions is unsupported",
      B.errors.UNSUPPORTED_OPERATION,
      { operation: "signTransaction" }
    );
  }
  sendTransaction(e) {
    return Gr(this, void 0, void 0, function* () {
      const r = yield this.provider._getInternalBlockNumber(
          100 + 2 * this.provider.pollingInterval
        ),
        n = yield this.sendUncheckedTransaction(e);
      try {
        return yield Mo(
          () =>
            Gr(this, void 0, void 0, function* () {
              const i = yield this.provider.getTransaction(n);
              if (i !== null) return this.provider._wrapTransaction(i, n, r);
            }),
          { oncePoll: this.provider }
        );
      } catch (i) {
        throw ((i.transactionHash = n), i);
      }
    });
  }
  signMessage(e) {
    return Gr(this, void 0, void 0, function* () {
      const r = typeof e == "string" ? Zr(e) : e,
        n = yield this.getAddress();
      try {
        return yield this.provider.send("personal_sign", [
          ie(r),
          n.toLowerCase(),
        ]);
      } catch (i) {
        throw (
          (typeof i.message == "string" &&
            i.message.match(/user denied/i) &&
            st.throwError("user rejected signing", B.errors.ACTION_REJECTED, {
              action: "signMessage",
              from: n,
              messageData: e,
            }),
          i)
        );
      }
    });
  }
  _legacySignMessage(e) {
    return Gr(this, void 0, void 0, function* () {
      const r = typeof e == "string" ? Zr(e) : e,
        n = yield this.getAddress();
      try {
        return yield this.provider.send("eth_sign", [n.toLowerCase(), ie(r)]);
      } catch (i) {
        throw (
          (typeof i.message == "string" &&
            i.message.match(/user denied/i) &&
            st.throwError("user rejected signing", B.errors.ACTION_REJECTED, {
              action: "_legacySignMessage",
              from: n,
              messageData: e,
            }),
          i)
        );
      }
    });
  }
  _signTypedData(e, r, n) {
    return Gr(this, void 0, void 0, function* () {
      const i = yield Ht.resolveNames(e, r, n, (s) =>
          this.provider.resolveName(s)
        ),
        o = yield this.getAddress();
      try {
        return yield this.provider.send("eth_signTypedData_v4", [
          o.toLowerCase(),
          JSON.stringify(Ht.getPayload(i.domain, r, i.value)),
        ]);
      } catch (s) {
        throw (
          (typeof s.message == "string" &&
            s.message.match(/user denied/i) &&
            st.throwError("user rejected signing", B.errors.ACTION_REJECTED, {
              action: "_signTypedData",
              from: o,
              messageData: { domain: i.domain, types: r, value: i.value },
            }),
          s)
        );
      }
    });
  }
  unlock(e) {
    return Gr(this, void 0, void 0, function* () {
      const r = this.provider,
        n = yield this.getAddress();
      return r.send("personal_unlockAccount", [n.toLowerCase(), e, null]);
    });
  }
}
class B3 extends Fv {
  sendTransaction(e) {
    return this.sendUncheckedTransaction(e).then((r) => ({
      hash: r,
      nonce: null,
      gasLimit: null,
      gasPrice: null,
      data: null,
      value: null,
      chainId: null,
      confirmations: 0,
      from: null,
      wait: (n) => this.provider.waitForTransaction(r, n),
    }));
  }
}
const D3 = {
  chainId: !0,
  data: !0,
  gasLimit: !0,
  gasPrice: !0,
  nonce: !0,
  to: !0,
  value: !0,
  type: !0,
  accessList: !0,
  maxFeePerGas: !0,
  maxPriorityFeePerGas: !0,
};
class F3 extends M3 {
  constructor(e, r) {
    let n = r;
    n == null &&
      (n = new Promise((i, o) => {
        setTimeout(() => {
          this.detectNetwork().then(
            (s) => {
              i(s);
            },
            (s) => {
              o(s);
            }
          );
        }, 0);
      })),
      super(n),
      e || (e = Po(this.constructor, "defaultUrl")()),
      typeof e == "string"
        ? ce(this, "connection", Object.freeze({ url: e }))
        : ce(this, "connection", Object.freeze(Dt(e))),
      (this._nextId = 42);
  }
  get _cache() {
    return (
      this._eventLoopCache == null && (this._eventLoopCache = {}),
      this._eventLoopCache
    );
  }
  static defaultUrl() {
    return "http://localhost:8545";
  }
  detectNetwork() {
    return (
      this._cache.detectNetwork ||
        ((this._cache.detectNetwork = this._uncachedDetectNetwork()),
        setTimeout(() => {
          this._cache.detectNetwork = null;
        }, 0)),
      this._cache.detectNetwork
    );
  }
  _uncachedDetectNetwork() {
    return Gr(this, void 0, void 0, function* () {
      yield e0(0);
      let e = null;
      try {
        e = yield this.send("eth_chainId", []);
      } catch {
        try {
          e = yield this.send("net_version", []);
        } catch {}
      }
      if (e != null) {
        const r = Po(this.constructor, "getNetwork");
        try {
          return r(Y.from(e).toNumber());
        } catch (n) {
          return st.throwError(
            "could not detect network",
            B.errors.NETWORK_ERROR,
            { chainId: e, event: "invalidNetwork", serverError: n }
          );
        }
      }
      return st.throwError("could not detect network", B.errors.NETWORK_ERROR, {
        event: "noNetwork",
      });
    });
  }
  getSigner(e) {
    return new Fv(Tf, this, e);
  }
  getUncheckedSigner(e) {
    return this.getSigner(e).connectUnchecked();
  }
  listAccounts() {
    return this.send("eth_accounts", []).then((e) =>
      e.map((r) => this.formatter.address(r))
    );
  }
  send(e, r) {
    const n = { method: e, params: r, id: this._nextId++, jsonrpc: "2.0" };
    this.emit("debug", { action: "request", request: di(n), provider: this });
    const i = ["eth_chainId", "eth_blockNumber"].indexOf(e) >= 0;
    if (i && this._cache[e]) return this._cache[e];
    const o = Uc(this.connection, JSON.stringify(n), L3).then(
      (s) => (
        this.emit("debug", {
          action: "response",
          request: n,
          response: s,
          provider: this,
        }),
        s
      ),
      (s) => {
        throw (
          (this.emit("debug", {
            action: "response",
            error: s,
            request: n,
            provider: this,
          }),
          s)
        );
      }
    );
    return (
      i &&
        ((this._cache[e] = o),
        setTimeout(() => {
          this._cache[e] = null;
        }, 0)),
      o
    );
  }
  prepareRequest(e, r) {
    switch (e) {
      case "getBlockNumber":
        return ["eth_blockNumber", []];
      case "getGasPrice":
        return ["eth_gasPrice", []];
      case "getBalance":
        return ["eth_getBalance", [_o(r.address), r.blockTag]];
      case "getTransactionCount":
        return ["eth_getTransactionCount", [_o(r.address), r.blockTag]];
      case "getCode":
        return ["eth_getCode", [_o(r.address), r.blockTag]];
      case "getStorageAt":
        return [
          "eth_getStorageAt",
          [_o(r.address), ut(r.position, 32), r.blockTag],
        ];
      case "sendTransaction":
        return ["eth_sendRawTransaction", [r.signedTransaction]];
      case "getBlock":
        return r.blockTag
          ? ["eth_getBlockByNumber", [r.blockTag, !!r.includeTransactions]]
          : r.blockHash
          ? ["eth_getBlockByHash", [r.blockHash, !!r.includeTransactions]]
          : null;
      case "getTransaction":
        return ["eth_getTransactionByHash", [r.transactionHash]];
      case "getTransactionReceipt":
        return ["eth_getTransactionReceipt", [r.transactionHash]];
      case "call":
        return [
          "eth_call",
          [
            Po(this.constructor, "hexlifyTransaction")(r.transaction, {
              from: !0,
            }),
            r.blockTag,
          ],
        ];
      case "estimateGas":
        return [
          "eth_estimateGas",
          [
            Po(this.constructor, "hexlifyTransaction")(r.transaction, {
              from: !0,
            }),
          ],
        ];
      case "getLogs":
        return (
          r.filter &&
            r.filter.address != null &&
            (r.filter.address = _o(r.filter.address)),
          ["eth_getLogs", [r.filter]]
        );
    }
    return null;
  }
  perform(e, r) {
    return Gr(this, void 0, void 0, function* () {
      if (e === "call" || e === "estimateGas") {
        const i = r.transaction;
        if (
          i &&
          i.type != null &&
          Y.from(i.type).isZero() &&
          i.maxFeePerGas == null &&
          i.maxPriorityFeePerGas == null
        ) {
          const o = yield this.getFeeData();
          o.maxFeePerGas == null &&
            o.maxPriorityFeePerGas == null &&
            ((r = Dt(r)), (r.transaction = Dt(i)), delete r.transaction.type);
        }
      }
      const n = this.prepareRequest(e, r);
      n == null &&
        st.throwError(e + " not implemented", B.errors.NOT_IMPLEMENTED, {
          operation: e,
        });
      try {
        return yield this.send(n[0], n[1]);
      } catch (i) {
        return Dv(e, i, r);
      }
    });
  }
  _startEvent(e) {
    e.tag === "pending" && this._startPending(), super._startEvent(e);
  }
  _startPending() {
    if (this._pendingFilter != null) return;
    const e = this,
      r = this.send("eth_newPendingTransactionFilter", []);
    (this._pendingFilter = r),
      r
        .then(function (n) {
          function i() {
            e.send("eth_getFilterChanges", [n])
              .then(function (o) {
                if (e._pendingFilter != r) return null;
                let s = Promise.resolve();
                return (
                  o.forEach(function (l) {
                    (e._emitted["t:" + l.toLowerCase()] = "pending"),
                      (s = s.then(function () {
                        return e.getTransaction(l).then(function (a) {
                          return e.emit("pending", a), null;
                        });
                      }));
                  }),
                  s.then(function () {
                    return e0(1e3);
                  })
                );
              })
              .then(function () {
                if (e._pendingFilter != r) {
                  e.send("eth_uninstallFilter", [n]);
                  return;
                }
                return (
                  setTimeout(function () {
                    i();
                  }, 0),
                  null
                );
              })
              .catch((o) => {});
          }
          return i(), n;
        })
        .catch((n) => {});
  }
  _stopEvent(e) {
    e.tag === "pending" &&
      this.listenerCount("pending") === 0 &&
      (this._pendingFilter = null),
      super._stopEvent(e);
  }
  static hexlifyTransaction(e, r) {
    const n = Dt(D3);
    if (r) for (const o in r) r[o] && (n[o] = !0);
    hw(e, n);
    const i = {};
    return (
      [
        "chainId",
        "gasLimit",
        "gasPrice",
        "type",
        "maxFeePerGas",
        "maxPriorityFeePerGas",
        "nonce",
        "value",
      ].forEach(function (o) {
        if (e[o] == null) return;
        const s = Tc(Y.from(e[o]));
        o === "gasLimit" && (o = "gas"), (i[o] = s);
      }),
      ["from", "to", "data"].forEach(function (o) {
        e[o] != null && (i[o] = ie(e[o]));
      }),
      e.accessList && (i.accessList = ws(e.accessList)),
      i
    );
  }
}
const t0 = new B(ga);
let j3 = 1;
function r0(t, e) {
  const r = "Web3LegacyFetcher";
  return function (n, i) {
    const o = { method: n, params: i, id: j3++, jsonrpc: "2.0" };
    return new Promise((s, l) => {
      this.emit("debug", {
        action: "request",
        fetcher: r,
        request: di(o),
        provider: this,
      }),
        e(o, (a, f) => {
          if (a)
            return (
              this.emit("debug", {
                action: "response",
                fetcher: r,
                error: a,
                request: o,
                provider: this,
              }),
              l(a)
            );
          if (
            (this.emit("debug", {
              action: "response",
              fetcher: r,
              request: o,
              response: f,
              provider: this,
            }),
            f.error)
          ) {
            const h = new Error(f.error.message);
            return (h.code = f.error.code), (h.data = f.error.data), l(h);
          }
          s(f.result);
        });
    });
  };
}
function U3(t) {
  return function (e, r) {
    r == null && (r = []);
    const n = { method: e, params: r };
    return (
      this.emit("debug", {
        action: "request",
        fetcher: "Eip1193Fetcher",
        request: di(n),
        provider: this,
      }),
      t.request(n).then(
        (i) => (
          this.emit("debug", {
            action: "response",
            fetcher: "Eip1193Fetcher",
            request: n,
            response: i,
            provider: this,
          }),
          i
        ),
        (i) => {
          throw (
            (this.emit("debug", {
              action: "response",
              fetcher: "Eip1193Fetcher",
              request: n,
              error: i,
              provider: this,
            }),
            i)
          );
        }
      )
    );
  };
}
class z3 extends F3 {
  constructor(e, r) {
    e == null && t0.throwArgumentError("missing provider", "provider", e);
    let n = null,
      i = null,
      o = null;
    typeof e == "function"
      ? ((n = "unknown:"), (i = e))
      : ((n = e.host || e.path || ""),
        !n && e.isMetaMask && (n = "metamask"),
        (o = e),
        e.request
          ? (n === "" && (n = "eip-1193:"), (i = U3(e)))
          : e.sendAsync
          ? (i = r0(e, e.sendAsync.bind(e)))
          : e.send
          ? (i = r0(e, e.send.bind(e)))
          : t0.throwArgumentError("unsupported provider", "provider", e),
        n || (n = "unknown:")),
      super(n, r),
      ce(this, "jsonRpcFetchFunc", i),
      ce(this, "provider", o);
  }
  send(e, r) {
    return this.jsonRpcFetchFunc(e, r);
  }
}
function H3(t) {
  return new z3(t);
}
ku.createRoot(document.getElementById("root")).render(
  _.jsx(Ff.StrictMode, {
    children: _.jsx(ux, {
      children: _.jsx(Nx, { getLibrary: H3, children: _.jsx(nw, {}) }),
    }),
  })
);
