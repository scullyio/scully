/**
 * Scully ng-add-blog schematic
 */
export interface Schema {
  /**
   * add the title for the post
   */
  name: string;
  /**
   * define the target directory for the new post file
   */
  target?: string;
}
