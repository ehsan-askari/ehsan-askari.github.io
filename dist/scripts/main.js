function initUI() {
    helpers.addClass(document.getElementById("ui"), "load"), [].forEach.call(["linkedin", "github", "twitter", "instagram"], function(e, t, n) {
        helpers.addClass(document.getElementsByClassName(e)[0], "load")
    }), helpers.page__aboutme = document.getElementsByTagName("BODY")[0], document.getElementsByClassName("about-me")[0].addEventListener(helpers.touchClick, function(e) {
        e.preventDefault(), helpers.hasClass(helpers.page__aboutme, "active-inner") ? helpers.removeClass(helpers.page__aboutme, "active-inner") : helpers.addClass(helpers.page__aboutme, "active-inner")
    })
}
var helpers = {
    supports: function() {
        var e = document.createElement("div"),
            t = "Khtml Ms O Moz Webkit".split(" "),
            n = t.length;
        return function(s) {
            if (s in e.style) return !0;
            for (s = s.replace(/^[a-z]/, function(e) {
                    return e.toUpperCase()
                }); n--;)
                if (t[n] + s in e.style) return !0;
            return !1
        }
    },
    touchClick: "ontouchstart" in window || window.DocumentTouch && document instanceof DocumentTouch ? "touchstart" : "click",
    hasClass: function(e, t) {
        return e.classList ? e.classList.contains(t) : !!e.className.match(new RegExp("(\\s|^)" + t + "(\\s|$)"))
    },
    addClass: function(e, t) {
        e.classList ? e.classList.add(t) : helpers.hasClass(e, t) || (e.className += " " + t)
    },
    removeClass: function(e, t) {
        if (e.classList) e.classList.remove(t);
        else if (helpers.hasClass(e, t)) {
            var n = new RegExp("(\\s|^)" + t + "(\\s|$)");
            e.className = e.className.replace(n, " ")
        }
    },
    pfx: ["webkit", "moz", "MS", "o", ""],
    prefixedEvent: function(e, t, n) {
        for (var s = 0; s < helpers.pfx.length; s++) helpers.pfx[s] || (t = t.toLowerCase()), e.addEventListener(helpers.pfx[s] + t, n, !1)
    },
    clearScoreAnimation: function() {
        helpers.removeClass(helpers.scorePlayerDom[0], "flash"), helpers.removeClass(helpers.scoreComputerDom[0], "flash")
    },
    animateScore: function(e, t) {
        e.style.webkitAnimationName = t, e.style.MozAnimationName = t, e.style.msAnimationName = t, e.style.OAnimationName = t, e.style.animationName = t
    },
    scoreComputerDom: null,
    scorePlayerDom: null,
    preloadImages: function(e, t) {
        function n(e, t) {
            var n = new Image;
            n.src = e, n.onload = t
        }
        var s = 0,
            i = e.length;
        e.forEach(function(e) {
            n(e, function() {
                s++, s == i && t()
            })
        })
    },
    btns__key_sx: null,
    btns__key_dx: null,
    btn__reset: null,
    page__aboutme: null,
    initDropcap: function() {}
};
document.addEventListener("DOMContentLoaded", function() {
    "touchstart" === helpers.touchClick && helpers.addClass(document.getElementsByTagName("BODY")[0], "touchy"), helpers.initDropcap(),
        function() {
            var e, t, n, s, i, o, d, a, r, l, h, c, p, u, m, y, f, w, x, _, g, v;
            x = {
                background: "#ececeb",
                background_stop_1: "#fcfcfc",
                background_stop_2: "#ddd",
                paddle_color: "#2A363B",
                ball_color: "#2A363B"
            }, n = 60, _ = 1, w = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body" [0]).clientWidth, l = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body" [0]).clientHeight, g = document.getElementById("playground__nav"), v = document.getElementsByClassName("hashtag")[0], helpers.btns__key_sx = document.getElementById("key-sx"), helpers.btns__key_dx = document.getElementById("key-dx"), helpers.btn__reset = document.getElementById("key-reset"), controlsTouch = document.getElementById("controls-touch");
            var E = document.getElementById("score");
            helpers.scoreComputerDom = E.getElementsByClassName("sx"), helpers.scorePlayerDom = E.getElementsByClassName("dx"), helpers.prefixedEvent(helpers.scorePlayerDom[0], "AnimationEnd", helpers.clearScoreAnimation), helpers.prefixedEvent(helpers.scoreComputerDom[0], "AnimationEnd", helpers.clearScoreAnimation), u = 0, m = 0, helpers.scoreComputerDom[0].innerHTML = u, helpers.scorePlayerDom[0].innerHTML = m, canvas = document.getElementById("canvas"), canvas.width = w, canvas.height = l, r = canvas.getContext("2d"), o = window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(e) {
                window.setTimeout(e, 1e3 / n)
            }, s = function(e, t, n, s) {
                this.x = e, this.y = t, this.width = n, this.height = s, this.x_speed = 0, this.y_speed = 0
            }, t = function() {
                this.paddle = new s(Math.floor(w / 2 - 25), 10, 50, 10)
            }, i = function() {
                this.paddle = new s(Math.floor(w / 2 - 25), l - 20, 50, 10)
            }, e = function(e, t) {
                this.x = e, this.y = t, this.x_speed = 0, this.y_speed = 3
            }, c = new i, a = new t, d = new e(w / 2, l / 2), h = {}, touchDown = {}, handleWindowResize = function() {
                r.save(), r.scale(_, _), w = window.innerWidth || document.documentElement.clientWidth || document.getElementsByTagName("body" [0]).clientWidth, l = window.innerHeight || document.documentElement.clientHeight || document.getElementsByTagName("body" [0]).clientHeight, canvas.width = w, canvas.height = l, r.webkitBackingStorePixelRatio < 2 && (_ = window.devicePixelRatio || 1), c = new i, a = new t, d = new e(w / 2, l / 2), r.restore()
            };
            var C = function(e, t) {
                (37 == e || 39 == e && !t || t) && (helpers.hasClass(g, "playing") ? helpers.btn__reset.innerHTML = helpers.btn__reset.getAttribute("data-pause") : helpers.addClass(g, "playing"))
            };
            reset = function() {
                d.x_speed = 0, d.y_speed = 3, d.x = w / 2, d.y = l / 2, c.paddle = new s(Math.floor(w / 2 - 25), l - 20, 50, 10), a.paddle.move(0, 0), v.href = v.getAttribute("data-url") + m + " - Mr. pong score : " + u + "  %23pingpong+", helpers.addClass(v.children[0], "bounce")
            }, p = function() {
                var e = r.createRadialGradient(w / 2, l / 2, w / 4, w / 2, l / 2, w);
                e.addColorStop(0, "#fcfcfc"), e.addColorStop(1, "#ddd"), r.fillStyle = e, r.fillRect(0, 0, w, l), c.render(), a.render(), d.render()
            }, f = function() {
                c.update(), a.update(d), d.update(c.paddle, a.paddle)
            }, y = function() {
                f(), p(), o(y)
            }, s.prototype.render = function() {
                r.fillStyle = x.paddle_color, r.fillRect(this.x, this.y, this.width, this.height)
            }, s.prototype.touchmove = function(e, t) {
                this.x = e, this.x_speed = 4, this.y_speed = t, this.x < 0 ? (this.x = 0, this.x_speed = 0) : this.x + this.width > w && (this.x = w - this.width, this.x_speed = 0)
            }, s.prototype.move = function(e, t) {
                this.x += e, this.y += t, this.x_speed = e, this.y_speed = t, this.x < 0 ? (this.x = 0, this.x_speed = 0) : this.x + this.width > w && (this.x = w - this.width, this.x_speed = 0)
            }, t.prototype.render = function() {
                this.paddle.render()
            }, t.prototype.update = function(e) {
                var t, n;
                n = e.x, t = -(this.paddle.x + this.paddle.width / 2 - n), t < 0 && t < -4 ? t = -5 : t > 0 && t > 4 && (t = 5), this.paddle.move(t, 0), this.paddle.x < 0 ? this.paddle.x = 0 : this.paddle.x + this.paddle.width > w && (this.paddle.x = w - this.paddle.width)
            }, i.prototype.render = function() {
                this.paddle.render()
            }, i.prototype.update = function() {
                var e, t;
                for (e in h) t = Number(e), 37 === t ? this.paddle.move(-4, 0) : 39 === t ? this.paddle.move(4, 0) : this.paddle.move(0, 0);
                for (touch in touchDown) t = Number(touch), delete touchDown[t], this.paddle.touchmove(t, 0)
            }, e.prototype.render = function() {
                r.beginPath(), r.fillRect(this.x, this.y, 10, 10)
            }, e.prototype.update = function(e, t) {
                var n, s, i, o;
                this.x += this.x_speed, this.y += this.y_speed, i = this.x - 5, o = this.y - 5, n = this.x + 5, s = this.y + 5, this.x - 5 < 0 ? (this.x = 5, this.x_speed = -this.x_speed) : this.x + 5 > w && (this.x = w - 5, this.x_speed = -this.x_speed), (this.y < 0 || this.y > l) && (this.y < 0 ? (m++, m > 99 && (m = 0), helpers.addClass(helpers.scorePlayerDom[0], "flash"), helpers.scorePlayerDom[0].innerHTML = m) : this.y > l && (u++, u > 99 && (u = 0), helpers.addClass(helpers.scoreComputerDom[0], "flash"), helpers.scoreComputerDom[0].innerHTML = u), this.x_speed = 0, this.y_speed = 3, this.x = w / 2, this.y = l / 2), o > l / 2 ? o < e.y + e.height && s > e.y && i < e.x + e.width && n > e.x && (this.y_speed = -3, this.x_speed += e.x_speed / 2, this.y += this.y_speed) : o < t.y + t.height && s > t.y && i < t.x + t.width && n > t.x && (this.y_speed = 3, this.x_speed += t.x_speed / 2, this.y += this.y_speed)
            }, r && (o(y), window.addEventListener("resize", handleWindowResize), controlsTouch.addEventListener("touchend", function(e) {
                touchDown = {}
            }, !1), controlsTouch.addEventListener("touchmove", function(e) {
                var t = e.targetTouches[0].pageX;
                e.targetTouches[0].pageY;
                touchDown[t] = !0, C(t, !0)
            }, !1), document.body.addEventListener("touchstart", function(e) {
                e.target == controlsTouch && e.preventDefault()
            }, !1), document.body.addEventListener("touchend", function(e) {
                e.target == controlsTouch && e.preventDefault()
            }, !1), document.body.addEventListener("touchmove", function(e) {
                e.target == controlsTouch && e.preventDefault()
            }, !1), window.addEventListener("keydown", function(e) {
                h[e.keyCode] = !0, C(e.keyCode, !1)
            }), window.addEventListener("keyup", function(e) {
                delete h[e.keyCode]
            }), ["touchend", "click"].forEach(function(e) {
                helpers.btn__reset.addEventListener(e, function(e) {
                    e.preventDefault(), reset()
                })
            }), handleWindowResize())
        }.call(this)
}), window.addEventListener ? window.addEventListener("load", initUI, !1) : window.attachEvent && window.attachEvent("onload", initUI);