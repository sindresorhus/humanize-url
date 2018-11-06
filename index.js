'use strict';
const normalizeUrl = require('normalize-url');

module.exports = url => {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string');
	}

	return normalizeUrl(url, {stripProtocol: true});
};
