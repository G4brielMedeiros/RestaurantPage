/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/functions/elementGenerator.js":
/*!*******************************************!*\
  !*** ./src/functions/elementGenerator.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"generateTextElement\": () => (/* binding */ generateTextElement),\n/* harmony export */   \"generateImageElement\": () => (/* binding */ generateImageElement),\n/* harmony export */   \"generateEmptyDiv\": () => (/* binding */ generateEmptyDiv)\n/* harmony export */ });\nfunction generateTextElement(documentType, classList, textContent) {\n  const element = document.createElement(documentType);\n  element.textContent = textContent;\n  element.classList = classList;\n\n  return element;\n}\n\nfunction generateImageElement(classList, src) {\n  const image = new Image();\n  image.src = src;\n  image.classList = classList;\n\n  return image;\n}\n\nfunction generateEmptyDiv(classList) {\n  const div = document.createElement(\"div\");\n  div.classList = classList;\n  return div;\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/functions/elementGenerator.js?");

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_pageDemo__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/pageDemo */ \"./src/pages/pageDemo.js\");\n/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./pages/homePage */ \"./src/pages/homePage.js\");\n/* harmony import */ var _functions_elementGenerator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./functions/elementGenerator */ \"./src/functions/elementGenerator.js\");\n/* harmony import */ var _pages_menuPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/menuPage */ \"./src/pages/menuPage.js\");\n/* harmony import */ var _pages_contactPage__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./pages/contactPage */ \"./src/pages/contactPage.js\");\n\n\n\n\n\n\nconst content = document.getElementById(\"content\");\nconst title = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_2__.generateTextElement)(\"h1\", \"title\", \"The Bakery\");\n\n// construct navbar\nconst navbar = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_2__.generateEmptyDiv)(\"navbar\");\nconst homeButton = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_2__.generateTextElement)(\"button\", \"button button-home\", \"Home\");\nconst menuButton = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_2__.generateTextElement)(\"button\", \"button button-menu\", \"Menu\");\nconst contactButton = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_2__.generateTextElement)(\"button\", \"button button-contact\", \"Contact\");\n\n// get pages\nconst homePage = (0,_pages_homePage__WEBPACK_IMPORTED_MODULE_1__[\"default\"])();\nconst menuPage = (0,_pages_menuPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\nconst contactPage = (0,_pages_contactPage__WEBPACK_IMPORTED_MODULE_4__[\"default\"])();\nconst pageList = [homePage, menuPage, contactPage];\n\n// this needs refactoring\nfunction setActive(activePage) {\n  pageList.forEach((page) => page.classList.remove(\"active\"));\n\n  activePage.classList.add(\"active\");\n}\n\nhomeButton.addEventListener(\"click\", () => setActive(homePage));\n\nmenuButton.addEventListener(\"click\", () => setActive(menuPage));\n\ncontactButton.addEventListener(\"click\", () => setActive(contactPage));\n\nnavbar.append(homeButton, menuButton, contactButton);\n\n// Append elements to content page\ncontent.append(title, navbar);\n\ncontent.append(homePage, menuPage, contactPage);\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/pages/contactPage.js":
/*!**********************************!*\
  !*** ./src/pages/contactPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getContactPage)\n/* harmony export */ });\n/* harmony import */ var _functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/elementGenerator */ \"./src/functions/elementGenerator.js\");\n//TODO: Implement contact page\n\n\n\nfunction getContactPage() {\n  return (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateEmptyDiv)('contact-page page');\n}\n\n//# sourceURL=webpack://restaurantpage/./src/pages/contactPage.js?");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHomePage)\n/* harmony export */ });\n/* harmony import */ var _images_breadsByPixabay_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/breadsByPixabay.jpg */ \"./src/images/breadsByPixabay.jpg\");\n/* harmony import */ var _functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../functions/elementGenerator */ \"./src/functions/elementGenerator.js\");\n\n\n\nfunction getHomePage() {\n  const homePage = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__.generateEmptyDiv)(\"homepage page active\");\n\n  const desc1 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__.generateTextElement)(\"h2\", \"description\", \"This is the place that sells bread\");\n  const desc2 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__.generateTextElement)(\"h2\", \"description\", \"We're very excited to offer you tons of bread, and a little butter to go along\");\n  const desc3 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__.generateTextElement)(\"h2\", \"description\", \"This bread place has been in business for over 15000 years. That's right, we're older than civilization.\");\n  const bread = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__.generateImageElement)(\"background\", _images_breadsByPixabay_jpg__WEBPACK_IMPORTED_MODULE_0__);\n\n  homePage.append(desc1, desc2, desc3, bread);\n\n  return homePage;\n}\n\n\n\n\n//# sourceURL=webpack://restaurantpage/./src/pages/homePage.js?");

/***/ }),

/***/ "./src/pages/menuPage.js":
/*!*******************************!*\
  !*** ./src/pages/menuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMenuPage)\n/* harmony export */ });\n/* harmony import */ var _functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/elementGenerator */ \"./src/functions/elementGenerator.js\");\n//TODO: Implement home page\n\n\n\nfunction getMenuPage() {\n  return (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateEmptyDiv)(\"menu-page page\");\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/pages/menuPage.js?");

/***/ }),

/***/ "./src/pages/pageDemo.js":
/*!*******************************!*\
  !*** ./src/pages/pageDemo.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ pageLoad)\n/* harmony export */ });\n/* harmony import */ var _images_vvadyab_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/vvadyab.png */ \"./src/images/vvadyab.png\");\n\n\nfunction pageLoad() {\n  const mainPage = document.createElement(\"div\");\n\n  const image = new Image();\n  const headline = document.createElement(\"h1\");\n  const description = document.createElement(\"p\");\n\n  image.src = _images_vvadyab_png__WEBPACK_IMPORTED_MODULE_0__;\n  headline.textContent = \"The Bakery\";\n  description.textContent =\n    \"This bakery will be the best place you've ever been to.\";\n\n  mainPage.appendChild(image);\n  mainPage.appendChild(headline);\n  mainPage.appendChild(description);\n\n  return mainPage;\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/pages/pageDemo.js?");

/***/ }),

/***/ "./src/images/breadsByPixabay.jpg":
/*!****************************************!*\
  !*** ./src/images/breadsByPixabay.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be6e04026b71c47e39a4.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/breadsByPixabay.jpg?");

/***/ }),

/***/ "./src/images/vvadyab.png":
/*!********************************!*\
  !*** ./src/images/vvadyab.png ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"83fd4164c901406ad009.png\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/vvadyab.png?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.js");
/******/ 	
/******/ })()
;