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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var three__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! three */ \"./node_modules/three/build/three.module.js\");\n/* module decorator */ module = __webpack_require__.hmd(module);\n\n\n\nfunction _arrayLikeToArray(arr, len) {\n    if (len == null || len > arr.length) len = arr.length;\n    for(var i = 0, arr2 = new Array(len); i < len; i++)arr2[i] = arr[i];\n    return arr2;\n}\nfunction _arrayWithHoles(arr) {\n    if (Array.isArray(arr)) return arr;\n}\nfunction _iterableToArrayLimit(arr, i) {\n    var _i = arr == null ? null : typeof Symbol !== \"undefined\" && arr[Symbol.iterator] || arr[\"@@iterator\"];\n    if (_i == null) return;\n    var _arr = [];\n    var _n = true;\n    var _d = false;\n    var _s1, _e;\n    try {\n        for(_i = _i.call(arr); !(_n = (_s1 = _i.next()).done); _n = true){\n            _arr.push(_s1.value);\n            if (i && _arr.length === i) break;\n        }\n    } catch (err) {\n        _d = true;\n        _e = err;\n    } finally{\n        try {\n            if (!_n && _i[\"return\"] != null) _i[\"return\"]();\n        } finally{\n            if (_d) throw _e;\n        }\n    }\n    return _arr;\n}\nfunction _nonIterableRest() {\n    throw new TypeError(\"Invalid attempt to destructure non-iterable instance.\\\\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.\");\n}\nfunction _slicedToArray(arr, i) {\n    return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest();\n}\nfunction _unsupportedIterableToArray(o, minLen) {\n    if (!o) return;\n    if (typeof o === \"string\") return _arrayLikeToArray(o, minLen);\n    var n = Object.prototype.toString.call(o).slice(8, -1);\n    if (n === \"Object\" && o.constructor) n = o.constructor.name;\n    if (n === \"Map\" || n === \"Set\") return Array.from(n);\n    if (n === \"Arguments\" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen);\n}\nvar _s = $RefreshSig$();\nfunction BinaryNetworkSimulator() {\n    _s();\n    var containerRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    var canvasRef = (0,react__WEBPACK_IMPORTED_MODULE_1__.useRef)(null);\n    // Store the state of whether the command key is being held down\n    var ref = _slicedToArray(react__WEBPACK_IMPORTED_MODULE_1___default().useState(false), 2), commandDown = ref[0], setCommandDown = ref[1];\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(function() {\n        var onWindowResize = // Resize the canvas to fill browser window dynamically\n        function onWindowResize() {\n            camera.aspect = container.clientWidth / container.clientHeight;\n            camera.updateProjectionMatrix();\n            renderer.setSize(container.clientWidth, container.clientHeight);\n        };\n        var onMouseWheel = // Pain and zoom based on mouse wheel events\n        function onMouseWheel(event) {\n            // If the command key is being held down, zoom\n            if (commandDown) {\n                camera.position.z += event.deltaY * 0.01;\n                return;\n            }\n            // Otherwise, pan\n            camera.position.x += event.deltaX * 0.01;\n            camera.position.y -= event.deltaY * 0.01;\n        };\n        var onKeyDown = // Set the command key state based on key presses\n        function onKeyDown(event) {\n            if (event.key === \"Meta\") {\n                setCommandDown(true);\n            }\n        };\n        var onKeyUp = // Set the command key state based on key releases\n        function onKeyUp(event) {\n            if (event.key === \"Meta\") {\n                setCommandDown(false);\n            }\n        };\n        // Create a WebGL renderer and add it to the DOM\n        var container = containerRef.current;\n        var canvas = canvasRef.current;\n        var renderer = new three__WEBPACK_IMPORTED_MODULE_2__.WebGLRenderer({\n            canvas: canvas\n        });\n        renderer.setClearColor(0, 1);\n        // Create a camera and a scene\n        var camera = new three__WEBPACK_IMPORTED_MODULE_2__.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);\n        camera.position.z = 5;\n        // Create a scene\n        var scene = new three__WEBPACK_IMPORTED_MODULE_2__.Scene();\n        // Add a mesh for a white, 3D circle\n        var geometry = new three__WEBPACK_IMPORTED_MODULE_2__.CircleGeometry(1, 32);\n        var material = new three__WEBPACK_IMPORTED_MODULE_2__.MeshBasicMaterial({\n            color: 16777215\n        });\n        var mesh = new three__WEBPACK_IMPORTED_MODULE_2__.Mesh(geometry, material);\n        scene.add(mesh);\n        // Add the resize listener\n        window.addEventListener(\"resize\", onWindowResize);\n        // Add the mouse wheel listener\n        canvas.addEventListener(\"wheel\", onMouseWheel);\n        // Add the key listeners\n        window.addEventListener(\"keydown\", onKeyDown);\n        window.addEventListener(\"keyup\", onKeyUp);\n        // Render the scene\n        function render() {\n            renderer.render(scene, camera);\n            requestAnimationFrame(render);\n        }\n        // Call the resize listener and render the scene\n        onWindowResize();\n        render();\n        // Clean up\n        return function() {\n            window.removeEventListener(\"resize\", onWindowResize);\n            renderer.dispose();\n        };\n    }, [\n        commandDown\n    ]);\n    return(/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        ref: containerRef,\n        style: {\n            width: \"100%\",\n            height: \"100%\",\n            position: \"fixed\"\n        },\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"canvas\", {\n            ref: canvasRef,\n            style: {\n                width: \"100%\",\n                height: \"100%\"\n            }\n        }, void 0, false, {\n            fileName: \"/Users/dennishansen/development/sim/threejs/ThreeApp.js\",\n            lineNumber: 102,\n            columnNumber: 7\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/dennishansen/development/sim/threejs/ThreeApp.js\",\n        lineNumber: 98,\n        columnNumber: 5\n    }, this));\n}\n_s(BinaryNetworkSimulator, \"oCDOYYWlSr+Yi7StclMlKIXi2uo=\");\n_c = BinaryNetworkSimulator;\n/* harmony default export */ __webpack_exports__[\"default\"] = (BinaryNetworkSimulator);\nvar _c;\n$RefreshReg$(_c, \"BinaryNetworkSimulator\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            var currentExports = module.__proto__.exports;\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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UUFBUSxFQUFFLENBQU87UUFBQyxDQUFDOzhGQUUxRFUsQ0FBTTtZQUFDdUIsR0FBRyxFQUFFaEQsU0FBUztZQUFFaUQsS0FBSyxFQUFFLENBQUM7Z0JBQUNDLEtBQUssRUFBRSxDQUFNO2dCQUFFQyxNQUFNLEVBQUUsQ0FBTTtZQUFDLENBQUM7Ozs7Ozs7Ozs7O0FBR3RFLENBQUM7R0FyR1FyRCxzQkFBc0I7S0FBdEJBLHNCQUFzQjtBQXVHL0IsK0RBQWVBLHNCQUFzQixFQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3RocmVlanMvVGhyZWVBcHAuanM/N2Y3YyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlUmVmLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCAqIGFzIFRIUkVFIGZyb20gXCJ0aHJlZVwiO1xuXG5mdW5jdGlvbiBCaW5hcnlOZXR3b3JrU2ltdWxhdG9yKCkge1xuICBjb25zdCBjb250YWluZXJSZWYgPSB1c2VSZWYobnVsbCk7XG4gIGNvbnN0IGNhbnZhc1JlZiA9IHVzZVJlZihudWxsKTtcblxuICAvLyBTdG9yZSB0aGUgc3RhdGUgb2Ygd2hldGhlciB0aGUgY29tbWFuZCBrZXkgaXMgYmVpbmcgaGVsZCBkb3duXG4gIGNvbnN0IFtjb21tYW5kRG93biwgc2V0Q29tbWFuZERvd25dID0gUmVhY3QudXNlU3RhdGUoZmFsc2UpO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgLy8gQ3JlYXRlIGEgV2ViR0wgcmVuZGVyZXIgYW5kIGFkZCBpdCB0byB0aGUgRE9NXG4gICAgY29uc3QgY29udGFpbmVyID0gY29udGFpbmVyUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgY2FudmFzID0gY2FudmFzUmVmLmN1cnJlbnQ7XG4gICAgY29uc3QgcmVuZGVyZXIgPSBuZXcgVEhSRUUuV2ViR0xSZW5kZXJlcih7IGNhbnZhcyB9KTtcbiAgICByZW5kZXJlci5zZXRDbGVhckNvbG9yKDB4MDAwMDAwLCAxKTtcblxuICAgIC8vIENyZWF0ZSBhIGNhbWVyYSBhbmQgYSBzY2VuZVxuICAgIGNvbnN0IGNhbWVyYSA9IG5ldyBUSFJFRS5QZXJzcGVjdGl2ZUNhbWVyYShcbiAgICAgIDc1LFxuICAgICAgd2luZG93LmlubmVyV2lkdGggLyB3aW5kb3cuaW5uZXJIZWlnaHQsXG4gICAgICAwLjEsXG4gICAgICAxMDAwXG4gICAgKTtcbiAgICBjYW1lcmEucG9zaXRpb24ueiA9IDU7XG5cbiAgICAvLyBDcmVhdGUgYSBzY2VuZVxuICAgIGNvbnN0IHNjZW5lID0gbmV3IFRIUkVFLlNjZW5lKCk7XG5cbiAgICAvLyBBZGQgYSBtZXNoIGZvciBhIHdoaXRlLCAzRCBjaXJjbGVcbiAgICBjb25zdCBnZW9tZXRyeSA9IG5ldyBUSFJFRS5DaXJjbGVHZW9tZXRyeSgxLCAzMik7XG4gICAgY29uc3QgbWF0ZXJpYWwgPSBuZXcgVEhSRUUuTWVzaEJhc2ljTWF0ZXJpYWwoeyBjb2xvcjogMHhmZmZmZmYgfSk7XG4gICAgY29uc3QgbWVzaCA9IG5ldyBUSFJFRS5NZXNoKGdlb21ldHJ5LCBtYXRlcmlhbCk7XG4gICAgc2NlbmUuYWRkKG1lc2gpO1xuXG4gICAgLy8gUmVzaXplIHRoZSBjYW52YXMgdG8gZmlsbCBicm93c2VyIHdpbmRvdyBkeW5hbWljYWxseVxuICAgIGZ1bmN0aW9uIG9uV2luZG93UmVzaXplKCkge1xuICAgICAgY2FtZXJhLmFzcGVjdCA9IGNvbnRhaW5lci5jbGllbnRXaWR0aCAvIGNvbnRhaW5lci5jbGllbnRIZWlnaHQ7XG4gICAgICBjYW1lcmEudXBkYXRlUHJvamVjdGlvbk1hdHJpeCgpO1xuICAgICAgcmVuZGVyZXIuc2V0U2l6ZShjb250YWluZXIuY2xpZW50V2lkdGgsIGNvbnRhaW5lci5jbGllbnRIZWlnaHQpO1xuICAgIH1cblxuICAgIC8vIEFkZCB0aGUgcmVzaXplIGxpc3RlbmVyXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUpO1xuXG4gICAgLy8gUGFpbiBhbmQgem9vbSBiYXNlZCBvbiBtb3VzZSB3aGVlbCBldmVudHNcbiAgICBmdW5jdGlvbiBvbk1vdXNlV2hlZWwoZXZlbnQpIHtcbiAgICAgIC8vIElmIHRoZSBjb21tYW5kIGtleSBpcyBiZWluZyBoZWxkIGRvd24sIHpvb21cbiAgICAgIGlmIChjb21tYW5kRG93bikge1xuICAgICAgICBjYW1lcmEucG9zaXRpb24ueiArPSBldmVudC5kZWx0YVkgKiAwLjAxO1xuICAgICAgICByZXR1cm47XG4gICAgICB9XG5cbiAgICAgIC8vIE90aGVyd2lzZSwgcGFuXG4gICAgICBjYW1lcmEucG9zaXRpb24ueCArPSBldmVudC5kZWx0YVggKiAwLjAxO1xuICAgICAgY2FtZXJhLnBvc2l0aW9uLnkgLT0gZXZlbnQuZGVsdGFZICogMC4wMTtcbiAgICB9XG5cbiAgICAvLyBBZGQgdGhlIG1vdXNlIHdoZWVsIGxpc3RlbmVyXG4gICAgY2FudmFzLmFkZEV2ZW50TGlzdGVuZXIoXCJ3aGVlbFwiLCBvbk1vdXNlV2hlZWwpO1xuXG4gICAgLy8gU2V0IHRoZSBjb21tYW5kIGtleSBzdGF0ZSBiYXNlZCBvbiBrZXkgcHJlc3Nlc1xuICAgIGZ1bmN0aW9uIG9uS2V5RG93bihldmVudCkge1xuICAgICAgaWYgKGV2ZW50LmtleSA9PT0gXCJNZXRhXCIpIHtcbiAgICAgICAgc2V0Q29tbWFuZERvd24odHJ1ZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gU2V0IHRoZSBjb21tYW5kIGtleSBzdGF0ZSBiYXNlZCBvbiBrZXkgcmVsZWFzZXNcbiAgICBmdW5jdGlvbiBvbktleVVwKGV2ZW50KSB7XG4gICAgICBpZiAoZXZlbnQua2V5ID09PSBcIk1ldGFcIikge1xuICAgICAgICBzZXRDb21tYW5kRG93bihmYWxzZSk7XG4gICAgICB9XG4gICAgfVxuXG4gICAgLy8gQWRkIHRoZSBrZXkgbGlzdGVuZXJzXG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXlkb3duXCIsIG9uS2V5RG93bik7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoXCJrZXl1cFwiLCBvbktleVVwKTtcblxuICAgIC8vIFJlbmRlciB0aGUgc2NlbmVcbiAgICBmdW5jdGlvbiByZW5kZXIoKSB7XG4gICAgICByZW5kZXJlci5yZW5kZXIoc2NlbmUsIGNhbWVyYSk7XG4gICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUocmVuZGVyKTtcbiAgICB9XG5cbiAgICAvLyBDYWxsIHRoZSByZXNpemUgbGlzdGVuZXIgYW5kIHJlbmRlciB0aGUgc2NlbmVcbiAgICBvbldpbmRvd1Jlc2l6ZSgpO1xuICAgIHJlbmRlcigpO1xuXG4gICAgLy8gQ2xlYW4gdXBcbiAgICByZXR1cm4gKCkgPT4ge1xuICAgICAgd2luZG93LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJyZXNpemVcIiwgb25XaW5kb3dSZXNpemUpO1xuICAgICAgcmVuZGVyZXIuZGlzcG9zZSgpO1xuICAgIH07XG4gIH0sIFtjb21tYW5kRG93bl0pO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAgcmVmPXtjb250YWluZXJSZWZ9XG4gICAgICBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIsIHBvc2l0aW9uOiBcImZpeGVkXCIgfX1cbiAgICA+XG4gICAgICA8Y2FudmFzIHJlZj17Y2FudmFzUmVmfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIsIGhlaWdodDogXCIxMDAlXCIgfX0gLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZXhwb3J0IGRlZmF1bHQgQmluYXJ5TmV0d29ya1NpbXVsYXRvcjtcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZVJlZiIsInVzZUVmZmVjdCIsIlRIUkVFIiwiQmluYXJ5TmV0d29ya1NpbXVsYXRvciIsImNvbnRhaW5lclJlZiIsImNhbnZhc1JlZiIsInVzZVN0YXRlIiwiY29tbWFuZERvd24iLCJzZXRDb21tYW5kRG93biIsIm9uV2luZG93UmVzaXplIiwiY2FtZXJhIiwiYXNwZWN0IiwiY29udGFpbmVyIiwiY2xpZW50V2lkdGgiLCJjbGllbnRIZWlnaHQiLCJ1cGRhdGVQcm9qZWN0aW9uTWF0cml4IiwicmVuZGVyZXIiLCJzZXRTaXplIiwib25Nb3VzZVdoZWVsIiwiZXZlbnQiLCJwb3NpdGlvbiIsInoiLCJkZWx0YVkiLCJ4IiwiZGVsdGFYIiwieSIsIm9uS2V5RG93biIsImtleSIsIm9uS2V5VXAiLCJjdXJyZW50IiwiY2FudmFzIiwiV2ViR0xSZW5kZXJlciIsInNldENsZWFyQ29sb3IiLCJQZXJzcGVjdGl2ZUNhbWVyYSIsIndpbmRvdyIsImlubmVyV2lkdGgiLCJpbm5lckhlaWdodCIsInNjZW5lIiwiU2NlbmUiLCJnZW9tZXRyeSIsIkNpcmNsZUdlb21ldHJ5IiwibWF0ZXJpYWwiLCJNZXNoQmFzaWNNYXRlcmlhbCIsImNvbG9yIiwibWVzaCIsIk1lc2giLCJhZGQiLCJhZGRFdmVudExpc3RlbmVyIiwicmVuZGVyIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwicmVtb3ZlRXZlbnRMaXN0ZW5lciIsImRpc3Bvc2UiLCJkaXYiLCJyZWYiLCJzdHlsZSIsIndpZHRoIiwiaGVpZ2h0Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./threejs/ThreeApp.js\n");

/***/ })

});