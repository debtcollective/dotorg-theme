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
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "63adee5575f5e2b8066cb5597f67d3bb.png");

/***/ }),

/***/ "./src/assets/img/student.png":
/*!************************************!*\
  !*** ./src/assets/img/student.png ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (__webpack_require__.p + "f58a009a9fe3486f0f7f4199a9fc9ee1.png");

/***/ }),

/***/ "./src/hero/block.json":
/*!*****************************!*\
  !*** ./src/hero/block.json ***!
  \*****************************/
/*! exports provided: apiVersion, version, textdomain, editorScript, name, title, category, collection, icon, className, description, keywords, supports, attributes, variations, styles, example, style, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"version\":\"1.0.0\",\"textdomain\":\"site-functionality\",\"editorScript\":\"file:../build/index.js\",\"name\":\"site-functionality/hero\",\"title\":\"Hero Block\",\"category\":\"widget\",\"collection\":\"site-functionality\",\"icon\":\"slides\",\"className\":\"hero\",\"description\":\"Display a hero element on page\",\"keywords\":[\"hero\",\"landing\"],\"supports\":{\"align\":true,\"anchor\":true,\"color\":{\"background\":true,\"text\":true,\"gradients\":false,\"link\":false},\"customClassName\":true,\"defaultStylePicker\":false,\"__experimentalLayout\":false},\"attributes\":{\"url\":{\"type\":\"string\"},\"id\":{\"type\":\"number\"},\"backgroundColor\":{\"type\":\"string\"}},\"variations\":[],\"styles\":[{\"name\":\"default\",\"label\":\"Default\",\"isDefault\":true},{\"name\":\"other\",\"label\":\"Other\"}],\"example\":{\"attributes\":{\"url\":\"https://example.com/image.jpg\"}},\"style\":\"wp-block-site-functionality-hero\"}");

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






var BUTTON_ATTRS = '../attributes/buttons';
var ALLOWED_MEDIA_TYPES = ['image'];
var TEMPLATE = [['core/heading', {
  placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Add Heading...', 'site-functionality'),
  level: 2,
  className: 'hero__title h1'
}, []], ['core/paragraph', {
  placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_4__["__"])('Add Content...', 'site-functionality'),
  className: 'hero__content'
}, []], ['core/buttons', {
  className: 'hero__buttons'
}, [['core/button', BUTTON_ATTRS, []]]]];
var ALLOWED_BLOCKS = ['core/heading', 'core/paragraph', 'core/buttons'];

var Edit = function Edit(props) {
  var _props$attributes = props.attributes,
      url = _props$attributes.url,
      id = _props$attributes.id,
      className = props.className,
      setAttributes = props.setAttributes;
  var blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__["useBlockProps"])({
    className: classnames__WEBPACK_IMPORTED_MODULE_5___default()(className, 'hero')
  });
  var hasImage = url !== undefined;

  var onSelectMedia = function onSelectMedia(media) {
    setAttributes({
      url: media.url,
      id: media.id
    });
  };

  var onClickButton = function onClickButton() {
    setAttributes({
      url: undefined,
      id: undefined
    });
  };

  var classes = classnames__WEBPACK_IMPORTED_MODULE_5___default()();
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, blockProps, {
    style: {
      backgroundImage: hasImage ? "url( ".concat(url, " );") : ""
    },
    "data-url": hasImage ? url : ""
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
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./block.json */ "./src/hero/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_2___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/hero/block.json", 1);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./edit */ "./src/hero/edit.js");
/* harmony import */ var _save__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./save */ "./src/hero/save.js");





Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockType"])(_block_json__WEBPACK_IMPORTED_MODULE_2__.name, {
  apiVersion: _block_json__WEBPACK_IMPORTED_MODULE_2__.apiVersion,
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])(_block_json__WEBPACK_IMPORTED_MODULE_2__.title, 'site-functionality'),
  description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])(_block_json__WEBPACK_IMPORTED_MODULE_2__.description, 'site-functionality'),
  icon: _block_json__WEBPACK_IMPORTED_MODULE_2__.icon,
  category: _block_json__WEBPACK_IMPORTED_MODULE_2__.category,
  keywords: _block_json__WEBPACK_IMPORTED_MODULE_2__.keywords,
  attributes: _block_json__WEBPACK_IMPORTED_MODULE_2__.attributes,
  collection: _block_json__WEBPACK_IMPORTED_MODULE_2__.collection,
  styles: _block_json__WEBPACK_IMPORTED_MODULE_2__.styles,
  supports: _block_json__WEBPACK_IMPORTED_MODULE_2__.supports,
  example: _block_json__WEBPACK_IMPORTED_MODULE_2__.example,
  edit: _edit__WEBPACK_IMPORTED_MODULE_3__["default"],
  save: _save__WEBPACK_IMPORTED_MODULE_4__["default"]
});

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


var Save = function Save(props) {
  // return <InnerBlocks.Content />;
  return null;
};

/* harmony default export */ __webpack_exports__["default"] = (Save);

/***/ }),

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/variations/index.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./hero */ "./src/hero/index.js");


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockCollection"])('site-functionality', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Debt Collective', 'site-functionality')
});



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
    url: 'https://s.w.org/images/core/5.3/Windbuchencom.jpg'
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
  attributes: {
    className: 'tout',
    url: _assets_img_student_png__WEBPACK_IMPORTED_MODULE_2__["default"],
    backgroundColor: 'mint'
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

/***/ })

/******/ });
//# sourceMappingURL=index.js.map