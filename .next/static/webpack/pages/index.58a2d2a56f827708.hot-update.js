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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nvar _s = $RefreshSig$();\nfunction BinaryNetworkSimulator() {\n    _s();\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var animation = // animation\n        function animation(time) {\n            mesh.rotation.x = time / 2000;\n            mesh.rotation.y = time / 1000;\n            renderer.render(scene, camera);\n        };\n        var canvas = canvasRef.current;\n        var renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\n            canvas: canvas\n        });\n        renderer.setSize(window.innerWidth, window.innerHeight);\n        renderer.setClearColor(0, 1);\n        var camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        camera.position.z = 5;\n        var scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        var geometry = new three__WEBPACK_IMPORTED_MODULE_2__.BoxGeometry(1, 1, 1);\n        var material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: 16776960\n        });\n        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        scene.add(mesh);\n        renderer.render(scene, camera);\n    }, []);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n        ref: canvasRef\n    }, void 0, false, {\n        fileName: \"/Users/dennishansen/development/sim/threejs/ThreeApp.js\",\n        lineNumber: 41,\n        columnNumber: 10\n    }, this));\n}\n_s(BinaryNetworkSimulator, \"UJgi7ynoup7eqypjnwyX/s32POg=\");\n_c = BinaryNetworkSimulator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BinaryNetworkSimulator);\nvar _c;\n$RefreshReg$(_c, \"BinaryNetworkSimulator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi90aHJlZWpzL1RocmVlQXBwLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQWdEO0FBQ2xCOztTQUVyQkksc0JBQXNCLEdBQUcsQ0FBQzs7SUFDakMsR0FBSyxDQUFDQyxTQUFTLEdBQUdKLDZDQUFNLENBQUMsSUFBSTtJQUU3QkMsZ0RBQVMsQ0FBQyxRQUNaLEdBRGtCLENBQUM7WUF5Qk5JLFNBQVMsR0FGbEIsRUFBWTtRQUVaLFFBQVEsQ0FBQ0EsU0FBUyxDQUFFQyxJQUFJLEVBQUcsQ0FBQztZQUUxQkMsSUFBSSxDQUFDQyxRQUFRLENBQUNDLENBQUMsR0FBR0gsSUFBSSxHQUFHLElBQUk7WUFDN0JDLElBQUksQ0FBQ0MsUUFBUSxDQUFDRSxDQUFDLEdBQUdKLElBQUksR0FBRyxJQUFJO1lBRTdCSyxRQUFRLENBQUNDLE1BQU0sQ0FBRUMsS0FBSyxFQUFFQyxNQUFNO1FBQ2hDLENBQUM7UUE5QkQsR0FBSyxDQUFDQyxNQUFNLEdBQUdYLFNBQVMsQ0FBQ1ksT0FBTztRQUNoQyxHQUFLLENBQUNMLFFBQVEsR0FBRyxHQUFHLENBQUNULGdEQUFtQixDQUFDLENBQUM7WUFBQ2EsTUFBTSxFQUFOQSxNQUFNO1FBQUMsQ0FBQztRQUNuREosUUFBUSxDQUFDTyxPQUFPLENBQUNDLE1BQU0sQ0FBQ0MsVUFBVSxFQUFFRCxNQUFNLENBQUNFLFdBQVc7UUFDdERWLFFBQVEsQ0FBQ1csYUFBYSxDQUFDLENBQVEsRUFBRSxDQUFDO1FBRWxDLEdBQUssQ0FBQ1IsTUFBTSxHQUFHLEdBQUcsQ0FBQ1osb0RBQXVCLENBQ3hDLEVBQUUsRUFDRmlCLE1BQU0sQ0FBQ0MsVUFBVSxHQUFHRCxNQUFNLENBQUNFLFdBQVcsRUFDdEMsR0FBRyxFQUNILElBQUk7UUFFTlAsTUFBTSxDQUFDVSxRQUFRLENBQUNDLENBQUMsR0FBRyxDQUFDO1FBRXJCLEdBQUssQ0FBQ1osS0FBSyxHQUFHLEdBQUcsQ0FBQ1gsd0NBQVc7UUFFN0IsR0FBSyxDQUFDeUIsUUFBUSxHQUFHLEdBQUcsQ0FBQ3pCLDhDQUFpQixDQUFDLENBQUMsRUFBRSxDQUFDLEVBQUUsQ0FBQztRQUM5QyxHQUFLLENBQUMyQixRQUFRLEdBQUcsR0FBRyxDQUFDM0Isb0RBQXVCLENBQUMsQ0FBQztZQUFDNkIsS0FBSyxFQUFFLFFBQVE7UUFBQyxDQUFDO1FBQ2hFLEdBQUssQ0FBQ3hCLElBQUksR0FBRyxHQUFHLENBQUNMLHVDQUFVLENBQUN5QixRQUFRLEVBQUVFLFFBQVE7UUFDOUNoQixLQUFLLENBQUNvQixHQUFHLENBQUMxQixJQUFJO1FBRWRJLFFBQVEsQ0FBQ0MsTUFBTSxDQUFDQyxLQUFLLEVBQUVDLE1BQU07SUFXL0IsQ0FBQyxFQUFFLENBQUMsQ0FBQztJQUVMLE1BQU0sNkVBQUVDLENBQU07UUFBQ21CLEdBQUcsRUFBRTlCLFNBQVM7Ozs7OztBQUMvQixDQUFDO0dBdENRRCxzQkFBc0I7S0FBdEJBLHNCQUFzQjtBQXdDL0IsK0RBQWVBLHNCQUFzQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3RocmVlanMvVGhyZWVBcHAuanM/N2Y3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuXG5mdW5jdGlvbiBCaW5hcnlOZXR3b3JrU2ltdWxhdG9yKCkge1xuICBjb25zdCBjYW52YXNSZWYgPSB1c2VSZWYobnVsbCk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBjb25zdCBjYW52YXMgPSBjYW52YXNSZWYuY3VycmVudDtcbiAgICBjb25zdCByZW5kZXJlciA9IG5ldyBUSFJFRS5XZWJHTFJlbmRlcmVyKHsgY2FudmFzIH0pO1xuICAgIHJlbmRlcmVyLnNldFNpemUod2luZG93LmlubmVyV2lkdGgsIHdpbmRvdy5pbm5lckhlaWdodCk7XG4gICAgcmVuZGVyZXIuc2V0Q2xlYXJDb2xvcigweDAwMDAwMCwgMSk7XG5cbiAgICBjb25zdCBjYW1lcmEgPSBuZXcgVEhSRUUuUGVyc3BlY3RpdmVDYW1lcmEoXG4gICAgICA3NSxcbiAgICAgIHdpbmRvdy5pbm5lcldpZHRoIC8gd2luZG93LmlubmVySGVpZ2h0LFxuICAgICAgMC4xLFxuICAgICAgMTAwMFxuICAgICk7XG4gICAgY2FtZXJhLnBvc2l0aW9uLnogPSA1O1xuXG4gICAgY29uc3Qgc2NlbmUgPSBuZXcgVEhSRUUuU2NlbmUoKTtcblxuICAgIGNvbnN0IGdlb21ldHJ5ID0gbmV3IFRIUkVFLkJveEdlb21ldHJ5KDEsIDEsIDEpO1xuICAgIGNvbnN0IG1hdGVyaWFsID0gbmV3IFRIUkVFLk1lc2hCYXNpY01hdGVyaWFsKHsgY29sb3I6IDB4ZmZmZjAwIH0pO1xuICAgIGNvbnN0IG1lc2ggPSBuZXcgVEhSRUUuTWVzaChnZW9tZXRyeSwgbWF0ZXJpYWwpO1xuICAgIHNjZW5lLmFkZChtZXNoKTtcblxuICAgIHJlbmRlcmVyLnJlbmRlcihzY2VuZSwgY2FtZXJhKTtcbiAgICBcbiAgICAvLyBhbmltYXRpb25cbiAgICBcbiAgICBmdW5jdGlvbiBhbmltYXRpb24oIHRpbWUgKSB7XG4gICAgXG4gICAgICBtZXNoLnJvdGF0aW9uLnggPSB0aW1lIC8gMjAwMDtcbiAgICAgIG1lc2gucm90YXRpb24ueSA9IHRpbWUgLyAxMDAwO1xuICAgIFxuICAgICAgcmVuZGVyZXIucmVuZGVyKCBzY2VuZSwgY2FtZXJhICk7XG4gICAgfVxuICB9LCBbXSk7XG5cbiAgcmV0dXJuIDxjYW52YXMgcmVmPXtjYW52YXNSZWZ9IC8+O1xufVxuXG5leHBvcnQgZGVmYXVsdCBCaW5hcnlOZXR3b3JrU2ltdWxhdG9yO1xuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlUmVmIiwidXNlRWZmZWN0IiwiVEhSRUUiLCJCaW5hcnlOZXR3b3JrU2ltdWxhdG9yIiwiY2FudmFzUmVmIiwiYW5pbWF0aW9uIiwidGltZSIsIm1lc2giLCJyb3RhdGlvbiIsIngiLCJ5IiwicmVuZGVyZXIiLCJyZW5kZXIiLCJzY2VuZSIsImNhbWVyYSIsImNhbnZhcyIsImN1cnJlbnQiLCJXZWJHTFJlbmRlcmVyIiwic2V0U2l6ZSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNldENsZWFyQ29sb3IiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsInBvc2l0aW9uIiwieiIsIlNjZW5lIiwiZ2VvbWV0cnkiLCJCb3hHZW9tZXRyeSIsIm1hdGVyaWFsIiwiTWVzaEJhc2ljTWF0ZXJpYWwiLCJjb2xvciIsIk1lc2giLCJhZGQiLCJyZWYiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./threejs/ThreeApp.js\n");

/***/ })

});