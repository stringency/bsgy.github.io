!function () {
    var n = (window.innerWidth + window.innerHeight) / 3,
        t = .2, a = 50, o = document.getElementById("background"),
        e = o.getContext("2d"), i = 1, r = void 0, d = void 0, h = [],
        y = void 0, x = void 0, m = { x: 0, y: 0, tx: 0, ty: 0, z: 5e-4 },
        u = !1; function c(n) {
            n.x = Math.random() * r,
            n.y = Math.random() * d
        }
    function v() {
        i = window.devicePixelRatio || 1,
            r = window.innerWidth * i,
            d = window.innerHeight * i,
            o.width = r, o.height = d,
            h.forEach(c)
    }
    !function () {
        for (var a = 0; a < n; a++)
            h.push({ x: 0, y: 0, z: t + .8 * Math.random() })
    }(),
        v(),
        function n() {
            e.clearRect(0, 0, r, d), m.tx *= .95, m.ty *= .95, m.x += .7 * (m.tx - m.x), m.y += .7 * (m.ty - m.y), h.forEach((function (n) { var o, e, i, h; n.x += m.x * n.z, n.y += m.y * n.z, n.x += (n.x - r / 2) * m.z * n.z, n.y += (n.y - d / 2) * m.z * n.z, n.z += m.z, (n.x < -50 || n.x > r + a || n.y < -50 || n.y > d + a) && (o = n, e = "z", i = Math.abs(m.tx), h = Math.abs(m.ty), i > 1 && h > 1 && (e = "h" == (i > h ? Math.random() < Math.abs(m.x) / (i + h) ? "h" : "v" : Math.random() < Math.abs(m.y) / (i + h) ? "v" : "h") ? m.x > 0 ? "l" : "r" : m.y > 0 ? "t" : "b"), o.z = t + .8 * Math.random(), "z" === e ? (o.z = .1, o.x = Math.random() * r, o.y = Math.random() * d) : "l" === e ? (o.x = -3, o.y = d * Math.random()) : "r" === e ? (o.x = r + 3, o.y = d * Math.random()) : "t" === e ? (o.x = r * Math.random(), o.y = -3) : "b" === e && (o.x = r * Math.random(), o.y = d + 3)) })), h.forEach((function (n) { e.beginPath(), e.lineCap = "round", e.lineWidth = 3 * n.z * i, e.strokeStyle = "rgba(102,175,239,.2)", e.beginPath(), e.moveTo(n.x, n.y); var t = 2 * m.x, a = 2 * m.y; Math.abs(t) < .1 && (t = .5), Math.abs(a) < .1 && (a = .5), e.lineTo(n.x + t, n.y + a), e.stroke() })), requestAnimationFrame(n)
        }(),
        window.addEventListener("resize", v),
        window.addEventListener("mousemove", (
            function (n) {
                u = !1, function (n, t) { if ("number" == typeof y && "number" == typeof x) { var a = n - y, o = t - x; m.tx = m.x + a / 8 * i * (u ? -1 : 1), m.ty = m.y + o / 8 * i * (u ? -1 : 1) } y = n, x = t }(n.clientX, n.clientY)
            })),
        window.addEventListener("mouseleave", (
            function () {
                y = null, x = null
            }))
}();