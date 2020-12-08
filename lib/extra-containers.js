(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("extra-containers", [], factory);
	else if(typeof exports === 'object')
		exports["extra-containers"] = factory();
	else
		root["extra-containers"] = factory();
})(typeof self !== 'undefined' ? self : this, function() {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/algorithm.js":
/*!**************************!*
  !*** ./src/algorithm.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "binarySearch": () => /* binding */ binarySearch
/* harmony export */ });
/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/extra-containers.js#license
 */

/**
 * Search the value in the container using the binary search approach.
 *
 * Complexity:
 * Half the size of the container in the best case and lineal in the worst case.
 *
 * @param {any[]} container
 * @param {any} value
 * @return {Number} The position of the value if found, otherwise -1.
 */
function binarySearch(container, value) {
  var startIndex = 0;
  var endIndex = container.length - 1;

  while (startIndex <= endIndex) {
    var middleIndex = ~~(startIndex + endIndex >> 1);

    if (value === container[middleIndex]) {
      return middleIndex;
    } else if (value > container[middleIndex]) {
      startIndex = middleIndex + 1;
    } else if (value < container[middleIndex]) {
      endIndex = middleIndex - 1;
    }
  }

  return startIndex;
}



/***/ }),

/***/ "./src/index.js":
/*!**********************!*
  !*** ./src/index.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "List": () => /* reexport safe */ _list__WEBPACK_IMPORTED_MODULE_0__.default,
/* harmony export */   "SortedArray": () => /* reexport safe */ _sorted_array__WEBPACK_IMPORTED_MODULE_1__.default
/* harmony export */ });
/* harmony import */ var _list__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./list */ "./src/list.js");
/* harmony import */ var _sorted_array__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./sorted_array */ "./src/sorted_array.js");




/***/ }),

/***/ "./src/list.js":
/*!*********************!*
  !*** ./src/list.js ***!
  \*********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/extra-containers.js#license
 */

/**
 * Internal data structure for List elements.
 *
 * @class ListData
 */
var ListData =
/**
 * Creates an instance of ListData.
 *
 * @param {any} value The new value.
 * @memberof ListData
 */
function ListData(value) {
  _classCallCheck(this, ListData);

  /** @private @type {any} */
  this.value = value;
  /** @private @type {ListData} */

  this.next = null;
};
/**
 * List is a container that store the data in sequence.
 *
 * @class List
 */


var List = /*#__PURE__*/function () {
  /**
   * Creates an instance of List.
   * @memberof List
   */
  function List() {
    _classCallCheck(this, List);

    /** @private @type {any} */
    this.first = null;
    /** @private @type {any} */

    this.last = null;
    /** @private @type {Number} */

    this.num = 0;
  }
  /**
   * Returns the number of elements in the list.
   *
   * @return {Number} The number of elements.
   * @memberof List
   */


  _createClass(List, [{
    key: "size",
    value: function size() {
      return this.num;
    }
    /**
     * Inserts a new element at the beginning of the list.
     *
     * @param {any} data The new element.
     * @memberof List
     */

  }, {
    key: "pushFront",
    value: function pushFront(data) {
      ++this.num;

      if (!this.first) {
        this.first = new ListData(data);
        this.last = this.first;
        return;
      }

      var newElement = new ListData(data);
      newElement.next = this.first;
      this.first = newElement;
    }
    /**
     * Inserts a new element at the end of the list.
     *
     * @param {any} data The new element.
     * @memberof List
     */

  }, {
    key: "pushBack",
    value: function pushBack(data) {
      ++this.num;

      if (!this.first) {
        this.first = new ListData(data);
        this.last = this.first;
        return;
      }

      var newElement = new ListData(data);
      this.last.next = newElement;
      this.last = newElement;
    }
    /**
     * Return the first element of the list.
     *
     * @return {any} The first element.
     * @memberof List
     */

  }, {
    key: "front",
    value: function front() {
      return this.first.value;
    }
    /**
     * Return the last element of the list.
     *
     * @return {any} The last element.
     * @memberof List
     */

  }, {
    key: "back",
    value: function back() {
      return this.last.value;
    }
    /**
     * Execute the provide function once for each element of the container.
     *
     * @param {Function} callback
     * @memberof List
     */

  }, {
    key: "forEach",
    value: function forEach(callback) {
      var it = this.first;

      while (it) {
        callback(it.value, this);
        it = it.next;
      }
    }
  }]);

  return List;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (List);

/***/ }),

/***/ "./src/sorted_array.js":
/*!*****************************!*
  !*** ./src/sorted_array.js ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => __WEBPACK_DEFAULT_EXPORT__
/* harmony export */ });
/* harmony import */ var _algorithm__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./algorithm */ "./src/algorithm.js");
function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/*
 * Copyright 2020 Elias Serrano. All rights reserved.
 * License: https://github.com/feserr/extra-containers.js#license
 */

/**
 * SortedArray is a container of sorted data.
 *
 * @class SortedArray
 */

var SortedArray = /*#__PURE__*/function () {
  /**
   * Creates an instance of SortedArray.
   * @memberof SortedArray
   */
  function SortedArray() {
    _classCallCheck(this, SortedArray);

    /** @private {any[]} */
    this.arrayData = [];
    /** @private {Map<any, Number>} */

    this.arrayIndex = new Map();
  }
  /**
   * Returns the size of the container.
   *
   * @return {Number} The size of the container.
   * @memberof SortedArray
   */


  _createClass(SortedArray, [{
    key: "size",
    value: function size() {
      return this.arrayData.length;
    }
    /**
     * Add a new data element to the container.
     *
     * @param {any} data The new data.
     * @memberof SortedArray
     */

  }, {
    key: "push",
    value: function push(data) {
      var pos = (0,_algorithm__WEBPACK_IMPORTED_MODULE_0__.binarySearch)(this.arrayData, data);

      if (this.arrayData[pos]) {
        this.arrayIndex.set(this.arrayData[pos], pos + 1);
      }

      this.arrayData.splice(pos, 0, data);
      this.arrayIndex.set(data, pos);
    }
    /**
     * Check if the data exist in the container.
     *
     * @param {any} data
     * @return {Number} The position of the element if exist, otherwise -1.
     * @memberof SortedArray
     */

  }, {
    key: "exist",
    value: function exist(data) {
      var pos = this.arrayIndex.get(data);
      return pos !== undefined ? pos : -1;
    }
  }]);

  return SortedArray;
}();

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (SortedArray);

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		if(__webpack_module_cache__[moduleId]) {
/******/ 			return __webpack_module_cache__[moduleId].exports;
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
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => Object.prototype.hasOwnProperty.call(obj, prop)
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
/************************************************************************/
/******/ 	// module exports must be returned from runtime so entry inlining is disabled
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__("./src/index.js");
/******/ })()
;
});
//# sourceMappingURL=extra-containers.js.map