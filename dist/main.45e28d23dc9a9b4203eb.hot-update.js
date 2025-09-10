"use strict";
/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdatebookshop"]("main",{

/***/ "./src/ts/index.ts":
/*!*************************!*\
  !*** ./src/ts/index.ts ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/ts/slider.ts\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/ts/getData.ts\");\n/* harmony import */ var _createCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCards */ \"./src/ts/createCards.ts\");\n/* harmony import */ var _scss_books_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/books.scss */ \"./src/scss/books.scss\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.getSlide)(_slider__WEBPACK_IMPORTED_MODULE_0__.currentSlide);\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.navigationCircle)();\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.startAutoSlide)();\nconst categories = document.querySelectorAll(\".nav-categories__item\");\n(() => __awaiter(void 0, void 0, void 0, function* () {\n    const books = yield (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(\"Architecture\", 6);\n    (0,_createCards__WEBPACK_IMPORTED_MODULE_2__.createCards)(books);\n}))();\ncategories.forEach(category => {\n    category.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\n        var _a;\n        categories.forEach(c => c.classList.remove(\"nav-categories__item--active\"));\n        category.classList.add(\"nav-categories__item--active\");\n        const selectedCategory = ((_a = category.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || \"\";\n        const books = yield (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(selectedCategory, 6);\n        (0,_createCards__WEBPACK_IMPORTED_MODULE_2__.createCards)(books);\n    }));\n});\n\n\n//# sourceURL=webpack://bookshop/./src/ts/index.ts?\n}");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("eb229336d05845576b18")
/******/ })();
/******/ 
/******/ }
);