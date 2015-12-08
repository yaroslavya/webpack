/*! Best Gaming Technology */
webpackJsonp([1],[
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	'use strict'

	//import _ from 'lodash';
	;

	var _greeter = __webpack_require__(2);

	var _greeter2 = _interopRequireDefault(_greeter);

	var _convertme = __webpack_require__(1);

	function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

	(0, _greeter2.default)("Hello");

	new _convertme.Test().doStuff();

/***/ },
/* 1 */,
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	"use strict";

	Object.defineProperty(exports, "__esModule", {
	    value: true
	});

	exports.default = function (message) {
	    document.write("message was: " + message);
	    if (false) {
	        console.log(message + " John Doe");
	    }
	};

/***/ }
]);