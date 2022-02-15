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

/***/ "./node_modules/css-loader/dist/cjs.js!./src/style.css":
/*!*************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/style.css ***!
  \*************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/noSourceMaps.js */ \"./node_modules/css-loader/dist/runtime/noSourceMaps.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../node_modules/css-loader/dist/runtime/api.js */ \"./node_modules/css-loader/dist/runtime/api.js\");\n/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);\n// Imports\n\n\nvar ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_noSourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));\n// Module\n___CSS_LOADER_EXPORT___.push([module.id, \"* {\\n  background-color: aquamarine;\\n  font-family: \\\"Courier New\\\", Courier, monospace;\\n}\\n\\n.hide {\\n  display: none;\\n}\\n\\n.navbar {\\n  display: flex;\\n  width: 100%;\\n  justify-content: center;\\n  gap: 10%;\\n}\\n\\n#content {\\n  display: flex;\\n  flex-direction: column;\\n  align-items: center;\\n  text-align: center;\\n}\\n\\nimg {\\n  width: 600px;\\n  border: 4px solid black;\\n}\\n\\n.item img, .person img {\\n  width: 300px;\\n}\\n\\n.button {\\n  width: 80px;\\n}\\n\\n.menu-items, .contact-items {\\n  display: flex;\\n  flex-wrap: wrap;\\n  justify-content: space-around;\\n  gap: 50px;\\n}\\n\\n\", \"\"]);\n// Exports\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?./node_modules/css-loader/dist/cjs.js");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {

eval("\n\n/*\n  MIT License http://www.opensource.org/licenses/mit-license.php\n  Author Tobias Koppers @sokra\n*/\nmodule.exports = function (cssWithMappingToString) {\n  var list = []; // return the list of modules as css string\n\n  list.toString = function toString() {\n    return this.map(function (item) {\n      var content = \"\";\n      var needLayer = typeof item[5] !== \"undefined\";\n\n      if (item[4]) {\n        content += \"@supports (\".concat(item[4], \") {\");\n      }\n\n      if (item[2]) {\n        content += \"@media \".concat(item[2], \" {\");\n      }\n\n      if (needLayer) {\n        content += \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\");\n      }\n\n      content += cssWithMappingToString(item);\n\n      if (needLayer) {\n        content += \"}\";\n      }\n\n      if (item[2]) {\n        content += \"}\";\n      }\n\n      if (item[4]) {\n        content += \"}\";\n      }\n\n      return content;\n    }).join(\"\");\n  }; // import a list of modules into the list\n\n\n  list.i = function i(modules, media, dedupe, supports, layer) {\n    if (typeof modules === \"string\") {\n      modules = [[null, modules, undefined]];\n    }\n\n    var alreadyImportedModules = {};\n\n    if (dedupe) {\n      for (var k = 0; k < this.length; k++) {\n        var id = this[k][0];\n\n        if (id != null) {\n          alreadyImportedModules[id] = true;\n        }\n      }\n    }\n\n    for (var _k = 0; _k < modules.length; _k++) {\n      var item = [].concat(modules[_k]);\n\n      if (dedupe && alreadyImportedModules[item[0]]) {\n        continue;\n      }\n\n      if (typeof layer !== \"undefined\") {\n        if (typeof item[5] === \"undefined\") {\n          item[5] = layer;\n        } else {\n          item[1] = \"@layer\".concat(item[5].length > 0 ? \" \".concat(item[5]) : \"\", \" {\").concat(item[1], \"}\");\n          item[5] = layer;\n        }\n      }\n\n      if (media) {\n        if (!item[2]) {\n          item[2] = media;\n        } else {\n          item[1] = \"@media \".concat(item[2], \" {\").concat(item[1], \"}\");\n          item[2] = media;\n        }\n      }\n\n      if (supports) {\n        if (!item[4]) {\n          item[4] = \"\".concat(supports);\n        } else {\n          item[1] = \"@supports (\".concat(item[4], \") {\").concat(item[1], \"}\");\n          item[4] = supports;\n        }\n      }\n\n      list.push(item);\n    }\n  };\n\n  return list;\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/api.js?");

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/noSourceMaps.js":
/*!**************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/noSourceMaps.js ***!
  \**************************************************************/
/***/ ((module) => {

eval("\n\nmodule.exports = function (i) {\n  return i[1];\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/css-loader/dist/runtime/noSourceMaps.js?");

/***/ }),

/***/ "./src/style.css":
/*!***********************!*\
  !*** ./src/style.css ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__)\n/* harmony export */ });\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ \"./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleDomAPI.js */ \"./node_modules/style-loader/dist/runtime/styleDomAPI.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertBySelector.js */ \"./node_modules/style-loader/dist/runtime/insertBySelector.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ \"./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/insertStyleElement.js */ \"./node_modules/style-loader/dist/runtime/insertStyleElement.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../node_modules/style-loader/dist/runtime/styleTagTransform.js */ \"./node_modules/style-loader/dist/runtime/styleTagTransform.js\");\n/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../node_modules/css-loader/dist/cjs.js!./style.css */ \"./node_modules/css-loader/dist/cjs.js!./src/style.css\");\n\n      \n      \n      \n      \n      \n      \n      \n      \n      \n\nvar options = {};\n\noptions.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());\noptions.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());\n\n      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, \"head\");\n    \noptions.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());\noptions.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());\n\nvar update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"], options);\n\n\n\n\n       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"] && _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals ? _node_modules_css_loader_dist_cjs_js_style_css__WEBPACK_IMPORTED_MODULE_6__[\"default\"].locals : undefined);\n\n\n//# sourceURL=webpack://restaurantpage/./src/style.css?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {

eval("\n\nvar stylesInDOM = [];\n\nfunction getIndexByIdentifier(identifier) {\n  var result = -1;\n\n  for (var i = 0; i < stylesInDOM.length; i++) {\n    if (stylesInDOM[i].identifier === identifier) {\n      result = i;\n      break;\n    }\n  }\n\n  return result;\n}\n\nfunction modulesToDom(list, options) {\n  var idCountMap = {};\n  var identifiers = [];\n\n  for (var i = 0; i < list.length; i++) {\n    var item = list[i];\n    var id = options.base ? item[0] + options.base : item[0];\n    var count = idCountMap[id] || 0;\n    var identifier = \"\".concat(id, \" \").concat(count);\n    idCountMap[id] = count + 1;\n    var indexByIdentifier = getIndexByIdentifier(identifier);\n    var obj = {\n      css: item[1],\n      media: item[2],\n      sourceMap: item[3],\n      supports: item[4],\n      layer: item[5]\n    };\n\n    if (indexByIdentifier !== -1) {\n      stylesInDOM[indexByIdentifier].references++;\n      stylesInDOM[indexByIdentifier].updater(obj);\n    } else {\n      var updater = addElementStyle(obj, options);\n      options.byIndex = i;\n      stylesInDOM.splice(i, 0, {\n        identifier: identifier,\n        updater: updater,\n        references: 1\n      });\n    }\n\n    identifiers.push(identifier);\n  }\n\n  return identifiers;\n}\n\nfunction addElementStyle(obj, options) {\n  var api = options.domAPI(options);\n  api.update(obj);\n\n  var updater = function updater(newObj) {\n    if (newObj) {\n      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {\n        return;\n      }\n\n      api.update(obj = newObj);\n    } else {\n      api.remove();\n    }\n  };\n\n  return updater;\n}\n\nmodule.exports = function (list, options) {\n  options = options || {};\n  list = list || [];\n  var lastIdentifiers = modulesToDom(list, options);\n  return function update(newList) {\n    newList = newList || [];\n\n    for (var i = 0; i < lastIdentifiers.length; i++) {\n      var identifier = lastIdentifiers[i];\n      var index = getIndexByIdentifier(identifier);\n      stylesInDOM[index].references--;\n    }\n\n    var newLastIdentifiers = modulesToDom(newList, options);\n\n    for (var _i = 0; _i < lastIdentifiers.length; _i++) {\n      var _identifier = lastIdentifiers[_i];\n\n      var _index = getIndexByIdentifier(_identifier);\n\n      if (stylesInDOM[_index].references === 0) {\n        stylesInDOM[_index].updater();\n\n        stylesInDOM.splice(_index, 1);\n      }\n    }\n\n    lastIdentifiers = newLastIdentifiers;\n  };\n};\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {

eval("\n\nvar memo = {};\n/* istanbul ignore next  */\n\nfunction getTarget(target) {\n  if (typeof memo[target] === \"undefined\") {\n    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself\n\n    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {\n      try {\n        // This will throw an exception if access to iframe is blocked\n        // due to cross-origin restrictions\n        styleTarget = styleTarget.contentDocument.head;\n      } catch (e) {\n        // istanbul ignore next\n        styleTarget = null;\n      }\n    }\n\n    memo[target] = styleTarget;\n  }\n\n  return memo[target];\n}\n/* istanbul ignore next  */\n\n\nfunction insertBySelector(insert, style) {\n  var target = getTarget(insert);\n\n  if (!target) {\n    throw new Error(\"Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.\");\n  }\n\n  target.appendChild(style);\n}\n\nmodule.exports = insertBySelector;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertBySelector.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction insertStyleElement(options) {\n  var element = document.createElement(\"style\");\n  options.setAttributes(element, options.attributes);\n  options.insert(element, options.options);\n  return element;\n}\n\nmodule.exports = insertStyleElement;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/insertStyleElement.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("\n\n/* istanbul ignore next  */\nfunction setAttributesWithoutAttributes(styleElement) {\n  var nonce =  true ? __webpack_require__.nc : 0;\n\n  if (nonce) {\n    styleElement.setAttribute(\"nonce\", nonce);\n  }\n}\n\nmodule.exports = setAttributesWithoutAttributes;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction apply(styleElement, options, obj) {\n  var css = \"\";\n\n  if (obj.supports) {\n    css += \"@supports (\".concat(obj.supports, \") {\");\n  }\n\n  if (obj.media) {\n    css += \"@media \".concat(obj.media, \" {\");\n  }\n\n  var needLayer = typeof obj.layer !== \"undefined\";\n\n  if (needLayer) {\n    css += \"@layer\".concat(obj.layer.length > 0 ? \" \".concat(obj.layer) : \"\", \" {\");\n  }\n\n  css += obj.css;\n\n  if (needLayer) {\n    css += \"}\";\n  }\n\n  if (obj.media) {\n    css += \"}\";\n  }\n\n  if (obj.supports) {\n    css += \"}\";\n  }\n\n  var sourceMap = obj.sourceMap;\n\n  if (sourceMap && typeof btoa !== \"undefined\") {\n    css += \"\\n/*# sourceMappingURL=data:application/json;base64,\".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), \" */\");\n  } // For old IE\n\n  /* istanbul ignore if  */\n\n\n  options.styleTagTransform(css, styleElement, options.options);\n}\n\nfunction removeStyleElement(styleElement) {\n  // istanbul ignore if\n  if (styleElement.parentNode === null) {\n    return false;\n  }\n\n  styleElement.parentNode.removeChild(styleElement);\n}\n/* istanbul ignore next  */\n\n\nfunction domAPI(options) {\n  var styleElement = options.insertStyleElement(options);\n  return {\n    update: function update(obj) {\n      apply(styleElement, options, obj);\n    },\n    remove: function remove() {\n      removeStyleElement(styleElement);\n    }\n  };\n}\n\nmodule.exports = domAPI;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleDomAPI.js?");

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {

eval("\n\n/* istanbul ignore next  */\nfunction styleTagTransform(css, styleElement) {\n  if (styleElement.styleSheet) {\n    styleElement.styleSheet.cssText = css;\n  } else {\n    while (styleElement.firstChild) {\n      styleElement.removeChild(styleElement.firstChild);\n    }\n\n    styleElement.appendChild(document.createTextNode(css));\n  }\n}\n\nmodule.exports = styleTagTransform;\n\n//# sourceURL=webpack://restaurantpage/./node_modules/style-loader/dist/runtime/styleTagTransform.js?");

/***/ }),

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

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _pages_homePage__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./pages/homePage */ \"./src/pages/homePage.js\");\n/* harmony import */ var _functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./functions/elementGenerator */ \"./src/functions/elementGenerator.js\");\n/* harmony import */ var _pages_menuPage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./pages/menuPage */ \"./src/pages/menuPage.js\");\n/* harmony import */ var _pages_contactPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./pages/contactPage */ \"./src/pages/contactPage.js\");\n/* harmony import */ var _style_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./style.css */ \"./src/style.css\");\n\n\n\n\n\n\n// construct title\nconst title = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__.generateTextElement)(\"h1\", \"title\", \"The Bakery\");\n\n// construct navbar\nconst navbar = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__.generateEmptyDiv)(\"navbar\");\nconst homeButton = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__.generateTextElement)(\"button\", \"button button-home\", \"Home\");\nconst menuButton = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__.generateTextElement)(\"button\", \"button button-menu\", \"Menu\");\nconst contactButton = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_1__.generateTextElement)(\"button\", \"button button-contact\", \"Contact\");\n\n// get pages\nconst homePage = (0,_pages_homePage__WEBPACK_IMPORTED_MODULE_0__[\"default\"])();\nconst menuPage = (0,_pages_menuPage__WEBPACK_IMPORTED_MODULE_2__[\"default\"])();\nconst contactPage = (0,_pages_contactPage__WEBPACK_IMPORTED_MODULE_3__[\"default\"])();\n\n// helper function to hide inactive pages and show relevant page\nfunction show(activePage) {\n  [homePage, menuPage, contactPage].forEach((page) => page.classList.add(\"hide\"));\n\n  activePage.classList.remove(\"hide\");\n}\n\n// helper function to add event listener to show page when clicking a button\nfunction bindPage(button, page) {\n  button.addEventListener(\"click\", () => show(page));\n}\n\n// adds event listener to every button\nbindPage(homeButton, homePage);\nbindPage(menuButton, menuPage);\nbindPage(contactButton, contactPage);\n\n// Append elements to content page\nconst content = document.getElementById(\"content\");\nnavbar.append(homeButton, menuButton, contactButton);\ncontent.append(title, navbar);\ncontent.append(homePage, menuPage, contactPage);\n\n// testing\nshow(contactPage);\n\n\n//# sourceURL=webpack://restaurantpage/./src/index.js?");

/***/ }),

/***/ "./src/pages/contactPage.js":
/*!**********************************!*\
  !*** ./src/pages/contactPage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getContactPage)\n/* harmony export */ });\n/* harmony import */ var _images_person1_jpeg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../images/person1.jpeg */ \"./src/images/person1.jpeg\");\n/* harmony import */ var _images_person2_jpeg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/person2.jpeg */ \"./src/images/person2.jpeg\");\n/* harmony import */ var _images_person3_jpeg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/person3.jpeg */ \"./src/images/person3.jpeg\");\n/* harmony import */ var _functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../functions/elementGenerator */ \"./src/functions/elementGenerator.js\");\n//TODO: Implement contact page\n\n\n\n\n\n\n\nfunction getContactPage() {\n  const page = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateEmptyDiv)(\"contact page hide\");\n\n  const desc1 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateTextElement)(\n    \"h2\",\n    \"description\",\n    \"This is the place that you contact us\"\n  );\n\n  const person1 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateEmptyDiv)(\"person\");\n  const person2 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateEmptyDiv)(\"person\");\n  const person3 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateEmptyDiv)(\"person\");\n\n  const personImg1 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateImageElement)(\"person-image\", _images_person1_jpeg__WEBPACK_IMPORTED_MODULE_0__);\n  const personImg2 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateImageElement)(\"person-image\", _images_person2_jpeg__WEBPACK_IMPORTED_MODULE_1__);\n  const personImg3 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateImageElement)(\"person-image\", _images_person3_jpeg__WEBPACK_IMPORTED_MODULE_2__);\n\n  const personName1 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateTextElement)(\"h3\", \"person-name\", \"James\");\n  const personName2 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateTextElement)(\"h3\", \"person-name\", \"Karen\");\n  const personName3 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateTextElement)(\"h3\", \"person-name\", \"Tracy\");\n\n  person1.append(personImg1, personName1);\n  person2.append(personImg2, personName2);\n  person3.append(personImg3, personName3);\n\n  const people = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateEmptyDiv)(\"contact-items\");\n  people.append(person1, person2, person3);\n\n  const footer = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_3__.generateTextElement)(\"p\", \"footer\", \"None of us exist.\")\n\n  page.append(desc1, people, footer );\n\n  return page;\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/pages/contactPage.js?");

/***/ }),

/***/ "./src/pages/homePage.js":
/*!*******************************!*\
  !*** ./src/pages/homePage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getHomePage)\n/* harmony export */ });\n/* harmony import */ var _functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/elementGenerator */ \"./src/functions/elementGenerator.js\");\n/* harmony import */ var _images_breadsByPixabay_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/breadsByPixabay.jpg */ \"./src/images/breadsByPixabay.jpg\");\n\n\n\nfunction getHomePage() {\n  const page = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateEmptyDiv)(\"home page\");\n\n  const desc1 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateTextElement)(\n    \"h2\",\n    \"description\",\n    \"This is the place that sells bread\"\n  );\n  const desc2 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateTextElement)(\n    \"p\",\n    \"description\",\n    \"We're very excited to offer you tons of bread, and a little butter to go along\"\n  );\n  const desc3 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateTextElement)(\n    \"p\",\n    \"description\",\n    \"This bread place has been in business for over 15000 years. That's right, we're older than civilization.\"\n  );\n  const bread = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateImageElement)(\"bakery\", _images_breadsByPixabay_jpg__WEBPACK_IMPORTED_MODULE_1__);\n\n  page.append(desc1, desc2, desc3, bread);\n\n  return page;\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/pages/homePage.js?");

/***/ }),

/***/ "./src/pages/menuPage.js":
/*!*******************************!*\
  !*** ./src/pages/menuPage.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ getMenuPage)\n/* harmony export */ });\n/* harmony import */ var _functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../functions/elementGenerator */ \"./src/functions/elementGenerator.js\");\n/* harmony import */ var _images_banana_bread_JernajaR_jpg__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../images/banana-bread-JernajaR.jpg */ \"./src/images/banana-bread-JernajaR.jpg\");\n/* harmony import */ var _images_croissant_Photowill_jpg__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../images/croissant-Photowill.jpg */ \"./src/images/croissant-Photowill.jpg\");\n/* harmony import */ var _images_cappuccino_gadost0_jpg__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../images/cappuccino-gadost0.jpg */ \"./src/images/cappuccino-gadost0.jpg\");\n\n\n\n\n\nfunction getMenuPage() {\n  const page = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateEmptyDiv)(\"menu page hide\");\n\n  const desc1 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateTextElement)(\"h2\", \"description\", \"This is the menu page\");\n  const desc2 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateTextElement)(\"p\", \"description\", \"Check it out\");\n\n  const item1 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateEmptyDiv)(\"item\");\n  const item2 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateEmptyDiv)(\"item\");\n  const item3 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateEmptyDiv)(\"item\");\n\n  const image1 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateImageElement)(\"item-image\", _images_banana_bread_JernajaR_jpg__WEBPACK_IMPORTED_MODULE_1__);\n  const image2 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateImageElement)(\"item-image\", _images_croissant_Photowill_jpg__WEBPACK_IMPORTED_MODULE_2__);\n  const image3 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateImageElement)(\"item-image\", _images_cappuccino_gadost0_jpg__WEBPACK_IMPORTED_MODULE_3__);\n\n  const legend1 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateTextElement)(\"p\", \"item-legend\", \"Banana Bread - $139.99\");\n  const legend2 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateTextElement)(\"p\", \"item-legend\", \"Croissant (unit) - $269.99\");\n  const legend3 = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateTextElement)(\"p\", \"item-legend\", \"Cappuccino - $49.99\");\n\n  item1.append(image1, legend1);\n  item2.append(image2, legend2);\n  item3.append(image3, legend3);\n\n  const items = (0,_functions_elementGenerator__WEBPACK_IMPORTED_MODULE_0__.generateEmptyDiv)(\"menu-items\");\n  items.append(item1, item2, item3);\n\n  page.append(desc1, desc2, items);\n\n  return page;\n}\n\n\n//# sourceURL=webpack://restaurantpage/./src/pages/menuPage.js?");

/***/ }),

/***/ "./src/images/banana-bread-JernajaR.jpg":
/*!**********************************************!*\
  !*** ./src/images/banana-bread-JernajaR.jpg ***!
  \**********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ea5ea961287f0c1008c2.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/banana-bread-JernajaR.jpg?");

/***/ }),

/***/ "./src/images/breadsByPixabay.jpg":
/*!****************************************!*\
  !*** ./src/images/breadsByPixabay.jpg ***!
  \****************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"be6e04026b71c47e39a4.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/breadsByPixabay.jpg?");

/***/ }),

/***/ "./src/images/cappuccino-gadost0.jpg":
/*!*******************************************!*\
  !*** ./src/images/cappuccino-gadost0.jpg ***!
  \*******************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"d851acd055b3b9aeab5f.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/cappuccino-gadost0.jpg?");

/***/ }),

/***/ "./src/images/croissant-Photowill.jpg":
/*!********************************************!*\
  !*** ./src/images/croissant-Photowill.jpg ***!
  \********************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f15e894ee80acbaa68e1.jpg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/croissant-Photowill.jpg?");

/***/ }),

/***/ "./src/images/person1.jpeg":
/*!*********************************!*\
  !*** ./src/images/person1.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"ee6c5d161acaa95d0298.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/person1.jpeg?");

/***/ }),

/***/ "./src/images/person2.jpeg":
/*!*********************************!*\
  !*** ./src/images/person2.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"f3969af5605c75fb5f20.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/person2.jpeg?");

/***/ }),

/***/ "./src/images/person3.jpeg":
/*!*********************************!*\
  !*** ./src/images/person3.jpeg ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

eval("module.exports = __webpack_require__.p + \"71c0911baddf4693d44e.jpeg\";\n\n//# sourceURL=webpack://restaurantpage/./src/images/person3.jpeg?");

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
/******/ 			id: moduleId,
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
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
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