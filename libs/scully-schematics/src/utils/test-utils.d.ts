import {SchematicTestRunner} from '@angular-devkit/schematics/testing';
export declare function setupProject(
  schematicRunner: SchematicTestRunner,
  options?:
    | string
    | {
        [key: string]: any;
      }
): Promise<import('@angular-devkit/schematics/testing').UnitTestTree>;
