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
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/index.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/@babel/runtime/helpers/extends.js":
/*!********************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/extends.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  module.exports["default"] = module.exports, module.exports.__esModule = true;
  return _extends.apply(this, arguments);
}

module.exports = _extends;
module.exports["default"] = module.exports, module.exports.__esModule = true;

/***/ }),

/***/ "./node_modules/classnames/index.js":
/*!******************************************!*\
  !*** ./node_modules/classnames/index.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames() {
		var classes = [];

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (!arg) continue;

			var argType = typeof arg;

			if (argType === 'string' || argType === 'number') {
				classes.push(arg);
			} else if (Array.isArray(arg)) {
				if (arg.length) {
					var inner = classNames.apply(null, arg);
					if (inner) {
						classes.push(inner);
					}
				}
			} else if (argType === 'object') {
				if (arg.toString === Object.prototype.toString) {
					for (var key in arg) {
						if (hasOwn.call(arg, key) && arg[key]) {
							classes.push(key);
						}
					}
				} else {
					classes.push(arg.toString());
				}
			}
		}

		return classes.join(' ');
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}
}());


/***/ }),

/***/ "./src/assets/img/hero.png":
/*!*********************************!*\
  !*** ./src/assets/img/hero.png ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/hero.d85385a0.png");

/***/ }),

/***/ "./src/assets/img/student.png":
/*!************************************!*\
  !*** ./src/assets/img/student.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "images/student.0cc96be2.png");

/***/ }),

/***/ "./src/faq/block.json":
/*!****************************!*\
  !*** ./src/faq/block.json ***!
  \****************************/
/*! exports provided: apiVersion, version, textdomain, name, title, icon, className, description, parent, keywords, supports, attributes, variations, styles, example, script, style, editorScript, editorStyle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"version\":\"1.0.0\",\"textdomain\":\"site-functionality\",\"name\":\"site-functionality/faq\",\"title\":\"FAQ\",\"icon\":\"admin-comments\",\"className\":\"faq\",\"description\":\"FAQ question and answer\",\"parent\":[\"site-functionality/faqs\"],\"keywords\":[\"faq\",\"accordion\"],\"supports\":{\"align\":false,\"anchor\":true,\"color\":{\"background\":false,\"text\":false,\"gradients\":false,\"link\":false},\"customClassName\":true,\"defaultStylePicker\":false,\"__experimentalLayout\":false},\"attributes\":{\"question\":{\"type\":\"string\"},\"answer\":{\"type\":\"string\"}},\"variations\":[],\"styles\":[],\"example\":{},\"script\":\"site-functionality\",\"style\":\"file:../../build/style-index.css\",\"editorScript\":\"file:../../build/index.js\",\"editorStyle\":\"file:../../build/index.css\"}");

/***/ }),

/***/ "./src/faq/edit.js":
/*!*************************!*\
  !*** ./src/faq/edit.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _icon__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./icon */ "./src/faq/icon.js");





const ALLOWED_FORMATS = ['core/bold', 'core/link'];

const Edit = props => {
  const {
    attributes: {
      question,
      answer
    },
    className,
    setAttributes,
    onSelect,
    isActive
  } = props;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])({
    className: 'faq'
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("article", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "faq__question question"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: "h3",
    value: question,
    onChange: value => {
      setAttributes({
        question: value
      });
    },
    isActive: isActive,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add Question...', 'site-functionality')
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("a", {
    href: "#",
    className: "chevron"
  }, _icon__WEBPACK_IMPORTED_MODULE_4__["default"])), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", {
    className: "faq__answer answer"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["RichText"], {
    tagName: "div",
    className: "answer-wrapper",
    value: answer,
    onChange: value => {
      setAttributes({
        answer: value
      });
    },
    isActive: isActive,
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add Answer...', 'site-functionality'),
    multiline: "p",
    allowedFormats: ALLOWED_FORMATS
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/faq/icon.js":
/*!*************************!*\
  !*** ./src/faq/icon.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/primitives */ "@wordpress/primitives");
/* harmony import */ var _wordpress_primitives__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__);


/**
 * WordPress dependencies
 */

const icon = Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["SVG"], {
  width: "27",
  height: "42",
  viewBox: "0 0 27 42",
  fill: "none",
  xmlns: "http://www.w3.org/2000/SVG"
}, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_primitives__WEBPACK_IMPORTED_MODULE_1__["Path"], {
  "fill-rule": "evenodd",
  "clip-rule": "evenodd",
  d: "M0.499999 5.28333L5.41892 0.500001L26.5 21L5.41891 41.5L0.499994 36.7167L16.6622 21L0.499999 5.28333Z",
  fill: "white"
}));
/* harmony default export */ __webpack_exports__["default"] = (icon);

/***/ }),

/***/ "./src/faq/index.js":
/*!**************************!*\
  !*** ./src/faq/index.js ***!
  \**************************/
/*! exports provided: name, category, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/faq/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/faq/block.json", 1);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/faq/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/faq/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */




const {
  name,
  category
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
const settings = {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"]
};


/***/ }),

/***/ "./src/faq/save.js":
/*!*************************!*\
  !*** ./src/faq/save.js ***!
  \*************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


const Save = props => {
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/faqs/block.json":
/*!*****************************!*\
  !*** ./src/faqs/block.json ***!
  \*****************************/
/*! exports provided: apiVersion, version, textdomain, name, title, category, collection, icon, className, description, keywords, supports, attributes, variations, styles, example, script, style, editorScript, editorStyle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"version\":\"1.0.0\",\"textdomain\":\"site-functionality\",\"name\":\"site-functionality/faqs\",\"title\":\"FAQs\",\"category\":\"components\",\"collection\":\"site-functionality\",\"icon\":\"format-chat\",\"className\":\"faq-list\",\"description\":\"Display FAQs on page\",\"keywords\":[\"faqs\",\"accorion\"],\"supports\":{\"align\":false,\"anchor\":true,\"color\":{\"background\":true,\"text\":true,\"gradients\":false,\"link\":false},\"customClassName\":true,\"defaultStylePicker\":false,\"__experimentalLayout\":false},\"attributes\":{},\"variations\":[],\"styles\":[],\"example\":{},\"script\":\"site-functionality\",\"style\":\"file:../../build/style-index.css\",\"editorScript\":\"file:../../build/index.js\",\"editorStyle\":\"file:../../build/index.css\"}");

/***/ }),

/***/ "./src/faqs/edit.js":
/*!**************************!*\
  !*** ./src/faqs/edit.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_3__);




const TEMPLATE = [['site-functionality/faq', {
  placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_2__["__"])('Add FAQ...', 'site-functionality'),
  className: 'faq'
}, []]];
const ALLOWED_BLOCKS = ['site-functionality/faq'];

const Edit = props => {
  const {
    className,
    setAttributes
  } = props;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_3___default()(className, 'faq-list')
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/faqs/index.js":
/*!***************************!*\
  !*** ./src/faqs/index.js ***!
  \***************************/
/*! exports provided: name, category, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/faqs/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/faqs/block.json", 1);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/faqs/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/faqs/save.js");
/**
 * WordPress dependencies
 */


/**
 * Internal dependencies
 */




const {
  name,
  category
} = _block_json__WEBPACK_IMPORTED_MODULE_2__;
const settings = {
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
};


/***/ }),

/***/ "./src/faqs/save.js":
/*!**************************!*\
  !*** ./src/faqs/save.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);




const Save = props => {
  const {
    className
  } = props;
  const blockProps = _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["useBlockProps"].save({
    className: classnames__WEBPACK_IMPORTED_MODULE_2___default()(className, 'faq-list')
  });
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_0__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_1__["InnerBlocks"].Content, null));
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/hero/block.json":
/*!*****************************!*\
  !*** ./src/hero/block.json ***!
  \*****************************/
/*! exports provided: apiVersion, version, textdomain, name, title, category, collection, icon, className, description, keywords, supports, attributes, variations, styles, example, script, style, editorScript, editorStyle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"version\":\"1.0.0\",\"textdomain\":\"site-functionality\",\"name\":\"site-functionality/hero\",\"title\":\"Hero\",\"category\":\"components\",\"collection\":\"site-functionality\",\"icon\":\"slides\",\"className\":\"hero\",\"description\":\"Display a hero element on page\",\"keywords\":[\"hero\",\"landing\"],\"supports\":{\"align\":true,\"anchor\":true,\"color\":{\"background\":true,\"text\":true,\"gradients\":false,\"link\":false},\"customClassName\":true,\"defaultStylePicker\":false,\"__experimentalLayout\":false},\"attributes\":{\"url\":{\"type\":\"string\"},\"id\":{\"type\":\"number\"},\"backgroundColor\":{\"type\":\"string\"}},\"variations\":[],\"styles\":[{\"name\":\"default\",\"label\":\"Default\",\"isDefault\":true},{\"name\":\"other\",\"label\":\"Other\"}],\"example\":{\"attributes\":{\"url\":\"https://example.com/image.jpg\"}},\"script\":\"site-functionality\",\"style\":\"file:../../build/style-index.css\",\"editorScript\":\"file:../../build/index.js\",\"editorStyle\":\"file:../../build/index.css\"}");

/***/ }),

/***/ "./src/hero/edit.js":
/*!**************************!*\
  !*** ./src/hero/edit.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_5__);






const BUTTON_ATTRS = '../attributes/buttons';
const ALLOWED_MEDIA_TYPES = ['image'];
const TEMPLATE = [['core/heading', {
  placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Add Heading...', 'site-functionality'),
  level: 2,
  className: 'hero__title h1'
}, []], ['core/paragraph', {
  placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Add Content...', 'site-functionality'),
  className: 'hero__content'
}, []], ['core/buttons', {
  className: 'hero__buttons'
}, [['core/button', BUTTON_ATTRS, []]]]];
const ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/buttons'];

const Edit = props => {
  const {
    attributes: {
      url,
      id
    },
    className,
    setAttributes
  } = props;
  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'hero')
  });
  const hasImage = url !== undefined;

  const onSelectMedia = media => {
    setAttributes({
      url: media.url,
      id: media.id
    });
  };

  const onClickButton = () => {
    setAttributes({
      url: undefined,
      id: undefined
    });
  };

  let classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    style: {
      backgroundImage: hasImage ? `url( ${url} );` : ``
    },
    "data-url": hasImage ? url : ``
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["PanelBody"], {
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])("Background Image", "site-functionality"),
    initialOpen: true
  }, hasImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("img", {
    className: "wp-block-cover__image-background",
    alt: "",
    src: url
  }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaReplaceFlow"], {
    mediaId: id,
    mediaURL: url,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    accept: "image/*",
    className: "is-secondary",
    onSelect: onSelectMedia,
    name: !url ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Add Image', 'site-functionality') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Replace Image', 'site-functionality')
  }), hasImage && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__["Button"], {
    variant: "link",
    isDestructive: true,
    className: "block-library-cover__reset-button is-link",
    onClick: onClickButton
  }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Remove Image', 'site-functionality')))), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["BlockControls"], {
    group: "other"
  }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["MediaReplaceFlow"], {
    mediaId: id,
    mediaURL: url,
    allowedTypes: ALLOWED_MEDIA_TYPES,
    accept: "image/*",
    onSelect: onSelectMedia,
    name: !url ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Add Image', 'site-functionality') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Replace Image', 'site-functionality')
  })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["InnerBlocks"], {
    allowedBlocks: ALLOWED_BLOCKS,
    template: TEMPLATE,
    templateLock: "all"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/hero/index.js":
/*!***************************!*\
  !*** ./src/hero/index.js ***!
  \***************************/
/*! exports provided: name, category, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/hero/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/hero/block.json", 1);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/hero/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./save */ "./src/hero/save.js");
/**
 * WordPress dependencies
 */

/**
 * Internal dependencies
 */



 // registerBlockType( metadata.name, {
//     edit: Edit,
//     save: Save,
// } );

const {
  name,
  category
} = _block_json__WEBPACK_IMPORTED_MODULE_1__;
const settings = {
  edit: _edit__WEBPACK_IMPORTED_MODULE_2__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_3__["default"]
};


/***/ }),

/***/ "./src/hero/save.js":
/*!**************************!*\
  !*** ./src/hero/save.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_0__);


const Save = props => {
  // return <InnerBlocks.Content />;
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! exports provided: registerBlocks */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "registerBlocks", function() { return registerBlocks; });
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/variations/index.js");
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./patterns */ "./src/patterns/index.js");
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_patterns__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./hero */ "./src/hero/index.js");
/* harmony import */ var _faqs__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./faqs */ "./src/faqs/index.js");
/* harmony import */ var _faq__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./faq */ "./src/faq/index.js");


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockCollection"])('site-functionality', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Debt Collective', 'site-functionality')
});





const blocks = [_hero__WEBPACK_IMPORTED_MODULE_4__, _faqs__WEBPACK_IMPORTED_MODULE_5__, _faq__WEBPACK_IMPORTED_MODULE_6__];
/**
 * Function to register an individual block.
 *
 * @param {Object} block The block to be registered.
 *
 */

const registerBlock = block => {
  if (!block) {
    return;
  }

  const {
    name,
    settings
  } = block;
  Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(name, { ...settings
  });
};
/**
 * Function to register blocks
 */


const registerBlocks = () => {
  blocks.forEach(registerBlock);
};
registerBlocks();

/***/ }),

/***/ "./src/patterns/index.js":
/*!*******************************!*\
  !*** ./src/patterns/index.js ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/variations/banners.js":
/*!***********************************!*\
  !*** ./src/variations/banners.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_student_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/student.png */ "./src/assets/img/student.png");



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockVariation"])('core/columns', [{
  name: 'banner-media',
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Media Banner', 'site-functionality'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('A banner that displays a media item on the left and text on the right.', 'site-functionality'),
  attributes: {
    className: 'banner',
    backgroundColor: 'canary',
    verticalAlignment: 'center'
  },
  innerBlocks: [['core/column', {
    width: '33.33%',
    verticalAlignment: 'top'
  }, [['core/embed', {
    type: "video",
    providerNameSlug: "youtube",
    responsive: true,
    className: "wp-embed-aspect-16-9 wp-has-aspect-ratio banner__media"
  }]]], ['core/column', {
    width: '66.66%',
    verticalAlignment: 'top'
  }, [['core/heading', {
    level: 2,
    className: 'banner__heading',
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add Heading...', 'site-functionality')
  }], ['core/paragraph', {
    className: 'banner__content',
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add content...', 'site-functionality')
  }]]]],
  example: {
    attributes: {
      className: 'banner',
      backgroundColor: 'canary'
    },
    innerBlocks: [{
      name: 'core/column',
      attributes: {
        width: '33.33%',
        verticalAlignment: 'top'
      },
      innerBlocks: [{
        name: 'core/embed',
        attributes: {
          type: "video",
          providerNameSlug: "youtube",
          responsive: true,
          className: "wp-embed-aspect-16-9 wp-has-aspect-ratio banner__media",
          url: 'https://youtu.be/PyLDFT2GW-A'
        }
      }]
    }, {
      name: 'core/column',
      attributes: {
        width: '66.66%',
        verticalAlignment: 'top'
      },
      innerBlocks: [{
        name: 'core/heading',
        attributes: {
          level: 2,
          className: 'banner__heading',
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Our Movement Has <em>Abolished</em> More Than <em>$2.8 Billion</em>', 'site-functionality')
        }
      }, {
        name: 'core/paragraph',
        attributes: {
          className: 'banner__content',
          placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('in student debt, medical debt, payday loans, probation debt and credit card debt. Our student debt campaign put full student debt cancellation and free public college on the political map.', 'site-functionality')
        }
      }]
    }]
  }
}]);

/***/ }),

/***/ "./src/variations/buttons.js":
/*!***********************************!*\
  !*** ./src/variations/buttons.js ***!
  \***********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockVariation"])('core/buttons', [{
  name: 'large',
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Large Button', 'site-functionality'),
  attributes: {
    className: 'is-large'
  }
}]);

/***/ }),

/***/ "./src/variations/cover.js":
/*!*********************************!*\
  !*** ./src/variations/cover.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_hero_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/hero.png */ "./src/assets/img/hero.png");



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockVariation"])('core/cover', [{
  name: 'hero',
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Hero', 'site-functionality'),
  attributes: {
    className: 'hero',
    contentPosition: 'top left',
    url: _assets_img_hero_png__WEBPACK_IMPORTED_MODULE_2__["default"]
  },
  innerBlocks: [['core/heading', {
    className: 'hero__heading h1',
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add Heading...', 'site-functionality')
  }], ['core/paragraph', {
    className: 'hero__content',
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add content...', 'site-functionality')
  }], ['core/buttons', {
    style: 'large'
  }, [['core/button', {
    className: 'hero__button'
  }]]]],
  example: {
    attributes: {
      contentPosition: 'top left',
      url: _assets_img_hero_png__WEBPACK_IMPORTED_MODULE_2__["default"]
    },
    innerBlocks: [{
      name: 'core/heading',
      attributes: {
        level: 2,
        className: 'hero__heading',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.', 'site-functionality')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        className: 'hero__content',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('We are a debtors\' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'site-functionality')
      }
    }, {
      name: 'core/buttons',
      attributes: {
        className: 'hero__buttons'
      },
      innerBlocks: [{
        name: 'core/button',
        attributes: {
          className: 'hero__button',
          style: 'large',
          content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Join the Union', 'site-functionality')
        }
      }]
    }]
  }
}]);

/***/ }),

/***/ "./src/variations/index.js":
/*!*********************************!*\
  !*** ./src/variations/index.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _banners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banners */ "./src/variations/banners.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/variations/buttons.js");
/* harmony import */ var _cover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cover */ "./src/variations/cover.js");
/* harmony import */ var _touts__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./touts */ "./src/variations/touts.js");





/***/ }),

/***/ "./src/variations/touts.js":
/*!*********************************!*\
  !*** ./src/variations/touts.js ***!
  \*********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _assets_img_student_png__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../assets/img/student.png */ "./src/assets/img/student.png");



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockVariation"])('core/cover', [{
  name: 'tout',
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Tout', 'site-functionality'),
  category: 'components',
  icon: 'format-image',
  description: "Display a callout element on page",
  attributes: {
    className: 'tout'
  },
  innerBlocks: [['core/group', {}, [['core/heading', {
    level: 3,
    className: 'tout__heading h2',
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add Heading...', 'site-functionality')
  }], ['core/paragraph', {
    className: 'tout__content',
    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Add content...', 'site-functionality')
  }]]]],
  example: {
    attributes: {
      className: 'tout',
      url: _assets_img_student_png__WEBPACK_IMPORTED_MODULE_2__["default"],
      backgroundColor: 'canary'
    },
    innerBlocks: [{
      name: 'core/heading',
      attributes: {
        level: 3,
        className: 'tout__heading',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Cancel Student Debt Today!', 'site-functionality')
      }
    }, {
      name: 'core/paragraph',
      attributes: {
        className: 'tout__content',
        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('The President can cancel all federal student loans through executive order. It\'s not a magic trick; with the flick of his pen he can legally make all federal student loan debt disappear!', 'site-functionality')
      }
    }]
  }
}]);

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blockEditor"]; }());

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["components"]; }());

/***/ }),

/***/ "@wordpress/element":
/*!*********************************!*\
  !*** external ["wp","element"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["element"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "@wordpress/primitives":
/*!************************************!*\
  !*** external ["wp","primitives"] ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["primitives"]; }());

/***/ })

/******/ });
//# sourceMappingURL=index.js.map