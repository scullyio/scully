import { registerPlugin } from '../pluginManagement/pluginRepository';

registerPlugin('fileHandler', 'html', async (raw: string) => raw, ['html']);
