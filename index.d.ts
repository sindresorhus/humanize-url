/**
Humanize a URL: `https://sindresorhus.com` → `sindresorhus.com`.

@example
```
import humanizeUrl = require('humanize-url');

humanizeUrl('https://www.sindresorhus.com/');
//=> 'sindresorhus.com'
```
*/
declare function humanizeUrl(url: string): string;

export = humanizeUrl;
