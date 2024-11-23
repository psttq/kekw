(self["webpackChunkkekw"] = self["webpackChunkkekw"] || []).push([["npm.parse-svg-path"],{

/***/ "./node_modules/parse-svg-path/index.js":
/*!**********************************************!*\
  !*** ./node_modules/parse-svg-path/index.js ***!
  \**********************************************/
/***/ ((module) => {


module.exports = parse

/**
 * expected argument lengths
 * @type {Object}
 */

var length = {a: 7, c: 6, h: 1, l: 2, m: 2, q: 4, s: 4, t: 2, v: 1, z: 0}

/**
 * segment pattern
 * @type {RegExp}
 */

var segment = /([astvzqmhlc])([^astvzqmhlc]*)/ig

/**
 * parse an svg path data string. Generates an Array
 * of commands where each command is an Array of the
 * form `[command, arg1, arg2, ...]`
 *
 * @param {String} path
 * @return {Array}
 */

function parse(path) {
	var data = []
	path.replace(segment, function(_, command, args){
		var type = command.toLowerCase()
		args = parseValues(args)

		// overloaded moveTo
		if (type == 'm' && args.length > 2) {
			data.push([command].concat(args.splice(0, 2)))
			type = 'l'
			command = command == 'm' ? 'l' : 'L'
		}

		while (true) {
			if (args.length == length[type]) {
				args.unshift(command)
				return data.push(args)
			}
			if (args.length < length[type]) throw new Error('malformed path data')
			data.push([command].concat(args.splice(0, length[type])))
		}
	})
	return data
}

var number = /-?[0-9]*\.?[0-9]+(?:e[-+]?\d+)?/ig

function parseValues(args) {
	var numbers = args.match(number)
	return numbers ? numbers.map(Number) : []
}


/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibnBtLnBhcnNlLXN2Zy1wYXRoLmJ1bmRsZS5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsVUFBVTtBQUNWOztBQUVBLGNBQWM7O0FBRWQ7QUFDQTtBQUNBLFVBQVU7QUFDVjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVyxRQUFRO0FBQ25CLFlBQVk7QUFDWjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsRUFBRTtBQUNGO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9rZWt3Ly4vbm9kZV9tb2R1bGVzL3BhcnNlLXN2Zy1wYXRoL2luZGV4LmpzIl0sInNvdXJjZXNDb250ZW50IjpbIlxubW9kdWxlLmV4cG9ydHMgPSBwYXJzZVxuXG4vKipcbiAqIGV4cGVjdGVkIGFyZ3VtZW50IGxlbmd0aHNcbiAqIEB0eXBlIHtPYmplY3R9XG4gKi9cblxudmFyIGxlbmd0aCA9IHthOiA3LCBjOiA2LCBoOiAxLCBsOiAyLCBtOiAyLCBxOiA0LCBzOiA0LCB0OiAyLCB2OiAxLCB6OiAwfVxuXG4vKipcbiAqIHNlZ21lbnQgcGF0dGVyblxuICogQHR5cGUge1JlZ0V4cH1cbiAqL1xuXG52YXIgc2VnbWVudCA9IC8oW2FzdHZ6cW1obGNdKShbXmFzdHZ6cW1obGNdKikvaWdcblxuLyoqXG4gKiBwYXJzZSBhbiBzdmcgcGF0aCBkYXRhIHN0cmluZy4gR2VuZXJhdGVzIGFuIEFycmF5XG4gKiBvZiBjb21tYW5kcyB3aGVyZSBlYWNoIGNvbW1hbmQgaXMgYW4gQXJyYXkgb2YgdGhlXG4gKiBmb3JtIGBbY29tbWFuZCwgYXJnMSwgYXJnMiwgLi4uXWBcbiAqXG4gKiBAcGFyYW0ge1N0cmluZ30gcGF0aFxuICogQHJldHVybiB7QXJyYXl9XG4gKi9cblxuZnVuY3Rpb24gcGFyc2UocGF0aCkge1xuXHR2YXIgZGF0YSA9IFtdXG5cdHBhdGgucmVwbGFjZShzZWdtZW50LCBmdW5jdGlvbihfLCBjb21tYW5kLCBhcmdzKXtcblx0XHR2YXIgdHlwZSA9IGNvbW1hbmQudG9Mb3dlckNhc2UoKVxuXHRcdGFyZ3MgPSBwYXJzZVZhbHVlcyhhcmdzKVxuXG5cdFx0Ly8gb3ZlcmxvYWRlZCBtb3ZlVG9cblx0XHRpZiAodHlwZSA9PSAnbScgJiYgYXJncy5sZW5ndGggPiAyKSB7XG5cdFx0XHRkYXRhLnB1c2goW2NvbW1hbmRdLmNvbmNhdChhcmdzLnNwbGljZSgwLCAyKSkpXG5cdFx0XHR0eXBlID0gJ2wnXG5cdFx0XHRjb21tYW5kID0gY29tbWFuZCA9PSAnbScgPyAnbCcgOiAnTCdcblx0XHR9XG5cblx0XHR3aGlsZSAodHJ1ZSkge1xuXHRcdFx0aWYgKGFyZ3MubGVuZ3RoID09IGxlbmd0aFt0eXBlXSkge1xuXHRcdFx0XHRhcmdzLnVuc2hpZnQoY29tbWFuZClcblx0XHRcdFx0cmV0dXJuIGRhdGEucHVzaChhcmdzKVxuXHRcdFx0fVxuXHRcdFx0aWYgKGFyZ3MubGVuZ3RoIDwgbGVuZ3RoW3R5cGVdKSB0aHJvdyBuZXcgRXJyb3IoJ21hbGZvcm1lZCBwYXRoIGRhdGEnKVxuXHRcdFx0ZGF0YS5wdXNoKFtjb21tYW5kXS5jb25jYXQoYXJncy5zcGxpY2UoMCwgbGVuZ3RoW3R5cGVdKSkpXG5cdFx0fVxuXHR9KVxuXHRyZXR1cm4gZGF0YVxufVxuXG52YXIgbnVtYmVyID0gLy0/WzAtOV0qXFwuP1swLTldKyg/OmVbLStdP1xcZCspPy9pZ1xuXG5mdW5jdGlvbiBwYXJzZVZhbHVlcyhhcmdzKSB7XG5cdHZhciBudW1iZXJzID0gYXJncy5tYXRjaChudW1iZXIpXG5cdHJldHVybiBudW1iZXJzID8gbnVtYmVycy5tYXAoTnVtYmVyKSA6IFtdXG59XG4iXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=