import { registerPlugin } from '../pluginManagement/pluginRepository';

registerPlugin('fileHandler', 'html', (raw) => raw, ['html']);
