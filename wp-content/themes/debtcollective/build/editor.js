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
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/js/blocks/filtered/buttons.js":
/*!*******************************************!*\
  !*** ./src/js/blocks/filtered/buttons.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


function removeButtonSupport( settings, name ) {
    if ( name !== 'core/button' ) {
        return settings;
    }
 
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign( {}, settings, {
        supports: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign( {}, settings.supports, {
            color: { 
                text: false,
                gradient: false
            },
            typography: {
                fontSize: false
            },
            spacing: {
                padding: false
            }
        } )
    } );
}

wp.hooks.addFilter(
    'blocks.registerBlockType',
    'debtcollective/buttons',
    removeButtonSupport
);

/***/ }),

/***/ "./src/js/blocks/filtered/index.js":
/*!*****************************************!*\
  !*** ./src/js/blocks/filtered/index.js ***!
  \*****************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./buttons */ "./src/js/blocks/filtered/buttons.js");
/* harmony import */ var _social_links__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./social-links */ "./src/js/blocks/filtered/social-links.js");



/***/ }),

/***/ "./src/js/blocks/filtered/social-links.js":
/*!************************************************!*\
  !*** ./src/js/blocks/filtered/social-links.js ***!
  \************************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);


/**
 * Modify settings for core/social-links
 * @param {Object} settings 
 * @param {String} name 
 * @return {Object}
 */
function modifySocialLinkSettings( settings, name ) {
    if ( name !== 'core/social-links' ) {
        return settings;
    }
 
    return lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign( {}, settings, {
        style: lodash__WEBPACK_IMPORTED_MODULE_0___default.a.assign( {}, settings.style, '' ),
    } );
}
 
wp.hooks.addFilter(
    'blocks.registerBlockType',
    'debtcollective/social-links',
    modifySocialLinkSettings
);

/***/ }),

/***/ "./src/js/blocks/index.js":
/*!********************************!*\
  !*** ./src/js/blocks/index.js ***!
  \********************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _filtered__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./filtered */ "./src/js/blocks/filtered/index.js");
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./patterns */ "./src/js/blocks/patterns/index.js");
/* harmony import */ var _patterns__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_patterns__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _variations__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./variations */ "./src/js/blocks/variations/index.js");




/***/ }),

/***/ "./src/js/blocks/patterns/index.js":
/*!*****************************************!*\
  !*** ./src/js/blocks/patterns/index.js ***!
  \*****************************************/
/*! no static exports found */
/***/ (function(module, exports) {



/***/ }),

/***/ "./src/js/blocks/variations/banners.js":
/*!*********************************************!*\
  !*** ./src/js/blocks/variations/banners.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



const variations = [
    {
        name: 'banner-media',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Media Banner', 'debtcollective' ),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'A banner that displays a media item on the left and text on the right.', 'debtcollective' ),
        keywords: [
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'banner', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'tout', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'call to action', 'debtcollective' )
        ],
        category: 'components',
        attributes: {
            className: 'banner',
            backgroundColor: 'canary',
            verticalAlignment: 'center'
        },
        innerBlocks: [
            [ 'core/column', {
                width: '33.33%',
                verticalAlignment: 'top'
            }, [
                [ 'core/embed', {
                    type: "video",
                    providerNameSlug: "youtube",
                    responsive: true,
                    className:"wp-embed-aspect-16-9 wp-has-aspect-ratio banner__media"
                } ]
            ] ],
            [ 'core/column', {
                width: '66.66%',
                verticalAlignment: 'top'
            }, [
                [ 'core/heading', {
                    level: 2,
                    className: 'banner__heading',
                    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Heading ...', 'debtcollective' )
                } ],
                [ 'core/paragraph', {
                    className: 'banner__content',
                    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add content ...', 'debtcollective' )
                } ]
            ] ],
        ],
        example: {
            attributes: {
                className: 'banner',
                backgroundColor: 'canary'
            },
            innerBlocks: [
                {
                    name: 'core/column',
                    attributes: {
                        width: '33.33%',
                        verticalAlignment: 'top'
                    },
                    innerBlocks: [
                        {
                            name: 'core/embed',
                            attributes: {
                                type: "video",
                                providerNameSlug: "youtube",
                                responsive: true,
                                className:"wp-embed-aspect-16-9 wp-has-aspect-ratio banner__media",
                                url: 'https://youtu.be/PyLDFT2GW-A'
                            }
                        }
                    ]
                },
                {
                    name: 'core/column',
                    attributes: {
                        width: '66.66%',
                        verticalAlignment: 'top'
                    },
                    innerBlocks: [
                        {
                            name: 'core/heading',
                            attributes: {
                                level: 2,
                                className: 'banner__heading',
                                placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Our Movement Has <em>Abolished</em> More Than <em>$2.8 Billion</em>', 'debtcollective' )
                            },
                        },
                        {
                            name: 'core/paragraph',
                            attributes: {
                                className: 'banner__content',
                                placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'in student debt, medical debt, payday loans, probation debt and credit card debt. Our student debt campaign put full student debt cancellation and free public college on the political map.', 'debtcollective' )
                            }
                        }
                    ]
                },
            ],
        }
    }
];

variations.forEach( ( variation ) => {
    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockVariation"])(
        'core/columns',
        variation
    );
} );

/***/ }),

/***/ "./src/js/blocks/variations/buttons.js":
/*!*********************************************!*\
  !*** ./src/js/blocks/variations/buttons.js ***!
  \*********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



const buttonsVariations = [
    {
        name: 'buttons',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Buttons', 'debtcollective' ),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add one or more standard buttons.', 'debtcollective' ),
        category: 'components',
        isDefault: true,
        parent: false,
        attributes: {
            className: 'buttons'
        },
        innerBlocks: [
            [ 'core/button', {
                placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Button Text ...', 'debtcollective' ),
                className: 'button',
                backgroundColor: 'emphasis',
                textColor: 'white'
            } ]
        ],
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
    {
        name: 'buttons-minor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Minor Buttons', 'debtcollective' ),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add one or more secondary buttons.', 'debtcollective' ),
        category: 'components',
        attributes: {
            className: 'buttons--minor'
        },
        innerBlocks: [
            [ 'core/button', {
                placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Button Text ...', 'debtcollective' ),
                className: 'button--minor',
                backgroundColor: 'white',
                textColor: 'grey-dark'
            } ]
        ],
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
    {
        name: 'buttons-jade',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Jade Buttons', 'debtcollective' ),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add one or more jade-colored buttons.', 'debtcollective' ),
        attributes: {
            className: 'buttons--jade'
        },
        innerBlocks: [
            [ 'core/button', {
                placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Button Text ...', 'debtcollective' ),
                className: 'button--jade',
                backgroundColor: 'jade',
                textColor: 'white'
            } ]
        ],
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
];

const buttonVariations = [
    {
        name: 'button',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Button', 'debtcollective' ),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add a standard button.', 'debtcollective' ),
        keywords: [
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'component', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'link', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'action', 'debtcollective' )
        ],
        parent: false,
        isDefault: true,
        attributes: {
            placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Button Text ...', 'debtcollective' ),
            className: 'button',
            backgroundColor: 'emphasis',
            textColor: 'white'
        },
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        isActive: ( blockAttributes, variationAttributes ) =>
            blockAttributes.className === variationAttributes.className,
    },
    {
        name: 'button-minor',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Minor Button', 'debtcollective' ),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add a secondary button.', 'debtcollective' ),
        keywords: [
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'component', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'link', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'action', 'debtcollective' )
        ],
        attributes: {
            placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Button Text ...', 'debtcollective' ),
            className: 'button--minor',
            backgroundColor: 'white',
            textColor: 'grey-dark'
        },
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        // isActive: ( blockAttributes, variationAttributes ) => {
        //     blockAttributes.className === variationAttributes.className
        // }
    },
    {
        name: 'button-jade',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Jade Button', 'debtcollective' ),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add a jade-colored button.', 'debtcollective' ),
        keywords: [
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'component', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'link', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'action', 'debtcollective' )
        ],
        attributes: {
            placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Button Text ...', 'debtcollective' ),
            className: 'button--jade',
            backgroundColor: 'jade',
            textColor: 'white'
        },
        styles: [],
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        // isActive: ( blockAttributes, variationAttributes ) => {
        //     blockAttributes.className === variationAttributes.className
        // }
    },
];

buttonsVariations.forEach( ( variation ) => {
    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockVariation"])(
        'core/buttons',
        variation
    );
} );

buttonVariations.forEach( ( variation ) => {
    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockVariation"])(
        'core/button',
        variation
    );
} );



/***/ }),

/***/ "./src/js/blocks/variations/cover.js":
/*!*******************************************!*\
  !*** ./src/js/blocks/variations/cover.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockCollection"])( 'debtcollective', { 
    title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Debt Collective', 'debtcollective' )
} );

const variations = [
    {
        name: 'hero',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Hero', 'debtcollective' ),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add a hero with background image.', 'debtcollective' ),
        keywords: [
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'banner', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'tout', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'call to action', 'debtcollective' )
        ],
        category: 'components',
        keywords: [
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'banner', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'hero', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'image', 'debtcollective' )
        ],
        icon: 'format-image',
        attributes: {
            className: 'hero',
            contentPosition: 'top left',
            overlayColor: 'jade',
            backgroundColor: 'jade',
        },
        innerBlocks: [
            [ 'core/heading', { 
                className: 'hero__heading h1',
                level: 1,
                placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Heading ...', 'debtcollective' ),
                content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Alone Our Debts are a Burden.<br/>Together They Make Us <strong>Powerful</strong>', 'debtcollective' ),
                textColor: 'white'
            } ],
            [ 'core/heading', { 
                className: 'hero__content h3',
                level: 3,
                placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add content ...', 'debtcollective' ),
                content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'We are a debtors’ union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'debtcollective' ),
                textColor: 'white'
            } ],
            [ 'core/buttons', { 
                className: 'buttons'
            }, [
                [ 'core/button', { 
                    className: 'hero__button button',
                    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Button Text ...', 'debtcollective' ),
                    backgroundColor: 'emphasis',
                    textColor: 'white',
                    content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Join the Union', 'debtcollective' )
                } ],
                [ 'core/button', { 
                    className: 'hero__button button--minor' ,
                    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Button Text ...', 'debtcollective' ),
                    backgroundColor: 'white',
                    textColor: 'grey-dark',
                    content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Membership Benefits', 'debtcollective' )
                } ]
            ] ],
        ],
        example: {
            attributes: {
                className: 'hero',
                contentPosition: 'top left',
                dimRatio: 0,
                overlayColor: 'jade',
                url: 'https://cdn.pixabay.com/photo/2018/03/02/20/38/fantasy-3194227_960_720.jpg',
            },
            innerBlocks: [
                {
                    name: 'core/heading',
                    attributes: {
                        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.', 'debtcollective' ),
                        className: 'hero__heading h1',
                        level: 1,
                        textColor: 'white'
                    },
                },
                {
                    name: 'core/heading',
                    attributes: {
                        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'We are a debtors\' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'debtcollective' ),
                        className: 'hero__heading h3',
                        level: 3,
                        textColor: 'white'
                    },
                },
                {
                    name: 'core/buttons',
                    innerBlocks: [
                        {
                            name: 'core/button',
                            attributes: {
                                content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Join the Union', 'debtcollective' ),
                                className: 'hero__button button',
                                backgroundColor: 'emphasis',
                                textColor: 'white'
                            }
                        },
                        {
                            name: 'core/button',
                            attributes: {
                                content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Membership Benefits', 'debtcollective' ),
                                className: 'hero__button button--minor' ,
                                backgroundColor: 'white',
                                textColor: 'grey-dark'
                            }
                        }
                    ]
                },
            ],
        }
    },
    {
        name: 'hero-solid',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Solid Hero', 'debtcollective' ),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add a hero with background color.', 'debtcollective' ),
        category: 'components',
        keywords: [
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'banner', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'hero', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'image', 'debtcollective' )
        ],
        icon: 'format-image',
        attributes: {
            className: 'hero-solid',
            contentPosition: 'top left',
            overlayColor: 'canary',
            backgroundColor: 'canary',
        },
        innerBlocks: [
            [ 'core/heading', { 
                className: 'hero__heading h1',
                level: 1,
                placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Heading ...', 'debtcollective' ),
                content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Alone Our Debts are a Burden.<br/>Together They Make Us <strong>Powerful</strong>', 'debtcollective' ),
                textColor: 'grey-darker'
            } ],
            [ 'core/heading', { 
                className: 'hero__content h3',
                level: 3,
                placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add content ...', 'debtcollective' ),
                content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'We are a debtors’ union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'debtcollective' ),
                textColor: 'grey-darker'
            } ]
        ],
        example: {
            attributes: {
                className: 'hero',
                contentPosition: 'top left',
                overlayColor: 'canary',
                backgroundColor: 'canary',
            },
            innerBlocks: [
                {
                    name: 'core/heading',
                    attributes: {
                        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Housing Debt', 'debtcollective' ),
                        className: 'hero__heading h1',
                        level: 1,
                        textColor: 'grey-darker'
                    },
                },
                {
                    name: 'core/heading',
                    attributes: {
                        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'As of summer 2021, nearly 6 million US households were behind on rent payments, owing over $20 billion dollars. Those behind on rent debt are overwhelmingly low income and people of color. (Yup. Racial capitalism.) Sound like a lot of debt? Sounds like a lot of power over landlords to us!', 'debtcollective' ),
                        className: 'hero__heading h3',
                        level: 3,
                        textColor: 'grey-darker'
                    },
                }
            ],
        }
    }
];

variations.forEach( ( variation ) => {
    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockVariation"])(
        'core/cover',
        variation
    );
} );

/***/ }),

/***/ "./src/js/blocks/variations/index.js":
/*!*******************************************!*\
  !*** ./src/js/blocks/variations/index.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _banners__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./banners */ "./src/js/blocks/variations/banners.js");
/* harmony import */ var _buttons__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./buttons */ "./src/js/blocks/variations/buttons.js");
/* harmony import */ var _cover__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./cover */ "./src/js/blocks/variations/cover.js");
/* harmony import */ var _lists__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./lists */ "./src/js/blocks/variations/lists.js");
/* harmony import */ var _touts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./touts */ "./src/js/blocks/variations/touts.js");
/* harmony import */ var _paragraph__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./paragraph */ "./src/js/blocks/variations/paragraph.js");








/***/ }),

/***/ "./src/js/blocks/variations/lists.js":
/*!*******************************************!*\
  !*** ./src/js/blocks/variations/lists.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



const variations = [
    {
        name: 'inline-list',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Inline Bullet List', 'debtcollective' ),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Display stylised list.', 'debtcollective' ),
        category: 'components',
        attributes: {
            className: 'inline-bullet-list',
            placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add list items  ...', 'debtcollective' )
        },
        example: {
            attributes: {
                className: 'inline-bullet-list',
            },
        },
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        // isActive: ( blockAttributes, variationAttributes ) => {
        //     blockAttributes.className === variationAttributes.className 
        // }
    }
];

variations.forEach( ( variation ) => {
    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockVariation"])(
        'core/list',
        variation
    );
} );

/***/ }),

/***/ "./src/js/blocks/variations/paragraph.js":
/*!***********************************************!*\
  !*** ./src/js/blocks/variations/paragraph.js ***!
  \***********************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



const variations = [
    {
        name: 'lede',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Lede', 'debtcollective' ),
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add opening sentence or paragraph.', 'debtcollective' ),
        category: 'components',
        keywords: [
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'intro', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'paragraph', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'sentence', 'debtcollective' )
        ],
        icon: 'editor-justify',
        attributes: {
            className: 'lede',
            placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add content ...', 'debtcollective' )
        },
        example: {
            attributes: {
                className: 'lede',
                content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'We are a membership-powered movement. Some supporting copy reenforcing the message and sentiment we’re looking to convey.', 'debtcollective' )
            },
        },
        scope: [
            'block',
            'inserter',
            'transform'
        ],
        // isActive: ( blockAttributes, variationAttributes ) => {
        //     blockAttributes.className === variationAttributes.className
        // }
    }
];

variations.forEach( ( variation ) => {
    Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockVariation"])(
        'core/paragraph',
        variation
    );
} );

/***/ }),

/***/ "./src/js/blocks/variations/touts.js":
/*!*******************************************!*\
  !*** ./src/js/blocks/variations/touts.js ***!
  \*******************************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__);



const variations = [
    {
        name: 'tout',
        title: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Standard Tout', 'debtcollective' ),
        category: 'components',
        description: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add a standard tout component.', 'debtcollective' ),
        keywords: [
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'tout', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'call to action', 'debtcollective' ),
            Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'callout', 'debtcollective' )
        ],
        attributes: {
            className: 'tout',
            contentPosition: 'top left',
            url: '../assets/student.png'
        },
        innerBlocks: [
            [ 'core/heading', { 
                className: 'tout__heading h1',
                placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Heading ...', 'debtcollective' )
            } ],
            [ 'core/paragraph', { 
                className: 'tout__content',
                placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add content ...', 'debtcollective' )
            } ],
            [ 'core/buttons', { className: 'buttons' }, [
                [ 'core/button', { 
                    className: 'tout__button button',
                    placeholder: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Add Button Text ...', 'debtcollective' )
                } ]
            ] ],
        ],
        example: {
            attributes: {
                contentPosition: 'top left',
                url: '../assets/student.png'
            },
            innerBlocks: [
                {
                    name: 'core/heading',
                    attributes: {
                        level: 2,
                        className: 'tout__heading',
                        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Alone our debts are a burden.<br /> Together they make us <em>powerful</em>.', 'debtcollective' ),
                    },
                },
                {
                    name: 'core/paragraph',
                    attributes: {
                        className: 'tout__content',
                        content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'We are a debtors\' union fighting to cancel debts and defend millions of households. Join us to build a world where college is publicly funded, healthcare is universal and housing is guaranteed for all.', 'debtcollective' ),
                    },
                },
                {
                    name: 'core/buttons',
                    attributes: {
                        className: 'tout__buttons',
                    },
                    innerBlocks: [
                        {
                            name: 'core/button',
                            attributes: {
                                className: 'tout__button',
                                content: Object(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_1__["__"])( 'Join the Union', 'debtcollective' ),
                            }
                        }
                    ]
                },
            ],
        }
    }
];

Object(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_0__["registerBlockVariation"])(
    'core/cover',
    variations
);

/***/ }),

/***/ "./src/js/editor.js":
/*!**************************!*\
  !*** ./src/js/editor.js ***!
  \**************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks */ "./src/js/blocks/index.js");
/**
 * Site JS
 */



/***/ }),

/***/ "./src/scss/editor.scss":
/*!******************************!*\
  !*** ./src/scss/editor.scss ***!
  \******************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
// extracted by mini-css-extract-plugin


/***/ }),

/***/ 1:
/*!*******************************************************!*\
  !*** multi ./src/js/editor.js ./src/scss/editor.scss ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(/*! ./src/js/editor.js */"./src/js/editor.js");
module.exports = __webpack_require__(/*! ./src/scss/editor.scss */"./src/scss/editor.scss");


/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["blocks"]; }());

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["wp"]["i18n"]; }());

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

(function() { module.exports = window["lodash"]; }());

/***/ })

/******/ });
//# sourceMappingURL=editor.js.map