(self["webpackChunkkekw"] = self["webpackChunkkekw"] || []).push([["npm.matter-js"],{

/***/ "./node_modules/matter-js/build/matter.js":
/*!************************************************!*\
  !*** ./node_modules/matter-js/build/matter.js ***!
  \************************************************/
/***/ (function(module, __unused_webpack_exports, __webpack_require__) {

/*!
 * matter-js 0.20.0 by @liabru
 * http://brm.io/matter-js/
 * License MIT
 * 
 * The MIT License (MIT)
 * 
 * Copyright (c) Liam Brummitt and contributors.
 * 
 * Permission is hereby granted, free of charge, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 * 
 * The above copyright notice and this permission notice shall be included in
 * all copies or substantial portions of the Software.
 * 
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
 * THE SOFTWARE.
 */
(function webpackUniversalModuleDefinition(root, factory) {
	if(true)
		module.exports = factory();
	else {}
})(this, function() {
return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __nested_webpack_require_1787__(moduleId) {
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
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __nested_webpack_require_1787__);
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
/******/ 	__nested_webpack_require_1787__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__nested_webpack_require_1787__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__nested_webpack_require_1787__.d = function(exports, name, getter) {
/******/ 		if(!__nested_webpack_require_1787__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__nested_webpack_require_1787__.r = function(exports) {
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
/******/ 	__nested_webpack_require_1787__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __nested_webpack_require_1787__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__nested_webpack_require_1787__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __nested_webpack_require_1787__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__nested_webpack_require_1787__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__nested_webpack_require_1787__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__nested_webpack_require_1787__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__nested_webpack_require_1787__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __nested_webpack_require_1787__(__nested_webpack_require_1787__.s = 20);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

/**
* The `Matter.Common` module contains utility functions that are common to all modules.
*
* @class Common
*/

var Common = {};

module.exports = Common;

(function() {

    Common._baseDelta = 1000 / 60;
    Common._nextId = 0;
    Common._seed = 0;
    Common._nowStartTime = +(new Date());
    Common._warnedOnce = {};
    Common._decomp = null;
    
    /**
     * Extends the object in the first argument using the object in the second argument.
     * @method extend
     * @param {} obj
     * @param {boolean} deep
     * @return {} obj extended
     */
    Common.extend = function(obj, deep) {
        var argsStart,
            args,
            deepClone;

        if (typeof deep === 'boolean') {
            argsStart = 2;
            deepClone = deep;
        } else {
            argsStart = 1;
            deepClone = true;
        }

        for (var i = argsStart; i < arguments.length; i++) {
            var source = arguments[i];

            if (source) {
                for (var prop in source) {
                    if (deepClone && source[prop] && source[prop].constructor === Object) {
                        if (!obj[prop] || obj[prop].constructor === Object) {
                            obj[prop] = obj[prop] || {};
                            Common.extend(obj[prop], deepClone, source[prop]);
                        } else {
                            obj[prop] = source[prop];
                        }
                    } else {
                        obj[prop] = source[prop];
                    }
                }
            }
        }
        
        return obj;
    };

    /**
     * Creates a new clone of the object, if deep is true references will also be cloned.
     * @method clone
     * @param {} obj
     * @param {bool} deep
     * @return {} obj cloned
     */
    Common.clone = function(obj, deep) {
        return Common.extend({}, deep, obj);
    };

    /**
     * Returns the list of keys for the given object.
     * @method keys
     * @param {} obj
     * @return {string[]} keys
     */
    Common.keys = function(obj) {
        if (Object.keys)
            return Object.keys(obj);

        // avoid hasOwnProperty for performance
        var keys = [];
        for (var key in obj)
            keys.push(key);
        return keys;
    };

    /**
     * Returns the list of values for the given object.
     * @method values
     * @param {} obj
     * @return {array} Array of the objects property values
     */
    Common.values = function(obj) {
        var values = [];
        
        if (Object.keys) {
            var keys = Object.keys(obj);
            for (var i = 0; i < keys.length; i++) {
                values.push(obj[keys[i]]);
            }
            return values;
        }
        
        // avoid hasOwnProperty for performance
        for (var key in obj)
            values.push(obj[key]);
        return values;
    };

    /**
     * Gets a value from `base` relative to the `path` string.
     * @method get
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} The object at the given path
     */
    Common.get = function(obj, path, begin, end) {
        path = path.split('.').slice(begin, end);

        for (var i = 0; i < path.length; i += 1) {
            obj = obj[path[i]];
        }

        return obj;
    };

    /**
     * Sets a value on `base` relative to the given `path` string.
     * @method set
     * @param {} obj The base object
     * @param {string} path The path relative to `base`, e.g. 'Foo.Bar.baz'
     * @param {} val The value to set
     * @param {number} [begin] Path slice begin
     * @param {number} [end] Path slice end
     * @return {} Pass through `val` for chaining
     */
    Common.set = function(obj, path, val, begin, end) {
        var parts = path.split('.').slice(begin, end);
        Common.get(obj, path, 0, -1)[parts[parts.length - 1]] = val;
        return val;
    };

    /**
     * Shuffles the given array in-place.
     * The function uses a seeded random generator.
     * @method shuffle
     * @param {array} array
     * @return {array} array shuffled randomly
     */
    Common.shuffle = function(array) {
        for (var i = array.length - 1; i > 0; i--) {
            var j = Math.floor(Common.random() * (i + 1));
            var temp = array[i];
            array[i] = array[j];
            array[j] = temp;
        }
        return array;
    };

    /**
     * Randomly chooses a value from a list with equal probability.
     * The function uses a seeded random generator.
     * @method choose
     * @param {array} choices
     * @return {object} A random choice object from the array
     */
    Common.choose = function(choices) {
        return choices[Math.floor(Common.random() * choices.length)];
    };

    /**
     * Returns true if the object is a HTMLElement, otherwise false.
     * @method isElement
     * @param {object} obj
     * @return {boolean} True if the object is a HTMLElement, otherwise false
     */
    Common.isElement = function(obj) {
        if (typeof HTMLElement !== 'undefined') {
            return obj instanceof HTMLElement;
        }

        return !!(obj && obj.nodeType && obj.nodeName);
    };

    /**
     * Returns true if the object is an array.
     * @method isArray
     * @param {object} obj
     * @return {boolean} True if the object is an array, otherwise false
     */
    Common.isArray = function(obj) {
        return Object.prototype.toString.call(obj) === '[object Array]';
    };

    /**
     * Returns true if the object is a function.
     * @method isFunction
     * @param {object} obj
     * @return {boolean} True if the object is a function, otherwise false
     */
    Common.isFunction = function(obj) {
        return typeof obj === "function";
    };

    /**
     * Returns true if the object is a plain object.
     * @method isPlainObject
     * @param {object} obj
     * @return {boolean} True if the object is a plain object, otherwise false
     */
    Common.isPlainObject = function(obj) {
        return typeof obj === 'object' && obj.constructor === Object;
    };

    /**
     * Returns true if the object is a string.
     * @method isString
     * @param {object} obj
     * @return {boolean} True if the object is a string, otherwise false
     */
    Common.isString = function(obj) {
        return toString.call(obj) === '[object String]';
    };
    
    /**
     * Returns the given value clamped between a minimum and maximum value.
     * @method clamp
     * @param {number} value
     * @param {number} min
     * @param {number} max
     * @return {number} The value clamped between min and max inclusive
     */
    Common.clamp = function(value, min, max) {
        if (value < min)
            return min;
        if (value > max)
            return max;
        return value;
    };
    
    /**
     * Returns the sign of the given value.
     * @method sign
     * @param {number} value
     * @return {number} -1 if negative, +1 if 0 or positive
     */
    Common.sign = function(value) {
        return value < 0 ? -1 : 1;
    };
    
    /**
     * Returns the current timestamp since the time origin (e.g. from page load).
     * The result is in milliseconds and will use high-resolution timing if available.
     * @method now
     * @return {number} the current timestamp in milliseconds
     */
    Common.now = function() {
        if (typeof window !== 'undefined' && window.performance) {
            if (window.performance.now) {
                return window.performance.now();
            } else if (window.performance.webkitNow) {
                return window.performance.webkitNow();
            }
        }

        if (Date.now) {
            return Date.now();
        }

        return (new Date()) - Common._nowStartTime;
    };
    
    /**
     * Returns a random value between a minimum and a maximum value inclusive.
     * The function uses a seeded random generator.
     * @method random
     * @param {number} min
     * @param {number} max
     * @return {number} A random number between min and max inclusive
     */
    Common.random = function(min, max) {
        min = (typeof min !== "undefined") ? min : 0;
        max = (typeof max !== "undefined") ? max : 1;
        return min + _seededRandom() * (max - min);
    };

    var _seededRandom = function() {
        // https://en.wikipedia.org/wiki/Linear_congruential_generator
        Common._seed = (Common._seed * 9301 + 49297) % 233280;
        return Common._seed / 233280;
    };

    /**
     * Converts a CSS hex colour string into an integer.
     * @method colorToNumber
     * @param {string} colorString
     * @return {number} An integer representing the CSS hex string
     */
    Common.colorToNumber = function(colorString) {
        colorString = colorString.replace('#','');

        if (colorString.length == 3) {
            colorString = colorString.charAt(0) + colorString.charAt(0)
                        + colorString.charAt(1) + colorString.charAt(1)
                        + colorString.charAt(2) + colorString.charAt(2);
        }

        return parseInt(colorString, 16);
    };

    /**
     * The console logging level to use, where each level includes all levels above and excludes the levels below.
     * The default level is 'debug' which shows all console messages.  
     *
     * Possible level values are:
     * - 0 = None
     * - 1 = Debug
     * - 2 = Info
     * - 3 = Warn
     * - 4 = Error
     * @static
     * @property logLevel
     * @type {Number}
     * @default 1
     */
    Common.logLevel = 1;

    /**
     * Shows a `console.log` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method log
     * @param ...objs {} The objects to log.
     */
    Common.log = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.log.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.info` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method info
     * @param ...objs {} The objects to log.
     */
    Common.info = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 2) {
            console.info.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Shows a `console.warn` message only if the current `Common.logLevel` allows it.
     * The message will be prefixed with 'matter-js' to make it easily identifiable.
     * @method warn
     * @param ...objs {} The objects to log.
     */
    Common.warn = function() {
        if (console && Common.logLevel > 0 && Common.logLevel <= 3) {
            console.warn.apply(console, ['matter-js:'].concat(Array.prototype.slice.call(arguments)));
        }
    };

    /**
     * Uses `Common.warn` to log the given message one time only.
     * @method warnOnce
     * @param ...objs {} The objects to log.
     */
    Common.warnOnce = function() {
        var message = Array.prototype.slice.call(arguments).join(' ');

        if (!Common._warnedOnce[message]) {
            Common.warn(message);
            Common._warnedOnce[message] = true;
        }
    };

    /**
     * Shows a deprecated console warning when the function on the given object is called.
     * The target function will be replaced with a new function that first shows the warning
     * and then calls the original function.
     * @method deprecated
     * @param {object} obj The object or module
     * @param {string} name The property name of the function on obj
     * @param {string} warning The one-time message to show if the function is called
     */
    Common.deprecated = function(obj, prop, warning) {
        obj[prop] = Common.chain(function() {
            Common.warnOnce('🔅 deprecated 🔅', warning);
        }, obj[prop]);
    };

    /**
     * Returns the next unique sequential ID.
     * @method nextId
     * @return {Number} Unique sequential ID
     */
    Common.nextId = function() {
        return Common._nextId++;
    };

    /**
     * A cross browser compatible indexOf implementation.
     * @method indexOf
     * @param {array} haystack
     * @param {object} needle
     * @return {number} The position of needle in haystack, otherwise -1.
     */
    Common.indexOf = function(haystack, needle) {
        if (haystack.indexOf)
            return haystack.indexOf(needle);

        for (var i = 0; i < haystack.length; i++) {
            if (haystack[i] === needle)
                return i;
        }

        return -1;
    };

    /**
     * A cross browser compatible array map implementation.
     * @method map
     * @param {array} list
     * @param {function} func
     * @return {array} Values from list transformed by func.
     */
    Common.map = function(list, func) {
        if (list.map) {
            return list.map(func);
        }

        var mapped = [];

        for (var i = 0; i < list.length; i += 1) {
            mapped.push(func(list[i]));
        }

        return mapped;
    };

    /**
     * Takes a directed graph and returns the partially ordered set of vertices in topological order.
     * Circular dependencies are allowed.
     * @method topologicalSort
     * @param {object} graph
     * @return {array} Partially ordered set of vertices in topological order.
     */
    Common.topologicalSort = function(graph) {
        // https://github.com/mgechev/javascript-algorithms
        // Copyright (c) Minko Gechev (MIT license)
        // Modifications: tidy formatting and naming
        var result = [],
            visited = [],
            temp = [];

        for (var node in graph) {
            if (!visited[node] && !temp[node]) {
                Common._topologicalSort(node, visited, temp, graph, result);
            }
        }

        return result;
    };

    Common._topologicalSort = function(node, visited, temp, graph, result) {
        var neighbors = graph[node] || [];
        temp[node] = true;

        for (var i = 0; i < neighbors.length; i += 1) {
            var neighbor = neighbors[i];

            if (temp[neighbor]) {
                // skip circular dependencies
                continue;
            }

            if (!visited[neighbor]) {
                Common._topologicalSort(neighbor, visited, temp, graph, result);
            }
        }

        temp[node] = false;
        visited[node] = true;

        result.push(node);
    };

    /**
     * Takes _n_ functions as arguments and returns a new function that calls them in order.
     * The arguments applied when calling the new function will also be applied to every function passed.
     * The value of `this` refers to the last value returned in the chain that was not `undefined`.
     * Therefore if a passed function does not return a value, the previously returned value is maintained.
     * After all passed functions have been called the new function returns the last returned value (if any).
     * If any of the passed functions are a chain, then the chain will be flattened.
     * @method chain
     * @param ...funcs {function} The functions to chain.
     * @return {function} A new function that calls the passed functions in order.
     */
    Common.chain = function() {
        var funcs = [];

        for (var i = 0; i < arguments.length; i += 1) {
            var func = arguments[i];

            if (func._chained) {
                // flatten already chained functions
                funcs.push.apply(funcs, func._chained);
            } else {
                funcs.push(func);
            }
        }

        var chain = function() {
            // https://github.com/GoogleChrome/devtools-docs/issues/53#issuecomment-51941358
            var lastResult,
                args = new Array(arguments.length);

            for (var i = 0, l = arguments.length; i < l; i++) {
                args[i] = arguments[i];
            }

            for (i = 0; i < funcs.length; i += 1) {
                var result = funcs[i].apply(lastResult, args);

                if (typeof result !== 'undefined') {
                    lastResult = result;
                }
            }

            return lastResult;
        };

        chain._chained = funcs;

        return chain;
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathBefore
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathBefore = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            func,
            Common.get(base, path)
        ));
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `base`.
     * See also docs for `Common.chain`.
     * @method chainPathAfter
     * @param {} base The base object
     * @param {string} path The path relative to `base`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Common.chainPathAfter = function(base, path, func) {
        return Common.set(base, path, Common.chain(
            Common.get(base, path),
            func
        ));
    };

    /**
     * Provide the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module to enable
     * concave vertex decomposition support when using `Bodies.fromVertices` e.g. `Common.setDecomp(require('poly-decomp'))`.
     * @method setDecomp
     * @param {} decomp The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module.
     */
    Common.setDecomp = function(decomp) {
        Common._decomp = decomp;
    };

    /**
     * Returns the [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module provided through `Common.setDecomp`,
     * otherwise returns the global `decomp` if set.
     * @method getDecomp
     * @return {} The [poly-decomp](https://github.com/schteppe/poly-decomp.js) library module if provided.
     */
    Common.getDecomp = function() {
        // get user provided decomp if set
        var decomp = Common._decomp;

        try {
            // otherwise from window global
            if (!decomp && typeof window !== 'undefined') {
                decomp = window.decomp;
            }
    
            // otherwise from node global
            if (!decomp && typeof __webpack_require__.g !== 'undefined') {
                decomp = __webpack_require__.g.decomp;
            }
        } catch (e) {
            // decomp not available
            decomp = null;
        }

        return decomp;
    };
})();


/***/ }),
/* 1 */
/***/ (function(module, exports) {

/**
* The `Matter.Bounds` module contains methods for creating and manipulating axis-aligned bounding boxes (AABB).
*
* @class Bounds
*/

var Bounds = {};

module.exports = Bounds;

(function() {

    /**
     * Creates a new axis-aligned bounding box (AABB) for the given vertices.
     * @method create
     * @param {vertices} vertices
     * @return {bounds} A new bounds object
     */
    Bounds.create = function(vertices) {
        var bounds = { 
            min: { x: 0, y: 0 }, 
            max: { x: 0, y: 0 }
        };

        if (vertices)
            Bounds.update(bounds, vertices);
        
        return bounds;
    };

    /**
     * Updates bounds using the given vertices and extends the bounds given a velocity.
     * @method update
     * @param {bounds} bounds
     * @param {vertices} vertices
     * @param {vector} velocity
     */
    Bounds.update = function(bounds, vertices, velocity) {
        bounds.min.x = Infinity;
        bounds.max.x = -Infinity;
        bounds.min.y = Infinity;
        bounds.max.y = -Infinity;

        for (var i = 0; i < vertices.length; i++) {
            var vertex = vertices[i];
            if (vertex.x > bounds.max.x) bounds.max.x = vertex.x;
            if (vertex.x < bounds.min.x) bounds.min.x = vertex.x;
            if (vertex.y > bounds.max.y) bounds.max.y = vertex.y;
            if (vertex.y < bounds.min.y) bounds.min.y = vertex.y;
        }
        
        if (velocity) {
            if (velocity.x > 0) {
                bounds.max.x += velocity.x;
            } else {
                bounds.min.x += velocity.x;
            }
            
            if (velocity.y > 0) {
                bounds.max.y += velocity.y;
            } else {
                bounds.min.y += velocity.y;
            }
        }
    };

    /**
     * Returns true if the bounds contains the given point.
     * @method contains
     * @param {bounds} bounds
     * @param {vector} point
     * @return {boolean} True if the bounds contain the point, otherwise false
     */
    Bounds.contains = function(bounds, point) {
        return point.x >= bounds.min.x && point.x <= bounds.max.x 
               && point.y >= bounds.min.y && point.y <= bounds.max.y;
    };

    /**
     * Returns true if the two bounds intersect.
     * @method overlaps
     * @param {bounds} boundsA
     * @param {bounds} boundsB
     * @return {boolean} True if the bounds overlap, otherwise false
     */
    Bounds.overlaps = function(boundsA, boundsB) {
        return (boundsA.min.x <= boundsB.max.x && boundsA.max.x >= boundsB.min.x
                && boundsA.max.y >= boundsB.min.y && boundsA.min.y <= boundsB.max.y);
    };

    /**
     * Translates the bounds by the given vector.
     * @method translate
     * @param {bounds} bounds
     * @param {vector} vector
     */
    Bounds.translate = function(bounds, vector) {
        bounds.min.x += vector.x;
        bounds.max.x += vector.x;
        bounds.min.y += vector.y;
        bounds.max.y += vector.y;
    };

    /**
     * Shifts the bounds to the given position.
     * @method shift
     * @param {bounds} bounds
     * @param {vector} position
     */
    Bounds.shift = function(bounds, position) {
        var deltaX = bounds.max.x - bounds.min.x,
            deltaY = bounds.max.y - bounds.min.y;
            
        bounds.min.x = position.x;
        bounds.max.x = position.x + deltaX;
        bounds.min.y = position.y;
        bounds.max.y = position.y + deltaY;
    };
    
})();


/***/ }),
/* 2 */
/***/ (function(module, exports) {

/**
* The `Matter.Vector` module contains methods for creating and manipulating vectors.
* Vectors are the basis of all the geometry related operations in the engine.
* A `Matter.Vector` object is of the form `{ x: 0, y: 0 }`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vector
*/

// TODO: consider params for reusing vector objects

var Vector = {};

module.exports = Vector;

(function() {

    /**
     * Creates a new vector.
     * @method create
     * @param {number} x
     * @param {number} y
     * @return {vector} A new vector
     */
    Vector.create = function(x, y) {
        return { x: x || 0, y: y || 0 };
    };

    /**
     * Returns a new vector with `x` and `y` copied from the given `vector`.
     * @method clone
     * @param {vector} vector
     * @return {vector} A new cloned vector
     */
    Vector.clone = function(vector) {
        return { x: vector.x, y: vector.y };
    };

    /**
     * Returns the magnitude (length) of a vector.
     * @method magnitude
     * @param {vector} vector
     * @return {number} The magnitude of the vector
     */
    Vector.magnitude = function(vector) {
        return Math.sqrt((vector.x * vector.x) + (vector.y * vector.y));
    };

    /**
     * Returns the magnitude (length) of a vector (therefore saving a `sqrt` operation).
     * @method magnitudeSquared
     * @param {vector} vector
     * @return {number} The squared magnitude of the vector
     */
    Vector.magnitudeSquared = function(vector) {
        return (vector.x * vector.x) + (vector.y * vector.y);
    };

    /**
     * Rotates the vector about (0, 0) by specified angle.
     * @method rotate
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} [output]
     * @return {vector} The vector rotated about (0, 0)
     */
    Vector.rotate = function(vector, angle, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = vector.x * cos - vector.y * sin;
        output.y = vector.x * sin + vector.y * cos;
        output.x = x;
        return output;
    };

    /**
     * Rotates the vector about a specified point by specified angle.
     * @method rotateAbout
     * @param {vector} vector
     * @param {number} angle
     * @param {vector} point
     * @param {vector} [output]
     * @return {vector} A new vector rotated about the point
     */
    Vector.rotateAbout = function(vector, angle, point, output) {
        var cos = Math.cos(angle), sin = Math.sin(angle);
        if (!output) output = {};
        var x = point.x + ((vector.x - point.x) * cos - (vector.y - point.y) * sin);
        output.y = point.y + ((vector.x - point.x) * sin + (vector.y - point.y) * cos);
        output.x = x;
        return output;
    };

    /**
     * Normalises a vector (such that its magnitude is `1`).
     * @method normalise
     * @param {vector} vector
     * @return {vector} A new vector normalised
     */
    Vector.normalise = function(vector) {
        var magnitude = Vector.magnitude(vector);
        if (magnitude === 0)
            return { x: 0, y: 0 };
        return { x: vector.x / magnitude, y: vector.y / magnitude };
    };

    /**
     * Returns the dot-product of two vectors.
     * @method dot
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The dot product of the two vectors
     */
    Vector.dot = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.x) + (vectorA.y * vectorB.y);
    };

    /**
     * Returns the cross-product of two vectors.
     * @method cross
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The cross product of the two vectors
     */
    Vector.cross = function(vectorA, vectorB) {
        return (vectorA.x * vectorB.y) - (vectorA.y * vectorB.x);
    };

    /**
     * Returns the cross-product of three vectors.
     * @method cross3
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} vectorC
     * @return {number} The cross product of the three vectors
     */
    Vector.cross3 = function(vectorA, vectorB, vectorC) {
        return (vectorB.x - vectorA.x) * (vectorC.y - vectorA.y) - (vectorB.y - vectorA.y) * (vectorC.x - vectorA.x);
    };

    /**
     * Adds the two vectors.
     * @method add
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB added
     */
    Vector.add = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x + vectorB.x;
        output.y = vectorA.y + vectorB.y;
        return output;
    };

    /**
     * Subtracts the two vectors.
     * @method sub
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @param {vector} [output]
     * @return {vector} A new vector of vectorA and vectorB subtracted
     */
    Vector.sub = function(vectorA, vectorB, output) {
        if (!output) output = {};
        output.x = vectorA.x - vectorB.x;
        output.y = vectorA.y - vectorB.y;
        return output;
    };

    /**
     * Multiplies a vector and a scalar.
     * @method mult
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector multiplied by scalar
     */
    Vector.mult = function(vector, scalar) {
        return { x: vector.x * scalar, y: vector.y * scalar };
    };

    /**
     * Divides a vector and a scalar.
     * @method div
     * @param {vector} vector
     * @param {number} scalar
     * @return {vector} A new vector divided by scalar
     */
    Vector.div = function(vector, scalar) {
        return { x: vector.x / scalar, y: vector.y / scalar };
    };

    /**
     * Returns the perpendicular vector. Set `negate` to true for the perpendicular in the opposite direction.
     * @method perp
     * @param {vector} vector
     * @param {bool} [negate=false]
     * @return {vector} The perpendicular vector
     */
    Vector.perp = function(vector, negate) {
        negate = negate === true ? -1 : 1;
        return { x: negate * -vector.y, y: negate * vector.x };
    };

    /**
     * Negates both components of a vector such that it points in the opposite direction.
     * @method neg
     * @param {vector} vector
     * @return {vector} The negated vector
     */
    Vector.neg = function(vector) {
        return { x: -vector.x, y: -vector.y };
    };

    /**
     * Returns the angle between the vector `vectorB - vectorA` and the x-axis in radians.
     * @method angle
     * @param {vector} vectorA
     * @param {vector} vectorB
     * @return {number} The angle in radians
     */
    Vector.angle = function(vectorA, vectorB) {
        return Math.atan2(vectorB.y - vectorA.y, vectorB.x - vectorA.x);
    };

    /**
     * Temporary vector pool (not thread-safe).
     * @property _temp
     * @type {vector[]}
     * @private
     */
    Vector._temp = [
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create(), 
        Vector.create(), Vector.create()
    ];

})();

/***/ }),
/* 3 */
/***/ (function(module, exports, __nested_webpack_require_35421__) {

/**
* The `Matter.Vertices` module contains methods for creating and manipulating sets of vertices.
* A set of vertices is an array of `Matter.Vector` with additional indexing properties inserted by `Vertices.create`.
* A `Matter.Body` maintains a set of vertices to represent the shape of the object (its convex hull).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Vertices
*/

var Vertices = {};

module.exports = Vertices;

var Vector = __nested_webpack_require_35421__(2);
var Common = __nested_webpack_require_35421__(0);

(function() {

    /**
     * Creates a new set of `Matter.Body` compatible vertices.
     * The `points` argument accepts an array of `Matter.Vector` points orientated around the origin `(0, 0)`, for example:
     *
     *     [{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]
     *
     * The `Vertices.create` method returns a new array of vertices, which are similar to Matter.Vector objects,
     * but with some additional references required for efficient collision detection routines.
     *
     * Vertices must be specified in clockwise order.
     *
     * Note that the `body` argument is not optional, a `Matter.Body` reference must be provided.
     *
     * @method create
     * @param {vector[]} points
     * @param {body} body
     */
    Vertices.create = function(points, body) {
        var vertices = [];

        for (var i = 0; i < points.length; i++) {
            var point = points[i],
                vertex = {
                    x: point.x,
                    y: point.y,
                    index: i,
                    body: body,
                    isInternal: false
                };

            vertices.push(vertex);
        }

        return vertices;
    };

    /**
     * Parses a string containing ordered x y pairs separated by spaces (and optionally commas), 
     * into a `Matter.Vertices` object for the given `Matter.Body`.
     * For parsing SVG paths, see `Svg.pathToVertices`.
     * @method fromPath
     * @param {string} path
     * @param {body} body
     * @return {vertices} vertices
     */
    Vertices.fromPath = function(path, body) {
        var pathPattern = /L?\s*([-\d.e]+)[\s,]*([-\d.e]+)*/ig,
            points = [];

        path.replace(pathPattern, function(match, x, y) {
            points.push({ x: parseFloat(x), y: parseFloat(y) });
        });

        return Vertices.create(points, body);
    };

    /**
     * Returns the centre (centroid) of the set of vertices.
     * @method centre
     * @param {vertices} vertices
     * @return {vector} The centre point
     */
    Vertices.centre = function(vertices) {
        var area = Vertices.area(vertices, true),
            centre = { x: 0, y: 0 },
            cross,
            temp,
            j;

        for (var i = 0; i < vertices.length; i++) {
            j = (i + 1) % vertices.length;
            cross = Vector.cross(vertices[i], vertices[j]);
            temp = Vector.mult(Vector.add(vertices[i], vertices[j]), cross);
            centre = Vector.add(centre, temp);
        }

        return Vector.div(centre, 6 * area);
    };

    /**
     * Returns the average (mean) of the set of vertices.
     * @method mean
     * @param {vertices} vertices
     * @return {vector} The average point
     */
    Vertices.mean = function(vertices) {
        var average = { x: 0, y: 0 };

        for (var i = 0; i < vertices.length; i++) {
            average.x += vertices[i].x;
            average.y += vertices[i].y;
        }

        return Vector.div(average, vertices.length);
    };

    /**
     * Returns the area of the set of vertices.
     * @method area
     * @param {vertices} vertices
     * @param {bool} signed
     * @return {number} The area
     */
    Vertices.area = function(vertices, signed) {
        var area = 0,
            j = vertices.length - 1;

        for (var i = 0; i < vertices.length; i++) {
            area += (vertices[j].x - vertices[i].x) * (vertices[j].y + vertices[i].y);
            j = i;
        }

        if (signed)
            return area / 2;

        return Math.abs(area) / 2;
    };

    /**
     * Returns the moment of inertia (second moment of area) of the set of vertices given the total mass.
     * @method inertia
     * @param {vertices} vertices
     * @param {number} mass
     * @return {number} The polygon's moment of inertia
     */
    Vertices.inertia = function(vertices, mass) {
        var numerator = 0,
            denominator = 0,
            v = vertices,
            cross,
            j;

        // find the polygon's moment of inertia, using second moment of area
        // from equations at http://www.physicsforums.com/showthread.php?t=25293
        for (var n = 0; n < v.length; n++) {
            j = (n + 1) % v.length;
            cross = Math.abs(Vector.cross(v[j], v[n]));
            numerator += cross * (Vector.dot(v[j], v[j]) + Vector.dot(v[j], v[n]) + Vector.dot(v[n], v[n]));
            denominator += cross;
        }

        return (mass / 6) * (numerator / denominator);
    };

    /**
     * Translates the set of vertices in-place.
     * @method translate
     * @param {vertices} vertices
     * @param {vector} vector
     * @param {number} scalar
     */
    Vertices.translate = function(vertices, vector, scalar) {
        scalar = typeof scalar !== 'undefined' ? scalar : 1;

        var verticesLength = vertices.length,
            translateX = vector.x * scalar,
            translateY = vector.y * scalar,
            i;
        
        for (i = 0; i < verticesLength; i++) {
            vertices[i].x += translateX;
            vertices[i].y += translateY;
        }

        return vertices;
    };

    /**
     * Rotates the set of vertices in-place.
     * @method rotate
     * @param {vertices} vertices
     * @param {number} angle
     * @param {vector} point
     */
    Vertices.rotate = function(vertices, angle, point) {
        if (angle === 0)
            return;

        var cos = Math.cos(angle),
            sin = Math.sin(angle),
            pointX = point.x,
            pointY = point.y,
            verticesLength = vertices.length,
            vertex,
            dx,
            dy,
            i;

        for (i = 0; i < verticesLength; i++) {
            vertex = vertices[i];
            dx = vertex.x - pointX;
            dy = vertex.y - pointY;
            vertex.x = pointX + (dx * cos - dy * sin);
            vertex.y = pointY + (dx * sin + dy * cos);
        }

        return vertices;
    };

    /**
     * Returns `true` if the `point` is inside the set of `vertices`.
     * @method contains
     * @param {vertices} vertices
     * @param {vector} point
     * @return {boolean} True if the vertices contains point, otherwise false
     */
    Vertices.contains = function(vertices, point) {
        var pointX = point.x,
            pointY = point.y,
            verticesLength = vertices.length,
            vertex = vertices[verticesLength - 1],
            nextVertex;

        for (var i = 0; i < verticesLength; i++) {
            nextVertex = vertices[i];

            if ((pointX - vertex.x) * (nextVertex.y - vertex.y) 
                + (pointY - vertex.y) * (vertex.x - nextVertex.x) > 0) {
                return false;
            }

            vertex = nextVertex;
        }

        return true;
    };

    /**
     * Scales the vertices from a point (default is centre) in-place.
     * @method scale
     * @param {vertices} vertices
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     */
    Vertices.scale = function(vertices, scaleX, scaleY, point) {
        if (scaleX === 1 && scaleY === 1)
            return vertices;

        point = point || Vertices.centre(vertices);

        var vertex,
            delta;

        for (var i = 0; i < vertices.length; i++) {
            vertex = vertices[i];
            delta = Vector.sub(vertex, point);
            vertices[i].x = point.x + delta.x * scaleX;
            vertices[i].y = point.y + delta.y * scaleY;
        }

        return vertices;
    };

    /**
     * Chamfers a set of vertices by giving them rounded corners, returns a new set of vertices.
     * The radius parameter is a single number or an array to specify the radius for each vertex.
     * @method chamfer
     * @param {vertices} vertices
     * @param {number[]} radius
     * @param {number} quality
     * @param {number} qualityMin
     * @param {number} qualityMax
     */
    Vertices.chamfer = function(vertices, radius, quality, qualityMin, qualityMax) {
        if (typeof radius === 'number') {
            radius = [radius];
        } else {
            radius = radius || [8];
        }

        // quality defaults to -1, which is auto
        quality = (typeof quality !== 'undefined') ? quality : -1;
        qualityMin = qualityMin || 2;
        qualityMax = qualityMax || 14;

        var newVertices = [];

        for (var i = 0; i < vertices.length; i++) {
            var prevVertex = vertices[i - 1 >= 0 ? i - 1 : vertices.length - 1],
                vertex = vertices[i],
                nextVertex = vertices[(i + 1) % vertices.length],
                currentRadius = radius[i < radius.length ? i : radius.length - 1];

            if (currentRadius === 0) {
                newVertices.push(vertex);
                continue;
            }

            var prevNormal = Vector.normalise({ 
                x: vertex.y - prevVertex.y, 
                y: prevVertex.x - vertex.x
            });

            var nextNormal = Vector.normalise({ 
                x: nextVertex.y - vertex.y, 
                y: vertex.x - nextVertex.x
            });

            var diagonalRadius = Math.sqrt(2 * Math.pow(currentRadius, 2)),
                radiusVector = Vector.mult(Common.clone(prevNormal), currentRadius),
                midNormal = Vector.normalise(Vector.mult(Vector.add(prevNormal, nextNormal), 0.5)),
                scaledVertex = Vector.sub(vertex, Vector.mult(midNormal, diagonalRadius));

            var precision = quality;

            if (quality === -1) {
                // automatically decide precision
                precision = Math.pow(currentRadius, 0.32) * 1.75;
            }

            precision = Common.clamp(precision, qualityMin, qualityMax);

            // use an even value for precision, more likely to reduce axes by using symmetry
            if (precision % 2 === 1)
                precision += 1;

            var alpha = Math.acos(Vector.dot(prevNormal, nextNormal)),
                theta = alpha / precision;

            for (var j = 0; j < precision; j++) {
                newVertices.push(Vector.add(Vector.rotate(radiusVector, theta * j), scaledVertex));
            }
        }

        return newVertices;
    };

    /**
     * Sorts the input vertices into clockwise order in place.
     * @method clockwiseSort
     * @param {vertices} vertices
     * @return {vertices} vertices
     */
    Vertices.clockwiseSort = function(vertices) {
        var centre = Vertices.mean(vertices);

        vertices.sort(function(vertexA, vertexB) {
            return Vector.angle(centre, vertexA) - Vector.angle(centre, vertexB);
        });

        return vertices;
    };

    /**
     * Returns true if the vertices form a convex shape (vertices must be in clockwise order).
     * @method isConvex
     * @param {vertices} vertices
     * @return {bool} `true` if the `vertices` are convex, `false` if not (or `null` if not computable).
     */
    Vertices.isConvex = function(vertices) {
        // http://paulbourke.net/geometry/polygonmesh/
        // Copyright (c) Paul Bourke (use permitted)

        var flag = 0,
            n = vertices.length,
            i,
            j,
            k,
            z;

        if (n < 3)
            return null;

        for (i = 0; i < n; i++) {
            j = (i + 1) % n;
            k = (i + 2) % n;
            z = (vertices[j].x - vertices[i].x) * (vertices[k].y - vertices[j].y);
            z -= (vertices[j].y - vertices[i].y) * (vertices[k].x - vertices[j].x);

            if (z < 0) {
                flag |= 1;
            } else if (z > 0) {
                flag |= 2;
            }

            if (flag === 3) {
                return false;
            }
        }

        if (flag !== 0){
            return true;
        } else {
            return null;
        }
    };

    /**
     * Returns the convex hull of the input vertices as a new array of points.
     * @method hull
     * @param {vertices} vertices
     * @return [vertex] vertices
     */
    Vertices.hull = function(vertices) {
        // http://geomalgorithms.com/a10-_hull-1.html

        var upper = [],
            lower = [], 
            vertex,
            i;

        // sort vertices on x-axis (y-axis for ties)
        vertices = vertices.slice(0);
        vertices.sort(function(vertexA, vertexB) {
            var dx = vertexA.x - vertexB.x;
            return dx !== 0 ? dx : vertexA.y - vertexB.y;
        });

        // build lower hull
        for (i = 0; i < vertices.length; i += 1) {
            vertex = vertices[i];

            while (lower.length >= 2 
                   && Vector.cross3(lower[lower.length - 2], lower[lower.length - 1], vertex) <= 0) {
                lower.pop();
            }

            lower.push(vertex);
        }

        // build upper hull
        for (i = vertices.length - 1; i >= 0; i -= 1) {
            vertex = vertices[i];

            while (upper.length >= 2 
                   && Vector.cross3(upper[upper.length - 2], upper[upper.length - 1], vertex) <= 0) {
                upper.pop();
            }

            upper.push(vertex);
        }

        // concatenation of the lower and upper hulls gives the convex hull
        // omit last points because they are repeated at the beginning of the other list
        upper.pop();
        lower.pop();

        return upper.concat(lower);
    };

})();


/***/ }),
/* 4 */
/***/ (function(module, exports, __nested_webpack_require_49544__) {

/**
* The `Matter.Body` module contains methods for creating and manipulating rigid bodies.
* For creating bodies with common configurations such as rectangles, circles and other polygons see the module `Matter.Bodies`.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).

* @class Body
*/

var Body = {};

module.exports = Body;

var Vertices = __nested_webpack_require_49544__(3);
var Vector = __nested_webpack_require_49544__(2);
var Sleeping = __nested_webpack_require_49544__(7);
var Common = __nested_webpack_require_49544__(0);
var Bounds = __nested_webpack_require_49544__(1);
var Axes = __nested_webpack_require_49544__(11);

(function() {

    Body._timeCorrection = true;
    Body._inertiaScale = 4;
    Body._nextCollidingGroupId = 1;
    Body._nextNonCollidingGroupId = -1;
    Body._nextCategory = 0x0001;
    Body._baseDelta = 1000 / 60;

    /**
     * Creates a new rigid body model. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * Vertices must be specified in clockwise order.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {body} body
     */
    Body.create = function(options) {
        var defaults = {
            id: Common.nextId(),
            type: 'body',
            label: 'Body',
            parts: [],
            plugin: {},
            angle: 0,
            vertices: Vertices.fromPath('L 0 0 L 40 0 L 40 40 L 0 40'),
            position: { x: 0, y: 0 },
            force: { x: 0, y: 0 },
            torque: 0,
            positionImpulse: { x: 0, y: 0 },
            constraintImpulse: { x: 0, y: 0, angle: 0 },
            totalContacts: 0,
            speed: 0,
            angularSpeed: 0,
            velocity: { x: 0, y: 0 },
            angularVelocity: 0,
            isSensor: false,
            isStatic: false,
            isSleeping: false,
            motion: 0,
            sleepThreshold: 60,
            density: 0.001,
            restitution: 0,
            friction: 0.1,
            frictionStatic: 0.5,
            frictionAir: 0.01,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            },
            slop: 0.05,
            timeScale: 1,
            render: {
                visible: true,
                opacity: 1,
                strokeStyle: null,
                fillStyle: null,
                lineWidth: null,
                sprite: {
                    xScale: 1,
                    yScale: 1,
                    xOffset: 0,
                    yOffset: 0
                }
            },
            events: null,
            bounds: null,
            chamfer: null,
            circleRadius: 0,
            positionPrev: null,
            anglePrev: 0,
            parent: null,
            axes: null,
            area: 0,
            mass: 0,
            inertia: 0,
            deltaTime: 1000 / 60,
            _original: null
        };

        var body = Common.extend(defaults, options);

        _initProperties(body, options);

        return body;
    };

    /**
     * Returns the next unique group index for which bodies will collide.
     * If `isNonColliding` is `true`, returns the next unique group index for which bodies will _not_ collide.
     * See `body.collisionFilter` for more information.
     * @method nextGroup
     * @param {bool} [isNonColliding=false]
     * @return {Number} Unique group index
     */
    Body.nextGroup = function(isNonColliding) {
        if (isNonColliding)
            return Body._nextNonCollidingGroupId--;

        return Body._nextCollidingGroupId++;
    };

    /**
     * Returns the next unique category bitfield (starting after the initial default category `0x0001`).
     * There are 32 available. See `body.collisionFilter` for more information.
     * @method nextCategory
     * @return {Number} Unique category bitfield
     */
    Body.nextCategory = function() {
        Body._nextCategory = Body._nextCategory << 1;
        return Body._nextCategory;
    };

    /**
     * Initialises body properties.
     * @method _initProperties
     * @private
     * @param {body} body
     * @param {} [options]
     */
    var _initProperties = function(body, options) {
        options = options || {};

        // init required properties (order is important)
        Body.set(body, {
            bounds: body.bounds || Bounds.create(body.vertices),
            positionPrev: body.positionPrev || Vector.clone(body.position),
            anglePrev: body.anglePrev || body.angle,
            vertices: body.vertices,
            parts: body.parts || [body],
            isStatic: body.isStatic,
            isSleeping: body.isSleeping,
            parent: body.parent || body
        });

        Vertices.rotate(body.vertices, body.angle, body.position);
        Axes.rotate(body.axes, body.angle);
        Bounds.update(body.bounds, body.vertices, body.velocity);

        // allow options to override the automatically calculated properties
        Body.set(body, {
            axes: options.axes || body.axes,
            area: options.area || body.area,
            mass: options.mass || body.mass,
            inertia: options.inertia || body.inertia
        });

        // render properties
        var defaultFillStyle = (body.isStatic ? '#14151f' : Common.choose(['#f19648', '#f5d259', '#f55a3c', '#063e7b', '#ececd1'])),
            defaultStrokeStyle = body.isStatic ? '#555' : '#ccc',
            defaultLineWidth = body.isStatic && body.render.fillStyle === null ? 1 : 0;
        body.render.fillStyle = body.render.fillStyle || defaultFillStyle;
        body.render.strokeStyle = body.render.strokeStyle || defaultStrokeStyle;
        body.render.lineWidth = body.render.lineWidth || defaultLineWidth;
        body.render.sprite.xOffset += -(body.bounds.min.x - body.position.x) / (body.bounds.max.x - body.bounds.min.x);
        body.render.sprite.yOffset += -(body.bounds.min.y - body.position.y) / (body.bounds.max.y - body.bounds.min.y);
    };

    /**
     * Given a property and a value (or map of), sets the property(s) on the body, using the appropriate setter functions if they exist.
     * Prefer to use the actual setter functions in performance critical situations.
     * @method set
     * @param {body} body
     * @param {} settings A property name (or map of properties and values) to set on the body.
     * @param {} value The value to set if `settings` is a single property name.
     */
    Body.set = function(body, settings, value) {
        var property;

        if (typeof settings === 'string') {
            property = settings;
            settings = {};
            settings[property] = value;
        }

        for (property in settings) {
            if (!Object.prototype.hasOwnProperty.call(settings, property))
                continue;

            value = settings[property];
            switch (property) {

            case 'isStatic':
                Body.setStatic(body, value);
                break;
            case 'isSleeping':
                Sleeping.set(body, value);
                break;
            case 'mass':
                Body.setMass(body, value);
                break;
            case 'density':
                Body.setDensity(body, value);
                break;
            case 'inertia':
                Body.setInertia(body, value);
                break;
            case 'vertices':
                Body.setVertices(body, value);
                break;
            case 'position':
                Body.setPosition(body, value);
                break;
            case 'angle':
                Body.setAngle(body, value);
                break;
            case 'velocity':
                Body.setVelocity(body, value);
                break;
            case 'angularVelocity':
                Body.setAngularVelocity(body, value);
                break;
            case 'speed':
                Body.setSpeed(body, value);
                break;
            case 'angularSpeed':
                Body.setAngularSpeed(body, value);
                break;
            case 'parts':
                Body.setParts(body, value);
                break;
            case 'centre':
                Body.setCentre(body, value);
                break;
            default:
                body[property] = value;

            }
        }
    };

    /**
     * Sets the body as static, including isStatic flag and setting mass and inertia to Infinity.
     * @method setStatic
     * @param {body} body
     * @param {bool} isStatic
     */
    Body.setStatic = function(body, isStatic) {
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            if (isStatic) {
                if (!part.isStatic) {
                    part._original = {
                        restitution: part.restitution,
                        friction: part.friction,
                        mass: part.mass,
                        inertia: part.inertia,
                        density: part.density,
                        inverseMass: part.inverseMass,
                        inverseInertia: part.inverseInertia
                    };
                }

                part.restitution = 0;
                part.friction = 1;
                part.mass = part.inertia = part.density = Infinity;
                part.inverseMass = part.inverseInertia = 0;

                part.positionPrev.x = part.position.x;
                part.positionPrev.y = part.position.y;
                part.anglePrev = part.angle;
                part.angularVelocity = 0;
                part.speed = 0;
                part.angularSpeed = 0;
                part.motion = 0;
            } else if (part._original) {
                part.restitution = part._original.restitution;
                part.friction = part._original.friction;
                part.mass = part._original.mass;
                part.inertia = part._original.inertia;
                part.density = part._original.density;
                part.inverseMass = part._original.inverseMass;
                part.inverseInertia = part._original.inverseInertia;

                part._original = null;
            }

            part.isStatic = isStatic;
        }
    };

    /**
     * Sets the mass of the body. Inverse mass, density and inertia are automatically updated to reflect the change.
     * @method setMass
     * @param {body} body
     * @param {number} mass
     */
    Body.setMass = function(body, mass) {
        var moment = body.inertia / (body.mass / 6);
        body.inertia = moment * (mass / 6);
        body.inverseInertia = 1 / body.inertia;

        body.mass = mass;
        body.inverseMass = 1 / body.mass;
        body.density = body.mass / body.area;
    };

    /**
     * Sets the density of the body. Mass and inertia are automatically updated to reflect the change.
     * @method setDensity
     * @param {body} body
     * @param {number} density
     */
    Body.setDensity = function(body, density) {
        Body.setMass(body, density * body.area);
        body.density = density;
    };

    /**
     * Sets the moment of inertia of the body. This is the second moment of area in two dimensions.
     * Inverse inertia is automatically updated to reflect the change. Mass is not changed.
     * @method setInertia
     * @param {body} body
     * @param {number} inertia
     */
    Body.setInertia = function(body, inertia) {
        body.inertia = inertia;
        body.inverseInertia = 1 / body.inertia;
    };

    /**
     * Sets the body's vertices and updates body properties accordingly, including inertia, area and mass (with respect to `body.density`).
     * Vertices will be automatically transformed to be orientated around their centre of mass as the origin.
     * They are then automatically translated to world space based on `body.position`.
     *
     * The `vertices` argument should be passed as an array of `Matter.Vector` points (or a `Matter.Vertices` array).
     * Vertices must form a convex hull. Concave vertices must be decomposed into convex parts.
     * 
     * @method setVertices
     * @param {body} body
     * @param {vector[]} vertices
     */
    Body.setVertices = function(body, vertices) {
        // change vertices
        if (vertices[0].body === body) {
            body.vertices = vertices;
        } else {
            body.vertices = Vertices.create(vertices, body);
        }

        // update properties
        body.axes = Axes.fromVertices(body.vertices);
        body.area = Vertices.area(body.vertices);
        Body.setMass(body, body.density * body.area);

        // orient vertices around the centre of mass at origin (0, 0)
        var centre = Vertices.centre(body.vertices);
        Vertices.translate(body.vertices, centre, -1);

        // update inertia while vertices are at origin (0, 0)
        Body.setInertia(body, Body._inertiaScale * Vertices.inertia(body.vertices, body.mass));

        // update geometry
        Vertices.translate(body.vertices, body.position);
        Bounds.update(body.bounds, body.vertices, body.velocity);
    };

    /**
     * Sets the parts of the `body`. 
     * 
     * See `body.parts` for details and requirements on how parts are used.
     * 
     * See Bodies.fromVertices for a related utility.
     * 
     * This function updates `body` mass, inertia and centroid based on the parts geometry.  
     * Sets each `part.parent` to be this `body`.  
     * 
     * The convex hull is computed and set on this `body` (unless `autoHull` is `false`).  
     * Automatically ensures that the first part in `body.parts` is the `body`.
     * @method setParts
     * @param {body} body
     * @param {body[]} parts
     * @param {bool} [autoHull=true]
     */
    Body.setParts = function(body, parts, autoHull) {
        var i;

        // add all the parts, ensuring that the first part is always the parent body
        parts = parts.slice(0);
        body.parts.length = 0;
        body.parts.push(body);
        body.parent = body;

        for (i = 0; i < parts.length; i++) {
            var part = parts[i];
            if (part !== body) {
                part.parent = body;
                body.parts.push(part);
            }
        }

        if (body.parts.length === 1)
            return;

        autoHull = typeof autoHull !== 'undefined' ? autoHull : true;

        // find the convex hull of all parts to set on the parent body
        if (autoHull) {
            var vertices = [];
            for (i = 0; i < parts.length; i++) {
                vertices = vertices.concat(parts[i].vertices);
            }

            Vertices.clockwiseSort(vertices);

            var hull = Vertices.hull(vertices),
                hullCentre = Vertices.centre(hull);

            Body.setVertices(body, hull);
            Vertices.translate(body.vertices, hullCentre);
        }

        // sum the properties of all compound parts of the parent body
        var total = Body._totalProperties(body);

        body.area = total.area;
        body.parent = body;
        body.position.x = total.centre.x;
        body.position.y = total.centre.y;
        body.positionPrev.x = total.centre.x;
        body.positionPrev.y = total.centre.y;

        Body.setMass(body, total.mass);
        Body.setInertia(body, total.inertia);
        Body.setPosition(body, total.centre);
    };

    /**
     * Set the centre of mass of the body. 
     * The `centre` is a vector in world-space unless `relative` is set, in which case it is a translation.
     * The centre of mass is the point the body rotates about and can be used to simulate non-uniform density.
     * This is equal to moving `body.position` but not the `body.vertices`.
     * Invalid if the `centre` falls outside the body's convex hull.
     * @method setCentre
     * @param {body} body
     * @param {vector} centre
     * @param {bool} relative
     */
    Body.setCentre = function(body, centre, relative) {
        if (!relative) {
            body.positionPrev.x = centre.x - (body.position.x - body.positionPrev.x);
            body.positionPrev.y = centre.y - (body.position.y - body.positionPrev.y);
            body.position.x = centre.x;
            body.position.y = centre.y;
        } else {
            body.positionPrev.x += centre.x;
            body.positionPrev.y += centre.y;
            body.position.x += centre.x;
            body.position.y += centre.y;
        }
    };

    /**
     * Sets the position of the body. By default velocity is unchanged.
     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
     * @method setPosition
     * @param {body} body
     * @param {vector} position
     * @param {boolean} [updateVelocity=false]
     */
    Body.setPosition = function(body, position, updateVelocity) {
        var delta = Vector.sub(position, body.position);

        if (updateVelocity) {
            body.positionPrev.x = body.position.x;
            body.positionPrev.y = body.position.y;
            body.velocity.x = delta.x;
            body.velocity.y = delta.y;
            body.speed = Vector.magnitude(delta);
        } else {
            body.positionPrev.x += delta.x;
            body.positionPrev.y += delta.y;
        }

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.position.x += delta.x;
            part.position.y += delta.y;
            Vertices.translate(part.vertices, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Sets the angle of the body. By default angular velocity is unchanged.
     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
     * @method setAngle
     * @param {body} body
     * @param {number} angle
     * @param {boolean} [updateVelocity=false]
     */
    Body.setAngle = function(body, angle, updateVelocity) {
        var delta = angle - body.angle;
        
        if (updateVelocity) {
            body.anglePrev = body.angle;
            body.angularVelocity = delta;
            body.angularSpeed = Math.abs(delta);
        } else {
            body.anglePrev += delta;
        }

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];
            part.angle += delta;
            Vertices.rotate(part.vertices, delta, body.position);
            Axes.rotate(part.axes, delta);
            Bounds.update(part.bounds, part.vertices, body.velocity);
            if (i > 0) {
                Vector.rotateAbout(part.position, delta, body.position, part.position);
            }
        }
    };

    /**
     * Sets the current linear velocity of the body.  
     * Affects body speed.
     * @method setVelocity
     * @param {body} body
     * @param {vector} velocity
     */
    Body.setVelocity = function(body, velocity) {
        var timeScale = body.deltaTime / Body._baseDelta;
        body.positionPrev.x = body.position.x - velocity.x * timeScale;
        body.positionPrev.y = body.position.y - velocity.y * timeScale;
        body.velocity.x = (body.position.x - body.positionPrev.x) / timeScale;
        body.velocity.y = (body.position.y - body.positionPrev.y) / timeScale;
        body.speed = Vector.magnitude(body.velocity);
    };

    /**
     * Gets the current linear velocity of the body.
     * @method getVelocity
     * @param {body} body
     * @return {vector} velocity
     */
    Body.getVelocity = function(body) {
        var timeScale = Body._baseDelta / body.deltaTime;

        return {
            x: (body.position.x - body.positionPrev.x) * timeScale,
            y: (body.position.y - body.positionPrev.y) * timeScale
        };
    };

    /**
     * Gets the current linear speed of the body.  
     * Equivalent to the magnitude of its velocity.
     * @method getSpeed
     * @param {body} body
     * @return {number} speed
     */
    Body.getSpeed = function(body) {
        return Vector.magnitude(Body.getVelocity(body));
    };

    /**
     * Sets the current linear speed of the body.  
     * Direction is maintained. Affects body velocity.
     * @method setSpeed
     * @param {body} body
     * @param {number} speed
     */
    Body.setSpeed = function(body, speed) {
        Body.setVelocity(body, Vector.mult(Vector.normalise(Body.getVelocity(body)), speed));
    };

    /**
     * Sets the current rotational velocity of the body.  
     * Affects body angular speed.
     * @method setAngularVelocity
     * @param {body} body
     * @param {number} velocity
     */
    Body.setAngularVelocity = function(body, velocity) {
        var timeScale = body.deltaTime / Body._baseDelta;
        body.anglePrev = body.angle - velocity * timeScale;
        body.angularVelocity = (body.angle - body.anglePrev) / timeScale;
        body.angularSpeed = Math.abs(body.angularVelocity);
    };

    /**
     * Gets the current rotational velocity of the body.
     * @method getAngularVelocity
     * @param {body} body
     * @return {number} angular velocity
     */
    Body.getAngularVelocity = function(body) {
        return (body.angle - body.anglePrev) * Body._baseDelta / body.deltaTime;
    };

    /**
     * Gets the current rotational speed of the body.  
     * Equivalent to the magnitude of its angular velocity.
     * @method getAngularSpeed
     * @param {body} body
     * @return {number} angular speed
     */
    Body.getAngularSpeed = function(body) {
        return Math.abs(Body.getAngularVelocity(body));
    };

    /**
     * Sets the current rotational speed of the body.  
     * Direction is maintained. Affects body angular velocity.
     * @method setAngularSpeed
     * @param {body} body
     * @param {number} speed
     */
    Body.setAngularSpeed = function(body, speed) {
        Body.setAngularVelocity(body, Common.sign(Body.getAngularVelocity(body)) * speed);
    };

    /**
     * Moves a body by a given vector relative to its current position. By default velocity is unchanged.
     * If `updateVelocity` is `true` then velocity is inferred from the change in position.
     * @method translate
     * @param {body} body
     * @param {vector} translation
     * @param {boolean} [updateVelocity=false]
     */
    Body.translate = function(body, translation, updateVelocity) {
        Body.setPosition(body, Vector.add(body.position, translation), updateVelocity);
    };

    /**
     * Rotates a body by a given angle relative to its current angle. By default angular velocity is unchanged.
     * If `updateVelocity` is `true` then angular velocity is inferred from the change in angle.
     * @method rotate
     * @param {body} body
     * @param {number} rotation
     * @param {vector} [point]
     * @param {boolean} [updateVelocity=false]
     */
    Body.rotate = function(body, rotation, point, updateVelocity) {
        if (!point) {
            Body.setAngle(body, body.angle + rotation, updateVelocity);
        } else {
            var cos = Math.cos(rotation),
                sin = Math.sin(rotation),
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            }, updateVelocity);

            Body.setAngle(body, body.angle + rotation, updateVelocity);
        }
    };

    /**
     * Scales the body, including updating physical properties (mass, area, axes, inertia), from a world-space point (default is body centre).
     * @method scale
     * @param {body} body
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} [point]
     */
    Body.scale = function(body, scaleX, scaleY, point) {
        var totalArea = 0,
            totalInertia = 0;

        point = point || body.position;

        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            // scale vertices
            Vertices.scale(part.vertices, scaleX, scaleY, point);

            // update properties
            part.axes = Axes.fromVertices(part.vertices);
            part.area = Vertices.area(part.vertices);
            Body.setMass(part, body.density * part.area);

            // update inertia (requires vertices to be at origin)
            Vertices.translate(part.vertices, { x: -part.position.x, y: -part.position.y });
            Body.setInertia(part, Body._inertiaScale * Vertices.inertia(part.vertices, part.mass));
            Vertices.translate(part.vertices, { x: part.position.x, y: part.position.y });

            if (i > 0) {
                totalArea += part.area;
                totalInertia += part.inertia;
            }

            // scale position
            part.position.x = point.x + (part.position.x - point.x) * scaleX;
            part.position.y = point.y + (part.position.y - point.y) * scaleY;

            // update bounds
            Bounds.update(part.bounds, part.vertices, body.velocity);
        }

        // handle parent body
        if (body.parts.length > 1) {
            body.area = totalArea;

            if (!body.isStatic) {
                Body.setMass(body, body.density * totalArea);
                Body.setInertia(body, totalInertia);
            }
        }

        // handle circles
        if (body.circleRadius) { 
            if (scaleX === scaleY) {
                body.circleRadius *= scaleX;
            } else {
                // body is no longer a circle
                body.circleRadius = null;
            }
        }
    };

    /**
     * Performs an update by integrating the equations of motion on the `body`.
     * This is applied every update by `Matter.Engine` automatically.
     * @method update
     * @param {body} body
     * @param {number} [deltaTime=16.666]
     */
    Body.update = function(body, deltaTime) {
        deltaTime = (typeof deltaTime !== 'undefined' ? deltaTime : (1000 / 60)) * body.timeScale;

        var deltaTimeSquared = deltaTime * deltaTime,
            correction = Body._timeCorrection ? deltaTime / (body.deltaTime || deltaTime) : 1;

        // from the previous step
        var frictionAir = 1 - body.frictionAir * (deltaTime / Common._baseDelta),
            velocityPrevX = (body.position.x - body.positionPrev.x) * correction,
            velocityPrevY = (body.position.y - body.positionPrev.y) * correction;

        // update velocity with Verlet integration
        body.velocity.x = (velocityPrevX * frictionAir) + (body.force.x / body.mass) * deltaTimeSquared;
        body.velocity.y = (velocityPrevY * frictionAir) + (body.force.y / body.mass) * deltaTimeSquared;

        body.positionPrev.x = body.position.x;
        body.positionPrev.y = body.position.y;
        body.position.x += body.velocity.x;
        body.position.y += body.velocity.y;
        body.deltaTime = deltaTime;

        // update angular velocity with Verlet integration
        body.angularVelocity = ((body.angle - body.anglePrev) * frictionAir * correction) + (body.torque / body.inertia) * deltaTimeSquared;
        body.anglePrev = body.angle;
        body.angle += body.angularVelocity;

        // transform the body geometry
        for (var i = 0; i < body.parts.length; i++) {
            var part = body.parts[i];

            Vertices.translate(part.vertices, body.velocity);
            
            if (i > 0) {
                part.position.x += body.velocity.x;
                part.position.y += body.velocity.y;
            }

            if (body.angularVelocity !== 0) {
                Vertices.rotate(part.vertices, body.angularVelocity, body.position);
                Axes.rotate(part.axes, body.angularVelocity);
                if (i > 0) {
                    Vector.rotateAbout(part.position, body.angularVelocity, body.position, part.position);
                }
            }

            Bounds.update(part.bounds, part.vertices, body.velocity);
        }
    };

    /**
     * Updates properties `body.velocity`, `body.speed`, `body.angularVelocity` and `body.angularSpeed` which are normalised in relation to `Body._baseDelta`.
     * @method updateVelocities
     * @param {body} body
     */
    Body.updateVelocities = function(body) {
        var timeScale = Body._baseDelta / body.deltaTime,
            bodyVelocity = body.velocity;

        bodyVelocity.x = (body.position.x - body.positionPrev.x) * timeScale;
        bodyVelocity.y = (body.position.y - body.positionPrev.y) * timeScale;
        body.speed = Math.sqrt((bodyVelocity.x * bodyVelocity.x) + (bodyVelocity.y * bodyVelocity.y));

        body.angularVelocity = (body.angle - body.anglePrev) * timeScale;
        body.angularSpeed = Math.abs(body.angularVelocity);
    };

    /**
     * Applies the `force` to the `body` from the force origin `position` in world-space, over a single timestep, including applying any resulting angular torque.
     * 
     * Forces are useful for effects like gravity, wind or rocket thrust, but can be difficult in practice when precise control is needed. In these cases see `Body.setVelocity` and `Body.setPosition` as an alternative.
     * 
     * The force from this function is only applied once for the duration of a single timestep, in other words the duration depends directly on the current engine update `delta` and the rate of calls to this function.
     * 
     * Therefore to account for time, you should apply the force constantly over as many engine updates as equivalent to the intended duration.
     * 
     * If all or part of the force duration is some fraction of a timestep, first multiply the force by `duration / timestep`.
     * 
     * The force origin `position` in world-space must also be specified. Passing `body.position` will result in zero angular effect as the force origin would be at the centre of mass.
     * 
     * The `body` will take time to accelerate under a force, the resulting effect depends on duration of the force, the body mass and other forces on the body including friction combined.
     * @method applyForce
     * @param {body} body
     * @param {vector} position The force origin in world-space. Pass `body.position` to avoid angular torque.
     * @param {vector} force
     */
    Body.applyForce = function(body, position, force) {
        var offset = { x: position.x - body.position.x, y: position.y - body.position.y };
        body.force.x += force.x;
        body.force.y += force.y;
        body.torque += offset.x * force.y - offset.y * force.x;
    };

    /**
     * Returns the sums of the properties of all compound parts of the parent body.
     * @method _totalProperties
     * @private
     * @param {body} body
     * @return {}
     */
    Body._totalProperties = function(body) {
        // from equations at:
        // https://ecourses.ou.edu/cgi-bin/ebook.cgi?doc=&topic=st&chap_sec=07.2&page=theory
        // http://output.to/sideway/default.asp?qno=121100087

        var properties = {
            mass: 0,
            area: 0,
            inertia: 0,
            centre: { x: 0, y: 0 }
        };

        // sum the properties of all compound parts of the parent body
        for (var i = body.parts.length === 1 ? 0 : 1; i < body.parts.length; i++) {
            var part = body.parts[i],
                mass = part.mass !== Infinity ? part.mass : 1;

            properties.mass += mass;
            properties.area += part.area;
            properties.inertia += part.inertia;
            properties.centre = Vector.add(properties.centre, Vector.mult(part.position, mass));
        }

        properties.centre = Vector.div(properties.centre, properties.mass);

        return properties;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a body starts sleeping (where `this` is the body).
    *
    * @event sleepStart
    * @this {body} The body that has started sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a body ends sleeping (where `this` is the body).
    *
    * @event sleepEnd
    * @this {body} The body that has ended sleeping
    * @param {} event An event object
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Body.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * _Read only_. Set by `Body.create`.
     * 
     * A `String` denoting the type of object.
     *
     * @readOnly
     * @property type
     * @type string
     * @default "body"
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Body"
     */

    /**
     * _Read only_. Use `Body.setParts` to set. 
     * 
     * See `Bodies.fromVertices` for a related utility.
     * 
     * An array of bodies (the 'parts') that make up this body (the 'parent'). The first body in this array must always be a self-reference to this `body`.  
     * 
     * The parts are fixed together and therefore perform as a single unified rigid body.
     * 
     * Parts in relation to each other are allowed to overlap, as well as form gaps or holes, so can be used to create complex concave bodies unlike when using a single part. 
     * 
     * Use properties and functions on the parent `body` rather than on parts.
     *   
     * Outside of their geometry, most properties on parts are not considered or updated.  
     * As such 'per-part' material properties among others are not currently considered.
     * 
     * Parts should be created specifically for their parent body.  
     * Parts should not be shared or reused between bodies, only one parent is supported.  
     * Parts should not have their own parts, they are not handled recursively.  
     * Parts should not be added to the world directly or any other composite.  
     * Parts own vertices must be convex and in clockwise order.   
     * 
     * A body with more than one part is sometimes referred to as a 'compound' body. 
     * 
     * Use `Body.setParts` when setting parts to ensure correct updates of all properties.  
     *
     * @readOnly
     * @property parts
     * @type body[]
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * _Read only_. Updated by `Body.setParts`.
     * 
     * A reference to the body that this is a part of. See `body.parts`.
     * This is a self reference if the body is not a part of another body.
     *
     * @readOnly
     * @property parent
     * @type body
     */

    /**
     * A `Number` specifying the angle of the body, in radians.
     *
     * @property angle
     * @type number
     * @default 0
     */

    /**
     * _Read only_. Use `Body.setVertices` or `Body.setParts` to set. See also `Bodies.fromVertices`.
     * 
     * An array of `Vector` objects that specify the convex hull of the rigid body.
     * These should be provided about the origin `(0, 0)`. E.g.
     *
     * `[{ x: 0, y: 0 }, { x: 25, y: 50 }, { x: 50, y: 0 }]`
     * 
     * Vertices must always be convex, in clockwise order and must not contain any duplicate points.
     * 
     * Concave vertices should be decomposed into convex `parts`, see `Bodies.fromVertices` and `Body.setParts`.
     *
     * When set the vertices are translated such that `body.position` is at the centre of mass.
     * Many other body properties are automatically calculated from these vertices when set including `density`, `area` and `inertia`.
     * 
     * The module `Matter.Vertices` contains useful methods for working with vertices.
     *
     * @readOnly
     * @property vertices
     * @type vector[]
     */

    /**
     * _Read only_. Use `Body.setPosition` to set. 
     * 
     * A `Vector` that specifies the current world-space position of the body.
     * 
     * @readOnly
     * @property position
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that accumulates the total force applied to the body for a single update.
     * Force is zeroed after every `Engine.update`, so constant forces should be applied for every update they are needed. See also `Body.applyForce`.
     * 
     * @property force
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that accumulates the total torque (turning force) applied to the body for a single update. See also `Body.applyForce`.
     * Torque is zeroed after every `Engine.update`, so constant torques should be applied for every update they are needed.
     *
     * Torques result in angular acceleration on every update, which depends on body inertia and the engine update delta.
     * 
     * @property torque
     * @type number
     * @default 0
     */

    /**
     * _Read only_. Use `Body.setSpeed` to set. 
     * 
     * See `Body.getSpeed` for details.
     * 
     * Equivalent to the magnitude of `body.velocity` (always positive).
     * 
     * @readOnly
     * @property speed
     * @type number
     * @default 0
     */

    /**
     * _Read only_. Use `Body.setVelocity` to set. 
     * 
     * See `Body.getVelocity` for details.
     * 
     * Equivalent to the magnitude of `body.angularVelocity` (always positive).
     * 
     * @readOnly
     * @property velocity
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * _Read only_. Use `Body.setAngularSpeed` to set. 
     * 
     * See `Body.getAngularSpeed` for details.
     * 
     * 
     * @readOnly
     * @property angularSpeed
     * @type number
     * @default 0
     */

    /**
     * _Read only_. Use `Body.setAngularVelocity` to set. 
     * 
     * See `Body.getAngularVelocity` for details.
     * 
     *
     * @readOnly
     * @property angularVelocity
     * @type number
     * @default 0
     */

    /**
     * _Read only_. Use `Body.setStatic` to set. 
     * 
     * A flag that indicates whether a body is considered static. A static body can never change position or angle and is completely fixed.
     *
     * @readOnly
     * @property isStatic
     * @type boolean
     * @default false
     */

    /**
     * A flag that indicates whether a body is a sensor. Sensor triggers collision events, but doesn't react with colliding body physically.
     *
     * @property isSensor
     * @type boolean
     * @default false
     */

    /**
     * _Read only_. Use `Sleeping.set` to set. 
     * 
     * A flag that indicates whether the body is considered sleeping. A sleeping body acts similar to a static body, except it is only temporary and can be awoken.
     *
     * @readOnly
     * @property isSleeping
     * @type boolean
     * @default false
     */

    /**
     * _Read only_. Calculated during engine update only when sleeping is enabled.
     * 
     * A `Number` that loosely measures the amount of movement a body currently has.
     *
     * Derived from `body.speed^2 + body.angularSpeed^2`. See `Sleeping.update`.
     * 
     * @readOnly
     * @property motion
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the length of time during which this body must have near-zero velocity before it is set as sleeping by the `Matter.Sleeping` module (if sleeping is enabled by the engine).
     * 
     * @property sleepThreshold
     * @type number
     * @default 60
     */

    /**
     * _Read only_. Use `Body.setDensity` to set. 
     * 
     * A `Number` that defines the density of the body (mass per unit area).
     * 
     * Mass will also be updated when set.
     *
     * @readOnly
     * @property density
     * @type number
     * @default 0.001
     */

    /**
     * _Read only_. Use `Body.setMass` to set. 
     * 
     * A `Number` that defines the mass of the body.
     * 
     * Density will also be updated when set.
     * 
     * @readOnly
     * @property mass
     * @type number
     */

    /**
     * _Read only_. Use `Body.setMass` to set. 
     * 
     * A `Number` that defines the inverse mass of the body (`1 / mass`).
     *
     * @readOnly
     * @property inverseMass
     * @type number
     */

    /**
     * _Read only_. Automatically calculated when vertices, mass or density are set or set through `Body.setInertia`.
     * 
     * A `Number` that defines the moment of inertia of the body. This is the second moment of area in two dimensions.
     * 
     * Can be manually set to `Infinity` to prevent rotation of the body. See `Body.setInertia`.
     * 
     * @readOnly
     * @property inertia
     * @type number
     */

    /**
     * _Read only_. Automatically calculated when vertices, mass or density are set or calculated by `Body.setInertia`.
     * 
     * A `Number` that defines the inverse moment of inertia of the body (`1 / inertia`).
     * 
     * @readOnly
     * @property inverseInertia
     * @type number
     */

    /**
     * A `Number` that defines the restitution (elasticity) of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means collisions may be perfectly inelastic and no bouncing may occur. 
     * A value of `0.8` means the body may bounce back with approximately 80% of its kinetic energy.
     * Note that collision response is based on _pairs_ of bodies, and that `restitution` values are _combined_ with the following formula:
     *
     * `Math.max(bodyA.restitution, bodyB.restitution)`
     *
     * @property restitution
     * @type number
     * @default 0
     */

    /**
     * A `Number` that defines the friction of the body. The value is always positive and is in the range `(0, 1)`.
     * A value of `0` means that the body may slide indefinitely.
     * A value of `1` means the body may come to a stop almost instantly after a force is applied.
     *
     * The effects of the value may be non-linear. 
     * High values may be unstable depending on the body.
     * The engine uses a Coulomb friction model including static and kinetic friction.
     * Note that collision response is based on _pairs_ of bodies, and that `friction` values are _combined_ with the following formula:
     *
     * `Math.min(bodyA.friction, bodyB.friction)`
     *
     * @property friction
     * @type number
     * @default 0.1
     */

    /**
     * A `Number` that defines the static friction of the body (in the Coulomb friction model). 
     * A value of `0` means the body will never 'stick' when it is nearly stationary and only dynamic `friction` is used.
     * The higher the value (e.g. `10`), the more force it will take to initially get the body moving when nearly stationary.
     * This value is multiplied with the `friction` property to make it easier to change `friction` and maintain an appropriate amount of static friction.
     *
     * @property frictionStatic
     * @type number
     * @default 0.5
     */

    /**
     * A `Number` that defines the air friction of the body (air resistance). 
     * A value of `0` means the body will never slow as it moves through space.
     * The higher the value, the faster a body slows when moving through space.
     * The effects of the value are non-linear. 
     *
     * @property frictionAir
     * @type number
     * @default 0.01
     */

    /**
     * An `Object` that specifies the collision filtering properties of this body.
     *
     * Collisions between two bodies will obey the following rules:
     * - If the two bodies have the same non-zero value of `collisionFilter.group`,
     *   they will always collide if the value is positive, and they will never collide
     *   if the value is negative.
     * - If the two bodies have different values of `collisionFilter.group` or if one
     *   (or both) of the bodies has a value of 0, then the category/mask rules apply as follows:
     *
     * Each body belongs to a collision category, given by `collisionFilter.category`. This
     * value is used as a bit field and the category should have only one bit set, meaning that
     * the value of this property is a power of two in the range [1, 2^31]. Thus, there are 32
     * different collision categories available.
     *
     * Each body also defines a collision bitmask, given by `collisionFilter.mask` which specifies
     * the categories it collides with (the value is the bitwise AND value of all these categories).
     *
     * Using the category/mask rules, two bodies `A` and `B` collide if each includes the other's
     * category in its mask, i.e. `(categoryA & maskB) !== 0` and `(categoryB & maskA) !== 0`
     * are both true.
     *
     * @property collisionFilter
     * @type object
     */

    /**
     * An Integer `Number`, that specifies the collision group this body belongs to.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.group
     * @type object
     * @default 0
     */

    /**
     * A bit field that specifies the collision category this body belongs to.
     * The category value should have only one bit set, for example `0x0001`.
     * This means there are up to 32 unique collision categories available.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.category
     * @type object
     * @default 1
     */

    /**
     * A bit mask that specifies the collision categories this body may collide with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter.mask
     * @type object
     * @default -1
     */

    /**
     * A `Number` that specifies a thin boundary around the body where it is allowed to slightly sink into other bodies.
     * 
     * This is required for proper collision response, including friction and restitution effects.
     * 
     * The default should generally suffice in most cases. You may need to decrease this value for very small bodies that are nearing the default value in scale.
     *
     * @property slop
     * @type number
     * @default 0.05
     */

    /**
     * A `Number` that specifies per-body time scaling.
     *
     * @property timeScale
     * @type number
     * @default 1
     */

    /**
     * _Read only_. Updated during engine update.
     * 
     * A `Number` that records the last delta time value used to update this body.
     * Used to calculate speed and velocity.
     *
     * @readOnly
     * @property deltaTime
     * @type number
     * @default 1000 / 60
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the body should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * Sets the opacity to use when rendering.
     *
     * @property render.opacity
     * @type number
     * @default 1
    */

    /**
     * An `Object` that defines the sprite properties to use when rendering, if any.
     *
     * @property render.sprite
     * @type object
     */

    /**
     * An `String` that defines the path to the image to use as the sprite texture, if any.
     *
     * @property render.sprite.texture
     * @type string
     */
     
    /**
     * A `Number` that defines the scaling in the x-axis for the sprite, if any.
     *
     * @property render.sprite.xScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that defines the scaling in the y-axis for the sprite, if any.
     *
     * @property render.sprite.yScale
     * @type number
     * @default 1
     */

    /**
      * A `Number` that defines the offset in the x-axis for the sprite (normalised by texture width).
      *
      * @property render.sprite.xOffset
      * @type number
      * @default 0
      */

    /**
      * A `Number` that defines the offset in the y-axis for the sprite (normalised by texture height).
      *
      * @property render.sprite.yOffset
      * @type number
      * @default 0
      */

    /**
     * A `Number` that defines the line width to use when rendering the body outline (if a sprite is not defined).
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 0
     */

    /**
     * A `String` that defines the fill style to use when rendering the body (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.fillStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the stroke style to use when rendering the body outline (if a sprite is not defined).
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * _Read only_. Calculated automatically when vertices are set.
     * 
     * An array of unique axis vectors (edge normals) used for collision detection.
     * These are automatically calculated when vertices are set.
     * They are constantly updated by `Body.update` during the simulation.
     *
     * @readOnly
     * @property axes
     * @type vector[]
     */
     
    /**
     * _Read only_. Calculated automatically when vertices are set.
     * 
     * A `Number` that measures the area of the body's convex hull.
     * 
     * @readOnly
     * @property area
     * @type string
     * @default 
     */

    /**
     * A `Bounds` object that defines the AABB region for the body.
     * It is automatically calculated when vertices are set and constantly updated by `Body.update` during simulation.
     * 
     * @property bounds
     * @type bounds
     */

    /**
     * Temporarily may hold parameters to be passed to `Vertices.chamfer` where supported by external functions.
     * 
     * See `Vertices.chamfer` for possible parameters this object may hold.
     * 
     * Currently only functions inside `Matter.Bodies` provide a utility using this property as a vertices pre-processing option.
     * 
     * Alternatively consider using `Vertices.chamfer` directly on vertices before passing them to a body creation function.
     * 
     * @property chamfer
     * @type object|null|undefined
     */

})();


/***/ }),
/* 5 */
/***/ (function(module, exports, __nested_webpack_require_100740__) {

/**
* The `Matter.Events` module contains methods to fire and listen to events on other objects.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Events
*/

var Events = {};

module.exports = Events;

var Common = __nested_webpack_require_100740__(0);

(function() {

    /**
     * Subscribes a callback function to the given object's `eventName`.
     * @method on
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.on = function(object, eventNames, callback) {
        var names = eventNames.split(' '),
            name;

        for (var i = 0; i < names.length; i++) {
            name = names[i];
            object.events = object.events || {};
            object.events[name] = object.events[name] || [];
            object.events[name].push(callback);
        }

        return callback;
    };

    /**
     * Removes the given event callback. If no callback, clears all callbacks in `eventNames`. If no `eventNames`, clears all events.
     * @method off
     * @param {} object
     * @param {string} eventNames
     * @param {function} callback
     */
    Events.off = function(object, eventNames, callback) {
        if (!eventNames) {
            object.events = {};
            return;
        }

        // handle Events.off(object, callback)
        if (typeof eventNames === 'function') {
            callback = eventNames;
            eventNames = Common.keys(object.events).join(' ');
        }

        var names = eventNames.split(' ');

        for (var i = 0; i < names.length; i++) {
            var callbacks = object.events[names[i]],
                newCallbacks = [];

            if (callback && callbacks) {
                for (var j = 0; j < callbacks.length; j++) {
                    if (callbacks[j] !== callback)
                        newCallbacks.push(callbacks[j]);
                }
            }

            object.events[names[i]] = newCallbacks;
        }
    };

    /**
     * Fires all the callbacks subscribed to the given object's `eventName`, in the order they subscribed, if any.
     * @method trigger
     * @param {} object
     * @param {string} eventNames
     * @param {} event
     */
    Events.trigger = function(object, eventNames, event) {
        var names,
            name,
            callbacks,
            eventClone;

        var events = object.events;
        
        if (events && Common.keys(events).length > 0) {
            if (!event)
                event = {};

            names = eventNames.split(' ');

            for (var i = 0; i < names.length; i++) {
                name = names[i];
                callbacks = events[name];

                if (callbacks) {
                    eventClone = Common.clone(event, false);
                    eventClone.name = name;
                    eventClone.source = object;

                    for (var j = 0; j < callbacks.length; j++) {
                        callbacks[j].apply(object, [eventClone]);
                    }
                }
            }
        }
    };

})();


/***/ }),
/* 6 */
/***/ (function(module, exports, __nested_webpack_require_103938__) {

/**
* A composite is a collection of `Matter.Body`, `Matter.Constraint` and other `Matter.Composite` objects.
*
* They are a container that can represent complex objects made of multiple parts, even if they are not physically connected.
* A composite could contain anything from a single body all the way up to a whole world.
* 
* When making any changes to composites, use the included functions rather than changing their properties directly.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composite
*/

var Composite = {};

module.exports = Composite;

var Events = __nested_webpack_require_103938__(5);
var Common = __nested_webpack_require_103938__(0);
var Bounds = __nested_webpack_require_103938__(1);
var Body = __nested_webpack_require_103938__(4);

(function() {

    /**
     * Creates a new composite. The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properites section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} [options]
     * @return {composite} A new composite
     */
    Composite.create = function(options) {
        return Common.extend({ 
            id: Common.nextId(),
            type: 'composite',
            parent: null,
            isModified: false,
            bodies: [], 
            constraints: [], 
            composites: [],
            label: 'Composite',
            plugin: {},
            cache: {
                allBodies: null,
                allConstraints: null,
                allComposites: null
            }
        }, options);
    };

    /**
     * Sets the composite's `isModified` flag. 
     * If `updateParents` is true, all parents will be set (default: false).
     * If `updateChildren` is true, all children will be set (default: false).
     * @private
     * @method setModified
     * @param {composite} composite
     * @param {boolean} isModified
     * @param {boolean} [updateParents=false]
     * @param {boolean} [updateChildren=false]
     */
    Composite.setModified = function(composite, isModified, updateParents, updateChildren) {
        composite.isModified = isModified;

        if (isModified && composite.cache) {
            composite.cache.allBodies = null;
            composite.cache.allConstraints = null;
            composite.cache.allComposites = null;
        }

        if (updateParents && composite.parent) {
            Composite.setModified(composite.parent, isModified, updateParents, updateChildren);
        }

        if (updateChildren) {
            for (var i = 0; i < composite.composites.length; i++) {
                var childComposite = composite.composites[i];
                Composite.setModified(childComposite, isModified, updateParents, updateChildren);
            }
        }
    };

    /**
     * Generic single or multi-add function. Adds a single or an array of body(s), constraint(s) or composite(s) to the given composite.
     * Triggers `beforeAdd` and `afterAdd` events on the `composite`.
     * @method add
     * @param {composite} composite
     * @param {object|array} object A single or an array of body(s), constraint(s) or composite(s)
     * @return {composite} The original composite with the objects added
     */
    Composite.add = function(composite, object) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeAdd', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                // skip adding compound parts
                if (obj.parent !== obj) {
                    Common.warn('Composite.add: skipped adding a compound body part (you must add its parent instead)');
                    break;
                }

                Composite.addBody(composite, obj);
                break;
            case 'constraint':
                Composite.addConstraint(composite, obj);
                break;
            case 'composite':
                Composite.addComposite(composite, obj);
                break;
            case 'mouseConstraint':
                Composite.addConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterAdd', { object: object });

        return composite;
    };

    /**
     * Generic remove function. Removes one or many body(s), constraint(s) or a composite(s) to the given composite.
     * Optionally searching its children recursively.
     * Triggers `beforeRemove` and `afterRemove` events on the `composite`.
     * @method remove
     * @param {composite} composite
     * @param {object|array} object
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the objects removed
     */
    Composite.remove = function(composite, object, deep) {
        var objects = [].concat(object);

        Events.trigger(composite, 'beforeRemove', { object: object });

        for (var i = 0; i < objects.length; i++) {
            var obj = objects[i];

            switch (obj.type) {

            case 'body':
                Composite.removeBody(composite, obj, deep);
                break;
            case 'constraint':
                Composite.removeConstraint(composite, obj, deep);
                break;
            case 'composite':
                Composite.removeComposite(composite, obj, deep);
                break;
            case 'mouseConstraint':
                Composite.removeConstraint(composite, obj.constraint);
                break;

            }
        }

        Events.trigger(composite, 'afterRemove', { object: object });

        return composite;
    };

    /**
     * Adds a composite to the given composite.
     * @private
     * @method addComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @return {composite} The original compositeA with the objects from compositeB added
     */
    Composite.addComposite = function(compositeA, compositeB) {
        compositeA.composites.push(compositeB);
        compositeB.parent = compositeA;
        Composite.setModified(compositeA, true, true, false);
        return compositeA;
    };

    /**
     * Removes a composite from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeComposite
     * @param {composite} compositeA
     * @param {composite} compositeB
     * @param {boolean} [deep=false]
     * @return {composite} The original compositeA with the composite removed
     */
    Composite.removeComposite = function(compositeA, compositeB, deep) {
        var position = Common.indexOf(compositeA.composites, compositeB);

        if (position !== -1) {
            var bodies = Composite.allBodies(compositeB);

            Composite.removeCompositeAt(compositeA, position);

            for (var i = 0; i < bodies.length; i++) {
                bodies[i].sleepCounter = 0;
            }
        }

        if (deep) {
            for (var i = 0; i < compositeA.composites.length; i++){
                Composite.removeComposite(compositeA.composites[i], compositeB, true);
            }
        }

        return compositeA;
    };

    /**
     * Removes a composite from the given composite.
     * @private
     * @method removeCompositeAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the composite removed
     */
    Composite.removeCompositeAt = function(composite, position) {
        composite.composites.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a body to the given composite.
     * @private
     * @method addBody
     * @param {composite} composite
     * @param {body} body
     * @return {composite} The original composite with the body added
     */
    Composite.addBody = function(composite, body) {
        composite.bodies.push(body);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a body from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeBody
     * @param {composite} composite
     * @param {body} body
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBody = function(composite, body, deep) {
        var position = Common.indexOf(composite.bodies, body);

        if (position !== -1) {
            Composite.removeBodyAt(composite, position);
            body.sleepCounter = 0;
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeBody(composite.composites[i], body, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeBodyAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the body removed
     */
    Composite.removeBodyAt = function(composite, position) {
        composite.bodies.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Adds a constraint to the given composite.
     * @private
     * @method addConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @return {composite} The original composite with the constraint added
     */
    Composite.addConstraint = function(composite, constraint) {
        composite.constraints.push(constraint);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes a constraint from the given composite, and optionally searching its children recursively.
     * @private
     * @method removeConstraint
     * @param {composite} composite
     * @param {constraint} constraint
     * @param {boolean} [deep=false]
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraint = function(composite, constraint, deep) {
        var position = Common.indexOf(composite.constraints, constraint);
        
        if (position !== -1) {
            Composite.removeConstraintAt(composite, position);
        }

        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.removeConstraint(composite.composites[i], constraint, true);
            }
        }

        return composite;
    };

    /**
     * Removes a body from the given composite.
     * @private
     * @method removeConstraintAt
     * @param {composite} composite
     * @param {number} position
     * @return {composite} The original composite with the constraint removed
     */
    Composite.removeConstraintAt = function(composite, position) {
        composite.constraints.splice(position, 1);
        Composite.setModified(composite, true, true, false);
        return composite;
    };

    /**
     * Removes all bodies, constraints and composites from the given composite.
     * Optionally clearing its children recursively.
     * @method clear
     * @param {composite} composite
     * @param {boolean} keepStatic
     * @param {boolean} [deep=false]
     */
    Composite.clear = function(composite, keepStatic, deep) {
        if (deep) {
            for (var i = 0; i < composite.composites.length; i++){
                Composite.clear(composite.composites[i], keepStatic, true);
            }
        }
        
        if (keepStatic) {
            composite.bodies = composite.bodies.filter(function(body) { return body.isStatic; });
        } else {
            composite.bodies.length = 0;
        }

        composite.constraints.length = 0;
        composite.composites.length = 0;

        Composite.setModified(composite, true, true, false);

        return composite;
    };

    /**
     * Returns all bodies in the given composite, including all bodies in its children, recursively.
     * @method allBodies
     * @param {composite} composite
     * @return {body[]} All the bodies
     */
    Composite.allBodies = function(composite) {
        if (composite.cache && composite.cache.allBodies) {
            return composite.cache.allBodies;
        }

        var bodies = [].concat(composite.bodies);

        for (var i = 0; i < composite.composites.length; i++)
            bodies = bodies.concat(Composite.allBodies(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allBodies = bodies;
        }

        return bodies;
    };

    /**
     * Returns all constraints in the given composite, including all constraints in its children, recursively.
     * @method allConstraints
     * @param {composite} composite
     * @return {constraint[]} All the constraints
     */
    Composite.allConstraints = function(composite) {
        if (composite.cache && composite.cache.allConstraints) {
            return composite.cache.allConstraints;
        }

        var constraints = [].concat(composite.constraints);

        for (var i = 0; i < composite.composites.length; i++)
            constraints = constraints.concat(Composite.allConstraints(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allConstraints = constraints;
        }

        return constraints;
    };

    /**
     * Returns all composites in the given composite, including all composites in its children, recursively.
     * @method allComposites
     * @param {composite} composite
     * @return {composite[]} All the composites
     */
    Composite.allComposites = function(composite) {
        if (composite.cache && composite.cache.allComposites) {
            return composite.cache.allComposites;
        }

        var composites = [].concat(composite.composites);

        for (var i = 0; i < composite.composites.length; i++)
            composites = composites.concat(Composite.allComposites(composite.composites[i]));

        if (composite.cache) {
            composite.cache.allComposites = composites;
        }

        return composites;
    };

    /**
     * Searches the composite recursively for an object matching the type and id supplied, null if not found.
     * @method get
     * @param {composite} composite
     * @param {number} id
     * @param {string} type
     * @return {object} The requested object, if found
     */
    Composite.get = function(composite, id, type) {
        var objects,
            object;

        switch (type) {
        case 'body':
            objects = Composite.allBodies(composite);
            break;
        case 'constraint':
            objects = Composite.allConstraints(composite);
            break;
        case 'composite':
            objects = Composite.allComposites(composite).concat(composite);
            break;
        }

        if (!objects)
            return null;

        object = objects.filter(function(object) { 
            return object.id.toString() === id.toString(); 
        });

        return object.length === 0 ? null : object[0];
    };

    /**
     * Moves the given object(s) from compositeA to compositeB (equal to a remove followed by an add).
     * @method move
     * @param {compositeA} compositeA
     * @param {object[]} objects
     * @param {compositeB} compositeB
     * @return {composite} Returns compositeA
     */
    Composite.move = function(compositeA, objects, compositeB) {
        Composite.remove(compositeA, objects);
        Composite.add(compositeB, objects);
        return compositeA;
    };

    /**
     * Assigns new ids for all objects in the composite, recursively.
     * @method rebase
     * @param {composite} composite
     * @return {composite} Returns composite
     */
    Composite.rebase = function(composite) {
        var objects = Composite.allBodies(composite)
            .concat(Composite.allConstraints(composite))
            .concat(Composite.allComposites(composite));

        for (var i = 0; i < objects.length; i++) {
            objects[i].id = Common.nextId();
        }

        return composite;
    };

    /**
     * Translates all children in the composite by a given vector relative to their current positions, 
     * without imparting any velocity.
     * @method translate
     * @param {composite} composite
     * @param {vector} translation
     * @param {bool} [recursive=true]
     */
    Composite.translate = function(composite, translation, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            Body.translate(bodies[i], translation);
        }

        return composite;
    };

    /**
     * Rotates all children in the composite by a given angle about the given point, without imparting any angular velocity.
     * @method rotate
     * @param {composite} composite
     * @param {number} rotation
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.rotate = function(composite, rotation, point, recursive) {
        var cos = Math.cos(rotation),
            sin = Math.sin(rotation),
            bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + (dx * cos - dy * sin),
                y: point.y + (dx * sin + dy * cos)
            });

            Body.rotate(body, rotation);
        }

        return composite;
    };

    /**
     * Scales all children in the composite, including updating physical properties (mass, area, axes, inertia), from a world-space point.
     * @method scale
     * @param {composite} composite
     * @param {number} scaleX
     * @param {number} scaleY
     * @param {vector} point
     * @param {bool} [recursive=true]
     */
    Composite.scale = function(composite, scaleX, scaleY, point, recursive) {
        var bodies = recursive ? Composite.allBodies(composite) : composite.bodies;

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                dx = body.position.x - point.x,
                dy = body.position.y - point.y;
                
            Body.setPosition(body, {
                x: point.x + dx * scaleX,
                y: point.y + dy * scaleY
            });

            Body.scale(body, scaleX, scaleY);
        }

        return composite;
    };

    /**
     * Returns the union of the bounds of all of the composite's bodies.
     * @method bounds
     * @param {composite} composite The composite.
     * @returns {bounds} The composite bounds.
     */
    Composite.bounds = function(composite) {
        var bodies = Composite.allBodies(composite),
            vertices = [];

        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i];
            vertices.push(body.bounds.min, body.bounds.max);
        }

        return Bounds.create(vertices);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when a call to `Composite.add` is made, before objects have been added.
    *
    * @event beforeAdd
    * @param {} event An event object
    * @param {} event.object The object(s) to be added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.add` is made, after objects have been added.
    *
    * @event afterAdd
    * @param {} event An event object
    * @param {} event.object The object(s) that have been added (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, before objects have been removed.
    *
    * @event beforeRemove
    * @param {} event An event object
    * @param {} event.object The object(s) to be removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when a call to `Composite.remove` is made, after objects have been removed.
    *
    * @event afterRemove
    * @param {} event An event object
    * @param {} event.object The object(s) that have been removed (may be a single body, constraint, composite or a mixed array of these)
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "composite"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage composites.
     *
     * @property label
     * @type string
     * @default "Composite"
     */

    /**
     * A flag that specifies whether the composite has been modified during the current step.
     * This is automatically managed when bodies, constraints or composites are added or removed.
     *
     * @property isModified
     * @type boolean
     * @default false
     */

    /**
     * The `Composite` that is the parent of this composite. It is automatically managed by the `Matter.Composite` methods.
     *
     * @property parent
     * @type composite
     * @default null
     */

    /**
     * An array of `Body` that are _direct_ children of this composite.
     * To add or remove bodies you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allBodies` method.
     *
     * @property bodies
     * @type body[]
     * @default []
     */

    /**
     * An array of `Constraint` that are _direct_ children of this composite.
     * To add or remove constraints you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allConstraints` method.
     *
     * @property constraints
     * @type constraint[]
     * @default []
     */

    /**
     * An array of `Composite` that are _direct_ children of this composite.
     * To add or remove composites you should use `Composite.add` and `Composite.remove` methods rather than directly modifying this property.
     * If you wish to recursively find all descendants, you should use the `Composite.allComposites` method.
     *
     * @property composites
     * @type composite[]
     * @default []
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * An object used for storing cached results for performance reasons.
     * This is used internally only and is automatically managed.
     *
     * @private
     * @property cache
     * @type {}
     */

})();


/***/ }),
/* 7 */
/***/ (function(module, exports, __nested_webpack_require_127843__) {

/**
* The `Matter.Sleeping` module contains methods to manage the sleeping state of bodies.
*
* @class Sleeping
*/

var Sleeping = {};

module.exports = Sleeping;

var Body = __nested_webpack_require_127843__(4);
var Events = __nested_webpack_require_127843__(5);
var Common = __nested_webpack_require_127843__(0);

(function() {

    Sleeping._motionWakeThreshold = 0.18;
    Sleeping._motionSleepThreshold = 0.08;
    Sleeping._minBias = 0.9;

    /**
     * Puts bodies to sleep or wakes them up depending on their motion.
     * @method update
     * @param {body[]} bodies
     * @param {number} delta
     */
    Sleeping.update = function(bodies, delta) {
        var timeScale = delta / Common._baseDelta,
            motionSleepThreshold = Sleeping._motionSleepThreshold;
        
        // update bodies sleeping status
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                speed = Body.getSpeed(body),
                angularSpeed = Body.getAngularSpeed(body),
                motion = speed * speed + angularSpeed * angularSpeed;

            // wake up bodies if they have a force applied
            if (body.force.x !== 0 || body.force.y !== 0) {
                Sleeping.set(body, false);
                continue;
            }

            var minMotion = Math.min(body.motion, motion),
                maxMotion = Math.max(body.motion, motion);
        
            // biased average motion estimation between frames
            body.motion = Sleeping._minBias * minMotion + (1 - Sleeping._minBias) * maxMotion;

            if (body.sleepThreshold > 0 && body.motion < motionSleepThreshold) {
                body.sleepCounter += 1;
                
                if (body.sleepCounter >= body.sleepThreshold / timeScale) {
                    Sleeping.set(body, true);
                }
            } else if (body.sleepCounter > 0) {
                body.sleepCounter -= 1;
            }
        }
    };

    /**
     * Given a set of colliding pairs, wakes the sleeping bodies involved.
     * @method afterCollisions
     * @param {pair[]} pairs
     */
    Sleeping.afterCollisions = function(pairs) {
        var motionSleepThreshold = Sleeping._motionSleepThreshold;

        // wake up bodies involved in collisions
        for (var i = 0; i < pairs.length; i++) {
            var pair = pairs[i];
            
            // don't wake inactive pairs
            if (!pair.isActive)
                continue;

            var collision = pair.collision,
                bodyA = collision.bodyA.parent, 
                bodyB = collision.bodyB.parent;
        
            // don't wake if at least one body is static
            if ((bodyA.isSleeping && bodyB.isSleeping) || bodyA.isStatic || bodyB.isStatic)
                continue;
        
            if (bodyA.isSleeping || bodyB.isSleeping) {
                var sleepingBody = (bodyA.isSleeping && !bodyA.isStatic) ? bodyA : bodyB,
                    movingBody = sleepingBody === bodyA ? bodyB : bodyA;

                if (!sleepingBody.isStatic && movingBody.motion > motionSleepThreshold) {
                    Sleeping.set(sleepingBody, false);
                }
            }
        }
    };
  
    /**
     * Set a body as sleeping or awake.
     * @method set
     * @param {body} body
     * @param {boolean} isSleeping
     */
    Sleeping.set = function(body, isSleeping) {
        var wasSleeping = body.isSleeping;

        if (isSleeping) {
            body.isSleeping = true;
            body.sleepCounter = body.sleepThreshold;

            body.positionImpulse.x = 0;
            body.positionImpulse.y = 0;

            body.positionPrev.x = body.position.x;
            body.positionPrev.y = body.position.y;

            body.anglePrev = body.angle;
            body.speed = 0;
            body.angularSpeed = 0;
            body.motion = 0;

            if (!wasSleeping) {
                Events.trigger(body, 'sleepStart');
            }
        } else {
            body.isSleeping = false;
            body.sleepCounter = 0;

            if (wasSleeping) {
                Events.trigger(body, 'sleepEnd');
            }
        }
    };

})();


/***/ }),
/* 8 */
/***/ (function(module, exports, __nested_webpack_require_132087__) {

/**
* The `Matter.Collision` module contains methods for detecting collisions between a given pair of bodies.
*
* For efficient detection between a list of bodies, see `Matter.Detector` and `Matter.Query`.
*
* See `Matter.Engine` for collision events.
*
* @class Collision
*/

var Collision = {};

module.exports = Collision;

var Vertices = __nested_webpack_require_132087__(3);
var Pair = __nested_webpack_require_132087__(9);

(function() {
    var _supports = [];

    var _overlapAB = {
        overlap: 0,
        axis: null
    };

    var _overlapBA = {
        overlap: 0,
        axis: null
    };

    /**
     * Creates a new collision record.
     * @method create
     * @param {body} bodyA The first body part represented by the collision record
     * @param {body} bodyB The second body part represented by the collision record
     * @return {collision} A new collision record
     */
    Collision.create = function(bodyA, bodyB) {
        return { 
            pair: null,
            collided: false,
            bodyA: bodyA,
            bodyB: bodyB,
            parentA: bodyA.parent,
            parentB: bodyB.parent,
            depth: 0,
            normal: { x: 0, y: 0 },
            tangent: { x: 0, y: 0 },
            penetration: { x: 0, y: 0 },
            supports: [null, null],
            supportCount: 0
        };
    };

    /**
     * Detect collision between two bodies.
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {pairs} [pairs] Optionally reuse collision records from existing pairs.
     * @return {collision|null} A collision record if detected, otherwise null
     */
    Collision.collides = function(bodyA, bodyB, pairs) {
        Collision._overlapAxes(_overlapAB, bodyA.vertices, bodyB.vertices, bodyA.axes);

        if (_overlapAB.overlap <= 0) {
            return null;
        }

        Collision._overlapAxes(_overlapBA, bodyB.vertices, bodyA.vertices, bodyB.axes);

        if (_overlapBA.overlap <= 0) {
            return null;
        }

        // reuse collision records for gc efficiency
        var pair = pairs && pairs.table[Pair.id(bodyA, bodyB)],
            collision;

        if (!pair) {
            collision = Collision.create(bodyA, bodyB);
            collision.collided = true;
            collision.bodyA = bodyA.id < bodyB.id ? bodyA : bodyB;
            collision.bodyB = bodyA.id < bodyB.id ? bodyB : bodyA;
            collision.parentA = collision.bodyA.parent;
            collision.parentB = collision.bodyB.parent;
        } else {
            collision = pair.collision;
        }

        bodyA = collision.bodyA;
        bodyB = collision.bodyB;

        var minOverlap;

        if (_overlapAB.overlap < _overlapBA.overlap) {
            minOverlap = _overlapAB;
        } else {
            minOverlap = _overlapBA;
        }

        var normal = collision.normal,
            tangent = collision.tangent,
            penetration = collision.penetration,
            supports = collision.supports,
            depth = minOverlap.overlap,
            minAxis = minOverlap.axis,
            normalX = minAxis.x,
            normalY = minAxis.y,
            deltaX = bodyB.position.x - bodyA.position.x,
            deltaY = bodyB.position.y - bodyA.position.y;

        // ensure normal is facing away from bodyA
        if (normalX * deltaX + normalY * deltaY >= 0) {
            normalX = -normalX;
            normalY = -normalY;
        }

        normal.x = normalX;
        normal.y = normalY;
        
        tangent.x = -normalY;
        tangent.y = normalX;

        penetration.x = normalX * depth;
        penetration.y = normalY * depth;

        collision.depth = depth;

        // find support points, there is always either exactly one or two
        var supportsB = Collision._findSupports(bodyA, bodyB, normal, 1),
            supportCount = 0;

        // find the supports from bodyB that are inside bodyA
        if (Vertices.contains(bodyA.vertices, supportsB[0])) {
            supports[supportCount++] = supportsB[0];
        }

        if (Vertices.contains(bodyA.vertices, supportsB[1])) {
            supports[supportCount++] = supportsB[1];
        }

        // find the supports from bodyA that are inside bodyB
        if (supportCount < 2) {
            var supportsA = Collision._findSupports(bodyB, bodyA, normal, -1);

            if (Vertices.contains(bodyB.vertices, supportsA[0])) {
                supports[supportCount++] = supportsA[0];
            }

            if (supportCount < 2 && Vertices.contains(bodyB.vertices, supportsA[1])) {
                supports[supportCount++] = supportsA[1];
            }
        }

        // account for the edge case of overlapping but no vertex containment
        if (supportCount === 0) {
            supports[supportCount++] = supportsB[0];
        }

        // update support count
        collision.supportCount = supportCount;

        return collision;
    };

    /**
     * Find the overlap between two sets of vertices.
     * @method _overlapAxes
     * @private
     * @param {object} result
     * @param {vertices} verticesA
     * @param {vertices} verticesB
     * @param {axes} axes
     */
    Collision._overlapAxes = function(result, verticesA, verticesB, axes) {
        var verticesALength = verticesA.length,
            verticesBLength = verticesB.length,
            verticesAX = verticesA[0].x,
            verticesAY = verticesA[0].y,
            verticesBX = verticesB[0].x,
            verticesBY = verticesB[0].y,
            axesLength = axes.length,
            overlapMin = Number.MAX_VALUE,
            overlapAxisNumber = 0,
            overlap,
            overlapAB,
            overlapBA,
            dot,
            i,
            j;

        for (i = 0; i < axesLength; i++) {
            var axis = axes[i],
                axisX = axis.x,
                axisY = axis.y,
                minA = verticesAX * axisX + verticesAY * axisY,
                minB = verticesBX * axisX + verticesBY * axisY,
                maxA = minA,
                maxB = minB;
            
            for (j = 1; j < verticesALength; j += 1) {
                dot = verticesA[j].x * axisX + verticesA[j].y * axisY;

                if (dot > maxA) { 
                    maxA = dot;
                } else if (dot < minA) { 
                    minA = dot;
                }
            }

            for (j = 1; j < verticesBLength; j += 1) {
                dot = verticesB[j].x * axisX + verticesB[j].y * axisY;

                if (dot > maxB) { 
                    maxB = dot;
                } else if (dot < minB) { 
                    minB = dot;
                }
            }

            overlapAB = maxA - minB;
            overlapBA = maxB - minA;
            overlap = overlapAB < overlapBA ? overlapAB : overlapBA;

            if (overlap < overlapMin) {
                overlapMin = overlap;
                overlapAxisNumber = i;

                if (overlap <= 0) {
                    // can not be intersecting
                    break;
                }
            } 
        }

        result.axis = axes[overlapAxisNumber];
        result.overlap = overlapMin;
    };

    /**
     * Finds supporting vertices given two bodies along a given direction using hill-climbing.
     * @method _findSupports
     * @private
     * @param {body} bodyA
     * @param {body} bodyB
     * @param {vector} normal
     * @param {number} direction
     * @return [vector]
     */
    Collision._findSupports = function(bodyA, bodyB, normal, direction) {
        var vertices = bodyB.vertices,
            verticesLength = vertices.length,
            bodyAPositionX = bodyA.position.x,
            bodyAPositionY = bodyA.position.y,
            normalX = normal.x * direction,
            normalY = normal.y * direction,
            vertexA = vertices[0],
            vertexB = vertexA,
            nearestDistance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y),
            vertexC,
            distance,
            j;

        // find deepest vertex relative to the axis
        for (j = 1; j < verticesLength; j += 1) {
            vertexB = vertices[j];
            distance = normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y);

            // convex hill-climbing
            if (distance < nearestDistance) {
                nearestDistance = distance;
                vertexA = vertexB;
            }
        }

        // measure next vertex
        vertexC = vertices[(verticesLength + vertexA.index - 1) % verticesLength];
        nearestDistance = normalX * (bodyAPositionX - vertexC.x) + normalY * (bodyAPositionY - vertexC.y);

        // compare with previous vertex
        vertexB = vertices[(vertexA.index + 1) % verticesLength];
        if (normalX * (bodyAPositionX - vertexB.x) + normalY * (bodyAPositionY - vertexB.y) < nearestDistance) {
            _supports[0] = vertexA;
            _supports[1] = vertexB;

            return _supports;
        }

        _supports[0] = vertexA;
        _supports[1] = vertexC;

        return _supports;
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A reference to the pair using this collision record, if there is one.
     *
     * @property pair
     * @type {pair|null}
     * @default null
     */

    /**
     * A flag that indicates if the bodies were colliding when the collision was last updated.
     * 
     * @property collided
     * @type boolean
     * @default false
     */

    /**
     * The first body part represented by the collision (see also `collision.parentA`).
     * 
     * @property bodyA
     * @type body
     */

    /**
     * The second body part represented by the collision (see also `collision.parentB`).
     * 
     * @property bodyB
     * @type body
     */

    /**
     * The first body represented by the collision (i.e. `collision.bodyA.parent`).
     * 
     * @property parentA
     * @type body
     */

    /**
     * The second body represented by the collision (i.e. `collision.bodyB.parent`).
     * 
     * @property parentB
     * @type body
     */

    /**
     * A `Number` that represents the minimum separating distance between the bodies along the collision normal.
     *
     * @readOnly
     * @property depth
     * @type number
     * @default 0
     */

    /**
     * A normalised `Vector` that represents the direction between the bodies that provides the minimum separating distance.
     *
     * @property normal
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A normalised `Vector` that is the tangent direction to the collision normal.
     *
     * @property tangent
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that represents the direction and depth of the collision.
     *
     * @property penetration
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * An array of body vertices that represent the support points in the collision.
     * 
     * _Note:_ Only the first `collision.supportCount` items of `collision.supports` are active.
     * Therefore use `collision.supportCount` instead of `collision.supports.length` when iterating the active supports.
     * 
     * These are the deepest vertices (along the collision normal) of each body that are contained by the other body's vertices.
     *
     * @property supports
     * @type vector[]
     * @default []
     */

    /**
     * The number of active supports for this collision found in `collision.supports`.
     * 
     * _Note:_ Only the first `collision.supportCount` items of `collision.supports` are active.
     * Therefore use `collision.supportCount` instead of `collision.supports.length` when iterating the active supports.
     *
     * @property supportCount
     * @type number
     * @default 0
     */

})();


/***/ }),
/* 9 */
/***/ (function(module, exports, __nested_webpack_require_144127__) {

/**
* The `Matter.Pair` module contains methods for creating and manipulating collision pairs.
*
* @class Pair
*/

var Pair = {};

module.exports = Pair;

var Contact = __nested_webpack_require_144127__(16);

(function() {
    
    /**
     * Creates a pair.
     * @method create
     * @param {collision} collision
     * @param {number} timestamp
     * @return {pair} A new pair
     */
    Pair.create = function(collision, timestamp) {
        var bodyA = collision.bodyA,
            bodyB = collision.bodyB;

        var pair = {
            id: Pair.id(bodyA, bodyB),
            bodyA: bodyA,
            bodyB: bodyB,
            collision: collision,
            contacts: [Contact.create(), Contact.create()],
            contactCount: 0,
            separation: 0,
            isActive: true,
            isSensor: bodyA.isSensor || bodyB.isSensor,
            timeCreated: timestamp,
            timeUpdated: timestamp,
            inverseMass: 0,
            friction: 0,
            frictionStatic: 0,
            restitution: 0,
            slop: 0
        };

        Pair.update(pair, collision, timestamp);

        return pair;
    };

    /**
     * Updates a pair given a collision.
     * @method update
     * @param {pair} pair
     * @param {collision} collision
     * @param {number} timestamp
     */
    Pair.update = function(pair, collision, timestamp) {
        var supports = collision.supports,
            supportCount = collision.supportCount,
            contacts = pair.contacts,
            parentA = collision.parentA,
            parentB = collision.parentB;
        
        pair.isActive = true;
        pair.timeUpdated = timestamp;
        pair.collision = collision;
        pair.separation = collision.depth;
        pair.inverseMass = parentA.inverseMass + parentB.inverseMass;
        pair.friction = parentA.friction < parentB.friction ? parentA.friction : parentB.friction;
        pair.frictionStatic = parentA.frictionStatic > parentB.frictionStatic ? parentA.frictionStatic : parentB.frictionStatic;
        pair.restitution = parentA.restitution > parentB.restitution ? parentA.restitution : parentB.restitution;
        pair.slop = parentA.slop > parentB.slop ? parentA.slop : parentB.slop;

        pair.contactCount = supportCount;
        collision.pair = pair;

        var supportA = supports[0],
            contactA = contacts[0],
            supportB = supports[1],
            contactB = contacts[1];

        // match contacts to supports
        if (contactB.vertex === supportA || contactA.vertex === supportB) {
            contacts[1] = contactA;
            contacts[0] = contactA = contactB;
            contactB = contacts[1];
        }

        // update contacts
        contactA.vertex = supportA;
        contactB.vertex = supportB;
    };
    
    /**
     * Set a pair as active or inactive.
     * @method setActive
     * @param {pair} pair
     * @param {bool} isActive
     * @param {number} timestamp
     */
    Pair.setActive = function(pair, isActive, timestamp) {
        if (isActive) {
            pair.isActive = true;
            pair.timeUpdated = timestamp;
        } else {
            pair.isActive = false;
            pair.contactCount = 0;
        }
    };

    /**
     * Get the id for the given pair.
     * @method id
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {string} Unique pairId
     */
    Pair.id = function(bodyA, bodyB) {
        return bodyA.id < bodyB.id ? bodyA.id.toString(36) + ':' + bodyB.id.toString(36) 
            : bodyB.id.toString(36) + ':' + bodyA.id.toString(36);
    };

})();


/***/ }),
/* 10 */
/***/ (function(module, exports, __nested_webpack_require_147825__) {

/**
* The `Matter.Constraint` module contains methods for creating and manipulating constraints.
* Constraints are used for specifying that a fixed distance must be maintained between two bodies (or a body and a fixed world-space position).
* The stiffness of constraints can be modified to create springs or elastic.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Constraint
*/

var Constraint = {};

module.exports = Constraint;

var Vertices = __nested_webpack_require_147825__(3);
var Vector = __nested_webpack_require_147825__(2);
var Sleeping = __nested_webpack_require_147825__(7);
var Bounds = __nested_webpack_require_147825__(1);
var Axes = __nested_webpack_require_147825__(11);
var Common = __nested_webpack_require_147825__(0);

(function() {

    Constraint._warming = 0.4;
    Constraint._torqueDampen = 1;
    Constraint._minLength = 0.000001;

    /**
     * Creates a new constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * To simulate a revolute constraint (or pin joint) set `length: 0` and a high `stiffness` value (e.g. `0.7` or above).
     * If the constraint is unstable, try lowering the `stiffness` value and / or increasing `engine.constraintIterations`.
     * For compound bodies, constraints must be applied to the parent body (not one of its parts).
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     * @return {constraint} constraint
     */
    Constraint.create = function(options) {
        var constraint = options;

        // if bodies defined but no points, use body centre
        if (constraint.bodyA && !constraint.pointA)
            constraint.pointA = { x: 0, y: 0 };
        if (constraint.bodyB && !constraint.pointB)
            constraint.pointB = { x: 0, y: 0 };

        // calculate static length using initial world space points
        var initialPointA = constraint.bodyA ? Vector.add(constraint.bodyA.position, constraint.pointA) : constraint.pointA,
            initialPointB = constraint.bodyB ? Vector.add(constraint.bodyB.position, constraint.pointB) : constraint.pointB,
            length = Vector.magnitude(Vector.sub(initialPointA, initialPointB));
    
        constraint.length = typeof constraint.length !== 'undefined' ? constraint.length : length;

        // option defaults
        constraint.id = constraint.id || Common.nextId();
        constraint.label = constraint.label || 'Constraint';
        constraint.type = 'constraint';
        constraint.stiffness = constraint.stiffness || (constraint.length > 0 ? 1 : 0.7);
        constraint.damping = constraint.damping || 0;
        constraint.angularStiffness = constraint.angularStiffness || 0;
        constraint.angleA = constraint.bodyA ? constraint.bodyA.angle : constraint.angleA;
        constraint.angleB = constraint.bodyB ? constraint.bodyB.angle : constraint.angleB;
        constraint.plugin = {};

        // render
        var render = {
            visible: true,
            lineWidth: 2,
            strokeStyle: '#ffffff',
            type: 'line',
            anchors: true
        };

        if (constraint.length === 0 && constraint.stiffness > 0.1) {
            render.type = 'pin';
            render.anchors = false;
        } else if (constraint.stiffness < 0.9) {
            render.type = 'spring';
        }

        constraint.render = Common.extend(render, constraint.render);

        return constraint;
    };

    /**
     * Prepares for solving by constraint warming.
     * @private
     * @method preSolveAll
     * @param {body[]} bodies
     */
    Constraint.preSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i += 1) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            body.position.x += impulse.x;
            body.position.y += impulse.y;
            body.angle += impulse.angle;
        }
    };

    /**
     * Solves all constraints in a list of collisions.
     * @private
     * @method solveAll
     * @param {constraint[]} constraints
     * @param {number} delta
     */
    Constraint.solveAll = function(constraints, delta) {
        var timeScale = Common.clamp(delta / Common._baseDelta, 0, 1);

        // Solve fixed constraints first.
        for (var i = 0; i < constraints.length; i += 1) {
            var constraint = constraints[i],
                fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic),
                fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (fixedA || fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }

        // Solve free constraints last.
        for (i = 0; i < constraints.length; i += 1) {
            constraint = constraints[i];
            fixedA = !constraint.bodyA || (constraint.bodyA && constraint.bodyA.isStatic);
            fixedB = !constraint.bodyB || (constraint.bodyB && constraint.bodyB.isStatic);

            if (!fixedA && !fixedB) {
                Constraint.solve(constraints[i], timeScale);
            }
        }
    };

    /**
     * Solves a distance constraint with Gauss-Siedel method.
     * @private
     * @method solve
     * @param {constraint} constraint
     * @param {number} timeScale
     */
    Constraint.solve = function(constraint, timeScale) {
        var bodyA = constraint.bodyA,
            bodyB = constraint.bodyB,
            pointA = constraint.pointA,
            pointB = constraint.pointB;

        if (!bodyA && !bodyB)
            return;

        // update reference angle
        if (bodyA && !bodyA.isStatic) {
            Vector.rotate(pointA, bodyA.angle - constraint.angleA, pointA);
            constraint.angleA = bodyA.angle;
        }
        
        // update reference angle
        if (bodyB && !bodyB.isStatic) {
            Vector.rotate(pointB, bodyB.angle - constraint.angleB, pointB);
            constraint.angleB = bodyB.angle;
        }

        var pointAWorld = pointA,
            pointBWorld = pointB;

        if (bodyA) pointAWorld = Vector.add(bodyA.position, pointA);
        if (bodyB) pointBWorld = Vector.add(bodyB.position, pointB);

        if (!pointAWorld || !pointBWorld)
            return;

        var delta = Vector.sub(pointAWorld, pointBWorld),
            currentLength = Vector.magnitude(delta);

        // prevent singularity
        if (currentLength < Constraint._minLength) {
            currentLength = Constraint._minLength;
        }

        // solve distance constraint with Gauss-Siedel method
        var difference = (currentLength - constraint.length) / currentLength,
            isRigid = constraint.stiffness >= 1 || constraint.length === 0,
            stiffness = isRigid ? constraint.stiffness * timeScale 
                : constraint.stiffness * timeScale * timeScale,
            damping = constraint.damping * timeScale,
            force = Vector.mult(delta, difference * stiffness),
            massTotal = (bodyA ? bodyA.inverseMass : 0) + (bodyB ? bodyB.inverseMass : 0),
            inertiaTotal = (bodyA ? bodyA.inverseInertia : 0) + (bodyB ? bodyB.inverseInertia : 0),
            resistanceTotal = massTotal + inertiaTotal,
            torque,
            share,
            normal,
            normalVelocity,
            relativeVelocity;
    
        if (damping > 0) {
            var zero = Vector.create();
            normal = Vector.div(delta, currentLength);

            relativeVelocity = Vector.sub(
                bodyB && Vector.sub(bodyB.position, bodyB.positionPrev) || zero,
                bodyA && Vector.sub(bodyA.position, bodyA.positionPrev) || zero
            );

            normalVelocity = Vector.dot(normal, relativeVelocity);
        }

        if (bodyA && !bodyA.isStatic) {
            share = bodyA.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyA.constraintImpulse.x -= force.x * share;
            bodyA.constraintImpulse.y -= force.y * share;

            // apply forces
            bodyA.position.x -= force.x * share;
            bodyA.position.y -= force.y * share;

            // apply damping
            if (damping > 0) {
                bodyA.positionPrev.x -= damping * normal.x * normalVelocity * share;
                bodyA.positionPrev.y -= damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointA, force) / resistanceTotal) * Constraint._torqueDampen * bodyA.inverseInertia * (1 - constraint.angularStiffness);
            bodyA.constraintImpulse.angle -= torque;
            bodyA.angle -= torque;
        }

        if (bodyB && !bodyB.isStatic) {
            share = bodyB.inverseMass / massTotal;

            // keep track of applied impulses for post solving
            bodyB.constraintImpulse.x += force.x * share;
            bodyB.constraintImpulse.y += force.y * share;
            
            // apply forces
            bodyB.position.x += force.x * share;
            bodyB.position.y += force.y * share;

            // apply damping
            if (damping > 0) {
                bodyB.positionPrev.x += damping * normal.x * normalVelocity * share;
                bodyB.positionPrev.y += damping * normal.y * normalVelocity * share;
            }

            // apply torque
            torque = (Vector.cross(pointB, force) / resistanceTotal) * Constraint._torqueDampen * bodyB.inverseInertia * (1 - constraint.angularStiffness);
            bodyB.constraintImpulse.angle += torque;
            bodyB.angle += torque;
        }

    };

    /**
     * Performs body updates required after solving constraints.
     * @private
     * @method postSolveAll
     * @param {body[]} bodies
     */
    Constraint.postSolveAll = function(bodies) {
        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                impulse = body.constraintImpulse;

            if (body.isStatic || (impulse.x === 0 && impulse.y === 0 && impulse.angle === 0)) {
                continue;
            }

            Sleeping.set(body, false);

            // update geometry and reset
            for (var j = 0; j < body.parts.length; j++) {
                var part = body.parts[j];
                
                Vertices.translate(part.vertices, impulse);

                if (j > 0) {
                    part.position.x += impulse.x;
                    part.position.y += impulse.y;
                }

                if (impulse.angle !== 0) {
                    Vertices.rotate(part.vertices, impulse.angle, body.position);
                    Axes.rotate(part.axes, impulse.angle);
                    if (j > 0) {
                        Vector.rotateAbout(part.position, impulse.angle, body.position, part.position);
                    }
                }

                Bounds.update(part.bounds, part.vertices, body.velocity);
            }

            // dampen the cached impulse for warming next step
            impulse.angle *= Constraint._warming;
            impulse.x *= Constraint._warming;
            impulse.y *= Constraint._warming;
        }
    };

    /**
     * Returns the world-space position of `constraint.pointA`, accounting for `constraint.bodyA`.
     * @method pointAWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */
    Constraint.pointAWorld = function(constraint) {
        return {
            x: (constraint.bodyA ? constraint.bodyA.position.x : 0) 
                + (constraint.pointA ? constraint.pointA.x : 0),
            y: (constraint.bodyA ? constraint.bodyA.position.y : 0) 
                + (constraint.pointA ? constraint.pointA.y : 0)
        };
    };

    /**
     * Returns the world-space position of `constraint.pointB`, accounting for `constraint.bodyB`.
     * @method pointBWorld
     * @param {constraint} constraint
     * @returns {vector} the world-space position
     */
    Constraint.pointBWorld = function(constraint) {
        return {
            x: (constraint.bodyB ? constraint.bodyB.position.x : 0) 
                + (constraint.pointB ? constraint.pointB.x : 0),
            y: (constraint.bodyB ? constraint.bodyB.position.y : 0) 
                + (constraint.pointB ? constraint.pointB.y : 0)
        };
    };

    /**
     * Returns the current length of the constraint. 
     * This is the distance between both of the constraint's end points.
     * See `constraint.length` for the target rest length.
     * @method currentLength
     * @param {constraint} constraint
     * @returns {number} the current length
     */
    Constraint.currentLength = function(constraint) {
        var pointAX = (constraint.bodyA ? constraint.bodyA.position.x : 0) 
            + (constraint.pointA ? constraint.pointA.x : 0);

        var pointAY = (constraint.bodyA ? constraint.bodyA.position.y : 0) 
            + (constraint.pointA ? constraint.pointA.y : 0);

        var pointBX = (constraint.bodyB ? constraint.bodyB.position.x : 0) 
            + (constraint.pointB ? constraint.pointB.x : 0);
            
        var pointBY = (constraint.bodyB ? constraint.bodyB.position.y : 0) 
            + (constraint.pointB ? constraint.pointB.y : 0);

        var deltaX = pointAX - pointBX;
        var deltaY = pointAY - pointBY;

        return Math.sqrt(deltaX * deltaX + deltaY * deltaY);
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` uniquely identifying number generated in `Composite.create` by `Common.nextId`.
     *
     * @property id
     * @type number
     */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * An arbitrary `String` name to help the user identify and manage bodies.
     *
     * @property label
     * @type string
     * @default "Constraint"
     */

    /**
     * An `Object` that defines the rendering properties to be consumed by the module `Matter.Render`.
     *
     * @property render
     * @type object
     */

    /**
     * A flag that indicates if the constraint should be rendered.
     *
     * @property render.visible
     * @type boolean
     * @default true
     */

    /**
     * A `Number` that defines the line width to use when rendering the constraint outline.
     * A value of `0` means no outline will be rendered.
     *
     * @property render.lineWidth
     * @type number
     * @default 2
     */

    /**
     * A `String` that defines the stroke style to use when rendering the constraint outline.
     * It is the same as when using a canvas, so it accepts CSS style property values.
     *
     * @property render.strokeStyle
     * @type string
     * @default a random colour
     */

    /**
     * A `String` that defines the constraint rendering type. 
     * The possible values are 'line', 'pin', 'spring'.
     * An appropriate render type will be automatically chosen unless one is given in options.
     *
     * @property render.type
     * @type string
     * @default 'line'
     */

    /**
     * A `Boolean` that defines if the constraint's anchor points should be rendered.
     *
     * @property render.anchors
     * @type boolean
     * @default true
     */

    /**
     * The first possible `Body` that this constraint is attached to.
     *
     * @property bodyA
     * @type body
     * @default null
     */

    /**
     * The second possible `Body` that this constraint is attached to.
     *
     * @property bodyB
     * @type body
     * @default null
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyA` if defined, otherwise a world-space position.
     *
     * @property pointA
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Vector` that specifies the offset of the constraint from center of the `constraint.bodyB` if defined, otherwise a world-space position.
     *
     * @property pointB
     * @type vector
     * @default { x: 0, y: 0 }
     */

    /**
     * A `Number` that specifies the stiffness of the constraint, i.e. the rate at which it returns to its resting `constraint.length`.
     * A value of `1` means the constraint should be very stiff.
     * A value of `0.2` means the constraint acts like a soft spring.
     *
     * @property stiffness
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the damping of the constraint, 
     * i.e. the amount of resistance applied to each body based on their velocities to limit the amount of oscillation.
     * Damping will only be apparent when the constraint also has a very low `stiffness`.
     * A value of `0.1` means the constraint will apply heavy damping, resulting in little to no oscillation.
     * A value of `0` means the constraint will apply no damping.
     *
     * @property damping
     * @type number
     * @default 0
     */

    /**
     * A `Number` that specifies the target resting length of the constraint. 
     * It is calculated automatically in `Constraint.create` from initial positions of the `constraint.bodyA` and `constraint.bodyB`.
     *
     * @property length
     * @type number
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

})();


/***/ }),
/* 11 */
/***/ (function(module, exports, __nested_webpack_require_165653__) {

/**
* The `Matter.Axes` module contains methods for creating and manipulating sets of axes.
*
* @class Axes
*/

var Axes = {};

module.exports = Axes;

var Vector = __nested_webpack_require_165653__(2);
var Common = __nested_webpack_require_165653__(0);

(function() {

    /**
     * Creates a new set of axes from the given vertices.
     * @method fromVertices
     * @param {vertices} vertices
     * @return {axes} A new axes from the given vertices
     */
    Axes.fromVertices = function(vertices) {
        var axes = {};

        // find the unique axes, using edge normal gradients
        for (var i = 0; i < vertices.length; i++) {
            var j = (i + 1) % vertices.length, 
                normal = Vector.normalise({ 
                    x: vertices[j].y - vertices[i].y, 
                    y: vertices[i].x - vertices[j].x
                }),
                gradient = (normal.y === 0) ? Infinity : (normal.x / normal.y);
            
            // limit precision
            gradient = gradient.toFixed(3).toString();
            axes[gradient] = normal;
        }

        return Common.values(axes);
    };

    /**
     * Rotates a set of axes by the given angle.
     * @method rotate
     * @param {axes} axes
     * @param {number} angle
     */
    Axes.rotate = function(axes, angle) {
        if (angle === 0)
            return;
        
        var cos = Math.cos(angle),
            sin = Math.sin(angle);

        for (var i = 0; i < axes.length; i++) {
            var axis = axes[i],
                xx;
            xx = axis.x * cos - axis.y * sin;
            axis.y = axis.x * sin + axis.y * cos;
            axis.x = xx;
        }
    };

})();


/***/ }),
/* 12 */
/***/ (function(module, exports, __nested_webpack_require_167394__) {

/**
* The `Matter.Bodies` module contains factory methods for creating rigid body models 
* with commonly used body configurations (such as rectangles, circles and other polygons).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Bodies
*/

// TODO: true circle bodies

var Bodies = {};

module.exports = Bodies;

var Vertices = __nested_webpack_require_167394__(3);
var Common = __nested_webpack_require_167394__(0);
var Body = __nested_webpack_require_167394__(4);
var Bounds = __nested_webpack_require_167394__(1);
var Vector = __nested_webpack_require_167394__(2);

(function() {

    /**
     * Creates a new rigid body model with a rectangle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method rectangle
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {object} [options]
     * @return {body} A new rectangle body
     */
    Bodies.rectangle = function(x, y, width, height, options) {
        options = options || {};

        var rectangle = { 
            label: 'Rectangle Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath('L 0 0 L ' + width + ' 0 L ' + width + ' ' + height + ' L 0 ' + height)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            rectangle.vertices = Vertices.chamfer(rectangle.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, rectangle, options));
    };
    
    /**
     * Creates a new rigid body model with a trapezoid hull. 
     * The `slope` is parameterised as a fraction of `width` and must be < 1 to form a valid trapezoid. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method trapezoid
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} slope Must be a number < 1.
     * @param {object} [options]
     * @return {body} A new trapezoid body
     */
    Bodies.trapezoid = function(x, y, width, height, slope, options) {
        options = options || {};

        if (slope >= 1) {
            Common.warn('Bodies.trapezoid: slope parameter must be < 1.');
        }

        slope *= 0.5;
        var roof = (1 - (slope * 2)) * width;
        
        var x1 = width * slope,
            x2 = x1 + roof,
            x3 = x2 + x1,
            verticesPath;

        if (slope < 0.5) {
            verticesPath = 'L 0 0 L ' + x1 + ' ' + (-height) + ' L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        } else {
            verticesPath = 'L 0 0 L ' + x2 + ' ' + (-height) + ' L ' + x3 + ' 0';
        }

        var trapezoid = { 
            label: 'Trapezoid Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(verticesPath)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            trapezoid.vertices = Vertices.chamfer(trapezoid.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, trapezoid, options));
    };

    /**
     * Creates a new rigid body model with a circle hull. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method circle
     * @param {number} x
     * @param {number} y
     * @param {number} radius
     * @param {object} [options]
     * @param {number} [maxSides]
     * @return {body} A new circle body
     */
    Bodies.circle = function(x, y, radius, options, maxSides) {
        options = options || {};

        var circle = {
            label: 'Circle Body',
            circleRadius: radius
        };
        
        // approximate circles with polygons until true circles implemented in SAT
        maxSides = maxSides || 25;
        var sides = Math.ceil(Math.max(10, Math.min(maxSides, radius)));

        // optimisation: always use even number of sides (half the number of unique axes)
        if (sides % 2 === 1)
            sides += 1;

        return Bodies.polygon(x, y, sides, radius, Common.extend({}, circle, options));
    };

    /**
     * Creates a new rigid body model with a regular polygon hull with the given number of sides. 
     * The options parameter is an object that specifies any properties you wish to override the defaults.
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method polygon
     * @param {number} x
     * @param {number} y
     * @param {number} sides
     * @param {number} radius
     * @param {object} [options]
     * @return {body} A new regular polygon body
     */
    Bodies.polygon = function(x, y, sides, radius, options) {
        options = options || {};

        if (sides < 3)
            return Bodies.circle(x, y, radius, options);

        var theta = 2 * Math.PI / sides,
            path = '',
            offset = theta * 0.5;

        for (var i = 0; i < sides; i += 1) {
            var angle = offset + (i * theta),
                xx = Math.cos(angle) * radius,
                yy = Math.sin(angle) * radius;

            path += 'L ' + xx.toFixed(3) + ' ' + yy.toFixed(3) + ' ';
        }

        var polygon = { 
            label: 'Polygon Body',
            position: { x: x, y: y },
            vertices: Vertices.fromPath(path)
        };

        if (options.chamfer) {
            var chamfer = options.chamfer;
            polygon.vertices = Vertices.chamfer(polygon.vertices, chamfer.radius, 
                chamfer.quality, chamfer.qualityMin, chamfer.qualityMax);
            delete options.chamfer;
        }

        return Body.create(Common.extend({}, polygon, options));
    };

    /**
     * Utility to create a compound body based on set(s) of vertices.
     * 
     * _Note:_ To optionally enable automatic concave vertices decomposition the [poly-decomp](https://github.com/schteppe/poly-decomp.js) 
     * package must be first installed and provided see `Common.setDecomp`, otherwise the convex hull of each vertex set will be used.
     * 
     * The resulting vertices are reorientated about their centre of mass,
     * and offset such that `body.position` corresponds to this point.
     * 
     * The resulting offset may be found if needed by subtracting `body.bounds` from the original input bounds.
     * To later move the centre of mass see `Body.setCentre`.
     * 
     * Note that automatic conconcave decomposition results are not always optimal. 
     * For best results, simplify the input vertices as much as possible first.
     * By default this function applies some addtional simplification to help.
     * 
     * Some outputs may also require further manual processing afterwards to be robust.
     * In particular some parts may need to be overlapped to avoid collision gaps.
     * Thin parts and sharp points should be avoided or removed where possible.
     *
     * The options parameter object specifies any `Matter.Body` properties you wish to override the defaults.
     * 
     * See the properties section of the `Matter.Body` module for detailed information on what you can pass via the `options` object.
     * @method fromVertices
     * @param {number} x
     * @param {number} y
     * @param {array} vertexSets One or more arrays of vertex points e.g. `[[{ x: 0, y: 0 }...], ...]`.
     * @param {object} [options] The body options.
     * @param {bool} [flagInternal=false] Optionally marks internal edges with `isInternal`.
     * @param {number} [removeCollinear=0.01] Threshold when simplifying vertices along the same edge.
     * @param {number} [minimumArea=10] Threshold when removing small parts.
     * @param {number} [removeDuplicatePoints=0.01] Threshold when simplifying nearby vertices.
     * @return {body}
     */
    Bodies.fromVertices = function(x, y, vertexSets, options, flagInternal, removeCollinear, minimumArea, removeDuplicatePoints) {
        var decomp = Common.getDecomp(),
            canDecomp,
            body,
            parts,
            isConvex,
            isConcave,
            vertices,
            i,
            j,
            k,
            v,
            z;

        // check decomp is as expected
        canDecomp = Boolean(decomp && decomp.quickDecomp);

        options = options || {};
        parts = [];

        flagInternal = typeof flagInternal !== 'undefined' ? flagInternal : false;
        removeCollinear = typeof removeCollinear !== 'undefined' ? removeCollinear : 0.01;
        minimumArea = typeof minimumArea !== 'undefined' ? minimumArea : 10;
        removeDuplicatePoints = typeof removeDuplicatePoints !== 'undefined' ? removeDuplicatePoints : 0.01;

        // ensure vertexSets is an array of arrays
        if (!Common.isArray(vertexSets[0])) {
            vertexSets = [vertexSets];
        }

        for (v = 0; v < vertexSets.length; v += 1) {
            vertices = vertexSets[v];
            isConvex = Vertices.isConvex(vertices);
            isConcave = !isConvex;

            if (isConcave && !canDecomp) {
                Common.warnOnce(
                    'Bodies.fromVertices: Install the \'poly-decomp\' library and use Common.setDecomp or provide \'decomp\' as a global to decompose concave vertices.'
                );
            }

            if (isConvex || !canDecomp) {
                if (isConvex) {
                    vertices = Vertices.clockwiseSort(vertices);
                } else {
                    // fallback to convex hull when decomposition is not possible
                    vertices = Vertices.hull(vertices);
                }

                parts.push({
                    position: { x: x, y: y },
                    vertices: vertices
                });
            } else {
                // initialise a decomposition
                var concave = vertices.map(function(vertex) {
                    return [vertex.x, vertex.y];
                });

                // vertices are concave and simple, we can decompose into parts
                decomp.makeCCW(concave);
                if (removeCollinear !== false)
                    decomp.removeCollinearPoints(concave, removeCollinear);
                if (removeDuplicatePoints !== false && decomp.removeDuplicatePoints)
                    decomp.removeDuplicatePoints(concave, removeDuplicatePoints);

                // use the quick decomposition algorithm (Bayazit)
                var decomposed = decomp.quickDecomp(concave);

                // for each decomposed chunk
                for (i = 0; i < decomposed.length; i++) {
                    var chunk = decomposed[i];

                    // convert vertices into the correct structure
                    var chunkVertices = chunk.map(function(vertices) {
                        return {
                            x: vertices[0],
                            y: vertices[1]
                        };
                    });

                    // skip small chunks
                    if (minimumArea > 0 && Vertices.area(chunkVertices) < minimumArea)
                        continue;

                    // create a compound part
                    parts.push({
                        position: Vertices.centre(chunkVertices),
                        vertices: chunkVertices
                    });
                }
            }
        }

        // create body parts
        for (i = 0; i < parts.length; i++) {
            parts[i] = Body.create(Common.extend(parts[i], options));
        }

        // flag internal edges (coincident part edges)
        if (flagInternal) {
            var coincident_max_dist = 5;

            for (i = 0; i < parts.length; i++) {
                var partA = parts[i];

                for (j = i + 1; j < parts.length; j++) {
                    var partB = parts[j];

                    if (Bounds.overlaps(partA.bounds, partB.bounds)) {
                        var pav = partA.vertices,
                            pbv = partB.vertices;

                        // iterate vertices of both parts
                        for (k = 0; k < partA.vertices.length; k++) {
                            for (z = 0; z < partB.vertices.length; z++) {
                                // find distances between the vertices
                                var da = Vector.magnitudeSquared(Vector.sub(pav[(k + 1) % pav.length], pbv[z])),
                                    db = Vector.magnitudeSquared(Vector.sub(pav[k], pbv[(z + 1) % pbv.length]));

                                // if both vertices are very close, consider the edge concident (internal)
                                if (da < coincident_max_dist && db < coincident_max_dist) {
                                    pav[k].isInternal = true;
                                    pbv[z].isInternal = true;
                                }
                            }
                        }

                    }
                }
            }
        }

        if (parts.length > 1) {
            // create the parent body to be returned, that contains generated compound parts
            body = Body.create(Common.extend({ parts: parts.slice(0) }, options));

            // offset such that body.position is at the centre off mass
            Body.setPosition(body, { x: x, y: y });

            return body;
        } else {
            return parts[0];
        }
    };

})();


/***/ }),
/* 13 */
/***/ (function(module, exports, __nested_webpack_require_181633__) {

/**
* The `Matter.Detector` module contains methods for efficiently detecting collisions between a list of bodies using a broadphase algorithm.
*
* @class Detector
*/

var Detector = {};

module.exports = Detector;

var Common = __nested_webpack_require_181633__(0);
var Collision = __nested_webpack_require_181633__(8);

(function() {

    /**
     * Creates a new collision detector.
     * @method create
     * @param {} options
     * @return {detector} A new collision detector
     */
    Detector.create = function(options) {
        var defaults = {
            bodies: [],
            collisions: [],
            pairs: null
        };

        return Common.extend(defaults, options);
    };

    /**
     * Sets the list of bodies in the detector.
     * @method setBodies
     * @param {detector} detector
     * @param {body[]} bodies
     */
    Detector.setBodies = function(detector, bodies) {
        detector.bodies = bodies.slice(0);
    };

    /**
     * Clears the detector including its list of bodies.
     * @method clear
     * @param {detector} detector
     */
    Detector.clear = function(detector) {
        detector.bodies = [];
        detector.collisions = [];
    };

    /**
     * Efficiently finds all collisions among all the bodies in `detector.bodies` using a broadphase algorithm.
     * 
     * _Note:_ The specific ordering of collisions returned is not guaranteed between releases and may change for performance reasons.
     * If a specific ordering is required then apply a sort to the resulting array.
     * @method collisions
     * @param {detector} detector
     * @return {collision[]} collisions
     */
    Detector.collisions = function(detector) {
        var pairs = detector.pairs,
            bodies = detector.bodies,
            bodiesLength = bodies.length,
            canCollide = Detector.canCollide,
            collides = Collision.collides,
            collisions = detector.collisions,
            collisionIndex = 0,
            i,
            j;

        bodies.sort(Detector._compareBoundsX);

        for (i = 0; i < bodiesLength; i++) {
            var bodyA = bodies[i],
                boundsA = bodyA.bounds,
                boundXMax = bodyA.bounds.max.x,
                boundYMax = bodyA.bounds.max.y,
                boundYMin = bodyA.bounds.min.y,
                bodyAStatic = bodyA.isStatic || bodyA.isSleeping,
                partsALength = bodyA.parts.length,
                partsASingle = partsALength === 1;

            for (j = i + 1; j < bodiesLength; j++) {
                var bodyB = bodies[j],
                    boundsB = bodyB.bounds;

                if (boundsB.min.x > boundXMax) {
                    break;
                }

                if (boundYMax < boundsB.min.y || boundYMin > boundsB.max.y) {
                    continue;
                }

                if (bodyAStatic && (bodyB.isStatic || bodyB.isSleeping)) {
                    continue;
                }

                if (!canCollide(bodyA.collisionFilter, bodyB.collisionFilter)) {
                    continue;
                }

                var partsBLength = bodyB.parts.length;

                if (partsASingle && partsBLength === 1) {
                    var collision = collides(bodyA, bodyB, pairs);

                    if (collision) {
                        collisions[collisionIndex++] = collision;
                    }
                } else {
                    var partsAStart = partsALength > 1 ? 1 : 0,
                        partsBStart = partsBLength > 1 ? 1 : 0;
                    
                    for (var k = partsAStart; k < partsALength; k++) {
                        var partA = bodyA.parts[k],
                            boundsA = partA.bounds;

                        for (var z = partsBStart; z < partsBLength; z++) {
                            var partB = bodyB.parts[z],
                                boundsB = partB.bounds;

                            if (boundsA.min.x > boundsB.max.x || boundsA.max.x < boundsB.min.x
                                || boundsA.max.y < boundsB.min.y || boundsA.min.y > boundsB.max.y) {
                                continue;
                            }

                            var collision = collides(partA, partB, pairs);

                            if (collision) {
                                collisions[collisionIndex++] = collision;
                            }
                        }
                    }
                }
            }
        }

        if (collisions.length !== collisionIndex) {
            collisions.length = collisionIndex;
        }

        return collisions;
    };

    /**
     * Returns `true` if both supplied collision filters will allow a collision to occur.
     * See `body.collisionFilter` for more information.
     * @method canCollide
     * @param {} filterA
     * @param {} filterB
     * @return {bool} `true` if collision can occur
     */
    Detector.canCollide = function(filterA, filterB) {
        if (filterA.group === filterB.group && filterA.group !== 0)
            return filterA.group > 0;

        return (filterA.mask & filterB.category) !== 0 && (filterB.mask & filterA.category) !== 0;
    };

    /**
     * The comparison function used in the broadphase algorithm.
     * Returns the signed delta of the bodies bounds on the x-axis.
     * @private
     * @method _sortCompare
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {number} The signed delta used for sorting
     */
    Detector._compareBoundsX = function(bodyA, bodyB) {
        return bodyA.bounds.min.x - bodyB.bounds.min.x;
    };

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * The array of `Matter.Body` between which the detector finds collisions.
     * 
     * _Note:_ The order of bodies in this array _is not fixed_ and will be continually managed by the detector.
     * @property bodies
     * @type body[]
     * @default []
     */

    /**
     * The array of `Matter.Collision` found in the last call to `Detector.collisions` on this detector.
     * @property collisions
     * @type collision[]
     * @default []
     */

    /**
     * Optional. A `Matter.Pairs` object from which previous collision objects may be reused. Intended for internal `Matter.Engine` usage.
     * @property pairs
     * @type {pairs|null}
     * @default null
     */

})();


/***/ }),
/* 14 */
/***/ (function(module, exports, __nested_webpack_require_188122__) {

/**
* The `Matter.Mouse` module contains methods for creating and manipulating mouse inputs.
*
* @class Mouse
*/

var Mouse = {};

module.exports = Mouse;

var Common = __nested_webpack_require_188122__(0);

(function() {

    /**
     * Creates a mouse input.
     * @method create
     * @param {HTMLElement} element
     * @return {mouse} A new mouse
     */
    Mouse.create = function(element) {
        var mouse = {};

        if (!element) {
            Common.log('Mouse.create: element was undefined, defaulting to document.body', 'warn');
        }
        
        mouse.element = element || document.body;
        mouse.absolute = { x: 0, y: 0 };
        mouse.position = { x: 0, y: 0 };
        mouse.mousedownPosition = { x: 0, y: 0 };
        mouse.mouseupPosition = { x: 0, y: 0 };
        mouse.offset = { x: 0, y: 0 };
        mouse.scale = { x: 1, y: 1 };
        mouse.wheelDelta = 0;
        mouse.button = -1;
        mouse.pixelRatio = parseInt(mouse.element.getAttribute('data-pixel-ratio'), 10) || 1;

        mouse.sourceEvents = {
            mousemove: null,
            mousedown: null,
            mouseup: null,
            mousewheel: null
        };
        
        mouse.mousemove = function(event) { 
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.sourceEvents.mousemove = event;
        };
        
        mouse.mousedown = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                mouse.button = 0;
                event.preventDefault();
            } else {
                mouse.button = event.button;
            }

            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mousedownPosition.x = mouse.position.x;
            mouse.mousedownPosition.y = mouse.position.y;
            mouse.sourceEvents.mousedown = event;
        };
        
        mouse.mouseup = function(event) {
            var position = Mouse._getRelativeMousePosition(event, mouse.element, mouse.pixelRatio),
                touches = event.changedTouches;

            if (touches) {
                event.preventDefault();
            }
            
            mouse.button = -1;
            mouse.absolute.x = position.x;
            mouse.absolute.y = position.y;
            mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
            mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
            mouse.mouseupPosition.x = mouse.position.x;
            mouse.mouseupPosition.y = mouse.position.y;
            mouse.sourceEvents.mouseup = event;
        };

        mouse.mousewheel = function(event) {
            mouse.wheelDelta = Math.max(-1, Math.min(1, event.wheelDelta || -event.detail));
            event.preventDefault();
            mouse.sourceEvents.mousewheel = event;
        };

        Mouse.setElement(mouse, mouse.element);

        return mouse;
    };

    /**
     * Sets the element the mouse is bound to (and relative to).
     * @method setElement
     * @param {mouse} mouse
     * @param {HTMLElement} element
     */
    Mouse.setElement = function(mouse, element) {
        mouse.element = element;

        element.addEventListener('mousemove', mouse.mousemove, { passive: true });
        element.addEventListener('mousedown', mouse.mousedown, { passive: true });
        element.addEventListener('mouseup', mouse.mouseup, { passive: true });
        
        element.addEventListener('wheel', mouse.mousewheel, { passive: false });
        
        element.addEventListener('touchmove', mouse.mousemove, { passive: false });
        element.addEventListener('touchstart', mouse.mousedown, { passive: false });
        element.addEventListener('touchend', mouse.mouseup, { passive: false });
    };

    /**
     * Clears all captured source events.
     * @method clearSourceEvents
     * @param {mouse} mouse
     */
    Mouse.clearSourceEvents = function(mouse) {
        mouse.sourceEvents.mousemove = null;
        mouse.sourceEvents.mousedown = null;
        mouse.sourceEvents.mouseup = null;
        mouse.sourceEvents.mousewheel = null;
        mouse.wheelDelta = 0;
    };

    /**
     * Sets the mouse position offset.
     * @method setOffset
     * @param {mouse} mouse
     * @param {vector} offset
     */
    Mouse.setOffset = function(mouse, offset) {
        mouse.offset.x = offset.x;
        mouse.offset.y = offset.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };

    /**
     * Sets the mouse position scale.
     * @method setScale
     * @param {mouse} mouse
     * @param {vector} scale
     */
    Mouse.setScale = function(mouse, scale) {
        mouse.scale.x = scale.x;
        mouse.scale.y = scale.y;
        mouse.position.x = mouse.absolute.x * mouse.scale.x + mouse.offset.x;
        mouse.position.y = mouse.absolute.y * mouse.scale.y + mouse.offset.y;
    };
    
    /**
     * Gets the mouse position relative to an element given a screen pixel ratio.
     * @method _getRelativeMousePosition
     * @private
     * @param {} event
     * @param {} element
     * @param {number} pixelRatio
     * @return {}
     */
    Mouse._getRelativeMousePosition = function(event, element, pixelRatio) {
        var elementBounds = element.getBoundingClientRect(),
            rootNode = (document.documentElement || document.body.parentNode || document.body),
            scrollX = (window.pageXOffset !== undefined) ? window.pageXOffset : rootNode.scrollLeft,
            scrollY = (window.pageYOffset !== undefined) ? window.pageYOffset : rootNode.scrollTop,
            touches = event.changedTouches,
            x, y;
        
        if (touches) {
            x = touches[0].pageX - elementBounds.left - scrollX;
            y = touches[0].pageY - elementBounds.top - scrollY;
        } else {
            x = event.pageX - elementBounds.left - scrollX;
            y = event.pageY - elementBounds.top - scrollY;
        }

        return { 
            x: x / (element.clientWidth / (element.width || element.clientWidth) * pixelRatio),
            y: y / (element.clientHeight / (element.height || element.clientHeight) * pixelRatio)
        };
    };

})();


/***/ }),
/* 15 */
/***/ (function(module, exports, __nested_webpack_require_195247__) {

/**
* The `Matter.Plugin` module contains functions for registering and installing plugins on modules.
*
* @class Plugin
*/

var Plugin = {};

module.exports = Plugin;

var Common = __nested_webpack_require_195247__(0);

(function() {

    Plugin._registry = {};

    /**
     * Registers a plugin object so it can be resolved later by name.
     * @method register
     * @param plugin {} The plugin to register.
     * @return {object} The plugin.
     */
    Plugin.register = function(plugin) {
        if (!Plugin.isPlugin(plugin)) {
            Common.warn('Plugin.register:', Plugin.toString(plugin), 'does not implement all required fields.');
        }

        if (plugin.name in Plugin._registry) {
            var registered = Plugin._registry[plugin.name],
                pluginVersion = Plugin.versionParse(plugin.version).number,
                registeredVersion = Plugin.versionParse(registered.version).number;

            if (pluginVersion > registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'was upgraded to', Plugin.toString(plugin));
                Plugin._registry[plugin.name] = plugin;
            } else if (pluginVersion < registeredVersion) {
                Common.warn('Plugin.register:', Plugin.toString(registered), 'can not be downgraded to', Plugin.toString(plugin));
            } else if (plugin !== registered) {
                Common.warn('Plugin.register:', Plugin.toString(plugin), 'is already registered to different plugin object');
            }
        } else {
            Plugin._registry[plugin.name] = plugin;
        }

        return plugin;
    };

    /**
     * Resolves a dependency to a plugin object from the registry if it exists. 
     * The `dependency` may contain a version, but only the name matters when resolving.
     * @method resolve
     * @param dependency {string} The dependency.
     * @return {object} The plugin if resolved, otherwise `undefined`.
     */
    Plugin.resolve = function(dependency) {
        return Plugin._registry[Plugin.dependencyParse(dependency).name];
    };

    /**
     * Returns a pretty printed plugin name and version.
     * @method toString
     * @param plugin {} The plugin.
     * @return {string} Pretty printed plugin name and version.
     */
    Plugin.toString = function(plugin) {
        return typeof plugin === 'string' ? plugin : (plugin.name || 'anonymous') + '@' + (plugin.version || plugin.range || '0.0.0');
    };

    /**
     * Returns `true` if the object meets the minimum standard to be considered a plugin.
     * This means it must define the following properties:
     * - `name`
     * - `version`
     * - `install`
     * @method isPlugin
     * @param obj {} The obj to test.
     * @return {boolean} `true` if the object can be considered a plugin otherwise `false`.
     */
    Plugin.isPlugin = function(obj) {
        return obj && obj.name && obj.version && obj.install;
    };

    /**
     * Returns `true` if a plugin with the given `name` been installed on `module`.
     * @method isUsed
     * @param module {} The module.
     * @param name {string} The plugin name.
     * @return {boolean} `true` if a plugin with the given `name` been installed on `module`, otherwise `false`.
     */
    Plugin.isUsed = function(module, name) {
        return module.used.indexOf(name) > -1;
    };

    /**
     * Returns `true` if `plugin.for` is applicable to `module` by comparing against `module.name` and `module.version`.
     * If `plugin.for` is not specified then it is assumed to be applicable.
     * The value of `plugin.for` is a string of the format `'module-name'` or `'module-name@version'`.
     * @method isFor
     * @param plugin {} The plugin.
     * @param module {} The module.
     * @return {boolean} `true` if `plugin.for` is applicable to `module`, otherwise `false`.
     */
    Plugin.isFor = function(plugin, module) {
        var parsed = plugin.for && Plugin.dependencyParse(plugin.for);
        return !plugin.for || (module.name === parsed.name && Plugin.versionSatisfies(module.version, parsed.range));
    };

    /**
     * Installs the plugins by calling `plugin.install` on each plugin specified in `plugins` if passed, otherwise `module.uses`.
     * For installing plugins on `Matter` see the convenience function `Matter.use`.
     * Plugins may be specified either by their name or a reference to the plugin object.
     * Plugins themselves may specify further dependencies, but each plugin is installed only once.
     * Order is important, a topological sort is performed to find the best resulting order of installation.
     * This sorting attempts to satisfy every dependency's requested ordering, but may not be exact in all cases.
     * This function logs the resulting status of each dependency in the console, along with any warnings.
     * - A green tick ✅ indicates a dependency was resolved and installed.
     * - An orange diamond 🔶 indicates a dependency was resolved but a warning was thrown for it or one if its dependencies.
     * - A red cross ❌ indicates a dependency could not be resolved.
     * Avoid calling this function multiple times on the same module unless you intend to manually control installation order.
     * @method use
     * @param module {} The module install plugins on.
     * @param [plugins=module.uses] {} The plugins to install on module (optional, defaults to `module.uses`).
     */
    Plugin.use = function(module, plugins) {
        module.uses = (module.uses || []).concat(plugins || []);

        if (module.uses.length === 0) {
            Common.warn('Plugin.use:', Plugin.toString(module), 'does not specify any dependencies to install.');
            return;
        }

        var dependencies = Plugin.dependencies(module),
            sortedDependencies = Common.topologicalSort(dependencies),
            status = [];

        for (var i = 0; i < sortedDependencies.length; i += 1) {
            if (sortedDependencies[i] === module.name) {
                continue;
            }

            var plugin = Plugin.resolve(sortedDependencies[i]);

            if (!plugin) {
                status.push('❌ ' + sortedDependencies[i]);
                continue;
            }

            if (Plugin.isUsed(module, plugin.name)) {
                continue;
            }

            if (!Plugin.isFor(plugin, module)) {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'is for', plugin.for, 'but installed on', Plugin.toString(module) + '.');
                plugin._warned = true;
            }

            if (plugin.install) {
                plugin.install(module);
            } else {
                Common.warn('Plugin.use:', Plugin.toString(plugin), 'does not specify an install function.');
                plugin._warned = true;
            }

            if (plugin._warned) {
                status.push('🔶 ' + Plugin.toString(plugin));
                delete plugin._warned;
            } else {
                status.push('✅ ' + Plugin.toString(plugin));
            }

            module.used.push(plugin.name);
        }

        if (status.length > 0) {
            Common.info(status.join('  '));
        }
    };

    /**
     * Recursively finds all of a module's dependencies and returns a flat dependency graph.
     * @method dependencies
     * @param module {} The module.
     * @return {object} A dependency graph.
     */
    Plugin.dependencies = function(module, tracked) {
        var parsedBase = Plugin.dependencyParse(module),
            name = parsedBase.name;

        tracked = tracked || {};

        if (name in tracked) {
            return;
        }

        module = Plugin.resolve(module) || module;

        tracked[name] = Common.map(module.uses || [], function(dependency) {
            if (Plugin.isPlugin(dependency)) {
                Plugin.register(dependency);
            }

            var parsed = Plugin.dependencyParse(dependency),
                resolved = Plugin.resolve(dependency);

            if (resolved && !Plugin.versionSatisfies(resolved.version, parsed.range)) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(resolved), 'does not satisfy',
                    Plugin.toString(parsed), 'used by', Plugin.toString(parsedBase) + '.'
                );

                resolved._warned = true;
                module._warned = true;
            } else if (!resolved) {
                Common.warn(
                    'Plugin.dependencies:', Plugin.toString(dependency), 'used by',
                    Plugin.toString(parsedBase), 'could not be resolved.'
                );

                module._warned = true;
            }

            return parsed.name;
        });

        for (var i = 0; i < tracked[name].length; i += 1) {
            Plugin.dependencies(tracked[name][i], tracked);
        }

        return tracked;
    };

    /**
     * Parses a dependency string into its components.
     * The `dependency` is a string of the format `'module-name'` or `'module-name@version'`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * This function can also handle dependencies that are already resolved (e.g. a module object).
     * @method dependencyParse
     * @param dependency {string} The dependency of the format `'module-name'` or `'module-name@version'`.
     * @return {object} The dependency parsed into its components.
     */
    Plugin.dependencyParse = function(dependency) {
        if (Common.isString(dependency)) {
            var pattern = /^[\w-]+(@(\*|[\^~]?\d+\.\d+\.\d+(-[0-9A-Za-z-+]+)?))?$/;

            if (!pattern.test(dependency)) {
                Common.warn('Plugin.dependencyParse:', dependency, 'is not a valid dependency string.');
            }

            return {
                name: dependency.split('@')[0],
                range: dependency.split('@')[1] || '*'
            };
        }

        return {
            name: dependency.name,
            range: dependency.range || dependency.version
        };
    };

    /**
     * Parses a version string into its components.  
     * Versions are strictly of the format `x.y.z` (as in [semver](http://semver.org/)).
     * Versions may optionally have a prerelease tag in the format `x.y.z-alpha`.
     * Ranges are a strict subset of [npm ranges](https://docs.npmjs.com/misc/semver#advanced-range-syntax).
     * Only the following range types are supported:
     * - Tilde ranges e.g. `~1.2.3`
     * - Caret ranges e.g. `^1.2.3`
     * - Greater than ranges e.g. `>1.2.3`
     * - Greater than or equal ranges e.g. `>=1.2.3`
     * - Exact version e.g. `1.2.3`
     * - Any version `*`
     * @method versionParse
     * @param range {string} The version string.
     * @return {object} The version range parsed into its components.
     */
    Plugin.versionParse = function(range) {
        var pattern = /^(\*)|(\^|~|>=|>)?\s*((\d+)\.(\d+)\.(\d+))(-[0-9A-Za-z-+]+)?$/;

        if (!pattern.test(range)) {
            Common.warn('Plugin.versionParse:', range, 'is not a valid version or range.');
        }

        var parts = pattern.exec(range);
        var major = Number(parts[4]);
        var minor = Number(parts[5]);
        var patch = Number(parts[6]);

        return {
            isRange: Boolean(parts[1] || parts[2]),
            version: parts[3],
            range: range,
            operator: parts[1] || parts[2] || '',
            major: major,
            minor: minor,
            patch: patch,
            parts: [major, minor, patch],
            prerelease: parts[7],
            number: major * 1e8 + minor * 1e4 + patch
        };
    };

    /**
     * Returns `true` if `version` satisfies the given `range`.
     * See documentation for `Plugin.versionParse` for a description of the format.
     * If a version or range is not specified, then any version (`*`) is assumed to satisfy.
     * @method versionSatisfies
     * @param version {string} The version string.
     * @param range {string} The range string.
     * @return {boolean} `true` if `version` satisfies `range`, otherwise `false`.
     */
    Plugin.versionSatisfies = function(version, range) {
        range = range || '*';

        var r = Plugin.versionParse(range),
            v = Plugin.versionParse(version);

        if (r.isRange) {
            if (r.operator === '*' || version === '*') {
                return true;
            }

            if (r.operator === '>') {
                return v.number > r.number;
            }

            if (r.operator === '>=') {
                return v.number >= r.number;
            }

            if (r.operator === '~') {
                return v.major === r.major && v.minor === r.minor && v.patch >= r.patch;
            }

            if (r.operator === '^') {
                if (r.major > 0) {
                    return v.major === r.major && v.number >= r.number;
                }

                if (r.minor > 0) {
                    return v.minor === r.minor && v.patch >= r.patch;
                }

                return v.patch === r.patch;
            }
        }

        return version === range || version === '*';
    };

})();


/***/ }),
/* 16 */
/***/ (function(module, exports) {

/**
* The `Matter.Contact` module contains methods for creating and manipulating collision contacts.
*
* @class Contact
*/

var Contact = {};

module.exports = Contact;

(function() {

    /**
     * Creates a new contact.
     * @method create
     * @param {vertex} [vertex]
     * @return {contact} A new contact
     */
    Contact.create = function(vertex) {
        return {
            vertex: vertex,
            normalImpulse: 0,
            tangentImpulse: 0
        };
    };

})();


/***/ }),
/* 17 */
/***/ (function(module, exports, __nested_webpack_require_209153__) {

/**
* The `Matter.Engine` module contains methods for creating and manipulating engines.
* An engine is a controller that manages updating the simulation of the world.
* See `Matter.Runner` for an optional game loop utility.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Engine
*/

var Engine = {};

module.exports = Engine;

var Sleeping = __nested_webpack_require_209153__(7);
var Resolver = __nested_webpack_require_209153__(18);
var Detector = __nested_webpack_require_209153__(13);
var Pairs = __nested_webpack_require_209153__(19);
var Events = __nested_webpack_require_209153__(5);
var Composite = __nested_webpack_require_209153__(6);
var Constraint = __nested_webpack_require_209153__(10);
var Common = __nested_webpack_require_209153__(0);
var Body = __nested_webpack_require_209153__(4);

(function() {

    Engine._deltaMax = 1000 / 60;

    /**
     * Creates a new engine. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {engine} engine
     */
    Engine.create = function(options) {
        options = options || {};

        var defaults = {
            positionIterations: 6,
            velocityIterations: 4,
            constraintIterations: 2,
            enableSleeping: false,
            events: [],
            plugin: {},
            gravity: {
                x: 0,
                y: 1,
                scale: 0.001
            },
            timing: {
                timestamp: 0,
                timeScale: 1,
                lastDelta: 0,
                lastElapsed: 0,
                lastUpdatesPerFrame: 0
            }
        };

        var engine = Common.extend(defaults, options);

        engine.world = options.world || Composite.create({ label: 'World' });
        engine.pairs = options.pairs || Pairs.create();
        engine.detector = options.detector || Detector.create();
        engine.detector.pairs = engine.pairs;

        // for temporary back compatibility only
        engine.grid = { buckets: [] };
        engine.world.gravity = engine.gravity;
        engine.broadphase = engine.grid;
        engine.metrics = {};
        
        return engine;
    };

    /**
     * Moves the simulation forward in time by `delta` milliseconds.
     * Triggers `beforeUpdate`, `beforeSolve` and `afterUpdate` events.
     * Triggers `collisionStart`, `collisionActive` and `collisionEnd` events.
     * @method update
     * @param {engine} engine
     * @param {number} [delta=16.666]
     */
    Engine.update = function(engine, delta) {
        var startTime = Common.now();

        var world = engine.world,
            detector = engine.detector,
            pairs = engine.pairs,
            timing = engine.timing,
            timestamp = timing.timestamp,
            i;

        // warn if high delta
        if (delta > Engine._deltaMax) {
            Common.warnOnce(
                'Matter.Engine.update: delta argument is recommended to be less than or equal to', Engine._deltaMax.toFixed(3), 'ms.'
            );
        }

        delta = typeof delta !== 'undefined' ? delta : Common._baseDelta;
        delta *= timing.timeScale;

        // increment timestamp
        timing.timestamp += delta;
        timing.lastDelta = delta;

        // create an event object
        var event = {
            timestamp: timing.timestamp,
            delta: delta
        };

        Events.trigger(engine, 'beforeUpdate', event);

        // get all bodies and all constraints in the world
        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world);

        // if the world has changed
        if (world.isModified) {
            // update the detector bodies
            Detector.setBodies(detector, allBodies);

            // reset all composite modified flags
            Composite.setModified(world, false, false, true);
        }

        // update sleeping if enabled
        if (engine.enableSleeping)
            Sleeping.update(allBodies, delta);

        // apply gravity to all bodies
        Engine._bodiesApplyGravity(allBodies, engine.gravity);

        // update all body position and rotation by integration
        if (delta > 0) {
            Engine._bodiesUpdate(allBodies, delta);
        }

        Events.trigger(engine, 'beforeSolve', event);

        // update all constraints (first pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, delta);
        }
        Constraint.postSolveAll(allBodies);

        // find all collisions
        var collisions = Detector.collisions(detector);

        // update collision pairs
        Pairs.update(pairs, collisions, timestamp);

        // wake up bodies involved in collisions
        if (engine.enableSleeping)
            Sleeping.afterCollisions(pairs.list);

        // trigger collision events
        if (pairs.collisionStart.length > 0) {
            Events.trigger(engine, 'collisionStart', { 
                pairs: pairs.collisionStart,
                timestamp: timing.timestamp,
                delta: delta
            });
        }

        // iteratively resolve position between collisions
        var positionDamping = Common.clamp(20 / engine.positionIterations, 0, 1);
        
        Resolver.preSolvePosition(pairs.list);
        for (i = 0; i < engine.positionIterations; i++) {
            Resolver.solvePosition(pairs.list, delta, positionDamping);
        }
        Resolver.postSolvePosition(allBodies);

        // update all constraints (second pass)
        Constraint.preSolveAll(allBodies);
        for (i = 0; i < engine.constraintIterations; i++) {
            Constraint.solveAll(allConstraints, delta);
        }
        Constraint.postSolveAll(allBodies);

        // iteratively resolve velocity between collisions
        Resolver.preSolveVelocity(pairs.list);
        for (i = 0; i < engine.velocityIterations; i++) {
            Resolver.solveVelocity(pairs.list, delta);
        }

        // update body speed and velocity properties
        Engine._bodiesUpdateVelocities(allBodies);

        // trigger collision events
        if (pairs.collisionActive.length > 0) {
            Events.trigger(engine, 'collisionActive', { 
                pairs: pairs.collisionActive, 
                timestamp: timing.timestamp,
                delta: delta
            });
        }

        if (pairs.collisionEnd.length > 0) {
            Events.trigger(engine, 'collisionEnd', {
                pairs: pairs.collisionEnd,
                timestamp: timing.timestamp,
                delta: delta
            });
        }

        // clear force buffers
        Engine._bodiesClearForces(allBodies);

        Events.trigger(engine, 'afterUpdate', event);

        // log the time elapsed computing this update
        engine.timing.lastElapsed = Common.now() - startTime;

        return engine;
    };
    
    /**
     * Merges two engines by keeping the configuration of `engineA` but replacing the world with the one from `engineB`.
     * @method merge
     * @param {engine} engineA
     * @param {engine} engineB
     */
    Engine.merge = function(engineA, engineB) {
        Common.extend(engineA, engineB);
        
        if (engineB.world) {
            engineA.world = engineB.world;

            Engine.clear(engineA);

            var bodies = Composite.allBodies(engineA.world);

            for (var i = 0; i < bodies.length; i++) {
                var body = bodies[i];
                Sleeping.set(body, false);
                body.id = Common.nextId();
            }
        }
    };

    /**
     * Clears the engine pairs and detector.
     * @method clear
     * @param {engine} engine
     */
    Engine.clear = function(engine) {
        Pairs.clear(engine.pairs);
        Detector.clear(engine.detector);
    };

    /**
     * Zeroes the `body.force` and `body.torque` force buffers.
     * @method _bodiesClearForces
     * @private
     * @param {body[]} bodies
     */
    Engine._bodiesClearForces = function(bodies) {
        var bodiesLength = bodies.length;

        for (var i = 0; i < bodiesLength; i++) {
            var body = bodies[i];

            // reset force buffers
            body.force.x = 0;
            body.force.y = 0;
            body.torque = 0;
        }
    };

    /**
     * Applies gravitational acceleration to all `bodies`.
     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet.
     * 
     * @method _bodiesApplyGravity
     * @private
     * @param {body[]} bodies
     * @param {vector} gravity
     */
    Engine._bodiesApplyGravity = function(bodies, gravity) {
        var gravityScale = typeof gravity.scale !== 'undefined' ? gravity.scale : 0.001,
            bodiesLength = bodies.length;

        if ((gravity.x === 0 && gravity.y === 0) || gravityScale === 0) {
            return;
        }
        
        for (var i = 0; i < bodiesLength; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            // add the resultant force of gravity
            body.force.y += body.mass * gravity.y * gravityScale;
            body.force.x += body.mass * gravity.x * gravityScale;
        }
    };

    /**
     * Applies `Body.update` to all given `bodies`.
     * @method _bodiesUpdate
     * @private
     * @param {body[]} bodies
     * @param {number} delta The amount of time elapsed between updates
     */
    Engine._bodiesUpdate = function(bodies, delta) {
        var bodiesLength = bodies.length;

        for (var i = 0; i < bodiesLength; i++) {
            var body = bodies[i];

            if (body.isStatic || body.isSleeping)
                continue;

            Body.update(body, delta);
        }
    };

    /**
     * Applies `Body.updateVelocities` to all given `bodies`.
     * @method _bodiesUpdateVelocities
     * @private
     * @param {body[]} bodies
     */
    Engine._bodiesUpdateVelocities = function(bodies) {
        var bodiesLength = bodies.length;

        for (var i = 0; i < bodiesLength; i++) {
            Body.updateVelocities(bodies[i]);
        }
    };

    /**
     * A deprecated alias for `Runner.run`, use `Matter.Runner.run(engine)` instead and see `Matter.Runner` for more information.
     * @deprecated use Matter.Runner.run(engine) instead
     * @method run
     * @param {engine} engine
     */

    /**
    * Fired just before an update
    *
    * @event beforeUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after bodies updated based on their velocity and forces, but before any collision detection, constraints and resolving etc.
    *
    * @event beforeSolve
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update and all collision events
    *
    * @event afterUpdate
    * @param {object} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have started to collide in the current tick (if any)
    *
    * @event collisionStart
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that are colliding in the current tick (if any)
    *
    * @event collisionActive
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /**
    * Fired after engine update, provides a list of all pairs that have ended collision in the current tick (if any)
    *
    * @event collisionEnd
    * @param {object} event An event object
    * @param {pair[]} event.pairs List of affected pairs
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {number} event.delta The delta time in milliseconds value used in the update
    * @param {engine} event.source The source object of the event
    * @param {string} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * An integer `Number` that specifies the number of position iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property positionIterations
     * @type number
     * @default 6
     */

    /**
     * An integer `Number` that specifies the number of velocity iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     *
     * @property velocityIterations
     * @type number
     * @default 4
     */

    /**
     * An integer `Number` that specifies the number of constraint iterations to perform each update.
     * The higher the value, the higher quality the simulation will be at the expense of performance.
     * The default value of `2` is usually very adequate.
     *
     * @property constraintIterations
     * @type number
     * @default 2
     */

    /**
     * A flag that specifies whether the engine should allow sleeping via the `Matter.Sleeping` module.
     * Sleeping can improve stability and performance, but often at the expense of accuracy.
     *
     * @property enableSleeping
     * @type boolean
     * @default false
     */

    /**
     * An `Object` containing properties regarding the timing systems of the engine. 
     *
     * @property timing
     * @type object
     */

    /**
     * A `Number` that specifies the global scaling factor of time for all bodies.
     * A value of `0` freezes the simulation.
     * A value of `0.1` gives a slow-motion effect.
     * A value of `1.2` gives a speed-up effect.
     *
     * @property timing.timeScale
     * @type number
     * @default 1
     */

    /**
     * A `Number` that specifies the current simulation-time in milliseconds starting from `0`. 
     * It is incremented on every `Engine.update` by the given `delta` argument. 
     * 
     * @property timing.timestamp
     * @type number
     * @default 0
     */

    /**
     * A `Number` that represents the total execution time elapsed during the last `Engine.update` in milliseconds.
     * It is updated by timing from the start of the last `Engine.update` call until it ends.
     *
     * This value will also include the total execution time of all event handlers directly or indirectly triggered by the engine update.
     * 
     * @property timing.lastElapsed
     * @type number
     * @default 0
     */

    /**
     * A `Number` that represents the `delta` value used in the last engine update.
     * 
     * @property timing.lastDelta
     * @type number
     * @default 0
     */

    /**
     * A `Matter.Detector` instance.
     *
     * @property detector
     * @type detector
     * @default a Matter.Detector instance
     */

    /**
     * A `Matter.Grid` instance.
     *
     * @deprecated replaced by `engine.detector`
     * @property grid
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * Replaced by and now alias for `engine.grid`.
     *
     * @deprecated replaced by `engine.detector`
     * @property broadphase
     * @type grid
     * @default a Matter.Grid instance
     */

    /**
     * The root `Matter.Composite` instance that will contain all bodies, constraints and other composites to be simulated by this engine.
     *
     * @property world
     * @type composite
     * @default a Matter.Composite instance
     */

    /**
     * An object reserved for storing plugin-specific properties.
     *
     * @property plugin
     * @type {}
     */

    /**
     * An optional gravitational acceleration applied to all bodies in `engine.world` on every update.
     * 
     * This models a [uniform gravitational field](https://en.wikipedia.org/wiki/Gravity_of_Earth), similar to near the surface of a planet. For gravity in other contexts, disable this and apply forces as needed.
     * 
     * To disable set the `scale` component to `0`.
     * 
     * This is split into three components for ease of use:  
     * a normalised direction (`x` and `y`) and magnitude (`scale`).
     *
     * @property gravity
     * @type object
     */

    /**
     * The gravitational direction normal `x` component, to be multiplied by `gravity.scale`.
     * 
     * @property gravity.x
     * @type object
     * @default 0
     */

    /**
     * The gravitational direction normal `y` component, to be multiplied by `gravity.scale`.
     *
     * @property gravity.y
     * @type object
     * @default 1
     */

    /**
     * The magnitude of the gravitational acceleration.
     * 
     * @property gravity.scale
     * @type object
     * @default 0.001
     */

})();


/***/ }),
/* 18 */
/***/ (function(module, exports, __nested_webpack_require_227816__) {

/**
* The `Matter.Resolver` module contains methods for resolving collision pairs.
*
* @class Resolver
*/

var Resolver = {};

module.exports = Resolver;

var Vertices = __nested_webpack_require_227816__(3);
var Common = __nested_webpack_require_227816__(0);
var Bounds = __nested_webpack_require_227816__(1);

(function() {

    Resolver._restingThresh = 2;
    Resolver._restingThreshTangent = Math.sqrt(6);
    Resolver._positionDampen = 0.9;
    Resolver._positionWarming = 0.8;
    Resolver._frictionNormalMultiplier = 5;
    Resolver._frictionMaxStatic = Number.MAX_VALUE;

    /**
     * Prepare pairs for position solving.
     * @method preSolvePosition
     * @param {pair[]} pairs
     */
    Resolver.preSolvePosition = function(pairs) {
        var i,
            pair,
            contactCount,
            pairsLength = pairs.length;

        // find total contacts on each body
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];
            
            if (!pair.isActive)
                continue;
            
            contactCount = pair.contactCount;
            pair.collision.parentA.totalContacts += contactCount;
            pair.collision.parentB.totalContacts += contactCount;
        }
    };

    /**
     * Find a solution for pair positions.
     * @method solvePosition
     * @param {pair[]} pairs
     * @param {number} delta
     * @param {number} [damping=1]
     */
    Resolver.solvePosition = function(pairs, delta, damping) {
        var i,
            pair,
            collision,
            bodyA,
            bodyB,
            normal,
            contactShare,
            positionImpulse,
            positionDampen = Resolver._positionDampen * (damping || 1),
            slopDampen = Common.clamp(delta / Common._baseDelta, 0, 1),
            pairsLength = pairs.length;

        // find impulses required to resolve penetration
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;

            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;

            // get current separation between body edges involved in collision
            pair.separation = 
                collision.depth + normal.x * (bodyB.positionImpulse.x - bodyA.positionImpulse.x)
                + normal.y * (bodyB.positionImpulse.y - bodyA.positionImpulse.y);
        }
        
        for (i = 0; i < pairsLength; i++) {
            pair = pairs[i];

            if (!pair.isActive || pair.isSensor)
                continue;
            
            collision = pair.collision;
            bodyA = collision.parentA;
            bodyB = collision.parentB;
            normal = collision.normal;
            positionImpulse = pair.separation - pair.slop * slopDampen;

            if (bodyA.isStatic || bodyB.isStatic)
                positionImpulse *= 2;
            
            if (!(bodyA.isStatic || bodyA.isSleeping)) {
                contactShare = positionDampen / bodyA.totalContacts;
                bodyA.positionImpulse.x += normal.x * positionImpulse * contactShare;
                bodyA.positionImpulse.y += normal.y * positionImpulse * contactShare;
            }

            if (!(bodyB.isStatic || bodyB.isSleeping)) {
                contactShare = positionDampen / bodyB.totalContacts;
                bodyB.positionImpulse.x -= normal.x * positionImpulse * contactShare;
                bodyB.positionImpulse.y -= normal.y * positionImpulse * contactShare;
            }
        }
    };

    /**
     * Apply position resolution.
     * @method postSolvePosition
     * @param {body[]} bodies
     */
    Resolver.postSolvePosition = function(bodies) {
        var positionWarming = Resolver._positionWarming,
            bodiesLength = bodies.length,
            verticesTranslate = Vertices.translate,
            boundsUpdate = Bounds.update;

        for (var i = 0; i < bodiesLength; i++) {
            var body = bodies[i],
                positionImpulse = body.positionImpulse,
                positionImpulseX = positionImpulse.x,
                positionImpulseY = positionImpulse.y,
                velocity = body.velocity;

            // reset contact count
            body.totalContacts = 0;

            if (positionImpulseX !== 0 || positionImpulseY !== 0) {
                // update body geometry
                for (var j = 0; j < body.parts.length; j++) {
                    var part = body.parts[j];
                    verticesTranslate(part.vertices, positionImpulse);
                    boundsUpdate(part.bounds, part.vertices, velocity);
                    part.position.x += positionImpulseX;
                    part.position.y += positionImpulseY;
                }

                // move the body without changing velocity
                body.positionPrev.x += positionImpulseX;
                body.positionPrev.y += positionImpulseY;

                if (positionImpulseX * velocity.x + positionImpulseY * velocity.y < 0) {
                    // reset cached impulse if the body has velocity along it
                    positionImpulse.x = 0;
                    positionImpulse.y = 0;
                } else {
                    // warm the next iteration
                    positionImpulse.x *= positionWarming;
                    positionImpulse.y *= positionWarming;
                }
            }
        }
    };

    /**
     * Prepare pairs for velocity solving.
     * @method preSolveVelocity
     * @param {pair[]} pairs
     */
    Resolver.preSolveVelocity = function(pairs) {
        var pairsLength = pairs.length,
            i,
            j;
        
        for (i = 0; i < pairsLength; i++) {
            var pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            var contacts = pair.contacts,
                contactCount = pair.contactCount,
                collision = pair.collision,
                bodyA = collision.parentA,
                bodyB = collision.parentB,
                normal = collision.normal,
                tangent = collision.tangent;
    
            // resolve each contact
            for (j = 0; j < contactCount; j++) {
                var contact = contacts[j],
                    contactVertex = contact.vertex,
                    normalImpulse = contact.normalImpulse,
                    tangentImpulse = contact.tangentImpulse;
    
                if (normalImpulse !== 0 || tangentImpulse !== 0) {
                    // total impulse from contact
                    var impulseX = normal.x * normalImpulse + tangent.x * tangentImpulse,
                        impulseY = normal.y * normalImpulse + tangent.y * tangentImpulse;
                    
                    // apply impulse from contact
                    if (!(bodyA.isStatic || bodyA.isSleeping)) {
                        bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                        bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                        bodyA.anglePrev += bodyA.inverseInertia * (
                            (contactVertex.x - bodyA.position.x) * impulseY
                            - (contactVertex.y - bodyA.position.y) * impulseX
                        );
                    }
    
                    if (!(bodyB.isStatic || bodyB.isSleeping)) {
                        bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                        bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                        bodyB.anglePrev -= bodyB.inverseInertia * (
                            (contactVertex.x - bodyB.position.x) * impulseY 
                            - (contactVertex.y - bodyB.position.y) * impulseX
                        );
                    }
                }
            }
        }
    };

    /**
     * Find a solution for pair velocities.
     * @method solveVelocity
     * @param {pair[]} pairs
     * @param {number} delta
     */
    Resolver.solveVelocity = function(pairs, delta) {
        var timeScale = delta / Common._baseDelta,
            timeScaleSquared = timeScale * timeScale,
            timeScaleCubed = timeScaleSquared * timeScale,
            restingThresh = -Resolver._restingThresh * timeScale,
            restingThreshTangent = Resolver._restingThreshTangent,
            frictionNormalMultiplier = Resolver._frictionNormalMultiplier * timeScale,
            frictionMaxStatic = Resolver._frictionMaxStatic,
            pairsLength = pairs.length,
            tangentImpulse,
            maxFriction,
            i,
            j;

        for (i = 0; i < pairsLength; i++) {
            var pair = pairs[i];
            
            if (!pair.isActive || pair.isSensor)
                continue;
            
            var collision = pair.collision,
                bodyA = collision.parentA,
                bodyB = collision.parentB,
                normalX = collision.normal.x,
                normalY = collision.normal.y,
                tangentX = collision.tangent.x,
                tangentY = collision.tangent.y,
                inverseMassTotal = pair.inverseMass,
                friction = pair.friction * pair.frictionStatic * frictionNormalMultiplier,
                contacts = pair.contacts,
                contactCount = pair.contactCount,
                contactShare = 1 / contactCount;

            // get body velocities
            var bodyAVelocityX = bodyA.position.x - bodyA.positionPrev.x,
                bodyAVelocityY = bodyA.position.y - bodyA.positionPrev.y,
                bodyAAngularVelocity = bodyA.angle - bodyA.anglePrev,
                bodyBVelocityX = bodyB.position.x - bodyB.positionPrev.x,
                bodyBVelocityY = bodyB.position.y - bodyB.positionPrev.y,
                bodyBAngularVelocity = bodyB.angle - bodyB.anglePrev;

            // resolve each contact
            for (j = 0; j < contactCount; j++) {
                var contact = contacts[j],
                    contactVertex = contact.vertex;

                var offsetAX = contactVertex.x - bodyA.position.x,
                    offsetAY = contactVertex.y - bodyA.position.y,
                    offsetBX = contactVertex.x - bodyB.position.x,
                    offsetBY = contactVertex.y - bodyB.position.y;
 
                var velocityPointAX = bodyAVelocityX - offsetAY * bodyAAngularVelocity,
                    velocityPointAY = bodyAVelocityY + offsetAX * bodyAAngularVelocity,
                    velocityPointBX = bodyBVelocityX - offsetBY * bodyBAngularVelocity,
                    velocityPointBY = bodyBVelocityY + offsetBX * bodyBAngularVelocity;

                var relativeVelocityX = velocityPointAX - velocityPointBX,
                    relativeVelocityY = velocityPointAY - velocityPointBY;

                var normalVelocity = normalX * relativeVelocityX + normalY * relativeVelocityY,
                    tangentVelocity = tangentX * relativeVelocityX + tangentY * relativeVelocityY;

                // coulomb friction
                var normalOverlap = pair.separation + normalVelocity;
                var normalForce = Math.min(normalOverlap, 1);
                normalForce = normalOverlap < 0 ? 0 : normalForce;

                var frictionLimit = normalForce * friction;

                if (tangentVelocity < -frictionLimit || tangentVelocity > frictionLimit) {
                    maxFriction = (tangentVelocity > 0 ? tangentVelocity : -tangentVelocity);
                    tangentImpulse = pair.friction * (tangentVelocity > 0 ? 1 : -1) * timeScaleCubed;
                    
                    if (tangentImpulse < -maxFriction) {
                        tangentImpulse = -maxFriction;
                    } else if (tangentImpulse > maxFriction) {
                        tangentImpulse = maxFriction;
                    }
                } else {
                    tangentImpulse = tangentVelocity;
                    maxFriction = frictionMaxStatic;
                }

                // account for mass, inertia and contact offset
                var oAcN = offsetAX * normalY - offsetAY * normalX,
                    oBcN = offsetBX * normalY - offsetBY * normalX,
                    share = contactShare / (inverseMassTotal + bodyA.inverseInertia * oAcN * oAcN + bodyB.inverseInertia * oBcN * oBcN);

                // raw impulses
                var normalImpulse = (1 + pair.restitution) * normalVelocity * share;
                tangentImpulse *= share;

                // handle high velocity and resting collisions separately
                if (normalVelocity < restingThresh) {
                    // high normal velocity so clear cached contact normal impulse
                    contact.normalImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // impulse constraint tends to 0
                    var contactNormalImpulse = contact.normalImpulse;
                    contact.normalImpulse += normalImpulse;
                    if (contact.normalImpulse > 0) contact.normalImpulse = 0;
                    normalImpulse = contact.normalImpulse - contactNormalImpulse;
                }

                // handle high velocity and resting collisions separately
                if (tangentVelocity < -restingThreshTangent || tangentVelocity > restingThreshTangent) {
                    // high tangent velocity so clear cached contact tangent impulse
                    contact.tangentImpulse = 0;
                } else {
                    // solve resting collision constraints using Erin Catto's method (GDC08)
                    // tangent impulse tends to -tangentSpeed or +tangentSpeed
                    var contactTangentImpulse = contact.tangentImpulse;
                    contact.tangentImpulse += tangentImpulse;
                    if (contact.tangentImpulse < -maxFriction) contact.tangentImpulse = -maxFriction;
                    if (contact.tangentImpulse > maxFriction) contact.tangentImpulse = maxFriction;
                    tangentImpulse = contact.tangentImpulse - contactTangentImpulse;
                }

                // total impulse from contact
                var impulseX = normalX * normalImpulse + tangentX * tangentImpulse,
                    impulseY = normalY * normalImpulse + tangentY * tangentImpulse;
                
                // apply impulse from contact
                if (!(bodyA.isStatic || bodyA.isSleeping)) {
                    bodyA.positionPrev.x += impulseX * bodyA.inverseMass;
                    bodyA.positionPrev.y += impulseY * bodyA.inverseMass;
                    bodyA.anglePrev += (offsetAX * impulseY - offsetAY * impulseX) * bodyA.inverseInertia;
                }

                if (!(bodyB.isStatic || bodyB.isSleeping)) {
                    bodyB.positionPrev.x -= impulseX * bodyB.inverseMass;
                    bodyB.positionPrev.y -= impulseY * bodyB.inverseMass;
                    bodyB.anglePrev -= (offsetBX * impulseY - offsetBY * impulseX) * bodyB.inverseInertia;
                }
            }
        }
    };

})();


/***/ }),
/* 19 */
/***/ (function(module, exports, __nested_webpack_require_243201__) {

/**
* The `Matter.Pairs` module contains methods for creating and manipulating collision pair sets.
*
* @class Pairs
*/

var Pairs = {};

module.exports = Pairs;

var Pair = __nested_webpack_require_243201__(9);
var Common = __nested_webpack_require_243201__(0);

(function() {

    /**
     * Creates a new pairs structure.
     * @method create
     * @param {object} options
     * @return {pairs} A new pairs structure
     */
    Pairs.create = function(options) {
        return Common.extend({ 
            table: {},
            list: [],
            collisionStart: [],
            collisionActive: [],
            collisionEnd: []
        }, options);
    };

    /**
     * Updates pairs given a list of collisions.
     * @method update
     * @param {object} pairs
     * @param {collision[]} collisions
     * @param {number} timestamp
     */
    Pairs.update = function(pairs, collisions, timestamp) {
        var pairUpdate = Pair.update,
            pairCreate = Pair.create,
            pairSetActive = Pair.setActive,
            pairsTable = pairs.table,
            pairsList = pairs.list,
            pairsListLength = pairsList.length,
            pairsListIndex = pairsListLength,
            collisionStart = pairs.collisionStart,
            collisionEnd = pairs.collisionEnd,
            collisionActive = pairs.collisionActive,
            collisionsLength = collisions.length,
            collisionStartIndex = 0,
            collisionEndIndex = 0,
            collisionActiveIndex = 0,
            collision,
            pair,
            i;

        for (i = 0; i < collisionsLength; i++) {
            collision = collisions[i];
            pair = collision.pair;

            if (pair) {
                // pair already exists (but may or may not be active)
                if (pair.isActive) {
                    // pair exists and is active
                    collisionActive[collisionActiveIndex++] = pair;
                }

                // update the pair
                pairUpdate(pair, collision, timestamp);
            } else {
                // pair did not exist, create a new pair
                pair = pairCreate(collision, timestamp);
                pairsTable[pair.id] = pair;

                // add the new pair
                collisionStart[collisionStartIndex++] = pair;
                pairsList[pairsListIndex++] = pair;
            }
        }

        // find pairs that are no longer active
        pairsListIndex = 0;
        pairsListLength = pairsList.length;

        for (i = 0; i < pairsListLength; i++) {
            pair = pairsList[i];
            
            // pair is active if updated this timestep
            if (pair.timeUpdated >= timestamp) {
                // keep active pairs
                pairsList[pairsListIndex++] = pair;
            } else {
                pairSetActive(pair, false, timestamp);

                // keep inactive pairs if both bodies may be sleeping
                if (pair.collision.bodyA.sleepCounter > 0 && pair.collision.bodyB.sleepCounter > 0) {
                    pairsList[pairsListIndex++] = pair;
                } else {
                    // remove inactive pairs if either body awake
                    collisionEnd[collisionEndIndex++] = pair;
                    delete pairsTable[pair.id];
                }
            }
        }

        // update array lengths if changed
        if (pairsList.length !== pairsListIndex) {
            pairsList.length = pairsListIndex;
        }

        if (collisionStart.length !== collisionStartIndex) {
            collisionStart.length = collisionStartIndex;
        }

        if (collisionEnd.length !== collisionEndIndex) {
            collisionEnd.length = collisionEndIndex;
        }

        if (collisionActive.length !== collisionActiveIndex) {
            collisionActive.length = collisionActiveIndex;
        }
    };

    /**
     * Clears the given pairs structure.
     * @method clear
     * @param {pairs} pairs
     * @return {pairs} pairs
     */
    Pairs.clear = function(pairs) {
        pairs.table = {};
        pairs.list.length = 0;
        pairs.collisionStart.length = 0;
        pairs.collisionActive.length = 0;
        pairs.collisionEnd.length = 0;
        return pairs;
    };

})();


/***/ }),
/* 20 */
/***/ (function(module, exports, __nested_webpack_require_247547__) {

var Matter = module.exports = __nested_webpack_require_247547__(21);

Matter.Axes = __nested_webpack_require_247547__(11);
Matter.Bodies = __nested_webpack_require_247547__(12);
Matter.Body = __nested_webpack_require_247547__(4);
Matter.Bounds = __nested_webpack_require_247547__(1);
Matter.Collision = __nested_webpack_require_247547__(8);
Matter.Common = __nested_webpack_require_247547__(0);
Matter.Composite = __nested_webpack_require_247547__(6);
Matter.Composites = __nested_webpack_require_247547__(22);
Matter.Constraint = __nested_webpack_require_247547__(10);
Matter.Contact = __nested_webpack_require_247547__(16);
Matter.Detector = __nested_webpack_require_247547__(13);
Matter.Engine = __nested_webpack_require_247547__(17);
Matter.Events = __nested_webpack_require_247547__(5);
Matter.Grid = __nested_webpack_require_247547__(23);
Matter.Mouse = __nested_webpack_require_247547__(14);
Matter.MouseConstraint = __nested_webpack_require_247547__(24);
Matter.Pair = __nested_webpack_require_247547__(9);
Matter.Pairs = __nested_webpack_require_247547__(19);
Matter.Plugin = __nested_webpack_require_247547__(15);
Matter.Query = __nested_webpack_require_247547__(25);
Matter.Render = __nested_webpack_require_247547__(26);
Matter.Resolver = __nested_webpack_require_247547__(18);
Matter.Runner = __nested_webpack_require_247547__(27);
Matter.SAT = __nested_webpack_require_247547__(28);
Matter.Sleeping = __nested_webpack_require_247547__(7);
Matter.Svg = __nested_webpack_require_247547__(29);
Matter.Vector = __nested_webpack_require_247547__(2);
Matter.Vertices = __nested_webpack_require_247547__(3);
Matter.World = __nested_webpack_require_247547__(30);

// temporary back compatibility
Matter.Engine.run = Matter.Runner.run;
Matter.Common.deprecated(Matter.Engine, 'run', 'Engine.run ➤ use Matter.Runner.run(engine) instead');


/***/ }),
/* 21 */
/***/ (function(module, exports, __nested_webpack_require_249083__) {

/**
* The `Matter` module is the top level namespace. It also includes a function for installing plugins on top of the library.
*
* @class Matter
*/

var Matter = {};

module.exports = Matter;

var Plugin = __nested_webpack_require_249083__(15);
var Common = __nested_webpack_require_249083__(0);

(function() {

    /**
     * The library name.
     * @property name
     * @readOnly
     * @type {String}
     */
    Matter.name = 'matter-js';

    /**
     * The library version.
     * @property version
     * @readOnly
     * @type {String}
     */
    Matter.version =   true ? "0.20.0" : 0;

    /**
     * A list of plugin dependencies to be installed. These are normally set and installed through `Matter.use`.
     * Alternatively you may set `Matter.uses` manually and install them by calling `Plugin.use(Matter)`.
     * @property uses
     * @type {Array}
     */
    Matter.uses = [];

    /**
     * The plugins that have been installed through `Matter.Plugin.install`. Read only.
     * @property used
     * @readOnly
     * @type {Array}
     */
    Matter.used = [];

    /**
     * Installs the given plugins on the `Matter` namespace.
     * This is a short-hand for `Plugin.use`, see it for more information.
     * Call this function once at the start of your code, with all of the plugins you wish to install as arguments.
     * Avoid calling this function multiple times unless you intend to manually control installation order.
     * @method use
     * @param ...plugin {Function} The plugin(s) to install on `base` (multi-argument).
     */
    Matter.use = function() {
        Plugin.use(Matter, Array.prototype.slice.call(arguments));
    };

    /**
     * Chains a function to excute before the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method before
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain before the original
     * @return {function} The chained function that replaced the original
     */
    Matter.before = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathBefore(Matter, path, func);
    };

    /**
     * Chains a function to excute after the original function on the given `path` relative to `Matter`.
     * See also docs for `Common.chain`.
     * @method after
     * @param {string} path The path relative to `Matter`
     * @param {function} func The function to chain after the original
     * @return {function} The chained function that replaced the original
     */
    Matter.after = function(path, func) {
        path = path.replace(/^Matter./, '');
        return Common.chainPathAfter(Matter, path, func);
    };

})();


/***/ }),
/* 22 */
/***/ (function(module, exports, __nested_webpack_require_251991__) {

/**
* The `Matter.Composites` module contains factory methods for creating composite bodies
* with commonly used configurations (such as stacks and chains).
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Composites
*/

var Composites = {};

module.exports = Composites;

var Composite = __nested_webpack_require_251991__(6);
var Constraint = __nested_webpack_require_251991__(10);
var Common = __nested_webpack_require_251991__(0);
var Body = __nested_webpack_require_251991__(4);
var Bodies = __nested_webpack_require_251991__(12);
var deprecated = Common.deprecated;

(function() {

    /**
     * Create a new composite containing bodies created in the callback in a grid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method stack
     * @param {number} x Starting position in X.
     * @param {number} y Starting position in Y.
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.stack = function(x, y, columns, rows, columnGap, rowGap, callback) {
        var stack = Composite.create({ label: 'Stack' }),
            currentX = x,
            currentY = y,
            lastBody,
            i = 0;

        for (var row = 0; row < rows; row++) {
            var maxHeight = 0;
            
            for (var column = 0; column < columns; column++) {
                var body = callback(currentX, currentY, column, row, lastBody, i);
                    
                if (body) {
                    var bodyHeight = body.bounds.max.y - body.bounds.min.y,
                        bodyWidth = body.bounds.max.x - body.bounds.min.x; 

                    if (bodyHeight > maxHeight)
                        maxHeight = bodyHeight;
                    
                    Body.translate(body, { x: bodyWidth * 0.5, y: bodyHeight * 0.5 });

                    currentX = body.bounds.max.x + columnGap;

                    Composite.addBody(stack, body);
                    
                    lastBody = body;
                    i += 1;
                } else {
                    currentX += columnGap;
                }
            }
            
            currentY += maxHeight + rowGap;
            currentX = x;
        }

        return stack;
    };
    
    /**
     * Chains all bodies in the given composite together using constraints.
     * @method chain
     * @param {composite} composite
     * @param {number} xOffsetA
     * @param {number} yOffsetA
     * @param {number} xOffsetB
     * @param {number} yOffsetB
     * @param {object} options
     * @return {composite} A new composite containing objects chained together with constraints
     */
    Composites.chain = function(composite, xOffsetA, yOffsetA, xOffsetB, yOffsetB, options) {
        var bodies = composite.bodies;
        
        for (var i = 1; i < bodies.length; i++) {
            var bodyA = bodies[i - 1],
                bodyB = bodies[i],
                bodyAHeight = bodyA.bounds.max.y - bodyA.bounds.min.y,
                bodyAWidth = bodyA.bounds.max.x - bodyA.bounds.min.x, 
                bodyBHeight = bodyB.bounds.max.y - bodyB.bounds.min.y,
                bodyBWidth = bodyB.bounds.max.x - bodyB.bounds.min.x;
        
            var defaults = {
                bodyA: bodyA,
                pointA: { x: bodyAWidth * xOffsetA, y: bodyAHeight * yOffsetA },
                bodyB: bodyB,
                pointB: { x: bodyBWidth * xOffsetB, y: bodyBHeight * yOffsetB }
            };
            
            var constraint = Common.extend(defaults, options);
        
            Composite.addConstraint(composite, Constraint.create(constraint));
        }

        composite.label += ' Chain';
        
        return composite;
    };

    /**
     * Connects bodies in the composite with constraints in a grid pattern, with optional cross braces.
     * @method mesh
     * @param {composite} composite
     * @param {number} columns
     * @param {number} rows
     * @param {boolean} crossBrace
     * @param {object} options
     * @return {composite} The composite containing objects meshed together with constraints
     */
    Composites.mesh = function(composite, columns, rows, crossBrace, options) {
        var bodies = composite.bodies,
            row,
            col,
            bodyA,
            bodyB,
            bodyC;
        
        for (row = 0; row < rows; row++) {
            for (col = 1; col < columns; col++) {
                bodyA = bodies[(col - 1) + (row * columns)];
                bodyB = bodies[col + (row * columns)];
                Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));
            }

            if (row > 0) {
                for (col = 0; col < columns; col++) {
                    bodyA = bodies[col + ((row - 1) * columns)];
                    bodyB = bodies[col + (row * columns)];
                    Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyA, bodyB: bodyB }, options)));

                    if (crossBrace && col > 0) {
                        bodyC = bodies[(col - 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }

                    if (crossBrace && col < columns - 1) {
                        bodyC = bodies[(col + 1) + ((row - 1) * columns)];
                        Composite.addConstraint(composite, Constraint.create(Common.extend({ bodyA: bodyC, bodyB: bodyB }, options)));
                    }
                }
            }
        }

        composite.label += ' Mesh';
        
        return composite;
    };
    
    /**
     * Create a new composite containing bodies created in the callback in a pyramid arrangement.
     * This function uses the body's bounds to prevent overlaps.
     * @method pyramid
     * @param {number} x Starting position in X.
     * @param {number} y Starting position in Y.
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {function} callback
     * @return {composite} A new composite containing objects created in the callback
     */
    Composites.pyramid = function(x, y, columns, rows, columnGap, rowGap, callback) {
        return Composites.stack(x, y, columns, rows, columnGap, rowGap, function(stackX, stackY, column, row, lastBody, i) {
            var actualRows = Math.min(rows, Math.ceil(columns / 2)),
                lastBodyWidth = lastBody ? lastBody.bounds.max.x - lastBody.bounds.min.x : 0;
            
            if (row > actualRows)
                return;
            
            // reverse row order
            row = actualRows - row;
            
            var start = row,
                end = columns - 1 - row;

            if (column < start || column > end)
                return;
            
            // retroactively fix the first body's position, since width was unknown
            if (i === 1) {
                Body.translate(lastBody, { x: (column + (columns % 2 === 1 ? 1 : -1)) * lastBodyWidth, y: 0 });
            }

            var xOffset = lastBody ? column * lastBodyWidth : 0;
            
            return callback(x + xOffset + column * columnGap, stackY, column, row, lastBody, i);
        });
    };

    /**
     * This has now moved to the [newtonsCradle example](https://github.com/liabru/matter-js/blob/master/examples/newtonsCradle.js), follow that instead as this function is deprecated here.
     * @deprecated moved to newtonsCradle example
     * @method newtonsCradle
     * @param {number} x Starting position in X.
     * @param {number} y Starting position in Y.
     * @param {number} number
     * @param {number} size
     * @param {number} length
     * @return {composite} A new composite newtonsCradle body
     */
    Composites.newtonsCradle = function(x, y, number, size, length) {
        var newtonsCradle = Composite.create({ label: 'Newtons Cradle' });

        for (var i = 0; i < number; i++) {
            var separation = 1.9,
                circle = Bodies.circle(x + i * (size * separation), y + length, size, 
                    { inertia: Infinity, restitution: 1, friction: 0, frictionAir: 0.0001, slop: 1 }),
                constraint = Constraint.create({ pointA: { x: x + i * (size * separation), y: y }, bodyB: circle });

            Composite.addBody(newtonsCradle, circle);
            Composite.addConstraint(newtonsCradle, constraint);
        }

        return newtonsCradle;
    };

    deprecated(Composites, 'newtonsCradle', 'Composites.newtonsCradle ➤ moved to newtonsCradle example');
    
    /**
     * This has now moved to the [car example](https://github.com/liabru/matter-js/blob/master/examples/car.js), follow that instead as this function is deprecated here.
     * @deprecated moved to car example
     * @method car
     * @param {number} x Starting position in X.
     * @param {number} y Starting position in Y.
     * @param {number} width
     * @param {number} height
     * @param {number} wheelSize
     * @return {composite} A new composite car body
     */
    Composites.car = function(x, y, width, height, wheelSize) {
        var group = Body.nextGroup(true),
            wheelBase = 20,
            wheelAOffset = -width * 0.5 + wheelBase,
            wheelBOffset = width * 0.5 - wheelBase,
            wheelYOffset = 0;
    
        var car = Composite.create({ label: 'Car' }),
            body = Bodies.rectangle(x, y, width, height, { 
                collisionFilter: {
                    group: group
                },
                chamfer: {
                    radius: height * 0.5
                },
                density: 0.0002
            });
    
        var wheelA = Bodies.circle(x + wheelAOffset, y + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var wheelB = Bodies.circle(x + wheelBOffset, y + wheelYOffset, wheelSize, { 
            collisionFilter: {
                group: group
            },
            friction: 0.8
        });
                    
        var axelA = Constraint.create({
            bodyB: body,
            pointB: { x: wheelAOffset, y: wheelYOffset },
            bodyA: wheelA,
            stiffness: 1,
            length: 0
        });
                        
        var axelB = Constraint.create({
            bodyB: body,
            pointB: { x: wheelBOffset, y: wheelYOffset },
            bodyA: wheelB,
            stiffness: 1,
            length: 0
        });
        
        Composite.addBody(car, body);
        Composite.addBody(car, wheelA);
        Composite.addBody(car, wheelB);
        Composite.addConstraint(car, axelA);
        Composite.addConstraint(car, axelB);

        return car;
    };

    deprecated(Composites, 'car', 'Composites.car ➤ moved to car example');

    /**
     * This has now moved to the [softBody example](https://github.com/liabru/matter-js/blob/master/examples/softBody.js)
     * and the [cloth example](https://github.com/liabru/matter-js/blob/master/examples/cloth.js), follow those instead as this function is deprecated here.
     * @deprecated moved to softBody and cloth examples
     * @method softBody
     * @param {number} x Starting position in X.
     * @param {number} y Starting position in Y.
     * @param {number} columns
     * @param {number} rows
     * @param {number} columnGap
     * @param {number} rowGap
     * @param {boolean} crossBrace
     * @param {number} particleRadius
     * @param {} particleOptions
     * @param {} constraintOptions
     * @return {composite} A new composite softBody
     */
    Composites.softBody = function(x, y, columns, rows, columnGap, rowGap, crossBrace, particleRadius, particleOptions, constraintOptions) {
        particleOptions = Common.extend({ inertia: Infinity }, particleOptions);
        constraintOptions = Common.extend({ stiffness: 0.2, render: { type: 'line', anchors: false } }, constraintOptions);

        var softBody = Composites.stack(x, y, columns, rows, columnGap, rowGap, function(stackX, stackY) {
            return Bodies.circle(stackX, stackY, particleRadius, particleOptions);
        });

        Composites.mesh(softBody, columns, rows, crossBrace, constraintOptions);

        softBody.label = 'Soft Body';

        return softBody;
    };

    deprecated(Composites, 'softBody', 'Composites.softBody ➤ moved to softBody and cloth examples');
})();


/***/ }),
/* 23 */
/***/ (function(module, exports, __nested_webpack_require_264894__) {

/**
* This module has now been replaced by `Matter.Detector`.
*
* All usage should be migrated to `Matter.Detector` or another alternative.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.Grid` module contains methods for creating and manipulating collision broadphase grid structures.
*
* @class Grid
* @deprecated
*/

var Grid = {};

module.exports = Grid;

var Pair = __nested_webpack_require_264894__(9);
var Common = __nested_webpack_require_264894__(0);
var deprecated = Common.deprecated;

(function() {

    /**
     * Creates a new grid.
     * @deprecated replaced by Matter.Detector
     * @method create
     * @param {} options
     * @return {grid} A new grid
     */
    Grid.create = function(options) {
        var defaults = {
            buckets: {},
            pairs: {},
            pairsList: [],
            bucketWidth: 48,
            bucketHeight: 48
        };

        return Common.extend(defaults, options);
    };

    /**
     * The width of a single grid bucket.
     *
     * @property bucketWidth
     * @type number
     * @default 48
     */

    /**
     * The height of a single grid bucket.
     *
     * @property bucketHeight
     * @type number
     * @default 48
     */

    /**
     * Updates the grid.
     * @deprecated replaced by Matter.Detector
     * @method update
     * @param {grid} grid
     * @param {body[]} bodies
     * @param {engine} engine
     * @param {boolean} forceUpdate
     */
    Grid.update = function(grid, bodies, engine, forceUpdate) {
        var i, col, row,
            world = engine.world,
            buckets = grid.buckets,
            bucket,
            bucketId,
            gridChanged = false;

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.isSleeping && !forceUpdate)
                continue;

            // temporary back compatibility bounds check
            if (world.bounds && (body.bounds.max.x < world.bounds.min.x || body.bounds.min.x > world.bounds.max.x
                || body.bounds.max.y < world.bounds.min.y || body.bounds.min.y > world.bounds.max.y))
                continue;

            var newRegion = Grid._getRegion(grid, body);

            // if the body has changed grid region
            if (!body.region || newRegion.id !== body.region.id || forceUpdate) {

                if (!body.region || forceUpdate)
                    body.region = newRegion;

                var union = Grid._regionUnion(newRegion, body.region);

                // update grid buckets affected by region change
                // iterate over the union of both regions
                for (col = union.startCol; col <= union.endCol; col++) {
                    for (row = union.startRow; row <= union.endRow; row++) {
                        bucketId = Grid._getBucketId(col, row);
                        bucket = buckets[bucketId];

                        var isInsideNewRegion = (col >= newRegion.startCol && col <= newRegion.endCol
                                                && row >= newRegion.startRow && row <= newRegion.endRow);

                        var isInsideOldRegion = (col >= body.region.startCol && col <= body.region.endCol
                                                && row >= body.region.startRow && row <= body.region.endRow);

                        // remove from old region buckets
                        if (!isInsideNewRegion && isInsideOldRegion) {
                            if (isInsideOldRegion) {
                                if (bucket)
                                    Grid._bucketRemoveBody(grid, bucket, body);
                            }
                        }

                        // add to new region buckets
                        if (body.region === newRegion || (isInsideNewRegion && !isInsideOldRegion) || forceUpdate) {
                            if (!bucket)
                                bucket = Grid._createBucket(buckets, bucketId);
                            Grid._bucketAddBody(grid, bucket, body);
                        }
                    }
                }

                // set the new region
                body.region = newRegion;

                // flag changes so we can update pairs
                gridChanged = true;
            }
        }

        // update pairs list only if pairs changed (i.e. a body changed region)
        if (gridChanged)
            grid.pairsList = Grid._createActivePairsList(grid);
    };

    deprecated(Grid, 'update', 'Grid.update ➤ replaced by Matter.Detector');

    /**
     * Clears the grid.
     * @deprecated replaced by Matter.Detector
     * @method clear
     * @param {grid} grid
     */
    Grid.clear = function(grid) {
        grid.buckets = {};
        grid.pairs = {};
        grid.pairsList = [];
    };

    deprecated(Grid, 'clear', 'Grid.clear ➤ replaced by Matter.Detector');

    /**
     * Finds the union of two regions.
     * @method _regionUnion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} regionA
     * @param {} regionB
     * @return {} region
     */
    Grid._regionUnion = function(regionA, regionB) {
        var startCol = Math.min(regionA.startCol, regionB.startCol),
            endCol = Math.max(regionA.endCol, regionB.endCol),
            startRow = Math.min(regionA.startRow, regionB.startRow),
            endRow = Math.max(regionA.endRow, regionB.endRow);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Gets the region a given body falls in for a given grid.
     * @method _getRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} body
     * @return {} region
     */
    Grid._getRegion = function(grid, body) {
        var bounds = body.bounds,
            startCol = Math.floor(bounds.min.x / grid.bucketWidth),
            endCol = Math.floor(bounds.max.x / grid.bucketWidth),
            startRow = Math.floor(bounds.min.y / grid.bucketHeight),
            endRow = Math.floor(bounds.max.y / grid.bucketHeight);

        return Grid._createRegion(startCol, endCol, startRow, endRow);
    };

    /**
     * Creates a region.
     * @method _createRegion
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} startCol
     * @param {} endCol
     * @param {} startRow
     * @param {} endRow
     * @return {} region
     */
    Grid._createRegion = function(startCol, endCol, startRow, endRow) {
        return { 
            id: startCol + ',' + endCol + ',' + startRow + ',' + endRow,
            startCol: startCol, 
            endCol: endCol, 
            startRow: startRow, 
            endRow: endRow 
        };
    };

    /**
     * Gets the bucket id at the given position.
     * @method _getBucketId
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} column
     * @param {} row
     * @return {string} bucket id
     */
    Grid._getBucketId = function(column, row) {
        return 'C' + column + 'R' + row;
    };

    /**
     * Creates a bucket.
     * @method _createBucket
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} buckets
     * @param {} bucketId
     * @return {} bucket
     */
    Grid._createBucket = function(buckets, bucketId) {
        var bucket = buckets[bucketId] = [];
        return bucket;
    };

    /**
     * Adds a body to a bucket.
     * @method _bucketAddBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketAddBody = function(grid, bucket, body) {
        var gridPairs = grid.pairs,
            pairId = Pair.id,
            bucketLength = bucket.length,
            i;

        // add new pairs
        for (i = 0; i < bucketLength; i++) {
            var bodyB = bucket[i];

            if (body.id === bodyB.id || (body.isStatic && bodyB.isStatic))
                continue;

            // keep track of the number of buckets the pair exists in
            // important for Grid.update to work
            var id = pairId(body, bodyB),
                pair = gridPairs[id];

            if (pair) {
                pair[2] += 1;
            } else {
                gridPairs[id] = [body, bodyB, 1];
            }
        }

        // add to bodies (after pairs, otherwise pairs with self)
        bucket.push(body);
    };

    /**
     * Removes a body from a bucket.
     * @method _bucketRemoveBody
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @param {} bucket
     * @param {} body
     */
    Grid._bucketRemoveBody = function(grid, bucket, body) {
        var gridPairs = grid.pairs,
            pairId = Pair.id,
            i;

        // remove from bucket
        bucket.splice(Common.indexOf(bucket, body), 1);

        var bucketLength = bucket.length;

        // update pair counts
        for (i = 0; i < bucketLength; i++) {
            // keep track of the number of buckets the pair exists in
            // important for _createActivePairsList to work
            var pair = gridPairs[pairId(body, bucket[i])];

            if (pair)
                pair[2] -= 1;
        }
    };

    /**
     * Generates a list of the active pairs in the grid.
     * @method _createActivePairsList
     * @deprecated replaced by Matter.Detector
     * @private
     * @param {} grid
     * @return [] pairs
     */
    Grid._createActivePairsList = function(grid) {
        var pair,
            gridPairs = grid.pairs,
            pairKeys = Common.keys(gridPairs),
            pairKeysLength = pairKeys.length,
            pairs = [],
            k;

        // iterate over grid.pairs
        for (k = 0; k < pairKeysLength; k++) {
            pair = gridPairs[pairKeys[k]];

            // if pair exists in at least one bucket
            // it is a pair that needs further collision testing so push it
            if (pair[2] > 0) {
                pairs.push(pair);
            } else {
                delete gridPairs[pairKeys[k]];
            }
        }

        return pairs;
    };
    
})();


/***/ }),
/* 24 */
/***/ (function(module, exports, __nested_webpack_require_275224__) {

/**
* The `Matter.MouseConstraint` module contains methods for creating mouse constraints.
* Mouse constraints are used for allowing user interaction, providing the ability to move bodies via the mouse or touch.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class MouseConstraint
*/

var MouseConstraint = {};

module.exports = MouseConstraint;

var Vertices = __nested_webpack_require_275224__(3);
var Sleeping = __nested_webpack_require_275224__(7);
var Mouse = __nested_webpack_require_275224__(14);
var Events = __nested_webpack_require_275224__(5);
var Detector = __nested_webpack_require_275224__(13);
var Constraint = __nested_webpack_require_275224__(10);
var Composite = __nested_webpack_require_275224__(6);
var Common = __nested_webpack_require_275224__(0);
var Bounds = __nested_webpack_require_275224__(1);

(function() {

    /**
     * Creates a new mouse constraint.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {engine} engine
     * @param {} options
     * @return {MouseConstraint} A new MouseConstraint
     */
    MouseConstraint.create = function(engine, options) {
        var mouse = (engine ? engine.mouse : null) || (options ? options.mouse : null);

        if (!mouse) {
            if (engine && engine.render && engine.render.canvas) {
                mouse = Mouse.create(engine.render.canvas);
            } else if (options && options.element) {
                mouse = Mouse.create(options.element);
            } else {
                mouse = Mouse.create();
                Common.warn('MouseConstraint.create: options.mouse was undefined, options.element was undefined, may not function as expected');
            }
        }

        var constraint = Constraint.create({ 
            label: 'Mouse Constraint',
            pointA: mouse.position,
            pointB: { x: 0, y: 0 },
            length: 0.01, 
            stiffness: 0.1,
            angularStiffness: 1,
            render: {
                strokeStyle: '#90EE90',
                lineWidth: 3
            }
        });

        var defaults = {
            type: 'mouseConstraint',
            mouse: mouse,
            element: null,
            body: null,
            constraint: constraint,
            collisionFilter: {
                category: 0x0001,
                mask: 0xFFFFFFFF,
                group: 0
            }
        };

        var mouseConstraint = Common.extend(defaults, options);

        Events.on(engine, 'beforeUpdate', function() {
            var allBodies = Composite.allBodies(engine.world);
            MouseConstraint.update(mouseConstraint, allBodies);
            MouseConstraint._triggerEvents(mouseConstraint);
        });

        return mouseConstraint;
    };

    /**
     * Updates the given mouse constraint.
     * @private
     * @method update
     * @param {MouseConstraint} mouseConstraint
     * @param {body[]} bodies
     */
    MouseConstraint.update = function(mouseConstraint, bodies) {
        var mouse = mouseConstraint.mouse,
            constraint = mouseConstraint.constraint,
            body = mouseConstraint.body;

        if (mouse.button === 0) {
            if (!constraint.bodyB) {
                for (var i = 0; i < bodies.length; i++) {
                    body = bodies[i];
                    if (Bounds.contains(body.bounds, mouse.position) 
                            && Detector.canCollide(body.collisionFilter, mouseConstraint.collisionFilter)) {
                        for (var j = body.parts.length > 1 ? 1 : 0; j < body.parts.length; j++) {
                            var part = body.parts[j];
                            if (Vertices.contains(part.vertices, mouse.position)) {
                                constraint.pointA = mouse.position;
                                constraint.bodyB = mouseConstraint.body = body;
                                constraint.pointB = { x: mouse.position.x - body.position.x, y: mouse.position.y - body.position.y };
                                constraint.angleB = body.angle;

                                Sleeping.set(body, false);
                                Events.trigger(mouseConstraint, 'startdrag', { mouse: mouse, body: body });

                                break;
                            }
                        }
                    }
                }
            } else {
                Sleeping.set(constraint.bodyB, false);
                constraint.pointA = mouse.position;
            }
        } else {
            constraint.bodyB = mouseConstraint.body = null;
            constraint.pointB = null;

            if (body)
                Events.trigger(mouseConstraint, 'enddrag', { mouse: mouse, body: body });
        }
    };

    /**
     * Triggers mouse constraint events.
     * @method _triggerEvents
     * @private
     * @param {mouse} mouseConstraint
     */
    MouseConstraint._triggerEvents = function(mouseConstraint) {
        var mouse = mouseConstraint.mouse,
            mouseEvents = mouse.sourceEvents;

        if (mouseEvents.mousemove)
            Events.trigger(mouseConstraint, 'mousemove', { mouse: mouse });

        if (mouseEvents.mousedown)
            Events.trigger(mouseConstraint, 'mousedown', { mouse: mouse });

        if (mouseEvents.mouseup)
            Events.trigger(mouseConstraint, 'mouseup', { mouse: mouse });

        // reset the mouse state ready for the next step
        Mouse.clearSourceEvents(mouse);
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired when the mouse has moved (or a touch moves) during the last step
    *
    * @event mousemove
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is down (or a touch has started) during the last step
    *
    * @event mousedown
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the mouse is up (or a touch has ended) during the last step
    *
    * @event mouseup
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user starts dragging a body
    *
    * @event startdrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired when the user ends dragging a body
    *
    * @event enddrag
    * @param {} event An event object
    * @param {mouse} event.mouse The engine's mouse instance
    * @param {body} event.body The body that has stopped being dragged
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A `String` denoting the type of object.
     *
     * @property type
     * @type string
     * @default "constraint"
     * @readOnly
     */

    /**
     * The `Mouse` instance in use. If not supplied in `MouseConstraint.create`, one will be created.
     *
     * @property mouse
     * @type mouse
     * @default mouse
     */

    /**
     * The `Body` that is currently being moved by the user, or `null` if no body.
     *
     * @property body
     * @type body
     * @default null
     */

    /**
     * The `Constraint` object that is used to move the body during interaction.
     *
     * @property constraint
     * @type constraint
     */

    /**
     * An `Object` that specifies the collision filter properties.
     * The collision filter allows the user to define which types of body this mouse constraint can interact with.
     * See `body.collisionFilter` for more information.
     *
     * @property collisionFilter
     * @type object
     */

})();


/***/ }),
/* 25 */
/***/ (function(module, exports, __nested_webpack_require_283719__) {

/**
* The `Matter.Query` module contains methods for performing collision queries.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Query
*/

var Query = {};

module.exports = Query;

var Vector = __nested_webpack_require_283719__(2);
var Collision = __nested_webpack_require_283719__(8);
var Bounds = __nested_webpack_require_283719__(1);
var Bodies = __nested_webpack_require_283719__(12);
var Vertices = __nested_webpack_require_283719__(3);

(function() {

    /**
     * Returns a list of collisions between `body` and `bodies`.
     * @method collides
     * @param {body} body
     * @param {body[]} bodies
     * @return {collision[]} Collisions
     */
    Query.collides = function(body, bodies) {
        var collisions = [],
            bodiesLength = bodies.length,
            bounds = body.bounds,
            collides = Collision.collides,
            overlaps = Bounds.overlaps;

        for (var i = 0; i < bodiesLength; i++) {
            var bodyA = bodies[i],
                partsALength = bodyA.parts.length,
                partsAStart = partsALength === 1 ? 0 : 1;
            
            if (overlaps(bodyA.bounds, bounds)) {
                for (var j = partsAStart; j < partsALength; j++) {
                    var part = bodyA.parts[j];

                    if (overlaps(part.bounds, bounds)) {
                        var collision = collides(part, body);

                        if (collision) {
                            collisions.push(collision);
                            break;
                        }
                    }
                }
            }
        }

        return collisions;
    };

    /**
     * Casts a ray segment against a set of bodies and returns all collisions, ray width is optional. Intersection points are not provided.
     * @method ray
     * @param {body[]} bodies
     * @param {vector} startPoint
     * @param {vector} endPoint
     * @param {number} [rayWidth]
     * @return {collision[]} Collisions
     */
    Query.ray = function(bodies, startPoint, endPoint, rayWidth) {
        rayWidth = rayWidth || 1e-100;

        var rayAngle = Vector.angle(startPoint, endPoint),
            rayLength = Vector.magnitude(Vector.sub(startPoint, endPoint)),
            rayX = (endPoint.x + startPoint.x) * 0.5,
            rayY = (endPoint.y + startPoint.y) * 0.5,
            ray = Bodies.rectangle(rayX, rayY, rayLength, rayWidth, { angle: rayAngle }),
            collisions = Query.collides(ray, bodies);

        for (var i = 0; i < collisions.length; i += 1) {
            var collision = collisions[i];
            collision.body = collision.bodyB = collision.bodyA;            
        }

        return collisions;
    };

    /**
     * Returns all bodies whose bounds are inside (or outside if set) the given set of bounds, from the given set of bodies.
     * @method region
     * @param {body[]} bodies
     * @param {bounds} bounds
     * @param {bool} [outside=false]
     * @return {body[]} The bodies matching the query
     */
    Query.region = function(bodies, bounds, outside) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                overlaps = Bounds.overlaps(body.bounds, bounds);
            if ((overlaps && !outside) || (!overlaps && outside))
                result.push(body);
        }

        return result;
    };

    /**
     * Returns all bodies whose vertices contain the given point, from the given set of bodies.
     * @method point
     * @param {body[]} bodies
     * @param {vector} point
     * @return {body[]} The bodies matching the query
     */
    Query.point = function(bodies, point) {
        var result = [];

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];
            
            if (Bounds.contains(body.bounds, point)) {
                for (var j = body.parts.length === 1 ? 0 : 1; j < body.parts.length; j++) {
                    var part = body.parts[j];

                    if (Bounds.contains(part.bounds, point)
                        && Vertices.contains(part.vertices, point)) {
                        result.push(body);
                        break;
                    }
                }
            }
        }

        return result;
    };

})();


/***/ }),
/* 26 */
/***/ (function(module, exports, __nested_webpack_require_288094__) {

/**
* The `Matter.Render` module is a lightweight, optional utility which provides a simple canvas based renderer for visualising instances of `Matter.Engine`.
* It is intended for development and debugging purposes, but may also be suitable for simple games.
* It includes a number of drawing options including wireframe, vector with support for sprites and viewports.
*
* @class Render
*/

var Render = {};

module.exports = Render;

var Body = __nested_webpack_require_288094__(4);
var Common = __nested_webpack_require_288094__(0);
var Composite = __nested_webpack_require_288094__(6);
var Bounds = __nested_webpack_require_288094__(1);
var Events = __nested_webpack_require_288094__(5);
var Vector = __nested_webpack_require_288094__(2);
var Mouse = __nested_webpack_require_288094__(14);

(function() {

    var _requestAnimationFrame,
        _cancelAnimationFrame;

    if (typeof window !== 'undefined') {
        _requestAnimationFrame = window.requestAnimationFrame || window.webkitRequestAnimationFrame
                                      || window.mozRequestAnimationFrame || window.msRequestAnimationFrame
                                      || function(callback){ window.setTimeout(function() { callback(Common.now()); }, 1000 / 60); };

        _cancelAnimationFrame = window.cancelAnimationFrame || window.mozCancelAnimationFrame
                                      || window.webkitCancelAnimationFrame || window.msCancelAnimationFrame;
    }

    Render._goodFps = 30;
    Render._goodDelta = 1000 / 60;

    /**
     * Creates a new renderer. The options parameter is an object that specifies any properties you wish to override the defaults.
     * All properties have default values, and many are pre-calculated automatically based on other properties.
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {object} [options]
     * @return {render} A new renderer
     */
    Render.create = function(options) {
        var defaults = {
            engine: null,
            element: null,
            canvas: null,
            mouse: null,
            frameRequestId: null,
            timing: {
                historySize: 60,
                delta: 0,
                deltaHistory: [],
                lastTime: 0,
                lastTimestamp: 0,
                lastElapsed: 0,
                timestampElapsed: 0,
                timestampElapsedHistory: [],
                engineDeltaHistory: [],
                engineElapsedHistory: [],
                engineUpdatesHistory: [],
                elapsedHistory: []
            },
            options: {
                width: 800,
                height: 600,
                pixelRatio: 1,
                background: '#14151f',
                wireframeBackground: '#14151f',
                wireframeStrokeStyle: '#bbb',
                hasBounds: !!options.bounds,
                enabled: true,
                wireframes: true,
                showSleeping: true,
                showDebug: false,
                showStats: false,
                showPerformance: false,
                showBounds: false,
                showVelocity: false,
                showCollisions: false,
                showSeparations: false,
                showAxes: false,
                showPositions: false,
                showAngleIndicator: false,
                showIds: false,
                showVertexNumbers: false,
                showConvexHulls: false,
                showInternalEdges: false,
                showMousePosition: false
            }
        };

        var render = Common.extend(defaults, options);

        if (render.canvas) {
            render.canvas.width = render.options.width || render.canvas.width;
            render.canvas.height = render.options.height || render.canvas.height;
        }

        render.mouse = options.mouse;
        render.engine = options.engine;
        render.canvas = render.canvas || _createCanvas(render.options.width, render.options.height);
        render.context = render.canvas.getContext('2d');
        render.textures = {};

        render.bounds = render.bounds || {
            min: {
                x: 0,
                y: 0
            },
            max: {
                x: render.canvas.width,
                y: render.canvas.height
            }
        };

        // for temporary back compatibility only
        render.controller = Render;
        render.options.showBroadphase = false;

        if (render.options.pixelRatio !== 1) {
            Render.setPixelRatio(render, render.options.pixelRatio);
        }

        if (Common.isElement(render.element)) {
            render.element.appendChild(render.canvas);
        }

        return render;
    };

    /**
     * Continuously updates the render canvas on the `requestAnimationFrame` event.
     * @method run
     * @param {render} render
     */
    Render.run = function(render) {
        (function loop(time){
            render.frameRequestId = _requestAnimationFrame(loop);
            
            _updateTiming(render, time);

            Render.world(render, time);

            render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);

            if (render.options.showStats || render.options.showDebug) {
                Render.stats(render, render.context, time);
            }

            if (render.options.showPerformance || render.options.showDebug) {
                Render.performance(render, render.context, time);
            }

            render.context.setTransform(1, 0, 0, 1, 0, 0);
        })();
    };

    /**
     * Ends execution of `Render.run` on the given `render`, by canceling the animation frame request event loop.
     * @method stop
     * @param {render} render
     */
    Render.stop = function(render) {
        _cancelAnimationFrame(render.frameRequestId);
    };

    /**
     * Sets the pixel ratio of the renderer and updates the canvas.
     * To automatically detect the correct ratio, pass the string `'auto'` for `pixelRatio`.
     * @method setPixelRatio
     * @param {render} render
     * @param {number} pixelRatio
     */
    Render.setPixelRatio = function(render, pixelRatio) {
        var options = render.options,
            canvas = render.canvas;

        if (pixelRatio === 'auto') {
            pixelRatio = _getPixelRatio(canvas);
        }

        options.pixelRatio = pixelRatio;
        canvas.setAttribute('data-pixel-ratio', pixelRatio);
        canvas.width = options.width * pixelRatio;
        canvas.height = options.height * pixelRatio;
        canvas.style.width = options.width + 'px';
        canvas.style.height = options.height + 'px';
    };

    /**
     * Sets the render `width` and `height`.
     * 
     * Updates the canvas accounting for `render.options.pixelRatio`.  
     * 
     * Updates the bottom right render bound `render.bounds.max` relative to the provided `width` and `height`.
     * The top left render bound `render.bounds.min` isn't changed.
     * 
     * Follow this call with `Render.lookAt` if you need to change the render bounds.
     * 
     * See also `Render.setPixelRatio`.
     * @method setSize
     * @param {render} render
     * @param {number} width The width (in CSS pixels)
     * @param {number} height The height (in CSS pixels)
     */
    Render.setSize = function(render, width, height) {
        render.options.width = width;
        render.options.height = height;
        render.bounds.max.x = render.bounds.min.x + width;
        render.bounds.max.y = render.bounds.min.y + height;

        if (render.options.pixelRatio !== 1) {
            Render.setPixelRatio(render, render.options.pixelRatio);
        } else {
            render.canvas.width = width;
            render.canvas.height = height;
        }
    };

    /**
     * Positions and sizes the viewport around the given object bounds.
     * Objects must have at least one of the following properties:
     * - `object.bounds`
     * - `object.position`
     * - `object.min` and `object.max`
     * - `object.x` and `object.y`
     * @method lookAt
     * @param {render} render
     * @param {object[]} objects
     * @param {vector} [padding]
     * @param {bool} [center=true]
     */
    Render.lookAt = function(render, objects, padding, center) {
        center = typeof center !== 'undefined' ? center : true;
        objects = Common.isArray(objects) ? objects : [objects];
        padding = padding || {
            x: 0,
            y: 0
        };

        // find bounds of all objects
        var bounds = {
            min: { x: Infinity, y: Infinity },
            max: { x: -Infinity, y: -Infinity }
        };

        for (var i = 0; i < objects.length; i += 1) {
            var object = objects[i],
                min = object.bounds ? object.bounds.min : (object.min || object.position || object),
                max = object.bounds ? object.bounds.max : (object.max || object.position || object);

            if (min && max) {
                if (min.x < bounds.min.x)
                    bounds.min.x = min.x;

                if (max.x > bounds.max.x)
                    bounds.max.x = max.x;

                if (min.y < bounds.min.y)
                    bounds.min.y = min.y;

                if (max.y > bounds.max.y)
                    bounds.max.y = max.y;
            }
        }

        // find ratios
        var width = (bounds.max.x - bounds.min.x) + 2 * padding.x,
            height = (bounds.max.y - bounds.min.y) + 2 * padding.y,
            viewHeight = render.canvas.height,
            viewWidth = render.canvas.width,
            outerRatio = viewWidth / viewHeight,
            innerRatio = width / height,
            scaleX = 1,
            scaleY = 1;

        // find scale factor
        if (innerRatio > outerRatio) {
            scaleY = innerRatio / outerRatio;
        } else {
            scaleX = outerRatio / innerRatio;
        }

        // enable bounds
        render.options.hasBounds = true;

        // position and size
        render.bounds.min.x = bounds.min.x;
        render.bounds.max.x = bounds.min.x + width * scaleX;
        render.bounds.min.y = bounds.min.y;
        render.bounds.max.y = bounds.min.y + height * scaleY;

        // center
        if (center) {
            render.bounds.min.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.max.x += width * 0.5 - (width * scaleX) * 0.5;
            render.bounds.min.y += height * 0.5 - (height * scaleY) * 0.5;
            render.bounds.max.y += height * 0.5 - (height * scaleY) * 0.5;
        }

        // padding
        render.bounds.min.x -= padding.x;
        render.bounds.max.x -= padding.x;
        render.bounds.min.y -= padding.y;
        render.bounds.max.y -= padding.y;

        // update mouse
        if (render.mouse) {
            Mouse.setScale(render.mouse, {
                x: (render.bounds.max.x - render.bounds.min.x) / render.canvas.width,
                y: (render.bounds.max.y - render.bounds.min.y) / render.canvas.height
            });

            Mouse.setOffset(render.mouse, render.bounds.min);
        }
    };

    /**
     * Applies viewport transforms based on `render.bounds` to a render context.
     * @method startViewTransform
     * @param {render} render
     */
    Render.startViewTransform = function(render) {
        var boundsWidth = render.bounds.max.x - render.bounds.min.x,
            boundsHeight = render.bounds.max.y - render.bounds.min.y,
            boundsScaleX = boundsWidth / render.options.width,
            boundsScaleY = boundsHeight / render.options.height;

        render.context.setTransform(
            render.options.pixelRatio / boundsScaleX, 0, 0, 
            render.options.pixelRatio / boundsScaleY, 0, 0
        );
        
        render.context.translate(-render.bounds.min.x, -render.bounds.min.y);
    };

    /**
     * Resets all transforms on the render context.
     * @method endViewTransform
     * @param {render} render
     */
    Render.endViewTransform = function(render) {
        render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
    };

    /**
     * Renders the given `engine`'s `Matter.World` object.
     * This is the entry point for all rendering and should be called every time the scene changes.
     * @method world
     * @param {render} render
     */
    Render.world = function(render, time) {
        var startTime = Common.now(),
            engine = render.engine,
            world = engine.world,
            canvas = render.canvas,
            context = render.context,
            options = render.options,
            timing = render.timing;

        var allBodies = Composite.allBodies(world),
            allConstraints = Composite.allConstraints(world),
            background = options.wireframes ? options.wireframeBackground : options.background,
            bodies = [],
            constraints = [],
            i;

        var event = {
            timestamp: engine.timing.timestamp
        };

        Events.trigger(render, 'beforeRender', event);

        // apply background if it has changed
        if (render.currentBackground !== background)
            _applyBackground(render, background);

        // clear the canvas with a transparent fill, to allow the canvas background to show
        context.globalCompositeOperation = 'source-in';
        context.fillStyle = "transparent";
        context.fillRect(0, 0, canvas.width, canvas.height);
        context.globalCompositeOperation = 'source-over';

        // handle bounds
        if (options.hasBounds) {
            // filter out bodies that are not in view
            for (i = 0; i < allBodies.length; i++) {
                var body = allBodies[i];
                if (Bounds.overlaps(body.bounds, render.bounds))
                    bodies.push(body);
            }

            // filter out constraints that are not in view
            for (i = 0; i < allConstraints.length; i++) {
                var constraint = allConstraints[i],
                    bodyA = constraint.bodyA,
                    bodyB = constraint.bodyB,
                    pointAWorld = constraint.pointA,
                    pointBWorld = constraint.pointB;

                if (bodyA) pointAWorld = Vector.add(bodyA.position, constraint.pointA);
                if (bodyB) pointBWorld = Vector.add(bodyB.position, constraint.pointB);

                if (!pointAWorld || !pointBWorld)
                    continue;

                if (Bounds.contains(render.bounds, pointAWorld) || Bounds.contains(render.bounds, pointBWorld))
                    constraints.push(constraint);
            }

            // transform the view
            Render.startViewTransform(render);

            // update mouse
            if (render.mouse) {
                Mouse.setScale(render.mouse, {
                    x: (render.bounds.max.x - render.bounds.min.x) / render.options.width,
                    y: (render.bounds.max.y - render.bounds.min.y) / render.options.height
                });

                Mouse.setOffset(render.mouse, render.bounds.min);
            }
        } else {
            constraints = allConstraints;
            bodies = allBodies;

            if (render.options.pixelRatio !== 1) {
                render.context.setTransform(render.options.pixelRatio, 0, 0, render.options.pixelRatio, 0, 0);
            }
        }

        if (!options.wireframes || (engine.enableSleeping && options.showSleeping)) {
            // fully featured rendering of bodies
            Render.bodies(render, bodies, context);
        } else {
            if (options.showConvexHulls)
                Render.bodyConvexHulls(render, bodies, context);

            // optimised method for wireframes only
            Render.bodyWireframes(render, bodies, context);
        }

        if (options.showBounds)
            Render.bodyBounds(render, bodies, context);

        if (options.showAxes || options.showAngleIndicator)
            Render.bodyAxes(render, bodies, context);

        if (options.showPositions)
            Render.bodyPositions(render, bodies, context);

        if (options.showVelocity)
            Render.bodyVelocity(render, bodies, context);

        if (options.showIds)
            Render.bodyIds(render, bodies, context);

        if (options.showSeparations)
            Render.separations(render, engine.pairs.list, context);

        if (options.showCollisions)
            Render.collisions(render, engine.pairs.list, context);

        if (options.showVertexNumbers)
            Render.vertexNumbers(render, bodies, context);

        if (options.showMousePosition)
            Render.mousePosition(render, render.mouse, context);

        Render.constraints(constraints, context);

        if (options.hasBounds) {
            // revert view transforms
            Render.endViewTransform(render);
        }

        Events.trigger(render, 'afterRender', event);

        // log the time elapsed computing this update
        timing.lastElapsed = Common.now() - startTime;
    };

    /**
     * Renders statistics about the engine and world useful for debugging.
     * @private
     * @method stats
     * @param {render} render
     * @param {RenderingContext} context
     * @param {Number} time
     */
    Render.stats = function(render, context, time) {
        var engine = render.engine,
            world = engine.world,
            bodies = Composite.allBodies(world),
            parts = 0,
            width = 55,
            height = 44,
            x = 0,
            y = 0;
        
        // count parts
        for (var i = 0; i < bodies.length; i += 1) {
            parts += bodies[i].parts.length;
        }

        // sections
        var sections = {
            'Part': parts,
            'Body': bodies.length,
            'Cons': Composite.allConstraints(world).length,
            'Comp': Composite.allComposites(world).length,
            'Pair': engine.pairs.list.length
        };

        // background
        context.fillStyle = '#0e0f19';
        context.fillRect(x, y, width * 5.5, height);

        context.font = '12px Arial';
        context.textBaseline = 'top';
        context.textAlign = 'right';

        // sections
        for (var key in sections) {
            var section = sections[key];
            // label
            context.fillStyle = '#aaa';
            context.fillText(key, x + width, y + 8);

            // value
            context.fillStyle = '#eee';
            context.fillText(section, x + width, y + 26);

            x += width;
        }
    };

    /**
     * Renders engine and render performance information.
     * @private
     * @method performance
     * @param {render} render
     * @param {RenderingContext} context
     */
    Render.performance = function(render, context) {
        var engine = render.engine,
            timing = render.timing,
            deltaHistory = timing.deltaHistory,
            elapsedHistory = timing.elapsedHistory,
            timestampElapsedHistory = timing.timestampElapsedHistory,
            engineDeltaHistory = timing.engineDeltaHistory,
            engineUpdatesHistory = timing.engineUpdatesHistory,
            engineElapsedHistory = timing.engineElapsedHistory,
            lastEngineUpdatesPerFrame = engine.timing.lastUpdatesPerFrame,
            lastEngineDelta = engine.timing.lastDelta;
        
        var deltaMean = _mean(deltaHistory),
            elapsedMean = _mean(elapsedHistory),
            engineDeltaMean = _mean(engineDeltaHistory),
            engineUpdatesMean = _mean(engineUpdatesHistory),
            engineElapsedMean = _mean(engineElapsedHistory),
            timestampElapsedMean = _mean(timestampElapsedHistory),
            rateMean = (timestampElapsedMean / deltaMean) || 0,
            neededUpdatesPerFrame = Math.round(deltaMean / lastEngineDelta),
            fps = (1000 / deltaMean) || 0;

        var graphHeight = 4,
            gap = 12,
            width = 60,
            height = 34,
            x = 10,
            y = 69;

        // background
        context.fillStyle = '#0e0f19';
        context.fillRect(0, 50, gap * 5 + width * 6 + 22, height);

        // show FPS
        Render.status(
            context, x, y, width, graphHeight, deltaHistory.length, 
            Math.round(fps) + ' fps', 
            fps / Render._goodFps,
            function(i) { return (deltaHistory[i] / deltaMean) - 1; }
        );

        // show engine delta
        Render.status(
            context, x + gap + width, y, width, graphHeight, engineDeltaHistory.length,
            lastEngineDelta.toFixed(2) + ' dt', 
            Render._goodDelta / lastEngineDelta,
            function(i) { return (engineDeltaHistory[i] / engineDeltaMean) - 1; }
        );

        // show engine updates per frame
        Render.status(
            context, x + (gap + width) * 2, y, width, graphHeight, engineUpdatesHistory.length,
            lastEngineUpdatesPerFrame + ' upf', 
            Math.pow(Common.clamp((engineUpdatesMean / neededUpdatesPerFrame) || 1, 0, 1), 4),
            function(i) { return (engineUpdatesHistory[i] / engineUpdatesMean) - 1; }
        );

        // show engine update time
        Render.status(
            context, x + (gap + width) * 3, y, width, graphHeight, engineElapsedHistory.length,
            engineElapsedMean.toFixed(2) + ' ut', 
            1 - (lastEngineUpdatesPerFrame * engineElapsedMean / Render._goodFps),
            function(i) { return (engineElapsedHistory[i] / engineElapsedMean) - 1; }
        );

        // show render time
        Render.status(
            context, x + (gap + width) * 4, y, width, graphHeight, elapsedHistory.length,
            elapsedMean.toFixed(2) + ' rt', 
            1 - (elapsedMean / Render._goodFps),
            function(i) { return (elapsedHistory[i] / elapsedMean) - 1; }
        );

        // show effective speed
        Render.status(
            context, x + (gap + width) * 5, y, width, graphHeight, timestampElapsedHistory.length, 
            rateMean.toFixed(2) + ' x', 
            rateMean * rateMean * rateMean,
            function(i) { return (((timestampElapsedHistory[i] / deltaHistory[i]) / rateMean) || 0) - 1; }
        );
    };

    /**
     * Renders a label, indicator and a chart.
     * @private
     * @method status
     * @param {RenderingContext} context
     * @param {number} x
     * @param {number} y
     * @param {number} width
     * @param {number} height
     * @param {number} count
     * @param {string} label
     * @param {string} indicator
     * @param {function} plotY
     */
    Render.status = function(context, x, y, width, height, count, label, indicator, plotY) {
        // background
        context.strokeStyle = '#888';
        context.fillStyle = '#444';
        context.lineWidth = 1;
        context.fillRect(x, y + 7, width, 1);

        // chart
        context.beginPath();
        context.moveTo(x, y + 7 - height * Common.clamp(0.4 * plotY(0), -2, 2));
        for (var i = 0; i < width; i += 1) {
            context.lineTo(x + i, y + 7 - (i < count ? height * Common.clamp(0.4 * plotY(i), -2, 2) : 0));
        }
        context.stroke();

        // indicator
        context.fillStyle = 'hsl(' + Common.clamp(25 + 95 * indicator, 0, 120) + ',100%,60%)';
        context.fillRect(x, y - 7, 4, 4);

        // label
        context.font = '12px Arial';
        context.textBaseline = 'middle';
        context.textAlign = 'right';
        context.fillStyle = '#eee';
        context.fillText(label, x + width, y - 5);
    };

    /**
     * Description
     * @private
     * @method constraints
     * @param {constraint[]} constraints
     * @param {RenderingContext} context
     */
    Render.constraints = function(constraints, context) {
        var c = context;

        for (var i = 0; i < constraints.length; i++) {
            var constraint = constraints[i];

            if (!constraint.render.visible || !constraint.pointA || !constraint.pointB)
                continue;

            var bodyA = constraint.bodyA,
                bodyB = constraint.bodyB,
                start,
                end;

            if (bodyA) {
                start = Vector.add(bodyA.position, constraint.pointA);
            } else {
                start = constraint.pointA;
            }

            if (constraint.render.type === 'pin') {
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.closePath();
            } else {
                if (bodyB) {
                    end = Vector.add(bodyB.position, constraint.pointB);
                } else {
                    end = constraint.pointB;
                }

                c.beginPath();
                c.moveTo(start.x, start.y);

                if (constraint.render.type === 'spring') {
                    var delta = Vector.sub(end, start),
                        normal = Vector.perp(Vector.normalise(delta)),
                        coils = Math.ceil(Common.clamp(constraint.length / 5, 12, 20)),
                        offset;

                    for (var j = 1; j < coils; j += 1) {
                        offset = j % 2 === 0 ? 1 : -1;

                        c.lineTo(
                            start.x + delta.x * (j / coils) + normal.x * offset * 4,
                            start.y + delta.y * (j / coils) + normal.y * offset * 4
                        );
                    }
                }

                c.lineTo(end.x, end.y);
            }

            if (constraint.render.lineWidth) {
                c.lineWidth = constraint.render.lineWidth;
                c.strokeStyle = constraint.render.strokeStyle;
                c.stroke();
            }

            if (constraint.render.anchors) {
                c.fillStyle = constraint.render.strokeStyle;
                c.beginPath();
                c.arc(start.x, start.y, 3, 0, 2 * Math.PI);
                c.arc(end.x, end.y, 3, 0, 2 * Math.PI);
                c.closePath();
                c.fill();
            }
        }
    };

    /**
     * Description
     * @private
     * @method bodies
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodies = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            showInternalEdges = options.showInternalEdges || !options.wireframes,
            body,
            part,
            i,
            k;

        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                if (!part.render.visible)
                    continue;

                if (options.showSleeping && body.isSleeping) {
                    c.globalAlpha = 0.5 * part.render.opacity;
                } else if (part.render.opacity !== 1) {
                    c.globalAlpha = part.render.opacity;
                }

                if (part.render.sprite && part.render.sprite.texture && !options.wireframes) {
                    // part sprite
                    var sprite = part.render.sprite,
                        texture = _getTexture(render, sprite.texture);

                    c.translate(part.position.x, part.position.y);
                    c.rotate(part.angle);

                    c.drawImage(
                        texture,
                        texture.width * -sprite.xOffset * sprite.xScale,
                        texture.height * -sprite.yOffset * sprite.yScale,
                        texture.width * sprite.xScale,
                        texture.height * sprite.yScale
                    );

                    // revert translation, hopefully faster than save / restore
                    c.rotate(-part.angle);
                    c.translate(-part.position.x, -part.position.y);
                } else {
                    // part polygon
                    if (part.circleRadius) {
                        c.beginPath();
                        c.arc(part.position.x, part.position.y, part.circleRadius, 0, 2 * Math.PI);
                    } else {
                        c.beginPath();
                        c.moveTo(part.vertices[0].x, part.vertices[0].y);

                        for (var j = 1; j < part.vertices.length; j++) {
                            if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                                c.lineTo(part.vertices[j].x, part.vertices[j].y);
                            } else {
                                c.moveTo(part.vertices[j].x, part.vertices[j].y);
                            }

                            if (part.vertices[j].isInternal && !showInternalEdges) {
                                c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                            }
                        }

                        c.lineTo(part.vertices[0].x, part.vertices[0].y);
                        c.closePath();
                    }

                    if (!options.wireframes) {
                        c.fillStyle = part.render.fillStyle;

                        if (part.render.lineWidth) {
                            c.lineWidth = part.render.lineWidth;
                            c.strokeStyle = part.render.strokeStyle;
                            c.stroke();
                        }

                        c.fill();
                    } else {
                        c.lineWidth = 1;
                        c.strokeStyle = render.options.wireframeStrokeStyle;
                        c.stroke();
                    }
                }

                c.globalAlpha = 1;
            }
        }
    };

    /**
     * Optimised method for drawing body wireframes in one pass
     * @private
     * @method bodyWireframes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyWireframes = function(render, bodies, context) {
        var c = context,
            showInternalEdges = render.options.showInternalEdges,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render all bodies
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = body.parts.length > 1 ? 1 : 0; k < body.parts.length; k++) {
                part = body.parts[k];

                c.moveTo(part.vertices[0].x, part.vertices[0].y);

                for (j = 1; j < part.vertices.length; j++) {
                    if (!part.vertices[j - 1].isInternal || showInternalEdges) {
                        c.lineTo(part.vertices[j].x, part.vertices[j].y);
                    } else {
                        c.moveTo(part.vertices[j].x, part.vertices[j].y);
                    }

                    if (part.vertices[j].isInternal && !showInternalEdges) {
                        c.moveTo(part.vertices[(j + 1) % part.vertices.length].x, part.vertices[(j + 1) % part.vertices.length].y);
                    }
                }

                c.lineTo(part.vertices[0].x, part.vertices[0].y);
            }
        }

        c.lineWidth = 1;
        c.strokeStyle = render.options.wireframeStrokeStyle;
        c.stroke();
    };

    /**
     * Optimised method for drawing body convex hull wireframes in one pass
     * @private
     * @method bodyConvexHulls
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyConvexHulls = function(render, bodies, context) {
        var c = context,
            body,
            part,
            i,
            j,
            k;

        c.beginPath();

        // render convex hulls
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible || body.parts.length === 1)
                continue;

            c.moveTo(body.vertices[0].x, body.vertices[0].y);

            for (j = 1; j < body.vertices.length; j++) {
                c.lineTo(body.vertices[j].x, body.vertices[j].y);
            }

            c.lineTo(body.vertices[0].x, body.vertices[0].y);
        }

        c.lineWidth = 1;
        c.strokeStyle = 'rgba(255,255,255,0.2)';
        c.stroke();
    };

    /**
     * Renders body vertex numbers.
     * @private
     * @method vertexNumbers
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.vertexNumbers = function(render, bodies, context) {
        var c = context,
            i,
            j,
            k;

        for (i = 0; i < bodies.length; i++) {
            var parts = bodies[i].parts;
            for (k = parts.length > 1 ? 1 : 0; k < parts.length; k++) {
                var part = parts[k];
                for (j = 0; j < part.vertices.length; j++) {
                    c.fillStyle = 'rgba(255,255,255,0.2)';
                    c.fillText(i + '_' + j, part.position.x + (part.vertices[j].x - part.position.x) * 0.8, part.position.y + (part.vertices[j].y - part.position.y) * 0.8);
                }
            }
        }
    };

    /**
     * Renders mouse position.
     * @private
     * @method mousePosition
     * @param {render} render
     * @param {mouse} mouse
     * @param {RenderingContext} context
     */
    Render.mousePosition = function(render, mouse, context) {
        var c = context;
        c.fillStyle = 'rgba(255,255,255,0.8)';
        c.fillText(mouse.position.x + '  ' + mouse.position.y, mouse.position.x + 5, mouse.position.y - 5);
    };

    /**
     * Draws body bounds
     * @private
     * @method bodyBounds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyBounds = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (body.render.visible) {
                var parts = bodies[i].parts;
                for (var j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    var part = parts[j];
                    c.rect(part.bounds.min.x, part.bounds.min.y, part.bounds.max.x - part.bounds.min.x, part.bounds.max.y - part.bounds.min.y);
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,255,255,0.08)';
        } else {
            c.strokeStyle = 'rgba(0,0,0,0.1)';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Draws body angle indicators and axes
     * @private
     * @method bodyAxes
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyAxes = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            part,
            i,
            j,
            k;

        c.beginPath();

        for (i = 0; i < bodies.length; i++) {
            var body = bodies[i],
                parts = body.parts;

            if (!body.render.visible)
                continue;

            if (options.showAxes) {
                // render all axes
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        var axis = part.axes[k];
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo(part.position.x + axis.x * 20, part.position.y + axis.y * 20);
                    }
                }
            } else {
                for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                    part = parts[j];
                    for (k = 0; k < part.axes.length; k++) {
                        // render a single axis indicator
                        c.moveTo(part.position.x, part.position.y);
                        c.lineTo((part.vertices[0].x + part.vertices[part.vertices.length-1].x) / 2,
                            (part.vertices[0].y + part.vertices[part.vertices.length-1].y) / 2);
                    }
                }
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'indianred';
            c.lineWidth = 1;
        } else {
            c.strokeStyle = 'rgba(255, 255, 255, 0.4)';
            c.globalCompositeOperation = 'overlay';
            c.lineWidth = 2;
        }

        c.stroke();
        c.globalCompositeOperation = 'source-over';
    };

    /**
     * Draws body positions
     * @private
     * @method bodyPositions
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyPositions = function(render, bodies, context) {
        var c = context,
            engine = render.engine,
            options = render.options,
            body,
            part,
            i,
            k;

        c.beginPath();

        // render current positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];

            if (!body.render.visible)
                continue;

            // handle compound parts
            for (k = 0; k < body.parts.length; k++) {
                part = body.parts[k];
                c.arc(part.position.x, part.position.y, 3, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'indianred';
        } else {
            c.fillStyle = 'rgba(0,0,0,0.5)';
        }
        c.fill();

        c.beginPath();

        // render previous positions
        for (i = 0; i < bodies.length; i++) {
            body = bodies[i];
            if (body.render.visible) {
                c.arc(body.positionPrev.x, body.positionPrev.y, 2, 0, 2 * Math.PI, false);
                c.closePath();
            }
        }

        c.fillStyle = 'rgba(255,165,0,0.8)';
        c.fill();
    };

    /**
     * Draws body velocity
     * @private
     * @method bodyVelocity
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyVelocity = function(render, bodies, context) {
        var c = context;

        c.beginPath();

        for (var i = 0; i < bodies.length; i++) {
            var body = bodies[i];

            if (!body.render.visible)
                continue;

            var velocity = Body.getVelocity(body);

            c.moveTo(body.position.x, body.position.y);
            c.lineTo(body.position.x + velocity.x, body.position.y + velocity.y);
        }

        c.lineWidth = 3;
        c.strokeStyle = 'cornflowerblue';
        c.stroke();
    };

    /**
     * Draws body ids
     * @private
     * @method bodyIds
     * @param {render} render
     * @param {body[]} bodies
     * @param {RenderingContext} context
     */
    Render.bodyIds = function(render, bodies, context) {
        var c = context,
            i,
            j;

        for (i = 0; i < bodies.length; i++) {
            if (!bodies[i].render.visible)
                continue;

            var parts = bodies[i].parts;
            for (j = parts.length > 1 ? 1 : 0; j < parts.length; j++) {
                var part = parts[j];
                c.font = "12px Arial";
                c.fillStyle = 'rgba(255,255,255,0.5)';
                c.fillText(part.id, part.position.x + 10, part.position.y - 10);
            }
        }
    };

    /**
     * Description
     * @private
     * @method collisions
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.collisions = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render collision positions
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            for (j = 0; j < pair.contactCount; j++) {
                var contact = pair.contacts[j],
                    vertex = contact.vertex;
                c.rect(vertex.x - 1.5, vertex.y - 1.5, 3.5, 3.5);
            }
        }

        if (options.wireframes) {
            c.fillStyle = 'rgba(255,255,255,0.7)';
        } else {
            c.fillStyle = 'orange';
        }
        c.fill();

        c.beginPath();

        // render collision normals
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;

            if (pair.contactCount > 0) {
                var normalPosX = pair.contacts[0].vertex.x,
                    normalPosY = pair.contacts[0].vertex.y;

                if (pair.contactCount === 2) {
                    normalPosX = (pair.contacts[0].vertex.x + pair.contacts[1].vertex.x) / 2;
                    normalPosY = (pair.contacts[0].vertex.y + pair.contacts[1].vertex.y) / 2;
                }

                if (collision.bodyB === collision.supports[0].body || collision.bodyA.isStatic === true) {
                    c.moveTo(normalPosX - collision.normal.x * 8, normalPosY - collision.normal.y * 8);
                } else {
                    c.moveTo(normalPosX + collision.normal.x * 8, normalPosY + collision.normal.y * 8);
                }

                c.lineTo(normalPosX, normalPosY);
            }
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.7)';
        } else {
            c.strokeStyle = 'orange';
        }

        c.lineWidth = 1;
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method separations
     * @param {render} render
     * @param {pair[]} pairs
     * @param {RenderingContext} context
     */
    Render.separations = function(render, pairs, context) {
        var c = context,
            options = render.options,
            pair,
            collision,
            corrected,
            bodyA,
            bodyB,
            i,
            j;

        c.beginPath();

        // render separations
        for (i = 0; i < pairs.length; i++) {
            pair = pairs[i];

            if (!pair.isActive)
                continue;

            collision = pair.collision;
            bodyA = collision.bodyA;
            bodyB = collision.bodyB;

            var k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyB.isStatic) k = 0;

            c.moveTo(bodyB.position.x, bodyB.position.y);
            c.lineTo(bodyB.position.x - collision.penetration.x * k, bodyB.position.y - collision.penetration.y * k);

            k = 1;

            if (!bodyB.isStatic && !bodyA.isStatic) k = 0.5;
            if (bodyA.isStatic) k = 0;

            c.moveTo(bodyA.position.x, bodyA.position.y);
            c.lineTo(bodyA.position.x + collision.penetration.x * k, bodyA.position.y + collision.penetration.y * k);
        }

        if (options.wireframes) {
            c.strokeStyle = 'rgba(255,165,0,0.5)';
        } else {
            c.strokeStyle = 'orange';
        }
        c.stroke();
    };

    /**
     * Description
     * @private
     * @method inspector
     * @param {inspector} inspector
     * @param {RenderingContext} context
     */
    Render.inspector = function(inspector, context) {
        var engine = inspector.engine,
            selected = inspector.selected,
            render = inspector.render,
            options = render.options,
            bounds;

        if (options.hasBounds) {
            var boundsWidth = render.bounds.max.x - render.bounds.min.x,
                boundsHeight = render.bounds.max.y - render.bounds.min.y,
                boundsScaleX = boundsWidth / render.options.width,
                boundsScaleY = boundsHeight / render.options.height;

            context.scale(1 / boundsScaleX, 1 / boundsScaleY);
            context.translate(-render.bounds.min.x, -render.bounds.min.y);
        }

        for (var i = 0; i < selected.length; i++) {
            var item = selected[i].data;

            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.9)';
            context.setLineDash([1,2]);

            switch (item.type) {

            case 'body':

                // render body selections
                bounds = item.bounds;
                context.beginPath();
                context.rect(Math.floor(bounds.min.x - 3), Math.floor(bounds.min.y - 3),
                    Math.floor(bounds.max.x - bounds.min.x + 6), Math.floor(bounds.max.y - bounds.min.y + 6));
                context.closePath();
                context.stroke();

                break;

            case 'constraint':

                // render constraint selections
                var point = item.pointA;
                if (item.bodyA)
                    point = item.pointB;
                context.beginPath();
                context.arc(point.x, point.y, 10, 0, 2 * Math.PI);
                context.closePath();
                context.stroke();

                break;

            }

            context.setLineDash([]);
            context.translate(-0.5, -0.5);
        }

        // render selection region
        if (inspector.selectStart !== null) {
            context.translate(0.5, 0.5);
            context.lineWidth = 1;
            context.strokeStyle = 'rgba(255,165,0,0.6)';
            context.fillStyle = 'rgba(255,165,0,0.1)';
            bounds = inspector.selectBounds;
            context.beginPath();
            context.rect(Math.floor(bounds.min.x), Math.floor(bounds.min.y),
                Math.floor(bounds.max.x - bounds.min.x), Math.floor(bounds.max.y - bounds.min.y));
            context.closePath();
            context.stroke();
            context.fill();
            context.translate(-0.5, -0.5);
        }

        if (options.hasBounds)
            context.setTransform(1, 0, 0, 1, 0, 0);
    };

    /**
     * Updates render timing.
     * @method _updateTiming
     * @private
     * @param {render} render
     * @param {number} time
     */
    var _updateTiming = function(render, time) {
        var engine = render.engine,
            timing = render.timing,
            historySize = timing.historySize,
            timestamp = engine.timing.timestamp;

        timing.delta = time - timing.lastTime || Render._goodDelta;
        timing.lastTime = time;

        timing.timestampElapsed = timestamp - timing.lastTimestamp || 0;
        timing.lastTimestamp = timestamp;

        timing.deltaHistory.unshift(timing.delta);
        timing.deltaHistory.length = Math.min(timing.deltaHistory.length, historySize);

        timing.engineDeltaHistory.unshift(engine.timing.lastDelta);
        timing.engineDeltaHistory.length = Math.min(timing.engineDeltaHistory.length, historySize);

        timing.timestampElapsedHistory.unshift(timing.timestampElapsed);
        timing.timestampElapsedHistory.length = Math.min(timing.timestampElapsedHistory.length, historySize);

        timing.engineUpdatesHistory.unshift(engine.timing.lastUpdatesPerFrame);
        timing.engineUpdatesHistory.length = Math.min(timing.engineUpdatesHistory.length, historySize);

        timing.engineElapsedHistory.unshift(engine.timing.lastElapsed);
        timing.engineElapsedHistory.length = Math.min(timing.engineElapsedHistory.length, historySize);

        timing.elapsedHistory.unshift(timing.lastElapsed);
        timing.elapsedHistory.length = Math.min(timing.elapsedHistory.length, historySize);
    };

    /**
     * Returns the mean value of the given numbers.
     * @method _mean
     * @private
     * @param {Number[]} values
     * @return {Number} the mean of given values
     */
    var _mean = function(values) {
        var result = 0;
        for (var i = 0; i < values.length; i += 1) {
            result += values[i];
        }
        return (result / values.length) || 0;
    };

    /**
     * @method _createCanvas
     * @private
     * @param {} width
     * @param {} height
     * @return canvas
     */
    var _createCanvas = function(width, height) {
        var canvas = document.createElement('canvas');
        canvas.width = width;
        canvas.height = height;
        canvas.oncontextmenu = function() { return false; };
        canvas.onselectstart = function() { return false; };
        return canvas;
    };

    /**
     * Gets the pixel ratio of the canvas.
     * @method _getPixelRatio
     * @private
     * @param {HTMLElement} canvas
     * @return {Number} pixel ratio
     */
    var _getPixelRatio = function(canvas) {
        var context = canvas.getContext('2d'),
            devicePixelRatio = window.devicePixelRatio || 1,
            backingStorePixelRatio = context.webkitBackingStorePixelRatio || context.mozBackingStorePixelRatio
                                      || context.msBackingStorePixelRatio || context.oBackingStorePixelRatio
                                      || context.backingStorePixelRatio || 1;

        return devicePixelRatio / backingStorePixelRatio;
    };

    /**
     * Gets the requested texture (an Image) via its path
     * @method _getTexture
     * @private
     * @param {render} render
     * @param {string} imagePath
     * @return {Image} texture
     */
    var _getTexture = function(render, imagePath) {
        var image = render.textures[imagePath];

        if (image)
            return image;

        image = render.textures[imagePath] = new Image();
        image.src = imagePath;

        return image;
    };

    /**
     * Applies the background to the canvas using CSS.
     * @method applyBackground
     * @private
     * @param {render} render
     * @param {string} background
     */
    var _applyBackground = function(render, background) {
        var cssBackground = background;

        if (/(jpg|gif|png)$/.test(background))
            cssBackground = 'url(' + background + ')';

        render.canvas.style.background = cssBackground;
        render.canvas.style.backgroundSize = "contain";
        render.currentBackground = background;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired before rendering
    *
    * @event beforeRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after rendering
    *
    * @event afterRender
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * A back-reference to the `Matter.Render` module.
     *
     * @deprecated
     * @property controller
     * @type render
     */

    /**
     * A reference to the `Matter.Engine` instance to be used.
     *
     * @property engine
     * @type engine
     */

    /**
     * A reference to the element where the canvas is to be inserted (if `render.canvas` has not been specified)
     *
     * @property element
     * @type HTMLElement
     * @default null
     */

    /**
     * The canvas element to render to. If not specified, one will be created if `render.element` has been specified.
     *
     * @property canvas
     * @type HTMLCanvasElement
     * @default null
     */

    /**
     * A `Bounds` object that specifies the drawing view region.
     * Rendering will be automatically transformed and scaled to fit within the canvas size (`render.options.width` and `render.options.height`).
     * This allows for creating views that can pan or zoom around the scene.
     * You must also set `render.options.hasBounds` to `true` to enable bounded rendering.
     *
     * @property bounds
     * @type bounds
     */

    /**
     * The 2d rendering context from the `render.canvas` element.
     *
     * @property context
     * @type CanvasRenderingContext2D
     */

    /**
     * The sprite texture cache.
     *
     * @property textures
     * @type {}
     */

    /**
     * The mouse to render if `render.options.showMousePosition` is enabled.
     *
     * @property mouse
     * @type mouse
     * @default null
     */

    /**
     * The configuration options of the renderer.
     *
     * @property options
     * @type {}
     */

    /**
     * The target width in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.width
     * @type number
     * @default 800
     */

    /**
     * The target height in pixels of the `render.canvas` to be created.
     * See also the `options.pixelRatio` property to change render quality.
     *
     * @property options.height
     * @type number
     * @default 600
     */

    /**
     * The [pixel ratio](https://developer.mozilla.org/en-US/docs/Web/API/Window/devicePixelRatio) to use when rendering.
     *
     * @property options.pixelRatio
     * @type number
     * @default 1
     */

    /**
     * A CSS background color string to use when `render.options.wireframes` is disabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.background
     * @type string
     * @default '#14151f'
     */

    /**
     * A CSS color string to use for background when `render.options.wireframes` is enabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.wireframeBackground
     * @type string
     * @default '#14151f'
     */

    /**
     * A CSS color string to use for stroke when `render.options.wireframes` is enabled.
     * This may be also set to `'transparent'` or equivalent.
     *
     * @property options.wireframeStrokeStyle
     * @type string
     * @default '#bbb'
     */

    /**
     * A flag that specifies if `render.bounds` should be used when rendering.
     *
     * @property options.hasBounds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable all debug information overlays together.  
     * This includes and has priority over the values of:
     *
     * - `render.options.showStats`
     * - `render.options.showPerformance`
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the engine stats info overlay.  
     * From left to right, the values shown are:
     *
     * - body parts total
     * - body total
     * - constraints total
     * - composites total
     * - collision pairs total
     *
     * @property options.showStats
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable performance charts.  
     * From left to right, the values shown are:
     *
     * - average render frequency (e.g. 60 fps)
     * - exact engine delta time used for last update (e.g. 16.66ms)
     * - average updates per frame (e.g. 1)
     * - average engine execution duration (e.g. 5.00ms)
     * - average render execution duration (e.g. 0.40ms)
     * - average effective play speed (e.g. '1.00x' is 'real-time')
     *
     * Each value is recorded over a fixed sample of past frames (60 frames).
     *
     * A chart shown below each value indicates the variance from the average over the sample.
     * The more stable or fixed the value is the flatter the chart will appear.
     *
     * @property options.showPerformance
     * @type boolean
     * @default false
     */
    
    /**
     * A flag to enable or disable rendering entirely.
     *
     * @property options.enabled
     * @type boolean
     * @default false
     */

    /**
     * A flag to toggle wireframe rendering otherwise solid fill rendering is used.
     *
     * @property options.wireframes
     * @type boolean
     * @default true
     */

    /**
     * A flag to enable or disable sleeping bodies indicators.
     *
     * @property options.showSleeping
     * @type boolean
     * @default true
     */

    /**
     * A flag to enable or disable the debug information overlay.
     *
     * @property options.showDebug
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the collision broadphase debug overlay.
     *
     * @deprecated no longer implemented
     * @property options.showBroadphase
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body bounds debug overlay.
     *
     * @property options.showBounds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body velocity debug overlay.
     *
     * @property options.showVelocity
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body collisions debug overlay.
     *
     * @property options.showCollisions
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the collision resolver separations debug overlay.
     *
     * @property options.showSeparations
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body axes debug overlay.
     *
     * @property options.showAxes
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body positions debug overlay.
     *
     * @property options.showPositions
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body angle debug overlay.
     *
     * @property options.showAngleIndicator
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body and part ids debug overlay.
     *
     * @property options.showIds
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body vertex numbers debug overlay.
     *
     * @property options.showVertexNumbers
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body convex hulls debug overlay.
     *
     * @property options.showConvexHulls
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the body internal edges debug overlay.
     *
     * @property options.showInternalEdges
     * @type boolean
     * @default false
     */

    /**
     * A flag to enable or disable the mouse position debug overlay.
     *
     * @property options.showMousePosition
     * @type boolean
     * @default false
     */

})();


/***/ }),
/* 27 */
/***/ (function(module, exports, __nested_webpack_require_347924__) {

/**
* The `Matter.Runner` module is an optional utility that provides a game loop for running a `Matter.Engine` inside a browser environment.
* A runner will continuously update a `Matter.Engine` whilst synchronising engine updates with the browser frame rate.
* This runner favours a smoother user experience over perfect time keeping.
* This runner is optional and is used for development and debugging but could be useful as a starting point for implementing some games and experiences.
* Alternatively see `Engine.update` to step the engine directly inside your own game loop implementation as may be needed inside other environments.
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Runner
*/

var Runner = {};

module.exports = Runner;

var Events = __nested_webpack_require_347924__(5);
var Engine = __nested_webpack_require_347924__(17);
var Common = __nested_webpack_require_347924__(0);

(function() {

    Runner._maxFrameDelta = 1000 / 15;
    Runner._frameDeltaFallback = 1000 / 60;
    Runner._timeBufferMargin = 1.5;
    Runner._elapsedNextEstimate = 1;
    Runner._smoothingLowerBound = 0.1;
    Runner._smoothingUpperBound = 0.9;

    /**
     * Creates a new Runner. 
     * See the properties section below for detailed information on what you can pass via the `options` object.
     * @method create
     * @param {} options
     */
    Runner.create = function(options) {
        var defaults = {
            delta: 1000 / 60,
            frameDelta: null,
            frameDeltaSmoothing: true,
            frameDeltaSnapping: true,
            frameDeltaHistory: [],
            frameDeltaHistorySize: 100,
            frameRequestId: null,
            timeBuffer: 0,
            timeLastTick: null,
            maxUpdates: null,
            maxFrameTime: 1000 / 30,
            lastUpdatesDeferred: 0,
            enabled: true
        };

        var runner = Common.extend(defaults, options);

        // for temporary back compatibility only
        runner.fps = 0;

        return runner;
    };

    /**
     * Runs a `Matter.Engine` whilst synchronising engine updates with the browser frame rate. 
     * See module and properties descriptions for more information on this runner.
     * Alternatively see `Engine.update` to step the engine directly inside your own game loop implementation.
     * @method run
     * @param {runner} runner
     * @param {engine} [engine]
     * @return {runner} runner
     */
    Runner.run = function(runner, engine) {
        // initial time buffer for the first frame
        runner.timeBuffer = Runner._frameDeltaFallback;

        (function onFrame(time){
            runner.frameRequestId = Runner._onNextFrame(runner, onFrame);

            if (time && runner.enabled) {
                Runner.tick(runner, engine, time);
            }
        })();

        return runner;
    };

    /**
     * Performs a single runner tick as used inside `Runner.run`.
     * See module and properties descriptions for more information on this runner.
     * Alternatively see `Engine.update` to step the engine directly inside your own game loop implementation.
     * @method tick
     * @param {runner} runner
     * @param {engine} engine
     * @param {number} time
     */
    Runner.tick = function(runner, engine, time) {
        var tickStartTime = Common.now(),
            engineDelta = runner.delta,
            updateCount = 0;

        // find frame delta time since last call
        var frameDelta = time - runner.timeLastTick;

        // fallback for unusable frame delta values (e.g. 0, NaN, on first frame or long pauses)
        if (!frameDelta || !runner.timeLastTick || frameDelta > Math.max(Runner._maxFrameDelta, runner.maxFrameTime)) {
            // reuse last accepted frame delta else fallback
            frameDelta = runner.frameDelta || Runner._frameDeltaFallback;
        }

        if (runner.frameDeltaSmoothing) {
            // record frame delta over a number of frames
            runner.frameDeltaHistory.push(frameDelta);
            runner.frameDeltaHistory = runner.frameDeltaHistory.slice(-runner.frameDeltaHistorySize);

            // sort frame delta history
            var deltaHistorySorted = runner.frameDeltaHistory.slice(0).sort();

            // sample a central window to limit outliers
            var deltaHistoryWindow = runner.frameDeltaHistory.slice(
                deltaHistorySorted.length * Runner._smoothingLowerBound, 
                deltaHistorySorted.length * Runner._smoothingUpperBound
            );

            // take the mean of the central window
            var frameDeltaSmoothed = _mean(deltaHistoryWindow);
            frameDelta = frameDeltaSmoothed || frameDelta;
        }

        if (runner.frameDeltaSnapping) {
            // snap frame delta to the nearest 1 Hz
            frameDelta = 1000 / Math.round(1000 / frameDelta);
        }

        // update runner values for next call
        runner.frameDelta = frameDelta;
        runner.timeLastTick = time;

        // accumulate elapsed time
        runner.timeBuffer += runner.frameDelta;

        // limit time buffer size to a single frame of updates
        runner.timeBuffer = Common.clamp(
            runner.timeBuffer, 0, runner.frameDelta + engineDelta * Runner._timeBufferMargin
        );

        // reset count of over budget updates
        runner.lastUpdatesDeferred = 0;

        // get max updates per frame
        var maxUpdates = runner.maxUpdates || Math.ceil(runner.maxFrameTime / engineDelta);

        // create event object
        var event = {
            timestamp: engine.timing.timestamp
        };

        // tick events before update
        Events.trigger(runner, 'beforeTick', event);
        Events.trigger(runner, 'tick', event);

        var updateStartTime = Common.now();

        // simulate time elapsed between calls
        while (engineDelta > 0 && runner.timeBuffer >= engineDelta * Runner._timeBufferMargin) {
            // update the engine
            Events.trigger(runner, 'beforeUpdate', event);
            Engine.update(engine, engineDelta);
            Events.trigger(runner, 'afterUpdate', event);

            // consume time simulated from buffer
            runner.timeBuffer -= engineDelta;
            updateCount += 1;

            // find elapsed time during this tick
            var elapsedTimeTotal = Common.now() - tickStartTime,
                elapsedTimeUpdates = Common.now() - updateStartTime,
                elapsedNextEstimate = elapsedTimeTotal + Runner._elapsedNextEstimate * elapsedTimeUpdates / updateCount;

            // defer updates if over performance budgets for this frame
            if (updateCount >= maxUpdates || elapsedNextEstimate > runner.maxFrameTime) {
                runner.lastUpdatesDeferred = Math.round(Math.max(0, (runner.timeBuffer / engineDelta) - Runner._timeBufferMargin));
                break;
            }
        }

        // track timing metrics
        engine.timing.lastUpdatesPerFrame = updateCount;

        // tick events after update
        Events.trigger(runner, 'afterTick', event);

        // show useful warnings if needed
        if (runner.frameDeltaHistory.length >= 100) {
            if (runner.lastUpdatesDeferred && Math.round(runner.frameDelta / engineDelta) > maxUpdates) {
                Common.warnOnce('Matter.Runner: runner reached runner.maxUpdates, see docs.');
            } else if (runner.lastUpdatesDeferred) {
                Common.warnOnce('Matter.Runner: runner reached runner.maxFrameTime, see docs.');
            }

            if (typeof runner.isFixed !== 'undefined') {
                Common.warnOnce('Matter.Runner: runner.isFixed is now redundant, see docs.');
            }

            if (runner.deltaMin || runner.deltaMax) {
                Common.warnOnce('Matter.Runner: runner.deltaMin and runner.deltaMax were removed, see docs.');
            }

            if (runner.fps !== 0) {
                Common.warnOnce('Matter.Runner: runner.fps was replaced by runner.delta, see docs.');
            }
        }
    };

    /**
     * Ends execution of `Runner.run` on the given `runner` by canceling the frame loop.
     * Alternatively to temporarily pause the runner, see `runner.enabled`.
     * @method stop
     * @param {runner} runner
     */
    Runner.stop = function(runner) {
        Runner._cancelNextFrame(runner);
    };

    /**
     * Schedules the `callback` on this `runner` for the next animation frame.
     * @private
     * @method _onNextFrame
     * @param {runner} runner
     * @param {function} callback
     * @return {number} frameRequestId
     */
    Runner._onNextFrame = function(runner, callback) {
        if (typeof window !== 'undefined' && window.requestAnimationFrame) {
            runner.frameRequestId = window.requestAnimationFrame(callback);
        } else {
            throw new Error('Matter.Runner: missing required global window.requestAnimationFrame.');
        }

        return runner.frameRequestId;
    };

    /**
     * Cancels the last callback scheduled by `Runner._onNextFrame` on this `runner`.
     * @private
     * @method _cancelNextFrame
     * @param {runner} runner
     */
    Runner._cancelNextFrame = function(runner) {
        if (typeof window !== 'undefined' && window.cancelAnimationFrame) {
            window.cancelAnimationFrame(runner.frameRequestId);
        } else {
            throw new Error('Matter.Runner: missing required global window.cancelAnimationFrame.');
        }
    };

    /**
     * Returns the mean of the given numbers.
     * @method _mean
     * @private
     * @param {Number[]} values
     * @return {Number} the mean of given values.
     */
    var _mean = function(values) {
        var result = 0,
            valuesLength = values.length;

        for (var i = 0; i < valuesLength; i += 1) {
            result += values[i];
        }

        return (result / valuesLength) || 0;
    };

    /*
    *
    *  Events Documentation
    *
    */

    /**
    * Fired once at the start of the browser frame, before any engine updates.
    *
    * @event beforeTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired once at the start of the browser frame, after `beforeTick`.
    *
    * @event tick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired once at the end of the browser frame, after `beforeTick`, `tick` and after any engine updates.
    *
    * @event afterTick
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired before each and every engine update in this browser frame (if any). 
    * There may be multiple engine update calls per browser frame (or none) depending on framerate and timestep delta.
    *
    * @event beforeUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /**
    * Fired after each and every engine update in this browser frame (if any). 
    * There may be multiple engine update calls per browser frame (or none) depending on framerate and timestep delta.
    *
    * @event afterUpdate
    * @param {} event An event object
    * @param {number} event.timestamp The engine.timing.timestamp of the event
    * @param {} event.source The source object of the event
    * @param {} event.name The name of the event
    */

    /*
    *
    *  Properties Documentation
    *
    */

    /**
     * The fixed timestep size used for `Engine.update` calls in milliseconds, known as `delta`.
     * 
     * This value is recommended to be `1000 / 60` ms or smaller (i.e. equivalent to at least 60hz).
     * 
     * Smaller `delta` values provide higher quality results at the cost of performance.
     * 
     * You should usually avoid changing `delta` during running, otherwise quality may be affected. 
     * 
     * For smoother frame pacing choose a `delta` that is an even multiple of each display FPS you target, i.e. `1000 / (n * fps)` as this helps distribute an equal number of updates over each display frame.
     * 
     * For example with a 60 Hz `delta` i.e. `1000 / 60` the runner will on average perform one update per frame on displays running 60 FPS and one update every two frames on displays running 120 FPS, etc.
     * 
     * Where as e.g. using a 240 Hz `delta` i.e. `1000 / 240` the runner will on average perform four updates per frame on displays running 60 FPS and two updates per frame on displays running 120 FPS, etc.
     * 
     * Therefore `Runner.run` will call multiple engine updates (or none) as needed to simulate the time elapsed between browser frames. 
     * 
     * In practice the number of updates in any particular frame may be restricted to respect the runner's performance budgets. These are specified by `runner.maxFrameTime` and `runner.maxUpdates`, see those properties for details.
     * 
     * @property delta
     * @type number
     * @default 1000 / 60
     */

    /**
     * A flag that can be toggled to enable or disable tick calls on this runner, therefore pausing engine updates and events while the runner loop remains running.
     *
     * @property enabled
     * @type boolean
     * @default true
     */

    /**
     * The accumulated time elapsed that has yet to be simulated in milliseconds.
     * This value is clamped within certain limits (see `Runner.tick` code).
     *
     * @private
     * @property timeBuffer
     * @type number
     * @default 0
     */

    /**
     * The measured time elapsed between the last two browser frames measured in milliseconds.
     * This is useful e.g. to estimate the current browser FPS using `1000 / runner.frameDelta`.
     *
     * @readonly
     * @property frameDelta
     * @type number
     */

    /**
     * Enables averaging to smooth frame rate measurements and therefore stabilise play rate.
     *
     * @property frameDeltaSmoothing
     * @type boolean
     * @default true
     */

    /**
     * Rounds measured browser frame delta to the nearest 1 Hz.
     * This option can help smooth frame rate measurements and simplify handling hardware timing differences e.g. 59.94Hz and 60Hz displays.
     * For best results you should also round your `runner.delta` equivalent to the nearest 1 Hz.
     *
     * @property frameDeltaSnapping
     * @type boolean
     * @default true
     */

    /**
     * A performance budget that limits execution time allowed for this runner per browser frame in milliseconds.
     * 
     * To calculate the effective browser FPS at which this throttle is applied use `1000 / runner.maxFrameTime`.
     * 
     * This performance budget is intended to help maintain browser interactivity and help improve framerate recovery during temporary high CPU usage.
     * 
     * This budget only covers the measured time elapsed executing the functions called in the scope of the runner tick, including `Engine.update` and its related user event callbacks.
     * 
     * You may also reduce this budget to allow for any significant additional processing you perform on the same thread outside the scope of this runner tick, e.g. rendering time.
     * 
     * See also `runner.maxUpdates`.
     *
     * @property maxFrameTime
     * @type number
     * @default 1000 / 30
     */

    /**
     * An optional limit for maximum engine update count allowed per frame tick in addition to `runner.maxFrameTime`.
     * 
     * Unless you set a value it is automatically chosen based on `runner.delta` and `runner.maxFrameTime`.
     * 
     * See also `runner.maxFrameTime`.
     * 
     * @property maxUpdates
     * @type number
     * @default null
     */

    /**
     * The timestamp of the last call to `Runner.tick` used to measure `frameDelta`.
     *
     * @private
     * @property timeLastTick
     * @type number
     * @default 0
     */

    /**
     * The id of the last call to `Runner._onNextFrame`.
     *
     * @private
     * @property frameRequestId
     * @type number
     * @default null
     */

})();


/***/ }),
/* 28 */
/***/ (function(module, exports, __nested_webpack_require_364722__) {

/**
* This module has now been replaced by `Matter.Collision`.
*
* All usage should be migrated to `Matter.Collision`.
* For back-compatibility purposes this module will remain for a short term and then later removed in a future release.
*
* The `Matter.SAT` module contains methods for detecting collisions using the Separating Axis Theorem.
*
* @class SAT
* @deprecated
*/

var SAT = {};

module.exports = SAT;

var Collision = __nested_webpack_require_364722__(8);
var Common = __nested_webpack_require_364722__(0);
var deprecated = Common.deprecated;

(function() {

    /**
     * Detect collision between two bodies using the Separating Axis Theorem.
     * @deprecated replaced by Collision.collides
     * @method collides
     * @param {body} bodyA
     * @param {body} bodyB
     * @return {collision} collision
     */
    SAT.collides = function(bodyA, bodyB) {
        return Collision.collides(bodyA, bodyB);
    };

    deprecated(SAT, 'collides', 'SAT.collides ➤ replaced by Collision.collides');

})();


/***/ }),
/* 29 */
/***/ (function(module, exports, __nested_webpack_require_365792__) {

/**
* The `Matter.Svg` module contains methods for converting SVG images into an array of vector points.
*
* To use this module you also need the SVGPathSeg polyfill: https://github.com/progers/pathseg
*
* See the included usage [examples](https://github.com/liabru/matter-js/tree/master/examples).
*
* @class Svg
*/

var Svg = {};

module.exports = Svg;

var Bounds = __nested_webpack_require_365792__(1);
var Common = __nested_webpack_require_365792__(0);

(function() {

    /**
     * Converts an SVG path into an array of vector points.
     * If the input path forms a concave shape, you must decompose the result into convex parts before use.
     * See `Bodies.fromVertices` which provides support for this.
     * Note that this function is not guaranteed to support complex paths (such as those with holes).
     * You must load the `pathseg.js` polyfill on newer browsers.
     * @method pathToVertices
     * @param {SVGPathElement} path
     * @param {Number} [sampleLength=15]
     * @return {Vector[]} points
     */
    Svg.pathToVertices = function(path, sampleLength) {
        if (typeof window !== 'undefined' && !('SVGPathSeg' in window)) {
            Common.warn('Svg.pathToVertices: SVGPathSeg not defined, a polyfill is required.');
        }

        // https://github.com/wout/svg.topoly.js/blob/master/svg.topoly.js
        var i, il, total, point, segment, segments, 
            segmentsQueue, lastSegment, 
            lastPoint, segmentIndex, points = [],
            lx, ly, length = 0, x = 0, y = 0;

        sampleLength = sampleLength || 15;

        var addPoint = function(px, py, pathSegType) {
            // all odd-numbered path types are relative except PATHSEG_CLOSEPATH (1)
            var isRelative = pathSegType % 2 === 1 && pathSegType > 1;

            // when the last point doesn't equal the current point add the current point
            if (!lastPoint || px != lastPoint.x || py != lastPoint.y) {
                if (lastPoint && isRelative) {
                    lx = lastPoint.x;
                    ly = lastPoint.y;
                } else {
                    lx = 0;
                    ly = 0;
                }

                var point = {
                    x: lx + px,
                    y: ly + py
                };

                // set last point
                if (isRelative || !lastPoint) {
                    lastPoint = point;
                }

                points.push(point);

                x = lx + px;
                y = ly + py;
            }
        };

        var addSegmentPoint = function(segment) {
            var segType = segment.pathSegTypeAsLetter.toUpperCase();

            // skip path ends
            if (segType === 'Z') 
                return;

            // map segment to x and y
            switch (segType) {

            case 'M':
            case 'L':
            case 'T':
            case 'C':
            case 'S':
            case 'Q':
                x = segment.x;
                y = segment.y;
                break;
            case 'H':
                x = segment.x;
                break;
            case 'V':
                y = segment.y;
                break;
            }

            addPoint(x, y, segment.pathSegType);
        };

        // ensure path is absolute
        Svg._svgPathToAbsolute(path);

        // get total length
        total = path.getTotalLength();

        // queue segments
        segments = [];
        for (i = 0; i < path.pathSegList.numberOfItems; i += 1)
            segments.push(path.pathSegList.getItem(i));

        segmentsQueue = segments.concat();

        // sample through path
        while (length < total) {
            // get segment at position
            segmentIndex = path.getPathSegAtLength(length);
            segment = segments[segmentIndex];

            // new segment
            if (segment != lastSegment) {
                while (segmentsQueue.length && segmentsQueue[0] != segment)
                    addSegmentPoint(segmentsQueue.shift());

                lastSegment = segment;
            }

            // add points in between when curving
            // TODO: adaptive sampling
            switch (segment.pathSegTypeAsLetter.toUpperCase()) {

            case 'C':
            case 'T':
            case 'S':
            case 'Q':
            case 'A':
                point = path.getPointAtLength(length);
                addPoint(point.x, point.y, 0);
                break;

            }

            // increment by sample value
            length += sampleLength;
        }

        // add remaining segments not passed by sampling
        for (i = 0, il = segmentsQueue.length; i < il; ++i)
            addSegmentPoint(segmentsQueue[i]);

        return points;
    };

    Svg._svgPathToAbsolute = function(path) {
        // http://phrogz.net/convert-svg-path-to-all-absolute-commands
        // Copyright (c) Gavin Kistner
        // http://phrogz.net/js/_ReuseLicense.txt
        // Modifications: tidy formatting and naming
        var x0, y0, x1, y1, x2, y2, segs = path.pathSegList,
            x = 0, y = 0, len = segs.numberOfItems;

        for (var i = 0; i < len; ++i) {
            var seg = segs.getItem(i),
                segType = seg.pathSegTypeAsLetter;

            if (/[MLHVCSQTA]/.test(segType)) {
                if ('x' in seg) x = seg.x;
                if ('y' in seg) y = seg.y;
            } else {
                if ('x1' in seg) x1 = x + seg.x1;
                if ('x2' in seg) x2 = x + seg.x2;
                if ('y1' in seg) y1 = y + seg.y1;
                if ('y2' in seg) y2 = y + seg.y2;
                if ('x' in seg) x += seg.x;
                if ('y' in seg) y += seg.y;

                switch (segType) {

                case 'm':
                    segs.replaceItem(path.createSVGPathSegMovetoAbs(x, y), i);
                    break;
                case 'l':
                    segs.replaceItem(path.createSVGPathSegLinetoAbs(x, y), i);
                    break;
                case 'h':
                    segs.replaceItem(path.createSVGPathSegLinetoHorizontalAbs(x), i);
                    break;
                case 'v':
                    segs.replaceItem(path.createSVGPathSegLinetoVerticalAbs(y), i);
                    break;
                case 'c':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicAbs(x, y, x1, y1, x2, y2), i);
                    break;
                case 's':
                    segs.replaceItem(path.createSVGPathSegCurvetoCubicSmoothAbs(x, y, x2, y2), i);
                    break;
                case 'q':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticAbs(x, y, x1, y1), i);
                    break;
                case 't':
                    segs.replaceItem(path.createSVGPathSegCurvetoQuadraticSmoothAbs(x, y), i);
                    break;
                case 'a':
                    segs.replaceItem(path.createSVGPathSegArcAbs(x, y, seg.r1, seg.r2, seg.angle, seg.largeArcFlag, seg.sweepFlag), i);
                    break;
                case 'z':
                case 'Z':
                    x = x0;
                    y = y0;
                    break;

                }
            }

            if (segType == 'M' || segType == 'm') {
                x0 = x;
                y0 = y;
            }
        }
    };

})();

/***/ }),
/* 30 */
/***/ (function(module, exports, __nested_webpack_require_373253__) {

/**
* This module has now been replaced by `Matter.Composite`.
*
* All usage should be migrated to the equivalent functions found on `Matter.Composite`.
* For example `World.add(world, body)` now becomes `Composite.add(world, body)`.
*
* The property `world.gravity` has been moved to `engine.gravity`.
*
* For back-compatibility purposes this module will remain as a direct alias to `Matter.Composite` in the short term during migration.
* Eventually this alias module will be marked as deprecated and then later removed in a future release.
*
* @class World
*/

var World = {};

module.exports = World;

var Composite = __nested_webpack_require_373253__(6);
var Common = __nested_webpack_require_373253__(0);

(function() {

    /**
     * See above, aliases for back compatibility only
     */
    World.create = Composite.create;
    World.add = Composite.add;
    World.remove = Composite.remove;
    World.clear = Composite.clear;
    World.addComposite = Composite.addComposite;
    World.addBody = Composite.addBody;
    World.addConstraint = Composite.addConstraint;

})();


/***/ })
/******/ ]);
});

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLm1hdHRlci1qcy5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksSUFBeUQ7QUFDN0Q7QUFDQSxNQUFNLEVBS3VCO0FBQzdCLENBQUM7QUFDRCxxQ0FBcUM7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQSxtQkFBbUIsK0JBQW1CO0FBQ3RDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEVBQTBFLCtCQUFtQjtBQUM3RjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0JBQW1CO0FBQzdCO0FBQ0E7QUFDQSxVQUFVLCtCQUFtQjtBQUM3QjtBQUNBO0FBQ0EsVUFBVSwrQkFBbUI7QUFDN0IsZUFBZSwrQkFBbUI7QUFDbEMsbURBQW1ELCtCQUErQjtBQUNsRjtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0JBQW1CO0FBQzdCO0FBQ0EsaUVBQWlFLGlCQUFpQjtBQUNsRjtBQUNBLDBEQUEwRCxhQUFhO0FBQ3ZFO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSwrQkFBbUI7QUFDN0IsZ0NBQWdDLCtCQUFtQjtBQUNuRDtBQUNBO0FBQ0E7QUFDQSxXQUFXLCtCQUFtQjtBQUM5QixrREFBa0QsZ0NBQWdDO0FBQ2xGLDBFQUEwRSwrQkFBbUIsNEJBQTRCLG9CQUFvQjtBQUM3STtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsK0JBQW1CO0FBQzdCO0FBQ0Esb0NBQW9DLDRCQUE0QjtBQUNoRSwwQ0FBMEM7QUFDMUMsV0FBVywrQkFBbUI7QUFDOUI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLCtCQUFtQixrQ0FBa0M7QUFDL0Q7QUFDQTtBQUNBLFVBQVUsK0JBQW1CO0FBQzdCO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQiwrQkFBbUIsQ0FBQywrQkFBbUI7QUFDeEQsVUFBVTtBQUNWO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZSxTQUFTO0FBQ3hCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7O0FBRUEsZ0NBQWdDLHNCQUFzQjtBQUN0RDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTtBQUNBLHNCQUFzQjtBQUN0QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlLE1BQU07QUFDckIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQSwrQkFBK0I7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLGlCQUFpQjtBQUM3QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakIsZUFBZSxRQUFRO0FBQ3ZCLGlCQUFpQjtBQUNqQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGtCQUFrQjtBQUNsQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBLHVDQUF1QyxPQUFPO0FBQzlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSx5QkFBeUI7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHlCQUF5QjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxPQUFPO0FBQ3RCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IscUJBQXFCO0FBQzdDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsT0FBTztBQUN0QixlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsaUJBQWlCO0FBQ3pDO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLHNCQUFzQjtBQUM5Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixVQUFVO0FBQ2xDLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isc0JBQXNCO0FBQzlDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsa0RBQWtELE9BQU87QUFDekQ7QUFDQTs7QUFFQSx3QkFBd0Isa0JBQWtCO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxVQUFVO0FBQ3pCLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLFVBQVU7QUFDMUI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQ0FBa0MscUJBQU07QUFDeEMseUJBQXlCLHFCQUFNO0FBQy9CO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLFlBQVk7QUFDL0IsbUJBQW1CO0FBQ25COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsVUFBVTtBQUN6QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixxQkFBcUI7QUFDN0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsNkNBQTZDLFlBQVk7QUFDekQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUI7QUFDckIsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQSx3QkFBd0IsdUJBQXVCO0FBQy9DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixlQUFlLFVBQVU7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsUUFBUTtBQUN2QixlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGtCQUFrQjtBQUN0QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IsdUJBQXVCO0FBQy9DO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBOztBQUVBLHdCQUF3Qix1QkFBdUI7QUFDL0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUs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Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYSxpQ0FBbUI7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxVQUFVO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTs7QUFFQTtBQUNBLGdDQUFnQyxzQkFBc0I7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixlQUFlLFFBQVE7QUFDdkIsaUJBQWlCO0FBQ2pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLDRCQUE0QixrQkFBa0I7QUFDOUM7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxvQ0FBb0Msc0JBQXNCO0FBQzFEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7O0FBRUEsYUFBYSxpQ0FBbUI7QUFDaEMsYUFBYSxpQ0FBbUI7QUFDaEMsYUFBYSxpQ0FBbUI7QUFDaEMsV0FBVyxpQ0FBbUI7O0FBRTlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCO0FBQ2pCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxzQkFBc0I7QUFDdEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QixlQUFlLFNBQVM7QUFDeEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEJBQTRCLGlDQUFpQztBQUM3RDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsY0FBYztBQUM3QixnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7O0FBRUEsaURBQWlELGdCQUFnQjs7QUFFakUsd0JBQXdCLG9CQUFvQjtBQUM1Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLGdEQUFnRCxnQkFBZ0I7O0FBRWhFO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLGNBQWM7QUFDN0IsZUFBZSxTQUFTO0FBQ3hCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQSxvREFBb0QsZ0JBQWdCOztBQUVwRSx3QkFBd0Isb0JBQW9CO0FBQzVDOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBLG1EQUFtRCxnQkFBZ0I7O0FBRW5FO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxXQUFXO0FBQzFCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsV0FBVztBQUMxQixlQUFlLFNBQVM7QUFDeEIsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUEsNEJBQTRCLG1CQUFtQjtBQUMvQztBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsa0NBQWtDO0FBQzlEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxNQUFNO0FBQ3JCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLE1BQU07QUFDckIsZUFBZSxTQUFTO0FBQ3hCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QixpQ0FBaUM7QUFDN0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxRQUFRO0FBQ3ZCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLFlBQVk7QUFDM0IsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsWUFBWTtBQUMzQixlQUFlLFNBQVM7QUFDeEIsZ0JBQWdCLFdBQVc7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0QkFBNEIsaUNBQWlDO0FBQzdEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxTQUFTO0FBQ3hCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7QUFDQSw0QkFBNEIsaUNBQWlDO0FBQzdEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3RUFBd0UsdUJBQXVCO0FBQy9GLFVBQVU7QUFDVjtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQSx3QkFBd0IsaUNBQWlDO0FBQ3pEOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixnQkFBZ0IsY0FBYztBQUM5QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBLHdCQUF3QixpQ0FBaUM7QUFDekQ7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGdCQUFnQixhQUFhO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsd0JBQXdCLGlDQUFpQztBQUN6RDs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFNBQVM7O0FBRVQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxVQUFVO0FBQ3pCLGVBQWUsWUFBWTtBQUMzQixnQkFBZ0IsV0FBVztBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG9CQUFvQjtBQUM1QztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsTUFBTTtBQUNyQjtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxXQUFXO0FBQzFCLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QixlQUFlLE1BQU07QUFDckI7QUFDQTtBQUNBOztBQUVBLHdCQUF3QixtQkFBbUI7QUFDM0M7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhOztBQUViO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFdBQVc7QUFDMUIsaUJBQWlCLFFBQVE7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCO0FBQ2hCLGdCQUFnQjtBQUNoQixnQkFBZ0I7QUFDaEIsZ0JBQWdCO0FBQ2hCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLFdBQVcsaUNBQW1CO0FBQzlCLGFBQWEsaUNBQW1CO0FBQ2hDLGFBQWEsaUNBQW1COztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QixrQkFBa0I7QUFDMUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsU0FBUztBQUN4QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdELE9BQU87QUFDUDtBQUNBLGlDQUFpQyxpQ0FBbUI7O0FBRXBEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxlQUFlLGlDQUFtQjtBQUNsQyxXQUFXLGlDQUFtQjs7QUFFOUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCLGdCQUFnQixXQUFXO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esc0JBQXNCLFlBQVk7QUFDbEMsdUJBQXVCLFlBQVk7QUFDbkMsMkJBQTJCLFlBQVk7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQixlQUFlLE9BQU87QUFDdEIsZ0JBQWdCLGdCQUFnQjtBQUNoQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsVUFBVTtBQUN6QixlQUFlLFVBQVU7QUFDekIsZUFBZSxNQUFNO0FBQ3JCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsb0JBQW9CLGdCQUFnQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esd0JBQXdCLHFCQUFxQjtBQUM3Qzs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0IscUJBQXFCO0FBQzdDOztBQUVBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsTUFBTTtBQUNyQixlQUFlLE1BQU07QUFDckIsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0Isb0JBQW9CO0FBQ3hDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjO0FBQ2Q7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0Esa0JBQWtCO0FBQ2xCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0I7QUFDbEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGtCQUFrQjtBQUNsQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFFQSxjQUFjLGlDQUFtQjs7QUFFakM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsV0FBVztBQUMxQixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLE1BQU07QUFDdEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsV0FBVztBQUMxQixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxNQUFNO0FBQ3JCLGVBQWUsTUFBTTtBQUNyQixlQUFlLFFBQVE7QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVU7QUFDVjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLE1BQU07QUFDckIsZUFBZSxNQUFNO0FBQ3JCLGdCQUFnQixRQUFRO0FBQ3hCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsQ0FBQzs7O0FBR0QsT0FBTztBQUNQO0FBQ0EsaUNBQWlDLGlDQUFtQjs7QUFFcEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGVBQWUsaUNBQW1CO0FBQ2xDLGFBQWEsaUNBQW1CO0FBQ2hDLGVBQWUsaUNBQW1CO0FBQ2xDLGFBQWEsaUNBQW1CO0FBQ2hDLFdBQVcsaUNBQW1CO0FBQzlCLGFBQWEsaUNBQW1COztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixnQkFBZ0IsWUFBWTtBQUM1QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLGtDQUFrQztBQUNsQztBQUNBLGtDQUFrQzs7QUFFbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0Esd0JBQXdCLG1CQUFtQjtBQUMzQztBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxjQUFjO0FBQzdCLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0Isd0JBQXdCO0FBQ2hEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQix3QkFBd0I7QUFDNUM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLFlBQVk7QUFDM0IsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNB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LGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCLGNBQWMsUUFBUTtBQUN0QixjQUFjLFFBQVE7QUFDdEIsY0FBYyxRQUFRO0FBQ3RCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7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QTtBQUNBO0FBQ0EsVUFBVTtBQUNWO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7O0FBRWI7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdCQUF3QixzQkFBc0I7QUFDOUM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsMkJBQTJCO0FBQ25EO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7O0FBRWpCO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxVQUFVO0FBQ1Y7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsa0JBQWtCO0FBQ2pDLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSx3QkFBd0IsbUJBQW1CO0FBQzNDO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxRQUFRO0FBQ3ZCLGVBQWUsa0JBQWtCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCO0FBQzFCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSwwQkFBMEI7QUFDMUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsa0JBQWtCO0FBQ2pDLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7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QkFBZ0I7QUFDaEI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSxDQUFDOzs7QUFHRCxPQUFPO0FBQ1A7QUFDQSxpQ0FBaUMsaUNBQW1COztBQUVwRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGFBQWEsaUNBQW1CO0FBQ2hDLGFBQWEsaUNBQW1CO0FBQ2hDLGFBQWEsaUNBQW1COztBQUVoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxTQUFTOztBQUVUO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFFBQVE7QUFDdkIsZUFBZSxRQUFRO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGNBQWM7QUFDZDtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsUUFBUTtBQUN2QixlQUFlLFVBQVU7QUFDekIsZ0JBQWdCLFFBQVE7QUFDeEI7QUFDQTtBQUNBO0FBQ0E7QUFDQSxV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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBLGdCQUFnQixpQ0FBbUI7QUFDbkMsYUFBYSxpQ0FBbUI7O0FBRWhDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBLENBQUM7OztBQUdELE9BQU87QUFDUDtBQUNBLENBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZWt3Ly4vbm9kZV9tb2R1bGVzL21hdHRlci1qcy9idWlsZC9tYXR0ZXIuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLyohXG4gKiBtYXR0ZXItanMgMC4yMC4wIGJ5IEBsaWFicnVcbiAqIGh0dHA6Ly9icm0uaW8vbWF0dGVyLWpzL1xuICogTGljZW5zZSBNSVRcbiAqIFxuICogVGhlIE1JVCBMaWNlbnNlIChNSVQpXG4gKiBcbiAqIENvcHlyaWdodCAoYykgTGlhbSBCcnVtbWl0dCBhbmQgY29udHJpYnV0b3JzLlxuICogXG4gKiBQZXJtaXNzaW9uIGlzIGhlcmVieSBncmFudGVkLCBmcmVlIG9mIGNoYXJnZSwgdG8gYW55IHBlcnNvbiBvYnRhaW5pbmcgYSBjb3B5XG4gKiBvZiB0aGlzIHNvZnR3YXJlIGFuZCBhc3NvY2lhdGVkIGRvY3VtZW50YXRpb24gZmlsZXMgKHRoZSBcIlNvZnR3YXJlXCIpLCB0byBkZWFsXG4gKiBpbiB0aGUgU29mdHdhcmUgd2l0aG91dCByZXN0cmljdGlvbiwgaW5jbHVkaW5nIHdpdGhvdXQgbGltaXRhdGlvbiB0aGUgcmlnaHRzXG4gKiB0byB1c2UsIGNvcHksIG1vZGlmeSwgbWVyZ2UsIHB1Ymxpc2gsIGRpc3RyaWJ1dGUsIHN1YmxpY2Vuc2UsIGFuZC9vciBzZWxsXG4gKiBjb3BpZXMgb2YgdGhlIFNvZnR3YXJlLCBhbmQgdG8gcGVybWl0IHBlcnNvbnMgdG8gd2hvbSB0aGUgU29mdHdhcmUgaXNcbiAqIGZ1cm5pc2hlZCB0byBkbyBzbywgc3ViamVjdCB0byB0aGUgZm9sbG93aW5nIGNvbmRpdGlvbnM6XG4gKiBcbiAqIFRoZSBhYm92ZSBjb3B5cmlnaHQgbm90aWNlIGFuZCB0aGlzIHBlcm1pc3Npb24gbm90aWNlIHNoYWxsIGJlIGluY2x1ZGVkIGluXG4gKiBhbGwgY29waWVzIG9yIHN1YnN0YW50aWFsIHBvcnRpb25zIG9mIHRoZSBTb2Z0d2FyZS5cbiAqIFxuICogVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiwgV0lUSE9VVCBXQVJSQU5UWSBPRiBBTlkgS0lORCwgRVhQUkVTUyBPUlxuICogSU1QTElFRCwgSU5DTFVESU5HIEJVVCBOT1QgTElNSVRFRCBUTyBUSEUgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFksXG4gKiBGSVRORVNTIEZPUiBBIFBBUlRJQ1VMQVIgUFVSUE9TRSBBTkQgTk9OSU5GUklOR0VNRU5ULiBJTiBOTyBFVkVOVCBTSEFMTCBUSEVcbiAqIEFVVEhPUlMgT1IgQ09QWVJJR0hUIEhPTERFUlMgQkUgTElBQkxFIEZPUiBBTlkgQ0xBSU0sIERBTUFHRVMgT1IgT1RIRVJcbiAqIExJQUJJTElUWSwgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIFRPUlQgT1IgT1RIRVJXSVNFLCBBUklTSU5HIEZST00sXG4gKiBPVVQgT0YgT1IgSU4gQ09OTkVDVElPTiBXSVRIIFRIRSBTT0ZUV0FSRSBPUiBUSEUgVVNFIE9SIE9USEVSIERFQUxJTkdTIElOXG4gKiBUSEUgU09GVFdBUkUuXG4gKi9cbihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFwiTWF0dGVyXCIsIFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcIk1hdHRlclwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJNYXR0ZXJcIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAvKioqKioqLyAoZnVuY3Rpb24obW9kdWxlcykgeyAvLyB3ZWJwYWNrQm9vdHN0cmFwXG4vKioqKioqLyBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbi8qKioqKiovIFx0dmFyIGluc3RhbGxlZE1vZHVsZXMgPSB7fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4vKioqKioqLyBcdGZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcbi8qKioqKiovXG4vKioqKioqLyBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4vKioqKioqLyBcdFx0aWYoaW5zdGFsbGVkTW9kdWxlc1ttb2R1bGVJZF0pIHtcbi8qKioqKiovIFx0XHRcdHJldHVybiBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXS5leHBvcnRzO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0XHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuLyoqKioqKi8gXHRcdHZhciBtb2R1bGUgPSBpbnN0YWxsZWRNb2R1bGVzW21vZHVsZUlkXSA9IHtcbi8qKioqKiovIFx0XHRcdGk6IG1vZHVsZUlkLFxuLyoqKioqKi8gXHRcdFx0bDogZmFsc2UsXG4vKioqKioqLyBcdFx0XHRleHBvcnRzOiB7fVxuLyoqKioqKi8gXHRcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHRcdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuLyoqKioqKi8gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBGbGFnIHRoZSBtb2R1bGUgYXMgbG9hZGVkXG4vKioqKioqLyBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuLyoqKioqKi9cbi8qKioqKiovIFx0XHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuLyoqKioqKi8gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbi8qKioqKiovIFx0fVxuLyoqKioqKi9cbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubSA9IG1vZHVsZXM7XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBleHBvc2UgdGhlIG1vZHVsZSBjYWNoZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLmMgPSBpbnN0YWxsZWRNb2R1bGVzO1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gZGVmaW5lIGdldHRlciBmdW5jdGlvbiBmb3IgaGFybW9ueSBleHBvcnRzXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIG5hbWUsIGdldHRlcikge1xuLyoqKioqKi8gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbi8qKioqKiovIFx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBuYW1lLCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZ2V0dGVyIH0pO1xuLyoqKioqKi8gXHRcdH1cbi8qKioqKiovIFx0fTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbi8qKioqKiovIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuLyoqKioqKi8gXHRcdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuLyoqKioqKi8gXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG4vKioqKioqLyBcdFx0fVxuLyoqKioqKi8gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBjcmVhdGUgYSBmYWtlIG5hbWVzcGFjZSBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDE6IHZhbHVlIGlzIGEgbW9kdWxlIGlkLCByZXF1aXJlIGl0XG4vKioqKioqLyBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuLyoqKioqKi8gXHQvLyBtb2RlICYgNDogcmV0dXJuIHZhbHVlIHdoZW4gYWxyZWFkeSBucyBvYmplY3Rcbi8qKioqKiovIFx0Ly8gbW9kZSAmIDh8MTogYmVoYXZlIGxpa2UgcmVxdWlyZVxuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAxKSB2YWx1ZSA9IF9fd2VicGFja19yZXF1aXJlX18odmFsdWUpO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiA4KSByZXR1cm4gdmFsdWU7XG4vKioqKioqLyBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbi8qKioqKiovIFx0XHR2YXIgbnMgPSBPYmplY3QuY3JlYXRlKG51bGwpO1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18ucihucyk7XG4vKioqKioqLyBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuLyoqKioqKi8gXHRcdGlmKG1vZGUgJiAyICYmIHR5cGVvZiB2YWx1ZSAhPSAnc3RyaW5nJykgZm9yKHZhciBrZXkgaW4gdmFsdWUpIF9fd2VicGFja19yZXF1aXJlX18uZChucywga2V5LCBmdW5jdGlvbihrZXkpIHsgcmV0dXJuIHZhbHVlW2tleV07IH0uYmluZChudWxsLCBrZXkpKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gbnM7XG4vKioqKioqLyBcdH07XG4vKioqKioqL1xuLyoqKioqKi8gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuLyoqKioqKi8gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbi8qKioqKiovIFx0XHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cbi8qKioqKiovIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4vKioqKioqLyBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuLyoqKioqKi8gXHRcdF9fd2VicGFja19yZXF1aXJlX18uZChnZXR0ZXIsICdhJywgZ2V0dGVyKTtcbi8qKioqKiovIFx0XHRyZXR1cm4gZ2V0dGVyO1xuLyoqKioqKi8gXHR9O1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcbi8qKioqKiovXG4vKioqKioqLyBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4vKioqKioqLyBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG4vKioqKioqL1xuLyoqKioqKi9cbi8qKioqKiovIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4vKioqKioqLyBcdHJldHVybiBfX3dlYnBhY2tfcmVxdWlyZV9fKF9fd2VicGFja19yZXF1aXJlX18ucyA9IDIwKTtcbi8qKioqKiovIH0pXG4vKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuLyoqKioqKi8gKFtcbi8qIDAgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMpIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkNvbW1vbmAgbW9kdWxlIGNvbnRhaW5zIHV0aWxpdHkgZnVuY3Rpb25zIHRoYXQgYXJlIGNvbW1vbiB0byBhbGwgbW9kdWxlcy5cbipcbiogQGNsYXNzIENvbW1vblxuKi9cblxudmFyIENvbW1vbiA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbW1vbjtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgQ29tbW9uLl9iYXNlRGVsdGEgPSAxMDAwIC8gNjA7XG4gICAgQ29tbW9uLl9uZXh0SWQgPSAwO1xuICAgIENvbW1vbi5fc2VlZCA9IDA7XG4gICAgQ29tbW9uLl9ub3dTdGFydFRpbWUgPSArKG5ldyBEYXRlKCkpO1xuICAgIENvbW1vbi5fd2FybmVkT25jZSA9IHt9O1xuICAgIENvbW1vbi5fZGVjb21wID0gbnVsbDtcbiAgICBcbiAgICAvKipcbiAgICAgKiBFeHRlbmRzIHRoZSBvYmplY3QgaW4gdGhlIGZpcnN0IGFyZ3VtZW50IHVzaW5nIHRoZSBvYmplY3QgaW4gdGhlIHNlY29uZCBhcmd1bWVudC5cbiAgICAgKiBAbWV0aG9kIGV4dGVuZFxuICAgICAqIEBwYXJhbSB7fSBvYmpcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGRlZXBcbiAgICAgKiBAcmV0dXJuIHt9IG9iaiBleHRlbmRlZFxuICAgICAqL1xuICAgIENvbW1vbi5leHRlbmQgPSBmdW5jdGlvbihvYmosIGRlZXApIHtcbiAgICAgICAgdmFyIGFyZ3NTdGFydCxcbiAgICAgICAgICAgIGFyZ3MsXG4gICAgICAgICAgICBkZWVwQ2xvbmU7XG5cbiAgICAgICAgaWYgKHR5cGVvZiBkZWVwID09PSAnYm9vbGVhbicpIHtcbiAgICAgICAgICAgIGFyZ3NTdGFydCA9IDI7XG4gICAgICAgICAgICBkZWVwQ2xvbmUgPSBkZWVwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYXJnc1N0YXJ0ID0gMTtcbiAgICAgICAgICAgIGRlZXBDbG9uZSA9IHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gYXJnc1N0YXJ0OyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgc291cmNlID0gYXJndW1lbnRzW2ldO1xuXG4gICAgICAgICAgICBpZiAoc291cmNlKSB7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgcHJvcCBpbiBzb3VyY2UpIHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGRlZXBDbG9uZSAmJiBzb3VyY2VbcHJvcF0gJiYgc291cmNlW3Byb3BdLmNvbnN0cnVjdG9yID09PSBPYmplY3QpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICghb2JqW3Byb3BdIHx8IG9ialtwcm9wXS5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgb2JqW3Byb3BdID0gb2JqW3Byb3BdIHx8IHt9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIENvbW1vbi5leHRlbmQob2JqW3Byb3BdLCBkZWVwQ2xvbmUsIHNvdXJjZVtwcm9wXSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG9ialtwcm9wXSA9IHNvdXJjZVtwcm9wXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgcmV0dXJuIG9iajtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjbG9uZSBvZiB0aGUgb2JqZWN0LCBpZiBkZWVwIGlzIHRydWUgcmVmZXJlbmNlcyB3aWxsIGFsc28gYmUgY2xvbmVkLlxuICAgICAqIEBtZXRob2QgY2xvbmVcbiAgICAgKiBAcGFyYW0ge30gb2JqXG4gICAgICogQHBhcmFtIHtib29sfSBkZWVwXG4gICAgICogQHJldHVybiB7fSBvYmogY2xvbmVkXG4gICAgICovXG4gICAgQ29tbW9uLmNsb25lID0gZnVuY3Rpb24ob2JqLCBkZWVwKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uZXh0ZW5kKHt9LCBkZWVwLCBvYmopO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBsaXN0IG9mIGtleXMgZm9yIHRoZSBnaXZlbiBvYmplY3QuXG4gICAgICogQG1ldGhvZCBrZXlzXG4gICAgICogQHBhcmFtIHt9IG9ialxuICAgICAqIEByZXR1cm4ge3N0cmluZ1tdfSBrZXlzXG4gICAgICovXG4gICAgQ29tbW9uLmtleXMgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgaWYgKE9iamVjdC5rZXlzKVxuICAgICAgICAgICAgcmV0dXJuIE9iamVjdC5rZXlzKG9iaik7XG5cbiAgICAgICAgLy8gYXZvaWQgaGFzT3duUHJvcGVydHkgZm9yIHBlcmZvcm1hbmNlXG4gICAgICAgIHZhciBrZXlzID0gW107XG4gICAgICAgIGZvciAodmFyIGtleSBpbiBvYmopXG4gICAgICAgICAgICBrZXlzLnB1c2goa2V5KTtcbiAgICAgICAgcmV0dXJuIGtleXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGxpc3Qgb2YgdmFsdWVzIGZvciB0aGUgZ2l2ZW4gb2JqZWN0LlxuICAgICAqIEBtZXRob2QgdmFsdWVzXG4gICAgICogQHBhcmFtIHt9IG9ialxuICAgICAqIEByZXR1cm4ge2FycmF5fSBBcnJheSBvZiB0aGUgb2JqZWN0cyBwcm9wZXJ0eSB2YWx1ZXNcbiAgICAgKi9cbiAgICBDb21tb24udmFsdWVzID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHZhciB2YWx1ZXMgPSBbXTtcbiAgICAgICAgXG4gICAgICAgIGlmIChPYmplY3Qua2V5cykge1xuICAgICAgICAgICAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhvYmopO1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBrZXlzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmFsdWVzLnB1c2gob2JqW2tleXNbaV1dKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB2YWx1ZXM7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8vIGF2b2lkIGhhc093blByb3BlcnR5IGZvciBwZXJmb3JtYW5jZVxuICAgICAgICBmb3IgKHZhciBrZXkgaW4gb2JqKVxuICAgICAgICAgICAgdmFsdWVzLnB1c2gob2JqW2tleV0pO1xuICAgICAgICByZXR1cm4gdmFsdWVzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIGEgdmFsdWUgZnJvbSBgYmFzZWAgcmVsYXRpdmUgdG8gdGhlIGBwYXRoYCBzdHJpbmcuXG4gICAgICogQG1ldGhvZCBnZXRcbiAgICAgKiBAcGFyYW0ge30gb2JqIFRoZSBiYXNlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBiYXNlYCwgZS5nLiAnRm9vLkJhci5iYXonXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtiZWdpbl0gUGF0aCBzbGljZSBiZWdpblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kXSBQYXRoIHNsaWNlIGVuZFxuICAgICAqIEByZXR1cm4ge30gVGhlIG9iamVjdCBhdCB0aGUgZ2l2ZW4gcGF0aFxuICAgICAqL1xuICAgIENvbW1vbi5nZXQgPSBmdW5jdGlvbihvYmosIHBhdGgsIGJlZ2luLCBlbmQpIHtcbiAgICAgICAgcGF0aCA9IHBhdGguc3BsaXQoJy4nKS5zbGljZShiZWdpbiwgZW5kKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHBhdGgubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIG9iaiA9IG9ialtwYXRoW2ldXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBvYmo7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgYSB2YWx1ZSBvbiBgYmFzZWAgcmVsYXRpdmUgdG8gdGhlIGdpdmVuIGBwYXRoYCBzdHJpbmcuXG4gICAgICogQG1ldGhvZCBzZXRcbiAgICAgKiBAcGFyYW0ge30gb2JqIFRoZSBiYXNlIG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBwYXRoIFRoZSBwYXRoIHJlbGF0aXZlIHRvIGBiYXNlYCwgZS5nLiAnRm9vLkJhci5iYXonXG4gICAgICogQHBhcmFtIHt9IHZhbCBUaGUgdmFsdWUgdG8gc2V0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtiZWdpbl0gUGF0aCBzbGljZSBiZWdpblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbZW5kXSBQYXRoIHNsaWNlIGVuZFxuICAgICAqIEByZXR1cm4ge30gUGFzcyB0aHJvdWdoIGB2YWxgIGZvciBjaGFpbmluZ1xuICAgICAqL1xuICAgIENvbW1vbi5zZXQgPSBmdW5jdGlvbihvYmosIHBhdGgsIHZhbCwgYmVnaW4sIGVuZCkge1xuICAgICAgICB2YXIgcGFydHMgPSBwYXRoLnNwbGl0KCcuJykuc2xpY2UoYmVnaW4sIGVuZCk7XG4gICAgICAgIENvbW1vbi5nZXQob2JqLCBwYXRoLCAwLCAtMSlbcGFydHNbcGFydHMubGVuZ3RoIC0gMV1dID0gdmFsO1xuICAgICAgICByZXR1cm4gdmFsO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaHVmZmxlcyB0aGUgZ2l2ZW4gYXJyYXkgaW4tcGxhY2UuXG4gICAgICogVGhlIGZ1bmN0aW9uIHVzZXMgYSBzZWVkZWQgcmFuZG9tIGdlbmVyYXRvci5cbiAgICAgKiBAbWV0aG9kIHNodWZmbGVcbiAgICAgKiBAcGFyYW0ge2FycmF5fSBhcnJheVxuICAgICAqIEByZXR1cm4ge2FycmF5fSBhcnJheSBzaHVmZmxlZCByYW5kb21seVxuICAgICAqL1xuICAgIENvbW1vbi5zaHVmZmxlID0gZnVuY3Rpb24oYXJyYXkpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IGFycmF5Lmxlbmd0aCAtIDE7IGkgPiAwOyBpLS0pIHtcbiAgICAgICAgICAgIHZhciBqID0gTWF0aC5mbG9vcihDb21tb24ucmFuZG9tKCkgKiAoaSArIDEpKTtcbiAgICAgICAgICAgIHZhciB0ZW1wID0gYXJyYXlbaV07XG4gICAgICAgICAgICBhcnJheVtpXSA9IGFycmF5W2pdO1xuICAgICAgICAgICAgYXJyYXlbal0gPSB0ZW1wO1xuICAgICAgICB9XG4gICAgICAgIHJldHVybiBhcnJheTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmFuZG9tbHkgY2hvb3NlcyBhIHZhbHVlIGZyb20gYSBsaXN0IHdpdGggZXF1YWwgcHJvYmFiaWxpdHkuXG4gICAgICogVGhlIGZ1bmN0aW9uIHVzZXMgYSBzZWVkZWQgcmFuZG9tIGdlbmVyYXRvci5cbiAgICAgKiBAbWV0aG9kIGNob29zZVxuICAgICAqIEBwYXJhbSB7YXJyYXl9IGNob2ljZXNcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IEEgcmFuZG9tIGNob2ljZSBvYmplY3QgZnJvbSB0aGUgYXJyYXlcbiAgICAgKi9cbiAgICBDb21tb24uY2hvb3NlID0gZnVuY3Rpb24oY2hvaWNlcykge1xuICAgICAgICByZXR1cm4gY2hvaWNlc1tNYXRoLmZsb29yKENvbW1vbi5yYW5kb20oKSAqIGNob2ljZXMubGVuZ3RoKV07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgb2JqZWN0IGlzIGEgSFRNTEVsZW1lbnQsIG90aGVyd2lzZSBmYWxzZS5cbiAgICAgKiBAbWV0aG9kIGlzRWxlbWVudFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBIVE1MRWxlbWVudCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQ29tbW9uLmlzRWxlbWVudCA9IGZ1bmN0aW9uKG9iaikge1xuICAgICAgICBpZiAodHlwZW9mIEhUTUxFbGVtZW50ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgcmV0dXJuIG9iaiBpbnN0YW5jZW9mIEhUTUxFbGVtZW50O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuICEhKG9iaiAmJiBvYmoubm9kZVR5cGUgJiYgb2JqLm5vZGVOYW1lKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYW4gYXJyYXkuXG4gICAgICogQG1ldGhvZCBpc0FycmF5XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhbiBhcnJheSwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQ29tbW9uLmlzQXJyYXkgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUudG9TdHJpbmcuY2FsbChvYmopID09PSAnW29iamVjdCBBcnJheV0nO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIGZ1bmN0aW9uLlxuICAgICAqIEBtZXRob2QgaXNGdW5jdGlvblxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmpcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSBvYmplY3QgaXMgYSBmdW5jdGlvbiwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQ29tbW9uLmlzRnVuY3Rpb24gPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09IFwiZnVuY3Rpb25cIjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSBvYmplY3QgaXMgYSBwbGFpbiBvYmplY3QuXG4gICAgICogQG1ldGhvZCBpc1BsYWluT2JqZWN0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHBsYWluIG9iamVjdCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQ29tbW9uLmlzUGxhaW5PYmplY3QgPSBmdW5jdGlvbihvYmopIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBvYmogPT09ICdvYmplY3QnICYmIG9iai5jb25zdHJ1Y3RvciA9PT0gT2JqZWN0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZy5cbiAgICAgKiBAbWV0aG9kIGlzU3RyaW5nXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9ialxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIG9iamVjdCBpcyBhIHN0cmluZywgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQ29tbW9uLmlzU3RyaW5nID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiB0b1N0cmluZy5jYWxsKG9iaikgPT09ICdbb2JqZWN0IFN0cmluZ10nO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgZ2l2ZW4gdmFsdWUgY2xhbXBlZCBiZXR3ZWVuIGEgbWluaW11bSBhbmQgbWF4aW11bSB2YWx1ZS5cbiAgICAgKiBAbWV0aG9kIGNsYW1wXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHZhbHVlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1pblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXhcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSB2YWx1ZSBjbGFtcGVkIGJldHdlZW4gbWluIGFuZCBtYXggaW5jbHVzaXZlXG4gICAgICovXG4gICAgQ29tbW9uLmNsYW1wID0gZnVuY3Rpb24odmFsdWUsIG1pbiwgbWF4KSB7XG4gICAgICAgIGlmICh2YWx1ZSA8IG1pbilcbiAgICAgICAgICAgIHJldHVybiBtaW47XG4gICAgICAgIGlmICh2YWx1ZSA+IG1heClcbiAgICAgICAgICAgIHJldHVybiBtYXg7XG4gICAgICAgIHJldHVybiB2YWx1ZTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHNpZ24gb2YgdGhlIGdpdmVuIHZhbHVlLlxuICAgICAqIEBtZXRob2Qgc2lnblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2YWx1ZVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gLTEgaWYgbmVnYXRpdmUsICsxIGlmIDAgb3IgcG9zaXRpdmVcbiAgICAgKi9cbiAgICBDb21tb24uc2lnbiA9IGZ1bmN0aW9uKHZhbHVlKSB7XG4gICAgICAgIHJldHVybiB2YWx1ZSA8IDAgPyAtMSA6IDE7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjdXJyZW50IHRpbWVzdGFtcCBzaW5jZSB0aGUgdGltZSBvcmlnaW4gKGUuZy4gZnJvbSBwYWdlIGxvYWQpLlxuICAgICAqIFRoZSByZXN1bHQgaXMgaW4gbWlsbGlzZWNvbmRzIGFuZCB3aWxsIHVzZSBoaWdoLXJlc29sdXRpb24gdGltaW5nIGlmIGF2YWlsYWJsZS5cbiAgICAgKiBAbWV0aG9kIG5vd1xuICAgICAqIEByZXR1cm4ge251bWJlcn0gdGhlIGN1cnJlbnQgdGltZXN0YW1wIGluIG1pbGxpc2Vjb25kc1xuICAgICAqL1xuICAgIENvbW1vbi5ub3cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5wZXJmb3JtYW5jZSkge1xuICAgICAgICAgICAgaWYgKHdpbmRvdy5wZXJmb3JtYW5jZS5ub3cpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gd2luZG93LnBlcmZvcm1hbmNlLm5vdygpO1xuICAgICAgICAgICAgfSBlbHNlIGlmICh3aW5kb3cucGVyZm9ybWFuY2Uud2Via2l0Tm93KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHdpbmRvdy5wZXJmb3JtYW5jZS53ZWJraXROb3coKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChEYXRlLm5vdykge1xuICAgICAgICAgICAgcmV0dXJuIERhdGUubm93KCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gKG5ldyBEYXRlKCkpIC0gQ29tbW9uLl9ub3dTdGFydFRpbWU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGEgcmFuZG9tIHZhbHVlIGJldHdlZW4gYSBtaW5pbXVtIGFuZCBhIG1heGltdW0gdmFsdWUgaW5jbHVzaXZlLlxuICAgICAqIFRoZSBmdW5jdGlvbiB1c2VzIGEgc2VlZGVkIHJhbmRvbSBnZW5lcmF0b3IuXG4gICAgICogQG1ldGhvZCByYW5kb21cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gbWluXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1heFxuICAgICAqIEByZXR1cm4ge251bWJlcn0gQSByYW5kb20gbnVtYmVyIGJldHdlZW4gbWluIGFuZCBtYXggaW5jbHVzaXZlXG4gICAgICovXG4gICAgQ29tbW9uLnJhbmRvbSA9IGZ1bmN0aW9uKG1pbiwgbWF4KSB7XG4gICAgICAgIG1pbiA9ICh0eXBlb2YgbWluICE9PSBcInVuZGVmaW5lZFwiKSA/IG1pbiA6IDA7XG4gICAgICAgIG1heCA9ICh0eXBlb2YgbWF4ICE9PSBcInVuZGVmaW5lZFwiKSA/IG1heCA6IDE7XG4gICAgICAgIHJldHVybiBtaW4gKyBfc2VlZGVkUmFuZG9tKCkgKiAobWF4IC0gbWluKTtcbiAgICB9O1xuXG4gICAgdmFyIF9zZWVkZWRSYW5kb20gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvTGluZWFyX2NvbmdydWVudGlhbF9nZW5lcmF0b3JcbiAgICAgICAgQ29tbW9uLl9zZWVkID0gKENvbW1vbi5fc2VlZCAqIDkzMDEgKyA0OTI5NykgJSAyMzMyODA7XG4gICAgICAgIHJldHVybiBDb21tb24uX3NlZWQgLyAyMzMyODA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbnZlcnRzIGEgQ1NTIGhleCBjb2xvdXIgc3RyaW5nIGludG8gYW4gaW50ZWdlci5cbiAgICAgKiBAbWV0aG9kIGNvbG9yVG9OdW1iZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gY29sb3JTdHJpbmdcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IEFuIGludGVnZXIgcmVwcmVzZW50aW5nIHRoZSBDU1MgaGV4IHN0cmluZ1xuICAgICAqL1xuICAgIENvbW1vbi5jb2xvclRvTnVtYmVyID0gZnVuY3Rpb24oY29sb3JTdHJpbmcpIHtcbiAgICAgICAgY29sb3JTdHJpbmcgPSBjb2xvclN0cmluZy5yZXBsYWNlKCcjJywnJyk7XG5cbiAgICAgICAgaWYgKGNvbG9yU3RyaW5nLmxlbmd0aCA9PSAzKSB7XG4gICAgICAgICAgICBjb2xvclN0cmluZyA9IGNvbG9yU3RyaW5nLmNoYXJBdCgwKSArIGNvbG9yU3RyaW5nLmNoYXJBdCgwKVxuICAgICAgICAgICAgICAgICAgICAgICAgKyBjb2xvclN0cmluZy5jaGFyQXQoMSkgKyBjb2xvclN0cmluZy5jaGFyQXQoMSlcbiAgICAgICAgICAgICAgICAgICAgICAgICsgY29sb3JTdHJpbmcuY2hhckF0KDIpICsgY29sb3JTdHJpbmcuY2hhckF0KDIpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhcnNlSW50KGNvbG9yU3RyaW5nLCAxNik7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSBjb25zb2xlIGxvZ2dpbmcgbGV2ZWwgdG8gdXNlLCB3aGVyZSBlYWNoIGxldmVsIGluY2x1ZGVzIGFsbCBsZXZlbHMgYWJvdmUgYW5kIGV4Y2x1ZGVzIHRoZSBsZXZlbHMgYmVsb3cuXG4gICAgICogVGhlIGRlZmF1bHQgbGV2ZWwgaXMgJ2RlYnVnJyB3aGljaCBzaG93cyBhbGwgY29uc29sZSBtZXNzYWdlcy4gIFxuICAgICAqXG4gICAgICogUG9zc2libGUgbGV2ZWwgdmFsdWVzIGFyZTpcbiAgICAgKiAtIDAgPSBOb25lXG4gICAgICogLSAxID0gRGVidWdcbiAgICAgKiAtIDIgPSBJbmZvXG4gICAgICogLSAzID0gV2FyblxuICAgICAqIC0gNCA9IEVycm9yXG4gICAgICogQHN0YXRpY1xuICAgICAqIEBwcm9wZXJ0eSBsb2dMZXZlbFxuICAgICAqIEB0eXBlIHtOdW1iZXJ9XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuICAgIENvbW1vbi5sb2dMZXZlbCA9IDE7XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGBjb25zb2xlLmxvZ2AgbWVzc2FnZSBvbmx5IGlmIHRoZSBjdXJyZW50IGBDb21tb24ubG9nTGV2ZWxgIGFsbG93cyBpdC5cbiAgICAgKiBUaGUgbWVzc2FnZSB3aWxsIGJlIHByZWZpeGVkIHdpdGggJ21hdHRlci1qcycgdG8gbWFrZSBpdCBlYXNpbHkgaWRlbnRpZmlhYmxlLlxuICAgICAqIEBtZXRob2QgbG9nXG4gICAgICogQHBhcmFtIC4uLm9ianMge30gVGhlIG9iamVjdHMgdG8gbG9nLlxuICAgICAqL1xuICAgIENvbW1vbi5sb2cgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUgJiYgQ29tbW9uLmxvZ0xldmVsID4gMCAmJiBDb21tb24ubG9nTGV2ZWwgPD0gMykge1xuICAgICAgICAgICAgY29uc29sZS5sb2cuYXBwbHkoY29uc29sZSwgWydtYXR0ZXItanM6J10uY29uY2F0KEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykpKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTaG93cyBhIGBjb25zb2xlLmluZm9gIG1lc3NhZ2Ugb25seSBpZiB0aGUgY3VycmVudCBgQ29tbW9uLmxvZ0xldmVsYCBhbGxvd3MgaXQuXG4gICAgICogVGhlIG1lc3NhZ2Ugd2lsbCBiZSBwcmVmaXhlZCB3aXRoICdtYXR0ZXItanMnIHRvIG1ha2UgaXQgZWFzaWx5IGlkZW50aWZpYWJsZS5cbiAgICAgKiBAbWV0aG9kIGluZm9cbiAgICAgKiBAcGFyYW0gLi4ub2JqcyB7fSBUaGUgb2JqZWN0cyB0byBsb2cuXG4gICAgICovXG4gICAgQ29tbW9uLmluZm8gPSBmdW5jdGlvbigpIHtcbiAgICAgICAgaWYgKGNvbnNvbGUgJiYgQ29tbW9uLmxvZ0xldmVsID4gMCAmJiBDb21tb24ubG9nTGV2ZWwgPD0gMikge1xuICAgICAgICAgICAgY29uc29sZS5pbmZvLmFwcGx5KGNvbnNvbGUsIFsnbWF0dGVyLWpzOiddLmNvbmNhdChBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBgY29uc29sZS53YXJuYCBtZXNzYWdlIG9ubHkgaWYgdGhlIGN1cnJlbnQgYENvbW1vbi5sb2dMZXZlbGAgYWxsb3dzIGl0LlxuICAgICAqIFRoZSBtZXNzYWdlIHdpbGwgYmUgcHJlZml4ZWQgd2l0aCAnbWF0dGVyLWpzJyB0byBtYWtlIGl0IGVhc2lseSBpZGVudGlmaWFibGUuXG4gICAgICogQG1ldGhvZCB3YXJuXG4gICAgICogQHBhcmFtIC4uLm9ianMge30gVGhlIG9iamVjdHMgdG8gbG9nLlxuICAgICAqL1xuICAgIENvbW1vbi53YXJuID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIGlmIChjb25zb2xlICYmIENvbW1vbi5sb2dMZXZlbCA+IDAgJiYgQ29tbW9uLmxvZ0xldmVsIDw9IDMpIHtcbiAgICAgICAgICAgIGNvbnNvbGUud2Fybi5hcHBseShjb25zb2xlLCBbJ21hdHRlci1qczonXS5jb25jYXQoQXJyYXkucHJvdG90eXBlLnNsaWNlLmNhbGwoYXJndW1lbnRzKSkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVzZXMgYENvbW1vbi53YXJuYCB0byBsb2cgdGhlIGdpdmVuIG1lc3NhZ2Ugb25lIHRpbWUgb25seS5cbiAgICAgKiBAbWV0aG9kIHdhcm5PbmNlXG4gICAgICogQHBhcmFtIC4uLm9ianMge30gVGhlIG9iamVjdHMgdG8gbG9nLlxuICAgICAqL1xuICAgIENvbW1vbi53YXJuT25jZSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICB2YXIgbWVzc2FnZSA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGFyZ3VtZW50cykuam9pbignICcpO1xuXG4gICAgICAgIGlmICghQ29tbW9uLl93YXJuZWRPbmNlW21lc3NhZ2VdKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybihtZXNzYWdlKTtcbiAgICAgICAgICAgIENvbW1vbi5fd2FybmVkT25jZVttZXNzYWdlXSA9IHRydWU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hvd3MgYSBkZXByZWNhdGVkIGNvbnNvbGUgd2FybmluZyB3aGVuIHRoZSBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gb2JqZWN0IGlzIGNhbGxlZC5cbiAgICAgKiBUaGUgdGFyZ2V0IGZ1bmN0aW9uIHdpbGwgYmUgcmVwbGFjZWQgd2l0aCBhIG5ldyBmdW5jdGlvbiB0aGF0IGZpcnN0IHNob3dzIHRoZSB3YXJuaW5nXG4gICAgICogYW5kIHRoZW4gY2FsbHMgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uLlxuICAgICAqIEBtZXRob2QgZGVwcmVjYXRlZFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBvYmogVGhlIG9iamVjdCBvciBtb2R1bGVcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gbmFtZSBUaGUgcHJvcGVydHkgbmFtZSBvZiB0aGUgZnVuY3Rpb24gb24gb2JqXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHdhcm5pbmcgVGhlIG9uZS10aW1lIG1lc3NhZ2UgdG8gc2hvdyBpZiB0aGUgZnVuY3Rpb24gaXMgY2FsbGVkXG4gICAgICovXG4gICAgQ29tbW9uLmRlcHJlY2F0ZWQgPSBmdW5jdGlvbihvYmosIHByb3AsIHdhcm5pbmcpIHtcbiAgICAgICAgb2JqW3Byb3BdID0gQ29tbW9uLmNoYWluKGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm5PbmNlKCfwn5SFIGRlcHJlY2F0ZWQg8J+UhScsIHdhcm5pbmcpO1xuICAgICAgICB9LCBvYmpbcHJvcF0pO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBuZXh0IHVuaXF1ZSBzZXF1ZW50aWFsIElELlxuICAgICAqIEBtZXRob2QgbmV4dElkXG4gICAgICogQHJldHVybiB7TnVtYmVyfSBVbmlxdWUgc2VxdWVudGlhbCBJRFxuICAgICAqL1xuICAgIENvbW1vbi5uZXh0SWQgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgcmV0dXJuIENvbW1vbi5fbmV4dElkKys7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEEgY3Jvc3MgYnJvd3NlciBjb21wYXRpYmxlIGluZGV4T2YgaW1wbGVtZW50YXRpb24uXG4gICAgICogQG1ldGhvZCBpbmRleE9mXG4gICAgICogQHBhcmFtIHthcnJheX0gaGF5c3RhY2tcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gbmVlZGxlXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9zaXRpb24gb2YgbmVlZGxlIGluIGhheXN0YWNrLCBvdGhlcndpc2UgLTEuXG4gICAgICovXG4gICAgQ29tbW9uLmluZGV4T2YgPSBmdW5jdGlvbihoYXlzdGFjaywgbmVlZGxlKSB7XG4gICAgICAgIGlmIChoYXlzdGFjay5pbmRleE9mKVxuICAgICAgICAgICAgcmV0dXJuIGhheXN0YWNrLmluZGV4T2YobmVlZGxlKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGhheXN0YWNrLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoaGF5c3RhY2tbaV0gPT09IG5lZWRsZSlcbiAgICAgICAgICAgICAgICByZXR1cm4gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAtMTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQSBjcm9zcyBicm93c2VyIGNvbXBhdGlibGUgYXJyYXkgbWFwIGltcGxlbWVudGF0aW9uLlxuICAgICAqIEBtZXRob2QgbWFwXG4gICAgICogQHBhcmFtIHthcnJheX0gbGlzdFxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmNcbiAgICAgKiBAcmV0dXJuIHthcnJheX0gVmFsdWVzIGZyb20gbGlzdCB0cmFuc2Zvcm1lZCBieSBmdW5jLlxuICAgICAqL1xuICAgIENvbW1vbi5tYXAgPSBmdW5jdGlvbihsaXN0LCBmdW5jKSB7XG4gICAgICAgIGlmIChsaXN0Lm1hcCkge1xuICAgICAgICAgICAgcmV0dXJuIGxpc3QubWFwKGZ1bmMpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG1hcHBlZCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGlzdC5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgbWFwcGVkLnB1c2goZnVuYyhsaXN0W2ldKSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gbWFwcGVkO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUYWtlcyBhIGRpcmVjdGVkIGdyYXBoIGFuZCByZXR1cm5zIHRoZSBwYXJ0aWFsbHkgb3JkZXJlZCBzZXQgb2YgdmVydGljZXMgaW4gdG9wb2xvZ2ljYWwgb3JkZXIuXG4gICAgICogQ2lyY3VsYXIgZGVwZW5kZW5jaWVzIGFyZSBhbGxvd2VkLlxuICAgICAqIEBtZXRob2QgdG9wb2xvZ2ljYWxTb3J0XG4gICAgICogQHBhcmFtIHtvYmplY3R9IGdyYXBoXG4gICAgICogQHJldHVybiB7YXJyYXl9IFBhcnRpYWxseSBvcmRlcmVkIHNldCBvZiB2ZXJ0aWNlcyBpbiB0b3BvbG9naWNhbCBvcmRlci5cbiAgICAgKi9cbiAgICBDb21tb24udG9wb2xvZ2ljYWxTb3J0ID0gZnVuY3Rpb24oZ3JhcGgpIHtcbiAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL21nZWNoZXYvamF2YXNjcmlwdC1hbGdvcml0aG1zXG4gICAgICAgIC8vIENvcHlyaWdodCAoYykgTWlua28gR2VjaGV2IChNSVQgbGljZW5zZSlcbiAgICAgICAgLy8gTW9kaWZpY2F0aW9uczogdGlkeSBmb3JtYXR0aW5nIGFuZCBuYW1pbmdcbiAgICAgICAgdmFyIHJlc3VsdCA9IFtdLFxuICAgICAgICAgICAgdmlzaXRlZCA9IFtdLFxuICAgICAgICAgICAgdGVtcCA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIG5vZGUgaW4gZ3JhcGgpIHtcbiAgICAgICAgICAgIGlmICghdmlzaXRlZFtub2RlXSAmJiAhdGVtcFtub2RlXSkge1xuICAgICAgICAgICAgICAgIENvbW1vbi5fdG9wb2xvZ2ljYWxTb3J0KG5vZGUsIHZpc2l0ZWQsIHRlbXAsIGdyYXBoLCByZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgQ29tbW9uLl90b3BvbG9naWNhbFNvcnQgPSBmdW5jdGlvbihub2RlLCB2aXNpdGVkLCB0ZW1wLCBncmFwaCwgcmVzdWx0KSB7XG4gICAgICAgIHZhciBuZWlnaGJvcnMgPSBncmFwaFtub2RlXSB8fCBbXTtcbiAgICAgICAgdGVtcFtub2RlXSA9IHRydWU7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBuZWlnaGJvcnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBuZWlnaGJvciA9IG5laWdoYm9yc1tpXTtcblxuICAgICAgICAgICAgaWYgKHRlbXBbbmVpZ2hib3JdKSB7XG4gICAgICAgICAgICAgICAgLy8gc2tpcCBjaXJjdWxhciBkZXBlbmRlbmNpZXNcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKCF2aXNpdGVkW25laWdoYm9yXSkge1xuICAgICAgICAgICAgICAgIENvbW1vbi5fdG9wb2xvZ2ljYWxTb3J0KG5laWdoYm9yLCB2aXNpdGVkLCB0ZW1wLCBncmFwaCwgcmVzdWx0KTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHRlbXBbbm9kZV0gPSBmYWxzZTtcbiAgICAgICAgdmlzaXRlZFtub2RlXSA9IHRydWU7XG5cbiAgICAgICAgcmVzdWx0LnB1c2gobm9kZSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRha2VzIF9uXyBmdW5jdGlvbnMgYXMgYXJndW1lbnRzIGFuZCByZXR1cm5zIGEgbmV3IGZ1bmN0aW9uIHRoYXQgY2FsbHMgdGhlbSBpbiBvcmRlci5cbiAgICAgKiBUaGUgYXJndW1lbnRzIGFwcGxpZWQgd2hlbiBjYWxsaW5nIHRoZSBuZXcgZnVuY3Rpb24gd2lsbCBhbHNvIGJlIGFwcGxpZWQgdG8gZXZlcnkgZnVuY3Rpb24gcGFzc2VkLlxuICAgICAqIFRoZSB2YWx1ZSBvZiBgdGhpc2AgcmVmZXJzIHRvIHRoZSBsYXN0IHZhbHVlIHJldHVybmVkIGluIHRoZSBjaGFpbiB0aGF0IHdhcyBub3QgYHVuZGVmaW5lZGAuXG4gICAgICogVGhlcmVmb3JlIGlmIGEgcGFzc2VkIGZ1bmN0aW9uIGRvZXMgbm90IHJldHVybiBhIHZhbHVlLCB0aGUgcHJldmlvdXNseSByZXR1cm5lZCB2YWx1ZSBpcyBtYWludGFpbmVkLlxuICAgICAqIEFmdGVyIGFsbCBwYXNzZWQgZnVuY3Rpb25zIGhhdmUgYmVlbiBjYWxsZWQgdGhlIG5ldyBmdW5jdGlvbiByZXR1cm5zIHRoZSBsYXN0IHJldHVybmVkIHZhbHVlIChpZiBhbnkpLlxuICAgICAqIElmIGFueSBvZiB0aGUgcGFzc2VkIGZ1bmN0aW9ucyBhcmUgYSBjaGFpbiwgdGhlbiB0aGUgY2hhaW4gd2lsbCBiZSBmbGF0dGVuZWQuXG4gICAgICogQG1ldGhvZCBjaGFpblxuICAgICAqIEBwYXJhbSAuLi5mdW5jcyB7ZnVuY3Rpb259IFRoZSBmdW5jdGlvbnMgdG8gY2hhaW4uXG4gICAgICogQHJldHVybiB7ZnVuY3Rpb259IEEgbmV3IGZ1bmN0aW9uIHRoYXQgY2FsbHMgdGhlIHBhc3NlZCBmdW5jdGlvbnMgaW4gb3JkZXIuXG4gICAgICovXG4gICAgQ29tbW9uLmNoYWluID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIHZhciBmdW5jcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXJndW1lbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgZnVuYyA9IGFyZ3VtZW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKGZ1bmMuX2NoYWluZWQpIHtcbiAgICAgICAgICAgICAgICAvLyBmbGF0dGVuIGFscmVhZHkgY2hhaW5lZCBmdW5jdGlvbnNcbiAgICAgICAgICAgICAgICBmdW5jcy5wdXNoLmFwcGx5KGZ1bmNzLCBmdW5jLl9jaGFpbmVkKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZnVuY3MucHVzaChmdW5jKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjaGFpbiA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgICAgLy8gaHR0cHM6Ly9naXRodWIuY29tL0dvb2dsZUNocm9tZS9kZXZ0b29scy1kb2NzL2lzc3Vlcy81MyNpc3N1ZWNvbW1lbnQtNTE5NDEzNThcbiAgICAgICAgICAgIHZhciBsYXN0UmVzdWx0LFxuICAgICAgICAgICAgICAgIGFyZ3MgPSBuZXcgQXJyYXkoYXJndW1lbnRzLmxlbmd0aCk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwLCBsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGw7IGkrKykge1xuICAgICAgICAgICAgICAgIGFyZ3NbaV0gPSBhcmd1bWVudHNbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBmdW5jcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgICAgIHZhciByZXN1bHQgPSBmdW5jc1tpXS5hcHBseShsYXN0UmVzdWx0LCBhcmdzKTtcblxuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcmVzdWx0ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgICAgICBsYXN0UmVzdWx0ID0gcmVzdWx0O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGxhc3RSZXN1bHQ7XG4gICAgICAgIH07XG5cbiAgICAgICAgY2hhaW4uX2NoYWluZWQgPSBmdW5jcztcblxuICAgICAgICByZXR1cm4gY2hhaW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENoYWlucyBhIGZ1bmN0aW9uIHRvIGV4Y3V0ZSBiZWZvcmUgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBgcGF0aGAgcmVsYXRpdmUgdG8gYGJhc2VgLlxuICAgICAqIFNlZSBhbHNvIGRvY3MgZm9yIGBDb21tb24uY2hhaW5gLlxuICAgICAqIEBtZXRob2QgY2hhaW5QYXRoQmVmb3JlXG4gICAgICogQHBhcmFtIHt9IGJhc2UgVGhlIGJhc2Ugb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYGJhc2VgXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hhaW4gYmVmb3JlIHRoZSBvcmlnaW5hbFxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2hhaW5lZCBmdW5jdGlvbiB0aGF0IHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxuICAgICAqL1xuICAgIENvbW1vbi5jaGFpblBhdGhCZWZvcmUgPSBmdW5jdGlvbihiYXNlLCBwYXRoLCBmdW5jKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uc2V0KGJhc2UsIHBhdGgsIENvbW1vbi5jaGFpbihcbiAgICAgICAgICAgIGZ1bmMsXG4gICAgICAgICAgICBDb21tb24uZ2V0KGJhc2UsIHBhdGgpXG4gICAgICAgICkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDaGFpbnMgYSBmdW5jdGlvbiB0byBleGN1dGUgYWZ0ZXIgdGhlIG9yaWdpbmFsIGZ1bmN0aW9uIG9uIHRoZSBnaXZlbiBgcGF0aGAgcmVsYXRpdmUgdG8gYGJhc2VgLlxuICAgICAqIFNlZSBhbHNvIGRvY3MgZm9yIGBDb21tb24uY2hhaW5gLlxuICAgICAqIEBtZXRob2QgY2hhaW5QYXRoQWZ0ZXJcbiAgICAgKiBAcGFyYW0ge30gYmFzZSBUaGUgYmFzZSBvYmplY3RcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgYmFzZWBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBmdW5jIFRoZSBmdW5jdGlvbiB0byBjaGFpbiBhZnRlciB0aGUgb3JpZ2luYWxcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGNoYWluZWQgZnVuY3Rpb24gdGhhdCByZXBsYWNlZCB0aGUgb3JpZ2luYWxcbiAgICAgKi9cbiAgICBDb21tb24uY2hhaW5QYXRoQWZ0ZXIgPSBmdW5jdGlvbihiYXNlLCBwYXRoLCBmdW5jKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uc2V0KGJhc2UsIHBhdGgsIENvbW1vbi5jaGFpbihcbiAgICAgICAgICAgIENvbW1vbi5nZXQoYmFzZSwgcGF0aCksXG4gICAgICAgICAgICBmdW5jXG4gICAgICAgICkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcm92aWRlIHRoZSBbcG9seS1kZWNvbXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9zY2h0ZXBwZS9wb2x5LWRlY29tcC5qcykgbGlicmFyeSBtb2R1bGUgdG8gZW5hYmxlXG4gICAgICogY29uY2F2ZSB2ZXJ0ZXggZGVjb21wb3NpdGlvbiBzdXBwb3J0IHdoZW4gdXNpbmcgYEJvZGllcy5mcm9tVmVydGljZXNgIGUuZy4gYENvbW1vbi5zZXREZWNvbXAocmVxdWlyZSgncG9seS1kZWNvbXAnKSlgLlxuICAgICAqIEBtZXRob2Qgc2V0RGVjb21wXG4gICAgICogQHBhcmFtIHt9IGRlY29tcCBUaGUgW3BvbHktZGVjb21wXShodHRwczovL2dpdGh1Yi5jb20vc2NodGVwcGUvcG9seS1kZWNvbXAuanMpIGxpYnJhcnkgbW9kdWxlLlxuICAgICAqL1xuICAgIENvbW1vbi5zZXREZWNvbXAgPSBmdW5jdGlvbihkZWNvbXApIHtcbiAgICAgICAgQ29tbW9uLl9kZWNvbXAgPSBkZWNvbXA7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIFtwb2x5LWRlY29tcF0oaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL3BvbHktZGVjb21wLmpzKSBsaWJyYXJ5IG1vZHVsZSBwcm92aWRlZCB0aHJvdWdoIGBDb21tb24uc2V0RGVjb21wYCxcbiAgICAgKiBvdGhlcndpc2UgcmV0dXJucyB0aGUgZ2xvYmFsIGBkZWNvbXBgIGlmIHNldC5cbiAgICAgKiBAbWV0aG9kIGdldERlY29tcFxuICAgICAqIEByZXR1cm4ge30gVGhlIFtwb2x5LWRlY29tcF0oaHR0cHM6Ly9naXRodWIuY29tL3NjaHRlcHBlL3BvbHktZGVjb21wLmpzKSBsaWJyYXJ5IG1vZHVsZSBpZiBwcm92aWRlZC5cbiAgICAgKi9cbiAgICBDb21tb24uZ2V0RGVjb21wID0gZnVuY3Rpb24oKSB7XG4gICAgICAgIC8vIGdldCB1c2VyIHByb3ZpZGVkIGRlY29tcCBpZiBzZXRcbiAgICAgICAgdmFyIGRlY29tcCA9IENvbW1vbi5fZGVjb21wO1xuXG4gICAgICAgIHRyeSB7XG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZnJvbSB3aW5kb3cgZ2xvYmFsXG4gICAgICAgICAgICBpZiAoIWRlY29tcCAmJiB0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIGRlY29tcCA9IHdpbmRvdy5kZWNvbXA7XG4gICAgICAgICAgICB9XG4gICAgXG4gICAgICAgICAgICAvLyBvdGhlcndpc2UgZnJvbSBub2RlIGdsb2JhbFxuICAgICAgICAgICAgaWYgKCFkZWNvbXAgJiYgdHlwZW9mIGdsb2JhbCAhPT0gJ3VuZGVmaW5lZCcpIHtcbiAgICAgICAgICAgICAgICBkZWNvbXAgPSBnbG9iYWwuZGVjb21wO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgICAgICAvLyBkZWNvbXAgbm90IGF2YWlsYWJsZVxuICAgICAgICAgICAgZGVjb21wID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBkZWNvbXA7XG4gICAgfTtcbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Cb3VuZHNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIGF4aXMtYWxpZ25lZCBib3VuZGluZyBib3hlcyAoQUFCQikuXG4qXG4qIEBjbGFzcyBCb3VuZHNcbiovXG5cbnZhciBCb3VuZHMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb3VuZHM7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgYXhpcy1hbGlnbmVkIGJvdW5kaW5nIGJveCAoQUFCQikgZm9yIHRoZSBnaXZlbiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7Ym91bmRzfSBBIG5ldyBib3VuZHMgb2JqZWN0XG4gICAgICovXG4gICAgQm91bmRzLmNyZWF0ZSA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBib3VuZHMgPSB7IFxuICAgICAgICAgICAgbWluOiB7IHg6IDAsIHk6IDAgfSwgXG4gICAgICAgICAgICBtYXg6IHsgeDogMCwgeTogMCB9XG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKHZlcnRpY2VzKVxuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShib3VuZHMsIHZlcnRpY2VzKTtcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBib3VuZHM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgYm91bmRzIHVzaW5nIHRoZSBnaXZlbiB2ZXJ0aWNlcyBhbmQgZXh0ZW5kcyB0aGUgYm91bmRzIGdpdmVuIGEgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb3VuZHMudXBkYXRlID0gZnVuY3Rpb24oYm91bmRzLCB2ZXJ0aWNlcywgdmVsb2NpdHkpIHtcbiAgICAgICAgYm91bmRzLm1pbi54ID0gSW5maW5pdHk7XG4gICAgICAgIGJvdW5kcy5tYXgueCA9IC1JbmZpbml0eTtcbiAgICAgICAgYm91bmRzLm1pbi55ID0gSW5maW5pdHk7XG4gICAgICAgIGJvdW5kcy5tYXgueSA9IC1JbmZpbml0eTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgdmVydGV4ID0gdmVydGljZXNbaV07XG4gICAgICAgICAgICBpZiAodmVydGV4LnggPiBib3VuZHMubWF4LngpIGJvdW5kcy5tYXgueCA9IHZlcnRleC54O1xuICAgICAgICAgICAgaWYgKHZlcnRleC54IDwgYm91bmRzLm1pbi54KSBib3VuZHMubWluLnggPSB2ZXJ0ZXgueDtcbiAgICAgICAgICAgIGlmICh2ZXJ0ZXgueSA+IGJvdW5kcy5tYXgueSkgYm91bmRzLm1heC55ID0gdmVydGV4Lnk7XG4gICAgICAgICAgICBpZiAodmVydGV4LnkgPCBib3VuZHMubWluLnkpIGJvdW5kcy5taW4ueSA9IHZlcnRleC55O1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAodmVsb2NpdHkpIHtcbiAgICAgICAgICAgIGlmICh2ZWxvY2l0eS54ID4gMCkge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5tYXgueCArPSB2ZWxvY2l0eS54O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBib3VuZHMubWluLnggKz0gdmVsb2NpdHkueDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgaWYgKHZlbG9jaXR5LnkgPiAwKSB7XG4gICAgICAgICAgICAgICAgYm91bmRzLm1heC55ICs9IHZlbG9jaXR5Lnk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGJvdW5kcy5taW4ueSArPSB2ZWxvY2l0eS55O1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgYm91bmRzIGNvbnRhaW5zIHRoZSBnaXZlbiBwb2ludC5cbiAgICAgKiBAbWV0aG9kIGNvbnRhaW5zXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGJvdW5kcyBjb250YWluIHRoZSBwb2ludCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgQm91bmRzLmNvbnRhaW5zID0gZnVuY3Rpb24oYm91bmRzLCBwb2ludCkge1xuICAgICAgICByZXR1cm4gcG9pbnQueCA+PSBib3VuZHMubWluLnggJiYgcG9pbnQueCA8PSBib3VuZHMubWF4LnggXG4gICAgICAgICAgICAgICAmJiBwb2ludC55ID49IGJvdW5kcy5taW4ueSAmJiBwb2ludC55IDw9IGJvdW5kcy5tYXgueTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0cnVlIGlmIHRoZSB0d28gYm91bmRzIGludGVyc2VjdC5cbiAgICAgKiBAbWV0aG9kIG92ZXJsYXBzXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc0FcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzQlxuICAgICAqIEByZXR1cm4ge2Jvb2xlYW59IFRydWUgaWYgdGhlIGJvdW5kcyBvdmVybGFwLCBvdGhlcndpc2UgZmFsc2VcbiAgICAgKi9cbiAgICBCb3VuZHMub3ZlcmxhcHMgPSBmdW5jdGlvbihib3VuZHNBLCBib3VuZHNCKSB7XG4gICAgICAgIHJldHVybiAoYm91bmRzQS5taW4ueCA8PSBib3VuZHNCLm1heC54ICYmIGJvdW5kc0EubWF4LnggPj0gYm91bmRzQi5taW4ueFxuICAgICAgICAgICAgICAgICYmIGJvdW5kc0EubWF4LnkgPj0gYm91bmRzQi5taW4ueSAmJiBib3VuZHNBLm1pbi55IDw9IGJvdW5kc0IubWF4LnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIHRoZSBib3VuZHMgYnkgdGhlIGdpdmVuIHZlY3Rvci5cbiAgICAgKiBAbWV0aG9kIHRyYW5zbGF0ZVxuICAgICAqIEBwYXJhbSB7Ym91bmRzfSBib3VuZHNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICovXG4gICAgQm91bmRzLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGJvdW5kcywgdmVjdG9yKSB7XG4gICAgICAgIGJvdW5kcy5taW4ueCArPSB2ZWN0b3IueDtcbiAgICAgICAgYm91bmRzLm1heC54ICs9IHZlY3Rvci54O1xuICAgICAgICBib3VuZHMubWluLnkgKz0gdmVjdG9yLnk7XG4gICAgICAgIGJvdW5kcy5tYXgueSArPSB2ZWN0b3IueTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2hpZnRzIHRoZSBib3VuZHMgdG8gdGhlIGdpdmVuIHBvc2l0aW9uLlxuICAgICAqIEBtZXRob2Qgc2hpZnRcbiAgICAgKiBAcGFyYW0ge2JvdW5kc30gYm91bmRzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvc2l0aW9uXG4gICAgICovXG4gICAgQm91bmRzLnNoaWZ0ID0gZnVuY3Rpb24oYm91bmRzLCBwb3NpdGlvbikge1xuICAgICAgICB2YXIgZGVsdGFYID0gYm91bmRzLm1heC54IC0gYm91bmRzLm1pbi54LFxuICAgICAgICAgICAgZGVsdGFZID0gYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55O1xuICAgICAgICAgICAgXG4gICAgICAgIGJvdW5kcy5taW4ueCA9IHBvc2l0aW9uLng7XG4gICAgICAgIGJvdW5kcy5tYXgueCA9IHBvc2l0aW9uLnggKyBkZWx0YVg7XG4gICAgICAgIGJvdW5kcy5taW4ueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgIGJvdW5kcy5tYXgueSA9IHBvc2l0aW9uLnkgKyBkZWx0YVk7XG4gICAgfTtcbiAgICBcbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5WZWN0b3JgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHZlY3RvcnMuXG4qIFZlY3RvcnMgYXJlIHRoZSBiYXNpcyBvZiBhbGwgdGhlIGdlb21ldHJ5IHJlbGF0ZWQgb3BlcmF0aW9ucyBpbiB0aGUgZW5naW5lLlxuKiBBIGBNYXR0ZXIuVmVjdG9yYCBvYmplY3QgaXMgb2YgdGhlIGZvcm0gYHsgeDogMCwgeTogMCB9YC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFZlY3RvclxuKi9cblxuLy8gVE9ETzogY29uc2lkZXIgcGFyYW1zIGZvciByZXVzaW5nIHZlY3RvciBvYmplY3RzXG5cbnZhciBWZWN0b3IgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZWN0b3I7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgdmVjdG9yLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yXG4gICAgICovXG4gICAgVmVjdG9yLmNyZWF0ZSA9IGZ1bmN0aW9uKHgsIHkpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogeCB8fCAwLCB5OiB5IHx8IDAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIG5ldyB2ZWN0b3Igd2l0aCBgeGAgYW5kIGB5YCBjb3BpZWQgZnJvbSB0aGUgZ2l2ZW4gYHZlY3RvcmAuXG4gICAgICogQG1ldGhvZCBjbG9uZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IGNsb25lZCB2ZWN0b3JcbiAgICAgKi9cbiAgICBWZWN0b3IuY2xvbmUgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogdmVjdG9yLngsIHk6IHZlY3Rvci55IH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG1hZ25pdHVkZSAobGVuZ3RoKSBvZiBhIHZlY3Rvci5cbiAgICAgKiBAbWV0aG9kIG1hZ25pdHVkZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBtYWduaXR1ZGUgb2YgdGhlIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5tYWduaXR1ZGUgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIE1hdGguc3FydCgodmVjdG9yLnggKiB2ZWN0b3IueCkgKyAodmVjdG9yLnkgKiB2ZWN0b3IueSkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtYWduaXR1ZGUgKGxlbmd0aCkgb2YgYSB2ZWN0b3IgKHRoZXJlZm9yZSBzYXZpbmcgYSBgc3FydGAgb3BlcmF0aW9uKS5cbiAgICAgKiBAbWV0aG9kIG1hZ25pdHVkZVNxdWFyZWRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgc3F1YXJlZCBtYWduaXR1ZGUgb2YgdGhlIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5tYWduaXR1ZGVTcXVhcmVkID0gZnVuY3Rpb24odmVjdG9yKSB7XG4gICAgICAgIHJldHVybiAodmVjdG9yLnggKiB2ZWN0b3IueCkgKyAodmVjdG9yLnkgKiB2ZWN0b3IueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHZlY3RvciBhYm91dCAoMCwgMCkgYnkgc3BlY2lmaWVkIGFuZ2xlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBhbmdsZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbb3V0cHV0XVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIHZlY3RvciByb3RhdGVkIGFib3V0ICgwLCAwKVxuICAgICAqL1xuICAgIFZlY3Rvci5yb3RhdGUgPSBmdW5jdGlvbih2ZWN0b3IsIGFuZ2xlLCBvdXRwdXQpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSwgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICBpZiAoIW91dHB1dCkgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciB4ID0gdmVjdG9yLnggKiBjb3MgLSB2ZWN0b3IueSAqIHNpbjtcbiAgICAgICAgb3V0cHV0LnkgPSB2ZWN0b3IueCAqIHNpbiArIHZlY3Rvci55ICogY29zO1xuICAgICAgICBvdXRwdXQueCA9IHg7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJvdGF0ZXMgdGhlIHZlY3RvciBhYm91dCBhIHNwZWNpZmllZCBwb2ludCBieSBzcGVjaWZpZWQgYW5nbGUuXG4gICAgICogQG1ldGhvZCByb3RhdGVBYm91dFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW291dHB1dF1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciByb3RhdGVkIGFib3V0IHRoZSBwb2ludFxuICAgICAqL1xuICAgIFZlY3Rvci5yb3RhdGVBYm91dCA9IGZ1bmN0aW9uKHZlY3RvciwgYW5nbGUsIHBvaW50LCBvdXRwdXQpIHtcbiAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKGFuZ2xlKSwgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuICAgICAgICBpZiAoIW91dHB1dCkgb3V0cHV0ID0ge307XG4gICAgICAgIHZhciB4ID0gcG9pbnQueCArICgodmVjdG9yLnggLSBwb2ludC54KSAqIGNvcyAtICh2ZWN0b3IueSAtIHBvaW50LnkpICogc2luKTtcbiAgICAgICAgb3V0cHV0LnkgPSBwb2ludC55ICsgKCh2ZWN0b3IueCAtIHBvaW50LngpICogc2luICsgKHZlY3Rvci55IC0gcG9pbnQueSkgKiBjb3MpO1xuICAgICAgICBvdXRwdXQueCA9IHg7XG4gICAgICAgIHJldHVybiBvdXRwdXQ7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE5vcm1hbGlzZXMgYSB2ZWN0b3IgKHN1Y2ggdGhhdCBpdHMgbWFnbml0dWRlIGlzIGAxYCkuXG4gICAgICogQG1ldGhvZCBub3JtYWxpc2VcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHJldHVybiB7dmVjdG9yfSBBIG5ldyB2ZWN0b3Igbm9ybWFsaXNlZFxuICAgICAqL1xuICAgIFZlY3Rvci5ub3JtYWxpc2UgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgdmFyIG1hZ25pdHVkZSA9IFZlY3Rvci5tYWduaXR1ZGUodmVjdG9yKTtcbiAgICAgICAgaWYgKG1hZ25pdHVkZSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybiB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgcmV0dXJuIHsgeDogdmVjdG9yLnggLyBtYWduaXR1ZGUsIHk6IHZlY3Rvci55IC8gbWFnbml0dWRlIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGRvdC1wcm9kdWN0IG9mIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2QgZG90XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGRvdCBwcm9kdWN0IG9mIHRoZSB0d28gdmVjdG9yc1xuICAgICAqL1xuICAgIFZlY3Rvci5kb3QgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgICAgIHJldHVybiAodmVjdG9yQS54ICogdmVjdG9yQi54KSArICh2ZWN0b3JBLnkgKiB2ZWN0b3JCLnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjcm9zcy1wcm9kdWN0IG9mIHR3byB2ZWN0b3JzLlxuICAgICAqIEBtZXRob2QgY3Jvc3NcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgY3Jvc3MgcHJvZHVjdCBvZiB0aGUgdHdvIHZlY3RvcnNcbiAgICAgKi9cbiAgICBWZWN0b3IuY3Jvc3MgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgICAgIHJldHVybiAodmVjdG9yQS54ICogdmVjdG9yQi55KSAtICh2ZWN0b3JBLnkgKiB2ZWN0b3JCLngpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBjcm9zcy1wcm9kdWN0IG9mIHRocmVlIHZlY3RvcnMuXG4gICAgICogQG1ldGhvZCBjcm9zczNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JCXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckNcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBjcm9zcyBwcm9kdWN0IG9mIHRoZSB0aHJlZSB2ZWN0b3JzXG4gICAgICovXG4gICAgVmVjdG9yLmNyb3NzMyA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIsIHZlY3RvckMpIHtcbiAgICAgICAgcmV0dXJuICh2ZWN0b3JCLnggLSB2ZWN0b3JBLngpICogKHZlY3RvckMueSAtIHZlY3RvckEueSkgLSAodmVjdG9yQi55IC0gdmVjdG9yQS55KSAqICh2ZWN0b3JDLnggLSB2ZWN0b3JBLngpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIHRoZSB0d28gdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIGFkZFxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW291dHB1dF1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBvZiB2ZWN0b3JBIGFuZCB2ZWN0b3JCIGFkZGVkXG4gICAgICovXG4gICAgVmVjdG9yLmFkZCA9IGZ1bmN0aW9uKHZlY3RvckEsIHZlY3RvckIsIG91dHB1dCkge1xuICAgICAgICBpZiAoIW91dHB1dCkgb3V0cHV0ID0ge307XG4gICAgICAgIG91dHB1dC54ID0gdmVjdG9yQS54ICsgdmVjdG9yQi54O1xuICAgICAgICBvdXRwdXQueSA9IHZlY3RvckEueSArIHZlY3RvckIueTtcbiAgICAgICAgcmV0dXJuIG91dHB1dDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU3VidHJhY3RzIHRoZSB0d28gdmVjdG9ycy5cbiAgICAgKiBAbWV0aG9kIHN1YlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JBXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckJcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW291dHB1dF1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IEEgbmV3IHZlY3RvciBvZiB2ZWN0b3JBIGFuZCB2ZWN0b3JCIHN1YnRyYWN0ZWRcbiAgICAgKi9cbiAgICBWZWN0b3Iuc3ViID0gZnVuY3Rpb24odmVjdG9yQSwgdmVjdG9yQiwgb3V0cHV0KSB7XG4gICAgICAgIGlmICghb3V0cHV0KSBvdXRwdXQgPSB7fTtcbiAgICAgICAgb3V0cHV0LnggPSB2ZWN0b3JBLnggLSB2ZWN0b3JCLng7XG4gICAgICAgIG91dHB1dC55ID0gdmVjdG9yQS55IC0gdmVjdG9yQi55O1xuICAgICAgICByZXR1cm4gb3V0cHV0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNdWx0aXBsaWVzIGEgdmVjdG9yIGFuZCBhIHNjYWxhci5cbiAgICAgKiBAbWV0aG9kIG11bHRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxhclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIG11bHRpcGxpZWQgYnkgc2NhbGFyXG4gICAgICovXG4gICAgVmVjdG9yLm11bHQgPSBmdW5jdGlvbih2ZWN0b3IsIHNjYWxhcikge1xuICAgICAgICByZXR1cm4geyB4OiB2ZWN0b3IueCAqIHNjYWxhciwgeTogdmVjdG9yLnkgKiBzY2FsYXIgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGl2aWRlcyBhIHZlY3RvciBhbmQgYSBzY2FsYXIuXG4gICAgICogQG1ldGhvZCBkaXZcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxhclxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gQSBuZXcgdmVjdG9yIGRpdmlkZWQgYnkgc2NhbGFyXG4gICAgICovXG4gICAgVmVjdG9yLmRpdiA9IGZ1bmN0aW9uKHZlY3Rvciwgc2NhbGFyKSB7XG4gICAgICAgIHJldHVybiB7IHg6IHZlY3Rvci54IC8gc2NhbGFyLCB5OiB2ZWN0b3IueSAvIHNjYWxhciB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBwZXJwZW5kaWN1bGFyIHZlY3Rvci4gU2V0IGBuZWdhdGVgIHRvIHRydWUgZm9yIHRoZSBwZXJwZW5kaWN1bGFyIGluIHRoZSBvcHBvc2l0ZSBkaXJlY3Rpb24uXG4gICAgICogQG1ldGhvZCBwZXJwXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvclxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW25lZ2F0ZT1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSBwZXJwZW5kaWN1bGFyIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5wZXJwID0gZnVuY3Rpb24odmVjdG9yLCBuZWdhdGUpIHtcbiAgICAgICAgbmVnYXRlID0gbmVnYXRlID09PSB0cnVlID8gLTEgOiAxO1xuICAgICAgICByZXR1cm4geyB4OiBuZWdhdGUgKiAtdmVjdG9yLnksIHk6IG5lZ2F0ZSAqIHZlY3Rvci54IH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE5lZ2F0ZXMgYm90aCBjb21wb25lbnRzIG9mIGEgdmVjdG9yIHN1Y2ggdGhhdCBpdCBwb2ludHMgaW4gdGhlIG9wcG9zaXRlIGRpcmVjdGlvbi5cbiAgICAgKiBAbWV0aG9kIG5lZ1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSBuZWdhdGVkIHZlY3RvclxuICAgICAqL1xuICAgIFZlY3Rvci5uZWcgPSBmdW5jdGlvbih2ZWN0b3IpIHtcbiAgICAgICAgcmV0dXJuIHsgeDogLXZlY3Rvci54LCB5OiAtdmVjdG9yLnkgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgYW5nbGUgYmV0d2VlbiB0aGUgdmVjdG9yIGB2ZWN0b3JCIC0gdmVjdG9yQWAgYW5kIHRoZSB4LWF4aXMgaW4gcmFkaWFucy5cbiAgICAgKiBAbWV0aG9kIGFuZ2xlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHZlY3RvckFcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVjdG9yQlxuICAgICAqIEByZXR1cm4ge251bWJlcn0gVGhlIGFuZ2xlIGluIHJhZGlhbnNcbiAgICAgKi9cbiAgICBWZWN0b3IuYW5nbGUgPSBmdW5jdGlvbih2ZWN0b3JBLCB2ZWN0b3JCKSB7XG4gICAgICAgIHJldHVybiBNYXRoLmF0YW4yKHZlY3RvckIueSAtIHZlY3RvckEueSwgdmVjdG9yQi54IC0gdmVjdG9yQS54KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGVtcG9yYXJ5IHZlY3RvciBwb29sIChub3QgdGhyZWFkLXNhZmUpLlxuICAgICAqIEBwcm9wZXJ0eSBfdGVtcFxuICAgICAqIEB0eXBlIHt2ZWN0b3JbXX1cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqL1xuICAgIFZlY3Rvci5fdGVtcCA9IFtcbiAgICAgICAgVmVjdG9yLmNyZWF0ZSgpLCBWZWN0b3IuY3JlYXRlKCksIFxuICAgICAgICBWZWN0b3IuY3JlYXRlKCksIFZlY3Rvci5jcmVhdGUoKSwgXG4gICAgICAgIFZlY3Rvci5jcmVhdGUoKSwgVmVjdG9yLmNyZWF0ZSgpXG4gICAgXTtcblxufSkoKTtcblxuLyoqKi8gfSksXG4vKiAzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5WZXJ0aWNlc2AgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgc2V0cyBvZiB2ZXJ0aWNlcy5cbiogQSBzZXQgb2YgdmVydGljZXMgaXMgYW4gYXJyYXkgb2YgYE1hdHRlci5WZWN0b3JgIHdpdGggYWRkaXRpb25hbCBpbmRleGluZyBwcm9wZXJ0aWVzIGluc2VydGVkIGJ5IGBWZXJ0aWNlcy5jcmVhdGVgLlxuKiBBIGBNYXR0ZXIuQm9keWAgbWFpbnRhaW5zIGEgc2V0IG9mIHZlcnRpY2VzIHRvIHJlcHJlc2VudCB0aGUgc2hhcGUgb2YgdGhlIG9iamVjdCAoaXRzIGNvbnZleCBodWxsKS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFZlcnRpY2VzXG4qL1xuXG52YXIgVmVydGljZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBWZXJ0aWNlcztcblxudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzZXQgb2YgYE1hdHRlci5Cb2R5YCBjb21wYXRpYmxlIHZlcnRpY2VzLlxuICAgICAqIFRoZSBgcG9pbnRzYCBhcmd1bWVudCBhY2NlcHRzIGFuIGFycmF5IG9mIGBNYXR0ZXIuVmVjdG9yYCBwb2ludHMgb3JpZW50YXRlZCBhcm91bmQgdGhlIG9yaWdpbiBgKDAsIDApYCwgZm9yIGV4YW1wbGU6XG4gICAgICpcbiAgICAgKiAgICAgW3sgeDogMCwgeTogMCB9LCB7IHg6IDI1LCB5OiA1MCB9LCB7IHg6IDUwLCB5OiAwIH1dXG4gICAgICpcbiAgICAgKiBUaGUgYFZlcnRpY2VzLmNyZWF0ZWAgbWV0aG9kIHJldHVybnMgYSBuZXcgYXJyYXkgb2YgdmVydGljZXMsIHdoaWNoIGFyZSBzaW1pbGFyIHRvIE1hdHRlci5WZWN0b3Igb2JqZWN0cyxcbiAgICAgKiBidXQgd2l0aCBzb21lIGFkZGl0aW9uYWwgcmVmZXJlbmNlcyByZXF1aXJlZCBmb3IgZWZmaWNpZW50IGNvbGxpc2lvbiBkZXRlY3Rpb24gcm91dGluZXMuXG4gICAgICpcbiAgICAgKiBWZXJ0aWNlcyBtdXN0IGJlIHNwZWNpZmllZCBpbiBjbG9ja3dpc2Ugb3JkZXIuXG4gICAgICpcbiAgICAgKiBOb3RlIHRoYXQgdGhlIGBib2R5YCBhcmd1bWVudCBpcyBub3Qgb3B0aW9uYWwsIGEgYE1hdHRlci5Cb2R5YCByZWZlcmVuY2UgbXVzdCBiZSBwcm92aWRlZC5cbiAgICAgKlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt2ZWN0b3JbXX0gcG9pbnRzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICovXG4gICAgVmVydGljZXMuY3JlYXRlID0gZnVuY3Rpb24ocG9pbnRzLCBib2R5KSB7XG4gICAgICAgIHZhciB2ZXJ0aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcG9pbnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcG9pbnQgPSBwb2ludHNbaV0sXG4gICAgICAgICAgICAgICAgdmVydGV4ID0ge1xuICAgICAgICAgICAgICAgICAgICB4OiBwb2ludC54LFxuICAgICAgICAgICAgICAgICAgICB5OiBwb2ludC55LFxuICAgICAgICAgICAgICAgICAgICBpbmRleDogaSxcbiAgICAgICAgICAgICAgICAgICAgYm9keTogYm9keSxcbiAgICAgICAgICAgICAgICAgICAgaXNJbnRlcm5hbDogZmFsc2VcbiAgICAgICAgICAgICAgICB9O1xuXG4gICAgICAgICAgICB2ZXJ0aWNlcy5wdXNoKHZlcnRleCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBhcnNlcyBhIHN0cmluZyBjb250YWluaW5nIG9yZGVyZWQgeCB5IHBhaXJzIHNlcGFyYXRlZCBieSBzcGFjZXMgKGFuZCBvcHRpb25hbGx5IGNvbW1hcyksIFxuICAgICAqIGludG8gYSBgTWF0dGVyLlZlcnRpY2VzYCBvYmplY3QgZm9yIHRoZSBnaXZlbiBgTWF0dGVyLkJvZHlgLlxuICAgICAqIEZvciBwYXJzaW5nIFNWRyBwYXRocywgc2VlIGBTdmcucGF0aFRvVmVydGljZXNgLlxuICAgICAqIEBtZXRob2QgZnJvbVBhdGhcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIFZlcnRpY2VzLmZyb21QYXRoID0gZnVuY3Rpb24ocGF0aCwgYm9keSkge1xuICAgICAgICB2YXIgcGF0aFBhdHRlcm4gPSAvTD9cXHMqKFstXFxkLmVdKylbXFxzLF0qKFstXFxkLmVdKykqL2lnLFxuICAgICAgICAgICAgcG9pbnRzID0gW107XG5cbiAgICAgICAgcGF0aC5yZXBsYWNlKHBhdGhQYXR0ZXJuLCBmdW5jdGlvbihtYXRjaCwgeCwgeSkge1xuICAgICAgICAgICAgcG9pbnRzLnB1c2goeyB4OiBwYXJzZUZsb2F0KHgpLCB5OiBwYXJzZUZsb2F0KHkpIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gVmVydGljZXMuY3JlYXRlKHBvaW50cywgYm9keSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGNlbnRyZSAoY2VudHJvaWQpIG9mIHRoZSBzZXQgb2YgdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBjZW50cmVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gVGhlIGNlbnRyZSBwb2ludFxuICAgICAqL1xuICAgIFZlcnRpY2VzLmNlbnRyZSA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBhcmVhID0gVmVydGljZXMuYXJlYSh2ZXJ0aWNlcywgdHJ1ZSksXG4gICAgICAgICAgICBjZW50cmUgPSB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGNyb3NzLFxuICAgICAgICAgICAgdGVtcCxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgaiA9IChpICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGg7XG4gICAgICAgICAgICBjcm9zcyA9IFZlY3Rvci5jcm9zcyh2ZXJ0aWNlc1tpXSwgdmVydGljZXNbal0pO1xuICAgICAgICAgICAgdGVtcCA9IFZlY3Rvci5tdWx0KFZlY3Rvci5hZGQodmVydGljZXNbaV0sIHZlcnRpY2VzW2pdKSwgY3Jvc3MpO1xuICAgICAgICAgICAgY2VudHJlID0gVmVjdG9yLmFkZChjZW50cmUsIHRlbXApO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIFZlY3Rvci5kaXYoY2VudHJlLCA2ICogYXJlYSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGF2ZXJhZ2UgKG1lYW4pIG9mIHRoZSBzZXQgb2YgdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBtZWFuXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcmV0dXJuIHt2ZWN0b3J9IFRoZSBhdmVyYWdlIHBvaW50XG4gICAgICovXG4gICAgVmVydGljZXMubWVhbiA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBhdmVyYWdlID0geyB4OiAwLCB5OiAwIH07XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2ZXJ0aWNlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYXZlcmFnZS54ICs9IHZlcnRpY2VzW2ldLng7XG4gICAgICAgICAgICBhdmVyYWdlLnkgKz0gdmVydGljZXNbaV0ueTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBWZWN0b3IuZGl2KGF2ZXJhZ2UsIHZlcnRpY2VzLmxlbmd0aCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGFyZWEgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGFyZWFcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gc2lnbmVkXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgYXJlYVxuICAgICAqL1xuICAgIFZlcnRpY2VzLmFyZWEgPSBmdW5jdGlvbih2ZXJ0aWNlcywgc2lnbmVkKSB7XG4gICAgICAgIHZhciBhcmVhID0gMCxcbiAgICAgICAgICAgIGogPSB2ZXJ0aWNlcy5sZW5ndGggLSAxO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGFyZWEgKz0gKHZlcnRpY2VzW2pdLnggLSB2ZXJ0aWNlc1tpXS54KSAqICh2ZXJ0aWNlc1tqXS55ICsgdmVydGljZXNbaV0ueSk7XG4gICAgICAgICAgICBqID0gaTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChzaWduZWQpXG4gICAgICAgICAgICByZXR1cm4gYXJlYSAvIDI7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguYWJzKGFyZWEpIC8gMjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbW9tZW50IG9mIGluZXJ0aWEgKHNlY29uZCBtb21lbnQgb2YgYXJlYSkgb2YgdGhlIHNldCBvZiB2ZXJ0aWNlcyBnaXZlbiB0aGUgdG90YWwgbWFzcy5cbiAgICAgKiBAbWV0aG9kIGluZXJ0aWFcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBtYXNzXG4gICAgICogQHJldHVybiB7bnVtYmVyfSBUaGUgcG9seWdvbidzIG1vbWVudCBvZiBpbmVydGlhXG4gICAgICovXG4gICAgVmVydGljZXMuaW5lcnRpYSA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBtYXNzKSB7XG4gICAgICAgIHZhciBudW1lcmF0b3IgPSAwLFxuICAgICAgICAgICAgZGVub21pbmF0b3IgPSAwLFxuICAgICAgICAgICAgdiA9IHZlcnRpY2VzLFxuICAgICAgICAgICAgY3Jvc3MsXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHBvbHlnb24ncyBtb21lbnQgb2YgaW5lcnRpYSwgdXNpbmcgc2Vjb25kIG1vbWVudCBvZiBhcmVhXG4gICAgICAgIC8vIGZyb20gZXF1YXRpb25zIGF0IGh0dHA6Ly93d3cucGh5c2ljc2ZvcnVtcy5jb20vc2hvd3RocmVhZC5waHA/dD0yNTI5M1xuICAgICAgICBmb3IgKHZhciBuID0gMDsgbiA8IHYubGVuZ3RoOyBuKyspIHtcbiAgICAgICAgICAgIGogPSAobiArIDEpICUgdi5sZW5ndGg7XG4gICAgICAgICAgICBjcm9zcyA9IE1hdGguYWJzKFZlY3Rvci5jcm9zcyh2W2pdLCB2W25dKSk7XG4gICAgICAgICAgICBudW1lcmF0b3IgKz0gY3Jvc3MgKiAoVmVjdG9yLmRvdCh2W2pdLCB2W2pdKSArIFZlY3Rvci5kb3QodltqXSwgdltuXSkgKyBWZWN0b3IuZG90KHZbbl0sIHZbbl0pKTtcbiAgICAgICAgICAgIGRlbm9taW5hdG9yICs9IGNyb3NzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIChtYXNzIC8gNikgKiAobnVtZXJhdG9yIC8gZGVub21pbmF0b3IpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIHRoZSBzZXQgb2YgdmVydGljZXMgaW4tcGxhY2UuXG4gICAgICogQG1ldGhvZCB0cmFuc2xhdGVcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSB2ZWN0b3JcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGFyXG4gICAgICovXG4gICAgVmVydGljZXMudHJhbnNsYXRlID0gZnVuY3Rpb24odmVydGljZXMsIHZlY3Rvciwgc2NhbGFyKSB7XG4gICAgICAgIHNjYWxhciA9IHR5cGVvZiBzY2FsYXIgIT09ICd1bmRlZmluZWQnID8gc2NhbGFyIDogMTtcblxuICAgICAgICB2YXIgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgICB0cmFuc2xhdGVYID0gdmVjdG9yLnggKiBzY2FsYXIsXG4gICAgICAgICAgICB0cmFuc2xhdGVZID0gdmVjdG9yLnkgKiBzY2FsYXIsXG4gICAgICAgICAgICBpO1xuICAgICAgICBcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHZlcnRpY2VzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZlcnRpY2VzW2ldLnggKz0gdHJhbnNsYXRlWDtcbiAgICAgICAgICAgIHZlcnRpY2VzW2ldLnkgKz0gdHJhbnNsYXRlWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUm90YXRlcyB0aGUgc2V0IG9mIHZlcnRpY2VzIGluLXBsYWNlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gYW5nbGVcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5yb3RhdGUgPSBmdW5jdGlvbih2ZXJ0aWNlcywgYW5nbGUsIHBvaW50KSB7XG4gICAgICAgIGlmIChhbmdsZSA9PT0gMClcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpLFxuICAgICAgICAgICAgcG9pbnRYID0gcG9pbnQueCxcbiAgICAgICAgICAgIHBvaW50WSA9IHBvaW50LnksXG4gICAgICAgICAgICB2ZXJ0aWNlc0xlbmd0aCA9IHZlcnRpY2VzLmxlbmd0aCxcbiAgICAgICAgICAgIHZlcnRleCxcbiAgICAgICAgICAgIGR4LFxuICAgICAgICAgICAgZHksXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCB2ZXJ0aWNlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgIGR4ID0gdmVydGV4LnggLSBwb2ludFg7XG4gICAgICAgICAgICBkeSA9IHZlcnRleC55IC0gcG9pbnRZO1xuICAgICAgICAgICAgdmVydGV4LnggPSBwb2ludFggKyAoZHggKiBjb3MgLSBkeSAqIHNpbik7XG4gICAgICAgICAgICB2ZXJ0ZXgueSA9IHBvaW50WSArIChkeCAqIHNpbiArIGR5ICogY29zKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgdGhlIGBwb2ludGAgaXMgaW5zaWRlIHRoZSBzZXQgb2YgYHZlcnRpY2VzYC5cbiAgICAgKiBAbWV0aG9kIGNvbnRhaW5zXG4gICAgICogQHBhcmFtIHt2ZXJ0aWNlc30gdmVydGljZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBUcnVlIGlmIHRoZSB2ZXJ0aWNlcyBjb250YWlucyBwb2ludCwgb3RoZXJ3aXNlIGZhbHNlXG4gICAgICovXG4gICAgVmVydGljZXMuY29udGFpbnMgPSBmdW5jdGlvbih2ZXJ0aWNlcywgcG9pbnQpIHtcbiAgICAgICAgdmFyIHBvaW50WCA9IHBvaW50LngsXG4gICAgICAgICAgICBwb2ludFkgPSBwb2ludC55LFxuICAgICAgICAgICAgdmVydGljZXNMZW5ndGggPSB2ZXJ0aWNlcy5sZW5ndGgsXG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1t2ZXJ0aWNlc0xlbmd0aCAtIDFdLFxuICAgICAgICAgICAgbmV4dFZlcnRleDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG5leHRWZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcblxuICAgICAgICAgICAgaWYgKChwb2ludFggLSB2ZXJ0ZXgueCkgKiAobmV4dFZlcnRleC55IC0gdmVydGV4LnkpIFxuICAgICAgICAgICAgICAgICsgKHBvaW50WSAtIHZlcnRleC55KSAqICh2ZXJ0ZXgueCAtIG5leHRWZXJ0ZXgueCkgPiAwKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2ZXJ0ZXggPSBuZXh0VmVydGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNjYWxlcyB0aGUgdmVydGljZXMgZnJvbSBhIHBvaW50IChkZWZhdWx0IGlzIGNlbnRyZSkgaW4tcGxhY2UuXG4gICAgICogQG1ldGhvZCBzY2FsZVxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzY2FsZVlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5zY2FsZSA9IGZ1bmN0aW9uKHZlcnRpY2VzLCBzY2FsZVgsIHNjYWxlWSwgcG9pbnQpIHtcbiAgICAgICAgaWYgKHNjYWxlWCA9PT0gMSAmJiBzY2FsZVkgPT09IDEpXG4gICAgICAgICAgICByZXR1cm4gdmVydGljZXM7XG5cbiAgICAgICAgcG9pbnQgPSBwb2ludCB8fCBWZXJ0aWNlcy5jZW50cmUodmVydGljZXMpO1xuXG4gICAgICAgIHZhciB2ZXJ0ZXgsXG4gICAgICAgICAgICBkZWx0YTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHZlcnRpY2VzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcbiAgICAgICAgICAgIGRlbHRhID0gVmVjdG9yLnN1Yih2ZXJ0ZXgsIHBvaW50KTtcbiAgICAgICAgICAgIHZlcnRpY2VzW2ldLnggPSBwb2ludC54ICsgZGVsdGEueCAqIHNjYWxlWDtcbiAgICAgICAgICAgIHZlcnRpY2VzW2ldLnkgPSBwb2ludC55ICsgZGVsdGEueSAqIHNjYWxlWTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2hhbWZlcnMgYSBzZXQgb2YgdmVydGljZXMgYnkgZ2l2aW5nIHRoZW0gcm91bmRlZCBjb3JuZXJzLCByZXR1cm5zIGEgbmV3IHNldCBvZiB2ZXJ0aWNlcy5cbiAgICAgKiBUaGUgcmFkaXVzIHBhcmFtZXRlciBpcyBhIHNpbmdsZSBudW1iZXIgb3IgYW4gYXJyYXkgdG8gc3BlY2lmeSB0aGUgcmFkaXVzIGZvciBlYWNoIHZlcnRleC5cbiAgICAgKiBAbWV0aG9kIGNoYW1mZXJcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyW119IHJhZGl1c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBxdWFsaXR5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHF1YWxpdHlNaW5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcXVhbGl0eU1heFxuICAgICAqL1xuICAgIFZlcnRpY2VzLmNoYW1mZXIgPSBmdW5jdGlvbih2ZXJ0aWNlcywgcmFkaXVzLCBxdWFsaXR5LCBxdWFsaXR5TWluLCBxdWFsaXR5TWF4KSB7XG4gICAgICAgIGlmICh0eXBlb2YgcmFkaXVzID09PSAnbnVtYmVyJykge1xuICAgICAgICAgICAgcmFkaXVzID0gW3JhZGl1c107XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByYWRpdXMgPSByYWRpdXMgfHwgWzhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcXVhbGl0eSBkZWZhdWx0cyB0byAtMSwgd2hpY2ggaXMgYXV0b1xuICAgICAgICBxdWFsaXR5ID0gKHR5cGVvZiBxdWFsaXR5ICE9PSAndW5kZWZpbmVkJykgPyBxdWFsaXR5IDogLTE7XG4gICAgICAgIHF1YWxpdHlNaW4gPSBxdWFsaXR5TWluIHx8IDI7XG4gICAgICAgIHF1YWxpdHlNYXggPSBxdWFsaXR5TWF4IHx8IDE0O1xuXG4gICAgICAgIHZhciBuZXdWZXJ0aWNlcyA9IFtdO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwcmV2VmVydGV4ID0gdmVydGljZXNbaSAtIDEgPj0gMCA/IGkgLSAxIDogdmVydGljZXMubGVuZ3RoIC0gMV0sXG4gICAgICAgICAgICAgICAgdmVydGV4ID0gdmVydGljZXNbaV0sXG4gICAgICAgICAgICAgICAgbmV4dFZlcnRleCA9IHZlcnRpY2VzWyhpICsgMSkgJSB2ZXJ0aWNlcy5sZW5ndGhdLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRSYWRpdXMgPSByYWRpdXNbaSA8IHJhZGl1cy5sZW5ndGggPyBpIDogcmFkaXVzLmxlbmd0aCAtIDFdO1xuXG4gICAgICAgICAgICBpZiAoY3VycmVudFJhZGl1cyA9PT0gMCkge1xuICAgICAgICAgICAgICAgIG5ld1ZlcnRpY2VzLnB1c2godmVydGV4KTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIHByZXZOb3JtYWwgPSBWZWN0b3Iubm9ybWFsaXNlKHsgXG4gICAgICAgICAgICAgICAgeDogdmVydGV4LnkgLSBwcmV2VmVydGV4LnksIFxuICAgICAgICAgICAgICAgIHk6IHByZXZWZXJ0ZXgueCAtIHZlcnRleC54XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIG5leHROb3JtYWwgPSBWZWN0b3Iubm9ybWFsaXNlKHsgXG4gICAgICAgICAgICAgICAgeDogbmV4dFZlcnRleC55IC0gdmVydGV4LnksIFxuICAgICAgICAgICAgICAgIHk6IHZlcnRleC54IC0gbmV4dFZlcnRleC54XG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgdmFyIGRpYWdvbmFsUmFkaXVzID0gTWF0aC5zcXJ0KDIgKiBNYXRoLnBvdyhjdXJyZW50UmFkaXVzLCAyKSksXG4gICAgICAgICAgICAgICAgcmFkaXVzVmVjdG9yID0gVmVjdG9yLm11bHQoQ29tbW9uLmNsb25lKHByZXZOb3JtYWwpLCBjdXJyZW50UmFkaXVzKSxcbiAgICAgICAgICAgICAgICBtaWROb3JtYWwgPSBWZWN0b3Iubm9ybWFsaXNlKFZlY3Rvci5tdWx0KFZlY3Rvci5hZGQocHJldk5vcm1hbCwgbmV4dE5vcm1hbCksIDAuNSkpLFxuICAgICAgICAgICAgICAgIHNjYWxlZFZlcnRleCA9IFZlY3Rvci5zdWIodmVydGV4LCBWZWN0b3IubXVsdChtaWROb3JtYWwsIGRpYWdvbmFsUmFkaXVzKSk7XG5cbiAgICAgICAgICAgIHZhciBwcmVjaXNpb24gPSBxdWFsaXR5O1xuXG4gICAgICAgICAgICBpZiAocXVhbGl0eSA9PT0gLTEpIHtcbiAgICAgICAgICAgICAgICAvLyBhdXRvbWF0aWNhbGx5IGRlY2lkZSBwcmVjaXNpb25cbiAgICAgICAgICAgICAgICBwcmVjaXNpb24gPSBNYXRoLnBvdyhjdXJyZW50UmFkaXVzLCAwLjMyKSAqIDEuNzU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHByZWNpc2lvbiA9IENvbW1vbi5jbGFtcChwcmVjaXNpb24sIHF1YWxpdHlNaW4sIHF1YWxpdHlNYXgpO1xuXG4gICAgICAgICAgICAvLyB1c2UgYW4gZXZlbiB2YWx1ZSBmb3IgcHJlY2lzaW9uLCBtb3JlIGxpa2VseSB0byByZWR1Y2UgYXhlcyBieSB1c2luZyBzeW1tZXRyeVxuICAgICAgICAgICAgaWYgKHByZWNpc2lvbiAlIDIgPT09IDEpXG4gICAgICAgICAgICAgICAgcHJlY2lzaW9uICs9IDE7XG5cbiAgICAgICAgICAgIHZhciBhbHBoYSA9IE1hdGguYWNvcyhWZWN0b3IuZG90KHByZXZOb3JtYWwsIG5leHROb3JtYWwpKSxcbiAgICAgICAgICAgICAgICB0aGV0YSA9IGFscGhhIC8gcHJlY2lzaW9uO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IHByZWNpc2lvbjsgaisrKSB7XG4gICAgICAgICAgICAgICAgbmV3VmVydGljZXMucHVzaChWZWN0b3IuYWRkKFZlY3Rvci5yb3RhdGUocmFkaXVzVmVjdG9yLCB0aGV0YSAqIGopLCBzY2FsZWRWZXJ0ZXgpKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBuZXdWZXJ0aWNlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU29ydHMgdGhlIGlucHV0IHZlcnRpY2VzIGludG8gY2xvY2t3aXNlIG9yZGVyIGluIHBsYWNlLlxuICAgICAqIEBtZXRob2QgY2xvY2t3aXNlU29ydFxuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICovXG4gICAgVmVydGljZXMuY2xvY2t3aXNlU29ydCA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIHZhciBjZW50cmUgPSBWZXJ0aWNlcy5tZWFuKHZlcnRpY2VzKTtcblxuICAgICAgICB2ZXJ0aWNlcy5zb3J0KGZ1bmN0aW9uKHZlcnRleEEsIHZlcnRleEIpIHtcbiAgICAgICAgICAgIHJldHVybiBWZWN0b3IuYW5nbGUoY2VudHJlLCB2ZXJ0ZXhBKSAtIFZlY3Rvci5hbmdsZShjZW50cmUsIHZlcnRleEIpO1xuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gdmVydGljZXM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdHJ1ZSBpZiB0aGUgdmVydGljZXMgZm9ybSBhIGNvbnZleCBzaGFwZSAodmVydGljZXMgbXVzdCBiZSBpbiBjbG9ja3dpc2Ugb3JkZXIpLlxuICAgICAqIEBtZXRob2QgaXNDb252ZXhcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4ge2Jvb2x9IGB0cnVlYCBpZiB0aGUgYHZlcnRpY2VzYCBhcmUgY29udmV4LCBgZmFsc2VgIGlmIG5vdCAob3IgYG51bGxgIGlmIG5vdCBjb21wdXRhYmxlKS5cbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5pc0NvbnZleCA9IGZ1bmN0aW9uKHZlcnRpY2VzKSB7XG4gICAgICAgIC8vIGh0dHA6Ly9wYXVsYm91cmtlLm5ldC9nZW9tZXRyeS9wb2x5Z29ubWVzaC9cbiAgICAgICAgLy8gQ29weXJpZ2h0IChjKSBQYXVsIEJvdXJrZSAodXNlIHBlcm1pdHRlZClcblxuICAgICAgICB2YXIgZmxhZyA9IDAsXG4gICAgICAgICAgICBuID0gdmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrLFxuICAgICAgICAgICAgejtcblxuICAgICAgICBpZiAobiA8IDMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgbjsgaSsrKSB7XG4gICAgICAgICAgICBqID0gKGkgKyAxKSAlIG47XG4gICAgICAgICAgICBrID0gKGkgKyAyKSAlIG47XG4gICAgICAgICAgICB6ID0gKHZlcnRpY2VzW2pdLnggLSB2ZXJ0aWNlc1tpXS54KSAqICh2ZXJ0aWNlc1trXS55IC0gdmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICB6IC09ICh2ZXJ0aWNlc1tqXS55IC0gdmVydGljZXNbaV0ueSkgKiAodmVydGljZXNba10ueCAtIHZlcnRpY2VzW2pdLngpO1xuXG4gICAgICAgICAgICBpZiAoeiA8IDApIHtcbiAgICAgICAgICAgICAgICBmbGFnIHw9IDE7XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHogPiAwKSB7XG4gICAgICAgICAgICAgICAgZmxhZyB8PSAyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoZmxhZyA9PT0gMykge1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChmbGFnICE9PSAwKXtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgY29udmV4IGh1bGwgb2YgdGhlIGlucHV0IHZlcnRpY2VzIGFzIGEgbmV3IGFycmF5IG9mIHBvaW50cy5cbiAgICAgKiBAbWV0aG9kIGh1bGxcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc1xuICAgICAqIEByZXR1cm4gW3ZlcnRleF0gdmVydGljZXNcbiAgICAgKi9cbiAgICBWZXJ0aWNlcy5odWxsID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgLy8gaHR0cDovL2dlb21hbGdvcml0aG1zLmNvbS9hMTAtX2h1bGwtMS5odG1sXG5cbiAgICAgICAgdmFyIHVwcGVyID0gW10sXG4gICAgICAgICAgICBsb3dlciA9IFtdLCBcbiAgICAgICAgICAgIHZlcnRleCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gc29ydCB2ZXJ0aWNlcyBvbiB4LWF4aXMgKHktYXhpcyBmb3IgdGllcylcbiAgICAgICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5zbGljZSgwKTtcbiAgICAgICAgdmVydGljZXMuc29ydChmdW5jdGlvbih2ZXJ0ZXhBLCB2ZXJ0ZXhCKSB7XG4gICAgICAgICAgICB2YXIgZHggPSB2ZXJ0ZXhBLnggLSB2ZXJ0ZXhCLng7XG4gICAgICAgICAgICByZXR1cm4gZHggIT09IDAgPyBkeCA6IHZlcnRleEEueSAtIHZlcnRleEIueTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gYnVpbGQgbG93ZXIgaHVsbFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZlcnRleCA9IHZlcnRpY2VzW2ldO1xuXG4gICAgICAgICAgICB3aGlsZSAobG93ZXIubGVuZ3RoID49IDIgXG4gICAgICAgICAgICAgICAgICAgJiYgVmVjdG9yLmNyb3NzMyhsb3dlcltsb3dlci5sZW5ndGggLSAyXSwgbG93ZXJbbG93ZXIubGVuZ3RoIC0gMV0sIHZlcnRleCkgPD0gMCkge1xuICAgICAgICAgICAgICAgIGxvd2VyLnBvcCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBsb3dlci5wdXNoKHZlcnRleCk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBidWlsZCB1cHBlciBodWxsXG4gICAgICAgIGZvciAoaSA9IHZlcnRpY2VzLmxlbmd0aCAtIDE7IGkgPj0gMDsgaSAtPSAxKSB7XG4gICAgICAgICAgICB2ZXJ0ZXggPSB2ZXJ0aWNlc1tpXTtcblxuICAgICAgICAgICAgd2hpbGUgKHVwcGVyLmxlbmd0aCA+PSAyIFxuICAgICAgICAgICAgICAgICAgICYmIFZlY3Rvci5jcm9zczModXBwZXJbdXBwZXIubGVuZ3RoIC0gMl0sIHVwcGVyW3VwcGVyLmxlbmd0aCAtIDFdLCB2ZXJ0ZXgpIDw9IDApIHtcbiAgICAgICAgICAgICAgICB1cHBlci5wb3AoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdXBwZXIucHVzaCh2ZXJ0ZXgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gY29uY2F0ZW5hdGlvbiBvZiB0aGUgbG93ZXIgYW5kIHVwcGVyIGh1bGxzIGdpdmVzIHRoZSBjb252ZXggaHVsbFxuICAgICAgICAvLyBvbWl0IGxhc3QgcG9pbnRzIGJlY2F1c2UgdGhleSBhcmUgcmVwZWF0ZWQgYXQgdGhlIGJlZ2lubmluZyBvZiB0aGUgb3RoZXIgbGlzdFxuICAgICAgICB1cHBlci5wb3AoKTtcbiAgICAgICAgbG93ZXIucG9wKCk7XG5cbiAgICAgICAgcmV0dXJuIHVwcGVyLmNvbmNhdChsb3dlcik7XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHJpZ2lkIGJvZGllcy5cbiogRm9yIGNyZWF0aW5nIGJvZGllcyB3aXRoIGNvbW1vbiBjb25maWd1cmF0aW9ucyBzdWNoIGFzIHJlY3RhbmdsZXMsIGNpcmNsZXMgYW5kIG90aGVyIHBvbHlnb25zIHNlZSB0aGUgbW9kdWxlIGBNYXR0ZXIuQm9kaWVzYC5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cblxuKiBAY2xhc3MgQm9keVxuKi9cblxudmFyIEJvZHkgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBCb2R5O1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgU2xlZXBpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBBeGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIEJvZHkuX3RpbWVDb3JyZWN0aW9uID0gdHJ1ZTtcbiAgICBCb2R5Ll9pbmVydGlhU2NhbGUgPSA0O1xuICAgIEJvZHkuX25leHRDb2xsaWRpbmdHcm91cElkID0gMTtcbiAgICBCb2R5Ll9uZXh0Tm9uQ29sbGlkaW5nR3JvdXBJZCA9IC0xO1xuICAgIEJvZHkuX25leHRDYXRlZ29yeSA9IDB4MDAwMTtcbiAgICBCb2R5Ll9iYXNlRGVsdGEgPSAxMDAwIC8gNjA7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJpZ2lkIGJvZHkgbW9kZWwuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogVmVydGljZXMgbXVzdCBiZSBzcGVjaWZpZWQgaW4gY2xvY2t3aXNlIG9yZGVyLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2JvZHl9IGJvZHlcbiAgICAgKi9cbiAgICBCb2R5LmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgaWQ6IENvbW1vbi5uZXh0SWQoKSxcbiAgICAgICAgICAgIHR5cGU6ICdib2R5JyxcbiAgICAgICAgICAgIGxhYmVsOiAnQm9keScsXG4gICAgICAgICAgICBwYXJ0czogW10sXG4gICAgICAgICAgICBwbHVnaW46IHt9LFxuICAgICAgICAgICAgYW5nbGU6IDAsXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgoJ0wgMCAwIEwgNDAgMCBMIDQwIDQwIEwgMCA0MCcpLFxuICAgICAgICAgICAgcG9zaXRpb246IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgZm9yY2U6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgdG9ycXVlOiAwLFxuICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRJbXB1bHNlOiB7IHg6IDAsIHk6IDAsIGFuZ2xlOiAwIH0sXG4gICAgICAgICAgICB0b3RhbENvbnRhY3RzOiAwLFxuICAgICAgICAgICAgc3BlZWQ6IDAsXG4gICAgICAgICAgICBhbmd1bGFyU3BlZWQ6IDAsXG4gICAgICAgICAgICB2ZWxvY2l0eTogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBhbmd1bGFyVmVsb2NpdHk6IDAsXG4gICAgICAgICAgICBpc1NlbnNvcjogZmFsc2UsXG4gICAgICAgICAgICBpc1N0YXRpYzogZmFsc2UsXG4gICAgICAgICAgICBpc1NsZWVwaW5nOiBmYWxzZSxcbiAgICAgICAgICAgIG1vdGlvbjogMCxcbiAgICAgICAgICAgIHNsZWVwVGhyZXNob2xkOiA2MCxcbiAgICAgICAgICAgIGRlbnNpdHk6IDAuMDAxLFxuICAgICAgICAgICAgcmVzdGl0dXRpb246IDAsXG4gICAgICAgICAgICBmcmljdGlvbjogMC4xLFxuICAgICAgICAgICAgZnJpY3Rpb25TdGF0aWM6IDAuNSxcbiAgICAgICAgICAgIGZyaWN0aW9uQWlyOiAwLjAxLFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgY2F0ZWdvcnk6IDB4MDAwMSxcbiAgICAgICAgICAgICAgICBtYXNrOiAweEZGRkZGRkZGLFxuICAgICAgICAgICAgICAgIGdyb3VwOiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgc2xvcDogMC4wNSxcbiAgICAgICAgICAgIHRpbWVTY2FsZTogMSxcbiAgICAgICAgICAgIHJlbmRlcjoge1xuICAgICAgICAgICAgICAgIHZpc2libGU6IHRydWUsXG4gICAgICAgICAgICAgICAgb3BhY2l0eTogMSxcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogbnVsbCxcbiAgICAgICAgICAgICAgICBmaWxsU3R5bGU6IG51bGwsXG4gICAgICAgICAgICAgICAgbGluZVdpZHRoOiBudWxsLFxuICAgICAgICAgICAgICAgIHNwcml0ZToge1xuICAgICAgICAgICAgICAgICAgICB4U2NhbGU6IDEsXG4gICAgICAgICAgICAgICAgICAgIHlTY2FsZTogMSxcbiAgICAgICAgICAgICAgICAgICAgeE9mZnNldDogMCxcbiAgICAgICAgICAgICAgICAgICAgeU9mZnNldDogMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBldmVudHM6IG51bGwsXG4gICAgICAgICAgICBib3VuZHM6IG51bGwsXG4gICAgICAgICAgICBjaGFtZmVyOiBudWxsLFxuICAgICAgICAgICAgY2lyY2xlUmFkaXVzOiAwLFxuICAgICAgICAgICAgcG9zaXRpb25QcmV2OiBudWxsLFxuICAgICAgICAgICAgYW5nbGVQcmV2OiAwLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgYXhlczogbnVsbCxcbiAgICAgICAgICAgIGFyZWE6IDAsXG4gICAgICAgICAgICBtYXNzOiAwLFxuICAgICAgICAgICAgaW5lcnRpYTogMCxcbiAgICAgICAgICAgIGRlbHRhVGltZTogMTAwMCAvIDYwLFxuICAgICAgICAgICAgX29yaWdpbmFsOiBudWxsXG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGJvZHkgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBfaW5pdFByb3BlcnRpZXMoYm9keSwgb3B0aW9ucyk7XG5cbiAgICAgICAgcmV0dXJuIGJvZHk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIG5leHQgdW5pcXVlIGdyb3VwIGluZGV4IGZvciB3aGljaCBib2RpZXMgd2lsbCBjb2xsaWRlLlxuICAgICAqIElmIGBpc05vbkNvbGxpZGluZ2AgaXMgYHRydWVgLCByZXR1cm5zIHRoZSBuZXh0IHVuaXF1ZSBncm91cCBpbmRleCBmb3Igd2hpY2ggYm9kaWVzIHdpbGwgX25vdF8gY29sbGlkZS5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAbWV0aG9kIG5leHRHcm91cFxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2lzTm9uQ29sbGlkaW5nPWZhbHNlXVxuICAgICAqIEByZXR1cm4ge051bWJlcn0gVW5pcXVlIGdyb3VwIGluZGV4XG4gICAgICovXG4gICAgQm9keS5uZXh0R3JvdXAgPSBmdW5jdGlvbihpc05vbkNvbGxpZGluZykge1xuICAgICAgICBpZiAoaXNOb25Db2xsaWRpbmcpXG4gICAgICAgICAgICByZXR1cm4gQm9keS5fbmV4dE5vbkNvbGxpZGluZ0dyb3VwSWQtLTtcblxuICAgICAgICByZXR1cm4gQm9keS5fbmV4dENvbGxpZGluZ0dyb3VwSWQrKztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbmV4dCB1bmlxdWUgY2F0ZWdvcnkgYml0ZmllbGQgKHN0YXJ0aW5nIGFmdGVyIHRoZSBpbml0aWFsIGRlZmF1bHQgY2F0ZWdvcnkgYDB4MDAwMWApLlxuICAgICAqIFRoZXJlIGFyZSAzMiBhdmFpbGFibGUuIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBtZXRob2QgbmV4dENhdGVnb3J5XG4gICAgICogQHJldHVybiB7TnVtYmVyfSBVbmlxdWUgY2F0ZWdvcnkgYml0ZmllbGRcbiAgICAgKi9cbiAgICBCb2R5Lm5leHRDYXRlZ29yeSA9IGZ1bmN0aW9uKCkge1xuICAgICAgICBCb2R5Ll9uZXh0Q2F0ZWdvcnkgPSBCb2R5Ll9uZXh0Q2F0ZWdvcnkgPDwgMTtcbiAgICAgICAgcmV0dXJuIEJvZHkuX25leHRDYXRlZ29yeTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogSW5pdGlhbGlzZXMgYm9keSBwcm9wZXJ0aWVzLlxuICAgICAqIEBtZXRob2QgX2luaXRQcm9wZXJ0aWVzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge30gW29wdGlvbnNdXG4gICAgICovXG4gICAgdmFyIF9pbml0UHJvcGVydGllcyA9IGZ1bmN0aW9uKGJvZHksIG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgLy8gaW5pdCByZXF1aXJlZCBwcm9wZXJ0aWVzIChvcmRlciBpcyBpbXBvcnRhbnQpXG4gICAgICAgIEJvZHkuc2V0KGJvZHksIHtcbiAgICAgICAgICAgIGJvdW5kczogYm9keS5ib3VuZHMgfHwgQm91bmRzLmNyZWF0ZShib2R5LnZlcnRpY2VzKSxcbiAgICAgICAgICAgIHBvc2l0aW9uUHJldjogYm9keS5wb3NpdGlvblByZXYgfHwgVmVjdG9yLmNsb25lKGJvZHkucG9zaXRpb24pLFxuICAgICAgICAgICAgYW5nbGVQcmV2OiBib2R5LmFuZ2xlUHJldiB8fCBib2R5LmFuZ2xlLFxuICAgICAgICAgICAgdmVydGljZXM6IGJvZHkudmVydGljZXMsXG4gICAgICAgICAgICBwYXJ0czogYm9keS5wYXJ0cyB8fCBbYm9keV0sXG4gICAgICAgICAgICBpc1N0YXRpYzogYm9keS5pc1N0YXRpYyxcbiAgICAgICAgICAgIGlzU2xlZXBpbmc6IGJvZHkuaXNTbGVlcGluZyxcbiAgICAgICAgICAgIHBhcmVudDogYm9keS5wYXJlbnQgfHwgYm9keVxuICAgICAgICB9KTtcblxuICAgICAgICBWZXJ0aWNlcy5yb3RhdGUoYm9keS52ZXJ0aWNlcywgYm9keS5hbmdsZSwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgIEF4ZXMucm90YXRlKGJvZHkuYXhlcywgYm9keS5hbmdsZSk7XG4gICAgICAgIEJvdW5kcy51cGRhdGUoYm9keS5ib3VuZHMsIGJvZHkudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuXG4gICAgICAgIC8vIGFsbG93IG9wdGlvbnMgdG8gb3ZlcnJpZGUgdGhlIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCBwcm9wZXJ0aWVzXG4gICAgICAgIEJvZHkuc2V0KGJvZHksIHtcbiAgICAgICAgICAgIGF4ZXM6IG9wdGlvbnMuYXhlcyB8fCBib2R5LmF4ZXMsXG4gICAgICAgICAgICBhcmVhOiBvcHRpb25zLmFyZWEgfHwgYm9keS5hcmVhLFxuICAgICAgICAgICAgbWFzczogb3B0aW9ucy5tYXNzIHx8IGJvZHkubWFzcyxcbiAgICAgICAgICAgIGluZXJ0aWE6IG9wdGlvbnMuaW5lcnRpYSB8fCBib2R5LmluZXJ0aWFcbiAgICAgICAgfSk7XG5cbiAgICAgICAgLy8gcmVuZGVyIHByb3BlcnRpZXNcbiAgICAgICAgdmFyIGRlZmF1bHRGaWxsU3R5bGUgPSAoYm9keS5pc1N0YXRpYyA/ICcjMTQxNTFmJyA6IENvbW1vbi5jaG9vc2UoWycjZjE5NjQ4JywgJyNmNWQyNTknLCAnI2Y1NWEzYycsICcjMDYzZTdiJywgJyNlY2VjZDEnXSkpLFxuICAgICAgICAgICAgZGVmYXVsdFN0cm9rZVN0eWxlID0gYm9keS5pc1N0YXRpYyA/ICcjNTU1JyA6ICcjY2NjJyxcbiAgICAgICAgICAgIGRlZmF1bHRMaW5lV2lkdGggPSBib2R5LmlzU3RhdGljICYmIGJvZHkucmVuZGVyLmZpbGxTdHlsZSA9PT0gbnVsbCA/IDEgOiAwO1xuICAgICAgICBib2R5LnJlbmRlci5maWxsU3R5bGUgPSBib2R5LnJlbmRlci5maWxsU3R5bGUgfHwgZGVmYXVsdEZpbGxTdHlsZTtcbiAgICAgICAgYm9keS5yZW5kZXIuc3Ryb2tlU3R5bGUgPSBib2R5LnJlbmRlci5zdHJva2VTdHlsZSB8fCBkZWZhdWx0U3Ryb2tlU3R5bGU7XG4gICAgICAgIGJvZHkucmVuZGVyLmxpbmVXaWR0aCA9IGJvZHkucmVuZGVyLmxpbmVXaWR0aCB8fCBkZWZhdWx0TGluZVdpZHRoO1xuICAgICAgICBib2R5LnJlbmRlci5zcHJpdGUueE9mZnNldCArPSAtKGJvZHkuYm91bmRzLm1pbi54IC0gYm9keS5wb3NpdGlvbi54KSAvIChib2R5LmJvdW5kcy5tYXgueCAtIGJvZHkuYm91bmRzLm1pbi54KTtcbiAgICAgICAgYm9keS5yZW5kZXIuc3ByaXRlLnlPZmZzZXQgKz0gLShib2R5LmJvdW5kcy5taW4ueSAtIGJvZHkucG9zaXRpb24ueSkgLyAoYm9keS5ib3VuZHMubWF4LnkgLSBib2R5LmJvdW5kcy5taW4ueSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgcHJvcGVydHkgYW5kIGEgdmFsdWUgKG9yIG1hcCBvZiksIHNldHMgdGhlIHByb3BlcnR5KHMpIG9uIHRoZSBib2R5LCB1c2luZyB0aGUgYXBwcm9wcmlhdGUgc2V0dGVyIGZ1bmN0aW9ucyBpZiB0aGV5IGV4aXN0LlxuICAgICAqIFByZWZlciB0byB1c2UgdGhlIGFjdHVhbCBzZXR0ZXIgZnVuY3Rpb25zIGluIHBlcmZvcm1hbmNlIGNyaXRpY2FsIHNpdHVhdGlvbnMuXG4gICAgICogQG1ldGhvZCBzZXRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge30gc2V0dGluZ3MgQSBwcm9wZXJ0eSBuYW1lIChvciBtYXAgb2YgcHJvcGVydGllcyBhbmQgdmFsdWVzKSB0byBzZXQgb24gdGhlIGJvZHkuXG4gICAgICogQHBhcmFtIHt9IHZhbHVlIFRoZSB2YWx1ZSB0byBzZXQgaWYgYHNldHRpbmdzYCBpcyBhIHNpbmdsZSBwcm9wZXJ0eSBuYW1lLlxuICAgICAqL1xuICAgIEJvZHkuc2V0ID0gZnVuY3Rpb24oYm9keSwgc2V0dGluZ3MsIHZhbHVlKSB7XG4gICAgICAgIHZhciBwcm9wZXJ0eTtcblxuICAgICAgICBpZiAodHlwZW9mIHNldHRpbmdzID09PSAnc3RyaW5nJykge1xuICAgICAgICAgICAgcHJvcGVydHkgPSBzZXR0aW5ncztcbiAgICAgICAgICAgIHNldHRpbmdzID0ge307XG4gICAgICAgICAgICBzZXR0aW5nc1twcm9wZXJ0eV0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAocHJvcGVydHkgaW4gc2V0dGluZ3MpIHtcbiAgICAgICAgICAgIGlmICghT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHNldHRpbmdzLCBwcm9wZXJ0eSkpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhbHVlID0gc2V0dGluZ3NbcHJvcGVydHldO1xuICAgICAgICAgICAgc3dpdGNoIChwcm9wZXJ0eSkge1xuXG4gICAgICAgICAgICBjYXNlICdpc1N0YXRpYyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRTdGF0aWMoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaXNTbGVlcGluZyc6XG4gICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ21hc3MnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdkZW5zaXR5JzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldERlbnNpdHkoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnaW5lcnRpYSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRJbmVydGlhKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ZlcnRpY2VzJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFZlcnRpY2VzKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3Bvc2l0aW9uJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FuZ2xlJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldEFuZ2xlKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ3ZlbG9jaXR5JzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldFZlbG9jaXR5KGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2FuZ3VsYXJWZWxvY2l0eSc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRBbmd1bGFyVmVsb2NpdHkoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnc3BlZWQnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0U3BlZWQoYm9keSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnYW5ndWxhclNwZWVkJzpcbiAgICAgICAgICAgICAgICBCb2R5LnNldEFuZ3VsYXJTcGVlZChib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdwYXJ0cyc6XG4gICAgICAgICAgICAgICAgQm9keS5zZXRQYXJ0cyhib2R5LCB2YWx1ZSk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjZW50cmUnOlxuICAgICAgICAgICAgICAgIEJvZHkuc2V0Q2VudHJlKGJvZHksIHZhbHVlKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgYm9keVtwcm9wZXJ0eV0gPSB2YWx1ZTtcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJvZHkgYXMgc3RhdGljLCBpbmNsdWRpbmcgaXNTdGF0aWMgZmxhZyBhbmQgc2V0dGluZyBtYXNzIGFuZCBpbmVydGlhIHRvIEluZmluaXR5LlxuICAgICAqIEBtZXRob2Qgc2V0U3RhdGljXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtib29sfSBpc1N0YXRpY1xuICAgICAqL1xuICAgIEJvZHkuc2V0U3RhdGljID0gZnVuY3Rpb24oYm9keSwgaXNTdGF0aWMpIHtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG5cbiAgICAgICAgICAgIGlmIChpc1N0YXRpYykge1xuICAgICAgICAgICAgICAgIGlmICghcGFydC5pc1N0YXRpYykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0Ll9vcmlnaW5hbCA9IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJlc3RpdHV0aW9uOiBwYXJ0LnJlc3RpdHV0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgZnJpY3Rpb246IHBhcnQuZnJpY3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBtYXNzOiBwYXJ0Lm1hc3MsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbmVydGlhOiBwYXJ0LmluZXJ0aWEsXG4gICAgICAgICAgICAgICAgICAgICAgICBkZW5zaXR5OiBwYXJ0LmRlbnNpdHksXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnZlcnNlTWFzczogcGFydC5pbnZlcnNlTWFzcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGludmVyc2VJbmVydGlhOiBwYXJ0LmludmVyc2VJbmVydGlhXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFydC5yZXN0aXR1dGlvbiA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5mcmljdGlvbiA9IDE7XG4gICAgICAgICAgICAgICAgcGFydC5tYXNzID0gcGFydC5pbmVydGlhID0gcGFydC5kZW5zaXR5ID0gSW5maW5pdHk7XG4gICAgICAgICAgICAgICAgcGFydC5pbnZlcnNlTWFzcyA9IHBhcnQuaW52ZXJzZUluZXJ0aWEgPSAwO1xuXG4gICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvblByZXYueCA9IHBhcnQucG9zaXRpb24ueDtcbiAgICAgICAgICAgICAgICBwYXJ0LnBvc2l0aW9uUHJldi55ID0gcGFydC5wb3NpdGlvbi55O1xuICAgICAgICAgICAgICAgIHBhcnQuYW5nbGVQcmV2ID0gcGFydC5hbmdsZTtcbiAgICAgICAgICAgICAgICBwYXJ0LmFuZ3VsYXJWZWxvY2l0eSA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5zcGVlZCA9IDA7XG4gICAgICAgICAgICAgICAgcGFydC5hbmd1bGFyU3BlZWQgPSAwO1xuICAgICAgICAgICAgICAgIHBhcnQubW90aW9uID0gMDtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydC5fb3JpZ2luYWwpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnJlc3RpdHV0aW9uID0gcGFydC5fb3JpZ2luYWwucmVzdGl0dXRpb247XG4gICAgICAgICAgICAgICAgcGFydC5mcmljdGlvbiA9IHBhcnQuX29yaWdpbmFsLmZyaWN0aW9uO1xuICAgICAgICAgICAgICAgIHBhcnQubWFzcyA9IHBhcnQuX29yaWdpbmFsLm1hc3M7XG4gICAgICAgICAgICAgICAgcGFydC5pbmVydGlhID0gcGFydC5fb3JpZ2luYWwuaW5lcnRpYTtcbiAgICAgICAgICAgICAgICBwYXJ0LmRlbnNpdHkgPSBwYXJ0Ll9vcmlnaW5hbC5kZW5zaXR5O1xuICAgICAgICAgICAgICAgIHBhcnQuaW52ZXJzZU1hc3MgPSBwYXJ0Ll9vcmlnaW5hbC5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICBwYXJ0LmludmVyc2VJbmVydGlhID0gcGFydC5fb3JpZ2luYWwuaW52ZXJzZUluZXJ0aWE7XG5cbiAgICAgICAgICAgICAgICBwYXJ0Ll9vcmlnaW5hbCA9IG51bGw7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHBhcnQuaXNTdGF0aWMgPSBpc1N0YXRpYztcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtYXNzIG9mIHRoZSBib2R5LiBJbnZlcnNlIG1hc3MsIGRlbnNpdHkgYW5kIGluZXJ0aWEgYXJlIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB0byByZWZsZWN0IHRoZSBjaGFuZ2UuXG4gICAgICogQG1ldGhvZCBzZXRNYXNzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG1hc3NcbiAgICAgKi9cbiAgICBCb2R5LnNldE1hc3MgPSBmdW5jdGlvbihib2R5LCBtYXNzKSB7XG4gICAgICAgIHZhciBtb21lbnQgPSBib2R5LmluZXJ0aWEgLyAoYm9keS5tYXNzIC8gNik7XG4gICAgICAgIGJvZHkuaW5lcnRpYSA9IG1vbWVudCAqIChtYXNzIC8gNik7XG4gICAgICAgIGJvZHkuaW52ZXJzZUluZXJ0aWEgPSAxIC8gYm9keS5pbmVydGlhO1xuXG4gICAgICAgIGJvZHkubWFzcyA9IG1hc3M7XG4gICAgICAgIGJvZHkuaW52ZXJzZU1hc3MgPSAxIC8gYm9keS5tYXNzO1xuICAgICAgICBib2R5LmRlbnNpdHkgPSBib2R5Lm1hc3MgLyBib2R5LmFyZWE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGRlbnNpdHkgb2YgdGhlIGJvZHkuIE1hc3MgYW5kIGluZXJ0aWEgYXJlIGF1dG9tYXRpY2FsbHkgdXBkYXRlZCB0byByZWZsZWN0IHRoZSBjaGFuZ2UuXG4gICAgICogQG1ldGhvZCBzZXREZW5zaXR5XG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbnNpdHlcbiAgICAgKi9cbiAgICBCb2R5LnNldERlbnNpdHkgPSBmdW5jdGlvbihib2R5LCBkZW5zaXR5KSB7XG4gICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCBkZW5zaXR5ICogYm9keS5hcmVhKTtcbiAgICAgICAgYm9keS5kZW5zaXR5ID0gZGVuc2l0eTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbW9tZW50IG9mIGluZXJ0aWEgb2YgdGhlIGJvZHkuIFRoaXMgaXMgdGhlIHNlY29uZCBtb21lbnQgb2YgYXJlYSBpbiB0d28gZGltZW5zaW9ucy5cbiAgICAgKiBJbnZlcnNlIGluZXJ0aWEgaXMgYXV0b21hdGljYWxseSB1cGRhdGVkIHRvIHJlZmxlY3QgdGhlIGNoYW5nZS4gTWFzcyBpcyBub3QgY2hhbmdlZC5cbiAgICAgKiBAbWV0aG9kIHNldEluZXJ0aWFcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaW5lcnRpYVxuICAgICAqL1xuICAgIEJvZHkuc2V0SW5lcnRpYSA9IGZ1bmN0aW9uKGJvZHksIGluZXJ0aWEpIHtcbiAgICAgICAgYm9keS5pbmVydGlhID0gaW5lcnRpYTtcbiAgICAgICAgYm9keS5pbnZlcnNlSW5lcnRpYSA9IDEgLyBib2R5LmluZXJ0aWE7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGJvZHkncyB2ZXJ0aWNlcyBhbmQgdXBkYXRlcyBib2R5IHByb3BlcnRpZXMgYWNjb3JkaW5nbHksIGluY2x1ZGluZyBpbmVydGlhLCBhcmVhIGFuZCBtYXNzICh3aXRoIHJlc3BlY3QgdG8gYGJvZHkuZGVuc2l0eWApLlxuICAgICAqIFZlcnRpY2VzIHdpbGwgYmUgYXV0b21hdGljYWxseSB0cmFuc2Zvcm1lZCB0byBiZSBvcmllbnRhdGVkIGFyb3VuZCB0aGVpciBjZW50cmUgb2YgbWFzcyBhcyB0aGUgb3JpZ2luLlxuICAgICAqIFRoZXkgYXJlIHRoZW4gYXV0b21hdGljYWxseSB0cmFuc2xhdGVkIHRvIHdvcmxkIHNwYWNlIGJhc2VkIG9uIGBib2R5LnBvc2l0aW9uYC5cbiAgICAgKlxuICAgICAqIFRoZSBgdmVydGljZXNgIGFyZ3VtZW50IHNob3VsZCBiZSBwYXNzZWQgYXMgYW4gYXJyYXkgb2YgYE1hdHRlci5WZWN0b3JgIHBvaW50cyAob3IgYSBgTWF0dGVyLlZlcnRpY2VzYCBhcnJheSkuXG4gICAgICogVmVydGljZXMgbXVzdCBmb3JtIGEgY29udmV4IGh1bGwuIENvbmNhdmUgdmVydGljZXMgbXVzdCBiZSBkZWNvbXBvc2VkIGludG8gY29udmV4IHBhcnRzLlxuICAgICAqIFxuICAgICAqIEBtZXRob2Qgc2V0VmVydGljZXNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3RvcltdfSB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIEJvZHkuc2V0VmVydGljZXMgPSBmdW5jdGlvbihib2R5LCB2ZXJ0aWNlcykge1xuICAgICAgICAvLyBjaGFuZ2UgdmVydGljZXNcbiAgICAgICAgaWYgKHZlcnRpY2VzWzBdLmJvZHkgPT09IGJvZHkpIHtcbiAgICAgICAgICAgIGJvZHkudmVydGljZXMgPSB2ZXJ0aWNlcztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkudmVydGljZXMgPSBWZXJ0aWNlcy5jcmVhdGUodmVydGljZXMsIGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHByb3BlcnRpZXNcbiAgICAgICAgYm9keS5heGVzID0gQXhlcy5mcm9tVmVydGljZXMoYm9keS52ZXJ0aWNlcyk7XG4gICAgICAgIGJvZHkuYXJlYSA9IFZlcnRpY2VzLmFyZWEoYm9keS52ZXJ0aWNlcyk7XG4gICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCBib2R5LmRlbnNpdHkgKiBib2R5LmFyZWEpO1xuXG4gICAgICAgIC8vIG9yaWVudCB2ZXJ0aWNlcyBhcm91bmQgdGhlIGNlbnRyZSBvZiBtYXNzIGF0IG9yaWdpbiAoMCwgMClcbiAgICAgICAgdmFyIGNlbnRyZSA9IFZlcnRpY2VzLmNlbnRyZShib2R5LnZlcnRpY2VzKTtcbiAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKGJvZHkudmVydGljZXMsIGNlbnRyZSwgLTEpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBpbmVydGlhIHdoaWxlIHZlcnRpY2VzIGFyZSBhdCBvcmlnaW4gKDAsIDApXG4gICAgICAgIEJvZHkuc2V0SW5lcnRpYShib2R5LCBCb2R5Ll9pbmVydGlhU2NhbGUgKiBWZXJ0aWNlcy5pbmVydGlhKGJvZHkudmVydGljZXMsIGJvZHkubWFzcykpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBnZW9tZXRyeVxuICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUoYm9keS52ZXJ0aWNlcywgYm9keS5wb3NpdGlvbik7XG4gICAgICAgIEJvdW5kcy51cGRhdGUoYm9keS5ib3VuZHMsIGJvZHkudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwYXJ0cyBvZiB0aGUgYGJvZHlgLiBcbiAgICAgKiBcbiAgICAgKiBTZWUgYGJvZHkucGFydHNgIGZvciBkZXRhaWxzIGFuZCByZXF1aXJlbWVudHMgb24gaG93IHBhcnRzIGFyZSB1c2VkLlxuICAgICAqIFxuICAgICAqIFNlZSBCb2RpZXMuZnJvbVZlcnRpY2VzIGZvciBhIHJlbGF0ZWQgdXRpbGl0eS5cbiAgICAgKiBcbiAgICAgKiBUaGlzIGZ1bmN0aW9uIHVwZGF0ZXMgYGJvZHlgIG1hc3MsIGluZXJ0aWEgYW5kIGNlbnRyb2lkIGJhc2VkIG9uIHRoZSBwYXJ0cyBnZW9tZXRyeS4gIFxuICAgICAqIFNldHMgZWFjaCBgcGFydC5wYXJlbnRgIHRvIGJlIHRoaXMgYGJvZHlgLiAgXG4gICAgICogXG4gICAgICogVGhlIGNvbnZleCBodWxsIGlzIGNvbXB1dGVkIGFuZCBzZXQgb24gdGhpcyBgYm9keWAgKHVubGVzcyBgYXV0b0h1bGxgIGlzIGBmYWxzZWApLiAgXG4gICAgICogQXV0b21hdGljYWxseSBlbnN1cmVzIHRoYXQgdGhlIGZpcnN0IHBhcnQgaW4gYGJvZHkucGFydHNgIGlzIHRoZSBgYm9keWAuXG4gICAgICogQG1ldGhvZCBzZXRQYXJ0c1xuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBwYXJ0c1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2F1dG9IdWxsPXRydWVdXG4gICAgICovXG4gICAgQm9keS5zZXRQYXJ0cyA9IGZ1bmN0aW9uKGJvZHksIHBhcnRzLCBhdXRvSHVsbCkge1xuICAgICAgICB2YXIgaTtcblxuICAgICAgICAvLyBhZGQgYWxsIHRoZSBwYXJ0cywgZW5zdXJpbmcgdGhhdCB0aGUgZmlyc3QgcGFydCBpcyBhbHdheXMgdGhlIHBhcmVudCBib2R5XG4gICAgICAgIHBhcnRzID0gcGFydHMuc2xpY2UoMCk7XG4gICAgICAgIGJvZHkucGFydHMubGVuZ3RoID0gMDtcbiAgICAgICAgYm9keS5wYXJ0cy5wdXNoKGJvZHkpO1xuICAgICAgICBib2R5LnBhcmVudCA9IGJvZHk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2ldO1xuICAgICAgICAgICAgaWYgKHBhcnQgIT09IGJvZHkpIHtcbiAgICAgICAgICAgICAgICBwYXJ0LnBhcmVudCA9IGJvZHk7XG4gICAgICAgICAgICAgICAgYm9keS5wYXJ0cy5wdXNoKHBhcnQpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGJvZHkucGFydHMubGVuZ3RoID09PSAxKVxuICAgICAgICAgICAgcmV0dXJuO1xuXG4gICAgICAgIGF1dG9IdWxsID0gdHlwZW9mIGF1dG9IdWxsICE9PSAndW5kZWZpbmVkJyA/IGF1dG9IdWxsIDogdHJ1ZTtcblxuICAgICAgICAvLyBmaW5kIHRoZSBjb252ZXggaHVsbCBvZiBhbGwgcGFydHMgdG8gc2V0IG9uIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICBpZiAoYXV0b0h1bGwpIHtcbiAgICAgICAgICAgIHZhciB2ZXJ0aWNlcyA9IFtdO1xuICAgICAgICAgICAgZm9yIChpID0gMDsgaSA8IHBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgdmVydGljZXMgPSB2ZXJ0aWNlcy5jb25jYXQocGFydHNbaV0udmVydGljZXMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBWZXJ0aWNlcy5jbG9ja3dpc2VTb3J0KHZlcnRpY2VzKTtcblxuICAgICAgICAgICAgdmFyIGh1bGwgPSBWZXJ0aWNlcy5odWxsKHZlcnRpY2VzKSxcbiAgICAgICAgICAgICAgICBodWxsQ2VudHJlID0gVmVydGljZXMuY2VudHJlKGh1bGwpO1xuXG4gICAgICAgICAgICBCb2R5LnNldFZlcnRpY2VzKGJvZHksIGh1bGwpO1xuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKGJvZHkudmVydGljZXMsIGh1bGxDZW50cmUpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gc3VtIHRoZSBwcm9wZXJ0aWVzIG9mIGFsbCBjb21wb3VuZCBwYXJ0cyBvZiB0aGUgcGFyZW50IGJvZHlcbiAgICAgICAgdmFyIHRvdGFsID0gQm9keS5fdG90YWxQcm9wZXJ0aWVzKGJvZHkpO1xuXG4gICAgICAgIGJvZHkuYXJlYSA9IHRvdGFsLmFyZWE7XG4gICAgICAgIGJvZHkucGFyZW50ID0gYm9keTtcbiAgICAgICAgYm9keS5wb3NpdGlvbi54ID0gdG90YWwuY2VudHJlLng7XG4gICAgICAgIGJvZHkucG9zaXRpb24ueSA9IHRvdGFsLmNlbnRyZS55O1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gdG90YWwuY2VudHJlLng7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSB0b3RhbC5jZW50cmUueTtcblxuICAgICAgICBCb2R5LnNldE1hc3MoYm9keSwgdG90YWwubWFzcyk7XG4gICAgICAgIEJvZHkuc2V0SW5lcnRpYShib2R5LCB0b3RhbC5pbmVydGlhKTtcbiAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB0b3RhbC5jZW50cmUpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXQgdGhlIGNlbnRyZSBvZiBtYXNzIG9mIHRoZSBib2R5LiBcbiAgICAgKiBUaGUgYGNlbnRyZWAgaXMgYSB2ZWN0b3IgaW4gd29ybGQtc3BhY2UgdW5sZXNzIGByZWxhdGl2ZWAgaXMgc2V0LCBpbiB3aGljaCBjYXNlIGl0IGlzIGEgdHJhbnNsYXRpb24uXG4gICAgICogVGhlIGNlbnRyZSBvZiBtYXNzIGlzIHRoZSBwb2ludCB0aGUgYm9keSByb3RhdGVzIGFib3V0IGFuZCBjYW4gYmUgdXNlZCB0byBzaW11bGF0ZSBub24tdW5pZm9ybSBkZW5zaXR5LlxuICAgICAqIFRoaXMgaXMgZXF1YWwgdG8gbW92aW5nIGBib2R5LnBvc2l0aW9uYCBidXQgbm90IHRoZSBgYm9keS52ZXJ0aWNlc2AuXG4gICAgICogSW52YWxpZCBpZiB0aGUgYGNlbnRyZWAgZmFsbHMgb3V0c2lkZSB0aGUgYm9keSdzIGNvbnZleCBodWxsLlxuICAgICAqIEBtZXRob2Qgc2V0Q2VudHJlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IGNlbnRyZVxuICAgICAqIEBwYXJhbSB7Ym9vbH0gcmVsYXRpdmVcbiAgICAgKi9cbiAgICBCb2R5LnNldENlbnRyZSA9IGZ1bmN0aW9uKGJvZHksIGNlbnRyZSwgcmVsYXRpdmUpIHtcbiAgICAgICAgaWYgKCFyZWxhdGl2ZSkge1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueCA9IGNlbnRyZS54IC0gKGJvZHkucG9zaXRpb24ueCAtIGJvZHkucG9zaXRpb25QcmV2LngpO1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGNlbnRyZS55IC0gKGJvZHkucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb25QcmV2LnkpO1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi54ID0gY2VudHJlLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uLnkgPSBjZW50cmUueTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggKz0gY2VudHJlLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ICs9IGNlbnRyZS55O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi54ICs9IGNlbnRyZS54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi55ICs9IGNlbnRyZS55O1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIHBvc2l0aW9uIG9mIHRoZSBib2R5LiBCeSBkZWZhdWx0IHZlbG9jaXR5IGlzIHVuY2hhbmdlZC5cbiAgICAgKiBJZiBgdXBkYXRlVmVsb2NpdHlgIGlzIGB0cnVlYCB0aGVuIHZlbG9jaXR5IGlzIGluZmVycmVkIGZyb20gdGhlIGNoYW5nZSBpbiBwb3NpdGlvbi5cbiAgICAgKiBAbWV0aG9kIHNldFBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbdXBkYXRlVmVsb2NpdHk9ZmFsc2VdXG4gICAgICovXG4gICAgQm9keS5zZXRQb3NpdGlvbiA9IGZ1bmN0aW9uKGJvZHksIHBvc2l0aW9uLCB1cGRhdGVWZWxvY2l0eSkge1xuICAgICAgICB2YXIgZGVsdGEgPSBWZWN0b3Iuc3ViKHBvc2l0aW9uLCBib2R5LnBvc2l0aW9uKTtcblxuICAgICAgICBpZiAodXBkYXRlVmVsb2NpdHkpIHtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSBib2R5LnBvc2l0aW9uLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ID0gYm9keS5wb3NpdGlvbi55O1xuICAgICAgICAgICAgYm9keS52ZWxvY2l0eS54ID0gZGVsdGEueDtcbiAgICAgICAgICAgIGJvZHkudmVsb2NpdHkueSA9IGRlbHRhLnk7XG4gICAgICAgICAgICBib2R5LnNwZWVkID0gVmVjdG9yLm1hZ25pdHVkZShkZWx0YSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ICs9IGRlbHRhLng7XG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ICs9IGRlbHRhLnk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXTtcbiAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBkZWx0YS54O1xuICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ICs9IGRlbHRhLnk7XG4gICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUocGFydC52ZXJ0aWNlcywgZGVsdGEpO1xuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgYW5nbGUgb2YgdGhlIGJvZHkuIEJ5IGRlZmF1bHQgYW5ndWxhciB2ZWxvY2l0eSBpcyB1bmNoYW5nZWQuXG4gICAgICogSWYgYHVwZGF0ZVZlbG9jaXR5YCBpcyBgdHJ1ZWAgdGhlbiBhbmd1bGFyIHZlbG9jaXR5IGlzIGluZmVycmVkIGZyb20gdGhlIGNoYW5nZSBpbiBhbmdsZS5cbiAgICAgKiBAbWV0aG9kIHNldEFuZ2xlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbdXBkYXRlVmVsb2NpdHk9ZmFsc2VdXG4gICAgICovXG4gICAgQm9keS5zZXRBbmdsZSA9IGZ1bmN0aW9uKGJvZHksIGFuZ2xlLCB1cGRhdGVWZWxvY2l0eSkge1xuICAgICAgICB2YXIgZGVsdGEgPSBhbmdsZSAtIGJvZHkuYW5nbGU7XG4gICAgICAgIFxuICAgICAgICBpZiAodXBkYXRlVmVsb2NpdHkpIHtcbiAgICAgICAgICAgIGJvZHkuYW5nbGVQcmV2ID0gYm9keS5hbmdsZTtcbiAgICAgICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gZGVsdGE7XG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJTcGVlZCA9IE1hdGguYWJzKGRlbHRhKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGJvZHkuYW5nbGVQcmV2ICs9IGRlbHRhO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2R5LnBhcnRzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFydCA9IGJvZHkucGFydHNbaV07XG4gICAgICAgICAgICBwYXJ0LmFuZ2xlICs9IGRlbHRhO1xuICAgICAgICAgICAgVmVydGljZXMucm90YXRlKHBhcnQudmVydGljZXMsIGRlbHRhLCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgICAgIEF4ZXMucm90YXRlKHBhcnQuYXhlcywgZGVsdGEpO1xuICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICBWZWN0b3Iucm90YXRlQWJvdXQocGFydC5wb3NpdGlvbiwgZGVsdGEsIGJvZHkucG9zaXRpb24sIHBhcnQucG9zaXRpb24pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgbGluZWFyIHZlbG9jaXR5IG9mIHRoZSBib2R5LiAgXG4gICAgICogQWZmZWN0cyBib2R5IHNwZWVkLlxuICAgICAqIEBtZXRob2Qgc2V0VmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb2R5LnNldFZlbG9jaXR5ID0gZnVuY3Rpb24oYm9keSwgdmVsb2NpdHkpIHtcbiAgICAgICAgdmFyIHRpbWVTY2FsZSA9IGJvZHkuZGVsdGFUaW1lIC8gQm9keS5fYmFzZURlbHRhO1xuICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gYm9keS5wb3NpdGlvbi54IC0gdmVsb2NpdHkueCAqIHRpbWVTY2FsZTtcbiAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGJvZHkucG9zaXRpb24ueSAtIHZlbG9jaXR5LnkgKiB0aW1lU2NhbGU7XG4gICAgICAgIGJvZHkudmVsb2NpdHkueCA9IChib2R5LnBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uUHJldi54KSAvIHRpbWVTY2FsZTtcbiAgICAgICAgYm9keS52ZWxvY2l0eS55ID0gKGJvZHkucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb25QcmV2LnkpIC8gdGltZVNjYWxlO1xuICAgICAgICBib2R5LnNwZWVkID0gVmVjdG9yLm1hZ25pdHVkZShib2R5LnZlbG9jaXR5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCBsaW5lYXIgdmVsb2NpdHkgb2YgdGhlIGJvZHkuXG4gICAgICogQG1ldGhvZCBnZXRWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge3ZlY3Rvcn0gdmVsb2NpdHlcbiAgICAgKi9cbiAgICBCb2R5LmdldFZlbG9jaXR5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgICB2YXIgdGltZVNjYWxlID0gQm9keS5fYmFzZURlbHRhIC8gYm9keS5kZWx0YVRpbWU7XG5cbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IChib2R5LnBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uUHJldi54KSAqIHRpbWVTY2FsZSxcbiAgICAgICAgICAgIHk6IChib2R5LnBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uUHJldi55KSAqIHRpbWVTY2FsZVxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBjdXJyZW50IGxpbmVhciBzcGVlZCBvZiB0aGUgYm9keS4gIFxuICAgICAqIEVxdWl2YWxlbnQgdG8gdGhlIG1hZ25pdHVkZSBvZiBpdHMgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCBnZXRTcGVlZFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gc3BlZWRcbiAgICAgKi9cbiAgICBCb2R5LmdldFNwZWVkID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgICByZXR1cm4gVmVjdG9yLm1hZ25pdHVkZShCb2R5LmdldFZlbG9jaXR5KGJvZHkpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgY3VycmVudCBsaW5lYXIgc3BlZWQgb2YgdGhlIGJvZHkuICBcbiAgICAgKiBEaXJlY3Rpb24gaXMgbWFpbnRhaW5lZC4gQWZmZWN0cyBib2R5IHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2Qgc2V0U3BlZWRcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc3BlZWRcbiAgICAgKi9cbiAgICBCb2R5LnNldFNwZWVkID0gZnVuY3Rpb24oYm9keSwgc3BlZWQpIHtcbiAgICAgICAgQm9keS5zZXRWZWxvY2l0eShib2R5LCBWZWN0b3IubXVsdChWZWN0b3Iubm9ybWFsaXNlKEJvZHkuZ2V0VmVsb2NpdHkoYm9keSkpLCBzcGVlZCkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjdXJyZW50IHJvdGF0aW9uYWwgdmVsb2NpdHkgb2YgdGhlIGJvZHkuICBcbiAgICAgKiBBZmZlY3RzIGJvZHkgYW5ndWxhciBzcGVlZC5cbiAgICAgKiBAbWV0aG9kIHNldEFuZ3VsYXJWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB2ZWxvY2l0eVxuICAgICAqL1xuICAgIEJvZHkuc2V0QW5ndWxhclZlbG9jaXR5ID0gZnVuY3Rpb24oYm9keSwgdmVsb2NpdHkpIHtcbiAgICAgICAgdmFyIHRpbWVTY2FsZSA9IGJvZHkuZGVsdGFUaW1lIC8gQm9keS5fYmFzZURlbHRhO1xuICAgICAgICBib2R5LmFuZ2xlUHJldiA9IGJvZHkuYW5nbGUgLSB2ZWxvY2l0eSAqIHRpbWVTY2FsZTtcbiAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAoYm9keS5hbmdsZSAtIGJvZHkuYW5nbGVQcmV2KSAvIHRpbWVTY2FsZTtcbiAgICAgICAgYm9keS5hbmd1bGFyU3BlZWQgPSBNYXRoLmFicyhib2R5LmFuZ3VsYXJWZWxvY2l0eSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdldHMgdGhlIGN1cnJlbnQgcm90YXRpb25hbCB2ZWxvY2l0eSBvZiB0aGUgYm9keS5cbiAgICAgKiBAbWV0aG9kIGdldEFuZ3VsYXJWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge251bWJlcn0gYW5ndWxhciB2ZWxvY2l0eVxuICAgICAqL1xuICAgIEJvZHkuZ2V0QW5ndWxhclZlbG9jaXR5ID0gZnVuY3Rpb24oYm9keSkge1xuICAgICAgICByZXR1cm4gKGJvZHkuYW5nbGUgLSBib2R5LmFuZ2xlUHJldikgKiBCb2R5Ll9iYXNlRGVsdGEgLyBib2R5LmRlbHRhVGltZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgY3VycmVudCByb3RhdGlvbmFsIHNwZWVkIG9mIHRoZSBib2R5LiAgXG4gICAgICogRXF1aXZhbGVudCB0byB0aGUgbWFnbml0dWRlIG9mIGl0cyBhbmd1bGFyIHZlbG9jaXR5LlxuICAgICAqIEBtZXRob2QgZ2V0QW5ndWxhclNwZWVkXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHJldHVybiB7bnVtYmVyfSBhbmd1bGFyIHNwZWVkXG4gICAgICovXG4gICAgQm9keS5nZXRBbmd1bGFyU3BlZWQgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICAgIHJldHVybiBNYXRoLmFicyhCb2R5LmdldEFuZ3VsYXJWZWxvY2l0eShib2R5KSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGN1cnJlbnQgcm90YXRpb25hbCBzcGVlZCBvZiB0aGUgYm9keS4gIFxuICAgICAqIERpcmVjdGlvbiBpcyBtYWludGFpbmVkLiBBZmZlY3RzIGJvZHkgYW5ndWxhciB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHNldEFuZ3VsYXJTcGVlZFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzcGVlZFxuICAgICAqL1xuICAgIEJvZHkuc2V0QW5ndWxhclNwZWVkID0gZnVuY3Rpb24oYm9keSwgc3BlZWQpIHtcbiAgICAgICAgQm9keS5zZXRBbmd1bGFyVmVsb2NpdHkoYm9keSwgQ29tbW9uLnNpZ24oQm9keS5nZXRBbmd1bGFyVmVsb2NpdHkoYm9keSkpICogc3BlZWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyBhIGJvZHkgYnkgYSBnaXZlbiB2ZWN0b3IgcmVsYXRpdmUgdG8gaXRzIGN1cnJlbnQgcG9zaXRpb24uIEJ5IGRlZmF1bHQgdmVsb2NpdHkgaXMgdW5jaGFuZ2VkLlxuICAgICAqIElmIGB1cGRhdGVWZWxvY2l0eWAgaXMgYHRydWVgIHRoZW4gdmVsb2NpdHkgaXMgaW5mZXJyZWQgZnJvbSB0aGUgY2hhbmdlIGluIHBvc2l0aW9uLlxuICAgICAqIEBtZXRob2QgdHJhbnNsYXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHRyYW5zbGF0aW9uXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbdXBkYXRlVmVsb2NpdHk9ZmFsc2VdXG4gICAgICovXG4gICAgQm9keS50cmFuc2xhdGUgPSBmdW5jdGlvbihib2R5LCB0cmFuc2xhdGlvbiwgdXBkYXRlVmVsb2NpdHkpIHtcbiAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCBWZWN0b3IuYWRkKGJvZHkucG9zaXRpb24sIHRyYW5zbGF0aW9uKSwgdXBkYXRlVmVsb2NpdHkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIGEgYm9keSBieSBhIGdpdmVuIGFuZ2xlIHJlbGF0aXZlIHRvIGl0cyBjdXJyZW50IGFuZ2xlLiBCeSBkZWZhdWx0IGFuZ3VsYXIgdmVsb2NpdHkgaXMgdW5jaGFuZ2VkLlxuICAgICAqIElmIGB1cGRhdGVWZWxvY2l0eWAgaXMgYHRydWVgIHRoZW4gYW5ndWxhciB2ZWxvY2l0eSBpcyBpbmZlcnJlZCBmcm9tIHRoZSBjaGFuZ2UgaW4gYW5nbGUuXG4gICAgICogQG1ldGhvZCByb3RhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb25cbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gW3BvaW50XVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW3VwZGF0ZVZlbG9jaXR5PWZhbHNlXVxuICAgICAqL1xuICAgIEJvZHkucm90YXRlID0gZnVuY3Rpb24oYm9keSwgcm90YXRpb24sIHBvaW50LCB1cGRhdGVWZWxvY2l0eSkge1xuICAgICAgICBpZiAoIXBvaW50KSB7XG4gICAgICAgICAgICBCb2R5LnNldEFuZ2xlKGJvZHksIGJvZHkuYW5nbGUgKyByb3RhdGlvbiwgdXBkYXRlVmVsb2NpdHkpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdmFyIGNvcyA9IE1hdGguY29zKHJvdGF0aW9uKSxcbiAgICAgICAgICAgICAgICBzaW4gPSBNYXRoLnNpbihyb3RhdGlvbiksXG4gICAgICAgICAgICAgICAgZHggPSBib2R5LnBvc2l0aW9uLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gYm9keS5wb3NpdGlvbi55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50LnggKyAoZHggKiBjb3MgLSBkeSAqIHNpbiksXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueSArIChkeCAqIHNpbiArIGR5ICogY29zKVxuICAgICAgICAgICAgfSwgdXBkYXRlVmVsb2NpdHkpO1xuXG4gICAgICAgICAgICBCb2R5LnNldEFuZ2xlKGJvZHksIGJvZHkuYW5nbGUgKyByb3RhdGlvbiwgdXBkYXRlVmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNjYWxlcyB0aGUgYm9keSwgaW5jbHVkaW5nIHVwZGF0aW5nIHBoeXNpY2FsIHByb3BlcnRpZXMgKG1hc3MsIGFyZWEsIGF4ZXMsIGluZXJ0aWEpLCBmcm9tIGEgd29ybGQtc3BhY2UgcG9pbnQgKGRlZmF1bHQgaXMgYm9keSBjZW50cmUpLlxuICAgICAqIEBtZXRob2Qgc2NhbGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbcG9pbnRdXG4gICAgICovXG4gICAgQm9keS5zY2FsZSA9IGZ1bmN0aW9uKGJvZHksIHNjYWxlWCwgc2NhbGVZLCBwb2ludCkge1xuICAgICAgICB2YXIgdG90YWxBcmVhID0gMCxcbiAgICAgICAgICAgIHRvdGFsSW5lcnRpYSA9IDA7XG5cbiAgICAgICAgcG9pbnQgPSBwb2ludCB8fCBib2R5LnBvc2l0aW9uO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuXG4gICAgICAgICAgICAvLyBzY2FsZSB2ZXJ0aWNlc1xuICAgICAgICAgICAgVmVydGljZXMuc2NhbGUocGFydC52ZXJ0aWNlcywgc2NhbGVYLCBzY2FsZVksIHBvaW50KTtcblxuICAgICAgICAgICAgLy8gdXBkYXRlIHByb3BlcnRpZXNcbiAgICAgICAgICAgIHBhcnQuYXhlcyA9IEF4ZXMuZnJvbVZlcnRpY2VzKHBhcnQudmVydGljZXMpO1xuICAgICAgICAgICAgcGFydC5hcmVhID0gVmVydGljZXMuYXJlYShwYXJ0LnZlcnRpY2VzKTtcbiAgICAgICAgICAgIEJvZHkuc2V0TWFzcyhwYXJ0LCBib2R5LmRlbnNpdHkgKiBwYXJ0LmFyZWEpO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgaW5lcnRpYSAocmVxdWlyZXMgdmVydGljZXMgdG8gYmUgYXQgb3JpZ2luKVxuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIHsgeDogLXBhcnQucG9zaXRpb24ueCwgeTogLXBhcnQucG9zaXRpb24ueSB9KTtcbiAgICAgICAgICAgIEJvZHkuc2V0SW5lcnRpYShwYXJ0LCBCb2R5Ll9pbmVydGlhU2NhbGUgKiBWZXJ0aWNlcy5pbmVydGlhKHBhcnQudmVydGljZXMsIHBhcnQubWFzcykpO1xuICAgICAgICAgICAgVmVydGljZXMudHJhbnNsYXRlKHBhcnQudmVydGljZXMsIHsgeDogcGFydC5wb3NpdGlvbi54LCB5OiBwYXJ0LnBvc2l0aW9uLnkgfSk7XG5cbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHRvdGFsQXJlYSArPSBwYXJ0LmFyZWE7XG4gICAgICAgICAgICAgICAgdG90YWxJbmVydGlhICs9IHBhcnQuaW5lcnRpYTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gc2NhbGUgcG9zaXRpb25cbiAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCA9IHBvaW50LnggKyAocGFydC5wb3NpdGlvbi54IC0gcG9pbnQueCkgKiBzY2FsZVg7XG4gICAgICAgICAgICBwYXJ0LnBvc2l0aW9uLnkgPSBwb2ludC55ICsgKHBhcnQucG9zaXRpb24ueSAtIHBvaW50LnkpICogc2NhbGVZO1xuXG4gICAgICAgICAgICAvLyB1cGRhdGUgYm91bmRzXG4gICAgICAgICAgICBCb3VuZHMudXBkYXRlKHBhcnQuYm91bmRzLCBwYXJ0LnZlcnRpY2VzLCBib2R5LnZlbG9jaXR5KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGhhbmRsZSBwYXJlbnQgYm9keVxuICAgICAgICBpZiAoYm9keS5wYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICBib2R5LmFyZWEgPSB0b3RhbEFyZWE7XG5cbiAgICAgICAgICAgIGlmICghYm9keS5pc1N0YXRpYykge1xuICAgICAgICAgICAgICAgIEJvZHkuc2V0TWFzcyhib2R5LCBib2R5LmRlbnNpdHkgKiB0b3RhbEFyZWEpO1xuICAgICAgICAgICAgICAgIEJvZHkuc2V0SW5lcnRpYShib2R5LCB0b3RhbEluZXJ0aWEpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIGNpcmNsZXNcbiAgICAgICAgaWYgKGJvZHkuY2lyY2xlUmFkaXVzKSB7IFxuICAgICAgICAgICAgaWYgKHNjYWxlWCA9PT0gc2NhbGVZKSB7XG4gICAgICAgICAgICAgICAgYm9keS5jaXJjbGVSYWRpdXMgKj0gc2NhbGVYO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAvLyBib2R5IGlzIG5vIGxvbmdlciBhIGNpcmNsZVxuICAgICAgICAgICAgICAgIGJvZHkuY2lyY2xlUmFkaXVzID0gbnVsbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQZXJmb3JtcyBhbiB1cGRhdGUgYnkgaW50ZWdyYXRpbmcgdGhlIGVxdWF0aW9ucyBvZiBtb3Rpb24gb24gdGhlIGBib2R5YC5cbiAgICAgKiBUaGlzIGlzIGFwcGxpZWQgZXZlcnkgdXBkYXRlIGJ5IGBNYXR0ZXIuRW5naW5lYCBhdXRvbWF0aWNhbGx5LlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWx0YVRpbWU9MTYuNjY2XVxuICAgICAqL1xuICAgIEJvZHkudXBkYXRlID0gZnVuY3Rpb24oYm9keSwgZGVsdGFUaW1lKSB7XG4gICAgICAgIGRlbHRhVGltZSA9ICh0eXBlb2YgZGVsdGFUaW1lICE9PSAndW5kZWZpbmVkJyA/IGRlbHRhVGltZSA6ICgxMDAwIC8gNjApKSAqIGJvZHkudGltZVNjYWxlO1xuXG4gICAgICAgIHZhciBkZWx0YVRpbWVTcXVhcmVkID0gZGVsdGFUaW1lICogZGVsdGFUaW1lLFxuICAgICAgICAgICAgY29ycmVjdGlvbiA9IEJvZHkuX3RpbWVDb3JyZWN0aW9uID8gZGVsdGFUaW1lIC8gKGJvZHkuZGVsdGFUaW1lIHx8IGRlbHRhVGltZSkgOiAxO1xuXG4gICAgICAgIC8vIGZyb20gdGhlIHByZXZpb3VzIHN0ZXBcbiAgICAgICAgdmFyIGZyaWN0aW9uQWlyID0gMSAtIGJvZHkuZnJpY3Rpb25BaXIgKiAoZGVsdGFUaW1lIC8gQ29tbW9uLl9iYXNlRGVsdGEpLFxuICAgICAgICAgICAgdmVsb2NpdHlQcmV2WCA9IChib2R5LnBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uUHJldi54KSAqIGNvcnJlY3Rpb24sXG4gICAgICAgICAgICB2ZWxvY2l0eVByZXZZID0gKGJvZHkucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb25QcmV2LnkpICogY29ycmVjdGlvbjtcblxuICAgICAgICAvLyB1cGRhdGUgdmVsb2NpdHkgd2l0aCBWZXJsZXQgaW50ZWdyYXRpb25cbiAgICAgICAgYm9keS52ZWxvY2l0eS54ID0gKHZlbG9jaXR5UHJldlggKiBmcmljdGlvbkFpcikgKyAoYm9keS5mb3JjZS54IC8gYm9keS5tYXNzKSAqIGRlbHRhVGltZVNxdWFyZWQ7XG4gICAgICAgIGJvZHkudmVsb2NpdHkueSA9ICh2ZWxvY2l0eVByZXZZICogZnJpY3Rpb25BaXIpICsgKGJvZHkuZm9yY2UueSAvIGJvZHkubWFzcykgKiBkZWx0YVRpbWVTcXVhcmVkO1xuXG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggPSBib2R5LnBvc2l0aW9uLng7XG4gICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnkgPSBib2R5LnBvc2l0aW9uLnk7XG4gICAgICAgIGJvZHkucG9zaXRpb24ueCArPSBib2R5LnZlbG9jaXR5Lng7XG4gICAgICAgIGJvZHkucG9zaXRpb24ueSArPSBib2R5LnZlbG9jaXR5Lnk7XG4gICAgICAgIGJvZHkuZGVsdGFUaW1lID0gZGVsdGFUaW1lO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBhbmd1bGFyIHZlbG9jaXR5IHdpdGggVmVybGV0IGludGVncmF0aW9uXG4gICAgICAgIGJvZHkuYW5ndWxhclZlbG9jaXR5ID0gKChib2R5LmFuZ2xlIC0gYm9keS5hbmdsZVByZXYpICogZnJpY3Rpb25BaXIgKiBjb3JyZWN0aW9uKSArIChib2R5LnRvcnF1ZSAvIGJvZHkuaW5lcnRpYSkgKiBkZWx0YVRpbWVTcXVhcmVkO1xuICAgICAgICBib2R5LmFuZ2xlUHJldiA9IGJvZHkuYW5nbGU7XG4gICAgICAgIGJvZHkuYW5nbGUgKz0gYm9keS5hbmd1bGFyVmVsb2NpdHk7XG5cbiAgICAgICAgLy8gdHJhbnNmb3JtIHRoZSBib2R5IGdlb21ldHJ5XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2ldO1xuXG4gICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUocGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChpID4gMCkge1xuICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueCArPSBib2R5LnZlbG9jaXR5Lng7XG4gICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ICs9IGJvZHkudmVsb2NpdHkueTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGJvZHkuYW5ndWxhclZlbG9jaXR5ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgVmVydGljZXMucm90YXRlKHBhcnQudmVydGljZXMsIGJvZHkuYW5ndWxhclZlbG9jaXR5LCBib2R5LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICBBeGVzLnJvdGF0ZShwYXJ0LmF4ZXMsIGJvZHkuYW5ndWxhclZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICBpZiAoaSA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZUFib3V0KHBhcnQucG9zaXRpb24sIGJvZHkuYW5ndWxhclZlbG9jaXR5LCBib2R5LnBvc2l0aW9uLCBwYXJ0LnBvc2l0aW9uKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIEJvdW5kcy51cGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIGJvZHkudmVsb2NpdHkpO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFVwZGF0ZXMgcHJvcGVydGllcyBgYm9keS52ZWxvY2l0eWAsIGBib2R5LnNwZWVkYCwgYGJvZHkuYW5ndWxhclZlbG9jaXR5YCBhbmQgYGJvZHkuYW5ndWxhclNwZWVkYCB3aGljaCBhcmUgbm9ybWFsaXNlZCBpbiByZWxhdGlvbiB0byBgQm9keS5fYmFzZURlbHRhYC5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVZlbG9jaXRpZXNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKi9cbiAgICBCb2R5LnVwZGF0ZVZlbG9jaXRpZXMgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICAgIHZhciB0aW1lU2NhbGUgPSBCb2R5Ll9iYXNlRGVsdGEgLyBib2R5LmRlbHRhVGltZSxcbiAgICAgICAgICAgIGJvZHlWZWxvY2l0eSA9IGJvZHkudmVsb2NpdHk7XG5cbiAgICAgICAgYm9keVZlbG9jaXR5LnggPSAoYm9keS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvblByZXYueCkgKiB0aW1lU2NhbGU7XG4gICAgICAgIGJvZHlWZWxvY2l0eS55ID0gKGJvZHkucG9zaXRpb24ueSAtIGJvZHkucG9zaXRpb25QcmV2LnkpICogdGltZVNjYWxlO1xuICAgICAgICBib2R5LnNwZWVkID0gTWF0aC5zcXJ0KChib2R5VmVsb2NpdHkueCAqIGJvZHlWZWxvY2l0eS54KSArIChib2R5VmVsb2NpdHkueSAqIGJvZHlWZWxvY2l0eS55KSk7XG5cbiAgICAgICAgYm9keS5hbmd1bGFyVmVsb2NpdHkgPSAoYm9keS5hbmdsZSAtIGJvZHkuYW5nbGVQcmV2KSAqIHRpbWVTY2FsZTtcbiAgICAgICAgYm9keS5hbmd1bGFyU3BlZWQgPSBNYXRoLmFicyhib2R5LmFuZ3VsYXJWZWxvY2l0eSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgdGhlIGBmb3JjZWAgdG8gdGhlIGBib2R5YCBmcm9tIHRoZSBmb3JjZSBvcmlnaW4gYHBvc2l0aW9uYCBpbiB3b3JsZC1zcGFjZSwgb3ZlciBhIHNpbmdsZSB0aW1lc3RlcCwgaW5jbHVkaW5nIGFwcGx5aW5nIGFueSByZXN1bHRpbmcgYW5ndWxhciB0b3JxdWUuXG4gICAgICogXG4gICAgICogRm9yY2VzIGFyZSB1c2VmdWwgZm9yIGVmZmVjdHMgbGlrZSBncmF2aXR5LCB3aW5kIG9yIHJvY2tldCB0aHJ1c3QsIGJ1dCBjYW4gYmUgZGlmZmljdWx0IGluIHByYWN0aWNlIHdoZW4gcHJlY2lzZSBjb250cm9sIGlzIG5lZWRlZC4gSW4gdGhlc2UgY2FzZXMgc2VlIGBCb2R5LnNldFZlbG9jaXR5YCBhbmQgYEJvZHkuc2V0UG9zaXRpb25gIGFzIGFuIGFsdGVybmF0aXZlLlxuICAgICAqIFxuICAgICAqIFRoZSBmb3JjZSBmcm9tIHRoaXMgZnVuY3Rpb24gaXMgb25seSBhcHBsaWVkIG9uY2UgZm9yIHRoZSBkdXJhdGlvbiBvZiBhIHNpbmdsZSB0aW1lc3RlcCwgaW4gb3RoZXIgd29yZHMgdGhlIGR1cmF0aW9uIGRlcGVuZHMgZGlyZWN0bHkgb24gdGhlIGN1cnJlbnQgZW5naW5lIHVwZGF0ZSBgZGVsdGFgIGFuZCB0aGUgcmF0ZSBvZiBjYWxscyB0byB0aGlzIGZ1bmN0aW9uLlxuICAgICAqIFxuICAgICAqIFRoZXJlZm9yZSB0byBhY2NvdW50IGZvciB0aW1lLCB5b3Ugc2hvdWxkIGFwcGx5IHRoZSBmb3JjZSBjb25zdGFudGx5IG92ZXIgYXMgbWFueSBlbmdpbmUgdXBkYXRlcyBhcyBlcXVpdmFsZW50IHRvIHRoZSBpbnRlbmRlZCBkdXJhdGlvbi5cbiAgICAgKiBcbiAgICAgKiBJZiBhbGwgb3IgcGFydCBvZiB0aGUgZm9yY2UgZHVyYXRpb24gaXMgc29tZSBmcmFjdGlvbiBvZiBhIHRpbWVzdGVwLCBmaXJzdCBtdWx0aXBseSB0aGUgZm9yY2UgYnkgYGR1cmF0aW9uIC8gdGltZXN0ZXBgLlxuICAgICAqIFxuICAgICAqIFRoZSBmb3JjZSBvcmlnaW4gYHBvc2l0aW9uYCBpbiB3b3JsZC1zcGFjZSBtdXN0IGFsc28gYmUgc3BlY2lmaWVkLiBQYXNzaW5nIGBib2R5LnBvc2l0aW9uYCB3aWxsIHJlc3VsdCBpbiB6ZXJvIGFuZ3VsYXIgZWZmZWN0IGFzIHRoZSBmb3JjZSBvcmlnaW4gd291bGQgYmUgYXQgdGhlIGNlbnRyZSBvZiBtYXNzLlxuICAgICAqIFxuICAgICAqIFRoZSBgYm9keWAgd2lsbCB0YWtlIHRpbWUgdG8gYWNjZWxlcmF0ZSB1bmRlciBhIGZvcmNlLCB0aGUgcmVzdWx0aW5nIGVmZmVjdCBkZXBlbmRzIG9uIGR1cmF0aW9uIG9mIHRoZSBmb3JjZSwgdGhlIGJvZHkgbWFzcyBhbmQgb3RoZXIgZm9yY2VzIG9uIHRoZSBib2R5IGluY2x1ZGluZyBmcmljdGlvbiBjb21iaW5lZC5cbiAgICAgKiBAbWV0aG9kIGFwcGx5Rm9yY2VcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9zaXRpb24gVGhlIGZvcmNlIG9yaWdpbiBpbiB3b3JsZC1zcGFjZS4gUGFzcyBgYm9keS5wb3NpdGlvbmAgdG8gYXZvaWQgYW5ndWxhciB0b3JxdWUuXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IGZvcmNlXG4gICAgICovXG4gICAgQm9keS5hcHBseUZvcmNlID0gZnVuY3Rpb24oYm9keSwgcG9zaXRpb24sIGZvcmNlKSB7XG4gICAgICAgIHZhciBvZmZzZXQgPSB7IHg6IHBvc2l0aW9uLnggLSBib2R5LnBvc2l0aW9uLngsIHk6IHBvc2l0aW9uLnkgLSBib2R5LnBvc2l0aW9uLnkgfTtcbiAgICAgICAgYm9keS5mb3JjZS54ICs9IGZvcmNlLng7XG4gICAgICAgIGJvZHkuZm9yY2UueSArPSBmb3JjZS55O1xuICAgICAgICBib2R5LnRvcnF1ZSArPSBvZmZzZXQueCAqIGZvcmNlLnkgLSBvZmZzZXQueSAqIGZvcmNlLng7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHN1bXMgb2YgdGhlIHByb3BlcnRpZXMgb2YgYWxsIGNvbXBvdW5kIHBhcnRzIG9mIHRoZSBwYXJlbnQgYm9keS5cbiAgICAgKiBAbWV0aG9kIF90b3RhbFByb3BlcnRpZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEByZXR1cm4ge31cbiAgICAgKi9cbiAgICBCb2R5Ll90b3RhbFByb3BlcnRpZXMgPSBmdW5jdGlvbihib2R5KSB7XG4gICAgICAgIC8vIGZyb20gZXF1YXRpb25zIGF0OlxuICAgICAgICAvLyBodHRwczovL2Vjb3Vyc2VzLm91LmVkdS9jZ2ktYmluL2Vib29rLmNnaT9kb2M9JnRvcGljPXN0JmNoYXBfc2VjPTA3LjImcGFnZT10aGVvcnlcbiAgICAgICAgLy8gaHR0cDovL291dHB1dC50by9zaWRld2F5L2RlZmF1bHQuYXNwP3Fubz0xMjExMDAwODdcblxuICAgICAgICB2YXIgcHJvcGVydGllcyA9IHtcbiAgICAgICAgICAgIG1hc3M6IDAsXG4gICAgICAgICAgICBhcmVhOiAwLFxuICAgICAgICAgICAgaW5lcnRpYTogMCxcbiAgICAgICAgICAgIGNlbnRyZTogeyB4OiAwLCB5OiAwIH1cbiAgICAgICAgfTtcblxuICAgICAgICAvLyBzdW0gdGhlIHByb3BlcnRpZXMgb2YgYWxsIGNvbXBvdW5kIHBhcnRzIG9mIHRoZSBwYXJlbnQgYm9keVxuICAgICAgICBmb3IgKHZhciBpID0gYm9keS5wYXJ0cy5sZW5ndGggPT09IDEgPyAwIDogMTsgaSA8IGJvZHkucGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tpXSxcbiAgICAgICAgICAgICAgICBtYXNzID0gcGFydC5tYXNzICE9PSBJbmZpbml0eSA/IHBhcnQubWFzcyA6IDE7XG5cbiAgICAgICAgICAgIHByb3BlcnRpZXMubWFzcyArPSBtYXNzO1xuICAgICAgICAgICAgcHJvcGVydGllcy5hcmVhICs9IHBhcnQuYXJlYTtcbiAgICAgICAgICAgIHByb3BlcnRpZXMuaW5lcnRpYSArPSBwYXJ0LmluZXJ0aWE7XG4gICAgICAgICAgICBwcm9wZXJ0aWVzLmNlbnRyZSA9IFZlY3Rvci5hZGQocHJvcGVydGllcy5jZW50cmUsIFZlY3Rvci5tdWx0KHBhcnQucG9zaXRpb24sIG1hc3MpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByb3BlcnRpZXMuY2VudHJlID0gVmVjdG9yLmRpdihwcm9wZXJ0aWVzLmNlbnRyZSwgcHJvcGVydGllcy5tYXNzKTtcblxuICAgICAgICByZXR1cm4gcHJvcGVydGllcztcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGJvZHkgc3RhcnRzIHNsZWVwaW5nICh3aGVyZSBgdGhpc2AgaXMgdGhlIGJvZHkpLlxuICAgICpcbiAgICAqIEBldmVudCBzbGVlcFN0YXJ0XG4gICAgKiBAdGhpcyB7Ym9keX0gVGhlIGJvZHkgdGhhdCBoYXMgc3RhcnRlZCBzbGVlcGluZ1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBib2R5IGVuZHMgc2xlZXBpbmcgKHdoZXJlIGB0aGlzYCBpcyB0aGUgYm9keSkuXG4gICAgKlxuICAgICogQGV2ZW50IHNsZWVwRW5kXG4gICAgKiBAdGhpcyB7Ym9keX0gVGhlIGJvZHkgdGhhdCBoYXMgZW5kZWQgc2xlZXBpbmdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgUHJvcGVydGllcyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBpbnRlZ2VyIGBOdW1iZXJgIHVuaXF1ZWx5IGlkZW50aWZ5aW5nIG51bWJlciBnZW5lcmF0ZWQgaW4gYEJvZHkuY3JlYXRlYCBieSBgQ29tbW9uLm5leHRJZGAuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgaWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBTZXQgYnkgYEJvZHkuY3JlYXRlYC5cbiAgICAgKiBcbiAgICAgKiBBIGBTdHJpbmdgIGRlbm90aW5nIHRoZSB0eXBlIG9mIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSB0eXBlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJib2R5XCJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFyYml0cmFyeSBgU3RyaW5nYCBuYW1lIHRvIGhlbHAgdGhlIHVzZXIgaWRlbnRpZnkgYW5kIG1hbmFnZSBib2RpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGFiZWxcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcIkJvZHlcIlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIFVzZSBgQm9keS5zZXRQYXJ0c2AgdG8gc2V0LiBcbiAgICAgKiBcbiAgICAgKiBTZWUgYEJvZGllcy5mcm9tVmVydGljZXNgIGZvciBhIHJlbGF0ZWQgdXRpbGl0eS5cbiAgICAgKiBcbiAgICAgKiBBbiBhcnJheSBvZiBib2RpZXMgKHRoZSAncGFydHMnKSB0aGF0IG1ha2UgdXAgdGhpcyBib2R5ICh0aGUgJ3BhcmVudCcpLiBUaGUgZmlyc3QgYm9keSBpbiB0aGlzIGFycmF5IG11c3QgYWx3YXlzIGJlIGEgc2VsZi1yZWZlcmVuY2UgdG8gdGhpcyBgYm9keWAuICBcbiAgICAgKiBcbiAgICAgKiBUaGUgcGFydHMgYXJlIGZpeGVkIHRvZ2V0aGVyIGFuZCB0aGVyZWZvcmUgcGVyZm9ybSBhcyBhIHNpbmdsZSB1bmlmaWVkIHJpZ2lkIGJvZHkuXG4gICAgICogXG4gICAgICogUGFydHMgaW4gcmVsYXRpb24gdG8gZWFjaCBvdGhlciBhcmUgYWxsb3dlZCB0byBvdmVybGFwLCBhcyB3ZWxsIGFzIGZvcm0gZ2FwcyBvciBob2xlcywgc28gY2FuIGJlIHVzZWQgdG8gY3JlYXRlIGNvbXBsZXggY29uY2F2ZSBib2RpZXMgdW5saWtlIHdoZW4gdXNpbmcgYSBzaW5nbGUgcGFydC4gXG4gICAgICogXG4gICAgICogVXNlIHByb3BlcnRpZXMgYW5kIGZ1bmN0aW9ucyBvbiB0aGUgcGFyZW50IGBib2R5YCByYXRoZXIgdGhhbiBvbiBwYXJ0cy5cbiAgICAgKiAgIFxuICAgICAqIE91dHNpZGUgb2YgdGhlaXIgZ2VvbWV0cnksIG1vc3QgcHJvcGVydGllcyBvbiBwYXJ0cyBhcmUgbm90IGNvbnNpZGVyZWQgb3IgdXBkYXRlZC4gIFxuICAgICAqIEFzIHN1Y2ggJ3Blci1wYXJ0JyBtYXRlcmlhbCBwcm9wZXJ0aWVzIGFtb25nIG90aGVycyBhcmUgbm90IGN1cnJlbnRseSBjb25zaWRlcmVkLlxuICAgICAqIFxuICAgICAqIFBhcnRzIHNob3VsZCBiZSBjcmVhdGVkIHNwZWNpZmljYWxseSBmb3IgdGhlaXIgcGFyZW50IGJvZHkuICBcbiAgICAgKiBQYXJ0cyBzaG91bGQgbm90IGJlIHNoYXJlZCBvciByZXVzZWQgYmV0d2VlbiBib2RpZXMsIG9ubHkgb25lIHBhcmVudCBpcyBzdXBwb3J0ZWQuICBcbiAgICAgKiBQYXJ0cyBzaG91bGQgbm90IGhhdmUgdGhlaXIgb3duIHBhcnRzLCB0aGV5IGFyZSBub3QgaGFuZGxlZCByZWN1cnNpdmVseS4gIFxuICAgICAqIFBhcnRzIHNob3VsZCBub3QgYmUgYWRkZWQgdG8gdGhlIHdvcmxkIGRpcmVjdGx5IG9yIGFueSBvdGhlciBjb21wb3NpdGUuICBcbiAgICAgKiBQYXJ0cyBvd24gdmVydGljZXMgbXVzdCBiZSBjb252ZXggYW5kIGluIGNsb2Nrd2lzZSBvcmRlci4gICBcbiAgICAgKiBcbiAgICAgKiBBIGJvZHkgd2l0aCBtb3JlIHRoYW4gb25lIHBhcnQgaXMgc29tZXRpbWVzIHJlZmVycmVkIHRvIGFzIGEgJ2NvbXBvdW5kJyBib2R5LiBcbiAgICAgKiBcbiAgICAgKiBVc2UgYEJvZHkuc2V0UGFydHNgIHdoZW4gc2V0dGluZyBwYXJ0cyB0byBlbnN1cmUgY29ycmVjdCB1cGRhdGVzIG9mIGFsbCBwcm9wZXJ0aWVzLiAgXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgcGFydHNcbiAgICAgKiBAdHlwZSBib2R5W11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIFVwZGF0ZWQgYnkgYEJvZHkuc2V0UGFydHNgLlxuICAgICAqIFxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBib2R5IHRoYXQgdGhpcyBpcyBhIHBhcnQgb2YuIFNlZSBgYm9keS5wYXJ0c2AuXG4gICAgICogVGhpcyBpcyBhIHNlbGYgcmVmZXJlbmNlIGlmIHRoZSBib2R5IGlzIG5vdCBhIHBhcnQgb2YgYW5vdGhlciBib2R5LlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IHBhcmVudFxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgc3BlY2lmeWluZyB0aGUgYW5nbGUgb2YgdGhlIGJvZHksIGluIHJhZGlhbnMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYW5nbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gVXNlIGBCb2R5LnNldFZlcnRpY2VzYCBvciBgQm9keS5zZXRQYXJ0c2AgdG8gc2V0LiBTZWUgYWxzbyBgQm9kaWVzLmZyb21WZXJ0aWNlc2AuXG4gICAgICogXG4gICAgICogQW4gYXJyYXkgb2YgYFZlY3RvcmAgb2JqZWN0cyB0aGF0IHNwZWNpZnkgdGhlIGNvbnZleCBodWxsIG9mIHRoZSByaWdpZCBib2R5LlxuICAgICAqIFRoZXNlIHNob3VsZCBiZSBwcm92aWRlZCBhYm91dCB0aGUgb3JpZ2luIGAoMCwgMClgLiBFLmcuXG4gICAgICpcbiAgICAgKiBgW3sgeDogMCwgeTogMCB9LCB7IHg6IDI1LCB5OiA1MCB9LCB7IHg6IDUwLCB5OiAwIH1dYFxuICAgICAqIFxuICAgICAqIFZlcnRpY2VzIG11c3QgYWx3YXlzIGJlIGNvbnZleCwgaW4gY2xvY2t3aXNlIG9yZGVyIGFuZCBtdXN0IG5vdCBjb250YWluIGFueSBkdXBsaWNhdGUgcG9pbnRzLlxuICAgICAqIFxuICAgICAqIENvbmNhdmUgdmVydGljZXMgc2hvdWxkIGJlIGRlY29tcG9zZWQgaW50byBjb252ZXggYHBhcnRzYCwgc2VlIGBCb2RpZXMuZnJvbVZlcnRpY2VzYCBhbmQgYEJvZHkuc2V0UGFydHNgLlxuICAgICAqXG4gICAgICogV2hlbiBzZXQgdGhlIHZlcnRpY2VzIGFyZSB0cmFuc2xhdGVkIHN1Y2ggdGhhdCBgYm9keS5wb3NpdGlvbmAgaXMgYXQgdGhlIGNlbnRyZSBvZiBtYXNzLlxuICAgICAqIE1hbnkgb3RoZXIgYm9keSBwcm9wZXJ0aWVzIGFyZSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgZnJvbSB0aGVzZSB2ZXJ0aWNlcyB3aGVuIHNldCBpbmNsdWRpbmcgYGRlbnNpdHlgLCBgYXJlYWAgYW5kIGBpbmVydGlhYC5cbiAgICAgKiBcbiAgICAgKiBUaGUgbW9kdWxlIGBNYXR0ZXIuVmVydGljZXNgIGNvbnRhaW5zIHVzZWZ1bCBtZXRob2RzIGZvciB3b3JraW5nIHdpdGggdmVydGljZXMuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgdmVydGljZXNcbiAgICAgKiBAdHlwZSB2ZWN0b3JbXVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIFVzZSBgQm9keS5zZXRQb3NpdGlvbmAgdG8gc2V0LiBcbiAgICAgKiBcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgc3BlY2lmaWVzIHRoZSBjdXJyZW50IHdvcmxkLXNwYWNlIHBvc2l0aW9uIG9mIHRoZSBib2R5LlxuICAgICAqIFxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBwb3NpdGlvblxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgYWNjdW11bGF0ZXMgdGhlIHRvdGFsIGZvcmNlIGFwcGxpZWQgdG8gdGhlIGJvZHkgZm9yIGEgc2luZ2xlIHVwZGF0ZS5cbiAgICAgKiBGb3JjZSBpcyB6ZXJvZWQgYWZ0ZXIgZXZlcnkgYEVuZ2luZS51cGRhdGVgLCBzbyBjb25zdGFudCBmb3JjZXMgc2hvdWxkIGJlIGFwcGxpZWQgZm9yIGV2ZXJ5IHVwZGF0ZSB0aGV5IGFyZSBuZWVkZWQuIFNlZSBhbHNvIGBCb2R5LmFwcGx5Rm9yY2VgLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBmb3JjZVxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgYWNjdW11bGF0ZXMgdGhlIHRvdGFsIHRvcnF1ZSAodHVybmluZyBmb3JjZSkgYXBwbGllZCB0byB0aGUgYm9keSBmb3IgYSBzaW5nbGUgdXBkYXRlLiBTZWUgYWxzbyBgQm9keS5hcHBseUZvcmNlYC5cbiAgICAgKiBUb3JxdWUgaXMgemVyb2VkIGFmdGVyIGV2ZXJ5IGBFbmdpbmUudXBkYXRlYCwgc28gY29uc3RhbnQgdG9ycXVlcyBzaG91bGQgYmUgYXBwbGllZCBmb3IgZXZlcnkgdXBkYXRlIHRoZXkgYXJlIG5lZWRlZC5cbiAgICAgKlxuICAgICAqIFRvcnF1ZXMgcmVzdWx0IGluIGFuZ3VsYXIgYWNjZWxlcmF0aW9uIG9uIGV2ZXJ5IHVwZGF0ZSwgd2hpY2ggZGVwZW5kcyBvbiBib2R5IGluZXJ0aWEgYW5kIHRoZSBlbmdpbmUgdXBkYXRlIGRlbHRhLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB0b3JxdWVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gVXNlIGBCb2R5LnNldFNwZWVkYCB0byBzZXQuIFxuICAgICAqIFxuICAgICAqIFNlZSBgQm9keS5nZXRTcGVlZGAgZm9yIGRldGFpbHMuXG4gICAgICogXG4gICAgICogRXF1aXZhbGVudCB0byB0aGUgbWFnbml0dWRlIG9mIGBib2R5LnZlbG9jaXR5YCAoYWx3YXlzIHBvc2l0aXZlKS5cbiAgICAgKiBcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgc3BlZWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gVXNlIGBCb2R5LnNldFZlbG9jaXR5YCB0byBzZXQuIFxuICAgICAqIFxuICAgICAqIFNlZSBgQm9keS5nZXRWZWxvY2l0eWAgZm9yIGRldGFpbHMuXG4gICAgICogXG4gICAgICogRXF1aXZhbGVudCB0byB0aGUgbWFnbml0dWRlIG9mIGBib2R5LmFuZ3VsYXJWZWxvY2l0eWAgKGFsd2F5cyBwb3NpdGl2ZSkuXG4gICAgICogXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IHZlbG9jaXR5XG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBVc2UgYEJvZHkuc2V0QW5ndWxhclNwZWVkYCB0byBzZXQuIFxuICAgICAqIFxuICAgICAqIFNlZSBgQm9keS5nZXRBbmd1bGFyU3BlZWRgIGZvciBkZXRhaWxzLlxuICAgICAqIFxuICAgICAqIFxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBhbmd1bGFyU3BlZWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gVXNlIGBCb2R5LnNldEFuZ3VsYXJWZWxvY2l0eWAgdG8gc2V0LiBcbiAgICAgKiBcbiAgICAgKiBTZWUgYEJvZHkuZ2V0QW5ndWxhclZlbG9jaXR5YCBmb3IgZGV0YWlscy5cbiAgICAgKiBcbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBhbmd1bGFyVmVsb2NpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gVXNlIGBCb2R5LnNldFN0YXRpY2AgdG8gc2V0LiBcbiAgICAgKiBcbiAgICAgKiBBIGZsYWcgdGhhdCBpbmRpY2F0ZXMgd2hldGhlciBhIGJvZHkgaXMgY29uc2lkZXJlZCBzdGF0aWMuIEEgc3RhdGljIGJvZHkgY2FuIG5ldmVyIGNoYW5nZSBwb3NpdGlvbiBvciBhbmdsZSBhbmQgaXMgY29tcGxldGVseSBmaXhlZC5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBpc1N0YXRpY1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgYSBib2R5IGlzIGEgc2Vuc29yLiBTZW5zb3IgdHJpZ2dlcnMgY29sbGlzaW9uIGV2ZW50cywgYnV0IGRvZXNuJ3QgcmVhY3Qgd2l0aCBjb2xsaWRpbmcgYm9keSBwaHlzaWNhbGx5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzU2Vuc29yXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gVXNlIGBTbGVlcGluZy5zZXRgIHRvIHNldC4gXG4gICAgICogXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIHdoZXRoZXIgdGhlIGJvZHkgaXMgY29uc2lkZXJlZCBzbGVlcGluZy4gQSBzbGVlcGluZyBib2R5IGFjdHMgc2ltaWxhciB0byBhIHN0YXRpYyBib2R5LCBleGNlcHQgaXQgaXMgb25seSB0ZW1wb3JhcnkgYW5kIGNhbiBiZSBhd29rZW4uXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgaXNTbGVlcGluZ1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIENhbGN1bGF0ZWQgZHVyaW5nIGVuZ2luZSB1cGRhdGUgb25seSB3aGVuIHNsZWVwaW5nIGlzIGVuYWJsZWQuXG4gICAgICogXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGxvb3NlbHkgbWVhc3VyZXMgdGhlIGFtb3VudCBvZiBtb3ZlbWVudCBhIGJvZHkgY3VycmVudGx5IGhhcy5cbiAgICAgKlxuICAgICAqIERlcml2ZWQgZnJvbSBgYm9keS5zcGVlZF4yICsgYm9keS5hbmd1bGFyU3BlZWReMmAuIFNlZSBgU2xlZXBpbmcudXBkYXRlYC5cbiAgICAgKiBcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgbW90aW9uXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGxlbmd0aCBvZiB0aW1lIGR1cmluZyB3aGljaCB0aGlzIGJvZHkgbXVzdCBoYXZlIG5lYXItemVybyB2ZWxvY2l0eSBiZWZvcmUgaXQgaXMgc2V0IGFzIHNsZWVwaW5nIGJ5IHRoZSBgTWF0dGVyLlNsZWVwaW5nYCBtb2R1bGUgKGlmIHNsZWVwaW5nIGlzIGVuYWJsZWQgYnkgdGhlIGVuZ2luZSkuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHNsZWVwVGhyZXNob2xkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgNjBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBVc2UgYEJvZHkuc2V0RGVuc2l0eWAgdG8gc2V0LiBcbiAgICAgKiBcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgZGVuc2l0eSBvZiB0aGUgYm9keSAobWFzcyBwZXIgdW5pdCBhcmVhKS5cbiAgICAgKiBcbiAgICAgKiBNYXNzIHdpbGwgYWxzbyBiZSB1cGRhdGVkIHdoZW4gc2V0LlxuICAgICAqXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IGRlbnNpdHlcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjAwMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIFVzZSBgQm9keS5zZXRNYXNzYCB0byBzZXQuIFxuICAgICAqIFxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBtYXNzIG9mIHRoZSBib2R5LlxuICAgICAqIFxuICAgICAqIERlbnNpdHkgd2lsbCBhbHNvIGJlIHVwZGF0ZWQgd2hlbiBzZXQuXG4gICAgICogXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IG1hc3NcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIF9SZWFkIG9ubHlfLiBVc2UgYEJvZHkuc2V0TWFzc2AgdG8gc2V0LiBcbiAgICAgKiBcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgaW52ZXJzZSBtYXNzIG9mIHRoZSBib2R5IChgMSAvIG1hc3NgKS5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBpbnZlcnNlTWFzc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIEF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCB3aGVuIHZlcnRpY2VzLCBtYXNzIG9yIGRlbnNpdHkgYXJlIHNldCBvciBzZXQgdGhyb3VnaCBgQm9keS5zZXRJbmVydGlhYC5cbiAgICAgKiBcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgbW9tZW50IG9mIGluZXJ0aWEgb2YgdGhlIGJvZHkuIFRoaXMgaXMgdGhlIHNlY29uZCBtb21lbnQgb2YgYXJlYSBpbiB0d28gZGltZW5zaW9ucy5cbiAgICAgKiBcbiAgICAgKiBDYW4gYmUgbWFudWFsbHkgc2V0IHRvIGBJbmZpbml0eWAgdG8gcHJldmVudCByb3RhdGlvbiBvZiB0aGUgYm9keS4gU2VlIGBCb2R5LnNldEluZXJ0aWFgLlxuICAgICAqIFxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBpbmVydGlhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gQXV0b21hdGljYWxseSBjYWxjdWxhdGVkIHdoZW4gdmVydGljZXMsIG1hc3Mgb3IgZGVuc2l0eSBhcmUgc2V0IG9yIGNhbGN1bGF0ZWQgYnkgYEJvZHkuc2V0SW5lcnRpYWAuXG4gICAgICogXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGludmVyc2UgbW9tZW50IG9mIGluZXJ0aWEgb2YgdGhlIGJvZHkgKGAxIC8gaW5lcnRpYWApLlxuICAgICAqIFxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBpbnZlcnNlSW5lcnRpYVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIHJlc3RpdHV0aW9uIChlbGFzdGljaXR5KSBvZiB0aGUgYm9keS4gVGhlIHZhbHVlIGlzIGFsd2F5cyBwb3NpdGl2ZSBhbmQgaXMgaW4gdGhlIHJhbmdlIGAoMCwgMSlgLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIGNvbGxpc2lvbnMgbWF5IGJlIHBlcmZlY3RseSBpbmVsYXN0aWMgYW5kIG5vIGJvdW5jaW5nIG1heSBvY2N1ci4gXG4gICAgICogQSB2YWx1ZSBvZiBgMC44YCBtZWFucyB0aGUgYm9keSBtYXkgYm91bmNlIGJhY2sgd2l0aCBhcHByb3hpbWF0ZWx5IDgwJSBvZiBpdHMga2luZXRpYyBlbmVyZ3kuXG4gICAgICogTm90ZSB0aGF0IGNvbGxpc2lvbiByZXNwb25zZSBpcyBiYXNlZCBvbiBfcGFpcnNfIG9mIGJvZGllcywgYW5kIHRoYXQgYHJlc3RpdHV0aW9uYCB2YWx1ZXMgYXJlIF9jb21iaW5lZF8gd2l0aCB0aGUgZm9sbG93aW5nIGZvcm11bGE6XG4gICAgICpcbiAgICAgKiBgTWF0aC5tYXgoYm9keUEucmVzdGl0dXRpb24sIGJvZHlCLnJlc3RpdHV0aW9uKWBcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZXN0aXR1dGlvblxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBmcmljdGlvbiBvZiB0aGUgYm9keS4gVGhlIHZhbHVlIGlzIGFsd2F5cyBwb3NpdGl2ZSBhbmQgaXMgaW4gdGhlIHJhbmdlIGAoMCwgMSlgLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoYXQgdGhlIGJvZHkgbWF5IHNsaWRlIGluZGVmaW5pdGVseS5cbiAgICAgKiBBIHZhbHVlIG9mIGAxYCBtZWFucyB0aGUgYm9keSBtYXkgY29tZSB0byBhIHN0b3AgYWxtb3N0IGluc3RhbnRseSBhZnRlciBhIGZvcmNlIGlzIGFwcGxpZWQuXG4gICAgICpcbiAgICAgKiBUaGUgZWZmZWN0cyBvZiB0aGUgdmFsdWUgbWF5IGJlIG5vbi1saW5lYXIuIFxuICAgICAqIEhpZ2ggdmFsdWVzIG1heSBiZSB1bnN0YWJsZSBkZXBlbmRpbmcgb24gdGhlIGJvZHkuXG4gICAgICogVGhlIGVuZ2luZSB1c2VzIGEgQ291bG9tYiBmcmljdGlvbiBtb2RlbCBpbmNsdWRpbmcgc3RhdGljIGFuZCBraW5ldGljIGZyaWN0aW9uLlxuICAgICAqIE5vdGUgdGhhdCBjb2xsaXNpb24gcmVzcG9uc2UgaXMgYmFzZWQgb24gX3BhaXJzXyBvZiBib2RpZXMsIGFuZCB0aGF0IGBmcmljdGlvbmAgdmFsdWVzIGFyZSBfY29tYmluZWRfIHdpdGggdGhlIGZvbGxvd2luZyBmb3JtdWxhOlxuICAgICAqXG4gICAgICogYE1hdGgubWluKGJvZHlBLmZyaWN0aW9uLCBib2R5Qi5mcmljdGlvbilgXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZnJpY3Rpb25cbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBzdGF0aWMgZnJpY3Rpb24gb2YgdGhlIGJvZHkgKGluIHRoZSBDb3Vsb21iIGZyaWN0aW9uIG1vZGVsKS4gXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgdGhlIGJvZHkgd2lsbCBuZXZlciAnc3RpY2snIHdoZW4gaXQgaXMgbmVhcmx5IHN0YXRpb25hcnkgYW5kIG9ubHkgZHluYW1pYyBgZnJpY3Rpb25gIGlzIHVzZWQuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUgKGUuZy4gYDEwYCksIHRoZSBtb3JlIGZvcmNlIGl0IHdpbGwgdGFrZSB0byBpbml0aWFsbHkgZ2V0IHRoZSBib2R5IG1vdmluZyB3aGVuIG5lYXJseSBzdGF0aW9uYXJ5LlxuICAgICAqIFRoaXMgdmFsdWUgaXMgbXVsdGlwbGllZCB3aXRoIHRoZSBgZnJpY3Rpb25gIHByb3BlcnR5IHRvIG1ha2UgaXQgZWFzaWVyIHRvIGNoYW5nZSBgZnJpY3Rpb25gIGFuZCBtYWludGFpbiBhbiBhcHByb3ByaWF0ZSBhbW91bnQgb2Ygc3RhdGljIGZyaWN0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZyaWN0aW9uU3RhdGljXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMC41XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgYWlyIGZyaWN0aW9uIG9mIHRoZSBib2R5IChhaXIgcmVzaXN0YW5jZSkuIFxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoZSBib2R5IHdpbGwgbmV2ZXIgc2xvdyBhcyBpdCBtb3ZlcyB0aHJvdWdoIHNwYWNlLlxuICAgICAqIFRoZSBoaWdoZXIgdGhlIHZhbHVlLCB0aGUgZmFzdGVyIGEgYm9keSBzbG93cyB3aGVuIG1vdmluZyB0aHJvdWdoIHNwYWNlLlxuICAgICAqIFRoZSBlZmZlY3RzIG9mIHRoZSB2YWx1ZSBhcmUgbm9uLWxpbmVhci4gXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZnJpY3Rpb25BaXJcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGZpbHRlcmluZyBwcm9wZXJ0aWVzIG9mIHRoaXMgYm9keS5cbiAgICAgKlxuICAgICAqIENvbGxpc2lvbnMgYmV0d2VlbiB0d28gYm9kaWVzIHdpbGwgb2JleSB0aGUgZm9sbG93aW5nIHJ1bGVzOlxuICAgICAqIC0gSWYgdGhlIHR3byBib2RpZXMgaGF2ZSB0aGUgc2FtZSBub24temVybyB2YWx1ZSBvZiBgY29sbGlzaW9uRmlsdGVyLmdyb3VwYCxcbiAgICAgKiAgIHRoZXkgd2lsbCBhbHdheXMgY29sbGlkZSBpZiB0aGUgdmFsdWUgaXMgcG9zaXRpdmUsIGFuZCB0aGV5IHdpbGwgbmV2ZXIgY29sbGlkZVxuICAgICAqICAgaWYgdGhlIHZhbHVlIGlzIG5lZ2F0aXZlLlxuICAgICAqIC0gSWYgdGhlIHR3byBib2RpZXMgaGF2ZSBkaWZmZXJlbnQgdmFsdWVzIG9mIGBjb2xsaXNpb25GaWx0ZXIuZ3JvdXBgIG9yIGlmIG9uZVxuICAgICAqICAgKG9yIGJvdGgpIG9mIHRoZSBib2RpZXMgaGFzIGEgdmFsdWUgb2YgMCwgdGhlbiB0aGUgY2F0ZWdvcnkvbWFzayBydWxlcyBhcHBseSBhcyBmb2xsb3dzOlxuICAgICAqXG4gICAgICogRWFjaCBib2R5IGJlbG9uZ3MgdG8gYSBjb2xsaXNpb24gY2F0ZWdvcnksIGdpdmVuIGJ5IGBjb2xsaXNpb25GaWx0ZXIuY2F0ZWdvcnlgLiBUaGlzXG4gICAgICogdmFsdWUgaXMgdXNlZCBhcyBhIGJpdCBmaWVsZCBhbmQgdGhlIGNhdGVnb3J5IHNob3VsZCBoYXZlIG9ubHkgb25lIGJpdCBzZXQsIG1lYW5pbmcgdGhhdFxuICAgICAqIHRoZSB2YWx1ZSBvZiB0aGlzIHByb3BlcnR5IGlzIGEgcG93ZXIgb2YgdHdvIGluIHRoZSByYW5nZSBbMSwgMl4zMV0uIFRodXMsIHRoZXJlIGFyZSAzMlxuICAgICAqIGRpZmZlcmVudCBjb2xsaXNpb24gY2F0ZWdvcmllcyBhdmFpbGFibGUuXG4gICAgICpcbiAgICAgKiBFYWNoIGJvZHkgYWxzbyBkZWZpbmVzIGEgY29sbGlzaW9uIGJpdG1hc2ssIGdpdmVuIGJ5IGBjb2xsaXNpb25GaWx0ZXIubWFza2Agd2hpY2ggc3BlY2lmaWVzXG4gICAgICogdGhlIGNhdGVnb3JpZXMgaXQgY29sbGlkZXMgd2l0aCAodGhlIHZhbHVlIGlzIHRoZSBiaXR3aXNlIEFORCB2YWx1ZSBvZiBhbGwgdGhlc2UgY2F0ZWdvcmllcykuXG4gICAgICpcbiAgICAgKiBVc2luZyB0aGUgY2F0ZWdvcnkvbWFzayBydWxlcywgdHdvIGJvZGllcyBgQWAgYW5kIGBCYCBjb2xsaWRlIGlmIGVhY2ggaW5jbHVkZXMgdGhlIG90aGVyJ3NcbiAgICAgKiBjYXRlZ29yeSBpbiBpdHMgbWFzaywgaS5lLiBgKGNhdGVnb3J5QSAmIG1hc2tCKSAhPT0gMGAgYW5kIGAoY2F0ZWdvcnlCICYgbWFza0EpICE9PSAwYFxuICAgICAqIGFyZSBib3RoIHRydWUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBJbnRlZ2VyIGBOdW1iZXJgLCB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGdyb3VwIHRoaXMgYm9keSBiZWxvbmdzIHRvLlxuICAgICAqIFNlZSBgYm9keS5jb2xsaXNpb25GaWx0ZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbkZpbHRlci5ncm91cFxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYml0IGZpZWxkIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gY2F0ZWdvcnkgdGhpcyBib2R5IGJlbG9uZ3MgdG8uXG4gICAgICogVGhlIGNhdGVnb3J5IHZhbHVlIHNob3VsZCBoYXZlIG9ubHkgb25lIGJpdCBzZXQsIGZvciBleGFtcGxlIGAweDAwMDFgLlxuICAgICAqIFRoaXMgbWVhbnMgdGhlcmUgYXJlIHVwIHRvIDMyIHVuaXF1ZSBjb2xsaXNpb24gY2F0ZWdvcmllcyBhdmFpbGFibGUuXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyLmNhdGVnb3J5XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBiaXQgbWFzayB0aGF0IHNwZWNpZmllcyB0aGUgY29sbGlzaW9uIGNhdGVnb3JpZXMgdGhpcyBib2R5IG1heSBjb2xsaWRlIHdpdGguXG4gICAgICogU2VlIGBib2R5LmNvbGxpc2lvbkZpbHRlcmAgZm9yIG1vcmUgaW5mb3JtYXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29sbGlzaW9uRmlsdGVyLm1hc2tcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAtMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyBhIHRoaW4gYm91bmRhcnkgYXJvdW5kIHRoZSBib2R5IHdoZXJlIGl0IGlzIGFsbG93ZWQgdG8gc2xpZ2h0bHkgc2luayBpbnRvIG90aGVyIGJvZGllcy5cbiAgICAgKiBcbiAgICAgKiBUaGlzIGlzIHJlcXVpcmVkIGZvciBwcm9wZXIgY29sbGlzaW9uIHJlc3BvbnNlLCBpbmNsdWRpbmcgZnJpY3Rpb24gYW5kIHJlc3RpdHV0aW9uIGVmZmVjdHMuXG4gICAgICogXG4gICAgICogVGhlIGRlZmF1bHQgc2hvdWxkIGdlbmVyYWxseSBzdWZmaWNlIGluIG1vc3QgY2FzZXMuIFlvdSBtYXkgbmVlZCB0byBkZWNyZWFzZSB0aGlzIHZhbHVlIGZvciB2ZXJ5IHNtYWxsIGJvZGllcyB0aGF0IGFyZSBuZWFyaW5nIHRoZSBkZWZhdWx0IHZhbHVlIGluIHNjYWxlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHNsb3BcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAwLjA1XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHBlci1ib2R5IHRpbWUgc2NhbGluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1lU2NhbGVcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBfUmVhZCBvbmx5Xy4gVXBkYXRlZCBkdXJpbmcgZW5naW5lIHVwZGF0ZS5cbiAgICAgKiBcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgcmVjb3JkcyB0aGUgbGFzdCBkZWx0YSB0aW1lIHZhbHVlIHVzZWQgdG8gdXBkYXRlIHRoaXMgYm9keS5cbiAgICAgKiBVc2VkIHRvIGNhbGN1bGF0ZSBzcGVlZCBhbmQgdmVsb2NpdHkuXG4gICAgICpcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKiBAcHJvcGVydHkgZGVsdGFUaW1lXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMTAwMCAvIDYwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgT2JqZWN0YCB0aGF0IGRlZmluZXMgdGhlIHJlbmRlcmluZyBwcm9wZXJ0aWVzIHRvIGJlIGNvbnN1bWVkIGJ5IHRoZSBtb2R1bGUgYE1hdHRlci5SZW5kZXJgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlclxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBib2R5IHNob3VsZCBiZSByZW5kZXJlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIudmlzaWJsZVxuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCB0cnVlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBvcGFjaXR5IHRvIHVzZSB3aGVuIHJlbmRlcmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIub3BhY2l0eVxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBkZWZpbmVzIHRoZSBzcHJpdGUgcHJvcGVydGllcyB0byB1c2Ugd2hlbiByZW5kZXJpbmcsIGlmIGFueS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBgU3RyaW5nYCB0aGF0IGRlZmluZXMgdGhlIHBhdGggdG8gdGhlIGltYWdlIHRvIHVzZSBhcyB0aGUgc3ByaXRlIHRleHR1cmUsIGlmIGFueS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3ByaXRlLnRleHR1cmVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKi9cbiAgICAgXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIHNjYWxpbmcgaW4gdGhlIHgtYXhpcyBmb3IgdGhlIHNwcml0ZSwgaWYgYW55LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUueFNjYWxlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIHNjYWxpbmcgaW4gdGhlIHktYXhpcyBmb3IgdGhlIHNwcml0ZSwgaWYgYW55LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUueVNjYWxlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICAqIEEgYE51bWJlcmAgdGhhdCBkZWZpbmVzIHRoZSBvZmZzZXQgaW4gdGhlIHgtYXhpcyBmb3IgdGhlIHNwcml0ZSAobm9ybWFsaXNlZCBieSB0ZXh0dXJlIHdpZHRoKS5cbiAgICAgICpcbiAgICAgICogQHByb3BlcnR5IHJlbmRlci5zcHJpdGUueE9mZnNldFxuICAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgICogQGRlZmF1bHQgMFxuICAgICAgKi9cblxuICAgIC8qKlxuICAgICAgKiBBIGBOdW1iZXJgIHRoYXQgZGVmaW5lcyB0aGUgb2Zmc2V0IGluIHRoZSB5LWF4aXMgZm9yIHRoZSBzcHJpdGUgKG5vcm1hbGlzZWQgYnkgdGV4dHVyZSBoZWlnaHQpLlxuICAgICAgKlxuICAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnNwcml0ZS55T2Zmc2V0XG4gICAgICAqIEB0eXBlIG51bWJlclxuICAgICAgKiBAZGVmYXVsdCAwXG4gICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGxpbmUgd2lkdGggdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBib2R5IG91dGxpbmUgKGlmIGEgc3ByaXRlIGlzIG5vdCBkZWZpbmVkKS5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBtZWFucyBubyBvdXRsaW5lIHdpbGwgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLmxpbmVXaWR0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBmaWxsIHN0eWxlIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgYm9keSAoaWYgYSBzcHJpdGUgaXMgbm90IGRlZmluZWQpLlxuICAgICAqIEl0IGlzIHRoZSBzYW1lIGFzIHdoZW4gdXNpbmcgYSBjYW52YXMsIHNvIGl0IGFjY2VwdHMgQ1NTIHN0eWxlIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuZmlsbFN0eWxlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgYSByYW5kb20gY29sb3VyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgc3Ryb2tlIHN0eWxlIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgYm9keSBvdXRsaW5lIChpZiBhIHNwcml0ZSBpcyBub3QgZGVmaW5lZCkuXG4gICAgICogSXQgaXMgdGhlIHNhbWUgYXMgd2hlbiB1c2luZyBhIGNhbnZhcywgc28gaXQgYWNjZXB0cyBDU1Mgc3R5bGUgcHJvcGVydHkgdmFsdWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5zdHJva2VTdHlsZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0IGEgcmFuZG9tIGNvbG91clxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIENhbGN1bGF0ZWQgYXV0b21hdGljYWxseSB3aGVuIHZlcnRpY2VzIGFyZSBzZXQuXG4gICAgICogXG4gICAgICogQW4gYXJyYXkgb2YgdW5pcXVlIGF4aXMgdmVjdG9ycyAoZWRnZSBub3JtYWxzKSB1c2VkIGZvciBjb2xsaXNpb24gZGV0ZWN0aW9uLlxuICAgICAqIFRoZXNlIGFyZSBhdXRvbWF0aWNhbGx5IGNhbGN1bGF0ZWQgd2hlbiB2ZXJ0aWNlcyBhcmUgc2V0LlxuICAgICAqIFRoZXkgYXJlIGNvbnN0YW50bHkgdXBkYXRlZCBieSBgQm9keS51cGRhdGVgIGR1cmluZyB0aGUgc2ltdWxhdGlvbi5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBheGVzXG4gICAgICogQHR5cGUgdmVjdG9yW11cbiAgICAgKi9cbiAgICAgXG4gICAgLyoqXG4gICAgICogX1JlYWQgb25seV8uIENhbGN1bGF0ZWQgYXV0b21hdGljYWxseSB3aGVuIHZlcnRpY2VzIGFyZSBzZXQuXG4gICAgICogXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IG1lYXN1cmVzIHRoZSBhcmVhIG9mIHRoZSBib2R5J3MgY29udmV4IGh1bGwuXG4gICAgICogXG4gICAgICogQHJlYWRPbmx5XG4gICAgICogQHByb3BlcnR5IGFyZWFcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYEJvdW5kc2Agb2JqZWN0IHRoYXQgZGVmaW5lcyB0aGUgQUFCQiByZWdpb24gZm9yIHRoZSBib2R5LlxuICAgICAqIEl0IGlzIGF1dG9tYXRpY2FsbHkgY2FsY3VsYXRlZCB3aGVuIHZlcnRpY2VzIGFyZSBzZXQgYW5kIGNvbnN0YW50bHkgdXBkYXRlZCBieSBgQm9keS51cGRhdGVgIGR1cmluZyBzaW11bGF0aW9uLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBib3VuZHNcbiAgICAgKiBAdHlwZSBib3VuZHNcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRlbXBvcmFyaWx5IG1heSBob2xkIHBhcmFtZXRlcnMgdG8gYmUgcGFzc2VkIHRvIGBWZXJ0aWNlcy5jaGFtZmVyYCB3aGVyZSBzdXBwb3J0ZWQgYnkgZXh0ZXJuYWwgZnVuY3Rpb25zLlxuICAgICAqIFxuICAgICAqIFNlZSBgVmVydGljZXMuY2hhbWZlcmAgZm9yIHBvc3NpYmxlIHBhcmFtZXRlcnMgdGhpcyBvYmplY3QgbWF5IGhvbGQuXG4gICAgICogXG4gICAgICogQ3VycmVudGx5IG9ubHkgZnVuY3Rpb25zIGluc2lkZSBgTWF0dGVyLkJvZGllc2AgcHJvdmlkZSBhIHV0aWxpdHkgdXNpbmcgdGhpcyBwcm9wZXJ0eSBhcyBhIHZlcnRpY2VzIHByZS1wcm9jZXNzaW5nIG9wdGlvbi5cbiAgICAgKiBcbiAgICAgKiBBbHRlcm5hdGl2ZWx5IGNvbnNpZGVyIHVzaW5nIGBWZXJ0aWNlcy5jaGFtZmVyYCBkaXJlY3RseSBvbiB2ZXJ0aWNlcyBiZWZvcmUgcGFzc2luZyB0aGVtIHRvIGEgYm9keSBjcmVhdGlvbiBmdW5jdGlvbi5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgY2hhbWZlclxuICAgICAqIEB0eXBlIG9iamVjdHxudWxsfHVuZGVmaW5lZFxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogNSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuRXZlbnRzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyB0byBmaXJlIGFuZCBsaXN0ZW4gdG8gZXZlbnRzIG9uIG90aGVyIG9iamVjdHMuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBFdmVudHNcbiovXG5cbnZhciBFdmVudHMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBFdmVudHM7XG5cbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBTdWJzY3JpYmVzIGEgY2FsbGJhY2sgZnVuY3Rpb24gdG8gdGhlIGdpdmVuIG9iamVjdCdzIGBldmVudE5hbWVgLlxuICAgICAqIEBtZXRob2Qgb25cbiAgICAgKiBAcGFyYW0ge30gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZXNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIEV2ZW50cy5vbiA9IGZ1bmN0aW9uKG9iamVjdCwgZXZlbnROYW1lcywgY2FsbGJhY2spIHtcbiAgICAgICAgdmFyIG5hbWVzID0gZXZlbnROYW1lcy5zcGxpdCgnICcpLFxuICAgICAgICAgICAgbmFtZTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG5hbWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBuYW1lID0gbmFtZXNbaV07XG4gICAgICAgICAgICBvYmplY3QuZXZlbnRzID0gb2JqZWN0LmV2ZW50cyB8fCB7fTtcbiAgICAgICAgICAgIG9iamVjdC5ldmVudHNbbmFtZV0gPSBvYmplY3QuZXZlbnRzW25hbWVdIHx8IFtdO1xuICAgICAgICAgICAgb2JqZWN0LmV2ZW50c1tuYW1lXS5wdXNoKGNhbGxiYWNrKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjYWxsYmFjaztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyB0aGUgZ2l2ZW4gZXZlbnQgY2FsbGJhY2suIElmIG5vIGNhbGxiYWNrLCBjbGVhcnMgYWxsIGNhbGxiYWNrcyBpbiBgZXZlbnROYW1lc2AuIElmIG5vIGBldmVudE5hbWVzYCwgY2xlYXJzIGFsbCBldmVudHMuXG4gICAgICogQG1ldGhvZCBvZmZcbiAgICAgKiBAcGFyYW0ge30gb2JqZWN0XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50TmFtZXNcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqL1xuICAgIEV2ZW50cy5vZmYgPSBmdW5jdGlvbihvYmplY3QsIGV2ZW50TmFtZXMsIGNhbGxiYWNrKSB7XG4gICAgICAgIGlmICghZXZlbnROYW1lcykge1xuICAgICAgICAgICAgb2JqZWN0LmV2ZW50cyA9IHt9O1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaGFuZGxlIEV2ZW50cy5vZmYob2JqZWN0LCBjYWxsYmFjaylcbiAgICAgICAgaWYgKHR5cGVvZiBldmVudE5hbWVzID09PSAnZnVuY3Rpb24nKSB7XG4gICAgICAgICAgICBjYWxsYmFjayA9IGV2ZW50TmFtZXM7XG4gICAgICAgICAgICBldmVudE5hbWVzID0gQ29tbW9uLmtleXMob2JqZWN0LmV2ZW50cykuam9pbignICcpO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5hbWVzID0gZXZlbnROYW1lcy5zcGxpdCgnICcpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBjYWxsYmFja3MgPSBvYmplY3QuZXZlbnRzW25hbWVzW2ldXSxcbiAgICAgICAgICAgICAgICBuZXdDYWxsYmFja3MgPSBbXTtcblxuICAgICAgICAgICAgaWYgKGNhbGxiYWNrICYmIGNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2FsbGJhY2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChjYWxsYmFja3Nbal0gIT09IGNhbGxiYWNrKVxuICAgICAgICAgICAgICAgICAgICAgICAgbmV3Q2FsbGJhY2tzLnB1c2goY2FsbGJhY2tzW2pdKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG9iamVjdC5ldmVudHNbbmFtZXNbaV1dID0gbmV3Q2FsbGJhY2tzO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEZpcmVzIGFsbCB0aGUgY2FsbGJhY2tzIHN1YnNjcmliZWQgdG8gdGhlIGdpdmVuIG9iamVjdCdzIGBldmVudE5hbWVgLCBpbiB0aGUgb3JkZXIgdGhleSBzdWJzY3JpYmVkLCBpZiBhbnkuXG4gICAgICogQG1ldGhvZCB0cmlnZ2VyXG4gICAgICogQHBhcmFtIHt9IG9iamVjdFxuICAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudE5hbWVzXG4gICAgICogQHBhcmFtIHt9IGV2ZW50XG4gICAgICovXG4gICAgRXZlbnRzLnRyaWdnZXIgPSBmdW5jdGlvbihvYmplY3QsIGV2ZW50TmFtZXMsIGV2ZW50KSB7XG4gICAgICAgIHZhciBuYW1lcyxcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBjYWxsYmFja3MsXG4gICAgICAgICAgICBldmVudENsb25lO1xuXG4gICAgICAgIHZhciBldmVudHMgPSBvYmplY3QuZXZlbnRzO1xuICAgICAgICBcbiAgICAgICAgaWYgKGV2ZW50cyAmJiBDb21tb24ua2V5cyhldmVudHMpLmxlbmd0aCA+IDApIHtcbiAgICAgICAgICAgIGlmICghZXZlbnQpXG4gICAgICAgICAgICAgICAgZXZlbnQgPSB7fTtcblxuICAgICAgICAgICAgbmFtZXMgPSBldmVudE5hbWVzLnNwbGl0KCcgJyk7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbmFtZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICBuYW1lID0gbmFtZXNbaV07XG4gICAgICAgICAgICAgICAgY2FsbGJhY2tzID0gZXZlbnRzW25hbWVdO1xuXG4gICAgICAgICAgICAgICAgaWYgKGNhbGxiYWNrcykge1xuICAgICAgICAgICAgICAgICAgICBldmVudENsb25lID0gQ29tbW9uLmNsb25lKGV2ZW50LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xvbmUubmFtZSA9IG5hbWU7XG4gICAgICAgICAgICAgICAgICAgIGV2ZW50Q2xvbmUuc291cmNlID0gb2JqZWN0O1xuXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgY2FsbGJhY2tzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYWxsYmFja3Nbal0uYXBwbHkob2JqZWN0LCBbZXZlbnRDbG9uZV0pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIEEgY29tcG9zaXRlIGlzIGEgY29sbGVjdGlvbiBvZiBgTWF0dGVyLkJvZHlgLCBgTWF0dGVyLkNvbnN0cmFpbnRgIGFuZCBvdGhlciBgTWF0dGVyLkNvbXBvc2l0ZWAgb2JqZWN0cy5cbipcbiogVGhleSBhcmUgYSBjb250YWluZXIgdGhhdCBjYW4gcmVwcmVzZW50IGNvbXBsZXggb2JqZWN0cyBtYWRlIG9mIG11bHRpcGxlIHBhcnRzLCBldmVuIGlmIHRoZXkgYXJlIG5vdCBwaHlzaWNhbGx5IGNvbm5lY3RlZC5cbiogQSBjb21wb3NpdGUgY291bGQgY29udGFpbiBhbnl0aGluZyBmcm9tIGEgc2luZ2xlIGJvZHkgYWxsIHRoZSB3YXkgdXAgdG8gYSB3aG9sZSB3b3JsZC5cbiogXG4qIFdoZW4gbWFraW5nIGFueSBjaGFuZ2VzIHRvIGNvbXBvc2l0ZXMsIHVzZSB0aGUgaW5jbHVkZWQgZnVuY3Rpb25zIHJhdGhlciB0aGFuIGNoYW5naW5nIHRoZWlyIHByb3BlcnRpZXMgZGlyZWN0bHkuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBDb21wb3NpdGVcbiovXG5cbnZhciBDb21wb3NpdGUgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb3NpdGU7XG5cbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBCb2R5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb21wb3NpdGUuIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVyaXRlcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge30gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGVcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuY3JlYXRlID0gZnVuY3Rpb24ob3B0aW9ucykge1xuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZCh7IFxuICAgICAgICAgICAgaWQ6IENvbW1vbi5uZXh0SWQoKSxcbiAgICAgICAgICAgIHR5cGU6ICdjb21wb3NpdGUnLFxuICAgICAgICAgICAgcGFyZW50OiBudWxsLFxuICAgICAgICAgICAgaXNNb2RpZmllZDogZmFsc2UsXG4gICAgICAgICAgICBib2RpZXM6IFtdLCBcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzOiBbXSwgXG4gICAgICAgICAgICBjb21wb3NpdGVzOiBbXSxcbiAgICAgICAgICAgIGxhYmVsOiAnQ29tcG9zaXRlJyxcbiAgICAgICAgICAgIHBsdWdpbjoge30sXG4gICAgICAgICAgICBjYWNoZToge1xuICAgICAgICAgICAgICAgIGFsbEJvZGllczogbnVsbCxcbiAgICAgICAgICAgICAgICBhbGxDb25zdHJhaW50czogbnVsbCxcbiAgICAgICAgICAgICAgICBhbGxDb21wb3NpdGVzOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBjb21wb3NpdGUncyBgaXNNb2RpZmllZGAgZmxhZy4gXG4gICAgICogSWYgYHVwZGF0ZVBhcmVudHNgIGlzIHRydWUsIGFsbCBwYXJlbnRzIHdpbGwgYmUgc2V0IChkZWZhdWx0OiBmYWxzZSkuXG4gICAgICogSWYgYHVwZGF0ZUNoaWxkcmVuYCBpcyB0cnVlLCBhbGwgY2hpbGRyZW4gd2lsbCBiZSBzZXQgKGRlZmF1bHQ6IGZhbHNlKS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc2V0TW9kaWZpZWRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib29sZWFufSBpc01vZGlmaWVkXG4gICAgICogQHBhcmFtIHtib29sZWFufSBbdXBkYXRlUGFyZW50cz1mYWxzZV1cbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IFt1cGRhdGVDaGlsZHJlbj1mYWxzZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQgPSBmdW5jdGlvbihjb21wb3NpdGUsIGlzTW9kaWZpZWQsIHVwZGF0ZVBhcmVudHMsIHVwZGF0ZUNoaWxkcmVuKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5pc01vZGlmaWVkID0gaXNNb2RpZmllZDtcblxuICAgICAgICBpZiAoaXNNb2RpZmllZCAmJiBjb21wb3NpdGUuY2FjaGUpIHtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5jYWNoZS5hbGxCb2RpZXMgPSBudWxsO1xuICAgICAgICAgICAgY29tcG9zaXRlLmNhY2hlLmFsbENvbnN0cmFpbnRzID0gbnVsbDtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb21wb3NpdGVzID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICh1cGRhdGVQYXJlbnRzICYmIGNvbXBvc2l0ZS5wYXJlbnQpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUucGFyZW50LCBpc01vZGlmaWVkLCB1cGRhdGVQYXJlbnRzLCB1cGRhdGVDaGlsZHJlbik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAodXBkYXRlQ2hpbGRyZW4pIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgY2hpbGRDb21wb3NpdGUgPSBjb21wb3NpdGUuY29tcG9zaXRlc1tpXTtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY2hpbGRDb21wb3NpdGUsIGlzTW9kaWZpZWQsIHVwZGF0ZVBhcmVudHMsIHVwZGF0ZUNoaWxkcmVuKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmljIHNpbmdsZSBvciBtdWx0aS1hZGQgZnVuY3Rpb24uIEFkZHMgYSBzaW5nbGUgb3IgYW4gYXJyYXkgb2YgYm9keShzKSwgY29uc3RyYWludChzKSBvciBjb21wb3NpdGUocykgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBUcmlnZ2VycyBgYmVmb3JlQWRkYCBhbmQgYGFmdGVyQWRkYCBldmVudHMgb24gdGhlIGBjb21wb3NpdGVgLlxuICAgICAqIEBtZXRob2QgYWRkXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fGFycmF5fSBvYmplY3QgQSBzaW5nbGUgb3IgYW4gYXJyYXkgb2YgYm9keShzKSwgY29uc3RyYWludChzKSBvciBjb21wb3NpdGUocylcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgb2JqZWN0cyBhZGRlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hZGQgPSBmdW5jdGlvbihjb21wb3NpdGUsIG9iamVjdCkge1xuICAgICAgICB2YXIgb2JqZWN0cyA9IFtdLmNvbmNhdChvYmplY3QpO1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGNvbXBvc2l0ZSwgJ2JlZm9yZUFkZCcsIHsgb2JqZWN0OiBvYmplY3QgfSk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBvYmplY3RzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgb2JqID0gb2JqZWN0c1tpXTtcblxuICAgICAgICAgICAgc3dpdGNoIChvYmoudHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgICAgICAgICAvLyBza2lwIGFkZGluZyBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgICAgIGlmIChvYmoucGFyZW50ICE9PSBvYmopIHtcbiAgICAgICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ0NvbXBvc2l0ZS5hZGQ6IHNraXBwZWQgYWRkaW5nIGEgY29tcG91bmQgYm9keSBwYXJ0ICh5b3UgbXVzdCBhZGQgaXRzIHBhcmVudCBpbnN0ZWFkKScpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQm9keShjb21wb3NpdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb25zdHJhaW50JzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIG9iaik7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdjb21wb3NpdGUnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb21wb3NpdGUoY29tcG9zaXRlLCBvYmopO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnbW91c2VDb25zdHJhaW50JzpcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIG9iai5jb25zdHJhaW50KTtcbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoY29tcG9zaXRlLCAnYWZ0ZXJBZGQnLCB7IG9iamVjdDogb2JqZWN0IH0pO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdlbmVyaWMgcmVtb3ZlIGZ1bmN0aW9uLiBSZW1vdmVzIG9uZSBvciBtYW55IGJvZHkocyksIGNvbnN0cmFpbnQocykgb3IgYSBjb21wb3NpdGUocykgdG8gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBPcHRpb25hbGx5IHNlYXJjaGluZyBpdHMgY2hpbGRyZW4gcmVjdXJzaXZlbHkuXG4gICAgICogVHJpZ2dlcnMgYGJlZm9yZVJlbW92ZWAgYW5kIGBhZnRlclJlbW92ZWAgZXZlbnRzIG9uIHRoZSBgY29tcG9zaXRlYC5cbiAgICAgKiBAbWV0aG9kIHJlbW92ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdHxhcnJheX0gb2JqZWN0XG4gICAgICogQHBhcmFtIHtib29sZWFufSBbZGVlcD1mYWxzZV1cbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBvcmlnaW5hbCBjb21wb3NpdGUgd2l0aCB0aGUgb2JqZWN0cyByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgb2JqZWN0LCBkZWVwKSB7XG4gICAgICAgIHZhciBvYmplY3RzID0gW10uY29uY2F0KG9iamVjdCk7XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoY29tcG9zaXRlLCAnYmVmb3JlUmVtb3ZlJywgeyBvYmplY3Q6IG9iamVjdCB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBvYmogPSBvYmplY3RzW2ldO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKG9iai50eXBlKSB7XG5cbiAgICAgICAgICAgIGNhc2UgJ2JvZHknOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5KGNvbXBvc2l0ZSwgb2JqLCBkZWVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqLCBkZWVwKTtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ2NvbXBvc2l0ZSc6XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZShjb21wb3NpdGUsIG9iaiwgZGVlcCk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICBjYXNlICdtb3VzZUNvbnN0cmFpbnQnOlxuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50KGNvbXBvc2l0ZSwgb2JqLmNvbnN0cmFpbnQpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihjb21wb3NpdGUsICdhZnRlclJlbW92ZScsIHsgb2JqZWN0OiBvYmplY3QgfSk7XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQWRkcyBhIGNvbXBvc2l0ZSB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBhZGRDb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlQVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVCXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlQSB3aXRoIHRoZSBvYmplY3RzIGZyb20gY29tcG9zaXRlQiBhZGRlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5hZGRDb21wb3NpdGUgPSBmdW5jdGlvbihjb21wb3NpdGVBLCBjb21wb3NpdGVCKSB7XG4gICAgICAgIGNvbXBvc2l0ZUEuY29tcG9zaXRlcy5wdXNoKGNvbXBvc2l0ZUIpO1xuICAgICAgICBjb21wb3NpdGVCLnBhcmVudCA9IGNvbXBvc2l0ZUE7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGVBLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGVBO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29tcG9zaXRlIGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgYW5kIG9wdGlvbmFsbHkgc2VhcmNoaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZUFcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlQlxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlQSB3aXRoIHRoZSBjb21wb3NpdGUgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVDb21wb3NpdGUgPSBmdW5jdGlvbihjb21wb3NpdGVBLCBjb21wb3NpdGVCLCBkZWVwKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IENvbW1vbi5pbmRleE9mKGNvbXBvc2l0ZUEuY29tcG9zaXRlcywgY29tcG9zaXRlQik7XG5cbiAgICAgICAgaWYgKHBvc2l0aW9uICE9PSAtMSkge1xuICAgICAgICAgICAgdmFyIGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlQik7XG5cbiAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb21wb3NpdGVBdChjb21wb3NpdGVBLCBwb3NpdGlvbik7XG5cbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgYm9kaWVzW2ldLnNsZWVwQ291bnRlciA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGVBLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb21wb3NpdGUoY29tcG9zaXRlQS5jb21wb3NpdGVzW2ldLCBjb21wb3NpdGVCLCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGVBO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGEgY29tcG9zaXRlIGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29tcG9zaXRlQXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbXBvc2l0ZSByZW1vdmVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnJlbW92ZUNvbXBvc2l0ZUF0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBwb3NpdGlvbikge1xuICAgICAgICBjb21wb3NpdGUuY29tcG9zaXRlcy5zcGxpY2UocG9zaXRpb24sIDEpO1xuICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQoY29tcG9zaXRlLCB0cnVlLCB0cnVlLCBmYWxzZSk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFkZHMgYSBib2R5IHRvIHRoZSBnaXZlbiBjb21wb3NpdGUuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGFkZEJvZHlcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5XG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgYWRkZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWRkQm9keSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgYm9keSkge1xuICAgICAgICBjb21wb3NpdGUuYm9kaWVzLnB1c2goYm9keSk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVCb2R5XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBib2R5LCBkZWVwKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IENvbW1vbi5pbmRleE9mKGNvbXBvc2l0ZS5ib2RpZXMsIGJvZHkpO1xuXG4gICAgICAgIGlmIChwb3NpdGlvbiAhPT0gLTEpIHtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5QXQoY29tcG9zaXRlLCBwb3NpdGlvbik7XG4gICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciA9IDA7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoZGVlcCkge1xuICAgICAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKyl7XG4gICAgICAgICAgICAgICAgQ29tcG9zaXRlLnJlbW92ZUJvZHkoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0sIGJvZHksIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVCb2R5QXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHBvc2l0aW9uXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGJvZHkgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVCb2R5QXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIHBvc2l0aW9uKSB7XG4gICAgICAgIGNvbXBvc2l0ZS5ib2RpZXMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgY29uc3RyYWludCB0byB0aGUgZ2l2ZW4gY29tcG9zaXRlLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBhZGRDb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb25zdHJhaW50IGFkZGVkXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQgPSBmdW5jdGlvbihjb21wb3NpdGUsIGNvbnN0cmFpbnQpIHtcbiAgICAgICAgY29tcG9zaXRlLmNvbnN0cmFpbnRzLnB1c2goY29uc3RyYWludCk7XG4gICAgICAgIENvbXBvc2l0ZS5zZXRNb2RpZmllZChjb21wb3NpdGUsIHRydWUsIHRydWUsIGZhbHNlKTtcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGNvbnN0cmFpbnQgZnJvbSB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBhbmQgb3B0aW9uYWxseSBzZWFyY2hpbmcgaXRzIGNoaWxkcmVuIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCByZW1vdmVDb25zdHJhaW50XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBUaGUgb3JpZ2luYWwgY29tcG9zaXRlIHdpdGggdGhlIGNvbnN0cmFpbnQgcmVtb3ZlZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBjb25zdHJhaW50LCBkZWVwKSB7XG4gICAgICAgIHZhciBwb3NpdGlvbiA9IENvbW1vbi5pbmRleE9mKGNvbXBvc2l0ZS5jb25zdHJhaW50cywgY29uc3RyYWludCk7XG4gICAgICAgIFxuICAgICAgICBpZiAocG9zaXRpb24gIT09IC0xKSB7XG4gICAgICAgICAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludEF0KGNvbXBvc2l0ZSwgcG9zaXRpb24pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGRlZXApIHtcbiAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspe1xuICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5yZW1vdmVDb25zdHJhaW50KGNvbXBvc2l0ZS5jb21wb3NpdGVzW2ldLCBjb25zdHJhaW50LCB0cnVlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbW92ZXMgYSBib2R5IGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgcmVtb3ZlQ29uc3RyYWludEF0XG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwb3NpdGlvblxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gVGhlIG9yaWdpbmFsIGNvbXBvc2l0ZSB3aXRoIHRoZSBjb25zdHJhaW50IHJlbW92ZWRcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmVtb3ZlQ29uc3RyYWludEF0ID0gZnVuY3Rpb24oY29tcG9zaXRlLCBwb3NpdGlvbikge1xuICAgICAgICBjb21wb3NpdGUuY29uc3RyYWludHMuc3BsaWNlKHBvc2l0aW9uLCAxKTtcbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW1vdmVzIGFsbCBib2RpZXMsIGNvbnN0cmFpbnRzIGFuZCBjb21wb3NpdGVzIGZyb20gdGhlIGdpdmVuIGNvbXBvc2l0ZS5cbiAgICAgKiBPcHRpb25hbGx5IGNsZWFyaW5nIGl0cyBjaGlsZHJlbiByZWN1cnNpdmVseS5cbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0ga2VlcFN0YXRpY1xuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gW2RlZXA9ZmFsc2VdXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmNsZWFyID0gZnVuY3Rpb24oY29tcG9zaXRlLCBrZWVwU3RhdGljLCBkZWVwKSB7XG4gICAgICAgIGlmIChkZWVwKSB7XG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aDsgaSsrKXtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuY2xlYXIoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0sIGtlZXBTdGF0aWMsIHRydWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBpZiAoa2VlcFN0YXRpYykge1xuICAgICAgICAgICAgY29tcG9zaXRlLmJvZGllcyA9IGNvbXBvc2l0ZS5ib2RpZXMuZmlsdGVyKGZ1bmN0aW9uKGJvZHkpIHsgcmV0dXJuIGJvZHkuaXNTdGF0aWM7IH0pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgY29tcG9zaXRlLmJvZGllcy5sZW5ndGggPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgY29tcG9zaXRlLmNvbnN0cmFpbnRzLmxlbmd0aCA9IDA7XG4gICAgICAgIGNvbXBvc2l0ZS5jb21wb3NpdGVzLmxlbmd0aCA9IDA7XG5cbiAgICAgICAgQ29tcG9zaXRlLnNldE1vZGlmaWVkKGNvbXBvc2l0ZSwgdHJ1ZSwgdHJ1ZSwgZmFsc2UpO1xuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYWxsIGJvZGllcyBpbiB0aGUgZ2l2ZW4gY29tcG9zaXRlLCBpbmNsdWRpbmcgYWxsIGJvZGllcyBpbiBpdHMgY2hpbGRyZW4sIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgYWxsQm9kaWVzXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEByZXR1cm4ge2JvZHlbXX0gQWxsIHRoZSBib2RpZXNcbiAgICAgKi9cbiAgICBDb21wb3NpdGUuYWxsQm9kaWVzID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIGlmIChjb21wb3NpdGUuY2FjaGUgJiYgY29tcG9zaXRlLmNhY2hlLmFsbEJvZGllcykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZS5jYWNoZS5hbGxCb2RpZXM7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgYm9kaWVzID0gW10uY29uY2F0KGNvbXBvc2l0ZS5ib2RpZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBib2RpZXMgPSBib2RpZXMuY29uY2F0KENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0pKTtcblxuICAgICAgICBpZiAoY29tcG9zaXRlLmNhY2hlKSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuY2FjaGUuYWxsQm9kaWVzID0gYm9kaWVzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGJvZGllcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgY29uc3RyYWludHMgaW4gdGhlIGdpdmVuIGNvbXBvc2l0ZSwgaW5jbHVkaW5nIGFsbCBjb25zdHJhaW50cyBpbiBpdHMgY2hpbGRyZW4sIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgYWxsQ29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHJldHVybiB7Y29uc3RyYWludFtdfSBBbGwgdGhlIGNvbnN0cmFpbnRzXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIGlmIChjb21wb3NpdGUuY2FjaGUgJiYgY29tcG9zaXRlLmNhY2hlLmFsbENvbnN0cmFpbnRzKSB7XG4gICAgICAgICAgICByZXR1cm4gY29tcG9zaXRlLmNhY2hlLmFsbENvbnN0cmFpbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbnN0cmFpbnRzID0gW10uY29uY2F0KGNvbXBvc2l0ZS5jb25zdHJhaW50cyk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb21wb3NpdGUuY29tcG9zaXRlcy5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gY29uc3RyYWludHMuY29uY2F0KENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyhjb21wb3NpdGUuY29tcG9zaXRlc1tpXSkpO1xuXG4gICAgICAgIGlmIChjb21wb3NpdGUuY2FjaGUpIHtcbiAgICAgICAgICAgIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb25zdHJhaW50cyA9IGNvbnN0cmFpbnRzO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbnN0cmFpbnRzO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGFsbCBjb21wb3NpdGVzIGluIHRoZSBnaXZlbiBjb21wb3NpdGUsIGluY2x1ZGluZyBhbGwgY29tcG9zaXRlcyBpbiBpdHMgY2hpbGRyZW4sIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgYWxsQ29tcG9zaXRlc1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGVbXX0gQWxsIHRoZSBjb21wb3NpdGVzXG4gICAgICovXG4gICAgQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgaWYgKGNvbXBvc2l0ZS5jYWNoZSAmJiBjb21wb3NpdGUuY2FjaGUuYWxsQ29tcG9zaXRlcykge1xuICAgICAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZS5jYWNoZS5hbGxDb21wb3NpdGVzO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIGNvbXBvc2l0ZXMgPSBbXS5jb25jYXQoY29tcG9zaXRlLmNvbXBvc2l0ZXMpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29tcG9zaXRlLmNvbXBvc2l0ZXMubGVuZ3RoOyBpKyspXG4gICAgICAgICAgICBjb21wb3NpdGVzID0gY29tcG9zaXRlcy5jb25jYXQoQ29tcG9zaXRlLmFsbENvbXBvc2l0ZXMoY29tcG9zaXRlLmNvbXBvc2l0ZXNbaV0pKTtcblxuICAgICAgICBpZiAoY29tcG9zaXRlLmNhY2hlKSB7XG4gICAgICAgICAgICBjb21wb3NpdGUuY2FjaGUuYWxsQ29tcG9zaXRlcyA9IGNvbXBvc2l0ZXM7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2VhcmNoZXMgdGhlIGNvbXBvc2l0ZSByZWN1cnNpdmVseSBmb3IgYW4gb2JqZWN0IG1hdGNoaW5nIHRoZSB0eXBlIGFuZCBpZCBzdXBwbGllZCwgbnVsbCBpZiBub3QgZm91bmQuXG4gICAgICogQG1ldGhvZCBnZXRcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGlkXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHR5cGVcbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSByZXF1ZXN0ZWQgb2JqZWN0LCBpZiBmb3VuZFxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5nZXQgPSBmdW5jdGlvbihjb21wb3NpdGUsIGlkLCB0eXBlKSB7XG4gICAgICAgIHZhciBvYmplY3RzLFxuICAgICAgICAgICAgb2JqZWN0O1xuXG4gICAgICAgIHN3aXRjaCAodHlwZSkge1xuICAgICAgICBjYXNlICdib2R5JzpcbiAgICAgICAgICAgIG9iamVjdHMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGNvbXBvc2l0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG4gICAgICAgICAgICBvYmplY3RzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKGNvbXBvc2l0ZSk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAnY29tcG9zaXRlJzpcbiAgICAgICAgICAgIG9iamVjdHMgPSBDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyhjb21wb3NpdGUpLmNvbmNhdChjb21wb3NpdGUpO1xuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIW9iamVjdHMpXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcblxuICAgICAgICBvYmplY3QgPSBvYmplY3RzLmZpbHRlcihmdW5jdGlvbihvYmplY3QpIHsgXG4gICAgICAgICAgICByZXR1cm4gb2JqZWN0LmlkLnRvU3RyaW5nKCkgPT09IGlkLnRvU3RyaW5nKCk7IFxuICAgICAgICB9KTtcblxuICAgICAgICByZXR1cm4gb2JqZWN0Lmxlbmd0aCA9PT0gMCA/IG51bGwgOiBvYmplY3RbMF07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE1vdmVzIHRoZSBnaXZlbiBvYmplY3QocykgZnJvbSBjb21wb3NpdGVBIHRvIGNvbXBvc2l0ZUIgKGVxdWFsIHRvIGEgcmVtb3ZlIGZvbGxvd2VkIGJ5IGFuIGFkZCkuXG4gICAgICogQG1ldGhvZCBtb3ZlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGVBfSBjb21wb3NpdGVBXG4gICAgICogQHBhcmFtIHtvYmplY3RbXX0gb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlQn0gY29tcG9zaXRlQlxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gUmV0dXJucyBjb21wb3NpdGVBXG4gICAgICovXG4gICAgQ29tcG9zaXRlLm1vdmUgPSBmdW5jdGlvbihjb21wb3NpdGVBLCBvYmplY3RzLCBjb21wb3NpdGVCKSB7XG4gICAgICAgIENvbXBvc2l0ZS5yZW1vdmUoY29tcG9zaXRlQSwgb2JqZWN0cyk7XG4gICAgICAgIENvbXBvc2l0ZS5hZGQoY29tcG9zaXRlQiwgb2JqZWN0cyk7XG4gICAgICAgIHJldHVybiBjb21wb3NpdGVBO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBc3NpZ25zIG5ldyBpZHMgZm9yIGFsbCBvYmplY3RzIGluIHRoZSBjb21wb3NpdGUsIHJlY3Vyc2l2ZWx5LlxuICAgICAqIEBtZXRob2QgcmViYXNlXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZVxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gUmV0dXJucyBjb21wb3NpdGVcbiAgICAgKi9cbiAgICBDb21wb3NpdGUucmViYXNlID0gZnVuY3Rpb24oY29tcG9zaXRlKSB7XG4gICAgICAgIHZhciBvYmplY3RzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpXG4gICAgICAgICAgICAuY29uY2F0KENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyhjb21wb3NpdGUpKVxuICAgICAgICAgICAgLmNvbmNhdChDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyhjb21wb3NpdGUpKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IG9iamVjdHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIG9iamVjdHNbaV0uaWQgPSBDb21tb24ubmV4dElkKCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmFuc2xhdGVzIGFsbCBjaGlsZHJlbiBpbiB0aGUgY29tcG9zaXRlIGJ5IGEgZ2l2ZW4gdmVjdG9yIHJlbGF0aXZlIHRvIHRoZWlyIGN1cnJlbnQgcG9zaXRpb25zLCBcbiAgICAgKiB3aXRob3V0IGltcGFydGluZyBhbnkgdmVsb2NpdHkuXG4gICAgICogQG1ldGhvZCB0cmFuc2xhdGVcbiAgICAgKiBAcGFyYW0ge2NvbXBvc2l0ZX0gY29tcG9zaXRlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHRyYW5zbGF0aW9uXG4gICAgICogQHBhcmFtIHtib29sfSBbcmVjdXJzaXZlPXRydWVdXG4gICAgICovXG4gICAgQ29tcG9zaXRlLnRyYW5zbGF0ZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgdHJhbnNsYXRpb24sIHJlY3Vyc2l2ZSkge1xuICAgICAgICB2YXIgYm9kaWVzID0gcmVjdXJzaXZlID8gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpIDogY29tcG9zaXRlLmJvZGllcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgQm9keS50cmFuc2xhdGUoYm9kaWVzW2ldLCB0cmFuc2xhdGlvbik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIGFsbCBjaGlsZHJlbiBpbiB0aGUgY29tcG9zaXRlIGJ5IGEgZ2l2ZW4gYW5nbGUgYWJvdXQgdGhlIGdpdmVuIHBvaW50LCB3aXRob3V0IGltcGFydGluZyBhbnkgYW5ndWxhciB2ZWxvY2l0eS5cbiAgICAgKiBAbWV0aG9kIHJvdGF0ZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm90YXRpb25cbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gcG9pbnRcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtyZWN1cnNpdmU9dHJ1ZV1cbiAgICAgKi9cbiAgICBDb21wb3NpdGUucm90YXRlID0gZnVuY3Rpb24oY29tcG9zaXRlLCByb3RhdGlvbiwgcG9pbnQsIHJlY3Vyc2l2ZSkge1xuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3Mocm90YXRpb24pLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4ocm90YXRpb24pLFxuICAgICAgICAgICAgYm9kaWVzID0gcmVjdXJzaXZlID8gQ29tcG9zaXRlLmFsbEJvZGllcyhjb21wb3NpdGUpIDogY29tcG9zaXRlLmJvZGllcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgZHggPSBib2R5LnBvc2l0aW9uLnggLSBwb2ludC54LFxuICAgICAgICAgICAgICAgIGR5ID0gYm9keS5wb3NpdGlvbi55IC0gcG9pbnQueTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgIEJvZHkuc2V0UG9zaXRpb24oYm9keSwge1xuICAgICAgICAgICAgICAgIHg6IHBvaW50LnggKyAoZHggKiBjb3MgLSBkeSAqIHNpbiksXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueSArIChkeCAqIHNpbiArIGR5ICogY29zKVxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIEJvZHkucm90YXRlKGJvZHksIHJvdGF0aW9uKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNjYWxlcyBhbGwgY2hpbGRyZW4gaW4gdGhlIGNvbXBvc2l0ZSwgaW5jbHVkaW5nIHVwZGF0aW5nIHBoeXNpY2FsIHByb3BlcnRpZXMgKG1hc3MsIGFyZWEsIGF4ZXMsIGluZXJ0aWEpLCBmcm9tIGEgd29ybGQtc3BhY2UgcG9pbnQuXG4gICAgICogQG1ldGhvZCBzY2FsZVxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2NhbGVYXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHNjYWxlWVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBwb2ludFxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW3JlY3Vyc2l2ZT10cnVlXVxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5zY2FsZSA9IGZ1bmN0aW9uKGNvbXBvc2l0ZSwgc2NhbGVYLCBzY2FsZVksIHBvaW50LCByZWN1cnNpdmUpIHtcbiAgICAgICAgdmFyIGJvZGllcyA9IHJlY3Vyc2l2ZSA/IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKSA6IGNvbXBvc2l0ZS5ib2RpZXM7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGR4ID0gYm9keS5wb3NpdGlvbi54IC0gcG9pbnQueCxcbiAgICAgICAgICAgICAgICBkeSA9IGJvZHkucG9zaXRpb24ueSAtIHBvaW50Lnk7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICBCb2R5LnNldFBvc2l0aW9uKGJvZHksIHtcbiAgICAgICAgICAgICAgICB4OiBwb2ludC54ICsgZHggKiBzY2FsZVgsXG4gICAgICAgICAgICAgICAgeTogcG9pbnQueSArIGR5ICogc2NhbGVZXG4gICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgQm9keS5zY2FsZShib2R5LCBzY2FsZVgsIHNjYWxlWSk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29tcG9zaXRlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSB1bmlvbiBvZiB0aGUgYm91bmRzIG9mIGFsbCBvZiB0aGUgY29tcG9zaXRlJ3MgYm9kaWVzLlxuICAgICAqIEBtZXRob2QgYm91bmRzXG4gICAgICogQHBhcmFtIHtjb21wb3NpdGV9IGNvbXBvc2l0ZSBUaGUgY29tcG9zaXRlLlxuICAgICAqIEByZXR1cm5zIHtib3VuZHN9IFRoZSBjb21wb3NpdGUgYm91bmRzLlxuICAgICAqL1xuICAgIENvbXBvc2l0ZS5ib3VuZHMgPSBmdW5jdGlvbihjb21wb3NpdGUpIHtcbiAgICAgICAgdmFyIGJvZGllcyA9IENvbXBvc2l0ZS5hbGxCb2RpZXMoY29tcG9zaXRlKSxcbiAgICAgICAgICAgIHZlcnRpY2VzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgdmVydGljZXMucHVzaChib2R5LmJvdW5kcy5taW4sIGJvZHkuYm91bmRzLm1heCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm91bmRzLmNyZWF0ZSh2ZXJ0aWNlcyk7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIEV2ZW50cyBEb2N1bWVudGF0aW9uXG4gICAgKlxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gYSBjYWxsIHRvIGBDb21wb3NpdGUuYWRkYCBpcyBtYWRlLCBiZWZvcmUgb2JqZWN0cyBoYXZlIGJlZW4gYWRkZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZUFkZFxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm9iamVjdCBUaGUgb2JqZWN0KHMpIHRvIGJlIGFkZGVkIChtYXkgYmUgYSBzaW5nbGUgYm9keSwgY29uc3RyYWludCwgY29tcG9zaXRlIG9yIGEgbWl4ZWQgYXJyYXkgb2YgdGhlc2UpXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGNhbGwgdG8gYENvbXBvc2l0ZS5hZGRgIGlzIG1hZGUsIGFmdGVyIG9iamVjdHMgaGF2ZSBiZWVuIGFkZGVkLlxuICAgICpcbiAgICAqIEBldmVudCBhZnRlckFkZFxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm9iamVjdCBUaGUgb2JqZWN0KHMpIHRoYXQgaGF2ZSBiZWVuIGFkZGVkIChtYXkgYmUgYSBzaW5nbGUgYm9keSwgY29uc3RyYWludCwgY29tcG9zaXRlIG9yIGEgbWl4ZWQgYXJyYXkgb2YgdGhlc2UpXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGNhbGwgdG8gYENvbXBvc2l0ZS5yZW1vdmVgIGlzIG1hZGUsIGJlZm9yZSBvYmplY3RzIGhhdmUgYmVlbiByZW1vdmVkLlxuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVSZW1vdmVcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7fSBldmVudC5vYmplY3QgVGhlIG9iamVjdChzKSB0byBiZSByZW1vdmVkIChtYXkgYmUgYSBzaW5nbGUgYm9keSwgY29uc3RyYWludCwgY29tcG9zaXRlIG9yIGEgbWl4ZWQgYXJyYXkgb2YgdGhlc2UpXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiBhIGNhbGwgdG8gYENvbXBvc2l0ZS5yZW1vdmVgIGlzIG1hZGUsIGFmdGVyIG9iamVjdHMgaGF2ZSBiZWVuIHJlbW92ZWQuXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyUmVtb3ZlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge30gZXZlbnQub2JqZWN0IFRoZSBvYmplY3QocykgdGhhdCBoYXZlIGJlZW4gcmVtb3ZlZCAobWF5IGJlIGEgc2luZ2xlIGJvZHksIGNvbnN0cmFpbnQsIGNvbXBvc2l0ZSBvciBhIG1peGVkIGFycmF5IG9mIHRoZXNlKVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdW5pcXVlbHkgaWRlbnRpZnlpbmcgbnVtYmVyIGdlbmVyYXRlZCBpbiBgQ29tcG9zaXRlLmNyZWF0ZWAgYnkgYENvbW1vbi5uZXh0SWRgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIGRlbm90aW5nIHRoZSB0eXBlIG9mIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0eXBlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJjb21wb3NpdGVcIlxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJiaXRyYXJ5IGBTdHJpbmdgIG5hbWUgdG8gaGVscCB0aGUgdXNlciBpZGVudGlmeSBhbmQgbWFuYWdlIGNvbXBvc2l0ZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGFiZWxcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcIkNvbXBvc2l0ZVwiXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdGhhdCBzcGVjaWZpZXMgd2hldGhlciB0aGUgY29tcG9zaXRlIGhhcyBiZWVuIG1vZGlmaWVkIGR1cmluZyB0aGUgY3VycmVudCBzdGVwLlxuICAgICAqIFRoaXMgaXMgYXV0b21hdGljYWxseSBtYW5hZ2VkIHdoZW4gYm9kaWVzLCBjb25zdHJhaW50cyBvciBjb21wb3NpdGVzIGFyZSBhZGRlZCBvciByZW1vdmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlzTW9kaWZpZWRcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBgQ29tcG9zaXRlYCB0aGF0IGlzIHRoZSBwYXJlbnQgb2YgdGhpcyBjb21wb3NpdGUuIEl0IGlzIGF1dG9tYXRpY2FsbHkgbWFuYWdlZCBieSB0aGUgYE1hdHRlci5Db21wb3NpdGVgIG1ldGhvZHMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGFyZW50XG4gICAgICogQHR5cGUgY29tcG9zaXRlXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYXJyYXkgb2YgYEJvZHlgIHRoYXQgYXJlIF9kaXJlY3RfIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9zaXRlLlxuICAgICAqIFRvIGFkZCBvciByZW1vdmUgYm9kaWVzIHlvdSBzaG91bGQgdXNlIGBDb21wb3NpdGUuYWRkYCBhbmQgYENvbXBvc2l0ZS5yZW1vdmVgIG1ldGhvZHMgcmF0aGVyIHRoYW4gZGlyZWN0bHkgbW9kaWZ5aW5nIHRoaXMgcHJvcGVydHkuXG4gICAgICogSWYgeW91IHdpc2ggdG8gcmVjdXJzaXZlbHkgZmluZCBhbGwgZGVzY2VuZGFudHMsIHlvdSBzaG91bGQgdXNlIHRoZSBgQ29tcG9zaXRlLmFsbEJvZGllc2AgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvZGllc1xuICAgICAqIEB0eXBlIGJvZHlbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBhcnJheSBvZiBgQ29uc3RyYWludGAgdGhhdCBhcmUgX2RpcmVjdF8gY2hpbGRyZW4gb2YgdGhpcyBjb21wb3NpdGUuXG4gICAgICogVG8gYWRkIG9yIHJlbW92ZSBjb25zdHJhaW50cyB5b3Ugc2hvdWxkIHVzZSBgQ29tcG9zaXRlLmFkZGAgYW5kIGBDb21wb3NpdGUucmVtb3ZlYCBtZXRob2RzIHJhdGhlciB0aGFuIGRpcmVjdGx5IG1vZGlmeWluZyB0aGlzIHByb3BlcnR5LlxuICAgICAqIElmIHlvdSB3aXNoIHRvIHJlY3Vyc2l2ZWx5IGZpbmQgYWxsIGRlc2NlbmRhbnRzLCB5b3Ugc2hvdWxkIHVzZSB0aGUgYENvbXBvc2l0ZS5hbGxDb25zdHJhaW50c2AgbWV0aG9kLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnN0cmFpbnRzXG4gICAgICogQHR5cGUgY29uc3RyYWludFtdXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGBDb21wb3NpdGVgIHRoYXQgYXJlIF9kaXJlY3RfIGNoaWxkcmVuIG9mIHRoaXMgY29tcG9zaXRlLlxuICAgICAqIFRvIGFkZCBvciByZW1vdmUgY29tcG9zaXRlcyB5b3Ugc2hvdWxkIHVzZSBgQ29tcG9zaXRlLmFkZGAgYW5kIGBDb21wb3NpdGUucmVtb3ZlYCBtZXRob2RzIHJhdGhlciB0aGFuIGRpcmVjdGx5IG1vZGlmeWluZyB0aGlzIHByb3BlcnR5LlxuICAgICAqIElmIHlvdSB3aXNoIHRvIHJlY3Vyc2l2ZWx5IGZpbmQgYWxsIGRlc2NlbmRhbnRzLCB5b3Ugc2hvdWxkIHVzZSB0aGUgYENvbXBvc2l0ZS5hbGxDb21wb3NpdGVzYCBtZXRob2QuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29tcG9zaXRlc1xuICAgICAqIEB0eXBlIGNvbXBvc2l0ZVtdXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHVzZWQgZm9yIHN0b3JpbmcgY2FjaGVkIHJlc3VsdHMgZm9yIHBlcmZvcm1hbmNlIHJlYXNvbnMuXG4gICAgICogVGhpcyBpcyB1c2VkIGludGVybmFsbHkgb25seSBhbmQgaXMgYXV0b21hdGljYWxseSBtYW5hZ2VkLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcHJvcGVydHkgY2FjaGVcbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogNyAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuU2xlZXBpbmdgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIHRvIG1hbmFnZSB0aGUgc2xlZXBpbmcgc3RhdGUgb2YgYm9kaWVzLlxuKlxuKiBAY2xhc3MgU2xlZXBpbmdcbiovXG5cbnZhciBTbGVlcGluZyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNsZWVwaW5nO1xuXG52YXIgQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBTbGVlcGluZy5fbW90aW9uV2FrZVRocmVzaG9sZCA9IDAuMTg7XG4gICAgU2xlZXBpbmcuX21vdGlvblNsZWVwVGhyZXNob2xkID0gMC4wODtcbiAgICBTbGVlcGluZy5fbWluQmlhcyA9IDAuOTtcblxuICAgIC8qKlxuICAgICAqIFB1dHMgYm9kaWVzIHRvIHNsZWVwIG9yIHdha2VzIHRoZW0gdXAgZGVwZW5kaW5nIG9uIHRoZWlyIG1vdGlvbi5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFcbiAgICAgKi9cbiAgICBTbGVlcGluZy51cGRhdGUgPSBmdW5jdGlvbihib2RpZXMsIGRlbHRhKSB7XG4gICAgICAgIHZhciB0aW1lU2NhbGUgPSBkZWx0YSAvIENvbW1vbi5fYmFzZURlbHRhLFxuICAgICAgICAgICAgbW90aW9uU2xlZXBUaHJlc2hvbGQgPSBTbGVlcGluZy5fbW90aW9uU2xlZXBUaHJlc2hvbGQ7XG4gICAgICAgIFxuICAgICAgICAvLyB1cGRhdGUgYm9kaWVzIHNsZWVwaW5nIHN0YXR1c1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgc3BlZWQgPSBCb2R5LmdldFNwZWVkKGJvZHkpLFxuICAgICAgICAgICAgICAgIGFuZ3VsYXJTcGVlZCA9IEJvZHkuZ2V0QW5ndWxhclNwZWVkKGJvZHkpLFxuICAgICAgICAgICAgICAgIG1vdGlvbiA9IHNwZWVkICogc3BlZWQgKyBhbmd1bGFyU3BlZWQgKiBhbmd1bGFyU3BlZWQ7XG5cbiAgICAgICAgICAgIC8vIHdha2UgdXAgYm9kaWVzIGlmIHRoZXkgaGF2ZSBhIGZvcmNlIGFwcGxpZWRcbiAgICAgICAgICAgIGlmIChib2R5LmZvcmNlLnggIT09IDAgfHwgYm9keS5mb3JjZS55ICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgU2xlZXBpbmcuc2V0KGJvZHksIGZhbHNlKTtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdmFyIG1pbk1vdGlvbiA9IE1hdGgubWluKGJvZHkubW90aW9uLCBtb3Rpb24pLFxuICAgICAgICAgICAgICAgIG1heE1vdGlvbiA9IE1hdGgubWF4KGJvZHkubW90aW9uLCBtb3Rpb24pO1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGJpYXNlZCBhdmVyYWdlIG1vdGlvbiBlc3RpbWF0aW9uIGJldHdlZW4gZnJhbWVzXG4gICAgICAgICAgICBib2R5Lm1vdGlvbiA9IFNsZWVwaW5nLl9taW5CaWFzICogbWluTW90aW9uICsgKDEgLSBTbGVlcGluZy5fbWluQmlhcykgKiBtYXhNb3Rpb247XG5cbiAgICAgICAgICAgIGlmIChib2R5LnNsZWVwVGhyZXNob2xkID4gMCAmJiBib2R5Lm1vdGlvbiA8IG1vdGlvblNsZWVwVGhyZXNob2xkKSB7XG4gICAgICAgICAgICAgICAgYm9keS5zbGVlcENvdW50ZXIgKz0gMTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9keS5zbGVlcENvdW50ZXIgPj0gYm9keS5zbGVlcFRocmVzaG9sZCAvIHRpbWVTY2FsZSkge1xuICAgICAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgdHJ1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBlbHNlIGlmIChib2R5LnNsZWVwQ291bnRlciA+IDApIHtcbiAgICAgICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciAtPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEdpdmVuIGEgc2V0IG9mIGNvbGxpZGluZyBwYWlycywgd2FrZXMgdGhlIHNsZWVwaW5nIGJvZGllcyBpbnZvbHZlZC5cbiAgICAgKiBAbWV0aG9kIGFmdGVyQ29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqL1xuICAgIFNsZWVwaW5nLmFmdGVyQ29sbGlzaW9ucyA9IGZ1bmN0aW9uKHBhaXJzKSB7XG4gICAgICAgIHZhciBtb3Rpb25TbGVlcFRocmVzaG9sZCA9IFNsZWVwaW5nLl9tb3Rpb25TbGVlcFRocmVzaG9sZDtcblxuICAgICAgICAvLyB3YWtlIHVwIGJvZGllcyBpbnZvbHZlZCBpbiBjb2xsaXNpb25zXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYWlyID0gcGFpcnNbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGRvbid0IHdha2UgaW5hY3RpdmUgcGFpcnNcbiAgICAgICAgICAgIGlmICghcGFpci5pc0FjdGl2ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uLFxuICAgICAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLmJvZHlBLnBhcmVudCwgXG4gICAgICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24uYm9keUIucGFyZW50O1xuICAgICAgICBcbiAgICAgICAgICAgIC8vIGRvbid0IHdha2UgaWYgYXQgbGVhc3Qgb25lIGJvZHkgaXMgc3RhdGljXG4gICAgICAgICAgICBpZiAoKGJvZHlBLmlzU2xlZXBpbmcgJiYgYm9keUIuaXNTbGVlcGluZykgfHwgYm9keUEuaXNTdGF0aWMgfHwgYm9keUIuaXNTdGF0aWMpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIFxuICAgICAgICAgICAgaWYgKGJvZHlBLmlzU2xlZXBpbmcgfHwgYm9keUIuaXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIHZhciBzbGVlcGluZ0JvZHkgPSAoYm9keUEuaXNTbGVlcGluZyAmJiAhYm9keUEuaXNTdGF0aWMpID8gYm9keUEgOiBib2R5QixcbiAgICAgICAgICAgICAgICAgICAgbW92aW5nQm9keSA9IHNsZWVwaW5nQm9keSA9PT0gYm9keUEgPyBib2R5QiA6IGJvZHlBO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFzbGVlcGluZ0JvZHkuaXNTdGF0aWMgJiYgbW92aW5nQm9keS5tb3Rpb24gPiBtb3Rpb25TbGVlcFRocmVzaG9sZCkge1xuICAgICAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoc2xlZXBpbmdCb2R5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcbiAgXG4gICAgLyoqXG4gICAgICogU2V0IGEgYm9keSBhcyBzbGVlcGluZyBvciBhd2FrZS5cbiAgICAgKiBAbWV0aG9kIHNldFxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keVxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gaXNTbGVlcGluZ1xuICAgICAqL1xuICAgIFNsZWVwaW5nLnNldCA9IGZ1bmN0aW9uKGJvZHksIGlzU2xlZXBpbmcpIHtcbiAgICAgICAgdmFyIHdhc1NsZWVwaW5nID0gYm9keS5pc1NsZWVwaW5nO1xuXG4gICAgICAgIGlmIChpc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICBib2R5LmlzU2xlZXBpbmcgPSB0cnVlO1xuICAgICAgICAgICAgYm9keS5zbGVlcENvdW50ZXIgPSBib2R5LnNsZWVwVGhyZXNob2xkO1xuXG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uSW1wdWxzZS54ID0gMDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb25JbXB1bHNlLnkgPSAwO1xuXG4gICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi54ID0gYm9keS5wb3NpdGlvbi54O1xuICAgICAgICAgICAgYm9keS5wb3NpdGlvblByZXYueSA9IGJvZHkucG9zaXRpb24ueTtcblxuICAgICAgICAgICAgYm9keS5hbmdsZVByZXYgPSBib2R5LmFuZ2xlO1xuICAgICAgICAgICAgYm9keS5zcGVlZCA9IDA7XG4gICAgICAgICAgICBib2R5LmFuZ3VsYXJTcGVlZCA9IDA7XG4gICAgICAgICAgICBib2R5Lm1vdGlvbiA9IDA7XG5cbiAgICAgICAgICAgIGlmICghd2FzU2xlZXBpbmcpIHtcbiAgICAgICAgICAgICAgICBFdmVudHMudHJpZ2dlcihib2R5LCAnc2xlZXBTdGFydCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYm9keS5pc1NsZWVwaW5nID0gZmFsc2U7XG4gICAgICAgICAgICBib2R5LnNsZWVwQ291bnRlciA9IDA7XG5cbiAgICAgICAgICAgIGlmICh3YXNTbGVlcGluZykge1xuICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKGJvZHksICdzbGVlcEVuZCcpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDggKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkNvbGxpc2lvbmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGRldGVjdGluZyBjb2xsaXNpb25zIGJldHdlZW4gYSBnaXZlbiBwYWlyIG9mIGJvZGllcy5cbipcbiogRm9yIGVmZmljaWVudCBkZXRlY3Rpb24gYmV0d2VlbiBhIGxpc3Qgb2YgYm9kaWVzLCBzZWUgYE1hdHRlci5EZXRlY3RvcmAgYW5kIGBNYXR0ZXIuUXVlcnlgLlxuKlxuKiBTZWUgYE1hdHRlci5FbmdpbmVgIGZvciBjb2xsaXNpb24gZXZlbnRzLlxuKlxuKiBAY2xhc3MgQ29sbGlzaW9uXG4qL1xuXG52YXIgQ29sbGlzaW9uID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQ29sbGlzaW9uO1xuXG52YXIgVmVydGljZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDMpO1xudmFyIFBhaXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgdmFyIF9zdXBwb3J0cyA9IFtdO1xuXG4gICAgdmFyIF9vdmVybGFwQUIgPSB7XG4gICAgICAgIG92ZXJsYXA6IDAsXG4gICAgICAgIGF4aXM6IG51bGxcbiAgICB9O1xuXG4gICAgdmFyIF9vdmVybGFwQkEgPSB7XG4gICAgICAgIG92ZXJsYXA6IDAsXG4gICAgICAgIGF4aXM6IG51bGxcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb2xsaXNpb24gcmVjb3JkLlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QSBUaGUgZmlyc3QgYm9keSBwYXJ0IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gcmVjb3JkXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QiBUaGUgc2Vjb25kIGJvZHkgcGFydCByZXByZXNlbnRlZCBieSB0aGUgY29sbGlzaW9uIHJlY29yZFxuICAgICAqIEByZXR1cm4ge2NvbGxpc2lvbn0gQSBuZXcgY29sbGlzaW9uIHJlY29yZFxuICAgICAqL1xuICAgIENvbGxpc2lvbi5jcmVhdGUgPSBmdW5jdGlvbihib2R5QSwgYm9keUIpIHtcbiAgICAgICAgcmV0dXJuIHsgXG4gICAgICAgICAgICBwYWlyOiBudWxsLFxuICAgICAgICAgICAgY29sbGlkZWQ6IGZhbHNlLFxuICAgICAgICAgICAgYm9keUE6IGJvZHlBLFxuICAgICAgICAgICAgYm9keUI6IGJvZHlCLFxuICAgICAgICAgICAgcGFyZW50QTogYm9keUEucGFyZW50LFxuICAgICAgICAgICAgcGFyZW50QjogYm9keUIucGFyZW50LFxuICAgICAgICAgICAgZGVwdGg6IDAsXG4gICAgICAgICAgICBub3JtYWw6IHsgeDogMCwgeTogMCB9LFxuICAgICAgICAgICAgdGFuZ2VudDogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBwZW5ldHJhdGlvbjogeyB4OiAwLCB5OiAwIH0sXG4gICAgICAgICAgICBzdXBwb3J0czogW251bGwsIG51bGxdLFxuICAgICAgICAgICAgc3VwcG9ydENvdW50OiAwXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCBjb2xsaXNpb24gYmV0d2VlbiB0d28gYm9kaWVzLlxuICAgICAqIEBtZXRob2QgY29sbGlkZXNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlBXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QlxuICAgICAqIEBwYXJhbSB7cGFpcnN9IFtwYWlyc10gT3B0aW9uYWxseSByZXVzZSBjb2xsaXNpb24gcmVjb3JkcyBmcm9tIGV4aXN0aW5nIHBhaXJzLlxuICAgICAqIEByZXR1cm4ge2NvbGxpc2lvbnxudWxsfSBBIGNvbGxpc2lvbiByZWNvcmQgaWYgZGV0ZWN0ZWQsIG90aGVyd2lzZSBudWxsXG4gICAgICovXG4gICAgQ29sbGlzaW9uLmNvbGxpZGVzID0gZnVuY3Rpb24oYm9keUEsIGJvZHlCLCBwYWlycykge1xuICAgICAgICBDb2xsaXNpb24uX292ZXJsYXBBeGVzKF9vdmVybGFwQUIsIGJvZHlBLnZlcnRpY2VzLCBib2R5Qi52ZXJ0aWNlcywgYm9keUEuYXhlcyk7XG5cbiAgICAgICAgaWYgKF9vdmVybGFwQUIub3ZlcmxhcCA8PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIENvbGxpc2lvbi5fb3ZlcmxhcEF4ZXMoX292ZXJsYXBCQSwgYm9keUIudmVydGljZXMsIGJvZHlBLnZlcnRpY2VzLCBib2R5Qi5heGVzKTtcblxuICAgICAgICBpZiAoX292ZXJsYXBCQS5vdmVybGFwIDw9IDApIHtcbiAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gcmV1c2UgY29sbGlzaW9uIHJlY29yZHMgZm9yIGdjIGVmZmljaWVuY3lcbiAgICAgICAgdmFyIHBhaXIgPSBwYWlycyAmJiBwYWlycy50YWJsZVtQYWlyLmlkKGJvZHlBLCBib2R5QildLFxuICAgICAgICAgICAgY29sbGlzaW9uO1xuXG4gICAgICAgIGlmICghcGFpcikge1xuICAgICAgICAgICAgY29sbGlzaW9uID0gQ29sbGlzaW9uLmNyZWF0ZShib2R5QSwgYm9keUIpO1xuICAgICAgICAgICAgY29sbGlzaW9uLmNvbGxpZGVkID0gdHJ1ZTtcbiAgICAgICAgICAgIGNvbGxpc2lvbi5ib2R5QSA9IGJvZHlBLmlkIDwgYm9keUIuaWQgPyBib2R5QSA6IGJvZHlCO1xuICAgICAgICAgICAgY29sbGlzaW9uLmJvZHlCID0gYm9keUEuaWQgPCBib2R5Qi5pZCA/IGJvZHlCIDogYm9keUE7XG4gICAgICAgICAgICBjb2xsaXNpb24ucGFyZW50QSA9IGNvbGxpc2lvbi5ib2R5QS5wYXJlbnQ7XG4gICAgICAgICAgICBjb2xsaXNpb24ucGFyZW50QiA9IGNvbGxpc2lvbi5ib2R5Qi5wYXJlbnQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgfVxuXG4gICAgICAgIGJvZHlBID0gY29sbGlzaW9uLmJvZHlBO1xuICAgICAgICBib2R5QiA9IGNvbGxpc2lvbi5ib2R5QjtcblxuICAgICAgICB2YXIgbWluT3ZlcmxhcDtcblxuICAgICAgICBpZiAoX292ZXJsYXBBQi5vdmVybGFwIDwgX292ZXJsYXBCQS5vdmVybGFwKSB7XG4gICAgICAgICAgICBtaW5PdmVybGFwID0gX292ZXJsYXBBQjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIG1pbk92ZXJsYXAgPSBfb3ZlcmxhcEJBO1xuICAgICAgICB9XG5cbiAgICAgICAgdmFyIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWwsXG4gICAgICAgICAgICB0YW5nZW50ID0gY29sbGlzaW9uLnRhbmdlbnQsXG4gICAgICAgICAgICBwZW5ldHJhdGlvbiA9IGNvbGxpc2lvbi5wZW5ldHJhdGlvbixcbiAgICAgICAgICAgIHN1cHBvcnRzID0gY29sbGlzaW9uLnN1cHBvcnRzLFxuICAgICAgICAgICAgZGVwdGggPSBtaW5PdmVybGFwLm92ZXJsYXAsXG4gICAgICAgICAgICBtaW5BeGlzID0gbWluT3ZlcmxhcC5heGlzLFxuICAgICAgICAgICAgbm9ybWFsWCA9IG1pbkF4aXMueCxcbiAgICAgICAgICAgIG5vcm1hbFkgPSBtaW5BeGlzLnksXG4gICAgICAgICAgICBkZWx0YVggPSBib2R5Qi5wb3NpdGlvbi54IC0gYm9keUEucG9zaXRpb24ueCxcbiAgICAgICAgICAgIGRlbHRhWSA9IGJvZHlCLnBvc2l0aW9uLnkgLSBib2R5QS5wb3NpdGlvbi55O1xuXG4gICAgICAgIC8vIGVuc3VyZSBub3JtYWwgaXMgZmFjaW5nIGF3YXkgZnJvbSBib2R5QVxuICAgICAgICBpZiAobm9ybWFsWCAqIGRlbHRhWCArIG5vcm1hbFkgKiBkZWx0YVkgPj0gMCkge1xuICAgICAgICAgICAgbm9ybWFsWCA9IC1ub3JtYWxYO1xuICAgICAgICAgICAgbm9ybWFsWSA9IC1ub3JtYWxZO1xuICAgICAgICB9XG5cbiAgICAgICAgbm9ybWFsLnggPSBub3JtYWxYO1xuICAgICAgICBub3JtYWwueSA9IG5vcm1hbFk7XG4gICAgICAgIFxuICAgICAgICB0YW5nZW50LnggPSAtbm9ybWFsWTtcbiAgICAgICAgdGFuZ2VudC55ID0gbm9ybWFsWDtcblxuICAgICAgICBwZW5ldHJhdGlvbi54ID0gbm9ybWFsWCAqIGRlcHRoO1xuICAgICAgICBwZW5ldHJhdGlvbi55ID0gbm9ybWFsWSAqIGRlcHRoO1xuXG4gICAgICAgIGNvbGxpc2lvbi5kZXB0aCA9IGRlcHRoO1xuXG4gICAgICAgIC8vIGZpbmQgc3VwcG9ydCBwb2ludHMsIHRoZXJlIGlzIGFsd2F5cyBlaXRoZXIgZXhhY3RseSBvbmUgb3IgdHdvXG4gICAgICAgIHZhciBzdXBwb3J0c0IgPSBDb2xsaXNpb24uX2ZpbmRTdXBwb3J0cyhib2R5QSwgYm9keUIsIG5vcm1hbCwgMSksXG4gICAgICAgICAgICBzdXBwb3J0Q291bnQgPSAwO1xuXG4gICAgICAgIC8vIGZpbmQgdGhlIHN1cHBvcnRzIGZyb20gYm9keUIgdGhhdCBhcmUgaW5zaWRlIGJvZHlBXG4gICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhib2R5QS52ZXJ0aWNlcywgc3VwcG9ydHNCWzBdKSkge1xuICAgICAgICAgICAgc3VwcG9ydHNbc3VwcG9ydENvdW50KytdID0gc3VwcG9ydHNCWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKFZlcnRpY2VzLmNvbnRhaW5zKGJvZHlBLnZlcnRpY2VzLCBzdXBwb3J0c0JbMV0pKSB7XG4gICAgICAgICAgICBzdXBwb3J0c1tzdXBwb3J0Q291bnQrK10gPSBzdXBwb3J0c0JbMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyBmaW5kIHRoZSBzdXBwb3J0cyBmcm9tIGJvZHlBIHRoYXQgYXJlIGluc2lkZSBib2R5QlxuICAgICAgICBpZiAoc3VwcG9ydENvdW50IDwgMikge1xuICAgICAgICAgICAgdmFyIHN1cHBvcnRzQSA9IENvbGxpc2lvbi5fZmluZFN1cHBvcnRzKGJvZHlCLCBib2R5QSwgbm9ybWFsLCAtMSk7XG5cbiAgICAgICAgICAgIGlmIChWZXJ0aWNlcy5jb250YWlucyhib2R5Qi52ZXJ0aWNlcywgc3VwcG9ydHNBWzBdKSkge1xuICAgICAgICAgICAgICAgIHN1cHBvcnRzW3N1cHBvcnRDb3VudCsrXSA9IHN1cHBvcnRzQVswXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHN1cHBvcnRDb3VudCA8IDIgJiYgVmVydGljZXMuY29udGFpbnMoYm9keUIudmVydGljZXMsIHN1cHBvcnRzQVsxXSkpIHtcbiAgICAgICAgICAgICAgICBzdXBwb3J0c1tzdXBwb3J0Q291bnQrK10gPSBzdXBwb3J0c0FbMV07XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhY2NvdW50IGZvciB0aGUgZWRnZSBjYXNlIG9mIG92ZXJsYXBwaW5nIGJ1dCBubyB2ZXJ0ZXggY29udGFpbm1lbnRcbiAgICAgICAgaWYgKHN1cHBvcnRDb3VudCA9PT0gMCkge1xuICAgICAgICAgICAgc3VwcG9ydHNbc3VwcG9ydENvdW50KytdID0gc3VwcG9ydHNCWzBdO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gdXBkYXRlIHN1cHBvcnQgY291bnRcbiAgICAgICAgY29sbGlzaW9uLnN1cHBvcnRDb3VudCA9IHN1cHBvcnRDb3VudDtcblxuICAgICAgICByZXR1cm4gY29sbGlzaW9uO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIHRoZSBvdmVybGFwIGJldHdlZW4gdHdvIHNldHMgb2YgdmVydGljZXMuXG4gICAgICogQG1ldGhvZCBfb3ZlcmxhcEF4ZXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSByZXN1bHRcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc0FcbiAgICAgKiBAcGFyYW0ge3ZlcnRpY2VzfSB2ZXJ0aWNlc0JcbiAgICAgKiBAcGFyYW0ge2F4ZXN9IGF4ZXNcbiAgICAgKi9cbiAgICBDb2xsaXNpb24uX292ZXJsYXBBeGVzID0gZnVuY3Rpb24ocmVzdWx0LCB2ZXJ0aWNlc0EsIHZlcnRpY2VzQiwgYXhlcykge1xuICAgICAgICB2YXIgdmVydGljZXNBTGVuZ3RoID0gdmVydGljZXNBLmxlbmd0aCxcbiAgICAgICAgICAgIHZlcnRpY2VzQkxlbmd0aCA9IHZlcnRpY2VzQi5sZW5ndGgsXG4gICAgICAgICAgICB2ZXJ0aWNlc0FYID0gdmVydGljZXNBWzBdLngsXG4gICAgICAgICAgICB2ZXJ0aWNlc0FZID0gdmVydGljZXNBWzBdLnksXG4gICAgICAgICAgICB2ZXJ0aWNlc0JYID0gdmVydGljZXNCWzBdLngsXG4gICAgICAgICAgICB2ZXJ0aWNlc0JZID0gdmVydGljZXNCWzBdLnksXG4gICAgICAgICAgICBheGVzTGVuZ3RoID0gYXhlcy5sZW5ndGgsXG4gICAgICAgICAgICBvdmVybGFwTWluID0gTnVtYmVyLk1BWF9WQUxVRSxcbiAgICAgICAgICAgIG92ZXJsYXBBeGlzTnVtYmVyID0gMCxcbiAgICAgICAgICAgIG92ZXJsYXAsXG4gICAgICAgICAgICBvdmVybGFwQUIsXG4gICAgICAgICAgICBvdmVybGFwQkEsXG4gICAgICAgICAgICBkb3QsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYXhlc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYXhpcyA9IGF4ZXNbaV0sXG4gICAgICAgICAgICAgICAgYXhpc1ggPSBheGlzLngsXG4gICAgICAgICAgICAgICAgYXhpc1kgPSBheGlzLnksXG4gICAgICAgICAgICAgICAgbWluQSA9IHZlcnRpY2VzQVggKiBheGlzWCArIHZlcnRpY2VzQVkgKiBheGlzWSxcbiAgICAgICAgICAgICAgICBtaW5CID0gdmVydGljZXNCWCAqIGF4aXNYICsgdmVydGljZXNCWSAqIGF4aXNZLFxuICAgICAgICAgICAgICAgIG1heEEgPSBtaW5BLFxuICAgICAgICAgICAgICAgIG1heEIgPSBtaW5CO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKGogPSAxOyBqIDwgdmVydGljZXNBTGVuZ3RoOyBqICs9IDEpIHtcbiAgICAgICAgICAgICAgICBkb3QgPSB2ZXJ0aWNlc0Fbal0ueCAqIGF4aXNYICsgdmVydGljZXNBW2pdLnkgKiBheGlzWTtcblxuICAgICAgICAgICAgICAgIGlmIChkb3QgPiBtYXhBKSB7IFxuICAgICAgICAgICAgICAgICAgICBtYXhBID0gZG90O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAoZG90IDwgbWluQSkgeyBcbiAgICAgICAgICAgICAgICAgICAgbWluQSA9IGRvdDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvciAoaiA9IDE7IGogPCB2ZXJ0aWNlc0JMZW5ndGg7IGogKz0gMSkge1xuICAgICAgICAgICAgICAgIGRvdCA9IHZlcnRpY2VzQltqXS54ICogYXhpc1ggKyB2ZXJ0aWNlc0Jbal0ueSAqIGF4aXNZO1xuXG4gICAgICAgICAgICAgICAgaWYgKGRvdCA+IG1heEIpIHsgXG4gICAgICAgICAgICAgICAgICAgIG1heEIgPSBkb3Q7XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChkb3QgPCBtaW5CKSB7IFxuICAgICAgICAgICAgICAgICAgICBtaW5CID0gZG90O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgb3ZlcmxhcEFCID0gbWF4QSAtIG1pbkI7XG4gICAgICAgICAgICBvdmVybGFwQkEgPSBtYXhCIC0gbWluQTtcbiAgICAgICAgICAgIG92ZXJsYXAgPSBvdmVybGFwQUIgPCBvdmVybGFwQkEgPyBvdmVybGFwQUIgOiBvdmVybGFwQkE7XG5cbiAgICAgICAgICAgIGlmIChvdmVybGFwIDwgb3ZlcmxhcE1pbikge1xuICAgICAgICAgICAgICAgIG92ZXJsYXBNaW4gPSBvdmVybGFwO1xuICAgICAgICAgICAgICAgIG92ZXJsYXBBeGlzTnVtYmVyID0gaTtcblxuICAgICAgICAgICAgICAgIGlmIChvdmVybGFwIDw9IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gY2FuIG5vdCBiZSBpbnRlcnNlY3RpbmdcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSBcbiAgICAgICAgfVxuXG4gICAgICAgIHJlc3VsdC5heGlzID0gYXhlc1tvdmVybGFwQXhpc051bWJlcl07XG4gICAgICAgIHJlc3VsdC5vdmVybGFwID0gb3ZlcmxhcE1pbjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluZHMgc3VwcG9ydGluZyB2ZXJ0aWNlcyBnaXZlbiB0d28gYm9kaWVzIGFsb25nIGEgZ2l2ZW4gZGlyZWN0aW9uIHVzaW5nIGhpbGwtY2xpbWJpbmcuXG4gICAgICogQG1ldGhvZCBfZmluZFN1cHBvcnRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlBXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QlxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBub3JtYWxcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGlyZWN0aW9uXG4gICAgICogQHJldHVybiBbdmVjdG9yXVxuICAgICAqL1xuICAgIENvbGxpc2lvbi5fZmluZFN1cHBvcnRzID0gZnVuY3Rpb24oYm9keUEsIGJvZHlCLCBub3JtYWwsIGRpcmVjdGlvbikge1xuICAgICAgICB2YXIgdmVydGljZXMgPSBib2R5Qi52ZXJ0aWNlcyxcbiAgICAgICAgICAgIHZlcnRpY2VzTGVuZ3RoID0gdmVydGljZXMubGVuZ3RoLFxuICAgICAgICAgICAgYm9keUFQb3NpdGlvblggPSBib2R5QS5wb3NpdGlvbi54LFxuICAgICAgICAgICAgYm9keUFQb3NpdGlvblkgPSBib2R5QS5wb3NpdGlvbi55LFxuICAgICAgICAgICAgbm9ybWFsWCA9IG5vcm1hbC54ICogZGlyZWN0aW9uLFxuICAgICAgICAgICAgbm9ybWFsWSA9IG5vcm1hbC55ICogZGlyZWN0aW9uLFxuICAgICAgICAgICAgdmVydGV4QSA9IHZlcnRpY2VzWzBdLFxuICAgICAgICAgICAgdmVydGV4QiA9IHZlcnRleEEsXG4gICAgICAgICAgICBuZWFyZXN0RGlzdGFuY2UgPSBub3JtYWxYICogKGJvZHlBUG9zaXRpb25YIC0gdmVydGV4Qi54KSArIG5vcm1hbFkgKiAoYm9keUFQb3NpdGlvblkgLSB2ZXJ0ZXhCLnkpLFxuICAgICAgICAgICAgdmVydGV4QyxcbiAgICAgICAgICAgIGRpc3RhbmNlLFxuICAgICAgICAgICAgajtcblxuICAgICAgICAvLyBmaW5kIGRlZXBlc3QgdmVydGV4IHJlbGF0aXZlIHRvIHRoZSBheGlzXG4gICAgICAgIGZvciAoaiA9IDE7IGogPCB2ZXJ0aWNlc0xlbmd0aDsgaiArPSAxKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhCID0gdmVydGljZXNbal07XG4gICAgICAgICAgICBkaXN0YW5jZSA9IG5vcm1hbFggKiAoYm9keUFQb3NpdGlvblggLSB2ZXJ0ZXhCLngpICsgbm9ybWFsWSAqIChib2R5QVBvc2l0aW9uWSAtIHZlcnRleEIueSk7XG5cbiAgICAgICAgICAgIC8vIGNvbnZleCBoaWxsLWNsaW1iaW5nXG4gICAgICAgICAgICBpZiAoZGlzdGFuY2UgPCBuZWFyZXN0RGlzdGFuY2UpIHtcbiAgICAgICAgICAgICAgICBuZWFyZXN0RGlzdGFuY2UgPSBkaXN0YW5jZTtcbiAgICAgICAgICAgICAgICB2ZXJ0ZXhBID0gdmVydGV4QjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIG1lYXN1cmUgbmV4dCB2ZXJ0ZXhcbiAgICAgICAgdmVydGV4QyA9IHZlcnRpY2VzWyh2ZXJ0aWNlc0xlbmd0aCArIHZlcnRleEEuaW5kZXggLSAxKSAlIHZlcnRpY2VzTGVuZ3RoXTtcbiAgICAgICAgbmVhcmVzdERpc3RhbmNlID0gbm9ybWFsWCAqIChib2R5QVBvc2l0aW9uWCAtIHZlcnRleEMueCkgKyBub3JtYWxZICogKGJvZHlBUG9zaXRpb25ZIC0gdmVydGV4Qy55KTtcblxuICAgICAgICAvLyBjb21wYXJlIHdpdGggcHJldmlvdXMgdmVydGV4XG4gICAgICAgIHZlcnRleEIgPSB2ZXJ0aWNlc1sodmVydGV4QS5pbmRleCArIDEpICUgdmVydGljZXNMZW5ndGhdO1xuICAgICAgICBpZiAobm9ybWFsWCAqIChib2R5QVBvc2l0aW9uWCAtIHZlcnRleEIueCkgKyBub3JtYWxZICogKGJvZHlBUG9zaXRpb25ZIC0gdmVydGV4Qi55KSA8IG5lYXJlc3REaXN0YW5jZSkge1xuICAgICAgICAgICAgX3N1cHBvcnRzWzBdID0gdmVydGV4QTtcbiAgICAgICAgICAgIF9zdXBwb3J0c1sxXSA9IHZlcnRleEI7XG5cbiAgICAgICAgICAgIHJldHVybiBfc3VwcG9ydHM7XG4gICAgICAgIH1cblxuICAgICAgICBfc3VwcG9ydHNbMF0gPSB2ZXJ0ZXhBO1xuICAgICAgICBfc3VwcG9ydHNbMV0gPSB2ZXJ0ZXhDO1xuXG4gICAgICAgIHJldHVybiBfc3VwcG9ydHM7XG4gICAgfTtcblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSByZWZlcmVuY2UgdG8gdGhlIHBhaXIgdXNpbmcgdGhpcyBjb2xsaXNpb24gcmVjb3JkLCBpZiB0aGVyZSBpcyBvbmUuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcGFpclxuICAgICAqIEB0eXBlIHtwYWlyfG51bGx9XG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRoYXQgaW5kaWNhdGVzIGlmIHRoZSBib2RpZXMgd2VyZSBjb2xsaWRpbmcgd2hlbiB0aGUgY29sbGlzaW9uIHdhcyBsYXN0IHVwZGF0ZWQuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IGNvbGxpZGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZmlyc3QgYm9keSBwYXJ0IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gKHNlZSBhbHNvIGBjb2xsaXNpb24ucGFyZW50QWApLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBib2R5QVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWNvbmQgYm9keSBwYXJ0IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gKHNlZSBhbHNvIGBjb2xsaXNpb24ucGFyZW50QmApLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBib2R5QlxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBmaXJzdCBib2R5IHJlcHJlc2VudGVkIGJ5IHRoZSBjb2xsaXNpb24gKGkuZS4gYGNvbGxpc2lvbi5ib2R5QS5wYXJlbnRgKS5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgcGFyZW50QVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBzZWNvbmQgYm9keSByZXByZXNlbnRlZCBieSB0aGUgY29sbGlzaW9uIChpLmUuIGBjb2xsaXNpb24uYm9keUIucGFyZW50YCkuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IHBhcmVudEJcbiAgICAgKiBAdHlwZSBib2R5XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgcmVwcmVzZW50cyB0aGUgbWluaW11bSBzZXBhcmF0aW5nIGRpc3RhbmNlIGJldHdlZW4gdGhlIGJvZGllcyBhbG9uZyB0aGUgY29sbGlzaW9uIG5vcm1hbC5cbiAgICAgKlxuICAgICAqIEByZWFkT25seVxuICAgICAqIEBwcm9wZXJ0eSBkZXB0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgbm9ybWFsaXNlZCBgVmVjdG9yYCB0aGF0IHJlcHJlc2VudHMgdGhlIGRpcmVjdGlvbiBiZXR3ZWVuIHRoZSBib2RpZXMgdGhhdCBwcm92aWRlcyB0aGUgbWluaW11bSBzZXBhcmF0aW5nIGRpc3RhbmNlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG5vcm1hbFxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIG5vcm1hbGlzZWQgYFZlY3RvcmAgdGhhdCBpcyB0aGUgdGFuZ2VudCBkaXJlY3Rpb24gdG8gdGhlIGNvbGxpc2lvbiBub3JtYWwuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGFuZ2VudFxuICAgICAqIEB0eXBlIHZlY3RvclxuICAgICAqIEBkZWZhdWx0IHsgeDogMCwgeTogMCB9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgcmVwcmVzZW50cyB0aGUgZGlyZWN0aW9uIGFuZCBkZXB0aCBvZiB0aGUgY29sbGlzaW9uLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBlbmV0cmF0aW9uXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFycmF5IG9mIGJvZHkgdmVydGljZXMgdGhhdCByZXByZXNlbnQgdGhlIHN1cHBvcnQgcG9pbnRzIGluIHRoZSBjb2xsaXNpb24uXG4gICAgICogXG4gICAgICogX05vdGU6XyBPbmx5IHRoZSBmaXJzdCBgY29sbGlzaW9uLnN1cHBvcnRDb3VudGAgaXRlbXMgb2YgYGNvbGxpc2lvbi5zdXBwb3J0c2AgYXJlIGFjdGl2ZS5cbiAgICAgKiBUaGVyZWZvcmUgdXNlIGBjb2xsaXNpb24uc3VwcG9ydENvdW50YCBpbnN0ZWFkIG9mIGBjb2xsaXNpb24uc3VwcG9ydHMubGVuZ3RoYCB3aGVuIGl0ZXJhdGluZyB0aGUgYWN0aXZlIHN1cHBvcnRzLlxuICAgICAqIFxuICAgICAqIFRoZXNlIGFyZSB0aGUgZGVlcGVzdCB2ZXJ0aWNlcyAoYWxvbmcgdGhlIGNvbGxpc2lvbiBub3JtYWwpIG9mIGVhY2ggYm9keSB0aGF0IGFyZSBjb250YWluZWQgYnkgdGhlIG90aGVyIGJvZHkncyB2ZXJ0aWNlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzdXBwb3J0c1xuICAgICAqIEB0eXBlIHZlY3RvcltdXG4gICAgICogQGRlZmF1bHQgW11cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBudW1iZXIgb2YgYWN0aXZlIHN1cHBvcnRzIGZvciB0aGlzIGNvbGxpc2lvbiBmb3VuZCBpbiBgY29sbGlzaW9uLnN1cHBvcnRzYC5cbiAgICAgKiBcbiAgICAgKiBfTm90ZTpfIE9ubHkgdGhlIGZpcnN0IGBjb2xsaXNpb24uc3VwcG9ydENvdW50YCBpdGVtcyBvZiBgY29sbGlzaW9uLnN1cHBvcnRzYCBhcmUgYWN0aXZlLlxuICAgICAqIFRoZXJlZm9yZSB1c2UgYGNvbGxpc2lvbi5zdXBwb3J0Q291bnRgIGluc3RlYWQgb2YgYGNvbGxpc2lvbi5zdXBwb3J0cy5sZW5ndGhgIHdoZW4gaXRlcmF0aW5nIHRoZSBhY3RpdmUgc3VwcG9ydHMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgc3VwcG9ydENvdW50XG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogOSAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuUGFpcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgY29sbGlzaW9uIHBhaXJzLlxuKlxuKiBAY2xhc3MgUGFpclxuKi9cblxudmFyIFBhaXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBQYWlyO1xuXG52YXIgQ29udGFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xuXG4oZnVuY3Rpb24oKSB7XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHBhaXIuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge2NvbGxpc2lvbn0gY29sbGlzaW9uXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqIEByZXR1cm4ge3BhaXJ9IEEgbmV3IHBhaXJcbiAgICAgKi9cbiAgICBQYWlyLmNyZWF0ZSA9IGZ1bmN0aW9uKGNvbGxpc2lvbiwgdGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBib2R5QSA9IGNvbGxpc2lvbi5ib2R5QSxcbiAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLmJvZHlCO1xuXG4gICAgICAgIHZhciBwYWlyID0ge1xuICAgICAgICAgICAgaWQ6IFBhaXIuaWQoYm9keUEsIGJvZHlCKSxcbiAgICAgICAgICAgIGJvZHlBOiBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCOiBib2R5QixcbiAgICAgICAgICAgIGNvbGxpc2lvbjogY29sbGlzaW9uLFxuICAgICAgICAgICAgY29udGFjdHM6IFtDb250YWN0LmNyZWF0ZSgpLCBDb250YWN0LmNyZWF0ZSgpXSxcbiAgICAgICAgICAgIGNvbnRhY3RDb3VudDogMCxcbiAgICAgICAgICAgIHNlcGFyYXRpb246IDAsXG4gICAgICAgICAgICBpc0FjdGl2ZTogdHJ1ZSxcbiAgICAgICAgICAgIGlzU2Vuc29yOiBib2R5QS5pc1NlbnNvciB8fCBib2R5Qi5pc1NlbnNvcixcbiAgICAgICAgICAgIHRpbWVDcmVhdGVkOiB0aW1lc3RhbXAsXG4gICAgICAgICAgICB0aW1lVXBkYXRlZDogdGltZXN0YW1wLFxuICAgICAgICAgICAgaW52ZXJzZU1hc3M6IDAsXG4gICAgICAgICAgICBmcmljdGlvbjogMCxcbiAgICAgICAgICAgIGZyaWN0aW9uU3RhdGljOiAwLFxuICAgICAgICAgICAgcmVzdGl0dXRpb246IDAsXG4gICAgICAgICAgICBzbG9wOiAwXG4gICAgICAgIH07XG5cbiAgICAgICAgUGFpci51cGRhdGUocGFpciwgY29sbGlzaW9uLCB0aW1lc3RhbXApO1xuXG4gICAgICAgIHJldHVybiBwYWlyO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIGEgcGFpciBnaXZlbiBhIGNvbGxpc2lvbi5cbiAgICAgKiBAbWV0aG9kIHVwZGF0ZVxuICAgICAqIEBwYXJhbSB7cGFpcn0gcGFpclxuICAgICAqIEBwYXJhbSB7Y29sbGlzaW9ufSBjb2xsaXNpb25cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZXN0YW1wXG4gICAgICovXG4gICAgUGFpci51cGRhdGUgPSBmdW5jdGlvbihwYWlyLCBjb2xsaXNpb24sIHRpbWVzdGFtcCkge1xuICAgICAgICB2YXIgc3VwcG9ydHMgPSBjb2xsaXNpb24uc3VwcG9ydHMsXG4gICAgICAgICAgICBzdXBwb3J0Q291bnQgPSBjb2xsaXNpb24uc3VwcG9ydENvdW50LFxuICAgICAgICAgICAgY29udGFjdHMgPSBwYWlyLmNvbnRhY3RzLFxuICAgICAgICAgICAgcGFyZW50QSA9IGNvbGxpc2lvbi5wYXJlbnRBLFxuICAgICAgICAgICAgcGFyZW50QiA9IGNvbGxpc2lvbi5wYXJlbnRCO1xuICAgICAgICBcbiAgICAgICAgcGFpci5pc0FjdGl2ZSA9IHRydWU7XG4gICAgICAgIHBhaXIudGltZVVwZGF0ZWQgPSB0aW1lc3RhbXA7XG4gICAgICAgIHBhaXIuY29sbGlzaW9uID0gY29sbGlzaW9uO1xuICAgICAgICBwYWlyLnNlcGFyYXRpb24gPSBjb2xsaXNpb24uZGVwdGg7XG4gICAgICAgIHBhaXIuaW52ZXJzZU1hc3MgPSBwYXJlbnRBLmludmVyc2VNYXNzICsgcGFyZW50Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgcGFpci5mcmljdGlvbiA9IHBhcmVudEEuZnJpY3Rpb24gPCBwYXJlbnRCLmZyaWN0aW9uID8gcGFyZW50QS5mcmljdGlvbiA6IHBhcmVudEIuZnJpY3Rpb247XG4gICAgICAgIHBhaXIuZnJpY3Rpb25TdGF0aWMgPSBwYXJlbnRBLmZyaWN0aW9uU3RhdGljID4gcGFyZW50Qi5mcmljdGlvblN0YXRpYyA/IHBhcmVudEEuZnJpY3Rpb25TdGF0aWMgOiBwYXJlbnRCLmZyaWN0aW9uU3RhdGljO1xuICAgICAgICBwYWlyLnJlc3RpdHV0aW9uID0gcGFyZW50QS5yZXN0aXR1dGlvbiA+IHBhcmVudEIucmVzdGl0dXRpb24gPyBwYXJlbnRBLnJlc3RpdHV0aW9uIDogcGFyZW50Qi5yZXN0aXR1dGlvbjtcbiAgICAgICAgcGFpci5zbG9wID0gcGFyZW50QS5zbG9wID4gcGFyZW50Qi5zbG9wID8gcGFyZW50QS5zbG9wIDogcGFyZW50Qi5zbG9wO1xuXG4gICAgICAgIHBhaXIuY29udGFjdENvdW50ID0gc3VwcG9ydENvdW50O1xuICAgICAgICBjb2xsaXNpb24ucGFpciA9IHBhaXI7XG5cbiAgICAgICAgdmFyIHN1cHBvcnRBID0gc3VwcG9ydHNbMF0sXG4gICAgICAgICAgICBjb250YWN0QSA9IGNvbnRhY3RzWzBdLFxuICAgICAgICAgICAgc3VwcG9ydEIgPSBzdXBwb3J0c1sxXSxcbiAgICAgICAgICAgIGNvbnRhY3RCID0gY29udGFjdHNbMV07XG5cbiAgICAgICAgLy8gbWF0Y2ggY29udGFjdHMgdG8gc3VwcG9ydHNcbiAgICAgICAgaWYgKGNvbnRhY3RCLnZlcnRleCA9PT0gc3VwcG9ydEEgfHwgY29udGFjdEEudmVydGV4ID09PSBzdXBwb3J0Qikge1xuICAgICAgICAgICAgY29udGFjdHNbMV0gPSBjb250YWN0QTtcbiAgICAgICAgICAgIGNvbnRhY3RzWzBdID0gY29udGFjdEEgPSBjb250YWN0QjtcbiAgICAgICAgICAgIGNvbnRhY3RCID0gY29udGFjdHNbMV07XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgY29udGFjdHNcbiAgICAgICAgY29udGFjdEEudmVydGV4ID0gc3VwcG9ydEE7XG4gICAgICAgIGNvbnRhY3RCLnZlcnRleCA9IHN1cHBvcnRCO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogU2V0IGEgcGFpciBhcyBhY3RpdmUgb3IgaW5hY3RpdmUuXG4gICAgICogQG1ldGhvZCBzZXRBY3RpdmVcbiAgICAgKiBAcGFyYW0ge3BhaXJ9IHBhaXJcbiAgICAgKiBAcGFyYW0ge2Jvb2x9IGlzQWN0aXZlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHRpbWVzdGFtcFxuICAgICAqL1xuICAgIFBhaXIuc2V0QWN0aXZlID0gZnVuY3Rpb24ocGFpciwgaXNBY3RpdmUsIHRpbWVzdGFtcCkge1xuICAgICAgICBpZiAoaXNBY3RpdmUpIHtcbiAgICAgICAgICAgIHBhaXIuaXNBY3RpdmUgPSB0cnVlO1xuICAgICAgICAgICAgcGFpci50aW1lVXBkYXRlZCA9IHRpbWVzdGFtcDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHBhaXIuaXNBY3RpdmUgPSBmYWxzZTtcbiAgICAgICAgICAgIHBhaXIuY29udGFjdENvdW50ID0gMDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXQgdGhlIGlkIGZvciB0aGUgZ2l2ZW4gcGFpci5cbiAgICAgKiBAbWV0aG9kIGlkXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcmV0dXJuIHtzdHJpbmd9IFVuaXF1ZSBwYWlySWRcbiAgICAgKi9cbiAgICBQYWlyLmlkID0gZnVuY3Rpb24oYm9keUEsIGJvZHlCKSB7XG4gICAgICAgIHJldHVybiBib2R5QS5pZCA8IGJvZHlCLmlkID8gYm9keUEuaWQudG9TdHJpbmcoMzYpICsgJzonICsgYm9keUIuaWQudG9TdHJpbmcoMzYpIFxuICAgICAgICAgICAgOiBib2R5Qi5pZC50b1N0cmluZygzNikgKyAnOicgKyBib2R5QS5pZC50b1N0cmluZygzNik7XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDEwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Db25zdHJhaW50YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb25zdHJhaW50cy5cbiogQ29uc3RyYWludHMgYXJlIHVzZWQgZm9yIHNwZWNpZnlpbmcgdGhhdCBhIGZpeGVkIGRpc3RhbmNlIG11c3QgYmUgbWFpbnRhaW5lZCBiZXR3ZWVuIHR3byBib2RpZXMgKG9yIGEgYm9keSBhbmQgYSBmaXhlZCB3b3JsZC1zcGFjZSBwb3NpdGlvbikuXG4qIFRoZSBzdGlmZm5lc3Mgb2YgY29uc3RyYWludHMgY2FuIGJlIG1vZGlmaWVkIHRvIGNyZWF0ZSBzcHJpbmdzIG9yIGVsYXN0aWMuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBDb25zdHJhaW50XG4qL1xuXG52YXIgQ29uc3RyYWludCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnN0cmFpbnQ7XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcbnZhciBTbGVlcGluZyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBBeGVzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMSk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgQ29uc3RyYWludC5fd2FybWluZyA9IDAuNDtcbiAgICBDb25zdHJhaW50Ll90b3JxdWVEYW1wZW4gPSAxO1xuICAgIENvbnN0cmFpbnQuX21pbkxlbmd0aCA9IDAuMDAwMDAxO1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBjb25zdHJhaW50LlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogVG8gc2ltdWxhdGUgYSByZXZvbHV0ZSBjb25zdHJhaW50IChvciBwaW4gam9pbnQpIHNldCBgbGVuZ3RoOiAwYCBhbmQgYSBoaWdoIGBzdGlmZm5lc3NgIHZhbHVlIChlLmcuIGAwLjdgIG9yIGFib3ZlKS5cbiAgICAgKiBJZiB0aGUgY29uc3RyYWludCBpcyB1bnN0YWJsZSwgdHJ5IGxvd2VyaW5nIHRoZSBgc3RpZmZuZXNzYCB2YWx1ZSBhbmQgLyBvciBpbmNyZWFzaW5nIGBlbmdpbmUuY29uc3RyYWludEl0ZXJhdGlvbnNgLlxuICAgICAqIEZvciBjb21wb3VuZCBib2RpZXMsIGNvbnN0cmFpbnRzIG11c3QgYmUgYXBwbGllZCB0byB0aGUgcGFyZW50IGJvZHkgKG5vdCBvbmUgb2YgaXRzIHBhcnRzKS5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICovXG4gICAgQ29uc3RyYWludC5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBjb25zdHJhaW50ID0gb3B0aW9ucztcblxuICAgICAgICAvLyBpZiBib2RpZXMgZGVmaW5lZCBidXQgbm8gcG9pbnRzLCB1c2UgYm9keSBjZW50cmVcbiAgICAgICAgaWYgKGNvbnN0cmFpbnQuYm9keUEgJiYgIWNvbnN0cmFpbnQucG9pbnRBKVxuICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEEgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgaWYgKGNvbnN0cmFpbnQuYm9keUIgJiYgIWNvbnN0cmFpbnQucG9pbnRCKVxuICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEIgPSB7IHg6IDAsIHk6IDAgfTtcblxuICAgICAgICAvLyBjYWxjdWxhdGUgc3RhdGljIGxlbmd0aCB1c2luZyBpbml0aWFsIHdvcmxkIHNwYWNlIHBvaW50c1xuICAgICAgICB2YXIgaW5pdGlhbFBvaW50QSA9IGNvbnN0cmFpbnQuYm9keUEgPyBWZWN0b3IuYWRkKGNvbnN0cmFpbnQuYm9keUEucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRBKSA6IGNvbnN0cmFpbnQucG9pbnRBLFxuICAgICAgICAgICAgaW5pdGlhbFBvaW50QiA9IGNvbnN0cmFpbnQuYm9keUIgPyBWZWN0b3IuYWRkKGNvbnN0cmFpbnQuYm9keUIucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRCKSA6IGNvbnN0cmFpbnQucG9pbnRCLFxuICAgICAgICAgICAgbGVuZ3RoID0gVmVjdG9yLm1hZ25pdHVkZShWZWN0b3Iuc3ViKGluaXRpYWxQb2ludEEsIGluaXRpYWxQb2ludEIpKTtcbiAgICBcbiAgICAgICAgY29uc3RyYWludC5sZW5ndGggPSB0eXBlb2YgY29uc3RyYWludC5sZW5ndGggIT09ICd1bmRlZmluZWQnID8gY29uc3RyYWludC5sZW5ndGggOiBsZW5ndGg7XG5cbiAgICAgICAgLy8gb3B0aW9uIGRlZmF1bHRzXG4gICAgICAgIGNvbnN0cmFpbnQuaWQgPSBjb25zdHJhaW50LmlkIHx8IENvbW1vbi5uZXh0SWQoKTtcbiAgICAgICAgY29uc3RyYWludC5sYWJlbCA9IGNvbnN0cmFpbnQubGFiZWwgfHwgJ0NvbnN0cmFpbnQnO1xuICAgICAgICBjb25zdHJhaW50LnR5cGUgPSAnY29uc3RyYWludCc7XG4gICAgICAgIGNvbnN0cmFpbnQuc3RpZmZuZXNzID0gY29uc3RyYWludC5zdGlmZm5lc3MgfHwgKGNvbnN0cmFpbnQubGVuZ3RoID4gMCA/IDEgOiAwLjcpO1xuICAgICAgICBjb25zdHJhaW50LmRhbXBpbmcgPSBjb25zdHJhaW50LmRhbXBpbmcgfHwgMDtcbiAgICAgICAgY29uc3RyYWludC5hbmd1bGFyU3RpZmZuZXNzID0gY29uc3RyYWludC5hbmd1bGFyU3RpZmZuZXNzIHx8IDA7XG4gICAgICAgIGNvbnN0cmFpbnQuYW5nbGVBID0gY29uc3RyYWludC5ib2R5QSA/IGNvbnN0cmFpbnQuYm9keUEuYW5nbGUgOiBjb25zdHJhaW50LmFuZ2xlQTtcbiAgICAgICAgY29uc3RyYWludC5hbmdsZUIgPSBjb25zdHJhaW50LmJvZHlCID8gY29uc3RyYWludC5ib2R5Qi5hbmdsZSA6IGNvbnN0cmFpbnQuYW5nbGVCO1xuICAgICAgICBjb25zdHJhaW50LnBsdWdpbiA9IHt9O1xuXG4gICAgICAgIC8vIHJlbmRlclxuICAgICAgICB2YXIgcmVuZGVyID0ge1xuICAgICAgICAgICAgdmlzaWJsZTogdHJ1ZSxcbiAgICAgICAgICAgIGxpbmVXaWR0aDogMixcbiAgICAgICAgICAgIHN0cm9rZVN0eWxlOiAnI2ZmZmZmZicsXG4gICAgICAgICAgICB0eXBlOiAnbGluZScsXG4gICAgICAgICAgICBhbmNob3JzOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgaWYgKGNvbnN0cmFpbnQubGVuZ3RoID09PSAwICYmIGNvbnN0cmFpbnQuc3RpZmZuZXNzID4gMC4xKSB7XG4gICAgICAgICAgICByZW5kZXIudHlwZSA9ICdwaW4nO1xuICAgICAgICAgICAgcmVuZGVyLmFuY2hvcnMgPSBmYWxzZTtcbiAgICAgICAgfSBlbHNlIGlmIChjb25zdHJhaW50LnN0aWZmbmVzcyA8IDAuOSkge1xuICAgICAgICAgICAgcmVuZGVyLnR5cGUgPSAnc3ByaW5nJztcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbnN0cmFpbnQucmVuZGVyID0gQ29tbW9uLmV4dGVuZChyZW5kZXIsIGNvbnN0cmFpbnQucmVuZGVyKTtcblxuICAgICAgICByZXR1cm4gY29uc3RyYWludDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUHJlcGFyZXMgZm9yIHNvbHZpbmcgYnkgY29uc3RyYWludCB3YXJtaW5nLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBwcmVTb2x2ZUFsbFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBDb25zdHJhaW50LnByZVNvbHZlQWxsID0gZnVuY3Rpb24oYm9kaWVzKSB7XG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBpbXB1bHNlID0gYm9keS5jb25zdHJhaW50SW1wdWxzZTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaXNTdGF0aWMgfHwgKGltcHVsc2UueCA9PT0gMCAmJiBpbXB1bHNlLnkgPT09IDAgJiYgaW1wdWxzZS5hbmdsZSA9PT0gMCkpIHtcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgYm9keS5wb3NpdGlvbi54ICs9IGltcHVsc2UueDtcbiAgICAgICAgICAgIGJvZHkucG9zaXRpb24ueSArPSBpbXB1bHNlLnk7XG4gICAgICAgICAgICBib2R5LmFuZ2xlICs9IGltcHVsc2UuYW5nbGU7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU29sdmVzIGFsbCBjb25zdHJhaW50cyBpbiBhIGxpc3Qgb2YgY29sbGlzaW9ucy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc29sdmVBbGxcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnRbXX0gY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFcbiAgICAgKi9cbiAgICBDb25zdHJhaW50LnNvbHZlQWxsID0gZnVuY3Rpb24oY29uc3RyYWludHMsIGRlbHRhKSB7XG4gICAgICAgIHZhciB0aW1lU2NhbGUgPSBDb21tb24uY2xhbXAoZGVsdGEgLyBDb21tb24uX2Jhc2VEZWx0YSwgMCwgMSk7XG5cbiAgICAgICAgLy8gU29sdmUgZml4ZWQgY29uc3RyYWludHMgZmlyc3QuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgY29uc3RyYWludHMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gY29uc3RyYWludHNbaV0sXG4gICAgICAgICAgICAgICAgZml4ZWRBID0gIWNvbnN0cmFpbnQuYm9keUEgfHwgKGNvbnN0cmFpbnQuYm9keUEgJiYgY29uc3RyYWludC5ib2R5QS5pc1N0YXRpYyksXG4gICAgICAgICAgICAgICAgZml4ZWRCID0gIWNvbnN0cmFpbnQuYm9keUIgfHwgKGNvbnN0cmFpbnQuYm9keUIgJiYgY29uc3RyYWludC5ib2R5Qi5pc1N0YXRpYyk7XG5cbiAgICAgICAgICAgIGlmIChmaXhlZEEgfHwgZml4ZWRCKSB7XG4gICAgICAgICAgICAgICAgQ29uc3RyYWludC5zb2x2ZShjb25zdHJhaW50c1tpXSwgdGltZVNjYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIFNvbHZlIGZyZWUgY29uc3RyYWludHMgbGFzdC5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbnN0cmFpbnRzLmxlbmd0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb25zdHJhaW50ID0gY29uc3RyYWludHNbaV07XG4gICAgICAgICAgICBmaXhlZEEgPSAhY29uc3RyYWludC5ib2R5QSB8fCAoY29uc3RyYWludC5ib2R5QSAmJiBjb25zdHJhaW50LmJvZHlBLmlzU3RhdGljKTtcbiAgICAgICAgICAgIGZpeGVkQiA9ICFjb25zdHJhaW50LmJvZHlCIHx8IChjb25zdHJhaW50LmJvZHlCICYmIGNvbnN0cmFpbnQuYm9keUIuaXNTdGF0aWMpO1xuXG4gICAgICAgICAgICBpZiAoIWZpeGVkQSAmJiAhZml4ZWRCKSB7XG4gICAgICAgICAgICAgICAgQ29uc3RyYWludC5zb2x2ZShjb25zdHJhaW50c1tpXSwgdGltZVNjYWxlKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTb2x2ZXMgYSBkaXN0YW5jZSBjb25zdHJhaW50IHdpdGggR2F1c3MtU2llZGVsIG1ldGhvZC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2Qgc29sdmVcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnR9IGNvbnN0cmFpbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVNjYWxlXG4gICAgICovXG4gICAgQ29uc3RyYWludC5zb2x2ZSA9IGZ1bmN0aW9uKGNvbnN0cmFpbnQsIHRpbWVTY2FsZSkge1xuICAgICAgICB2YXIgYm9keUEgPSBjb25zdHJhaW50LmJvZHlBLFxuICAgICAgICAgICAgYm9keUIgPSBjb25zdHJhaW50LmJvZHlCLFxuICAgICAgICAgICAgcG9pbnRBID0gY29uc3RyYWludC5wb2ludEEsXG4gICAgICAgICAgICBwb2ludEIgPSBjb25zdHJhaW50LnBvaW50QjtcblxuICAgICAgICBpZiAoIWJvZHlBICYmICFib2R5QilcbiAgICAgICAgICAgIHJldHVybjtcblxuICAgICAgICAvLyB1cGRhdGUgcmVmZXJlbmNlIGFuZ2xlXG4gICAgICAgIGlmIChib2R5QSAmJiAhYm9keUEuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIFZlY3Rvci5yb3RhdGUocG9pbnRBLCBib2R5QS5hbmdsZSAtIGNvbnN0cmFpbnQuYW5nbGVBLCBwb2ludEEpO1xuICAgICAgICAgICAgY29uc3RyYWludC5hbmdsZUEgPSBib2R5QS5hbmdsZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLy8gdXBkYXRlIHJlZmVyZW5jZSBhbmdsZVxuICAgICAgICBpZiAoYm9keUIgJiYgIWJvZHlCLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBWZWN0b3Iucm90YXRlKHBvaW50QiwgYm9keUIuYW5nbGUgLSBjb25zdHJhaW50LmFuZ2xlQiwgcG9pbnRCKTtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYW5nbGVCID0gYm9keUIuYW5nbGU7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcG9pbnRBV29ybGQgPSBwb2ludEEsXG4gICAgICAgICAgICBwb2ludEJXb3JsZCA9IHBvaW50QjtcblxuICAgICAgICBpZiAoYm9keUEpIHBvaW50QVdvcmxkID0gVmVjdG9yLmFkZChib2R5QS5wb3NpdGlvbiwgcG9pbnRBKTtcbiAgICAgICAgaWYgKGJvZHlCKSBwb2ludEJXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUIucG9zaXRpb24sIHBvaW50Qik7XG5cbiAgICAgICAgaWYgKCFwb2ludEFXb3JsZCB8fCAhcG9pbnRCV29ybGQpXG4gICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgdmFyIGRlbHRhID0gVmVjdG9yLnN1Yihwb2ludEFXb3JsZCwgcG9pbnRCV29ybGQpLFxuICAgICAgICAgICAgY3VycmVudExlbmd0aCA9IFZlY3Rvci5tYWduaXR1ZGUoZGVsdGEpO1xuXG4gICAgICAgIC8vIHByZXZlbnQgc2luZ3VsYXJpdHlcbiAgICAgICAgaWYgKGN1cnJlbnRMZW5ndGggPCBDb25zdHJhaW50Ll9taW5MZW5ndGgpIHtcbiAgICAgICAgICAgIGN1cnJlbnRMZW5ndGggPSBDb25zdHJhaW50Ll9taW5MZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBzb2x2ZSBkaXN0YW5jZSBjb25zdHJhaW50IHdpdGggR2F1c3MtU2llZGVsIG1ldGhvZFxuICAgICAgICB2YXIgZGlmZmVyZW5jZSA9IChjdXJyZW50TGVuZ3RoIC0gY29uc3RyYWludC5sZW5ndGgpIC8gY3VycmVudExlbmd0aCxcbiAgICAgICAgICAgIGlzUmlnaWQgPSBjb25zdHJhaW50LnN0aWZmbmVzcyA+PSAxIHx8IGNvbnN0cmFpbnQubGVuZ3RoID09PSAwLFxuICAgICAgICAgICAgc3RpZmZuZXNzID0gaXNSaWdpZCA/IGNvbnN0cmFpbnQuc3RpZmZuZXNzICogdGltZVNjYWxlIFxuICAgICAgICAgICAgICAgIDogY29uc3RyYWludC5zdGlmZm5lc3MgKiB0aW1lU2NhbGUgKiB0aW1lU2NhbGUsXG4gICAgICAgICAgICBkYW1waW5nID0gY29uc3RyYWludC5kYW1waW5nICogdGltZVNjYWxlLFxuICAgICAgICAgICAgZm9yY2UgPSBWZWN0b3IubXVsdChkZWx0YSwgZGlmZmVyZW5jZSAqIHN0aWZmbmVzcyksXG4gICAgICAgICAgICBtYXNzVG90YWwgPSAoYm9keUEgPyBib2R5QS5pbnZlcnNlTWFzcyA6IDApICsgKGJvZHlCID8gYm9keUIuaW52ZXJzZU1hc3MgOiAwKSxcbiAgICAgICAgICAgIGluZXJ0aWFUb3RhbCA9IChib2R5QSA/IGJvZHlBLmludmVyc2VJbmVydGlhIDogMCkgKyAoYm9keUIgPyBib2R5Qi5pbnZlcnNlSW5lcnRpYSA6IDApLFxuICAgICAgICAgICAgcmVzaXN0YW5jZVRvdGFsID0gbWFzc1RvdGFsICsgaW5lcnRpYVRvdGFsLFxuICAgICAgICAgICAgdG9ycXVlLFxuICAgICAgICAgICAgc2hhcmUsXG4gICAgICAgICAgICBub3JtYWwsXG4gICAgICAgICAgICBub3JtYWxWZWxvY2l0eSxcbiAgICAgICAgICAgIHJlbGF0aXZlVmVsb2NpdHk7XG4gICAgXG4gICAgICAgIGlmIChkYW1waW5nID4gMCkge1xuICAgICAgICAgICAgdmFyIHplcm8gPSBWZWN0b3IuY3JlYXRlKCk7XG4gICAgICAgICAgICBub3JtYWwgPSBWZWN0b3IuZGl2KGRlbHRhLCBjdXJyZW50TGVuZ3RoKTtcblxuICAgICAgICAgICAgcmVsYXRpdmVWZWxvY2l0eSA9IFZlY3Rvci5zdWIoXG4gICAgICAgICAgICAgICAgYm9keUIgJiYgVmVjdG9yLnN1Yihib2R5Qi5wb3NpdGlvbiwgYm9keUIucG9zaXRpb25QcmV2KSB8fCB6ZXJvLFxuICAgICAgICAgICAgICAgIGJvZHlBICYmIFZlY3Rvci5zdWIoYm9keUEucG9zaXRpb24sIGJvZHlBLnBvc2l0aW9uUHJldikgfHwgemVyb1xuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgbm9ybWFsVmVsb2NpdHkgPSBWZWN0b3IuZG90KG5vcm1hbCwgcmVsYXRpdmVWZWxvY2l0eSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoYm9keUEgJiYgIWJvZHlBLmlzU3RhdGljKSB7XG4gICAgICAgICAgICBzaGFyZSA9IGJvZHlBLmludmVyc2VNYXNzIC8gbWFzc1RvdGFsO1xuXG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIGFwcGxpZWQgaW1wdWxzZXMgZm9yIHBvc3Qgc29sdmluZ1xuICAgICAgICAgICAgYm9keUEuY29uc3RyYWludEltcHVsc2UueCAtPSBmb3JjZS54ICogc2hhcmU7XG4gICAgICAgICAgICBib2R5QS5jb25zdHJhaW50SW1wdWxzZS55IC09IGZvcmNlLnkgKiBzaGFyZTtcblxuICAgICAgICAgICAgLy8gYXBwbHkgZm9yY2VzXG4gICAgICAgICAgICBib2R5QS5wb3NpdGlvbi54IC09IGZvcmNlLnggKiBzaGFyZTtcbiAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uLnkgLT0gZm9yY2UueSAqIHNoYXJlO1xuXG4gICAgICAgICAgICAvLyBhcHBseSBkYW1waW5nXG4gICAgICAgICAgICBpZiAoZGFtcGluZyA+IDApIHtcbiAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueCAtPSBkYW1waW5nICogbm9ybWFsLnggKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi55IC09IGRhbXBpbmcgKiBub3JtYWwueSAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IHRvcnF1ZVxuICAgICAgICAgICAgdG9ycXVlID0gKFZlY3Rvci5jcm9zcyhwb2ludEEsIGZvcmNlKSAvIHJlc2lzdGFuY2VUb3RhbCkgKiBDb25zdHJhaW50Ll90b3JxdWVEYW1wZW4gKiBib2R5QS5pbnZlcnNlSW5lcnRpYSAqICgxIC0gY29uc3RyYWludC5hbmd1bGFyU3RpZmZuZXNzKTtcbiAgICAgICAgICAgIGJvZHlBLmNvbnN0cmFpbnRJbXB1bHNlLmFuZ2xlIC09IHRvcnF1ZTtcbiAgICAgICAgICAgIGJvZHlBLmFuZ2xlIC09IHRvcnF1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChib2R5QiAmJiAhYm9keUIuaXNTdGF0aWMpIHtcbiAgICAgICAgICAgIHNoYXJlID0gYm9keUIuaW52ZXJzZU1hc3MgLyBtYXNzVG90YWw7XG5cbiAgICAgICAgICAgIC8vIGtlZXAgdHJhY2sgb2YgYXBwbGllZCBpbXB1bHNlcyBmb3IgcG9zdCBzb2x2aW5nXG4gICAgICAgICAgICBib2R5Qi5jb25zdHJhaW50SW1wdWxzZS54ICs9IGZvcmNlLnggKiBzaGFyZTtcbiAgICAgICAgICAgIGJvZHlCLmNvbnN0cmFpbnRJbXB1bHNlLnkgKz0gZm9yY2UueSAqIHNoYXJlO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyBhcHBseSBmb3JjZXNcbiAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uLnggKz0gZm9yY2UueCAqIHNoYXJlO1xuICAgICAgICAgICAgYm9keUIucG9zaXRpb24ueSArPSBmb3JjZS55ICogc2hhcmU7XG5cbiAgICAgICAgICAgIC8vIGFwcGx5IGRhbXBpbmdcbiAgICAgICAgICAgIGlmIChkYW1waW5nID4gMCkge1xuICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi54ICs9IGRhbXBpbmcgKiBub3JtYWwueCAqIG5vcm1hbFZlbG9jaXR5ICogc2hhcmU7XG4gICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnkgKz0gZGFtcGluZyAqIG5vcm1hbC55ICogbm9ybWFsVmVsb2NpdHkgKiBzaGFyZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYXBwbHkgdG9ycXVlXG4gICAgICAgICAgICB0b3JxdWUgPSAoVmVjdG9yLmNyb3NzKHBvaW50QiwgZm9yY2UpIC8gcmVzaXN0YW5jZVRvdGFsKSAqIENvbnN0cmFpbnQuX3RvcnF1ZURhbXBlbiAqIGJvZHlCLmludmVyc2VJbmVydGlhICogKDEgLSBjb25zdHJhaW50LmFuZ3VsYXJTdGlmZm5lc3MpO1xuICAgICAgICAgICAgYm9keUIuY29uc3RyYWludEltcHVsc2UuYW5nbGUgKz0gdG9ycXVlO1xuICAgICAgICAgICAgYm9keUIuYW5nbGUgKz0gdG9ycXVlO1xuICAgICAgICB9XG5cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGVyZm9ybXMgYm9keSB1cGRhdGVzIHJlcXVpcmVkIGFmdGVyIHNvbHZpbmcgY29uc3RyYWludHMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHBvc3RTb2x2ZUFsbFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBDb25zdHJhaW50LnBvc3RTb2x2ZUFsbCA9IGZ1bmN0aW9uKGJvZGllcykge1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgaW1wdWxzZSA9IGJvZHkuY29uc3RyYWludEltcHVsc2U7XG5cbiAgICAgICAgICAgIGlmIChib2R5LmlzU3RhdGljIHx8IChpbXB1bHNlLnggPT09IDAgJiYgaW1wdWxzZS55ID09PSAwICYmIGltcHVsc2UuYW5nbGUgPT09IDApKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCBmYWxzZSk7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBnZW9tZXRyeSBhbmQgcmVzZXRcbiAgICAgICAgICAgIGZvciAodmFyIGogPSAwOyBqIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBWZXJ0aWNlcy50cmFuc2xhdGUocGFydC52ZXJ0aWNlcywgaW1wdWxzZSk7XG5cbiAgICAgICAgICAgICAgICBpZiAoaiA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi54ICs9IGltcHVsc2UueDtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi55ICs9IGltcHVsc2UueTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoaW1wdWxzZS5hbmdsZSAhPT0gMCkge1xuICAgICAgICAgICAgICAgICAgICBWZXJ0aWNlcy5yb3RhdGUocGFydC52ZXJ0aWNlcywgaW1wdWxzZS5hbmdsZSwgYm9keS5wb3NpdGlvbik7XG4gICAgICAgICAgICAgICAgICAgIEF4ZXMucm90YXRlKHBhcnQuYXhlcywgaW1wdWxzZS5hbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChqID4gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgVmVjdG9yLnJvdGF0ZUFib3V0KHBhcnQucG9zaXRpb24sIGltcHVsc2UuYW5nbGUsIGJvZHkucG9zaXRpb24sIHBhcnQucG9zaXRpb24pO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgQm91bmRzLnVwZGF0ZShwYXJ0LmJvdW5kcywgcGFydC52ZXJ0aWNlcywgYm9keS52ZWxvY2l0eSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGRhbXBlbiB0aGUgY2FjaGVkIGltcHVsc2UgZm9yIHdhcm1pbmcgbmV4dCBzdGVwXG4gICAgICAgICAgICBpbXB1bHNlLmFuZ2xlICo9IENvbnN0cmFpbnQuX3dhcm1pbmc7XG4gICAgICAgICAgICBpbXB1bHNlLnggKj0gQ29uc3RyYWludC5fd2FybWluZztcbiAgICAgICAgICAgIGltcHVsc2UueSAqPSBDb25zdHJhaW50Ll93YXJtaW5nO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdvcmxkLXNwYWNlIHBvc2l0aW9uIG9mIGBjb25zdHJhaW50LnBvaW50QWAsIGFjY291bnRpbmcgZm9yIGBjb25zdHJhaW50LmJvZHlBYC5cbiAgICAgKiBAbWV0aG9kIHBvaW50QVdvcmxkXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQHJldHVybnMge3ZlY3Rvcn0gdGhlIHdvcmxkLXNwYWNlIHBvc2l0aW9uXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wb2ludEFXb3JsZCA9IGZ1bmN0aW9uKGNvbnN0cmFpbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IChjb25zdHJhaW50LmJvZHlBID8gY29uc3RyYWludC5ib2R5QS5wb3NpdGlvbi54IDogMCkgXG4gICAgICAgICAgICAgICAgKyAoY29uc3RyYWludC5wb2ludEEgPyBjb25zdHJhaW50LnBvaW50QS54IDogMCksXG4gICAgICAgICAgICB5OiAoY29uc3RyYWludC5ib2R5QSA/IGNvbnN0cmFpbnQuYm9keUEucG9zaXRpb24ueSA6IDApIFxuICAgICAgICAgICAgICAgICsgKGNvbnN0cmFpbnQucG9pbnRBID8gY29uc3RyYWludC5wb2ludEEueSA6IDApXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIHdvcmxkLXNwYWNlIHBvc2l0aW9uIG9mIGBjb25zdHJhaW50LnBvaW50QmAsIGFjY291bnRpbmcgZm9yIGBjb25zdHJhaW50LmJvZHlCYC5cbiAgICAgKiBAbWV0aG9kIHBvaW50QldvcmxkXG4gICAgICogQHBhcmFtIHtjb25zdHJhaW50fSBjb25zdHJhaW50XG4gICAgICogQHJldHVybnMge3ZlY3Rvcn0gdGhlIHdvcmxkLXNwYWNlIHBvc2l0aW9uXG4gICAgICovXG4gICAgQ29uc3RyYWludC5wb2ludEJXb3JsZCA9IGZ1bmN0aW9uKGNvbnN0cmFpbnQpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHg6IChjb25zdHJhaW50LmJvZHlCID8gY29uc3RyYWludC5ib2R5Qi5wb3NpdGlvbi54IDogMCkgXG4gICAgICAgICAgICAgICAgKyAoY29uc3RyYWludC5wb2ludEIgPyBjb25zdHJhaW50LnBvaW50Qi54IDogMCksXG4gICAgICAgICAgICB5OiAoY29uc3RyYWludC5ib2R5QiA/IGNvbnN0cmFpbnQuYm9keUIucG9zaXRpb24ueSA6IDApIFxuICAgICAgICAgICAgICAgICsgKGNvbnN0cmFpbnQucG9pbnRCID8gY29uc3RyYWludC5wb2ludEIueSA6IDApXG4gICAgICAgIH07XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgdGhlIGN1cnJlbnQgbGVuZ3RoIG9mIHRoZSBjb25zdHJhaW50LiBcbiAgICAgKiBUaGlzIGlzIHRoZSBkaXN0YW5jZSBiZXR3ZWVuIGJvdGggb2YgdGhlIGNvbnN0cmFpbnQncyBlbmQgcG9pbnRzLlxuICAgICAqIFNlZSBgY29uc3RyYWludC5sZW5ndGhgIGZvciB0aGUgdGFyZ2V0IHJlc3QgbGVuZ3RoLlxuICAgICAqIEBtZXRob2QgY3VycmVudExlbmd0aFxuICAgICAqIEBwYXJhbSB7Y29uc3RyYWludH0gY29uc3RyYWludFxuICAgICAqIEByZXR1cm5zIHtudW1iZXJ9IHRoZSBjdXJyZW50IGxlbmd0aFxuICAgICAqL1xuICAgIENvbnN0cmFpbnQuY3VycmVudExlbmd0aCA9IGZ1bmN0aW9uKGNvbnN0cmFpbnQpIHtcbiAgICAgICAgdmFyIHBvaW50QVggPSAoY29uc3RyYWludC5ib2R5QSA/IGNvbnN0cmFpbnQuYm9keUEucG9zaXRpb24ueCA6IDApIFxuICAgICAgICAgICAgKyAoY29uc3RyYWludC5wb2ludEEgPyBjb25zdHJhaW50LnBvaW50QS54IDogMCk7XG5cbiAgICAgICAgdmFyIHBvaW50QVkgPSAoY29uc3RyYWludC5ib2R5QSA/IGNvbnN0cmFpbnQuYm9keUEucG9zaXRpb24ueSA6IDApIFxuICAgICAgICAgICAgKyAoY29uc3RyYWludC5wb2ludEEgPyBjb25zdHJhaW50LnBvaW50QS55IDogMCk7XG5cbiAgICAgICAgdmFyIHBvaW50QlggPSAoY29uc3RyYWludC5ib2R5QiA/IGNvbnN0cmFpbnQuYm9keUIucG9zaXRpb24ueCA6IDApIFxuICAgICAgICAgICAgKyAoY29uc3RyYWludC5wb2ludEIgPyBjb25zdHJhaW50LnBvaW50Qi54IDogMCk7XG4gICAgICAgICAgICBcbiAgICAgICAgdmFyIHBvaW50QlkgPSAoY29uc3RyYWludC5ib2R5QiA/IGNvbnN0cmFpbnQuYm9keUIucG9zaXRpb24ueSA6IDApIFxuICAgICAgICAgICAgKyAoY29uc3RyYWludC5wb2ludEIgPyBjb25zdHJhaW50LnBvaW50Qi55IDogMCk7XG5cbiAgICAgICAgdmFyIGRlbHRhWCA9IHBvaW50QVggLSBwb2ludEJYO1xuICAgICAgICB2YXIgZGVsdGFZID0gcG9pbnRBWSAtIHBvaW50Qlk7XG5cbiAgICAgICAgcmV0dXJuIE1hdGguc3FydChkZWx0YVggKiBkZWx0YVggKyBkZWx0YVkgKiBkZWx0YVkpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdW5pcXVlbHkgaWRlbnRpZnlpbmcgbnVtYmVyIGdlbmVyYXRlZCBpbiBgQ29tcG9zaXRlLmNyZWF0ZWAgYnkgYENvbW1vbi5uZXh0SWRgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGlkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIGRlbm90aW5nIHRoZSB0eXBlIG9mIG9iamVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0eXBlXG4gICAgICogQHR5cGUgc3RyaW5nXG4gICAgICogQGRlZmF1bHQgXCJjb25zdHJhaW50XCJcbiAgICAgKiBAcmVhZE9ubHlcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGFyYml0cmFyeSBgU3RyaW5nYCBuYW1lIHRvIGhlbHAgdGhlIHVzZXIgaWRlbnRpZnkgYW5kIG1hbmFnZSBib2RpZXMuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbGFiZWxcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcIkNvbnN0cmFpbnRcIlxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgdGhhdCBkZWZpbmVzIHRoZSByZW5kZXJpbmcgcHJvcGVydGllcyB0byBiZSBjb25zdW1lZCBieSB0aGUgbW9kdWxlIGBNYXR0ZXIuUmVuZGVyYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGluZGljYXRlcyBpZiB0aGUgY29uc3RyYWludCBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLnZpc2libGVcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IGRlZmluZXMgdGhlIGxpbmUgd2lkdGggdG8gdXNlIHdoZW4gcmVuZGVyaW5nIHRoZSBjb25zdHJhaW50IG91dGxpbmUuXG4gICAgICogQSB2YWx1ZSBvZiBgMGAgbWVhbnMgbm8gb3V0bGluZSB3aWxsIGJlIHJlbmRlcmVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHJlbmRlci5saW5lV2lkdGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBTdHJpbmdgIHRoYXQgZGVmaW5lcyB0aGUgc3Ryb2tlIHN0eWxlIHRvIHVzZSB3aGVuIHJlbmRlcmluZyB0aGUgY29uc3RyYWludCBvdXRsaW5lLlxuICAgICAqIEl0IGlzIHRoZSBzYW1lIGFzIHdoZW4gdXNpbmcgYSBjYW52YXMsIHNvIGl0IGFjY2VwdHMgQ1NTIHN0eWxlIHByb3BlcnR5IHZhbHVlcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIuc3Ryb2tlU3R5bGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBhIHJhbmRvbSBjb2xvdXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgdGhhdCBkZWZpbmVzIHRoZSBjb25zdHJhaW50IHJlbmRlcmluZyB0eXBlLiBcbiAgICAgKiBUaGUgcG9zc2libGUgdmFsdWVzIGFyZSAnbGluZScsICdwaW4nLCAnc3ByaW5nJy5cbiAgICAgKiBBbiBhcHByb3ByaWF0ZSByZW5kZXIgdHlwZSB3aWxsIGJlIGF1dG9tYXRpY2FsbHkgY2hvc2VuIHVubGVzcyBvbmUgaXMgZ2l2ZW4gaW4gb3B0aW9ucy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSByZW5kZXIudHlwZVxuICAgICAqIEB0eXBlIHN0cmluZ1xuICAgICAqIEBkZWZhdWx0ICdsaW5lJ1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgQm9vbGVhbmAgdGhhdCBkZWZpbmVzIGlmIHRoZSBjb25zdHJhaW50J3MgYW5jaG9yIHBvaW50cyBzaG91bGQgYmUgcmVuZGVyZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcmVuZGVyLmFuY2hvcnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpcnN0IHBvc3NpYmxlIGBCb2R5YCB0aGF0IHRoaXMgY29uc3RyYWludCBpcyBhdHRhY2hlZCB0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2R5QVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgc2Vjb25kIHBvc3NpYmxlIGBCb2R5YCB0aGF0IHRoaXMgY29uc3RyYWludCBpcyBhdHRhY2hlZCB0by5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBib2R5QlxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBWZWN0b3JgIHRoYXQgc3BlY2lmaWVzIHRoZSBvZmZzZXQgb2YgdGhlIGNvbnN0cmFpbnQgZnJvbSBjZW50ZXIgb2YgdGhlIGBjb25zdHJhaW50LmJvZHlBYCBpZiBkZWZpbmVkLCBvdGhlcndpc2UgYSB3b3JsZC1zcGFjZSBwb3NpdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwb2ludEFcbiAgICAgKiBAdHlwZSB2ZWN0b3JcbiAgICAgKiBAZGVmYXVsdCB7IHg6IDAsIHk6IDAgfVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgVmVjdG9yYCB0aGF0IHNwZWNpZmllcyB0aGUgb2Zmc2V0IG9mIHRoZSBjb25zdHJhaW50IGZyb20gY2VudGVyIG9mIHRoZSBgY29uc3RyYWludC5ib2R5QmAgaWYgZGVmaW5lZCwgb3RoZXJ3aXNlIGEgd29ybGQtc3BhY2UgcG9zaXRpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgcG9pbnRCXG4gICAgICogQHR5cGUgdmVjdG9yXG4gICAgICogQGRlZmF1bHQgeyB4OiAwLCB5OiAwIH1cbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIHN0aWZmbmVzcyBvZiB0aGUgY29uc3RyYWludCwgaS5lLiB0aGUgcmF0ZSBhdCB3aGljaCBpdCByZXR1cm5zIHRvIGl0cyByZXN0aW5nIGBjb25zdHJhaW50Lmxlbmd0aGAuXG4gICAgICogQSB2YWx1ZSBvZiBgMWAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgc2hvdWxkIGJlIHZlcnkgc3RpZmYuXG4gICAgICogQSB2YWx1ZSBvZiBgMC4yYCBtZWFucyB0aGUgY29uc3RyYWludCBhY3RzIGxpa2UgYSBzb2Z0IHNwcmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBzdGlmZm5lc3NcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBkYW1waW5nIG9mIHRoZSBjb25zdHJhaW50LCBcbiAgICAgKiBpLmUuIHRoZSBhbW91bnQgb2YgcmVzaXN0YW5jZSBhcHBsaWVkIHRvIGVhY2ggYm9keSBiYXNlZCBvbiB0aGVpciB2ZWxvY2l0aWVzIHRvIGxpbWl0IHRoZSBhbW91bnQgb2Ygb3NjaWxsYXRpb24uXG4gICAgICogRGFtcGluZyB3aWxsIG9ubHkgYmUgYXBwYXJlbnQgd2hlbiB0aGUgY29uc3RyYWludCBhbHNvIGhhcyBhIHZlcnkgbG93IGBzdGlmZm5lc3NgLlxuICAgICAqIEEgdmFsdWUgb2YgYDAuMWAgbWVhbnMgdGhlIGNvbnN0cmFpbnQgd2lsbCBhcHBseSBoZWF2eSBkYW1waW5nLCByZXN1bHRpbmcgaW4gbGl0dGxlIHRvIG5vIG9zY2lsbGF0aW9uLlxuICAgICAqIEEgdmFsdWUgb2YgYDBgIG1lYW5zIHRoZSBjb25zdHJhaW50IHdpbGwgYXBwbHkgbm8gZGFtcGluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkYW1waW5nXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgdGFyZ2V0IHJlc3RpbmcgbGVuZ3RoIG9mIHRoZSBjb25zdHJhaW50LiBcbiAgICAgKiBJdCBpcyBjYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgaW4gYENvbnN0cmFpbnQuY3JlYXRlYCBmcm9tIGluaXRpYWwgcG9zaXRpb25zIG9mIHRoZSBgY29uc3RyYWludC5ib2R5QWAgYW5kIGBjb25zdHJhaW50LmJvZHlCYC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBsZW5ndGhcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIG9iamVjdCByZXNlcnZlZCBmb3Igc3RvcmluZyBwbHVnaW4tc3BlY2lmaWMgcHJvcGVydGllcy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBwbHVnaW5cbiAgICAgKiBAdHlwZSB7fVxuICAgICAqL1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTEgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkF4ZXNgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjcmVhdGluZyBhbmQgbWFuaXB1bGF0aW5nIHNldHMgb2YgYXhlcy5cbipcbiogQGNsYXNzIEF4ZXNcbiovXG5cbnZhciBBeGVzID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gQXhlcztcblxudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBzZXQgb2YgYXhlcyBmcm9tIHRoZSBnaXZlbiB2ZXJ0aWNlcy5cbiAgICAgKiBAbWV0aG9kIGZyb21WZXJ0aWNlc1xuICAgICAqIEBwYXJhbSB7dmVydGljZXN9IHZlcnRpY2VzXG4gICAgICogQHJldHVybiB7YXhlc30gQSBuZXcgYXhlcyBmcm9tIHRoZSBnaXZlbiB2ZXJ0aWNlc1xuICAgICAqL1xuICAgIEF4ZXMuZnJvbVZlcnRpY2VzID0gZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgdmFyIGF4ZXMgPSB7fTtcblxuICAgICAgICAvLyBmaW5kIHRoZSB1bmlxdWUgYXhlcywgdXNpbmcgZWRnZSBub3JtYWwgZ3JhZGllbnRzXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgdmVydGljZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBqID0gKGkgKyAxKSAlIHZlcnRpY2VzLmxlbmd0aCwgXG4gICAgICAgICAgICAgICAgbm9ybWFsID0gVmVjdG9yLm5vcm1hbGlzZSh7IFxuICAgICAgICAgICAgICAgICAgICB4OiB2ZXJ0aWNlc1tqXS55IC0gdmVydGljZXNbaV0ueSwgXG4gICAgICAgICAgICAgICAgICAgIHk6IHZlcnRpY2VzW2ldLnggLSB2ZXJ0aWNlc1tqXS54XG4gICAgICAgICAgICAgICAgfSksXG4gICAgICAgICAgICAgICAgZ3JhZGllbnQgPSAobm9ybWFsLnkgPT09IDApID8gSW5maW5pdHkgOiAobm9ybWFsLnggLyBub3JtYWwueSk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIGxpbWl0IHByZWNpc2lvblxuICAgICAgICAgICAgZ3JhZGllbnQgPSBncmFkaWVudC50b0ZpeGVkKDMpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICBheGVzW2dyYWRpZW50XSA9IG5vcm1hbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBDb21tb24udmFsdWVzKGF4ZXMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSb3RhdGVzIGEgc2V0IG9mIGF4ZXMgYnkgdGhlIGdpdmVuIGFuZ2xlLlxuICAgICAqIEBtZXRob2Qgcm90YXRlXG4gICAgICogQHBhcmFtIHtheGVzfSBheGVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGFuZ2xlXG4gICAgICovXG4gICAgQXhlcy5yb3RhdGUgPSBmdW5jdGlvbihheGVzLCBhbmdsZSkge1xuICAgICAgICBpZiAoYW5nbGUgPT09IDApXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIFxuICAgICAgICB2YXIgY29zID0gTWF0aC5jb3MoYW5nbGUpLFxuICAgICAgICAgICAgc2luID0gTWF0aC5zaW4oYW5nbGUpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYXhlcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGF4aXMgPSBheGVzW2ldLFxuICAgICAgICAgICAgICAgIHh4O1xuICAgICAgICAgICAgeHggPSBheGlzLnggKiBjb3MgLSBheGlzLnkgKiBzaW47XG4gICAgICAgICAgICBheGlzLnkgPSBheGlzLnggKiBzaW4gKyBheGlzLnkgKiBjb3M7XG4gICAgICAgICAgICBheGlzLnggPSB4eDtcbiAgICAgICAgfVxuICAgIH07XG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAxMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQm9kaWVzYCBtb2R1bGUgY29udGFpbnMgZmFjdG9yeSBtZXRob2RzIGZvciBjcmVhdGluZyByaWdpZCBib2R5IG1vZGVscyBcbiogd2l0aCBjb21tb25seSB1c2VkIGJvZHkgY29uZmlndXJhdGlvbnMgKHN1Y2ggYXMgcmVjdGFuZ2xlcywgY2lyY2xlcyBhbmQgb3RoZXIgcG9seWdvbnMpLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgQm9kaWVzXG4qL1xuXG4vLyBUT0RPOiB0cnVlIGNpcmNsZSBib2RpZXNcblxudmFyIEJvZGllcyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEJvZGllcztcblxudmFyIFZlcnRpY2VzID0gX193ZWJwYWNrX3JlcXVpcmVfXygzKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIEJvZHkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDQpO1xudmFyIEJvdW5kcyA9IF9fd2VicGFja19yZXF1aXJlX18oMSk7XG52YXIgVmVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygyKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSByZWN0YW5nbGUgaHVsbC4gXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCByZWN0YW5nbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHdpZHRoXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodFxuICAgICAqIEBwYXJhbSB7b2JqZWN0fSBbb3B0aW9uc11cbiAgICAgKiBAcmV0dXJuIHtib2R5fSBBIG5ldyByZWN0YW5nbGUgYm9keVxuICAgICAqL1xuICAgIEJvZGllcy5yZWN0YW5nbGUgPSBmdW5jdGlvbih4LCB5LCB3aWR0aCwgaGVpZ2h0LCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciByZWN0YW5nbGUgPSB7IFxuICAgICAgICAgICAgbGFiZWw6ICdSZWN0YW5nbGUgQm9keScsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiB4LCB5OiB5IH0sXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgoJ0wgMCAwIEwgJyArIHdpZHRoICsgJyAwIEwgJyArIHdpZHRoICsgJyAnICsgaGVpZ2h0ICsgJyBMIDAgJyArIGhlaWdodClcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAob3B0aW9ucy5jaGFtZmVyKSB7XG4gICAgICAgICAgICB2YXIgY2hhbWZlciA9IG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgICAgIHJlY3RhbmdsZS52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNoYW1mZXIocmVjdGFuZ2xlLnZlcnRpY2VzLCBjaGFtZmVyLnJhZGl1cywgXG4gICAgICAgICAgICAgICAgY2hhbWZlci5xdWFsaXR5LCBjaGFtZmVyLnF1YWxpdHlNaW4sIGNoYW1mZXIucXVhbGl0eU1heCk7XG4gICAgICAgICAgICBkZWxldGUgb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQoe30sIHJlY3RhbmdsZSwgb3B0aW9ucykpO1xuICAgIH07XG4gICAgXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSB0cmFwZXpvaWQgaHVsbC4gXG4gICAgICogVGhlIGBzbG9wZWAgaXMgcGFyYW1ldGVyaXNlZCBhcyBhIGZyYWN0aW9uIG9mIGB3aWR0aGAgYW5kIG11c3QgYmUgPCAxIHRvIGZvcm0gYSB2YWxpZCB0cmFwZXpvaWQuIFxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgdHJhcGV6b2lkXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2xvcGUgTXVzdCBiZSBhIG51bWJlciA8IDEuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IHRyYXBlem9pZCBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLnRyYXBlem9pZCA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIHNsb3BlLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGlmIChzbG9wZSA+PSAxKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignQm9kaWVzLnRyYXBlem9pZDogc2xvcGUgcGFyYW1ldGVyIG11c3QgYmUgPCAxLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgc2xvcGUgKj0gMC41O1xuICAgICAgICB2YXIgcm9vZiA9ICgxIC0gKHNsb3BlICogMikpICogd2lkdGg7XG4gICAgICAgIFxuICAgICAgICB2YXIgeDEgPSB3aWR0aCAqIHNsb3BlLFxuICAgICAgICAgICAgeDIgPSB4MSArIHJvb2YsXG4gICAgICAgICAgICB4MyA9IHgyICsgeDEsXG4gICAgICAgICAgICB2ZXJ0aWNlc1BhdGg7XG5cbiAgICAgICAgaWYgKHNsb3BlIDwgMC41KSB7XG4gICAgICAgICAgICB2ZXJ0aWNlc1BhdGggPSAnTCAwIDAgTCAnICsgeDEgKyAnICcgKyAoLWhlaWdodCkgKyAnIEwgJyArIHgyICsgJyAnICsgKC1oZWlnaHQpICsgJyBMICcgKyB4MyArICcgMCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB2ZXJ0aWNlc1BhdGggPSAnTCAwIDAgTCAnICsgeDIgKyAnICcgKyAoLWhlaWdodCkgKyAnIEwgJyArIHgzICsgJyAwJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciB0cmFwZXpvaWQgPSB7IFxuICAgICAgICAgICAgbGFiZWw6ICdUcmFwZXpvaWQgQm9keScsXG4gICAgICAgICAgICBwb3NpdGlvbjogeyB4OiB4LCB5OiB5IH0sXG4gICAgICAgICAgICB2ZXJ0aWNlczogVmVydGljZXMuZnJvbVBhdGgodmVydGljZXNQYXRoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNoYW1mZXIpIHtcbiAgICAgICAgICAgIHZhciBjaGFtZmVyID0gb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICAgICAgdHJhcGV6b2lkLnZlcnRpY2VzID0gVmVydGljZXMuY2hhbWZlcih0cmFwZXpvaWQudmVydGljZXMsIGNoYW1mZXIucmFkaXVzLCBcbiAgICAgICAgICAgICAgICBjaGFtZmVyLnF1YWxpdHksIGNoYW1mZXIucXVhbGl0eU1pbiwgY2hhbWZlci5xdWFsaXR5TWF4KTtcbiAgICAgICAgICAgIGRlbGV0ZSBvcHRpb25zLmNoYW1mZXI7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZCh7fSwgdHJhcGV6b2lkLCBvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgcmlnaWQgYm9keSBtb2RlbCB3aXRoIGEgY2lyY2xlIGh1bGwuIFxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY2lyY2xlXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByYWRpdXNcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFttYXhTaWRlc11cbiAgICAgKiBAcmV0dXJuIHtib2R5fSBBIG5ldyBjaXJjbGUgYm9keVxuICAgICAqL1xuICAgIEJvZGllcy5jaXJjbGUgPSBmdW5jdGlvbih4LCB5LCByYWRpdXMsIG9wdGlvbnMsIG1heFNpZGVzKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIHZhciBjaXJjbGUgPSB7XG4gICAgICAgICAgICBsYWJlbDogJ0NpcmNsZSBCb2R5JyxcbiAgICAgICAgICAgIGNpcmNsZVJhZGl1czogcmFkaXVzXG4gICAgICAgIH07XG4gICAgICAgIFxuICAgICAgICAvLyBhcHByb3hpbWF0ZSBjaXJjbGVzIHdpdGggcG9seWdvbnMgdW50aWwgdHJ1ZSBjaXJjbGVzIGltcGxlbWVudGVkIGluIFNBVFxuICAgICAgICBtYXhTaWRlcyA9IG1heFNpZGVzIHx8IDI1O1xuICAgICAgICB2YXIgc2lkZXMgPSBNYXRoLmNlaWwoTWF0aC5tYXgoMTAsIE1hdGgubWluKG1heFNpZGVzLCByYWRpdXMpKSk7XG5cbiAgICAgICAgLy8gb3B0aW1pc2F0aW9uOiBhbHdheXMgdXNlIGV2ZW4gbnVtYmVyIG9mIHNpZGVzIChoYWxmIHRoZSBudW1iZXIgb2YgdW5pcXVlIGF4ZXMpXG4gICAgICAgIGlmIChzaWRlcyAlIDIgPT09IDEpXG4gICAgICAgICAgICBzaWRlcyArPSAxO1xuXG4gICAgICAgIHJldHVybiBCb2RpZXMucG9seWdvbih4LCB5LCBzaWRlcywgcmFkaXVzLCBDb21tb24uZXh0ZW5kKHt9LCBjaXJjbGUsIG9wdGlvbnMpKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyByaWdpZCBib2R5IG1vZGVsIHdpdGggYSByZWd1bGFyIHBvbHlnb24gaHVsbCB3aXRoIHRoZSBnaXZlbiBudW1iZXIgb2Ygc2lkZXMuIFxuICAgICAqIFRoZSBvcHRpb25zIHBhcmFtZXRlciBpcyBhbiBvYmplY3QgdGhhdCBzcGVjaWZpZXMgYW55IHByb3BlcnRpZXMgeW91IHdpc2ggdG8gb3ZlcnJpZGUgdGhlIGRlZmF1bHRzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIG9mIHRoZSBgTWF0dGVyLkJvZHlgIG1vZHVsZSBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgcG9seWdvblxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gc2lkZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcmFkaXVzXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2JvZHl9IEEgbmV3IHJlZ3VsYXIgcG9seWdvbiBib2R5XG4gICAgICovXG4gICAgQm9kaWVzLnBvbHlnb24gPSBmdW5jdGlvbih4LCB5LCBzaWRlcywgcmFkaXVzLCBvcHRpb25zKSB7XG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuXG4gICAgICAgIGlmIChzaWRlcyA8IDMpXG4gICAgICAgICAgICByZXR1cm4gQm9kaWVzLmNpcmNsZSh4LCB5LCByYWRpdXMsIG9wdGlvbnMpO1xuXG4gICAgICAgIHZhciB0aGV0YSA9IDIgKiBNYXRoLlBJIC8gc2lkZXMsXG4gICAgICAgICAgICBwYXRoID0gJycsXG4gICAgICAgICAgICBvZmZzZXQgPSB0aGV0YSAqIDAuNTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHNpZGVzOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBhbmdsZSA9IG9mZnNldCArIChpICogdGhldGEpLFxuICAgICAgICAgICAgICAgIHh4ID0gTWF0aC5jb3MoYW5nbGUpICogcmFkaXVzLFxuICAgICAgICAgICAgICAgIHl5ID0gTWF0aC5zaW4oYW5nbGUpICogcmFkaXVzO1xuXG4gICAgICAgICAgICBwYXRoICs9ICdMICcgKyB4eC50b0ZpeGVkKDMpICsgJyAnICsgeXkudG9GaXhlZCgzKSArICcgJztcbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBwb2x5Z29uID0geyBcbiAgICAgICAgICAgIGxhYmVsOiAnUG9seWdvbiBCb2R5JyxcbiAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgICAgIHZlcnRpY2VzOiBWZXJ0aWNlcy5mcm9tUGF0aChwYXRoKVxuICAgICAgICB9O1xuXG4gICAgICAgIGlmIChvcHRpb25zLmNoYW1mZXIpIHtcbiAgICAgICAgICAgIHZhciBjaGFtZmVyID0gb3B0aW9ucy5jaGFtZmVyO1xuICAgICAgICAgICAgcG9seWdvbi52ZXJ0aWNlcyA9IFZlcnRpY2VzLmNoYW1mZXIocG9seWdvbi52ZXJ0aWNlcywgY2hhbWZlci5yYWRpdXMsIFxuICAgICAgICAgICAgICAgIGNoYW1mZXIucXVhbGl0eSwgY2hhbWZlci5xdWFsaXR5TWluLCBjaGFtZmVyLnF1YWxpdHlNYXgpO1xuICAgICAgICAgICAgZGVsZXRlIG9wdGlvbnMuY2hhbWZlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBCb2R5LmNyZWF0ZShDb21tb24uZXh0ZW5kKHt9LCBwb2x5Z29uLCBvcHRpb25zKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFV0aWxpdHkgdG8gY3JlYXRlIGEgY29tcG91bmQgYm9keSBiYXNlZCBvbiBzZXQocykgb2YgdmVydGljZXMuXG4gICAgICogXG4gICAgICogX05vdGU6XyBUbyBvcHRpb25hbGx5IGVuYWJsZSBhdXRvbWF0aWMgY29uY2F2ZSB2ZXJ0aWNlcyBkZWNvbXBvc2l0aW9uIHRoZSBbcG9seS1kZWNvbXBdKGh0dHBzOi8vZ2l0aHViLmNvbS9zY2h0ZXBwZS9wb2x5LWRlY29tcC5qcykgXG4gICAgICogcGFja2FnZSBtdXN0IGJlIGZpcnN0IGluc3RhbGxlZCBhbmQgcHJvdmlkZWQgc2VlIGBDb21tb24uc2V0RGVjb21wYCwgb3RoZXJ3aXNlIHRoZSBjb252ZXggaHVsbCBvZiBlYWNoIHZlcnRleCBzZXQgd2lsbCBiZSB1c2VkLlxuICAgICAqIFxuICAgICAqIFRoZSByZXN1bHRpbmcgdmVydGljZXMgYXJlIHJlb3JpZW50YXRlZCBhYm91dCB0aGVpciBjZW50cmUgb2YgbWFzcyxcbiAgICAgKiBhbmQgb2Zmc2V0IHN1Y2ggdGhhdCBgYm9keS5wb3NpdGlvbmAgY29ycmVzcG9uZHMgdG8gdGhpcyBwb2ludC5cbiAgICAgKiBcbiAgICAgKiBUaGUgcmVzdWx0aW5nIG9mZnNldCBtYXkgYmUgZm91bmQgaWYgbmVlZGVkIGJ5IHN1YnRyYWN0aW5nIGBib2R5LmJvdW5kc2AgZnJvbSB0aGUgb3JpZ2luYWwgaW5wdXQgYm91bmRzLlxuICAgICAqIFRvIGxhdGVyIG1vdmUgdGhlIGNlbnRyZSBvZiBtYXNzIHNlZSBgQm9keS5zZXRDZW50cmVgLlxuICAgICAqIFxuICAgICAqIE5vdGUgdGhhdCBhdXRvbWF0aWMgY29uY29uY2F2ZSBkZWNvbXBvc2l0aW9uIHJlc3VsdHMgYXJlIG5vdCBhbHdheXMgb3B0aW1hbC4gXG4gICAgICogRm9yIGJlc3QgcmVzdWx0cywgc2ltcGxpZnkgdGhlIGlucHV0IHZlcnRpY2VzIGFzIG11Y2ggYXMgcG9zc2libGUgZmlyc3QuXG4gICAgICogQnkgZGVmYXVsdCB0aGlzIGZ1bmN0aW9uIGFwcGxpZXMgc29tZSBhZGR0aW9uYWwgc2ltcGxpZmljYXRpb24gdG8gaGVscC5cbiAgICAgKiBcbiAgICAgKiBTb21lIG91dHB1dHMgbWF5IGFsc28gcmVxdWlyZSBmdXJ0aGVyIG1hbnVhbCBwcm9jZXNzaW5nIGFmdGVyd2FyZHMgdG8gYmUgcm9idXN0LlxuICAgICAqIEluIHBhcnRpY3VsYXIgc29tZSBwYXJ0cyBtYXkgbmVlZCB0byBiZSBvdmVybGFwcGVkIHRvIGF2b2lkIGNvbGxpc2lvbiBnYXBzLlxuICAgICAqIFRoaW4gcGFydHMgYW5kIHNoYXJwIHBvaW50cyBzaG91bGQgYmUgYXZvaWRlZCBvciByZW1vdmVkIHdoZXJlIHBvc3NpYmxlLlxuICAgICAqXG4gICAgICogVGhlIG9wdGlvbnMgcGFyYW1ldGVyIG9iamVjdCBzcGVjaWZpZXMgYW55IGBNYXR0ZXIuQm9keWAgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gb2YgdGhlIGBNYXR0ZXIuQm9keWAgbW9kdWxlIGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBmcm9tVmVydGljZXNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5XG4gICAgICogQHBhcmFtIHthcnJheX0gdmVydGV4U2V0cyBPbmUgb3IgbW9yZSBhcnJheXMgb2YgdmVydGV4IHBvaW50cyBlLmcuIGBbW3sgeDogMCwgeTogMCB9Li4uXSwgLi4uXWAuXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXSBUaGUgYm9keSBvcHRpb25zLlxuICAgICAqIEBwYXJhbSB7Ym9vbH0gW2ZsYWdJbnRlcm5hbD1mYWxzZV0gT3B0aW9uYWxseSBtYXJrcyBpbnRlcm5hbCBlZGdlcyB3aXRoIGBpc0ludGVybmFsYC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3JlbW92ZUNvbGxpbmVhcj0wLjAxXSBUaHJlc2hvbGQgd2hlbiBzaW1wbGlmeWluZyB2ZXJ0aWNlcyBhbG9uZyB0aGUgc2FtZSBlZGdlLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbbWluaW11bUFyZWE9MTBdIFRocmVzaG9sZCB3aGVuIHJlbW92aW5nIHNtYWxsIHBhcnRzLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBbcmVtb3ZlRHVwbGljYXRlUG9pbnRzPTAuMDFdIFRocmVzaG9sZCB3aGVuIHNpbXBsaWZ5aW5nIG5lYXJieSB2ZXJ0aWNlcy5cbiAgICAgKiBAcmV0dXJuIHtib2R5fVxuICAgICAqL1xuICAgIEJvZGllcy5mcm9tVmVydGljZXMgPSBmdW5jdGlvbih4LCB5LCB2ZXJ0ZXhTZXRzLCBvcHRpb25zLCBmbGFnSW50ZXJuYWwsIHJlbW92ZUNvbGxpbmVhciwgbWluaW11bUFyZWEsIHJlbW92ZUR1cGxpY2F0ZVBvaW50cykge1xuICAgICAgICB2YXIgZGVjb21wID0gQ29tbW9uLmdldERlY29tcCgpLFxuICAgICAgICAgICAgY2FuRGVjb21wLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnRzLFxuICAgICAgICAgICAgaXNDb252ZXgsXG4gICAgICAgICAgICBpc0NvbmNhdmUsXG4gICAgICAgICAgICB2ZXJ0aWNlcyxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqLFxuICAgICAgICAgICAgayxcbiAgICAgICAgICAgIHYsXG4gICAgICAgICAgICB6O1xuXG4gICAgICAgIC8vIGNoZWNrIGRlY29tcCBpcyBhcyBleHBlY3RlZFxuICAgICAgICBjYW5EZWNvbXAgPSBCb29sZWFuKGRlY29tcCAmJiBkZWNvbXAucXVpY2tEZWNvbXApO1xuXG4gICAgICAgIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICAgICAgICBwYXJ0cyA9IFtdO1xuXG4gICAgICAgIGZsYWdJbnRlcm5hbCA9IHR5cGVvZiBmbGFnSW50ZXJuYWwgIT09ICd1bmRlZmluZWQnID8gZmxhZ0ludGVybmFsIDogZmFsc2U7XG4gICAgICAgIHJlbW92ZUNvbGxpbmVhciA9IHR5cGVvZiByZW1vdmVDb2xsaW5lYXIgIT09ICd1bmRlZmluZWQnID8gcmVtb3ZlQ29sbGluZWFyIDogMC4wMTtcbiAgICAgICAgbWluaW11bUFyZWEgPSB0eXBlb2YgbWluaW11bUFyZWEgIT09ICd1bmRlZmluZWQnID8gbWluaW11bUFyZWEgOiAxMDtcbiAgICAgICAgcmVtb3ZlRHVwbGljYXRlUG9pbnRzID0gdHlwZW9mIHJlbW92ZUR1cGxpY2F0ZVBvaW50cyAhPT0gJ3VuZGVmaW5lZCcgPyByZW1vdmVEdXBsaWNhdGVQb2ludHMgOiAwLjAxO1xuXG4gICAgICAgIC8vIGVuc3VyZSB2ZXJ0ZXhTZXRzIGlzIGFuIGFycmF5IG9mIGFycmF5c1xuICAgICAgICBpZiAoIUNvbW1vbi5pc0FycmF5KHZlcnRleFNldHNbMF0pKSB7XG4gICAgICAgICAgICB2ZXJ0ZXhTZXRzID0gW3ZlcnRleFNldHNdO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yICh2ID0gMDsgdiA8IHZlcnRleFNldHMubGVuZ3RoOyB2ICs9IDEpIHtcbiAgICAgICAgICAgIHZlcnRpY2VzID0gdmVydGV4U2V0c1t2XTtcbiAgICAgICAgICAgIGlzQ29udmV4ID0gVmVydGljZXMuaXNDb252ZXgodmVydGljZXMpO1xuICAgICAgICAgICAgaXNDb25jYXZlID0gIWlzQ29udmV4O1xuXG4gICAgICAgICAgICBpZiAoaXNDb25jYXZlICYmICFjYW5EZWNvbXApIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2Fybk9uY2UoXG4gICAgICAgICAgICAgICAgICAgICdCb2RpZXMuZnJvbVZlcnRpY2VzOiBJbnN0YWxsIHRoZSBcXCdwb2x5LWRlY29tcFxcJyBsaWJyYXJ5IGFuZCB1c2UgQ29tbW9uLnNldERlY29tcCBvciBwcm92aWRlIFxcJ2RlY29tcFxcJyBhcyBhIGdsb2JhbCB0byBkZWNvbXBvc2UgY29uY2F2ZSB2ZXJ0aWNlcy4nXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGlzQ29udmV4IHx8ICFjYW5EZWNvbXApIHtcbiAgICAgICAgICAgICAgICBpZiAoaXNDb252ZXgpIHtcbiAgICAgICAgICAgICAgICAgICAgdmVydGljZXMgPSBWZXJ0aWNlcy5jbG9ja3dpc2VTb3J0KHZlcnRpY2VzKTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBmYWxsYmFjayB0byBjb252ZXggaHVsbCB3aGVuIGRlY29tcG9zaXRpb24gaXMgbm90IHBvc3NpYmxlXG4gICAgICAgICAgICAgICAgICAgIHZlcnRpY2VzID0gVmVydGljZXMuaHVsbCh2ZXJ0aWNlcyk7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcGFydHMucHVzaCh7XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiB7IHg6IHgsIHk6IHkgfSxcbiAgICAgICAgICAgICAgICAgICAgdmVydGljZXM6IHZlcnRpY2VzXG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIC8vIGluaXRpYWxpc2UgYSBkZWNvbXBvc2l0aW9uXG4gICAgICAgICAgICAgICAgdmFyIGNvbmNhdmUgPSB2ZXJ0aWNlcy5tYXAoZnVuY3Rpb24odmVydGV4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbdmVydGV4LngsIHZlcnRleC55XTtcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIC8vIHZlcnRpY2VzIGFyZSBjb25jYXZlIGFuZCBzaW1wbGUsIHdlIGNhbiBkZWNvbXBvc2UgaW50byBwYXJ0c1xuICAgICAgICAgICAgICAgIGRlY29tcC5tYWtlQ0NXKGNvbmNhdmUpO1xuICAgICAgICAgICAgICAgIGlmIChyZW1vdmVDb2xsaW5lYXIgIT09IGZhbHNlKVxuICAgICAgICAgICAgICAgICAgICBkZWNvbXAucmVtb3ZlQ29sbGluZWFyUG9pbnRzKGNvbmNhdmUsIHJlbW92ZUNvbGxpbmVhcik7XG4gICAgICAgICAgICAgICAgaWYgKHJlbW92ZUR1cGxpY2F0ZVBvaW50cyAhPT0gZmFsc2UgJiYgZGVjb21wLnJlbW92ZUR1cGxpY2F0ZVBvaW50cylcbiAgICAgICAgICAgICAgICAgICAgZGVjb21wLnJlbW92ZUR1cGxpY2F0ZVBvaW50cyhjb25jYXZlLCByZW1vdmVEdXBsaWNhdGVQb2ludHMpO1xuXG4gICAgICAgICAgICAgICAgLy8gdXNlIHRoZSBxdWljayBkZWNvbXBvc2l0aW9uIGFsZ29yaXRobSAoQmF5YXppdClcbiAgICAgICAgICAgICAgICB2YXIgZGVjb21wb3NlZCA9IGRlY29tcC5xdWlja0RlY29tcChjb25jYXZlKTtcblxuICAgICAgICAgICAgICAgIC8vIGZvciBlYWNoIGRlY29tcG9zZWQgY2h1bmtcbiAgICAgICAgICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZGVjb21wb3NlZC5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgY2h1bmsgPSBkZWNvbXBvc2VkW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIGNvbnZlcnQgdmVydGljZXMgaW50byB0aGUgY29ycmVjdCBzdHJ1Y3R1cmVcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNodW5rVmVydGljZXMgPSBjaHVuay5tYXAoZnVuY3Rpb24odmVydGljZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeDogdmVydGljZXNbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgeTogdmVydGljZXNbMV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIC8vIHNraXAgc21hbGwgY2h1bmtzXG4gICAgICAgICAgICAgICAgICAgIGlmIChtaW5pbXVtQXJlYSA+IDAgJiYgVmVydGljZXMuYXJlYShjaHVua1ZlcnRpY2VzKSA8IG1pbmltdW1BcmVhKVxuICAgICAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICAgICAgLy8gY3JlYXRlIGEgY29tcG91bmQgcGFydFxuICAgICAgICAgICAgICAgICAgICBwYXJ0cy5wdXNoKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uOiBWZXJ0aWNlcy5jZW50cmUoY2h1bmtWZXJ0aWNlcyksXG4gICAgICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlczogY2h1bmtWZXJ0aWNlc1xuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyBjcmVhdGUgYm9keSBwYXJ0c1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFydHMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhcnRzW2ldID0gQm9keS5jcmVhdGUoQ29tbW9uLmV4dGVuZChwYXJ0c1tpXSwgb3B0aW9ucykpO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmxhZyBpbnRlcm5hbCBlZGdlcyAoY29pbmNpZGVudCBwYXJ0IGVkZ2VzKVxuICAgICAgICBpZiAoZmxhZ0ludGVybmFsKSB7XG4gICAgICAgICAgICB2YXIgY29pbmNpZGVudF9tYXhfZGlzdCA9IDU7XG5cbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYXJ0cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBwYXJ0QSA9IHBhcnRzW2ldO1xuXG4gICAgICAgICAgICAgICAgZm9yIChqID0gaSArIDE7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydEIgPSBwYXJ0c1tqXTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoQm91bmRzLm92ZXJsYXBzKHBhcnRBLmJvdW5kcywgcGFydEIuYm91bmRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhdiA9IHBhcnRBLnZlcnRpY2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBidiA9IHBhcnRCLnZlcnRpY2VzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBpdGVyYXRlIHZlcnRpY2VzIG9mIGJvdGggcGFydHNcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBwYXJ0QS52ZXJ0aWNlcy5sZW5ndGg7IGsrKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvciAoeiA9IDA7IHogPCBwYXJ0Qi52ZXJ0aWNlcy5sZW5ndGg7IHorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBmaW5kIGRpc3RhbmNlcyBiZXR3ZWVuIHRoZSB2ZXJ0aWNlc1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZGEgPSBWZWN0b3IubWFnbml0dWRlU3F1YXJlZChWZWN0b3Iuc3ViKHBhdlsoayArIDEpICUgcGF2Lmxlbmd0aF0sIHBidlt6XSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGIgPSBWZWN0b3IubWFnbml0dWRlU3F1YXJlZChWZWN0b3Iuc3ViKHBhdltrXSwgcGJ2Wyh6ICsgMSkgJSBwYnYubGVuZ3RoXSkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGlmIGJvdGggdmVydGljZXMgYXJlIHZlcnkgY2xvc2UsIGNvbnNpZGVyIHRoZSBlZGdlIGNvbmNpZGVudCAoaW50ZXJuYWwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYSA8IGNvaW5jaWRlbnRfbWF4X2Rpc3QgJiYgZGIgPCBjb2luY2lkZW50X21heF9kaXN0KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYXZba10uaXNJbnRlcm5hbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBwYnZbel0uaXNJbnRlcm5hbCA9IHRydWU7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwYXJ0cy5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICAvLyBjcmVhdGUgdGhlIHBhcmVudCBib2R5IHRvIGJlIHJldHVybmVkLCB0aGF0IGNvbnRhaW5zIGdlbmVyYXRlZCBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgYm9keSA9IEJvZHkuY3JlYXRlKENvbW1vbi5leHRlbmQoeyBwYXJ0czogcGFydHMuc2xpY2UoMCkgfSwgb3B0aW9ucykpO1xuXG4gICAgICAgICAgICAvLyBvZmZzZXQgc3VjaCB0aGF0IGJvZHkucG9zaXRpb24gaXMgYXQgdGhlIGNlbnRyZSBvZmYgbWFzc1xuICAgICAgICAgICAgQm9keS5zZXRQb3NpdGlvbihib2R5LCB7IHg6IHgsIHk6IHkgfSk7XG5cbiAgICAgICAgICAgIHJldHVybiBib2R5O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnRzWzBdO1xuICAgICAgICB9XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDEzICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5EZXRlY3RvcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGVmZmljaWVudGx5IGRldGVjdGluZyBjb2xsaXNpb25zIGJldHdlZW4gYSBsaXN0IG9mIGJvZGllcyB1c2luZyBhIGJyb2FkcGhhc2UgYWxnb3JpdGhtLlxuKlxuKiBAY2xhc3MgRGV0ZWN0b3JcbiovXG5cbnZhciBEZXRlY3RvciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IERldGVjdG9yO1xuXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBDb2xsaXNpb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDgpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGNvbGxpc2lvbiBkZXRlY3Rvci5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICogQHJldHVybiB7ZGV0ZWN0b3J9IEEgbmV3IGNvbGxpc2lvbiBkZXRlY3RvclxuICAgICAqL1xuICAgIERldGVjdG9yLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgYm9kaWVzOiBbXSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnM6IFtdLFxuICAgICAgICAgICAgcGFpcnM6IG51bGxcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFNldHMgdGhlIGxpc3Qgb2YgYm9kaWVzIGluIHRoZSBkZXRlY3Rvci5cbiAgICAgKiBAbWV0aG9kIHNldEJvZGllc1xuICAgICAqIEBwYXJhbSB7ZGV0ZWN0b3J9IGRldGVjdG9yXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIERldGVjdG9yLnNldEJvZGllcyA9IGZ1bmN0aW9uKGRldGVjdG9yLCBib2RpZXMpIHtcbiAgICAgICAgZGV0ZWN0b3IuYm9kaWVzID0gYm9kaWVzLnNsaWNlKDApO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGRldGVjdG9yIGluY2x1ZGluZyBpdHMgbGlzdCBvZiBib2RpZXMuXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7ZGV0ZWN0b3J9IGRldGVjdG9yXG4gICAgICovXG4gICAgRGV0ZWN0b3IuY2xlYXIgPSBmdW5jdGlvbihkZXRlY3Rvcikge1xuICAgICAgICBkZXRlY3Rvci5ib2RpZXMgPSBbXTtcbiAgICAgICAgZGV0ZWN0b3IuY29sbGlzaW9ucyA9IFtdO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFZmZpY2llbnRseSBmaW5kcyBhbGwgY29sbGlzaW9ucyBhbW9uZyBhbGwgdGhlIGJvZGllcyBpbiBgZGV0ZWN0b3IuYm9kaWVzYCB1c2luZyBhIGJyb2FkcGhhc2UgYWxnb3JpdGhtLlxuICAgICAqIFxuICAgICAqIF9Ob3RlOl8gVGhlIHNwZWNpZmljIG9yZGVyaW5nIG9mIGNvbGxpc2lvbnMgcmV0dXJuZWQgaXMgbm90IGd1YXJhbnRlZWQgYmV0d2VlbiByZWxlYXNlcyBhbmQgbWF5IGNoYW5nZSBmb3IgcGVyZm9ybWFuY2UgcmVhc29ucy5cbiAgICAgKiBJZiBhIHNwZWNpZmljIG9yZGVyaW5nIGlzIHJlcXVpcmVkIHRoZW4gYXBwbHkgYSBzb3J0IHRvIHRoZSByZXN1bHRpbmcgYXJyYXkuXG4gICAgICogQG1ldGhvZCBjb2xsaXNpb25zXG4gICAgICogQHBhcmFtIHtkZXRlY3Rvcn0gZGV0ZWN0b3JcbiAgICAgKiBAcmV0dXJuIHtjb2xsaXNpb25bXX0gY29sbGlzaW9uc1xuICAgICAqL1xuICAgIERldGVjdG9yLmNvbGxpc2lvbnMgPSBmdW5jdGlvbihkZXRlY3Rvcikge1xuICAgICAgICB2YXIgcGFpcnMgPSBkZXRlY3Rvci5wYWlycyxcbiAgICAgICAgICAgIGJvZGllcyA9IGRldGVjdG9yLmJvZGllcyxcbiAgICAgICAgICAgIGJvZGllc0xlbmd0aCA9IGJvZGllcy5sZW5ndGgsXG4gICAgICAgICAgICBjYW5Db2xsaWRlID0gRGV0ZWN0b3IuY2FuQ29sbGlkZSxcbiAgICAgICAgICAgIGNvbGxpZGVzID0gQ29sbGlzaW9uLmNvbGxpZGVzLFxuICAgICAgICAgICAgY29sbGlzaW9ucyA9IGRldGVjdG9yLmNvbGxpc2lvbnMsXG4gICAgICAgICAgICBjb2xsaXNpb25JbmRleCA9IDAsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBib2RpZXMuc29ydChEZXRlY3Rvci5fY29tcGFyZUJvdW5kc1gpO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHlBID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGJvdW5kc0EgPSBib2R5QS5ib3VuZHMsXG4gICAgICAgICAgICAgICAgYm91bmRYTWF4ID0gYm9keUEuYm91bmRzLm1heC54LFxuICAgICAgICAgICAgICAgIGJvdW5kWU1heCA9IGJvZHlBLmJvdW5kcy5tYXgueSxcbiAgICAgICAgICAgICAgICBib3VuZFlNaW4gPSBib2R5QS5ib3VuZHMubWluLnksXG4gICAgICAgICAgICAgICAgYm9keUFTdGF0aWMgPSBib2R5QS5pc1N0YXRpYyB8fCBib2R5QS5pc1NsZWVwaW5nLFxuICAgICAgICAgICAgICAgIHBhcnRzQUxlbmd0aCA9IGJvZHlBLnBhcnRzLmxlbmd0aCxcbiAgICAgICAgICAgICAgICBwYXJ0c0FTaW5nbGUgPSBwYXJ0c0FMZW5ndGggPT09IDE7XG5cbiAgICAgICAgICAgIGZvciAoaiA9IGkgKyAxOyBqIDwgYm9kaWVzTGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYm9keUIgPSBib2RpZXNbal0sXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kc0IgPSBib2R5Qi5ib3VuZHM7XG5cbiAgICAgICAgICAgICAgICBpZiAoYm91bmRzQi5taW4ueCA+IGJvdW5kWE1heCkge1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAoYm91bmRZTWF4IDwgYm91bmRzQi5taW4ueSB8fCBib3VuZFlNaW4gPiBib3VuZHNCLm1heC55KSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGlmIChib2R5QVN0YXRpYyAmJiAoYm9keUIuaXNTdGF0aWMgfHwgYm9keUIuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCFjYW5Db2xsaWRlKGJvZHlBLmNvbGxpc2lvbkZpbHRlciwgYm9keUIuY29sbGlzaW9uRmlsdGVyKSkge1xuICAgICAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICB2YXIgcGFydHNCTGVuZ3RoID0gYm9keUIucGFydHMubGVuZ3RoO1xuXG4gICAgICAgICAgICAgICAgaWYgKHBhcnRzQVNpbmdsZSAmJiBwYXJ0c0JMZW5ndGggPT09IDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IGNvbGxpZGVzKGJvZHlBLCBib2R5QiwgcGFpcnMpO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbnNbY29sbGlzaW9uSW5kZXgrK10gPSBjb2xsaXNpb247XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydHNBU3RhcnQgPSBwYXJ0c0FMZW5ndGggPiAxID8gMSA6IDAsXG4gICAgICAgICAgICAgICAgICAgICAgICBwYXJ0c0JTdGFydCA9IHBhcnRzQkxlbmd0aCA+IDEgPyAxIDogMDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGsgPSBwYXJ0c0FTdGFydDsgayA8IHBhcnRzQUxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFydEEgPSBib2R5QS5wYXJ0c1trXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3VuZHNBID0gcGFydEEuYm91bmRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3IgKHZhciB6ID0gcGFydHNCU3RhcnQ7IHogPCBwYXJ0c0JMZW5ndGg7IHorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0QiA9IGJvZHlCLnBhcnRzW3pdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBib3VuZHNCID0gcGFydEIuYm91bmRzO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGJvdW5kc0EubWluLnggPiBib3VuZHNCLm1heC54IHx8IGJvdW5kc0EubWF4LnggPCBib3VuZHNCLm1pbi54XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGJvdW5kc0EubWF4LnkgPCBib3VuZHNCLm1pbi55IHx8IGJvdW5kc0EubWluLnkgPiBib3VuZHNCLm1heC55KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBjb2xsaWRlcyhwYXJ0QSwgcGFydEIsIHBhaXJzKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChjb2xsaXNpb24pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uc1tjb2xsaXNpb25JbmRleCsrXSA9IGNvbGxpc2lvbjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sbGlzaW9ucy5sZW5ndGggIT09IGNvbGxpc2lvbkluZGV4KSB7XG4gICAgICAgICAgICBjb2xsaXNpb25zLmxlbmd0aCA9IGNvbGxpc2lvbkluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIGNvbGxpc2lvbnM7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGJvdGggc3VwcGxpZWQgY29sbGlzaW9uIGZpbHRlcnMgd2lsbCBhbGxvdyBhIGNvbGxpc2lvbiB0byBvY2N1ci5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKiBAbWV0aG9kIGNhbkNvbGxpZGVcbiAgICAgKiBAcGFyYW0ge30gZmlsdGVyQVxuICAgICAqIEBwYXJhbSB7fSBmaWx0ZXJCXG4gICAgICogQHJldHVybiB7Ym9vbH0gYHRydWVgIGlmIGNvbGxpc2lvbiBjYW4gb2NjdXJcbiAgICAgKi9cbiAgICBEZXRlY3Rvci5jYW5Db2xsaWRlID0gZnVuY3Rpb24oZmlsdGVyQSwgZmlsdGVyQikge1xuICAgICAgICBpZiAoZmlsdGVyQS5ncm91cCA9PT0gZmlsdGVyQi5ncm91cCAmJiBmaWx0ZXJBLmdyb3VwICE9PSAwKVxuICAgICAgICAgICAgcmV0dXJuIGZpbHRlckEuZ3JvdXAgPiAwO1xuXG4gICAgICAgIHJldHVybiAoZmlsdGVyQS5tYXNrICYgZmlsdGVyQi5jYXRlZ29yeSkgIT09IDAgJiYgKGZpbHRlckIubWFzayAmIGZpbHRlckEuY2F0ZWdvcnkpICE9PSAwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUaGUgY29tcGFyaXNvbiBmdW5jdGlvbiB1c2VkIGluIHRoZSBicm9hZHBoYXNlIGFsZ29yaXRobS5cbiAgICAgKiBSZXR1cm5zIHRoZSBzaWduZWQgZGVsdGEgb2YgdGhlIGJvZGllcyBib3VuZHMgb24gdGhlIHgtYXhpcy5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgX3NvcnRDb21wYXJlXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IFRoZSBzaWduZWQgZGVsdGEgdXNlZCBmb3Igc29ydGluZ1xuICAgICAqL1xuICAgIERldGVjdG9yLl9jb21wYXJlQm91bmRzWCA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5Qikge1xuICAgICAgICByZXR1cm4gYm9keUEuYm91bmRzLm1pbi54IC0gYm9keUIuYm91bmRzLm1pbi54O1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBhcnJheSBvZiBgTWF0dGVyLkJvZHlgIGJldHdlZW4gd2hpY2ggdGhlIGRldGVjdG9yIGZpbmRzIGNvbGxpc2lvbnMuXG4gICAgICogXG4gICAgICogX05vdGU6XyBUaGUgb3JkZXIgb2YgYm9kaWVzIGluIHRoaXMgYXJyYXkgX2lzIG5vdCBmaXhlZF8gYW5kIHdpbGwgYmUgY29udGludWFsbHkgbWFuYWdlZCBieSB0aGUgZGV0ZWN0b3IuXG4gICAgICogQHByb3BlcnR5IGJvZGllc1xuICAgICAqIEB0eXBlIGJvZHlbXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYXJyYXkgb2YgYE1hdHRlci5Db2xsaXNpb25gIGZvdW5kIGluIHRoZSBsYXN0IGNhbGwgdG8gYERldGVjdG9yLmNvbGxpc2lvbnNgIG9uIHRoaXMgZGV0ZWN0b3IuXG4gICAgICogQHByb3BlcnR5IGNvbGxpc2lvbnNcbiAgICAgKiBAdHlwZSBjb2xsaXNpb25bXVxuICAgICAqIEBkZWZhdWx0IFtdXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBPcHRpb25hbC4gQSBgTWF0dGVyLlBhaXJzYCBvYmplY3QgZnJvbSB3aGljaCBwcmV2aW91cyBjb2xsaXNpb24gb2JqZWN0cyBtYXkgYmUgcmV1c2VkLiBJbnRlbmRlZCBmb3IgaW50ZXJuYWwgYE1hdHRlci5FbmdpbmVgIHVzYWdlLlxuICAgICAqIEBwcm9wZXJ0eSBwYWlyc1xuICAgICAqIEB0eXBlIHtwYWlyc3xudWxsfVxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE0ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Nb3VzZWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgbW91c2UgaW5wdXRzLlxuKlxuKiBAY2xhc3MgTW91c2VcbiovXG5cbnZhciBNb3VzZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IE1vdXNlO1xuXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG1vdXNlIGlucHV0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtIVE1MRWxlbWVudH0gZWxlbWVudFxuICAgICAqIEByZXR1cm4ge21vdXNlfSBBIG5ldyBtb3VzZVxuICAgICAqL1xuICAgIE1vdXNlLmNyZWF0ZSA9IGZ1bmN0aW9uKGVsZW1lbnQpIHtcbiAgICAgICAgdmFyIG1vdXNlID0ge307XG5cbiAgICAgICAgaWYgKCFlbGVtZW50KSB7XG4gICAgICAgICAgICBDb21tb24ubG9nKCdNb3VzZS5jcmVhdGU6IGVsZW1lbnQgd2FzIHVuZGVmaW5lZCwgZGVmYXVsdGluZyB0byBkb2N1bWVudC5ib2R5JywgJ3dhcm4nKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgbW91c2UuZWxlbWVudCA9IGVsZW1lbnQgfHwgZG9jdW1lbnQuYm9keTtcbiAgICAgICAgbW91c2UuYWJzb2x1dGUgPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2UucG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2UubW91c2Vkb3duUG9zaXRpb24gPSB7IHg6IDAsIHk6IDAgfTtcbiAgICAgICAgbW91c2UubW91c2V1cFBvc2l0aW9uID0geyB4OiAwLCB5OiAwIH07XG4gICAgICAgIG1vdXNlLm9mZnNldCA9IHsgeDogMCwgeTogMCB9O1xuICAgICAgICBtb3VzZS5zY2FsZSA9IHsgeDogMSwgeTogMSB9O1xuICAgICAgICBtb3VzZS53aGVlbERlbHRhID0gMDtcbiAgICAgICAgbW91c2UuYnV0dG9uID0gLTE7XG4gICAgICAgIG1vdXNlLnBpeGVsUmF0aW8gPSBwYXJzZUludChtb3VzZS5lbGVtZW50LmdldEF0dHJpYnV0ZSgnZGF0YS1waXhlbC1yYXRpbycpLCAxMCkgfHwgMTtcblxuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMgPSB7XG4gICAgICAgICAgICBtb3VzZW1vdmU6IG51bGwsXG4gICAgICAgICAgICBtb3VzZWRvd246IG51bGwsXG4gICAgICAgICAgICBtb3VzZXVwOiBudWxsLFxuICAgICAgICAgICAgbW91c2V3aGVlbDogbnVsbFxuICAgICAgICB9O1xuICAgICAgICBcbiAgICAgICAgbW91c2UubW91c2Vtb3ZlID0gZnVuY3Rpb24oZXZlbnQpIHsgXG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uKGV2ZW50LCBtb3VzZS5lbGVtZW50LCBtb3VzZS5waXhlbFJhdGlvKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gMDtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS54ID0gcG9zaXRpb24ueDtcbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnkgPSBwb3NpdGlvbi55O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueCA9IG1vdXNlLmFic29sdXRlLnggKiBtb3VzZS5zY2FsZS54ICsgbW91c2Uub2Zmc2V0Lng7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICAgICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZW1vdmUgPSBldmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIG1vdXNlLm1vdXNlZG93biA9IGZ1bmN0aW9uKGV2ZW50KSB7XG4gICAgICAgICAgICB2YXIgcG9zaXRpb24gPSBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uKGV2ZW50LCBtb3VzZS5lbGVtZW50LCBtb3VzZS5waXhlbFJhdGlvKSxcbiAgICAgICAgICAgICAgICB0b3VjaGVzID0gZXZlbnQuY2hhbmdlZFRvdWNoZXM7XG5cbiAgICAgICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UuYnV0dG9uID0gMDtcbiAgICAgICAgICAgICAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBtb3VzZS5idXR0b24gPSBldmVudC5idXR0b247XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vdXNlLmFic29sdXRlLnggPSBwb3NpdGlvbi54O1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueSA9IHBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnkgPSBtb3VzZS5hYnNvbHV0ZS55ICogbW91c2Uuc2NhbGUueSArIG1vdXNlLm9mZnNldC55O1xuICAgICAgICAgICAgbW91c2UubW91c2Vkb3duUG9zaXRpb24ueCA9IG1vdXNlLnBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZWRvd25Qb3NpdGlvbi55ID0gbW91c2UucG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZWRvd24gPSBldmVudDtcbiAgICAgICAgfTtcbiAgICAgICAgXG4gICAgICAgIG1vdXNlLm1vdXNldXAgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgdmFyIHBvc2l0aW9uID0gTW91c2UuX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvbihldmVudCwgbW91c2UuZWxlbWVudCwgbW91c2UucGl4ZWxSYXRpbyksXG4gICAgICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzO1xuXG4gICAgICAgICAgICBpZiAodG91Y2hlcykge1xuICAgICAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIG1vdXNlLmJ1dHRvbiA9IC0xO1xuICAgICAgICAgICAgbW91c2UuYWJzb2x1dGUueCA9IHBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5hYnNvbHV0ZS55ID0gcG9zaXRpb24ueTtcbiAgICAgICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZXVwUG9zaXRpb24ueCA9IG1vdXNlLnBvc2l0aW9uLng7XG4gICAgICAgICAgICBtb3VzZS5tb3VzZXVwUG9zaXRpb24ueSA9IG1vdXNlLnBvc2l0aW9uLnk7XG4gICAgICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2V1cCA9IGV2ZW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIG1vdXNlLm1vdXNld2hlZWwgPSBmdW5jdGlvbihldmVudCkge1xuICAgICAgICAgICAgbW91c2Uud2hlZWxEZWx0YSA9IE1hdGgubWF4KC0xLCBNYXRoLm1pbigxLCBldmVudC53aGVlbERlbHRhIHx8IC1ldmVudC5kZXRhaWwpKTtcbiAgICAgICAgICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2V3aGVlbCA9IGV2ZW50O1xuICAgICAgICB9O1xuXG4gICAgICAgIE1vdXNlLnNldEVsZW1lbnQobW91c2UsIG1vdXNlLmVsZW1lbnQpO1xuXG4gICAgICAgIHJldHVybiBtb3VzZTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgZWxlbWVudCB0aGUgbW91c2UgaXMgYm91bmQgdG8gKGFuZCByZWxhdGl2ZSB0bykuXG4gICAgICogQG1ldGhvZCBzZXRFbGVtZW50XG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBlbGVtZW50XG4gICAgICovXG4gICAgTW91c2Uuc2V0RWxlbWVudCA9IGZ1bmN0aW9uKG1vdXNlLCBlbGVtZW50KSB7XG4gICAgICAgIG1vdXNlLmVsZW1lbnQgPSBlbGVtZW50O1xuXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vtb3ZlJywgbW91c2UubW91c2Vtb3ZlLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2Vkb3duJywgbW91c2UubW91c2Vkb3duLCB7IHBhc3NpdmU6IHRydWUgfSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignbW91c2V1cCcsIG1vdXNlLm1vdXNldXAsIHsgcGFzc2l2ZTogdHJ1ZSB9KTtcbiAgICAgICAgXG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcignd2hlZWwnLCBtb3VzZS5tb3VzZXdoZWVsLCB7IHBhc3NpdmU6IGZhbHNlIH0pO1xuICAgICAgICBcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaG1vdmUnLCBtb3VzZS5tb3VzZW1vdmUsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgICAgIGVsZW1lbnQuYWRkRXZlbnRMaXN0ZW5lcigndG91Y2hzdGFydCcsIG1vdXNlLm1vdXNlZG93biwgeyBwYXNzaXZlOiBmYWxzZSB9KTtcbiAgICAgICAgZWxlbWVudC5hZGRFdmVudExpc3RlbmVyKCd0b3VjaGVuZCcsIG1vdXNlLm1vdXNldXAsIHsgcGFzc2l2ZTogZmFsc2UgfSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyBhbGwgY2FwdHVyZWQgc291cmNlIGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIGNsZWFyU291cmNlRXZlbnRzXG4gICAgICogQHBhcmFtIHttb3VzZX0gbW91c2VcbiAgICAgKi9cbiAgICBNb3VzZS5jbGVhclNvdXJjZUV2ZW50cyA9IGZ1bmN0aW9uKG1vdXNlKSB7XG4gICAgICAgIG1vdXNlLnNvdXJjZUV2ZW50cy5tb3VzZW1vdmUgPSBudWxsO1xuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2Vkb3duID0gbnVsbDtcbiAgICAgICAgbW91c2Uuc291cmNlRXZlbnRzLm1vdXNldXAgPSBudWxsO1xuICAgICAgICBtb3VzZS5zb3VyY2VFdmVudHMubW91c2V3aGVlbCA9IG51bGw7XG4gICAgICAgIG1vdXNlLndoZWVsRGVsdGEgPSAwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBtb3VzZSBwb3NpdGlvbiBvZmZzZXQuXG4gICAgICogQG1ldGhvZCBzZXRPZmZzZXRcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZVxuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBvZmZzZXRcbiAgICAgKi9cbiAgICBNb3VzZS5zZXRPZmZzZXQgPSBmdW5jdGlvbihtb3VzZSwgb2Zmc2V0KSB7XG4gICAgICAgIG1vdXNlLm9mZnNldC54ID0gb2Zmc2V0Lng7XG4gICAgICAgIG1vdXNlLm9mZnNldC55ID0gb2Zmc2V0Lnk7XG4gICAgICAgIG1vdXNlLnBvc2l0aW9uLnggPSBtb3VzZS5hYnNvbHV0ZS54ICogbW91c2Uuc2NhbGUueCArIG1vdXNlLm9mZnNldC54O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi55ID0gbW91c2UuYWJzb2x1dGUueSAqIG1vdXNlLnNjYWxlLnkgKyBtb3VzZS5vZmZzZXQueTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgbW91c2UgcG9zaXRpb24gc2NhbGUuXG4gICAgICogQG1ldGhvZCBzZXRTY2FsZVxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHNjYWxlXG4gICAgICovXG4gICAgTW91c2Uuc2V0U2NhbGUgPSBmdW5jdGlvbihtb3VzZSwgc2NhbGUpIHtcbiAgICAgICAgbW91c2Uuc2NhbGUueCA9IHNjYWxlLng7XG4gICAgICAgIG1vdXNlLnNjYWxlLnkgPSBzY2FsZS55O1xuICAgICAgICBtb3VzZS5wb3NpdGlvbi54ID0gbW91c2UuYWJzb2x1dGUueCAqIG1vdXNlLnNjYWxlLnggKyBtb3VzZS5vZmZzZXQueDtcbiAgICAgICAgbW91c2UucG9zaXRpb24ueSA9IG1vdXNlLmFic29sdXRlLnkgKiBtb3VzZS5zY2FsZS55ICsgbW91c2Uub2Zmc2V0Lnk7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBtb3VzZSBwb3NpdGlvbiByZWxhdGl2ZSB0byBhbiBlbGVtZW50IGdpdmVuIGEgc2NyZWVuIHBpeGVsIHJhdGlvLlxuICAgICAqIEBtZXRob2QgX2dldFJlbGF0aXZlTW91c2VQb3NpdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGV2ZW50XG4gICAgICogQHBhcmFtIHt9IGVsZW1lbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcGl4ZWxSYXRpb1xuICAgICAqIEByZXR1cm4ge31cbiAgICAgKi9cbiAgICBNb3VzZS5fZ2V0UmVsYXRpdmVNb3VzZVBvc2l0aW9uID0gZnVuY3Rpb24oZXZlbnQsIGVsZW1lbnQsIHBpeGVsUmF0aW8pIHtcbiAgICAgICAgdmFyIGVsZW1lbnRCb3VuZHMgPSBlbGVtZW50LmdldEJvdW5kaW5nQ2xpZW50UmVjdCgpLFxuICAgICAgICAgICAgcm9vdE5vZGUgPSAoZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50IHx8IGRvY3VtZW50LmJvZHkucGFyZW50Tm9kZSB8fCBkb2N1bWVudC5ib2R5KSxcbiAgICAgICAgICAgIHNjcm9sbFggPSAod2luZG93LnBhZ2VYT2Zmc2V0ICE9PSB1bmRlZmluZWQpID8gd2luZG93LnBhZ2VYT2Zmc2V0IDogcm9vdE5vZGUuc2Nyb2xsTGVmdCxcbiAgICAgICAgICAgIHNjcm9sbFkgPSAod2luZG93LnBhZ2VZT2Zmc2V0ICE9PSB1bmRlZmluZWQpID8gd2luZG93LnBhZ2VZT2Zmc2V0IDogcm9vdE5vZGUuc2Nyb2xsVG9wLFxuICAgICAgICAgICAgdG91Y2hlcyA9IGV2ZW50LmNoYW5nZWRUb3VjaGVzLFxuICAgICAgICAgICAgeCwgeTtcbiAgICAgICAgXG4gICAgICAgIGlmICh0b3VjaGVzKSB7XG4gICAgICAgICAgICB4ID0gdG91Y2hlc1swXS5wYWdlWCAtIGVsZW1lbnRCb3VuZHMubGVmdCAtIHNjcm9sbFg7XG4gICAgICAgICAgICB5ID0gdG91Y2hlc1swXS5wYWdlWSAtIGVsZW1lbnRCb3VuZHMudG9wIC0gc2Nyb2xsWTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHggPSBldmVudC5wYWdlWCAtIGVsZW1lbnRCb3VuZHMubGVmdCAtIHNjcm9sbFg7XG4gICAgICAgICAgICB5ID0gZXZlbnQucGFnZVkgLSBlbGVtZW50Qm91bmRzLnRvcCAtIHNjcm9sbFk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4geyBcbiAgICAgICAgICAgIHg6IHggLyAoZWxlbWVudC5jbGllbnRXaWR0aCAvIChlbGVtZW50LndpZHRoIHx8IGVsZW1lbnQuY2xpZW50V2lkdGgpICogcGl4ZWxSYXRpbyksXG4gICAgICAgICAgICB5OiB5IC8gKGVsZW1lbnQuY2xpZW50SGVpZ2h0IC8gKGVsZW1lbnQuaGVpZ2h0IHx8IGVsZW1lbnQuY2xpZW50SGVpZ2h0KSAqIHBpeGVsUmF0aW8pXG4gICAgICAgIH07XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5QbHVnaW5gIG1vZHVsZSBjb250YWlucyBmdW5jdGlvbnMgZm9yIHJlZ2lzdGVyaW5nIGFuZCBpbnN0YWxsaW5nIHBsdWdpbnMgb24gbW9kdWxlcy5cbipcbiogQGNsYXNzIFBsdWdpblxuKi9cblxudmFyIFBsdWdpbiA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBsdWdpbjtcblxudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIFBsdWdpbi5fcmVnaXN0cnkgPSB7fTtcblxuICAgIC8qKlxuICAgICAqIFJlZ2lzdGVycyBhIHBsdWdpbiBvYmplY3Qgc28gaXQgY2FuIGJlIHJlc29sdmVkIGxhdGVyIGJ5IG5hbWUuXG4gICAgICogQG1ldGhvZCByZWdpc3RlclxuICAgICAqIEBwYXJhbSBwbHVnaW4ge30gVGhlIHBsdWdpbiB0byByZWdpc3Rlci5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBwbHVnaW4uXG4gICAgICovXG4gICAgUGx1Z2luLnJlZ2lzdGVyID0gZnVuY3Rpb24ocGx1Z2luKSB7XG4gICAgICAgIGlmICghUGx1Z2luLmlzUGx1Z2luKHBsdWdpbikpIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4ucmVnaXN0ZXI6JywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbiksICdkb2VzIG5vdCBpbXBsZW1lbnQgYWxsIHJlcXVpcmVkIGZpZWxkcy4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChwbHVnaW4ubmFtZSBpbiBQbHVnaW4uX3JlZ2lzdHJ5KSB7XG4gICAgICAgICAgICB2YXIgcmVnaXN0ZXJlZCA9IFBsdWdpbi5fcmVnaXN0cnlbcGx1Z2luLm5hbWVdLFxuICAgICAgICAgICAgICAgIHBsdWdpblZlcnNpb24gPSBQbHVnaW4udmVyc2lvblBhcnNlKHBsdWdpbi52ZXJzaW9uKS5udW1iZXIsXG4gICAgICAgICAgICAgICAgcmVnaXN0ZXJlZFZlcnNpb24gPSBQbHVnaW4udmVyc2lvblBhcnNlKHJlZ2lzdGVyZWQudmVyc2lvbikubnVtYmVyO1xuXG4gICAgICAgICAgICBpZiAocGx1Z2luVmVyc2lvbiA+IHJlZ2lzdGVyZWRWZXJzaW9uKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5yZWdpc3RlcjonLCBQbHVnaW4udG9TdHJpbmcocmVnaXN0ZXJlZCksICd3YXMgdXBncmFkZWQgdG8nLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSk7XG4gICAgICAgICAgICAgICAgUGx1Z2luLl9yZWdpc3RyeVtwbHVnaW4ubmFtZV0gPSBwbHVnaW47XG4gICAgICAgICAgICB9IGVsc2UgaWYgKHBsdWdpblZlcnNpb24gPCByZWdpc3RlcmVkVmVyc2lvbikge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4ucmVnaXN0ZXI6JywgUGx1Z2luLnRvU3RyaW5nKHJlZ2lzdGVyZWQpLCAnY2FuIG5vdCBiZSBkb3duZ3JhZGVkIHRvJywgUGx1Z2luLnRvU3RyaW5nKHBsdWdpbikpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChwbHVnaW4gIT09IHJlZ2lzdGVyZWQpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnJlZ2lzdGVyOicsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pLCAnaXMgYWxyZWFkeSByZWdpc3RlcmVkIHRvIGRpZmZlcmVudCBwbHVnaW4gb2JqZWN0Jyk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBQbHVnaW4uX3JlZ2lzdHJ5W3BsdWdpbi5uYW1lXSA9IHBsdWdpbjtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBwbHVnaW47XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlc29sdmVzIGEgZGVwZW5kZW5jeSB0byBhIHBsdWdpbiBvYmplY3QgZnJvbSB0aGUgcmVnaXN0cnkgaWYgaXQgZXhpc3RzLiBcbiAgICAgKiBUaGUgYGRlcGVuZGVuY3lgIG1heSBjb250YWluIGEgdmVyc2lvbiwgYnV0IG9ubHkgdGhlIG5hbWUgbWF0dGVycyB3aGVuIHJlc29sdmluZy5cbiAgICAgKiBAbWV0aG9kIHJlc29sdmVcbiAgICAgKiBAcGFyYW0gZGVwZW5kZW5jeSB7c3RyaW5nfSBUaGUgZGVwZW5kZW5jeS5cbiAgICAgKiBAcmV0dXJuIHtvYmplY3R9IFRoZSBwbHVnaW4gaWYgcmVzb2x2ZWQsIG90aGVyd2lzZSBgdW5kZWZpbmVkYC5cbiAgICAgKi9cbiAgICBQbHVnaW4ucmVzb2x2ZSA9IGZ1bmN0aW9uKGRlcGVuZGVuY3kpIHtcbiAgICAgICAgcmV0dXJuIFBsdWdpbi5fcmVnaXN0cnlbUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShkZXBlbmRlbmN5KS5uYW1lXTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhIHByZXR0eSBwcmludGVkIHBsdWdpbiBuYW1lIGFuZCB2ZXJzaW9uLlxuICAgICAqIEBtZXRob2QgdG9TdHJpbmdcbiAgICAgKiBAcGFyYW0gcGx1Z2luIHt9IFRoZSBwbHVnaW4uXG4gICAgICogQHJldHVybiB7c3RyaW5nfSBQcmV0dHkgcHJpbnRlZCBwbHVnaW4gbmFtZSBhbmQgdmVyc2lvbi5cbiAgICAgKi9cbiAgICBQbHVnaW4udG9TdHJpbmcgPSBmdW5jdGlvbihwbHVnaW4pIHtcbiAgICAgICAgcmV0dXJuIHR5cGVvZiBwbHVnaW4gPT09ICdzdHJpbmcnID8gcGx1Z2luIDogKHBsdWdpbi5uYW1lIHx8ICdhbm9ueW1vdXMnKSArICdAJyArIChwbHVnaW4udmVyc2lvbiB8fCBwbHVnaW4ucmFuZ2UgfHwgJzAuMC4wJyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIHRoZSBvYmplY3QgbWVldHMgdGhlIG1pbmltdW0gc3RhbmRhcmQgdG8gYmUgY29uc2lkZXJlZCBhIHBsdWdpbi5cbiAgICAgKiBUaGlzIG1lYW5zIGl0IG11c3QgZGVmaW5lIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgKiAtIGBuYW1lYFxuICAgICAqIC0gYHZlcnNpb25gXG4gICAgICogLSBgaW5zdGFsbGBcbiAgICAgKiBAbWV0aG9kIGlzUGx1Z2luXG4gICAgICogQHBhcmFtIG9iaiB7fSBUaGUgb2JqIHRvIHRlc3QuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIHRoZSBvYmplY3QgY2FuIGJlIGNvbnNpZGVyZWQgYSBwbHVnaW4gb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGx1Z2luLmlzUGx1Z2luID0gZnVuY3Rpb24ob2JqKSB7XG4gICAgICAgIHJldHVybiBvYmogJiYgb2JqLm5hbWUgJiYgb2JqLnZlcnNpb24gJiYgb2JqLmluc3RhbGw7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYHRydWVgIGlmIGEgcGx1Z2luIHdpdGggdGhlIGdpdmVuIGBuYW1lYCBiZWVuIGluc3RhbGxlZCBvbiBgbW9kdWxlYC5cbiAgICAgKiBAbWV0aG9kIGlzVXNlZFxuICAgICAqIEBwYXJhbSBtb2R1bGUge30gVGhlIG1vZHVsZS5cbiAgICAgKiBAcGFyYW0gbmFtZSB7c3RyaW5nfSBUaGUgcGx1Z2luIG5hbWUuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIGEgcGx1Z2luIHdpdGggdGhlIGdpdmVuIGBuYW1lYCBiZWVuIGluc3RhbGxlZCBvbiBgbW9kdWxlYCwgb3RoZXJ3aXNlIGBmYWxzZWAuXG4gICAgICovXG4gICAgUGx1Z2luLmlzVXNlZCA9IGZ1bmN0aW9uKG1vZHVsZSwgbmFtZSkge1xuICAgICAgICByZXR1cm4gbW9kdWxlLnVzZWQuaW5kZXhPZihuYW1lKSA+IC0xO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIGB0cnVlYCBpZiBgcGx1Z2luLmZvcmAgaXMgYXBwbGljYWJsZSB0byBgbW9kdWxlYCBieSBjb21wYXJpbmcgYWdhaW5zdCBgbW9kdWxlLm5hbWVgIGFuZCBgbW9kdWxlLnZlcnNpb25gLlxuICAgICAqIElmIGBwbHVnaW4uZm9yYCBpcyBub3Qgc3BlY2lmaWVkIHRoZW4gaXQgaXMgYXNzdW1lZCB0byBiZSBhcHBsaWNhYmxlLlxuICAgICAqIFRoZSB2YWx1ZSBvZiBgcGx1Z2luLmZvcmAgaXMgYSBzdHJpbmcgb2YgdGhlIGZvcm1hdCBgJ21vZHVsZS1uYW1lJ2Agb3IgYCdtb2R1bGUtbmFtZUB2ZXJzaW9uJ2AuXG4gICAgICogQG1ldGhvZCBpc0ZvclxuICAgICAqIEBwYXJhbSBwbHVnaW4ge30gVGhlIHBsdWdpbi5cbiAgICAgKiBAcGFyYW0gbW9kdWxlIHt9IFRoZSBtb2R1bGUuXG4gICAgICogQHJldHVybiB7Ym9vbGVhbn0gYHRydWVgIGlmIGBwbHVnaW4uZm9yYCBpcyBhcHBsaWNhYmxlIHRvIGBtb2R1bGVgLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBQbHVnaW4uaXNGb3IgPSBmdW5jdGlvbihwbHVnaW4sIG1vZHVsZSkge1xuICAgICAgICB2YXIgcGFyc2VkID0gcGx1Z2luLmZvciAmJiBQbHVnaW4uZGVwZW5kZW5jeVBhcnNlKHBsdWdpbi5mb3IpO1xuICAgICAgICByZXR1cm4gIXBsdWdpbi5mb3IgfHwgKG1vZHVsZS5uYW1lID09PSBwYXJzZWQubmFtZSAmJiBQbHVnaW4udmVyc2lvblNhdGlzZmllcyhtb2R1bGUudmVyc2lvbiwgcGFyc2VkLnJhbmdlKSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEluc3RhbGxzIHRoZSBwbHVnaW5zIGJ5IGNhbGxpbmcgYHBsdWdpbi5pbnN0YWxsYCBvbiBlYWNoIHBsdWdpbiBzcGVjaWZpZWQgaW4gYHBsdWdpbnNgIGlmIHBhc3NlZCwgb3RoZXJ3aXNlIGBtb2R1bGUudXNlc2AuXG4gICAgICogRm9yIGluc3RhbGxpbmcgcGx1Z2lucyBvbiBgTWF0dGVyYCBzZWUgdGhlIGNvbnZlbmllbmNlIGZ1bmN0aW9uIGBNYXR0ZXIudXNlYC5cbiAgICAgKiBQbHVnaW5zIG1heSBiZSBzcGVjaWZpZWQgZWl0aGVyIGJ5IHRoZWlyIG5hbWUgb3IgYSByZWZlcmVuY2UgdG8gdGhlIHBsdWdpbiBvYmplY3QuXG4gICAgICogUGx1Z2lucyB0aGVtc2VsdmVzIG1heSBzcGVjaWZ5IGZ1cnRoZXIgZGVwZW5kZW5jaWVzLCBidXQgZWFjaCBwbHVnaW4gaXMgaW5zdGFsbGVkIG9ubHkgb25jZS5cbiAgICAgKiBPcmRlciBpcyBpbXBvcnRhbnQsIGEgdG9wb2xvZ2ljYWwgc29ydCBpcyBwZXJmb3JtZWQgdG8gZmluZCB0aGUgYmVzdCByZXN1bHRpbmcgb3JkZXIgb2YgaW5zdGFsbGF0aW9uLlxuICAgICAqIFRoaXMgc29ydGluZyBhdHRlbXB0cyB0byBzYXRpc2Z5IGV2ZXJ5IGRlcGVuZGVuY3kncyByZXF1ZXN0ZWQgb3JkZXJpbmcsIGJ1dCBtYXkgbm90IGJlIGV4YWN0IGluIGFsbCBjYXNlcy5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGxvZ3MgdGhlIHJlc3VsdGluZyBzdGF0dXMgb2YgZWFjaCBkZXBlbmRlbmN5IGluIHRoZSBjb25zb2xlLCBhbG9uZyB3aXRoIGFueSB3YXJuaW5ncy5cbiAgICAgKiAtIEEgZ3JlZW4gdGljayDinIUgaW5kaWNhdGVzIGEgZGVwZW5kZW5jeSB3YXMgcmVzb2x2ZWQgYW5kIGluc3RhbGxlZC5cbiAgICAgKiAtIEFuIG9yYW5nZSBkaWFtb25kIPCflLYgaW5kaWNhdGVzIGEgZGVwZW5kZW5jeSB3YXMgcmVzb2x2ZWQgYnV0IGEgd2FybmluZyB3YXMgdGhyb3duIGZvciBpdCBvciBvbmUgaWYgaXRzIGRlcGVuZGVuY2llcy5cbiAgICAgKiAtIEEgcmVkIGNyb3NzIOKdjCBpbmRpY2F0ZXMgYSBkZXBlbmRlbmN5IGNvdWxkIG5vdCBiZSByZXNvbHZlZC5cbiAgICAgKiBBdm9pZCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gbXVsdGlwbGUgdGltZXMgb24gdGhlIHNhbWUgbW9kdWxlIHVubGVzcyB5b3UgaW50ZW5kIHRvIG1hbnVhbGx5IGNvbnRyb2wgaW5zdGFsbGF0aW9uIG9yZGVyLlxuICAgICAqIEBtZXRob2QgdXNlXG4gICAgICogQHBhcmFtIG1vZHVsZSB7fSBUaGUgbW9kdWxlIGluc3RhbGwgcGx1Z2lucyBvbi5cbiAgICAgKiBAcGFyYW0gW3BsdWdpbnM9bW9kdWxlLnVzZXNdIHt9IFRoZSBwbHVnaW5zIHRvIGluc3RhbGwgb24gbW9kdWxlIChvcHRpb25hbCwgZGVmYXVsdHMgdG8gYG1vZHVsZS51c2VzYCkuXG4gICAgICovXG4gICAgUGx1Z2luLnVzZSA9IGZ1bmN0aW9uKG1vZHVsZSwgcGx1Z2lucykge1xuICAgICAgICBtb2R1bGUudXNlcyA9IChtb2R1bGUudXNlcyB8fCBbXSkuY29uY2F0KHBsdWdpbnMgfHwgW10pO1xuXG4gICAgICAgIGlmIChtb2R1bGUudXNlcy5sZW5ndGggPT09IDApIHtcbiAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4udXNlOicsIFBsdWdpbi50b1N0cmluZyhtb2R1bGUpLCAnZG9lcyBub3Qgc3BlY2lmeSBhbnkgZGVwZW5kZW5jaWVzIHRvIGluc3RhbGwuJyk7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgZGVwZW5kZW5jaWVzID0gUGx1Z2luLmRlcGVuZGVuY2llcyhtb2R1bGUpLFxuICAgICAgICAgICAgc29ydGVkRGVwZW5kZW5jaWVzID0gQ29tbW9uLnRvcG9sb2dpY2FsU29ydChkZXBlbmRlbmNpZXMpLFxuICAgICAgICAgICAgc3RhdHVzID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBzb3J0ZWREZXBlbmRlbmNpZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIGlmIChzb3J0ZWREZXBlbmRlbmNpZXNbaV0gPT09IG1vZHVsZS5uYW1lKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHZhciBwbHVnaW4gPSBQbHVnaW4ucmVzb2x2ZShzb3J0ZWREZXBlbmRlbmNpZXNbaV0pO1xuXG4gICAgICAgICAgICBpZiAoIXBsdWdpbikge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5wdXNoKCfinYwgJyArIHNvcnRlZERlcGVuZGVuY2llc1tpXSk7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChQbHVnaW4uaXNVc2VkKG1vZHVsZSwgcGx1Z2luLm5hbWUpKSB7XG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmICghUGx1Z2luLmlzRm9yKHBsdWdpbiwgbW9kdWxlKSkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuKCdQbHVnaW4udXNlOicsIFBsdWdpbi50b1N0cmluZyhwbHVnaW4pLCAnaXMgZm9yJywgcGx1Z2luLmZvciwgJ2J1dCBpbnN0YWxsZWQgb24nLCBQbHVnaW4udG9TdHJpbmcobW9kdWxlKSArICcuJyk7XG4gICAgICAgICAgICAgICAgcGx1Z2luLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocGx1Z2luLmluc3RhbGwpIHtcbiAgICAgICAgICAgICAgICBwbHVnaW4uaW5zdGFsbChtb2R1bGUpO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnVzZTonLCBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSwgJ2RvZXMgbm90IHNwZWNpZnkgYW4gaW5zdGFsbCBmdW5jdGlvbi4nKTtcbiAgICAgICAgICAgICAgICBwbHVnaW4uX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChwbHVnaW4uX3dhcm5lZCkge1xuICAgICAgICAgICAgICAgIHN0YXR1cy5wdXNoKCfwn5S2ICcgKyBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSk7XG4gICAgICAgICAgICAgICAgZGVsZXRlIHBsdWdpbi5fd2FybmVkO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBzdGF0dXMucHVzaCgn4pyFICcgKyBQbHVnaW4udG9TdHJpbmcocGx1Z2luKSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIG1vZHVsZS51c2VkLnB1c2gocGx1Z2luLm5hbWUpO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHN0YXR1cy5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBDb21tb24uaW5mbyhzdGF0dXMuam9pbignICAnKSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVjdXJzaXZlbHkgZmluZHMgYWxsIG9mIGEgbW9kdWxlJ3MgZGVwZW5kZW5jaWVzIGFuZCByZXR1cm5zIGEgZmxhdCBkZXBlbmRlbmN5IGdyYXBoLlxuICAgICAqIEBtZXRob2QgZGVwZW5kZW5jaWVzXG4gICAgICogQHBhcmFtIG1vZHVsZSB7fSBUaGUgbW9kdWxlLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gQSBkZXBlbmRlbmN5IGdyYXBoLlxuICAgICAqL1xuICAgIFBsdWdpbi5kZXBlbmRlbmNpZXMgPSBmdW5jdGlvbihtb2R1bGUsIHRyYWNrZWQpIHtcbiAgICAgICAgdmFyIHBhcnNlZEJhc2UgPSBQbHVnaW4uZGVwZW5kZW5jeVBhcnNlKG1vZHVsZSksXG4gICAgICAgICAgICBuYW1lID0gcGFyc2VkQmFzZS5uYW1lO1xuXG4gICAgICAgIHRyYWNrZWQgPSB0cmFja2VkIHx8IHt9O1xuXG4gICAgICAgIGlmIChuYW1lIGluIHRyYWNrZWQpIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIG1vZHVsZSA9IFBsdWdpbi5yZXNvbHZlKG1vZHVsZSkgfHwgbW9kdWxlO1xuXG4gICAgICAgIHRyYWNrZWRbbmFtZV0gPSBDb21tb24ubWFwKG1vZHVsZS51c2VzIHx8IFtdLCBmdW5jdGlvbihkZXBlbmRlbmN5KSB7XG4gICAgICAgICAgICBpZiAoUGx1Z2luLmlzUGx1Z2luKGRlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgICAgICAgUGx1Z2luLnJlZ2lzdGVyKGRlcGVuZGVuY3kpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgcGFyc2VkID0gUGx1Z2luLmRlcGVuZGVuY3lQYXJzZShkZXBlbmRlbmN5KSxcbiAgICAgICAgICAgICAgICByZXNvbHZlZCA9IFBsdWdpbi5yZXNvbHZlKGRlcGVuZGVuY3kpO1xuXG4gICAgICAgICAgICBpZiAocmVzb2x2ZWQgJiYgIVBsdWdpbi52ZXJzaW9uU2F0aXNmaWVzKHJlc29sdmVkLnZlcnNpb24sIHBhcnNlZC5yYW5nZSkpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybihcbiAgICAgICAgICAgICAgICAgICAgJ1BsdWdpbi5kZXBlbmRlbmNpZXM6JywgUGx1Z2luLnRvU3RyaW5nKHJlc29sdmVkKSwgJ2RvZXMgbm90IHNhdGlzZnknLFxuICAgICAgICAgICAgICAgICAgICBQbHVnaW4udG9TdHJpbmcocGFyc2VkKSwgJ3VzZWQgYnknLCBQbHVnaW4udG9TdHJpbmcocGFyc2VkQmFzZSkgKyAnLidcbiAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgcmVzb2x2ZWQuX3dhcm5lZCA9IHRydWU7XG4gICAgICAgICAgICAgICAgbW9kdWxlLl93YXJuZWQgPSB0cnVlO1xuICAgICAgICAgICAgfSBlbHNlIGlmICghcmVzb2x2ZWQpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2FybihcbiAgICAgICAgICAgICAgICAgICAgJ1BsdWdpbi5kZXBlbmRlbmNpZXM6JywgUGx1Z2luLnRvU3RyaW5nKGRlcGVuZGVuY3kpLCAndXNlZCBieScsXG4gICAgICAgICAgICAgICAgICAgIFBsdWdpbi50b1N0cmluZyhwYXJzZWRCYXNlKSwgJ2NvdWxkIG5vdCBiZSByZXNvbHZlZC4nXG4gICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgIG1vZHVsZS5fd2FybmVkID0gdHJ1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHBhcnNlZC5uYW1lO1xuICAgICAgICB9KTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IHRyYWNrZWRbbmFtZV0ubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIFBsdWdpbi5kZXBlbmRlbmNpZXModHJhY2tlZFtuYW1lXVtpXSwgdHJhY2tlZCk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdHJhY2tlZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgZGVwZW5kZW5jeSBzdHJpbmcgaW50byBpdHMgY29tcG9uZW50cy5cbiAgICAgKiBUaGUgYGRlcGVuZGVuY3lgIGlzIGEgc3RyaW5nIG9mIHRoZSBmb3JtYXQgYCdtb2R1bGUtbmFtZSdgIG9yIGAnbW9kdWxlLW5hbWVAdmVyc2lvbidgLlxuICAgICAqIFNlZSBkb2N1bWVudGF0aW9uIGZvciBgUGx1Z2luLnZlcnNpb25QYXJzZWAgZm9yIGEgZGVzY3JpcHRpb24gb2YgdGhlIGZvcm1hdC5cbiAgICAgKiBUaGlzIGZ1bmN0aW9uIGNhbiBhbHNvIGhhbmRsZSBkZXBlbmRlbmNpZXMgdGhhdCBhcmUgYWxyZWFkeSByZXNvbHZlZCAoZS5nLiBhIG1vZHVsZSBvYmplY3QpLlxuICAgICAqIEBtZXRob2QgZGVwZW5kZW5jeVBhcnNlXG4gICAgICogQHBhcmFtIGRlcGVuZGVuY3kge3N0cmluZ30gVGhlIGRlcGVuZGVuY3kgb2YgdGhlIGZvcm1hdCBgJ21vZHVsZS1uYW1lJ2Agb3IgYCdtb2R1bGUtbmFtZUB2ZXJzaW9uJ2AuXG4gICAgICogQHJldHVybiB7b2JqZWN0fSBUaGUgZGVwZW5kZW5jeSBwYXJzZWQgaW50byBpdHMgY29tcG9uZW50cy5cbiAgICAgKi9cbiAgICBQbHVnaW4uZGVwZW5kZW5jeVBhcnNlID0gZnVuY3Rpb24oZGVwZW5kZW5jeSkge1xuICAgICAgICBpZiAoQ29tbW9uLmlzU3RyaW5nKGRlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgICB2YXIgcGF0dGVybiA9IC9eW1xcdy1dKyhAKFxcKnxbXFxefl0/XFxkK1xcLlxcZCtcXC5cXGQrKC1bMC05QS1aYS16LStdKyk/KSk/JC87XG5cbiAgICAgICAgICAgIGlmICghcGF0dGVybi50ZXN0KGRlcGVuZGVuY3kpKSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1BsdWdpbi5kZXBlbmRlbmN5UGFyc2U6JywgZGVwZW5kZW5jeSwgJ2lzIG5vdCBhIHZhbGlkIGRlcGVuZGVuY3kgc3RyaW5nLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIG5hbWU6IGRlcGVuZGVuY3kuc3BsaXQoJ0AnKVswXSxcbiAgICAgICAgICAgICAgICByYW5nZTogZGVwZW5kZW5jeS5zcGxpdCgnQCcpWzFdIHx8ICcqJ1xuICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBuYW1lOiBkZXBlbmRlbmN5Lm5hbWUsXG4gICAgICAgICAgICByYW5nZTogZGVwZW5kZW5jeS5yYW5nZSB8fCBkZXBlbmRlbmN5LnZlcnNpb25cbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUGFyc2VzIGEgdmVyc2lvbiBzdHJpbmcgaW50byBpdHMgY29tcG9uZW50cy4gIFxuICAgICAqIFZlcnNpb25zIGFyZSBzdHJpY3RseSBvZiB0aGUgZm9ybWF0IGB4LnkuemAgKGFzIGluIFtzZW12ZXJdKGh0dHA6Ly9zZW12ZXIub3JnLykpLlxuICAgICAqIFZlcnNpb25zIG1heSBvcHRpb25hbGx5IGhhdmUgYSBwcmVyZWxlYXNlIHRhZyBpbiB0aGUgZm9ybWF0IGB4Lnkuei1hbHBoYWAuXG4gICAgICogUmFuZ2VzIGFyZSBhIHN0cmljdCBzdWJzZXQgb2YgW25wbSByYW5nZXNdKGh0dHBzOi8vZG9jcy5ucG1qcy5jb20vbWlzYy9zZW12ZXIjYWR2YW5jZWQtcmFuZ2Utc3ludGF4KS5cbiAgICAgKiBPbmx5IHRoZSBmb2xsb3dpbmcgcmFuZ2UgdHlwZXMgYXJlIHN1cHBvcnRlZDpcbiAgICAgKiAtIFRpbGRlIHJhbmdlcyBlLmcuIGB+MS4yLjNgXG4gICAgICogLSBDYXJldCByYW5nZXMgZS5nLiBgXjEuMi4zYFxuICAgICAqIC0gR3JlYXRlciB0aGFuIHJhbmdlcyBlLmcuIGA+MS4yLjNgXG4gICAgICogLSBHcmVhdGVyIHRoYW4gb3IgZXF1YWwgcmFuZ2VzIGUuZy4gYD49MS4yLjNgXG4gICAgICogLSBFeGFjdCB2ZXJzaW9uIGUuZy4gYDEuMi4zYFxuICAgICAqIC0gQW55IHZlcnNpb24gYCpgXG4gICAgICogQG1ldGhvZCB2ZXJzaW9uUGFyc2VcbiAgICAgKiBAcGFyYW0gcmFuZ2Uge3N0cmluZ30gVGhlIHZlcnNpb24gc3RyaW5nLlxuICAgICAqIEByZXR1cm4ge29iamVjdH0gVGhlIHZlcnNpb24gcmFuZ2UgcGFyc2VkIGludG8gaXRzIGNvbXBvbmVudHMuXG4gICAgICovXG4gICAgUGx1Z2luLnZlcnNpb25QYXJzZSA9IGZ1bmN0aW9uKHJhbmdlKSB7XG4gICAgICAgIHZhciBwYXR0ZXJuID0gL14oXFwqKXwoXFxefH58Pj18Pik/XFxzKigoXFxkKylcXC4oXFxkKylcXC4oXFxkKykpKC1bMC05QS1aYS16LStdKyk/JC87XG5cbiAgICAgICAgaWYgKCFwYXR0ZXJuLnRlc3QocmFuZ2UpKSB7XG4gICAgICAgICAgICBDb21tb24ud2FybignUGx1Z2luLnZlcnNpb25QYXJzZTonLCByYW5nZSwgJ2lzIG5vdCBhIHZhbGlkIHZlcnNpb24gb3IgcmFuZ2UuJyk7XG4gICAgICAgIH1cblxuICAgICAgICB2YXIgcGFydHMgPSBwYXR0ZXJuLmV4ZWMocmFuZ2UpO1xuICAgICAgICB2YXIgbWFqb3IgPSBOdW1iZXIocGFydHNbNF0pO1xuICAgICAgICB2YXIgbWlub3IgPSBOdW1iZXIocGFydHNbNV0pO1xuICAgICAgICB2YXIgcGF0Y2ggPSBOdW1iZXIocGFydHNbNl0pO1xuXG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICBpc1JhbmdlOiBCb29sZWFuKHBhcnRzWzFdIHx8IHBhcnRzWzJdKSxcbiAgICAgICAgICAgIHZlcnNpb246IHBhcnRzWzNdLFxuICAgICAgICAgICAgcmFuZ2U6IHJhbmdlLFxuICAgICAgICAgICAgb3BlcmF0b3I6IHBhcnRzWzFdIHx8IHBhcnRzWzJdIHx8ICcnLFxuICAgICAgICAgICAgbWFqb3I6IG1ham9yLFxuICAgICAgICAgICAgbWlub3I6IG1pbm9yLFxuICAgICAgICAgICAgcGF0Y2g6IHBhdGNoLFxuICAgICAgICAgICAgcGFydHM6IFttYWpvciwgbWlub3IsIHBhdGNoXSxcbiAgICAgICAgICAgIHByZXJlbGVhc2U6IHBhcnRzWzddLFxuICAgICAgICAgICAgbnVtYmVyOiBtYWpvciAqIDFlOCArIG1pbm9yICogMWU0ICsgcGF0Y2hcbiAgICAgICAgfTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBgdHJ1ZWAgaWYgYHZlcnNpb25gIHNhdGlzZmllcyB0aGUgZ2l2ZW4gYHJhbmdlYC5cbiAgICAgKiBTZWUgZG9jdW1lbnRhdGlvbiBmb3IgYFBsdWdpbi52ZXJzaW9uUGFyc2VgIGZvciBhIGRlc2NyaXB0aW9uIG9mIHRoZSBmb3JtYXQuXG4gICAgICogSWYgYSB2ZXJzaW9uIG9yIHJhbmdlIGlzIG5vdCBzcGVjaWZpZWQsIHRoZW4gYW55IHZlcnNpb24gKGAqYCkgaXMgYXNzdW1lZCB0byBzYXRpc2Z5LlxuICAgICAqIEBtZXRob2QgdmVyc2lvblNhdGlzZmllc1xuICAgICAqIEBwYXJhbSB2ZXJzaW9uIHtzdHJpbmd9IFRoZSB2ZXJzaW9uIHN0cmluZy5cbiAgICAgKiBAcGFyYW0gcmFuZ2Uge3N0cmluZ30gVGhlIHJhbmdlIHN0cmluZy5cbiAgICAgKiBAcmV0dXJuIHtib29sZWFufSBgdHJ1ZWAgaWYgYHZlcnNpb25gIHNhdGlzZmllcyBgcmFuZ2VgLCBvdGhlcndpc2UgYGZhbHNlYC5cbiAgICAgKi9cbiAgICBQbHVnaW4udmVyc2lvblNhdGlzZmllcyA9IGZ1bmN0aW9uKHZlcnNpb24sIHJhbmdlKSB7XG4gICAgICAgIHJhbmdlID0gcmFuZ2UgfHwgJyonO1xuXG4gICAgICAgIHZhciByID0gUGx1Z2luLnZlcnNpb25QYXJzZShyYW5nZSksXG4gICAgICAgICAgICB2ID0gUGx1Z2luLnZlcnNpb25QYXJzZSh2ZXJzaW9uKTtcblxuICAgICAgICBpZiAoci5pc1JhbmdlKSB7XG4gICAgICAgICAgICBpZiAoci5vcGVyYXRvciA9PT0gJyonIHx8IHZlcnNpb24gPT09ICcqJykge1xuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoci5vcGVyYXRvciA9PT0gJz4nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYubnVtYmVyID4gci5udW1iZXI7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnPj0nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYubnVtYmVyID49IHIubnVtYmVyO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoci5vcGVyYXRvciA9PT0gJ34nKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHYubWFqb3IgPT09IHIubWFqb3IgJiYgdi5taW5vciA9PT0gci5taW5vciAmJiB2LnBhdGNoID49IHIucGF0Y2g7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChyLm9wZXJhdG9yID09PSAnXicpIHtcbiAgICAgICAgICAgICAgICBpZiAoci5tYWpvciA+IDApIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHYubWFqb3IgPT09IHIubWFqb3IgJiYgdi5udW1iZXIgPj0gci5udW1iZXI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKHIubWlub3IgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2Lm1pbm9yID09PSByLm1pbm9yICYmIHYucGF0Y2ggPj0gci5wYXRjaDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gdi5wYXRjaCA9PT0gci5wYXRjaDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiB2ZXJzaW9uID09PSByYW5nZSB8fCB2ZXJzaW9uID09PSAnKic7XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE2ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5Db250YWN0YCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb2xsaXNpb24gY29udGFjdHMuXG4qXG4qIEBjbGFzcyBDb250YWN0XG4qL1xuXG52YXIgQ29udGFjdCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IENvbnRhY3Q7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZXMgYSBuZXcgY29udGFjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7dmVydGV4fSBbdmVydGV4XVxuICAgICAqIEByZXR1cm4ge2NvbnRhY3R9IEEgbmV3IGNvbnRhY3RcbiAgICAgKi9cbiAgICBDb250YWN0LmNyZWF0ZSA9IGZ1bmN0aW9uKHZlcnRleCkge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgdmVydGV4OiB2ZXJ0ZXgsXG4gICAgICAgICAgICBub3JtYWxJbXB1bHNlOiAwLFxuICAgICAgICAgICAgdGFuZ2VudEltcHVsc2U6IDBcbiAgICAgICAgfTtcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTcgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLkVuZ2luZWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIGFuZCBtYW5pcHVsYXRpbmcgZW5naW5lcy5cbiogQW4gZW5naW5lIGlzIGEgY29udHJvbGxlciB0aGF0IG1hbmFnZXMgdXBkYXRpbmcgdGhlIHNpbXVsYXRpb24gb2YgdGhlIHdvcmxkLlxuKiBTZWUgYE1hdHRlci5SdW5uZXJgIGZvciBhbiBvcHRpb25hbCBnYW1lIGxvb3AgdXRpbGl0eS5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIEVuZ2luZVxuKi9cblxudmFyIEVuZ2luZSA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEVuZ2luZTtcblxudmFyIFNsZWVwaW5nID0gX193ZWJwYWNrX3JlcXVpcmVfXyg3KTtcbnZhciBSZXNvbHZlciA9IF9fd2VicGFja19yZXF1aXJlX18oMTgpO1xudmFyIERldGVjdG9yID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMyk7XG52YXIgUGFpcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIENvbXBvc2l0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIEVuZ2luZS5fZGVsdGFNYXggPSAxMDAwIC8gNjA7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IGVuZ2luZS4gVGhlIG9wdGlvbnMgcGFyYW1ldGVyIGlzIGFuIG9iamVjdCB0aGF0IHNwZWNpZmllcyBhbnkgcHJvcGVydGllcyB5b3Ugd2lzaCB0byBvdmVycmlkZSB0aGUgZGVmYXVsdHMuXG4gICAgICogQWxsIHByb3BlcnRpZXMgaGF2ZSBkZWZhdWx0IHZhbHVlcywgYW5kIG1hbnkgYXJlIHByZS1jYWxjdWxhdGVkIGF1dG9tYXRpY2FsbHkgYmFzZWQgb24gb3RoZXIgcHJvcGVydGllcy5cbiAgICAgKiBTZWUgdGhlIHByb3BlcnRpZXMgc2VjdGlvbiBiZWxvdyBmb3IgZGV0YWlsZWQgaW5mb3JtYXRpb24gb24gd2hhdCB5b3UgY2FuIHBhc3MgdmlhIHRoZSBgb3B0aW9uc2Agb2JqZWN0LlxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IFtvcHRpb25zXVxuICAgICAqIEByZXR1cm4ge2VuZ2luZX0gZW5naW5lXG4gICAgICovXG4gICAgRW5naW5lLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgb3B0aW9ucyA9IG9wdGlvbnMgfHwge307XG5cbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgcG9zaXRpb25JdGVyYXRpb25zOiA2LFxuICAgICAgICAgICAgdmVsb2NpdHlJdGVyYXRpb25zOiA0LFxuICAgICAgICAgICAgY29uc3RyYWludEl0ZXJhdGlvbnM6IDIsXG4gICAgICAgICAgICBlbmFibGVTbGVlcGluZzogZmFsc2UsXG4gICAgICAgICAgICBldmVudHM6IFtdLFxuICAgICAgICAgICAgcGx1Z2luOiB7fSxcbiAgICAgICAgICAgIGdyYXZpdHk6IHtcbiAgICAgICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgICAgIHk6IDEsXG4gICAgICAgICAgICAgICAgc2NhbGU6IDAuMDAxXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgdGltaW5nOiB7XG4gICAgICAgICAgICAgICAgdGltZXN0YW1wOiAwLFxuICAgICAgICAgICAgICAgIHRpbWVTY2FsZTogMSxcbiAgICAgICAgICAgICAgICBsYXN0RGVsdGE6IDAsXG4gICAgICAgICAgICAgICAgbGFzdEVsYXBzZWQ6IDAsXG4gICAgICAgICAgICAgICAgbGFzdFVwZGF0ZXNQZXJGcmFtZTogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBlbmdpbmUgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBlbmdpbmUud29ybGQgPSBvcHRpb25zLndvcmxkIHx8IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ1dvcmxkJyB9KTtcbiAgICAgICAgZW5naW5lLnBhaXJzID0gb3B0aW9ucy5wYWlycyB8fCBQYWlycy5jcmVhdGUoKTtcbiAgICAgICAgZW5naW5lLmRldGVjdG9yID0gb3B0aW9ucy5kZXRlY3RvciB8fCBEZXRlY3Rvci5jcmVhdGUoKTtcbiAgICAgICAgZW5naW5lLmRldGVjdG9yLnBhaXJzID0gZW5naW5lLnBhaXJzO1xuXG4gICAgICAgIC8vIGZvciB0ZW1wb3JhcnkgYmFjayBjb21wYXRpYmlsaXR5IG9ubHlcbiAgICAgICAgZW5naW5lLmdyaWQgPSB7IGJ1Y2tldHM6IFtdIH07XG4gICAgICAgIGVuZ2luZS53b3JsZC5ncmF2aXR5ID0gZW5naW5lLmdyYXZpdHk7XG4gICAgICAgIGVuZ2luZS5icm9hZHBoYXNlID0gZW5naW5lLmdyaWQ7XG4gICAgICAgIGVuZ2luZS5tZXRyaWNzID0ge307XG4gICAgICAgIFxuICAgICAgICByZXR1cm4gZW5naW5lO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBNb3ZlcyB0aGUgc2ltdWxhdGlvbiBmb3J3YXJkIGluIHRpbWUgYnkgYGRlbHRhYCBtaWxsaXNlY29uZHMuXG4gICAgICogVHJpZ2dlcnMgYGJlZm9yZVVwZGF0ZWAsIGBiZWZvcmVTb2x2ZWAgYW5kIGBhZnRlclVwZGF0ZWAgZXZlbnRzLlxuICAgICAqIFRyaWdnZXJzIGBjb2xsaXNpb25TdGFydGAsIGBjb2xsaXNpb25BY3RpdmVgIGFuZCBgY29sbGlzaW9uRW5kYCBldmVudHMuXG4gICAgICogQG1ldGhvZCB1cGRhdGVcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IFtkZWx0YT0xNi42NjZdXG4gICAgICovXG4gICAgRW5naW5lLnVwZGF0ZSA9IGZ1bmN0aW9uKGVuZ2luZSwgZGVsdGEpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IENvbW1vbi5ub3coKTtcblxuICAgICAgICB2YXIgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICBkZXRlY3RvciA9IGVuZ2luZS5kZXRlY3RvcixcbiAgICAgICAgICAgIHBhaXJzID0gZW5naW5lLnBhaXJzLFxuICAgICAgICAgICAgdGltaW5nID0gZW5naW5lLnRpbWluZyxcbiAgICAgICAgICAgIHRpbWVzdGFtcCA9IHRpbWluZy50aW1lc3RhbXAsXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIC8vIHdhcm4gaWYgaGlnaCBkZWx0YVxuICAgICAgICBpZiAoZGVsdGEgPiBFbmdpbmUuX2RlbHRhTWF4KSB7XG4gICAgICAgICAgICBDb21tb24ud2Fybk9uY2UoXG4gICAgICAgICAgICAgICAgJ01hdHRlci5FbmdpbmUudXBkYXRlOiBkZWx0YSBhcmd1bWVudCBpcyByZWNvbW1lbmRlZCB0byBiZSBsZXNzIHRoYW4gb3IgZXF1YWwgdG8nLCBFbmdpbmUuX2RlbHRhTWF4LnRvRml4ZWQoMyksICdtcy4nXG4gICAgICAgICAgICApO1xuICAgICAgICB9XG5cbiAgICAgICAgZGVsdGEgPSB0eXBlb2YgZGVsdGEgIT09ICd1bmRlZmluZWQnID8gZGVsdGEgOiBDb21tb24uX2Jhc2VEZWx0YTtcbiAgICAgICAgZGVsdGEgKj0gdGltaW5nLnRpbWVTY2FsZTtcblxuICAgICAgICAvLyBpbmNyZW1lbnQgdGltZXN0YW1wXG4gICAgICAgIHRpbWluZy50aW1lc3RhbXAgKz0gZGVsdGE7XG4gICAgICAgIHRpbWluZy5sYXN0RGVsdGEgPSBkZWx0YTtcblxuICAgICAgICAvLyBjcmVhdGUgYW4gZXZlbnQgb2JqZWN0XG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogdGltaW5nLnRpbWVzdGFtcCxcbiAgICAgICAgICAgIGRlbHRhOiBkZWx0YVxuICAgICAgICB9O1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2JlZm9yZVVwZGF0ZScsIGV2ZW50KTtcblxuICAgICAgICAvLyBnZXQgYWxsIGJvZGllcyBhbmQgYWxsIGNvbnN0cmFpbnRzIGluIHRoZSB3b3JsZFxuICAgICAgICB2YXIgYWxsQm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyh3b3JsZCksXG4gICAgICAgICAgICBhbGxDb25zdHJhaW50cyA9IENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyh3b3JsZCk7XG5cbiAgICAgICAgLy8gaWYgdGhlIHdvcmxkIGhhcyBjaGFuZ2VkXG4gICAgICAgIGlmICh3b3JsZC5pc01vZGlmaWVkKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGRldGVjdG9yIGJvZGllc1xuICAgICAgICAgICAgRGV0ZWN0b3Iuc2V0Qm9kaWVzKGRldGVjdG9yLCBhbGxCb2RpZXMpO1xuXG4gICAgICAgICAgICAvLyByZXNldCBhbGwgY29tcG9zaXRlIG1vZGlmaWVkIGZsYWdzXG4gICAgICAgICAgICBDb21wb3NpdGUuc2V0TW9kaWZpZWQod29ybGQsIGZhbHNlLCBmYWxzZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgc2xlZXBpbmcgaWYgZW5hYmxlZFxuICAgICAgICBpZiAoZW5naW5lLmVuYWJsZVNsZWVwaW5nKVxuICAgICAgICAgICAgU2xlZXBpbmcudXBkYXRlKGFsbEJvZGllcywgZGVsdGEpO1xuXG4gICAgICAgIC8vIGFwcGx5IGdyYXZpdHkgdG8gYWxsIGJvZGllc1xuICAgICAgICBFbmdpbmUuX2JvZGllc0FwcGx5R3Jhdml0eShhbGxCb2RpZXMsIGVuZ2luZS5ncmF2aXR5KTtcblxuICAgICAgICAvLyB1cGRhdGUgYWxsIGJvZHkgcG9zaXRpb24gYW5kIHJvdGF0aW9uIGJ5IGludGVncmF0aW9uXG4gICAgICAgIGlmIChkZWx0YSA+IDApIHtcbiAgICAgICAgICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlKGFsbEJvZGllcywgZGVsdGEpO1xuICAgICAgICB9XG5cbiAgICAgICAgRXZlbnRzLnRyaWdnZXIoZW5naW5lLCAnYmVmb3JlU29sdmUnLCBldmVudCk7XG5cbiAgICAgICAgLy8gdXBkYXRlIGFsbCBjb25zdHJhaW50cyAoZmlyc3QgcGFzcylcbiAgICAgICAgQ29uc3RyYWludC5wcmVTb2x2ZUFsbChhbGxCb2RpZXMpO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgZW5naW5lLmNvbnN0cmFpbnRJdGVyYXRpb25zOyBpKyspIHtcbiAgICAgICAgICAgIENvbnN0cmFpbnQuc29sdmVBbGwoYWxsQ29uc3RyYWludHMsIGRlbHRhKTtcbiAgICAgICAgfVxuICAgICAgICBDb25zdHJhaW50LnBvc3RTb2x2ZUFsbChhbGxCb2RpZXMpO1xuXG4gICAgICAgIC8vIGZpbmQgYWxsIGNvbGxpc2lvbnNcbiAgICAgICAgdmFyIGNvbGxpc2lvbnMgPSBEZXRlY3Rvci5jb2xsaXNpb25zKGRldGVjdG9yKTtcblxuICAgICAgICAvLyB1cGRhdGUgY29sbGlzaW9uIHBhaXJzXG4gICAgICAgIFBhaXJzLnVwZGF0ZShwYWlycywgY29sbGlzaW9ucywgdGltZXN0YW1wKTtcblxuICAgICAgICAvLyB3YWtlIHVwIGJvZGllcyBpbnZvbHZlZCBpbiBjb2xsaXNpb25zXG4gICAgICAgIGlmIChlbmdpbmUuZW5hYmxlU2xlZXBpbmcpXG4gICAgICAgICAgICBTbGVlcGluZy5hZnRlckNvbGxpc2lvbnMocGFpcnMubGlzdCk7XG5cbiAgICAgICAgLy8gdHJpZ2dlciBjb2xsaXNpb24gZXZlbnRzXG4gICAgICAgIGlmIChwYWlycy5jb2xsaXNpb25TdGFydC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdjb2xsaXNpb25TdGFydCcsIHsgXG4gICAgICAgICAgICAgICAgcGFpcnM6IHBhaXJzLmNvbGxpc2lvblN0YXJ0LFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltaW5nLnRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBkZWx0YTogZGVsdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgLy8gaXRlcmF0aXZlbHkgcmVzb2x2ZSBwb3NpdGlvbiBiZXR3ZWVuIGNvbGxpc2lvbnNcbiAgICAgICAgdmFyIHBvc2l0aW9uRGFtcGluZyA9IENvbW1vbi5jbGFtcCgyMCAvIGVuZ2luZS5wb3NpdGlvbkl0ZXJhdGlvbnMsIDAsIDEpO1xuICAgICAgICBcbiAgICAgICAgUmVzb2x2ZXIucHJlU29sdmVQb3NpdGlvbihwYWlycy5saXN0KTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZ2luZS5wb3NpdGlvbkl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgUmVzb2x2ZXIuc29sdmVQb3NpdGlvbihwYWlycy5saXN0LCBkZWx0YSwgcG9zaXRpb25EYW1waW5nKTtcbiAgICAgICAgfVxuICAgICAgICBSZXNvbHZlci5wb3N0U29sdmVQb3NpdGlvbihhbGxCb2RpZXMpO1xuXG4gICAgICAgIC8vIHVwZGF0ZSBhbGwgY29uc3RyYWludHMgKHNlY29uZCBwYXNzKVxuICAgICAgICBDb25zdHJhaW50LnByZVNvbHZlQWxsKGFsbEJvZGllcyk7XG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBlbmdpbmUuY29uc3RyYWludEl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgQ29uc3RyYWludC5zb2x2ZUFsbChhbGxDb25zdHJhaW50cywgZGVsdGEpO1xuICAgICAgICB9XG4gICAgICAgIENvbnN0cmFpbnQucG9zdFNvbHZlQWxsKGFsbEJvZGllcyk7XG5cbiAgICAgICAgLy8gaXRlcmF0aXZlbHkgcmVzb2x2ZSB2ZWxvY2l0eSBiZXR3ZWVuIGNvbGxpc2lvbnNcbiAgICAgICAgUmVzb2x2ZXIucHJlU29sdmVWZWxvY2l0eShwYWlycy5saXN0KTtcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGVuZ2luZS52ZWxvY2l0eUl0ZXJhdGlvbnM7IGkrKykge1xuICAgICAgICAgICAgUmVzb2x2ZXIuc29sdmVWZWxvY2l0eShwYWlycy5saXN0LCBkZWx0YSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgYm9keSBzcGVlZCBhbmQgdmVsb2NpdHkgcHJvcGVydGllc1xuICAgICAgICBFbmdpbmUuX2JvZGllc1VwZGF0ZVZlbG9jaXRpZXMoYWxsQm9kaWVzKTtcblxuICAgICAgICAvLyB0cmlnZ2VyIGNvbGxpc2lvbiBldmVudHNcbiAgICAgICAgaWYgKHBhaXJzLmNvbGxpc2lvbkFjdGl2ZS5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdjb2xsaXNpb25BY3RpdmUnLCB7IFxuICAgICAgICAgICAgICAgIHBhaXJzOiBwYWlycy5jb2xsaXNpb25BY3RpdmUsIFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcDogdGltaW5nLnRpbWVzdGFtcCxcbiAgICAgICAgICAgICAgICBkZWx0YTogZGVsdGFcbiAgICAgICAgICAgIH0pO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHBhaXJzLmNvbGxpc2lvbkVuZC5sZW5ndGggPiAwKSB7XG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihlbmdpbmUsICdjb2xsaXNpb25FbmQnLCB7XG4gICAgICAgICAgICAgICAgcGFpcnM6IHBhaXJzLmNvbGxpc2lvbkVuZCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXA6IHRpbWluZy50aW1lc3RhbXAsXG4gICAgICAgICAgICAgICAgZGVsdGE6IGRlbHRhXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGNsZWFyIGZvcmNlIGJ1ZmZlcnNcbiAgICAgICAgRW5naW5lLl9ib2RpZXNDbGVhckZvcmNlcyhhbGxCb2RpZXMpO1xuXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKGVuZ2luZSwgJ2FmdGVyVXBkYXRlJywgZXZlbnQpO1xuXG4gICAgICAgIC8vIGxvZyB0aGUgdGltZSBlbGFwc2VkIGNvbXB1dGluZyB0aGlzIHVwZGF0ZVxuICAgICAgICBlbmdpbmUudGltaW5nLmxhc3RFbGFwc2VkID0gQ29tbW9uLm5vdygpIC0gc3RhcnRUaW1lO1xuXG4gICAgICAgIHJldHVybiBlbmdpbmU7XG4gICAgfTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBNZXJnZXMgdHdvIGVuZ2luZXMgYnkga2VlcGluZyB0aGUgY29uZmlndXJhdGlvbiBvZiBgZW5naW5lQWAgYnV0IHJlcGxhY2luZyB0aGUgd29ybGQgd2l0aCB0aGUgb25lIGZyb20gYGVuZ2luZUJgLlxuICAgICAqIEBtZXRob2QgbWVyZ2VcbiAgICAgKiBAcGFyYW0ge2VuZ2luZX0gZW5naW5lQVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVCXG4gICAgICovXG4gICAgRW5naW5lLm1lcmdlID0gZnVuY3Rpb24oZW5naW5lQSwgZW5naW5lQikge1xuICAgICAgICBDb21tb24uZXh0ZW5kKGVuZ2luZUEsIGVuZ2luZUIpO1xuICAgICAgICBcbiAgICAgICAgaWYgKGVuZ2luZUIud29ybGQpIHtcbiAgICAgICAgICAgIGVuZ2luZUEud29ybGQgPSBlbmdpbmVCLndvcmxkO1xuXG4gICAgICAgICAgICBFbmdpbmUuY2xlYXIoZW5naW5lQSk7XG5cbiAgICAgICAgICAgIHZhciBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKGVuZ2luZUEud29ybGQpO1xuXG4gICAgICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChib2R5LCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYm9keS5pZCA9IENvbW1vbi5uZXh0SWQoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGVuZ2luZSBwYWlycyBhbmQgZGV0ZWN0b3IuXG4gICAgICogQG1ldGhvZCBjbGVhclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cbiAgICBFbmdpbmUuY2xlYXIgPSBmdW5jdGlvbihlbmdpbmUpIHtcbiAgICAgICAgUGFpcnMuY2xlYXIoZW5naW5lLnBhaXJzKTtcbiAgICAgICAgRGV0ZWN0b3IuY2xlYXIoZW5naW5lLmRldGVjdG9yKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogWmVyb2VzIHRoZSBgYm9keS5mb3JjZWAgYW5kIGBib2R5LnRvcnF1ZWAgZm9yY2UgYnVmZmVycy5cbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNDbGVhckZvcmNlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzQ2xlYXJGb3JjZXMgPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgdmFyIGJvZGllc0xlbmd0aCA9IGJvZGllcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIC8vIHJlc2V0IGZvcmNlIGJ1ZmZlcnNcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueCA9IDA7XG4gICAgICAgICAgICBib2R5LmZvcmNlLnkgPSAwO1xuICAgICAgICAgICAgYm9keS50b3JxdWUgPSAwO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgZ3Jhdml0YXRpb25hbCBhY2NlbGVyYXRpb24gdG8gYWxsIGBib2RpZXNgLlxuICAgICAqIFRoaXMgbW9kZWxzIGEgW3VuaWZvcm0gZ3Jhdml0YXRpb25hbCBmaWVsZF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3Jhdml0eV9vZl9FYXJ0aCksIHNpbWlsYXIgdG8gbmVhciB0aGUgc3VyZmFjZSBvZiBhIHBsYW5ldC5cbiAgICAgKiBcbiAgICAgKiBAbWV0aG9kIF9ib2RpZXNBcHBseUdyYXZpdHlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gZ3Jhdml0eVxuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzQXBwbHlHcmF2aXR5ID0gZnVuY3Rpb24oYm9kaWVzLCBncmF2aXR5KSB7XG4gICAgICAgIHZhciBncmF2aXR5U2NhbGUgPSB0eXBlb2YgZ3Jhdml0eS5zY2FsZSAhPT0gJ3VuZGVmaW5lZCcgPyBncmF2aXR5LnNjYWxlIDogMC4wMDEsXG4gICAgICAgICAgICBib2RpZXNMZW5ndGggPSBib2RpZXMubGVuZ3RoO1xuXG4gICAgICAgIGlmICgoZ3Jhdml0eS54ID09PSAwICYmIGdyYXZpdHkueSA9PT0gMCkgfHwgZ3Jhdml0eVNjYWxlID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1N0YXRpYyB8fCBib2R5LmlzU2xlZXBpbmcpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGFkZCB0aGUgcmVzdWx0YW50IGZvcmNlIG9mIGdyYXZpdHlcbiAgICAgICAgICAgIGJvZHkuZm9yY2UueSArPSBib2R5Lm1hc3MgKiBncmF2aXR5LnkgKiBncmF2aXR5U2NhbGU7XG4gICAgICAgICAgICBib2R5LmZvcmNlLnggKz0gYm9keS5tYXNzICogZ3Jhdml0eS54ICogZ3Jhdml0eVNjYWxlO1xuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIEFwcGxpZXMgYEJvZHkudXBkYXRlYCB0byBhbGwgZ2l2ZW4gYGJvZGllc2AuXG4gICAgICogQG1ldGhvZCBfYm9kaWVzVXBkYXRlXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGRlbHRhIFRoZSBhbW91bnQgb2YgdGltZSBlbGFwc2VkIGJldHdlZW4gdXBkYXRlc1xuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlID0gZnVuY3Rpb24oYm9kaWVzLCBkZWx0YSkge1xuICAgICAgICB2YXIgYm9kaWVzTGVuZ3RoID0gYm9kaWVzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaXNTdGF0aWMgfHwgYm9keS5pc1NsZWVwaW5nKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBCb2R5LnVwZGF0ZShib2R5LCBkZWx0YSk7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQXBwbGllcyBgQm9keS51cGRhdGVWZWxvY2l0aWVzYCB0byBhbGwgZ2l2ZW4gYGJvZGllc2AuXG4gICAgICogQG1ldGhvZCBfYm9kaWVzVXBkYXRlVmVsb2NpdGllc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqL1xuICAgIEVuZ2luZS5fYm9kaWVzVXBkYXRlVmVsb2NpdGllcyA9IGZ1bmN0aW9uKGJvZGllcykge1xuICAgICAgICB2YXIgYm9kaWVzTGVuZ3RoID0gYm9kaWVzLmxlbmd0aDtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBCb2R5LnVwZGF0ZVZlbG9jaXRpZXMoYm9kaWVzW2ldKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBIGRlcHJlY2F0ZWQgYWxpYXMgZm9yIGBSdW5uZXIucnVuYCwgdXNlIGBNYXR0ZXIuUnVubmVyLnJ1bihlbmdpbmUpYCBpbnN0ZWFkIGFuZCBzZWUgYE1hdHRlci5SdW5uZXJgIGZvciBtb3JlIGluZm9ybWF0aW9uLlxuICAgICAqIEBkZXByZWNhdGVkIHVzZSBNYXR0ZXIuUnVubmVyLnJ1bihlbmdpbmUpIGluc3RlYWRcbiAgICAgKiBAbWV0aG9kIHJ1blxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQganVzdCBiZWZvcmUgYW4gdXBkYXRlXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVVwZGF0ZVxuICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQuZGVsdGEgVGhlIGRlbHRhIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHZhbHVlIHVzZWQgaW4gdGhlIHVwZGF0ZVxuICAgICogQHBhcmFtIHtlbmdpbmV9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGJvZGllcyB1cGRhdGVkIGJhc2VkIG9uIHRoZWlyIHZlbG9jaXR5IGFuZCBmb3JjZXMsIGJ1dCBiZWZvcmUgYW55IGNvbGxpc2lvbiBkZXRlY3Rpb24sIGNvbnN0cmFpbnRzIGFuZCByZXNvbHZpbmcgZXRjLlxuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVTb2x2ZVxuICAgICogQHBhcmFtIHtvYmplY3R9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQuZGVsdGEgVGhlIGRlbHRhIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHZhbHVlIHVzZWQgaW4gdGhlIHVwZGF0ZVxuICAgICogQHBhcmFtIHtlbmdpbmV9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIGVuZ2luZSB1cGRhdGUgYW5kIGFsbCBjb2xsaXNpb24gZXZlbnRzXG4gICAgKlxuICAgICogQGV2ZW50IGFmdGVyVXBkYXRlXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC5kZWx0YSBUaGUgZGVsdGEgdGltZSBpbiBtaWxsaXNlY29uZHMgdmFsdWUgdXNlZCBpbiB0aGUgdXBkYXRlXG4gICAgKiBAcGFyYW0ge2VuZ2luZX0gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGhhdmUgc3RhcnRlZCB0byBjb2xsaWRlIGluIHRoZSBjdXJyZW50IHRpY2sgKGlmIGFueSlcbiAgICAqXG4gICAgKiBAZXZlbnQgY29sbGlzaW9uU3RhcnRcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7cGFpcltdfSBldmVudC5wYWlycyBMaXN0IG9mIGFmZmVjdGVkIHBhaXJzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC5kZWx0YSBUaGUgZGVsdGEgdGltZSBpbiBtaWxsaXNlY29uZHMgdmFsdWUgdXNlZCBpbiB0aGUgdXBkYXRlXG4gICAgKiBAcGFyYW0ge2VuZ2luZX0gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGFyZSBjb2xsaWRpbmcgaW4gdGhlIGN1cnJlbnQgdGljayAoaWYgYW55KVxuICAgICpcbiAgICAqIEBldmVudCBjb2xsaXNpb25BY3RpdmVcbiAgICAqIEBwYXJhbSB7b2JqZWN0fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7cGFpcltdfSBldmVudC5wYWlycyBMaXN0IG9mIGFmZmVjdGVkIHBhaXJzXG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQudGltZXN0YW1wIFRoZSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC5kZWx0YSBUaGUgZGVsdGEgdGltZSBpbiBtaWxsaXNlY29uZHMgdmFsdWUgdXNlZCBpbiB0aGUgdXBkYXRlXG4gICAgKiBAcGFyYW0ge2VuZ2luZX0gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHtzdHJpbmd9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZW5naW5lIHVwZGF0ZSwgcHJvdmlkZXMgYSBsaXN0IG9mIGFsbCBwYWlycyB0aGF0IGhhdmUgZW5kZWQgY29sbGlzaW9uIGluIHRoZSBjdXJyZW50IHRpY2sgKGlmIGFueSlcbiAgICAqXG4gICAgKiBAZXZlbnQgY29sbGlzaW9uRW5kXG4gICAgKiBAcGFyYW0ge29iamVjdH0gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge3BhaXJbXX0gZXZlbnQucGFpcnMgTGlzdCBvZiBhZmZlY3RlZCBwYWlyc1xuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge251bWJlcn0gZXZlbnQuZGVsdGEgVGhlIGRlbHRhIHRpbWUgaW4gbWlsbGlzZWNvbmRzIHZhbHVlIHVzZWQgaW4gdGhlIHVwZGF0ZVxuICAgICogQHBhcmFtIHtlbmdpbmV9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7c3RyaW5nfSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBwb3NpdGlvbiBpdGVyYXRpb25zIHRvIHBlcmZvcm0gZWFjaCB1cGRhdGUuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoaWdoZXIgcXVhbGl0eSB0aGUgc2ltdWxhdGlvbiB3aWxsIGJlIGF0IHRoZSBleHBlbnNlIG9mIHBlcmZvcm1hbmNlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBvc2l0aW9uSXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDZcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiB2ZWxvY2l0eSBpdGVyYXRpb25zIHRvIHBlcmZvcm0gZWFjaCB1cGRhdGUuXG4gICAgICogVGhlIGhpZ2hlciB0aGUgdmFsdWUsIHRoZSBoaWdoZXIgcXVhbGl0eSB0aGUgc2ltdWxhdGlvbiB3aWxsIGJlIGF0IHRoZSBleHBlbnNlIG9mIHBlcmZvcm1hbmNlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHZlbG9jaXR5SXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGludGVnZXIgYE51bWJlcmAgdGhhdCBzcGVjaWZpZXMgdGhlIG51bWJlciBvZiBjb25zdHJhaW50IGl0ZXJhdGlvbnMgdG8gcGVyZm9ybSBlYWNoIHVwZGF0ZS5cbiAgICAgKiBUaGUgaGlnaGVyIHRoZSB2YWx1ZSwgdGhlIGhpZ2hlciBxdWFsaXR5IHRoZSBzaW11bGF0aW9uIHdpbGwgYmUgYXQgdGhlIGV4cGVuc2Ugb2YgcGVyZm9ybWFuY2UuXG4gICAgICogVGhlIGRlZmF1bHQgdmFsdWUgb2YgYDJgIGlzIHVzdWFsbHkgdmVyeSBhZGVxdWF0ZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb25zdHJhaW50SXRlcmF0aW9uc1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHNwZWNpZmllcyB3aGV0aGVyIHRoZSBlbmdpbmUgc2hvdWxkIGFsbG93IHNsZWVwaW5nIHZpYSB0aGUgYE1hdHRlci5TbGVlcGluZ2AgbW9kdWxlLlxuICAgICAqIFNsZWVwaW5nIGNhbiBpbXByb3ZlIHN0YWJpbGl0eSBhbmQgcGVyZm9ybWFuY2UsIGJ1dCBvZnRlbiBhdCB0aGUgZXhwZW5zZSBvZiBhY2N1cmFjeS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmFibGVTbGVlcGluZ1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gYE9iamVjdGAgY29udGFpbmluZyBwcm9wZXJ0aWVzIHJlZ2FyZGluZyB0aGUgdGltaW5nIHN5c3RlbXMgb2YgdGhlIGVuZ2luZS4gXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBOdW1iZXJgIHRoYXQgc3BlY2lmaWVzIHRoZSBnbG9iYWwgc2NhbGluZyBmYWN0b3Igb2YgdGltZSBmb3IgYWxsIGJvZGllcy5cbiAgICAgKiBBIHZhbHVlIG9mIGAwYCBmcmVlemVzIHRoZSBzaW11bGF0aW9uLlxuICAgICAqIEEgdmFsdWUgb2YgYDAuMWAgZ2l2ZXMgYSBzbG93LW1vdGlvbiBlZmZlY3QuXG4gICAgICogQSB2YWx1ZSBvZiBgMS4yYCBnaXZlcyBhIHNwZWVkLXVwIGVmZmVjdC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcudGltZVNjYWxlXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHNwZWNpZmllcyB0aGUgY3VycmVudCBzaW11bGF0aW9uLXRpbWUgaW4gbWlsbGlzZWNvbmRzIHN0YXJ0aW5nIGZyb20gYDBgLiBcbiAgICAgKiBJdCBpcyBpbmNyZW1lbnRlZCBvbiBldmVyeSBgRW5naW5lLnVwZGF0ZWAgYnkgdGhlIGdpdmVuIGBkZWx0YWAgYXJndW1lbnQuIFxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcudGltZXN0YW1wXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHJlcHJlc2VudHMgdGhlIHRvdGFsIGV4ZWN1dGlvbiB0aW1lIGVsYXBzZWQgZHVyaW5nIHRoZSBsYXN0IGBFbmdpbmUudXBkYXRlYCBpbiBtaWxsaXNlY29uZHMuXG4gICAgICogSXQgaXMgdXBkYXRlZCBieSB0aW1pbmcgZnJvbSB0aGUgc3RhcnQgb2YgdGhlIGxhc3QgYEVuZ2luZS51cGRhdGVgIGNhbGwgdW50aWwgaXQgZW5kcy5cbiAgICAgKlxuICAgICAqIFRoaXMgdmFsdWUgd2lsbCBhbHNvIGluY2x1ZGUgdGhlIHRvdGFsIGV4ZWN1dGlvbiB0aW1lIG9mIGFsbCBldmVudCBoYW5kbGVycyBkaXJlY3RseSBvciBpbmRpcmVjdGx5IHRyaWdnZXJlZCBieSB0aGUgZW5naW5lIHVwZGF0ZS5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgdGltaW5nLmxhc3RFbGFwc2VkXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTnVtYmVyYCB0aGF0IHJlcHJlc2VudHMgdGhlIGBkZWx0YWAgdmFsdWUgdXNlZCBpbiB0aGUgbGFzdCBlbmdpbmUgdXBkYXRlLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSB0aW1pbmcubGFzdERlbHRhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBgTWF0dGVyLkRldGVjdG9yYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBkZXRlY3RvclxuICAgICAqIEB0eXBlIGRldGVjdG9yXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuRGV0ZWN0b3IgaW5zdGFuY2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYE1hdHRlci5HcmlkYCBpbnN0YW5jZS5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IGBlbmdpbmUuZGV0ZWN0b3JgXG4gICAgICogQHByb3BlcnR5IGdyaWRcbiAgICAgKiBAdHlwZSBncmlkXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuR3JpZCBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUmVwbGFjZWQgYnkgYW5kIG5vdyBhbGlhcyBmb3IgYGVuZ2luZS5ncmlkYC5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IGBlbmdpbmUuZGV0ZWN0b3JgXG4gICAgICogQHByb3BlcnR5IGJyb2FkcGhhc2VcbiAgICAgKiBAdHlwZSBncmlkXG4gICAgICogQGRlZmF1bHQgYSBNYXR0ZXIuR3JpZCBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIHJvb3QgYE1hdHRlci5Db21wb3NpdGVgIGluc3RhbmNlIHRoYXQgd2lsbCBjb250YWluIGFsbCBib2RpZXMsIGNvbnN0cmFpbnRzIGFuZCBvdGhlciBjb21wb3NpdGVzIHRvIGJlIHNpbXVsYXRlZCBieSB0aGlzIGVuZ2luZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB3b3JsZFxuICAgICAqIEB0eXBlIGNvbXBvc2l0ZVxuICAgICAqIEBkZWZhdWx0IGEgTWF0dGVyLkNvbXBvc2l0ZSBpbnN0YW5jZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQW4gb2JqZWN0IHJlc2VydmVkIGZvciBzdG9yaW5nIHBsdWdpbi1zcGVjaWZpYyBwcm9wZXJ0aWVzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHBsdWdpblxuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBncmF2aXRhdGlvbmFsIGFjY2VsZXJhdGlvbiBhcHBsaWVkIHRvIGFsbCBib2RpZXMgaW4gYGVuZ2luZS53b3JsZGAgb24gZXZlcnkgdXBkYXRlLlxuICAgICAqIFxuICAgICAqIFRoaXMgbW9kZWxzIGEgW3VuaWZvcm0gZ3Jhdml0YXRpb25hbCBmaWVsZF0oaHR0cHM6Ly9lbi53aWtpcGVkaWEub3JnL3dpa2kvR3Jhdml0eV9vZl9FYXJ0aCksIHNpbWlsYXIgdG8gbmVhciB0aGUgc3VyZmFjZSBvZiBhIHBsYW5ldC4gRm9yIGdyYXZpdHkgaW4gb3RoZXIgY29udGV4dHMsIGRpc2FibGUgdGhpcyBhbmQgYXBwbHkgZm9yY2VzIGFzIG5lZWRlZC5cbiAgICAgKiBcbiAgICAgKiBUbyBkaXNhYmxlIHNldCB0aGUgYHNjYWxlYCBjb21wb25lbnQgdG8gYDBgLlxuICAgICAqIFxuICAgICAqIFRoaXMgaXMgc3BsaXQgaW50byB0aHJlZSBjb21wb25lbnRzIGZvciBlYXNlIG9mIHVzZTogIFxuICAgICAqIGEgbm9ybWFsaXNlZCBkaXJlY3Rpb24gKGB4YCBhbmQgYHlgKSBhbmQgbWFnbml0dWRlIChgc2NhbGVgKS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5XG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0YXRpb25hbCBkaXJlY3Rpb24gbm9ybWFsIGB4YCBjb21wb25lbnQsIHRvIGJlIG11bHRpcGxpZWQgYnkgYGdyYXZpdHkuc2NhbGVgLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5LnhcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKiBAZGVmYXVsdCAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgZ3Jhdml0YXRpb25hbCBkaXJlY3Rpb24gbm9ybWFsIGB5YCBjb21wb25lbnQsIHRvIGJlIG11bHRpcGxpZWQgYnkgYGdyYXZpdHkuc2NhbGVgLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGdyYXZpdHkueVxuICAgICAqIEB0eXBlIG9iamVjdFxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBtYWduaXR1ZGUgb2YgdGhlIGdyYXZpdGF0aW9uYWwgYWNjZWxlcmF0aW9uLlxuICAgICAqIFxuICAgICAqIEBwcm9wZXJ0eSBncmF2aXR5LnNjYWxlXG4gICAgICogQHR5cGUgb2JqZWN0XG4gICAgICogQGRlZmF1bHQgMC4wMDFcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDE4ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5SZXNvbHZlcmAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIHJlc29sdmluZyBjb2xsaXNpb24gcGFpcnMuXG4qXG4qIEBjbGFzcyBSZXNvbHZlclxuKi9cblxudmFyIFJlc29sdmVyID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUmVzb2x2ZXI7XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICBSZXNvbHZlci5fcmVzdGluZ1RocmVzaCA9IDI7XG4gICAgUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2hUYW5nZW50ID0gTWF0aC5zcXJ0KDYpO1xuICAgIFJlc29sdmVyLl9wb3NpdGlvbkRhbXBlbiA9IDAuOTtcbiAgICBSZXNvbHZlci5fcG9zaXRpb25XYXJtaW5nID0gMC44O1xuICAgIFJlc29sdmVyLl9mcmljdGlvbk5vcm1hbE11bHRpcGxpZXIgPSA1O1xuICAgIFJlc29sdmVyLl9mcmljdGlvbk1heFN0YXRpYyA9IE51bWJlci5NQVhfVkFMVUU7XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHBhaXJzIGZvciBwb3NpdGlvbiBzb2x2aW5nLlxuICAgICAqIEBtZXRob2QgcHJlU29sdmVQb3NpdGlvblxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqL1xuICAgIFJlc29sdmVyLnByZVNvbHZlUG9zaXRpb24gPSBmdW5jdGlvbihwYWlycykge1xuICAgICAgICB2YXIgaSxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBjb250YWN0Q291bnQsXG4gICAgICAgICAgICBwYWlyc0xlbmd0aCA9IHBhaXJzLmxlbmd0aDtcblxuICAgICAgICAvLyBmaW5kIHRvdGFsIGNvbnRhY3RzIG9uIGVhY2ggYm9keVxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGNvbnRhY3RDb3VudCA9IHBhaXIuY29udGFjdENvdW50O1xuICAgICAgICAgICAgcGFpci5jb2xsaXNpb24ucGFyZW50QS50b3RhbENvbnRhY3RzICs9IGNvbnRhY3RDb3VudDtcbiAgICAgICAgICAgIHBhaXIuY29sbGlzaW9uLnBhcmVudEIudG90YWxDb250YWN0cyArPSBjb250YWN0Q291bnQ7XG4gICAgICAgIH1cbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRmluZCBhIHNvbHV0aW9uIGZvciBwYWlyIHBvc2l0aW9ucy5cbiAgICAgKiBAbWV0aG9kIHNvbHZlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW2RhbXBpbmc9MV1cbiAgICAgKi9cbiAgICBSZXNvbHZlci5zb2x2ZVBvc2l0aW9uID0gZnVuY3Rpb24ocGFpcnMsIGRlbHRhLCBkYW1waW5nKSB7XG4gICAgICAgIHZhciBpLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBub3JtYWwsXG4gICAgICAgICAgICBjb250YWN0U2hhcmUsXG4gICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UsXG4gICAgICAgICAgICBwb3NpdGlvbkRhbXBlbiA9IFJlc29sdmVyLl9wb3NpdGlvbkRhbXBlbiAqIChkYW1waW5nIHx8IDEpLFxuICAgICAgICAgICAgc2xvcERhbXBlbiA9IENvbW1vbi5jbGFtcChkZWx0YSAvIENvbW1vbi5fYmFzZURlbHRhLCAwLCAxKSxcbiAgICAgICAgICAgIHBhaXJzTGVuZ3RoID0gcGFpcnMubGVuZ3RoO1xuXG4gICAgICAgIC8vIGZpbmQgaW1wdWxzZXMgcmVxdWlyZWQgdG8gcmVzb2x2ZSBwZW5ldHJhdGlvblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBO1xuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QjtcbiAgICAgICAgICAgIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWw7XG5cbiAgICAgICAgICAgIC8vIGdldCBjdXJyZW50IHNlcGFyYXRpb24gYmV0d2VlbiBib2R5IGVkZ2VzIGludm9sdmVkIGluIGNvbGxpc2lvblxuICAgICAgICAgICAgcGFpci5zZXBhcmF0aW9uID0gXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uLmRlcHRoICsgbm9ybWFsLnggKiAoYm9keUIucG9zaXRpb25JbXB1bHNlLnggLSBib2R5QS5wb3NpdGlvbkltcHVsc2UueClcbiAgICAgICAgICAgICAgICArIG5vcm1hbC55ICogKGJvZHlCLnBvc2l0aW9uSW1wdWxzZS55IC0gYm9keUEucG9zaXRpb25JbXB1bHNlLnkpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgcGFpciA9IHBhaXJzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgY29sbGlzaW9uID0gcGFpci5jb2xsaXNpb247XG4gICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBO1xuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QjtcbiAgICAgICAgICAgIG5vcm1hbCA9IGNvbGxpc2lvbi5ub3JtYWw7XG4gICAgICAgICAgICBwb3NpdGlvbkltcHVsc2UgPSBwYWlyLnNlcGFyYXRpb24gLSBwYWlyLnNsb3AgKiBzbG9wRGFtcGVuO1xuXG4gICAgICAgICAgICBpZiAoYm9keUEuaXNTdGF0aWMgfHwgYm9keUIuaXNTdGF0aWMpXG4gICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlICo9IDI7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmICghKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgY29udGFjdFNoYXJlID0gcG9zaXRpb25EYW1wZW4gLyBib2R5QS50b3RhbENvbnRhY3RzO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uSW1wdWxzZS54ICs9IG5vcm1hbC54ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uSW1wdWxzZS55ICs9IG5vcm1hbC55ICogcG9zaXRpb25JbXB1bHNlICogY29udGFjdFNoYXJlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoIShib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgIGNvbnRhY3RTaGFyZSA9IHBvc2l0aW9uRGFtcGVuIC8gYm9keUIudG90YWxDb250YWN0cztcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvbkltcHVsc2UueCAtPSBub3JtYWwueCAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgICAgICBib2R5Qi5wb3NpdGlvbkltcHVsc2UueSAtPSBub3JtYWwueSAqIHBvc2l0aW9uSW1wdWxzZSAqIGNvbnRhY3RTaGFyZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBseSBwb3NpdGlvbiByZXNvbHV0aW9uLlxuICAgICAqIEBtZXRob2QgcG9zdFNvbHZlUG9zaXRpb25cbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICovXG4gICAgUmVzb2x2ZXIucG9zdFNvbHZlUG9zaXRpb24gPSBmdW5jdGlvbihib2RpZXMpIHtcbiAgICAgICAgdmFyIHBvc2l0aW9uV2FybWluZyA9IFJlc29sdmVyLl9wb3NpdGlvbldhcm1pbmcsXG4gICAgICAgICAgICBib2RpZXNMZW5ndGggPSBib2RpZXMubGVuZ3RoLFxuICAgICAgICAgICAgdmVydGljZXNUcmFuc2xhdGUgPSBWZXJ0aWNlcy50cmFuc2xhdGUsXG4gICAgICAgICAgICBib3VuZHNVcGRhdGUgPSBCb3VuZHMudXBkYXRlO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzTGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZSA9IGJvZHkucG9zaXRpb25JbXB1bHNlLFxuICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZVggPSBwb3NpdGlvbkltcHVsc2UueCxcbiAgICAgICAgICAgICAgICBwb3NpdGlvbkltcHVsc2VZID0gcG9zaXRpb25JbXB1bHNlLnksXG4gICAgICAgICAgICAgICAgdmVsb2NpdHkgPSBib2R5LnZlbG9jaXR5O1xuXG4gICAgICAgICAgICAvLyByZXNldCBjb250YWN0IGNvdW50XG4gICAgICAgICAgICBib2R5LnRvdGFsQ29udGFjdHMgPSAwO1xuXG4gICAgICAgICAgICBpZiAocG9zaXRpb25JbXB1bHNlWCAhPT0gMCB8fCBwb3NpdGlvbkltcHVsc2VZICE9PSAwKSB7XG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGJvZHkgZ2VvbWV0cnlcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gMDsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICB2ZXJ0aWNlc1RyYW5zbGF0ZShwYXJ0LnZlcnRpY2VzLCBwb3NpdGlvbkltcHVsc2UpO1xuICAgICAgICAgICAgICAgICAgICBib3VuZHNVcGRhdGUocGFydC5ib3VuZHMsIHBhcnQudmVydGljZXMsIHZlbG9jaXR5KTtcbiAgICAgICAgICAgICAgICAgICAgcGFydC5wb3NpdGlvbi54ICs9IHBvc2l0aW9uSW1wdWxzZVg7XG4gICAgICAgICAgICAgICAgICAgIHBhcnQucG9zaXRpb24ueSArPSBwb3NpdGlvbkltcHVsc2VZO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIG1vdmUgdGhlIGJvZHkgd2l0aG91dCBjaGFuZ2luZyB2ZWxvY2l0eVxuICAgICAgICAgICAgICAgIGJvZHkucG9zaXRpb25QcmV2LnggKz0gcG9zaXRpb25JbXB1bHNlWDtcbiAgICAgICAgICAgICAgICBib2R5LnBvc2l0aW9uUHJldi55ICs9IHBvc2l0aW9uSW1wdWxzZVk7XG5cbiAgICAgICAgICAgICAgICBpZiAocG9zaXRpb25JbXB1bHNlWCAqIHZlbG9jaXR5LnggKyBwb3NpdGlvbkltcHVsc2VZICogdmVsb2NpdHkueSA8IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVzZXQgY2FjaGVkIGltcHVsc2UgaWYgdGhlIGJvZHkgaGFzIHZlbG9jaXR5IGFsb25nIGl0XG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZS54ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlLnkgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHdhcm0gdGhlIG5leHQgaXRlcmF0aW9uXG4gICAgICAgICAgICAgICAgICAgIHBvc2l0aW9uSW1wdWxzZS54ICo9IHBvc2l0aW9uV2FybWluZztcbiAgICAgICAgICAgICAgICAgICAgcG9zaXRpb25JbXB1bHNlLnkgKj0gcG9zaXRpb25XYXJtaW5nO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQcmVwYXJlIHBhaXJzIGZvciB2ZWxvY2l0eSBzb2x2aW5nLlxuICAgICAqIEBtZXRob2QgcHJlU29sdmVWZWxvY2l0eVxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqL1xuICAgIFJlc29sdmVyLnByZVNvbHZlVmVsb2NpdHkgPSBmdW5jdGlvbihwYWlycykge1xuICAgICAgICB2YXIgcGFpcnNMZW5ndGggPSBwYWlycy5sZW5ndGgsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcbiAgICAgICAgXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGNvbnRhY3RzID0gcGFpci5jb250YWN0cyxcbiAgICAgICAgICAgICAgICBjb250YWN0Q291bnQgPSBwYWlyLmNvbnRhY3RDb3VudCxcbiAgICAgICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbixcbiAgICAgICAgICAgICAgICBib2R5QSA9IGNvbGxpc2lvbi5wYXJlbnRBLFxuICAgICAgICAgICAgICAgIGJvZHlCID0gY29sbGlzaW9uLnBhcmVudEIsXG4gICAgICAgICAgICAgICAgbm9ybWFsID0gY29sbGlzaW9uLm5vcm1hbCxcbiAgICAgICAgICAgICAgICB0YW5nZW50ID0gY29sbGlzaW9uLnRhbmdlbnQ7XG4gICAgXG4gICAgICAgICAgICAvLyByZXNvbHZlIGVhY2ggY29udGFjdFxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvbnRhY3RDb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhY3QgPSBjb250YWN0c1tqXSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdFZlcnRleCA9IGNvbnRhY3QudmVydGV4LFxuICAgICAgICAgICAgICAgICAgICBub3JtYWxJbXB1bHNlID0gY29udGFjdC5ub3JtYWxJbXB1bHNlLFxuICAgICAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IGNvbnRhY3QudGFuZ2VudEltcHVsc2U7XG4gICAgXG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbEltcHVsc2UgIT09IDAgfHwgdGFuZ2VudEltcHVsc2UgIT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gdG90YWwgaW1wdWxzZSBmcm9tIGNvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgdmFyIGltcHVsc2VYID0gbm9ybWFsLnggKiBub3JtYWxJbXB1bHNlICsgdGFuZ2VudC54ICogdGFuZ2VudEltcHVsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICBpbXB1bHNlWSA9IG5vcm1hbC55ICogbm9ybWFsSW1wdWxzZSArIHRhbmdlbnQueSAqIHRhbmdlbnRJbXB1bHNlO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgLy8gYXBwbHkgaW1wdWxzZSBmcm9tIGNvbnRhY3RcbiAgICAgICAgICAgICAgICAgICAgaWYgKCEoYm9keUEuaXNTdGF0aWMgfHwgYm9keUEuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi54ICs9IGltcHVsc2VYICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QS5wb3NpdGlvblByZXYueSArPSBpbXB1bHNlWSAqIGJvZHlBLmludmVyc2VNYXNzO1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUEuYW5nbGVQcmV2ICs9IGJvZHlBLmludmVyc2VJbmVydGlhICogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIChjb250YWN0VmVydGV4LnggLSBib2R5QS5wb3NpdGlvbi54KSAqIGltcHVsc2VZXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSAoY29udGFjdFZlcnRleC55IC0gYm9keUEucG9zaXRpb24ueSkgKiBpbXB1bHNlWFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgIFxuICAgICAgICAgICAgICAgICAgICBpZiAoIShib2R5Qi5pc1N0YXRpYyB8fCBib2R5Qi5pc1NsZWVwaW5nKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnggLT0gaW1wdWxzZVggKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvZHlCLnBvc2l0aW9uUHJldi55IC09IGltcHVsc2VZICogYm9keUIuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5Qi5hbmdsZVByZXYgLT0gYm9keUIuaW52ZXJzZUluZXJ0aWEgKiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKGNvbnRhY3RWZXJ0ZXgueCAtIGJvZHlCLnBvc2l0aW9uLngpICogaW1wdWxzZVkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLSAoY29udGFjdFZlcnRleC55IC0gYm9keUIucG9zaXRpb24ueSkgKiBpbXB1bHNlWFxuICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBGaW5kIGEgc29sdXRpb24gZm9yIHBhaXIgdmVsb2NpdGllcy5cbiAgICAgKiBAbWV0aG9kIHNvbHZlVmVsb2NpdHlcbiAgICAgKiBAcGFyYW0ge3BhaXJbXX0gcGFpcnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gZGVsdGFcbiAgICAgKi9cbiAgICBSZXNvbHZlci5zb2x2ZVZlbG9jaXR5ID0gZnVuY3Rpb24ocGFpcnMsIGRlbHRhKSB7XG4gICAgICAgIHZhciB0aW1lU2NhbGUgPSBkZWx0YSAvIENvbW1vbi5fYmFzZURlbHRhLFxuICAgICAgICAgICAgdGltZVNjYWxlU3F1YXJlZCA9IHRpbWVTY2FsZSAqIHRpbWVTY2FsZSxcbiAgICAgICAgICAgIHRpbWVTY2FsZUN1YmVkID0gdGltZVNjYWxlU3F1YXJlZCAqIHRpbWVTY2FsZSxcbiAgICAgICAgICAgIHJlc3RpbmdUaHJlc2ggPSAtUmVzb2x2ZXIuX3Jlc3RpbmdUaHJlc2ggKiB0aW1lU2NhbGUsXG4gICAgICAgICAgICByZXN0aW5nVGhyZXNoVGFuZ2VudCA9IFJlc29sdmVyLl9yZXN0aW5nVGhyZXNoVGFuZ2VudCxcbiAgICAgICAgICAgIGZyaWN0aW9uTm9ybWFsTXVsdGlwbGllciA9IFJlc29sdmVyLl9mcmljdGlvbk5vcm1hbE11bHRpcGxpZXIgKiB0aW1lU2NhbGUsXG4gICAgICAgICAgICBmcmljdGlvbk1heFN0YXRpYyA9IFJlc29sdmVyLl9mcmljdGlvbk1heFN0YXRpYyxcbiAgICAgICAgICAgIHBhaXJzTGVuZ3RoID0gcGFpcnMubGVuZ3RoLFxuICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UsXG4gICAgICAgICAgICBtYXhGcmljdGlvbixcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBqO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBwYWlyc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgcGFpciA9IHBhaXJzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoIXBhaXIuaXNBY3RpdmUgfHwgcGFpci5pc1NlbnNvcilcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IHBhaXIuY29sbGlzaW9uLFxuICAgICAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLnBhcmVudEEsXG4gICAgICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24ucGFyZW50QixcbiAgICAgICAgICAgICAgICBub3JtYWxYID0gY29sbGlzaW9uLm5vcm1hbC54LFxuICAgICAgICAgICAgICAgIG5vcm1hbFkgPSBjb2xsaXNpb24ubm9ybWFsLnksXG4gICAgICAgICAgICAgICAgdGFuZ2VudFggPSBjb2xsaXNpb24udGFuZ2VudC54LFxuICAgICAgICAgICAgICAgIHRhbmdlbnRZID0gY29sbGlzaW9uLnRhbmdlbnQueSxcbiAgICAgICAgICAgICAgICBpbnZlcnNlTWFzc1RvdGFsID0gcGFpci5pbnZlcnNlTWFzcyxcbiAgICAgICAgICAgICAgICBmcmljdGlvbiA9IHBhaXIuZnJpY3Rpb24gKiBwYWlyLmZyaWN0aW9uU3RhdGljICogZnJpY3Rpb25Ob3JtYWxNdWx0aXBsaWVyLFxuICAgICAgICAgICAgICAgIGNvbnRhY3RzID0gcGFpci5jb250YWN0cyxcbiAgICAgICAgICAgICAgICBjb250YWN0Q291bnQgPSBwYWlyLmNvbnRhY3RDb3VudCxcbiAgICAgICAgICAgICAgICBjb250YWN0U2hhcmUgPSAxIC8gY29udGFjdENvdW50O1xuXG4gICAgICAgICAgICAvLyBnZXQgYm9keSB2ZWxvY2l0aWVzXG4gICAgICAgICAgICB2YXIgYm9keUFWZWxvY2l0eVggPSBib2R5QS5wb3NpdGlvbi54IC0gYm9keUEucG9zaXRpb25QcmV2LngsXG4gICAgICAgICAgICAgICAgYm9keUFWZWxvY2l0eVkgPSBib2R5QS5wb3NpdGlvbi55IC0gYm9keUEucG9zaXRpb25QcmV2LnksXG4gICAgICAgICAgICAgICAgYm9keUFBbmd1bGFyVmVsb2NpdHkgPSBib2R5QS5hbmdsZSAtIGJvZHlBLmFuZ2xlUHJldixcbiAgICAgICAgICAgICAgICBib2R5QlZlbG9jaXR5WCA9IGJvZHlCLnBvc2l0aW9uLnggLSBib2R5Qi5wb3NpdGlvblByZXYueCxcbiAgICAgICAgICAgICAgICBib2R5QlZlbG9jaXR5WSA9IGJvZHlCLnBvc2l0aW9uLnkgLSBib2R5Qi5wb3NpdGlvblByZXYueSxcbiAgICAgICAgICAgICAgICBib2R5QkFuZ3VsYXJWZWxvY2l0eSA9IGJvZHlCLmFuZ2xlIC0gYm9keUIuYW5nbGVQcmV2O1xuXG4gICAgICAgICAgICAvLyByZXNvbHZlIGVhY2ggY29udGFjdFxuICAgICAgICAgICAgZm9yIChqID0gMDsgaiA8IGNvbnRhY3RDb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhY3QgPSBjb250YWN0c1tqXSxcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdFZlcnRleCA9IGNvbnRhY3QudmVydGV4O1xuXG4gICAgICAgICAgICAgICAgdmFyIG9mZnNldEFYID0gY29udGFjdFZlcnRleC54IC0gYm9keUEucG9zaXRpb24ueCxcbiAgICAgICAgICAgICAgICAgICAgb2Zmc2V0QVkgPSBjb250YWN0VmVydGV4LnkgLSBib2R5QS5wb3NpdGlvbi55LFxuICAgICAgICAgICAgICAgICAgICBvZmZzZXRCWCA9IGNvbnRhY3RWZXJ0ZXgueCAtIGJvZHlCLnBvc2l0aW9uLngsXG4gICAgICAgICAgICAgICAgICAgIG9mZnNldEJZID0gY29udGFjdFZlcnRleC55IC0gYm9keUIucG9zaXRpb24ueTtcbiBcbiAgICAgICAgICAgICAgICB2YXIgdmVsb2NpdHlQb2ludEFYID0gYm9keUFWZWxvY2l0eVggLSBvZmZzZXRBWSAqIGJvZHlBQW5ndWxhclZlbG9jaXR5LFxuICAgICAgICAgICAgICAgICAgICB2ZWxvY2l0eVBvaW50QVkgPSBib2R5QVZlbG9jaXR5WSArIG9mZnNldEFYICogYm9keUFBbmd1bGFyVmVsb2NpdHksXG4gICAgICAgICAgICAgICAgICAgIHZlbG9jaXR5UG9pbnRCWCA9IGJvZHlCVmVsb2NpdHlYIC0gb2Zmc2V0QlkgKiBib2R5QkFuZ3VsYXJWZWxvY2l0eSxcbiAgICAgICAgICAgICAgICAgICAgdmVsb2NpdHlQb2ludEJZID0gYm9keUJWZWxvY2l0eVkgKyBvZmZzZXRCWCAqIGJvZHlCQW5ndWxhclZlbG9jaXR5O1xuXG4gICAgICAgICAgICAgICAgdmFyIHJlbGF0aXZlVmVsb2NpdHlYID0gdmVsb2NpdHlQb2ludEFYIC0gdmVsb2NpdHlQb2ludEJYLFxuICAgICAgICAgICAgICAgICAgICByZWxhdGl2ZVZlbG9jaXR5WSA9IHZlbG9jaXR5UG9pbnRBWSAtIHZlbG9jaXR5UG9pbnRCWTtcblxuICAgICAgICAgICAgICAgIHZhciBub3JtYWxWZWxvY2l0eSA9IG5vcm1hbFggKiByZWxhdGl2ZVZlbG9jaXR5WCArIG5vcm1hbFkgKiByZWxhdGl2ZVZlbG9jaXR5WSxcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudFZlbG9jaXR5ID0gdGFuZ2VudFggKiByZWxhdGl2ZVZlbG9jaXR5WCArIHRhbmdlbnRZICogcmVsYXRpdmVWZWxvY2l0eVk7XG5cbiAgICAgICAgICAgICAgICAvLyBjb3Vsb21iIGZyaWN0aW9uXG4gICAgICAgICAgICAgICAgdmFyIG5vcm1hbE92ZXJsYXAgPSBwYWlyLnNlcGFyYXRpb24gKyBub3JtYWxWZWxvY2l0eTtcbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsRm9yY2UgPSBNYXRoLm1pbihub3JtYWxPdmVybGFwLCAxKTtcbiAgICAgICAgICAgICAgICBub3JtYWxGb3JjZSA9IG5vcm1hbE92ZXJsYXAgPCAwID8gMCA6IG5vcm1hbEZvcmNlO1xuXG4gICAgICAgICAgICAgICAgdmFyIGZyaWN0aW9uTGltaXQgPSBub3JtYWxGb3JjZSAqIGZyaWN0aW9uO1xuXG4gICAgICAgICAgICAgICAgaWYgKHRhbmdlbnRWZWxvY2l0eSA8IC1mcmljdGlvbkxpbWl0IHx8IHRhbmdlbnRWZWxvY2l0eSA+IGZyaWN0aW9uTGltaXQpIHtcbiAgICAgICAgICAgICAgICAgICAgbWF4RnJpY3Rpb24gPSAodGFuZ2VudFZlbG9jaXR5ID4gMCA/IHRhbmdlbnRWZWxvY2l0eSA6IC10YW5nZW50VmVsb2NpdHkpO1xuICAgICAgICAgICAgICAgICAgICB0YW5nZW50SW1wdWxzZSA9IHBhaXIuZnJpY3Rpb24gKiAodGFuZ2VudFZlbG9jaXR5ID4gMCA/IDEgOiAtMSkgKiB0aW1lU2NhbGVDdWJlZDtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGlmICh0YW5nZW50SW1wdWxzZSA8IC1tYXhGcmljdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSAtbWF4RnJpY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGFuZ2VudEltcHVsc2UgPiBtYXhGcmljdGlvbikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSBtYXhGcmljdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlID0gdGFuZ2VudFZlbG9jaXR5O1xuICAgICAgICAgICAgICAgICAgICBtYXhGcmljdGlvbiA9IGZyaWN0aW9uTWF4U3RhdGljO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGFjY291bnQgZm9yIG1hc3MsIGluZXJ0aWEgYW5kIGNvbnRhY3Qgb2Zmc2V0XG4gICAgICAgICAgICAgICAgdmFyIG9BY04gPSBvZmZzZXRBWCAqIG5vcm1hbFkgLSBvZmZzZXRBWSAqIG5vcm1hbFgsXG4gICAgICAgICAgICAgICAgICAgIG9CY04gPSBvZmZzZXRCWCAqIG5vcm1hbFkgLSBvZmZzZXRCWSAqIG5vcm1hbFgsXG4gICAgICAgICAgICAgICAgICAgIHNoYXJlID0gY29udGFjdFNoYXJlIC8gKGludmVyc2VNYXNzVG90YWwgKyBib2R5QS5pbnZlcnNlSW5lcnRpYSAqIG9BY04gKiBvQWNOICsgYm9keUIuaW52ZXJzZUluZXJ0aWEgKiBvQmNOICogb0JjTik7XG5cbiAgICAgICAgICAgICAgICAvLyByYXcgaW1wdWxzZXNcbiAgICAgICAgICAgICAgICB2YXIgbm9ybWFsSW1wdWxzZSA9ICgxICsgcGFpci5yZXN0aXR1dGlvbikgKiBub3JtYWxWZWxvY2l0eSAqIHNoYXJlO1xuICAgICAgICAgICAgICAgIHRhbmdlbnRJbXB1bHNlICo9IHNoYXJlO1xuXG4gICAgICAgICAgICAgICAgLy8gaGFuZGxlIGhpZ2ggdmVsb2NpdHkgYW5kIHJlc3RpbmcgY29sbGlzaW9ucyBzZXBhcmF0ZWx5XG4gICAgICAgICAgICAgICAgaWYgKG5vcm1hbFZlbG9jaXR5IDwgcmVzdGluZ1RocmVzaCkge1xuICAgICAgICAgICAgICAgICAgICAvLyBoaWdoIG5vcm1hbCB2ZWxvY2l0eSBzbyBjbGVhciBjYWNoZWQgY29udGFjdCBub3JtYWwgaW1wdWxzZVxuICAgICAgICAgICAgICAgICAgICBjb250YWN0Lm5vcm1hbEltcHVsc2UgPSAwO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHNvbHZlIHJlc3RpbmcgY29sbGlzaW9uIGNvbnN0cmFpbnRzIHVzaW5nIEVyaW4gQ2F0dG8ncyBtZXRob2QgKEdEQzA4KVxuICAgICAgICAgICAgICAgICAgICAvLyBpbXB1bHNlIGNvbnN0cmFpbnQgdGVuZHMgdG8gMFxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFjdE5vcm1hbEltcHVsc2UgPSBjb250YWN0Lm5vcm1hbEltcHVsc2U7XG4gICAgICAgICAgICAgICAgICAgIGNvbnRhY3Qubm9ybWFsSW1wdWxzZSArPSBub3JtYWxJbXB1bHNlO1xuICAgICAgICAgICAgICAgICAgICBpZiAoY29udGFjdC5ub3JtYWxJbXB1bHNlID4gMCkgY29udGFjdC5ub3JtYWxJbXB1bHNlID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsSW1wdWxzZSA9IGNvbnRhY3Qubm9ybWFsSW1wdWxzZSAtIGNvbnRhY3ROb3JtYWxJbXB1bHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIGhhbmRsZSBoaWdoIHZlbG9jaXR5IGFuZCByZXN0aW5nIGNvbGxpc2lvbnMgc2VwYXJhdGVseVxuICAgICAgICAgICAgICAgIGlmICh0YW5nZW50VmVsb2NpdHkgPCAtcmVzdGluZ1RocmVzaFRhbmdlbnQgfHwgdGFuZ2VudFZlbG9jaXR5ID4gcmVzdGluZ1RocmVzaFRhbmdlbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gaGlnaCB0YW5nZW50IHZlbG9jaXR5IHNvIGNsZWFyIGNhY2hlZCBjb250YWN0IHRhbmdlbnQgaW1wdWxzZVxuICAgICAgICAgICAgICAgICAgICBjb250YWN0LnRhbmdlbnRJbXB1bHNlID0gMDtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAvLyBzb2x2ZSByZXN0aW5nIGNvbGxpc2lvbiBjb25zdHJhaW50cyB1c2luZyBFcmluIENhdHRvJ3MgbWV0aG9kIChHREMwOClcbiAgICAgICAgICAgICAgICAgICAgLy8gdGFuZ2VudCBpbXB1bHNlIHRlbmRzIHRvIC10YW5nZW50U3BlZWQgb3IgK3RhbmdlbnRTcGVlZFxuICAgICAgICAgICAgICAgICAgICB2YXIgY29udGFjdFRhbmdlbnRJbXB1bHNlID0gY29udGFjdC50YW5nZW50SW1wdWxzZTtcbiAgICAgICAgICAgICAgICAgICAgY29udGFjdC50YW5nZW50SW1wdWxzZSArPSB0YW5nZW50SW1wdWxzZTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGNvbnRhY3QudGFuZ2VudEltcHVsc2UgPCAtbWF4RnJpY3Rpb24pIGNvbnRhY3QudGFuZ2VudEltcHVsc2UgPSAtbWF4RnJpY3Rpb247XG4gICAgICAgICAgICAgICAgICAgIGlmIChjb250YWN0LnRhbmdlbnRJbXB1bHNlID4gbWF4RnJpY3Rpb24pIGNvbnRhY3QudGFuZ2VudEltcHVsc2UgPSBtYXhGcmljdGlvbjtcbiAgICAgICAgICAgICAgICAgICAgdGFuZ2VudEltcHVsc2UgPSBjb250YWN0LnRhbmdlbnRJbXB1bHNlIC0gY29udGFjdFRhbmdlbnRJbXB1bHNlO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHRvdGFsIGltcHVsc2UgZnJvbSBjb250YWN0XG4gICAgICAgICAgICAgICAgdmFyIGltcHVsc2VYID0gbm9ybWFsWCAqIG5vcm1hbEltcHVsc2UgKyB0YW5nZW50WCAqIHRhbmdlbnRJbXB1bHNlLFxuICAgICAgICAgICAgICAgICAgICBpbXB1bHNlWSA9IG5vcm1hbFkgKiBub3JtYWxJbXB1bHNlICsgdGFuZ2VudFkgKiB0YW5nZW50SW1wdWxzZTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAvLyBhcHBseSBpbXB1bHNlIGZyb20gY29udGFjdFxuICAgICAgICAgICAgICAgIGlmICghKGJvZHlBLmlzU3RhdGljIHx8IGJvZHlBLmlzU2xlZXBpbmcpKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi54ICs9IGltcHVsc2VYICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBLnBvc2l0aW9uUHJldi55ICs9IGltcHVsc2VZICogYm9keUEuaW52ZXJzZU1hc3M7XG4gICAgICAgICAgICAgICAgICAgIGJvZHlBLmFuZ2xlUHJldiArPSAob2Zmc2V0QVggKiBpbXB1bHNlWSAtIG9mZnNldEFZICogaW1wdWxzZVgpICogYm9keUEuaW52ZXJzZUluZXJ0aWE7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKCEoYm9keUIuaXNTdGF0aWMgfHwgYm9keUIuaXNTbGVlcGluZykpIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnggLT0gaW1wdWxzZVggKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgYm9keUIucG9zaXRpb25QcmV2LnkgLT0gaW1wdWxzZVkgKiBib2R5Qi5pbnZlcnNlTWFzcztcbiAgICAgICAgICAgICAgICAgICAgYm9keUIuYW5nbGVQcmV2IC09IChvZmZzZXRCWCAqIGltcHVsc2VZIC0gb2Zmc2V0QlkgKiBpbXB1bHNlWCkgKiBib2R5Qi5pbnZlcnNlSW5lcnRpYTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMTkgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlBhaXJzYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb2xsaXNpb24gcGFpciBzZXRzLlxuKlxuKiBAY2xhc3MgUGFpcnNcbiovXG5cbnZhciBQYWlycyA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFBhaXJzO1xuXG52YXIgUGFpciA9IF9fd2VicGFja19yZXF1aXJlX18oOSk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBwYWlycyBzdHJ1Y3R1cmUuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge3BhaXJzfSBBIG5ldyBwYWlycyBzdHJ1Y3R1cmVcbiAgICAgKi9cbiAgICBQYWlycy5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHJldHVybiBDb21tb24uZXh0ZW5kKHsgXG4gICAgICAgICAgICB0YWJsZToge30sXG4gICAgICAgICAgICBsaXN0OiBbXSxcbiAgICAgICAgICAgIGNvbGxpc2lvblN0YXJ0OiBbXSxcbiAgICAgICAgICAgIGNvbGxpc2lvbkFjdGl2ZTogW10sXG4gICAgICAgICAgICBjb2xsaXNpb25FbmQ6IFtdXG4gICAgICAgIH0sIG9wdGlvbnMpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHBhaXJzIGdpdmVuIGEgbGlzdCBvZiBjb2xsaXNpb25zLlxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IHBhaXJzXG4gICAgICogQHBhcmFtIHtjb2xsaXNpb25bXX0gY29sbGlzaW9uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lc3RhbXBcbiAgICAgKi9cbiAgICBQYWlycy51cGRhdGUgPSBmdW5jdGlvbihwYWlycywgY29sbGlzaW9ucywgdGltZXN0YW1wKSB7XG4gICAgICAgIHZhciBwYWlyVXBkYXRlID0gUGFpci51cGRhdGUsXG4gICAgICAgICAgICBwYWlyQ3JlYXRlID0gUGFpci5jcmVhdGUsXG4gICAgICAgICAgICBwYWlyU2V0QWN0aXZlID0gUGFpci5zZXRBY3RpdmUsXG4gICAgICAgICAgICBwYWlyc1RhYmxlID0gcGFpcnMudGFibGUsXG4gICAgICAgICAgICBwYWlyc0xpc3QgPSBwYWlycy5saXN0LFxuICAgICAgICAgICAgcGFpcnNMaXN0TGVuZ3RoID0gcGFpcnNMaXN0Lmxlbmd0aCxcbiAgICAgICAgICAgIHBhaXJzTGlzdEluZGV4ID0gcGFpcnNMaXN0TGVuZ3RoLFxuICAgICAgICAgICAgY29sbGlzaW9uU3RhcnQgPSBwYWlycy5jb2xsaXNpb25TdGFydCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkVuZCA9IHBhaXJzLmNvbGxpc2lvbkVuZCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkFjdGl2ZSA9IHBhaXJzLmNvbGxpc2lvbkFjdGl2ZSxcbiAgICAgICAgICAgIGNvbGxpc2lvbnNMZW5ndGggPSBjb2xsaXNpb25zLmxlbmd0aCxcbiAgICAgICAgICAgIGNvbGxpc2lvblN0YXJ0SW5kZXggPSAwLFxuICAgICAgICAgICAgY29sbGlzaW9uRW5kSW5kZXggPSAwLFxuICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlSW5kZXggPSAwLFxuICAgICAgICAgICAgY29sbGlzaW9uLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGNvbGxpc2lvbnNMZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgY29sbGlzaW9uID0gY29sbGlzaW9uc1tpXTtcbiAgICAgICAgICAgIHBhaXIgPSBjb2xsaXNpb24ucGFpcjtcblxuICAgICAgICAgICAgaWYgKHBhaXIpIHtcbiAgICAgICAgICAgICAgICAvLyBwYWlyIGFscmVhZHkgZXhpc3RzIChidXQgbWF5IG9yIG1heSBub3QgYmUgYWN0aXZlKVxuICAgICAgICAgICAgICAgIGlmIChwYWlyLmlzQWN0aXZlKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhaXIgZXhpc3RzIGFuZCBpcyBhY3RpdmVcbiAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9uQWN0aXZlW2NvbGxpc2lvbkFjdGl2ZUluZGV4KytdID0gcGFpcjtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyB1cGRhdGUgdGhlIHBhaXJcbiAgICAgICAgICAgICAgICBwYWlyVXBkYXRlKHBhaXIsIGNvbGxpc2lvbiwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgLy8gcGFpciBkaWQgbm90IGV4aXN0LCBjcmVhdGUgYSBuZXcgcGFpclxuICAgICAgICAgICAgICAgIHBhaXIgPSBwYWlyQ3JlYXRlKGNvbGxpc2lvbiwgdGltZXN0YW1wKTtcbiAgICAgICAgICAgICAgICBwYWlyc1RhYmxlW3BhaXIuaWRdID0gcGFpcjtcblxuICAgICAgICAgICAgICAgIC8vIGFkZCB0aGUgbmV3IHBhaXJcbiAgICAgICAgICAgICAgICBjb2xsaXNpb25TdGFydFtjb2xsaXNpb25TdGFydEluZGV4KytdID0gcGFpcjtcbiAgICAgICAgICAgICAgICBwYWlyc0xpc3RbcGFpcnNMaXN0SW5kZXgrK10gPSBwYWlyO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gZmluZCBwYWlycyB0aGF0IGFyZSBubyBsb25nZXIgYWN0aXZlXG4gICAgICAgIHBhaXJzTGlzdEluZGV4ID0gMDtcbiAgICAgICAgcGFpcnNMaXN0TGVuZ3RoID0gcGFpcnNMaXN0Lmxlbmd0aDtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnNMaXN0TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc0xpc3RbaV07XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHBhaXIgaXMgYWN0aXZlIGlmIHVwZGF0ZWQgdGhpcyB0aW1lc3RlcFxuICAgICAgICAgICAgaWYgKHBhaXIudGltZVVwZGF0ZWQgPj0gdGltZXN0YW1wKSB7XG4gICAgICAgICAgICAgICAgLy8ga2VlcCBhY3RpdmUgcGFpcnNcbiAgICAgICAgICAgICAgICBwYWlyc0xpc3RbcGFpcnNMaXN0SW5kZXgrK10gPSBwYWlyO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBwYWlyU2V0QWN0aXZlKHBhaXIsIGZhbHNlLCB0aW1lc3RhbXApO1xuXG4gICAgICAgICAgICAgICAgLy8ga2VlcCBpbmFjdGl2ZSBwYWlycyBpZiBib3RoIGJvZGllcyBtYXkgYmUgc2xlZXBpbmdcbiAgICAgICAgICAgICAgICBpZiAocGFpci5jb2xsaXNpb24uYm9keUEuc2xlZXBDb3VudGVyID4gMCAmJiBwYWlyLmNvbGxpc2lvbi5ib2R5Qi5zbGVlcENvdW50ZXIgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHBhaXJzTGlzdFtwYWlyc0xpc3RJbmRleCsrXSA9IHBhaXI7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGluYWN0aXZlIHBhaXJzIGlmIGVpdGhlciBib2R5IGF3YWtlXG4gICAgICAgICAgICAgICAgICAgIGNvbGxpc2lvbkVuZFtjb2xsaXNpb25FbmRJbmRleCsrXSA9IHBhaXI7XG4gICAgICAgICAgICAgICAgICAgIGRlbGV0ZSBwYWlyc1RhYmxlW3BhaXIuaWRdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBhcnJheSBsZW5ndGhzIGlmIGNoYW5nZWRcbiAgICAgICAgaWYgKHBhaXJzTGlzdC5sZW5ndGggIT09IHBhaXJzTGlzdEluZGV4KSB7XG4gICAgICAgICAgICBwYWlyc0xpc3QubGVuZ3RoID0gcGFpcnNMaXN0SW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sbGlzaW9uU3RhcnQubGVuZ3RoICE9PSBjb2xsaXNpb25TdGFydEluZGV4KSB7XG4gICAgICAgICAgICBjb2xsaXNpb25TdGFydC5sZW5ndGggPSBjb2xsaXNpb25TdGFydEluZGV4O1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKGNvbGxpc2lvbkVuZC5sZW5ndGggIT09IGNvbGxpc2lvbkVuZEluZGV4KSB7XG4gICAgICAgICAgICBjb2xsaXNpb25FbmQubGVuZ3RoID0gY29sbGlzaW9uRW5kSW5kZXg7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoY29sbGlzaW9uQWN0aXZlLmxlbmd0aCAhPT0gY29sbGlzaW9uQWN0aXZlSW5kZXgpIHtcbiAgICAgICAgICAgIGNvbGxpc2lvbkFjdGl2ZS5sZW5ndGggPSBjb2xsaXNpb25BY3RpdmVJbmRleDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDbGVhcnMgdGhlIGdpdmVuIHBhaXJzIHN0cnVjdHVyZS5cbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtwYWlyc30gcGFpcnNcbiAgICAgKiBAcmV0dXJuIHtwYWlyc30gcGFpcnNcbiAgICAgKi9cbiAgICBQYWlycy5jbGVhciA9IGZ1bmN0aW9uKHBhaXJzKSB7XG4gICAgICAgIHBhaXJzLnRhYmxlID0ge307XG4gICAgICAgIHBhaXJzLmxpc3QubGVuZ3RoID0gMDtcbiAgICAgICAgcGFpcnMuY29sbGlzaW9uU3RhcnQubGVuZ3RoID0gMDtcbiAgICAgICAgcGFpcnMuY29sbGlzaW9uQWN0aXZlLmxlbmd0aCA9IDA7XG4gICAgICAgIHBhaXJzLmNvbGxpc2lvbkVuZC5sZW5ndGggPSAwO1xuICAgICAgICByZXR1cm4gcGFpcnM7XG4gICAgfTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDIwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbnZhciBNYXR0ZXIgPSBtb2R1bGUuZXhwb3J0cyA9IF9fd2VicGFja19yZXF1aXJlX18oMjEpO1xyXG5cclxuTWF0dGVyLkF4ZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDExKTtcclxuTWF0dGVyLkJvZGllcyA9IF9fd2VicGFja19yZXF1aXJlX18oMTIpO1xyXG5NYXR0ZXIuQm9keSA9IF9fd2VicGFja19yZXF1aXJlX18oNCk7XHJcbk1hdHRlci5Cb3VuZHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEpO1xyXG5NYXR0ZXIuQ29sbGlzaW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXyg4KTtcclxuTWF0dGVyLkNvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XHJcbk1hdHRlci5Db21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xyXG5NYXR0ZXIuQ29tcG9zaXRlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMjIpO1xyXG5NYXR0ZXIuQ29uc3RyYWludCA9IF9fd2VicGFja19yZXF1aXJlX18oMTApO1xyXG5NYXR0ZXIuQ29udGFjdCA9IF9fd2VicGFja19yZXF1aXJlX18oMTYpO1xyXG5NYXR0ZXIuRGV0ZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEzKTtcclxuTWF0dGVyLkVuZ2luZSA9IF9fd2VicGFja19yZXF1aXJlX18oMTcpO1xyXG5NYXR0ZXIuRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcclxuTWF0dGVyLkdyaWQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIzKTtcclxuTWF0dGVyLk1vdXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XHJcbk1hdHRlci5Nb3VzZUNvbnN0cmFpbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI0KTtcclxuTWF0dGVyLlBhaXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDkpO1xyXG5NYXR0ZXIuUGFpcnMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE5KTtcclxuTWF0dGVyLlBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xyXG5NYXR0ZXIuUXVlcnkgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI1KTtcclxuTWF0dGVyLlJlbmRlciA9IF9fd2VicGFja19yZXF1aXJlX18oMjYpO1xyXG5NYXR0ZXIuUmVzb2x2ZXIgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE4KTtcclxuTWF0dGVyLlJ1bm5lciA9IF9fd2VicGFja19yZXF1aXJlX18oMjcpO1xyXG5NYXR0ZXIuU0FUID0gX193ZWJwYWNrX3JlcXVpcmVfXygyOCk7XHJcbk1hdHRlci5TbGVlcGluZyA9IF9fd2VicGFja19yZXF1aXJlX18oNyk7XHJcbk1hdHRlci5TdmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDI5KTtcclxuTWF0dGVyLlZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XHJcbk1hdHRlci5WZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XHJcbk1hdHRlci5Xb3JsZCA9IF9fd2VicGFja19yZXF1aXJlX18oMzApO1xyXG5cclxuLy8gdGVtcG9yYXJ5IGJhY2sgY29tcGF0aWJpbGl0eVxyXG5NYXR0ZXIuRW5naW5lLnJ1biA9IE1hdHRlci5SdW5uZXIucnVuO1xyXG5NYXR0ZXIuQ29tbW9uLmRlcHJlY2F0ZWQoTWF0dGVyLkVuZ2luZSwgJ3J1bicsICdFbmdpbmUucnVuIOKepCB1c2UgTWF0dGVyLlJ1bm5lci5ydW4oZW5naW5lKSBpbnN0ZWFkJyk7XHJcblxuXG4vKioqLyB9KSxcbi8qIDIxICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxyXG4qIFRoZSBgTWF0dGVyYCBtb2R1bGUgaXMgdGhlIHRvcCBsZXZlbCBuYW1lc3BhY2UuIEl0IGFsc28gaW5jbHVkZXMgYSBmdW5jdGlvbiBmb3IgaW5zdGFsbGluZyBwbHVnaW5zIG9uIHRvcCBvZiB0aGUgbGlicmFyeS5cclxuKlxyXG4qIEBjbGFzcyBNYXR0ZXJcclxuKi9cclxuXHJcbnZhciBNYXR0ZXIgPSB7fTtcclxuXHJcbm1vZHVsZS5leHBvcnRzID0gTWF0dGVyO1xyXG5cclxudmFyIFBsdWdpbiA9IF9fd2VicGFja19yZXF1aXJlX18oMTUpO1xyXG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcclxuXHJcbihmdW5jdGlvbigpIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBsaWJyYXJ5IG5hbWUuXHJcbiAgICAgKiBAcHJvcGVydHkgbmFtZVxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiBAdHlwZSB7U3RyaW5nfVxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIubmFtZSA9ICdtYXR0ZXItanMnO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogVGhlIGxpYnJhcnkgdmVyc2lvbi5cclxuICAgICAqIEBwcm9wZXJ0eSB2ZXJzaW9uXHJcbiAgICAgKiBAcmVhZE9ubHlcclxuICAgICAqIEB0eXBlIHtTdHJpbmd9XHJcbiAgICAgKi9cclxuICAgIE1hdHRlci52ZXJzaW9uID0gIHRydWUgPyBcIjAuMjAuMFwiIDogdW5kZWZpbmVkO1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQSBsaXN0IG9mIHBsdWdpbiBkZXBlbmRlbmNpZXMgdG8gYmUgaW5zdGFsbGVkLiBUaGVzZSBhcmUgbm9ybWFsbHkgc2V0IGFuZCBpbnN0YWxsZWQgdGhyb3VnaCBgTWF0dGVyLnVzZWAuXHJcbiAgICAgKiBBbHRlcm5hdGl2ZWx5IHlvdSBtYXkgc2V0IGBNYXR0ZXIudXNlc2AgbWFudWFsbHkgYW5kIGluc3RhbGwgdGhlbSBieSBjYWxsaW5nIGBQbHVnaW4udXNlKE1hdHRlcilgLlxyXG4gICAgICogQHByb3BlcnR5IHVzZXNcclxuICAgICAqIEB0eXBlIHtBcnJheX1cclxuICAgICAqL1xyXG4gICAgTWF0dGVyLnVzZXMgPSBbXTtcclxuXHJcbiAgICAvKipcclxuICAgICAqIFRoZSBwbHVnaW5zIHRoYXQgaGF2ZSBiZWVuIGluc3RhbGxlZCB0aHJvdWdoIGBNYXR0ZXIuUGx1Z2luLmluc3RhbGxgLiBSZWFkIG9ubHkuXHJcbiAgICAgKiBAcHJvcGVydHkgdXNlZFxyXG4gICAgICogQHJlYWRPbmx5XHJcbiAgICAgKiBAdHlwZSB7QXJyYXl9XHJcbiAgICAgKi9cclxuICAgIE1hdHRlci51c2VkID0gW107XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBJbnN0YWxscyB0aGUgZ2l2ZW4gcGx1Z2lucyBvbiB0aGUgYE1hdHRlcmAgbmFtZXNwYWNlLlxyXG4gICAgICogVGhpcyBpcyBhIHNob3J0LWhhbmQgZm9yIGBQbHVnaW4udXNlYCwgc2VlIGl0IGZvciBtb3JlIGluZm9ybWF0aW9uLlxyXG4gICAgICogQ2FsbCB0aGlzIGZ1bmN0aW9uIG9uY2UgYXQgdGhlIHN0YXJ0IG9mIHlvdXIgY29kZSwgd2l0aCBhbGwgb2YgdGhlIHBsdWdpbnMgeW91IHdpc2ggdG8gaW5zdGFsbCBhcyBhcmd1bWVudHMuXHJcbiAgICAgKiBBdm9pZCBjYWxsaW5nIHRoaXMgZnVuY3Rpb24gbXVsdGlwbGUgdGltZXMgdW5sZXNzIHlvdSBpbnRlbmQgdG8gbWFudWFsbHkgY29udHJvbCBpbnN0YWxsYXRpb24gb3JkZXIuXHJcbiAgICAgKiBAbWV0aG9kIHVzZVxyXG4gICAgICogQHBhcmFtIC4uLnBsdWdpbiB7RnVuY3Rpb259IFRoZSBwbHVnaW4ocykgdG8gaW5zdGFsbCBvbiBgYmFzZWAgKG11bHRpLWFyZ3VtZW50KS5cclxuICAgICAqL1xyXG4gICAgTWF0dGVyLnVzZSA9IGZ1bmN0aW9uKCkge1xyXG4gICAgICAgIFBsdWdpbi51c2UoTWF0dGVyLCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChhcmd1bWVudHMpKTtcclxuICAgIH07XHJcblxyXG4gICAgLyoqXHJcbiAgICAgKiBDaGFpbnMgYSBmdW5jdGlvbiB0byBleGN1dGUgYmVmb3JlIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBNYXR0ZXJgLlxyXG4gICAgICogU2VlIGFsc28gZG9jcyBmb3IgYENvbW1vbi5jaGFpbmAuXHJcbiAgICAgKiBAbWV0aG9kIGJlZm9yZVxyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IHBhdGggVGhlIHBhdGggcmVsYXRpdmUgdG8gYE1hdHRlcmBcclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IGZ1bmMgVGhlIGZ1bmN0aW9uIHRvIGNoYWluIGJlZm9yZSB0aGUgb3JpZ2luYWxcclxuICAgICAqIEByZXR1cm4ge2Z1bmN0aW9ufSBUaGUgY2hhaW5lZCBmdW5jdGlvbiB0aGF0IHJlcGxhY2VkIHRoZSBvcmlnaW5hbFxyXG4gICAgICovXHJcbiAgICBNYXR0ZXIuYmVmb3JlID0gZnVuY3Rpb24ocGF0aCwgZnVuYykge1xyXG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL15NYXR0ZXIuLywgJycpO1xyXG4gICAgICAgIHJldHVybiBDb21tb24uY2hhaW5QYXRoQmVmb3JlKE1hdHRlciwgcGF0aCwgZnVuYyk7XHJcbiAgICB9O1xyXG5cclxuICAgIC8qKlxyXG4gICAgICogQ2hhaW5zIGEgZnVuY3Rpb24gdG8gZXhjdXRlIGFmdGVyIHRoZSBvcmlnaW5hbCBmdW5jdGlvbiBvbiB0aGUgZ2l2ZW4gYHBhdGhgIHJlbGF0aXZlIHRvIGBNYXR0ZXJgLlxyXG4gICAgICogU2VlIGFsc28gZG9jcyBmb3IgYENvbW1vbi5jaGFpbmAuXHJcbiAgICAgKiBAbWV0aG9kIGFmdGVyXHJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gcGF0aCBUaGUgcGF0aCByZWxhdGl2ZSB0byBgTWF0dGVyYFxyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gZnVuYyBUaGUgZnVuY3Rpb24gdG8gY2hhaW4gYWZ0ZXIgdGhlIG9yaWdpbmFsXHJcbiAgICAgKiBAcmV0dXJuIHtmdW5jdGlvbn0gVGhlIGNoYWluZWQgZnVuY3Rpb24gdGhhdCByZXBsYWNlZCB0aGUgb3JpZ2luYWxcclxuICAgICAqL1xyXG4gICAgTWF0dGVyLmFmdGVyID0gZnVuY3Rpb24ocGF0aCwgZnVuYykge1xyXG4gICAgICAgIHBhdGggPSBwYXRoLnJlcGxhY2UoL15NYXR0ZXIuLywgJycpO1xyXG4gICAgICAgIHJldHVybiBDb21tb24uY2hhaW5QYXRoQWZ0ZXIoTWF0dGVyLCBwYXRoLCBmdW5jKTtcclxuICAgIH07XHJcblxyXG59KSgpO1xyXG5cblxuLyoqKi8gfSksXG4vKiAyMiAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhlIGBNYXR0ZXIuQ29tcG9zaXRlc2AgbW9kdWxlIGNvbnRhaW5zIGZhY3RvcnkgbWV0aG9kcyBmb3IgY3JlYXRpbmcgY29tcG9zaXRlIGJvZGllc1xuKiB3aXRoIGNvbW1vbmx5IHVzZWQgY29uZmlndXJhdGlvbnMgKHN1Y2ggYXMgc3RhY2tzIGFuZCBjaGFpbnMpLlxuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgQ29tcG9zaXRlc1xuKi9cblxudmFyIENvbXBvc2l0ZXMgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBDb21wb3NpdGVzO1xuXG52YXIgQ29tcG9zaXRlID0gX193ZWJwYWNrX3JlcXVpcmVfXyg2KTtcbnZhciBDb25zdHJhaW50ID0gX193ZWJwYWNrX3JlcXVpcmVfXygxMCk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBCb2R5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBCb2RpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbnZhciBkZXByZWNhdGVkID0gQ29tbW9uLmRlcHJlY2F0ZWQ7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBib2RpZXMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2sgaW4gYSBncmlkIGFycmFuZ2VtZW50LlxuICAgICAqIFRoaXMgZnVuY3Rpb24gdXNlcyB0aGUgYm9keSdzIGJvdW5kcyB0byBwcmV2ZW50IG92ZXJsYXBzLlxuICAgICAqIEBtZXRob2Qgc3RhY2tcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBTdGFydGluZyBwb3NpdGlvbiBpbiBYLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFN0YXJ0aW5nIHBvc2l0aW9uIGluIFkuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbnNcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93c1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5HYXBcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gcm93R2FwXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBjb250YWluaW5nIG9iamVjdHMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2tcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLnN0YWNrID0gZnVuY3Rpb24oeCwgeSwgY29sdW1ucywgcm93cywgY29sdW1uR2FwLCByb3dHYXAsIGNhbGxiYWNrKSB7XG4gICAgICAgIHZhciBzdGFjayA9IENvbXBvc2l0ZS5jcmVhdGUoeyBsYWJlbDogJ1N0YWNrJyB9KSxcbiAgICAgICAgICAgIGN1cnJlbnRYID0geCxcbiAgICAgICAgICAgIGN1cnJlbnRZID0geSxcbiAgICAgICAgICAgIGxhc3RCb2R5LFxuICAgICAgICAgICAgaSA9IDA7XG5cbiAgICAgICAgZm9yICh2YXIgcm93ID0gMDsgcm93IDwgcm93czsgcm93KyspIHtcbiAgICAgICAgICAgIHZhciBtYXhIZWlnaHQgPSAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IgKHZhciBjb2x1bW4gPSAwOyBjb2x1bW4gPCBjb2x1bW5zOyBjb2x1bW4rKykge1xuICAgICAgICAgICAgICAgIHZhciBib2R5ID0gY2FsbGJhY2soY3VycmVudFgsIGN1cnJlbnRZLCBjb2x1bW4sIHJvdywgbGFzdEJvZHksIGkpO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICBpZiAoYm9keSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgYm9keUhlaWdodCA9IGJvZHkuYm91bmRzLm1heC55IC0gYm9keS5ib3VuZHMubWluLnksXG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5V2lkdGggPSBib2R5LmJvdW5kcy5tYXgueCAtIGJvZHkuYm91bmRzLm1pbi54OyBcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYm9keUhlaWdodCA+IG1heEhlaWdodClcbiAgICAgICAgICAgICAgICAgICAgICAgIG1heEhlaWdodCA9IGJvZHlIZWlnaHQ7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShib2R5LCB7IHg6IGJvZHlXaWR0aCAqIDAuNSwgeTogYm9keUhlaWdodCAqIDAuNSB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjdXJyZW50WCA9IGJvZHkuYm91bmRzLm1heC54ICsgY29sdW1uR2FwO1xuXG4gICAgICAgICAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KHN0YWNrLCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgIGxhc3RCb2R5ID0gYm9keTtcbiAgICAgICAgICAgICAgICAgICAgaSArPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGN1cnJlbnRYICs9IGNvbHVtbkdhcDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGN1cnJlbnRZICs9IG1heEhlaWdodCArIHJvd0dhcDtcbiAgICAgICAgICAgIGN1cnJlbnRYID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiBzdGFjaztcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIENoYWlucyBhbGwgYm9kaWVzIGluIHRoZSBnaXZlbiBjb21wb3NpdGUgdG9nZXRoZXIgdXNpbmcgY29uc3RyYWludHMuXG4gICAgICogQG1ldGhvZCBjaGFpblxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geE9mZnNldEFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geU9mZnNldEFcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geE9mZnNldEJcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geU9mZnNldEJcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBjaGFpbmVkIHRvZ2V0aGVyIHdpdGggY29uc3RyYWludHNcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLmNoYWluID0gZnVuY3Rpb24oY29tcG9zaXRlLCB4T2Zmc2V0QSwgeU9mZnNldEEsIHhPZmZzZXRCLCB5T2Zmc2V0Qiwgb3B0aW9ucykge1xuICAgICAgICB2YXIgYm9kaWVzID0gY29tcG9zaXRlLmJvZGllcztcbiAgICAgICAgXG4gICAgICAgIGZvciAodmFyIGkgPSAxOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUEgPSBib2RpZXNbaSAtIDFdLFxuICAgICAgICAgICAgICAgIGJvZHlCID0gYm9kaWVzW2ldLFxuICAgICAgICAgICAgICAgIGJvZHlBSGVpZ2h0ID0gYm9keUEuYm91bmRzLm1heC55IC0gYm9keUEuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvZHlBV2lkdGggPSBib2R5QS5ib3VuZHMubWF4LnggLSBib2R5QS5ib3VuZHMubWluLngsIFxuICAgICAgICAgICAgICAgIGJvZHlCSGVpZ2h0ID0gYm9keUIuYm91bmRzLm1heC55IC0gYm9keUIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvZHlCV2lkdGggPSBib2R5Qi5ib3VuZHMubWF4LnggLSBib2R5Qi5ib3VuZHMubWluLng7XG4gICAgICAgIFxuICAgICAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgICAgIGJvZHlBOiBib2R5QSxcbiAgICAgICAgICAgICAgICBwb2ludEE6IHsgeDogYm9keUFXaWR0aCAqIHhPZmZzZXRBLCB5OiBib2R5QUhlaWdodCAqIHlPZmZzZXRBIH0sXG4gICAgICAgICAgICAgICAgYm9keUI6IGJvZHlCLFxuICAgICAgICAgICAgICAgIHBvaW50QjogeyB4OiBib2R5QldpZHRoICogeE9mZnNldEIsIHk6IGJvZHlCSGVpZ2h0ICogeU9mZnNldEIgfVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcbiAgICAgICAgXG4gICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIENvbnN0cmFpbnQuY3JlYXRlKGNvbnN0cmFpbnQpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvc2l0ZS5sYWJlbCArPSAnIENoYWluJztcbiAgICAgICAgXG4gICAgICAgIHJldHVybiBjb21wb3NpdGU7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIENvbm5lY3RzIGJvZGllcyBpbiB0aGUgY29tcG9zaXRlIHdpdGggY29uc3RyYWludHMgaW4gYSBncmlkIHBhdHRlcm4sIHdpdGggb3B0aW9uYWwgY3Jvc3MgYnJhY2VzLlxuICAgICAqIEBtZXRob2QgbWVzaFxuICAgICAqIEBwYXJhbSB7Y29tcG9zaXRlfSBjb21wb3NpdGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtib29sZWFufSBjcm9zc0JyYWNlXG4gICAgICogQHBhcmFtIHtvYmplY3R9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IFRoZSBjb21wb3NpdGUgY29udGFpbmluZyBvYmplY3RzIG1lc2hlZCB0b2dldGhlciB3aXRoIGNvbnN0cmFpbnRzXG4gICAgICovXG4gICAgQ29tcG9zaXRlcy5tZXNoID0gZnVuY3Rpb24oY29tcG9zaXRlLCBjb2x1bW5zLCByb3dzLCBjcm9zc0JyYWNlLCBvcHRpb25zKSB7XG4gICAgICAgIHZhciBib2RpZXMgPSBjb21wb3NpdGUuYm9kaWVzLFxuICAgICAgICAgICAgcm93LFxuICAgICAgICAgICAgY29sLFxuICAgICAgICAgICAgYm9keUEsXG4gICAgICAgICAgICBib2R5QixcbiAgICAgICAgICAgIGJvZHlDO1xuICAgICAgICBcbiAgICAgICAgZm9yIChyb3cgPSAwOyByb3cgPCByb3dzOyByb3crKykge1xuICAgICAgICAgICAgZm9yIChjb2wgPSAxOyBjb2wgPCBjb2x1bW5zOyBjb2wrKykge1xuICAgICAgICAgICAgICAgIGJvZHlBID0gYm9kaWVzWyhjb2wgLSAxKSArIChyb3cgKiBjb2x1bW5zKV07XG4gICAgICAgICAgICAgICAgYm9keUIgPSBib2RpZXNbY29sICsgKHJvdyAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjb21wb3NpdGUsIENvbnN0cmFpbnQuY3JlYXRlKENvbW1vbi5leHRlbmQoeyBib2R5QTogYm9keUEsIGJvZHlCOiBib2R5QiB9LCBvcHRpb25zKSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocm93ID4gMCkge1xuICAgICAgICAgICAgICAgIGZvciAoY29sID0gMDsgY29sIDwgY29sdW1uczsgY29sKyspIHtcbiAgICAgICAgICAgICAgICAgICAgYm9keUEgPSBib2RpZXNbY29sICsgKChyb3cgLSAxKSAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgYm9keUIgPSBib2RpZXNbY29sICsgKHJvdyAqIGNvbHVtbnMpXTtcbiAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlBLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcblxuICAgICAgICAgICAgICAgICAgICBpZiAoY3Jvc3NCcmFjZSAmJiBjb2wgPiAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QyA9IGJvZGllc1soY29sIC0gMSkgKyAoKHJvdyAtIDEpICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlDLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChjcm9zc0JyYWNlICYmIGNvbCA8IGNvbHVtbnMgLSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBib2R5QyA9IGJvZGllc1soY29sICsgMSkgKyAoKHJvdyAtIDEpICogY29sdW1ucyldO1xuICAgICAgICAgICAgICAgICAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY29tcG9zaXRlLCBDb25zdHJhaW50LmNyZWF0ZShDb21tb24uZXh0ZW5kKHsgYm9keUE6IGJvZHlDLCBib2R5QjogYm9keUIgfSwgb3B0aW9ucykpKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGNvbXBvc2l0ZS5sYWJlbCArPSAnIE1lc2gnO1xuICAgICAgICBcbiAgICAgICAgcmV0dXJuIGNvbXBvc2l0ZTtcbiAgICB9O1xuICAgIFxuICAgIC8qKlxuICAgICAqIENyZWF0ZSBhIG5ldyBjb21wb3NpdGUgY29udGFpbmluZyBib2RpZXMgY3JlYXRlZCBpbiB0aGUgY2FsbGJhY2sgaW4gYSBweXJhbWlkIGFycmFuZ2VtZW50LlxuICAgICAqIFRoaXMgZnVuY3Rpb24gdXNlcyB0aGUgYm9keSdzIGJvdW5kcyB0byBwcmV2ZW50IG92ZXJsYXBzLlxuICAgICAqIEBtZXRob2QgcHlyYW1pZFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4IFN0YXJ0aW5nIHBvc2l0aW9uIGluIFguXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHkgU3RhcnRpbmcgcG9zaXRpb24gaW4gWS5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uc1xuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dzXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvbHVtbkdhcFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSByb3dHYXBcbiAgICAgKiBAcGFyYW0ge2Z1bmN0aW9ufSBjYWxsYmFja1xuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIGNvbnRhaW5pbmcgb2JqZWN0cyBjcmVhdGVkIGluIHRoZSBjYWxsYmFja1xuICAgICAqL1xuICAgIENvbXBvc2l0ZXMucHlyYW1pZCA9IGZ1bmN0aW9uKHgsIHksIGNvbHVtbnMsIHJvd3MsIGNvbHVtbkdhcCwgcm93R2FwLCBjYWxsYmFjaykge1xuICAgICAgICByZXR1cm4gQ29tcG9zaXRlcy5zdGFjayh4LCB5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgZnVuY3Rpb24oc3RhY2tYLCBzdGFja1ksIGNvbHVtbiwgcm93LCBsYXN0Qm9keSwgaSkge1xuICAgICAgICAgICAgdmFyIGFjdHVhbFJvd3MgPSBNYXRoLm1pbihyb3dzLCBNYXRoLmNlaWwoY29sdW1ucyAvIDIpKSxcbiAgICAgICAgICAgICAgICBsYXN0Qm9keVdpZHRoID0gbGFzdEJvZHkgPyBsYXN0Qm9keS5ib3VuZHMubWF4LnggLSBsYXN0Qm9keS5ib3VuZHMubWluLnggOiAwO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAocm93ID4gYWN0dWFsUm93cylcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIC8vIHJldmVyc2Ugcm93IG9yZGVyXG4gICAgICAgICAgICByb3cgPSBhY3R1YWxSb3dzIC0gcm93O1xuICAgICAgICAgICAgXG4gICAgICAgICAgICB2YXIgc3RhcnQgPSByb3csXG4gICAgICAgICAgICAgICAgZW5kID0gY29sdW1ucyAtIDEgLSByb3c7XG5cbiAgICAgICAgICAgIGlmIChjb2x1bW4gPCBzdGFydCB8fCBjb2x1bW4gPiBlbmQpXG4gICAgICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICAvLyByZXRyb2FjdGl2ZWx5IGZpeCB0aGUgZmlyc3QgYm9keSdzIHBvc2l0aW9uLCBzaW5jZSB3aWR0aCB3YXMgdW5rbm93blxuICAgICAgICAgICAgaWYgKGkgPT09IDEpIHtcbiAgICAgICAgICAgICAgICBCb2R5LnRyYW5zbGF0ZShsYXN0Qm9keSwgeyB4OiAoY29sdW1uICsgKGNvbHVtbnMgJSAyID09PSAxID8gMSA6IC0xKSkgKiBsYXN0Qm9keVdpZHRoLCB5OiAwIH0pO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB2YXIgeE9mZnNldCA9IGxhc3RCb2R5ID8gY29sdW1uICogbGFzdEJvZHlXaWR0aCA6IDA7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiBjYWxsYmFjayh4ICsgeE9mZnNldCArIGNvbHVtbiAqIGNvbHVtbkdhcCwgc3RhY2tZLCBjb2x1bW4sIHJvdywgbGFzdEJvZHksIGkpO1xuICAgICAgICB9KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBoYXMgbm93IG1vdmVkIHRvIHRoZSBbbmV3dG9uc0NyYWRsZSBleGFtcGxlXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy9ibG9iL21hc3Rlci9leGFtcGxlcy9uZXd0b25zQ3JhZGxlLmpzKSwgZm9sbG93IHRoYXQgaW5zdGVhZCBhcyB0aGlzIGZ1bmN0aW9uIGlzIGRlcHJlY2F0ZWQgaGVyZS5cbiAgICAgKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBuZXd0b25zQ3JhZGxlIGV4YW1wbGVcbiAgICAgKiBAbWV0aG9kIG5ld3RvbnNDcmFkbGVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0geCBTdGFydGluZyBwb3NpdGlvbiBpbiBYLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB5IFN0YXJ0aW5nIHBvc2l0aW9uIGluIFkuXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IG51bWJlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBzaXplXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGxlbmd0aFxuICAgICAqIEByZXR1cm4ge2NvbXBvc2l0ZX0gQSBuZXcgY29tcG9zaXRlIG5ld3RvbnNDcmFkbGUgYm9keVxuICAgICAqL1xuICAgIENvbXBvc2l0ZXMubmV3dG9uc0NyYWRsZSA9IGZ1bmN0aW9uKHgsIHksIG51bWJlciwgc2l6ZSwgbGVuZ3RoKSB7XG4gICAgICAgIHZhciBuZXd0b25zQ3JhZGxlID0gQ29tcG9zaXRlLmNyZWF0ZSh7IGxhYmVsOiAnTmV3dG9ucyBDcmFkbGUnIH0pO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbnVtYmVyOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBzZXBhcmF0aW9uID0gMS45LFxuICAgICAgICAgICAgICAgIGNpcmNsZSA9IEJvZGllcy5jaXJjbGUoeCArIGkgKiAoc2l6ZSAqIHNlcGFyYXRpb24pLCB5ICsgbGVuZ3RoLCBzaXplLCBcbiAgICAgICAgICAgICAgICAgICAgeyBpbmVydGlhOiBJbmZpbml0eSwgcmVzdGl0dXRpb246IDEsIGZyaWN0aW9uOiAwLCBmcmljdGlvbkFpcjogMC4wMDAxLCBzbG9wOiAxIH0pLFxuICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQgPSBDb25zdHJhaW50LmNyZWF0ZSh7IHBvaW50QTogeyB4OiB4ICsgaSAqIChzaXplICogc2VwYXJhdGlvbiksIHk6IHkgfSwgYm9keUI6IGNpcmNsZSB9KTtcblxuICAgICAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkobmV3dG9uc0NyYWRsZSwgY2lyY2xlKTtcbiAgICAgICAgICAgIENvbXBvc2l0ZS5hZGRDb25zdHJhaW50KG5ld3RvbnNDcmFkbGUsIGNvbnN0cmFpbnQpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIG5ld3RvbnNDcmFkbGU7XG4gICAgfTtcblxuICAgIGRlcHJlY2F0ZWQoQ29tcG9zaXRlcywgJ25ld3RvbnNDcmFkbGUnLCAnQ29tcG9zaXRlcy5uZXd0b25zQ3JhZGxlIOKepCBtb3ZlZCB0byBuZXd0b25zQ3JhZGxlIGV4YW1wbGUnKTtcbiAgICBcbiAgICAvKipcbiAgICAgKiBUaGlzIGhhcyBub3cgbW92ZWQgdG8gdGhlIFtjYXIgZXhhbXBsZV0oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvY2FyLmpzKSwgZm9sbG93IHRoYXQgaW5zdGVhZCBhcyB0aGlzIGZ1bmN0aW9uIGlzIGRlcHJlY2F0ZWQgaGVyZS5cbiAgICAgKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBjYXIgZXhhbXBsZVxuICAgICAqIEBtZXRob2QgY2FyXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggU3RhcnRpbmcgcG9zaXRpb24gaW4gWC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBTdGFydGluZyBwb3NpdGlvbiBpbiBZLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBoZWlnaHRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2hlZWxTaXplXG4gICAgICogQHJldHVybiB7Y29tcG9zaXRlfSBBIG5ldyBjb21wb3NpdGUgY2FyIGJvZHlcbiAgICAgKi9cbiAgICBDb21wb3NpdGVzLmNhciA9IGZ1bmN0aW9uKHgsIHksIHdpZHRoLCBoZWlnaHQsIHdoZWVsU2l6ZSkge1xuICAgICAgICB2YXIgZ3JvdXAgPSBCb2R5Lm5leHRHcm91cCh0cnVlKSxcbiAgICAgICAgICAgIHdoZWVsQmFzZSA9IDIwLFxuICAgICAgICAgICAgd2hlZWxBT2Zmc2V0ID0gLXdpZHRoICogMC41ICsgd2hlZWxCYXNlLFxuICAgICAgICAgICAgd2hlZWxCT2Zmc2V0ID0gd2lkdGggKiAwLjUgLSB3aGVlbEJhc2UsXG4gICAgICAgICAgICB3aGVlbFlPZmZzZXQgPSAwO1xuICAgIFxuICAgICAgICB2YXIgY2FyID0gQ29tcG9zaXRlLmNyZWF0ZSh7IGxhYmVsOiAnQ2FyJyB9KSxcbiAgICAgICAgICAgIGJvZHkgPSBCb2RpZXMucmVjdGFuZ2xlKHgsIHksIHdpZHRoLCBoZWlnaHQsIHsgXG4gICAgICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgICAgIGdyb3VwOiBncm91cFxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgY2hhbWZlcjoge1xuICAgICAgICAgICAgICAgICAgICByYWRpdXM6IGhlaWdodCAqIDAuNVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgZGVuc2l0eTogMC4wMDAyXG4gICAgICAgICAgICB9KTtcbiAgICBcbiAgICAgICAgdmFyIHdoZWVsQSA9IEJvZGllcy5jaXJjbGUoeCArIHdoZWVsQU9mZnNldCwgeSArIHdoZWVsWU9mZnNldCwgd2hlZWxTaXplLCB7IFxuICAgICAgICAgICAgY29sbGlzaW9uRmlsdGVyOiB7XG4gICAgICAgICAgICAgICAgZ3JvdXA6IGdyb3VwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnJpY3Rpb246IDAuOFxuICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgIHZhciB3aGVlbEIgPSBCb2RpZXMuY2lyY2xlKHggKyB3aGVlbEJPZmZzZXQsIHkgKyB3aGVlbFlPZmZzZXQsIHdoZWVsU2l6ZSwgeyBcbiAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGdyb3VwOiBncm91cFxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIGZyaWN0aW9uOiAwLjhcbiAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXIgYXhlbEEgPSBDb25zdHJhaW50LmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5QjogYm9keSxcbiAgICAgICAgICAgIHBvaW50QjogeyB4OiB3aGVlbEFPZmZzZXQsIHk6IHdoZWVsWU9mZnNldCB9LFxuICAgICAgICAgICAgYm9keUE6IHdoZWVsQSxcbiAgICAgICAgICAgIHN0aWZmbmVzczogMSxcbiAgICAgICAgICAgIGxlbmd0aDogMFxuICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICB2YXIgYXhlbEIgPSBDb25zdHJhaW50LmNyZWF0ZSh7XG4gICAgICAgICAgICBib2R5QjogYm9keSxcbiAgICAgICAgICAgIHBvaW50QjogeyB4OiB3aGVlbEJPZmZzZXQsIHk6IHdoZWVsWU9mZnNldCB9LFxuICAgICAgICAgICAgYm9keUE6IHdoZWVsQixcbiAgICAgICAgICAgIHN0aWZmbmVzczogMSxcbiAgICAgICAgICAgIGxlbmd0aDogMFxuICAgICAgICB9KTtcbiAgICAgICAgXG4gICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KGNhciwgYm9keSk7XG4gICAgICAgIENvbXBvc2l0ZS5hZGRCb2R5KGNhciwgd2hlZWxBKTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZEJvZHkoY2FyLCB3aGVlbEIpO1xuICAgICAgICBDb21wb3NpdGUuYWRkQ29uc3RyYWludChjYXIsIGF4ZWxBKTtcbiAgICAgICAgQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQoY2FyLCBheGVsQik7XG5cbiAgICAgICAgcmV0dXJuIGNhcjtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChDb21wb3NpdGVzLCAnY2FyJywgJ0NvbXBvc2l0ZXMuY2FyIOKepCBtb3ZlZCB0byBjYXIgZXhhbXBsZScpO1xuXG4gICAgLyoqXG4gICAgICogVGhpcyBoYXMgbm93IG1vdmVkIHRvIHRoZSBbc29mdEJvZHkgZXhhbXBsZV0oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvc29mdEJvZHkuanMpXG4gICAgICogYW5kIHRoZSBbY2xvdGggZXhhbXBsZV0oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvYmxvYi9tYXN0ZXIvZXhhbXBsZXMvY2xvdGguanMpLCBmb2xsb3cgdGhvc2UgaW5zdGVhZCBhcyB0aGlzIGZ1bmN0aW9uIGlzIGRlcHJlY2F0ZWQgaGVyZS5cbiAgICAgKiBAZGVwcmVjYXRlZCBtb3ZlZCB0byBzb2Z0Qm9keSBhbmQgY2xvdGggZXhhbXBsZXNcbiAgICAgKiBAbWV0aG9kIHNvZnRCb2R5XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHggU3RhcnRpbmcgcG9zaXRpb24gaW4gWC5cbiAgICAgKiBAcGFyYW0ge251bWJlcn0geSBTdGFydGluZyBwb3NpdGlvbiBpbiBZLlxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBjb2x1bW5zXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd3NcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gY29sdW1uR2FwXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHJvd0dhcFxuICAgICAqIEBwYXJhbSB7Ym9vbGVhbn0gY3Jvc3NCcmFjZVxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwYXJ0aWNsZVJhZGl1c1xuICAgICAqIEBwYXJhbSB7fSBwYXJ0aWNsZU9wdGlvbnNcbiAgICAgKiBAcGFyYW0ge30gY29uc3RyYWludE9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtjb21wb3NpdGV9IEEgbmV3IGNvbXBvc2l0ZSBzb2Z0Qm9keVxuICAgICAqL1xuICAgIENvbXBvc2l0ZXMuc29mdEJvZHkgPSBmdW5jdGlvbih4LCB5LCBjb2x1bW5zLCByb3dzLCBjb2x1bW5HYXAsIHJvd0dhcCwgY3Jvc3NCcmFjZSwgcGFydGljbGVSYWRpdXMsIHBhcnRpY2xlT3B0aW9ucywgY29uc3RyYWludE9wdGlvbnMpIHtcbiAgICAgICAgcGFydGljbGVPcHRpb25zID0gQ29tbW9uLmV4dGVuZCh7IGluZXJ0aWE6IEluZmluaXR5IH0sIHBhcnRpY2xlT3B0aW9ucyk7XG4gICAgICAgIGNvbnN0cmFpbnRPcHRpb25zID0gQ29tbW9uLmV4dGVuZCh7IHN0aWZmbmVzczogMC4yLCByZW5kZXI6IHsgdHlwZTogJ2xpbmUnLCBhbmNob3JzOiBmYWxzZSB9IH0sIGNvbnN0cmFpbnRPcHRpb25zKTtcblxuICAgICAgICB2YXIgc29mdEJvZHkgPSBDb21wb3NpdGVzLnN0YWNrKHgsIHksIGNvbHVtbnMsIHJvd3MsIGNvbHVtbkdhcCwgcm93R2FwLCBmdW5jdGlvbihzdGFja1gsIHN0YWNrWSkge1xuICAgICAgICAgICAgcmV0dXJuIEJvZGllcy5jaXJjbGUoc3RhY2tYLCBzdGFja1ksIHBhcnRpY2xlUmFkaXVzLCBwYXJ0aWNsZU9wdGlvbnMpO1xuICAgICAgICB9KTtcblxuICAgICAgICBDb21wb3NpdGVzLm1lc2goc29mdEJvZHksIGNvbHVtbnMsIHJvd3MsIGNyb3NzQnJhY2UsIGNvbnN0cmFpbnRPcHRpb25zKTtcblxuICAgICAgICBzb2Z0Qm9keS5sYWJlbCA9ICdTb2Z0IEJvZHknO1xuXG4gICAgICAgIHJldHVybiBzb2Z0Qm9keTtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChDb21wb3NpdGVzLCAnc29mdEJvZHknLCAnQ29tcG9zaXRlcy5zb2Z0Qm9keSDinqQgbW92ZWQgdG8gc29mdEJvZHkgYW5kIGNsb3RoIGV4YW1wbGVzJyk7XG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjMgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoaXMgbW9kdWxlIGhhcyBub3cgYmVlbiByZXBsYWNlZCBieSBgTWF0dGVyLkRldGVjdG9yYC5cbipcbiogQWxsIHVzYWdlIHNob3VsZCBiZSBtaWdyYXRlZCB0byBgTWF0dGVyLkRldGVjdG9yYCBvciBhbm90aGVyIGFsdGVybmF0aXZlLlxuKiBGb3IgYmFjay1jb21wYXRpYmlsaXR5IHB1cnBvc2VzIHRoaXMgbW9kdWxlIHdpbGwgcmVtYWluIGZvciBhIHNob3J0IHRlcm0gYW5kIHRoZW4gbGF0ZXIgcmVtb3ZlZCBpbiBhIGZ1dHVyZSByZWxlYXNlLlxuKlxuKiBUaGUgYE1hdHRlci5HcmlkYCBtb2R1bGUgY29udGFpbnMgbWV0aG9kcyBmb3IgY3JlYXRpbmcgYW5kIG1hbmlwdWxhdGluZyBjb2xsaXNpb24gYnJvYWRwaGFzZSBncmlkIHN0cnVjdHVyZXMuXG4qXG4qIEBjbGFzcyBHcmlkXG4qIEBkZXByZWNhdGVkXG4qL1xuXG52YXIgR3JpZCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IEdyaWQ7XG5cbnZhciBQYWlyID0gX193ZWJwYWNrX3JlcXVpcmVfXyg5KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIGRlcHJlY2F0ZWQgPSBDb21tb24uZGVwcmVjYXRlZDtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBncmlkLlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBtZXRob2QgY3JlYXRlXG4gICAgICogQHBhcmFtIHt9IG9wdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtncmlkfSBBIG5ldyBncmlkXG4gICAgICovXG4gICAgR3JpZC5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGJ1Y2tldHM6IHt9LFxuICAgICAgICAgICAgcGFpcnM6IHt9LFxuICAgICAgICAgICAgcGFpcnNMaXN0OiBbXSxcbiAgICAgICAgICAgIGJ1Y2tldFdpZHRoOiA0OCxcbiAgICAgICAgICAgIGJ1Y2tldEhlaWdodDogNDhcbiAgICAgICAgfTtcblxuICAgICAgICByZXR1cm4gQ29tbW9uLmV4dGVuZChkZWZhdWx0cywgb3B0aW9ucyk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFRoZSB3aWR0aCBvZiBhIHNpbmdsZSBncmlkIGJ1Y2tldC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBidWNrZXRXaWR0aFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDQ4XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgaGVpZ2h0IG9mIGEgc2luZ2xlIGdyaWQgYnVja2V0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJ1Y2tldEhlaWdodFxuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDQ4XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBVcGRhdGVzIHRoZSBncmlkLlxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtncmlkfSBncmlkXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge2Jvb2xlYW59IGZvcmNlVXBkYXRlXG4gICAgICovXG4gICAgR3JpZC51cGRhdGUgPSBmdW5jdGlvbihncmlkLCBib2RpZXMsIGVuZ2luZSwgZm9yY2VVcGRhdGUpIHtcbiAgICAgICAgdmFyIGksIGNvbCwgcm93LFxuICAgICAgICAgICAgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICBidWNrZXRzID0gZ3JpZC5idWNrZXRzLFxuICAgICAgICAgICAgYnVja2V0LFxuICAgICAgICAgICAgYnVja2V0SWQsXG4gICAgICAgICAgICBncmlkQ2hhbmdlZCA9IGZhbHNlO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoYm9keS5pc1NsZWVwaW5nICYmICFmb3JjZVVwZGF0ZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gdGVtcG9yYXJ5IGJhY2sgY29tcGF0aWJpbGl0eSBib3VuZHMgY2hlY2tcbiAgICAgICAgICAgIGlmICh3b3JsZC5ib3VuZHMgJiYgKGJvZHkuYm91bmRzLm1heC54IDwgd29ybGQuYm91bmRzLm1pbi54IHx8IGJvZHkuYm91bmRzLm1pbi54ID4gd29ybGQuYm91bmRzLm1heC54XG4gICAgICAgICAgICAgICAgfHwgYm9keS5ib3VuZHMubWF4LnkgPCB3b3JsZC5ib3VuZHMubWluLnkgfHwgYm9keS5ib3VuZHMubWluLnkgPiB3b3JsZC5ib3VuZHMubWF4LnkpKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICB2YXIgbmV3UmVnaW9uID0gR3JpZC5fZ2V0UmVnaW9uKGdyaWQsIGJvZHkpO1xuXG4gICAgICAgICAgICAvLyBpZiB0aGUgYm9keSBoYXMgY2hhbmdlZCBncmlkIHJlZ2lvblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlZ2lvbiB8fCBuZXdSZWdpb24uaWQgIT09IGJvZHkucmVnaW9uLmlkIHx8IGZvcmNlVXBkYXRlKSB7XG5cbiAgICAgICAgICAgICAgICBpZiAoIWJvZHkucmVnaW9uIHx8IGZvcmNlVXBkYXRlKVxuICAgICAgICAgICAgICAgICAgICBib2R5LnJlZ2lvbiA9IG5ld1JlZ2lvbjtcblxuICAgICAgICAgICAgICAgIHZhciB1bmlvbiA9IEdyaWQuX3JlZ2lvblVuaW9uKG5ld1JlZ2lvbiwgYm9keS5yZWdpb24pO1xuXG4gICAgICAgICAgICAgICAgLy8gdXBkYXRlIGdyaWQgYnVja2V0cyBhZmZlY3RlZCBieSByZWdpb24gY2hhbmdlXG4gICAgICAgICAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIHRoZSB1bmlvbiBvZiBib3RoIHJlZ2lvbnNcbiAgICAgICAgICAgICAgICBmb3IgKGNvbCA9IHVuaW9uLnN0YXJ0Q29sOyBjb2wgPD0gdW5pb24uZW5kQ29sOyBjb2wrKykge1xuICAgICAgICAgICAgICAgICAgICBmb3IgKHJvdyA9IHVuaW9uLnN0YXJ0Um93OyByb3cgPD0gdW5pb24uZW5kUm93OyByb3crKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgYnVja2V0SWQgPSBHcmlkLl9nZXRCdWNrZXRJZChjb2wsIHJvdyk7XG4gICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQgPSBidWNrZXRzW2J1Y2tldElkXTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGlzSW5zaWRlTmV3UmVnaW9uID0gKGNvbCA+PSBuZXdSZWdpb24uc3RhcnRDb2wgJiYgY29sIDw9IG5ld1JlZ2lvbi5lbmRDb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHJvdyA+PSBuZXdSZWdpb24uc3RhcnRSb3cgJiYgcm93IDw9IG5ld1JlZ2lvbi5lbmRSb3cpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgaXNJbnNpZGVPbGRSZWdpb24gPSAoY29sID49IGJvZHkucmVnaW9uLnN0YXJ0Q29sICYmIGNvbCA8PSBib2R5LnJlZ2lvbi5lbmRDb2xcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICYmIHJvdyA+PSBib2R5LnJlZ2lvbi5zdGFydFJvdyAmJiByb3cgPD0gYm9keS5yZWdpb24uZW5kUm93KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgLy8gcmVtb3ZlIGZyb20gb2xkIHJlZ2lvbiBidWNrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWlzSW5zaWRlTmV3UmVnaW9uICYmIGlzSW5zaWRlT2xkUmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGlzSW5zaWRlT2xkUmVnaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChidWNrZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBHcmlkLl9idWNrZXRSZW1vdmVCb2R5KGdyaWQsIGJ1Y2tldCwgYm9keSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICAvLyBhZGQgdG8gbmV3IHJlZ2lvbiBidWNrZXRzXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoYm9keS5yZWdpb24gPT09IG5ld1JlZ2lvbiB8fCAoaXNJbnNpZGVOZXdSZWdpb24gJiYgIWlzSW5zaWRlT2xkUmVnaW9uKSB8fCBmb3JjZVVwZGF0ZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghYnVja2V0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBidWNrZXQgPSBHcmlkLl9jcmVhdGVCdWNrZXQoYnVja2V0cywgYnVja2V0SWQpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIEdyaWQuX2J1Y2tldEFkZEJvZHkoZ3JpZCwgYnVja2V0LCBib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIHNldCB0aGUgbmV3IHJlZ2lvblxuICAgICAgICAgICAgICAgIGJvZHkucmVnaW9uID0gbmV3UmVnaW9uO1xuXG4gICAgICAgICAgICAgICAgLy8gZmxhZyBjaGFuZ2VzIHNvIHdlIGNhbiB1cGRhdGUgcGFpcnNcbiAgICAgICAgICAgICAgICBncmlkQ2hhbmdlZCA9IHRydWU7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvLyB1cGRhdGUgcGFpcnMgbGlzdCBvbmx5IGlmIHBhaXJzIGNoYW5nZWQgKGkuZS4gYSBib2R5IGNoYW5nZWQgcmVnaW9uKVxuICAgICAgICBpZiAoZ3JpZENoYW5nZWQpXG4gICAgICAgICAgICBncmlkLnBhaXJzTGlzdCA9IEdyaWQuX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdChncmlkKTtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChHcmlkLCAndXBkYXRlJywgJ0dyaWQudXBkYXRlIOKepCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3InKTtcblxuICAgIC8qKlxuICAgICAqIENsZWFycyB0aGUgZ3JpZC5cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAbWV0aG9kIGNsZWFyXG4gICAgICogQHBhcmFtIHtncmlkfSBncmlkXG4gICAgICovXG4gICAgR3JpZC5jbGVhciA9IGZ1bmN0aW9uKGdyaWQpIHtcbiAgICAgICAgZ3JpZC5idWNrZXRzID0ge307XG4gICAgICAgIGdyaWQucGFpcnMgPSB7fTtcbiAgICAgICAgZ3JpZC5wYWlyc0xpc3QgPSBbXTtcbiAgICB9O1xuXG4gICAgZGVwcmVjYXRlZChHcmlkLCAnY2xlYXInLCAnR3JpZC5jbGVhciDinqQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yJyk7XG5cbiAgICAvKipcbiAgICAgKiBGaW5kcyB0aGUgdW5pb24gb2YgdHdvIHJlZ2lvbnMuXG4gICAgICogQG1ldGhvZCBfcmVnaW9uVW5pb25cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSByZWdpb25BXG4gICAgICogQHBhcmFtIHt9IHJlZ2lvbkJcbiAgICAgKiBAcmV0dXJuIHt9IHJlZ2lvblxuICAgICAqL1xuICAgIEdyaWQuX3JlZ2lvblVuaW9uID0gZnVuY3Rpb24ocmVnaW9uQSwgcmVnaW9uQikge1xuICAgICAgICB2YXIgc3RhcnRDb2wgPSBNYXRoLm1pbihyZWdpb25BLnN0YXJ0Q29sLCByZWdpb25CLnN0YXJ0Q29sKSxcbiAgICAgICAgICAgIGVuZENvbCA9IE1hdGgubWF4KHJlZ2lvbkEuZW5kQ29sLCByZWdpb25CLmVuZENvbCksXG4gICAgICAgICAgICBzdGFydFJvdyA9IE1hdGgubWluKHJlZ2lvbkEuc3RhcnRSb3csIHJlZ2lvbkIuc3RhcnRSb3cpLFxuICAgICAgICAgICAgZW5kUm93ID0gTWF0aC5tYXgocmVnaW9uQS5lbmRSb3csIHJlZ2lvbkIuZW5kUm93KTtcblxuICAgICAgICByZXR1cm4gR3JpZC5fY3JlYXRlUmVnaW9uKHN0YXJ0Q29sLCBlbmRDb2wsIHN0YXJ0Um93LCBlbmRSb3cpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByZWdpb24gYSBnaXZlbiBib2R5IGZhbGxzIGluIGZvciBhIGdpdmVuIGdyaWQuXG4gICAgICogQG1ldGhvZCBfZ2V0UmVnaW9uXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBib2R5XG4gICAgICogQHJldHVybiB7fSByZWdpb25cbiAgICAgKi9cbiAgICBHcmlkLl9nZXRSZWdpb24gPSBmdW5jdGlvbihncmlkLCBib2R5KSB7XG4gICAgICAgIHZhciBib3VuZHMgPSBib2R5LmJvdW5kcyxcbiAgICAgICAgICAgIHN0YXJ0Q29sID0gTWF0aC5mbG9vcihib3VuZHMubWluLnggLyBncmlkLmJ1Y2tldFdpZHRoKSxcbiAgICAgICAgICAgIGVuZENvbCA9IE1hdGguZmxvb3IoYm91bmRzLm1heC54IC8gZ3JpZC5idWNrZXRXaWR0aCksXG4gICAgICAgICAgICBzdGFydFJvdyA9IE1hdGguZmxvb3IoYm91bmRzLm1pbi55IC8gZ3JpZC5idWNrZXRIZWlnaHQpLFxuICAgICAgICAgICAgZW5kUm93ID0gTWF0aC5mbG9vcihib3VuZHMubWF4LnkgLyBncmlkLmJ1Y2tldEhlaWdodCk7XG5cbiAgICAgICAgcmV0dXJuIEdyaWQuX2NyZWF0ZVJlZ2lvbihzdGFydENvbCwgZW5kQ29sLCBzdGFydFJvdywgZW5kUm93KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIHJlZ2lvbi5cbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVSZWdpb25cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBNYXR0ZXIuRGV0ZWN0b3JcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSBzdGFydENvbFxuICAgICAqIEBwYXJhbSB7fSBlbmRDb2xcbiAgICAgKiBAcGFyYW0ge30gc3RhcnRSb3dcbiAgICAgKiBAcGFyYW0ge30gZW5kUm93XG4gICAgICogQHJldHVybiB7fSByZWdpb25cbiAgICAgKi9cbiAgICBHcmlkLl9jcmVhdGVSZWdpb24gPSBmdW5jdGlvbihzdGFydENvbCwgZW5kQ29sLCBzdGFydFJvdywgZW5kUm93KSB7XG4gICAgICAgIHJldHVybiB7IFxuICAgICAgICAgICAgaWQ6IHN0YXJ0Q29sICsgJywnICsgZW5kQ29sICsgJywnICsgc3RhcnRSb3cgKyAnLCcgKyBlbmRSb3csXG4gICAgICAgICAgICBzdGFydENvbDogc3RhcnRDb2wsIFxuICAgICAgICAgICAgZW5kQ29sOiBlbmRDb2wsIFxuICAgICAgICAgICAgc3RhcnRSb3c6IHN0YXJ0Um93LCBcbiAgICAgICAgICAgIGVuZFJvdzogZW5kUm93IFxuICAgICAgICB9O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSBidWNrZXQgaWQgYXQgdGhlIGdpdmVuIHBvc2l0aW9uLlxuICAgICAqIEBtZXRob2QgX2dldEJ1Y2tldElkXG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gY29sdW1uXG4gICAgICogQHBhcmFtIHt9IHJvd1xuICAgICAqIEByZXR1cm4ge3N0cmluZ30gYnVja2V0IGlkXG4gICAgICovXG4gICAgR3JpZC5fZ2V0QnVja2V0SWQgPSBmdW5jdGlvbihjb2x1bW4sIHJvdykge1xuICAgICAgICByZXR1cm4gJ0MnICsgY29sdW1uICsgJ1InICsgcm93O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgYnVja2V0LlxuICAgICAqIEBtZXRob2QgX2NyZWF0ZUJ1Y2tldFxuICAgICAqIEBkZXByZWNhdGVkIHJlcGxhY2VkIGJ5IE1hdHRlci5EZXRlY3RvclxuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHt9IGJ1Y2tldHNcbiAgICAgKiBAcGFyYW0ge30gYnVja2V0SWRcbiAgICAgKiBAcmV0dXJuIHt9IGJ1Y2tldFxuICAgICAqL1xuICAgIEdyaWQuX2NyZWF0ZUJ1Y2tldCA9IGZ1bmN0aW9uKGJ1Y2tldHMsIGJ1Y2tldElkKSB7XG4gICAgICAgIHZhciBidWNrZXQgPSBidWNrZXRzW2J1Y2tldElkXSA9IFtdO1xuICAgICAgICByZXR1cm4gYnVja2V0O1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBZGRzIGEgYm9keSB0byBhIGJ1Y2tldC5cbiAgICAgKiBAbWV0aG9kIF9idWNrZXRBZGRCb2R5XG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBidWNrZXRcbiAgICAgKiBAcGFyYW0ge30gYm9keVxuICAgICAqL1xuICAgIEdyaWQuX2J1Y2tldEFkZEJvZHkgPSBmdW5jdGlvbihncmlkLCBidWNrZXQsIGJvZHkpIHtcbiAgICAgICAgdmFyIGdyaWRQYWlycyA9IGdyaWQucGFpcnMsXG4gICAgICAgICAgICBwYWlySWQgPSBQYWlyLmlkLFxuICAgICAgICAgICAgYnVja2V0TGVuZ3RoID0gYnVja2V0Lmxlbmd0aCxcbiAgICAgICAgICAgIGk7XG5cbiAgICAgICAgLy8gYWRkIG5ldyBwYWlyc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYnVja2V0TGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5QiA9IGJ1Y2tldFtpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkuaWQgPT09IGJvZHlCLmlkIHx8IChib2R5LmlzU3RhdGljICYmIGJvZHlCLmlzU3RhdGljKSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8ga2VlcCB0cmFjayBvZiB0aGUgbnVtYmVyIG9mIGJ1Y2tldHMgdGhlIHBhaXIgZXhpc3RzIGluXG4gICAgICAgICAgICAvLyBpbXBvcnRhbnQgZm9yIEdyaWQudXBkYXRlIHRvIHdvcmtcbiAgICAgICAgICAgIHZhciBpZCA9IHBhaXJJZChib2R5LCBib2R5QiksXG4gICAgICAgICAgICAgICAgcGFpciA9IGdyaWRQYWlyc1tpZF07XG5cbiAgICAgICAgICAgIGlmIChwYWlyKSB7XG4gICAgICAgICAgICAgICAgcGFpclsyXSArPSAxO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBncmlkUGFpcnNbaWRdID0gW2JvZHksIGJvZHlCLCAxXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGFkZCB0byBib2RpZXMgKGFmdGVyIHBhaXJzLCBvdGhlcndpc2UgcGFpcnMgd2l0aCBzZWxmKVxuICAgICAgICBidWNrZXQucHVzaChib2R5KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVtb3ZlcyBhIGJvZHkgZnJvbSBhIGJ1Y2tldC5cbiAgICAgKiBAbWV0aG9kIF9idWNrZXRSZW1vdmVCb2R5XG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEBwYXJhbSB7fSBidWNrZXRcbiAgICAgKiBAcGFyYW0ge30gYm9keVxuICAgICAqL1xuICAgIEdyaWQuX2J1Y2tldFJlbW92ZUJvZHkgPSBmdW5jdGlvbihncmlkLCBidWNrZXQsIGJvZHkpIHtcbiAgICAgICAgdmFyIGdyaWRQYWlycyA9IGdyaWQucGFpcnMsXG4gICAgICAgICAgICBwYWlySWQgPSBQYWlyLmlkLFxuICAgICAgICAgICAgaTtcblxuICAgICAgICAvLyByZW1vdmUgZnJvbSBidWNrZXRcbiAgICAgICAgYnVja2V0LnNwbGljZShDb21tb24uaW5kZXhPZihidWNrZXQsIGJvZHkpLCAxKTtcblxuICAgICAgICB2YXIgYnVja2V0TGVuZ3RoID0gYnVja2V0Lmxlbmd0aDtcblxuICAgICAgICAvLyB1cGRhdGUgcGFpciBjb3VudHNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJ1Y2tldExlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAvLyBrZWVwIHRyYWNrIG9mIHRoZSBudW1iZXIgb2YgYnVja2V0cyB0aGUgcGFpciBleGlzdHMgaW5cbiAgICAgICAgICAgIC8vIGltcG9ydGFudCBmb3IgX2NyZWF0ZUFjdGl2ZVBhaXJzTGlzdCB0byB3b3JrXG4gICAgICAgICAgICB2YXIgcGFpciA9IGdyaWRQYWlyc1twYWlySWQoYm9keSwgYnVja2V0W2ldKV07XG5cbiAgICAgICAgICAgIGlmIChwYWlyKVxuICAgICAgICAgICAgICAgIHBhaXJbMl0gLT0gMTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZW5lcmF0ZXMgYSBsaXN0IG9mIHRoZSBhY3RpdmUgcGFpcnMgaW4gdGhlIGdyaWQuXG4gICAgICogQG1ldGhvZCBfY3JlYXRlQWN0aXZlUGFpcnNMaXN0XG4gICAgICogQGRlcHJlY2F0ZWQgcmVwbGFjZWQgYnkgTWF0dGVyLkRldGVjdG9yXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge30gZ3JpZFxuICAgICAqIEByZXR1cm4gW10gcGFpcnNcbiAgICAgKi9cbiAgICBHcmlkLl9jcmVhdGVBY3RpdmVQYWlyc0xpc3QgPSBmdW5jdGlvbihncmlkKSB7XG4gICAgICAgIHZhciBwYWlyLFxuICAgICAgICAgICAgZ3JpZFBhaXJzID0gZ3JpZC5wYWlycyxcbiAgICAgICAgICAgIHBhaXJLZXlzID0gQ29tbW9uLmtleXMoZ3JpZFBhaXJzKSxcbiAgICAgICAgICAgIHBhaXJLZXlzTGVuZ3RoID0gcGFpcktleXMubGVuZ3RoLFxuICAgICAgICAgICAgcGFpcnMgPSBbXSxcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgLy8gaXRlcmF0ZSBvdmVyIGdyaWQucGFpcnNcbiAgICAgICAgZm9yIChrID0gMDsgayA8IHBhaXJLZXlzTGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBncmlkUGFpcnNbcGFpcktleXNba11dO1xuXG4gICAgICAgICAgICAvLyBpZiBwYWlyIGV4aXN0cyBpbiBhdCBsZWFzdCBvbmUgYnVja2V0XG4gICAgICAgICAgICAvLyBpdCBpcyBhIHBhaXIgdGhhdCBuZWVkcyBmdXJ0aGVyIGNvbGxpc2lvbiB0ZXN0aW5nIHNvIHB1c2ggaXRcbiAgICAgICAgICAgIGlmIChwYWlyWzJdID4gMCkge1xuICAgICAgICAgICAgICAgIHBhaXJzLnB1c2gocGFpcik7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGRlbGV0ZSBncmlkUGFpcnNbcGFpcktleXNba11dO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHBhaXJzO1xuICAgIH07XG4gICAgXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjQgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLk1vdXNlQ29uc3RyYWludGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGNyZWF0aW5nIG1vdXNlIGNvbnN0cmFpbnRzLlxuKiBNb3VzZSBjb25zdHJhaW50cyBhcmUgdXNlZCBmb3IgYWxsb3dpbmcgdXNlciBpbnRlcmFjdGlvbiwgcHJvdmlkaW5nIHRoZSBhYmlsaXR5IHRvIG1vdmUgYm9kaWVzIHZpYSB0aGUgbW91c2Ugb3IgdG91Y2guXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBNb3VzZUNvbnN0cmFpbnRcbiovXG5cbnZhciBNb3VzZUNvbnN0cmFpbnQgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBNb3VzZUNvbnN0cmFpbnQ7XG5cbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG52YXIgU2xlZXBpbmcgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDcpO1xudmFyIE1vdXNlID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNCk7XG52YXIgRXZlbnRzID0gX193ZWJwYWNrX3JlcXVpcmVfXyg1KTtcbnZhciBEZXRlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMTMpO1xudmFyIENvbnN0cmFpbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEwKTtcbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgLyoqXG4gICAgICogQ3JlYXRlcyBhIG5ldyBtb3VzZSBjb25zdHJhaW50LlxuICAgICAqIEFsbCBwcm9wZXJ0aWVzIGhhdmUgZGVmYXVsdCB2YWx1ZXMsIGFuZCBtYW55IGFyZSBwcmUtY2FsY3VsYXRlZCBhdXRvbWF0aWNhbGx5IGJhc2VkIG9uIG90aGVyIHByb3BlcnRpZXMuXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge30gb3B0aW9uc1xuICAgICAqIEByZXR1cm4ge01vdXNlQ29uc3RyYWludH0gQSBuZXcgTW91c2VDb25zdHJhaW50XG4gICAgICovXG4gICAgTW91c2VDb25zdHJhaW50LmNyZWF0ZSA9IGZ1bmN0aW9uKGVuZ2luZSwgb3B0aW9ucykge1xuICAgICAgICB2YXIgbW91c2UgPSAoZW5naW5lID8gZW5naW5lLm1vdXNlIDogbnVsbCkgfHwgKG9wdGlvbnMgPyBvcHRpb25zLm1vdXNlIDogbnVsbCk7XG5cbiAgICAgICAgaWYgKCFtb3VzZSkge1xuICAgICAgICAgICAgaWYgKGVuZ2luZSAmJiBlbmdpbmUucmVuZGVyICYmIGVuZ2luZS5yZW5kZXIuY2FudmFzKSB7XG4gICAgICAgICAgICAgICAgbW91c2UgPSBNb3VzZS5jcmVhdGUoZW5naW5lLnJlbmRlci5jYW52YXMpO1xuICAgICAgICAgICAgfSBlbHNlIGlmIChvcHRpb25zICYmIG9wdGlvbnMuZWxlbWVudCkge1xuICAgICAgICAgICAgICAgIG1vdXNlID0gTW91c2UuY3JlYXRlKG9wdGlvbnMuZWxlbWVudCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIG1vdXNlID0gTW91c2UuY3JlYXRlKCk7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm4oJ01vdXNlQ29uc3RyYWludC5jcmVhdGU6IG9wdGlvbnMubW91c2Ugd2FzIHVuZGVmaW5lZCwgb3B0aW9ucy5lbGVtZW50IHdhcyB1bmRlZmluZWQsIG1heSBub3QgZnVuY3Rpb24gYXMgZXhwZWN0ZWQnKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIHZhciBjb25zdHJhaW50ID0gQ29uc3RyYWludC5jcmVhdGUoeyBcbiAgICAgICAgICAgIGxhYmVsOiAnTW91c2UgQ29uc3RyYWludCcsXG4gICAgICAgICAgICBwb2ludEE6IG1vdXNlLnBvc2l0aW9uLFxuICAgICAgICAgICAgcG9pbnRCOiB7IHg6IDAsIHk6IDAgfSxcbiAgICAgICAgICAgIGxlbmd0aDogMC4wMSwgXG4gICAgICAgICAgICBzdGlmZm5lc3M6IDAuMSxcbiAgICAgICAgICAgIGFuZ3VsYXJTdGlmZm5lc3M6IDEsXG4gICAgICAgICAgICByZW5kZXI6IHtcbiAgICAgICAgICAgICAgICBzdHJva2VTdHlsZTogJyM5MEVFOTAnLFxuICAgICAgICAgICAgICAgIGxpbmVXaWR0aDogM1xuICAgICAgICAgICAgfVxuICAgICAgICB9KTtcblxuICAgICAgICB2YXIgZGVmYXVsdHMgPSB7XG4gICAgICAgICAgICB0eXBlOiAnbW91c2VDb25zdHJhaW50JyxcbiAgICAgICAgICAgIG1vdXNlOiBtb3VzZSxcbiAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBib2R5OiBudWxsLFxuICAgICAgICAgICAgY29uc3RyYWludDogY29uc3RyYWludCxcbiAgICAgICAgICAgIGNvbGxpc2lvbkZpbHRlcjoge1xuICAgICAgICAgICAgICAgIGNhdGVnb3J5OiAweDAwMDEsXG4gICAgICAgICAgICAgICAgbWFzazogMHhGRkZGRkZGRixcbiAgICAgICAgICAgICAgICBncm91cDogMFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBtb3VzZUNvbnN0cmFpbnQgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICBFdmVudHMub24oZW5naW5lLCAnYmVmb3JlVXBkYXRlJywgZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICB2YXIgYWxsQm9kaWVzID0gQ29tcG9zaXRlLmFsbEJvZGllcyhlbmdpbmUud29ybGQpO1xuICAgICAgICAgICAgTW91c2VDb25zdHJhaW50LnVwZGF0ZShtb3VzZUNvbnN0cmFpbnQsIGFsbEJvZGllcyk7XG4gICAgICAgICAgICBNb3VzZUNvbnN0cmFpbnQuX3RyaWdnZXJFdmVudHMobW91c2VDb25zdHJhaW50KTtcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV0dXJuIG1vdXNlQ29uc3RyYWludDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyB0aGUgZ2l2ZW4gbW91c2UgY29uc3RyYWludC5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgdXBkYXRlXG4gICAgICogQHBhcmFtIHtNb3VzZUNvbnN0cmFpbnR9IG1vdXNlQ29uc3RyYWludFxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKi9cbiAgICBNb3VzZUNvbnN0cmFpbnQudXBkYXRlID0gZnVuY3Rpb24obW91c2VDb25zdHJhaW50LCBib2RpZXMpIHtcbiAgICAgICAgdmFyIG1vdXNlID0gbW91c2VDb25zdHJhaW50Lm1vdXNlLFxuICAgICAgICAgICAgY29uc3RyYWludCA9IG1vdXNlQ29uc3RyYWludC5jb25zdHJhaW50LFxuICAgICAgICAgICAgYm9keSA9IG1vdXNlQ29uc3RyYWludC5ib2R5O1xuXG4gICAgICAgIGlmIChtb3VzZS5idXR0b24gPT09IDApIHtcbiAgICAgICAgICAgIGlmICghY29uc3RyYWludC5ib2R5Qikge1xuICAgICAgICAgICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMoYm9keS5ib3VuZHMsIG1vdXNlLnBvc2l0aW9uKSBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAmJiBEZXRlY3Rvci5jYW5Db2xsaWRlKGJvZHkuY29sbGlzaW9uRmlsdGVyLCBtb3VzZUNvbnN0cmFpbnQuY29sbGlzaW9uRmlsdGVyKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IGJvZHkucGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgYm9keS5wYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gYm9keS5wYXJ0c1tqXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoVmVydGljZXMuY29udGFpbnMocGFydC52ZXJ0aWNlcywgbW91c2UucG9zaXRpb24pKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRBID0gbW91c2UucG9zaXRpb247XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuYm9keUIgPSBtb3VzZUNvbnN0cmFpbnQuYm9keSA9IGJvZHk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQucG9pbnRCID0geyB4OiBtb3VzZS5wb3NpdGlvbi54IC0gYm9keS5wb3NpdGlvbi54LCB5OiBtb3VzZS5wb3NpdGlvbi55IC0gYm9keS5wb3NpdGlvbi55IH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cmFpbnQuYW5nbGVCID0gYm9keS5hbmdsZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBTbGVlcGluZy5zZXQoYm9keSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdzdGFydGRyYWcnLCB7IG1vdXNlOiBtb3VzZSwgYm9keTogYm9keSB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIFNsZWVwaW5nLnNldChjb25zdHJhaW50LmJvZHlCLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgY29uc3RyYWludC5wb2ludEEgPSBtb3VzZS5wb3NpdGlvbjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnQuYm9keUIgPSBtb3VzZUNvbnN0cmFpbnQuYm9keSA9IG51bGw7XG4gICAgICAgICAgICBjb25zdHJhaW50LnBvaW50QiA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmIChib2R5KVxuICAgICAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ2VuZGRyYWcnLCB7IG1vdXNlOiBtb3VzZSwgYm9keTogYm9keSB9KTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBUcmlnZ2VycyBtb3VzZSBjb25zdHJhaW50IGV2ZW50cy5cbiAgICAgKiBAbWV0aG9kIF90cmlnZ2VyRXZlbnRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge21vdXNlfSBtb3VzZUNvbnN0cmFpbnRcbiAgICAgKi9cbiAgICBNb3VzZUNvbnN0cmFpbnQuX3RyaWdnZXJFdmVudHMgPSBmdW5jdGlvbihtb3VzZUNvbnN0cmFpbnQpIHtcbiAgICAgICAgdmFyIG1vdXNlID0gbW91c2VDb25zdHJhaW50Lm1vdXNlLFxuICAgICAgICAgICAgbW91c2VFdmVudHMgPSBtb3VzZS5zb3VyY2VFdmVudHM7XG5cbiAgICAgICAgaWYgKG1vdXNlRXZlbnRzLm1vdXNlbW92ZSlcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ21vdXNlbW92ZScsIHsgbW91c2U6IG1vdXNlIH0pO1xuXG4gICAgICAgIGlmIChtb3VzZUV2ZW50cy5tb3VzZWRvd24pXG4gICAgICAgICAgICBFdmVudHMudHJpZ2dlcihtb3VzZUNvbnN0cmFpbnQsICdtb3VzZWRvd24nLCB7IG1vdXNlOiBtb3VzZSB9KTtcblxuICAgICAgICBpZiAobW91c2VFdmVudHMubW91c2V1cClcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKG1vdXNlQ29uc3RyYWludCwgJ21vdXNldXAnLCB7IG1vdXNlOiBtb3VzZSB9KTtcblxuICAgICAgICAvLyByZXNldCB0aGUgbW91c2Ugc3RhdGUgcmVhZHkgZm9yIHRoZSBuZXh0IHN0ZXBcbiAgICAgICAgTW91c2UuY2xlYXJTb3VyY2VFdmVudHMobW91c2UpO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSBtb3VzZSBoYXMgbW92ZWQgKG9yIGEgdG91Y2ggbW92ZXMpIGR1cmluZyB0aGUgbGFzdCBzdGVwXG4gICAgKlxuICAgICogQGV2ZW50IG1vdXNlbW92ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHttb3VzZX0gZXZlbnQubW91c2UgVGhlIGVuZ2luZSdzIG1vdXNlIGluc3RhbmNlXG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgd2hlbiB0aGUgbW91c2UgaXMgZG93biAob3IgYSB0b3VjaCBoYXMgc3RhcnRlZCkgZHVyaW5nIHRoZSBsYXN0IHN0ZXBcbiAgICAqXG4gICAgKiBAZXZlbnQgbW91c2Vkb3duXG4gICAgKiBAcGFyYW0ge30gZXZlbnQgQW4gZXZlbnQgb2JqZWN0XG4gICAgKiBAcGFyYW0ge21vdXNlfSBldmVudC5tb3VzZSBUaGUgZW5naW5lJ3MgbW91c2UgaW5zdGFuY2VcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSBtb3VzZSBpcyB1cCAob3IgYSB0b3VjaCBoYXMgZW5kZWQpIGR1cmluZyB0aGUgbGFzdCBzdGVwXG4gICAgKlxuICAgICogQGV2ZW50IG1vdXNldXBcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIHdoZW4gdGhlIHVzZXIgc3RhcnRzIGRyYWdnaW5nIGEgYm9keVxuICAgICpcbiAgICAqIEBldmVudCBzdGFydGRyYWdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHtib2R5fSBldmVudC5ib2R5IFRoZSBib2R5IGJlaW5nIGRyYWdnZWRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5zb3VyY2UgVGhlIHNvdXJjZSBvYmplY3Qgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQubmFtZSBUaGUgbmFtZSBvZiB0aGUgZXZlbnRcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCB3aGVuIHRoZSB1c2VyIGVuZHMgZHJhZ2dpbmcgYSBib2R5XG4gICAgKlxuICAgICogQGV2ZW50IGVuZGRyYWdcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bW91c2V9IGV2ZW50Lm1vdXNlIFRoZSBlbmdpbmUncyBtb3VzZSBpbnN0YW5jZVxuICAgICogQHBhcmFtIHtib2R5fSBldmVudC5ib2R5IFRoZSBib2R5IHRoYXQgaGFzIHN0b3BwZWQgYmVpbmcgZHJhZ2dlZFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKlxuICAgICpcbiAgICAqICBQcm9wZXJ0aWVzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgYFN0cmluZ2AgZGVub3RpbmcgdGhlIHR5cGUgb2Ygb2JqZWN0LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IHR5cGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCBcImNvbnN0cmFpbnRcIlxuICAgICAqIEByZWFkT25seVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBNb3VzZWAgaW5zdGFuY2UgaW4gdXNlLiBJZiBub3Qgc3VwcGxpZWQgaW4gYE1vdXNlQ29uc3RyYWludC5jcmVhdGVgLCBvbmUgd2lsbCBiZSBjcmVhdGVkLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG1vdXNlXG4gICAgICogQHR5cGUgbW91c2VcbiAgICAgKiBAZGVmYXVsdCBtb3VzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGBCb2R5YCB0aGF0IGlzIGN1cnJlbnRseSBiZWluZyBtb3ZlZCBieSB0aGUgdXNlciwgb3IgYG51bGxgIGlmIG5vIGJvZHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgYm9keVxuICAgICAqIEB0eXBlIGJvZHlcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgYENvbnN0cmFpbnRgIG9iamVjdCB0aGF0IGlzIHVzZWQgdG8gbW92ZSB0aGUgYm9keSBkdXJpbmcgaW50ZXJhY3Rpb24uXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY29uc3RyYWludFxuICAgICAqIEB0eXBlIGNvbnN0cmFpbnRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEFuIGBPYmplY3RgIHRoYXQgc3BlY2lmaWVzIHRoZSBjb2xsaXNpb24gZmlsdGVyIHByb3BlcnRpZXMuXG4gICAgICogVGhlIGNvbGxpc2lvbiBmaWx0ZXIgYWxsb3dzIHRoZSB1c2VyIHRvIGRlZmluZSB3aGljaCB0eXBlcyBvZiBib2R5IHRoaXMgbW91c2UgY29uc3RyYWludCBjYW4gaW50ZXJhY3Qgd2l0aC5cbiAgICAgKiBTZWUgYGJvZHkuY29sbGlzaW9uRmlsdGVyYCBmb3IgbW9yZSBpbmZvcm1hdGlvbi5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBjb2xsaXNpb25GaWx0ZXJcbiAgICAgKiBAdHlwZSBvYmplY3RcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDI1ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5RdWVyeWAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIHBlcmZvcm1pbmcgY29sbGlzaW9uIHF1ZXJpZXMuXG4qXG4qIFNlZSB0aGUgaW5jbHVkZWQgdXNhZ2UgW2V4YW1wbGVzXShodHRwczovL2dpdGh1Yi5jb20vbGlhYnJ1L21hdHRlci1qcy90cmVlL21hc3Rlci9leGFtcGxlcykuXG4qXG4qIEBjbGFzcyBRdWVyeVxuKi9cblxudmFyIFF1ZXJ5ID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gUXVlcnk7XG5cbnZhciBWZWN0b3IgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDIpO1xudmFyIENvbGxpc2lvbiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBCb2RpZXMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDEyKTtcbnZhciBWZXJ0aWNlcyA9IF9fd2VicGFja19yZXF1aXJlX18oMyk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIFJldHVybnMgYSBsaXN0IG9mIGNvbGxpc2lvbnMgYmV0d2VlbiBgYm9keWAgYW5kIGBib2RpZXNgLlxuICAgICAqIEBtZXRob2QgY29sbGlkZXNcbiAgICAgKiBAcGFyYW0ge2JvZHl9IGJvZHlcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHJldHVybiB7Y29sbGlzaW9uW119IENvbGxpc2lvbnNcbiAgICAgKi9cbiAgICBRdWVyeS5jb2xsaWRlcyA9IGZ1bmN0aW9uKGJvZHksIGJvZGllcykge1xuICAgICAgICB2YXIgY29sbGlzaW9ucyA9IFtdLFxuICAgICAgICAgICAgYm9kaWVzTGVuZ3RoID0gYm9kaWVzLmxlbmd0aCxcbiAgICAgICAgICAgIGJvdW5kcyA9IGJvZHkuYm91bmRzLFxuICAgICAgICAgICAgY29sbGlkZXMgPSBDb2xsaXNpb24uY29sbGlkZXMsXG4gICAgICAgICAgICBvdmVybGFwcyA9IEJvdW5kcy5vdmVybGFwcztcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllc0xlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keUEgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgcGFydHNBTGVuZ3RoID0gYm9keUEucGFydHMubGVuZ3RoLFxuICAgICAgICAgICAgICAgIHBhcnRzQVN0YXJ0ID0gcGFydHNBTGVuZ3RoID09PSAxID8gMCA6IDE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmIChvdmVybGFwcyhib2R5QS5ib3VuZHMsIGJvdW5kcykpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gcGFydHNBU3RhcnQ7IGogPCBwYXJ0c0FMZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydCA9IGJvZHlBLnBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChvdmVybGFwcyhwYXJ0LmJvdW5kcywgYm91bmRzKSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGNvbGxpc2lvbiA9IGNvbGxpZGVzKHBhcnQsIGJvZHkpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29sbGlzaW9uKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY29sbGlzaW9ucy5wdXNoKGNvbGxpc2lvbik7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FzdHMgYSByYXkgc2VnbWVudCBhZ2FpbnN0IGEgc2V0IG9mIGJvZGllcyBhbmQgcmV0dXJucyBhbGwgY29sbGlzaW9ucywgcmF5IHdpZHRoIGlzIG9wdGlvbmFsLiBJbnRlcnNlY3Rpb24gcG9pbnRzIGFyZSBub3QgcHJvdmlkZWQuXG4gICAgICogQG1ldGhvZCByYXlcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHN0YXJ0UG9pbnRcbiAgICAgKiBAcGFyYW0ge3ZlY3Rvcn0gZW5kUG9pbnRcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gW3JheVdpZHRoXVxuICAgICAqIEByZXR1cm4ge2NvbGxpc2lvbltdfSBDb2xsaXNpb25zXG4gICAgICovXG4gICAgUXVlcnkucmF5ID0gZnVuY3Rpb24oYm9kaWVzLCBzdGFydFBvaW50LCBlbmRQb2ludCwgcmF5V2lkdGgpIHtcbiAgICAgICAgcmF5V2lkdGggPSByYXlXaWR0aCB8fCAxZS0xMDA7XG5cbiAgICAgICAgdmFyIHJheUFuZ2xlID0gVmVjdG9yLmFuZ2xlKHN0YXJ0UG9pbnQsIGVuZFBvaW50KSxcbiAgICAgICAgICAgIHJheUxlbmd0aCA9IFZlY3Rvci5tYWduaXR1ZGUoVmVjdG9yLnN1YihzdGFydFBvaW50LCBlbmRQb2ludCkpLFxuICAgICAgICAgICAgcmF5WCA9IChlbmRQb2ludC54ICsgc3RhcnRQb2ludC54KSAqIDAuNSxcbiAgICAgICAgICAgIHJheVkgPSAoZW5kUG9pbnQueSArIHN0YXJ0UG9pbnQueSkgKiAwLjUsXG4gICAgICAgICAgICByYXkgPSBCb2RpZXMucmVjdGFuZ2xlKHJheVgsIHJheVksIHJheUxlbmd0aCwgcmF5V2lkdGgsIHsgYW5nbGU6IHJheUFuZ2xlIH0pLFxuICAgICAgICAgICAgY29sbGlzaW9ucyA9IFF1ZXJ5LmNvbGxpZGVzKHJheSwgYm9kaWVzKTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGNvbGxpc2lvbnMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHZhciBjb2xsaXNpb24gPSBjb2xsaXNpb25zW2ldO1xuICAgICAgICAgICAgY29sbGlzaW9uLmJvZHkgPSBjb2xsaXNpb24uYm9keUIgPSBjb2xsaXNpb24uYm9keUE7ICAgICAgICAgICAgXG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gY29sbGlzaW9ucztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgYm9kaWVzIHdob3NlIGJvdW5kcyBhcmUgaW5zaWRlIChvciBvdXRzaWRlIGlmIHNldCkgdGhlIGdpdmVuIHNldCBvZiBib3VuZHMsIGZyb20gdGhlIGdpdmVuIHNldCBvZiBib2RpZXMuXG4gICAgICogQG1ldGhvZCByZWdpb25cbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtib3VuZHN9IGJvdW5kc1xuICAgICAqIEBwYXJhbSB7Ym9vbH0gW291dHNpZGU9ZmFsc2VdXG4gICAgICogQHJldHVybiB7Ym9keVtdfSBUaGUgYm9kaWVzIG1hdGNoaW5nIHRoZSBxdWVyeVxuICAgICAqL1xuICAgIFF1ZXJ5LnJlZ2lvbiA9IGZ1bmN0aW9uKGJvZGllcywgYm91bmRzLCBvdXRzaWRlKSB7XG4gICAgICAgIHZhciByZXN1bHQgPSBbXTtcblxuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGJvZHkgPSBib2RpZXNbaV0sXG4gICAgICAgICAgICAgICAgb3ZlcmxhcHMgPSBCb3VuZHMub3ZlcmxhcHMoYm9keS5ib3VuZHMsIGJvdW5kcyk7XG4gICAgICAgICAgICBpZiAoKG92ZXJsYXBzICYmICFvdXRzaWRlKSB8fCAoIW92ZXJsYXBzICYmIG91dHNpZGUpKVxuICAgICAgICAgICAgICAgIHJlc3VsdC5wdXNoKGJvZHkpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyBhbGwgYm9kaWVzIHdob3NlIHZlcnRpY2VzIGNvbnRhaW4gdGhlIGdpdmVuIHBvaW50LCBmcm9tIHRoZSBnaXZlbiBzZXQgb2YgYm9kaWVzLlxuICAgICAqIEBtZXRob2QgcG9pbnRcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHt2ZWN0b3J9IHBvaW50XG4gICAgICogQHJldHVybiB7Ym9keVtdfSBUaGUgYm9kaWVzIG1hdGNoaW5nIHRoZSBxdWVyeVxuICAgICAqL1xuICAgIFF1ZXJ5LnBvaW50ID0gZnVuY3Rpb24oYm9kaWVzLCBwb2ludCkge1xuICAgICAgICB2YXIgcmVzdWx0ID0gW107XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZiAoQm91bmRzLmNvbnRhaW5zKGJvZHkuYm91bmRzLCBwb2ludCkpIHtcbiAgICAgICAgICAgICAgICBmb3IgKHZhciBqID0gYm9keS5wYXJ0cy5sZW5ndGggPT09IDEgPyAwIDogMTsgaiA8IGJvZHkucGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBib2R5LnBhcnRzW2pdO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChCb3VuZHMuY29udGFpbnMocGFydC5ib3VuZHMsIHBvaW50KVxuICAgICAgICAgICAgICAgICAgICAgICAgJiYgVmVydGljZXMuY29udGFpbnMocGFydC52ZXJ0aWNlcywgcG9pbnQpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXN1bHQucHVzaChib2R5KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9O1xuXG59KSgpO1xuXG5cbi8qKiovIH0pLFxuLyogMjYgKi9cbi8qKiovIChmdW5jdGlvbihtb2R1bGUsIGV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pIHtcblxuLyoqXG4qIFRoZSBgTWF0dGVyLlJlbmRlcmAgbW9kdWxlIGlzIGEgbGlnaHR3ZWlnaHQsIG9wdGlvbmFsIHV0aWxpdHkgd2hpY2ggcHJvdmlkZXMgYSBzaW1wbGUgY2FudmFzIGJhc2VkIHJlbmRlcmVyIGZvciB2aXN1YWxpc2luZyBpbnN0YW5jZXMgb2YgYE1hdHRlci5FbmdpbmVgLlxuKiBJdCBpcyBpbnRlbmRlZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGRlYnVnZ2luZyBwdXJwb3NlcywgYnV0IG1heSBhbHNvIGJlIHN1aXRhYmxlIGZvciBzaW1wbGUgZ2FtZXMuXG4qIEl0IGluY2x1ZGVzIGEgbnVtYmVyIG9mIGRyYXdpbmcgb3B0aW9ucyBpbmNsdWRpbmcgd2lyZWZyYW1lLCB2ZWN0b3Igd2l0aCBzdXBwb3J0IGZvciBzcHJpdGVzIGFuZCB2aWV3cG9ydHMuXG4qXG4qIEBjbGFzcyBSZW5kZXJcbiovXG5cbnZhciBSZW5kZXIgPSB7fTtcblxubW9kdWxlLmV4cG9ydHMgPSBSZW5kZXI7XG5cbnZhciBCb2R5ID0gX193ZWJwYWNrX3JlcXVpcmVfXyg0KTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xudmFyIENvbXBvc2l0ZSA9IF9fd2VicGFja19yZXF1aXJlX18oNik7XG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBFdmVudHMgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDUpO1xudmFyIFZlY3RvciA9IF9fd2VicGFja19yZXF1aXJlX18oMik7XG52YXIgTW91c2UgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDE0KTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgdmFyIF9yZXF1ZXN0QW5pbWF0aW9uRnJhbWUsXG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZTtcblxuICAgIGlmICh0eXBlb2Ygd2luZG93ICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lID0gd2luZG93LnJlcXVlc3RBbmltYXRpb25GcmFtZSB8fCB3aW5kb3cud2Via2l0UmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IHdpbmRvdy5tb3pSZXF1ZXN0QW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zUmVxdWVzdEFuaW1hdGlvbkZyYW1lXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGZ1bmN0aW9uKGNhbGxiYWNrKXsgd2luZG93LnNldFRpbWVvdXQoZnVuY3Rpb24oKSB7IGNhbGxiYWNrKENvbW1vbi5ub3coKSk7IH0sIDEwMDAgLyA2MCk7IH07XG5cbiAgICAgICAgX2NhbmNlbEFuaW1hdGlvbkZyYW1lID0gd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lIHx8IHdpbmRvdy5tb3pDYW5jZWxBbmltYXRpb25GcmFtZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB8fCB3aW5kb3cud2Via2l0Q2FuY2VsQW5pbWF0aW9uRnJhbWUgfHwgd2luZG93Lm1zQ2FuY2VsQW5pbWF0aW9uRnJhbWU7XG4gICAgfVxuXG4gICAgUmVuZGVyLl9nb29kRnBzID0gMzA7XG4gICAgUmVuZGVyLl9nb29kRGVsdGEgPSAxMDAwIC8gNjA7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IHJlbmRlcmVyLiBUaGUgb3B0aW9ucyBwYXJhbWV0ZXIgaXMgYW4gb2JqZWN0IHRoYXQgc3BlY2lmaWVzIGFueSBwcm9wZXJ0aWVzIHlvdSB3aXNoIHRvIG92ZXJyaWRlIHRoZSBkZWZhdWx0cy5cbiAgICAgKiBBbGwgcHJvcGVydGllcyBoYXZlIGRlZmF1bHQgdmFsdWVzLCBhbmQgbWFueSBhcmUgcHJlLWNhbGN1bGF0ZWQgYXV0b21hdGljYWxseSBiYXNlZCBvbiBvdGhlciBwcm9wZXJ0aWVzLlxuICAgICAqIFNlZSB0aGUgcHJvcGVydGllcyBzZWN0aW9uIGJlbG93IGZvciBkZXRhaWxlZCBpbmZvcm1hdGlvbiBvbiB3aGF0IHlvdSBjYW4gcGFzcyB2aWEgdGhlIGBvcHRpb25zYCBvYmplY3QuXG4gICAgICogQG1ldGhvZCBjcmVhdGVcbiAgICAgKiBAcGFyYW0ge29iamVjdH0gW29wdGlvbnNdXG4gICAgICogQHJldHVybiB7cmVuZGVyfSBBIG5ldyByZW5kZXJlclxuICAgICAqL1xuICAgIFJlbmRlci5jcmVhdGUgPSBmdW5jdGlvbihvcHRpb25zKSB7XG4gICAgICAgIHZhciBkZWZhdWx0cyA9IHtcbiAgICAgICAgICAgIGVuZ2luZTogbnVsbCxcbiAgICAgICAgICAgIGVsZW1lbnQ6IG51bGwsXG4gICAgICAgICAgICBjYW52YXM6IG51bGwsXG4gICAgICAgICAgICBtb3VzZTogbnVsbCxcbiAgICAgICAgICAgIGZyYW1lUmVxdWVzdElkOiBudWxsLFxuICAgICAgICAgICAgdGltaW5nOiB7XG4gICAgICAgICAgICAgICAgaGlzdG9yeVNpemU6IDYwLFxuICAgICAgICAgICAgICAgIGRlbHRhOiAwLFxuICAgICAgICAgICAgICAgIGRlbHRhSGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgbGFzdFRpbWU6IDAsXG4gICAgICAgICAgICAgICAgbGFzdFRpbWVzdGFtcDogMCxcbiAgICAgICAgICAgICAgICBsYXN0RWxhcHNlZDogMCxcbiAgICAgICAgICAgICAgICB0aW1lc3RhbXBFbGFwc2VkOiAwLFxuICAgICAgICAgICAgICAgIHRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgICAgICBlbmdpbmVEZWx0YUhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgICAgIGVuZ2luZUVsYXBzZWRIaXN0b3J5OiBbXSxcbiAgICAgICAgICAgICAgICBlbmdpbmVVcGRhdGVzSGlzdG9yeTogW10sXG4gICAgICAgICAgICAgICAgZWxhcHNlZEhpc3Rvcnk6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgb3B0aW9uczoge1xuICAgICAgICAgICAgICAgIHdpZHRoOiA4MDAsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA2MDAsXG4gICAgICAgICAgICAgICAgcGl4ZWxSYXRpbzogMSxcbiAgICAgICAgICAgICAgICBiYWNrZ3JvdW5kOiAnIzE0MTUxZicsXG4gICAgICAgICAgICAgICAgd2lyZWZyYW1lQmFja2dyb3VuZDogJyMxNDE1MWYnLFxuICAgICAgICAgICAgICAgIHdpcmVmcmFtZVN0cm9rZVN0eWxlOiAnI2JiYicsXG4gICAgICAgICAgICAgICAgaGFzQm91bmRzOiAhIW9wdGlvbnMuYm91bmRzLFxuICAgICAgICAgICAgICAgIGVuYWJsZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgd2lyZWZyYW1lczogdHJ1ZSxcbiAgICAgICAgICAgICAgICBzaG93U2xlZXBpbmc6IHRydWUsXG4gICAgICAgICAgICAgICAgc2hvd0RlYnVnOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93U3RhdHM6IGZhbHNlLFxuICAgICAgICAgICAgICAgIHNob3dQZXJmb3JtYW5jZTogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0JvdW5kczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1ZlbG9jaXR5OiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93Q29sbGlzaW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1NlcGFyYXRpb25zOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93QXhlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd1Bvc2l0aW9uczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0FuZ2xlSW5kaWNhdG9yOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93SWRzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93VmVydGV4TnVtYmVyczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd0NvbnZleEh1bGxzOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBzaG93SW50ZXJuYWxFZGdlczogZmFsc2UsXG4gICAgICAgICAgICAgICAgc2hvd01vdXNlUG9zaXRpb246IGZhbHNlXG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIHJlbmRlciA9IENvbW1vbi5leHRlbmQoZGVmYXVsdHMsIG9wdGlvbnMpO1xuXG4gICAgICAgIGlmIChyZW5kZXIuY2FudmFzKSB7XG4gICAgICAgICAgICByZW5kZXIuY2FudmFzLndpZHRoID0gcmVuZGVyLm9wdGlvbnMud2lkdGggfHwgcmVuZGVyLmNhbnZhcy53aWR0aDtcbiAgICAgICAgICAgIHJlbmRlci5jYW52YXMuaGVpZ2h0ID0gcmVuZGVyLm9wdGlvbnMuaGVpZ2h0IHx8IHJlbmRlci5jYW52YXMuaGVpZ2h0O1xuICAgICAgICB9XG5cbiAgICAgICAgcmVuZGVyLm1vdXNlID0gb3B0aW9ucy5tb3VzZTtcbiAgICAgICAgcmVuZGVyLmVuZ2luZSA9IG9wdGlvbnMuZW5naW5lO1xuICAgICAgICByZW5kZXIuY2FudmFzID0gcmVuZGVyLmNhbnZhcyB8fCBfY3JlYXRlQ2FudmFzKHJlbmRlci5vcHRpb25zLndpZHRoLCByZW5kZXIub3B0aW9ucy5oZWlnaHQpO1xuICAgICAgICByZW5kZXIuY29udGV4dCA9IHJlbmRlci5jYW52YXMuZ2V0Q29udGV4dCgnMmQnKTtcbiAgICAgICAgcmVuZGVyLnRleHR1cmVzID0ge307XG5cbiAgICAgICAgcmVuZGVyLmJvdW5kcyA9IHJlbmRlci5ib3VuZHMgfHwge1xuICAgICAgICAgICAgbWluOiB7XG4gICAgICAgICAgICAgICAgeDogMCxcbiAgICAgICAgICAgICAgICB5OiAwXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgbWF4OiB7XG4gICAgICAgICAgICAgICAgeDogcmVuZGVyLmNhbnZhcy53aWR0aCxcbiAgICAgICAgICAgICAgICB5OiByZW5kZXIuY2FudmFzLmhlaWdodFxuICAgICAgICAgICAgfVxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZvciB0ZW1wb3JhcnkgYmFjayBjb21wYXRpYmlsaXR5IG9ubHlcbiAgICAgICAgcmVuZGVyLmNvbnRyb2xsZXIgPSBSZW5kZXI7XG4gICAgICAgIHJlbmRlci5vcHRpb25zLnNob3dCcm9hZHBoYXNlID0gZmFsc2U7XG5cbiAgICAgICAgaWYgKHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8gIT09IDEpIHtcbiAgICAgICAgICAgIFJlbmRlci5zZXRQaXhlbFJhdGlvKHJlbmRlciwgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoQ29tbW9uLmlzRWxlbWVudChyZW5kZXIuZWxlbWVudCkpIHtcbiAgICAgICAgICAgIHJlbmRlci5lbGVtZW50LmFwcGVuZENoaWxkKHJlbmRlci5jYW52YXMpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJlbmRlcjtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ29udGludW91c2x5IHVwZGF0ZXMgdGhlIHJlbmRlciBjYW52YXMgb24gdGhlIGByZXF1ZXN0QW5pbWF0aW9uRnJhbWVgIGV2ZW50LlxuICAgICAqIEBtZXRob2QgcnVuXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5ydW4gPSBmdW5jdGlvbihyZW5kZXIpIHtcbiAgICAgICAgKGZ1bmN0aW9uIGxvb3AodGltZSl7XG4gICAgICAgICAgICByZW5kZXIuZnJhbWVSZXF1ZXN0SWQgPSBfcmVxdWVzdEFuaW1hdGlvbkZyYW1lKGxvb3ApO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBfdXBkYXRlVGltaW5nKHJlbmRlciwgdGltZSk7XG5cbiAgICAgICAgICAgIFJlbmRlci53b3JsZChyZW5kZXIsIHRpbWUpO1xuXG4gICAgICAgICAgICByZW5kZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0ocmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCwgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCk7XG5cbiAgICAgICAgICAgIGlmIChyZW5kZXIub3B0aW9ucy5zaG93U3RhdHMgfHwgcmVuZGVyLm9wdGlvbnMuc2hvd0RlYnVnKSB7XG4gICAgICAgICAgICAgICAgUmVuZGVyLnN0YXRzKHJlbmRlciwgcmVuZGVyLmNvbnRleHQsIHRpbWUpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocmVuZGVyLm9wdGlvbnMuc2hvd1BlcmZvcm1hbmNlIHx8IHJlbmRlci5vcHRpb25zLnNob3dEZWJ1Zykge1xuICAgICAgICAgICAgICAgIFJlbmRlci5wZXJmb3JtYW5jZShyZW5kZXIsIHJlbmRlci5jb250ZXh0LCB0aW1lKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmVuZGVyLmNvbnRleHQuc2V0VHJhbnNmb3JtKDEsIDAsIDAsIDEsIDAsIDApO1xuICAgICAgICB9KSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmRzIGV4ZWN1dGlvbiBvZiBgUmVuZGVyLnJ1bmAgb24gdGhlIGdpdmVuIGByZW5kZXJgLCBieSBjYW5jZWxpbmcgdGhlIGFuaW1hdGlvbiBmcmFtZSByZXF1ZXN0IGV2ZW50IGxvb3AuXG4gICAgICogQG1ldGhvZCBzdG9wXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqL1xuICAgIFJlbmRlci5zdG9wID0gZnVuY3Rpb24ocmVuZGVyKSB7XG4gICAgICAgIF9jYW5jZWxBbmltYXRpb25GcmFtZShyZW5kZXIuZnJhbWVSZXF1ZXN0SWQpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTZXRzIHRoZSBwaXhlbCByYXRpbyBvZiB0aGUgcmVuZGVyZXIgYW5kIHVwZGF0ZXMgdGhlIGNhbnZhcy5cbiAgICAgKiBUbyBhdXRvbWF0aWNhbGx5IGRldGVjdCB0aGUgY29ycmVjdCByYXRpbywgcGFzcyB0aGUgc3RyaW5nIGAnYXV0bydgIGZvciBgcGl4ZWxSYXRpb2AuXG4gICAgICogQG1ldGhvZCBzZXRQaXhlbFJhdGlvXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSBwaXhlbFJhdGlvXG4gICAgICovXG4gICAgUmVuZGVyLnNldFBpeGVsUmF0aW8gPSBmdW5jdGlvbihyZW5kZXIsIHBpeGVsUmF0aW8pIHtcbiAgICAgICAgdmFyIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIGNhbnZhcyA9IHJlbmRlci5jYW52YXM7XG5cbiAgICAgICAgaWYgKHBpeGVsUmF0aW8gPT09ICdhdXRvJykge1xuICAgICAgICAgICAgcGl4ZWxSYXRpbyA9IF9nZXRQaXhlbFJhdGlvKGNhbnZhcyk7XG4gICAgICAgIH1cblxuICAgICAgICBvcHRpb25zLnBpeGVsUmF0aW8gPSBwaXhlbFJhdGlvO1xuICAgICAgICBjYW52YXMuc2V0QXR0cmlidXRlKCdkYXRhLXBpeGVsLXJhdGlvJywgcGl4ZWxSYXRpbyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IG9wdGlvbnMud2lkdGggKiBwaXhlbFJhdGlvO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gb3B0aW9ucy5oZWlnaHQgKiBwaXhlbFJhdGlvO1xuICAgICAgICBjYW52YXMuc3R5bGUud2lkdGggPSBvcHRpb25zLndpZHRoICsgJ3B4JztcbiAgICAgICAgY2FudmFzLnN0eWxlLmhlaWdodCA9IG9wdGlvbnMuaGVpZ2h0ICsgJ3B4JztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogU2V0cyB0aGUgcmVuZGVyIGB3aWR0aGAgYW5kIGBoZWlnaHRgLlxuICAgICAqIFxuICAgICAqIFVwZGF0ZXMgdGhlIGNhbnZhcyBhY2NvdW50aW5nIGZvciBgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpb2AuICBcbiAgICAgKiBcbiAgICAgKiBVcGRhdGVzIHRoZSBib3R0b20gcmlnaHQgcmVuZGVyIGJvdW5kIGByZW5kZXIuYm91bmRzLm1heGAgcmVsYXRpdmUgdG8gdGhlIHByb3ZpZGVkIGB3aWR0aGAgYW5kIGBoZWlnaHRgLlxuICAgICAqIFRoZSB0b3AgbGVmdCByZW5kZXIgYm91bmQgYHJlbmRlci5ib3VuZHMubWluYCBpc24ndCBjaGFuZ2VkLlxuICAgICAqIFxuICAgICAqIEZvbGxvdyB0aGlzIGNhbGwgd2l0aCBgUmVuZGVyLmxvb2tBdGAgaWYgeW91IG5lZWQgdG8gY2hhbmdlIHRoZSByZW5kZXIgYm91bmRzLlxuICAgICAqIFxuICAgICAqIFNlZSBhbHNvIGBSZW5kZXIuc2V0UGl4ZWxSYXRpb2AuXG4gICAgICogQG1ldGhvZCBzZXRTaXplXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB3aWR0aCBUaGUgd2lkdGggKGluIENTUyBwaXhlbHMpXG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGhlaWdodCBUaGUgaGVpZ2h0IChpbiBDU1MgcGl4ZWxzKVxuICAgICAqL1xuICAgIFJlbmRlci5zZXRTaXplID0gZnVuY3Rpb24ocmVuZGVyLCB3aWR0aCwgaGVpZ2h0KSB7XG4gICAgICAgIHJlbmRlci5vcHRpb25zLndpZHRoID0gd2lkdGg7XG4gICAgICAgIHJlbmRlci5vcHRpb25zLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueCA9IHJlbmRlci5ib3VuZHMubWluLnggKyB3aWR0aDtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueSA9IHJlbmRlci5ib3VuZHMubWluLnkgKyBoZWlnaHQ7XG5cbiAgICAgICAgaWYgKHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8gIT09IDEpIHtcbiAgICAgICAgICAgIFJlbmRlci5zZXRQaXhlbFJhdGlvKHJlbmRlciwgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZW5kZXIuY2FudmFzLndpZHRoID0gd2lkdGg7XG4gICAgICAgICAgICByZW5kZXIuY2FudmFzLmhlaWdodCA9IGhlaWdodDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBQb3NpdGlvbnMgYW5kIHNpemVzIHRoZSB2aWV3cG9ydCBhcm91bmQgdGhlIGdpdmVuIG9iamVjdCBib3VuZHMuXG4gICAgICogT2JqZWN0cyBtdXN0IGhhdmUgYXQgbGVhc3Qgb25lIG9mIHRoZSBmb2xsb3dpbmcgcHJvcGVydGllczpcbiAgICAgKiAtIGBvYmplY3QuYm91bmRzYFxuICAgICAqIC0gYG9iamVjdC5wb3NpdGlvbmBcbiAgICAgKiAtIGBvYmplY3QubWluYCBhbmQgYG9iamVjdC5tYXhgXG4gICAgICogLSBgb2JqZWN0LnhgIGFuZCBgb2JqZWN0LnlgXG4gICAgICogQG1ldGhvZCBsb29rQXRcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtvYmplY3RbXX0gb2JqZWN0c1xuICAgICAqIEBwYXJhbSB7dmVjdG9yfSBbcGFkZGluZ11cbiAgICAgKiBAcGFyYW0ge2Jvb2x9IFtjZW50ZXI9dHJ1ZV1cbiAgICAgKi9cbiAgICBSZW5kZXIubG9va0F0ID0gZnVuY3Rpb24ocmVuZGVyLCBvYmplY3RzLCBwYWRkaW5nLCBjZW50ZXIpIHtcbiAgICAgICAgY2VudGVyID0gdHlwZW9mIGNlbnRlciAhPT0gJ3VuZGVmaW5lZCcgPyBjZW50ZXIgOiB0cnVlO1xuICAgICAgICBvYmplY3RzID0gQ29tbW9uLmlzQXJyYXkob2JqZWN0cykgPyBvYmplY3RzIDogW29iamVjdHNdO1xuICAgICAgICBwYWRkaW5nID0gcGFkZGluZyB8fCB7XG4gICAgICAgICAgICB4OiAwLFxuICAgICAgICAgICAgeTogMFxuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGZpbmQgYm91bmRzIG9mIGFsbCBvYmplY3RzXG4gICAgICAgIHZhciBib3VuZHMgPSB7XG4gICAgICAgICAgICBtaW46IHsgeDogSW5maW5pdHksIHk6IEluZmluaXR5IH0sXG4gICAgICAgICAgICBtYXg6IHsgeDogLUluZmluaXR5LCB5OiAtSW5maW5pdHkgfVxuICAgICAgICB9O1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgb2JqZWN0cy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgdmFyIG9iamVjdCA9IG9iamVjdHNbaV0sXG4gICAgICAgICAgICAgICAgbWluID0gb2JqZWN0LmJvdW5kcyA/IG9iamVjdC5ib3VuZHMubWluIDogKG9iamVjdC5taW4gfHwgb2JqZWN0LnBvc2l0aW9uIHx8IG9iamVjdCksXG4gICAgICAgICAgICAgICAgbWF4ID0gb2JqZWN0LmJvdW5kcyA/IG9iamVjdC5ib3VuZHMubWF4IDogKG9iamVjdC5tYXggfHwgb2JqZWN0LnBvc2l0aW9uIHx8IG9iamVjdCk7XG5cbiAgICAgICAgICAgIGlmIChtaW4gJiYgbWF4KSB7XG4gICAgICAgICAgICAgICAgaWYgKG1pbi54IDwgYm91bmRzLm1pbi54KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWluLnggPSBtaW4ueDtcblxuICAgICAgICAgICAgICAgIGlmIChtYXgueCA+IGJvdW5kcy5tYXgueClcbiAgICAgICAgICAgICAgICAgICAgYm91bmRzLm1heC54ID0gbWF4Lng7XG5cbiAgICAgICAgICAgICAgICBpZiAobWluLnkgPCBib3VuZHMubWluLnkpXG4gICAgICAgICAgICAgICAgICAgIGJvdW5kcy5taW4ueSA9IG1pbi55O1xuXG4gICAgICAgICAgICAgICAgaWYgKG1heC55ID4gYm91bmRzLm1heC55KVxuICAgICAgICAgICAgICAgICAgICBib3VuZHMubWF4LnkgPSBtYXgueTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGZpbmQgcmF0aW9zXG4gICAgICAgIHZhciB3aWR0aCA9IChib3VuZHMubWF4LnggLSBib3VuZHMubWluLngpICsgMiAqIHBhZGRpbmcueCxcbiAgICAgICAgICAgIGhlaWdodCA9IChib3VuZHMubWF4LnkgLSBib3VuZHMubWluLnkpICsgMiAqIHBhZGRpbmcueSxcbiAgICAgICAgICAgIHZpZXdIZWlnaHQgPSByZW5kZXIuY2FudmFzLmhlaWdodCxcbiAgICAgICAgICAgIHZpZXdXaWR0aCA9IHJlbmRlci5jYW52YXMud2lkdGgsXG4gICAgICAgICAgICBvdXRlclJhdGlvID0gdmlld1dpZHRoIC8gdmlld0hlaWdodCxcbiAgICAgICAgICAgIGlubmVyUmF0aW8gPSB3aWR0aCAvIGhlaWdodCxcbiAgICAgICAgICAgIHNjYWxlWCA9IDEsXG4gICAgICAgICAgICBzY2FsZVkgPSAxO1xuXG4gICAgICAgIC8vIGZpbmQgc2NhbGUgZmFjdG9yXG4gICAgICAgIGlmIChpbm5lclJhdGlvID4gb3V0ZXJSYXRpbykge1xuICAgICAgICAgICAgc2NhbGVZID0gaW5uZXJSYXRpbyAvIG91dGVyUmF0aW87XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBzY2FsZVggPSBvdXRlclJhdGlvIC8gaW5uZXJSYXRpbztcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGVuYWJsZSBib3VuZHNcbiAgICAgICAgcmVuZGVyLm9wdGlvbnMuaGFzQm91bmRzID0gdHJ1ZTtcblxuICAgICAgICAvLyBwb3NpdGlvbiBhbmQgc2l6ZVxuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi54ID0gYm91bmRzLm1pbi54O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1heC54ID0gYm91bmRzLm1pbi54ICsgd2lkdGggKiBzY2FsZVg7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWluLnkgPSBib3VuZHMubWluLnk7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnkgPSBib3VuZHMubWluLnkgKyBoZWlnaHQgKiBzY2FsZVk7XG5cbiAgICAgICAgLy8gY2VudGVyXG4gICAgICAgIGlmIChjZW50ZXIpIHtcbiAgICAgICAgICAgIHJlbmRlci5ib3VuZHMubWluLnggKz0gd2lkdGggKiAwLjUgLSAod2lkdGggKiBzY2FsZVgpICogMC41O1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueCArPSB3aWR0aCAqIDAuNSAtICh3aWR0aCAqIHNjYWxlWCkgKiAwLjU7XG4gICAgICAgICAgICByZW5kZXIuYm91bmRzLm1pbi55ICs9IGhlaWdodCAqIDAuNSAtIChoZWlnaHQgKiBzY2FsZVkpICogMC41O1xuICAgICAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueSArPSBoZWlnaHQgKiAwLjUgLSAoaGVpZ2h0ICogc2NhbGVZKSAqIDAuNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHBhZGRpbmdcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5taW4ueCAtPSBwYWRkaW5nLng7XG4gICAgICAgIHJlbmRlci5ib3VuZHMubWF4LnggLT0gcGFkZGluZy54O1xuICAgICAgICByZW5kZXIuYm91bmRzLm1pbi55IC09IHBhZGRpbmcueTtcbiAgICAgICAgcmVuZGVyLmJvdW5kcy5tYXgueSAtPSBwYWRkaW5nLnk7XG5cbiAgICAgICAgLy8gdXBkYXRlIG1vdXNlXG4gICAgICAgIGlmIChyZW5kZXIubW91c2UpIHtcbiAgICAgICAgICAgIE1vdXNlLnNldFNjYWxlKHJlbmRlci5tb3VzZSwge1xuICAgICAgICAgICAgICAgIHg6IChyZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCkgLyByZW5kZXIuY2FudmFzLndpZHRoLFxuICAgICAgICAgICAgICAgIHk6IChyZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSkgLyByZW5kZXIuY2FudmFzLmhlaWdodFxuICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgIE1vdXNlLnNldE9mZnNldChyZW5kZXIubW91c2UsIHJlbmRlci5ib3VuZHMubWluKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHZpZXdwb3J0IHRyYW5zZm9ybXMgYmFzZWQgb24gYHJlbmRlci5ib3VuZHNgIHRvIGEgcmVuZGVyIGNvbnRleHQuXG4gICAgICogQG1ldGhvZCBzdGFydFZpZXdUcmFuc2Zvcm1cbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICovXG4gICAgUmVuZGVyLnN0YXJ0Vmlld1RyYW5zZm9ybSA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICB2YXIgYm91bmRzV2lkdGggPSByZW5kZXIuYm91bmRzLm1heC54IC0gcmVuZGVyLmJvdW5kcy5taW4ueCxcbiAgICAgICAgICAgIGJvdW5kc0hlaWdodCA9IHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgYm91bmRzU2NhbGVYID0gYm91bmRzV2lkdGggLyByZW5kZXIub3B0aW9ucy53aWR0aCxcbiAgICAgICAgICAgIGJvdW5kc1NjYWxlWSA9IGJvdW5kc0hlaWdodCAvIHJlbmRlci5vcHRpb25zLmhlaWdodDtcblxuICAgICAgICByZW5kZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0oXG4gICAgICAgICAgICByZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvIC8gYm91bmRzU2NhbGVYLCAwLCAwLCBcbiAgICAgICAgICAgIHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8gLyBib3VuZHNTY2FsZVksIDAsIDBcbiAgICAgICAgKTtcbiAgICAgICAgXG4gICAgICAgIHJlbmRlci5jb250ZXh0LnRyYW5zbGF0ZSgtcmVuZGVyLmJvdW5kcy5taW4ueCwgLXJlbmRlci5ib3VuZHMubWluLnkpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXNldHMgYWxsIHRyYW5zZm9ybXMgb24gdGhlIHJlbmRlciBjb250ZXh0LlxuICAgICAqIEBtZXRob2QgZW5kVmlld1RyYW5zZm9ybVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIuZW5kVmlld1RyYW5zZm9ybSA9IGZ1bmN0aW9uKHJlbmRlcikge1xuICAgICAgICByZW5kZXIuY29udGV4dC5zZXRUcmFuc2Zvcm0ocmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCwgcmVuZGVyLm9wdGlvbnMucGl4ZWxSYXRpbywgMCwgMCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJlbmRlcnMgdGhlIGdpdmVuIGBlbmdpbmVgJ3MgYE1hdHRlci5Xb3JsZGAgb2JqZWN0LlxuICAgICAqIFRoaXMgaXMgdGhlIGVudHJ5IHBvaW50IGZvciBhbGwgcmVuZGVyaW5nIGFuZCBzaG91bGQgYmUgY2FsbGVkIGV2ZXJ5IHRpbWUgdGhlIHNjZW5lIGNoYW5nZXMuXG4gICAgICogQG1ldGhvZCB3b3JsZFxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKi9cbiAgICBSZW5kZXIud29ybGQgPSBmdW5jdGlvbihyZW5kZXIsIHRpbWUpIHtcbiAgICAgICAgdmFyIHN0YXJ0VGltZSA9IENvbW1vbi5ub3coKSxcbiAgICAgICAgICAgIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB3b3JsZCA9IGVuZ2luZS53b3JsZCxcbiAgICAgICAgICAgIGNhbnZhcyA9IHJlbmRlci5jYW52YXMsXG4gICAgICAgICAgICBjb250ZXh0ID0gcmVuZGVyLmNvbnRleHQsXG4gICAgICAgICAgICBvcHRpb25zID0gcmVuZGVyLm9wdGlvbnMsXG4gICAgICAgICAgICB0aW1pbmcgPSByZW5kZXIudGltaW5nO1xuXG4gICAgICAgIHZhciBhbGxCb2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIGFsbENvbnN0cmFpbnRzID0gQ29tcG9zaXRlLmFsbENvbnN0cmFpbnRzKHdvcmxkKSxcbiAgICAgICAgICAgIGJhY2tncm91bmQgPSBvcHRpb25zLndpcmVmcmFtZXMgPyBvcHRpb25zLndpcmVmcmFtZUJhY2tncm91bmQgOiBvcHRpb25zLmJhY2tncm91bmQsXG4gICAgICAgICAgICBib2RpZXMgPSBbXSxcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gW10sXG4gICAgICAgICAgICBpO1xuXG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogZW5naW5lLnRpbWluZy50aW1lc3RhbXBcbiAgICAgICAgfTtcblxuICAgICAgICBFdmVudHMudHJpZ2dlcihyZW5kZXIsICdiZWZvcmVSZW5kZXInLCBldmVudCk7XG5cbiAgICAgICAgLy8gYXBwbHkgYmFja2dyb3VuZCBpZiBpdCBoYXMgY2hhbmdlZFxuICAgICAgICBpZiAocmVuZGVyLmN1cnJlbnRCYWNrZ3JvdW5kICE9PSBiYWNrZ3JvdW5kKVxuICAgICAgICAgICAgX2FwcGx5QmFja2dyb3VuZChyZW5kZXIsIGJhY2tncm91bmQpO1xuXG4gICAgICAgIC8vIGNsZWFyIHRoZSBjYW52YXMgd2l0aCBhIHRyYW5zcGFyZW50IGZpbGwsIHRvIGFsbG93IHRoZSBjYW52YXMgYmFja2dyb3VuZCB0byBzaG93XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1pbic7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gXCJ0cmFuc3BhcmVudFwiO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KDAsIDAsIGNhbnZhcy53aWR0aCwgY2FudmFzLmhlaWdodCk7XG4gICAgICAgIGNvbnRleHQuZ2xvYmFsQ29tcG9zaXRlT3BlcmF0aW9uID0gJ3NvdXJjZS1vdmVyJztcblxuICAgICAgICAvLyBoYW5kbGUgYm91bmRzXG4gICAgICAgIGlmIChvcHRpb25zLmhhc0JvdW5kcykge1xuICAgICAgICAgICAgLy8gZmlsdGVyIG91dCBib2RpZXMgdGhhdCBhcmUgbm90IGluIHZpZXdcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbGxCb2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgYm9keSA9IGFsbEJvZGllc1tpXTtcbiAgICAgICAgICAgICAgICBpZiAoQm91bmRzLm92ZXJsYXBzKGJvZHkuYm91bmRzLCByZW5kZXIuYm91bmRzKSlcbiAgICAgICAgICAgICAgICAgICAgYm9kaWVzLnB1c2goYm9keSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGZpbHRlciBvdXQgY29uc3RyYWludHMgdGhhdCBhcmUgbm90IGluIHZpZXdcbiAgICAgICAgICAgIGZvciAoaSA9IDA7IGkgPCBhbGxDb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgICAgIHZhciBjb25zdHJhaW50ID0gYWxsQ29uc3RyYWludHNbaV0sXG4gICAgICAgICAgICAgICAgICAgIGJvZHlBID0gY29uc3RyYWludC5ib2R5QSxcbiAgICAgICAgICAgICAgICAgICAgYm9keUIgPSBjb25zdHJhaW50LmJvZHlCLFxuICAgICAgICAgICAgICAgICAgICBwb2ludEFXb3JsZCA9IGNvbnN0cmFpbnQucG9pbnRBLFxuICAgICAgICAgICAgICAgICAgICBwb2ludEJXb3JsZCA9IGNvbnN0cmFpbnQucG9pbnRCO1xuXG4gICAgICAgICAgICAgICAgaWYgKGJvZHlBKSBwb2ludEFXb3JsZCA9IFZlY3Rvci5hZGQoYm9keUEucG9zaXRpb24sIGNvbnN0cmFpbnQucG9pbnRBKTtcbiAgICAgICAgICAgICAgICBpZiAoYm9keUIpIHBvaW50QldvcmxkID0gVmVjdG9yLmFkZChib2R5Qi5wb3NpdGlvbiwgY29uc3RyYWludC5wb2ludEIpO1xuXG4gICAgICAgICAgICAgICAgaWYgKCFwb2ludEFXb3JsZCB8fCAhcG9pbnRCV29ybGQpXG4gICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAgICAgaWYgKEJvdW5kcy5jb250YWlucyhyZW5kZXIuYm91bmRzLCBwb2ludEFXb3JsZCkgfHwgQm91bmRzLmNvbnRhaW5zKHJlbmRlci5ib3VuZHMsIHBvaW50QldvcmxkKSlcbiAgICAgICAgICAgICAgICAgICAgY29uc3RyYWludHMucHVzaChjb25zdHJhaW50KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gdHJhbnNmb3JtIHRoZSB2aWV3XG4gICAgICAgICAgICBSZW5kZXIuc3RhcnRWaWV3VHJhbnNmb3JtKHJlbmRlcik7XG5cbiAgICAgICAgICAgIC8vIHVwZGF0ZSBtb3VzZVxuICAgICAgICAgICAgaWYgKHJlbmRlci5tb3VzZSkge1xuICAgICAgICAgICAgICAgIE1vdXNlLnNldFNjYWxlKHJlbmRlci5tb3VzZSwge1xuICAgICAgICAgICAgICAgICAgICB4OiAocmVuZGVyLmJvdW5kcy5tYXgueCAtIHJlbmRlci5ib3VuZHMubWluLngpIC8gcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICAgICAgICAgIHk6IChyZW5kZXIuYm91bmRzLm1heC55IC0gcmVuZGVyLmJvdW5kcy5taW4ueSkgLyByZW5kZXIub3B0aW9ucy5oZWlnaHRcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgIE1vdXNlLnNldE9mZnNldChyZW5kZXIubW91c2UsIHJlbmRlci5ib3VuZHMubWluKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGNvbnN0cmFpbnRzID0gYWxsQ29uc3RyYWludHM7XG4gICAgICAgICAgICBib2RpZXMgPSBhbGxCb2RpZXM7XG5cbiAgICAgICAgICAgIGlmIChyZW5kZXIub3B0aW9ucy5waXhlbFJhdGlvICE9PSAxKSB7XG4gICAgICAgICAgICAgICAgcmVuZGVyLmNvbnRleHQuc2V0VHJhbnNmb3JtKHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8sIDAsIDAsIHJlbmRlci5vcHRpb25zLnBpeGVsUmF0aW8sIDAsIDApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFvcHRpb25zLndpcmVmcmFtZXMgfHwgKGVuZ2luZS5lbmFibGVTbGVlcGluZyAmJiBvcHRpb25zLnNob3dTbGVlcGluZykpIHtcbiAgICAgICAgICAgIC8vIGZ1bGx5IGZlYXR1cmVkIHJlbmRlcmluZyBvZiBib2RpZXNcbiAgICAgICAgICAgIFJlbmRlci5ib2RpZXMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0NvbnZleEh1bGxzKVxuICAgICAgICAgICAgICAgIFJlbmRlci5ib2R5Q29udmV4SHVsbHMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgICAgICAvLyBvcHRpbWlzZWQgbWV0aG9kIGZvciB3aXJlZnJhbWVzIG9ubHlcbiAgICAgICAgICAgIFJlbmRlci5ib2R5V2lyZWZyYW1lcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93Qm91bmRzKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlCb3VuZHMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dBeGVzIHx8IG9wdGlvbnMuc2hvd0FuZ2xlSW5kaWNhdG9yKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlBeGVzKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5zaG93UG9zaXRpb25zKVxuICAgICAgICAgICAgUmVuZGVyLmJvZHlQb3NpdGlvbnMocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dWZWxvY2l0eSlcbiAgICAgICAgICAgIFJlbmRlci5ib2R5VmVsb2NpdHkocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dJZHMpXG4gICAgICAgICAgICBSZW5kZXIuYm9keUlkcyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1NlcGFyYXRpb25zKVxuICAgICAgICAgICAgUmVuZGVyLnNlcGFyYXRpb25zKHJlbmRlciwgZW5naW5lLnBhaXJzLmxpc3QsIGNvbnRleHQpO1xuXG4gICAgICAgIGlmIChvcHRpb25zLnNob3dDb2xsaXNpb25zKVxuICAgICAgICAgICAgUmVuZGVyLmNvbGxpc2lvbnMocmVuZGVyLCBlbmdpbmUucGFpcnMubGlzdCwgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd1ZlcnRleE51bWJlcnMpXG4gICAgICAgICAgICBSZW5kZXIudmVydGV4TnVtYmVycyhyZW5kZXIsIGJvZGllcywgY29udGV4dCk7XG5cbiAgICAgICAgaWYgKG9wdGlvbnMuc2hvd01vdXNlUG9zaXRpb24pXG4gICAgICAgICAgICBSZW5kZXIubW91c2VQb3NpdGlvbihyZW5kZXIsIHJlbmRlci5tb3VzZSwgY29udGV4dCk7XG5cbiAgICAgICAgUmVuZGVyLmNvbnN0cmFpbnRzKGNvbnN0cmFpbnRzLCBjb250ZXh0KTtcblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpIHtcbiAgICAgICAgICAgIC8vIHJldmVydCB2aWV3IHRyYW5zZm9ybXNcbiAgICAgICAgICAgIFJlbmRlci5lbmRWaWV3VHJhbnNmb3JtKHJlbmRlcik7XG4gICAgICAgIH1cblxuICAgICAgICBFdmVudHMudHJpZ2dlcihyZW5kZXIsICdhZnRlclJlbmRlcicsIGV2ZW50KTtcblxuICAgICAgICAvLyBsb2cgdGhlIHRpbWUgZWxhcHNlZCBjb21wdXRpbmcgdGhpcyB1cGRhdGVcbiAgICAgICAgdGltaW5nLmxhc3RFbGFwc2VkID0gQ29tbW9uLm5vdygpIC0gc3RhcnRUaW1lO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIHN0YXRpc3RpY3MgYWJvdXQgdGhlIGVuZ2luZSBhbmQgd29ybGQgdXNlZnVsIGZvciBkZWJ1Z2dpbmcuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHN0YXRzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7TnVtYmVyfSB0aW1lXG4gICAgICovXG4gICAgUmVuZGVyLnN0YXRzID0gZnVuY3Rpb24ocmVuZGVyLCBjb250ZXh0LCB0aW1lKSB7XG4gICAgICAgIHZhciBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgd29ybGQgPSBlbmdpbmUud29ybGQsXG4gICAgICAgICAgICBib2RpZXMgPSBDb21wb3NpdGUuYWxsQm9kaWVzKHdvcmxkKSxcbiAgICAgICAgICAgIHBhcnRzID0gMCxcbiAgICAgICAgICAgIHdpZHRoID0gNTUsXG4gICAgICAgICAgICBoZWlnaHQgPSA0NCxcbiAgICAgICAgICAgIHggPSAwLFxuICAgICAgICAgICAgeSA9IDA7XG4gICAgICAgIFxuICAgICAgICAvLyBjb3VudCBwYXJ0c1xuICAgICAgICBmb3IgKHZhciBpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgcGFydHMgKz0gYm9kaWVzW2ldLnBhcnRzLmxlbmd0aDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHNlY3Rpb25zXG4gICAgICAgIHZhciBzZWN0aW9ucyA9IHtcbiAgICAgICAgICAgICdQYXJ0JzogcGFydHMsXG4gICAgICAgICAgICAnQm9keSc6IGJvZGllcy5sZW5ndGgsXG4gICAgICAgICAgICAnQ29ucyc6IENvbXBvc2l0ZS5hbGxDb25zdHJhaW50cyh3b3JsZCkubGVuZ3RoLFxuICAgICAgICAgICAgJ0NvbXAnOiBDb21wb3NpdGUuYWxsQ29tcG9zaXRlcyh3b3JsZCkubGVuZ3RoLFxuICAgICAgICAgICAgJ1BhaXInOiBlbmdpbmUucGFpcnMubGlzdC5sZW5ndGhcbiAgICAgICAgfTtcblxuICAgICAgICAvLyBiYWNrZ3JvdW5kXG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyMwZTBmMTknO1xuICAgICAgICBjb250ZXh0LmZpbGxSZWN0KHgsIHksIHdpZHRoICogNS41LCBoZWlnaHQpO1xuXG4gICAgICAgIGNvbnRleHQuZm9udCA9ICcxMnB4IEFyaWFsJztcbiAgICAgICAgY29udGV4dC50ZXh0QmFzZWxpbmUgPSAndG9wJztcbiAgICAgICAgY29udGV4dC50ZXh0QWxpZ24gPSAncmlnaHQnO1xuXG4gICAgICAgIC8vIHNlY3Rpb25zXG4gICAgICAgIGZvciAodmFyIGtleSBpbiBzZWN0aW9ucykge1xuICAgICAgICAgICAgdmFyIHNlY3Rpb24gPSBzZWN0aW9uc1trZXldO1xuICAgICAgICAgICAgLy8gbGFiZWxcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNhYWEnO1xuICAgICAgICAgICAgY29udGV4dC5maWxsVGV4dChrZXksIHggKyB3aWR0aCwgeSArIDgpO1xuXG4gICAgICAgICAgICAvLyB2YWx1ZVxuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnI2VlZSc7XG4gICAgICAgICAgICBjb250ZXh0LmZpbGxUZXh0KHNlY3Rpb24sIHggKyB3aWR0aCwgeSArIDI2KTtcblxuICAgICAgICAgICAgeCArPSB3aWR0aDtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGVuZ2luZSBhbmQgcmVuZGVyIHBlcmZvcm1hbmNlIGluZm9ybWF0aW9uLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBwZXJmb3JtYW5jZVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIucGVyZm9ybWFuY2UgPSBmdW5jdGlvbihyZW5kZXIsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB0aW1pbmcgPSByZW5kZXIudGltaW5nLFxuICAgICAgICAgICAgZGVsdGFIaXN0b3J5ID0gdGltaW5nLmRlbHRhSGlzdG9yeSxcbiAgICAgICAgICAgIGVsYXBzZWRIaXN0b3J5ID0gdGltaW5nLmVsYXBzZWRIaXN0b3J5LFxuICAgICAgICAgICAgdGltZXN0YW1wRWxhcHNlZEhpc3RvcnkgPSB0aW1pbmcudGltZXN0YW1wRWxhcHNlZEhpc3RvcnksXG4gICAgICAgICAgICBlbmdpbmVEZWx0YUhpc3RvcnkgPSB0aW1pbmcuZW5naW5lRGVsdGFIaXN0b3J5LFxuICAgICAgICAgICAgZW5naW5lVXBkYXRlc0hpc3RvcnkgPSB0aW1pbmcuZW5naW5lVXBkYXRlc0hpc3RvcnksXG4gICAgICAgICAgICBlbmdpbmVFbGFwc2VkSGlzdG9yeSA9IHRpbWluZy5lbmdpbmVFbGFwc2VkSGlzdG9yeSxcbiAgICAgICAgICAgIGxhc3RFbmdpbmVVcGRhdGVzUGVyRnJhbWUgPSBlbmdpbmUudGltaW5nLmxhc3RVcGRhdGVzUGVyRnJhbWUsXG4gICAgICAgICAgICBsYXN0RW5naW5lRGVsdGEgPSBlbmdpbmUudGltaW5nLmxhc3REZWx0YTtcbiAgICAgICAgXG4gICAgICAgIHZhciBkZWx0YU1lYW4gPSBfbWVhbihkZWx0YUhpc3RvcnkpLFxuICAgICAgICAgICAgZWxhcHNlZE1lYW4gPSBfbWVhbihlbGFwc2VkSGlzdG9yeSksXG4gICAgICAgICAgICBlbmdpbmVEZWx0YU1lYW4gPSBfbWVhbihlbmdpbmVEZWx0YUhpc3RvcnkpLFxuICAgICAgICAgICAgZW5naW5lVXBkYXRlc01lYW4gPSBfbWVhbihlbmdpbmVVcGRhdGVzSGlzdG9yeSksXG4gICAgICAgICAgICBlbmdpbmVFbGFwc2VkTWVhbiA9IF9tZWFuKGVuZ2luZUVsYXBzZWRIaXN0b3J5KSxcbiAgICAgICAgICAgIHRpbWVzdGFtcEVsYXBzZWRNZWFuID0gX21lYW4odGltZXN0YW1wRWxhcHNlZEhpc3RvcnkpLFxuICAgICAgICAgICAgcmF0ZU1lYW4gPSAodGltZXN0YW1wRWxhcHNlZE1lYW4gLyBkZWx0YU1lYW4pIHx8IDAsXG4gICAgICAgICAgICBuZWVkZWRVcGRhdGVzUGVyRnJhbWUgPSBNYXRoLnJvdW5kKGRlbHRhTWVhbiAvIGxhc3RFbmdpbmVEZWx0YSksXG4gICAgICAgICAgICBmcHMgPSAoMTAwMCAvIGRlbHRhTWVhbikgfHwgMDtcblxuICAgICAgICB2YXIgZ3JhcGhIZWlnaHQgPSA0LFxuICAgICAgICAgICAgZ2FwID0gMTIsXG4gICAgICAgICAgICB3aWR0aCA9IDYwLFxuICAgICAgICAgICAgaGVpZ2h0ID0gMzQsXG4gICAgICAgICAgICB4ID0gMTAsXG4gICAgICAgICAgICB5ID0gNjk7XG5cbiAgICAgICAgLy8gYmFja2dyb3VuZFxuICAgICAgICBjb250ZXh0LmZpbGxTdHlsZSA9ICcjMGUwZjE5JztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCgwLCA1MCwgZ2FwICogNSArIHdpZHRoICogNiArIDIyLCBoZWlnaHQpO1xuXG4gICAgICAgIC8vIHNob3cgRlBTXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4LCB5LCB3aWR0aCwgZ3JhcGhIZWlnaHQsIGRlbHRhSGlzdG9yeS5sZW5ndGgsIFxuICAgICAgICAgICAgTWF0aC5yb3VuZChmcHMpICsgJyBmcHMnLCBcbiAgICAgICAgICAgIGZwcyAvIFJlbmRlci5fZ29vZEZwcyxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIChkZWx0YUhpc3RvcnlbaV0gLyBkZWx0YU1lYW4pIC0gMTsgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNob3cgZW5naW5lIGRlbHRhXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgZ2FwICsgd2lkdGgsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgZW5naW5lRGVsdGFIaXN0b3J5Lmxlbmd0aCxcbiAgICAgICAgICAgIGxhc3RFbmdpbmVEZWx0YS50b0ZpeGVkKDIpICsgJyBkdCcsIFxuICAgICAgICAgICAgUmVuZGVyLl9nb29kRGVsdGEgLyBsYXN0RW5naW5lRGVsdGEsXG4gICAgICAgICAgICBmdW5jdGlvbihpKSB7IHJldHVybiAoZW5naW5lRGVsdGFIaXN0b3J5W2ldIC8gZW5naW5lRGVsdGFNZWFuKSAtIDE7IH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzaG93IGVuZ2luZSB1cGRhdGVzIHBlciBmcmFtZVxuICAgICAgICBSZW5kZXIuc3RhdHVzKFxuICAgICAgICAgICAgY29udGV4dCwgeCArIChnYXAgKyB3aWR0aCkgKiAyLCB5LCB3aWR0aCwgZ3JhcGhIZWlnaHQsIGVuZ2luZVVwZGF0ZXNIaXN0b3J5Lmxlbmd0aCxcbiAgICAgICAgICAgIGxhc3RFbmdpbmVVcGRhdGVzUGVyRnJhbWUgKyAnIHVwZicsIFxuICAgICAgICAgICAgTWF0aC5wb3coQ29tbW9uLmNsYW1wKChlbmdpbmVVcGRhdGVzTWVhbiAvIG5lZWRlZFVwZGF0ZXNQZXJGcmFtZSkgfHwgMSwgMCwgMSksIDQpLFxuICAgICAgICAgICAgZnVuY3Rpb24oaSkgeyByZXR1cm4gKGVuZ2luZVVwZGF0ZXNIaXN0b3J5W2ldIC8gZW5naW5lVXBkYXRlc01lYW4pIC0gMTsgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNob3cgZW5naW5lIHVwZGF0ZSB0aW1lXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgKGdhcCArIHdpZHRoKSAqIDMsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgZW5naW5lRWxhcHNlZEhpc3RvcnkubGVuZ3RoLFxuICAgICAgICAgICAgZW5naW5lRWxhcHNlZE1lYW4udG9GaXhlZCgyKSArICcgdXQnLCBcbiAgICAgICAgICAgIDEgLSAobGFzdEVuZ2luZVVwZGF0ZXNQZXJGcmFtZSAqIGVuZ2luZUVsYXBzZWRNZWFuIC8gUmVuZGVyLl9nb29kRnBzKSxcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuIChlbmdpbmVFbGFwc2VkSGlzdG9yeVtpXSAvIGVuZ2luZUVsYXBzZWRNZWFuKSAtIDE7IH1cbiAgICAgICAgKTtcblxuICAgICAgICAvLyBzaG93IHJlbmRlciB0aW1lXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgKGdhcCArIHdpZHRoKSAqIDQsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgZWxhcHNlZEhpc3RvcnkubGVuZ3RoLFxuICAgICAgICAgICAgZWxhcHNlZE1lYW4udG9GaXhlZCgyKSArICcgcnQnLCBcbiAgICAgICAgICAgIDEgLSAoZWxhcHNlZE1lYW4gLyBSZW5kZXIuX2dvb2RGcHMpLFxuICAgICAgICAgICAgZnVuY3Rpb24oaSkgeyByZXR1cm4gKGVsYXBzZWRIaXN0b3J5W2ldIC8gZWxhcHNlZE1lYW4pIC0gMTsgfVxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHNob3cgZWZmZWN0aXZlIHNwZWVkXG4gICAgICAgIFJlbmRlci5zdGF0dXMoXG4gICAgICAgICAgICBjb250ZXh0LCB4ICsgKGdhcCArIHdpZHRoKSAqIDUsIHksIHdpZHRoLCBncmFwaEhlaWdodCwgdGltZXN0YW1wRWxhcHNlZEhpc3RvcnkubGVuZ3RoLCBcbiAgICAgICAgICAgIHJhdGVNZWFuLnRvRml4ZWQoMikgKyAnIHgnLCBcbiAgICAgICAgICAgIHJhdGVNZWFuICogcmF0ZU1lYW4gKiByYXRlTWVhbixcbiAgICAgICAgICAgIGZ1bmN0aW9uKGkpIHsgcmV0dXJuICgoKHRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5W2ldIC8gZGVsdGFIaXN0b3J5W2ldKSAvIHJhdGVNZWFuKSB8fCAwKSAtIDE7IH1cbiAgICAgICAgKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmVuZGVycyBhIGxhYmVsLCBpbmRpY2F0b3IgYW5kIGEgY2hhcnQuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHN0YXR1c1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB4XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IHlcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gd2lkdGhcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gaGVpZ2h0XG4gICAgICogQHBhcmFtIHtudW1iZXJ9IGNvdW50XG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGxhYmVsXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGluZGljYXRvclxuICAgICAqIEBwYXJhbSB7ZnVuY3Rpb259IHBsb3RZXG4gICAgICovXG4gICAgUmVuZGVyLnN0YXR1cyA9IGZ1bmN0aW9uKGNvbnRleHQsIHgsIHksIHdpZHRoLCBoZWlnaHQsIGNvdW50LCBsYWJlbCwgaW5kaWNhdG9yLCBwbG90WSkge1xuICAgICAgICAvLyBiYWNrZ3JvdW5kXG4gICAgICAgIGNvbnRleHQuc3Ryb2tlU3R5bGUgPSAnIzg4OCc7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyM0NDQnO1xuICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGNvbnRleHQuZmlsbFJlY3QoeCwgeSArIDcsIHdpZHRoLCAxKTtcblxuICAgICAgICAvLyBjaGFydFxuICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICBjb250ZXh0Lm1vdmVUbyh4LCB5ICsgNyAtIGhlaWdodCAqIENvbW1vbi5jbGFtcCgwLjQgKiBwbG90WSgwKSwgLTIsIDIpKTtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB3aWR0aDsgaSArPSAxKSB7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVUbyh4ICsgaSwgeSArIDcgLSAoaSA8IGNvdW50ID8gaGVpZ2h0ICogQ29tbW9uLmNsYW1wKDAuNCAqIHBsb3RZKGkpLCAtMiwgMikgOiAwKSk7XG4gICAgICAgIH1cbiAgICAgICAgY29udGV4dC5zdHJva2UoKTtcblxuICAgICAgICAvLyBpbmRpY2F0b3JcbiAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAnaHNsKCcgKyBDb21tb24uY2xhbXAoMjUgKyA5NSAqIGluZGljYXRvciwgMCwgMTIwKSArICcsMTAwJSw2MCUpJztcbiAgICAgICAgY29udGV4dC5maWxsUmVjdCh4LCB5IC0gNywgNCwgNCk7XG5cbiAgICAgICAgLy8gbGFiZWxcbiAgICAgICAgY29udGV4dC5mb250ID0gJzEycHggQXJpYWwnO1xuICAgICAgICBjb250ZXh0LnRleHRCYXNlbGluZSA9ICdtaWRkbGUnO1xuICAgICAgICBjb250ZXh0LnRleHRBbGlnbiA9ICdyaWdodCc7XG4gICAgICAgIGNvbnRleHQuZmlsbFN0eWxlID0gJyNlZWUnO1xuICAgICAgICBjb250ZXh0LmZpbGxUZXh0KGxhYmVsLCB4ICsgd2lkdGgsIHkgLSA1KTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRGVzY3JpcHRpb25cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge2NvbnN0cmFpbnRbXX0gY29uc3RyYWludHNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuY29uc3RyYWludHMgPSBmdW5jdGlvbihjb25zdHJhaW50cywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQ7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBjb25zdHJhaW50cy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdmFyIGNvbnN0cmFpbnQgPSBjb25zdHJhaW50c1tpXTtcblxuICAgICAgICAgICAgaWYgKCFjb25zdHJhaW50LnJlbmRlci52aXNpYmxlIHx8ICFjb25zdHJhaW50LnBvaW50QSB8fCAhY29uc3RyYWludC5wb2ludEIpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciBib2R5QSA9IGNvbnN0cmFpbnQuYm9keUEsXG4gICAgICAgICAgICAgICAgYm9keUIgPSBjb25zdHJhaW50LmJvZHlCLFxuICAgICAgICAgICAgICAgIHN0YXJ0LFxuICAgICAgICAgICAgICAgIGVuZDtcblxuICAgICAgICAgICAgaWYgKGJvZHlBKSB7XG4gICAgICAgICAgICAgICAgc3RhcnQgPSBWZWN0b3IuYWRkKGJvZHlBLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50QSk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHN0YXJ0ID0gY29uc3RyYWludC5wb2ludEE7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci50eXBlID09PSAncGluJykge1xuICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgYy5hcmMoc3RhcnQueCwgc3RhcnQueSwgMywgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGlmIChib2R5Qikge1xuICAgICAgICAgICAgICAgICAgICBlbmQgPSBWZWN0b3IuYWRkKGJvZHlCLnBvc2l0aW9uLCBjb25zdHJhaW50LnBvaW50Qik7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZW5kID0gY29uc3RyYWludC5wb2ludEI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLm1vdmVUbyhzdGFydC54LCBzdGFydC55KTtcblxuICAgICAgICAgICAgICAgIGlmIChjb25zdHJhaW50LnJlbmRlci50eXBlID09PSAnc3ByaW5nJykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgZGVsdGEgPSBWZWN0b3Iuc3ViKGVuZCwgc3RhcnQpLFxuICAgICAgICAgICAgICAgICAgICAgICAgbm9ybWFsID0gVmVjdG9yLnBlcnAoVmVjdG9yLm5vcm1hbGlzZShkZWx0YSkpLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29pbHMgPSBNYXRoLmNlaWwoQ29tbW9uLmNsYW1wKGNvbnN0cmFpbnQubGVuZ3RoIC8gNSwgMTIsIDIwKSksXG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQ7XG5cbiAgICAgICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IDE7IGogPCBjb2lsczsgaiArPSAxKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvZmZzZXQgPSBqICUgMiA9PT0gMCA/IDEgOiAtMTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8oXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RhcnQueCArIGRlbHRhLnggKiAoaiAvIGNvaWxzKSArIG5vcm1hbC54ICogb2Zmc2V0ICogNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdGFydC55ICsgZGVsdGEueSAqIChqIC8gY29pbHMpICsgbm9ybWFsLnkgKiBvZmZzZXQgKiA0XG4gICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5saW5lVG8oZW5kLngsIGVuZC55KTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKGNvbnN0cmFpbnQucmVuZGVyLmxpbmVXaWR0aCkge1xuICAgICAgICAgICAgICAgIGMubGluZVdpZHRoID0gY29uc3RyYWludC5yZW5kZXIubGluZVdpZHRoO1xuICAgICAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSBjb25zdHJhaW50LnJlbmRlci5zdHJva2VTdHlsZTtcbiAgICAgICAgICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAoY29uc3RyYWludC5yZW5kZXIuYW5jaG9ycykge1xuICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gY29uc3RyYWludC5yZW5kZXIuc3Ryb2tlU3R5bGU7XG4gICAgICAgICAgICAgICAgYy5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLmFyYyhzdGFydC54LCBzdGFydC55LCAzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYy5hcmMoZW5kLngsIGVuZC55LCAzLCAwLCAyICogTWF0aC5QSSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgICAgICBjLmZpbGwoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2RpZXNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2RpZXMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBlbmdpbmUgPSByZW5kZXIuZW5naW5lLFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgc2hvd0ludGVybmFsRWRnZXMgPSBvcHRpb25zLnNob3dJbnRlcm5hbEVkZ2VzIHx8ICFvcHRpb25zLndpcmVmcmFtZXMsXG4gICAgICAgICAgICBib2R5LFxuICAgICAgICAgICAgcGFydCxcbiAgICAgICAgICAgIGksXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIGJvZHkgPSBib2RpZXNbaV07XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgLy8gaGFuZGxlIGNvbXBvdW5kIHBhcnRzXG4gICAgICAgICAgICBmb3IgKGsgPSBib2R5LnBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgayA8IGJvZHkucGFydHMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICBwYXJ0ID0gYm9keS5wYXJ0c1trXTtcblxuICAgICAgICAgICAgICAgIGlmICghcGFydC5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgICAgICBpZiAob3B0aW9ucy5zaG93U2xlZXBpbmcgJiYgYm9keS5pc1NsZWVwaW5nKSB7XG4gICAgICAgICAgICAgICAgICAgIGMuZ2xvYmFsQWxwaGEgPSAwLjUgKiBwYXJ0LnJlbmRlci5vcGFjaXR5O1xuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFydC5yZW5kZXIub3BhY2l0eSAhPT0gMSkge1xuICAgICAgICAgICAgICAgICAgICBjLmdsb2JhbEFscGhhID0gcGFydC5yZW5kZXIub3BhY2l0eTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZiAocGFydC5yZW5kZXIuc3ByaXRlICYmIHBhcnQucmVuZGVyLnNwcml0ZS50ZXh0dXJlICYmICFvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgLy8gcGFydCBzcHJpdGVcbiAgICAgICAgICAgICAgICAgICAgdmFyIHNwcml0ZSA9IHBhcnQucmVuZGVyLnNwcml0ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUgPSBfZ2V0VGV4dHVyZShyZW5kZXIsIHNwcml0ZS50ZXh0dXJlKTtcblxuICAgICAgICAgICAgICAgICAgICBjLnRyYW5zbGF0ZShwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSk7XG4gICAgICAgICAgICAgICAgICAgIGMucm90YXRlKHBhcnQuYW5nbGUpO1xuXG4gICAgICAgICAgICAgICAgICAgIGMuZHJhd0ltYWdlKFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRleHR1cmUud2lkdGggKiAtc3ByaXRlLnhPZmZzZXQgKiBzcHJpdGUueFNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS5oZWlnaHQgKiAtc3ByaXRlLnlPZmZzZXQgKiBzcHJpdGUueVNjYWxlLFxuICAgICAgICAgICAgICAgICAgICAgICAgdGV4dHVyZS53aWR0aCAqIHNwcml0ZS54U2NhbGUsXG4gICAgICAgICAgICAgICAgICAgICAgICB0ZXh0dXJlLmhlaWdodCAqIHNwcml0ZS55U2NhbGVcbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAvLyByZXZlcnQgdHJhbnNsYXRpb24sIGhvcGVmdWxseSBmYXN0ZXIgdGhhbiBzYXZlIC8gcmVzdG9yZVxuICAgICAgICAgICAgICAgICAgICBjLnJvdGF0ZSgtcGFydC5hbmdsZSk7XG4gICAgICAgICAgICAgICAgICAgIGMudHJhbnNsYXRlKC1wYXJ0LnBvc2l0aW9uLngsIC1wYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIHBhcnQgcG9seWdvblxuICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5jaXJjbGVSYWRpdXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmFyYyhwYXJ0LnBvc2l0aW9uLngsIHBhcnQucG9zaXRpb24ueSwgcGFydC5jaXJjbGVSYWRpdXMsIDAsIDIgKiBNYXRoLlBJKTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuYmVnaW5QYXRoKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGZvciAodmFyIGogPSAxOyBqIDwgcGFydC52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmICghcGFydC52ZXJ0aWNlc1tqIC0gMV0uaXNJbnRlcm5hbCB8fCBzaG93SW50ZXJuYWxFZGdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzW2pdLngsIHBhcnQudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC52ZXJ0aWNlc1tqXS54LCBwYXJ0LnZlcnRpY2VzW2pdLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LnZlcnRpY2VzW2pdLmlzSW50ZXJuYWwgJiYgIXNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbKGogKyAxKSAlIHBhcnQudmVydGljZXMubGVuZ3RoXS54LCBwYXJ0LnZlcnRpY2VzWyhqICsgMSkgJSBwYXJ0LnZlcnRpY2VzLmxlbmd0aF0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBjLmxpbmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKCFvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gcGFydC5yZW5kZXIuZmlsbFN0eWxlO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAocGFydC5yZW5kZXIubGluZVdpZHRoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lV2lkdGggPSBwYXJ0LnJlbmRlci5saW5lV2lkdGg7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHBhcnQucmVuZGVyLnN0cm9rZVN0eWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgIGMuZmlsbCgpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9IHJlbmRlci5vcHRpb25zLndpcmVmcmFtZVN0cm9rZVN0eWxlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5zdHJva2UoKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIGMuZ2xvYmFsQWxwaGEgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE9wdGltaXNlZCBtZXRob2QgZm9yIGRyYXdpbmcgYm9keSB3aXJlZnJhbWVzIGluIG9uZSBwYXNzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlXaXJlZnJhbWVzXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keVdpcmVmcmFtZXMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBzaG93SW50ZXJuYWxFZGdlcyA9IHJlbmRlci5vcHRpb25zLnNob3dJbnRlcm5hbEVkZ2VzLFxuICAgICAgICAgICAgYm9keSxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgYWxsIGJvZGllc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIC8vIGhhbmRsZSBjb21wb3VuZCBwYXJ0c1xuICAgICAgICAgICAgZm9yIChrID0gYm9keS5wYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGsgPCBib2R5LnBhcnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IGJvZHkucGFydHNba107XG5cbiAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWzBdLngsIHBhcnQudmVydGljZXNbMF0ueSk7XG5cbiAgICAgICAgICAgICAgICBmb3IgKGogPSAxOyBqIDwgcGFydC52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBpZiAoIXBhcnQudmVydGljZXNbaiAtIDFdLmlzSW50ZXJuYWwgfHwgc2hvd0ludGVybmFsRWRnZXMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKHBhcnQudmVydGljZXNbal0ueCwgcGFydC52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQudmVydGljZXNbal0ueCwgcGFydC52ZXJ0aWNlc1tqXS55KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIGlmIChwYXJ0LnZlcnRpY2VzW2pdLmlzSW50ZXJuYWwgJiYgIXNob3dJbnRlcm5hbEVkZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjLm1vdmVUbyhwYXJ0LnZlcnRpY2VzWyhqICsgMSkgJSBwYXJ0LnZlcnRpY2VzLmxlbmd0aF0ueCwgcGFydC52ZXJ0aWNlc1soaiArIDEpICUgcGFydC52ZXJ0aWNlcy5sZW5ndGhdLnkpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC52ZXJ0aWNlc1swXS54LCBwYXJ0LnZlcnRpY2VzWzBdLnkpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICBjLnN0cm9rZVN0eWxlID0gcmVuZGVyLm9wdGlvbnMud2lyZWZyYW1lU3Ryb2tlU3R5bGU7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIE9wdGltaXNlZCBtZXRob2QgZm9yIGRyYXdpbmcgYm9keSBjb252ZXggaHVsbCB3aXJlZnJhbWVzIGluIG9uZSBwYXNzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlDb252ZXhIdWxsc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlDb252ZXhIdWxscyA9IGZ1bmN0aW9uKHJlbmRlciwgYm9kaWVzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIGNvbnZleCBodWxsc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUgfHwgYm9keS5wYXJ0cy5sZW5ndGggPT09IDEpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIGMubW92ZVRvKGJvZHkudmVydGljZXNbMF0ueCwgYm9keS52ZXJ0aWNlc1swXS55KTtcblxuICAgICAgICAgICAgZm9yIChqID0gMTsgaiA8IGJvZHkudmVydGljZXMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhib2R5LnZlcnRpY2VzW2pdLngsIGJvZHkudmVydGljZXNbal0ueSk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGMubGluZVRvKGJvZHkudmVydGljZXNbMF0ueCwgYm9keS52ZXJ0aWNlc1swXS55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGMubGluZVdpZHRoID0gMTtcbiAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMiknO1xuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIGJvZHkgdmVydGV4IG51bWJlcnMuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHZlcnRleE51bWJlcnNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci52ZXJ0ZXhOdW1iZXJzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGosXG4gICAgICAgICAgICBrO1xuXG4gICAgICAgIGZvciAoaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBwYXJ0cyA9IGJvZGllc1tpXS5wYXJ0cztcbiAgICAgICAgICAgIGZvciAoayA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgayA8IHBhcnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhcnQgPSBwYXJ0c1trXTtcbiAgICAgICAgICAgICAgICBmb3IgKGogPSAwOyBqIDwgcGFydC52ZXJ0aWNlcy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuMiknO1xuICAgICAgICAgICAgICAgICAgICBjLmZpbGxUZXh0KGkgKyAnXycgKyBqLCBwYXJ0LnBvc2l0aW9uLnggKyAocGFydC52ZXJ0aWNlc1tqXS54IC0gcGFydC5wb3NpdGlvbi54KSAqIDAuOCwgcGFydC5wb3NpdGlvbi55ICsgKHBhcnQudmVydGljZXNbal0ueSAtIHBhcnQucG9zaXRpb24ueSkgKiAwLjgpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZW5kZXJzIG1vdXNlIHBvc2l0aW9uLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBtb3VzZVBvc2l0aW9uXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7bW91c2V9IG1vdXNlXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLm1vdXNlUG9zaXRpb24gPSBmdW5jdGlvbihyZW5kZXIsIG1vdXNlLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dDtcbiAgICAgICAgYy5maWxsU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjgpJztcbiAgICAgICAgYy5maWxsVGV4dChtb3VzZS5wb3NpdGlvbi54ICsgJyAgJyArIG1vdXNlLnBvc2l0aW9uLnksIG1vdXNlLnBvc2l0aW9uLnggKyA1LCBtb3VzZS5wb3NpdGlvbi55IC0gNSk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgYm91bmRzXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlCb3VuZHNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5Qm91bmRzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucztcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKGJvZHkucmVuZGVyLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydHMgPSBib2RpZXNbaV0ucGFydHM7XG4gICAgICAgICAgICAgICAgZm9yICh2YXIgaiA9IHBhcnRzLmxlbmd0aCA+IDEgPyAxIDogMDsgaiA8IHBhcnRzLmxlbmd0aDsgaisrKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgIGMucmVjdChwYXJ0LmJvdW5kcy5taW4ueCwgcGFydC5ib3VuZHMubWluLnksIHBhcnQuYm91bmRzLm1heC54IC0gcGFydC5ib3VuZHMubWluLngsIHBhcnQuYm91bmRzLm1heC55IC0gcGFydC5ib3VuZHMubWluLnkpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMjU1LDI1NSwwLjA4KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ3JnYmEoMCwwLDAsMC4xKSc7XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgYW5nbGUgaW5kaWNhdG9ycyBhbmQgYXhlc1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBib2R5QXhlc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlBeGVzID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHBhcnQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgaixcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICB2YXIgYm9keSA9IGJvZGllc1tpXSxcbiAgICAgICAgICAgICAgICBwYXJ0cyA9IGJvZHkucGFydHM7XG5cbiAgICAgICAgICAgIGlmICghYm9keS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgaWYgKG9wdGlvbnMuc2hvd0F4ZXMpIHtcbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgYWxsIGF4ZXNcbiAgICAgICAgICAgICAgICBmb3IgKGogPSBwYXJ0cy5sZW5ndGggPiAxID8gMSA6IDA7IGogPCBwYXJ0cy5sZW5ndGg7IGorKykge1xuICAgICAgICAgICAgICAgICAgICBwYXJ0ID0gcGFydHNbal07XG4gICAgICAgICAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBwYXJ0LmF4ZXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBheGlzID0gcGFydC5heGVzW2tdO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8ocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgYy5saW5lVG8ocGFydC5wb3NpdGlvbi54ICsgYXhpcy54ICogMjAsIHBhcnQucG9zaXRpb24ueSArIGF4aXMueSAqIDIwKTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZm9yIChqID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICAgICAgcGFydCA9IHBhcnRzW2pdO1xuICAgICAgICAgICAgICAgICAgICBmb3IgKGsgPSAwOyBrIDwgcGFydC5heGVzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAvLyByZW5kZXIgYSBzaW5nbGUgYXhpcyBpbmRpY2F0b3JcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKHBhcnQucG9zaXRpb24ueCwgcGFydC5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGMubGluZVRvKChwYXJ0LnZlcnRpY2VzWzBdLnggKyBwYXJ0LnZlcnRpY2VzW3BhcnQudmVydGljZXMubGVuZ3RoLTFdLngpIC8gMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAocGFydC52ZXJ0aWNlc1swXS55ICsgcGFydC52ZXJ0aWNlc1twYXJ0LnZlcnRpY2VzLmxlbmd0aC0xXS55KSAvIDIpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdpbmRpYW5yZWQnO1xuICAgICAgICAgICAgYy5saW5lV2lkdGggPSAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwgMjU1LCAyNTUsIDAuNCknO1xuICAgICAgICAgICAgYy5nbG9iYWxDb21wb3NpdGVPcGVyYXRpb24gPSAnb3ZlcmxheSc7XG4gICAgICAgICAgICBjLmxpbmVXaWR0aCA9IDI7XG4gICAgICAgIH1cblxuICAgICAgICBjLnN0cm9rZSgpO1xuICAgICAgICBjLmdsb2JhbENvbXBvc2l0ZU9wZXJhdGlvbiA9ICdzb3VyY2Utb3Zlcic7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgcG9zaXRpb25zXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGJvZHlQb3NpdGlvbnNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtib2R5W119IGJvZGllc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5ib2R5UG9zaXRpb25zID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgZW5naW5lID0gcmVuZGVyLmVuZ2luZSxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIGJvZHksXG4gICAgICAgICAgICBwYXJ0LFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGs7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgY3VycmVudCBwb3NpdGlvbnNcbiAgICAgICAgZm9yIChpID0gMDsgaSA8IGJvZGllcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgYm9keSA9IGJvZGllc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFib2R5LnJlbmRlci52aXNpYmxlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICAvLyBoYW5kbGUgY29tcG91bmQgcGFydHNcbiAgICAgICAgICAgIGZvciAoayA9IDA7IGsgPCBib2R5LnBhcnRzLmxlbmd0aDsgaysrKSB7XG4gICAgICAgICAgICAgICAgcGFydCA9IGJvZHkucGFydHNba107XG4gICAgICAgICAgICAgICAgYy5hcmMocGFydC5wb3NpdGlvbi54LCBwYXJ0LnBvc2l0aW9uLnksIDMsIDAsIDIgKiBNYXRoLlBJLCBmYWxzZSk7XG4gICAgICAgICAgICAgICAgYy5jbG9zZVBhdGgoKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ2luZGlhbnJlZCc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDAsMCwwLDAuNSknO1xuICAgICAgICB9XG4gICAgICAgIGMuZmlsbCgpO1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgLy8gcmVuZGVyIHByZXZpb3VzIHBvc2l0aW9uc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBib2R5ID0gYm9kaWVzW2ldO1xuICAgICAgICAgICAgaWYgKGJvZHkucmVuZGVyLnZpc2libGUpIHtcbiAgICAgICAgICAgICAgICBjLmFyYyhib2R5LnBvc2l0aW9uUHJldi54LCBib2R5LnBvc2l0aW9uUHJldi55LCAyLCAwLCAyICogTWF0aC5QSSwgZmFsc2UpO1xuICAgICAgICAgICAgICAgIGMuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjgpJztcbiAgICAgICAgYy5maWxsKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERyYXdzIGJvZHkgdmVsb2NpdHlcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keVZlbG9jaXR5XG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7Ym9keVtdfSBib2RpZXNcbiAgICAgKiBAcGFyYW0ge1JlbmRlcmluZ0NvbnRleHR9IGNvbnRleHRcbiAgICAgKi9cbiAgICBSZW5kZXIuYm9keVZlbG9jaXR5ID0gZnVuY3Rpb24ocmVuZGVyLCBib2RpZXMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0O1xuXG4gICAgICAgIGMuYmVnaW5QYXRoKCk7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCBib2RpZXMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBib2R5ID0gYm9kaWVzW2ldO1xuXG4gICAgICAgICAgICBpZiAoIWJvZHkucmVuZGVyLnZpc2libGUpXG4gICAgICAgICAgICAgICAgY29udGludWU7XG5cbiAgICAgICAgICAgIHZhciB2ZWxvY2l0eSA9IEJvZHkuZ2V0VmVsb2NpdHkoYm9keSk7XG5cbiAgICAgICAgICAgIGMubW92ZVRvKGJvZHkucG9zaXRpb24ueCwgYm9keS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIGMubGluZVRvKGJvZHkucG9zaXRpb24ueCArIHZlbG9jaXR5LngsIGJvZHkucG9zaXRpb24ueSArIHZlbG9jaXR5LnkpO1xuICAgICAgICB9XG5cbiAgICAgICAgYy5saW5lV2lkdGggPSAzO1xuICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ2Nvcm5mbG93ZXJibHVlJztcbiAgICAgICAgYy5zdHJva2UoKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogRHJhd3MgYm9keSBpZHNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBtZXRob2QgYm9keUlkc1xuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge2JvZHlbXX0gYm9kaWVzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmJvZHlJZHMgPSBmdW5jdGlvbihyZW5kZXIsIGJvZGllcywgY29udGV4dCkge1xuICAgICAgICB2YXIgYyA9IGNvbnRleHQsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgYm9kaWVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoIWJvZGllc1tpXS5yZW5kZXIudmlzaWJsZSlcbiAgICAgICAgICAgICAgICBjb250aW51ZTtcblxuICAgICAgICAgICAgdmFyIHBhcnRzID0gYm9kaWVzW2ldLnBhcnRzO1xuICAgICAgICAgICAgZm9yIChqID0gcGFydHMubGVuZ3RoID4gMSA/IDEgOiAwOyBqIDwgcGFydHMubGVuZ3RoOyBqKyspIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFydCA9IHBhcnRzW2pdO1xuICAgICAgICAgICAgICAgIGMuZm9udCA9IFwiMTJweCBBcmlhbFwiO1xuICAgICAgICAgICAgICAgIGMuZmlsbFN0eWxlID0gJ3JnYmEoMjU1LDI1NSwyNTUsMC41KSc7XG4gICAgICAgICAgICAgICAgYy5maWxsVGV4dChwYXJ0LmlkLCBwYXJ0LnBvc2l0aW9uLnggKyAxMCwgcGFydC5wb3NpdGlvbi55IC0gMTApO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIGNvbGxpc2lvbnNcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtwYWlyW119IHBhaXJzXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmNvbGxpc2lvbnMgPSBmdW5jdGlvbihyZW5kZXIsIHBhaXJzLCBjb250ZXh0KSB7XG4gICAgICAgIHZhciBjID0gY29udGV4dCxcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIHBhaXIsXG4gICAgICAgICAgICBjb2xsaXNpb24sXG4gICAgICAgICAgICBjb3JyZWN0ZWQsXG4gICAgICAgICAgICBib2R5QSxcbiAgICAgICAgICAgIGJvZHlCLFxuICAgICAgICAgICAgaSxcbiAgICAgICAgICAgIGo7XG5cbiAgICAgICAgYy5iZWdpblBhdGgoKTtcblxuICAgICAgICAvLyByZW5kZXIgY29sbGlzaW9uIHBvc2l0aW9uc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIGZvciAoaiA9IDA7IGogPCBwYWlyLmNvbnRhY3RDb3VudDsgaisrKSB7XG4gICAgICAgICAgICAgICAgdmFyIGNvbnRhY3QgPSBwYWlyLmNvbnRhY3RzW2pdLFxuICAgICAgICAgICAgICAgICAgICB2ZXJ0ZXggPSBjb250YWN0LnZlcnRleDtcbiAgICAgICAgICAgICAgICBjLnJlY3QodmVydGV4LnggLSAxLjUsIHZlcnRleC55IC0gMS41LCAzLjUsIDMuNSk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy53aXJlZnJhbWVzKSB7XG4gICAgICAgICAgICBjLmZpbGxTdHlsZSA9ICdyZ2JhKDI1NSwyNTUsMjU1LDAuNyknO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgYy5maWxsU3R5bGUgPSAnb3JhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBjLmZpbGwoKTtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBjb2xsaXNpb24gbm9ybWFsc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcblxuICAgICAgICAgICAgaWYgKHBhaXIuY29udGFjdENvdW50ID4gMCkge1xuICAgICAgICAgICAgICAgIHZhciBub3JtYWxQb3NYID0gcGFpci5jb250YWN0c1swXS52ZXJ0ZXgueCxcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsUG9zWSA9IHBhaXIuY29udGFjdHNbMF0udmVydGV4Lnk7XG5cbiAgICAgICAgICAgICAgICBpZiAocGFpci5jb250YWN0Q291bnQgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgbm9ybWFsUG9zWCA9IChwYWlyLmNvbnRhY3RzWzBdLnZlcnRleC54ICsgcGFpci5jb250YWN0c1sxXS52ZXJ0ZXgueCkgLyAyO1xuICAgICAgICAgICAgICAgICAgICBub3JtYWxQb3NZID0gKHBhaXIuY29udGFjdHNbMF0udmVydGV4LnkgKyBwYWlyLmNvbnRhY3RzWzFdLnZlcnRleC55KSAvIDI7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaWYgKGNvbGxpc2lvbi5ib2R5QiA9PT0gY29sbGlzaW9uLnN1cHBvcnRzWzBdLmJvZHkgfHwgY29sbGlzaW9uLmJvZHlBLmlzU3RhdGljID09PSB0cnVlKSB7XG4gICAgICAgICAgICAgICAgICAgIGMubW92ZVRvKG5vcm1hbFBvc1ggLSBjb2xsaXNpb24ubm9ybWFsLnggKiA4LCBub3JtYWxQb3NZIC0gY29sbGlzaW9uLm5vcm1hbC55ICogOCk7XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgYy5tb3ZlVG8obm9ybWFsUG9zWCArIGNvbGxpc2lvbi5ub3JtYWwueCAqIDgsIG5vcm1hbFBvc1kgKyBjb2xsaXNpb24ubm9ybWFsLnkgKiA4KTtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBjLmxpbmVUbyhub3JtYWxQb3NYLCBub3JtYWxQb3NZKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIGlmIChvcHRpb25zLndpcmVmcmFtZXMpIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC43KSc7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICBjLnN0cm9rZVN0eWxlID0gJ29yYW5nZSc7XG4gICAgICAgIH1cblxuICAgICAgICBjLmxpbmVXaWR0aCA9IDE7XG4gICAgICAgIGMuc3Ryb2tlKCk7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIERlc2NyaXB0aW9uXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIHNlcGFyYXRpb25zXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7cGFpcltdfSBwYWlyc1xuICAgICAqIEBwYXJhbSB7UmVuZGVyaW5nQ29udGV4dH0gY29udGV4dFxuICAgICAqL1xuICAgIFJlbmRlci5zZXBhcmF0aW9ucyA9IGZ1bmN0aW9uKHJlbmRlciwgcGFpcnMsIGNvbnRleHQpIHtcbiAgICAgICAgdmFyIGMgPSBjb250ZXh0LFxuICAgICAgICAgICAgb3B0aW9ucyA9IHJlbmRlci5vcHRpb25zLFxuICAgICAgICAgICAgcGFpcixcbiAgICAgICAgICAgIGNvbGxpc2lvbixcbiAgICAgICAgICAgIGNvcnJlY3RlZCxcbiAgICAgICAgICAgIGJvZHlBLFxuICAgICAgICAgICAgYm9keUIsXG4gICAgICAgICAgICBpLFxuICAgICAgICAgICAgajtcblxuICAgICAgICBjLmJlZ2luUGF0aCgpO1xuXG4gICAgICAgIC8vIHJlbmRlciBzZXBhcmF0aW9uc1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGFpcnMubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHBhaXIgPSBwYWlyc1tpXTtcblxuICAgICAgICAgICAgaWYgKCFwYWlyLmlzQWN0aXZlKVxuICAgICAgICAgICAgICAgIGNvbnRpbnVlO1xuXG4gICAgICAgICAgICBjb2xsaXNpb24gPSBwYWlyLmNvbGxpc2lvbjtcbiAgICAgICAgICAgIGJvZHlBID0gY29sbGlzaW9uLmJvZHlBO1xuICAgICAgICAgICAgYm9keUIgPSBjb2xsaXNpb24uYm9keUI7XG5cbiAgICAgICAgICAgIHZhciBrID0gMTtcblxuICAgICAgICAgICAgaWYgKCFib2R5Qi5pc1N0YXRpYyAmJiAhYm9keUEuaXNTdGF0aWMpIGsgPSAwLjU7XG4gICAgICAgICAgICBpZiAoYm9keUIuaXNTdGF0aWMpIGsgPSAwO1xuXG4gICAgICAgICAgICBjLm1vdmVUbyhib2R5Qi5wb3NpdGlvbi54LCBib2R5Qi5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIGMubGluZVRvKGJvZHlCLnBvc2l0aW9uLnggLSBjb2xsaXNpb24ucGVuZXRyYXRpb24ueCAqIGssIGJvZHlCLnBvc2l0aW9uLnkgLSBjb2xsaXNpb24ucGVuZXRyYXRpb24ueSAqIGspO1xuXG4gICAgICAgICAgICBrID0gMTtcblxuICAgICAgICAgICAgaWYgKCFib2R5Qi5pc1N0YXRpYyAmJiAhYm9keUEuaXNTdGF0aWMpIGsgPSAwLjU7XG4gICAgICAgICAgICBpZiAoYm9keUEuaXNTdGF0aWMpIGsgPSAwO1xuXG4gICAgICAgICAgICBjLm1vdmVUbyhib2R5QS5wb3NpdGlvbi54LCBib2R5QS5wb3NpdGlvbi55KTtcbiAgICAgICAgICAgIGMubGluZVRvKGJvZHlBLnBvc2l0aW9uLnggKyBjb2xsaXNpb24ucGVuZXRyYXRpb24ueCAqIGssIGJvZHlBLnBvc2l0aW9uLnkgKyBjb2xsaXNpb24ucGVuZXRyYXRpb24ueSAqIGspO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKG9wdGlvbnMud2lyZWZyYW1lcykge1xuICAgICAgICAgICAgYy5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjUpJztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGMuc3Ryb2tlU3R5bGUgPSAnb3JhbmdlJztcbiAgICAgICAgfVxuICAgICAgICBjLnN0cm9rZSgpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBEZXNjcmlwdGlvblxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBpbnNwZWN0b3JcbiAgICAgKiBAcGFyYW0ge2luc3BlY3Rvcn0gaW5zcGVjdG9yXG4gICAgICogQHBhcmFtIHtSZW5kZXJpbmdDb250ZXh0fSBjb250ZXh0XG4gICAgICovXG4gICAgUmVuZGVyLmluc3BlY3RvciA9IGZ1bmN0aW9uKGluc3BlY3RvciwgY29udGV4dCkge1xuICAgICAgICB2YXIgZW5naW5lID0gaW5zcGVjdG9yLmVuZ2luZSxcbiAgICAgICAgICAgIHNlbGVjdGVkID0gaW5zcGVjdG9yLnNlbGVjdGVkLFxuICAgICAgICAgICAgcmVuZGVyID0gaW5zcGVjdG9yLnJlbmRlcixcbiAgICAgICAgICAgIG9wdGlvbnMgPSByZW5kZXIub3B0aW9ucyxcbiAgICAgICAgICAgIGJvdW5kcztcblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpIHtcbiAgICAgICAgICAgIHZhciBib3VuZHNXaWR0aCA9IHJlbmRlci5ib3VuZHMubWF4LnggLSByZW5kZXIuYm91bmRzLm1pbi54LFxuICAgICAgICAgICAgICAgIGJvdW5kc0hlaWdodCA9IHJlbmRlci5ib3VuZHMubWF4LnkgLSByZW5kZXIuYm91bmRzLm1pbi55LFxuICAgICAgICAgICAgICAgIGJvdW5kc1NjYWxlWCA9IGJvdW5kc1dpZHRoIC8gcmVuZGVyLm9wdGlvbnMud2lkdGgsXG4gICAgICAgICAgICAgICAgYm91bmRzU2NhbGVZID0gYm91bmRzSGVpZ2h0IC8gcmVuZGVyLm9wdGlvbnMuaGVpZ2h0O1xuXG4gICAgICAgICAgICBjb250ZXh0LnNjYWxlKDEgLyBib3VuZHNTY2FsZVgsIDEgLyBib3VuZHNTY2FsZVkpO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLXJlbmRlci5ib3VuZHMubWluLngsIC1yZW5kZXIuYm91bmRzLm1pbi55KTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgc2VsZWN0ZWQubGVuZ3RoOyBpKyspIHtcbiAgICAgICAgICAgIHZhciBpdGVtID0gc2VsZWN0ZWRbaV0uZGF0YTtcblxuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoMC41LCAwLjUpO1xuICAgICAgICAgICAgY29udGV4dC5saW5lV2lkdGggPSAxO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2VTdHlsZSA9ICdyZ2JhKDI1NSwxNjUsMCwwLjkpJztcbiAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goWzEsMl0pO1xuXG4gICAgICAgICAgICBzd2l0Y2ggKGl0ZW0udHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdib2R5JzpcblxuICAgICAgICAgICAgICAgIC8vIHJlbmRlciBib2R5IHNlbGVjdGlvbnNcbiAgICAgICAgICAgICAgICBib3VuZHMgPSBpdGVtLmJvdW5kcztcbiAgICAgICAgICAgICAgICBjb250ZXh0LmJlZ2luUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQucmVjdChNYXRoLmZsb29yKGJvdW5kcy5taW4ueCAtIDMpLCBNYXRoLmZsb29yKGJvdW5kcy5taW4ueSAtIDMpLFxuICAgICAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCArIDYpLCBNYXRoLmZsb29yKGJvdW5kcy5tYXgueSAtIGJvdW5kcy5taW4ueSArIDYpKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuc3Ryb2tlKCk7XG5cbiAgICAgICAgICAgICAgICBicmVhaztcblxuICAgICAgICAgICAgY2FzZSAnY29uc3RyYWludCc6XG5cbiAgICAgICAgICAgICAgICAvLyByZW5kZXIgY29uc3RyYWludCBzZWxlY3Rpb25zXG4gICAgICAgICAgICAgICAgdmFyIHBvaW50ID0gaXRlbS5wb2ludEE7XG4gICAgICAgICAgICAgICAgaWYgKGl0ZW0uYm9keUEpXG4gICAgICAgICAgICAgICAgICAgIHBvaW50ID0gaXRlbS5wb2ludEI7XG4gICAgICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgICAgICBjb250ZXh0LmFyYyhwb2ludC54LCBwb2ludC55LCAxMCwgMCwgMiAqIE1hdGguUEkpO1xuICAgICAgICAgICAgICAgIGNvbnRleHQuY2xvc2VQYXRoKCk7XG4gICAgICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcblxuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGNvbnRleHQuc2V0TGluZURhc2goW10pO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLTAuNSwgLTAuNSk7XG4gICAgICAgIH1cblxuICAgICAgICAvLyByZW5kZXIgc2VsZWN0aW9uIHJlZ2lvblxuICAgICAgICBpZiAoaW5zcGVjdG9yLnNlbGVjdFN0YXJ0ICE9PSBudWxsKSB7XG4gICAgICAgICAgICBjb250ZXh0LnRyYW5zbGF0ZSgwLjUsIDAuNSk7XG4gICAgICAgICAgICBjb250ZXh0LmxpbmVXaWR0aCA9IDE7XG4gICAgICAgICAgICBjb250ZXh0LnN0cm9rZVN0eWxlID0gJ3JnYmEoMjU1LDE2NSwwLDAuNiknO1xuICAgICAgICAgICAgY29udGV4dC5maWxsU3R5bGUgPSAncmdiYSgyNTUsMTY1LDAsMC4xKSc7XG4gICAgICAgICAgICBib3VuZHMgPSBpbnNwZWN0b3Iuc2VsZWN0Qm91bmRzO1xuICAgICAgICAgICAgY29udGV4dC5iZWdpblBhdGgoKTtcbiAgICAgICAgICAgIGNvbnRleHQucmVjdChNYXRoLmZsb29yKGJvdW5kcy5taW4ueCksIE1hdGguZmxvb3IoYm91bmRzLm1pbi55KSxcbiAgICAgICAgICAgICAgICBNYXRoLmZsb29yKGJvdW5kcy5tYXgueCAtIGJvdW5kcy5taW4ueCksIE1hdGguZmxvb3IoYm91bmRzLm1heC55IC0gYm91bmRzLm1pbi55KSk7XG4gICAgICAgICAgICBjb250ZXh0LmNsb3NlUGF0aCgpO1xuICAgICAgICAgICAgY29udGV4dC5zdHJva2UoKTtcbiAgICAgICAgICAgIGNvbnRleHQuZmlsbCgpO1xuICAgICAgICAgICAgY29udGV4dC50cmFuc2xhdGUoLTAuNSwgLTAuNSk7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAob3B0aW9ucy5oYXNCb3VuZHMpXG4gICAgICAgICAgICBjb250ZXh0LnNldFRyYW5zZm9ybSgxLCAwLCAwLCAxLCAwLCAwKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogVXBkYXRlcyByZW5kZXIgdGltaW5nLlxuICAgICAqIEBtZXRob2QgX3VwZGF0ZVRpbWluZ1xuICAgICAqIEBwcml2YXRlXG4gICAgICogQHBhcmFtIHtyZW5kZXJ9IHJlbmRlclxuICAgICAqIEBwYXJhbSB7bnVtYmVyfSB0aW1lXG4gICAgICovXG4gICAgdmFyIF91cGRhdGVUaW1pbmcgPSBmdW5jdGlvbihyZW5kZXIsIHRpbWUpIHtcbiAgICAgICAgdmFyIGVuZ2luZSA9IHJlbmRlci5lbmdpbmUsXG4gICAgICAgICAgICB0aW1pbmcgPSByZW5kZXIudGltaW5nLFxuICAgICAgICAgICAgaGlzdG9yeVNpemUgPSB0aW1pbmcuaGlzdG9yeVNpemUsXG4gICAgICAgICAgICB0aW1lc3RhbXAgPSBlbmdpbmUudGltaW5nLnRpbWVzdGFtcDtcblxuICAgICAgICB0aW1pbmcuZGVsdGEgPSB0aW1lIC0gdGltaW5nLmxhc3RUaW1lIHx8IFJlbmRlci5fZ29vZERlbHRhO1xuICAgICAgICB0aW1pbmcubGFzdFRpbWUgPSB0aW1lO1xuXG4gICAgICAgIHRpbWluZy50aW1lc3RhbXBFbGFwc2VkID0gdGltZXN0YW1wIC0gdGltaW5nLmxhc3RUaW1lc3RhbXAgfHwgMDtcbiAgICAgICAgdGltaW5nLmxhc3RUaW1lc3RhbXAgPSB0aW1lc3RhbXA7XG5cbiAgICAgICAgdGltaW5nLmRlbHRhSGlzdG9yeS51bnNoaWZ0KHRpbWluZy5kZWx0YSk7XG4gICAgICAgIHRpbWluZy5kZWx0YUhpc3RvcnkubGVuZ3RoID0gTWF0aC5taW4odGltaW5nLmRlbHRhSGlzdG9yeS5sZW5ndGgsIGhpc3RvcnlTaXplKTtcblxuICAgICAgICB0aW1pbmcuZW5naW5lRGVsdGFIaXN0b3J5LnVuc2hpZnQoZW5naW5lLnRpbWluZy5sYXN0RGVsdGEpO1xuICAgICAgICB0aW1pbmcuZW5naW5lRGVsdGFIaXN0b3J5Lmxlbmd0aCA9IE1hdGgubWluKHRpbWluZy5lbmdpbmVEZWx0YUhpc3RvcnkubGVuZ3RoLCBoaXN0b3J5U2l6ZSk7XG5cbiAgICAgICAgdGltaW5nLnRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5LnVuc2hpZnQodGltaW5nLnRpbWVzdGFtcEVsYXBzZWQpO1xuICAgICAgICB0aW1pbmcudGltZXN0YW1wRWxhcHNlZEhpc3RvcnkubGVuZ3RoID0gTWF0aC5taW4odGltaW5nLnRpbWVzdGFtcEVsYXBzZWRIaXN0b3J5Lmxlbmd0aCwgaGlzdG9yeVNpemUpO1xuXG4gICAgICAgIHRpbWluZy5lbmdpbmVVcGRhdGVzSGlzdG9yeS51bnNoaWZ0KGVuZ2luZS50aW1pbmcubGFzdFVwZGF0ZXNQZXJGcmFtZSk7XG4gICAgICAgIHRpbWluZy5lbmdpbmVVcGRhdGVzSGlzdG9yeS5sZW5ndGggPSBNYXRoLm1pbih0aW1pbmcuZW5naW5lVXBkYXRlc0hpc3RvcnkubGVuZ3RoLCBoaXN0b3J5U2l6ZSk7XG5cbiAgICAgICAgdGltaW5nLmVuZ2luZUVsYXBzZWRIaXN0b3J5LnVuc2hpZnQoZW5naW5lLnRpbWluZy5sYXN0RWxhcHNlZCk7XG4gICAgICAgIHRpbWluZy5lbmdpbmVFbGFwc2VkSGlzdG9yeS5sZW5ndGggPSBNYXRoLm1pbih0aW1pbmcuZW5naW5lRWxhcHNlZEhpc3RvcnkubGVuZ3RoLCBoaXN0b3J5U2l6ZSk7XG5cbiAgICAgICAgdGltaW5nLmVsYXBzZWRIaXN0b3J5LnVuc2hpZnQodGltaW5nLmxhc3RFbGFwc2VkKTtcbiAgICAgICAgdGltaW5nLmVsYXBzZWRIaXN0b3J5Lmxlbmd0aCA9IE1hdGgubWluKHRpbWluZy5lbGFwc2VkSGlzdG9yeS5sZW5ndGgsIGhpc3RvcnlTaXplKTtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogUmV0dXJucyB0aGUgbWVhbiB2YWx1ZSBvZiB0aGUgZ2l2ZW4gbnVtYmVycy5cbiAgICAgKiBAbWV0aG9kIF9tZWFuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge051bWJlcltdfSB2YWx1ZXNcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHRoZSBtZWFuIG9mIGdpdmVuIHZhbHVlc1xuICAgICAqL1xuICAgIHZhciBfbWVhbiA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gMDtcbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXMubGVuZ3RoOyBpICs9IDEpIHtcbiAgICAgICAgICAgIHJlc3VsdCArPSB2YWx1ZXNbaV07XG4gICAgICAgIH1cbiAgICAgICAgcmV0dXJuIChyZXN1bHQgLyB2YWx1ZXMubGVuZ3RoKSB8fCAwO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBAbWV0aG9kIF9jcmVhdGVDYW52YXNcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7fSB3aWR0aFxuICAgICAqIEBwYXJhbSB7fSBoZWlnaHRcbiAgICAgKiBAcmV0dXJuIGNhbnZhc1xuICAgICAqL1xuICAgIHZhciBfY3JlYXRlQ2FudmFzID0gZnVuY3Rpb24od2lkdGgsIGhlaWdodCkge1xuICAgICAgICB2YXIgY2FudmFzID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnY2FudmFzJyk7XG4gICAgICAgIGNhbnZhcy53aWR0aCA9IHdpZHRoO1xuICAgICAgICBjYW52YXMuaGVpZ2h0ID0gaGVpZ2h0O1xuICAgICAgICBjYW52YXMub25jb250ZXh0bWVudSA9IGZ1bmN0aW9uKCkgeyByZXR1cm4gZmFsc2U7IH07XG4gICAgICAgIGNhbnZhcy5vbnNlbGVjdHN0YXJ0ID0gZnVuY3Rpb24oKSB7IHJldHVybiBmYWxzZTsgfTtcbiAgICAgICAgcmV0dXJuIGNhbnZhcztcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogR2V0cyB0aGUgcGl4ZWwgcmF0aW8gb2YgdGhlIGNhbnZhcy5cbiAgICAgKiBAbWV0aG9kIF9nZXRQaXhlbFJhdGlvXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge0hUTUxFbGVtZW50fSBjYW52YXNcbiAgICAgKiBAcmV0dXJuIHtOdW1iZXJ9IHBpeGVsIHJhdGlvXG4gICAgICovXG4gICAgdmFyIF9nZXRQaXhlbFJhdGlvID0gZnVuY3Rpb24oY2FudmFzKSB7XG4gICAgICAgIHZhciBjb250ZXh0ID0gY2FudmFzLmdldENvbnRleHQoJzJkJyksXG4gICAgICAgICAgICBkZXZpY2VQaXhlbFJhdGlvID0gd2luZG93LmRldmljZVBpeGVsUmF0aW8gfHwgMSxcbiAgICAgICAgICAgIGJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gPSBjb250ZXh0LndlYmtpdEJhY2tpbmdTdG9yZVBpeGVsUmF0aW8gfHwgY29udGV4dC5tb3pCYWNraW5nU3RvcmVQaXhlbFJhdGlvXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHx8IGNvbnRleHQubXNCYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IGNvbnRleHQub0JhY2tpbmdTdG9yZVBpeGVsUmF0aW9cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfHwgY29udGV4dC5iYWNraW5nU3RvcmVQaXhlbFJhdGlvIHx8IDE7XG5cbiAgICAgICAgcmV0dXJuIGRldmljZVBpeGVsUmF0aW8gLyBiYWNraW5nU3RvcmVQaXhlbFJhdGlvO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBHZXRzIHRoZSByZXF1ZXN0ZWQgdGV4dHVyZSAoYW4gSW1hZ2UpIHZpYSBpdHMgcGF0aFxuICAgICAqIEBtZXRob2QgX2dldFRleHR1cmVcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7cmVuZGVyfSByZW5kZXJcbiAgICAgKiBAcGFyYW0ge3N0cmluZ30gaW1hZ2VQYXRoXG4gICAgICogQHJldHVybiB7SW1hZ2V9IHRleHR1cmVcbiAgICAgKi9cbiAgICB2YXIgX2dldFRleHR1cmUgPSBmdW5jdGlvbihyZW5kZXIsIGltYWdlUGF0aCkge1xuICAgICAgICB2YXIgaW1hZ2UgPSByZW5kZXIudGV4dHVyZXNbaW1hZ2VQYXRoXTtcblxuICAgICAgICBpZiAoaW1hZ2UpXG4gICAgICAgICAgICByZXR1cm4gaW1hZ2U7XG5cbiAgICAgICAgaW1hZ2UgPSByZW5kZXIudGV4dHVyZXNbaW1hZ2VQYXRoXSA9IG5ldyBJbWFnZSgpO1xuICAgICAgICBpbWFnZS5zcmMgPSBpbWFnZVBhdGg7XG5cbiAgICAgICAgcmV0dXJuIGltYWdlO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBBcHBsaWVzIHRoZSBiYWNrZ3JvdW5kIHRvIHRoZSBjYW52YXMgdXNpbmcgQ1NTLlxuICAgICAqIEBtZXRob2QgYXBwbHlCYWNrZ3JvdW5kXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcGFyYW0ge3JlbmRlcn0gcmVuZGVyXG4gICAgICogQHBhcmFtIHtzdHJpbmd9IGJhY2tncm91bmRcbiAgICAgKi9cbiAgICB2YXIgX2FwcGx5QmFja2dyb3VuZCA9IGZ1bmN0aW9uKHJlbmRlciwgYmFja2dyb3VuZCkge1xuICAgICAgICB2YXIgY3NzQmFja2dyb3VuZCA9IGJhY2tncm91bmQ7XG5cbiAgICAgICAgaWYgKC8oanBnfGdpZnxwbmcpJC8udGVzdChiYWNrZ3JvdW5kKSlcbiAgICAgICAgICAgIGNzc0JhY2tncm91bmQgPSAndXJsKCcgKyBiYWNrZ3JvdW5kICsgJyknO1xuXG4gICAgICAgIHJlbmRlci5jYW52YXMuc3R5bGUuYmFja2dyb3VuZCA9IGNzc0JhY2tncm91bmQ7XG4gICAgICAgIHJlbmRlci5jYW52YXMuc3R5bGUuYmFja2dyb3VuZFNpemUgPSBcImNvbnRhaW5cIjtcbiAgICAgICAgcmVuZGVyLmN1cnJlbnRCYWNrZ3JvdW5kID0gYmFja2dyb3VuZDtcbiAgICB9O1xuXG4gICAgLypcbiAgICAqXG4gICAgKiAgRXZlbnRzIERvY3VtZW50YXRpb25cbiAgICAqXG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYmVmb3JlIHJlbmRlcmluZ1xuICAgICpcbiAgICAqIEBldmVudCBiZWZvcmVSZW5kZXJcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGFmdGVyIHJlbmRlcmluZ1xuICAgICpcbiAgICAqIEBldmVudCBhZnRlclJlbmRlclxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBiYWNrLXJlZmVyZW5jZSB0byB0aGUgYE1hdHRlci5SZW5kZXJgIG1vZHVsZS5cbiAgICAgKlxuICAgICAqIEBkZXByZWNhdGVkXG4gICAgICogQHByb3BlcnR5IGNvbnRyb2xsZXJcbiAgICAgKiBAdHlwZSByZW5kZXJcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBgTWF0dGVyLkVuZ2luZWAgaW5zdGFuY2UgdG8gYmUgdXNlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmdpbmVcbiAgICAgKiBAdHlwZSBlbmdpbmVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgcmVmZXJlbmNlIHRvIHRoZSBlbGVtZW50IHdoZXJlIHRoZSBjYW52YXMgaXMgdG8gYmUgaW5zZXJ0ZWQgKGlmIGByZW5kZXIuY2FudmFzYCBoYXMgbm90IGJlZW4gc3BlY2lmaWVkKVxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGVsZW1lbnRcbiAgICAgKiBAdHlwZSBIVE1MRWxlbWVudFxuICAgICAqIEBkZWZhdWx0IG51bGxcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBjYW52YXMgZWxlbWVudCB0byByZW5kZXIgdG8uIElmIG5vdCBzcGVjaWZpZWQsIG9uZSB3aWxsIGJlIGNyZWF0ZWQgaWYgYHJlbmRlci5lbGVtZW50YCBoYXMgYmVlbiBzcGVjaWZpZWQuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgY2FudmFzXG4gICAgICogQHR5cGUgSFRNTENhbnZhc0VsZW1lbnRcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGBCb3VuZHNgIG9iamVjdCB0aGF0IHNwZWNpZmllcyB0aGUgZHJhd2luZyB2aWV3IHJlZ2lvbi5cbiAgICAgKiBSZW5kZXJpbmcgd2lsbCBiZSBhdXRvbWF0aWNhbGx5IHRyYW5zZm9ybWVkIGFuZCBzY2FsZWQgdG8gZml0IHdpdGhpbiB0aGUgY2FudmFzIHNpemUgKGByZW5kZXIub3B0aW9ucy53aWR0aGAgYW5kIGByZW5kZXIub3B0aW9ucy5oZWlnaHRgKS5cbiAgICAgKiBUaGlzIGFsbG93cyBmb3IgY3JlYXRpbmcgdmlld3MgdGhhdCBjYW4gcGFuIG9yIHpvb20gYXJvdW5kIHRoZSBzY2VuZS5cbiAgICAgKiBZb3UgbXVzdCBhbHNvIHNldCBgcmVuZGVyLm9wdGlvbnMuaGFzQm91bmRzYCB0byBgdHJ1ZWAgdG8gZW5hYmxlIGJvdW5kZWQgcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGJvdW5kc1xuICAgICAqIEB0eXBlIGJvdW5kc1xuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIDJkIHJlbmRlcmluZyBjb250ZXh0IGZyb20gdGhlIGByZW5kZXIuY2FudmFzYCBlbGVtZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGNvbnRleHRcbiAgICAgKiBAdHlwZSBDYW52YXNSZW5kZXJpbmdDb250ZXh0MkRcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBzcHJpdGUgdGV4dHVyZSBjYWNoZS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSB0ZXh0dXJlc1xuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgbW91c2UgdG8gcmVuZGVyIGlmIGByZW5kZXIub3B0aW9ucy5zaG93TW91c2VQb3NpdGlvbmAgaXMgZW5hYmxlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBtb3VzZVxuICAgICAqIEB0eXBlIG1vdXNlXG4gICAgICogQGRlZmF1bHQgbnVsbFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGNvbmZpZ3VyYXRpb24gb3B0aW9ucyBvZiB0aGUgcmVuZGVyZXIuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9uc1xuICAgICAqIEB0eXBlIHt9XG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IHdpZHRoIGluIHBpeGVscyBvZiB0aGUgYHJlbmRlci5jYW52YXNgIHRvIGJlIGNyZWF0ZWQuXG4gICAgICogU2VlIGFsc28gdGhlIGBvcHRpb25zLnBpeGVsUmF0aW9gIHByb3BlcnR5IHRvIGNoYW5nZSByZW5kZXIgcXVhbGl0eS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLndpZHRoXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgODAwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGFyZ2V0IGhlaWdodCBpbiBwaXhlbHMgb2YgdGhlIGByZW5kZXIuY2FudmFzYCB0byBiZSBjcmVhdGVkLlxuICAgICAqIFNlZSBhbHNvIHRoZSBgb3B0aW9ucy5waXhlbFJhdGlvYCBwcm9wZXJ0eSB0byBjaGFuZ2UgcmVuZGVyIHF1YWxpdHkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5oZWlnaHRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCA2MDBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBbcGl4ZWwgcmF0aW9dKGh0dHBzOi8vZGV2ZWxvcGVyLm1vemlsbGEub3JnL2VuLVVTL2RvY3MvV2ViL0FQSS9XaW5kb3cvZGV2aWNlUGl4ZWxSYXRpbykgdG8gdXNlIHdoZW4gcmVuZGVyaW5nLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMucGl4ZWxSYXRpb1xuICAgICAqIEB0eXBlIG51bWJlclxuICAgICAqIEBkZWZhdWx0IDFcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgQ1NTIGJhY2tncm91bmQgY29sb3Igc3RyaW5nIHRvIHVzZSB3aGVuIGByZW5kZXIub3B0aW9ucy53aXJlZnJhbWVzYCBpcyBkaXNhYmxlZC5cbiAgICAgKiBUaGlzIG1heSBiZSBhbHNvIHNldCB0byBgJ3RyYW5zcGFyZW50J2Agb3IgZXF1aXZhbGVudC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLmJhY2tncm91bmRcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCAnIzE0MTUxZidcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgQ1NTIGNvbG9yIHN0cmluZyB0byB1c2UgZm9yIGJhY2tncm91bmQgd2hlbiBgcmVuZGVyLm9wdGlvbnMud2lyZWZyYW1lc2AgaXMgZW5hYmxlZC5cbiAgICAgKiBUaGlzIG1heSBiZSBhbHNvIHNldCB0byBgJ3RyYW5zcGFyZW50J2Agb3IgZXF1aXZhbGVudC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLndpcmVmcmFtZUJhY2tncm91bmRcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCAnIzE0MTUxZidcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgQ1NTIGNvbG9yIHN0cmluZyB0byB1c2UgZm9yIHN0cm9rZSB3aGVuIGByZW5kZXIub3B0aW9ucy53aXJlZnJhbWVzYCBpcyBlbmFibGVkLlxuICAgICAqIFRoaXMgbWF5IGJlIGFsc28gc2V0IHRvIGAndHJhbnNwYXJlbnQnYCBvciBlcXVpdmFsZW50LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMud2lyZWZyYW1lU3Ryb2tlU3R5bGVcbiAgICAgKiBAdHlwZSBzdHJpbmdcbiAgICAgKiBAZGVmYXVsdCAnI2JiYidcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IHNwZWNpZmllcyBpZiBgcmVuZGVyLmJvdW5kc2Agc2hvdWxkIGJlIHVzZWQgd2hlbiByZW5kZXJpbmcuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5oYXNCb3VuZHNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSBhbGwgZGVidWcgaW5mb3JtYXRpb24gb3ZlcmxheXMgdG9nZXRoZXIuICBcbiAgICAgKiBUaGlzIGluY2x1ZGVzIGFuZCBoYXMgcHJpb3JpdHkgb3ZlciB0aGUgdmFsdWVzIG9mOlxuICAgICAqXG4gICAgICogLSBgcmVuZGVyLm9wdGlvbnMuc2hvd1N0YXRzYFxuICAgICAqIC0gYHJlbmRlci5vcHRpb25zLnNob3dQZXJmb3JtYW5jZWBcbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dEZWJ1Z1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBlbmdpbmUgc3RhdHMgaW5mbyBvdmVybGF5LiAgXG4gICAgICogRnJvbSBsZWZ0IHRvIHJpZ2h0LCB0aGUgdmFsdWVzIHNob3duIGFyZTpcbiAgICAgKlxuICAgICAqIC0gYm9keSBwYXJ0cyB0b3RhbFxuICAgICAqIC0gYm9keSB0b3RhbFxuICAgICAqIC0gY29uc3RyYWludHMgdG90YWxcbiAgICAgKiAtIGNvbXBvc2l0ZXMgdG90YWxcbiAgICAgKiAtIGNvbGxpc2lvbiBwYWlycyB0b3RhbFxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1N0YXRzXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgcGVyZm9ybWFuY2UgY2hhcnRzLiAgXG4gICAgICogRnJvbSBsZWZ0IHRvIHJpZ2h0LCB0aGUgdmFsdWVzIHNob3duIGFyZTpcbiAgICAgKlxuICAgICAqIC0gYXZlcmFnZSByZW5kZXIgZnJlcXVlbmN5IChlLmcuIDYwIGZwcylcbiAgICAgKiAtIGV4YWN0IGVuZ2luZSBkZWx0YSB0aW1lIHVzZWQgZm9yIGxhc3QgdXBkYXRlIChlLmcuIDE2LjY2bXMpXG4gICAgICogLSBhdmVyYWdlIHVwZGF0ZXMgcGVyIGZyYW1lIChlLmcuIDEpXG4gICAgICogLSBhdmVyYWdlIGVuZ2luZSBleGVjdXRpb24gZHVyYXRpb24gKGUuZy4gNS4wMG1zKVxuICAgICAqIC0gYXZlcmFnZSByZW5kZXIgZXhlY3V0aW9uIGR1cmF0aW9uIChlLmcuIDAuNDBtcylcbiAgICAgKiAtIGF2ZXJhZ2UgZWZmZWN0aXZlIHBsYXkgc3BlZWQgKGUuZy4gJzEuMDB4JyBpcyAncmVhbC10aW1lJylcbiAgICAgKlxuICAgICAqIEVhY2ggdmFsdWUgaXMgcmVjb3JkZWQgb3ZlciBhIGZpeGVkIHNhbXBsZSBvZiBwYXN0IGZyYW1lcyAoNjAgZnJhbWVzKS5cbiAgICAgKlxuICAgICAqIEEgY2hhcnQgc2hvd24gYmVsb3cgZWFjaCB2YWx1ZSBpbmRpY2F0ZXMgdGhlIHZhcmlhbmNlIGZyb20gdGhlIGF2ZXJhZ2Ugb3ZlciB0aGUgc2FtcGxlLlxuICAgICAqIFRoZSBtb3JlIHN0YWJsZSBvciBmaXhlZCB0aGUgdmFsdWUgaXMgdGhlIGZsYXR0ZXIgdGhlIGNoYXJ0IHdpbGwgYXBwZWFyLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1BlcmZvcm1hbmNlXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG4gICAgXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHJlbmRlcmluZyBlbnRpcmVseS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLmVuYWJsZWRcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byB0b2dnbGUgd2lyZWZyYW1lIHJlbmRlcmluZyBvdGhlcndpc2Ugc29saWQgZmlsbCByZW5kZXJpbmcgaXMgdXNlZC5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLndpcmVmcmFtZXNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHNsZWVwaW5nIGJvZGllcyBpbmRpY2F0b3JzLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1NsZWVwaW5nXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgZGVidWcgaW5mb3JtYXRpb24gb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dEZWJ1Z1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBjb2xsaXNpb24gYnJvYWRwaGFzZSBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQGRlcHJlY2F0ZWQgbm8gbG9uZ2VyIGltcGxlbWVudGVkXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0Jyb2FkcGhhc2VcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBib3VuZHMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dCb3VuZHNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSB2ZWxvY2l0eSBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1ZlbG9jaXR5XG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IGZhbHNlXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBIGZsYWcgdG8gZW5hYmxlIG9yIGRpc2FibGUgdGhlIGJvZHkgY29sbGlzaW9ucyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd0NvbGxpc2lvbnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgY29sbGlzaW9uIHJlc29sdmVyIHNlcGFyYXRpb25zIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93U2VwYXJhdGlvbnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBheGVzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93QXhlc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IHBvc2l0aW9ucyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1Bvc2l0aW9uc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IGFuZ2xlIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93QW5nbGVJbmRpY2F0b3JcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBhbmQgcGFydCBpZHMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dJZHNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSB2ZXJ0ZXggbnVtYmVycyBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd1ZlcnRleE51bWJlcnNcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0byBlbmFibGUgb3IgZGlzYWJsZSB0aGUgYm9keSBjb252ZXggaHVsbHMgZGVidWcgb3ZlcmxheS5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBvcHRpb25zLnNob3dDb252ZXhIdWxsc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBib2R5IGludGVybmFsIGVkZ2VzIGRlYnVnIG92ZXJsYXkuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgb3B0aW9ucy5zaG93SW50ZXJuYWxFZGdlc1xuICAgICAqIEB0eXBlIGJvb2xlYW5cbiAgICAgKiBAZGVmYXVsdCBmYWxzZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogQSBmbGFnIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRoZSBtb3VzZSBwb3NpdGlvbiBkZWJ1ZyBvdmVybGF5LlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IG9wdGlvbnMuc2hvd01vdXNlUG9zaXRpb25cbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgZmFsc2VcbiAgICAgKi9cblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDI3ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5SdW5uZXJgIG1vZHVsZSBpcyBhbiBvcHRpb25hbCB1dGlsaXR5IHRoYXQgcHJvdmlkZXMgYSBnYW1lIGxvb3AgZm9yIHJ1bm5pbmcgYSBgTWF0dGVyLkVuZ2luZWAgaW5zaWRlIGEgYnJvd3NlciBlbnZpcm9ubWVudC5cbiogQSBydW5uZXIgd2lsbCBjb250aW51b3VzbHkgdXBkYXRlIGEgYE1hdHRlci5FbmdpbmVgIHdoaWxzdCBzeW5jaHJvbmlzaW5nIGVuZ2luZSB1cGRhdGVzIHdpdGggdGhlIGJyb3dzZXIgZnJhbWUgcmF0ZS5cbiogVGhpcyBydW5uZXIgZmF2b3VycyBhIHNtb290aGVyIHVzZXIgZXhwZXJpZW5jZSBvdmVyIHBlcmZlY3QgdGltZSBrZWVwaW5nLlxuKiBUaGlzIHJ1bm5lciBpcyBvcHRpb25hbCBhbmQgaXMgdXNlZCBmb3IgZGV2ZWxvcG1lbnQgYW5kIGRlYnVnZ2luZyBidXQgY291bGQgYmUgdXNlZnVsIGFzIGEgc3RhcnRpbmcgcG9pbnQgZm9yIGltcGxlbWVudGluZyBzb21lIGdhbWVzIGFuZCBleHBlcmllbmNlcy5cbiogQWx0ZXJuYXRpdmVseSBzZWUgYEVuZ2luZS51cGRhdGVgIHRvIHN0ZXAgdGhlIGVuZ2luZSBkaXJlY3RseSBpbnNpZGUgeW91ciBvd24gZ2FtZSBsb29wIGltcGxlbWVudGF0aW9uIGFzIG1heSBiZSBuZWVkZWQgaW5zaWRlIG90aGVyIGVudmlyb25tZW50cy5cbipcbiogU2VlIHRoZSBpbmNsdWRlZCB1c2FnZSBbZXhhbXBsZXNdKGh0dHBzOi8vZ2l0aHViLmNvbS9saWFicnUvbWF0dGVyLWpzL3RyZWUvbWFzdGVyL2V4YW1wbGVzKS5cbipcbiogQGNsYXNzIFJ1bm5lclxuKi9cblxudmFyIFJ1bm5lciA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFJ1bm5lcjtcblxudmFyIEV2ZW50cyA9IF9fd2VicGFja19yZXF1aXJlX18oNSk7XG52YXIgRW5naW5lID0gX193ZWJwYWNrX3JlcXVpcmVfXygxNyk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcblxuKGZ1bmN0aW9uKCkge1xuXG4gICAgUnVubmVyLl9tYXhGcmFtZURlbHRhID0gMTAwMCAvIDE1O1xuICAgIFJ1bm5lci5fZnJhbWVEZWx0YUZhbGxiYWNrID0gMTAwMCAvIDYwO1xuICAgIFJ1bm5lci5fdGltZUJ1ZmZlck1hcmdpbiA9IDEuNTtcbiAgICBSdW5uZXIuX2VsYXBzZWROZXh0RXN0aW1hdGUgPSAxO1xuICAgIFJ1bm5lci5fc21vb3RoaW5nTG93ZXJCb3VuZCA9IDAuMTtcbiAgICBSdW5uZXIuX3Ntb290aGluZ1VwcGVyQm91bmQgPSAwLjk7XG5cbiAgICAvKipcbiAgICAgKiBDcmVhdGVzIGEgbmV3IFJ1bm5lci4gXG4gICAgICogU2VlIHRoZSBwcm9wZXJ0aWVzIHNlY3Rpb24gYmVsb3cgZm9yIGRldGFpbGVkIGluZm9ybWF0aW9uIG9uIHdoYXQgeW91IGNhbiBwYXNzIHZpYSB0aGUgYG9wdGlvbnNgIG9iamVjdC5cbiAgICAgKiBAbWV0aG9kIGNyZWF0ZVxuICAgICAqIEBwYXJhbSB7fSBvcHRpb25zXG4gICAgICovXG4gICAgUnVubmVyLmNyZWF0ZSA9IGZ1bmN0aW9uKG9wdGlvbnMpIHtcbiAgICAgICAgdmFyIGRlZmF1bHRzID0ge1xuICAgICAgICAgICAgZGVsdGE6IDEwMDAgLyA2MCxcbiAgICAgICAgICAgIGZyYW1lRGVsdGE6IG51bGwsXG4gICAgICAgICAgICBmcmFtZURlbHRhU21vb3RoaW5nOiB0cnVlLFxuICAgICAgICAgICAgZnJhbWVEZWx0YVNuYXBwaW5nOiB0cnVlLFxuICAgICAgICAgICAgZnJhbWVEZWx0YUhpc3Rvcnk6IFtdLFxuICAgICAgICAgICAgZnJhbWVEZWx0YUhpc3RvcnlTaXplOiAxMDAsXG4gICAgICAgICAgICBmcmFtZVJlcXVlc3RJZDogbnVsbCxcbiAgICAgICAgICAgIHRpbWVCdWZmZXI6IDAsXG4gICAgICAgICAgICB0aW1lTGFzdFRpY2s6IG51bGwsXG4gICAgICAgICAgICBtYXhVcGRhdGVzOiBudWxsLFxuICAgICAgICAgICAgbWF4RnJhbWVUaW1lOiAxMDAwIC8gMzAsXG4gICAgICAgICAgICBsYXN0VXBkYXRlc0RlZmVycmVkOiAwLFxuICAgICAgICAgICAgZW5hYmxlZDogdHJ1ZVxuICAgICAgICB9O1xuXG4gICAgICAgIHZhciBydW5uZXIgPSBDb21tb24uZXh0ZW5kKGRlZmF1bHRzLCBvcHRpb25zKTtcblxuICAgICAgICAvLyBmb3IgdGVtcG9yYXJ5IGJhY2sgY29tcGF0aWJpbGl0eSBvbmx5XG4gICAgICAgIHJ1bm5lci5mcHMgPSAwO1xuXG4gICAgICAgIHJldHVybiBydW5uZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFJ1bnMgYSBgTWF0dGVyLkVuZ2luZWAgd2hpbHN0IHN5bmNocm9uaXNpbmcgZW5naW5lIHVwZGF0ZXMgd2l0aCB0aGUgYnJvd3NlciBmcmFtZSByYXRlLiBcbiAgICAgKiBTZWUgbW9kdWxlIGFuZCBwcm9wZXJ0aWVzIGRlc2NyaXB0aW9ucyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGlzIHJ1bm5lci5cbiAgICAgKiBBbHRlcm5hdGl2ZWx5IHNlZSBgRW5naW5lLnVwZGF0ZWAgdG8gc3RlcCB0aGUgZW5naW5lIGRpcmVjdGx5IGluc2lkZSB5b3VyIG93biBnYW1lIGxvb3AgaW1wbGVtZW50YXRpb24uXG4gICAgICogQG1ldGhvZCBydW5cbiAgICAgKiBAcGFyYW0ge3J1bm5lcn0gcnVubmVyXG4gICAgICogQHBhcmFtIHtlbmdpbmV9IFtlbmdpbmVdXG4gICAgICogQHJldHVybiB7cnVubmVyfSBydW5uZXJcbiAgICAgKi9cbiAgICBSdW5uZXIucnVuID0gZnVuY3Rpb24ocnVubmVyLCBlbmdpbmUpIHtcbiAgICAgICAgLy8gaW5pdGlhbCB0aW1lIGJ1ZmZlciBmb3IgdGhlIGZpcnN0IGZyYW1lXG4gICAgICAgIHJ1bm5lci50aW1lQnVmZmVyID0gUnVubmVyLl9mcmFtZURlbHRhRmFsbGJhY2s7XG5cbiAgICAgICAgKGZ1bmN0aW9uIG9uRnJhbWUodGltZSl7XG4gICAgICAgICAgICBydW5uZXIuZnJhbWVSZXF1ZXN0SWQgPSBSdW5uZXIuX29uTmV4dEZyYW1lKHJ1bm5lciwgb25GcmFtZSk7XG5cbiAgICAgICAgICAgIGlmICh0aW1lICYmIHJ1bm5lci5lbmFibGVkKSB7XG4gICAgICAgICAgICAgICAgUnVubmVyLnRpY2socnVubmVyLCBlbmdpbmUsIHRpbWUpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9KSgpO1xuXG4gICAgICAgIHJldHVybiBydW5uZXI7XG4gICAgfTtcblxuICAgIC8qKlxuICAgICAqIFBlcmZvcm1zIGEgc2luZ2xlIHJ1bm5lciB0aWNrIGFzIHVzZWQgaW5zaWRlIGBSdW5uZXIucnVuYC5cbiAgICAgKiBTZWUgbW9kdWxlIGFuZCBwcm9wZXJ0aWVzIGRlc2NyaXB0aW9ucyBmb3IgbW9yZSBpbmZvcm1hdGlvbiBvbiB0aGlzIHJ1bm5lci5cbiAgICAgKiBBbHRlcm5hdGl2ZWx5IHNlZSBgRW5naW5lLnVwZGF0ZWAgdG8gc3RlcCB0aGUgZW5naW5lIGRpcmVjdGx5IGluc2lkZSB5b3VyIG93biBnYW1lIGxvb3AgaW1wbGVtZW50YXRpb24uXG4gICAgICogQG1ldGhvZCB0aWNrXG4gICAgICogQHBhcmFtIHtydW5uZXJ9IHJ1bm5lclxuICAgICAqIEBwYXJhbSB7ZW5naW5lfSBlbmdpbmVcbiAgICAgKiBAcGFyYW0ge251bWJlcn0gdGltZVxuICAgICAqL1xuICAgIFJ1bm5lci50aWNrID0gZnVuY3Rpb24ocnVubmVyLCBlbmdpbmUsIHRpbWUpIHtcbiAgICAgICAgdmFyIHRpY2tTdGFydFRpbWUgPSBDb21tb24ubm93KCksXG4gICAgICAgICAgICBlbmdpbmVEZWx0YSA9IHJ1bm5lci5kZWx0YSxcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50ID0gMDtcblxuICAgICAgICAvLyBmaW5kIGZyYW1lIGRlbHRhIHRpbWUgc2luY2UgbGFzdCBjYWxsXG4gICAgICAgIHZhciBmcmFtZURlbHRhID0gdGltZSAtIHJ1bm5lci50aW1lTGFzdFRpY2s7XG5cbiAgICAgICAgLy8gZmFsbGJhY2sgZm9yIHVudXNhYmxlIGZyYW1lIGRlbHRhIHZhbHVlcyAoZS5nLiAwLCBOYU4sIG9uIGZpcnN0IGZyYW1lIG9yIGxvbmcgcGF1c2VzKVxuICAgICAgICBpZiAoIWZyYW1lRGVsdGEgfHwgIXJ1bm5lci50aW1lTGFzdFRpY2sgfHwgZnJhbWVEZWx0YSA+IE1hdGgubWF4KFJ1bm5lci5fbWF4RnJhbWVEZWx0YSwgcnVubmVyLm1heEZyYW1lVGltZSkpIHtcbiAgICAgICAgICAgIC8vIHJldXNlIGxhc3QgYWNjZXB0ZWQgZnJhbWUgZGVsdGEgZWxzZSBmYWxsYmFja1xuICAgICAgICAgICAgZnJhbWVEZWx0YSA9IHJ1bm5lci5mcmFtZURlbHRhIHx8IFJ1bm5lci5fZnJhbWVEZWx0YUZhbGxiYWNrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bm5lci5mcmFtZURlbHRhU21vb3RoaW5nKSB7XG4gICAgICAgICAgICAvLyByZWNvcmQgZnJhbWUgZGVsdGEgb3ZlciBhIG51bWJlciBvZiBmcmFtZXNcbiAgICAgICAgICAgIHJ1bm5lci5mcmFtZURlbHRhSGlzdG9yeS5wdXNoKGZyYW1lRGVsdGEpO1xuICAgICAgICAgICAgcnVubmVyLmZyYW1lRGVsdGFIaXN0b3J5ID0gcnVubmVyLmZyYW1lRGVsdGFIaXN0b3J5LnNsaWNlKC1ydW5uZXIuZnJhbWVEZWx0YUhpc3RvcnlTaXplKTtcblxuICAgICAgICAgICAgLy8gc29ydCBmcmFtZSBkZWx0YSBoaXN0b3J5XG4gICAgICAgICAgICB2YXIgZGVsdGFIaXN0b3J5U29ydGVkID0gcnVubmVyLmZyYW1lRGVsdGFIaXN0b3J5LnNsaWNlKDApLnNvcnQoKTtcblxuICAgICAgICAgICAgLy8gc2FtcGxlIGEgY2VudHJhbCB3aW5kb3cgdG8gbGltaXQgb3V0bGllcnNcbiAgICAgICAgICAgIHZhciBkZWx0YUhpc3RvcnlXaW5kb3cgPSBydW5uZXIuZnJhbWVEZWx0YUhpc3Rvcnkuc2xpY2UoXG4gICAgICAgICAgICAgICAgZGVsdGFIaXN0b3J5U29ydGVkLmxlbmd0aCAqIFJ1bm5lci5fc21vb3RoaW5nTG93ZXJCb3VuZCwgXG4gICAgICAgICAgICAgICAgZGVsdGFIaXN0b3J5U29ydGVkLmxlbmd0aCAqIFJ1bm5lci5fc21vb3RoaW5nVXBwZXJCb3VuZFxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgLy8gdGFrZSB0aGUgbWVhbiBvZiB0aGUgY2VudHJhbCB3aW5kb3dcbiAgICAgICAgICAgIHZhciBmcmFtZURlbHRhU21vb3RoZWQgPSBfbWVhbihkZWx0YUhpc3RvcnlXaW5kb3cpO1xuICAgICAgICAgICAgZnJhbWVEZWx0YSA9IGZyYW1lRGVsdGFTbW9vdGhlZCB8fCBmcmFtZURlbHRhO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKHJ1bm5lci5mcmFtZURlbHRhU25hcHBpbmcpIHtcbiAgICAgICAgICAgIC8vIHNuYXAgZnJhbWUgZGVsdGEgdG8gdGhlIG5lYXJlc3QgMSBIelxuICAgICAgICAgICAgZnJhbWVEZWx0YSA9IDEwMDAgLyBNYXRoLnJvdW5kKDEwMDAgLyBmcmFtZURlbHRhKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIHVwZGF0ZSBydW5uZXIgdmFsdWVzIGZvciBuZXh0IGNhbGxcbiAgICAgICAgcnVubmVyLmZyYW1lRGVsdGEgPSBmcmFtZURlbHRhO1xuICAgICAgICBydW5uZXIudGltZUxhc3RUaWNrID0gdGltZTtcblxuICAgICAgICAvLyBhY2N1bXVsYXRlIGVsYXBzZWQgdGltZVxuICAgICAgICBydW5uZXIudGltZUJ1ZmZlciArPSBydW5uZXIuZnJhbWVEZWx0YTtcblxuICAgICAgICAvLyBsaW1pdCB0aW1lIGJ1ZmZlciBzaXplIHRvIGEgc2luZ2xlIGZyYW1lIG9mIHVwZGF0ZXNcbiAgICAgICAgcnVubmVyLnRpbWVCdWZmZXIgPSBDb21tb24uY2xhbXAoXG4gICAgICAgICAgICBydW5uZXIudGltZUJ1ZmZlciwgMCwgcnVubmVyLmZyYW1lRGVsdGEgKyBlbmdpbmVEZWx0YSAqIFJ1bm5lci5fdGltZUJ1ZmZlck1hcmdpblxuICAgICAgICApO1xuXG4gICAgICAgIC8vIHJlc2V0IGNvdW50IG9mIG92ZXIgYnVkZ2V0IHVwZGF0ZXNcbiAgICAgICAgcnVubmVyLmxhc3RVcGRhdGVzRGVmZXJyZWQgPSAwO1xuXG4gICAgICAgIC8vIGdldCBtYXggdXBkYXRlcyBwZXIgZnJhbWVcbiAgICAgICAgdmFyIG1heFVwZGF0ZXMgPSBydW5uZXIubWF4VXBkYXRlcyB8fCBNYXRoLmNlaWwocnVubmVyLm1heEZyYW1lVGltZSAvIGVuZ2luZURlbHRhKTtcblxuICAgICAgICAvLyBjcmVhdGUgZXZlbnQgb2JqZWN0XG4gICAgICAgIHZhciBldmVudCA9IHtcbiAgICAgICAgICAgIHRpbWVzdGFtcDogZW5naW5lLnRpbWluZy50aW1lc3RhbXBcbiAgICAgICAgfTtcblxuICAgICAgICAvLyB0aWNrIGV2ZW50cyBiZWZvcmUgdXBkYXRlXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2JlZm9yZVRpY2snLCBldmVudCk7XG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ3RpY2snLCBldmVudCk7XG5cbiAgICAgICAgdmFyIHVwZGF0ZVN0YXJ0VGltZSA9IENvbW1vbi5ub3coKTtcblxuICAgICAgICAvLyBzaW11bGF0ZSB0aW1lIGVsYXBzZWQgYmV0d2VlbiBjYWxsc1xuICAgICAgICB3aGlsZSAoZW5naW5lRGVsdGEgPiAwICYmIHJ1bm5lci50aW1lQnVmZmVyID49IGVuZ2luZURlbHRhICogUnVubmVyLl90aW1lQnVmZmVyTWFyZ2luKSB7XG4gICAgICAgICAgICAvLyB1cGRhdGUgdGhlIGVuZ2luZVxuICAgICAgICAgICAgRXZlbnRzLnRyaWdnZXIocnVubmVyLCAnYmVmb3JlVXBkYXRlJywgZXZlbnQpO1xuICAgICAgICAgICAgRW5naW5lLnVwZGF0ZShlbmdpbmUsIGVuZ2luZURlbHRhKTtcbiAgICAgICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2FmdGVyVXBkYXRlJywgZXZlbnQpO1xuXG4gICAgICAgICAgICAvLyBjb25zdW1lIHRpbWUgc2ltdWxhdGVkIGZyb20gYnVmZmVyXG4gICAgICAgICAgICBydW5uZXIudGltZUJ1ZmZlciAtPSBlbmdpbmVEZWx0YTtcbiAgICAgICAgICAgIHVwZGF0ZUNvdW50ICs9IDE7XG5cbiAgICAgICAgICAgIC8vIGZpbmQgZWxhcHNlZCB0aW1lIGR1cmluZyB0aGlzIHRpY2tcbiAgICAgICAgICAgIHZhciBlbGFwc2VkVGltZVRvdGFsID0gQ29tbW9uLm5vdygpIC0gdGlja1N0YXJ0VGltZSxcbiAgICAgICAgICAgICAgICBlbGFwc2VkVGltZVVwZGF0ZXMgPSBDb21tb24ubm93KCkgLSB1cGRhdGVTdGFydFRpbWUsXG4gICAgICAgICAgICAgICAgZWxhcHNlZE5leHRFc3RpbWF0ZSA9IGVsYXBzZWRUaW1lVG90YWwgKyBSdW5uZXIuX2VsYXBzZWROZXh0RXN0aW1hdGUgKiBlbGFwc2VkVGltZVVwZGF0ZXMgLyB1cGRhdGVDb3VudDtcblxuICAgICAgICAgICAgLy8gZGVmZXIgdXBkYXRlcyBpZiBvdmVyIHBlcmZvcm1hbmNlIGJ1ZGdldHMgZm9yIHRoaXMgZnJhbWVcbiAgICAgICAgICAgIGlmICh1cGRhdGVDb3VudCA+PSBtYXhVcGRhdGVzIHx8IGVsYXBzZWROZXh0RXN0aW1hdGUgPiBydW5uZXIubWF4RnJhbWVUaW1lKSB7XG4gICAgICAgICAgICAgICAgcnVubmVyLmxhc3RVcGRhdGVzRGVmZXJyZWQgPSBNYXRoLnJvdW5kKE1hdGgubWF4KDAsIChydW5uZXIudGltZUJ1ZmZlciAvIGVuZ2luZURlbHRhKSAtIFJ1bm5lci5fdGltZUJ1ZmZlck1hcmdpbikpO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLy8gdHJhY2sgdGltaW5nIG1ldHJpY3NcbiAgICAgICAgZW5naW5lLnRpbWluZy5sYXN0VXBkYXRlc1BlckZyYW1lID0gdXBkYXRlQ291bnQ7XG5cbiAgICAgICAgLy8gdGljayBldmVudHMgYWZ0ZXIgdXBkYXRlXG4gICAgICAgIEV2ZW50cy50cmlnZ2VyKHJ1bm5lciwgJ2FmdGVyVGljaycsIGV2ZW50KTtcblxuICAgICAgICAvLyBzaG93IHVzZWZ1bCB3YXJuaW5ncyBpZiBuZWVkZWRcbiAgICAgICAgaWYgKHJ1bm5lci5mcmFtZURlbHRhSGlzdG9yeS5sZW5ndGggPj0gMTAwKSB7XG4gICAgICAgICAgICBpZiAocnVubmVyLmxhc3RVcGRhdGVzRGVmZXJyZWQgJiYgTWF0aC5yb3VuZChydW5uZXIuZnJhbWVEZWx0YSAvIGVuZ2luZURlbHRhKSA+IG1heFVwZGF0ZXMpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2Fybk9uY2UoJ01hdHRlci5SdW5uZXI6IHJ1bm5lciByZWFjaGVkIHJ1bm5lci5tYXhVcGRhdGVzLCBzZWUgZG9jcy4nKTtcbiAgICAgICAgICAgIH0gZWxzZSBpZiAocnVubmVyLmxhc3RVcGRhdGVzRGVmZXJyZWQpIHtcbiAgICAgICAgICAgICAgICBDb21tb24ud2Fybk9uY2UoJ01hdHRlci5SdW5uZXI6IHJ1bm5lciByZWFjaGVkIHJ1bm5lci5tYXhGcmFtZVRpbWUsIHNlZSBkb2NzLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAodHlwZW9mIHJ1bm5lci5pc0ZpeGVkICE9PSAndW5kZWZpbmVkJykge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuT25jZSgnTWF0dGVyLlJ1bm5lcjogcnVubmVyLmlzRml4ZWQgaXMgbm93IHJlZHVuZGFudCwgc2VlIGRvY3MuJyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChydW5uZXIuZGVsdGFNaW4gfHwgcnVubmVyLmRlbHRhTWF4KSB7XG4gICAgICAgICAgICAgICAgQ29tbW9uLndhcm5PbmNlKCdNYXR0ZXIuUnVubmVyOiBydW5uZXIuZGVsdGFNaW4gYW5kIHJ1bm5lci5kZWx0YU1heCB3ZXJlIHJlbW92ZWQsIHNlZSBkb2NzLicpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZiAocnVubmVyLmZwcyAhPT0gMCkge1xuICAgICAgICAgICAgICAgIENvbW1vbi53YXJuT25jZSgnTWF0dGVyLlJ1bm5lcjogcnVubmVyLmZwcyB3YXMgcmVwbGFjZWQgYnkgcnVubmVyLmRlbHRhLCBzZWUgZG9jcy4nKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBFbmRzIGV4ZWN1dGlvbiBvZiBgUnVubmVyLnJ1bmAgb24gdGhlIGdpdmVuIGBydW5uZXJgIGJ5IGNhbmNlbGluZyB0aGUgZnJhbWUgbG9vcC5cbiAgICAgKiBBbHRlcm5hdGl2ZWx5IHRvIHRlbXBvcmFyaWx5IHBhdXNlIHRoZSBydW5uZXIsIHNlZSBgcnVubmVyLmVuYWJsZWRgLlxuICAgICAqIEBtZXRob2Qgc3RvcFxuICAgICAqIEBwYXJhbSB7cnVubmVyfSBydW5uZXJcbiAgICAgKi9cbiAgICBSdW5uZXIuc3RvcCA9IGZ1bmN0aW9uKHJ1bm5lcikge1xuICAgICAgICBSdW5uZXIuX2NhbmNlbE5leHRGcmFtZShydW5uZXIpO1xuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBTY2hlZHVsZXMgdGhlIGBjYWxsYmFja2Agb24gdGhpcyBgcnVubmVyYCBmb3IgdGhlIG5leHQgYW5pbWF0aW9uIGZyYW1lLlxuICAgICAqIEBwcml2YXRlXG4gICAgICogQG1ldGhvZCBfb25OZXh0RnJhbWVcbiAgICAgKiBAcGFyYW0ge3J1bm5lcn0gcnVubmVyXG4gICAgICogQHBhcmFtIHtmdW5jdGlvbn0gY2FsbGJhY2tcbiAgICAgKiBAcmV0dXJuIHtudW1iZXJ9IGZyYW1lUmVxdWVzdElkXG4gICAgICovXG4gICAgUnVubmVyLl9vbk5leHRGcmFtZSA9IGZ1bmN0aW9uKHJ1bm5lciwgY2FsbGJhY2spIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUpIHtcbiAgICAgICAgICAgIHJ1bm5lci5mcmFtZVJlcXVlc3RJZCA9IHdpbmRvdy5yZXF1ZXN0QW5pbWF0aW9uRnJhbWUoY2FsbGJhY2spO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKCdNYXR0ZXIuUnVubmVyOiBtaXNzaW5nIHJlcXVpcmVkIGdsb2JhbCB3aW5kb3cucmVxdWVzdEFuaW1hdGlvbkZyYW1lLicpO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHJ1bm5lci5mcmFtZVJlcXVlc3RJZDtcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICogQ2FuY2VscyB0aGUgbGFzdCBjYWxsYmFjayBzY2hlZHVsZWQgYnkgYFJ1bm5lci5fb25OZXh0RnJhbWVgIG9uIHRoaXMgYHJ1bm5lcmAuXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAbWV0aG9kIF9jYW5jZWxOZXh0RnJhbWVcbiAgICAgKiBAcGFyYW0ge3J1bm5lcn0gcnVubmVyXG4gICAgICovXG4gICAgUnVubmVyLl9jYW5jZWxOZXh0RnJhbWUgPSBmdW5jdGlvbihydW5uZXIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiB3aW5kb3cgIT09ICd1bmRlZmluZWQnICYmIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZSkge1xuICAgICAgICAgICAgd2luZG93LmNhbmNlbEFuaW1hdGlvbkZyYW1lKHJ1bm5lci5mcmFtZVJlcXVlc3RJZCk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoJ01hdHRlci5SdW5uZXI6IG1pc3NpbmcgcmVxdWlyZWQgZ2xvYmFsIHdpbmRvdy5jYW5jZWxBbmltYXRpb25GcmFtZS4nKTtcbiAgICAgICAgfVxuICAgIH07XG5cbiAgICAvKipcbiAgICAgKiBSZXR1cm5zIHRoZSBtZWFuIG9mIHRoZSBnaXZlbiBudW1iZXJzLlxuICAgICAqIEBtZXRob2QgX21lYW5cbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwYXJhbSB7TnVtYmVyW119IHZhbHVlc1xuICAgICAqIEByZXR1cm4ge051bWJlcn0gdGhlIG1lYW4gb2YgZ2l2ZW4gdmFsdWVzLlxuICAgICAqL1xuICAgIHZhciBfbWVhbiA9IGZ1bmN0aW9uKHZhbHVlcykge1xuICAgICAgICB2YXIgcmVzdWx0ID0gMCxcbiAgICAgICAgICAgIHZhbHVlc0xlbmd0aCA9IHZhbHVlcy5sZW5ndGg7XG5cbiAgICAgICAgZm9yICh2YXIgaSA9IDA7IGkgPCB2YWx1ZXNMZW5ndGg7IGkgKz0gMSkge1xuICAgICAgICAgICAgcmVzdWx0ICs9IHZhbHVlc1tpXTtcbiAgICAgICAgfVxuXG4gICAgICAgIHJldHVybiAocmVzdWx0IC8gdmFsdWVzTGVuZ3RoKSB8fCAwO1xuICAgIH07XG5cbiAgICAvKlxuICAgICpcbiAgICAqICBFdmVudHMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgKiBGaXJlZCBvbmNlIGF0IHRoZSBzdGFydCBvZiB0aGUgYnJvd3NlciBmcmFtZSwgYmVmb3JlIGFueSBlbmdpbmUgdXBkYXRlcy5cbiAgICAqXG4gICAgKiBAZXZlbnQgYmVmb3JlVGlja1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgb25jZSBhdCB0aGUgc3RhcnQgb2YgdGhlIGJyb3dzZXIgZnJhbWUsIGFmdGVyIGBiZWZvcmVUaWNrYC5cbiAgICAqXG4gICAgKiBAZXZlbnQgdGlja1xuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgb25jZSBhdCB0aGUgZW5kIG9mIHRoZSBicm93c2VyIGZyYW1lLCBhZnRlciBgYmVmb3JlVGlja2AsIGB0aWNrYCBhbmQgYWZ0ZXIgYW55IGVuZ2luZSB1cGRhdGVzLlxuICAgICpcbiAgICAqIEBldmVudCBhZnRlclRpY2tcbiAgICAqIEBwYXJhbSB7fSBldmVudCBBbiBldmVudCBvYmplY3RcbiAgICAqIEBwYXJhbSB7bnVtYmVyfSBldmVudC50aW1lc3RhbXAgVGhlIGVuZ2luZS50aW1pbmcudGltZXN0YW1wIG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50LnNvdXJjZSBUaGUgc291cmNlIG9iamVjdCBvZiB0aGUgZXZlbnRcbiAgICAqIEBwYXJhbSB7fSBldmVudC5uYW1lIFRoZSBuYW1lIG9mIHRoZSBldmVudFxuICAgICovXG5cbiAgICAvKipcbiAgICAqIEZpcmVkIGJlZm9yZSBlYWNoIGFuZCBldmVyeSBlbmdpbmUgdXBkYXRlIGluIHRoaXMgYnJvd3NlciBmcmFtZSAoaWYgYW55KS4gXG4gICAgKiBUaGVyZSBtYXkgYmUgbXVsdGlwbGUgZW5naW5lIHVwZGF0ZSBjYWxscyBwZXIgYnJvd3NlciBmcmFtZSAob3Igbm9uZSkgZGVwZW5kaW5nIG9uIGZyYW1lcmF0ZSBhbmQgdGltZXN0ZXAgZGVsdGEuXG4gICAgKlxuICAgICogQGV2ZW50IGJlZm9yZVVwZGF0ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qKlxuICAgICogRmlyZWQgYWZ0ZXIgZWFjaCBhbmQgZXZlcnkgZW5naW5lIHVwZGF0ZSBpbiB0aGlzIGJyb3dzZXIgZnJhbWUgKGlmIGFueSkuIFxuICAgICogVGhlcmUgbWF5IGJlIG11bHRpcGxlIGVuZ2luZSB1cGRhdGUgY2FsbHMgcGVyIGJyb3dzZXIgZnJhbWUgKG9yIG5vbmUpIGRlcGVuZGluZyBvbiBmcmFtZXJhdGUgYW5kIHRpbWVzdGVwIGRlbHRhLlxuICAgICpcbiAgICAqIEBldmVudCBhZnRlclVwZGF0ZVxuICAgICogQHBhcmFtIHt9IGV2ZW50IEFuIGV2ZW50IG9iamVjdFxuICAgICogQHBhcmFtIHtudW1iZXJ9IGV2ZW50LnRpbWVzdGFtcCBUaGUgZW5naW5lLnRpbWluZy50aW1lc3RhbXAgb2YgdGhlIGV2ZW50XG4gICAgKiBAcGFyYW0ge30gZXZlbnQuc291cmNlIFRoZSBzb3VyY2Ugb2JqZWN0IG9mIHRoZSBldmVudFxuICAgICogQHBhcmFtIHt9IGV2ZW50Lm5hbWUgVGhlIG5hbWUgb2YgdGhlIGV2ZW50XG4gICAgKi9cblxuICAgIC8qXG4gICAgKlxuICAgICogIFByb3BlcnRpZXMgRG9jdW1lbnRhdGlvblxuICAgICpcbiAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGZpeGVkIHRpbWVzdGVwIHNpemUgdXNlZCBmb3IgYEVuZ2luZS51cGRhdGVgIGNhbGxzIGluIG1pbGxpc2Vjb25kcywga25vd24gYXMgYGRlbHRhYC5cbiAgICAgKiBcbiAgICAgKiBUaGlzIHZhbHVlIGlzIHJlY29tbWVuZGVkIHRvIGJlIGAxMDAwIC8gNjBgIG1zIG9yIHNtYWxsZXIgKGkuZS4gZXF1aXZhbGVudCB0byBhdCBsZWFzdCA2MGh6KS5cbiAgICAgKiBcbiAgICAgKiBTbWFsbGVyIGBkZWx0YWAgdmFsdWVzIHByb3ZpZGUgaGlnaGVyIHF1YWxpdHkgcmVzdWx0cyBhdCB0aGUgY29zdCBvZiBwZXJmb3JtYW5jZS5cbiAgICAgKiBcbiAgICAgKiBZb3Ugc2hvdWxkIHVzdWFsbHkgYXZvaWQgY2hhbmdpbmcgYGRlbHRhYCBkdXJpbmcgcnVubmluZywgb3RoZXJ3aXNlIHF1YWxpdHkgbWF5IGJlIGFmZmVjdGVkLiBcbiAgICAgKiBcbiAgICAgKiBGb3Igc21vb3RoZXIgZnJhbWUgcGFjaW5nIGNob29zZSBhIGBkZWx0YWAgdGhhdCBpcyBhbiBldmVuIG11bHRpcGxlIG9mIGVhY2ggZGlzcGxheSBGUFMgeW91IHRhcmdldCwgaS5lLiBgMTAwMCAvIChuICogZnBzKWAgYXMgdGhpcyBoZWxwcyBkaXN0cmlidXRlIGFuIGVxdWFsIG51bWJlciBvZiB1cGRhdGVzIG92ZXIgZWFjaCBkaXNwbGF5IGZyYW1lLlxuICAgICAqIFxuICAgICAqIEZvciBleGFtcGxlIHdpdGggYSA2MCBIeiBgZGVsdGFgIGkuZS4gYDEwMDAgLyA2MGAgdGhlIHJ1bm5lciB3aWxsIG9uIGF2ZXJhZ2UgcGVyZm9ybSBvbmUgdXBkYXRlIHBlciBmcmFtZSBvbiBkaXNwbGF5cyBydW5uaW5nIDYwIEZQUyBhbmQgb25lIHVwZGF0ZSBldmVyeSB0d28gZnJhbWVzIG9uIGRpc3BsYXlzIHJ1bm5pbmcgMTIwIEZQUywgZXRjLlxuICAgICAqIFxuICAgICAqIFdoZXJlIGFzIGUuZy4gdXNpbmcgYSAyNDAgSHogYGRlbHRhYCBpLmUuIGAxMDAwIC8gMjQwYCB0aGUgcnVubmVyIHdpbGwgb24gYXZlcmFnZSBwZXJmb3JtIGZvdXIgdXBkYXRlcyBwZXIgZnJhbWUgb24gZGlzcGxheXMgcnVubmluZyA2MCBGUFMgYW5kIHR3byB1cGRhdGVzIHBlciBmcmFtZSBvbiBkaXNwbGF5cyBydW5uaW5nIDEyMCBGUFMsIGV0Yy5cbiAgICAgKiBcbiAgICAgKiBUaGVyZWZvcmUgYFJ1bm5lci5ydW5gIHdpbGwgY2FsbCBtdWx0aXBsZSBlbmdpbmUgdXBkYXRlcyAob3Igbm9uZSkgYXMgbmVlZGVkIHRvIHNpbXVsYXRlIHRoZSB0aW1lIGVsYXBzZWQgYmV0d2VlbiBicm93c2VyIGZyYW1lcy4gXG4gICAgICogXG4gICAgICogSW4gcHJhY3RpY2UgdGhlIG51bWJlciBvZiB1cGRhdGVzIGluIGFueSBwYXJ0aWN1bGFyIGZyYW1lIG1heSBiZSByZXN0cmljdGVkIHRvIHJlc3BlY3QgdGhlIHJ1bm5lcidzIHBlcmZvcm1hbmNlIGJ1ZGdldHMuIFRoZXNlIGFyZSBzcGVjaWZpZWQgYnkgYHJ1bm5lci5tYXhGcmFtZVRpbWVgIGFuZCBgcnVubmVyLm1heFVwZGF0ZXNgLCBzZWUgdGhvc2UgcHJvcGVydGllcyBmb3IgZGV0YWlscy5cbiAgICAgKiBcbiAgICAgKiBAcHJvcGVydHkgZGVsdGFcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCAxMDAwIC8gNjBcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgZmxhZyB0aGF0IGNhbiBiZSB0b2dnbGVkIHRvIGVuYWJsZSBvciBkaXNhYmxlIHRpY2sgY2FsbHMgb24gdGhpcyBydW5uZXIsIHRoZXJlZm9yZSBwYXVzaW5nIGVuZ2luZSB1cGRhdGVzIGFuZCBldmVudHMgd2hpbGUgdGhlIHJ1bm5lciBsb29wIHJlbWFpbnMgcnVubmluZy5cbiAgICAgKlxuICAgICAqIEBwcm9wZXJ0eSBlbmFibGVkXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIFRoZSBhY2N1bXVsYXRlZCB0aW1lIGVsYXBzZWQgdGhhdCBoYXMgeWV0IHRvIGJlIHNpbXVsYXRlZCBpbiBtaWxsaXNlY29uZHMuXG4gICAgICogVGhpcyB2YWx1ZSBpcyBjbGFtcGVkIHdpdGhpbiBjZXJ0YWluIGxpbWl0cyAoc2VlIGBSdW5uZXIudGlja2AgY29kZSkuXG4gICAgICpcbiAgICAgKiBAcHJpdmF0ZVxuICAgICAqIEBwcm9wZXJ0eSB0aW1lQnVmZmVyXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIG1lYXN1cmVkIHRpbWUgZWxhcHNlZCBiZXR3ZWVuIHRoZSBsYXN0IHR3byBicm93c2VyIGZyYW1lcyBtZWFzdXJlZCBpbiBtaWxsaXNlY29uZHMuXG4gICAgICogVGhpcyBpcyB1c2VmdWwgZS5nLiB0byBlc3RpbWF0ZSB0aGUgY3VycmVudCBicm93c2VyIEZQUyB1c2luZyBgMTAwMCAvIHJ1bm5lci5mcmFtZURlbHRhYC5cbiAgICAgKlxuICAgICAqIEByZWFkb25seVxuICAgICAqIEBwcm9wZXJ0eSBmcmFtZURlbHRhXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBFbmFibGVzIGF2ZXJhZ2luZyB0byBzbW9vdGggZnJhbWUgcmF0ZSBtZWFzdXJlbWVudHMgYW5kIHRoZXJlZm9yZSBzdGFiaWxpc2UgcGxheSByYXRlLlxuICAgICAqXG4gICAgICogQHByb3BlcnR5IGZyYW1lRGVsdGFTbW9vdGhpbmdcbiAgICAgKiBAdHlwZSBib29sZWFuXG4gICAgICogQGRlZmF1bHQgdHJ1ZVxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogUm91bmRzIG1lYXN1cmVkIGJyb3dzZXIgZnJhbWUgZGVsdGEgdG8gdGhlIG5lYXJlc3QgMSBIei5cbiAgICAgKiBUaGlzIG9wdGlvbiBjYW4gaGVscCBzbW9vdGggZnJhbWUgcmF0ZSBtZWFzdXJlbWVudHMgYW5kIHNpbXBsaWZ5IGhhbmRsaW5nIGhhcmR3YXJlIHRpbWluZyBkaWZmZXJlbmNlcyBlLmcuIDU5Ljk0SHogYW5kIDYwSHogZGlzcGxheXMuXG4gICAgICogRm9yIGJlc3QgcmVzdWx0cyB5b3Ugc2hvdWxkIGFsc28gcm91bmQgeW91ciBgcnVubmVyLmRlbHRhYCBlcXVpdmFsZW50IHRvIHRoZSBuZWFyZXN0IDEgSHouXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgZnJhbWVEZWx0YVNuYXBwaW5nXG4gICAgICogQHR5cGUgYm9vbGVhblxuICAgICAqIEBkZWZhdWx0IHRydWVcbiAgICAgKi9cblxuICAgIC8qKlxuICAgICAqIEEgcGVyZm9ybWFuY2UgYnVkZ2V0IHRoYXQgbGltaXRzIGV4ZWN1dGlvbiB0aW1lIGFsbG93ZWQgZm9yIHRoaXMgcnVubmVyIHBlciBicm93c2VyIGZyYW1lIGluIG1pbGxpc2Vjb25kcy5cbiAgICAgKiBcbiAgICAgKiBUbyBjYWxjdWxhdGUgdGhlIGVmZmVjdGl2ZSBicm93c2VyIEZQUyBhdCB3aGljaCB0aGlzIHRocm90dGxlIGlzIGFwcGxpZWQgdXNlIGAxMDAwIC8gcnVubmVyLm1heEZyYW1lVGltZWAuXG4gICAgICogXG4gICAgICogVGhpcyBwZXJmb3JtYW5jZSBidWRnZXQgaXMgaW50ZW5kZWQgdG8gaGVscCBtYWludGFpbiBicm93c2VyIGludGVyYWN0aXZpdHkgYW5kIGhlbHAgaW1wcm92ZSBmcmFtZXJhdGUgcmVjb3ZlcnkgZHVyaW5nIHRlbXBvcmFyeSBoaWdoIENQVSB1c2FnZS5cbiAgICAgKiBcbiAgICAgKiBUaGlzIGJ1ZGdldCBvbmx5IGNvdmVycyB0aGUgbWVhc3VyZWQgdGltZSBlbGFwc2VkIGV4ZWN1dGluZyB0aGUgZnVuY3Rpb25zIGNhbGxlZCBpbiB0aGUgc2NvcGUgb2YgdGhlIHJ1bm5lciB0aWNrLCBpbmNsdWRpbmcgYEVuZ2luZS51cGRhdGVgIGFuZCBpdHMgcmVsYXRlZCB1c2VyIGV2ZW50IGNhbGxiYWNrcy5cbiAgICAgKiBcbiAgICAgKiBZb3UgbWF5IGFsc28gcmVkdWNlIHRoaXMgYnVkZ2V0IHRvIGFsbG93IGZvciBhbnkgc2lnbmlmaWNhbnQgYWRkaXRpb25hbCBwcm9jZXNzaW5nIHlvdSBwZXJmb3JtIG9uIHRoZSBzYW1lIHRocmVhZCBvdXRzaWRlIHRoZSBzY29wZSBvZiB0aGlzIHJ1bm5lciB0aWNrLCBlLmcuIHJlbmRlcmluZyB0aW1lLlxuICAgICAqIFxuICAgICAqIFNlZSBhbHNvIGBydW5uZXIubWF4VXBkYXRlc2AuXG4gICAgICpcbiAgICAgKiBAcHJvcGVydHkgbWF4RnJhbWVUaW1lXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMTAwMCAvIDMwXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBBbiBvcHRpb25hbCBsaW1pdCBmb3IgbWF4aW11bSBlbmdpbmUgdXBkYXRlIGNvdW50IGFsbG93ZWQgcGVyIGZyYW1lIHRpY2sgaW4gYWRkaXRpb24gdG8gYHJ1bm5lci5tYXhGcmFtZVRpbWVgLlxuICAgICAqIFxuICAgICAqIFVubGVzcyB5b3Ugc2V0IGEgdmFsdWUgaXQgaXMgYXV0b21hdGljYWxseSBjaG9zZW4gYmFzZWQgb24gYHJ1bm5lci5kZWx0YWAgYW5kIGBydW5uZXIubWF4RnJhbWVUaW1lYC5cbiAgICAgKiBcbiAgICAgKiBTZWUgYWxzbyBgcnVubmVyLm1heEZyYW1lVGltZWAuXG4gICAgICogXG4gICAgICogQHByb3BlcnR5IG1heFVwZGF0ZXNcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbiAgICAvKipcbiAgICAgKiBUaGUgdGltZXN0YW1wIG9mIHRoZSBsYXN0IGNhbGwgdG8gYFJ1bm5lci50aWNrYCB1c2VkIHRvIG1lYXN1cmUgYGZyYW1lRGVsdGFgLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcHJvcGVydHkgdGltZUxhc3RUaWNrXG4gICAgICogQHR5cGUgbnVtYmVyXG4gICAgICogQGRlZmF1bHQgMFxuICAgICAqL1xuXG4gICAgLyoqXG4gICAgICogVGhlIGlkIG9mIHRoZSBsYXN0IGNhbGwgdG8gYFJ1bm5lci5fb25OZXh0RnJhbWVgLlxuICAgICAqXG4gICAgICogQHByaXZhdGVcbiAgICAgKiBAcHJvcGVydHkgZnJhbWVSZXF1ZXN0SWRcbiAgICAgKiBAdHlwZSBudW1iZXJcbiAgICAgKiBAZGVmYXVsdCBudWxsXG4gICAgICovXG5cbn0pKCk7XG5cblxuLyoqKi8gfSksXG4vKiAyOCAqL1xuLyoqKi8gKGZ1bmN0aW9uKG1vZHVsZSwgZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXykge1xuXG4vKipcbiogVGhpcyBtb2R1bGUgaGFzIG5vdyBiZWVuIHJlcGxhY2VkIGJ5IGBNYXR0ZXIuQ29sbGlzaW9uYC5cbipcbiogQWxsIHVzYWdlIHNob3VsZCBiZSBtaWdyYXRlZCB0byBgTWF0dGVyLkNvbGxpc2lvbmAuXG4qIEZvciBiYWNrLWNvbXBhdGliaWxpdHkgcHVycG9zZXMgdGhpcyBtb2R1bGUgd2lsbCByZW1haW4gZm9yIGEgc2hvcnQgdGVybSBhbmQgdGhlbiBsYXRlciByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2UuXG4qXG4qIFRoZSBgTWF0dGVyLlNBVGAgbW9kdWxlIGNvbnRhaW5zIG1ldGhvZHMgZm9yIGRldGVjdGluZyBjb2xsaXNpb25zIHVzaW5nIHRoZSBTZXBhcmF0aW5nIEF4aXMgVGhlb3JlbS5cbipcbiogQGNsYXNzIFNBVFxuKiBAZGVwcmVjYXRlZFxuKi9cblxudmFyIFNBVCA9IHt9O1xuXG5tb2R1bGUuZXhwb3J0cyA9IFNBVDtcblxudmFyIENvbGxpc2lvbiA9IF9fd2VicGFja19yZXF1aXJlX18oOCk7XG52YXIgQ29tbW9uID0gX193ZWJwYWNrX3JlcXVpcmVfXygwKTtcbnZhciBkZXByZWNhdGVkID0gQ29tbW9uLmRlcHJlY2F0ZWQ7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIERldGVjdCBjb2xsaXNpb24gYmV0d2VlbiB0d28gYm9kaWVzIHVzaW5nIHRoZSBTZXBhcmF0aW5nIEF4aXMgVGhlb3JlbS5cbiAgICAgKiBAZGVwcmVjYXRlZCByZXBsYWNlZCBieSBDb2xsaXNpb24uY29sbGlkZXNcbiAgICAgKiBAbWV0aG9kIGNvbGxpZGVzXG4gICAgICogQHBhcmFtIHtib2R5fSBib2R5QVxuICAgICAqIEBwYXJhbSB7Ym9keX0gYm9keUJcbiAgICAgKiBAcmV0dXJuIHtjb2xsaXNpb259IGNvbGxpc2lvblxuICAgICAqL1xuICAgIFNBVC5jb2xsaWRlcyA9IGZ1bmN0aW9uKGJvZHlBLCBib2R5Qikge1xuICAgICAgICByZXR1cm4gQ29sbGlzaW9uLmNvbGxpZGVzKGJvZHlBLCBib2R5Qik7XG4gICAgfTtcblxuICAgIGRlcHJlY2F0ZWQoU0FULCAnY29sbGlkZXMnLCAnU0FULmNvbGxpZGVzIOKepCByZXBsYWNlZCBieSBDb2xsaXNpb24uY29sbGlkZXMnKTtcblxufSkoKTtcblxuXG4vKioqLyB9KSxcbi8qIDI5ICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGUgYE1hdHRlci5TdmdgIG1vZHVsZSBjb250YWlucyBtZXRob2RzIGZvciBjb252ZXJ0aW5nIFNWRyBpbWFnZXMgaW50byBhbiBhcnJheSBvZiB2ZWN0b3IgcG9pbnRzLlxuKlxuKiBUbyB1c2UgdGhpcyBtb2R1bGUgeW91IGFsc28gbmVlZCB0aGUgU1ZHUGF0aFNlZyBwb2x5ZmlsbDogaHR0cHM6Ly9naXRodWIuY29tL3Byb2dlcnMvcGF0aHNlZ1xuKlxuKiBTZWUgdGhlIGluY2x1ZGVkIHVzYWdlIFtleGFtcGxlc10oaHR0cHM6Ly9naXRodWIuY29tL2xpYWJydS9tYXR0ZXItanMvdHJlZS9tYXN0ZXIvZXhhbXBsZXMpLlxuKlxuKiBAY2xhc3MgU3ZnXG4qL1xuXG52YXIgU3ZnID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gU3ZnO1xuXG52YXIgQm91bmRzID0gX193ZWJwYWNrX3JlcXVpcmVfXygxKTtcbnZhciBDb21tb24gPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDApO1xuXG4oZnVuY3Rpb24oKSB7XG5cbiAgICAvKipcbiAgICAgKiBDb252ZXJ0cyBhbiBTVkcgcGF0aCBpbnRvIGFuIGFycmF5IG9mIHZlY3RvciBwb2ludHMuXG4gICAgICogSWYgdGhlIGlucHV0IHBhdGggZm9ybXMgYSBjb25jYXZlIHNoYXBlLCB5b3UgbXVzdCBkZWNvbXBvc2UgdGhlIHJlc3VsdCBpbnRvIGNvbnZleCBwYXJ0cyBiZWZvcmUgdXNlLlxuICAgICAqIFNlZSBgQm9kaWVzLmZyb21WZXJ0aWNlc2Agd2hpY2ggcHJvdmlkZXMgc3VwcG9ydCBmb3IgdGhpcy5cbiAgICAgKiBOb3RlIHRoYXQgdGhpcyBmdW5jdGlvbiBpcyBub3QgZ3VhcmFudGVlZCB0byBzdXBwb3J0IGNvbXBsZXggcGF0aHMgKHN1Y2ggYXMgdGhvc2Ugd2l0aCBob2xlcykuXG4gICAgICogWW91IG11c3QgbG9hZCB0aGUgYHBhdGhzZWcuanNgIHBvbHlmaWxsIG9uIG5ld2VyIGJyb3dzZXJzLlxuICAgICAqIEBtZXRob2QgcGF0aFRvVmVydGljZXNcbiAgICAgKiBAcGFyYW0ge1NWR1BhdGhFbGVtZW50fSBwYXRoXG4gICAgICogQHBhcmFtIHtOdW1iZXJ9IFtzYW1wbGVMZW5ndGg9MTVdXG4gICAgICogQHJldHVybiB7VmVjdG9yW119IHBvaW50c1xuICAgICAqL1xuICAgIFN2Zy5wYXRoVG9WZXJ0aWNlcyA9IGZ1bmN0aW9uKHBhdGgsIHNhbXBsZUxlbmd0aCkge1xuICAgICAgICBpZiAodHlwZW9mIHdpbmRvdyAhPT0gJ3VuZGVmaW5lZCcgJiYgISgnU1ZHUGF0aFNlZycgaW4gd2luZG93KSkge1xuICAgICAgICAgICAgQ29tbW9uLndhcm4oJ1N2Zy5wYXRoVG9WZXJ0aWNlczogU1ZHUGF0aFNlZyBub3QgZGVmaW5lZCwgYSBwb2x5ZmlsbCBpcyByZXF1aXJlZC4nKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8vIGh0dHBzOi8vZ2l0aHViLmNvbS93b3V0L3N2Zy50b3BvbHkuanMvYmxvYi9tYXN0ZXIvc3ZnLnRvcG9seS5qc1xuICAgICAgICB2YXIgaSwgaWwsIHRvdGFsLCBwb2ludCwgc2VnbWVudCwgc2VnbWVudHMsIFxuICAgICAgICAgICAgc2VnbWVudHNRdWV1ZSwgbGFzdFNlZ21lbnQsIFxuICAgICAgICAgICAgbGFzdFBvaW50LCBzZWdtZW50SW5kZXgsIHBvaW50cyA9IFtdLFxuICAgICAgICAgICAgbHgsIGx5LCBsZW5ndGggPSAwLCB4ID0gMCwgeSA9IDA7XG5cbiAgICAgICAgc2FtcGxlTGVuZ3RoID0gc2FtcGxlTGVuZ3RoIHx8IDE1O1xuXG4gICAgICAgIHZhciBhZGRQb2ludCA9IGZ1bmN0aW9uKHB4LCBweSwgcGF0aFNlZ1R5cGUpIHtcbiAgICAgICAgICAgIC8vIGFsbCBvZGQtbnVtYmVyZWQgcGF0aCB0eXBlcyBhcmUgcmVsYXRpdmUgZXhjZXB0IFBBVEhTRUdfQ0xPU0VQQVRIICgxKVxuICAgICAgICAgICAgdmFyIGlzUmVsYXRpdmUgPSBwYXRoU2VnVHlwZSAlIDIgPT09IDEgJiYgcGF0aFNlZ1R5cGUgPiAxO1xuXG4gICAgICAgICAgICAvLyB3aGVuIHRoZSBsYXN0IHBvaW50IGRvZXNuJ3QgZXF1YWwgdGhlIGN1cnJlbnQgcG9pbnQgYWRkIHRoZSBjdXJyZW50IHBvaW50XG4gICAgICAgICAgICBpZiAoIWxhc3RQb2ludCB8fCBweCAhPSBsYXN0UG9pbnQueCB8fCBweSAhPSBsYXN0UG9pbnQueSkge1xuICAgICAgICAgICAgICAgIGlmIChsYXN0UG9pbnQgJiYgaXNSZWxhdGl2ZSkge1xuICAgICAgICAgICAgICAgICAgICBseCA9IGxhc3RQb2ludC54O1xuICAgICAgICAgICAgICAgICAgICBseSA9IGxhc3RQb2ludC55O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGx4ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgbHkgPSAwO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIHZhciBwb2ludCA9IHtcbiAgICAgICAgICAgICAgICAgICAgeDogbHggKyBweCxcbiAgICAgICAgICAgICAgICAgICAgeTogbHkgKyBweVxuICAgICAgICAgICAgICAgIH07XG5cbiAgICAgICAgICAgICAgICAvLyBzZXQgbGFzdCBwb2ludFxuICAgICAgICAgICAgICAgIGlmIChpc1JlbGF0aXZlIHx8ICFsYXN0UG9pbnQpIHtcbiAgICAgICAgICAgICAgICAgICAgbGFzdFBvaW50ID0gcG9pbnQ7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgcG9pbnRzLnB1c2gocG9pbnQpO1xuXG4gICAgICAgICAgICAgICAgeCA9IGx4ICsgcHg7XG4gICAgICAgICAgICAgICAgeSA9IGx5ICsgcHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH07XG5cbiAgICAgICAgdmFyIGFkZFNlZ21lbnRQb2ludCA9IGZ1bmN0aW9uKHNlZ21lbnQpIHtcbiAgICAgICAgICAgIHZhciBzZWdUeXBlID0gc2VnbWVudC5wYXRoU2VnVHlwZUFzTGV0dGVyLnRvVXBwZXJDYXNlKCk7XG5cbiAgICAgICAgICAgIC8vIHNraXAgcGF0aCBlbmRzXG4gICAgICAgICAgICBpZiAoc2VnVHlwZSA9PT0gJ1onKSBcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIC8vIG1hcCBzZWdtZW50IHRvIHggYW5kIHlcbiAgICAgICAgICAgIHN3aXRjaCAoc2VnVHlwZSkge1xuXG4gICAgICAgICAgICBjYXNlICdNJzpcbiAgICAgICAgICAgIGNhc2UgJ0wnOlxuICAgICAgICAgICAgY2FzZSAnVCc6XG4gICAgICAgICAgICBjYXNlICdDJzpcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICAgICAgeCA9IHNlZ21lbnQueDtcbiAgICAgICAgICAgICAgICB5ID0gc2VnbWVudC55O1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgY2FzZSAnSCc6XG4gICAgICAgICAgICAgICAgeCA9IHNlZ21lbnQueDtcbiAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgIGNhc2UgJ1YnOlxuICAgICAgICAgICAgICAgIHkgPSBzZWdtZW50Lnk7XG4gICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGFkZFBvaW50KHgsIHksIHNlZ21lbnQucGF0aFNlZ1R5cGUpO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8vIGVuc3VyZSBwYXRoIGlzIGFic29sdXRlXG4gICAgICAgIFN2Zy5fc3ZnUGF0aFRvQWJzb2x1dGUocGF0aCk7XG5cbiAgICAgICAgLy8gZ2V0IHRvdGFsIGxlbmd0aFxuICAgICAgICB0b3RhbCA9IHBhdGguZ2V0VG90YWxMZW5ndGgoKTtcblxuICAgICAgICAvLyBxdWV1ZSBzZWdtZW50c1xuICAgICAgICBzZWdtZW50cyA9IFtdO1xuICAgICAgICBmb3IgKGkgPSAwOyBpIDwgcGF0aC5wYXRoU2VnTGlzdC5udW1iZXJPZkl0ZW1zOyBpICs9IDEpXG4gICAgICAgICAgICBzZWdtZW50cy5wdXNoKHBhdGgucGF0aFNlZ0xpc3QuZ2V0SXRlbShpKSk7XG5cbiAgICAgICAgc2VnbWVudHNRdWV1ZSA9IHNlZ21lbnRzLmNvbmNhdCgpO1xuXG4gICAgICAgIC8vIHNhbXBsZSB0aHJvdWdoIHBhdGhcbiAgICAgICAgd2hpbGUgKGxlbmd0aCA8IHRvdGFsKSB7XG4gICAgICAgICAgICAvLyBnZXQgc2VnbWVudCBhdCBwb3NpdGlvblxuICAgICAgICAgICAgc2VnbWVudEluZGV4ID0gcGF0aC5nZXRQYXRoU2VnQXRMZW5ndGgobGVuZ3RoKTtcbiAgICAgICAgICAgIHNlZ21lbnQgPSBzZWdtZW50c1tzZWdtZW50SW5kZXhdO1xuXG4gICAgICAgICAgICAvLyBuZXcgc2VnbWVudFxuICAgICAgICAgICAgaWYgKHNlZ21lbnQgIT0gbGFzdFNlZ21lbnQpIHtcbiAgICAgICAgICAgICAgICB3aGlsZSAoc2VnbWVudHNRdWV1ZS5sZW5ndGggJiYgc2VnbWVudHNRdWV1ZVswXSAhPSBzZWdtZW50KVxuICAgICAgICAgICAgICAgICAgICBhZGRTZWdtZW50UG9pbnQoc2VnbWVudHNRdWV1ZS5zaGlmdCgpKTtcblxuICAgICAgICAgICAgICAgIGxhc3RTZWdtZW50ID0gc2VnbWVudDtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gYWRkIHBvaW50cyBpbiBiZXR3ZWVuIHdoZW4gY3VydmluZ1xuICAgICAgICAgICAgLy8gVE9ETzogYWRhcHRpdmUgc2FtcGxpbmdcbiAgICAgICAgICAgIHN3aXRjaCAoc2VnbWVudC5wYXRoU2VnVHlwZUFzTGV0dGVyLnRvVXBwZXJDYXNlKCkpIHtcblxuICAgICAgICAgICAgY2FzZSAnQyc6XG4gICAgICAgICAgICBjYXNlICdUJzpcbiAgICAgICAgICAgIGNhc2UgJ1MnOlxuICAgICAgICAgICAgY2FzZSAnUSc6XG4gICAgICAgICAgICBjYXNlICdBJzpcbiAgICAgICAgICAgICAgICBwb2ludCA9IHBhdGguZ2V0UG9pbnRBdExlbmd0aChsZW5ndGgpO1xuICAgICAgICAgICAgICAgIGFkZFBvaW50KHBvaW50LngsIHBvaW50LnksIDApO1xuICAgICAgICAgICAgICAgIGJyZWFrO1xuXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIGluY3JlbWVudCBieSBzYW1wbGUgdmFsdWVcbiAgICAgICAgICAgIGxlbmd0aCArPSBzYW1wbGVMZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvLyBhZGQgcmVtYWluaW5nIHNlZ21lbnRzIG5vdCBwYXNzZWQgYnkgc2FtcGxpbmdcbiAgICAgICAgZm9yIChpID0gMCwgaWwgPSBzZWdtZW50c1F1ZXVlLmxlbmd0aDsgaSA8IGlsOyArK2kpXG4gICAgICAgICAgICBhZGRTZWdtZW50UG9pbnQoc2VnbWVudHNRdWV1ZVtpXSk7XG5cbiAgICAgICAgcmV0dXJuIHBvaW50cztcbiAgICB9O1xuXG4gICAgU3ZnLl9zdmdQYXRoVG9BYnNvbHV0ZSA9IGZ1bmN0aW9uKHBhdGgpIHtcbiAgICAgICAgLy8gaHR0cDovL3Bocm9nei5uZXQvY29udmVydC1zdmctcGF0aC10by1hbGwtYWJzb2x1dGUtY29tbWFuZHNcbiAgICAgICAgLy8gQ29weXJpZ2h0IChjKSBHYXZpbiBLaXN0bmVyXG4gICAgICAgIC8vIGh0dHA6Ly9waHJvZ3oubmV0L2pzL19SZXVzZUxpY2Vuc2UudHh0XG4gICAgICAgIC8vIE1vZGlmaWNhdGlvbnM6IHRpZHkgZm9ybWF0dGluZyBhbmQgbmFtaW5nXG4gICAgICAgIHZhciB4MCwgeTAsIHgxLCB5MSwgeDIsIHkyLCBzZWdzID0gcGF0aC5wYXRoU2VnTGlzdCxcbiAgICAgICAgICAgIHggPSAwLCB5ID0gMCwgbGVuID0gc2Vncy5udW1iZXJPZkl0ZW1zO1xuXG4gICAgICAgIGZvciAodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpIHtcbiAgICAgICAgICAgIHZhciBzZWcgPSBzZWdzLmdldEl0ZW0oaSksXG4gICAgICAgICAgICAgICAgc2VnVHlwZSA9IHNlZy5wYXRoU2VnVHlwZUFzTGV0dGVyO1xuXG4gICAgICAgICAgICBpZiAoL1tNTEhWQ1NRVEFdLy50ZXN0KHNlZ1R5cGUpKSB7XG4gICAgICAgICAgICAgICAgaWYgKCd4JyBpbiBzZWcpIHggPSBzZWcueDtcbiAgICAgICAgICAgICAgICBpZiAoJ3knIGluIHNlZykgeSA9IHNlZy55O1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBpZiAoJ3gxJyBpbiBzZWcpIHgxID0geCArIHNlZy54MTtcbiAgICAgICAgICAgICAgICBpZiAoJ3gyJyBpbiBzZWcpIHgyID0geCArIHNlZy54MjtcbiAgICAgICAgICAgICAgICBpZiAoJ3kxJyBpbiBzZWcpIHkxID0geSArIHNlZy55MTtcbiAgICAgICAgICAgICAgICBpZiAoJ3kyJyBpbiBzZWcpIHkyID0geSArIHNlZy55MjtcbiAgICAgICAgICAgICAgICBpZiAoJ3gnIGluIHNlZykgeCArPSBzZWcueDtcbiAgICAgICAgICAgICAgICBpZiAoJ3knIGluIHNlZykgeSArPSBzZWcueTtcblxuICAgICAgICAgICAgICAgIHN3aXRjaCAoc2VnVHlwZSkge1xuXG4gICAgICAgICAgICAgICAgY2FzZSAnbSc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnTW92ZXRvQWJzKHgsIHkpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnbCc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnTGluZXRvQWJzKHgsIHkpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnaCc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnTGluZXRvSG9yaXpvbnRhbEFicyh4KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3YnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0xpbmV0b1ZlcnRpY2FsQWJzKHkpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAnYyc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQ3VydmV0b0N1YmljQWJzKHgsIHksIHgxLCB5MSwgeDIsIHkyKSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3MnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0N1cnZldG9DdWJpY1Ntb290aEFicyh4LCB5LCB4MiwgeTIpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAncSc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQ3VydmV0b1F1YWRyYXRpY0Ficyh4LCB5LCB4MSwgeTEpLCBpKTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6XG4gICAgICAgICAgICAgICAgICAgIHNlZ3MucmVwbGFjZUl0ZW0ocGF0aC5jcmVhdGVTVkdQYXRoU2VnQ3VydmV0b1F1YWRyYXRpY1Ntb290aEFicyh4LCB5KSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ2EnOlxuICAgICAgICAgICAgICAgICAgICBzZWdzLnJlcGxhY2VJdGVtKHBhdGguY3JlYXRlU1ZHUGF0aFNlZ0FyY0Ficyh4LCB5LCBzZWcucjEsIHNlZy5yMiwgc2VnLmFuZ2xlLCBzZWcubGFyZ2VBcmNGbGFnLCBzZWcuc3dlZXBGbGFnKSwgaSk7XG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3onOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1onOlxuICAgICAgICAgICAgICAgICAgICB4ID0geDA7XG4gICAgICAgICAgICAgICAgICAgIHkgPSB5MDtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmIChzZWdUeXBlID09ICdNJyB8fCBzZWdUeXBlID09ICdtJykge1xuICAgICAgICAgICAgICAgIHgwID0geDtcbiAgICAgICAgICAgICAgICB5MCA9IHk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICB9O1xuXG59KSgpO1xuXG4vKioqLyB9KSxcbi8qIDMwICovXG4vKioqLyAoZnVuY3Rpb24obW9kdWxlLCBleHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKSB7XG5cbi8qKlxuKiBUaGlzIG1vZHVsZSBoYXMgbm93IGJlZW4gcmVwbGFjZWQgYnkgYE1hdHRlci5Db21wb3NpdGVgLlxuKlxuKiBBbGwgdXNhZ2Ugc2hvdWxkIGJlIG1pZ3JhdGVkIHRvIHRoZSBlcXVpdmFsZW50IGZ1bmN0aW9ucyBmb3VuZCBvbiBgTWF0dGVyLkNvbXBvc2l0ZWAuXG4qIEZvciBleGFtcGxlIGBXb3JsZC5hZGQod29ybGQsIGJvZHkpYCBub3cgYmVjb21lcyBgQ29tcG9zaXRlLmFkZCh3b3JsZCwgYm9keSlgLlxuKlxuKiBUaGUgcHJvcGVydHkgYHdvcmxkLmdyYXZpdHlgIGhhcyBiZWVuIG1vdmVkIHRvIGBlbmdpbmUuZ3Jhdml0eWAuXG4qXG4qIEZvciBiYWNrLWNvbXBhdGliaWxpdHkgcHVycG9zZXMgdGhpcyBtb2R1bGUgd2lsbCByZW1haW4gYXMgYSBkaXJlY3QgYWxpYXMgdG8gYE1hdHRlci5Db21wb3NpdGVgIGluIHRoZSBzaG9ydCB0ZXJtIGR1cmluZyBtaWdyYXRpb24uXG4qIEV2ZW50dWFsbHkgdGhpcyBhbGlhcyBtb2R1bGUgd2lsbCBiZSBtYXJrZWQgYXMgZGVwcmVjYXRlZCBhbmQgdGhlbiBsYXRlciByZW1vdmVkIGluIGEgZnV0dXJlIHJlbGVhc2UuXG4qXG4qIEBjbGFzcyBXb3JsZFxuKi9cblxudmFyIFdvcmxkID0ge307XG5cbm1vZHVsZS5leHBvcnRzID0gV29ybGQ7XG5cbnZhciBDb21wb3NpdGUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKDYpO1xudmFyIENvbW1vbiA9IF9fd2VicGFja19yZXF1aXJlX18oMCk7XG5cbihmdW5jdGlvbigpIHtcblxuICAgIC8qKlxuICAgICAqIFNlZSBhYm92ZSwgYWxpYXNlcyBmb3IgYmFjayBjb21wYXRpYmlsaXR5IG9ubHlcbiAgICAgKi9cbiAgICBXb3JsZC5jcmVhdGUgPSBDb21wb3NpdGUuY3JlYXRlO1xuICAgIFdvcmxkLmFkZCA9IENvbXBvc2l0ZS5hZGQ7XG4gICAgV29ybGQucmVtb3ZlID0gQ29tcG9zaXRlLnJlbW92ZTtcbiAgICBXb3JsZC5jbGVhciA9IENvbXBvc2l0ZS5jbGVhcjtcbiAgICBXb3JsZC5hZGRDb21wb3NpdGUgPSBDb21wb3NpdGUuYWRkQ29tcG9zaXRlO1xuICAgIFdvcmxkLmFkZEJvZHkgPSBDb21wb3NpdGUuYWRkQm9keTtcbiAgICBXb3JsZC5hZGRDb25zdHJhaW50ID0gQ29tcG9zaXRlLmFkZENvbnN0cmFpbnQ7XG5cbn0pKCk7XG5cblxuLyoqKi8gfSlcbi8qKioqKiovIF0pO1xufSk7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9