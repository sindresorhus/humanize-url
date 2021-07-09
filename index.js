import normalizeUrl from 'normalize-url';

export default function humanizeUrl(url) {
	if (typeof url !== 'string') {
		throw new TypeError('Expected a string');
	}

	return normalizeUrl(url, {stripProtocol: true});
}
