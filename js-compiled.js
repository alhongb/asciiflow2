var g, aa = "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
  if (c.get || c.set) {
    throw new TypeError("ES3 does not support getters and setters.");
  }
  a != Array.prototype && a != Object.prototype && (a[b] = c.value);
}, h = "undefined" != typeof window && window === this ? this : "undefined" != typeof global && null != global ? global : this;
function ba() {
  ba = function() {
  };
  h.Symbol || (h.Symbol = ca);
}
var da = 0;
function ca(a) {
  return "jscomp_symbol_" + (a || "") + da++;
}
function m() {
  ba();
  var a = h.Symbol.iterator;
  a || (a = h.Symbol.iterator = h.Symbol("iterator"));
  "function" != typeof Array.prototype[a] && aa(Array.prototype, a, {configurable:!0, writable:!0, value:function() {
    return ea(this);
  }});
  m = function() {
  };
}
function ea(a) {
  var b = 0;
  return fa(function() {
    return b < a.length ? {done:!1, value:a[b++]} : {done:!0};
  });
}
function fa(a) {
  m();
  a = {next:a};
  a[h.Symbol.iterator] = function() {
    return this;
  };
  return a;
}
function n(a) {
  m();
  var b = a[Symbol.iterator];
  return b ? b.call(a) : ea(a);
}
function q(a, b) {
  this.x = a;
  this.y = b;
}
function r(a, b) {
  var c = a.originalEvent.touches[void 0 === b ? 0 : b];
  return new q(c.pageX, c.pageY);
}
function t(a, b) {
  return !!b && a.x == b.x && a.y == b.y;
}
function v(a, b) {
  return new q(a.x - b.x, a.y - b.y);
}
g = q.prototype;
g.add = function(a) {
  return new q(this.x + a.x, this.y + a.y);
};
g.clone = function() {
  return new q(this.x, this.y);
};
g.length = function() {
  return Math.sqrt(this.x * this.x + this.y * this.y);
};
g.scale = function(a) {
  return new q(this.x * a, this.y * a);
};
function w(a) {
  return new q(a.x, a.y - 1);
}
function x(a) {
  return new q(a.x, a.y + 1);
}
function y(a) {
  return new q(a.x - 1, a.y);
}
g.right = function(a) {
  return new q(this.x + (void 0 === a ? 1 : a), this.y);
};
var z = ["+", "\u2012", "\u2013", "-", "|"], A = [">", "<", "^", "v"], ga = z.concat(A), B = "ontouchstart" in window || "onmsgesturechange" in window, C = new q(-1, 0), D = new q(1, 0), ha = new q(0, -1), ia = new q(0, 1), ja = [C, D, ha, ia];
function E(a, b) {
  this.a = Math.min(a.x, b.x);
  this.b = Math.min(a.y, b.y);
  this.c = Math.max(a.x, b.x);
  this.f = Math.max(a.y, b.y);
}
function ka(a) {
  return new q(a.a, a.b);
}
E.prototype.contains = function(a) {
  return a.x >= this.a && a.x <= this.c && a.y >= this.b && a.y <= this.f;
};
function la() {
  this.a = this.value = null;
}
function G(a) {
  return null != a.a ? a.a : a.value;
}
function H(a) {
  return ga.includes(G(a));
}
function I(a) {
  return null == a.value && null == a.a;
}
function ma(a, b, c, d) {
  this.a = a;
  this.right = b;
  this.c = c;
  this.b = d;
  this.h = this.f = this.l = this.g = !1;
}
function J(a) {
  return a.a + a.right + a.c + a.b;
}
function na(a, b) {
  this.position = a;
  this.value = b;
}
function oa(a, b) {
  this.position = a;
  this.a = b;
}
;function K(a) {
  return RegExp("[\\u4E00-\\u9FFF]+", "g").test(a);
}
function L(a) {
  for (var b = 0;b < a.a.length;b++) {
    for (var c = 0;c < a.a[b].length;c++) {
      null != G(a.a[b][c]) && M(a, new q(b, c), "\u2009");
    }
  }
  O(a);
}
function P(a, b) {
  return a.a[b.x][b.y];
}
function Q(a, b, c) {
  var d = P(a, b);
  a.b.push(new oa(b, d));
  d.a = c;
  a.c = !0;
}
function M(a, b, c) {
  var d = P(a, b);
  a.b.push(new oa(b, d));
  d.a = c;
  a.c = !0;
  K(R(a, b.add(new q(-1, 0)))) && (b = b.add(new q(-1, 0)), c = P(a, b), a.b.push(new oa(b, c)), c.a = "\u2009", a.c = !0);
}
function pa(a, b, c) {
  G(P(a, b)) != c && M(a, b, c);
}
function S(a) {
  for (var b = n(a.b), c = b.next();!c.done;c = b.next()) {
    c.value.a.a = null;
  }
  a.b.length = 0;
}
function R(a, b) {
  var c = P(a, b), d = null != c.a ? c.a : c.value, e = z.includes(d), f = A.includes(d);
  if (!e && !f) {
    return d;
  }
  c = T(a, b);
  if (e && c.a && c.right && !c.c && !c.b) {
    return "-";
  }
  if (e && !c.a && !c.right && c.c && c.b) {
    return "|";
  }
  if (4 == J(c)) {
    return "-";
  }
  if (f && 3 == J(c)) {
    if (!c.a) {
      return "<";
    }
    if (!c.c) {
      return "^";
    }
    if (!c.b) {
      return "v";
    }
    if (!c.right) {
      return ">";
    }
  }
  if ((e || f) && 3 == J(c)) {
    c.g = H(P(a, w(y(b))));
    c.l = H(P(a, w(b.right())));
    c.f = H(P(a, x(y(b))));
    c.h = H(P(a, x(b.right())));
    if (!c.right && c.g && c.f || !c.a && c.l && c.h) {
      return "|";
    }
    if (!c.b && c.g && c.l || !c.c && c.h && c.f) {
      return "-";
    }
    d = I(P(a, w(y(b))));
    e = I(P(a, w(b.right())));
    if (c.c && c.a && c.right && (!d || !e)) {
      return "-";
    }
    d = I(P(a, x(y(b))));
    e = I(P(a, x(b.right())));
    return !(c.b && c.a && c.right) || d && e ? "+" : "-";
  }
  if (f && 1 == J(c)) {
    if (c.a) {
      return ">";
    }
    if (c.c) {
      return "v";
    }
    if (c.b) {
      return "^";
    }
    if (c.right) {
      return "<";
    }
  }
  return d;
}
function T(a, b) {
  var c = H(P(a, y(b))), d = H(P(a, b.right())), e = H(P(a, w(b))), f = H(P(a, x(b)));
  return new ma(c, d, e, f);
}
function O(a, b) {
  var c = [], d = a.b.map(function(a) {
    return a.position.x.toString() + a.position.y.toString();
  }), e = a.b.filter(function(a, c) {
    return d.indexOf(d[c]) == c;
  });
  a.b.length = 0;
  for (var e = n(e), f = e.next();!f.done;f = e.next()) {
    var l = f.value, f = l.position, l = l.a;
    c.push(new na(f, null != l.value ? l.value : " "));
    var k = G(l);
    if ("\u2009" == k || " " == k) {
      k = null;
    }
    H(l) && (k = R(a, f));
    l.a = null;
    l.value = k;
  }
  e = b ? a.f : a.g;
  0 < c.length && (50 < e.length && e.shift(), e.push(c));
  a.c = !0;
}
function qa(a) {
  if (a.g.length) {
    for (var b = a.g.pop(), b = n(b), c = b.next();!c.done;c = b.next()) {
      c = c.value, Q(a, c.position, c.value);
    }
    O(a, !0);
  }
}
function ra(a) {
  if (a.f.length) {
    for (var b = a.f.pop(), b = n(b), c = b.next();!c.done;c = b.next()) {
      c = c.value, Q(a, c.position, c.value);
    }
    O(a);
  }
}
function U(a) {
  for (var b = new q(Number.MAX_VALUE, Number.MAX_VALUE), c = new q(-1, -1), d = 0;d < a.a.length;d++) {
    for (var e = 0;e < a.a[d].length;e++) {
      null != G(a.a[d][e]) && (d < b.x && (b.x = d), e < b.y && (b.y = e), d > c.x && (c.x = d), e > c.y && (c.y = e));
    }
  }
  if (0 > c.x) {
    return "";
  }
  for (var f = "", e = b.y;e <= c.y;e++) {
    for (var l = "", d = b.x;d <= c.x;d++) {
      var k = R(a, new q(d, e)), l = l + (null == k || "\u2009" == k ? " " : k);
      K(k) && d++;
    }
    f += l.replace(/\s+$/, "") + "\n";
  }
  return f;
}
function sa(a, b, c) {
  b = b.split("\n");
  for (var d = new q(0, Math.round(b.length / 2)), e = 0;e < b.length;e++) {
    d.x = Math.max(d.x, Math.round(b[e].length / 2));
  }
  for (e = 0;e < b.length;e++) {
    for (var f = b[e], l = 0, k = 0;l < f.length;l++, k++) {
      var u = f.charAt(l);
      z.includes(u) && (u = "+");
      K(u) ? (Q(a, v((new q(k, e)).add(c), d), u), k++, Q(a, v((new q(k, e)).add(c), d), "\u200b")) : Q(a, v((new q(k, e)).add(c), d), u);
    }
  }
}
;function V(a, b, c, d, e) {
  e = void 0 === e ? "+" : e;
  var f = new E(b, c), l = f.a, k = f.b, u = f.c, f = f.f, F = d ? c.x : b.x;
  for (d = d ? b.y : c.y;l++ < u;) {
    var p = new q(l, d), N = T(a, new q(l, d));
    " " == e && 2 == N.c + N.b || pa(a, p, e);
  }
  for (;k++ < f;) {
    p = new q(F, k), N = T(a, new q(F, k)), " " == e && 2 == N.a + N.right || pa(a, p, e);
  }
  M(a, b, e);
  M(a, c, e);
  pa(a, new q(F, d), e);
}
;function ta(a) {
  this.a = a;
  this.b = null;
}
g = ta.prototype;
g.start = function(a) {
  this.b = a;
};
g.i = function(a) {
  S(this.a);
  V(this.a, this.b, a, !0);
  V(this.a, this.b, a, !1);
};
g.m = function() {
  O(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function ua(a) {
  a.b.width = document.documentElement.clientWidth;
  a.b.height = document.documentElement.clientHeight;
  a.f = !0;
}
function va(a) {
  if (a.f || a.g.c) {
    a.f = !1, a.g.c = !1, wa(a);
  }
  window.requestAnimationFrame(function() {
    va(a);
  });
}
function wa(a) {
  var b = a.context;
  b.setTransform(1, 0, 0, 1, 0, 0);
  b.clearRect(0, 0, a.b.width, a.b.height);
  b.scale(a.c, a.c);
  b.translate(a.b.width / 2 / a.c, a.b.height / 2 / a.c);
  var c = v(W(a, new q(0, 0)), new q(3, 3)), d = W(a, new q(a.b.width, a.b.height)).add(new q(3, 3));
  c.x = Math.max(0, Math.min(c.x, 2E3));
  d.x = Math.max(0, Math.min(d.x, 2E3));
  c.y = Math.max(0, Math.min(c.y, 600));
  d.y = Math.max(0, Math.min(d.y, 600));
  b.lineWidth = "1";
  b.strokeStyle = "#EEEEEE";
  b.beginPath();
  for (var e = c.x;e < d.x;e++) {
    b.moveTo(9 * e - a.a.x, 0 - a.a.y), b.lineTo(9 * e - a.a.x, 17 * a.g.a.length - a.a.y);
  }
  for (e = c.y;e < d.y;e++) {
    b.moveTo(0 - a.a.x, 17 * e - a.a.y), b.lineTo(9 * a.g.a.length - a.a.x, 17 * e - a.a.y);
  }
  a.context.stroke();
  e = !a.h;
  b.font = "15px Courier New";
  for (var f = c.x;f < d.x;f++) {
    for (var l = c.y;l < d.y;l++) {
      var k = P(a.g, new q(f, l));
      if (H(k) || null != k.a && " " != G(k)) {
        a.context.fillStyle = null != k.a ? "#DEF" : "#F5F5F5", b.fillRect(9 * f - a.a.x, 17 * (l - 1) - a.a.y, 9, 17);
      }
      var u = R(a.g, new q(f, l));
      null == u || H(k) && !e || (a.context.fillStyle = "#000000", b.fillText(u, 9 * f - a.a.x, 17 * l - a.a.y - 3));
    }
  }
  if (a.h) {
    b.lineWidth = "1";
    b.strokeStyle = "#000000";
    b.beginPath();
    for (e = c.x;e < d.x;e++) {
      for (k = !1, f = c.y;f < d.y;f++) {
        l = P(a.g, new q(e, f)), H(l) && f != d.y - 1 || !k || (b.moveTo(9 * e - a.a.x + 4.5, 17 * k - a.a.y - 8.5), b.lineTo(9 * e - a.a.x + 4.5, 17 * (f - 1) - a.a.y - 8.5), k = !1), H(l) && !k && (k = f);
      }
    }
    for (f = c.y;f < d.y;f++) {
      for (k = !1, e = c.x;e < d.x;e++) {
        l = P(a.g, new q(e, f)), H(l) && e != d.x - 1 || !k || (b.moveTo(9 * k - a.a.x + 4.5, 17 * f - a.a.y - 8.5), b.lineTo(9 * (e - 1) - a.a.x + 4.5, 17 * f - a.a.y - 8.5), k = !1), H(l) && !k && (k = e);
      }
    }
    a.context.stroke();
  }
}
function W(a, b) {
  var c = new q((b.x - a.b.width / 2) / a.c + a.a.x, (b.y - a.b.height / 2) / a.c + a.a.y);
  return new q(Math.min(Math.max(1, Math.round((c.x - 4.5) / 9)), 1998), Math.min(Math.max(1, Math.round((c.y + 8.5) / 17)), 598));
}
;function X(a) {
  this.c = a;
  this.a = this.b = null;
}
g = X.prototype;
g.start = function(a) {
  this.b = a;
  this.i(a);
};
g.i = function(a) {
  S(this.c);
  this.a = a;
  a = Math.min(this.b.y, this.a.y);
  for (var b = Math.max(this.b.x, this.a.x), c = Math.max(this.b.y, this.a.y), d = Math.min(this.b.x, this.a.x);d <= b;d++) {
    for (var e = a;e <= c;e++) {
      M(this.c, new q(d, e), "\u2009");
    }
  }
};
g.m = function() {
  O(this.c);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function xa(a, b) {
  this.a = a;
  this.c = b;
  this.b = null;
}
g = xa.prototype;
g.start = function(a) {
  this.b = a;
};
g.i = function(a) {
  S(this.a);
  var b = T(this.a, this.b), c = T(this.a, a);
  V(this.a, this.b, a, b.c && b.b || c.a && c.right);
  this.c && M(this.a, a, c.c ? "^" : c.b ? "v" : c.a ? "<" : ">");
};
g.m = function() {
  O(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function() {
};
function ya(a) {
  this.c = a;
  this.g = this.f = this.b = this.a = null;
  this.h = !0;
  this.l = [];
}
g = ya.prototype;
g.start = function(a) {
  this.a && this.b && (new E(this.a, this.b)).contains(a) ? (this.f = a, za(this), Aa(this, a)) : (this.a = a, this.b = null, this.h = !1, this.i(a));
};
function za(a) {
  var b = a.c.b.filter(function(a) {
    return null != G(a.a) && "\u2009" != G(a.a);
  }), c = ka(new E(a.a, a.b));
  a.l = b.map(function(a) {
    return new na(v(a.position, c), G(a.a));
  });
}
g.i = function(a) {
  if (this.f) {
    Aa(this, a);
  } else {
    if (1 != this.h) {
      this.b = a;
      S(this.c);
      a = new E(this.a, a);
      for (var b = a.a;b <= a.c;b++) {
        for (var c = a.b;c <= a.f;c++) {
          var d = new q(b, c), e = G(P(this.c, d));
          Q(this.c, d, null == e ? "\u2009" : e);
        }
      }
    }
  }
};
function Aa(a, b) {
  a.g = b;
  S(a.c);
  var c = new X(a.c);
  c.start(a.a);
  c.i(a.b);
  c = v(a.g, a.f).add(ka(new E(a.a, a.b)));
  Ba(a, c);
}
function Ba(a, b) {
  for (var c = n(a.l), d = c.next();!d.done;d = c.next()) {
    var d = d.value, e = d.value;
    Q(a.c, d.position.add(b), e);
  }
}
g.m = function() {
  this.f && (O(this.c), this.b = this.a = null);
  this.g = this.f = null;
  this.h = !0;
};
g.o = function(a) {
  return this.a && this.b && (new E(this.a, this.b)).contains(a) ? "pointer" : "default";
};
g.j = function(a) {
  if (this.a && this.b && ("<copy>" != a && "<cut>" != a || za(this), "<cut>" == a)) {
    var b = new X(this.c);
    b.start(this.a);
    b.i(this.b);
    O(this.c);
  }
  "<paste>" == a && (Ba(this, this.a), O(this.c));
};
function Ca(a) {
  this.b = a;
  this.c = this.a = null;
}
g = Ca.prototype;
g.start = function(a) {
  O(this.b);
  $("#text-tool-input").val("");
  this.a = a;
  a = G(P(this.b, this.a));
  Q(this.b, this.a, null == a ? "\u2009" : a);
};
g.i = function() {
};
g.m = function() {
  null != this.a && (this.c = this.a, this.a = null, $("#text-tool-widget").hide(0, function() {
    $("#text-tool-widget").show(0, function() {
      $("#text-tool-input").focus();
    });
  }));
};
g.o = function() {
  return "pointer";
};
g.j = function() {
  var a = $("#text-tool-input").val();
  S(this.b);
  for (var b = this.b, c = this.c, d = 0, e = 0, a = n(a), f = a.next();!f.done;f = a.next()) {
    f = f.value, "\n" == f ? (e++, d = 0) : ("\u200b" == R(b, c.add(new q(d, e))) && --d, K(f) ? (Q(b, c.add(new q(d, e)), f), d++, Q(b, c.add(new q(d, e)), "\u200b")) : Q(b, c.add(new q(d, e)), f), d++);
  }
};
function Da(a) {
  this.a = a;
  this.b = null;
  this.c = [];
}
g = Da.prototype;
g.start = function(a) {
  var b;
  if (B) {
    if (H(P(this.a, a))) {
      b = a;
    } else {
      var c = ja.concat([C.add(ha), C.add(ia), D.add(ha), D.add(ia)]);
      b = null;
      for (var d = 0, c = n(c), e = c.next();!e.done;e = c.next()) {
        var e = e.value, f = a.add(e), l = J(T(this.a, f));
        H(P(this.a, f)) && l > d && (b = e, d = l);
      }
      b = null == b ? a : a.add(b);
    }
  } else {
    b = a;
  }
  this.b = b;
  this.c = [];
  if (H(P(this.a, this.b))) {
    T(this.a, this.b);
    b = [];
    d = n(ja);
    for (c = d.next();!c.done;c = d.next()) {
      for (c = c.value, e = Ea(this, this.b, c), e = n(e), f = e.next();!f.done;f = e.next()) {
        var f = f.value, l = 0 != c.x, k = -1 != A.indexOf(G(P(this.a, a))), u = -1 != A.indexOf(G(P(this.a, f)));
        if (1 == J(T(this.a, f))) {
          b.push({position:f, s:l, v:k, u:u});
        } else {
          for (var F = n(ja), p = F.next();!p.done;p = F.next()) {
            p = p.value, 0 != c.add(p).length() && 2 != c.add(p).length() && (p = Ea(this, f, p), p.length && (p = p[0], b.push({position:p, s:l, v:k, w:u, u:-1 != A.indexOf(G(P(this.a, p)))})));
          }
        }
      }
    }
    this.c = b;
    this.i(this.b);
  }
};
g.i = function(a) {
  S(this.a);
  for (var b = n(this.c), c = b.next();!c.done;c = b.next()) {
    c = c.value, V(this.a, this.b, c.position, c.s, " ");
  }
  b = n(this.c);
  for (c = b.next();!c.done;c = b.next()) {
    c = c.value, V(this.a, a, c.position, c.s);
  }
  b = n(this.c);
  for (c = b.next();!c.done;c = b.next()) {
    c = c.value, c.v && M(this.a, a, "^"), c.u && M(this.a, c.position, "^"), c.w && M(this.a, new q(c.s ? c.position.x : a.x, c.s ? a.y : c.position.y), "^");
  }
};
g.m = function() {
  O(this.a);
};
function Ea(a, b, c) {
  for (var d = b.clone(), e = [];;) {
    var f = d.add(c);
    if (!H(P(a.a, f))) {
      return t(b, d) || e.push(d), e;
    }
    d = f;
    3 == J(T(a.a, d)) && e.push(d);
  }
}
g.o = function(a) {
  return H(P(this.a, a)) ? "pointer" : "default";
};
g.j = function() {
};
function Fa(a, b) {
  this.a = a;
  this.value = b;
  B && ($("#freeform-tool-input").val(""), $("#freeform-tool-input").hide(0, function() {
    $("#freeform-tool-input").show(0, function() {
      $("#freeform-tool-input").focus();
    });
  }));
}
g = Fa.prototype;
g.start = function(a) {
  M(this.a, a, this.value);
};
g.i = function(a) {
  M(this.a, a, this.value);
};
g.m = function() {
  O(this.a);
};
g.o = function() {
  return "crosshair";
};
g.j = function(a) {
  B && (this.value = $("#freeform-tool-input").val().substr(0, 1), $("#freeform-tool-input").blur(), $("#freeform-tool-input").hide(0));
  1 == a.length && (this.value = a);
};
function Ga(a, b) {
  var c = W(a.a, b);
  a.f || (a.f = c);
  t(c, a.f) || (a.a.b.style.cursor = a.c.o(c));
  2 != a.mode || t(c, a.f) || a.c.i(c);
  if (1 == a.mode) {
    var d = a.a, e = a.h.add(v(a.g, b).scale(1 / a.a.c));
    d.a = e;
    d.f = !0;
  }
  a.f = c;
}
function Y(a) {
  2 == a.mode && a.c.m();
  a.mode = 0;
  a.g = null;
  a.h = null;
  a.f = null;
}
function Ha(a) {
  $(window).resize(function() {
    ua(a.a);
  });
  $("#draw-tools > button.tool").click(function(b) {
    $("#text-tool-widget").hide(0);
    b = b.target.id;
    $("#draw-tools > button.tool").removeClass("active");
    $("#" + b).toggleClass("active");
    $(".dialog").removeClass("visible");
    "box-button" == b && (a.c = new ta(a.b));
    "line-button" == b && (a.c = new xa(a.b, !1));
    "arrow-button" == b && (a.c = new xa(a.b, !0));
    "freeform-button" == b && (a.c = new Fa(a.b, "X"));
    "erase-button" == b && (a.c = new X(a.b));
    "move-button" == b && (a.c = new Da(a.b));
    "text-button" == b && (a.c = new Ca(a.b));
    "select-button" == b && (a.c = new ya(a.b));
    O(a.b);
    a.a.b.focus();
  });
  $("#file-tools > button.tool").click(function(b) {
    b = b.target.id;
    $(".dialog").removeClass("visible");
    $("#" + b + "-dialog").toggleClass("visible");
    "import-button" == b && ($("#import-area").val(""), $("#import-area").focus());
    "export-button" == b && ($("#export-area").val(U(a.b)), $("#export-area").select());
    "clear-button" == b && L(a.b);
    "undo-button" == b && qa(a.b);
    "redo-button" == b && ra(a.b);
  });
  $("button.close-dialog-button").click(function() {
    $(".dialog").removeClass("visible");
  });
  $("#import-submit-button").click(function() {
    L(a.b);
    sa(a.b, $("#import-area").val(), W(a.a, new q(a.a.b.width / 2, a.a.b.height / 2)));
    O(a.b);
    $("#import-area").val("");
    $(".dialog").removeClass("visible");
  });
  $("#use-lines-button").click(function() {
    $(".dialog").removeClass("visible");
    var b = a.a;
    b.h = !0;
    b.f = !0;
  });
  $("#use-ascii-button").click(function() {
    $(".dialog").removeClass("visible");
    var b = a.a;
    b.h = !1;
    b.f = !0;
  });
  $(window).keypress(function(b) {
    b.ctrlKey || b.metaKey || 13 == b.keyCode || a.c.j(String.fromCharCode(b.keyCode));
  });
  $(window).keydown(function(b) {
    var c = null;
    if (b.ctrlKey || b.metaKey) {
      67 == b.keyCode && (c = "<copy>"), 86 == b.keyCode && (c = "<paste>"), 90 == b.keyCode && qa(a.b), 89 == b.keyCode && ra(a.b), 88 == b.keyCode && (c = "<cut>");
    }
    8 == b.keyCode && (c = "<backspace>");
    13 == b.keyCode && (c = "<enter>");
    38 == b.keyCode && (c = "<up>");
    40 == b.keyCode && (c = "<down>");
    37 == b.keyCode && (c = "<left>");
    39 == b.keyCode && (c = "<right>");
    null != c && a.c.j(c);
  });
  $("#text-tool-input, #freeform-tool-input").keyup(function() {
    a.c.j("");
  });
  $("#text-tool-input, #freeform-tool-input").change(function() {
    a.c.j("");
  });
  $("#text-tool-close").click(function() {
    $("#text-tool-widget").hide();
    O(a.b);
  });
}
;function Ia(a, b) {
  window.gapi.auth.authorize({client_id:"125643747010-9s9n1ne2fnnuh5v967licfkt83r4vba5.apps.googleusercontent.com", scope:"https://www.googleapis.com/auth/drive", A:b}, function(c) {
    !c || c.error || a.f || (a.f = !0, $("#drive-button").addClass("active"), window.setTimeout(function() {
      Ja(a);
    }, 500));
  });
}
function Ka(a) {
  window.gapi && window.gapi.auth && window.gapi.auth.authorize ? Ia(a, !0) : window.setTimeout(function() {
    Ka(a);
  }, 500);
}
function La(a) {
  window.setTimeout(function() {
    a.f ? Ma(a) : (Ia(a, !0), La(a));
  }, 1E3);
}
function Na(a, b) {
  a.a = b;
  $("#drive-filename").text(b.title);
  window.location.hash = b.id;
}
function Ma(a) {
  $("#drive-dialog").addClass("visible");
  var b = U(a.b);
  5 < b.length && b != a.c && Z(a);
  Oa();
}
function Oa() {
  Pa(window.gapi.client.request({path:"/drive/v2/files", params:{q:"mimeType = 'text/plain' and trashed = false"}, method:"GET"}), function(a) {
    $("#drive-file-list").children().remove();
    a = a.items;
    for (var b in a) {
      var c = document.createElement("li"), d = document.createElement("a");
      c.appendChild(d);
      d.href = "#" + a[b].id;
      $(d).click(function() {
        $("#drive-dialog").removeClass("visible");
      });
      d.innerHTML = a[b].title;
      $("#drive-file-list").append(c);
    }
  });
}
function Pa(a, b) {
  try {
    a.execute(function(a) {
      a.error || b(a);
    });
  } catch (c) {
  }
}
function Qa(a) {
  U(a.b) != a.c && a.a && a.a.editable && Z(a);
  window.setTimeout(function() {
    Qa(a);
  }, 5E3);
}
function Z(a) {
  var b = U(a.b);
  $("#drive-save-state").text("Saving...");
  Pa(Ra(a, b), function(c) {
    Na(a, c);
    $("#drive-save-state").text("Saved");
    a.c = b;
  });
}
function Ja(a) {
  1 < window.location.hash.length && ($("#drive-save-state").text("Loading..."), Pa(window.gapi.client.request({path:"/drive/v2/files/" + window.location.hash.substr(1, window.location.hash.length - 1), method:"GET"}), function(b) {
    Na(a, b);
    Sa(a);
  }));
}
function Sa(a) {
  Ta(a.a.downloadUrl, function(b) {
    $("#drive-save-state").text("Loaded");
    L(a.b);
    sa(a.b, b, W(a.g, new q(a.g.b.width / 2, a.g.b.height / 2)));
    O(a.b);
    a.c = U(a.b);
  });
}
function Ra(a, b) {
  var c = "\r\n---------314159265358979323846\r\nContent-Type: application/json\r\n\r\n" + JSON.stringify({title:a.a ? a.a.title : "Untitled ASCII Diagram", mimeType:"text/plain"}) + "\r\n---------314159265358979323846\r\nContent-Type: text/plain\r\n\r\n" + b + "\r\n---------314159265358979323846--";
  return window.gapi.client.request({method:a.a ? "PUT" : "POST", path:"/upload/drive/v2/files" + (a.a ? "/" + a.a.id : ""), params:{uploadType:"multipart"}, headers:{"Content-Type":'multipart/mixed; boundary="-------314159265358979323846"'}, body:c});
}
function Ta(a, b) {
  var c = window.gapi.auth.getToken().access_token, d = new XMLHttpRequest;
  d.open("GET", a);
  d.setRequestHeader("Authorization", "Bearer " + c);
  d.onload = function() {
    b(d.responseText);
  };
  d.onerror = function() {
    b(null);
  };
  d.send();
}
;function Ua(a) {
  var b = $(a.a.a.b);
  b.on("mousewheel", function(c) {
    c = a.a.a.c * (0 < c.originalEvent.wheelDelta ? 1.1 : .9);
    c = Math.max(Math.min(c, 5), .2);
    var b = a.a.a;
    b.c = c;
    b.f = !0;
  });
  b.mousedown(function(c) {
    if (c.ctrlKey || c.metaKey) {
      var b = a.a;
      c = new q(c.clientX, c.clientY);
      b.mode = 1;
      b.g = c;
      b.h = b.a.a;
    } else {
      b = a.a, c = new q(c.clientX, c.clientY), b.mode = 2, b.c.start(W(b.a, c));
    }
  });
  b.mouseup(function() {
    Y(a.a);
  });
  b.mouseleave(function() {
    Y(a.a);
  });
  b.mousemove(function(c) {
    Ga(a.a, new q(c.clientX, c.clientY));
  });
}
function Va(a, b) {
  a.f = b;
  a.h = $.now();
  a.b = !1;
  window.setTimeout(function() {
    if (!a.b && !a.c && a.f) {
      var c = a.a;
      c.mode = 2;
      c.c.start(W(c.a, b));
    }
  }, 150);
}
function Wa(a) {
  var b = $(a.a.a.b);
  b.on("touchstart", function(c) {
    c.preventDefault();
    if (1 == c.originalEvent.touches.length) {
      Va(a, r(c));
    } else {
      if (1 < c.originalEvent.touches.length) {
        var b = r(c, 0);
        c = r(c, 1);
        Y(a.a);
        a.c = !0;
        a.b = !1;
        a.l = v(b, c).length();
        a.g = a.a.a.c;
      }
    }
  });
  b.on("touchmove", function(c) {
    c.preventDefault();
    if (1 == c.originalEvent.touches.length) {
      c = r(c);
      if (!a.b && 150 > $.now() - a.h && 6 < v(c, a.f).length()) {
        a.b = !0;
        var b = a.a;
        b.mode = 1;
        b.g = c;
        b.h = b.a.a;
      }
      Ga(a.a, c);
    } else {
      1 < c.originalEvent.touches.length && a.c && (c = a.g * v(r(c, 0), r(c, 1)).length() / a.l, c = Math.max(Math.min(c, 5), .5), b = a.a.a, b.c = c, b.f = !0);
    }
  });
  b.on("touchend", function(b) {
    b.preventDefault();
    a.b = !1;
    a.c = !1;
    a.f = null;
    Y(a.a);
  });
}
;var Xa = new function() {
  this.a = Array(2E3);
  this.b = [];
  this.c = !0;
  this.g = [];
  this.f = [];
  for (var a = 0;a < this.a.length;a++) {
    this.a[a] = Array(600);
    for (var b = 0;b < this.a[a].length;b++) {
      this.a[a][b] = new la;
    }
  }
}, Ya = new function(a) {
  this.g = a;
  this.b = document.getElementById("ascii-canvas");
  this.context = this.b.getContext("2d");
  this.c = 1;
  this.a = new q(9E3, 5100);
  this.f = !0;
  this.h = !1;
  ua(this);
}(Xa), Za = new function(a, b) {
  this.a = a;
  this.b = b;
  this.c = new ta(b);
  this.mode = 0;
  this.f = null;
  Ha(this);
}(Ya, Xa);
new function(a) {
  this.a = a;
  this.c = this.b = !1;
  Wa(this);
}(Za);
new function(a) {
  this.a = a;
  Ua(this);
}(Za);
new function(a, b) {
  var c = this;
  this.f = !1;
  this.b = a;
  this.g = b;
  this.a = null;
  this.c = "";
  Ka(this);
  $("#drive-button").click(function() {
    c.f ? Ma(c) : (Ia(c, !1), La(c));
  });
  $("#drive-filename").click(function() {
    var a = "" + $("#drive-filename").text(), a = prompt("Enter new filename:", a);
    c.a.title = a;
    Z(c);
    Oa();
  });
  Qa(this);
  $(window).on("hashchange", function() {
    Ja(c);
  });
  $("#drive-new-file-button").click(function() {
    c.a = null;
    L(c.b);
    window.location.hash = "";
    Z(c);
    $("#drive-dialog").removeClass("visible");
  });
}(Xa, Ya);
va(Ya);

