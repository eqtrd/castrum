import { __module as b } from "./kirby-starterkit-eqtrd10.js";
import { __require as j } from "./kirby-starterkit-eqtrd7.js";
var l;
function N() {
  return l ? b.exports : (l = 1, function(y) {
    (function(c, f) {
      c && (f = f.bind(null, c, c.document), f(j()));
    })(typeof window < "u" ? window : 0, function(c, f, d) {
      if (c.addEventListener) {
        var A = /\s+(\d+)(w|h)\s+(\d+)(w|h)/, F = /parent-fit["']*\s*:\s*["']*(contain|cover|width)/, _ = /parent-container["']*\s*:\s*["']*(.+?)(?=(\s|$|,|'|"|;))/, v = /^picture$/i, p = d.cfg, m = function(t) {
          return getComputedStyle(t, null) || {};
        }, g = {
          getParent: function(t, r) {
            var a = t, i = t.parentNode;
            return (!r || r == "prev") && i && v.test(i.nodeName || "") && (i = i.parentNode), r != "self" && (r == "prev" ? a = t.previousElementSibling : r && (i.closest || c.jQuery) ? a = (i.closest ? i.closest(r) : jQuery(i).closest(r)[0]) || i : a = i), a;
          },
          getFit: function(t) {
            var r, a, i = m(t), s = i.content || i.fontFamily, e = {
              fit: t._lazysizesParentFit || t.getAttribute("data-parent-fit")
            };
            return !e.fit && s && (r = s.match(F)) && (e.fit = r[1]), e.fit ? (a = t._lazysizesParentContainer || t.getAttribute("data-parent-container"), !a && s && (r = s.match(_)) && (a = r[1]), e.parent = g.getParent(t, a)) : e.fit = i.objectFit, e;
          },
          getImageRatio: function(t) {
            var r, a, i, s, e, u, n, o = t.parentNode, h = o && v.test(o.nodeName || "") ? o.querySelectorAll("source, img") : [t];
            for (r = 0; r < h.length; r++)
              if (t = h[r], a = t.getAttribute(p.srcsetAttr) || t.getAttribute("srcset") || t.getAttribute("data-pfsrcset") || t.getAttribute("data-risrcset") || "", i = t._lsMedia || t.getAttribute("media"), i = p.customMedia[t.getAttribute("data-media") || i] || i, a && (!i || (c.matchMedia && matchMedia(i) || {}).matches)) {
                s = parseFloat(t.getAttribute("data-aspectratio")), s || (e = a.match(A), e ? e[2] == "w" ? (u = e[1], n = e[3]) : (u = e[3], n = e[1]) : (u = t.getAttribute("width"), n = t.getAttribute("height")), s = u / n);
                break;
              }
            return s;
          },
          calculateSize: function(t, r) {
            var a, i, s, e, u = this.getFit(t), n = u.fit, o = u.parent;
            return n != "width" && (n != "contain" && n != "cover" || !(s = this.getImageRatio(t))) ? r : (o ? r = o.clientWidth : o = t, e = r, n == "width" ? e = r : (i = o.clientHeight, (a = r / i) && (n == "cover" && a < s || n == "contain" && a > s) && (e = r * (s / a))), e);
          }
        };
        d.parentFit = g, f.addEventListener("lazybeforesizes", function(t) {
          if (!(t.defaultPrevented || t.detail.instance != d)) {
            var r = t.target;
            t.detail.width = g.calculateSize(r, t.detail.width);
          }
        });
      }
    });
  }(), b.exports);
}
export {
  N as __require
};
