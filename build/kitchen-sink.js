webpackJsonp([100], {
    0: function (e, t, n) {
        "use strict";
        function a(e, t) {
            return Object.keys(t).reduce(function (e, n) {
                return e.replace(":" + n, t[n])
            }, e)
        }

        function r(e) {
            return e.split("/").some(function (e) {
                return e.startsWith(":")
            })
        }

        function o(e, t) {
            t(null, e)
        }

        function l(e) {
            var t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : "", l = n(1433)("./template" + e.replace(/^\.\/template/, ""));
            return function (e, n) {
                var i = a(t, e.params), u = y.get(b.markdown, i.replace(/^\//, "").split("/")), s = l.collect || o;
                s(Object.assign({}, e, {data: b.markdown, picked: b.picked, pageData: u, utils: T}), function (e, a) {
                    var o = r(t) && !u || 404 === e ? v : l["default"] || l;
                    o.dynamicProps = a, n(404 === e ? null : e, o)
                })
            }
        }

        function i(e) {
            return Array.isArray(e) ? e.map(i) : Object.assign({}, e, {
                onEnter: function () {
                    return p.start()
                },
                component: void 0,
                getComponent: l(e.component, e.dataPath || e.path),
                indexRoute: e.indexRoute && Object.assign({}, e.indexRoute, {
                    component: void 0,
                    getComponent: l(e.indexRoute.component, e.indexRoute.dataPath || e.indexRoute.path)
                }),
                childRoutes: e.childRoutes && e.childRoutes.map(i)
            })
        }

        function u(e, t) {
            return p.done(), d.createElement(e, s({}, t, e.dynamicProps))
        }

        var s = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var a in n)Object.prototype.hasOwnProperty.call(n, a) && (e[a] = n[a])
                }
                return e
            };
        n(533);
        var d = n(1), c = n(2), f = n(120), p = n(600);
        n(585);
        var h = n(595), m = n(535), g = n(427), y = n(582), v = n(350), b = n(534), E = b.plugins, S = m(function (e) {
            return e.converters || []
        }, E), T = {
            get: y.get, toReactComponent: function (e) {
                return g(e, S)
            }
        };
        E.map(function (e) {
            return e.utils || {}
        }).forEach(function (e) {
            return Object.assign(T, e)
        });
        var C = n(347), w = Array.isArray(C.routes) ? C.routes : [C.routes], k = i(w);
        k.push({path: "*", getComponents: l("./template/NotFound")});
        var x = d.createElement(f.Router, {
            history: f.useRouterHistory(h.createHistory)({basename: "/kitchen-sink"}),
            routes: k,
            createElement: u
        });
        c.render(x, document.getElementById("react-content"))
    }, 9: function (e, t, n) {
        "use strict";
        n(14), n(13)
    }, 13: function (e, t) {
    }, 14: function (e, t) {
    }, 16: function (e, t, n) {
        "use strict";
        n(9), n(40)
    }, 17: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
        var r = n(8), o = a(r), l = n(4), i = a(l), u = n(6), s = a(u), d = n(5), c = a(d), f = n(1), p = a(f), h = n(33), m = a(h), g = n(3), y = a(g), v = function (e) {
            function t() {
                return (0, i["default"])(this, t), (0, s["default"])(this, e.apply(this, arguments))
            }

            return (0, c["default"])(t, e), t.prototype.render = function () {
                var e, t = this.props, n = t.prefixCls, a = t.children, r = t.className, l = t.style, i = t.renderHeader, u = t.renderFooter, s = (0, y["default"])((e = {}, (0, o["default"])(e, n, !0), (0, o["default"])(e, r, r), e));
                return p["default"].createElement("div", {
                    className: s,
                    style: l
                }, i ? p["default"].createElement("div", {className: n + "-header"}, i()) : null, a ? p["default"].createElement("div", {className: n + "-body"}, a) : null, u ? p["default"].createElement("div", {className: n + "-footer"}, u()) : null)
            }, t
        }(p["default"].Component);
        t["default"] = v, v.Item = m["default"], v.defaultProps = {prefixCls: "am-list"}, e.exports = t["default"]
    }, 19: function (e, t) {
        "use strict";
        function n(e) {
            var t = {};
            return Object.keys(e).forEach(function (n) {
                0 === n.indexOf("data-") && (t[n] = e[n])
            }), t
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n, e.exports = t["default"]
    }, 20: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(7), o = a(r), l = n(1), i = a(l);
        t["default"] = function (e) {
            var t = e.type, n = e.className, a = void 0 === n ? "" : n;
            return i["default"].createElement("i", (0, o["default"])({}, e, {className: (a + " anticon anticon-" + t).trim()}))
        }, e.exports = t["default"]
    }, 22: function (e, t, n) {
        "use strict";
        n(29)
    }, 28: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        t.__esModule = !0;
        var r = n(35), o = a(r), l = n(34), i = a(l);
        t["default"] = function () {
            function e(e, t) {
                var n = [], a = !0, r = !1, o = void 0;
                try {
                    for (var l, u = (0, i["default"])(e); !(a = (l = u.next()).done) && (n.push(l.value), !t || n.length !== t); a = !0);
                } catch (s) {
                    r = !0, o = s
                } finally {
                    try {
                        !a && u["return"] && u["return"]()
                    } finally {
                        if (r)throw o
                    }
                }
                return n
            }

            return function (t, n) {
                if (Array.isArray(t))return t;
                if ((0, o["default"])(Object(t)))return e(t, n);
                throw new TypeError("Invalid attempt to destructure non-iterable instance")
            }
        }()
    }, 29: function (e, t) {
    }, 31: function (e, t) {
        "use strict";
        function n(e, t) {
            var n = {}, a = {};
            return Object.keys(e).forEach(function (r) {
                t.indexOf(r) !== -1 ? n[r] = e[r] : a[r] = e[r]
            }), [n, a]
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = n, e.exports = t["default"]
    }, 33: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = t.Brief = void 0;
        var r = n(7), o = a(r), l = n(8), i = a(l), u = n(4), s = a(u), d = n(6), c = a(d), f = n(5), p = a(f), h = n(1), m = a(h), g = n(3), y = a(g), v = n(19), b = a(v), E = t.Brief = function (e) {
            function t() {
                return (0, s["default"])(this, t), (0, c["default"])(this, e.apply(this, arguments))
            }

            return (0, p["default"])(t, e), t.prototype.render = function () {
                return m["default"].createElement("div", {
                    className: "am-list-brief",
                    style: this.props.style
                }, this.props.children)
            }, t
        }(m["default"].Component), S = function (e) {
            function t(n) {
                (0, s["default"])(this, t);
                var a = (0, c["default"])(this, e.call(this, n));
                return a.onClick = function (e) {
                    a.props.onClick && a.props.onClick(e)
                }, a.onTouchStart = function () {
                    a.props.onClick && a.setState({hover: !0})
                }, a.onTouchEnd = function () {
                    a.props.onClick && a.setState({hover: !1})
                }, a.state = {hover: !1}, a
            }

            return (0, p["default"])(t, e), t.prototype.render = function () {
                var e, t, n, a = this.props, r = a.prefixCls, l = a.thumb, u = a.arrow, s = a.error, d = a.children, c = a.extra, f = a.className, p = a.align, h = a.multipleLine, g = a.wrap, v = a.style, E = this.state.hover, S = void 0, T = void 0, C = (0, y["default"])((e = {}, (0, i["default"])(e, r + "-item", !0), (0, i["default"])(e, r + "-item-error", s), (0, i["default"])(e, r + "-item-top", "top" === p), (0, i["default"])(e, r + "-item-middle", "middle" === p), (0, i["default"])(e, r + "-item-bottom", "bottom" === p), (0, i["default"])(e, r + "-item-hover", E), (0, i["default"])(e, f, f), e)), w = (0, y["default"])((t = {}, (0, i["default"])(t, r + "-line", !0), (0, i["default"])(t, r + "-line-multiple", h), (0, i["default"])(t, r + "-line-wrap", g), t)), k = (0, y["default"])((n = {}, (0, i["default"])(n, r + "-arrow", !0), (0, i["default"])(n, r + "-arrow-horizontal", "horizontal" === u), (0, i["default"])(n, r + "-arrow-vertical", "down" === u || "up" === u), (0, i["default"])(n, r + "-arrow-vertical-up", "up" === u), n));
                return l && (S = "string" == typeof l ? m["default"].createElement("div", {className: r + "-thumb"}, m["default"].createElement("img", {src: l})) : m["default"].createElement("div", {className: r + "-thumb"}, l)), T = "" !== u ? m["default"].createElement("div", {className: k}) : null, m["default"].createElement("div", (0, o["default"])({}, (0, b["default"])(this.props), {
                    className: C,
                    onClick: this.onClick,
                    onTouchStart: this.onTouchStart,
                    onTouchEnd: this.onTouchEnd,
                    onTouchCancel: this.onTouchEnd,
                    style: v
                }), S, m["default"].createElement("div", {className: w}, "" !== d ? m["default"].createElement("div", {className: r + "-content"}, d) : null, "" !== c ? m["default"].createElement("div", {className: r + "-extra"}, c) : null, T))
            }, t
        }(m["default"].Component);
        t["default"] = S, S.Brief = E, S.defaultProps = {
            prefixCls: "am-list",
            thumb: "",
            arrow: "",
            children: "",
            extra: "",
            error: !1,
            multipleLine: !1,
            align: "middle",
            wrap: !1
        }, S.myName = "ListItem"
    }, 34: function (e, t, n) {
        e.exports = {"default": n(36), __esModule: !0}
    }, 35: function (e, t, n) {
        e.exports = {"default": n(37), __esModule: !0}
    }, 36: function (e, t, n) {
        n(32), n(21), e.exports = n(38)
    }, 37: function (e, t, n) {
        n(32), n(21), e.exports = n(39)
    }, 38: function (e, t, n) {
        var a = n(43), r = n(51);
        e.exports = n(18).getIterator = function (e) {
            var t = r(e);
            if ("function" != typeof t)throw TypeError(e + " is not iterable!");
            return a(t.call(e))
        }
    }, 39: function (e, t, n) {
        var a = n(60), r = n(25)("iterator"), o = n(46);
        e.exports = n(18).isIterable = function (e) {
            var t = Object(e);
            return void 0 !== t[r] || "@@iterator" in t || o.hasOwnProperty(a(t))
        }
    }, 40: function (e, t) {
    }, 59: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(68), o = a(r), l = n(69), i = a(l);
        o["default"].Item = i["default"], t["default"] = o["default"], e.exports = t["default"]
    }, 65: function (e, t, n) {
        "use strict";
        n(9), n(84)
    }, 68: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
        var r = n(8), o = a(r), l = n(4), i = a(l), u = n(6), s = a(u), d = n(5), c = a(d), f = n(1), p = a(f), h = n(3), m = a(h), g = function (e) {
            function t() {
                return (0, i["default"])(this, t), (0, s["default"])(this, e.apply(this, arguments))
            }

            return (0, c["default"])(t, e), t.prototype.render = function () {
                var e, t = this.props, n = t.direction, a = t.wrap, r = t.justify, l = t.align, i = t.alignContent, u = t.className, s = t.children, d = t.prefixCls, c = t.style, f = t.onClick, h = (0, m["default"])((e = {}, (0, o["default"])(e, d, !0), (0, o["default"])(e, d + "-dir-row", "row" === n), (0, o["default"])(e, d + "-dir-row-reverse", "row-reverse" === n), (0, o["default"])(e, d + "-dir-column", "column" === n), (0, o["default"])(e, d + "-dir-column-reverse", "column-reverse" === n), (0, o["default"])(e, d + "-nowrap", "nowrap" === a), (0, o["default"])(e, d + "-wrap", "wrap" === a), (0, o["default"])(e, d + "-wrap-reverse", "wrap-reverse" === a), (0, o["default"])(e, d + "-justify-start", "start" === r), (0, o["default"])(e, d + "-justify-end", "end" === r), (0, o["default"])(e, d + "-justify-center", "center" === r), (0, o["default"])(e, d + "-justify-between", "between" === r), (0, o["default"])(e, d + "-justify-around", "around" === r), (0, o["default"])(e, d + "-align-top", "top" === l || "start" === l), (0, o["default"])(e, d + "-align-middle", "middle" === l || "center" === l), (0, o["default"])(e, d + "-align-bottom", "bottom" === l || "end" === l), (0, o["default"])(e, d + "-align-baseline", "baseline" === l), (0, o["default"])(e, d + "-align-stretch", "stretch" === l), (0, o["default"])(e, d + "-align-content-start", "start" === i), (0, o["default"])(e, d + "-align-content-end", "end" === i), (0, o["default"])(e, d + "-align-content-center", "center" === i), (0, o["default"])(e, d + "-align-content-between", "between" === i), (0, o["default"])(e, d + "-align-content-around", "around" === i), (0, o["default"])(e, d + "-align-content-stretch", "stretch" === i), (0, o["default"])(e, u, u), e));
                return p["default"].createElement("div", {className: h, style: c, onClick: f}, s)
            }, t
        }(p["default"].Component);
        t["default"] = g, g.defaultProps = {
            prefixCls: "am-flexbox", align: "center", onClick: function () {
            }
        }, e.exports = t["default"]
    }, 69: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
        var r = n(8), o = a(r), l = n(4), i = a(l), u = n(6), s = a(u), d = n(5), c = a(d), f = n(1), p = a(f), h = n(3), m = a(h), g = function (e) {
            function t() {
                return (0, i["default"])(this, t), (0, s["default"])(this, e.apply(this, arguments))
            }

            return (0, c["default"])(t, e), t.prototype.render = function () {
                var e, t = this.props, n = t.children, a = t.className, r = t.prefixCls, l = t.style, i = t.onClick, u = (0, m["default"])((e = {}, (0, o["default"])(e, r + "-item", !0), (0, o["default"])(e, a, a), e));
                return p["default"].createElement("div", {className: u, style: l, onClick: i}, n)
            }, t
        }(p["default"].Component);
        t["default"] = g, g.defaultProps = {prefixCls: "am-flexbox"}, e.exports = t["default"]
    }, 84: function (e, t) {
    }, 252: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
        var r = n(7), o = a(r), l = n(28), i = a(l), u = n(4), s = a(u), d = n(6), c = a(d), f = n(5), p = a(f), h = n(1), m = a(h), g = n(433), y = a(g), v = n(31), b = a(v), E = function (e) {
            function t() {
                return (0, s["default"])(this, t), (0, c["default"])(this, e.apply(this, arguments))
            }

            return (0, p["default"])(t, e), t.prototype.render = function () {
                var e = (0, b["default"])(this.props, ["prefixCls", "children"]), t = (0, i["default"])(e, 2), n = t[0], a = n.prefixCls, r = n.children, l = t[1];
                return m["default"].createElement(y["default"], (0, o["default"])({prefixCls: a}, l), r)
            }, t
        }(m["default"].Component);
        t["default"] = E, E.defaultProps = {prefixCls: "am-drawer", enableDragHandle: !1}, e.exports = t["default"]
    }, 253: function (e, t, n) {
        "use strict";
        n(9), n(410)
    }, 347: function (e, t) {
        "use strict";
        e.exports = {
            categoryOrder: {"UI Bars": 0, "UI Views": 1, "UI Controls": 2, Others: 3},
            routes: [{path: "/", component: "./template/KitchenSink/index"}, {
                path: "/:component/",
                dataPath: "/components/:component",
                component: "./template/KitchenSink/Demo"
            }]
        }
    }, 348: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), o = a(r), l = n(120);
        n(583);
        var i = o["default"].createClass({
            displayName: "Item",
            PropTypes: {
                logo: r.PropTypes.string,
                title: r.PropTypes.string,
                subtitle: r.PropTypes.string,
                onClick: r.PropTypes.func
            },
            getDefaultProps: function () {
                return {
                    logo: "", title: "", subtitle: "", onClick: function () {
                    }
                }
            },
            handleTouchStart: function () {
                this.refs.demoitem.style.backgroundColor = "#f2f2f2"
            },
            handleTouchEnd: function () {
                this.refs.demoitem.style.backgroundColor = "#fff"
            },
            render: function () {
                var e = this.props, t = e.logo, n = e.title, a = e.subtitle, r = e.linkTo, i = e.style;
                return o["default"].createElement("section", {
                    className: "am-demo-item",
                    onTouchStart: this.handleTouchStart,
                    onTouchEnd: this.handleTouchEnd,
                    onTouchCancel: this.handleTouchEnd,
                    ref: "demoitem",
                    style: i
                }, o["default"].createElement("div", {className: "am-demo-item-inner"}, o["default"].createElement(l.Link, {to: r}, o["default"].createElement("div", {
                    className: "am-demo-item-logo",
                    style: {backgroundImage: "url(" + t + ")"}
                }), o["default"].createElement("h1", {className: "am-demo-item-title"}, n), o["default"].createElement("h2", {className: "am-demo-item-subtitle"}, a))))
            }
        });
        t["default"] = i, e.exports = t["default"]
    }, 349: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(1), o = a(r);
        n(584);
        var l = o["default"].createClass({
            displayName: "Page",
            PropTypes: {
                title: r.PropTypes.string,
                subtitle: r.PropTypes.string,
                children: r.PropTypes.any,
                isIndex: r.PropTypes.bool,
                logo: r.PropTypes.string,
                style: r.PropTypes.object
            },
            getDefaultProps: function () {
                return {logo: "", title: "", subtitle: "", isApp: 0, style: {}}
            },
            componentDidMount: function () {
                this.initScroller()
            },
            componentWillUnmount: function () {
                this.props.isIndex && (window.scrolltopNumber = document.querySelector(".am-demo-page").scrollTop)
            },
            initScroller: function () {
                this.refs.demoPage.style.height = document.documentElement.clientHeight + "px", this.refs.demoPage.style.overflowY = "scroll", this.props.isIndex ? document.querySelector(".am-demo-page").scrollTop = window.scrolltopNumber : document.querySelector(".am-demo-page").scrollTop = 0
            },
            render: function () {
                var e = this.props, t = e.logo, n = e.title, a = e.subtitle, r = e.children, l = e.style, i = "" !== t ? o["default"].createElement("div", {
                    className: "logo",
                    style: {backgroundImage: "url(" + t + ")"}
                }) : null;
                return o["default"].createElement("section", {
                    className: "am-demo-page",
                    ref: "demoPage",
                    style: l
                }, o["default"].createElement("div", {className: "am-demo-hd"}, i, o["default"].createElement("h1", {className: "am-demo-title"}, n), o["default"].createElement("h2", {className: "am-demo-subtitle"}, a)), o["default"].createElement("div", {className: "am-demo-bd"}, r))
            }
        });
        t["default"] = l, e.exports = t["default"]
    }, 350: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function r() {
            return l["default"].createElement("div", {id: "page-404"}, l["default"].createElement("section", null, l["default"].createElement("h1", null, "404"), l["default"].createElement("p", null, "\u4f60\u8981\u627e\u7684\u9875\u9762\u4e0d\u5b58\u5728 ", l["default"].createElement(i.Link, {to: "/"}, "\u8fd4\u56de\u9996\u9875"))), l["default"].createElement("style", {dangerouslySetInnerHTML: {__html: "#react-content { height: 100%; background-color: #fff }"}}))
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = r;
        var o = n(1), l = a(o), i = n(120);
        e.exports = t["default"]
    }, 410: function (e, t) {
    }, 432: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function r(e) {
            for (var t = e, n = 0, a = 0; t && !isNaN(t.offsetLeft) && !isNaN(t.offsetTop);)n += t.offsetLeft - t.scrollLeft, a += t.offsetTop - t.scrollTop, t = t.offsetParent;
            return {top: a, left: n}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var o = n(8), l = a(o), i = n(7), u = a(i), s = n(164), d = a(s), c = n(4), f = a(c), p = n(6), h = a(p), m = n(5), g = a(m), y = n(1), v = a(y), b = n(2), E = a(b), S = n(3), T = a(S), C = 20, w = function (e) {
            function t(n) {
                (0, f["default"])(this, t);
                var a = (0, h["default"])(this, e.call(this, n));
                return a.onOverlayClicked = function () {
                    a.props.open && a.props.onOpenChange(!1, {overlayClicked: !0})
                }, a.onTouchStart = function (e) {
                    if (!a.isTouching()) {
                        var t = e.targetTouches[0];
                        a.setState({
                            touchIdentifier: a.notTouch ? null : t.identifier,
                            touchStartX: t.clientX,
                            touchStartY: t.clientY,
                            touchCurrentX: t.clientX,
                            touchCurrentY: t.clientY
                        })
                    }
                }, a.onTouchMove = function (e) {
                    if (a.isTouching())for (var t = 0; t < e.targetTouches.length; t++)if (e.targetTouches[t].identifier === a.state.touchIdentifier) {
                        a.setState({
                            touchCurrentX: e.targetTouches[t].clientX,
                            touchCurrentY: e.targetTouches[t].clientY
                        });
                        break
                    }
                }, a.onTouchEnd = function () {
                    if (a.notTouch = !1, a.isTouching()) {
                        var e = a.touchSidebarWidth();
                        (a.props.open && e < a.state.sidebarWidth - a.props.dragToggleDistance || !a.props.open && e > a.props.dragToggleDistance) && a.props.onOpenChange(!a.props.open);
                        var t = a.touchSidebarHeight();
                        (a.props.open && t < a.state.sidebarHeight - a.props.dragToggleDistance || !a.props.open && t > a.props.dragToggleDistance) && a.props.onOpenChange(!a.props.open), a.setState({
                            touchIdentifier: null,
                            touchStartX: null,
                            touchStartY: null,
                            touchCurrentX: null,
                            touchCurrentY: null
                        })
                    }
                }, a.onScroll = function () {
                    a.isTouching() && a.inCancelDistanceOnScroll() && a.setState({
                        touchIdentifier: null,
                        touchStartX: null,
                        touchStartY: null,
                        touchCurrentX: null,
                        touchCurrentY: null
                    })
                }, a.inCancelDistanceOnScroll = function () {
                    var e = void 0;
                    switch (a.props.position) {
                        case"right":
                            e = Math.abs(a.state.touchCurrentX - a.state.touchStartX) < C;
                            break;
                        case"bottom":
                            e = Math.abs(a.state.touchCurrentY - a.state.touchStartY) < C;
                            break;
                        case"top":
                            e = Math.abs(a.state.touchStartY - a.state.touchCurrentY) < C;
                            break;
                        case"left":
                        default:
                            e = Math.abs(a.state.touchStartX - a.state.touchCurrentX) < C
                    }
                    return e
                }, a.isTouching = function () {
                    return null !== a.state.touchIdentifier
                }, a.saveSidebarSize = function () {
                    var e = E["default"].findDOMNode(a.refs.sidebar), t = e.offsetWidth, n = e.offsetHeight, o = r(E["default"].findDOMNode(a.refs.sidebar)).top, l = r(E["default"].findDOMNode(a.refs.dragHandle)).top;
                    t !== a.state.sidebarWidth && a.setState({sidebarWidth: t}), n !== a.state.sidebarHeight && a.setState({sidebarHeight: n}), o !== a.state.sidebarTop && a.setState({sidebarTop: o}), l !== a.state.dragHandleTop && a.setState({dragHandleTop: l})
                }, a.touchSidebarWidth = function () {
                    return "right" === a.props.position ? a.props.open && window.innerWidth - a.state.touchStartX < a.state.sidebarWidth ? a.state.touchCurrentX > a.state.touchStartX ? a.state.sidebarWidth + a.state.touchStartX - a.state.touchCurrentX : a.state.sidebarWidth : Math.min(window.innerWidth - a.state.touchCurrentX, a.state.sidebarWidth) : "left" === a.props.position ? a.props.open && a.state.touchStartX < a.state.sidebarWidth ? a.state.touchCurrentX > a.state.touchStartX ? a.state.sidebarWidth : a.state.sidebarWidth - a.state.touchStartX + a.state.touchCurrentX : Math.min(a.state.touchCurrentX, a.state.sidebarWidth) : void 0
                }, a.touchSidebarHeight = function () {
                    if ("bottom" === a.props.position)return a.props.open && window.innerHeight - a.state.touchStartY < a.state.sidebarHeight ? a.state.touchCurrentY > a.state.touchStartY ? a.state.sidebarHeight + a.state.touchStartY - a.state.touchCurrentY : a.state.sidebarHeight : Math.min(window.innerHeight - a.state.touchCurrentY, a.state.sidebarHeight);
                    if ("top" === a.props.position) {
                        var e = a.state.touchStartY - a.state.sidebarTop;
                        return a.props.open && e < a.state.sidebarHeight ? a.state.touchCurrentY > a.state.touchStartY ? a.state.sidebarHeight : a.state.sidebarHeight - a.state.touchStartY + a.state.touchCurrentY : Math.min(a.state.touchCurrentY - a.state.dragHandleTop, a.state.sidebarHeight)
                    }
                }, a.renderStyle = function (e) {
                    var t = e.sidebarStyle, n = e.isTouching, r = e.overlayStyle, o = e.contentStyle;
                    if ("right" === a.props.position || "left" === a.props.position) {
                        if (t.transform = "translateX(0%)", t.WebkitTransform = "translateX(0%)", n) {
                            var l = a.touchSidebarWidth() / a.state.sidebarWidth;
                            "right" === a.props.position && (t.transform = "translateX(" + 100 * (1 - l) + "%)", t.WebkitTransform = "translateX(" + 100 * (1 - l) + "%)"), "left" === a.props.position && (t.transform = "translateX(-" + 100 * (1 - l) + "%)", t.WebkitTransform = "translateX(-" + 100 * (1 - l) + "%)"), r.opacity = l, r.visibility = "visible"
                        }
                        o && (o[a.props.position] = a.state.sidebarWidth + "px")
                    }
                    if ("top" === a.props.position || "bottom" === a.props.position) {
                        if (t.transform = "translateY(0%)", t.WebkitTransform = "translateY(0%)", n) {
                            var i = a.touchSidebarHeight() / a.state.sidebarHeight;
                            "bottom" === a.props.position && (t.transform = "translateY(" + 100 * (1 - i) + "%)", t.WebkitTransform = "translateY(" + 100 * (1 - i) + "%)"), "top" === a.props.position && (t.transform = "translateY(-" + 100 * (1 - i) + "%)", t.WebkitTransform = "translateY(-" + 100 * (1 - i) + "%)"), r.opacity = i, r.visibility = "visible"
                        }
                        o && (o[a.props.position] = a.state.sidebarHeight + "px")
                    }
                }, a.state = {
                    sidebarWidth: 0,
                    sidebarHeight: 0,
                    sidebarTop: 0,
                    dragHandleTop: 0,
                    touchIdentifier: null,
                    touchStartX: null,
                    touchStartY: null,
                    touchCurrentX: null,
                    touchCurrentY: null,
                    touchSupported: "object" === ("undefined" == typeof window ? "undefined" : (0, d["default"])(window)) && "ontouchstart" in window
                }, a
            }

            return (0, g["default"])(t, e), t.prototype.componentDidMount = function () {
                this.saveSidebarSize()
            }, t.prototype.componentDidUpdate = function () {
                this.isTouching() || this.saveSidebarSize()
            }, t.prototype.render = function () {
                var e, t = this, n = this.props, a = n.className, r = n.style, o = n.prefixCls, i = n.position, s = n.transitions, d = n.touch, c = n.enableDragHandle, f = n.sidebar, p = n.children, h = n.docked, m = n.open, g = (0, u["default"])({}, this.props.sidebarStyle), y = (0, u["default"])({}, this.props.contentStyle), b = (0, u["default"])({}, this.props.overlayStyle), E = (e = {}, (0, l["default"])(e, a, !!a), (0, l["default"])(e, o, !0), (0, l["default"])(e, o + "-" + i, !0), e), S = {style: r}, C = this.isTouching();
                C ? this.renderStyle({
                    sidebarStyle: g,
                    isTouching: !0,
                    overlayStyle: b
                }) : h ? 0 !== this.state.sidebarWidth && (E[o + "-docked"] = !0, this.renderStyle({
                    sidebarStyle: g,
                    contentStyle: y
                })) : m && (E[o + "-open"] = !0, this.renderStyle({sidebarStyle: g}), b.opacity = 1, b.visibility = "visible"), !C && s || (g.transition = "none", g.WebkitTransition = "none", y.transition = "none", b.transition = "none");
                var w = null;
                return this.state.touchSupported && d && (m ? (S.onTouchStart = function (e) {
                    t.notTouch = !0, t.onTouchStart(e)
                }, S.onTouchMove = this.onTouchMove, S.onTouchEnd = this.onTouchEnd, S.onTouchCancel = this.onTouchEnd, S.onScroll = this.onScroll) : c && (w = v["default"].createElement("div", {
                    className: o + "-draghandle",
                    style: this.props.dragHandleStyle,
                    onTouchStart: this.onTouchStart,
                    onTouchMove: this.onTouchMove,
                    onTouchEnd: this.onTouchEnd,
                    onTouchCancel: this.onTouchEnd,
                    ref: "dragHandle"
                }))), v["default"].createElement("div", (0, u["default"])({className: (0, T["default"])(E)}, S), v["default"].createElement("div", {
                    className: o + "-sidebar",
                    style: g,
                    ref: "sidebar"
                }, f), v["default"].createElement("div", {
                    className: o + "-overlay",
                    style: b,
                    role: "presentation",
                    tabIndex: "0",
                    ref: "overlay",
                    onClick: this.onOverlayClicked
                }), v["default"].createElement("div", {className: o + "-content", style: y, ref: "content"}, w, p))
            }, t
        }(v["default"].Component);
        w.propTypes = {
            prefixCls: v["default"].PropTypes.string,
            className: v["default"].PropTypes.string,
            children: v["default"].PropTypes.node.isRequired,
            style: v["default"].PropTypes.object,
            sidebarStyle: v["default"].PropTypes.object,
            contentStyle: v["default"].PropTypes.object,
            overlayStyle: v["default"].PropTypes.object,
            dragHandleStyle: v["default"].PropTypes.object,
            sidebar: v["default"].PropTypes.node.isRequired,
            docked: v["default"].PropTypes.bool,
            open: v["default"].PropTypes.bool,
            transitions: v["default"].PropTypes.bool,
            touch: v["default"].PropTypes.bool,
            enableDragHandle: v["default"].PropTypes.bool,
            position: v["default"].PropTypes.oneOf(["left", "right", "top", "bottom"]),
            dragToggleDistance: v["default"].PropTypes.number,
            onOpenChange: v["default"].PropTypes.func
        }, w.defaultProps = {
            prefixCls: "rc-drawer",
            sidebarStyle: {},
            contentStyle: {},
            overlayStyle: {},
            dragHandleStyle: {},
            docked: !1,
            open: !1,
            transitions: !0,
            touch: !0,
            enableDragHandle: !0,
            position: "left",
            dragToggleDistance: 30,
            onOpenChange: function () {
            }
        }, t["default"] = w, e.exports = t["default"]
    }, 433: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0});
        var r = n(432), o = a(r);
        t["default"] = o["default"], e.exports = t["default"]
    }, 526: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        function r(e, t) {
            var n = "changelog" === e.location.pathname ? e.data.CHANGELOG : e.pageData, a = "function" == typeof n ? n() : (n[O] || n.index[O] || n.index)(), r = [a], o = e.utils.get(e.data, ["components", e.params.component, "demo"]);
            o && r.push(o()), w["default"].all(r).then(function (n) {
                t(null, (0, v["default"])({}, e, {localizedPageData: n[0], demos: n[1]}))
            })
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
        var o = (n(253), n(252)), l = a(o), i = (n(22), n(20)), u = a(i), s = (n(16), n(17)), d = a(s), c = n(4), f = a(c), p = n(6), h = a(p), m = n(5), g = a(m), y = n(7), v = a(y);
        t.collect = r;
        var b = n(1), E = a(b), S = n(2), T = a(S), C = n(365), w = a(C), k = n(120), x = n(347), P = a(x), O = window.localStorage && "en-US" !== localStorage.getItem("locale") ? "zh-CN" : "en-US", N = function (e) {
            function t(n) {
                (0, f["default"])(this, t);
                var a = (0, h["default"])(this, e.call(this, n));
                return a.componentWillReceiveProps = function () {
                    a.setState({open: !1})
                }, a.onOpenChange = function () {
                    a.setState({open: !a.state.open})
                }, a.onTouchStart = function () {
                    a.setState({triggerActive: !0})
                }, a.onTouchEnd = function () {
                    a.setState({triggerActive: !1})
                }, a.state = {open: !1, triggerActive: !1, activeIdx: -1}, a
            }

            return (0, g["default"])(t, e), t.prototype.render = function () {
                var e = !/(iPhone|iPad|iPod|iOS|Android)/i.test(navigator.userAgent), t = this.props.demos, n = [];
                Object.keys(t).forEach(function (e) {
                    n.push(t[e])
                });
                var a = this.props.params.component, r = n.sort(function (e, t) {
                    return parseInt(e.meta.order, 10) - parseInt(t.meta.order, 10)
                }), o = this.props, i = o.location, s = o.picked, c = s.components, f = {};
                c.forEach(function (e) {
                    var t = e.meta;
                    f[t.category] || (f[t.category] = []), f[t.category].push(t)
                });
                var p = f["UI Views"].concat(f["UI Bars"]).concat(f["UI Controls"]).concat(f.Others), h = void 0;
                p.forEach(function (e) {
                    e.filename.split("/")[1] === a && (h = e)
                });
                var m = ["drawer", "list-view"], g = [{order: 0, title: "\u57fa\u672c"}, {
                    order: 1,
                    title: "\u5d4c\u5165\u6587\u6863\u6a21\u5f0f"
                }], y = [{order: 0, title: "\u81ea\u5b9a\u4e49\u5bb9\u5668"}, {
                    order: 1,
                    title: "body \u5bb9\u5668"
                }, {order: 2, title: "\u6807\u9898\u5438\u9876\uff08body \u5bb9\u5668\uff09"}, {
                    order: 3,
                    title: "\u7d22\u5f15\u5217\u8868"
                }, {
                    order: 4,
                    title: "\u7d22\u5f15\u5217\u8868\uff08\u6807\u9898\u5438\u9876\uff09"
                }], b = E["default"].createElement("div", null, E["default"].createElement("div", {className: "demo-drawer-home"}, E["default"].createElement(k.Link, {to: "/"}, "Ant Design Mobile")), Object.keys(f).sort(function (e, t) {
                    return P["default"].categoryOrder[e] - P["default"].categoryOrder[t]
                }).map(function (e, t) {
                    return E["default"].createElement(d["default"], {key: t, title: e}, f[e].map(function (e, t) {
                        var n = e.filename.split("/")[1], r = void 0;
                        return r = "drawer" === n ? g : y, E["default"].createElement(d["default"].Item, {key: t}, m.indexOf(n) > -1 ? E["default"].createElement(d["default"], {
                            renderHeader: function () {
                                return E["default"].createElement("div", {style: {padding: "5px 0"}}, E["default"].createElement("span", {className: a === n ? "demo-current" : ""}, e.english, E["default"].createElement("span", {className: "demo-chinese"}, e.chinese)))
                            }
                        }, r.map(function (e, t) {
                            return E["default"].createElement(d["default"].Item, {key: t}, E["default"].createElement(k.Link, {to: "/" + n + "/#" + n + "-demo-" + e.order}, e.title))
                        })) : E["default"].createElement(k.Link, {to: "/" + n + "/"}, E["default"].createElement("span", {className: a === n ? "demo-current" : ""}, e.english, " ", E["default"].createElement("span", {className: "demo-chinese"}, e.chinese))))
                    }))
                })), S = {
                    open: this.state.open,
                    position: "left",
                    onOpenChange: this.onOpenChange
                }, C = E["default"].createElement("div", {
                    style: {height: "100%"},
                    className: "demo"
                }, E["default"].createElement("div", {className: "demoName"}, h.chinese, E["default"].createElement("p", null, h.english)), r.length > 1 && E["default"].createElement("div", {className: "demoLinks"}, E["default"].createElement("ul", null, r.map(function (e, t) {
                        return E["default"].createElement("li", {key: t}, E["default"].createElement("a", {href: window.location.protocol + "//" + window.location.host + "/kitchen-sink/" + a + "/#" + a + "-demo-" + t}, e.meta.title))
                    }))), r.map(function (e, t) {
                    return E["default"].createElement("div", {
                        className: "demo-preview-item",
                        id: a + "-demo-" + t,
                        key: t
                    }, E["default"].createElement("div", {className: "demoTitle"}, e.meta.title), e.preview(E["default"], T["default"]), e.style ? E["default"].createElement("style", {dangerouslySetInnerHTML: {__html: e.style}}) : null)
                }));
                if (m.indexOf(a) > -1) {
                    var w = i.hash.substr(1).split("-demo-"), x = r[w.length > 1 ? w[1] : 0];
                    C = E["default"].createElement("div", {style: {height: "100%"}}, x.preview(E["default"], T["default"]), x.style ? E["default"].createElement("style", {dangerouslySetInnerHTML: {__html: x.style}}) : null), "list-view" === a && (S.className = "spe-drawer")
                }
                var O = e ? null : {minHeight: document.documentElement.clientHeight}, N = this.state.triggerActive;
                return E["default"].createElement("div", {id: a}, E["default"].createElement("div", {className: "demo-drawer-trigger"}, E["default"].createElement("span", {
                    onClick: this.onOpenChange,
                    style: N ? {color: "#108ee9"} : {}
                }, E["default"].createElement(u["default"], {
                    onTouchStart: this.onTouchStart,
                    onTouchEnd: this.onTouchEnd,
                    type: "bars"
                }))), E["default"].createElement("div", {className: "demo-drawer-container"}, E["default"].createElement(l["default"], (0, v["default"])({
                    style: O,
                    sidebar: b,
                    dragHandleStyle: {display: "none"}
                }, S), C)))
            }, t
        }(E["default"].Component);
        t["default"] = N
    }, 527: function (e, t, n) {
        "use strict";
        function a(e) {
            return e && e.__esModule ? e : {"default": e}
        }

        Object.defineProperty(t, "__esModule", {value: !0}), t["default"] = void 0;
        var r = (n(253), n(252)), o = a(r), l = n(7), i = a(l), u = (n(65), n(59)), s = a(u), d = (n(22), n(20)), c = a(d), f = (n(16), n(17)), p = a(f), h = n(4), m = a(h), g = n(6), y = a(g), v = n(5), b = a(v), E = n(1), S = a(E), T = n(120), C = n(349), w = a(C), k = n(348), x = a(k), P = n(347), O = a(P), N = {
            "action-sheet": "cYmaBafYBnAxCqQ",
            "activity-indicator": "yVtRfZGoDxXObTK",
            alert: "XdSYKalBelFOMqd",
            badge: "UwUpBYPYnlwVicM",
            button: "ZRDUYEzfOzKWdzE",
            carousel: "FbIGJuDaiQoKNvj",
            checkbox: "dWPGltvdjaanrRd",
            collapse: "yIQQHiTULgYehij",
            "date-picker": "IQtMSWmYwLEuqln",
            drawer: "oSokuHUVgeoTLJl",
            popup: "gfWmRfZNzMyVUss",
            popover: "iIOLFHTKUCxBgUV",
            flex: "zFqYaBWIPpYYORq",
            "float-menu": "dSOLngHNazulnFR",
            grid: "UBGcnLKfVQIXgUb",
            icon: "yhnfleZZoezOjtU",
            "image-picker": "NDsSvklLUeodsHK",
            "input-item": "SdSqpihcSBoBrFO",
            list: "tiapjpdKPQGHhnC",
            "list-action": "nIYrkZcGvKXjQhX",
            "list-view": "lMztpIPTRAIWGIP",
            menu: "QeVVHHEAhSiVtXt",
            modal: "HzRRcuwtqUCCOBg",
            "nav-bar": "qzZlligUfwgFjwD",
            result: "jFrmGCOsQeEUrnR",
            picker: "STBLvEutBwPySbL",
            progress: "ihijukOXDlqXvPS",
            radio: "MJszdVSBKhtGmIP",
            "refresh-control": "nUAtybajGulmcSM",
            "search-bar": "QnAmpSwlfPzjpSL",
            slider: "mCyccAjoVLFVhSH",
            stepper: "eYnIAokGATNUxlD",
            steps: "nvQVDIUiTmXcJtO",
            "switch": "ITFdMlELFchsTmz",
            tabs: "stWeDgdtEIKoiTU",
            tag: "gfstSzAhvXqKyEg",
            "textarea-item": "PfzuWlDVfndrQUK",
            timeline: "aIomfcRsRHmPyNo",
            toast: "nREwETegxvDndJZ",
            "notice-bar": "EFpWULKNsectBDK",
            "white-space": "NfomhEsOdhFxEws",
            "wing-blank": "DUkfOYZVcLctGot",
            card: "daARhPjKcxlSuuZ",
            tooltip: "RvpANXExTEUwQTV",
            pagination: "fOQwMYUYaRRKYtd",
            loading: "DyAmULrLMBrgoOy",
            table: "TbRxKTMOzgrCvMR",
            form: "hZDnBrVwPmrgrLq",
            "swipe-action": "nlDYwTsLwJdnaKc",
            accordion: "jGVfAYlFPECtWvI",
            "tab-bar": "OZInMeAaDCHtaJU",
            "segmented-control": "qCqRFuSbewqIWyv"
        }, _ = function (e) {
            function t(n) {
                (0, m["default"])(this, t);
                var a = (0, y["default"])(this, e.call(this, n));
                return a.state = {open: !1}, a.onOpenChange = a.onOpenChange.bind(a), a
            }

            return (0, b["default"])(t, e), t.prototype.onOpenChange = function () {
                this.setState({open: !this.state.open})
            }, t.prototype.render = function () {
                var e = this.props.picked, t = e.components, n = document.documentElement.clientWidth / 3, a = {
                    width: n + "px",
                    height: (n >= 138 * window.devicePixelRatio ? 138 * window.devicePixelRatio : n) + "px",
                    display: "inline-block"
                }, r = {};
                t.forEach(function (e) {
                    var t = e.meta;
                    r[t.category] || (r[t.category] = []), r[t.category].push(t)
                });
                var l = S["default"].createElement("div", null, S["default"].createElement("div", {className: "demo-drawer-home"}, S["default"].createElement(T.Link, {to: "/"}, "Ant Design Mobile")), Object.keys(r).sort(function (e, t) {
                    return O["default"].categoryOrder[e] - O["default"].categoryOrder[t]
                }).map(function (e, t) {
                    return S["default"].createElement(p["default"], {
                        key: t, renderHeader: function () {
                            return e
                        }
                    }, r[e].map(function (e, t) {
                        var n = e.filename.split("/")[1];
                        return S["default"].createElement(p["default"].Item, {
                            key: t
                        }, S["default"].createElement(T.Link, {to: "/" + n + "/"}, e.english, S["default"].createElement("span", {
                            style: {
                                fontSize: 24,
                                color: "#888"
                            }
                        }, e.chinese)))
                    }))
                })), u = {open: this.state.open, position: "left", onOpenChange: this.onOpenChange};
                return S["default"].createElement("div", null, S["default"].createElement("div", {className: "demo-drawer-trigger"}, S["default"].createElement("span", {onClick: this.onOpenChange}, S["default"].createElement(c["default"], {type: "bars"}))), S["default"].createElement("div", {className: "demo-drawer-container"}, S["default"].createElement(o["default"], (0, i["default"])({
                    sidebar: l,
                    dragHandleStyle: {display: "none"}
                }, u), S["default"].createElement(w["default"], {
                    logo: "https://zos.alipayobjects.com/rmsportal/wIjMDnsrDoPPcIV.png",
                    title: "Ant Design Mobile",
                    subtitle: "\u670d\u52a1\u4e8e\u8682\u8681\u5927\u4e2d\u53f0\u65e0\u7ebf\u4e1a\u52a1\u7684react\u7ec4\u4ef6",
                    isIndex: !0
                }, Object.keys(r).sort(function (e, t) {
                    return O["default"].categoryOrder[e] - O["default"].categoryOrder[t]
                }).map(function (e, t) {
                    return S["default"].createElement(p["default"], {
                        key: t, renderHeader: function () {
                            return e
                        }
                    }, function () {
                        for (var n = [], o = [], l = 0; l < r[e].length; l++) {
                            var i = r[e][l], u = i.filename.split("/")[1], d = N[u] || "nREwETegxvDndJZ";
                            o.push(S["default"].createElement(x["default"], {
                                logo: "https://os.alipayobjects.com/rmsportal/" + d + ".png",
                                title: i.chinese,
                                subtitle: i.english,
                                style: a,
                                key: "flexitem-" + l,
                                linkTo: "/" + u + "/"
                            }))
                        }
                        return n.push(S["default"].createElement(s["default"], {
                            wrap: "wrap",
                            className: "antm-demo-flex",
                            key: "flex-" + t
                        }, o)), n
                    }())
                })))))
            }, t
        }(S["default"].Component);
        t["default"] = _, e.exports = t["default"]
    }, 583: function (e, t) {
    }, 584: function (e, t) {
    }, 1187: function (e, t) {
    }, 1433: function (e, t, n) {
        function a(e) {
            return n(r(e))
        }

        function r(e) {
            return o[e] || function () {
                    throw new Error("Cannot find module '" + e + "'.")
                }()
        }

        var o = {
            "./template/KitchenSink/Base.less": 1187,
            "./template/KitchenSink/Demo": 526,
            "./template/KitchenSink/Demo.jsx": 526,
            "./template/KitchenSink/Item": 348,
            "./template/KitchenSink/Item.jsx": 348,
            "./template/KitchenSink/Item.less": 583,
            "./template/KitchenSink/Page": 349,
            "./template/KitchenSink/Page.jsx": 349,
            "./template/KitchenSink/Page.less": 584,
            "./template/KitchenSink/index": 527,
            "./template/KitchenSink/index.jsx": 527,
            "./template/NotFound": 350,
            "./template/NotFound.jsx": 350
        };
        a.keys = function () {
            return Object.keys(o)
        }, a.resolve = r, e.exports = a, a.id = 1433
    }
});