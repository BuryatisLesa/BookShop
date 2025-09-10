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

/***/ "./src/ts/createCards.ts":
/*!*******************************!*\
  !*** ./src/ts/createCards.ts ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("{__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   createCards: () => (/* binding */ createCards)\n/* harmony export */ });\n/* harmony import */ var _truncateDescriptions__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./truncateDescriptions */ \"./src/ts/truncateDescriptions.ts\");\n\n// import { getData } from \"./getData\";\nfunction createCards(data) {\n    data.then(books => {\n        const containerBooks = document.querySelector(\".books-content__items\");\n        if (!containerBooks) {\n            return;\n        }\n        ;\n        books.forEach(book => {\n            let bookCard = document.createElement(\"div\");\n            bookCard.classList.add(\"books-content__item\");\n            const shortDesc = (0,_truncateDescriptions__WEBPACK_IMPORTED_MODULE_0__.truncateDescription)(book.description, 25);\n            bookCard.innerHTML += `\r\n                <div class=\"books-content__item-left\">\r\n                    <img class=\"books-content__item-left-image\" src=\"${book.image}\" alt=\"${book.title}\">\r\n                </div>\r\n                <div class=\"books-content__item-right\">\r\n                    <p class=\"books-content__item-right-author\">${book.authors.join(\", \")}</p>\r\n                    <h3 class=\"books-content__item-right-title\">${book.title}</h3>\r\n                <div class=\"books-content__item-right-rating\">\r\n                    <p class=\"books-content__item-right-rating-averageRating\">${book.averageRating}</p>\r\n                    <p class=\"books-content__item-right-rating-ratingsCount\">${book.ratingsCount}</p>\r\n                </div>\r\n                <p class=\"books-content__item-right-description\">${shortDesc}</p>\r\n                <p class=\"books-content__item-right-saleInfo\">${book.saleInfo.saleability}</p>\r\n                </div>\r\n            `;\n            containerBooks.appendChild(bookCard);\n        });\n    });\n}\n;\n\n\n//# sourceURL=webpack://bookshop/./src/ts/createCards.ts?\n}");

/***/ })

},
/******/ function(__webpack_require__) { // webpackRuntimeModules
/******/ /* webpack/runtime/getFullHash */
/******/ (() => {
/******/ 	__webpack_require__.h = () => ("fb83fa068556a3b56d0b")
/******/ })();
/******/ 
/******/ }
);