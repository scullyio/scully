import { registerPlugin } from '../pluginManagement/pluginRepository.js';

registerPlugin('fileHandler', 'html', async (raw: string) => raw, ['html']);
