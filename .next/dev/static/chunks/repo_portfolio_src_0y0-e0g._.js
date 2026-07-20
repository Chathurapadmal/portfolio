(globalThis["TURBOPACK"] || (globalThis["TURBOPACK"] = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/repo/portfolio/src/components/BackgroundDecor.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const PARTICLES = 20;
function seededRandom(seed) {
    const x = Math.sin(seed * 9301 + 49297) * 49297;
    return x - Math.floor(x);
}
const positions = Array.from({
    length: PARTICLES
}, (_, i)=>({
        bottom: `${seededRandom(i * 7 + 1) * 20}%`,
        left: `${seededRandom(i * 13 + 3) * 100}%`
    }));
function BackgroundDecor() {
    _s();
    const particlesRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "BackgroundDecor.useEffect": ()=>{
            particlesRef.current.forEach({
                "BackgroundDecor.useEffect": (el)=>{
                    if (!el) return;
                    __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(el, {
                        y: __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(-80, -200),
                        x: __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(-60, 60),
                        opacity: 0,
                        duration: __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(3, 6),
                        repeat: -1,
                        delay: __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].utils.random(0, 4),
                        ease: 'none'
                    });
                }
            }["BackgroundDecor.useEffect"]);
        }
    }["BackgroundDecor.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-layer",
        "aria-hidden": "true",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-grid"
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                lineNumber: 38,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-glow-a"
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                lineNumber: 39,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-glow-b"
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                lineNumber: 40,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "cube-wrapper",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "cube",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cube-face cube-face-front"
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                            lineNumber: 44,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cube-face cube-face-back"
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                            lineNumber: 45,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cube-face cube-face-right"
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                            lineNumber: 46,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cube-face cube-face-left"
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                            lineNumber: 47,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cube-face cube-face-top"
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                            lineNumber: 48,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "cube-face cube-face-bottom"
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                            lineNumber: 49,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                    lineNumber: 43,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                lineNumber: 42,
                columnNumber: 7
            }, this),
            positions.map((pos, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    ref: (el)=>{
                        particlesRef.current[i] = el;
                    },
                    className: "particle",
                    style: {
                        bottom: pos.bottom,
                        left: pos.left
                    }
                }, i, false, {
                    fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
                    lineNumber: 54,
                    columnNumber: 9
                }, this))
        ]
    }, void 0, true, {
        fileName: "[project]/repo/portfolio/src/components/BackgroundDecor.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(BackgroundDecor, "dNdqWOz6Jd8zFqx5JfoO2N851bU=");
_c = BackgroundDecor;
const __TURBOPACK__default__export__ = BackgroundDecor;
var _c;
__turbopack_context__.k.register(_c, "BackgroundDecor");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/repo/portfolio/src/components/TopBar.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
'use client';
;
function TopBar() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("header", {
        className: "topbar",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "brand",
                children: "CHATHURA.dev"
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/TopBar.jsx",
                lineNumber: 6,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                className: "nav-links",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#about",
                        children: "About"
                    }, void 0, false, {
                        fileName: "[project]/repo/portfolio/src/components/TopBar.jsx",
                        lineNumber: 8,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#projects",
                        children: "Projects"
                    }, void 0, false, {
                        fileName: "[project]/repo/portfolio/src/components/TopBar.jsx",
                        lineNumber: 9,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#community",
                        children: "Community"
                    }, void 0, false, {
                        fileName: "[project]/repo/portfolio/src/components/TopBar.jsx",
                        lineNumber: 10,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: "#contact",
                        className: "cta-btn",
                        children: "Let's Build"
                    }, void 0, false, {
                        fileName: "[project]/repo/portfolio/src/components/TopBar.jsx",
                        lineNumber: 11,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/repo/portfolio/src/components/TopBar.jsx",
                lineNumber: 7,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/repo/portfolio/src/components/TopBar.jsx",
        lineNumber: 5,
        columnNumber: 5
    }, this);
}
_c = TopBar;
const __TURBOPACK__default__export__ = TopBar;
var _c;
__turbopack_context__.k.register(_c, "TopBar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/repo/portfolio/src/assets/me.webp (static in ecmascript, tag client)", ((__turbopack_context__) => {

__turbopack_context__.q("/_next/static/media/me.0ognpy7c3zi1w.webp");}),
"[project]/repo/portfolio/src/assets/me.webp.mjs { IMAGE => \"[project]/repo/portfolio/src/assets/me.webp (static in ecmascript, tag client)\" } [app-client] (structured image object with data url, ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$assets$2f$me$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__ = __turbopack_context__.i("[project]/repo/portfolio/src/assets/me.webp (static in ecmascript, tag client)");
;
const __TURBOPACK__default__export__ = {
    src: __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$assets$2f$me$2e$webp__$28$static__in__ecmascript$2c$__tag__client$29$__["default"],
    width: 643,
    height: 900,
    blurWidth: 6,
    blurHeight: 8,
    blurDataURL: "data:image/webp;base64,UklGRkIBAABXRUJQVlA4TDUBAAAvBcABEM1VICICHgiADQIAAIA9nYsAy/2EIAgCEQAAAAAAAAAAAAAAAAAAAABAAHD8goC+wl2FgwwAAAAPBC0HAQAA4Pzfb5llAgECAAAAAAAAAAAAAAAAAAAAAAAAAAAAAABAEAAITLt/80AAUhgAAADO//rOKACCAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAsln19++BgOAgAAAAnP8tGCKAACwEQAAAQkACYACMYQQAICIGAAAEAAAAAACACAQg4GmwQglAtcp6Pm780i4/uDJ4AYBN7XSvabi+vldoSyIAEHiKLUnzXijfChjFwbg788zqf4dxfsKGNbpw4UJ/zVZ2wU5RNhRnVuoXZ68/xy7qfoqmYryts9ril+fL2TaPa6ZIoaU9/iHhI2kFOXWkdAsA"
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/repo/portfolio/src/components/HeroSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$assets$2f$me$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$repo$2f$portfolio$2f$src$2f$assets$2f$me$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__ = __turbopack_context__.i('[project]/repo/portfolio/src/assets/me.webp.mjs { IMAGE => "[project]/repo/portfolio/src/assets/me.webp (static in ecmascript, tag client)" } [app-client] (structured image object with data url, ecmascript)');
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function HeroSection({ stack }) {
    _s();
    const titleRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const chipsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const terminalRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const photoRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const descRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const ctaRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const tl = __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].timeline({
                defaults: {
                    ease: 'power3.out'
                }
            });
            tl.fromTo(sectionRef.current, {
                opacity: 0
            }, {
                opacity: 1,
                duration: 0.6
            }).fromTo('.hero-eyebrow', {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 0.7,
                duration: 0.6
            }, '-=0.3').fromTo(titleRef.current?.children, {
                y: 40,
                opacity: 0,
                rotateX: -20
            }, {
                y: 0,
                opacity: 1,
                rotateX: 0,
                duration: 0.7,
                stagger: 0.12
            }, '-=0.3').fromTo(descRef.current, {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.5
            }, '-=0.3').fromTo(chipsRef.current, {
                y: 15,
                opacity: 0,
                scale: 0.9
            }, {
                y: 0,
                opacity: 1,
                scale: 1,
                duration: 0.4,
                stagger: 0.05
            }, '-=0.2').fromTo(ctaRef.current?.children, {
                y: 15,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.4,
                stagger: 0.1
            }, '-=0.2').fromTo(terminalRef.current, {
                y: 20,
                opacity: 0
            }, {
                y: 0,
                opacity: 1,
                duration: 0.5
            }, '-=0.2').fromTo('.terminal-line', {
                opacity: 0,
                y: 8
            }, {
                opacity: 1,
                y: 0,
                duration: 0.25,
                stagger: 0.2
            }, '-=0.2').fromTo(photoRef.current, {
                scale: 0.6,
                opacity: 0,
                rotateY: 30
            }, {
                scale: 1,
                opacity: 1,
                rotateY: 0,
                duration: 0.8,
                ease: 'back.out(1.4)'
            }, '-=0.8');
            return ({
                "HeroSection.useEffect": ()=>tl.kill()
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "HeroSection.useEffect": ()=>{
            const photo = photoRef.current;
            if (!photo) return;
            const handleMouseMove = {
                "HeroSection.useEffect.handleMouseMove": (e)=>{
                    const rect = photo.getBoundingClientRect();
                    const x = (e.clientX - rect.left) / rect.width - 0.5;
                    const y = (e.clientY - rect.top) / rect.height - 0.5;
                    __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(photo, {
                        rotateY: x * 15,
                        rotateX: -y * 15,
                        duration: 0.3,
                        ease: 'power2.out'
                    });
                }
            }["HeroSection.useEffect.handleMouseMove"];
            const handleMouseLeave = {
                "HeroSection.useEffect.handleMouseLeave": ()=>{
                    __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to(photo, {
                        rotateY: 0,
                        rotateX: 0,
                        duration: 0.5,
                        ease: 'power2.out'
                    });
                }
            }["HeroSection.useEffect.handleMouseLeave"];
            photo.addEventListener('mousemove', handleMouseMove);
            photo.addEventListener('mouseleave', handleMouseLeave);
            return ({
                "HeroSection.useEffect": ()=>{
                    photo.removeEventListener('mousemove', handleMouseMove);
                    photo.removeEventListener('mouseleave', handleMouseLeave);
                }
            })["HeroSection.useEffect"];
        }
    }["HeroSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "snap-section hero-section",
        id: "home",
        ref: sectionRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "hero-layout",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-text-content",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hero-eyebrow",
                            children: "Software Engineering Undergraduate"
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                            lineNumber: 113,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                            className: "hero-title",
                            ref: titleRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "HELLO ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "highlight",
                                            children: "WORLD"
                                        }, void 0, false, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 116,
                                            columnNumber: 24
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                    lineNumber: 116,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        "I'm ",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "outline",
                                            children: "Chathura"
                                        }, void 0, false, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 117,
                                            columnNumber: 27
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                    lineNumber: 117,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                            lineNumber: 115,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "hero-desc",
                            ref: descRef,
                            children: "A passionate Software Engineering undergraduate with hands-on experience in full-stack development, building scalable, user-focused solutions with modern technologies."
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                            lineNumber: 120,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "chip-row",
                            children: stack.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                    className: "chip",
                                    ref: (el)=>{
                                        if (el && Array.isArray(chipsRef.current)) chipsRef.current.push(el);
                                    },
                                    children: item
                                }, item, false, {
                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                    lineNumber: 127,
                                    columnNumber: 15
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                            lineNumber: 125,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-cta-group",
                            ref: ctaRef,
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#projects",
                                    className: "hero-cta primary",
                                    children: [
                                        "View Work",
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
                                            width: "14",
                                            height: "14",
                                            viewBox: "0 0 24 24",
                                            fill: "none",
                                            stroke: "currentColor",
                                            strokeWidth: "2.5",
                                            strokeLinecap: "round",
                                            strokeLinejoin: "round",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("line", {
                                                    x1: "5",
                                                    y1: "12",
                                                    x2: "19",
                                                    y2: "12"
                                                }, void 0, false, {
                                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                                    lineNumber: 139,
                                                    columnNumber: 17
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("polyline", {
                                                    points: "12 5 19 12 12 19"
                                                }, void 0, false, {
                                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                                    lineNumber: 140,
                                                    columnNumber: 17
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 138,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                    lineNumber: 136,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    href: "#contact",
                                    className: "hero-cta secondary",
                                    children: "Contact Me"
                                }, void 0, false, {
                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                    lineNumber: 143,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                            lineNumber: 135,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "terminal-card",
                            ref: terminalRef,
                            "aria-label": "Developer profile",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "terminal-head",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminal-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 150,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminal-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 151,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminal-dot"
                                        }, void 0, false, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 152,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                            children: "~/portfolio"
                                        }, void 0, false, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 153,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                    lineNumber: 149,
                                    columnNumber: 13
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "terminal-body",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminal-line",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "terminal-prompt",
                                                    children: "$ "
                                                }, void 0, false, {
                                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                                    lineNumber: 157,
                                                    columnNumber: 17
                                                }, this),
                                                "whoami"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 156,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminal-line",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "terminal-output",
                                                children: "> Chathura / React Developer"
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                                lineNumber: 160,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 159,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminal-line",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "terminal-prompt",
                                                    children: "$ "
                                                }, void 0, false, {
                                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                                    lineNumber: 163,
                                                    columnNumber: 17
                                                }, this),
                                                "status"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 162,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminal-line",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "terminal-output",
                                                children: "> Building performant UIs with animations and soul."
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                                lineNumber: 166,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 165,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminal-line",
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "terminal-prompt",
                                                    children: "$ "
                                                }, void 0, false, {
                                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                                    lineNumber: 169,
                                                    columnNumber: 17
                                                }, this),
                                                "now"
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 168,
                                            columnNumber: 15
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            className: "terminal-line",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "terminal-output",
                                                children: "> Open to freelance, startup, and product work."
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                                lineNumber: 172,
                                                columnNumber: 17
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                            lineNumber: 171,
                                            columnNumber: 15
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                    lineNumber: 155,
                                    columnNumber: 13
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                            lineNumber: 148,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                    lineNumber: 112,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "hero-visual",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-glow-ring"
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                            lineNumber: 179,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-glow-ring"
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                            lineNumber: 180,
                            columnNumber: 11
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "hero-photo-wrap",
                            ref: photoRef,
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                                className: "hero-photo",
                                src: __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$assets$2f$me$2e$webp$2e$mjs__$7b$__IMAGE__$3d3e$__$225b$project$5d2f$repo$2f$portfolio$2f$src$2f$assets$2f$me$2e$webp__$28$static__in__ecmascript$2c$__tag__client$2922$__$7d$__$5b$app$2d$client$5d$__$28$structured__image__object__with__data__url$2c$__ecmascript$29$__["default"],
                                alt: "Chathura"
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                                lineNumber: 182,
                                columnNumber: 13
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                            lineNumber: 181,
                            columnNumber: 11
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
                    lineNumber: 178,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
            lineNumber: 111,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/repo/portfolio/src/components/HeroSection.jsx",
        lineNumber: 110,
        columnNumber: 5
    }, this);
}
_s(HeroSection, "QyODZQeNVlCYFlSqKs7N4Pa4jFc=");
_c = HeroSection;
const __TURBOPACK__default__export__ = HeroSection;
var _c;
__turbopack_context__.k.register(_c, "HeroSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/repo/portfolio/src/components/AboutSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
const profile = {
    intro: 'I am a passionate Software Engineering undergraduate with hands-on experience in full-stack development, working with technologies such as React, Node.js, Java, C#, and ASP.NET. I have developed real-world applications including POS systems, event registration platforms, and management systems.',
    contact: [
        {
            label: 'Phone',
            value: '+94 769 929 298'
        },
        {
            label: 'Email',
            value: 'chathurapadmal3@gmail.com'
        },
        {
            label: 'Location',
            value: 'Bulathsinhala, Sri Lanka'
        },
        {
            label: 'LinkedIn',
            value: 'Chathura-Padmal'
        },
        {
            label: 'GitHub',
            value: 'ChathuraPadmal'
        }
    ],
    experience: [
        {
            title: 'FOSS Community Technical Team',
            period: '2025 - 2026'
        }
    ],
    activities: [
        {
            title: 'Senior Prefect, Sripalee College',
            period: '2022 - 2023'
        },
        {
            title: 'President, Photography Society',
            period: '2022 - 2023'
        },
        {
            title: 'Council Member, FOSS Community - NSBM',
            period: '2025 - 2026'
        },
        {
            title: 'Club Captain, FOSS Community - NSBM',
            period: '2026'
        }
    ],
    education: [
        {
            school: 'Sripalee College - Horana',
            lines: [
                '2020 Ordinary Level - Passed',
                '2023 Advanced Level - Passed'
            ]
        },
        {
            school: 'NSBM Green University',
            lines: [
                'BSc Hons. Software Engineering Undergraduate - 2024'
            ]
        },
        {
            school: 'IIT',
            lines: [
                'AI Course (3 Months) - 2025'
            ]
        }
    ],
    skills: [
        {
            name: 'Java',
            level: 84
        },
        {
            name: 'React',
            level: 78
        },
        {
            name: 'Figma',
            level: 92
        },
        {
            name: 'C#',
            level: 62
        },
        {
            name: 'PHP',
            level: 70
        }
    ],
    languages: [
        'Sinhala',
        'English'
    ],
    hobbies: [
        'Photography'
    ]
};
function AboutSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const metersRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animatedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "AboutSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const observer = new IntersectionObserver({
                "AboutSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting && !animatedRef.current) {
                        animatedRef.current = true;
                        const cards = cardsRef.current.filter(Boolean);
                        __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(cards, {
                            opacity: 0,
                            y: 40,
                            rotateX: 5
                        }, {
                            opacity: 1,
                            y: 0,
                            rotateX: 0,
                            duration: 0.6,
                            stagger: 0.15,
                            ease: 'power3.out'
                        });
                        const meters = metersRef.current.filter(Boolean);
                        if (meters.length > 0) {
                            __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(meters, {
                                width: 0
                            }, {
                                width: {
                                    "AboutSection.useEffect": (i)=>`${profile.skills[i].level}%`
                                }["AboutSection.useEffect"],
                                duration: 1,
                                stagger: 0.1,
                                ease: 'power3.out'
                            });
                        }
                        observer.disconnect();
                    }
                }
            }["AboutSection.useEffect"], {
                threshold: 0.15
            });
            observer.observe(section);
            return ({
                "AboutSection.useEffect": ()=>observer.disconnect()
            })["AboutSection.useEffect"];
        }
    }["AboutSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "snap-section",
        id: "about",
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sec-label",
                children: "Identity Matrix"
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                lineNumber: 98,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "sec-title",
                children: [
                    "About ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Me"
                    }, void 0, false, {
                        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                        lineNumber: 99,
                        columnNumber: 39
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "about-grid",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "about-card",
                        ref: (el)=>{
                            cardsRef.current[0] = el;
                        },
                        onMouseMove: (e)=>{
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = (e.clientX - rect.left) / rect.width - 0.5;
                            const y = (e.clientY - rect.top) / rect.height - 0.5;
                            e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "about-card-label",
                                children: "System Summary"
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "about-intro-text",
                                children: profile.intro
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 116,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about-contact-list",
                                children: profile.contact.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "about-contact-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: [
                                                    item.label,
                                                    ":"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                lineNumber: 120,
                                                columnNumber: 17
                                            }, this),
                                            " ",
                                            item.value
                                        ]
                                    }, item.label, true, {
                                        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                        lineNumber: 119,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 117,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                        lineNumber: 102,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "about-card",
                        ref: (el)=>{
                            cardsRef.current[1] = el;
                        },
                        onMouseMove: (e)=>{
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = (e.clientX - rect.left) / rect.width - 0.5;
                            const y = (e.clientY - rect.top) / rect.height - 0.5;
                            e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "about-card-label",
                                children: "Experience"
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 139,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "about-list",
                                children: profile.experience.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                lineNumber: 143,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.period
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                lineNumber: 144,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.title, true, {
                                        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                        lineNumber: 142,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 140,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "about-card-label",
                                style: {
                                    marginTop: '1rem'
                                },
                                children: "Activities"
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 148,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "about-list",
                                children: profile.activities.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: item.title
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                lineNumber: 152,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: item.period
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                lineNumber: 153,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, item.title, true, {
                                        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                        lineNumber: 151,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 149,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                        lineNumber: 126,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                        className: "about-card",
                        ref: (el)=>{
                            cardsRef.current[2] = el;
                        },
                        onMouseMove: (e)=>{
                            const rect = e.currentTarget.getBoundingClientRect();
                            const x = (e.clientX - rect.left) / rect.width - 0.5;
                            const y = (e.clientY - rect.top) / rect.height - 0.5;
                            e.currentTarget.style.transform = `perspective(600px) rotateY(${x * 4}deg) rotateX(${-y * 4}deg)`;
                        },
                        onMouseLeave: (e)=>{
                            e.currentTarget.style.transform = 'perspective(600px) rotateY(0deg) rotateX(0deg)';
                        },
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "about-card-label",
                                children: "Skills"
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 172,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about-skills",
                                children: profile.skills.map((skill, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "about-skill-item",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                children: skill.name
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                lineNumber: 176,
                                                columnNumber: 17
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "about-meter",
                                                role: "img",
                                                "aria-label": `${skill.name} level ${skill.level}%`,
                                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    ref: (el)=>{
                                                        metersRef.current[i] = el;
                                                    }
                                                }, void 0, false, {
                                                    fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                    lineNumber: 178,
                                                    columnNumber: 19
                                                }, this)
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                lineNumber: 177,
                                                columnNumber: 17
                                            }, this)
                                        ]
                                    }, skill.name, true, {
                                        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                        lineNumber: 175,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 173,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "about-card-label",
                                children: "Education"
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 184,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                                className: "about-education-list",
                                children: profile.education.map((item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                                children: item.school
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                lineNumber: 188,
                                                columnNumber: 17
                                            }, this),
                                            item.lines.map((line)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                    children: line
                                                }, line, false, {
                                                    fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                    lineNumber: 190,
                                                    columnNumber: 19
                                                }, this))
                                        ]
                                    }, item.school, true, {
                                        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                        lineNumber: 187,
                                        columnNumber: 15
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 185,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "about-meta-row",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Language:"
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                lineNumber: 197,
                                                columnNumber: 16
                                            }, this),
                                            " ",
                                            profile.languages.join(' • ')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                        lineNumber: 197,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Hobbies:"
                                            }, void 0, false, {
                                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                                lineNumber: 198,
                                                columnNumber: 16
                                            }, this),
                                            " ",
                                            profile.hobbies.join(' • ')
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                        lineNumber: 198,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                                lineNumber: 196,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                        lineNumber: 159,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
                lineNumber: 101,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/repo/portfolio/src/components/AboutSection.jsx",
        lineNumber: 97,
        columnNumber: 5
    }, this);
}
_s(AboutSection, "enDSKuIpHbo/j85AbEbVbxgD8HY=");
_c = AboutSection;
const __TURBOPACK__default__export__ = AboutSection;
var _c;
__turbopack_context__.k.register(_c, "AboutSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/repo/portfolio/src/components/ProjectsSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ProjectsSection({ isLoadingProjects, projectsError, githubProjects, githubProfile }) {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const cardsRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animatedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ProjectsSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section || isLoadingProjects || projectsError || githubProjects.length === 0) return;
            const observer = new IntersectionObserver({
                "ProjectsSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting && !animatedRef.current) {
                        animatedRef.current = true;
                        const cards = cardsRef.current.filter(Boolean);
                        __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(cards, {
                            opacity: 0,
                            y: 30,
                            scale: 0.95
                        }, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.5,
                            stagger: 0.1,
                            ease: 'power3.out'
                        });
                        observer.disconnect();
                    }
                }
            }["ProjectsSection.useEffect"], {
                threshold: 0.1
            });
            observer.observe(section);
            return ({
                "ProjectsSection.useEffect": ()=>observer.disconnect()
            })["ProjectsSection.useEffect"];
        }
    }["ProjectsSection.useEffect"], [
        isLoadingProjects,
        projectsError,
        githubProjects
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "snap-section",
        id: "projects",
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sec-label",
                children: "Selected Build Logs"
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "sec-title",
                children: [
                    "Featured ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Projects"
                    }, void 0, false, {
                        fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                        lineNumber: 47,
                        columnNumber: 42
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                lineNumber: 47,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "project-grid",
                children: [
                    isLoadingProjects && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "project-status",
                        children: "Loading GitHub projects..."
                    }, void 0, false, {
                        fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                        lineNumber: 51,
                        columnNumber: 11
                    }, this),
                    !isLoadingProjects && projectsError && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "project-status",
                        children: projectsError
                    }, void 0, false, {
                        fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                        lineNumber: 55,
                        columnNumber: 11
                    }, this),
                    !isLoadingProjects && !projectsError && githubProjects.length === 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                        className: "project-status",
                        children: [
                            "No public repositories found for ",
                            githubProfile,
                            "."
                        ]
                    }, void 0, true, {
                        fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                        lineNumber: 59,
                        columnNumber: 11
                    }, this),
                    !isLoadingProjects && !projectsError && githubProjects.map((project, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("article", {
                            className: "project-card",
                            ref: (el)=>{
                                cardsRef.current[index] = el;
                            },
                            onMouseMove: (e)=>{
                                const rect = e.currentTarget.getBoundingClientRect();
                                const x = (e.clientX - rect.left) / rect.width - 0.5;
                                const y = (e.clientY - rect.top) / rect.height - 0.5;
                                e.currentTarget.style.transform = `perspective(800px) rotateY(${x * 6}deg) rotateX(${-y * 6}deg)`;
                            },
                            onMouseLeave: (e)=>{
                                e.currentTarget.style.transform = 'perspective(800px) rotateY(0deg) rotateX(0deg)';
                            },
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "project-index",
                                    children: [
                                        "0",
                                        index + 1
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                                    lineNumber: 78,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                    children: project.name
                                }, void 0, false, {
                                    fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                                    lineNumber: 79,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    children: project.description || 'No description added yet for this repository.'
                                }, void 0, false, {
                                    fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                                    lineNumber: 80,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "project-tech",
                                    children: [
                                        project.language || 'Code',
                                        " • ⭐ ",
                                        project.stargazers_count
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                                    lineNumber: 81,
                                    columnNumber: 15
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                                    className: "project-link",
                                    href: project.html_url,
                                    target: "_blank",
                                    rel: "noreferrer",
                                    children: "View on GitHub →"
                                }, void 0, false, {
                                    fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                                    lineNumber: 84,
                                    columnNumber: 15
                                }, this)
                            ]
                        }, project.id, true, {
                            fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                            lineNumber: 64,
                            columnNumber: 13
                        }, this))
                ]
            }, void 0, true, {
                fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
                lineNumber: 49,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/repo/portfolio/src/components/ProjectsSection.jsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
}
_s(ProjectsSection, "ZRO0S+SHQ8iREF0537APcOHT2hQ=");
_c = ProjectsSection;
const __TURBOPACK__default__export__ = ProjectsSection;
var _c;
__turbopack_context__.k.register(_c, "ProjectsSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/repo/portfolio/src/components/CommunitySection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function SocialAccountsBlock({ socials }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "community-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Social Accounts"
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                lineNumber: 9,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Connect with me beyond code"
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                lineNumber: 10,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "social-list",
                children: socials.map((social)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                        href: social.url,
                        target: "_blank",
                        rel: "noreferrer",
                        className: "social-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: social.platform
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                                lineNumber: 20,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: social.handle
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                                lineNumber: 21,
                                columnNumber: 13
                            }, this)
                        ]
                    }, social.platform, true, {
                        fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                        lineNumber: 13,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                lineNumber: 11,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
        lineNumber: 8,
        columnNumber: 5
    }, this);
}
_c = SocialAccountsBlock;
function EventsBlock({ events }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "community-block",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                children: "Events"
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                lineNumber: 32,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                children: "Community involvement and meetups"
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                lineNumber: 33,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "event-list",
                children: events.map((event)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "event-item",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                children: event.name
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                                lineNumber: 37,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: event.description
                            }, void 0, false, {
                                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                                lineNumber: 38,
                                columnNumber: 13
                            }, this)
                        ]
                    }, event.name, true, {
                        fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                        lineNumber: 36,
                        columnNumber: 11
                    }, this))
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                lineNumber: 34,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
        lineNumber: 31,
        columnNumber: 5
    }, this);
}
_c1 = EventsBlock;
function CommunitySection({ socials, events }) {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const blocksRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])([]);
    const animatedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CommunitySection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const observer = new IntersectionObserver({
                "CommunitySection.useEffect": ([entry])=>{
                    if (entry.isIntersecting && !animatedRef.current) {
                        animatedRef.current = true;
                        const blocks = blocksRef.current.filter(Boolean);
                        __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(blocks, {
                            opacity: 0,
                            x: -30
                        }, {
                            opacity: 1,
                            x: 0,
                            duration: 0.5,
                            stagger: 0.15,
                            ease: 'power3.out'
                        });
                        observer.disconnect();
                    }
                }
            }["CommunitySection.useEffect"], {
                threshold: 0.15
            });
            observer.observe(section);
            return ({
                "CommunitySection.useEffect": ()=>observer.disconnect()
            })["CommunitySection.useEffect"];
        }
    }["CommunitySection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "snap-section",
        id: "community",
        ref: sectionRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "sec-label",
                children: "Beyond Projects"
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "sec-title",
                children: [
                    "Community & ",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        children: "Socials"
                    }, void 0, false, {
                        fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                        lineNumber: 80,
                        columnNumber: 45
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                lineNumber: 80,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "community-layout",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            blocksRef.current[0] = el;
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SocialAccountsBlock, {
                            socials: socials
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                            lineNumber: 84,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        ref: (el)=>{
                            blocksRef.current[1] = el;
                        },
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(EventsBlock, {
                            events: events
                        }, void 0, false, {
                            fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                            lineNumber: 87,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                        lineNumber: 86,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
                lineNumber: 82,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/repo/portfolio/src/components/CommunitySection.jsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(CommunitySection, "Mghw0FbwuaMC5tNkhxBX9h3I+4U=");
_c2 = CommunitySection;
const __TURBOPACK__default__export__ = CommunitySection;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SocialAccountsBlock");
__turbopack_context__.k.register(_c1, "EventsBlock");
__turbopack_context__.k.register(_c2, "CommunitySection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/repo/portfolio/src/components/ContactSection.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function ContactSection() {
    _s();
    const sectionRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const boxRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const animatedRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ContactSection.useEffect": ()=>{
            const section = sectionRef.current;
            if (!section) return;
            const observer = new IntersectionObserver({
                "ContactSection.useEffect": ([entry])=>{
                    if (entry.isIntersecting && !animatedRef.current) {
                        animatedRef.current = true;
                        __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].fromTo(boxRef.current, {
                            opacity: 0,
                            y: 40,
                            scale: 0.95
                        }, {
                            opacity: 1,
                            y: 0,
                            scale: 1,
                            duration: 0.7,
                            ease: 'power3.out'
                        });
                        observer.disconnect();
                    }
                }
            }["ContactSection.useEffect"], {
                threshold: 0.2
            });
            observer.observe(section);
            return ({
                "ContactSection.useEffect": ()=>observer.disconnect()
            })["ContactSection.useEffect"];
        }
    }["ContactSection.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "snap-section",
        id: "contact",
        ref: sectionRef,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "contact-box",
            ref: boxRef,
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "sec-label",
                    children: "Ready to Collaborate?"
                }, void 0, false, {
                    fileName: "[project]/repo/portfolio/src/components/ContactSection.jsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    children: "Let's build your next big thing."
                }, void 0, false, {
                    fileName: "[project]/repo/portfolio/src/components/ContactSection.jsx",
                    lineNumber: 40,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    children: "I'm currently open to freelance, startup, and product work."
                }, void 0, false, {
                    fileName: "[project]/repo/portfolio/src/components/ContactSection.jsx",
                    lineNumber: 41,
                    columnNumber: 9
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("a", {
                    href: "mailto:chathurapadmal3@gmail.com",
                    className: "contact-link",
                    children: "chathurapadmal3@gmail.com"
                }, void 0, false, {
                    fileName: "[project]/repo/portfolio/src/components/ContactSection.jsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/repo/portfolio/src/components/ContactSection.jsx",
            lineNumber: 38,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/repo/portfolio/src/components/ContactSection.jsx",
        lineNumber: 37,
        columnNumber: 5
    }, this);
}
_s(ContactSection, "2tP/jsW0hpRb16RrhywBZmuVLjE=");
_c = ContactSection;
const __TURBOPACK__default__export__ = ContactSection;
var _c;
__turbopack_context__.k.register(_c, "ContactSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/repo/portfolio/src/components/Footer.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Footer() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("footer", {
        className: "footer",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
            children: "© 2026 Chathura. Built with React + GSAP + 3D Vibes."
        }, void 0, false, {
            fileName: "[project]/repo/portfolio/src/components/Footer.jsx",
            lineNumber: 4,
            columnNumber: 7
        }, this)
    }, void 0, false, {
        fileName: "[project]/repo/portfolio/src/components/Footer.jsx",
        lineNumber: 3,
        columnNumber: 5
    }, this);
}
_c = Footer;
const __TURBOPACK__default__export__ = Footer;
var _c;
__turbopack_context__.k.register(_c, "Footer");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/repo/portfolio/src/App.jsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/repo/portfolio/node_modules/gsap/index.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$BackgroundDecor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/src/components/BackgroundDecor.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/src/components/TopBar.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/src/components/HeroSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$AboutSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/src/components/AboutSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$ProjectsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/src/components/ProjectsSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$CommunitySection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/src/components/CommunitySection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$ContactSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/src/components/ContactSection.jsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/repo/portfolio/src/components/Footer.jsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
;
;
;
;
;
const GITHUB_PROFILE = 'chathurapadmal';
const stack = [
    'React',
    'TypeScript',
    'Node.js',
    'Next.js',
    'Figma',
    'SQL',
    'C#',
    'Java'
];
const socialAccounts = [
    {
        platform: 'Facebook',
        handle: 'chathura padmal',
        url: 'https://www.facebook.com/chathura.padmal'
    },
    {
        platform: 'GitHub',
        handle: 'chathurapadmal',
        url: 'https://github.com/chathurapadmal'
    }
];
const events = [
    {
        name: 'Open Source Summit 2025',
        description: 'Presented contributor demos and collaborated with open-source maintainers.'
    },
    {
        name: 'Community Code Night 2024',
        description: 'Helped organize a local coding meetup focused on frontend best practices.'
    }
];
function App() {
    _s();
    const [githubProjects, setGithubProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoadingProjects, setIsLoadingProjects] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [projectsError, setProjectsError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])('');
    const shellRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            const controller = new AbortController();
            const fetchGithubProjects = {
                "App.useEffect.fetchGithubProjects": async ()=>{
                    setIsLoadingProjects(true);
                    setProjectsError('');
                    try {
                        const response = await fetch(`https://api.github.com/users/${encodeURIComponent(GITHUB_PROFILE)}/repos?sort=updated&per_page=6`, {
                            signal: controller.signal
                        });
                        if (!response.ok) throw new Error('Failed to load projects from GitHub.');
                        const repositories = await response.json();
                        if (!Array.isArray(repositories)) throw new Error('Unexpected response from GitHub.');
                        setGithubProjects(repositories);
                    } catch (error) {
                        if (error.name === 'AbortError') return;
                        setGithubProjects([]);
                        setProjectsError('Could not load projects. Check your username and try again.');
                    } finally{
                        setIsLoadingProjects(false);
                    }
                }
            }["App.useEffect.fetchGithubProjects"];
            fetchGithubProjects();
            return ({
                "App.useEffect": ()=>controller.abort()
            })["App.useEffect"];
        }
    }["App.useEffect"], []);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "App.useEffect": ()=>{
            __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to('.bg-glow-a', {
                y: -30,
                x: 20,
                duration: 4,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
            __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$gsap$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["gsap"].to('.bg-glow-b', {
                y: 30,
                x: -20,
                duration: 5,
                repeat: -1,
                yoyo: true,
                ease: 'sine.inOut'
            });
        }
    }["App.useEffect"], []);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "app-shell",
        ref: shellRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$BackgroundDecor$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/repo/portfolio/src/App.jsx",
                lineNumber: 99,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$TopBar$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/repo/portfolio/src/App.jsx",
                lineNumber: 100,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$HeroSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                stack: stack
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/App.jsx",
                lineNumber: 102,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$AboutSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/repo/portfolio/src/App.jsx",
                lineNumber: 104,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$ProjectsSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isLoadingProjects: isLoadingProjects,
                projectsError: projectsError,
                githubProjects: githubProjects,
                githubProfile: GITHUB_PROFILE
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/App.jsx",
                lineNumber: 106,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$CommunitySection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                socials: socialAccounts,
                events: events
            }, void 0, false, {
                fileName: "[project]/repo/portfolio/src/App.jsx",
                lineNumber: 113,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$ContactSection$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/repo/portfolio/src/App.jsx",
                lineNumber: 115,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$repo$2f$portfolio$2f$src$2f$components$2f$Footer$2e$jsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                fileName: "[project]/repo/portfolio/src/App.jsx",
                lineNumber: 116,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/repo/portfolio/src/App.jsx",
        lineNumber: 98,
        columnNumber: 5
    }, this);
}
_s(App, "kQV+ErVXtyj92IOIXunzi5l51LQ=");
_c = App;
const __TURBOPACK__default__export__ = App;
var _c;
__turbopack_context__.k.register(_c, "App");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/repo/portfolio/src/App.jsx [app-client] (ecmascript, next/dynamic entry)", ((__turbopack_context__) => {

__turbopack_context__.n(__turbopack_context__.i("[project]/repo/portfolio/src/App.jsx [app-client] (ecmascript)"));
}),
]);

//# sourceMappingURL=repo_portfolio_src_0y0-e0g._.js.map