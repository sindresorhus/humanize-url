import test from 'ava';
import m from './';

test(t => {
	t.is(m('http://sindresorhus.com'), 'sindresorhus.com');
	t.is(m(' http://sindresorhus.com '), 'sindresorhus.com');
	t.is(m('https://sindresorhus.com'), 'sindresorhus.com');
	t.is(m('https://user:pass@sindresorhus.com'), 'sindresorhus.com');
	t.is(m('http://www.sindresorhus.com'), 'sindresorhus.com');
	t.is(m('www.sindresorhus.com'), 'sindresorhus.com');
	t.is(m('http://sindresorhus.com/'), 'sindresorhus.com');
	t.is(m('sindresorhus.com/'), 'sindresorhus.com');
	t.is(m('http://sindresorhus.com/foo/'), 'sindresorhus.com/foo');
	t.is(m('file:///Users/sindresorhus/dev/humanize-url/'), 'file:///Users/sindresorhus/dev/humanize-url');
});
