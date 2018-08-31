/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */


! function (t, e) {
    "object" == typeof exports && "undefined" != typeof module ? e(exports) : "function" == typeof define && define.amd ? define(["exports"], e) : e(t.echarts = {})
}(this, function (t) {
    "use strict";

    function e(t, e) {
        "createCanvas" === t && (Lh = null), kh[t] = e
    }

    function n(t) {
        if (null == t || "object" != typeof t) return t;
        var e = t,
            i = bh.call(t);
        if ("[object Array]" === i) {
            if (!E(t)) {
                e = [];
                for (var r = 0, a = t.length; r < a; r++) e[r] = n(t[r])
            }
        } else if (wh[i]) {
            if (!E(t)) {
                var o = t.constructor;
                if (t.constructor.from) e = o.from(t);
                else {
                    e = new o(t.length);
                    for (var r = 0, a = t.length; r < a; r++) e[r] = n(t[r])
                }
            }
        } else if (!xh[i] && !E(t) && !S(t)) {
            e = {};
            for (var s in t) t.hasOwnProperty(s) && (e[s] = n(t[s]))
        }
        return e
    }

    function i(t, e, r) {
        if (!w(e) || !w(t)) return r ? n(e) : t;
        for (var a in e)
            if (e.hasOwnProperty(a)) {
                var o = t[a],
                    s = e[a];
                !w(s) || !w(o) || y(s) || y(o) || S(s) || S(o) || b(s) || b(o) || E(s) || E(o) ? !r && a in t || (t[a] = n(e[a], !0)) : i(o, s, r)
            }
        return t
    }

    function r(t, e) {
        for (var n = t[0], r = 1, a = t.length; r < a; r++) n = i(n, t[r], e);
        return n
    }

    function a(t, e) {
        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n]);
        return t
    }

    function o(t, e, n) {
        for (var i in e) e.hasOwnProperty(i) && (n ? null != e[i] : null == t[i]) && (t[i] = e[i]);
        return t
    }

    function s() {
        return Lh || (Lh = Ah().getContext("2d")), Lh
    }

    function l(t, e) {
        if (t) {
            if (t.indexOf) return t.indexOf(e);
            for (var n = 0, i = t.length; n < i; n++)
                if (t[n] === e) return n
        }
        return -1
    }

    function h(t, e) {
        function n() {}
        var i = t.prototype;
        n.prototype = e.prototype, t.prototype = new n;
        for (var r in i) t.prototype[r] = i[r];
        t.prototype.constructor = t, t.superClass = e
    }

    function u(t, e, n) {
        o(t = "prototype" in t ? t.prototype : t, e = "prototype" in e ? e.prototype : e, n)
    }

    function c(t) {
        if (t) return "string" != typeof t && "number" == typeof t.length
    }

    function f(t, e, n) {
        if (t && e)
            if (t.forEach && t.forEach === Sh) t.forEach(e, n);
            else if (t.length === +t.length)
            for (var i = 0, r = t.length; i < r; i++) e.call(n, t[i], i, t);
        else
            for (var a in t) t.hasOwnProperty(a) && e.call(n, t[a], a, t)
    }

    function d(t, e, n) {
        if (t && e) {
            if (t.map && t.map === Ch) return t.map(e, n);
            for (var i = [], r = 0, a = t.length; r < a; r++) i.push(e.call(n, t[r], r, t));
            return i
        }
    }

    function p(t, e, n, i) {
        if (t && e) {
            if (t.reduce && t.reduce === Dh) return t.reduce(e, n, i);
            for (var r = 0, a = t.length; r < a; r++) n = e.call(i, n, t[r], r, t);
            return n
        }
    }

    function g(t, e, n) {
        if (t && e) {
            if (t.filter && t.filter === Ih) return t.filter(e, n);
            for (var i = [], r = 0, a = t.length; r < a; r++) e.call(n, t[r], r, t) && i.push(t[r]);
            return i
        }
    }

    function m(t, e) {
        var n = Th.call(arguments, 2);
        return function () {
            return t.apply(e, n.concat(Th.call(arguments)))
        }
    }

    function v(t) {
        var e = Th.call(arguments, 1);
        return function () {
            return t.apply(this, e.concat(Th.call(arguments)))
        }
    }

    function y(t) {
        return "[object Array]" === bh.call(t)
    }

    function _(t) {
        return "function" == typeof t
    }

    function x(t) {
        return "[object String]" === bh.call(t)
    }

    function w(t) {
        var e = typeof t;
        return "function" === e || !!t && "object" == e
    }

    function b(t) {
        return !!xh[bh.call(t)]
    }

    function M(t) {
        return !!wh[bh.call(t)]
    }

    function S(t) {
        return "object" == typeof t && "number" == typeof t.nodeType && "object" == typeof t.ownerDocument
    }

    function I(t) {
        return t !== t
    }

    function T(t) {
        for (var e = 0, n = arguments.length; e < n; e++)
            if (null != arguments[e]) return arguments[e]
    }

    function C(t, e) {
        return null != t ? t : e
    }

    function D(t, e, n) {
        return null != t ? t : null != e ? e : n
    }

    function k() {
        return Function.call.apply(Th, arguments)
    }

    function A(t) {
        if ("number" == typeof t) return [t, t, t, t];
        var e = t.length;
        return 2 === e ? [t[0], t[1], t[0], t[1]] : 3 === e ? [t[0], t[1], t[2], t[1]] : t
    }

    function L(t, e) {
        if (!t) throw new Error(e)
    }

    function P(t) {
        return null == t ? null : "function" == typeof t.trim ? t.trim() : t.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
    }

    function O(t) {
        t[Ph] = !0
    }

    function E(t) {
        return t[Ph]
    }

    function N(t) {
        function e(t, e) {
            n ? i.set(t, e) : i.set(e, t)
        }
        var n = y(t),
            i = this;
        t instanceof N ? t.each(e) : t && f(t, e)
    }

    function R(t) {
        return new N(t)
    }

    function B() {}

    function z(t, e) {
        var n = new Oh(2);
        return null == t && (t = 0), null == e && (e = 0), n[0] = t, n[1] = e, n
    }

    function F(t) {
        var e = new Oh(2);
        return e[0] = t[0], e[1] = t[1], e
    }

    function V(t, e, n) {
        return t[0] = e[0] + n[0], t[1] = e[1] + n[1], t
    }

    function W(t, e, n) {
        return t[0] = e[0] - n[0], t[1] = e[1] - n[1], t
    }

    function H(t) {
        return Math.sqrt(G(t))
    }

    function G(t) {
        return t[0] * t[0] + t[1] * t[1]
    }

    function q(t, e, n) {
        return t[0] = e[0] * n, t[1] = e[1] * n, t
    }

    function X(t, e) {
        var n = H(e);
        return 0 === n ? (t[0] = 0, t[1] = 0) : (t[0] = e[0] / n, t[1] = e[1] / n), t
    }

    function U(t, e) {
        return Math.sqrt((t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1]))
    }

    function Y(t, e, n) {
        var i = e[0],
            r = e[1];
        return t[0] = n[0] * i + n[2] * r + n[4], t[1] = n[1] * i + n[3] * r + n[5], t
    }

    function j(t, e, n) {
        return t[0] = Math.min(e[0], n[0]), t[1] = Math.min(e[1], n[1]), t
    }

    function Z(t, e, n) {
        return t[0] = Math.max(e[0], n[0]), t[1] = Math.max(e[1], n[1]), t
    }

    function $() {
        this.on("mousedown", this._dragStart, this), this.on("mousemove", this._drag, this), this.on("mouseup", this._dragEnd, this), this.on("globalout", this._dragEnd, this)
    }

    function K(t, e) {
        return {
            target: t,
            topTarget: e && e.topTarget
        }
    }

    function Q(t, e, n) {
        return {
            type: t,
            event: n,
            target: e.target,
            topTarget: e.topTarget,
            cancelBubble: !1,
            offsetX: n.zrX,
            offsetY: n.zrY,
            gestureEvent: n.gestureEvent,
            pinchX: n.pinchX,
            pinchY: n.pinchY,
            pinchScale: n.pinchScale,
            wheelDelta: n.zrDelta,
            zrByTouch: n.zrByTouch,
            which: n.which
        }
    }

    function J() {}

    function tt(t, e, n) {
        if (t[t.rectHover ? "rectContain" : "contain"](e, n)) {
            for (var i, r = t; r;) {
                if (r.clipPath && !r.clipPath.contain(e, n)) return !1;
                r.silent && (i = !0), r = r.parent
            }
            return !i || zh
        }
        return !1
    }

    function et() {
        var t = new Wh(6);
        return nt(t), t
    }

    function nt(t) {
        return t[0] = 1, t[1] = 0, t[2] = 0, t[3] = 1, t[4] = 0, t[5] = 0, t
    }

    function it(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4], t[5] = e[5], t
    }

    function rt(t, e, n) {
        var i = e[0] * n[0] + e[2] * n[1],
            r = e[1] * n[0] + e[3] * n[1],
            a = e[0] * n[2] + e[2] * n[3],
            o = e[1] * n[2] + e[3] * n[3],
            s = e[0] * n[4] + e[2] * n[5] + e[4],
            l = e[1] * n[4] + e[3] * n[5] + e[5];
        return t[0] = i, t[1] = r, t[2] = a, t[3] = o, t[4] = s, t[5] = l, t
    }

    function at(t, e, n) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t[4] = e[4] + n[0], t[5] = e[5] + n[1], t
    }

    function ot(t, e, n) {
        var i = e[0],
            r = e[2],
            a = e[4],
            o = e[1],
            s = e[3],
            l = e[5],
            h = Math.sin(n),
            u = Math.cos(n);
        return t[0] = i * u + o * h, t[1] = -i * h + o * u, t[2] = r * u + s * h, t[3] = -r * h + u * s, t[4] = u * a + h * l, t[5] = u * l - h * a, t
    }

    function st(t, e, n) {
        var i = n[0],
            r = n[1];
        return t[0] = e[0] * i, t[1] = e[1] * r, t[2] = e[2] * i, t[3] = e[3] * r, t[4] = e[4] * i, t[5] = e[5] * r, t
    }

    function lt(t, e) {
        var n = e[0],
            i = e[2],
            r = e[4],
            a = e[1],
            o = e[3],
            s = e[5],
            l = n * o - a * i;
        return l ? (l = 1 / l, t[0] = o * l, t[1] = -a * l, t[2] = -i * l, t[3] = n * l, t[4] = (i * s - o * r) * l, t[5] = (a * r - n * s) * l, t) : null
    }

    function ht(t) {
        return t > Gh || t < -Gh
    }

    function ut(t) {
        this._target = t.target, this._life = t.life || 1e3, this._delay = t.delay || 0, this._initialized = !1, this.loop = null != t.loop && t.loop, this.gap = t.gap || 0, this.easing = t.easing || "Linear", this.onframe = t.onframe, this.ondestroy = t.ondestroy, this.onrestart = t.onrestart, this._pausedTime = 0, this._paused = !1
    }

    function ct(t) {
        return (t = Math.round(t)) < 0 ? 0 : t > 255 ? 255 : t
    }

    function ft(t) {
        return t < 0 ? 0 : t > 1 ? 1 : t
    }

    function dt(t) {
        return ct(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 * 255 : parseInt(t, 10))
    }

    function pt(t) {
        return ft(t.length && "%" === t.charAt(t.length - 1) ? parseFloat(t) / 100 : parseFloat(t))
    }

    function gt(t, e, n) {
        return n < 0 ? n += 1 : n > 1 && (n -= 1), 6 * n < 1 ? t + (e - t) * n * 6 : 2 * n < 1 ? e : 3 * n < 2 ? t + (e - t) * (2 / 3 - n) * 6 : t
    }

    function mt(t, e, n, i, r) {
        return t[0] = e, t[1] = n, t[2] = i, t[3] = r, t
    }

    function vt(t, e) {
        return t[0] = e[0], t[1] = e[1], t[2] = e[2], t[3] = e[3], t
    }

    function yt(t, e) {
        eu && vt(eu, e), eu = tu.put(t, eu || e.slice())
    }

    function _t(t, e) {
        if (t) {
            e = e || [];
            var n = tu.get(t);
            if (n) return vt(e, n);
            var i = (t += "").replace(/ /g, "").toLowerCase();
            if (i in Jh) return vt(e, Jh[i]), yt(t, e), e;
            if ("#" !== i.charAt(0)) {
                var r = i.indexOf("("),
                    a = i.indexOf(")");
                if (-1 !== r && a + 1 === i.length) {
                    var o = i.substr(0, r),
                        s = i.substr(r + 1, a - (r + 1)).split(","),
                        l = 1;
                    switch (o) {
                        case "rgba":
                            if (4 !== s.length) return void mt(e, 0, 0, 0, 1);
                            l = pt(s.pop());
                        case "rgb":
                            return 3 !== s.length ? void mt(e, 0, 0, 0, 1) : (mt(e, dt(s[0]), dt(s[1]), dt(s[2]), l), yt(t, e), e);
                        case "hsla":
                            return 4 !== s.length ? void mt(e, 0, 0, 0, 1) : (s[3] = pt(s[3]), xt(s, e), yt(t, e), e);
                        case "hsl":
                            return 3 !== s.length ? void mt(e, 0, 0, 0, 1) : (xt(s, e), yt(t, e), e);
                        default:
                            return
                    }
                }
                mt(e, 0, 0, 0, 1)
            } else {
                if (4 === i.length) return (h = parseInt(i.substr(1), 16)) >= 0 && h <= 4095 ? (mt(e, (3840 & h) >> 4 | (3840 & h) >> 8, 240 & h | (240 & h) >> 4, 15 & h | (15 & h) << 4, 1), yt(t, e), e) : void mt(e, 0, 0, 0, 1);
                if (7 === i.length) {
                    var h = parseInt(i.substr(1), 16);
                    return h >= 0 && h <= 16777215 ? (mt(e, (16711680 & h) >> 16, (65280 & h) >> 8, 255 & h, 1), yt(t, e), e) : void mt(e, 0, 0, 0, 1)
                }
            }
        }
    }

    function xt(t, e) {
        var n = (parseFloat(t[0]) % 360 + 360) % 360 / 360,
            i = pt(t[1]),
            r = pt(t[2]),
            a = r <= .5 ? r * (i + 1) : r + i - r * i,
            o = 2 * r - a;
        return e = e || [], mt(e, ct(255 * gt(o, a, n + 1 / 3)), ct(255 * gt(o, a, n)), ct(255 * gt(o, a, n - 1 / 3)), 1), 4 === t.length && (e[3] = t[3]), e
    }

    function wt(t, e) {
        var n = _t(t);
        if (n) {
            for (var i = 0; i < 3; i++) n[i] = e < 0 ? n[i] * (1 - e) | 0 : (255 - n[i]) * e + n[i] | 0, n[i] > 255 ? n[i] = 255 : t[i] < 0 && (n[i] = 0);
            return bt(n, 4 === n.length ? "rgba" : "rgb")
        }
    }

    function bt(t, e) {
        if (t && t.length) {
            var n = t[0] + "," + t[1] + "," + t[2];
            return "rgba" !== e && "hsva" !== e && "hsla" !== e || (n += "," + t[3]), e + "(" + n + ")"
        }
    }

    function Mt(t, e) {
        return t[e]
    }

    function St(t, e, n) {
        t[e] = n
    }

    function It(t, e, n) {
        return (e - t) * n + t
    }

    function Tt(t, e, n) {
        return n > .5 ? e : t
    }

    function Ct(t, e, n, i, r) {
        var a = t.length;
        if (1 == r)
            for (s = 0; s < a; s++) i[s] = It(t[s], e[s], n);
        else
            for (var o = a && t[0].length, s = 0; s < a; s++)
                for (var l = 0; l < o; l++) i[s][l] = It(t[s][l], e[s][l], n)
    }

    function Dt(t, e, n) {
        var i = t.length,
            r = e.length;
        if (i !== r)
            if (i > r) t.length = r;
            else
                for (o = i; o < r; o++) t.push(1 === n ? e[o] : nu.call(e[o]));
        for (var a = t[0] && t[0].length, o = 0; o < t.length; o++)
            if (1 === n) isNaN(t[o]) && (t[o] = e[o]);
            else
                for (var s = 0; s < a; s++) isNaN(t[o][s]) && (t[o][s] = e[o][s])
    }

    function kt(t, e, n) {
        if (t === e) return !0;
        var i = t.length;
        if (i !== e.length) return !1;
        if (1 === n) {
            for (a = 0; a < i; a++)
                if (t[a] !== e[a]) return !1
        } else
            for (var r = t[0].length, a = 0; a < i; a++)
                for (var o = 0; o < r; o++)
                    if (t[a][o] !== e[a][o]) return !1;
        return !0
    }

    function At(t, e, n, i, r, a, o, s, l) {
        var h = t.length;
        if (1 == l)
            for (c = 0; c < h; c++) s[c] = Lt(t[c], e[c], n[c], i[c], r, a, o);
        else
            for (var u = t[0].length, c = 0; c < h; c++)
                for (var f = 0; f < u; f++) s[c][f] = Lt(t[c][f], e[c][f], n[c][f], i[c][f], r, a, o)
    }

    function Lt(t, e, n, i, r, a, o) {
        var s = .5 * (n - t),
            l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
    }

    function Pt(t) {
        if (c(t)) {
            var e = t.length;
            if (c(t[0])) {
                for (var n = [], i = 0; i < e; i++) n.push(nu.call(t[i]));
                return n
            }
            return nu.call(t)
        }
        return t
    }

    function Ot(t) {
        return t[0] = Math.floor(t[0]), t[1] = Math.floor(t[1]), t[2] = Math.floor(t[2]), "rgba(" + t.join(",") + ")"
    }

    function Et(t) {
        var e = t[t.length - 1].value;
        return c(e && e[0]) ? 2 : 1
    }

    function Nt(t, e, n, i, r, a) {
        var o = t._getter,
            s = t._setter,
            l = "spline" === e,
            h = i.length;
        if (h) {
            var u, f = c(i[0].value),
                d = !1,
                p = !1,
                g = f ? Et(i) : 0;
            i.sort(function (t, e) {
                return t.time - e.time
            }), u = i[h - 1].time;
            for (var m = [], v = [], y = i[0].value, _ = !0, x = 0; x < h; x++) {
                m.push(i[x].time / u);
                var w = i[x].value;
                if (f && kt(w, y, g) || !f && w === y || (_ = !1), y = w, "string" == typeof w) {
                    var b = _t(w);
                    b ? (w = b, d = !0) : p = !0
                }
                v.push(w)
            }
            if (a || !_) {
                for (var M = v[h - 1], x = 0; x < h - 1; x++) f ? Dt(v[x], M, g) : !isNaN(v[x]) || isNaN(M) || p || d || (v[x] = M);
                f && Dt(o(t._target, r), M, g);
                var S, I, T, C, D, k, A = 0,
                    L = 0;
                if (d) var P = [0, 0, 0, 0];
                var O = new ut({
                    target: t._target,
                    life: u,
                    loop: t._loop,
                    delay: t._delay,
                    onframe: function (t, e) {
                        var n;
                        if (e < 0) n = 0;
                        else if (e < L) {
                            for (n = S = Math.min(A + 1, h - 1); n >= 0 && !(m[n] <= e); n--);
                            n = Math.min(n, h - 2)
                        } else {
                            for (n = A; n < h && !(m[n] > e); n++);
                            n = Math.min(n - 1, h - 2)
                        }
                        A = n, L = e;
                        var i = m[n + 1] - m[n];
                        if (0 !== i)
                            if (I = (e - m[n]) / i, l)
                                if (C = v[n], T = v[0 === n ? n : n - 1], D = v[n > h - 2 ? h - 1 : n + 1], k = v[n > h - 3 ? h - 1 : n + 2], f) At(T, C, D, k, I, I * I, I * I * I, o(t, r), g);
                                else {
                                    if (d) a = At(T, C, D, k, I, I * I, I * I * I, P, 1), a = Ot(P);
                                    else {
                                        if (p) return Tt(C, D, I);
                                        a = Lt(T, C, D, k, I, I * I, I * I * I)
                                    }
                                    s(t, r, a)
                                }
                        else if (f) Ct(v[n], v[n + 1], I, o(t, r), g);
                        else {
                            var a;
                            if (d) Ct(v[n], v[n + 1], I, P, 1), a = Ot(P);
                            else {
                                if (p) return Tt(v[n], v[n + 1], I);
                                a = It(v[n], v[n + 1], I)
                            }
                            s(t, r, a)
                        }
                    },
                    ondestroy: n
                });
                return e && "spline" !== e && (O.easing = e), O
            }
        }
    }

    function Rt(t, e, n, i) {
        n < 0 && (t += n, n = -n), i < 0 && (e += i, i = -i), this.x = t, this.y = e, this.width = n, this.height = i
    }

    function Bt(t) {
        for (var e = 0; t >= pu;) e |= 1 & t, t >>= 1;
        return t + e
    }

    function zt(t, e, n, i) {
        var r = e + 1;
        if (r === n) return 1;
        if (i(t[r++], t[e]) < 0) {
            for (; r < n && i(t[r], t[r - 1]) < 0;) r++;
            Ft(t, e, r)
        } else
            for (; r < n && i(t[r], t[r - 1]) >= 0;) r++;
        return r - e
    }

    function Ft(t, e, n) {
        for (n--; e < n;) {
            var i = t[e];
            t[e++] = t[n], t[n--] = i
        }
    }

    function Vt(t, e, n, i, r) {
        for (i === e && i++; i < n; i++) {
            for (var a, o = t[i], s = e, l = i; s < l;) r(o, t[a = s + l >>> 1]) < 0 ? l = a : s = a + 1;
            var h = i - s;
            switch (h) {
                case 3:
                    t[s + 3] = t[s + 2];
                case 2:
                    t[s + 2] = t[s + 1];
                case 1:
                    t[s + 1] = t[s];
                    break;
                default:
                    for (; h > 0;) t[s + h] = t[s + h - 1], h--
            }
            t[s] = o
        }
    }

    function Wt(t, e, n, i, r, a) {
        var o = 0,
            s = 0,
            l = 1;
        if (a(t, e[n + r]) > 0) {
            for (s = i - r; l < s && a(t, e[n + r + l]) > 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s), o += r, l += r
        } else {
            for (s = r + 1; l < s && a(t, e[n + r - l]) <= 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s);
            var h = o;
            o = r - l, l = r - h
        }
        for (o++; o < l;) {
            var u = o + (l - o >>> 1);
            a(t, e[n + u]) > 0 ? o = u + 1 : l = u
        }
        return l
    }

    function Ht(t, e, n, i, r, a) {
        var o = 0,
            s = 0,
            l = 1;
        if (a(t, e[n + r]) < 0) {
            for (s = r + 1; l < s && a(t, e[n + r - l]) < 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s);
            var h = o;
            o = r - l, l = r - h
        } else {
            for (s = i - r; l < s && a(t, e[n + r + l]) >= 0;) o = l, (l = 1 + (l << 1)) <= 0 && (l = s);
            l > s && (l = s), o += r, l += r
        }
        for (o++; o < l;) {
            var u = o + (l - o >>> 1);
            a(t, e[n + u]) < 0 ? l = u : o = u + 1
        }
        return l
    }

    function Gt(t, e) {
        function n(n) {
            var s = a[n],
                h = o[n],
                u = a[n + 1],
                c = o[n + 1];
            o[n] = h + c, n === l - 3 && (a[n + 1] = a[n + 2], o[n + 1] = o[n + 2]), l--;
            var f = Ht(t[u], t, s, h, 0, e);
            s += f, 0 !== (h -= f) && 0 !== (c = Wt(t[s + h - 1], t, u, c, c - 1, e)) && (h <= c ? i(s, h, u, c) : r(s, h, u, c))
        }

        function i(n, i, r, a) {
            var o = 0;
            for (o = 0; o < i; o++) h[o] = t[n + o];
            var l = 0,
                u = r,
                c = n;
            if (t[c++] = t[u++], 0 != --a)
                if (1 !== i) {
                    for (var f, d, p, g = s;;) {
                        f = 0, d = 0, p = !1;
                        do {
                            if (e(t[u], h[l]) < 0) {
                                if (t[c++] = t[u++], d++, f = 0, 0 == --a) {
                                    p = !0;
                                    break
                                }
                            } else if (t[c++] = h[l++], f++, d = 0, 1 == --i) {
                                p = !0;
                                break
                            }
                        } while ((f | d) < g);
                        if (p) break;
                        do {
                            if (0 !== (f = Ht(t[u], h, l, i, 0, e))) {
                                for (o = 0; o < f; o++) t[c + o] = h[l + o];
                                if (c += f, l += f, (i -= f) <= 1) {
                                    p = !0;
                                    break
                                }
                            }
                            if (t[c++] = t[u++], 0 == --a) {
                                p = !0;
                                break
                            }
                            if (0 !== (d = Wt(h[l], t, u, a, 0, e))) {
                                for (o = 0; o < d; o++) t[c + o] = t[u + o];
                                if (c += d, u += d, 0 === (a -= d)) {
                                    p = !0;
                                    break
                                }
                            }
                            if (t[c++] = h[l++], 1 == --i) {
                                p = !0;
                                break
                            }
                            g--
                        } while (f >= gu || d >= gu);
                        if (p) break;
                        g < 0 && (g = 0), g += 2
                    }
                    if ((s = g) < 1 && (s = 1), 1 === i) {
                        for (o = 0; o < a; o++) t[c + o] = t[u + o];
                        t[c + a] = h[l]
                    } else {
                        if (0 === i) throw new Error;
                        for (o = 0; o < i; o++) t[c + o] = h[l + o]
                    }
                } else {
                    for (o = 0; o < a; o++) t[c + o] = t[u + o];
                    t[c + a] = h[l]
                }
            else
                for (o = 0; o < i; o++) t[c + o] = h[l + o]
        }

        function r(n, i, r, a) {
            var o = 0;
            for (o = 0; o < a; o++) h[o] = t[r + o];
            var l = n + i - 1,
                u = a - 1,
                c = r + a - 1,
                f = 0,
                d = 0;
            if (t[c--] = t[l--], 0 != --i)
                if (1 !== a) {
                    for (var p = s;;) {
                        var g = 0,
                            m = 0,
                            v = !1;
                        do {
                            if (e(h[u], t[l]) < 0) {
                                if (t[c--] = t[l--], g++, m = 0, 0 == --i) {
                                    v = !0;
                                    break
                                }
                            } else if (t[c--] = h[u--], m++, g = 0, 1 == --a) {
                                v = !0;
                                break
                            }
                        } while ((g | m) < p);
                        if (v) break;
                        do {
                            if (0 != (g = i - Ht(h[u], t, n, i, i - 1, e))) {
                                for (i -= g, d = (c -= g) + 1, f = (l -= g) + 1, o = g - 1; o >= 0; o--) t[d + o] = t[f + o];
                                if (0 === i) {
                                    v = !0;
                                    break
                                }
                            }
                            if (t[c--] = h[u--], 1 == --a) {
                                v = !0;
                                break
                            }
                            if (0 != (m = a - Wt(t[l], h, 0, a, a - 1, e))) {
                                for (a -= m, d = (c -= m) + 1, f = (u -= m) + 1, o = 0; o < m; o++) t[d + o] = h[f + o];
                                if (a <= 1) {
                                    v = !0;
                                    break
                                }
                            }
                            if (t[c--] = t[l--], 0 == --i) {
                                v = !0;
                                break
                            }
                            p--
                        } while (g >= gu || m >= gu);
                        if (v) break;
                        p < 0 && (p = 0), p += 2
                    }
                    if ((s = p) < 1 && (s = 1), 1 === a) {
                        for (d = (c -= i) + 1, f = (l -= i) + 1, o = i - 1; o >= 0; o--) t[d + o] = t[f + o];
                        t[c] = h[u]
                    } else {
                        if (0 === a) throw new Error;
                        for (f = c - (a - 1), o = 0; o < a; o++) t[f + o] = h[o]
                    }
                } else {
                    for (d = (c -= i) + 1, f = (l -= i) + 1, o = i - 1; o >= 0; o--) t[d + o] = t[f + o];
                    t[c] = h[u]
                }
            else
                for (f = c - (a - 1), o = 0; o < a; o++) t[f + o] = h[o]
        }
        var a, o, s = gu,
            l = 0,
            h = [];
        a = [], o = [], this.mergeRuns = function () {
            for (; l > 1;) {
                var t = l - 2;
                if (t >= 1 && o[t - 1] <= o[t] + o[t + 1] || t >= 2 && o[t - 2] <= o[t] + o[t - 1]) o[t - 1] < o[t + 1] && t--;
                else if (o[t] > o[t + 1]) break;
                n(t)
            }
        }, this.forceMergeRuns = function () {
            for (; l > 1;) {
                var t = l - 2;
                t > 0 && o[t - 1] < o[t + 1] && t--, n(t)
            }
        }, this.pushRun = function (t, e) {
            a[l] = t, o[l] = e, l += 1
        }
    }

    function qt(t, e, n, i) {
        n || (n = 0), i || (i = t.length);
        var r = i - n;
        if (!(r < 2)) {
            var a = 0;
            if (r < pu) return a = zt(t, n, i, e), void Vt(t, n, i, n + a, e);
            var o = new Gt(t, e),
                s = Bt(r);
            do {
                if ((a = zt(t, n, i, e)) < s) {
                    var l = r;
                    l > s && (l = s), Vt(t, n, n + l, n + a, e), a = l
                }
                o.pushRun(n, a), o.mergeRuns(), r -= a, n += a
            } while (0 !== r);
            o.forceMergeRuns()
        }
    }

    function Xt(t, e) {
        return t.zlevel === e.zlevel ? t.z === e.z ? t.z2 - e.z2 : t.z - e.z : t.zlevel - e.zlevel
    }

    function Ut(t, e, n) {
        var i = null == e.x ? 0 : e.x,
            r = null == e.x2 ? 1 : e.x2,
            a = null == e.y ? 0 : e.y,
            o = null == e.y2 ? 0 : e.y2;
        return e.global || (i = i * n.width + n.x, r = r * n.width + n.x, a = a * n.height + n.y, o = o * n.height + n.y), i = isNaN(i) ? 0 : i, r = isNaN(r) ? 1 : r, a = isNaN(a) ? 0 : a, o = isNaN(o) ? 0 : o, t.createLinearGradient(i, a, r, o)
    }

    function Yt(t, e, n) {
        var i = n.width,
            r = n.height,
            a = Math.min(i, r),
            o = null == e.x ? .5 : e.x,
            s = null == e.y ? .5 : e.y,
            l = null == e.r ? .5 : e.r;
        return e.global || (o = o * i + n.x, s = s * r + n.y, l *= a), t.createRadialGradient(o, s, 0, o, s, l)
    }

    function jt() {
        return !1
    }

    function Zt(t, e, n) {
        var i = Ah(),
            r = e.getWidth(),
            a = e.getHeight(),
            o = i.style;
        return o && (o.position = "absolute", o.left = 0, o.top = 0, o.width = r + "px", o.height = a + "px", i.setAttribute("data-zr-dom-id", t)), i.width = r * n, i.height = a * n, i
    }

    function $t(t) {
        if ("string" == typeof t) {
            var e = Cu.get(t);
            return e && e.image
        }
        return t
    }

    function Kt(t, e, n, i, r) {
        if (t) {
            if ("string" == typeof t) {
                if (e && e.__zrImageSrc === t || !n) return e;
                var a = Cu.get(t),
                    o = {
                        hostEl: n,
                        cb: i,
                        cbPayload: r
                    };
                return a ? !Jt(e = a.image) && a.pending.push(o) : (!e && (e = new Image), e.onload = Qt, Cu.put(t, e.__cachedImgObj = {
                    image: e,
                    pending: [o]
                }), e.src = e.__zrImageSrc = t), e
            }
            return t
        }
        return e
    }

    function Qt() {
        var t = this.__cachedImgObj;
        this.onload = this.__cachedImgObj = null;
        for (var e = 0; e < t.pending.length; e++) {
            var n = t.pending[e],
                i = n.cb;
            i && i(this, n.cbPayload), n.hostEl.dirty()
        }
        t.pending.length = 0
    }

    function Jt(t) {
        return t && t.width && t.height
    }

    function te(t, e) {
        var n = t + ":" + (e = e || Pu);
        if (Du[n]) return Du[n];
        for (var i = (t + "").split("\n"), r = 0, a = 0, o = i.length; a < o; a++) r = Math.max(fe(i[a], e).width, r);
        return ku > Au && (ku = 0, Du = {}), ku++, Du[n] = r, r
    }

    function ee(t, e, n, i, r, a, o) {
        return a ? ie(t, e, n, i, r, a, o) : ne(t, e, n, i, r, o)
    }

    function ne(t, e, n, i, r, a) {
        var o = de(t, e, r, a),
            s = te(t, e);
        r && (s += r[1] + r[3]);
        var l = o.outerHeight,
            h = new Rt(re(0, s, n), ae(0, l, i), s, l);
        return h.lineHeight = o.lineHeight, h
    }

    function ie(t, e, n, i, r, a, o) {
        var s = pe(t, {
                rich: a,
                truncate: o,
                font: e,
                textAlign: n,
                textPadding: r
            }),
            l = s.outerWidth,
            h = s.outerHeight;
        return new Rt(re(0, l, n), ae(0, h, i), l, h)
    }

    function re(t, e, n) {
        return "right" === n ? t -= e : "center" === n && (t -= e / 2), t
    }

    function ae(t, e, n) {
        return "middle" === n ? t -= e / 2 : "bottom" === n && (t -= e), t
    }

    function oe(t, e, n) {
        var i = e.x,
            r = e.y,
            a = e.height,
            o = e.width,
            s = a / 2,
            l = "left",
            h = "top";
        switch (t) {
            case "left":
                i -= n, r += s, l = "right", h = "middle";
                break;
            case "right":
                i += n + o, r += s, h = "middle";
                break;
            case "top":
                i += o / 2, r -= n, l = "center", h = "bottom";
                break;
            case "bottom":
                i += o / 2, r += a + n, l = "center";
                break;
            case "inside":
                i += o / 2, r += s, l = "center", h = "middle";
                break;
            case "insideLeft":
                i += n, r += s, h = "middle";
                break;
            case "insideRight":
                i += o - n, r += s, l = "right", h = "middle";
                break;
            case "insideTop":
                i += o / 2, r += n, l = "center";
                break;
            case "insideBottom":
                i += o / 2, r += a - n, l = "center", h = "bottom";
                break;
            case "insideTopLeft":
                i += n, r += n;
                break;
            case "insideTopRight":
                i += o - n, r += n, l = "right";
                break;
            case "insideBottomLeft":
                i += n, r += a - n, h = "bottom";
                break;
            case "insideBottomRight":
                i += o - n, r += a - n, l = "right", h = "bottom"
        }
        return {
            x: i,
            y: r,
            textAlign: l,
            textVerticalAlign: h
        }
    }

    function se(t, e, n, i, r) {
        if (!e) return "";
        var a = (t + "").split("\n");
        r = le(e, n, i, r);
        for (var o = 0, s = a.length; o < s; o++) a[o] = he(a[o], r);
        return a.join("\n")
    }

    function le(t, e, n, i) {
        (i = a({}, i)).font = e;
        var n = C(n, "...");
        i.maxIterations = C(i.maxIterations, 2);
        var r = i.minChar = C(i.minChar, 0);
        i.cnCharWidth = te("国", e);
        var o = i.ascCharWidth = te("a", e);
        i.placeholder = C(i.placeholder, "");
        for (var s = t = Math.max(0, t - 1), l = 0; l < r && s >= o; l++) s -= o;
        var h = te(n);
        return h > s && (n = "", h = 0), s = t - h, i.ellipsis = n, i.ellipsisWidth = h, i.contentWidth = s, i.containerWidth = t, i
    }

    function he(t, e) {
        var n = e.containerWidth,
            i = e.font,
            r = e.contentWidth;
        if (!n) return "";
        var a = te(t, i);
        if (a <= n) return t;
        for (var o = 0;; o++) {
            if (a <= r || o >= e.maxIterations) {
                t += e.ellipsis;
                break
            }
            var s = 0 === o ? ue(t, r, e.ascCharWidth, e.cnCharWidth) : a > 0 ? Math.floor(t.length * r / a) : 0;
            a = te(t = t.substr(0, s), i)
        }
        return "" === t && (t = e.placeholder), t
    }

    function ue(t, e, n, i) {
        for (var r = 0, a = 0, o = t.length; a < o && r < e; a++) {
            var s = t.charCodeAt(a);
            r += 0 <= s && s <= 127 ? n : i
        }
        return a
    }

    function ce(t) {
        return te("国", t)
    }

    function fe(t, e) {
        return Ou.measureText(t, e)
    }

    function de(t, e, n, i) {
        null != t && (t += "");
        var r = ce(e),
            a = t ? t.split("\n") : [],
            o = a.length * r,
            s = o;
        if (n && (s += n[0] + n[2]), t && i) {
            var l = i.outerHeight,
                h = i.outerWidth;
            if (null != l && s > l) t = "", a = [];
            else if (null != h)
                for (var u = le(h - (n ? n[1] + n[3] : 0), e, i.ellipsis, {
                        minChar: i.minChar,
                        placeholder: i.placeholder
                    }), c = 0, f = a.length; c < f; c++) a[c] = he(a[c], u)
        }
        return {
            lines: a,
            height: o,
            outerHeight: s,
            lineHeight: r
        }
    }

    function pe(t, e) {
        var n = {
            lines: [],
            width: 0,
            height: 0
        };
        if (null != t && (t += ""), !t) return n;
        for (var i, r = Lu.lastIndex = 0; null != (i = Lu.exec(t));) {
            var a = i.index;
            a > r && ge(n, t.substring(r, a)), ge(n, i[2], i[1]), r = Lu.lastIndex
        }
        r < t.length && ge(n, t.substring(r, t.length));
        var o = n.lines,
            s = 0,
            l = 0,
            h = [],
            u = e.textPadding,
            c = e.truncate,
            f = c && c.outerWidth,
            d = c && c.outerHeight;
        u && (null != f && (f -= u[1] + u[3]), null != d && (d -= u[0] + u[2]));
        for (A = 0; A < o.length; A++) {
            for (var p = o[A], g = 0, m = 0, v = 0; v < p.tokens.length; v++) {
                var y = (L = p.tokens[v]).styleName && e.rich[L.styleName] || {},
                    _ = L.textPadding = y.textPadding,
                    x = L.font = y.font || e.font,
                    w = L.textHeight = C(y.textHeight, ce(x));
                if (_ && (w += _[0] + _[2]), L.height = w, L.lineHeight = D(y.textLineHeight, e.textLineHeight, w), L.textAlign = y && y.textAlign || e.textAlign, L.textVerticalAlign = y && y.textVerticalAlign || "middle", null != d && s + L.lineHeight > d) return {
                    lines: [],
                    width: 0,
                    height: 0
                };
                L.textWidth = te(L.text, x);
                var b = y.textWidth,
                    M = null == b || "auto" === b;
                if ("string" == typeof b && "%" === b.charAt(b.length - 1)) L.percentWidth = b, h.push(L), b = 0;
                else {
                    if (M) {
                        b = L.textWidth;
                        var S = y.textBackgroundColor,
                            I = S && S.image;
                        I && Jt(I = $t(I)) && (b = Math.max(b, I.width * w / I.height))
                    }
                    var T = _ ? _[1] + _[3] : 0;
                    b += T;
                    var k = null != f ? f - m : null;
                    null != k && k < b && (!M || k < T ? (L.text = "", L.textWidth = b = 0) : (L.text = se(L.text, k - T, x, c.ellipsis, {
                        minChar: c.minChar
                    }), L.textWidth = te(L.text, x), b = L.textWidth + T))
                }
                m += L.width = b, y && (g = Math.max(g, L.lineHeight))
            }
            p.width = m, p.lineHeight = g, s += g, l = Math.max(l, m)
        }
        n.outerWidth = n.width = C(e.textWidth, l), n.outerHeight = n.height = C(e.textHeight, s), u && (n.outerWidth += u[1] + u[3], n.outerHeight += u[0] + u[2]);
        for (var A = 0; A < h.length; A++) {
            var L = h[A],
                P = L.percentWidth;
            L.width = parseInt(P, 10) / 100 * l
        }
        return n
    }

    function ge(t, e, n) {
        for (var i = "" === e, r = e.split("\n"), a = t.lines, o = 0; o < r.length; o++) {
            var s = r[o],
                l = {
                    styleName: n,
                    text: s,
                    isLineHolder: !s && !i
                };
            if (o) a.push({
                tokens: [l]
            });
            else {
                var h = (a[a.length - 1] || (a[0] = {
                        tokens: []
                    })).tokens,
                    u = h.length;
                1 === u && h[0].isLineHolder ? h[0] = l : (s || !u || i) && h.push(l)
            }
        }
    }

    function me(t) {
        var e = (t.fontSize || t.fontFamily) && [t.fontStyle, t.fontWeight, (t.fontSize || 12) + "px", t.fontFamily || "sans-serif"].join(" ");
        return e && P(e) || t.textFont || t.font
    }

    function ve(t, e) {
        var n, i, r, a, o = e.x,
            s = e.y,
            l = e.width,
            h = e.height,
            u = e.r;
        l < 0 && (o += l, l = -l), h < 0 && (s += h, h = -h), "number" == typeof u ? n = i = r = a = u : u instanceof Array ? 1 === u.length ? n = i = r = a = u[0] : 2 === u.length ? (n = r = u[0], i = a = u[1]) : 3 === u.length ? (n = u[0], i = a = u[1], r = u[2]) : (n = u[0], i = u[1], r = u[2], a = u[3]) : n = i = r = a = 0;
        var c;
        n + i > l && (n *= l / (c = n + i), i *= l / c), r + a > l && (r *= l / (c = r + a), a *= l / c), i + r > h && (i *= h / (c = i + r), r *= h / c), n + a > h && (n *= h / (c = n + a), a *= h / c), t.moveTo(o + n, s), t.lineTo(o + l - i, s), 0 !== i && t.arc(o + l - i, s + i, i, -Math.PI / 2, 0), t.lineTo(o + l, s + h - r), 0 !== r && t.arc(o + l - r, s + h - r, r, 0, Math.PI / 2), t.lineTo(o + a, s + h), 0 !== a && t.arc(o + a, s + h - a, a, Math.PI / 2, Math.PI), t.lineTo(o, s + n), 0 !== n && t.arc(o + n, s + n, n, Math.PI, 1.5 * Math.PI)
    }

    function ye(t) {
        return _e(t), f(t.rich, _e), t
    }

    function _e(t) {
        if (t) {
            t.font = me(t);
            var e = t.textAlign;
            "middle" === e && (e = "center"), t.textAlign = null == e || Eu[e] ? e : "left";
            var n = t.textVerticalAlign || t.textBaseline;
            "center" === n && (n = "middle"), t.textVerticalAlign = null == n || Nu[n] ? n : "top", t.textPadding && (t.textPadding = A(t.textPadding))
        }
    }

    function xe(t, e, n, i, r) {
        i.rich ? be(t, e, n, i, r) : we(t, e, n, i, r)
    }

    function we(t, e, n, i, r) {
        var a = Ae(e, "font", i.font || Pu),
            o = i.textPadding,
            s = t.__textCotentBlock;
        s && !t.__dirty || (s = t.__textCotentBlock = de(n, a, o, i.truncate));
        var l = s.outerHeight,
            h = s.lines,
            u = s.lineHeight,
            c = ke(l, i, r),
            f = c.baseX,
            d = c.baseY,
            p = c.textAlign,
            g = c.textVerticalAlign;
        Se(e, i, r, f, d);
        var m = ae(d, l, g),
            v = f,
            y = m,
            _ = Te(i);
        if (_ || o) {
            var x = te(n, a);
            o && (x += o[1] + o[3]);
            var w = re(f, x, p);
            _ && Ce(t, e, i, w, m, x, l), o && (v = Ee(f, p, o), y += o[0])
        }
        Ae(e, "textAlign", p || "left"), Ae(e, "textBaseline", "middle"), Ae(e, "shadowBlur", i.textShadowBlur || 0), Ae(e, "shadowColor", i.textShadowColor || "transparent"), Ae(e, "shadowOffsetX", i.textShadowOffsetX || 0), Ae(e, "shadowOffsetY", i.textShadowOffsetY || 0), y += u / 2;
        var b = i.textStrokeWidth,
            M = Le(i.textStroke, b),
            S = Pe(i.textFill);
        M && (Ae(e, "lineWidth", b), Ae(e, "strokeStyle", M)), S && Ae(e, "fillStyle", S);
        for (var I = 0; I < h.length; I++) M && e.strokeText(h[I], v, y), S && e.fillText(h[I], v, y), y += u
    }

    function be(t, e, n, i, r) {
        var a = t.__textCotentBlock;
        a && !t.__dirty || (a = t.__textCotentBlock = pe(n, i)), Me(t, e, a, i, r)
    }

    function Me(t, e, n, i, r) {
        var a = n.width,
            o = n.outerWidth,
            s = n.outerHeight,
            l = i.textPadding,
            h = ke(s, i, r),
            u = h.baseX,
            c = h.baseY,
            f = h.textAlign,
            d = h.textVerticalAlign;
        Se(e, i, r, u, c);
        var p = re(u, o, f),
            g = ae(c, s, d),
            m = p,
            v = g;
        l && (m += l[3], v += l[0]);
        var y = m + a;
        Te(i) && Ce(t, e, i, p, g, o, s);
        for (var _ = 0; _ < n.lines.length; _++) {
            for (var x, w = n.lines[_], b = w.tokens, M = b.length, S = w.lineHeight, I = w.width, T = 0, C = m, D = y, k = M - 1; T < M && (!(x = b[T]).textAlign || "left" === x.textAlign);) Ie(t, e, x, i, S, v, C, "left"), I -= x.width, C += x.width, T++;
            for (; k >= 0 && "right" === (x = b[k]).textAlign;) Ie(t, e, x, i, S, v, D, "right"), I -= x.width, D -= x.width, k--;
            for (C += (a - (C - m) - (y - D) - I) / 2; T <= k;) Ie(t, e, x = b[T], i, S, v, C + x.width / 2, "center"), C += x.width, T++;
            v += S
        }
    }

    function Se(t, e, n, i, r) {
        if (n && e.textRotation) {
            var a = e.textOrigin;
            "center" === a ? (i = n.width / 2 + n.x, r = n.height / 2 + n.y) : a && (i = a[0] + n.x, r = a[1] + n.y), t.translate(i, r), t.rotate(-e.textRotation), t.translate(-i, -r)
        }
    }

    function Ie(t, e, n, i, r, a, o, s) {
        var l = i.rich[n.styleName] || {},
            h = n.textVerticalAlign,
            u = a + r / 2;
        "top" === h ? u = a + n.height / 2 : "bottom" === h && (u = a + r - n.height / 2), !n.isLineHolder && Te(l) && Ce(t, e, l, "right" === s ? o - n.width : "center" === s ? o - n.width / 2 : o, u - n.height / 2, n.width, n.height);
        var c = n.textPadding;
        c && (o = Ee(o, s, c), u -= n.height / 2 - c[2] - n.textHeight / 2), Ae(e, "shadowBlur", D(l.textShadowBlur, i.textShadowBlur, 0)), Ae(e, "shadowColor", l.textShadowColor || i.textShadowColor || "transparent"), Ae(e, "shadowOffsetX", D(l.textShadowOffsetX, i.textShadowOffsetX, 0)), Ae(e, "shadowOffsetY", D(l.textShadowOffsetY, i.textShadowOffsetY, 0)), Ae(e, "textAlign", s), Ae(e, "textBaseline", "middle"), Ae(e, "font", n.font || Pu);
        var f = Le(l.textStroke || i.textStroke, p),
            d = Pe(l.textFill || i.textFill),
            p = C(l.textStrokeWidth, i.textStrokeWidth);
        f && (Ae(e, "lineWidth", p), Ae(e, "strokeStyle", f), e.strokeText(n.text, o, u)), d && (Ae(e, "fillStyle", d), e.fillText(n.text, o, u))
    }

    function Te(t) {
        return t.textBackgroundColor || t.textBorderWidth && t.textBorderColor
    }

    function Ce(t, e, n, i, r, a, o) {
        var s = n.textBackgroundColor,
            l = n.textBorderWidth,
            h = n.textBorderColor,
            u = x(s);
        if (Ae(e, "shadowBlur", n.textBoxShadowBlur || 0), Ae(e, "shadowColor", n.textBoxShadowColor || "transparent"), Ae(e, "shadowOffsetX", n.textBoxShadowOffsetX || 0), Ae(e, "shadowOffsetY", n.textBoxShadowOffsetY || 0), u || l && h) {
            e.beginPath();
            var c = n.textBorderRadius;
            c ? ve(e, {
                x: i,
                y: r,
                width: a,
                height: o,
                r: c
            }) : e.rect(i, r, a, o), e.closePath()
        }
        if (u) Ae(e, "fillStyle", s), e.fill();
        else if (w(s)) {
            var f = s.image;
            (f = Kt(f, null, t, De, s)) && Jt(f) && e.drawImage(f, i, r, a, o)
        }
        l && h && (Ae(e, "lineWidth", l), Ae(e, "strokeStyle", h), e.stroke())
    }

    function De(t, e) {
        e.image = t
    }

    function ke(t, e, n) {
        var i = e.x || 0,
            r = e.y || 0,
            a = e.textAlign,
            o = e.textVerticalAlign;
        if (n) {
            var s = e.textPosition;
            if (s instanceof Array) i = n.x + Oe(s[0], n.width), r = n.y + Oe(s[1], n.height);
            else {
                var l = oe(s, n, e.textDistance);
                i = l.x, r = l.y, a = a || l.textAlign, o = o || l.textVerticalAlign
            }
            var h = e.textOffset;
            h && (i += h[0], r += h[1])
        }
        return {
            baseX: i,
            baseY: r,
            textAlign: a,
            textVerticalAlign: o
        }
    }

    function Ae(t, e, n) {
        return t[e] = yu(t, e, n), t[e]
    }

    function Le(t, e) {
        return null == t || e <= 0 || "transparent" === t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function Pe(t) {
        return null == t || "none" === t ? null : t.image || t.colorStops ? "#000" : t
    }

    function Oe(t, e) {
        return "string" == typeof t ? t.lastIndexOf("%") >= 0 ? parseFloat(t) / 100 * e : parseFloat(t) : t
    }

    function Ee(t, e, n) {
        return "right" === e ? t - n[1] : "center" === e ? t + n[3] / 2 - n[1] / 2 : t + n[3]
    }

    function Ne(t, e) {
        return null != t && (t || e.textBackgroundColor || e.textBorderWidth && e.textBorderColor || e.textPadding)
    }

    function Re(t) {
        t = t || {}, hu.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && "style" !== e && (this[e] = t[e]);
        this.style = new xu(t.style, this), this._rect = null, this.__clipPaths = []
    }

    function Be(t) {
        Re.call(this, t)
    }

    function ze(t) {
        return parseInt(t, 10)
    }

    function Fe(t) {
        return !!t && (!!t.__builtin__ || "function" == typeof t.resize && "function" == typeof t.refresh)
    }

    function Ve(t, e, n) {
        return zu.copy(t.getBoundingRect()), t.transform && zu.applyTransform(t.transform), Fu.width = e, Fu.height = n, !zu.intersect(Fu)
    }

    function We(t, e) {
        if (t == e) return !1;
        if (!t || !e || t.length !== e.length) return !0;
        for (var n = 0; n < t.length; n++)
            if (t[n] !== e[n]) return !0
    }

    function He(t, e) {
        for (var n = 0; n < t.length; n++) {
            var i = t[n];
            i.setTransform(e), e.beginPath(), i.buildPath(e, i.shape), e.clip(), i.restoreTransform(e)
        }
    }

    function Ge(t, e) {
        var n = document.createElement("div");
        return n.style.cssText = ["position:relative", "overflow:hidden", "width:" + t + "px", "height:" + e + "px", "padding:0", "margin:0", "border-width:0"].join(";") + ";", n
    }

    function qe(t) {
        return t.getBoundingClientRect ? t.getBoundingClientRect() : {
            left: 0,
            top: 0
        }
    }

    function Xe(t, e, n, i) {
        return n = n || {}, i || !_h.canvasSupported ? Ue(t, e, n) : _h.browser.firefox && null != e.layerX && e.layerX !== e.offsetX ? (n.zrX = e.layerX, n.zrY = e.layerY) : null != e.offsetX ? (n.zrX = e.offsetX, n.zrY = e.offsetY) : Ue(t, e, n), n
    }

    function Ue(t, e, n) {
        var i = qe(t);
        n.zrX = e.clientX - i.left, n.zrY = e.clientY - i.top
    }

    function Ye(t, e, n) {
        if (null != (e = e || window.event).zrX) return e;
        var i = e.type;
        if (i && i.indexOf("touch") >= 0) {
            var r = "touchend" != i ? e.targetTouches[0] : e.changedTouches[0];
            r && Xe(t, r, e, n)
        } else Xe(t, e, e, n), e.zrDelta = e.wheelDelta ? e.wheelDelta / 120 : -(e.detail || 0) / 3;
        var a = e.button;
        return null == e.which && void 0 !== a && Hu.test(e.type) && (e.which = 1 & a ? 1 : 2 & a ? 3 : 4 & a ? 2 : 0), e
    }

    function je(t, e, n) {
        Wu ? t.addEventListener(e, n) : t.attachEvent("on" + e, n)
    }

    function Ze(t, e, n) {
        Wu ? t.removeEventListener(e, n) : t.detachEvent("on" + e, n)
    }

    function $e(t) {
        var e = t[1][0] - t[0][0],
            n = t[1][1] - t[0][1];
        return Math.sqrt(e * e + n * n)
    }

    function Ke(t) {
        return [(t[0][0] + t[1][0]) / 2, (t[0][1] + t[1][1]) / 2]
    }

    function Qe(t) {
        return "mousewheel" === t && _h.browser.firefox ? "DOMMouseScroll" : t
    }

    function Je(t, e, n) {
        var i = t._gestureMgr;
        "start" === n && i.clear();
        var r = i.recognize(e, t.handler.findHover(e.zrX, e.zrY, null).target, t.dom);
        if ("end" === n && i.clear(), r) {
            var a = r.type;
            e.gestureEvent = a, t.handler.dispatchToElement({
                target: r.target
            }, a, r.event)
        }
    }

    function tn(t) {
        t._touching = !0, clearTimeout(t._touchTimer), t._touchTimer = setTimeout(function () {
            t._touching = !1
        }, 700)
    }

    function en(t) {
        var e = t.pointerType;
        return "pen" === e || "touch" === e
    }

    function nn(t) {
        function e(t, e) {
            return function () {
                if (!e._touching) return t.apply(e, arguments)
            }
        }
        f(Yu, function (e) {
            t._handlers[e] = m($u[e], t)
        }), f(Zu, function (e) {
            t._handlers[e] = m($u[e], t)
        }), f(Uu, function (n) {
            t._handlers[n] = e($u[n], t)
        })
    }

    function rn(t) {
        function e(e, n) {
            f(e, function (e) {
                je(t, Qe(e), n._handlers[e])
            }, n)
        }
        Bh.call(this), this.dom = t, this._touching = !1, this._touchTimer, this._gestureMgr = new qu, this._handlers = {}, nn(this), _h.pointerEventsSupported ? e(Zu, this) : (_h.touchEventsSupported && e(Yu, this), e(Uu, this))
    }

    function an(t, e) {
        return new tc(vh(), t, e)
    }

    function on(t) {
        return t instanceof Array ? t : null == t ? [] : [t]
    }

    function sn(t, e, n) {
        if (t) {
            t[e] = t[e] || {}, t.emphasis = t.emphasis || {}, t.emphasis[e] = t.emphasis[e] || {};
            for (var i = 0, r = n.length; i < r; i++) {
                var a = n[i];
                !t.emphasis[e].hasOwnProperty(a) && t[e].hasOwnProperty(a) && (t.emphasis[e][a] = t[e][a])
            }
        }
    }

    function ln(t) {
        return !nc(t) || ic(t) || t instanceof Date ? t : t.value
    }

    function hn(t) {
        return nc(t) && !(t instanceof Array)
    }

    function un(t, e) {
        e = (e || []).slice();
        var n = d(t || [], function (t, e) {
            return {
                exist: t
            }
        });
        return ec(e, function (t, i) {
            if (nc(t)) {
                for (r = 0; r < n.length; r++)
                    if (!n[r].option && null != t.id && n[r].exist.id === t.id + "") return n[r].option = t, void(e[i] = null);
                for (var r = 0; r < n.length; r++) {
                    var a = n[r].exist;
                    if (!(n[r].option || null != a.id && null != t.id || null == t.name || dn(t) || dn(a) || a.name !== t.name + "")) return n[r].option = t, void(e[i] = null)
                }
            }
        }), ec(e, function (t, e) {
            if (nc(t)) {
                for (var i = 0; i < n.length; i++) {
                    var r = n[i].exist;
                    if (!n[i].option && !dn(r) && null == t.id) {
                        n[i].option = t;
                        break
                    }
                }
                i >= n.length && n.push({
                    option: t
                })
            }
        }), n
    }

    function cn(t) {
        var e = R();
        ec(t, function (t, n) {
            var i = t.exist;
            i && e.set(i.id, t)
        }), ec(t, function (t, n) {
            var i = t.option;
            L(!i || null == i.id || !e.get(i.id) || e.get(i.id) === t, "id duplicates: " + (i && i.id)), i && null != i.id && e.set(i.id, t), !t.keyInfo && (t.keyInfo = {})
        }), ec(t, function (t, n) {
            var i = t.exist,
                r = t.option,
                a = t.keyInfo;
            if (nc(r)) {
                if (a.name = null != r.name ? r.name + "" : i ? i.name : rc + n, i) a.id = i.id;
                else if (null != r.id) a.id = r.id + "";
                else {
                    var o = 0;
                    do {
                        a.id = "\0" + a.name + "\0" + o++
                    } while (e.get(a.id))
                }
                e.set(a.id, t)
            }
        })
    }

    function fn(t) {
        var e = t.name;
        return !(!e || !e.indexOf(rc))
    }

    function dn(t) {
        return nc(t) && t.id && 0 === (t.id + "").indexOf("\0_ec_\0")
    }

    function pn(t, e) {
        return null != e.dataIndexInside ? e.dataIndexInside : null != e.dataIndex ? y(e.dataIndex) ? d(e.dataIndex, function (e) {
            return t.indexOfRawIndex(e)
        }) : t.indexOfRawIndex(e.dataIndex) : null != e.name ? y(e.name) ? d(e.name, function (e) {
            return t.indexOfName(e)
        }) : t.indexOfName(e.name) : void 0
    }

    function gn() {
        var t = "__\0ec_inner_" + oc++ + "_" + Math.random().toFixed(5);
        return function (e) {
            return e[t] || (e[t] = {})
        }
    }

    function mn(t, e, n) {
        if (x(e)) {
            var i = {};
            i[e + "Index"] = 0, e = i
        }
        var r = n && n.defaultMainType;
        !r || vn(e, r + "Index") || vn(e, r + "Id") || vn(e, r + "Name") || (e[r + "Index"] = 0);
        var a = {};
        return ec(e, function (i, r) {
            var i = e[r];
            if ("dataIndex" !== r && "dataIndexInside" !== r) {
                var o = r.match(/^(\w+)(Index|Id|Name)$/) || [],
                    s = o[1],
                    h = (o[2] || "").toLowerCase();
                if (!(!s || !h || null == i || "index" === h && "none" === i || n && n.includeMainTypes && l(n.includeMainTypes, s) < 0)) {
                    var u = {
                        mainType: s
                    };
                    "index" === h && "all" === i || (u[h] = i);
                    var c = t.queryComponents(u);
                    a[s + "Models"] = c, a[s + "Model"] = c[0]
                }
            } else a[r] = i
        }), a
    }

    function vn(t, e) {
        return t && t.hasOwnProperty(e)
    }

    function yn(t, e, n) {
        t.setAttribute ? t.setAttribute(e, n) : t[e] = n
    }

    function _n(t, e) {
        return t.getAttribute ? t.getAttribute(e) : t[e]
    }

    function xn(t) {
        var e = {
            main: "",
            sub: ""
        };
        return t && (t = t.split(sc), e.main = t[0] || "", e.sub = t[1] || ""), e
    }

    function wn(t) {
        L(/^[a-zA-Z0-9_]+([.][a-zA-Z0-9_]+)?$/.test(t), 'componentType "' + t + '" illegal')
    }

    function bn(t, e) {
        t.$constructor = t, t.extend = function (t) {
            var e = this,
                n = function () {
                    t.$constructor ? t.$constructor.apply(this, arguments) : e.apply(this, arguments)
                };
            return a(n.prototype, t), n.extend = this.extend, n.superCall = Sn, n.superApply = In, h(n, this), n.superClass = e, n
        }
    }

    function Mn(t) {
        var e = ["__\0is_clz", hc++, Math.random().toFixed(3)].join("_");
        t.prototype[e] = !0, t.isInstance = function (t) {
            return !(!t || !t[e])
        }
    }

    function Sn(t, e) {
        var n = k(arguments, 2);
        return this.superClass.prototype[e].apply(t, n)
    }

    function In(t, e, n) {
        return this.superClass.prototype[e].apply(t, n)
    }

    function Tn(t, e) {
        function n(t) {
            var e = i[t.main];
            return e && e[lc] || ((e = i[t.main] = {})[lc] = !0), e
        }
        e = e || {};
        var i = {};
        if (t.registerClass = function (t, e) {
                return e && (wn(e), (e = xn(e)).sub ? e.sub !== lc && (n(e)[e.sub] = t) : i[e.main] = t), t
            }, t.getClass = function (t, e, n) {
                var r = i[t];
                if (r && r[lc] && (r = e ? r[e] : null), n && !r) throw new Error(e ? "Component " + t + "." + (e || "") + " not exists. Load it first." : t + ".type should be specified.");
                return r
            }, t.getClassesByMainType = function (t) {
                t = xn(t);
                var e = [],
                    n = i[t.main];
                return n && n[lc] ? f(n, function (t, n) {
                    n !== lc && e.push(t)
                }) : e.push(n), e
            }, t.hasClass = function (t) {
                return t = xn(t), !!i[t.main]
            }, t.getAllClassMainTypes = function () {
                var t = [];
                return f(i, function (e, n) {
                    t.push(n)
                }), t
            }, t.hasSubTypes = function (t) {
                t = xn(t);
                var e = i[t.main];
                return e && e[lc]
            }, t.parseClassType = xn, e.registerWhenExtend) {
            var r = t.extend;
            r && (t.extend = function (e) {
                var n = r.call(this, e);
                return t.registerClass(n, e.type)
            })
        }
        return t
    }

    function Cn(t) {
        return t > -vc && t < vc
    }

    function Dn(t) {
        return t > vc || t < -vc
    }

    function kn(t, e, n, i, r) {
        var a = 1 - r;
        return a * a * (a * t + 3 * r * e) + r * r * (r * i + 3 * a * n)
    }

    function An(t, e, n, i, r) {
        var a = 1 - r;
        return 3 * (((e - t) * a + 2 * (n - e) * r) * a + (i - n) * r * r)
    }

    function Ln(t, e, n, i, r, a) {
        var o = i + 3 * (e - n) - t,
            s = 3 * (n - 2 * e + t),
            l = 3 * (e - t),
            h = t - r,
            u = s * s - 3 * o * l,
            c = s * l - 9 * o * h,
            f = l * l - 3 * s * h,
            d = 0;
        if (Cn(u) && Cn(c)) Cn(s) ? a[0] = 0 : (S = -l / s) >= 0 && S <= 1 && (a[d++] = S);
        else {
            var p = c * c - 4 * u * f;
            if (Cn(p)) {
                var g = c / u,
                    m = -g / 2;
                (S = -s / o + g) >= 0 && S <= 1 && (a[d++] = S), m >= 0 && m <= 1 && (a[d++] = m)
            } else if (p > 0) {
                var v = mc(p),
                    y = u * s + 1.5 * o * (-c + v),
                    _ = u * s + 1.5 * o * (-c - v);
                (S = (-s - ((y = y < 0 ? -gc(-y, xc) : gc(y, xc)) + (_ = _ < 0 ? -gc(-_, xc) : gc(_, xc)))) / (3 * o)) >= 0 && S <= 1 && (a[d++] = S)
            } else {
                var x = (2 * u * s - 3 * o * c) / (2 * mc(u * u * u)),
                    w = Math.acos(x) / 3,
                    b = mc(u),
                    M = Math.cos(w),
                    S = (-s - 2 * b * M) / (3 * o),
                    m = (-s + b * (M + _c * Math.sin(w))) / (3 * o),
                    I = (-s + b * (M - _c * Math.sin(w))) / (3 * o);
                S >= 0 && S <= 1 && (a[d++] = S), m >= 0 && m <= 1 && (a[d++] = m), I >= 0 && I <= 1 && (a[d++] = I)
            }
        }
        return d
    }

    function Pn(t, e, n, i, r) {
        var a = 6 * n - 12 * e + 6 * t,
            o = 9 * e + 3 * i - 3 * t - 9 * n,
            s = 3 * e - 3 * t,
            l = 0;
        if (Cn(o)) Dn(a) && (c = -s / a) >= 0 && c <= 1 && (r[l++] = c);
        else {
            var h = a * a - 4 * o * s;
            if (Cn(h)) r[0] = -a / (2 * o);
            else if (h > 0) {
                var u = mc(h),
                    c = (-a + u) / (2 * o),
                    f = (-a - u) / (2 * o);
                c >= 0 && c <= 1 && (r[l++] = c), f >= 0 && f <= 1 && (r[l++] = f)
            }
        }
        return l
    }

    function On(t, e, n, i, r, a) {
        var o = (e - t) * r + t,
            s = (n - e) * r + e,
            l = (i - n) * r + n,
            h = (s - o) * r + o,
            u = (l - s) * r + s,
            c = (u - h) * r + h;
        a[0] = t, a[1] = o, a[2] = h, a[3] = c, a[4] = c, a[5] = u, a[6] = l, a[7] = i
    }

    function En(t, e, n, i, r, a, o, s, l, h, u) {
        var c, f, d, p, g, m = .005,
            v = 1 / 0;
        wc[0] = l, wc[1] = h;
        for (var y = 0; y < 1; y += .05) bc[0] = kn(t, n, r, o, y), bc[1] = kn(e, i, a, s, y), (p = Nh(wc, bc)) < v && (c = y, v = p);
        v = 1 / 0;
        for (var _ = 0; _ < 32 && !(m < yc); _++) f = c - m, d = c + m, bc[0] = kn(t, n, r, o, f), bc[1] = kn(e, i, a, s, f), p = Nh(bc, wc), f >= 0 && p < v ? (c = f, v = p) : (Mc[0] = kn(t, n, r, o, d), Mc[1] = kn(e, i, a, s, d), g = Nh(Mc, wc), d <= 1 && g < v ? (c = d, v = g) : m *= .5);
        return u && (u[0] = kn(t, n, r, o, c), u[1] = kn(e, i, a, s, c)), mc(v)
    }

    function Nn(t, e, n, i) {
        var r = 1 - i;
        return r * (r * t + 2 * i * e) + i * i * n
    }

    function Rn(t, e, n, i) {
        return 2 * ((1 - i) * (e - t) + i * (n - e))
    }

    function Bn(t, e, n, i, r) {
        var a = t - 2 * e + n,
            o = 2 * (e - t),
            s = t - i,
            l = 0;
        if (Cn(a)) Dn(o) && (c = -s / o) >= 0 && c <= 1 && (r[l++] = c);
        else {
            var h = o * o - 4 * a * s;
            if (Cn(h))(c = -o / (2 * a)) >= 0 && c <= 1 && (r[l++] = c);
            else if (h > 0) {
                var u = mc(h),
                    c = (-o + u) / (2 * a),
                    f = (-o - u) / (2 * a);
                c >= 0 && c <= 1 && (r[l++] = c), f >= 0 && f <= 1 && (r[l++] = f)
            }
        }
        return l
    }

    function zn(t, e, n) {
        var i = t + n - 2 * e;
        return 0 === i ? .5 : (t - e) / i
    }

    function Fn(t, e, n, i, r) {
        var a = (e - t) * i + t,
            o = (n - e) * i + e,
            s = (o - a) * i + a;
        r[0] = t, r[1] = a, r[2] = s, r[3] = s, r[4] = o, r[5] = n
    }

    function Vn(t, e, n, i, r, a, o, s, l) {
        var h, u = .005,
            c = 1 / 0;
        wc[0] = o, wc[1] = s;
        for (var f = 0; f < 1; f += .05) bc[0] = Nn(t, n, r, f), bc[1] = Nn(e, i, a, f), (m = Nh(wc, bc)) < c && (h = f, c = m);
        c = 1 / 0;
        for (var d = 0; d < 32 && !(u < yc); d++) {
            var p = h - u,
                g = h + u;
            bc[0] = Nn(t, n, r, p), bc[1] = Nn(e, i, a, p);
            var m = Nh(bc, wc);
            if (p >= 0 && m < c) h = p, c = m;
            else {
                Mc[0] = Nn(t, n, r, g), Mc[1] = Nn(e, i, a, g);
                var v = Nh(Mc, wc);
                g <= 1 && v < c ? (h = g, c = v) : u *= .5
            }
        }
        return l && (l[0] = Nn(t, n, r, h), l[1] = Nn(e, i, a, h)), mc(c)
    }

    function Wn(t, e, n, i, r, a) {
        r[0] = Sc(t, n), r[1] = Sc(e, i), a[0] = Ic(t, n), a[1] = Ic(e, i)
    }

    function Hn(t, e, n, i, r, a, o, s, l, h) {
        var u, c = Pn,
            f = kn,
            d = c(t, n, r, o, Pc);
        for (l[0] = 1 / 0, l[1] = 1 / 0, h[0] = -1 / 0, h[1] = -1 / 0, u = 0; u < d; u++) {
            var p = f(t, n, r, o, Pc[u]);
            l[0] = Sc(p, l[0]), h[0] = Ic(p, h[0])
        }
        for (d = c(e, i, a, s, Oc), u = 0; u < d; u++) {
            var g = f(e, i, a, s, Oc[u]);
            l[1] = Sc(g, l[1]), h[1] = Ic(g, h[1])
        }
        l[0] = Sc(t, l[0]), h[0] = Ic(t, h[0]), l[0] = Sc(o, l[0]), h[0] = Ic(o, h[0]), l[1] = Sc(e, l[1]), h[1] = Ic(e, h[1]), l[1] = Sc(s, l[1]), h[1] = Ic(s, h[1])
    }

    function Gn(t, e, n, i, r, a, o, s) {
        var l = zn,
            h = Nn,
            u = Ic(Sc(l(t, n, r), 1), 0),
            c = Ic(Sc(l(e, i, a), 1), 0),
            f = h(t, n, r, u),
            d = h(e, i, a, c);
        o[0] = Sc(t, r, f), o[1] = Sc(e, a, d), s[0] = Ic(t, r, f), s[1] = Ic(e, a, d)
    }

    function qn(t, e, n, i, r, a, o, s, l) {
        var h = j,
            u = Z,
            c = Math.abs(r - a);
        if (c % Dc < 1e-4 && c > 1e-4) return s[0] = t - n, s[1] = e - i, l[0] = t + n, void(l[1] = e + i);
        if (kc[0] = Cc(r) * n + t, kc[1] = Tc(r) * i + e, Ac[0] = Cc(a) * n + t, Ac[1] = Tc(a) * i + e, h(s, kc, Ac), u(l, kc, Ac), (r %= Dc) < 0 && (r += Dc), (a %= Dc) < 0 && (a += Dc), r > a && !o ? a += Dc : r < a && o && (r += Dc), o) {
            var f = a;
            a = r, r = f
        }
        for (var d = 0; d < a; d += Math.PI / 2) d > r && (Lc[0] = Cc(d) * n + t, Lc[1] = Tc(d) * i + e, h(s, Lc, s), u(l, Lc, l))
    }

    function Xn(t, e, n, i, r, a, o) {
        if (0 === r) return !1;
        var s = r,
            l = 0,
            h = t;
        if (o > e + s && o > i + s || o < e - s && o < i - s || a > t + s && a > n + s || a < t - s && a < n - s) return !1;
        if (t === n) return Math.abs(a - t) <= s / 2;
        var u = (l = (e - i) / (t - n)) * a - o + (h = (t * i - n * e) / (t - n));
        return u * u / (l * l + 1) <= s / 2 * s / 2
    }

    function Un(t, e, n, i, r, a, o, s, l, h, u) {
        if (0 === l) return !1;
        var c = l;
        return !(u > e + c && u > i + c && u > a + c && u > s + c || u < e - c && u < i - c && u < a - c && u < s - c || h > t + c && h > n + c && h > r + c && h > o + c || h < t - c && h < n - c && h < r - c && h < o - c) && En(t, e, n, i, r, a, o, s, h, u, null) <= c / 2
    }

    function Yn(t, e, n, i, r, a, o, s, l) {
        if (0 === o) return !1;
        var h = o;
        return !(l > e + h && l > i + h && l > a + h || l < e - h && l < i - h && l < a - h || s > t + h && s > n + h && s > r + h || s < t - h && s < n - h && s < r - h) && Vn(t, e, n, i, r, a, s, l, null) <= h / 2
    }

    function jn(t) {
        return (t %= Yc) < 0 && (t += Yc), t
    }

    function Zn(t, e, n, i, r, a, o, s, l) {
        if (0 === o) return !1;
        var h = o;
        s -= t, l -= e;
        var u = Math.sqrt(s * s + l * l);
        if (u - h > n || u + h < n) return !1;
        if (Math.abs(i - r) % jc < 1e-4) return !0;
        if (a) {
            var c = i;
            i = jn(r), r = jn(c)
        } else i = jn(i), r = jn(r);
        i > r && (r += jc);
        var f = Math.atan2(l, s);
        return f < 0 && (f += jc), f >= i && f <= r || f + jc >= i && f + jc <= r
    }

    function $n(t, e, n, i, r, a) {
        if (a > e && a > i || a < e && a < i) return 0;
        if (i === e) return 0;
        var o = i < e ? 1 : -1,
            s = (a - e) / (i - e);
        1 !== s && 0 !== s || (o = i < e ? .5 : -.5);
        var l = s * (n - t) + t;
        return l === r ? 1 / 0 : l > r ? o : 0
    }

    function Kn(t, e) {
        return Math.abs(t - e) < Kc
    }

    function Qn() {
        var t = Jc[0];
        Jc[0] = Jc[1], Jc[1] = t
    }

    function Jn(t, e, n, i, r, a, o, s, l, h) {
        if (h > e && h > i && h > a && h > s || h < e && h < i && h < a && h < s) return 0;
        var u = Ln(e, i, a, s, h, Qc);
        if (0 === u) return 0;
        for (var c, f, d = 0, p = -1, g = 0; g < u; g++) {
            var m = Qc[g],
                v = 0 === m || 1 === m ? .5 : 1;
            kn(t, n, r, o, m) < l || (p < 0 && (p = Pn(e, i, a, s, Jc), Jc[1] < Jc[0] && p > 1 && Qn(), c = kn(e, i, a, s, Jc[0]), p > 1 && (f = kn(e, i, a, s, Jc[1]))), 2 == p ? m < Jc[0] ? d += c < e ? v : -v : m < Jc[1] ? d += f < c ? v : -v : d += s < f ? v : -v : m < Jc[0] ? d += c < e ? v : -v : d += s < c ? v : -v)
        }
        return d
    }

    function ti(t, e, n, i, r, a, o, s) {
        if (s > e && s > i && s > a || s < e && s < i && s < a) return 0;
        var l = Bn(e, i, a, s, Qc);
        if (0 === l) return 0;
        var h = zn(e, i, a);
        if (h >= 0 && h <= 1) {
            for (var u = 0, c = Nn(e, i, a, h), f = 0; f < l; f++) {
                d = 0 === Qc[f] || 1 === Qc[f] ? .5 : 1;
                (p = Nn(t, n, r, Qc[f])) < o || (Qc[f] < h ? u += c < e ? d : -d : u += a < c ? d : -d)
            }
            return u
        }
        var d = 0 === Qc[0] || 1 === Qc[0] ? .5 : 1,
            p = Nn(t, n, r, Qc[0]);
        return p < o ? 0 : a < e ? d : -d
    }

    function ei(t, e, n, i, r, a, o, s) {
        if ((s -= e) > n || s < -n) return 0;
        h = Math.sqrt(n * n - s * s);
        Qc[0] = -h, Qc[1] = h;
        var l = Math.abs(i - r);
        if (l < 1e-4) return 0;
        if (l % $c < 1e-4) {
            i = 0, r = $c;
            p = a ? 1 : -1;
            return o >= Qc[0] + t && o <= Qc[1] + t ? p : 0
        }
        if (a) {
            var h = i;
            i = jn(r), r = jn(h)
        } else i = jn(i), r = jn(r);
        i > r && (r += $c);
        for (var u = 0, c = 0; c < 2; c++) {
            var f = Qc[c];
            if (f + t > o) {
                var d = Math.atan2(s, f),
                    p = a ? 1 : -1;
                d < 0 && (d = $c + d), (d >= i && d <= r || d + $c >= i && d + $c <= r) && (d > Math.PI / 2 && d < 1.5 * Math.PI && (p = -p), u += p)
            }
        }
        return u
    }

    function ni(t, e, n, i, r) {
        for (var a = 0, o = 0, s = 0, l = 0, h = 0, u = 0; u < t.length;) {
            var c = t[u++];
            switch (c === Zc.M && u > 1 && (n || (a += $n(o, s, l, h, i, r))), 1 == u && (l = o = t[u], h = s = t[u + 1]), c) {
                case Zc.M:
                    o = l = t[u++], s = h = t[u++];
                    break;
                case Zc.L:
                    if (n) {
                        if (Xn(o, s, t[u], t[u + 1], e, i, r)) return !0
                    } else a += $n(o, s, t[u], t[u + 1], i, r) || 0;
                    o = t[u++], s = t[u++];
                    break;
                case Zc.C:
                    if (n) {
                        if (Un(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0
                    } else a += Jn(o, s, t[u++], t[u++], t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
                    o = t[u++], s = t[u++];
                    break;
                case Zc.Q:
                    if (n) {
                        if (Yn(o, s, t[u++], t[u++], t[u], t[u + 1], e, i, r)) return !0
                    } else a += ti(o, s, t[u++], t[u++], t[u], t[u + 1], i, r) || 0;
                    o = t[u++], s = t[u++];
                    break;
                case Zc.A:
                    var f = t[u++],
                        d = t[u++],
                        p = t[u++],
                        g = t[u++],
                        m = t[u++],
                        v = t[u++],
                        y = (t[u++], 1 - t[u++]),
                        _ = Math.cos(m) * p + f,
                        x = Math.sin(m) * g + d;
                    u > 1 ? a += $n(o, s, _, x, i, r) : (l = _, h = x);
                    var w = (i - f) * g / p + f;
                    if (n) {
                        if (Zn(f, d, g, m, m + v, y, e, w, r)) return !0
                    } else a += ei(f, d, g, m, m + v, y, w, r);
                    o = Math.cos(m + v) * p + f, s = Math.sin(m + v) * g + d;
                    break;
                case Zc.R:
                    l = o = t[u++], h = s = t[u++];
                    var _ = l + t[u++],
                        x = h + t[u++];
                    if (n) {
                        if (Xn(l, h, _, h, e, i, r) || Xn(_, h, _, x, e, i, r) || Xn(_, x, l, x, e, i, r) || Xn(l, x, l, h, e, i, r)) return !0
                    } else a += $n(_, h, _, x, i, r), a += $n(l, x, l, h, i, r);
                    break;
                case Zc.Z:
                    if (n) {
                        if (Xn(o, s, l, h, e, i, r)) return !0
                    } else a += $n(o, s, l, h, i, r);
                    o = l, s = h
            }
        }
        return n || Kn(s, h) || (a += $n(o, s, l, h, i, r) || 0), 0 !== a
    }

    function ii(t, e, n) {
        return ni(t, 0, !1, e, n)
    }

    function ri(t, e, n, i) {
        return ni(t, e, !0, n, i)
    }

    function ai(t) {
        Re.call(this, t), this.path = null
    }

    function oi(t, e, n, i, r, a, o, s, l, h, u) {
        var c = l * (df / 180),
            f = ff(c) * (t - n) / 2 + cf(c) * (e - i) / 2,
            d = -1 * cf(c) * (t - n) / 2 + ff(c) * (e - i) / 2,
            p = f * f / (o * o) + d * d / (s * s);
        p > 1 && (o *= uf(p), s *= uf(p));
        var g = (r === a ? -1 : 1) * uf((o * o * (s * s) - o * o * (d * d) - s * s * (f * f)) / (o * o * (d * d) + s * s * (f * f))) || 0,
            m = g * o * d / s,
            v = g * -s * f / o,
            y = (t + n) / 2 + ff(c) * m - cf(c) * v,
            _ = (e + i) / 2 + cf(c) * m + ff(c) * v,
            x = mf([1, 0], [(f - m) / o, (d - v) / s]),
            w = [(f - m) / o, (d - v) / s],
            b = [(-1 * f - m) / o, (-1 * d - v) / s],
            M = mf(w, b);
        gf(w, b) <= -1 && (M = df), gf(w, b) >= 1 && (M = 0), 0 === a && M > 0 && (M -= 2 * df), 1 === a && M < 0 && (M += 2 * df), u.addData(h, y, _, o, s, x, M, c, a)
    }

    function si(t) {
        if (!t) return [];
        var e, n = t.replace(/-/g, " -").replace(/  /g, " ").replace(/ /g, ",").replace(/,,/g, ",");
        for (e = 0; e < hf.length; e++) n = n.replace(new RegExp(hf[e], "g"), "|" + hf[e]);
        var i, r = n.split("|"),
            a = 0,
            o = 0,
            s = new Uc,
            l = Uc.CMD;
        for (e = 1; e < r.length; e++) {
            var h, u = r[e],
                c = u.charAt(0),
                f = 0,
                d = u.slice(1).replace(/e,-/g, "e-").split(",");
            d.length > 0 && "" === d[0] && d.shift();
            for (var p = 0; p < d.length; p++) d[p] = parseFloat(d[p]);
            for (; f < d.length && !isNaN(d[f]) && !isNaN(d[0]);) {
                var g, m, v, y, _, x, w, b = a,
                    M = o;
                switch (c) {
                    case "l":
                        a += d[f++], o += d[f++], h = l.L, s.addData(h, a, o);
                        break;
                    case "L":
                        a = d[f++], o = d[f++], h = l.L, s.addData(h, a, o);
                        break;
                    case "m":
                        a += d[f++], o += d[f++], h = l.M, s.addData(h, a, o), c = "l";
                        break;
                    case "M":
                        a = d[f++], o = d[f++], h = l.M, s.addData(h, a, o), c = "L";
                        break;
                    case "h":
                        a += d[f++], h = l.L, s.addData(h, a, o);
                        break;
                    case "H":
                        a = d[f++], h = l.L, s.addData(h, a, o);
                        break;
                    case "v":
                        o += d[f++], h = l.L, s.addData(h, a, o);
                        break;
                    case "V":
                        o = d[f++], h = l.L, s.addData(h, a, o);
                        break;
                    case "C":
                        h = l.C, s.addData(h, d[f++], d[f++], d[f++], d[f++], d[f++], d[f++]), a = d[f - 2], o = d[f - 1];
                        break;
                    case "c":
                        h = l.C, s.addData(h, d[f++] + a, d[f++] + o, d[f++] + a, d[f++] + o, d[f++] + a, d[f++] + o), a += d[f - 2], o += d[f - 1];
                        break;
                    case "S":
                        g = a, m = o;
                        var S = s.len(),
                            I = s.data;
                        i === l.C && (g += a - I[S - 4], m += o - I[S - 3]), h = l.C, b = d[f++], M = d[f++], a = d[f++], o = d[f++], s.addData(h, g, m, b, M, a, o);
                        break;
                    case "s":
                        g = a, m = o;
                        var S = s.len(),
                            I = s.data;
                        i === l.C && (g += a - I[S - 4], m += o - I[S - 3]), h = l.C, b = a + d[f++], M = o + d[f++], a += d[f++], o += d[f++], s.addData(h, g, m, b, M, a, o);
                        break;
                    case "Q":
                        b = d[f++], M = d[f++], a = d[f++], o = d[f++], h = l.Q, s.addData(h, b, M, a, o);
                        break;
                    case "q":
                        b = d[f++] + a, M = d[f++] + o, a += d[f++], o += d[f++], h = l.Q, s.addData(h, b, M, a, o);
                        break;
                    case "T":
                        g = a, m = o;
                        var S = s.len(),
                            I = s.data;
                        i === l.Q && (g += a - I[S - 4], m += o - I[S - 3]), a = d[f++], o = d[f++], h = l.Q, s.addData(h, g, m, a, o);
                        break;
                    case "t":
                        g = a, m = o;
                        var S = s.len(),
                            I = s.data;
                        i === l.Q && (g += a - I[S - 4], m += o - I[S - 3]), a += d[f++], o += d[f++], h = l.Q, s.addData(h, g, m, a, o);
                        break;
                    case "A":
                        v = d[f++], y = d[f++], _ = d[f++], x = d[f++], w = d[f++], oi(b = a, M = o, a = d[f++], o = d[f++], x, w, v, y, _, h = l.A, s);
                        break;
                    case "a":
                        v = d[f++], y = d[f++], _ = d[f++], x = d[f++], w = d[f++], oi(b = a, M = o, a += d[f++], o += d[f++], x, w, v, y, _, h = l.A, s)
                }
            }
            "z" !== c && "Z" !== c || (h = l.Z, s.addData(h)), i = h
        }
        return s.toStatic(), s
    }

    function li(t, e) {
        var n = si(t);
        return e = e || {}, e.buildPath = function (t) {
            if (t.setData) t.setData(n.data), (e = t.getContext()) && t.rebuildPath(e);
            else {
                var e = t;
                n.rebuildPath(e)
            }
        }, e.applyTransform = function (t) {
            lf(n, t), this.dirty(!0)
        }, e
    }

    function hi(t, e) {
        return new ai(li(t, e))
    }

    function ui(t, e) {
        return ai.extend(li(t, e))
    }

    function ci(t, e, n, i, r, a, o) {
        var s = .5 * (n - t),
            l = .5 * (i - e);
        return (2 * (e - n) + s + l) * o + (-3 * (e - n) - 2 * s - l) * a + s * r + e
    }

    function fi(t, e, n) {
        var i = e.points,
            r = e.smooth;
        if (i && i.length >= 2) {
            if (r && "spline" !== r) {
                var a = Sf(i, r, n, e.smoothConstraint);
                t.moveTo(i[0][0], i[0][1]);
                for (var o = i.length, s = 0; s < (n ? o : o - 1); s++) {
                    var l = a[2 * s],
                        h = a[2 * s + 1],
                        u = i[(s + 1) % o];
                    t.bezierCurveTo(l[0], l[1], h[0], h[1], u[0], u[1])
                }
            } else {
                "spline" === r && (i = Mf(i, n)), t.moveTo(i[0][0], i[0][1]);
                for (var s = 1, c = i.length; s < c; s++) t.lineTo(i[s][0], i[s][1])
            }
            n && t.closePath()
        }
    }

    function di(t, e, n) {
        var i = t.cpx2,
            r = t.cpy2;
        return null === i || null === r ? [(n ? An : kn)(t.x1, t.cpx1, t.cpx2, t.x2, e), (n ? An : kn)(t.y1, t.cpy1, t.cpy2, t.y2, e)] : [(n ? Rn : Nn)(t.x1, t.cpx1, t.x2, e), (n ? Rn : Nn)(t.y1, t.cpy1, t.y2, e)]
    }

    function pi(t) {
        Re.call(this, t), this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.notClear = !0
    }

    function gi(t) {
        return ai.extend(t)
    }

    function mi(t, e, n, i) {
        var r = hi(t, e),
            a = r.getBoundingRect();
        return n && ("center" === i && (n = yi(n, a)), _i(r, n)), r
    }

    function vi(t, e, n) {
        var i = new Be({
            style: {
                image: t,
                x: e.x,
                y: e.y,
                width: e.width,
                height: e.height
            },
            onload: function (t) {
                if ("center" === n) {
                    var r = {
                        width: t.width,
                        height: t.height
                    };
                    i.setStyle(yi(e, r))
                }
            }
        });
        return i
    }

    function yi(t, e) {
        var n, i = e.width / e.height,
            r = t.height * i;
        return n = r <= t.width ? t.height : (r = t.width) / i, {
            x: t.x + t.width / 2 - r / 2,
            y: t.y + t.height / 2 - n / 2,
            width: r,
            height: n
        }
    }

    function _i(t, e) {
        if (t.applyTransform) {
            var n = t.getBoundingRect().calculateTransform(e);
            t.applyTransform(n)
        }
    }

    function xi(t) {
        var e = t.shape,
            n = t.style.lineWidth;
        return Bf(2 * e.x1) === Bf(2 * e.x2) && (e.x1 = e.x2 = wi(e.x1, n, !0)), Bf(2 * e.y1) === Bf(2 * e.y2) && (e.y1 = e.y2 = wi(e.y1, n, !0)), t
    }

    function wi(t, e, n) {
        var i = Bf(2 * t);
        return (i + Bf(e)) % 2 == 0 ? i / 2 : (i + (n ? 1 : -1)) / 2
    }

    function bi(t) {
        return null != t && "none" != t
    }

    function Mi(t) {
        return "string" == typeof t ? wt(t, -.1) : t
    }

    function Si(t) {
        if (t.__hoverStlDirty) {
            var e = t.style.stroke,
                n = t.style.fill,
                i = t.__hoverStl;
            i.fill = i.fill || (bi(n) ? Mi(n) : null), i.stroke = i.stroke || (bi(e) ? Mi(e) : null);
            var r = {};
            for (var a in i) null != i[a] && (r[a] = t.style[a]);
            t.__normalStl = r, t.__hoverStlDirty = !1
        }
    }

    function Ii(t) {
        if (!t.__isHover) {
            if (Si(t), t.useHoverLayer) t.__zr && t.__zr.addHover(t, t.__hoverStl);
            else {
                var e = t.style,
                    n = e.insideRollbackOpt;
                n && Hi(e), e.extendFrom(t.__hoverStl), n && (Wi(e, e.insideOriginalTextPosition, n), null == e.textFill && (e.textFill = n.autoColor)), t.dirty(!1), t.z2 += 1
            }
            t.__isHover = !0
        }
    }

    function Ti(t) {
        if (t.__isHover) {
            var e = t.__normalStl;
            t.useHoverLayer ? t.__zr && t.__zr.removeHover(t) : (e && t.setStyle(e), t.z2 -= 1), t.__isHover = !1
        }
    }

    function Ci(t) {
        "group" === t.type ? t.traverse(function (t) {
            "group" !== t.type && Ii(t)
        }) : Ii(t)
    }

    function Di(t) {
        "group" === t.type ? t.traverse(function (t) {
            "group" !== t.type && Ti(t)
        }) : Ti(t)
    }

    function ki(t, e) {
        t.__hoverStl = t.hoverStyle || e || {}, t.__hoverStlDirty = !0, t.__isHover && Si(t)
    }

    function Ai(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Ci(this)
    }

    function Li(t) {
        this.__hoverSilentOnTouch && t.zrByTouch || !this.__isEmphasis && Di(this)
    }

    function Pi() {
        this.__isEmphasis = !0, Ci(this)
    }

    function Oi() {
        this.__isEmphasis = !1, Di(this)
    }

    function Ei(t, e, n) {
        t.__hoverSilentOnTouch = n && n.hoverSilentOnTouch, "group" === t.type ? t.traverse(function (t) {
            "group" !== t.type && ki(t, e)
        }) : ki(t, e), t.on("mouseover", Ai).on("mouseout", Li), t.on("emphasis", Pi).on("normal", Oi)
    }

    function Ni(t, e, n, i, r, a, o) {
        var s, l = (r = r || Vf).labelFetcher,
            h = r.labelDataIndex,
            u = r.labelDimIndex,
            c = n.getShallow("show"),
            f = i.getShallow("show");
        (c || f) && (l && (s = l.getFormattedLabel(h, "normal", null, u)), null == s && (s = _(r.defaultText) ? r.defaultText(h, r) : r.defaultText));
        var d = c ? s : null,
            p = f ? C(l ? l.getFormattedLabel(h, "emphasis", null, u) : null, s) : null;
        null == d && null == p || (Ri(t, n, a, r), Ri(e, i, o, r, !0)), t.text = d, e.text = p
    }

    function Ri(t, e, n, i, r) {
        return Bi(t, e, i, r), n && a(t, n), t.host && t.host.dirty && t.host.dirty(!1), t
    }

    function Bi(t, e, n, i) {
        if ((n = n || Vf).isRectText) {
            var r = e.getShallow("position") || (i ? null : "inside");
            "outside" === r && (r = "top"), t.textPosition = r, t.textOffset = e.getShallow("offset");
            var a = e.getShallow("rotate");
            null != a && (a *= Math.PI / 180), t.textRotation = a, t.textDistance = C(e.getShallow("distance"), i ? null : 5)
        }
        var o, s = e.ecModel,
            l = s && s.option.textStyle,
            h = zi(e);
        if (h) {
            o = {};
            for (var u in h)
                if (h.hasOwnProperty(u)) {
                    var c = e.getModel(["rich", u]);
                    Fi(o[u] = {}, c, l, n, i)
                }
        }
        return t.rich = o, Fi(t, e, l, n, i, !0), n.forceRich && !n.textStyle && (n.textStyle = {}), t
    }

    function zi(t) {
        for (var e; t && t !== t.ecModel;) {
            var n = (t.option || Vf).rich;
            if (n) {
                e = e || {};
                for (var i in n) n.hasOwnProperty(i) && (e[i] = 1)
            }
            t = t.parentModel
        }
        return e
    }

    function Fi(t, e, n, i, r, a) {
        if (n = !r && n || Vf, t.textFill = Vi(e.getShallow("color"), i) || n.color, t.textStroke = Vi(e.getShallow("textBorderColor"), i) || n.textBorderColor, t.textStrokeWidth = C(e.getShallow("textBorderWidth"), n.textBorderWidth), !r) {
            if (a) {
                var o = t.textPosition;
                t.insideRollback = Wi(t, o, i), t.insideOriginalTextPosition = o, t.insideRollbackOpt = i
            }
            null == t.textFill && (t.textFill = i.autoColor)
        }
        t.fontStyle = e.getShallow("fontStyle") || n.fontStyle, t.fontWeight = e.getShallow("fontWeight") || n.fontWeight, t.fontSize = e.getShallow("fontSize") || n.fontSize, t.fontFamily = e.getShallow("fontFamily") || n.fontFamily, t.textAlign = e.getShallow("align"), t.textVerticalAlign = e.getShallow("verticalAlign") || e.getShallow("baseline"), t.textLineHeight = e.getShallow("lineHeight"), t.textWidth = e.getShallow("width"), t.textHeight = e.getShallow("height"), t.textTag = e.getShallow("tag"), a && i.disableBox || (t.textBackgroundColor = Vi(e.getShallow("backgroundColor"), i), t.textPadding = e.getShallow("padding"), t.textBorderColor = Vi(e.getShallow("borderColor"), i), t.textBorderWidth = e.getShallow("borderWidth"), t.textBorderRadius = e.getShallow("borderRadius"), t.textBoxShadowColor = e.getShallow("shadowColor"), t.textBoxShadowBlur = e.getShallow("shadowBlur"), t.textBoxShadowOffsetX = e.getShallow("shadowOffsetX"), t.textBoxShadowOffsetY = e.getShallow("shadowOffsetY")), t.textShadowColor = e.getShallow("textShadowColor") || n.textShadowColor, t.textShadowBlur = e.getShallow("textShadowBlur") || n.textShadowBlur, t.textShadowOffsetX = e.getShallow("textShadowOffsetX") || n.textShadowOffsetX, t.textShadowOffsetY = e.getShallow("textShadowOffsetY") || n.textShadowOffsetY
    }

    function Vi(t, e) {
        return "auto" !== t ? t : e && e.autoColor ? e.autoColor : null
    }

    function Wi(t, e, n) {
        var i, r = n.useInsideStyle;
        return null == t.textFill && !1 !== r && (!0 === r || n.isRectText && e && "string" == typeof e && e.indexOf("inside") >= 0) && (i = {
            textFill: null,
            textStroke: t.textStroke,
            textStrokeWidth: t.textStrokeWidth
        }, t.textFill = "#fff", null == t.textStroke && (t.textStroke = n.autoColor, null == t.textStrokeWidth && (t.textStrokeWidth = 2))), i
    }

    function Hi(t) {
        var e = t.insideRollback;
        e && (t.textFill = e.textFill, t.textStroke = e.textStroke, t.textStrokeWidth = e.textStrokeWidth)
    }

    function Gi(t, e) {
        var n = e || e.getModel("textStyle");
        return P([t.fontStyle || n && n.getShallow("fontStyle") || "", t.fontWeight || n && n.getShallow("fontWeight") || "", (t.fontSize || n && n.getShallow("fontSize") || 12) + "px", t.fontFamily || n && n.getShallow("fontFamily") || "sans-serif"].join(" "))
    }

    function qi(t, e, n, i, r, a) {
        if ("function" == typeof r && (a = r, r = null), i && i.isAnimationEnabled()) {
            var o = t ? "Update" : "",
                s = i.getShallow("animationDuration" + o),
                l = i.getShallow("animationEasing" + o),
                h = i.getShallow("animationDelay" + o);
            "function" == typeof h && (h = h(r, i.getAnimationDelayParams ? i.getAnimationDelayParams(e, r) : null)), "function" == typeof s && (s = s(r)), s > 0 ? e.animateTo(n, s, h || 0, l, a, !!a) : (e.stopAnimation(), e.attr(n), a && a())
        } else e.stopAnimation(), e.attr(n), a && a()
    }

    function Xi(t, e, n, i, r) {
        qi(!0, t, e, n, i, r)
    }

    function Ui(t, e, n, i, r) {
        qi(!1, t, e, n, i, r)
    }

    function Yi(t, e, n) {
        return e && !c(e) && (e = qh.getLocalTransform(e)), n && (e = lt([], e)), Y([], t, e)
    }

    function ji(t, e, n, i) {
        function r(t) {
            var e = {
                position: F(t.position),
                rotation: t.rotation
            };
            return t.shape && (e.shape = a({}, t.shape)), e
        }
        if (t && e) {
            var o = function (t) {
                var e = {};
                return t.traverse(function (t) {
                    !t.isGroup && t.anid && (e[t.anid] = t)
                }), e
            }(t);
            e.traverse(function (t) {
                if (!t.isGroup && t.anid) {
                    var e = o[t.anid];
                    if (e) {
                        var i = r(t);
                        t.attr(r(e)), Xi(t, i, n, t.dataIndex)
                    }
                }
            })
        }
    }

    function Zi(t, e, n) {
        this.parentModel = e, this.ecModel = n, this.option = t
    }

    function $i(t, e, n) {
        for (var i = 0; i < e.length && (!e[i] || null != (t = t && "object" == typeof t ? t[e[i]] : null)); i++);
        return null == t && n && (t = n.get(e)), t
    }

    function Ki(t, e) {
        var n = Yf(t).getParent;
        return n ? n.call(t, e) : t.parentModel
    }

    function Qi(t) {
        return [t || "", jf++, Math.random().toFixed(5)].join("_")
    }

    function Ji(t) {
        return t.replace(/^\s+/, "").replace(/\s+$/, "")
    }

    function tr(t, e, n, i) {
        var r = e[1] - e[0],
            a = n[1] - n[0];
        if (0 === r) return 0 === a ? n[0] : (n[0] + n[1]) / 2;
        if (i)
            if (r > 0) {
                if (t <= e[0]) return n[0];
                if (t >= e[1]) return n[1]
            } else {
                if (t >= e[0]) return n[0];
                if (t <= e[1]) return n[1]
            }
        else {
            if (t === e[0]) return n[0];
            if (t === e[1]) return n[1]
        }
        return (t - e[0]) / r * a + n[0]
    }

    function er(t, e) {
        switch (t) {
            case "center":
            case "middle":
                t = "50%";
                break;
            case "left":
            case "top":
                t = "0%";
                break;
            case "right":
            case "bottom":
                t = "100%"
        }
        return "string" == typeof t ? Ji(t).match(/%$/) ? parseFloat(t) / 100 * e : parseFloat(t) : null == t ? NaN : +t
    }

    function nr(t, e, n) {
        return null == e && (e = 10), e = Math.min(Math.max(0, e), 20), t = (+t).toFixed(e), n ? t : +t
    }

    function ir(t) {
        var e = t.toString(),
            n = e.indexOf("e");
        if (n > 0) {
            var i = +e.slice(n + 1);
            return i < 0 ? -i : 0
        }
        var r = e.indexOf(".");
        return r < 0 ? 0 : e.length - 1 - r
    }

    function rr(t, e) {
        var n = Math.log,
            i = Math.LN10,
            r = Math.floor(n(t[1] - t[0]) / i),
            a = Math.round(n(Math.abs(e[1] - e[0])) / i),
            o = Math.min(Math.max(-r + a, 0), 20);
        return isFinite(o) ? o : 20
    }

    function ar(t, e, n) {
        if (!t[e]) return 0;
        var i = p(t, function (t, e) {
            return t + (isNaN(e) ? 0 : e)
        }, 0);
        if (0 === i) return 0;
        for (var r = Math.pow(10, n), a = d(t, function (t) {
                return (isNaN(t) ? 0 : t) / i * r * 100
            }), o = 100 * r, s = d(a, function (t) {
                return Math.floor(t)
            }), l = p(s, function (t, e) {
                return t + e
            }, 0), h = d(a, function (t, e) {
                return t - s[e]
            }); l < o;) {
            for (var u = Number.NEGATIVE_INFINITY, c = null, f = 0, g = h.length; f < g; ++f) h[f] > u && (u = h[f], c = f);
            ++s[c], h[c] = 0, ++l
        }
        return s[e] / r
    }

    function or(t) {
        var e = 2 * Math.PI;
        return (t % e + e) % e
    }

    function sr(t) {
        return t > -Zf && t < Zf
    }

    function lr(t) {
        if (t instanceof Date) return t;
        if ("string" == typeof t) {
            var e = $f.exec(t);
            if (!e) return new Date(NaN);
            if (e[8]) {
                var n = +e[4] || 0;
                return "Z" !== e[8].toUpperCase() && (n -= e[8].slice(0, 3)), new Date(Date.UTC(+e[1], +(e[2] || 1) - 1, +e[3] || 1, n, +(e[5] || 0), +e[6] || 0, +e[7] || 0))
            }
            return new Date(+e[1], +(e[2] || 1) - 1, +e[3] || 1, +e[4] || 0, +(e[5] || 0), +e[6] || 0, +e[7] || 0)
        }
        return null == t ? new Date(NaN) : new Date(Math.round(t))
    }

    function hr(t) {
        return Math.pow(10, ur(t))
    }

    function ur(t) {
        return Math.floor(Math.log(t) / Math.LN10)
    }

    function cr(t, e) {
        var n, i = ur(t),
            r = Math.pow(10, i),
            a = t / r;
        return n = e ? a < 1.5 ? 1 : a < 2.5 ? 2 : a < 4 ? 3 : a < 7 ? 5 : 10 : a < 1 ? 1 : a < 2 ? 2 : a < 3 ? 3 : a < 5 ? 5 : 10, t = n * r, i >= -20 ? +t.toFixed(i < 0 ? -i : 0) : t
    }

    function fr(t) {
        return isNaN(t) ? "-" : (t = (t + "").split("."))[0].replace(/(\d{1,3})(?=(?:\d{3})+(?!\d))/g, "$1,") + (t.length > 1 ? "." + t[1] : "")
    }

    function dr(t) {
        return null == t ? "" : (t + "").replace(Qf, function (t, e) {
            return Jf[e]
        })
    }

    function pr(t, e, n) {
        y(e) || (e = [e]);
        var i = e.length;
        if (!i) return "";
        for (var r = e[0].$vars || [], a = 0; a < r.length; a++) {
            var o = td[a];
            t = t.replace(ed(o), ed(o, 0))
        }
        for (var s = 0; s < i; s++)
            for (var l = 0; l < r.length; l++) {
                var h = e[s][r[l]];
                t = t.replace(ed(td[l], s), n ? dr(h) : h)
            }
        return t
    }

    function gr(t, e) {
        var n = (t = x(t) ? {
                color: t,
                extraCssText: e
            } : t || {}).color,
            i = t.type,
            e = t.extraCssText;
        return n ? "subItem" === i ? '<span style="display:inline-block;vertical-align:middle;margin-right:8px;margin-left:3px;border-radius:4px;width:4px;height:4px;background-color:' + dr(n) + ";" + (e || "") + '"></span>' : '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + dr(n) + ";" + (e || "") + '"></span>' : ""
    }

    function mr(t, e) {
        return t += "", "0000".substr(0, e - t.length) + t
    }

    function vr(t, e, n) {
        "week" !== t && "month" !== t && "quarter" !== t && "half-year" !== t && "year" !== t || (t = "MM-dd\nyyyy");
        var i = lr(e),
            r = n ? "UTC" : "",
            a = i["get" + r + "FullYear"](),
            o = i["get" + r + "Month"]() + 1,
            s = i["get" + r + "Date"](),
            l = i["get" + r + "Hours"](),
            h = i["get" + r + "Minutes"](),
            u = i["get" + r + "Seconds"](),
            c = i["get" + r + "Milliseconds"]();
        return t = t.replace("MM", mr(o, 2)).replace("M", o).replace("yyyy", a).replace("yy", a % 100).replace("dd", mr(s, 2)).replace("d", s).replace("hh", mr(l, 2)).replace("h", l).replace("mm", mr(h, 2)).replace("m", h).replace("ss", mr(u, 2)).replace("s", u).replace("SSS", mr(c, 3))
    }

    function yr(t, e, n, i, r) {
        var a = 0,
            o = 0;
        null == i && (i = 1 / 0), null == r && (r = 1 / 0);
        var s = 0;
        e.eachChild(function (l, h) {
            var u, c, f = l.position,
                d = l.getBoundingRect(),
                p = e.childAt(h + 1),
                g = p && p.getBoundingRect();
            if ("horizontal" === t) {
                var m = d.width + (g ? -g.x + d.x : 0);
                (u = a + m) > i || l.newline ? (a = 0, u = m, o += s + n, s = d.height) : s = Math.max(s, d.height)
            } else {
                var v = d.height + (g ? -g.y + d.y : 0);
                (c = o + v) > r || l.newline ? (a += s + n, o = 0, c = v, s = d.width) : s = Math.max(s, d.width)
            }
            l.newline || (f[0] = a, f[1] = o, "horizontal" === t ? a = u + n : o = c + n)
        })
    }

    function _r(t, e, n) {
        n = Kf(n || 0);
        var i = e.width,
            r = e.height,
            a = er(t.left, i),
            o = er(t.top, r),
            s = er(t.right, i),
            l = er(t.bottom, r),
            h = er(t.width, i),
            u = er(t.height, r),
            c = n[2] + n[0],
            f = n[1] + n[3],
            d = t.aspect;
        switch (isNaN(h) && (h = i - s - f - a), isNaN(u) && (u = r - l - c - o), null != d && (isNaN(h) && isNaN(u) && (d > i / r ? h = .8 * i : u = .8 * r), isNaN(h) && (h = d * u), isNaN(u) && (u = h / d)), isNaN(a) && (a = i - s - h - f), isNaN(o) && (o = r - l - u - c), t.left || t.right) {
            case "center":
                a = i / 2 - h / 2 - n[3];
                break;
            case "right":
                a = i - h - f
        }
        switch (t.top || t.bottom) {
            case "middle":
            case "center":
                o = r / 2 - u / 2 - n[0];
                break;
            case "bottom":
                o = r - u - c
        }
        a = a || 0, o = o || 0, isNaN(h) && (h = i - f - a - (s || 0)), isNaN(u) && (u = r - c - o - (l || 0));
        var p = new Rt(a + n[3], o + n[0], h, u);
        return p.margin = n, p
    }

    function xr(t, e, n) {
        function i(n, i) {
            var o = {},
                l = 0,
                h = {},
                u = 0;
            if (id(n, function (e) {
                    h[e] = t[e]
                }), id(n, function (t) {
                    r(e, t) && (o[t] = h[t] = e[t]), a(o, t) && l++, a(h, t) && u++
                }), s[i]) return a(e, n[1]) ? h[n[2]] = null : a(e, n[2]) && (h[n[1]] = null), h;
            if (2 !== u && l) {
                if (l >= 2) return o;
                for (var c = 0; c < n.length; c++) {
                    var f = n[c];
                    if (!r(o, f) && r(t, f)) {
                        o[f] = t[f];
                        break
                    }
                }
                return o
            }
            return h
        }

        function r(t, e) {
            return t.hasOwnProperty(e)
        }

        function a(t, e) {
            return null != t[e] && "auto" !== t[e]
        }

        function o(t, e, n) {
            id(t, function (t) {
                e[t] = n[t]
            })
        }!w(n) && (n = {});
        var s = n.ignoreSize;
        !y(s) && (s = [s, s]);
        var l = i(ad[0], 0),
            h = i(ad[1], 1);
        o(ad[0], t, l), o(ad[1], t, h)
    }

    function wr(t) {
        return br({}, t)
    }

    function br(t, e) {
        return e && t && id(rd, function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t
    }

    function Mr(t, e) {
        for (var n = t.length, i = 0; i < n; i++)
            if (t[i].length > e) return t[i];
        return t[n - 1]
    }

    function Sr(t) {
        var e = t.get("coordinateSystem"),
            n = {
                coordSysName: e,
                coordSysDims: [],
                axisMap: R(),
                categoryAxisMap: R()
            },
            i = dd[e];
        if (i) return i(t, n, n.axisMap, n.categoryAxisMap), n
    }

    function Ir(t) {
        return "category" === t.get("type")
    }

    function Tr(t) {
        this.fromDataset = t.fromDataset, this.data = t.data || (t.sourceFormat === vd ? {} : []), this.sourceFormat = t.sourceFormat || yd, this.seriesLayoutBy = t.seriesLayoutBy || xd, this.dimensionsDefine = t.dimensionsDefine, this.encodeDefine = t.encodeDefine && R(t.encodeDefine), this.startIndex = t.startIndex || 0, this.dimensionsDetectCount = t.dimensionsDetectCount
    }

    function Cr(t) {
        var e = t.option.source,
            n = yd;
        if (M(e)) n = _d;
        else if (y(e))
            for (var i = 0, r = e.length; i < r; i++) {
                var a = e[i];
                if (null != a) {
                    if (y(a)) {
                        n = gd;
                        break
                    }
                    if (w(a)) {
                        n = md;
                        break
                    }
                }
            } else if (w(e)) {
                for (var o in e)
                    if (e.hasOwnProperty(o) && c(e[o])) {
                        n = vd;
                        break
                    }
            } else if (null != e) throw new Error("Invalid data");
        bd(t).sourceFormat = n
    }

    function Dr(t) {
        return bd(t).source
    }

    function kr(t) {
        bd(t).datasetMap = R()
    }

    function Ar(t) {
        var e = t.option,
            n = e.data,
            i = M(n) ? _d : pd,
            r = !1,
            a = e.seriesLayoutBy,
            o = e.sourceHeader,
            s = e.dimensions,
            l = Rr(t);
        if (l) {
            var h = l.option;
            n = h.source, i = bd(l).sourceFormat, r = !0, a = a || h.seriesLayoutBy, null == o && (o = h.sourceHeader), s = s || h.dimensions
        }
        var u = Lr(n, i, a, o, s),
            c = e.encode;
        !c && l && (c = Nr(t, l, n, i, a, u)), bd(t).source = new Tr({
            data: n,
            fromDataset: r,
            seriesLayoutBy: a,
            sourceFormat: i,
            dimensionsDefine: u.dimensionsDefine,
            startIndex: u.startIndex,
            dimensionsDetectCount: u.dimensionsDetectCount,
            encodeDefine: c
        })
    }

    function Lr(t, e, n, i, r) {
        if (!t) return {
            dimensionsDefine: Pr(r)
        };
        var a, o, s;
        if (e === gd) "auto" === i || null == i ? Or(function (t) {
            null != t && "-" !== t && (x(t) ? null == o && (o = 1) : o = 0)
        }, n, t, 10) : o = i ? 1 : 0, r || 1 !== o || (r = [], Or(function (t, e) {
            r[e] = null != t ? t : ""
        }, n, t)), a = r ? r.length : n === wd ? t.length : t[0] ? t[0].length : null;
        else if (e === md) r || (r = Er(t), s = !0);
        else if (e === vd) r || (r = [], s = !0, f(t, function (t, e) {
            r.push(e)
        }));
        else if (e === pd) {
            var l = ln(t[0]);
            a = y(l) && l.length || 1
        }
        var h;
        return s && f(r, function (t, e) {
            "name" === (w(t) ? t.name : t) && (h = e)
        }), {
            startIndex: o,
            dimensionsDefine: Pr(r),
            dimensionsDetectCount: a,
            potentialNameDimIndex: h
        }
    }

    function Pr(t) {
        if (t) {
            var e = R();
            return d(t, function (t, n) {
                if (null == (t = a({}, w(t) ? t : {
                        name: t
                    })).name) return t;
                t.name += "", null == t.displayName && (t.displayName = t.name);
                var i = e.get(t.name);
                return i ? t.name += "-" + i.count++ : e.set(t.name, {
                    count: 1
                }), t
            })
        }
    }

    function Or(t, e, n, i) {
        if (null == i && (i = 1 / 0), e === wd)
            for (a = 0; a < n.length && a < i; a++) t(n[a] ? n[a][0] : null, a);
        else
            for (var r = n[0] || [], a = 0; a < r.length && a < i; a++) t(r[a], a)
    }

    function Er(t) {
        for (var e, n = 0; n < t.length && !(e = t[n++]););
        if (e) {
            var i = [];
            return f(e, function (t, e) {
                i.push(e)
            }), i
        }
    }

    function Nr(t, e, n, i, r, a) {
        var o = Sr(t),
            s = {},
            l = [],
            h = [],
            u = t.subType,
            c = R(["pie", "map", "funnel"]),
            d = R(["line", "bar", "pictorialBar", "scatter", "effectScatter", "candlestick", "boxplot"]);
        if (o && null != d.get(u)) {
            var p = t.ecModel,
                g = bd(p).datasetMap,
                m = e.uid + "_" + r,
                v = g.get(m) || g.set(m, {
                    categoryWayDim: 1,
                    valueWayDim: 0
                });
            f(o.coordSysDims, function (t) {
                if (null == o.firstCategoryDimIndex) {
                    e = v.valueWayDim++;
                    s[t] = e, h.push(e)
                } else if (o.categoryAxisMap.get(t)) s[t] = 0, l.push(0);
                else {
                    var e = v.categoryWayDim++;
                    s[t] = e, h.push(e)
                }
            })
        } else if (null != c.get(u)) {
            for (var y, _ = 0; _ < 5 && null == y; _++) zr(n, i, r, a.dimensionsDefine, a.startIndex, _) || (y = _);
            if (null != y) {
                s.value = y;
                var x = a.potentialNameDimIndex || Math.max(y - 1, 0);
                h.push(x), l.push(x)
            }
        }
        return l.length && (s.itemName = l), h.length && (s.seriesName = h), s
    }

    function Rr(t) {
        var e = t.option;
        if (!e.data) return t.ecModel.getComponent("dataset", e.datasetIndex || 0)
    }

    function Br(t, e) {
        return zr(t.data, t.sourceFormat, t.seriesLayoutBy, t.dimensionsDefine, t.startIndex, e)
    }

    function zr(t, e, n, i, r, a) {
        function o(t) {
            return (null == t || !isFinite(t) || "" === t) && (!(!x(t) || "-" === t) || void 0)
        }
        var s;
        if (M(t)) return !1;
        var l;
        if (i && (l = w(l = i[a]) ? l.name : l), e === gd)
            if (n === wd) {
                for (var h = t[a], u = 0; u < (h || []).length && u < 5; u++)
                    if (null != (s = o(h[r + u]))) return s
            } else
                for (u = 0; u < t.length && u < 5; u++) {
                    var c = t[r + u];
                    if (c && null != (s = o(c[a]))) return s
                } else if (e === md) {
                    if (!l) return;
                    for (u = 0; u < t.length && u < 5; u++)
                        if ((f = t[u]) && null != (s = o(f[l]))) return s
                } else if (e === vd) {
            if (!l) return;
            if (!(h = t[l]) || M(h)) return !1;
            for (u = 0; u < h.length && u < 5; u++)
                if (null != (s = o(h[u]))) return s
        } else if (e === pd)
            for (u = 0; u < t.length && u < 5; u++) {
                var f = t[u],
                    d = ln(f);
                if (!y(d)) return !1;
                if (null != (s = o(d[a]))) return s
            }
        return !1
    }

    function Fr(t, e) {
        if (e) {
            var n = e.seiresIndex,
                i = e.seriesId,
                r = e.seriesName;
            return null != n && t.componentIndex !== n || null != i && t.id !== i || null != r && t.name !== r
        }
    }

    function Vr(t, e) {
        var r = t.color && !t.colorLayer;
        f(e, function (e, a) {
            "colorLayer" === a && r || ld.hasClass(a) || ("object" == typeof e ? t[a] = t[a] ? i(t[a], e, !1) : n(e) : null == t[a] && (t[a] = e))
        })
    }

    function Wr(t) {
        t = t, this.option = {}, this.option[Md] = 1, this._componentsMap = R({
            series: []
        }), this._seriesIndices, this._seriesIndicesMap, Vr(t, this._theme.option), i(t, ud, !1), this.mergeOption(t)
    }

    function Hr(t, e) {
        y(e) || (e = e ? [e] : []);
        var n = {};
        return f(e, function (e) {
            n[e] = (t.get(e) || []).slice()
        }), n
    }

    function Gr(t, e, n) {
        return e.type ? e.type : n ? n.subType : ld.determineSubType(t, e)
    }

    function qr(t, e) {
        t._seriesIndicesMap = R(t._seriesIndices = d(e, function (t) {
            return t.componentIndex
        }) || [])
    }

    function Xr(t, e) {
        return e.hasOwnProperty("subType") ? g(t, function (t) {
            return t.subType === e.subType
        }) : t
    }

    function Ur(t) {
        f(Id, function (e) {
            this[e] = m(t[e], t)
        }, this)
    }

    function Yr() {
        this._coordinateSystems = []
    }

    function jr(t) {
        this._api = t, this._timelineOptions = [], this._mediaList = [], this._mediaDefault, this._currentMediaIndices = [], this._optionBackup, this._newBaseOption
    }

    function Zr(t, e, n) {
        var i, r, a = [],
            o = [],
            s = t.timeline;
        if (t.baseOption && (r = t.baseOption), (s || t.options) && (r = r || {}, a = (t.options || []).slice()), t.media) {
            r = r || {};
            var l = t.media;
            Cd(l, function (t) {
                t && t.option && (t.query ? o.push(t) : i || (i = t))
            })
        }
        return r || (r = t), r.timeline || (r.timeline = s), Cd([r].concat(a).concat(d(o, function (t) {
            return t.option
        })), function (t) {
            Cd(e, function (e) {
                e(t, n)
            })
        }), {
            baseOption: r,
            timelineOptions: a,
            mediaDefault: i,
            mediaList: o
        }
    }

    function $r(t, e, n) {
        var i = {
                width: e,
                height: n,
                aspectratio: e / n
            },
            r = !0;
        return f(t, function (t, e) {
            var n = e.match(Ld);
            if (n && n[1] && n[2]) {
                var a = n[1],
                    o = n[2].toLowerCase();
                Kr(i[o], t, a) || (r = !1)
            }
        }), r
    }

    function Kr(t, e, n) {
        return "min" === n ? t >= e : "max" === n ? t <= e : t === e
    }

    function Qr(t, e) {
        return t.join(",") === e.join(",")
    }

    function Jr(t, e) {
        Cd(e = e || {}, function (e, n) {
            if (null != e) {
                var i = t[n];
                if (ld.hasClass(n)) {
                    e = on(e);
                    var r = un(i = on(i), e);
                    t[n] = kd(r, function (t) {
                        return t.option && t.exist ? Ad(t.exist, t.option, !0) : t.exist || t.option
                    })
                } else t[n] = Ad(i, e, !0)
            }
        })
    }

    function ta(t) {
        var e = t && t.itemStyle;
        if (e)
            for (var n = 0, r = Ed.length; n < r; n++) {
                var a = Ed[n],
                    o = e.normal,
                    s = e.emphasis;
                o && o[a] && (t[a] = t[a] || {}, t[a].normal ? i(t[a].normal, o[a]) : t[a].normal = o[a], o[a] = null), s && s[a] && (t[a] = t[a] || {}, t[a].emphasis ? i(t[a].emphasis, s[a]) : t[a].emphasis = s[a], s[a] = null)
            }
    }

    function ea(t, e, n) {
        if (t && t[e] && (t[e].normal || t[e].emphasis)) {
            var i = t[e].normal,
                r = t[e].emphasis;
            i && (n ? (t[e].normal = t[e].emphasis = null, o(t[e], i)) : t[e] = i), r && (t.emphasis = t.emphasis || {}, t.emphasis[e] = r)
        }
    }

    function na(t) {
        ea(t, "itemStyle"), ea(t, "lineStyle"), ea(t, "areaStyle"), ea(t, "label"), ea(t, "labelLine"), ea(t, "upperLabel"), ea(t, "edgeLabel")
    }

    function ia(t, e) {
        var n = Od(t) && t[e],
            i = Od(n) && n.textStyle;
        if (i)
            for (var r = 0, a = ac.length; r < a; r++) {
                var e = ac[r];
                i.hasOwnProperty(e) && (n[e] = i[e])
            }
    }

    function ra(t) {
        t && (na(t), ia(t, "label"), t.emphasis && ia(t.emphasis, "label"))
    }

    function aa(t) {
        if (Od(t)) {
            ta(t), na(t), ia(t, "label"), ia(t, "upperLabel"), ia(t, "edgeLabel"), t.emphasis && (ia(t.emphasis, "label"), ia(t.emphasis, "upperLabel"), ia(t.emphasis, "edgeLabel"));
            var e = t.markPoint;
            e && (ta(e), ra(e));
            var n = t.markLine;
            n && (ta(n), ra(n));
            var i = t.markArea;
            i && ra(i);
            var r = t.data;
            if ("graph" === t.type) {
                r = r || t.nodes;
                var a = t.links || t.edges;
                if (a && !M(a))
                    for (s = 0; s < a.length; s++) ra(a[s]);
                f(t.categories, function (t) {
                    na(t)
                })
            }
            if (r && !M(r))
                for (s = 0; s < r.length; s++) ra(r[s]);
            if ((e = t.markPoint) && e.data)
                for (var o = e.data, s = 0; s < o.length; s++) ra(o[s]);
            if ((n = t.markLine) && n.data)
                for (var l = n.data, s = 0; s < l.length; s++) y(l[s]) ? (ra(l[s][0]), ra(l[s][1])) : ra(l[s]);
            "gauge" === t.type ? (ia(t, "axisLabel"), ia(t, "title"), ia(t, "detail")) : "treemap" === t.type ? (ea(t.breadcrumb, "itemStyle"), f(t.levels, function (t) {
                na(t)
            })) : "tree" === t.type && na(t.leaves)
        }
    }

    function oa(t) {
        return y(t) ? t : t ? [t] : []
    }

    function sa(t) {
        return (y(t) ? t[0] : t) || {}
    }

    function la(t, e) {
        e = e.split(",");
        for (var n = t, i = 0; i < e.length && null != (n = n && n[e[i]]); i++);
        return n
    }

    function ha(t, e, n, i) {
        e = e.split(",");
        for (var r, a = t, o = 0; o < e.length - 1; o++) null == a[r = e[o]] && (a[r] = {}), a = a[r];
        (i || null == a[e[o]]) && (a[e[o]] = n)
    }

    function ua(t) {
        f(Rd, function (e) {
            e[0] in t && !(e[1] in t) && (t[e[1]] = t[e[0]])
        })
    }

    function ca(t) {
        f(t, function (e, n) {
            var i = [],
                r = [NaN, NaN],
                a = [e.stackResultDimension, e.stackedOverDimension],
                o = e.data,
                s = e.isStackedByIndex,
                l = o.map(a, function (a, l, h) {
                    var u = o.get(e.stackedDimension, h);
                    if (isNaN(u)) return r;
                    var c, f;
                    s ? f = o.getRawIndex(h) : c = o.get(e.stackedByDimension, h);
                    for (var d = NaN, p = n - 1; p >= 0; p--) {
                        var g = t[p];
                        if (s || (f = g.data.rawIndexOf(g.stackedByDimension, c)), f >= 0) {
                            var m = g.data.getByRawIndex(g.stackResultDimension, f);
                            if (u >= 0 && m > 0 || u <= 0 && m < 0) {
                                u += m, d = m;
                                break
                            }
                        }
                    }
                    return i[0] = u, i[1] = d, i
                });
            o.hostModel.setData(l), e.data = l
        })
    }

    function fa(t, e) {
        Tr.isInstance(t) || (t = Tr.seriesDataToSource(t)), this._source = t;
        var n = this._data = t.data,
            i = t.sourceFormat;
        i === _d && (this._offset = 0, this._dimSize = e, this._data = n), a(this, Vd[i === gd ? i + "_" + t.seriesLayoutBy : i])
    }

    function da() {
        return this._data.length
    }

    function pa(t) {
        return this._data[t]
    }

    function ga(t) {
        for (var e = 0; e < t.length; e++) this._data.push(t[e])
    }

    function ma(t, e, n, i) {
        return null != n ? t[n] : t
    }

    function va(t, e, n, i) {
        return ya(t[i], this._dimensionInfos[e])
    }

    function ya(t, e) {
        var n = e && e.type;
        if ("ordinal" === n) {
            var i = e && e.ordinalMeta;
            return i ? i.parseAndCollect(t) : t
        }
        return "time" === n && "number" != typeof t && null != t && "-" !== t && (t = +lr(t)), null == t || "" === t ? NaN : +t
    }

    function _a(t, e, n) {
        if (t) {
            var i = t.getRawDataItem(e);
            if (null != i) {
                var r, a, o = t.getProvider().getSource().sourceFormat,
                    s = t.getDimensionInfo(n);
                return s && (r = s.name, a = s.index), Wd[o](i, e, a, r)
            }
        }
    }

    function xa(t, e, n) {
        if (t) {
            var i = t.getProvider().getSource().sourceFormat;
            if (i === pd || i === md) {
                var r = t.getRawDataItem(e);
                return i !== pd || w(r) || (r = null), r ? r[n] : void 0
            }
        }
    }

    function wa(t) {
        return new ba(t)
    }

    function ba(t) {
        t = t || {}, this._reset = t.reset, this._plan = t.plan, this._count = t.count, this._onDirty = t.onDirty, this._dirty = !0, this.context
    }

    function Ma(t, e, n, i, r, a) {
        Ud.reset(n, i, r, a), t._callingProgress = e, t._callingProgress({
            start: n,
            end: i,
            count: i - n,
            next: Ud.next
        }, t.context)
    }

    function Sa(t, e) {
        t._dueIndex = t._outputDueEnd = t._dueEnd = 0, t._settedOutputEnd = null;
        var n, i;
        !e && t._reset && ((n = t._reset(t.context)) && n.progress && (i = n.forceFirstProgress, n = n.progress), y(n) && !n.length && (n = null)), t._progress = n, t._modBy = t._modDataCount = null;
        var r = t._downstream;
        return r && r.dirty(), i
    }

    function Ia(t) {
        var e = t.name;
        fn(t) || (t.name = Ta(t) || e)
    }

    function Ta(t) {
        var e = t.getRawData(),
            n = [];
        return f(e.mapDimension("seriesName", !0), function (t) {
            var i = e.getDimensionInfo(t);
            i.displayName && n.push(i.displayName)
        }), n.join(" ")
    }

    function Ca(t) {
        return t.model.getRawData().count()
    }

    function Da(t) {
        var e = t.model;
        return e.setData(e.getRawData().cloneShallow()), ka
    }

    function ka(t, e) {
        t.end > e.outputData.count() && e.model.getRawData().cloneShallow(e.outputData)
    }

    function Aa(t, e) {
        f(t.CHANGABLE_METHODS, function (n) {
            t.wrapMethod(n, v(La, e))
        })
    }

    function La(t) {
        var e = Pa(t);
        e && e.setOutputEnd(this.count())
    }

    function Pa(t) {
        var e = (t.ecModel || {}).scheduler,
            n = e && e.getPipeline(t.uid);
        if (n) {
            var i = n.currentTask;
            if (i) {
                var r = i.agentStubMap;
                r && (i = r.get(t.uid))
            }
            return i
        }
    }

    function Oa() {
        this.group = new du, this.uid = Qi("viewChart"), this.renderTask = wa({
            plan: Ra,
            reset: Ba
        }), this.renderTask.context = {
            view: this
        }
    }

    function Ea(t, e) {
        if (t && (t.trigger(e), "group" === t.type))
            for (var n = 0; n < t.childCount(); n++) Ea(t.childAt(n), e)
    }

    function Na(t, e, n) {
        var i = pn(t, e);
        null != i ? f(on(i), function (e) {
            Ea(t.getItemGraphicEl(e), n)
        }) : t.eachItemGraphicEl(function (t) {
            Ea(t, n)
        })
    }

    function Ra(t) {
        return Jd(t.model)
    }

    function Ba(t) {
        var e = t.model,
            n = t.ecModel,
            i = t.api,
            r = t.payload,
            a = e.pipelineContext.progressiveRender,
            o = t.view,
            s = r && Qd(r).updateMethod,
            l = a ? "incrementalPrepareRender" : s && o[s] ? s : "render";
        return "render" !== l && o[l](e, n, i, r), ep[l]
    }

    function za(t, e, n) {
        function i() {
            u = (new Date).getTime(), c = null, t.apply(o, s || [])
        }
        var r, a, o, s, l, h = 0,
            u = 0,
            c = null;
        e = e || 0;
        var f = function () {
            r = (new Date).getTime(), o = this, s = arguments;
            var t = l || e,
                f = l || n;
            l = null, a = r - (f ? h : u) - t, clearTimeout(c), f ? c = setTimeout(i, t) : a >= 0 ? i() : c = setTimeout(i, -a), h = r
        };
        return f.clear = function () {
            c && (clearTimeout(c), c = null)
        }, f.debounceNextCall = function (t) {
            l = t
        }, f
    }

    function Fa(t, e, n, i) {
        this.ecInstance = t, this.api = e, this.unfinished;
        var n = this._dataProcessorHandlers = n.slice(),
            i = this._visualHandlers = i.slice();
        this._allHandlers = n.concat(i), this._stageTaskMap = R()
    }

    function Va(t, e, n, i, r) {
        function a(t, e) {
            return t.setDirty && (!t.dirtyMap || t.dirtyMap.get(e.__pipeline.id))
        }
        r = r || {};
        var o;
        f(e, function (e, s) {
            if (!r.visualType || r.visualType === e.visualType) {
                var l = t._stageTaskMap.get(e.uid),
                    h = l.seriesTaskMap,
                    u = l.overallTask;
                if (u) {
                    var c, f = u.agentStubMap;
                    f.each(function (t) {
                        a(r, t) && (t.dirty(), c = !0)
                    }), c && u.dirty(), sp(u, i);
                    var d = t.getPerformArgs(u, r.block);
                    f.each(function (t) {
                        t.perform(d)
                    }), o |= u.perform(d)
                } else h && h.each(function (s, l) {
                    a(r, s) && s.dirty();
                    var h = t.getPerformArgs(s, r.block);
                    h.skip = !e.performRawSeries && n.isSeriesFiltered(s.context.model), sp(s, i), o |= s.perform(h)
                })
            }
        }), t.unfinished |= o
    }

    function Wa(t, e, n, i, r) {
        function a(n) {
            var a = n.uid,
                s = o.get(a) || o.set(a, wa({
                    plan: Ya,
                    reset: ja,
                    count: $a
                }));
            s.context = {
                model: n,
                ecModel: i,
                api: r,
                useClearVisual: e.isVisual && !e.isLayout,
                plan: e.plan,
                reset: e.reset,
                scheduler: t
            }, Ka(t, n, s)
        }
        var o = n.seriesTaskMap || (n.seriesTaskMap = R()),
            s = e.seriesType,
            l = e.getTargetSeries;
        e.createOnAllSeries ? i.eachRawSeries(a) : s ? i.eachRawSeriesByType(s, a) : l && l(i, r).each(a);
        var h = t._pipelineMap;
        o.each(function (t, e) {
            h.get(e) || (t.dispose(), o.removeKey(e))
        })
    }

    function Ha(t, e, n, i, r) {
        function a(e) {
            var n = e.uid,
                i = s.get(n);
            i || (i = s.set(n, wa({
                reset: qa,
                onDirty: Ua
            })), o.dirty()), i.context = {
                model: e,
                overallProgress: u,
                modifyOutputEnd: c
            }, i.agent = o, i.__block = u, Ka(t, e, i)
        }
        var o = n.overallTask = n.overallTask || wa({
            reset: Ga
        });
        o.context = {
            ecModel: i,
            api: r,
            overallReset: e.overallReset,
            scheduler: t
        };
        var s = o.agentStubMap = o.agentStubMap || R(),
            l = e.seriesType,
            h = e.getTargetSeries,
            u = !0,
            c = e.modifyOutputEnd;
        l ? i.eachRawSeriesByType(l, a) : h ? h(i, r).each(a) : (u = !1, f(i.getSeries(), a));
        var d = t._pipelineMap;
        s.each(function (t, e) {
            d.get(e) || (t.dispose(), o.dirty(), s.removeKey(e))
        })
    }

    function Ga(t) {
        t.overallReset(t.ecModel, t.api, t.payload)
    }

    function qa(t, e) {
        return t.overallProgress && Xa
    }

    function Xa() {
        this.agent.dirty(), this.getDownstream().dirty()
    }

    function Ua() {
        this.agent && this.agent.dirty()
    }

    function Ya(t) {
        return t.plan && t.plan(t.model, t.ecModel, t.api, t.payload)
    }

    function ja(t) {
        t.useClearVisual && t.data.clearAllVisual();
        var e = t.resetDefines = on(t.reset(t.model, t.ecModel, t.api, t.payload));
        return e.length > 1 ? d(e, function (t, e) {
            return Za(e)
        }) : lp
    }

    function Za(t) {
        return function (e, n) {
            var i = n.data,
                r = n.resetDefines[t];
            if (r && r.dataEach)
                for (var a = e.start; a < e.end; a++) r.dataEach(i, a);
            else r && r.progress && r.progress(e, i)
        }
    }

    function $a(t) {
        return t.data.count()
    }

    function Ka(t, e, n) {
        var i = e.uid,
            r = t._pipelineMap.get(i);
        !r.head && (r.head = n), r.tail && r.tail.pipe(n), r.tail = n, n.__idxInPipeline = r.count++, n.__pipeline = r
    }

    function Qa(t) {
        hp = null;
        try {
            t(up, cp)
        } catch (t) {}
        return hp
    }

    function Ja(t, e) {
        for (var n in e.prototype) t[n] = B
    }

    function to(t) {
        return function (e, n, i) {
            e = e && e.toLowerCase(), Bh.prototype[t].call(this, e, n, i)
        }
    }

    function eo() {
        Bh.call(this)
    }

    function no(t, e, i) {
        function r(t, e) {
            return t.__prio - e.__prio
        }
        i = i || {}, "string" == typeof e && (e = zp[e]), this.id, this.group, this._dom = t;
        var a = this._zr = an(t, {
            renderer: i.renderer || "canvas",
            devicePixelRatio: i.devicePixelRatio,
            width: i.width,
            height: i.height
        });
        this._throttledZrFlush = za(m(a.flush, a), 17), (e = n(e)) && zd(e, !0), this._theme = e, this._chartsViews = [], this._chartsMap = {}, this._componentsViews = [], this._componentsMap = {}, this._coordSysMgr = new Yr;
        var o = this._api = wo(this);
        qt(Bp, r), qt(Ep, r), this._scheduler = new Fa(this, o, Ep, Bp), Bh.call(this), this._messageCenter = new eo, this._initEvents(), this.resize = m(this.resize, this), this._pendingActions = [], a.animation.on("frame", this._onframe, this), uo(a, this), O(this)
    }

    function io(t, e, n) {
        var i, r = this._model,
            a = this._coordSysMgr.getCoordinateSystems();
        e = mn(r, e);
        for (var o = 0; o < a.length; o++) {
            var s = a[o];
            if (s[t] && null != (i = s[t](r, e, n))) return i
        }
    }

    function ro(t) {
        var e = t._model,
            n = t._scheduler;
        n.restorePipelines(e), n.prepareStageTasks(), co(t, "component", e, n), co(t, "chart", e, n), n.plan()
    }

    function ao(t, e, n, i, r) {
        function a(i) {
            i && i.__alive && i[e] && i[e](i.__model, o, t._api, n)
        }
        var o = t._model;
        if (i) {
            var s = {};
            s[i + "Id"] = n[i + "Id"], s[i + "Index"] = n[i + "Index"], s[i + "Name"] = n[i + "Name"];
            var l = {
                mainType: i,
                query: s
            };
            r && (l.subType = r);
            var h = n.excludeSeriesId;
            null != h && (h = R(on(h))), o && o.eachComponent(l, function (e) {
                h && null != h.get(e.id) || a(t["series" === i ? "_chartsMap" : "_componentsMap"][e.__viewId])
            }, t)
        } else vp(t._componentsViews.concat(t._chartsViews), a)
    }

    function oo(t, e) {
        var n = t._chartsMap,
            i = t._scheduler;
        e.eachSeries(function (t) {
            i.updateStreamModes(t, n[t.__viewId])
        })
    }

    function so(t, e) {
        var n = t.type,
            i = t.escapeConnect,
            r = Pp[n],
            s = r.actionInfo,
            l = (s.update || "update").split(":"),
            h = l.pop();
        l = null != l[0] && xp(l[0]), this[Tp] = !0;
        var u = [t],
            c = !1;
        t.batch && (c = !0, u = d(t.batch, function (e) {
            return e = o(a({}, e), t), e.batch = null, e
        }));
        var f, p = [],
            g = "highlight" === n || "downplay" === n;
        vp(u, function (t) {
            f = r.action(t, this._model, this._api), (f = f || a({}, t)).type = s.event || f.type, p.push(f), g ? ao(this, h, t, "series") : l && ao(this, h, t, l.main, l.sub)
        }, this), "none" === h || g || l || (this[Cp] ? (ro(this), Ap.update.call(this, t), this[Cp] = !1) : Ap[h].call(this, t)), f = c ? {
            type: s.event || n,
            escapeConnect: i,
            batch: p
        } : p[0], this[Tp] = !1, !e && this._messageCenter.trigger(f.type, f)
    }

    function lo(t) {
        for (var e = this._pendingActions; e.length;) {
            var n = e.shift();
            so.call(this, n, t)
        }
    }

    function ho(t) {
        !t && this.trigger("updated")
    }

    function uo(t, e) {
        t.on("rendered", function () {
            e.trigger("rendered"), !t.animation.isFinished() || e[Cp] || e._scheduler.unfinished || e._pendingActions.length || e.trigger("finished")
        })
    }

    function co(t, e, n, i) {
        function r(t) {
            var e = "_ec_" + t.id + "_" + t.type,
                r = s[e];
            if (!r) {
                var u = xp(t.type);
                (r = new(a ? Zd.getClass(u.main, u.sub) : Oa.getClass(u.sub))).init(n, h), s[e] = r, o.push(r), l.add(r.group)
            }
            t.__viewId = r.__id = e, r.__alive = !0, r.__model = t, r.group.__ecComponentInfo = {
                mainType: t.mainType,
                index: t.componentIndex
            }, !a && i.prepareView(r, t, n, h)
        }
        for (var a = "component" === e, o = a ? t._componentsViews : t._chartsViews, s = a ? t._componentsMap : t._chartsMap, l = t._zr, h = t._api, u = 0; u < o.length; u++) o[u].__alive = !1;
        a ? n.eachComponent(function (t, e) {
            "series" !== t && r(e)
        }) : n.eachSeries(r);
        for (u = 0; u < o.length;) {
            var c = o[u];
            c.__alive ? u++ : (!a && c.renderTask.dispose(), l.remove(c.group), c.dispose(n, h), o.splice(u, 1), delete s[c.__id], c.__id = c.group.__ecComponentInfo = null)
        }
    }

    function fo(t) {
        t.clearColorPalette(), t.eachSeries(function (t) {
            t.clearColorPalette()
        })
    }

    function po(t, e, n, i) {
        go(t, e, n, i), vp(t._chartsViews, function (t) {
            t.__alive = !1
        }), mo(t, e, n, i), vp(t._chartsViews, function (t) {
            t.__alive || t.remove(e, n)
        })
    }

    function go(t, e, n, i, r) {
        vp(r || t._componentsViews, function (t) {
            var r = t.__model;
            t.render(r, e, n, i), xo(r, t)
        })
    }

    function mo(t, e, n, i, r) {
        var a, o = t._scheduler;
        e.eachSeries(function (e) {
            var n = t._chartsMap[e.__viewId];
            n.__alive = !0;
            var s = n.renderTask;
            o.updatePayload(s, i), r && r.get(e.uid) && s.dirty(), a |= s.perform(o.getPerformArgs(s)), n.group.silent = !!e.get("silent"), xo(e, n), _o(e, n)
        }), o.unfinished |= a, yo(t._zr, e), rp(t._zr.dom, e)
    }

    function vo(t, e) {
        vp(Rp, function (n) {
            n(t, e)
        })
    }

    function yo(t, e) {
        var n = t.storage,
            i = 0;
        n.traverse(function (t) {
            t.isGroup || i++
        }), i > e.get("hoverLayerThreshold") && !_h.node && n.traverse(function (t) {
            t.isGroup || (t.useHoverLayer = !0)
        })
    }

    function _o(t, e) {
        var n = t.get("blendMode") || null;
        e.group.traverse(function (t) {
            t.isGroup || t.style.blend !== n && t.setStyle("blend", n), t.eachPendingDisplayable && t.eachPendingDisplayable(function (t) {
                t.setStyle("blend", n)
            })
        })
    }

    function xo(t, e) {
        var n = t.get("z"),
            i = t.get("zlevel");
        e.group.traverse(function (t) {
            "group" !== t.type && (null != n && (t.z = n), null != i && (t.zlevel = i))
        })
    }

    function wo(t) {
        var e = t._coordSysMgr;
        return a(new Ur(t), {
            getCoordinateSystems: m(e.getCoordinateSystems, e),
            getComponentByElement: function (e) {
                for (; e;) {
                    var n = e.__ecComponentInfo;
                    if (null != n) return t._model.getComponent(n.mainType, n.index);
                    e = e.parent
                }
            }
        })
    }

    function bo(t) {
        function e(t, e) {
            for (var i = 0; i < t.length; i++) t[i][n] = e
        }
        var n = "__connectUpdateStatus";
        vp(Op, function (i, r) {
            t._messageCenter.on(r, function (i) {
                if (Wp[t.group] && 0 !== t[n]) {
                    if (i && i.escapeConnect) return;
                    var r = t.makeActionFromEvent(i),
                        a = [];
                    vp(Vp, function (e) {
                        e !== t && e.group === t.group && a.push(e)
                    }), e(a, 0), vp(a, function (t) {
                        1 !== t[n] && t.dispatchAction(r)
                    }), e(a, 2)
                }
            })
        })
    }

    function Mo(t) {
        Wp[t] = !1
    }

    function So(t) {
        return Vp[_n(t, qp)]
    }

    function Io(t, e) {
        zp[t] = e
    }

    function To(t) {
        Np.push(t)
    }

    function Co(t, e) {
        Lo(Ep, t, e, bp)
    }

    function Do(t, e, n) {
        "function" == typeof e && (n = e, e = "");
        var i = _p(t) ? t.type : [t, t = {
            event: e
        }][0];
        t.event = (t.event || i).toLowerCase(), e = t.event, mp(Dp.test(i) && Dp.test(e)), Pp[i] || (Pp[i] = {
            action: n,
            actionInfo: t
        }), Op[e] = i
    }

    function ko(t, e) {
        Lo(Bp, t, e, Mp, "layout")
    }

    function Ao(t, e) {
        Lo(Bp, t, e, Sp, "visual")
    }

    function Lo(t, e, n, i, r) {
        (yp(e) || _p(e)) && (n = e, e = i);
        var a = Fa.wrapStageHandler(n, r);
        return a.__prio = e, a.__raw = n, t.push(a), a
    }

    function Po(t, e) {
        Fp[t] = e
    }

    function Oo(t) {
        return Zd.extend(t)
    }

    function Eo(t) {
        return jd.extend(t)
    }

    function No(t) {
        return Oa.extend(t)
    }

    function Ro(t) {
        return t
    }

    function Bo(t, e, n, i, r) {
        this._old = t, this._new = e, this._oldKeyGetter = n || Ro, this._newKeyGetter = i || Ro, this.context = r
    }

    function zo(t, e, n, i, r) {
        for (var a = 0; a < t.length; a++) {
            var o = "_ec_" + r[i](t[a], a),
                s = e[o];
            null == s ? (n.push(o), e[o] = a) : (s.length || (e[o] = s = [s]), s.push(a))
        }
    }

    function Fo(t) {
        var e = {},
            n = e.encode = {},
            i = R(),
            r = [],
            a = [];
        f(t.dimensions, function (e) {
            var o = t.getDimensionInfo(e),
                s = o.coordDim;
            if (s) {
                var l = n[s];
                n.hasOwnProperty(s) || (l = n[s] = []), l[o.coordDimIndex] = e, o.isExtraCoord || (i.set(s, 1), Wo(o.type) && (r[0] = e)), o.defaultTooltip && a.push(e)
            }
            jp.each(function (t, e) {
                var i = n[e];
                n.hasOwnProperty(e) || (i = n[e] = []);
                var r = o.otherDims[e];
                null != r && !1 !== r && (i[r] = o.name)
            })
        });
        var o = [],
            s = {};
        i.each(function (t, e) {
            var i = n[e];
            s[e] = i[0], o = o.concat(i)
        }), e.dataDimsOnCoord = o, e.encodeFirstDimNotExtra = s;
        var l = n.label;
        l && l.length && (r = l.slice());
        var h = n.tooltip;
        return h && h.length ? a = h.slice() : a.length || (a = r.slice()), n.defaultedLabel = r, n.defaultedTooltip = a, e
    }

    function Vo(t) {
        return "category" === t ? "ordinal" : "time" === t ? "time" : "float"
    }

    function Wo(t) {
        return !("ordinal" === t || "time" === t)
    }

    function Ho(t) {
        return t._rawCount > 65535 ? Qp : Jp
    }

    function Go(t) {
        var e = t.constructor;
        return e === Array ? t.slice() : new e(t)
    }

    function qo(t, e) {
        f(tg.concat(e.__wrappedMethods || []), function (n) {
            e.hasOwnProperty(n) && (t[n] = e[n])
        }), t.__wrappedMethods = e.__wrappedMethods, f(eg, function (i) {
            t[i] = n(e[i])
        }), t._calculationInfo = a(e._calculationInfo)
    }

    function Xo(t) {
        var e = t._invertedIndicesMap;
        f(e, function (n, i) {
            var r = t._dimensionInfos[i].ordinalMeta;
            if (r) {
                n = e[i] = new Qp(r.categories.length);
                for (a = 0; a < n.length; a++) n[a] = NaN;
                for (var a = 0; a < t._count; a++) n[t.get(i, a)] = a
            }
        })
    }

    function Uo(t, e, n) {
        var i;
        if (null != e) {
            var r = t._chunkSize,
                a = Math.floor(n / r),
                o = n % r,
                s = t.dimensions[e],
                l = t._storage[s][a];
            if (l) {
                i = l[o];
                var h = t._dimensionInfos[s].ordinalMeta;
                h && h.categories.length && (i = h.categories[i])
            }
        }
        return i
    }

    function Yo(t) {
        return t
    }

    function jo(t) {
        return t < this._count && t >= 0 ? this._indices[t] : -1
    }

    function Zo(t, e) {
        var n = t._idList[e];
        return null == n && (n = Uo(t, t._idDimIdx, e)), null == n && (n = $p + e), n
    }

    function $o(t) {
        return y(t) || (t = [t]), t
    }

    function Ko(t, e) {
        var n = t.dimensions,
            i = new ng(d(n, t.getDimensionInfo, t), t.hostModel);
        qo(i, t);
        for (var r = i._storage = {}, a = t._storage, o = 0; o < n.length; o++) {
            var s = n[o];
            a[s] && (l(e, s) >= 0 ? (r[s] = Qo(a[s]), i._rawExtent[s] = Jo(), i._extent[s] = null) : r[s] = a[s])
        }
        return i
    }

    function Qo(t) {
        for (var e = new Array(t.length), n = 0; n < t.length; n++) e[n] = Go(t[n]);
        return e
    }

    function Jo() {
        return [1 / 0, -1 / 0]
    }

    function ts(t, e, i) {
        function r(t, e, n) {
            null != jp.get(e) ? t.otherDims[e] = n : (t.coordDim = e, t.coordDimIndex = n, u.set(e, !0))
        }
        Tr.isInstance(e) || (e = Tr.seriesDataToSource(e)), i = i || {}, t = (t || []).slice();
        for (var s = (i.dimsDef || []).slice(), l = R(i.encodeDef), h = R(), u = R(), c = [], d = es(e, t, s, i.dimCount), p = 0; p < d; p++) {
            var g = s[p] = a({}, w(s[p]) ? s[p] : {
                    name: s[p]
                }),
                m = g.name,
                v = c[p] = {
                    otherDims: {}
                };
            null != m && null == h.get(m) && (v.name = v.displayName = m, h.set(m, p)), null != g.type && (v.type = g.type), null != g.displayName && (v.displayName = g.displayName)
        }
        l.each(function (t, e) {
            t = on(t).slice();
            var n = l.set(e, []);
            f(t, function (t, i) {
                x(t) && (t = h.get(t)), null != t && t < d && (n[i] = t, r(c[t], e, i))
            })
        });
        var y = 0;
        f(t, function (t, e) {
            var i, t, a, s;
            if (x(t)) i = t, t = {};
            else {
                i = t.name;
                var h = t.ordinalMeta;
                t.ordinalMeta = null, (t = n(t)).ordinalMeta = h, a = t.dimsDef, s = t.otherDims, t.name = t.coordDim = t.coordDimIndex = t.dimsDef = t.otherDims = null
            }
            var u = on(l.get(i));
            if (!u.length)
                for (var d = 0; d < (a && a.length || 1); d++) {
                    for (; y < c.length && null != c[y].coordDim;) y++;
                    y < c.length && u.push(y++)
                }
            f(u, function (e, n) {
                var l = c[e];
                if (r(o(l, t), i, n), null == l.name && a) {
                    var h = a[n];
                    !w(h) && (h = {
                        name: h
                    }), l.name = l.displayName = h.name, l.defaultTooltip = h.defaultTooltip
                }
                s && o(l.otherDims, s)
            })
        });
        var _ = i.generateCoord,
            b = i.generateCoordCount,
            M = null != b;
        b = _ ? b || 1 : 0;
        for (var S = _ || "value", I = 0; I < d; I++) null == (v = c[I] = c[I] || {}).coordDim && (v.coordDim = ns(S, u, M), v.coordDimIndex = 0, (!_ || b <= 0) && (v.isExtraCoord = !0), b--), null == v.name && (v.name = ns(v.coordDim, h)), null == v.type && Br(e, I, v.name) && (v.type = "ordinal");
        return c
    }

    function es(t, e, n, i) {
        var r = Math.max(t.dimensionsDetectCount || 1, e.length, n.length, i || 0);
        return f(e, function (t) {
            var e = t.dimsDef;
            e && (r = Math.max(r, e.length))
        }), r
    }

    function ns(t, e, n) {
        if (n || null != e.get(t)) {
            for (var i = 0; null != e.get(t + i);) i++;
            t += i
        }
        return e.set(t, !0), t
    }

    function is(t, e, n) {
        var i, r, a, o, s = (n = n || {}).byIndex,
            l = n.stackedCoordDimension,
            h = !(!t || !t.get("stack"));
        if (f(e, function (t, n) {
                x(t) && (e[n] = t = {
                    name: t
                }), h && !t.isExtraCoord && (s || i || !t.ordinalMeta || (i = t), r || "ordinal" === t.type || "time" === t.type || l && l !== t.coordDim || (r = t))
            }), !r || s || i || (s = !0), r) {
            a = "__\0ecstackresult", o = "__\0ecstackedover", i && (i.createInvertedIndices = !0);
            var u = r.coordDim,
                c = r.type,
                d = 0;
            f(e, function (t) {
                t.coordDim === u && d++
            }), e.push({
                name: a,
                coordDim: u,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            }), d++, e.push({
                name: o,
                coordDim: o,
                coordDimIndex: d,
                type: c,
                isExtraCoord: !0,
                isCalculationCoord: !0
            })
        }
        return {
            stackedDimension: r && r.name,
            stackedByDimension: i && i.name,
            isStackedByIndex: s,
            stackedOverDimension: o,
            stackResultDimension: a
        }
    }

    function rs(t, e) {
        return !!e && e === t.getCalculationInfo("stackedDimension")
    }

    function as(t, e) {
        return rs(t, e) ? t.getCalculationInfo("stackResultDimension") : e
    }

    function os(t, e, n) {
        n = n || {}, Tr.isInstance(t) || (t = Tr.seriesDataToSource(t));
        var i, r = e.get("coordinateSystem"),
            a = Yr.get(r),
            o = Sr(e);
        o && (i = d(o.coordSysDims, function (t) {
            var e = {
                    name: t
                },
                n = o.axisMap.get(t);
            if (n) {
                var i = n.get("type");
                e.type = Vo(i)
            }
            return e
        })), i || (i = a && (a.getDimensionsInfo ? a.getDimensionsInfo() : a.dimensions.slice()) || ["x", "y"]);
        var s, l, h = ag(t, {
            coordDimensions: i,
            generateCoord: n.generateCoord
        });
        o && f(h, function (t, e) {
            var n = t.coordDim,
                i = o.categoryAxisMap.get(n);
            i && (null == s && (s = e), t.ordinalMeta = i.getOrdinalMeta()), null != t.otherDims.itemName && (l = !0)
        }), l || null == s || (h[s].otherDims.itemName = 0);
        var u = is(e, h),
            c = new ng(h, e);
        c.setCalculationInfo(u);
        var p = null != s && ss(t) ? function (t, e, n, i) {
            return i === s ? n : this.defaultDimValueGetter(t, e, n, i)
        } : null;
        return c.hasItemOption = !1, c.initData(t, null, p), c
    }

    function ss(t) {
        if (t.sourceFormat === pd) {
            var e = ls(t.data || []);
            return null != e && !y(ln(e))
        }
    }

    function ls(t) {
        for (var e = 0; e < t.length && null == t[e];) e++;
        return t[e]
    }

    function hs(t, e) {
        if ("image" !== this.type) {
            var n = this.style,
                i = this.shape;
            i && "line" === i.symbolType ? n.stroke = t : this.__isEmptyBrush ? (n.stroke = t, n.fill = e || "#fff") : (n.fill && (n.fill = t), n.stroke && (n.stroke = t)), this.dirty(!1)
        }
    }

    function us(t, e, n, i, r, a, o) {
        var s = 0 === t.indexOf("empty");
        s && (t = t.substr(5, 1).toLowerCase() + t.substr(6));
        var l;
        return l = 0 === t.indexOf("image://") ? vi(t.slice(8), new Rt(e, n, i, r), o ? "center" : "cover") : 0 === t.indexOf("path://") ? mi(t.slice(7), {}, new Rt(e, n, i, r), o ? "center" : "cover") : new fg({
            shape: {
                symbolType: t,
                x: e,
                y: n,
                width: i,
                height: r
            }
        }), l.__isEmptyBrush = s, l.setColor = hs, l.setColor(a), l
    }

    function cs(t, e) {
        var n = t.mapDimension("defaultedLabel", !0),
            i = n.length;
        if (1 === i) return _a(t, e, n[0]);
        if (i) {
            for (var r = [], a = 0; a < n.length; a++) {
                var o = _a(t, e, n[a]);
                r.push(o)
            }
            return r.join(" ")
        }
    }

    function fs(t, e, n) {
        du.call(this), this.updateData(t, e, n)
    }

    function ds(t) {
        return [t[0] / 2, t[1] / 2]
    }

    function ps(t, e) {
        this.parent.drift(t, e)
    }

    function gs(t) {
        this.group = new du, this._symbolCtor = t || fs
    }

    function ms(t, e, n, i) {
        return e && !isNaN(e[0]) && !isNaN(e[1]) && !(i.isIgnore && i.isIgnore(n)) && !(i.clipShape && !i.clipShape.contain(e[0], e[1])) && "none" !== t.getItemVisual(n, "symbol")
    }

    function vs(t) {
        return null == t || w(t) || (t = {
            isIgnore: t
        }), t || {}
    }

    function ys(t) {
        var e = t.hostModel;
        return {
            itemStyle: e.getModel("itemStyle").getItemStyle(["color"]),
            hoverItemStyle: e.getModel("emphasis.itemStyle").getItemStyle(),
            symbolRotate: e.get("symbolRotate"),
            symbolOffset: e.get("symbolOffset"),
            hoverAnimation: e.get("hoverAnimation"),
            labelModel: e.getModel("label"),
            hoverLabelModel: e.getModel("emphasis.label"),
            cursorStyle: e.get("cursor")
        }
    }

    function _s(t, e, n) {
        var i, r = t.getBaseAxis(),
            a = t.getOtherAxis(r),
            o = xs(a, n),
            s = r.dim,
            l = a.dim,
            h = e.mapDimension(l),
            u = e.mapDimension(s),
            c = "x" === l || "radius" === l ? 1 : 0,
            f = d(t.dimensions, function (t) {
                return e.mapDimension(t)
            }),
            p = e.getCalculationInfo("stackResultDimension");
        return (i |= rs(e, f[0])) && (f[0] = p), (i |= rs(e, f[1])) && (f[1] = p), {
            dataDimsForPoint: f,
            valueStart: o,
            valueAxisDim: l,
            baseAxisDim: s,
            stacked: !!i,
            valueDim: h,
            baseDim: u,
            baseDataOffset: c,
            stackedOverDimension: e.getCalculationInfo("stackedOverDimension")
        }
    }

    function xs(t, e) {
        var n = 0,
            i = t.scale.getExtent();
        return "start" === e ? n = i[0] : "end" === e ? n = i[1] : i[0] > 0 ? n = i[0] : i[1] < 0 && (n = i[1]), n
    }

    function ws(t, e, n, i) {
        var r = NaN;
        t.stacked && (r = n.get(n.getCalculationInfo("stackedOverDimension"), i)), isNaN(r) && (r = t.valueStart);
        var a = t.baseDataOffset,
            o = [];
        return o[a] = n.get(t.baseDim, i), o[1 - a] = r, e.dataToPoint(o)
    }

    function bs(t, e) {
        var n = [];
        return e.diff(t).add(function (t) {
            n.push({
                cmd: "+",
                idx: t
            })
        }).update(function (t, e) {
            n.push({
                cmd: "=",
                idx: e,
                idx1: t
            })
        }).remove(function (t) {
            n.push({
                cmd: "-",
                idx: t
            })
        }).execute(), n
    }

    function Ms(t) {
        return isNaN(t[0]) || isNaN(t[1])
    }

    function Ss(t, e, n, i, r, a, o, s, l, h, u) {
        return "none" !== h && h ? Is.apply(this, arguments) : Ts.apply(this, arguments)
    }

    function Is(t, e, n, i, r, a, o, s, l, h, u) {
        for (var c = 0, f = n, d = 0; d < i; d++) {
            var p = e[f];
            if (f >= r || f < 0) break;
            if (Ms(p)) {
                if (u) {
                    f += a;
                    continue
                }
                break
            }
            if (f === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]);
            else if (l > 0) {
                var g = e[c],
                    m = "y" === h ? 1 : 0,
                    v = (p[m] - g[m]) * l;
                Sg(Tg, g), Tg[m] = g[m] + v, Sg(Cg, p), Cg[m] = p[m] - v, t.bezierCurveTo(Tg[0], Tg[1], Cg[0], Cg[1], p[0], p[1])
            } else t.lineTo(p[0], p[1]);
            c = f, f += a
        }
        return d
    }

    function Ts(t, e, n, i, r, a, o, s, l, h, u) {
        for (var c = 0, f = n, d = 0; d < i; d++) {
            var p = e[f];
            if (f >= r || f < 0) break;
            if (Ms(p)) {
                if (u) {
                    f += a;
                    continue
                }
                break
            }
            if (f === n) t[a > 0 ? "moveTo" : "lineTo"](p[0], p[1]), Sg(Tg, p);
            else if (l > 0) {
                var g = f + a,
                    m = e[g];
                if (u)
                    for (; m && Ms(e[g]);) m = e[g += a];
                var v = .5,
                    y = e[c];
                if (!(m = e[g]) || Ms(m)) Sg(Cg, p);
                else {
                    Ms(m) && !u && (m = p), W(Ig, m, y);
                    var _, x;
                    if ("x" === h || "y" === h) {
                        var w = "x" === h ? 0 : 1;
                        _ = Math.abs(p[w] - y[w]), x = Math.abs(p[w] - m[w])
                    } else _ = Eh(p, y), x = Eh(p, m);
                    Mg(Cg, p, Ig, -l * (1 - (v = x / (x + _))))
                }
                wg(Tg, Tg, s), bg(Tg, Tg, o), wg(Cg, Cg, s), bg(Cg, Cg, o), t.bezierCurveTo(Tg[0], Tg[1], Cg[0], Cg[1], p[0], p[1]), Mg(Tg, p, Ig, l * v)
            } else t.lineTo(p[0], p[1]);
            c = f, f += a
        }
        return d
    }

    function Cs(t, e) {
        var n = [1 / 0, 1 / 0],
            i = [-1 / 0, -1 / 0];
        if (e)
            for (var r = 0; r < t.length; r++) {
                var a = t[r];
                a[0] < n[0] && (n[0] = a[0]), a[1] < n[1] && (n[1] = a[1]), a[0] > i[0] && (i[0] = a[0]), a[1] > i[1] && (i[1] = a[1])
            }
        return {
            min: e ? n : i,
            max: e ? i : n
        }
    }

    function Ds(t, e) {
        if (t.length === e.length) {
            for (var n = 0; n < t.length; n++) {
                var i = t[n],
                    r = e[n];
                if (i[0] !== r[0] || i[1] !== r[1]) return
            }
            return !0
        }
    }

    function ks(t) {
        return "number" == typeof t ? t : t ? .5 : 0
    }

    function As(t) {
        var e = t.getGlobalExtent();
        if (t.onBand) {
            var n = t.getBandWidth() / 2 - 1,
                i = e[1] > e[0] ? 1 : -1;
            e[0] += i * n, e[1] -= i * n
        }
        return e
    }

    function Ls(t, e, n) {
        if (!n.valueDim) return [];
        for (var i = [], r = 0, a = e.count(); r < a; r++) i.push(ws(n, t, e, r));
        return i
    }

    function Ps(t, e, n, i) {
        var r = As(t.getAxis("x")),
            a = As(t.getAxis("y")),
            o = t.getBaseAxis().isHorizontal(),
            s = Math.min(r[0], r[1]),
            l = Math.min(a[0], a[1]),
            h = Math.max(r[0], r[1]) - s,
            u = Math.max(a[0], a[1]) - l;
        if (n) s -= .5, h += .5, l -= .5, u += .5;
        else {
            var c = i.get("lineStyle.width") || 2,
                f = i.get("clipOverflow") ? c / 2 : Math.max(h, u);
            o ? (l -= f, u += 2 * f) : (s -= f, h += 2 * f)
        }
        var d = new Cf({
            shape: {
                x: s,
                y: l,
                width: h,
                height: u
            }
        });
        return e && (d.shape[o ? "width" : "height"] = 0, Ui(d, {
            shape: {
                width: h,
                height: u
            }
        }, i)), d
    }

    function Os(t, e, n, i) {
        var r = t.getAngleAxis(),
            a = t.getRadiusAxis().getExtent().slice();
        a[0] > a[1] && a.reverse();
        var o = r.getExtent(),
            s = Math.PI / 180;
        n && (a[0] -= .5, a[1] += .5);
        var l = new wf({
            shape: {
                cx: nr(t.cx, 1),
                cy: nr(t.cy, 1),
                r0: nr(a[0], 1),
                r: nr(a[1], 1),
                startAngle: -o[0] * s,
                endAngle: -o[1] * s,
                clockwise: r.inverse
            }
        });
        return e && (l.shape.endAngle = -o[0] * s, Ui(l, {
            shape: {
                endAngle: -o[1] * s
            }
        }, i)), l
    }

    function Es(t, e, n, i) {
        return "polar" === t.type ? Os(t, e, n, i) : Ps(t, e, n, i)
    }

    function Ns(t, e, n) {
        for (var i = e.getBaseAxis(), r = "x" === i.dim || "radius" === i.dim ? 0 : 1, a = [], o = 0; o < t.length - 1; o++) {
            var s = t[o + 1],
                l = t[o];
            a.push(l);
            var h = [];
            switch (n) {
                case "end":
                    h[r] = s[r], h[1 - r] = l[1 - r], a.push(h);
                    break;
                case "middle":
                    var u = (l[r] + s[r]) / 2,
                        c = [];
                    h[r] = c[r] = u, h[1 - r] = l[1 - r], c[1 - r] = s[1 - r], a.push(h), a.push(c);
                    break;
                default:
                    h[r] = l[r], h[1 - r] = s[1 - r], a.push(h)
            }
        }
        return t[o] && a.push(t[o]), a
    }

    function Rs(t, e) {
        var n = t.getVisual("visualMeta");
        if (n && n.length && t.count() && "cartesian2d" === e.type) {
            for (var i, r, a = n.length - 1; a >= 0; a--) {
                var o = n[a].dimension,
                    s = t.dimensions[o],
                    l = t.getDimensionInfo(s);
                if ("x" === (i = l && l.coordDim) || "y" === i) {
                    r = n[a];
                    break
                }
            }
            if (r) {
                var h = e.getAxis(i),
                    u = d(r.stops, function (t) {
                        return {
                            coord: h.toGlobalCoord(h.dataToCoord(t.value)),
                            color: t.color
                        }
                    }),
                    c = u.length,
                    p = r.outerColors.slice();
                c && u[0].coord > u[c - 1].coord && (u.reverse(), p.reverse());
                var g = u[0].coord - 10,
                    m = u[c - 1].coord + 10,
                    v = m - g;
                if (v < .001) return "transparent";
                f(u, function (t) {
                    t.offset = (t.coord - g) / v
                }), u.push({
                    offset: c ? u[c - 1].offset : .5,
                    color: p[1] || "transparent"
                }), u.unshift({
                    offset: c ? u[0].offset : .5,
                    color: p[0] || "transparent"
                });
                var y = new Ef(0, 0, 0, 0, u, !0);
                return y[i] = g, y[i + "2"] = m, y
            }
        }
    }

    function Bs(t, e, n) {
        var i = t.get("showAllSymbol"),
            r = "auto" === i;
        if (!i || r) {
            var a = n.getAxesByScale("ordinal")[0];
            if (a && (!r || !zs(a, e))) {
                var o = e.mapDimension(a.dim),
                    s = {};
                return f(a.getViewLabels(), function (t) {
                        s[t.tickValue] = 1
                    }),
                    function (t) {
                        return !s.hasOwnProperty(e.get(o, t))
                    }
            }
        }
    }

    function zs(t, e) {
        var n = t.getExtent(),
            i = Math.abs(n[1] - n[0]) / t.scale.count();
        isNaN(i) && (i = 0);
        for (var r = e.count(), a = Math.max(1, Math.round(r / 5)), o = 0; o < r; o += a)
            if (1.5 * fs.getSymbolSize(e, o)[t.isHorizontal() ? 1 : 0] > i) return !1;
        return !0
    }

    function Fs(t) {
        this._setting = t || {}, this._extent = [1 / 0, -1 / 0], this._interval = 0, this.init && this.init.apply(this, arguments)
    }

    function Vs(t) {
        this.categories = t.categories || [], this._needCollect = t.needCollect, this._deduplication = t.deduplication, this._map
    }

    function Ws(t) {
        return t._map || (t._map = R(t.categories))
    }

    function Hs(t) {
        return w(t) && null != t.value ? t.value : t + ""
    }

    function Gs(t, e, n, i) {
        var r = {},
            a = t[1] - t[0],
            o = r.interval = cr(a / e, !0);
        null != n && o < n && (o = r.interval = n), null != i && o > i && (o = r.interval = i);
        var s = r.intervalPrecision = qs(o);
        return Us(r.niceTickExtent = [Ng(Math.ceil(t[0] / o) * o, s), Ng(Math.floor(t[1] / o) * o, s)], t), r
    }

    function qs(t) {
        return ir(t) + 2
    }

    function Xs(t, e, n) {
        t[e] = Math.max(Math.min(t[e], n[1]), n[0])
    }

    function Us(t, e) {
        !isFinite(t[0]) && (t[0] = e[0]), !isFinite(t[1]) && (t[1] = e[1]), Xs(t, 0, e), Xs(t, 1, e), t[0] > t[1] && (t[0] = t[1])
    }

    function Ys(t, e, n, i) {
        var r = [];
        if (!t) return r;
        e[0] < n[0] && r.push(e[0]);
        for (var a = n[0]; a <= n[1] && (r.push(a), (a = Ng(a + t, i)) !== r[r.length - 1]);)
            if (r.length > 1e4) return [];
        return e[1] > (r.length ? r[r.length - 1] : n[1]) && r.push(e[1]), r
    }

    function js(t) {
        return t.get("stack") || zg + t.seriesIndex
    }

    function Zs(t) {
        return t.dim + t.index
    }

    function $s(t, e) {
        var n = [];
        return e.eachSeriesByType(t, function (t) {
            tl(t) && !el(t) && n.push(t)
        }), n
    }

    function Ks(t) {
        var e = [];
        return f(t, function (t) {
            var n = t.getData(),
                i = t.coordinateSystem.getBaseAxis(),
                r = i.getExtent(),
                a = "category" === i.type ? i.getBandWidth() : Math.abs(r[1] - r[0]) / n.count(),
                o = er(t.get("barWidth"), a),
                s = er(t.get("barMaxWidth"), a),
                l = t.get("barGap"),
                h = t.get("barCategoryGap");
            e.push({
                bandWidth: a,
                barWidth: o,
                barMaxWidth: s,
                barGap: l,
                barCategoryGap: h,
                axisKey: Zs(i),
                stackId: js(t)
            })
        }), Qs(e)
    }

    function Qs(t) {
        var e = {};
        f(t, function (t, n) {
            var i = t.axisKey,
                r = t.bandWidth,
                a = e[i] || {
                    bandWidth: r,
                    remainedWidth: r,
                    autoWidthCount: 0,
                    categoryGap: "20%",
                    gap: "30%",
                    stacks: {}
                },
                o = a.stacks;
            e[i] = a;
            var s = t.stackId;
            o[s] || a.autoWidthCount++, o[s] = o[s] || {
                width: 0,
                maxWidth: 0
            };
            var l = t.barWidth;
            l && !o[s].width && (o[s].width = l, l = Math.min(a.remainedWidth, l), a.remainedWidth -= l);
            var h = t.barMaxWidth;
            h && (o[s].maxWidth = h);
            var u = t.barGap;
            null != u && (a.gap = u);
            var c = t.barCategoryGap;
            null != c && (a.categoryGap = c)
        });
        var n = {};
        return f(e, function (t, e) {
            n[e] = {};
            var i = t.stacks,
                r = t.bandWidth,
                a = er(t.categoryGap, r),
                o = er(t.gap, 1),
                s = t.remainedWidth,
                l = t.autoWidthCount,
                h = (s - a) / (l + (l - 1) * o);
            h = Math.max(h, 0), f(i, function (t, e) {
                var n = t.maxWidth;
                n && n < h && (n = Math.min(n, s), t.width && (n = Math.min(n, t.width)), s -= n, t.width = n, l--)
            }), h = (s - a) / (l + (l - 1) * o), h = Math.max(h, 0);
            var u, c = 0;
            f(i, function (t, e) {
                t.width || (t.width = h), u = t, c += t.width * (1 + o)
            }), u && (c -= u.width * o);
            var d = -c / 2;
            f(i, function (t, i) {
                n[e][i] = n[e][i] || {
                    offset: d,
                    width: t.width
                }, d += t.width * (1 + o)
            })
        }), n
    }

    function Js(t, e, n) {
        if (t && e) {
            var i = t[Zs(e)];
            return null != i && null != n && (i = i[js(n)]), i
        }
    }

    function tl(t) {
        return t.coordinateSystem && "cartesian2d" === t.coordinateSystem.type
    }

    function el(t) {
        return t.pipelineContext && t.pipelineContext.large
    }

    function nl(t, e, n) {
        return l(t.getAxesOnZeroOf(), e) >= 0 || n ? e.toGlobalCoord(e.dataToCoord(0)) : e.getGlobalExtent()[0]
    }

    function il(t, e) {
        return $g(t, Zg(e))
    }

    function rl(t, e) {
        var n, i, r, a = t.type,
            o = e.getMin(),
            s = e.getMax(),
            l = null != o,
            h = null != s,
            u = t.getExtent();
        "ordinal" === a ? n = e.getCategories().length : (y(i = e.get("boundaryGap")) || (i = [i || 0, i || 0]), "boolean" == typeof i[0] && (i = [0, 0]), i[0] = er(i[0], 1), i[1] = er(i[1], 1), r = u[1] - u[0] || Math.abs(u[0])), null == o && (o = "ordinal" === a ? n ? 0 : NaN : u[0] - i[0] * r), null == s && (s = "ordinal" === a ? n ? n - 1 : NaN : u[1] + i[1] * r), "dataMin" === o ? o = u[0] : "function" == typeof o && (o = o({
            min: u[0],
            max: u[1]
        })), "dataMax" === s ? s = u[1] : "function" == typeof s && (s = s({
            min: u[0],
            max: u[1]
        })), (null == o || !isFinite(o)) && (o = NaN), (null == s || !isFinite(s)) && (s = NaN), t.setBlank(I(o) || I(s) || "ordinal" === a && !t.getOrdinalMeta().categories.length), e.getNeedCrossZero() && (o > 0 && s > 0 && !l && (o = 0), o < 0 && s < 0 && !h && (s = 0));
        var c = e.ecModel;
        if (c && "time" === a) {
            var d, p = $s("bar", c);
            if (f(p, function (t) {
                    d |= t.getBaseAxis() === e.axis
                }), d) {
                var g = Ks(p),
                    m = al(o, s, e, g);
                o = m.min, s = m.max
            }
        }
        return [o, s]
    }

    function al(t, e, n, i) {
        var r = n.axis.getExtent(),
            a = r[1] - r[0],
            o = Js(i, n.axis);
        if (void 0 === o) return {
            min: t,
            max: e
        };
        var s = 1 / 0;
        f(o, function (t) {
            s = Math.min(t.offset, s)
        });
        var l = -1 / 0;
        f(o, function (t) {
            l = Math.max(t.offset + t.width, l)
        }), s = Math.abs(s), l = Math.abs(l);
        var h = s + l,
            u = e - t,
            c = u / (1 - (s + l) / a) - u;
        return e += c * (l / h), t -= c * (s / h), {
            min: t,
            max: e
        }
    }

    function ol(t, e) {
        var n = rl(t, e),
            i = null != e.getMin(),
            r = null != e.getMax(),
            a = e.get("splitNumber");
        "log" === t.type && (t.base = e.get("logBase"));
        var o = t.type;
        t.setExtent(n[0], n[1]), t.niceExtent({
            splitNumber: a,
            fixMin: i,
            fixMax: r,
            minInterval: "interval" === o || "time" === o ? e.get("minInterval") : null,
            maxInterval: "interval" === o || "time" === o ? e.get("maxInterval") : null
        });
        var s = e.get("interval");
        null != s && t.setInterval && t.setInterval(s)
    }

    function sl(t, e) {
        if (e = e || t.get("type")) switch (e) {
            case "category":
                return new Eg(t.getOrdinalMeta ? t.getOrdinalMeta() : t.getCategories(), [1 / 0, -1 / 0]);
            case "value":
                return new Bg;
            default:
                return (Fs.getClass(e) || Bg).create(t)
        }
    }

    function ll(t) {
        var e = t.scale.getExtent(),
            n = e[0],
            i = e[1];
        return !(n > 0 && i > 0 || n < 0 && i < 0)
    }

    function hl(t) {
        var e = t.getLabelModel().get("formatter"),
            n = "category" === t.type ? t.scale.getExtent()[0] : null;
        return "string" == typeof e ? e = function (t) {
            return function (e) {
                return t.replace("{value}", null != e ? e : "")
            }
        }(e) : "function" == typeof e ? function (i, r) {
            return null != n && (r = i - n), e(ul(t, i), r)
        } : function (e) {
            return t.scale.getLabel(e)
        }
    }

    function ul(t, e) {
        return "category" === t.type ? t.scale.getLabel(e) : e
    }

    function cl(t) {
        var e = t.model,
            n = t.scale;
        if (e.get("axisLabel.show") && !n.isBlank()) {
            var i, r, a = "category" === t.type,
                o = n.getExtent();
            r = a ? n.count() : (i = n.getTicks()).length;
            var s, l = t.getLabelModel(),
                h = hl(t),
                u = 1;
            r > 40 && (u = Math.ceil(r / 40));
            for (var c = 0; c < r; c += u) {
                var f = h(i ? i[c] : o[0] + c),
                    d = fl(l.getTextRect(f), l.get("rotate") || 0);
                s ? s.union(d) : s = d
            }
            return s
        }
    }

    function fl(t, e) {
        var n = e * Math.PI / 180,
            i = t.plain(),
            r = i.width,
            a = i.height,
            o = r * Math.cos(n) + a * Math.sin(n),
            s = r * Math.sin(n) + a * Math.cos(n);
        return new Rt(i.x, i.y, o, s)
    }

    function dl(t) {
        return this._axes[t]
    }

    function pl(t) {
        nm.call(this, t)
    }

    function gl(t) {
        return "category" === t.type ? vl(t) : xl(t)
    }

    function ml(t, e) {
        return "category" === t.type ? _l(t, e) : {
            ticks: t.scale.getTicks()
        }
    }

    function vl(t) {
        var e = t.getLabelModel(),
            n = yl(t, e);
        return !e.get("show") || t.scale.isBlank() ? {
            labels: [],
            labelCategoryInterval: n.labelCategoryInterval
        } : n
    }

    function yl(t, e) {
        var n = wl(t, "labels"),
            i = kl(e),
            r = bl(n, i);
        if (r) return r;
        var a, o;
        return a = _(i) ? Dl(t, i) : Cl(t, o = "auto" === i ? Sl(t) : i), Ml(n, i, {
            labels: a,
            labelCategoryInterval: o
        })
    }

    function _l(t, e) {
        var n = wl(t, "ticks"),
            i = kl(e),
            r = bl(n, i);
        if (r) return r;
        var a, o;
        if (e.get("show") && !t.scale.isBlank() || (a = []), _(i)) a = Dl(t, i, !0);
        else if ("auto" === i) {
            var s = yl(t, t.getLabelModel());
            o = s.labelCategoryInterval, a = d(s.labels, function (t) {
                return t.tickValue
            })
        } else a = Cl(t, o = i, !0);
        return Ml(n, i, {
            ticks: a,
            tickCategoryInterval: o
        })
    }

    function xl(t) {
        var e = t.scale.getTicks(),
            n = hl(t);
        return {
            labels: d(e, function (e, i) {
                return {
                    formattedLabel: n(e, i),
                    rawLabel: t.scale.getLabel(e),
                    tickValue: e
                }
            })
        }
    }

    function wl(t, e) {
        return im(t)[e] || (im(t)[e] = [])
    }

    function bl(t, e) {
        for (var n = 0; n < t.length; n++)
            if (t[n].key === e) return t[n].value
    }

    function Ml(t, e, n) {
        return t.push({
            key: e,
            value: n
        }), n
    }

    function Sl(t) {
        var e = im(t).autoInterval;
        return null != e ? e : im(t).autoInterval = t.calculateCategoryInterval()
    }

    function Il(t) {
        var e = Tl(t),
            n = hl(t),
            i = (e.axisRotate - e.labelRotate) / 180 * Math.PI,
            r = t.scale,
            a = r.getExtent(),
            o = r.count();
        if (a[1] - a[0] < 1) return 0;
        var s = 1;
        o > 40 && (s = Math.max(1, Math.floor(o / 40)));
        for (var l = a[0], h = t.dataToCoord(l + 1) - t.dataToCoord(l), u = Math.abs(h * Math.cos(i)), c = Math.abs(h * Math.sin(i)), f = 0, d = 0; l <= a[1]; l += s) {
            var p = 0,
                g = 0,
                m = ee(n(l), e.font, "center", "top");
            p = 1.3 * m.width, g = 1.3 * m.height, f = Math.max(f, p, 7), d = Math.max(d, g, 7)
        }
        var v = f / u,
            y = d / c;
        isNaN(v) && (v = 1 / 0), isNaN(y) && (y = 1 / 0);
        var _ = Math.max(0, Math.floor(Math.min(v, y))),
            x = im(t.model),
            w = x.lastAutoInterval,
            b = x.lastTickCount;
        return null != w && null != b && Math.abs(w - _) <= 1 && Math.abs(b - o) <= 1 && w > _ ? _ = w : (x.lastTickCount = o, x.lastAutoInterval = _), _
    }

    function Tl(t) {
        var e = t.getLabelModel();
        return {
            axisRotate: t.getRotate ? t.getRotate() : t.isHorizontal && !t.isHorizontal() ? 90 : 0,
            labelRotate: e.get("rotate") || 0,
            font: e.getFont()
        }
    }

    function Cl(t, e, n) {
        function i(t) {
            l.push(n ? t : {
                formattedLabel: r(t),
                rawLabel: a.getLabel(t),
                tickValue: t
            })
        }
        var r = hl(t),
            a = t.scale,
            o = a.getExtent(),
            s = t.getLabelModel(),
            l = [],
            h = Math.max((e || 0) + 1, 1),
            u = o[0],
            c = a.count();
        0 !== u && h > 1 && c / h > 2 && (u = Math.round(Math.ceil(u / h) * h));
        var f = {
            min: s.get("showMinLabel"),
            max: s.get("showMaxLabel")
        };
        f.min && u !== o[0] && i(o[0]);
        for (var d = u; d <= o[1]; d += h) i(d);
        return f.max && d !== o[1] && i(o[1]), l
    }

    function Dl(t, e, n) {
        var i = t.scale,
            r = hl(t),
            a = [];
        return f(i.getTicks(), function (t) {
            var o = i.getLabel(t);
            e(t, o) && a.push(n ? t : {
                formattedLabel: r(t),
                rawLabel: o,
                tickValue: t
            })
        }), a
    }

    function kl(t) {
        var e = t.get("interval");
        return null == e ? "auto" : e
    }

    function Al(t, e) {
        var n = (t[1] - t[0]) / e / 2;
        t[0] += n, t[1] -= n
    }

    function Ll(t, e, n, i, r) {
        function a(t, e) {
            return u ? t > e : t < e
        }
        var o = e.length;
        if (t.onBand && !i && o) {
            var s, l = t.getExtent();
            if (1 === o) e[0].coord = l[0], s = e[1] = {
                coord: l[0]
            };
            else {
                var h = e[1].coord - e[0].coord;
                f(e, function (t) {
                    t.coord -= h / 2;
                    var e = e || 0;
                    e % 2 > 0 && (t.coord -= h / (2 * (e + 1)))
                }), s = {
                    coord: e[o - 1].coord + h
                }, e.push(s)
            }
            var u = l[0] > l[1];
            a(e[0].coord, l[0]) && (r ? e[0].coord = l[0] : e.shift()), r && a(l[0], e[0].coord) && e.unshift({
                coord: l[0]
            }), a(l[1], s.coord) && (r ? s.coord = l[1] : e.pop()), r && a(s.coord, l[1]) && e.push({
                coord: l[1]
            })
        }
    }

    function Pl(t, e) {
        return e.type || (e.data ? "category" : "value")
    }

    function Ol(t, e, n) {
        return t.getCoordSysModel() === e
    }

    function El(t, e, n) {
        this._coordsMap = {}, this._coordsList = [], this._axesMap = {}, this._axesList = [], this._initCartesian(t, e, n), this.model = t
    }

    function Nl(t, e, n) {
        n.getAxesOnZeroOf = function () {
            return i ? [i] : []
        };
        var i, r = t[e],
            a = n.model,
            o = a.get("axisLine.onZero"),
            s = a.get("axisLine.onZeroAxisIndex");
        if (o)
            if (null == s) {
                for (var l in r)
                    if (r.hasOwnProperty(l) && Rl(r[l])) {
                        i = r[l];
                        break
                    }
            } else Rl(r[s]) && (i = r[s])
    }

    function Rl(t) {
        return t && "category" !== t.type && "time" !== t.type && ll(t)
    }

    function Bl(t, e) {
        var n = t.getExtent(),
            i = n[0] + n[1];
        t.toGlobalCoord = "x" === t.dim ? function (t) {
            return t + e
        } : function (t) {
            return i - t + e
        }, t.toLocalCoord = "x" === t.dim ? function (t) {
            return t - e
        } : function (t) {
            return i - t + e
        }
    }

    function zl(t, e) {
        return d(gm, function (e) {
            return t.getReferringComponents(e)[0]
        })
    }

    function Fl(t) {
        return "cartesian2d" === t.get("coordinateSystem")
    }

    function Vl(t) {
        var e = {
            componentType: t.mainType
        };
        return e[t.mainType + "Index"] = t.componentIndex, e
    }

    function Wl(t, e, n, i) {
        var r, a, o = or(n - t.rotation),
            s = i[0] > i[1],
            l = "start" === e && !s || "start" !== e && s;
        return sr(o - mm / 2) ? (a = l ? "bottom" : "top", r = "center") : sr(o - 1.5 * mm) ? (a = l ? "top" : "bottom", r = "center") : (a = "middle", r = o < 1.5 * mm && o > mm / 2 ? l ? "left" : "right" : l ? "right" : "left"), {
            rotation: o,
            textAlign: r,
            textVerticalAlign: a
        }
    }

    function Hl(t) {
        var e = t.get("tooltip");
        return t.get("silent") || !(t.get("triggerEvent") || e && e.show)
    }

    function Gl(t, e, n) {
        var i = t.get("axisLabel.showMinLabel"),
            r = t.get("axisLabel.showMaxLabel");
        e = e || [], n = n || [];
        var a = e[0],
            o = e[1],
            s = e[e.length - 1],
            l = e[e.length - 2],
            h = n[0],
            u = n[1],
            c = n[n.length - 1],
            f = n[n.length - 2];
        !1 === i ? (ql(a), ql(h)) : Xl(a, o) && (i ? (ql(o), ql(u)) : (ql(a), ql(h))), !1 === r ? (ql(s), ql(c)) : Xl(l, s) && (r ? (ql(l), ql(f)) : (ql(s), ql(c)))
    }

    function ql(t) {
        t && (t.ignore = !0)
    }

    function Xl(t, e, n) {
        var i = t && t.getBoundingRect().clone(),
            r = e && e.getBoundingRect().clone();
        if (i && r) {
            var a = nt([]);
            return ot(a, a, -t.rotation), i.applyTransform(rt([], a, t.getLocalTransform())), r.applyTransform(rt([], a, e.getLocalTransform())), i.intersect(r)
        }
    }

    function Ul(t) {
        return "middle" === t || "center" === t
    }

    function Yl(t, e, n) {
        var i = e.axis;
        if (e.get("axisTick.show") && !i.scale.isBlank()) {
            for (var r = e.getModel("axisTick"), a = r.getModel("lineStyle"), s = r.get("length"), l = i.getTicksCoords(), h = [], u = [], c = t._transform, f = [], d = 0; d < l.length; d++) {
                var p = l[d].coord;
                h[0] = p, h[1] = 0, u[0] = p, u[1] = n.tickDirection * s, c && (Y(h, h, c), Y(u, u, c));
                var g = new Df(xi({
                    anid: "tick_" + l[d].tickValue,
                    shape: {
                        x1: h[0],
                        y1: h[1],
                        x2: u[0],
                        y2: u[1]
                    },
                    style: o(a.getLineStyle(), {
                        stroke: e.get("axisLine.lineStyle.color")
                    }),
                    z2: 2,
                    silent: !0
                }));
                t.group.add(g), f.push(g)
            }
            return f
        }
    }

    function jl(t, e, n) {
        var i = e.axis;
        if (T(n.axisLabelShow, e.get("axisLabel.show")) && !i.scale.isBlank()) {
            var r = e.getModel("axisLabel"),
                a = r.get("margin"),
                o = i.getViewLabels(),
                s = (T(n.labelRotate, r.get("rotate")) || 0) * mm / 180,
                l = _m(n.rotation, s, n.labelDirection),
                h = e.getCategories(!0),
                u = [],
                c = Hl(e),
                d = e.get("triggerEvent");
            return f(o, function (o, s) {
                var f = o.tickValue,
                    p = o.formattedLabel,
                    g = o.rawLabel,
                    m = r;
                h && h[f] && h[f].textStyle && (m = new Zi(h[f].textStyle, r, e.ecModel));
                var v = m.getTextColor() || e.get("axisLine.lineStyle.color"),
                    y = [i.dataToCoord(f), n.labelOffset + n.labelDirection * a],
                    _ = new vf({
                        anid: "label_" + f,
                        position: y,
                        rotation: l.rotation,
                        silent: c,
                        z2: 10
                    });
                Ri(_.style, m, {
                    text: p,
                    textAlign: m.getShallow("align", !0) || l.textAlign,
                    textVerticalAlign: m.getShallow("verticalAlign", !0) || m.getShallow("baseline", !0) || l.textVerticalAlign,
                    textFill: "function" == typeof v ? v("category" === i.type ? g : "value" === i.type ? f + "" : f, s) : v
                }), d && (_.eventData = Vl(e), _.eventData.targetType = "axisLabel", _.eventData.value = g), t._dumbGroup.add(_), _.updateTransform(), u.push(_), t.group.add(_), _.decomposeTransform()
            }), u
        }
    }

    function Zl(t) {
        var e = $l(t);
        if (e) {
            var n = e.axisPointerModel,
                i = e.axis.scale,
                r = n.option,
                a = n.get("status"),
                o = n.get("value");
            null != o && (o = i.parse(o));
            var s = Ql(n);
            null == a && (r.status = s ? "show" : "hide");
            var l = i.getExtent().slice();
            l[0] > l[1] && l.reverse(), (null == o || o > l[1]) && (o = l[1]), o < l[0] && (o = l[0]), r.value = o, s && (r.status = e.axis.scale.isBlank() ? "hide" : "show")
        }
    }

    function $l(t) {
        var e = (t.ecModel.getComponent("axisPointer") || {}).coordSysAxesInfo;
        return e && e.axesInfo[Jl(t)]
    }

    function Kl(t) {
        var e = $l(t);
        return e && e.axisPointerModel
    }

    function Ql(t) {
        return !!t.get("handle.show")
    }

    function Jl(t) {
        return t.type + "||" + t.id
    }

    function th(t, e, n, i, r, a) {
        var o = xm.getAxisPointerClass(t.axisPointerClass);
        if (o) {
            var s = Kl(e);
            s ? (t._axisPointer || (t._axisPointer = new o)).render(e, s, i, a) : eh(t, i)
        }
    }

    function eh(t, e, n) {
        var i = t._axisPointer;
        i && i.dispose(e, n), t._axisPointer = null
    }

    function nh(t, e, n) {
        n = n || {};
        var i = t.coordinateSystem,
            r = e.axis,
            a = {},
            o = r.getAxesOnZeroOf()[0],
            s = r.position,
            l = o ? "onZero" : s,
            h = r.dim,
            u = i.getRect(),
            c = [u.x, u.x + u.width, u.y, u.y + u.height],
            f = {
                left: 0,
                right: 1,
                top: 0,
                bottom: 1,
                onZero: 2
            },
            d = e.get("offset") || 0,
            p = "x" === h ? [c[2] - d, c[3] + d] : [c[0] - d, c[1] + d];
        if (o) {
            var g = o.toGlobalCoord(o.dataToCoord(0));
            p[f.onZero] = Math.max(Math.min(g, p[1]), p[0])
        }
        a.position = ["y" === h ? p[f[l]] : c[0], "x" === h ? p[f[l]] : c[3]], a.rotation = Math.PI / 2 * ("x" === h ? 0 : 1);
        var m = {
            top: -1,
            bottom: 1,
            left: -1,
            right: 1
        };
        a.labelDirection = a.tickDirection = a.nameDirection = m[s], a.labelOffset = o ? p[f[s]] - p[f.onZero] : 0, e.get("axisTick.inside") && (a.tickDirection = -a.tickDirection), T(n.labelInside, e.get("axisLabel.inside")) && (a.labelDirection = -a.labelDirection);
        var v = e.get("axisLabel.rotate");
        return a.labelRotate = "top" === l ? -v : v, a.z2 = 1, a
    }

    function ih(t, e, n, i, r, a, o) {
        Ni(t, e, n.getModel("label"), n.getModel("emphasis.label"), {
            labelFetcher: r,
            labelDataIndex: a,
            defaultText: cs(r.getData(), a),
            isRectText: !0,
            autoColor: i
        }), rh(t), rh(e)
    }

    function rh(t, e) {
        "outside" === t.textPosition && (t.textPosition = e)
    }

    function ah(t, e, n) {
        n.style.text = null, Xi(n, {
            shape: {
                width: 0
            }
        }, e, t, function () {
            n.parent && n.parent.remove(n)
        })
    }

    function oh(t, e, n) {
        n.style.text = null, Xi(n, {
            shape: {
                r: n.shape.r0
            }
        }, e, t, function () {
            n.parent && n.parent.remove(n)
        })
    }

    function sh(t, e, n, i, r, a, s, l) {
        var h = e.getItemVisual(n, "color"),
            u = e.getItemVisual(n, "opacity"),
            c = i.getModel("itemStyle"),
            f = i.getModel("emphasis.itemStyle").getBarItemStyle();
        l || t.setShape("r", c.get("barBorderRadius") || 0), t.useStyle(o({
            fill: h,
            opacity: u
        }, c.getBarItemStyle()));
        var d = i.getShallow("cursor");
        d && t.attr("cursor", d);
        var p = s ? r.height > 0 ? "bottom" : "top" : r.width > 0 ? "left" : "right";
        l || ih(t.style, f, i, h, a, n, p), Ei(t, f)
    }

    function lh(t, e) {
        var n = t.get(Cm) || 0;
        return Math.min(n, Math.abs(e.width), Math.abs(e.height))
    }

    function hh(t, e, n) {
        var i = t.getData(),
            r = [],
            a = i.getLayout("valueAxisHorizontal") ? 1 : 0;
        r[1 - a] = i.getLayout("valueAxisStart");
        var o = new Am({
            shape: {
                points: i.getLayout("largePoints")
            },
            incremental: !!n,
            __startPoint: r,
            __valueIdx: a
        });
        e.add(o), uh(o, t, i)
    }

    function uh(t, e, n) {
        var i = n.getVisual("borderColor") || n.getVisual("color"),
            r = e.getModel("itemStyle").getItemStyle(["color", "borderColor"]);
        t.useStyle(r), t.style.fill = null, t.style.stroke = i, t.style.lineWidth = n.getLayout("barWidth")
    }

    function ch(t, e, n, i) {
        var r = e.getData(),
            a = this.dataIndex,
            o = r.getName(a),
            s = e.get("selectedOffset");
        i.dispatchAction({
            type: "pieToggleSelect",
            from: t,
            name: o,
            seriesId: e.id
        }), r.each(function (t) {
            fh(r.getItemGraphicEl(t), r.getItemLayout(t), e.isSelected(r.getName(t)), s, n)
        })
    }

    function fh(t, e, n, i, r) {
        var a = (e.startAngle + e.endAngle) / 2,
            o = Math.cos(a),
            s = Math.sin(a),
            l = n ? i : 0,
            h = [o * l, s * l];
        r ? t.animate().when(200, {
            position: h
        }).start("bounceOut") : t.attr("position", h)
    }

    function dh(t, e) {
        function n() {
            a.ignore = a.hoverIgnore, o.ignore = o.hoverIgnore
        }

        function i() {
            a.ignore = a.normalIgnore, o.ignore = o.normalIgnore
        }
        du.call(this);
        var r = new wf({
                z2: 2
            }),
            a = new Tf,
            o = new vf;
        this.add(r), this.add(a), this.add(o), this.updateData(t, e, !0), this.on("emphasis", n).on("normal", i).on("mouseover", n).on("mouseout", i)
    }

    function ph(t, e, n, i, r, a, o) {
        function s(e, n) {
            for (var i = e; i >= 0 && (t[i].y -= n, !(i > 0 && t[i].y > t[i - 1].y + t[i - 1].height)); i--);
        }

        function l(t, e, n, i, r, a) {
            for (var o = e ? Number.MAX_VALUE : 0, s = 0, l = t.length; s < l; s++)
                if ("center" !== t[s].position) {
                    var h = Math.abs(t[s].y - i),
                        u = t[s].len,
                        c = t[s].len2,
                        f = h < r + u ? Math.sqrt((r + u + c) * (r + u + c) - h * h) : Math.abs(t[s].x - n);
                    e && f >= o && (f = o - 10), !e && f <= o && (f = o + 10), t[s].x = n + f * a, o = f
                }
        }
        t.sort(function (t, e) {
            return t.y - e.y
        });
        for (var h, u = 0, c = t.length, f = [], d = [], p = 0; p < c; p++)(h = t[p].y - u) < 0 && function (e, n, i, r) {
            for (var a = e; a < n; a++)
                if (t[a].y += i, a > e && a + 1 < n && t[a + 1].y > t[a].y + t[a].height) return void s(a, i / 2);
            s(n - 1, i / 2)
        }(p, c, -h), u = t[p].y + t[p].height;
        o - u < 0 && s(c - 1, u - o);
        for (p = 0; p < c; p++) t[p].y >= n ? d.push(t[p]) : f.push(t[p]);
        l(f, !1, e, n, i, r), l(d, !0, e, n, i, r)
    }

    function gh(t, e, n, i, r, a) {
        for (var o = [], s = [], l = 0; l < t.length; l++) t[l].x < e ? o.push(t[l]) : s.push(t[l]);
        ph(s, e, n, i, 1, r, a), ph(o, e, n, i, -1, r, a);
        for (l = 0; l < t.length; l++) {
            var h = t[l].linePoints;
            if (h) {
                var u = h[1][0] - h[2][0];
                t[l].x < e ? h[2][0] = t[l].x + 3 : h[2][0] = t[l].x - 3, h[1][1] = h[2][1] = t[l].y, h[1][0] = h[2][0] + u
            }
        }
    }
    var mh = 2311,
        vh = function () {
            return mh++
        },
        yh = {},
        _h = yh = "object" == typeof wx && "function" == typeof wx.getSystemInfoSync ? {
            browser: {},
            os: {},
            node: !1,
            wxa: !0,
            canvasSupported: !0,
            svgSupported: !1,
            touchEventsSupported: !0
        } : "undefined" == typeof document && "undefined" != typeof self ? {
            browser: {},
            os: {},
            node: !1,
            worker: !0,
            canvasSupported: !0
        } : "undefined" == typeof navigator ? {
            browser: {},
            os: {},
            node: !0,
            worker: !1,
            canvasSupported: !0,
            svgSupported: !0
        } : function (t) {
            var e = {},
                n = {},
                i = t.match(/Firefox\/([\d.]+)/),
                r = t.match(/MSIE\s([\d.]+)/) || t.match(/Trident\/.+?rv:(([\d.]+))/),
                a = t.match(/Edge\/([\d.]+)/),
                o = /micromessenger/i.test(t);
            return i && (n.firefox = !0, n.version = i[1]), r && (n.ie = !0, n.version = r[1]), a && (n.edge = !0, n.version = a[1]), o && (n.weChat = !0), {
                browser: n,
                os: e,
                node: !1,
                canvasSupported: !!document.createElement("canvas").getContext,
                svgSupported: "undefined" != typeof SVGRect,
                touchEventsSupported: "ontouchstart" in window && !n.ie && !n.edge,
                pointerEventsSupported: "onpointerdown" in window && (n.edge || n.ie && n.version >= 11)
            }
        }(navigator.userAgent),
        xh = {
            "[object Function]": 1,
            "[object RegExp]": 1,
            "[object Date]": 1,
            "[object Error]": 1,
            "[object CanvasGradient]": 1,
            "[object CanvasPattern]": 1,
            "[object Image]": 1,
            "[object Canvas]": 1
        },
        wh = {
            "[object Int8Array]": 1,
            "[object Uint8Array]": 1,
            "[object Uint8ClampedArray]": 1,
            "[object Int16Array]": 1,
            "[object Uint16Array]": 1,
            "[object Int32Array]": 1,
            "[object Uint32Array]": 1,
            "[object Float32Array]": 1,
            "[object Float64Array]": 1
        },
        bh = Object.prototype.toString,
        Mh = Array.prototype,
        Sh = Mh.forEach,
        Ih = Mh.filter,
        Th = Mh.slice,
        Ch = Mh.map,
        Dh = Mh.reduce,
        kh = {},
        Ah = function () {
            return kh.createCanvas()
        };
    kh.createCanvas = function () {
        return document.createElement("canvas")
    };
    var Lh, Ph = "__ec_primitive__";
    N.prototype = {
        constructor: N,
        get: function (t) {
            return this.hasOwnProperty(t) ? this[t] : null
        },
        set: function (t, e) {
            return this[t] = e
        },
        each: function (t, e) {
            void 0 !== e && (t = m(t, e));
            for (var n in this) this.hasOwnProperty(n) && t(this[n], n)
        },
        removeKey: function (t) {
            delete this[t]
        }
    };
    var Oh = "undefined" == typeof Float32Array ? Array : Float32Array,
        Eh = U,
        Nh = function (t, e) {
            return (t[0] - e[0]) * (t[0] - e[0]) + (t[1] - e[1]) * (t[1] - e[1])
        };
    $.prototype = {
        constructor: $,
        _dragStart: function (t) {
            var e = t.target;
            e && e.draggable && (this._draggingTarget = e, e.dragging = !0, this._x = t.offsetX, this._y = t.offsetY, this.dispatchToElement(K(e, t), "dragstart", t.event))
        },
        _drag: function (t) {
            var e = this._draggingTarget;
            if (e) {
                var n = t.offsetX,
                    i = t.offsetY,
                    r = n - this._x,
                    a = i - this._y;
                this._x = n, this._y = i, e.drift(r, a, t), this.dispatchToElement(K(e, t), "drag", t.event);
                var o = this.findHover(n, i, e).target,
                    s = this._dropTarget;
                this._dropTarget = o, e !== o && (s && o !== s && this.dispatchToElement(K(s, t), "dragleave", t.event), o && o !== s && this.dispatchToElement(K(o, t), "dragenter", t.event))
            }
        },
        _dragEnd: function (t) {
            var e = this._draggingTarget;
            e && (e.dragging = !1), this.dispatchToElement(K(e, t), "dragend", t.event), this._dropTarget && this.dispatchToElement(K(this._dropTarget, t), "drop", t.event), this._draggingTarget = null, this._dropTarget = null
        }
    };
    var Rh = Array.prototype.slice,
        Bh = function () {
            this._$handlers = {}
        };
    Bh.prototype = {
        constructor: Bh,
        one: function (t, e, n) {
            var i = this._$handlers;
            if (!e || !t) return this;
            i[t] || (i[t] = []);
            for (var r = 0; r < i[t].length; r++)
                if (i[t][r].h === e) return this;
            return i[t].push({
                h: e,
                one: !0,
                ctx: n || this
            }), this
        },
        on: function (t, e, n) {
            var i = this._$handlers;
            if (!e || !t) return this;
            i[t] || (i[t] = []);
            for (var r = 0; r < i[t].length; r++)
                if (i[t][r].h === e) return this;
            return i[t].push({
                h: e,
                one: !1,
                ctx: n || this
            }), this
        },
        isSilent: function (t) {
            var e = this._$handlers;
            return e[t] && e[t].length
        },
        off: function (t, e) {
            var n = this._$handlers;
            if (!t) return this._$handlers = {}, this;
            if (e) {
                if (n[t]) {
                    for (var i = [], r = 0, a = n[t].length; r < a; r++) n[t][r].h != e && i.push(n[t][r]);
                    n[t] = i
                }
                n[t] && 0 === n[t].length && delete n[t]
            } else delete n[t];
            return this
        },
        trigger: function (t) {
            if (this._$handlers[t]) {
                var e = arguments,
                    n = e.length;
                n > 3 && (e = Rh.call(e, 1));
                for (var i = this._$handlers[t], r = i.length, a = 0; a < r;) {
                    switch (n) {
                        case 1:
                            i[a].h.call(i[a].ctx);
                            break;
                        case 2:
                            i[a].h.call(i[a].ctx, e[1]);
                            break;
                        case 3:
                            i[a].h.call(i[a].ctx, e[1], e[2]);
                            break;
                        default:
                            i[a].h.apply(i[a].ctx, e)
                    }
                    i[a].one ? (i.splice(a, 1), r--) : a++
                }
            }
            return this
        },
        triggerWithContext: function (t) {
            if (this._$handlers[t]) {
                var e = arguments,
                    n = e.length;
                n > 4 && (e = Rh.call(e, 1, e.length - 1));
                for (var i = e[e.length - 1], r = this._$handlers[t], a = r.length, o = 0; o < a;) {
                    switch (n) {
                        case 1:
                            r[o].h.call(i);
                            break;
                        case 2:
                            r[o].h.call(i, e[1]);
                            break;
                        case 3:
                            r[o].h.call(i, e[1], e[2]);
                            break;
                        default:
                            r[o].h.apply(i, e)
                    }
                    r[o].one ? (r.splice(o, 1), a--) : o++
                }
            }
            return this
        }
    };
    var zh = "silent";
    J.prototype.dispose = function () {};
    var Fh = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        Vh = function (t, e, n, i) {
            Bh.call(this), this.storage = t, this.painter = e, this.painterRoot = i, n = n || new J, this.proxy = null, this._hovered = {}, this._lastTouchMoment, this._lastX, this._lastY, $.call(this), this.setHandlerProxy(n)
        };
    Vh.prototype = {
        constructor: Vh,
        setHandlerProxy: function (t) {
            this.proxy && this.proxy.dispose(), t && (f(Fh, function (e) {
                t.on && t.on(e, this[e], this)
            }, this), t.handler = this), this.proxy = t
        },
        mousemove: function (t) {
            var e = t.zrX,
                n = t.zrY,
                i = this._hovered,
                r = i.target;
            r && !r.__zr && (r = (i = this.findHover(i.x, i.y)).target);
            var a = this._hovered = this.findHover(e, n),
                o = a.target,
                s = this.proxy;
            s.setCursor && s.setCursor(o ? o.cursor : "default"), r && o !== r && this.dispatchToElement(i, "mouseout", t), this.dispatchToElement(a, "mousemove", t), o && o !== r && this.dispatchToElement(a, "mouseover", t)
        },
        mouseout: function (t) {
            this.dispatchToElement(this._hovered, "mouseout", t);
            var e, n = t.toElement || t.relatedTarget;
            do {
                n = n && n.parentNode
            } while (n && 9 != n.nodeType && !(e = n === this.painterRoot));
            !e && this.trigger("globalout", {
                event: t
            })
        },
        resize: function (t) {
            this._hovered = {}
        },
        dispatch: function (t, e) {
            var n = this[t];
            n && n.call(this, e)
        },
        dispose: function () {
            this.proxy.dispose(), this.storage = this.proxy = this.painter = null
        },
        setCursorStyle: function (t) {
            var e = this.proxy;
            e.setCursor && e.setCursor(t)
        },
        dispatchToElement: function (t, e, n) {
            var i = (t = t || {}).target;
            if (!i || !i.silent) {
                for (var r = "on" + e, a = Q(e, t, n); i && (i[r] && (a.cancelBubble = i[r].call(i, a)), i.trigger(e, a), i = i.parent, !a.cancelBubble););
                a.cancelBubble || (this.trigger(e, a), this.painter && this.painter.eachOtherLayer(function (t) {
                    "function" == typeof t[r] && t[r].call(t, a), t.trigger && t.trigger(e, a)
                }))
            }
        },
        findHover: function (t, e, n) {
            for (var i = this.storage.getDisplayList(), r = {
                    x: t,
                    y: e
                }, a = i.length - 1; a >= 0; a--) {
                var o;
                if (i[a] !== n && !i[a].ignore && (o = tt(i[a], t, e)) && (!r.topTarget && (r.topTarget = i[a]), o !== zh)) {
                    r.target = i[a];
                    break
                }
            }
            return r
        }
    }, f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        Vh.prototype[t] = function (e) {
            var n = this.findHover(e.zrX, e.zrY),
                i = n.target;
            if ("mousedown" === t) this._downEl = i, this._downPoint = [e.zrX, e.zrY], this._upEl = i;
            else if ("mouseup" === t) this._upEl = i;
            else if ("click" === t) {
                if (this._downEl !== this._upEl || !this._downPoint || Eh(this._downPoint, [e.zrX, e.zrY]) > 4) return;
                this._downPoint = null
            }
            this.dispatchToElement(n, t, e)
        }
    }), u(Vh, Bh), u(Vh, $);
    var Wh = "undefined" == typeof Float32Array ? Array : Float32Array,
        Hh = nt,
        Gh = 5e-5,
        qh = function (t) {
            (t = t || {}).position || (this.position = [0, 0]), null == t.rotation && (this.rotation = 0), t.scale || (this.scale = [1, 1]), this.origin = this.origin || null
        },
        Xh = qh.prototype;
    Xh.transform = null, Xh.needLocalTransform = function () {
        return ht(this.rotation) || ht(this.position[0]) || ht(this.position[1]) || ht(this.scale[0] - 1) || ht(this.scale[1] - 1)
    }, Xh.updateTransform = function () {
        var t = this.parent,
            e = t && t.transform,
            n = this.needLocalTransform(),
            i = this.transform;
        n || e ? (i = i || et(), n ? this.getLocalTransform(i) : Hh(i), e && (n ? rt(i, t.transform, i) : it(i, t.transform)), this.transform = i, this.invTransform = this.invTransform || et(), lt(this.invTransform, i)) : i && Hh(i)
    }, Xh.getLocalTransform = function (t) {
        return qh.getLocalTransform(this, t)
    }, Xh.setTransform = function (t) {
        var e = this.transform,
            n = t.dpr || 1;
        e ? t.setTransform(n * e[0], n * e[1], n * e[2], n * e[3], n * e[4], n * e[5]) : t.setTransform(n, 0, 0, n, 0, 0)
    }, Xh.restoreTransform = function (t) {
        var e = t.dpr || 1;
        t.setTransform(e, 0, 0, e, 0, 0)
    };
    var Uh = [];
    Xh.decomposeTransform = function () {
        if (this.transform) {
            var t = this.parent,
                e = this.transform;
            t && t.transform && (rt(Uh, t.invTransform, e), e = Uh);
            var n = e[0] * e[0] + e[1] * e[1],
                i = e[2] * e[2] + e[3] * e[3],
                r = this.position,
                a = this.scale;
            ht(n - 1) && (n = Math.sqrt(n)), ht(i - 1) && (i = Math.sqrt(i)), e[0] < 0 && (n = -n), e[3] < 0 && (i = -i), r[0] = e[4], r[1] = e[5], a[0] = n, a[1] = i, this.rotation = Math.atan2(-e[1] / i, e[0] / n)
        }
    }, Xh.getGlobalScale = function () {
        var t = this.transform;
        if (!t) return [1, 1];
        var e = Math.sqrt(t[0] * t[0] + t[1] * t[1]),
            n = Math.sqrt(t[2] * t[2] + t[3] * t[3]);
        return t[0] < 0 && (e = -e), t[3] < 0 && (n = -n), [e, n]
    }, Xh.transformCoordToLocal = function (t, e) {
        var n = [t, e],
            i = this.invTransform;
        return i && Y(n, n, i), n
    }, Xh.transformCoordToGlobal = function (t, e) {
        var n = [t, e],
            i = this.transform;
        return i && Y(n, n, i), n
    }, qh.getLocalTransform = function (t, e) {
        Hh(e = e || []);
        var n = t.origin,
            i = t.scale || [1, 1],
            r = t.rotation || 0,
            a = t.position || [0, 0];
        return n && (e[4] -= n[0], e[5] -= n[1]), st(e, e, i), r && ot(e, e, r), n && (e[4] += n[0], e[5] += n[1]), e[4] += a[0], e[5] += a[1], e
    };
    var Yh = {
        linear: function (t) {
            return t
        },
        quadraticIn: function (t) {
            return t * t
        },
        quadraticOut: function (t) {
            return t * (2 - t)
        },
        quadraticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t : -.5 * (--t * (t - 2) - 1)
        },
        cubicIn: function (t) {
            return t * t * t
        },
        cubicOut: function (t) {
            return --t * t * t + 1
        },
        cubicInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t : .5 * ((t -= 2) * t * t + 2)
        },
        quarticIn: function (t) {
            return t * t * t * t
        },
        quarticOut: function (t) {
            return 1 - --t * t * t * t
        },
        quarticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t : -.5 * ((t -= 2) * t * t * t - 2)
        },
        quinticIn: function (t) {
            return t * t * t * t * t
        },
        quinticOut: function (t) {
            return --t * t * t * t * t + 1
        },
        quinticInOut: function (t) {
            return (t *= 2) < 1 ? .5 * t * t * t * t * t : .5 * ((t -= 2) * t * t * t * t + 2)
        },
        sinusoidalIn: function (t) {
            return 1 - Math.cos(t * Math.PI / 2)
        },
        sinusoidalOut: function (t) {
            return Math.sin(t * Math.PI / 2)
        },
        sinusoidalInOut: function (t) {
            return .5 * (1 - Math.cos(Math.PI * t))
        },
        exponentialIn: function (t) {
            return 0 === t ? 0 : Math.pow(1024, t - 1)
        },
        exponentialOut: function (t) {
            return 1 === t ? 1 : 1 - Math.pow(2, -10 * t)
        },
        exponentialInOut: function (t) {
            return 0 === t ? 0 : 1 === t ? 1 : (t *= 2) < 1 ? .5 * Math.pow(1024, t - 1) : .5 * (2 - Math.pow(2, -10 * (t - 1)))
        },
        circularIn: function (t) {
            return 1 - Math.sqrt(1 - t * t)
        },
        circularOut: function (t) {
            return Math.sqrt(1 - --t * t)
        },
        circularInOut: function (t) {
            return (t *= 2) < 1 ? -.5 * (Math.sqrt(1 - t * t) - 1) : .5 * (Math.sqrt(1 - (t -= 2) * t) + 1)
        },
        elasticIn: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), -n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4))
        },
        elasticOut: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), n * Math.pow(2, -10 * t) * Math.sin((t - e) * (2 * Math.PI) / .4) + 1)
        },
        elasticInOut: function (t) {
            var e, n = .1;
            return 0 === t ? 0 : 1 === t ? 1 : (!n || n < 1 ? (n = 1, e = .1) : e = .4 * Math.asin(1 / n) / (2 * Math.PI), (t *= 2) < 1 ? n * Math.pow(2, 10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * -.5 : n * Math.pow(2, -10 * (t -= 1)) * Math.sin((t - e) * (2 * Math.PI) / .4) * .5 + 1)
        },
        backIn: function (t) {
            var e = 1.70158;
            return t * t * ((e + 1) * t - e)
        },
        backOut: function (t) {
            var e = 1.70158;
            return --t * t * ((e + 1) * t + e) + 1
        },
        backInOut: function (t) {
            var e = 2.5949095;
            return (t *= 2) < 1 ? t * t * ((e + 1) * t - e) * .5 : .5 * ((t -= 2) * t * ((e + 1) * t + e) + 2)
        },
        bounceIn: function (t) {
            return 1 - Yh.bounceOut(1 - t)
        },
        bounceOut: function (t) {
            return t < 1 / 2.75 ? 7.5625 * t * t : t < 2 / 2.75 ? 7.5625 * (t -= 1.5 / 2.75) * t + .75 : t < 2.5 / 2.75 ? 7.5625 * (t -= 2.25 / 2.75) * t + .9375 : 7.5625 * (t -= 2.625 / 2.75) * t + .984375
        },
        bounceInOut: function (t) {
            return t < .5 ? .5 * Yh.bounceIn(2 * t) : .5 * Yh.bounceOut(2 * t - 1) + .5
        }
    };
    ut.prototype = {
        constructor: ut,
        step: function (t, e) {
            if (this._initialized || (this._startTime = t + this._delay, this._initialized = !0), this._paused) this._pausedTime += e;
            else {
                var n = (t - this._startTime - this._pausedTime) / this._life;
                if (!(n < 0)) {
                    n = Math.min(n, 1);
                    var i = this.easing,
                        r = "string" == typeof i ? Yh[i] : i,
                        a = "function" == typeof r ? r(n) : n;
                    return this.fire("frame", a), 1 == n ? this.loop ? (this.restart(t), "restart") : (this._needsRemove = !0, "destroy") : null
                }
            }
        },
        restart: function (t) {
            var e = (t - this._startTime - this._pausedTime) % this._life;
            this._startTime = t - e + this.gap, this._pausedTime = 0, this._needsRemove = !1
        },
        fire: function (t, e) {
            this[t = "on" + t] && this[t](this._target, e)
        },
        pause: function () {
            this._paused = !0
        },
        resume: function () {
            this._paused = !1
        }
    };
    var jh = function () {
            this.head = null, this.tail = null, this._len = 0
        },
        Zh = jh.prototype;
    Zh.insert = function (t) {
        var e = new $h(t);
        return this.insertEntry(e), e
    }, Zh.insertEntry = function (t) {
        this.head ? (this.tail.next = t, t.prev = this.tail, t.next = null, this.tail = t) : this.head = this.tail = t, this._len++
    }, Zh.remove = function (t) {
        var e = t.prev,
            n = t.next;
        e ? e.next = n : this.head = n, n ? n.prev = e : this.tail = e, t.next = t.prev = null, this._len--
    }, Zh.len = function () {
        return this._len
    }, Zh.clear = function () {
        this.head = this.tail = null, this._len = 0
    };
    var $h = function (t) {
            this.value = t, this.next, this.prev
        },
        Kh = function (t) {
            this._list = new jh, this._map = {}, this._maxSize = t || 10, this._lastRemovedEntry = null
        },
        Qh = Kh.prototype;
    Qh.put = function (t, e) {
        var n = this._list,
            i = this._map,
            r = null;
        if (null == i[t]) {
            var a = n.len(),
                o = this._lastRemovedEntry;
            if (a >= this._maxSize && a > 0) {
                var s = n.head;
                n.remove(s), delete i[s.key], r = s.value, this._lastRemovedEntry = s
            }
            o ? o.value = e : o = new $h(e), o.key = t, n.insertEntry(o), i[t] = o
        }
        return r
    }, Qh.get = function (t) {
        var e = this._map[t],
            n = this._list;
        if (null != e) return e !== n.tail && (n.remove(e), n.insertEntry(e)), e.value
    }, Qh.clear = function () {
        this._list.clear(), this._map = {}
    };
    var Jh = {
            transparent: [0, 0, 0, 0],
            aliceblue: [240, 248, 255, 1],
            antiquewhite: [250, 235, 215, 1],
            aqua: [0, 255, 255, 1],
            aquamarine: [127, 255, 212, 1],
            azure: [240, 255, 255, 1],
            beige: [245, 245, 220, 1],
            bisque: [255, 228, 196, 1],
            black: [0, 0, 0, 1],
            blanchedalmond: [255, 235, 205, 1],
            blue: [0, 0, 255, 1],
            blueviolet: [138, 43, 226, 1],
            brown: [165, 42, 42, 1],
            burlywood: [222, 184, 135, 1],
            cadetblue: [95, 158, 160, 1],
            chartreuse: [127, 255, 0, 1],
            chocolate: [210, 105, 30, 1],
            coral: [255, 127, 80, 1],
            cornflowerblue: [100, 149, 237, 1],
            cornsilk: [255, 248, 220, 1],
            crimson: [220, 20, 60, 1],
            cyan: [0, 255, 255, 1],
            darkblue: [0, 0, 139, 1],
            darkcyan: [0, 139, 139, 1],
            darkgoldenrod: [184, 134, 11, 1],
            darkgray: [169, 169, 169, 1],
            darkgreen: [0, 100, 0, 1],
            darkgrey: [169, 169, 169, 1],
            darkkhaki: [189, 183, 107, 1],
            darkmagenta: [139, 0, 139, 1],
            darkolivegreen: [85, 107, 47, 1],
            darkorange: [255, 140, 0, 1],
            darkorchid: [153, 50, 204, 1],
            darkred: [139, 0, 0, 1],
            darksalmon: [233, 150, 122, 1],
            darkseagreen: [143, 188, 143, 1],
            darkslateblue: [72, 61, 139, 1],
            darkslategray: [47, 79, 79, 1],
            darkslategrey: [47, 79, 79, 1],
            darkturquoise: [0, 206, 209, 1],
            darkviolet: [148, 0, 211, 1],
            deeppink: [255, 20, 147, 1],
            deepskyblue: [0, 191, 255, 1],
            dimgray: [105, 105, 105, 1],
            dimgrey: [105, 105, 105, 1],
            dodgerblue: [30, 144, 255, 1],
            firebrick: [178, 34, 34, 1],
            floralwhite: [255, 250, 240, 1],
            forestgreen: [34, 139, 34, 1],
            fuchsia: [255, 0, 255, 1],
            gainsboro: [220, 220, 220, 1],
            ghostwhite: [248, 248, 255, 1],
            gold: [255, 215, 0, 1],
            goldenrod: [218, 165, 32, 1],
            gray: [128, 128, 128, 1],
            green: [0, 128, 0, 1],
            greenyellow: [173, 255, 47, 1],
            grey: [128, 128, 128, 1],
            honeydew: [240, 255, 240, 1],
            hotpink: [255, 105, 180, 1],
            indianred: [205, 92, 92, 1],
            indigo: [75, 0, 130, 1],
            ivory: [255, 255, 240, 1],
            khaki: [240, 230, 140, 1],
            lavender: [230, 230, 250, 1],
            lavenderblush: [255, 240, 245, 1],
            lawngreen: [124, 252, 0, 1],
            lemonchiffon: [255, 250, 205, 1],
            lightblue: [173, 216, 230, 1],
            lightcoral: [240, 128, 128, 1],
            lightcyan: [224, 255, 255, 1],
            lightgoldenrodyellow: [250, 250, 210, 1],
            lightgray: [211, 211, 211, 1],
            lightgreen: [144, 238, 144, 1],
            lightgrey: [211, 211, 211, 1],
            lightpink: [255, 182, 193, 1],
            lightsalmon: [255, 160, 122, 1],
            lightseagreen: [32, 178, 170, 1],
            lightskyblue: [135, 206, 250, 1],
            lightslategray: [119, 136, 153, 1],
            lightslategrey: [119, 136, 153, 1],
            lightsteelblue: [176, 196, 222, 1],
            lightyellow: [255, 255, 224, 1],
            lime: [0, 255, 0, 1],
            limegreen: [50, 205, 50, 1],
            linen: [250, 240, 230, 1],
            magenta: [255, 0, 255, 1],
            maroon: [128, 0, 0, 1],
            mediumaquamarine: [102, 205, 170, 1],
            mediumblue: [0, 0, 205, 1],
            mediumorchid: [186, 85, 211, 1],
            mediumpurple: [147, 112, 219, 1],
            mediumseagreen: [60, 179, 113, 1],
            mediumslateblue: [123, 104, 238, 1],
            mediumspringgreen: [0, 250, 154, 1],
            mediumturquoise: [72, 209, 204, 1],
            mediumvioletred: [199, 21, 133, 1],
            midnightblue: [25, 25, 112, 1],
            mintcream: [245, 255, 250, 1],
            mistyrose: [255, 228, 225, 1],
            moccasin: [255, 228, 181, 1],
            navajowhite: [255, 222, 173, 1],
            navy: [0, 0, 128, 1],
            oldlace: [253, 245, 230, 1],
            olive: [128, 128, 0, 1],
            olivedrab: [107, 142, 35, 1],
            orange: [255, 165, 0, 1],
            orangered: [255, 69, 0, 1],
            orchid: [218, 112, 214, 1],
            palegoldenrod: [238, 232, 170, 1],
            palegreen: [152, 251, 152, 1],
            paleturquoise: [175, 238, 238, 1],
            palevioletred: [219, 112, 147, 1],
            papayawhip: [255, 239, 213, 1],
            peachpuff: [255, 218, 185, 1],
            peru: [205, 133, 63, 1],
            pink: [255, 192, 203, 1],
            plum: [221, 160, 221, 1],
            powderblue: [176, 224, 230, 1],
            purple: [128, 0, 128, 1],
            red: [255, 0, 0, 1],
            rosybrown: [188, 143, 143, 1],
            royalblue: [65, 105, 225, 1],
            saddlebrown: [139, 69, 19, 1],
            salmon: [250, 128, 114, 1],
            sandybrown: [244, 164, 96, 1],
            seagreen: [46, 139, 87, 1],
            seashell: [255, 245, 238, 1],
            sienna: [160, 82, 45, 1],
            silver: [192, 192, 192, 1],
            skyblue: [135, 206, 235, 1],
            slateblue: [106, 90, 205, 1],
            slategray: [112, 128, 144, 1],
            slategrey: [112, 128, 144, 1],
            snow: [255, 250, 250, 1],
            springgreen: [0, 255, 127, 1],
            steelblue: [70, 130, 180, 1],
            tan: [210, 180, 140, 1],
            teal: [0, 128, 128, 1],
            thistle: [216, 191, 216, 1],
            tomato: [255, 99, 71, 1],
            turquoise: [64, 224, 208, 1],
            violet: [238, 130, 238, 1],
            wheat: [245, 222, 179, 1],
            white: [255, 255, 255, 1],
            whitesmoke: [245, 245, 245, 1],
            yellow: [255, 255, 0, 1],
            yellowgreen: [154, 205, 50, 1]
        },
        tu = new Kh(20),
        eu = null,
        nu = Array.prototype.slice,
        iu = function (t, e, n, i) {
            this._tracks = {}, this._target = t, this._loop = e || !1, this._getter = n || Mt, this._setter = i || St, this._clipCount = 0, this._delay = 0, this._doneList = [], this._onframeList = [], this._clipList = []
        };
    iu.prototype = {
        when: function (t, e) {
            var n = this._tracks;
            for (var i in e)
                if (e.hasOwnProperty(i)) {
                    if (!n[i]) {
                        n[i] = [];
                        var r = this._getter(this._target, i);
                        if (null == r) continue;
                        0 !== t && n[i].push({
                            time: 0,
                            value: Pt(r)
                        })
                    }
                    n[i].push({
                        time: t,
                        value: e[i]
                    })
                }
            return this
        },
        during: function (t) {
            return this._onframeList.push(t), this
        },
        pause: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].pause();
            this._paused = !0
        },
        resume: function () {
            for (var t = 0; t < this._clipList.length; t++) this._clipList[t].resume();
            this._paused = !1
        },
        isPaused: function () {
            return !!this._paused
        },
        _doneCallback: function () {
            this._tracks = {}, this._clipList.length = 0;
            for (var t = this._doneList, e = t.length, n = 0; n < e; n++) t[n].call(this)
        },
        start: function (t, e) {
            var n, i = this,
                r = 0;
            for (var a in this._tracks)
                if (this._tracks.hasOwnProperty(a)) {
                    var o = Nt(this, t, function () {
                        --r || i._doneCallback()
                    }, this._tracks[a], a, e);
                    o && (this._clipList.push(o), r++, this.animation && this.animation.addClip(o), n = o)
                }
            if (n) {
                var s = n.onframe;
                n.onframe = function (t, e) {
                    s(t, e);
                    for (var n = 0; n < i._onframeList.length; n++) i._onframeList[n](t, e)
                }
            }
            return r || this._doneCallback(), this
        },
        stop: function (t) {
            for (var e = this._clipList, n = this.animation, i = 0; i < e.length; i++) {
                var r = e[i];
                t && r.onframe(this._target, 1), n && n.removeClip(r)
            }
            e.length = 0
        },
        delay: function (t) {
            return this._delay = t, this
        },
        done: function (t) {
            return t && this._doneList.push(t), this
        },
        getClips: function () {
            return this._clipList
        }
    };
    var ru = 1;
    "undefined" != typeof window && (ru = Math.max(window.devicePixelRatio || 1, 1));
    var au = ru,
        ou = function () {},
        su = ou,
        lu = function () {
            this.animators = []
        };
    lu.prototype = {
        constructor: lu,
        animate: function (t, e) {
            var n, i = !1,
                r = this,
                a = this.__zr;
            if (t) {
                var o = t.split("."),
                    s = r;
                i = "shape" === o[0];
                for (var h = 0, u = o.length; h < u; h++) s && (s = s[o[h]]);
                s && (n = s)
            } else n = r;
            if (n) {
                var c = r.animators,
                    f = new iu(n, e);
                return f.during(function (t) {
                    r.dirty(i)
                }).done(function () {
                    c.splice(l(c, f), 1)
                }), c.push(f), a && a.animation.addAnimator(f), f
            }
            su('Property "' + t + '" is not existed in element ' + r.id)
        },
        stopAnimation: function (t) {
            for (var e = this.animators, n = e.length, i = 0; i < n; i++) e[i].stop(t);
            return e.length = 0, this
        },
        animateTo: function (t, e, n, i, r, a) {
            x(n) ? (r = i, i = n, n = 0) : _(i) ? (r = i, i = "linear", n = 0) : _(n) ? (r = n, n = 0) : _(e) ? (r = e, e = 500) : e || (e = 500), this.stopAnimation(), this._animateToShallow("", this, t, e, n);
            var o = this.animators.slice(),
                s = o.length;
            s || r && r();
            for (var l = 0; l < o.length; l++) o[l].done(function () {
                --s || r && r()
            }).start(i, a)
        },
        _animateToShallow: function (t, e, n, i, r) {
            var a = {},
                o = 0;
            for (var s in n)
                if (n.hasOwnProperty(s))
                    if (null != e[s]) w(n[s]) && !c(n[s]) ? this._animateToShallow(t ? t + "." + s : s, e[s], n[s], i, r) : (a[s] = n[s], o++);
                    else if (null != n[s])
                if (t) {
                    var l = {};
                    l[t] = {}, l[t][s] = n[s], this.attr(l)
                } else this.attr(s, n[s]);
            return o > 0 && this.animate(t, !1).when(null == i ? 500 : i, a).delay(r || 0), this
        }
    };
    var hu = function (t) {
        qh.call(this, t), Bh.call(this, t), lu.call(this, t), this.id = t.id || vh()
    };
    hu.prototype = {
        type: "element",
        name: "",
        __zr: null,
        ignore: !1,
        clipPath: null,
        isGroup: !1,
        drift: function (t, e) {
            switch (this.draggable) {
                case "horizontal":
                    e = 0;
                    break;
                case "vertical":
                    t = 0
            }
            var n = this.transform;
            n || (n = this.transform = [1, 0, 0, 1, 0, 0]), n[4] += t, n[5] += e, this.decomposeTransform(), this.dirty(!1)
        },
        beforeUpdate: function () {},
        afterUpdate: function () {},
        update: function () {
            this.updateTransform()
        },
        traverse: function (t, e) {},
        attrKV: function (t, e) {
            if ("position" === t || "scale" === t || "origin" === t) {
                if (e) {
                    var n = this[t];
                    n || (n = this[t] = []), n[0] = e[0], n[1] = e[1]
                }
            } else this[t] = e
        },
        hide: function () {
            this.ignore = !0, this.__zr && this.__zr.refresh()
        },
        show: function () {
            this.ignore = !1, this.__zr && this.__zr.refresh()
        },
        attr: function (t, e) {
            if ("string" == typeof t) this.attrKV(t, e);
            else if (w(t))
                for (var n in t) t.hasOwnProperty(n) && this.attrKV(n, t[n]);
            return this.dirty(!1), this
        },
        setClipPath: function (t) {
            var e = this.__zr;
            e && t.addSelfToZr(e), this.clipPath && this.clipPath !== t && this.removeClipPath(), this.clipPath = t, t.__zr = e, t.__clipTarget = this, this.dirty(!1)
        },
        removeClipPath: function () {
            var t = this.clipPath;
            t && (t.__zr && t.removeSelfFromZr(t.__zr), t.__zr = null, t.__clipTarget = null, this.clipPath = null, this.dirty(!1))
        },
        addSelfToZr: function (t) {
            this.__zr = t;
            var e = this.animators;
            if (e)
                for (var n = 0; n < e.length; n++) t.animation.addAnimator(e[n]);
            this.clipPath && this.clipPath.addSelfToZr(t)
        },
        removeSelfFromZr: function (t) {
            this.__zr = null;
            var e = this.animators;
            if (e)
                for (var n = 0; n < e.length; n++) t.animation.removeAnimator(e[n]);
            this.clipPath && this.clipPath.removeSelfFromZr(t)
        }
    }, u(hu, lu), u(hu, qh), u(hu, Bh);
    var uu = Y,
        cu = Math.min,
        fu = Math.max;
    Rt.prototype = {
        constructor: Rt,
        union: function (t) {
            var e = cu(t.x, this.x),
                n = cu(t.y, this.y);
            this.width = fu(t.x + t.width, this.x + this.width) - e, this.height = fu(t.y + t.height, this.y + this.height) - n, this.x = e, this.y = n
        },
        applyTransform: function () {
            var t = [],
                e = [],
                n = [],
                i = [];
            return function (r) {
                if (r) {
                    t[0] = n[0] = this.x, t[1] = i[1] = this.y, e[0] = i[0] = this.x + this.width, e[1] = n[1] = this.y + this.height, uu(t, t, r), uu(e, e, r), uu(n, n, r), uu(i, i, r), this.x = cu(t[0], e[0], n[0], i[0]), this.y = cu(t[1], e[1], n[1], i[1]);
                    var a = fu(t[0], e[0], n[0], i[0]),
                        o = fu(t[1], e[1], n[1], i[1]);
                    this.width = a - this.x, this.height = o - this.y
                }
            }
        }(),
        calculateTransform: function (t) {
            var e = this,
                n = t.width / e.width,
                i = t.height / e.height,
                r = et();
            return at(r, r, [-e.x, -e.y]), st(r, r, [n, i]), at(r, r, [t.x, t.y]), r
        },
        intersect: function (t) {
            if (!t) return !1;
            t instanceof Rt || (t = Rt.create(t));
            var e = this,
                n = e.x,
                i = e.x + e.width,
                r = e.y,
                a = e.y + e.height,
                o = t.x,
                s = t.x + t.width,
                l = t.y,
                h = t.y + t.height;
            return !(i < o || s < n || a < l || h < r)
        },
        contain: function (t, e) {
            var n = this;
            return t >= n.x && t <= n.x + n.width && e >= n.y && e <= n.y + n.height
        },
        clone: function () {
            return new Rt(this.x, this.y, this.width, this.height)
        },
        copy: function (t) {
            this.x = t.x, this.y = t.y, this.width = t.width, this.height = t.height
        },
        plain: function () {
            return {
                x: this.x,
                y: this.y,
                width: this.width,
                height: this.height
            }
        }
    }, Rt.create = function (t) {
        return new Rt(t.x, t.y, t.width, t.height)
    };
    var du = function (t) {
        t = t || {}, hu.call(this, t);
        for (var e in t) t.hasOwnProperty(e) && (this[e] = t[e]);
        this._children = [], this.__storage = null, this.__dirty = !0
    };
    du.prototype = {
        constructor: du,
        isGroup: !0,
        type: "group",
        silent: !1,
        children: function () {
            return this._children.slice()
        },
        childAt: function (t) {
            return this._children[t]
        },
        childOfName: function (t) {
            for (var e = this._children, n = 0; n < e.length; n++)
                if (e[n].name === t) return e[n]
        },
        childCount: function () {
            return this._children.length
        },
        add: function (t) {
            return t && t !== this && t.parent !== this && (this._children.push(t), this._doAdd(t)), this
        },
        addBefore: function (t, e) {
            if (t && t !== this && t.parent !== this && e && e.parent === this) {
                var n = this._children,
                    i = n.indexOf(e);
                i >= 0 && (n.splice(i, 0, t), this._doAdd(t))
            }
            return this
        },
        _doAdd: function (t) {
            t.parent && t.parent.remove(t), t.parent = this;
            var e = this.__storage,
                n = this.__zr;
            e && e !== t.__storage && (e.addToStorage(t), t instanceof du && t.addChildrenToStorage(e)), n && n.refresh()
        },
        remove: function (t) {
            var e = this.__zr,
                n = this.__storage,
                i = this._children,
                r = l(i, t);
            return r < 0 ? this : (i.splice(r, 1), t.parent = null, n && (n.delFromStorage(t), t instanceof du && t.delChildrenFromStorage(n)), e && e.refresh(), this)
        },
        removeAll: function () {
            var t, e, n = this._children,
                i = this.__storage;
            for (e = 0; e < n.length; e++) t = n[e], i && (i.delFromStorage(t), t instanceof du && t.delChildrenFromStorage(i)), t.parent = null;
            return n.length = 0, this
        },
        eachChild: function (t, e) {
            for (var n = this._children, i = 0; i < n.length; i++) {
                var r = n[i];
                t.call(e, r, i)
            }
            return this
        },
        traverse: function (t, e) {
            for (var n = 0; n < this._children.length; n++) {
                var i = this._children[n];
                t.call(e, i), "group" === i.type && i.traverse(t, e)
            }
            return this
        },
        addChildrenToStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.addToStorage(n), n instanceof du && n.addChildrenToStorage(t)
            }
        },
        delChildrenFromStorage: function (t) {
            for (var e = 0; e < this._children.length; e++) {
                var n = this._children[e];
                t.delFromStorage(n), n instanceof du && n.delChildrenFromStorage(t)
            }
        },
        dirty: function () {
            return this.__dirty = !0, this.__zr && this.__zr.refresh(), this
        },
        getBoundingRect: function (t) {
            for (var e = null, n = new Rt(0, 0, 0, 0), i = t || this._children, r = [], a = 0; a < i.length; a++) {
                var o = i[a];
                if (!o.ignore && !o.invisible) {
                    var s = o.getBoundingRect(),
                        l = o.getLocalTransform(r);
                    l ? (n.copy(s), n.applyTransform(l), (e = e || n.clone()).union(n)) : (e = e || s.clone()).union(s)
                }
            }
            return e || n
        }
    }, h(du, hu);
    var pu = 32,
        gu = 7,
        mu = function () {
            this._roots = [], this._displayList = [], this._displayListLen = 0
        };
    mu.prototype = {
        constructor: mu,
        traverse: function (t, e) {
            for (var n = 0; n < this._roots.length; n++) this._roots[n].traverse(t, e)
        },
        getDisplayList: function (t, e) {
            return e = e || !1, t && this.updateDisplayList(e), this._displayList
        },
        updateDisplayList: function (t) {
            this._displayListLen = 0;
            for (var e = this._roots, n = this._displayList, i = 0, r = e.length; i < r; i++) this._updateAndAddDisplayable(e[i], null, t);
            n.length = this._displayListLen, _h.canvasSupported && qt(n, Xt)
        },
        _updateAndAddDisplayable: function (t, e, n) {
            if (!t.ignore || n) {
                t.beforeUpdate(), t.__dirty && t.update(), t.afterUpdate();
                var i = t.clipPath;
                if (i) {
                    e = e ? e.slice() : [];
                    for (var r = i, a = t; r;) r.parent = a, r.updateTransform(), e.push(r), a = r, r = r.clipPath
                }
                if (t.isGroup) {
                    for (var o = t._children, s = 0; s < o.length; s++) {
                        var l = o[s];
                        t.__dirty && (l.__dirty = !0), this._updateAndAddDisplayable(l, e, n)
                    }
                    t.__dirty = !1
                } else t.__clipPaths = e, this._displayList[this._displayListLen++] = t
            }
        },
        addRoot: function (t) {
            t.__storage !== this && (t instanceof du && t.addChildrenToStorage(this), this.addToStorage(t), this._roots.push(t))
        },
        delRoot: function (t) {
            if (null == t) {
                for (n = 0; n < this._roots.length; n++) {
                    var e = this._roots[n];
                    e instanceof du && e.delChildrenFromStorage(this)
                }
                return this._roots = [], this._displayList = [], void(this._displayListLen = 0)
            }
            if (t instanceof Array)
                for (var n = 0, i = t.length; n < i; n++) this.delRoot(t[n]);
            else {
                var r = l(this._roots, t);
                r >= 0 && (this.delFromStorage(t), this._roots.splice(r, 1), t instanceof du && t.delChildrenFromStorage(this))
            }
        },
        addToStorage: function (t) {
            return t && (t.__storage = this, t.dirty(!1)), this
        },
        delFromStorage: function (t) {
            return t && (t.__storage = null), this
        },
        dispose: function () {
            this._renderList = this._roots = null
        },
        displayableSortFunc: Xt
    };
    var vu = {
            shadowBlur: 1,
            shadowOffsetX: 1,
            shadowOffsetY: 1,
            textShadowBlur: 1,
            textShadowOffsetX: 1,
            textShadowOffsetY: 1,
            textBoxShadowBlur: 1,
            textBoxShadowOffsetX: 1,
            textBoxShadowOffsetY: 1
        },
        yu = function (t, e, n) {
            return vu.hasOwnProperty(e) ? n *= t.dpr : n
        },
        _u = [
            ["shadowBlur", 0],
            ["shadowOffsetX", 0],
            ["shadowOffsetY", 0],
            ["shadowColor", "#000"],
            ["lineCap", "butt"],
            ["lineJoin", "miter"],
            ["miterLimit", 10]
        ],
        xu = function (t, e) {
            this.extendFrom(t, !1), this.host = e
        };
    xu.prototype = {
        constructor: xu,
        host: null,
        fill: "#000",
        stroke: null,
        opacity: 1,
        lineDash: null,
        lineDashOffset: 0,
        shadowBlur: 0,
        shadowOffsetX: 0,
        shadowOffsetY: 0,
        lineWidth: 1,
        strokeNoScale: !1,
        text: null,
        font: null,
        textFont: null,
        fontStyle: null,
        fontWeight: null,
        fontSize: null,
        fontFamily: null,
        textTag: null,
        textFill: "#000",
        textStroke: null,
        textWidth: null,
        textHeight: null,
        textStrokeWidth: 0,
        textLineHeight: null,
        textPosition: "inside",
        textRect: null,
        textOffset: null,
        textAlign: null,
        textVerticalAlign: null,
        textDistance: 5,
        textShadowColor: "transparent",
        textShadowBlur: 0,
        textShadowOffsetX: 0,
        textShadowOffsetY: 0,
        textBoxShadowColor: "transparent",
        textBoxShadowBlur: 0,
        textBoxShadowOffsetX: 0,
        textBoxShadowOffsetY: 0,
        transformText: !1,
        textRotation: 0,
        textOrigin: null,
        textBackgroundColor: null,
        textBorderColor: null,
        textBorderWidth: 0,
        textBorderRadius: 0,
        textPadding: null,
        rich: null,
        truncate: null,
        blend: null,
        bind: function (t, e, n) {
            for (var i = this, r = n && n.style, a = !r, o = 0; o < _u.length; o++) {
                var s = _u[o],
                    l = s[0];
                (a || i[l] !== r[l]) && (t[l] = yu(t, l, i[l] || s[1]))
            }
            if ((a || i.fill !== r.fill) && (t.fillStyle = i.fill), (a || i.stroke !== r.stroke) && (t.strokeStyle = i.stroke), (a || i.opacity !== r.opacity) && (t.globalAlpha = null == i.opacity ? 1 : i.opacity), (a || i.blend !== r.blend) && (t.globalCompositeOperation = i.blend || "source-over"), this.hasStroke()) {
                var h = i.lineWidth;
                t.lineWidth = h / (this.strokeNoScale && e && e.getLineScale ? e.getLineScale() : 1)
            }
        },
        hasFill: function () {
            var t = this.fill;
            return null != t && "none" !== t
        },
        hasStroke: function () {
            var t = this.stroke;
            return null != t && "none" !== t && this.lineWidth > 0
        },
        extendFrom: function (t, e) {
            if (t)
                for (var n in t) !t.hasOwnProperty(n) || !0 !== e && (!1 === e ? this.hasOwnProperty(n) : null == t[n]) || (this[n] = t[n])
        },
        set: function (t, e) {
            "string" == typeof t ? this[t] = e : this.extendFrom(t, !0)
        },
        clone: function () {
            var t = new this.constructor;
            return t.extendFrom(this, !0), t
        },
        getGradient: function (t, e, n) {
            for (var i = ("radial" === e.type ? Yt : Ut)(t, e, n), r = e.colorStops, a = 0; a < r.length; a++) i.addColorStop(r[a].offset, r[a].color);
            return i
        }
    };
    for (var wu = xu.prototype, bu = 0; bu < _u.length; bu++) {
        var Mu = _u[bu];
        Mu[0] in wu || (wu[Mu[0]] = Mu[1])
    }
    xu.getGradient = wu.getGradient;
    var Su = function (t, e) {
        this.image = t, this.repeat = e, this.type = "pattern"
    };
    Su.prototype.getCanvasPattern = function (t) {
        return t.createPattern(this.image, this.repeat || "repeat")
    };
    var Iu = function (t, e, n) {
        var i;
        n = n || au, "string" == typeof t ? i = Zt(t, e, n) : w(t) && (t = (i = t).id), this.id = t, this.dom = i;
        var r = i.style;
        r && (i.onselectstart = jt, r["-webkit-user-select"] = "none", r["user-select"] = "none", r["-webkit-touch-callout"] = "none", r["-webkit-tap-highlight-color"] = "rgba(0,0,0,0)", r.padding = 0, r.margin = 0, r["border-width"] = 0), this.domBack = null, this.ctxBack = null, this.painter = e, this.config = null, this.clearColor = 0, this.motionBlur = !1, this.lastFrameAlpha = .7, this.dpr = n
    };
    Iu.prototype = {
        constructor: Iu,
        __dirty: !0,
        __used: !1,
        __drawIndex: 0,
        __startIndex: 0,
        __endIndex: 0,
        incremental: !1,
        getElementCount: function () {
            return this.__endIndex - this.__startIndex
        },
        initContext: function () {
            this.ctx = this.dom.getContext("2d"), this.ctx.dpr = this.dpr
        },
        createBackBuffer: function () {
            var t = this.dpr;
            this.domBack = Zt("back-" + this.id, this.painter, t), this.ctxBack = this.domBack.getContext("2d"), 1 != t && this.ctxBack.scale(t, t)
        },
        resize: function (t, e) {
            var n = this.dpr,
                i = this.dom,
                r = i.style,
                a = this.domBack;
            r && (r.width = t + "px", r.height = e + "px"), i.width = t * n, i.height = e * n, a && (a.width = t * n, a.height = e * n, 1 != n && this.ctxBack.scale(n, n))
        },
        clear: function (t, e) {
            var n = this.dom,
                i = this.ctx,
                r = n.width,
                a = n.height,
                e = e || this.clearColor,
                o = this.motionBlur && !t,
                s = this.lastFrameAlpha,
                l = this.dpr;
            if (o && (this.domBack || this.createBackBuffer(), this.ctxBack.globalCompositeOperation = "copy", this.ctxBack.drawImage(n, 0, 0, r / l, a / l)), i.clearRect(0, 0, r, a), e && "transparent" !== e) {
                var h;
                e.colorStops ? (h = e.__canvasGradient || xu.getGradient(i, e, {
                    x: 0,
                    y: 0,
                    width: r,
                    height: a
                }), e.__canvasGradient = h) : e.image && (h = Su.prototype.getCanvasPattern.call(e, i)), i.save(), i.fillStyle = h || e, i.fillRect(0, 0, r, a), i.restore()
            }
            if (o) {
                var u = this.domBack;
                i.save(), i.globalAlpha = s, i.drawImage(u, 0, 0, r, a), i.restore()
            }
        }
    };
    var Tu = "undefined" != typeof window && (window.requestAnimationFrame && window.requestAnimationFrame.bind(window) || window.msRequestAnimationFrame && window.msRequestAnimationFrame.bind(window) || window.mozRequestAnimationFrame || window.webkitRequestAnimationFrame) || function (t) {
            setTimeout(t, 16)
        },
        Cu = new Kh(50),
        Du = {},
        ku = 0,
        Au = 5e3,
        Lu = /\{([a-zA-Z0-9_]+)\|([^}]*)\}/g,
        Pu = "12px sans-serif",
        Ou = {};
    Ou.measureText = function (t, e) {
        var n = s();
        return n.font = e || Pu, n.measureText(t)
    };
    var Eu = {
            left: 1,
            right: 1,
            center: 1
        },
        Nu = {
            top: 1,
            bottom: 1,
            middle: 1
        },
        Ru = new Rt,
        Bu = function () {};
    Bu.prototype = {
        constructor: Bu,
        drawRectText: function (t, e) {
            var n = this.style;
            e = n.textRect || e, this.__dirty && ye(n);
            var i = n.text;
            if (null != i && (i += ""), Ne(i, n)) {
                t.save();
                var r = this.transform;
                n.transformText ? this.setTransform(t) : r && (Ru.copy(e), Ru.applyTransform(r), e = Ru), xe(this, t, i, n, e), t.restore()
            }
        }
    }, Re.prototype = {
        constructor: Re,
        type: "displayable",
        __dirty: !0,
        invisible: !1,
        z: 0,
        z2: 0,
        zlevel: 0,
        draggable: !1,
        dragging: !1,
        silent: !1,
        culling: !1,
        cursor: "pointer",
        rectHover: !1,
        progressive: !1,
        incremental: !1,
        inplace: !1,
        beforeBrush: function (t) {},
        afterBrush: function (t) {},
        brush: function (t, e) {},
        getBoundingRect: function () {},
        contain: function (t, e) {
            return this.rectContain(t, e)
        },
        traverse: function (t, e) {
            t.call(e, this)
        },
        rectContain: function (t, e) {
            var n = this.transformCoordToLocal(t, e);
            return this.getBoundingRect().contain(n[0], n[1])
        },
        dirty: function () {
            this.__dirty = !0, this._rect = null, this.__zr && this.__zr.refresh()
        },
        animateStyle: function (t) {
            return this.animate("style", t)
        },
        attrKV: function (t, e) {
            "style" !== t ? hu.prototype.attrKV.call(this, t, e) : this.style.set(e)
        },
        setStyle: function (t, e) {
            return this.style.set(t, e), this.dirty(!1), this
        },
        useStyle: function (t) {
            return this.style = new xu(t, this), this.dirty(!1), this
        }
    }, h(Re, hu), u(Re, Bu), Be.prototype = {
        constructor: Be,
        type: "image",
        brush: function (t, e) {
            var n = this.style,
                i = n.image;
            n.bind(t, this, e);
            var r = this._image = Kt(i, this._image, this, this.onload);
            if (r && Jt(r)) {
                var a = n.x || 0,
                    o = n.y || 0,
                    s = n.width,
                    l = n.height,
                    h = r.width / r.height;
                if (null == s && null != l ? s = l * h : null == l && null != s ? l = s / h : null == s && null == l && (s = r.width, l = r.height), this.setTransform(t), n.sWidth && n.sHeight) {
                    var u = n.sx || 0,
                        c = n.sy || 0;
                    t.drawImage(r, u, c, n.sWidth, n.sHeight, a, o, s, l)
                } else if (n.sx && n.sy) {
                    var f = s - (u = n.sx),
                        d = l - (c = n.sy);
                    t.drawImage(r, u, c, f, d, a, o, s, l)
                } else t.drawImage(r, a, o, s, l);
                null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
            }
        },
        getBoundingRect: function () {
            var t = this.style;
            return this._rect || (this._rect = new Rt(t.x || 0, t.y || 0, t.width || 0, t.height || 0)), this._rect
        }
    }, h(Be, Re);
    var zu = new Rt(0, 0, 0, 0),
        Fu = new Rt(0, 0, 0, 0),
        Vu = function (t, e, n) {
            this.type = "canvas";
            var i = !t.nodeName || "CANVAS" === t.nodeName.toUpperCase();
            this._opts = n = a({}, n || {}), this.dpr = n.devicePixelRatio || au, this._singleCanvas = i, this.root = t;
            var r = t.style;
            r && (r["-webkit-tap-highlight-color"] = "transparent", r["-webkit-user-select"] = r["user-select"] = r["-webkit-touch-callout"] = "none", t.innerHTML = ""), this.storage = e;
            var o = this._zlevelList = [],
                s = this._layers = {};
            if (this._layerConfig = {}, this._needsManuallyCompositing = !1, i) {
                var l = t.width,
                    h = t.height;
                null != n.width && (l = n.width), null != n.height && (h = n.height), this.dpr = n.devicePixelRatio || 1, t.width = l * this.dpr, t.height = h * this.dpr, this._width = l, this._height = h;
                var u = new Iu(t, this, this.dpr);
                u.__builtin__ = !0, u.initContext(), s[314159] = u, u.zlevel = 314159, o.push(314159), this._domRoot = t
            } else {
                this._width = this._getSize(0), this._height = this._getSize(1);
                var c = this._domRoot = Ge(this._width, this._height);
                t.appendChild(c)
            }
            this._hoverlayer = null, this._hoverElements = []
        };
    Vu.prototype = {
        constructor: Vu,
        getType: function () {
            return "canvas"
        },
        isSingleCanvas: function () {
            return this._singleCanvas
        },
        getViewportRoot: function () {
            return this._domRoot
        },
        getViewportRootOffset: function () {
            var t = this.getViewportRoot();
            if (t) return {
                offsetLeft: t.offsetLeft || 0,
                offsetTop: t.offsetTop || 0
            }
        },
        refresh: function (t) {
            var e = this.storage.getDisplayList(!0),
                n = this._zlevelList;
            this._redrawId = Math.random(), this._paintList(e, t, this._redrawId);
            for (var i = 0; i < n.length; i++) {
                var r = n[i],
                    a = this._layers[r];
                if (!a.__builtin__ && a.refresh) {
                    var o = 0 === i ? this._backgroundColor : null;
                    a.refresh(o)
                }
            }
            return this.refreshHover(), this
        },
        addHover: function (t, e) {
            if (!t.__hoverMir) {
                var n = new t.constructor({
                    style: t.style,
                    shape: t.shape
                });
                n.__from = t, t.__hoverMir = n, n.setStyle(e), this._hoverElements.push(n)
            }
        },
        removeHover: function (t) {
            var e = t.__hoverMir,
                n = this._hoverElements,
                i = l(n, e);
            i >= 0 && n.splice(i, 1), t.__hoverMir = null
        },
        clearHover: function (t) {
            for (var e = this._hoverElements, n = 0; n < e.length; n++) {
                var i = e[n].__from;
                i && (i.__hoverMir = null)
            }
            e.length = 0
        },
        refreshHover: function () {
            var t = this._hoverElements,
                e = t.length,
                n = this._hoverlayer;
            if (n && n.clear(), e) {
                qt(t, this.storage.displayableSortFunc), n || (n = this._hoverlayer = this.getLayer(1e5));
                var i = {};
                n.ctx.save();
                for (var r = 0; r < e;) {
                    var a = t[r],
                        o = a.__from;
                    o && o.__zr ? (r++, o.invisible || (a.transform = o.transform, a.invTransform = o.invTransform, a.__clipPaths = o.__clipPaths, this._doPaintEl(a, n, !0, i))) : (t.splice(r, 1), o.__hoverMir = null, e--)
                }
                n.ctx.restore()
            }
        },
        getHoverLayer: function () {
            return this.getLayer(1e5)
        },
        _paintList: function (t, e, n) {
            if (this._redrawId === n) {
                e = e || !1, this._updateLayerStatus(t);
                var i = this._doPaintList(t, e);
                if (this._needsManuallyCompositing && this._compositeManually(), !i) {
                    var r = this;
                    Tu(function () {
                        r._paintList(t, e, n)
                    })
                }
            }
        },
        _compositeManually: function () {
            var t = this.getLayer(314159).ctx,
                e = this._domRoot.width,
                n = this._domRoot.height;
            t.clearRect(0, 0, e, n), this.eachBuiltinLayer(function (i) {
                i.virtual && t.drawImage(i.dom, 0, 0, e, n)
            })
        },
        _doPaintList: function (t, e) {
            for (var n = [], i = 0; i < this._zlevelList.length; i++) {
                var r = this._zlevelList[i];
                (s = this._layers[r]).__builtin__ && s !== this._hoverlayer && (s.__dirty || e) && n.push(s)
            }
            for (var a = !0, o = 0; o < n.length; o++) {
                var s = n[o],
                    l = s.ctx,
                    h = {};
                l.save();
                var u = e ? s.__startIndex : s.__drawIndex,
                    c = !e && s.incremental && Date.now,
                    d = c && Date.now(),
                    p = s.zlevel === this._zlevelList[0] ? this._backgroundColor : null;
                if (s.__startIndex === s.__endIndex) s.clear(!1, p);
                else if (u === s.__startIndex) {
                    var g = t[u];
                    g.incremental && g.notClear && !e || s.clear(!1, p)
                } - 1 === u && (console.error("For some unknown reason. drawIndex is -1"), u = s.__startIndex);
                for (var m = u; m < s.__endIndex; m++) {
                    var v = t[m];
                    if (this._doPaintEl(v, s, e, h), v.__dirty = !1, c && Date.now() - d > 15) break
                }
                s.__drawIndex = m, s.__drawIndex < s.__endIndex && (a = !1), h.prevElClipPaths && l.restore(), l.restore()
            }
            return _h.wxa && f(this._layers, function (t) {
                t && t.ctx && t.ctx.draw && t.ctx.draw()
            }), a
        },
        _doPaintEl: function (t, e, n, i) {
            var r = e.ctx,
                a = t.transform;
            if ((e.__dirty || n) && !t.invisible && 0 !== t.style.opacity && (!a || a[0] || a[3]) && (!t.culling || !Ve(t, this._width, this._height))) {
                var o = t.__clipPaths;
                i.prevElClipPaths && !We(o, i.prevElClipPaths) || (i.prevElClipPaths && (e.ctx.restore(), i.prevElClipPaths = null, i.prevEl = null), o && (r.save(), He(o, r), i.prevElClipPaths = o)), t.beforeBrush && t.beforeBrush(r), t.brush(r, i.prevEl || null), i.prevEl = t, t.afterBrush && t.afterBrush(r)
            }
        },
        getLayer: function (t, e) {
            this._singleCanvas && !this._needsManuallyCompositing && (t = 314159);
            var n = this._layers[t];
            return n || ((n = new Iu("zr_" + t, this, this.dpr)).zlevel = t, n.__builtin__ = !0, this._layerConfig[t] && i(n, this._layerConfig[t], !0), e && (n.virtual = e), this.insertLayer(t, n), n.initContext()), n
        },
        insertLayer: function (t, e) {
            var n = this._layers,
                i = this._zlevelList,
                r = i.length,
                a = null,
                o = -1,
                s = this._domRoot;
            if (n[t]) su("ZLevel " + t + " has been used already");
            else if (Fe(e)) {
                if (r > 0 && t > i[0]) {
                    for (o = 0; o < r - 1 && !(i[o] < t && i[o + 1] > t); o++);
                    a = n[i[o]]
                }
                if (i.splice(o + 1, 0, t), n[t] = e, !e.virtual)
                    if (a) {
                        var l = a.dom;
                        l.nextSibling ? s.insertBefore(e.dom, l.nextSibling) : s.appendChild(e.dom)
                    } else s.firstChild ? s.insertBefore(e.dom, s.firstChild) : s.appendChild(e.dom)
            } else su("Layer of zlevel " + t + " is not valid")
        },
        eachLayer: function (t, e) {
            var n, i, r = this._zlevelList;
            for (i = 0; i < r.length; i++) n = r[i], t.call(e, this._layers[n], n)
        },
        eachBuiltinLayer: function (t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) i = a[r], (n = this._layers[i]).__builtin__ && t.call(e, n, i)
        },
        eachOtherLayer: function (t, e) {
            var n, i, r, a = this._zlevelList;
            for (r = 0; r < a.length; r++) i = a[r], (n = this._layers[i]).__builtin__ || t.call(e, n, i)
        },
        getLayers: function () {
            return this._layers
        },
        _updateLayerStatus: function (t) {
            function e(t) {
                n && (n.__endIndex !== t && (n.__dirty = !0), n.__endIndex = t)
            }
            if (this.eachBuiltinLayer(function (t, e) {
                    t.__dirty = t.__used = !1
                }), this._singleCanvas)
                for (r = 1; r < t.length; r++)
                    if ((o = t[r]).zlevel !== t[r - 1].zlevel || o.incremental) {
                        this._needsManuallyCompositing = !0;
                        break
                    }
            for (var n = null, i = 0, r = 0; r < t.length; r++) {
                var a, o = t[r],
                    s = o.zlevel;
                o.incremental ? ((a = this.getLayer(s + .001, this._needsManuallyCompositing)).incremental = !0, i = 1) : a = this.getLayer(s + (i > 0 ? .01 : 0), this._needsManuallyCompositing), a.__builtin__ || su("ZLevel " + s + " has been used by unkown layer " + a.id), a !== n && (a.__used = !0, a.__startIndex !== r && (a.__dirty = !0), a.__startIndex = r, a.incremental ? a.__drawIndex = -1 : a.__drawIndex = r, e(r), n = a), o.__dirty && (a.__dirty = !0, a.incremental && a.__drawIndex < 0 && (a.__drawIndex = r))
            }
            e(r), this.eachBuiltinLayer(function (t, e) {
                !t.__used && t.getElementCount() > 0 && (t.__dirty = !0, t.__startIndex = t.__endIndex = t.__drawIndex = 0), t.__dirty && t.__drawIndex < 0 && (t.__drawIndex = t.__startIndex)
            })
        },
        clear: function () {
            return this.eachBuiltinLayer(this._clearLayer), this
        },
        _clearLayer: function (t) {
            t.clear()
        },
        setBackgroundColor: function (t) {
            this._backgroundColor = t
        },
        configLayer: function (t, e) {
            if (e) {
                var n = this._layerConfig;
                n[t] ? i(n[t], e, !0) : n[t] = e;
                for (var r = 0; r < this._zlevelList.length; r++) {
                    var a = this._zlevelList[r];
                    a !== t && a !== t + .01 || i(this._layers[a], n[t], !0)
                }
            }
        },
        delLayer: function (t) {
            var e = this._layers,
                n = this._zlevelList,
                i = e[t];
            i && (i.dom.parentNode.removeChild(i.dom), delete e[t], n.splice(l(n, t), 1))
        },
        resize: function (t, e) {
            if (this._domRoot.style) {
                var n = this._domRoot;
                n.style.display = "none";
                var i = this._opts;
                if (null != t && (i.width = t), null != e && (i.height = e), t = this._getSize(0), e = this._getSize(1), n.style.display = "", this._width != t || e != this._height) {
                    n.style.width = t + "px", n.style.height = e + "px";
                    for (var r in this._layers) this._layers.hasOwnProperty(r) && this._layers[r].resize(t, e);
                    f(this._progressiveLayers, function (n) {
                        n.resize(t, e)
                    }), this.refresh(!0)
                }
                this._width = t, this._height = e
            } else {
                if (null == t || null == e) return;
                this._width = t, this._height = e, this.getLayer(314159).resize(t, e)
            }
            return this
        },
        clearLayer: function (t) {
            var e = this._layers[t];
            e && e.clear()
        },
        dispose: function () {
            this.root.innerHTML = "", this.root = this.storage = this._domRoot = this._layers = null
        },
        getRenderedCanvas: function (t) {
            if (t = t || {}, this._singleCanvas && !this._compositeManually) return this._layers[314159].dom;
            var e = new Iu("image", this, t.pixelRatio || this.dpr);
            if (e.initContext(), e.clear(!1, t.backgroundColor || this._backgroundColor), t.pixelRatio <= this.dpr) {
                this.refresh();
                var n = e.dom.width,
                    i = e.dom.height,
                    r = e.ctx;
                this.eachLayer(function (t) {
                    t.__builtin__ ? r.drawImage(t.dom, 0, 0, n, i) : t.renderToCanvas && (e.ctx.save(), t.renderToCanvas(e.ctx), e.ctx.restore())
                })
            } else
                for (var a = {}, o = this.storage.getDisplayList(!0), s = 0; s < o.length; s++) {
                    var l = o[s];
                    this._doPaintEl(l, e, !0, a)
                }
            return e.dom
        },
        getWidth: function () {
            return this._width
        },
        getHeight: function () {
            return this._height
        },
        _getSize: function (t) {
            var e = this._opts,
                n = ["width", "height"][t],
                i = ["clientWidth", "clientHeight"][t],
                r = ["paddingLeft", "paddingTop"][t],
                a = ["paddingRight", "paddingBottom"][t];
            if (null != e[n] && "auto" !== e[n]) return parseFloat(e[n]);
            var o = this.root,
                s = document.defaultView.getComputedStyle(o);
            return (o[i] || ze(s[n]) || ze(o.style[n])) - (ze(s[r]) || 0) - (ze(s[a]) || 0) | 0
        },
        pathToImage: function (t, e) {
            e = e || this.dpr;
            var n = document.createElement("canvas"),
                i = n.getContext("2d"),
                r = t.getBoundingRect(),
                a = t.style,
                o = a.shadowBlur * e,
                s = a.shadowOffsetX * e,
                l = a.shadowOffsetY * e,
                h = a.hasStroke() ? a.lineWidth : 0,
                u = Math.max(h / 2, -s + o),
                c = Math.max(h / 2, s + o),
                f = Math.max(h / 2, -l + o),
                d = Math.max(h / 2, l + o),
                p = r.width + u + c,
                g = r.height + f + d;
            n.width = p * e, n.height = g * e, i.scale(e, e), i.clearRect(0, 0, p, g), i.dpr = e;
            var m = {
                position: t.position,
                rotation: t.rotation,
                scale: t.scale
            };
            t.position = [u - r.x, f - r.y], t.rotation = 0, t.scale = [1, 1], t.updateTransform(), t && t.brush(i);
            var v = new Be({
                style: {
                    x: 0,
                    y: 0,
                    image: n
                }
            });
            return null != m.position && (v.position = t.position = m.position), null != m.rotation && (v.rotation = t.rotation = m.rotation), null != m.scale && (v.scale = t.scale = m.scale), v
        }
    };
    var Wu = "undefined" != typeof window && !!window.addEventListener,
        Hu = /^(?:mouse|pointer|contextmenu|drag|drop)|click/,
        Gu = function (t) {
            t = t || {}, this.stage = t.stage || {}, this.onframe = t.onframe || function () {}, this._clips = [], this._running = !1, this._time, this._pausedTime, this._pauseStart, this._paused = !1, Bh.call(this)
        };
    Gu.prototype = {
        constructor: Gu,
        addClip: function (t) {
            this._clips.push(t)
        },
        addAnimator: function (t) {
            t.animation = this;
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.addClip(e[n])
        },
        removeClip: function (t) {
            var e = l(this._clips, t);
            e >= 0 && this._clips.splice(e, 1)
        },
        removeAnimator: function (t) {
            for (var e = t.getClips(), n = 0; n < e.length; n++) this.removeClip(e[n]);
            t.animation = null
        },
        _update: function () {
            for (var t = (new Date).getTime() - this._pausedTime, e = t - this._time, n = this._clips, i = n.length, r = [], a = [], o = 0; o < i; o++) {
                var s = n[o],
                    l = s.step(t, e);
                l && (r.push(l), a.push(s))
            }
            for (o = 0; o < i;) n[o]._needsRemove ? (n[o] = n[i - 1], n.pop(), i--) : o++;
            i = r.length;
            for (o = 0; o < i; o++) a[o].fire(r[o]);
            this._time = t, this.onframe(e), this.trigger("frame", e), this.stage.update && this.stage.update()
        },
        _startLoop: function () {
            function t() {
                e._running && (Tu(t), !e._paused && e._update())
            }
            var e = this;
            this._running = !0, Tu(t)
        },
        start: function () {
            this._time = (new Date).getTime(), this._pausedTime = 0, this._startLoop()
        },
        stop: function () {
            this._running = !1
        },
        pause: function () {
            this._paused || (this._pauseStart = (new Date).getTime(), this._paused = !0)
        },
        resume: function () {
            this._paused && (this._pausedTime += (new Date).getTime() - this._pauseStart, this._paused = !1)
        },
        clear: function () {
            this._clips = []
        },
        isFinished: function () {
            return !this._clips.length
        },
        animate: function (t, e) {
            var n = new iu(t, (e = e || {}).loop, e.getter, e.setter);
            return this.addAnimator(n), n
        }
    }, u(Gu, Bh);
    var qu = function () {
        this._track = []
    };
    qu.prototype = {
        constructor: qu,
        recognize: function (t, e, n) {
            return this._doTrack(t, e, n), this._recognize(t)
        },
        clear: function () {
            return this._track.length = 0, this
        },
        _doTrack: function (t, e, n) {
            var i = t.touches;
            if (i) {
                for (var r = {
                        points: [],
                        touches: [],
                        target: e,
                        event: t
                    }, a = 0, o = i.length; a < o; a++) {
                    var s = i[a],
                        l = Xe(n, s, {});
                    r.points.push([l.zrX, l.zrY]), r.touches.push(s)
                }
                this._track.push(r)
            }
        },
        _recognize: function (t) {
            for (var e in Xu)
                if (Xu.hasOwnProperty(e)) {
                    var n = Xu[e](this._track, t);
                    if (n) return n
                }
        }
    };
    var Xu = {
            pinch: function (t, e) {
                var n = t.length;
                if (n) {
                    var i = (t[n - 1] || {}).points,
                        r = (t[n - 2] || {}).points || i;
                    if (r && r.length > 1 && i && i.length > 1) {
                        var a = $e(i) / $e(r);
                        !isFinite(a) && (a = 1), e.pinchScale = a;
                        var o = Ke(i);
                        return e.pinchX = o[0], e.pinchY = o[1], {
                            type: "pinch",
                            target: t[0].target,
                            event: e
                        }
                    }
                }
            }
        },
        Uu = ["click", "dblclick", "mousewheel", "mouseout", "mouseup", "mousedown", "mousemove", "contextmenu"],
        Yu = ["touchstart", "touchend", "touchmove"],
        ju = {
            pointerdown: 1,
            pointerup: 1,
            pointermove: 1,
            pointerout: 1
        },
        Zu = d(Uu, function (t) {
            var e = t.replace("mouse", "pointer");
            return ju[e] ? e : t
        }),
        $u = {
            mousemove: function (t) {
                t = Ye(this.dom, t), this.trigger("mousemove", t)
            },
            mouseout: function (t) {
                var e = (t = Ye(this.dom, t)).toElement || t.relatedTarget;
                if (e != this.dom)
                    for (; e && 9 != e.nodeType;) {
                        if (e === this.dom) return;
                        e = e.parentNode
                    }
                this.trigger("mouseout", t)
            },
            touchstart: function (t) {
                (t = Ye(this.dom, t)).zrByTouch = !0, this._lastTouchMoment = new Date, Je(this, t, "start"), $u.mousemove.call(this, t), $u.mousedown.call(this, t), tn(this)
            },
            touchmove: function (t) {
                (t = Ye(this.dom, t)).zrByTouch = !0, Je(this, t, "change"), $u.mousemove.call(this, t), tn(this)
            },
            touchend: function (t) {
                (t = Ye(this.dom, t)).zrByTouch = !0, Je(this, t, "end"), $u.mouseup.call(this, t), +new Date - this._lastTouchMoment < 300 && $u.click.call(this, t), tn(this)
            },
            pointerdown: function (t) {
                $u.mousedown.call(this, t)
            },
            pointermove: function (t) {
                en(t) || $u.mousemove.call(this, t)
            },
            pointerup: function (t) {
                $u.mouseup.call(this, t)
            },
            pointerout: function (t) {
                en(t) || $u.mouseout.call(this, t)
            }
        };
    f(["click", "mousedown", "mouseup", "mousewheel", "dblclick", "contextmenu"], function (t) {
        $u[t] = function (e) {
            e = Ye(this.dom, e), this.trigger(t, e)
        }
    });
    var Ku = rn.prototype;
    Ku.dispose = function () {
        for (var t = Uu.concat(Yu), e = 0; e < t.length; e++) {
            var n = t[e];
            Ze(this.dom, Qe(n), this._handlers[n])
        }
    }, Ku.setCursor = function (t) {
        this.dom.style && (this.dom.style.cursor = t || "default")
    }, u(rn, Bh);
    var Qu = !_h.canvasSupported,
        Ju = {
            canvas: Vu
        },
        tc = function (t, e, n) {
            n = n || {}, this.dom = e, this.id = t;
            var i = this,
                r = new mu,
                a = n.renderer;
            if (Qu) {
                if (!Ju.vml) throw new Error("You need to require 'zrender/vml/vml' to support IE8");
                a = "vml"
            } else a && Ju[a] || (a = "canvas");
            var o = new Ju[a](e, r, n, t);
            this.storage = r, this.painter = o;
            var s = _h.node || _h.worker ? null : new rn(o.getViewportRoot());
            this.handler = new Vh(r, o, s, o.root), this.animation = new Gu({
                stage: {
                    update: m(this.flush, this)
                }
            }), this.animation.start(), this._needsRefresh;
            var l = r.delFromStorage,
                h = r.addToStorage;
            r.delFromStorage = function (t) {
                l.call(r, t), t && t.removeSelfFromZr(i)
            }, r.addToStorage = function (t) {
                h.call(r, t), t.addSelfToZr(i)
            }
        };
    tc.prototype = {
        constructor: tc,
        getId: function () {
            return this.id
        },
        add: function (t) {
            this.storage.addRoot(t), this._needsRefresh = !0
        },
        remove: function (t) {
            this.storage.delRoot(t), this._needsRefresh = !0
        },
        configLayer: function (t, e) {
            this.painter.configLayer && this.painter.configLayer(t, e), this._needsRefresh = !0
        },
        setBackgroundColor: function (t) {
            this.painter.setBackgroundColor && this.painter.setBackgroundColor(t), this._needsRefresh = !0
        },
        refreshImmediately: function () {
            this._needsRefresh = !1, this.painter.refresh(), this._needsRefresh = !1
        },
        refresh: function () {
            this._needsRefresh = !0
        },
        flush: function () {
            var t;
            this._needsRefresh && (t = !0, this.refreshImmediately()), this._needsRefreshHover && (t = !0, this.refreshHoverImmediately()), t && this.trigger("rendered")
        },
        addHover: function (t, e) {
            this.painter.addHover && (this.painter.addHover(t, e), this.refreshHover())
        },
        removeHover: function (t) {
            this.painter.removeHover && (this.painter.removeHover(t), this.refreshHover())
        },
        clearHover: function () {
            this.painter.clearHover && (this.painter.clearHover(), this.refreshHover())
        },
        refreshHover: function () {
            this._needsRefreshHover = !0
        },
        refreshHoverImmediately: function () {
            this._needsRefreshHover = !1, this.painter.refreshHover && this.painter.refreshHover()
        },
        resize: function (t) {
            t = t || {}, this.painter.resize(t.width, t.height), this.handler.resize()
        },
        clearAnimation: function () {
            this.animation.clear()
        },
        getWidth: function () {
            return this.painter.getWidth()
        },
        getHeight: function () {
            return this.painter.getHeight()
        },
        pathToImage: function (t, e) {
            return this.painter.pathToImage(t, e)
        },
        setCursorStyle: function (t) {
            this.handler.setCursorStyle(t)
        },
        findHover: function (t, e) {
            return this.handler.findHover(t, e)
        },
        on: function (t, e, n) {
            this.handler.on(t, e, n)
        },
        off: function (t, e) {
            this.handler.off(t, e)
        },
        trigger: function (t, e) {
            this.handler.trigger(t, e)
        },
        clear: function () {
            this.storage.delRoot(), this.painter.clear()
        },
        dispose: function () {
            this.animation.stop(), this.clear(), this.storage.dispose(), this.painter.dispose(), this.handler.dispose(), this.animation = this.storage = this.painter = this.handler = null
        }
    };
    var ec = f,
        nc = w,
        ic = y,
        rc = "series\0",
        ac = ["fontStyle", "fontWeight", "fontSize", "fontFamily", "rich", "tag", "color", "textBorderColor", "textBorderWidth", "width", "height", "lineHeight", "align", "verticalAlign", "baseline", "shadowColor", "shadowBlur", "shadowOffsetX", "shadowOffsetY", "textShadowColor", "textShadowBlur", "textShadowOffsetX", "textShadowOffsetY", "backgroundColor", "borderColor", "borderWidth", "borderRadius", "padding"],
        oc = 0,
        sc = ".",
        lc = "___EC__COMPONENT__CONTAINER___",
        hc = 0,
        uc = function (t) {
            for (var e = 0; e < t.length; e++) t[e][1] || (t[e][1] = t[e][0]);
            return function (e, n, i) {
                for (var r = {}, a = 0; a < t.length; a++) {
                    var o = t[a][1];
                    if (!(n && l(n, o) >= 0 || i && l(i, o) < 0)) {
                        var s = e.getShallow(o);
                        null != s && (r[t[a][0]] = s)
                    }
                }
                return r
            }
        },
        cc = uc([
            ["lineWidth", "width"],
            ["stroke", "color"],
            ["opacity"],
            ["shadowBlur"],
            ["shadowOffsetX"],
            ["shadowOffsetY"],
            ["shadowColor"]
        ]),
        fc = {
            getLineStyle: function (t) {
                var e = cc(this, t),
                    n = this.getLineDash(e.lineWidth);
                return n && (e.lineDash = n), e
            },
            getLineDash: function (t) {
                null == t && (t = 1);
                var e = this.get("type"),
                    n = Math.max(t, 2),
                    i = 4 * t;
                return "solid" === e || null == e ? null : "dashed" === e ? [i, i] : [n, n]
            }
        },
        dc = uc([
            ["fill", "color"],
            ["shadowBlur"],
            ["shadowOffsetX"],
            ["shadowOffsetY"],
            ["opacity"],
            ["shadowColor"]
        ]),
        pc = {
            getAreaStyle: function (t, e) {
                return dc(this, t, e)
            }
        },
        gc = Math.pow,
        mc = Math.sqrt,
        vc = 1e-8,
        yc = 1e-4,
        _c = mc(3),
        xc = 1 / 3,
        wc = z(),
        bc = z(),
        Mc = z(),
        Sc = Math.min,
        Ic = Math.max,
        Tc = Math.sin,
        Cc = Math.cos,
        Dc = 2 * Math.PI,
        kc = z(),
        Ac = z(),
        Lc = z(),
        Pc = [],
        Oc = [],
        Ec = {
            M: 1,
            L: 2,
            C: 3,
            Q: 4,
            A: 5,
            Z: 6,
            R: 7
        },
        Nc = [],
        Rc = [],
        Bc = [],
        zc = [],
        Fc = Math.min,
        Vc = Math.max,
        Wc = Math.cos,
        Hc = Math.sin,
        Gc = Math.sqrt,
        qc = Math.abs,
        Xc = "undefined" != typeof Float32Array,
        Uc = function (t) {
            this._saveData = !t, this._saveData && (this.data = []), this._ctx = null
        };
    Uc.prototype = {
        constructor: Uc,
        _xi: 0,
        _yi: 0,
        _x0: 0,
        _y0: 0,
        _ux: 0,
        _uy: 0,
        _len: 0,
        _lineDash: null,
        _dashOffset: 0,
        _dashIdx: 0,
        _dashSum: 0,
        setScale: function (t, e) {
            this._ux = qc(1 / au / t) || 0, this._uy = qc(1 / au / e) || 0
        },
        getContext: function () {
            return this._ctx
        },
        beginPath: function (t) {
            return this._ctx = t, t && t.beginPath(), t && (this.dpr = t.dpr), this._saveData && (this._len = 0), this._lineDash && (this._lineDash = null, this._dashOffset = 0), this
        },
        moveTo: function (t, e) {
            return this.addData(Ec.M, t, e), this._ctx && this._ctx.moveTo(t, e), this._x0 = t, this._y0 = e, this._xi = t, this._yi = e, this
        },
        lineTo: function (t, e) {
            var n = qc(t - this._xi) > this._ux || qc(e - this._yi) > this._uy || this._len < 5;
            return this.addData(Ec.L, t, e), this._ctx && n && (this._needsDash() ? this._dashedLineTo(t, e) : this._ctx.lineTo(t, e)), n && (this._xi = t, this._yi = e), this
        },
        bezierCurveTo: function (t, e, n, i, r, a) {
            return this.addData(Ec.C, t, e, n, i, r, a), this._ctx && (this._needsDash() ? this._dashedBezierTo(t, e, n, i, r, a) : this._ctx.bezierCurveTo(t, e, n, i, r, a)), this._xi = r, this._yi = a, this
        },
        quadraticCurveTo: function (t, e, n, i) {
            return this.addData(Ec.Q, t, e, n, i), this._ctx && (this._needsDash() ? this._dashedQuadraticTo(t, e, n, i) : this._ctx.quadraticCurveTo(t, e, n, i)), this._xi = n, this._yi = i, this
        },
        arc: function (t, e, n, i, r, a) {
            return this.addData(Ec.A, t, e, n, n, i, r - i, 0, a ? 0 : 1), this._ctx && this._ctx.arc(t, e, n, i, r, a), this._xi = Wc(r) * n + t, this._yi = Hc(r) * n + t, this
        },
        arcTo: function (t, e, n, i, r) {
            return this._ctx && this._ctx.arcTo(t, e, n, i, r), this
        },
        rect: function (t, e, n, i) {
            return this._ctx && this._ctx.rect(t, e, n, i), this.addData(Ec.R, t, e, n, i), this
        },
        closePath: function () {
            this.addData(Ec.Z);
            var t = this._ctx,
                e = this._x0,
                n = this._y0;
            return t && (this._needsDash() && this._dashedLineTo(e, n), t.closePath()), this._xi = e, this._yi = n, this
        },
        fill: function (t) {
            t && t.fill(), this.toStatic()
        },
        stroke: function (t) {
            t && t.stroke(), this.toStatic()
        },
        setLineDash: function (t) {
            if (t instanceof Array) {
                this._lineDash = t, this._dashIdx = 0;
                for (var e = 0, n = 0; n < t.length; n++) e += t[n];
                this._dashSum = e
            }
            return this
        },
        setLineDashOffset: function (t) {
            return this._dashOffset = t, this
        },
        len: function () {
            return this._len
        },
        setData: function (t) {
            var e = t.length;
            this.data && this.data.length == e || !Xc || (this.data = new Float32Array(e));
            for (var n = 0; n < e; n++) this.data[n] = t[n];
            this._len = e
        },
        appendPath: function (t) {
            t instanceof Array || (t = [t]);
            for (var e = t.length, n = 0, i = this._len, r = 0; r < e; r++) n += t[r].len();
            Xc && this.data instanceof Float32Array && (this.data = new Float32Array(i + n));
            for (r = 0; r < e; r++)
                for (var a = t[r].data, o = 0; o < a.length; o++) this.data[i++] = a[o];
            this._len = i
        },
        addData: function (t) {
            if (this._saveData) {
                var e = this.data;
                this._len + arguments.length > e.length && (this._expandData(), e = this.data);
                for (var n = 0; n < arguments.length; n++) e[this._len++] = arguments[n];
                this._prevCmd = t
            }
        },
        _expandData: function () {
            if (!(this.data instanceof Array)) {
                for (var t = [], e = 0; e < this._len; e++) t[e] = this.data[e];
                this.data = t
            }
        },
        _needsDash: function () {
            return this._lineDash
        },
        _dashedLineTo: function (t, e) {
            var n, i, r = this._dashSum,
                a = this._dashOffset,
                o = this._lineDash,
                s = this._ctx,
                l = this._xi,
                h = this._yi,
                u = t - l,
                c = e - h,
                f = Gc(u * u + c * c),
                d = l,
                p = h,
                g = o.length;
            for (u /= f, c /= f, a < 0 && (a = r + a), d -= (a %= r) * u, p -= a * c; u > 0 && d <= t || u < 0 && d >= t || 0 == u && (c > 0 && p <= e || c < 0 && p >= e);) d += u * (n = o[i = this._dashIdx]), p += c * n, this._dashIdx = (i + 1) % g, u > 0 && d < l || u < 0 && d > l || c > 0 && p < h || c < 0 && p > h || s[i % 2 ? "moveTo" : "lineTo"](u >= 0 ? Fc(d, t) : Vc(d, t), c >= 0 ? Fc(p, e) : Vc(p, e));
            u = d - t, c = p - e, this._dashOffset = -Gc(u * u + c * c)
        },
        _dashedBezierTo: function (t, e, n, i, r, a) {
            var o, s, l, h, u, c = this._dashSum,
                f = this._dashOffset,
                d = this._lineDash,
                p = this._ctx,
                g = this._xi,
                m = this._yi,
                v = kn,
                y = 0,
                _ = this._dashIdx,
                x = d.length,
                w = 0;
            for (f < 0 && (f = c + f), f %= c, o = 0; o < 1; o += .1) s = v(g, t, n, r, o + .1) - v(g, t, n, r, o), l = v(m, e, i, a, o + .1) - v(m, e, i, a, o), y += Gc(s * s + l * l);
            for (; _ < x && !((w += d[_]) > f); _++);
            for (o = (w - f) / y; o <= 1;) h = v(g, t, n, r, o), u = v(m, e, i, a, o), _ % 2 ? p.moveTo(h, u) : p.lineTo(h, u), o += d[_] / y, _ = (_ + 1) % x;
            _ % 2 != 0 && p.lineTo(r, a), s = r - h, l = a - u, this._dashOffset = -Gc(s * s + l * l)
        },
        _dashedQuadraticTo: function (t, e, n, i) {
            var r = n,
                a = i;
            n = (n + 2 * t) / 3, i = (i + 2 * e) / 3, t = (this._xi + 2 * t) / 3, e = (this._yi + 2 * e) / 3, this._dashedBezierTo(t, e, n, i, r, a)
        },
        toStatic: function () {
            var t = this.data;
            t instanceof Array && (t.length = this._len, Xc && (this.data = new Float32Array(t)))
        },
        getBoundingRect: function () {
            Nc[0] = Nc[1] = Bc[0] = Bc[1] = Number.MAX_VALUE, Rc[0] = Rc[1] = zc[0] = zc[1] = -Number.MAX_VALUE;
            for (var t = this.data, e = 0, n = 0, i = 0, r = 0, a = 0; a < t.length;) {
                var o = t[a++];
                switch (1 == a && (i = e = t[a], r = n = t[a + 1]), o) {
                    case Ec.M:
                        e = i = t[a++], n = r = t[a++], Bc[0] = i, Bc[1] = r, zc[0] = i, zc[1] = r;
                        break;
                    case Ec.L:
                        Wn(e, n, t[a], t[a + 1], Bc, zc), e = t[a++], n = t[a++];
                        break;
                    case Ec.C:
                        Hn(e, n, t[a++], t[a++], t[a++], t[a++], t[a], t[a + 1], Bc, zc), e = t[a++], n = t[a++];
                        break;
                    case Ec.Q:
                        Gn(e, n, t[a++], t[a++], t[a], t[a + 1], Bc, zc), e = t[a++], n = t[a++];
                        break;
                    case Ec.A:
                        var s = t[a++],
                            l = t[a++],
                            h = t[a++],
                            u = t[a++],
                            c = t[a++],
                            f = t[a++] + c,
                            d = (t[a++], 1 - t[a++]);
                        1 == a && (i = Wc(c) * h + s, r = Hc(c) * u + l), qn(s, l, h, u, c, f, d, Bc, zc), e = Wc(f) * h + s, n = Hc(f) * u + l;
                        break;
                    case Ec.R:
                        Wn(i = e = t[a++], r = n = t[a++], i + t[a++], r + t[a++], Bc, zc);
                        break;
                    case Ec.Z:
                        e = i, n = r
                }
                j(Nc, Nc, Bc), Z(Rc, Rc, zc)
            }
            return 0 === a && (Nc[0] = Nc[1] = Rc[0] = Rc[1] = 0), new Rt(Nc[0], Nc[1], Rc[0] - Nc[0], Rc[1] - Nc[1])
        },
        rebuildPath: function (t) {
            for (var e, n, i, r, a, o, s = this.data, l = this._ux, h = this._uy, u = this._len, c = 0; c < u;) {
                var f = s[c++];
                switch (1 == c && (e = i = s[c], n = r = s[c + 1]), f) {
                    case Ec.M:
                        e = i = s[c++], n = r = s[c++], t.moveTo(i, r);
                        break;
                    case Ec.L:
                        a = s[c++], o = s[c++], (qc(a - i) > l || qc(o - r) > h || c === u - 1) && (t.lineTo(a, o), i = a, r = o);
                        break;
                    case Ec.C:
                        t.bezierCurveTo(s[c++], s[c++], s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
                        break;
                    case Ec.Q:
                        t.quadraticCurveTo(s[c++], s[c++], s[c++], s[c++]), i = s[c - 2], r = s[c - 1];
                        break;
                    case Ec.A:
                        var d = s[c++],
                            p = s[c++],
                            g = s[c++],
                            m = s[c++],
                            v = s[c++],
                            y = s[c++],
                            _ = s[c++],
                            x = s[c++],
                            w = g > m ? g : m,
                            b = g > m ? 1 : g / m,
                            M = g > m ? m / g : 1,
                            S = v + y;
                        Math.abs(g - m) > .001 ? (t.translate(d, p), t.rotate(_), t.scale(b, M), t.arc(0, 0, w, v, S, 1 - x), t.scale(1 / b, 1 / M), t.rotate(-_), t.translate(-d, -p)) : t.arc(d, p, w, v, S, 1 - x), 1 == c && (e = Wc(v) * g + d, n = Hc(v) * m + p), i = Wc(S) * g + d, r = Hc(S) * m + p;
                        break;
                    case Ec.R:
                        e = i = s[c], n = r = s[c + 1], t.rect(s[c++], s[c++], s[c++], s[c++]);
                        break;
                    case Ec.Z:
                        t.closePath(), i = e, r = n
                }
            }
        }
    }, Uc.CMD = Ec;
    var Yc = 2 * Math.PI,
        jc = 2 * Math.PI,
        Zc = Uc.CMD,
        $c = 2 * Math.PI,
        Kc = 1e-4,
        Qc = [-1, -1, -1],
        Jc = [-1, -1],
        tf = Su.prototype.getCanvasPattern,
        ef = Math.abs,
        nf = new Uc(!0);
    ai.prototype = {
        constructor: ai,
        type: "path",
        __dirtyPath: !0,
        strokeContainThreshold: 5,
        brush: function (t, e) {
            var n = this.style,
                i = this.path || nf,
                r = n.hasStroke(),
                a = n.hasFill(),
                o = n.fill,
                s = n.stroke,
                l = a && !!o.colorStops,
                h = r && !!s.colorStops,
                u = a && !!o.image,
                c = r && !!s.image;
            if (n.bind(t, this, e), this.setTransform(t), this.__dirty) {
                var f;
                l && (f = f || this.getBoundingRect(), this._fillGradient = n.getGradient(t, o, f)), h && (f = f || this.getBoundingRect(), this._strokeGradient = n.getGradient(t, s, f))
            }
            l ? t.fillStyle = this._fillGradient : u && (t.fillStyle = tf.call(o, t)), h ? t.strokeStyle = this._strokeGradient : c && (t.strokeStyle = tf.call(s, t));
            var d = n.lineDash,
                p = n.lineDashOffset,
                g = !!t.setLineDash,
                m = this.getGlobalScale();
            i.setScale(m[0], m[1]), this.__dirtyPath || d && !g && r ? (i.beginPath(t), d && !g && (i.setLineDash(d), i.setLineDashOffset(p)), this.buildPath(i, this.shape, !1), this.path && (this.__dirtyPath = !1)) : (t.beginPath(), this.path.rebuildPath(t)), a && i.fill(t), d && g && (t.setLineDash(d), t.lineDashOffset = p), r && i.stroke(t), d && g && t.setLineDash([]), null != n.text && (this.restoreTransform(t), this.drawRectText(t, this.getBoundingRect()))
        },
        buildPath: function (t, e, n) {},
        createPathProxy: function () {
            this.path = new Uc
        },
        getBoundingRect: function () {
            var t = this._rect,
                e = this.style,
                n = !t;
            if (n) {
                var i = this.path;
                i || (i = this.path = new Uc), this.__dirtyPath && (i.beginPath(), this.buildPath(i, this.shape, !1)), t = i.getBoundingRect()
            }
            if (this._rect = t, e.hasStroke()) {
                var r = this._rectWithStroke || (this._rectWithStroke = t.clone());
                if (this.__dirty || n) {
                    r.copy(t);
                    var a = e.lineWidth,
                        o = e.strokeNoScale ? this.getLineScale() : 1;
                    e.hasFill() || (a = Math.max(a, this.strokeContainThreshold || 4)), o > 1e-10 && (r.width += a / o, r.height += a / o, r.x -= a / o / 2, r.y -= a / o / 2)
                }
                return r
            }
            return t
        },
        contain: function (t, e) {
            var n = this.transformCoordToLocal(t, e),
                i = this.getBoundingRect(),
                r = this.style;
            if (t = n[0], e = n[1], i.contain(t, e)) {
                var a = this.path.data;
                if (r.hasStroke()) {
                    var o = r.lineWidth,
                        s = r.strokeNoScale ? this.getLineScale() : 1;
                    if (s > 1e-10 && (r.hasFill() || (o = Math.max(o, this.strokeContainThreshold)), ri(a, o / s, t, e))) return !0
                }
                if (r.hasFill()) return ii(a, t, e)
            }
            return !1
        },
        dirty: function (t) {
            null == t && (t = !0), t && (this.__dirtyPath = t, this._rect = null), this.__dirty = !0, this.__zr && this.__zr.refresh(), this.__clipTarget && this.__clipTarget.dirty()
        },
        animateShape: function (t) {
            return this.animate("shape", t)
        },
        attrKV: function (t, e) {
            "shape" === t ? (this.setShape(e), this.__dirtyPath = !0, this._rect = null) : Re.prototype.attrKV.call(this, t, e)
        },
        setShape: function (t, e) {
            var n = this.shape;
            if (n) {
                if (w(t))
                    for (var i in t) t.hasOwnProperty(i) && (n[i] = t[i]);
                else n[t] = e;
                this.dirty(!0)
            }
            return this
        },
        getLineScale: function () {
            var t = this.transform;
            return t && ef(t[0] - 1) > 1e-10 && ef(t[3] - 1) > 1e-10 ? Math.sqrt(ef(t[0] * t[3] - t[2] * t[1])) : 1
        }
    }, ai.extend = function (t) {
        var e = function (e) {
            ai.call(this, e), t.style && this.style.extendFrom(t.style, !1);
            var n = t.shape;
            if (n) {
                this.shape = this.shape || {};
                var i = this.shape;
                for (var r in n) !i.hasOwnProperty(r) && n.hasOwnProperty(r) && (i[r] = n[r])
            }
            t.init && t.init.call(this, e)
        };
        h(e, ai);
        for (var n in t) "style" !== n && "shape" !== n && (e.prototype[n] = t[n]);
        return e
    }, h(ai, Re);
    var rf = Uc.CMD,
        af = [
            [],
            [],
            []
        ],
        of = Math.sqrt,
        sf = Math.atan2,
        lf = function (t, e) {
            var n, i, r, a, o, s, l = t.data,
                h = rf.M,
                u = rf.C,
                c = rf.L,
                f = rf.R,
                d = rf.A,
                p = rf.Q;
            for (r = 0, a = 0; r < l.length;) {
                switch (n = l[r++], a = r, i = 0, n) {
                    case h:
                    case c:
                        i = 1;
                        break;
                    case u:
                        i = 3;
                        break;
                    case p:
                        i = 2;
                        break;
                    case d:
                        var g = e[4],
                            m = e[5],
                            v = of (e[0] * e[0] + e[1] * e[1]),
                            y = of (e[2] * e[2] + e[3] * e[3]),
                            _ = sf(-e[1] / y, e[0] / v);
                        l[r] *= v, l[r++] += g, l[r] *= y, l[r++] += m, l[r++] *= v, l[r++] *= y, l[r++] += _, l[r++] += _, a = r += 2;
                        break;
                    case f:
                        s[0] = l[r++], s[1] = l[r++], Y(s, s, e), l[a++] = s[0], l[a++] = s[1], s[0] += l[r++], s[1] += l[r++], Y(s, s, e), l[a++] = s[0], l[a++] = s[1]
                }
                for (o = 0; o < i; o++)(s = af[o])[0] = l[r++], s[1] = l[r++], Y(s, s, e), l[a++] = s[0], l[a++] = s[1]
            }
        },
        hf = ["m", "M", "l", "L", "v", "V", "h", "H", "z", "Z", "c", "C", "q", "Q", "t", "T", "s", "S", "a", "A"],
        uf = Math.sqrt,
        cf = Math.sin,
        ff = Math.cos,
        df = Math.PI,
        pf = function (t) {
            return Math.sqrt(t[0] * t[0] + t[1] * t[1])
        },
        gf = function (t, e) {
            return (t[0] * e[0] + t[1] * e[1]) / (pf(t) * pf(e))
        },
        mf = function (t, e) {
            return (t[0] * e[1] < t[1] * e[0] ? -1 : 1) * Math.acos(gf(t, e))
        },
        vf = function (t) {
            Re.call(this, t)
        };
    vf.prototype = {
        constructor: vf,
        type: "text",
        brush: function (t, e) {
            var n = this.style;
            this.__dirty && ye(n), n.fill = n.stroke = n.shadowBlur = n.shadowColor = n.shadowOffsetX = n.shadowOffsetY = null;
            var i = n.text;
            null != i && (i += ""), n.bind(t, this, e), Ne(i, n) && (this.setTransform(t), xe(this, t, i, n), this.restoreTransform(t))
        },
        getBoundingRect: function () {
            var t = this.style;
            if (this.__dirty && ye(t), !this._rect) {
                var e = t.text;
                null != e ? e += "" : e = "";
                var n = ee(t.text + "", t.font, t.textAlign, t.textVerticalAlign, t.textPadding, t.rich);
                if (n.x += t.x || 0, n.y += t.y || 0, Le(t.textStroke, t.textStrokeWidth)) {
                    var i = t.textStrokeWidth;
                    n.x -= i / 2, n.y -= i / 2, n.width += i, n.height += i
                }
                this._rect = n
            }
            return this._rect
        }
    }, h(vf, Re);
    var yf = ai.extend({
            type: "circle",
            shape: {
                cx: 0,
                cy: 0,
                r: 0
            },
            buildPath: function (t, e, n) {
                n && t.moveTo(e.cx + e.r, e.cy), t.arc(e.cx, e.cy, e.r, 0, 2 * Math.PI, !0)
            }
        }),
        _f = [
            ["shadowBlur", 0],
            ["shadowColor", "#000"],
            ["shadowOffsetX", 0],
            ["shadowOffsetY", 0]
        ],
        xf = function (t) {
            return _h.browser.ie && _h.browser.version >= 11 ? function () {
                var e, n = this.__clipPaths,
                    i = this.style;
                if (n)
                    for (var r = 0; r < n.length; r++) {
                        var a = n[r],
                            o = a && a.shape,
                            s = a && a.type;
                        if (o && ("sector" === s && o.startAngle === o.endAngle || "rect" === s && (!o.width || !o.height))) {
                            for (l = 0; l < _f.length; l++) _f[l][2] = i[_f[l][0]], i[_f[l][0]] = _f[l][1];
                            e = !0;
                            break
                        }
                    }
                if (t.apply(this, arguments), e)
                    for (var l = 0; l < _f.length; l++) i[_f[l][0]] = _f[l][2]
            } : t
        },
        wf = ai.extend({
            type: "sector",
            shape: {
                cx: 0,
                cy: 0,
                r0: 0,
                r: 0,
                startAngle: 0,
                endAngle: 2 * Math.PI,
                clockwise: !0
            },
            brush: xf(ai.prototype.brush),
            buildPath: function (t, e) {
                var n = e.cx,
                    i = e.cy,
                    r = Math.max(e.r0 || 0, 0),
                    a = Math.max(e.r, 0),
                    o = e.startAngle,
                    s = e.endAngle,
                    l = e.clockwise,
                    h = Math.cos(o),
                    u = Math.sin(o);
                t.moveTo(h * r + n, u * r + i), t.lineTo(h * a + n, u * a + i), t.arc(n, i, a, o, s, !l), t.lineTo(Math.cos(s) * r + n, Math.sin(s) * r + i), 0 !== r && t.arc(n, i, r, s, o, l), t.closePath()
            }
        }),
        bf = ai.extend({
            type: "ring",
            shape: {
                cx: 0,
                cy: 0,
                r: 0,
                r0: 0
            },
            buildPath: function (t, e) {
                var n = e.cx,
                    i = e.cy,
                    r = 2 * Math.PI;
                t.moveTo(n + e.r, i), t.arc(n, i, e.r, 0, r, !1), t.moveTo(n + e.r0, i), t.arc(n, i, e.r0, 0, r, !0)
            }
        }),
        Mf = function (t, e) {
            for (var n = t.length, i = [], r = 0, a = 1; a < n; a++) r += U(t[a - 1], t[a]);
            var o = r / 2;
            o = o < n ? n : o;
            for (a = 0; a < o; a++) {
                var s, l, h, u = a / (o - 1) * (e ? n : n - 1),
                    c = Math.floor(u),
                    f = u - c,
                    d = t[c % n];
                e ? (s = t[(c - 1 + n) % n], l = t[(c + 1) % n], h = t[(c + 2) % n]) : (s = t[0 === c ? c : c - 1], l = t[c > n - 2 ? n - 1 : c + 1], h = t[c > n - 3 ? n - 1 : c + 2]);
                var p = f * f,
                    g = f * p;
                i.push([ci(s[0], d[0], l[0], h[0], f, p, g), ci(s[1], d[1], l[1], h[1], f, p, g)])
            }
            return i
        },
        Sf = function (t, e, n, i) {
            var r, a, o, s, l = [],
                h = [],
                u = [],
                c = [];
            if (i) {
                o = [1 / 0, 1 / 0], s = [-1 / 0, -1 / 0];
                for (var f = 0, d = t.length; f < d; f++) j(o, o, t[f]), Z(s, s, t[f]);
                j(o, o, i[0]), Z(s, s, i[1])
            }
            for (var f = 0, d = t.length; f < d; f++) {
                var p = t[f];
                if (n) r = t[f ? f - 1 : d - 1], a = t[(f + 1) % d];
                else {
                    if (0 === f || f === d - 1) {
                        l.push(F(t[f]));
                        continue
                    }
                    r = t[f - 1], a = t[f + 1]
                }
                W(h, a, r), q(h, h, e);
                var g = U(p, r),
                    m = U(p, a),
                    v = g + m;
                0 !== v && (g /= v, m /= v), q(u, h, -g), q(c, h, m);
                var y = V([], p, u),
                    _ = V([], p, c);
                i && (Z(y, y, o), j(y, y, s), Z(_, _, o), j(_, _, s)), l.push(y), l.push(_)
            }
            return n && l.push(l.shift()), l
        },
        If = ai.extend({
            type: "polygon",
            shape: {
                points: null,
                smooth: !1,
                smoothConstraint: null
            },
            buildPath: function (t, e) {
                fi(t, e, !0)
            }
        }),
        Tf = ai.extend({
            type: "polyline",
            shape: {
                points: null,
                smooth: !1,
                smoothConstraint: null
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function (t, e) {
                fi(t, e, !1)
            }
        }),
        Cf = ai.extend({
            type: "rect",
            shape: {
                r: 0,
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            buildPath: function (t, e) {
                var n = e.x,
                    i = e.y,
                    r = e.width,
                    a = e.height;
                e.r ? ve(t, e) : t.rect(n, i, r, a), t.closePath()
            }
        }),
        Df = ai.extend({
            type: "line",
            shape: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                percent: 1
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function (t, e) {
                var n = e.x1,
                    i = e.y1,
                    r = e.x2,
                    a = e.y2,
                    o = e.percent;
                0 !== o && (t.moveTo(n, i), o < 1 && (r = n * (1 - o) + r * o, a = i * (1 - o) + a * o), t.lineTo(r, a))
            },
            pointAt: function (t) {
                var e = this.shape;
                return [e.x1 * (1 - t) + e.x2 * t, e.y1 * (1 - t) + e.y2 * t]
            }
        }),
        kf = [],
        Af = ai.extend({
            type: "bezier-curve",
            shape: {
                x1: 0,
                y1: 0,
                x2: 0,
                y2: 0,
                cpx1: 0,
                cpy1: 0,
                percent: 1
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function (t, e) {
                var n = e.x1,
                    i = e.y1,
                    r = e.x2,
                    a = e.y2,
                    o = e.cpx1,
                    s = e.cpy1,
                    l = e.cpx2,
                    h = e.cpy2,
                    u = e.percent;
                0 !== u && (t.moveTo(n, i), null == l || null == h ? (u < 1 && (Fn(n, o, r, u, kf), o = kf[1], r = kf[2], Fn(i, s, a, u, kf), s = kf[1], a = kf[2]), t.quadraticCurveTo(o, s, r, a)) : (u < 1 && (On(n, o, l, r, u, kf), o = kf[1], l = kf[2], r = kf[3], On(i, s, h, a, u, kf), s = kf[1], h = kf[2], a = kf[3]), t.bezierCurveTo(o, s, l, h, r, a)))
            },
            pointAt: function (t) {
                return di(this.shape, t, !1)
            },
            tangentAt: function (t) {
                var e = di(this.shape, t, !0);
                return X(e, e)
            }
        }),
        Lf = ai.extend({
            type: "arc",
            shape: {
                cx: 0,
                cy: 0,
                r: 0,
                startAngle: 0,
                endAngle: 2 * Math.PI,
                clockwise: !0
            },
            style: {
                stroke: "#000",
                fill: null
            },
            buildPath: function (t, e) {
                var n = e.cx,
                    i = e.cy,
                    r = Math.max(e.r, 0),
                    a = e.startAngle,
                    o = e.endAngle,
                    s = e.clockwise,
                    l = Math.cos(a),
                    h = Math.sin(a);
                t.moveTo(l * r + n, h * r + i), t.arc(n, i, r, a, o, !s)
            }
        }),
        Pf = ai.extend({
            type: "compound",
            shape: {
                paths: null
            },
            _updatePathDirty: function () {
                for (var t = this.__dirtyPath, e = this.shape.paths, n = 0; n < e.length; n++) t = t || e[n].__dirtyPath;
                this.__dirtyPath = t, this.__dirty = this.__dirty || t
            },
            beforeBrush: function () {
                this._updatePathDirty();
                for (var t = this.shape.paths || [], e = this.getGlobalScale(), n = 0; n < t.length; n++) t[n].path || t[n].createPathProxy(), t[n].path.setScale(e[0], e[1])
            },
            buildPath: function (t, e) {
                for (var n = e.paths || [], i = 0; i < n.length; i++) n[i].buildPath(t, n[i].shape, !0)
            },
            afterBrush: function () {
                for (var t = this.shape.paths || [], e = 0; e < t.length; e++) t[e].__dirtyPath = !1
            },
            getBoundingRect: function () {
                return this._updatePathDirty(), ai.prototype.getBoundingRect.call(this)
            }
        }),
        Of = function (t) {
            this.colorStops = t || []
        };
    Of.prototype = {
        constructor: Of,
        addColorStop: function (t, e) {
            this.colorStops.push({
                offset: t,
                color: e
            })
        }
    };
    var Ef = function (t, e, n, i, r, a) {
        this.x = null == t ? 0 : t, this.y = null == e ? 0 : e, this.x2 = null == n ? 1 : n, this.y2 = null == i ? 0 : i, this.type = "linear", this.global = a || !1, Of.call(this, r)
    };
    Ef.prototype = {
        constructor: Ef
    }, h(Ef, Of);
    var Nf = function (t, e, n, i, r) {
        this.x = null == t ? .5 : t, this.y = null == e ? .5 : e, this.r = null == n ? .5 : n, this.type = "radial", this.global = r || !1, Of.call(this, i)
    };
    Nf.prototype = {
        constructor: Nf
    }, h(Nf, Of), pi.prototype.incremental = !0, pi.prototype.clearDisplaybles = function () {
        this._displayables = [], this._temporaryDisplayables = [], this._cursor = 0, this.dirty(), this.notClear = !1
    }, pi.prototype.addDisplayable = function (t, e) {
        e ? this._temporaryDisplayables.push(t) : this._displayables.push(t), this.dirty()
    }, pi.prototype.addDisplayables = function (t, e) {
        e = e || !1;
        for (var n = 0; n < t.length; n++) this.addDisplayable(t[n], e)
    }, pi.prototype.eachPendingDisplayable = function (t) {
        for (e = this._cursor; e < this._displayables.length; e++) t && t(this._displayables[e]);
        for (var e = 0; e < this._temporaryDisplayables.length; e++) t && t(this._temporaryDisplayables[e])
    }, pi.prototype.update = function () {
        this.updateTransform();
        for (t = this._cursor; t < this._displayables.length; t++)(e = this._displayables[t]).parent = this, e.update(), e.parent = null;
        for (var t = 0; t < this._temporaryDisplayables.length; t++) {
            var e = this._temporaryDisplayables[t];
            e.parent = this, e.update(), e.parent = null
        }
    }, pi.prototype.brush = function (t, e) {
        for (n = this._cursor; n < this._displayables.length; n++)(i = this._displayables[n]).beforeBrush && i.beforeBrush(t), i.brush(t, n === this._cursor ? null : this._displayables[n - 1]), i.afterBrush && i.afterBrush(t);
        this._cursor = n;
        for (var n = 0; n < this._temporaryDisplayables.length; n++) {
            var i = this._temporaryDisplayables[n];
            i.beforeBrush && i.beforeBrush(t), i.brush(t, 0 === n ? null : this._temporaryDisplayables[n - 1]), i.afterBrush && i.afterBrush(t)
        }
        this._temporaryDisplayables = [], this.notClear = !0
    };
    var Rf = [];
    pi.prototype.getBoundingRect = function () {
        if (!this._rect) {
            for (var t = new Rt(1 / 0, 1 / 0, -1 / 0, -1 / 0), e = 0; e < this._displayables.length; e++) {
                var n = this._displayables[e],
                    i = n.getBoundingRect().clone();
                n.needLocalTransform() && i.applyTransform(n.getLocalTransform(Rf)), t.union(i)
            }
            this._rect = t
        }
        return this._rect
    }, pi.prototype.contain = function (t, e) {
        var n = this.transformCoordToLocal(t, e);
        if (this.getBoundingRect().contain(n[0], n[1]))
            for (var i = 0; i < this._displayables.length; i++)
                if (this._displayables[i].contain(t, e)) return !0;
        return !1
    }, h(pi, Re);
    var Bf = Math.round,
        zf = Math.max,
        Ff = Math.min,
        Vf = {},
        Wf = (Object.freeze || Object)({
            extendShape: gi,
            extendPath: function (t, e) {
                return ui(t, e)
            },
            makePath: mi,
            makeImage: vi,
            mergePath: function (t, e) {
                for (var n = [], i = t.length, r = 0; r < i; r++) {
                    var a = t[r];
                    a.path || a.createPathProxy(), a.__dirtyPath && a.buildPath(a.path, a.shape, !0), n.push(a.path)
                }
                var o = new ai(e);
                return o.createPathProxy(), o.buildPath = function (t) {
                    t.appendPath(n);
                    var e = t.getContext();
                    e && t.rebuildPath(e)
                }, o
            },
            resizePath: _i,
            subPixelOptimizeLine: xi,
            subPixelOptimizeRect: function (t) {
                var e = t.shape,
                    n = t.style.lineWidth,
                    i = e.x,
                    r = e.y,
                    a = e.width,
                    o = e.height;
                return e.x = wi(e.x, n, !0), e.y = wi(e.y, n, !0), e.width = Math.max(wi(i + a, n, !1) - e.x, 0 === a ? 0 : 1), e.height = Math.max(wi(r + o, n, !1) - e.y, 0 === o ? 0 : 1), t
            },
            subPixelOptimize: wi,
            setHoverStyle: Ei,
            setLabelStyle: Ni,
            setTextStyle: Ri,
            setText: function (t, e, n) {
                var i, r = {
                    isRectText: !0
                };
                !1 === n ? i = !0 : r.autoColor = n, Bi(t, e, r, i), t.host && t.host.dirty && t.host.dirty(!1)
            },
            getFont: Gi,
            updateProps: Xi,
            initProps: Ui,
            getTransform: function (t, e) {
                for (var n = nt([]); t && t !== e;) rt(n, t.getLocalTransform(), n), t = t.parent;
                return n
            },
            applyTransform: Yi,
            transformDirection: function (t, e, n) {
                var i = 0 === e[4] || 0 === e[5] || 0 === e[0] ? 1 : Math.abs(2 * e[4] / e[0]),
                    r = 0 === e[4] || 0 === e[5] || 0 === e[2] ? 1 : Math.abs(2 * e[4] / e[2]),
                    a = ["left" === t ? -i : "right" === t ? i : 0, "top" === t ? -r : "bottom" === t ? r : 0];
                return a = Yi(a, e, n), Math.abs(a[0]) > Math.abs(a[1]) ? a[0] > 0 ? "right" : "left" : a[1] > 0 ? "bottom" : "top"
            },
            groupTransition: ji,
            clipPointsByRect: function (t, e) {
                return d(t, function (t) {
                    var n = t[0];
                    n = zf(n, e.x), n = Ff(n, e.x + e.width);
                    var i = t[1];
                    return i = zf(i, e.y), i = Ff(i, e.y + e.height), [n, i]
                })
            },
            clipRectByRect: function (t, e) {
                var n = zf(t.x, e.x),
                    i = Ff(t.x + t.width, e.x + e.width),
                    r = zf(t.y, e.y),
                    a = Ff(t.y + t.height, e.y + e.height);
                if (i >= n && a >= r) return {
                    x: n,
                    y: r,
                    width: i - n,
                    height: a - r
                }
            },
            createIcon: function (t, e, n) {
                var i = (e = a({
                    rectHover: !0
                }, e)).style = {
                    strokeNoScale: !0
                };
                if (n = n || {
                        x: -1,
                        y: -1,
                        width: 2,
                        height: 2
                    }, t) return 0 === t.indexOf("image://") ? (i.image = t.slice(8), o(i, n), new Be(e)) : mi(t.replace("path://", ""), e, n, "center")
            },
            Group: du,
            Image: Be,
            Text: vf,
            Circle: yf,
            Sector: wf,
            Ring: bf,
            Polygon: If,
            Polyline: Tf,
            Rect: Cf,
            Line: Df,
            BezierCurve: Af,
            Arc: Lf,
            IncrementalDisplayable: pi,
            CompoundPath: Pf,
            LinearGradient: Ef,
            RadialGradient: Nf,
            BoundingRect: Rt
        }),
        Hf = ["textStyle", "color"],
        Gf = {
            getTextColor: function (t) {
                var e = this.ecModel;
                return this.getShallow("color") || (!t && e ? e.get(Hf) : null)
            },
            getFont: function () {
                return Gi({
                    fontStyle: this.getShallow("fontStyle"),
                    fontWeight: this.getShallow("fontWeight"),
                    fontSize: this.getShallow("fontSize"),
                    fontFamily: this.getShallow("fontFamily")
                }, this.ecModel)
            },
            getTextRect: function (t) {
                return ee(t, this.getFont(), this.getShallow("align"), this.getShallow("verticalAlign") || this.getShallow("baseline"), this.getShallow("padding"), this.getShallow("rich"), this.getShallow("truncateText"))
            }
        },
        qf = uc([
            ["fill", "color"],
            ["stroke", "borderColor"],
            ["lineWidth", "borderWidth"],
            ["opacity"],
            ["shadowBlur"],
            ["shadowOffsetX"],
            ["shadowOffsetY"],
            ["shadowColor"],
            ["textPosition"],
            ["textAlign"]
        ]),
        Xf = {
            getItemStyle: function (t, e) {
                var n = qf(this, t, e),
                    i = this.getBorderLineDash();
                return i && (n.lineDash = i), n
            },
            getBorderLineDash: function () {
                var t = this.get("borderType");
                return "solid" === t || null == t ? null : "dashed" === t ? [5, 5] : [1, 1]
            }
        },
        Uf = u,
        Yf = gn();
    Zi.prototype = {
        constructor: Zi,
        init: null,
        mergeOption: function (t) {
            i(this.option, t, !0)
        },
        get: function (t, e) {
            return null == t ? this.option : $i(this.option, this.parsePath(t), !e && Ki(this, t))
        },
        getShallow: function (t, e) {
            var n = this.option,
                i = null == n ? n : n[t],
                r = !e && Ki(this, t);
            return null == i && r && (i = r.getShallow(t)), i
        },
        getModel: function (t, e) {
            var n, i = null == t ? this.option : $i(this.option, t = this.parsePath(t));
            return e = e || (n = Ki(this, t)) && n.getModel(t), new Zi(i, e, this.ecModel)
        },
        isEmpty: function () {
            return null == this.option
        },
        restoreData: function () {},
        clone: function () {
            return new(0, this.constructor)(n(this.option))
        },
        setReadOnly: function (t) {},
        parsePath: function (t) {
            return "string" == typeof t && (t = t.split(".")), t
        },
        customizeGetParent: function (t) {
            Yf(this).getParent = t
        },
        isAnimationEnabled: function () {
            if (!_h.node) {
                if (null != this.option.animation) return !!this.option.animation;
                if (this.parentModel) return this.parentModel.isAnimationEnabled()
            }
        }
    }, bn(Zi), Mn(Zi), Uf(Zi, fc), Uf(Zi, pc), Uf(Zi, Gf), Uf(Zi, Xf);
    var jf = 0,
        Zf = 1e-4,
        $f = /^(?:(\d{4})(?:[-\/](\d{1,2})(?:[-\/](\d{1,2})(?:[T ](\d{1,2})(?::(\d\d)(?::(\d\d)(?:[.,](\d+))?)?)?(Z|[\+\-]\d\d:?\d\d)?)?)?)?)?$/,
        Kf = A,
        Qf = /([&<>"'])/g,
        Jf = {
            "&": "&amp;",
            "<": "&lt;",
            ">": "&gt;",
            '"': "&quot;",
            "'": "&#39;"
        },
        td = ["a", "b", "c", "d", "e", "f", "g"],
        ed = function (t, e) {
            return "{" + t + (null == e ? "" : e) + "}"
        },
        nd = se,
        id = f,
        rd = ["left", "right", "top", "bottom", "width", "height"],
        ad = [
            ["width", "left", "right"],
            ["height", "top", "bottom"]
        ],
        od = (v(yr, "vertical"), v(yr, "horizontal"), {
            getBoxLayoutParams: function () {
                return {
                    left: this.get("left"),
                    top: this.get("top"),
                    right: this.get("right"),
                    bottom: this.get("bottom"),
                    width: this.get("width"),
                    height: this.get("height")
                }
            }
        }),
        sd = gn(),
        ld = Zi.extend({
            type: "component",
            id: "",
            name: "",
            mainType: "",
            subType: "",
            componentIndex: 0,
            defaultOption: null,
            ecModel: null,
            dependentModels: [],
            uid: null,
            layoutMode: null,
            $constructor: function (t, e, n, i) {
                Zi.call(this, t, e, n, i), this.uid = Qi("ec_cpt_model")
            },
            init: function (t, e, n, i) {
                this.mergeDefaultAndTheme(t, n)
            },
            mergeDefaultAndTheme: function (t, e) {
                var n = this.layoutMode,
                    r = n ? wr(t) : {};
                i(t, e.getTheme().get(this.mainType)), i(t, this.getDefaultOption()), n && xr(t, r, n)
            },
            mergeOption: function (t, e) {
                i(this.option, t, !0);
                var n = this.layoutMode;
                n && xr(this.option, t, n)
            },
            optionUpdated: function (t, e) {},
            getDefaultOption: function () {
                var t = sd(this);
                if (!t.defaultOption) {
                    for (var e = [], n = this.constructor; n;) {
                        var r = n.prototype.defaultOption;
                        r && e.push(r), n = n.superClass
                    }
                    for (var a = {}, o = e.length - 1; o >= 0; o--) a = i(a, e[o], !0);
                    t.defaultOption = a
                }
                return t.defaultOption
            },
            getReferringComponents: function (t) {
                return this.ecModel.queryComponents({
                    mainType: t,
                    index: this.get(t + "Index", !0),
                    id: this.get(t + "Id", !0)
                })
            }
        });
    Tn(ld, {
            registerWhenExtend: !0
        }),
        function (t) {
            var e = {};
            t.registerSubTypeDefaulter = function (t, n) {
                t = xn(t), e[t.main] = n
            }, t.determineSubType = function (n, i) {
                var r = i.type;
                if (!r) {
                    var a = xn(n).main;
                    t.hasSubTypes(n) && e[a] && (r = e[a](i))
                }
                return r
            }
        }(ld),
        function (t, e) {
            function n(t) {
                var n = {},
                    a = [];
                return f(t, function (o) {
                    var s = i(n, o),
                        h = r(s.originalDeps = e(o), t);
                    s.entryCount = h.length, 0 === s.entryCount && a.push(o), f(h, function (t) {
                        l(s.predecessor, t) < 0 && s.predecessor.push(t);
                        var e = i(n, t);
                        l(e.successor, t) < 0 && e.successor.push(o)
                    })
                }), {
                    graph: n,
                    noEntryList: a
                }
            }

            function i(t, e) {
                return t[e] || (t[e] = {
                    predecessor: [],
                    successor: []
                }), t[e]
            }

            function r(t, e) {
                var n = [];
                return f(t, function (t) {
                    l(e, t) >= 0 && n.push(t)
                }), n
            }
            t.topologicalTravel = function (t, e, i, r) {
                function a(t) {
                    s[t].entryCount--, 0 === s[t].entryCount && l.push(t)
                }
                if (t.length) {
                    var o = n(e),
                        s = o.graph,
                        l = o.noEntryList,
                        h = {};
                    for (f(t, function (t) {
                            h[t] = !0
                        }); l.length;) {
                        var u = l.pop(),
                            c = s[u],
                            d = !!h[u];
                        d && (i.call(r, u, c.originalDeps.slice()), delete h[u]), f(c.successor, d ? function (t) {
                            h[t] = !0, a(t)
                        } : a)
                    }
                    f(h, function () {
                        throw new Error("Circle dependency may exists")
                    })
                }
            }
        }(ld, function (t) {
            var e = [];
            return f(ld.getClassesByMainType(t), function (t) {
                e = e.concat(t.prototype.dependencies || [])
            }), e = d(e, function (t) {
                return xn(t).main
            }), "dataset" !== t && l(e, "dataset") <= 0 && e.unshift("dataset"), e
        }), u(ld, od);
    var hd = "";
    "undefined" != typeof navigator && (hd = navigator.platform || "");
    var ud = {
            color: ["#c23531", "#2f4554", "#61a0a8", "#d48265", "#91c7ae", "#749f83", "#ca8622", "#bda29a", "#6e7074", "#546570", "#c4ccd3"],
            gradientColor: ["#f6efa6", "#d88273", "#bf444c"],
            textStyle: {
                fontFamily: hd.match(/^Win/) ? "Microsoft YaHei" : "sans-serif",
                fontSize: 12,
                fontStyle: "normal",
                fontWeight: "normal"
            },
            blendMode: null,
            animation: "auto",
            animationDuration: 1e3,
            animationDurationUpdate: 300,
            animationEasing: "exponentialOut",
            animationEasingUpdate: "cubicOut",
            animationThreshold: 2e3,
            progressiveThreshold: 3e3,
            progressive: 400,
            hoverLayerThreshold: 3e3,
            useUTC: !1
        },
        cd = gn(),
        fd = {
            clearColorPalette: function () {
                cd(this).colorIdx = 0, cd(this).colorNameMap = {}
            },
            getColorFromPalette: function (t, e, n) {
                var i = cd(e = e || this),
                    r = i.colorIdx || 0,
                    a = i.colorNameMap = i.colorNameMap || {};
                if (a.hasOwnProperty(t)) return a[t];
                var o = on(this.get("color", !0)),
                    s = this.get("colorLayer", !0),
                    l = null != n && s ? Mr(s, n) : o;
                if ((l = l || o) && l.length) {
                    var h = l[r];
                    return t && (a[t] = h), i.colorIdx = (r + 1) % l.length, h
                }
            }
        },
        dd = {
            cartesian2d: function (t, e, n, i) {
                var r = t.getReferringComponents("xAxis")[0],
                    a = t.getReferringComponents("yAxis")[0];
                e.coordSysDims = ["x", "y"], n.set("x", r), n.set("y", a), Ir(r) && (i.set("x", r), e.firstCategoryDimIndex = 0), Ir(a) && (i.set("y", a), e.firstCategoryDimIndex = 1)
            },
            singleAxis: function (t, e, n, i) {
                var r = t.getReferringComponents("singleAxis")[0];
                e.coordSysDims = ["single"], n.set("single", r), Ir(r) && (i.set("single", r), e.firstCategoryDimIndex = 0)
            },
            polar: function (t, e, n, i) {
                var r = t.getReferringComponents("polar")[0],
                    a = r.findAxisModel("radiusAxis"),
                    o = r.findAxisModel("angleAxis");
                e.coordSysDims = ["radius", "angle"], n.set("radius", a), n.set("angle", o), Ir(a) && (i.set("radius", a), e.firstCategoryDimIndex = 0), Ir(o) && (i.set("angle", o), e.firstCategoryDimIndex = 1)
            },
            geo: function (t, e, n, i) {
                e.coordSysDims = ["lng", "lat"]
            },
            parallel: function (t, e, n, i) {
                var r = t.ecModel,
                    a = r.getComponent("parallel", t.get("parallelIndex")),
                    o = e.coordSysDims = a.dimensions.slice();
                f(a.parallelAxisIndex, function (t, a) {
                    var s = r.getComponent("parallelAxis", t),
                        l = o[a];
                    n.set(l, s), Ir(s) && null == e.firstCategoryDimIndex && (i.set(l, s), e.firstCategoryDimIndex = a)
                })
            }
        },
        pd = "original",
        gd = "arrayRows",
        md = "objectRows",
        vd = "keyedColumns",
        yd = "unknown",
        _d = "typedArray",
        xd = "column",
        wd = "row";
    Tr.seriesDataToSource = function (t) {
        return new Tr({
            data: t,
            sourceFormat: M(t) ? _d : pd,
            fromDataset: !1
        })
    }, Mn(Tr);
    var bd = gn(),
        Md = "\0_ec_inner",
        Sd = Zi.extend({
            init: function (t, e, n, i) {
                n = n || {}, this.option = null, this._theme = new Zi(n), this._optionManager = i
            },
            setOption: function (t, e) {
                L(!(Md in t), "please use chart.getOption()"), this._optionManager.setOption(t, e), this.resetOption(null)
            },
            resetOption: function (t) {
                var e = !1,
                    n = this._optionManager;
                if (!t || "recreate" === t) {
                    var i = n.mountOption("recreate" === t);
                    this.option && "recreate" !== t ? (this.restoreData(), this.mergeOption(i)) : Wr.call(this, i), e = !0
                }
                if ("timeline" !== t && "media" !== t || this.restoreData(), !t || "recreate" === t || "timeline" === t) {
                    var r = n.getTimelineOption(this);
                    r && (this.mergeOption(r), e = !0)
                }
                if (!t || "recreate" === t || "media" === t) {
                    var a = n.getMediaOption(this, this._api);
                    a.length && f(a, function (t) {
                        this.mergeOption(t, e = !0)
                    }, this)
                }
                return e
            },
            mergeOption: function (t) {
                var e = this.option,
                    r = this._componentsMap,
                    o = [];
                kr(this), f(t, function (t, r) {
                    null != t && (ld.hasClass(r) ? r && o.push(r) : e[r] = null == e[r] ? n(t) : i(e[r], t, !0))
                }), ld.topologicalTravel(o, ld.getAllClassMainTypes(), function (n, i) {
                    var o = on(t[n]),
                        s = un(r.get(n), o);
                    cn(s), f(s, function (t, e) {
                        var i = t.option;
                        w(i) && (t.keyInfo.mainType = n, t.keyInfo.subType = Gr(n, i, t.exist))
                    });
                    var l = Hr(r, i);
                    e[n] = [], r.set(n, []), f(s, function (t, i) {
                        var o = t.exist,
                            s = t.option;
                        if (L(w(s) || o, "Empty component definition"), s) {
                            var h = ld.getClass(n, t.keyInfo.subType, !0);
                            if (o && o instanceof h) o.name = t.keyInfo.name, o.mergeOption(s, this), o.optionUpdated(s, !1);
                            else {
                                var u = a({
                                    dependentModels: l,
                                    componentIndex: i
                                }, t.keyInfo);
                                a(o = new h(s, this, this, u), u), o.init(s, this, this, u), o.optionUpdated(null, !0)
                            }
                        } else o.mergeOption({}, this), o.optionUpdated({}, !1);
                        r.get(n)[i] = o, e[n][i] = o.option
                    }, this), "series" === n && qr(this, r.get("series"))
                }, this), this._seriesIndicesMap = R(this._seriesIndices = this._seriesIndices || [])
            },
            getOption: function () {
                var t = n(this.option);
                return f(t, function (e, n) {
                    if (ld.hasClass(n)) {
                        for (var i = (e = on(e)).length - 1; i >= 0; i--) dn(e[i]) && e.splice(i, 1);
                        t[n] = e
                    }
                }), delete t[Md], t
            },
            getTheme: function () {
                return this._theme
            },
            getComponent: function (t, e) {
                var n = this._componentsMap.get(t);
                if (n) return n[e || 0]
            },
            queryComponents: function (t) {
                var e = t.mainType;
                if (!e) return [];
                var n = t.index,
                    i = t.id,
                    r = t.name,
                    a = this._componentsMap.get(e);
                if (!a || !a.length) return [];
                var o;
                if (null != n) y(n) || (n = [n]), o = g(d(n, function (t) {
                    return a[t]
                }), function (t) {
                    return !!t
                });
                else if (null != i) {
                    var s = y(i);
                    o = g(a, function (t) {
                        return s && l(i, t.id) >= 0 || !s && t.id === i
                    })
                } else if (null != r) {
                    var h = y(r);
                    o = g(a, function (t) {
                        return h && l(r, t.name) >= 0 || !h && t.name === r
                    })
                } else o = a.slice();
                return Xr(o, t)
            },
            findComponents: function (t) {
                var e = t.query,
                    n = t.mainType,
                    i = function (t) {
                        var e = n + "Index",
                            i = n + "Id",
                            r = n + "Name";
                        return !t || null == t[e] && null == t[i] && null == t[r] ? null : {
                            mainType: n,
                            index: t[e],
                            id: t[i],
                            name: t[r]
                        }
                    }(e);
                return function (e) {
                    return t.filter ? g(e, t.filter) : e
                }(Xr(i ? this.queryComponents(i) : this._componentsMap.get(n), t))
            },
            eachComponent: function (t, e, n) {
                var i = this._componentsMap;
                "function" == typeof t ? (n = e, e = t, i.each(function (t, i) {
                    f(t, function (t, r) {
                        e.call(n, i, t, r)
                    })
                })) : x(t) ? f(i.get(t), e, n) : w(t) && f(this.findComponents(t), e, n)
            },
            getSeriesByName: function (t) {
                return g(this._componentsMap.get("series"), function (e) {
                    return e.name === t
                })
            },
            getSeriesByIndex: function (t) {
                return this._componentsMap.get("series")[t]
            },
            getSeriesByType: function (t) {
                return g(this._componentsMap.get("series"), function (e) {
                    return e.subType === t
                })
            },
            getSeries: function () {
                return this._componentsMap.get("series").slice()
            },
            getSeriesCount: function () {
                return this._componentsMap.get("series").length
            },
            eachSeries: function (t, e) {
                f(this._seriesIndices, function (n) {
                    var i = this._componentsMap.get("series")[n];
                    t.call(e, i, n)
                }, this)
            },
            eachRawSeries: function (t, e) {
                f(this._componentsMap.get("series"), t, e)
            },
            eachSeriesByType: function (t, e, n) {
                f(this._seriesIndices, function (i) {
                    var r = this._componentsMap.get("series")[i];
                    r.subType === t && e.call(n, r, i)
                }, this)
            },
            eachRawSeriesByType: function (t, e, n) {
                return f(this.getSeriesByType(t), e, n)
            },
            isSeriesFiltered: function (t) {
                return null == this._seriesIndicesMap.get(t.componentIndex)
            },
            getCurrentSeriesIndices: function () {
                return (this._seriesIndices || []).slice()
            },
            filterSeries: function (t, e) {
                qr(this, g(this._componentsMap.get("series"), t, e))
            },
            restoreData: function (t) {
                var e = this._componentsMap;
                qr(this, e.get("series"));
                var n = [];
                e.each(function (t, e) {
                    n.push(e)
                }), ld.topologicalTravel(n, ld.getAllClassMainTypes(), function (n, i) {
                    f(e.get(n), function (e) {
                        ("series" !== n || !Fr(e, t)) && e.restoreData()
                    })
                })
            }
        });
    u(Sd, fd);
    var Id = ["getDom", "getZr", "getWidth", "getHeight", "getDevicePixelRatio", "dispatchAction", "isDisposed", "on", "off", "getDataURL", "getConnectedDataURL", "getModel", "getOption", "getViewOfComponentModel", "getViewOfSeriesModel"],
        Td = {};
    Yr.prototype = {
        constructor: Yr,
        create: function (t, e) {
            var n = [];
            f(Td, function (i, r) {
                var a = i.create(t, e);
                n = n.concat(a || [])
            }), this._coordinateSystems = n
        },
        update: function (t, e) {
            f(this._coordinateSystems, function (n) {
                n.update && n.update(t, e)
            })
        },
        getCoordinateSystems: function () {
            return this._coordinateSystems.slice()
        }
    }, Yr.register = function (t, e) {
        Td[t] = e
    }, Yr.get = function (t) {
        return Td[t]
    };
    var Cd = f,
        Dd = n,
        kd = d,
        Ad = i,
        Ld = /^(min|max)?(.+)$/;
    jr.prototype = {
        constructor: jr,
        setOption: function (t, e) {
            t && f(on(t.series), function (t) {
                t && t.data && M(t.data) && O(t.data)
            }), t = Dd(t, !0);
            var n = this._optionBackup,
                i = Zr.call(this, t, e, !n);
            this._newBaseOption = i.baseOption, n ? (Jr(n.baseOption, i.baseOption), i.timelineOptions.length && (n.timelineOptions = i.timelineOptions), i.mediaList.length && (n.mediaList = i.mediaList), i.mediaDefault && (n.mediaDefault = i.mediaDefault)) : this._optionBackup = i
        },
        mountOption: function (t) {
            var e = this._optionBackup;
            return this._timelineOptions = kd(e.timelineOptions, Dd), this._mediaList = kd(e.mediaList, Dd), this._mediaDefault = Dd(e.mediaDefault), this._currentMediaIndices = [], Dd(t ? e.baseOption : this._newBaseOption)
        },
        getTimelineOption: function (t) {
            var e, n = this._timelineOptions;
            if (n.length) {
                var i = t.getComponent("timeline");
                i && (e = Dd(n[i.getCurrentIndex()], !0))
            }
            return e
        },
        getMediaOption: function (t) {
            var e = this._api.getWidth(),
                n = this._api.getHeight(),
                i = this._mediaList,
                r = this._mediaDefault,
                a = [],
                o = [];
            if (!i.length && !r) return o;
            for (var s = 0, l = i.length; s < l; s++) $r(i[s].query, e, n) && a.push(s);
            return !a.length && r && (a = [-1]), a.length && !Qr(a, this._currentMediaIndices) && (o = kd(a, function (t) {
                return Dd(-1 === t ? r.option : i[t].option)
            })), this._currentMediaIndices = a, o
        }
    };
    var Pd = f,
        Od = w,
        Ed = ["areaStyle", "lineStyle", "nodeStyle", "linkStyle", "chordStyle", "label", "labelLine"],
        Nd = function (t, e) {
            Pd(oa(t.series), function (t) {
                Od(t) && aa(t)
            });
            var n = ["xAxis", "yAxis", "radiusAxis", "angleAxis", "singleAxis", "parallelAxis", "radar"];
            e && n.push("valueAxis", "categoryAxis", "logAxis", "timeAxis"), Pd(n, function (e) {
                Pd(oa(t[e]), function (t) {
                    t && (ia(t, "axisLabel"), ia(t.axisPointer, "label"))
                })
            }), Pd(oa(t.parallel), function (t) {
                var e = t && t.parallelAxisDefault;
                ia(e, "axisLabel"), ia(e && e.axisPointer, "label")
            }), Pd(oa(t.calendar), function (t) {
                ea(t, "itemStyle"), ia(t, "dayLabel"), ia(t, "monthLabel"), ia(t, "yearLabel")
            }), Pd(oa(t.radar), function (t) {
                ia(t, "name")
            }), Pd(oa(t.geo), function (t) {
                Od(t) && (ra(t), Pd(oa(t.regions), function (t) {
                    ra(t)
                }))
            }), Pd(oa(t.timeline), function (t) {
                ra(t), ea(t, "label"), ea(t, "itemStyle"), ea(t, "controlStyle", !0);
                var e = t.data;
                y(e) && f(e, function (t) {
                    w(t) && (ea(t, "label"), ea(t, "itemStyle"))
                })
            }), Pd(oa(t.toolbox), function (t) {
                ea(t, "iconStyle"), Pd(t.feature, function (t) {
                    ea(t, "iconStyle")
                })
            }), ia(sa(t.axisPointer), "label"), ia(sa(t.tooltip).axisPointer, "label")
        },
        Rd = [
            ["x", "left"],
            ["y", "top"],
            ["x2", "right"],
            ["y2", "bottom"]
        ],
        Bd = ["grid", "geo", "parallel", "legend", "toolbox", "title", "visualMap", "dataZoom", "timeline"],
        zd = function (t, e) {
            Nd(t, e), t.series = on(t.series), f(t.series, function (t) {
                if (w(t)) {
                    var e = t.type;
                    if ("pie" !== e && "gauge" !== e || null != t.clockWise && (t.clockwise = t.clockWise), "gauge" === e) {
                        var n = la(t, "pointer.color");
                        null != n && ha(t, "itemStyle.normal.color", n)
                    }
                    ua(t)
                }
            }), t.dataRange && (t.visualMap = t.dataRange), f(Bd, function (e) {
                var n = t[e];
                n && (y(n) || (n = [n]), f(n, function (t) {
                    ua(t)
                }))
            })
        },
        Fd = fa.prototype;
    Fd.pure = !1, Fd.persistent = !0, Fd.getSource = function () {
        return this._source
    };
    var Vd = {
            arrayRows_column: {
                pure: !0,
                count: function () {
                    return Math.max(0, this._data.length - this._source.startIndex)
                },
                getItem: function (t) {
                    return this._data[t + this._source.startIndex]
                },
                appendData: ga
            },
            arrayRows_row: {
                pure: !0,
                count: function () {
                    var t = this._data[0];
                    return t ? Math.max(0, t.length - this._source.startIndex) : 0
                },
                getItem: function (t) {
                    t += this._source.startIndex;
                    for (var e = [], n = this._data, i = 0; i < n.length; i++) {
                        var r = n[i];
                        e.push(r ? r[t] : null)
                    }
                    return e
                },
                appendData: function () {
                    throw new Error('Do not support appendData when set seriesLayoutBy: "row".')
                }
            },
            objectRows: {
                pure: !0,
                count: da,
                getItem: pa,
                appendData: ga
            },
            keyedColumns: {
                pure: !0,
                count: function () {
                    var t = this._source.dimensionsDefine[0].name,
                        e = this._data[t];
                    return e ? e.length : 0
                },
                getItem: function (t) {
                    for (var e = [], n = this._source.dimensionsDefine, i = 0; i < n.length; i++) {
                        var r = this._data[n[i].name];
                        e.push(r ? r[t] : null)
                    }
                    return e
                },
                appendData: function (t) {
                    var e = this._data;
                    f(t, function (t, n) {
                        for (var i = e[n] || (e[n] = []), r = 0; r < (t || []).length; r++) i.push(t[r])
                    })
                }
            },
            original: {
                count: da,
                getItem: pa,
                appendData: ga
            },
            typedArray: {
                persistent: !1,
                pure: !0,
                count: function () {
                    return this._data ? this._data.length / this._dimSize : 0
                },
                getItem: function (t, e) {
                    t -= this._offset, e = e || [];
                    for (var n = this._dimSize * t, i = 0; i < this._dimSize; i++) e[i] = this._data[n + i];
                    return e
                },
                appendData: function (t) {
                    this._data = t
                },
                clean: function () {
                    this._offset += this.count(), this._data = null
                }
            }
        },
        Wd = {
            arrayRows: ma,
            objectRows: function (t, e, n, i) {
                return null != n ? t[i] : t
            },
            keyedColumns: ma,
            original: function (t, e, n, i) {
                var r = ln(t);
                return null != n && r instanceof Array ? r[n] : r
            },
            typedArray: ma
        },
        Hd = {
            arrayRows: va,
            objectRows: function (t, e, n, i) {
                return ya(t[e], this._dimensionInfos[e])
            },
            keyedColumns: va,
            original: function (t, e, n, i) {
                var r = t && (null == t.value ? t : t.value);
                return !this._rawData.pure && hn(t) && (this.hasItemOption = !0), ya(r instanceof Array ? r[i] : r, this._dimensionInfos[e])
            },
            typedArray: function (t, e, n, i) {
                return t[i]
            }
        },
        Gd = /\{@(.+?)\}/g,
        qd = {
            getDataParams: function (t, e) {
                var n = this.getData(e),
                    i = this.getRawValue(t, e),
                    r = n.getRawIndex(t),
                    a = n.getName(t),
                    o = n.getRawDataItem(t),
                    s = n.getItemVisual(t, "color");
                return {
                    componentType: this.mainType,
                    componentSubType: this.subType,
                    seriesType: "series" === this.mainType ? this.subType : null,
                    seriesIndex: this.seriesIndex,
                    seriesId: this.id,
                    seriesName: this.name,
                    name: a,
                    dataIndex: r,
                    data: o,
                    dataType: e,
                    value: i,
                    color: s,
                    marker: gr(s),
                    $vars: ["seriesName", "name", "value"]
                }
            },
            getFormattedLabel: function (t, e, n, i, r) {
                e = e || "normal";
                var a = this.getData(n),
                    o = a.getItemModel(t),
                    s = this.getDataParams(t, n);
                null != i && s.value instanceof Array && (s.value = s.value[i]);
                var l = o.get("normal" === e ? [r || "label", "formatter"] : [e, r || "label", "formatter"]);
                return "function" == typeof l ? (s.status = e, l(s)) : "string" == typeof l ? pr(l, s).replace(Gd, function (e, n) {
                    var i = n.length;
                    return "[" === n.charAt(0) && "]" === n.charAt(i - 1) && (n = +n.slice(1, i - 1)), _a(a, t, n)
                }) : void 0
            },
            getRawValue: function (t, e) {
                return _a(this.getData(e), t)
            },
            formatTooltip: function () {}
        },
        Xd = ba.prototype;
    Xd.perform = function (t) {
        function e(t) {
            return !(t >= 1) && (t = 1), t
        }
        var n = this._upstream,
            i = t && t.skip;
        if (this._dirty && n) {
            var r = this.context;
            r.data = r.outputData = n.context.outputData
        }
        this.__pipeline && (this.__pipeline.currentTask = this);
        var a;
        this._plan && !i && (a = this._plan(this.context));
        var o = e(this._modBy),
            s = this._modDataCount || 0,
            l = e(t && t.modBy),
            h = t && t.modDataCount || 0;
        o === l && s === h || (a = "reset");
        var u;
        (this._dirty || "reset" === a) && (this._dirty = !1, u = Sa(this, i)), this._modBy = l, this._modDataCount = h;
        var c = t && t.step;
        if (this._dueEnd = n ? n._outputDueEnd : this._count ? this._count(this.context) : 1 / 0, this._progress) {
            var f = this._dueIndex,
                d = Math.min(null != c ? this._dueIndex + c : 1 / 0, this._dueEnd);
            if (!i && (u || f < d)) {
                var p = this._progress;
                if (y(p))
                    for (var g = 0; g < p.length; g++) Ma(this, p[g], f, d, l, h);
                else Ma(this, p, f, d, l, h)
            }
            this._dueIndex = d;
            var m = null != this._settedOutputEnd ? this._settedOutputEnd : d;
            this._outputDueEnd = m
        } else this._dueIndex = this._outputDueEnd = null != this._settedOutputEnd ? this._settedOutputEnd : this._dueEnd;
        return this.unfinished()
    };
    var Ud = function () {
        function t() {
            return i < n ? i++ : null
        }

        function e() {
            var t = i % o * r + Math.ceil(i / o),
                e = i >= n ? null : t < a ? t : i;
            return i++, e
        }
        var n, i, r, a, o, s = {
            reset: function (l, h, u, c) {
                i = l, n = h, r = u, a = c, o = Math.ceil(a / r), s.next = r > 1 && a > 0 ? e : t
            }
        };
        return s
    }();
    Xd.dirty = function () {
        this._dirty = !0, this._onDirty && this._onDirty(this.context)
    }, Xd.unfinished = function () {
        return this._progress && this._dueIndex < this._dueEnd
    }, Xd.pipe = function (t) {
        (this._downstream !== t || this._dirty) && (this._downstream = t, t._upstream = this, t.dirty())
    }, Xd.dispose = function () {
        this._disposed || (this._upstream && (this._upstream._downstream = null), this._downstream && (this._downstream._upstream = null), this._dirty = !1, this._disposed = !0)
    }, Xd.getUpstream = function () {
        return this._upstream
    }, Xd.getDownstream = function () {
        return this._downstream
    }, Xd.setOutputEnd = function (t) {
        this._outputDueEnd = this._settedOutputEnd = t
    };
    var Yd = gn(),
        jd = ld.extend({
            type: "series.__base__",
            seriesIndex: 0,
            coordinateSystem: null,
            defaultOption: null,
            legendDataProvider: null,
            visualColorAccessPath: "itemStyle.color",
            layoutMode: null,
            init: function (t, e, n, i) {
                this.seriesIndex = this.componentIndex, this.dataTask = wa({
                    count: Ca,
                    reset: Da
                }), this.dataTask.context = {
                    model: this
                }, this.mergeDefaultAndTheme(t, n), Ar(this);
                var r = this.getInitialData(t, n);
                Aa(r, this), this.dataTask.context.data = r, Yd(this).dataBeforeProcessed = r, Ia(this)
            },
            mergeDefaultAndTheme: function (t, e) {
                var n = this.layoutMode,
                    r = n ? wr(t) : {},
                    a = this.subType;
                ld.hasClass(a) && (a += "Series"), i(t, e.getTheme().get(this.subType)), i(t, this.getDefaultOption()), sn(t, "label", ["show"]), this.fillDataTextStyle(t.data), n && xr(t, r, n)
            },
            mergeOption: function (t, e) {
                t = i(this.option, t, !0), this.fillDataTextStyle(t.data);
                var n = this.layoutMode;
                n && xr(this.option, t, n), Ar(this);
                var r = this.getInitialData(t, e);
                Aa(r, this), this.dataTask.dirty(), this.dataTask.context.data = r, Yd(this).dataBeforeProcessed = r, Ia(this)
            },
            fillDataTextStyle: function (t) {
                if (t && !M(t))
                    for (var e = ["show"], n = 0; n < t.length; n++) t[n] && t[n].label && sn(t[n], "label", e)
            },
            getInitialData: function () {},
            appendData: function (t) {
                this.getRawData().appendData(t.data)
            },
            getData: function (t) {
                var e = Pa(this);
                if (e) {
                    var n = e.context.data;
                    return null == t ? n : n.getLinkedData(t)
                }
                return Yd(this).data
            },
            setData: function (t) {
                var e = Pa(this);
                if (e) {
                    var n = e.context;
                    n.data !== t && e.modifyOutputEnd && e.setOutputEnd(t.count()), n.outputData = t, e !== this.dataTask && (n.data = t)
                }
                Yd(this).data = t
            },
            getSource: function () {
                return Dr(this)
            },
            getRawData: function () {
                return Yd(this).dataBeforeProcessed
            },
            getBaseAxis: function () {
                var t = this.coordinateSystem;
                return t && t.getBaseAxis && t.getBaseAxis()
            },
            formatTooltip: function (t, e, n) {
                function i(t) {
                    return dr(fr(t))
                }
                var r = this.getData(),
                    a = r.mapDimension("defaultedTooltip", !0),
                    o = a.length,
                    s = this.getRawValue(t),
                    l = y(s),
                    h = r.getItemVisual(t, "color");
                w(h) && h.colorStops && (h = (h.colorStops[0] || {}).color), h = h || "transparent";
                var u = o > 1 || l && !o ? function (n) {
                        function i(t, n) {
                            var i = r.getDimensionInfo(n);
                            if (i && !1 !== i.otherDims.tooltip) {
                                var a = i.type,
                                    l = gr({
                                        color: h,
                                        type: "subItem"
                                    }),
                                    u = (o ? l + dr(i.displayName || "-") + ": " : "") + dr("ordinal" === a ? t + "" : "time" === a ? e ? "" : vr("yyyy/MM/dd hh:mm:ss", t) : fr(t));
                                u && s.push(u)
                            }
                        }
                        var o = p(n, function (t, e, n) {
                                var i = r.getDimensionInfo(n);
                                return t |= i && !1 !== i.tooltip && null != i.displayName
                            }, 0),
                            s = [];
                        return a.length ? f(a, function (e) {
                            i(_a(r, t, e), e)
                        }) : f(n, i), (o ? "<br/>" : "") + s.join(o ? "<br/>" : ", ")
                    }(s) : i(o ? _a(r, t, a[0]) : l ? s[0] : s),
                    c = gr(h),
                    d = r.getName(t),
                    g = this.name;
                return fn(this) || (g = ""), g = g ? dr(g) + (e ? ": " : "<br/>") : "", e ? c + g + u : g + c + (d ? dr(d) + ": " + u : u)
            },
            isAnimationEnabled: function () {
                if (_h.node) return !1;
                var t = this.getShallow("animation");
                return t && this.getData().count() > this.getShallow("animationThreshold") && (t = !1), t
            },
            restoreData: function () {
                this.dataTask.dirty()
            },
            getColorFromPalette: function (t, e, n) {
                var i = this.ecModel,
                    r = fd.getColorFromPalette.call(this, t, e, n);
                return r || (r = i.getColorFromPalette(t, e, n)), r
            },
            coordDimToDataDim: function (t) {
                return this.getRawData().mapDimension(t, !0)
            },
            getProgressive: function () {
                return this.get("progressive")
            },
            getProgressiveThreshold: function () {
                return this.get("progressiveThreshold")
            },
            getAxisTooltipData: null,
            getTooltipPosition: null,
            pipeTask: null,
            preventIncremental: null,
            pipelineContext: null
        });
    u(jd, qd), u(jd, fd);
    var Zd = function () {
        this.group = new du, this.uid = Qi("viewComponent")
    };
    Zd.prototype = {
        constructor: Zd,
        init: function (t, e) {},
        render: function (t, e, n, i) {},
        dispose: function () {}
    };
    var $d = Zd.prototype;
    $d.updateView = $d.updateLayout = $d.updateVisual = function (t, e, n, i) {}, bn(Zd), Tn(Zd, {
        registerWhenExtend: !0
    });
    var Kd = function () {
            var t = gn();
            return function (e) {
                var n = t(e),
                    i = e.pipelineContext,
                    r = n.large,
                    a = n.progressiveRender,
                    o = n.large = i.large,
                    s = n.progressiveRender = i.progressiveRender;
                return !!(r ^ o || a ^ s) && "reset"
            }
        },
        Qd = gn(),
        Jd = Kd();
    Oa.prototype = {
        type: "chart",
        init: function (t, e) {},
        render: function (t, e, n, i) {},
        highlight: function (t, e, n, i) {
            Na(t.getData(), i, "emphasis")
        },
        downplay: function (t, e, n, i) {
            Na(t.getData(), i, "normal")
        },
        remove: function (t, e) {
            this.group.removeAll()
        },
        dispose: function () {},
        incrementalPrepareRender: null,
        incrementalRender: null,
        updateTransform: null
    };
    var tp = Oa.prototype;
    tp.updateView = tp.updateLayout = tp.updateVisual = function (t, e, n, i) {
        this.render(t, e, n, i)
    }, bn(Oa), Tn(Oa, {
        registerWhenExtend: !0
    }), Oa.markUpdateMethod = function (t, e) {
        Qd(t).updateMethod = e
    };
    var ep = {
            incrementalPrepareRender: {
                progress: function (t, e) {
                    e.view.incrementalRender(t, e.model, e.ecModel, e.api, e.payload)
                }
            },
            render: {
                forceFirstProgress: !0,
                progress: function (t, e) {
                    e.view.render(e.model, e.ecModel, e.api, e.payload)
                }
            }
        },
        np = {
            createOnAllSeries: !0,
            performRawSeries: !0,
            reset: function (t, e) {
                var n = t.getData(),
                    i = (t.visualColorAccessPath || "itemStyle.color").split("."),
                    r = t.get(i) || t.getColorFromPalette(t.name, null, e.getSeriesCount());
                if (n.setVisual("color", r), !e.isSeriesFiltered(t)) {
                    "function" != typeof r || r instanceof Of || n.each(function (e) {
                        n.setItemVisual(e, "color", r(t.getDataParams(e)))
                    });
                    return {
                        dataEach: n.hasItemOption ? function (t, e) {
                            var n = t.getItemModel(e).get(i, !0);
                            null != n && t.setItemVisual(e, "color", n)
                        } : null
                    }
                }
            }
        },
        ip = {
            toolbox: {
                brush: {
                    title: {
                        rect: "矩形选择",
                        polygon: "圈选",
                        lineX: "横向选择",
                        lineY: "纵向选择",
                        keep: "保持选择",
                        clear: "清除选择"
                    }
                },
                dataView: {
                    title: "数据视图",
                    lang: ["数据视图", "关闭", "刷新"]
                },
                dataZoom: {
                    title: {
                        zoom: "区域缩放",
                        back: "区域缩放还原"
                    }
                },
                magicType: {
                    title: {
                        line: "切换为折线图",
                        bar: "切换为柱状图",
                        stack: "切换为堆叠",
                        tiled: "切换为平铺"
                    }
                },
                restore: {
                    title: "还原"
                },
                saveAsImage: {
                    title: "保存为图片",
                    lang: ["右键另存为图片"]
                }
            },
            series: {
                typeNames: {
                    pie: "饼图",
                    bar: "柱状图",
                    line: "折线图",
                    scatter: "散点图",
                    effectScatter: "涟漪散点图",
                    radar: "雷达图",
                    tree: "树图",
                    treemap: "矩形树图",
                    boxplot: "箱型图",
                    candlestick: "K线图",
                    k: "K线图",
                    heatmap: "热力图",
                    map: "地图",
                    parallel: "平行坐标图",
                    lines: "线图",
                    graph: "关系图",
                    sankey: "桑基图",
                    funnel: "漏斗图",
                    gauge: "仪表盘图",
                    pictorialBar: "象形柱图",
                    themeRiver: "主题河流图",
                    sunburst: "旭日图"
                }
            },
            aria: {
                general: {
                    withTitle: "这是一个关于“{title}”的图表。",
                    withoutTitle: "这是一个图表，"
                },
                series: {
                    single: {
                        prefix: "",
                        withName: "图表类型是{seriesType}，表示{seriesName}。",
                        withoutName: "图表类型是{seriesType}。"
                    },
                    multiple: {
                        prefix: "它由{seriesCount}个图表系列组成。",
                        withName: "第{seriesId}个系列是一个表示{seriesName}的{seriesType}，",
                        withoutName: "第{seriesId}个系列是一个{seriesType}，",
                        separator: {
                            middle: "；",
                            end: "。"
                        }
                    }
                },
                data: {
                    allData: "其数据是——",
                    partialData: "其中，前{displayCnt}项是——",
                    withName: "{name}的数据是{value}",
                    withoutName: "{value}",
                    separator: {
                        middle: "，",
                        end: ""
                    }
                }
            }
        },
        rp = function (t, e) {
            function n(t, e) {
                if ("string" != typeof t) return t;
                var n = t;
                return f(e, function (t, e) {
                    n = n.replace(new RegExp("\\{\\s*" + e + "\\s*\\}", "g"), t)
                }), n
            }

            function i(t) {
                var e = a.get(t);
                if (null == e) {
                    for (var n = t.split("."), i = ip.aria, r = 0; r < n.length; ++r) i = i[n[r]];
                    return i
                }
                return e
            }

            function r(t) {
                return ip.series.typeNames[t] || "自定义图"
            }
            var a = e.getModel("aria");
            if (a.get("show"))
                if (a.get("description")) t.setAttribute("aria-label", a.get("description"));
                else {
                    var o = 0;
                    e.eachSeries(function (t, e) {
                        ++o
                    }, this);
                    var s, l = a.get("data.maxCount") || 10,
                        h = a.get("series.maxCount") || 10,
                        u = Math.min(o, h);
                    if (!(o < 1)) {
                        var c = function () {
                            var t = e.getModel("title").option;
                            return t && t.length && (t = t[0]), t && t.text
                        }();
                        s = c ? n(i("general.withTitle"), {
                            title: c
                        }) : i("general.withoutTitle");
                        var d = [];
                        s += n(i(o > 1 ? "series.multiple.prefix" : "series.single.prefix"), {
                            seriesCount: o
                        }), e.eachSeries(function (t, e) {
                            if (e < u) {
                                var a, s = t.get("name"),
                                    h = "series." + (o > 1 ? "multiple" : "single") + ".";
                                a = n(a = i(s ? h + "withName" : h + "withoutName"), {
                                    seriesId: t.seriesIndex,
                                    seriesName: t.get("name"),
                                    seriesType: r(t.subType)
                                });
                                var c = t.getData();
                                window.data = c, c.count() > l ? a += n(i("data.partialData"), {
                                    displayCnt: l
                                }) : a += i("data.allData");
                                for (var f = [], p = 0; p < c.count(); p++)
                                    if (p < l) {
                                        var g = c.getName(p),
                                            m = _a(c, p);
                                        f.push(n(i(g ? "data.withName" : "data.withoutName"), {
                                            name: g,
                                            value: m
                                        }))
                                    }
                                a += f.join(i("data.separator.middle")) + i("data.separator.end"), d.push(a)
                            }
                        }), s += d.join(i("series.multiple.separator.middle")) + i("series.multiple.separator.end"), t.setAttribute("aria-label", s)
                    }
                }
        },
        ap = Math.PI,
        op = Fa.prototype;
    op.restoreData = function (t, e) {
        t.restoreData(e), this._stageTaskMap.each(function (t) {
            var e = t.overallTask;
            e && e.dirty()
        })
    }, op.getPerformArgs = function (t, e) {
        if (t.__pipeline) {
            var n = this._pipelineMap.get(t.__pipeline.id),
                i = n.context,
                r = !e && n.progressiveEnabled && (!i || i.progressiveRender) && t.__idxInPipeline > n.blockIndex ? n.step : null,
                a = i && i.modDataCount;
            return {
                step: r,
                modBy: null != a ? Math.ceil(a / r) : null,
                modDataCount: a
            }
        }
    }, op.getPipeline = function (t) {
        return this._pipelineMap.get(t)
    }, op.updateStreamModes = function (t, e) {
        var n = this._pipelineMap.get(t.uid),
            i = t.getData().count(),
            r = n.progressiveEnabled && e.incrementalPrepareRender && i >= n.threshold,
            a = t.get("large") && i >= t.get("largeThreshold"),
            o = "mod" === t.get("progressiveChunkMode") ? i : null;
        t.pipelineContext = n.context = {
            progressiveRender: r,
            modDataCount: o,
            large: a
        }
    }, op.restorePipelines = function (t) {
        var e = this,
            n = e._pipelineMap = R();
        t.eachSeries(function (t) {
            var i = t.getProgressive(),
                r = t.uid;
            n.set(r, {
                id: r,
                head: null,
                tail: null,
                threshold: t.getProgressiveThreshold(),
                progressiveEnabled: i && !(t.preventIncremental && t.preventIncremental()),
                blockIndex: -1,
                step: Math.round(i || 700),
                count: 0
            }), Ka(e, t, t.dataTask)
        })
    }, op.prepareStageTasks = function () {
        var t = this._stageTaskMap,
            e = this.ecInstance.getModel(),
            n = this.api;
        f(this._allHandlers, function (i) {
            var r = t.get(i.uid) || t.set(i.uid, []);
            i.reset && Wa(this, i, r, e, n), i.overallReset && Ha(this, i, r, e, n)
        }, this)
    }, op.prepareView = function (t, e, n, i) {
        var r = t.renderTask,
            a = r.context;
        a.model = e, a.ecModel = n, a.api = i, r.__block = !t.incrementalPrepareRender, Ka(this, e, r)
    }, op.performDataProcessorTasks = function (t, e) {
        Va(this, this._dataProcessorHandlers, t, e, {
            block: !0
        })
    }, op.performVisualTasks = function (t, e, n) {
        Va(this, this._visualHandlers, t, e, n)
    }, op.performSeriesTasks = function (t) {
        var e;
        t.eachSeries(function (t) {
            e |= t.dataTask.perform()
        }), this.unfinished |= e
    }, op.plan = function () {
        this._pipelineMap.each(function (t) {
            var e = t.tail;
            do {
                if (e.__block) {
                    t.blockIndex = e.__idxInPipeline;
                    break
                }
                e = e.getUpstream()
            } while (e)
        })
    };
    var sp = op.updatePayload = function (t, e) {
            "remain" !== e && (t.context.payload = e)
        },
        lp = Za(0);
    Fa.wrapStageHandler = function (t, e) {
        return _(t) && (t = {
            overallReset: t,
            seriesType: Qa(t)
        }), t.uid = Qi("stageHandler"), e && (t.visualType = e), t
    };
    var hp, up = {},
        cp = {};
    Ja(up, Sd), Ja(cp, Ur), up.eachSeriesByType = up.eachRawSeriesByType = function (t) {
        hp = t
    }, up.eachComponent = function (t) {
        "series" === t.mainType && t.subType && (hp = t.subType)
    };
    var fp = ["#37A2DA", "#32C5E9", "#67E0E3", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#E062AE", "#E690D1", "#e7bcf3", "#9d96f5", "#8378EA", "#96BFFF"],
        dp = {
            color: fp,
            colorLayer: [
                ["#37A2DA", "#ffd85c", "#fd7b5f"],
                ["#37A2DA", "#67E0E3", "#FFDB5C", "#ff9f7f", "#E062AE", "#9d96f5"],
                ["#37A2DA", "#32C5E9", "#9FE6B8", "#FFDB5C", "#ff9f7f", "#fb7293", "#e7bcf3", "#8378EA", "#96BFFF"], fp
            ]
        },
        pp = ["#dd6b66", "#759aa0", "#e69d87", "#8dc1a9", "#ea7e53", "#eedd78", "#73a373", "#73b9bc", "#7289ab", "#91ca8c", "#f49f42"],
        gp = {
            color: pp,
            backgroundColor: "#333",
            tooltip: {
                axisPointer: {
                    lineStyle: {
                        color: "#eee"
                    },
                    crossStyle: {
                        color: "#eee"
                    }
                }
            },
            legend: {
                textStyle: {
                    color: "#eee"
                }
            },
            textStyle: {
                color: "#eee"
            },
            title: {
                textStyle: {
                    color: "#eee"
                }
            },
            toolbox: {
                iconStyle: {
                    normal: {
                        borderColor: "#eee"
                    }
                }
            },
            dataZoom: {
                textStyle: {
                    color: "#eee"
                }
            },
            visualMap: {
                textStyle: {
                    color: "#eee"
                }
            },
            timeline: {
                lineStyle: {
                    color: "#eee"
                },
                itemStyle: {
                    normal: {
                        color: pp[1]
                    }
                },
                label: {
                    normal: {
                        textStyle: {
                            color: "#eee"
                        }
                    }
                },
                controlStyle: {
                    normal: {
                        color: "#eee",
                        borderColor: "#eee"
                    }
                }
            },
            timeAxis: {
                axisLine: {
                    lineStyle: {
                        color: "#eee"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "#eee"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#eee"
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: "dashed",
                        color: "#aaa"
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: "#eee"
                    }
                }
            },
            logAxis: {
                axisLine: {
                    lineStyle: {
                        color: "#eee"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "#eee"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#eee"
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: "dashed",
                        color: "#aaa"
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: "#eee"
                    }
                }
            },
            valueAxis: {
                axisLine: {
                    lineStyle: {
                        color: "#eee"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "#eee"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#eee"
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: "dashed",
                        color: "#aaa"
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: "#eee"
                    }
                }
            },
            categoryAxis: {
                axisLine: {
                    lineStyle: {
                        color: "#eee"
                    }
                },
                axisTick: {
                    lineStyle: {
                        color: "#eee"
                    }
                },
                axisLabel: {
                    textStyle: {
                        color: "#eee"
                    }
                },
                splitLine: {
                    lineStyle: {
                        type: "dashed",
                        color: "#aaa"
                    }
                },
                splitArea: {
                    areaStyle: {
                        color: "#eee"
                    }
                }
            },
            line: {
                symbol: "circle"
            },
            graph: {
                color: pp
            },
            gauge: {
                title: {
                    textStyle: {
                        color: "#eee"
                    }
                }
            },
            candlestick: {
                itemStyle: {
                    normal: {
                        color: "#FD1050",
                        color0: "#0CF49B",
                        borderColor: "#FD1050",
                        borderColor0: "#0CF49B"
                    }
                }
            }
        };
    gp.categoryAxis.splitLine.show = !1, ld.extend({
        type: "dataset",
        defaultOption: {
            seriesLayoutBy: xd,
            sourceHeader: null,
            dimensions: null,
            source: null
        },
        optionUpdated: function () {
            Cr(this)
        }
    }), Zd.extend({
        type: "dataset"
    });
    var mp = L,
        vp = f,
        yp = _,
        _p = w,
        xp = ld.parseClassType,
        wp = {
            zrender: "4.0.4"
        },
        bp = 1e3,
        Mp = 1e3,
        Sp = 3e3,
        Ip = {
            PROCESSOR: {
                FILTER: bp,
                STATISTIC: 5e3
            },
            VISUAL: {
                LAYOUT: Mp,
                GLOBAL: 2e3,
                CHART: Sp,
                COMPONENT: 4e3,
                BRUSH: 5e3
            }
        },
        Tp = "__flagInMainProcess",
        Cp = "__optionUpdated",
        Dp = /^[a-zA-Z0-9_]+$/;
    eo.prototype.on = to("on"), eo.prototype.off = to("off"), eo.prototype.one = to("one"), u(eo, Bh);
    var kp = no.prototype;
    kp._onframe = function () {
        if (!this._disposed) {
            var t = this._scheduler;
            if (this[Cp]) {
                var e = this[Cp].silent;
                this[Tp] = !0, ro(this), Ap.update.call(this), this[Tp] = !1, this[Cp] = !1, lo.call(this, e), ho.call(this, e)
            } else if (t.unfinished) {
                var n = 1,
                    i = this._model;
                this._api;
                t.unfinished = !1;
                do {
                    var r = +new Date;
                    t.performSeriesTasks(i), t.performDataProcessorTasks(i), oo(this, i), t.performVisualTasks(i), mo(this, this._model, 0, "remain"), n -= +new Date - r
                } while (n > 0 && t.unfinished);
                t.unfinished || this._zr.flush()
            }
        }
    }, kp.getDom = function () {
        return this._dom
    }, kp.getZr = function () {
        return this._zr
    }, kp.setOption = function (t, e, n) {
        var i;
        if (_p(e) && (n = e.lazyUpdate, i = e.silent, e = e.notMerge), this[Tp] = !0, !this._model || e) {
            var r = new jr(this._api),
                a = this._theme,
                o = this._model = new Sd(null, null, a, r);
            o.scheduler = this._scheduler, o.init(null, null, a, r)
        }
        this._model.setOption(t, Np), n ? (this[Cp] = {
            silent: i
        }, this[Tp] = !1) : (ro(this), Ap.update.call(this), this._zr.flush(), this[Cp] = !1, this[Tp] = !1, lo.call(this, i), ho.call(this, i))
    }, kp.setTheme = function () {
        console.log("ECharts#setTheme() is DEPRECATED in ECharts 3.0")
    }, kp.getModel = function () {
        return this._model
    }, kp.getOption = function () {
        return this._model && this._model.getOption()
    }, kp.getWidth = function () {
        return this._zr.getWidth()
    }, kp.getHeight = function () {
        return this._zr.getHeight()
    }, kp.getDevicePixelRatio = function () {
        return this._zr.painter.dpr || window.devicePixelRatio || 1
    }, kp.getRenderedCanvas = function (t) {
        if (_h.canvasSupported) return (t = t || {}).pixelRatio = t.pixelRatio || 1, t.backgroundColor = t.backgroundColor || this._model.get("backgroundColor"), this._zr.painter.getRenderedCanvas(t)
    }, kp.getSvgDataUrl = function () {
        if (_h.svgSupported) {
            var t = this._zr;
            return f(t.storage.getDisplayList(), function (t) {
                t.stopAnimation(!0)
            }), t.painter.pathToDataUrl()
        }
    }, kp.getDataURL = function (t) {
        var e = (t = t || {}).excludeComponents,
            n = this._model,
            i = [],
            r = this;
        vp(e, function (t) {
            n.eachComponent({
                mainType: t
            }, function (t) {
                var e = r._componentsMap[t.__viewId];
                e.group.ignore || (i.push(e), e.group.ignore = !0)
            })
        });
        var a = "svg" === this._zr.painter.getType() ? this.getSvgDataUrl() : this.getRenderedCanvas(t).toDataURL("image/" + (t && t.type || "png"));
        return vp(i, function (t) {
            t.group.ignore = !1
        }), a
    }, kp.getConnectedDataURL = function (t) {
        if (_h.canvasSupported) {
            var e = this.group,
                i = Math.min,
                r = Math.max;
            if (Wp[e]) {
                var a = 1 / 0,
                    o = 1 / 0,
                    s = -1 / 0,
                    l = -1 / 0,
                    h = [],
                    u = t && t.pixelRatio || 1;
                f(Vp, function (u, c) {
                    if (u.group === e) {
                        var f = u.getRenderedCanvas(n(t)),
                            d = u.getDom().getBoundingClientRect();
                        a = i(d.left, a), o = i(d.top, o), s = r(d.right, s), l = r(d.bottom, l), h.push({
                            dom: f,
                            left: d.left,
                            top: d.top
                        })
                    }
                });
                var c = (s *= u) - (a *= u),
                    d = (l *= u) - (o *= u),
                    p = Ah();
                p.width = c, p.height = d;
                var g = an(p);
                return vp(h, function (t) {
                    var e = new Be({
                        style: {
                            x: t.left * u - a,
                            y: t.top * u - o,
                            image: t.dom
                        }
                    });
                    g.add(e)
                }), g.refreshImmediately(), p.toDataURL("image/" + (t && t.type || "png"))
            }
            return this.getDataURL(t)
        }
    }, kp.convertToPixel = v(io, "convertToPixel"), kp.convertFromPixel = v(io, "convertFromPixel"), kp.containPixel = function (t, e) {
        var n;
        return t = mn(this._model, t), f(t, function (t, i) {
            i.indexOf("Models") >= 0 && f(t, function (t) {
                var r = t.coordinateSystem;
                if (r && r.containPoint) n |= !!r.containPoint(e);
                else if ("seriesModels" === i) {
                    var a = this._chartsMap[t.__viewId];
                    a && a.containPoint && (n |= a.containPoint(e, t))
                }
            }, this)
        }, this), !!n
    }, kp.getVisual = function (t, e) {
        var n = (t = mn(this._model, t, {
                defaultMainType: "series"
            })).seriesModel.getData(),
            i = t.hasOwnProperty("dataIndexInside") ? t.dataIndexInside : t.hasOwnProperty("dataIndex") ? n.indexOfRawIndex(t.dataIndex) : null;
        return null != i ? n.getItemVisual(i, e) : n.getVisual(e)
    }, kp.getViewOfComponentModel = function (t) {
        return this._componentsMap[t.__viewId]
    }, kp.getViewOfSeriesModel = function (t) {
        return this._chartsMap[t.__viewId]
    };
    var Ap = {
        prepareAndUpdate: function (t) {
            ro(this), Ap.update.call(this, t)
        },
        update: function (t) {
            var e = this._model,
                n = this._api,
                i = this._zr,
                r = this._coordSysMgr,
                a = this._scheduler;
            if (e) {
                a.restoreData(e, t), a.performSeriesTasks(e), r.create(e, n), a.performDataProcessorTasks(e, t), oo(this, e), r.update(e, n), fo(e), a.performVisualTasks(e, t), po(this, e, n, t);
                var o = e.get("backgroundColor") || "transparent";
                if (_h.canvasSupported) i.setBackgroundColor(o);
                else {
                    var s = _t(o);
                    o = bt(s, "rgb"), 0 === s[3] && (o = "transparent")
                }
                vo(e, n)
            }
        },
        updateTransform: function (t) {
            var e = this._model,
                n = this,
                i = this._api;
            if (e) {
                var r = [];
                e.eachComponent(function (a, o) {
                    var s = n.getViewOfComponentModel(o);
                    if (s && s.__alive)
                        if (s.updateTransform) {
                            var l = s.updateTransform(o, e, i, t);
                            l && l.update && r.push(s)
                        } else r.push(s)
                });
                var a = R();
                e.eachSeries(function (r) {
                    var o = n._chartsMap[r.__viewId];
                    if (o.updateTransform) {
                        var s = o.updateTransform(r, e, i, t);
                        s && s.update && a.set(r.uid, 1)
                    } else a.set(r.uid, 1)
                }), fo(e), this._scheduler.performVisualTasks(e, t, {
                    setDirty: !0,
                    dirtyMap: a
                }), mo(n, e, 0, t, a), vo(e, this._api)
            }
        },
        updateView: function (t) {
            var e = this._model;
            e && (Oa.markUpdateMethod(t, "updateView"), fo(e), this._scheduler.performVisualTasks(e, t, {
                setDirty: !0
            }), po(this, this._model, this._api, t), vo(e, this._api))
        },
        updateVisual: function (t) {
            Ap.update.call(this, t)
        },
        updateLayout: function (t) {
            Ap.update.call(this, t)
        }
    };
    kp.resize = function (t) {
        this._zr.resize(t);
        var e = this._model;
        if (this._loadingFX && this._loadingFX.resize(), e) {
            var n = e.resetOption("media"),
                i = t && t.silent;
            this[Tp] = !0, n && ro(this), Ap.update.call(this), this[Tp] = !1, lo.call(this, i), ho.call(this, i)
        }
    }, kp.showLoading = function (t, e) {
        if (_p(t) && (e = t, t = ""), t = t || "default", this.hideLoading(), Fp[t]) {
            var n = Fp[t](this._api, e),
                i = this._zr;
            this._loadingFX = n, i.add(n)
        }
    }, kp.hideLoading = function () {
        this._loadingFX && this._zr.remove(this._loadingFX), this._loadingFX = null
    }, kp.makeActionFromEvent = function (t) {
        var e = a({}, t);
        return e.type = Op[t.type], e
    }, kp.dispatchAction = function (t, e) {
        _p(e) || (e = {
            silent: !!e
        }), Pp[t.type] && this._model && (this[Tp] ? this._pendingActions.push(t) : (so.call(this, t, e.silent), e.flush ? this._zr.flush(!0) : !1 !== e.flush && _h.browser.weChat && this._throttledZrFlush(), lo.call(this, e.silent), ho.call(this, e.silent)))
    }, kp.appendData = function (t) {
        var e = t.seriesIndex;
        this.getModel().getSeriesByIndex(e).appendData(t), this._scheduler.unfinished = !0
    }, kp.on = to("on"), kp.off = to("off"), kp.one = to("one");
    var Lp = ["click", "dblclick", "mouseover", "mouseout", "mousemove", "mousedown", "mouseup", "globalout", "contextmenu"];
    kp._initEvents = function () {
        vp(Lp, function (t) {
            this._zr.on(t, function (e) {
                var n, i = this.getModel(),
                    r = e.target;
                if ("globalout" === t) n = {};
                else if (r && null != r.dataIndex) {
                    var o = r.dataModel || i.getSeriesByIndex(r.seriesIndex);
                    n = o && o.getDataParams(r.dataIndex, r.dataType) || {}
                } else r && r.eventData && (n = a({}, r.eventData));
                n && (n.event = e, n.type = t, this.trigger(t, n))
            }, this)
        }, this), vp(Op, function (t, e) {
            this._messageCenter.on(e, function (t) {
                this.trigger(e, t)
            }, this)
        }, this)
    }, kp.isDisposed = function () {
        return this._disposed
    }, kp.clear = function () {
        this.setOption({
            series: []
        }, !0)
    }, kp.dispose = function () {
        if (!this._disposed) {
            this._disposed = !0, yn(this.getDom(), qp, "");
            var t = this._api,
                e = this._model;
            vp(this._componentsViews, function (n) {
                n.dispose(e, t)
            }), vp(this._chartsViews, function (n) {
                n.dispose(e, t)
            }), this._zr.dispose(), delete Vp[this.id]
        }
    }, u(no, Bh);
    var Pp = {},
        Op = {},
        Ep = [],
        Np = [],
        Rp = [],
        Bp = [],
        zp = {},
        Fp = {},
        Vp = {},
        Wp = {},
        Hp = new Date - 0,
        Gp = new Date - 0,
        qp = "_echarts_instance_",
        Xp = {},
        Up = Mo;
    Ao(2e3, np), To(zd), Co(5e3, function (t) {
        var e = R();
        t.eachSeries(function (t) {
            var n = t.get("stack");
            if (n) {
                var i = e.get(n) || e.set(n, []),
                    r = t.getData(),
                    a = {
                        stackResultDimension: r.getCalculationInfo("stackResultDimension"),
                        stackedOverDimension: r.getCalculationInfo("stackedOverDimension"),
                        stackedDimension: r.getCalculationInfo("stackedDimension"),
                        stackedByDimension: r.getCalculationInfo("stackedByDimension"),
                        isStackedByIndex: r.getCalculationInfo("isStackedByIndex"),
                        data: r,
                        seriesModel: t
                    };
                if (!a.stackedDimension || !a.isStackedByIndex && !a.stackedByDimension) return;
                i.length && r.setCalculationInfo("stackedOnSeries", i[i.length - 1].seriesModel), i.push(a)
            }
        }), e.each(ca)
    }), Po("default", function (t, e) {
        o(e = e || {}, {
            text: "loading",
            color: "#c23531",
            textColor: "#000",
            maskColor: "rgba(255, 255, 255, 0.8)",
            zlevel: 0
        });
        var n = new Cf({
                style: {
                    fill: e.maskColor
                },
                zlevel: e.zlevel,
                z: 1e4
            }),
            i = new Lf({
                shape: {
                    startAngle: -ap / 2,
                    endAngle: -ap / 2 + .1,
                    r: 10
                },
                style: {
                    stroke: e.color,
                    lineCap: "round",
                    lineWidth: 5
                },
                zlevel: e.zlevel,
                z: 10001
            }),
            r = new Cf({
                style: {
                    fill: "none",
                    text: e.text,
                    textPosition: "right",
                    textDistance: 10,
                    textFill: e.textColor
                },
                zlevel: e.zlevel,
                z: 10001
            });
        i.animateShape(!0).when(1e3, {
            endAngle: 3 * ap / 2
        }).start("circularInOut"), i.animateShape(!0).when(1e3, {
            startAngle: 3 * ap / 2
        }).delay(300).start("circularInOut");
        var a = new du;
        return a.add(i), a.add(r), a.add(n), a.resize = function () {
            var e = t.getWidth() / 2,
                a = t.getHeight() / 2;
            i.setShape({
                cx: e,
                cy: a
            });
            var o = i.shape.r;
            r.setShape({
                x: e - o,
                y: a - o,
                width: 2 * o,
                height: 2 * o
            }), n.setShape({
                x: 0,
                y: 0,
                width: t.getWidth(),
                height: t.getHeight()
            })
        }, a.resize(), a
    }), Do({
        type: "highlight",
        event: "highlight",
        update: "highlight"
    }, B), Do({
        type: "downplay",
        event: "downplay",
        update: "downplay"
    }, B), Io("light", dp), Io("dark", gp);
    var Yp = {};
    Bo.prototype = {
        constructor: Bo,
        add: function (t) {
            return this._add = t, this
        },
        update: function (t) {
            return this._update = t, this
        },
        remove: function (t) {
            return this._remove = t, this
        },
        execute: function () {
            var t = this._old,
                e = this._new,
                n = {},
                i = [],
                r = [];
            for (zo(t, {}, i, "_oldKeyGetter", this), zo(e, n, r, "_newKeyGetter", this), a = 0; a < t.length; a++) null != (s = n[o = i[a]]) ? ((h = s.length) ? (1 === h && (n[o] = null), s = s.unshift()) : n[o] = null, this._update && this._update(s, a)) : this._remove && this._remove(a);
            for (var a = 0; a < r.length; a++) {
                var o = r[a];
                if (n.hasOwnProperty(o)) {
                    var s = n[o];
                    if (null == s) continue;
                    if (s.length)
                        for (var l = 0, h = s.length; l < h; l++) this._add && this._add(s[l]);
                    else this._add && this._add(s)
                }
            }
        }
    };
    var jp = R(["tooltip", "label", "itemName", "itemId", "seriesName"]),
        Zp = w,
        $p = "e\0\0",
        Kp = {
            float: "undefined" == typeof Float64Array ? Array : Float64Array,
            int: "undefined" == typeof Int32Array ? Array : Int32Array,
            ordinal: Array,
            number: Array,
            time: Array
        },
        Qp = "undefined" == typeof Uint32Array ? Array : Uint32Array,
        Jp = "undefined" == typeof Uint16Array ? Array : Uint16Array,
        tg = ["hasItemOption", "_nameList", "_idList", "_invertedIndicesMap", "_rawData", "_chunkSize", "_chunkCount", "_dimValueGetter", "_count", "_rawCount", "_nameDimIdx", "_idDimIdx"],
        eg = ["_extent", "_approximateExtent", "_rawExtent"],
        ng = function (t, e) {
            t = t || ["x", "y"];
            for (var n = {}, i = [], r = {}, a = 0; a < t.length; a++) {
                var o = t[a];
                x(o) && (o = {
                    name: o
                });
                var s = o.name;
                o.type = o.type || "float", o.coordDim || (o.coordDim = s, o.coordDimIndex = 0), o.otherDims = o.otherDims || {}, i.push(s), n[s] = o, o.index = a, o.createInvertedIndices && (r[s] = [])
            }
            this.dimensions = i, this._dimensionInfos = n, this.hostModel = e, this.dataType, this._indices = null, this._count = 0, this._rawCount = 0, this._storage = {}, this._nameList = [], this._idList = [], this._optionModels = [], this._visual = {}, this._layout = {}, this._itemVisuals = [], this.hasItemVisual = {}, this._itemLayouts = [], this._graphicEls = [], this._chunkSize = 1e5, this._chunkCount = 0, this._rawData, this._rawExtent = {}, this._extent = {}, this._approximateExtent = {}, this._dimensionsSummary = Fo(this), this._invertedIndicesMap = r, this._calculationInfo = {}
        },
        ig = ng.prototype;
    ig.type = "list", ig.hasItemOption = !0, ig.getDimension = function (t) {
        return isNaN(t) || (t = this.dimensions[t] || t), t
    }, ig.getDimensionInfo = function (t) {
        return this._dimensionInfos[this.getDimension(t)]
    }, ig.getDimensionsOnCoord = function () {
        return this._dimensionsSummary.dataDimsOnCoord.slice()
    }, ig.mapDimension = function (t, e) {
        var n = this._dimensionsSummary;
        if (null == e) return n.encodeFirstDimNotExtra[t];
        var i = n.encode[t];
        return !0 === e ? (i || []).slice() : i && i[e]
    }, ig.initData = function (t, e, n) {
        (Tr.isInstance(t) || c(t)) && (t = new fa(t, this.dimensions.length)), this._rawData = t, this._storage = {}, this._indices = null, this._nameList = e || [], this._idList = [], this._nameRepeatCount = {}, n || (this.hasItemOption = !1), this.defaultDimValueGetter = Hd[this._rawData.getSource().sourceFormat], this._dimValueGetter = n = n || this.defaultDimValueGetter, this._rawExtent = {}, this._initDataFromProvider(0, t.count()), t.pure && (this.hasItemOption = !1)
    }, ig.getProvider = function () {
        return this._rawData
    }, ig.appendData = function (t) {
        var e = this._rawData,
            n = this.count();
        e.appendData(t);
        var i = e.count();
        e.persistent || (i += n), this._initDataFromProvider(n, i)
    }, ig._initDataFromProvider = function (t, e) {
        if (!(t >= e)) {
            for (var n, i = this._chunkSize, r = this._rawData, a = this._storage, o = this.dimensions, s = o.length, l = this._dimensionInfos, h = this._nameList, u = this._idList, c = this._rawExtent, f = this._nameRepeatCount = {}, d = this._chunkCount, p = d - 1, g = 0; g < s; g++) {
                c[T = o[g]] || (c[T] = [1 / 0, -1 / 0]);
                var m = l[T];
                0 === m.otherDims.itemName && (n = this._nameDimIdx = g), 0 === m.otherDims.itemId && (this._idDimIdx = g);
                var v = Kp[m.type];
                a[T] || (a[T] = []);
                var y = a[T][p];
                if (y && y.length < i) {
                    for (var _ = new v(Math.min(e - p * i, i)), x = 0; x < y.length; x++) _[x] = y[x];
                    a[T][p] = _
                }
                for (I = d * i; I < e; I += i) a[T].push(new v(Math.min(e - I, i)));
                this._chunkCount = a[T].length
            }
            for (var w = new Array(s), b = t; b < e; b++) {
                w = r.getItem(b, w);
                for (var M = Math.floor(b / i), S = b % i, I = 0; I < s; I++) {
                    var T = o[I],
                        C = a[T][M],
                        D = this._dimValueGetter(w, T, b, I);
                    C[S] = D;
                    var k = c[T];
                    D < k[0] && (k[0] = D), D > k[1] && (k[1] = D)
                }
                if (!r.pure) {
                    var A = h[b];
                    if (w && null == A)
                        if (null != w.name) h[b] = A = w.name;
                        else if (null != n) {
                        var L = o[n],
                            P = a[L][M];
                        if (P) {
                            A = P[S];
                            var O = l[L].ordinalMeta;
                            O && O.categories.length && (A = O.categories[A])
                        }
                    }
                    var E = null == w ? null : w.id;
                    null == E && null != A && (f[A] = f[A] || 0, E = A, f[A] > 0 && (E += "__ec__" + f[A]), f[A]++), null != E && (u[b] = E)
                }
            }!r.persistent && r.clean && r.clean(), this._rawCount = this._count = e, this._extent = {}, Xo(this)
        }
    }, ig.count = function () {
        return this._count
    }, ig.getIndices = function () {
        var t = this._indices;
        if (t) {
            var e = t.constructor,
                n = this._count;
            if (e === Array) {
                i = new e(n);
                for (r = 0; r < n; r++) i[r] = t[r]
            } else i = new e(t.buffer, 0, n)
        } else
            for (var i = new(e = Ho(this))(this.count()), r = 0; r < i.length; r++) i[r] = r;
        return i
    }, ig.get = function (t, e) {
        if (!(e >= 0 && e < this._count)) return NaN;
        var n = this._storage;
        if (!n[t]) return NaN;
        e = this.getRawIndex(e);
        var i = Math.floor(e / this._chunkSize),
            r = e % this._chunkSize;
        return n[t][i][r]
    }, ig.getByRawIndex = function (t, e) {
        if (!(e >= 0 && e < this._rawCount)) return NaN;
        var n = this._storage[t];
        if (!n) return NaN;
        var i = Math.floor(e / this._chunkSize),
            r = e % this._chunkSize;
        return n[i][r]
    }, ig._getFast = function (t, e) {
        var n = Math.floor(e / this._chunkSize),
            i = e % this._chunkSize;
        return this._storage[t][n][i]
    }, ig.getValues = function (t, e) {
        var n = [];
        y(t) || (e = t, t = this.dimensions);
        for (var i = 0, r = t.length; i < r; i++) n.push(this.get(t[i], e));
        return n
    }, ig.hasValue = function (t) {
        for (var e = this._dimensionsSummary.dataDimsOnCoord, n = this._dimensionInfos, i = 0, r = e.length; i < r; i++)
            if ("ordinal" !== n[e[i]].type && isNaN(this.get(e[i], t))) return !1;
        return !0
    }, ig.getDataExtent = function (t) {
        t = this.getDimension(t);
        var e = [1 / 0, -1 / 0];
        if (!this._storage[t]) return e;
        var n, i = this.count();
        if (!this._indices) return this._rawExtent[t].slice();
        if (n = this._extent[t]) return n.slice();
        for (var r = (n = e)[0], a = n[1], o = 0; o < i; o++) {
            var s = this._getFast(t, this.getRawIndex(o));
            s < r && (r = s), s > a && (a = s)
        }
        return n = [r, a], this._extent[t] = n, n
    }, ig.getApproximateExtent = function (t) {
        return t = this.getDimension(t), this._approximateExtent[t] || this.getDataExtent(t)
    }, ig.setApproximateExtent = function (t, e) {
        e = this.getDimension(e), this._approximateExtent[e] = t.slice()
    }, ig.getCalculationInfo = function (t) {
        return this._calculationInfo[t]
    }, ig.setCalculationInfo = function (t, e) {
        Zp(t) ? a(this._calculationInfo, t) : this._calculationInfo[t] = e
    }, ig.getSum = function (t) {
        var e = 0;
        if (this._storage[t])
            for (var n = 0, i = this.count(); n < i; n++) {
                var r = this.get(t, n);
                isNaN(r) || (e += r)
            }
        return e
    }, ig.getMedian = function (t) {
        var e = [];
        this.each(t, function (t, n) {
            isNaN(t) || e.push(t)
        });
        var n = [].concat(e).sort(function (t, e) {
                return t - e
            }),
            i = this.count();
        return 0 === i ? 0 : i % 2 == 1 ? n[(i - 1) / 2] : (n[i / 2] + n[i / 2 - 1]) / 2
    }, ig.rawIndexOf = function (t, e) {
        var n = (t && this._invertedIndicesMap[t])[e];
        return null == n || isNaN(n) ? -1 : n
    }, ig.indexOfName = function (t) {
        for (var e = 0, n = this.count(); e < n; e++)
            if (this.getName(e) === t) return e;
        return -1
    }, ig.indexOfRawIndex = function (t) {
        if (!this._indices) return t;
        if (t >= this._rawCount || t < 0) return -1;
        var e = this._indices,
            n = e[t];
        if (null != n && n < this._count && n === t) return t;
        for (var i = 0, r = this._count - 1; i <= r;) {
            var a = (i + r) / 2 | 0;
            if (e[a] < t) i = a + 1;
            else {
                if (!(e[a] > t)) return a;
                r = a - 1
            }
        }
        return -1
    }, ig.indicesOfNearest = function (t, e, n) {
        var i = [];
        if (!this._storage[t]) return i;
        null == n && (n = 1 / 0);
        for (var r = Number.MAX_VALUE, a = -1, o = 0, s = this.count(); o < s; o++) {
            var l = e - this.get(t, o),
                h = Math.abs(l);
            l <= n && h <= r && ((h < r || l >= 0 && a < 0) && (r = h, a = l, i.length = 0), i.push(o))
        }
        return i
    }, ig.getRawIndex = Yo, ig.getRawDataItem = function (t) {
        if (this._rawData.persistent) return this._rawData.getItem(this.getRawIndex(t));
        for (var e = [], n = 0; n < this.dimensions.length; n++) {
            var i = this.dimensions[n];
            e.push(this.get(i, t))
        }
        return e
    }, ig.getName = function (t) {
        var e = this.getRawIndex(t);
        return this._nameList[e] || Uo(this, this._nameDimIdx, e) || ""
    }, ig.getId = function (t) {
        return Zo(this, this.getRawIndex(t))
    }, ig.each = function (t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
            for (var r = (t = d($o(t), this.getDimension, this)).length, a = 0; a < this.count(); a++) switch (r) {
                case 0:
                    e.call(n, a);
                    break;
                case 1:
                    e.call(n, this.get(t[0], a), a);
                    break;
                case 2:
                    e.call(n, this.get(t[0], a), this.get(t[1], a), a);
                    break;
                default:
                    for (var o = 0, s = []; o < r; o++) s[o] = this.get(t[o], a);
                    s[o] = a, e.apply(n, s)
            }
        }
    }, ig.filterSelf = function (t, e, n, i) {
        if (this._count) {
            "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this, t = d($o(t), this.getDimension, this);
            for (var r = this.count(), a = new(Ho(this))(r), o = [], s = t.length, l = 0, h = t[0], u = 0; u < r; u++) {
                var c, f = this.getRawIndex(u);
                if (0 === s) c = e.call(n, u);
                else if (1 === s) {
                    var p = this._getFast(h, f);
                    c = e.call(n, p, u)
                } else {
                    for (var g = 0; g < s; g++) o[g] = this._getFast(h, f);
                    o[g] = u, c = e.apply(n, o)
                }
                c && (a[l++] = f)
            }
            return l < r && (this._indices = a), this._count = l, this._extent = {}, this.getRawIndex = this._indices ? jo : Yo, this
        }
    }, ig.selectRange = function (t) {
        if (this._count) {
            var e = [];
            for (var n in t) t.hasOwnProperty(n) && e.push(n);
            var i = e.length;
            if (i) {
                var r = this.count(),
                    a = new(Ho(this))(r),
                    o = 0,
                    s = e[0],
                    l = t[s][0],
                    h = t[s][1],
                    u = !1;
                if (!this._indices) {
                    var c = 0;
                    if (1 === i) {
                        for (var f = this._storage[e[0]], d = 0; d < this._chunkCount; d++)
                            for (var p = f[d], g = Math.min(this._count - d * this._chunkSize, this._chunkSize), m = 0; m < g; m++)((w = p[m]) >= l && w <= h || isNaN(w)) && (a[o++] = c), c++;
                        u = !0
                    } else if (2 === i) {
                        for (var f = this._storage[s], v = this._storage[e[1]], y = t[e[1]][0], _ = t[e[1]][1], d = 0; d < this._chunkCount; d++)
                            for (var p = f[d], x = v[d], g = Math.min(this._count - d * this._chunkSize, this._chunkSize), m = 0; m < g; m++) {
                                var w = p[m],
                                    b = x[m];
                                (w >= l && w <= h || isNaN(w)) && (b >= y && b <= _ || isNaN(b)) && (a[o++] = c), c++
                            }
                        u = !0
                    }
                }
                if (!u)
                    if (1 === i)
                        for (m = 0; m < r; m++) {
                            S = this.getRawIndex(m);
                            ((w = this._getFast(s, S)) >= l && w <= h || isNaN(w)) && (a[o++] = S)
                        } else
                            for (m = 0; m < r; m++) {
                                for (var M = !0, S = this.getRawIndex(m), d = 0; d < i; d++) {
                                    var I = e[d];
                                    ((w = this._getFast(n, S)) < t[I][0] || w > t[I][1]) && (M = !1)
                                }
                                M && (a[o++] = this.getRawIndex(m))
                            }
                return o < r && (this._indices = a), this._count = o, this._extent = {}, this.getRawIndex = this._indices ? jo : Yo, this
            }
        }
    }, ig.mapArray = function (t, e, n, i) {
        "function" == typeof t && (i = n, n = e, e = t, t = []), n = n || i || this;
        var r = [];
        return this.each(t, function () {
            r.push(e && e.apply(this, arguments))
        }, n), r
    }, ig.map = function (t, e, n, i) {
        n = n || i || this;
        var r = Ko(this, t = d($o(t), this.getDimension, this));
        r._indices = this._indices, r.getRawIndex = r._indices ? jo : Yo;
        for (var a = r._storage, o = [], s = this._chunkSize, l = t.length, h = this.count(), u = [], c = r._rawExtent, f = 0; f < h; f++) {
            for (var p = 0; p < l; p++) u[p] = this.get(t[p], f);
            u[l] = f;
            var g = e && e.apply(n, u);
            if (null != g) {
                "object" != typeof g && (o[0] = g, g = o);
                for (var m = this.getRawIndex(f), v = Math.floor(m / s), y = m % s, _ = 0; _ < g.length; _++) {
                    var x = t[_],
                        w = g[_],
                        b = c[x],
                        M = a[x];
                    M && (M[v][y] = w), w < b[0] && (b[0] = w), w > b[1] && (b[1] = w)
                }
            }
        }
        return r
    }, ig.downSample = function (t, e, n, i) {
        for (var r = Ko(this, [t]), a = r._storage, o = [], s = Math.floor(1 / e), l = a[t], h = this.count(), u = this._chunkSize, c = r._rawExtent[t], f = new(Ho(this))(h), d = 0, p = 0; p < h; p += s) {
            s > h - p && (s = h - p, o.length = s);
            for (var g = 0; g < s; g++) {
                var m = this.getRawIndex(p + g),
                    v = Math.floor(m / u),
                    y = m % u;
                o[g] = l[v][y]
            }
            var _ = n(o),
                x = this.getRawIndex(Math.min(p + i(o, _) || 0, h - 1)),
                w = x % u;
            l[Math.floor(x / u)][w] = _, _ < c[0] && (c[0] = _), _ > c[1] && (c[1] = _), f[d++] = x
        }
        return r._count = d, r._indices = f, r.getRawIndex = jo, r
    }, ig.getItemModel = function (t) {
        var e = this.hostModel;
        return new Zi(this.getRawDataItem(t), e, e && e.ecModel)
    }, ig.diff = function (t) {
        var e = this;
        return new Bo(t ? t.getIndices() : [], this.getIndices(), function (e) {
            return Zo(t, e)
        }, function (t) {
            return Zo(e, t)
        })
    }, ig.getVisual = function (t) {
        var e = this._visual;
        return e && e[t]
    }, ig.setVisual = function (t, e) {
        if (Zp(t))
            for (var n in t) t.hasOwnProperty(n) && this.setVisual(n, t[n]);
        else this._visual = this._visual || {}, this._visual[t] = e
    }, ig.setLayout = function (t, e) {
        if (Zp(t))
            for (var n in t) t.hasOwnProperty(n) && this.setLayout(n, t[n]);
        else this._layout[t] = e
    }, ig.getLayout = function (t) {
        return this._layout[t]
    }, ig.getItemLayout = function (t) {
        return this._itemLayouts[t]
    }, ig.setItemLayout = function (t, e, n) {
        this._itemLayouts[t] = n ? a(this._itemLayouts[t] || {}, e) : e
    }, ig.clearItemLayouts = function () {
        this._itemLayouts.length = 0
    }, ig.getItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t],
            r = i && i[e];
        return null != r || n ? r : this.getVisual(e)
    }, ig.setItemVisual = function (t, e, n) {
        var i = this._itemVisuals[t] || {},
            r = this.hasItemVisual;
        if (this._itemVisuals[t] = i, Zp(e))
            for (var a in e) e.hasOwnProperty(a) && (i[a] = e[a], r[a] = !0);
        else i[e] = n, r[e] = !0
    }, ig.clearAllVisual = function () {
        this._visual = {}, this._itemVisuals = [], this.hasItemVisual = {}
    };
    var rg = function (t) {
        t.seriesIndex = this.seriesIndex, t.dataIndex = this.dataIndex, t.dataType = this.dataType
    };
    ig.setItemGraphicEl = function (t, e) {
        var n = this.hostModel;
        e && (e.dataIndex = t, e.dataType = this.dataType, e.seriesIndex = n && n.seriesIndex, "group" === e.type && e.traverse(rg, e)), this._graphicEls[t] = e
    }, ig.getItemGraphicEl = function (t) {
        return this._graphicEls[t]
    }, ig.eachItemGraphicEl = function (t, e) {
        f(this._graphicEls, function (n, i) {
            n && t && t.call(e, n, i)
        })
    }, ig.cloneShallow = function (t) {
        if (!t) {
            var e = d(this.dimensions, this.getDimensionInfo, this);
            t = new ng(e, this.hostModel)
        }
        if (t._storage = this._storage, qo(t, this), this._indices) {
            var n = this._indices.constructor;
            t._indices = new n(this._indices)
        } else t._indices = null;
        return t.getRawIndex = t._indices ? jo : Yo, t
    }, ig.wrapMethod = function (t, e) {
        var n = this[t];
        "function" == typeof n && (this.__wrappedMethods = this.__wrappedMethods || [], this.__wrappedMethods.push(t), this[t] = function () {
            var t = n.apply(this, arguments);
            return e.apply(this, [t].concat(k(arguments)))
        })
    }, ig.TRANSFERABLE_METHODS = ["cloneShallow", "downSample", "map"], ig.CHANGABLE_METHODS = ["filterSelf", "selectRange"];
    var ag = function (t, e) {
        return e = e || {}, ts(e.coordDimensions || [], t, {
            dimsDef: e.dimensionsDefine || t.dimensionsDefine,
            encodeDef: e.encodeDefine || t.encodeDefine,
            dimCount: e.dimensionsCount,
            generateCoord: e.generateCoord,
            generateCoordCount: e.generateCoordCount
        })
    };
    jd.extend({
        type: "series.line",
        dependencies: ["grid", "polar"],
        getInitialData: function (t, e) {
            return os(this.getSource(), this)
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            hoverAnimation: !0,
            clipOverflow: !0,
            label: {
                position: "top"
            },
            lineStyle: {
                width: 2,
                type: "solid"
            },
            step: !1,
            smooth: !1,
            smoothMonotone: null,
            symbol: "emptyCircle",
            symbolSize: 4,
            symbolRotate: null,
            showSymbol: !0,
            showAllSymbol: "auto",
            connectNulls: !1,
            sampling: "none",
            animationEasing: "linear",
            progressive: 0,
            hoverLayerThreshold: 1 / 0
        }
    });
    var og = gi({
            type: "triangle",
            shape: {
                cx: 0,
                cy: 0,
                width: 0,
                height: 0
            },
            buildPath: function (t, e) {
                var n = e.cx,
                    i = e.cy,
                    r = e.width / 2,
                    a = e.height / 2;
                t.moveTo(n, i - a), t.lineTo(n + r, i + a), t.lineTo(n - r, i + a), t.closePath()
            }
        }),
        sg = gi({
            type: "diamond",
            shape: {
                cx: 0,
                cy: 0,
                width: 0,
                height: 0
            },
            buildPath: function (t, e) {
                var n = e.cx,
                    i = e.cy,
                    r = e.width / 2,
                    a = e.height / 2;
                t.moveTo(n, i - a), t.lineTo(n + r, i), t.lineTo(n, i + a), t.lineTo(n - r, i), t.closePath()
            }
        }),
        lg = gi({
            type: "pin",
            shape: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            buildPath: function (t, e) {
                var n = e.x,
                    i = e.y,
                    r = e.width / 5 * 3,
                    a = Math.max(r, e.height),
                    o = r / 2,
                    s = o * o / (a - o),
                    l = i - a + o + s,
                    h = Math.asin(s / o),
                    u = Math.cos(h) * o,
                    c = Math.sin(h),
                    f = Math.cos(h),
                    d = .6 * o,
                    p = .7 * o;
                t.moveTo(n - u, l + s), t.arc(n, l, o, Math.PI - h, 2 * Math.PI + h), t.bezierCurveTo(n + u - c * d, l + s + f * d, n, i - p, n, i), t.bezierCurveTo(n, i - p, n - u + c * d, l + s + f * d, n - u, l + s), t.closePath()
            }
        }),
        hg = gi({
            type: "arrow",
            shape: {
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            buildPath: function (t, e) {
                var n = e.height,
                    i = e.width,
                    r = e.x,
                    a = e.y,
                    o = i / 3 * 2;
                t.moveTo(r, a), t.lineTo(r + o, a + n), t.lineTo(r, a + n / 4 * 3), t.lineTo(r - o, a + n), t.lineTo(r, a), t.closePath()
            }
        }),
        ug = {
            line: function (t, e, n, i, r) {
                r.x1 = t, r.y1 = e + i / 2, r.x2 = t + n, r.y2 = e + i / 2
            },
            rect: function (t, e, n, i, r) {
                r.x = t, r.y = e, r.width = n, r.height = i
            },
            roundRect: function (t, e, n, i, r) {
                r.x = t, r.y = e, r.width = n, r.height = i, r.r = Math.min(n, i) / 4
            },
            square: function (t, e, n, i, r) {
                var a = Math.min(n, i);
                r.x = t, r.y = e, r.width = a, r.height = a
            },
            circle: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.r = Math.min(n, i) / 2
            },
            diamond: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
            },
            pin: function (t, e, n, i, r) {
                r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
            },
            arrow: function (t, e, n, i, r) {
                r.x = t + n / 2, r.y = e + i / 2, r.width = n, r.height = i
            },
            triangle: function (t, e, n, i, r) {
                r.cx = t + n / 2, r.cy = e + i / 2, r.width = n, r.height = i
            }
        },
        cg = {};
    f({
        line: Df,
        rect: Cf,
        roundRect: Cf,
        square: Cf,
        circle: yf,
        diamond: sg,
        pin: lg,
        arrow: hg,
        triangle: og
    }, function (t, e) {
        cg[e] = new t
    });
    var fg = gi({
            type: "symbol",
            shape: {
                symbolType: "",
                x: 0,
                y: 0,
                width: 0,
                height: 0
            },
            beforeBrush: function () {
                var t = this.style;
                "pin" === this.shape.symbolType && "inside" === t.textPosition && (t.textPosition = ["50%", "40%"], t.textAlign = "center", t.textVerticalAlign = "middle")
            },
            buildPath: function (t, e, n) {
                var i = e.symbolType,
                    r = cg[i];
                "none" !== e.symbolType && (r || (r = cg[i = "rect"]), ug[i](e.x, e.y, e.width, e.height, r.shape), r.buildPath(t, r.shape, n))
            }
        }),
        dg = fs.prototype,
        pg = fs.getSymbolSize = function (t, e) {
            var n = t.getItemVisual(e, "symbolSize");
            return n instanceof Array ? n.slice() : [+n, +n]
        };
    dg._createSymbol = function (t, e, n, i, r) {
        this.removeAll();
        var a = us(t, -1, -1, 2, 2, e.getItemVisual(n, "color"), r);
        a.attr({
            z2: 100,
            culling: !0,
            scale: ds(i)
        }), a.drift = ps, this._symbolType = t, this.add(a)
    }, dg.stopSymbolAnimation = function (t) {
        this.childAt(0).stopAnimation(t)
    }, dg.getSymbolPath = function () {
        return this.childAt(0)
    }, dg.getScale = function () {
        return this.childAt(0).scale
    }, dg.highlight = function () {
        this.childAt(0).trigger("emphasis")
    }, dg.downplay = function () {
        this.childAt(0).trigger("normal")
    }, dg.setZ = function (t, e) {
        var n = this.childAt(0);
        n.zlevel = t, n.z = e
    }, dg.setDraggable = function (t) {
        var e = this.childAt(0);
        e.draggable = t, e.cursor = t ? "move" : "pointer"
    }, dg.updateData = function (t, e, n) {
        this.silent = !1;
        var i = t.getItemVisual(e, "symbol") || "circle",
            r = t.hostModel,
            a = pg(t, e),
            o = i !== this._symbolType;
        if (o) {
            var s = t.getItemVisual(e, "symbolKeepAspect");
            this._createSymbol(i, t, e, a, s)
        } else(l = this.childAt(0)).silent = !1, Xi(l, {
            scale: ds(a)
        }, r, e);
        if (this._updateCommon(t, e, a, n), o) {
            var l = this.childAt(0),
                h = n && n.fadeIn,
                u = {
                    scale: l.scale.slice()
                };
            h && (u.style = {
                opacity: l.style.opacity
            }), l.scale = [0, 0], h && (l.style.opacity = 0), Ui(l, u, r, e)
        }
        this._seriesModel = r
    };
    var gg = ["itemStyle"],
        mg = ["emphasis", "itemStyle"],
        vg = ["label"],
        yg = ["emphasis", "label"];
    dg._updateCommon = function (t, e, n, i) {
        var r = this.childAt(0),
            o = t.hostModel,
            s = t.getItemVisual(e, "color");
        "image" !== r.type && r.useStyle({
            strokeNoScale: !0
        });
        var l = i && i.itemStyle,
            h = i && i.hoverItemStyle,
            u = i && i.symbolRotate,
            c = i && i.symbolOffset,
            f = i && i.labelModel,
            d = i && i.hoverLabelModel,
            p = i && i.hoverAnimation,
            g = i && i.cursorStyle;
        if (!i || t.hasItemOption) {
            var m = i && i.itemModel ? i.itemModel : t.getItemModel(e);
            l = m.getModel(gg).getItemStyle(["color"]), h = m.getModel(mg).getItemStyle(), u = m.getShallow("symbolRotate"), c = m.getShallow("symbolOffset"), f = m.getModel(vg), d = m.getModel(yg), p = m.getShallow("hoverAnimation"), g = m.getShallow("cursor")
        } else h = a({}, h);
        var v = r.style;
        r.attr("rotation", (u || 0) * Math.PI / 180 || 0), c && r.attr("position", [er(c[0], n[0]), er(c[1], n[1])]), g && r.attr("cursor", g), r.setColor(s, i && i.symbolInnerColor), r.setStyle(l);
        var y = t.getItemVisual(e, "opacity");
        null != y && (v.opacity = y);
        var _ = t.getItemVisual(e, "liftZ"),
            x = r.__z2Origin;
        null != _ ? null == x && (r.__z2Origin = r.z2, r.z2 += _) : null != x && (r.z2 = x, r.__z2Origin = null);
        var w = i && i.useNameLabel;
        Ni(v, h, f, d, {
            labelFetcher: o,
            labelDataIndex: e,
            defaultText: function (e, n) {
                return w ? t.getName(e) : cs(t, e)
            },
            isRectText: !0,
            autoColor: s
        }), r.off("mouseover").off("mouseout").off("emphasis").off("normal"), r.hoverStyle = h, Ei(r);
        var b = ds(n);
        if (p && o.isAnimationEnabled()) {
            var M = function () {
                    if (!this.incremental) {
                        var t = b[1] / b[0];
                        this.animateTo({
                            scale: [Math.max(1.1 * b[0], b[0] + 3), Math.max(1.1 * b[1], b[1] + 3 * t)]
                        }, 400, "elasticOut")
                    }
                },
                S = function () {
                    this.incremental || this.animateTo({
                        scale: b
                    }, 400, "elasticOut")
                };
            r.on("mouseover", M).on("mouseout", S).on("emphasis", M).on("normal", S)
        }
    }, dg.fadeOut = function (t, e) {
        var n = this.childAt(0);
        this.silent = n.silent = !0, !(e && e.keepLabel) && (n.style.text = null), Xi(n, {
            style: {
                opacity: 0
            },
            scale: [0, 0]
        }, this._seriesModel, this.dataIndex, t)
    }, h(fs, du);
    var _g = gs.prototype;
    _g.updateData = function (t, e) {
        e = vs(e);
        var n = this.group,
            i = t.hostModel,
            r = this._data,
            a = this._symbolCtor,
            o = ys(t);
        r || n.removeAll(), t.diff(r).add(function (i) {
            var r = t.getItemLayout(i);
            if (ms(t, r, i, e)) {
                var s = new a(t, i, o);
                s.attr("position", r), t.setItemGraphicEl(i, s), n.add(s)
            }
        }).update(function (s, l) {
            var h = r.getItemGraphicEl(l),
                u = t.getItemLayout(s);
            ms(t, u, s, e) ? (h ? (h.updateData(t, s, o), Xi(h, {
                position: u
            }, i)) : (h = new a(t, s)).attr("position", u), n.add(h), t.setItemGraphicEl(s, h)) : n.remove(h)
        }).remove(function (t) {
            var e = r.getItemGraphicEl(t);
            e && e.fadeOut(function () {
                n.remove(e)
            })
        }).execute(), this._data = t
    }, _g.isPersistent = function () {
        return !0
    }, _g.updateLayout = function () {
        var t = this._data;
        t && t.eachItemGraphicEl(function (e, n) {
            var i = t.getItemLayout(n);
            e.attr("position", i)
        })
    }, _g.incrementalPrepareUpdate = function (t) {
        this._seriesScope = ys(t), this._data = null, this.group.removeAll()
    }, _g.incrementalUpdate = function (t, e, n) {
        n = vs(n);
        for (var i = t.start; i < t.end; i++) {
            var r = e.getItemLayout(i);
            if (ms(e, r, i, n)) {
                var a = new this._symbolCtor(e, i, this._seriesScope);
                a.traverse(function (t) {
                    t.isGroup || (t.incremental = t.useHoverLayer = !0)
                }), a.attr("position", r), this.group.add(a), e.setItemGraphicEl(i, a)
            }
        }
    }, _g.remove = function (t) {
        var e = this.group,
            n = this._data;
        n && t ? n.eachItemGraphicEl(function (t) {
            t.fadeOut(function () {
                e.remove(t)
            })
        }) : e.removeAll()
    };
    var xg = function (t, e, n, i, r, a, o, s) {
            for (var l = bs(t, e), h = [], u = [], c = [], f = [], d = [], p = [], g = [], m = _s(r, e, o), v = _s(a, t, s), y = 0; y < l.length; y++) {
                var _ = l[y],
                    x = !0;
                switch (_.cmd) {
                    case "=":
                        var w = t.getItemLayout(_.idx),
                            b = e.getItemLayout(_.idx1);
                        (isNaN(w[0]) || isNaN(w[1])) && (w = b.slice()), h.push(w), u.push(b), c.push(n[_.idx]), f.push(i[_.idx1]), g.push(e.getRawIndex(_.idx1));
                        break;
                    case "+":
                        M = _.idx;
                        h.push(r.dataToPoint([e.get(m.dataDimsForPoint[0], M), e.get(m.dataDimsForPoint[1], M)])), u.push(e.getItemLayout(M).slice()), c.push(ws(m, r, e, M)), f.push(i[M]), g.push(e.getRawIndex(M));
                        break;
                    case "-":
                        var M = _.idx,
                            S = t.getRawIndex(M);
                        S !== M ? (h.push(t.getItemLayout(M)), u.push(a.dataToPoint([t.get(v.dataDimsForPoint[0], M), t.get(v.dataDimsForPoint[1], M)])), c.push(n[M]), f.push(ws(v, a, t, M)), g.push(S)) : x = !1
                }
                x && (d.push(_), p.push(p.length))
            }
            p.sort(function (t, e) {
                return g[t] - g[e]
            });
            for (var I = [], T = [], C = [], D = [], k = [], y = 0; y < p.length; y++) {
                M = p[y];
                I[y] = h[M], T[y] = u[M], C[y] = c[M], D[y] = f[M], k[y] = d[M]
            }
            return {
                current: I,
                next: T,
                stackedOnCurrent: C,
                stackedOnNext: D,
                status: k
            }
        },
        wg = j,
        bg = Z,
        Mg = function (t, e, n, i) {
            return t[0] = e[0] + n[0] * i, t[1] = e[1] + n[1] * i, t
        },
        Sg = function (t, e) {
            return t[0] = e[0], t[1] = e[1], t
        },
        Ig = [],
        Tg = [],
        Cg = [],
        Dg = ai.extend({
            type: "ec-polyline",
            shape: {
                points: [],
                smooth: 0,
                smoothConstraint: !0,
                smoothMonotone: null,
                connectNulls: !1
            },
            style: {
                fill: null,
                stroke: "#000"
            },
            brush: xf(ai.prototype.brush),
            buildPath: function (t, e) {
                var n = e.points,
                    i = 0,
                    r = n.length,
                    a = Cs(n, e.smoothConstraint);
                if (e.connectNulls) {
                    for (; r > 0 && Ms(n[r - 1]); r--);
                    for (; i < r && Ms(n[i]); i++);
                }
                for (; i < r;) i += Ss(t, n, i, r, r, 1, a.min, a.max, e.smooth, e.smoothMonotone, e.connectNulls) + 1
            }
        }),
        kg = ai.extend({
            type: "ec-polygon",
            shape: {
                points: [],
                stackedOnPoints: [],
                smooth: 0,
                stackedOnSmooth: 0,
                smoothConstraint: !0,
                smoothMonotone: null,
                connectNulls: !1
            },
            brush: xf(ai.prototype.brush),
            buildPath: function (t, e) {
                var n = e.points,
                    i = e.stackedOnPoints,
                    r = 0,
                    a = n.length,
                    o = e.smoothMonotone,
                    s = Cs(n, e.smoothConstraint),
                    l = Cs(i, e.smoothConstraint);
                if (e.connectNulls) {
                    for (; a > 0 && Ms(n[a - 1]); a--);
                    for (; r < a && Ms(n[r]); r++);
                }
                for (; r < a;) {
                    var h = Ss(t, n, r, a, a, 1, s.min, s.max, e.smooth, o, e.connectNulls);
                    Ss(t, i, r + h - 1, h, a, -1, l.min, l.max, e.stackedOnSmooth, o, e.connectNulls), r += h + 1, t.closePath()
                }
            }
        });
    Oa.extend({
        type: "line",
        init: function () {
            var t = new du,
                e = new gs;
            this.group.add(e.group), this._symbolDraw = e, this._lineGroup = t
        },
        render: function (t, e, n) {
            var i = t.coordinateSystem,
                r = this.group,
                a = t.getData(),
                s = t.getModel("lineStyle"),
                l = t.getModel("areaStyle"),
                h = a.mapArray(a.getItemLayout),
                u = "polar" === i.type,
                c = this._coordSys,
                f = this._symbolDraw,
                d = this._polyline,
                p = this._polygon,
                g = this._lineGroup,
                m = t.get("animation"),
                v = !l.isEmpty(),
                y = l.get("origin"),
                _ = Ls(i, a, _s(i, a, y)),
                x = t.get("showSymbol"),
                w = x && !u && Bs(t, a, i),
                b = this._data;
            b && b.eachItemGraphicEl(function (t, e) {
                t.__temp && (r.remove(t), b.setItemGraphicEl(e, null))
            }), x || f.remove(), r.add(g);
            var M = !u && t.get("step");
            d && c.type === i.type && M === this._step ? (v && !p ? p = this._newPolygon(h, _, i, m) : p && !v && (g.remove(p), p = this._polygon = null), g.setClipPath(Es(i, !1, !1, t)), x && f.updateData(a, {
                isIgnore: w,
                clipShape: Es(i, !1, !0, t)
            }), a.eachItemGraphicEl(function (t) {
                t.stopAnimation(!0)
            }), Ds(this._stackedOnPoints, _) && Ds(this._points, h) || (m ? this._updateAnimation(a, _, i, n, M, y) : (M && (h = Ns(h, i, M), _ = Ns(_, i, M)), d.setShape({
                points: h
            }), p && p.setShape({
                points: h,
                stackedOnPoints: _
            })))) : (x && f.updateData(a, {
                isIgnore: w,
                clipShape: Es(i, !1, !0, t)
            }), M && (h = Ns(h, i, M), _ = Ns(_, i, M)), d = this._newPolyline(h, i, m), v && (p = this._newPolygon(h, _, i, m)), g.setClipPath(Es(i, !0, !1, t)));
            var S = Rs(a, i) || a.getVisual("color");
            d.useStyle(o(s.getLineStyle(), {
                fill: "none",
                stroke: S,
                lineJoin: "bevel"
            }));
            var I = t.get("smooth");
            if (I = ks(t.get("smooth")), d.setShape({
                    smooth: I,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                }), p) {
                var T = a.getCalculationInfo("stackedOnSeries"),
                    C = 0;
                p.useStyle(o(l.getAreaStyle(), {
                    fill: S,
                    opacity: .7,
                    lineJoin: "bevel"
                })), T && (C = ks(T.get("smooth"))), p.setShape({
                    smooth: I,
                    stackedOnSmooth: C,
                    smoothMonotone: t.get("smoothMonotone"),
                    connectNulls: t.get("connectNulls")
                })
            }
            this._data = a, this._coordSys = i, this._stackedOnPoints = _, this._points = h, this._step = M, this._valueOrigin = y
        },
        dispose: function () {},
        highlight: function (t, e, n, i) {
            var r = t.getData(),
                a = pn(r, i);
            if (!(a instanceof Array) && null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                if (!o) {
                    var s = r.getItemLayout(a);
                    if (!s) return;
                    (o = new fs(r, a)).position = s, o.setZ(t.get("zlevel"), t.get("z")), o.ignore = isNaN(s[0]) || isNaN(s[1]), o.__temp = !0, r.setItemGraphicEl(a, o), o.stopSymbolAnimation(!0), this.group.add(o)
                }
                o.highlight()
            } else Oa.prototype.highlight.call(this, t, e, n, i)
        },
        downplay: function (t, e, n, i) {
            var r = t.getData(),
                a = pn(r, i);
            if (null != a && a >= 0) {
                var o = r.getItemGraphicEl(a);
                o && (o.__temp ? (r.setItemGraphicEl(a, null), this.group.remove(o)) : o.downplay())
            } else Oa.prototype.downplay.call(this, t, e, n, i)
        },
        _newPolyline: function (t) {
            var e = this._polyline;
            return e && this._lineGroup.remove(e), e = new Dg({
                shape: {
                    points: t
                },
                silent: !0,
                z2: 10
            }), this._lineGroup.add(e), this._polyline = e, e
        },
        _newPolygon: function (t, e) {
            var n = this._polygon;
            return n && this._lineGroup.remove(n), n = new kg({
                shape: {
                    points: t,
                    stackedOnPoints: e
                },
                silent: !0
            }), this._lineGroup.add(n), this._polygon = n, n
        },
        _updateAnimation: function (t, e, n, i, r, a) {
            var o = this._polyline,
                s = this._polygon,
                l = t.hostModel,
                h = xg(this._data, t, this._stackedOnPoints, e, this._coordSys, n, this._valueOrigin, a),
                u = h.current,
                c = h.stackedOnCurrent,
                f = h.next,
                d = h.stackedOnNext;
            r && (u = Ns(h.current, n, r), c = Ns(h.stackedOnCurrent, n, r), f = Ns(h.next, n, r), d = Ns(h.stackedOnNext, n, r)), o.shape.__points = h.current, o.shape.points = u, Xi(o, {
                shape: {
                    points: f
                }
            }, l), s && (s.setShape({
                points: u,
                stackedOnPoints: c
            }), Xi(s, {
                shape: {
                    points: f,
                    stackedOnPoints: d
                }
            }, l));
            for (var p = [], g = h.status, m = 0; m < g.length; m++)
                if ("=" === g[m].cmd) {
                    var v = t.getItemGraphicEl(g[m].idx1);
                    v && p.push({
                        el: v,
                        ptIdx: m
                    })
                }
            o.animators && o.animators.length && o.animators[0].during(function () {
                for (var t = 0; t < p.length; t++) p[t].el.attr("position", o.shape.__points[p[t].ptIdx])
            })
        },
        remove: function (t) {
            var e = this.group,
                n = this._data;
            this._lineGroup.removeAll(), this._symbolDraw.remove(!0), n && n.eachItemGraphicEl(function (t, i) {
                t.__temp && (e.remove(t), n.setItemGraphicEl(i, null))
            }), this._polyline = this._polygon = this._coordSys = this._points = this._stackedOnPoints = this._data = null
        }
    });
    var Ag = {
            average: function (t) {
                for (var e = 0, n = 0, i = 0; i < t.length; i++) isNaN(t[i]) || (e += t[i], n++);
                return 0 === n ? NaN : e / n
            },
            sum: function (t) {
                for (var e = 0, n = 0; n < t.length; n++) e += t[n] || 0;
                return e
            },
            max: function (t) {
                for (var e = -1 / 0, n = 0; n < t.length; n++) t[n] > e && (e = t[n]);
                return isFinite(e) ? e : NaN
            },
            min: function (t) {
                for (var e = 1 / 0, n = 0; n < t.length; n++) t[n] < e && (e = t[n]);
                return isFinite(e) ? e : NaN
            },
            nearest: function (t) {
                return t[0]
            }
        },
        Lg = function (t, e) {
            return Math.round(t.length / 2)
        };
    Fs.prototype.parse = function (t) {
        return t
    }, Fs.prototype.getSetting = function (t) {
        return this._setting[t]
    }, Fs.prototype.contain = function (t) {
        var e = this._extent;
        return t >= e[0] && t <= e[1]
    }, Fs.prototype.normalize = function (t) {
        var e = this._extent;
        return e[1] === e[0] ? .5 : (t - e[0]) / (e[1] - e[0])
    }, Fs.prototype.scale = function (t) {
        var e = this._extent;
        return t * (e[1] - e[0]) + e[0]
    }, Fs.prototype.unionExtent = function (t) {
        var e = this._extent;
        t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1])
    }, Fs.prototype.unionExtentFromData = function (t, e) {
        this.unionExtent(t.getApproximateExtent(e))
    }, Fs.prototype.getExtent = function () {
        return this._extent.slice()
    }, Fs.prototype.setExtent = function (t, e) {
        var n = this._extent;
        isNaN(t) || (n[0] = t), isNaN(e) || (n[1] = e)
    }, Fs.prototype.isBlank = function () {
        return this._isBlank
    }, Fs.prototype.setBlank = function (t) {
        this._isBlank = t
    }, Fs.prototype.getLabel = null, bn(Fs), Tn(Fs, {
        registerWhenExtend: !0
    }), Vs.createByAxisModel = function (t) {
        var e = t.option,
            n = e.data,
            i = n && d(n, Hs);
        return new Vs({
            categories: i,
            needCollect: !i,
            deduplication: !1 !== e.dedplication
        })
    };
    var Pg = Vs.prototype;
    Pg.getOrdinal = function (t) {
        return Ws(this).get(t)
    }, Pg.parseAndCollect = function (t) {
        var e, n = this._needCollect;
        if ("string" != typeof t && !n) return t;
        if (n && !this._deduplication) return e = this.categories.length, this.categories[e] = t, e;
        var i = Ws(this);
        return null == (e = i.get(t)) && (n ? (e = this.categories.length, this.categories[e] = t, i.set(t, e)) : e = NaN), e
    };
    var Og = Fs.prototype,
        Eg = Fs.extend({
            type: "ordinal",
            init: function (t, e) {
                t && !y(t) || (t = new Vs({
                    categories: t
                })), this._ordinalMeta = t, this._extent = e || [0, t.categories.length - 1]
            },
            parse: function (t) {
                return "string" == typeof t ? this._ordinalMeta.getOrdinal(t) : Math.round(t)
            },
            contain: function (t) {
                return t = this.parse(t), Og.contain.call(this, t) && null != this._ordinalMeta.categories[t]
            },
            normalize: function (t) {
                return Og.normalize.call(this, this.parse(t))
            },
            scale: function (t) {
                return Math.round(Og.scale.call(this, t))
            },
            getTicks: function () {
                for (var t = [], e = this._extent, n = e[0]; n <= e[1];) t.push(n), n++;
                return t
            },
            getLabel: function (t) {
                if (!this.isBlank()) return this._ordinalMeta.categories[t]
            },
            count: function () {
                return this._extent[1] - this._extent[0] + 1
            },
            unionExtentFromData: function (t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            },
            getOrdinalMeta: function () {
                return this._ordinalMeta
            },
            niceTicks: B,
            niceExtent: B
        });
    Eg.create = function () {
        return new Eg
    };
    var Ng = nr,
        Rg = nr,
        Bg = Fs.extend({
            type: "interval",
            _interval: 0,
            _intervalPrecision: 2,
            setExtent: function (t, e) {
                var n = this._extent;
                isNaN(t) || (n[0] = parseFloat(t)), isNaN(e) || (n[1] = parseFloat(e))
            },
            unionExtent: function (t) {
                var e = this._extent;
                t[0] < e[0] && (e[0] = t[0]), t[1] > e[1] && (e[1] = t[1]), Bg.prototype.setExtent.call(this, e[0], e[1])
            },
            getInterval: function () {
                return this._interval
            },
            setInterval: function (t) {
                this._interval = t, this._niceExtent = this._extent.slice(), this._intervalPrecision = qs(t)
            },
            getTicks: function () {
                return Ys(this._interval, this._extent, this._niceExtent, this._intervalPrecision)
            },
            getLabel: function (t, e) {
                if (null == t) return "";
                var n = e && e.precision;
                return null == n ? n = ir(t) || 0 : "auto" === n && (n = this._intervalPrecision), t = Rg(t, n, !0), fr(t)
            },
            niceTicks: function (t, e, n) {
                t = t || 5;
                var i = this._extent,
                    r = i[1] - i[0];
                if (isFinite(r)) {
                    r < 0 && (r = -r, i.reverse());
                    var a = Gs(i, t, e, n);
                    this._intervalPrecision = a.intervalPrecision, this._interval = a.interval, this._niceExtent = a.niceTickExtent
                }
            },
            niceExtent: function (t) {
                var e = this._extent;
                if (e[0] === e[1])
                    if (0 !== e[0]) {
                        var n = e[0];
                        t.fixMax ? e[0] -= n / 2 : (e[1] += n / 2, e[0] -= n / 2)
                    } else e[1] = 1;
                var i = e[1] - e[0];
                isFinite(i) || (e[0] = 0, e[1] = 1), this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                var r = this._interval;
                t.fixMin || (e[0] = Rg(Math.floor(e[0] / r) * r)), t.fixMax || (e[1] = Rg(Math.ceil(e[1] / r) * r))
            }
        });
    Bg.create = function () {
        return new Bg
    };
    var zg = "__ec_stack_",
        Fg = "undefined" != typeof Float32Array ? Float32Array : Array,
        Vg = {
            seriesType: "bar",
            plan: Kd(),
            reset: function (t) {
                if (tl(t) && el(t)) {
                    var e = t.getData(),
                        n = t.coordinateSystem,
                        i = n.getBaseAxis(),
                        r = n.getOtherAxis(i),
                        a = e.mapDimension(r.dim),
                        o = e.mapDimension(i.dim),
                        s = r.isHorizontal(),
                        l = s ? 0 : 1,
                        h = Js(Ks([t]), i, t).width;
                    return h > .5 || (h = .5), {
                        progress: function (t, e) {
                            for (var u, c = new Fg(2 * t.count), f = [], d = [], p = 0; null != (u = t.next());) d[l] = e.get(a, u), d[1 - l] = e.get(o, u), f = n.dataToPoint(d, null, f), c[p++] = f[0], c[p++] = f[1];
                            e.setLayout({
                                largePoints: c,
                                barWidth: h,
                                valueAxisStart: nl(i, r, !1),
                                valueAxisHorizontal: s
                            })
                        }
                    }
                }
            }
        },
        Wg = Bg.prototype,
        Hg = Math.ceil,
        Gg = Math.floor,
        qg = function (t, e, n, i) {
            for (; n < i;) {
                var r = n + i >>> 1;
                t[r][1] < e ? n = r + 1 : i = r
            }
            return n
        },
        Xg = Bg.extend({
            type: "time",
            getLabel: function (t) {
                var e = this._stepLvl,
                    n = new Date(t);
                return vr(e[0], n, this.getSetting("useUTC"))
            },
            niceExtent: function (t) {
                var e = this._extent;
                if (e[0] === e[1] && (e[0] -= 864e5, e[1] += 864e5), e[1] === -1 / 0 && e[0] === 1 / 0) {
                    var n = new Date;
                    e[1] = +new Date(n.getFullYear(), n.getMonth(), n.getDate()), e[0] = e[1] - 864e5
                }
                this.niceTicks(t.splitNumber, t.minInterval, t.maxInterval);
                var i = this._interval;
                t.fixMin || (e[0] = nr(Gg(e[0] / i) * i)), t.fixMax || (e[1] = nr(Hg(e[1] / i) * i))
            },
            niceTicks: function (t, e, n) {
                t = t || 10;
                var i = this._extent,
                    r = i[1] - i[0],
                    a = r / t;
                null != e && a < e && (a = e), null != n && a > n && (a = n);
                var o = Ug.length,
                    s = qg(Ug, a, 0, o),
                    l = Ug[Math.min(s, o - 1)],
                    h = l[1];
                "year" === l[0] && (h *= cr(r / h / t, !0));
                var u = this.getSetting("useUTC") ? 0 : 60 * new Date(+i[0] || +i[1]).getTimezoneOffset() * 1e3,
                    c = [Math.round(Hg((i[0] - u) / h) * h + u), Math.round(Gg((i[1] - u) / h) * h + u)];
                Us(c, i), this._stepLvl = l, this._interval = h, this._niceExtent = c
            },
            parse: function (t) {
                return +lr(t)
            }
        });
    f(["contain", "normalize"], function (t) {
        Xg.prototype[t] = function (e) {
            return Wg[t].call(this, this.parse(e))
        }
    });
    var Ug = [
        ["hh:mm:ss", 1e3],
        ["hh:mm:ss", 5e3],
        ["hh:mm:ss", 1e4],
        ["hh:mm:ss", 15e3],
        ["hh:mm:ss", 3e4],
        ["hh:mm\nMM-dd", 6e4],
        ["hh:mm\nMM-dd", 3e5],
        ["hh:mm\nMM-dd", 6e5],
        ["hh:mm\nMM-dd", 9e5],
        ["hh:mm\nMM-dd", 18e5],
        ["hh:mm\nMM-dd", 36e5],
        ["hh:mm\nMM-dd", 72e5],
        ["hh:mm\nMM-dd", 216e5],
        ["hh:mm\nMM-dd", 432e5],
        ["MM-dd\nyyyy", 864e5],
        ["MM-dd\nyyyy", 1728e5],
        ["MM-dd\nyyyy", 2592e5],
        ["MM-dd\nyyyy", 3456e5],
        ["MM-dd\nyyyy", 432e6],
        ["MM-dd\nyyyy", 5184e5],
        ["week", 6048e5],
        ["MM-dd\nyyyy", 864e6],
        ["week", 12096e5],
        ["week", 18144e5],
        ["month", 26784e5],
        ["week", 36288e5],
        ["month", 53568e5],
        ["week", 36288e5],
        ["quarter", 8208e6],
        ["month", 107136e5],
        ["month", 13392e6],
        ["half-year", 16416e6],
        ["month", 214272e5],
        ["month", 26784e6],
        ["year", 32832e6]
    ];
    Xg.create = function (t) {
        return new Xg({
            useUTC: t.ecModel.get("useUTC")
        })
    };
    var Yg = Fs.prototype,
        jg = Bg.prototype,
        Zg = ir,
        $g = nr,
        Kg = Math.floor,
        Qg = Math.ceil,
        Jg = Math.pow,
        tm = Math.log,
        em = Fs.extend({
            type: "log",
            base: 10,
            $constructor: function () {
                Fs.apply(this, arguments), this._originalScale = new Bg
            },
            getTicks: function () {
                var t = this._originalScale,
                    e = this._extent,
                    n = t.getExtent();
                return d(jg.getTicks.call(this), function (i) {
                    var r = nr(Jg(this.base, i));
                    return r = i === e[0] && t.__fixMin ? il(r, n[0]) : r, r = i === e[1] && t.__fixMax ? il(r, n[1]) : r
                }, this)
            },
            getLabel: jg.getLabel,
            scale: function (t) {
                return t = Yg.scale.call(this, t), Jg(this.base, t)
            },
            setExtent: function (t, e) {
                var n = this.base;
                t = tm(t) / tm(n), e = tm(e) / tm(n), jg.setExtent.call(this, t, e)
            },
            getExtent: function () {
                var t = this.base,
                    e = Yg.getExtent.call(this);
                e[0] = Jg(t, e[0]), e[1] = Jg(t, e[1]);
                var n = this._originalScale,
                    i = n.getExtent();
                return n.__fixMin && (e[0] = il(e[0], i[0])), n.__fixMax && (e[1] = il(e[1], i[1])), e
            },
            unionExtent: function (t) {
                this._originalScale.unionExtent(t);
                var e = this.base;
                t[0] = tm(t[0]) / tm(e), t[1] = tm(t[1]) / tm(e), Yg.unionExtent.call(this, t)
            },
            unionExtentFromData: function (t, e) {
                this.unionExtent(t.getApproximateExtent(e))
            },
            niceTicks: function (t) {
                t = t || 10;
                var e = this._extent,
                    n = e[1] - e[0];
                if (!(n === 1 / 0 || n <= 0)) {
                    var i = hr(n);
                    for (t / n * i <= .5 && (i *= 10); !isNaN(i) && Math.abs(i) < 1 && Math.abs(i) > 0;) i *= 10;
                    var r = [nr(Qg(e[0] / i) * i), nr(Kg(e[1] / i) * i)];
                    this._interval = i, this._niceExtent = r
                }
            },
            niceExtent: function (t) {
                jg.niceExtent.call(this, t);
                var e = this._originalScale;
                e.__fixMin = t.fixMin, e.__fixMax = t.fixMax
            }
        });
    f(["contain", "normalize"], function (t) {
        em.prototype[t] = function (e) {
            return e = tm(e) / tm(this.base), Yg[t].call(this, e)
        }
    }), em.create = function () {
        return new em
    };
    var nm = function (t) {
        this._axes = {}, this._dimList = [], this.name = t || ""
    };
    nm.prototype = {
        constructor: nm,
        type: "cartesian",
        getAxis: function (t) {
            return this._axes[t]
        },
        getAxes: function () {
            return d(this._dimList, dl, this)
        },
        getAxesByScale: function (t) {
            return t = t.toLowerCase(), g(this.getAxes(), function (e) {
                return e.scale.type === t
            })
        },
        addAxis: function (t) {
            var e = t.dim;
            this._axes[e] = t, this._dimList.push(e)
        },
        dataToCoord: function (t) {
            return this._dataCoordConvert(t, "dataToCoord")
        },
        coordToData: function (t) {
            return this._dataCoordConvert(t, "coordToData")
        },
        _dataCoordConvert: function (t, e) {
            for (var n = this._dimList, i = t instanceof Array ? [] : {}, r = 0; r < n.length; r++) {
                var a = n[r],
                    o = this._axes[a];
                i[a] = o[e](t[a])
            }
            return i
        }
    }, pl.prototype = {
        constructor: pl,
        type: "cartesian2d",
        dimensions: ["x", "y"],
        getBaseAxis: function () {
            return this.getAxesByScale("ordinal")[0] || this.getAxesByScale("time")[0] || this.getAxis("x")
        },
        containPoint: function (t) {
            var e = this.getAxis("x"),
                n = this.getAxis("y");
            return e.contain(e.toLocalCoord(t[0])) && n.contain(n.toLocalCoord(t[1]))
        },
        containData: function (t) {
            return this.getAxis("x").containData(t[0]) && this.getAxis("y").containData(t[1])
        },
        dataToPoint: function (t, e, n) {
            var i = this.getAxis("x"),
                r = this.getAxis("y");
            return n = n || [], n[0] = i.toGlobalCoord(i.dataToCoord(t[0])), n[1] = r.toGlobalCoord(r.dataToCoord(t[1])), n
        },
        clampData: function (t, e) {
            var n = this.getAxis("x").scale,
                i = this.getAxis("y").scale,
                r = n.getExtent(),
                a = i.getExtent(),
                o = n.parse(t[0]),
                s = i.parse(t[1]);
            return e = e || [], e[0] = Math.min(Math.max(Math.min(r[0], r[1]), o), Math.max(r[0], r[1])), e[1] = Math.min(Math.max(Math.min(a[0], a[1]), s), Math.max(a[0], a[1])), e
        },
        pointToData: function (t, e) {
            var n = this.getAxis("x"),
                i = this.getAxis("y");
            return e = e || [], e[0] = n.coordToData(n.toLocalCoord(t[0])), e[1] = i.coordToData(i.toLocalCoord(t[1])), e
        },
        getOtherAxis: function (t) {
            return this.getAxis("x" === t.dim ? "y" : "x")
        }
    }, h(pl, nm);
    var im = gn(),
        rm = [0, 1],
        am = function (t, e, n) {
            this.dim = t, this.scale = e, this._extent = n || [0, 0], this.inverse = !1, this.onBand = !1
        };
    am.prototype = {
        constructor: am,
        contain: function (t) {
            var e = this._extent,
                n = Math.min(e[0], e[1]),
                i = Math.max(e[0], e[1]);
            return t >= n && t <= i
        },
        containData: function (t) {
            return this.contain(this.dataToCoord(t))
        },
        getExtent: function () {
            return this._extent.slice()
        },
        getPixelPrecision: function (t) {
            return rr(t || this.scale.getExtent(), this._extent)
        },
        setExtent: function (t, e) {
            var n = this._extent;
            n[0] = t, n[1] = e
        },
        dataToCoord: function (t, e) {
            var n = this._extent,
                i = this.scale;
            return t = i.normalize(t), this.onBand && "ordinal" === i.type && Al(n = n.slice(), i.count()), tr(t, rm, n, e)
        },
        coordToData: function (t, e) {
            var n = this._extent,
                i = this.scale;
            this.onBand && "ordinal" === i.type && Al(n = n.slice(), i.count());
            var r = tr(t, n, rm, e);
            return this.scale.scale(r)
        },
        pointToData: function (t, e) {},
        getTicksCoords: function (t) {
            var e = (t = t || {}).tickModel || this.getTickModel(),
                n = ml(this, e),
                i = d(n.ticks, function (t) {
                    return {
                        coord: this.dataToCoord(t),
                        tickValue: t
                    }
                }, this),
                r = e.get("alignWithLabel");
            return Ll(this, i, n.tickCategoryInterval, r, t.clamp), i
        },
        getViewLabels: function () {
            return gl(this).labels
        },
        getLabelModel: function () {
            return this.model.getModel("axisLabel")
        },
        getTickModel: function () {
            return this.model.getModel("axisTick")
        },
        getBandWidth: function () {
            var t = this._extent,
                e = this.scale.getExtent(),
                n = e[1] - e[0] + (this.onBand ? 1 : 0);
            0 === n && (n = 1);
            var i = Math.abs(t[1] - t[0]);
            return Math.abs(i) / n
        },
        isHorizontal: null,
        getRotate: null,
        calculateCategoryInterval: function () {
            return Il(this)
        }
    };
    var om = function (t, e, n, i, r) {
        am.call(this, t, e, n), this.type = i || "value", this.position = r || "bottom"
    };
    om.prototype = {
        constructor: om,
        index: 0,
        getAxesOnZeroOf: null,
        model: null,
        isHorizontal: function () {
            var t = this.position;
            return "top" === t || "bottom" === t
        },
        getGlobalExtent: function (t) {
            var e = this.getExtent();
            return e[0] = this.toGlobalCoord(e[0]), e[1] = this.toGlobalCoord(e[1]), t && e[0] > e[1] && e.reverse(), e
        },
        getOtherAxis: function () {
            this.grid.getOtherAxis()
        },
        pointToData: function (t, e) {
            return this.coordToData(this.toLocalCoord(t["x" === this.dim ? 0 : 1]), e)
        },
        toLocalCoord: null,
        toGlobalCoord: null
    }, h(om, am);
    var sm = {
            show: !0,
            zlevel: 0,
            z: 0,
            inverse: !1,
            name: "",
            nameLocation: "end",
            nameRotate: null,
            nameTruncate: {
                maxWidth: null,
                ellipsis: "...",
                placeholder: "."
            },
            nameTextStyle: {},
            nameGap: 15,
            silent: !1,
            triggerEvent: !1,
            tooltip: {
                show: !1
            },
            axisPointer: {},
            axisLine: {
                show: !0,
                onZero: !0,
                onZeroAxisIndex: null,
                lineStyle: {
                    color: "#333",
                    width: 1,
                    type: "solid"
                },
                symbol: ["none", "none"],
                symbolSize: [10, 15]
            },
            axisTick: {
                show: !0,
                inside: !1,
                length: 5,
                lineStyle: {
                    width: 1
                }
            },
            axisLabel: {
                show: !0,
                inside: !1,
                rotate: 0,
                showMinLabel: null,
                showMaxLabel: null,
                margin: 8,
                fontSize: 12
            },
            splitLine: {
                show: !0,
                lineStyle: {
                    color: ["#ccc"],
                    width: 1,
                    type: "solid"
                }
            },
            splitArea: {
                show: !1,
                areaStyle: {
                    color: ["rgba(250,250,250,0.3)", "rgba(200,200,200,0.3)"]
                }
            }
        },
        lm = {};
    lm.categoryAxis = i({
        boundaryGap: !0,
        deduplication: null,
        splitLine: {
            show: !1
        },
        axisTick: {
            alignWithLabel: !1,
            interval: "auto"
        },
        axisLabel: {
            interval: "auto"
        }
    }, sm), lm.valueAxis = i({
        boundaryGap: [0, 0],
        splitNumber: 5
    }, sm), lm.timeAxis = o({
        scale: !0,
        min: "dataMin",
        max: "dataMax"
    }, lm.valueAxis), lm.logAxis = o({
        scale: !0,
        logBase: 10
    }, lm.valueAxis);
    var hm = ["value", "category", "time", "log"],
        um = function (t, e, n, a) {
            f(hm, function (o) {
                e.extend({
                    type: t + "Axis." + o,
                    mergeDefaultAndTheme: function (e, r) {
                        var a = this.layoutMode,
                            s = a ? wr(e) : {};
                        i(e, r.getTheme().get(o + "Axis")), i(e, this.getDefaultOption()), e.type = n(t, e), a && xr(e, s, a)
                    },
                    optionUpdated: function () {
                        "category" === this.option.type && (this.__ordinalMeta = Vs.createByAxisModel(this))
                    },
                    getCategories: function (t) {
                        var e = this.option;
                        if ("category" === e.type) return t ? e.data : this.__ordinalMeta.categories
                    },
                    getOrdinalMeta: function () {
                        return this.__ordinalMeta
                    },
                    defaultOption: r([{}, lm[o + "Axis"], a], !0)
                })
            }), ld.registerSubTypeDefaulter(t + "Axis", v(n, t))
        },
        cm = {
            getMin: function (t) {
                var e = this.option,
                    n = t || null == e.rangeStart ? e.min : e.rangeStart;
                return this.axis && null != n && "dataMin" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)), n
            },
            getMax: function (t) {
                var e = this.option,
                    n = t || null == e.rangeEnd ? e.max : e.rangeEnd;
                return this.axis && null != n && "dataMax" !== n && "function" != typeof n && !I(n) && (n = this.axis.scale.parse(n)), n
            },
            getNeedCrossZero: function () {
                var t = this.option;
                return null == t.rangeStart && null == t.rangeEnd && !t.scale
            },
            getCoordSysModel: B,
            setRange: function (t, e) {
                this.option.rangeStart = t, this.option.rangeEnd = e
            },
            resetRange: function () {
                this.option.rangeStart = this.option.rangeEnd = null
            }
        },
        fm = ld.extend({
            type: "cartesian2dAxis",
            axis: null,
            init: function () {
                fm.superApply(this, "init", arguments), this.resetRange()
            },
            mergeOption: function () {
                fm.superApply(this, "mergeOption", arguments), this.resetRange()
            },
            restoreData: function () {
                fm.superApply(this, "restoreData", arguments), this.resetRange()
            },
            getCoordSysModel: function () {
                return this.ecModel.queryComponents({
                    mainType: "grid",
                    index: this.option.gridIndex,
                    id: this.option.gridId
                })[0]
            }
        });
    i(fm.prototype, cm);
    var dm = {
        offset: 0
    };
    um("x", fm, Pl, dm), um("y", fm, Pl, dm), ld.extend({
        type: "grid",
        dependencies: ["xAxis", "yAxis"],
        layoutMode: "box",
        coordinateSystem: null,
        defaultOption: {
            show: !1,
            zlevel: 0,
            z: 0,
            left: "10%",
            top: 60,
            right: "10%",
            bottom: 60,
            containLabel: !1,
            backgroundColor: "rgba(0,0,0,0)",
            borderWidth: 1,
            borderColor: "#ccc"
        }
    });
    var pm = El.prototype;
    pm.type = "grid", pm.axisPointerEnabled = !0, pm.getRect = function () {
        return this._rect
    }, pm.update = function (t, e) {
        var n = this._axesMap;
        this._updateScale(t, this.model), f(n.x, function (t) {
            ol(t.scale, t.model)
        }), f(n.y, function (t) {
            ol(t.scale, t.model)
        }), f(n.x, function (t) {
            Nl(n, "y", t)
        }), f(n.y, function (t) {
            Nl(n, "x", t)
        }), this.resize(this.model, e)
    }, pm.resize = function (t, e, n) {
        function i() {
            f(a, function (t) {
                var e = t.isHorizontal(),
                    n = e ? [0, r.width] : [0, r.height],
                    i = t.inverse ? 1 : 0;
                t.setExtent(n[i], n[1 - i]), Bl(t, e ? r.x : r.y)
            })
        }
        var r = _r(t.getBoxLayoutParams(), {
            width: e.getWidth(),
            height: e.getHeight()
        });
        this._rect = r;
        var a = this._axesList;
        i(), !n && t.get("containLabel") && (f(a, function (t) {
            if (!t.model.get("axisLabel.inside")) {
                var e = cl(t);
                if (e) {
                    var n = t.isHorizontal() ? "height" : "width",
                        i = t.model.get("axisLabel.margin");
                    r[n] -= e[n] + i, "top" === t.position ? r.y += e.height + i : "left" === t.position && (r.x += e.width + i)
                }
            }
        }), i())
    }, pm.getAxis = function (t, e) {
        var n = this._axesMap[t];
        if (null != n) {
            if (null == e)
                for (var i in n)
                    if (n.hasOwnProperty(i)) return n[i];
            return n[e]
        }
    }, pm.getAxes = function () {
        return this._axesList.slice()
    }, pm.getCartesian = function (t, e) {
        if (null != t && null != e) {
            var n = "x" + t + "y" + e;
            return this._coordsMap[n]
        }
        w(t) && (e = t.yAxisIndex, t = t.xAxisIndex);
        for (var i = 0, r = this._coordsList; i < r.length; i++)
            if (r[i].getAxis("x").index === t || r[i].getAxis("y").index === e) return r[i]
    }, pm.getCartesians = function () {
        return this._coordsList.slice()
    }, pm.convertToPixel = function (t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.dataToPoint(n) : i.axis ? i.axis.toGlobalCoord(i.axis.dataToCoord(n)) : null
    }, pm.convertFromPixel = function (t, e, n) {
        var i = this._findConvertTarget(t, e);
        return i.cartesian ? i.cartesian.pointToData(n) : i.axis ? i.axis.coordToData(i.axis.toLocalCoord(n)) : null
    }, pm._findConvertTarget = function (t, e) {
        var n, i, r = e.seriesModel,
            a = e.xAxisModel || r && r.getReferringComponents("xAxis")[0],
            o = e.yAxisModel || r && r.getReferringComponents("yAxis")[0],
            s = e.gridModel,
            h = this._coordsList;
        return r ? l(h, n = r.coordinateSystem) < 0 && (n = null) : a && o ? n = this.getCartesian(a.componentIndex, o.componentIndex) : a ? i = this.getAxis("x", a.componentIndex) : o ? i = this.getAxis("y", o.componentIndex) : s && s.coordinateSystem === this && (n = this._coordsList[0]), {
            cartesian: n,
            axis: i
        }
    }, pm.containPoint = function (t) {
        var e = this._coordsList[0];
        if (e) return e.containPoint(t)
    }, pm._initCartesian = function (t, e, n) {
        function i(n) {
            return function (i, s) {
                if (Ol(i, t, e)) {
                    var l = i.get("position");
                    "x" === n ? "top" !== l && "bottom" !== l && r[l = "bottom"] && (l = "top" === l ? "bottom" : "top") : "left" !== l && "right" !== l && r[l = "left"] && (l = "left" === l ? "right" : "left"), r[l] = !0;
                    var h = new om(n, sl(i), [0, 0], i.get("type"), l),
                        u = "category" === h.type;
                    h.onBand = u && i.get("boundaryGap"), h.inverse = i.get("inverse"), i.axis = h, h.model = i, h.grid = this, h.index = s, this._axesList.push(h), a[n][s] = h, o[n]++
                }
            }
        }
        var r = {
                left: !1,
                right: !1,
                top: !1,
                bottom: !1
            },
            a = {
                x: {},
                y: {}
            },
            o = {
                x: 0,
                y: 0
            };
        if (e.eachComponent("xAxis", i("x"), this), e.eachComponent("yAxis", i("y"), this), !o.x || !o.y) return this._axesMap = {}, void(this._axesList = []);
        this._axesMap = a, f(a.x, function (e, n) {
            f(a.y, function (i, r) {
                var a = "x" + n + "y" + r,
                    o = new pl(a);
                o.grid = this, o.model = t, this._coordsMap[a] = o, this._coordsList.push(o), o.addAxis(e), o.addAxis(i)
            }, this)
        }, this)
    }, pm._updateScale = function (t, e) {
        function n(t, e, n) {
            f(t.mapDimension(e.dim, !0), function (n) {
                e.scale.unionExtentFromData(t, as(t, n))
            })
        }
        f(this._axesList, function (t) {
            t.scale.setExtent(1 / 0, -1 / 0)
        }), t.eachSeries(function (i) {
            if (Fl(i)) {
                var r = zl(i),
                    a = r[0],
                    o = r[1];
                if (!Ol(a, e, t) || !Ol(o, e, t)) return;
                var s = this.getCartesian(a.componentIndex, o.componentIndex),
                    l = i.getData(),
                    h = s.getAxis("x"),
                    u = s.getAxis("y");
                "list" === l.type && (n(l, h), n(l, u))
            }
        }, this)
    }, pm.getTooltipAxes = function (t) {
        var e = [],
            n = [];
        return f(this.getCartesians(), function (i) {
            var r = null != t && "auto" !== t ? i.getAxis(t) : i.getBaseAxis(),
                a = i.getOtherAxis(r);
            l(e, r) < 0 && e.push(r), l(n, a) < 0 && n.push(a)
        }), {
            baseAxes: e,
            otherAxes: n
        }
    };
    var gm = ["xAxis", "yAxis"];
    El.create = function (t, e) {
        var n = [];
        return t.eachComponent("grid", function (i, r) {
            var a = new El(i, t, e);
            a.name = "grid_" + r, a.resize(i, e, !0), i.coordinateSystem = a, n.push(a)
        }), t.eachSeries(function (t) {
            if (Fl(t)) {
                var e = zl(t),
                    n = e[0],
                    i = e[1],
                    r = n.getCoordSysModel().coordinateSystem;
                t.coordinateSystem = r.getCartesian(n.componentIndex, i.componentIndex)
            }
        }), n
    }, El.dimensions = El.prototype.dimensions = pl.prototype.dimensions, Yr.register("cartesian2d", El);
    var mm = Math.PI,
        vm = function (t, e) {
            this.opt = e, this.axisModel = t, o(e, {
                labelOffset: 0,
                nameDirection: 1,
                tickDirection: 1,
                labelDirection: 1,
                silent: !0
            }), this.group = new du;
            var n = new du({
                position: e.position.slice(),
                rotation: e.rotation
            });
            n.updateTransform(), this._transform = n.transform, this._dumbGroup = n
        };
    vm.prototype = {
        constructor: vm,
        hasBuilder: function (t) {
            return !!ym[t]
        },
        add: function (t) {
            ym[t].call(this)
        },
        getGroup: function () {
            return this.group
        }
    };
    var ym = {
            axisLine: function () {
                var t = this.opt,
                    e = this.axisModel;
                if (e.get("axisLine.show")) {
                    var n = this.axisModel.axis.getExtent(),
                        i = this._transform,
                        r = [n[0], 0],
                        o = [n[1], 0];
                    i && (Y(r, r, i), Y(o, o, i));
                    var s = a({
                        lineCap: "round"
                    }, e.getModel("axisLine.lineStyle").getLineStyle());
                    this.group.add(new Df(xi({
                        anid: "line",
                        shape: {
                            x1: r[0],
                            y1: r[1],
                            x2: o[0],
                            y2: o[1]
                        },
                        style: s,
                        strokeContainThreshold: t.strokeContainThreshold || 5,
                        silent: !0,
                        z2: 1
                    })));
                    var l = e.get("axisLine.symbol"),
                        h = e.get("axisLine.symbolSize"),
                        u = e.get("axisLine.symbolOffset") || 0;
                    if ("number" == typeof u && (u = [u, u]), null != l) {
                        "string" == typeof l && (l = [l, l]), "string" != typeof h && "number" != typeof h || (h = [h, h]);
                        var c = h[0],
                            d = h[1];
                        f([{
                            rotate: t.rotation + Math.PI / 2,
                            offset: u[0],
                            r: 0
                        }, {
                            rotate: t.rotation - Math.PI / 2,
                            offset: u[1],
                            r: Math.sqrt((r[0] - o[0]) * (r[0] - o[0]) + (r[1] - o[1]) * (r[1] - o[1]))
                        }], function (e, n) {
                            if ("none" !== l[n] && null != l[n]) {
                                var i = us(l[n], -c / 2, -d / 2, c, d, s.stroke, !0),
                                    a = e.r + e.offset,
                                    o = [r[0] + a * Math.cos(t.rotation), r[1] - a * Math.sin(t.rotation)];
                                i.attr({
                                    rotation: e.rotate,
                                    position: o,
                                    silent: !0
                                }), this.group.add(i)
                            }
                        }, this)
                    }
                }
            },
            axisTickLabel: function () {
                var t = this.axisModel,
                    e = this.opt,
                    n = Yl(this, t, e);
                Gl(t, jl(this, t, e), n)
            },
            axisName: function () {
                var t = this.opt,
                    e = this.axisModel,
                    n = T(t.axisName, e.get("name"));
                if (n) {
                    var i, r = e.get("nameLocation"),
                        o = t.nameDirection,
                        s = e.getModel("nameTextStyle"),
                        l = e.get("nameGap") || 0,
                        h = this.axisModel.axis.getExtent(),
                        u = h[0] > h[1] ? -1 : 1,
                        c = ["start" === r ? h[0] - u * l : "end" === r ? h[1] + u * l : (h[0] + h[1]) / 2, Ul(r) ? t.labelOffset + o * l : 0],
                        f = e.get("nameRotate");
                    null != f && (f = f * mm / 180);
                    var d;
                    Ul(r) ? i = _m(t.rotation, null != f ? f : t.rotation, o) : (i = Wl(t, r, f || 0, h), null != (d = t.axisNameAvailableWidth) && (d = Math.abs(d / Math.sin(i.rotation)), !isFinite(d) && (d = null)));
                    var p = s.getFont(),
                        g = e.get("nameTruncate", !0) || {},
                        m = g.ellipsis,
                        v = T(t.nameTruncateMaxWidth, g.maxWidth, d),
                        y = null != m && null != v ? nd(n, v, p, m, {
                            minChar: 2,
                            placeholder: g.placeholder
                        }) : n,
                        _ = e.get("tooltip", !0),
                        x = e.mainType,
                        w = {
                            componentType: x,
                            name: n,
                            $vars: ["name"]
                        };
                    w[x + "Index"] = e.componentIndex;
                    var b = new vf({
                        anid: "name",
                        __fullText: n,
                        __truncatedText: y,
                        position: c,
                        rotation: i.rotation,
                        silent: Hl(e),
                        z2: 1,
                        tooltip: _ && _.show ? a({
                            content: n,
                            formatter: function () {
                                return n
                            },
                            formatterParams: w
                        }, _) : null
                    });
                    Ri(b.style, s, {
                        text: y,
                        textFont: p,
                        textFill: s.getTextColor() || e.get("axisLine.lineStyle.color"),
                        textAlign: i.textAlign,
                        textVerticalAlign: i.textVerticalAlign
                    }), e.get("triggerEvent") && (b.eventData = Vl(e), b.eventData.targetType = "axisName", b.eventData.name = n), this._dumbGroup.add(b), b.updateTransform(), this.group.add(b), b.decomposeTransform()
                }
            }
        },
        _m = vm.innerTextLayout = function (t, e, n) {
            var i, r, a = or(e - t);
            return sr(a) ? (r = n > 0 ? "top" : "bottom", i = "center") : sr(a - mm) ? (r = n > 0 ? "bottom" : "top", i = "center") : (r = "middle", i = a > 0 && a < mm ? n > 0 ? "right" : "left" : n > 0 ? "left" : "right"), {
                rotation: a,
                textAlign: i,
                textVerticalAlign: r
            }
        },
        xm = Oo({
            type: "axis",
            _axisPointer: null,
            axisPointerClass: null,
            render: function (t, e, n, i) {
                this.axisPointerClass && Zl(t), xm.superApply(this, "render", arguments), th(this, t, 0, n, 0, !0)
            },
            updateAxisPointer: function (t, e, n, i, r) {
                th(this, t, 0, n, 0, !1)
            },
            remove: function (t, e) {
                var n = this._axisPointer;
                n && n.remove(e), xm.superApply(this, "remove", arguments)
            },
            dispose: function (t, e) {
                eh(this, e), xm.superApply(this, "dispose", arguments)
            }
        }),
        wm = [];
    xm.registerAxisPointerClass = function (t, e) {
        wm[t] = e
    }, xm.getAxisPointerClass = function (t) {
        return t && wm[t]
    };
    var bm = ["axisLine", "axisTickLabel", "axisName"],
        Mm = ["splitArea", "splitLine"],
        Sm = xm.extend({
            type: "cartesianAxis",
            axisPointerClass: "CartesianAxisPointer",
            render: function (t, e, n, i) {
                this.group.removeAll();
                var r = this._axisGroup;
                if (this._axisGroup = new du, this.group.add(this._axisGroup), t.get("show")) {
                    var a = t.getCoordSysModel(),
                        o = nh(a, t),
                        s = new vm(t, o);
                    f(bm, s.add, s), this._axisGroup.add(s.getGroup()), f(Mm, function (e) {
                        t.get(e + ".show") && this["_" + e](t, a)
                    }, this), ji(r, this._axisGroup, t), Sm.superCall(this, "render", t, e, n, i)
                }
            },
            remove: function () {
                this._splitAreaColors = null
            },
            _splitLine: function (t, e) {
                var n = t.axis;
                if (!n.scale.isBlank()) {
                    var i = t.getModel("splitLine"),
                        r = i.getModel("lineStyle"),
                        a = r.get("color");
                    a = y(a) ? a : [a];
                    for (var s = e.coordinateSystem.getRect(), l = n.isHorizontal(), h = 0, u = n.getTicksCoords({
                            tickModel: i
                        }), c = [], f = [], d = r.getLineStyle(), p = 0; p < u.length; p++) {
                        var g = n.toGlobalCoord(u[p].coord);
                        l ? (c[0] = g, c[1] = s.y, f[0] = g, f[1] = s.y + s.height) : (c[0] = s.x, c[1] = g, f[0] = s.x + s.width, f[1] = g);
                        var m = h++ % a.length,
                            v = u[p].tickValue;
                        this._axisGroup.add(new Df(xi({
                            anid: null != v ? "line_" + u[p].tickValue : null,
                            shape: {
                                x1: c[0],
                                y1: c[1],
                                x2: f[0],
                                y2: f[1]
                            },
                            style: o({
                                stroke: a[m]
                            }, d),
                            silent: !0
                        })))
                    }
                }
            },
            _splitArea: function (t, e) {
                var n = t.axis;
                if (!n.scale.isBlank()) {
                    var i = t.getModel("splitArea"),
                        r = i.getModel("areaStyle"),
                        a = r.get("color"),
                        s = e.coordinateSystem.getRect(),
                        l = n.getTicksCoords({
                            tickModel: i,
                            clamp: !0
                        });
                    if (l.length) {
                        var h = a.length,
                            u = this._splitAreaColors,
                            c = R(),
                            f = 0;
                        if (u)
                            for (m = 0; m < l.length; m++) {
                                var d = u.get(l[m].tickValue);
                                if (null != d) {
                                    f = (d + (h - 1) * m) % h;
                                    break
                                }
                            }
                        var p = n.toGlobalCoord(l[0].coord),
                            g = r.getAreaStyle();
                        a = y(a) ? a : [a];
                        for (var m = 1; m < l.length; m++) {
                            var v, _, x, w, b = n.toGlobalCoord(l[m].coord);
                            n.isHorizontal() ? (v = p, _ = s.y, x = b - v, w = s.height, p = v + x) : (v = s.x, _ = p, x = s.width, p = _ + (w = b - _));
                            var M = l[m - 1].tickValue;
                            null != M && c.set(M, f), this._axisGroup.add(new Cf({
                                anid: null != M ? "area_" + M : null,
                                shape: {
                                    x: v,
                                    y: _,
                                    width: x,
                                    height: w
                                },
                                style: o({
                                    fill: a[f]
                                }, g),
                                silent: !0
                            })), f = (f + 1) % h
                        }
                        this._splitAreaColors = c
                    }
                }
            }
        });
    Sm.extend({
        type: "xAxis"
    }), Sm.extend({
        type: "yAxis"
    }), Oo({
        type: "grid",
        render: function (t, e) {
            this.group.removeAll(), t.get("show") && this.group.add(new Cf({
                shape: t.coordinateSystem.getRect(),
                style: o({
                    fill: t.get("backgroundColor")
                }, t.getItemStyle()),
                silent: !0,
                z2: -1
            }))
        }
    }), To(function (t) {
        t.xAxis && t.yAxis && !t.grid && (t.grid = {})
    }), Ao(function (t, e, n) {
        return {
            seriesType: t,
            performRawSeries: !0,
            reset: function (t, i, r) {
                var a = t.getData(),
                    o = t.get("symbol") || e,
                    s = t.get("symbolSize"),
                    l = t.get("symbolKeepAspect");
                if (a.setVisual({
                        legendSymbol: n || o,
                        symbol: o,
                        symbolSize: s,
                        symbolKeepAspect: l
                    }), !i.isSeriesFiltered(t)) {
                    var h = "function" == typeof s;
                    return {
                        dataEach: a.hasItemOption || h ? function (e, n) {
                            if ("function" == typeof s) {
                                var i = t.getRawValue(n),
                                    r = t.getDataParams(n);
                                e.setItemVisual(n, "symbolSize", s(i, r))
                            }
                            if (e.hasItemOption) {
                                var a = e.getItemModel(n),
                                    o = a.getShallow("symbol", !0),
                                    l = a.getShallow("symbolSize", !0),
                                    h = a.getShallow("symbolKeepAspect", !0);
                                null != o && e.setItemVisual(n, "symbol", o), null != l && e.setItemVisual(n, "symbolSize", l), null != h && e.setItemVisual(n, "symbolKeepAspect", h)
                            }
                        } : null
                    }
                }
            }
        }
    }("line", "circle", "line")), ko(function (t) {
        return {
            seriesType: t,
            plan: Kd(),
            reset: function (t) {
                var e = t.getData(),
                    n = t.coordinateSystem,
                    i = t.pipelineContext.large;
                if (n) {
                    var r = d(n.dimensions, function (t) {
                            return e.mapDimension(t)
                        }).slice(0, 2),
                        a = r.length,
                        o = e.getCalculationInfo("stackResultDimension");
                    return rs(e, r[0]) && (r[0] = o), rs(e, r[1]) && (r[1] = o), a && {
                        progress: function (t, e) {
                            for (var o = t.end - t.start, s = i && new Float32Array(o * a), l = t.start, h = 0, u = [], c = []; l < t.end; l++) {
                                var f;
                                if (1 === a) d = e.get(r[0], l), f = !isNaN(d) && n.dataToPoint(d, null, c);
                                else {
                                    var d = u[0] = e.get(r[0], l),
                                        p = u[1] = e.get(r[1], l);
                                    f = !isNaN(d) && !isNaN(p) && n.dataToPoint(u, null, c)
                                }
                                i ? (s[h++] = f ? f[0] : NaN, s[h++] = f ? f[1] : NaN) : e.setItemLayout(l, f && f.slice() || [NaN, NaN])
                            }
                            i && e.setLayout("symbolPoints", s)
                        }
                    }
                }
            }
        }
    }("line")), Co(Ip.PROCESSOR.STATISTIC, function (t) {
        return {
            seriesType: t,
            modifyOutputEnd: !0,
            reset: function (t, e, n) {
                var i = t.getData(),
                    r = t.get("sampling"),
                    a = t.coordinateSystem;
                if ("cartesian2d" === a.type && r) {
                    var o = a.getBaseAxis(),
                        s = a.getOtherAxis(o),
                        l = o.getExtent(),
                        h = l[1] - l[0],
                        u = Math.round(i.count() / h);
                    if (u > 1) {
                        var c;
                        "string" == typeof r ? c = Ag[r] : "function" == typeof r && (c = r), c && t.setData(i.downSample(i.mapDimension(s.dim), 1 / u, c, Lg))
                    }
                }
            }
        }
    }("line")), jd.extend({
        type: "series.__base_bar__",
        getInitialData: function (t, e) {
            return os(this.getSource(), this)
        },
        getMarkerPosition: function (t) {
            var e = this.coordinateSystem;
            if (e) {
                var n = e.dataToPoint(e.clampData(t)),
                    i = this.getData(),
                    r = i.getLayout("offset"),
                    a = i.getLayout("size");
                return n[e.getBaseAxis().isHorizontal() ? 0 : 1] += r + a / 2, n
            }
            return [NaN, NaN]
        },
        defaultOption: {
            zlevel: 0,
            z: 2,
            coordinateSystem: "cartesian2d",
            legendHoverLink: !0,
            barMinHeight: 0,
            barMinAngle: 0,
            large: !1,
            largeThreshold: 400,
            progressive: 3e3,
            progressiveChunkMode: "mod",
            itemStyle: {},
            emphasis: {}
        }
    }).extend({
        type: "series.bar",
        dependencies: ["grid", "polar"],
        brushSelector: "rect",
        getProgressive: function () {
            return !!this.get("large") && this.get("progressive")
        },
        getProgressiveThreshold: function () {
            var t = this.get("progressiveThreshold"),
                e = this.get("largeThreshold");
            return e > t && (t = e), t
        }
    });
    var Im = uc([
            ["fill", "color"],
            ["stroke", "borderColor"],
            ["lineWidth", "borderWidth"],
            ["stroke", "barBorderColor"],
            ["lineWidth", "barBorderWidth"],
            ["opacity"],
            ["shadowBlur"],
            ["shadowOffsetX"],
            ["shadowOffsetY"],
            ["shadowColor"]
        ]),
        Tm = {
            getBarItemStyle: function (t) {
                var e = Im(this, t);
                if (this.getBorderLineDash) {
                    var n = this.getBorderLineDash();
                    n && (e.lineDash = n)
                }
                return e
            }
        },
        Cm = ["itemStyle", "barBorderWidth"];
    a(Zi.prototype, Tm), No({
        type: "bar",
        render: function (t, e, n) {
            this._updateDrawMode(t);
            var i = t.get("coordinateSystem");
            return "cartesian2d" !== i && "polar" !== i || (this._isLargeDraw ? this._renderLarge(t, e, n) : this._renderNormal(t, e, n)), this.group
        },
        incrementalPrepareRender: function (t, e, n) {
            this._clear(), this._updateDrawMode(t)
        },
        incrementalRender: function (t, e, n, i) {
            this._incrementalRenderLarge(t, e)
        },
        _updateDrawMode: function (t) {
            var e = t.pipelineContext.large;
            (null == this._isLargeDraw || e ^ this._isLargeDraw) && (this._isLargeDraw = e, this._clear())
        },
        _renderNormal: function (t, e, n) {
            var i, r = this.group,
                a = t.getData(),
                o = this._data,
                s = t.coordinateSystem,
                l = s.getBaseAxis();
            "cartesian2d" === s.type ? i = l.isHorizontal() : "polar" === s.type && (i = "angle" === l.dim);
            var h = t.isAnimationEnabled() ? t : null;
            a.diff(o).add(function (e) {
                if (a.hasValue(e)) {
                    var n = a.getItemModel(e),
                        o = km[s.type](a, e, n),
                        l = Dm[s.type](a, e, n, o, i, h);
                    a.setItemGraphicEl(e, l), r.add(l), sh(l, a, e, n, o, t, i, "polar" === s.type)
                }
            }).update(function (e, n) {
                var l = o.getItemGraphicEl(n);
                if (a.hasValue(e)) {
                    var u = a.getItemModel(e),
                        c = km[s.type](a, e, u);
                    l ? Xi(l, {
                        shape: c
                    }, h, e) : l = Dm[s.type](a, e, u, c, i, h, !0), a.setItemGraphicEl(e, l), r.add(l), sh(l, a, e, u, c, t, i, "polar" === s.type)
                } else r.remove(l)
            }).remove(function (t) {
                var e = o.getItemGraphicEl(t);
                "cartesian2d" === s.type ? e && ah(t, h, e) : e && oh(t, h, e)
            }).execute(), this._data = a
        },
        _renderLarge: function (t, e, n) {
            this._clear(), hh(t, this.group)
        },
        _incrementalRenderLarge: function (t, e) {
            hh(e, this.group, !0)
        },
        dispose: B,
        remove: function (t) {
            this._clear(t)
        },
        _clear: function (t) {
            var e = this.group,
                n = this._data;
            t && t.get("animation") && n && !this._isLargeDraw ? n.eachItemGraphicEl(function (e) {
                "sector" === e.type ? oh(e.dataIndex, t, e) : ah(e.dataIndex, t, e)
            }) : e.removeAll(), this._data = null
        }
    });
    var Dm = {
            cartesian2d: function (t, e, n, i, r, o, s) {
                var l = new Cf({
                    shape: a({}, i)
                });
                if (o) {
                    var h = l.shape,
                        u = r ? "height" : "width",
                        c = {};
                    h[u] = 0, c[u] = i[u], Wf[s ? "updateProps" : "initProps"](l, {
                        shape: c
                    }, o, e)
                }
                return l
            },
            polar: function (t, e, n, i, r, a, s) {
                var l = i.startAngle < i.endAngle,
                    h = new wf({
                        shape: o({
                            clockwise: l
                        }, i)
                    });
                if (a) {
                    var u = h.shape,
                        c = r ? "r" : "endAngle",
                        f = {};
                    u[c] = r ? 0 : i.startAngle, f[c] = i[c], Wf[s ? "updateProps" : "initProps"](h, {
                        shape: f
                    }, a, e)
                }
                return h
            }
        },
        km = {
            cartesian2d: function (t, e, n) {
                var i = t.getItemLayout(e),
                    r = lh(n, i),
                    a = i.width > 0 ? 1 : -1,
                    o = i.height > 0 ? 1 : -1;
                return {
                    x: i.x + a * r / 2,
                    y: i.y + o * r / 2,
                    width: i.width - a * r,
                    height: i.height - o * r
                }
            },
            polar: function (t, e, n) {
                var i = t.getItemLayout(e);
                return {
                    cx: i.cx,
                    cy: i.cy,
                    r0: i.r0,
                    r: i.r,
                    startAngle: i.startAngle,
                    endAngle: i.endAngle
                }
            }
        },
        Am = ai.extend({
            type: "largeBar",
            shape: {
                points: []
            },
            buildPath: function (t, e) {
                for (var n = e.points, i = this.__startPoint, r = this.__valueIdx, a = 0; a < n.length; a += 2) i[this.__valueIdx] = n[a + r], t.moveTo(i[0], i[1]), t.lineTo(n[a], n[a + 1])
            }
        });
    ko(v(function (t, e) {
        var n = $s(t, e),
            i = Ks(n),
            r = {};
        f(n, function (t) {
            var e = t.getData(),
                n = t.coordinateSystem,
                a = n.getBaseAxis(),
                o = js(t),
                s = i[Zs(a)][o],
                l = s.offset,
                h = s.width,
                u = n.getOtherAxis(a),
                c = t.get("barMinHeight") || 0;
            r[o] = r[o] || [], e.setLayout({
                offset: l,
                size: h
            });
            for (var f = e.mapDimension(u.dim), d = e.mapDimension(a.dim), p = rs(e, f), g = u.isHorizontal(), m = nl(a, u, p), v = 0, y = e.count(); v < y; v++) {
                var _ = e.get(f, v),
                    x = e.get(d, v);
                if (!isNaN(_)) {
                    var w = _ >= 0 ? "p" : "n",
                        b = m;
                    p && (r[o][x] || (r[o][x] = {
                        p: m,
                        n: m
                    }), b = r[o][x][w]);
                    var M, S, I, T;
                    if (g) M = b, S = (C = n.dataToPoint([_, x]))[1] + l, I = C[0] - m, T = h, Math.abs(I) < c && (I = (I < 0 ? -1 : 1) * c), p && (r[o][x][w] += I);
                    else {
                        var C = n.dataToPoint([x, _]);
                        M = C[0] + l, S = b, I = h, T = C[1] - m, Math.abs(T) < c && (T = (T <= 0 ? -1 : 1) * c), p && (r[o][x][w] += T)
                    }
                    e.setItemLayout(v, {
                        x: M,
                        y: S,
                        width: I,
                        height: T
                    })
                }
            }
        }, this)
    }, "bar")), ko(Vg), Ao({
        seriesType: "bar",
        reset: function (t) {
            t.getData().setVisual("legendSymbol", "roundRect")
        }
    });
    var Lm = function (t, e, n) {
            e = y(e) && {
                coordDimensions: e
            } || a({}, e);
            var i = t.getSource(),
                r = ag(i, e),
                o = new ng(r, t);
            return o.initData(i, n), o
        },
        Pm = {
            updateSelectedMap: function (t) {
                this._targetList = y(t) ? t.slice() : [], this._selectTargetMap = p(t || [], function (t, e) {
                    return t.set(e.name, e), t
                }, R())
            },
            select: function (t, e) {
                var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                "single" === this.get("selectedMode") && this._selectTargetMap.each(function (t) {
                    t.selected = !1
                }), n && (n.selected = !0)
            },
            unSelect: function (t, e) {
                var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                n && (n.selected = !1)
            },
            toggleSelected: function (t, e) {
                var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                if (null != n) return this[n.selected ? "unSelect" : "select"](t, e), n.selected
            },
            isSelected: function (t, e) {
                var n = null != e ? this._targetList[e] : this._selectTargetMap.get(t);
                return n && n.selected
            }
        },
        Om = Eo({
            type: "series.pie",
            init: function (t) {
                Om.superApply(this, "init", arguments), this.legendDataProvider = function () {
                    return this.getRawData()
                }, this.updateSelectedMap(this._createSelectableList()), this._defaultLabelLine(t)
            },
            mergeOption: function (t) {
                Om.superCall(this, "mergeOption", t), this.updateSelectedMap(this._createSelectableList())
            },
            getInitialData: function (t, e) {
                return Lm(this, ["value"])
            },
            _createSelectableList: function () {
                for (var t = this.getRawData(), e = t.mapDimension("value"), n = [], i = 0, r = t.count(); i < r; i++) n.push({
                    name: t.getName(i),
                    value: t.get(e, i),
                    selected: xa(t, i, "selected")
                });
                return n
            },
            getDataParams: function (t) {
                var e = this.getData(),
                    n = Om.superCall(this, "getDataParams", t),
                    i = [];
                return e.each(e.mapDimension("value"), function (t) {
                    i.push(t)
                }), n.percent = ar(i, t, e.hostModel.get("percentPrecision")), n.$vars.push("percent"), n
            },
            _defaultLabelLine: function (t) {
                sn(t, "labelLine", ["show"]);
                var e = t.labelLine,
                    n = t.emphasis.labelLine;
                e.show = e.show && t.label.show, n.show = n.show && t.emphasis.label.show
            },
            defaultOption: {
                zlevel: 0,
                z: 2,
                legendHoverLink: !0,
                hoverAnimation: !0,
                center: ["50%", "50%"],
                radius: [0, "75%"],
                clockwise: !0,
                startAngle: 90,
                minAngle: 0,
                selectedOffset: 10,
                hoverOffset: 10,
                avoidLabelOverlap: !0,
                percentPrecision: 2,
                stillShowZeroSum: !0,
                label: {
                    rotate: !1,
                    show: !0,
                    position: "outer"
                },
                labelLine: {
                    show: !0,
                    length: 15,
                    length2: 15,
                    smooth: !1,
                    lineStyle: {
                        width: 1,
                        type: "solid"
                    }
                },
                itemStyle: {
                    borderWidth: 1
                },
                animationType: "expansion",
                animationEasing: "cubicOut"
            }
        });
    u(Om, Pm);
    var Em = dh.prototype;
    Em.updateData = function (t, e, n) {
        function i() {
            s.stopAnimation(!0), s.animateTo({
                shape: {
                    r: u.r + l.get("hoverOffset")
                }
            }, 300, "elasticOut")
        }

        function r() {
            s.stopAnimation(!0), s.animateTo({
                shape: {
                    r: u.r
                }
            }, 300, "elasticOut")
        }
        var s = this.childAt(0),
            l = t.hostModel,
            h = t.getItemModel(e),
            u = t.getItemLayout(e),
            c = a({}, u);
        c.label = null, n ? (s.setShape(c), "scale" === l.getShallow("animationType") ? (s.shape.r = u.r0, Ui(s, {
            shape: {
                r: u.r
            }
        }, l, e)) : (s.shape.endAngle = u.startAngle, Xi(s, {
            shape: {
                endAngle: u.endAngle
            }
        }, l, e))) : Xi(s, {
            shape: c
        }, l, e);
        var f = t.getItemVisual(e, "color");
        s.useStyle(o({
            lineJoin: "bevel",
            fill: f
        }, h.getModel("itemStyle").getItemStyle())), s.hoverStyle = h.getModel("emphasis.itemStyle").getItemStyle();
        var d = h.getShallow("cursor");
        d && s.attr("cursor", d), fh(this, t.getItemLayout(e), l.isSelected(null, e), l.get("selectedOffset"), l.get("animation")), s.off("mouseover").off("mouseout").off("emphasis").off("normal"), h.get("hoverAnimation") && l.isAnimationEnabled() && s.on("mouseover", i).on("mouseout", r).on("emphasis", i).on("normal", r), this._updateLabel(t, e), Ei(this)
    }, Em._updateLabel = function (t, e) {
        var n = this.childAt(1),
            i = this.childAt(2),
            r = t.hostModel,
            a = t.getItemModel(e),
            o = t.getItemLayout(e).label,
            s = t.getItemVisual(e, "color");
        Xi(n, {
            shape: {
                points: o.linePoints || [
                    [o.x, o.y],
                    [o.x, o.y],
                    [o.x, o.y]
                ]
            }
        }, r, e), Xi(i, {
            style: {
                x: o.x,
                y: o.y
            }
        }, r, e), i.attr({
            rotation: o.rotation,
            origin: [o.x, o.y],
            z2: 10
        });
        var l = a.getModel("label"),
            h = a.getModel("emphasis.label"),
            u = a.getModel("labelLine"),
            c = a.getModel("emphasis.labelLine"),
            s = t.getItemVisual(e, "color");
        Ni(i.style, i.hoverStyle = {}, l, h, {
            labelFetcher: t.hostModel,
            labelDataIndex: e,
            defaultText: t.getName(e),
            autoColor: s,
            useInsideStyle: !!o.inside
        }, {
            textAlign: o.textAlign,
            textVerticalAlign: o.verticalAlign,
            opacity: t.getItemVisual(e, "opacity")
        }), i.ignore = i.normalIgnore = !l.get("show"), i.hoverIgnore = !h.get("show"), n.ignore = n.normalIgnore = !u.get("show"), n.hoverIgnore = !c.get("show"), n.setStyle({
            stroke: s,
            opacity: t.getItemVisual(e, "opacity")
        }), n.setStyle(u.getModel("lineStyle").getLineStyle()), n.hoverStyle = c.getModel("lineStyle").getLineStyle();
        var f = u.get("smooth");
        f && !0 === f && (f = .4), n.setShape({
            smooth: f
        })
    }, h(dh, du);
    Oa.extend({
        type: "pie",
        init: function () {
            var t = new du;
            this._sectorGroup = t
        },
        render: function (t, e, n, i) {
            if (!i || i.from !== this.uid) {
                var r = t.getData(),
                    a = this._data,
                    o = this.group,
                    s = e.get("animation"),
                    l = !a,
                    h = t.get("animationType"),
                    u = v(ch, this.uid, t, s, n),
                    c = t.get("selectedMode");
                if (r.diff(a).add(function (t) {
                        var e = new dh(r, t);
                        l && "scale" !== h && e.eachChild(function (t) {
                            t.stopAnimation(!0)
                        }), c && e.on("click", u), r.setItemGraphicEl(t, e), o.add(e)
                    }).update(function (t, e) {
                        var n = a.getItemGraphicEl(e);
                        n.updateData(r, t), n.off("click"), c && n.on("click", u), o.add(n), r.setItemGraphicEl(t, n)
                    }).remove(function (t) {
                        var e = a.getItemGraphicEl(t);
                        o.remove(e)
                    }).execute(), s && l && r.count() > 0 && "scale" !== h) {
                    var f = r.getItemLayout(0),
                        d = Math.max(n.getWidth(), n.getHeight()) / 2,
                        p = m(o.removeClipPath, o);
                    o.setClipPath(this._createClipPath(f.cx, f.cy, d, f.startAngle, f.clockwise, p, t))
                }
                this._data = r
            }
        },
        dispose: function () {},
        _createClipPath: function (t, e, n, i, r, a, o) {
            var s = new wf({
                shape: {
                    cx: t,
                    cy: e,
                    r0: 0,
                    r: n,
                    startAngle: i,
                    endAngle: i,
                    clockwise: r
                }
            });
            return Ui(s, {
                shape: {
                    endAngle: i + (r ? 1 : -1) * Math.PI * 2
                }
            }, o, a), s
        },
        containPoint: function (t, e) {
            var n = e.getData().getItemLayout(0);
            if (n) {
                var i = t[0] - n.cx,
                    r = t[1] - n.cy,
                    a = Math.sqrt(i * i + r * r);
                return a <= n.r && a >= n.r0
            }
        }
    });
    var Nm = function (t, e, n, i) {
            var r, a, o = t.getData(),
                s = [],
                l = !1;
            o.each(function (n) {
                var i, h, u, c, f = o.getItemLayout(n),
                    d = o.getItemModel(n),
                    p = d.getModel("label"),
                    g = p.get("position") || d.get("emphasis.label.position"),
                    m = d.getModel("labelLine"),
                    v = m.get("length"),
                    y = m.get("length2"),
                    _ = (f.startAngle + f.endAngle) / 2,
                    x = Math.cos(_),
                    w = Math.sin(_);
                r = f.cx, a = f.cy;
                var b = "inside" === g || "inner" === g;
                if ("center" === g) i = f.cx, h = f.cy, c = "center";
                else {
                    var M = (b ? (f.r + f.r0) / 2 * x : f.r * x) + r,
                        S = (b ? (f.r + f.r0) / 2 * w : f.r * w) + a;
                    if (i = M + 3 * x, h = S + 3 * w, !b) {
                        var I = M + x * (v + e - f.r),
                            T = S + w * (v + e - f.r),
                            C = I + (x < 0 ? -1 : 1) * y,
                            D = T;
                        i = C + (x < 0 ? -5 : 5), h = D, u = [
                            [M, S],
                            [I, T],
                            [C, D]
                        ]
                    }
                    c = b ? "center" : x > 0 ? "left" : "right"
                }
                var k = p.getFont(),
                    A = p.get("rotate") ? x < 0 ? -_ + Math.PI : -_ : 0,
                    L = ee(t.getFormattedLabel(n, "normal") || o.getName(n), k, c, "top");
                l = !!A, f.label = {
                    x: i,
                    y: h,
                    position: g,
                    height: L.height,
                    len: v,
                    len2: y,
                    linePoints: u,
                    textAlign: c,
                    verticalAlign: "middle",
                    rotation: A,
                    inside: b
                }, b || s.push(f.label)
            }), !l && t.get("avoidLabelOverlap") && gh(s, r, a, e, n, i)
        },
        Rm = 2 * Math.PI,
        Bm = Math.PI / 180;
    ! function (t, e) {
        f(e, function (e) {
            e.update = "updateView", Do(e, function (n, i) {
                var r = {};
                return i.eachComponent({
                    mainType: "series",
                    subType: t,
                    query: n
                }, function (t) {
                    t[e.method] && t[e.method](n.name, n.dataIndex);
                    var i = t.getData();
                    i.each(function (e) {
                        var n = i.getName(e);
                        r[n] = t.isSelected(n) || !1
                    })
                }), {
                    name: n.name,
                    selected: r
                }
            })
        })
    }("pie", [{
        type: "pieToggleSelect",
        event: "pieselectchanged",
        method: "toggleSelected"
    }, {
        type: "pieSelect",
        event: "pieselected",
        method: "select"
    }, {
        type: "pieUnSelect",
        event: "pieunselected",
        method: "unSelect"
    }]), Ao(function (t) {
        return {
            getTargetSeries: function (e) {
                var n = {},
                    i = R();
                return e.eachSeriesByType(t, function (t) {
                    t.__paletteScope = n, i.set(t.uid, t)
                }), i
            },
            reset: function (t, e) {
                var n = t.getRawData(),
                    i = {},
                    r = t.getData();
                r.each(function (t) {
                    var e = r.getRawIndex(t);
                    i[e] = t
                }), n.each(function (e) {
                    var a = i[e],
                        o = null != a && r.getItemVisual(a, "color", !0);
                    if (o) n.setItemVisual(e, "color", o);
                    else {
                        var s = n.getItemModel(e).get("itemStyle.color") || t.getColorFromPalette(n.getName(e) || e + "", t.__paletteScope, n.count());
                        n.setItemVisual(e, "color", s), null != a && r.setItemVisual(a, "color", s)
                    }
                })
            }
        }
    }("pie")), ko(v(function (t, e, n, i) {
        e.eachSeriesByType(t, function (t) {
            var e = t.getData(),
                i = e.mapDimension("value"),
                r = t.get("center"),
                a = t.get("radius");
            y(a) || (a = [0, a]), y(r) || (r = [r, r]);
            var o = n.getWidth(),
                s = n.getHeight(),
                l = Math.min(o, s),
                h = er(r[0], o),
                u = er(r[1], s),
                c = er(a[0], l / 2),
                f = er(a[1], l / 2),
                d = -t.get("startAngle") * Bm,
                p = t.get("minAngle") * Bm,
                g = 0;
            e.each(i, function (t) {
                !isNaN(t) && g++
            });
            var m = e.getSum(i),
                v = Math.PI / (m || g) * 2,
                _ = t.get("clockwise"),
                x = t.get("roseType"),
                w = t.get("stillShowZeroSum"),
                b = e.getDataExtent(i);
            b[0] = 0;
            var M = Rm,
                S = 0,
                I = d,
                T = _ ? 1 : -1;
            if (e.each(i, function (t, n) {
                    var i;
                    if (isNaN(t)) e.setItemLayout(n, {
                        angle: NaN,
                        startAngle: NaN,
                        endAngle: NaN,
                        clockwise: _,
                        cx: h,
                        cy: u,
                        r0: c,
                        r: x ? NaN : f
                    });
                    else {
                        (i = "area" !== x ? 0 === m && w ? v : t * v : Rm / g) < p ? (i = p, M -= p) : S += t;
                        var r = I + T * i;
                        e.setItemLayout(n, {
                            angle: i,
                            startAngle: I,
                            endAngle: r,
                            clockwise: _,
                            cx: h,
                            cy: u,
                            r0: c,
                            r: x ? tr(t, b, [c, f]) : f
                        }), I = r
                    }
                }), M < Rm && g)
                if (M <= .001) {
                    var C = Rm / g;
                    e.each(i, function (t, n) {
                        if (!isNaN(t)) {
                            var i = e.getItemLayout(n);
                            i.angle = C, i.startAngle = d + T * n * C, i.endAngle = d + T * (n + 1) * C
                        }
                    })
                } else v = M / S, I = d, e.each(i, function (t, n) {
                    if (!isNaN(t)) {
                        var i = e.getItemLayout(n),
                            r = i.angle === p ? p : t * v;
                        i.startAngle = I, i.endAngle = I + T * r, I += T * r
                    }
                });
            Nm(t, f, o, s)
        })
    }, "pie")), Co(function (t) {
        return {
            seriesType: t,
            reset: function (t, e) {
                var n = e.findComponents({
                    mainType: "legend"
                });
                if (n && n.length) {
                    var i = t.getData();
                    i.filterSelf(function (t) {
                        for (var e = i.getName(t), r = 0; r < n.length; r++)
                            if (!n[r].isSelected(e)) return !1;
                        return !0
                    })
                }
            }
        }
    }("pie")), t.version = "4.1.0", t.dependencies = wp, t.PRIORITY = Ip, t.init = function (t, e, n) {
        var i = So(t);
        if (i) return i;
        var r = new no(t, e, n);
        return r.id = "ec_" + Hp++, Vp[r.id] = r, yn(t, qp, r.id), bo(r), r
    }, t.connect = function (t) {
        if (y(t)) {
            var e = t;
            t = null, vp(e, function (e) {
                null != e.group && (t = e.group)
            }), t = t || "g_" + Gp++, vp(e, function (e) {
                e.group = t
            })
        }
        return Wp[t] = !0, t
    }, t.disConnect = Mo, t.disconnect = Up, t.dispose = function (t) {
        "string" == typeof t ? t = Vp[t] : t instanceof no || (t = So(t)), t instanceof no && !t.isDisposed() && t.dispose()
    }, t.getInstanceByDom = So, t.getInstanceById = function (t) {
        return Vp[t]
    }, t.registerTheme = Io, t.registerPreprocessor = To, t.registerProcessor = Co, t.registerPostUpdate = function (t) {
        Rp.push(t)
    }, t.registerAction = Do, t.registerCoordinateSystem = function (t, e) {
        Yr.register(t, e)
    }, t.getCoordinateSystemDimensions = function (t) {
        var e = Yr.get(t);
        if (e) return e.getDimensionsInfo ? e.getDimensionsInfo() : e.dimensions.slice()
    }, t.registerLayout = ko, t.registerVisual = Ao, t.registerLoading = Po, t.extendComponentModel = function (t) {
        return ld.extend(t)
    }, t.extendComponentView = Oo, t.extendSeriesModel = Eo, t.extendChartView = No, t.setCanvasCreator = function (t) {
        e("createCanvas", t)
    }, t.registerMap = function (t, e, n) {
        e.geoJson && !e.features && (n = e.specialAreas, e = e.geoJson), "string" == typeof e && (e = "undefined" != typeof JSON && JSON.parse ? JSON.parse(e) : new Function("return (" + e + ");")()), Xp[t] = {
            geoJson: e,
            specialAreas: n
        }
    }, t.getMap = function (t) {
        return Xp[t]
    }, t.dataTool = Yp
});