"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/restaurant/menu/[id]",{

/***/ "./src/components/AddToCart.tsx":
/*!**************************************!*\
  !*** ./src/components/AddToCart.tsx ***!
  \**************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ AddToCart; },\n/* harmony export */   getCartId: function() { return /* binding */ getCartId; },\n/* harmony export */   postCartProdut: function() { return /* binding */ postCartProdut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Menu.module.css */ \"./src/styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n\nvar _s = $RefreshSig$();\n\n\n\nasync function postCartProdut(props) {\n    const res = await fetch(\"http://localhost:3000/api/user/cart/product/0\", {\n        method: \"POST\",\n        body: JSON.stringify({\n            productId: props.productId,\n            cartId: props.cartId,\n            restaurantId: props.restaurantId\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (res.ok) {\n        const data = await res.json();\n        alert(JSON.stringify(data));\n    }\n}\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    const userData = await res.json();\n    return Number(userData.cart.id);\n}\nfunction AddToCart(props) {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default().action),\n        onClick: async ()=>{\n            if (session && session.user) {\n                const productId = props.product.id;\n                const restaurantId = props.restaurantId;\n                const cartId = Number(await getCartId(String(session.user.email)));\n                if (confirm(\"Adicionar produto ao carrinho?\")) {\n                    postCartProdut({\n                        cartId: cartId,\n                        productId: productId,\n                        restaurantId: restaurantId\n                    });\n                }\n            } else {\n                alert(\"Fa\\xe7a login para acessar adicionar produtos ao carrinho!\");\n                router.push(\"/api/auth/signin\");\n            }\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"img\", {\n            src: \"/images/icons/cart.png\",\n            alt: \"add_to_cart\",\n            className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_3___default().action_icon)\n        }, void 0, false, {\n            fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/AddToCart.tsx\",\n            lineNumber: 65,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/AddToCart.tsx\",\n        lineNumber: 45,\n        columnNumber: 5\n    }, this);\n}\n_s(AddToCart, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = AddToCart;\nvar _c;\n$RefreshReg$(_c, \"AddToCart\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9BZGRUb0NhcnQudHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFFRDtBQUNMO0FBS2pDLGVBQWVHLGVBQWVDLEtBSXBDO0lBQ0MsTUFBTUMsTUFBTSxNQUFNQyxNQUFPLGlEQUFnRDtRQUN2RUMsUUFBUTtRQUNSQyxNQUFNQyxLQUFLQyxTQUFTLENBQUM7WUFDbkJDLFdBQVdQLE1BQU1PLFNBQVM7WUFDMUJDLFFBQVFSLE1BQU1RLE1BQU07WUFDcEJDLGNBQWNULE1BQU1TLFlBQVk7UUFDbEM7UUFDQUMsU0FBUztZQUFFLGdCQUFnQjtRQUFtQjtJQUNoRDtJQUVBLElBQUlULElBQUlVLEVBQUUsRUFBRTtRQUNWLE1BQU1DLE9BQU8sTUFBTVgsSUFBSVksSUFBSTtRQUMzQkMsTUFBTVQsS0FBS0MsU0FBUyxDQUFDTTtJQUN2QjtBQUNGO0FBRU8sZUFBZUcsVUFBVUMsU0FBaUI7SUFDL0MsTUFBTWYsTUFBTSxNQUFNQyxNQUFNLGtDQUE0QyxPQUFWYyxZQUFhO1FBQ3JFYixRQUFRO0lBQ1Y7SUFDQSxNQUFNYyxXQUFXLE1BQU1oQixJQUFJWSxJQUFJO0lBQy9CLE9BQU9LLE9BQU9ELFNBQVNFLElBQUksQ0FBQ0MsRUFBRTtBQUNoQztBQUNlLFNBQVNDLFVBQVVyQixLQUdqQzs7SUFDQyxNQUFNLEVBQUVZLE1BQU1VLE9BQU8sRUFBRSxHQUFHekIsMkRBQVVBO0lBQ3BDLE1BQU0wQixTQUFTekIsc0RBQVNBO0lBRXhCLHFCQUNFLDhEQUFDMEI7UUFDQ0MsV0FBVzdCLHVFQUFhO1FBQ3hCK0IsU0FBUztZQUNQLElBQUlMLFdBQVdBLFFBQVFNLElBQUksRUFBRTtnQkFDM0IsTUFBTXJCLFlBQVlQLE1BQU02QixPQUFPLENBQUNULEVBQUU7Z0JBQ2xDLE1BQU1YLGVBQWVULE1BQU1TLFlBQVk7Z0JBQ3ZDLE1BQU1ELFNBQVNVLE9BQU8sTUFBTUgsVUFBVWUsT0FBT1IsUUFBUU0sSUFBSSxDQUFDRyxLQUFLO2dCQUMvRCxJQUFJQyxRQUFRLG1DQUFtQztvQkFDN0NqQyxlQUFlO3dCQUNiUyxRQUFRQTt3QkFDUkQsV0FBV0E7d0JBQ1hFLGNBQWNBO29CQUNoQjtnQkFDRjtZQUNGLE9BQU87Z0JBQ0xLLE1BQU07Z0JBQ05TLE9BQU9VLElBQUksQ0FBRTtZQUNmO1FBQ0Y7a0JBRUEsNEVBQUNDO1lBQ0NDLEtBQUk7WUFDSkMsS0FBSTtZQUNKWCxXQUFXN0IsNEVBQWtCOzs7Ozs7Ozs7OztBQUlyQztHQW5Dd0J5Qjs7UUFJSXhCLHVEQUFVQTtRQUNyQkMsa0RBQVNBOzs7S0FMRnVCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL0FkZFRvQ2FydC50c3g/MzM2ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9NZW51Lm1vZHVsZS5jc3NcIjtcbmltcG9ydCB7IFByb2R1Y3QgfSBmcm9tIFwiQC90eXBlcy90eXBlc1wiO1xuaW1wb3J0IHsgdXNlU2Vzc2lvbiB9IGZyb20gXCJuZXh0LWF1dGgvcmVhY3RcIjtcbmltcG9ydCB7IHVzZVJvdXRlciB9IGZyb20gXCJuZXh0L3JvdXRlclwiO1xuXG5pbXBvcnQgSW1hZ2UgZnJvbSBcIm5leHQvaW1hZ2VcIjtcbmltcG9ydCBjYXJyaW5obyBmcm9tIFwiL3B1YmxpYy9pbWFnZXMvY2FycmluaG8ucG5nXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBwb3N0Q2FydFByb2R1dChwcm9wczoge1xuICBwcm9kdWN0SWQ6IG51bWJlcjtcbiAgY2FydElkOiBudW1iZXI7XG4gIHJlc3RhdXJhbnRJZDogbnVtYmVyO1xufSkge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyL2NhcnQvcHJvZHVjdC8wYCwge1xuICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgYm9keTogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgcHJvZHVjdElkOiBwcm9wcy5wcm9kdWN0SWQsXG4gICAgICBjYXJ0SWQ6IHByb3BzLmNhcnRJZCxcbiAgICAgIHJlc3RhdXJhbnRJZDogcHJvcHMucmVzdGF1cmFudElkLFxuICAgIH0pLFxuICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgfSk7XG5cbiAgaWYgKHJlcy5vaykge1xuICAgIGNvbnN0IGRhdGEgPSBhd2FpdCByZXMuanNvbigpO1xuICAgIGFsZXJ0KEpTT04uc3RyaW5naWZ5KGRhdGEpKTtcbiAgfVxufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZ2V0Q2FydElkKHVzZXJFbWFpbDogc3RyaW5nKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKGBodHRwOi8vbG9jYWxob3N0OjMwMDAvYXBpL3VzZXIvJHt1c2VyRW1haWx9YCwge1xuICAgIG1ldGhvZDogXCJHRVRcIixcbiAgfSk7XG4gIGNvbnN0IHVzZXJEYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgcmV0dXJuIE51bWJlcih1c2VyRGF0YS5jYXJ0LmlkKTtcbn1cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEFkZFRvQ2FydChwcm9wczoge1xuICBwcm9kdWN0OiBQcm9kdWN0O1xuICByZXN0YXVyYW50SWQ6IG51bWJlcjtcbn0pIHtcbiAgY29uc3QgeyBkYXRhOiBzZXNzaW9uIH0gPSB1c2VTZXNzaW9uKCk7XG4gIGNvbnN0IHJvdXRlciA9IHVzZVJvdXRlcigpO1xuXG4gIHJldHVybiAoXG4gICAgPGJ1dHRvblxuICAgICAgY2xhc3NOYW1lPXtzdHlsZXMuYWN0aW9ufVxuICAgICAgb25DbGljaz17YXN5bmMgKCkgPT4ge1xuICAgICAgICBpZiAoc2Vzc2lvbiAmJiBzZXNzaW9uLnVzZXIpIHtcbiAgICAgICAgICBjb25zdCBwcm9kdWN0SWQgPSBwcm9wcy5wcm9kdWN0LmlkO1xuICAgICAgICAgIGNvbnN0IHJlc3RhdXJhbnRJZCA9IHByb3BzLnJlc3RhdXJhbnRJZDtcbiAgICAgICAgICBjb25zdCBjYXJ0SWQgPSBOdW1iZXIoYXdhaXQgZ2V0Q2FydElkKFN0cmluZyhzZXNzaW9uLnVzZXIuZW1haWwpKSk7XG4gICAgICAgICAgaWYgKGNvbmZpcm0oXCJBZGljaW9uYXIgcHJvZHV0byBhbyBjYXJyaW5obz9cIikpIHtcbiAgICAgICAgICAgIHBvc3RDYXJ0UHJvZHV0KHtcbiAgICAgICAgICAgICAgY2FydElkOiBjYXJ0SWQsXG4gICAgICAgICAgICAgIHByb2R1Y3RJZDogcHJvZHVjdElkLFxuICAgICAgICAgICAgICByZXN0YXVyYW50SWQ6IHJlc3RhdXJhbnRJZCxcbiAgICAgICAgICAgIH0pO1xuICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBhbGVydChcIkZhw6dhIGxvZ2luIHBhcmEgYWNlc3NhciBhZGljaW9uYXIgcHJvZHV0b3MgYW8gY2FycmluaG8hXCIpO1xuICAgICAgICAgIHJvdXRlci5wdXNoKGAvYXBpL2F1dGgvc2lnbmluYCk7XG4gICAgICAgIH1cbiAgICAgIH19XG4gICAgPlxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCIvaW1hZ2VzL2ljb25zL2NhcnQucG5nXCJcbiAgICAgICAgYWx0PVwiYWRkX3RvX2NhcnRcIlxuICAgICAgICBjbGFzc05hbWU9e3N0eWxlcy5hY3Rpb25faWNvbn1cbiAgICAgIC8+XG4gICAgPC9idXR0b24+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsInBvc3RDYXJ0UHJvZHV0IiwicHJvcHMiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvZHVjdElkIiwiY2FydElkIiwicmVzdGF1cmFudElkIiwiaGVhZGVycyIsIm9rIiwiZGF0YSIsImpzb24iLCJhbGVydCIsImdldENhcnRJZCIsInVzZXJFbWFpbCIsInVzZXJEYXRhIiwiTnVtYmVyIiwiY2FydCIsImlkIiwiQWRkVG9DYXJ0Iiwic2Vzc2lvbiIsInJvdXRlciIsImJ1dHRvbiIsImNsYXNzTmFtZSIsImFjdGlvbiIsIm9uQ2xpY2siLCJ1c2VyIiwicHJvZHVjdCIsIlN0cmluZyIsImVtYWlsIiwiY29uZmlybSIsInB1c2giLCJpbWciLCJzcmMiLCJhbHQiLCJhY3Rpb25faWNvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/components/AddToCart.tsx\n"));

/***/ }),

/***/ "./src/components/ShowProduct.tsx":
/*!****************************************!*\
  !*** ./src/components/ShowProduct.tsx ***!
  \****************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ShowProduct; },\n/* harmony export */   getCartId: function() { return /* binding */ getCartId; },\n/* harmony export */   postCartProdut: function() { return /* binding */ postCartProdut; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @/styles/Menu.module.css */ \"./src/styles/Menu.module.css\");\n/* harmony import */ var _styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next-auth/react */ \"./node_modules/next-auth/react/index.js\");\n/* harmony import */ var next_auth_react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_auth_react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/router */ \"./node_modules/next/router.js\");\n/* harmony import */ var next_router__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_router__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _components_AddToCart__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AddToCart */ \"./src/components/AddToCart.tsx\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nasync function postCartProdut(props) {\n    const res = await fetch(\"http://localhost:3000/api/user/cart/product/0\", {\n        method: \"POST\",\n        body: JSON.stringify({\n            productId: props.productId,\n            cartId: props.cartId,\n            restaurantId: props.restaurantId\n        }),\n        headers: {\n            \"Content-Type\": \"application/json\"\n        }\n    });\n    if (res.ok) {\n        const data = await res.json();\n        alert(JSON.stringify(data));\n    }\n}\nasync function getCartId(userEmail) {\n    const res = await fetch(\"http://localhost:3000/api/user/\".concat(userEmail), {\n        method: \"GET\"\n    });\n    const userData = await res.json();\n    return Number(userData.cart.id);\n}\nfunction ShowProduct(props) {\n    _s();\n    const { data: session } = (0,next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession)();\n    const router = (0,next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter)();\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().tabela),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().ul),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().li),\n                        children: props.product.name\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 49,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().li2),\n                        children: [\n                            props.product.ingredients,\n                            \" \"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 50,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 48,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"ul\", {\n                className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().ul),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().li),\n                        children: \"Valor\"\n                    }, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 53,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"li\", {\n                        className: (_styles_Menu_module_css__WEBPACK_IMPORTED_MODULE_4___default().li2),\n                        children: [\n                            props.product.price.toFixed(2).replace(\",\", \".\"),\n                            \" R$\"\n                        ]\n                    }, void 0, true, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 54,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AddToCart__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                        lineNumber: 57,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/home/will/Documents/UnB/Disciplinas/4o SEMESTRE/Struct/ProjetoTraineeStruct/nextjs/src/components/ShowProduct.tsx\",\n        lineNumber: 47,\n        columnNumber: 5\n    }, this);\n}\n_s(ShowProduct, \"xwQvZTIDPY4aHyS8h9XgPdunGG8=\", false, function() {\n    return [\n        next_auth_react__WEBPACK_IMPORTED_MODULE_1__.useSession,\n        next_router__WEBPACK_IMPORTED_MODULE_2__.useRouter\n    ];\n});\n_c = ShowProduct;\nvar _c;\n$RefreshReg$(_c, \"ShowProduct\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvY29tcG9uZW50cy9TaG93UHJvZHVjdC50c3giLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBOEM7QUFFRDtBQUNMO0FBQ007QUFLdkMsZUFBZUksZUFBZUMsS0FJcEM7SUFDQyxNQUFNQyxNQUFNLE1BQU1DLE1BQU8saURBQWdEO1FBQ3ZFQyxRQUFRO1FBQ1JDLE1BQU1DLEtBQUtDLFNBQVMsQ0FBQztZQUNuQkMsV0FBV1AsTUFBTU8sU0FBUztZQUMxQkMsUUFBUVIsTUFBTVEsTUFBTTtZQUNwQkMsY0FBY1QsTUFBTVMsWUFBWTtRQUNsQztRQUNBQyxTQUFTO1lBQUUsZ0JBQWdCO1FBQW1CO0lBQ2hEO0lBRUEsSUFBSVQsSUFBSVUsRUFBRSxFQUFFO1FBQ1YsTUFBTUMsT0FBTyxNQUFNWCxJQUFJWSxJQUFJO1FBQzNCQyxNQUFNVCxLQUFLQyxTQUFTLENBQUNNO0lBQ3ZCO0FBQ0Y7QUFFTyxlQUFlRyxVQUFVQyxTQUFpQjtJQUMvQyxNQUFNZixNQUFNLE1BQU1DLE1BQU0sa0NBQTRDLE9BQVZjLFlBQWE7UUFDckViLFFBQVE7SUFDVjtJQUNBLE1BQU1jLFdBQVcsTUFBTWhCLElBQUlZLElBQUk7SUFDL0IsT0FBT0ssT0FBT0QsU0FBU0UsSUFBSSxDQUFDQyxFQUFFO0FBQ2hDO0FBRWUsU0FBU0MsWUFBWXJCLEtBR25DOztJQUNDLE1BQU0sRUFBRVksTUFBTVUsT0FBTyxFQUFFLEdBQUcxQiwyREFBVUE7SUFDcEMsTUFBTTJCLFNBQVMxQixzREFBU0E7SUFFeEIscUJBQ0UsOERBQUMyQjtRQUFJQyxXQUFXOUIsdUVBQWE7OzBCQUMzQiw4REFBQ2dDO2dCQUFHRixXQUFXOUIsbUVBQVM7O2tDQUN0Qiw4REFBQ2lDO3dCQUFHSCxXQUFXOUIsbUVBQVM7a0NBQUdLLE1BQU02QixPQUFPLENBQUNDLElBQUk7Ozs7OztrQ0FDN0MsOERBQUNGO3dCQUFHSCxXQUFXOUIsb0VBQVU7OzRCQUFHSyxNQUFNNkIsT0FBTyxDQUFDRyxXQUFXOzRCQUFDOzs7Ozs7Ozs7Ozs7OzBCQUV4RCw4REFBQ0w7Z0JBQUdGLFdBQVc5QixtRUFBUzs7a0NBQ3RCLDhEQUFDaUM7d0JBQUdILFdBQVc5QixtRUFBUztrQ0FBRTs7Ozs7O2tDQUMxQiw4REFBQ2lDO3dCQUFHSCxXQUFXOUIsb0VBQVU7OzRCQUN0QkssTUFBTTZCLE9BQU8sQ0FBQ0ksS0FBSyxDQUFDQyxPQUFPLENBQUMsR0FBR0MsT0FBTyxDQUFDLEtBQUs7NEJBQUs7Ozs7Ozs7a0NBRXBELDhEQUFDckMsNkRBQVNBOzs7Ozs7Ozs7Ozs7Ozs7OztBQUlsQjtHQXRCd0J1Qjs7UUFJSXpCLHVEQUFVQTtRQUNyQkMsa0RBQVNBOzs7S0FMRndCIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9jb21wb25lbnRzL1Nob3dQcm9kdWN0LnRzeD8xNzkzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL01lbnUubW9kdWxlLmNzc1wiO1xuaW1wb3J0IHsgUHJvZHVjdCB9IGZyb20gXCJAL3R5cGVzL3R5cGVzXCI7XG5pbXBvcnQgeyB1c2VTZXNzaW9uIH0gZnJvbSBcIm5leHQtYXV0aC9yZWFjdFwiO1xuaW1wb3J0IHsgdXNlUm91dGVyIH0gZnJvbSBcIm5leHQvcm91dGVyXCI7XG5pbXBvcnQgQWRkVG9DYXJ0IGZyb20gXCJAL2NvbXBvbmVudHMvQWRkVG9DYXJ0XCJcblxuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5pbXBvcnQgY2FycmluaG8gZnJvbSBcIi9wdWJsaWMvaW1hZ2VzL2NhcnJpbmhvLnBuZ1wiO1xuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcG9zdENhcnRQcm9kdXQocHJvcHM6IHtcbiAgcHJvZHVjdElkOiBudW1iZXI7XG4gIGNhcnRJZDogbnVtYmVyO1xuICByZXN0YXVyYW50SWQ6IG51bWJlcjtcbn0pIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goYGh0dHA6Ly9sb2NhbGhvc3Q6MzAwMC9hcGkvdXNlci9jYXJ0L3Byb2R1Y3QvMGAsIHtcbiAgICBtZXRob2Q6IFwiUE9TVFwiLFxuICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgIHByb2R1Y3RJZDogcHJvcHMucHJvZHVjdElkLFxuICAgICAgY2FydElkOiBwcm9wcy5jYXJ0SWQsXG4gICAgICByZXN0YXVyYW50SWQ6IHByb3BzLnJlc3RhdXJhbnRJZCxcbiAgICB9KSxcbiAgICBoZWFkZXJzOiB7IFwiQ29udGVudC1UeXBlXCI6IFwiYXBwbGljYXRpb24vanNvblwiIH0sXG4gIH0pO1xuXG4gIGlmIChyZXMub2spIHtcbiAgICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcbiAgICBhbGVydChKU09OLnN0cmluZ2lmeShkYXRhKSk7XG4gIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldENhcnRJZCh1c2VyRW1haWw6IHN0cmluZykge1xuICBjb25zdCByZXMgPSBhd2FpdCBmZXRjaChgaHR0cDovL2xvY2FsaG9zdDozMDAwL2FwaS91c2VyLyR7dXNlckVtYWlsfWAsIHtcbiAgICBtZXRob2Q6IFwiR0VUXCIsXG4gIH0pO1xuICBjb25zdCB1c2VyRGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG4gIHJldHVybiBOdW1iZXIodXNlckRhdGEuY2FydC5pZCk7XG59XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNob3dQcm9kdWN0KHByb3BzOiB7XG4gIHByb2R1Y3Q6IFByb2R1Y3Q7XG4gIHJlc3RhdXJhbnRJZDogbnVtYmVyO1xufSkge1xuICBjb25zdCB7IGRhdGE6IHNlc3Npb24gfSA9IHVzZVNlc3Npb24oKTtcbiAgY29uc3Qgcm91dGVyID0gdXNlUm91dGVyKCk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLnRhYmVsYX0+XG4gICAgICA8dWwgY2xhc3NOYW1lPXtzdHlsZXMudWx9PlxuICAgICAgICA8bGkgY2xhc3NOYW1lPXtzdHlsZXMubGl9Pntwcm9wcy5wcm9kdWN0Lm5hbWV9PC9saT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpMn0+e3Byb3BzLnByb2R1Y3QuaW5ncmVkaWVudHN9IDwvbGk+XG4gICAgICA8L3VsPlxuICAgICAgPHVsIGNsYXNzTmFtZT17c3R5bGVzLnVsfT5cbiAgICAgICAgPGxpIGNsYXNzTmFtZT17c3R5bGVzLmxpfT5WYWxvcjwvbGk+XG4gICAgICAgIDxsaSBjbGFzc05hbWU9e3N0eWxlcy5saTJ9PlxuICAgICAgICAgIHtwcm9wcy5wcm9kdWN0LnByaWNlLnRvRml4ZWQoMikucmVwbGFjZShcIixcIiwgXCIuXCIpfSBSJFxuICAgICAgICA8L2xpPlxuICAgICAgICA8QWRkVG9DYXJ0Lz5cbiAgICAgIDwvdWw+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsic3R5bGVzIiwidXNlU2Vzc2lvbiIsInVzZVJvdXRlciIsIkFkZFRvQ2FydCIsInBvc3RDYXJ0UHJvZHV0IiwicHJvcHMiLCJyZXMiLCJmZXRjaCIsIm1ldGhvZCIsImJvZHkiLCJKU09OIiwic3RyaW5naWZ5IiwicHJvZHVjdElkIiwiY2FydElkIiwicmVzdGF1cmFudElkIiwiaGVhZGVycyIsIm9rIiwiZGF0YSIsImpzb24iLCJhbGVydCIsImdldENhcnRJZCIsInVzZXJFbWFpbCIsInVzZXJEYXRhIiwiTnVtYmVyIiwiY2FydCIsImlkIiwiU2hvd1Byb2R1Y3QiLCJzZXNzaW9uIiwicm91dGVyIiwiZGl2IiwiY2xhc3NOYW1lIiwidGFiZWxhIiwidWwiLCJsaSIsInByb2R1Y3QiLCJuYW1lIiwibGkyIiwiaW5ncmVkaWVudHMiLCJwcmljZSIsInRvRml4ZWQiLCJyZXBsYWNlIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/components/ShowProduct.tsx\n"));

/***/ })

});