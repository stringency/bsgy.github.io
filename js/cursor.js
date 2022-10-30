!function () {
    var e = document.getElementById("cursor"),
        t = { pre: null, now: null },
        n = document.getElementsByTagName("*"),
        o = []; window.addEventListener("load",
            (() => {
                for (let e of n) "pointer" == window.getComputedStyle(e).cursor && o.push(e.outerHTML);
                var e = document.createElement("style");
                e.innerHTML = '* { cursor: url("data:image/svg+xml, <svg xmlns=\\"http://www.w3.org/2000/svg\\" viewBox=\\"0 0 8 8\\" width=\\"20px\\" height=\\"20px\\"><circle cx=\\"4\\" cy=\\"4\\" r=\\"4\\" opacity=\\".5\\"/></svg>") 4 4, auto !important; }',
                    document.body.appendChild(e)
            })),
            document.addEventListener(
                "mouseover",
                (t => { o.includes(t.target.outerHTML) && e.classList.add("hover") })),
            document.addEventListener(
                "mouseout",
                (t => { o.includes(t.target.outerHTML) && e.classList.remove("hover") })),
            document.addEventListener(
                "mousemove",
                (n => {
                    t.now || (e.style.left = n.clientX - 8 + "px", e.style.top = n.clientY - 8 + "px"),
                        t.now = { x: n.clientX - 8, y: n.clientY - 8 }, e.classList.add("visible")
                })),
            document.addEventListener(
                "mouseenter",
                (() => { e.classList.add("visible"), t.pre = null })),
            document.addEventListener(
                "mouseleave",
                (() => { e.classList.remove("visible") })),
            document.addEventListener(
                "mousedown",
                (() => { e.classList.add("active") })),
            document.addEventListener(
                "mouseup",
                (() => { e.classList.remove("active") }));
    const s = (e, t, n) => (1 - n) * e + n * t;
    requestAnimationFrame((
        function n() {
            t.pre ? (t.pre = {
                x: s(t.pre.x, t.now.x, .15),
                y: s(t.pre.y, t.now.y, .15)
            }, e.style.left = t.pre.x + "px",
                e.style.top = t.pre.y + "px") : t.pre = t.now,
                requestAnimationFrame(n)
        }))
}();