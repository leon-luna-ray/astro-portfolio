import client from '@sanity/client';
/* empty css                          */
import { c as createAstro, d as createComponent, r as renderTemplate, e as addAttribute, f as renderComponent, g as renderHead, h as renderSlot, m as maybeRenderHead } from '../astro_SQXIztTb.mjs';
import 'kleur/colors';
import 'html-escaper';
import 'clsx';
import { useSSRContext, mergeProps, defineComponent } from 'vue';
import { ssrRenderAttrs, ssrRenderAttr, ssrRenderComponent, ssrInterpolate } from 'vue/server-renderer';

const sanityClient = client({"projectId":"bepi633k","dataset":"production","apiVersion":"2023-04-16","useCdn":true});

globalThis.sanityClient = sanityClient;

var on = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
function Te(t) {
  return t && t.__esModule && Object.prototype.hasOwnProperty.call(t, "default") ? t.default : t;
}
var Qe = { exports: {} };
(function(t, e) {
  (function(r, n) {
    t.exports = n();
  })(on, function() {
    function r() {
      return r = Object.assign || function(l) {
        for (var c = 1; c < arguments.length; c++) {
          var p = arguments[c];
          for (var f in p)
            Object.prototype.hasOwnProperty.call(p, f) && (l[f] = p[f]);
        }
        return l;
      }, r.apply(this, arguments);
    }
    function n(l, c) {
      if (l) {
        if (typeof l == "string")
          return i(l, c);
        var p = Object.prototype.toString.call(l).slice(8, -1);
        if (p === "Object" && l.constructor && (p = l.constructor.name), p === "Map" || p === "Set")
          return Array.from(l);
        if (p === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(p))
          return i(l, c);
      }
    }
    function i(l, c) {
      (c == null || c > l.length) && (c = l.length);
      for (var p = 0, f = new Array(c); p < c; p++)
        f[p] = l[p];
      return f;
    }
    function s(l, c) {
      var p = typeof Symbol < "u" && l[Symbol.iterator] || l["@@iterator"];
      if (p)
        return (p = p.call(l)).next.bind(p);
      if (Array.isArray(l) || (p = n(l)) || c && l && typeof l.length == "number") {
        p && (l = p);
        var f = 0;
        return function() {
          return f >= l.length ? {
            done: !0
          } : {
            done: !1,
            value: l[f++]
          };
        };
      }
      throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`);
    }
    var o = "image-Tb9Ew8CXIwaY6R1kjMvI0uRR-2000x3000-jpg";
    function u(l) {
      var c = l.split("-"), p = c[1], f = c[2], O = c[3];
      if (!p || !f || !O)
        throw new Error("Malformed asset _ref '" + l + `'. Expected an id like "` + o + '".');
      var b = f.split("x"), S = b[0], M = b[1], q = +S, F = +M, $ = isFinite(q) && isFinite(F);
      if (!$)
        throw new Error("Malformed asset _ref '" + l + `'. Expected an id like "` + o + '".');
      return {
        id: p,
        width: q,
        height: F,
        format: O
      };
    }
    var d = function(c) {
      var p = c;
      return p ? typeof p._ref == "string" : !1;
    }, g = function(c) {
      var p = c;
      return p ? typeof p._id == "string" : !1;
    }, a = function(c) {
      var p = c;
      return p && p.asset ? typeof p.asset.url == "string" : !1;
    };
    function h(l) {
      if (!l)
        return null;
      var c;
      if (typeof l == "string" && y(l))
        c = {
          asset: {
            _ref: w(l)
          }
        };
      else if (typeof l == "string")
        c = {
          asset: {
            _ref: l
          }
        };
      else if (d(l))
        c = {
          asset: l
        };
      else if (g(l))
        c = {
          asset: {
            _ref: l._id || ""
          }
        };
      else if (a(l))
        c = {
          asset: {
            _ref: w(l.asset.url)
          }
        };
      else if (typeof l.asset == "object")
        c = r({}, l);
      else
        return null;
      var p = l;
      return p.crop && (c.crop = p.crop), p.hotspot && (c.hotspot = p.hotspot), C(c);
    }
    function y(l) {
      return /^https?:\/\//.test("" + l);
    }
    function w(l) {
      var c = l.split("/").slice(-1);
      return ("image-" + c[0]).replace(/\.([a-z]+)$/, "-$1");
    }
    function C(l) {
      if (l.crop && l.hotspot)
        return l;
      var c = r({}, l);
      return c.crop || (c.crop = {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      }), c.hotspot || (c.hotspot = {
        x: 0.5,
        y: 0.5,
        height: 1,
        width: 1
      }), c;
    }
    var m = [["width", "w"], ["height", "h"], ["format", "fm"], ["download", "dl"], ["blur", "blur"], ["sharpen", "sharp"], ["invert", "invert"], ["orientation", "or"], ["minHeight", "min-h"], ["maxHeight", "max-h"], ["minWidth", "min-w"], ["maxWidth", "max-w"], ["quality", "q"], ["fit", "fit"], ["crop", "crop"], ["saturation", "sat"], ["auto", "auto"], ["dpr", "dpr"], ["pad", "pad"]];
    function v(l) {
      var c = r({}, l || {}), p = c.source;
      delete c.source;
      var f = h(p);
      if (!f)
        throw new Error("Unable to resolve image URL from source (" + JSON.stringify(p) + ")");
      var O = f.asset._ref || f.asset._id || "", b = u(O), S = Math.round(f.crop.left * b.width), M = Math.round(f.crop.top * b.height), q = {
        left: S,
        top: M,
        width: Math.round(b.width - f.crop.right * b.width - S),
        height: Math.round(b.height - f.crop.bottom * b.height - M)
      }, F = f.hotspot.height * b.height / 2, $ = f.hotspot.width * b.width / 2, H = f.hotspot.x * b.width, J = f.hotspot.y * b.height, D = {
        left: H - $,
        top: J - F,
        right: H + $,
        bottom: J + F
      };
      return c.rect || c.focalPoint || c.ignoreImageParams || c.crop || (c = r({}, c, k({
        crop: q,
        hotspot: D
      }, c))), E(r({}, c, {
        asset: b
      }));
    }
    function E(l) {
      var c = (l.baseUrl || "https://cdn.sanity.io").replace(/\/+$/, ""), p = l.asset.id + "-" + l.asset.width + "x" + l.asset.height + "." + l.asset.format, f = c + "/images/" + l.projectId + "/" + l.dataset + "/" + p, O = [];
      if (l.rect) {
        var b = l.rect, S = b.left, M = b.top, q = b.width, F = b.height, $ = S !== 0 || M !== 0 || F !== l.asset.height || q !== l.asset.width;
        $ && O.push("rect=" + S + "," + M + "," + q + "," + F);
      }
      l.bg && O.push("bg=" + l.bg), l.focalPoint && (O.push("fp-x=" + l.focalPoint.x), O.push("fp-y=" + l.focalPoint.y));
      var H = [l.flipHorizontal && "h", l.flipVertical && "v"].filter(Boolean).join("");
      return H && O.push("flip=" + H), m.forEach(function(J) {
        var D = J[0], Y = J[1];
        typeof l[D] < "u" ? O.push(Y + "=" + encodeURIComponent(l[D])) : typeof l[Y] < "u" && O.push(Y + "=" + encodeURIComponent(l[Y]));
      }), O.length === 0 ? f : f + "?" + O.join("&");
    }
    function k(l, c) {
      var p, f = c.width, O = c.height;
      if (!(f && O))
        return {
          width: f,
          height: O,
          rect: l.crop
        };
      var b = l.crop, S = l.hotspot, M = f / O, q = b.width / b.height;
      if (q > M) {
        var F = Math.round(b.height), $ = Math.round(F * M), H = Math.max(0, Math.round(b.top)), J = Math.round((S.right - S.left) / 2 + S.left), D = Math.max(0, Math.round(J - $ / 2));
        D < b.left ? D = b.left : D + $ > b.left + b.width && (D = b.left + b.width - $), p = {
          left: D,
          top: H,
          width: $,
          height: F
        };
      } else {
        var Y = b.width, Mt = Math.round(Y / M), nn = Math.max(0, Math.round(b.left)), sn = Math.round((S.bottom - S.top) / 2 + S.top), mt = Math.max(0, Math.round(sn - Mt / 2));
        mt < b.top ? mt = b.top : mt + Mt > b.top + b.height && (mt = b.top + b.height - Mt), p = {
          left: nn,
          top: mt,
          width: Y,
          height: Mt
        };
      }
      return {
        width: f,
        height: O,
        rect: p
      };
    }
    var T = ["clip", "crop", "fill", "fillmax", "max", "scale", "min"], x = ["top", "bottom", "left", "right", "center", "focalpoint", "entropy"], W = ["format"];
    function B(l) {
      return l && "config" in l ? typeof l.config == "function" : !1;
    }
    function G(l) {
      return l && "clientConfig" in l ? typeof l.clientConfig == "object" : !1;
    }
    function st(l) {
      for (var c = m, p = s(c), f; !(f = p()).done; ) {
        var O = f.value, b = O[0], S = O[1];
        if (l === b || l === S)
          return b;
      }
      return l;
    }
    function ot(l) {
      if (B(l)) {
        var c = l.config(), p = c.apiHost, f = c.projectId, O = c.dataset, b = p || "https://api.sanity.io";
        return new yt(null, {
          baseUrl: b.replace(/^https:\/\/api\./, "https://cdn."),
          projectId: f,
          dataset: O
        });
      }
      var S = l;
      if (G(S)) {
        var M = S.clientConfig, q = M.apiHost, F = M.projectId, $ = M.dataset, H = q || "https://api.sanity.io";
        return new yt(null, {
          baseUrl: H.replace(/^https:\/\/api\./, "https://cdn."),
          projectId: F,
          dataset: $
        });
      }
      return new yt(null, l);
    }
    var yt = /* @__PURE__ */ function() {
      function l(p, f) {
        this.options = void 0, this.options = p ? r({}, p.options || {}, f || {}) : r({}, f || {});
      }
      var c = l.prototype;
      return c.withOptions = function(f) {
        var O = f.baseUrl || this.options.baseUrl, b = {
          baseUrl: O
        };
        for (var S in f)
          if (f.hasOwnProperty(S)) {
            var M = st(S);
            b[M] = f[S];
          }
        return new l(this, r({
          baseUrl: O
        }, b));
      }, c.image = function(f) {
        return this.withOptions({
          source: f
        });
      }, c.dataset = function(f) {
        return this.withOptions({
          dataset: f
        });
      }, c.projectId = function(f) {
        return this.withOptions({
          projectId: f
        });
      }, c.bg = function(f) {
        return this.withOptions({
          bg: f
        });
      }, c.dpr = function(f) {
        return this.withOptions(f && f !== 1 ? {
          dpr: f
        } : {});
      }, c.width = function(f) {
        return this.withOptions({
          width: f
        });
      }, c.height = function(f) {
        return this.withOptions({
          height: f
        });
      }, c.focalPoint = function(f, O) {
        return this.withOptions({
          focalPoint: {
            x: f,
            y: O
          }
        });
      }, c.maxWidth = function(f) {
        return this.withOptions({
          maxWidth: f
        });
      }, c.minWidth = function(f) {
        return this.withOptions({
          minWidth: f
        });
      }, c.maxHeight = function(f) {
        return this.withOptions({
          maxHeight: f
        });
      }, c.minHeight = function(f) {
        return this.withOptions({
          minHeight: f
        });
      }, c.size = function(f, O) {
        return this.withOptions({
          width: f,
          height: O
        });
      }, c.blur = function(f) {
        return this.withOptions({
          blur: f
        });
      }, c.sharpen = function(f) {
        return this.withOptions({
          sharpen: f
        });
      }, c.rect = function(f, O, b, S) {
        return this.withOptions({
          rect: {
            left: f,
            top: O,
            width: b,
            height: S
          }
        });
      }, c.format = function(f) {
        return this.withOptions({
          format: f
        });
      }, c.invert = function(f) {
        return this.withOptions({
          invert: f
        });
      }, c.orientation = function(f) {
        return this.withOptions({
          orientation: f
        });
      }, c.quality = function(f) {
        return this.withOptions({
          quality: f
        });
      }, c.forceDownload = function(f) {
        return this.withOptions({
          download: f
        });
      }, c.flipHorizontal = function() {
        return this.withOptions({
          flipHorizontal: !0
        });
      }, c.flipVertical = function() {
        return this.withOptions({
          flipVertical: !0
        });
      }, c.ignoreImageParams = function() {
        return this.withOptions({
          ignoreImageParams: !0
        });
      }, c.fit = function(f) {
        if (T.indexOf(f) === -1)
          throw new Error('Invalid fit mode "' + f + '"');
        return this.withOptions({
          fit: f
        });
      }, c.crop = function(f) {
        if (x.indexOf(f) === -1)
          throw new Error('Invalid crop mode "' + f + '"');
        return this.withOptions({
          crop: f
        });
      }, c.saturation = function(f) {
        return this.withOptions({
          saturation: f
        });
      }, c.auto = function(f) {
        if (W.indexOf(f) === -1)
          throw new Error('Invalid auto mode "' + f + '"');
        return this.withOptions({
          auto: f
        });
      }, c.pad = function(f) {
        return this.withOptions({
          pad: f
        });
      }, c.url = function() {
        return v(this.options);
      }, c.toString = function() {
        return this.url();
      }, l;
    }();
    return ot;
  });
})(Qe);
var an = Qe.exports;
const cn = /* @__PURE__ */ Te(an);
function ks(t) {
  return cn(t);
}
function Fe(t, e) {
  var r = Object.keys(t);
  if (Object.getOwnPropertySymbols) {
    var n = Object.getOwnPropertySymbols(t);
    e && (n = n.filter(function(i) {
      return Object.getOwnPropertyDescriptor(t, i).enumerable;
    })), r.push.apply(r, n);
  }
  return r;
}
function $e(t) {
  for (var e = 1; e < arguments.length; e++) {
    var r = arguments[e] != null ? arguments[e] : {};
    e % 2 ? Fe(Object(r), !0).forEach(function(n) {
      un(t, n, r[n]);
    }) : Object.getOwnPropertyDescriptors ? Object.defineProperties(t, Object.getOwnPropertyDescriptors(r)) : Fe(Object(r)).forEach(function(n) {
      Object.defineProperty(t, n, Object.getOwnPropertyDescriptor(r, n));
    });
  }
  return t;
}
function un(t, e, r) {
  return e in t ? Object.defineProperty(t, e, { value: r, enumerable: !0, configurable: !0, writable: !0 }) : t[e] = r, t;
}
function Vt(t) {
  return t._type === "span" && "text" in t && typeof t.text == "string" && (t.marks === void 0 || Array.isArray(t.marks) && t.marks.every((e) => typeof e == "string"));
}
function Ze(t) {
  return typeof t._type == "string" && t._type[0] !== "@" && (!("markDefs" in t) || Array.isArray(t.markDefs) && t.markDefs.every((e) => typeof e._key == "string")) && "children" in t && Array.isArray(t.children) && t.children.every((e) => typeof e == "object" && "_type" in e);
}
function tr(t) {
  return Ze(t) && "listItem" in t && typeof t.listItem == "string" && (t.level === void 0 || typeof t.level == "number");
}
function er(t) {
  return t._type === "@list";
}
function rr(t) {
  return t._type === "@span";
}
function nr(t) {
  return t._type === "@text";
}
const qe = ["strong", "em", "code", "underline", "strike-through"];
function ln(t, e, r) {
  if (!Vt(t) || !t.marks)
    return [];
  if (!t.marks.length)
    return [];
  const n = t.marks.slice(), i = {};
  return n.forEach((s) => {
    i[s] = 1;
    for (let o = e + 1; o < r.length; o++) {
      const u = r[o];
      if (!(u && Vt(u) && Array.isArray(u.marks) && u.marks.indexOf(s) !== -1))
        break;
      i[s]++;
    }
  }), n.sort((s, o) => function(u, d, g) {
    const a = u[d], h = u[g];
    if (a !== h)
      return h - a;
    const y = qe.indexOf(d), w = qe.indexOf(g);
    return y !== w ? y - w : d.localeCompare(g);
  }(i, s, o));
}
function fn(t) {
  var e;
  const { children: r, markDefs: n = [] } = t;
  if (!r || !r.length)
    return [];
  const i = r.map(ln), s = { _type: "@span", children: [], markType: "<unknown>" };
  let o = [s];
  for (let u = 0; u < r.length; u++) {
    const d = r[u];
    if (!d)
      continue;
    const g = i[u] || [];
    let a = 1;
    if (o.length > 1)
      for (; a < o.length; a++) {
        const y = ((e = o[a]) == null ? void 0 : e.markKey) || "", w = g.indexOf(y);
        if (w === -1)
          break;
        g.splice(w, 1);
      }
    o = o.slice(0, a);
    let h = o[o.length - 1];
    if (h) {
      for (const y of g) {
        const w = n.find((v) => v._key === y), C = w ? w._type : y, m = { _type: "@span", _key: d._key, children: [], markDef: w, markType: C, markKey: y };
        h.children.push(m), o.push(m), h = m;
      }
      if (Vt(d)) {
        const y = d.text.split(`
`);
        for (let w = y.length; w-- > 1; )
          y.splice(w, 0, `
`);
        h.children = h.children.concat(y.map((w) => ({ _type: "@text", text: w })));
      } else
        h.children = h.children.concat(d);
    }
  }
  return s.children;
}
function hn(t, e) {
  const r = [];
  let n;
  for (let i = 0; i < t.length; i++) {
    const s = t[i];
    if (s)
      if (tr(s))
        if (n)
          if (dn(s, n))
            n.children.push(s);
          else if ((s.level || 1) > n.level) {
            const o = Rt(s, i, e);
            if (e === "html") {
              const u = n.children[n.children.length - 1], d = $e($e({}, u), {}, { children: [...u.children, o] });
              n.children[n.children.length - 1] = d;
            } else
              n.children.push(o);
            n = o;
          } else if ((s.level || 1) < n.level) {
            const o = r[r.length - 1], u = o && me(o, s);
            if (u) {
              n = u, n.children.push(s);
              continue;
            }
            n = Rt(s, i, e), r.push(n);
          } else if (s.listItem === n.listItem)
            console.warn("Unknown state encountered for block", s), r.push(s);
          else {
            const o = r[r.length - 1], u = o && me(o, { level: s.level || 1 });
            if (u && u.listItem === s.listItem) {
              n = u, n.children.push(s);
              continue;
            }
            n = Rt(s, i, e), r.push(n);
          }
        else
          n = Rt(s, i, e), r.push(n);
      else
        r.push(s), n = void 0;
  }
  return r;
}
function dn(t, e) {
  return (t.level || 1) === e.level && t.listItem === e.listItem;
}
function Rt(t, e, r) {
  return { _type: "@list", _key: "".concat(t._key || "".concat(e), "-parent"), mode: r, level: t.level || 1, listItem: t.listItem, children: [t] };
}
function me(t, e) {
  const r = e.level || 1, n = e.listItem || "normal", i = typeof e.listItem == "string";
  if (er(t) && (t.level || 1) === r && i && (t.listItem || "normal") === n)
    return t;
  if (!("children" in t))
    return;
  const s = t.children[t.children.length - 1];
  return s && !Vt(s) ? me(s, e) : void 0;
}
function ir(t) {
  let e = "";
  return t.children.forEach((r) => {
    nr(r) ? e += r.text : rr(r) && (e += ir(r));
  }), e;
}
var pn = Object.defineProperty, gn = Object.defineProperties, yn = Object.getOwnPropertyDescriptors, Gt = Object.getOwnPropertySymbols, sr = Object.prototype.hasOwnProperty, or = Object.prototype.propertyIsEnumerable, je = (t, e, r) => e in t ? pn(t, e, { enumerable: !0, configurable: !0, writable: !0, value: r }) : t[e] = r, pt = (t, e) => {
  for (var r in e || (e = {}))
    sr.call(e, r) && je(t, r, e[r]);
  if (Gt)
    for (var r of Gt(e))
      or.call(e, r) && je(t, r, e[r]);
  return t;
}, ve = (t, e) => gn(t, yn(e)), we = (t, e) => {
  var r = {};
  for (var n in t)
    sr.call(t, n) && e.indexOf(n) < 0 && (r[n] = t[n]);
  if (t != null && Gt)
    for (var n of Gt(t))
      e.indexOf(n) < 0 && or.call(t, n) && (r[n] = t[n]);
  return r;
};
const mn = ["http", "https", "mailto", "tel"], vn = {
  "&": "amp",
  "<": "lt",
  ">": "gt",
  '"': "quot",
  "'": "#x27"
};
function ar(t) {
  return t.replace(/[&<>"']/g, (e) => `&${vn[e]};`);
}
function wn(t) {
  const e = (t || "").trim(), r = e.charAt(0);
  if (r === "#" || r === "/")
    return !0;
  const n = e.indexOf(":");
  if (n === -1)
    return !0;
  const i = e.slice(0, n).toLowerCase();
  if (mn.indexOf(i) !== -1)
    return !0;
  const s = e.indexOf("?");
  if (s !== -1 && n > s)
    return !0;
  const o = e.indexOf("#");
  return o !== -1 && n > o;
}
const bn = ({ children: t, value: e }) => {
  const r = (e == null ? void 0 : e.href) || "";
  return wn(r) ? `<a href="${ar(r)}">${t}</a>` : t;
}, Cn = {
  em: ({ children: t }) => `<em>${t}</em>`,
  strong: ({ children: t }) => `<strong>${t}</strong>`,
  code: ({ children: t }) => `<code>${t}</code>`,
  underline: ({ children: t }) => `<span style="text-decoration:underline">${t}</span>`,
  "strike-through": ({ children: t }) => `<del>${t}</del>`,
  link: bn
}, _n = {
  number: ({ children: t }) => `<ol>${t}</ol>`,
  bullet: ({ children: t }) => `<ul>${t}</ul>`
}, On = ({ children: t }) => `<li>${t}</li>`, xt = (t, e) => `Unknown ${t}, specify a component for it in the \`components.${e}\` option`, cr = (t) => xt(`block type "${t}"`, "types"), En = (t) => xt(`mark type "${t}"`, "marks"), kn = (t) => xt(`block style "${t}"`, "block"), Sn = (t) => xt(`list style "${t}"`, "list"), Tn = (t) => xt(`list item style "${t}"`, "listItem");
function xn(t) {
  console.warn(t);
}
const In = ({
  value: t,
  isInline: e
}) => {
  const r = cr(t._type);
  return e ? `<span style="display:none">${r}</span>` : `<div style="display:none">${r}</div>`;
}, An = ({
  markType: t,
  children: e
}) => `<span class="unknown__pt__mark__${t}">${e}</span>`, Pn = ({
  children: t
}) => `<p>${t}</p>`, Mn = ({ children: t }) => `<ul>${t}</ul>`, Rn = ({
  children: t
}) => `<li>${t}</li>`, Fn = () => "<br/>", $n = {
  normal: ({ children: t }) => `<p>${t}</p>`,
  blockquote: ({ children: t }) => `<blockquote>${t}</blockquote>`,
  h1: ({ children: t }) => `<h1>${t}</h1>`,
  h2: ({ children: t }) => `<h2>${t}</h2>`,
  h3: ({ children: t }) => `<h3>${t}</h3>`,
  h4: ({ children: t }) => `<h4>${t}</h4>`,
  h5: ({ children: t }) => `<h5>${t}</h5>`,
  h6: ({ children: t }) => `<h6>${t}</h6>`
}, De = {
  types: {},
  block: $n,
  marks: Cn,
  list: _n,
  listItem: On,
  hardBreak: Fn,
  unknownType: In,
  unknownMark: An,
  unknownList: Mn,
  unknownListItem: Rn,
  unknownBlockStyle: Pn
};
function qn(t, e) {
  const r = e, n = we(r, ["block", "list", "listItem", "marks", "types"]);
  return pt(ve(pt({}, t), {
    block: vt(t, e, "block"),
    list: vt(t, e, "list"),
    listItem: vt(t, e, "listItem"),
    marks: vt(t, e, "marks"),
    types: vt(t, e, "types")
  }), n);
}
function vt(t, e, r) {
  const n = e[r], i = t[r];
  return typeof n == "function" || n && typeof i == "function" ? n : n ? pt(pt({}, i), n) : i;
}
function jn(t, e = {}) {
  const {
    components: r,
    onMissingComponent: n = xn
  } = e, i = n || Un, s = Array.isArray(t) ? t : [t], o = hn(s, "html"), u = r ? qn(De, r) : De, d = Dn(u, i);
  return o.map((a, h) => d({ node: a, index: h, isInline: !1, renderNode: d })).join("");
}
const Dn = (t, e) => {
  function r(g) {
    const { node: a, index: h, isInline: y } = g;
    return er(a) ? i(a, h) : tr(a) ? n(a, h) : rr(a) ? s(a) : Ze(a) ? o(a, h, y) : nr(a) ? u(a) : d(a, h, y);
  }
  function n(g, a) {
    const h = Ue({ node: g, index: a, isInline: !1, renderNode: r }), y = t.listItem, C = (typeof y == "function" ? y : y[g.listItem]) || t.unknownListItem;
    if (C === t.unknownListItem) {
      const v = g.listItem || "bullet";
      e(Tn(v), {
        type: v,
        nodeType: "listItemStyle"
      });
    }
    let m = h.children;
    if (g.style && g.style !== "normal") {
      const v = g, E = we(v, ["listItem"]);
      m = r({ node: E, index: a, isInline: !1, renderNode: r });
    }
    return C({ value: g, index: a, isInline: !1, renderNode: r, children: m });
  }
  function i(g, a) {
    const h = g.children.map((m, v) => r({
      node: m._key ? m : ve(pt({}, m), { _key: `li-${a}-${v}` }),
      index: a,
      isInline: !1,
      renderNode: r
    })), y = t.list, C = (typeof y == "function" ? y : y[g.listItem]) || t.unknownList;
    if (C === t.unknownList) {
      const m = g.listItem || "bullet";
      e(Sn(m), { nodeType: "listStyle", type: m });
    }
    return C({ value: g, index: a, isInline: !1, renderNode: r, children: h.join("") });
  }
  function s(g) {
    const { markDef: a, markType: h, markKey: y } = g, w = t.marks[h] || t.unknownMark, C = g.children.map((m, v) => r({ node: m, index: v, isInline: !0, renderNode: r }));
    return w === t.unknownMark && e(En(h), { nodeType: "mark", type: h }), w({
      text: ir(g),
      value: a,
      markType: h,
      markKey: y,
      renderNode: r,
      children: C.join("")
    });
  }
  function o(g, a, h) {
    const y = Ue({ node: g, index: a, isInline: h, renderNode: r }), w = we(y, ["_key"]), C = w.node.style || "normal", v = (typeof t.block == "function" ? t.block : t.block[C]) || t.unknownBlockStyle;
    return v === t.unknownBlockStyle && e(kn(C), {
      nodeType: "blockStyle",
      type: C
    }), v(ve(pt({}, w), { value: w.node, renderNode: r }));
  }
  function u(g) {
    if (g.text === `
`) {
      const a = t.hardBreak;
      return a ? a() : `
`;
    }
    return ar(g.text);
  }
  function d(g, a, h) {
    const y = t.types[g._type];
    return y || e(cr(g._type), {
      nodeType: "block",
      type: g._type
    }), (y || t.unknownType)({
      value: g,
      isInline: h,
      index: a,
      renderNode: r
    });
  }
  return r;
};
function Ue(t) {
  const { node: e, index: r, isInline: n, renderNode: i } = t, o = fn(e).map((u, d) => i({ node: u, isInline: !0, index: d, renderNode: i }));
  return {
    _key: e._key || `block-${r}`,
    children: o.join(""),
    index: r,
    isInline: n,
    node: e
  };
}
function Un() {
}
function Ss(t, e = {}) {
  return jn(t, { components: e });
}
const Ln = typeof navigator > "u" ? !1 : navigator.product === "ReactNative", be = {
  timeout: Ln ? 6e4 : 12e4
};
function Wn(t) {
  const e = typeof t == "string" ? Object.assign({
    url: t
  }, be) : Object.assign({}, be, t), r = new URL(e.url, "http://localhost");
  if (e.timeout = ur(e.timeout), e.query) {
    for (const [n, i] of Object.entries(e.query))
      if (i !== void 0)
        if (Array.isArray(i))
          for (const s of i)
            r.searchParams.append(n, s);
        else
          r.searchParams.append(n, i);
  }
  return e.method = e.body && !e.method ? "POST" : (e.method || "GET").toUpperCase(), e.url = r.origin === "http://localhost" ? "".concat(r.pathname, "?").concat(r.searchParams) : r.toString(), e;
}
function ur(t) {
  if (t === !1 || t === 0)
    return !1;
  if (t.connect || t.socket)
    return t;
  const e = Number(t);
  return isNaN(e) ? ur(be.timeout) : {
    connect: e,
    socket: e
  };
}
const Hn = /^https?:\/\//i;
function Bn(t) {
  if (!Hn.test(t.url))
    throw new Error('"'.concat(t.url, '" is not a valid URL'));
}
var he = function(t) {
  return t.replace(/^\s+|\s+$/g, "");
}, zn = function(t) {
  return Object.prototype.toString.call(t) === "[object Array]";
}, Nn = function(t) {
  if (!t)
    return {};
  for (var e = {}, r = he(t).split(`
`), n = 0; n < r.length; n++) {
    var i = r[n], s = i.indexOf(":"), o = he(i.slice(0, s)).toLowerCase(), u = he(i.slice(s + 1));
    typeof e[o] > "u" ? e[o] = u : zn(e[o]) ? e[o].push(u) : e[o] = [e[o], u];
  }
  return e;
};
const Vn = /* @__PURE__ */ Te(Nn);
var Gn = (t) => function(r, n) {
  const i = r === "onError";
  let s = n;
  for (var o = arguments.length, u = new Array(o > 2 ? o - 2 : 0), d = 2; d < o; d++)
    u[d - 2] = arguments[d];
  for (let g = 0; g < t[r].length; g++) {
    const a = t[r][g];
    if (s = a(s, ...u), i && !s)
      break;
  }
  return s;
};
function Jn() {
  const t = /* @__PURE__ */ Object.create(null);
  let e = 0;
  function r(i) {
    const s = e++;
    return t[s] = i, function() {
      delete t[s];
    };
  }
  function n(i) {
    for (const s in t)
      t[s](i);
  }
  return {
    publish: n,
    subscribe: r
  };
}
const Yn = ["request", "response", "progress", "error", "abort"], Le = ["processOptions", "validateOptions", "interceptRequest", "finalizeOptions", "onRequest", "onResponse", "onError", "onReturn", "onHeaders"];
function lr(t, e) {
  const r = [], n = Le.reduce((s, o) => (s[o] = s[o] || [], s), {
    processOptions: [Wn],
    validateOptions: [Bn]
  });
  function i(s) {
    const o = Yn.reduce((C, m) => (C[m] = Jn(), C), {}), u = Gn(n), d = u("processOptions", s);
    u("validateOptions", d);
    const g = {
      options: d,
      channels: o,
      applyMiddleware: u
    };
    let a = null;
    const h = o.request.subscribe((C) => {
      a = e(C, (m, v) => w(m, v, C));
    });
    o.abort.subscribe(() => {
      h(), a && a.abort();
    });
    const y = u("onReturn", o, g);
    return y === o && o.request.publish(g), y;
    function w(C, m, v) {
      let E = C, k = m;
      if (!E)
        try {
          k = u("onResponse", m, v);
        } catch (T) {
          k = null, E = T;
        }
      E = E && u("onError", E, v), E ? o.error.publish(E) : k && o.response.publish(k);
    }
  }
  return i.use = function(o) {
    if (!o)
      throw new Error("Tried to add middleware that resolved to falsey value");
    if (typeof o == "function")
      throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");
    if (o.onReturn && n.onReturn.length > 0)
      throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");
    return Le.forEach((u) => {
      o[u] && n[u].push(o[u]);
    }), r.push(o), i;
  }, i.clone = function() {
    return lr(r, e);
  }, t.forEach(i.use), i;
}
var fr = (t, e, r) => {
  if (!e.has(t))
    throw TypeError("Cannot " + r);
}, U = (t, e, r) => (fr(t, e, "read from private field"), r ? r.call(t) : e.get(t)), wt = (t, e, r) => {
  if (e.has(t))
    throw TypeError("Cannot add the same private member more than once");
  e instanceof WeakSet ? e.add(t) : e.set(t, r);
}, at = (t, e, r, n) => (fr(t, e, "write to private field"), n ? n.call(t, r) : e.set(t, r), r), $t, qt, ct, jt, z;
class Xn {
  constructor() {
    this.readyState = 0, this.responseType = "", wt(this, $t, void 0), wt(this, qt, void 0), wt(this, ct, void 0), wt(this, jt, {}), wt(this, z, void 0);
  }
  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- _async is only declared for typings compatibility
  open(e, r, n) {
    at(this, $t, e), at(this, qt, r), at(this, ct, ""), this.readyState = 1, this.onreadystatechange(), at(this, z, void 0);
  }
  abort() {
    U(this, z) && U(this, z).abort();
  }
  getAllResponseHeaders() {
    return U(this, ct);
  }
  setRequestHeader(e, r) {
    U(this, jt)[e] = r;
  }
  send(e) {
    const r = this.responseType !== "arraybuffer", n = {
      method: U(this, $t),
      headers: U(this, jt),
      body: e
    };
    typeof AbortController == "function" && (at(this, z, new AbortController()), typeof EventTarget < "u" && U(this, z).signal instanceof EventTarget && (n.signal = U(this, z).signal)), typeof document < "u" && (n.credentials = this.withCredentials ? "include" : "omit"), fetch(U(this, qt), n).then((i) => (i.headers.forEach((s, o) => {
      at(this, ct, U(this, ct) + "".concat(o, ": ").concat(s, `\r
`));
    }), this.status = i.status, this.statusText = i.statusText, this.readyState = 3, r ? i.text() : i.arrayBuffer())).then((i) => {
      typeof i == "string" ? this.responseText = i : this.response = i, this.readyState = 4, this.onreadystatechange();
    }).catch((i) => {
      var s;
      if (i.name === "AbortError") {
        this.onabort();
        return;
      }
      (s = this.onerror) == null || s.call(this, i);
    });
  }
}
$t = /* @__PURE__ */ new WeakMap();
qt = /* @__PURE__ */ new WeakMap();
ct = /* @__PURE__ */ new WeakMap();
jt = /* @__PURE__ */ new WeakMap();
z = /* @__PURE__ */ new WeakMap();
const Ce = typeof XMLHttpRequest == "function" ? "xhr" : "fetch", Kn = Ce === "xhr" ? XMLHttpRequest : Xn;
var Qn = (t, e) => {
  const r = t.options, n = t.applyMiddleware("finalizeOptions", r), i = {}, s = t.applyMiddleware("interceptRequest", void 0, {
    adapter: Ce,
    context: t
  });
  if (s) {
    const T = setTimeout(e, 0, null, s);
    return {
      abort: () => clearTimeout(T)
    };
  }
  let o = new Kn();
  const u = n.headers, d = n.timeout;
  let g = !1, a = !1, h = !1;
  if (o.onerror = v, o.ontimeout = v, o.onabort = () => {
    m(!0), g = !0;
  }, o.onreadystatechange = () => {
    C(), !(g || o.readyState !== 4) && o.status !== 0 && k();
  }, o.open(
    n.method,
    n.url,
    !0
    // Always async
  ), o.withCredentials = !!n.withCredentials, u && o.setRequestHeader)
    for (const T in u)
      u.hasOwnProperty(T) && o.setRequestHeader(T, u[T]);
  return n.rawBody && (o.responseType = "arraybuffer"), t.applyMiddleware("onRequest", {
    options: n,
    adapter: Ce,
    request: o,
    context: t
  }), o.send(n.body || null), d && (i.connect = setTimeout(() => w("ETIMEDOUT"), d.connect)), {
    abort: y
  };
  function y() {
    g = !0, o && o.abort();
  }
  function w(T) {
    h = !0, o.abort();
    const x = new Error(T === "ESOCKETTIMEDOUT" ? "Socket timed out on request to ".concat(n.url) : "Connection timed out on request to ".concat(n.url));
    x.code = T, t.channels.error.publish(x);
  }
  function C() {
    d && (m(), i.socket = setTimeout(() => w("ESOCKETTIMEDOUT"), d.socket));
  }
  function m(T) {
    (T || g || o.readyState >= 2 && i.connect) && clearTimeout(i.connect), i.socket && clearTimeout(i.socket);
  }
  function v(T) {
    if (a)
      return;
    m(!0), a = !0, o = null;
    const x = T || new Error("Network error while attempting to reach ".concat(n.url));
    x.isNetworkError = !0, x.request = n, e(x);
  }
  function E() {
    return {
      body: o.response || (o.responseType === "" || o.responseType === "text" ? o.responseText : ""),
      url: n.url,
      method: n.method,
      headers: Vn(o.getAllResponseHeaders()),
      statusCode: o.status,
      statusMessage: o.statusText
    };
  }
  function k() {
    if (!(g || a || h)) {
      if (o.status === 0) {
        v(new Error("Unknown XHR error"));
        return;
      }
      m(), a = !0, e(null, E());
    }
  }
};
const Zn = function() {
  let t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : [], e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : Qn;
  return lr(t, e);
};
var We = { exports: {} }, de, He;
function ti() {
  if (He)
    return de;
  He = 1;
  var t = 1e3, e = t * 60, r = e * 60, n = r * 24, i = n * 7, s = n * 365.25;
  de = function(a, h) {
    h = h || {};
    var y = typeof a;
    if (y === "string" && a.length > 0)
      return o(a);
    if (y === "number" && isFinite(a))
      return h.long ? d(a) : u(a);
    throw new Error(
      "val is not a non-empty string or a valid number. val=" + JSON.stringify(a)
    );
  };
  function o(a) {
    if (a = String(a), !(a.length > 100)) {
      var h = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
        a
      );
      if (h) {
        var y = parseFloat(h[1]), w = (h[2] || "ms").toLowerCase();
        switch (w) {
          case "years":
          case "year":
          case "yrs":
          case "yr":
          case "y":
            return y * s;
          case "weeks":
          case "week":
          case "w":
            return y * i;
          case "days":
          case "day":
          case "d":
            return y * n;
          case "hours":
          case "hour":
          case "hrs":
          case "hr":
          case "h":
            return y * r;
          case "minutes":
          case "minute":
          case "mins":
          case "min":
          case "m":
            return y * e;
          case "seconds":
          case "second":
          case "secs":
          case "sec":
          case "s":
            return y * t;
          case "milliseconds":
          case "millisecond":
          case "msecs":
          case "msec":
          case "ms":
            return y;
          default:
            return;
        }
      }
    }
  }
  function u(a) {
    var h = Math.abs(a);
    return h >= n ? Math.round(a / n) + "d" : h >= r ? Math.round(a / r) + "h" : h >= e ? Math.round(a / e) + "m" : h >= t ? Math.round(a / t) + "s" : a + "ms";
  }
  function d(a) {
    var h = Math.abs(a);
    return h >= n ? g(a, h, n, "day") : h >= r ? g(a, h, r, "hour") : h >= e ? g(a, h, e, "minute") : h >= t ? g(a, h, t, "second") : a + " ms";
  }
  function g(a, h, y, w) {
    var C = h >= y * 1.5;
    return Math.round(a / y) + " " + w + (C ? "s" : "");
  }
  return de;
}
function ei(t) {
  r.debug = r, r.default = r, r.coerce = d, r.disable = s, r.enable = i, r.enabled = o, r.humanize = ti(), r.destroy = g, Object.keys(t).forEach((a) => {
    r[a] = t[a];
  }), r.names = [], r.skips = [], r.formatters = {};
  function e(a) {
    let h = 0;
    for (let y = 0; y < a.length; y++)
      h = (h << 5) - h + a.charCodeAt(y), h |= 0;
    return r.colors[Math.abs(h) % r.colors.length];
  }
  r.selectColor = e;
  function r(a) {
    let h, y = null, w, C;
    function m(...v) {
      if (!m.enabled)
        return;
      const E = m, k = Number(/* @__PURE__ */ new Date()), T = k - (h || k);
      E.diff = T, E.prev = h, E.curr = k, h = k, v[0] = r.coerce(v[0]), typeof v[0] != "string" && v.unshift("%O");
      let x = 0;
      v[0] = v[0].replace(/%([a-zA-Z%])/g, (B, G) => {
        if (B === "%%")
          return "%";
        x++;
        const st = r.formatters[G];
        if (typeof st == "function") {
          const ot = v[x];
          B = st.call(E, ot), v.splice(x, 1), x--;
        }
        return B;
      }), r.formatArgs.call(E, v), (E.log || r.log).apply(E, v);
    }
    return m.namespace = a, m.useColors = r.useColors(), m.color = r.selectColor(a), m.extend = n, m.destroy = r.destroy, Object.defineProperty(m, "enabled", {
      enumerable: !0,
      configurable: !1,
      get: () => y !== null ? y : (w !== r.namespaces && (w = r.namespaces, C = r.enabled(a)), C),
      set: (v) => {
        y = v;
      }
    }), typeof r.init == "function" && r.init(m), m;
  }
  function n(a, h) {
    const y = r(this.namespace + (typeof h > "u" ? ":" : h) + a);
    return y.log = this.log, y;
  }
  function i(a) {
    r.save(a), r.namespaces = a, r.names = [], r.skips = [];
    let h;
    const y = (typeof a == "string" ? a : "").split(/[\s,]+/), w = y.length;
    for (h = 0; h < w; h++)
      y[h] && (a = y[h].replace(/\*/g, ".*?"), a[0] === "-" ? r.skips.push(new RegExp("^" + a.slice(1) + "$")) : r.names.push(new RegExp("^" + a + "$")));
  }
  function s() {
    const a = [
      ...r.names.map(u),
      ...r.skips.map(u).map((h) => "-" + h)
    ].join(",");
    return r.enable(""), a;
  }
  function o(a) {
    if (a[a.length - 1] === "*")
      return !0;
    let h, y;
    for (h = 0, y = r.skips.length; h < y; h++)
      if (r.skips[h].test(a))
        return !1;
    for (h = 0, y = r.names.length; h < y; h++)
      if (r.names[h].test(a))
        return !0;
    return !1;
  }
  function u(a) {
    return a.toString().substring(2, a.toString().length - 2).replace(/\.\*\?$/, "*");
  }
  function d(a) {
    return a instanceof Error ? a.stack || a.message : a;
  }
  function g() {
    console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");
  }
  return r.enable(r.load()), r;
}
var ri = ei;
(function(t, e) {
  e.formatArgs = n, e.save = i, e.load = s, e.useColors = r, e.storage = o(), e.destroy = (() => {
    let d = !1;
    return () => {
      d || (d = !0, console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));
    };
  })(), e.colors = [
    "#0000CC",
    "#0000FF",
    "#0033CC",
    "#0033FF",
    "#0066CC",
    "#0066FF",
    "#0099CC",
    "#0099FF",
    "#00CC00",
    "#00CC33",
    "#00CC66",
    "#00CC99",
    "#00CCCC",
    "#00CCFF",
    "#3300CC",
    "#3300FF",
    "#3333CC",
    "#3333FF",
    "#3366CC",
    "#3366FF",
    "#3399CC",
    "#3399FF",
    "#33CC00",
    "#33CC33",
    "#33CC66",
    "#33CC99",
    "#33CCCC",
    "#33CCFF",
    "#6600CC",
    "#6600FF",
    "#6633CC",
    "#6633FF",
    "#66CC00",
    "#66CC33",
    "#9900CC",
    "#9900FF",
    "#9933CC",
    "#9933FF",
    "#99CC00",
    "#99CC33",
    "#CC0000",
    "#CC0033",
    "#CC0066",
    "#CC0099",
    "#CC00CC",
    "#CC00FF",
    "#CC3300",
    "#CC3333",
    "#CC3366",
    "#CC3399",
    "#CC33CC",
    "#CC33FF",
    "#CC6600",
    "#CC6633",
    "#CC9900",
    "#CC9933",
    "#CCCC00",
    "#CCCC33",
    "#FF0000",
    "#FF0033",
    "#FF0066",
    "#FF0099",
    "#FF00CC",
    "#FF00FF",
    "#FF3300",
    "#FF3333",
    "#FF3366",
    "#FF3399",
    "#FF33CC",
    "#FF33FF",
    "#FF6600",
    "#FF6633",
    "#FF9900",
    "#FF9933",
    "#FFCC00",
    "#FFCC33"
  ];
  function r() {
    return typeof window < "u" && window.process && (window.process.type === "renderer" || window.process.__nwjs) ? !0 : typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/) ? !1 : typeof document < "u" && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance || // Is firebug? http://stackoverflow.com/a/398120/376773
    typeof window < "u" && window.console && (window.console.firebug || window.console.exception && window.console.table) || // Is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31 || // Double check webkit in userAgent just in case we are in a worker
    typeof navigator < "u" && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/);
  }
  function n(d) {
    if (d[0] = (this.useColors ? "%c" : "") + this.namespace + (this.useColors ? " %c" : " ") + d[0] + (this.useColors ? "%c " : " ") + "+" + t.exports.humanize(this.diff), !this.useColors)
      return;
    const g = "color: " + this.color;
    d.splice(1, 0, g, "color: inherit");
    let a = 0, h = 0;
    d[0].replace(/%[a-zA-Z%]/g, (y) => {
      y !== "%%" && (a++, y === "%c" && (h = a));
    }), d.splice(h, 0, g);
  }
  e.log = console.debug || console.log || (() => {
  });
  function i(d) {
    try {
      d ? e.storage.setItem("debug", d) : e.storage.removeItem("debug");
    } catch {
    }
  }
  function s() {
    let d;
    try {
      d = e.storage.getItem("debug");
    } catch {
    }
    return !d && typeof process < "u" && "env" in process && (d = process.env.DEBUG), d;
  }
  function o() {
    try {
      return localStorage;
    } catch {
    }
  }
  t.exports = ri(e);
  const { formatters: u } = t.exports;
  u.j = function(d) {
    try {
      return JSON.stringify(d);
    } catch (g) {
      return "[UnexpectedJSONParseError]: " + g.message;
    }
  };
})(We, We.exports);
/*!
 * is-plain-object <https://github.com/jonschlinkert/is-plain-object>
 *
 * Copyright (c) 2014-2017, Jon Schlinkert.
 * Released under the MIT License.
 */
function Be(t) {
  return Object.prototype.toString.call(t) === "[object Object]";
}
function ni(t) {
  var e, r;
  return Be(t) === !1 ? !1 : (e = t.constructor, e === void 0 ? !0 : (r = e.prototype, !(Be(r) === !1 || r.hasOwnProperty("isPrototypeOf") === !1)));
}
const ii = typeof Buffer > "u" ? () => !1 : (t) => Buffer.isBuffer(t), si = ["boolean", "string", "number"];
function oi() {
  return {
    processOptions: (t) => {
      const e = t.body;
      return !e || !(!(typeof e.pipe == "function") && !ii(e) && (si.indexOf(typeof e) !== -1 || Array.isArray(e) || ni(e))) ? t : Object.assign({}, t, {
        body: JSON.stringify(t.body),
        headers: Object.assign({}, t.headers, {
          "Content-Type": "application/json"
        })
      });
    }
  };
}
function ai(t) {
  return {
    onResponse: (r) => {
      const n = r.headers["content-type"] || "", i = t && t.force || n.indexOf("application/json") !== -1;
      return !r.body || !n || !i ? r : Object.assign({}, r, {
        body: e(r.body)
      });
    },
    processOptions: (r) => Object.assign({}, r, {
      headers: Object.assign({
        Accept: "application/json"
      }, r.headers)
    })
  };
  function e(r) {
    try {
      return JSON.parse(r);
    } catch (n) {
      throw n.message = "Failed to parsed response body as JSON: ".concat(n.message), n;
    }
  }
}
let ut;
typeof globalThis < "u" ? ut = globalThis : typeof window < "u" ? ut = window : typeof global < "u" ? ut = global : typeof self < "u" ? ut = self : ut = {};
var ci = ut;
function ui() {
  const e = (arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : {}).implementation || ci.Observable;
  if (!e)
    throw new Error("`Observable` is not available in global scope, and no implementation was passed");
  return {
    onReturn: (r, n) => new e((i) => (r.error.subscribe((s) => i.error(s)), r.progress.subscribe((s) => i.next(Object.assign({
      type: "progress"
    }, s))), r.response.subscribe((s) => {
      i.next(Object.assign({
        type: "response"
      }, s)), i.complete();
    }), r.request.publish(n), () => r.abort.publish()))
  };
}
function li() {
  return {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    onRequest: (t) => {
      if (t.adapter !== "xhr")
        return;
      const e = t.request, r = t.context;
      "upload" in e && "onprogress" in e.upload && (e.upload.onprogress = n("upload")), "onprogress" in e && (e.onprogress = n("download"));
      function n(i) {
        return (s) => {
          const o = s.lengthComputable ? s.loaded / s.total * 100 : -1;
          r.channels.progress.publish({
            stage: i,
            percent: o,
            total: s.total,
            loaded: s.loaded,
            lengthComputable: s.lengthComputable
          });
        };
      }
    }
  };
}
var _e = function(t, e) {
  return _e = Object.setPrototypeOf || { __proto__: [] } instanceof Array && function(r, n) {
    r.__proto__ = n;
  } || function(r, n) {
    for (var i in n)
      Object.prototype.hasOwnProperty.call(n, i) && (r[i] = n[i]);
  }, _e(t, e);
};
function xe(t, e) {
  if (typeof e != "function" && e !== null)
    throw new TypeError("Class extends value " + String(e) + " is not a constructor or null");
  _e(t, e);
  function r() {
    this.constructor = t;
  }
  t.prototype = e === null ? Object.create(e) : (r.prototype = e.prototype, new r());
}
function ze(t) {
  var e = typeof Symbol == "function" && Symbol.iterator, r = e && t[e], n = 0;
  if (r)
    return r.call(t);
  if (t && typeof t.length == "number")
    return {
      next: function() {
        return t && n >= t.length && (t = void 0), { value: t && t[n++], done: !t };
      }
    };
  throw new TypeError(e ? "Object is not iterable." : "Symbol.iterator is not defined.");
}
function Jt(t, e) {
  var r = typeof Symbol == "function" && t[Symbol.iterator];
  if (!r)
    return t;
  var n = r.call(t), i, s = [], o;
  try {
    for (; (e === void 0 || e-- > 0) && !(i = n.next()).done; )
      s.push(i.value);
  } catch (u) {
    o = { error: u };
  } finally {
    try {
      i && !i.done && (r = n.return) && r.call(n);
    } finally {
      if (o)
        throw o.error;
    }
  }
  return s;
}
function Yt(t, e, r) {
  if (r || arguments.length === 2)
    for (var n = 0, i = e.length, s; n < i; n++)
      (s || !(n in e)) && (s || (s = Array.prototype.slice.call(e, 0, n)), s[n] = e[n]);
  return t.concat(s || Array.prototype.slice.call(e));
}
function L(t) {
  return typeof t == "function";
}
function dr(t) {
  var e = function(n) {
    Error.call(n), n.stack = new Error().stack;
  }, r = t(e);
  return r.prototype = Object.create(Error.prototype), r.prototype.constructor = r, r;
}
var pe = dr(function(t) {
  return function(r) {
    t(this), this.message = r ? r.length + ` errors occurred during unsubscription:
` + r.map(function(n, i) {
      return i + 1 + ") " + n.toString();
    }).join(`
  `) : "", this.name = "UnsubscriptionError", this.errors = r;
  };
});
function Ne(t, e) {
  if (t) {
    var r = t.indexOf(e);
    0 <= r && t.splice(r, 1);
  }
}
var Ie = function() {
  function t(e) {
    this.initialTeardown = e, this.closed = !1, this._parentage = null, this._finalizers = null;
  }
  return t.prototype.unsubscribe = function() {
    var e, r, n, i, s;
    if (!this.closed) {
      this.closed = !0;
      var o = this._parentage;
      if (o)
        if (this._parentage = null, Array.isArray(o))
          try {
            for (var u = ze(o), d = u.next(); !d.done; d = u.next()) {
              var g = d.value;
              g.remove(this);
            }
          } catch (m) {
            e = { error: m };
          } finally {
            try {
              d && !d.done && (r = u.return) && r.call(u);
            } finally {
              if (e)
                throw e.error;
            }
          }
        else
          o.remove(this);
      var a = this.initialTeardown;
      if (L(a))
        try {
          a();
        } catch (m) {
          s = m instanceof pe ? m.errors : [m];
        }
      var h = this._finalizers;
      if (h) {
        this._finalizers = null;
        try {
          for (var y = ze(h), w = y.next(); !w.done; w = y.next()) {
            var C = w.value;
            try {
              Ve(C);
            } catch (m) {
              s = s ?? [], m instanceof pe ? s = Yt(Yt([], Jt(s)), Jt(m.errors)) : s.push(m);
            }
          }
        } catch (m) {
          n = { error: m };
        } finally {
          try {
            w && !w.done && (i = y.return) && i.call(y);
          } finally {
            if (n)
              throw n.error;
          }
        }
      }
      if (s)
        throw new pe(s);
    }
  }, t.prototype.add = function(e) {
    var r;
    if (e && e !== this)
      if (this.closed)
        Ve(e);
      else {
        if (e instanceof t) {
          if (e.closed || e._hasParent(this))
            return;
          e._addParent(this);
        }
        (this._finalizers = (r = this._finalizers) !== null && r !== void 0 ? r : []).push(e);
      }
  }, t.prototype._hasParent = function(e) {
    var r = this._parentage;
    return r === e || Array.isArray(r) && r.includes(e);
  }, t.prototype._addParent = function(e) {
    var r = this._parentage;
    this._parentage = Array.isArray(r) ? (r.push(e), r) : r ? [r, e] : e;
  }, t.prototype._removeParent = function(e) {
    var r = this._parentage;
    r === e ? this._parentage = null : Array.isArray(r) && Ne(r, e);
  }, t.prototype.remove = function(e) {
    var r = this._finalizers;
    r && Ne(r, e), e instanceof t && e._removeParent(this);
  }, t.EMPTY = function() {
    var e = new t();
    return e.closed = !0, e;
  }(), t;
}();
Ie.EMPTY;
function pr(t) {
  return t instanceof Ie || t && "closed" in t && L(t.remove) && L(t.add) && L(t.unsubscribe);
}
function Ve(t) {
  L(t) ? t() : t.unsubscribe();
}
var gr = {
  onUnhandledError: null,
  onStoppedNotification: null,
  Promise: void 0,
  useDeprecatedSynchronousErrorHandling: !1,
  useDeprecatedNextContext: !1
}, Oe = {
  setTimeout: function(t, e) {
    for (var r = [], n = 2; n < arguments.length; n++)
      r[n - 2] = arguments[n];
    return setTimeout.apply(void 0, Yt([t, e], Jt(r)));
  },
  clearTimeout: function(t) {
    return (clearTimeout)(t);
  },
  delegate: void 0
};
function di(t) {
  Oe.setTimeout(function() {
    throw t;
  });
}
function Ge() {
}
function pi(t) {
  t();
}
var Ae = function(t) {
  xe(e, t);
  function e(r) {
    var n = t.call(this) || this;
    return n.isStopped = !1, r ? (n.destination = r, pr(r) && r.add(n)) : n.destination = vi, n;
  }
  return e.create = function(r, n, i) {
    return new Ee(r, n, i);
  }, e.prototype.next = function(r) {
    this.isStopped || this._next(r);
  }, e.prototype.error = function(r) {
    this.isStopped || (this.isStopped = !0, this._error(r));
  }, e.prototype.complete = function() {
    this.isStopped || (this.isStopped = !0, this._complete());
  }, e.prototype.unsubscribe = function() {
    this.closed || (this.isStopped = !0, t.prototype.unsubscribe.call(this), this.destination = null);
  }, e.prototype._next = function(r) {
    this.destination.next(r);
  }, e.prototype._error = function(r) {
    try {
      this.destination.error(r);
    } finally {
      this.unsubscribe();
    }
  }, e.prototype._complete = function() {
    try {
      this.destination.complete();
    } finally {
      this.unsubscribe();
    }
  }, e;
}(Ie), gi = Function.prototype.bind;
function ge(t, e) {
  return gi.call(t, e);
}
var yi = function() {
  function t(e) {
    this.partialObserver = e;
  }
  return t.prototype.next = function(e) {
    var r = this.partialObserver;
    if (r.next)
      try {
        r.next(e);
      } catch (n) {
        Ft(n);
      }
  }, t.prototype.error = function(e) {
    var r = this.partialObserver;
    if (r.error)
      try {
        r.error(e);
      } catch (n) {
        Ft(n);
      }
    else
      Ft(e);
  }, t.prototype.complete = function() {
    var e = this.partialObserver;
    if (e.complete)
      try {
        e.complete();
      } catch (r) {
        Ft(r);
      }
  }, t;
}(), Ee = function(t) {
  xe(e, t);
  function e(r, n, i) {
    var s = t.call(this) || this, o;
    if (L(r) || !r)
      o = {
        next: r ?? void 0,
        error: n ?? void 0,
        complete: i ?? void 0
      };
    else {
      var u;
      s && gr.useDeprecatedNextContext ? (u = Object.create(r), u.unsubscribe = function() {
        return s.unsubscribe();
      }, o = {
        next: r.next && ge(r.next, u),
        error: r.error && ge(r.error, u),
        complete: r.complete && ge(r.complete, u)
      }) : o = r;
    }
    return s.destination = new yi(o), s;
  }
  return e;
}(Ae);
function Ft(t) {
  di(t);
}
function mi(t) {
  throw t;
}
var vi = {
  closed: !0,
  next: Ge,
  error: mi,
  complete: Ge
}, wi = function() {
  return typeof Symbol == "function" && Symbol.observable || "@@observable";
}();
function bi(t) {
  return t;
}
function Ci(t) {
  return t.length === 0 ? bi : t.length === 1 ? t[0] : function(r) {
    return t.reduce(function(n, i) {
      return i(n);
    }, r);
  };
}
var Tt = function() {
  function t(e) {
    e && (this._subscribe = e);
  }
  return t.prototype.lift = function(e) {
    var r = new t();
    return r.source = this, r.operator = e, r;
  }, t.prototype.subscribe = function(e, r, n) {
    var i = this, s = Oi(e) ? e : new Ee(e, r, n);
    return pi(function() {
      var o = i, u = o.operator, d = o.source;
      s.add(u ? u.call(s, d) : d ? i._subscribe(s) : i._trySubscribe(s));
    }), s;
  }, t.prototype._trySubscribe = function(e) {
    try {
      return this._subscribe(e);
    } catch (r) {
      e.error(r);
    }
  }, t.prototype.forEach = function(e, r) {
    var n = this;
    return r = Je(r), new r(function(i, s) {
      var o = new Ee({
        next: function(u) {
          try {
            e(u);
          } catch (d) {
            s(d), o.unsubscribe();
          }
        },
        error: s,
        complete: i
      });
      n.subscribe(o);
    });
  }, t.prototype._subscribe = function(e) {
    var r;
    return (r = this.source) === null || r === void 0 ? void 0 : r.subscribe(e);
  }, t.prototype[wi] = function() {
    return this;
  }, t.prototype.pipe = function() {
    for (var e = [], r = 0; r < arguments.length; r++)
      e[r] = arguments[r];
    return Ci(e)(this);
  }, t.prototype.toPromise = function(e) {
    var r = this;
    return e = Je(e), new e(function(n, i) {
      var s;
      r.subscribe(function(o) {
        return s = o;
      }, function(o) {
        return i(o);
      }, function() {
        return n(s);
      });
    });
  }, t.create = function(e) {
    return new t(e);
  }, t;
}();
function Je(t) {
  var e;
  return (e = t ?? gr.Promise) !== null && e !== void 0 ? e : Promise;
}
function _i(t) {
  return t && L(t.next) && L(t.error) && L(t.complete);
}
function Oi(t) {
  return t && t instanceof Ae || _i(t) && pr(t);
}
(function(t) {
  xe(e, t);
  function e(r, n, i, s, o, u) {
    var d = t.call(this, r) || this;
    return d.onFinalize = o, d.shouldUnsubscribe = u, d._next = n ? function(g) {
      try {
        n(g);
      } catch (a) {
        r.error(a);
      }
    } : t.prototype._next, d._error = s ? function(g) {
      try {
        s(g);
      } catch (a) {
        r.error(a);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._error, d._complete = i ? function() {
      try {
        i();
      } catch (g) {
        r.error(g);
      } finally {
        this.unsubscribe();
      }
    } : t.prototype._complete, d;
  }
  return e.prototype.unsubscribe = function() {
    var r;
    if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
      var n = this.closed;
      t.prototype.unsubscribe.call(this), !n && ((r = this.onFinalize) === null || r === void 0 || r.call(this));
    }
  }, e;
})(Ae); dr(function(t) {
  return function() {
    t(this), this.name = "EmptyError", this.message = "no elements in sequence";
  };
});
var Ti = [];
const ye = 5;
class xi extends Error {
  constructor(e) {
    const r = vr(e);
    super(r.message), this.statusCode = 400, Object.assign(this, r);
  }
}
class Ii extends Error {
  constructor(e) {
    const r = vr(e);
    super(r.message), this.statusCode = 500, Object.assign(this, r);
  }
}
function vr(t) {
  const e = t.body, r = {
    response: t,
    statusCode: t.statusCode,
    responseBody: Mi(e, t),
    message: "",
    details: void 0
  };
  if (e.error && e.message)
    return r.message = "".concat(e.error, " - ").concat(e.message), r;
  if (Ai(e)) {
    const n = e.error.items || [], i = n.slice(0, ye).map((o) => {
      var u;
      return (u = o.error) == null ? void 0 : u.description;
    }).filter(Boolean);
    let s = i.length ? `:
- `.concat(i.join(`
- `)) : "";
    return n.length > ye && (s += `
...and `.concat(n.length - ye, " more")), r.message = "".concat(e.error.description).concat(s), r.details = e.error, r;
  }
  return e.error && e.error.description ? (r.message = e.error.description, r.details = e.error, r) : (r.message = e.error || e.message || Pi(t), r);
}
function Ai(t) {
  return Ye(t) && Ye(t.error) && t.error.type === "mutationError" && typeof t.error.description == "string";
}
function Ye(t) {
  return typeof t == "object" && t !== null && !Array.isArray(t);
}
function Pi(t) {
  const e = t.statusMessage ? " ".concat(t.statusMessage) : "";
  return "".concat(t.method, "-request to ").concat(t.url, " resulted in HTTP ").concat(t.statusCode).concat(e);
}
function Mi(t, e) {
  return (e.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(t, null, 2) : t;
}
const Ri = {
  onResponse: (t) => {
    if (t.statusCode >= 500)
      throw new Ii(t);
    if (t.statusCode >= 400)
      throw new xi(t);
    return t;
  }
}, Fi = {
  onResponse: (t) => {
    const e = t.headers["x-sanity-warning"];
    return (Array.isArray(e) ? e : [e]).filter(Boolean).forEach((n) => console.warn(n)), t;
  }
};
function $i(t) {
  const e = Zn([...t, Fi, oi(), ai(), li(), Ri, ui({
    implementation: Tt
  })]);
  function r(n) {
    return (arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : e)({
      maxRedirects: 0,
      ...n
    });
  }
  return r.defaultRequester = e, r;
}
$i(Ti);
var Os = function(e) {
  for (var r = arguments.length, n = new Array(r > 1 ? r - 1 : 0), i = 1; i < r; i++)
    n[i - 1] = arguments[i];
  var s = e.length - 1;
  return e.slice(0, s).reduce(function(o, u, d) {
    return o + u + n[d];
  }, "") + e[s];
};
const xs = /* @__PURE__ */ Te(Os);
function Is() {
  return globalThis.sanityClient || console.error("Sanity client has not been initialized correctly"), globalThis.sanityClient;
}

const imageBuilder = ks(Is());
function getImageUrl(source) {
  return imageBuilder.image(source);
}
function getThumbnailUrl(source) {
  return getImageUrl(source).size(300, 300).url();
}
function getMediumUrl(source) {
  return getImageUrl(source).fit("max").width(600).height(600).url();
}

const _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};

const $$Astro$2 = createAstro("https://astro-portfolio-rldev.netlify.app/");
const $$BaseHead = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BaseHead;
  const { title, seoDescription, seoImage } = Astro2.props;
  const pageURL = new URL(Astro2.url);
  const seoImageURL = seoImage ? getThumbnailUrl(seoImage) : "#";
  return renderTemplate`<!-- Global Metadata --><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><link rel="icon" type="image/svg+xml" href="/img/favicons/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><!-- Canonical URL --><link rel="canonical"${addAttribute(pageURL, "href")}><!-- Primary Meta Tags --><title>${title}</title><meta name="title"${addAttribute(title, "content")}><meta name="description"${addAttribute(seoDescription, "content")}><!-- Open Graph / Facebook --><meta property="og:type" content="website"><meta property="og:url"${addAttribute(pageURL, "content")}><meta property="og:title"${addAttribute(title, "content")}><meta property="og:description"${addAttribute(seoDescription, "content")}><meta property="og:image"${addAttribute(seoImageURL, "content")}><!-- Twitter --><meta property="twitter:card" content="summary_large_image"><meta property="twitter:url"${addAttribute(pageURL, "content")}><meta property="twitter:title"${addAttribute(title, "content")}><meta property="twitter:description"${addAttribute(seoDescription, "content")}><meta property="twitter:image"${addAttribute(seoImageURL, "content")}><!-- For Android Chrome --><link rel="icon" sizes="192x192" href="/img/favicons/android-chrome-192x192.png"><link rel="icon" sizes="512x512" href="/img/favicons/android-chrome-512x512.png"><!-- For Apple Touch --><link rel="apple-touch-icon" sizes="180x180" href="/img/favicons/apple-touch-icon.png"><!-- Favicon for other browsers --><link rel="icon" type="image/png" sizes="32x32" href="/img/favicons/favicon-32x32.png"><link rel="icon" type="image/png" sizes="16x16" href="/img/favicons/favicon-16x16.png">`;
}, "/Users/rayluna/code/projects/astro-portfolio/src/components/BaseHead.astro", void 0);

const _sfc_main$3 = {};

function _sfc_ssrRender$3(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    fill: "#000000",
    height: "40px",
    width: "40px",
    version: "1.1",
    id: "Layer_1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink",
    viewBox: "0 0 330.001 330.001",
    "xml:space": "preserve"
  }, _attrs))}><g id="XMLID_348_"><path id="XMLID_350_" d="M173.871,177.097c-2.641,1.936-5.756,2.903-8.87,2.903c-3.116,0-6.23-0.967-8.871-2.903L30,84.602
		L0.001,62.603L0,275.001c0.001,8.284,6.716,15,15,15L315.001,290c8.285,0,15-6.716,15-14.999V62.602l-30.001,22L173.871,177.097z"></path><polygon id="XMLID_351_" points="165.001,146.4 310.087,40.001 19.911,40 	"></polygon></g></svg>`);
}
const _sfc_setup$3 = _sfc_main$3.setup;
_sfc_main$3.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/IconEmail.vue");
  return _sfc_setup$3 ? _sfc_setup$3(props, ctx) : undefined
};
const IconEmail = /*#__PURE__*/_export_sfc(_sfc_main$3, [['ssrRender',_sfc_ssrRender$3]]);

const _sfc_main$2 = {};

function _sfc_ssrRender$2(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "35px",
    height: "35px",
    viewBox: "0 0 20 20",
    version: "1.1",
    xmlns: "http://www.w3.org/2000/svg",
    "xmlns:xlink": "http://www.w3.org/1999/xlink"
  }, _attrs))}><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd"><g id="Dribbble-Light-Preview" transform="translate(-140.000000, -7559.000000)" fill="#000000"><g id="icons" transform="translate(56.000000, 160.000000)"><path d="M94,7399 C99.523,7399 104,7403.59 104,7409.253 C104,7413.782 101.138,7417.624 97.167,7418.981 C96.66,7419.082 96.48,7418.762 96.48,7418.489 C96.48,7418.151 96.492,7417.047 96.492,7415.675 C96.492,7414.719 96.172,7414.095 95.813,7413.777 C98.04,7413.523 100.38,7412.656 100.38,7408.718 C100.38,7407.598 99.992,7406.684 99.35,7405.966 C99.454,7405.707 99.797,7404.664 99.252,7403.252 C99.252,7403.252 98.414,7402.977 96.505,7404.303 C95.706,7404.076 94.85,7403.962 94,7403.958 C93.15,7403.962 92.295,7404.076 91.497,7404.303 C89.586,7402.977 88.746,7403.252 88.746,7403.252 C88.203,7404.664 88.546,7405.707 88.649,7405.966 C88.01,7406.684 87.619,7407.598 87.619,7408.718 C87.619,7412.646 89.954,7413.526 92.175,7413.785 C91.889,7414.041 91.63,7414.493 91.54,7415.156 C90.97,7415.418 89.522,7415.871 88.63,7414.304 C88.63,7414.304 88.101,7413.319 87.097,7413.247 C87.097,7413.247 86.122,7413.234 87.029,7413.87 C87.029,7413.87 87.684,7414.185 88.139,7415.37 C88.139,7415.37 88.726,7417.2 91.508,7416.58 C91.513,7417.437 91.522,7418.245 91.522,7418.489 C91.522,7418.76 91.338,7419.077 90.839,7418.982 C86.865,7417.627 84,7413.783 84,7409.253 C84,7403.59 88.478,7399 94,7399" id="github-[#142]"></path></g></g></g></svg>`);
}
const _sfc_setup$2 = _sfc_main$2.setup;
_sfc_main$2.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/IconGithub.vue");
  return _sfc_setup$2 ? _sfc_setup$2(props, ctx) : undefined
};
const IconGithub = /*#__PURE__*/_export_sfc(_sfc_main$2, [['ssrRender',_sfc_ssrRender$2]]);

const _sfc_main$1 = {};

function _sfc_ssrRender$1(_ctx, _push, _parent, _attrs) {
  _push(`<svg${ssrRenderAttrs(mergeProps({
    width: "40px",
    height: "40px",
    viewBox: "0 0 48 48",
    xmlns: "http://www.w3.org/2000/svg"
  }, _attrs))}><title>linkedin</title><g id="Layer_2" data-name="Layer 2"><g id="invisible_box" data-name="invisible box"><rect width="48" height="48" fill="none"></rect><rect width="48" height="48" fill="none"></rect></g><g id="icons_Q2" data-name="icons Q2"><path d="M41,4.1H7A2.9,2.9,0,0,0,4,7V41.1A2.9,2.9,0,0,0,7,44H41a2.9,2.9,0,0,0,2.9-2.9V7A2.9,2.9,0,0,0,41,4.1Zm-25.1,34h-6v-19h6Zm-3-21.6A3.5,3.5,0,0,1,9.5,13a3.4,3.4,0,0,1,6.8,0A3.5,3.5,0,0,1,12.9,16.5ZM38,38.1H32.1V28.8c0-2.2,0-5-3.1-5s-3.5,2.4-3.5,4.9v9.4H19.6v-19h5.6v2.6h.1a6.2,6.2,0,0,1,5.6-3.1c6,0,7.1,3.9,7.1,9.1Z"></path></g></g></svg>`);
}
const _sfc_setup$1 = _sfc_main$1.setup;
_sfc_main$1.setup = (props, ctx) => {
  const ssrContext = useSSRContext()
  ;(ssrContext.modules || (ssrContext.modules = new Set())).add("src/components/icons/IconLinkedin.vue");
  return _sfc_setup$1 ? _sfc_setup$1(props, ctx) : undefined
};
const IconLinkedin = /*#__PURE__*/_export_sfc(_sfc_main$1, [['ssrRender',_sfc_ssrRender$1]]);

const _sfc_main = /* @__PURE__ */ defineComponent({
  __name: "Footer",
  props: {
    name: {
      type: String,
      default: "Ray Luna"
    },
    email: {
      type: String
    },
    github: {
      type: String
    },
    linkedin: {
      type: String
    }
  },
  setup(__props, { expose: __expose }) {
    __expose();
    const props = __props;
    const year = (/* @__PURE__ */ new Date()).getFullYear();
    const __returned__ = { props, year, IconEmail, IconGithub, IconLinkedin };
    Object.defineProperty(__returned__, "__isScriptSetup", { enumerable: false, value: true });
    return __returned__;
  }
});
function _sfc_ssrRender(_ctx, _push, _parent, _attrs, $props, $setup, $data, $options) {
  _push(`<footer${ssrRenderAttrs(mergeProps({ class: "flex flex-col justify-center items-center gap-y-[1.875rem]" }, _attrs))}><div class="social-icons flex gap-x-[1.25rem]">`);
  if ($props.email) {
    _push(`<a${ssrRenderAttr("href", `mailto:${$props.email}`)} aria-label="Email">`);
    _push(ssrRenderComponent($setup["IconEmail"], null, null, _parent));
    _push(`</a>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.github) {
    _push(`<a${ssrRenderAttr("href", $props.github)} target="_blank" aria-label="GitHub">`);
    _push(ssrRenderComponent($setup["IconGithub"], null, null, _parent));
    _push(`</a>`);
  } else {
    _push(`<!---->`);
  }
  if ($props.linkedin) {
    _push(`<a${ssrRenderAttr("href", $props.linkedin)} target="_blank" aria-label="LinkedIn">`);
    _push(ssrRenderComponent($setup["IconLinkedin"], null, null, _parent));
    _push(`</a>`);
  } else {
    _push(`<!---->`);
  }
  _push(`</div><div class="copyright"><p>\xA9 ${ssrInterpolate($setup.year)} ${ssrInterpolate($props.name)}. All rights reserved.</p></div></footer>`);
}
const _sfc_setup = _sfc_main.setup;
_sfc_main.setup = (props, ctx) => {
  const ssrContext = useSSRContext();
  (ssrContext.modules || (ssrContext.modules = /* @__PURE__ */ new Set())).add("src/components/Footer.vue");
  return _sfc_setup ? _sfc_setup(props, ctx) : void 0;
};
const Footer = /* @__PURE__ */ _export_sfc(_sfc_main, [["ssrRender", _sfc_ssrRender]]);

const $$Astro$1 = createAstro("https://astro-portfolio-rldev.netlify.app/");
const $$PageLayout = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$PageLayout;
  const { title, global, profile, seoDescription, seoImage, hidePath } = Astro2.props;
  const isHome = () => {
    return Astro2.url.pathname === "/";
  };
  const getPathArray = () => {
    const path = Astro2.url.pathname;
    if (isHome()) {
      return ["/"];
    }
    const paths = [];
    const segments = path.split("/").filter(Boolean);
    let currentPath = "";
    for (const segment of segments) {
      currentPath += `/${segment}`;
      paths.push(currentPath);
    }
    if (path !== "/") {
      paths.unshift("/");
    }
    if (hidePath) {
      return ["Ray Luna"];
    }
    return paths;
  };
  return renderTemplate`<html lang="en"> <head>${renderComponent($$result, "BaseHead", $$BaseHead, { "title": title, "seoDescription": seoDescription, "seoImage": seoImage })}<!-- <DarkMode /> --><!-- <GoogleTag /> -->${renderHead()}</head> <body> <div aria-hidden="true" class="fixed w-screen top-0 h-[1rem] z-[2] bg-theme"></div> ${renderComponent($$result, "Header", null, { "client:only": true, "name": profile?.name, "title": global?.title, "path": getPathArray(), "isHome": isHome(), "client:component-hydration": "only", "client:component-path": "/Users/rayluna/code/projects/astro-portfolio/src/components/Header.vue", "client:component-export": "default" }, { "default": ($$result2) => renderTemplate`  ` })} <main> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", Footer, { "name": profile?.name, "linkedin": profile?.linkedin, "github": profile?.github, "email": profile?.email })} </body></html>`;
}, "/Users/rayluna/code/projects/astro-portfolio/src/layouts/PageLayout.astro", void 0);

const $$Astro = createAstro("https://astro-portfolio-rldev.netlify.app/");
const $$404 = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$404;
  return renderTemplate`${renderComponent($$result, "PageLayout", $$PageLayout, { "title": `Ray Luna | Page Not Found`, "hidePath": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div id="notfound" class="flex-col-2"> <div class="container flex-col-4 md:h-[70vh] items-center justify-center"> <div class="flex flex-col  justify-center items-center"> <h1 class="text-[8rem] md:text-[12rem]">404</h1> <h2 class="font-archivo uppercase tracking-[-0.2rem] font-[100] h3">Page Not Found</h2> </div> <div class="container flex justify-center"> <a href="/" class="btn light pt-[2rem] w-max ">Go Home</a> </div> </div> </div> ` })}`;
}, "/Users/rayluna/code/projects/astro-portfolio/src/pages/404.astro", void 0);

const $$file = "/Users/rayluna/code/projects/astro-portfolio/src/pages/404.astro";
const $$url = "/404";

const _404 = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
        __proto__: null,
        default: $$404,
        file: $$file,
        url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

export { $$PageLayout as $, Is as I, Ss as S, _export_sfc as _, getThumbnailUrl as a, getMediumUrl as b, _404 as c, getImageUrl as g, xs as x };
