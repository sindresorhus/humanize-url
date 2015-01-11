'use strict';
var normalizeUrl = require('normalize-url');

module.exports = function (str) {
	if (typeof str !== 'string') {
		throw new TypeError('Expected a string');
	}

	return normalizeUrl(str).replace(/^(?:https?:)?\/\//, '');
};
