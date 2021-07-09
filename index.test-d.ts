import {expectType} from 'tsd';
import humanizeUrl from './index.js';

expectType<string>(humanizeUrl('https://www.sindresorhus.com/'));
