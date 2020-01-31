import {parseAngularRoutes} from 'guess-parser';
import {join} from 'path';

const folder = join(__dirname, './src/app');

const r = parseAngularRoutes(folder).map(r => r.path);

console.table(r);
