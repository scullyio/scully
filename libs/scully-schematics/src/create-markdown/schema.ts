export interface Schema {
  /**
   * add the name for the module
   */
  name: string;
  /**
   * add the name for the :${slug}
   */
  slug: string;
  /**
   * The scope for the new routing module.
   */
  routingScope?: 'Child' | 'Root';
  /**
   * add the name for the source dir to store the markdown files
   */
  sourceDir?: string;
  /**
   * define the route where your post will be available
   */
  route?: string;
  project: string;
}
