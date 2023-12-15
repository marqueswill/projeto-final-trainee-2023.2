"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/_app",{

/***/ "./src/components/Navbar.tsx":
/*!***********************************!*\
  !*** ./src/components/Navbar.tsx ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Navbar; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Navbar.module.css */ \"./src/styles/Navbar.module.css\");\n/* harmony import */ var _styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _NavbarLogin__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./NavbarLogin */ \"./src/components/NavbarLogin.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nfunction Navbar() {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"nav\", {\n        className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().nav_div),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo_div),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n                    src: \"/images/assets/logomark.png\",\n                    alt: \"fazgostoso\",\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().logo),\n                    onClick: ()=>{\n                        router.push(\"/\");\n                    }\n                }, void 0, false, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/Navbar.tsx\",\n                    lineNumber: 13,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/Navbar.tsx\",\n                lineNumber: 12,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().actions_div),\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                    className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().actions),\n                    children: [\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{},\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                            children: \"Sobre\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/Navbar.tsx\",\n                            lineNumber: 24,\n                            columnNumber: 11\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{},\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                            children: \"Contato\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/Navbar.tsx\",\n                            lineNumber: 28,\n                            columnNumber: 11\n                        }, this),\n                        session && session.user && session.user.i && /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                            onClick: ()=>{\n                                if (session && session.user) {\n                                    router.push(\"/user/menu/\".concat(session.user.id));\n                                } else {\n                                    alert(\"Fa\\xe7a login para acessar seu restaurante!\");\n                                    router.push(\"/login\");\n                                }\n                            },\n                            className: (_styles_Navbar_module_css__WEBPACK_IMPORTED_MODULE_4___default().button),\n                            children: \"Restaurante\"\n                        }, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/Navbar.tsx\",\n                            lineNumber: 32,\n                            columnNumber: 57\n                        }, this),\n                        /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_NavbarLogin__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/Navbar.tsx\",\n                            lineNumber: 46,\n                            columnNumber: 11\n                        }, this)\n                    ]\n                }, void 0, true, {\n                    fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/Navbar.tsx\",\n                    lineNumber: 23,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/Navbar.tsx\",\n                lineNumber: 22,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/Navbar.tsx\",\n        lineNumber: 11,\n        columnNumber: 5\n    }, this);\n}\n_s(Navbar, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = Navbar;\nvar _c;\n$RefreshReg$(_c, \"Navbar\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9OYXZiYXIudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUFnRDtBQUNIO0FBQ0w7QUFDQTtBQUV6QixTQUFTSTs7SUFDdEIsTUFBTSxFQUFFQyxNQUFNQyxPQUFPLEVBQUUsR0FBR0wsMkRBQVVBO0lBQ3BDLE1BQU1NLFNBQVNMLHNEQUFTQTtJQUV4QixxQkFDRSw4REFBQ007UUFBSUMsV0FBV1QsMEVBQWM7OzBCQUM1Qiw4REFBQ1c7Z0JBQUlGLFdBQVdULDJFQUFlOzBCQUM3Qiw0RUFBQ2E7b0JBQ0NDLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pOLFdBQVdULHVFQUFXO29CQUN0QmlCLFNBQVM7d0JBQ1BWLE9BQU9XLElBQUksQ0FBRTtvQkFDZjs7Ozs7Ozs7Ozs7MEJBR0osOERBQUNQO2dCQUFJRixXQUFXVCw4RUFBa0I7MEJBQ2hDLDRFQUFDVztvQkFBSUYsV0FBV1QsMEVBQWM7O3NDQUM1Qiw4REFBQ3FCOzRCQUFPSixTQUFTLEtBQU87NEJBQUdSLFdBQVdULHlFQUFhO3NDQUFFOzs7Ozs7c0NBSXJELDhEQUFDcUI7NEJBQU9KLFNBQVMsS0FBTzs0QkFBR1IsV0FBV1QseUVBQWE7c0NBQUU7Ozs7Ozt3QkFJbkRNLFdBQVdBLFFBQVFnQixJQUFJLElBQUdoQixRQUFRZ0IsSUFBSSxDQUFDQyxDQUFDLGtCQUFJLDhEQUFDRjs0QkFDN0NKLFNBQVM7Z0NBQ1AsSUFBSVgsV0FBV0EsUUFBUWdCLElBQUksRUFBRTtvQ0FDM0JmLE9BQU9XLElBQUksQ0FBQyxjQUE4QixPQUFoQlosUUFBUWdCLElBQUksQ0FBQ0UsRUFBRTtnQ0FDM0MsT0FBTztvQ0FDTEMsTUFBTTtvQ0FDTmxCLE9BQU9XLElBQUksQ0FBRTtnQ0FDZjs0QkFDRjs0QkFDQVQsV0FBV1QseUVBQWE7c0NBQ3pCOzs7Ozs7c0NBSUQsOERBQUNHLG9EQUFXQTs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUt0QjtHQTdDd0JDOztRQUNJSCx1REFBVUE7UUFDckJDLGtEQUFTQTs7O0tBRkZFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL05hdmJhci50c3g/OWE2ZCJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9OYXZiYXIubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuaW1wb3J0IE5hdmJhckxvZ2luIGZyb20gXCIuL05hdmJhckxvZ2luXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE5hdmJhcigpIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPG5hdiBjbGFzc05hbWU9e3N0eWxlcy5uYXZfZGl2fT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMubG9nb19kaXZ9PlxuICAgICAgICA8aW1nXG4gICAgICAgICAgc3JjPVwiL2ltYWdlcy9hc3NldHMvbG9nb21hcmsucG5nXCJcbiAgICAgICAgICBhbHQ9XCJmYXpnb3N0b3NvXCJcbiAgICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5sb2dvfVxuICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvYCk7XG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvZGl2PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25zX2Rpdn0+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9uc30+XG4gICAgICAgICAgPGJ1dHRvbiBvbkNsaWNrPXsoKSA9PiB7fX0gY2xhc3NOYW1lPXtzdHlsZXMuYnV0dG9ufT5cbiAgICAgICAgICAgIFNvYnJlXG4gICAgICAgICAgPC9idXR0b24+XG5cbiAgICAgICAgICA8YnV0dG9uIG9uQ2xpY2s9eygpID0+IHt9fSBjbGFzc05hbWU9e3N0eWxlcy5idXR0b259PlxuICAgICAgICAgICAgQ29udGF0b1xuICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgeyhzZXNzaW9uICYmIHNlc3Npb24udXNlciYmIHNlc3Npb24udXNlci5pKSAmJjxidXR0b25cbiAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgaWYgKHNlc3Npb24gJiYgc2Vzc2lvbi51c2VyKSB7XG4gICAgICAgICAgICAgICAgcm91dGVyLnB1c2goYC91c2VyL21lbnUvJHtzZXNzaW9uLnVzZXIuaWR9YCk7XG4gICAgICAgICAgICAgIH0gZWxzZSB7ICBcbiAgICAgICAgICAgICAgICBhbGVydChcIkZhw6dhIGxvZ2luIHBhcmEgYWNlc3NhciBzZXUgcmVzdGF1cmFudGUhXCIpO1xuICAgICAgICAgICAgICAgIHJvdXRlci5wdXNoKGAvbG9naW5gKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIGNsYXNzTmFtZT17c3R5bGVzLmJ1dHRvbn1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBSZXN0YXVyYW50ZVxuICAgICAgICAgIDwvYnV0dG9uPn1cblxuICAgICAgICAgIDxOYXZiYXJMb2dpbiAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvbmF2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInN0eWxlcyIsInVzZVNlc3Npb24iLCJ1c2VSb3V0ZXIiLCJOYXZiYXJMb2dpbiIsIk5hdmJhciIsImRhdGEiLCJzZXNzaW9uIiwicm91dGVyIiwibmF2IiwiY2xhc3NOYW1lIiwibmF2X2RpdiIsImRpdiIsImxvZ29fZGl2IiwiaW1nIiwic3JjIiwiYWx0IiwibG9nbyIsIm9uQ2xpY2siLCJwdXNoIiwiYWN0aW9uc19kaXYiLCJhY3Rpb25zIiwiYnV0dG9uIiwidXNlciIsImkiLCJpZCIsImFsZXJ0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/Navbar.tsx\n"));

/***/ })

});