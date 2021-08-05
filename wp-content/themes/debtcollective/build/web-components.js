/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/js/web-components/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@debtcollective/dc-header-component/dist/header/header.esm.js":
/*!************************************************************************************!*\
  !*** ./node_modules/@debtcollective/dc-header-component/dist/header/header.esm.js ***!
  \************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

throw new Error("Module parse failed: Unexpected token (1:63)\nYou may need an appropriate loader to handle this file type, currently no loaders are configured to process this file. See https://webpack.js.org/concepts#loaders\n> import{p as e,b as l}from\"./p-1822b0d8.js\";(()=>{const l=import.meta.url,o={};return\"\"!==l&&(o.resourcesUrl=new URL(\".\",l).href),e(o)})().then((e=>l([[\"p-3fb6bf3a\",[[1,\"dc-header\",{homepage:[1],community:[1],returnurl:[1],logo:[8],logosmall:[8],user:[32],isShrink:[32],scrollTop:[32],isMenuOpen:[32],isProfileMenuOpen:[32]},[[9,\"scroll\",\"handleScroll\"],[0,\"toggleMenu\",\"toggleMenuHandler\"],[0,\"toggleProfileMenu\",\"toggleProfileMenuHandler\"],[0,\"closeAll\",\"closeAll\"]]],[1,\"dc-menu\",{open:[4],community:[1],homepage:[1],host:[1],user:[16]},[[4,\"keydown\",\"handleEscapeKey\"]]],[1,\"dc-profile\",{shrank:[4],expanded:[4],community:[1],homepage:[1],host:[1],user:[16]},[[4,\"keydown\",\"handleEscapeKey\"]]],[4,\"dc-link\",{to:[1],target:[1],namespace:[1]},[[2,\"click\",\"handleClick\"]]]]]],e)));");

/***/ }),

/***/ "./src/js/web-components/index.js":
/*!****************************************!*\
  !*** ./src/js/web-components/index.js ***!
  \****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _debtcollective_dc_header_component_dist_header_header_esm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @debtcollective/dc-header-component/dist/header/header.esm */ "./node_modules/@debtcollective/dc-header-component/dist/header/header.esm.js");
/* harmony import */ var _debtcollective_dc_header_component_dist_header_header_esm__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_debtcollective_dc_header_component_dist_header_header_esm__WEBPACK_IMPORTED_MODULE_0__);
/**
 * Web Components
 */



/***/ })

/******/ });
//# sourceMappingURL=web-components.js.map