import test from 'ava';
import humanizeUrl from './index.js';

test('main', t => {
	t.is(humanizeUrl('http://sindresorhus.com'), 'sindresorhus.com');
	t.is(humanizeUrl(' http://sindresorhus.com '), 'sindresorhus.com');
	t.is(humanizeUrl('https://sindresorhus.com'), 'sindresorhus.com');
	t.is(humanizeUrl('https://user:pass@sindresorhus.com'), 'sindresorhus.com');
	t.is(humanizeUrl('http://www.sindresorhus.com'), 'sindresorhus.com');
	t.is(humanizeUrl('www.sindresorhus.com'), 'sindresorhus.com');
	t.is(humanizeUrl('http://sindresorhus.com/'), 'sindresorhus.com');
	t.is(humanizeUrl('sindresorhus.com/'), 'sindresorhus.com');
	t.is(humanizeUrl('http://sindresorhus.com/foo/'), 'sindresorhus.com/foo');
	t.is(humanizeUrl('file:///Users/sindresorhus/dev/humanize-url/'), 'file:///Users/sindresorhus/dev/humanize-url');
	t.is(humanizeUrl('https://sindresorhus.com/#foo'), 'sindresorhus.com/#foo');
});
