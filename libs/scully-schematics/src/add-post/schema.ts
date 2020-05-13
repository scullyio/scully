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
  /**
   * use a meta data template file that's data will be added to the post
   */
  metaDataFile?: string;
}
