import initThinky from 'thinky';

import {db as dbConfig} from '../config';

// init thinky
const thinky = initThinky(dbConfig);
const {r} = thinky;

// export
export {thinky, r};
