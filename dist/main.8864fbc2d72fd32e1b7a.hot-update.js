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

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _slider__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./slider */ \"./src/ts/slider.ts\");\n/* harmony import */ var _getData__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./getData */ \"./src/ts/getData.ts\");\n/* harmony import */ var _createCards__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./createCards */ \"./src/ts/createCards.ts\");\n/* harmony import */ var _scss_books_scss__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../scss/books.scss */ \"./src/scss/books.scss\");\nvar __awaiter = (undefined && undefined.__awaiter) || function (thisArg, _arguments, P, generator) {\n    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }\n    return new (P || (P = Promise))(function (resolve, reject) {\n        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }\n        function rejected(value) { try { step(generator[\"throw\"](value)); } catch (e) { reject(e); } }\n        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }\n        step((generator = generator.apply(thisArg, _arguments || [])).next());\n    });\n};\n\n\n\n\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.getSlide)(_slider__WEBPACK_IMPORTED_MODULE_0__.currentSlide);\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.navigationCircle)();\n(0,_slider__WEBPACK_IMPORTED_MODULE_0__.startAutoSlide)();\nconst categories = document.querySelectorAll(\".nav-categories__item\");\nconst loadMore = document.querySelector(\".footer__load-more-button\");\nlet quantityBook = 6;\nlet selectedCategory = \"Architecture\"; // дефолтная категория\n// Функция для загрузки и отображения книг\nfunction loadBooks() {\n    return __awaiter(this, void 0, void 0, function* () {\n        const books = yield (0,_getData__WEBPACK_IMPORTED_MODULE_1__.getData)(selectedCategory, quantityBook);\n        (0,_createCards__WEBPACK_IMPORTED_MODULE_2__.createCards)(books);\n    });\n}\n// Первая загрузка\n(() => __awaiter(void 0, void 0, void 0, function* () {\n    yield loadBooks();\n}))();\n// Клики по категориям\ncategories.forEach(category => {\n    category.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\n        var _a;\n        categories.forEach(c => c.classList.remove(\"nav-categories__item--active\"));\n        category.classList.add(\"nav-categories__item--active\");\n        // меняем категорию и сбрасываем количество\n        selectedCategory = ((_a = category.textContent) === null || _a === void 0 ? void 0 : _a.trim()) || \"Architecture\";\n        quantityBook = 6;\n        yield loadBooks();\n    }));\n});\n// Клик по кнопке Load More\nif (loadMore) {\n    loadMore.addEventListener(\"click\", () => __awaiter(void 0, void 0, void 0, function* () {\n        quantityBook += 6;\n        yield loadBooks();\n    }));\n}\n\n\n//# sourceURL=webpack://bookshop/./src/ts/index.ts?\n}");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("ca574291859fa6a90aae")
/******/ })();
/******/ 
/******/ }
);