'use strict';
var test = require('ava');
var humanizeUrl = require('./');

test(function (t) {
	t.assert(humanizeUrl('http://sindresorhus.com') === 'sindresorhus.com');
	t.assert(humanizeUrl(' http://sindresorhus.com ') === 'sindresorhus.com');
	t.assert(humanizeUrl('https://sindresorhus.com') === 'sindresorhus.com');
	t.assert(humanizeUrl('https://user:pass@sindresorhus.com') === 'sindresorhus.com');
	t.assert(humanizeUrl('http://www.sindresorhus.com') === 'sindresorhus.com');
	t.assert(humanizeUrl('www.sindresorhus.com') === 'sindresorhus.com');
	t.assert(humanizeUrl('http://sindresorhus.com/') === 'sindresorhus.com');
	t.assert(humanizeUrl('sindresorhus.com/') === 'sindresorhus.com');
	t.assert(humanizeUrl('http://sindresorhus.com/foo/') === 'sindresorhus.com/foo');
	t.assert(humanizeUrl('file:///Users/sindresorhus/dev/humanize-url/') === 'file:///Users/sindresorhus/dev/humanize-url');
	t.end();
});
