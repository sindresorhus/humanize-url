/**
Humanize a URL: `https://sindresorhus.com` → `sindresorhus.com`.

@example
```
import humanizeUrl from 'humanize-url';

humanizeUrl('https://www.sindresorhus.com/');
//=> 'sindresorhus.com'
```
*/
export default function humanizeUrl(url: string): string;
