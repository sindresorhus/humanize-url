import {expectType} from 'tsd';
import humanizeUrl = require('.');

expectType<string>(humanizeUrl('https://www.sindresorhus.com/'));
