export interface Schema {
  /**
   * add the name for the plugin
   */
  name: string;
  project: string;
  /**
   * The type of plugin
   */
  pluginType: 'router' | 'rendererHtml';
}
