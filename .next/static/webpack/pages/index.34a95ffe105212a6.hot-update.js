"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/index",{

/***/ "./threejs/ThreeApp.js":
/*!*****************************!*\
  !*** ./threejs/ThreeApp.js ***!
  \*****************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction BinaryNetworkSimulator() {\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var animation = // animation\n        function animation(time) {\n            mesh.rotation.x = time / 2000;\n            mesh.rotation.y = time / 1000;\n            renderer.render(scene, camera);\n        };\n        var camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 0.01, 10);\n        camera.position.z = 1;\n        var scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        var geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(0.2, 0.2, 0.2);\n        var material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshNormalMaterial();\n        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        scene.add(mesh);\n        var renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\n            antialias: true\n        });\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.setAnimationLoop(animation);\n        document.body.appendChild(renderer.domElement);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"/Users/dennishansen/development/sim/threejs/ThreeApp.js\",\n        lineNumber: 36,\n        columnNumber: 10\n    }, this));\n}\n_s(BinaryNetworkSimulator, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c = BinaryNetworkSimulator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BinaryNetworkSimulator);\nvar _c;\n$RefreshReg$(_c, \"BinaryNetworkSimulator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aHJlZWpzL1RocmVlQXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBQ2xCOztTQUVyQkksc0JBQXNCLEdBQUcsQ0FBQzs7SUFDakMsR0FBSyxDQUFDQyxTQUFTLEdBQUdKLDZDQUFNLENBQUMsSUFBSTtJQUU3QkMsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7WUFtQk5JLFNBQVMsR0FGbEIsRUFBWTtRQUVaLFFBQVEsQ0FBQ0EsU0FBUyxDQUFFQyxJQUFJLEVBQUcsQ0FBQztZQUUxQkMsSUFBSSxDQUFDQyxRQUFRLENBQUNDLENBQUMsR0FBR0gsSUFBSSxHQUFHLElBQUk7WUFDN0JDLElBQUksQ0FBQ0MsUUFBUSxDQUFDRSxDQUFDLEdBQUdKLElBQUksR0FBRyxJQUFJO1lBRTdCSyxRQUFRLENBQUNDLE1BQU0sQ0FBRUMsS0FBSyxFQUFFQyxNQUFNO1FBRWhDLENBQUM7UUF6QkQsR0FBSyxDQUFDQSxNQUFNLEdBQUcsR0FBRyxDQUFDWixvREFBdUIsQ0FBRSxFQUFFLEVBQUVjLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHRCxNQUFNLENBQUNFLFdBQVcsRUFBRSxJQUFJLEVBQUUsRUFBRTtRQUNoR0osTUFBTSxDQUFDSyxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO1FBRXJCLEdBQUssQ0FBQ1AsS0FBSyxHQUFHLEdBQUcsQ0FBQ1gsd0NBQVc7UUFFN0IsR0FBSyxDQUFDb0IsUUFBUSxHQUFHLEdBQUcsQ0FBQ3BCLDhDQUFpQixDQUFFLEdBQUcsRUFBRSxHQUFHLEVBQUUsR0FBRztRQUNyRCxHQUFLLENBQUNzQixRQUFRLEdBQUcsR0FBRyxDQUFDdEIscURBQXdCO1FBRTdDLEdBQUssQ0FBQ0ssSUFBSSxHQUFHLEdBQUcsQ0FBQ0wsdUNBQVUsQ0FBRW9CLFFBQVEsRUFBRUUsUUFBUTtRQUMvQ1gsS0FBSyxDQUFDYyxHQUFHLENBQUVwQixJQUFJO1FBRWYsR0FBSyxDQUFDSSxRQUFRLEdBQUcsR0FBRyxDQUFDVCxnREFBbUIsQ0FBRSxDQUFDO1lBQUMyQixTQUFTLEVBQUUsSUFBSTtRQUFDLENBQUM7UUFDN0RsQixRQUFRLENBQUNtQixPQUFPLENBQUVkLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFRCxNQUFNLENBQUNFLFdBQVc7UUFDdkRQLFFBQVEsQ0FBQ29CLGdCQUFnQixDQUFFMUIsU0FBUztRQUNwQzJCLFFBQVEsQ0FBQ0MsSUFBSSxDQUFDQyxXQUFXLENBQUV2QixRQUFRLENBQUN3QixVQUFVO0lBWWhELENBQUMsRUFBRSxDQUFDLENBQUM7SUFFTCxNQUFNLDZFQUFFQyxDQUFNO1FBQUNDLEdBQUcsRUFBRWpDLFNBQVM7Ozs7OztBQUMvQixDQUFDO0dBakNRRCxzQkFBc0I7S0FBdEJBLHNCQUFzQjtBQW1DL0IsK0RBQWVBLHNCQUFzQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3RocmVlanMvVGhyZWVBcHAuanM/N2Y3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuXG5mdW5jdGlvbiBCaW5hcnlOZXR3b3JrU2ltdWxhdG9yKCkge1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoIDcwLCB3aW5kb3cuaW5uZXJXaWR0aCAvIHdpbmRvdy5pbm5lckhlaWdodCwgMC4wMSwgMTAgKTtcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDE7XG4gICAgXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcbiAgICBcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5Cb3hHZW9tZXRyeSggMC4yLCAwLjIsIDAuMiApO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hOb3JtYWxNYXRlcmlhbCgpO1xuICAgIFxuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaCggZ2VvbWV0cnksIG1hdGVyaWFsICk7XG4gICAgc2NlbmUuYWRkKCBtZXNoICk7XG4gICAgXG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlciggeyBhbnRpYWxpYXM6IHRydWUgfSApO1xuICAgIHJlbmRlcmVyLnNldFNpemUoIHdpbmRvdy5pbm5lcldpZHRoLCB3aW5kb3cuaW5uZXJIZWlnaHQgKTtcbiAgICByZW5kZXJlci5zZXRBbmltYXRpb25Mb29wKCBhbmltYXRpb24gKTtcbiAgICBkb2N1bWVudC5ib2R5LmFwcGVuZENoaWxkKCByZW5kZXJlci5kb21FbGVtZW50ICk7XG4gICAgXG4gICAgLy8gYW5pbWF0aW9uXG4gICAgXG4gICAgZnVuY3Rpb24gYW5pbWF0aW9uKCB0aW1lICkge1xuICAgIFxuICAgICAgbWVzaC5yb3RhdGlvbi54ID0gdGltZSAvIDIwMDA7XG4gICAgICBtZXNoLnJvdGF0aW9uLnkgPSB0aW1lIC8gMTAwMDtcbiAgICBcbiAgICAgIHJlbmRlcmVyLnJlbmRlciggc2NlbmUsIGNhbWVyYSApO1xuICAgIFxuICAgIH1cbiAgfSwgW10pO1xuXG4gIHJldHVybiA8Y2FudmFzIHJlZj17Y2FudmFzUmVmfSAvPjtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluYXJ5TmV0d29ya1NpbXVsYXRvcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsIlRIUkVFIiwiQmluYXJ5TmV0d29ya1NpbXVsYXRvciIsImNhbnZhc1JlZiIsImFuaW1hdGlvbiIsInRpbWUiLCJtZXNoIiwicm90YXRpb24iLCJ4IiwieSIsInJlbmRlcmVyIiwicmVuZGVyIiwic2NlbmUiLCJjYW1lcmEiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInBvc2l0aW9uIiwieiIsIlNjZW5lIiwiZ2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsIm1hdGVyaWFsIiwiTWVzaE5vcm1hbE1hdGVyaWFsIiwiTWVzaCIsImFkZCIsIldlYkdMUmVuZGVyZXIiLCJhbnRpYWxpYXMiLCJzZXRTaXplIiwic2V0QW5pbWF0aW9uTG9vcCIsImRvY3VtZW50IiwiYm9keSIsImFwcGVuZENoaWxkIiwiZG9tRWxlbWVudCIsImNhbnZhcyIsInJlZiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./threejs/ThreeApp.js\n");

/***/ })

});