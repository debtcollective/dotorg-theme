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

/***/ "./node_modules/lodash.startcase/index.js":
/*!************************************************!*\
  !*** ./node_modules/lodash.startcase/index.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(global) {/**
 * lodash (Custom Build) <https://lodash.com/>
 * Build: `lodash modularize exports="npm" -o ./`
 * Copyright jQuery Foundation and other contributors <https://jquery.org/>
 * Released under MIT license <https://lodash.com/license>
 * Based on Underscore.js 1.8.3 <http://underscorejs.org/LICENSE>
 * Copyright Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
 */

/** Used as references for various `Number` constants. */
var INFINITY = 1 / 0;

/** `Object#toString` result references. */
var symbolTag = '[object Symbol]';

/** Used to match words composed of alphanumeric characters. */
var reAsciiWord = /[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;

/** Used to match Latin Unicode letters (excluding mathematical operators). */
var reLatin = /[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g;

/** Used to compose unicode character classes. */
var rsAstralRange = '\\ud800-\\udfff',
    rsComboMarksRange = '\\u0300-\\u036f\\ufe20-\\ufe23',
    rsComboSymbolsRange = '\\u20d0-\\u20f0',
    rsDingbatRange = '\\u2700-\\u27bf',
    rsLowerRange = 'a-z\\xdf-\\xf6\\xf8-\\xff',
    rsMathOpRange = '\\xac\\xb1\\xd7\\xf7',
    rsNonCharRange = '\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf',
    rsPunctuationRange = '\\u2000-\\u206f',
    rsSpaceRange = ' \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000',
    rsUpperRange = 'A-Z\\xc0-\\xd6\\xd8-\\xde',
    rsVarRange = '\\ufe0e\\ufe0f',
    rsBreakRange = rsMathOpRange + rsNonCharRange + rsPunctuationRange + rsSpaceRange;

/** Used to compose unicode capture groups. */
var rsApos = "['\u2019]",
    rsAstral = '[' + rsAstralRange + ']',
    rsBreak = '[' + rsBreakRange + ']',
    rsCombo = '[' + rsComboMarksRange + rsComboSymbolsRange + ']',
    rsDigits = '\\d+',
    rsDingbat = '[' + rsDingbatRange + ']',
    rsLower = '[' + rsLowerRange + ']',
    rsMisc = '[^' + rsAstralRange + rsBreakRange + rsDigits + rsDingbatRange + rsLowerRange + rsUpperRange + ']',
    rsFitz = '\\ud83c[\\udffb-\\udfff]',
    rsModifier = '(?:' + rsCombo + '|' + rsFitz + ')',
    rsNonAstral = '[^' + rsAstralRange + ']',
    rsRegional = '(?:\\ud83c[\\udde6-\\uddff]){2}',
    rsSurrPair = '[\\ud800-\\udbff][\\udc00-\\udfff]',
    rsUpper = '[' + rsUpperRange + ']',
    rsZWJ = '\\u200d';

/** Used to compose unicode regexes. */
var rsLowerMisc = '(?:' + rsLower + '|' + rsMisc + ')',
    rsUpperMisc = '(?:' + rsUpper + '|' + rsMisc + ')',
    rsOptLowerContr = '(?:' + rsApos + '(?:d|ll|m|re|s|t|ve))?',
    rsOptUpperContr = '(?:' + rsApos + '(?:D|LL|M|RE|S|T|VE))?',
    reOptMod = rsModifier + '?',
    rsOptVar = '[' + rsVarRange + ']?',
    rsOptJoin = '(?:' + rsZWJ + '(?:' + [rsNonAstral, rsRegional, rsSurrPair].join('|') + ')' + rsOptVar + reOptMod + ')*',
    rsSeq = rsOptVar + reOptMod + rsOptJoin,
    rsEmoji = '(?:' + [rsDingbat, rsRegional, rsSurrPair].join('|') + ')' + rsSeq,
    rsSymbol = '(?:' + [rsNonAstral + rsCombo + '?', rsCombo, rsRegional, rsSurrPair, rsAstral].join('|') + ')';

/** Used to match apostrophes. */
var reApos = RegExp(rsApos, 'g');

/**
 * Used to match [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks) and
 * [combining diacritical marks for symbols](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks_for_Symbols).
 */
var reComboMark = RegExp(rsCombo, 'g');

/** Used to match [string symbols](https://mathiasbynens.be/notes/javascript-unicode). */
var reUnicode = RegExp(rsFitz + '(?=' + rsFitz + ')|' + rsSymbol + rsSeq, 'g');

/** Used to match complex or compound words. */
var reUnicodeWord = RegExp([
  rsUpper + '?' + rsLower + '+' + rsOptLowerContr + '(?=' + [rsBreak, rsUpper, '$'].join('|') + ')',
  rsUpperMisc + '+' + rsOptUpperContr + '(?=' + [rsBreak, rsUpper + rsLowerMisc, '$'].join('|') + ')',
  rsUpper + '?' + rsLowerMisc + '+' + rsOptLowerContr,
  rsUpper + '+' + rsOptUpperContr,
  rsDigits,
  rsEmoji
].join('|'), 'g');

/** Used to detect strings with [zero-width joiners or code points from the astral planes](http://eev.ee/blog/2015/09/12/dark-corners-of-unicode/). */
var reHasUnicode = RegExp('[' + rsZWJ + rsAstralRange  + rsComboMarksRange + rsComboSymbolsRange + rsVarRange + ']');

/** Used to detect strings that need a more robust regexp to match words. */
var reHasUnicodeWord = /[a-z][A-Z]|[A-Z]{2,}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;

/** Used to map Latin Unicode letters to basic Latin letters. */
var deburredLetters = {
  // Latin-1 Supplement block.
  '\xc0': 'A',  '\xc1': 'A', '\xc2': 'A', '\xc3': 'A', '\xc4': 'A', '\xc5': 'A',
  '\xe0': 'a',  '\xe1': 'a', '\xe2': 'a', '\xe3': 'a', '\xe4': 'a', '\xe5': 'a',
  '\xc7': 'C',  '\xe7': 'c',
  '\xd0': 'D',  '\xf0': 'd',
  '\xc8': 'E',  '\xc9': 'E', '\xca': 'E', '\xcb': 'E',
  '\xe8': 'e',  '\xe9': 'e', '\xea': 'e', '\xeb': 'e',
  '\xcc': 'I',  '\xcd': 'I', '\xce': 'I', '\xcf': 'I',
  '\xec': 'i',  '\xed': 'i', '\xee': 'i', '\xef': 'i',
  '\xd1': 'N',  '\xf1': 'n',
  '\xd2': 'O',  '\xd3': 'O', '\xd4': 'O', '\xd5': 'O', '\xd6': 'O', '\xd8': 'O',
  '\xf2': 'o',  '\xf3': 'o', '\xf4': 'o', '\xf5': 'o', '\xf6': 'o', '\xf8': 'o',
  '\xd9': 'U',  '\xda': 'U', '\xdb': 'U', '\xdc': 'U',
  '\xf9': 'u',  '\xfa': 'u', '\xfb': 'u', '\xfc': 'u',
  '\xdd': 'Y',  '\xfd': 'y', '\xff': 'y',
  '\xc6': 'Ae', '\xe6': 'ae',
  '\xde': 'Th', '\xfe': 'th',
  '\xdf': 'ss',
  // Latin Extended-A block.
  '\u0100': 'A',  '\u0102': 'A', '\u0104': 'A',
  '\u0101': 'a',  '\u0103': 'a', '\u0105': 'a',
  '\u0106': 'C',  '\u0108': 'C', '\u010a': 'C', '\u010c': 'C',
  '\u0107': 'c',  '\u0109': 'c', '\u010b': 'c', '\u010d': 'c',
  '\u010e': 'D',  '\u0110': 'D', '\u010f': 'd', '\u0111': 'd',
  '\u0112': 'E',  '\u0114': 'E', '\u0116': 'E', '\u0118': 'E', '\u011a': 'E',
  '\u0113': 'e',  '\u0115': 'e', '\u0117': 'e', '\u0119': 'e', '\u011b': 'e',
  '\u011c': 'G',  '\u011e': 'G', '\u0120': 'G', '\u0122': 'G',
  '\u011d': 'g',  '\u011f': 'g', '\u0121': 'g', '\u0123': 'g',
  '\u0124': 'H',  '\u0126': 'H', '\u0125': 'h', '\u0127': 'h',
  '\u0128': 'I',  '\u012a': 'I', '\u012c': 'I', '\u012e': 'I', '\u0130': 'I',
  '\u0129': 'i',  '\u012b': 'i', '\u012d': 'i', '\u012f': 'i', '\u0131': 'i',
  '\u0134': 'J',  '\u0135': 'j',
  '\u0136': 'K',  '\u0137': 'k', '\u0138': 'k',
  '\u0139': 'L',  '\u013b': 'L', '\u013d': 'L', '\u013f': 'L', '\u0141': 'L',
  '\u013a': 'l',  '\u013c': 'l', '\u013e': 'l', '\u0140': 'l', '\u0142': 'l',
  '\u0143': 'N',  '\u0145': 'N', '\u0147': 'N', '\u014a': 'N',
  '\u0144': 'n',  '\u0146': 'n', '\u0148': 'n', '\u014b': 'n',
  '\u014c': 'O',  '\u014e': 'O', '\u0150': 'O',
  '\u014d': 'o',  '\u014f': 'o', '\u0151': 'o',
  '\u0154': 'R',  '\u0156': 'R', '\u0158': 'R',
  '\u0155': 'r',  '\u0157': 'r', '\u0159': 'r',
  '\u015a': 'S',  '\u015c': 'S', '\u015e': 'S', '\u0160': 'S',
  '\u015b': 's',  '\u015d': 's', '\u015f': 's', '\u0161': 's',
  '\u0162': 'T',  '\u0164': 'T', '\u0166': 'T',
  '\u0163': 't',  '\u0165': 't', '\u0167': 't',
  '\u0168': 'U',  '\u016a': 'U', '\u016c': 'U', '\u016e': 'U', '\u0170': 'U', '\u0172': 'U',
  '\u0169': 'u',  '\u016b': 'u', '\u016d': 'u', '\u016f': 'u', '\u0171': 'u', '\u0173': 'u',
  '\u0174': 'W',  '\u0175': 'w',
  '\u0176': 'Y',  '\u0177': 'y', '\u0178': 'Y',
  '\u0179': 'Z',  '\u017b': 'Z', '\u017d': 'Z',
  '\u017a': 'z',  '\u017c': 'z', '\u017e': 'z',
  '\u0132': 'IJ', '\u0133': 'ij',
  '\u0152': 'Oe', '\u0153': 'oe',
  '\u0149': "'n", '\u017f': 'ss'
};

/** Detect free variable `global` from Node.js. */
var freeGlobal = typeof global == 'object' && global && global.Object === Object && global;

/** Detect free variable `self`. */
var freeSelf = typeof self == 'object' && self && self.Object === Object && self;

/** Used as a reference to the global object. */
var root = freeGlobal || freeSelf || Function('return this')();

/**
 * A specialized version of `_.reduce` for arrays without support for
 * iteratee shorthands.
 *
 * @private
 * @param {Array} [array] The array to iterate over.
 * @param {Function} iteratee The function invoked per iteration.
 * @param {*} [accumulator] The initial value.
 * @param {boolean} [initAccum] Specify using the first element of `array` as
 *  the initial value.
 * @returns {*} Returns the accumulated value.
 */
function arrayReduce(array, iteratee, accumulator, initAccum) {
  var index = -1,
      length = array ? array.length : 0;

  if (initAccum && length) {
    accumulator = array[++index];
  }
  while (++index < length) {
    accumulator = iteratee(accumulator, array[index], index, array);
  }
  return accumulator;
}

/**
 * Converts an ASCII `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function asciiToArray(string) {
  return string.split('');
}

/**
 * Splits an ASCII `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function asciiWords(string) {
  return string.match(reAsciiWord) || [];
}

/**
 * The base implementation of `_.propertyOf` without support for deep paths.
 *
 * @private
 * @param {Object} object The object to query.
 * @returns {Function} Returns the new accessor function.
 */
function basePropertyOf(object) {
  return function(key) {
    return object == null ? undefined : object[key];
  };
}

/**
 * Used by `_.deburr` to convert Latin-1 Supplement and Latin Extended-A
 * letters to basic Latin letters.
 *
 * @private
 * @param {string} letter The matched letter to deburr.
 * @returns {string} Returns the deburred letter.
 */
var deburrLetter = basePropertyOf(deburredLetters);

/**
 * Checks if `string` contains Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a symbol is found, else `false`.
 */
function hasUnicode(string) {
  return reHasUnicode.test(string);
}

/**
 * Checks if `string` contains a word composed of Unicode symbols.
 *
 * @private
 * @param {string} string The string to inspect.
 * @returns {boolean} Returns `true` if a word is found, else `false`.
 */
function hasUnicodeWord(string) {
  return reHasUnicodeWord.test(string);
}

/**
 * Converts `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function stringToArray(string) {
  return hasUnicode(string)
    ? unicodeToArray(string)
    : asciiToArray(string);
}

/**
 * Converts a Unicode `string` to an array.
 *
 * @private
 * @param {string} string The string to convert.
 * @returns {Array} Returns the converted array.
 */
function unicodeToArray(string) {
  return string.match(reUnicode) || [];
}

/**
 * Splits a Unicode `string` into an array of its words.
 *
 * @private
 * @param {string} The string to inspect.
 * @returns {Array} Returns the words of `string`.
 */
function unicodeWords(string) {
  return string.match(reUnicodeWord) || [];
}

/** Used for built-in method references. */
var objectProto = Object.prototype;

/**
 * Used to resolve the
 * [`toStringTag`](http://ecma-international.org/ecma-262/7.0/#sec-object.prototype.tostring)
 * of values.
 */
var objectToString = objectProto.toString;

/** Built-in value references. */
var Symbol = root.Symbol;

/** Used to convert symbols to primitives and strings. */
var symbolProto = Symbol ? Symbol.prototype : undefined,
    symbolToString = symbolProto ? symbolProto.toString : undefined;

/**
 * The base implementation of `_.slice` without an iteratee call guard.
 *
 * @private
 * @param {Array} array The array to slice.
 * @param {number} [start=0] The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the slice of `array`.
 */
function baseSlice(array, start, end) {
  var index = -1,
      length = array.length;

  if (start < 0) {
    start = -start > length ? 0 : (length + start);
  }
  end = end > length ? length : end;
  if (end < 0) {
    end += length;
  }
  length = start > end ? 0 : ((end - start) >>> 0);
  start >>>= 0;

  var result = Array(length);
  while (++index < length) {
    result[index] = array[index + start];
  }
  return result;
}

/**
 * The base implementation of `_.toString` which doesn't convert nullish
 * values to empty strings.
 *
 * @private
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 */
function baseToString(value) {
  // Exit early for strings to avoid a performance hit in some environments.
  if (typeof value == 'string') {
    return value;
  }
  if (isSymbol(value)) {
    return symbolToString ? symbolToString.call(value) : '';
  }
  var result = (value + '');
  return (result == '0' && (1 / value) == -INFINITY) ? '-0' : result;
}

/**
 * Casts `array` to a slice if it's needed.
 *
 * @private
 * @param {Array} array The array to inspect.
 * @param {number} start The start position.
 * @param {number} [end=array.length] The end position.
 * @returns {Array} Returns the cast slice.
 */
function castSlice(array, start, end) {
  var length = array.length;
  end = end === undefined ? length : end;
  return (!start && end >= length) ? array : baseSlice(array, start, end);
}

/**
 * Creates a function like `_.lowerFirst`.
 *
 * @private
 * @param {string} methodName The name of the `String` case method to use.
 * @returns {Function} Returns the new case function.
 */
function createCaseFirst(methodName) {
  return function(string) {
    string = toString(string);

    var strSymbols = hasUnicode(string)
      ? stringToArray(string)
      : undefined;

    var chr = strSymbols
      ? strSymbols[0]
      : string.charAt(0);

    var trailing = strSymbols
      ? castSlice(strSymbols, 1).join('')
      : string.slice(1);

    return chr[methodName]() + trailing;
  };
}

/**
 * Creates a function like `_.camelCase`.
 *
 * @private
 * @param {Function} callback The function to combine each word.
 * @returns {Function} Returns the new compounder function.
 */
function createCompounder(callback) {
  return function(string) {
    return arrayReduce(words(deburr(string).replace(reApos, '')), callback, '');
  };
}

/**
 * Checks if `value` is object-like. A value is object-like if it's not `null`
 * and has a `typeof` result of "object".
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is object-like, else `false`.
 * @example
 *
 * _.isObjectLike({});
 * // => true
 *
 * _.isObjectLike([1, 2, 3]);
 * // => true
 *
 * _.isObjectLike(_.noop);
 * // => false
 *
 * _.isObjectLike(null);
 * // => false
 */
function isObjectLike(value) {
  return !!value && typeof value == 'object';
}

/**
 * Checks if `value` is classified as a `Symbol` primitive or object.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to check.
 * @returns {boolean} Returns `true` if `value` is a symbol, else `false`.
 * @example
 *
 * _.isSymbol(Symbol.iterator);
 * // => true
 *
 * _.isSymbol('abc');
 * // => false
 */
function isSymbol(value) {
  return typeof value == 'symbol' ||
    (isObjectLike(value) && objectToString.call(value) == symbolTag);
}

/**
 * Converts `value` to a string. An empty string is returned for `null`
 * and `undefined` values. The sign of `-0` is preserved.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category Lang
 * @param {*} value The value to process.
 * @returns {string} Returns the string.
 * @example
 *
 * _.toString(null);
 * // => ''
 *
 * _.toString(-0);
 * // => '-0'
 *
 * _.toString([1, 2, 3]);
 * // => '1,2,3'
 */
function toString(value) {
  return value == null ? '' : baseToString(value);
}

/**
 * Deburrs `string` by converting
 * [Latin-1 Supplement](https://en.wikipedia.org/wiki/Latin-1_Supplement_(Unicode_block)#Character_table)
 * and [Latin Extended-A](https://en.wikipedia.org/wiki/Latin_Extended-A)
 * letters to basic Latin letters and removing
 * [combining diacritical marks](https://en.wikipedia.org/wiki/Combining_Diacritical_Marks).
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to deburr.
 * @returns {string} Returns the deburred string.
 * @example
 *
 * _.deburr('déjà vu');
 * // => 'deja vu'
 */
function deburr(string) {
  string = toString(string);
  return string && string.replace(reLatin, deburrLetter).replace(reComboMark, '');
}

/**
 * Converts `string` to
 * [start case](https://en.wikipedia.org/wiki/Letter_case#Stylistic_or_specialised_usage).
 *
 * @static
 * @memberOf _
 * @since 3.1.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the start cased string.
 * @example
 *
 * _.startCase('--foo-bar--');
 * // => 'Foo Bar'
 *
 * _.startCase('fooBar');
 * // => 'Foo Bar'
 *
 * _.startCase('__FOO_BAR__');
 * // => 'FOO BAR'
 */
var startCase = createCompounder(function(result, word, index) {
  return result + (index ? ' ' : '') + upperFirst(word);
});

/**
 * Converts the first character of `string` to upper case.
 *
 * @static
 * @memberOf _
 * @since 4.0.0
 * @category String
 * @param {string} [string=''] The string to convert.
 * @returns {string} Returns the converted string.
 * @example
 *
 * _.upperFirst('fred');
 * // => 'Fred'
 *
 * _.upperFirst('FRED');
 * // => 'FRED'
 */
var upperFirst = createCaseFirst('toUpperCase');

/**
 * Splits `string` into an array of its words.
 *
 * @static
 * @memberOf _
 * @since 3.0.0
 * @category String
 * @param {string} [string=''] The string to inspect.
 * @param {RegExp|string} [pattern] The pattern to match words.
 * @param- {Object} [guard] Enables use as an iteratee for methods like `_.map`.
 * @returns {Array} Returns the words of `string`.
 * @example
 *
 * _.words('fred, barney, & pebbles');
 * // => ['fred', 'barney', 'pebbles']
 *
 * _.words('fred, barney, & pebbles', /[^, ]+/g);
 * // => ['fred', 'barney', '&', 'pebbles']
 */
function words(string, pattern, guard) {
  string = toString(string);
  pattern = guard ? undefined : pattern;

  if (pattern === undefined) {
    return hasUnicodeWord(string) ? unicodeWords(string) : asciiWords(string);
  }
  return string.match(pattern) || [];
}

module.exports = startCase;

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../webpack/buildin/global.js */ "./node_modules/webpack/buildin/global.js")))

/***/ }),

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

var g;

// This works in non-strict mode
g = (function() {
	return this;
})();

try {
	// This works if eval is allowed (see CSP)
	g = g || new Function("return this")();
} catch (e) {
	// This works if the window reference is available
	if (typeof window === "object") g = window;
}

// g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}

module.exports = g;


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
/* harmony import */ var _purchaseAgreements__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./purchaseAgreements */ "./src/purchaseAgreements/index.js");


Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockCollection"])('site-functionality', {
  title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])('Debt Collective', 'site-functionality')
});






const blocks = [_hero__WEBPACK_IMPORTED_MODULE_4__, _faqs__WEBPACK_IMPORTED_MODULE_5__, _faq__WEBPACK_IMPORTED_MODULE_6__, _purchaseAgreements__WEBPACK_IMPORTED_MODULE_7__];
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

/***/ "./src/purchaseAgreements/block.json":
/*!*******************************************!*\
  !*** ./src/purchaseAgreements/block.json ***!
  \*******************************************/
/*! exports provided: apiVersion, name, title, icon, category, description, textdomain, attributes, providesContext, supports, script, style, editorScript, editorStyle, default */
/***/ (function(module) {

module.exports = JSON.parse("{\"apiVersion\":2,\"name\":\"site-functionality/purchase-agreements\",\"title\":\"Purchase Agreements\",\"icon\":\"bank\",\"category\":\"components\",\"description\":\"Display a List of Purchase Agreements\",\"textdomain\":\"site-functionality\",\"attributes\":{\"queryId\":{\"type\":\"number\"},\"query\":{\"type\":\"object\",\"default\":{\"per_page\":6,\"event-tags\":[],\"order\":\"desc\",\"orderby\":\"start\"}},\"taxonomy\":{\"type\":\"string\",\"default\":\"purchase_agreement_type\"},\"postType\":{\"type\":\"string\",\"default\":\"purchase_agreement\"},\"perPage\":{\"type\":\"number\",\"default\":3},\"orderby\":{\"type\":\"string\",\"default\":\"date/desc\",\"enum\":[\"date/desc\",\"date/asc\",\"title/desc\",\"title/asc\"]},\"purchaseTypes\":{\"type\":\"string\",\"default\":\"\"},\"layout\":{\"type\":\"object\",\"default\":{\"type\":\"grid\"}},\"wrapperTagName\":{\"type\":\"string\",\"default\":\"div\"},\"tagName\":{\"type\":\"string\",\"default\":\"article\"},\"linkWrap\":{\"type\":\"boolean\",\"default\":true},\"display\":{\"type\":\"object\",\"default\":{\"showTitle\":true,\"showSummary\":true,\"showDate\":true,\"showTypes\":true,\"showAmount\":true,\"showNumber\":true,\"showAverage\":true,\"showPurchasePrice\":true,\"showFile\":true}}},\"providesContext\":{\"queryId\":\"queryId\",\"query\":\"query\",\"layout\":\"layout\"},\"supports\":{\"html\":false,\"color\":{\"gradients\":false,\"link\":false,\"text\":false,\"background\":false},\"typography\":{\"fontSize\":false,\"lineHeight\":false,\"__experimentalFontWeight\":false}},\"script\":\"site-functionality\",\"style\":\"file:../../build/style-index.css\",\"editorScript\":\"file:../../build/index.js\",\"editorStyle\":\"file:../../build/index.css\"}");

/***/ }),

/***/ "./src/purchaseAgreements/edit.js":
/*!****************************************!*\
  !*** ./src/purchaseAgreements/edit.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/extends */ "./node_modules/@babel/runtime/helpers/extends.js");
/* harmony import */ var _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/element */ "@wordpress/element");
/* harmony import */ var _wordpress_element__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_startcase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash.startcase */ "./node_modules/lodash.startcase/index.js");
/* harmony import */ var lodash_startcase__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_startcase__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/data */ "@wordpress/data");
/* harmony import */ var _wordpress_data__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/compose */ "@wordpress/compose");
/* harmony import */ var _wordpress_compose__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @wordpress/core-data */ "@wordpress/core-data");
/* harmony import */ var _wordpress_core_data__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_wordpress_core_data__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @wordpress/date */ "@wordpress/date");
/* harmony import */ var _wordpress_date__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_wordpress_date__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__);



/**
 * External dependencies
 */

/**
 * WordPress dependencies
 */









const MAX_ITEMS = 50;

const Edit = props => {
  const {
    attributes,
    className,
    setAttributes,
    isSelected
  } = props;
  const {
    queryId,
    taxonomy,
    postType,
    purchaseTypes,
    perPage,
    orderby,
    query,
    wrapperTagName,
    tagName,
    linkWrap,
    display
  } = attributes;
  const {
    showTitle,
    showSummary,
    showDate,
    showTypes,
    showAmount,
    showNumber,
    showAverage,
    showPurchasePrice,
    showFile
  } = display;
  const instanceId = Object(_wordpress_compose__WEBPACK_IMPORTED_MODULE_6__["useInstanceId"])(Edit);

  const settings = Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_8__["__experimentalGetSettings"])();

  const dateFormat = settings.formats.date;
  const {
    __unstableMarkNextChangeAsNotPersistent
  } = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useDispatch"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["store"]);
  const posts = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(select => {
    return select('core').getEntityRecords('postType', postType, query);
  }, [query]);

  const setTypes = value => {
    setAttributes({
      purchaseTypes: value
    });
  };

  const setPerPage = value => {
    setAttributes({
      perPage: value
    });
  };

  const setOrderBy = value => {
    setAttributes({
      orderby: value
    });
  };

  const TermSelector = () => {
    const terms = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(select => {
      return select('core').getEntityRecords('taxonomy', taxonomy);
    }, []);

    if (!terms || !terms.length) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null);
    }

    const options = terms.map(({
      id,
      name
    }) => ({
      value: id,
      label: name
    }));
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Type', 'site-functionality'),
      options: [{
        value: "",
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Select a Type', 'site-functionality')
      }, ...options],
      onChange: setTypes,
      value: purchaseTypes
    }));
  };

  const PerPageSelector = () => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["RangeControl"], {
      key: "query-controls-range-control",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Number of Posts', 'site-functionality'),
      value: perPage,
      onChange: setPerPage,
      min: 1,
      max: MAX_ITEMS
    });
  };

  const OrderSelector = () => {
    const options = [{
      value: "date/desc",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Soonest to Latest', 'site-functionality')
    }, {
      value: "date/asc",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Latest to Soonest', 'site-functionality')
    }, {
      value: "title/asc",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('A → Z', 'site-functionality')
    }, {
      value: "title/desc",
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Z → A', 'site-functionality')
    }];

    if (!options || !options.length) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Order By', 'site-functionality'),
      options: options,
      onChange: setOrderBy,
      value: orderby
    }));
  };

  const ShowSelectors = () => {
    const fields = Object.keys(display);

    if (!fields || !fields.length) {
      return null;
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, fields.map((field, index) => {
      const label = lodash_startcase__WEBPACK_IMPORTED_MODULE_2___default()(field.replace('show', ''));
      let checked = attributes.display[field];
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], {
        key: index
      }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["ToggleControl"], {
        label: label,
        help: checked ? Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Show', 'site-functionality') : Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Hide', 'site-functionality'),
        checked: checked,
        onChange: isChecked => {
          setAttributes({
            display: { ...display,
              [field]: isChecked
            }
          });
        }
      }));
    }));
  };

  const SettingsPanel = () => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Query Options', 'site-functionality'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(TermSelector, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(OrderSelector, null)), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(PerPageSelector, null))));
  };

  const AdvancedControls = () => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["InspectorControls"], {
      __experimentalGroup: "advanced"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelBody"], {
      title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('HTML Tag Options', 'site-functionality'),
      initialOpen: true
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Wrapper HTML Element', 'site-functionality'),
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Default (<div>)', 'site-functionality'),
        value: 'div'
      }, {
        label: '<main>',
        value: 'main'
      }, {
        label: '<section>',
        value: 'section'
      }, {
        label: '<ul> (list)',
        value: 'ul'
      }],
      value: wrapperTagName,
      onChange: value => setAttributes({
        wrapperTagName: value
      })
    })), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["PanelRow"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["SelectControl"], {
      label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Item HTML Element', 'site-functionality'),
      options: [{
        label: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Default (<article>)', 'site-functionality'),
        value: 'article'
      }, {
        label: '<div>',
        value: 'div'
      }, {
        label: '<li>',
        value: 'li'
      }],
      value: tagName,
      onChange: value => setAttributes({
        tagName: value
      })
    }))));
  };

  const blockProps = Object(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_3__["useBlockProps"])();

  const Posts = () => {
    if (!posts) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_components__WEBPACK_IMPORTED_MODULE_4__["Spinner"], null);
    }

    if (!posts.length) {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(NoPosts, null);
    }

    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, posts.map(post => {
      return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Post, _babel_runtime_helpers_extends__WEBPACK_IMPORTED_MODULE_0___default()({}, post, {
        key: post.id
      }));
    }));
  };

  const Post = post => {
    var _post$meta2, _post$title, _post$content, _post$meta3, _post$meta4, _types$, _types$2, _post$meta5, _post$meta6, _post$meta7, _post$meta8, _post$meta9, _post$meta10;

    const types = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(select => {
      if (!purchaseTypes) {
        return false;
      }

      return select('core').getEntityRecords('taxonomy', taxonomy, {
        include: post["purchase-types"],
        context: 'view'
      });
    }, []);
    const media = Object(_wordpress_data__WEBPACK_IMPORTED_MODULE_5__["useSelect"])(select => {
      var _post$meta;

      const file = (_post$meta = post.meta) === null || _post$meta === void 0 ? void 0 : _post$meta["file"];

      if (!showFile || !file) {
        return false;
      }

      return select('core').getMedia(file, {
        context: 'view'
      });
    }, []);
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("article", {
      className: "purchase-agreement"
    }, showDate && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "purchase-agreement__date entry-meta"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("time", {
      dateTime: post.date
    }, Object(_wordpress_date__WEBPACK_IMPORTED_MODULE_8__["dateI18n"])(dateFormat, post.date))), showTitle && ((_post$meta2 = post.meta) === null || _post$meta2 === void 0 ? void 0 : _post$meta2["show_title"]) && post.title && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("h3", {
      className: "purchase-agreement__title entry-title",
      dangerouslySetInnerHTML: {
        __html: post === null || post === void 0 ? void 0 : (_post$title = post.title) === null || _post$title === void 0 ? void 0 : _post$title.rendered
      }
    }), showSummary && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "purchase-agreement__summary entry-content",
      dangerouslySetInnerHTML: {
        __html: post === null || post === void 0 ? void 0 : (_post$content = post.content) === null || _post$content === void 0 ? void 0 : _post$content.rendered
      }
    }), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      class: "purchase-agreement__details"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("dl", null, showAmount && ((_post$meta3 = post.meta) === null || _post$meta3 === void 0 ? void 0 : _post$meta3["amount"]) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("dt", {
      class: "purchase-agreement__amount entry-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Abolished', 'site-functionality')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("dd", {
      class: "purchase-agreement__amount entry-value"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "value"
    }, new Intl.NumberFormat().format((_post$meta4 = post.meta) === null || _post$meta4 === void 0 ? void 0 : _post$meta4["amount"])))), showTypes && purchaseTypes && types && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("dt", {
      class: "purchase-agreement__type entry-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Type', 'site-functionality')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("dd", {
      class: "purchase-agreement__type entry-value"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: (_types$ = types[0]) === null || _types$ === void 0 ? void 0 : _types$.link,
      rel: "tag",
      dangerouslySetInnerHTML: {
        __html: (_types$2 = types[0]) === null || _types$2 === void 0 ? void 0 : _types$2.name
      }
    }))), showNumber && ((_post$meta5 = post.meta) === null || _post$meta5 === void 0 ? void 0 : _post$meta5["number"]) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("dt", {
      class: "purchase-agreement__number entry-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Number of Debtors', 'site-functionality')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("dd", {
      class: "purchase-agreement__number entry-value"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "value"
    }, (_post$meta6 = post.meta) === null || _post$meta6 === void 0 ? void 0 : _post$meta6["number"]))), showAverage && ((_post$meta7 = post.meta) === null || _post$meta7 === void 0 ? void 0 : _post$meta7["average"]) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("dt", {
      class: "purchase-agreement__average entry-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Abolished', 'site-functionality')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("dd", {
      class: "purchase-agreement__average entry-value"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "value"
    }, new Intl.NumberFormat().format((_post$meta8 = post.meta) === null || _post$meta8 === void 0 ? void 0 : _post$meta8["average"])))), showPurchasePrice && ((_post$meta9 = post.meta) === null || _post$meta9 === void 0 ? void 0 : _post$meta9["purchase_price"]) && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("dt", {
      class: "purchase-agreement__purchase-price entry-label"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Abolished', 'site-functionality')), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("dd", {
      class: "purchase-agreement__purchase-price entry-value"
    }, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("span", {
      class: "value"
    }, new Intl.NumberFormat().format((_post$meta10 = post.meta) === null || _post$meta10 === void 0 ? void 0 : _post$meta10["purchase_price"])))))), media && Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("a", {
      href: media.source_url,
      "aria-label": Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Download Purchase Agreement as PDF', 'site-functionality'),
      target: "_blank"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('Download Purchase Agreement as PDF', 'site-functionality')));
  };

  const NoPosts = () => {
    return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", {
      className: "no-posts"
    }, Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_9__["__"])('No posts', 'site-functionality'));
  };

  const updateQuery = () => {
    let _query = query;

    const _ordering = orderby.split('/');

    _query = { ..._query,
      per_page: parseInt(perPage),
      order: _ordering[1],
      orderby: _ordering[0],
      "purchase-types": purchaseTypes ? [parseInt(purchaseTypes)] : []
    };
    setAttributes({
      query: { ...query,
        ..._query
      }
    });
  };

  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    updateQuery();
  }, [purchaseTypes, perPage, orderby]);
  Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(() => {
    if (!queryId) {
      __unstableMarkNextChangeAsNotPersistent();

      setAttributes({
        queryId: instanceId
      });
    }
  }, [queryId, instanceId]);
  return Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["Fragment"], null, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(SettingsPanel, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(AdvancedControls, null), Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])("div", blockProps, Object(_wordpress_element__WEBPACK_IMPORTED_MODULE_1__["createElement"])(Posts, null)));
};

/* harmony default export */ __webpack_exports__["default"] = (Edit);

/***/ }),

/***/ "./src/purchaseAgreements/index.js":
/*!*****************************************!*\
  !*** ./src/purchaseAgreements/index.js ***!
  \*****************************************/
/*! exports provided: name, category, settings */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "name", function() { return name; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "category", function() { return category; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "settings", function() { return settings; });
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./block.json */ "./src/purchaseAgreements/block.json");
var _block_json__WEBPACK_IMPORTED_MODULE_1___namespace = /*#__PURE__*/__webpack_require__.t(/*! ./block.json */ "./src/purchaseAgreements/block.json", 1);
/* harmony import */ var _edit__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./edit */ "./src/purchaseAgreements/edit.js");
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

/***/ "@wordpress/compose":
/*!*********************************!*\
  !*** external ["wp","compose"] ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["compose"]; }());

/***/ }),

/***/ "@wordpress/core-data":
/*!**********************************!*\
  !*** external ["wp","coreData"] ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["coreData"]; }());

/***/ }),

/***/ "@wordpress/data":
/*!******************************!*\
  !*** external ["wp","data"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["data"]; }());

/***/ }),

/***/ "@wordpress/date":
/*!******************************!*\
  !*** external ["wp","date"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["date"]; }());

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