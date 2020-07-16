/** More or less a placeholder until lang selection works correctly */
export type AvailableLanguages = 'en' | 'es';

/** Available formatting options for nav link text */
export interface NavTextFormats {
  none?: boolean;
  capitalize?: boolean;
  capitalizeFirstLetter?: boolean;
}

/** Page options, converted from .md file header */
export interface NavHierarchyItem {
  linkText: string;
  route?: string;
  lang?: AvailableLanguages;
  position?: number;
  parentIndex?: boolean;
  parentPosition?: number;
  excludeSelf?: boolean;
  textFormats?: NavTextFormats;
  [key: string]: any;
}

/** Object hierarchy of nav items, later to be converted to NavListItem[] */
export interface NavHierarchy {
  [key: string]: NavHierarchyItem;
}

/** Consumed by template. */
export interface NavListItem {
  linkText: string;
  route?: string;
  position?: number;
  children?: NavListItem[];
  toggleId?: string;
}
